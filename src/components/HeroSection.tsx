export function HeroSection() {
  return (
    <section className="relative">
      {/* Gradient mesh background */}
      <div className="absolute top-0 left-0 right-0 h-[900px] -z-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5fb 0%, #f0fbfa 35%, #fef9eb 70%, #fff1e6 100%)" }}>
        <div className="absolute -top-[100px] -left-[50px] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite]" style={{ background: "var(--magenta)" }} />
        <div className="absolute top-[100px] -right-[100px] w-[700px] h-[700px] rounded-full opacity-[0.18] blur-[80px] animate-[float_20s_ease-in-out_infinite_-7s]" style={{ background: "var(--teal)" }} />
        <div className="absolute top-[400px] left-[30%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] animate-[float_20s_ease-in-out_infinite_-14s]" style={{ background: "var(--orange)" }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8 pt-[140px] pb-[100px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 pr-3.5 pl-1.5 bg-white border border-line rounded-full text-[13px] font-medium text-ink-soft mb-7" style={{ boxShadow: "0 1px 2px rgba(11,20,55,0.04), 0 2px 6px rgba(11,20,55,0.04)" }}>
          <span className="gradient-cta text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">NEW</span>
          Now optimizing for ChatGPT, Perplexity & Google AI Overviews
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(48px,7vw,88px)] font-bold leading-[1.02] tracking-[-0.035em] max-w-[920px] mb-6">
          Stop being invisible<br />
          <span className="gradient-text">in AI search.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl leading-relaxed text-ink-soft max-w-[640px] mb-9">
          Your competitors are showing up in ChatGPT, Perplexity, and Google's AI Overviews. You're not. The Be Found Framework™ rebuilds your visibility from the ground up — so you're the answer, not the afterthought.
        </p>

        {/* Actions */}
        <div className="flex gap-3 items-center mb-14 flex-wrap">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white transition-all duration-200"
            style={{ background: "var(--ink)", boxShadow: "0 4px 14px rgba(11,20,55,0.2)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #e91e8a, #ff7a1a)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(233,30,138,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(11,20,55,0.2)";
            }}
          >
            Book a free visibility audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <button className="inline-flex items-center gap-2 px-5.5 py-4 rounded-full text-[15px] font-semibold text-ink transition-all duration-200 hover:bg-white/60">
            <span className="w-7 h-7 rounded-full bg-ink text-white inline-flex items-center justify-center text-[10px]">▶</span>
            How it works
          </button>
        </div>

        {/* Trust strip */}
        <div className="flex items-center gap-5 pt-6 border-t border-ink/8 max-w-[640px]">
          <span className="text-orange text-sm tracking-widest">★★★★★</span>
          <span className="text-[13px] text-ink-soft">
            Trusted by <strong className="text-ink font-semibold">80+ founders</strong> across legal, healthcare & professional services
          </span>
        </div>

        {/* Hero product card */}
        <div className="relative mt-20">
          {/* Floating decorations */}
          <div className="absolute top-[60px] -left-7 z-10 bg-white rounded-[14px] px-4.5 py-3.5 flex items-center gap-2.5 text-[13px] font-medium border border-line animate-[gentle_6s_ease-in-out_infinite] hidden lg:flex" style={{ boxShadow: "0 4px 12px rgba(11,20,55,0.06), 0 12px 32px rgba(11,20,55,0.08)", transform: "rotate(-3deg)" }}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, var(--magenta), #c4187a)" }}>↑</span>
            <span><strong className="block font-bold">4.2× more leads</strong><span className="text-[11px] text-ink-soft">after BFF launch</span></span>
          </div>
          <div className="absolute bottom-20 -right-5 z-10 bg-white rounded-[14px] px-4.5 py-3.5 flex items-center gap-2.5 text-[13px] font-medium border border-line animate-[gentle_6s_ease-in-out_infinite_-3s] hidden lg:flex" style={{ boxShadow: "0 4px 12px rgba(11,20,55,0.06), 0 12px 32px rgba(11,20,55,0.08)", transform: "rotate(2deg)" }}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, var(--teal), #009990)" }}>⚡</span>
            <span><strong className="block font-bold">30 days</strong><span className="text-[11px] text-ink-soft">to first AI citation</span></span>
          </div>

          <div className="bg-white rounded-3xl p-2 border border-line" style={{ boxShadow: "0 8px 24px rgba(11,20,55,0.08), 0 24px 64px rgba(11,20,55,0.12)" }}>
            <div className="bg-bg-soft rounded-[18px] overflow-hidden">
              {/* Browser bar */}
              <div className="bg-white px-4.5 py-3.5 flex items-center gap-3.5 border-b border-line">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex-1 bg-bg-tint px-3.5 py-1.5 rounded-full font-mono text-xs text-ink-soft flex items-center gap-2">
                  🔒 app.womanintech.com / visibility-audit
                </div>
              </div>

              {/* Product body */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI Search panel */}
                <div className="bg-white rounded-2xl p-6 border border-line" style={{ boxShadow: "0 1px 2px rgba(11,20,55,0.04), 0 2px 6px rgba(11,20,55,0.04)" }}>
                  <div className="flex items-center gap-2.5 text-xs text-ink-soft font-medium mb-4 pb-3.5 border-b border-line">
                    <span className="w-5.5 h-5.5 rounded-md flex items-center justify-center text-white text-[11px] font-bold" style={{ background: "linear-gradient(135deg, #10a37f, #0e8c6c)" }}>G</span>
                    ChatGPT search
                  </div>
                  <div className="text-base font-semibold mb-4.5 leading-snug">
                    Best personal injury attorneys in Sarasota?
                    <span className="inline-block w-0.5 h-[18px] bg-magenta align-[-3px] ml-0.5 animate-[blink_1s_infinite]" />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-[pulse-dot_1.5s_infinite]" />
                    AI recommends
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { num: "01", name: "Hancock Injury Attorneys", cite: "cited 14×" },
                      { num: "02", name: "Justice Pays Law Group", cite: "cited 9×" },
                      { num: "03", name: "Lancaster & Eure", cite: "cited 7×" },
                    ].map((r, i) => (
                      <div key={r.num} className="grid grid-cols-[24px_1fr_auto] gap-2.5 items-center px-3 py-2.5 rounded-[10px] bg-bg-soft text-[13px]" style={{ opacity: 0, animation: `slideUp 0.4s ease forwards ${0.4 + i * 0.3}s` }}>
                        <span className="font-mono font-semibold text-[11px] text-ink-mute">{r.num}</span>
                        <span className="font-semibold">{r.name}</span>
                        <span className="font-mono text-[10px] bg-lime-soft text-[#5a7505] px-1.5 py-0.5 rounded font-semibold">{r.cite}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 px-3 py-2.5 rounded-[10px] text-xs text-magenta font-semibold flex items-center gap-2 border border-magenta-soft" style={{ background: "linear-gradient(135deg, #ffeaf5, #ffe2d4)", opacity: 0, animation: "slideUp 0.4s ease forwards 1.3s" }}>
                    ⚠ Your firm isn't here. Let's fix that.
                  </div>
                </div>

                {/* WIT panel */}
                <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)" }}>
                  <div className="absolute -top-[40%] -right-[20%] w-[300px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.4), transparent 60%)" }} />
                  <div className="relative z-10">
                    <div className="text-[11px] font-semibold uppercase tracking-wider opacity-70 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
                      After 90 days with WIT
                    </div>
                    <div className="text-[22px] font-bold leading-tight tracking-tight mb-4.5">
                      From invisible to inevitable.
                    </div>
                    {[
                      { label: "AI search citations", value: "+1,247%", trend: "↑ 12.4×", width: "92%" },
                      { label: "Qualified leads / mo", value: "68 → 284", trend: "↑ 4.2×", width: "78%" },
                      { label: "Organic traffic", value: "+318%", trend: "↑ 3.2×", width: "65%" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl p-3.5 mb-2.5 flex justify-between items-center relative overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <div>
                          <div className="text-xs opacity-70 mb-1">{m.label}</div>
                          <div className="text-[22px] font-bold tracking-tight">{m.value}</div>
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: "rgba(184, 230, 13, 0.15)", color: "var(--lime)" }}>{m.trend}</span>
                        <div className="absolute bottom-0 left-0 h-0.5" style={{ width: m.width, background: "linear-gradient(90deg, var(--magenta), var(--orange))" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
