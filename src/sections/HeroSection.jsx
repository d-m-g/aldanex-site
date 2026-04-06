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
          <p className={styles.kicker}>Welcome to Aldanex Group</p>
          <Heading as="h1">
            Property, IT, and digital services under one group.
          </Heading>
          <p className={styles.lead}>
            Aldanex Group brings together short-term and long-term rentals,
            property maintenance, SaaS delivery, and digital marketing into one
            focused company presence.
          </p>
          <div className={styles.actions}>
            <Button href="/#contact">Contact us</Button>
            <Button href="/property" variant="secondary">
              Explore property
            </Button>
          </div>
        </div>
        <Card className={styles.panel}>
          <p className={styles.panelLabel}>Current focus areas</p>
          <ul className={styles.points}>
            <li>Rauhan Marinella Village and apartment rentals</li>
            <li>Property maintenance for houses in Finland</li>
            <li>IT services, SaaS solutions, and digital marketing</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
