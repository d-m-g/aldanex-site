import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <Section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Aldanex.fi rebuild foundation</p>
          <Heading as="h1">
            A calmer, sharper web presence for property and IT work.
          </Heading>
          <p className={styles.lead}>
            This homepage now uses the shared layout shell and reusable UI
            primitives that will support the upcoming `property` and `it`
            routes.
          </p>
          <div className={styles.actions}>
            <Button href="#contact">Discuss the migration</Button>
            <Button href="#focus" variant="secondary">
              See the foundation
            </Button>
          </div>
        </div>
        <Card className={styles.panel}>
          <p className={styles.panelLabel}>Phase 3 deliverable</p>
          <ul className={styles.points}>
            <li>Shared header, footer, and responsive navigation</li>
            <li>Reusable components ready for content migration</li>
            <li>SEO helper utilities ready for page-level metadata</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
