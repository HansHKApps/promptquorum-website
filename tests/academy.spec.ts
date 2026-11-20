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
    await expect(page.getByRole('dialog', { name: 'PromptQuorum Academy' }).getByText('For learners aged 16 or older.')).toBeVisible()
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
    await page.getByRole('button', { name: /back to program/i }).click().catch(() => {})
    await page.getByRole('button', { name: /continue the quiz/i }).click()
    // A quiz that just opened shows the format picker first; multiple choice is the preselected default.
    await page.getByRole('button', { name: /start test/i }).click()
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
    await expect(page.locator('[lang="de"][dir="ltr"]', { hasText: 'Body text of the lesson.' }).first()).toBeVisible()
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
    await page.getByRole('button', { name: /back to program/i }).click()
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
    await page.getByRole('button', { name: /back to program/i }).click()
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
    for (let i = 0; i < 5; i++) {
      await page.getByRole('button', { name: 'A', exact: true }).click()
      await page.getByRole('button', { name: /next question/i }).click()
    }
    await expect(page.getByRole('heading', { name: /your program/i })).toBeVisible()
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

  test('entrance page explains, shows the counters and opens the window; the tool is not inline on the page', async ({ page }) => {
    await preset(page)
    await page.goto('/academy')
    await expect(page.getByRole('heading', { name: 'How it works' })).toBeVisible()
    for (const label of ['Programs created', 'Lessons written', 'Tests taken', 'Certificates downloaded']) await expect(page.getByText(label, { exact: true })).toBeVisible()
    await expect(page.getByText('Anonymous totals. No personal data is counted.')).toBeVisible()
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

  test('the homepage counter tile leads to the /academy entrance page', async ({ page }) => {
    await preset(page)
    await page.goto('/')
    const tile = page.getByRole('link', { name: /Academy programmes created/ }).first()
    await expect(tile).toBeVisible()
    await tile.click()
    await expect(page).toHaveURL(/\/academy$/)
    await expect(page.getByRole('heading', { level: 1, name: 'PromptQuorum Academy' })).toBeVisible()
    await page.getByRole('button', { name: /open the academy/i }).click()
    await expect(win(page)).toBeVisible()
  })
})

// ------------------------------------------------------------------------------------------ certificate (F5)

function finishedProgramme(language: string, subject: string, lessonsDone = true) {
  const byTopic = { Basics: { correct: 9, total: 10 } }
  const attempt = { quizId: 'final-1', answers: {}, correct: 9, total: 10, byTopic, takenAt: '2026-11-19T11:00:00.000Z', questions: [] }
  const base = seededProgramme({ language, subject, testMode: 'final', testPlan: { finalQuestions: 10, lessonQuizQuestions: 0, testMinutes: 8 } }) as ReturnType<typeof seededProgramme> & { progress: Record<string, unknown>; lessons: { sections: unknown[] }[] }
  base.lessons.forEach((l) => ((l as { sections: unknown[] }).sections = [{ heading: 'h', body: 'b' }]))
  base.progress = {
    currentLesson: 1,
    lessonStatus: { 'lesson-1': 'done', 'lesson-2': lessonsDone ? 'done' : 'viewed' },
    quizResults: [],
    finalAttempts: [attempt],
    finalResult: attempt,
    secondsSpent: 3720,
    startedAt: '2026-11-19T09:00:00.000Z',
  }
  return base as unknown as ReturnType<typeof seededProgramme>
}

async function openResults(page: Page, programme: ReturnType<typeof seededProgramme>) {
  await preset(page)
  await page.addInitScript(
    ([k, v]) => {
      if (!localStorage.getItem(k)) localStorage.setItem(k, v)
    },
    [
      KEY,
      JSON.stringify({
        version: 1,
        view: 'results',
        draft: { subject: 'x', availableMinutes: 60, selfLevel: 'beginner', testMode: 'final', language: 'en', saveProgress: true, updatedAt: '2026-11-19T10:00:00.000Z' },
        programme,
      }),
    ],
  )
  await openTool(page)
  await page.getByRole('button', { name: /^continue$/i }).click()
  await expect(page.getByRole('button', { name: /download certificate/i })).toBeVisible()
}

/** The picture inside the PDF (the first JPEG stream). */
function jpegOf(pdf: Buffer): Buffer {
  const start = pdf.indexOf(Buffer.from([0xff, 0xd8, 0xff]))
  const end = pdf.lastIndexOf(Buffer.from([0xff, 0xd9]))
  return pdf.subarray(start, end + 2)
}

test.describe('F5: certificate', () => {
  test('the button is disabled with a reason: first the name, then unfinished lessons', async ({ page }) => {
    await openResults(page, finishedProgramme('en', 'Quantization basics'))
    const btn = page.getByRole('button', { name: /download certificate/i })
    await expect(btn).toBeDisabled()
    await expect(page.getByText('Enter your name to download the certificate.')).toBeVisible()
    await page.getByLabel(/your name for the certificate/i).fill('Test Person')
    await expect(btn).toBeEnabled()
    await expect(page.getByText('Enter your name to download the certificate.')).toHaveCount(0)
  })

  test('unfinished lessons block the download and say how many are left', async ({ page }) => {
    await openResults(page, finishedProgramme('en', 'Quantization basics', false))
    await page.getByLabel(/your name for the certificate/i).fill('Test Person')
    await expect(page.getByRole('button', { name: /download certificate/i })).toBeDisabled()
    await expect(page.getByText('Finish all lessons first: 1 of 2 done.')).toBeVisible()
  })

  for (const [lang, name, subject] of [
    ['en', 'Test Person', 'Quantization basics'],
    ['ja', '田中 愛子（テスト）', 'ローカルLLMの基礎'],
    ['ar', 'اختبار محمد الأحمد', 'أساسيات النماذج المحلية'],
    ['de', 'Tester Müller-Lüdenscheidt', 'Quantisierung für Anfänger'],
  ] as const) {
    test(`downloads a valid A4 landscape PDF with the ID and metadata (${lang})`, async ({ page }, testInfo) => {
      await openResults(page, finishedProgramme(lang, subject))
      await page.getByLabel(/your name for the certificate/i).fill(name)
      const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /download certificate/i }).click()])
      expect(download.suggestedFilename()).toMatch(/^PromptQuorum-Academy-Certificate-[a-z0-9-]*-PQA-\d{4}-[0-9A-HJKMNP-TV-Z]{10}\.pdf$/)
      const path = await download.path()
      const fs = await import('node:fs')
      const pdf = fs.readFileSync(path)
      const text = pdf.toString('latin1')
      expect(text.startsWith('%PDF-1.4')).toBe(true)
      expect(text).toContain('/MediaBox [0 0 841.89 595.28]')
      const id = /PQA-\d{4}-[0-9A-HJKMNP-TV-Z]{10}/.exec(download.suggestedFilename())![0]
      expect(text).toContain(`/Keywords (${id})`)
      if (lang === 'en') expect(text).toContain('(Certificate of Completion')
      const jpeg = jpegOf(pdf)
      expect(jpeg.length).toBeGreaterThan(50_000) // a drawn page, not a blank one
      fs.writeFileSync(testInfo.outputPath(`certificate-${lang}.jpg`), jpeg)
    })
  }
})

test.describe('F8: Terms page and links', () => {
  for (const lang of ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']) {
    test(`Terms, Privacy and Impressum load in ${lang}; Terms states the age and certificate rules`, async ({ page, request }) => {
      const prefix = lang === 'en' ? '' : `/${lang}`
      const res = await request.get(`${prefix}/terms`)
      expect(res.status()).toBe(200)
      const html = await res.text()
      expect(html).toMatch(new RegExp(`<div lang="${lang}[A-Za-z-]*" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"`))
      expect(html).toMatch(/16/)
      expect((html.match(/<h2/g) ?? []).length).toBeGreaterThanOrEqual(11)
      expect((await request.get(`${prefix}/privacy`)).status()).toBe(200)
      expect((await request.get('/impressum')).status()).toBe(200)
      await preset(page)
      await page.goto(`${prefix}/terms`)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    })
  }

  test('footer links to Terms on every page', async ({ page }) => {
    await preset(page)
    await page.goto('/')
    await expect(page.locator('footer a[href="/terms"]')).toBeVisible()
    await page.goto('/de/academy')
    await expect(page.locator('footer a[href="/de/terms"]')).toBeVisible()
  })

  test('the Academy setup links to the Terms next to the 16+ notice', async ({ page }) => {
    await preset(page)
    await openTool(page)
    await expect(page.getByRole('dialog', { name: 'PromptQuorum Academy' }).getByRole('link', { name: 'Terms of Use' })).toHaveAttribute('href', '/terms')
  })
})

// ------------------------------------------------------------------------------ master spec v1 (2026-11-20)

test.describe('master spec v1', () => {
  test('header graduation-cap link leads to /academy', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: /PromptQuorum Academy/ })
    await expect(link.first()).toHaveAttribute('href', '/academy')
  })

  test('setup offers "Other language…" with a check button; the feedback mail link is on the screen', async ({ page }) => {
    await preset(page)
    await openTool(page)
    await page.locator('#academy-language').selectOption({ label: 'Other language…' })
    await expect(page.getByLabel(/which language/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /^check$/i })).toBeDisabled()
    await expect(page.getByRole('button', { name: /send feedback by email/i })).toBeVisible()
  })

  test('verification page: unknown ID says no record found and is noindex', async ({ page }) => {
    await page.goto('/academy/verify/PQA-2026-ABCDEFGHJK')
    await expect(page.getByText('No record found for this ID.')).toBeVisible()
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
  })

  test('opt-in registration: two calls (number, then the documentation fingerprint), number shown, certificate downloads', async ({ page }) => {
    const calls: Record<string, unknown>[] = []
    await page.route('**/api/academy/register', async (route) => {
      calls.push(route.request().postDataJSON())
      await route.fulfill({ json: { number: 7, existing: false } })
    })
    await openResults(page, finishedProgramme('en', 'Local LLMs'))
    await page.getByLabel(/your name for the certificate/i).fill('Test Person')
    await page.getByLabel(/register this certificate/i).check()
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /download certificate/i }).click()])
    expect(download.suggestedFilename()).toMatch(/^PromptQuorum-Academy-Certificate-/)
    if (process.env.PQ_SAVE_PDFS) (await import('node:fs')).copyFileSync((await download.path())!, `${process.env.PQ_SAVE_PDFS}/cert-registered.pdf`)
    await expect(page.getByText('Registered as No. 7.')).toBeVisible()
    expect(calls.length).toBe(2)
    expect(calls[0].hash).toBeUndefined()
    expect(String(calls[1].hash)).toMatch(/^[0-9a-f]{64}$/)
    expect(calls[0].id).toBe(calls[1].id)
    expect(JSON.stringify(calls)).not.toContain('Test Person') // the name never reaches the server
    const [doc] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /download course documentation/i }).click()])
    expect(doc.suggestedFilename()).toMatch(/^PromptQuorum-Academy-Course-Documentation-/)
    if (process.env.PQ_SAVE_PDFS) (await import('node:fs')).copyFileSync((await doc.path())!, `${process.env.PQ_SAVE_PDFS}/doc.pdf`)
  })

  test('results: certificate language, unticked registry opt-in, documentation button', async ({ page }) => {
    await openResults(page, finishedProgramme('en', 'Local LLMs'))
    await expect(page.getByLabel(/language of the certificate/i)).toBeVisible()
    await expect(page.getByLabel(/register this certificate/i)).not.toBeChecked()
    await expect(page.getByRole('button', { name: /download course documentation/i })).toBeVisible()
    await expect(page.getByRole('group', { name: /how was this program/i })).toBeVisible()
  })
})


test.describe('Quick check shows right / wrong, and the plan can be shared', () => {
  test('quick check: right answer turns green, wrong turns red with the right one green; Next moves on', async ({ page }) => {
    await preset(page)
    await mockDiagnostic(page)
    await startSetup(page, false)
    // question 1: correct is A (index 0)
    await page.getByRole('button', { name: 'B', exact: true }).click()
    await expect(page.getByRole('button', { name: 'B', exact: true })).toHaveClass(/border-red-500/)
    await expect(page.getByRole('button', { name: 'A', exact: true })).toHaveClass(/border-green-600/)
    await expect(page.getByText('Not quite.')).toBeVisible()
    await page.getByRole('button', { name: /next question/i }).click()
    // question 2: correct is B (index 1)
    await page.getByRole('button', { name: 'B', exact: true }).click()
    await expect(page.getByRole('button', { name: 'B', exact: true })).toHaveClass(/border-green-600/)
    await expect(page.getByText('Correct.')).toBeVisible()
  })

  test('programme page has share buttons for WhatsApp, Telegram, email, copy, Word and PDF', async ({ page }) => {
    await page.route('**/api/academy/lesson', (r) => r.fulfill({ json: lessonReply }))
    await openSeededLesson(page)
    await page.getByRole('button', { name: /back to program/i }).click()
    await expect(page.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('href', /^https:\/\/wa\.me\/\?text=.*promptquorum\.com%2Facademy/)
    await expect(page.getByRole('link', { name: 'Telegram' })).toHaveAttribute('href', /^https:\/\/t\.me\/share\/url/)
    await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute('href', /^mailto:/)
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Word', exact: true }).click()])
    expect(download.suggestedFilename()).toMatch(/\.docx$/)
    await expect(page.getByRole('button', { name: 'PDF', exact: true })).toBeVisible()
  })
})

test.describe('Program language drives the lesson screen labels', () => {
  test('English page, German program: loading text, objectives label and tutor buttons are German', async ({ page }) => {
    let release!: () => void
    const gate = new Promise<void>((r) => (release = r))
    await page.route('**/api/academy/lesson', async (route) => {
      await gate
      await route.fulfill({ json: lessonReply })
    })
    await openSeededLesson(page, seededProgramme({ language: 'de' }))
    await expect(page.getByText(/writing your lesson/i)).toHaveCount(0)
    await expect(page.getByText(/lektion/i).first()).toBeVisible()
    release()
    await expect(page.getByText('Body text of the lesson.')).toBeVisible()
    await expect(page.getByText('Diese Lektion hilft Ihnen')).toBeVisible()
    // The four help options are hidden behind a quiet per-section link and open on request.
    await expect(page.getByRole('button', { name: 'Tiefer' })).toHaveCount(0)
    await page.getByRole('button', { name: 'Hilfe zu diesem Abschnitt?' }).first().click()
    await expect(page.getByRole('button', { name: 'Tiefer' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Zusammenfassen' })).toBeVisible()
    await expect(page.getByText('This lesson helps you')).toHaveCount(0)
  })
})


// ------------------------------------------------------------------------------- written test formats (free / explain)

test.describe('test formats: multiple choice, short written answer, explain the concept', () => {
  const openQuestions = (format: 'free' | 'explain') =>
    [1, 2].map((n) => ({ id: `oq${n}`, topic: 'Basics', kind: 'final', format, prompt: `Written question ${n}?`, sealed: `open-sealed-token-${n}-xxxxxxxxxxxxxxxxxxxx` }))
  const finalProgramme = () =>
    seededProgramme({
      testMode: 'final',
      testPlan: { finalQuestions: 2, lessonQuizQuestions: 0, testMinutes: 3 },
      lessons: [{ id: 'lesson-1', title: 'L1', topic: 'Basics', estimatedMinutes: 5, objectiveIds: [0], sections: [{ heading: 'h', body: 'b' }], furtherReading: [] }],
      progress: { currentLesson: 0, lessonStatus: { 'lesson-1': 'done' }, quizResults: [], secondsSpent: 0, startedAt: '2026-11-19T10:00:00.000Z', activeQuiz: { quizId: 'final', questions: [], answers: {} } },
    }) as ReturnType<typeof seededProgramme>
  const toQuiz = async (page: Page) => {
    await openSeededLesson(page, finalProgramme())
    await page.getByRole('button', { name: /back to program/i }).click().catch(() => {})
    await page.getByRole('button', { name: /continue the quiz/i }).click()
  }

  test('setup offers the three formats when tests are on and hides them for "No test"', async ({ page }) => {
    await preset(page)
    await openTool(page)
    const group = page.getByRole('group', { name: /^test format$/i })
    await expect(group).toBeVisible()
    await expect(group.getByRole('radio', { name: /multiple choice/i })).toBeChecked()
    await expect(group.getByRole('radio', { name: /short written answer/i })).toBeAttached()
    await expect(group.getByRole('radio', { name: /explain the concept/i })).toBeAttached()
    await page.getByRole('radio', { name: /no test/i }).check({ force: true })
    await expect(group).toBeHidden()
  })

  test('short written answer: pick the format when the test opens, answer, get graded; the rubric is not stored before grading', async ({ page }) => {
    let generated: Record<string, unknown> = {}
    await page.route('**/api/academy/open-quiz', (r) => {
      generated = r.request().postDataJSON()
      return r.fulfill({ json: { questions: openQuestions('free') } })
    })
    const graded: Record<string, unknown>[] = []
    await page.route('**/api/academy/grade', (r) => {
      graded.push(r.request().postDataJSON())
      const empty = graded.length === 2
      return r.fulfill({ json: empty ? { credit: 0, feedback: '', covered: [], missed: ['Idea two'], modelAnswer: 'Second model answer' } : { credit: 0.5, feedback: 'Good start.', covered: ['Idea one'], missed: ['Idea two'], modelAnswer: 'First model answer' } })
    })
    await toQuiz(page)
    await expect(page.getByText(/how do you want to be tested/i)).toBeVisible()
    await page.locator('label', { hasText: /short written answer/i }).click()
    await expect(page.getByRole('radio', { name: /short written answer/i })).toBeChecked()
    await page.getByRole('button', { name: /start test/i }).click()
    await expect(page.getByText('Written question 1?')).toBeVisible()
    expect(generated).toMatchObject({ kind: 'final', format: 'free' })
    const before = (await stored(page)) ?? ''
    for (const secret of ['keyPoints', 'modelAnswer', 'First model answer']) expect(before).not.toContain(secret)
    // Submit stays disabled until something is written.
    await expect(page.getByRole('button', { name: /submit answer/i })).toBeDisabled()
    await page.getByLabel(/^your answer$/i).fill('My own words about the idea.')
    await page.getByRole('button', { name: /submit answer/i }).click()
    await expect(page.getByText('Partial credit (half a point)')).toBeVisible()
    await expect(page.getByText('Good start.')).toBeVisible()
    await expect(page.getByText('First model answer')).toBeVisible()
    expect(graded[0]).toEqual({ sealed: openQuestions('free')[0].sealed, answer: 'My own words about the idea.' })
    await page.getByRole('button', { name: /next question/i }).click()
    await expect(page.getByText('Written question 2?')).toBeVisible()
    await page.getByRole('button', { name: /i am not sure/i }).click()
    expect(graded[1]).toEqual({ sealed: openQuestions('free')[1].sealed, answer: '' })
    await expect(page.getByText(/^No credit/)).toBeVisible()
    await expect(page.getByText('No answer given. Here is what a good answer contains.')).toBeVisible()
    await page.getByRole('button', { name: /see result/i }).click()
    // 0.5 + 0 of 2 points, with the AI-grading notice.
    await expect(page.getByText('0.5 of 2 points')).toBeVisible()
    await expect(page.getByText(/graded by AI/i)).toBeVisible()
    await page.getByRole('button', { name: /see results/i }).click()
    await expect(page.getByText('0.5 of 2 points')).toBeVisible()
    await expect(page.getByText(/graded by AI/i).first()).toBeVisible()
    await expect(page.getByText('25%', { exact: true })).toBeVisible()
  })

  test('explain the concept: the request asks for the explain format and the answer box is labelled as an explanation', async ({ page }) => {
    let generated: Record<string, unknown> = {}
    await page.route('**/api/academy/open-quiz', (r) => {
      generated = r.request().postDataJSON()
      return r.fulfill({ json: { questions: openQuestions('explain') } })
    })
    await toQuiz(page)
    await page.locator('label', { hasText: /explain the concept/i }).click()
    await expect(page.getByRole('radio', { name: /explain the concept/i })).toBeChecked()
    await page.getByRole('button', { name: /start test/i }).click()
    await expect(page.getByText('Written question 1?')).toBeVisible()
    expect(generated).toMatchObject({ format: 'explain' })
    await expect(page.getByLabel(/^your explanation$/i)).toBeVisible()
    await expect(page.getByLabel(/^your explanation$/i)).toHaveAttribute('maxlength', '1500')
  })

  test('multiple choice is still the default and unchanged', async ({ page }) => {
    let choiceCalls = 0
    await page.route('**/api/academy/quiz', (r) => {
      choiceCalls++
      return r.fulfill({ json: { questions: [{ id: 'qq1', topic: 'Basics', kind: 'final', prompt: 'MC question?', options: ['A', 'B', 'C'], sealed: 'sealed-token-1-xxxxxxxxxxxxxxxxxxxx' }] } })
    })
    await toQuiz(page)
    await expect(page.getByRole('radio', { name: /multiple choice/i })).toBeChecked()
    await page.getByRole('button', { name: /start test/i }).click()
    await expect(page.getByText('MC question?')).toBeVisible()
    expect(choiceCalls).toBe(1)
  })
})
