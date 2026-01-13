"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import style from "./Swiper.module.scss";
import Link from "next/link";
import { useSwiper } from "@hooks/useSwiper";

const swiperdata = [
  {
    id: 1,
    href: "https://news.ltn.com.tw/news/world/breakingnews/5302948",
    title: "才嗆聲川普 哥倫比亞總統致電求面談",
    imgUrl:
      "https://img.ltn.com.tw/Upload/Module/index/800/2026/01/1059402233696498ecb17407.34390652.jpeg",
  },
  {
    id: 2,
    href: "https://news.ltn.com.tw/news/world/breakingnews/5302948",
    title: "才嗆聲川普 哥倫比亞總統致電求面談",
    imgUrl:
      "https://img.ltn.com.tw/Upload/Module/index/800/2026/01/226467016695f186a83cc36.69829110.jpg",
  },
  {
    id: 3,
    href: "https://news.ltn.com.tw/news/world/breakingnews/5302948",
    title: "才嗆聲川普 哥倫比亞總統致電求面談",
    imgUrl:
      "https://img.ltn.com.tw/Upload/Module/index/800/2026/01/226467016695f186a83cc36.69829110.jpg",
  },
  // {
  //   id: 4,
  //   href: "https://news.ltn.com.tw/news/world/breakingnews/5302948",
  //   title: "才嗆聲川普 哥倫比亞總統致電求面談",
  //   imgUrl:
  //     "https://img.ltn.com.tw/Upload/Module/index/800/2026/01/226467016695f186a83cc36.69829110.jpg",
  // },
  // {
  //   id: 5,
  //   href: "https://news.ltn.com.tw/news/world/breakingnews/5302948",
  //   title: "才嗆聲川普 哥倫比亞總統致電求面談",
  //   imgUrl:
  //     "https://img.ltn.com.tw/Upload/Module/index/800/2026/01/226467016695f186a83cc36.69829110.jpg",
  // },
];

interface SwiperData {
  id: number;
  href: string;
  title: string;
  imgUrl: string;
}

interface SwiperItemProps {
  href: string;
  title: string;
  imgUrl: string;
}

function SwiperItem({ href, title, imgUrl }: SwiperItemProps) {
  return (
    <>
      <Link
        className={`${style["swiper-slide"]} ${style["swiper-slide-duplicate"]}`}
        href={href}
        target="_self"
        data-no="5302948"
        data-desc={`P:0:${title}`}
        title={title}
        data-swiper-slide-index="0"
      >
        <div className={style.title}>
          <h2>{title}</h2>
        </div>
        <div className={style.ph}>
          <Image src={imgUrl} alt={title} title={title} fill />
        </div>
      </Link>
    </>
  );
}

export default function Swiper() {
  const [data, setData] = useState<SwiperData[]>(swiperdata);
  const ltn_focus = useRef<HTMLDivElement>(null);
  useSwiper(ltn_focus);
  return (
    <div
      className={`${style["swiper-container"]} ${style["swiper-A"]} ${style["boxTitle"]} ${style["swiper-container-initialized"]} ${style["swiper-container-horizontal"]}`}
      // id="ltn_focus"
      ref={ltn_focus}
      data-desc="首頁大圖"
    >
      <div
        className={`${style["swiper-wrapper"]} ${style["boxTitle"]} ${style["boxText"]}`}
        data-desc="首頁大圖"
        // style={{
        //   transform: "translate3d(-5088px, 0px, 0px)",
        //   transitionDuration: "300ms",
        // }}
      >
        {/* 輪播連接 */}
        {data &&
          data.map((item) => (
            <SwiperItem
              key={item.id}
              href={item.href}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          ))}
      </div>
      {/* <!-- 分頁 --> */}
      <div
        className={`${style["swiper-pagination"]}  ${style["pagination"]} ${style["swiper-pagination-clickable"]} ${style["swiper-pagination-bullets"]}`}
        data-desc="分頁"
      >
        {data &&
          data.map((_, index) => {
            return (
              <span
                key={index}
                className={style["swiper-pagination-bullet"]}
                tabIndex={0}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            );
          })}
      </div>
      {/* <!-- 上下頁 --> */}
      <div
        className={`${style["swiper-button-prev"]} ${style.boxInput}`}
        data-desc="上一則"
        tabIndex={0}
        role="button"
        aria-label="Previous slide"
      ></div>
      <div
        className={`${style["swiper-button-next"]} ${style.boxInput}`}
        data-desc="下一則"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
      ></div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  );
}
