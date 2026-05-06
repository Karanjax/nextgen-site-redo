const industries = ["Law Firms", "Med Spas", "Healthcare", "Nonprofits", "Pro Services", "SaaS"];

export function LogoStrip() {
  return (
    <section className="py-20 px-8 text-center border-t border-b border-line-soft bg-bg-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-mute mb-8">
        Backed by results across these industries
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 max-w-[1100px] mx-auto opacity-60">
        {industries.map((name) => (
          <span key={name} className="text-lg font-bold tracking-tight text-ink-soft italic">{name}</span>
        ))}
      </div>
    </section>
  );
}
