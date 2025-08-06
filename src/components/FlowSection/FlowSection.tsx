import FlowStepCard from "@/components/FlowStepCard/FlowStepCard";
import styles from "./FlowSection.module.scss";

const flowData = [
  {
    number: "01",
    title: "ヒアリング",
    subtitle: "目標設定 & 課題抽出",
    imageSrc: "/images/flow/step_01.png",
    description:
      "TikTok運用代行会社として、クライアントのビジネスゴールをKGIとして定め、具体的なKPIを設定。TikTokマーケティング会社の分析力で、最適なターゲティング戦略を策定します。",
  },
  {
    number: "02",
    title: "企画提案",
    subtitle: "トレンド活用型企画の設計",
    imageSrc: "/images/flow/step_02.png",
    description:
      "TikTokコンサル会社として最新トレンドを活用した企画を無料でご提案。TikTok代行・ティックトック代行の専門知識で、企画の方向性をすり合わせ、事前準備を完了させます。",
  },
  {
    number: "03",
    title: "撮影・編集",
    subtitle: "クリエイター & プロダクション連携",
    imageSrc: "/images/flow/step_03.png",
    description:
      "TikTok運営代行のプロが撮影スケジュールと台本を作成。TikTok業者としての知見を活かし、視聴完了率を高める編集テクニックでコンバージョン効果を最大化します。",
  },
  {
    number: "04",
    title: "投稿・運用",
    subtitle: "効果を最大化する戦略",
    imageSrc: "/images/flow/step_04.png",
    description:
      "TikTok広告運用代行の専門チームが、戦略的に広告を活用しターゲット層へのリーチを強化。TikTok運用代行会社として、データをリアルタイムで分析し継続的な改善を実施します。",
  },
  {
    number: "05",
    title: "分析・レポート",
    subtitle: "改善点の可視化と次回施策の提案",
    imageSrc: "/images/flow/step_05.png",
    description:
      "TikTokマーケティング会社の分析力で、毎月の運用結果をKGI、KPIと共に可視化したレポートを作成。TikTokコンサル会社として「次に何をすべきか」を具体的にご提案します。",
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
