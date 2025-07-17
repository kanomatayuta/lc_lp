import Image from "next/image";
import styles from "./TeamMemberCard.module.scss";

type Props = {
  imageSrc: string;
  name: string;
  description: string;
};

export default function TeamMemberCard({ imageSrc, name, description }: Props) {
  return (
    <div className={styles.card}>
      {/* The `layout` and `objectFit` props are replaced by `fill` and `sizes` */}
      <Image
        src={imageSrc}
        alt={name}
        fill // Use the fill prop to make the image fill its parent container
        sizes="(max-width: 1023px) 80vw, 33vw" // Helps Next.js optimize image loading
        className={styles.image}
      />
      <div className={styles.contentOverlay}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
