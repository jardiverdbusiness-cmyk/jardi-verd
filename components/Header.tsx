"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { businessInfo } from "@/lib/areas-data";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LeafIcon, MenuIcon, CloseIcon, PhoneIcon } from "./icons";

const navItems = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/areas", key: "areas" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest-900 text-cream-50 shadow-soft">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100 text-forest-800">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-cream-50">
              Jardí Verd
            </span>
            <span className="hidden text-[11px] uppercase tracking-wide text-cream-100/70 sm:block">
              {tHeader("tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive ? "text-gold-400" : "text-cream-100/90"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <a
            href={businessInfo.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-cream-50"
          >
            <PhoneIcon className="h-4 w-4" />
            {businessInfo.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-pill bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 shadow-soft transition-colors hover:bg-gold-400"
          >
            {t("getQuote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream-50"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cream-50/10 bg-forest-900 xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive
                      ? "bg-forest-800 text-gold-400"
                      : "text-cream-100/90"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <a
              href={businessInfo.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-pill bg-forest-800 px-5 py-3 text-sm font-semibold text-cream-50"
            >
              <PhoneIcon className="h-4 w-4" />
              {businessInfo.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center rounded-pill bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950"
            >
              {t("getQuote")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
