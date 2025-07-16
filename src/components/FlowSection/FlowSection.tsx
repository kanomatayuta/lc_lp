import FlowStepCard from "@/components/FlowStepCard/FlowStepCard";
import styles from "./FlowSection.module.scss";

const flowData = [
  {
    number: "01",
    title: "企画提案",
    subtitle: "トレンド活用型企画の設計",
    imageSrc: "/images/flow/step_01.png",
    description:
      "ヒアリング内容に基づき、TikTok公式パートナーとして最新トレンドを活用した企画を無料でご提案。企画の方向性をすり合わせ、相互認識を高め事前準備を完了させます。",
  },
  {
    number: "02",
    title: "企画提案",
    subtitle: "トレンド活用型企画の設計",
    imageSrc: "/images/flow/step_02.png",
    description:
      "ヒアリング内容に基づき、TikTok公式パートナーとして最新トレンドを活用した企画を無料でご提案。企画の方向性をすり合わせ、相互認識を高め事前準備を完了させます。",
  },
  {
    number: "03",
    title: "撮影・編集",
    subtitle: "クリエイター & プロダクション連携",
    imageSrc: "/images/flow/step_03.png",
    description:
      "撮影スケジュールと台本を作成し、TikTokに特化した縦型動画を制作。視聴完了率を高める編集テクニックと、CTAでコンバージョン効果を最大化します。",
  },
  {
    number: "04",
    title: "投稿・運用",
    subtitle: "効果を最大化する戦略",
    imageSrc: "/images/flow/step_04.png",
    description:
      "コンテンツ配信後、TikTok広告を戦略的に活用し、ターゲット層へのリーチを強化します。クリック数、視聴完了率、CVRなどのデータをリアルタイムで分析し、継続的な改善を実施します。",
  },
  {
    number: "05",
    title: "分析・レポート",
    subtitle: "改善点の可視化と次回施策の提案",
    imageSrc: "/images/flow/step_05.png",
    description:
      "毎月の運用結果をKGI、KPI達成度と共に可視化したレポートを作成。単なる数値報告ではなく、「次に何をすべきか」を具体的にご提案し、目標達成までのロードマップを再設計します。",
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
            <FlowStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              imageSrc={step.imageSrc}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
