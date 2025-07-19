"use client";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import styles from "./Cta.module.scss";

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

export default function Cta() {
  const { openModal } = useModal();

  return (
    <div className={styles.ctaContainer}>
      <button
        onClick={openModal}
        className={`${styles.ctaButton} ${styles.primary}`}
      >
        <div className={styles.iconWrapper}>
          <DocumentIcon />
        </div>
        <div className={styles.textWrapper}>
          {/* ★ spanの構造を修正 */}
          <span className={styles.ctaTitle}>TikTokの有益な情報を大公開</span>
          <span className={styles.ctaSubtitle}>資料請求はこちら</span>
        </div>
      </button>
      <Link
        href="#contact"
        className={`${styles.ctaButton} ${styles.secondary}`}
      >
        <div className={styles.iconWrapper}>
          <MailIcon />
        </div>
        <div className={styles.textWrapper}>
          {/* ★ spanの構造を修正 */}
          <span className={styles.ctaTitle}>お気軽にご相談ください！</span>
          <span className={styles.ctaSubtitle}>お問い合わせはこちら</span>
        </div>
      </Link>
    </div>
  );
}
