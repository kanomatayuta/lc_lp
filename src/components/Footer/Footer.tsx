import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.logoColumn}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/brand_logo/lc_logo.png" // 白いロゴのパス
                alt="LC Leading Communication Logo"
                width={200}
                height={60}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Link>
          </div>
          {/* ★ ここに情報を追記しました */}
          <div className={styles.infoColumn}>
            <h3>会社概要</h3>
            <p>株式会社 Leading Communication</p>
            <p>〒150-0043</p>
            <p>東京都渋谷区道玄坂1-16-10 渋谷DTビル6F</p>
            <p>
              TEL: <a href="tel:03-6427-0997">03-6427-0997</a>
            </p>
            <p>
              Mail: <a href="mailto:info@le-commu.co.jp">info@le-commu.co.jp</a>
            </p>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Leading Communication
        </div>
      </div>
    </footer>
  );
}
