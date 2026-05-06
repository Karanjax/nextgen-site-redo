import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(0);

  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayed(v));
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{displayed.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 30, suffix: "K+", label: "Website Page Views" },
  { value: 178, suffix: "K+", label: "Social Media Reach" },
  { value: 28, suffix: "K", label: "Google Search Impressions" },
  { value: 3, suffix: "x", label: "Email List Growth" },
];

export function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.72 0.22 330 / 5%), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-brand-pink mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Results
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Zero to <span className="text-gradient-pink">30K Page Views</span>
            <br />
            in 12 Months.
          </motion.h2>

          <motion.p
            className="mt-6 text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            What happens when every channel works together as one system — even without a physical storefront.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl glow-border glass p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-hero">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Client badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">Sarasota Children's Museum</strong> · 12 Months · Built from 0 · No Physical Location
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
