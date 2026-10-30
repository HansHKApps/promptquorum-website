#!/usr/bin/env node
// Hero generator for acdsee-photo-studio-ultimate-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/acdsee-photo-studio-ultimate.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'acdsee-photo-studio-ultimate-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Photo AI mostly on your PC','Four generative tools use cloud','Perpetual licence'], price: 'Price', priceV: 'Perpetual', lic: 'License', licV: 'Closed source', plat: 'Platform', platV: 'Windows', footer: 'PromptQuorum Guide' },
  de: { hl: ['Foto-KI großteils auf dem PC','Vier generative Tools in der Cloud','Dauerlizenz'], price: 'Preis', priceV: 'Dauerlizenz', lic: 'Lizenz', licV: 'Nicht quelloffen', plat: 'Plattform', platV: 'Windows', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA photo surtout sur votre PC','Quatre outils génératifs en cloud','Licence perpétuelle'], price: 'Prix', priceV: 'Perpétuelle', lic: 'Licence', licV: 'Code fermé', plat: 'Plateforme', platV: 'Windows', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA de fotos sobre todo en tu PC','Cuatro herramientas en la nube','Licencia perpetua'], price: 'Precio', priceV: 'Perpetua', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataforma', platV: 'Windows', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['写真AIの大半はPC上','生成AI4機能はクラウド','永続ライセンス'], price: '価格', priceV: '永続', lic: 'ライセンス', licV: 'クローズド', plat: '対応OS', platV: 'Windows', footer: 'PromptQuorumガイド' },
  zh: { hl: ['照片 AI 多数在本机','四项生成式工具走云端','永久许可'], price: '价格', priceV: '永久许可', lic: '许可证', licV: '闭源', plat: '平台', platV: 'Windows', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA de fotos em grande parte no PC','Quatro ferramentas na nuvem','Licença perpétua'], price: 'Preço', priceV: 'Perpétua', lic: 'Licença', licV: 'Código fechado', plat: 'Plataforma', platV: 'Windows', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء الصور غالبًا على حاسوبك','أربع أدوات توليدية في السحابة','ترخيص دائم'], price: 'السعر', priceV: 'ترخيص دائم', lic: 'الرخصة', licV: 'مغلق المصدر', plat: 'المنصة', platV: 'Windows', footer: 'دليل PromptQuorum' },
  ko: { hl: ['사진 AI 대부분 내 PC에서','생성형 4가지는 클라우드','영구 라이선스'], price: '가격', priceV: '영구', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Windows', footer: 'PromptQuorum 가이드' },
}

// Korean, Japanese and Chinese titles wrap mid-word (리/뷰, レ/ビュー, 评/测) at poster width, so the poster uses a one-line short title (the highlights carry the message).
const TITLE_OVERRIDE = { zh: 'ACDSee Ultimate 2027 评测', ja: 'ACDSee Ultimate 2027レビュー', ko: 'ACDSee Ultimate 2027 리뷰' }

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: TITLE_OVERRIDE[lang] || stripMd(article[lang].title),
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
