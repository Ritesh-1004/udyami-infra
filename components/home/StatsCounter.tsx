"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 24, suffix: "+", label: "Projects Completed", desc: "Across Pune & PCMC" },
  { value: 3200, suffix: "+", label: "Families Served", desc: "Trusted home buyers" },
  { value: 10, suffix: "+", label: "Years Experience", desc: "In Maharashtra real estate" },
  { value: 180, suffix: " Acres", label: "Land Developed", desc: "Premium locations" },
];

export default function StatsCounter() {
  return (
    <section className="relative py-20 overflow-hidden bg-[var(--color-primary)]">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(212,175,55,0.2),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-secondary)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-secondary)]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <AnimatedCounter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
              <p className="text-white/40 text-xs mt-1 tracking-wide">{s.desc}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
