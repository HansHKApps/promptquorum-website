#!/usr/bin/env node

/**
 * Utility script to notify Bing IndexNow of article URLs
 *
 * Usage:
 *   node scripts/notify-indexnow.js system-prompt-vs-user-prompt
 *   node scripts/notify-indexnow.js system-prompt-vs-user-prompt advanced-prompting
 */

const articleSlugs = process.argv.slice(2)

if (articleSlugs.length === 0) {
  console.error('Usage: node scripts/notify-indexnow.js <slug1> [slug2] ...')
  console.error('Example: node scripts/notify-indexnow.js system-prompt-vs-user-prompt')
  process.exit(1)
}

const urls = articleSlugs.map((slug) => `https://www.promptquorum.com/prompt-engineering/${slug}`)

console.log(`📢 Submitting ${urls.length} URL(s) to Bing IndexNow...`)
console.log(urls.map((u) => `  • ${u}`).join('\n'))

fetch('http://localhost:3000/api/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ urls }),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.success) {
      console.log(`✅ ${data.message}`)
    } else {
      console.error(`❌ Error: ${data.error}`)
      process.exit(1)
    }
  })
  .catch((err) => {
    console.error(`❌ Failed to submit: ${err.message}`)
    process.exit(1)
  })
