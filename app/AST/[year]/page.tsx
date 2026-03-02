import ListpageNewsCard from "../_components/ListpageNewsCard/ListpageNewsCard";
import TopicLink from "../topicLink/TopicLink";
import style from "./AST.module.scss";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import Banner from "../_components/Banner/Banner";

const crumbs = [
  {
    url: "https://features.ltn.com.tw/",
    cname: "專區",
  },
  {
    url: "https://features.ltn.com.tw/AST/2025/article/breakingnews/5145341",
    cname: "2025大學分科測驗",
  },
];

const topicData = [
  {
    id: 1,
    href: "#",
    title: "分科測驗》大學考試查榜服務，祝各位考生金榜題名！",
    text: "置頂新聞1",
  },
  { id: 2, href: "#", title: "分科測驗》試題和解答", text: "置頂新聞2" },
  { id: 3, href: "#", title: "分科測驗》考試時間", text: "置頂新聞3" },
];

const list = [
  {
    id: 1,
    title: "大學分科測驗放榜 美女歌神蔡依璇錄取成大政治系",
    image: "https://img.ltn.com.tw/Upload/news/300/2025/08/15/5145341_1_1.jpg",
    date: "2025/08/15 18:22",
  },
  {
    id: 2,
    title: "雄中公布今年升大學榜單 353人上頂大、72人錄取醫學系",
    image: "https://img.ltn.com.tw/Upload/news/300/2025/08/15/5144514_1_1.jpg",
    date: "2025/08/15 18:22",
  },
  {
    id: 3,
    title: "成大電機普渡雙聯組錄取分數暴增 成今年大學分發亮點",
    image: "https://img.ltn.com.tw/Upload/news/300/2025/08/14/5144340_3_1.jpg",
    date: "2025/08/15 18:22",
  },
  {
    id: 4,
    title: "非醫不念！個申上陽明交大電機仍成「分科戰士」他如願上榜醫學系",
    image: "https://img.ltn.com.tw/Upload/news/300/2025/08/14/5143557_1_1.jpg",
    date: "2025/08/15 18:22",
  },
  {
    id: 5,
    title: "恭喜！蕭彤雯女兒考上台大 「繳空白申請書」拚分科她緊張失眠",
    image:
      "https://img.ltn.com.tw/Upload/ent/page/400S/2025/08/14/php9kRScG.jpg",
    date: "2025/08/15 18:22",
  },
];

export default function ASTList() {
  return (
    <div>
      <Breadcrumbs items={crumbs} />
      <Banner
        src="https://features.ltn.com.tw/assets/images/AST/features_2025.jpg"
        alt="2025大學分科測驗"
        title="2025大學分科測驗"
      />
      <TopicLink items={topicData} />

      <div className={`${style.whitecon} boxTitle`} data-desc="列表">
        <ul className={`${style.list} listpage_news`}>
          {list.map((item) => (
            <ListpageNewsCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
