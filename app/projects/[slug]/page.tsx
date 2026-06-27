import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { HiOutlineLocationMarker, HiOutlineArrowLeft } from "react-icons/hi";
import { BiArea } from "react-icons/bi";
import LeadForm from "@/components/forms/LeadForm";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description.slice(0, 160) };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <Image src={project.image} alt={project.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/90 via-[var(--color-dark)]/40 to-transparent" />
        <div className="absolute bottom-8 left-6 lg:left-16 text-white">
          <Link href="/projects" className="flex items-center gap-2 text-white/70 text-sm mb-4 hover:text-[var(--color-secondary)] transition-colors">
            <HiOutlineArrowLeft /> Back to Projects
          </Link>
          <span className="bg-[var(--color-secondary)] text-[var(--color-dark)] text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
            {project.status}
          </span>
          <h1 className="font-display text-4xl md:text-5xl">{project.name}</h1>
          <p className="flex items-center gap-2 text-white/75 mt-2">
            <HiOutlineLocationMarker className="text-[var(--color-secondary)]" />
            {project.location}, {project.city}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Price", value: project.priceLabel },
              { label: "Area", value: project.areaLabel },
              { label: "Possession", value: project.possession },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-black/5">
                <p className="text-stone text-xs uppercase tracking-wide mb-1">{s.label}</p>
                <p className="font-display text-lg text-[var(--color-primary)]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-7 shadow-sm border border-black/5">
            <h2 className="font-display text-2xl text-[var(--color-primary)] mb-4">About This Project</h2>
            <p className="text-stone leading-relaxed">{project.description}</p>
          </div>

          {/* Amenities */}
          {project.amenities.length > 0 && (
            <div className="bg-white rounded-xl p-7 shadow-sm border border-black/5">
              <h2 className="font-display text-2xl text-[var(--color-primary)] mb-5">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-[var(--color-primary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby */}
          {project.nearby.length > 0 && (
            <div className="bg-white rounded-xl p-7 shadow-sm border border-black/5">
              <h2 className="font-display text-2xl text-[var(--color-primary)] mb-5">Nearby Places</h2>
              <div className="grid grid-cols-2 gap-3">
                {project.nearby.map((n) => (
                  <div key={n.name} className="flex items-center justify-between text-sm border-b border-black/5 pb-2">
                    <span className="text-[var(--color-primary)] font-medium">{n.name}</span>
                    <span className="text-stone text-xs">{n.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Card - No Google Maps */}
          <div className="bg-[var(--color-primary)] rounded-xl p-7 text-white">
            <h2 className="font-display text-2xl mb-4">Location</h2>
            <div className="flex items-start gap-3 mb-4">
              <HiOutlineLocationMarker className="text-[var(--color-secondary)] text-xl shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{project.name}</p>
                <p className="text-white/70 text-sm mt-1">{project.location}, {project.city}, Maharashtra</p>
              </div>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(project.location + " " + project.city + " Maharashtra")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-secondary)] text-sm font-semibold hover:gap-3 transition-all mt-2"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Sidebar Enquiry Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl p-7 shadow-[0_8px_40px_-12px_rgba(10,35,66,0.18)] border border-black/5">
            <div className="h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-full mb-6" />
            <h3 className="font-display text-xl text-[var(--color-primary)] mb-1">Enquire About This Project</h3>
            <p className="text-stone text-sm mb-5">Our team will call you within 24 hours.</p>
            <LeadForm propertyInterest={project.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
