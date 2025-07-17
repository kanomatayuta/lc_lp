import Hero from "@/components/Hero/Hero";
import TrendAnalysisSection from "@/components/TrendAnalysisSection/TrendAnalysisSection";
import Works from "@/components/Works/Works";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import ReasonsSection from "@/components/ReasonsSection/ReasonsSection";
import FlowSection from "@/components/FlowSection/FlowSection";
import InterviewSection from "@/components/InterviewSection/InterviewSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import ContactSection from "@/components/ContactSection/ContactSection"; // インポート

export default function Home() {
  return (
    <main>
      <Hero />
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
