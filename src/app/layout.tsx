import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ModalProvider } from "@/context/ModalContext"; // ModalProviderをインポート
import AppManager from "@/components/AppManager/AppManager"; // 新しいコンポーネントをインポート

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// SEO設定
const siteName = "LC - TikTok運用代行";
const description =
  "上場企業も信頼する実績と分析力で、御社のTikTokアカウントを売上に直結させます。まずは無料資料請求からお問い合わせください。";
const url = "https://landing.le-commu.co.jp/";

export const metadata: Metadata = {
  // 基本的なメタデータ
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description: description,
  keywords: [
    "TikTok運用",
    "TikTok運用代行",
    "TikTokマーケティング",
    "SNSマーケティング",
    "SNS運用代行",
    "上場企業実績",
    "LC",
    "Leading Communication",
  ],
  openGraph: {
    title: siteName,
    description: description,
    url: url,
    siteName: siteName,
    images: [
      {
        url: `${url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LC TikTok運用代行サービス",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: description,
    images: [`${url}/twitter-image.png`],
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ModalProvider>
          {" "}
          {/* ★ アプリ全体をProviderで囲む */}
          {/* Google Tag Manager */}
          <Script
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-1P0FP39FWF"
          />
          <Script id="gtag-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1P0FP39FWF');
            `}
          </Script>
          {/* Microsoft Clarity */}
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sg6lf55y8e");
            `}
          </Script>
          <Header />
          <main>{children}</main>
          <Footer />
          <AppManager /> {/* ★ ポップアップを管理するコンポーネントを配置 */}
        </ModalProvider>
      </body>
    </html>
  );
}
