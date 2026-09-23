// Shared server-rendered content for /mcp-stats across all 9 locales. Each
// locale's src/app/{lang}/mcp-stats/page.tsx (English at the unprefixed
// src/app/mcp-stats/page.tsx) fetches the live usage snapshot and renders
// this with its own `lang`. No client interactivity here, so this stays a
// plain (server) component rather than 'use client'.

import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import type { McpToolName, UsageSnapshot } from '@/lib/mcp/usage'
import { t } from './mcp-stats-i18n'

const TOOLS: { name: McpToolName; titleKey: Parameters<typeof t>[0]; descKey: Parameters<typeof t>[0] }[] = [
  { name: 'search_promptquorum', titleKey: 'toolSearchPromptquorumTitle', descKey: 'toolSearchPromptquorumDesc' },
  { name: 'get_article', titleKey: 'toolGetArticleTitle', descKey: 'toolGetArticleDesc' },
  { name: 'list_clusters', titleKey: 'toolListClustersTitle', descKey: 'toolListClustersDesc' },
  { name: 'get_app_details', titleKey: 'toolGetAppDetailsTitle', descKey: 'toolGetAppDetailsDesc' },
  { name: 'list_categories', titleKey: 'toolListCategoriesTitle', descKey: 'toolListCategoriesDesc' },
  { name: 'search_apps', titleKey: 'toolSearchAppsTitle', descKey: 'toolSearchAppsDesc' },
  { name: 'compare_apps', titleKey: 'toolCompareAppsTitle', descKey: 'toolCompareAppsDesc' },
  { name: 'explain_license', titleKey: 'toolExplainLicenseTitle', descKey: 'toolExplainLicenseDesc' },
]

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

export function McpStatsContent({ lang, snapshot }: { lang: Language; snapshot: UsageSnapshot }) {
  const dir = getLangDir(lang)
  const generatedDate = new Date(snapshot.generatedAt).toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <main dir={dir} className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{t('eyebrow', lang)}</p>
      <h1 className="mt-1 text-2xl font-bold text-text-primary">{t('pageTitle', lang)}</h1>
      <p className="mt-3 text-sm text-text-secondary">{t('intro', lang)}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={localizedPath(lang, '/directory#mcp-connect-heading')}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          {t('connectCta', lang)}
        </Link>
        <code dir="ltr" className="inline-flex items-center rounded-lg border border-border bg-surface px-3 py-2 text-xs text-text-secondary">
          https://www.promptquorum.com/api/mcp
        </code>
      </div>

      <h2 className="mt-10 text-lg font-bold text-text-primary">{t('toolsHeading', lang)}</h2>
      <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
        {TOOLS.map((tool) => (
          <li key={tool.name} className="p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <span dir="ltr" className="font-mono text-xs font-semibold text-primary">{tool.name}</span>
              <span className="text-sm font-medium text-text-primary">{t(tool.titleKey, lang)}</span>
            </div>
            <p className="mt-1 text-sm text-text-secondary">{t(tool.descKey, lang)}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-bold text-text-primary">{t('usageHeading', lang)}</h2>
      <p className="mt-1 text-sm text-text-secondary">{t('usageExplainer', lang, { date: generatedDate })}</p>

      <div className="mt-4 rounded-xl border border-border bg-surface p-4">
        <div className="text-sm text-text-secondary">{t('totalAllTime', lang)}</div>
        <div className="mt-1 text-3xl font-semibold text-text-primary">{snapshot.total.toLocaleString()}</div>
      </div>

      <table className="mt-6 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left text-text-secondary">
            <th className="py-2 font-medium">{t('tableTool', lang)}</th>
            <th className="py-2 font-medium">{t('tableTotalCalls', lang)}</th>
            <th className="py-2 font-medium">{t('tableCallsToday', lang)}</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((tool) => (
            <tr key={tool.name} className="border-b border-border/60">
              <td dir="ltr" className="py-2 text-left font-mono text-text-primary">{tool.name}</td>
              <td className="py-2 text-text-primary">{snapshot.byTool[tool.name].toLocaleString()}</td>
              <td className="py-2 text-text-primary">{snapshot.today[tool.name].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8 text-xs text-text-muted">{t('rawJsonNote', lang)}</p>
    </main>
  )
}
