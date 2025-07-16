import Hero from "@/components/Hero/Hero";
import TrendAnalysisSection from "@/components/TrendAnalysisSection/TrendAnalysisSection";
import Works from "@/components/Works/Works";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection"; // インポート

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendAnalysisSection />
      <Works />
      <FeaturesSection />
      <section>
        <h2>お問い合わせ</h2>
        <p>こちらはお問い合わせのセクションです。</p>
      </section>
    </main>
  );
}
