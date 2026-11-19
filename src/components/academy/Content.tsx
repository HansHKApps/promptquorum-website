import type { ReactNode } from "react";
import type { AcademyLang } from "@/lib/academy/types";
import { getLangDir } from "@/lib/i18n/constants";

/**
 * Wraps generated content (lessons, questions, objectives) in its own language and direction. The programme
 * language can differ from the page UI language: a German lesson on the Arabic page keeps `lang="de" dir="ltr"`,
 * so screen readers pronounce it correctly and its punctuation stays in place (QA audit F15).
 */
export function Content({
  lang,
  children,
  className,
}: {
  lang: AcademyLang;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div lang={lang} dir={getLangDir(lang)} className={className}>
      {children}
    </div>
  );
}
