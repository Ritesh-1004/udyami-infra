import type { Metadata } from "next";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse all plots, flats, villas and commercial spaces by Udyami Infra Foundation across Pune.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; search?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="bg-[var(--color-ivory)] min-h-screen">
      {/* Page Hero */}
      <div className="bg-[var(--color-primary)] pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">Our Portfolio</span>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl">All Projects</h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Explore our complete portfolio of residential and commercial properties across Pune and PCMC.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <ProjectsExplorer
          initialType={params.type}
          initialSearch={params.search}
        />
      </div>
    </div>
  );
}
