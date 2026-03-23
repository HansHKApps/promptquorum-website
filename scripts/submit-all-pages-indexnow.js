#!/usr/bin/env node

/**
 * Submit ALL pages on promptquorum.com to Bing IndexNow
 * Run once to index all existing content
 *
 * Usage: npm run index-all-pages
 */

const peArticles = [
  'what-is-prompt-engineering',
  'how-prompt-engineering-evolved',
  '5-building-blocks-every-prompt-needs',
  'ai-hallucinations-why-ai-makes-things-up',
  'faster-ai-answers-how-to-prompt-for-speed',
  'temperature-and-top-p-control-ai-creativity',
  'context-windows-explained-why-ai-forgets',
  'beyond-text-how-to-prompt-with-images',
  'tokens-costs-limits-economics-of-ai-prompting',
  'system-prompt-vs-user-prompt-whats-the-difference',
  'gpt-claude-or-gemini-how-to-pick-the-right-model',
  'which-prompt-framework-should-you-use',
  'the-single-step-prompt-method',
  'ape-framework',
  'craft-framework',
  'co-star-framework',
  'specs-framework',
  'risen-framework',
  'trace-framework',
  'googles-prompting-guide',
  'rtf-framework',
  'build-your-own-prompt-framework',
  'zero-shot-vs-few-shot',
  'constrained-prompting',
  'chain-of-thought-prompting',
  'persona-prompting',
  'prompt-chaining',
  'negative-prompting',
  'self-consistency-prompting',
  'tree-of-thought-and-react',
  'rag-explained',
  'structured-output-and-json-mode',
  'write-better-code-with-ai',
  'ai-powered-research',
  'seo-meets-ai',
  'teaching-with-ai',
  'extract-and-summarise',
  'ai-code-review',
  'prompting-across-languages',
  'control-the-output',
  'build-quality-checks',
  'your-brand-voice-ai',
  'build-a-prompt-library',
]

const blogArticles = [
  'prompt-frameworks',
  'local-ai-vs-cloud',
  'ai-model-comparison',
  'quorum',
  'prompt-optimization',
  'enterprise-data-privacy',
  'research-prompt-optimization-impact',
  'ai-consensus-scoring',
  'promptquorum-vs-askquorum',
  'what-is-ai-consensus-scoring',
]

const staticPages = [
  '/',
  '/features',
  '/features/optimization',
  '/features/quorum',
  '/compare',
  '/how-it-works',
  '/faq',
  '/about',
  '/privacy',
  '/download',
  '/waitlist',
  '/prompt-engineering',
  '/blog',
  '/frameworks',
]

// Build full URLs
const peUrls = peArticles.map((slug) => `https://www.promptquorum.com/prompt-engineering/${slug}`)
const blogUrls = blogArticles.map((slug) => `https://www.promptquorum.com/blog/${slug}`)
const frameworkUrls = blogArticles.map((slug) => `https://www.promptquorum.com/frameworks/${slug}`)
const staticUrls = staticPages.map((path) => (path === '/' ? 'https://www.promptquorum.com' : `https://www.promptquorum.com${path}`))

const allUrls = [...staticUrls, ...peUrls, ...blogUrls, ...frameworkUrls]

console.log(`📢 Submitting ${allUrls.length} URLs to Bing IndexNow...`)
console.log(`  • ${staticUrls.length} static pages`)
console.log(`  • ${peUrls.length} prompt engineering articles`)
console.log(`  • ${blogUrls.length} blog articles`)
console.log(`  • ${frameworkUrls.length} framework pages\n`)

// Chunk into groups of 10,000 (Bing limit per request)
const chunkSize = 10000
for (let i = 0; i < allUrls.length; i += chunkSize) {
  const chunk = allUrls.slice(i, i + chunkSize)
  console.log(`Submitting batch ${Math.floor(i / chunkSize) + 1}/${Math.ceil(allUrls.length / chunkSize)}...`)

  fetch('https://www.promptquorum.com/api/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urls: chunk }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        console.log(`✅ Batch submitted: ${data.message}`)
      } else {
        console.error(`❌ Batch failed: ${data.error}`)
      }
    })
    .catch((err) => {
      console.error(`❌ Request failed: ${err.message}`)
    })
}

console.log('\n✨ All batches submitted. Bing will index these pages within 24 hours.')
