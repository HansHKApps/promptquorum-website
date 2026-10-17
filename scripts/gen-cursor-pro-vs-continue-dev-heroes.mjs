#!/usr/bin/env node
// One-off hero generator for the prompt-bite cursor-pro-vs-continue-dev (all 9 locales).
// Title comes from each locale block of the article; highlights are hand-written from that block's
// own content (<=7 words, <=16 chars for ja/zh/ko), per the sparse-poster rule in CLAUDE.md.
// Usage: HERO_BASE=http://localhost:3434 node scripts/gen-cursor-pro-vs-continue-dev-heroes.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'cursor-pro-vs-continue-dev'
const SRC = path.join(process.cwd(), `src/lib/prompt-bites/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const H = {
  en: ['Continue.dev: last update June 19', 'Cursor Pro closed to new users', 'New Cursor plans from $8/month'],
  de: ['Continue.dev: Update am 19. Juni', 'Cursor Pro für Neukunden zu', 'Neue Cursor-Pläne ab 8 $/Monat'],
  fr: ['Continue.dev : màj du 19 juin', 'Cursor Pro fermé aux nouveaux', 'Forfaits Cursor dès 8 $/mois'],
  es: ['Continue.dev: última act. 19 jun', 'Cursor Pro cerrado a nuevos', 'Planes de Cursor desde $8/mes'],
  pt: ['Continue.dev: última att. 19 jun', 'Cursor Pro fechado a novos', 'Planos da Cursor desde $8/mês'],
  ja: ['Continue.dev 6/19で停止', 'Cursor Pro新規受付終了', 'Cursor新プランは月$8から'],
  zh: ['Continue.dev止于6月19日', 'Cursor Pro不再接新用户', 'Cursor新套餐月费$8起'],
  ar: ['Continue.dev آخر تحديث 19 يونيو', 'Cursor Pro مغلق للعملاء الجدد', 'خطط Cursor الجديدة من 8 دولارات'],
  ko: ['6/19 이후 업데이트 없음', 'Cursor Pro 신규 가입 종료', 'Cursor 새 요금제 월 $8부터'],
}

const only = process.env.LANGS ? process.env.LANGS.split(',') : null
let generated = 0
const failures = []
for (const lang of Object.keys(H)) {
  if (only && !only.includes(lang)) continue
  const block = article[lang]
  // Satori lays text out left-to-right with no bidi reordering, so Arabic lines come out with their word
// order reversed. Pre-reverse the order of "units" (each Arabic word, each run of Latin/number tokens)
// so the visual left-to-right layout reads correctly right-to-left. Words keep their internal shaping.
const rtlVisual = (t) => {
  const units = []
  for (const tok of t.split(' ').filter(Boolean)) {
    const latin = /[A-Za-z0-9]/.test(tok) && !/[\u0600-\u06FF]/.test(tok)
    if (latin && units.length && units[units.length - 1].latin) units[units.length - 1].text += ' ' + tok
    else units.push({ text: tok, latin })
  }
  return units.reverse().map((u) => u.text).join(' ')
}
  const fixAr = (t) => (lang === 'ar' ? rtlVisual(t) : t)
  // Arabic: the colon after a Latin token breaks Satori's bidi layout, so use a colon-free, short hero title (ko: avoids a one-character orphan line)
  const title = lang === 'ar' ? 'Cursor يستحوذ على Continue.dev' : lang === 'ko' ? 'Continue.dev, Cursor에 인수' : lang === 'zh' ? 'Continue.dev被Cursor收购' : block.title
  const spec = { lang, title: fixAr(title), highlights: H[lang].map(fixAr), footer: 'PromptQuorum' }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spec),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const pngPath = path.join(IMAGES_DIR, `${SLUG}-overview-hero-${lang}.png`)
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-overview-hero-${lang}.webp`)
    fs.writeFileSync(pngPath, buf)
    await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
    fs.unlinkSync(pngPath)
    console.log(`OK ${lang} -> ${fs.statSync(webpPath).size} bytes`)
    generated++
  } catch (err) {
    console.error(`FAIL ${lang}: ${err.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
