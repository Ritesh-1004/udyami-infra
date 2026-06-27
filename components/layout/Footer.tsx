"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { navLinks, siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#060e1a] text-white/75 pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Gold top line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="relative w-10 h-10 shrink-0">
                <Image src="/images/misc/logo-emblem.png" alt="Udyami Infra Foundation" fill className="object-contain" />
              </span>
              <span className="text-white font-display text-lg leading-tight">
                Udyami Infra
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[var(--color-secondary)]">Foundation</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6">{siteConfig.description}</p>
            <div className="flex gap-3">
              {[
                [FaFacebookF, siteConfig.social.facebook, "Facebook"],
                [FaInstagram, siteConfig.social.instagram, "Instagram"],
                [FaYoutube, siteConfig.social.youtube, "YouTube"],
                [FaLinkedinIn, siteConfig.social.linkedin, "LinkedIn"],
              ].map(([Icon, href, label], i) => (
                <a
                  key={i}
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label as string}
                  className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-all duration-300 text-white/60"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.25em] font-semibold mb-5 text-[var(--color-secondary)]">{t("Navigate")}</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[var(--color-secondary)] hover:translate-x-1 inline-flex transition-all duration-200 text-white/55">
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.25em] font-semibold mb-5 text-[var(--color-secondary)]">{t("Properties")}</h4>
            <ul className="space-y-3 text-sm text-white/55">
              {[
                ["Residential Plots", "/projects?type=Plot"],
                ["Premium Flats", "/projects?type=Flat"],
                ["Luxury Villas", "/projects?type=Villa"],
                ["Commercial Spaces", "/projects?type=Commercial"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[var(--color-secondary)] hover:translate-x-1 inline-flex transition-all duration-200">{t(label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.25em] font-semibold mb-5 text-[var(--color-secondary)]">{t("Contact")}</h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 text-[var(--color-secondary)] shrink-0 text-base" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-[var(--color-secondary)] shrink-0 text-base" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-[var(--color-secondary)] transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-[var(--color-secondary)] shrink-0 text-base" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-secondary)] transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <p>© {year} Udyami Infra Foundation · Founded by {siteConfig.founder} · All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-[var(--color-secondary)] transition-colors">{t("Privacy Policy")}</Link>
            <Link href="/contact" className="hover:text-[var(--color-secondary)] transition-colors">{t("Terms of Service")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
