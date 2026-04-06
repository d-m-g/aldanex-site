import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { homepageServices } from "../lib/content";
import styles from "./HomeServicesSection.module.css";

export default function HomeServicesSection() {
  return (
    <Section className={styles.section} id="services">
      <Heading align="center" as="h2" className={styles.heading}>
        Our services
      </Heading>
      <div className={styles.grid}>
        {homepageServices.map((service) => (
          <article className={styles.item} key={service.title}>
            <div className={styles.imageWrap}>
              <Image
                alt={service.imageAlt}
                className={styles.image}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1099px) 50vw, 33vw"
                src={service.imageSrc}
              />
            </div>
            <div className={styles.panel}>
              <h3 className={styles.title}>{service.title}</h3>
              <div className={styles.divider} />
              <p className={styles.body}>{service.description}</p>
              <ul className={styles.list}>
                {service.details.map((detail) => (
                  <li className={styles.listItem} key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link className={styles.button} href={service.href}>
                {service.ctaLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
