#!/usr/bin/env node
// Hero generator for meetini-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts from src/lib/power-local-llm/apps/meetini.ts (platform, price, license). No version fact: none is published.
// Needs the dev server: npx next dev --webpack --port 3458  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3458'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Meetini Review: Meeting and Interview Assistant for Mac', highlights: ['Apple Silicon Macs only', 'Notes $20, Career $95 a month', 'Audio goes to OpenAI per its notice'],
    facts: [{ label: 'Platforms', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'Price', value: 'From $20/month', tone: 'emerald' }, { label: 'License', value: 'Proprietary', tone: 'slate' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Meetini im Test: Meeting- und Interview-Assistent für den Mac', highlights: ['Nur Macs mit Apple Silicon', 'Notes 20 $, Career 95 $ im Monat', 'Audio geht laut Hinweis an OpenAI'],
    facts: [{ label: 'Plattformen', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Preis', value: 'Ab 20 $/Monat', tone: 'emerald' }, { label: 'Lizenz', value: 'Proprietär', tone: 'slate' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Meetini : assistant de réunions et d’entretiens pour Mac', highlights: ['Mac Apple Silicon uniquement', 'Notes 20 $, Career 95 $ par mois', 'Audio vers OpenAI selon son avis'],
    facts: [{ label: 'Plateformes', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Prix', value: 'Dès 20 $/mois', tone: 'emerald' }, { label: 'Licence', value: 'Propriétaire', tone: 'slate' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Meetini: asistente de reuniones y entrevistas para Mac', highlights: ['Solo Mac con Apple Silicon', 'Notes 20 $, Career 95 $ al mes', 'El audio va a OpenAI según su aviso'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Precio', value: 'Desde 20 $/mes', tone: 'emerald' }, { label: 'Licencia', value: 'Propietaria', tone: 'slate' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Meetini レビュー：Mac向け会議・面接アシスタント', highlights: ['Apple Silicon搭載Macのみ', 'Notes 月20ドル・Career 月95ドル', '通知では音声はOpenAIへ'],
    facts: [{ label: '対応', value: 'Mac（Apple Silicon）', tone: 'slate' }, { label: '価格', value: '月20ドルから', tone: 'emerald' }, { label: 'ライセンス', value: 'プロプライエタリ', tone: 'slate' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Meetini 评测：Mac 会议与面试助手', highlights: ['仅限 Apple Silicon Mac', 'Notes 月付$20，Career 月付$95', '声明称音频发往 OpenAI'],
    facts: [{ label: '平台', value: 'Mac（Apple Silicon）', tone: 'slate' }, { label: '价格', value: '$20/月起', tone: 'emerald' }, { label: '许可证', value: '专有', tone: 'slate' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Meetini: assistente de reuniões e entrevistas para Mac', highlights: ['Só Macs com Apple Silicon', 'Notes US$ 20, Career US$ 95 por mês', 'Áudio vai à OpenAI, diz o aviso'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Preço', value: 'A partir de US$ 20/mês', tone: 'emerald' }, { label: 'Licença', value: 'Proprietária', tone: 'slate' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Meetini: مساعد اجتماعات ومقابلات لأجهزة Mac', highlights: ['أجهزة Mac بمعالج Apple Silicon فقط', 'Notes بـ 20 دولارًا و Career بـ 95 شهريًا', 'الصوت يذهب إلى OpenAI بحسب إشعاره'],
    facts: [{ label: 'المنصات', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'السعر', value: 'من 20 دولارًا شهريًا', tone: 'emerald' }, { label: 'الترخيص', value: 'مملوك', tone: 'slate' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Meetini 리뷰: Mac용 회의·면접 어시스턴트', highlights: ['Apple Silicon Mac 전용', 'Notes 월 $20, Career 월 $95', '안내문상 음성은 OpenAI로'],
    facts: [{ label: '플랫폼', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: '가격', value: '월 $20부터', tone: 'emerald' }, { label: '라이선스', value: '독점', tone: 'slate' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `meetini-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `meetini-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
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
