import Problems from "@/components/Problems/Problems";
import Solutions from "@/components/Solutions/Solutions";
import Cta from "@/components/Cta/Cta";
import styles from "./FeaturesSection.module.scss";

export default function FeaturesSection() {
  return (
    <section id="problems" className={styles.section}>
      <div className={styles.container}>
        <Problems />
        <Solutions />
        <Cta />
      </div>
    </section>
  );
}
