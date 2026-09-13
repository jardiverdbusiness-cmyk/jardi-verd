"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { getServiceBySlug } from "@/lib/services-data";

const labels: Record<Locale, string> = {
  ca: "CA",
  es: "ES",
  en: "EN",
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = useLocale() as Locale;

  function handleChange(nextLocale: Locale) {
    if (nextLocale === currentLocale) return;

    if (pathname === "/services/[slug]" && typeof params.slug === "string") {
      const service = getServiceBySlug(currentLocale, params.slug);
      const nextSlug = service ? service.slug[nextLocale] : params.slug;
      router.replace(
        { pathname: "/services/[slug]", params: { slug: nextSlug } },
        { locale: nextLocale }
      );
      return;
    }

    router.replace(
      // @ts-expect-error -- pathname/params pairing is valid for the current route
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-pill bg-forest-800/50 p-1 ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleChange(locale)}
            aria-pressed={isActive}
            className={`rounded-pill px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              isActive
                ? "bg-cream-100 text-forest-900"
                : "text-cream-100/70 hover:text-cream-100"
            }`}
          >
            {labels[locale]}
          </button>
        );
      })}
    </div>
  );
}
