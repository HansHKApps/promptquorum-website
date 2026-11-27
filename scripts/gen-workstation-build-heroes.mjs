#!/usr/bin/env node
// Regenerate the 9 localized hero images for local-llm-workstation-build.
// Old heroes showed a stale Threadripper 7970X / "used pair ~$2,200-2,600" build.
// Sparse Discover poster: localized title + 3 short highlights (<=7 words, <=16 chars for ja/zh/ko).
// Needs the dev server: npx next dev --webpack --port 3462 (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3462'
const SLUG = 'local-llm-workstation-build-overview'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const TITLE = {
  en: 'Local LLM PC and Workstation Build (2026): GPUs, RAM, PSU and Costs for 70B Models',
  de: 'PC für lokale LLM bauen (2026): GPUs, RAM, Netzteil und Kosten für 70B-Modelle',
  fr: 'Station de travail LLM local (2026) : GPU, RAM, alimentation et coûts pour modèles 70B',
  ja: 'ローカルLLMワークステーションの自作ガイド（2026年）：70Bモデル向けGPU・RAM・電源・費用',
  zh: '本地LLM工作站装机指南（2026）：70B模型所需的GPU、内存、电源与成本',
  es: 'Estación de trabajo para LLM local (2026): GPU, RAM, PSU y costos para modelos de 70B',
  pt: 'Estação de trabalho para LLM local (2026): GPUs, RAM, fonte e custos para modelos 70B',
  ar: 'تجميع محطة عمل لنماذج ⁨LLM⁩ محلية (2026): بطاقات ⁨GPU⁩ وذاكرة ⁨RAM⁩ ومزود الطاقة والتكلفة لنماذج ⁨70B⁩',
  ko: '로컬 LLM 워크스테이션 구축 (2026): 70B 모델용 GPU, RAM, PSU, 비용',
}
const HIGHLIGHTS = {
  en: ['48 GB of VRAM holds 70B at Q4', '2× used RTX 3090: $3,000–3,450', 'No NVLink on RTX 4090 or 5090'],
  de: ['48 GB VRAM für 70B in Q4', '2× RTX 3090 gebraucht: $3,000–3,450', 'Kein NVLink bei RTX 4090/5090'],
  fr: ['48 GB de VRAM pour le 70B en Q4', "2× RTX 3090 d'occasion : $3,000–3,450", 'Pas de NVLink sur RTX 4090/5090'],
  ja: ['70BにはVRAM 48GB', '4090/5090はNVLink非対応', '電源は定格の約1.2倍'],
  zh: ['70B需约48GB显存', 'RTX 4090/5090无NVLink', '电源按额定功率×1.2'],
  es: ['48 GB de VRAM para 70B en Q4', '2× RTX 3090 usadas: $3,000–3,450', 'Sin NVLink en RTX 4090/5090'],
  pt: ['48 GB de VRAM para 70B em Q4', '2× RTX 3090 usadas: $3,000–3,450', 'Sem NVLink na RTX 4090/5090'],
  ar: ['⁨48 GB⁩ من ⁨VRAM⁩ لنموذج ⁨70B⁩ بتكميم ⁨Q4⁩', '⁨2× RTX 3090⁩ مستعملة: ⁨$3,000–3,450⁩', 'لا ⁨NVLink⁩ في ⁨RTX 4090/5090⁩'],
  ko: ['70B에는 VRAM 48GB', '4090/5090은 NVLink 없음', '전원은 정격 합계×1.2'],
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
