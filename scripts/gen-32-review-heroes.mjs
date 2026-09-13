#!/usr/bin/env node
// One-off batch job: generate hero images (all 9 languages) for the 32
// FeatureAppPost review articles that were missing them.
// Specs are pre-built by _tmp_build_specs.mjs into hero-specs.json (scratchpad).
// Resumable: skips any output .webp that already exists.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3415'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SPECS_PATH = '/private/tmp/claude-501/-Users-hanskuepper/1bfebd24-d7aa-4d3c-9a55-3709ea9b3063/scratchpad/hero-specs.json'

const specs = JSON.parse(fs.readFileSync(SPECS_PATH, 'utf8'))

async function generateOne(articleSlug, lang, spec) {
  const webpPath = path.join(IMAGES_DIR, `${articleSlug}-hero-${lang}.webp`)
  if (fs.existsSync(webpPath)) {
    console.log(`  SKIP (exists) ${articleSlug}-hero-${lang}.webp`)
    return { status: 'skipped' }
  }

  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lang,
      title: spec.title,
      subtitle: spec.subtitle,
      bullets: spec.bullets,
      facts: spec.facts,
      footer: spec.footer,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }

  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${articleSlug}-hero-${lang}.png`)
  fs.writeFileSync(pngPath, buf)

  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)

  console.log(`  OK ${articleSlug}-hero-${lang}.webp (${buf.length} bytes PNG -> ${fs.statSync(webpPath).size} bytes WebP)`)
  return { status: 'generated' }
}

async function main() {
  let generated = 0
  let skipped = 0
  const failures = []

  for (const [articleSlug, langs] of Object.entries(specs)) {
    console.log(`=== ${articleSlug} ===`)
    for (const [lang, spec] of Object.entries(langs)) {
      try {
        const r = await generateOne(articleSlug, lang, spec)
        if (r.status === 'generated') generated++
        else skipped++
      } catch (err) {
        console.error(`  FAIL ${articleSlug}-hero-${lang}: ${err.message}`)
        failures.push({ articleSlug, lang, error: err.message })
      }
    }
  }

  console.log('')
  console.log(`Generated: ${generated}, Skipped (already existed): ${skipped}, Failed: ${failures.length}`)
  if (failures.length > 0) {
    console.log('Failures:')
    for (const f of failures) console.log(`  ${f.articleSlug} ${f.lang}: ${f.error}`)
    process.exitCode = 1
  }
}

main()
