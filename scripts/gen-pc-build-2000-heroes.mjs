#!/usr/bin/env node
// Regenerate the 9 localized hero images for local-llm-pc-build-2000 (dual RTX 5060 Ti 16GB build, ~$2,680 parts list).
// Old heroes showed the pre-rewrite 70B claim / $2,000 title. Sparse Discover poster: title + 3 short lines.
// Needs the dev server: npx next dev --webpack --port 3091
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3091'
const SLUG = 'local-llm-pc-build-2000-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Dual-GPU Local LLM PC Build (2026): 2x RTX 5060 Ti 16GB, About $2,700',
  de: 'Dual-GPU-PC für lokale LLMs (2026): 2x RTX 5060 Ti 16GB, ca. 2.700 $',
  fr: 'PC pour LLM local à double GPU (2026) : 2x RTX 5060 Ti 16 Go, environ $2,700',
  es: 'Build de PC para LLM Local con Doble GPU (2026): 2x RTX 5060 Ti 16GB, Unos $2,700',
  pt: 'Build de PC para LLM local com GPU dupla (2026): 2x RTX 5060 Ti 16GB, cerca de $2.700',
  ja: 'デュアルGPUローカルLLM PCビルド（2026年）：RTX 5060 Ti 16GB×2、約$2,700',
  zh: '双GPU本地LLM PC构建（2026）：2张RTX 5060 Ti 16GB，约$2,700',
  ko: '듀얼 GPU 로컬 LLM PC 빌드(2026): RTX 5060 Ti 16GB 2장, 약 $2,700',
  ar: 'تجميع كمبيوتر ⁨LLM⁩ محلي بكرتي ⁨GPU⁩',
}
const HIGHLIGHTS = {
  en: ['Two RTX 5060 Ti 16GB = 32GB VRAM', 'About $2,680 estimated parts list', '32B fits across both GPUs, 70B Q4 does not'],
  de: ['Zwei RTX 5060 Ti 16GB = 32GB VRAM', 'Teileliste ca. 2.680 $ (Schätzung)', '32B passt auf beide GPUs, 70B Q4 nicht'],
  fr: ['Deux RTX 5060 Ti = 32 Go de VRAM', 'Pièces : environ $2,680 (estimation)', '32B tient sur les deux GPU, 70B Q4 non'],
  es: ['Dos RTX 5060 Ti 16GB = 32GB de VRAM', 'Lista de piezas: unos $2,680 (estimado)', '32B cabe en ambas GPU, 70B Q4 no'],
  pt: ['Duas RTX 5060 Ti 16GB = 32GB de VRAM', 'Lista de peças: cerca de $2.680 (estimado)', '32B cabe nas duas GPUs, 70B Q4 não'],
  ja: ['RTX5060Ti×2=VRAM32GB', '部品リスト概算 約$2,680', '32Bは収まり70B Q4は不可'],
  zh: ['双RTX5060Ti=32GB显存', '配件清单估算约$2,680', '32B可跨双GPU，70B Q4不行'],
  ko: ['RTX 5060 Ti 2장=32GB', '부품 목록 약 $2,680(추정)', '32B 가능, 70B Q4는 불가'],
  ar: ['بطاقتان ⁨RTX 5060 Ti 16GB⁩ = ⁨32GB VRAM⁩', 'قائمة القطع نحو ⁨2,680⁩ دولار (تقدير)', '⁨32B⁩ يتسع على البطاقتين، أما ⁨70B Q4⁩ فلا'],
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
