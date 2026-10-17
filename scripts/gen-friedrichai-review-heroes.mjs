#!/usr/bin/env node
// One-off hero generator for friedrichai-review (all 9 locales).
// Facts strip pulled from src/lib/power-local-llm/apps/friedrichai.ts per CLAUDE.md's mandatory
// FeatureAppPost hero rule: hardware (16 GB RAM minimum per Steam), price ($9.99 USD), license (proprietary), platforms (Windows).
// Title/subtitle/bullets reuse each locale block of the article itself (markdown stripped, since
// Satori does not render markdown syntax); the article is loaded by transpiling the TS source.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'friedrichai-review'
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
  en: { hwV: '16 GB RAM+', licV: 'Proprietary', hw: 'Hardware', price: 'Price', priceV: '$9.99', lic: 'License', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hwV: '16 GB RAM+', licV: 'Proprietär', hw: 'Hardware', price: 'Preis', priceV: '9,99 $', lic: 'Lizenz', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hwV: '16 Go de RAM+', licV: 'Propriétaire', hw: 'Matériel', price: 'Prix', priceV: '9,99 $', lic: 'Licence', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hwV: '16 GB de RAM+', licV: 'Propietaria', hw: 'Hardware', price: 'Precio', priceV: '9,99 $', lic: 'Licencia', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hwV: 'RAM 16GB以上', licV: 'プロプライエタリ', hw: 'ハードウェア', price: '価格', priceV: '$9.99', lic: 'ライセンス', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hwV: '16 GB 内存起', licV: '专有', hw: '硬件', price: '价格', priceV: '$9.99', lic: '许可证', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hwV: '16 GB de RAM+', licV: 'Proprietária', hw: 'Hardware', price: 'Preço', priceV: 'US$ 9,99', lic: 'Licença', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hwV: '16 جيجابايت RAM+', licV: 'مملوك', hw: 'العتاد', price: 'السعر', priceV: '9.99 $', lic: 'الترخيص', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hwV: 'RAM 16GB 이상', licV: '독점', hw: '하드웨어', price: '가격', priceV: '$9.99', lic: '라이선스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
        { label: t.plat, value: 'Windows', tone: 'slate' },
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
