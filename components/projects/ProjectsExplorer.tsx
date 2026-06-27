"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch, HiOutlineAdjustments } from "react-icons/hi";
import { projects } from "@/data/projects";
import PropertyCard from "@/components/ui/PropertyCard";
import { PropertyType, ProjectStatus } from "@/types";

const cities = Array.from(new Set(projects.map((p) => p.city)));
const types: PropertyType[] = ["Plot", "Flat", "Villa", "Commercial"];
const statuses: ProjectStatus[] = ["Ready to Move", "Under Construction", "New Launch", "Sold Out"];

export default function ProjectsExplorer({
  initialType,
  initialSearch,
}: {
  initialType?: string;
  initialSearch?: string;
}) {
  const [search, setSearch] = useState(initialSearch || "");
  const [city, setCity] = useState("All");
  const [type, setType] = useState<string>(initialType || "All");
  const [status, setStatus] = useState("All");
  const [budget, setBudget] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q);
      const matchCity = city === "All" || p.city === city;
      const matchType = type === "All" || p.type === type;
      const matchStatus = status === "All" || p.status === status;
      const matchBudget = p.priceValue <= budget;
      return matchSearch && matchCity && matchType && matchStatus && matchBudget;
    });
  }, [search, city, type, status, budget]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-4">
        <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone text-lg" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by project name, location, or city..."
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-black/10 bg-white shadow-sm focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15 outline-none text-sm transition-all"
        />
        <button
          onClick={() => setShowFilters((v) => !v)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${showFilters ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-ivory)] text-[var(--color-primary)]"}`}
        >
          <HiOutlineAdjustments /> Filters
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white rounded-xl shadow-sm border border-black/8 p-6 mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="text-xs font-semibold text-stone uppercase tracking-wider block mb-2">City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full text-sm border border-black/10 rounded-lg px-3 py-2.5 focus:border-[var(--color-secondary)] outline-none">
                <option value="All">All Cities</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone uppercase tracking-wider block mb-2">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full text-sm border border-black/10 rounded-lg px-3 py-2.5 focus:border-[var(--color-secondary)] outline-none">
                <option value="All">All Types</option>
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone uppercase tracking-wider block mb-2">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full text-sm border border-black/10 rounded-lg px-3 py-2.5 focus:border-[var(--color-secondary)] outline-none">
                <option value="All">All Status</option>
                {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-stone uppercase tracking-wider block mb-3">Max Budget: <span className="text-[var(--color-primary)]">₹{budget} Lakh</span></label>
            <input
              type="range"
              min={10}
              max={100}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-[var(--color-secondary)] h-2"
            />
          </div>
        </motion.div>
      )}

      <p className="text-sm text-stone mb-7 font-medium">
        Showing <span className="text-[var(--color-primary)] font-semibold">{filtered.length}</span> {filtered.length === 1 ? "property" : "properties"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p, i) => <PropertyCard key={p.slug} project={p} index={i} />)}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 text-stone">
          <div className="text-5xl mb-4">🏗️</div>
          <p className="font-display text-xl text-[var(--color-primary)] mb-2">No properties found</p>
          <p className="text-sm">Try widening your budget or clearing a filter.</p>
        </motion.div>
      )}
    </div>
  );
}
