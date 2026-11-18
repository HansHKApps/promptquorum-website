#!/usr/bin/env node
// Hero generator for openhuman-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/openhuman.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openhuman-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Desktop AI agent with built-in memory', 'Local models via Ollama, LM Studio, MLX', 'Early beta, GPL-3.0'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'GPL-3.0', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Desktop-KI-Agent mit eingebautem Gedächtnis', 'Lokale Modelle via Ollama, LM Studio, MLX', 'Frühe Beta, GPL-3.0'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'GPL-3.0', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA de bureau avec mémoire intégrée', 'Modèles locaux via Ollama, LM Studio, MLX', 'Bêta précoce, GPL-3.0'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'GPL-3.0', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente de IA de escritorio con memoria', 'Modelos locales con Ollama, LM Studio, MLX', 'Beta temprana, GPL-3.0'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['メモリ内蔵のデスクトップAI', 'Ollama等のローカルモデル対応', '初期ベータ、GPL-3.0'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'GPL-3.0', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['内置记忆的桌面 AI 智能体', '支持 Ollama 等本地模型', '早期测试版，GPL-3.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'GPL-3.0', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente de IA de desktop com memória', 'Modelos locais via Ollama, LM Studio, MLX', 'Beta inicial, GPL-3.0'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي بذاكرة مدمجة', 'نماذج محلية عبر Ollama وLM Studio', 'نسخة تجريبية مبكرة، GPL-3.0'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'GPL-3.0', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['메모리 내장 데스크톱 AI 에이전트', 'Ollama 등 로컬 모델 지원', '초기 베타, GPL-3.0'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'GPL-3.0', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
