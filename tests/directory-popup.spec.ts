// Engagement popup on review pages (DirectoryPopup). Uses Playwright's fake
// clock so the 30 s active-time rule is tested without waiting 30 s.
//
// Run against a running server (npm run dev is broken — see CLAUDE.md):
//   npx next dev --webpack --port 3433
//   PQ_BASE_URL=http://localhost:3433 npx playwright test -c playwright.directory-funnel.config.ts

import { expect, test, type Page } from '@playwright/test'

const REVIEW = '/power-local-llm/omlx-review'
const NON_REVIEW = '/power-local-llm/local-llm-code-review-ci-cd'
const POPUP = '[data-directory-popup]'

/**
 * Playwright sets navigator.webdriver = true, which the popup (correctly) treats as a bot.
 * Tests of the human path present as a normal browser; the bot test does not call this.
 */
async function actHuman(page: Page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false })
  })
}

/**
 * The site's Google-preferred-sources card is a sitewide 30 s wall-clock prompt that shares the
 * same single prompt slot (src/lib/promptSlot.ts). A first-time visitor would see it first and the
 * popup would wait until it is dismissed. Cap it here so the popup is tested in isolation; the
 * sequencing itself is covered by 'waits for the shared prompt slot'.
 */
async function capOtherPrompts(page: Page) {
  await page.addInitScript(() => {
    const far = String(Date.now() + 30 * 86_400_000)
    window.localStorage.setItem('pq_google_ps_dismissed_until', far)
    window.localStorage.setItem('pq_google_ps_shown_until', far)
  })
}

async function grantConsent(page: Page) {
  await actHuman(page)
  await capOtherPrompts(page)
  await page.addInitScript(() => {
    window.localStorage.setItem('analytics_consent', JSON.stringify({ state: 'accepted', analytics: true, marketing: false, ts: Date.now(), version: 1 }))
  })
}

/** Open a page with a fake clock and let the idle-loaded popup chunk arrive. */
async function open(page: Page, url: string) {
  await page.clock.install()
  await page.goto(url)
  await page.clock.runFor(5000) // fires requestIdleCallback -> mounts the dynamic popup
  await page.waitForTimeout(1500) // real time: the lazy chunk downloads
}

async function interact(page: Page, scrollFraction = 0.4) {
  await page.mouse.move(200, 300)
  await page.evaluate((f) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(0, max * f)
    window.dispatchEvent(new Event('scroll'))
  }, scrollFraction)
}

test.describe('directory popup', () => {
  test('stays hidden without analytics consent', async ({ page }) => {
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
  })

  test('appears only after 30 s of active time and 25% scroll', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(29_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await page.clock.runFor(2_000)
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveAttribute('aria-labelledby', 'directory-popup-title')
    await expect(dialog.getByRole('link')).toHaveAttribute('href', /\/directory\?utm_source=review-popup&utm_medium=onsite&utm_campaign=directory-funnel/)
  })

  test('needs scroll depth, not just time', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page, 0.05)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await interact(page, 0.5)
    await page.clock.runFor(1_000)
    await expect(page.locator(POPUP)).toBeVisible()
  })

  test('timer pauses while the tab is hidden', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.evaluate(() => Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' }))
    await page.clock.runFor(60_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await page.evaluate(() => Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }))
    await page.clock.runFor(29_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await page.clock.runFor(2_000)
    await expect(page.locator(POPUP)).toBeVisible()
  })

  test('ESC and the close button dismiss it for 14 days', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(31_000)
    await expect(page.locator(POPUP)).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator(POPUP)).toHaveCount(0)
    const until = await page.evaluate(() => Number(localStorage.getItem('pq_dir_popup_dismissed_until')))
    const days = (until - Date.now()) / 86_400_000
    expect(days).toBeGreaterThan(13.9)
    expect(days).toBeLessThan(14.1)
    // a reload in the same context must not show it again
    await page.reload()
    await page.clock.runFor(5000)
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
  })

  test('clicking the CTA suppresses it and goes to the directory', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(31_000)
    await page.getByRole('dialog').getByRole('link').click()
    await expect(page).toHaveURL(/\/directory\?utm_source=review-popup/)
    const until = await page.evaluate(() => Number(localStorage.getItem('pq_dir_popup_dismissed_until')))
    expect(until).toBeGreaterThan(Date.now())
  })

  test('a click on any directory link on the page suppresses it', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    // Neutralise navigation so we stay on the page; the capture-phase listener still sees the click.
    await page.evaluate(() => document.addEventListener('click', (e) => e.preventDefault(), false))
    await page.locator('[data-directory-block="start"] a').first().click()
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
  })

  test('waits for the shared prompt slot and shows once it is released', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await page.evaluate(() => {
      ;(window as unknown as { __pqPromptSlot: { current: string | null } }).__pqPromptSlot = { current: 'google_preferred_sources' }
    })
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await page.evaluate(() => {
      ;(window as unknown as { __pqPromptSlot: { current: string | null } }).__pqPromptSlot.current = null
    })
    await page.clock.runFor(1_000)
    await expect(page.locator(POPUP)).toBeVisible()
  })

  test('never shown to automated browsers (navigator.webdriver)', async ({ page }) => {
    // consent granted, full interaction — but no actHuman(): Playwright's own webdriver flag is true
    await page.addInitScript(() => {
      window.localStorage.setItem('analytics_consent', JSON.stringify({ state: 'accepted', analytics: true, marketing: false, ts: Date.now(), version: 1 }))
    })
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
  })

  test('?nopopup=1 disables it', async ({ page }) => {
    await grantConsent(page)
    await open(page, `${REVIEW}?nopopup=1`)
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
  })

  test('absent on non-review pages', async ({ page }) => {
    await grantConsent(page)
    await open(page, NON_REVIEW)
    await interact(page)
    await page.clock.runFor(40_000)
    await expect(page.locator(POPUP)).toHaveCount(0)
    await expect(page.locator('[data-directory-block]')).toHaveCount(0)
  })

  test('hidden when printing', async ({ page }) => {
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(31_000)
    await expect(page.locator(POPUP)).toBeVisible()
    await page.emulateMedia({ media: 'print' })
    await expect(page.locator(POPUP)).toBeHidden()
  })

  test('arabic: rtl dialog, pinned to the inline end (left edge)', async ({ page }) => {
    await grantConsent(page)
    await open(page, `/ar${REVIEW}`)
    await interact(page)
    await page.clock.runFor(31_000)
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveAttribute('dir', 'rtl')
    const box = await dialog.boundingBox()
    const vw = page.viewportSize()!.width
    // desktop viewport: inline-end in RTL is the LEFT side
    if (vw >= 640) expect(box!.x).toBeLessThan(vw / 2)
  })

  test('reduced motion: shown without a slide transition', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await grantConsent(page)
    await open(page, REVIEW)
    await interact(page)
    await page.clock.runFor(31_000)
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    // Tailwind's motion-reduce:transition-none sets transition-property: none (duration stays
    // 0.3s but nothing transitions), and the reduced-motion start state is already the end state.
    await expect(dialog).toHaveCSS('transition-property', 'none')
    await expect(dialog).toHaveCSS('opacity', '1')
  })
})
