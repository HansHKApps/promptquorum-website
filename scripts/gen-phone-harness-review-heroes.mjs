#!/usr/bin/env node
// Hero generator for phone-harness-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/phone-harness.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3465'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'phone-harness-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Agent taps, types and scrolls', 'iPhone and Android', 'MIT license, free CLI'], price: 'Price', priceV: 'Free CLI', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac, Win, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Agent tippt, wischt, scrollt', 'iPhone und Android', 'MIT-Lizenz, kostenloses CLI'], price: 'Preis', priceV: 'Kostenloses CLI', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac, Win, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["L'agent touche, saisit, défile", 'iPhone et Android', 'Licence MIT, CLI gratuit'], price: 'Prix', priceV: 'CLI gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac, Win, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['El agente toca y escribe', 'iPhone y Android', 'Licencia MIT, CLI gratis'], price: 'Precio', priceV: 'CLI gratuito', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Win, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['エージェントがタップ・入力', 'iPhoneとAndroid対応', 'MIT・CLIは無料'], price: '価格', priceV: 'CLIは無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac, Win, Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['智能体点击、输入、滚动', 'iPhone 与 Android', 'MIT 许可，CLI 免费'], price: '价格', priceV: 'CLI 免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac, Win, Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['O agente toca e digita', 'iPhone e Android', 'Licença MIT, CLI grátis'], price: 'Preço', priceV: 'CLI gratuito', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Win, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['الوكيل ينقر ويكتب ويمرر', 'iPhone وAndroid', 'ترخيص MIT، أداة مجانية'], price: 'السعر', priceV: 'CLI مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Mac, Win, Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['에이전트가 탭·입력·스크롤', 'iPhone·Android 지원', 'MIT, CLI 무료'], price: '가격', priceV: 'CLI 무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac, Win, Linux', footer: 'PromptQuorum 가이드' },
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
