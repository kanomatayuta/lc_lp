"use client";
import { useState } from "react";
import styles from "./FaqItem.module.scss";

type Props = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <button className={styles.questionHeader} onClick={toggleOpen}>
        <span className={styles.qIcon}>Q</span>
        <span className={styles.questionText}>{question}</span>
        <span
          className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}
        ></span>
      </button>
      <div className={`${styles.answerWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.answerContent}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
