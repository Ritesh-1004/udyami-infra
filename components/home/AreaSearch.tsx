"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
import { projects } from "@/data/projects";

export default function AreaSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return projects
      .filter(
        (p) =>
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [query]);

  return (
    <div className="relative w-full max-w-2xl">
      <div className="glass rounded-xl flex items-center px-5 py-1 ring-1 ring-white/20 focus-within:ring-[var(--color-secondary)]/60 transition-all duration-300">
        <HiOutlineSearch className="text-[var(--color-secondary)] text-xl shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search by area, project, or property type..."
          className="w-full bg-transparent text-white placeholder:text-white/45 px-4 py-4 outline-none text-sm md:text-base"
        />
        {query && (
          <span className="text-[10px] text-white/50 whitespace-nowrap pr-2 uppercase tracking-wider">
            {results.length} found
          </span>
        )}
      </div>

      <AnimatePresence>
        {focused && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-20 max-h-[380px] overflow-y-auto border border-black/5"
          >
            {results.length > 0 ? (
              <>
                {results.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-ivory)] transition-colors border-b border-black/5 last:border-0 group"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[var(--color-primary)] truncate group-hover:text-[var(--color-secondary)] transition-colors">{p.name}</p>
                      <p className="flex items-center gap-1 text-xs text-stone mt-0.5">
                        <HiOutlineLocationMarker className="text-[var(--color-secondary)] shrink-0" />
                        {p.location}, {p.city}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-[var(--color-primary)]">{p.priceLabel}</p>
                      <span className="text-[10px] text-stone">{p.type}</span>
                    </div>
                  </Link>
                ))}
                <Link
                  href={`/projects?search=${encodeURIComponent(query)}`}
                  className="block text-center text-sm font-semibold text-[var(--color-dark)] bg-[var(--color-secondary)] py-3 hover:bg-[var(--color-secondary-light)] transition-colors"
                >
                  View All Results for &ldquo;{query}&rdquo;
                </Link>
              </>
            ) : (
              <div className="px-4 py-6 text-center text-sm text-stone">
                No projects found near &ldquo;{query}&rdquo;.{" "}
                <Link href="/projects" className="text-[var(--color-primary)] font-semibold underline">
                  Browse all projects
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
