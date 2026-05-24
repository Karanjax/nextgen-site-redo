import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import karaPortrait from "@/assets/kara-portrait.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Kara Noreika & Woman In Tech" },
      {
        name: "description",
        content:
          "Meet Kara Noreika — technical founder, lead strategist, and the person accountable for every client outcome at Woman In Tech. Learn why the Be Found Framework exists.",
      },
      { property: "og:title", content: "About — Kara Noreika & Woman In Tech" },
      {
        property: "og:description",
        content:
          "I built this because agencies kept selling pieces, not systems. One connected framework. One team. One person you can actually reach.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const creds = [
  {
    icon: "⚡",
    title: "Technical Founder",
    desc: "Strategy, architecture, and execution — not outsourced to a vendor network.",
    bgClass: "bg-magenta-soft text-magenta",
  },
  {
    icon: "◆",
    title: "Schema Architect",
    desc: "Structured data and entity markup built in from day one, not bolted on later.",
    bgClass: "bg-teal-soft text-[#008b82]",
  },
  {
    icon: "⚙",
    title: "Automation-First",
    desc: "n8n, Supabase, and AI integrations that remove manual work from your pipeline.",
    bgClass: "bg-orange-soft text-[#c45200]",
  },
  {
    icon: "★",
    title: "7 Years · 80+ Clients",
    desc: "Track record across legal, healthcare, professional services, and more.",
    bgClass: "bg-lime-soft text-[#5a7505]",
  },
];

const diffCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Founder-led strategy",
    desc: "Your strategy is designed by me — not handed off to a junior account manager after the sales call. I'm the one who reviews your analytics, writes your content plan, and picks up when you call.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: "In-house execution",
    desc: "Everything is built by our in-house team. No outsourcing, no offshore handoffs, no mystery about who's actually doing the work. 100% of client work stays under one roof.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.93 4.93 2.83 2.83" /><path d="m16.24 16.24 2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="m4.93 19.07 2.83-2.83" /><path d="m16.24 7.76 2.83-2.83" />
      </svg>
    ),
    title: "One system, not six vendors",
    desc: "SEO, website, social, GBP, automations, and outreach are built as one system with one strategy behind all of it. They compound. That's the entire point.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free strategy call",
    desc: "We spend 30 minutes looking at where you rank today, who's beating you in AI search, and what your biggest visibility gaps are. You leave with clarity regardless of whether we work together.",
  },
  {
    num: "02",
    title: "Foundation phase",
    desc: "We build the infrastructure first — technical SEO, schema markup, GBP optimization, and the website fixes that compound everything else. Phase 1 typically shows measurable movement within 60–90 days.",
  },
  {
    num: "03",
    title: "System fully live",
    desc: "Once the foundation is solid, we layer in the trust and growth phases — website, social, automations, and outreach. By month 3–4, every channel is connected and compounding.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-8 pt-[110px] pb-2">
        <nav className="text-[13px] text-ink-mute font-medium">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">About</span>
        </nav>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-[800px] -z-10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fff5fb 0%, #f0fbfa 35%, #fef9eb 70%, #fff1e6 100%)" }}
        >
          <div className="absolute -top-[100px] -left-[50px] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite]" style={{ background: "var(--magenta)" }} />
          <div className="absolute top-[100px] -right-[100px] w-[700px] h-[700px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite_-7s]" style={{ background: "var(--teal)" }} />
          <div className="absolute top-[400px] left-[30%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] animate-[float_20s_ease-in-out_infinite_-14s]" style={{ background: "var(--orange)" }} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-8 pt-10 pb-[100px]">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
            {/* Left: text */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-6">
                The Founder
              </span>
              <h1 className="text-[clamp(44px,6vw,76px)] font-bold leading-[1.02] tracking-[-0.035em] mb-6">
                I built this because agencies<br />
                <span className="gradient-accent">kept selling pieces, not systems.</span>
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft max-w-[560px] mb-9">
                I'm Kara Noreika — technical founder, lead strategist, and the person personally accountable for every client outcome at Woman In Tech. After 20+ years in digital marketing, I stopped taking agency retainers and built something I wished existed: one connected system, one team, one person you can actually reach.
              </p>

              <div className="flex gap-3 items-center flex-wrap">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white transition-all duration-200"
                  style={{ background: "var(--ink)", boxShadow: "0 4px 14px rgba(11,20,55,0.2)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #e91e8a, #ff7a1a)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--ink)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Book a free strategy call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <Link
                  to="/be-found-framework"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-ink border border-line bg-white/60 backdrop-blur transition-all duration-200 hover:bg-white"
                >
                  See the framework
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: photo */}
            <div className="relative hidden lg:block">
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden relative"
                style={{ boxShadow: "0 8px 24px rgba(11,20,55,0.08), 0 24px 64px rgba(11,20,55,0.12)" }}
              >
                <img
                  src={karaPortrait}
                  alt="Kara Noreika — Founder, Woman In Tech"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={1024}
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-5 left-5 right-5 px-5 py-4 rounded-2xl flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #0b1437, #1a2756)",
                  boxShadow: "0 8px 30px rgba(11,20,55,0.25)",
                }}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={karaPortrait} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight">Kara Noreika</p>
                  <p className="text-white/60 text-xs leading-tight">Founder, Woman In Tech</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-teal animate-[pulse-dot_1.5s_infinite]" />
                  Accepting clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN STORY */}
      <section className="py-[120px] px-8 bg-bg-soft">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-soft text-[#008b82] rounded-full text-xs font-semibold tracking-wide mb-5">
              Why this exists
            </span>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Twenty years of watching businesses<br />
              <span className="gradient-accent">get burned by the same mistake.</span>
            </h2>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-ink-soft">
            <p>
              I spent the first part of my career inside agencies — watching clients pay five vendors for five disconnected services, none of which talked to each other. The SEO agency didn't know what the website said. The social team posted without a strategy. The developer built a beautiful site with no schema and no speed optimization. And the client sat in the middle wondering why nothing was working, writing checks to everyone and getting results from no one.
            </p>
            <p>
              I founded Woman In Tech and built the Be Found Framework because the problem isn't any individual service — it's the architecture. When your SEO, website, social media, Google Business Profile, and automations are designed as one connected system, the results compound. Traffic builds authority. Authority builds trust. Trust converts to clients. That's the only way it actually works — and it's what I've been doing for 7+ years across 80+ clients in industries from law to healthcare to professional services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT MAKES THIS DIFFERENT */}
      <section className="py-[120px] px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-soft text-[#c45200] rounded-full text-xs font-semibold tracking-wide mb-5">
              How we work
            </span>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Not an agency. Not a freelancer.<br />
              <span className="gradient-accent">Something built to fill the gap between them.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diffCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-8 border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 2px 8px rgba(11,20,55,0.04)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-bg-soft text-magenta mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{card.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CREDENTIALS / PROOF */}
      <section className="py-[120px] px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left — 2×2 credential grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {creds.map((c) => (
                  <div key={c.title} className="bg-bg-soft border border-line rounded-[14px] p-5">
                    <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-2.5 text-base ${c.bgClass}`}>
                      {c.icon}
                    </div>
                    <p className="text-sm font-bold tracking-tight mb-1">{c.title}</p>
                    <p className="text-xs text-ink-soft leading-snug">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stats + paragraph */}
            <div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="rounded-2xl p-6 border border-line bg-bg-soft">
                  <p className="text-[40px] font-bold tracking-tight gradient-accent leading-none mb-1">7+</p>
                  <p className="text-sm font-medium text-ink-soft">years in business</p>
                </div>
                <div className="rounded-2xl p-6 border border-line bg-bg-soft">
                  <p className="text-[40px] font-bold tracking-tight gradient-accent leading-none mb-1">80+</p>
                  <p className="text-sm font-medium text-ink-soft">clients served</p>
                </div>
                <div className="rounded-2xl p-6 border border-line bg-bg-soft">
                  <p className="text-[40px] font-bold tracking-tight gradient-accent leading-none mb-1">100%</p>
                  <p className="text-sm font-medium text-ink-soft">in-house work (no outsourcing)</p>
                </div>
              </div>

              <p className="text-[17px] leading-relaxed text-ink-soft">
                I work specifically with service-area businesses, professional service firms, and small businesses that are already good at what they do — but aren't being found by the people who need them. My current focus is attorneys, med spas, and women-led businesses. If that's you, we're probably a fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW I WORK WITH CLIENTS */}
      <section className="py-[120px] px-8 bg-bg-soft">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-5">
              The process
            </span>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
              From audit to system in <span className="gradient-accent">90 days.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-8 border border-line bg-white transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: "0 2px 8px rgba(11,20,55,0.04)" }}
              >
                <span className="inline-block font-mono text-[11px] font-semibold tracking-wider text-ink-mute mb-4">
                  STEP {step.num}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm font-medium text-ink-mute mt-10">
            Month-to-month. No long-term contracts. No lock-in.
          </p>
        </div>
      </section>

      {/* SECTION 6 — A NOTE FROM KARA */}
      <section className="py-[120px] px-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }}>
        <div className="absolute -top-[200px] left-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.25), transparent 60%)" }} />
        <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.2), transparent 60%)" }} />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            {/* Left: pull quote */}
            <div>
              <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.03em]">
                "I'm not trying to be the biggest agency. I'm trying to be the one that actually answers."
              </h2>
            </div>

            {/* Right: paragraph + photo + name */}
            <div>
              <p className="text-[17px] leading-relaxed text-white/85 mb-8">
                I take on a limited number of clients so I can give each one the attention the work requires. That means I'm sometimes not accepting new clients — and I'll tell you that directly instead of taking your money and deprioritizing you. If you're looking for a faceless agency that sends monthly reports and never picks up the phone, I'm not the right fit. If you want someone invested in your results, let's talk.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img src={karaPortrait} alt="Kara Noreika" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">Kara Noreika — Founder, Woman In Tech</p>
                  <div className="flex items-center gap-1.5 text-sm text-white/70 mt-1">
                    <span className="w-2 h-2 rounded-full bg-teal animate-[pulse-dot_1.5s_infinite]" />
                    Currently accepting new clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-[120px] px-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }} id="cta">
        <div className="absolute -top-[200px] left-[20%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.4), transparent 60%)" }} />
        <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.3), transparent 60%)" }} />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <h2 className="text-[clamp(48px,6vw,76px)] font-bold tracking-[-0.035em] leading-[1.05] mb-5">
            Let's see what's<br />
            <span style={{ background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 50%, #b8e60d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>keeping you invisible.</span>
          </h2>

          <p className="text-[19px] opacity-85 max-w-[600px] mx-auto mb-9 leading-relaxed">
            Book a free 30-minute strategy call. I'll pull your current AI visibility, show you who's ranking above you and why, and tell you exactly what to fix first — whether you work with me or not.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-[18px] rounded-full text-base font-semibold bg-white text-ink transition-all duration-200 hover:-translate-y-0.5"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, var(--magenta), var(--orange))";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <Link
              to="/be-found-framework"
              className="px-7 py-[18px] rounded-full text-base font-semibold transition-all duration-200 hover:bg-white/10"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              See the Be Found Framework →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
