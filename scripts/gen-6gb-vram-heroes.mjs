#!/usr/bin/env node
// Regenerate the 9 localized hero images for the prompt-bite best-local-llm-6gb-vram.
// Highlights mirror the quick-answer bullets of each locale block (sparse Discover poster, <=7 words / <=16 CJK chars each).
// Needs the dev server: npx next dev --webpack --port 3432
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3432'
const SLUG = 'best-local-llm-6gb-vram-model-comparison'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Best Local LLM for 6 GB VRAM?',
  de: 'Bestes lokales LLM für 6 GB VRAM?',
  fr: 'Quel est le meilleur LLM local pour 6 Go de VRAM ?',
  ja: '6 GB VRAMに最適なローカルLLMは？',
  zh: '6 GB显存最佳本地LLM是什么？',
  es: '¿Mejor LLM local para 6 GB de VRAM?',
  pt: 'Melhor LLM local para 6 GB de VRAM?',
  ar: 'أفضل نموذج لغوي محلي لـ ⁨6 GB⁩ من ⁨VRAM⁩؟',
  ko: '6 GB VRAM에 최적인 로컬 LLM은?',
}
const HIGHLIGHTS = {
  en: ['Qwen3.5 4B: 3.3 GB, best fit', 'Qwen3 8B: 5.2 GB, tight', 'Phi-4-mini: 2.5 GB, lightest'],
  de: ['Qwen3.5 4B: 3,3 GB, beste Wahl', 'Qwen3 8B: 5,2 GB, knapp', 'Phi-4-mini: 2,5 GB, leichtest'],
  fr: ['Qwen3.5 4B : 3,3 Go, idéal', 'Qwen3 8B : 5,2 Go, juste', 'Phi-4-mini : 2,5 Go, léger'],
  ja: ['Qwen3.5 4B：3.3 GB', 'Qwen3 8B：5.2 GB', 'Phi-4-mini：2.5 GB'],
  zh: ['Qwen3.5 4B：3.3 GB', 'Qwen3 8B：5.2 GB', 'Phi-4-mini：2.5 GB'],
  es: ['Qwen3.5 4B: 3,3 GB, ideal', 'Qwen3 8B: 5,2 GB, justo', 'Phi-4-mini: 2,5 GB, ligero'],
  pt: ['Qwen3.5 4B: 3,3 GB, ideal', 'Qwen3 8B: 5,2 GB, apertado', 'Phi-4-mini: 2,5 GB, leve'],
  ar: ['⁨Qwen3.5 4B⁩: ⁨3.3 GB⁩', '⁨Qwen3 8B⁩: ⁨5.2 GB⁩', '⁨Phi-4-mini⁩: ⁨2.5 GB⁩'],
  ko: ['Qwen3.5 4B: 3.3 GB', 'Qwen3 8B: 5.2 GB', 'Phi-4-mini: 2.5 GB'],
}
const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
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
