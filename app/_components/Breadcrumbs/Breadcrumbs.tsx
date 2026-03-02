import style from "./Breadcrumbs.module.scss";

interface BreadcrumbItem {
  cname: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`${style.breadcrumbs} boxTitle`} data-desc="麵包屑">
      {items.map((item, index) => (
        <span key={item.url}>
          <a
            href={item.url}
            className={`${style.boxText}`}
            title={item.cname}
            data-desc={item.cname}
          >
            {item.cname}
          </a>
          {index < items.length - 1 && <span>&gt;</span>}
        </span>
      ))}
    </div>
  );
}
