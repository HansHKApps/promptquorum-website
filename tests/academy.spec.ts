// PromptQuorum Academy browser tests (QA audit 2026-11-19). API routes are mocked: no model calls, no costs.
//
//   ACADEMY_ENABLED=true npx next dev --webpack --port 3438 &
//   PLAYWRIGHT_BASE_URL=http://localhost:3438 npx playwright test tests/academy.spec.ts --project=chromium
//
// Test subjects only; no real personal data is typed anywhere.

import { expect, test, type Page } from '@playwright/test'

test.use({ baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3438' })

const KEY = 'pq_academy_v1'

async function preset(page: Page) {
  await page.addInitScript(() => {
    // Skip the cookie dialog. Never overwrite a choice on reload.
    if (!localStorage.getItem('analytics_consent')) {
      localStorage.setItem('analytics_consent', JSON.stringify({ state: 'denied', analytics: false, recordings: false, marketing: false, ts: Date.now(), version: 2 }))
    }
  })
}

const q = (id: string, correct: 0 | 1 | 2) => ({
  id,
  topic: 'Basics',
  kind: 'diagnostic',
  prompt: `Question ${id}?`,
  options: ['A', 'B', 'C'],
  correctIndex: correct,
  explanationCorrect: 'Because.',
  explanationWrong: [undefined, undefined, undefined],
})

async function mockDiagnostic(page: Page) {
  await page.route('**/api/academy/diagnostic', (r) =>
    r.fulfill({ json: { subjectTitle: 'Test subject', questions: [q('1', 0), q('2', 1), q('3', 2), q('4', 0), q('5', 1)] } }),
  )
}

const stored = (page: Page) => page.evaluate((k) => localStorage.getItem(k), KEY)

async function startSetup(page: Page, save: boolean) {
  await page.goto('/academy')
  await page.getByLabel(/what do you want to learn/i).fill('Test subject')
  const box = page.getByLabel(/save my progress in this browser/i)
  await expect(box).not.toBeChecked() // unticked by default
  if (save) await box.check()
  await page.getByRole('button', { name: /continue to quick check/i }).click()
  await expect(page.getByRole('heading', { name: /quick check/i })).toBeVisible()
}

test.describe('F3: progress is saved only with opt-in', () => {
  test('without the tick nothing reaches localStorage and a reload starts fresh', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    await startSetup(page, false)
    expect(await stored(page)).toBeNull()
    await page.reload()
    await expect(page.getByLabel(/what do you want to learn/i)).toHaveValue('')
    await expect(page.getByRole('button', { name: /^continue$/i })).toHaveCount(0)
    expect(await stored(page)).toBeNull()
  })

  test('with the tick progress is written, and a reload offers Continue / Start new instead of auto-restoring', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    await startSetup(page, true)
    expect(await stored(page)).not.toBeNull()
    await page.reload()
    // No silent restore: the setup form is empty and the choice is shown.
    await expect(page.getByLabel(/what do you want to learn/i)).toHaveValue('')
    await expect(page.getByRole('button', { name: /^continue$/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /start new/i })).toBeVisible()
    await page.getByRole('button', { name: /^continue$/i }).click()
    await expect(page.getByRole('heading', { name: /quick check/i })).toBeVisible()
  })

  test('Start new deletes the saved progress', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    await startSetup(page, true)
    await page.reload()
    await page.getByRole('button', { name: /start new/i }).click()
    expect(await stored(page)).toBeNull()
  })

  test('Delete my data clears both modes', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    await startSetup(page, true)
    page.on('dialog', (d) => d.accept())
    await page.getByRole('button', { name: /delete my data/i }).click()
    expect(await stored(page)).toBeNull()
    // The in-memory screen is reset as well.
    await expect(page.getByLabel(/what do you want to learn/i)).toHaveValue('')
  })
})
