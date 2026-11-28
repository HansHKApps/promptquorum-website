#!/usr/bin/env node
// Title-only heroes for pages fixed from the 2026-11-28 held set, whose old images showed wrong claims.
// Needs the dev server: npx next dev --webpack --port 3464 (HERO_BASE overrides). --list = dry run.
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const BASE = process.env.HERO_BASE || 'http://localhost:3464'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const FILES = [
  'local-llms/articles/qwen-vs-claude-vs-deepseek-local-2026',
  'local-llms/articles/mobile-local-llms',
  'local-llms/articles/future-of-local-llms',
  'local-llms/articles/running-70b-models-apple-silicon-m5-max',
  'local-llms/articles/local-llm-power-consumption',
  'prompt-bites/articles/best-mini-pc-for-local-llm',
]
const FOOTER = {
  en: 'Local LLM Guide', de: 'Leitfaden Lokale LLMs', fr: 'Guide LLM locaux',
  es: 'Guía de LLMs locales', pt: 'Guia de LLMs locais', ja: 'ローカルLLMガイド',
  zh: '本地LLM指南', ar: 'دليل نماذج LLM المحلية', ko: '로컬 LLM 가이드',
}

function load(file) {
  const src = fs.readFileSync(`src/lib/${file}.ts`, 'utf-8')
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const mod = { exports: {} }
  const stub = () => new Proxy(function () {}, { get: (_, k) => (k === Symbol.toPrimitive ? () => '' : stub()), apply: () => stub() })
  new Function('require', 'module', 'exports', js)(stub, mod, mod.exports)
  const article = Object.values(mod.exports).find((v) => v && v.en && v.ko)
  if (!article) throw new Error('no article export in ' + file)
  return article
}

// Arabic: the renderer misplaces punctuation in mixed-direction text, so use the title's
// first clause only (no colon part, bracketed year, "in 2026" or question mark).
const shortArabic = (t) => t.replace(/[\u2066-\u2069]/g, '').split(/[:(]/)[0].replace(/\s*(في )?2026/g, '').replace(/\s*؟/g, '').trim()
// Year ranges are reordered by the renderer in Arabic, so these titles drop them.
const AR_OVERRIDE = { 'future-of-local-llms': 'اتجاهات النماذج اللغوية المحلية' }
const only = process.argv.slice(2).filter((a) => LANGS.includes(a))

let failed = 0
const slugsOnly = (process.env.ONLY || '').split(',').filter(Boolean)
for (const file of FILES.filter((f) => !slugsOnly.length || slugsOnly.includes(path.basename(f)))) {
  const article = load(file)
  const slug = path.basename(file)
  for (const lang of only.length ? only : LANGS) {
    try {
      const block = article[lang]
      const own = block.heroImage || block.image
      const name = typeof own === 'string' && own.endsWith(`-${lang}.webp`) ? path.basename(own) : `${slug}-overview-hero-${lang}.webp`
      const out = path.join('public/images', name)
      if (process.argv.includes('--list')) { console.log(lang, name, fs.existsSync(out), block.title); continue }
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, title: lang === 'ar' ? (AR_OVERRIDE[slug] || shortArabic(block.title)) : block.title.replace(/\uFF5E/g, '~'), subtitle: '', highlights: [], footer: FOOTER[lang] }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      await sharp(Buffer.from(await res.arrayBuffer())).webp({ lossless: true, effort: 6 }).toFile(out)
      console.log('OK', name)
    } catch (e) { failed++; console.error(`FAIL ${slug} ${lang}: ${e.message}`) }
  }
}
if (failed) process.exitCode = 1
