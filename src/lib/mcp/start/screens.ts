import { CONSENT_COPY, LANG_NAMES, PROFILE_TTL_MONTHS, fill, privacyUrl, type StartLang } from './copy'
import { MENU } from './menu'

export const PRIVACY_CONTACT = 'hello@promptquorum.com'

// Kept <= 48 columns so it survives narrow clients.
export const BANNER = [
  '╔══════════════════════════════════════════╗',
  '║  ◇ P R O M P T Q U O R U M ◇   MCP       ║',
  '║  Your machine. Your models. Your stack.  ║',
  '╚══════════════════════════════════════════╝',
].join('\n')

export interface Counts {
  apps: number
  langs: number
}

/** Screen 1: banner + live counts + the consent question. Stores nothing. */
export function consentScreen(lang: StartLang, counts: Counts, region: string): string {
  const c = CONSENT_COPY[lang]
  const vars = { apps: counts.apps, langs: counts.langs, region, contact: PRIVACY_CONTACT, privacyUrl: privacyUrl(lang), months: PROFILE_TTL_MONTHS }
  return [
    '```text',
    BANNER,
    '```',
    fill(c.counts, vars),
    '',
    `**${c.title}**`,
    '',
    c.intro,
    '',
    `**${fill(c.yesHeading, vars)}** ${fill(c.yesBody, vars)}`,
    ...c.yesBullets.map((b) => `- ${b}`),
    '',
    `**${c.noHeading}** ${c.noText}`,
    '',
    fill(c.rights, vars),
    '',
    `> **${c.prompt}**`,
  ].join('\n')
}

// Marketing + capability copy is English; the assistant translates it. Draft
// wording — Hans edits. No counts are hard-coded here (live values only).
const WHY = [
  '**Why PromptQuorum.** PromptQuorum is an independent directory of local-AI software: curated, license-checked, with hands-on test notes where we have them, and kept current. Instead of ten tabs of hype you get answers matched to your hardware — straight from our directory, not from live web scraping. Your AI assistant stays in charge; we supply the facts.',
]

const CAPABILITIES = [
  'Match apps to your hardware (RAM / VRAM / GPU)',
  'Compare apps side by side and find alternatives',
  'Check licenses in plain language',
  'Recommend a complete stack for a goal',
  'Read hands-on tests and in-depth articles',
]

/** Screen 2: welcome + marketing + capabilities + numbered task menu. */
export function menuScreen(lang: StartLang, counts: Counts, returning: boolean): string {
  const c = CONSENT_COPY[lang]
  const lines: string[] = [
    '```text',
    BANNER,
    '```',
    `${returning ? c.welcomeBack : c.welcome} · ${counts.apps} local-AI apps · ${counts.langs} languages`,
    '',
    ...WHY,
    '',
    '**What I can do with this connection**',
    ...CAPABILITIES.map((x) => `- ${x}`),
    '',
    '**What would you like to do?** — type a number, or just say it in your own words.',
    '',
    ...MENU.map((m) => `${m.id}. **${m.label}** — e.g. ${m.examples.map((e) => `"${e}"`).join(' · ')}`),
  ]
  return lines.join('\n')
}

/** Assistant-audience note: number → tools mapping and language instruction. */
export function menuAssistantNote(lang: StartLang): string {
  const mapping = MENU.map((m) => `${m.id} → ${m.tools.join(', ')}`).join('; ')
  const langLine =
    lang === 'en'
      ? ''
      : ` Present the menu to the user in ${LANG_NAMES[lang]} (${lang}); keep the layout and numbering, and answer in that language from now on.`
  return `Menu mapping (do not show this line): ${mapping}. If the user picks a number, use those tools; if they describe a task in their own words, choose the matching tools.${langLine}`
}

export function consentAssistantNote(lang: StartLang): string {
  const langLine = lang === 'en' ? '' : ` Show it in ${LANG_NAMES[lang]} (${lang}) — it is already written in that language where available.`
  return `Show the text above to the user exactly as written, do not summarise it, then wait. Call set_consent only after the user explicitly answers yes or no — never infer consent.${langLine}`
}
