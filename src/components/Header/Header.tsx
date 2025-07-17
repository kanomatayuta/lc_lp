/* Header.tsx */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

// ナビゲーションの項目
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

  // モバイルメニューを閉じる関数
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/brand_logo/lc_logo.png"
              alt="LC Logo"
              width={120}
              height={40}
              priority
              // ★ 画像の比率を維持するためのスタイルを追加
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>

        {/* PC用ナビゲーション */}
        <nav className={styles.navDesktop}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーメニューボタン */}
        <button
          className={styles.hamburgerBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {/* アイコンの線 */}
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>

      {/* モバイル用ナビゲーション */}
      <div className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu} // メニュー項目クリックで閉じる
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
