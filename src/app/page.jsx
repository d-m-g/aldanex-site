import CompanySection from "../sections/CompanySection";
import HomeServicesSection from "../sections/HomeServicesSection";
import HeroSection from "../sections/HeroSection";
import FocusSection from "../sections/FocusSection";
import ContactPreviewSection from "../sections/ContactPreviewSection";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Aldanex Group homepage covering property services, IT services, digital marketing, and direct contact.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeServicesSection />
      <FocusSection />
      <CompanySection />
      <ContactPreviewSection />
    </main>
  );
}
