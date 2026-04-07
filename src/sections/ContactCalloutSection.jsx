import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { contactInfo } from "../lib/content";
import styles from "./ContactCalloutSection.module.css";

export default function ContactCalloutSection() {
  return (
    <Section>
      <Card className={styles.card}>
        <div>
          <Heading eyebrow="Get in touch">
            Ready to discuss your next project?
          </Heading>
          <p className={styles.copy}>
            Reach out for apartment availability, maintenance services, SaaS
            development, or digital marketing support.
          </p>
        </div>
        <div className={styles.details}>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.address}</p>
          <Button href="/#contact">Contact us</Button>
        </div>
      </Card>
    </Section>
  );
}
