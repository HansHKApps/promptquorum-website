#!/usr/bin/env node
// Hero generator for presenton-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/presenton.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3513'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'presenton-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Open-source AI slide generator', 'Editable PPTX and PDF export', 'Local or cloud models'], price: 'Price', priceV: 'Free + Cloud', lic: 'License', licV: 'Apache 2.0', plat: 'Platforms', platV: 'Mac, Linux, Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Quelloffener KI-Folien-Generator', 'Bearbeitbares PPTX und PDF', 'Lokale oder Cloud-Modelle'], price: 'Preis', priceV: 'Gratis + Cloud', lic: 'Lizenz', licV: 'Apache 2.0', plat: 'Plattformen', platV: 'Mac, Linux, Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Générateur de diapos IA open source', 'Export PPTX et PDF modifiable', 'Modèles locaux ou cloud'], price: 'Prix', priceV: 'Gratuit + Cloud', lic: 'Licence', licV: 'Apache 2.0', plat: 'Plateformes', platV: 'Mac, Linux, Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Generador de diapositivas IA abierto', 'PPTX y PDF editables', 'Modelos locales o en la nube'], price: 'Precio', priceV: 'Gratis + Cloud', lic: 'Licencia', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Mac, Linux, Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オープンソースのAIスライド生成', '編集可能なPPTX・PDF出力', 'ローカル/クラウドのモデル'], price: '価格', priceV: '無料＋Cloud', lic: 'ライセンス', licV: 'Apache 2.0', plat: '対応プラットフォーム', platV: 'Mac、Linux、Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['开源 AI 幻灯片生成器', '可编辑 PPTX 与 PDF 导出', '本地或云端模型'], price: '价格', priceV: '免费 + Cloud', lic: '许可证', licV: 'Apache 2.0', plat: '支持平台', platV: 'Mac、Linux、Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Gerador de slides IA aberto', 'PPTX e PDF editáveis', 'Modelos locais ou em nuvem'], price: 'Preço', priceV: 'Grátis + Cloud', lic: 'Licença', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Mac, Linux, Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مولّد شرائح مفتوح المصدر', 'تصدير PPTX وPDF قابل للتعديل', 'نماذج محلية أو سحابية'], price: 'السعر', priceV: 'مجاني + Cloud', lic: 'الرخصة', licV: 'Apache 2.0', plat: 'المنصات', platV: 'Mac وLinux وDocker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오픈소스 AI 슬라이드 생성기', '편집 가능한 PPTX·PDF', '로컬·클라우드 모델'], price: '가격', priceV: '무료 + Cloud', lic: '라이선스', licV: 'Apache 2.0', plat: '플랫폼', platV: 'Mac, Linux, Docker', footer: 'PromptQuorum 가이드' },
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
