"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TeamMemberCard from "@/components/TeamMemberCard/TeamMemberCard";
import styles from "./TeamSection.module.scss";

const teamData = [
  {
    imageSrc: "/images/team/member_akiyama.jpg",
    name: "H.AKIYAMA",
    description:
      "演出や編集において、視聴者が3秒で引き込まれるような構成を徹底しています。撮影現場ではターゲット層を強く意識し、一つひとつのカットにこだわりを持って撮影に臨んでいます。",
  },
  {
    imageSrc: "/images/team/member_tuboki.jpg",
    name: "K.TUBOKI",
    description:
      "TikTokのトレンドを分析し、クライアントのブランドに最適な企画を立案しています。常に視聴者の感情を揺さぶるストーリー性を重視し、共感を呼ぶコンテンツ設計を心がけています。",
  },
  {
    imageSrc: "/images/team/member_ogawa.jpg",
    name: "R.OGAWA",
    description:
      "KPI達成を第一優先に、クリエイティブとデータの両軸でPDCAを回しています。次の一手が見える具体的なレポートを提供することで、クライアントの期待を超える成果を狙っています。",
  },
  {
    imageSrc: "/images/team/member_ogawa.jpg",
    name: "R.OGAWA",
    description:
      "KPI達成を第一優先に、クリエイティブとデータの両軸でPDCAを回しています。次の一手が見える具体的なレポートを提供することで、クライアントの期待を超える成果を狙っています。",
  },
];

// ★ Swiperのループ機能を正常に動作させるため、データを複製します。
const duplicatedTeamData = [...teamData, ...teamData];

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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TeamSection() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            LCのTikTok運用を支える
            <br />
            プロフェッショナルたち
          </h2>
          <p className={styles.description}>
            LCのTikTok運用が成果を上げる背景には、プロジェクトに携わる各担当者の確かな技術と情熱があります。現場の声を通じて、プロジェクトがどのように進行しているのかをご紹介します。
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${styles.prev}`,
              nextEl: `.${styles.next}`,
            }}
            loop={true} // ★ ループを有効化
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={20}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
            className={styles.swiperContainer}
          >
            {/* ★ 複製したデータをスライダーに渡す */}
            {duplicatedTeamData.map((member, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <TeamMemberCard {...member} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.navigationButtons}>
            <button className={`${styles.navButton} ${styles.prev}`}>
              <ArrowIcon />
            </button>
            <button className={`${styles.navButton} ${styles.next}`}>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
