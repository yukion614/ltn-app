import MainSectionWrapper from "@/app/_components/MainSectionWrapperLayout/MainSectionWrapperLayout";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainSectionWrapper>{children}</MainSectionWrapper>;
}
