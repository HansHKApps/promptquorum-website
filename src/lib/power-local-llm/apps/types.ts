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
// Lifecycle/editorial-depth tier, independent of the founder-input signal
// (`founder`/`founderReviewedDate` below, which render their own separate badge).
// 'planned' = not yet publicly available; 'listed' = live, baseline default;
// 'verified'/'tested' = reserved for future deeper-editorial tiers, unused today.
export type StatusKey = 'planned' | 'listed' | 'verified' | 'tested'

// Distribution channel a tool can be downloaded through — orthogonal to `platforms`
// (which OS it runs on) and `interfaces` (desktop/web/CLI/mobile/library, i.e. how you
// use it). A tool can have more than one, e.g. an app on both the App Store and Google Play.
export type StoreLinkKey = 'appStore' | 'googlePlay' | 'github' | 'web'

export const STORE_LINK_LABEL: Record<StoreLinkKey, string> = {
  appStore: 'App Store',
  googlePlay: 'Google Play',
  github: 'GitHub',
  web: 'Website',
}

export interface ToolRecordHardware {
  ramGb: number | null
  vramGb: number | null
  cpuOnly: boolean | null
  // True when the tool's real requirement is inherently variable — it depends on
  // whichever model/backend the user loads or connects, not a fixed attribute of
  // the tool itself (e.g. SGLang, Ollama, or any client that just forwards to a
  // backend the user picks). Distinct from ramGb/vramGb/cpuOnly all being null for
  // a tool nobody has looked into yet: this flag means the research WAS done and
  // concluded "there is no single number," so the UI should say that plainly
  // instead of showing the generic "not yet reviewed" label. Leave unset (falsy)
  // for tools that genuinely just haven't been researched.
  variesByModel?: boolean
}

export type FounderText = string | Partial<Record<Language, string>>
export type FounderParagraphs = string[] | Partial<Record<Language, string[]>>

// Public professional profile links the founder/maintainer has themselves published
// (e.g. in an outreach email signature or their own GitHub bio) — never guessed or
// constructed from a name. Verify each URL actually resolves to that person before
// setting it. Keys are the platform; values are full URLs.
export type FounderSocialKey = 'linkedin' | 'github' | 'x' | 'instagram' | 'website'

export interface ToolRecordFounder {
  who: Partial<Record<Language, string>>
  socials?: Partial<Record<FounderSocialKey, string>>
  // why/best/limits/fullQuote accept a plain string (English only) or a
  // per-language map; read them through founderText()/founderParagraphs() in
  // ../founderText so a missing locale falls back to English.
  why: FounderText
  best?: FounderText
  limits?: FounderText
  providedDate: string
  // Optional full-length quote (one string per paragraph), verbatim from the
  // founder/maintainer, for tools that have a dedicated "From the Maker"
  // section in their review article. Rendered as an expandable, scrollable
  // block in ToolDrawer so it doesn't force the drawer to grow — collapsed
  // by default, `why`/`best`/`limits` above already give the short version.
  fullQuote?: FounderParagraphs
  // Optional verbatim excerpt shown on the directory tile (which clamps to two lines) instead of the
  // first paragraph of `fullQuote`, for statements whose opening sentence isn't the strongest one.
  pullQuote?: FounderText
}

export interface ToolRecordReview {
  date: string
  version: string
  // Exact page a version was verified against — often a GitHub releases/tags
  // page or the app's own changelog, not the marketing homepage in `url`.
  versionSourceUrl?: string
  // hw/text/scores reserve space for a future full-scorecard review feature
  // (see StatusKey's 'verified'/'tested' tiers, unused today); a version-only
  // entry only needs date+version, so these stay optional rather than forcing
  // every populated pqReview to invent placeholder scores.
  hw?: string
  text?: Partial<Record<Language, string>>
  scores?: Record<string, number>
}

export interface ToolRecordChangelogEntry {
  date: string
  note: string
  source: 'editorial' | 'founder' | 'user report'
}

export interface ToolRecord {
  slug: string
  name: string
  categories: CategorySubKey[] // first entry is primary; multi-assign — see ./categories.ts
  interfaces: InterfaceKey[] // how a user actually installs/runs the tool
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
  // Optional per-channel download links, full URLs (unlike `url`, these need the full
  // path — an App Store/Play Store listing URL is never just a domain). When set with
  // 2+ entries, the UI renders one button per channel instead of a single "Get it" link
  // built from `url`. Omit entirely for tools that only need the single `url` field.
  storeLinks?: Partial<Record<StoreLinkKey, string>>
  tagline: Partial<Record<Language, string>>
  founder?: ToolRecordFounder
  // ISO 8601 date the founder/maintainer reviewed THIS entry's technical specs and
  // description for accuracy. Distinct from `founder` (a founder-authored quote) —
  // this is a fact-check credit, not a statement. Self-expiring: the UI shows the
  // "Founder-reviewed" badge for FOUNDER_STAR_VALID_DAYS (365) after this date, then
  // stops on its own — no separate cleanup step needed. The review/article itself
  // stays independent PromptQuorum editorial content either way.
  founderReviewedDate?: string
  // Slug (in the local-llms or power-local-llm cluster) of the article that is
  // ABOUT this tool specifically — a dedicated review, not a comparison or a
  // passing mention. When set, generate-tool-article-index.mjs pins that article
  // to position 1 in the tool's "PromptQuorum articles" list regardless of its
  // dateModified, so a newer unrelated article can never outrank a tool's own
  // review. Leave unset until that dedicated article exists.
  reviewSlug?: string
  pqReview?: ToolRecordReview
  changelog?: ToolRecordChangelogEntry[]
  // True when the tool has a verified MCP (Model Context Protocol) server or
  // client integration — a standardized, discoverable tool-connection
  // protocol, distinct from a plain API/function-calling integration already
  // captured loosely in `worksWith`. Leave unset for every tool that has not
  // been specifically checked, same convention as `hardware`/`platforms`
  // above: unset means "not yet researched," never "verified absent." No
  // `false` state is modeled — there is no value in asserting a negative for
  // 173 of 175 tools nobody has checked.
  mcpSupport?: boolean
  lastVerifiedDate: string | null // ISO 8601; separate from the article's own dateModified — null = not yet verified
  // One-line "best for / limits" statement, written ONCE here and reused verbatim by both this
  // tool's review article and its category comparison article, so the two can never disagree
  // about who the tool is for. English only; unset until the tool has been reviewed.
  verdict?: string
  // Set when the project's upstream is no longer developed, so the directory can show a status badge
  // next to an otherwise normal-looking entry. 'archived' = the GitHub repository is archived (read-only,
  // verified via the GitHub API); 'unmaintained' = the project's own README says it is no longer maintained
  // but GitHub does not flag it archived. `since` is the ISO date the status began, when a review states it.
  upstreamStatus?: { state: 'archived' | 'unmaintained'; since?: string }
  // Category-specific comparison attributes, keyed by the attribute keys defined in
  // ./compare-schema.ts for this tool's primary category group. Feeds the category article's
  // comparison table and the homepage comparison tool. Unset/missing key = "not yet researched",
  // never "verified absent" (same convention as `hardware`/`mcpSupport`).
  compare?: Record<string, CompareValue>
  // Affiliate/referral link for this tool, only when a programme is actually enrolled.
  // Leave unset for every tool without one. Rendering must go through ToolAffiliateLink-style
  // markup (rel="sponsored nofollow" + disclosure marker), never a plain outbound link.
  affiliate?: ToolRecordAffiliate
}

export type CompareValue = string | number | boolean | string[]

export interface ToolRecordAffiliate {
  /** Full tracked URL supplied by the programme. */
  url: string
  /** Programme/network name, for internal records and disclosure wording, e.g. "Impact". */
  program: string
  /** ISO 8601 date the programme enrolment was confirmed. */
  enrolledDate: string
}
