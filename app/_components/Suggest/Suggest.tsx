import Image from "next/image";
import style from "./Suggest.module.scss";
export default function Suggest() {
  return (
    <div className={`${style.suggest}`}>
      <div className="suggest_pc suggestCenter">
        <div className="NC3 boxTitle" data-desc="內廣">
          <a
            href="https://pv6.ltn.com.tw/click?ano=2026022458736533&amp;device=P&amp;source=https://features.ltn.com.tw/AST/2025/exam/%E8%A9%A6%E9%A1%8C%E5%92%8C%E8%A7%A3%E7%AD%94"
            target="_blank"
            title="B01"
          >
            <Image
              className="lazy_imgs_ltn"
              src="https://img.ltn.com.tw/Upload/suggest/140/140162337.jpg"
              title="B01"
              alt="B01"
              width={300}
              height={300}
            />
          </a>
          <Image
            style={{ display: "none" }}
            src="https://pv6.ltn.com.tw/impression?ano=2026022458736533&amp;device=P&amp;1772506933750"
            title="B01"
            alt="B01"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
