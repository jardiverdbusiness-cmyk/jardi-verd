import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-forest-900 text-cream-50">
      <div className="container-page py-16 sm:py-20">
        <span className="inline-flex items-center rounded-pill bg-forest-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/80">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
