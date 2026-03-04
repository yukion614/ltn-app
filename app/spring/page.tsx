"use client";
import style from "./spring.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";

const list = [
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
  {
    href: "https://features.ltn.com.tw/spring/article/2026/breakingnews/5343391",
    title: "健康網》家中長輩21項警訊 網紅醫：恐認知障礙前兆",
    image:
      "https://img.ltn.com.tw/Upload/health/page/400S/2026/02/14/phpmxYbSu.jpg",
    date: "2026/02/25 07:21",
  },
];

interface SpringItemProps {
  href: string;
  title: string;
  image: string;
  date: string;
}

export function SpringItem({ href, title, image, date }: SpringItemProps) {
  return (
    <li>
      <a
        href={href}
        className={style.ph}
        data-desc={`P:0:${title}`}
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
            height={300}
            style={{ marginLeft: "0px" }}
          />
        </div>
        <div className={style.tit}>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
      </a>
    </li>
  );
}

export default function springPage() {
  const observerTarget = useRef(null);
  useEffect(() => {
    // 觀測是否進入畫面
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 只要這裡變成 true，就代表你捲到底部了
          // 抓取下一頁資料
        }
      },
      { threshold: 1.0 }, // 1.0 代表物件要 100% 出現才觸發
    );

    // 開始監控你的隱形格子
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect(); // 清除監聽
  }, [observerTarget]);

  return (
    <div className="">
      {/* 專區banner */}
      <div className="boxTitle" data-desc="專區大圖">
        <a
          href="https://features.ltn.com.tw/spring/2026"
          className="banner"
          data-desc="專區大圖"
          title="2026春節專區"
        >
          <Image
            src="https://features.ltn.com.tw/assets/images/spring/features_2026.jpg"
            alt="2026春節專區"
            title="2026春節專區"
            width={940}
            height={300}
          />
        </a>
      </div>
      {/* 分類選單 */}
      <ul
        className={`${style.newsSort} ${style.newyear} ${style.boxTitle} ${style.boxText}`}
        data-desc="專區"
      >
        <li>
          <a href="spring/2026/1" className="action">
            總覽
          </a>
        </li>
        <li>
          <a href="spring/2026/2">國道‧交通</a>
        </li>
        <li>
          <a href="spring/2026/3">天氣‧旅遊</a>
        </li>
        <li>
          <a href="spring/2026/4">健康過年</a>
        </li>
        <li>
          <a href="spring/2026/5">垃圾清運</a>
        </li>
      </ul>
      {/* 縣市區 */}
      <div className={`${style.springlist_topbox} ${style.city_filter_box}`}>
        <div className={style.boxTitle} data-desc="縣市快選">
          <a
            href="https://features.ltn.com.tw/spring/2026/1/keelung"
            className={style.city_btn}
          >
            基隆{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/taipei"
            className={style.city_btn}
          >
            台北{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/new-taipei"
            className={style.city_btn}
          >
            新北{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/taoyuan"
            className={style.city_btn}
          >
            桃園{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/hsinchu-city"
            className={style.city_btn}
          >
            竹市{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/hsinchu-county"
            className={style.city_btn}
          >
            竹縣{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/miaoli"
            className={style.city_btn}
          >
            苗栗{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/taichung"
            className={style.city_btn}
          >
            台中{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/changhua"
            className={style.city_btn}
          >
            彰化{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/nantou"
            className={style.city_btn}
          >
            南投{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/yunlin"
            className={style.city_btn}
          >
            雲林{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/chiayi-city"
            className={style.city_btn}
          >
            嘉市{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/chiayi-county"
            className={style.city_btn}
          >
            嘉縣{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/tainan"
            className={style.city_btn}
          >
            台南{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/kaohsiung"
            className={style.city_btn}
          >
            高雄{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/pingtung"
            className={style.city_btn}
          >
            屏東{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/taitung"
            className={style.city_btn}
          >
            台東{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/hualien"
            className={style.city_btn}
          >
            花蓮{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/yilan"
            className={style.city_btn}
          >
            宜蘭{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/penghu"
            className={style.city_btn}
          >
            澎湖{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/kinmen"
            className={style.city_btn}
          >
            金門{" "}
          </a>
          <a
            href="https://features.ltn.com.tw/spring/2026/1/matsu"
            className={style.city_btn}
          >
            連江{" "}
          </a>
        </div>
      </div>

      {/*  */}
      <div className={`whitecon ${style.springlist_box} ${style.boxTitle}`}>
        <ul className={`${style.list} listpage_news`}>
          {list.map((item, index) => {
            return (
              <SpringItem
                key={index}
                href={item.href}
                title={item.title}
                image={item.image}
                date={item.date}
              />
            );
          })}
          {/* observer */}
          <div ref={observerTarget} style={{ height: "20px" }}></div>
        </ul>
      </div>
    </div>
  );
}
