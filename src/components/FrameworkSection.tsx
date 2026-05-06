const phases = [
  {
    num: "PHASE 01",
    title: "Be Found.",
    desc: "Build the technical foundation that makes you visible — in Google, in AI search, on the map. Schema-first, answer-engine ready from day one.",
    services: ["SEO + AEO + GEO", "Google Business Profile", "Schema architecture"],
    gradient: "linear-gradient(135deg, var(--magenta), #c4187a)",
  },
  {
    num: "PHASE 02",
    title: "Build Trust.",
    desc: "Turn visibility into credibility with a fast, beautiful site and consistent social presence that makes the choice obvious.",
    services: ["Website Development", "Social Media Management", "Content Strategy"],
    gradient: "linear-gradient(135deg, var(--teal), #009990)",
  },
  {
    num: "PHASE 03",
    title: "Fuel Growth.",
    desc: "Scale what's working with intelligent automation and outbound that runs while you sleep. Pipelines, not just posts.",
    services: ["Automations + AI", "LinkedIn + Email Outreach", "Reporting + Optimization"],
    gradient: "linear-gradient(135deg, var(--orange), #d45f0d)",
  },
];

export function FrameworkSection() {
  return (
    <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="framework">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-soft text-[#008b82] rounded-full text-xs font-semibold tracking-wide mb-5">
        The Be Found Framework™
      </span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[880px] mb-5">
        Three phases.<br />
        <span className="gradient-accent">One operating system.</span>
      </h2>
      <p className="text-[19px] leading-relaxed text-ink-soft max-w-[680px] mb-[60px]">
        Each phase compounds on the last. Visibility builds trust. Trust drives growth. Every dollar you spend gets stronger over time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {phases.map((phase, i) => (
          <div
            key={phase.num}
            className="bg-white border border-line rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,20,55,0.06),0_12px_32px_rgba(11,20,55,0.08)] hover:border-transparent group"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative" style={{ background: phase.gradient }}>
              <div className="absolute w-7 h-7 rounded-full bg-white/85" />
            </div>
            <span className="absolute top-8 right-8 font-mono text-[11px] text-ink-mute tracking-wider">{phase.num}</span>
            <h3 className="text-[28px] font-bold tracking-tight mb-3">{phase.title}</h3>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-6">{phase.desc}</p>
            <ul className="border-t border-line pt-4.5 flex flex-col gap-2.5">
              {phase.services.map((s) => (
                <li key={s} className="flex justify-between items-center text-sm font-medium text-ink">
                  {s}
                  <span className="text-ink-mute text-sm transition-all duration-200 group-hover:text-magenta group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
