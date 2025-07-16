import Image from "next/image";
import styles from "./TrendAnalysisSection.module.scss";

export default function TrendAnalysisSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 左側のテキストカラム */}
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
              <br />
              あなたのTikTokアカウントを、成果を出す集客チャネルに変革します。
            </p>
          </div>
          {/* 右側の画像カラム */}
          <div className={styles.imageColumn}>
            <Image
              src="/images/trend/trend-analysis-image.jpg"
              alt="TikTokのトレンド分析とデータ活用のイメージ"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
