import { Link } from "@tanstack/react-router";
import witLogo from "@/assets/wit-logo.png";

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1200px]"
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: "32px",
        padding: "12px 12px 12px 24px",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--line)",
        borderRadius: "100px",
        boxShadow: "0 1px 2px rgba(11,20,55,0.04), 0 2px 6px rgba(11,20,55,0.04)",
      }}
    >
      <Link to="/" className="flex items-center gap-2.5 font-bold text-[17px] tracking-tight">
        <span className="flex gap-0.5">
          <span className="w-2 h-2 rounded-sm bg-magenta" />
          <span className="w-2 h-2 rounded-sm bg-teal" />
          <span className="w-2 h-2 rounded-sm bg-lime" />
          <span className="w-2 h-2 rounded-sm bg-orange" />
        </span>
        Woman In Tech
      </Link>

      <div className="hidden md:flex gap-2 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3.5 py-2 text-sm font-medium rounded-full text-ink-soft hover:text-ink hover:bg-bg-tint transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#cta"
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200"
        style={{
          background: "var(--ink)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset, 0 2px 8px rgba(11,20,55,0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #e91e8a, #ff7a1a)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(233,30,138,0.3)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--ink)";
          e.currentTarget.style.boxShadow = "0 1px 0 rgba(255,255,255,0.1) inset, 0 2px 8px rgba(11,20,55,0.15)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Book a call
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </nav>
  );
}
