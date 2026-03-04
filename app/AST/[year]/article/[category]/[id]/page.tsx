import ArticleWrapperLayout from "@/app/_components/ArticleWrapperLayout/ArticleWrapper";
import ArticlePhoto from "@/app/_components/ArticleWrapperLayout/_components/ArticlePhoto/ArticlePhoto";
import style from "./article.module.scss";
import AppE1121 from "@/app/_components/ArticleWrapperLayout/_components/AppE1121/AppE1121";
const contentData = {
  article_info: {
    id: "5145341",
    channel: "AST",
    year: "2025",
    category: "breakingnews",
    title: "大學分科測驗放榜 美女歌神蔡依璇錄取成大政治系",
    pub_time: "2025-02-26 14:30",
    url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5145341",
    author: "自由時報記者",
    photos: [
      {
        src: "https://img.ltn.com.tw/Upload/news/600/2025/08/15/5145341_1_1.jpg",
        caption: "圖片的描述文字或版權宣告",
        source: "蔡依璇外型亮眼，還有一副好歌喉。（永慶高中提供）",
      },
    ],
  },
  content:
    "<p>〔記者林宜樟／嘉義報導〕今年大學分科測驗放榜，嘉義縣立永慶高中表現優異，國立大學錄取率近五成，其中屢次在學校「永慶好聲音」歌唱比賽奪冠的蔡依璇，外型亮眼，歌聲悅耳動聽，錄取錄取成功大學政治系，如願考取第一志願。</p><p>蔡依璇課業學習認真，擁有一副好歌喉，多次在歌唱比賽奪冠，但她長期飽受偏頭痛折磨，仍堅持完成課業與複習，歷經5個月的身心煎熬，終於考上心中理想學校。</p><p>永慶高中校長郭春松說，學生在分科測驗錄取成功大學、中興大學、高雄大學、高雄師範大學、台南大學、嘉義大學、暨南國際大學、屏東大學、台東大學及台中教育大學等學校。</p><p>錄取中興大學企業管理系的李宥漢，因學測數學成績未達理想，而未能進入目標商管科系，但未氣餒，主動尋求師長與同儕協助，積極補強弱項，在分科測驗迎頭趕上，成功圓夢。</p><p>郭春松說，學校秉持「尊重差異、適性發展」的教育理念，學生錄取科系分布涵蓋數學理工、資訊工程、教育、中外文、觀光休閒、商管數據分析、政治學、風險管理與保險學系等多元領域，而有5位學生錄取國立嘉義大學，顯示學校與在地大學緊密連結，也呼應「深耕在地、放眼未來」的辦學理念，未來將持續深化與嘉義大學的合作，推動課程銜接與資源共享。</p>",
  crumbs: [
    {
      url: "https://features.ltn.com.tw/",
      cname: "專區",
    },
    {
      url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5145341",
      cname: "2025大學分科測驗",
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

const BannerData = {
  image: "https://features.ltn.com.tw/assets/images/AST/features_2025.jpg",
  alt: "2025大學分科測驗",
  title: "2025大學分科測驗",
  url: "https://features.ltn.com.tw/GSAT/2026",
};

export default function Page() {
  const { content, article_info, crumbs, related_news } = contentData;
  return (
    <ArticleWrapperLayout
      breadcrumbs={crumbs}
      banner={BannerData}
      article_info={article_info}
      related_news={related_news}
      content={content}
    >
      <div className={`${style.text} boxTitle boxText`} data-desc="內容頁">
        {/* <!-- 第一張大圖 --> */}
        {article_info && article_info.photos[0] ? (
          <ArticlePhoto
            src={article_info.photos[0].src}
            caption={article_info.photos[0].caption}
            source={article_info.photos[0].source}
          />
        ) : null}
        {/* 第一段文章 */}
        {/* 建議放在 div 上方，才不會干擾 dangerouslySetInnerHTML 的閱讀 */}
        {/* 在 React 的設計中，dangerouslySetInnerHTML 接收的是一個物件，而 __html 就是這個物件中固定的 Key 名稱。 */}
        <div
          dangerouslySetInnerHTML={{
            __html: content.split("</p>")[0] + "</p>",
          }}
        />
        {/* 分隔 暫不顯示 */}
        <p
          className="before_ir"
          style={{ textAlign: "center", display: "none" }}
        >
          請繼續往下閱讀...
        </p>
        <p className="after_ir" style={{ display: "none" }}></p>

        {/* 剩餘的文章 */}
        <div
          dangerouslySetInnerHTML={{
            __html: content.split("</p>").slice(1).join("</p>"),
          }}
        />
        {/* 第一張以外的圖片 */}
        {article_info && article_info.photos[1]
          ? article_info.photos
              .slice(1)
              .map((item, index) => (
                <ArticlePhoto
                  key={index}
                  src={item.src}
                  caption={item.caption}
                  source={item.source}
                />
              ))
          : null}

        <AppE1121 />
      </div>
    </ArticleWrapperLayout>
  );
}
