#!/usr/bin/env node
// Hero generator for stableswarmui-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/stableswarmui.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'stableswarmui-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Multi-GPU and multi-user from one install', 'Built on ComfyUI as its engine', 'Independent of Stability AI since June 2024'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Multi-GPU und Mehrbenutzer aus einer Installation', 'Nutzt ComfyUI als Backend', 'Seit Juni 2024 unabhängig von Stability AI'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Multi-GPU et multi-utilisateur, une seule installation', 'ComfyUI comme moteur', 'Indépendant de Stability AI depuis juin 2024'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Multi-GPU y multiusuario desde una instalación', 'ComfyUI como motor interno', 'Independiente de Stability AI desde junio de 2024'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['マルチGPU・複数ユーザー対応', 'ComfyUIがバックエンド', 'Stability AIから独立'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['多GPU、多用户，一次安装', '以 ComfyUI 为后端', '独立于Stability AI'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Multi-GPU e multiusuário em uma instalação', 'ComfyUI como motor interno', 'Independente da Stability AI desde junho de 2024'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['GPU متعددة ومستخدمون متعددون من تثبيت واحد', 'يعمل بمحرك ComfyUI', 'مستقل عن Stability AI منذ يونيو 2024'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Windows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['멀티 GPU·다중 사용자 지원', 'ComfyUI를 백엔드로 사용', 'Stability AI에서 독립'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Windows, Linux', footer: 'PromptQuorum 가이드' },
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
