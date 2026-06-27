"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlineZoomIn } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";

// Admin: Replace these image paths to update the gallery.
// Simply swap out the src values with your new image paths (placed in /public/images/projects/).
// Keep the captions and categories updated accordingly.
const galleryImages = [
  { src: "/images/projects/project-1-1.jpg", caption: "Udyami Green Valley – Site Progress", category: "Running" },
  { src: "/images/projects/project-3.jpg", caption: "Landmark Heights – Foundation Work", category: "Running" },
  { src: "/images/projects/project-4-1.jpg", caption: "Udyami Residency – Layout Phase", category: "Running" },
  { src: "/images/projects/project-6.jpg", caption: "Sunshine Township – Road Development", category: "Running" },
  { src: "/images/projects/project-2.jpg", caption: "Vedant Park – Possession Ready Units", category: "Running" },
];

export default function RunningSites() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="section-pad bg-[var(--color-dark)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="On the Ground"
          title="Running Projects Gallery"
          description="Real progress across our active developments — updated as our teams break ground, lay roads, and hand over keys."
          light
        />

        {/* 4-5 image responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-1 md:col-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiOutlineZoomIn className="text-white text-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={galleryImages[lightbox].src}
                  alt={galleryImages[lightbox].caption}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-white/80 text-center mt-4 text-sm">{galleryImages[lightbox].caption}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              >
                <HiOutlineX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
