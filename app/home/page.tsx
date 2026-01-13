"use client";
import Link from "next/link";
import News from "./_components/News/News";
import MarqueeContent from "./_components/MarqueeContent/MarqueeContent";
import Ltnheader from "./_components/Ltnheader/Ltnheader";
import style from "./Home.module.scss";
import News2 from "./_components/News2/News2";
import BreakingNews from "./_components/Breakingnews/page";
import Swiper from "./_components/Swiper/Swiper";
import WeekNews from "./_components/Weeknews/page";
import Keyword from "./_components/Keyword/Keyword";

export default function NewBox() {
  return (
    <div>
      {/* Header */}
      <Ltnheader />
      {/* content */}
      <div className={style.content}>
        <section className={style.first_part}>
          {/* contentL */}
          <div className={style.contentL}>
            {/* 跑馬字幕 */}
            <MarqueeContent></MarqueeContent>
            {/* key_word */}
            <Keyword />
            <div className={style.main}>
              {/* 首頁大圖 */}
              <Swiper />
              {/* news2 */}
              <News2 />
            </div>

            {/* news */}
            <News />
          </div>
          {/* contentR */}
          <div className={style.contentR}>
            <BreakingNews />
            <WeekNews />
          </div>
        </section>
      </div>
    </div>
  );
}
