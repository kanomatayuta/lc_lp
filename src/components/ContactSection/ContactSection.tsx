import HubSpotForm from "@/components/HubSpotForm/HubSpotForm";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>お問い合わせ</h2>
          <p className={styles.description}>
            サービスに関するご質問、お見積もりのご依頼など、お気軽にお問い合わせください。
            <br />
            担当者より、1営業日以内にご連絡いたします。
          </p>
        </div>
        <div className={styles.formWrapper}>
          {/* HubSpotフォームコンポーネントを呼び出し */}
          <HubSpotForm
            portalId="23744455"
            formId="50653fe6-459b-48da-8fa1-a36b5c0c6b35"
            region="na1"
          />
        </div>
      </div>
    </section>
  );
}
