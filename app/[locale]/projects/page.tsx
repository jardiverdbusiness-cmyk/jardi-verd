import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { beforeAfterPairs, workCategories } from "@/lib/projects-data";
import { getAlternates } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.projects" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(() => "/projects", locale),
  };
}

const categoryLabelKeys: Record<string, string> = {
  pruning: "categoryPruning",
  clearing: "categoryClearing",
  maintenance: "categoryMaintenance",
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={
          <Breadcrumbs locale={locale} trail={[{ label: t("eyebrow"), href: "/projects" }]} />
        }
      />

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-forest-900">
              {t("beforeAfterTitle")}
            </h2>
            <p className="mt-2 text-sm text-forest-800/60">{t("beforeAfterHint")}</p>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {beforeAfterPairs.map((pair, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="overflow-hidden rounded-xl2 border border-forest-900/8 bg-white shadow-soft">
                  <BeforeAfterSlider
                    before={{ src: pair.before.src, alt: pair.before.alt[locale] }}
                    after={{ src: pair.after.src, alt: pair.after.alt[locale] }}
                    beforeLabel={t("beforeLabel")}
                    afterLabel={t("afterLabel")}
                  />
                  <p className="p-4 text-sm font-medium text-forest-800/80">
                    {pair.caption[locale]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {workCategories.map((category, index) => (
        <section
          key={category.id}
          className={index % 2 === 0 ? "bg-cream-100 py-16 sm:py-20" : "bg-cream-50 py-16 sm:py-20"}
        >
          <div className="container-page">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-forest-900">
                {t(categoryLabelKeys[category.id])}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {category.photos.map((photo, photoIndex) => (
                <Reveal key={photo.src} delay={(photoIndex % 4) * 75}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 border border-forest-900/8 shadow-soft">
                    <Image
                      src={photo.src}
                      alt={photo.alt[locale]}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
