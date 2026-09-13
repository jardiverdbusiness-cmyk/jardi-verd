import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { businessInfo } from "@/lib/areas-data";
import { getAlternates } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MapPinIcon, WhatsappIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(() => "/contact", locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const tWa = await getTranslations({ locale, namespace: "WhatsappButton" });
  const whatsappHref = `${businessInfo.whatsappHref}?text=${encodeURIComponent(
    tWa("defaultMessage")
  )}`;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="rounded-xl2 border border-forest-900/10 bg-white p-7 shadow-soft">
              <h2 className="font-display text-lg font-semibold text-forest-900">
                {t("directTitle")}
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-forest-900">{t("phoneLabel")}</p>
                    <a href={businessInfo.phoneHref} className="text-forest-700">
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-forest-900">{t("areaLabel")}</p>
                    <p className="text-forest-800/70">{t("areaText")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-forest-900">{t("hoursLabel")}</p>
                    <p className="text-forest-800/70">{t("hoursText")}</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-pill bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:bg-whatsapp-dark"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-xl2 border border-forest-900/10 bg-white p-7 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
