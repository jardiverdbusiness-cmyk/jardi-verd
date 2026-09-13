import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ServiceContent } from "@/lib/services-data";
import type { Locale } from "@/i18n/routing";
import { serviceIconMap } from "./icons";
import { ChevronRightIcon } from "./icons";

export function ServiceCard({
  service,
  locale,
}: {
  service: ServiceContent;
  locale: Locale;
}) {
  const t = useTranslations("ServicesSection");
  const Icon = serviceIconMap[service.icon];

  return (
    <Link
      href={{ pathname: "/services/[slug]", params: { slug: service.slug[locale] } }}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-forest-900/8 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      {service.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/95 text-forest-700 shadow-soft">
            <Icon className="h-5 w-5" />
          </span>
        </div>
      ) : (
        <span className="mx-6 mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50">
          <Icon className="h-6 w-6" />
        </span>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-forest-900">
          {service.title[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/70">
          {service.shortDescription[locale]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-700 group-hover:text-gold-600">
          {t("learnMore")}
          <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
