import Link from "next/link";
import styles from "./Cta.module.scss";

export default function Cta() {
  return (
    <div className={styles.grid}>
      <Link href="#contact" className={`${styles.ctaButton} ${styles.primary}`}>
        TikTokの
        <br />
        有益な情報を大公開
        <span>資料請求はこちら</span>
      </Link>
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
