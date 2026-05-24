import { Link } from "@tanstack/react-router";

const services = ["SEO + AEO + GEO", "Website Development", "Social Media Management", "Automations + AI", "GBP Optimization"];
const company = [
  { label: "About Kara", href: "/about" },
  { label: "The Framework", href: "#framework" },
  { label: "Case Studies", href: "#results" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/contact" },
];
const connect = ["kara@womanintech.com", "LinkedIn", "Instagram", "Facebook"];

export function Footer() {
  return (
    <footer className="py-20 px-8 bg-bg-soft border-t border-line">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-[60px] pb-[50px] border-b border-line">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold mb-3.5">
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-sm bg-magenta" />
                <span className="w-2 h-2 rounded-sm bg-teal" />
                <span className="w-2 h-2 rounded-sm bg-lime" />
                <span className="w-2 h-2 rounded-sm bg-orange" />
              </span>
              Woman In Tech
            </div>
            <p className="text-sm text-ink-soft max-w-[320px] leading-relaxed">
              A connected digital strategy for businesses that refuse to be invisible. Built and run by Kara Noreika.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4.5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}><a href="#" className="text-sm text-ink-soft hover:text-magenta transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4.5">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link to={item.href} className="text-sm text-ink-soft hover:text-magenta transition-colors">{item.label}</Link>
                  ) : (
                    <a href={item.href} className="text-sm text-ink-soft hover:text-magenta transition-colors">{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4.5">Connect</h4>
            <ul className="space-y-2.5">
              {connect.map((s) => (
                <li key={s}><a href="#" className="text-sm text-ink-soft hover:text-magenta transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-7.5 flex flex-col md:flex-row justify-between text-[13px] text-ink-mute gap-2">
          <span>© 2026 Woman In Tech, LLC · All rights reserved</span>
          <span>Built in Astro · Hosted on Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}
