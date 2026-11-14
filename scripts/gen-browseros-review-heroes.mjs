#!/usr/bin/env node
// Hero generator for browseros-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/browseros.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'browseros-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl":["Free open-source AI browser","Ollama and LM Studio support","Mac, Windows and Linux"],"price":"Price","priceV":"Free","lic":"Source","licV":"AGPL-3.0","plat":"Platforms","platV":"Mac, Windows, Linux","footer":"PromptQuorum Guide"},
  de: {"hl":["Kostenloser quelloffener KI-Browser","Ollama und LM Studio lokal","Mac, Windows und Linux"],"price":"Preis","priceV":"Kostenlos","lic":"Quellcode","licV":"AGPL-3.0","plat":"Plattformen","platV":"Mac, Windows, Linux","footer":"PromptQuorum-Leitfaden"},
  es: {"hl":["Navegador IA gratis, código abierto","Ollama y LM Studio locales","Mac, Windows y Linux"],"price":"Precio","priceV":"Gratis","lic":"Código","licV":"AGPL-3.0","plat":"Plataformas","platV":"Mac, Windows, Linux","footer":"Guía de PromptQuorum"},
  fr: {"hl":["Navigateur IA gratuit, open source","Ollama et LM Studio en local","Mac, Windows et Linux"],"price":"Prix","priceV":"Gratuit","lic":"Code source","licV":"AGPL-3.0","plat":"Plateformes","platV":"Mac, Windows, Linux","footer":"Guide PromptQuorum"},
  ja: {"hl":["無料のオープンソースAIブラウザ","OllamaとLM Studio対応","Mac・Windows・Linux"],"price":"価格","priceV":"無料","lic":"ソース","licV":"AGPL-3.0","plat":"対応環境","platV":"Mac、Windows、Linux","footer":"PromptQuorumガイド"},
  pt: {"hl":["Navegador de IA grátis e aberto","Ollama e LM Studio locais","Mac, Windows e Linux"],"price":"Preço","priceV":"Grátis","lic":"Código","licV":"AGPL-3.0","plat":"Plataformas","platV":"Mac, Windows, Linux","footer":"Guia PromptQuorum"},
  ar: {"hl":["متصفح ذكاء اصطناعي مجاني ومفتوح","يدعم Ollama وLM Studio","Mac وWindows وLinux"],"price":"السعر","priceV":"مجاني","lic":"المصدر","licV":"AGPL-3.0","plat":"المنصات","platV":"Mac وWindows وLinux","footer":"دليل PromptQuorum"},
  zh: {"hl":["免费开源的 AI 浏览器","支持 Ollama 与 LM Studio","Mac、Windows、Linux"],"price":"价格","priceV":"免费","lic":"源代码","licV":"AGPL-3.0","plat":"支持平台","platV":"Mac、Windows、Linux","footer":"PromptQuorum 指南"},
  ko: {"hl":["무료 오픈소스 AI 브라우저","Ollama·LM Studio 지원","Mac, Windows, Linux"],"price":"가격","priceV":"무료","lic":"소스","licV":"AGPL-3.0","plat":"플랫폼","platV":"Mac, Windows, Linux","footer":"PromptQuorum 가이드"},
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
