"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./News.module.scss";

const newsdata = [
  {
    id: 1,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 2,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 3,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 4,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 5,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 6,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 7,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 8,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 9,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
  {
    id: 10,
    title: "搶救飛官辛柏毅 連環照明彈亮遍海面",
    time: "08:31",
    breakingnews_number: "5302781",
    imgUrl: "https://img.ltn.com.tw/Upload/news/600/2026/01/07/5302781_1_1.jpg",
  },
];

interface NewsData {
  id: number;
  title: string;
  time?: string;
  breakingnews_number: string;
  imgUrl: string;
}

interface NewBoxProps {
  title: string;
  time?: string;
  breakingnews_number: string;
  imgUrl?: string;
}

function NewsBox({ title, time, breakingnews_number, imgUrl }: NewBoxProps) {
  return (
    <li>
      <Link
        href={`https://health.ltn.com.tw/article/breakingnews/${breakingnews_number}`}
        data-no={breakingnews_number}
        data-desc={`P:1:${title}`}
        target="_self"
        title={title}
        className={style.link}
      >
        {/* <div className="ph listS_w"> */}
        <Image
          src={imgUrl ? imgUrl : ""}
          alt={time ? time : ""}
          width={100}
          height={100}
          className={`${style.ph}`}
        />
        {/* </div> */}
        <div className={style.tit}>
          <h3>{title}</h3>
          <p>
            <span className="time">{time}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function News() {
  const [data, setData] = useState<NewsData[]>(newsdata);
  return (
    <div className={`${style.news10} boxTitle`} data-desc="首頁八則">
      <div className={style.caption} data-desc="編輯精選">
        <b>編輯精選</b>
      </div>
      <ul className={style.content_list}>
        {data.length > 0 &&
          data.map((item) => (
            <NewsBox
              key={item.id}
              title={item.title}
              time={item.time}
              breakingnews_number={item.breakingnews_number}
              imgUrl={item.imgUrl}
            />
          ))}
      </ul>
    </div>
  );
}
