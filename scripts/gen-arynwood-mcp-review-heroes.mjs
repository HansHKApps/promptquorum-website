#!/usr/bin/env node
// Hero generator for arynwood-mcp-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/arynwood-mcp.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3477'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'arynwood-mcp-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Local AI workspace on Ollama","Linux and Windows alpha","Source-available licence"], price: "Price", priceV: "Not listed", lic: "License", licV: "Source-available", plat: "Platforms", platV: "Win · Linux", footer: "PromptQuorum Guide" },
  de: { hl: ["Lokale KI auf Ollama","Alpha für Linux und Windows","Source-Available-Lizenz"], price: "Preis", priceV: "Keiner genannt", lic: "Lizenz", licV: "Source-Available", plat: "Plattformen", platV: "Win · Linux", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["IA locale sur Ollama","Alpha Linux et Windows","Licence code source disponible"], price: "Prix", priceV: "Non indiqué", lic: "Licence", licV: "Source disponible", plat: "Plateformes", platV: "Win · Linux", footer: "Guide PromptQuorum" },
  es: { hl: ["IA local sobre Ollama","Alfa para Linux y Windows","Licencia de código disponible"], price: "Precio", priceV: "No indicado", lic: "Licencia", licV: "Código disponible", plat: "Plataformas", platV: "Win · Linux", footer: "Guía de PromptQuorum" },
  ja: { hl: ["Ollamaで動くローカルAI","LinuxとWinのアルファ版","ソース公開型ライセンス"], price: "価格", priceV: "記載なし", lic: "ライセンス", licV: "ソース公開型", plat: "対応OS", platV: "Win · Linux", footer: "PromptQuorumガイド" },
  zh: { hl: ["基于 Ollama 的本地 AI","Linux/Win Alpha","源码可见许可证"], price: "价格", priceV: "未标注", lic: "许可证", licV: "源码可见", plat: "平台", platV: "Win · Linux", footer: "PromptQuorum 指南" },
  pt: { hl: ["IA local sobre o Ollama","Alfa para Linux e Windows","Licença de código disponível"], price: "Preço", priceV: "Não informado", lic: "Licença", licV: "Código disponível", plat: "Plataformas", platV: "Win · Linux", footer: "Guia PromptQuorum" },
  ar: { hl: ["ذكاء اصطناعي محلي على Ollama","ألفا لنظامي Linux و Windows","رخصة المصدر المتاح"], price: "السعر", priceV: "غير مذكور", lic: "الترخيص", licV: "المصدر متاح", plat: "المنصات", platV: "Win · Linux", footer: "دليل PromptQuorum" },
  ko: { hl: ["Ollama 기반 로컬 AI","Linux·Windows 알파","소스 공개 라이선스"], price: "가격", priceV: "표기 없음", lic: "라이선스", licV: "소스 공개", plat: "플랫폼", platV: "Win · Linux", footer: "PromptQuorum 가이드" },
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
