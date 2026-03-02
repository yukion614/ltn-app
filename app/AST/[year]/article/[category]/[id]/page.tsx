import Image from "next/image";
import style from "./article.module.scss";
import RelatedNews from "@/app/_components/RelatedNews/RelatedNews";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import Banner from "../../../../_components/Banner/Banner";

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
    main_photo: {
      src: "https://img.ltn.com.tw/Upload/news/600/2025/08/15/5145341_1_1.jpg",
      caption: "圖片的描述文字或版權宣告",
    },
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

export default function Article() {
  return (
    <>
      <Breadcrumbs items={contentData.crumbs} />
      <Banner
        src="https://features.ltn.com.tw/assets/images/AST/features_2025.jpg"
        alt="2025大學分科測驗"
        title="2025大學分科測驗"
      />
      <div className={style.whitecon}>
        <h1>{contentData.article_info.title}</h1>

        {/* 分享列 */}
        <div className={`${style.function} boxTitle`} data-desc="分享列">
          <a
            className={style.sharefb}
            data-desc="facebook"
            title="facebook"
          ></a>
          <a
            className={style.sharetwitter}
            data-desc="twitter"
            title="twitter"
          ></a>
          <a className={style.shareline} data-desc="line" title="line"></a>
          <a className={style.print} title="列印" data-desc="列印"></a>
          <a
            title="字體縮放"
            className={style.fontsize}
            data-desc="字體縮放"
          ></a>
        </div>

        <div className={`${style.text} boxTitle boxText`} data-desc="內容頁">
          {/* <!-- 第一張大圖 --> */}
          <div className={`${style.photo} boxTitle`} data-desc="圖片">
            <a
              className="image-popup-vertical-fit"
              href={contentData.article_info.main_photo.src}
              title={contentData.article_info.main_photo.caption}
              data-desc="點圖放大"
            >
              <Image
                className="lazy_imgs_ltn resize_imgs_ltn"
                width={800}
                height={400}
                src={contentData.article_info.main_photo.src}
                data-src={contentData.article_info.main_photo.src}
                alt={contentData.article_info.main_photo.caption}
                title={contentData.article_info.main_photo.caption}
              />
            </a>
            <p>蔡依璇外型亮眼，還有一副好歌喉。（永慶高中提供）</p>
          </div>
          {/* <!-- 時間 --> */}
          <span className={style.time}>2025/08/15 18:22</span>
          {/* <!-- 內文 --> */}
          {/* 第一段文章 */}
          {/* 在 React 的設計中，dangerouslySetInnerHTML 接收的是一個物件，而 __html 就是這個物件中固定的 Key 名稱。 */}
          <div
            dangerouslySetInnerHTML={{
              __html: contentData.content.split("</p>")[0] + "</p>",
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
              __html: contentData.content.split("</p>").slice(1).join("</p>"),
            }}
          />

          <div className={`${style.photo} boxTitle`} data-desc="圖片">
            <a
              className="image-popup-vertical-fit"
              href="https://img.ltn.com.tw/Upload/news/600/2025/08/15/5145341_2_1.jpg"
              title="蔡依璇（中）多次在永慶高中歌唱比賽奪得冠軍。（永慶高中提供）"
              data-desc="點圖放大"
            >
              <Image
                className="lazy_imgs_ltn resize_imgs_ltn"
                width={800}
                height={400}
                src="https://img.ltn.com.tw/Upload/news/600/2025/08/15/5145341_2_1.jpg"
                alt="蔡依璇（中）多次在永慶高中歌唱比賽奪得冠軍。（永慶高中提供）"
                title="蔡依璇（中）多次在永慶高中歌唱比賽奪得冠軍。（永慶高中提供）"
              />
            </a>
            <p>蔡依璇（中）多次在永慶高中歌唱比賽奪得冠軍。（永慶高中提供）</p>
          </div>
          <p className={style.appE1121}>
            不用抽 不用搶 現在用APP看新聞 保證天天中獎　
            <a
              title="點我下載APP"
              href="https://service.ltn.com.tw/app"
              target="_blank"
              className="ga_event"
              data-vars-box-title="內容頁"
              data-desc="APP載點"
              data-vars-desc="APP載點"
            >
              點我下載APP
            </a>
            　
            <a
              title="按我看活動辦法"
              href="https://drawpage.ltn.com.tw/slot_v9/"
              target="_blank"
              className="ga_event"
              data-vars-box-title="內容頁"
              data-desc="活動辦法"
              data-vars-desc="活動辦法"
            >
              按我看活動辦法
            </a>
          </p>
        </div>

        {/* 相關新聞 */}
        <RelatedNews relate_news={contentData.related_news} />
      </div>
    </>
  );
}
