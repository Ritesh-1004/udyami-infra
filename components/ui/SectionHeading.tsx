"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className,
  center = false,
}: SectionHeadingProps) {
  const { t } = useLanguage();
  return (
    <div className={cn("mb-12", center ? "text-center" : "", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4", center ? "justify-center" : "")}>
          <div className={cn("h-[1px] w-6", light ? "bg-[var(--color-secondary)]" : "bg-[var(--color-secondary)]")} />
          <span className="text-[var(--color-secondary)] text-xs uppercase tracking-[0.3em] font-semibold">
            {t(eyebrow)}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl leading-tight",
          light ? "text-white" : "text-[var(--color-primary)]"
        )}
      >
        {t(title)}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            light ? "text-white/60" : "text-stone",
            center ? "mx-auto" : ""
          )}
        >
          {t(description)}
        </p>
      )}
    </div>
  );
}
