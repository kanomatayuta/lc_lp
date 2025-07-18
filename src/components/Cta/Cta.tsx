"use client";
import Link from "next/link";
import { useModal } from "@/context/ModalContext"; // useModalフックをインポート
import styles from "./Cta.module.scss";

export default function Cta() {
  const { openModal } = useModal(); // ポップアップを開くための関数を取得

  return (
    <div className={styles.grid}>
      {/* ★ aタグからbuttonタグに変更し、onClickイベントを追加 */}
      <button
        onClick={openModal}
        className={`${styles.ctaButton} ${styles.primary}`}
      >
        TikTokの
        <br />
        有益な情報を大公開
        <span>資料請求はこちら</span>
      </button>
      <Link
        href="#contact"
        className={`${styles.ctaButton} ${styles.secondary}`}
      >
        お気軽に
        <br />
        ご相談ください！
        <span>お問い合わせはこちら</span>
      </Link>
    </div>
  );
}
