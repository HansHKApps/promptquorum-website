#!/usr/bin/env node
// Regenerate the 9 localized hero images for local-llm-pc-build-1000 (used RTX 3060 12GB build, ~$910).
// Old heroes showed a stale RTX 5060 Ti 16GB / ~$1,010 build. Sparse Discover poster: title + 3 short lines.
// Needs the dev server: npx next dev --webpack --port 3091
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3091'
const SLUG = 'local-llm-pc-build-1000-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Local LLM PC Build Under $1,000 With a Used GPU (2026)',
  de: 'Lokaler LLM-PC-Build unter 1.000 $ mit gebrauchter GPU (2026)',
  fr: "PC pour LLM local à moins de $1,000 avec GPU d'occasion (2026)",
  es: 'Build de PC para LLM local por menos de $1,000 con GPU usada (2026)',
  pt: 'Build de PC para LLM local por menos de $1.000 com GPU usada (2026)',
  ja: '中古GPUで$1,000以下のローカルLLM PCビルド（2026年）',
  zh: '2026年二手显卡$1,000以下本地LLM PC构建',
  ko: '중고 GPU로 $1,000 미만 로컬 LLM PC 빌드(2026)',
  ar: 'تجميع كمبيوتر ⁨LLM⁩ محلي بأقل من ⁨1,000⁩ دولار مع ⁨GPU⁩ مستعملة (2026)',
}
const HIGHLIGHTS = {
  en: ['About $910 with a used RTX 3060 12GB', 'Runs 7B-14B models at Q4', '32B does not fit in 12GB'],
  de: ['Ca. 910 $ mit gebrauchter RTX 3060 12GB', 'Führt 7B-14B-Modelle bei Q4 aus', '32B passt nicht in 12 GB'],
  fr: ["Environ $910 avec une RTX 3060 12 Go d'occasion", 'Modèles 7B-14B en Q4', 'Le 32B ne tient pas dans 12 Go'],
  es: ['Unos $910 con una RTX 3060 12GB usada', 'Modelos de 7B a 14B en Q4', '32B no cabe en 12GB'],
  pt: ['Cerca de $910 com RTX 3060 12GB usada', 'Modelos de 7B a 14B em Q4', '32B não cabe em 12GB'],
  ja: ['中古RTX3060 12GBで約$910', '7B〜14BモデルをQ4で実行', '32Bは12GBに収まりません'],
  zh: ['二手RTX3060 12GB约$910', 'Q4下运行7B-14B模型', '32B无法放入12GB'],
  ko: ['중고 3060 12GB 약 $910', '7B~14B 모델을 Q4에서 실행', '32B는 12GB에 들어가지 않음'],
  ar: ['نحو ⁨910⁩ دولارات مع ⁨RTX 3060 12GB⁩ مستعملة', 'يشغّل ⁨7B-14B⁩ بتكميم ⁨Q4⁩', '⁨32B⁩ لا يتسع في ⁨12GB⁩'],
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

const langs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(TITLE)
let failed = 0
for (const lang of langs) {
  try { await generateOne(lang) } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
