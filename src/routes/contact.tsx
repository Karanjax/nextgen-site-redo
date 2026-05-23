import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import witLogo from "@/assets/wit-logo-full.png";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Woman In Tech" },
      { name: "description", content: "Get in touch with Kara Noreika at Woman In Tech. Book a free discovery call or send a message about your digital strategy needs." },
      { property: "og:title", content: "Contact — Woman In Tech" },
      { property: "og:description", content: "Get in touch with Kara Noreika at Woman In Tech. Book a free discovery call or send a message about your digital strategy needs." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav for sub-pages */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1200px]"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: "32px",
          padding: "6px 12px 6px 16px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--line)",
          borderRadius: "100px",
          boxShadow: "0 1px 2px rgba(11,20,55,0.04), 0 2px 6px rgba(11,20,55,0.04)",
        }}
      >
        <Link to="/" className="flex items-center" aria-label="Woman In Tech home">
          <img
            src={witLogo}
            alt="Woman In Tech"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-2 justify-center">
          {[
            { label: "Home", href: "/" },
            { label: "Framework", href: "/#framework" },
            { label: "Results", href: "/#results" },
            { label: "About", href: "/#about" },
            { label: "Insights", href: "/#blog" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="px-3.5 py-2 text-sm font-medium rounded-full text-ink-soft hover:text-ink hover:bg-bg-tint transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #e91e8a, #ff7a1a)",
          }}
        >
          Contact
        </span>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:pt-44 md:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-magenta-soft text-magenta mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.1] mb-5">
              Let’s talk about your{" "}
              <span className="gradient-text">visibility</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
              Whether you need a full strategy overhaul or just want to understand where you stand in AI search, I’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card border border-line rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-ink mb-6">Send a message</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Placeholder: hook up to backend later
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-magenta/30 focus:border-magenta transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-magenta/30 focus:border-magenta transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-soft mb-1.5">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink focus:outline-none focus:ring-2 focus:ring-magenta/30 focus:border-magenta transition-all appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238a93b0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                  >
                    <option>General inquiry</option>
                    <option>Strategy consultation</option>
                    <option>Website project</option>
                    <option>Speaking / partnership</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-soft mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-magenta/30 focus:border-magenta transition-all resize-none"
                    placeholder="Tell me about your business and what you're looking to achieve..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #e91e8a, #ff7a1a)",
                    boxShadow: "0 4px 14px rgba(233,30,138,0.25)",
                  }}
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card border border-line rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-ink mb-6">Other ways to reach me</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-magenta-soft shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e91e8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4Z"/><path d="M12 5v3"/><path d="m8 9 8 0"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-0.5">Email</h3>
                      <a href="mailto:kara@womanintech.com" className="text-ink-soft hover:text-magenta transition-colors">kara@womanintech.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal-soft shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00bfb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-0.5">LinkedIn</h3>
                      <a href="#" className="text-ink-soft hover:text-teal transition-colors">linkedin.com/in/karanoreika</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-lime-soft shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a9e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-0.5">Instagram</h3>
                      <a href="#" className="text-ink-soft hover:text-lime transition-colors">@womanintech</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-soft shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-0.5">Facebook</h3>
                      <a href="#" className="text-ink-soft hover:text-orange transition-colors">facebook.com/womanintech</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 text-white"
                style={{
                  background: "linear-gradient(135deg, #0b1437 0%, #1a2756 100%)",
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                  style={{
                    background: "radial-gradient(circle, #e91e8a 0%, transparent 70%)",
                    filter: "blur(60px)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Prefer to talk?</h3>
                  <p className="text-sm text-white/70 mb-6 leading-relaxed">
                    Book a free 30-minute discovery call. No pitch, no pressure — just a conversation about where you are and where you want to be.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #e91e8a, #ff7a1a)",
                      boxShadow: "0 4px 14px rgba(233,30,138,0.3)",
                    }}
                  >
                    Book a call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-bg-soft border-t border-line">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 text-lg font-bold">
            <span className="flex gap-0.5">
              <span className="w-2 h-2 rounded-sm bg-magenta" />
              <span className="w-2 h-2 rounded-sm bg-teal" />
              <span className="w-2 h-2 rounded-sm bg-lime" />
              <span className="w-2 h-2 rounded-sm bg-orange" />
            </span>
            Woman In Tech
          </div>
          <div className="flex items-center gap-6 text-sm text-ink-mute">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <a href="/" className="hover:text-ink transition-colors">Privacy</a>
            <span>© 2026 Woman In Tech, LLC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
