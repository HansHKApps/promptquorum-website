#!/usr/bin/env node
// Regenerates the 9 localized hero posters for smart-home/history-of-smart-home-technology
// after the 2026-10-18 retitle (history of home automation).
// Usage: node scripts/gen-history-smart-home-heroes.mjs [port] — needs `npx next dev --webpack --port <port>` running.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const PORT = process.argv[2] || '3432'
const BASE = `http://localhost:${PORT}`
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')
const ARTICLE = path.join(process.cwd(), 'src', 'lib', 'smart-home', 'articles', 'history-of-smart-home-technology.ts')
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}

const HIGHLIGHTS = {
  en: ['1966: first smart home', 'X10, Z-Wave, Matter', 'Back to local AI'],
  de: ['1966: erstes Smart Home', 'X10, Z-Wave, Matter', 'Zurück zur lokalen KI'],
  fr: ['1966 : première maison connectée', 'X10, Z-Wave, Matter', 'Retour à l’IA locale'],
  es: ['1966: primera casa inteligente', 'X10, Z-Wave, Matter', 'Vuelta a la IA local'],
  pt: ['1966: primeira casa inteligente', 'X10, Z-Wave, Matter', 'Volta à IA local'],
  ja: ['1966年 最初の家', 'X10・Z-Wave・Matter', 'ローカルAIへ回帰'],
  zh: ['1966年第一个智能家居', 'X10、Z-Wave、Matter', '回归本地AI'],
  ko: ['1966년 최초의 스마트홈', 'X10·Z-Wave·Matter', '로컬 AI로 회귀'],
  ar: ['1966: أول منزل ذكي', 'X10 وZ-Wave وMatter', 'العودة إلى الذكاء المحلي'],
}

function titleOf(lang) {
  let cur = null
  for (const ln of fs.readFileSync(ARTICLE, 'utf8').split('\n')) {
    const m = ln.match(/^  ([a-z]{2}): \{/)
    if (m) cur = m[1]
    const t = ln.match(/^    title: (.*),$/)
    if (t && cur === lang) return new Function(`return ${t[1]}`)()
  }
  throw new Error(`no title for ${lang}`)
}

let failed = 0
for (const lang of LANGS) {
  const spec = { lang, title: titleOf(lang), highlights: HIGHLIGHTS[lang], footer: FOOTER[lang] }
  const webp = path.join(IMAGES_DIR, `history-of-smart-home-technology-overview-hero-${lang}.webp`)
  const png = webp.replace(/\.webp$/, '.png')
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    fs.writeFileSync(png, Buffer.from(await res.arrayBuffer()))
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(webp)
    fs.unlinkSync(png)
    console.log(`OK ${path.basename(webp)} (${fs.statSync(webp).size} bytes)`)
  } catch (err) {
    failed++
    console.error(`FAIL ${lang}: ${err.message}`)
  }
}
process.exitCode = failed ? 1 : 0
