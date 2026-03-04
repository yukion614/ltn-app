import Image from "next/image";
import style from "./NewaEventsCard.module.scss";

interface NewsEventsCardProps {
  title: string;
  year: number;
  month: number;
  image?: string;
}

export default function NewsEventsCard({
  title,
  year,
  month,
  image,
}: NewsEventsCardProps) {
  return (
    <a
      href="https://news.ltn.com.tw/topic/%E5%8F%B0%E8%82%A1"
      target="_blank"
      data-desc={`P:0:${title}`}
      title={title}
      className={style.card}
    >
      <div className={`${style.ph} ${style.resize_imgs_ltn}`}>
        <Image
          className="lazy_imgs_ltn"
          src={
            image ? image : "https://www.ltn.com.tw/assets/images/default.png"
          }
          width={300}
          height={200}
          alt={title ? title : "新聞事件圖片"}
          title={title}
        />
      </div>
      <div className={style.tit}>
        <h3>{title}</h3>
        <span className={style.year}>{year}</span>
        <span className={style.month}>{month < 10 ? `0${month}` : month}</span>
      </div>
    </a>
  );
}
