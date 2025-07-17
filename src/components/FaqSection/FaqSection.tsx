import FaqItem from "@/components/FaqItem/FaqItem";
import styles from "./FaqSection.module.scss";

const faqData = [
  {
    question: "無料で企画提案まで行っていただけるって本当ですか？",
    answer:
      "はい、本当です。\n初回のお打ち合わせでヒアリングさせていただき、その内容を基に、次回お打ち合わせ時に無料でご提案させていただいております。",
  },
  {
    question:
      "弊社が厳しいレギュレーションがあり、かなり運用が難しいと思うのですがそれでも依頼することは可能でしょうか？",
    answer:
      "可能です。弊社では、厳しいレギュレーションのある企業様とのお取引実績もございます。\nお打ち合わせ時にご紹介させていただきますのでお気軽にご相談ください。",
  },
  {
    question:
      "すぐにでも運用を開始したいと考えております。運用開始までタイトですが可能でしょうか？",
    answer:
      "可能です。弊社は社内で一気通貫したスピード感のある運用体制をとっております。\nそのため最短2週間～4週間で運用開始することが可能です。",
  },
  {
    question:
      "月に1回結果レポートを作成していただけるとのことでしたが、粒度はどのくらいでしょうか？",
    answer:
      "簡易的ではなく細かくお出しいたします。\n数値分析やPDCAの進捗、コンテンツごとの反応や成果までを可視化し「次に何をすべきか」を具体的に記載したレポートをご提出させていただきます。\n実際のレポートなど、詳しくはお打ち合わせにてご説明させていただきます。",
  },
  {
    question: "他社との差別化のポイントはどこですか？",
    answer:
      "“クリエイティブの質”です。\nSNSはバズれば良いと思われがちですが、ただ再生数を取るだけでは意味がありません。\nクライアントが何を目的としていて、ユーザーにどういうアクションをしてほしいのか。それをしっかり考えて形にする「マーケ視点のクリエイティブ」が弊社の強みになります。",
  },
  {
    question: "社員が動画に出演できないのですが大丈夫でしょうか？",
    answer:
      "問題ございません。\n出演者を使用しない運用も可能です。また、弊社では総クリエイター数約700人、TikTok総フォロワー数7000万の自社プロダクションを保有しているため、他社で行うよりも安価にキャスティングすることが可能です。",
  },
];

export default function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundText}>Q&A</div>
      <div className={styles.container}>
        <h2 className={styles.heading}>よくあるご質問</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
