import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { areas } from "@/lib/areas-data";
import { MapPinIcon, ChevronRightIcon } from "./icons";

export function AreasSection() {
  const t = useTranslations("AreasSection");

  return (
    <section className="bg-forest-900 py-20 text-cream-50 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-400">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-100/75">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area.id}
              className="flex items-center gap-2 rounded-pill border border-cream-50/15 bg-forest-800/60 px-4 py-2 text-sm font-medium text-cream-100"
            >
              <MapPinIcon className="h-4 w-4 text-gold-400" />
              {area.name}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/areas"
            className="inline-flex items-center gap-1.5 rounded-pill bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-cream-100"
          >
            {t("viewAll")}
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
