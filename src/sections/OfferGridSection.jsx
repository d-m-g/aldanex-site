import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./OfferGridSection.module.css";

export default function OfferGridSection({ eyebrow, title, intro, items }) {
  return (
    <Section tone="accent">
      <div className={`${styles.intro} ${!intro ? styles.introCompact : ""}`}>
        <Heading eyebrow={eyebrow}>{title}</Heading>
        {intro ? <p className={styles.copy}>{intro}</p> : null}
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <Card
            className={`${styles.card} ${item.fullWidth ? styles.cardFullWidth : ""}`}
            key={item.title}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.list}>
              {item.bullets.map((bullet) => (
                <li className={styles.bullet} key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
            {item.ctaHref ? (
              <Button
                href={item.ctaHref}
                rel={item.ctaHref.startsWith("http") ? "noreferrer" : undefined}
                target={item.ctaHref.startsWith("http") ? "_blank" : undefined}
                variant="secondary"
              >
                {item.ctaLabel}
              </Button>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
