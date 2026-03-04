import style from "./ArticlePhoto.module.scss";
import Image from "next/image";

export interface PhotoProps {
  src: string;
  caption: string;
  source: string;
}

export default function ArticlePhoto({ src, caption, source }: PhotoProps) {
  return (
    <>
      <div className={`${style.photo} boxTitle`} data-desc="圖片">
        <a
          className="image-popup-vertical-fit"
          href={src}
          title={caption}
          data-desc="點圖放大"
        >
          <Image
            className="lazy_imgs_ltn resize_imgs_ltn"
            width={800}
            height={400}
            src={src}
            data-src={src}
            alt={caption}
            title={caption}
          />
        </a>
        <p>{source}</p>
      </div>
    </>
  );
}
