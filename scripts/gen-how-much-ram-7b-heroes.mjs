#!/usr/bin/env node
// Hero generator for how-much-ram-for-7b-model (sparse Discover poster, 9 locales).
// Title from the article's own locale block; highlights restate numbers already in the article.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'how-much-ram-for-7b-model'
const SRC = path.join(process.cwd(), `src/lib/prompt-bites/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { footer: 'PromptQuorum Prompt Bites', h: ['Weights: 4–5 GB', 'With context: 5–6 GB', 'GPU ~25 vs CPU ~5 tok/s'] },
  de: { footer: 'PromptQuorum Prompt Bites', h: ['Gewichte: 4–5 GB', 'Mit Kontext: 5–6 GB', 'GPU ~25 vs. CPU ~5 tok/s'] },
  fr: { footer: 'PromptQuorum Prompt Bites', h: ['Poids : 4–5 Go', 'Avec contexte : 5–6 Go', 'GPU ~25 vs CPU ~5 tok/s'] },
  es: { footer: 'PromptQuorum Prompt Bites', h: ['Pesos: 4–5 GB', 'Con contexto: 5–6 GB', 'GPU ~25 vs CPU ~5 tok/s'] },
  pt: { footer: 'PromptQuorum Prompt Bites', h: ['Pesos: 4–5 GB', 'Com contexto: 5–6 GB', 'GPU ~25 vs CPU ~5 tok/s'] },
  ja: { footer: 'PromptQuorum Prompt Bites', h: ['重み：4〜5 GB', '文脈込み：5〜6 GB', 'GPU約25／CPU約5 tok/s'] },
  zh: { footer: 'PromptQuorum Prompt Bites', h: ['权重：4–5 GB', '含上下文：5–6 GB', 'GPU约25／CPU约5 tok/s'] },
  ko: { footer: 'PromptQuorum Prompt Bites', h: ['가중치: 4~5 GB', '컨텍스트 포함: 5~6 GB', 'GPU 25 vs CPU 5'] },
  ar: { footer: 'PromptQuorum Prompt Bites', h: ['الأوزان: 4–5 GB', 'مع السياق: 5–6 GB', 'GPU ~25 مقابل CPU ~5 توكن/ث'] },
}
// The hero route lays Arabic words out left-to-right in logical order (no bidi reordering), so Arabic
// strings are supplied in visual order: units reversed, Latin/number runs kept intact, trailing marks moved to the front.
const AR = /[\u0600-\u06FF]/
const visualAr = (str) => {
  const units = []
  for (let t of str.split(' ')) {
    const m = t.match(/^(.*?)([:؟،.]+)$/)
    const lead = m ? m[2] : ''
    if (m) t = m[1]
    const isAr = AR.test(t)
    const prev = units[units.length - 1]
    if (!isAr && prev && !prev.ar && !lead && !prev.lead) prev.text += ' ' + t
    else units.push({ ar: isAr, text: t, lead })
  }
  return units.reverse().map((u) => u.lead + u.text).join(' ')
}
let fail = 0
for (const lang of Object.keys(L)) {
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  if (only && !only.includes(lang)) continue
  const base = `${SLUG}-overview-hero-${lang}`
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, title: lang === 'ar' ? visualAr(article[lang].title.replace(/[\u2066-\u2069]/g, '')) : article[lang].title, highlights: lang === 'ar' ? L[lang].h.map(visualAr) : L[lang].h, footer: L[lang].footer }) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const png = path.join(IMAGES_DIR, `${base}.png`)
    fs.writeFileSync(png, Buffer.from(await res.arrayBuffer()))
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${base}.webp`))
    fs.unlinkSync(png)
    console.log(`OK ${base}.webp`)
  } catch (e) { console.error(`FAIL ${base}: ${e.message}`); fail++ }
}
if (fail) process.exitCode = 1
