#!/usr/bin/env node
// Regenerate the 9 localized hero images for local-llms/best-local-llms-business-writing (2026-11-19 refresh).
// Needs the dev server: npx next dev --webpack --port 3441
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3441'
const SLUG = 'best-local-llms-business-writing-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Best Local LLM for Email & Business Writing',
  de: 'Bestes lokales LLM für E-Mails & Geschäftstexte',
  fr: 'Meilleur LLM local pour e-mails et documents pro',
  ja: 'メール・ビジネス文書に最適なローカルLLM',
  zh: '写邮件和商务文档的最佳本地LLM',
  es: 'Mejor LLM local para correos y documentos',
  pt: 'Melhor LLM local para e-mails e documentos',
  ar: 'أفضل نموذج محلي لكتابة البريد ومستندات الأعمال',
  ko: '이메일·비즈니스 문서용 최고의 로컬 LLM',
}
const HIGHLIGHTS = {
  en: ['Qwen3.8-27B: 18 GB, top pick', 'Mistral Small 3.2: 15 GB', 'Gemma 4 12B: 8 GB, light'],
  de: ['Qwen3.8-27B: 18 GB, erste Wahl', 'Mistral Small 3.2: 15 GB', 'Gemma 4 12B: 8 GB, leicht'],
  fr: ['Qwen3.8-27B : 18 Go, premier choix', 'Mistral Small 3.2 : 15 Go', 'Gemma 4 12B : 8 Go, léger'],
  ja: ['Qwen3.8-27B：18 GB', 'Mistral Small 3.2：15 GB', 'Gemma 4 12B：8 GB'],
  zh: ['Qwen3.8-27B：18 GB', 'Mistral Small 3.2：15 GB', 'Gemma 4 12B：8 GB'],
  es: ['Qwen3.8-27B: 18 GB, mejor opción', 'Mistral Small 3.2: 15 GB', 'Gemma 4 12B: 8 GB, ligero'],
  pt: ['Qwen3.8-27B: 18 GB, melhor opção', 'Mistral Small 3.2: 15 GB', 'Gemma 4 12B: 8 GB, leve'],
  ar: ['⁨Qwen3.8-27B⁩: ⁨18 GB⁩', '⁨Mistral Small 3.2⁩: ⁨15 GB⁩', '⁨Gemma 4 12B⁩: ⁨8 GB⁩'],
  ko: ['Qwen3.8-27B: 18 GB', 'Mistral Small 3.2: 15 GB', 'Gemma 4 12B: 8 GB'],
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

let failed = 0
for (const lang of Object.keys(TITLE)) {
  try { await generateOne(lang) } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
