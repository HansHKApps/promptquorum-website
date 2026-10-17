// Deep links from review pages into /directory: ?tool=<slug> must open that tool's drawer,
// and ?os= / ?category= must filter the list. These are client-side behaviours (the page is
// statically rendered), so they can only be checked in a real browser.
//
//   PQ_BASE_URL=https://www.promptquorum.com npx playwright test -c playwright.directory-funnel.config.ts directory-deeplink

import { expect, test } from '@playwright/test'

// The cookie banner also has role=dialog; the tool drawer is the Radix one carrying data-state.
const dialog = (page: import('@playwright/test').Page) => page.locator('[role="dialog"][data-state="open"]')

test.describe('directory deep links', () => {
  test('?tool=lemonade opens that tool, not the bare directory', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
    await page.goto('/directory?tool=lemonade')
    await expect(dialog(page)).toBeVisible({ timeout: 15_000 })
    await expect(dialog(page).getByRole('heading', { name: /lemonade/i })).toBeVisible()
    expect(errors.filter((e) => /hydrat/i.test(e)), 'hydration errors').toEqual([])
  })

  test('?tool=return-editor opens Return Editor', async ({ page }) => {
    await page.goto('/directory?tool=return-editor')
    await expect(dialog(page).getByRole('heading', { name: /return editor/i })).toBeVisible({ timeout: 15_000 })
  })

  test('localized: /de/directory?tool=lm-studio opens LM Studio', async ({ page }) => {
    await page.goto('/de/directory?tool=lm-studio')
    await expect(dialog(page).getByRole('heading', { name: /lm studio/i })).toBeVisible({ timeout: 15_000 })
  })

  test('closing the drawer returns to the directory (still usable)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'the "N of M apps" counter is hidden below md')
    await page.goto('/directory?tool=ollama')
    await expect(dialog(page)).toBeVisible({ timeout: 15_000 })
    await page.keyboard.press('Escape')
    await expect(dialog(page)).toHaveCount(0)
    await expect(page.getByText(/\d+ of \d+ apps/).first()).toBeVisible()
  })

  test('unknown ?tool= is ignored (no drawer, page works)', async ({ page }) => {
    await page.goto('/directory?tool=definitely-not-a-tool')
    await page.waitForLoadState('networkidle')
    await expect(dialog(page)).toHaveCount(0)
  })

  test('?os=linux&category=contract-review filters the list', async ({ page, isMobile }) => {
    test.skip(isMobile, 'the "N of M apps" counter is hidden below md')
    await page.goto('/directory?os=linux&category=contract-review')
    // desktop only: the "N of M apps" counter is hidden below md
    const counter = page.getByText(/\d+ of \d+ apps/).first()
    await expect(counter).toBeVisible({ timeout: 15_000 })
    const text = (await counter.textContent()) ?? ''
    const [, visible, total] = text.match(/(\d+) of (\d+)/) ?? []
    expect(Number(total)).toBeGreaterThan(100)
    expect(Number(visible), `"${text}" should be a filtered subset`).toBeLessThan(Number(total))
  })
})
