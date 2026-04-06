import Container from "./Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.title}>Aldanex Group</p>
          <p className={styles.copy}>
            Property, IT, and digital services in Finland.
          </p>
        </div>
        <div className={styles.meta}>
          <p>+358417587388</p>
          <p>info@aldanex.fi</p>
          <p>Vipelenkuja 4, Rauha, 55320, Finland</p>
        </div>
      </Container>
    </footer>
  );
}
