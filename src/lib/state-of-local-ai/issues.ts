import fs from 'node:fs'
import path from 'node:path'

export const SITE = 'https://www.promptquorum.com'
export const SERIES = 'The State of Local AI'
export const HUB_PATH = '/about/state-of-local-ai'
export const NEXT_ISSUE = 'January 2027'
export const NEXT_ISSUE_ISO = '2027-01-01'
export const PRESS_CONTACT = 'hello@promptquorum.com'

export interface Issue {
  slug: string
  number: number
  label: string
  quarter: string
  title: string
  subtitle: string
  displayDate: string
  isoDate: string
  dataCutOff: string
  version: string
  summary: string
  seoTitle: string
  metaDescription: string
  citeAs: string
  disclosure: string
  datePublished: string
  dateModified: string
  files: { claims: string; sources: string; sourcesJson: string }
  corrections: { date: string; text: string }[]
  keyFindings: { text: string; sources: string[] }[]
}

export const ISSUES: Issue[] = [
  {
    slug: '2026-q4',
    number: 1,
    label: 'Report 01',
    quarter: 'Q4 2026',
    title: 'Few Chickens and Even Fewer Eggs',
    subtitle:
      'Local AI is growing fast, but the usable installed hardware base is minuscule. Great applications are even thinner.',
    displayDate: '23 October 2026',
    isoDate: '2026-10-23',
    dataCutOff: '23 October 2026',
    version: '1.0',
    summary:
      'Very few computers can run a good local AI model, and even fewer apps make it worth the effort. Nine hands-on tests, sourced figures and a claim register show where local AI stands today.',
    seoTitle: 'Few Chickens and Even Fewer Eggs | State of Local AI Report 01',
    metaDescription:
      'Report 01 (Q4 2026): few computers can run good local AI models and even fewer apps are worth using. Sourced figures, nine hands-on tests, claim register.',
    citeAs:
      'Kuepper, H. (2026). Few Chickens and Even Fewer Eggs. The State of Local AI, Report 01 (Q4 2026). PromptQuorum. https://www.promptquorum.com/about/state-of-local-ai/2026-q4',
    disclosure:
      "The author founded PromptQuorum, a content site and directory about local AI apps, and tested apps that are listed there. Each hands-on test record, with evidence labels and the tester's own errors, is linked from the evidence file. No payment or sponsorship is recorded in the test notes.",
    // Set when the pages go live (brief §6). Placeholder = build date; confirm at the noindex flip.
    datePublished: '2026-10-25',
    dateModified: '2026-10-25',
    files: {
      claims: '/state-of-local-ai/2026-q4/claims.csv',
      sources: '/state-of-local-ai/2026-q4/sources.csv',
      sourcesJson: '/state-of-local-ai/2026-q4/sources.json',
    },
    corrections: [{ date: '23 October 2026', text: 'Version 1.0: first publication.' }],
    keyFindings: [
      { text: 'In the July 2026 Steam hardware survey, 25.9% of surveyed systems had 16 GB of graphics memory and 5.4% had 24 GB.', sources: ['S1'] },
      { text: "On a 24 GB Mac in the author's tests, the system used 9.67 GB of memory right after startup, before any model was loaded.", sources: ['S22'] },
      { text: 'Of nine local AI apps the author tested, eight could be scored; four of those eight rated 2 or below on core function.', sources: ['S22'] },
      { text: 'Between 2.2% and 4.5% of US households or consumers pay for an AI chatbot, according to three card-data sources. The top 1% of payers account for 19.5% of consumer AI spend.', sources: ['S11', 'S12', 'S13'] },
      { text: 'The list price of the 128 GB NVIDIA DGX Spark rose from $3,999 at launch to $4,699 in February 2026 and $6,950 in October 2026.', sources: ['S3', 'S4'] },
      { text: 'Sales of new laptops and desktops fell in the third quarter of 2026: IDC reports shipments down 20.1% to 62.7 million units, Omdia down 21.2% to 58.1 million.', sources: ['S43'] },
      { text: 'The largest open models trail the best cloud models by about four months, but need at least 377 GB of memory (a calculation).', sources: ['S14', 'S19'] },
      { text: 'A search for "local AI" returns 10 results in Apple\'s German App Store and 29 listings in Google Play, out of about 2.75 million and 2.65 million apps.', sources: ['S34', 'S35', 'S36'] },
      { text: 'Google searches for "local ai" peaked in late May 2026 and by mid-October were at half their level of a year earlier; the report states that this divergence from other indicators cannot be explained from the data.', sources: ['S29'] },
    ],
  },
]

export const LATEST = ISSUES[0]
export const getIssue = (slug: string) => ISSUES.find((i) => i.slug === slug)
export const issuePath = (i: Issue) => `${HUB_PATH}/${i.slug}`
export const evidencePath = (i: Issue) => `${HUB_PATH}/${i.slug}/evidence`
export const kicker = (i: Issue) => `${SERIES} · ${i.label} · ${i.quarter}`

/** Read a content fragment and adapt markup only (wording is untouched). */
export function loadFragment(slug: string, name: 'article' | 'evidence'): string {
  const file = path.join(process.cwd(), 'src/lib/state-of-local-ai/content', slug, `${name}.html`)
  let html = fs.readFileSync(file, 'utf8')
  html = html.replace(/<table class="">/g, '<table>')
  html = html.replace(/<table>/g, '<div class="sola-scroll" role="region" tabindex="0" aria-label="Scrollable table"><table>')
  html = html.replace(/<\/table>/g, '</table></div>')
  // Accessible names for charts: <title> + <desc> from the existing aria-label.
  html = html.replace(/<svg ([^>]*?)aria-label="([^"]*)">/g, (_m, pre, label) =>
    `<svg ${pre}aria-label="${label}"><title>${label}</title><desc>${label}. Values are printed on the chart; the figure caption states the source.</desc>`)
  return html
}
