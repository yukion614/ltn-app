"use client";
import PointNews from "../../features/_components/Pointnews/Pointnews";
import Market from "../../features/_components/Market/Market";
import style from "../../Home.module.scss";
import styleFeature from "./AST.module.scss";
import MarqueeContent from "../../_components/MarqueeContent/MarqueeContent";
import Advertise from "../../_components/Advertise/Advertise";

// 翻譯
const routeLabels: Record<string, string> = {
  AST: "AST專題",
  "2025": "2025大學分科測驗",
  breakingnews: "即時新聞",
};

export default function FeatureLayout({
  children,
  breadcrumb,
}: Readonly<{
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
}>) {
  return (
    <div className={style.first_part}>
      <Advertise />
      <div className={style.content} style={{ display: "flex", gap: "20px" }}>
        <section className={styleFeature.content940}>
          <MarqueeContent />
          {children}
        </section>
        <aside className={styleFeature.right300}>
          <div className={styleFeature.right}>
            <PointNews />
            <Market />
          </div>
        </aside>
      </div>
    </div>
  );
}
