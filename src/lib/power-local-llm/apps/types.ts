// Power Local LLM — Local AI App Directory structured data types.
// Phase 1 of the local-llm-software-directory-2026 migration — see plan:
// /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md
//
// One canonical ToolRecord per tool, language-neutral except `tagline` (and,
// once populated, `founder`/`pqReview` prose). Mirrors the target interface in
// the plan's "Target data model" section, with the changes noted below.
//
// DRAFT NOTE (Phase 1 — data migration, no visual change):
// The old article row shape (`Tool`/`Link`/`Description`/`License`/`Stars?`)
// does not carry hardware, platform, pricing, or taxonomy data. Several
// fields below are therefore widened beyond the plan's target interface to
// accept an explicit `'TODO'` sentinel or `null`, rather than being forced
// into a real enum value the migration script could not honestly derive:
//   - `locality`, `engine`, `price` accept `'TODO'` alongside their real enum
//   - `platforms`, `worksWith`, `uses`, `hardware` accept `null`
//   - `addedDate`, `lastVerifiedDate`, `url` accept `null`
// A `'TODO'`/`null` value means "not yet researched," never "verified empty."
// Tighten these unions once the Phase 1 data is manually enriched and
// reviewed by a human (per the plan's verification gate).

import type { Language } from '@/lib/blog/blogContent'
import type { CategorySubKey, InterfaceKey } from './categories'

export type LayerKey =
  | 'runtime'
  | 'desktop'
  | 'webui'
  | 'ide'
  | 'cli'
  | 'rag'
  | 'agent'
  | 'stt'
  | 'tts'
  | 'vision'
  | 'mobile'
  | 'tools'
  | 'image'

export type OSKey = 'mac' | 'win' | 'linux' | 'ios' | 'android' | 'web'

export type UseCaseKey =
  | 'chat'
  | 'code'
  | 'agent'
  | 'docs'
  | 'image'
  | 'audio'
  | 'phone'
  | 'build'
  | 'serve'

export type LocalityKey = 'local' | 'hybrid' | 'cloud'
export type EngineKey = 'builtin' | 'external' | 'both' | 'library'
export type PriceKey = 'free' | 'freemium' | 'paid'
export type StatusKey = 'listed' | 'verified' | 'tested'

export interface ToolRecordHardware {
  ramGb: number | null
  vramGb: number | null
  cpuOnly: boolean | null
}

export interface ToolRecordFounder {
  who: Partial<Record<Language, string>>
  why: string
  best: string
  limits: string
  providedDate: string
}

export interface ToolRecordReview {
  date: string
  version: string
  hw: string
  text: Partial<Record<Language, string>>
  scores: Record<string, number>
}

export interface ToolRecordChangelogEntry {
  date: string
  note: string
  source: 'editorial' | 'founder' | 'user report'
}

export interface ToolRecord {
  slug: string
  name: string
  layer: LayerKey // TODO(taxonomy migration): drop once every consumer reads `categories`/`interfaces` instead
  // TODO(taxonomy migration): optional only during the migration window while all 130 records are being
  // classified in parallel — tighten to required (`categories: CategorySubKey[]`) once every file has it,
  // per this file's own stated pattern for staged data migrations (see header comment).
  categories?: CategorySubKey[] // first entry is primary; multi-assign — see ./categories.ts
  interfaces?: InterfaceKey[] | null // null = not yet classified
  locality: LocalityKey | 'TODO'
  platforms: OSKey[] | null // null = not yet researched
  worksWith: string[] | null // null = not yet researched
  engine: EngineKey | 'TODO'
  license: string
  price: PriceKey | 'TODO'
  hardware: ToolRecordHardware | null // null = not yet researched (hardware floor depends on the model loaded, not a fixed tool attribute)
  stars: number | null // null = closed source or star count not tracked
  addedDate: string | null // ISO 8601; null = not derivable from the source article
  status: StatusKey
  uses: UseCaseKey[] | null // null = not yet researched
  url: string | null // domain only, no scheme, e.g. "ollama.com" or "github.com/ggml-org/llama.cpp"
  tagline: Partial<Record<Language, string>>
  founder?: ToolRecordFounder
  pqReview?: ToolRecordReview
  changelog?: ToolRecordChangelogEntry[]
  lastVerifiedDate: string | null // ISO 8601; separate from the article's own dateModified — null = not yet verified
}
