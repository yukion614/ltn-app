"use client";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import Banner from "@/app/_components/Banner/Banner";
import style from "./exam.module.scss";
import AppE1121 from "@/app/_components/AppE1121/AppE1121";
import ArticlePhoto from "@/app/_components/MainArticleLayout/_components/ArticlePhoto/ArticlePhoto";

const crumbs = [
  {
    url: "https://features.ltn.com.tw/",
    cname: "專區",
  },
  {
    url: "https://features.ltn.com.tw/taiwanese",
    cname: "每日一台語",
  },
];

export default function ExamPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <Banner
        image="https://features.ltn.com.tw/assets/images/AST/features_2025.jpg"
        alt="2025大學分科測驗"
        title="2025大學分科測驗"
        url="https://features.ltn.com.tw/AST/2025"
      />
      {/* 內文 */}
      <div className="whitecon">
        <h1>試題和解答</h1>

        {/* 分享列 */}
        <div className="function boxTitle" data-desc="分享列">
          <a className="sharefb" data-desc="facebook" title="facebook"></a>
          <a className="sharetwitter" data-desc="twitter" title="twitter"></a>
          <a className="shareline" data-desc="line" title="line"></a>
          <a className="print" title="列印" data-desc="列印"></a>
          <a title="字體縮放" className="fontsize" data-desc="字體縮放"></a>
        </div>

        {/* 表格 */}
        <div className={`${style.text} boxTitle boxText`}>
          <table
            className={style.exam}
            style={{
              width: "100%",
              border: 0,
            }}
            cellPadding="0"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th style={{ width: "25%" }}>科目</th>
                <th style={{ width: "25%" }}>試題</th>
                <th style={{ width: "25%" }}>解答</th>
                <th style={{ width: "25%" }}>選擇題正式解答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>物理</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P192363480434794446/05-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E7%89%A9%E7%90%86%E8%A9%A6%E5%8D%B7%E5%AE%9A%E7%A8%BF.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-physical-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193659543931866890/05-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E7%89%A9%E7%90%86%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>化學</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P192442187746034586/06-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%8C%96%E5%AD%B8%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-chemical-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193659674575735818/06-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%8C%96%E5%AD%B8%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>數學甲</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P192554390266335672/01-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%95%B8%E5%AD%B8%E7%94%B2%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-mathA-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193659794119614845/01-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%95%B8%E5%AD%B8%E7%94%B2%E9%81%B8%E6%93%87%28%E5%A1%AB%29%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>生物</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P192633072763389988/07-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E7%94%9F%E7%89%A9%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-biological-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193659905754583862/07-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E7%94%9F%E7%89%A9%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>歷史</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193363092135785307/02-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%AD%B7%E5%8F%B2%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-history-a1.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P194463336420408562/02-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%AD%B7%E5%8F%B2%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>地理</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193441539791317059/03-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%9C%B0%E7%90%86%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-geography-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P194463687064377580/03-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%9C%B0%E7%90%86%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>數學乙</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193554812586119300/08-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%95%B8%E5%AD%B8%E4%B9%99%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-mathB.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P194463867608256517/08-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E6%95%B8%E5%AD%B8%E4%B9%99%E9%81%B8%E6%93%87%28%E5%A1%AB%29%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
              <tr>
                <th>公民與社會</th>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P193633272842629654/04-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%85%AC%E6%B0%91%E8%88%87%E7%A4%BE%E6%9C%83%E8%A9%A6%E5%8D%B7.pdf"
                    target="_blank"
                  >
                    試題
                  </a>
                </td>
                <td>
                  <a
                    href="https://img.ltn.com.tw/Upload/features/AST/2025/pdf/114-citizen-a.pdf"
                    target="_blank"
                  >
                    參考解答
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.ceec.edu.tw/files/file_pool/1/0P194464038143125535/04-114%E5%88%86%E7%A7%91%E6%B8%AC%E9%A9%97%E5%85%AC%E6%B0%91%E8%88%87%E7%A4%BE%E6%9C%83%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf"
                    target="_blank"
                  >
                    正式解答
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 資料來源 */}
          <p style={{ marginBottom: "30px" }}>
            資料來源：
            <a href="https://www.ceec.edu.tw/" target="_blank">
              大考中心
            </a>
            <br />
            參考解答：得勝者文教提供
          </p>

          <AppE1121 />
        </div>
      </div>
    </>
  );
}
