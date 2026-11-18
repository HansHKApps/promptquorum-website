#!/usr/bin/env node
// Hero generator for reactive-resume-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/reactive-resume.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3445'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'reactive-resume-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => 'N' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['MIT-licensed open-source code', 'PDF, Word and Markdown export', 'Use online or self-host'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Web · iOS · Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Quelloffen unter MIT-Lizenz', 'Export als PDF, Word und Markdown', 'Online nutzen oder selbst hosten'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Web · iOS · Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Code open source sous licence MIT', 'Export PDF, Word et Markdown', 'En ligne ou auto-hébergé'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Web · iOS · Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Código abierto con licencia MIT', 'Exporta a PDF, Word y Markdown', 'En línea o autoalojado'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Web · iOS · Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['MITライセンスのOSS', 'PDF・Word・Markdown出力', 'オンラインまたは自前運用'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Web · iOS · Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['MIT 许可的开源代码', '导出 PDF、Word、Markdown', '在线使用或自托管'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Web · iOS · Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Código aberto sob licença MIT', 'Exporta em PDF, Word e Markdown', 'Online ou auto-hospedado'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Web · iOS · Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['شفرة مفتوحة برخصة MIT', 'تصدير PDF وWord وMarkdown', 'عبر الإنترنت أو استضافة ذاتية'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Web · iOS · Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['MIT 라이선스 오픈소스', 'PDF·Word·Markdown 내보내기', '온라인 또는 직접 호스팅'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Web · iOS · Android', footer: 'PromptQuorum 가이드' },
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
