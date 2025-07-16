import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* 今後、ここに他のセクション（事例紹介など）を追加していきます */}
      <section>
        <h2>事例紹介</h2>
        <p>こちらは事例紹介のセクションです。</p>
      </section>
      <section>
        <h2>お問い合わせ</h2>
        <p>こちらはお問い合わせのセクションです。</p>
      </section>
    </main>
  );
}
