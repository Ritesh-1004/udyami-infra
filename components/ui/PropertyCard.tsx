"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { BiArea } from "react-icons/bi";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import EnquiryModal from "@/components/forms/EnquiryModal";

const statusColors: Record<string, string> = {
  "Ready to Move": "bg-emerald-500/90",
  "Under Construction": "bg-amber-500/90",
  "New Launch": "bg-blue-500/90",
  "Sold Out": "bg-stone-500/90",
};

export default function PropertyCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
        className="group relative bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(10,35,66,0.18)] hover:shadow-[0_24px_50px_-16px_rgba(10,35,66,0.32)] transition-all duration-500 hover:-translate-y-1"
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/85 via-[var(--color-dark)]/20 to-transparent" />

            {/* Badges */}
            <span className={cn("absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm", statusColors[project.status])}>
              {project.status}
            </span>
            <span className="absolute top-4 right-4 bg-[var(--color-secondary)] text-[var(--color-dark)] text-xs font-bold px-3 py-1 rounded-full">
              {project.type}
            </span>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-display text-xl leading-tight">{project.name}</p>
              <p className="flex items-center gap-1 text-sm text-white/75 mt-1">
                <HiOutlineLocationMarker className="text-[var(--color-secondary)] shrink-0" />
                {project.location}, {project.city}
              </p>
            </div>
          </div>
        </Link>

        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[var(--color-primary)] font-bold text-lg">{project.priceLabel}</p>
              <p className="flex items-center gap-1 text-xs text-stone mt-1">
                <BiArea /> {project.areaLabel}
              </p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`View details for ${project.name}`}
              className="w-10 h-10 rounded-full border border-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] group-hover:text-[var(--color-dark)] transition-all duration-300"
            >
              <HiOutlineArrowRight />
            </Link>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 text-center text-sm font-semibold border border-[var(--color-primary)]/15 text-[var(--color-primary)] py-2.5 rounded-lg hover:border-[var(--color-primary)] hover:bg-[var(--color-ivory)] transition-all duration-200"
            >
              View Details
            </Link>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="flex-1 text-center text-sm font-semibold bg-[var(--color-secondary)] text-[var(--color-dark)] py-2.5 rounded-lg hover:bg-[var(--color-secondary-light)] transition-colors duration-200"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </motion.div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} projectName={project.name} />
    </>
  );
}
