"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";

export default function LeadForm({ propertyInterest }: { propertyInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    propertyInterest: propertyInterest || "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", mobile: "", email: "", propertyInterest: propertyInterest || "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <HiOutlineCheckCircle className="text-5xl text-emerald-500 mx-auto mb-4" />
        <h4 className="font-display text-xl text-[var(--color-primary)] mb-2">Enquiry Received!</h4>
        <p className="text-sm text-stone">
          Thank you, {form.name || "valued client"}. Our team will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--color-primary)]/70 mb-1.5 uppercase tracking-wide">Full Name *</label>
          <input
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 text-sm border border-black/10 rounded-lg focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--color-primary)]/70 mb-1.5 uppercase tracking-wide">Mobile Number *</label>
          <input
            required
            type="tel"
            pattern="[0-9+\s-]{8,15}"
            placeholder="10-digit mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="w-full px-4 py-3 text-sm border border-black/10 rounded-lg focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-primary)]/70 mb-1.5 uppercase tracking-wide">Email Address *</label>
        <input
          required
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 text-sm border border-black/10 rounded-lg focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-primary)]/70 mb-1.5 uppercase tracking-wide">Project Interest</label>
        <input
          placeholder="e.g. 2BHK Flat, Plot in Wagholi"
          value={form.propertyInterest}
          onChange={(e) => setForm({ ...form, propertyInterest: e.target.value })}
          className="w-full px-4 py-3 text-sm border border-black/10 rounded-lg focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-primary)]/70 mb-1.5 uppercase tracking-wide">Message *</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us what you're looking for..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 text-sm border border-black/10 rounded-lg focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none resize-none transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending Enquiry...
          </span>
        ) : "Send Enquiry"}
      </button>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
        >
          <HiOutlineExclamationCircle className="shrink-0" />
          Something went wrong. Please call us directly or try again.
        </motion.div>
      )}
    </form>
  );
}
