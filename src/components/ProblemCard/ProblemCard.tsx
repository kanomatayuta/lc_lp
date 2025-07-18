import Image from "next/image";
import styles from "./ProblemCard.module.scss";

// ★ titleの型を string から React.ReactNode に変更
type Props = {
  title: React.ReactNode;
  imageSrc: string;
  description: string;
};

export default function ProblemCard({ title, imageSrc, description }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={description} width={200} height={150} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
