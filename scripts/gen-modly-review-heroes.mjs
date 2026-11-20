#!/usr/bin/env node
// Hero generator for modly-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/modly.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3454'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'modly-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Image or prompt to 3D mesh', 'Runs on your own GPU', 'Exports GLB, OBJ, STL, PLY'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Bild oder Prompt zu 3D-Mesh', 'Läuft auf Ihrer eigenen GPU', 'Export als GLB, OBJ, STL, PLY'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Image ou prompt vers maillage 3D', 'Tourne sur votre propre GPU', 'Export GLB, OBJ, STL, PLY'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Windows, macOS, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Imagen o prompt a malla 3D', 'Se ejecuta en tu propia GPU', 'Exporta GLB, OBJ, STL, PLY'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['画像から3Dメッシュを生成', '自分のGPUで動作', 'GLBやSTLで書き出し'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Windows、macOS、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['图片转 3D 网格', '在自己的 GPU 上运行', '导出 GLB、STL 等'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Windows、macOS、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Imagem ou prompt para malha 3D', 'Roda na sua própria GPU', 'Exporta GLB, OBJ, STL, PLY'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['من صورة أو وصف إلى مجسم 3D', 'يعمل على بطاقتك الرسومية', 'تصدير GLB / OBJ / STL'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Windows / macOS / Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['이미지로 3D 메시 생성', '내 GPU에서 실행', 'GLB, STL로 내보내기'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum 가이드' },
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
