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
          <p className={styles.kicker}>Aldanex Group</p>
          <Heading as="h1">
            Property, maintenance, IT services, and digital marketing.
          </Heading>
          <p className={styles.lead}>
            A single group presence for hospitality, rental apartments,
            maintenance support, SaaS development, and marketing services.
          </p>
          <div className={styles.actions}>
            <Button href="/#services">Our services</Button>
            <Button href="/#contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
        <Card className={styles.panel}>
          <p className={styles.panelLabel}>Main directions</p>
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
