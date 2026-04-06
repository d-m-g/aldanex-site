import Container from "./Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.companies}>
          Aldanex Group OY, Y-tunnus 2743281-5 | Aldanex Pro OY, Y-tunnus
          3213166-2 | Aldanex OY, Y-tunnus 3280836-2
        </p>
        <div className={styles.contactRow}>
          <a className={styles.link} href="tel:+358417587388">
            +358417587388
          </a>
          <span aria-hidden="true" className={styles.dot}>
            •
          </span>
          <a className={styles.link} href="mailto:info@aldanex.fi">
            info@aldanex.fi
          </a>
          <span aria-hidden="true" className={styles.dot}>
            •
          </span>
          <span className={styles.copy}>© All rights reserved 2026</span>
        </div>
      </Container>
    </footer>
  );
}
