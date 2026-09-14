import { getTranslations } from "next-intl/server";
import { getPathname, Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ChevronRightIcon } from "./icons";

type Href = Parameters<typeof getPathname>[0]["href"];

export interface Crumb {
  label: string;
  href: Href;
}

export async function Breadcrumbs({ locale, trail }: { locale: Locale; trail: Crumb[] }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jardiverd.com";
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  const items: Crumb[] = [{ label: tNav("home"), href: "/" }, ...trail];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${getPathname({ locale, href: item.href })}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream-100/60">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRightIcon className="h-3 w-3" />}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-cream-100/90">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-cream-50">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
