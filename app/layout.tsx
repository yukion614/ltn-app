import Ltnheader from "./_components/Ltnheader/Ltnheader";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/01logo_LTN.png", // 對應 public/01logo_LTN.png
    shortcut: "/01logo_LTN.png", //給舊版 Internet Explorer 或某些特定的桌面瀏覽器使用的。
    apple: "/01LTN.png", //apple (蘋果裝置圖示) 建議解析度： $180 \times 180$ 像素。
    other: {
      rel: "apple-touch-icon-precomposed", //是舊版 iOS 用的（它不會自動幫你的圖示加上圓角和高光）。
      url: "/01logo_LTN.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <Ltnheader />
        <main>{children}</main>
      </body>
    </html>
  );
}
