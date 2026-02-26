import CategoryCard from "../_components/CategoryCard/CategoryCard";
import NewsEventsCard from "../_components/NewsEventsCard/NewaEventsCard";
import ListEnd from "../_components/ListEnd/ListEnd";
const data = [
  {
    id: 1,
    title: "2026春節專區",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/238.jpg",
  },
  {
    id: 2,
    title: "2026世界棒球經典賽",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/239.jpg",
  },
  {
    id: 3,
    title: "115年大學學測",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/237.jpg",
  },
  {
    id: 4,
    title: "每日一台語",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/236.jpg",
  },
  {
    id: 5,
    title: "國考英文每日一題",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/234.jpg",
  },
  {
    id: 6,
    title: "2025大罷免專區",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/232.jpg",
  },
  {
    id: 7,
    title: "114年大學分科測驗",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/230.jpg",
  },
  {
    id: 8,
    title: "114年國中教育會考",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/227.jpg",
  },
  {
    id: 9,
    title: "2024巴黎奧運",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/219.jpg",
  },
  {
    id: 10,
    title: "2024總統立委選舉",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/210.jpg",
  },
  {
    id: 11,
    title: "2022卡達世界盃",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/199.jpg",
  },
  {
    id: 12,
    title: "2022九合一選舉",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/196.jpg",
  },
  {
    id: 13,
    title: "中英對照讀新聞",
    image: "https://img.ltn.com.tw/Upload/news/pj/list/13.jpg",
  },
];

export default function features() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-10">
      {data &&
        data.map((item) => (
          <CategoryCard key={item.id} title={item.title} image={item.image} />
        ))}

      {/* 無更多資料 */}

      <ListEnd />
    </div>
  );
}
