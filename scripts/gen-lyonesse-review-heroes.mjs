#!/usr/bin/env node
// Hero generator for lyonesse-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/lyonesse.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3449'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'lyonesse-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline transcription on iPhone and Mac', 'Meeting notes and document chat', 'Free first recording, lifetime option'], price: 'Price', priceV: 'Free + paid', lic: 'Source', licV: 'Closed source', plat: 'Platforms', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Offline-Transkription auf iPhone und Mac', 'Meeting-Notizen und Dokument-Chat', 'Erste Aufnahme gratis, Einmalkauf'], price: 'Preis', priceV: 'Gratis + Kauf', lic: 'Quellcode', licV: 'Closed Source', plat: 'Plattformen', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Transcription hors ligne iPhone et Mac', 'Notes de réunion et chat de documents', 'Premier enregistrement gratuit'], price: 'Prix', priceV: 'Gratuit + payant', lic: 'Code source', licV: 'Fermé', plat: 'Plateformes', platV: 'iPhone, iPad, Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['Transcripción sin conexión en iPhone y Mac', 'Notas de reuniones y chat de documentos', 'Primera grabación gratis'], price: 'Precio', priceV: 'Gratis + de pago', lic: 'Código', licV: 'Cerrado', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オフライン文字起こし', '会議メモとドキュメント対話', '初回無料、買い切りあり'], price: '価格', priceV: '無料＋有料', lic: 'ソース', licV: 'クローズド', plat: '対応プラットフォーム', platV: 'iPhone・iPad・Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 和 Mac 离线转录', '会议笔记与文档对话', '首次录音免费，可终身买断'], price: '价格', priceV: '免费 + 付费', lic: '源代码', licV: '闭源', plat: '支持平台', platV: 'iPhone、iPad、Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Transcrição offline no iPhone e Mac', 'Notas de reunião e chat com documentos', 'Primeira gravação grátis'], price: 'Preço', priceV: 'Grátis + pago', lic: 'Código', licV: 'Fechado', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تفريغ صوتي دون إنترنت على أجهزة Apple', 'محاضر اجتماعات ودردشة مع المستندات', 'أول تسجيل مجاني'], price: 'السعر', priceV: 'مجاني + مدفوع', lic: 'الشيفرة', licV: 'مغلقة المصدر', plat: 'المنصات', platV: 'أجهزة Apple', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone·Mac 오프라인 받아쓰기', '회의 노트와 문서 채팅', '첫 녹음 무료, 평생 구매 가능'], price: '가격', priceV: '무료 + 유료', lic: '소스', licV: '비공개', plat: '플랫폼', platV: 'iPhone·iPad·Mac', footer: 'PromptQuorum 가이드' },
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
