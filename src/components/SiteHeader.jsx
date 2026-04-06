"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Container from "./Container";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/property", label: "Property" },
  { href: "/it", label: "IT" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/#contact") {
      return pathname === "/";
    }

    return pathname === href;
  }

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>A</span>
          <span className={styles.brandText}>Aldanex Group</span>
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {navItems.map((item) => (
            <Link
              className={styles.link}
              data-active={isActive(item.href)}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button className={styles.cta} href="/#contact" variant="secondary">
          Start a conversation
        </Button>
      </Container>
    </header>
  );
}
