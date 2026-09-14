import { useTranslations } from "next-intl";
import { StarIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as { quote: string; author: string; location: string }[];

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <figure className="relative flex h-full flex-col overflow-hidden rounded-xl2 bg-white p-7 shadow-soft transition-shadow hover:shadow-card">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl leading-none text-forest-900/5"
                >
                  “
                </span>
                <div className="relative flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-forest-800/80">
                  “{item.quote}”
                </blockquote>
                <figcaption className="relative mt-5 text-sm font-semibold text-forest-900">
                  {item.author}
                  <span className="ml-1.5 font-normal text-forest-800/60">
                    · {item.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
