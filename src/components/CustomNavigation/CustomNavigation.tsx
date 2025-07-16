// このファイルは変更ありません。scssの修正のみで対応します。
import styles from "./CustomNavigation.module.scss";

type Props = {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
};

const ArrowIcon = () => (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 15L1.5 8L8.5 1"
      stroke="white"
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
          <ArrowIcon />
        </button>
        <button
          onClick={onNext}
          className={`${styles.navButton} ${styles.next}`}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
