import { useEffect } from "react";
export const useSwiper = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const itemsCount = el.children.length;
    //外框
    const items = el.children[0] as HTMLElement;

    let itemWidth = 0; // 提升作用域

    //pages 按鈕
    const pages = el.children[1] as HTMLElement;

    //prev btn
    const prev_btn = el.children[2] as HTMLElement;
    //next btn
    const next_btn = el.children[3] as HTMLElement;

    let requestID: number;
    let currentIndex = 0;
    let currentScroll = 0;
    const speed = 20;
    let timeoutID: NodeJS.Timeout;

    // 複製第一個元素到items裡
    const cloneItem = items.firstChild?.cloneNode(true) as HTMLElement;
    items.appendChild(cloneItem);

    // 監控尺寸變化
    const resizeObserver = new ResizeObserver(() => {
      const firstItem = items.children[0] as HTMLElement;
      if (firstItem) {
        itemWidth = firstItem.getBoundingClientRect().width; // 使用 getBoundingClientRect 抓取包含小數點的精確寬度
        // 畫面縮放時，強制重定位
        currentScroll = -(currentIndex * itemWidth);
        items.style.transform = `translateX(${currentScroll}px)`;
      }
    });
    resizeObserver.observe(el); //載入觀察對象

    //統一小白點
    const updatePagination = (index: number) => {
      const activeIndex = index >= pages.children.length ? 0 : index;
      Array.from(pages.children).forEach((el) => {
        el.classList.remove("swiper-pagination-bullet-active");
      });

      const dot = pages.children[activeIndex] as HTMLElement;
      if (dot) dot.classList.add("swiper-pagination-bullet-active");
    };

    //第一次調用
    updatePagination(currentIndex);
    //跳轉用
    const jumpTo = (targetIndex: number) => {
      clearTimeout(timeoutID); // 停止自動播放
      cancelAnimationFrame(requestID); // 停止當前動畫

      const targetScroll = -(targetIndex * itemWidth);

      // 判斷方向
      const isForward = targetScroll < currentScroll;

      const frame = () => {
        // 根據方向決定加還是減
        if (isForward) {
          currentScroll -= speed * 2; // 點擊跳轉可以快一點
          if (currentScroll <= targetScroll) currentScroll = targetScroll;
        } else {
          currentScroll += speed * 2;
          if (currentScroll >= targetScroll) currentScroll = targetScroll;
        }

        items.style.transform = `translateX(${currentScroll}px)`;

        if (currentScroll !== targetScroll) {
          requestID = requestAnimationFrame(frame);
        } else {
          // 到達目的地
          currentIndex = targetIndex;
          updatePagination(currentIndex);
          timeoutID = setTimeout(scrollToOneLine, 4000); // 重新計時
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    //賦予所有小白點事件
    Array.from(pages.children).forEach((el, index) => {
      const currentIndex = index === pages.children.length ? 0 : index;
      const pagesOnClick = () => {
        updatePagination(currentIndex);
        jumpTo(currentIndex);
      };
      el.addEventListener("mousedown", pagesOnClick);
    });

    const prev = () => {
      const firstItem = items.children[0] as HTMLElement;
      if (!firstItem) return;
      // 1. 處理邊界：如果在第一張 (0)
      if (currentIndex === 0) {
        currentIndex = items.children.length - 1;
        currentScroll = -(currentIndex * itemWidth);
      }

      // 2. 計算目標：往前撥一張
      const targetIndex = currentIndex - 1;
      const targetScroll = -(targetIndex * itemWidth);

      const frame = () => {
        // 往左撥，值會越來越大（往 0 靠近）
        currentScroll += speed;

        // 如果還沒增加到目標值，就繼續跑
        if (currentScroll < targetScroll) {
          items.style.transform = `translateX(${currentScroll}px) translateZ(0)`;
          requestID = requestAnimationFrame(frame);
        } else {
          // 3. 抵達目標
          items.style.transform = `translateX(${targetScroll}px) translateZ(0)`;
          currentScroll = targetScroll;
          currentIndex = targetIndex;

          // 更新小白點
          updatePagination(currentIndex);
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    const next = (isAuto = false) => {
      const firstItem = items.children[0] as HTMLElement;
      if (!firstItem) return;

      const nextScroll = -((currentIndex + 1) * itemWidth);
      const frame = () => {
        currentScroll -= speed;

        if (currentScroll >= nextScroll) {
          items.style.transform = `translateX(${currentScroll}px)`;
          requestID = requestAnimationFrame(frame);
        } else {
          items.style.transform = `translateX(${nextScroll}px)`;
          currentScroll = nextScroll;
          currentIndex++;
          updatePagination(currentIndex);

          if (currentIndex >= items.children.length - 1) {
            currentScroll = 0;
            items.style.transform = `translateX(${currentScroll}px)`;
            currentIndex = 0;
          }
          if (isAuto) {
            clearTimeout(timeoutID); //清除
            timeoutID = setTimeout(scrollToOneLine, 4000); //再度重新運行
          }
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    //增加事件
    const onClickNextBtn = () => {
      clearTimeout(timeoutID);
      next(true);
    };
    next_btn.addEventListener("mousedown", onClickNextBtn);

    const onClickPrevBtn = () => {
      clearTimeout(timeoutID);
      prev();
    };
    prev_btn.addEventListener("mousedown", onClickPrevBtn);
    //
    const scrollToOneLine = () => {
      clearTimeout(timeoutID);
      next(true); // 傳入 true 代表是自動跑
    };

    timeoutID = setTimeout(scrollToOneLine, 4000);
  }, [ref]);
};
