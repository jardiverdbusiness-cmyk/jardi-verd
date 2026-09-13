import { defineRouting } from "next-intl/routing";

export const locales = ["ca", "es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ca";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/services": {
      ca: "/serveis",
      es: "/servicios",
      en: "/services",
    },
    "/services/[slug]": {
      ca: "/serveis/[slug]",
      es: "/servicios/[slug]",
      en: "/services/[slug]",
    },
    "/areas": {
      ca: "/zones-de-servei",
      es: "/zonas-de-servicio",
      en: "/areas-served",
    },
    "/projects": {
      ca: "/projectes",
      es: "/proyectos",
      en: "/projects",
    },
    "/about": {
      ca: "/qui-som",
      es: "/sobre-nosotros",
      en: "/about",
    },
    "/contact": {
      ca: "/contacte",
      es: "/contacto",
      en: "/contact",
    },
    "/privacy-policy": {
      ca: "/politica-de-privacitat",
      es: "/politica-de-privacidad",
      en: "/privacy-policy",
    },
    "/cookies": {
      ca: "/cookies",
      es: "/cookies",
      en: "/cookies",
    },
    "/legal-notice": {
      ca: "/avis-legal",
      es: "/aviso-legal",
      en: "/legal-notice",
    },
  },
});
