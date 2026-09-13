import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { businessInfo } from "@/lib/areas-data";
import { PhoneIcon } from "./icons";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-forest-700/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-pill bg-forest-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
            {t("eyebrow")}
          </span>
          <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-100/85 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-pill bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 shadow-card transition-colors hover:bg-gold-400"
            >
              {t("ctaPrimary")}
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="flex items-center gap-2 rounded-pill border border-cream-50/30 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50"
            >
              <PhoneIcon className="h-4 w-4" />
              {t("ctaSecondary")}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream-50/10 pt-8">
            {(["stat1", "stat2", "stat3"] as const).map((key) => (
              <div key={key}>
                <dt className="sr-only">{t(`${key}Label`)}</dt>
                <dd className="font-display text-2xl font-semibold text-gold-400 sm:text-3xl">
                  {t(`${key}Value`)}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-cream-100/70">
                  {t(`${key}Label`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl2 shadow-card lg:max-w-none">
          <Image
            src="/images/work/poda-cypress-removal-2.jpg"
            alt="Equip de Jardí Verd treballant en una tala controlada"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-xl2 border border-cream-50/10" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/70 to-transparent p-5">
            <p className="text-sm font-medium text-cream-50">Jardí Verd</p>
          </div>
        </div>
      </div>
    </section>
  );
}
