#!/usr/bin/env node
// Hero generator for best-local-llms-for-coding (benchmark-comparison + hardware-selection heroes, 9 locales).
// Sparse-poster spec: localized title + 3 short highlights taken from the article's own content (no new claims).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'best-local-llms-for-coding'
const SRC = path.join(process.cwd(), `src/lib/local-llms/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { footer: 'PromptQuorum Guide', hwTitle: 'Match the Coding Model to Your RAM', bench: ['Qwen3.8 27B: best overall', 'Devstral Small 2 for 16 GB', 'Qwen3 8B for 8 GB'], hw: ['8 GB: Qwen3 8B', '16 GB: Devstral Small 2', '24 GB+: Qwen3.8 27B'] },
  de: { footer: 'PromptQuorum-Leitfaden', hwTitle: 'Coding-Modell passend zum Arbeitsspeicher', bench: ['Qwen3.8 27B: bestes Gesamtmodell', 'Devstral Small 2 für 16 GB', 'Qwen3 8B für 8 GB'], hw: ['8 GB: Qwen3 8B', '16 GB: Devstral Small 2', 'Ab 24 GB: Qwen3.8 27B'] },
  fr: { footer: 'Guide PromptQuorum', hwTitle: 'Le bon modèle de code selon votre RAM', bench: ['Qwen3.8 27B : meilleur global', 'Devstral Small 2 pour 16 Go', 'Qwen3 8B pour 8 Go'], hw: ['8 Go : Qwen3 8B', '16 Go : Devstral Small 2', '24 Go+ : Qwen3.8 27B'] },
  es: { footer: 'Guía de PromptQuorum', hwTitle: 'El modelo de código según tu RAM', bench: ['Qwen3.8 27B: mejor en general', 'Devstral Small 2 para 16 GB', 'Qwen3 8B para 8 GB'], hw: ['8 GB: Qwen3 8B', '16 GB: Devstral Small 2', '24 GB+: Qwen3.8 27B'] },
  ja: { footer: 'PromptQuorumガイド', hwTitle: 'RAMに合うコーディングモデルを選ぶ', bench: ['総合最高：Qwen3.8 27B', '16GB Devstral Small 2', '8GB Qwen3 8B'], hw: ['8GB：Qwen3 8B', '16GB：Devstral', '24GB以上：Qwen3.8'] },
  zh: { footer: 'PromptQuorum 指南', hwTitle: '按内存选择编程模型', bench: ['综合最佳：Qwen3.8 27B', '16GB Devstral Small 2', '8GB Qwen3 8B'], hw: ['8GB：Qwen3 8B', '16GB：Devstral', '24GB以上：Qwen3.8'] },
  pt: { footer: 'Guia PromptQuorum', hwTitle: 'O modelo de código certo para sua RAM', bench: ['Qwen3.8 27B: melhor no geral', 'Devstral Small 2 para 16 GB', 'Qwen3 8B para 8 GB'], hw: ['8 GB: Qwen3 8B', '16 GB: Devstral Small 2', '24 GB+: Qwen3.8 27B'] },
  ar: { footer: 'دليل PromptQuorum', hwTitle: 'نموذج ⁨LLM⁩ للبرمجة المناسب لذاكرتك في ⁨2026⁩', bench: ['Qwen3.8 27B: الأفضل عموماً', 'Devstral Small 2 لـ 16 GB', 'Qwen3 8B لـ 8 GB'], hw: ['8 GB: Qwen3 8B', '16 GB: Devstral Small 2', '+24 GB: Qwen3.8 27B'] },
  ko: { footer: 'PromptQuorum 가이드', hwTitle: 'RAM에 맞는 코딩 모델 고르기', bench: ['종합 최고: Qwen3.8 27B', '16GB Devstral Small 2', '8GB Qwen3 8B'], hw: ['8GB: Qwen3 8B', '16GB: Devstral', '24GB+: Qwen3.8'] },
}
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()
let fail = 0
for (const lang of Object.keys(L)) {
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  if (only && !only.includes(lang)) continue
  const jobs = [
    ['benchmark-comparison-hero', { lang, title: stripMd(article[lang].title), highlights: L[lang].bench, footer: L[lang].footer }],
    ['hardware-selection-hero', { lang, title: L[lang].hwTitle, highlights: L[lang].hw, footer: L[lang].footer }],
  ]
  for (const [name, spec] of jobs) {
    const base = `${SLUG}-${name}-${lang}`
    try {
      const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const png = path.join(IMAGES_DIR, `${base}.png`)
      fs.writeFileSync(png, Buffer.from(await res.arrayBuffer()))
      await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${base}.webp`))
      fs.unlinkSync(png)
      console.log(`OK ${base}.webp`)
    } catch (e) { console.error(`FAIL ${base}: ${e.message}`); fail++ }
  }
}
if (fail) process.exitCode = 1
