import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { companyFacts } from "../lib/content";
import styles from "./CompanySection.module.css";

export default function CompanySection() {
  return (
    <Section>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <Heading eyebrow="Aldanex Group">
            Built across property and IT
          </Heading>
          <p className={styles.text}>
            Aldanex Group was originated in 2016 and currently consists of three
            companies spanning hospitality, rental operations, property
            maintenance, IT services, and digital marketing.
          </p>
        </div>
        <Card className={styles.card}>
          <ul className={styles.list}>
            {companyFacts.map((fact) => (
              <li className={styles.item} key={fact}>
                {fact}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
