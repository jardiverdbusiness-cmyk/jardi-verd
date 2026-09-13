"use client";

import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/areas-data";
import { PhoneIcon, WhatsappIcon } from "./icons";

export function StickyMobileCta() {
  const t = useTranslations("WhatsappButton");
  const tNav = useTranslations("Nav");
  const whatsappHref = `${businessInfo.whatsappHref}?text=${encodeURIComponent(
    t("defaultMessage")
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-forest-800/10 bg-cream-50/95 backdrop-blur sm:hidden">
      <a
        href={businessInfo.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-forest-900"
      >
        <PhoneIcon className="h-4 w-4" />
        {tNav("callNow")}
      </a>
      <div className="w-px bg-forest-800/10" />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-whatsapp py-3 text-sm font-semibold text-white"
      >
        <WhatsappIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
