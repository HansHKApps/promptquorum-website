#!/usr/bin/env node
// Regenerate the 9 localized hero images for the prompt-bite what-is-q4-k-m-quantization.
// The old letter-breakdown heroes showed "avg. 4.5" and an unsourced "best size/quality balance"
// (the article's sourced figure is 4.89 bits per weight for Q4_K_M). Highlights below only use facts
// that are sourced in the article: 4-bit k-quant, perplexity 6.41 vs 6.70 for Q4_0 (llama.cpp
// perplexity README, Llama 3 8B) and the 4.58 GiB file for an 8B model.
// Needs the dev server: npx next dev --webpack --port 3436
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3436'
const SLUG = 'what-is-q4-k-m-quantization-letter-breakdown'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'What Is Q4_K_M Quantization?',
  de: 'Was ist Q4_K_M-Quantisierung?',
  fr: "Qu'est-ce que la quantisation Q4_K_M ?",
  ja: 'Q4_K_M量化とは何ですか？',
  zh: 'Q4_K_M量化是什么？',
  es: '¿Qué es la cuantización Q4_K_M?',
  pt: 'O que é a quantização Q4_K_M?',
  ar: 'ما هو ضغط ⁨Q4⁩_⁨K⁩_⁨M⁩؟',
  ko: 'Q4_K_M 양자화란 무엇입니까?',
}
const HIGHLIGHTS = {
  en: ['4-bit k-quant, medium mix', 'Perplexity 6.41 vs 6.70 (Q4_0)', '4.58 GiB file, 8B model'],
  de: ['4-Bit-k-Quant, mittlere Mischung', 'Perplexität 6,41 vs. 6,70 (Q4_0)', '4,58-GiB-Datei, 8B-Modell'],
  fr: ['k-quant 4 bits, mix moyen', 'Perplexité 6,41 vs 6,70 (Q4_0)', 'Fichier de 4,58 GiB, modèle 8B'],
  ja: ['4ビットK-Quant（M）', 'Q4_0より低いPPL', '4.58 GiB（8B）'],
  zh: ['4位K-Quant（M）', '困惑度低于Q4_0', '4.58 GiB（8B）'],
  es: ['k-quant de 4 bits, mezcla media', 'Perplejidad 6,41 vs 6,70 (Q4_0)', 'Archivo de 4,58 GiB, modelo 8B'],
  pt: ['k-quant de 4 bits, mistura média', 'Perplexidade 6,41 vs 6,70 (Q4_0)', 'Arquivo de 4,58 GiB, modelo 8B'],
  ar: ['⁨k-quant⁩ بـ 4 بت، مزيج متوسط', '⁨Perplexity⁩: ⁨6.41⁩ مقابل ⁨6.70⁩', 'ملف ⁨4.58 GiB⁩ لنموذج ⁨8B⁩'],
  ko: ['4비트 K-Quant(M)', 'Q4_0보다 낮은 PPL', '4.58 GiB(8B)'],
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
