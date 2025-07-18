"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Works.module.scss";

// PC用の矢印アイコン
const ArrowIcon = () => (
  <svg
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21L1 11L11 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ★ おしゃれな矢印アイコンを新しく定義
const StylishArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
      <h2 className={styles.visuallyHidden}>導入実績</h2>

      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: `.${styles.prevButton}`,
              nextEl: `.${styles.nextButton}`,
            }}
            pagination={{
              el: `.${styles.pagination}`,
              clickable: true,
            }}
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
                      style={{ height: "auto" }}
                      sizes="(max-width: 767px) 40vw, 280px"
                      className={styles.phoneImage}
                    />
                  </div>
                  <div className={styles.detailsColumn}>
                    <h3>{work.clientName}</h3>
                    <div className={styles.performance}>
                      <div className={styles.performanceTitle}>
                        {work.performance.title}
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
                        <span className={styles.arrow}>
                          <StylishArrowIcon />
                        </span>
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
                    <p
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: work.description }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ナビゲーションUI */}
          <div className={styles.navigation}>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              aria-label="前のスライドへ"
            >
              <ArrowIcon />
            </button>
            <div className={styles.pagination}></div>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              aria-label="次のスライドへ"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
