import styles from "./ReasonCard.module.scss";

type Props = {
  number: string;
  title: React.ReactNode;
  description: string;
};

export default function ReasonCard({ number, title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
