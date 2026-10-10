// Shared server-rendered content for /mcp-stats across all 9 locales. Each
// locale's src/app/{lang}/mcp-stats/page.tsx (English at the unprefixed
// src/app/mcp-stats/page.tsx) fetches the live usage snapshot and renders
// this with its own `lang`. No client interactivity here, so this stays a
// plain (server) component rather than 'use client'.

import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import type { McpToolName, UsageSnapshot } from '@/lib/mcp/usage'
import { t } from './mcp-stats-i18n'
import { NEW_TOOL_COPY, TOOL_GROUPS, TOOL_GROUP_OF, tDocs, toolAsk, type ToolGroup } from './mcp-docs-i18n'

// Title/description of the first eight tools come from mcp-stats-i18n.ts; the
// nine added in server v2.0 come from NEW_TOOL_COPY (mcp-docs-i18n.ts).
const LEGACY_TOOL_KEYS: Partial<Record<McpToolName, { titleKey: Parameters<typeof t>[0]; descKey: Parameters<typeof t>[0] }>> = {
  search_promptquorum: { titleKey: 'toolSearchPromptquorumTitle', descKey: 'toolSearchPromptquorumDesc' },
  get_article: { titleKey: 'toolGetArticleTitle', descKey: 'toolGetArticleDesc' },
  list_clusters: { titleKey: 'toolListClustersTitle', descKey: 'toolListClustersDesc' },
  get_app_details: { titleKey: 'toolGetAppDetailsTitle', descKey: 'toolGetAppDetailsDesc' },
  list_categories: { titleKey: 'toolListCategoriesTitle', descKey: 'toolListCategoriesDesc' },
  search_apps: { titleKey: 'toolSearchAppsTitle', descKey: 'toolSearchAppsDesc' },
  compare_apps: { titleKey: 'toolCompareAppsTitle', descKey: 'toolCompareAppsDesc' },
  explain_license: { titleKey: 'toolExplainLicenseTitle', descKey: 'toolExplainLicenseDesc' },
}

// Display order inside each group.
const TOOLS: McpToolName[] = [
  'find_best_apps', 'search_apps', 'recommend_stack', 'find_local_alternative', 'get_app_alternatives', 'get_app_details', 'list_categories',
  'compare_apps', 'check_hardware_compatibility', 'estimate_vram', 'explain_license',
  'search_promptquorum', 'get_article', 'find_related_content', 'get_hands_on_test', 'get_latest', 'list_clusters',
]
const GROUP_ORDER: ToolGroup[] = ['find', 'decide', 'learn']

const RESOURCES: { uri: string; key: 'resCategories' | 'resStacks' | 'resApp' | 'resArticle' | 'resMethodology' }[] = [
  { uri: 'promptquorum://categories', key: 'resCategories' },
  { uri: 'promptquorum://stacks', key: 'resStacks' },
  { uri: 'promptquorum://app/{slug}', key: 'resApp' },
  { uri: 'promptquorum://article/{cluster}/{slug}', key: 'resArticle' },
  { uri: 'promptquorum://methodology', key: 'resMethodology' },
]
const PROMPTS: { name: string; key: 'promptStack' | 'promptCompare' | 'promptOffline' | 'promptLicense' }[] = [
  { name: 'recommend_local_ai_stack', key: 'promptStack' },
  { name: 'compare_local_ai_tools', key: 'promptCompare' },
  { name: 'find_offline_alternative', key: 'promptOffline' },
  { name: 'check_commercial_license', key: 'promptLicense' },
]

function toolCopy(name: McpToolName, lang: Language): { title: string; desc: string } {
  const legacy = LEGACY_TOOL_KEYS[name]
  if (legacy) return { title: t(legacy.titleKey, lang), desc: t(legacy.descKey, lang) }
  const fresh = NEW_TOOL_COPY[name]
  return fresh ? { title: fresh.title[lang] ?? fresh.title.en, desc: fresh.desc[lang] ?? fresh.desc.en } : { title: name, desc: '' }
}

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

      <h2 className="mt-10 text-lg font-bold text-text-primary">{tDocs('howHeading', lang)}</h2>
      <p className="mt-2 text-sm text-text-secondary">{tDocs('howBody', lang)}</p>

      <h2 className="mt-10 text-lg font-bold text-text-primary">{t('toolsHeading', lang)}</h2>
      {GROUP_ORDER.map((group) => (
        <section key={group} className="mt-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-text-muted">{TOOL_GROUPS[group][lang] ?? TOOL_GROUPS[group].en}</h3>
          <ul className="mt-2 divide-y divide-border rounded-xl border border-border">
            {TOOLS.filter((name) => TOOL_GROUP_OF[name] === group).map((name) => {
              const copy = toolCopy(name, lang)
              return (
                <li key={name} className="p-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span dir="ltr" className="font-mono text-xs font-semibold text-primary">{name}</span>
                    <span className="text-sm font-medium text-text-primary">{copy.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{copy.desc}</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">{tDocs('askLabel', lang)}:</span>{' '}
                    <q>{toolAsk(name, lang)}</q>
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      ))}

      <h2 className="mt-10 text-lg font-bold text-text-primary">{tDocs('resourcesHeading', lang)}</h2>
      <p className="mt-2 text-sm text-text-secondary">{tDocs('resourcesIntro', lang)}</p>
      <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
        {RESOURCES.map((r) => (
          <li key={r.uri} className="p-3 text-sm">
            <code dir="ltr" className="font-mono text-xs font-semibold text-primary">{r.uri}</code>
            <span className="text-text-secondary"> — {tDocs(r.key, lang)}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-text-muted">{tDocs('promptsLabel', lang)}</h3>
      <ul className="mt-2 divide-y divide-border rounded-xl border border-border">
        {PROMPTS.map((p) => (
          <li key={p.name} className="p-3 text-sm">
            <code dir="ltr" className="font-mono text-xs font-semibold text-primary">{p.name}</code>
            <span className="text-text-secondary"> — {tDocs(p.key, lang)}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-bold text-text-primary">{tDocs('trustHeading', lang)}</h2>
      <ul className="mt-2 list-disc space-y-2 ps-5 text-sm text-text-secondary">
        <li>{tDocs('trust1', lang)}</li>
        <li>{tDocs('trust2', lang)}</li>
        <li>{tDocs('trust3', lang)}</li>
        <li>{tDocs('trust4', lang)}</li>
        <li>{tDocs('trust5', lang)}</li>
      </ul>

      <h2 className="mt-10 text-lg font-bold text-text-primary">{tDocs('limitsHeading', lang)}</h2>
      <p className="mt-2 text-sm text-text-secondary">{tDocs('limitsBody', lang)}</p>

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
          {TOOLS.map((name) => (
            <tr key={name} className="border-b border-border/60">
              <td dir="ltr" className="py-2 text-left font-mono text-text-primary">{name}</td>
              <td className="py-2 text-text-primary">{snapshot.byTool[name].toLocaleString()}</td>
              <td className="py-2 text-text-primary">{snapshot.today[name].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8 text-xs text-text-muted">{t('rawJsonNote', lang)}</p>
    </main>
  )
}
