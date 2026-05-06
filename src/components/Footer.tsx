import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://tamberra.s3.us-east-2.amazonaws.com/wp-content/uploads/20250322143043/logo-white.png"
              alt="Woman In Tech"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Woman In Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
