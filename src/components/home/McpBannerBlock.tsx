import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { t } from '@/components/tools/tools-i18n'
import { SURFACE_CLASS } from './homeSurface'

const FN_KEYS = [
  ['mcpBannerChip1', 'mcpBannerChipDesc1'],
  ['mcpBannerChip2', 'mcpBannerChipDesc2'],
  ['mcpBannerChip3', 'mcpBannerChipDesc3'],
  ['mcpBannerChip4', 'mcpBannerChipDesc4'],
] as const
const EXAMPLE_KEYS = ['mcpBannerExample1', 'mcpBannerExample2', 'mcpBannerExample3'] as const

/** Full-width MCP band directly under the PQ app band — covers the whole site, not just the app directory. */
export function McpBannerBlock({ lang }: { lang: Language }) {
  const href = lang === 'en' ? '/mcp-stats' : `/${lang}/mcp-stats`
  return (
    <Link
      href={href}
      className={`group block rounded-xl border ${SURFACE_CLASS.action} p-6 mb-8 hover:shadow-lg hover:-translate-y-0.5 transition`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{t('mcpBannerEyebrow', lang)}</span>
          <h2 className="mt-1.5 text-xl font-bold text-text-primary">{t('mcpBannerHeading', lang)}</h2>
          <p className="mt-1.5 text-sm text-text-secondary">{t('mcpBannerSub', lang)}</p>
        </div>
        <span className="shrink-0 self-start md:self-center px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium group-hover:bg-primary/90 transition">
          {t('mcpCardCta', lang)} →
        </span>
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {FN_KEYS.map(([title, desc]) => (
          <li key={title} className="rounded-lg border border-primary/20 bg-white/70 p-3">
            <p className="text-sm font-semibold text-text-primary">{t(title, lang)}</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">{t(desc, lang)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{t('mcpBannerTryLabel', lang)}</p>
        <ul className="mt-2 grid gap-3 md:grid-cols-3">
          {EXAMPLE_KEYS.map(k => (
            <li key={k} className="rounded-lg border border-primary/20 bg-white/70 px-3 py-2.5 text-sm italic text-text-primary">
              {t(k, lang)}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
