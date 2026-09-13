import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });
  return {
    title: `${t("cookiesTitle")} | Jardí Verd`,
    alternates: getAlternates(() => "/cookies", locale),
    robots: { index: false, follow: true },
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Legal" });

  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-forest-900">
          {t("cookiesTitle")}
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-forest-800/70">
          {t("placeholder")}
        </p>
      </div>
    </section>
  );
}
