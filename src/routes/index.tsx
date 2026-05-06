import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoStrip } from "@/components/LogoStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { FrameworkSection } from "@/components/FrameworkSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Woman In Tech — Get Found in AI Search" },
      { name: "description", content: "A connected digital strategy that builds visibility in ChatGPT, Perplexity & Google AI Overviews. The Be Found Framework™ by Kara Noreika." },
      { property: "og:title", content: "Woman In Tech — Get Found in AI Search" },
      { property: "og:description", content: "Stop being invisible in AI search. The Be Found Framework™ rebuilds your visibility from the ground up." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <ProblemSection />
      <FrameworkSection />
      <CaseStudySection />
      <AboutSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
