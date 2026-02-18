import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import { ReactLenis, useLenis } from "lenis/react";
export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#fff",
        width: "100%",
      }}
    >
      <ReactLenis root />
      {/* ── HERO SECTION ── */}
      <HeroSection />
      {/* ── FEATURES SECTION ── */}
      <FeaturesSection />
      {/* ── FAQ SECTION ── */}
      <FAQSection />
      {/* ── CONTACT SECTION ── */}
      <ContactSection />
      {/* ── CTA BANNER ── */}
      <CTABanner />
      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
