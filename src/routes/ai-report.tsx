import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/ai-report")({
  component: AIReportPage,
  head: () => ({
    meta: [
      { title: "AI Visibility Report — Woman In Tech" },
      { name: "description", content: "Personalized AI visibility audit for law firms." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

// ---------- Sample data ----------
const FIRM_NAME = "Allen Law Firm, P.A.";
const CITY = "Columbia";
const STATE = "SC";
const DOMAIN = "allenlawfirmsc.com";
const MAIN_SCORE = 10;
const BOOKING_URL = "https://www.womanintech.com/book-a-strategy-call/";
const LOGO_WHITE =
  "https://tamberra.s3.us-east-2.amazonaws.com/wp-content/uploads/20250322143043/logo-white.png";

type Variant = "teaser" | "partial" | "full";

// ---------- Helpers ----------
function scoreColor(score: number) {
  if (score < 40) return { hex: "#e91e8a", type: "danger" as const };
  if (score < 70) return { hex: "#ff7a1a", type: "warning" as const };
  return { hex: "#00bfb3", type: "success" as const };
}
function scoreGradient(score: number) {
  if (score < 40)
    return "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)";
  if (score < 70)
    return "linear-gradient(135deg, #ff7a1a 0%, #b8e60d 100%)";
  return "linear-gradient(135deg, #00bfb3 0%, #b8e60d 100%)";
}

// ---------- Atoms ----------
function Eyebrow({
  children,
  tone = "magenta",
}: {
  children: React.ReactNode;
  tone?: "magenta" | "teal" | "orange";
}) {
  const tones = {
    magenta: { bg: "#ffd9ee", fg: "#e91e8a" },
    teal: { bg: "#d3f7f4", fg: "#00bfb3" },
    orange: { bg: "#ffe5cc", fg: "#ff7a1a" },
  } as const;
  const t = tones[tone];
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
      style={{ background: t.bg, color: t.fg }}
    >
      {children}
    </span>
  );
}

function GradientButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href ?? BOOKING_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] ${className}`}
      style={{
        background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
        boxShadow: "0 0 40px -10px rgba(233,30,138,0.40)",
      }}
    >
      {children}
    </a>
  );
}

function GhostButton({
  children,
  href,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href ?? "#"}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${className}`}
      style={
        onDark
          ? {
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              background: "transparent",
            }
          : {
              border: "1px solid #e6e8f0",
              color: "#0b1437",
              background: "transparent",
            }
      }
    >
      {children}
    </a>
  );
}

function Card({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-3xl border bg-white p-6 md:p-8 ${className}`}
      style={{
        borderColor: "#e6e8f0",
        boxShadow: "0 2px 12px 0 rgba(11,20,55,0.07)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DarkCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-10 text-white ${className}`}
      style={{
        background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: "featured" | "cited" | "mentioned" | "not";
}) {
  const map = {
    featured: { bg: "#d3f7f4", fg: "#00bfb3" },
    cited: { bg: "#dbeafe", fg: "#2563eb" },
    mentioned: { bg: "#ffe5cc", fg: "#ff7a1a" },
    not: { bg: "#ffd9ee", fg: "#e91e8a" },
  } as const;
  const c = map[variant];
  return (
    <span
      className="inline-block rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider"
      style={{ background: c.bg, color: c.fg }}
    >
      {label}
    </span>
  );
}

// ---------- Score Ring ----------
function ScoreRing({ score }: { score: number }) {
  const c = scoreColor(score);
  const grad = scoreGradient(score);
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);
  return (
    <div className="relative mx-auto" style={{ width: 220, height: 220 }}>
      <svg width={220} height={220} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={110} cy={110} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={14} />
        <circle
          cx={110}
          cy={110}
          r={radius}
          fill="none"
          stroke={c.hex}
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ filter: `drop-shadow(0 0 12px ${c.hex}80)`, transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-[3.25rem] font-bold leading-none"
          style={{
            background: grad,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {score}
          <span className="text-[0.35em] font-normal text-white/50"> /100</span>
        </span>
        <span className="mt-1 text-[0.7rem] uppercase tracking-[0.1em] text-white/50">
          AI Visibility Score
        </span>
      </div>
    </div>
  );
}

// ---------- Competitor mini list ----------
const COMPETITORS = [
  { name: "Strom Law Firm", domain: "stromlaw.com", score: 78 },
  { name: "McWhirter, Bellinger & Assoc.", domain: "mcwhirterlaw.com", score: 64 },
  { name: "Joye Law Firm", domain: "joyelawfirm.com", score: 58 },
];

function CompetitorList({ blurredFromIndex }: { blurredFromIndex?: number }) {
  return (
    <div className="space-y-2">
      {COMPETITORS.map((c, i) => {
        const blurred = blurredFromIndex !== undefined && i >= blurredFromIndex;
        return (
          <div
            key={c.domain}
            className="flex items-center justify-between rounded-2xl px-3.5 py-2.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              filter: blurred ? "blur(5px)" : undefined,
              pointerEvents: blurred ? "none" : undefined,
              userSelect: blurred ? "none" : undefined,
            }}
          >
            <div>
              <span className="block text-[0.8125rem] font-semibold text-white">{c.name}</span>
              <span className="block text-[0.6875rem] text-white/50">{c.domain}</span>
            </div>
            <span className="text-[1.375rem] font-bold" style={{ color: "#ff7a1a" }}>
              {c.score}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Header / Footer ----------
function PageHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "rgba(255,255,255,0.85)", borderColor: "#e6e8f0" }}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3 md:px-6">
        <div
          className="inline-flex items-center rounded-xl px-3 py-1.5"
          style={{ background: "#0b1437" }}
        >
          <img src={LOGO_WHITE} alt="Woman In Tech" style={{ height: 22, width: "auto" }} />
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-[#8a93b0] md:inline">{FIRM_NAME}</span>
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "#f1f3fa", color: "#0b1437" }}
          >
            📍 {CITY}, {STATE}
          </span>
        </div>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="border-t bg-white" style={{ borderColor: "#e6e8f0" }}>
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-4 py-8 md:flex-row md:px-6">
        <div
          className="inline-flex items-center rounded-xl px-3 py-1.5"
          style={{ background: "#0b1437" }}
        >
          <img src={LOGO_WHITE} alt="Woman In Tech" style={{ height: 20 }} />
        </div>
        <p className="text-xs text-[#8a93b0]">© 2025 Woman In Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ---------- Hero ----------
function Hero({ variant }: { variant: Variant }) {
  const isTeaser = variant === "teaser";
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(135deg, #fff5fb 0%, #f0fbfa 35%, #fff1e6 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr] md:px-6 md:py-20">
        {/* Left */}
        <div>
          <Eyebrow>
            Prepared for {FIRM_NAME} · {CITY}, {STATE}
          </Eyebrow>
          {isTeaser ? (
            <>
              <h1
                className="mt-5 text-4xl font-bold leading-[1.05] text-[#0b1437] md:text-5xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Three {CITY} firms are showing up{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  when prospects ask AI for help.
                </span>
              </h1>
              <p className="mt-4 text-xl font-semibold" style={{ color: "#e91e8a" }}>
                {FIRM_NAME} isn't one of them.
              </p>
            </>
          ) : (
            <h1
              className="mt-5 text-4xl font-bold leading-[1.05] text-[#0b1437] md:text-5xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                AI Visibility
              </span>{" "}
              Report
            </h1>
          )}
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-[#4a5578]">
            We tested AI search results for {CITY} legal queries today across ChatGPT, Perplexity,
            and Google AI Overviews — and pulled together what your prospects are actually seeing.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-[#8a93b0]"
              style={{ border: "1px solid #e6e8f0" }}
            >
              🌐 {DOMAIN}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {isTeaser ? (
              <>
                <GradientButton>Book a 20-min strategy call →</GradientButton>
                <GhostButton>📧 Share This Score</GhostButton>
              </>
            ) : (
              <>
                <GhostButton>📧 Email Report</GhostButton>
                <GhostButton>🔖 Bookmark This Report</GhostButton>
              </>
            )}
          </div>
          <p className="mt-3 text-xs text-[#8a93b0]">
            {isTeaser
              ? "Free. No deck. No pressure."
              : "Scroll down to see how you show up in AI today ↓"}
          </p>
        </div>

        {/* Right – score card */}
        <DarkCard
          className="self-start"
          style={{ boxShadow: "0 0 60px -10px rgba(0,191,179,0.3)" }}
        >
          <ScoreRing score={MAIN_SCORE} />
          <div className="my-5 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white/50">
            Top Competitors
          </p>
          <CompetitorList blurredFromIndex={isTeaser ? 1 : undefined} />
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/70">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "#00bfb3", boxShadow: "0 0 0 4px rgba(0,191,179,0.25)" }}
            />
            Accepting clients
          </div>
        </DarkCard>
      </div>
    </section>
  );
}

// ---------- Competitor table ----------
function CompetitorTable() {
  const rows: Array<{ name: string; score: number; ai: "featured" | "cited" | "mentioned" | "not"; local: string; organic: string; me?: boolean }> = [
    { name: FIRM_NAME, score: MAIN_SCORE, ai: "not", local: "#4", organic: "#8", me: true },
    { name: "Strom Law Firm", score: 78, ai: "featured", local: "#1", organic: "#2" },
    { name: "McWhirter, Bellinger & Assoc.", score: 64, ai: "cited", local: "#2", organic: "#3" },
    { name: "Joye Law Firm", score: 58, ai: "mentioned", local: "#3", organic: "#5" },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Competitor", "Score", "AI Visibility", "Local Map Pack", "Organic Rank"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wider"
                style={{ color: "#8a93b0", borderBottom: "1px solid #e6e8f0" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const sc = scoreColor(r.score);
            return (
              <tr
                key={r.name}
                style={{
                  background: r.me ? "#fff5fb" : undefined,
                  borderBottom: "1px solid #f1f3fa",
                }}
              >
                <td className="px-4 py-3 font-semibold text-[#0b1437]">{r.name}</td>
                <td className="px-4 py-3 font-bold" style={{ color: sc.hex }}>
                  {r.score}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge
                    label={
                      r.ai === "featured"
                        ? "Featured"
                        : r.ai === "cited"
                          ? "Cited"
                          : r.ai === "mentioned"
                            ? "Mentioned"
                            : "Not Detected"
                    }
                    variant={r.ai as any}
                  />
                </td>
                <td className="px-4 py-3 text-[#0b1437]">{r.local}</td>
                <td className="px-4 py-3 text-[#0b1437]">{r.organic}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ---------- AI Visibility Key ----------
function AIVisibilityKey({ collapsible = false }: { collapsible?: boolean }) {
  const [open, setOpen] = useState(!collapsible);
  const items = [
    { v: "featured", label: "Featured", desc: "AI directly recommends your firm." },
    { v: "cited", label: "Cited", desc: "AI uses your site as a source but doesn't recommend you as primary." },
    { v: "mentioned", label: "Mentioned", desc: "Named in AI text, not cited or recommended." },
    { v: "not", label: "Not Detected", desc: "No presence in AI answers." },
  ] as const;
  return (
    <Card>
      <button
        type="button"
        onClick={() => collapsible && setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
        style={{ cursor: collapsible ? "pointer" : "default" }}
      >
        <div>
          <h3 className="text-xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
            AI Visibility Key
          </h3>
          <p className="mt-1 text-sm text-[#4a5578]">What your AI status actually means</p>
        </div>
        {collapsible && (
          <span
            className="text-2xl text-[#8a93b0] transition-transform"
            style={{ transform: open ? "rotate(180deg)" : "none" }}
          >
            ⌄
          </span>
        )}
      </button>
      {open && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl p-4"
              style={{ background: "#f8f9fc", border: "1px solid #e6e8f0" }}
            >
              <StatusBadge label={it.label} variant={it.v as any} />
              <p className="mt-2 text-sm text-[#4a5578]">{it.desc}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// ---------- Score Tile (scores grid) ----------
function ScoreTile({
  icon,
  iconBg,
  title,
  score,
  badge,
  desc,
  fill,
}: {
  icon: string;
  iconBg: string;
  title: string;
  score: number;
  badge: string;
  desc: string;
  fill: string;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
            style={{ background: iconBg }}
          >
            {icon}
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#8a93b0]">
              Category
            </p>
            <h4 className="text-base font-bold text-[#0b1437]">{title}</h4>
          </div>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-[#0b1437]">{score}</span>
          <span className="text-sm text-[#8a93b0]">/100</span>
        </div>
      </div>
      <div className="mt-4 h-2 w-full rounded-full" style={{ background: "#f1f3fa" }}>
        <div className="h-2 rounded-full" style={{ width: `${score}%`, background: fill }} />
      </div>
      <div className="mt-4">
        <span
          className="inline-block rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider"
          style={{ background: "#f1f3fa", color: "#0b1437" }}
        >
          {badge}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#4a5578]">{desc}</p>
    </Card>
  );
}

// ---------- Sections used in full report ----------
function AIOverviewSection() {
  return (
    <Card style={{ borderLeft: "4px solid #00bfb3" }}>
      <Eyebrow tone="teal">AI Search Analysis</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        How You Show Up in AI (Today)
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#8a93b0]">
            AI Overview Status
          </p>
          <div className="mt-2">
            <StatusBadge label="Not Detected" variant="not" />
          </div>
          <div
            className="mt-4 rounded-2xl p-4"
            style={{ background: "#fff5fb", border: "1px solid #ffd9ee" }}
          >
            <p className="text-sm text-[#0b1437]">
              AI cited <strong>3 competitors</strong> for "best personal injury lawyer in {CITY}".
              Your firm was not among them.
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#4a5578]">
            Google AI Overviews now answer ~38% of legal-intent searches without sending the user to
            a website. Being absent from those answers means losing the impression entirely.
          </p>
        </div>
        <div
          className="rounded-2xl p-5"
          style={{ background: "#f8f9fc", border: "1px solid #e6e8f0" }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#8a93b0]">
            AI Answer Excerpt
          </p>
          <p className="mt-3 text-sm italic leading-relaxed text-[#0b1437]">
            "For personal injury cases in {CITY}, top-rated firms include Strom Law Firm, McWhirter
            Bellinger &amp; Associates, and Joye Law Firm — all with strong client reviews and
            decades of trial experience…"
          </p>
          <p className="mt-3 text-xs text-[#8a93b0]">— Google AI Overview, tested today</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8a93b0]">
          Competitors in AI Results
        </h4>
        <table className="w-full text-sm">
          <thead>
            <tr>
              {["Firm", "Website", "Role in AI"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wider"
                  style={{ color: "#8a93b0", borderBottom: "1px solid #e6e8f0" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((c, i) => (
              <tr key={c.domain} style={{ borderBottom: "1px solid #f1f3fa" }}>
                <td className="px-4 py-3 font-semibold text-[#0b1437]">{c.name}</td>
                <td className="px-4 py-3 text-[#4a5578]">{c.domain}</td>
                <td className="px-4 py-3">
                  <StatusBadge
                    label={i === 0 ? "Featured" : i === 1 ? "Cited" : "Mentioned"}
                    variant={i === 0 ? "featured" : i === 1 ? "cited" : "mentioned"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function CtaBlock({ body, button }: { body: string; button: string }) {
  return (
    <DarkCard className="text-center">
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85">{body}</p>
      <div className="mt-6">
        <GradientButton>{button} →</GradientButton>
      </div>
    </DarkCard>
  );
}

function ScoresGrid() {
  return (
    <section>
      <Eyebrow tone="orange">Your Scores</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        At-a-Glance Scores
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <ScoreTile
          icon="💡"
          iconBg="#ffd9ee"
          title="AI Visibility"
          score={12}
          fill="#e91e8a"
          badge="Critical"
          desc="Your firm is effectively absent from AI answers for the queries your prospects use most."
        />
        <ScoreTile
          icon="📍"
          iconBg="#d3f7f4"
          title="Geo & Local"
          score={42}
          fill="#00bfb3"
          badge="Needs Work"
          desc="You appear in the local pack for branded queries only — non-branded discovery is weak."
        />
        <ScoreTile
          icon="⚡"
          iconBg="#ffe5cc"
          title="Technical Health"
          score={28}
          fill="#ff7a1a"
          badge="Poor"
          desc="Core Web Vitals fail on mobile. Speed signals filter your site down before AI evaluates content."
        />
        <ScoreTile
          icon="📄"
          iconBg="#effbc7"
          title="Content & Authority"
          score={35}
          fill="#b8e60d"
          badge="Thin"
          desc="High-intent queries your prospects ask are not addressed in long-form content on your site."
        />
      </div>
    </section>
  );
}

function GeoSection() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Eyebrow tone="teal">Local Presence</Eyebrow>
          <h2
            className="mt-4 text-3xl font-bold text-[#0b1437]"
            style={{ letterSpacing: "-0.025em" }}
          >
            GEO & Local Visibility
          </h2>
        </div>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-bold"
          style={{ background: "#ffe5cc", color: "#ff7a1a" }}
        >
          42 / 100
        </span>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 overflow-x-auto">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8a93b0]">
            Local Pack Rankings
          </h4>
          <table className="w-full text-sm">
            <thead>
              <tr>
                {["Rank", "Firm", "Reviews", "Rating"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wider"
                    style={{ color: "#8a93b0", borderBottom: "1px solid #e6e8f0" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["#1", "Strom Law Firm", "412", "4.9"],
                ["#2", "McWhirter, Bellinger & Assoc.", "298", "4.8"],
                ["#3", "Joye Law Firm", "265", "4.8"],
                ["#4", FIRM_NAME, "61", "4.6"],
              ].map((r, i) => (
                <tr
                  key={r[1]}
                  style={{
                    background: i === 3 ? "#fff5fb" : undefined,
                    borderBottom: "1px solid #f1f3fa",
                  }}
                >
                  {r.map((c, j) => (
                    <td key={j} className="px-4 py-3 text-[#0b1437]">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8a93b0]">
            Practice Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Personal Injury", "Auto Accidents", "Workers' Comp", "Wrongful Death"].map((p) => (
              <span
                key={p}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: "#f1f3fa", color: "#0b1437" }}
              >
                {p}
              </span>
            ))}
          </div>
          <div
            className="mt-5 rounded-2xl p-4"
            style={{ background: "#d3f7f4", border: "1px solid #b3ece6" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00bfb3]">
              GEO AI Insight
            </p>
            <p className="mt-2 text-sm text-[#0b1437]">
              You're outside the 3-pack for every non-branded query we tested. Review velocity and
              category-specific landing pages are the fastest wins.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CWVSection() {
  const metrics = [
    { name: "LCP", value: "4.8s", label: "Poor", color: "#e91e8a", target: "Target: ≤2.5s" },
    { name: "INP", value: "320ms", label: "Needs work", color: "#ff7a1a", target: "Target: ≤200ms" },
    { name: "CLS", value: "0.18", label: "Needs work", color: "#ff7a1a", target: "Target: ≤0.1" },
  ];
  return (
    <Card style={{ boxShadow: "0 0 40px -10px rgba(0,191,179,0.25), 0 2px 12px 0 rgba(11,20,55,0.07)" }}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Eyebrow tone="teal">Technical Health</Eyebrow>
          <h2
            className="mt-4 text-3xl font-bold text-[#0b1437]"
            style={{ letterSpacing: "-0.025em" }}
          >
            Core Web Vitals & Speed
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label="PageSpeed: 38" variant="not" />
          <StatusBadge label="Grade: D" variant="mentioned" />
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl p-5"
            style={{ background: "#f8f9fc", border: "1px solid #e6e8f0" }}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#8a93b0]">
              {m.name}
            </p>
            <p className="mt-2 text-3xl font-bold" style={{ color: m.color }}>
              {m.value}
            </p>
            <span
              className="mt-2 inline-block rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider"
              style={{ background: "#ffd9ee", color: "#e91e8a" }}
            >
              {m.label}
            </span>
            <p className="mt-2 text-xs text-[#8a93b0]">{m.target}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-6 rounded-2xl p-5"
        style={{ background: "#f8f9fc", border: "1px solid #e6e8f0" }}
      >
        <p className="text-sm font-semibold text-[#0b1437]">What this means:</p>
        <p className="mt-2 text-sm leading-relaxed text-[#4a5578]">
          Your site is being penalized by Google's experience signals before content is even
          evaluated. AI ranking systems use these same Core Web Vitals as a quality gate.
        </p>
      </div>
      <div className="mt-5">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8a93b0]">
          Top Speed Fixes
        </h4>
        <ul className="space-y-2 text-sm text-[#0b1437]">
          <li>• Compress and serve hero images as WebP with explicit dimensions.</li>
          <li>• Defer non-critical JavaScript on landing pages.</li>
          <li>• Move chat widget to interaction-triggered load.</li>
        </ul>
      </div>
    </Card>
  );
}

function SchemaSection() {
  const present = ["Organization", "WebSite"];
  const missing = ["LocalBusiness", "LegalService", "LawFirm", "Attorney", "FAQPage", "BreadcrumbList"];
  return (
    <Card>
      <Eyebrow>Structured Data</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        Schema & Entity Signals
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#4a5578]">
        Structured data helps search engines and AI understand who you are. Schema is one of the
        most important factors for AI visibility.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#00bfb3]">✅ Schema Present</h4>
          <div className="flex flex-wrap gap-2">
            {present.map((p) => (
              <span
                key={p}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: "#d3f7f4", color: "#00bfb3" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#e91e8a]">❌ Schema Missing</h4>
          <div className="flex flex-wrap gap-2">
            {missing.map((p) => (
              <span
                key={p}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: "#ffd9ee", color: "#e91e8a" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mt-6 rounded-2xl p-5"
        style={{ background: "#fff5fb", border: "1px solid #ffd9ee" }}
      >
        <p className="text-sm text-[#0b1437]">
          <strong>Assessment:</strong> Without LegalService, LawFirm, and Attorney markup, AI cannot
          confidently identify you as a {CITY} legal entity. This is the single highest-leverage
          fix on this report.
        </p>
      </div>
    </Card>
  );
}

function ContentSection() {
  return (
    <Card>
      <Eyebrow tone="orange">Content Gaps</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        Content & Keyword Coverage
      </h2>
      <div
        className="mt-4 inline-block rounded-full px-4 py-2 text-sm"
        style={{ background: "#f8f9fc", border: "1px solid #e6e8f0", color: "#0b1437" }}
      >
        <strong>Query Tested:</strong> "best personal injury lawyer in {CITY}"
      </div>
      <p className="mt-4 max-w-2xl text-sm text-[#4a5578]">
        We compared the topics your competitors cover to your site's content footprint.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div style={{ borderLeft: "3px solid #00bfb3" }} className="pl-5">
          <h4 className="text-base font-bold text-[#0b1437]">📝 What You Cover Well</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#4a5578]">
            <li>• Attorney bios with credentials and case history</li>
            <li>• Recent verdicts and settlements summary</li>
            <li>• Office locations and contact info</li>
          </ul>
        </div>
        <div style={{ borderLeft: "3px solid #e91e8a" }} className="pl-5">
          <h4 className="text-base font-bold text-[#0b1437]">📋 Content Gaps for AI Answers</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#4a5578]">
            <li>• "What to do after a car accident in {STATE}"</li>
            <li>• {STATE} statute of limitations explainers</li>
            <li>• Practice-area FAQ pages with schema</li>
            <li>• Comparison-style content ("vs settling on your own")</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function ActionPlanSection() {
  const cards = [
    {
      n: "01",
      title: "Foundation: Schema + Speed",
      body: "Deploy LegalService, LawFirm, Attorney, and FAQ schema across template pages. Fix LCP and INP on top 5 landing pages.",
    },
    {
      n: "02",
      title: "Local + Authority Signals",
      body: "Restructure Google Business Profile, request reviews via post-case workflow, build practice-area landing pages with city modifiers.",
    },
    {
      n: "03",
      title: "AI-Answer Content",
      body: "Publish 8 long-form answer pages targeting the queries AI is currently routing to competitors.",
    },
  ];
  return (
    <section>
      <Eyebrow>Priority Roadmap</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        90-Day AI Visibility Action Plan
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[#4a5578]">
        Here's exactly where to focus first to win more cases in the AI era.
      </p>
      <div className="mt-6 space-y-4">
        {cards.map((c) => (
          <Card key={c.n} style={{ borderLeft: "4px solid #e91e8a" }}>
            <div className="flex items-start gap-5">
              <span
                className="text-4xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  letterSpacing: "-0.025em",
                }}
              >
                {c.n}
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#0b1437]">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5578]">{c.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  const phases = [
    {
      color: "#e91e8a",
      title: "Quick Wins",
      window: "Weeks 1–4",
      items: ["Schema deploy", "Image / CWV pass", "GBP cleanup"],
    },
    {
      color: "#ff7a1a",
      title: "Content Expansion",
      window: "Weeks 5–8",
      items: ["8 answer pages", "FAQ schema", "Internal linking pass"],
    },
    {
      color: "#00bfb3",
      title: "Authority Building",
      window: "Weeks 9–12",
      items: ["Review velocity engine", "Citations + PR", "AI tracking dashboards"],
    },
  ];
  return (
    <Card>
      <h2 className="text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        Implementation Timeline
      </h2>
      <p className="mt-2 text-sm text-[#4a5578]">
        A phased approach to maximize impact while managing effort.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {phases.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-5"
            style={{ background: "#f8f9fc", borderLeft: `4px solid ${p.color}` }}
          >
            <h4 className="text-base font-bold text-[#0b1437]">{p.title}</h4>
            <p className="text-xs text-[#8a93b0]">{p.window}</p>
            <ul className="mt-3 space-y-2 text-sm text-[#0b1437]">
              {p.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

function FinalCta({ headline }: { headline: React.ReactNode }) {
  return (
    <DarkCard
      className="relative overflow-hidden text-center"
      style={{
        boxShadow:
          "0 0 80px -20px rgba(233,30,138,0.4), 0 0 60px -20px rgba(0,191,179,0.3)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #e91e8a 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #00bfb3 0%, transparent 70%)" }}
      />
      <div className="relative">
        <h2
          className="text-3xl font-bold md:text-4xl"
          style={{ letterSpacing: "-0.025em" }}
        >
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Every week you stay invisible, the firms above keep getting the impressions you should
          have. 20 minutes — full audit walkthrough — yours either way.
        </p>
        <div className="mt-6">
          <GradientButton>Book My 20-Minute Strategy Call →</GradientButton>
        </div>
        <p className="mt-4 text-xs text-white/60">
          Free · No deck · If we're not a fit, I'll tell you in the first 10 minutes.
        </p>
      </div>
    </DarkCard>
  );
}

// ---------- Teaser-only sections ----------
function LossSection() {
  return (
    <Card style={{ borderLeft: "4px solid #e91e8a" }}>
      <h2 className="text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        What being invisible in AI search is costing you right now.
      </h2>
      <p className="mt-4 leading-relaxed text-[#4a5578]">
        ChatGPT, Perplexity, and Google AI Overviews now answer professional service searches
        without sending users to websites. When someone asks "who's the best lawyer in {CITY}",
        they call whoever AI recommended.
      </p>
      <div
        className="mt-5 rounded-2xl p-5"
        style={{ background: "#fff5fb", border: "1px solid #ffd9ee" }}
      >
        <p className="text-[#0b1437]">
          We tested AI search results for {CITY} legal queries today. The AI cited multiple
          sources. <strong>{FIRM_NAME} was not one of them.</strong> Three of your direct
          competitors were.
        </p>
      </div>
      <p className="mt-4 text-[#4a5578]">
        You're not losing to a better firm — you're losing to one whose site was structured for AI
        to understand. That's fixable.
      </p>
    </Card>
  );
}

function StrategyCallCta() {
  const features = [
    ["📊", "The full report walkthrough", "Every score, every gap, every priority — explained, not handed to you cold."],
    ["🎯", "The 3 fixes that matter most", "Not all gaps are equal. I'll show you the 3 that move your score fastest."],
    ["🏆", "Competitor breakdown", "Exactly what firms beating you are doing — and what it takes to overtake them."],
    ["💰", "What this should cost", "Realistic budget whether you have an in-house team, an agency, or starting from zero."],
    ["🔧", "Schema, speed, and content gaps", "The specific technical fixes keeping AI from citing your firm."],
    ["📋", "A 90-day plan you keep", "Yours regardless of whether you work with Woman In Tech. No strings."],
  ];
  return (
    <DarkCard className="text-center" style={{ boxShadow: "0 0 80px -20px rgba(233,30,138,0.45)" }}>
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
        style={{ background: "rgba(0,191,179,0.18)", color: "#5fe7dc" }}
      >
        📞 Book Your Free Strategy Call
      </span>
      <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl" style={{ letterSpacing: "-0.025em" }}>
        Get the full breakdown — and a 90-day plan you can use either way.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-white/75">
        20-minute call, full audit walkthrough, 3 fastest fixes, 90-day plan whether or not you
        work with WIT.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([i, t, d]) => (
          <div
            key={t}
            className="rounded-2xl p-4 text-left"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="text-xl">{i}</div>
            <h5 className="mt-2 text-sm font-bold text-white">{t}</h5>
            <p className="mt-1 text-xs leading-relaxed text-white/70">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <GradientButton>Book My 20-Minute Strategy Call →</GradientButton>
      </div>
      <p className="mt-3 text-xs text-white/60">
        Free · No deck · If we're not a fit, I'll tell you in the first 10 minutes.
      </p>
    </DarkCard>
  );
}

function AlarmCards() {
  const cards = [
    ["🔴 Missing critical schema", `Your site doesn't tell AI you're a law firm. Several key schema types are missing — LocalBusiness, LegalService, LawFirm, Attorney. Without these, AI can't identify you for ${CITY} legal queries. Your competitors have them.`],
    ["🔴 Site speed flagged as poor", "Your homepage is below Google's performance threshold. Core Web Vitals affect both traditional and AI search. You're being filtered down before AI even evaluates your content."],
    ["🔴 Content gaps for high-intent queries", `${CITY} prospects are asking AI questions your site doesn't answer. Competitors who answer those questions get cited. You don't. We'll show you exactly which queries on the call.`],
  ];
  return (
    <Card>
      <h2 className="text-3xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
        Here's a preview of what we found.
      </h2>
      <p className="mt-2 text-[#4a5578]">
        The full audit covers 4 categories and 60+ specific gaps. Here are 3.
      </p>
      <div className="mt-6 space-y-3">
        {cards.map(([t, b]) => (
          <div
            key={t}
            className="rounded-xl p-5"
            style={{ background: "#fff5fb", borderLeft: "3px solid #e91e8a" }}
          >
            <h4 className="text-base font-bold text-[#0b1437]">{t}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#4a5578]">{b}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <GradientButton>Get the full breakdown — book a call →</GradientButton>
      </div>
    </Card>
  );
}

// ---------- Variants ----------
function TeaserVariant() {
  return (
    <>
      <Hero variant="teaser" />
      <div className="mx-auto max-w-[1100px] space-y-8 px-4 py-10 md:px-6 md:py-16">
        <LossSection />
        <StrategyCallCta />
        <Card>
          <h3 className="text-2xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
            How {FIRM_NAME} compares to your top {CITY} competitors
          </h3>
          <p className="mt-2 text-sm text-[#4a5578]">
            These are the firms whose AI visibility currently exceeds yours.
          </p>
          <div className="mt-5">
            <CompetitorTable />
          </div>
        </Card>
        <AIVisibilityKey />
        <AlarmCards />
        <FinalCta
          headline={
            <>
              You can fix this.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                But you have to start.
              </span>
            </>
          }
        />
        <p className="text-center text-xs text-[#8a93b0]">
          Not ready to book? Reply to my email with one question and I'll answer it personally
          within 24 hours. — Kara
        </p>
      </div>
    </>
  );
}

function FullVariant() {
  return (
    <>
      <Hero variant="full" />
      <div className="mx-auto max-w-[1100px] space-y-8 px-4 py-10 md:px-6 md:py-16">
        <AIOverviewSection />
        <CtaBlock
          body="The gaps below explain why competitors are being cited instead. Review them first — then decide if you want help fixing them."
          button="I want help fixing this"
        />
        <Card>
          <h3 className="text-2xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
            Competitor Score Comparison
          </h3>
          <div className="mt-5">
            <CompetitorTable />
          </div>
        </Card>
        <AIVisibilityKey collapsible />
        <ScoresGrid />
        <GeoSection />
        <CWVSection />
        <SchemaSection />
        <ContentSection />
        <ActionPlanSection />
        <CtaBlock
          body="Decide whether this is worth fixing — and what to do next."
          button="What would this take to fix?"
        />
        <TimelineSection />
        <FinalCta
          headline={
            <>
              Your firm deserves more than a pretty site.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                It deserves to be found.
              </span>
            </>
          }
        />
      </div>
    </>
  );
}

function PartialVariant() {
  return (
    <>
      <Hero variant="full" />
      <div className="mx-auto max-w-[1100px] space-y-8 px-4 py-10 md:px-6 md:py-16">
        <AIOverviewSection />
        <Card>
          <h3 className="text-2xl font-bold text-[#0b1437]" style={{ letterSpacing: "-0.025em" }}>
            Competitor Score Comparison
          </h3>
          <div className="mt-5">
            <CompetitorTable />
          </div>
        </Card>
        <AIVisibilityKey />

        {/* Gate */}
        <DarkCard
          className="text-center"
          style={{ boxShadow: "0 0 80px -20px rgba(233,30,138,0.45)" }}
        >
          <div className="text-5xl">🔒</div>
          <span
            className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(233,30,138,0.18)", color: "#ffb3da" }}
          >
            Full Report Ready
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl" style={{ letterSpacing: "-0.025em" }}>
            Your Complete AI Audit is Waiting
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            The full breakdown — Core Web Vitals, schema audit, content gaps, GEO/local data, and
            your 90-day action plan — is all here.
          </p>
          <div className="mt-6">
            <GradientButton>Book a Call to See Your Full Report →</GradientButton>
          </div>
          <p className="mt-3 text-xs text-white/60">
            Free 20-min strategy call. I walk you through everything live.
          </p>
        </DarkCard>

        {/* Blurred preview */}
        <div className="relative">
          <div
            className="space-y-8 overflow-hidden"
            style={{
              filter: "blur(10px)",
              pointerEvents: "none",
              userSelect: "none",
              maxHeight: 600,
            }}
          >
            <ScoresGrid />
            <GeoSection />
            <CWVSection />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
            }}
          />
        </div>
      </div>
    </>
  );
}

// ---------- Page ----------
function AIReportPage() {
  const [variant, setVariant] = useState<Variant>("full");
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0b1437", fontFamily: "'DM Sans', sans-serif" }}>
      {/* radial background overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(233,30,138,0.04), transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(0,191,179,0.04), transparent 60%)",
        }}
      />

      {/* Canvas-only variant toggle */}
      <div className="mx-auto flex max-w-[1100px] justify-center px-4 pt-4 md:px-6">
        <div
          className="inline-flex items-center gap-1 rounded-full p-1 text-xs font-semibold"
          style={{ background: "#f1f3fa", border: "1px solid #e6e8f0" }}
        >
          {(["teaser", "partial", "full"] as Variant[]).map((v) => {
            const active = variant === v;
            return (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className="rounded-full px-3.5 py-1.5 transition-colors"
                style={{
                  background: active
                    ? "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 100%)"
                    : "transparent",
                  color: active ? "#fff" : "#0b1437",
                }}
              >
                {v === "teaser" ? "Teaser (paid=0)" : v === "partial" ? "Partial (paid=2)" : "Full (paid=1)"}
              </button>
            );
          })}
        </div>
      </div>

      <PageHeader />
      {variant === "teaser" && <TeaserVariant />}
      {variant === "partial" && <PartialVariant />}
      {variant === "full" && <FullVariant />}
      <PageFooter />
    </div>
  );
}
