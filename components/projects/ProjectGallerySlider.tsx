"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProjectGallerySlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  function go(n: number) {
    setDir(n);
    setCurrent((c) => (c + n + images.length) % images.length);
  }

  if (!images.length) return null;

  return (
    <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <AnimatePresence custom={dir} mode="wait">
        <motion.div
          key={current}
          custom={dir}
          initial={{ opacity: 0, x: dir * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -60 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image src={images[current]} alt={`Gallery ${current + 1}`} fill className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={() => go(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
            <HiChevronLeft />
          </button>
          <button onClick={() => go(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
            <HiChevronRight />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${i === current ? "w-5 h-1.5 bg-[var(--color-secondary)]" : "w-1.5 h-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
