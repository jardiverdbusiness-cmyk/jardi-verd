import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { areas } from "@/lib/areas-data";
import { getAlternates } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { MapPinIcon } from "@/components/icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.areas" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(() => "/areas", locale),
  };
}

export default async function AreasPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AreasPage" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={
          <Breadcrumbs locale={locale} trail={[{ label: t("eyebrow"), href: "/areas" }]} />
        }
      />
      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Reveal key={area.id} delay={(index % 6) * 60}>
                <div className="flex items-center gap-3 rounded-xl2 border border-forest-900/8 bg-white p-5 shadow-soft transition-shadow hover:shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-lg font-semibold text-forest-900">
                    {area.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-xl2 bg-forest-100 p-7 text-center">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              {t("notListed")}
            </h2>
            <p className="mt-2 text-sm text-forest-800/75">{t("notListedText")}</p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
