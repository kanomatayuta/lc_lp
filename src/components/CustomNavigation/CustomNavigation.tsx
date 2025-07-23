// このファイルは変更ありません。scssの修正のみで対応します。
import styles from "./CustomNavigation.module.scss";

type Props = {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
};

const ArrowLeftIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="15 18 9 12 15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="9 6 15 12 9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CustomNavigation({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className={styles.navigation}>
      <div className={styles.counter}>
        <span className={styles.current}>
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className={styles.divider}>/</span>
        <span className={styles.total}>
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
      <div className={styles.buttons}>
        <button onClick={onPrev} className={styles.navButton}>
          <ArrowLeftIcon />
        </button>
        <button
          onClick={onNext}
          className={`${styles.navButton} ${styles.next}`}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
