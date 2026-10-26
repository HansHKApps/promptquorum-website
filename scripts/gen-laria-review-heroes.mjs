#!/usr/bin/env node
// Hero generator for laria-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/laria.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'laria-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local models on Android', 'Cloud providers optional', 'Paid, closed source'], price: 'Price', priceV: 'Paid', lic: 'License', licV: 'Closed source', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale Modelle auf Android', 'Cloud-Anbieter optional', 'Kostenpflichtig, Closed Source'], price: 'Preis', priceV: 'Kostenpflichtig', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles locaux sur Android', 'Fournisseurs cloud en option', 'Payante, code fermé'], price: 'Prix', priceV: 'Payant', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos locales en Android', 'Proveedores en la nube opcionales', 'De pago, código cerrado'], price: 'Precio', priceV: 'De pago', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Androidでローカルモデル', 'クラウドは任意', '有料・ソース非公開'], price: '価格', priceV: '有料', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Android 本地模型', '云端服务商可选', '付费、闭源'], price: '价格', priceV: '付费', lic: '许可证', licV: '闭源', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos locais no Android', 'Provedores na nuvem opcionais', 'Pago, código fechado'], price: 'Preço', priceV: 'Pago', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج محلية على Android', 'مزودون سحابيون اختياريون', 'مدفوع، مغلق المصدر'], price: 'السعر', priceV: 'مدفوع', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Android 로컬 모델', '클라우드는 선택', '유료, 비공개 소스'], price: '가격', priceV: '유료', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: stripMd(article[lang].title),
    highlights: t.hl,
    facts: [
      { label: t.price, value: t.priceV },
      { label: t.lic, value: t.licV },
      { label: t.plat, value: 'Android' },
    ],
    footer: t.footer,
  }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const png = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
    fs.writeFileSync(png, buf)
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`))
    fs.unlinkSync(png)
    console.log(`OK ${lang}`)
    generated++
  } catch (e) {
    console.error(`FAIL ${lang}: ${e.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
