/* Header.tsx */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss"; // SCSS 모듈 임포트

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#cases", label: "事例紹介" },
  { href: "#problems", label: "お悩み" },
  { href: "#reasons", label: "LCが選ばられる理由" },
  { href: "#flow", label: "運用の流れ" },
  { href: "#voices", label: "お客様の声" },
  { href: "#team", label: "社員紹介" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/brand_logo/lc_logo.png"
              alt="LC Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <nav className={styles.navDesktop}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.hamburgerBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* アイコンSVGは省略 */}
        </button>
      </div>

      <div className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
