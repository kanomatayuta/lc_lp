/* Hero.tsx */
import Image from "next/image";
import Link from "next/link";
import LogoSlider from "../LogoSlider/LogoSlider";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
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
              <span className={styles.largeText}>&quot;売上直結型&quot;</span>
              へ。
            </h1>
            <p>
              事務所のトレンド把握力 x
              上場企業も納得の分析・提案体制で「売上にインパクトのある企画と動画」をご提案します。
            </p>
            <div className={styles.ctaButtons}>
              <Link href="#contact" className={styles.primary}>
                TikTokの有益な情報を大公開
                <br />
                <span>資料請求はこちら</span>
              </Link>
              <Link href="#contact" className={styles.secondary}>
                お気軽に
                <br />
                ご相談ください！
                <br />
                <span>お問い合わせはこちら</span>
              </Link>
            </div>
          </div>
          <div className={styles.rightColumn}>
            {/* ★ Imageを囲むラッパーを追加 */}
            <div className={styles.imageWrapper}>
              <Image
                src="/hero/hero-phone.png"
                alt="TikTok promotion example on a smartphone"
                fill // layout="responsive" の代わりに fill を使用
                sizes="(max-width: 768px) 80vw, 400px" // パフォーマンス向上のためsizesプロパティを追加
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />
    </section>
  );
}
