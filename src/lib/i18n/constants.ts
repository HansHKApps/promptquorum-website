/**
 * i18n Constants — Single source of truth for language routing and localization.
 *
 * PATH_PREFIX_LANGS: Languages that use path-prefix URL structure (/de/, /fr/, /ja/, /zh/).
 * English remains at the site root without prefix (/blog not /en/blog).
 *
 * Used by:
 * - generateAlternates() for canonical and hreflang generation
 * - Sitemap generation (to emit path-prefix URLs)
 * - Middleware redirects (to convert ?lang=XX to /XX/ paths)
 * - Header navigation links (to generate correct href)
 */

export const PATH_PREFIX_LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const;
export type PathPrefixLang = typeof PATH_PREFIX_LANGS[number];

/**
 * ALL_LANGS: All supported languages including English.
 * Used for iterating over translations, validation, and type safety.
 */
export const ALL_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const;
export type Lang = typeof ALL_LANGS[number];

/**
 * OUTPUT_LOCALE: Maps an internal language code to the outward-facing locale
 * that search engines and users see — hreflang values and schema `inLanguage`.
 *
 * The internal code stays `'pt'` (used in URLs, type unions, validation arrays);
 * only the emitted locale is regionalized. Portuguese targets Brazil (`pt-BR`):
 * BR vocabulary/spelling, LGPD-relevant market. Chinese content is written in
 * Simplified script, so it is emitted as `zh-Hans` rather than a bare `zh`:
 * Google treats bare `zh` as generic Chinese, which mis-serves the Traditional
 * (TW/HK) audience that makes up most Chinese-language Google traffic. Any code
 * not listed here is emitted unchanged.
 */
export const OUTPUT_LOCALE: Record<string, string> = { pt: 'pt-BR', ko: 'ko', zh: 'zh-Hans' };

/** Convert an internal language code to its outward-facing locale (e.g. pt → pt-BR). */
export function toOutputLocale(lang: string): string {
  return OUTPUT_LOCALE[lang] ?? lang;
}

/**
 * LOCALE_ROUTED_ROOTS: Top-level path segments that have real /<lang>/<root> route folders
 * for every PATH_PREFIX_LANGS locale (verified against src/app/<lang>/ — e.g. src/app/de/
 * contains one folder per entry here). Routes NOT in this list (e.g. /author/[slug],
 * /image-license, /unsubscribed, /impressum) have no localized variant to switch to — a
 * client-side language switcher must not blindly path-prefix those, or it sends the visitor
 * to a 404. /impressum is deliberately excluded even though it "looks" like a root: it is a
 * single unlocalized legal page (middleware redirects any /<lang>/impressum back to /impressum).
 *
 * Used by:
 * - LanguageSwitcher.tsx and Footer.tsx (language-switch link/navigation targets)
 */
export const LOCALE_ROUTED_ROOTS = [
  'power-local-llm', 'prompt-bites', 'smart-home', 'balcony-solar',
  'prompt-engineering', 'local-llms', 'blog', 'frameworks',
  'compare', 'features', 'how-it-works', 'faq', 'about', 'privacy',
  'waitlist', 'download',
] as const;

export const RTL_LANGS = ['ar'] as const;

export function getLangDir(lang: string): 'rtl' | 'ltr' {
  return (RTL_LANGS as readonly string[]).includes(lang) ? 'rtl' : 'ltr';
}
