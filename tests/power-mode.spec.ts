// Ask Hans Power Mode: switch, process list, guided questions, Esc/Back levels, report, exports, local save.
// The report stream (/api/ask/solution) is mocked, so no API key is needed.
//
//   ASK_HANS_ENABLED=true npm run build && npx next start --port 3000 &
//   npx playwright test tests/power-mode.spec.ts --project=chromium

import { readFile } from 'node:fs/promises'
import { expect, test, type Page } from '@playwright/test'

const REPORT = [
  { t: 'text', v: '## Summary\n- **Runs well**: chat with an 8B model\n\n' },
  { t: 'text', v: '## What your computer can do\n\n| Task | Verdict |\n| --- | --- |\n| Chat | Runs well |\n| Video | Not realistic |\n\n' },
  { t: 'text', v: '## Installation order\n1. Install [Ollama](https://www.promptquorum.com/power-local-llm/ollama-review)\n2. Run a test prompt\n' },
  { t: 'done', tools: ['find_best_apps'] },
]
const ndjson = (events: unknown[]) => events.map((e) => JSON.stringify(e)).join('\n') + '\n'

async function prepare(page: Page, { consented = true } = {}) {
  await page.addInitScript((withConsent) => {
    localStorage.setItem('analytics_consent', JSON.stringify({ state: 'denied', analytics: false, recordings: false, marketing: false, ts: Date.now(), version: 2 }))
    if (withConsent) localStorage.setItem('askhans.consent.v1', JSON.stringify({ value: 'no', saveHistory: false, textVersion: '2026-11-06-v3', ts: new Date().toISOString() }))
  }, consented)
  await page.route('**/api/ask/event', (r) => r.fulfill({ status: 204, body: '' }))
}

const askDialog = (page: Page) => page.getByRole('dialog', { name: 'Ask Hans' })

/** Opens the Ask Hans window with the same event the page buttons use; retried until the widget has hydrated. */
async function openAsk(page: Page, path = '/') {
  await page.goto(path)
  const dialog = askDialog(page)
  await expect(async () => {
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('askhans:open')))
    await expect(dialog).toBeVisible({ timeout: 1000 })
  }).toPass({ timeout: 15000 })
  return dialog
}

async function openPower(page: Page, path = '/') {
  const dialog = await openAsk(page, path)
  await dialog.getByRole('button', { name: /Power[- ]Modus|Power Mode/ }).click()
  return dialog
}

/** Completes the MAX questionnaire for a 24 GB Mac. `save` ticks "also save to the hardware tool". */
async function fillMax(page: Page, { save = false } = {}) {
  const dialog = askDialog(page)
  await dialog.getByRole('button', { name: /MAX/ }).click()
  await dialog.getByRole('radio', { name: 'Mac', exact: true }).click()
  const next = dialog.getByRole('button', { name: 'Next' })
  await expect(next).toBeDisabled() // RAM still missing
  await dialog.getByLabel('Unified memory, in GB').fill('24')
  if (save) await dialog.getByRole('checkbox', { name: /save this to the PromptQuorum hardware tool/ }).check()
  await next.click()
  await dialog.getByRole('checkbox', { name: 'Chat and write' }).click()
  await dialog.getByRole('checkbox', { name: 'Chat with my documents' }).click()
  await next.click()
  for (const answer of ['Yes, fully offline', 'Free software only', 'Beginner', 'Balanced']) {
    await dialog.getByRole('radio', { name: answer }).click()
    await next.click()
  }
  await dialog.getByRole('button', { name: 'Create my report' }).click()
}

test.describe('Power Mode', () => {
  test('switch opens the process list; Esc goes back to the chat, a second Esc closes the window', async ({ page }) => {
    await prepare(page)
    const dialog = await openPower(page)
    for (const name of [/MAX/, /Hardware Selector/, /Solution Setup/, /Mobile Apps/]) await expect(dialog.getByRole('button', { name })).toBeVisible()
    await expect(dialog.getByRole('textbox')).toHaveCount(0)

    await page.keyboard.press('Escape')
    await expect(dialog).toBeVisible()
    await expect(dialog.getByRole('textbox')).toBeVisible() // standard chat again
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
  })

  test('Esc and Back move up one level: question → previous question → list → chat', async ({ page }) => {
    await prepare(page)
    const dialog = await openPower(page)
    await dialog.getByRole('button', { name: /MAX/ }).click()
    await dialog.getByRole('radio', { name: 'Mac', exact: true }).click()
    await dialog.getByLabel('Unified memory, in GB').fill('16')
    await dialog.getByRole('button', { name: 'Next' }).click()
    await expect(dialog.getByText('Step 2 of 7')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(dialog.getByText('Step 1 of 7')).toBeVisible()
    await expect(dialog.getByLabel('Unified memory, in GB')).toHaveValue('16') // answers are kept
    await dialog.getByRole('button', { name: 'Back', exact: true }).click()
    await expect(dialog.getByRole('button', { name: /Hardware Selector/ })).toBeVisible()
    await dialog.getByRole('button', { name: 'Back to chat' }).click()
    await expect(dialog.getByRole('textbox')).toBeVisible()
  })

  test('MAX run: sends validated answers, renders the report, copy and downloads work', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await prepare(page)
    let sent: { process?: string; lang?: string; answers?: { hardware?: Record<string, unknown>; choices?: Record<string, string[]> } } = {}
    await page.route('**/api/ask/solution', async (route) => {
      sent = route.request().postDataJSON()
      await route.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) })
    })
    await openPower(page)
    await fillMax(page)

    const dialog = askDialog(page)
    await expect(dialog.getByRole('heading', { name: 'Your report: MAX – Full Setup' })).toBeVisible()
    await expect(dialog.getByRole('heading', { name: 'What your computer can do' }).or(dialog.getByText('What your computer can do'))).toBeVisible()
    await expect(dialog.getByRole('link', { name: 'Ollama' })).toHaveAttribute('href', /ollama-review/)
    await expect(dialog.getByText('How this report was made')).toBeVisible()

    expect(sent.process).toBe('max')
    expect(sent.lang).toBe('en')
    expect(sent.answers?.hardware).toMatchObject({ device: 'mac', os: 'mac', gpu: 'apple', ramGb: 24, vramGb: null })
    expect(sent.answers?.choices).toMatchObject({ goals: ['chat', 'docs'], connectivity: ['offline'], price: ['free-only'], experience: ['beginner'], priority: ['balanced'] })

    // Copy
    await dialog.getByRole('button', { name: 'Copy report' }).click()
    const clip = await page.evaluate(() => navigator.clipboard.readText())
    expect(clip).toContain('Your report: MAX – Full Setup')
    expect(clip).toContain('Unified memory, in GB: 24')
    expect(clip).toContain('Install Ollama')

    // Markdown download
    const [md] = await Promise.all([page.waitForEvent('download'), dialog.getByRole('button', { name: 'Markdown (.md)' }).click()])
    expect(md.suggestedFilename()).toMatch(/\.md$/)
    const mdText = await readFile((await md.path())!, 'utf8')
    expect(mdText).toContain('## Your inputs')
    expect(mdText).toContain('https://www.promptquorum.com/directory')
    expect(mdText).toContain('## Notice')

    // Word download is a real .docx (zip)
    const [docx] = await Promise.all([page.waitForEvent('download'), dialog.getByRole('button', { name: 'Word (.docx)' }).click()])
    expect(docx.suggestedFilename()).toMatch(/\.docx$/)
    const bytes = await readFile((await docx.path())!)
    expect(bytes.subarray(0, 2).toString('latin1')).toBe('PK')
    expect(bytes.length).toBeGreaterThan(3000)

    // PDF: the formatted report goes into a hidden print frame
    await dialog.getByRole('button', { name: 'PDF (print dialog)' }).click()
    await expect(page.locator('iframe[aria-hidden="true"]')).toHaveCount(1)
    const html = await page.locator('iframe[aria-hidden="true"]').getAttribute('srcdoc')
    expect(html).toContain('<title>Your report: MAX – Full Setup</title>')
    expect(html).toContain('<table>')
  })

  test('hardware is NOT saved to the website tool unless the box is ticked', async ({ page }) => {
    await prepare(page)
    await page.route('**/api/ask/solution', (r) => r.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) }))
    await openPower(page)
    await fillMax(page, { save: false })
    await expect(askDialog(page).getByRole('heading', { name: /Your report/ })).toBeVisible()
    expect(await page.evaluate(() => localStorage.getItem('pq-hw-profile'))).toBeNull()
  })

  test('hardware is saved locally when the box is ticked', async ({ page }) => {
    await prepare(page)
    await page.route('**/api/ask/solution', (r) => r.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) }))
    await openPower(page)
    await fillMax(page, { save: true })
    await expect(askDialog(page).getByRole('heading', { name: /Your report/ })).toBeVisible()
    expect(JSON.parse((await page.evaluate(() => localStorage.getItem('pq-hw-profile'))) ?? 'null')).toEqual({ machine: 'apple', unifiedGb: 24 })
  })

  test('the consent notice is shown first when no consent was given', async ({ page }) => {
    await prepare(page, { consented: false })
    await page.route('**/api/ask/solution', (r) => r.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) }))
    await openPower(page)
    await fillMax(page)
    const dialog = askDialog(page)
    await expect(dialog.getByRole('region', { name: /./ }).first()).toBeVisible()
    await dialog.getByRole('button').filter({ hasText: /^(Yes|No)/i }).first().click()
    await expect(dialog.getByRole('heading', { name: 'Your report: MAX – Full Setup' })).toBeVisible()
  })

  test('rate limit shows the limit message without a retry button', async ({ page }) => {
    await prepare(page)
    await page.route('**/api/ask/solution', (r) => r.fulfill({ status: 429, contentType: 'application/x-ndjson', body: ndjson([{ t: 'error', code: 'rate' }]) }))
    await openPower(page)
    await fillMax(page)
    const dialog = askDialog(page)
    await expect(dialog.getByRole('alert')).toContainText('reached the report limit')
    await expect(dialog.getByRole('button', { name: 'Try again' })).toHaveCount(0)
  })

  test('a failed run offers retry, and Esc from the report returns to the last question', async ({ page }) => {
    await prepare(page)
    let calls = 0
    await page.route('**/api/ask/solution', (r) => {
      calls++
      return r.fulfill(calls === 1 ? { status: 200, contentType: 'application/x-ndjson', body: ndjson([{ t: 'error', code: 'failed' }]) } : { status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) })
    })
    await openPower(page)
    await fillMax(page)
    const dialog = askDialog(page)
    await dialog.getByRole('button', { name: 'Try again' }).click()
    await expect(dialog.getByRole('heading', { name: 'Your report: MAX – Full Setup' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog.getByText('Step 7 of 7')).toBeVisible()
  })

  test('Solution Setup asks video follow-ups only for the video goal', async ({ page }) => {
    await prepare(page)
    const dialog = await openPower(page)
    await dialog.getByRole('button', { name: /Solution Setup/ }).click()
    await dialog.getByRole('radio', { name: 'Create video' }).click()
    await dialog.getByRole('button', { name: 'Next' }).click()
    await expect(dialog.getByRole('heading', { name: 'What kind of video?' })).toBeVisible()
    await dialog.getByRole('radio', { name: 'Image to video' }).click()
    await dialog.getByRole('button', { name: 'Next' }).click()
    await expect(dialog.getByRole('heading', { name: 'How long should the videos be?' })).toBeVisible()
  })

  test('Mobile process collects phone details; a custom model name is optional', async ({ page }) => {
    await prepare(page)
    let sent: { answers?: { mobile?: Record<string, unknown> } } = {}
    await page.route('**/api/ask/solution', (r) => {
      sent = r.request().postDataJSON()
      return r.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) })
    })
    const dialog = await openPower(page)
    await dialog.getByRole('button', { name: /Mobile Apps/ }).click()
    await dialog.getByRole('radio', { name: 'Android' }).click()
    await dialog.getByLabel('Memory (RAM), in GB').fill('8')
    await dialog.getByLabel('Free storage, in GB').fill('64')
    await dialog.getByRole('button', { name: 'Next' }).click()
    await dialog.getByRole('checkbox', { name: 'Chat and write' }).click()
    await dialog.getByRole('button', { name: 'Next' }).click()
    await dialog.getByRole('radio', { name: 'Yes, fully offline' }).click()
    await dialog.getByRole('button', { name: 'Next' }).click()
    await dialog.getByRole('radio', { name: 'Free software only' }).click()
    await dialog.getByRole('button', { name: 'Next' }).click()
    await dialog.getByRole('button', { name: 'Create my report' }).click()
    await expect(dialog.getByRole('heading', { name: 'Your report: Mobile Apps' })).toBeVisible()
    expect(sent.answers?.mobile).toEqual({ platform: 'android', model: '', ramGb: 8, storageGb: 64 })
  })

  test('"I don\'t know" is accepted for RAM and sent as null', async ({ page }) => {
    await prepare(page)
    let sent: { answers?: { hardware?: Record<string, unknown> } } = {}
    await page.route('**/api/ask/solution', (r) => {
      sent = r.request().postDataJSON()
      return r.fulfill({ status: 200, contentType: 'application/x-ndjson', body: ndjson(REPORT) })
    })
    const dialog = await openPower(page)
    await dialog.getByRole('button', { name: /MAX/ }).click()
    await dialog.getByRole('radio', { name: 'Laptop' }).click()
    await dialog.getByRole('radio', { name: 'Windows' }).click()
    await dialog.getByRole('radio', { name: 'Integrated graphics only' }).click()
    await dialog.getByRole('checkbox', { name: "I don't know" }).first().check()
    const next = dialog.getByRole('button', { name: 'Next' })
    await next.click()
    await dialog.getByRole('checkbox', { name: 'Create images' }).click()
    await next.click()
    for (const answer of ['No, internet is fine', 'Paid is okay', 'Advanced', 'Speed']) {
      await dialog.getByRole('radio', { name: answer }).click()
      await next.click()
    }
    await dialog.getByRole('button', { name: 'Create my report' }).click()
    await expect(dialog.getByRole('heading', { name: /Your report/ })).toBeVisible()
    expect(sent.answers?.hardware).toMatchObject({ device: 'laptop', os: 'win', gpu: 'integrated', ramGb: null, vramGb: null })
  })

  test('German page: switch and process list are German', async ({ page }) => {
    await prepare(page)
    const dialog = await openAsk(page, '/de')
    await dialog.getByRole('button', { name: 'Power-Modus' }).click()
    await expect(dialog.getByRole('button', { name: /Hardware-Auswahl/ })).toBeVisible()
    await expect(dialog.getByRole('button', { name: 'Zurück zum Chat' })).toBeVisible()
  })

  test('Arabic page is right-to-left', async ({ page }) => {
    await prepare(page)
    const dialog = await openAsk(page, '/ar')
    await expect(dialog).toHaveAttribute('dir', 'rtl')
    await dialog.getByRole('button', { name: 'الوضع المتقدم' }).click()
    await expect(dialog.getByRole('button', { name: 'العودة إلى الدردشة' })).toBeVisible()
  })

  test('works at phone width', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 780 })
    await prepare(page)
    const dialog = await openPower(page)
    await expect(dialog.getByRole('button', { name: /MAX/ })).toBeVisible()
    const overflow = await dialog.evaluate((el) => el.scrollWidth > el.clientWidth + 1)
    expect(overflow).toBe(false)
  })
})
