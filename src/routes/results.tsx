import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Globe,
  BarChart2,
  Briefcase,
  Search,
  Mail,
  MapPin,
  FileText,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  Target,
} from "lucide-react";
import websiteDesktop from "@/assets/scm-website-desktop.png";
import websiteMobile from "@/assets/scm-website-mobile.png";
import socialMagnifier from "@/assets/scm-social-magnifier.png";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
  head: () => ({
    meta: [
      { title: "Results | Woman In Tech — Real Digital Marketing Outcomes" },
      {
        name: "description",
        content:
          "178K+ social reach, 604% search visibility growth, 3x email list growth. Real verified results from Woman In Tech clients — data-backed digital marketing in Sarasota.",
      },
      { property: "og:title", content: "Results | Woman In Tech — Real Digital Marketing Outcomes" },
      {
        property: "og:description",
        content:
          "Real verified results from Woman In Tech clients — SEO, content, and social that compound.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

/* ------------------------- Animated counter ------------------------- */
function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done) {
          setDone(true);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, done]);
  return { ref, val };
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  format = (n: number) => n.toLocaleString(),
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const { ref, val } = useCountUp(value);
  return (
    <span ref={ref}>
      {prefix}
      {format(val)}
      {suffix}
    </span>
  );
}

/* ------------------------- Stat chip ------------------------- */
type ChipColor = "magenta" | "teal" | "orange" | "lime";
const chipGradient: Record<ChipColor, string> = {
  magenta: "linear-gradient(135deg, #e91e8a, #c4187a)",
  teal: "linear-gradient(135deg, #00bfb3, #009990)",
  orange: "linear-gradient(135deg, #ff7a1a, #c45200)",
  lime: "linear-gradient(135deg, #5a7505, #b8e60d)",
};

function StatChip({
  icon: Icon,
  label,
  value,
  sub,
  color = "magenta",
  dark = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: React.ReactNode;
  sub?: string;
  color?: ChipColor;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5 ${
        dark ? "border border-white/10" : "border border-line"
      }`}
      style={{
        background: dark ? "rgba(255,255,255,0.04)" : "white",
        boxShadow: dark ? "none" : "0 1px 2px rgba(11,20,55,0.04)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className={dark ? "text-teal" : "text-teal"} />
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${dark ? "text-teal" : "text-teal"}`}>
          {label}
        </span>
      </div>
      <div
        className="text-[clamp(32px,4vw,44px)] font-bold tracking-[-0.03em] leading-none"
        style={{
          background: chipGradient[color],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </div>
      {sub && (
        <p className={`text-[13px] mt-2 leading-snug ${dark ? "text-white/60" : "text-ink-soft"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ------------------------- Page ------------------------- */
function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="relative pt-[160px] pb-[120px] px-8 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }}>
        <div className="absolute -top-[200px] left-[10%] w-[600px] h-[600px] blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.35), transparent 60%)" }} />
        <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.25), transparent 60%)" }} />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-medium mb-7" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <Sparkles size={14} className="text-lime" />
            Verified Client Outcomes
          </div>

          <h1 className="text-[clamp(48px,7vw,92px)] font-bold tracking-[-0.035em] leading-[1.02] mb-4 max-w-[900px]">
            The Work{" "}
            <span style={{ background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 50%, #b8e60d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Speaks for Itself.
            </span>
          </h1>
          <div className="w-24 h-1 rounded-full mb-7" style={{ background: "var(--magenta)" }} />

          <p className="text-[20px] leading-relaxed max-w-[760px] text-white/80">
            <strong className="text-white">178,000+</strong> social reach.{" "}
            <strong className="text-white">57% more</strong> search clicks.{" "}
            <strong className="text-white">604% more</strong> visibility on Google. Real results from real clients —
            no vanity metrics, no inflated numbers, just documented growth.
          </p>

          <div className="mt-14 flex flex-col items-start gap-2 text-white/50 text-xs uppercase tracking-[0.2em]">
            <span>Scroll for proof</span>
            <ArrowDown size={18} className="animate-bounce text-teal" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Philosophy strip */}
      <section className="py-[100px] px-8" style={{ background: "linear-gradient(180deg, var(--bg-soft), var(--teal-soft) 200%)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto">
            {[
              {
                icon: Target,
                title: "We measure what matters.",
                body: "Traffic, search visibility, and engagement — not impressions from bots or followers who never convert.",
              },
              {
                icon: ShieldCheck,
                title: "We show our work.",
                body: "Every result below is backed by actual platform data — Google Search Console, GA4, LinkedIn analytics.",
              },
              {
                icon: TrendingUp,
                title: "We build for the long game.",
                body: "No paid-ad pumping. These numbers come from SEO, content strategy, and consistent brand presence.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-7 border border-line shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-magenta-soft text-magenta">
                  <c.icon size={20} />
                </div>
                <h3 className="text-[20px] font-bold mb-2 tracking-tight">{c.title}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Featured Case Study: SCM */}
      <section className="py-[120px] px-8 max-w-[1200px] mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-soft text-[#c45200] rounded-full text-xs font-semibold tracking-wide mb-5">
          ✦ Featured Case Study
        </span>
        <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[900px] mb-5">
          From Static to Seen:{" "}
          <span className="gradient-accent">How a Sarasota Nonprofit Grew Its Online Presence.</span>
        </h2>
        <p className="text-[18px] leading-relaxed text-ink-soft max-w-[760px] mb-12">
          The Sarasota Children's Museum is a beloved Sarasota community institution — but their digital presence wasn't
          keeping up. They needed a website that matched the warmth and energy of their physical space, and a content
          strategy that would help local families actually find them.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-start">
          {/* Left: services + stats */}
          <div>
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute mb-4">Services Delivered</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Globe, label: "Custom website design & development" },
                  { icon: MapPin, label: "Local SEO & Google Business Profile" },
                  { icon: FileText, label: "Blog content strategy" },
                  { icon: MessageSquare, label: "Social media management" },
                  { icon: BarChart2, label: "Google Analytics setup & reporting" },
                ].map((s) => (
                  <li key={s.label} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <span className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center bg-teal-soft text-[#008b82] shrink-0">
                      <s.icon size={14} />
                    </span>
                    <span className="leading-snug">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4-stat grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatChip icon={FileText} label="Website Page Views" value={<AnimatedNumber value={30} suffix="K+" />} color="magenta" />
              <StatChip icon={MessageSquare} label="Social Media Reach" value={<AnimatedNumber value={178} suffix="K+" />} sub="Across all platforms" color="teal" />
              <StatChip icon={Search} label="Search Impressions" value={<AnimatedNumber value={28} suffix="K" />} color="orange" />
              <StatChip icon={Mail} label="Email List Growth" value={<AnimatedNumber value={3} suffix="×" />} sub="218 → 650 subscribers" color="lime" />
            </div>
          </div>

          {/* Right: device mockups */}
          <div className="relative">
            <div className="relative" style={{ transform: "rotate(2deg)" }}>
              <div className="bg-[#1a1a1a] rounded-t-[12px] p-2 shadow-2xl">
                <div className="aspect-[16/10] bg-white rounded-[6px] overflow-hidden">
                  <img src={websiteDesktop} alt="Sarasota Children's Museum homepage" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="h-2 bg-gradient-to-b from-[#2a2a2a] to-[#0d0d0d] rounded-b-[16px] mx-[-3%] shadow-xl" />
            </div>
            <div className="absolute -bottom-[8%] -right-[2%] w-[34%] z-10" style={{ transform: "rotate(-3deg)" }}>
              <div className="bg-[#1a1a1a] rounded-[22px] p-1.5 shadow-2xl border border-[#333]">
                <div className="aspect-[9/19] bg-white rounded-[18px] overflow-hidden">
                  <img src={websiteMobile} alt="SCM mobile site" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -left-[8%] -top-[6%] w-[28%] rotate-[-8deg] z-10">
              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <img src={socialMagnifier} alt="SCM social post" className="w-full h-auto block" />
              </div>
            </div>
            <p className="text-center text-[12px] text-ink-mute mt-8 font-mono">sarasotachildrensmuseum.org</p>
          </div>
        </div>

        {/* Channel breakdown 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {[
            {
              color: "var(--magenta)",
              title: "Google Business Profile",
              items: ["Total GBP Reach: 29,000+", "Google Maps Views: 1,900+", "Website Clicks from GBP: 1,400+"],
            },
            {
              color: "var(--teal)",
              title: "Social Media",
              items: [
                "Facebook Reach: 107,000+",
                "Instagram Interactions: 71,000+",
                "LinkedIn Impressions: 7,000+",
                "Total Engagements: 12,000+",
              ],
            },
            {
              color: "var(--orange)",
              title: "Website",
              items: ["Unique Visitors: 14,000+", "Google Traffic: 41%", "Direct Traffic: 44%"],
            },
            {
              color: "var(--lime)",
              title: "Email & Content",
              items: ["Top Email Open Rate: 72%", "Scope: Newsletters, events, fundraising, content"],
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-bg-soft border border-line p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: c.color }} />
              <h4 className="text-[16px] font-bold mb-3 tracking-tight">{c.title}</h4>
              <ul className="space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[14px] text-ink-soft">
                    <CheckCircle2 size={14} className="text-teal mt-1 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="mt-16 rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437, #1a2756)" }}>
          <div className="absolute -top-[120px] -right-[80px] w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.2), transparent 70%)" }} />
          <span className="relative z-10 text-magenta text-[80px] leading-none font-serif block mb-2">"</span>
          <p className="relative z-10 text-[22px] md:text-[26px] text-white font-medium leading-snug max-w-[820px] tracking-tight">
            Styled testimonial quote placeholder — Kara will add a real client quote here before launch.
          </p>
          <footer className="relative z-10 mt-6 text-[14px] text-white/70">
            — <span className="text-white font-semibold">Name, Title</span>, Sarasota Children's Museum
          </footer>
        </blockquote>

        {/* Visit site CTA */}
        <div className="mt-10 flex justify-end">
          <a
            href="https://sarasotachildrensmuseum.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line bg-white hover:bg-bg-soft transition-colors"
          >
            Visit Site
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* SECTION 4 — Additional Client Results */}
      <section className="py-[120px] px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.03em] leading-[1.05] mb-4">
              More <span className="gradient-accent">Real Results.</span>
            </h2>
            <p className="text-[18px] text-ink-soft max-w-[600px] mx-auto">
              These clients preferred to remain anonymous — but their numbers are real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card A — Employment Law */}
            <article
              className="relative rounded-3xl p-8 md:p-10 text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0b1437, #1a2756)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--magenta)" }} />
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide mb-5 text-magenta" style={{ background: "rgba(233,30,138,0.12)", border: "1px solid rgba(233,30,138,0.25)" }}>
                Employment Law · Tampa, FL
              </span>
              <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight leading-[1.1] mb-4">
                57% Growth in Organic Search Visibility
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed mb-7">
                This Tampa-area employment law firm came to us with a website that wasn't showing up for the clients
                who needed them most. Over nine months of consistent SEO work and content strategy, we helped them
                significantly increase their search footprint — measured in real Google clicks, not estimates.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                <StatChip dark icon={TrendingUp} label="Organic Search" value={<AnimatedNumber value={57} prefix="+" suffix="%" />} sub="Google clicks · 9 mo" color="magenta" />
                <StatChip dark icon={Users} label="Total Users" value={<AnimatedNumber value={153} suffix="K+" />} sub="Active since launch" color="teal" />
                <StatChip dark icon={Briefcase} label="LinkedIn Eng." value={<AnimatedNumber value={6.4} suffix="%" format={(n) => n.toFixed(1)} />} sub="Industry avg: ~2%" color="orange" />
                <StatChip dark icon={BarChart2} label="Peak Traffic" value={<AnimatedNumber value={513} />} sub="Active users · 1 day" color="lime" />
              </div>

              <ul className="space-y-2 text-[13.5px] text-white/70 border-t border-white/10 pt-5">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal mt-1 shrink-0" /> Organic search clicks grew from ~3,500 to ~5,500/month — no paid advertising.</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal mt-1 shrink-0" /> 49 LinkedIn posts over 12 months · 417 engagements · consistent brand voice.</li>
              </ul>

              <p className="mt-6 text-[11px] uppercase tracking-wider text-white/40">
                Services: SEO · GSC · LinkedIn strategy · Website support
              </p>
            </article>

            {/* Card B — B2B SaaS */}
            <article
              className="relative rounded-3xl p-8 md:p-10 text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0b1437, #1a2756)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--magenta)" }} />
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide mb-5 text-magenta" style={{ background: "rgba(233,30,138,0.12)", border: "1px solid rgba(233,30,138,0.25)" }}>
                B2B SaaS · Construction Compliance
              </span>
              <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight leading-[1.1] mb-4">
                From Page 3 to Page 1: 604% More Search Visibility in 16 Months
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed mb-7">
                This prevailing wage compliance software company needed to be found by the general contractors and
                subcontractors who needed them — but they were buried on page 3 of Google. Through consistent SEO,
                strategic content, and social media management, we moved them from invisible to in-market.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                <StatChip dark icon={TrendingUp} label="Search Impressions" value={<AnimatedNumber value={604} prefix="+" suffix="%" />} sub="3,917 → 27,576/mo" color="magenta" />
                <StatChip dark icon={Search} label="Avg Google Position" value={<>29 → <AnimatedNumber value={12} /></>} sub="Page 3 → Page 1" color="teal" />
                <StatChip dark icon={Users} label="Total Users" value={<AnimatedNumber value={120} suffix="K+" />} sub="Since launch" color="orange" />
                <StatChip dark icon={Eye} label="Time on Site" value={<AnimatedNumber value={76} suffix="s" />} sub="Organic visitors avg" color="lime" />
              </div>

              <ul className="space-y-2 text-[13.5px] text-white/70 border-t border-white/10 pt-5">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal mt-1 shrink-0" /> 299,000+ total organic search impressions over 16 months — content only, no paid ads.</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal mt-1 shrink-0" /> Page 1 for "prevailing wage software," "prevailing wage tracking," "LCPTracker alternative."</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal mt-1 shrink-0" /> 9 social posts published weekly across LinkedIn, Facebook, Instagram — fully systematized.</li>
              </ul>

              <p className="mt-6 text-[11px] uppercase tracking-wider text-white/40">
                Services: SEO · Content · Social · GSC
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Services Delivered */}
      <section className="py-[120px] px-8" style={{ background: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-soft text-[#5a7505] rounded-full text-xs font-semibold tracking-wide mb-5">
              The Method
            </span>
            <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.03em] leading-[1.05] mb-4">
              What We Do That <span className="gradient-accent">Drives These Results.</span>
            </h2>
            <p className="text-[18px] text-ink-soft leading-relaxed">
              Every stat above came from one or more of these services — no magic, just method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Search, title: "SEO & Search Visibility", desc: "Keyword research, on-page optimization, technical SEO, and Google Search Console management." },
              { icon: FileText, title: "Content Strategy", desc: "Content pillars, editorial calendars, blog posts, and platform-specific messaging." },
              { icon: MessageSquare, title: "Social Media Management", desc: "Weekly publishing across LinkedIn, Facebook, Instagram, and Google Business Profile." },
              { icon: Globe, title: "Website Development", desc: "Custom Astro/WordPress sites built for search visibility and conversion." },
              { icon: MapPin, title: "Google Business Profile", desc: "Setup, optimization, weekly posts, Q&A management, and review strategy." },
              { icon: BarChart2, title: "Analytics & Reporting", desc: "GA4 setup, GSC integration, monthly performance reporting with real data." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-bg-soft border border-line p-6 hover:border-magenta/40 hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-magenta-soft text-magenta">
                  <s.icon size={18} />
                </div>
                <h3 className="text-[17px] font-bold tracking-tight mb-1.5">{s.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[18px] text-ink-soft mb-5">Ready to be the next case study?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #e91e8a, #ff7a1a)",
                boxShadow: "0 10px 30px -10px rgba(233,30,138,0.5)",
              }}
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Trust Strip */}
      <section className="py-8 px-8" style={{ background: "#0b1437" }}>
        <p className="max-w-[1100px] mx-auto text-center text-[13px] italic text-teal leading-relaxed">
          All results verified via Google Search Console, Google Analytics 4, and Metricool platform exports.
          Data pulled directly from client accounts — no estimates, no inflated numbers.
        </p>
      </section>

      {/* SECTION 7 — Bottom CTA */}
      <CtaSection />

      <Footer />
    </div>
  );
}
