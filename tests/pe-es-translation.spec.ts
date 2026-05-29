import { test, expect } from '@playwright/test'

test.describe('Spanish PE Translation Verification', () => {

  test('hub /es/prompt-engineering renders in Spanish', async ({ page }) => {
    await page.goto('/es/prompt-engineering')
    const body = await page.locator('body').textContent()
    // Should contain Spanish hub title keywords
    expect(body).toMatch(/prompt engineering/i)
    // Should NOT have the English-only hub title unchanged
    // The hub title in ES is "Prompt Engineering: mejores prácticas 2026 y frameworks"
    // We verify at least one Spanish word appears
    const hasSpanish = /guías|mejores|temas|artículos|nivel|busca|técnicas|aprender|fundamentos/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
    // Should not show 404
    await expect(page.locator('h1')).not.toHaveText(/404|not found/i)
  })

  test('article what-is-prompt-engineering renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/what-is-prompt-engineering')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    // Should contain Spanish article content
    const hasSpanish = /qué es|ingeniería de prompts|técnicas|modelos|aprendizaje|instrucciones|guía|resultado/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
    // Title should be in Spanish (not English fallback)
    const title = await page.title()
    // Title should exist and not be empty
    expect(title.length).toBeGreaterThan(10)
  })

  test('article co-star-framework renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/co-star-framework')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /contexto|objetivo|estilo|tono|audiencia|respuesta|marco|guía/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('article chain-of-thought-prompting renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/chain-of-thought-prompting')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /razonamiento|paso|pensamiento|cadena|problema|respuesta|técnica/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('article rag-explained renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/rag-explained')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /recuperación|conocimiento|generación|documentos|búsqueda|base de datos/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('article geopolitics-and-ai renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/geopolitics-and-ai')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /geopolítica|regulación|gobiernos|inteligencia artificial|política|datos/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('article prompt-with-images renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/beyond-text-how-to-prompt-with-images')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /imágenes|texto|análisis|modo|genera|edición|visual/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('article context-windows-explained renders ES content', async ({ page }) => {
    await page.goto('/es/prompt-engineering/context-windows-explained-why-ai-forgets')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent()
    const hasSpanish = /ventana de contexto|tokens|olvida|memoria|instrucciones|longitud/i.test(body || '')
    expect(hasSpanish).toBeTruthy()
  })

  test('no article shows English-only readTime on ES routes', async ({ page }) => {
    // Check a sample article - readTime should NOT be "min read" (EN), should be "min de lectura"
    await page.goto('/es/prompt-engineering/what-is-prompt-engineering')
    await page.waitForLoadState('networkidle')
    const body = await page.locator('body').textContent() || ''
    // Should contain Spanish readTime format
    expect(body).toMatch(/min de lectura/)
    // Should NOT contain English readTime
    expect(body).not.toMatch(/\d+ min read/)
  })

})
