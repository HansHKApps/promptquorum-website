#!/usr/bin/env node
/**
 * Untranslated-title check for non-EN locales.
 *
 * Why this exists: the DE and FR prompt-engineering hub titles served the English
 * string for months. Nothing caught it: validate-meta-budgets.mjs only checks
 * length (the English string fitted the Latin budget), it never reads
 * src/translations.ts, and its line-based block splitter only sees locale keys
 * indented by exactly two spaces. check-page-updater-complete.mjs only checks
 * designSkin. The "no English leakage" item in docs/PAGE_UPDATER.md was manual.
 *
 * Checks hub / meta / page titles in src/translations.ts and `title` / `seoTitle`
 * in src/lib/<cluster>/articles/*.ts (read through the TypeScript AST, so
 * indentation and one-line objects do not matter):
 *
 *   identical-to-en   a non-EN title equals the EN title
 *   no-local-script   a ja/zh/ko/ar title has no character of its own script
 *   english-phrase    a ja/zh/ko/ar title contains an untranslated English phrase
 *
 * Technical terms and product names are allowed (ALLOWED below). Add a term there
 * when it is a real name, not to silence a phrase that has a natural translation.
 *
 * REPORT ONLY by default (exit 0): there is an existing backlog.
 *
 * Usage:
 *   node scripts/validate-localized-titles.mjs                    # report
 *   node scripts/validate-localized-titles.mjs --locale=ja --limit=200
 *   node scripts/validate-localized-titles.mjs --changed --strict # exit 1 only on violations
 *                                                                 # that are NEW against origin/main
 *   node scripts/validate-localized-titles.mjs --strict           # exit 1 on any violation
 *   node scripts/validate-localized-titles.mjs --self-test
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { changedArticleFiles } from './changed-article-files.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const TRANSLATIONS = 'src/translations.ts'
const LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'ar', 'ja', 'zh', 'ko']
const SCRIPT = {
  ja: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u,
  zh: /\p{Script=Han}/u,
  ko: /\p{Script=Hangul}/u,
  ar: /\p{Script=Arabic}/u,
}
const HUB_TITLE_KEY = /(HubTitle|MetaTitle|PageTitle)$/

/** Technical terms and product names that may stay in Latin script (longest match first). */
const ALLOWED = [
  'Prompt Engineering', 'Prompt Chaining', 'Fine-Tuning', 'Fine Tuning', 'Chain-of-Thought',
  'Tree of Thought', 'Zero-Shot', 'Few-Shot', 'Function Calling', 'Tool Use', 'Tool Calling',
  'Structured Output', 'Context Window', 'Model Context Protocol', 'System Prompt', 'User Prompt',
  'Deep Research', 'Vibe Coding', 'Open Source', 'Open-Source', 'Open Weights', 'Open-Weight',
  'Local LLM', 'Local LLMs', 'Local AI', 'Edge AI', 'AI Act', 'AI Agents', 'AI Agent',
  'Wake Word', 'Home Lab', 'Mini PC', 'Home Assistant', 'Voice Preview Edition',
  'Open WebUI', 'LM Studio', 'Stable Diffusion', 'Draw Things', 'VS Code', 'Visual Studio Code',
  'Claude Code', 'GitHub Copilot', 'Hugging Face', 'Apple Silicon', 'Apple Intelligence',
  'Mac mini', 'Mac Studio', 'MacBook Pro', 'MacBook Air', 'Raspberry Pi', 'Google Home',
  'Google AI Studio', 'Snapdragon X Elite', 'Intel Core Ultra', 'Ryzen AI Max', 'Unified Memory',
  'GeForce RTX', 'Radeon RX', 'DGX Spark', 'Framework Desktop', 'At the Edge', 'Ask Hans',
  'Gemini Flash', 'Gemini Pro', 'Claude Opus', 'Claude Sonnet', 'Claude Haiku',
  'PromptQuorum', 'Ollama', 'llama.cpp', 'vLLM', 'On-Device AI', 'On-Premises', 'Roo Code',
  'Alibaba Cloud', 'Tencent Cloud', 'faster-whisper', 'whisper.cpp', 'Jarvis for Mac', 'ACDSee Ultimate',
]

/** App names from the directory tiles are product names too (many contain ordinary English words). */
function directoryNames() {
  const dir = path.join(ROOT, 'src/lib/power-local-llm/apps')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((n) => n.endsWith('.ts')).flatMap((n) => {
    const m = fs.readFileSync(path.join(dir, n), 'utf8').match(/^\s*name:\s*(['"])(.+?)\1,/m)
    // Full name, plus the name without a "(...)" suffix.
    return m ? [m[2], m[2].replace(/\s*\(.*\)\s*$/, '')] : []
  }).filter((n) => n.length >= 3)
}

const NAMES = [...new Set([...ALLOWED, ...directoryNames()])].sort((a, b) => b.length - a.length)

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const ALLOWED_RE = new RegExp(`(?<![A-Za-z])(?:${NAMES.map(escapeRe).join('|')})(?![A-Za-z])`, 'gi')

/**
 * Words that signal English prose. A Latin phrase counts as untranslated only if it has one.
 * Words common inside product names (agent, code, chat, studio, cloud, voice...) are left out on
 * purpose to keep the report usable.
 */
const ENGLISH = new Set(`best practices practice guide guides how what why when where which who is are
the an and or for with without your you our of in on at from this that these should can will does
setup install installation tutorial review reviews compared compare comparison free paid pricing price
prices cost costs top models tools explained complete beginner beginners ultimate using run running
build building new more less than between alternative alternatives features tips examples example
step steps get getting started privacy security offline performance benchmark benchmarks speed fast
faster cheap cheapest budget picks ranked ranking every all master mastering learn learning writing
write strategies strategy techniques technique frameworks better versus enterprise`
  .split(/\s+/))
// "vs" is deliberately absent: "LM Studio vs Ollama" is fine in every locale.

/** Phrases that are intentional in one file only (framework step names stay in English). */
const FILE_ALLOWED = {
  'src/lib/prompt-engineering/articles/risen-framework.ts': ['Next Steps'],
}

const norm = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase()
const latinWords = (s) => s.match(/[A-Za-z]{2,}(?:['’][A-Za-z]+)?/g) ?? []
const stripAllowed = (s) => s.replace(ALLOWED_RE, ' | ')
const isEnglish = (w) => ENGLISH.has(w.toLowerCase())

/** Latin runs (words separated only by spaces or hyphens) that read as English phrases. */
export function englishPhrases(title) {
  const runs = stripAllowed(title).match(/[A-Za-z]+(?:[ \-]+[A-Za-z]+)*/g) ?? []
  return runs.map((r) => r.trim()).filter((r) => {
    const w = latinWords(r).filter((x) => x.toLowerCase() !== 'vs')
    return w.length >= 2 && w.some(isEnglish)
  })
}

/**
 * Do the words left after removing allowed names read as untranslated text? Yes with any English
 * prose word, or with three or more unknown words, unless it is an "A vs B vs C" list of names.
 */
const reads = (value, rest) => rest.some(isEnglish) || (rest.length >= 3 && !/\svs\.?\s/i.test(value))

export function checkTitle(lang, value, en) {
  if (lang === 'en' || !value) return null
  const rest = latinWords(stripAllowed(value)).filter((w) => w.toLowerCase() !== 'vs')
  if (en && norm(value) === norm(en)) {
    // Identical is fine when nothing but names and terms is left ("LM Studio vs Ollama 2026").
    if (reads(value, rest)) return { rule: 'identical-to-en' }
    if (!SCRIPT[lang]) return null
  }
  if (!SCRIPT[lang]) return null
  if (!SCRIPT[lang].test(value)) return reads(value, rest) ? { rule: 'no-local-script' } : null
  const phrases = englishPhrases(value)
  return phrases.length ? { rule: 'english-phrase', phrases } : null
}

const propName = (p) =>
  p.name && (ts.isIdentifier(p.name) || ts.isStringLiteralLike(p.name)) ? p.name.text : null

function stringValue(node) {
  if (ts.isStringLiteralLike(node)) return node.text
  // `${st.en('x')} stars` — keep the literal parts, blank out the substitutions.
  if (ts.isTemplateExpression(node)) return node.head.text + node.templateSpans.map((s) => ' 0 ' + s.literal.text).join('')
  return null
}

function objectProps(node) {
  let n = node
  while (n && (ts.isAsExpression(n) || ts.isSatisfiesExpression?.(n) || ts.isParenthesizedExpression(n))) n = n.expression
  if (!n || !ts.isObjectLiteralExpression(n)) return null
  const m = new Map()
  for (const p of n.properties) if (ts.isPropertyAssignment(p) && propName(p)) m.set(propName(p), p.initializer)
  return m
}

/** Every { en: {...}, de: {...} } map in a source file whose blocks carry one of the wanted keys. */
export function findTitles(source, file, wantsKey) {
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const out = []
  let compared = 0
  const visit = (node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const map = objectProps(node)
      const en = map.get('en') && objectProps(map.get('en'))
      if (en && [...en.keys()].some(wantsKey)) {
        for (const lang of LOCALES) {
          if (lang === 'en' || !map.get(lang)) continue
          const block = objectProps(map.get(lang))
          if (!block) continue
          for (const [key, init] of block) {
            if (!wantsKey(key)) continue
            const value = stringValue(init)
            if (value === null) continue
            compared += 1
            const enValue = en.get(key) ? stringValue(en.get(key)) : null
            const hit = checkTitle(lang, value, enValue)
            if (hit) {
              const line = sf.getLineAndCharacterOfPosition(init.getStart(sf)).line + 1
              out.push({ file, line, lang, key, value, ...hit })
            }
          }
        }
        return
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return { findings: out, compared }
}

const wantsFor = (file) =>
  file === TRANSLATIONS ? (k) => HUB_TITLE_KEY.test(k) : (k) => k === 'title' || k === 'seoTitle'

function allFiles() {
  const files = [TRANSLATIONS]
  const lib = path.join(ROOT, 'src/lib')
  for (const entry of fs.readdirSync(lib, { withFileTypes: true })) {
    const dir = path.join(lib, entry.name, 'articles')
    if (!entry.isDirectory() || !fs.existsSync(dir)) continue
    for (const name of fs.readdirSync(dir)) if (name.endsWith('.ts')) files.push(`src/lib/${entry.name}/articles/${name}`)
  }
  return files.sort()
}

function selfTest() {
  const en = 'Prompt Engineering Best Practices 2026: Frameworks'
  const cases = [
    ['de', en, en, 'identical-to-en'],
    ['de', 'Prompt Engineering: Best Practices und Frameworks 2026', en, null],
    ['de', 'LM Studio vs Ollama 2026', 'LM Studio vs Ollama 2026', null],
    ['ja', 'Prompt工程Best Practices 2026：フレームワーク', en, 'english-phrase'],
    ['zh', '提示词工程Best Practices 2026：框架', en, 'english-phrase'],
    ['ja', 'プロンプトエンジニアリング実践ガイド2026：フレームワーク', en, null],
    ['zh', '提示词工程最佳实践 2026：提示词框架与实战指南', en, null],
    ['ko', 'How to Install Ollama', 'How to Install Ollama on Linux', 'no-local-script'],
    ['zh', 'Open WebUI 与 LM Studio 对比', 'Open WebUI vs LM Studio', null],
    ['ar', 'LM Studio vs Ollama', 'LM Studio vs Ollama', null],
    ['fr', 'PromptLayer vs Mirascope vs PromptPerfect (2026)', 'PromptLayer vs Mirascope vs PromptPerfect (2026)', null],
    ['es', 'Deploying Agents Securely At Scale', 'Deploying Agents Securely At Scale', 'identical-to-en'],
  ]
  let failed = 0
  for (const [lang, value, enValue, want] of cases) {
    const got = checkTitle(lang, value, enValue)?.rule ?? null
    if (got !== want) { failed += 1; console.log(`FAIL ${lang} "${value}": want ${want}, got ${got}`) }
  }
  const sample = "export const article = { en: { title: 'Best Local Tools Guide' }, de: { title: 'Best Local Tools Guide' } }"
  if (findTitles(sample, 'x.ts', (k) => k === 'title').findings.length !== 1) { failed += 1; console.log('FAIL one-line object parse') }
  console.log(failed ? `${failed} self-test failure(s)` : `self-test ok (${cases.length + 1} cases)`)
  process.exit(failed ? 1 : 0)
}

function main() {
  const args = process.argv.slice(2)
  if (args.includes('--self-test')) return selfTest()
  const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split('=')[1]
  const strict = args.includes('--strict')
  const locale = flag('locale')
  const limit = Number(flag('limit') ?? 40)
  const changed = args.some((a) => a === '--changed' || a.startsWith('--changed='))

  let files = allFiles()
  let base = null
  if (changed) {
    const res = changedArticleFiles(flag('changed'))
    base = res.base
    const git = (a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    files = [...res.files]
    if (git(['diff', '--name-only', base, '--', TRANSLATIONS]).trim()) files.unshift(TRANSLATIONS)
    console.log(`--changed: ${files.length} file(s) differ from ${res.ref}; reporting only violations new against it`)
  }

  let findings = []
  let compared = 0
  for (const file of files) {
    const res = findTitles(fs.readFileSync(path.join(ROOT, file), 'utf8'), file, wantsFor(file))
    compared += res.compared
    let found = res.findings
    if (base && found.length) {
      let old = []
      try {
        const src = execFileSync('git', ['show', `${base}:${file}`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] })
        old = findTitles(src, file, wantsFor(file)).findings
      } catch { /* new file: every violation is new */ }
      const known = new Set(old.map((f) => `${f.lang}|${f.key}|${f.value}`))
      found = found.filter((f) => !known.has(`${f.lang}|${f.key}|${f.value}`))
    }
    const allowedHere = FILE_ALLOWED[file] ?? []
    found = found.filter((f) => !(f.rule === 'english-phrase' && f.phrases.every((x) => allowedHere.includes(x))))
    findings.push(...found)
  }
  if (locale) findings = findings.filter((f) => f.lang === locale)

  console.log(`Localized title check: ${files.length} file(s), ${compared} non-EN title(s) checked`)
  if (!findings.length) {
    console.log('OK: no untranslated titles.')
    process.exit(0)
  }
  const count = (list) => LOCALES.map((l) => [l, list.filter((f) => f.lang === l).length]).filter(([, n]) => n).map(([l, n]) => `${l} ${n}`).join(', ')
  for (const rule of ['identical-to-en', 'no-local-script', 'english-phrase']) {
    const list = findings.filter((f) => f.rule === rule)
    if (list.length) console.log(`  ${rule}: ${list.length} (${count(list)})`)
  }
  // Hub titles first: they are few and highly visible.
  findings.sort((a, b) => Number(b.file === TRANSLATIONS) - Number(a.file === TRANSLATIONS) || a.file.localeCompare(b.file) || a.line - b.line)
  console.log('')
  for (const f of findings.slice(0, limit)) {
    console.log(`  ${f.rule}  ${f.lang}  ${f.file}:${f.line}  ${f.key}`)
    console.log(`      ${f.value}${f.phrases ? `   [${f.phrases.join('; ')}]` : ''}`)
  }
  if (findings.length > limit) console.log(`  ... ${findings.length - limit} more (--limit=${findings.length})`)
  if (strict) {
    console.log(`\nFAIL: ${findings.length} untranslated title(s).`)
    process.exit(1)
  }
  console.log('\nReport only. Use --changed --strict to fail on newly introduced violations.')
}

main()
