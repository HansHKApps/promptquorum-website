#!/usr/bin/env node
// One-off generator for the crewai-review article hero images (9 locales).
// Extracts each locale's real tldr bullets + title straight out of the
// article source (not re-authored copy) and posts them to /api/hero-image,
// saving the result to public/images/crewai-review-hero-{lang}.png.
// Usage: node scripts/gen-crewai-review-heroes.mjs (requires the dev server
// running on the port below).

import fs from 'node:fs/promises'

const BASE = 'http://localhost:3955'
const ARTICLE_PATH = 'src/lib/power-local-llm/articles/crewai-review.ts'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

function extractBlock(src, lang) {
  const startMarker = `\n  ${lang}: {`
  const start = src.indexOf(startMarker)
  if (start === -1) throw new Error(`no block for ${lang}`)
  const braceStart = src.indexOf('{', start)
  let depth = 0
  let i = braceStart
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') {
      depth--
      if (depth === 0) break
    }
  }
  return src.slice(start, i + 1)
}

function extractTitle(block) {
  const m = block.match(/\n\s*title:\s*'([^']*)'/)
  return m ? m[1] : null
}

function extractTldrItems(block) {
  const m = block.match(/tldr:\s*\{[\s\S]*?items:\s*\[([\s\S]*?)\n\s*\],/)
  if (!m) return []
  const body = m[1]
  const items = []
  const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g
  let mm
  while ((mm = re.exec(body))) {
    items.push((mm[1] ?? mm[2]).replace(/\\'/g, "'"))
  }
  return items
}

const FOOTERS = {
  en: 'PromptQuorum Guide',
  de: 'PromptQuorum-Leitfaden',
  fr: 'Guide PromptQuorum',
  ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南',
  es: 'Guía de PromptQuorum',
  pt: 'Guia PromptQuorum',
  ar: 'دليل PromptQuorum',
  ko: 'PromptQuorum 가이드',
}

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spec),
  })
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const outPath = `public/images/crewai-review-hero-${lang}.png`
  await fs.writeFile(outPath, buf)
  console.log(`  ${outPath} (${buf.length} bytes)`)
}

;(async () => {
  const src = await fs.readFile(ARTICLE_PATH, 'utf8')
  for (const lang of LANGS) {
    const block = extractBlock(src, lang)
    const title = extractTitle(block)
    const items = extractTldrItems(block)
    if (!title) throw new Error(`${lang}: could not extract title`)
    if (items.length < 3) throw new Error(`${lang}: only found ${items.length} tldr items`)
    const bullets = items.slice(0, 4).map((s) => s.replace(/\*\*/g, ''))
    const spec = {
      lang,
      title,
      subtitle: '',
      bullets,
      footer: FOOTERS[lang],
    }
    await generate(lang, spec)
  }
  console.log('done')
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
