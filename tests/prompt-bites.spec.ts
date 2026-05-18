import { test, expect } from '@playwright/test'

test.describe('Prompt Bites hub', () => {
  test('hub page renders with article cards', async ({ page }) => {
    await page.goto('/prompt-bites')
    await expect(page).toHaveTitle(/Prompt Bites/)
    const cards = page.locator('[data-testid="prompt-bite-card"], a[href*="/prompt-bites/"]')
    await expect(cards.first()).toBeVisible()
    await page.screenshot({ path: 'playwright-report/prompt-bites-hub.png', fullPage: true })
  })
})

test.describe('Prompt Bites article', () => {
  test('article renders quickAnswerTop block', async ({ page }) => {
    await page.goto('/prompt-bites/how-much-vram-for-local-llm')
    await expect(page.locator('.prompt-bite-h1')).toBeVisible()
    await expect(page.locator('.prompt-bite-answer')).toBeVisible()
    await page.screenshot({ path: 'playwright-report/prompt-bites-article.png', fullPage: true })
  })

  test('article is noindex', async ({ page }) => {
    await page.goto('/prompt-bites/how-much-vram-for-local-llm')
    const robots = await page.locator('meta[name="robots"]').getAttribute('content')
    expect(robots).toMatch(/noindex/)
  })

  test('DE locale renders', async ({ page }) => {
    await page.goto('/de/prompt-bites/how-much-vram-for-local-llm')
    await expect(page.locator('.prompt-bite-h1')).toBeVisible()
    await page.screenshot({ path: 'playwright-report/prompt-bites-article-de.png', fullPage: true })
  })
})
