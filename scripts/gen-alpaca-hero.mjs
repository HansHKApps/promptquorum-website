#!/usr/bin/env node
// One-off hero image generator for the Alpaca review article (all 9 locales).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'alpaca-review'

const SPECS = {
  en: {
    title: 'Alpaca Review: GNOME Chat Client for Ollama',
    highlights: ['Free & open source', 'GPL-3.0, Linux only', 'Connects to Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'Free' }, { value: 'Linux only' }],
    footer: 'PromptQuorum Review',
  },
  de: {
    title: 'Alpaca Review: GNOME-Chat-Client für Ollama',
    highlights: ['Kostenlos & quelloffen', 'GPL-3.0, nur Linux', 'Verbindet sich mit Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'Kostenlos' }, { value: 'Nur Linux' }],
    footer: 'PromptQuorum Review',
  },
  fr: {
    title: 'Alpaca : client de chat GNOME pour Ollama',
    highlights: ['Gratuit et open source', 'GPL-3.0, Linux uniquement', 'Se connecte à Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'Gratuit' }, { value: 'Linux uniquement' }],
    footer: 'Avis PromptQuorum',
  },
  es: {
    title: 'Alpaca: cliente de chat GNOME para Ollama',
    highlights: ['Gratis y de código abierto', 'GPL-3.0, solo Linux', 'Se conecta a Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'Gratis' }, { value: 'Solo Linux' }],
    footer: 'Review de PromptQuorum',
  },
  pt: {
    title: 'Alpaca: cliente de chat GNOME para o Ollama',
    highlights: ['Gratuito e código aberto', 'GPL-3.0, somente Linux', 'Conecta-se ao Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'Gratuito' }, { value: 'Somente Linux' }],
    footer: 'Análise PromptQuorum',
  },
  ja: {
    title: 'Alpacaレビュー：Ollama向けGNOMEチャットクライアント',
    highlights: ['無料・オープンソース', 'GPL-3.0、Linux専用', 'Ollamaに接続'],
    facts: [{ value: 'GPL-3.0' }, { value: '無料' }, { value: 'Linux専用' }],
    footer: 'PromptQuorumレビュー',
  },
  zh: {
    title: 'Alpaca 评测：面向 Ollama 的 GNOME 聊天客户端',
    highlights: ['免费开源', 'GPL-3.0，仅限 Linux', '连接 Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: '免费' }, { value: '仅限 Linux' }],
    footer: 'PromptQuorum 评测',
  },
  ar: {
    title: 'مراجعة Alpaca: عميل محادثة GNOME لـ Ollama',
    highlights: ['مجاني ومفتوح المصدر', 'GPL-3.0، لينكس فقط', 'يتصل بـ Ollama'],
    facts: [{ value: 'GPL-3.0' }, { value: 'مجاني' }, { value: 'لينكس فقط' }],
    footer: 'مراجعة PromptQuorum',
  },
  ko: {
    title: 'Alpaca 리뷰: Ollama용 GNOME 채팅 클라이언트',
    highlights: ['무료 오픈소스', 'GPL-3.0, Linux 전용', 'Ollama에 연결'],
    facts: [{ value: 'GPL-3.0' }, { value: '무료' }, { value: 'Linux 전용' }],
    footer: 'PromptQuorum 리뷰',
  },
}

async function generateOne(lang, spec) {
  const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lang,
      title: spec.title,
      highlights: spec.highlights,
      facts: spec.facts,
      footer: spec.footer,
    }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
  fs.writeFileSync(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)
  console.log(`  OK ${SLUG}-hero-${lang}.webp (${fs.statSync(webpPath).size} bytes)`)
}

async function main() {
  const failures = []
  for (const [lang, spec] of Object.entries(SPECS)) {
    try {
      await generateOne(lang, spec)
    } catch (err) {
      console.error(`  FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  if (failures.length) {
    console.log('Failures:', failures)
    process.exitCode = 1
  } else {
    console.log('All 9 hero images generated.')
  }
}

main()
