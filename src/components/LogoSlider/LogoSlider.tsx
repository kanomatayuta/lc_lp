import Image from "next/image";
import styles from "./LogoSlider.module.scss";

const logoFiles = [
  "client_logo_image01.png",
  "client_logo_image02.png",
  "client_logo_image03.png",
  "client_logo_image04.png",
  "client_logo_image05.png",
  "client_logo_image06.png",
];

const logos = logoFiles.map((file) => `/images/client_logo/${file}`);

// ★ 無限ループをより確実にするため、ロゴのリストを8回に増やします
const repeatedLogos = [
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
];

export default function LogoSlider() {
  return (
    <div className={styles.slider}>
      <ul className={styles.track}>
        {repeatedLogos.map((logo, index) => (
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
