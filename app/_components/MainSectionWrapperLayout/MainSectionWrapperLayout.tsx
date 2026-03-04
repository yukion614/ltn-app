import Advertise from "../Advertise/Advertise";
import MarqueeContent from "../MarqueeContent/MarqueeContent";
import Market from "@/app/_components/MainSectionWrapperLayout/_components/Market/Market";
import PointNews from "@/app/_components/MainSectionWrapperLayout/_components/Pointnews/Pointnews";
import CtoBanner from "../CtoBanner/CtoBanner";
import FaceBook from "@/app/_components/Facebook/FaceBook";
import Suggest from "@/app/_components/Suggest/Suggest";

export default function MainSectionWrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ backgroundColor: "#f7f7f7", color: "#111", lineHeight: "1.3" }}
    >
      <div className="first_part">
        <Advertise />
        <div className="content" style={{ display: "flex", gap: "20px" }}>
          <section className="content940">
            <MarqueeContent />
            {children}
          </section>
          <aside className="right300">
            <div className="right">
              <p className="date"> 2026年3月3日‧星期二‧丙午年正月十五日</p>
              <PointNews />
              <Market />
              <CtoBanner />
              <FaceBook />
              <Suggest />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
