"use client";
import style from "./Ltnheader.module.scss";

export default function SearchForm() {
  return (
    <div
      className={`${style.ltnsch_show} boxTitle boxText`}
      title="搜尋"
      data-desc="搜尋"
    >
      <form action="https://search.ltn.com.tw/list" method="get" name="search">
        <input
          name="keyword"
          id="cacheSearch"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          data-desc="Search"
          id="search_submit_btn"
        ></button>
      </form>
    </div>
  );
}
