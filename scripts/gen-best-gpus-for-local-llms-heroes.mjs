#!/usr/bin/env node
// Regenerate the 9 localized hero images for best-gpus-for-local-llms (page-updater refresh).
// Highlights mirror the article's own key takeaways (sparse Discover poster, <=7 words / <=16 CJK chars each).
// Needs the dev server: npx next dev --webpack --port 3441
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3441'
const SLUG = 'best-gpus-for-local-llms-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Best GPUs for Local LLMs in 2026: VRAM Tiers, Speed and Prices',
  de: 'Beste GPUs für lokale LLMs 2026: VRAM-Stufen, Geschwindigkeit und Preise',
  fr: 'Meilleurs GPU pour LLM locaux en 2026 : paliers de VRAM, vitesse et prix',
  ja: 'ローカルLLM向けGPUおすすめ2026：VRAM別の速度と価格',
  zh: '2026本地LLM显卡推荐：按显存分档看速度与价格',
  es: 'Mejores GPUs para LLMs locales en 2026: niveles de VRAM, velocidad y precios',
  pt: 'Melhores GPUs para LLMs locais em 2026: faixas de VRAM, velocidade e preços',
  ar: 'أفضل ⁨GPU⁩ لنماذج ⁨LLM⁩ المحلية في 2026: فئات ⁨VRAM⁩ والسرعة والأسعار',
  ko: '2026 로컬 LLM GPU 추천: VRAM별 속도와 가격',
}
const HIGHLIGHTS = {
  en: ['Pick the VRAM tier first', '5070 Ti 177 vs 4090 186 tok/s', 'Prices far above launch MSRP'],
  de: ['Zuerst die VRAM-Stufe wählen', '5070 Ti 177 vs. 4090 186 Token/s', 'Preise weit über der UVP'],
  fr: ['D’abord le palier de VRAM', '5070 Ti 177 contre 4090 186 tok/s', 'Prix très au-dessus du conseillé'],
  ja: ['まずVRAM区分で選ぶ', '7B速度差は約5%', '価格は発売時より高騰'],
  zh: ['先按显存档位选卡', '7B速度差距约5%', '价格远高于建议价'],
  es: ['Elige primero el nivel de VRAM', '5070 Ti 177 vs 4090 186 tok/s', 'Precios muy por encima del MSRP'],
  pt: ['Escolha primeiro a faixa de VRAM', '5070 Ti 177 vs 4090 186 tok/s', 'Preços bem acima do MSRP'],
  ar: ['اختر فئة ⁨VRAM⁩ أولًا', '⁨5070 Ti⁩ 177 مقابل ⁨4090⁩ 186', 'الأسعار أعلى من الموصى به'],
  ko: ['VRAM 구간부터 선택', '7B 속도 차이 약 5%', '가격은 권장가보다 높음'],
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
