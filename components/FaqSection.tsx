import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";
import { FaqAccordionItem } from "./FaqAccordionItem";

interface FaqItem {
  q: string;
  a: string;
}

export async function FaqSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Faq" });
  const items = t.raw("items") as FaqItem[];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest-800/70">{t("subtitle")}</p>
        </Reveal>

        <Reveal delay={100}>
          <div>
            {items.map((item, index) => (
              <FaqAccordionItem
                key={index}
                question={item.q}
                answer={item.a}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
