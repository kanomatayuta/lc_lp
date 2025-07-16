import Image from "next/image";
import styles from "./Solution.module.scss";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function Solution({ title, description, imageSrc }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} width={300} height={200} />
      </div>
    </div>
  );
}
