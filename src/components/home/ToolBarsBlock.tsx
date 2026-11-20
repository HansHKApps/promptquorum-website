import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { t } from '@/components/tools/tools-i18n'
import { academyEnabled } from '@/lib/academy/config'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS, HUB_BUTTON_CLASS } from './homeSurface'

type Bar = { key: string; href: string; icon: HomeIconName; eyebrow: string; title: string; sub: string; chips: string[]; cta: string }

/**
 * Three compact, fully clickable tool bars under the PQ app band: the MCP server, Ask Hans and the Academy.
 * Each bar names what the tool does in one line, lists its main abilities as chips and links to the page that
 * explains how to use it. Ask Hans and the Academy only show while switched on (their pages 404 otherwise).
 */
export function ToolBarsBlock({ lang }: { lang: Language }) {
  const p = lang === 'en' ? '' : `/${lang}`
  const bars: Bar[] = [
    {
      key: 'mcp', href: `${p}/mcp-stats`, icon: 'mcp',
      eyebrow: t('mcpBannerEyebrow', lang), title: t('barMcpTitle', lang), sub: t('barMcpSub', lang),
      chips: [t('mcpBannerChip1', lang), t('mcpBannerChip2', lang), t('mcpBannerChip3', lang), t('mcpBannerChip4', lang)],
      cta: t('mcpCardCta', lang),
    },
  ]
  if (process.env.ASK_HANS_ENABLED === 'true') {
    bars.push({
      key: 'askhans', href: `${p}/askhans`, icon: 'mentions',
      eyebrow: t('barAskEyebrow', lang), title: t('barAskTitle', lang), sub: t('barAskSub', lang),
      chips: [t('barAskChip1', lang), t('barAskChip2', lang), t('barAskChip3', lang)],
      cta: t('barAskCta', lang),
    })
  }
  if (academyEnabled()) {
    bars.push({
      key: 'academy', href: `${p}/academy`, icon: 'academy',
      eyebrow: t('barAcademyEyebrow', lang), title: t('barAcademyTitle', lang), sub: t('barAcademySub', lang),
      chips: [t('barAcademyChip1', lang), t('barAcademyChip2', lang), t('barAcademyChip3', lang)],
      cta: t('barAcademyCta', lang),
    })
  }

  return (
    <div className="mb-8 flex flex-col gap-3">
      {bars.map(b => (
        <Link
          key={b.key}
          href={b.href}
          className={`group grid items-center gap-x-6 gap-y-3 rounded-xl border ${SURFACE_CLASS.action} px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-lg lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto]`}
        >
          <div className="min-w-0">
            <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-hub-violet-ink">
              <HomeIcon name={b.icon} size={14} className="text-hub-violet-ink" />
              {b.eyebrow}
            </span>
            <h2 className="mt-1 text-lg font-bold leading-snug tracking-tight text-text-primary">{b.title}</h2>
            <p className="mt-0.5 text-sm text-text-secondary">{b.sub}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {b.chips.map(c => (
              <li key={c} className="rounded-full border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold text-text-primary">{c}</li>
            ))}
          </ul>
          <span className={`shrink-0 self-start rounded-[10px] px-5 py-2.5 text-sm lg:self-center ${HUB_BUTTON_CLASS}`}>
            {b.cta} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
