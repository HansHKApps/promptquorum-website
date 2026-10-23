// Automated "first screen" test — GEO_WRITING_GUIDELINES.md Rule 36 (viewport test) and Rule 31 (lead answer).
//
// For each page x locale it opens the URL in a real browser at 1024x768 (laptop) and 375x812 (mobile) and
// measures, WITHOUT scrolling, whether a first-time visitor sees:
//   1. the H1                                  fully inside the viewport
//   2. the lead answer block                   found (first bold paragraph after the H1), fully inside the
//                                              viewport, 25-50 words (not enforced for ja/zh/ko), and not covered
//                                              by a cookie banner, sticky header or any other overlay
//   3. the Key Takeaways block                 heading and first bullet inside the viewport
//                                              (PQ_ATF_TAKEAWAYS=all requires the whole list)
//
// Not checked, because the renderers give them no stable markup: the Rule 33 CTR hook and the Rule 36
// "Best Choice" block. They are listed as not checked in the summary line.
//
// Run (against an already-running server; `npm run dev` is broken, use a production build):
//   npx next start --port 3000 &
//   npm run test:above-fold
//   PQ_BASE_URL=https://www.promptquorum.com PQ_ATF_PATHS=/local-llms/best-local-llms-for-coding npm run test:above-fold
//
// Environment:
//   PQ_BASE_URL         default http://localhost:3000
//   PQ_ATF_PATHS        comma-separated paths; default: the 8 pages of the 2026-10-21 audit
//   PQ_ATF_CHANGED      git ref (e.g. origin/main): test only article files that differ from it
//   PQ_ATF_LOCALES      comma-separated locales, or "all"; default en
//   PQ_ATF_TAKEAWAYS    "first" (default) or "all"
//   PQ_CHROMIUM_PATH    path to a Chromium binary (sandboxes without the Playwright browser download)

import { expect, test, type Page } from '@playwright/test'
// @ts-expect-error plain .mjs helper without types
import { changedArticleFiles, articleUrlPath } from '../scripts/changed-article-files.mjs'

const ALL_LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const CJK = new Set(['ja', 'zh', 'ko'])
const VIEWPORTS = [
  { name: 'laptop 1024x768', width: 1024, height: 768 },
  { name: 'mobile 375x812', width: 375, height: 812 },
]
// Same strings the *PostClient.tsx renderers use for the Key Takeaways heading (SECTION_HEADER_LABELS).
const TAKEAWAY_LABELS = ['Key Takeaways', 'Wichtigste Erkenntnisse', 'Points clés', '重要なポイント', '关键要点', 'Conclusiones clave', 'Principais conclusões', 'النقاط الرئيسية', '핵심 요점']
const DEFAULT_PATHS = [
  '/power-local-llm/caelum-hands-on-test',
  '/power-local-llm/llamatik-review',
  '/power-local-llm/secret-ai-review',
  '/power-local-llm/tokforge-review',
  '/local-llms/qwen-local-deployment-guide-2026',
  '/power-local-llm/local-vision-models-llava-ollama-2026',
  '/prompt-engineering/how-to-reduce-prompt-brittleness',
  '/frameworks/co-star',
]

const changedRef = process.env.PQ_ATF_CHANGED
const paths: string[] = process.env.PQ_ATF_PATHS
  ? process.env.PQ_ATF_PATHS.split(',').map((s) => s.trim()).filter(Boolean)
  : changedRef
    ? changedArticleFiles(changedRef).files.map(articleUrlPath).filter(Boolean)
    : DEFAULT_PATHS
const localeEnv = process.env.PQ_ATF_LOCALES ?? 'en'
const locales = localeEnv === 'all' ? ALL_LOCALES : localeEnv.split(',').map((s) => s.trim()).filter(Boolean)
const takeawaysMode = process.env.PQ_ATF_TAKEAWAYS === 'all' ? 'all' : 'first'

type Box = { top: number; bottom: number }
type Measure = {
  h1: Box | null
  lead: (Box & { words: number; chars: number; bold: boolean; obstructedBy: string | null }) | null
  takeaways: (Box & { firstBullet: Box | null }) | null
}

async function measure(page: Page, vh: number): Promise<Measure> {
  return page.evaluate(
    ({ labels, vh }) => {
      window.scrollTo(0, 0)
      const main = document.querySelector('main') ?? document.body
      const box = (el: Element): { top: number; bottom: number } => {
        const r = el.getBoundingClientRect()
        return { top: Math.round(r.top), bottom: Math.round(r.bottom) }
      }
      const h1 = main.querySelector('h1')

      // Lead answer: first paragraph after the H1 that is bold (computed weight >= 600, or a <strong>/<b>
      // covering most of its text) and long enough not to be a label or byline.
      let lead: Element | null = null
      for (const p of Array.from(main.querySelectorAll('p'))) {
        if (h1 && !(h1.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING)) continue
        const text = (p.textContent ?? '').trim()
        if (text.split(/\s+/).length < 12 && [...text].length < 40) continue
        const weight = Number(getComputedStyle(p).fontWeight)
        const strongLen = Array.from(p.querySelectorAll('strong, b')).reduce((n, s) => n + (s.textContent ?? '').length, 0)
        if (weight >= 600 || strongLen >= text.length * 0.8) { lead = p; break }
      }

      let leadOut: Measure['lead'] = null
      if (lead) {
        const text = (lead.textContent ?? '').trim()
        const b = box(lead)
        let obstructedBy: string | null = null
        const r = lead.getBoundingClientRect()
        const xs = [r.left + 12, r.left + r.width / 2]
        // Probe only points inside the lead's own box AND the viewport. A lead that starts below the fold has no
        // on-screen point; the old vh-2 clamp probed unrelated content (false "covered by").
        const ys = [r.top + 6, Math.min(r.bottom - 6, vh - 2)]
        for (const x of xs) for (const y of ys) {
          if (y < r.top || y > r.bottom || y < 0 || y >= vh || x < 0 || x >= window.innerWidth) continue
          const el = document.elementFromPoint(x, y)
          if (el && !lead.contains(el) && !el.contains(lead)) {
            const cs = getComputedStyle(el)
            obstructedBy = `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}${el.getAttribute('role') ? `[role=${el.getAttribute('role')}]` : ''} (${cs.position})`
            break
          }
        }
        leadOut = {
          ...b,
          words: text.split(/\s+/).length,
          chars: [...text].length,
          bold: true,
          obstructedBy,
        }
      }

      // Key Takeaways: the .key-takeaways container (LocalLLMs, PowerLocalLLM, SmartHome, BalconySolar,
      // PromptEngineering renderers) or any element whose whole text is the localized heading.
      let kt: Element | null = main.querySelector('.key-takeaways')
      if (!kt) {
        const label = Array.from(main.querySelectorAll('p, h2, h3, span, strong')).find((e) => labels.includes((e.textContent ?? '').trim()))
        kt = label ? label.closest('div, section') : null
      }
      const li = kt?.querySelector('li') ?? null

      return {
        h1: h1 ? box(h1) : null,
        lead: leadOut,
        takeaways: kt ? { ...box(kt), firstBullet: li ? box(li) : null } : null,
      }
    },
    { labels: TAKEAWAY_LABELS, vh },
  )
}

// Templates that by design have no lead-answer block or Key Takeaways box (Rule 31/36 describe the article
// renderers): hands-on tests and the frameworks/* pages. Only the H1 is checked there.
const H1_ONLY = /\/frameworks\/|-hands-on-test$/

function judge(m: Measure, vh: number, loc: string, path: string): string[] {
  const f: string[] = []
  if (!m.h1) f.push('no <h1> in <main>')
  else if (m.h1.bottom > vh) f.push(`H1 ends ${m.h1.bottom - vh}px below the fold`)
  if (H1_ONLY.test(path)) return f

  if (!m.lead) {
    f.push('no bold lead answer found after the H1 (Rule 31)')
  } else {
    if (m.lead.bottom > vh) f.push(`lead answer ends ${m.lead.bottom - vh}px below the fold (starts at ${m.lead.top}px)`)
    if (m.lead.obstructedBy) f.push(`lead answer is covered by ${m.lead.obstructedBy}`)
    if (!CJK.has(loc) && (m.lead.words < 25 || m.lead.words > 50)) f.push(`lead answer is ${m.lead.words} words, Rule 31 requires 25-50`)
  }

  if (!m.takeaways) f.push('no Key Takeaways block found (Rule 36)')
  else {
    const edge = takeawaysMode === 'all' ? m.takeaways.bottom : (m.takeaways.firstBullet?.bottom ?? m.takeaways.bottom)
    if (m.takeaways.top >= vh) f.push(`Key Takeaways start ${m.takeaways.top - vh}px below the fold`)
    else if (edge > vh) f.push(`Key Takeaways ${takeawaysMode === 'all' ? 'list' : 'first bullet'} ends ${edge - vh}px below the fold`)
  }
  return f
}

test.describe('above the fold', () => {
  test.skip(paths.length === 0, 'no pages to check (PQ_ATF_CHANGED matched no article files)')

  for (const path of paths) {
    for (const loc of locales) {
      const url = `${loc === 'en' ? '' : `/${loc}`}${path}`
      test(`${url}`, async ({ page }) => {
        const failures: string[] = []
        for (const vp of VIEWPORTS) {
          await page.setViewportSize({ width: vp.width, height: vp.height })
          await page.goto(url, { waitUntil: 'load' })
          await page.evaluate(() => document.fonts.ready)
          await page.waitForTimeout(800) // cookie banner and hydration-time layout shifts
          const m = await measure(page, vp.height)
          const f = judge(m, vp.height, loc, path)
          const px = (b: Box | null | undefined) => (b ? `${b.top}-${b.bottom}` : 'none')
          console.log(`${f.length ? 'FAIL' : 'ok  '} ${url} @ ${vp.name}: h1 ${px(m.h1)} · lead ${px(m.lead)}${m.lead ? ` (${m.lead.words}w)` : ''} · takeaways ${px(m.takeaways)}`)
          failures.push(...f.map((x) => `${vp.name}: ${x}`))
        }
        expect(failures, `first-screen failures on ${url} (CTR hook and Best Choice block are not checked)`).toEqual([])
      })
    }
  }
})
