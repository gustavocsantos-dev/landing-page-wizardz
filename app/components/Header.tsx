"use client"

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
  <header className={styles.header}>
    <section className={styles.headerSection}>
      <button className={styles.btnMobile} onClick={toggleMenu}>
        <Image
          src="/menu.png"
          alt="menu"
          width={30}
          height={30}

        />
      </button>
        <Link href="/" className={styles.logo}>
          <Image
            src="/star-logo.png"
            alt="star-logo"
            className={styles.starLogo}
            width={64}
            height={64}
          />
          <p className={styles.nameLogo}>WizardZ</p>
        </Link>
      </section>
      <div className={styles.navBtn}>
        <section className={styles.nav}>
          <nav>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/use-cases">Use Cases</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
        </section>
        <section className={styles.headerBtn}>
          <button>Request a quote</button>
        </section>
          <section className={styles.headerActions}>
        </section>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/star-logo.png"
              alt="star-logo"
              width={64}
              height={64}
              className={styles.starLogo}
            />
            <p className={styles.nameLogo}>WizardZ</p>
          </Link>
          <button className={styles.closeBtn} onClick={closeMenu}>
            <X size={32} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={closeMenu}>About us</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/use-cases" onClick={closeMenu}>Use Cases</Link>
          <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
        </nav>

        <div className={styles.mobileQuote}>
          <button className={styles.quoteBtn} onClick={closeMenu}>
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
}