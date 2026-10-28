#!/usr/bin/env node
// Hero generator for excire-foto-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/excire-foto.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'excire-foto-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Photo AI on your own computer','Search by content, people, text','One-time purchase'], price: 'Price', priceV: 'One-time', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Windows, Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Foto-KI auf dem eigenen Computer','Suche nach Inhalt, Person, Text','Einmalkauf'], price: 'Preis', priceV: 'Einmalkauf', lic: 'Lizenz', licV: 'Nicht quelloffen', plat: 'Plattformen', platV: 'Windows, Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA photo sur votre ordinateur','Recherche par contenu, personne, texte','Achat unique'], price: 'Prix', priceV: 'Achat unique', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Windows, Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA de fotos en tu ordenador','Búsqueda por contenido, personas, texto','Pago único'], price: 'Precio', priceV: 'Pago único', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Windows, Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['写真AIを自分のPCで','内容・人物・文字で検索','買い切り型'], price: '価格', priceV: '買い切り', lic: 'ライセンス', licV: 'クローズド', plat: '対応OS', platV: 'Windows, Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['照片 AI 在自己的电脑上','按内容、人物、文字搜索','一次性购买'], price: '价格', priceV: '一次性购买', lic: '许可证', licV: '闭源', plat: '平台', platV: 'Windows, Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA de fotos no seu computador','Busca por conteúdo, pessoas, texto','Compra única'], price: 'Preço', priceV: 'Compra única', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Windows, Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء الصور على حاسوبك','بحث بالمحتوى والأشخاص والنص','شراء مرة واحدة'], price: 'السعر', priceV: 'مرة واحدة', lic: 'الرخصة', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Windows, Mac', footer: 'دليل PromptQuorum' },
  ko: { hl: ['사진 AI를 내 컴퓨터에서','내용·인물·글자로 검색','일회성 구매'], price: '가격', priceV: '일회성', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Windows, Mac', footer: 'PromptQuorum 가이드' },
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
