import { useRef, useEffect, useState } from "react";
import websiteDesktop from "@/assets/scm-website-desktop.png";
import websiteMobile from "@/assets/scm-website-mobile.png";
import socialSteam from "@/assets/scm-social-steam.png";
import socialMagnifier from "@/assets/scm-social-magnifier.png";
import socialCommittee from "@/assets/scm-social-committee.png";



function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const duration = 2000;
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplayed(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{displayed.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 30, suffix: "K+", label: "Website Page Views", gradient: "linear-gradient(135deg, var(--magenta), #c4187a)" },
  { value: 178, suffix: "K+", label: "Social Media Reach", gradient: "linear-gradient(135deg, var(--teal), #009990)" },
  { value: 28, suffix: "K+", label: "Search Impressions", gradient: "linear-gradient(135deg, var(--orange), #c45200)" },
  { value: 3, suffix: "×", label: "Email List Growth", gradient: "linear-gradient(135deg, #5a7505, #b8e60d)" },
];

const tags = ["SEO", "GBP", "Social", "Email", "Outreach", "Content"];

export function CaseStudySection() {
  return (
    <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="results">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-soft text-[#c45200] rounded-full text-xs font-semibold tracking-wide mb-5">
        Real Results
      </span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[880px] mb-5">
        From zero to 30,000<br />
        <span className="gradient-accent">page views in 12 months.</span>
      </h2>
      <p className="text-[19px] leading-relaxed text-ink-soft max-w-[680px] mb-[60px]">
        No physical location. No paid ads. No head start. Just a single connected system where every channel reinforced the others.
      </p>

      <div className="bg-bg-soft rounded-[32px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.08), transparent 70%)" }} />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-[50px] pb-8 border-b border-line relative z-10">
          <div>
            <p className="text-sm text-ink-mute font-semibold uppercase tracking-wider mb-1">Featured Case Study</p>
            <p className="text-[32px] font-bold tracking-tight">Sarasota Children's Museum</p>
          </div>
          <div className="flex gap-1.5 flex-wrap md:justify-end md:max-w-[320px]">
            {tags.map((t) => (
              <span key={t} className="text-[11px] font-semibold px-2.5 py-1 bg-white border border-line rounded-full text-ink-soft">{t}</span>
            ))}
          </div>
        </div>

        {/* Device mockup with social posts */}
        <div className="relative mb-[80px] z-10">
          <div className="relative max-w-[920px] mx-auto" style={{ aspectRatio: "16 / 11" }}>
            {/* Laptop */}
            <div className="absolute inset-0 flex items-start justify-center pt-[4%]">
              <div className="w-[78%] max-w-[760px]">
                <div className="relative bg-[#1a1a1a] rounded-t-[14px] p-2 md:p-2.5 shadow-2xl">
                  <div className="aspect-[16/10] bg-white rounded-[6px] overflow-hidden">
                    <img src={websiteDesktop} alt="Sarasota Children's Museum homepage" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-b from-[#2a2a2a] to-[#0d0d0d] rounded-b-[20px] mx-[-3%] shadow-xl" />
                <div className="h-1.5 bg-[#1a1a1a] rounded-b-[8px] w-[14%] mx-auto" />
              </div>
            </div>

            {/* Floating phone */}
            <div className="absolute right-[4%] md:right-[8%] bottom-[-2%] w-[26%] max-w-[170px] z-30">
              <div className="relative bg-[#1a1a1a] rounded-[22px] p-1.5 shadow-2xl border border-[#333]">
                <div className="aspect-[9/19] bg-white rounded-[18px] overflow-hidden">
                  <img src={websiteMobile} alt="Sarasota Children's Museum mobile site" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Floating social posts */}
            <div className="hidden md:block absolute left-[-2%] top-[10%] w-[18%] max-w-[150px] rotate-[-8deg] z-20 transition-transform duration-300 hover:rotate-[-4deg] hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <img src={socialSteam} alt="STEAM Machine social post" className="w-full h-auto block" />
              </div>
            </div>
            <div className="hidden md:block absolute left-[8%] bottom-[-2%] w-[16%] max-w-[130px] rotate-[6deg] z-20 transition-transform duration-300 hover:rotate-[3deg] hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <img src={socialMagnifier} alt="Giving Challenge social post" className="w-full h-auto block" />
              </div>
            </div>
            <div className="hidden md:block absolute right-[-2%] top-[4%] w-[17%] max-w-[140px] rotate-[7deg] z-20 transition-transform duration-300 hover:rotate-[3deg] hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <img src={socialCommittee} alt="Committee members social post" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[clamp(48px,5vw,68px)] font-bold tracking-[-0.04em] leading-none" style={{ background: stat.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[13px] text-ink-soft font-medium mt-3 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <p className="mt-10 pt-8 border-t border-line text-[17px] leading-relaxed text-ink-soft max-w-[800px] relative z-10">
          No storefront. No foot traffic. No head start. Just a connected digital strategy where <strong className="text-ink font-semibold">SEO fed the website, social built trust, GBP drove calls, and email nurtured the community</strong>. Every channel part of one system — and the numbers compounded month over month.
        </p>
      </div>
    </section>
  );
}
