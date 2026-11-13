#!/usr/bin/env node
// One-off hero generator for uncensored-llm-models (all 9 locales).
// Sparse Discover poster: short localized title (the article title up to the first colon) plus three
// hand-written highlights (<=7 words; <=16 chars for ja/zh/ko). Highlights restate sections of the
// article itself (abliteration explainer, Heretic 2.0 / ARA, the 10-model table).
// Usage: HERO_BASE=http://localhost:3454 node scripts/gen-uncensored-llm-models-heroes.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3454'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'uncensored-llm-models'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
// '@/lib/author' is the only runtime import; the hero only needs titles.
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ authorPerson: () => ({}) }))
const article = mod.exports.article

const stripMd = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/[⁦-⁩]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

// Poster title = article title up to the first colon (ASCII or full-width).
const posterTitle = (t) => stripMd(t).split(/\s?[:：]/)[0].trim()

const L = {
  en: { highlights: ['Abliteration explained', 'Heretic 2.0 and ARA', '10 models you can download'], footer: 'PromptQuorum Guide' },
  de: { highlights: ['Abliteration erklärt', 'Heretic 2.0 und ARA', '10 Modelle zum Download'], footer: 'PromptQuorum-Leitfaden' },
  fr: { highlights: ["L'abliteration expliquée", 'Heretic 2.0 et ARA', '10 modèles à télécharger'], footer: 'Guide PromptQuorum' },
  es: { highlights: ['La abliteración explicada', 'Heretic 2.0 y ARA', '10 modelos para descargar'], footer: 'Guía de PromptQuorum' },
  pt: { highlights: ['Abliteração explicada', 'Heretic 2.0 e ARA', '10 modelos para baixar'], footer: 'Guia PromptQuorum' },
  ja: { highlights: ['アブリタレーション解説', 'Heretic 2.0とARA', '10モデルを紹介'], footer: 'PromptQuorumガイド' },
  zh: { highlights: ['Abliteration详解', 'Heretic 2.0与ARA', '10个可下载模型'], footer: 'PromptQuorum 指南' },
  ar: { highlights: ['شرح abliteration', 'Heretic 2.0 و ARA', '10 نماذج للتحميل'], footer: 'دليل PromptQuorum' },
  ko: { highlights: ['Abliteration 설명', 'Heretic 2.0과 ARA', '모델 10개 소개'], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  const failures = []
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  for (const lang of Object.keys(L)) {
    if (only && !only.includes(lang)) continue
    const block = article[lang]
    if (!block) {
      failures.push({ lang, error: 'no locale block in article' })
      continue
    }
    const spec = { lang, title: posterTitle(block.title), highlights: L[lang].highlights, footer: L[lang].footer }
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${SLUG}-hero-${lang}.webp (${spec.title}) ${fs.statSync(webpPath).size} bytes`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log(`\nGenerated: ${generated}/9, failed: ${failures.length}`)
  if (failures.length) process.exitCode = 1
}

main()
