#!/usr/bin/env node
// Hero generator for unstructured-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/unstructured.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'unstructured-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, (m) => (m.includes('app-facts') ? { starsFor: () => () => '0' } : {}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Splits PDF, Word, HTML and email', 'Typed JSON elements for RAG', 'Free library, paid cloud API'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Apache 2.0', plat: 'Platforms', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum Guide' },
  de: { hl: ['Zerlegt PDF, Word, HTML und E-Mail', 'Typisierte JSON-Elemente für RAG', 'Freie Bibliothek, kostenpflichtige Cloud-API'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Apache 2.0', plat: 'Plattformen', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Découpe PDF, Word, HTML et e-mails', 'Éléments JSON typés pour le RAG', 'Bibliothèque gratuite, API cloud payante'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Apache 2.0', plat: 'Plateformes', platV: 'Linux, macOS, Windows', footer: 'Guide PromptQuorum' },
  es: { hl: ['Divide PDF, Word, HTML y correo', 'Elementos JSON tipados para RAG', 'Biblioteca gratis, API cloud de pago'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Linux, macOS, Windows', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['PDFやWordを要素に分割', 'RAG向けの型付きJSON', '無料ライブラリ、有料API'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'Apache 2.0', plat: '対応プラットフォーム', platV: 'Linux、macOS、Windows', footer: 'PromptQuorumガイド' },
  zh: { hl: ['拆分 PDF、Word、邮件', '为 RAG 输出类型化 JSON', '库免费，云端 API 收费'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'Apache 2.0', plat: '支持平台', platV: 'Linux、macOS、Windows', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Divide PDF, Word, HTML e e-mail', 'Elementos JSON tipados para RAG', 'Biblioteca grátis, API na nuvem paga'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Linux, macOS, Windows', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يقسّم PDF وWord وHTML والبريد', 'عناصر JSON مصنّفة لـ RAG', 'مكتبة مجانية وواجهة سحابية مدفوعة'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'Apache 2.0', plat: 'المنصات', platV: 'Linux وmacOS وWindows', footer: 'دليل PromptQuorum' },
  ko: { hl: ['PDF·Word·이메일 분할', 'RAG용 유형별 JSON 요소', '무료 라이브러리, 유료 API'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'Apache 2.0', plat: '플랫폼', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum 가이드' },
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
