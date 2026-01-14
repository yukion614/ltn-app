"use client";
import { useState } from "react";
import style from "./Keyword.module.scss";
import Link from "next/link";

const top_keyword = [
  {
    id: 1,
    title: "F-16V失事",
    link_href:
      "https://news.ltn.com.tw/topic/F-16V%E5%A4%B1%E4%BA%8B?utm_source=WWW&amp;utm_medium=keyword_mainphoto&amp;utm_campaign=keyword_list&amp;utm_content=F-16V%25E5%25A4%25B1%25E4%25BA%8B",
  },
  {
    id: 2,
    title: "TPASS斷炊",
    link_href:
      "https://news.ltn.com.tw/topic/TPASS?utm_source=WWW&amp;utm_medium=keyword_mainphoto&amp;utm_campaign=keyword_list&amp;utm_content=TPASS%25E6%2596%25B7%25E7%2582%258A",
  },
  {
    id: 3,
    title: "委內瑞拉",
    link_href:
      "https://news.ltn.com.tw/topic/%E7%BE%8E%E7%AA%81%E8%A5%B2%E5%A7%94%E5%85%A7%E7%91%9E%E6%8B%89?utm_source=WWW&amp;utm_medium=keyword_mainphoto&amp;utm_campaign=keyword_list&amp;utm_content=%25E5%25A7%2594%25E5%2585%25A7%25E7%2591%259E%25E6%258B%2589",
  },
];

interface top_keyword {
  id: number;
  title: string;
  link_href: string;
}

//KeyWordItem 元件
interface KeyWordItemProps {
  title: string;
  link_href: string;
}

function KeyWordItem({ title, link_href }: KeyWordItemProps) {
  return (
    <li className={style.h_kw}>
      <Link title={title} href={link_href} data-desc="營養午餐">
        {title}
      </Link>
    </li>
  );
}

export default function Keyword() {
  const [data, setData] = useState<top_keyword[]>(top_keyword);
  return (
    <>
      <div className={style.top_keywords}>
        <div className={style.top_ky_wrap} data-desc="熱搜">
          <b>熱搜</b>
          <ul>
            {data &&
              data.map((el, index) => {
                return (
                  <KeyWordItem
                    key={index}
                    title={el.title}
                    link_href={el.link_href}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
