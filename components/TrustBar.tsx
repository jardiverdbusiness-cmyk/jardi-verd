import { useTranslations } from "next-intl";
import { CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

export function TrustBar() {
  const t = useTranslations("TrustBar");
  const items = ["item1", "item2", "item3", "item4"] as const;

  return (
    <div className="border-b border-forest-900/5 bg-cream-100">
      <div className="container-page grid grid-cols-2 gap-4 py-6 text-sm font-medium text-forest-800 sm:grid-cols-4 sm:gap-6">
        {items.map((key, index) => (
          <Reveal key={key} delay={index * 80} className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream-50">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className="leading-tight">{t(key)}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
