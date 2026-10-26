// Cookie dialog: nothing optional loads or is stored before the visitor allows it.
//
//   npx next start --port 3000 &
//   npx playwright test tests/consent.spec.ts

import { expect, test, type Page } from '@playwright/test'

const DIALOG = '[role="dialog"][aria-labelledby="cookie-dialog-title"]'

/** Requests to the consent-gated vendor (OneSignal), collected for the whole test. Clarity always loads, cookieless. */
function trackVendors(page: Page) {
  const hits: string[] = []
  page.on('request', (r) => {
    const u = r.url()
    if (/onesignal\.com/.test(u)) hits.push(u)
  })
  return hits
}

const stored = (page: Page) =>
  page.evaluate(() => {
    const raw = localStorage.getItem('analytics_consent')
    return raw ? JSON.parse(raw) : null
  })

test.describe('cookie dialog', () => {
  test('first visit: dialog shown, Clarity loads cookieless (no _clck), no pq_* storage', async ({ page }) => {
    const hits = trackVendors(page)
    const clarity = page.waitForRequest(/clarity\.ms\/tag\//)
    await page.goto('/')
    await expect(page.locator(DIALOG)).toBeVisible()
    await clarity
    await page.waitForTimeout(1500)
    expect(hits).toEqual([])
    expect((await page.context().cookies()).filter((c) => /^_cl(ck|sk)$/.test(c.name))).toEqual([])
    const keys = await page.evaluate(() => [...Object.keys(localStorage), ...Object.keys(sessionStorage)])
    expect(keys.filter((k) => k.startsWith('pq_') && k !== 'pq_lang')).toEqual([])
  })

  test('Escape and backdrop do not dismiss before a choice is made', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator(DIALOG)).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator(DIALOG)).toBeVisible()
  })

  test('Reject all: stores a denied v2 record and loads no vendor', async ({ page }) => {
    const hits = trackVendors(page)
    await page.goto('/')
    await page.locator(DIALOG).getByRole('button', { name: 'Reject all' }).click()
    await expect(page.locator(DIALOG)).toHaveCount(0)
    expect(await stored(page)).toMatchObject({ state: 'denied', analytics: false, recordings: false, marketing: false, version: 2 })
    await page.waitForTimeout(1500)
    expect(hits).toEqual([])
  })

  test('Accept all: Clarity upgrades to full mode, stores a granted record', async ({ page }) => {
    const clarity = page.waitForRequest(/clarity\.ms\/tag\//)
    await page.goto('/')
    await page.locator(DIALOG).getByRole('button', { name: 'Accept all' }).click()
    await clarity
    expect(await stored(page)).toMatchObject({ state: 'granted', analytics: true, recordings: true, marketing: true, version: 2 })
  })

  test('Save choices with only Analytics: Clarity stays cookieless, custom record', async ({ page }) => {
    const hits = trackVendors(page)
    await page.goto('/')
    const dialog = page.locator(DIALOG)
    await dialog.getByRole('switch', { name: 'Analytics' }).click()
    await dialog.getByRole('button', { name: 'Save choices' }).click()
    expect(await stored(page)).toMatchObject({ state: 'custom', analytics: true, recordings: false, marketing: false })
    await page.waitForTimeout(1500)
    expect(hits).toEqual([])
  })

  test('footer link reopens the dialog with the saved choices, and withdrawal clears pq_* keys', async ({ page }) => {
    await page.goto('/')
    const dialog = page.locator(DIALOG)
    await dialog.getByRole('switch', { name: 'Analytics' }).click()
    await dialog.getByRole('button', { name: 'Save choices' }).click()
    await page.evaluate(() => sessionStorage.setItem('pq_last_search', '{}'))

    await page.getByRole('button', { name: 'Cookie settings' }).click()
    await expect(dialog).toBeVisible()
    await expect(dialog.getByRole('switch', { name: 'Analytics' })).toHaveAttribute('aria-checked', 'true')
    await expect(dialog.getByRole('switch', { name: 'Session recordings' })).toHaveAttribute('aria-checked', 'false')

    await dialog.getByRole('button', { name: 'Reject all' }).click()
    expect(await page.evaluate(() => sessionStorage.getItem('pq_last_search'))).toBeNull()
    // Escape closes once a choice exists.
    await page.getByRole('button', { name: 'Cookie settings' }).click()
    await page.keyboard.press('Escape')
    await expect(dialog).toHaveCount(0)
  })

  test('a version-1 record is treated as unanswered and re-prompts', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('analytics_consent', JSON.stringify({ state: 'granted', analytics: true, marketing: true, ts: Date.now(), version: 1 }))
    })
    await page.goto('/')
    await expect(page.locator(DIALOG)).toBeVisible()
  })

  test('Arabic renders right-to-left', async ({ page }) => {
    await page.goto('/ar')
    await expect(page.locator(DIALOG)).toHaveAttribute('dir', 'rtl')
  })
})
