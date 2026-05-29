import { test, expect } from '@playwright/test'

const SECTION_A_ARTICLES = [
  {
    slug: 'how-much-vram-for-local-llm',
    expectedTitleFragment: 'VRAM',
    expectedSpanishText: 'Cuánta VRAM',
    notExpectedEnglish: 'How Much VRAM Do You Need',
  },
  {
    slug: 'what-is-q4-k-m-quantization',
    expectedTitleFragment: 'Q4_K_M',
    expectedSpanishText: 'cuantización',
    notExpectedEnglish: 'What Is Q4_K_M Quantization',
  },
  {
    slug: 'q4-k-m-vs-q8-0',
    expectedTitleFragment: 'Q4_K_M',
    expectedSpanishText: 'elegir',
    notExpectedEnglish: 'Which Should You Pick',
  },
  {
    slug: 'best-ollama-models-rtx-3060-12gb',
    expectedTitleFragment: 'RTX 3060',
    expectedSpanishText: 'Mejores modelos',
    notExpectedEnglish: 'Best Ollama Models for RTX 3060',
  },
  {
    slug: 'best-ollama-models-4gb-vram',
    expectedTitleFragment: '4 GB',
    expectedSpanishText: 'Mejores modelos',
    notExpectedEnglish: 'Best Ollama Models for 4 GB',
  },
  {
    slug: 'how-much-ram-for-7b-model',
    expectedTitleFragment: '7B',
    expectedSpanishText: 'RAM necesita',
    notExpectedEnglish: 'How Much RAM Does a 7B',
  },
  {
    slug: 'vram-for-70b-model',
    expectedTitleFragment: '70B',
    expectedSpanishText: 'VRAM necesita',
    notExpectedEnglish: 'How Much VRAM for a 70B',
  },
  {
    slug: 'best-local-llm-6gb-vram',
    expectedTitleFragment: '6 GB',
    expectedSpanishText: 'Mejor LLM local',
    notExpectedEnglish: 'Best Local LLM for 6 GB',
  },
  {
    slug: 'best-quantization-6gb-vram',
    expectedTitleFragment: 'cuantización',
    expectedSpanishText: 'cuantización',
    notExpectedEnglish: 'Which Level Fits',
  },
]

test.describe('Prompt Bites — Section A Spanish (es) translations', () => {
  test('ES hub page renders with Spanish title', async ({ page }) => {
    await page.goto('/es/prompt-bites')
    await expect(page).toHaveTitle(/Prompt Bites/)
    await page.screenshot({ path: 'playwright-report/prompt-bites-hub-es.png', fullPage: true })
  })

  for (const article of SECTION_A_ARTICLES) {
    test(`ES article renders: ${article.slug}`, async ({ page }) => {
      await page.goto(`/es/prompt-bites/${article.slug}`)

      // H1 must be visible
      const h1 = page.locator('.prompt-bite-h1, h1').first()
      await expect(h1).toBeVisible()

      // Spanish text must appear somewhere on the page
      const bodyText = await page.locator('body').innerText()
      expect(bodyText).toContain(article.expectedSpanishText)

      // English title must NOT appear as the page title/h1
      const h1Text = await h1.innerText()
      expect(h1Text).not.toContain(article.notExpectedEnglish)

      // Quick answer block must be visible
      await expect(page.locator('.prompt-bite-answer, [class*="answer"]').first()).toBeVisible()

      await page.screenshot({
        path: `playwright-report/prompt-bites-es-${article.slug}.png`,
        fullPage: false,
      })
    })
  }

  test('ES Section A: tables render with Spanish column headers', async ({ page }) => {
    await page.goto('/es/prompt-bites/how-much-vram-for-local-llm')
    const bodyText = await page.locator('body').innerText()
    // Spanish column headers from the table
    expect(bodyText).toMatch(/Mejor modelo en Q4_K_M|Velocidad|VRAM/)
    // English column header must not be present
    expect(bodyText).not.toContain('Best Model at Q4_K_M')
  })

  test('ES Section A: outgoing links use ?lang=es', async ({ page }) => {
    await page.goto('/es/prompt-bites/how-much-vram-for-local-llm')
    // Check that internal links within the article content include ?lang=es
    const links = await page.locator('a[href*="prompt-bites"]').all()
    for (const link of links) {
      const href = await link.getAttribute('href')
      if (href && href.includes('/prompt-bites/') && !href.startsWith('/es/')) {
        expect(href).toContain('lang=es')
      }
    }
  })
})
