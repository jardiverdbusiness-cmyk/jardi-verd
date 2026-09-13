import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { businessInfo } from "@/lib/areas-data";
import { WhatsappIcon } from "./icons";

export function CtaBand() {
  const t = useTranslations("CtaBand");
  const tWa = useTranslations("WhatsappButton");
  const whatsappHref = `${businessInfo.whatsappHref}?text=${encodeURIComponent(
    tWa("defaultMessage")
  )}`;

  return (
    <section className="bg-gold-500">
      <div className="container-page flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest-950/80 sm:text-base">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-pill bg-forest-950 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-card transition-colors hover:bg-forest-900"
          >
            {t("ctaPrimary")}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-pill border border-forest-950/30 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:border-forest-950"
          >
            <WhatsappIcon className="h-4 w-4" />
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
