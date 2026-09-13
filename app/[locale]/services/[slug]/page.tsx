import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { services, getServiceBySlug } from "@/lib/services-data";
import { getServicePhotos } from "@/lib/projects-data";
import { getAlternates } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { serviceIconMap, CheckIcon, ChevronRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug[locale] }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(locale, slug);
  if (!service) return {};

  return {
    title: `${service.title[locale]} | Jardí Verd`,
    description: service.shortDescription[locale],
    alternates: getAlternates(
      (l) => ({ pathname: "/services/[slug]", params: { slug: service.slug[l] } }),
      locale
    ),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "ServiceDetail" });
  const Icon = serviceIconMap[service.icon];
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const galleryPhotos = getServicePhotos(service.id);

  return (
    <>
      <PageHero eyebrow={t("backToServices")} title={service.title[locale]}>
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cream-100/80 hover:text-cream-50"
        >
          ← {t("backToServices")}
        </Link>
      </PageHero>

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-700">
              <Icon className="h-7 w-7" />
            </span>
            <p className="mt-6 text-base leading-relaxed text-forest-800/80">
              {service.intro[locale]}
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-forest-900">
              {t("whatWeDo")}
            </h2>
            <ul className="mt-5 space-y-3">
              {service.bullets[locale].map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-forest-800/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream-50">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            {galleryPhotos.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-xl font-semibold text-forest-900">
                  {t("gallery")}
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {galleryPhotos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-square overflow-hidden rounded-xl border border-forest-900/8"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt[locale]}
                        fill
                        sizes="(min-width: 640px) 200px, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="mt-12 rounded-xl2 border border-forest-900/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {t("otherServices")}
              </h3>
              <ul className="mt-4 space-y-2">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link
                      href={{
                        pathname: "/services/[slug]",
                        params: { slug: other.slug[locale] },
                      }}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50 hover:text-forest-900"
                    >
                      {other.title[locale]}
                      <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl2 border border-forest-900/10 bg-white p-7 shadow-soft lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-semibold text-forest-900">
                {t("ctaTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                {t("ctaSubtitle")}
              </p>
              <div className="mt-6">
                <ContactForm defaultService={service.title[locale]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
