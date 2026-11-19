#!/usr/bin/env node
// Hero generator for llmfit-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/llmfit.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'llmfit-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '500+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Which LLMs fit your hardware", "Ranks models, runs none", "Free, MIT, one command"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "MIT", "plat": "Platform", "platV": "Win/Mac/Linux", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Welche LLMs passen zur Hardware", "Ordnet Modelle, führt keine aus", "Gratis, MIT, ein Befehl"], "price": "Preis", "priceV": "Gratis", "lic": "Lizenz", "licV": "MIT", "plat": "Plattform", "platV": "Win/Mac/Linux", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Quels LLM pour votre matériel", "Classe les modèles, n'en lance aucun", "Gratuit, MIT, une commande"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "MIT", "plat": "Plateforme", "platV": "Win/Mac/Linux", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Qué LLM encajan en tu equipo", "Ordena modelos, no ejecuta", "Gratis, MIT, un comando"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "MIT", "plat": "Plataforma", "platV": "Win/Mac/Linux", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Quais LLMs cabem no seu PC", "Classifica modelos, não executa", "Grátis, MIT, um comando"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "MIT", "plat": "Plataforma", "platV": "Win/Mac/Linux", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["合うLLMがすぐ分かる", "順位付けのみ、実行しない", "無料、MIT、コマンド1つ"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "MIT", "plat": "プラットフォーム", "platV": "Win/Mac/Linux", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["哪些LLM适合你的硬件", "只排序，不运行模型", "免费，MIT，一条命令"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "MIT", "plat": "平台", "platV": "Win/Mac/Linux", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["أي النماذج تناسب عتادك", "تصنّف النماذج ولا تشغّلها", "مجانية، MIT، أمر واحد"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "MIT", "plat": "المنصة", "platV": "Win/Mac/Linux", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["내 PC에 맞는 LLM 찾기", "순위만 매기고 실행 안 함", "무료, MIT, 명령 하나"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "MIT", "plat": "플랫폼", "platV": "Win/Mac/Linux", "footer": "PromptQuorum 가이드"},
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
