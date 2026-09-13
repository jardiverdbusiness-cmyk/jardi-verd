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
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
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
  const ogImage = "/images/work/poda-cypress-removal-2.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Jardí Verd",
      template: "%s",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
    openGraph: {
      siteName: "Jardí Verd",
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
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
        <LocalBusinessSchema locale={locale as Locale} />
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
