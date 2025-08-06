import Solution from "@/components/Solution/Solution";
import styles from "./Solutions.module.scss";

const solutionsData = [
  {
    title: "トレンドリサーチによる安定供給",
    imageSrc: "/images/features/solution/solution_01.png",
    description:
      "TikTok運用代行会社として、最新トレンドを元に常にターゲット層の興味・関心を把握。TikTokコンサル会社の知見を活かし、コンテンツの企画・制作に悩むことなく、安定したTikTok運営代行を継続できます。",
  },
  {
    title: "KPI設定で成果を可視化",
    imageSrc: "/images/features/solution/solution_02.png",
    description:
      "TikTok広告運用代行として広告効果を最大化。TikTok業者として初回ヒアリングでKPI・KGIを明確に設定し、目標達成までの最短ルートを設計。TikTokマーケティング会社の分析力で、データに基づき成果を「見える化」します。",
  },
  {
    title: "一貫体制でクオリティを保持",
    imageSrc: "/images/features/solution/solution_03.png",
    description:
      "TikTok代行・ティックトック代行のプロフェッショナルとして、動画制作から広告運用まで社内で一貫して提供。TikTok運用代行会社として、ブランドの一貫性を担保し、常に安定したハイクオリティなコンテンツを提供します。",
  },
];

export default function Solutions() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>LCのTikTok運用ならこう変わる</h2>
        <div className={styles.solutionsList}>
          {solutionsData.map((solution, index) => (
            <Solution
              key={index}
              title={solution.title}
              description={solution.description}
              imageSrc={solution.imageSrc}
              className={index % 2 === 0 ? styles.oddCard : styles.evenCard}
              index={index} // ★ アニメーション遅延用にindexを渡す
            />
          ))}
        </div>
      </div>
    </div>
  );
}
