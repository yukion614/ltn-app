import Image from "next/image";
import style from "./paper.module.scss";
// import RelatedNews from "@/app/_components/RelatedNews/RelatedNews";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import Banner from "@/app/_components/Banner/Banner";
// import AppE1121 from "@/app/_components/AppE1121/AppE1121";
import ArticlePhoto from "@/app/_components/MainArticleLayout/_components/ArticlePhoto/ArticlePhoto";

import MainArti


const contentData = {
  article_info: {
    id: "1745359",
    channel: "AST",
    year: "2026",
    category: "breakingnews",
    title:
      "中英對照讀新聞》Trump Privately Weighs Quitting USMCA Trade Pact He Negotiated 川普私下評估退出他談判達成的美墨加貿易協定",
    pub_time: "2025-02-26 14:30",
    url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5145341",
    author: "◎魏國金",
    main_photo: {
      src: "https://img.ltn.com.tw/Upload/news/600/2026/03/03/104.jpg",
      caption: "川普私下評估退出美墨加協定。",
      source: "川普私下評估退出美墨加協定。（路透）",
    },
  },
  content:
    "<p>President Donald Trump is privately musing about exiting the North American trade pact, people familiar with the matter said, injecting further uncertainty about the deal’s future into pivotal renegotiations involving the US, Canada and Mexico.</p><p>知情者透露，川普總統正私下考慮退出北美貿易協定，為攸關協議未來、涉及美國、加拿大與墨西哥的關鍵重新談判，注入不確定性。</p><p>The president has asked aides why he shouldn’t withdraw from the agreement, which he signed during his first term, though he has stopped short of flatly signaling that he will do so, according to the source.</p><p>消息人士說，總統已詢問幕僚，為什麼他不應該退出這份他在第一任期時簽署的協議，雖然他並沒有斷然表明他將如此做。</p><p>The US-Mexico-Canada Agreement is set for a mandatory review before a possible extension on July 1, a process that was once expected to be routine but has transformed into a contentious negotiation. Trump has demanded additional trade concessions from Ottawa and Mexico City and pressured them to address unrelated issues, including migration, drug trafficking and defense.</p><p>美墨加協議在7月1日可能續簽前將進行強制性審查，該程序曾被預期是例行公事，現在卻已變成唇槍舌戰的談判。川普已要求渥太華與墨西哥市額外的貿易讓步，並施壓他們解決無關的議題，包括移民、毒品走私與防衛。</p>",
  dictionary: {
    title: "新聞辭典",
    items: [
      {
        phrase: "stop short of",
        meaning: "並沒有、險些",
        example:
          "The Federal Reserve stopped short of offering new monetary stimulus.",
        translation: "聯準會沒有提出新的貨幣刺激措施。",
      },
      {
        phrase: "set for",
        meaning: "預定、設置",
        example: "The meeting is set for Monday.",
        translation: "會議預定週一舉行。",
      },
    ],
  },
  crumbs: [
    {
      url: "https://features.ltn.com.tw/",
      cname: "專區",
    },
    {
      url: "https://features.ltn.com.tw/english",
      cname: "中英對照讀新聞",
    },
  ],
  related_news: [
    {
      url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5143460",
      title: "恭喜！蕭彤雯女兒考上台大 「繳空白申請書」拚分科她緊張失眠",
      no: 5143460,
      type: "breakingnews",
      group: "breakingnews",
      photo: "https://img.ltn.com.tw/Upload/news/600/2025/08/14/php9kRScG.jpg",
      other: 0,
    },
    {
      url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5142794",
      title: "女學霸逆襲重返台大醫科 網封「真女神」",
      no: 5142794,
      type: "breakingnews",
      group: "breakingnews",
      photo:
        "https://img.ltn.com.tw/Upload/news/600/2025/08/13/5142794_1_1.jpg",
      other: 0,
    },
    {
      url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5144514",
      title: "雄中公布今年升大學榜單 353人上頂大、72人錄取醫學系",
      no: 5144514,
      type: "breakingnews",
      group: "breakingnews",
      photo:
        "https://img.ltn.com.tw/Upload/news/600/2025/08/15/5144514_1_1.jpg",
      other: 0,
    },
    {
      url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5143557",
      title: "非醫不念！個申上陽明交大電機仍成「分科戰士」他如願上榜醫學系",
      no: 5143557,
      type: "breakingnews",
      group: "breakingnews",
      photo:
        "https://img.ltn.com.tw/Upload/news/600/2025/08/14/5143557_1_1.jpg",
      other: 0,
    },
  ],
};

export default function PapperPage() {
  const article = contentData.article_info;
  const dictionary = contentData.dictionary;
  return (
    <>
      <Breadcrumbs items={contentData.crumbs} />
      <Banner
        image="https://features.ltn.com.tw/assets/images/language/english.jpg"
        alt="中英對照讀新聞"
        title="中英對照讀新聞"
        url="https://features.ltn.com.tw/english"
      />
      <div className="whitecon">
        <h1 className={style.h1}>{contentData.article_info.title}</h1>

        {/* 分享列 */}
        <div className="function boxTitle" data-desc="分享列">
          <a className="sharefb" data-desc="facebook" title="facebook"></a>
          <a className="sharetwitter" data-desc="twitter" title="twitter"></a>
          <a className="shareline" data-desc="line" title="line"></a>
          <a className="print" title="列印" data-desc="列印"></a>
          <a
            title="字體縮放"
            className={style.fontsize}
            data-desc="字體縮放"
          ></a>
        </div>
        {/* 內文 */}
        <div className={`${style.text} boxTitle boxText`} data-desc="內容頁">
          {/* <!-- 第一張大圖 --> */}
          <ArticlePhoto
            src={article.main_photo.src}
            caption={article.main_photo.caption}
            source={article.main_photo.source}
          />
          {/* 時間 */}
          <span className={style.time}>{article.pub_time}</span>

          <p>{contentData.article_info.author}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: contentData.content,
            }}
          />

          {/* 新聞辭典 */}
          <p></p>
          {dictionary && (
            <>
              <h4>{dictionary.title}</h4>
              <p></p>
              {dictionary.items.map((item, index) => {
                return (
                  <p key={index}>
                    {`${item.phrase}：${item.meaning}例句：${item.example}${item.translation}`}
                  </p>
                );
              })}
            </>
          )}

          <AppE1121 />

          {/* 相關新聞 */}
          <RelatedNews relate_news={contentData.related_news} />
        </div>
      </div>
    </>
  );
}
