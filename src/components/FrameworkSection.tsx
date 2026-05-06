import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    title: "Be Found",
    description: "Build the technical foundation that makes you visible — in Google, in AI search, and on the map.",
    services: ["Search Engine Optimization", "Google Business Profile", "Technical Site Foundation"],
    gradient: "from-brand-blue to-brand-purple",
    accentColor: "oklch(0.65 0.20 260)",
  },
  {
    number: "02",
    title: "Build Trust",
    description: "Turn visibility into credibility with a site and social presence that converts visitors into customers.",
    services: ["Website Development", "Social Media Management", "Content Strategy"],
    gradient: "from-brand-purple to-brand-pink",
    accentColor: "oklch(0.72 0.22 330)",
  },
  {
    number: "03",
    title: "Fuel Growth",
    description: "Scale what's working with intelligent automation and outreach that runs while you sleep.",
    services: ["Automations & AI", "LinkedIn + Email Outreach", "Reporting & Optimization"],
    gradient: "from-brand-pink to-brand-orange",
    accentColor: "oklch(0.75 0.18 55)",
  },
];

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div className="relative rounded-3xl glow-border p-8 md:p-10 glass overflow-hidden transition-all duration-500 hover:scale-[1.02]">
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          style={{ background: `radial-gradient(circle at 50% 100%, ${phase.accentColor} / 8%, transparent 60%)` }}
        />

        <div className="relative z-10">
          <span className={`text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
            Phase {phase.number}
          </span>

          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{phase.title}</h3>

          <p className="mt-4 text-muted-foreground leading-relaxed">{phase.description}</p>

          <ul className="mt-8 space-y-3">
            {phase.services.map((service) => (
              <li key={service} className="flex items-center gap-3 text-sm text-secondary-foreground">
                <span
                  className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: phase.accentColor }}
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function FrameworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-brand-pink mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            The Be Found Framework™
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Three Phases. One System.
            <br />
            <span className="text-gradient-hero">Everything Connected.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>

        {/* Connection line */}
        <div className="hidden md:flex items-center justify-center mt-12">
          <motion.div
            className="h-px flex-1 max-w-md"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.20 260), oklch(0.72 0.22 330), oklch(0.75 0.18 55), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
