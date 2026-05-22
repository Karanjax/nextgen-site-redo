import desktopImg from "@/assets/showcase-desktop.jpg";
import mobileImg from "@/assets/showcase-mobile.jpg";
import socialImg from "@/assets/showcase-social.jpg";
import searchImg from "@/assets/showcase-search.jpg";

export function ShowcaseSection() {
  return (
    <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="showcase">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-soft text-[#5a7505] rounded-full text-xs font-semibold tracking-wide mb-5">
        Every Surface, On-Brand
      </span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[880px] mb-5">
        One system.<br />
        <span className="gradient-accent">Every screen your customers see.</span>
      </h2>
      <p className="text-[19px] leading-relaxed text-ink-soft max-w-[680px] mb-[60px]">
        Website, mobile, social, AI search, and Google Business Profile — designed, built, and connected so every touchpoint compounds the others.
      </p>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[repeat(3,minmax(0,auto))] gap-5">
        {/* Desktop — large */}
        <div className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden border border-line bg-bg-soft p-6 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 4px 12px rgba(11,20,55,0.04), 0 12px 32px rgba(11,20,55,0.06)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-mono text-[11px] text-ink-mute tracking-wider uppercase mb-1.5">01 — Desktop</p>
              <p className="text-[22px] font-bold tracking-tight">Conversion-built websites</p>
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-magenta-soft text-magenta">Astro + React</span>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
            <img src={desktopImg} alt="Marketing analytics dashboard on a MacBook Pro" loading="lazy" width={1600} height={1200} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden border border-line p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(160deg, #fff5fb, #fef9eb)", boxShadow: "0 4px 12px rgba(11,20,55,0.04), 0 12px 32px rgba(11,20,55,0.06)" }}>
          <p className="font-mono text-[11px] text-ink-mute tracking-wider uppercase mb-1.5">02 — Mobile</p>
          <p className="text-[22px] font-bold tracking-tight mb-5">Thumb-first, always.</p>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={mobileImg} alt="iPhone mockups showing social feed and mobile website" loading="lazy" width={1400} height={1400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        </div>

        {/* Social */}
        <div className="md:col-span-3 group relative rounded-3xl overflow-hidden border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 4px 12px rgba(11,20,55,0.04), 0 12px 32px rgba(11,20,55,0.06)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-mono text-[11px] text-ink-mute tracking-wider uppercase mb-1.5">03 — Social</p>
              <p className="text-[22px] font-bold tracking-tight">Branded content systems</p>
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-soft text-[#008b82]">IG · LinkedIn</span>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-bg-soft">
            <img src={socialImg} alt="Grid of branded Instagram social media posts" loading="lazy" width={1400} height={1400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        </div>

        {/* Search / GBP */}
        <div className="md:col-span-3 group relative rounded-3xl overflow-hidden border border-line p-6 text-white transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)", boxShadow: "0 4px 12px rgba(11,20,55,0.04), 0 12px 32px rgba(11,20,55,0.06)" }}>
          <div className="absolute -top-[30%] -right-[20%] w-[300px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,138,0.3), transparent 60%)" }} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-mono text-[11px] text-white/50 tracking-wider uppercase mb-1.5">04 — AI Search + GBP</p>
                <p className="text-[22px] font-bold tracking-tight">Cited by the answer engines</p>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(184,230,13,0.15)", color: "var(--lime)" }}>Live</span>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
              <img src={searchImg} alt="Google AI Overview and Business Profile search result" loading="lazy" width={1600} height={1100} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
