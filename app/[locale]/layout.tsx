import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jardiverd.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Jardí Verd",
      template: "%s",
    },
    alternates: {
      languages: {
        ca: "/ca",
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      siteName: "Jardí Verd",
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-forest-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer locale={locale as Locale} />
          <WhatsappFloatingButton />
          <StickyMobileCta />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
