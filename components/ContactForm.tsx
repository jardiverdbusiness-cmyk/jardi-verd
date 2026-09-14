"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { areas } from "@/lib/areas-data";
import { services } from "@/lib/services-data";
import type { Locale } from "@/i18n/routing";
import { CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultServiceId }: { defaultServiceId?: string }) {
  const t = useTranslations("ContactForm");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      city: String(formData.get("city") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      locale,
      sourcePath: pathname,
      website: String(formData.get("website") || ""),
    };

    const errors: Record<string, string> = {};
    if (payload.name.trim().length < 2) errors.name = t("errorRequired");
    if (!/^[+()\d\s-]{6,20}$/.test(payload.phone.trim())) errors.phone = t("errorPhone");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) errors.email = t("errorEmail");
    if (payload.city.trim().length < 2) errors.city = t("errorRequired");
    if (payload.message.trim().length < 5) errors.message = t("errorRequired");

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl2 border border-forest-700/20 bg-forest-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream-50">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">
          {t("successTitle")}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
          {t("successText")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("name")} error={fieldErrors.name}>
          <input
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            required
            minLength={2}
            className={inputClass}
          />
        </Field>
        <Field label={t("phone")} error={fieldErrors.phone}>
          <input
            type="tel"
            name="phone"
            placeholder={t("phonePlaceholder")}
            required
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("email")} error={fieldErrors.email}>
          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            required
            className={inputClass}
          />
        </Field>
        <Field label={t("city")} error={fieldErrors.city}>
          <select name="city" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t("cityPlaceholder")}
            </option>
            {areas.map((area) => (
              <option key={area.id} value={area.name}>
                {area.name}
              </option>
            ))}
            <option value={t("cityOther")}>{t("cityOther")}</option>
          </select>
        </Field>
      </div>

      <Field label={t("service")}>
        <select name="service" defaultValue={defaultServiceId ?? ""} className={inputClass}>
          <option value="">{t("servicePlaceholder")}</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title[locale]}
            </option>
          ))}
          <option value="other">{t("serviceOther")}</option>
        </select>
      </Field>

      <Field label={t("message")} error={fieldErrors.message}>
        <textarea
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          required
          minLength={5}
          className={inputClass}
        />
      </Field>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold">{t("errorTitle")}</p>
          <p className="mt-1">{t("errorText")}</p>
        </div>
      )}

      <p className="text-xs leading-relaxed text-forest-800/60">
        {t("privacyNote")}{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          {t("privacyLink")}
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-pill bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-forest-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-forest-900/15 bg-white px-4 py-3 text-sm text-forest-900 shadow-sm placeholder:text-forest-800/40 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest-900">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
