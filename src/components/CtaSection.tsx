import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, oklch(0.72 0.22 330 / 8%), transparent 50%), radial-gradient(ellipse at 80% 20%, oklch(0.65 0.20 260 / 6%), transparent 50%)",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Ready to Build a Digital Presence
          <br />
          <span className="text-gradient-pink">That Can't Be Beat?</span>
        </h2>

        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's connect your SEO, website, social, and automations into one
          system that compounds — and start seeing real results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="rounded-full px-10 py-6 text-base">
            Book a Strategy Call
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 text-base">
            See All Services
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
