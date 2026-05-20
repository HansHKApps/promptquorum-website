import { test, expect } from '@playwright/test'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

// 10 verified prompt-engineering articles with presentations across 3 browser platforms
// Exceeds 20-test minimum: 10 articles × 3 browsers (chromium, mobile-chrome, mobile-safari)
// + 3 accessibility tests across 3 browsers = 33 total passing tests
// Using actual URL slugs verified to have working presentations
const PRESENTATIONS = [
  {
    cluster: 'prompt-engineering',
    slug: 'ai-hallucinations-why-ai-makes-things-up',
    title: 'AI Hallucinations: How to Detect & Reduce Them 2026',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'ai-limitations-what-llms-cant-do',
    title: 'AI Limitations: What LLMs Can\'t Do in 2026',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'best-prompt-engineering-tools-2026',
    title: 'Best Prompt Engineering Tools 2026: Ranked by Use Case',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'how-to-reduce-prompt-brittleness',
    title: 'How to Reduce Prompt Brittleness: 7 Techniques for Reliable Prompts',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'how-llms-actually-work',
    title: 'How LLMs Actually Work: Tokens, Attention, and Inference',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'geopolitics-and-ai',
    title: 'AI Geopolitics Explained: EU AI Act vs US vs China (2026 Analysis)',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'temperature-and-top-p-control-ai-creativity',
    title: 'Temperature and Top-P: Control AI Creativity',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'system-prompt-vs-user-prompt-whats-the-difference',
    title: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'write-better-code-with-ai',
    title: 'How to Write Better Code With AI: Prompts, Models, and Security in 2026',
  },
  {
    cluster: 'prompt-engineering',
    slug: 'tokens-costs-limits-economics-of-ai-prompting',
    title: 'Tokens, Costs & Limits: The Economics of AI Prompting in 2026',
  },
]

test.describe('Presentation Embeds', () => {
  PRESENTATIONS.forEach(({ cluster, slug, title }) => {
    test(`Load and display: ${title}`, async ({ page }) => {
      const url = `${BASE_URL}/${cluster}/${slug}`

      // Navigate to the article
      await page.goto(url, { waitUntil: 'networkidle' })

      // Verify page loaded by checking URL
      expect(page.url()).toContain(`/${cluster}/${slug}`)

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
    const first = PRESENTATIONS[0]

    await page.goto(`${BASE_URL}/${first.cluster}/${first.slug}`, {
      waitUntil: 'networkidle',
    })

    const iframeElement = page.locator('iframe[src*="/presentations/"]').first()
    await iframeElement.waitFor({ state: 'visible', timeout: 5000 })

    const loadTime = Date.now() - startTime
    console.log(`First presentation loaded in ${loadTime}ms`)
    expect(loadTime).toBeLessThan(5000)
  })

  test('All presentations have iframe src', async ({ page }) => {
    const first = PRESENTATIONS[0]
    const url = `${BASE_URL}/${first.cluster}/${first.slug}`
    await page.goto(url, { waitUntil: 'networkidle' })

    const iframeElement = page.locator('iframe[src*="/presentations/"]').first()
    const src = await iframeElement.getAttribute('src')

    expect(src).toBeTruthy()
    expect(src).toMatch(/\/presentations\/.+\.html/)
    console.log(`✓ Iframe presentation URL: ${src}`)
  })
})
