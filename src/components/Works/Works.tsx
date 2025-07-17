"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// SwiperのCSSをインポート
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Works.module.scss";

// アイコンコンポーネントを定義
const PerformanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.performanceIcon}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// 実績データの構造を更新
const worksData = [
  {
    clientName: "日本ピザハット株式会社 様",
    phoneImage: "/images/works/pizzahut.png",
    performance: {
      title: "Follower",
      from: "38,200",
      fromUnit: "人",
      to: "232,000",
      toUnit: "人",
    },
    description:
      "リプレイスでのご支援。”面白い企業”というブランディングを目的に、社員がアカウントの顔として出演しつつ、ピザを主軸にTikTokトレンドとオリジナリティを掛け合わせたコンテンツを発信。積極的に企業やクリエイターともコラボを行っている。",
  },
  {
    clientName: "アパレルブランドB社 様",
    phoneImage: "/images/works/pizzahut.png",
    performance: {
      title: "Engagement Rate",
      from: "2.5",
      fromUnit: "%",
      to: "8.7",
      toUnit: "%",
    },
    description:
      "新商品のプロモーションを目的とした企画を立案。トレンドに合わせたダンスチャレンジをインフルエンサーと共同で実施し、エンゲージメント率が大幅に向上。売上にも貢献しました。",
  },
  {
    clientName: "コスメブランドC社 様",
    phoneImage: "/images/works/pizzahut.png",
    performance: {
      title: "Avg Views",
      from: "50,000",
      fromUnit: "回",
      to: "500,000",
      toUnit: "回",
    },
    description:
      "商品の使い方を分かりやすく紹介する「How to動画」シリーズを展開。視聴完了率の高いコンテンツを継続的に配信することで、平均再生数が10倍に増加しました。",
  },
];

export default function Works() {
  return (
    <section id="cases" className={styles.section}>
      <div className={styles.backgroundText}>WORKS</div>

      <div className={styles.container}>
        <h2 className={styles.title}>WORKS</h2>
        <p className={styles.subtitle}>FEATURES</p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className={styles.swiperContainer}
        >
          {worksData.map((work, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideGrid}>
                <div className={styles.phoneColumn}>
                  <Image
                    src={work.phoneImage}
                    alt={`${work.clientName}のTikTok実績`}
                    width={280}
                    height={570}
                    // Add this style prop to fix the aspect ratio warning
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    className={styles.phoneImage}
                  />
                </div>
                <div className={styles.detailsColumn}>
                  <h3>{work.clientName}</h3>

                  <div className={styles.performance}>
                    <div className={styles.performanceTitle}>
                      <PerformanceIcon />
                      <span>{work.performance.title}</span>
                    </div>
                    <div className={styles.performanceValue}>
                      <div>
                        <span className={styles.value}>
                          {work.performance.from}
                        </span>
                        <span className={styles.unit}>
                          {work.performance.fromUnit}
                        </span>
                      </div>
                      <span className={styles.arrow}>→</span>
                      <div>
                        <span className={styles.value}>
                          {work.performance.to}
                        </span>
                        <span className={styles.unit}>
                          {work.performance.toUnit}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.description}>{work.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
