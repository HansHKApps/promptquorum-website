#!/usr/bin/env node
// Validates hands-on test translations (src/lib/hands-on-tests/data/<app>.<lang>.json)
// against the English source (<app>.json): identical structure, untouched identifiers and numbers,
// and no accidentally untranslated prose. Exit 1 on any ERROR; warnings are for human review.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src/lib/hands-on-tests/data')
const LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const EVID = new Set(['observed', 'measured', 'tester-estimate', 'vendor-claim', 'third-party', 'assumption', 'tester-view', 'tester-error'])
const STATUS = new Set(['Fail', 'Partial', 'Pass', 'Not completed'])
const SEV = new Set(['High', 'Medium', 'Low', 'Positive'])

// Paths (dot/bracket form, indexes normalised to []) whose string value must be byte-identical to EN.
const PROTECTED = [
  /^id$/, /^standard_version$/, /^published$/, /^started$/, /^ended$/,
  /^app\.(name|slug|vendor|pricing_url)$/,
  /^moments\[\]\[(2|3)\]$/, /^chapters\[\]\.id$/, /^chapters\[\]\.items\[\]\[2\]$/,
  /^usage_log\[\]\[(4|5)\](\[\])?$/, /^findings\[\]\[(0|4|5)\](\[\])?$/,
  /^images\[\]\.(id|file|path|role|mime|loading|evidence|original_docx_media)$/, /^images\[\]\.used_in\[\]$/,
  /^figure_order\[\]$/,
]
// Leaves that may legitimately equal EN (names, units, numbers-only, ids).
const MAY_EQUAL = [/^app\./, /^ui\.(log_cols|findings_cols)\[\]$/, /^ui\.(statuses|severities)\./, /^images\[\]\.(subject|rights|captured)$/]

const errors = []
const warns = []
const norm = (p) => p.replace(/\[\d+\]/g, '[]')

function walk(en, tr, p, lang) {
  if (typeof en !== typeof tr || Array.isArray(en) !== Array.isArray(tr) || (en === null) !== (tr === null)) {
    errors.push(`${lang} ${p}: type mismatch (${en === null ? 'null' : typeof en} vs ${tr === null ? 'null' : typeof tr})`)
    return
  }
  if (Array.isArray(en)) {
    if (en.length !== tr.length) errors.push(`${lang} ${p}: array length ${en.length} vs ${tr.length}`)
    for (let i = 0; i < Math.min(en.length, tr.length); i++) walk(en[i], tr[i], `${p}[${i}]`, lang)
  } else if (en && typeof en === 'object') {
    const ek = Object.keys(en), tk = Object.keys(tr)
    for (const k of ek) if (!(k in tr)) errors.push(`${lang} ${p}.${k}: missing key`)
    for (const k of tk) if (!(k in en)) errors.push(`${lang} ${p}.${k}: extra key`)
    for (const k of ek) if (k in tr) walk(en[k], tr[k], p ? `${p}.${k}` : k, lang)
  } else if (typeof en === 'string') {
    const np = norm(p)
    const protectedLeaf = PROTECTED.some((r) => r.test(np)) || EVID.has(en) || STATUS.has(en) && /usage_log/.test(np) || SEV.has(en) && /findings/.test(np)
    if (protectedLeaf) {
      if (en !== tr) errors.push(`${lang} ${p}: identifier changed ${JSON.stringify(en)} -> ${JSON.stringify(tr)}`)
      return
    }
    if (np === 'locale') {
      if (tr !== lang) errors.push(`${lang} locale must be "${lang}", got ${JSON.stringify(tr)}`)
      return
    }
    if (tr.trim() === '') errors.push(`${lang} ${p}: empty`)
    if (en === tr && /[A-Za-z]{4,}/.test(en) && en.split(/\s+/).length > 2 && !MAY_EQUAL.some((r) => r.test(np))) {
      warns.push(`${lang} ${p}: identical to EN (untranslated?) ${JSON.stringify(en.slice(0, 70))}`)
    }
    // Number parity: digit runs (separators stripped) must match as a multiset, except date-bearing strings.
    const digits = (s) => (s.match(/\d+(?:[.,   ]\d{3})*(?:[.,]\d+)?/g) || []).map((x) => x.replace(/\D/g, '')).sort().join(',')
    if (digits(en) !== digits(tr)) warns.push(`${lang} ${p}: numbers differ  EN[${digits(en)}] vs ${lang}[${digits(tr)}]`)
    // Placeholders in ui strings must survive.
    for (const ph of en.match(/\{[a-z]+\}/g) || []) if (!tr.includes(ph)) errors.push(`${lang} ${p}: placeholder ${ph} lost`)
    if (/\p{Script=Latin}/u.test(tr) === false && lang !== 'en' && /\bTODO\b/.test(tr)) errors.push(`${lang} ${p}: TODO left`)
    if (lang === 'pt' && /\b(ficheiro|ecrã|utilizador|transferir)\b/i.test(tr)) errors.push(`${lang} ${p}: European Portuguese term`)
  } else if (en !== tr) {
    errors.push(`${lang} ${p}: value changed ${en} -> ${tr}`)
  }
}

const only = process.argv.slice(2).filter((a) => LANGS.includes(a))
const apps = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && !LANGS.some((l) => f.endsWith(`.${l}.json`))).map((f) => f.replace(/\.json$/, ''))
for (const app of apps) {
  const en = JSON.parse(fs.readFileSync(path.join(dir, `${app}.json`), 'utf8'))
  for (const lang of only.length ? only : LANGS) {
    const f = path.join(dir, `${app}.${lang}.json`)
    if (!fs.existsSync(f)) { (only.length ? errors : warns).push(`${lang} ${app}: translation file missing`); continue }
    let tr
    try { tr = JSON.parse(fs.readFileSync(f, 'utf8')) } catch (e) { errors.push(`${lang} ${app}: invalid JSON (${e.message})`); continue }
    walk(en, tr, '', lang)
    // Script sanity per language (ratio of target-script chars in prose).
    const prose = JSON.stringify([tr.title, tr.dek, tr.verdict, tr.chapters, tr.ui])
    const SCRIPT = { ja: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/gu, zh: /\p{Script=Han}/gu, ko: /\p{Script=Hangul}/gu, ar: /\p{Script=Arabic}/gu }
    if (SCRIPT[lang]) {
      const n = (prose.match(SCRIPT[lang]) || []).length
      if (n < prose.length * 0.25) errors.push(`${lang} ${app}: too little ${lang} script (${n}/${prose.length}) - looks untranslated`)
    }
  }
}
for (const w of warns) console.log('WARN ', w)
for (const e of errors) console.log('ERROR', e)
console.log(`\n${errors.length} error(s), ${warns.length} warning(s)`)
process.exit(errors.length ? 1 : 0)
