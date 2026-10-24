#!/usr/bin/env node
// Hero generator for genva-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/genva.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3441'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'genva-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['On-device image generation', 'iPhone and iPad', '3 free images a day'], price: 'Price', priceV: 'Free + in-app', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iPhone, iPad', footer: 'PromptQuorum Guide' },
  de: { hl: ['Bilder direkt auf dem iPhone', 'iPhone und iPad', '3 kostenlose Bilder pro Tag'], price: 'Preis', priceV: 'Gratis + In-App', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iPhone, iPad', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Images générées sur iPhone', 'iPhone et iPad', '3 images gratuites par jour'], price: 'Prix', priceV: 'Gratuit + achats', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iPhone, iPad', footer: 'Guide PromptQuorum' },
  es: { hl: ['Imágenes generadas en el iPhone', 'iPhone y iPad', '3 imágenes gratis al día'], price: 'Precio', priceV: 'Gratis + compras', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iPhone, iPad', footer: 'Guía de PromptQuorum' },
  pt: { hl: ['Imagens geradas no iPhone', 'iPhone e iPad', '3 imagens grátis por dia'], price: 'Preço', priceV: 'Grátis + compras', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iPhone, iPad', footer: 'Guia PromptQuorum' },
  ja: { hl: ['端末内で画像生成', 'iPhoneとiPad', '1日3回まで無料'], price: '価格', priceV: '無料＋アプリ内課金', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iPhone、iPad', footer: 'PromptQuorumガイド' },
  zh: { hl: ['手机上直接生成图像', 'iPhone 和 iPad', '每天 3 次免费生成'], price: '价格', priceV: '免费 + 内购', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iPhone、iPad', footer: 'PromptQuorum 指南' },
  ar: { hl: ['توليد الصور على الجهاز', 'iPhone وiPad', '3 صور مجانية يومياً'], price: 'السعر', priceV: 'مجاني + شراء داخلي', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iPhone، iPad', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기에서 이미지 생성', 'iPhone과 iPad', '하루 3장 무료'], price: '가격', priceV: '무료 + 앱 내 구매', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'iPhone, iPad', footer: 'PromptQuorum 가이드' },
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
