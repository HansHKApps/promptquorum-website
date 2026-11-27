#!/usr/bin/env node
// Title-only hero posters (all 9 locales) for three refreshed pages: no prices or claims baked in, so they cannot go stale.
// Needs the dev server: npx next dev --webpack --port <port>  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3465'
const PAGES = {
  'local-llms-vs-chatgpt-plus': 'src/lib/local-llms/articles/local-llms-vs-chatgpt-plus.ts',
  'mac-vs-windows-vs-linux-local-llm': 'src/lib/local-llms/articles/mac-vs-windows-vs-linux-local-llm.ts',
  'local-ai-video-generation-vs-cloud': 'src/lib/power-local-llm/articles/local-ai-video-generation-vs-cloud.ts',
}
const FOOTER = { en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ar: 'دليل PromptQuorum', ja: 'PromptQuorumガイド', zh: 'PromptQuorum 指南', ko: 'PromptQuorum 가이드' }

for (const [slug, file] of Object.entries(PAGES)) {
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const mod = { exports: {} }
  new Function('exports', 'module', 'require', js)(mod.exports, mod, () => ({}))
  const article = Object.values(mod.exports).find((v) => v && v.en)
  for (const [lang, footer] of Object.entries(FOOTER)) {
    if ((process.env.ONLY && process.env.ONLY !== lang) || (process.env.PAGE && process.env.PAGE !== slug)) continue
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, title: lang === 'ar' ? article[lang].title.split(':')[0].trim() : article[lang].title, footer }) })
    if (!res.ok) throw new Error(`${slug} ${lang}: HTTP ${res.status} ${await res.text()}`)
    await sharp(Buffer.from(await res.arrayBuffer())).webp({ lossless: true, effort: 6 }).toFile(path.join('public/images', `${slug}-hero-${lang}.webp`))
  }
  console.log('done', slug)
}
