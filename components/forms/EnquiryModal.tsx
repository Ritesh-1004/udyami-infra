"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import LeadForm from "@/components/forms/LeadForm";

export default function EnquiryModal({
  open,
  onClose,
  projectName,
}: {
  open: boolean;
  onClose: () => void;
  projectName: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[var(--color-dark)]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl p-7 max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Gold top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-t-2xl" />

            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-stone transition-colors"
            >
              <HiX />
            </button>

            <h3 className="font-display text-2xl text-[var(--color-primary)] mb-1 mt-2">Enquire Now</h3>
            <p className="text-sm text-stone mb-6">
              Interested in{" "}
              <span className="font-semibold text-[var(--color-primary)]">{projectName}</span>?
              Our team will call you within 24 hours.
            </p>
            <LeadForm propertyInterest={projectName} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
