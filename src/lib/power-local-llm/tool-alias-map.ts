// Tool-name → directory slug resolution for the review pages' competitor tables.
//
// Deliberately NOT fuzzy: a display name resolves only when its normalised form
// is exactly the normalised form of a tile's slug, a tile's name, or an entry in
// CURATED_ALIASES below. Normalisation only folds case, accents and
// non-alphanumerics, so "LM Studio", "LMStudio" and "lm-studio" are the same
// key, while "LM Studio Server" or "Ollama (CLI)" are not and stay unlinked.
//
// A key claimed by two different tiles is ambiguous and resolves to null (and
// scripts/test-tool-alias-map.mjs fails), so a wrong link is never emitted.

import { localAiApps } from './apps-barrel'

/** Fold case, accents and everything that is not a letter/digit. */
export function normalizeToolName(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '')
}

/**
 * Extra spellings per tile slug that differ from the tile's own name/slug.
 * Add only spellings that appear in review prose AND unambiguously mean that
 * one tool; the unresolved-name report (scripts/report-competitor-links.mjs)
 * is how candidates are found.
 */
export const CURATED_ALIASES: Readonly<Record<string, readonly string[]>> = {
  jan: ['Jan AI'],
  autogpt: ['AutoGPT', 'AutoGPT (classic)'],
  'loci-ai': ['Loci'],
  haystack: ['Haystack (deepset)'],
  jarvis: ['Jarvis (Mac)'],
  stableswarmui: ['SwarmUI'],
  'automatic1111-webui': ['AUTOMATIC1111 Stable Diffusion WebUI', 'Automatic1111'],
}

interface AliasIndex {
  bySlug: ReadonlyMap<string, string>
  ambiguous: ReadonlyMap<string, string[]>
}

function buildIndex(): AliasIndex {
  const claims = new Map<string, Set<string>>()
  const claim = (alias: string, slug: string) => {
    const k = normalizeToolName(alias)
    if (!k) return
    if (!claims.has(k)) claims.set(k, new Set())
    claims.get(k)!.add(slug)
  }
  for (const app of localAiApps) {
    claim(app.slug, app.slug)
    claim(app.name, app.slug)
    for (const extra of CURATED_ALIASES[app.slug] ?? []) claim(extra, app.slug)
  }
  const bySlug = new Map<string, string>()
  const ambiguous = new Map<string, string[]>()
  for (const [k, slugs] of claims) {
    if (slugs.size === 1) bySlug.set(k, [...slugs][0])
    else ambiguous.set(k, [...slugs].sort())
  }
  return { bySlug, ambiguous }
}

const INDEX = buildIndex()

/** Directory tile slug for a tool name, or null (unknown or ambiguous). */
export function resolveToolSlug(name: string): string | null {
  return INDEX.bySlug.get(normalizeToolName(name)) ?? null
}

/** Alias keys claimed by more than one tile (should be empty; tested). */
export function ambiguousAliases(): ReadonlyMap<string, string[]> {
  return INDEX.ambiguous
}
