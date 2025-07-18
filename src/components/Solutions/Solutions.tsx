import Solution from "@/components/Solution/Solution";
import styles from "./Solutions.module.scss";

const solutionsData = [
  {
    title: "トレンドリサーチによる安定供給",
    imageSrc: "/images/features/solution/solution_01.png",
    description:
      "TikTokの流行りのBGMや企画に乗り遅れる心配はありません。LCが独自分析した最新トレンドを元に、常にターゲット層の興味・関心を把握。これにより、コンテンツの企画・制作に悩むことなく、安定した運用を継続できます。",
  },
  {
    title: "KPI設定で成果を可視化",
    imageSrc: "/images/features/solution/solution_02.png",
    description:
      "広告効果が散漫になる「垂れ流し状態」で終わらせません。初回ヒアリングでKPI（重要業績評価指標）とKGI（重要目標達成指標）を明確に設定し、目標達成までの最短ルートを設計。毎月の定例会で、データに基づき次の一手を具体的にご提案することで、成果を「見える化」します。",
  },
  {
    title: "一貫体制でクオリティを保持",
    imageSrc: "/images/features/solution/solution_03.png",
    description:
      "「担当者任せでブランドがブレる」というリスクを排除します。LCは動画制作から広告運用まで社内で一貫して提供する体制を構築。クリエイターとの綿密な連携により、ブランドの一貫性を担保し、常に安定したハイクオリティなコンテンツを提供します。",
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
