// Pure handlers for the start / consent tools. No HTTP, no route imports — the
// store and live counts are injected so scripts/check-mcp-start.ts can test
// every branch with an in-memory store.
//
// Invariants (asserted by the check script):
//   * `start` never writes.
//   * Only set_consent(accept) creates a row, and only with a configured store.
//   * set_consent(decline) never stores anything; with a valid profile_code it
//     withdraws consent (deletes the row).
//   * The plaintext code is returned once and never persisted.

import { CONSENT_COPY, CONSENT_VERSION, LANG_NAMES, PROFILE_TTL_MONTHS, fill, normalizeStartLang, type StartLang } from './copy'
import { PRIVACY_CONTACT, consentAssistantNote, consentScreen, menuAssistantNote, menuScreen, type Counts } from './screens'
import type { ProfileStore } from './profile-store'

export interface StartDeps {
  /** null = profile storage not configured: nothing can be saved. */
  store: ProfileStore | null
  region: string
  counts: Counts
}

export interface StartResult {
  text: string
  /** Optional note for the assistant (audience: assistant). */
  assistantNote?: string
  isError?: boolean
}

const vars = (lang: StartLang, deps: StartDeps, extra: Record<string, string | number> = {}) => ({
  apps: deps.counts.apps,
  langs: deps.counts.langs,
  region: deps.region,
  contact: PRIVACY_CONTACT,
  months: PROFILE_TTL_MONTHS,
  ...extra,
})

function resolveLang(argLang: unknown, stored?: StartLang): StartLang {
  return argLang ? normalizeStartLang(argLang) : (stored ?? 'en')
}

export async function handleStart(args: { profile_code?: string; lang?: string }, deps: StartDeps): Promise<StartResult> {
  const requested = resolveLang(args.lang)
  const c = CONSENT_COPY[requested]
  // Profile storage not configured: there is nothing to consent to, so skip the
  // consent question and go straight to the menu (everything else still works).
  if (!deps.store) {
    return { text: `${c.unavailable}\n\n${menuScreen(requested, deps.counts, false)}`, assistantNote: menuAssistantNote(requested) }
  }
  if (args.profile_code) {
    const rec = await deps.store.get(args.profile_code)
    if (rec) {
      const lang = resolveLang(args.lang, rec.lang)
      return { text: menuScreen(lang, deps.counts, true), assistantNote: menuAssistantNote(lang) }
    }
    // Unknown / expired code: actionable error + a fresh start.
    return {
      isError: true,
      text: `${c.unknownCode}\n\n${consentScreen(requested, deps.counts, deps.region)}`,
      assistantNote: consentAssistantNote(requested),
    }
  }
  return { text: consentScreen(requested, deps.counts, deps.region), assistantNote: consentAssistantNote(requested) }
}

export async function handleSetConsent(args: { choice: 'accept' | 'decline'; profile_code?: string; lang?: string }, deps: StartDeps): Promise<StartResult> {
  const lang = resolveLang(args.lang)
  const c = CONSENT_COPY[lang]

  if (args.choice === 'decline') {
    let withdrawn = false
    if (args.profile_code && deps.store) withdrawn = await deps.store.delete(args.profile_code)
    return {
      text: `${withdrawn ? c.withdrawn : c.declined}\n\n${menuScreen(lang, deps.counts, false)}`,
      assistantNote: menuAssistantNote(lang),
    }
  }

  // accept
  if (!deps.store) {
    return { text: `${c.unavailable}\n\n${menuScreen(lang, deps.counts, false)}`, assistantNote: menuAssistantNote(lang) }
  }
  if (args.profile_code) {
    const existing = await deps.store.get(args.profile_code)
    if (existing) {
      const l = resolveLang(args.lang, existing.lang)
      return { text: menuScreen(l, deps.counts, true), assistantNote: menuAssistantNote(l) }
    }
  }
  const code = await deps.store.create({ consent_version: CONSENT_VERSION, lang: args.lang ? lang : undefined })
  return {
    text: `${fill(c.saved, vars(lang, deps, { code }))}\n\n${menuScreen(lang, deps.counts, false)}`,
    assistantNote: menuAssistantNote(lang),
  }
}

export async function handleForgetMe(args: { profile_code: string; lang?: string }, deps: StartDeps): Promise<StartResult> {
  const lang = resolveLang(args.lang)
  const c = CONSENT_COPY[lang]
  const deleted = deps.store ? await deps.store.delete(args.profile_code) : false
  if (!deleted) return { isError: true, text: c.unknownCode }
  return { text: c.forgot }
}

export async function handleMyProfile(args: { profile_code: string; lang?: string }, deps: StartDeps): Promise<StartResult> {
  const lang = resolveLang(args.lang)
  const c = CONSENT_COPY[lang]
  const rec = deps.store ? await deps.store.get(args.profile_code) : null
  if (!rec) return { isError: true, text: c.unknownCode }
  const expires = new Date(new Date(rec.last_seen_at).getTime() + PROFILE_TTL_MONTHS * 30 * 24 * 60 * 60 * 1000).toISOString()
  const data = {
    consent_at: rec.consent_at,
    consent_version: rec.consent_version,
    language: rec.lang ?? null,
    created_at: rec.created_at,
    last_seen_at: rec.last_seen_at,
    expires_if_unused_after: expires,
  }
  return { text: `${c.profileHeading}\n\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`` }
}

export async function handleSetLanguage(args: { lang: StartLang; profile_code?: string }, deps: StartDeps): Promise<StartResult> {
  const lang = normalizeStartLang(args.lang)
  const c = CONSENT_COPY[lang]
  let saved = false
  if (args.profile_code && deps.store) {
    // setLang only succeeds for a valid code with an existing (= consented) profile.
    saved = await deps.store.setLang(args.profile_code, lang)
  }
  const head = fill(c.langSet, { language: LANG_NAMES[lang] })
  const tail = saved ? c.langSaved : c.langNotSaved
  return { text: `${head} ${tail}\n\n${menuScreen(lang, deps.counts, saved)}`, assistantNote: menuAssistantNote(lang) }
}
