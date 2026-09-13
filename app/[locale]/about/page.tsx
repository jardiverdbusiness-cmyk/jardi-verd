import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { businessInfo } from "@/lib/areas-data";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { LeafIcon, ShieldIcon, TreeIcon, CheckIcon, PhoneIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.about" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const values = [
    { icon: LeafIcon, title: t("value1Title"), text: t("value1Text") },
    { icon: CheckIcon, title: t("value2Title"), text: t("value2Text") },
    { icon: TreeIcon, title: t("value3Title"), text: t("value3Text") },
    { icon: ShieldIcon, title: t("value4Title"), text: t("value4Text") },
  ];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("intro")} />

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-forest-900">
            {t("valuesTitle")}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl2 border border-forest-900/8 bg-white p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-forest-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-800/70">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-xl2 bg-forest-900 p-10 text-center text-cream-50">
            <h2 className="font-display text-xl font-semibold">{t("ctaTitle")}</h2>
            <p className="max-w-md text-sm leading-relaxed text-cream-100/80">
              {t("ctaText")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-2 rounded-pill bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-400"
              >
                <PhoneIcon className="h-4 w-4" />
                {businessInfo.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-pill border border-cream-50/30 px-6 py-3 text-sm font-semibold text-cream-50 hover:border-cream-50"
              >
                {t("ctaText")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
