"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import style from "./MarqueeContent.module.scss";
import { useMarquee } from "@hooks/useMarquee";

const marquee_data = [
  {
    id: 1,
    href: "https://news.ltn.com.tw/news/life/breakingnews/5303012",
    title: "相隔8年！阿里山清晨飄雪 遊客驚喜大喊「下雪了」",
  },
  {
    id: 2,
    href: "https://news.ltn.com.tw/news/life/breakingnews/5303012",
    title: "頭份清晨街頭驚傳槍響！轎車遭攔截開槍駕駛腳踝中彈送醫",
  },
  {
    id: 3,
    href: "https://news.ltn.com.tw/news/life/breakingnews/5303012",
    title: "藍營擬放行TPASS、生育補助 綠嗆：災害準備金、國防預算就能丟包？",
  },
  {
    id: 4,
    href: "https://news.ltn.com.tw/news/life/breakingnews/5303012",
    title: "台股收盤》台積電、記憶體、面板扮要角 指數收漲278點",
  },
];

interface Marquee {
  id: number;
  href: string;
  title: string;
}

// interface MarqueeContentProps {
//   href: string;
//   title: string;
// }

export default function MarqueeContent() {
  const [data, setData] = useState<Marquee[]>(marquee_data);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  // 套用自訂一hooks
  useMarquee(marqueeRef);

  return (
    <div className={style.marqueeContent}>
      <div
        ref={marqueeRef}
        className={`${style.marquee} boxTitle`}
        data-desc="快訊"
        style={{ display: "flex", marginBottom: 0 }}
      >
        <div className={style.marqueebox}>
          <ul style={{ marginTop: 0 }}>
            {data &&
              data.map((item) => {
                return (
                  <li id="extra" key={item.id}>
                    <Link
                      href={item.href}
                      data-desc={`T:4:${item.title}`}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* 按鈕 */}
        <div
          className={`${style.arrow} ${style.up}`}
          style={{ cursor: "pointer" }}
        ></div>
        <div
          className={`${style.arrow} ${style.down}`}
          style={{ cursor: "pointer" }}
        ></div>
      </div>
    </div>
  );
}
