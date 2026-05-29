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

export const PATH_PREFIX_LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar'] as const;
export type PathPrefixLang = typeof PATH_PREFIX_LANGS[number];

/**
 * ALL_LANGS: All supported languages including English.
 * Used for iterating over translations, validation, and type safety.
 */
export const ALL_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar'] as const;
export type Lang = typeof ALL_LANGS[number];
