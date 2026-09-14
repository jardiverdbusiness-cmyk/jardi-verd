import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/services-data";
import type { Locale } from "@/i18n/routing";
import { ServiceCard } from "./ServiceCard";
import { ChevronRightIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = useTranslations("ServicesSection");
  const featured = services.slice(0, 6);

  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest-800/70">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 100}>
              <ServiceCard service={service} locale={locale} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-pill border border-forest-900/15 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-700 hover:text-forest-900"
          >
            {t("viewAll")}
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
