import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/areas-data";
import { LeafIcon, MapPinIcon, PhoneIcon } from "./icons";
import type { Locale } from "@/i18n/routing";

export function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-cream-100/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-forest-800">
              <LeafIcon className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold text-cream-50">
              Jardí Verd
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            {t("columnServices")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={{ pathname: "/services/[slug]", params: { slug: service.slug[locale] } }}
                  className="transition-colors hover:text-gold-400"
                >
                  {service.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            {t("columnCompany")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="transition-colors hover:text-gold-400">
                {tNav("about")}
              </Link>
            </li>
            <li>
              <Link href="/areas" className="transition-colors hover:text-gold-400">
                {t("areasServed")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition-colors hover:text-gold-400">
                {tNav("projects")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold-400">
                {tNav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            {t("columnContact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={businessInfo.phoneHref} className="transition-colors hover:text-gold-400">
                {businessInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>Tarragona · Reus</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Jardí Verd. {t("rightsReserved")}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-gold-400">
              {t("privacyPolicy")}
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-gold-400">
              {t("cookies")}
            </Link>
            <Link href="/legal-notice" className="transition-colors hover:text-gold-400">
              {t("legalNotice")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
