import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";

// パフォーマンス向上のため、スクロールしないと表示されないセクションを動的に読み込む
const TrendAnalysisSection = dynamic(
  () => import("@/components/TrendAnalysisSection/TrendAnalysisSection")
);
const Works = dynamic(() => import("@/components/Works/Works"));
const FeaturesSection = dynamic(
  () => import("@/components/FeaturesSection/FeaturesSection")
);
const ReasonsSection = dynamic(
  () => import("@/components/ReasonsSection/ReasonsSection")
);
const FlowSection = dynamic(
  () => import("@/components/FlowSection/FlowSection")
);
const InterviewSection = dynamic(
  () => import("@/components/InterviewSection/InterviewSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
const TeamSection = dynamic(
  () => import("@/components/TeamSection/TeamSection")
);
const ContactSection = dynamic(
  () => import("@/components/ContactSection/ContactSection")
);

export default function Home() {
  return (
    <main>
      {/* ページの初期表示に必須なヒーローセクションは通常通り読み込む */}
      <Hero />

      {/* 以下、動的に読み込むコンポーネント群 */}
      <TrendAnalysisSection />
      <Works />
      <FeaturesSection />
      <ReasonsSection />
      <FlowSection />
      <InterviewSection />
      <FaqSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
