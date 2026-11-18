import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { Flag } from '@/components/Flag'
import { t } from './directory-i18n'

/** Country name in the viewer's language ("Germany" / "Deutschland" / "ドイツ"), from the runtime's own region names. */
function regionName(code: string, lang: Language): string {
  try {
    return new Intl.DisplayNames([lang], { type: 'region' }).of(code) ?? code
  } catch {
    return code
  }
}

/**
 * Small flag of the country the app's company/maintainer is headquartered in. Renders nothing unless
 * `hqCountry` is set, which per ToolRecord.hqCountry happens only when a primary source makes it clear —
 * so the absence of a flag means "not clear", never "no country". The tooltip says "Company HQ: <country>"
 * so the flag is never mistaken for a language flag (the site's language switcher also uses flags).
 */
export function HqFlag({ app, lang, className = '' }: { app: Pick<ToolRecord, 'hqCountry'>; lang: Language; className?: string }) {
  if (!app.hqCountry) return null
  const label = t('hqCountryTooltip', lang, { country: regionName(app.hqCountry, lang) })
  return <Flag country={app.hqCountry.toLowerCase()} label={label} className={`!h-3 !w-4 ${className}`} />
}
