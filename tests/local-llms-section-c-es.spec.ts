import { test, expect } from '@playwright/test'

/**
 * Section C (Tools & Interfaces) — Spanish (es) translation verification
 * Tests the 7 articles from the "Comparativas de herramientas" hub section
 * All routes use ?lang=es query param (local-llms cluster routing pattern)
 */

const SECTION_C_ARTICLES = [
  {
    slug: 'ollama-vs-lm-studio',
    expectedSpanishTitle: 'Ollama vs LM Studio',
    expectedSpanishText: 'línea de comandos',
    expectedSpanishFaq: '¿Puedo usar Ollama y LM Studio al mismo tiempo?',
    notExpectedEnglishText: 'CLI-first tool',
  },
  {
    slug: 'lm-studio-vs-jan-ai',
    expectedSpanishTitle: 'Jan AI vs LM Studio',
    expectedSpanishText: 'aplicaciones de escritorio',
    expectedSpanishFaq: '¿Cuál debería elegir',
    notExpectedEnglishText: 'desktop apps for running local LLMs',
  },
  {
    slug: 'qwen-coder-vs-deepseek-mistral-local-2026',
    expectedSpanishTitle: 'Benchmark de Código Local',
    expectedSpanishText: 'cuantización',
    expectedSpanishFaq: '¿Es Qwen 3.6 27B mejor',
    notExpectedEnglishText: 'Local Coding Benchmark',
  },
  {
    slug: 'mobile-local-llms',
    expectedSpanishTitle: 'móviles',
    expectedSpanishText: 'teléfono',
    expectedSpanishFaq: '¿Cuál es la mejor app',
    notExpectedEnglishText: 'Mobile Local LLMs 2026',
  },
  {
    slug: 'best-local-llm-frontends',
    expectedSpanishTitle: 'frontend',
    expectedSpanishText: 'interfaz',
    expectedSpanishFaq: '¿Qué frontend es mejor para RAG?',
    notExpectedEnglishText: 'Best Local LLM Frontends',
  },
  {
    slug: 'local-llms-with-vscode-cursor',
    expectedSpanishTitle: 'VS Code',
    expectedSpanishText: 'completaciones',
    expectedSpanishFaq: '¿Las completaciones de código locales son más rápidas',
    notExpectedEnglishText: 'Setup and Best Practices',
  },
  {
    slug: 'mlx-vs-ollama-vs-llama-cpp-mac',
    expectedSpanishTitle: 'motor de inferencia',
    expectedSpanishText: 'Apple Silicon',
    expectedSpanishFaq: '¿Qué framework es el más rápido?',
    notExpectedEnglishText: 'Which Inference Engine Should You Use',
  },
]

test.describe('Local LLMs Section C (Tools & Interfaces) — Spanish translations', () => {
  test('local-llms hub renders tools-interfaces section in Spanish', async ({ page }) => {
    await page.goto('/local-llms?lang=es')
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 10000 })
    const bodyText = await page.locator('body').innerText()
    // Should contain Spanish section label for tools-interfaces
    expect(bodyText).toMatch(/Herramientas|herramienta|interfaz|Interfaz/)
    await page.screenshot({
      path: 'playwright-report/local-llms-hub-es.png',
      fullPage: false,
    })
  })

  for (const article of SECTION_C_ARTICLES) {
    test(`ES: ${article.slug} renders Spanish content`, async ({ page }) => {
      await page.goto(`/local-llms/${article.slug}?lang=es`)

      // Page title / H1 must be visible
      const heading = page.locator('h1').first()
      await expect(heading).toBeVisible({ timeout: 10000 })
      const headingText = await heading.innerText()

      // Must contain Spanish title fragment
      expect(headingText.toLowerCase()).toContain(article.expectedSpanishTitle.toLowerCase())

      // Must NOT contain the English-only title phrase
      expect(headingText).not.toContain(article.notExpectedEnglishText)

      // Body must contain expected Spanish prose
      const bodyText = await page.locator('body').innerText()
      expect(bodyText).toContain(article.expectedSpanishText)

      await page.screenshot({
        path: `playwright-report/section-c-es-${article.slug}.png`,
        fullPage: false,
      })
    })

    test(`ES: ${article.slug} FAQ section is in Spanish`, async ({ page }) => {
      await page.goto(`/local-llms/${article.slug}?lang=es`)
      await page.waitForLoadState('networkidle')
      const bodyText = await page.locator('body').innerText()
      // FAQ question must appear in Spanish
      expect(bodyText).toContain(article.expectedSpanishFaq)
    })
  }

  test('ES: ollama-vs-lm-studio comparison table has Spanish column headers', async ({ page }) => {
    await page.goto('/local-llms/ollama-vs-lm-studio?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    // Spanish column header instead of English "Feature"
    expect(bodyText).toContain('Característica')
    expect(bodyText).not.toContain('User Interface\nCLI only')
  })

  test('ES: mlx article comparison table has Spanish column headers', async ({ page }) => {
    await page.goto('/local-llms/mlx-vs-ollama-vs-llama-cpp-mac?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    // Main comparison table uses 'Característica' (translated from 'Feature')
    expect(bodyText).toContain('Característica')
    // Speed rows use 'Velocidad' label
    expect(bodyText).toContain('Velocidad')
    // Should not have untranslated 'Feature' as a column header
    expect(bodyText).not.toContain('Feature\nOllama\nMLX')
  })

  test('ES: mobile article hardware table has Spanish column headers', async ({ page }) => {
    await page.goto('/local-llms/mobile-local-llms?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).toContain('Dispositivo')
    expect(bodyText).not.toContain('Device\nMax Model Size')
  })

  test('ES: vscode article code completion table has Spanish column headers', async ({ page }) => {
    await page.goto('/local-llms/local-llms-with-vscode-cursor?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).toContain('Latencia')
    expect(bodyText).not.toContain('Latency\n0.3-0.5')
  })

  test('ES: internal links in article bodies use ?lang=es', async ({ page }) => {
    await page.goto('/local-llms/ollama-vs-lm-studio?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyHtml = await page.locator('body').innerHTML()
    // Article body links should reference ?lang=es
    expect(bodyHtml).toContain('lang=es')
  })

  test('ES: lm-studio-vs-jan-ai key takeaways section renders in Spanish', async ({ page }) => {
    await page.goto('/local-llms/lm-studio-vs-jan-ai?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    // tldr section items
    expect(bodyText).toContain('principiantes')
    expect(bodyText).not.toContain('For beginners')
  })

  test('ES: qwen coder article dispatch table has Spanish column headers', async ({ page }) => {
    await page.goto('/local-llms/qwen-coder-vs-deepseek-mistral-local-2026?lang=es')
    await page.waitForLoadState('networkidle')
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).toContain('Tipo de tarea')
    expect(bodyText).not.toContain('Task Type\nPrivate/GDPR')
  })
})
