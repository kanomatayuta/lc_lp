"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./TrendAnalysisSection.module.scss";

export default function TrendAnalysisSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ★ Store the ref's current value in a variable
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      // ★ Use the variable in the cleanup function
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []); // The dependency array remains empty

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textColumn}>
            <h2>
              最新トレンド×データ分析で、
              <br />
              TikTok運用を成功へ
            </h2>
            <p>
              TikTokを試したものの、「何が正解かわからない」と悩んでいませんか？
              <br />
              LCはTikTok公式パートナーとして、最新トレンドとデータ分析に基づいた戦略で、動画制作から運用、分析までを一貫サポート。
              あなたのTikTokアカウントを、成果を出す集客チャネルに変革します。
            </p>
          </div>
          <div className={styles.imageColumn}>
            <Image
              src="/images/trend/trend-analysis-image.jpg"
              alt="TikTokのトレンド分析とデータ活用のイメージ"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
