#!/usr/bin/env node
// Hero generator for immich-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/immich.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3447'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'immich-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Self-hosted photo library','Smart search on your server','Free and open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Setup', platV: 'Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Selbst gehostete Fotobibliothek','Smart Search auf dem Server','Gratis und Open Source'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Einrichtung', platV: 'Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Bibliothèque photo auto-hébergée','Recherche intelligente sur serveur','Gratuit et open source'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Installation', platV: 'Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Biblioteca de fotos autoalojada','Búsqueda inteligente en tu servidor','Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Instalación', platV: 'Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['セルフホスト型の写真ライブラリ','スマート検索を自分のサーバーで','無料のオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '導入', platV: 'Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['自托管照片库','智能搜索在自己的服务器上','免费开源'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '部署', platV: 'Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Biblioteca de fotos auto-hospedada','Busca inteligente no seu servidor','Grátis e código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Instalação', platV: 'Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مكتبة صور ذاتية الاستضافة','بحث ذكي على خادمك','مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'الإعداد', platV: 'Docker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['셀프 호스팅 사진 라이브러리','스마트 검색을 내 서버에서','무료 오픈소스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '설치', platV: 'Docker', footer: 'PromptQuorum 가이드' },
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
