import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { groupCompanies } from "../lib/content";
import styles from "./CompanySection.module.css";

function CompanyIcon({ icon }) {
  if (icon === "truck") {
    return (
      <svg
        aria-hidden="true"
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 7.5H14.5V15.5H3V7.5ZM14.5 10H18L20.5 12.5V15.5H14.5V10Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle
          cx="7.5"
          cy="17.5"
          r="1.75"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="17.5"
          cy="17.5"
          r="1.75"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "house") {
    return (
      <svg
        aria-hidden="true"
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 10.5L12 4L20 10.5V19H4V10.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M9.5 19V13.5H14.5V19"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="11"
        rx="1.75"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 19H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 16V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

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
            <span aria-hidden="true" className={styles.iconWrap}>
              <CompanyIcon icon={company.icon} />
            </span>
            <h3 className={styles.title}>{company.title}</h3>
            <p className={styles.text}>{company.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
