#!/usr/bin/env node
// Hero generator for memoryai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (RAM, price, license, platforms) taken from src/lib/power-local-llm/apps/memoryai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'memoryai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Runs models on your phone', 'Editable Agent Memory', 'PIN-locked Kid Mode'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Closed source', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Modelle laufen auf dem Handy', 'Editierbarer Agent Memory', 'Kindermodus mit PIN'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles sur votre téléphone', 'Agent Memory modifiable', 'Mode enfant avec PIN'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos en tu teléfono', 'Agent Memory editable', 'Modo infantil con PIN'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内でモデル実行', '編集可能なメモリ', 'PIN付きキッズモード'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['模型在手机上运行', '可编辑的记忆', 'PIN锁定儿童模式'], price: '价格', priceV: '免费', lic: '许可证', licV: '闭源', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos no seu celular', 'Agent Memory editável', 'Modo infantil com PIN'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج تعمل على هاتفك', 'ذاكرة وكيل قابلة للتعديل', 'وضع أطفال برمز PIN'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기에서 모델 실행', '편집 가능한 메모리', 'PIN 잠금 키즈 모드'], price: '가격', priceV: '무료', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: 'iOS / Android' },
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
