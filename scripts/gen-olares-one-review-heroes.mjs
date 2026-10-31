#!/usr/bin/env node
// Hero generator for olares-one-local-ai-review (all 9 locales). Sparse poster: localized title + 3 short highlights + facts.
// Needs the dev server: npx next dev --webpack --port 3435  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const PHOTO = process.env.HERO_PHOTO || 'olares-one-chassis.webp' // Olares-supplied product photo
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const f = (gpu, ram, price, aff) => [
  { label: gpu[0], value: 'RTX 5090 Mobile', tone: 'slate' },
  { label: ram[0], value: '96 GB DDR5', tone: 'slate' },
  { label: price[0], value: '$4,999', tone: 'emerald' },
  { label: aff[0], value: aff[1], tone: 'emerald' },
]

const SPECS = {
  en: { title: 'Olares One Review: RTX 5090 Mobile AI Desktop', highlights: ['24 GB GDDR7 VRAM', '$4,999 official price', 'Not an affiliate page'], facts: f(['GPU'], ['RAM'], ['Price'], ['Affiliate', 'None']), footer: 'PromptQuorum Guide', photo: PHOTO },
  de: { title: 'Olares One im Test: KI-Desktop mit RTX 5090 Mobile', highlights: ['24 GB GDDR7-VRAM', '$4,999 offizieller Preis', 'Keine Affiliate-Seite'], facts: f(['GPU'], ['RAM'], ['Preis'], ['Affiliate', 'Keine']), footer: 'PromptQuorum-Leitfaden', photo: PHOTO },
  fr: { title: 'Test Olares One : mini-PC IA avec RTX 5090 Mobile', highlights: ['24 Go de VRAM GDDR7', '$4,999 prix officiel', 'Page sans affiliation'], facts: f(['GPU'], ['RAM'], ['Prix'], ['Affiliation', 'Aucune']), footer: 'Guide PromptQuorum', photo: PHOTO },
  es: { title: 'Olares One: análisis del PC de IA con RTX 5090 Mobile', highlights: ['24 GB de VRAM GDDR7', '$4,999 precio oficial', 'Sin enlaces de afiliado'], facts: f(['GPU'], ['RAM'], ['Precio'], ['Afiliación', 'Ninguna']), footer: 'Guía de PromptQuorum', photo: PHOTO },
  pt: { title: 'Review do Olares One: PC de IA com RTX 5090 Mobile', highlights: ['24 GB de VRAM GDDR7', '$4,999 preço oficial', 'Sem links de afiliado'], facts: f(['GPU'], ['RAM'], ['Preço'], ['Afiliação', 'Nenhuma']), footer: 'Guia PromptQuorum', photo: PHOTO },
  ja: { title: 'Olares Oneレビュー：RTX 5090 Mobile搭載AIデスクトップ', highlights: ['VRAM 24GB GDDR7', '公式価格$4,999', 'アフィリエイトなし'], facts: f(['GPU'], ['RAM'], ['価格'], ['提携', 'なし']), footer: 'PromptQuorumガイド', photo: PHOTO },
  zh: { title: 'Olares One评测：搭载RTX 5090 Mobile的AI主机', highlights: ['24GB GDDR7显存', '官方售价$4,999', '非联盟推广页面'], facts: f(['GPU'], ['内存'], ['价格'], ['联盟', '无']), footer: 'PromptQuorum 指南', photo: PHOTO },
  ko: { title: 'Olares One 리뷰: RTX 5090 Mobile AI 데스크톱', highlights: ['24GB GDDR7 VRAM', '공식 가격 $4,999', '제휴 링크 없음'], facts: f(['GPU'], ['RAM'], ['가격'], ['제휴', '없음']), footer: 'PromptQuorum 가이드', photo: PHOTO },
  ar: { title: 'مراجعة Olares One: كمبيوتر ذكاء اصطناعي بـ RTX 5090 Mobile', highlights: ['24 GB من VRAM نوع GDDR7', 'السعر الرسمي $4,999', 'ليست صفحة تسويق بالعمولة'], facts: f(['المعالج الرسومي'], ['الذاكرة'], ['السعر'], ['العمولة', 'لا شيء']), footer: 'دليل PromptQuorum', photo: PHOTO },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `olares-one-local-ai-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, ...spec }) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const pngPath = path.join(IMAGES_DIR, `olares-one-local-ai-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, Buffer.from(await res.arrayBuffer()))
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`  ${webpPath}`)
      generated++
    } catch (e) {
      console.error(`FAILED ${lang}:`, e.message)
    }
  }
  console.log(`done: ${generated}`)
}
main()
