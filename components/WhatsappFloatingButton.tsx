"use client";

import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/areas-data";
import { WhatsappIcon } from "./icons";

export function WhatsappFloatingButton() {
  const t = useTranslations("WhatsappButton");
  const href = `${businessInfo.whatsappHref}?text=${encodeURIComponent(
    t("defaultMessage")
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
