import FlowStepCard from "@/components/FlowStepCard/FlowStepCard";
import styles from "./FlowSection.module.scss";

const flowData = [
  {
    number: "01",
    title: "ヒアリング",
    subtitle: "目標設定 & 課題抽出",
    imageSrc: "/images/flow/step_01.png",
    description:
      "お客様のビジネスゴール（売上向上、認知拡大など）を明確化し、達成可能なKGI・KPIを設定。市場分析と競合調査を通じて、最適なターゲティング戦略と運用方針を策定します。",
  },
  {
    number: "02",
    title: "企画提案",
    subtitle: "トレンド活用型企画の設計",
    imageSrc: "/images/flow/step_02.png",
    description:
      "ヒアリング内容をもとに、TikTok公式パートナーとしての知見を活かしたオリジナル企画を無料で作成。方向性をすり合わせ、プロジェクトの成功に向けた土台を構築します。",
  },
  {
    number: "03",
    title: "撮影・編集",
    subtitle: "クリエイター & プロダクション連携",
    imageSrc: "/images/flow/step_03.png",
    description:
      "緿密な撮影計画と台本作成により、TikTok特有の縦型動画を制作。最初の3秒で興味を引く構成と、視聴完了率を高める編集技術で、コンバージョンに繋がるコンテンツを創出します。",
  },
  {
    number: "04",
    title: "投稿・運用",
    subtitle: "効果を最大化する戦略",
    imageSrc: "/images/flow/step_04.png",
    description:
      "コンテンツ配信と同時に、戦略的なTikTok広告を展開。クリック率、視聴完了率、CVRなどの指標をリアルタイムでモニタリングし、効果的な改善施策を迅速に実行します。",
  },
  {
    number: "05",
    title: "分析・レポート",
    subtitle: "改善点の可視化と次回施策の提案",
    imageSrc: "/images/flow/step_05.png",
    description:
      "月次の詳細レポートでは、KGI・KPIの達成状況を明確に可視化。単なる数値報告ではなく、次のアクションプランを具体的に提示し、目標達成へのロードマップを更新します。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className={styles.section}>
      <div className={styles.backgroundText}>FLOW</div>
      <div className={styles.container}>
        <h2 className={styles.heading}>TikTok運用の流れ</h2>
        <p className={styles.subheading}>- 成果を出す5つのステップ -</p>
        <div className={styles.grid}>
          {flowData.map((step) => (
            <div key={step.number} style={{ height: "100%" }}>
              <FlowStepCard
                number={step.number}
                title={step.title}
                subtitle={step.subtitle}
                imageSrc={step.imageSrc}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
