"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineShieldCheck, HiOutlineStar } from "react-icons/hi";
import AreaSearch from "@/components/home/AreaSearch";
import { useLanguage } from "@/lib/i18n";

const trustBadges = [
  { icon: HiOutlineShieldCheck, text: "Clear Title Guaranteed" },
  { icon: HiOutlineStar, text: "10+ Years Trusted" },
];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center bg-[var(--color-dark)]">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      {/* Gold radial glow left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_50%,rgba(212,175,55,0.18),transparent_60%)]" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--color-secondary)]/40"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-[var(--color-secondary)]" />
              <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-medium">
                {t("Est. by Umesh Daphal · Pune, Maharashtra")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-white text-5xl sm:text-6xl lg:text-[5rem] leading-[1.02]"
            >
              {t("Building Trust.")}
              <br />
              <span className="text-[var(--color-secondary)] relative">
                {t("Creating Landmarks.")}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[var(--color-secondary)] to-transparent origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-lg text-white/75 text-lg leading-relaxed"
            >
              {t("Premium plots, flats & investment opportunities across Pune — backed by clear titles, transparent documentation, and two decades of disciplined development.")}
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <badge.icon className="text-[var(--color-secondary)] text-sm" />
                  <span className="text-white/90 text-xs font-medium">{t(badge.text)}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[var(--color-secondary)]/20 backdrop-blur-sm border border-[var(--color-secondary)]/40 rounded-full px-4 py-2">
                <span className="text-[var(--color-secondary)] text-xs font-bold">{t("3200+ Families")}</span>
                <span className="text-white/70 text-xs">{t("served across Pune")}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-8"
            >
              <AreaSearch />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <Link href="/projects" className="btn-primary group">
                {t("Explore Projects")}
                <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-outline">
                {t("Book Site Visit")}
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Building/city image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-full min-h-[600px]"
          >
            {/* Decorative gold ring */}
            <div className="absolute inset-4 rounded-3xl border border-[var(--color-secondary)]/20" />
            <div className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/misc/hero-poster.jpg"
                alt="Udyami Infra Foundation landmark development"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--color-dark)]/20" />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 bg-[var(--color-secondary)] rounded-xl px-5 py-3 shadow-xl">
                <p className="font-display text-2xl text-[var(--color-dark)]">10+</p>
                <p className="text-[var(--color-dark)]/70 text-xs font-medium">{t("10+ Years Trusted")}</p>
              </div>
              {/* Top right badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <p className="text-[var(--color-primary)] text-xs font-bold">24+ Projects</p>
                <p className="text-stone text-[10px]">Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em]">{t("Scroll")}</span>
        <motion.span
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-secondary)] to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
