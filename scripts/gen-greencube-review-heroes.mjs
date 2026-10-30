#!/usr/bin/env node
// Hero generator for greencube-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/greencube.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'greencube-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline AI for Windows PCs', 'Gemma 4 on your own PC', 'Pay once, no subscription'], price: 'Price', priceV: '€9.99 once', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Windows 10/11', footer: 'PromptQuorum Guide' },
  de: { hl: ['Offline-KI für Windows-PCs', 'Gemma 4 auf dem eigenen PC', 'Einmal zahlen, kein Abo'], price: 'Preis', priceV: '9,99 € einmalig', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'Windows 10/11', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA hors ligne pour PC Windows', 'Gemma 4 sur votre PC', 'Payez une fois, sans abonnement'], price: 'Prix', priceV: '9,99 € une fois', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Windows 10/11', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA sin conexión para Windows', 'Gemma 4 en tu propio PC', 'Pago único, sin suscripción'], price: 'Precio', priceV: '9,99 € único', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Windows 10/11', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['WindowsPC向けオフラインAI', '自分のPCでGemma 4', '買い切り・サブスクなし'], price: '価格', priceV: '€9.99(買い切り)', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'Windows 10/11', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Windows 电脑离线 AI', '在自己电脑上运行 Gemma 4', '一次付费,无需订阅'], price: '价格', priceV: '€9.99 一次性', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'Windows 10/11', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA offline para PCs Windows', 'Gemma 4 no seu próprio PC', 'Pague uma vez, sem assinatura'], price: 'Preço', priceV: '€9,99 único', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Windows 10/11', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء اصطناعي دون اتصال لـ Windows', 'Gemma 4 على جهازك', 'دفعة واحدة بلا اشتراك'], price: 'السعر', priceV: '€9.99 مرة واحدة', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Windows 10/11', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Windows PC용 오프라인 AI', '내 PC에서 Gemma 4 실행', '한 번 결제, 구독 없음'], price: '가격', priceV: '€9.99 일회성', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Windows 10/11', footer: 'PromptQuorum 가이드' },
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
