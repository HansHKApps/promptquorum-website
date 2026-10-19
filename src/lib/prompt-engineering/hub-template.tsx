// Prompt Engineering hub on the shared hub template (src/components/hub-template).
//
// Same recipe as src/lib/local-llms/hub-template.tsx: this file only adapts Prompt Engineering data to the
// generic template. Languages in PE_HUB_TEMPLATE_LANGS use it; the original client hub
// (src/components/PromptEngineeringHub.tsx) stays as the fallback for any language without strings here.
//
// Nothing here fetches data. Every article link comes from `themes` (themes.ts), so
// scripts/validate-hub-coverage.mjs keeps working unchanged. Content that has no home in the template
// (long intro, TL;DR, quick facts, sources, CTA, footer links) is rendered server-side in the template's
// `footer` slot, so no text or link is lost. The old hub's level picker and "Guide Star" widget were
// client-side personalization and are not part of the template.

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
import { HUB_TEMPLATE_COPY as LOCAL_LLMS_HUB_COPY } from '@/lib/local-llms/hub-template-copy'
import {
  FALLBACK_TITLES,
  HUB_CTA_BUTTON,
  HUB_CTA_TEXT,
  HUB_FAQ_DATA,
  HUB_FAQ_HEADER,
  HUB_HERO_DESC,
  HUB_HERO_TITLE,
  HUB_IN_ONE_SENTENCE,
  HUB_IN_ONE_SENTENCE_LABEL,
  HUB_IN_PLAIN_TERMS,
  HUB_IN_PLAIN_TERMS_LABEL,
  HUB_LEAD_ANSWER,
  HUB_NAV_FEATURES,
  HUB_NAV_HOME,
  HUB_NAV_HOW,
  HUB_QUICK_FACTS_DETAILED,
  HUB_QUICK_FACTS_HEADER,
  HUB_SOURCES_DATA,
  HUB_SOURCES_HEADER,
  HUB_TLDR,
  SUBSECTION_LABELS,
  THEME_CALLOUTS,
  THEME_DESCRIPTIONS,
  THEME_LABELS,
} from './hub-content'
import type { PEHubData } from './hub-data'
import { PE_DEEPER_SLUGS, PE_HUB_TEMPLATE_COPY } from './hub-template-copy'
import type { PeThemeId } from './hub-template-copy'
import { PE_SLUG_TO_KEY } from './slugs'
import { themes } from './themes'

export { PE_HUB_TEMPLATE_COPY }

/** Languages that render the hub with the new template. Add a language only after its strings exist in hub-template-copy.ts. */
export const PE_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesPeHubTemplate(lang: string): boolean {
  return PE_HUB_TEMPLATE_LANGS.has(lang as Lang) && lang in PE_HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS && lang in LOCAL_LLMS_HUB_COPY
}

// "Start here" picks: slugs in the same order as the localized goals in PE_HUB_TEMPLATE_COPY[lang].start.goals.
const START_SLUGS = [
  'what-is-prompt-engineering',
  'co-star-framework',
  'chain-of-thought-prompting',
  'how-to-evaluate-prompt-quality',
  'prompt-injection-and-security',
] as const
const START_ICONS: HubStartCard['icon'][] = ['package', 'trend', 'trend', 'shield', 'shield']
const START_TONES: HubTone[] = ['violet', 'azure', 'indigo', 'orchid', 'rose']

// One accent color per hub, matching each hub's own pages.
const DEEPER_TONES: Record<(typeof PE_DEEPER_SLUGS)[number], HubTone> = {
  'local-llms': 'rose',
  'smart-home': 'cyan',
  'balcony-solar': 'orange',
  'power-local-llm': 'violet',
  'prompt-bites': 'orchid',
}
const DEEPER_NAMES: Record<(typeof PE_DEEPER_SLUGS)[number], string> = {
  'local-llms': 'Local LLMs',
  'smart-home': 'Smart Home',
  'balcony-solar': 'Balcony Solar',
  'power-local-llm': 'Power Local LLM',
  'prompt-bites': 'Prompt Bites',
}

function navHref(path: string, lang: string): string {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

function articlePath(lang: string, slug: string): string {
  return navHref(`/prompt-engineering/${slug}`, lang)
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

/** Heading and tile labels carry an emoji in the old hub ("📍 In One Sentence"); the template cards do not. */
function stripEmoji(text: string): string {
  return text.replace(/^[^\p{L}\p{N}]+/u, '').trim()
}

function themeKeys(theme: (typeof themes)[number]): string[] {
  return theme.articleKeys ?? theme.subSections?.flatMap((sub) => sub.articleKeys) ?? []
}

export interface PeHubTemplateProps extends PEHubData {
  lang: Lang
}

export function PeHubTemplate({ lang, titlesMap, datesMap }: PeHubTemplateProps) {
  const copy = PE_HUB_TEMPLATE_COPY[lang]
  const shared = LOCAL_LLMS_HUB_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !shared || !labels) {
    throw new Error(`Prompt Engineering hub template has no strings for "${lang}"`)
  }

  // Same lookup order as the old hub: content title (already language-resolved), fallback title, formatted slug.
  const titleOf = (slug: string): string => {
    const contentKey = PE_SLUG_TO_KEY[slug]
    if (contentKey && titlesMap[contentKey]) return titlesMap[contentKey]
    return FALLBACK_TITLES[slug]?.[lang] ?? FALLBACK_TITLES[slug]?.en ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  }
  const datesOf = (slug: string) => {
    const contentKey = PE_SLUG_TO_KEY[slug]
    return contentKey ? datesMap[contentKey] : undefined
  }

  const toItem = (slug: string, summary?: string): HubItem => {
    const dates = datesOf(slug)
    const isNew = isNewArticle(dates?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(dates?.publishDate, dates?.dateModified)
    return {
      href: articlePath(lang, slug),
      title: titleOf(slug),
      summary,
      kind: 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // One tile per theme. The "Use Topics" theme has sub-sections; their label becomes each item's summary line.
  const tiles: HubTile[] = themes.map((theme) => {
    const id = theme.id as PeThemeId
    const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.en ?? theme.title
    const intro = THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.en ?? theme.description
    const items: HubItem[] = theme.subSections
      ? theme.subSections.flatMap((sub) =>
          sub.articleKeys.map((key) => toItem(key, SUBSECTION_LABELS[sub.title]?.[lang] ?? SUBSECTION_LABELS[sub.title]?.en ?? sub.title)),
        )
      : (theme.articleKeys ?? []).map((key) => toItem(key))
    return { id: theme.id, title: label, summary: copy.tileSummary[id] ?? intro, intro, unit: shared.explore.unit, items }
  })
  const allSlugs = themes.flatMap(themeKeys)
  const uniquePages = new Set(allSlugs).size

  const startCards: HubStartCard[] = START_SLUGS.map((slug, i) => ({
    href: articlePath(lang, slug),
    goal: copy.start.goals[i],
    title: titleOf(slug),
    tone: START_TONES[i],
    icon: START_ICONS[i],
    badge: i === 0 ? shared.start.badge : undefined,
  }))

  // Latest: the three articles with the newest change date (EN dates, same basis as the NEW / UPDATED badges).
  const latestTones: HubTone[] = ['orchid', 'azure', 'violet']
  const dated = [...new Set(allSlugs)]
    .map((slug) => {
      const dates = datesOf(slug)
      return { slug, date: dates?.dateModified ?? dates?.publishDate, modified: Boolean(dates?.dateModified) }
    })
    .filter((entry): entry is { slug: string; date: string; modified: boolean } => Boolean(entry.date))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
  const latestCards: HubLatestCard[] = dated.map((entry, i) => {
    const item = toItem(entry.slug)
    return {
      href: item.href,
      title: item.title,
      tone: latestTones[i % latestTones.length],
      badge: item.badge,
      dateLabel: `${entry.modified ? shared.latest.updated : shared.latest.published}: ${formatDisplayDate(entry.date, lang)}`,
    }
  })

  const hubLinks: HubLink[] = PE_DEEPER_SLUGS.map((slug) => ({
    href: navHref(`/${slug}`, lang),
    name: DEEPER_NAMES[slug],
    line: slug === 'local-llms' ? copy.localLlmsLine : shared.deeper.lines[slug],
    tone: DEEPER_TONES[slug],
  }))

  // Why band: the old hub's three theme callouts (where to start, two-tool stack, silent failures).
  const whyCards = Object.values(THEME_CALLOUTS).map((byLang, i) => {
    const callout = byLang[lang] ?? byLang.en
    return { label: callout.title, detail: callout.text, tone: cycleTone(i) }
  })

  const faqItems: HubFaqItem[] = (HUB_FAQ_DATA[lang] ?? HUB_FAQ_DATA.en).map((faq) => ({ q: faq.q, a: faq.a }))

  const title = HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE.en
  const reviewedDate = latestDateModified(Object.values(datesMap))
  const reviewed = reviewedDate ? { dateTime: reviewedDate, text: `${shared.reviewed} ${formatDisplayDate(reviewedDate, lang)}` } : undefined
  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)

  const footer = (
    <div className="space-y-14 border-t border-border pt-14">
      {/* Long intro, TL;DR and quick facts from the old hero */}
      <section aria-labelledby="pe-overview" className="max-w-3xl space-y-5">
        <h2 id="pe-overview" className="text-2xl font-bold text-text-primary">
          {stripEmoji(HUB_QUICK_FACTS_HEADER[lang] ?? HUB_QUICK_FACTS_HEADER.en)}
        </h2>
        <p className="hub-hero-desc leading-relaxed text-text-secondary">{HUB_HERO_DESC[lang] ?? HUB_HERO_DESC.en}</p>
        <div className="rounded-r-xl border-l-4 border-primary bg-primary/5 p-4">
          <p className="mb-1 text-sm font-semibold text-primary">TL;DR</p>
          <p className="text-sm leading-relaxed text-text-secondary">{HUB_TLDR[lang] ?? HUB_TLDR.en}</p>
        </div>
        <ul className="space-y-2">
          {(HUB_QUICK_FACTS_DETAILED[lang] ?? HUB_QUICK_FACTS_DETAILED.en).map((fact, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Sources */}
      <section aria-labelledby="pe-sources" id="sources">
        <h2 id="pe-sources" className="mb-5 text-2xl font-bold text-text-primary">
          {HUB_SOURCES_HEADER[lang] ?? HUB_SOURCES_HEADER.en}
        </h2>
        <ul className="space-y-3">
          {HUB_SOURCES_DATA.map((source) => (
            <li key={source.url} className="text-sm">
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                {source.title}
              </a>
              <span className="text-text-secondary"> — {source.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PromptQuorum CTA */}
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-text-secondary">{HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT.en}</p>
        <Link href={navHref('/', lang)} className="inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
          {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON.en}
        </Link>
      </div>

      {/* Footer nav */}
      <nav aria-label="PromptQuorum" className="flex flex-wrap gap-4">
        <Link href={navHref('/', lang)} className="text-sm font-medium text-primary hover:text-primary/80">{HUB_NAV_HOME[lang] ?? HUB_NAV_HOME.en}</Link>
        <Link href={`${navHref('/pq-apps', lang)}#features`} className="text-sm font-medium text-primary hover:text-primary/80">{HUB_NAV_FEATURES[lang] ?? HUB_NAV_FEATURES.en}</Link>
        <Link href={`${navHref('/pq-apps', lang)}#how-it-works`} className="text-sm font-medium text-primary hover:text-primary/80">{HUB_NAV_HOW[lang] ?? HUB_NAV_HOW.en}</Link>
      </nav>
    </div>
  )

  return (
    <HubTemplate
      accent="blue"
      breadcrumb={{ homeLabel: shared.home, homeHref: navHref('/', lang), current: copy.pill }}
      pill={copy.pill}
      title={title}
      titleHighlight={copy.titleHighlight}
      intro={HUB_LEAD_ANSWER[lang] ?? HUB_LEAD_ANSWER.en}
      primaryCta={{ label: copy.primaryCta, href: articlePath(lang, START_SLUGS[0]) }}
      secondaryCta={{ label: copy.secondaryCta, href: '#explore' }}
      summaryCards={[
        { label: stripEmoji(HUB_IN_ONE_SENTENCE_LABEL[lang] ?? HUB_IN_ONE_SENTENCE_LABEL.en), text: HUB_IN_ONE_SENTENCE[lang] ?? HUB_IN_ONE_SENTENCE.en, tone: 'azure' },
        { label: stripEmoji(HUB_IN_PLAIN_TERMS_LABEL[lang] ?? HUB_IN_PLAIN_TERMS_LABEL.en), text: HUB_IN_PLAIN_TERMS[lang] ?? HUB_IN_PLAIN_TERMS.en, tone: 'rose' },
      ]}
      reviewed={reviewed}
      flow={{
        title: copy.flow.title,
        caption: copy.flow.caption,
        ariaLabel: copy.flow.ariaLabel,
        columns: [
          { label: copy.flow.framework, tone: 'azure', chips: ['CO-STAR', 'CRAFT', 'RTF'] },
          { label: copy.flow.technique, tone: 'violet', chips: ['Chain-of-thought', 'Few-shot', 'RAG'] },
          { label: copy.flow.evaluation, tone: 'rose', chips: ['Promptfoo', 'Braintrust', 'A/B'] },
        ],
      }}
      jump={{
        label: shared.jump.label,
        items: [
          { id: 'start', label: shared.jump.start, tone: jumpTones[0] },
          { id: 'explore', label: shared.jump.explore, tone: jumpTones[1] },
          { id: 'why', label: copy.why.title, tone: jumpTones[2] },
          { id: 'latest', label: shared.jump.latest, tone: jumpTones[3] },
          { id: 'deeper', label: shared.jump.deeper, tone: jumpTones[4] },
          { id: 'faq', label: shared.jump.faq, tone: jumpTones[5] },
        ],
      }}
      start={{ title: copy.start.title, intro: copy.start.intro, cards: startCards }}
      explore={{
        title: shared.explore.title,
        intro: fill(shared.explore.intro, { tiles: tiles.length, pages: uniquePages }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{ title: copy.why.title, intro: copy.why.intro, cards: whyCards, takeaway: copy.why.takeaway }}
      latest={{
        title: shared.latest.title,
        intro: shared.latest.intro,
        cards: latestCards,
        moreLabel: shared.latest.more,
        badgeNew: labels.badgeNew,
        badgeUpdated: labels.badgeUpdated,
      }}
      deeper={{ title: shared.deeper.title, intro: shared.deeper.intro, openLabel: shared.deeper.open, links: hubLinks }}
      faq={{ heading: HUB_FAQ_HEADER[lang] ?? HUB_FAQ_HEADER.en, items: faqItems }}
      footer={footer}
    />
  )
}
