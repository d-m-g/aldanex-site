import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Aldanex</h1>
        <p>
          This is your simple Next.js website template. Edit{" "}
          <code>src/app/page.jsx</code> to start building.
        </p>
        <a
          className={styles.button}
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Learn Next.js
        </a>
      </section>
    </main>
  );
}
