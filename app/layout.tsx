import Ltnheader from "./_components/Ltnheader/Ltnheader";
import "./globals.css";

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
