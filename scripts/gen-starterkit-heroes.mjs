#!/usr/bin/env node
// Generate the 9 localized hero images for the power-local-llm review self-hosted-ai-starter-kit-review.
// Highlights only use facts sourced in the article: the four bundled projects, the single Docker Compose file
// and the n8n docs statement "For testing only" (docs.n8n.io starter-kit page).
// Needs the dev server: npx next dev --webpack --port 3436
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3436'
const SLUG = 'self-hosted-ai-starter-kit-review'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Self-Hosted AI Starter Kit Review',
  de: 'Self-Hosted AI Starter Kit im Test',
  fr: 'Self-Hosted AI Starter Kit : avis',
  ja: 'Self-Hosted AI Starter Kit レビュー',
  zh: 'Self-Hosted AI Starter Kit 评测',
  es: 'Self-Hosted AI Starter Kit: análisis',
  pt: 'Self-Hosted AI Starter Kit: análise',
  ar: 'مراجعة Self-Hosted AI Starter Kit',
  ko: 'Self-Hosted AI Starter Kit 리뷰',
}
const HIGHLIGHTS = {
  en: ['n8n + Ollama + Qdrant + PostgreSQL', 'One Docker Compose file', 'n8n docs: for testing only'],
  de: ['n8n + Ollama + Qdrant + PostgreSQL', 'Eine Docker-Compose-Datei', 'n8n-Doku: nur zum Testen'],
  fr: ['n8n + Ollama + Qdrant + PostgreSQL', 'Un seul fichier Docker Compose', 'Doc n8n : pour tests uniquement'],
  ja: ['n8n・Ollama・Qdrant', 'Compose 1ファイル', 'n8n公式：テスト用'],
  zh: ['n8n·Ollama·Qdrant', '一个Compose文件', 'n8n文档：仅供测试'],
  es: ['n8n + Ollama + Qdrant + PostgreSQL', 'Un solo archivo Docker Compose', 'Doc. de n8n: solo para pruebas'],
  pt: ['n8n + Ollama + Qdrant + PostgreSQL', 'Um único arquivo Docker Compose', 'Doc. do n8n: apenas para testes'],
  ar: ['⁨n8n⁩ + ⁨Ollama⁩ + ⁨Qdrant⁩ + ⁨PostgreSQL⁩', 'ملف ⁨Docker Compose⁩ واحد', 'وثائق ⁨n8n⁩: للاختبار فقط'],
  ko: ['n8n·Ollama·Qdrant', 'Compose 파일 하나', 'n8n 문서: 테스트 전용'],
}
const FOOTER = {
  en: 'PromptQuorum Review', de: 'PromptQuorum-Rezension', fr: 'Avis PromptQuorum',
  es: 'Análisis de PromptQuorum', pt: 'Análise PromptQuorum', ja: 'PromptQuorumレビュー',
  zh: 'PromptQuorum 评测', ar: 'مراجعة PromptQuorum', ko: 'PromptQuorum 리뷰',
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
