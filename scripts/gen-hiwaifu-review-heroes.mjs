#!/usr/bin/env node
// Generate the 9 localized hero images for hiwaifu-review (FeatureAppPost).
// Title comes straight from each locale block of the article; the three poster lines are hand-written per locale
// from that block's own content (cloud app, ~10 million characters, 18+ rating). No numeric hardware chip: HiWaifu is a cloud app.
// Needs the dev server: npx next dev --webpack --port 3441
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const ts = require('typescript')

const BASE = 'http://localhost:3441'
const SLUG = 'hiwaifu-review'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}
const HIGHLIGHTS = {
  en: ['Cloud app, not local', '10 million community characters', 'Rated 18+'],
  de: ['Cloud-App, nicht lokal', '10 Mio. Community-Charaktere', 'Ab 18 Jahren'],
  fr: ['Appli cloud, pas locale', '10 millions de personnages', 'Classée 18+'],
  ja: ['クラウド型、ローカル不可', '約1,000万体のキャラ', '18歳以上'],
  zh: ['云端应用，非本地', '约1000万个社区角色', '18+分级'],
  es: ['App en la nube, no local', '10 millones de personajes', 'Clasificada 18+'],
  pt: ['App na nuvem, não local', '10 milhões de personagens', 'Classificado 18+'],
  ar: ['تطبيق سحابي لا محلي', '10 ملايين شخصية مجتمعية', 'تصنيف +18'],
  ko: ['클라우드 앱, 로컬 아님', '약 1,000만 커뮤니티 캐릭터', '18세 이상'],
}

function loadArticle() {
  const src = fs.readFileSync(path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`), 'utf8')
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const m = { exports: {} }
  new Function('module', 'exports', 'require', js)(m, m.exports, () => ({}))
  return m.exports.article
}

async function generateOne(article, lang) {
  const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
  const block = article[lang]
  if (!block) throw new Error(`no ${lang} block`)
  const body = { lang, title: block.title, highlights: HIGHLIGHTS[lang], footer: FOOTER[lang] }
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
  fs.writeFileSync(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)
  console.log(`OK ${SLUG}-hero-${lang}.webp (${fs.statSync(webpPath).size} bytes)`)
}

const article = loadArticle()
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
let failed = 0
for (const lang of langs) {
  try { await generateOne(article, lang) } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
