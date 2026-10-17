// Run: npx tsx scripts/check-mcp-start.ts
// Regression checks for the MCP `start` / consent flow (src/lib/mcp/start/*).
// Pure functions with an in-memory store, no network. Fails (exit 1) when the
// consent contract, the menu↔registry parity or the privacy invariants break.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { MCP_TOOL_NAMES } from '../src/lib/mcp/usage'
import { MENU, MENU_HIDDEN_TOOLS, START_TOOL_NAMES } from '../src/lib/mcp/start/menu'
import { CONSENT_COPY, CONSENT_VERSION, PROFILE_TTL_MONTHS, START_LANGS, normalizeStartLang } from '../src/lib/mcp/start/copy'
import {
  createMemoryProfileStore,
  generateProfileCode,
  normalizeProfileCode,
  PROFILE_TTL_SECONDS,
} from '../src/lib/mcp/start/profile-store'
import { handleStart, handleSetConsent, handleForgetMe, handleMyProfile, handleSetLanguage, type StartDeps } from '../src/lib/mcp/start/handlers'

let failures = 0
const fail = (msg: string) => { failures++; console.error('FAIL', msg) }
const check = (cond: unknown, msg: string) => { if (!cond) fail(msg) }

const root = join(__dirname, '..')
const routeSrc = readFileSync(join(root, 'src/app/api/mcp/route.ts'), 'utf8')
const registered = [...routeSrc.matchAll(/registerTool\(\s*'([a-z_]+)'/g)].map((m) => m[1])
const prompts = [...routeSrc.matchAll(/registerPrompt\(\s*'([a-z_]+)'/g)].map((m) => m[1])

// 1. registry / counters / menu parity
for (const n of START_TOOL_NAMES) check(registered.includes(n), `tool not registered in route.ts: ${n}`)
check(new Set(registered).size === registered.length, 'duplicate tool names in route.ts')
check(
  [...registered].sort().join() === [...MCP_TOOL_NAMES].sort().join(),
  `MCP_TOOL_NAMES (usage counters) and registered tools differ: ${registered.filter((n) => !(MCP_TOOL_NAMES as readonly string[]).includes(n)).join(',')} / ${MCP_TOOL_NAMES.filter((n) => !registered.includes(n)).join(',')}`,
)
const menuTools = new Set(MENU.flatMap((m) => m.tools))
for (const t of menuTools) check(registered.includes(t), `menu names unknown tool: ${t}`)
for (const t of registered) check(menuTools.has(t) || MENU_HIDDEN_TOOLS.includes(t), `registered tool missing from menu (or hidden list): ${t}`)
check(prompts.includes('start'), 'prompt `start` is not registered')
check(registered.every((n) => /^[A-Za-z0-9_.-]{1,128}$/.test(n)), 'tool name violates MCP naming rules')

// 2. tool descriptions carry the safety instructions
const descOf = (name: string) => {
  const i = routeSrc.indexOf(`'${name}',`)
  return routeSrc.slice(i, i + 2200)
}
check(/exactly as written/.test(descOf('start')) && /at most once/.test(descOf('start')), '`start` description lost its show-exactly / call-once instruction')
check(/never infer consent/i.test(descOf('set_consent')) && /explicitly/.test(descOf('set_consent')), '`set_consent` description lost its explicit-answer instruction')
check(/destructiveHint: true/.test(descOf('forget_me')), '`forget_me` must be annotated destructive')
check(/START_LANGS/.test(descOf('set_language')), '`set_language` must validate lang against START_LANGS')

// 3. no hard-coded counts in start sources
for (const f of ['menu.ts', 'copy.ts', 'screens.ts', 'handlers.ts']) {
  const src = readFileSync(join(root, 'src/lib/mcp/start', f), 'utf8')
  check(!/\b\d{3,}\s+(local|apps|tools|articles|languages)\b/i.test(src), `hard-coded count in ${f}`)
}

// 4. consent copy: all locales complete, placeholders intact
const baseKeys = Object.keys(CONSENT_COPY.en).sort().join()
for (const l of START_LANGS) {
  const c = CONSENT_COPY[l]
  check(Object.keys(c).sort().join() === baseKeys, `consent copy keys differ for ${l}`)
  check(c.yesHeading.includes('{region}'), `${l}: yesHeading lost {region}`)
  check(c.saved.includes('{code}'), `${l}: saved lost {code}`)
  check(c.rights.includes('{months}') && c.rights.includes('{privacyUrl}') && c.rights.includes('{contact}'), `${l}: rights lost placeholders`)
  check(c.yesBullets.length === CONSENT_COPY.en.yesBullets.length, `${l}: yesBullets count differs`)
}
check(START_LANGS.length === 9, 'expected 9 locales')
check(normalizeStartLang('pt-BR') === 'pt' && normalizeStartLang('xx') === 'en' && normalizeStartLang(undefined) === 'en', 'normalizeStartLang')

// 5. profile code format and hashing
const code = generateProfileCode()
check(/^pq(-[a-z2-7]{5}){4}-[a-z2-7]{6}$/.test(code), `code format: ${code}`)
check(normalizeProfileCode(code) !== null && normalizeProfileCode(code.toUpperCase()) === normalizeProfileCode(code), 'code normalisation')
check(normalizeProfileCode('hello') === null && normalizeProfileCode(undefined) === null, 'invalid code accepted')
check(new Set(Array.from({ length: 200 }, () => generateProfileCode())).size === 200, 'profile codes collided')

async function main() {
  let nowMs = Date.UTC(2026, 9, 11)
  const clock = () => new Date(nowMs)
  const mem = createMemoryProfileStore(clock)
  const counts = { apps: 1, langs: 9 }
  const deps: StartDeps = { store: mem.store, region: 'EU (test)', counts }
  const noStore: StartDeps = { store: null, region: '', counts }

  // start: writes nothing, shows the consent question
  const s1 = await handleStart({}, deps)
  check(mem.rows.size === 0, '`start` wrote to storage')
  check(/PROMPTQUORUM|P R O M P T/.test(s1.text) && s1.text.includes(CONSENT_COPY.en.prompt), 'start screen 1 incomplete')
  check(!s1.isError, 'start without code must not be an error')
  const s1de = await handleStart({ lang: 'de' }, deps)
  check(s1de.text.includes(CONSENT_COPY.de.title), 'start lang=de did not use German consent text')

  // decline: nothing stored, menu shown
  const d = await handleSetConsent({ choice: 'decline' }, deps)
  check(mem.rows.size === 0, 'decline wrote to storage')
  check(d.text.includes(CONSENT_COPY.en.declined) && /1\. \*\*/.test(d.text), 'decline reply must confirm and show the menu')

  // accept: exactly one row, code not stored in plaintext, only allowed fields
  const a = await handleSetConsent({ choice: 'accept', lang: 'de' }, deps)
  check(mem.rows.size === 1, `accept should create exactly one row, got ${mem.rows.size}`)
  const m = a.text.match(/pq(?:-[a-z2-7]{5}){4}-[a-z2-7]{6}/)
  check(!!m, 'accept reply did not contain a profile code')
  const profileCode = m ? m[0] : ''
  const [key, row] = [...mem.rows.entries()][0]
  check(!key.includes(profileCode.replace(/-/g, '')) && !key.includes(profileCode), 'plaintext code found in storage key')
  check(!JSON.stringify(row.rec).includes(profileCode), 'plaintext code found in stored record')
  check(
    Object.keys(row.rec).sort().join() === ['consent_at', 'consent_version', 'created_at', 'lang', 'last_seen_at'].sort().join(),
    `stored record has unexpected fields: ${Object.keys(row.rec).join(',')}`,
  )
  check(row.rec.consent_version === CONSENT_VERSION, 'consent_version not stored')
  check(row.expiresAt - nowMs === PROFILE_TTL_SECONDS * 1000, 'row TTL is not the 6-month policy')
  check(PROFILE_TTL_MONTHS === 6, 'retention decision changed (6 months expected)')

  // accept again with a valid code is idempotent
  await handleSetConsent({ choice: 'accept', profile_code: profileCode }, deps)
  check(mem.rows.size === 1, 'accept with valid code created a second row')

  // welcome back + invalid code
  const wb = await handleStart({ profile_code: profileCode }, deps)
  check(!wb.isError && wb.text.includes(CONSENT_COPY.de.welcomeBack), 'start(valid code) should welcome back in the saved language')
  const bad = await handleStart({ profile_code: 'pq-aaaaa-aaaaa-aaaaa-aaaaa-aaaaaa' }, deps)
  check(bad.isError === true && bad.text.includes(CONSENT_COPY.en.unknownCode), 'invalid code should be an actionable error')

  // my_profile: exactly stored fields, no hash/code
  const mp = await handleMyProfile({ profile_code: profileCode }, deps)
  check(!mp.isError && mp.text.includes('consent_at') && mp.text.includes(CONSENT_VERSION), 'my_profile missing fields')
  check(!mp.text.includes(profileCode) && !/[0-9a-f]{64}/.test(mp.text), 'my_profile leaked the code or a hash')
  check((await handleMyProfile({ profile_code: 'nope' }, deps)).isError === true, 'my_profile unknown code should be an error')

  // set_language: persists only with a valid code; every locale works
  for (const l of START_LANGS) {
    const r = await handleSetLanguage({ lang: l }, deps)
    check(r.text.length > 50 && !r.isError, `set_language(${l}) failed`)
  }
  const before = JSON.stringify([...mem.rows.values()].map((r) => r.rec.lang))
  await handleSetLanguage({ lang: 'ja' }, deps)
  check(JSON.stringify([...mem.rows.values()].map((r) => r.rec.lang)) === before, 'set_language without code changed stored data')
  const saved = await handleSetLanguage({ lang: 'ja', profile_code: profileCode }, deps)
  check([...mem.rows.values()][0].rec.lang === 'ja' && saved.text.includes(CONSENT_COPY.ja.langSaved), 'set_language with valid code did not persist')
  const unknownLang = await handleSetLanguage({ lang: 'ja', profile_code: 'pq-bbbbb-bbbbb-bbbbb-bbbbb-bbbbbb' }, deps)
  check(mem.rows.size === 1 && unknownLang.text.includes(CONSENT_COPY.ja.langNotSaved), 'set_language with unknown code must not store')

  // decline with a valid code = withdrawal
  const accept2 = await handleSetConsent({ choice: 'accept' }, deps)
  const code2 = accept2.text.match(/pq(?:-[a-z2-7]{5}){4}-[a-z2-7]{6}/)![0]
  check(mem.rows.size === 2, 'second profile missing')
  const wd = await handleSetConsent({ choice: 'decline', profile_code: code2 }, deps)
  check(mem.rows.size === 1 && wd.text.includes(CONSENT_COPY.en.withdrawn), 'decline with code should delete the profile')

  // forget_me
  const f = await handleForgetMe({ profile_code: profileCode }, deps)
  check(!f.isError && mem.rows.size === 0, 'forget_me did not delete')
  check((await handleStart({ profile_code: profileCode }, deps)).isError === true, 'deleted code should be unknown')
  check((await handleForgetMe({ profile_code: profileCode }, deps)).isError === true, 'forget_me twice should report unknown code')

  // expiry
  const a3 = await handleSetConsent({ choice: 'accept' }, deps)
  const code3 = a3.text.match(/pq(?:-[a-z2-7]{5}){4}-[a-z2-7]{6}/)![0]
  nowMs += (PROFILE_TTL_SECONDS - 60) * 1000
  check((await mem.store.get(code3)) !== null, 'profile expired too early')
  nowMs += (PROFILE_TTL_SECONDS + 60) * 1000 // touched at T-60 → refreshed, then beyond TTL
  check((await mem.store.get(code3)) === null, 'profile did not expire after the TTL')

  // storage not configured: nothing stored, everything still answers
  const ns = await handleStart({}, noStore)
  check(ns.text.includes(CONSENT_COPY.en.unavailable), 'no store: start should say saving is unavailable')
  const nsa = await handleSetConsent({ choice: 'accept' }, noStore)
  check(nsa.text.includes(CONSENT_COPY.en.unavailable) && !/pq-[a-z2-7]{5}/.test(nsa.text), 'no store: accept must not issue a code')

  if (failures) {
    console.error(`\n${failures} check(s) failed`)
    process.exit(1)
  }
  console.log('check-mcp-start: all checks passed')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
