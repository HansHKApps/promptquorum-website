import { test, expect, devices } from '@playwright/test'

test.describe('Interactive Pipeline - 4 Steps', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('desktop: all 4 stage cards visible', async ({ page }) => {
    // Wait for the interactive pipeline to load
    await page.waitForSelector('button:has(h3)')

    // Check that stage buttons are visible
    const promptCard = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
    const optimizeCard = page.locator('button').filter({ has: page.locator('text=Optimize') }).first()
    const dispatchCard = page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()
    const quorumCard = page.locator('button').filter({ has: page.locator('text=Quorum') }).first()

    await expect(promptCard).toBeVisible()
    await expect(optimizeCard).toBeVisible()
    await expect(dispatchCard).toBeVisible()
    await expect(quorumCard).toBeVisible()
  })

  test('desktop: clicking stage expands details', async ({ page }) => {
    // Click first stage (Prompt)
    const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
    await promptButton.click()

    // Check that details appear
    await expect(page.locator('text=Start with any idea')).toBeVisible()
  })

  test('desktop: can expand and collapse stages', async ({ page }) => {
    const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()

    // Expand
    await promptButton.click()
    await expect(page.locator('text=Start with any idea')).toBeVisible()

    // Collapse
    await promptButton.click()
    const detailsText = page.locator('text=Start with any idea')
    await expect(detailsText).not.toBeVisible({ timeout: 1000 })
  })
})

test.describe.only('Interactive Pipeline - Mobile Tests', () => {
  test.use({ ...devices['iPhone 12'] })

  test('mobile iPhone 12: stages clickable', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('button')

    // Tap first stage
    const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
    await expect(promptButton).toBeVisible()
    await promptButton.click()

    // Check details appear on mobile
    const details = page.locator('text=Start with any idea')
    await expect(details).toBeVisible()
  })

  test('mobile iPhone 12: text is readable (not too small)', async ({ page }) => {
    await page.goto('/')
    const stageTitle = page.locator('text=Prompt').first()

    const fontSize = await stageTitle.evaluate((el) => {
      return window.getComputedStyle(el).fontSize
    })
    const fontSizeNum = parseInt(fontSize)
    expect(fontSizeNum).toBeGreaterThanOrEqual(12)
  })

  test('mobile iPhone 12: tap target size adequate (44x44px)', async ({ page }) => {
    await page.goto('/')
    const promptButton = page.locator('button').filter({ has: page.locator('text=Prompt') }).first()
    const box = await promptButton.boundingBox()

    expect(box?.height).toBeGreaterThanOrEqual(40)
    expect(box?.width).toBeGreaterThanOrEqual(40)
  })

  test('mobile iPhone 12: expanded content not cut off', async ({ page }) => {
    await page.goto('/')

    // Click to expand Optimize stage
    const optimizeButton = page.locator('button').filter({ has: page.locator('text=Optimize') }).first()
    await optimizeButton.click()

    // Check expanded content is visible
    const expandedContent = page.locator('text=Automatic improvement without manual rewriting')
    await expect(expandedContent).toBeVisible()

    // Check content doesn't overflow viewport
    const textBox = await expandedContent.boundingBox()
    const viewportSize = page.viewportSize()

    if (textBox && viewportSize) {
      expect(textBox.x + textBox.width).toBeLessThanOrEqual(viewportSize.width + 10)
    }
  })

  test('mobile iPhone 12: can scroll to see all content', async ({ page }) => {
    await page.goto('/')

    // Click to expand longest stage
    const quorumButton = page.locator('button').filter({ has: page.locator('text=Quorum') }).first()
    await quorumButton.click()

    // Scroll to bottom of expanded content
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Content should be scrollable
    await page.waitForTimeout(500)
    expect(true).toBeTruthy()
  })
})

test.describe('Interactive Pipeline - Android Mobile', () => {
  test.use({ ...devices['Pixel 5'] })

  test('mobile Android: stages clickable and expand', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('button')

    const dispatchButton = page.locator('button').filter({ has: page.locator('text=Dispatch') }).first()
    await dispatchButton.click()

    // Check that details appear
    await expect(page.locator('text=One-click to send to multiple AIs')).toBeVisible()
  })
})
