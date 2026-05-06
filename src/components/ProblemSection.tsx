export function ProblemSection() {
  return (
    <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="problem">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-5">
        The Problem
      </span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[880px] mb-5">
        Your marketing shouldn't<br />
        <span className="gradient-accent">work in silos.</span>
      </h2>
      <p className="text-[19px] leading-relaxed text-ink-soft max-w-[680px] mb-[60px]">
        Most businesses buy SEO from one vendor, get a website from another, and post on social with no connection between any of it. Wasted budget. Stalled growth. Time to fix it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="rounded-3xl p-9 bg-bg-soft border border-line relative overflow-hidden">
          <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4 bg-white text-ink-mute border border-line">Before</span>
          <h3 className="text-[28px] font-bold tracking-tight leading-tight mb-5">Five vendors. Zero strategy.</h3>
          <ul className="flex flex-col gap-2.5">
            {[
              "SEO agency optimizes for Google — ignores ChatGPT entirely",
              "Website built without schema, invisible to AI search engines",
              "Social posts contradict the brand voice on the website",
              "No automation, leads fall through the cracks",
              "Reporting in five dashboards. Or none at all.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5" style={{ background: "#fce4eb", color: "#d4174a" }}>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="rounded-3xl p-9 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }}>
          <div className="absolute -top-[50%] -right-[30%] w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.35), transparent 60%)" }} />
          <div className="absolute -bottom-[40%] -left-[20%] w-[350px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.25), transparent 60%)" }} />
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4 text-white" style={{ background: "rgba(255,255,255,0.1)" }}>After</span>
            <h3 className="text-[28px] font-bold tracking-tight leading-tight mb-5">One operator. One system.</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Found in Google, ChatGPT, Perplexity, and AI Overviews",
                "Answer-engine schema baked into every page",
                "Voice, visuals, offer — consistent across every channel",
                "n8n automations capture and qualify leads 24/7",
                "One dashboard. One source of truth. Total clarity.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/85">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5" style={{ background: "rgba(184,230,13,0.2)", color: "var(--lime)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
