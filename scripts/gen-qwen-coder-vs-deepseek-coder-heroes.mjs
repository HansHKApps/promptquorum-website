#!/usr/bin/env node
// One-off hero generator for the prompt-bite qwen-coder-vs-deepseek-coder (all 9 locales).
// Title comes from each locale block of the article; highlights are hand-written from that block's
// own content (<=7 words, <=16 chars for ja/zh/ko), per the sparse-poster rule in CLAUDE.md.
// Usage: HERO_BASE=http://localhost:3442 node scripts/gen-qwen-coder-vs-deepseek-coder-heroes.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'qwen-coder-vs-deepseek-coder'
const SRC = path.join(process.cwd(), `src/lib/prompt-bites/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const H = {
  en: ['Qwen3-Coder 30B needs a 24 GB card', 'DeepSeek-Coder-V2: 338 languages', 'Qwen2.5 and DeepSeek V2 fit 12 GB'],
  de: ['Qwen3-Coder 30B braucht 24 GB', 'DeepSeek-Coder-V2: 338 Sprachen', 'Qwen2.5 und DeepSeek V2: 12 GB'],
  fr: ['Qwen3-Coder 30B : carte de 24 Go', 'DeepSeek-Coder-V2 : 338 langages', 'Qwen2.5 et DeepSeek V2 : 12 Go'],
  es: ['Qwen3-Coder 30B pide 24 GB', 'DeepSeek-Coder-V2: 338 lenguajes', 'Qwen2.5 y DeepSeek V2 caben en 12 GB'],
  pt: ['Qwen3-Coder 30B pede 24 GB', 'DeepSeek-Coder-V2: 338 linguagens', 'Qwen2.5 e DeepSeek V2 cabem em 12 GB'],
  ja: ['Qwen3-Coder要24GB', 'DeepSeek V2：338言語対応', '旧世代2モデルは12 GBで動作'],
  zh: ['Qwen3-Coder需24GB', 'DeepSeek V2：338种语言', '两款旧模型可用12 GB'],
  ar: ['Qwen3-Coder 30B يحتاج 24 GB', 'DeepSeek-Coder-V2 يدعم 338 لغة', 'Qwen2.5 مع DeepSeek V2 يعملان على 12 GB'],
  ko: ['Qwen3-Coder 24GB', 'DeepSeek V2: 338개 언어', '구형 두 모델은 12 GB 가능'],
}

const only = process.env.LANGS ? process.env.LANGS.split(',') : null
let generated = 0
const failures = []
for (const lang of Object.keys(H)) {
  if (only && !only.includes(lang)) continue
  const block = article[lang]
  // Satori lays text out left-to-right with no bidi reordering, so Arabic lines come out with their word
// order reversed. Pre-reverse the order of "units" (each Arabic word, each run of Latin/number tokens)
// so the visual left-to-right layout reads correctly right-to-left. Words keep their internal shaping.
const rtlVisual = (t) => {
  const units = []
  for (const tok of t.split(' ').filter(Boolean)) {
    const latin = /[A-Za-z0-9]/.test(tok) && !/[\u0600-\u06FF]/.test(tok)
    if (latin && units.length && units[units.length - 1].latin) units[units.length - 1].text += ' ' + tok
    else units.push({ text: tok, latin })
  }
  return units.reverse().map((u) => u.text).join(' ')
}
  const fixAr = (t) => (lang === 'ar' ? rtlVisual(t) : t)
  const title = lang === 'ar' ? 'Qwen Coder مقابل DeepSeek Coder' : block.title
  const spec = { lang, title: fixAr(title), highlights: H[lang].map(fixAr), footer: 'PromptQuorum' }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spec),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const pngPath = path.join(IMAGES_DIR, `${SLUG}-overview-hero-${lang}.png`)
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-overview-hero-${lang}.webp`)
    fs.writeFileSync(pngPath, buf)
    await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
    fs.unlinkSync(pngPath)
    console.log(`OK ${lang} -> ${fs.statSync(webpPath).size} bytes`)
    generated++
  } catch (err) {
    console.error(`FAIL ${lang}: ${err.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
