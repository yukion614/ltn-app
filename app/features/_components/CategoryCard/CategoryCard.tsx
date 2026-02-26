import Image from "next/image";
import style from "./CategoryCard.module.scss";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <a
      className={style.linkItem}
      href="https://features.ltn.com.tw/GSAT/2026"
      target="_blank"
      data-desc={`P:2:${title}`}
      title={title}
    >
      <div className="ph resize_imgs_ltn">
        <Image
          className="lazy_imgs_ltn"
          src={image}
          data-src={image}
          alt={title}
          title={title}
          width={300}
          height={200}
          style={{ width: "100%", height: "auto", marginLeft: 0 }}
        />
      </div>
      <div className={style.Topic}>
        <h3>{title}</h3>
      </div>
    </a>
  );
}
