#!/usr/bin/env node
// Hero generator for scrypted-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/scrypted.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'scrypted-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Camera and NVR platform', 'Local AI summaries optional', 'Free core, paid NVR'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Mixed', plat: 'Platforms', platV: 'Mac, Win, Linux, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kamera- und NVR-Plattform', 'Lokale KI-Zusammenfassungen optional', 'Gratis-Kern, bezahltes NVR'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Gemischt', plat: 'Plattformen', platV: 'Mac, Win, Linux, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Plateforme caméras et NVR', 'Résumés IA locaux facultatifs', 'Base gratuite, NVR payant'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Mixte', plat: 'Plateformes', platV: 'Mac, Win, Linux, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Plataforma de cámaras y NVR', 'Resúmenes de IA local opcionales', 'Base gratis, NVR de pago'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Mixta', plat: 'Plataformas', platV: 'Mac, Win, Linux, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['カメラ/NVRプラットフォーム', 'ローカルAI要約は任意', '基盤は無料、NVRは有料'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: '混在', plat: '対応プラットフォーム', platV: 'Mac、Win、Linux、iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['摄像头与 NVR 平台', '本地 AI 摘要可选', '核心免费，NVR 付费'], price: '价格', priceV: '免费增值', lic: '许可证', licV: '混合', plat: '支持平台', platV: 'Mac、Win、Linux、iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Plataforma de câmeras e NVR', 'Resumos de IA local opcionais', 'Base grátis, NVR pago'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Mista', plat: 'Plataformas', platV: 'Mac, Win, Linux, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['منصة كاميرات وNVR', 'ملخصات ذكاء اصطناعي محلية اختيارية', 'نواة مجانية وNVR مدفوع'], price: 'السعر', priceV: 'مجاني جزئيًا', lic: 'الترخيص', licV: 'متعدد', plat: 'المنصات', platV: 'Mac وWin وLinux وiOS وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['카메라·NVR 플랫폼', '로컬 AI 요약은 선택', '기본 무료, NVR 유료'], price: '가격', priceV: '부분 무료', lic: '라이선스', licV: '혼합', plat: '플랫폼', platV: 'Mac, Win, Linux, iOS, Android', footer: 'PromptQuorum 가이드' },
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
