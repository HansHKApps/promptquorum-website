#!/usr/bin/env node
// Hero posters for best-local-llm-apps-mac (9 locales). Sparse Discover-style: title + 3 short highlights.
// Usage: HERO_BASE=http://localhost:3435 node scripts/gen-best-local-llm-apps-mac-heroes.mjs
import fs from 'node:fs'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const SLUG = 'best-local-llm-apps-mac'
const SPECS = {
  en: { title: 'Best Local LLM Apps for Mac (2026)', highlights: ['LM Studio: easiest start', 'Ollama: terminal and API', 'Apple Silicon needs macOS 14+'], footer: 'PromptQuorum Guide' },
  de: { title: 'Beste lokale LLM-Apps für den Mac (2026)', highlights: ['LM Studio: einfachster Start', 'Ollama: Terminal und API', 'Apple Silicon: macOS 14+'], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Meilleures apps LLM locales pour Mac (2026)', highlights: ['LM Studio : départ le plus simple', 'Ollama : terminal et API', 'Apple Silicon : macOS 14+'], footer: 'Guide PromptQuorum' },
  ja: { title: 'Mac向けローカルLLMアプリ（2026年版）', highlights: ['LM Studio：最も簡単', 'Ollama：CLIとAPI', 'macOS 14以降'], footer: 'PromptQuorumガイド' },
  zh: { title: 'Mac最佳本地LLM应用（2026）', highlights: ['LM Studio：最易上手', 'Ollama：命令行与API', 'macOS 14及以上'], footer: 'PromptQuorum 指南' },
  es: { title: 'Mejores apps de LLM local para Mac (2026)', highlights: ['LM Studio: el inicio más fácil', 'Ollama: terminal y API', 'Apple Silicon: macOS 14+'], footer: 'Guía de PromptQuorum' },
  pt: { title: 'Melhores apps de LLM local para Mac (2026)', highlights: ['LM Studio: começo mais fácil', 'Ollama: terminal e API', 'Apple Silicon: macOS 14+'], footer: 'Guia PromptQuorum' },
  ar: { title: 'تطبيقات LLM المحلية لنظام Mac (2026)', highlights: ['LM Studio: أسهل بداية', 'Ollama: الطرفية وAPI', 'macOS 14 فأحدث'], footer: 'دليل PromptQuorum' },
  ko: { title: 'Mac용 로컬 LLM 앱 추천 (2026)', highlights: ['LM Studio: 가장 쉬움', 'Ollama: CLI와 API', 'macOS 14 이상'], footer: 'PromptQuorum 가이드' },
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
