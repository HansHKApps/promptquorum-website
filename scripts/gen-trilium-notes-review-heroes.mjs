#!/usr/bin/env node
// Hero generator for trilium-notes-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/trilium-notes.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'trilium-notes-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Free hierarchical notes","Desktop or self-hosted server","Optional AI via Ollama"], price: "Price", priceV: "Free", lic: "Licence", licV: "AGPL-3.0", plat: "Platforms", platV: "Mac, Win, Linux, web", footer: "PromptQuorum Guide" },
  de: { hl: ["Kostenlose hierarchische Notizen","Desktop oder eigener Server","Optionale KI mit Ollama"], price: "Preis", priceV: "Kostenlos", lic: "Lizenz", licV: "AGPL-3.0", plat: "Plattformen", platV: "Mac, Win, Linux, Web", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Notes hiérarchiques gratuites","Bureau ou serveur auto-hébergé","IA optionnelle avec Ollama"], price: "Prix", priceV: "Gratuit", lic: "Licence", licV: "AGPL-3.0", plat: "Plateformes", platV: "Mac, Win, Linux, web", footer: "Guide PromptQuorum" },
  es: { hl: ["Notas jerárquicas gratis","Escritorio o servidor propio","IA opcional con Ollama"], price: "Precio", priceV: "Gratis", lic: "Licencia", licV: "AGPL-3.0", plat: "Plataformas", platV: "Mac, Win, Linux, web", footer: "Guía de PromptQuorum" },
  ja: { hl: ["無料の階層型ノート","デスクトップか自前サーバー","Ollamaで任意のAI"], price: "価格", priceV: "無料", lic: "ライセンス", licV: "AGPL-3.0", plat: "対応プラットフォーム", platV: "Mac、Win、Linux、Web", footer: "PromptQuorumガイド" },
  zh: { hl: ["免费层级式笔记","桌面端或自托管服务器","可选 Ollama AI"], price: "价格", priceV: "免费", lic: "许可证", licV: "AGPL-3.0", plat: "支持平台", platV: "Mac、Win、Linux、Web", footer: "PromptQuorum 指南" },
  pt: { hl: ["Notas hierárquicas grátis","Desktop ou servidor próprio","IA opcional com Ollama"], price: "Preço", priceV: "Grátis", lic: "Licença", licV: "AGPL-3.0", plat: "Plataformas", platV: "Mac, Win, Linux, web", footer: "Guia PromptQuorum" },
  ar: { hl: ["ملاحظات هرمية مجانية","سطح المكتب أو خادم ذاتي","ذكاء اصطناعي اختياري عبر Ollama"], price: "السعر", priceV: "مجاني", lic: "الترخيص", licV: "AGPL-3.0", plat: "المنصات", platV: "Mac وWin وLinux وويب", footer: "دليل PromptQuorum" },
  ko: { hl: ["무료 계층형 노트","데스크톱 또는 자체 서버","Ollama로 선택형 AI"], price: "가격", priceV: "무료", lic: "라이선스", licV: "AGPL-3.0", plat: "플랫폼", platV: "Mac, Win, Linux, 웹", footer: "PromptQuorum 가이드" },
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
