#!/usr/bin/env node
// Hero generator for the six per-machine Local AI workstation pages (9 locales each).
// Titles come from each locale block; punch lines are language-neutral spec facts.
// Requires a dev server: npx next dev --webpack --port <port>  (HERO_BASE overrides the base URL).
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { writeFile, unlink } from 'node:fs/promises'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const Module = require('node:module')

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const OUT_DIR = 'public/images'
const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}
const FACTS = {
  'nvidia-dgx-spark-local-ai-workstation': ['128 GB LPDDR5X', '273 GB/s', '200 GbE ConnectX-7'],
  'amd-ryzen-ai-halo-local-ai-workstation': ['Ryzen AI Max+ 395', '128 GB LPDDR5x', '192 GB PRO 495'],
  'framework-desktop-local-ai-workstation': ['Ryzen AI Max+ PRO 495', '192 GB LPDDR5X', 'PCIe x4 slot'],
  'hp-z2-mini-g1a-local-ai-workstation': ['Ryzen AI Max+ PRO 395', '128 GB LPDDR5X', 'Wi-Fi 7'],
  'gmktec-evo-x2-local-ai-workstation': ['Ryzen AI Max+ 395', '128 GB LPDDR5X', 'Radeon 8060S'],
  'minisforum-ms-s1-max-local-ai-workstation': ['Ryzen AI Max+ 395', '2× 10GbE', 'PCIe x16 slot'],
}

function loadArticle(slug) {
  const file = `src/lib/local-llms/articles/${slug}.ts`
  const out = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: 'commonjs', target: 'es2020' } }).outputText
  const m = new Module(file)
  m.paths = []
  m._compile(out, file)
  return m.exports.article
}

for (const [slug, facts] of Object.entries(FACTS)) {
  const article = loadArticle(slug)
  for (const lang of Object.keys(FOOTER)) {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, title: article[lang].title, facts: facts.map((value) => ({ value })), footer: FOOTER[lang] }),
    })
    if (!res.ok) {
      console.error(`[${slug} ${lang}] FAILED ${res.status}: ${await res.text()}`)
      process.exitCode = 1
      continue
    }
    const pngPath = `${OUT_DIR}/${slug}-hero-${lang}.png`
    const webpPath = `${OUT_DIR}/${slug}-hero-${lang}.webp`
    await writeFile(pngPath, Buffer.from(await res.arrayBuffer()))
    await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
    await unlink(pngPath)
    console.log(`[${slug} ${lang}] OK`)
  }
}
