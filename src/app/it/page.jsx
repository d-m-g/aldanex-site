import ContactCalloutSection from "../../sections/ContactCalloutSection";
import OfferGridSection from "../../sections/OfferGridSection";
import PageHero from "../../sections/PageHero";
import { itCapabilities } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "IT services",
  description:
    "IT services from Aldanex Group including SaaS development, digital marketing, and technical consulting.",
  path: "/it",
});

export default function ItPage() {
  return (
    <main>
      <PageHero
        description="Aldanex IT services span complex SaaS delivery, digital marketing, analytics, consulting, and technical support for clients in Europe and the US."
        eyebrow="IT"
        primaryCta={{ href: "/#contact", label: "Start a conversation" }}
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
        title="Current Aldanex IT and digital service lines"
      />
      <ContactCalloutSection />
    </main>
  );
}
