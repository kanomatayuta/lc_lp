import Solution from "@/components/Solution/Solution";
import styles from "./Solutions.module.scss";

const solutionsData = [
  {
    title: "トレンドリサーチによる安定供給",
    imageSrc: "/images/features/solution/solution_01.png",
    description:
      "独自のトレンド分析システムと専門チームの知見により、常に最新の流行をキャッチアップ。ターゲット層の興味・関心を的確に捉えた企画立案で、コンテンツ制作の悩みを解消し、安定的な運用を実現します。",
  },
  {
    title: "KPI設定で成果を可視化",
    imageSrc: "/images/features/solution/solution_02.png",
    description:
      "広告の垂れ流しではなく、明確な目標設定と戦略的な運用を実施。初回ヒアリングでKPI・KGIを設定し、目標達成への最適なロードマップを策定。月次のデータ分析レポートで成果を可視化し、次の施策へと繋げます。",
  },
  {
    title: "一貫体制でクオリティを保持",
    imageSrc: "/images/features/solution/solution_03.png",
    description:
      "企画・制作・運用・分析まで全て社内で完結する一貫体制を構築。外部委託によるコミュニケーションロスやブランドのブレを防ぎ、クリエイターとの密な連携により、一貫性のあるハイクオリティなコンテンツを安定供給します。",
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
