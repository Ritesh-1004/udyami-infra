import type { Metadata } from "next";
import GalleryGrid from "@/components/home/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our project gallery — real site progress photos from Udyami Infra Foundation developments across Pune.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-8 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
          <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Our Work</span>
          <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
        </div>
        <h1 className="font-display text-white text-4xl md:text-5xl">Project Gallery</h1>
        <p className="text-white/55 mt-3">Real progress from our active development sites across Pune.</p>
      </div>
      <GalleryGrid />
    </div>
  );
}
