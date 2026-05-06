import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FrameworkSection } from "@/components/FrameworkSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Woman In Tech | Be Seen. Be Trusted. Grow Confidently." },
      { name: "description", content: "A connected digital strategy that builds visibility, earns credibility, and scales what's working. SEO, websites, social media & automations — one system." },
      { property: "og:title", content: "Woman In Tech | Be Seen. Be Trusted. Grow Confidently." },
      { property: "og:description", content: "A connected digital strategy that builds visibility, earns credibility, and scales what's working." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FrameworkSection />
      <CaseStudySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
