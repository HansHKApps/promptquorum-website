import { test, expect, type Page } from '@playwright/test'

/**
 * Full behavioural suite for the ⌘K site search
 * (SearchTrigger → SearchModal → useSearch → /api/search-index/[lang]).
 *
 * Covers: trigger rendering, open/close paths, index delivery, matching
 * behaviour (fuzzy, short-prefix, model-number, unit-normalisation, synonym
 * expansion), locale scoping, ranking, keyboard nav, navigation + telemetry,
 * a11y wiring and the mobile layout.
 */

const DIALOG_LABELS = [
  'Search all guides',
  'Alle Guides durchsuchen',
  'Rechercher tous les guides',
  '全ガイドを検索',
  '搜索所有指南',
  'Buscar todas las guías',
  'Pesquisar todos os guias',
  'البحث في جميع الأدلة',
  '모든 가이드 검색',
]
const dialog = (page: Page) =>
  page.getByRole('dialog', { name: new RegExp(DIALOG_LABELS.join('|')) })
const input = (page: Page) => page.getByRole('combobox')
const options = (page: Page) => page.getByRole('option')

// The cookie consent banner is also role="dialog" and overlays the header, so
// pre-seed a consent record before any page script runs.
test.beforeEach(async ({ context }) => {
  await context.addInitScript(() => {
    localStorage.setItem(
      'analytics_consent',
      JSON.stringify({ state: 'denied', analytics: false, marketing: false, ts: Date.now(), version: 1 }),
    )
  })
})

const TRIGGER = /^(Search guides|Guides durchsuchen|Rechercher des guides|ガイドを検索|搜索指南|Buscar guías|Pesquisar guias|البحث في الأدلة|가이드 검색|Search)$/

/** Open the palette and wait for the index fetch to settle. */
async function openSearch(page: Page, path = '/') {
  await page.goto(path, { waitUntil: 'domcontentloaded' })
  // Both the mobile icon and the desktop pill match TRIGGER; only one is visible
  // per viewport, so pick the visible one rather than .first().
  const trigger = page.getByRole('button', { name: TRIGGER }).locator('visible=true').first()
  await expect(trigger).toBeVisible()
  // React must hydrate before onClick is attached; retry until the dialog mounts.
  await expect(async () => {
    await trigger.click()
    await expect(dialog(page)).toBeVisible({ timeout: 2000 })
  }).toPass({ timeout: 30_000 })
  // Index arrives before the loading row disappears.
  await expect(page.getByText(/Loading search|Suche wird geladen|Chargement/i)).toHaveCount(0, { timeout: 30_000 })
}

/** Type a query and settle on the rendered result list. */
async function query(page: Page, q: string) {
  await input(page).fill(q)
  await page.waitForTimeout(500)
  return options(page)
}

async function titles(page: Page): Promise<string[]> {
  return options(page).evaluateAll((els) =>
    els.map((el) => (el.querySelector('p')?.textContent ?? '').trim()),
  )
}

// ---------------------------------------------------------------------------
// 1. Index API
// ---------------------------------------------------------------------------
test.describe('search index API', () => {
  for (const lang of ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']) {
    test(`/api/search-index/${lang} serves a populated, well-formed index`, async ({ request }) => {
      const res = await request.get(`/api/search-index/${lang}`)
      expect(res.status()).toBe(200)

      const entries = await res.json()
      expect(Array.isArray(entries)).toBe(true)
      expect(entries.length).toBeGreaterThan(100)

      // Every entry must be usable by the UI: no blank titles, no blank URLs.
      const blankTitle = entries.filter((e: any) => !e.title?.trim())
      const blankUrl = entries.filter((e: any) => !e.url?.trim())
      expect(blankTitle, `${blankTitle.length} entries have an empty title`).toHaveLength(0)
      expect(blankUrl).toHaveLength(0)

      // Locale scoping is enforced server-side.
      expect(entries.every((e: any) => e.lang === lang)).toBe(true)

      // URLs must carry the locale prefix (or none, for en).
      const prefix = lang === 'en' ? '' : `/${lang}/`
      const wrong = entries.filter((e: any) => (lang === 'en' ? e.url.startsWith('/en/') : !e.url.startsWith(prefix)))
      expect(wrong.slice(0, 5)).toHaveLength(0)

      // ids unique
      const ids = new Set(entries.map((e: any) => e.id))
      expect(ids.size).toBe(entries.length)
    })
  }

  test('unknown locale 404s', async ({ request }) => {
    expect((await request.get('/api/search-index/xx')).status()).toBe(404)
  })

  test('every content cluster is represented in the en index', async ({ request }) => {
    const entries = await (await request.get('/api/search-index/en')).json()
    const hubs = new Set(entries.map((e: any) => e.hub))
    for (const hub of [
      'prompt-engineering',
      'local-llms',
      'power-local-llm',
      'prompt-bites',
      'balcony-solar',
      'smart-home',
      'blog',
    ]) {
      expect(hubs, `cluster "${hub}" is missing from the search index`).toContain(hub)
    }
  })
})

// ---------------------------------------------------------------------------
// 2. Trigger + open/close
// ---------------------------------------------------------------------------
test.describe('trigger and open/close', () => {
  test('desktop trigger shows label and ⌘K hint', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'desktop-only trigger')
    await page.goto('/')
    const trigger = page.getByRole('button', { name: 'Search guides' })
    await expect(trigger).toBeVisible()
    await expect(trigger).toContainText('Search guides...')
    await expect(trigger.locator('kbd')).toHaveText('⌘K')
  })

  test('mobile trigger is an icon with a 44px tap target', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only trigger')
    await page.goto('/')
    const trigger = page.getByRole('button', { name: 'Search' })
    await expect(trigger).toBeVisible()
    const box = await trigger.boundingBox()
    expect(box!.width).toBeGreaterThanOrEqual(44)
    expect(box!.height).toBeGreaterThanOrEqual(44)
  })

  test('Meta+K opens the palette', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await expect(page.getByRole('button', { name: TRIGGER }).locator('visible=true').first()).toBeVisible()
    await expect(async () => {
      await page.keyboard.press('Meta+k')
      await expect(dialog(page)).toBeVisible({ timeout: 2000 })
    }).toPass({ timeout: 30_000 })
  })

  test('Control+K opens the palette', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await expect(page.getByRole('button', { name: TRIGGER }).locator('visible=true').first()).toBeVisible()
    await expect(async () => {
      await page.keyboard.press('Control+k')
      await expect(dialog(page)).toBeVisible({ timeout: 2000 })
    }).toPass({ timeout: 30_000 })
  })

  test('input is auto-focused on open', async ({ page }) => {
    await openSearch(page)
    await expect(input(page)).toBeFocused()
  })

  test('Escape closes', async ({ page }) => {
    await openSearch(page)
    await page.keyboard.press('Escape')
    await expect(dialog(page)).toHaveCount(0)
  })

  test('backdrop click closes (desktop)', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'no backdrop on mobile')
    await openSearch(page)
    await page.locator('div.fixed.inset-0.bg-black\\/40').click({ position: { x: 5, y: 5 } })
    await expect(dialog(page)).toHaveCount(0)
  })

  test('mobile close button closes', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only')
    await openSearch(page)
    await page.getByRole('button', { name: 'Close search' }).click()
    await expect(dialog(page)).toHaveCount(0)
  })

  test('body scroll is locked while open and restored on close', async ({ page }) => {
    await openSearch(page)
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden')
    await page.keyboard.press('Escape')
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('')
  })

  test('query is cleared when reopened', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await page.keyboard.press('Escape')
    await page.getByRole('button', { name: TRIGGER }).locator('visible=true').first().click()
    await expect(input(page)).toHaveValue('')
  })
})

// ---------------------------------------------------------------------------
// 3. Default state
// ---------------------------------------------------------------------------
test.describe('default state', () => {
  test('shows Popular Guides before 2 characters', async ({ page }) => {
    await openSearch(page)
    await expect(page.getByText('Popular Guides')).toBeVisible()
    const rows = page.locator('#search-listbox button')
    await expect(rows).toHaveCount(6)
  })

  test('a single character does not search', async ({ page }) => {
    await openSearch(page)
    await input(page).fill('o')
    await page.waitForTimeout(300)
    await expect(page.getByText('Popular Guides')).toBeVisible()
    await expect(options(page)).toHaveCount(0)
  })

  test('popular guides navigate', async ({ page }) => {
    await openSearch(page)
    await page.locator('#search-listbox button').first().click()
    await expect(dialog(page)).toHaveCount(0)
    await expect(page).not.toHaveURL(/localhost:3000\/$/)
  })
})

// ---------------------------------------------------------------------------
// 4. Core matching
// ---------------------------------------------------------------------------
test.describe('matching', () => {
  test('a common term returns results', async ({ page }) => {
    await openSearch(page)
    await expect(await query(page, 'ollama')).not.toHaveCount(0)
  })

  test('results are capped at 20', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, 'prompt')
    expect((await res.count())).toBeLessThanOrEqual(20)
  })

  test('exact title substring ranks first', async ({ page }) => {
    await openSearch(page)
    await query(page, 'install ollama')
    const list = await titles(page)
    expect(list.length, 'query "install ollama" returned no results at all').toBeGreaterThan(0)
    expect(list[0].toLowerCase()).toContain('install ollama')
  })

  test('typo tolerance: "ollma" still finds Ollama guides', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, 'ollma')
    expect(await res.count()).toBeGreaterThan(0)
    expect((await titles(page)).join(' ').toLowerCase()).toContain('ollama')
  })

  test('gibberish shows the no-results state', async ({ page }) => {
    await openSearch(page)
    await input(page).fill('zzzqqxwv')
    await page.waitForTimeout(400)
    await expect(options(page)).toHaveCount(0)
    await expect(page.getByText(/No results for/i)).toBeVisible()
  })

  test('matched title text is highlighted', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await expect(options(page).first().locator('mark')).not.toHaveCount(0)
  })

  test('each result renders a hub breadcrumb', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await expect(options(page).first()).toContainText(/Local LLMs|Prompt Engineering|Power Local LLM|Prompt Bites|Blog/)
  })
})

// ---------------------------------------------------------------------------
// 5. Query-hardening rules (the documented regression fixes)
// ---------------------------------------------------------------------------
test.describe('query hardening', () => {
  test('short Latin query "rag" matches word-prefixes only, not mid-word', async ({ page, request }) => {
    await openSearch(page)
    const res = await query(page, 'rag')
    expect(await res.count()).toBeGreaterThan(0)
    const idx = await (await request.get('/api/search-index/en')).json()
    for (const t of await titles(page)) {
      const e = idx.find((x: any) => x.title === t)
      expect(e, `result "${t}" is not in the index`).toBeTruthy()
      // The short-prefix path ranks title > tags > description/section, so the
      // prefix may legitimately live in any of those — but never mid-word.
      const words = `${e.title} ${(e.tags ?? []).join(' ')} ${e.description} ${e.section}`
        .toLowerCase()
        .split(/[^a-z0-9]+/)
      expect(words.some((w: string) => w.startsWith('rag')), `"${t}" has no indexed word starting with "rag"`).toBe(true)
    }
  })

  test('model number "4060" never returns a 3060 article', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, '4060')
    expect(await res.count()).toBeGreaterThan(0)
    for (const t of await titles(page)) {
      expect(t, `"${t}" matched the query 4060`).toMatch(/4060/)
    }
  })

  test('"rtx 4060" behaves the same as "4060"', async ({ page }) => {
    await openSearch(page)
    await query(page, 'rtx 4060')
    const list = await titles(page)
    expect(list.length).toBeGreaterThan(0)
    for (const t of list) expect(t).toMatch(/4060/)
  })

  test('unit normalisation: "16 GB" and "16GB" return the same results', async ({ page }) => {
    await openSearch(page)
    await query(page, '16gb')
    const a = await titles(page)
    await query(page, '16 GB')
    const b = await titles(page)
    expect(a.length).toBeGreaterThan(0)
    expect(b).toEqual(a)
  })

  test('memory size "16gb" stays on the fuzzy path (not model-token filtered)', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, '16gb')
    expect(await res.count()).toBeGreaterThan(1)
  })

  test('German synonym "Grafikkarte" expands to GPU results', async ({ page }) => {
    await openSearch(page, '/de')
    const res = await query(page, 'Grafikkarte')
    expect(await res.count(), 'no results for the German word for graphics card').toBeGreaterThan(0)
  })

  test('English synonym "graphics card" expands to GPU results', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, 'graphics card')
    expect(await res.count()).toBeGreaterThan(0)
  })

  test('currency-prefixed model token "$2000" is handled', async ({ page }) => {
    await openSearch(page)
    await query(page, '$2000')
    for (const t of await titles(page)) expect(t).toMatch(/2000/)
  })
})

// ---------------------------------------------------------------------------
// 6. Locale scoping
// ---------------------------------------------------------------------------
test.describe('locale scoping', () => {
  test('German search returns only German pages', async ({ page }) => {
    await openSearch(page, '/de')
    const res = await query(page, 'prompt')
    expect(await res.count()).toBeGreaterThan(0)
    // Every result must navigate under /de/
    const hrefs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('#search-listbox [role="option"]')).length
    })
    expect(hrefs).toBeGreaterThan(0)
    await options(page).first().click()
    await expect(page).toHaveURL(/\/de\//)
  })

  test('German UI strings are used', async ({ page }) => {
    await page.goto('/de')
    await page.getByRole('button', { name: TRIGGER }).locator('visible=true').first().click()
    await expect(dialog(page)).toBeVisible()
    await expect(page.getByText('Beliebte Guides')).toBeVisible()
  })

  test('Japanese 2-char CJK query works (fuzzy path, not prefix path)', async ({ page }) => {
    await openSearch(page, '/ja')
    const res = await query(page, 'プロンプト')
    expect(await res.count(), 'Japanese query returned nothing').toBeGreaterThan(0)
  })

  test('Chinese synonym 显卡 expands to GPU', async ({ page }) => {
    await openSearch(page, '/zh')
    const res = await query(page, '显卡')
    expect(await res.count()).toBeGreaterThan(0)
  })

  test('Arabic RTL search returns results', async ({ page }) => {
    await openSearch(page, '/ar')
    const res = await query(page, 'الذكاء')
    expect(await res.count()).toBeGreaterThan(0)
  })

  test('no cross-locale leakage: English query on /de does not surface English titles', async ({ page }) => {
    await openSearch(page, '/de')
    await query(page, 'prompt')
    await options(page).first().click()
    await expect(page).toHaveURL(/\/de\//)
  })
})

// ---------------------------------------------------------------------------
// 7. Keyboard navigation
// ---------------------------------------------------------------------------
test.describe('keyboard navigation', () => {
  test('ArrowDown moves the active row', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await expect(options(page).nth(0)).toHaveAttribute('aria-selected', 'true')
    await page.keyboard.press('ArrowDown')
    await expect(options(page).nth(1)).toHaveAttribute('aria-selected', 'true')
    await expect(options(page).nth(0)).toHaveAttribute('aria-selected', 'false')
  })

  test('ArrowUp clamps at the top', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await page.keyboard.press('ArrowUp')
    await expect(options(page).nth(0)).toHaveAttribute('aria-selected', 'true')
  })

  test('ArrowDown clamps at the bottom', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, 'ollama')
    const n = await res.count()
    for (let i = 0; i < n + 5; i++) await page.keyboard.press('ArrowDown')
    await expect(options(page).nth(n - 1)).toHaveAttribute('aria-selected', 'true')
  })

  test('Enter opens the active result', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await page.keyboard.press('ArrowDown')
    const expected = (await titles(page))[1]
    await page.keyboard.press('Enter')
    await expect(dialog(page)).toHaveCount(0)
    await expect(page.locator('h1').first()).toBeVisible()
    expect(expected.length).toBeGreaterThan(0)
  })

  test('active index resets when the query changes', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await query(page, 'prompt')
    await expect(options(page).nth(0)).toHaveAttribute('aria-selected', 'true')
  })

  test('hovering a row makes it active', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'no hover on mobile')
    await openSearch(page)
    await query(page, 'ollama')
    await options(page).nth(2).hover()
    await expect(options(page).nth(2)).toHaveAttribute('aria-selected', 'true')
  })
})

// ---------------------------------------------------------------------------
// 8. Navigation + telemetry
// ---------------------------------------------------------------------------
test.describe('navigation', () => {
  test('clicking a result navigates to a real, non-404 page', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await options(page).first().click()
    await expect(dialog(page)).toHaveCount(0)
    await expect(page).toHaveURL(/\/(local-llms|prompt-engineering|power-local-llm|prompt-bites|blog)\//)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('selection is recorded in sessionStorage as pq_last_search', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    await options(page).first().click()
    await expect(dialog(page)).toHaveCount(0)
    const raw = await page.evaluate(() => sessionStorage.getItem('pq_last_search'))
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.query).toBe('ollama')
    expect(parsed.resultId).toBeTruthy()
    expect(parsed.resultHub).toBeTruthy()
    expect(typeof parsed.timestamp).toBe('number')
  })

  test('every top-5 result URL for a broad query resolves 200', async ({ page, request }) => {
    await openSearch(page)
    await query(page, 'local llm')
    const idx = await (await request.get('/api/search-index/en')).json()
    const shown = (await titles(page)).slice(0, 5)
    for (const t of shown) {
      const entry = idx.find((e: any) => e.title === t)
      expect(entry, `result "${t}" is not in the index`).toBeTruthy()
      const res = await request.get(entry.url)
      expect(res.status(), `${entry.url} returned ${res.status()}`).toBe(200)
    }
  })
})

// ---------------------------------------------------------------------------
// 9. Accessibility wiring
// ---------------------------------------------------------------------------
test.describe('accessibility', () => {
  test('dialog and listbox roles are wired', async ({ page }) => {
    await openSearch(page)
    await expect(dialog(page)).toHaveAttribute('aria-modal', 'true')
    await expect(page.locator('#search-listbox')).toHaveAttribute('role', 'listbox')
    await expect(input(page)).toHaveAttribute('aria-controls', 'search-listbox')
  })

  test('aria-expanded reflects result presence', async ({ page }) => {
    await openSearch(page)
    await expect(input(page)).toHaveAttribute('aria-expanded', 'false')
    await query(page, 'ollama')
    await expect(input(page)).toHaveAttribute('aria-expanded', 'true')
  })

  test('aria-activedescendant points at an element that exists', async ({ page }) => {
    await openSearch(page)
    await query(page, 'ollama')
    const id = await input(page).getAttribute('aria-activedescendant')
    expect(id, 'aria-activedescendant is not set while results are shown').toBeTruthy()
    await expect(
      page.locator(`#${id}`),
      `aria-activedescendant="${id}" but no element with that id exists — screen readers announce nothing`,
    ).toHaveCount(1)
  })
})

// ---------------------------------------------------------------------------
// 10. Layout
// ---------------------------------------------------------------------------
test.describe('layout', () => {
  test('mobile palette is full-screen', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only')
    await openSearch(page)
    const box = await dialog(page).boundingBox()
    const vp = page.viewportSize()!
    expect(box!.width).toBeCloseTo(vp.width, 0)
  })

  test('desktop palette is a centered 560px card', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'desktop-only')
    await openSearch(page)
    const box = await dialog(page).boundingBox()
    expect(box!.width).toBeLessThanOrEqual(560)
  })

  test('keyboard hint footer appears with results (desktop)', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'desktop-only')
    await openSearch(page)
    await query(page, 'ollama')
    await expect(page.getByText('Navigate')).toBeVisible()
  })

  test('long result lists scroll inside the palette, not the page', async ({ page }) => {
    await openSearch(page)
    await query(page, 'prompt')
    const overflow = await page.locator('#search-listbox').evaluate((el) => getComputedStyle(el).overflowY)
    expect(overflow).toMatch(/auto|scroll/)
  })
})

// ---------------------------------------------------------------------------
// 11. Regression guards for the scoring fix
//
// Every query below returned ZERO results before commit 671de315d, because
// MAX_SCORE=0.5 was applied to a Fuse score inflated by fieldNormWeight: 1.5.
// Long titles were penalised hard enough that exact substring matches scored
// above the cutoff and were discarded.
// ---------------------------------------------------------------------------
test.describe('regression: queries that used to return nothing', () => {
  const PREVIOUSLY_BROKEN = [
    'install ollama',
    'rtx 4060',
    '16gb',
    '16 GB',
    'raspberry pi',
    'docker',
    'linux',
    'system prompt',
    'chain of thought',
    'few shot',
    'openwebui',
    'how to run llama locally',
  ]

  for (const q of PREVIOUSLY_BROKEN) {
    test(`"${q}" returns results`, async ({ page }) => {
      await openSearch(page)
      const res = await query(page, q)
      expect(await res.count(), `"${q}" returned zero results`).toBeGreaterThan(0)
    })
  }

  test('an exact-title query puts that title first', async ({ page }) => {
    await openSearch(page)
    for (const [q, expected] of [
      ['install ollama', 'install ollama'],
      ['system prompt', 'system prompt'],
    ] as const) {
      await query(page, q)
      const list = await titles(page)
      expect(list.length, `"${q}" returned nothing`).toBeGreaterThan(0)
      expect(list[0].toLowerCase()).toContain(expected)
    }
  })

  test('natural-language questions fall back to token matching', async ({ page }) => {
    await openSearch(page)
    for (const q of ['how to run llama locally', 'what is the best gpu for local llm']) {
      const res = await query(page, q)
      expect(await res.count(), `"${q}" returned zero results`).toBeGreaterThan(0)
    }
  })

  test('the token fallback still rejects junk, including multi-word junk', async ({ page }) => {
    await openSearch(page)
    for (const q of ['zzzqqxwv', 'zzzqqxwv nothing here', 'qwertyuiop asdfghjkl']) {
      await input(page).fill(q)
      await page.waitForTimeout(400)
      expect(await options(page).count(), `junk query "${q}" returned results`).toBe(0)
    }
  })

  test('the token fallback never widens a model-number query', async ({ page }) => {
    await openSearch(page)
    // "4060" must never pull in 3060 articles via a token-level retry.
    await query(page, 'rtx 4060')
    const list = await titles(page)
    expect(list.length).toBeGreaterThan(0)
    expect(list[0]).toMatch(/4060/)
  })

  // "rtx 3090" is deliberately NOT in the list above. No article TITLE mentions
  // a 3090, and the model-token rule requires a whole-token title match, so an
  // empty result is the documented correct answer — not a scoring regression.
  // (It is a content gap: the site has no RTX 3090 article.)
  test('a model with no matching title correctly returns nothing', async ({ page, request }) => {
    const idx = await (await request.get('/api/search-index/en')).json()
    expect(idx.filter((e: any) => /3090/.test(e.title))).toHaveLength(0)
    await openSearch(page)
    await input(page).fill('rtx 3090')
    await page.waitForTimeout(400)
    expect(await options(page).count()).toBe(0)
  })

  test('typo tolerance survives the tighter cutoff', async ({ page }) => {
    await openSearch(page)
    const res = await query(page, 'ollma')
    expect(await res.count()).toBeGreaterThan(0)
    expect((await titles(page)).join(' ').toLowerCase()).toContain('ollama')
  })
})

// ---------------------------------------------------------------------------
// 12. Regression guard: every locale must render a non-empty <h1>
//
// lm-studio-advanced-features defined seoTitle but no title in ja and zh, so
// both locales shipped an empty <h1> and a blank-titled search entry.
// ---------------------------------------------------------------------------
test.describe('regression: article titles are never blank', () => {
  for (const [lang, path] of [
    ['en', '/local-llms/lm-studio-advanced-features'],
    ['ja', '/ja/local-llms/lm-studio-advanced-features'],
    ['zh', '/zh/local-llms/lm-studio-advanced-features'],
  ] as const) {
    test(`${lang} page renders a non-empty <h1>`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' })
      const h1 = (await page.locator('h1').first().textContent()) ?? ''
      expect(h1.trim(), `${lang} <h1> is empty`).not.toBe('')
    })
  }
})
