import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"; // Footerコンポーネントをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LC | 売上直結型のTikTok運用代行",
  description:
    "上場企業も信頼する実績と分析力で、御社のTikTokアカウントを売上に直結させます。まずは無料資料請求からお問い合わせください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
