import type { ReactNode } from "react";
import { htmlLangOf, langDirOf } from "@/lib/academy/language";

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
  /** a site-language code or a custom programme language */
  lang: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div lang={htmlLangOf(lang)} dir={langDirOf(lang)} className={className}>
      {children}
    </div>
  );
}
