#!/usr/bin/env node
// Hero generator for linkwarden-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/linkwarden.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'linkwarden-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Self-hosted bookmarks that archive pages', 'AI tags via local Ollama or cloud', 'Free to self-host, paid Cloud'], price: 'Price', priceV: 'Free + Cloud', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'Web, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Selbst gehostete Lesezeichen mit Archiv', 'KI-Tags per Ollama lokal oder Cloud', 'Gratis selbst hosten, Cloud kostenpflichtig'], price: 'Preis', priceV: 'Gratis + Cloud', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'Web, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Signets auto-hébergés avec archive', 'Tags IA via Ollama local ou cloud', 'Gratuit en local, Cloud payant'], price: 'Prix', priceV: 'Gratuit + Cloud', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'Web, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Marcadores autoalojados con archivo', 'Etiquetas IA con Ollama local o nube', 'Gratis autoalojado, Cloud de pago'], price: 'Precio', priceV: 'Gratis + Cloud', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Web, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ページを保存するセルフホスト型', 'OllamaまたはクラウドでAIタグ', 'セルフホスト無料、Cloudは有料'], price: '価格', priceV: '無料＋Cloud', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: 'Web・iOS・Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['归档网页的自托管书签', '本地 Ollama 或云端 AI 标签', '自托管免费，Cloud 付费'], price: '价格', priceV: '免费 + Cloud', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', platV: 'Web、iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Favoritos auto-hospedados com arquivo', 'Tags de IA via Ollama local ou nuvem', 'Grátis auto-hospedado, Cloud pago'], price: 'Preço', priceV: 'Grátis + Cloud', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Web, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['إشارات مرجعية ذاتية الاستضافة مؤرشفة', 'وسوم ذكية عبر Ollama محلي أو سحابة', 'مجاني ذاتيًا، وCloud مدفوع'], price: 'السعر', priceV: 'مجاني + Cloud', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'ويب وiOS وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['페이지를 보관하는 셀프호스팅 북마크', 'Ollama 또는 클라우드로 AI 태그', '셀프호스팅 무료, Cloud는 유료'], price: '가격', priceV: '무료 + Cloud', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: '웹, iOS, Android', footer: 'PromptQuorum 가이드' },
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
