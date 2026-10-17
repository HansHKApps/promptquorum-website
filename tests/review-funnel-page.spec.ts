// Review-page funnel behaviours that need a real rendered page.
//   PQ_BASE_URL=http://localhost:3433 npx playwright test -c playwright.directory-funnel.config.ts review-funnel-page

import { expect, test } from '@playwright/test'

const REVIEW = '/power-local-llm/return-editor-review'

test.describe('review page funnel', () => {
  test('block cards are tools named in the page\'s own competitor section', async ({ page }) => {
    await page.goto(REVIEW)
    const cards = page.locator('[data-directory-block="start"] ul a')
    await expect(cards).toHaveCount(3)
    const names = (await cards.locator('span').filter({ hasText: /\S/ }).allTextContents())
      .filter((_, i) => i % 2 === 0) // name span, then platforms/license span per card
    const pageText = (await page.locator('article').innerText()).toLowerCase()
    for (const n of names) expect(pageText, `${n} must be in the page's competitor section`).toContain(n.toLowerCase())
  })

  test('start and end blocks show the same similar tools', async ({ page }) => {
    await page.goto(REVIEW)
    const hrefs = async (pos: string) =>
      page.locator(`[data-directory-block="${pos}"] ul a`).evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')))
    expect(await hrefs('start')).toEqual(await hrefs('end'))
  })

  test('the page does not list itself under "also mentioned in"', async ({ page }) => {
    await page.goto(REVIEW)
    const details = page.locator('article details')
    const n = await details.count()
    for (let i = 0; i < n; i++) await details.nth(i).evaluate((d) => ((d as HTMLDetailsElement).open = true))
    const own = page.locator(`article details a[href$="${REVIEW}"]`)
    await expect(own).toHaveCount(0)
  })

  test('the old "companion material" sentence is gone from Get It', async ({ page }) => {
    await page.goto(REVIEW)
    await expect(page.getByText(/companion material to the app/i)).toHaveCount(0)
    // ...but the rest of the note (verified version) is still there
    await expect(page.getByText(/Version as verified/i).first()).toBeVisible()
  })

  test('end block second line is a working filter, not "Not on Linux?"', async ({ page }) => {
    await page.goto(REVIEW)
    const link = page.locator('[data-directory-block="end"] a').last()
    const href = (await link.getAttribute('href')) ?? ''
    expect(href).toMatch(/^\/directory\?(os=[a-z]+&)?category=contract-review$/)
    expect((await link.innerText()).toLowerCase()).not.toContain('not on')
  })

  test('clicking a similar-tool card opens THAT tool in the directory', async ({ page }) => {
    await page.goto(REVIEW)
    const card = page.locator('[data-directory-block="start"] ul a').first()
    const name = ((await card.locator('span').first().innerText()) ?? '').trim()
    await card.click()
    await expect(page).toHaveURL(/\/directory\?tool=/)
    await expect(page.locator('[role="dialog"][data-state="open"]').getByRole('heading', { name: new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') })).toBeVisible({ timeout: 15_000 })
  })

  test('clicking the filtered end-block link applies that filter (click-through, not a direct load)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'the "N of M apps" counter is hidden below md')
    await page.goto(REVIEW)
    await page.locator('[data-directory-block="end"] a').last().click()
    await expect(page).toHaveURL(/category=contract-review/)
    const counter = page.getByText(/\d+ of \d+ apps/).first()
    await expect(counter).toBeVisible({ timeout: 15_000 })
    const [, visible, total] = ((await counter.textContent()) ?? '').match(/(\d+) of (\d+)/) ?? []
    expect(Number(visible)).toBeLessThan(Number(total))
  })

  test('View X in the directory opens that tool, not the bare directory', async ({ page }) => {
    await page.goto(REVIEW)
    await page.locator('[data-directory-block="start"] a', { hasText: /Return Editor/ }).first().click()
    await expect(page).toHaveURL(/\/directory\?tool=return-editor/)
    await expect(page.locator('[role="dialog"][data-state="open"]').getByRole('heading', { name: /return editor/i })).toBeVisible({ timeout: 15_000 })
  })
})
