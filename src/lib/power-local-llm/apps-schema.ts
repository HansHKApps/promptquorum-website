// Local AI App Directory — schema.org JSON-LD built directly from ToolRecord[].
// Phase 2 of the local-llm-software-directory-2026 migration — see plan:
// /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md
//
// This is a standalone replacement for the ItemList/SoftwareApplication block
// that page-helpers.tsx currently derives from markdown table rows (any
// section where `columns.includes('Link')`, parsing `row['Tool']` /
// `row['Link']` / `row['Description']` with a regex). It is NOT wired into
// page-helpers.tsx yet — that swap happens once Phase 1's ToolRecord data is
// reviewed. See the bottom of this file for the field-by-field mapping notes.

import type { Language } from '@/lib/blog/blogContent'
import type { OSKey, ToolRecord } from './apps/types'
import { CATEGORY_GROUP_LABEL, CATEGORY_SUB_GROUP, type CategoryGroupKey } from './apps/categories'

// One ItemList per top-level category group — this mirrors the *granularity*
// of the current page-helpers.tsx behaviour (one ItemList per article
// *section*), since each section in the old article corresponds roughly to
// one of the 7 taxonomy groups (e.g. "Coding Assistants" section ≈ group
// 'code-development'). Grouping by a tool's PRIMARY category's group
// reproduces that section-shaped structure from the new data model without
// depending on the article's own section list.
function groupLabel(group: CategoryGroupKey, lang: Language): string {
  // CATEGORY_GROUP_LABEL is English-only today; fall back to it for every
  // locale until per-language labels are added.
  void lang
  return CATEGORY_GROUP_LABEL[group]
}

const OS_LABELS: Record<OSKey, string> = {
  mac: 'MACOS',
  win: 'WINDOWS',
  linux: 'LINUX',
  ios: 'IOS',
  android: 'ANDROID',
  web: 'WEB',
}

function buildSoftwareApplication(tool: ToolRecord, lang: Language): Record<string, unknown> {
  const description = tool.tagline[lang] ?? tool.tagline.en

  const item: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `https://promptquorum.com/power-local-llm/local-llm-software-directory#software-${tool.slug}`,
    name: tool.name,
    applicationCategory: groupLabel(CATEGORY_SUB_GROUP[tool.categories[0]], lang),
  }

  // url: field is stored as a bare domain/path ("ollama.com"), no scheme —
  // add https:// rather than emit an unparseable URL string.
  if (tool.url) item.url = `https://${tool.url}`

  if (description) item.description = description

  // license: schema.org's `license` property (inherited from CreativeWork)
  // accepts free text as well as a URL; the migrated data stores short
  // license identifiers ("MIT", "Apache-2.0", "Proprietary"), which is a
  // reasonable use of the property.
  if (tool.license && tool.license !== 'TODO') item.license = tool.license

  // operatingSystem: SoftwareApplication's own property, straightforward
  // mapping from the platforms enum.
  if (tool.platforms && tool.platforms.length > 0) {
    item.operatingSystem = tool.platforms.map((p) => OS_LABELS[p]).join(', ')
  }

  // memoryRequirements / processorRequirements: legitimate SoftwareApplication
  // text properties for exactly this kind of "what hardware do I need" fact.
  if (tool.hardware) {
    const { ramGb, vramGb, cpuOnly } = tool.hardware
    const parts: string[] = []
    if (ramGb != null) parts.push(`${ramGb} GB RAM`)
    if (vramGb != null) parts.push(`${vramGb} GB VRAM`)
    if (parts.length > 0) item.memoryRequirements = parts.join(', ')
    if (cpuOnly === true) item.processorRequirements = 'CPU-only (no GPU required)'
  }

  // offers: only emitted for the unambiguous 'free' case — a real Offer needs
  // a real price, and 'freemium'/'paid' don't carry an actual number in the
  // migrated data, so a placeholder price would be a fabricated claim.
  if (tool.price === 'free') {
    item.offers = { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  }

  // interactionStatistic: GitHub star count is a legitimate "how many people
  // liked/starred this" interaction count — distinct from aggregateRating,
  // which would misrepresent a star count as a review/rating score.
  if (tool.stars != null) {
    item.interactionStatistic = {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/LikeAction',
      userInteractionCount: tool.stars,
    }
  }

  // keywords: uses[] is a reasonable fit for schema.org's free-text tag
  // property (inherited from CreativeWork).
  if (tool.uses && tool.uses.length > 0) {
    item.keywords = tool.uses.join(', ')
  }

  return item
}

/**
 * Builds one ItemList of SoftwareApplication entries per tool `layer`,
 * matching the section-per-ItemList granularity page-helpers.tsx currently
 * produces from markdown rows. Pure function — no JSX, no side effects.
 */
export function buildLocalAiAppsItemListSchema(apps: ToolRecord[], lang: Language): object[] {
  const byGroup = new Map<CategoryGroupKey, ToolRecord[]>()
  for (const tool of apps) {
    const group = CATEGORY_SUB_GROUP[tool.categories[0]]
    const existing = byGroup.get(group)
    if (existing) existing.push(tool)
    else byGroup.set(group, [tool])
  }

  return Array.from(byGroup.entries()).map(([group, tools]) => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: groupLabel(group, lang),
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: buildSoftwareApplication(tool, lang),
    })),
  }))
}

// ─── Fields intentionally NOT mapped into JSON-LD, and why ─────────────────
//
// - locality ('local'|'hybrid'|'cloud'|'TODO')  — no schema.org property for
//   "runs on-device vs. calls a cloud API"; this is a PromptQuorum-specific
//   editorial facet, not a structured-data concept search engines model.
// - worksWith (string[])                        — no clean SoftwareApplication
//   property for "compatible with these other tools"; `softwareRequirements`
//   is meant for install-time dependencies, not ecosystem compatibility, so
//   using it here would be a vocabulary stretch.
// - engine ('builtin'|'external'|'both'|'library') — internal architecture
//   classification, not something schema.org models.
// - addedDate                                    — this is when PromptQuorum
//   added the entry to the directory, not the software's own release date;
//   mapping it to `datePublished`/`dateCreated` would misrepresent the
//   software's actual history.
// - lastVerifiedDate                             — reflects PromptQuorum's
//   own editorial verification cadence, not a fact about the software
//   itself; mapping it to `dateModified` would be the same kind of
//   misrepresentation as addedDate above.
// - status ('listed'|'verified'|'tested')        — PromptQuorum's internal
//   editorial review stage, not a public fact about the software.
// - founder / pqReview / changelog               — per the plan's Phase 1
//   decision, these ship empty for all 131 migrated tools ("Claim this
//   entry" / "Not yet reviewed by PromptQuorum" states); nothing to emit
//   yet, and no schema.org property cleanly represents an unverified
//   founder quote or an internal review changelog without misrepresenting
//   authorship or provenance once they are populated.
// - 'TODO' / null sentinel values on any field    — omitted outright rather
//   than emitted as a placeholder string; a `"TODO"` value in public JSON-LD
//   would be a worse signal to crawlers than no property at all.
