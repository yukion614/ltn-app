import style from "./AppE1121.module.scss";
export default function AppE1121() {
  return (
    <>
      <p className={style.appE1121}>
        不用抽 不用搶 現在用APP看新聞 保證天天中獎　
        <a
          title="點我下載APP"
          href="https://service.ltn.com.tw/app"
          target="_blank"
          className="ga_event"
          data-vars-box-title="內容頁"
          data-desc="APP載點"
          data-vars-desc="APP載點"
        >
          點我下載APP
        </a>
        　
        <a
          title="按我看活動辦法"
          href="https://drawpage.ltn.com.tw/slot_v9/"
          target="_blank"
          className="ga_event"
          data-vars-box-title="內容頁"
          data-desc="活動辦法"
          data-vars-desc="活動辦法"
        >
          按我看活動辦法
        </a>
      </p>
    </>
  );
}
