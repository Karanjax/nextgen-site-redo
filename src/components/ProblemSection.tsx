import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-brand-pink mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The Problem We Solve
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Marketing Shouldn't
          <br />
          <span className="text-gradient-hero">Work in Silos.</span>
        </motion.h2>

        <motion.p
          className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Most businesses buy SEO from one vendor, get a website from another, and post on
          social media with no connection between any of it. The result? Wasted budget,
          inconsistent messaging, and growth that stalls.
        </motion.p>

        <motion.div
          className="mt-12 rounded-2xl glow-border p-8 md:p-12 glass"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
            The <span className="text-gradient-pink">Be Found Framework™</span> changes that.
            It's a single, connected system where your SEO, website, social presence,
            and automations all reinforce each other — so every dollar you spend{" "}
            <span className="text-brand-pink">compounds</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
