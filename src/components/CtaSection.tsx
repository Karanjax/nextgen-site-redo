export function CtaSection() {
  return (
    <section className="py-[120px] px-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }} id="cta">
      <div className="absolute -top-[200px] left-[20%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.4), transparent 60%)" }} />
      <div className="absolute -bottom-[200px] right-[10%] w-[600px] h-[600px] blur-[40px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,191,179,0.3), transparent 60%)" }} />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-medium mb-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <span className="w-2 h-2 rounded-full bg-lime animate-[pulse-dot_1.5s_infinite]" />
          Free 30-min visibility audit · No commitment
        </div>

        <h2 className="text-[clamp(48px,6vw,76px)] font-bold tracking-[-0.035em] leading-[1.05] mb-5">
          Let's get you found.<br />
          <span style={{ background: "linear-gradient(135deg, #e91e8a 0%, #ff7a1a 50%, #b8e60d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>And keep you there.</span>
        </h2>

        <p className="text-[19px] opacity-85 max-w-[600px] mx-auto mb-9 leading-relaxed">
          We'll show you exactly where ChatGPT, Perplexity, and Google's AI Overviews are sending your prospects — and how to redirect that traffic to you.
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
            Book my free audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#" className="px-7 py-[18px] rounded-full text-base font-semibold" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}>
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
