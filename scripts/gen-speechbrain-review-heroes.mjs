#!/usr/bin/env node
// Hero generator for speechbrain-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, install command) taken from src/lib/power-local-llm/apps/speechbrain.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'speechbrain-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Open-source PyTorch speech toolkit', '200+ recipes, 100+ models', 'Free, Apache-2.0'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Install', platV: 'pip install', footer: 'PromptQuorum Guide' },
  de: { hl: ['Quelloffenes Sprach-Toolkit', '200+ Rezepte, 100+ Modelle', 'Kostenlos, Apache-2.0'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Installation', platV: 'pip install', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Boîte à outils vocale open source', '200+ recettes, 100+ modèles', 'Gratuit, Apache-2.0'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Installation', platV: 'pip install', footer: 'Guide PromptQuorum' },
  es: { hl: ['Toolkit de voz de código abierto', '200+ recetas, 100+ modelos', 'Gratis, Apache-2.0'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Instalación', platV: 'pip install', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オープンソース音声ツールキット', 'レシピ200+・モデル100+', '無料・Apache-2.0'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: 'インストール', platV: 'pip install', footer: 'PromptQuorumガイド' },
  zh: { hl: ['开源语音工具包', '200+训练配方·100+模型', '免费，Apache-2.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '安装', platV: 'pip install', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Toolkit de voz de código aberto', '200+ receitas, 100+ modelos', 'Grátis, Apache-2.0'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache-2.0', plat: 'Instalação', platV: 'pip install', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مجموعة أدوات صوتية مفتوحة', 'أكثر من 200 وصفة و100 نموذج', 'مجاني، Apache-2.0'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'Apache-2.0', plat: 'التثبيت', platV: 'pip install', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오픈소스 음성 툴킷', '레시피 200+, 모델 100+', '무료, Apache-2.0'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '설치', platV: 'pip install', footer: 'PromptQuorum 가이드' },
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
