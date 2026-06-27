import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Udyami Infra Foundation — founded by Umesh Daphal, with 10+ years of trusted real estate development in Pune.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[var(--color-primary)] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Our Story</span>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl max-w-2xl leading-tight">
            Building Maharashtra, One Landmark at a Time
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
              <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Our Foundation</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mb-6 leading-tight">
              Trusted Real Estate Since 2006
            </h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                Udyami Infra Foundation was established by <strong className="text-[var(--color-primary)]">Umesh Daphal</strong> with a
                single mission: to make property ownership transparent, affordable, and trustworthy for the people of Maharashtra.
              </p>
              <p>
                Over 10 years, we have developed 180+ acres of land across Pune's fastest-growing corridors —
                from Wagholi and Hinjewadi to Talegaon and beyond. Every project comes with clear titles,
                NA orders, and registered documentation.
              </p>
              <p>
                With 3,200+ satisfied families and 24+ completed projects, we remain a founder-led company
                where every promise made at booking is kept at possession.
              </p>
            </div>
            <Link href="/projects" className="btn-primary mt-8 inline-flex">
              View Our Projects <HiOutlineArrowRight />
            </Link>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo showcase card */}
            <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/80 shadow-2xl flex flex-col items-center justify-center p-10 border border-[var(--color-secondary)]/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.25),transparent_70%)] rounded-2xl" />
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="/images/misc/logo-emblem.png"
                  alt="Udyami Infra Foundation Official Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                />
              </div>
              <h3 className="font-display text-white text-2xl text-center">Udyami Infra Foundation</h3>
              <p className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold mt-2 text-center">Est. 2006 · Pune, Maharashtra</p>
              <div className="mt-6 flex gap-6">
                <div className="text-center">
                  <p className="font-display text-3xl text-[var(--color-secondary)]">10+</p>
                  <p className="text-white/60 text-xs">Years</p>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <p className="font-display text-3xl text-[var(--color-secondary)]">3200+</p>
                  <p className="text-white/60 text-xs">Families</p>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <p className="font-display text-3xl text-[var(--color-secondary)]">24+</p>
                  <p className="text-white/60 text-xs">Projects</p>
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--color-secondary)] rounded-xl p-5 shadow-xl">
              <p className="font-display text-3xl text-[var(--color-dark)]">10+</p>
              <p className="text-[var(--color-dark)]/70 text-sm font-medium">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
          <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Meet The Founder</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mb-12 text-center">
          A Promise Kept by Its Founder
        </h2>
        <div className="max-w-3xl mx-auto bg-[var(--color-ivory)] border border-black/5 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden ring-4 ring-[var(--color-secondary)]/40 shadow-xl">
            <Image
              src="/images/misc/founder.jpg"
              alt="Umesh Daphal — Founder, Udyami Infra Foundation"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-[var(--color-primary)]">Umesh Daphal</h3>
            <p className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wide mt-1">Founder &amp; Managing Director</p>
            <p className="text-stone text-sm leading-relaxed mt-4">
              With over 10 years in Maharashtra&apos;s real estate sector, Umesh Daphal built Udyami Infra
              Foundation on a single principle — every promise made at booking is kept at possession.
              He personally oversees documentation, land-title verification, and customer relationships
              to ensure complete transparency on every project.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[var(--color-ivory)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Our Promise</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "Clear Titles", desc: "Every property comes with verified 7/12 extracts and NA orders. No disputes, ever." },
              { title: "On-Time Delivery", desc: "We have never delayed a possession date. Your schedule is our commitment." },
              { title: "Transparent Pricing", desc: "No hidden charges. What you see at booking is exactly what you pay at registration." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-7 shadow-sm border border-black/5">
                <h3 className="font-display text-xl text-[var(--color-primary)] mb-3">{v.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
