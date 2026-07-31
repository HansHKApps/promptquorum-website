#!/usr/bin/env node
// One-off converter: public/images/*.png -> *.webp.
// Every hero PNG is 1200x675 (verified separately before running this).
//
// Uses LOSSLESS WebP, not quality-82 lossy. These heroes are flat-color/text
// illustrations (generated header bars, numbered bullet cards, etc.), not
// photographs — measured on samples, lossless WebP beat quality-82 lossy on
// *both* axes for this content type (e.g. 56% smaller than PNG vs lossy's
// 48%), because lossy's DCT-based compression doesn't help flat regions and
// only adds visible artifacts around text edges. effort:6 (max) is used
// since this is a one-off batch job, not a per-request encode.
//
// Does NOT delete the source PNGs — that's a separate, explicit step after
// this script's output has been verified and references have been updated.
// Usage: node scripts/convert-heroes-to-webp.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const IMAGES_DIR = path.join(ROOT, 'public/images')

async function convertOne(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp')
  const srcMeta = await sharp(pngPath).metadata()
  const srcSize = fs.statSync(pngPath).size

  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)

  // Verify: output must open cleanly and have identical dimensions to the source.
  const outMeta = await sharp(webpPath).metadata()
  if (outMeta.width !== srcMeta.width || outMeta.height !== srcMeta.height) {
    throw new Error(
      `Dimension mismatch for ${path.basename(pngPath)}: source ${srcMeta.width}x${srcMeta.height}, output ${outMeta.width}x${outMeta.height}`
    )
  }

  const outSize = fs.statSync(webpPath).size
  return { srcSize, outSize }
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f.toLowerCase().endsWith('.png'))
  console.log(`Converting ${files.length} PNGs to WebP (lossless, effort 6)...`)

  let totalSrc = 0
  let totalOut = 0
  let done = 0
  const failures = []

  for (const file of files) {
    const pngPath = path.join(IMAGES_DIR, file)
    try {
      const { srcSize, outSize } = await convertOne(pngPath)
      totalSrc += srcSize
      totalOut += outSize
    } catch (err) {
      failures.push({ file, error: err.message })
    }
    done++
    if (done % 500 === 0) console.log(`  ${done}/${files.length}...`)
  }

  console.log('')
  console.log(`✅ Converted ${done - failures.length}/${files.length}`)
  console.log(`   Total PNG size:  ${(totalSrc / 1024 / 1024).toFixed(1)} MB`)
  console.log(`   Total WebP size: ${(totalOut / 1024 / 1024).toFixed(1)} MB`)
  console.log(`   Reduction: ${(100 * (1 - totalOut / totalSrc)).toFixed(1)}%`)

  if (failures.length > 0) {
    console.log('')
    console.log(`❌ ${failures.length} failures:`)
    for (const f of failures.slice(0, 20)) {
      console.log(`   ${f.file}: ${f.error}`)
    }
    process.exit(1)
  }
}

main()
