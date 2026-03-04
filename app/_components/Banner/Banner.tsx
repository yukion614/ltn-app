import Image from "next/image";
import style from "./Banner.module.scss";

export interface BannerProps {
  image: string;
  alt: string;
  title: string;
  url: string;
}

export default function Banner({ image, alt, title, url }: BannerProps) {
  return (
    <div className="boxTitle" data-desc="專區大圖">
      <a href={url} className={style.banner} data-desc="專區大圖" title={title}>
        {image ? (
          <Image src={image} alt={alt} title={title} width={980} height={300} />
        ) : (
          <div className="placeholder">暫無圖片</div> // 或者放一個預設圖網址
        )}
      </a>
    </div>
  );
}
