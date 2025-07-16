import Image from "next/image";
import styles from "./LogoSlider.module.scss";

// 表示するロゴのファイル名をすべて記述します
const logoFiles = [
  "client_logo_image01.png",
  "client_logo_image02.png",
  "client_logo_image03.png",
  "client_logo_image04.png",
  "client_logo_image05.png",
  "client_logo_image06.png",
];

// public/client_logo/ までのパスを結合します
const logos = logoFiles.map((file) => `/images/client_logo/${file}`);

export default function LogoSlider() {
  return (
    <div className={styles.slider}>
      <ul className={styles.track}>
        {/* 無限ループのために、ロゴのリストを2回連続で描画します */}
        {[...logos, ...logos].map((logo, index) => (
          <li key={index} className={styles.logoItem}>
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              width={200}
              height={80}
              className={styles.logoImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
