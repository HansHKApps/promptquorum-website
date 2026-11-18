#!/usr/bin/env node
// Regenerate the 9 localized hero images for local-llms-vs-claude-pro (risk-gate fix: old images carried
// "100% private / never leaves your machine", "breaks even after 4 years", "200K context" text).
// Highlights mirror the article's own numbers (<=7 words / <=16 CJK chars each).
// Needs the dev server: npx next dev --webpack --port 3077
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3077'
const SLUG = 'local-llms-vs-claude-pro-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const ARTICLE = fs.readFileSync('src/lib/local-llms/articles/local-llms-vs-claude-pro.ts', 'utf-8')
const ORDER = ['en', 'es', 'ar', 'pt', 'de', 'fr', 'ja', 'zh', 'ko']
const TITLES = [...ARTICLE.matchAll(/^ {6}title: '((?:[^'\\]|\\.)*)'/gm)].map((m) => m[1].replace(/\\'/g, "'"))
if (TITLES.length !== 9) throw new Error('expected 9 titles, got ' + TITLES.length)
const TITLE = Object.fromEntries(ORDER.map((l, i) => [l, TITLES[i]]))

const HIGHLIGHTS = {
  en: ['Claude Pro: $20/month', 'Local: $1,700-3,700 over 5 years', '70B at Q4 needs ~43 GB'],
  de: ['Claude Pro: 20 $/Monat', 'Lokal: 1.700-3.700 $ in 5 Jahren', '70B in Q4 braucht ~43 GB'],
  fr: ['Claude Pro : 20 $/mois', 'Local : 1 700-3 700 $ sur 5 ans', '70B en Q4 : ~43 Go requis'],
  ja: ['Claude Pro: 月$20', 'ローカル: 5年$1,700-3,700', '70B(Q4)は約43GB'],
  zh: ['Claude Pro：每月$20', '本地：5年$1,700-3,700', '70B(Q4)约需43GB'],
  es: ['Claude Pro: $20/mes', 'Local: $1,700-3,700 en 5 años', '70B en Q4 necesita ~43 GB'],
  pt: ['Claude Pro: $20/mês', 'Local: $1.700-3.700 em 5 anos', '70B em Q4 exige ~43 GB'],
  ar: ['سعر ⁨Claude Pro⁩ ⁨$20⁩ شهرياً', 'التكلفة محلياً ⁨$1,700-3,700⁩ خلال 5 سنوات', '⁨70B⁩ بصيغة ⁨Q4⁩ يحتاج ⁨43 GB⁩'],
  ko: ['Claude Pro: 월 $20', '로컬: 5년 $1,700-3,700', '70B(Q4)는 약 43 GB'],
}
const FOOTER = {
  en: 'Local LLM Guide', de: 'Leitfaden Lokale LLMs', fr: 'Guide LLM locaux',
  es: 'Guía de LLMs locales', pt: 'Guia de LLMs locais', ja: 'ローカルLLMガイド',
  zh: '本地LLM指南', ar: 'دليل نماذج LLM المحلية', ko: '로컬 LLM 가이드',
}

async function generateOne(lang) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: TITLE[lang], subtitle: '', highlights: HIGHLIGHTS[lang], footer: FOOTER[lang] }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
  const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
  fs.writeFileSync(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)
  console.log(`OK ${path.basename(webpPath)} (${fs.statSync(webpPath).size} bytes)`)
}

const langs = process.argv.slice(2).length ? process.argv.slice(2) : ORDER
let failed = 0
for (const lang of langs) {
  try { await generateOne(lang) } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
