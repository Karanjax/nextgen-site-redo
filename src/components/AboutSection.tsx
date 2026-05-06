import karaPortrait from "@/assets/kara-portrait.jpg";

const creds = [
  { icon: "⚡", title: "Technical Founder", desc: "Code, systems & strategy in one person", bgClass: "bg-magenta-soft text-magenta" },
  { icon: "◆", title: "Schema Architect", desc: "Answer-engine ready by default", bgClass: "bg-teal-soft text-[#008b82]" },
  { icon: "⚙", title: "n8n + Supabase Stack", desc: "Real automations, real data flows", bgClass: "bg-orange-soft text-[#c45200]" },
  { icon: "★", title: "7 Years · 80+ Clients", desc: "Track record across industries", bgClass: "bg-lime-soft text-[#5a7505]" },
];

export function AboutSection() {
  return (
    <section className="py-[120px] px-8 max-w-[1200px] mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative" style={{ boxShadow: "0 8px 24px rgba(11,20,55,0.08), 0 24px 64px rgba(11,20,55,0.12)" }}>
            <img src={karaPortrait} alt="Kara Noreika — Woman In Tech founder" className="w-full h-full object-cover" loading="lazy" width={800} height={1024} />
          </div>
          <div className="absolute -top-5 -right-5 bg-white px-5.5 py-4 rounded-full flex items-center gap-2.5 text-sm font-semibold border border-line" style={{ boxShadow: "0 4px 12px rgba(11,20,55,0.06), 0 12px 32px rgba(11,20,55,0.08)" }}>
            <span className="w-2.5 h-2.5 rounded-full bg-lime animate-[pulse-dot_1.5s_infinite]" />
            Available for new clients
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta-soft text-magenta rounded-full text-xs font-semibold tracking-wide mb-5">
            Who's Behind This
          </span>
          <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] mb-5">
            I built this because agencies<br />
            <span className="gradient-accent">kept selling pieces, not systems.</span>
          </h2>
          <p className="text-[19px] leading-relaxed text-ink-soft mb-8">
            I'm Kara Noreika — technical founder, integrator, and the woman in tech behind every line of code, every schema decision, every automation in the Be Found Framework™. No account managers. No offshore handoffs. No mystery dashboards. Just one operator who can architect the SEO, ship the site, write the content, wire the automation, and stand behind every result.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {creds.map((c) => (
              <div key={c.title} className="bg-bg-soft border border-line rounded-[14px] p-4">
                <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-2.5 text-base ${c.bgClass}`}>
                  {c.icon}
                </div>
                <p className="text-sm font-bold tracking-tight mb-1">{c.title}</p>
                <p className="text-xs text-ink-soft leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
