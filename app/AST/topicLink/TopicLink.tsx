import style from "./TopicLink.module.scss";

interface TopicLinkItemProps {
  href: string;
  title: string;
  text: string;
}

export function TopicLinkItem({ href, title, text }: TopicLinkItemProps) {
  return (
    <li>
      <a href={href} title={title}>
        {title}
      </a>
    </li>
  );
}

export default function TopicLink({ items }: { items: TopicLinkItemProps[] }) {
  return (
    <ul className={style.Topiclink}>
      <div className={style.boxTitle} data-desc="置頂新聞">
        {items && items.length > 0 && (
          <ul>
            {items.map((item: TopicLinkItemProps, index: number) => (
              <TopicLinkItem
                key={index}
                href={item.href}
                title={item.title}
                text={item.text}
              />
            ))}
          </ul>
        )}
      </div>
    </ul>
  );
}
