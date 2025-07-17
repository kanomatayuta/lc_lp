import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import TrendAnalysisSection from "@/components/TrendAnalysisSection/TrendAnalysisSection";
import Works from "@/components/Works/Works";

// ★ 表示が遅れても良いコンポーネントを全てdynamic importに切り替える
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
      {/* ページの初期表示に必須なコンポーネントは通常通り読み込む */}
      <Hero />
      <TrendAnalysisSection />
      <Works />

      {/* 動的に読み込むコンポーネント */}
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
