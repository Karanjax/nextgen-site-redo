import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const blur = useTransform(scrollY, [0, 100], [0, 24]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `oklch(0.11 0.02 270 / ${v})`),
        backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://tamberra.s3.us-east-2.amazonaws.com/wp-content/uploads/20250322143043/logo-white.png"
              alt="Woman In Tech"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-pink group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple px-5 py-2 text-sm font-semibold text-foreground hover:shadow-lg hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
