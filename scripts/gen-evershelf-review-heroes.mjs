#!/usr/bin/env node
// Hero generator for evershelf-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/evershelf.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'evershelf-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Self-hosted pantry manager','Expiry alerts and barcode scan','AI is optional'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Setup', platV: 'Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Selbst gehosteter Vorratsmanager','Ablaufwarnungen und Barcode-Scan','KI ist optional'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Einrichtung', platV: 'Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Garde-manger auto-hébergé','Alertes de péremption, scan','IA facultative'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Installation', platV: 'Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Gestor de despensa autoalojado','Avisos de caducidad y escaneo','IA opcional'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Instalación', platV: 'Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['セルフホスト型パントリー管理','賞味期限アラートとスキャン','AIは任意'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '導入', platV: 'Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['自托管储藏室管理','保质期提醒与条码扫描','AI 为可选项'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '部署', platV: 'Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Despensa auto-hospedada','Alertas de validade e leitura','IA opcional'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Instalação', platV: 'Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مدير مخزن طعام ذاتي الاستضافة','تنبيهات الانتهاء ومسح الباركود','الذكاء الاصطناعي اختياري'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'الإعداد', platV: 'Docker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['셀프 호스팅 저장실 관리','유통기한 알림과 바코드 스캔','AI는 선택 사항'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '설치', platV: 'Docker', footer: 'PromptQuorum 가이드' },
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
