import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.22 330 / 12%), transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.20 260 / 10%), transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.25 295 / 8%), transparent 70%)" }}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(1 0 0 / 8%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 8%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-brand-pink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-pink animate-pulse" />
            Digital Strategy That Compounds
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient-hero">Be Seen.</span>
          <br />
          <span className="text-gradient-hero">Be Trusted.</span>
          <br />
          <span className="text-gradient-pink">Grow Confidently.</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          A connected digital strategy that builds visibility, earns credibility,
          and scales what's working — so every dollar you spend compounds.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button variant="hero" size="lg" className="rounded-full px-8 py-6 text-base">
            Start Your Strategy
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full px-8 py-6 text-base">
            See the Framework
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-brand-pink"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
