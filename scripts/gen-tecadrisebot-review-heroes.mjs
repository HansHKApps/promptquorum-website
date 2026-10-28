#!/usr/bin/env node
// Hero generator for tecadrisebot-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/tecadrisebot.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'tecadrisebot-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Named agents with memory', 'Models run on Cursor cloud', 'Free, MIT, Windows only'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Windows', footer: 'PromptQuorum Guide' },
  de: { hl: ['Benannte Agenten mit Gedächtnis', 'Modelle laufen in der Cursor-Cloud', 'Gratis, MIT, nur Windows'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Windows', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agents nommés avec mémoire', 'Modèles dans le cloud Cursor', 'Gratuit, MIT, Windows seul'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Windows', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agentes con nombre y memoria', 'Modelos en la nube de Cursor', 'Gratis, MIT, solo Windows'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Windows', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['記憶を持つ名前付きエージェント', 'モデルはCursorクラウド', '無料・MIT・Windowsのみ'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Windows', footer: 'PromptQuorumガイド' },
  zh: { hl: ['带记忆的命名智能体', '模型运行于 Cursor 云端', '免费，MIT，仅 Windows'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Windows', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agentes nomeados com memória', 'Modelos na nuvem do Cursor', 'Grátis, MIT, só Windows'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Windows', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكلاء مسمّون بذاكرة', 'النماذج على سحابة Cursor', 'مجاني بترخيص MIT لنظام Windows فقط'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Windows', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기억을 가진 이름 있는 에이전트', '모델은 Cursor 클라우드', '무료·MIT·Windows'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Windows', footer: 'PromptQuorum 가이드' },
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
