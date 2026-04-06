import HeroSection from "../sections/HeroSection";
import FocusSection from "../sections/FocusSection";
import ContactPreviewSection from "../sections/ContactPreviewSection";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FocusSection />
      <ContactPreviewSection />
    </main>
  );
}
