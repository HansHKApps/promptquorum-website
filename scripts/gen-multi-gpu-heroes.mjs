#!/usr/bin/env node
// Regenerate the 9 localized hero images for multi-gpu-local-llms. Old heroes carried stale speed/price/percentage claims
// (100 tok/sec, $3,600, 5-10% penalty). Sparse Discover poster: title + 3 short lines, no speeds/prices/percentages.
// Needs the dev server: npx next dev --webpack --port 3091
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3091'
const SLUG = 'multi-gpu-local-llms-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Multi-GPU Local LLMs 2026: Run 70B Models Across 2+ GPUs with vLLM and Ollama',
  de: 'Multi-GPU Lokale LLMs 2026: 70B-Modelle auf 2+ GPUs mit vLLM und Ollama ausführen',
  fr: 'Multi-GPU LLMs Locaux 2026 : Exécuter les Modèles 70B sur 2+ GPUs avec vLLM et Ollama',
  es: 'Multi-GPU LLMs Locales 2026: Ejecuta Modelos 70B en 2+ GPUs con vLLM y Ollama',
  pt: 'Multi-GPU LLMs Locais 2026: Execute Modelos 70B em 2+ GPUs com vLLM e Ollama',
  ja: 'マルチGPU ローカルLLMs 2026: 2+ GPUsで70Bモデルを実行する（vLLM + Ollama）',
  zh: '多GPU本地LLMs 2026：在2+个GPU上运行70B模型（vLLM和Ollama）',
  ko: '멀티 GPU 로컬 LLM 2026: vLLM과 Ollama로 2개 이상의 GPU에서 70B 모델 실행하기',
  ar: 'نماذج ⁨LLM⁩ المحلية متعددة ⁨GPU 2026⁩: شغّل نماذج ⁨70B⁩ على ⁨2+ GPU⁩ بـ ⁨vLLM⁩ و⁨Ollama⁩',
}
const HIGHLIGHTS = {
  en: ['Two RTX 4090s (48 GB) hold 70B at Q4', 'vLLM and Ollama compared', 'Speed depends on engine and context'],
  de: ['Zwei RTX 4090 (48 GB) fassen 70B in Q4', 'vLLM und Ollama im Überblick', 'Tempo hängt von Engine und Kontext ab'],
  fr: ['Deux RTX 4090 (48 Go) contiennent 70B en Q4', 'vLLM et Ollama en bref', 'Vitesse selon moteur et contexte'],
  es: ['Dos RTX 4090 (48 GB) alojan 70B en Q4', 'vLLM y Ollama', 'La velocidad depende del motor'],
  pt: ['Duas RTX 4090 (48 GB) comportam 70B em Q4', 'vLLM e Ollama', 'Velocidade depende do motor'],
  ja: ['RTX 4090 2枚で70BをQ4保持', 'vLLMとOllamaを比較', '速度は環境で変わります'],
  zh: ['2块RTX 4090可容纳Q4的70B', 'vLLM与Ollama对比', '速度取决于引擎与上下文'],
  ko: ['RTX 4090 2개로 70B Q4', 'vLLM과 Ollama 비교', '속도는 환경에 따라 다름'],
  ar: ['بطاقتا RTX 4090 تحتويان 70B بصيغة Q4', 'مقارنة vLLM وOllama', 'السرعة تعتمد على المحرك'],
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
