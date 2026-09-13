import { getTranslations } from "next-intl/server";
import { businessInfo, areas } from "@/lib/areas-data";
import { services } from "@/lib/services-data";
import type { Locale } from "@/i18n/routing";

export async function LocalBusinessSchema({ locale }: { locale: Locale }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jardiverd.com";
  const t = await getTranslations({ locale, namespace: "Meta.home" });

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    description: t("description"),
    image: `${siteUrl}/images/work/poda-cypress-removal-2.jpg`,
    url: `${siteUrl}/${locale}`,
    telephone: businessInfo.phoneIntl,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tarragona",
      addressRegion: "Catalunya",
      addressCountry: "ES",
    },
    areaServed: areas.map((area) => ({ "@type": "City", name: area.name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title[locale],
        description: service.shortDescription[locale],
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
