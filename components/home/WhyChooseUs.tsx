"use client";

import { motion } from "framer-motion";
import { HiOutlineDocumentCheck, HiOutlineShieldCheck, HiOutlineMapPin, HiOutlineUserGroup } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: HiOutlineDocumentCheck,
    title: "Clear Title Guarantee",
    desc: "Every plot ships with verified 7/12 extracts, NA orders, and registered documentation — no hidden disputes.",
    accent: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: HiOutlineMapPin,
    title: "Strategic Locations",
    desc: "Projects placed along Pune's fastest-growing corridors, near highways, schools, and IT hubs.",
    accent: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/15 text-blue-400",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Transparent Pricing",
    desc: "What you see is what you pay. No surprise charges at registration, no inflated development fees.",
    accent: "from-[var(--color-secondary)]/20 to-[var(--color-secondary)]/5",
    iconBg: "bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Founder-Led Trust",
    desc: "Umesh Daphal personally oversees site development, ensuring every promise made at booking is kept.",
    accent: "from-purple-500/20 to-purple-600/5",
    iconBg: "bg-purple-500/15 text-purple-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Udyami Infra"
          title="A Foundation Built on Trust, Not Just Concrete"
          description="In a market full of unclear titles and broken promises, we chose a harder path: documentation-first development, delivered on time."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 bg-[var(--color-ivory)] hover:bg-[var(--color-primary)] rounded-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative w-12 h-12 rounded-xl ${item.iconBg} group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors duration-300`}>
                <item.icon className="text-xl" />
              </div>

              <h3 className="relative font-display text-lg text-[var(--color-primary)] group-hover:text-white transition-colors mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-stone group-hover:text-white/70 transition-colors">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-secondary)] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
