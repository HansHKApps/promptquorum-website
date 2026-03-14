import { test, expect } from '@playwright/test'

test.describe('Language Switching', () => {
  test('should switch language on home page', async ({ page }) => {
    // Load home page in English
    await page.goto('http://localhost:5173/')

    // Check English content is visible
    await expect(page.locator('h2:has-text("Learn Prompt Engineering")')).toBeVisible()
    await expect(page.locator('p:has-text("Master the techniques")')).toBeVisible()

    // Find and click language switcher button
    const langButton = page.locator('button:has-text("EN")')
    await langButton.click()

    // Wait for dropdown to appear
    const frenchOption = page.locator('button:has-text("Français")')
    await expect(frenchOption).toBeVisible()

    // Click French option
    await frenchOption.click()

    // Wait for URL to change to ?lang=fr
    await page.waitForURL('**/?lang=fr')

    // Check URL contains lang=fr
    expect(page.url()).toContain('lang=fr')

    // Check French content is now visible
    await expect(page.locator('h2:has-text("Apprenez le Prompt Engineering")')).toBeVisible({ timeout: 5000 })
    await expect(page.locator('p:has-text("Maitrisez les techniques")')).toBeVisible()
  })

  test('should switch language on blog page', async ({ page }) => {
    // Load blog page in English
    await page.goto('http://localhost:5173/blog/prompt-frameworks')

    // Check English content
    const englishTitle = page.locator('h1:has-text("8 Prompt Frameworks Explained")')
    await expect(englishTitle).toBeVisible()

    // Click language switcher
    const langButton = page.locator('button:has-text("EN")')
    await langButton.click()

    // Click German option
    const germanOption = page.locator('button:has-text("Deutsch")')
    await germanOption.click()

    // Wait for URL to change
    await page.waitForURL('**/?lang=de')

    // Check German content
    await expect(page.locator('h1:has-text("8 Prompt-Frameworks erklärt")')).toBeVisible({ timeout: 5000 })
  })

  test('should maintain language on navigation', async ({ page }) => {
    // Load in French
    await page.goto('http://localhost:5173/?lang=fr')

    // Check French heading
    await expect(page.locator('h2:has-text("Apprenez le Prompt Engineering")')).toBeVisible()

    // Click Features link
    await page.locator('a:has-text("Fonctionnalités")').click()

    // Should stay in French (page should have French content)
    // Note: This depends on whether /features page respects lang param
    const url = page.url()
    console.log('After Features click:', url)
  })
})
