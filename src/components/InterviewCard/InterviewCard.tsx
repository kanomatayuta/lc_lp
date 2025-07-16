import Image from "next/image";
import styles from "./InterviewCard.module.scss";

type Props = {
  imageSrc: string;
  company: string;
  role: string;
  testimonial: string;
};

export default function InterviewCard({
  imageSrc,
  company,
  role,
  testimonial,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`${company} ${role}`}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.company}>{company}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.testimonial}>{testimonial}</p>
      </div>
    </div>
  );
}
