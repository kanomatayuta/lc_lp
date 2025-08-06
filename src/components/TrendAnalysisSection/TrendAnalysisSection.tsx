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
              トレンド × データドリブンで実現する、
              成果直結型のTikTokマーケティング
            </h2>
            <p>
              TikTok運用パートナーをお探しですか？
              <br />
              LeadingCommunicationは、TikTokマーケティングに特化した専門チームが、
              最新トレンドと綿密なデータ分析を駆使し、
              <br />
              TikTok広告運用・アカウント運用代行で確かな成果をお届けします。
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
