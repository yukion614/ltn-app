import CategoryCard from "../_components/CategoryCard/CategoryCard";
import NewsEventsCard from "../_components/NewsEventsCard/NewaEventsCard";
import ListEnd from "../_components/ListEnd/ListEnd";
const data = [
  {
    id: 1,
    title: "台股搶先報",
    year: 2025,
    month: 7,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/231.jpg",
  },
  {
    id: 2,
    title: "精選專區",
    year: 2025,
    month: 12,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/240.jpg",
  },
  {
    id: 3,
    title: "2025大罷免",
    year: 2025,
    month: 7,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/229.jpg",
  },
  {
    id: 4,
    title: "京華城案 引爆柯文哲政治危機",
    year: 2024,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/221.jpg",
  },
  {
    id: 5,
    title: "新光三越氣爆",
    year: 2025,
    month: 2,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/226.jpg",
  },
  {
    id: 6,
    title: "11月韓風吹台風",
    year: 2025,
    month: 11,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/235.jpg",
  },
  {
    id: 7,
    title: "金鐘60",
    year: 2025,
    month: 10,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/233.jpg",
  },
  {
    id: 8,
    title: "台海兵推",
    year: 2023,
    month: 1,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/204.jpg",
  },
  {
    id: 9,
    title: "2023杭州亞運",
    year: 2023,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/211.jpg",
  },
  {
    id: 10,
    title: "金曲盛會 星光熠熠",
    year: 2025,
    month: 6,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/228.jpg",
  },
  {
    id: 11,
    title: "2023杭州亞運",
    year: 2023,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/211.jpg",
  },
  {
    id: 12,
    title: "2023杭州亞運",
    year: 2023,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/211.jpg",
  },
  {
    id: 13,
    title: "2023杭州亞運",
    year: 2023,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/211.jpg",
  },
  {
    id: 14,
    title: "2023杭州亞運",
    year: 2023,
    month: 9,
    image: "https://img.ltn.com.tw/Upload/news/pj/list/211.jpg",
  },
];

export default function features() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-10">
      {data &&
        data.map((item) => (
          <NewsEventsCard
            key={item.id}
            title={item.title}
            year={item.year}
            month={item.month}
            image={item.image}
          />
        ))}

      {/* 無更多資料 */}

      <ListEnd />
    </div>
  );
}
