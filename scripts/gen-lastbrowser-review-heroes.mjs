#!/usr/bin/env node
// Hero generator for lastbrowser-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/lastbrowser.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'lastbrowser-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Free AI browser for Windows","Sidekick sidebar with Ollama","Linux preview, GPL-3.0 source"], price: "Price", priceV: "Free (personal use)", lic: "Source", licV: "GPL-3.0", plat: "Platforms", platV: "Windows, Linux preview", footer: "PromptQuorum Guide" },
  de: { hl: ["Kostenloser KI-Browser für Windows","Sidekick-Seitenleiste mit Ollama","Linux-Vorschau, GPL-3.0-Quellcode"], price: "Preis", priceV: "Kostenlos (privat)", lic: "Quellcode", licV: "GPL-3.0", plat: "Plattformen", platV: "Windows, Linux-Vorschau", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Navigateur IA gratuit pour Windows","Barre Sidekick avec Ollama","Aperçu Linux, source GPL-3.0"], price: "Prix", priceV: "Gratuit (usage perso)", lic: "Code source", licV: "GPL-3.0", plat: "Plateformes", platV: "Windows, aperçu Linux", footer: "Guide PromptQuorum" },
  es: { hl: ["Navegador con IA gratis en Windows","Barra Sidekick con Ollama","Linux en preview, código GPL-3.0"], price: "Precio", priceV: "Gratis (uso personal)", lic: "Código", licV: "GPL-3.0", plat: "Plataformas", platV: "Windows, Linux preview", footer: "Guía de PromptQuorum" },
  ja: { hl: ["Windows向け無料AIブラウザ","SidekickサイドバーとOllama","Linuxはプレビュー、GPL-3.0"], price: "価格", priceV: "無料（個人利用）", lic: "ソース", licV: "GPL-3.0", plat: "対応プラットフォーム", platV: "Windows、Linuxプレビュー", footer: "PromptQuorumガイド" },
  zh: { hl: ["Windows 免费 AI 浏览器","Sidekick 侧边栏支持 Ollama","Linux 预览版，GPL-3.0"], price: "价格", priceV: "免费（个人使用）", lic: "源代码", licV: "GPL-3.0", plat: "支持平台", platV: "Windows、Linux 预览", footer: "PromptQuorum 指南" },
  pt: { hl: ["Navegador com IA grátis no Windows","Barra Sidekick com Ollama","Prévia no Linux, código GPL-3.0"], price: "Preço", priceV: "Grátis (uso pessoal)", lic: "Código", licV: "GPL-3.0", plat: "Plataformas", platV: "Windows, prévia Linux", footer: "Guia PromptQuorum" },
  ar: { hl: ["متصفح ذكاء اصطناعي مجاني لـ Windows","شريط Sidekick مع Ollama","معاينة Linux ومصدر GPL-3.0"], price: "السعر", priceV: "مجاني (للاستخدام الشخصي)", lic: "المصدر", licV: "GPL-3.0", plat: "المنصات", platV: "Windows ومعاينة Linux", footer: "دليل PromptQuorum" },
  ko: { hl: ["Windows용 무료 AI 브라우저","Ollama 지원 Sidekick 사이드바","Linux 미리보기, GPL-3.0"], price: "가격", priceV: "무료(개인 사용)", lic: "소스", licV: "GPL-3.0", plat: "플랫폼", platV: "Windows, Linux 미리보기", footer: "PromptQuorum 가이드" },
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
