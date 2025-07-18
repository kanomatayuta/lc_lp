"use client";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import LogoSlider from "../LogoSlider/LogoSlider";
import styles from "./Hero.module.scss";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <h1>
              上場企業も信頼する
              <br />
              <span className={styles.highlight}>実績</span>と
              <span className={styles.highlight}>分析力</span>で、
              <br />
              御社のTikTokを
              <br />
              <span className={styles.largeText}>&quot;成果直結型&quot;</span>
              へ。
            </h1>
            <p className={styles.description}>
              事務所のトレンド把握力 x 上場企業も納得の分析・提案体制で
              <br className={styles.spNone} />
              「売上にインパクトのある企画と動画」をご提案します。
            </p>
            <div className={styles.ctaButtons}>
              {/* ★ 共通クラス .ctaButton を追加 */}
              <button
                onClick={openModal}
                className={`${styles.ctaButton} ${styles.primary}`}
              >
                <span className={styles.ctaTitle}>
                  TikTokの
                  <br />
                  有益な情報を大公開
                </span>
                <span className={styles.ctaSubtitle}>資料請求はこちら</span>
              </button>
              {/* ★ 共通クラス .ctaButton を追加 */}
              <Link
                href="#contact"
                className={`${styles.ctaButton} ${styles.secondary}`}
              >
                <span className={styles.ctaTitle}>
                  お気軽に
                  <br />
                  ご相談ください！
                </span>
                <span className={styles.ctaSubtitle}>お問い合わせはこちら</span>
              </Link>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <div className={styles.backgroundImageWrapper}>
                <Image
                  src="/images/hero/hero-bg.png"
                  alt="Abstract background"
                  fill
                  sizes="50vw"
                  className={styles.backgroundImage}
                />
              </div>
              <div className={styles.foregroundImageWrapper}>
                <Image
                  src="/images/hero/hero-phone-front.png"
                  alt="TikTok promotion example on a smartphone"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  priority
                  className={styles.foregroundImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />

      <button onClick={openModal} className={styles.floatingCta}>
        TikTokの
        <br />
        有益な情報を大公開
        <br />
        <span>資料請求はこちら</span>
      </button>
    </section>
  );
}
