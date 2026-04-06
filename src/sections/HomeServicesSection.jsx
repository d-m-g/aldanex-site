import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { homepageServices } from "../lib/content";
import styles from "./HomeServicesSection.module.css";

export default function HomeServicesSection() {
  return (
    <Section id="services" tone="accent">
      <div className={styles.intro}>
        <Heading eyebrow="Our services">Aldanex Group service lines</Heading>
        <p className={styles.copy}>
          The homepage now mirrors the current WordPress structure: property,
          IT, digital marketing, and direct contact.
        </p>
      </div>
      <div className={styles.grid}>
        {homepageServices.map((service) => (
          <Card className={styles.card} key={service.title}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.body}>{service.description}</p>
            <Button href={service.href} variant="secondary">
              Learn more
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
