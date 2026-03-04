import Image from "next/image";
import style from "./Market.module.scss";

export default function Market() {
  return (
    <>
      <div
        className={`${style.market300_b} ${style.boxTitle}`}
        data-desc="熱門新訊"
      >
        <div className={style.market300_tit_b}>
          <a href="//market.ltn.com.tw" title="熱門新訊" data-desc="區塊標題">
            熱門新訊
          </a>
          <a
            href="https://market.ltn.com.tw"
            className={style.next_btn}
            title="熱門新訊"
            data-desc="More"
          ></a>
        </div>

        <ul>
          <li className="adMarket" id="ano2026021160182860">
            <a
              href="https://pv6.ltn.com.tw/click?ano=2026021160182860&amp;device=M&amp;source=https://features.ltn.com.tw/spring/article/2026/breakingnews/5342504"
              target="_blank"
              data-desc="T:0:奇幻生物現身山城、高雄春節打造親子共遊的冒險旅程"
              title="奇幻生物現身山城、高雄春節打造親子共遊的冒險旅程"
            >
              奇幻生物現身山城、高雄春節打造親子共遊的冒險旅程
            </a>
            <Image
              src="https://pv6.ltn.com.tw/impression?ano=2026021160182860&amp;device=M&amp;1770962633866"
              fill
              alt=""
              style={{ display: "none" }}
            />
          </li>
          <li className="adMarket" id="ano2026021060876022">
            <a
              href="https://pv6.ltn.com.tw/click?ano=2026021060876022&amp;device=M&amp;source=https://features.ltn.com.tw/spring/article/2026/breakingnews/5342504"
              target="_blank"
              data-desc="T:1:房市進入個股時代　捷運共構成「權值資產」主場"
              title="房市進入個股時代　捷運共構成「權值資產」主場"
            >
              房市進入個股時代　捷運共構成「權值資產」主場
            </a>
          </li>

          <li className="adMarket" id="ano2026021045843793">
            <a
              href="https://pv6.ltn.com.tw/click?ano=2026021045843793&amp;device=M&amp;source=https://features.ltn.com.tw/spring/article/2026/breakingnews/5342504"
              target="_blank"
              data-desc="T:2:信義企業集團MA年薪上看150萬　把理想變成職涯路徑"
              title="信義企業集團MA年薪上看150萬　把理想變成職涯路徑"
            >
              信義企業集團MA年薪上看150萬　把理想變成職涯路徑
            </a>
          </li>

          <li className="adMarket" id="ano2026021226740718">
            <a
              href="https://pv6.ltn.com.tw/click?ano=2026021226740718&amp;device=M&amp;source=https://features.ltn.com.tw/spring/article/2026/breakingnews/5342504"
              target="_blank"
              data-desc="T:3:韓星來台搶朝聖 網友力推過年深夜食堂必吃「這款」"
              title="韓星來台搶朝聖 網友力推過年深夜食堂必吃「這款」"
            >
              韓星來台搶朝聖 網友力推過年深夜食堂必吃「這款」
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
