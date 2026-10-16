#!/usr/bin/env node
// One-off hero generator for honey-llm-review (all 9 locales).
// Sparse Discover poster: localized article title + 3 short highlights + price/platform facts
// (price and platforms from src/lib/power-local-llm/apps/honey-llm.ts; license and hardware are
// not stated by the app, so they are omitted).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'honey-llm-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { hl: ['Runs AI on the phone', 'Chat with your documents', 'Free demo, one-time unlock'], price: 'Price', priceV: 'Freemium', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI läuft auf dem Handy', 'Chat mit Ihren Dokumenten', 'Gratis-Demo, einmal freischalten'], price: 'Preis', priceV: 'Freemium', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["IA sur l'appareil", 'Discutez avec vos documents', 'Démo gratuite, déblocage unique'], price: 'Prix', priceV: 'Freemium', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA en el teléfono', 'Chatea con tus documentos', 'Demo gratis, desbloqueo único'], price: 'Precio', priceV: 'Freemium', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内AIでチャット', '文書への質問に対応', '無料デモ・買い切り解除'], price: '価格', priceV: '基本無料', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['设备端 AI 聊天', '可就文档提问', '免费试用，一次性解锁'], price: '价格', priceV: '免费增值', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA no celular', 'Converse com seus documentos', 'Demo grátis, desbloqueio único'], price: 'Preço', priceV: 'Freemium', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء اصطناعي على الهاتف', 'اسأل عن مستنداتك', 'نسخة مجانية وفتح لمرة واحدة'], price: 'السعر', priceV: 'مجاني جزئيًا', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기 내 AI 채팅', '문서 질의응답 지원', '무료 체험·1회 결제 해제'], price: '가격', priceV: '부분 유료', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
}

const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

async function main() {
  let generated = 0
  const failures = []
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  for (const lang of Object.keys(L)) {
    if (only && !only.includes(lang)) continue
    const block = article[lang]
    if (!block) {
      failures.push({ lang, error: 'no locale block in article' })
      continue
    }
    const t = L[lang]
    const spec = {
      lang,
      title: stripMd(block.title),
      highlights: t.hl,
      facts: [
        { label: t.price, value: t.priceV, tone: 'amber' },
        { label: t.plat, value: 'Android', tone: 'slate' },
      ],
      footer: t.footer,
    }
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${SLUG}-hero-${lang}.webp (${buf.length} -> ${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log(`\nGenerated: ${generated}/9, failed: ${failures.length}`)
  if (failures.length) process.exitCode = 1
}

main()
