#!/usr/bin/env node
// Hero posters for local-llm-app-alternatives (9 locales). Sparse Discover-style: title + 3 short highlights.
// Usage: HERO_BASE=http://localhost:3435 node scripts/gen-local-llm-app-alternatives-heroes.mjs
import fs from 'node:fs'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const SLUG = 'local-llm-app-alternatives'
const SPECS = {
  en: { title: 'Local LLM App Alternatives (2026)', highlights: ['LM Studio and Ollama', 'Open WebUI and PocketPal AI', '14 apps compared'], footer: 'PromptQuorum Guide' },
  de: { title: 'Alternativen zu lokalen LLM-Apps (2026)', highlights: ['LM Studio und Ollama', 'Open WebUI und PocketPal AI', '14 Apps im Vergleich'], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Alternatives aux apps LLM locales (2026)', highlights: ['LM Studio et Ollama', 'Open WebUI et PocketPal AI', '14 apps comparées'], footer: 'Guide PromptQuorum' },
  ja: { title: 'ローカルLLMアプリの代替（2026年版）', highlights: ['LM StudioとOllama', 'Open WebUIとPocketPal', '14本を比較'], footer: 'PromptQuorumガイド' },
  zh: { title: '本地LLM应用替代方案（2026）', highlights: ['LM Studio与Ollama', 'Open WebUI与PocketPal', '14款对比'], footer: 'PromptQuorum 指南' },
  es: { title: 'Alternativas a apps de LLM local (2026)', highlights: ['LM Studio y Ollama', 'Open WebUI y PocketPal AI', '14 apps comparadas'], footer: 'Guía de PromptQuorum' },
  pt: { title: 'Alternativas a apps de LLM local (2026)', highlights: ['LM Studio e Ollama', 'Open WebUI e PocketPal AI', '14 apps comparados'], footer: 'Guia PromptQuorum' },
  ar: { title: 'بدائل تطبيقات LLM المحلية (2026)', highlights: ['LM Studio وOllama', 'Open WebUI وPocketPal AI', 'مقارنة 14 تطبيقاً'], footer: 'دليل PromptQuorum' },
  ko: { title: '로컬 LLM 앱 대안 (2026)', highlights: ['LM Studio와 Ollama', 'Open WebUI, PocketPal', '14종 비교'], footer: 'PromptQuorum 가이드' },
}

for (const [lang, spec] of Object.entries(SPECS)) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, ...spec }),
  })
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const out = `public/images/${SLUG}-hero-${lang}.webp`
  await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(out)
  console.log(`${out} (${fs.statSync(out).size} bytes)`)
}
