import Section from "../components/Section";
import { homepageStats } from "../lib/content";
import styles from "./StatsBandSection.module.css";

export default function StatsBandSection() {
  return (
    <Section>
      <div className={styles.band}>
        {homepageStats.map((stat) => (
          <div className={styles.item} key={stat}>
            <p className={styles.text}>{stat}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
