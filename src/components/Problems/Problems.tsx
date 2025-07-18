"use client";
import { useState, useEffect, useRef } from "react";
import ProblemCard from "@/components/ProblemCard/ProblemCard";
import styles from "./Problems.module.scss";

// データ定義は変更なし
const problemsData = [
  {
    title: (
      <>
        トレンドの波に乗り切れず、
        <br />
        更新が止まっている
      </>
    ),
    imageSrc: "/images/features/problem/problem_01.png",
    description:
      "社内にリソースや知見がなく、TikTokのトレンドに乗り遅れてしまう。せっかくのフォロワーが離れていっている。",
  },
  {
    title: (
      <>
        広告費をかけても、
        <br />
        売上に繋がっていない
      </>
    ),
    imageSrc: "/images/features/problem/problem_02.png",
    description:
      "TikTok広告を出稿しているのに、動画の質や狙いたいターゲットが定まらず、肝心のCVに繋がっていない。何が原因か分からず、広告費だけが増えているように感じる。",
  },
  {
    title: (
      <>
        担当者が変わると、
        <br />
        運用がストップしてしまう
      </>
    ),
    imageSrc: "/images/features/problem/problem_03.png",
    description:
      "特定のクリエイターや担当者に運用を任せきりにした結果、その人がいなくなると運用がストップ。ノウハウも共有されず、アカウントの軸がブレてしまっている。",
  },
];

export default function Problems() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <h2 className={styles.heading}>
        こんな<span className={styles.headingAccent}>お悩み</span>
        ありませんか？
      </h2>
      <div className={styles.grid}>
        {problemsData.map((problem, index) => (
          <ProblemCard
            key={index}
            title={problem.title}
            imageSrc={problem.imageSrc}
            description={problem.description}
          />
        ))}
      </div>
    </div>
  );
}
