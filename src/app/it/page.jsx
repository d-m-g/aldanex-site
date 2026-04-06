import ContactCalloutSection from "../../sections/ContactCalloutSection";
import OfferGridSection from "../../sections/OfferGridSection";
import PageHero from "../../sections/PageHero";
import { itCapabilities } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "IT",
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
        title="IT services for serious engineering and growth work."
      />
      <OfferGridSection
        eyebrow="Capabilities"
        intro="The live WordPress `/saas/` page content is now migrated into the cleaner `/it` route while preserving the existing service themes and technology stack."
        items={itCapabilities}
        title="Current Aldanex IT and digital service lines"
      />
      <ContactCalloutSection />
    </main>
  );
}
