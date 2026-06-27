"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import PropertyCard from "@/components/ui/PropertyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useLanguage } from "@/lib/i18n";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const readyToMove = projects.filter((p) => p.status === "Ready to Move").slice(0, 6);

  return (
    <section className="section-pad bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Full-width heading */}
        <div className="mb-12 max-w-3xl">
          <SectionHeading
            eyebrow="Ready to Move"
            title="Landmarks Ready to Move In"
            description="A curated selection of our completed, possession-ready plots and residences across Pune's high-growth corridors."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {readyToMove.map((p, i) => (
            <PropertyCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 btn-primary"
          >
            {t("View All Projects")} <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
