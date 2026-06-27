"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiPhone, HiOutlineGlobeAlt } from "react-icons/hi";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-[var(--color-dark)]/96 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative w-11 h-11 shrink-0">
            <Image
              src="/images/misc/logo-emblem.png"
              alt="Udyami Infra Foundation logo"
              fill
              className="object-contain transition-transform group-hover:scale-110 duration-300"
            />
          </span>
          <span className="text-white leading-tight">
            <span className="block font-display text-[1.1rem] tracking-wide">Udyami Infra</span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-[var(--color-secondary)] font-medium">
              Foundation
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-all duration-300 relative pb-1 group",
                pathname === link.href
                  ? "text-[var(--color-secondary)]"
                  : "text-white/80 hover:text-white"
              )}
            >
              {t(link.label)}
              <span
                className={cn(
                  "absolute left-0 -bottom-0.5 h-[2px] bg-[var(--color-secondary)] transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/15 group-hover:bg-[var(--color-secondary)]/25 flex items-center justify-center transition-colors">
              <HiPhone className="text-[var(--color-secondary)] text-sm" />
            </span>
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="btn-primary !py-2.5 !px-6 text-sm"
          >
            {t("Enquire Now")}
          </Link>
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold border border-white/20 rounded-full px-3 py-2 transition-colors hover:border-[var(--color-secondary)]"
          >
            <HiOutlineGlobeAlt className="text-[var(--color-secondary)]" />
            {lang === "en" ? "हिंदी" : "EN"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white text-2xl p-1 rounded-md hover:bg-white/10 transition-colors"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[var(--color-dark)] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium block py-1 border-b border-white/5",
                      pathname === link.href
                        ? "text-[var(--color-secondary)]"
                        : "text-white/85 hover:text-[var(--color-secondary)] transition-colors"
                    )}
                  >
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={toggle}
                className="flex items-center gap-2 text-white/80 text-sm border border-white/15 rounded-full px-4 py-2 w-fit"
              >
                <HiOutlineGlobeAlt className="text-[var(--color-secondary)]" />
                {lang === "en" ? "हिंदी में देखें" : "View in English"}
              </button>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/80 text-sm mt-2"
              >
                <HiPhone className="text-[var(--color-secondary)]" />
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-primary justify-center mt-2">
                {t("Enquire Now")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
