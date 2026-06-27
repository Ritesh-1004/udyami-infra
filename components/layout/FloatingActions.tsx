"use client";

import { useEffect, useState } from "react";
import { HiPhone, HiArrowUp } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = siteConfig.phone.replace(/\s/g, "");
  const waLink = `https://wa.me/${phone.replace("+", "")}?text=Hi%2C%20I%27m%20interested%20in%20Udyami%20Infra%20Foundation%20properties.`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1 }}
        className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${phone}`}
        aria-label="Call us"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1.1 }}
        className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.55)] hover:scale-110 transition-all duration-300"
      >
        <HiPhone className="text-[var(--color-dark)] text-xl" />
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-primary-light)] hover:scale-110 transition-all duration-300"
          >
            <HiArrowUp className="text-white text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
