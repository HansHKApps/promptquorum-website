#!/usr/bin/env node
// Hero generator for local-ai-workstations-strix-halo-vs-dgx-spark (all 9 locales).
// Requires a dev server: npx next dev --webpack --port <port>  (HERO_BASE overrides the base URL).
import sharp from 'sharp'
import { writeFile, unlink } from 'node:fs/promises'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const SLUG = 'local-ai-workstations-strix-halo-vs-dgx-spark'
const OUT_DIR = 'public/images'

const SPECS = {
  en: {
    title: 'Local AI Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
    highlights: ['128–192 GB unified memory', 'Spark won the independent test', 'AMD cheapest at 128 GB'],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Lokale KI-Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
    highlights: ['128–192 GB Unified Memory', 'Spark gewann den unabhängigen Test', 'AMD bei 128 GB am günstigsten'],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Stations de travail IA locales : AMD Strix Halo contre NVIDIA DGX Spark',
    highlights: ['128 à 192 Go de mémoire unifiée', 'Spark gagne le test indépendant', 'AMD le moins cher à 128 Go'],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'ローカルAIワークステーション: AMD Strix Halo vs. NVIDIA DGX Spark',
    highlights: ['128〜192GBメモリ', '独立テストはSparkが優勢', '128GBはAMDが最安'],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: '本地AI工作站：AMD Strix Halo对比NVIDIA DGX Spark',
    highlights: ['128–192 GB统一内存', '独立测试Spark领先', '128 GB档AMD最便宜'],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Estaciones de trabajo de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
    highlights: ['128–192 GB de memoria unificada', 'Spark ganó la prueba independiente', 'AMD, más barato con 128 GB'],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Workstations de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
    highlights: ['128–192 GB de memória unificada', 'Spark venceu o teste independente', 'AMD mais barato com 128 GB'],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'محطات عمل الذكاء الاصطناعي المحلي: AMD Strix Halo مقابل NVIDIA DGX Spark',
    highlights: ['ذاكرة موحدة 128–192 GB', 'Spark تفوق في الاختبار المستقل', 'AMD الأرخص عند 128 GB'],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '로컬 AI 워크스테이션: AMD Strix Halo 대 NVIDIA DGX Spark',
    highlights: ['128–192GB 통합 메모리', '독립 테스트는 Spark 우세', '128GB는 AMD가 최저가'],
    footer: 'PromptQuorum 가이드',
  },
}

for (const [lang, spec] of Object.entries(SPECS)) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, ...spec }),
  })
  if (!res.ok) {
    console.error(`[${lang}] FAILED ${res.status}: ${await res.text()}`)
    process.exitCode = 1
    continue
  }
  const png = Buffer.from(await res.arrayBuffer())
  const pngPath = `${OUT_DIR}/${SLUG}-hero-${lang}.png`
  const webpPath = `${OUT_DIR}/${SLUG}-hero-${lang}.webp`
  await writeFile(pngPath, png)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  await unlink(pngPath)
  console.log(`[${lang}] OK -> ${webpPath}`)
}
