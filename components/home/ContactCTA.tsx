"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlinePhone } from "react-icons/hi";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export default function ContactCTA() {
  const { t } = useLanguage();
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-primary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.12),transparent_55%)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-secondary)]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-[var(--color-secondary)]" />
          <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-medium">{t("Ready When You Are")}</span>
          <div className="h-[1px] w-8 bg-[var(--color-secondary)]" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">
          {t("Your Landmark Investment Starts With")}{" "}
          <span className="text-[var(--color-secondary)]">{t("One Conversation.")}</span>
        </h2>
        <p className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed mb-10">
          {t("Speak directly with our team — get site visit dates, pricing, and documentation clarity within 24 hours.")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-primary group text-base px-8 py-4">
            {t("Talk to Us")} <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="btn-outline flex items-center justify-center gap-2 text-base px-8 py-4"
          >
            <HiOutlinePhone /> {siteConfig.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
