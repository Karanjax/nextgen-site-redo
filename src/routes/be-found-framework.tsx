import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/be-found-framework")({
  component: BeFoundFrameworkPage,
  head: () => ({
    meta: [
      { title: "The Be Found Framework™ — Woman In Tech" },
      {
        name: "description",
        content:
          "A connected three-phase digital marketing system — SEO, AEO, GEO, website, social, GBP, automations, and outreach. Built so every channel feeds every other channel.",
      },
      { property: "og:title", content: "The Be Found Framework™ — Woman In Tech" },
      {
        property: "og:description",
        content:
          "Stop buying tactics. Start running a system. The integrated digital marketing operating system from Woman In Tech.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const phases = [
  {
    num: "Phase 01",
    name: "Be Found",
    tag: "Show up in Google and AI search",
    accent: "var(--magenta)",
    gradient: "linear-gradient(135deg, var(--magenta), #c4187a)",
    soft: "bg-magenta-soft",
    softText: "text-magenta",
  },
  {
    num: "Phase 02",
    name: "Build Trust",
    tag: "Convert visitors into clients",
    accent: "var(--orange)",
    gradient: "linear-gradient(135deg, var(--orange), #c45200)",
    soft: "bg-orange-soft",
    softText: "text-[#c45200]",
  },
  {
    num: "Phase 03",
    name: "Fuel Growth",
    tag: "Scale with systems and outreach",
    accent: "var(--teal)",
    gradient: "linear-gradient(135deg, var(--teal), #009990)",
    soft: "bg-teal-soft",
    softText: "text-[#008b82]",
  },
];

const frameworkPhases = [
  {
    ...phases[0],
    headline: "Visibility in Google, AI search, and local results.",
    body: "Before anyone can trust you or buy from you, they have to find you. Phase 1 builds the foundation — keyword research, technical SEO, schema markup, AEO for AI search engines, and GBP optimization so you own the map pack. This is where compounding starts.",
    services: [
      {
        title: "SEO, AEO & GEO",
        desc: "Traditional rankings + AI citation + generative engine visibility. Built on schema-first architecture so search engines and AI can find, read, and trust you.",
        href: "/bff/seo/",
      },
      {
        title: "Google Business Profile",
        desc: "The map pack, reviews, Q&A, and GBP posts — maintained and optimized so local searches turn into calls, not competitor clicks.",
        href: "/bff/google-business-profile/",
      },
    ],
  },
  {
    ...phases[1],
    headline: "A website and social presence that converts the traffic you've earned.",
    body: "Traffic that can't convert is wasted. Phase 2 builds the conversion infrastructure — a fast, schema-rich website designed to turn visitors into leads, and a social presence that reinforces authority across every platform where your customers are watching.",
    services: [
      {
        title: "Website Development",
        desc: "Custom-built, fast, schema-ready websites on your domain — not templates. Designed to answer the questions that convert, with every page structured for AI readability.",
        href: "/bff/website-development/",
      },
      {
        title: "Social Media",
        desc: "Consistent, on-brand social content that builds credibility between searches — managed with an AI-assisted content pipeline and human strategic oversight.",
        href: "/bff/social-media/",
      },
    ],
  },
  {
    ...phases[2],
    headline: "Systems and outreach that scale without scaling your workload.",
    body: "Manual marketing has a ceiling. Phase 3 removes it — n8n automations and AI integrations that handle repetitive workflows, plus LinkedIn and email outreach that puts your offer in front of the right people at the right time.",
    services: [
      {
        title: "Automations & AI",
        desc: "n8n workflows, Supabase integrations, and AI tools that automate lead follow-up, content distribution, reporting, and the operational work you're currently doing by hand.",
        href: "/bff/automations-ai/",
      },
      {
        title: "LinkedIn & Email Outreach",
        desc: "Systematic, personalized outreach to your exact target client — built on real data, not spray-and-pray sequences.",
        href: "/bff/linkedin-email-outreach/",
      },
    ],
  },
];

const brokenWay = [
  {
    label: "Agency A handles SEO",
    desc: "but doesn't know what your website says, so they optimize for keywords your pages can't answer.",
  },
  {
    label: "Agency B runs social",
    desc: "but posts without a content strategy, so nothing they publish builds search authority.",
  },
  {
    label: "Your website sits idle",
    desc: "no schema, no speed fixes, no conversion path for the traffic you're generating elsewhere.",
  },
  {
    label: "Nobody sees the whole picture",
    desc: "so every tactic optimizes for its own metric while your business stays invisible.",
  },
];

const tiers = [
  {
    name: "Foundation",
    price: "$1,950",
    best: "Businesses establishing their digital presence for the first time.",
    popular: false,
    features: [
      "SEO, AEO & GEO",
      "Google Business Profile",
      "Schema markup and technical health",
      "Monthly strategy call",
    ],
  },
  {
    name: "Growth",
    price: "$2,450",
    best: "Businesses ready to convert their search visibility into leads and clients.",
    popular: true,
    intro: "Everything in Foundation, plus:",
    features: [
      "Website development (new build or comprehensive refresh)",
      "Social media management (3 platforms)",
      "Content strategy and calendar",
    ],
  },
  {
    name: "Full System",
    price: "$2,950",
    best: "Businesses ready to scale with full automation and outreach.",
    popular: false,
    intro: "Everything in Growth, plus:",
    features: [
      "Automations & AI integrations (n8n workflows)",
      "LinkedIn & email outreach campaigns",
      "Full pipeline visibility and reporting",
    ],
  },
];

const creds = [
  {
    icon: "⚡",
    title: "Technical Founder",
    desc: "Strategy, architecture, and execution in-house.",
    bgClass: "bg-magenta-soft text-magenta",
  },
  {
    icon: "◆",
    title: "Schema Architect",
    desc: "Answer-engine ready as a default, not an add-on.",
    bgClass: "bg-teal-soft text-[#008b82]",
  },
  {
    icon: "⚙",
    title: "Automation-First",
    desc: "n8n, Supabase, and AI integrations built to scale.",
    bgClass: "bg-orange-soft text-[#c45200]",
  },
  {
    icon: "★",
    title: "7 Years · 80+ Clients",
    desc: "Track record across industries and business sizes.",
    bgClass: "bg-lime-soft text-[#5a7505]",
  },
];

const faqs = [
  {
    q: "Is the Be Found Framework a retainer or a project?",
    a: "It's a retainer — ongoing, monthly work. Digital visibility is not a one-time project. Rankings shift, algorithms update, content needs refreshing, and your outreach pipeline needs consistent attention. The BFF is designed to compound month over month, not deliver a one-time spike.",
  },
  {
    q: "Do I need all three phases from day one?",
    a: "No. Most clients start with Phase 1 (Foundation tier) and add phases as their visibility and budget grow. The system is designed to layer in sequence — you won't get Phase 3 results without Phase 1 infrastructure in place anyway.",
  },
  {
    q: "What makes this different from a regular SEO agency?",
    a: "A traditional SEO agency optimizes one channel. We build and manage the connected system — website, SEO, social, GBP, automations, and outreach — with a single strategy behind all of it. The compounding is the point.",
  },
  {
    q: "How long until I see results?",
    a: "Technical fixes and GBP improvements often show in weeks. Competitive rankings and AI visibility typically build over 3–6 months. Outreach and automation ROI compounds as the other phases come online. No agency that's honest with you will promise faster.",
  },
  {
    q: "Do you work with businesses outside of Sarasota / Florida?",
    a: "Yes — the majority of our clients are remote. The framework works for any service-area business, professional service firm, or small business with a local or national audience.",
  },
  {
    q: "Can I add or remove services mid-engagement?",
    a: "Yes. The framework is modular. As your business grows, you can move between tiers or add specific phases. We'll tell you when it makes sense to expand — and when it doesn't yet.",
  },
];

function BeFoundFrameworkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-8 pt-[110px] pb-2">
        <nav className="text-[13px] text-ink-mute font-medium">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Be Found Framework</span>
        </nav>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-[900px] -z-10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fff5fb 0%, #f0fbfa 35%, #fef9eb 70%, #fff1e6 100%)" }}
        >
          <div className="absolute -top-[100px] -left-[50px] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite]" style={{ background: "var(--magenta)" }} />
          <div className="absolute top-[100px] -right-[100px] w-[700px] h-[700px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite_-7s]" style={{ background: "var(--teal)" }} />
          <div className="absolute top-[400px] left-[30%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] animate-[float_20s_ease-in-out_infinite_-14s]" style={{ background: "var(--orange)" }} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-8 pt-10 pb-[100px]">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-6">
                The System
              </span>
              <h1 className="text-[clamp(44px,6vw,76px)] font-bold leading-[1.02] tracking-[-0.035em] mb-6">
                Stop buying tactics.<br />
                <span className="gradient-text">Start running a system.</span>
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft max-w-[560px] mb-9">
                The Be Found Framework™ is a connected three-phase digital marketing system — SEO, AEO, GEO, website, social, GBP, automations, and outreach — designed so every channel feeds every other channel.
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
                <a
                  href="#framework"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-ink border border-line bg-white/60 backdrop-blur transition-all duration-200 hover:bg-white"
                >
                  See what's included
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Right: phase stack visual */}
            <div className="relative hidden lg:block h-[480px]">
              {phases.map((p, i) => (
                <div
                  key={p.num}
                  className="absolute left-0 right-0 rounded-3xl p-7 text-white"
                  style={{
                    background: p.gradient,
                    top: `${i * 110}px`,
                    transform: `rotate(${(i - 1) * 2}deg) translateX(${i * 14}px)`,
                    boxShadow: "0 20px 50px rgba(11,20,55,0.18)",
                    zIndex: 10 + i,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider opacity-80">{p.num}</span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-[26px] font-bold tracking-tight mb-1.5">{p.name}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{p.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM */}
      <section className="py-[120px] text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }}>
        <div className="absolute -top-[200px] left-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.25), transparent 60%)" }} />
        <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.2), transparent 60%)" }} />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-5" style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.12)" }}>
            Why most businesses stay invisible
          </span>
          <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[920px] mb-[60px]">
            You don't have a marketing problem.<br />
            <span style={{ background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 50%, #b8e60d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>You have a disconnected tactics problem.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Broken way */}
            <div className="rounded-3xl p-9 relative" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5" style={{ background: "rgba(212,23,74,0.18)", color: "#ff8aa8" }}>The Broken Way</span>
              <ul className="flex flex-col gap-5">
                {brokenWay.map((b) => (
                  <li key={b.label} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold mt-0.5" style={{ background: "rgba(212,23,74,0.18)", color: "#ff8aa8" }}>✕</span>
                    <p className="text-[15px] leading-relaxed text-white/85">
                      <strong className="text-white font-semibold">{b.label}</strong> — {b.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connected way */}
            <div className="rounded-3xl p-9 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(233,30,138,0.12), rgba(0,191,179,0.10))", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5" style={{ background: "rgba(184,230,13,0.2)", color: "var(--lime)" }}>The Connected Way</span>
              <p className="text-[16px] leading-relaxed text-white/90 mb-7">
                When SEO, website, social, GBP, and automations are built as one system, they compound. Each phase feeds the next. <strong className="text-white font-semibold">Traffic builds trust. Trust drives conversions. Conversions fuel scale.</strong>
              </p>

              {/* Flow visual */}
              <div className="flex items-stretch gap-2">
                {phases.map((p, i) => (
                  <div key={p.num} className="flex-1 flex items-center gap-2">
                    <div className="flex-1 rounded-xl p-3 text-center" style={{ background: p.gradient }}>
                      <div className="text-[10px] font-mono opacity-80 mb-0.5">{p.num}</div>
                      <div className="text-[13px] font-bold">{p.name}</div>
                    </div>
                    {i < phases.length - 1 && <span className="text-white/50 text-lg">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FRAMEWORK */}
      <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="framework">
        <div className="text-center max-w-[820px] mx-auto mb-[80px]">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-soft text-[#008b82] rounded-full text-xs font-semibold tracking-wide mb-5">
            How it works
          </span>
          <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] mb-5">
            Three phases. Six services.<br />
            <span className="gradient-accent">One system.</span>
          </h2>
          <p className="text-[19px] leading-relaxed text-ink-soft">
            Built in sequence, run in parallel. Phase 1 makes you visible. Phase 2 converts that visibility. Phase 3 scales what's converting.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {frameworkPhases.map((phase) => (
            <div key={phase.num}>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white" style={{ background: phase.gradient }}>
                  {phase.num} · {phase.name}
                </span>
              </div>
              <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.025em] leading-tight max-w-[820px] mb-4">
                {phase.headline}
              </h3>
              <p className="text-[17px] leading-relaxed text-ink-soft max-w-[820px] mb-8">
                {phase.body}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {phase.services.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    className="group bg-white border border-line rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,20,55,0.06),0_12px_32px_rgba(11,20,55,0.08)] hover:border-transparent block"
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative" style={{ background: phase.gradient }}>
                      <div className="absolute w-6 h-6 rounded-full bg-white/85" />
                    </div>
                    <h4 className="text-[22px] font-bold tracking-tight mb-2.5">{s.title}</h4>
                    <p className="text-[15px] leading-relaxed text-ink-soft mb-6">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-magenta transition-colors">
                      Learn more
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — RESULTS (reuse) */}
      <CaseStudySection />

      {/* SECTION 5 — PRICING */}
      <section className="py-[120px] px-8 bg-bg-soft" id="pricing">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[820px] mx-auto mb-[60px]">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-soft text-[#5a7505] rounded-full text-xs font-semibold tracking-wide mb-5">
              Investment
            </span>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] mb-5">
              Choose your <span className="gradient-accent">starting point.</span>
            </h2>
            <p className="text-[19px] leading-relaxed text-ink-soft">
              All three tiers include the full framework. The difference is how many channels are active at launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  tier.popular
                    ? "bg-white border-2 shadow-[0_24px_64px_rgba(233,30,138,0.18)] md:-translate-y-3"
                    : "bg-white border border-line"
                }`}
                style={tier.popular ? { borderColor: "var(--magenta)" } : undefined}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-white" style={{ background: "linear-gradient(135deg, var(--magenta), var(--orange))" }}>
                    Most Popular
                  </span>
                )}

                <div className="pb-6 mb-6 border-b border-line">
                  <h3 className="text-[24px] font-bold tracking-tight mb-3">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-[40px] font-bold tracking-[-0.03em]">{tier.price}</span>
                    <span className="text-sm text-ink-soft">/ month</span>
                  </div>
                  <p className="text-[13px] text-ink-soft leading-relaxed">
                    <span className="font-semibold text-ink">Best for:</span> {tier.best}
                  </p>
                </div>

                {tier.intro && (
                  <p className="text-[13px] font-semibold text-ink-soft uppercase tracking-wider mb-3">{tier.intro}</p>
                )}

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-relaxed text-ink">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5" style={{ background: "rgba(184,230,13,0.25)", color: "#5a7505" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                    tier.popular ? "text-white" : "text-ink border border-ink hover:bg-ink hover:text-white"
                  }`}
                  style={tier.popular ? { background: "linear-gradient(135deg, var(--magenta), var(--orange))", boxShadow: "0 8px 20px rgba(233,30,138,0.3)" } : undefined}
                >
                  Book a call to get started
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-[14px] text-ink-soft mt-10">
            All plans are month-to-month. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* SECTION 6 — WHY WIT */}
      <section className="py-[120px] px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-5">
              Why us
            </span>
            <h2 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              Built by the founder.<br />
              <span className="gradient-accent">Run by an in-house team.</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-soft mb-5">
              Most agencies sell you a service and hand you off to a junior account manager. At Woman In Tech, your strategy is designed by the founder, built by an in-house team, and owned by someone who will actually answer when you call. No mystery dashboards. No offshore handoffs. No account managers between you and the work.
            </p>
            <p className="text-[17px] leading-relaxed text-ink-soft">
              We founded the Be Found Framework because we kept watching businesses get burned by disconnected vendors who optimized their own piece but never looked at the whole. Here, your channels are connected by design — not by accident.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {creds.map((c) => (
              <div key={c.title} className="bg-bg-soft border border-line rounded-2xl p-5">
                <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center mb-3 text-lg ${c.bgClass}`}>
                  {c.icon}
                </div>
                <p className="text-[15px] font-bold tracking-tight mb-1.5">{c.title}</p>
                <p className="text-[13px] text-ink-soft leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-[120px] px-8 bg-bg-soft">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-soft text-[#008b82] rounded-full text-xs font-semibold tracking-wide mb-5">
              FAQ
            </span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] mb-5">
              Frequently asked questions
            </h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              Straight answers to what most prospective clients want to know before booking a call.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group bg-white border border-line rounded-2xl overflow-hidden transition-all hover:border-magenta/40"
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="text-[16px] font-semibold tracking-tight">{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bg-tint flex items-center justify-center text-ink-soft transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-[15px] leading-relaxed text-ink-soft">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-[120px] px-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }} id="cta">
        <div className="absolute -top-[200px] left-[20%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.4), transparent 60%)" }} />
        <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.3), transparent 60%)" }} />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-medium mb-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span className="w-2 h-2 rounded-full bg-lime animate-[pulse-dot_1.5s_infinite]" />
            Free 30-min strategy call · No commitment
          </div>

          <h2 className="text-[clamp(44px,6vw,72px)] font-bold tracking-[-0.035em] leading-[1.05] mb-5">
            Ready to stop being <span style={{ background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 50%, #b8e60d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>invisible?</span>
          </h2>

          <p className="text-[18px] opacity-85 max-w-[640px] mx-auto mb-9 leading-relaxed">
            Book a free 30-minute strategy call. We'll look at where you rank today, what your biggest visibility gaps are, and what it would take to fix them — whether you work with us or not.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/contact"
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
            <a href="#results" className="inline-flex items-center gap-2 px-7 py-[18px] rounded-full text-base font-semibold" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.25)" }}>
              See how it worked for others
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
