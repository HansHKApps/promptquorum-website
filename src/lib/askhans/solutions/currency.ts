// Ask Hans Power Mode — the visitor's own currency for the two money questions (hardware budget, monthly
// cloud spend). The currency is ALWAYS chosen by the visitor in a select box: it is never guessed from the
// IP address (a VPN would make that wrong) and never converted silently. The class ids (b1..b4, m-1..m-4)
// stay the code-side identifiers; only the amounts shown and sent to the AI depend on the currency.
// Browser + server safe (no server-only imports).

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'SEK', 'JPY', 'CNY', 'KRW', 'INR', 'BRL', 'MXN', 'AED', 'SAR'] as const
export type Currency = (typeof CURRENCIES)[number]

export const isCurrency = (v: unknown): v is Currency => typeof v === 'string' && (CURRENCIES as readonly string[]).includes(v)

/** Suggested currency for each site language (only a suggestion: the visitor can change it). */
export const DEFAULT_CURRENCY: Record<string, Currency> = {
  en: 'USD',
  de: 'EUR',
  fr: 'EUR',
  es: 'EUR',
  pt: 'BRL',
  ja: 'JPY',
  zh: 'USD',
  ar: 'USD',
  ko: 'KRW',
}

export const defaultCurrency = (lang: string): Currency => DEFAULT_CURRENCY[lang] ?? 'USD'

/**
 * Upper edges of the first three bands, as rounded, approximate equivalents of the USD reference bands
 * (budget 1,000 / 2,000 / 4,000 and monthly spend 20 / 50 / 100). Rounded on purpose: these are ranges, not exchange rates.
 */
const BUDGET_EDGES: Record<Currency, readonly [number, number, number]> = {
  USD: [1000, 2000, 4000],
  EUR: [1000, 2000, 4000],
  GBP: [800, 1600, 3200],
  CHF: [900, 1800, 3500],
  CAD: [1500, 2500, 5000],
  AUD: [1500, 3000, 6000],
  SEK: [10000, 20000, 40000],
  JPY: [150000, 300000, 600000],
  CNY: [7000, 14000, 28000],
  KRW: [1400000, 2800000, 5500000],
  INR: [80000, 160000, 320000],
  BRL: [5000, 10000, 20000],
  MXN: [18000, 36000, 72000],
  AED: [3500, 7000, 15000],
  SAR: [3500, 7500, 15000],
}

const SPEND_EDGES: Record<Currency, readonly [number, number, number]> = {
  USD: [20, 50, 100],
  EUR: [20, 50, 100],
  GBP: [15, 40, 80],
  CHF: [20, 45, 90],
  CAD: [25, 70, 140],
  AUD: [30, 75, 150],
  SEK: [200, 500, 1000],
  JPY: [3000, 7500, 15000],
  CNY: [150, 350, 700],
  KRW: [28000, 70000, 140000],
  INR: [1600, 4000, 8000],
  BRL: [100, 250, 500],
  MXN: [350, 900, 1800],
  AED: [75, 180, 370],
  SAR: [75, 190, 375],
}

/** Sentence patterns for a range, per language (see copy `range`). */
export interface RangePatterns {
  upTo: (a: string) => string
  between: (a: string, b: string) => string
  over: (a: string) => string
  /** appended/wrapped for the monthly spend questions */
  perMonth: (range: string) => string
}

export const BUDGET_IDS = ['b1', 'b2', 'b3', 'b4'] as const
export const SPEND_IDS = ['m-1', 'm-2', 'm-3', 'm-4'] as const

function money(amount: number, currency: Currency, lang: string): string {
  const locale = lang === 'pt' ? 'pt-BR' : lang
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
  } catch {
    return `${currency} ${amount}`
  }
}

function bands(edges: readonly [number, number, number], currency: Currency, lang: string, p: RangePatterns): [string, string, string, string] {
  const f = (n: number) => money(n, currency, lang)
  return [p.upTo(f(edges[0])), p.between(f(edges[0]), f(edges[1])), p.between(f(edges[1]), f(edges[2])), p.over(f(edges[2]))]
}

/** Option id → label for the money steps in the chosen currency. Merge over the normal option labels. */
export function moneyLabels(currency: Currency, lang: string, p: RangePatterns): Record<string, string> {
  const out: Record<string, string> = {}
  bands(BUDGET_EDGES[currency], currency, lang, p).forEach((label, i) => (out[BUDGET_IDS[i]] = label))
  bands(SPEND_EDGES[currency], currency, lang, p).forEach((label, i) => (out[SPEND_IDS[i]] = p.perMonth(label)))
  return out
}

/** English description of a class for the AI (server side): "up to EUR 1,000 (approximate range, do not convert)". */
export function classText(id: string, currency: Currency): string | null {
  const bi = (BUDGET_IDS as readonly string[]).indexOf(id)
  const si = (SPEND_IDS as readonly string[]).indexOf(id)
  const edges = bi >= 0 ? BUDGET_EDGES[currency] : si >= 0 ? SPEND_EDGES[currency] : null
  const i = bi >= 0 ? bi : si
  if (!edges) return null
  const f = (n: number) => `${currency} ${n.toLocaleString('en-US')}`
  const range = i === 0 ? `up to ${f(edges[0])}` : i === 3 ? `more than ${f(edges[2])}` : `${f(edges[i - 1])} to ${edges[i].toLocaleString('en-US')}`
  return si >= 0 ? `${range} per month` : range
}

/** Currency names in the visitor's language for the select box ("EUR – Euro"). */
export function currencyOptionLabel(currency: Currency, lang: string): string {
  try {
    const name = new Intl.DisplayNames([lang === 'pt' ? 'pt-BR' : lang], { type: 'currency' }).of(currency)
    return name && name !== currency ? `${currency} – ${name}` : currency
  } catch {
    return currency
  }
}
