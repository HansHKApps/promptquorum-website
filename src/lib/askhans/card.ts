// Share card for Power Mode reports: the shared link is /askhans?card=<process>, whose og:image is
// /api/og/askhans (site numbers + process name, no answers, no personal data). Only allowlisted ids pass through.

import { PROCESS_IDS } from '@/lib/askhans/solutions/types'

const SITE = 'https://www.promptquorum.com'

/** Returns the process id when it is a visible, known process; otherwise null. */
export function parseCard(raw: unknown): string | null {
  return typeof raw === 'string' && (PROCESS_IDS as readonly string[]).includes(raw) && raw !== 'implement' ? raw : null
}

export const cardImageUrl = (lang: string, process: string): string => `${SITE}/api/og/askhans?lang=${lang}&p=${process}`
export const cardPageUrl = (lang: string, process: string): string => `${SITE}${lang === 'en' ? '' : `/${lang}`}/askhans?card=${process}`
