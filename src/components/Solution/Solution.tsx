"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Solution.module.scss";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  index: number; // ★ アニメーションの遅延時間のためにindexを受け取る
};

export default function Solution({
  title,
  description,
  imageSrc,
  className,
  index,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, []);

  // ★ アニメーション遅延のインラインスタイル
  const style = {
    transitionDelay: `${index * 150}ms`,
  };

  return (
    <div
      className={`${styles.container} ${className || ""} ${
        isVisible ? styles.visible : ""
      }`}
      ref={cardRef}
      style={style}
    >
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
