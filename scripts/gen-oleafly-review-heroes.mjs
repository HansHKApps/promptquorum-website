#!/usr/bin/env node
// Hero generator for oleafly-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/oleafly.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'oleafly-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Write LaTeX, Typst and Markdown papers', 'Git, Zotero and optional AI agents', 'Free, open source, beta'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Runs on', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['LaTeX-, Typst- und Markdown-Arbeiten', 'Git, Zotero und optionale KI-Agenten', 'Kostenlos, quelloffen, Beta'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Läuft auf', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Articles en LaTeX, Typst et Markdown', 'Git, Zotero et agents IA facultatifs', 'Gratuit, open source, bêta'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Fonctionne sur', platV: 'Mac, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Artículos en LaTeX, Typst y Markdown', 'Git, Zotero y agentes de IA opcionales', 'Gratis, código abierto, beta'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Funciona en', platV: 'Mac, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['LaTeXとTypstで論文執筆', 'Git・Zotero・AI連携', '無料のオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '動作環境', platV: 'Mac、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['用 LaTeX 和 Typst 写论文', 'Git、Zotero、可选AI', '免费开源，测试版'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '运行于', platV: 'Mac、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Artigos em LaTeX, Typst e Markdown', 'Git, Zotero e agentes de IA opcionais', 'Grátis, código aberto, beta'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Roda em', platV: 'Mac, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['أبحاث بصيغ LaTeX أو Typst أو Markdown', 'مزامنة Git واقتباسات Zotero', 'مجاني ومفتوح المصدر، تجريبي'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'يعمل على', platV: 'Mac وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['LaTeX·Typst 논문용', 'Git·Zotero·AI 선택', '무료 오픈소스, 베타'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '실행 환경', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    // ar: dedicated short poster title (the article title's ':' after a Latin brand name renders as a detached colon and wraps badly)
    title: lang === 'ar' ? 'مراجعة محرر Oleafly للأبحاث' : stripMd(article[lang].title),
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
