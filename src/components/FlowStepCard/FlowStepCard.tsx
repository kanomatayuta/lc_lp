import Image from "next/image";
import styles from "./FlowStepCard.module.scss";

type Props = {
  number: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
};

export default function FlowStepCard({
  number,
  title,
  subtitle,
  imageSrc,
  description,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>{number}</span>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} width={150} height={150} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
