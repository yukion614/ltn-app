import PointNews from "./_components/Pointnews/Pointnews";
import Market from "./_components/Market/Market";
import style from "../Home.module.scss";
import styleFeature from "./feature.module.scss";
import FeatureTabs from "./_components/FeatureTabs/FeatureTabs";
import MarqueeContent from "../_components/MarqueeContent/MarqueeContent";
import Advertise from "../_components/Advertise/Advertise";

export default function FeatureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.first_part}>
      <Advertise />
      <div className={style.content} style={{ display: "flex", gap: "20px" }}>
        <section className={styleFeature.content940}>
          <MarqueeContent />
          <FeatureTabs />
          {/* <div
            className={`${styleFeature.projectSort} boxTitle`}
            data-desc="專區"
          >
            <div className={styleFeature.caption}>專區</div>
            <Link
              href="/features/news_event"
              data-desc="新聞事件簿"
              title="新聞事件簿"
              className={
                pathname.includes("news_event") ? styleFeature.action : ""
              }
            >
              新聞事件簿
            </Link>
            <Link
              href="/features/special_topic"
              data-desc="專題"
              title="專題"
              className={
                pathname.includes("special_topic") ? styleFeature.action : ""
              }
            >
              專題
            </Link>
          </div> */}
          {children}
        </section>
        <aside
          className={styleFeature.right300}
          // style={{
          //   width: "300px",
          //   float: "right",
          // }}
        >
          <div className={styleFeature.right}>
            <PointNews />
            <Market />
          </div>
        </aside>
      </div>
    </div>
  );
}
