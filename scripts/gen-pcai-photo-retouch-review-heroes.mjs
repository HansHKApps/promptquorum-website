#!/usr/bin/env node
// One-off hero generator for pcai-photo-retouch-review (all 9 locales).
// Sparse Discover poster: localized article title + 3 short highlights + price/platform facts
// (price and platforms from src/lib/power-local-llm/apps/pcai-photo-retouch.ts; license and hardware are
// not stated by the app, so they are omitted rather than shown as "unknown").
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'pcai-photo-retouch-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { hl: ['Photo restoring on-device', 'No update since Feb 2026', 'Free install, in-app purchases'], price: 'Price', priceV: 'Freemium', plat: 'Platforms', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Fotos restaurieren auf dem Gerät', 'Seit Feb. 2026 kein Update', 'Gratis laden, In-App-Käufe'], price: 'Preis', priceV: 'Freemium', plat: 'Plattformen', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["Restaure les photos sur l'appareil", 'Sans mise à jour depuis fév. 2026', 'Gratuite, achats intégrés'], price: 'Prix', priceV: 'Freemium', plat: 'Plateformes', platV: 'iPhone, iPad, Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['Restaura fotos en el dispositivo', 'Sin updates desde feb. 2026', 'Gratis, con compras integradas'], price: 'Precio', priceV: 'Freemium', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内で写真を修復', '2026年2月以降は更新なし', '無料インストール・アプリ内課金'], price: '価格', priceV: 'フリーミアム', plat: '対応環境', platV: 'iPhone・iPad・Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在设备上修复照片', '2026年2月起未更新', '免费安装,含应用内购买'], price: '价格', priceV: '免费增值', plat: '支持平台', platV: 'iPhone、iPad、Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Restaura fotos no aparelho', 'Sem update desde fev. 2026', 'Grátis, com compras no app'], price: 'Preço', priceV: 'Freemium', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ترميم الصور على الجهاز', 'لا تحديث منذ فبراير 2026', 'تثبيت مجاني ومشتريات داخل التطبيق'], price: 'السعر', priceV: 'مجاني جزئيًا', plat: 'المنصات', platV: 'iPhone وiPad وMac', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기에서 사진 복원', '2026년 2월 이후 업데이트 없음', '무료 설치, 인앱 구매'], price: '가격', priceV: '프리미엄', plat: '플랫폼', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum 가이드' },
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
        { label: t.plat, value: t.platV, tone: 'slate' },
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
