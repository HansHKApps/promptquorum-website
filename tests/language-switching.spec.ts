import { test, expect } from '@playwright/test'

test.describe('Language Switching', () => {
  test('should switch language on home page', async ({ page }) => {
    await page.goto('/')

    // Check English content is visible
    await expect(page.locator('h2:has-text("Core Features")')).toBeVisible()

    // Find and click language switcher button
    const langButton = page.getByRole('banner').getByRole('button', { name: /EN/ })
    await langButton.click()

    // Wait for dropdown to appear and click French
    const frenchOption = page.locator('button:has-text("Français")')
    await expect(frenchOption).toBeVisible()
    await frenchOption.click()

    // Check URL contains lang=fr
    await page.waitForURL('**/?lang=fr')
    expect(page.url()).toContain('lang=fr')

    // Check French content is now visible
    await expect(page.locator('h2:has-text("Fonctionnalités principales")')).toBeVisible({ timeout: 5000 })
  })

  test('should switch language on blog page', async ({ page }) => {
    await page.goto('/blog/prompt-frameworks')

    // Check English content
    await expect(page.locator('h1').first()).toBeVisible()

    // Click language switcher
    const langButton = page.getByRole('banner').getByRole('button', { name: /EN/ })
    await langButton.click()

    // Click German option
    const germanOption = page.locator('button:has-text("Deutsch")')
    await germanOption.click()

    // URL should change to include lang=de
    await page.waitForURL('**lang=de**')
    expect(page.url()).toContain('lang=de')
  })

  test('should maintain language on navigation', async ({ page }) => {
    // Load in French
    await page.goto('/?lang=fr')

    // Check French heading
    await expect(page.locator('h2:has-text("Fonctionnalités principales")')).toBeVisible({ timeout: 5000 })

    // URL should still have lang param
    expect(page.url()).toContain('lang=fr')
  })
})
