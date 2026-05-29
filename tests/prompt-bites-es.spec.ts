import { test, expect } from '@playwright/test'

const SECTION_A_ARTICLES = [
  {
    slug: 'how-much-vram-for-local-llm',
    expectedSpanishText: 'Cuánta VRAM',
    expectedSpanishAnswer: 'soporta Phi-4 Mini',
    notExpectedEnglishH1: 'How Much VRAM Do You Need',
  },
  {
    slug: 'what-is-q4-k-m-quantization',
    expectedSpanishText: 'cuantización',
    expectedSpanishAnswer: 'compresión k-quant',
    notExpectedEnglishH1: 'What Is Q4_K_M Quantization',
  },
  {
    slug: 'q4-k-m-vs-q8-0',
    expectedSpanishText: 'elegir',
    expectedSpanishAnswer: 'calidad de Q8_0',
    notExpectedEnglishH1: 'Which Should You Pick',
  },
  {
    slug: 'best-ollama-models-rtx-3060-12gb',
    expectedSpanishText: 'Mejores modelos',
    expectedSpanishAnswer: 'uso general es Llama',
    notExpectedEnglishH1: 'Best Ollama Models for RTX 3060',
  },
  {
    slug: 'best-ollama-models-4gb-vram',
    expectedSpanishText: 'ajustado',
    expectedSpanishAnswer: 'Llama 3 8B no cabe',
    notExpectedEnglishH1: 'Best Ollama Models for 4 GB',
  },
  {
    slug: 'how-much-ram-for-7b-model',
    expectedSpanishText: 'RAM necesita',
    expectedSpanishAnswer: 'de inferencia eficiente',
    notExpectedEnglishH1: 'How Much RAM Does a 7B',
  },
  {
    slug: 'vram-for-70b-model',
    expectedSpanishText: 'VRAM necesita',
    expectedSpanishAnswer: 'memoria unificada',
    notExpectedEnglishH1: 'How Much VRAM for a 70B',
  },
  {
    slug: 'best-local-llm-6gb-vram',
    expectedSpanishText: 'Mejor LLM local',
    expectedSpanishAnswer: 'capacidades de chat y programación',
    notExpectedEnglishH1: 'Best Local LLM for 6 GB',
  },
  {
    slug: 'best-quantization-6gb-vram',
    expectedSpanishText: 'cuantización',
    expectedSpanishAnswer: 'punto óptimo',
    notExpectedEnglishH1: 'Which Level Fits',
  },
]

test.describe('Prompt Bites — Section A Spanish (es) translations', () => {
  test('ES hub page renders in Spanish', async ({ page }) => {
    await page.goto('/es/prompt-bites')
    // Hub renders (any title present means no crash)
    await expect(page.locator('h1, h2').first()).toBeVisible()
    const bodyText = await page.locator('body').innerText()
    // Spanish section labels from categories.ts
    expect(bodyText).toMatch(/Cuantización|cuantización|VRAM/)
    await page.screenshot({ path: 'playwright-report/prompt-bites-hub-es.png', fullPage: false })
  })

  for (const article of SECTION_A_ARTICLES) {
    test(`ES article renders Spanish content: ${article.slug}`, async ({ page }) => {
      await page.goto(`/es/prompt-bites/${article.slug}`)

      // H1 must be visible and in Spanish
      const h1 = page.locator('.prompt-bite-h1').first()
      await expect(h1).toBeVisible({ timeout: 8000 })
      const h1Text = await h1.innerText()
      expect(h1Text).not.toContain(article.notExpectedEnglishH1)

      // Page body must contain Spanish text
      const bodyText = await page.locator('body').innerText()
      expect(bodyText).toContain(article.expectedSpanishText)

      // Quick answer box renders with Spanish content
      const answerBox = page.locator('.prompt-bite-answer').first()
      await expect(answerBox).toBeVisible({ timeout: 5000 })
      const answerText = await answerBox.innerText()
      expect(answerText).toContain(article.expectedSpanishAnswer)

      await page.screenshot({
        path: `playwright-report/prompt-bites-es-${article.slug}.png`,
        fullPage: false,
      })
    })
  }

  test('ES Section A: tables render with Spanish column headers', async ({ page }) => {
    await page.goto('/es/prompt-bites/how-much-vram-for-local-llm')
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).toContain('Mejor modelo en Q4_K_M')
    expect(bodyText).not.toContain('Best Model at Q4_K_M')
  })

  test('ES Section A: quantization comparison table has Spanish headers', async ({ page }) => {
    await page.goto('/es/prompt-bites/what-is-q4-k-m-quantization')
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).toContain('Tamaño de archivo')
    expect(bodyText).not.toContain('File Size')
  })

  test('ES Section A: article body links use ?lang=es', async ({ page }) => {
    await page.goto('/es/prompt-bites/how-much-vram-for-local-llm')
    // Article body links (not nav/language-switcher) should have ?lang=es
    // The body content links we wrote contain ?lang=es
    const bodyText = await page.locator('body').innerHTML()
    expect(bodyText).toContain('lang=es')
  })

  test('ES Section A: UI labels are in Spanish', async ({ page }) => {
    await page.goto('/es/prompt-bites/how-much-vram-for-local-llm')
    const bodyText = await page.locator('body').innerText()
    // Labels use CSS uppercase — check case-insensitively
    expect(bodyText.toLowerCase()).toContain('respuesta rápida')
    expect(bodyText.toLowerCase()).toContain('puntos clave')
    expect(bodyText).toContain('Actualizado:')
    expect(bodyText).toContain('← Volver a Prompt Bites')
  })
})
