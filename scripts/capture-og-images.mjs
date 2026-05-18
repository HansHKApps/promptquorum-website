#!/usr/bin/env node
/**
 * Capture dynamic OG images from dev server and save as static files
 * Requires: npm run dev to be running on http://localhost:3000
 * Usage: node scripts/capture-og-images.mjs
 */

import { createWriteStream } from 'fs'
import { mkdir } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = dirname(__dirname)
const OUTPUT_DIR = `${PROJECT_ROOT}/public/og-images`

// Top Discover candidate pages (annual + high traffic)
const DISCOVER_CANDIDATES = [
  { slug: 'best-local-llm-apps-android-2026', cluster: 'power-local-llm', freshness_tier: 'semi_annual' },
  { slug: 'best-budget-gpus-local-llm', cluster: 'local-llms', freshness_tier: 'annual' },
  { slug: 'best-local-llms-for-coding', cluster: 'local-llms', freshness_tier: 'semi_annual' },
  { slug: 'best-amd-gpus-local-llm', cluster: 'local-llms', freshness_tier: 'semi_annual' },
  { slug: 'top-open-source-models-ollama', cluster: 'local-llms', freshness_tier: 'semi_annual' },
  { slug: 'best-local-llm-frontends', cluster: 'local-llms', freshness_tier: 'semi_annual' },
  { slug: 'best-beginner-local-llm-models', cluster: 'local-llms', freshness_tier: 'semi_annual' },
  { slug: 'fastest-local-llms-low-end-pcs', cluster: 'local-llms', freshness_tier: 'semi_annual' },
]

async function captureOGImages() {
  try {
    // Create output directory
    await mkdir(OUTPUT_DIR, { recursive: true })
    console.log(`📁 Output directory: ${OUTPUT_DIR}`)

    let succeeded = 0
    let failed = 0

    for (const candidate of DISCOVER_CANDIDATES) {
      try {
        const url = `http://localhost:3000/api/og/${candidate.slug}?lang=en`
        const filename = `${OUTPUT_DIR}/${candidate.slug}.png`

        console.log(`📸 Fetching: ${candidate.slug}...`)

        const response = await fetch(url)
        if (!response.ok) {
          console.error(`  ❌ Failed: HTTP ${response.status}`)
          failed++
          continue
        }

        const buffer = await response.arrayBuffer()
        const stream = createWriteStream(filename)

        stream.write(Buffer.from(buffer))
        stream.end()

        await new Promise((resolve, reject) => {
          stream.on('finish', resolve)
          stream.on('error', reject)
        })

        console.log(`  ✅ Saved: ${filename}`)
        succeeded++
      } catch (error) {
        console.error(`  ❌ Error: ${error.message}`)
        failed++
      }
    }

    console.log(`\n📊 Results: ${succeeded} captured, ${failed} failed`)
    console.log('\n📝 Next step: Add heroImage fields to article data:')
    console.log("   heroImage: '/og-images/[slug].png'")
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

captureOGImages()
