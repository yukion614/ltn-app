"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./News2.module.scss";

const Swiper_data = [
  {
    id: 1,
    link_href:
      "https://video.ltn.com.tw/article/IsH310YKNDI/PLI7xntdRxhw03nlbog26AEgBkNoCHWcv-",
    title: "獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁",
    img_url: "https://img.ltn.com.tw/Upload/Module/5/63/4062543.jpg",
  },
];
interface Swiper_data {
  id: number;
  link_href: string;
  title: string;
  img_url: string;
}

// videoLiveItem元件
interface VideoLiveItemProps {
  data_desc: string;
  title: string;
  href?: string;
}
function VideoLiveItem({ data_desc, title, href }: VideoLiveItemProps) {
  return (
    <>
      <Link
        className={`${style.box440} ${style.content_container} ${style.hidden} `}
        // id="videoLive2"
        data-desc={data_desc}
        title={title}
        href={href ? href : ""}
      ></Link>
    </>
  );
}

//swiperItem元件
interface SwiperProps {
  link_href: string;
  title: string;
  img_url?: string;
  slide_index: number;
}
function Swiper({ link_href, title, img_url, slide_index }: SwiperProps) {
  return (
    <div className={style.swiperWrapper}>
      <Link
        href={link_href}
        className="swiper-slide slideYouTube swiper-slide-duplicate"
        data-desc={`P:4:${title}`}
        title={title}
        data-swiper-slide-index="4"
        // style={{ width: "253px" }}
      >
        <div className={style.size}>
          <Image src={img_url ? img_url : ""} alt={title} title={title} fill />
        </div>
        <h3 className={style.videoLiveTit}>
          <b className={style.videoIcon}></b>
          {title}
        </h3>
      </Link>
    </div>
  );
}

export default function News2() {
  const [data, setData] = useState<Swiper_data[]>(Swiper_data);
  return (
    <>
      <div className={`${style.news2} boxTitle`} data-desc="首頁大圖右側">
        {/* <!-- videoLive1：影片、直播 1 --> */}
        {/* <VideoLiveItem data_desc="直播1" title="直播1" /> */}

        {/* <!-- 輪播區塊(5圖+5標+5連結)L77 --> */}
        <div className={`${style.box440} video_container`}>
          {/* <!-- 大圖右 1：輪播 --> */}
          <div className={style["swiper-B"]}>
            <div
              className={`${style.swiperContainer} ltn-swiper swiper-container-initialized swiper-container-horizontal`}
            >
              {data &&
                data.map((el, index) => {
                  return (
                    <Swiper
                      key={index}
                      link_href={el.link_href}
                      title={el.title}
                      img_url={el.img_url}
                      slide_index={index}
                    />
                  );
                })}

              {/* <div
                className={style.swiperWrapper}
                // style={{
                //   transform: "translate3d(-506px, 0px, 0px)",
                //   transitionDuration: "0ms",
                // }}
              >
                <Link
                  href="https://video.ltn.com.tw/article/IsH310YKNDI/PLI7xntdRxhw03nlbog26AEgBkNoCHWcv-"
                  className="swiper-slide slideYouTube swiper-slide-duplicate"
                  data-desc="P:4:獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁"
                  title="獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁"
                  data-swiper-slide-index="4"
                  // style={{ width: "253px" }}
                >
                  <div className={style.size}>
                    <Image
                      src="https://img.ltn.com.tw/Upload/Module/5/63/4062543.jpg"
                      alt="獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁"
                      title="獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁"
                      fill
                    />
                  </div>
                  <h3 className={style.videoLiveTit}>
                    <b className={style.videoIcon}></b>
                    獨家專訪》來台證明台灣是獨立國家 石平：中國有本事就二次制裁
                  </h3>
                </Link>
              </div> */}
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            {/* 按鈕 */}
            <div
              className={`${style.btnPrev}  ${style.boxInput} ${style["ltn - next"]} `}
              id="videoBtnPrev"
              data-desc="向左鍵"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            ></div>
            <div
              className={`${style.btnNext}  ${style.boxInput} ${style["ltn - next"]} `}
              id="videoBtnNext"
              data-desc="向右鍵"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            ></div>
          </div>
        </div>

        {/* // <!-- videoLive2：直播 2 + 頻道文章連結 (1圖+1標) + 內廣 (1圖+1標) -->  */}
        {/* <VideoLiveItem data_desc="直播2" title="直播2" /> */}
        <Link
          href="https://pv6.ltn.com.tw/click?ano=2025122945987225&amp;device=P&amp;source=https://www.ltn.com.tw/&amp;device=P&amp;source=https://www.ltn.com.tw/"
          data-no="2025122945987225"
          className="box440 L1ad"
          data-desc="P:0:解放軍渡「死亡海峽」可能嗎？台灣國防其實還有這些底氣"
          title="解放軍渡「死亡海峽」可能嗎？台灣國防其實還有這些底氣"
        >
          <div className={style.size}>
            <Image
              src="https://img.ltn.com.tw/Upload/suggest/355/1766988372.jpg"
              alt="解放軍渡「死亡海峽」可能嗎？台灣國防其實還有這些底氣"
              title="解放軍渡「死亡海峽」可能嗎？台灣國防其實還有這些底氣"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h3 className={style.videoLiveTit}>
            解放軍渡「死亡海峽」可能嗎？台灣國防其實還有這些底氣
          </h3>
        </Link>
        {/* <Image
          style={{ display: "none" }}
          src="https://pv6.ltn.com.tw/impression?ano=2025122945987225&amp;device=P&amp;1767840733626"
          alt="內廣曝光"
          width={100}
          height={100}
        />
        <Image
          style={{ display: "none" }}
          src="https://pv6.ltn.com.tw/impression?ano=2025122945987225&amp;device=P&amp;1767840733622"
          alt="內廣曝光"
          width={100}
          height={100}
        /> */}
      </div>
    </>
  );
}
