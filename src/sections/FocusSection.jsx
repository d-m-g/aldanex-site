import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./FocusSection.module.css";

const pillars = [
  {
    title: "Layout shell",
    body: "A reusable header and footer now establish the page frame for the whole migration.",
  },
  {
    title: "UI primitives",
    body: "Buttons, cards, sections, inputs, and typography components now give us a consistent base.",
  },
  {
    title: "Metadata helpers",
    body: "Shared SEO utilities make it easier to add page-level metadata as the real routes land.",
  },
];

export default function FocusSection() {
  return (
    <Section id="focus" tone="accent">
      <div className={styles.intro}>
        <Heading eyebrow="Foundation">What Phase 3 puts in place</Heading>
        <p className={styles.copy}>
          The rebuild now has a component baseline that can be reused across the
          homepage, property page, and IT page without re-solving layout or form
          styling each time.
        </p>
      </div>
      <div className={styles.grid}>
        {pillars.map((pillar) => (
          <Card className={styles.card} key={pillar.title}>
            <h3 className={styles.title}>{pillar.title}</h3>
            <p className={styles.body}>{pillar.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
