// "use clinet";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Weeknews.module.scss";

const listdata = [
  {
    id: 1,
    title: "不只黃金大跌！「這些貴金屬」更慘",
    href: "https://news.ltn.com.tw/news/life/breakingnews/5304192",
    time: "08:56",
    img: "https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg",
    category: "生活",
  },
  {
    id: 2,
    title: "野生嬌客湳仔溝打卡 花嘴鴨現蹤引賞鳥熱潮",
    href: "https://news.ltn.com.tw/news/life/breakingnews/5304192",
    time: "08:56",
    img: "https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg",
    category: "生活",
  },
  {
    id: 3,
    title: "野生嬌客湳仔溝打卡 花嘴鴨現蹤引賞鳥熱潮",
    href: "https://news.ltn.com.tw/news/life/breakingnews/5304192",
    time: "08:56",
    img: "https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg",
    category: "生活",
  },
  {
    id: 4,
    title: "野生嬌客湳仔溝打卡 花嘴鴨現蹤引賞鳥熱潮",
    href: "https://news.ltn.com.tw/news/life/breakingnews/5304192",
    time: "08:56",
    img: "https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg",
    category: "生活",
  },
  {
    id: 5,
    title: "野生嬌客湳仔溝打卡 花嘴鴨現蹤引賞鳥熱潮",
    href: "https://news.ltn.com.tw/news/life/breakingnews/5304192",
    time: "08:56",
    img: "https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg",
    category: "生活",
  },
];

interface ListData {
  id: number;
  title: string;
  href: string;
  time: string;
  img: string;
  category: string;
}

interface ListItemProps {
  title: string;
  href: string;
  time: string;
  img?: string;
  category: string;
}
function ListItem({ title, href, time, img, category }: ListItemProps) {
  return (
    <li>
      <Link href={href} data-desc={`P:0:${title}`} title={title}>
        <div className={`${style.ph} listS_h`}>
          <Image
            className={style.lazy_imgs_ltn}
            src="https://img.ltn.com.tw/Upload/news/600/2026/01/09/5304192_4_1.jpg"
            // src="assets/images/default.png"
            alt={title}
            title={title}
            fill
          />
        </div>
        <div className={style.tit}>
          <h3>{title}</h3>
          <p>
            <span className={style.time}>{time}</span>
            <span className={style.category}>{category}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function BreakingNews() {
  // const [data, setData] = useState<ListData[]>(listdata);
  const data = listdata;
  return (
    <>
      <div
        className={`${style.week_hot} boxTitle boxText`}
        data-desc="熱門新聞"
      >
        <Link
          className={style.caption}
          href="https://news.ltn.com.tw/list/breakingnews"
          data-desc="注目新聞"
        >
          <b>熱門新聞</b>
          <span className={style.triangle}></span>
        </Link>

        <ul className={style.content_list}>
          {data &&
            data.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                href={item.href}
                time={item.time}
                img={item.img}
                category={item.category}
              />
            ))}
        </ul>
        <Link
          href="https://news.ltn.com.tw/list/breakingnews"
          className={style.moreBtn}
          title="更多即時新聞"
        >
          更多即時新聞
        </Link>
      </div>
    </>
  );
}
