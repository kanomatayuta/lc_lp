import ProblemCard from "@/components/ProblemCard/ProblemCard";
import styles from "./Problems.module.scss";

const problemsData = [
  {
    title: "トレンドの波に乗り切れず、更新が止まっている",
    imageSrc: "/images/features/problem/problem_01.png",
    description:
      "社内にリソースや知見がなく、TikTokのトレンドに乗り遅れてしまう。せっかくのフォロワーが離れていっている。",
  },
  {
    title: "広告費をかけても、売上に繋がっていない",
    imageSrc: "/images/features/problem/problem_02.png",
    description:
      "TikTok広告を出稿しているのに、動画の質や狙いたいターゲットが定まらず、肝心のCVに繋がっていない。何が原因か分からず、広告費だけが増えているように感じる。",
  },
  {
    title: "担当者が変わると、運用がストップしてしまう",
    imageSrc: "/images/features/problem/problem_03.png",
    description:
      "特定のクリエイターや担当者に運用を任せきりにした結果、その人がいなくなると運用がストップ。ノウハウも共有されず、アカウントの軸がブレてしまっている。",
  },
];

export default function Problems() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>こんなお悩みありませんか？</h2>
      <div className={styles.grid}>
        {problemsData.map((problem) => (
          <ProblemCard
            key={problem.title}
            title={problem.title}
            imageSrc={problem.imageSrc}
            description={problem.description}
          />
        ))}
      </div>
    </div>
  );
}
