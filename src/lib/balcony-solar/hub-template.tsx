// Balcony Solar hub on the shared hub template (src/components/hub-template).
//
// Pilot: only the languages in BALCONY_SOLAR_HUB_TEMPLATE_LANGS use it; every other language keeps
// the original hub in page-helpers.tsx. A language needs an entry in HUB_TEMPLATE_COPY (below) and
// in src/components/hub-template/labels.ts before it can be added to the allowlist.
//
// Nothing here fetches data. Every article link comes from BALCONY_SOLAR_CATEGORIES, so the
// hub-coverage validator (scripts/validate-hub-coverage.mjs) keeps working unchanged.

import type { ReactNode } from 'react'
import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Lang } from '@/lib/i18n/constants'
import { balconySolarContent } from './content'
import { BALCONY_SOLAR_CATEGORIES } from './categories'
import { balconySolarArticlePath } from './metadata-helpers'
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'

/** Languages that render the hub with the new template. Add a language only after its strings exist below. */
export const BALCONY_SOLAR_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de'])

export function usesBalconySolarHubTemplate(lang: Lang): boolean {
  return BALCONY_SOLAR_HUB_TEMPLATE_LANGS.has(lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

// Company profiles live inside the "long-tail" category. They get their own tile and are listed A to Z.
const PROFILE_SLUGS: ReadonlySet<string> = new Set([
  'anker-solix-balcony-solar',
  'ecoflow-balcony-solar',
  'zendure-balcony-solar',
  'growatt-balcony-solar',
  'hoymiles-microinverter-balcony-solar',
  'deye-microinverter-balcony-solar',
  'apsystems-microinverter-balcony-solar',
  'goodwe-balcony-solar',
  'enphase-microinverter-balcony-solar',
  'yuma-balcony-solar',
  'priwatt-balcony-solar',
  'kleines-kraftwerk-balcony-solar',
  'balkonstrom-balcony-solar',
  'green-solar-pluginenergy-balcony-solar',
  'meyer-burger-solarwatt-heckert-balcony-solar',
  'renogy-balcony-solar',
  'allpowers-balcony-solar',
  'jackery-balcony-solar',
  'bluetti-balcony-solar',
])

const PROFILES_TILE_ID = 'company-profiles'
const LONG_TAIL_ID = 'long-tail'

// Slugs behind the four "Start here" cards (one per common reader goal).
const START_SLUGS = {
  kits: 'best-balcony-solar-kits-2026',
  rules: 'balkonkraftwerk-germany-rules',
  noCloud: 'home-assistant-balcony-solar-no-cloud',
  payback: 'balcony-solar-payback-worth-it-2026',
} as const
const COUNTRY_GUIDE_SLUG = 'is-balcony-solar-legal-country-guide'

interface HubTemplateCopy {
  pill: string
  titleHighlight: string
  primaryCta: string
  secondaryCta: string
  summary: { label: string; text: string }[]
  flow: { title: string; caption: string; ariaLabel: string; columns: { label: string; tone: HubTone; chips: string[] }[] }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string; goals: Record<keyof typeof START_SLUGS, string> }
  explore: { title: string; intro: string; guidesUnit: string; profilesUnit: string; tileSummary: Record<string, string>; profilesTitle: string; profilesIntro: string }
  why: { title: string }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; lines: Record<string, string>; extra: { slug: string; name: string }[] }
  overview: { title: string; iframeTitle: string }
  guideCountToken: string
}

const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  de: {
    pill: 'Balcony Solar',
    titleHighlight: 'ohne Cloud',
    primaryCta: 'Regeln für mein Land prüfen',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      {
        label: 'In einem Satz',
        text: 'Ein Balkonkraftwerk ist ein steckerfertiges Solargerät, das Strom für den Eigenverbrauch erzeugt, in den meisten Märkten ohne Dachinstallation oder Elektriker.',
      },
      {
        label: 'In einfachen Worten',
        text: 'Set auswählen, die Regeln des eigenen Landes prüfen, anschließen. Die Guides unten zeigen jeden Schritt.',
      },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: vom Solarmodul bis ins Hausnetz.',
      ariaLabel: 'Schema: Solarmodule speisen über einen Mikrowechselrichter in das Hausnetz ein, optional mit Speicher',
      columns: [
        { label: 'Solarmodul', tone: 'azure', chips: ['Balkongeländer', 'Wand', 'Garten'] },
        { label: 'Mikrowechselrichter', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Zuhause', tone: 'rose', chips: ['Steckdose', 'Speicher (optional)', 'Home Assistant'] },
      ],
    },
    jump: {
      label: 'Springen zu',
      start: 'Hier starten',
      explore: 'Themen',
      why: 'Warum',
      latest: 'Zuletzt aktualisiert',
      deeper: 'Weiter vertiefen',
      faq: 'Häufige Fragen',
    },
    start: {
      title: 'Hier starten',
      intro: 'Vier häufige Ziele. Wählen Sie das, das zu Ihnen passt.',
      badge: 'Hier starten',
      goals: {
        kits: 'Das passende Set finden',
        rules: 'Die Regeln in Deutschland prüfen',
        noCloud: 'Ohne Hersteller-Cloud überwachen',
        payback: 'Prüfen, ob es sich lohnt',
      },
    },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Seiten. Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      guidesUnit: 'Guides',
      profilesUnit: 'Profile',
      tileSummary: {
        'hub-money': 'Grundlagen, beste Sets und Betrieb ohne Cloud.',
        'decision-howto': 'Balkon oder Dach, Installation, Anmeldung, Montage.',
        legislation: 'Globaler Tracker plus Länderseiten für Deutschland, USA, UK und mehr.',
        'long-tail': 'Markenvergleich, Speicher-Frage, Amortisation, Fehlersuche.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye und weitere Marken.',
        'trends-2027': 'EU-Standards, Wohnungsgenossenschaften, Net Metering und Länderberichte.',
      },
      profilesTitle: 'Herstellerprofile',
      profilesIntro: 'Profile von Herstellern und Marken für Sets, Wechselrichter und Speicher, von Anker SOLIX bis Zendure.',
    },
    why: { title: 'Warum Balkonkraftwerk und warum ohne Cloud' },
    latest: {
      title: 'Zuletzt aktualisiert',
      intro: 'Die drei Seiten mit der jüngsten Änderung.',
      more: 'Alle Themen ansehen',
      updated: 'Aktualisiert',
      published: 'Veröffentlicht',
    },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      lines: {
        'smart-home': 'Das Zuhause mit lokaler KI betreiben.',
        'local-llms': 'Modelle, Speicher und Hardware für KI zu Hause.',
        'power-local-llm': 'Die passende lokale KI-App finden.',
        'prompt-bites': 'Kurze Antworten in 60 Sekunden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Überblick als Präsentation', iframeTitle: 'Balcony Solar Überblick' },
    guideCountToken: '33 Guides',
  },
}

// One accent color per hub, matching the hubs' own pages.
const HUB_TONES_BY_SLUG: Record<string, HubTone> = {
  'smart-home': 'cyan',
  'local-llms': 'olive',
  'power-local-llm': 'violet',
  'prompt-bites': 'amber',
  'prompt-engineering': 'blue',
}

interface CategoryCopy {
  badge: string
  description: string
}

export interface BalconySolarHubTemplateSource {
  lang: Lang
  copy: { title: string; intro: string; intro2: string; benefits: { label: string; detail: string }[] }
  categoryCopy?: Record<string, CategoryCopy>
  faq: { q: string; a: string }[]
  faqHeading: string
  relatedLinks: { label: string; path: string }[]
  reviewedDate?: string
  reviewedLabel: string
  homeLabel: string
  presentationDescription: string
  presentationUrl: string
  fallbackTitle: (slug: string) => string
  footer: ReactNode
}

const ALL_SLUGS = BALCONY_SOLAR_CATEGORIES.flatMap((category) => category.articleSlugs)

/**
 * The hub intro names how many guides there are. The typed number had drifted (33 typed, 36 real),
 * so for template languages it is computed: every listed page that is not a company profile.
 * Also used for the CollectionPage description so the schema and the visible text agree.
 */
export function withComputedGuideCount(lang: Lang, intro: string): string {
  const copy = HUB_TEMPLATE_COPY[lang]
  if (!copy) return intro
  const guideTotal = ALL_SLUGS.filter((slug) => !PROFILE_SLUGS.has(slug)).length
  return intro.replace(copy.guideCountToken, copy.guideCountToken.replace(/\d+/, String(guideTotal)))
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

function hubSlug(path: string): string {
  return path.split('/').filter(Boolean).pop() ?? path
}

export function BalconySolarHubTemplate(source: BalconySolarHubTemplateSource) {
  const { lang } = source
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Balcony Solar hub template has no strings for "${lang}"`)
  }

  const articleOf = (slug: string) => {
    const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
    const data = key ? balconySolarContent[key] : undefined
    return { en: data?.en, local: data?.[lang] ?? data?.en }
  }

  const toItem = (slug: string): HubItem => {
    const { en, local } = articleOf(slug)
    const isNew = isNewArticle(en?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(en?.publishDate, en?.dateModified)
    return {
      href: balconySolarArticlePath(lang, slug),
      title: local?.title ?? en?.title ?? source.fallbackTitle(slug),
      summary: local?.intro,
      kind: PROFILE_SLUGS.has(slug) ? 'profile' : 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // Tiles: one per category; the long-tail category is split into buying help and company profiles.
  const tiles: HubTile[] = []
  for (const category of BALCONY_SOLAR_CATEGORIES) {
    const cc = source.categoryCopy?.[category.id]
    const title = cc?.badge ?? category.titleEn
    const intro = cc?.description ?? category.descriptionEn
    const summary = copy.explore.tileSummary[category.id] ?? intro
    if (category.id === LONG_TAIL_ID) {
      const guides = category.articleSlugs.filter((slug) => !PROFILE_SLUGS.has(slug))
      const profiles = category.articleSlugs.filter((slug) => PROFILE_SLUGS.has(slug))
      if (guides.length > 0) {
        tiles.push({ id: category.id, title, summary, intro, unit: copy.explore.guidesUnit, items: guides.map(toItem) })
      }
      if (profiles.length > 0) {
        tiles.push({
          id: PROFILES_TILE_ID,
          title: copy.explore.profilesTitle,
          summary: copy.explore.tileSummary[PROFILES_TILE_ID] ?? copy.explore.profilesIntro,
          intro: copy.explore.profilesIntro,
          unit: copy.explore.profilesUnit,
          items: profiles.map(toItem),
        })
      }
      continue
    }
    tiles.push({ id: category.id, title, summary, intro, unit: copy.explore.guidesUnit, items: category.articleSlugs.map(toItem) })
  }

  const allSlugs = ALL_SLUGS
  const intro = withComputedGuideCount(lang, source.copy.intro)

  const startTones: HubTone[] = ['violet', 'azure', 'rose', 'indigo']
  const startIcons: HubStartCard['icon'][] = ['package', 'shield', 'home', 'trend']
  const startKeys = Object.keys(START_SLUGS) as (keyof typeof START_SLUGS)[]
  const startCards: HubStartCard[] = startKeys.map((key, i) => ({
    href: balconySolarArticlePath(lang, START_SLUGS[key]),
    goal: copy.start.goals[key],
    title: toItem(START_SLUGS[key]).title,
    tone: startTones[i],
    icon: startIcons[i],
    badge: i === 0 ? copy.start.badge : undefined,
  }))

  // Latest: the three articles with the newest change date (EN dates, same basis as the NEW / UPDATED badges).
  const dated = allSlugs
    .map((slug) => {
      const { en } = articleOf(slug)
      const date = en?.dateModified ?? en?.publishDate
      return { slug, date, modified: Boolean(en?.dateModified) }
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
      summary: item.summary,
      tone: latestTones[i % latestTones.length],
      badge: item.badge,
      dateLabel: `${entry.modified ? copy.latest.updated : copy.latest.published}: ${formatDisplayDate(entry.date, lang)}`,
    }
  })

  const hubLinks: HubLink[] = [
    ...source.relatedLinks.map((link) => ({ href: link.path, name: link.label })),
    ...copy.deeper.extra.map((extra) => ({ href: lang === 'en' ? `/${extra.slug}` : `/${lang}/${extra.slug}`, name: extra.name })),
  ].map((link) => {
    const slug = hubSlug(link.href)
    return { ...link, line: copy.deeper.lines[slug] ?? '', tone: HUB_TONES_BY_SLUG[slug] ?? 'violet' }
  })

  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)
  const reviewed = source.reviewedDate
    ? { dateTime: source.reviewedDate, text: `${source.reviewedLabel} ${formatDisplayDate(source.reviewedDate, lang)}` }
    : undefined

  return (
    <HubTemplate
      accent="orange"
      breadcrumb={{ homeLabel: source.homeLabel, homeHref: lang === 'en' ? '/' : `/${lang}`, current: copy.pill }}
      pill={copy.pill}
      title={source.copy.title}
      titleHighlight={copy.titleHighlight}
      intro={intro}
      primaryCta={{ label: copy.primaryCta, href: balconySolarArticlePath(lang, COUNTRY_GUIDE_SLUG) }}
      secondaryCta={{ label: copy.secondaryCta, href: '#explore' }}
      summaryCards={copy.summary.map((card, i) => ({ ...card, tone: i === 0 ? 'azure' : 'rose' }))}
      reviewed={reviewed}
      flow={copy.flow}
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
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: allSlugs.length }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{
        title: copy.why.title,
        intro: source.copy.intro2,
        cards: source.copy.benefits.map((benefit, i) => ({ ...benefit, tone: cycleTone(i) })),
      }}
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
        description: source.presentationDescription,
        imageSrc: `/images/balcony-solar-hub-overview-hero-${lang}.webp`,
        imageAlt: source.copy.title,
        iframeSrc: `${source.presentationUrl}?lang=${lang}`,
        iframeTitle: copy.overview.iframeTitle,
      }}
      faq={{ heading: source.faqHeading, items: source.faq }}
      footer={source.footer}
    />
  )
}
