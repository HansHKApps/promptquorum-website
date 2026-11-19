#!/usr/bin/env node
// Hero generator for t3-code-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/t3-code.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 't3-code-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => 'N' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Open-source MIT code", "Runs Claude Code and Codex", "Desktop, web and phone"], price: "Price", priceV: "Free", lic: "License", licV: 'MIT', plat: "Platforms", platV: 'Mac · Windows · Linux · iOS · Android', footer: "PromptQuorum Guide" },
  de: { hl: ["Quelloffen unter MIT-Lizenz", "Steuert Claude Code und Codex", "Desktop, Web und Smartphone"], price: "Preis", priceV: "Kostenlos", lic: "Lizenz", licV: 'MIT', plat: "Plattformen", platV: 'Mac · Windows · Linux · iOS · Android', footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Open source sous licence MIT", "Pilote Claude Code et Codex", "Bureau, web et mobile"], price: "Prix", priceV: "Gratuit", lic: "Licence", licV: 'MIT', plat: "Plateformes", platV: 'Mac · Windows · Linux · iOS · Android', footer: "Guide PromptQuorum" },
  es: { hl: ["Código abierto con licencia MIT", "Maneja Claude Code y Codex", "Escritorio, web y móvil"], price: "Precio", priceV: "Gratis", lic: "Licencia", licV: 'MIT', plat: "Plataformas", platV: 'Mac · Windows · Linux · iOS · Android', footer: "Guía de PromptQuorum" },
  ja: { hl: ["MITライセンスのOSS", "Claude CodeとCodexを操作", "デスクトップ・Web・スマホ"], price: "価格", priceV: "無料", lic: "ライセンス", licV: 'MIT', plat: "対応プラットフォーム", platV: 'Mac · Windows · Linux · iOS · Android', footer: "PromptQuorumガイド" },
  zh: { hl: ["MIT 许可的开源代码", "操控 Claude Code 与 Codex", "桌面、网页和手机"], price: "价格", priceV: "免费", lic: "许可证", licV: 'MIT', plat: "支持平台", platV: 'Mac · Windows · Linux · iOS · Android', footer: "PromptQuorum 指南" },
  pt: { hl: ["Código aberto sob licença MIT", "Controla Claude Code e Codex", "Desktop, web e celular"], price: "Preço", priceV: "Grátis", lic: "Licença", licV: 'MIT', plat: "Plataformas", platV: 'Mac · Windows · Linux · iOS · Android', footer: "Guia PromptQuorum" },
  ar: { hl: ["شفرة مفتوحة برخصة MIT", "يشغّل Claude Code وCodex", "سطح المكتب والويب والهاتف"], price: "السعر", priceV: "مجاني", lic: "الترخيص", licV: 'MIT', plat: "المنصات", platV: 'Mac · Windows · Linux · iOS · Android', footer: "دليل PromptQuorum" },
  ko: { hl: ["MIT 라이선스 오픈소스", "Claude Code·Codex 제어", "데스크톱·웹·휴대폰"], price: "가격", priceV: "무료", lic: "라이선스", licV: 'MIT', plat: "플랫폼", platV: 'Mac · Windows · Linux · iOS · Android', footer: "PromptQuorum 가이드" },
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
