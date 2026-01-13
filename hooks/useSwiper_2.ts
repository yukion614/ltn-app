import { useEffect } from "react";
export const useSwiper_2 = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1. 直接抓軌道 items
    const items = el.querySelector("#swiperWrapper") as HTMLElement;
    const prev_btn = el.querySelector("#videoBtnPrev");
    const next_btn = el.querySelector("#videoBtnNext");

    // 這裡修正：不要在 items 裡面再找一次 swiperWrapper
    if (!items || !prev_btn || !next_btn) return;

    let itemWidth = 0;
    let requestID: number;
    let currentIndex = 0;
    let currentScroll = 0;
    const speed = 30;
    let timeoutID: NodeJS.Timeout;

    // 2. 複製節點（處理無限輪播）
    // 檢查是否已經複製過，避免重複 append
    if (items.children.length > 0 && items.children.length === 2) {
      // 假設原始資料是 2 筆
      const cloneItem = items.firstChild?.cloneNode(true) as HTMLElement;
      items.appendChild(cloneItem);
    }

    // 3. 監控尺寸並計算初始寬度
    const updateSize = () => {
      const firstItem = items.children[0] as HTMLElement;
      if (firstItem) {
        itemWidth = firstItem.getBoundingClientRect().width;
        currentScroll = -(currentIndex * itemWidth);
        items.style.transform = `translateX(${currentScroll}px)`;
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(el);
    updateSize(); // 手動先跑一次確保寬度拿到

    const prev = () => {
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
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    const next = (isAuto = false) => {
      // 停止之前的動畫防止疊加
      cancelAnimationFrame(requestID);

      const targetScroll = -((currentIndex + 1) * itemWidth);

      const frame = () => {
        currentScroll -= speed;
        if (currentScroll > targetScroll) {
          items.style.transform = `translateX(${currentScroll}px)`;
          requestID = requestAnimationFrame(frame);
        } else {
          currentScroll = targetScroll;
          currentIndex++;

          // 無限輪播邏輯：如果是最後一個（克隆的那張）
          if (currentIndex >= items.children.length - 1) {
            currentIndex = 0;
            currentScroll = 0;
          }

          items.style.transform = `translateX(${currentScroll}px)`;

          if (isAuto) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(scrollToOneLine, 6000);
          }
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    const scrollToOneLine = () => next(true);

    const onClickNextBtn = () => {
      clearTimeout(timeoutID);
      next(false);
    };

    next_btn.addEventListener("mousedown", onClickNextBtn);

    const onClickPrevBtn = () => {
      clearTimeout(timeoutID);
      prev();
    };
    prev_btn.addEventListener("mousedown", onClickPrevBtn);

    timeoutID = setTimeout(scrollToOneLine, 6000);

    return () => {
      clearTimeout(timeoutID);
      cancelAnimationFrame(requestID);
      resizeObserver.disconnect();
      next_btn.removeEventListener("mousedown", onClickNextBtn);
    };
  }, [ref]);
};
