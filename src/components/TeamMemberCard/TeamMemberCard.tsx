import Image from "next/image";
import styles from "./TeamMemberCard.module.scss";

// PropsからtitleとborderColorを削除
type Props = {
  imageSrc: string;
  name: string;
  description: string;
};

export default function TeamMemberCard({ imageSrc, name, description }: Props) {
  return (
    // style属性とtitleOverlayを削除
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        objectFit="cover"
        className={styles.image}
      />
      <div className={styles.contentOverlay}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
