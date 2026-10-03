// Cloud-app → local-alternative mapping types (image-generation pilot 2026-10-03, voice/audio added 2026-10-03).
// Tiers are editorial judgment about tool type and workflow, NOT image quality.

export type MatchTier = 'closest' | 'similar' | 'partial'

export interface LocalMatch {
  /** Must equal a ToolRecord.slug in the directory (validated by scripts/check-alternatives.ts). */
  slug: string
  tier: MatchTier
  /** One short English sentence: why this tool is this close. */
  basis: string
  /** 'sourced' = backed by a cited source or directory data; 'assumption' = editorial inference not yet verified. */
  confidence: 'sourced' | 'assumption'
}

export interface CloudAppSource {
  label: string
  url: string
}

export type CloudAppCategory = 'image' | 'voice'

export interface CloudApp {
  id: string
  category: CloudAppCategory
  name: string
  vendor: string
  /** Case and punctuation are ignored. Keep aliases image-specific (plain "chatgpt" must NOT be an alias). */
  aliases: string[]
  summary: string
  localMatches: LocalMatch[]
  /** Shown when there is no close local equivalent, or when an important capability has no local counterpart. */
  gapNote?: string
  /** ISO date the mapping was last checked. */
  verifiedAt: string
  sources: CloudAppSource[]
}
