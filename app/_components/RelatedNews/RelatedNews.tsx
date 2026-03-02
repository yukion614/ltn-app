import Image from "next/image";
import style from "./RelatedNews.module.scss";

// const relatedNewsData = [
//   {
//     url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5143460",
//     title: "恭喜！蕭彤雯女兒考上台大 「繳空白申請書」拚分科她緊張失眠",
//     no: 5143460,
//     type: "breakingnews",
//     group: "breakingnews",
//     photo: "https://img.ltn.com.tw/Upload/news/600/2025/08/14/php9kRScG.jpg",
//     other: 0,
//   },
//   {
//     url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5142794",
//     title: "女學霸逆襲重返台大醫科 網封「真女神」",
//     no: 5142794,
//     type: "breakingnews",
//     group: "breakingnews",
//     photo: "https://img.ltn.com.tw/Upload/news/600/2025/08/13/5142794_1_1.jpg",
//     other: 0,
//   },
//   {
//     url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5144514",
//     title: "雄中公布今年升大學榜單 353人上頂大、72人錄取醫學系",
//     no: 5144514,
//     type: "breakingnews",
//     group: "breakingnews",
//     photo: "https://img.ltn.com.tw/Upload/news/600/2025/08/15/5144514_1_1.jpg",
//     other: 0,
//   },
//   {
//     url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5143557",
//     title: "非醫不念！個申上陽明交大電機仍成「分科戰士」他如願上榜醫學系",
//     no: 5143557,
//     type: "breakingnews",
//     group: "breakingnews",
//     photo: "https://img.ltn.com.tw/Upload/news/600/2025/08/14/5143557_1_1.jpg",
//     other: 0,
//   },
// ];

interface RelatedNewsItemProps {
  url: string;
  title: string;
  no?: number;
  type?: string;
  group?: string;
  photo?: string;
  other?: number;
}

export function RelatedNewsItem({ url, title, photo }: RelatedNewsItemProps) {
  return (
    <>
      <li>
        <a
          href={url}
          className="JQellipsis"
          title={title}
          data-desc={`T:0:${title}`}
        >
          <div className={`${style.ph} ${style.resize_imgs_ltn}`}>
            <Image
              className="lazy_imgs_ltn"
              src={
                photo
                  ? photo
                  : "http://localhost:3000/_next/image?url=https%3A%2F%2Fimg.ltn.com.tw%2FUpload%2Fnews%2F600%2F2026%2F01%2F07%2F5302781_1_1.jpg&w=128&q=75"
              }
              data-src={photo}
              alt={title}
              title={title}
              width={200}
              height={100}
            />
          </div>
          <h3 className={style.tit}>{title}</h3>
        </a>
      </li>
    </>
  );
}

export default function RelatedNews({
  relate_news,
}: {
  relate_news: RelatedNewsItemProps[];
}) {
  return (
    <>
      <div className={style.caption}>相關新聞</div>
      <div className={style.whitecon}>
        <ul className={`${style.related} boxTitle`} data-desc="相關新聞">
          {relate_news &&
            relate_news.map((item) => (
              <RelatedNewsItem
                key={item.no}
                url={item.url}
                title={item.title}
                photo={item.photo}
              />
            ))}
        </ul>
      </div>
    </>
  );
}
