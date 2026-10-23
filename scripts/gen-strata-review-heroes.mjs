#!/usr/bin/env node
// Hero generator for strata-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/strata.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'strata-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['125B model on a gaming PC', 'Local OpenAI-style API', 'Free, MIT license'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Win · Mac · Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['125B-Modell auf dem Gaming-PC', 'Lokale API im OpenAI-Stil', 'Kostenlos, MIT-Lizenz'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Win · Mac · Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèle 125B sur PC de jeu', 'API locale type OpenAI', 'Gratuit, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Win · Mac · Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelo 125B en un PC gaming', 'API local estilo OpenAI', 'Gratis, licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ゲーミングPCで125Bモデル', 'OpenAI互換のローカルAPI', '無料・MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Win · Mac · Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['游戏电脑运行125B模型', '本地 OpenAI 风格 API', '免费，MIT 许可证'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelo 125B em um PC gamer', 'API local estilo OpenAI', 'Grátis, licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نموذج 125B على حاسوب ألعاب', 'واجهة API محلية بنمط OpenAI', 'مجاني، ترخيص MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Win · Mac · Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['게이밍 PC에서 125B 모델', 'OpenAI 호환 로컬 API', '무료, MIT 라이선스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 가이드' },
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
