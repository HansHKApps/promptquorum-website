// Local LLMs hub on the shared hub template (src/components/hub-template).
//
// Same recipe as src/lib/smart-home/hub-template.tsx: this file only adapts Local LLMs data to the
// generic template. Languages in LOCAL_LLMS_HUB_TEMPLATE_LANGS use it; the original client hub
// (src/components/LocalLLMsHub.tsx) stays as the fallback for any language without strings here.
//
// Nothing here fetches data. Every article link comes from llmThemes (themes.ts) filtered to the live
// slugs of buildLLMHubData(), so scripts/validate-hub-coverage.mjs keeps working unchanged.
// Content that has no home in the template (the data tables, regional context, figures, key takeaways,
// cross-hub sidebars) is rendered server-side in the template's `footer` slot, so no text or link is lost.

import type { ReactNode } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubFaqItem, HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { latestDateModified } from '@/lib/hub-reviewed-date'
import type { Lang } from '@/lib/i18n/constants'
import { COMING_SOON_SLUGS } from './comingSoon'
import {
  HUB_COMPARISON_COLS,
  HUB_COMPARISON_HEADING,
  HUB_COMPARISON_ROWS,
  HUB_CTA_BUTTON,
  HUB_CTA_TEXT,
  HUB_FAQ_TITLE,
  HUB_FAQS,
  HUB_FAQS_BOTTOM,
  HUB_FIGCAPTION_CLOUD,
  HUB_FIGCAPTION_MODELS,
  HUB_FIGCAPTION_OLLAMA,
  HUB_FIGCAPTION_PQ,
  HUB_FIGCAPTION_VRAM,
  HUB_HERO_DESC,
  HUB_HERO_TITLE,
  HUB_NEW_APRIL_COLS,
  HUB_NEW_APRIL_HEADING,
  HUB_NEW_APRIL_MODELS,
  HUB_PB_SIDEBAR_BODY,
  HUB_PB_SIDEBAR_LINKS,
  HUB_PB_SIDEBAR_TITLE,
  HUB_PE_SIDEBAR_BODY,
  HUB_PE_SIDEBAR_LINKS,
  HUB_PE_SIDEBAR_TITLE,
  HUB_PRESENTATION_DESC,
  HUB_PRESENTATION_HEADING,
  HUB_PRESENTATION_PDF,
  HUB_REGIONAL_ITEMS,
  HUB_REGIONAL_TITLE,
  HUB_START_HERE_ITEMS,
  HUB_TAKEAWAYS_BULLETS,
  HUB_TAKEAWAYS_TITLE,
  HUB_VRAM_TIER_COLS,
  HUB_VRAM_TIER_HEADING,
  HUB_VRAM_TIER_INTRO,
  HUB_VRAM_TIER_ROWS,
  SLUG_ACRONYMS,
  THEME_DESCRIPTIONS,
  THEME_LABELS,
} from './hub-content'
import type { LLMHubData } from './hub-data'
import { HUB_PRACTICAL_SECTIONS } from './hub-practical-sections'
import { DEEPER_SLUGS, HUB_TEMPLATE_COPY, KO_OVERRIDES } from './hub-template-copy'
import { llmThemes } from './themes'

export { HUB_TEMPLATE_COPY }

/** Languages that render the hub with the new template. Add a language only after its strings exist in hub-template-copy.ts. */
export const LOCAL_LLMS_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesLocalLlmsHubTemplate(lang: string): boolean {
  return LOCAL_LLMS_HUB_TEMPLATE_LANGS.has(lang as Lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

// Slugs behind the "Start here" cards come from HUB_START_HERE_ITEMS (same picks as the old hub).
const START_ICONS: HubStartCard['icon'][] = ['package', 'trend', 'shield', 'home', 'trend']
const START_TONES: HubTone[] = ['violet', 'azure', 'rose', 'indigo', 'orchid']
const PRIMARY_CTA_SLUG = 'how-to-install-ollama'

// One accent color per hub, matching each hub's own pages.
const DEEPER_TONES: Record<(typeof DEEPER_SLUGS)[number], HubTone> = {
  'smart-home': 'cyan',
  'balcony-solar': 'orange',
  'power-local-llm': 'violet',
  'prompt-bites': 'orchid',
  'prompt-engineering': 'blue',
}
const DEEPER_NAMES: Record<(typeof DEEPER_SLUGS)[number], string> = {
  'smart-home': 'Smart Home',
  'balcony-solar': 'Balcony Solar',
  'power-local-llm': 'Power Local LLM',
  'prompt-bites': 'Prompt Bites',
  'prompt-engineering': 'Prompt Engineering',
}

function navHref(path: string, lang: string): string {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

function articlePath(lang: string, slug: string): string {
  return navHref(`/local-llms/${slug}`, lang)
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/** Markdown links `[text](path)` become plain text (used where the template field is plain text). */
function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
}

/** Tile titles are the part of the old section label before the colon ("Getting Started: How do you ...?"). */
function shortThemeTitle(themeId: string, lang: string, fallback: string): string {
  const label = THEME_LABELS[themeId]?.[lang] ?? THEME_LABELS[themeId]?.en ?? fallback
  return label.split(/[:：]/)[0].trim() || fallback
}

/** `**bold**` and `[text](path)` renderer for the footer copy (same behaviour as the old hub's renderDescription). */
function renderRich(text: string, lang: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) return <strong key={i}>{bold[1]}</strong>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const target = link[2]
      const href = /^https?:/.test(target) || lang === 'en' || target.startsWith(`/${lang}/`) ? target : `/${lang}${target}`
      return (
        <Link key={i} href={href} className="text-primary hover:underline">
          {link[1]}
        </Link>
      )
    }
    return part
  })
}

function getImagePath(basePath: string, lang: string): string {
  if (lang !== 'es' && lang !== 'pt') return basePath
  const dot = basePath.lastIndexOf('.')
  return `${basePath.slice(0, dot)}-${lang}${basePath.slice(dot)}`
}

function DataTable({ cols, rows, label }: { cols: string[]; rows: string[][]; label?: string }) {
  return (
    <div className="overflow-x-auto" role="region" aria-label={label} tabIndex={0}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            {cols.map((col) => (
              <th key={col} className="py-2 pe-4 text-start text-xs font-bold uppercase tracking-wide text-text-secondary">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border">
              {row.map((cell, j) => (
                <td key={j} className={`py-2.5 pe-4 align-top ${j === 0 ? 'font-medium text-text-primary' : 'text-text-secondary'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export interface LocalLlmsHubTemplateProps extends LLMHubData {
  lang: Lang
}

export function LocalLlmsHubTemplate({ lang, titlesMap, datesMap, liveSlugs }: LocalLlmsHubTemplateProps) {
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Local LLMs hub template has no strings for "${lang}"`)
  }
  const isKo = lang === 'ko'
  const liveSet = new Set(liveSlugs.filter((slug) => !COMING_SOON_SLUGS.has(slug)))

  const titleOf = (slug: string) => titlesMap[slug] ?? slugToTitle(slug)

  const toItem = (slug: string): HubItem => {
    const dates = datesMap[slug]
    const isNew = isNewArticle(dates?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(dates?.publishDate, dates?.dateModified)
    return {
      href: articlePath(lang, slug),
      title: titleOf(slug),
      kind: 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // One tile per theme; items = the theme's live articles in editorial order.
  const tiles: HubTile[] = llmThemes.map((theme) => {
    const intro = stripLinks(THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.en ?? theme.description)
    const id = theme.id as keyof typeof copy.explore.tileSummary
    return {
      id: theme.id,
      title: shortThemeTitle(theme.id, lang, theme.title),
      summary: copy.explore.tileSummary[id] ?? intro,
      intro,
      unit: copy.explore.unit,
      items: theme.articleKeys.filter((key) => liveSet.has(key)).map(toItem),
    }
  })
  const uniquePages = new Set(tiles.flatMap((tile) => tile.items.map((item) => item.href))).size

  // Start cards: the old hub's curated picks (same slugs, localized goal text from HUB_START_HERE_ITEMS).
  const startItems = HUB_START_HERE_ITEMS[lang] ?? HUB_START_HERE_ITEMS.en
  const startCards: HubStartCard[] = startItems.map((item, i) => {
    const slug = item.href.split('/').pop() ?? ''
    return {
      href: articlePath(lang, slug),
      goal: item.label,
      title: titleOf(slug),
      tone: START_TONES[i % START_TONES.length],
      icon: START_ICONS[i % START_ICONS.length],
      badge: i === 0 ? copy.start.badge : undefined,
    }
  })

  // Latest: the three live articles with the newest change date (EN dates, same basis as the NEW / UPDATED badges).
  const dated = [...liveSet]
    .map((slug) => {
      const dates = datesMap[slug]
      const date = dates?.dateModified ?? dates?.publishDate
      return { slug, date, modified: Boolean(dates?.dateModified) }
    })
    .filter((entry): entry is { slug: string; date: string; modified: boolean } => Boolean(entry.date))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
  const latestTones: HubTone[] = ['orchid', 'azure', 'violet']
  const latestCards: HubLatestCard[] = dated.map((entry, i) => {
    const item = toItem(entry.slug)
    return {
      href: item.href,
      title: item.title,
      tone: latestTones[i % latestTones.length],
      badge: item.badge,
      dateLabel: `${entry.modified ? copy.latest.updated : copy.latest.published}: ${formatDisplayDate(entry.date, lang)}`,
    }
  })

  const hubLinks: HubLink[] = DEEPER_SLUGS.map((slug) => ({
    href: navHref(`/${slug}`, lang),
    name: DEEPER_NAMES[slug],
    line: copy.deeper.lines[slug],
    tone: DEEPER_TONES[slug],
  }))

  // Why band: one card per practical-answer section (heading + intro without links). The full tables are in the footer.
  const practical = HUB_PRACTICAL_SECTIONS[lang] ?? HUB_PRACTICAL_SECTIONS.en
  const whyCards = practical.map((section, i) => ({ label: section.heading, detail: stripLinks(section.intro), tone: cycleTone(i) }))

  // FAQ: the two visible sets merged (top, then bottom), de-duplicated by question. Same sets the old hub showed,
  // with the same English fallback where a language has none (ko, pt bottom).
  const faqSeen = new Set<string>()
  const faqItems: HubFaqItem[] = [...(HUB_FAQS[lang] ?? HUB_FAQS.en), ...(HUB_FAQS_BOTTOM[lang] ?? HUB_FAQS_BOTTOM.en)]
    .filter((faq) => (faqSeen.has(faq.q) ? false : (faqSeen.add(faq.q), true)))
    .map((faq) => ({ q: faq.q, a: faq.a }))
  const faqHeading = HUB_FAQ_TITLE[lang] ?? (isKo ? KO_OVERRIDES.faqTitle : HUB_FAQ_TITLE.en)

  const presentationHeading = HUB_PRESENTATION_HEADING[lang] ?? (isKo ? KO_OVERRIDES.presentationHeading : HUB_PRESENTATION_HEADING.en)
  const presentationDesc = HUB_PRESENTATION_DESC[lang] ?? (isKo ? KO_OVERRIDES.presentationDesc : HUB_PRESENTATION_DESC.en)
  const presentationPdf = HUB_PRESENTATION_PDF[lang] ?? (isKo ? KO_OVERRIDES.presentationPdf : HUB_PRESENTATION_PDF.en)

  const title = HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE.en
  const reviewedDate = latestDateModified(Object.values(datesMap))
  const reviewed = reviewedDate ? { dateTime: reviewedDate, text: `${copy.reviewed} ${formatDisplayDate(reviewedDate, lang)}` } : undefined
  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)

  const captions = {
    vram: HUB_FIGCAPTION_VRAM[lang] ?? (isKo ? KO_OVERRIDES.captions.vram : HUB_FIGCAPTION_VRAM.en),
    cloud: HUB_FIGCAPTION_CLOUD[lang] ?? (isKo ? KO_OVERRIDES.captions.cloud : HUB_FIGCAPTION_CLOUD.en),
    models: HUB_FIGCAPTION_MODELS[lang] ?? (isKo ? KO_OVERRIDES.captions.models : HUB_FIGCAPTION_MODELS.en),
    ollama: HUB_FIGCAPTION_OLLAMA[lang] ?? (isKo ? KO_OVERRIDES.captions.ollama : HUB_FIGCAPTION_OLLAMA.en),
    pq: HUB_FIGCAPTION_PQ[lang] ?? (isKo ? KO_OVERRIDES.captions.pq : HUB_FIGCAPTION_PQ.en),
  }
  const regionalTitle = HUB_REGIONAL_TITLE[lang] ?? (isKo ? KO_OVERRIDES.regionalTitle : HUB_REGIONAL_TITLE.en)
  const regionalItems = HUB_REGIONAL_ITEMS[lang] ?? (isKo ? KO_OVERRIDES.regionalItems : HUB_REGIONAL_ITEMS.en)

  const newModels = HUB_NEW_APRIL_MODELS[lang] ?? HUB_NEW_APRIL_MODELS.en
  const comparison = HUB_COMPARISON_ROWS[lang] ?? HUB_COMPARISON_ROWS.en
  const vramTier = HUB_VRAM_TIER_ROWS[lang] ?? HUB_VRAM_TIER_ROWS.en
  const takeawayBullets = HUB_TAKEAWAYS_BULLETS[lang] ?? HUB_TAKEAWAYS_BULLETS.en
  const peLinks = HUB_PE_SIDEBAR_LINKS[lang] ?? HUB_PE_SIDEBAR_LINKS.en
  const pbLinks = HUB_PB_SIDEBAR_LINKS[lang] ?? HUB_PB_SIDEBAR_LINKS.en

  const footer = (
    <div className="space-y-14 border-t border-border pt-14">
      {/* Key takeaways (links to specific articles kept) */}
      <section aria-labelledby="ll-takeaways">
        <h2 id="ll-takeaways" className="mb-4 text-2xl font-bold text-text-primary">
          {HUB_TAKEAWAYS_TITLE[lang] ?? HUB_TAKEAWAYS_TITLE.en}
        </h2>
        <ul className="list-disc space-y-2 ps-6 text-sm leading-relaxed text-text-secondary">
          {takeawayBullets.map((bullet, i) => (
            <li key={i}>{renderRich(bullet, lang)}</li>
          ))}
        </ul>
      </section>

      {/* Newest models */}
      <section aria-labelledby="ll-new-models">
        <h2 id="ll-new-models" className="mb-4 text-2xl font-bold text-text-primary">
          {HUB_NEW_APRIL_HEADING[lang] ?? HUB_NEW_APRIL_HEADING.en}
        </h2>
        <DataTable
          cols={HUB_NEW_APRIL_COLS[lang] ?? HUB_NEW_APRIL_COLS.en}
          rows={newModels.map((row) => [row.name, row.pull, row.vram, row.note])}
          label={HUB_NEW_APRIL_HEADING[lang] ?? HUB_NEW_APRIL_HEADING.en}
        />
      </section>

      {/* Best model by VRAM tier */}
      <section aria-labelledby="ll-vram-tier">
        <h2 id="ll-vram-tier" className="mb-3 text-2xl font-bold text-text-primary">
          {HUB_VRAM_TIER_HEADING[lang] ?? HUB_VRAM_TIER_HEADING.en}
        </h2>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-text-secondary">{renderRich(HUB_VRAM_TIER_INTRO[lang] ?? HUB_VRAM_TIER_INTRO.en, lang)}</p>
        <DataTable
          cols={HUB_VRAM_TIER_COLS[lang] ?? HUB_VRAM_TIER_COLS.en}
          rows={vramTier.map((row) => [row.vram, row.model, row.gpu])}
          label={HUB_VRAM_TIER_HEADING[lang] ?? HUB_VRAM_TIER_HEADING.en}
        />
      </section>

      {/* Practical answers: full tables (the why band shows the short version) */}
      {practical.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">{section.heading}</h2>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-text-secondary">{renderRich(section.intro, lang)}</p>
          <DataTable cols={section.cols} rows={section.rows} label={section.heading} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">{renderRich(section.outro, lang)}</p>
        </section>
      ))}

      {/* Ollama vs LM Studio vs Jan.ai */}
      <section aria-labelledby="ll-comparison">
        <h2 id="ll-comparison" className="mb-4 text-2xl font-bold text-text-primary">
          {HUB_COMPARISON_HEADING[lang] ?? HUB_COMPARISON_HEADING.en}
        </h2>
        <DataTable
          cols={HUB_COMPARISON_COLS[lang] ?? HUB_COMPARISON_COLS.en}
          rows={comparison.map((row) => [row.feature, row.ollama, row.lmstudio, row.janai])}
          label={HUB_COMPARISON_HEADING[lang] ?? HUB_COMPARISON_HEADING.en}
        />
      </section>

      {/* Figures */}
      <section aria-label="Figures" className="grid gap-8 sm:grid-cols-2">
        {[
          { src: '/images/local-llm-vram-requirements.svg', caption: captions.vram },
          { src: '/images/local-vs-cloud-llm-comparison.svg', caption: captions.cloud },
          { src: '/images/top-open-source-models-2026.svg', caption: captions.models },
          { src: '/images/ollama-quick-start-commands.svg', caption: captions.ollama },
          { src: '/images/promptquorum-local-cloud-dispatch.svg', caption: captions.pq },
        ].map((figure) => (
          <figure key={figure.src}>
            <img
              src={getImagePath(figure.src, lang)}
              alt={figure.caption}
              width={800}
              height={420}
              loading="lazy"
              className="h-auto w-full rounded-xl border border-border"
            />
            <figcaption className="mt-2 text-center text-xs text-text-secondary">{figure.caption}</figcaption>
          </figure>
        ))}
      </section>

      {/* Regional context */}
      <section aria-labelledby="ll-regional">
        <h2 id="ll-regional" className="mb-5 text-2xl font-bold text-text-primary">
          {regionalTitle}
        </h2>
        <div className="space-y-4">
          {regionalItems.map((item) => (
            <div key={item.region} className="rounded-lg border border-border bg-hub-indigo-tint p-4">
              <h3 className="mb-2 text-sm font-semibold text-text-primary">{item.region}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Presentation PDF (the deck itself is the template's overview iframe) */}
      <p>
        <a href={`/presentations/local-llms-hub-static.html?lang=${lang}&print=1`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
          {presentationPdf}
        </a>
      </p>

      {/* Related: Prompt Engineering and Prompt Bites sidebars */}
      <section className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-blue-900">{HUB_PE_SIDEBAR_TITLE[lang] ?? HUB_PE_SIDEBAR_TITLE.en}</h3>
          <p className="mb-4 text-sm text-blue-800">{HUB_PE_SIDEBAR_BODY[lang] ?? HUB_PE_SIDEBAR_BODY.en}</p>
          <ul className="space-y-2">
            {peLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-blue-700 hover:text-blue-900">
                  {link.label} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-purple-900">{HUB_PB_SIDEBAR_TITLE[lang] ?? HUB_PB_SIDEBAR_TITLE.en}</h3>
          <p className="mb-4 text-sm text-purple-800">{HUB_PB_SIDEBAR_BODY[lang] ?? HUB_PB_SIDEBAR_BODY.en}</p>
          <ul className="space-y-2">
            {pbLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-purple-700 hover:text-purple-900">
                  {link.label} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PromptQuorum CTA */}
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-text-secondary">{HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT.en}</p>
        <Link href={navHref('/', lang)} className="inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
          {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON.en}
        </Link>
      </div>
    </div>
  )

  return (
    <HubTemplate
      accent="rose"
      breadcrumb={{ homeLabel: copy.home, homeHref: navHref('/', lang), current: copy.pill }}
      pill={copy.pill}
      title={title}
      titleHighlight={copy.titleHighlight}
      intro={HUB_HERO_DESC[lang] ?? HUB_HERO_DESC.en}
      primaryCta={{ label: copy.primaryCta, href: articlePath(lang, PRIMARY_CTA_SLUG) }}
      secondaryCta={{ label: copy.secondaryCta, href: '#explore' }}
      summaryCards={copy.summary.map((card, i) => ({ ...card, tone: i === 0 ? ('azure' as const) : ('rose' as const) }))}
      reviewed={reviewed}
      flow={{
        title: copy.flow.title,
        caption: copy.flow.caption,
        ariaLabel: copy.flow.ariaLabel,
        columns: [
          { label: copy.flow.hardware, tone: 'azure', chips: ['VRAM', 'Apple Silicon', 'CPU'] },
          { label: copy.flow.runtime, tone: 'violet', chips: ['Ollama', 'LM Studio', 'llama.cpp'] },
          { label: copy.flow.models, tone: 'rose', chips: ['Llama', 'Qwen', 'Gemma'] },
        ],
      }}
      jump={{
        label: copy.jump.label,
        items: [
          { id: 'start', label: copy.jump.start, tone: jumpTones[0] },
          { id: 'explore', label: copy.jump.explore, tone: jumpTones[1] },
          { id: 'why', label: copy.jump.why, tone: jumpTones[2] },
          { id: 'latest', label: copy.jump.latest, tone: jumpTones[3] },
          { id: 'deeper', label: copy.jump.deeper, tone: jumpTones[4] },
          { id: 'faq', label: copy.jump.faq, tone: jumpTones[5] },
        ],
      }}
      start={{ title: copy.start.title, intro: copy.start.intro, cards: startCards }}
      explore={{
        title: copy.explore.title,
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: uniquePages }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{ title: copy.why.title, intro: copy.why.intro, cards: whyCards, takeaway: copy.why.takeaway }}
      latest={{
        title: copy.latest.title,
        intro: copy.latest.intro,
        cards: latestCards,
        moreLabel: copy.latest.more,
        badgeNew: labels.badgeNew,
        badgeUpdated: labels.badgeUpdated,
      }}
      deeper={{ title: copy.deeper.title, intro: copy.deeper.intro, openLabel: copy.deeper.open, links: hubLinks }}
      overview={{
        title: copy.overview.title,
        description: presentationDesc,
        imageSrc: `/images/local-llms-hub-overview-hero-${lang}.webp`,
        imageAlt: title,
        iframeSrc: `/presentations/local-llms-hub-static.html?lang=${lang}`,
        iframeTitle: presentationHeading,
      }}
      faq={{ heading: faqHeading, items: faqItems }}
      footer={footer}
    />
  )
}
