import style from "./pointnews.module.scss";

export default function PointNews() {
  return (
    <div
      className={`${style.pointnews} ${style.boxTitle}`}
      data-desc="熱門新聞"
    >
      <p className={style.w300_tit}>熱門新聞</p>
      <a
        href="//news.ltn.com.tw/news/business/breakingnews/5341421"
        className={style.JQellipsisD}
        data-desc="T:0:抓到了！非法賣晶片設備給中芯  應材慘吞近80億天價罰單"
        title="抓到了！非法賣晶片設備給中芯  應材慘吞近80億天價罰單"
      >
        抓到了！非法賣晶片設備給中芯 應材慘吞近80億天價罰單
      </a>
      <a
        href="//news.ltn.com.tw/news/def/breakingnews/5341537"
        className={style.JQellipsisD}
        data-desc="T:1:國防祕辛》馬防部重啟240重砲射擊 竟只有中將指揮官及小兵兩人在場"
        title="國防祕辛》馬防部重啟240重砲射擊 竟只有中將指揮官及小兵兩人在場"
      >
        國防祕辛》馬防部重啟240重砲射擊 竟只有中將指揮官及小兵兩人在場
      </a>
      <a
        href="//news.ltn.com.tw/news/entertainment/breakingnews/5341717"
        className={style.JQellipsisD}
        data-desc="T:2:賈永婕反擊了！走訪義光教會挨轟「正事不幹」 3字直球回嗆汪潔民"
        title="賈永婕反擊了！走訪義光教會挨轟「正事不幹」 3字直球回嗆汪潔民"
      >
        賈永婕反擊了！走訪義光教會挨轟「正事不幹」 3字直球回嗆汪潔民
      </a>
      <a
        href="//news.ltn.com.tw/news/politics/breakingnews/5341440"
        className={style.JQellipsisD}
        data-desc="T:3:賴清德特赦老婦林劉龍子 考量照顧身障子逾50年重擔悲劇"
        title="賴清德特赦老婦林劉龍子 考量照顧身障子逾50年重擔悲劇"
      >
        賴清德特赦老婦林劉龍子 考量照顧身障子逾50年重擔悲劇
      </a>
      <a
        href="//news.ltn.com.tw/news/business/breakingnews/5341993"
        className={style.JQellipsisD}
        data-desc="T:4:威力彩頭獎2注各得6.77億  大樂透春節大紅包開出24組"
        title="威力彩頭獎2注各得6.77億  大樂透春節大紅包開出24組"
      >
        威力彩頭獎2注各得6.77億 大樂透春節大紅包開出24組
      </a>
    </div>
  );
}
