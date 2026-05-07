import { test, expect } from '@playwright/test'

// Tests A, B, D from the verification matrix for path-prefix language routing
// on the /power-local-llm cluster. Runs against live production.

const CLUSTER_ARTICLE = '/power-local-llm/best-local-ai-app-low-end-pc'

async function openSwitcherAndPickGerman(page) {
  // Header banner houses the language switcher (top-right, label "EN")
  const langButton = page.getByRole('banner').getByRole('button', { name: /EN/ })
  await langButton.click()
  await page.locator('button:has-text("Deutsch")').click()
}

async function openSwitcherAndPickEnglish(page, currentLangLabel: RegExp) {
  const langButton = page.getByRole('banner').getByRole('button', { name: currentLangLabel })
  await langButton.click()
  await page.locator('button:has-text("English")').click()
}

test.describe('Power Local LLM — path-prefix language switcher', () => {
  test('Test A: cluster EN → DE switches to /de/ path (no ?lang=)', async ({ page }) => {
    await page.goto(CLUSTER_ARTICLE)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')

    await openSwitcherAndPickGerman(page)

    // Full server navigation expected — wait for new URL
    await page.waitForURL(/\/de\/power-local-llm\/best-local-ai-app-low-end-pc(\?|$)/, { timeout: 10000 })

    expect(page.url()).toContain('/de/power-local-llm/best-local-ai-app-low-end-pc')
    expect(page.url()).not.toContain('lang=')

    // German placeholder badge or html lang attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  })

  test('Test D: cluster DE → EN switches back to root cluster path', async ({ page }) => {
    await page.goto('/de' + CLUSTER_ARTICLE)
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')

    await openSwitcherAndPickEnglish(page, /DE/)

    await page.waitForURL(new RegExp(`${CLUSTER_ARTICLE}(\\?|$)`), { timeout: 10000 })
    // Must NOT be /de/... and must NOT have ?lang=
    expect(page.url()).not.toContain('/de/power-local-llm')
    expect(page.url()).not.toContain('lang=')
    expect(page.url()).toContain(CLUSTER_ARTICLE)

    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('Test B: non-cluster /local-llms/ EN → DE keeps query-string routing (regression)', async ({ page }) => {
    await page.goto('/local-llms/llm-quantization-explained')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')

    await openSwitcherAndPickGerman(page)

    // Existing behaviour: ?lang=de query string, NOT a path prefix
    await page.waitForURL(/\/local-llms\/llm-quantization-explained\?lang=de/, { timeout: 10000 })
    expect(page.url()).toContain('lang=de')
    expect(page.url()).not.toContain('/de/local-llms')
  })
})
