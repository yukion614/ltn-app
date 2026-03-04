'use client';
import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud';

export default function HotTag() {


    
  return (
    <>
      <div className="hot_tag boxTitle" data-desc="熱門關鍵字">
        <div className="hottag_tit ">熱門關鍵字</div>
        <div className="boxTitle hottag" data-desc="熱門關鍵字">
          <div
            id="hot_keyword_area"
            data-desc="熱門關鍵字"
            style={{ width: "300px", height: "250px", diesplay: "block" }}
            class="jqcloud"
          >
            <span
              data-desc="哈米尼身亡"
              id="hot_keyword_area_word_0"
              class="w10"
              style={{color: "rgb(0, 121, 28)", font-size: "33px", position: "absolute", left: "37.5px", top: "106.5px"}}
            >
              <a
                href="https://news.ltn.com.tw/topic/%E5%93%88%E7%B1%B3%E5%B0%BC%E8%BA%AB%E4%BA%A1"
                data-desc="哈米尼身亡"
                title="哈米尼身亡"
              >
                哈米尼身亡
              </a>
            </span>
            <span
              data-desc="美軍"
              id="hot_keyword_area_word_1"
              class="w9"
              style={{color: rgb(203, 24, 187), font-size: "31px", position: "absolute", left: "134.653px", top: "69.2182px"}
            >
              <a
                href="https://news.ltn.com.tw/topic/%E7%BE%8E%E8%BB%8D"
                data-desc="美軍"
                title="美軍"
              >
                美軍
              </a>
            </span>
            <span
              data-desc="NBA"
              id="hot_keyword_area_word_2"
              class="w9"
              style="color: rgb(225, 3, 50); font-size: 31px; position: absolute; left: 65.3657px; top: 69.4469px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/NBA"
                data-desc="NBA"
                title="NBA"
              >
                NBA
              </a>
            </span>
            <span
              data-desc="健康網-身心科"
              id="hot_keyword_area_word_3"
              class="w8"
              style="color: rgb(0, 0, 0); font-size: 28px; position: absolute; left: 6.71896px; top: 147.672px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E5%81%A5%E5%BA%B7%E7%B6%B2-%E8%BA%AB%E5%BF%83%E7%A7%91"
                data-desc="健康網-身心科"
                title="健康網-身心科"
              >
                健康網-身心科
              </a>
            </span>
            <span
              data-desc="車禍"
              id="hot_keyword_area_word_4"
              class="w8"
              style="color: rgb(142, 84, 29); font-size: 28px; position: absolute; left: 203.023px; top: 164.48px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E8%BB%8A%E7%A6%8D"
                data-desc="車禍"
                title="車禍"
              >
                車禍
              </a>
            </span>
            <span
              data-desc="鄭麗文"
              id="hot_keyword_area_word_5"
              class="w7"
              style="color: rgb(197, 94, 10); font-size: 26px; position: absolute; left: 199.129px; top: 69.867px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E9%84%AD%E9%BA%97%E6%96%87"
                data-desc="鄭麗文"
                title="鄭麗文"
              >
                鄭麗文
              </a>
            </span>
            <span
              data-desc="費仔"
              id="hot_keyword_area_word_6"
              class="w6"
              style="color: rgb(203, 24, 187); font-size: 24px; position: absolute; left: 205.496px; top: 126.834px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E8%B2%BB%E4%BB%94"
                data-desc="費仔"
                title="費仔"
              >
                費仔
              </a>
            </span>
            <span
              data-desc="英國"
              id="hot_keyword_area_word_7"
              class="w6"
              style="color: rgb(197, 98, 2); font-size: 24px; position: absolute; left: 204.865px; top: 36.9278px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E8%8B%B1%E5%9C%8B"
                data-desc="英國"
                title="英國"
              >
                英國
              </a>
            </span>
            <span
              data-desc="消耗戰"
              id="hot_keyword_area_word_8"
              class="w5"
              style="color: rgb(151, 123, 228); font-size: 21px; position: absolute; left: 130.6px; top: 34.833px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%B6%88%E8%80%97%E6%88%B0"
                data-desc="消耗戰"
                title="消耗戰"
              >
                消耗戰
              </a>
            </span>
            <span
              data-desc="死亡車禍"
              id="hot_keyword_area_word_9"
              class="w5"
              style="color: rgb(151, 123, 228); font-size: 21px; position: absolute; left: 29.0129px; top: 32.2303px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%AD%BB%E4%BA%A1%E8%BB%8A%E7%A6%8D"
                data-desc="死亡車禍"
                title="死亡車禍"
              >
                死亡車禍
              </a>
            </span>
            <span
              data-desc="阿布達比"
              id="hot_keyword_area_word_10"
              class="w4"
              style="color: rgb(136, 136, 136); font-size: 19px; position: absolute; left: 13.2388px; top: 194.95px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E9%98%BF%E5%B8%83%E9%81%94%E6%AF%94"
                data-desc="阿布達比"
                title="阿布達比"
              >
                阿布達比
              </a>
            </span>
            <span
              data-desc="阿聯"
              id="hot_keyword_area_word_11"
              class="w3"
              style="color: rgb(136, 136, 136); font-size: 17px; position: absolute; left: 29.691px; top: 63.0962px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E9%98%BF%E8%81%AF"
                data-desc="阿聯"
                title="阿聯"
              >
                阿聯
              </a>
            </span>
            <span
              data-desc="經典賽"
              id="hot_keyword_area_word_12"
              class="w3"
              style="color: rgb(136, 136, 136); font-size: 17px; position: absolute; left: 99.2075px; top: 188.928px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E7%B6%93%E5%85%B8%E8%B3%BD"
                data-desc="經典賽"
                title="經典賽"
              >
                經典賽
              </a>
            </span>
            <span
              data-desc="中國"
              id="hot_keyword_area_word_13"
              class="w2"
              style="color: rgb(136, 136, 136); font-size: 14px; position: absolute; left: 157.798px; top: 188.195px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E4%B8%AD%E5%9C%8B"
                data-desc="中國"
                title="中國"
              >
                中國
              </a>
            </span>
            <span
              data-desc="神經元結構"
              id="hot_keyword_area_word_14"
              class="w2"
              style="color: rgb(136, 136, 136); font-size: 14px; position: absolute; left: 90.667px; top: 214.23px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E7%A5%9E%E7%B6%93%E5%85%83%E7%B5%90%E6%A7%8B"
                data-desc="神經元結構"
                title="神經元結構"
              >
                神經元結構
              </a>
            </span>
            <span
              data-desc="大腦老化"
              id="hot_keyword_area_word_15"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 181.454px; top: 213.377px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E5%A4%A7%E8%85%A6%E8%80%81%E5%8C%96"
                data-desc="大腦老化"
                title="大腦老化"
              >
                大腦老化
              </a>
            </span>
            <span
              data-desc="記憶力退化"
              id="hot_keyword_area_word_16"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 228.145px; top: 22.5261px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E8%A8%98%E6%86%B6%E5%8A%9B%E9%80%80%E5%8C%96"
                data-desc="記憶力退化"
                title="記憶力退化"
              >
                記憶力退化
              </a>
            </span>
            <span
              data-desc="杜拜"
              id="hot_keyword_area_word_18"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 203.952px; top: 19.4836px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%9D%9C%E6%8B%9C"
                data-desc="杜拜"
                title="杜拜"
              >
                杜拜
              </a>
            </span>
            <span
              data-desc="台積電"
              id="hot_keyword_area_word_19"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 215.396px; top: 100.829px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E5%8F%B0%E7%A9%8D%E9%9B%BB"
                data-desc="台積電"
                title="台積電"
              >
                台積電
              </a>
            </span>
            <span
              data-desc="曾豪駒"
              id="hot_keyword_area_word_20"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 242.258px; top: 203.245px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%9B%BE%E8%B1%AA%E9%A7%92"
                data-desc="曾豪駒"
                title="曾豪駒"
              >
                曾豪駒
              </a>
            </span>
            <span
              data-desc="國際軍情"
              id="hot_keyword_area_word_21"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 251.888px; top: 99.9868px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E5%9C%8B%E9%9A%9B%E8%BB%8D%E6%83%85"
                data-desc="國際軍情"
                title="國際軍情"
              >
                國際軍情
              </a>
            </span>
            <span
              data-desc="伊斯蘭革命衛隊"
              id="hot_keyword_area_word_22"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 118.331px; top: 15.3301px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E4%BC%8A%E6%96%AF%E8%98%AD%E9%9D%A9%E5%91%BD%E8%A1%9B%E9%9A%8A"
                data-desc="伊斯蘭革命衛隊"
                title="伊斯蘭革命衛隊"
              >
                伊斯蘭革命衛隊
              </a>
            </span>
            <span
              data-desc="IKEA"
              id="hot_keyword_area_word_23"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 40.5408px; top: 178.779px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/IKEA"
                data-desc="IKEA"
                title="IKEA"
              >
                IKEA
              </a>
            </span>
            <span
              data-desc="LTN經濟通"
              id="hot_keyword_area_word_24"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 0.687059px; top: 83.6943px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/LTN%E7%B6%93%E6%BF%9F%E9%80%9A"
                data-desc="LTN經濟通"
                title="LTN經濟通"
              >
                LTN經濟通
              </a>
            </span>
            <span
              data-desc="黃金"
              id="hot_keyword_area_word_26"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 19.5477px; top: 216.871px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E9%BB%83%E9%87%91"
                data-desc="黃金"
                title="黃金"
              >
                黃金
              </a>
            </span>
            <span
              data-desc="林肯號"
              id="hot_keyword_area_word_28"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 256.692px; top: 140.346px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%9E%97%E8%82%AF%E8%99%9F"
                data-desc="林肯號"
                title="林肯號"
              >
                林肯號
              </a>
            </span>
            <span
              data-desc="油輪"
              id="hot_keyword_area_word_29"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 82.502px; top: 17.5541px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E6%B2%B9%E8%BC%AA"
                data-desc="油輪"
                title="油輪"
              >
                油輪
              </a>
            </span>
            <span
              data-desc="B-2"
              id="hot_keyword_area_word_30"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 13.9142px; top: 98.5211px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/B-2"
                data-desc="B-2"
                title="B-2"
              >
                B-2
              </a>
            </span>
            <span
              data-desc="詐騙"
              id="hot_keyword_area_word_31"
              class="w1"
              style="color: rgb(136, 136, 136); font-size: 12px; position: absolute; left: 264.324px; top: 172.659px;"
            >
              <a
                href="https://news.ltn.com.tw/topic/%E8%A9%90%E9%A8%99"
                data-desc="詐騙"
                title="詐騙"
              >
                詐騙
              </a>
            </span>
          </div>
          <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        </div>
      </div>
    </>
  );
}
