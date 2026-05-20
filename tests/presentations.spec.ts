import { test, expect } from '@playwright/test'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

// All 11 prompt-engineering articles with embedded presentations
// Using actual URL slugs (from PE_SLUG_TO_KEY in slugs.ts)
const PRESENTATIONS = [
  {
    slug: 'ai-hallucinations-why-ai-makes-things-up',
    title: 'AI Hallucinations: How to Detect & Reduce Them 2026',
  },
  {
    slug: 'ai-limitations-what-llms-cant-do',
    title: 'AI Limitations: What LLMs Can\'t Do in 2026',
  },
  {
    slug: 'best-prompt-engineering-tools-2026',
    title: 'Best Prompt Engineering Tools 2026: Ranked by Use Case',
  },
  {
    slug: 'how-to-reduce-prompt-brittleness',
    title: 'How to Reduce Prompt Brittleness: 7 Techniques for Reliable Prompts',
  },
  {
    slug: 'how-llms-actually-work',
    title: 'How LLMs Actually Work: Tokens, Attention, and Inference',
  },
  {
    slug: 'geopolitics-and-ai',
    title: 'AI Geopolitics Explained: EU AI Act vs US vs China (2026 Analysis)',
  },
  {
    slug: 'temperature-and-top-p-control-ai-creativity',
    title: 'Temperature and Top-P: Control AI Creativity',
  },
  {
    slug: 'system-prompt-vs-user-prompt-whats-the-difference',
    title: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
  },
  {
    slug: 'write-better-code-with-ai',
    title: 'How to Write Better Code With AI: Prompts, Models, and Security in 2026',
  },
  {
    slug: 'tokens-costs-limits-economics-of-ai-prompting',
    title: 'Tokens, Costs & Limits: The Economics of AI Prompting in 2026',
  },
]

test.describe('Presentation Embeds', () => {
  PRESENTATIONS.forEach(({ slug, title }) => {
    test(`Load and display: ${title}`, async ({ page }) => {
      const url = `${BASE_URL}/prompt-engineering/${slug}`

      // Navigate to the article
      await page.goto(url, { waitUntil: 'networkidle' })

      // Verify page loaded by checking URL
      expect(page.url()).toContain(`/prompt-engineering/${slug}`)

      // Find any iframe on the page with src containing /presentations/
      const iframeElement = page.locator('iframe[src*="/presentations/"]').first()

      // Verify iframe exists
      expect(await iframeElement.count()).toBeGreaterThan(0)

      // Verify the iframe src contains the presentation path
      const src = await iframeElement.getAttribute('src')
      expect(src).toBeTruthy()
      expect(src).toMatch(/\/presentations\/.+\.html/)

      // Wait for iframe to be visible
      await iframeElement.waitFor({ state: 'visible', timeout: 10000 })

      // Take a screenshot to confirm visual display
      await page.screenshot({
        path: `test-results/presentation-${slug}.png`,
        fullPage: false,
      })

      console.log(`✓ ${slug}: Presentation loaded and displayed`)
    })
  })
})

test.describe('Presentation Accessibility', () => {
  test('First presentation loads within 5 seconds', async ({ page }) => {
    const startTime = Date.now()

    await page.goto(`${BASE_URL}/prompt-engineering/${PRESENTATIONS[0].slug}`, {
      waitUntil: 'networkidle',
    })

    const iframeElement = page.locator('iframe[src*="/presentations/"]').first()
    await iframeElement.waitFor({ state: 'visible', timeout: 5000 })

    const loadTime = Date.now() - startTime
    console.log(`First presentation loaded in ${loadTime}ms`)
    expect(loadTime).toBeLessThan(5000)
  })

  test('All presentations have iframe src', async ({ page }) => {
    const url = `${BASE_URL}/prompt-engineering/${PRESENTATIONS[0].slug}`
    await page.goto(url, { waitUntil: 'networkidle' })

    const iframeElement = page.locator('iframe[src*="/presentations/"]').first()
    const src = await iframeElement.getAttribute('src')

    expect(src).toBeTruthy()
    expect(src).toMatch(/\/presentations\/.+\.html/)
    console.log(`✓ Iframe presentation URL: ${src}`)
  })
})
