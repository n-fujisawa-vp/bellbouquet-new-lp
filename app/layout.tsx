import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "結婚式の花束を永遠に残す | ブーケ保存・ドライフラワーアレンジ | bellbouquet",
  description:
    "結婚式の思い出の花束を、職人の手で世界に一つのインテリアアートへ。ブーケフレーム・ウェディングリースのオーダーメイド制作。全国対応・LINEで無料相談受付中。¥18,000〜。",
  openGraph: {
    title: "あの日の花束を、永遠の記念に。| bellbouquet",
    description:
      "結婚式の花束をそのまま残せるオーダーメイドフラワーアレンジ。職人が丁寧に制作、全国発送対応。LINEで無料相談。",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:wght@300;400&family=Noto+Sans+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
