import fs from 'node:fs'
import path from 'node:path'

export const SITE = 'https://www.promptquorum.com'
export const SERIES = 'The State of Local AI'
export const HUB_PATH = '/about/state-of-local-ai'
export const NEXT_ISSUE = 'January 2027'
export const NEXT_ISSUE_ISO = '2027-01-01'
export const LICENSE_NAME = 'CC BY 4.0'
export const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/'
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
  citeApa: string
  citeChicago: string
  press: {
    stats: { figure: string; text: string; source: string; ids: string[] }[]
    quotes: string[]
    author: string
    method: string
  }
  disclosure: string
  datePublished: string
  dateModified: string
  files: { claims: string; sources: string; sourcesJson: string; reportPdf: string; appendixPdf: string; symbolsZip: string }
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
    citeApa:
      'Kuepper, H. (2026, October 23). Few chickens and even fewer eggs (The State of Local AI, Report 01, Q4 2026). PromptQuorum. https://www.promptquorum.com/about/state-of-local-ai/2026-q4',
    citeChicago:
      'Kuepper, Hans. "Few Chickens and Even Fewer Eggs." The State of Local AI, Report 01 (Q4 2026). PromptQuorum, October 23, 2026. https://www.promptquorum.com/about/state-of-local-ai/2026-q4.',
    press: {
      stats: [
        { figure: '5.4%', text: 'of systems in the July 2026 Steam hardware survey had 24 GB of graphics memory; 25.9% had 16 GB.', source: 'Steam Hardware & Software Survey, July 2026, via secondary reports (Valve primary page not retrieved)', ids: ['S1'] },
        { figure: '4 of 8', text: 'local AI apps the author could score rated 2 or below on core function (nine were tested, eight scored).', source: "Author's hands-on tests, 9-24 October 2026", ids: ['S22'] },
        { figure: '9.67 GB', text: 'of memory in use on a 24 GB Mac right after startup, before any model was loaded.', source: "Author's hands-on tests, 24 GB Mac", ids: ['S22'] },
        { figure: '$3,999 to $6,950', text: 'list price of the 128 GB NVIDIA DGX Spark, launch to October 2026 ($4,699 in February 2026).', source: 'NVIDIA developer forum (primary); Implicator.ai (secondary)', ids: ['S3', 'S4'] },
        { figure: '2.2% to 4.5%', text: 'of US households or consumers pay for an AI chatbot; the top 1% of payers account for 19.5% of consumer AI spend.', source: 'Bank of America Institute, PNC (via TechDogs), a16z/YipitData (via AI Weekly)', ids: ['S11', 'S12', 'S13'] },
        { figure: '-20.1% / -21.2%', text: 'Q3 2026 PC shipments, per IDC (62.7 million units) and Omdia (58.1 million units).', source: 'IDC and Omdia, as reported by Digital Today and Windows Latest (secondary)', ids: ['S43'] },
        { figure: '10 and 29', text: 'results for "local AI" in the German Apple App Store and in Google Play, out of about 2.75 million and 2.65 million apps.', source: 'Store searches captured 23 October 2026; 42matters store statistics', ids: ['S34', 'S35', 'S36'] },
      ],
      quotes: [
        'Local AI today has few chickens and even fewer eggs. In the July 2026 Steam survey, only 5.4% of systems had 24 GB of graphics memory, and four of the eight local AI apps I could score rated 2 or below on their core function. (Hans Kuepper, The State of Local AI, Report 01, Q4 2026)',
        'The list price of NVIDIA\u2019s 128 GB DGX Spark went from $3,999 at launch to $6,950 in October 2026. The hardware that makes local AI comfortable is getting more expensive, not cheaper. (Hans Kuepper, The State of Local AI, Report 01, Q4 2026)',
      ],
      author: 'Hans Kuepper is the founder of PromptQuorum, based in Frankfurt, with more than 30 years of consulting and general management experience. He tested the nine apps in this report himself.',
      method: 'Figures come from numbered sources; each claim carries an evidence label, and assumptions name who makes them and what they rest on. Secondary sources are marked as such. The claim register and all sources can be downloaded.',
    },
    disclosure:
      "The author founded PromptQuorum, a content site and directory about local AI apps, and tested apps that are listed there. Each hands-on test record, with evidence labels and the tester's own errors, is linked from the evidence file. No payment or sponsorship is recorded in the test notes.",
    // Pages went indexable 2026-10-25 (noindex flip); these are the go-live dates.
    datePublished: '2026-10-25',
    dateModified: '2026-10-25',
    files: {
      claims: '/state-of-local-ai/2026-q4/claims.csv',
      sources: '/state-of-local-ai/2026-q4/sources.csv',
      sourcesJson: '/state-of-local-ai/2026-q4/sources.json',
      reportPdf: '/state-of-local-ai/2026-q4/state-of-local-ai-2026-q4-report.pdf',
      appendixPdf: '/state-of-local-ai/2026-q4/state-of-local-ai-2026-q4-appendix.pdf',
      symbolsZip: '/state-of-local-ai/2026-q4/symbols.zip',
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
export function loadFragment(slug: string, name: 'article' | 'evidence', lang = 'en', tableLabel = 'Scrollable table'): string {
  const base = name === 'article' && lang !== 'en' ? `article.${lang}` : name
  const file = path.join(process.cwd(), 'src/lib/state-of-local-ai/content', slug, `${base}.html`)
  let html = fs.readFileSync(file, 'utf8')
  html = html.replace(/<table class="">/g, '<table>')
  html = html.replace(/<table>/g, `<div class="sola-scroll" role="region" tabindex="0" aria-label="${tableLabel}"><table>`)
  html = html.replace(/<\/table>/g, '</table></div>')
  // Accessible names for charts: <title> + <desc> from the existing aria-label.
  html = html.replace(/<svg ([^>]*?)aria-label="([^"]*)">/g, (_m, pre, label) =>
    `<svg ${pre}aria-label="${label}"><title>${label}</title><desc>${label}. Values are printed on the chart; the figure caption states the source.</desc>`)
  return html
}
