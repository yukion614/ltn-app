import { useEffect } from "react";

export const useMarquee = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const root = ref.current as HTMLElement;
    if (!root) return;

    const firstUl = root.querySelector("ul") as HTMLUListElement;
    const scrollBox = firstUl?.parentElement as HTMLElement;
    // 基本樣式初始化
    scrollBox.style.overflow = "hidden";

    if (!firstUl) return;

    const items = firstUl.children;
    if (items.length === 0) return;

    // 取得單個 li 高度與原始數量
    const liHeight = (items[0] as HTMLElement).offsetHeight;
    const liCount = items.length;

    //  自動複製第一個元素到最後，解決「滑不動」的問題
    const cloneItem = items[0].cloneNode(true) as HTMLElement;
    firstUl.appendChild(cloneItem);

    let requestID: number;
    let timeoutID: NodeJS.Timeout;
    let currentScroll = 0;
    let currentIndex = 0;
    const speed = 2;

    let isPaused = false;

    const next_btn = root.querySelector('[class*="down"]') as HTMLElement;

    // 監聽滑鼠移入：停止動畫與計時
    const handleMouseEnter = () => {
      isPaused = true;
      cancelAnimationFrame(requestID);
      clearTimeout(timeoutID);
    };

    // 監聽滑鼠移出：重啟動畫
    const handleMouseLeave = () => {
      isPaused = false;
      timeoutID = setTimeout(scrollToOneLine, 500); // 離開後 0.5 秒繼續
    };
    // 監聽掛載
    scrollBox.addEventListener("mouseenter", handleMouseEnter);
    scrollBox.addEventListener("mouseleave", handleMouseLeave);

    const up = () => {
      cancelAnimationFrame(requestID); // 防止連點加速
      const nextScroll = (currentIndex - 1) * liHeight;

      const frame = () => {
        currentScroll -= speed;

        if (currentScroll > nextScroll) {
          scrollBox.scrollTop = currentScroll;
          requestID = requestAnimationFrame(frame);
        } else {
          scrollBox.scrollTop = nextScroll;
          currentScroll = nextScroll;
          // scrollBox.scrollTop = (currentIndex - 1) * liHeight;
          currentIndex--;
          if (currentIndex < 0) {
            // 如果到頂了跳到分身前一筆
            currentIndex = liCount - 1;
            currentScroll = currentIndex * liHeight;
            scrollBox.scrollTop = currentScroll;
          }
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    const down = (isAuto = false) => {
      cancelAnimationFrame(requestID); // 防止連點加速
      const nextScroll = (currentIndex + 1) * liHeight;

      const frame = () => {
        currentScroll += speed;

        if (currentScroll < nextScroll) {
          scrollBox.scrollTop = currentScroll;
          requestID = requestAnimationFrame(frame);
        } else {
          currentScroll = nextScroll;
          scrollBox.scrollTop = (currentIndex + 1) * liHeight;
          currentIndex++;

          // 1. 無縫循環：如果捲到最後一個（分身），瞬間跳回第一個
          if (currentIndex >= liCount) {
            currentIndex = 0;
            currentScroll = 0;
            scrollBox.scrollTop = 0;
          }

          //  2. 只有在自動跑 (isAuto) 且沒被暫停時，才預約下一次捲動
          if (isAuto && !isPaused) {
            timeoutID = setTimeout(scrollToOneLine, 2000);
          }
        }
      };
      requestID = requestAnimationFrame(frame);
    };

    //按鈕事件
    const up_btn = root.children[1] as HTMLElement;
    const onUpClick = () => {
      clearTimeout(timeoutID);
      down(true);
    };
    up_btn.addEventListener("mousedown", onUpClick);
    const down_btn = root.children[2] as HTMLElement;
    const onDownClick = () => {
      clearTimeout(timeoutID);
      up();
    };
    down_btn.addEventListener("mousedown", up);

    const scrollToOneLine = () => {
      clearTimeout(timeoutID);
      down(true); // 傳入 true 代表是自動跑
    };

    // 啟動第一次定時
    timeoutID = setTimeout(scrollToOneLine, 2000);

    return () => {
      cancelAnimationFrame(requestID);
      clearTimeout(timeoutID);
      // 清理：移除複製出的元素
      if (firstUl.contains(cloneItem)) {
        firstUl.removeChild(cloneItem);
      }
      scrollBox.removeEventListener("mouseenter", handleMouseEnter);
      scrollBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);
};
