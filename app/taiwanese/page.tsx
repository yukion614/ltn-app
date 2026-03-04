import style from "./taiwanese.module.scss";

const data = [
  {
    id: 1,
    title: "拍斷手骨顛倒勇。",
    date: "2026/03/02",
    href: "",
  },
  {
    id: 2,
    title: "拍人喝救人。",
    date: "2026/03/01",
    href: "",
  },
  {
    id: 3,
    title: "拍虎掠賊也著親兄弟。",
    date: "2026/02/27",
    href: "",
  },
  {
    id: 4,
    title: "白白布染甲烏。",
    date: "2026/02/26",
    href: "",
  },
];

interface ItemProps {
  href: string;
  title: string;
  date: string;
}

export function ListItem({ href, title, date }: ItemProps) {
  return (
    <li>
      <a
        href={href}
        className={style.ph}
        data-desc={`P:0:${title}`}
        title={title}
        target="_blank"
      >
        <div className={style.tit}>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
      </a>
    </li>
  );
}

export default function features() {
  return (
    <div className="whitecon boxTitle" data-desc="列表">
      <ul className={`${style.list} listpage_news`} data-page="1">
        {data &&
          data.map((item) => (
            <ListItem
              key={item.id}
              href={item.href}
              title={item.title}
              date={item.date}
            />
          ))}
      </ul>
    </div>
  );
}
