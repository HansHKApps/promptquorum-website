#!/usr/bin/env node
// Hero generator for xberg-review (all 9 locales). Sparse poster: localized title + 3 short highlights from each
// locale block, facts strip (platforms, price, license, version) from src/lib/power-local-llm/apps/xberg.ts.
// Titles/highlights live in HERO_SPECS_JSON (a JSON file: { "<lang>": { title, highlights } }).
// Needs the dev server: npx next dev --webpack --port 3433  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SPEC_FILE = process.env.HERO_SPECS_JSON
if (!SPEC_FILE) throw new Error('Set HERO_SPECS_JSON to the merged title/highlights file')
const TEXT = JSON.parse(fs.readFileSync(SPEC_FILE, 'utf8'))

const VERSION = 'v1.3.10'
const L = {
  en: { p: 'Platforms', pv: 'Linux, macOS, Windows', pr: 'Price', prv: 'Free', l: 'License', v: 'Version', f: 'PromptQuorum Guide' },
  de: { p: 'Plattformen', pv: 'Linux, macOS, Windows', pr: 'Preis', prv: 'Kostenlos', l: 'Lizenz', v: 'Version', f: 'PromptQuorum-Leitfaden' },
  fr: { p: 'Plateformes', pv: 'Linux, macOS, Windows', pr: 'Prix', prv: 'Gratuit', l: 'Licence', v: 'Version', f: 'Guide PromptQuorum' },
  es: { p: 'Plataformas', pv: 'Linux, macOS, Windows', pr: 'Precio', prv: 'Gratis', l: 'Licencia', v: 'Versión', f: 'Guía de PromptQuorum' },
  ja: { p: '対応', pv: 'Linux・macOS・Windows', pr: '価格', prv: '無料', l: 'ライセンス', v: 'バージョン', f: 'PromptQuorumガイド' },
  zh: { p: '平台', pv: 'Linux、macOS、Windows', pr: '价格', prv: '免费', l: '许可证', v: '版本', f: 'PromptQuorum 指南' },
  pt: { p: 'Plataformas', pv: 'Linux, macOS, Windows', pr: 'Preço', prv: 'Grátis', l: 'Licença', v: 'Versão', f: 'Guia PromptQuorum' },
  ar: { p: 'المنصات', pv: 'Linux وmacOS وWindows', pr: 'السعر', prv: 'مجاني', l: 'الترخيص', v: 'الإصدار', f: 'دليل PromptQuorum' },
  ko: { p: '플랫폼', pv: 'Linux, macOS, Windows', pr: '가격', prv: '무료', l: '라이선스', v: '버전', f: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const lang of Object.keys(L)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const t = TEXT[lang]
    if (!t) { console.error(`FAIL ${lang}: no text spec`); process.exitCode = 1; continue }
    const l = L[lang]
    const spec = {
      lang,
      title: t.title,
      highlights: t.highlights,
      facts: [
        { label: l.p, value: l.pv, tone: 'slate' },
        { label: l.pr, value: l.prv, tone: 'emerald' },
        { label: l.l, value: 'MIT', tone: 'slate' },
        { label: l.v, value: VERSION, tone: 'amber' },
      ],
      footer: l.f,
    }
    const webpPath = path.join(IMAGES_DIR, `xberg-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `xberg-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${lang} (${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      process.exitCode = 1
    }
  }
  console.log(`Generated ${generated}/9`)
}
main()
