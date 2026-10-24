#!/usr/bin/env node
// Hero generator for ensu-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/ensu.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ensu-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Chat with AI models on your device', 'iPhone, Android, Mac, Windows, Linux', 'Free and open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: '5 systems', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Chat direkt auf Ihrem Gerät', 'iPhone, Android, Mac, Windows, Linux', 'Kostenlos und Open Source'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: '5 Systeme', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA directement sur l\'appareil', 'iPhone, Android, Mac, Windows, Linux', 'Gratuit et open source'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: '5 systèmes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat con IA en tu dispositivo', 'iPhone, Android, Mac, Windows, Linux', 'Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: '5 sistemas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末上で動くAIチャット', 'iPhoneからLinuxまで5環境', '無料でオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: '5環境', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在设备上运行的 AI 聊天', '覆盖五大系统', '免费且开源'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', platV: '5 个系统', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat com IA no seu dispositivo', 'iPhone, Android, Mac, Windows, Linux', 'Grátis e de código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: '5 sistemas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي على جهازك', 'خمسة أنظمة تشغيل', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'المنصات', platV: '5 أنظمة', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기에서 실행되는 AI 채팅', '5개 운영체제 지원', '무료 오픈소스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: '5개 시스템', footer: 'PromptQuorum 가이드' },
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
