import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  primaryCta,
  secondaryCta,
}) {
  return (
    <Section className={styles.section}>
      <div className={styles.layout}>
        <div>
          <Heading as="h1" eyebrow={eyebrow}>
            {title}
          </Heading>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            {primaryCta ? (
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>At a glance</p>
          <ul className={styles.list}>
            {stats.map((stat) => (
              <li className={styles.item} key={stat}>
                {stat}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
