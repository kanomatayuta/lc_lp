"use client";
import { useState, useRef } from "react";
import type { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import InterviewCard from "@/components/InterviewCard/InterviewCard";
import CustomNavigation from "@/components/CustomNavigation/CustomNavigation";
import styles from "./InterviewSection.module.scss";

// データ定義
const originalTestimonials = [
  {
    imageSrc: "/images/interview/person_01.jpg",
    company: "〇〇株式会社",
    role: "〇〇業界 / 〇〇〇〇担当",
    testimonial:
      "TikTok運用が売上の15%を占めるまでに成長しました。LCの提案は非常に具体的で、改善サイクルが明確だったのが大きなポイントでした。",
  },
  {
    imageSrc: "/images/interview/person_02.jpg",
    company: "株式会社サンプル",
    role: "食品業界 / マーケティング担当",
    testimonial:
      "以前は代理店に任せきりでしたが、LCさんと二人三脚で進める体制になってから、ブランドの想いが伝わるコンテンツが増え、ファンが急増しました。",
  },
  {
    imageSrc: "/images/interview/person_03.jpg",
    company: "スタートアップC社",
    role: "サービス業 / CEO",
    testimonial:
      "右も左も分からない状態からのスタートでしたが、戦略設計から丁寧にサポートしていただき、今ではTikTokが集客の柱の一つになっています。",
  },
];
const testimonialsData = [...originalTestimonials, ...originalTestimonials];

export default function InterviewSection() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section id="voices" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.verticalTitle}>Interview</div>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h2 className={styles.title}>お客様の声</h2>
              <p className={styles.subtitle}>なぜLCは選ばれるのか？</p>
              <p className={styles.description}>
                LCのTikTok運用を導入されたクライアント様から寄せられた、売上増加、広告効果の向上、ファンの獲得など、具体的な成果に基づいたフィードバックをご紹介します。
              </p>
            </div>
            <div className={styles.navigationWrapperPC}>
              <CustomNavigation
                currentIndex={currentIndex}
                totalSlides={originalTestimonials.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </div>

          <div className={styles.bottomLayout}>
            <div className={styles.navigationWrapperSP}>
              <CustomNavigation
                currentIndex={currentIndex}
                totalSlides={originalTestimonials.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
            <div className={styles.swiperWrapper}>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) =>
                  setCurrentIndex(
                    swiper.realIndex % originalTestimonials.length
                  )
                }
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className={styles.swiperContainer}
              >
                {testimonialsData.map((item, index) => (
                  <SwiperSlide key={index} className={styles.swiperSlide}>
                    <InterviewCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
