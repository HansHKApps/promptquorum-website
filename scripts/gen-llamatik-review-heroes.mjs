#!/usr/bin/env node
// Hero generator for llamatik-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (RAM, price, license, platforms) taken from src/lib/power-local-llm/apps/llamatik.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'llamatik-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Models run on your phone', 'Open source, MIT license', 'Android, iPhone and desktop'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Modelle laufen auf dem Handy', 'Open Source, MIT-Lizenz', 'Android, iPhone und Desktop'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles sur votre téléphone', 'Open source, licence MIT', 'Android, iPhone et ordinateur'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos en tu teléfono', 'Código abierto, licencia MIT', 'Android, iPhone y escritorio'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内でモデル実行', 'オープンソース、MIT', 'AndroidとiPhone対応'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['模型在手机上运行', '开源,MIT许可', '支持安卓、iPhone和桌面'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos no seu celular', 'Código aberto, licença MIT', 'Android, iPhone e desktop'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج تعمل على هاتفك', 'مفتوح المصدر بترخيص MIT', 'Android وiPhone وسطح المكتب'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기에서 모델 실행', '오픈소스, MIT 라이선스', 'Android·iPhone 지원'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: 'Android / iOS / Desktop' },
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
