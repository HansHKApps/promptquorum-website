#!/usr/bin/env node
// Hero generator for kai-9000-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/kai-9000.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'kai-9000-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['One AI assistant, every device', 'Cloud or on-device Gemma 4', 'Free and open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache 2.0', plat: 'Platforms', platV: 'Phone, desktop, web', footer: 'PromptQuorum Guide' },
  de: { hl: ['Ein KI-Assistent für jedes Gerät', 'Cloud oder Gemma 4 lokal', 'Kostenlos und Open Source'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache 2.0', plat: 'Plattformen', platV: 'Handy, Desktop, Web', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Un assistant IA pour chaque appareil', 'Cloud ou Gemma 4 local', 'Gratuit et open source'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache 2.0', plat: 'Plateformes', platV: 'Mobile, bureau, web', footer: 'Guide PromptQuorum' },
  es: { hl: ['Un asistente de IA en cada dispositivo', 'Nube o Gemma 4 local', 'Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Móvil, escritorio, web', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['全デバイス対応のAIアシスタント', 'クラウドか端末内Gemma 4', '無料・オープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache 2.0', plat: '対応プラットフォーム', platV: 'スマホ・PC・Web', footer: 'PromptQuorumガイド' },
  zh: { hl: ['一个 AI 助手，所有设备', '云端或本机 Gemma 4', '免费开源'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache 2.0', plat: '支持平台', platV: '手机、桌面、网页', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Um assistente de IA em cada dispositivo', 'Nuvem ou Gemma 4 local', 'Grátis e de código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Celular, desktop, web', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مساعد ذكاء اصطناعي لكل جهاز', 'السحابة أو Gemma 4 محليًا', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'Apache 2.0', plat: 'المنصات', platV: 'هاتف وحاسوب وويب', footer: 'دليل PromptQuorum' },
  ko: { hl: ['모든 기기를 위한 AI 어시스턴트', '클라우드 또는 기기 내 Gemma 4', '무료 오픈소스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache 2.0', plat: '플랫폼', platV: '휴대폰·PC·웹', footer: 'PromptQuorum 가이드' },
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
