#!/usr/bin/env node
// Hero generator for the four PDF-parser reviews (opendataloader-pdf, docling, marker, mineru), all 9 locales = 36 images.
// Adapted from scripts/gen-cocoindex-review-heroes.mjs, but nothing is hand-typed: the localized title comes from each
// review's article file (no year in any of them), and the facts strip (platforms, price, license) comes from the
// directory tile with the directory-i18n wording (labels detailPlatforms/detailPrice/detailLicense, priceFree/priceFreemium,
// platformLabel). No highlights are passed: the route then falls back to the facts as the poster's punch lines.
// Needs the dev server: npx next dev --webpack --port 3444  (HERO_BASE overrides)
// Output: public/images/<slug>-review-hero-<lang>.webp (lossless); the intermediate PNG is deleted.
// Env: ONLY=<lang> limits to one locale, SLUG=<slug> limits to one review.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { createJiti } from 'jiti'

const BASE = process.env.HERO_BASE || 'http://localhost:3444'
const ROOT = process.cwd()
const IMAGES_DIR = path.join(ROOT, 'public/images')
const LANGS = ['en', 'de', 'fr', 'es', 'pt', 'ja', 'zh', 'ar', 'ko']
const REVIEWS = ['opendataloader-pdf', 'docling', 'marker', 'mineru'] // review slug = <tile>-review

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { t } = await jiti.import(path.join(ROOT, 'src/components/local-ai-directory/directory-i18n.ts'))
const { platformLabel } = await jiti.import(path.join(ROOT, 'src/components/local-ai-directory/platformLabels.ts'))

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum',
  ja: 'PromptQuorumガイド', zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}
const PRICE_KEY = { free: 'priceFree', freemium: 'priceFreemium', paid: 'pricePaid' }

async function specFor(slug, lang) {
  const { article } = await jiti.import(path.join(ROOT, `src/lib/power-local-llm/articles/${slug}-review.ts`))
  const { app } = await jiti.import(path.join(ROOT, `src/lib/power-local-llm/apps/${slug}.ts`))
  const title = article[lang]?.title
  if (!title) throw new Error(`no ${lang} title in ${slug}-review.ts`)
  if (!PRICE_KEY[app.price]) throw new Error(`unmapped price "${app.price}" on tile ${slug}`)
  const platforms = (app.platforms || []).map((p) => platformLabel(p, lang)).join(', ')
  const sep = ['ja', 'zh'].includes(lang) ? '、' : ', '
  return {
    title,
    facts: [
      { label: t('detailPlatforms', lang), value: platforms.split(', ').join(sep), tone: 'slate' },
      { label: t('detailPrice', lang), value: t(PRICE_KEY[app.price], lang), tone: 'emerald' },
      { label: t('detailLicense', lang), value: app.license, tone: 'slate' },
    ],
    footer: FOOTER[lang],
  }
}

async function main() {
  let generated = 0, failed = 0
  for (const slug of REVIEWS) {
    if (process.env.SLUG && process.env.SLUG !== slug) continue
    for (const lang of LANGS) {
      if (process.env.ONLY && process.env.ONLY !== lang) continue
      const base = `${slug}-review-hero-${lang}`
      const pngPath = path.join(IMAGES_DIR, `${base}.png`)
      const webpPath = path.join(IMAGES_DIR, `${base}.webp`)
      try {
        const spec = await specFor(slug, lang)
        const res = await fetch(`${BASE}/api/hero-image`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lang, ...spec }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
        fs.writeFileSync(pngPath, Buffer.from(await res.arrayBuffer()))
        await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
        fs.unlinkSync(pngPath)
        console.log(`  ${webpPath}`)
        generated++
      } catch (e) {
        console.error(`FAILED ${slug} ${lang}:`, e.message)
        failed++
      }
    }
  }
  console.log(`done: ${generated} generated, ${failed} failed`)
  if (failed) process.exit(1)
}
main()
