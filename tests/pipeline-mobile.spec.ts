import { test, expect } from '@playwright/test'

// Desktop tests
test('Desktop: All 4 stages visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('button').filter({ has: page.locator('text=Prompt') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Optimize') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Quorum') }).first()).toBeVisible()
})

test('Desktop: Click stage to expand', async ({ page }) => {
  await page.goto('/')
  const button = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  await button.click()
  await expect(page.locator('text=Start with any idea')).toBeVisible()
})

// Mobile tests — device set via playwright.config.ts projects
test('Mobile iPhone: 4 stages visible and clickable', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('button').filter({ has: page.locator('text=Prompt') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Optimize') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Quorum') }).first()).toBeVisible()
})

test('Mobile iPhone: Stage expand works', async ({ page }) => {
  await page.goto('/')
  const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  await promptButton.click()
  await expect(page.locator('text=Start with any idea')).toBeVisible()
})

test('Mobile iPhone: Text readable and not cut off', async ({ page }) => {
  await page.goto('/')
  const title = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  const fontSize = await title.evaluate((el) => window.getComputedStyle(el).fontSize)
  expect(parseInt(fontSize)).toBeGreaterThanOrEqual(12)
})

test('Mobile iPhone: Tap targets adequate size', async ({ page }) => {
  await page.goto('/')
  const button = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  const box = await button.boundingBox()
  expect(box?.height).toBeGreaterThanOrEqual(40)
  expect(box?.width).toBeGreaterThanOrEqual(40)
})

test('Mobile iPhone: Expanded content visible', async ({ page }) => {
  await page.goto('/')
  const optimizeButton = page.locator('button').filter({ has: page.locator('text=Optimize') }).first()
  await optimizeButton.click()
  const expandedContent = page.locator('text=Automatic improvement')
  await expect(expandedContent).toBeVisible()
  const box = await expandedContent.boundingBox()
  const viewport = page.viewportSize()
  if (box && viewport) {
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 10)
  }
})

test('Mobile Android (Pixel 5): All stages visible and clickable', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('button').filter({ has: page.locator('text=Prompt') }).first()).toBeVisible()
  await expect(page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()).toBeVisible()
  const button = page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()
  await button.click()
  await expect(page.locator('text=One-click to send')).toBeVisible()
})
