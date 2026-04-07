import Image from "next/image";
import ContactCalloutSection from "../../sections/ContactCalloutSection";
import OfferGridSection from "../../sections/OfferGridSection";
import PageHero from "../../sections/PageHero";
import { propertyHighlights } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Property",
  description:
    "Property stays, rentals, and maintenance services from Aldanex Group across Finland.",
  path: "/property",
});

export default function PropertyPage() {
  return (
    <main>
      <section aria-label="Property visual banner" className={styles.banner}>
        <Image
          alt="Property services visual"
          className={styles.bannerImage}
          fill
          priority
          sizes="100vw"
          src="/assets/SERVICES/SERVICE_long.jpg"
        />
      </section>
      <PageHero
        description="Aldanex property services cover hospitality, short-term rentals, long-term rentals, and ongoing maintenance support for homes in Finland."
        eyebrow="Property"
        primaryCta={{ href: "/#contact", label: "Contact Aldanex" }}
        secondaryCta={{
          href: "https://rauhanvillage.com/",
          label: "View Marinella Village",
        }}
        stats={[
          "Rauhan Marinella Village hospitality",
          "Daily and monthly apartment offerings",
          "Private house maintenance support",
        ]}
        title="Property services built around stays, rentals, and care."
      />
      <OfferGridSection
        eyebrow="What we offer"
        items={propertyHighlights}
        title="Current Aldanex property offerings"
      />
      <ContactCalloutSection />
    </main>
  );
}
