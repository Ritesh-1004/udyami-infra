import type { Metadata } from "next";
import Image from "next/image";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import LeadForm from "@/components/forms/LeadForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Udyami Infra Foundation. Enquire about plots, flats, and investment opportunities in Pune.",
};

const contactInfo = [
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Office Address",
    value: siteConfig.address,
    href: null,
  },
  {
    icon: HiOutlineClock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-ivory)] min-h-screen">
      {/* Hero */}
      <div className="bg-[var(--color-primary)] pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(212,175,55,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Get In Touch</span>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Have a question about a project? Want to schedule a site visit? We're here to help.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Founder Card + Contact Info */}
          <div className="space-y-8">

            {/* Founder Profile - Clean circular style */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_-12px_rgba(10,35,66,0.15)] border border-black/5 text-center">
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/images/misc/founder.jpg"
                      alt={siteConfig.founder}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Shadow ring */}
                <div className="absolute inset-[-4px] rounded-full shadow-[0_0_0_1px_rgba(212,175,55,0.3),0_8px_25px_rgba(212,175,55,0.2)]" />
              </div>

              <h3 className="font-display text-2xl text-[var(--color-primary)]">{siteConfig.founder}</h3>
              <p className="text-[var(--color-secondary)] text-sm font-semibold tracking-wide mt-1">
                Founder &amp; President
              </p>
              <p className="text-stone text-sm mt-0.5">UDYAMI INFRA FOUNDATION</p>
              <p className="text-stone text-xs mt-0.5 uppercase tracking-widest">Builder &amp; Developers</p>

              <div className="mt-5 pt-5 border-t border-black/5">
                <p className="text-sm text-stone leading-relaxed">
                  "Every project we build is a promise to a family — of quality, documentation, and a home delivered on time."
                </p>
              </div>

              {/* Social */}
              <div className="flex justify-center gap-3 mt-5">
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
                    className="w-9 h-9 rounded-full border border-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]/60 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-all duration-300"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-white rounded-xl p-5 shadow-[0_4px_20px_-8px_rgba(10,35,66,0.12)] border border-black/5 group hover:border-[var(--color-secondary)]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                    <info.icon className="text-[var(--color-secondary)] text-lg" />
                  </div>
                  <p className="text-xs font-semibold text-stone uppercase tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] transition-colors leading-relaxed">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-primary)] font-medium leading-relaxed">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Location Info Card (replacing Google Maps) */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineLocationMarker className="text-[var(--color-secondary)] text-xl shrink-0" />
                <h4 className="font-display text-lg">Find Our Office</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{siteConfig.address}</p>
              <div className="space-y-2 text-sm text-white/60">
                <p>📍 <span className="text-white/80">Pune, Maharashtra, India</span></p>
                <p>🕐 <span className="text-white/80">Open Mon–Sat, 9 AM to 7 PM</span></p>
                <p>📞 <span className="text-white/80">{siteConfig.phone}</span></p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[var(--color-secondary)] text-sm font-semibold hover:gap-3 transition-all"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_-12px_rgba(10,35,66,0.15)] border border-black/5">
            <div className="h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-full mb-7" />
            <h2 className="font-display text-2xl text-[var(--color-primary)] mb-1">Send Us an Enquiry</h2>
            <p className="text-stone text-sm mb-7">Fill in the form below and we'll get back to you within 24 hours.</p>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
