#!/usr/bin/env node
// Converts Hans's AI-generated topic-picture PNGs (2688x896, exactly 3:1) to the WebP files the
// Ask Hans side panel actually serves (public/askhans/<key>.webp, 1200x400, quality 82).
//
// Source PNGs never go into public/ (they're 7-8x the pixel count the panel needs) — drop them into
// askhans-source-pngs/ at the repo root (gitignored) and run this script; it writes the resized WebP
// straight into public/askhans/ and leaves the PNGs where they are (delete them yourself once you've
// checked the result).
//
// Usage: node scripts/convert-askhans-topic-pictures.mjs [sourceDir]
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = process.argv[2] ?? 'askhans-source-pngs'
const OUT_DIR = 'public/askhans'
const EXPECTED_RATIO = 3
const RATIO_TOLERANCE = 0.02

const { categories } = JSON.parse(fs.readFileSync('src/lib/askhans/categories.json', 'utf8'))
const KEYS = new Set(categories.map((c) => c.key))

async function convertOne(pngPath, key) {
  const meta = await sharp(pngPath).metadata()
  const ratio = (meta.width ?? 0) / (meta.height ?? 1)
  if (Math.abs(ratio - EXPECTED_RATIO) > RATIO_TOLERANCE) {
    console.error(`✗ ${key}: expected ~3:1, got ${meta.width}x${meta.height} (ratio ${ratio.toFixed(3)}) — skipped`)
    return false
  }
  const outPath = path.join(OUT_DIR, `${key}.webp`)
  await sharp(pngPath).resize(1200, 400, { fit: 'cover' }).webp({ quality: 82 }).toFile(outPath)
  console.log(`✓ ${key}: ${meta.width}x${meta.height} → ${outPath} (1200x400)`)
  return true
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.log(`no ${SOURCE_DIR}/ directory — nothing to convert yet`)
    return
  }
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.toLowerCase().endsWith('.png'))
  if (files.length === 0) {
    console.log(`${SOURCE_DIR}/ has no PNGs yet`)
    return
  }
  let ok = 0
  for (const file of files) {
    const key = file.replace(/\.png$/i, '')
    if (!KEYS.has(key)) {
      console.error(`✗ ${file}: "${key}" is not a known category key — skipped`)
      continue
    }
    if (await convertOne(path.join(SOURCE_DIR, file), key)) ok++
  }
  console.log(`converted ${ok}/${files.length} picture(s)`)
  console.log('Remember: set "image" to "/askhans/<key>.webp" in categories.json for each converted category, then npm run askhans:check.')
}

main()
