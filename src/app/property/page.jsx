import ContactCalloutSection from "../../sections/ContactCalloutSection";
import OfferGridSection from "../../sections/OfferGridSection";
import PageHero from "../../sections/PageHero";
import { propertyHighlights } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Property",
  description:
    "Property stays, rentals, and maintenance services from Aldanex Group across Finland.",
  path: "/property",
});

export default function PropertyPage() {
  return (
    <main>
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
        intro="This page migrates the current WordPress property content into reusable cards so it is ready for further refinement without losing the existing service scope."
        items={propertyHighlights}
        title="Current Aldanex property offerings"
      />
      <ContactCalloutSection />
    </main>
  );
}
