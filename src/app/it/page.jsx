import Image from "next/image";
import ContactCalloutSection from "../../sections/ContactCalloutSection";
import OfferGridSection from "../../sections/OfferGridSection";
import PageHero from "../../sections/PageHero";
import { itCapabilities } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "IT services",
  description:
    "IT services from Aldanex Group including SaaS development, digital marketing, and technical consulting.",
  path: "/it",
});

export default function ItPage() {
  return (
    <main>
      <section aria-label="IT visual banner" className={styles.banner}>
        <Image
          alt="IT services visual"
          className={styles.bannerImage}
          fill
          priority
          sizes="100vw"
          src="/assets/SERVICES/What_is_Information_Technology.webp"
        />
      </section>
      <PageHero
        description="Aldanex IT services span complex SaaS delivery, digital marketing, analytics, consulting, and technical support for clients in Europe and the US."
        primaryCta={{ href: "/#contact", label: "Contact Us" }}
        secondaryCta={{ href: "/#services", label: "See all services" }}
        stats={[
          "React, Angular, Vue, Python, and Node.js",
          "Cloud deployment across AWS and Google Cloud",
          "SEO, SMM, BI, and technical support capability",
        ]}
        title="IT services"
      />
      <OfferGridSection
        eyebrow="Capabilities"
        items={itCapabilities}
      />
      <ContactCalloutSection />
    </main>
  );
}
