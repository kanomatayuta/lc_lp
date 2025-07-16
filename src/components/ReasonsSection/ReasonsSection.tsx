import ReasonCard from "@/components/ReasonCard/ReasonCard";
import styles from "./ReasonsSection.module.scss";

const reasonsData = [
  {
    number: "01",
    title: (
      <>
        有名企業との
        <br />
        豊富な取引実績
      </>
    ),
    description:
      "食品・小売・美容・医療など幅広い業種で有名企業のアカウント運用実績が多数。運用開始9ヶ月でフォロワー6万人増、自社アカウントで200万回再生動画創出、集客3.25倍など、確かな成果を出し続けています。",
  },
  {
    number: "02",
    title: (
      <>
        成果にこだわる
        <br />
        分析力 × 継続的な改善提案
      </>
    ),
    description:
      "コンセプト設計から広告運用までワンストップで支援。単なるレポート提出ではなく、配信データを徹底分析し、次の成果へ繋がる改善施策を提案・実行します。月次レポートでPDCAの進捗やコンテンツごとの反応を可視化し、運用精度を高めます。",
  },
  {
    number: "03",
    title: (
      <>
        クリエイティブ力 × 分析力で
        <br />
        “バズ”と“成果”を両立
      </>
    ),
    description:
      "“魅せる力”で心を掴む企画と動画を制作。さらに、蓄積されたデータ分析で改善を重ね、ただ“バズる”だけでなく、売上や問い合わせに直結するアカウント運用を実現します。",
  },
  {
    number: "04",
    title: (
      <>
        TikTok公式パートナー ×<br />
        最新トレンド活用力
      </>
    ),
    description:
      "TikTok運営元であるByteDance社とMCN契約を締結。最新のマーケティング情報をいち早く取得可能です。6年以上のTikTok運用特化の知見と公式パートナー情報を掛け合わせ、トレンドを確実に捉えた“伸びる動画”を提案・制作します。",
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          LCが選ばれる<span className={styles.highlight}>4</span>つの理由
        </h2>
        <p className={styles.intro}>
          LCのTikTok運用は、単なる動画制作や広告運用に留まりません。TikTok公式パートナーとしての知見と、戦略から改善までの一貫サポートで、ビジネスゴール達成に直結する成果を提供します。
        </p>
        <div className={styles.grid}>
          {reasonsData.map((reason) => (
            <ReasonCard
              key={reason.number}
              number={reason.number}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
