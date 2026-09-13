import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream-50">
      <div className="container-page text-center">
        <p className="font-display text-6xl font-semibold text-forest-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-forest-900">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-forest-800/70">{t("text")}</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-pill bg-forest-800 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-700"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
