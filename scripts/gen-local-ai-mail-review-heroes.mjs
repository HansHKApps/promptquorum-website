#!/usr/bin/env node
// One-off hero generator for local-ai-mail-review (all 9 locales).
// Sparse Discover poster: localized article title + 3 short highlights + price/platform facts
// (price and platforms from src/lib/power-local-llm/apps/local-ai-mail.ts; license and hardware are
// not stated by the app, so they are omitted rather than shown as "unknown").
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'local-ai-mail-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { hl: ['Runs AI on the phone', 'Very early release', 'Paid, source not published'], price: 'Price', priceV: 'Paid', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI läuft auf dem Handy', 'Sehr frühe Version', 'Kostenpflichtig, Quellcode unveröffentlicht'], price: 'Preis', priceV: 'Kostenpflichtig', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["IA sur l'appareil", 'Version très précoce', 'Payant, code non publié'], price: 'Prix', priceV: 'Payant', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA en el dispositivo', 'Versión muy temprana', 'De pago, código no publicado'], price: 'Precio', priceV: 'De pago', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内AIで要約・翻訳', 'ごく初期のリリース', '有料・ソース非公開'], price: '価格', priceV: '有料', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['设备端 AI 总结翻译', '非常早期的版本', '付费，源码未公开'], price: '价格', priceV: '付费', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA no aparelho', 'Versão muito inicial', 'Pago, código não publicado'], price: 'Preço', priceV: 'Pago', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء اصطناعي على الجهاز', 'إصدار مبكر جدًا', 'مدفوع وبلا شيفرة منشورة'], price: 'السعر', priceV: 'مدفوع', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기 내 AI 요약·번역', '매우 초기 단계 릴리스', '유료, 소스 미공개'], price: '가격', priceV: '유료', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
