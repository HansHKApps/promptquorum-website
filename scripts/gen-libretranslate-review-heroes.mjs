#!/usr/bin/env node
// Hero generator for libretranslate-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/libretranslate.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'libretranslate-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '500+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Self-hosted translation API + web UI", "Powered by Argos Translate", "Free & open source, no installer"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "AGPL-3.0", "plat": "Runs", "platV": "Self-hosted", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Selbst gehostete Übersetzungs-API", "Basiert auf Argos Translate", "Kostenlos & quelloffen, ohne Installer"], "price": "Preis", "priceV": "Kostenlos", "lic": "Lizenz", "licV": "AGPL-3.0", "plat": "Läuft", "platV": "Selbst gehostet", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["API de traduction auto-hébergée", "Moteur Argos Translate", "Gratuit, open source, sans installeur"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "AGPL-3.0", "plat": "Exécution", "platV": "Auto-hébergé", "footer": "Guide PromptQuorum"},
  es: {"hl": ["API de traducción autoalojada", "Motor Argos Translate", "Gratis, código abierto, sin instalador"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "AGPL-3.0", "plat": "Se ejecuta", "platV": "Autoalojado", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["API de tradução auto-hospedada", "Motor Argos Translate", "Grátis, código aberto, sem instalador"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "AGPL-3.0", "plat": "Execução", "platV": "Auto-hospedado", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["セルフホスト翻訳APIとWeb UI", "エンジンはArgos Translate", "無料・OSS、インストーラーなし"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "AGPL-3.0", "plat": "動作", "platV": "セルフホスト", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["自托管翻译API+网页界面", "引擎为Argos Translate", "免费开源，无安装程序"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "AGPL-3.0", "plat": "运行", "platV": "自托管", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["واجهة ترجمة ذاتية الاستضافة", "يعمل بمحرك Argos Translate", "مجاني ومفتوح، بلا مثبّت"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "AGPL-3.0", "plat": "التشغيل", "platV": "ذاتي الاستضافة", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["셀프 호스팅 번역 API+웹 UI", "엔진은 Argos Translate", "무료 오픈소스, 설치 프로그램 없음"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "AGPL-3.0", "plat": "실행", "platV": "셀프 호스팅", "footer": "PromptQuorum 가이드"},
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
