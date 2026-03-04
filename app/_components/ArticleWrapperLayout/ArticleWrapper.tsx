import style from "./article.module.scss";
import RelatedNews from "./_components/RelatedNews/RelatedNews";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import Banner from "@/app/_components/Banner/Banner";
import AppE1121 from "./_components/AppE1121/AppE1121";
import ArticlePhoto from "./_components/ArticlePhoto/ArticlePhoto";
import { BreadcrumbItem } from "@/app/_components/Breadcrumbs/Breadcrumbs";
import { BannerProps } from "@/app/_components/Banner/Banner";
import React from "react";

interface SharedArticleWrapperProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  banner: BannerProps;
  article_info?: articleInfo;
  taiwanese_info?: TaiwaniseInfo;
  content?: string;
  related_news?: related_new[];
}

interface TaiwaniseInfo {
  title: string;
  voice: {
    word: string;
    data_src: string;
  };
  definition: string;
  use_case: {
    ch_word: string;
    word: string;
    voice_data_src: string;
    ch: string;
  }[];
  source: string;
}

interface articleInfo {
  id: string;
  channel: string;
  year: string;
  category: string;
  title: string;
  pub_time: string;
  url: string;
  author: string;
  photos: photo[];
}

interface photo {
  src: string;
  caption: string;
  source: string;
}

interface related_new {
  url: string;
  title: string;
  no: number;
  type: string;
  group: string;
  photo: string;
  other: number;
}

export default function ArticleWrapperLayout({
  children,
  breadcrumbs,
  banner,
  article_info,
  taiwanese_info,
  // content,
  related_news,
}: SharedArticleWrapperProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Banner
        image={banner.image}
        alt={banner.alt}
        title={banner.title}
        url={banner.url}
      />
      <div className="whitecon">
        {/* 文章標題 */}
        {/* 文章類型 */}
        {article_info && <h1 className={style.h1}>{article_info.title}</h1>}
        {/* 每日一句 */}
        {taiwanese_info && (
          <h1 className={style.taiwanese}>
            <span className={style.SubTit}>每日一台語</span>
            {taiwanese_info.title}
          </h1>
        )}

        {/* 分享列 */}
        <div className="function boxTitle" data-desc="分享列">
          <a className="sharefb" data-desc="facebook" title="facebook"></a>
          <a className="sharetwitter" data-desc="twitter" title="twitter"></a>
          <a className="shareline" data-desc="line" title="line"></a>
          <a className="print" title="列印" data-desc="列印"></a>
          <a title="字體縮放" className="fontsize" data-desc="字體縮放"></a>
        </div>

        <>
          {/* <!-- 時間 --> */}
          {/* <span className={style.time}>2025/08/15 18:22</span> */}
          {/* <!-- 內文 --> */}
          {children}
          {/* <AppE1121 /> */}
          {/* 相關新聞 */}
          {related_news && <RelatedNews relate_news={related_news} />}
        </>
      </div>
    </>
  );
}
