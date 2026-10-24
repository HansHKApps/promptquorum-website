#!/usr/bin/env node
// Hero generator for compactifai-app-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/compactifai-app.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'compactifai-app-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline and cloud AI models', 'iPhone, iPad and Android', 'Closed source, free download'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Modelle offline und in der Cloud', 'iPhone, iPad und Android', 'Nicht quelloffen, kostenlos'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles d’IA hors ligne et cloud', 'iPhone, iPad et Android', 'Code fermé, gratuit'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos de IA sin conexión y en la nube', 'iPhone, iPad y Android', 'Código cerrado, gratis'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オフラインとクラウドのAIモデル', 'iPhone・iPad・Android対応', 'ソース非公開・無料'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iOS・Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['离线与云端 AI 模型', '支持 iPhone、iPad 和 Android', '闭源，免费'], price: '价格', priceV: '免费', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos de IA offline e na nuvem', 'iPhone, iPad e Android', 'Código fechado, grátis'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج ذكاء اصطناعي دون اتصال وسحابية', 'iPhone وiPad وAndroid', 'مغلق المصدر ومجاني'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iOS، Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오프라인·클라우드 AI 모델', 'iPhone·iPad·Android 지원', '클로즈드 소스, 무료'], price: '가격', priceV: '무료', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', platV: 'iOS, Android', footer: 'PromptQuorum 가이드' },
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
