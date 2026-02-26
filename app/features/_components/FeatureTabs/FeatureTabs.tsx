"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./FeatureTabs.module.scss";

export default function FeatureTabs() {
  const pathname = usePathname();
  return (
    <div className={`${style.projectSort} boxTitle`} data-desc="專區">
      <div className={style.caption}>專區</div>
      <Link
        href="/features/news_event"
        data-desc="新聞事件簿"
        title="新聞事件簿"
        className={
          pathname.includes("news_event") || pathname === "/features"
            ? style.action
            : ""
        }
      >
        新聞事件簿
      </Link>
      <Link
        href="/features/special_topic"
        data-desc="專題"
        title="專題"
        className={pathname.includes("special_topic") ? style.action : ""}
      >
        專題
      </Link>
    </div>
  );
}
