// Shared server-rendered content for /mcp-stats across all 9 locales. Each
// locale's src/app/{lang}/mcp-stats/page.tsx (English at the unprefixed
// src/app/mcp-stats/page.tsx) fetches the live usage snapshot and renders
// this with its own `lang`. No client interactivity here, so this stays a
// plain (server) component rather than 'use client'.

import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { getLangDir, toOutputLocale } from '@/lib/i18n/constants'
import type { McpToolName, UsageSnapshot } from '@/lib/mcp/usage'
import { HUB_TONES, type HubTone } from '@/components/hub-template/palette'
import { t as tTools } from './tools-i18n'
import { t } from './mcp-stats-i18n'
import { CopyEndpointButton } from './CopyEndpointButton'
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
  'start', 'set_consent', 'my_profile', 'forget_me', 'set_language',
]
const GROUP_ORDER: ToolGroup[] = ['find', 'decide', 'learn', 'profile']

const RESOURCES: { uri: string; key: 'resCategories' | 'resStacks' | 'resApp' | 'resArticle' | 'resMethodology' }[] = [
  { uri: 'promptquorum://categories', key: 'resCategories' },
  { uri: 'promptquorum://stacks', key: 'resStacks' },
  { uri: 'promptquorum://app/{slug}', key: 'resApp' },
  { uri: 'promptquorum://article/{cluster}/{slug}', key: 'resArticle' },
  { uri: 'promptquorum://methodology', key: 'resMethodology' },
]
const PROMPTS: { name: string; key: 'promptStart' | 'promptStack' | 'promptCompare' | 'promptOffline' | 'promptLicense' }[] = [
  { name: 'start', key: 'promptStart' },
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

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}

// Plain SVG bars, no chart library: this page is a server component.
function DailyBars({ days, label }: { days: UsageSnapshot['days']; label: string }) {
  const max = Math.max(1, ...days.map((d) => d.calls))
  const barW = 10
  const gap = 4
  const height = 96
  const width = days.length * (barW + gap) - gap
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="h-28 w-full text-hub-azure"
    >
      {days.map((d, i) => {
        const h = d.calls === 0 ? 1 : Math.max(2, (d.calls / max) * height)
        return (
          <rect key={d.date} x={i * (barW + gap)} y={height - h} width={barW} height={h} rx={1} fill="currentColor" opacity={d.calls === 0 ? 0.25 : 0.85}>
            <title>{`${d.date}: ${d.calls.toLocaleString()}`}</title>
          </rect>
        )
      })}
    </svg>
  )
}

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

const MAX_WIDTH = 'mx-auto max-w-[1120px] px-6'
const ENDPOINT = 'https://www.promptquorum.com/api/mcp'
const GROUP_TONE: Record<ToolGroup, HubTone> = { find: 'azure', decide: 'violet', learn: 'orchid', profile: 'rose' }
const CYCLE: HubTone[] = ['violet', 'azure', 'indigo', 'orchid', 'rose']

function SectionHeading({ index, tone, children, id }: { index: number; tone: HubTone; children: React.ReactNode; id?: string }) {
  return (
    <div className="mb-2 flex items-center gap-3">
      <span className={`rounded-[10px] px-3.5 py-1 text-[15px] font-extrabold tracking-wide text-white ${HUB_TONES[tone].solid}`}>{String(index).padStart(2, '0')}</span>
      <h2 id={id} className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">{children}</h2>
    </div>
  )
}

function Stat({ label, value, tone }: { label: string; value: string; tone: HubTone }) {
  const c = HUB_TONES[tone]
  return (
    <div className={`min-w-[150px] flex-[1_1_150px] rounded-xl border px-4 py-3.5 ${c.tint} ${c.edge}`}>
      <div className={`mb-1 text-xs font-bold ${c.ink}`}>{label}</div>
      <div className="text-2xl font-bold tabular-nums text-text-primary">{value}</div>
    </div>
  )
}

export function McpStatsContent({ lang, snapshot }: { lang: Language; snapshot: UsageSnapshot }) {
  const dir = getLangDir(lang)
  const loc = toOutputLocale(lang)
  const fmt = (n: number) => n.toLocaleString(loc)
  const generatedDate = new Date(snapshot.generatedAt).toLocaleString(loc, {
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const last7Total = Object.values(snapshot.last7).reduce((a, b) => a + b, 0)
  const last30Total = Object.values(snapshot.last30).reduce((a, b) => a + b, 0)
  const medianDay = median(snapshot.days.map((d) => d.calls))
  // Busiest tools first, so the table answers "what do assistants actually call?"
  // at a glance; ties keep the grouped display order.
  const rankedTools = [...TOOLS].sort((a, b) => snapshot.byTool[b] - snapshot.byTool[a])

  const jump: { id: string; label: string; tone: HubTone }[] = [
    { id: 'start', label: tDocs('startHeading', lang), tone: 'azure' },
    { id: 'tools', label: t('toolsHeading', lang), tone: 'violet' },
    { id: 'example', label: t('exampleHeading', lang), tone: 'indigo' },
    { id: 'resources', label: tDocs('resourcesHeading', lang), tone: 'orchid' },
    { id: 'trust', label: tDocs('trustHeading', lang), tone: 'rose' },
    { id: 'usage', label: t('usageHeading', lang), tone: 'cyan' },
  ]

  return (
    <div dir={dir} className="min-h-screen bg-white text-text-primary">
      {/* Hero */}
      <section className={`border-b ${HUB_TONES.azure.tint} ${HUB_TONES.azure.edge}`}>
        <div className={`${MAX_WIDTH} flex flex-wrap items-stretch gap-8 pb-12 pt-24`}>
          <div className="min-w-0 flex-[1_1_520px]">
            <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">
              <Link href={localizedPath(lang, '/')} className="hover:underline">{tTools('breadcrumbHome', lang)}</Link>
              <span aria-hidden="true"> &nbsp;/&nbsp; </span>
              <span aria-current="page">{t('pageTitle', lang)}</span>
            </nav>
            <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${HUB_TONES.azure.solidBorder} ${HUB_TONES.azure.ink}`}>
              {t('eyebrow', lang)}
            </span>
            <h1 className="mb-3 mt-3.5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">{t('pageTitle', lang)}</h1>
            <p className="mb-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">{t('intro', lang)}</p>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href={localizedPath(lang, '/directory#mcp-connect-heading')}
                className={`rounded-[10px] px-6 py-3.5 text-[17px] font-extrabold text-white shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--hub-azure)] transition-transform hover:-translate-y-0.5 ${HUB_TONES.azure.solid}`}
              >
                {t('connectCta', lang)}
              </Link>
              <code dir="ltr" className={`rounded-[10px] border bg-white px-3 py-2.5 text-[13px] ${HUB_TONES.azure.edge} ${HUB_TONES.azure.ink}`}>{ENDPOINT}</code>
              <CopyEndpointButton text={ENDPOINT} lang={lang} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Stat label={t('totalAllTime', lang)} value={fmt(snapshot.total)} tone="violet" />
              <Stat label={t('trendLast30', lang)} value={fmt(last30Total)} tone="azure" />
              <Stat label={t('trendLast7', lang)} value={fmt(last7Total)} tone="indigo" />
            </div>
          </div>

          <div className="min-w-0 flex-[1_1_400px]">
            <div className={`box-border rounded-2xl border bg-white p-5 lg:self-start ${HUB_TONES.azure.edge}`}>
              <div className="mb-3.5 text-[13px] font-bold">{t('trendHeading', lang)}</div>
              <DailyBars days={snapshot.days} label={t('trendChartLabel', lang)} />
              <div dir="ltr" className="mt-1 flex justify-between text-xs text-text-muted">
                <span>{snapshot.days[0]?.date}</span>
                <span>{snapshot.days[snapshot.days.length - 1]?.date}</span>
              </div>
              <div className="mt-3.5 text-xs font-medium text-text-secondary">{t('usageExplainer', lang, { date: generatedDate })}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jump bar */}
      <div className="border-b border-border bg-white">
        <nav aria-label="Sections" className={`${MAX_WIDTH} flex flex-wrap items-center gap-x-2.5 gap-y-2 py-2.5 text-sm`}>
          {jump.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`rounded-full px-3.5 py-1.5 font-semibold ${HUB_TONES[item.tone].tint} ${HUB_TONES[item.tone].ink}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* 01 Start here + how it works */}
      <section id="start" className="bg-white">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={1} tone="azure">{tDocs('startHeading', lang)}</SectionHeading>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className={`rounded-[14px] border p-6 ${HUB_TONES.azure.tint} ${HUB_TONES.azure.edge}`}>
              <p className="text-base leading-relaxed text-text-primary">{tDocs('startBody', lang)}</p>
              <code dir="ltr" className={`mt-4 inline-block rounded-lg px-4 py-2 text-sm font-bold text-white ${HUB_TONES.azure.solid}`}>start</code>
            </div>
            <div className={`rounded-[14px] border p-6 ${HUB_TONES.violet.tint} ${HUB_TONES.violet.edge}`}>
              <h3 className={`mb-2 text-lg font-bold ${HUB_TONES.violet.ink}`}>{tDocs('howHeading', lang)}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{tDocs('howBody', lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Tools */}
      <section id="tools" className="border-y border-border bg-hub-violet-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={2} tone="violet">{t('toolsHeading', lang)}</SectionHeading>
          {GROUP_ORDER.map((group) => {
            const tone = GROUP_TONE[group]
            const c = HUB_TONES[tone]
            return (
              <div key={group} className="mt-8">
                <h3 className={`mb-3 inline-block rounded-lg px-3 py-1 text-sm font-bold uppercase tracking-wide text-white ${c.solid}`}>
                  {TOOL_GROUPS[group][lang] ?? TOOL_GROUPS[group].en}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {TOOLS.filter((name) => TOOL_GROUP_OF[name] === group).map((name) => {
                    const copy = toolCopy(name, lang)
                    return (
                      <li key={name} className={`rounded-[14px] border bg-white p-5 ${c.edge}`}>
                        <span dir="ltr" className={`block font-mono text-xs font-bold ${c.ink}`}>{name}</span>
                        <div className="mb-1.5 mt-1 text-[17px] font-bold leading-snug">{copy.title}</div>
                        <p className="text-sm leading-relaxed text-text-secondary">{copy.desc}</p>
                        <p className={`mt-3 rounded-lg px-3 py-2 text-sm leading-relaxed ${c.tint}`}>
                          <span className={`font-semibold ${c.ink}`}>{tDocs('askLabel', lang)}:</span>{' '}
                          <q>{toolAsk(name, lang)}</q>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* 03 Example */}
      <section id="example" className="bg-hub-indigo-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={3} tone="indigo">{t('exampleHeading', lang)}</SectionHeading>
          <p className="mb-5 max-w-[640px] text-base leading-relaxed text-text-secondary">{t('exampleIntro', lang)}</p>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-[14px] border border-hub-indigo-edge bg-white p-5">
                <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-sm font-bold text-white ${HUB_TONES.indigo.solid}`}>{t('exampleYouLabel', lang)}</div>
                <p className="text-sm leading-relaxed text-text-primary">{t('exampleQuestion', lang)}</p>
              </div>
              <p className="px-1 text-sm text-text-secondary">
                {t('exampleToolsLabel', lang)}: <code dir="ltr" className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${HUB_TONES.indigo.tint} ${HUB_TONES.indigo.ink}`}>recommend_stack</code>
              </p>
            </div>
            <div className="rounded-[14px] border border-hub-indigo-edge bg-white p-5">
              <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-sm font-bold text-white ${HUB_TONES.orchid.solid}`}>{t('exampleAssistantLabel', lang)}</div>
              <p className="text-sm leading-relaxed text-text-primary">{t('exampleAnswer', lang)}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-text-muted">{t('exampleLinksLabel', lang)}</p>
              <ul className="mt-1 list-disc space-y-1 ps-5 text-sm">
                <li><Link href={localizedPath(lang, '/power-local-llm/anythingllm-review')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{t('exampleLinkReview', lang)}</Link></li>
                <li><Link href={localizedPath(lang, '/directory?category=document-pdf-chat')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{t('exampleLinkDirectory', lang)}</Link></li>
                <li><Link href={localizedPath(lang, '/power-local-llm/local-llm-knowledge-retrieval-compared')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{t('exampleLinkCompared', lang)}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-5 max-w-[640px] rounded-r-xl border-s-4 border-hub-indigo bg-white px-5 py-4">
            <p className="text-sm leading-relaxed text-text-primary">{t('exampleNote', lang)}</p>
          </div>
        </div>
      </section>

      {/* 04 Resources & prompts */}
      <section id="resources" className="border-t border-border bg-white">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={4} tone="orchid">{tDocs('resourcesHeading', lang)}</SectionHeading>
          <p className="mb-5 max-w-[640px] text-base leading-relaxed text-text-secondary">{tDocs('resourcesIntro', lang)}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r, i) => {
              const c = HUB_TONES[CYCLE[i % CYCLE.length]]
              return (
                <div key={r.uri} className={`rounded-[14px] border p-5 ${c.tint} ${c.edge}`}>
                  <code dir="ltr" className={`block break-all font-mono text-xs font-bold ${c.ink}`}>{r.uri}</code>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tDocs(r.key, lang)}</p>
                </div>
              )
            })}
          </div>
          <h3 className="mb-3 mt-10 text-lg font-bold">{tDocs('promptsLabel', lang)}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROMPTS.map((p, i) => {
              const c = HUB_TONES[CYCLE[(i + 2) % CYCLE.length]]
              return (
                <div key={p.name} className={`rounded-[14px] border p-5 ${c.tint} ${c.edge}`}>
                  <code dir="ltr" className={`block font-mono text-xs font-bold ${c.ink}`}>{p.name}</code>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tDocs(p.key, lang)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 05 Trust + limits */}
      <section id="trust" className="border-t border-border bg-hub-rose-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={5} tone="rose">{tDocs('trustHeading', lang)}</SectionHeading>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(['trust1', 'trust2', 'trust3', 'trust4', 'trust5'] as const).map((k, i) => (
              <li key={k} className="flex gap-3 rounded-[14px] border border-hub-rose-edge bg-white p-5">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${HUB_TONES[CYCLE[i % CYCLE.length]].solid}`}>{i + 1}</span>
                <span className="text-sm leading-relaxed text-text-secondary">{tDocs(k, lang)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 max-w-[720px] rounded-r-xl border-s-4 border-hub-rose bg-white px-5 py-4">
            <h3 className={`mb-1 text-sm font-bold ${HUB_TONES.rose.ink}`}>{tDocs('limitsHeading', lang)}</h3>
            <p className="text-sm leading-relaxed text-text-primary">{tDocs('limitsBody', lang)}</p>
          </div>
        </div>
      </section>

      {/* 06 Usage */}
      <section id="usage" className="scroll-mt-20 border-t border-border bg-hub-cyan-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={6} tone="cyan">{t('usageHeading', lang)}</SectionHeading>
          <p className="mb-5 max-w-[640px] text-base leading-relaxed text-text-secondary">{t('usageExplainer', lang, { date: generatedDate })}</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { label: t('totalAllTime', lang), value: snapshot.total, tone: 'violet' as const },
              { label: t('trendLast30', lang), value: last30Total, tone: 'azure' as const },
              { label: t('trendLast7', lang), value: last7Total, tone: 'indigo' as const },
              { label: t('trendMedianDay', lang), value: medianDay, tone: 'orchid' as const },
            ].map((k) => (
              <div key={k.label} className="rounded-[14px] border border-hub-cyan-edge bg-white p-5">
                <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-xs font-bold text-white ${HUB_TONES[k.tone].solid}`}>{k.label}</div>
                <div className="text-3xl font-bold tabular-nums">{fmt(k.value)}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-muted">{t('trendNote', lang)}</p>

          <div className="mt-6 overflow-x-auto rounded-[14px] border border-hub-cyan-edge bg-white">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className={`${HUB_TONES.cyan.tint} ${HUB_TONES.cyan.ink}`}>
                  <th scope="col" className="px-4 py-3 text-start font-bold">{t('tableTool', lang)}</th>
                  <th scope="col" className="px-4 py-3 text-end font-bold">{t('tableTotalCalls', lang)}</th>
                  <th scope="col" className="px-4 py-3 text-end font-bold">{t('tableLast30', lang)}</th>
                  <th scope="col" className="px-4 py-3 text-end font-bold">{t('tableLast7', lang)}</th>
                  <th scope="col" className="px-4 py-3 text-end font-bold">{t('tableCallsToday', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {rankedTools.map((name) => (
                  <tr key={name} className="border-t border-border">
                    <td dir="ltr" className="px-4 py-2.5 text-left font-mono text-xs font-semibold text-text-primary">{name}</td>
                    <td className="px-4 py-2.5 text-end tabular-nums text-text-primary">
                      {snapshot.byTool[name] === 0 ? <span className="text-text-muted">{t('noCallsYet', lang)}</span> : fmt(snapshot.byTool[name])}
                    </td>
                    {([snapshot.last30, snapshot.last7, snapshot.today] as const).map((col, i) => (
                      <td key={i} className={`px-4 py-2.5 text-end tabular-nums ${col[name] === 0 ? 'text-text-muted' : 'text-text-primary'}`}>{fmt(col[name])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-muted">{t('rawJsonNote', lang)}</p>
        </div>
      </section>
    </div>
  )
}
