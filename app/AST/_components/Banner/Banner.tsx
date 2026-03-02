import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
  title: string;
}

export default function Banner({ src, alt, title }: BannerProps) {
  return (
    <div className="boxTitle" data-desc="專區大圖">
      <a
        href="https://features.ltn.com.tw/AST/2025"
        className="banner"
        data-desc="專區大圖"
        title={title}
      >
        <Image src={src} alt={alt} title={title} width={980} height={300} />
      </a>
    </div>
  );
}
