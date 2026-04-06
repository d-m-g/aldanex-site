import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./FocusSection.module.css";

const pillars = [
  {
    title: "Aldanex Group OY",
    body: "Rauhan Marinella Village, cottages and apartments, IT services, and property maintenance.",
  },
  {
    title: "Aldanex Pro OY",
    body: "Focused on property long-term rent within the broader group offering.",
  },
  {
    title: "Aldanex OY",
    body: "IT services and digital marketing support for clients that need deeper technical capability.",
  },
];

export default function FocusSection() {
  return (
    <Section id="focus" tone="accent">
      <div className={styles.intro}>
        <Heading eyebrow="Group structure">
          Three companies, one service network
        </Heading>
        <p className={styles.copy}>
          The current Aldanex homepage introduces the group through three
          companies. This section keeps that structure while presenting it in a
          cleaner reusable layout.
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
