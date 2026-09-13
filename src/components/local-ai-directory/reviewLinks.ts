// Shared helper for linking from the Local AI Directory to a tool's own
// dedicated FeatureAppPost review, if one exists.
//
// src/generated/feature-review-index.json is built by
// scripts/generate-feature-review-index.mjs, which only ever emits an
// unprefixed English path (e.g. "/power-local-llm/odysseus-review") — the
// generator has no concept of locale. Both ToolCard.tsx and ToolDrawer.tsx
// used to link to that raw value directly, so "read review" always opened
// the English article regardless of which locale's directory page the
// viewer was on (reported 2026-09-13: clicking through from /es/ landed on
// English). English itself must stay unprefixed (PATH_PREFIX_LANGS in
// src/lib/i18n/constants.ts — en is unprefixed at the site root), so the
// fix is to add the viewer's own locale prefix here, once, rather than at
// each call site.

import type { Language } from '@/lib/blog/blogContent'
import featureReviewIndex from '@/generated/feature-review-index.json'

type FeatureReviewIndex = Record<string, { cluster: string; urlSlug: string; url: string }>

/**
 * The tool's own dedicated, single-subject review, if one exists — from the
 * authoritative build-time index (src/generated/feature-review-index.json,
 * derived from the tool's own `reviewSlug` field), NOT the fuzzy
 * tool-article-index.json tier heuristic (which only guarantees an article
 * *mentions* the tool, not that the tool is its primary subject).
 *
 * Returns a path already prefixed for `lang` (e.g. `/es/power-local-llm/...`
 * for `es`, but bare `/power-local-llm/...` for `en`), so callers can pass
 * the result straight to `next/link`'s `href` without any further locale
 * handling.
 */
export function featureReviewUrl(appSlug: string, lang: Language): string | null {
  const url = (featureReviewIndex as FeatureReviewIndex)[appSlug]?.url
  if (!url) return null
  return lang === 'en' ? url : `/${lang}${url}`
}
