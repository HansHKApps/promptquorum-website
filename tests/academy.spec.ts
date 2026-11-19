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

/** /academy is the entrance page; the tool itself is the Ask-Hans-style window opened by its button. */
async function openTool(page: Page) {
  await page.goto('/academy')
  await page.getByRole('button', { name: /open the academy/i }).click()
  await expect(page.getByRole('dialog', { name: 'PromptQuorum Academy' })).toBeVisible()
}

const stored = (page: Page) => page.evaluate((k) => localStorage.getItem(k), KEY)

async function startSetup(page: Page, save: boolean) {
  await openTool(page)
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

// ------------------------------------------------------------------------------------------------ seeded programme

function seededProgramme(overrides: Record<string, unknown> = {}) {
  const lesson = (n: number) => ({
    id: `lesson-${n}`,
    title: `Lesson title ${n}`,
    topic: 'Basics',
    estimatedMinutes: 5,
    objectiveIds: [0],
    sections: [],
    furtherReading: [],
  })
  return {
    id: 'p1',
    createdAt: '2026-11-19T10:00:00.000Z',
    language: 'en',
    subject: 'Test subject',
    availableMinutes: 30,
    selfLevel: 'beginner',
    testMode: 'none',
    diagnostic: { questions: [], answers: {}, gaps: [], estimatedLevel: 'beginner' },
    objectives: ['Objective one', 'Objective two', 'Objective three'],
    lessons: [lesson(1), lesson(2)],
    testPlan: { finalQuestions: 0, lessonQuizQuestions: 0, testMinutes: 0 },
    progress: { currentLesson: 0, lessonStatus: { 'lesson-1': 'viewed', 'lesson-2': 'todo' }, quizResults: [], secondsSpent: 0, startedAt: '2026-11-19T10:00:00.000Z' },
    ...overrides,
  }
}

async function openSeededLesson(page: Page, programme = seededProgramme()) {
  await preset(page)
  await page.addInitScript(
    ([k, v]) => {
      if (!localStorage.getItem(k)) localStorage.setItem(k, v)
    },
    [
      KEY,
      JSON.stringify({
        version: 1,
        view: 'lesson',
        draft: { subject: 'Test subject', availableMinutes: 30, selfLevel: 'beginner', testMode: 'none', language: 'en', saveProgress: true, updatedAt: '2026-11-19T10:00:00.000Z' },
        programme,
      }),
    ],
  )
  await openTool(page)
  await page.getByRole('button', { name: /^continue$/i }).click()
}

const lessonReply = { sections: [{ heading: 'Intro', body: 'Body text of the lesson.' }], furtherReading: [] }

test.describe('F9: "Done" waits for the lesson', () => {
  test('button is disabled while the lesson is generated and enabled once the text is shown', async ({ page }) => {
    let release!: () => void
    const gate = new Promise<void>((r) => (release = r))
    await page.route('**/api/academy/lesson', async (route) => {
      await gate
      await route.fulfill({ json: lessonReply })
    })
    await openSeededLesson(page)
    const done = page.getByRole('button', { name: /done, next lesson/i })
    await expect(page.getByText(/writing your lesson/i)).toBeVisible()
    await expect(done).toBeDisabled()
    release()
    await expect(page.getByText('Body text of the lesson.')).toBeVisible()
    await expect(done).toBeEnabled()
  })

  test('a failed generation shows an error with Try again and keeps Done disabled', async ({ page }) => {
    await page.route('**/api/academy/lesson', (route) => route.fulfill({ status: 502, json: { error: 'generation' } }))
    await openSeededLesson(page)
    await expect(page.getByRole('button', { name: /try again/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /done, next lesson/i })).toBeDisabled()
  })
})

test.describe('F10 / F8: AI label and notices', () => {
  test('the lesson carries an AI-generated label', async ({ page }) => {
    await page.route('**/api/academy/lesson', (route) => route.fulfill({ json: lessonReply }))
    await openSeededLesson(page)
    await expect(page.getByRole('article').getByText('AI-generated')).toBeVisible()
  })

  test('setup shows the personal-data warning next to the subject and the 16+ notice at the start button', async ({ page }) => {
    await preset(page)
    await openTool(page)
    await expect(page.getByText('Please do not enter personal data.').first()).toBeVisible()
    await expect(page.getByText('For learners aged 16 or older.')).toBeVisible()
  })
})

test.describe('F6: correct answers stay on the server until answered', () => {
  const quizQuestions = [1, 2].map((n) => ({ id: `qq${n}`, topic: 'Basics', kind: 'final', prompt: `Final question ${n}?`, options: ['A', 'B', 'C'], sealed: `sealed-token-${n}-xxxxxxxxxxxxxxxxxxxx` }))

  test('stored quiz has no key before the answer; the verdict comes from /api/academy/answer', async ({ page }) => {
    await page.route('**/api/academy/quiz', (r) => r.fulfill({ json: { questions: quizQuestions } }))
    let sent: unknown = null
    await page.route('**/api/academy/answer', (r) => {
      sent = r.request().postDataJSON()
      return r.fulfill({ json: { correct: false, correctIndex: 1, explanationCorrect: 'B is right because.', explanationChosen: 'A is wrong because.' } })
    })
    const programme = seededProgramme({
      testMode: 'final',
      testPlan: { finalQuestions: 2, lessonQuizQuestions: 0, testMinutes: 2 },
      lessons: [{ id: 'lesson-1', title: 'L1', topic: 'Basics', estimatedMinutes: 5, objectiveIds: [0], sections: [{ heading: 'h', body: 'b' }], furtherReading: [] }],
      progress: { currentLesson: 0, lessonStatus: { 'lesson-1': 'done' }, quizResults: [], secondsSpent: 0, startedAt: '2026-11-19T10:00:00.000Z', activeQuiz: { quizId: 'final', questions: [], answers: {} } },
    })
    await openSeededLesson(page, { ...programme } as ReturnType<typeof seededProgramme>)
    // openSeededLesson seeds view 'lesson'; go to the quiz via the programme screen button.
    await page.getByRole('button', { name: /back to programme/i }).click().catch(() => {})
    await page.getByRole('button', { name: /continue the quiz/i }).click()
    await expect(page.getByText('Final question 1?')).toBeVisible()
    const before = (await stored(page)) ?? ''
    expect(before).not.toContain('correctIndex')
    expect(before).not.toContain('explanationCorrect')
    expect(before).not.toContain('explanationWrong')
    await page.getByRole('button', { name: 'A', exact: true }).click()
    await expect(page.getByText('B is right because.')).toBeVisible()
    await expect(page.getByText('A is wrong because.')).toBeVisible()
    expect(sent).toEqual({ sealed: quizQuestions[0].sealed, choice: 0 })
  })
})

test.describe('F15: lang and dir', () => {
  test('server HTML of the Arabic page marks the tool rtl; a German lesson on it is lang=de dir=ltr', async ({ page, request }) => {
    const html = await (await request.get('/ar/academy')).text()
    expect(html).toMatch(/<div lang="ar" dir="rtl"/)
    await page.route('**/api/academy/lesson', (r) => r.fulfill({ json: lessonReply }))
    await openSeededLesson(page, seededProgramme({ language: 'de' }))
    // (the UI stays in English here: the seeded page is /academy)
    await expect(page.locator('[lang="de"][dir="ltr"]', { hasText: 'Body text of the lesson.' })).toBeVisible()
  })
})

test.describe('F11 / F14: consent buttons and headers', () => {
  test('response carries nosniff and a strict referrer policy', async ({ request }) => {
    const res = await request.get('/academy')
    expect(res.headers()['x-content-type-options']).toBe('nosniff')
    expect(res.headers()['referrer-policy']).toBe('strict-origin-when-cross-origin')
  })

  test('Accept all and Reject all look the same; no Google Fonts request is made', async ({ page }) => {
    const fonts: string[] = []
    page.on('request', (r) => /fonts\.(googleapis|gstatic)\.com/.test(r.url()) && fonts.push(r.url()))
    await page.goto('/academy')
    const dialog = page.locator('[role="dialog"][aria-labelledby="cookie-dialog-title"]')
    await expect(dialog).toBeVisible()
    const style = (name: RegExp) => dialog.getByRole('button', { name }).evaluate((el) => { const c = getComputedStyle(el); return [c.backgroundColor, c.color, c.borderTopColor, c.fontWeight, c.padding].join('|') })
    expect(await style(/reject all/i)).toBe(await style(/accept all/i))
    expect(await style(/save/i)).not.toBe(await style(/accept all/i))
    await page.waitForTimeout(1500)
    expect(fonts).toEqual([])
  })
})

test.describe('F12: setup form', () => {
  test('Start over empties the subject field', async ({ page }) => {
    await openSeededLesson(page)
    await page.route('**/api/academy/lesson', (r) => r.fulfill({ json: lessonReply }))
    await page.getByRole('button', { name: /back to programme/i }).click()
    await page.getByRole('button', { name: /start over/i }).click()
    await expect(page.getByLabel(/what do you want to learn/i)).toHaveValue('')
  })

  test('no Google preferred-source card on /academy', async ({ page }) => {
    test.setTimeout(60_000)
    await preset(page)
    await page.goto('/academy')
    await page.waitForTimeout(32_000)
    await expect(page.getByText('Improve your PromptQuorum results in Google')).toHaveCount(0)
  })
})

test.describe('F13: lessons + test split', () => {
  test('programme page shows the split', async ({ page }) => {
    await page.route('**/api/academy/lesson', (r) => r.fulfill({ json: lessonReply }))
    await openSeededLesson(page, seededProgramme({ testMode: 'final', testPlan: { finalQuestions: 6, lessonQuizQuestions: 0, testMinutes: 4.5 } }))
    await page.getByRole('button', { name: /back to programme/i }).click()
    await expect(page.getByText('10 min lessons + 5 min test')).toBeVisible()
  })
})

test.describe('F7: displayed content is not replaced', () => {
  test('one programme request per quick check; the shown programme stays identical', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    let calls = 0
    await page.route('**/api/academy/programme', async (r) => {
      calls++
      await new Promise((res) => setTimeout(res, 500))
      await r.fulfill({
        json: {
          objectives: ['O1', 'O2', 'O3'],
          lessons: [1, 2, 3].map((n) => ({ title: `Lesson ${n}`, topic: 'Basics', estimatedMinutes: 10, objectiveIds: [0], recap: false })),
          testPlan: { finalQuestions: 10, lessonQuizQuestions: 0, testMinutes: 8 },
        },
      })
    })
    await startSetup(page, false)
    for (let i = 0; i < 5; i++) await page.getByRole('button', { name: 'A', exact: true }).click()
    await expect(page.getByRole('heading', { name: /your programme/i })).toBeVisible()
    const read = () => page.locator('#academy-programme').locator('xpath=..').innerText()
    const first = await read()
    await page.waitForTimeout(3000)
    expect(await read()).toBe(first)
    expect(calls).toBe(1)
  })
})


// ------------------------------------------------------------------------------- window (same as Ask Hans)

test.describe('Academy window behaves like the Ask Hans window', () => {
  const win = (page: Page) => page.getByRole('dialog', { name: 'PromptQuorum Academy' })
  const box = async (page: Page) => (await win(page).boundingBox())!

  test('entrance page explains and opens the window; the tool is not inline on the page', async ({ page }) => {
    await preset(page)
    await page.goto('/academy')
    await expect(page.getByRole('heading', { name: 'How it works' })).toBeVisible()
    await expect(page.getByText(/programmes created so far/)).toBeVisible()
    await expect(win(page)).toHaveCount(0)
    await expect(page.getByLabel(/what do you want to learn/i)).toHaveCount(0)
    await page.getByRole('button', { name: /open the academy/i }).click()
    await expect(win(page)).toBeVisible()
  })

  test('drag by the header, resize by the corner, maximize and restore', async ({ page }) => {
    await preset(page)
    await openTool(page)
    const a = await box(page)
    await page.mouse.move(a.x + a.width / 2, a.y + 20)
    await page.mouse.down()
    await page.mouse.move(a.x + a.width / 2 - 120, a.y + 60, { steps: 5 })
    await page.mouse.up()
    const b = await box(page)
    expect(Math.round(b.x)).toBe(Math.round(a.x - 120))
    expect(Math.round(b.y)).toBe(Math.round(a.y + 40))
    await page.mouse.move(b.x + b.width - 6, b.y + b.height - 6) // inside the rounded corner
    await page.mouse.down()
    await page.mouse.move(b.x + b.width - 86, b.y + b.height - 66, { steps: 5 })
    await page.mouse.up()
    const c = await box(page)
    expect(c.width).toBeLessThan(b.width - 40)
    expect(c.height).toBeLessThan(b.height - 30)
    await page.getByRole('button', { name: 'Maximize' }).click()
    const m = await box(page)
    expect(m.width).toBeGreaterThan(c.width)
    await page.getByRole('button', { name: 'Restore' }).click()
    expect(Math.round((await box(page)).width)).toBe(Math.round(c.width))
  })

  test('closing leaves the Academy pill; the pill reopens the window; state survives a reload', async ({ page }) => {
    await preset(page)
    await openTool(page)
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(win(page)).toHaveCount(0)
    const pill = page.getByRole('button', { name: 'Open the PromptQuorum Academy' })
    await expect(pill).toBeVisible()
    await pill.click()
    await expect(win(page)).toBeVisible()
    await page.reload()
    await expect(win(page)).toBeVisible()
  })

  test('the homepage counter tile opens the window', async ({ page }) => {
    await preset(page)
    await page.goto('/')
    const tile = page.getByRole('link', { name: /Academy programmes created/ }).first()
    await expect(tile).toBeVisible()
    await tile.click()
    await expect(win(page)).toBeVisible()
    await expect(page).toHaveURL(/\/$/)
  })
})
