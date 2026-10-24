#!/usr/bin/env node
// Hero generator for on-device-ai-translator-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (RAM, price, license, platforms) taken from src/lib/power-local-llm/apps/on-device-ai-translator.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3447'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'on-device-ai-translator-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Translates on your iPhone', '20 languages', 'Replaces the translate sheet'], price: 'Price', priceV: 'Free + purchases', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iOS', footer: 'PromptQuorum Guide' },
  de: { hl: ['Übersetzt auf dem iPhone', '20 Sprachen', 'Ersetzt das Übersetzungsmenü'], price: 'Preis', priceV: 'Gratis + Käufe', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Traduit sur votre iPhone', '20 langues', 'Remplace la fenêtre de traduction'], price: 'Prix', priceV: 'Gratuit + achats', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iOS', footer: 'Guide PromptQuorum' },
  es: { hl: ['Traduce en tu iPhone', '20 idiomas', 'Sustituye la hoja de traducción'], price: 'Precio', priceV: 'Gratis + compras', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iOS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone内で翻訳', '20言語に対応', '翻訳シートを置き換え'], price: '価格', priceV: '無料+課金', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iOS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在iPhone上翻译', '支持20种语言', '替代系统翻译面板'], price: '价格', priceV: '免费+内购', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iOS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Traduz no seu iPhone', '20 idiomas', 'Substitui a janela de tradução'], price: 'Preço', priceV: 'Grátis + compras', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iOS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يترجم على iPhone', '20 لغة', 'يستبدل لوحة الترجمة'], price: 'السعر', priceV: 'مجاني + مشتريات', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iOS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone에서 번역', '20개 언어 지원', '번역 시트를 대체'], price: '가격', priceV: '무료+구매', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'iOS', footer: 'PromptQuorum 가이드' },
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
