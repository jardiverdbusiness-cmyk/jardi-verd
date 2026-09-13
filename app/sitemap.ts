import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { services } from "@/lib/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jardiverd.com";

type StaticPathname =
  | "/"
  | "/services"
  | "/areas"
  | "/projects"
  | "/about"
  | "/contact"
  | "/privacy-policy"
  | "/cookies"
  | "/legal-notice";

const staticPathnames: StaticPathname[] = [
  "/",
  "/services",
  "/areas",
  "/projects",
  "/about",
  "/contact",
  "/privacy-policy",
  "/cookies",
  "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const pathname of staticPathnames) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${getPathname({ locale, href: pathname })}`,
        lastModified: new Date(),
        changeFrequency: pathname === "/" ? "weekly" : "monthly",
        priority: pathname === "/" ? 1 : 0.7,
      });
    }
  }

  for (const service of services) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${getPathname({
          locale,
          href: { pathname: "/services/[slug]", params: { slug: service.slug[locale] } },
        })}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
