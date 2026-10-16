#!/usr/bin/env node
// One-off hero generator for spiritbox-ultimate-review (all 9 locales).
// Facts strip pulled from src/lib/power-local-llm/apps/friedrichai.ts per CLAUDE.md's mandatory
// FeatureAppPost hero rule: hardware (varies by LM Studio model; no RAM/VRAM minimum established), price ($199 USD one-time), license (proprietary), platforms (Windows).
// Title/subtitle/bullets reuse each locale block of the article itself (markdown stripped, since
// Satori does not render markdown syntax); the article is loaded by transpiling the TS source.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'spiritbox-ultimate-review'
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
  en: { hwV: 'Model-dependent', licV: 'Proprietary', hw: 'Hardware', price: 'Price', priceV: '$199', lic: 'License', plat: 'Platforms', footer: 'PromptQuorum Guide', hl: ['Windows Early Access R6', 'Needs Docker + LM Studio', 'Testing limits explained'] },
  de: { hwV: 'Modellabhängig', licV: 'Proprietär', hw: 'Hardware', price: 'Preis', priceV: '199 $', lic: 'Lizenz', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden', hl: ['Windows Early Access R6', 'Braucht Docker + LM Studio', 'Testgrenzen offen benannt'] },
  fr: { hwV: 'Selon le modèle', licV: 'Propriétaire', hw: 'Matériel', price: 'Prix', priceV: '199 $', lic: 'Licence', plat: 'Plateformes', footer: 'Guide PromptQuorum', hl: ['Accès anticipé R6 Windows', 'Exige Docker + LM Studio', 'Limites des tests exposées'] },
  es: { hwV: 'Según el modelo', licV: 'Propietaria', hw: 'Hardware', price: 'Precio', priceV: '199 $', lic: 'Licencia', plat: 'Plataformas', footer: 'Guía de PromptQuorum', hl: ['Early Access R6 en Windows', 'Requiere Docker + LM Studio', 'Límites de pruebas claros'] },
  ja: { hwV: 'モデル次第', licV: 'プロプライエタリ', hw: 'ハードウェア', price: '価格', priceV: '$199', lic: 'ライセンス', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド', hl: ['Windows先行アクセスR6', 'Docker＋LM Studio', '検証の限界を明記'] },
  zh: { hwV: '取决于模型', licV: '专有', hw: '硬件', price: '价格', priceV: '$199', lic: '许可证', plat: '支持平台', footer: 'PromptQuorum 指南', hl: ['Windows 抢先体验 R6', '需要 Docker', '测试局限已说明'] },
  pt: { hwV: 'Depende do modelo', licV: 'Proprietária', hw: 'Hardware', price: 'Preço', priceV: 'US$ 199', lic: 'Licença', plat: 'Plataformas', footer: 'Guia PromptQuorum', hl: ['Early Access R6 no Windows', 'Exige Docker + LM Studio', 'Limites dos testes claros'] },
  ar: { hwV: 'حسب النموذج', licV: 'مملوك', hw: 'العتاد', price: 'السعر', priceV: '199 $', lic: 'الترخيص', plat: 'المنصات', footer: 'دليل PromptQuorum', hl: ['وصول مبكر R6 لويندوز', 'يتطلب Docker + LM Studio', 'حدود الاختبار موضحة'] },
  ko: { hwV: '모델에 따라 다름', licV: '독점', hw: '하드웨어', price: '가격', priceV: '$199', lic: '라이선스', plat: '플랫폼', footer: 'PromptQuorum 가이드', hl: ['Windows 얼리 액세스 R6', 'Docker 필요', '테스트 한계 명시'] },
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
      highlights: t.hl,
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
