#!/usr/bin/env node
// Hero generator for anarlog-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/anarlog.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'anarlog-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Bot-free AI meeting notes', 'Formerly Hyprnote, open source', 'Local on Apple Silicon Macs'], price: 'Price', priceV: 'Free + Pro', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Meetingnotizen ohne Bot', 'Früher Hyprnote, quelloffen', 'Lokal auf Macs mit Apple Silicon'], price: 'Preis', priceV: 'Gratis + Pro', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Notes de réunion IA sans robot', 'Ex-Hyprnote, open source', 'Local sur Mac Apple Silicon'], price: 'Prix', priceV: 'Gratuit + Pro', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Notas de reuniones con IA sin bot', 'Antes Hyprnote, código abierto', 'Local en Mac con Apple Silicon'], price: 'Precio', priceV: 'Gratis + Pro', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ボット不要のAI議事メモ', '旧Hyprnote、オープンソース', 'Apple Siliconでローカル処理'], price: '価格', priceV: '無料＋Pro', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac・Windows・Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['无机器人的 AI 会议笔记', '前身 Hyprnote，开源', 'Apple Silicon Mac 本地运行'], price: '价格', priceV: '免费 + Pro', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Notas de reuniões com IA sem bot', 'Antes Hyprnote, código aberto', 'Local em Macs Apple Silicon'], price: 'Preço', priceV: 'Grátis + Pro', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ملاحظات اجتماعات بلا بوت', 'كان Hyprnote، مفتوح المصدر', 'محليًا على Mac بمعالج Apple Silicon'], price: 'السعر', priceV: 'مجاني + Pro', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Mac وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['봇 없는 AI 회의 노트', '전 Hyprnote, 오픈소스', 'Apple Silicon Mac에서 로컬'], price: '가격', priceV: '무료 + Pro', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
