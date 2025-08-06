"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import LogoSlider from "../LogoSlider/LogoSlider";
import styles from "./Hero.module.scss";

// アイコンコンポーネント
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

export default function Hero() {
  const { openModal } = useModal();
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ヒーローセクションが画面内にほとんど見えなくなったらボタンを表示
        if (entry.intersectionRatio < 0.1) {
          setShowFloatingCta(true);
        } else {
          setShowFloatingCta(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, []);

  return (
    <section id="home" className={styles.heroSection} ref={heroRef}>
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
              TikTok運用における豊富な実績をもとに、
              <br className={styles.spNone} />
              上場企業をはじめとする多くのクライアント様へ、最適な広告・運用代行サービスをご提供しています。
            </p>
            <div className={styles.ctaButtons}>
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
              <div className={styles.foregroundImageWrapper}>
                <video
                  src="/images/hero/hero-phone-front.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className={styles.foregroundImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />

      {/* ★ SPでは常に表示、PCではスクロール後に表示されるようにクラスを適用 */}
      <div
        className={`${styles.floatingCtaContainer} ${
          showFloatingCta ? styles.visible : ""
        }`}
      >
        <button
          onClick={openModal}
          className={`${styles.floatingCta} ${styles.primary}`}
        >
          <DocumentIcon />
          <span className={styles.ctaText}>資料請求</span>
        </button>
        <Link
          href="#contact"
          className={`${styles.floatingCta} ${styles.secondary}`}
        >
          <MailIcon />
          <span className={styles.ctaText}>お問い合わせ</span>
        </Link>
      </div>
    </section>
  );
}
