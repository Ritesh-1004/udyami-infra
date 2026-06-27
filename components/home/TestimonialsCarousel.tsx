"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(n: number) {
    setDirection(n);
    setCurrent((c) => (c + n + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section className="section-pad bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Buyers Say"
          description="Verified feedback from families and investors who've built their futures with Udyami Infra Foundation."
          center
        />

        <div className="relative bg-white rounded-2xl p-10 shadow-[0_12px_50px_-20px_rgba(10,35,66,0.18)] border border-black/5 overflow-hidden">
          {/* Gold accent top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)]" />

          <FaQuoteLeft className="text-4xl text-[var(--color-secondary)]/20 mb-6" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-center"
            >
              <p className="font-display text-xl md:text-2xl text-[var(--color-primary)] leading-relaxed mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-5 text-[var(--color-secondary)]">
                {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} size={14} />)}
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--color-secondary)]/30">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[var(--color-primary)]">{t.name}</p>
                  <p className="text-xs text-stone">{t.role} · {t.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all"
            >
              <HiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-[var(--color-secondary)]" : "w-2 h-2 bg-[var(--color-primary)]/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
