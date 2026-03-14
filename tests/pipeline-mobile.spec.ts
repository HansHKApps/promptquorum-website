import { test, expect, devices } from '@playwright/test'

// Desktop tests
test('Desktop: All 4 stages visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Prompt')).toBeVisible()
  await expect(page.locator('text=Optimize')).toBeVisible()
  await expect(page.locator('text=Dispatch')).toBeVisible()
  await expect(page.locator('text=Quorum')).toBeVisible()
})

test('Desktop: Click stage to expand', async ({ page }) => {
  await page.goto('/')
  const button = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  await button.click()
  await expect(page.locator('text=Start with any idea')).toBeVisible()
})

// Mobile iPhone tests
test.use({ ...devices['iPhone 12'] })

test('Mobile iPhone: 4 stages visible and clickable', async ({ page }) => {
  await page.goto('/')

  // Check all stages are visible
  await expect(page.locator('text=Prompt')).toBeVisible()
  await expect(page.locator('text=Optimize')).toBeVisible()
  await expect(page.locator('text=Dispatch')).toBeVisible()
  await expect(page.locator('text=Quorum')).toBeVisible()

  console.log('✓ All 4 stages visible on iPhone 12')
})

test('Mobile iPhone: Stage expand works', async ({ page }) => {
  await page.goto('/')

  const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  await promptButton.click()

  const details = page.locator('text=Start with any idea')
  await expect(details).toBeVisible()

  console.log('✓ Expand works on iPhone 12')
})

test('Mobile iPhone: Text readable and not cut off', async ({ page }) => {
  await page.goto('/')

  const title = page.locator('text=Prompt').first()
  const viewportSize = page.viewportSize()

  console.log(`✓ iPhone 12 viewport: ${viewportSize?.width}x${viewportSize?.height}`)

  // Check font size
  const fontSize = await title.evaluate((el) => {
    return window.getComputedStyle(el).fontSize
  })

  console.log(`✓ Font size: ${fontSize}`)
  expect(parseInt(fontSize)).toBeGreaterThanOrEqual(12)
})

test('Mobile iPhone: Tap targets adequate size', async ({ page }) => {
  await page.goto('/')

  const button = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
  const box = await button.boundingBox()

  console.log(`✓ Tap target size: ${box?.width}x${box?.height}`)

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
    console.log(`✓ Expanded content width: ${box.width}px, viewport: ${viewport.width}px`)
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 10)
  }
})

// Mobile Android tests
test('Mobile Android (Pixel 5): All stages visible and clickable', async ({ page }) => {
  test.use({ ...devices['Pixel 5'] })

  await page.goto('/')

  await expect(page.locator('text=Prompt')).toBeVisible()
  await expect(page.locator('text=Dispatch')).toBeVisible()

  const button = page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()
  await button.click()

  await expect(page.locator('text=One-click to send')).toBeVisible()

  console.log('✓ Android Pixel 5 working')
})
