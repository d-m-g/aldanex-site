import Container from "./Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.title}>Aldanex Group</p>
          <p className={styles.copy}>
            Next.js rebuild foundation for property and IT services.
          </p>
        </div>
        <div className={styles.meta}>
          <p>Built for the Aldanex.fi migration roadmap.</p>
          <p>Phase 3 design system baseline.</p>
        </div>
      </Container>
    </footer>
  );
}
