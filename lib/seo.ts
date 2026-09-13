import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type Href = Parameters<typeof getPathname>[0]["href"];

export function getAlternates(
  hrefForLocale: (locale: Locale) => Href,
  currentLocale: Locale
) {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = getPathname({ locale, href: hrefForLocale(locale) });
  }

  return {
    canonical: languages[currentLocale],
    languages: {
      ...languages,
      "x-default": languages[routing.defaultLocale],
    },
  };
}
