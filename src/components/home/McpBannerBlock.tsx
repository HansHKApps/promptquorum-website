import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { t } from '@/components/tools/tools-i18n'
import { SURFACE_CLASS } from './homeSurface'

const CHIP_KEYS = ['mcpBannerChip1', 'mcpBannerChip2', 'mcpBannerChip3', 'mcpBannerChip4'] as const

/** Full-width MCP band directly under the PQ app band — same format, so the MCP server is hard to miss. */
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
      <ul className="mt-4 flex flex-wrap gap-2">
        {CHIP_KEYS.map(k => (
          <li key={k} className="rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-medium text-text-primary">
            {t(k, lang)}
          </li>
        ))}
      </ul>
    </Link>
  )
}
