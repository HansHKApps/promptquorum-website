#!/usr/bin/env node
// One-off hero generator for ollama-local-ai-review (all 9 locales).
// Facts strip pulled from src/lib/power-local-llm/apps/ollama-local-ai.ts per CLAUDE.md's mandatory
// FeatureAppPost hero rule: hardware (varies by model — no fixed floor in the listing), price
// (freemium), license (not stated in the listing), platforms (Android).
// Title/subtitle/bullets reuse each locale block of the article itself (markdown stripped, since
// Satori does not render markdown syntax); the article is loaded by transpiling the TS source.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ollama-local-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const stripMd = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

const L = {
  en: { licV: 'Not stated', hw: 'Hardware', hwV: 'Varies by model', price: 'Price', priceV: 'Free + paid tier', lic: 'License', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { licV: 'Nicht angegeben', hw: 'Hardware', hwV: 'Je nach Modell', price: 'Preis', priceV: 'Kostenlos + kostenpflichtige Stufe', lic: 'Lizenz', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { licV: 'Non indiquée', hw: 'Matériel', hwV: 'Selon le modèle', price: 'Prix', priceV: 'Gratuit + offre payante', lic: 'Licence', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { licV: 'No indicada', hw: 'Hardware', hwV: 'Según el modelo', price: 'Precio', priceV: 'Gratis + plan de pago', lic: 'Licencia', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { licV: '記載なし', hw: 'ハードウェア', hwV: 'モデルにより異なる', price: '価格', priceV: '無料＋有料プラン', lic: 'ライセンス', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { licV: '未说明', hw: '硬件', hwV: '因模型而异', price: '价格', priceV: '免费+付费版', lic: '许可证', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { licV: 'Não informada', hw: 'Hardware', hwV: 'Depende do modelo', price: 'Preço', priceV: 'Grátis + plano pago', lic: 'Licença', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { licV: 'غير مذكور', hw: 'العتاد', hwV: 'يختلف حسب النموذج', price: 'السعر', priceV: 'مجاني + خطة مدفوعة', lic: 'الترخيص', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { licV: '명시되지 않음', hw: '하드웨어', hwV: '모델에 따라 다름', price: '가격', priceV: '무료 + 유료 요금제', lic: '라이선스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
}

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
      subtitle: stripMd(block.metaDescription),
      bullets: block.quickAnswerTop[lang].bullets.map(stripMd),
      facts: [
        { label: t.hw, value: t.hwV, tone: 'slate' },
        { label: t.price, value: t.priceV, tone: 'amber' },
        { label: t.lic, value: t.licV, tone: 'slate' },
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
