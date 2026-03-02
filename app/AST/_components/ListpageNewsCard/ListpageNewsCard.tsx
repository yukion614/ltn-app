import Image from "next/image";
import style from "./ListpageNewsCard.module.scss";

interface ListpageNewsCardProps {
  title: string;
  image: string;
  date: string;
}

export default function ListpageNewsCard({
  title,
  image,
  date,
}: ListpageNewsCardProps) {
  return (
    <>
      <li className={style.item}>
        <a
          href="https://features.ltn.com.tw/AST/2025/article/breakingnews/5145341"
          className="ph"
          data-desc={`P:0:大學分科測驗放榜 美女歌神蔡依璇錄取成大政治系 - ${title}`}
          title={title}
          target="_blank"
        >
          <div className={`${style.ph} resize_imgs_ltn`}>
            <Image
              className="lazy_imgs_ltn"
              src={image}
              data-src={image}
              title={title}
              alt={title}
              width={300}
              height={200}
              style={{ height: "auto", width: "100%", marginLeft: "0px" }}
            />
          </div>
          <div className={style.tit}>
            <span>{date}</span>
            <h3>{title}</h3>
          </div>
        </a>
      </li>
    </>
  );
}
