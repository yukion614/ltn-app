import MainSectionWrapper from "@/app/_components/MainSectionWrapperLayout/MainSectionWrapperLayout";

export default function ASTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainSectionWrapper>{children}</MainSectionWrapper>;
}
