import { useTranslations } from "next-intl";
import { StarIcon } from "./icons";

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as { quote: string; author: string; location: string }[];

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={index}
              className="flex flex-col rounded-xl2 bg-white p-7 shadow-soft"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-forest-800/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-forest-900">
                {item.author}
                <span className="ml-1.5 font-normal text-forest-800/60">
                  · {item.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
