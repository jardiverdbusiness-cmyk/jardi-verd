import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { businessInfo } from "@/lib/areas-data";
import { PageHero } from "@/components/PageHero";
import { TreeIcon, DesignIcon, WateringCanIcon, WhatsappIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.projects" });
  return { title: t("title"), description: t("description") };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const tWa = await getTranslations({ locale, namespace: "WhatsappButton" });

  const categories = [
    { icon: TreeIcon, label: t("categoryPruning") },
    { icon: DesignIcon, label: t("categoryDesign") },
    { icon: WateringCanIcon, label: t("categoryMaintenance") },
  ];

  const whatsappHref = `${businessInfo.whatsappHref}?text=${encodeURIComponent(
    tWa("defaultMessage")
  )}`;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-3">
            {categories.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 rounded-xl2 border-2 border-dashed border-forest-900/15 bg-white p-10 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                  <Icon className="h-8 w-8" />
                </span>
                <p className="font-display text-lg font-semibold text-forest-900">
                  {label}
                </p>
                <span className="rounded-pill bg-forest-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-800/60">
                  {t("comingSoon")}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-xl2 bg-forest-900 p-8 text-center text-cream-50">
            <h2 className="font-display text-xl font-semibold">{t("meanwhileTitle")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-cream-100/80">
              {t("meanwhileText")}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-pill bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
