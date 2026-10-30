#!/usr/bin/env node
// Hero generator for perfect-memory-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/perfect-memory.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'perfect-memory-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Search everything you saw and said', 'Records locally on Windows and Mac', 'AI is local only with Ollama'], price: 'Price', priceV: 'Free + Pro', lic: 'Source', licV: 'Closed source', plat: 'Platforms', platV: 'Windows, Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Alles Gesehene und Gesagte durchsuchen', 'Lokale Aufzeichnung für Windows und Mac', 'KI nur mit Ollama lokal'], price: 'Preis', priceV: 'Gratis + Pro', lic: 'Quellcode', licV: 'Closed Source', plat: 'Plattformen', platV: 'Windows, Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Cherchez tout ce que vous avez vu', 'Enregistrement local Windows et Mac', "IA locale seulement avec Ollama"], price: 'Prix', priceV: 'Gratuit + Pro', lic: 'Code source', licV: 'Fermé', plat: 'Plateformes', platV: 'Windows, Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['Busca todo lo que viste y dijiste', 'Grabación local en Windows y Mac', 'IA local solo con Ollama'], price: 'Precio', priceV: 'Gratis + Pro', lic: 'Código', licV: 'Cerrado', plat: 'Plataformas', platV: 'Windows, Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['見たこと話したことを検索', 'WindowsとMacでローカル記録', 'AIのローカル化はOllama等'], price: '価格', priceV: '無料＋Pro', lic: 'ソース', licV: 'クローズド', plat: '対応プラットフォーム', platV: 'Windows、Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['搜索你看过和说过的一切', 'Windows 和 Mac 本地记录', '仅用 Ollama 时 AI 才本地'], price: '价格', priceV: '免费 + Pro', lic: '源代码', licV: '闭源', plat: '支持平台', platV: 'Windows、Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Pesquise tudo o que viu e disse', 'Gravação local no Windows e Mac', 'IA local só com Ollama'], price: 'Preço', priceV: 'Grátis + Pro', lic: 'Código', licV: 'Fechado', plat: 'Plataformas', platV: 'Windows, Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ابحث في كل ما رأيته وقلته', 'تسجيل محلي على جهازك', 'الذكاء الاصطناعي محلي مع Ollama'], price: 'السعر', priceV: 'مجاني + Pro', lic: 'الشيفرة', licV: 'مغلقة المصدر', plat: 'المنصات', platV: 'Windows وMac', footer: 'دليل PromptQuorum' },
  ko: { hl: ['보고 말한 모든 것을 검색', 'Windows·Mac 로컬 기록', 'AI는 Ollama 연결 시 로컬'], price: '가격', priceV: '무료 + Pro', lic: '소스', licV: '비공개', plat: '플랫폼', platV: 'Windows, Mac', footer: 'PromptQuorum 가이드' },
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
