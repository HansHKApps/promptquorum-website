#!/usr/bin/env node
// Hero generator for nutrient-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/nutrient.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'nutrient-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Commercial PDF SDK and cloud APIs', 'Markdown CLI with free Standard mode', 'Closed source, quote-based SDKs'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Commercial, closed source', plat: 'Platforms', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kommerzielles PDF-SDK und Cloud-APIs', 'Markdown-CLI mit kostenlosem Standard-Modus', 'Geschlossener Code, SDKs auf Anfrage'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Kommerziell, geschlossen', plat: 'Plattformen', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['SDK PDF commercial et API cloud', 'CLI Markdown, mode Standard gratuit', 'Code fermé, SDK sur devis'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Commerciale, code fermé', plat: 'Plateformes', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['SDK de PDF comercial y API en la nube', 'CLI de Markdown con modo Standard gratis', 'Código cerrado, SDK por cotización'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Comercial, código cerrado', plat: 'Plataformas', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['商用PDF SDKとクラウドAPI', 'CLIのStandardは無料', '非公開ソース・見積制'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: '商用・非公開ソース', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux、iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['商用 PDF SDK 与云 API', 'CLI 标准模式免费', '闭源，SDK 按报价'], price: '价格', priceV: '免费增值', lic: '许可证', licV: '商用，闭源', plat: '支持平台', platV: 'macOS、Windows、Linux、iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['SDK de PDF comercial e APIs na nuvem', 'CLI de Markdown com modo Standard grátis', 'Código fechado, SDKs sob cotação'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Comercial, código fechado', plat: 'Plataformas', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['حزمة PDF تجارية وواجهات سحابية', 'أداة Markdown بوضع Standard مجاني', 'شيفرة مغلقة وتسعير عند الطلب'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'تجاري، مغلق المصدر', plat: 'المنصات', platV: 'macOS، Windows، Linux، iOS، Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['상용 PDF SDK와 API', 'CLI Standard 모드 무료', '비공개 소스, 견적제'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: '상용, 비공개 소스', plat: '플랫폼', platV: 'macOS, Windows, Linux, iOS, Android', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: t.platV },
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
