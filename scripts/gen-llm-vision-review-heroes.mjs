#!/usr/bin/env node
// Hero generator for llm-vision-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/LLM Vision.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'llm-vision-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Camera analysis for Home Assistant","Local or cloud vision models","Free integration, Apache-2.0"], price: "Price", priceV: "Free", lic: "Licence", licV: "Apache-2.0", plat: "Platform", platV: "Home Assistant", footer: "PromptQuorum Guide" },
  de: { hl: ["Kameraanalyse für Home Assistant","Lokale oder Cloud-Vision-Modelle","Kostenlos, Apache-2.0"], price: "Preis", priceV: "Kostenlos", lic: "Lizenz", licV: "Apache-2.0", plat: "Plattform", platV: "Home Assistant", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Analyse caméra pour Home Assistant","Modèles de vision locaux ou cloud","Gratuit, Apache-2.0"], price: "Prix", priceV: "Gratuit", lic: "Licence", licV: "Apache-2.0", plat: "Plateforme", platV: "Home Assistant", footer: "Guide PromptQuorum" },
  es: { hl: ["Análisis de cámaras en Home Assistant","Modelos de visión locales o en la nube","Gratis, Apache-2.0"], price: "Precio", priceV: "Gratis", lic: "Licencia", licV: "Apache-2.0", plat: "Plataforma", platV: "Home Assistant", footer: "Guía de PromptQuorum" },
  ja: { hl: ["Home Assistantのカメラ解析","ローカル／クラウドのAI","無料、Apache-2.0"], price: "価格", priceV: "無料", lic: "ライセンス", licV: "Apache-2.0", plat: "対応環境", platV: "Home Assistant", footer: "PromptQuorumガイド" },
  zh: { hl: ["Home Assistant 摄像头分析","本地或云端视觉模型","免费，Apache-2.0"], price: "价格", priceV: "免费", lic: "许可证", licV: "Apache-2.0", plat: "平台", platV: "Home Assistant", footer: "PromptQuorum 指南" },
  pt: { hl: ["Análise de câmeras no Home Assistant","Modelos de visão locais ou na nuvem","Grátis, Apache-2.0"], price: "Preço", priceV: "Grátis", lic: "Licença", licV: "Apache-2.0", plat: "Plataforma", platV: "Home Assistant", footer: "Guia PromptQuorum" },
  ar: { hl: ["تحليل الكاميرات في Home Assistant","نماذج رؤية محلية أو سحابية","مجاني، Apache-2.0"], price: "السعر", priceV: "مجاني", lic: "الترخيص", licV: "Apache-2.0", plat: "المنصة", platV: "Home Assistant", footer: "دليل PromptQuorum" },
  ko: { hl: ["Home Assistant 카메라 분석","로컬·클라우드 비전 모델","무료, Apache-2.0"], price: "가격", priceV: "무료", lic: "라이선스", licV: "Apache-2.0", plat: "플랫폼", platV: "Home Assistant", footer: "PromptQuorum 가이드" },
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
