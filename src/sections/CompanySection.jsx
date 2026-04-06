import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { groupCompanies } from "../lib/content";
import styles from "./CompanySection.module.css";

export default function CompanySection() {
  return (
    <Section tone="accent">
      <div className={styles.intro}>
        <Heading eyebrow="About the group">
          Aldanex Group was originated in year 2016 and currently consists of 3
          companies.
        </Heading>
      </div>
      <div className={styles.grid}>
        {groupCompanies.map((company) => (
          <Card className={styles.card} key={company.title}>
            <h3 className={styles.title}>{company.title}</h3>
            <p className={styles.text}>{company.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
