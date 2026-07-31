// Shared server-side rendering helpers for the Balcony Solar cluster.
// The EN and locale-prefixed app routes (/de/, /es/, /fr/, /ja/, /zh/, /pt/, /ar/, /ko/) all call
// into here so the metadata + JSON-LD + page JSX logic lives in exactly one place.
//
// Mirrors the architecture of src/lib/smart-home/page-helpers.tsx:
//   - path-based locales (NOT ?lang=) via metadata-helpers.ts
//   - noindex contract driven by published.ts (every page noindex until launch)
//   - auto-generated TechArticle + BreadcrumbList + FAQPage + HowTo + ItemList schema
//   - Coming-Soon fallback for any slug without authored content
//
// SCAFFOLD STATE (Phase 1): articles-barrel.ts is empty, so every article route renders
// Coming Soon and the hub renders the category grid with placeholder links. Content lands
// in a later phase; translations + the noindex flip happen after that.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { BalconySolarPostClient } from '@/components/BalconySolarPostClient'
import { BalconySolarWaitlistCTA } from '@/components/BalconySolarWaitlistCTA'
import { balconySolarContent } from './content'
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'
import { BALCONY_SOLAR_CATEGORIES } from './categories'
import { balconySolarAlternates, balconySolarHubPath, balconySolarArticlePath } from './metadata-helpers'
import { isBalconySolarArticlePublished, isBalconySolarHubPublished } from './published'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新', es: 'NUEVO', pt: 'NOVO', ar: 'جديد', ko: '새글' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新', es: 'ACTUALIZADO', pt: 'ATUALIZADO', ar: 'محدث', ko: '업데이트' }

const HOME_LABEL: Partial<Record<Lang, string>> = {
  en: 'Home',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  zh: '主页',
  es: 'Inicio',
  pt: 'Início',
  ar: 'الرئيسية',
  ko: '홈',
}

const HUB_LABEL = 'Balcony Solar'

const SLUG_ACRONYMS: Record<string, string> = {
  ai: 'AI',
  llm: 'LLM',
  llms: 'LLMs',
  gdpr: 'GDPR',
  pc: 'PC',
  us: 'US',
  eu: 'EU',
  mena: 'MENA',
  latam: 'LatAm',
  ul: 'UL',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => SLUG_ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

const COMING_SOON_COPY: Partial<Record<Lang, { badge: string; bodyArticle: string; bodyHub: string; back: string }>> = {
  en: {
    badge: 'Coming Soon',
    bodyArticle: 'This Balcony Solar guide is being prepared. Explore the English version of the Balcony Solar hub in the meantime.',
    bodyHub: 'The Balcony Solar hub will be available in this language soon. Explore the English version below.',
    back: '← View English version',
  },
  de: {
    badge: 'Bald verfügbar',
    bodyArticle: 'Dieser Balcony-Solar-Leitfaden wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Balcony-Solar-Hubs.',
    bodyHub: 'Der Balcony-Solar-Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.',
    back: '← Englische Version ansehen',
  },
  fr: {
    badge: 'Bientôt disponible',
    bodyArticle: 'Ce guide Balcony Solar est en cours de préparation. Explorez la version anglaise du hub Balcony Solar en attendant.',
    bodyHub: 'Le hub Balcony Solar sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.',
    back: '← Voir la version anglaise',
  },
  ja: {
    badge: '近日公開',
    bodyArticle: 'このBalcony Solarガイドは準備中です。その間、Balcony Solarハブの英語版をご覧ください。',
    bodyHub: 'Balcony Solarハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。',
    back: '← 英語版を表示',
  },
  zh: {
    badge: '即将推出',
    bodyArticle: '本阳台光伏指南正在准备中。请同时浏览阳台光伏中心的英文版。',
    bodyHub: '阳台光伏中心即将推出此语言版本。请查看以下的英文版。',
    back: '← 查看英文版',
  },
  es: {
    badge: 'Próximamente',
    bodyArticle: 'Esta guía de Balcony Solar está en preparación. Explora la versión en inglés del centro Balcony Solar mientras tanto.',
    bodyHub: 'El centro Balcony Solar estará disponible en este idioma pronto. Consulta la versión en inglés a continuación.',
    back: '← Ver versión en inglés',
  },
  pt: {
    badge: 'Em breve',
    bodyArticle: 'Este guia de Balcony Solar está em preparação. Explore a versão em inglês do hub Balcony Solar enquanto isso.',
    bodyHub: 'O hub Balcony Solar estará disponível neste idioma em breve. Confira a versão em inglês abaixo.',
    back: '← Ver versão em inglês',
  },
  ar: {
    badge: 'قريباً',
    bodyArticle: 'يجري إعداد دليل Balcony Solar هذا. استكشف النسخة الإنجليزية من مركز Balcony Solar في هذه الأثناء.',
    bodyHub: 'سيتوفر مركز Balcony Solar بهذه اللغة قريباً. استكشف النسخة الإنجليزية أدناه.',
    back: '← عرض النسخة الإنجليزية',
  },
  ko: {
    badge: '출시 예정',
    bodyArticle: '이 Balcony Solar 가이드를 준비 중입니다. 그동안 영어 버전 Balcony Solar 허브를 탐색하십시오.',
    bodyHub: 'Balcony Solar 허브가 곧 이 언어로 제공될 예정입니다. 아래에서 영어 버전을 확인하십시오.',
    back: '← 영어 버전 보기',
  },
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(BALCONY_SOLAR_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = balconySolarContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    article?.intro ??
    'A guide in the Balcony Solar cluster from PromptQuorum.'

  const isPublished = isBalconySolarArticlePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
    description: desc,
    alternates: balconySolarAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: article?.title ?? fallbackTitle,
      description: desc,
      url: `${BASE}${balconySolarArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [
        {
          url: (article as any)?.heroImage
            ? `${BASE}${(article as any).heroImage}`
            : `${BASE}/api/og/${slug}?lang=${lang}`,
          width: 1200,
          height: 675,
          alt: article?.title ?? fallbackTitle,
        },
      ],
      publishedTime: article?.publishDate,
      modifiedTime: (article as any)?.dateModified ?? article?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: article?.title ?? fallbackTitle,
      description: (article as any)?.twitterDescription ?? desc,
      images: [`${BASE}/api/og/${slug}?lang=${lang}`],
    },
    ...(isPublished
      ? {}
      : {
          other: {
            // Belt-and-braces noindex for crawlers that ignore the metadata API.
            'robots-cluster': 'noindex, follow',
          },
        }),
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = balconySolarContent[key]
  const enArticle = articleData?.['en']
  const hasEnContent = !!enArticle && Object.keys(enArticle.sections ?? {}).length > 0

  // Coming-soon when: slug exists in registry, but no EN content yet.
  if (!hasEnContent) {
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const langArticle = articleData?.[lang]
  const hasLangContent = !!langArticle && Object.keys(langArticle.sections ?? {}).length > 0

  if (!hasLangContent && lang !== 'en') {
    // Render coming-soon for non-EN locales until translations land. EN is guaranteed above.
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const article = (langArticle ?? enArticle)!
  const canonicalUrl = `${BASE}${balconySolarArticlePath(lang, slug)}`

  // ─── Schemas (TechArticle + Breadcrumb + FAQ + HowTo + ItemList) ──
  const articleSchema = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
    url: canonicalUrl,
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/about',
      sameAs: [
        'https://www.linkedin.com/in/hanskuepper/',
        'https://x.com/HansKuepperAPPs',
        'https://github.com/HansHKApps',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
    },
    isPartOf: {
      '@type': 'WebPage',
      name: 'Balcony Solar Guide',
      url: `${BASE}${balconySolarHubPath(lang)}`,
    },
  }

  if ((article as any).heroImage) {
    ;(articleSchema as any).image = {
      '@type': 'ImageObject',
      url: `${BASE}${(article as any).heroImage}`,
      width: 1200,
      height: 675,
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: HUB_LABEL, item: `${BASE}${balconySolarHubPath(lang)}` },
      { '@type': 'ListItem', position: 3, name: article.title ?? slugToTitle(slug), item: canonicalUrl },
    ],
  }

  const faqEntries = Object.values(article.sections).flatMap((s) => s.faqs ?? [])
  const quickAnswerTopEntry = (article as any).quickAnswerTop?.[lang]
  const allFaqEntries = [
    ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema =
    article.faqSchema ??
    (allFaqEntries.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFaqEntries.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null)

  const howToSection = Object.values(article.sections).find(
    (s) => s.numberedItems && s.numberedItems.length > 0
  )
  const howToSchema =
    article.howToSchema ??
    (howToSection
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: article.title,
          description: article.intro,
          step: howToSection.numberedItems!.map((step, i) => {
            const rawText = typeof step === 'string' ? step : `${step.title}: ${step.whyItMatters}`
            const cleanText = rawText.replace(/\*\*/g, '')
            const colonIdx = cleanText.indexOf(':')
            const name =
              typeof step !== 'string'
                ? step.title
                : colonIdx > 0 && colonIdx < 80
                  ? cleanText.slice(0, colonIdx).trim()
                  : cleanText.slice(0, 80).trim()
            return {
              '@type': 'HowToStep',
              position: i + 1,
              name,
              text: cleanText,
            }
          }),
        }
      : null)

  const mdUrlRe = /\[.*?\]\((https?:\/\/[^)]+)\)/
  const itemListSchemas = Object.values(article.sections)
    .filter((s) => s.rows && s.rows.length > 0 && s.columns?.includes('Link'))
    .map((s) => ({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: s.title ?? article.title,
      itemListElement: s.rows!.map((row, i) => {
        const urlMatch = (row['Link'] ?? '').match(mdUrlRe)
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Thing',
            name: (row['Device'] ?? row['Tool'] ?? '').replace(/\*\*/g, '').trim(),
            ...(urlMatch && { url: urlMatch[1] }),
            description: row['Description'] ?? '',
          },
        }
      }),
    }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      {itemListSchemas.map((schema, i) => (
        <script key={`itemlist-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <BalconySolarPostClient slug={slug} lang={lang} articleData={articleData!} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const title = 'Balcony Solar: Balkonkraftwerk Kits, Rules, and No-Cloud Setups (2026)'
  const desc =
    'Everything about plug-in balcony solar: the best kits and batteries, legality by country, installation and registration, and running it without the cloud. 20 guides.'

  const isPublished = isBalconySolarHubPublished(lang)

  return {
    title: truncateTitle(title),
    description: desc,
    alternates: balconySolarAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title,
      description: desc,
      url: `${BASE}${balconySolarHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
      images: [{ url: `${BASE}/images/balcony-solar-hub-overview-hero-${lang}.webp`, width: 1200, height: 675, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title,
      description: desc,
    },
    ...(isPublished
      ? {}
      : { other: { 'robots-cluster': 'noindex, follow' } }),
  } satisfies Metadata
}

// Per-category visual + copy. Mirrors HUB_THEMES in smart-home/page-helpers.tsx:
// colored badge → question H2 → 2-col card grid. Colors match THEME_COLORS in
// BalconySolarPostClient.tsx so article badges match the hub category badge.
const HUB_THEMES: Array<{ id: string; badge: string; description: string; colorBadge: string; colorDot: string; slugs: string[] }> =
  BALCONY_SOLAR_CATEGORIES.map((cat) => {
    const palette: Record<string, { colorBadge: string; colorDot: string }> = {
      'hub-money':      { colorBadge: 'bg-slate-50 text-slate-700 border-slate-200',     colorDot: 'bg-slate-400' },
      'decision-howto': { colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200', colorDot: 'bg-emerald-400' },
      'legislation':    { colorBadge: 'bg-violet-50 text-violet-700 border-violet-200',   colorDot: 'bg-violet-400' },
      'long-tail':      { colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',     colorDot: 'bg-amber-400' },
      'trends-2027':    { colorBadge: 'bg-sky-50 text-sky-700 border-sky-200',           colorDot: 'bg-sky-400' },
    }
    return {
      id: cat.id,
      badge: cat.titleEn,
      description: cat.descriptionEn,
      ...palette[cat.id],
      slugs: cat.articleSlugs,
    }
  })

interface HubBenefit { label: string; detail: string }

interface HubCopy {
  title: string
  intro: string
  intro2: string
  benefits: HubBenefit[]
}

const HUB_COPY: Partial<Record<Lang, HubCopy>> = {
  en: {
    title: 'Balcony Solar: Kits, Rules, and No-Cloud Setups',
    intro: 'Plug-in balcony solar (Balkonkraftwerk) lets you generate your own power from a railing, wall, or garden panel — no rooftop installer required. These 33 guides cover the stack: the best kits, batteries, and micro-inverters, legality by country, installation and registration, and running the whole setup on Home Assistant instead of a vendor cloud.',
    intro2: 'Most balcony solar brands push you toward their own app and cloud dashboard — Hoymiles, Deye, APsystems, EcoFlow, Anker, and Zendure all default to routing your production data through a vendor server. A local setup reads that same data directly from the inverter or battery and keeps it on hardware you own, so monitoring keeps working even if the manufacturer\'s app disappears.',
    benefits: [
      { label: 'No Installer Needed', detail: 'Plug into an outlet or the inverter\'s own connector — no electrician, no roof work, and no permit at all in most notification-only markets.' },
      { label: 'Fast Payback', detail: 'A basic 600–800W kit typically costs a few hundred euros or dollars and can pay for itself within a few years, depending on local electricity prices.' },
      { label: 'No Vendor Cloud', detail: 'Home Assistant reads most major inverters and batteries directly over Modbus, MQTT, or a local API — production data stays on your own network.' },
      { label: 'Increasingly Legal', detail: 'France, Austria, Belgium, the Netherlands, Germany, and Portugal all allow notification-only registration; eight US states have signed dedicated laws since 2025.' },
    ],
  },
  de: {
    title: 'Balcony Solar: Sets, Regeln und Setups ohne Cloud',
    intro: 'Ein Steckersolargerät (Balkonkraftwerk) erzeugt eigenen Strom vom Balkongeländer, der Wand oder dem Garten — ganz ohne Dachinstallateur. Diese 33 Guides decken den gesamten Stack ab: die besten Sets, Speicher und Mikrowechselrichter, die Rechtslage je Land, Installation und Anmeldung sowie den Betrieb über Home Assistant statt einer Hersteller-Cloud.',
    intro2: 'Die meisten Hersteller von Balkonkraftwerken drängen zur eigenen App und Cloud-Anbindung — Hoymiles, Deye, APsystems, EcoFlow, Anker und Zendure leiten Erzeugungsdaten standardmäßig über einen Hersteller-Server. Ein lokales Setup liest dieselben Daten direkt vom Wechselrichter oder Speicher aus und behält sie auf eigener Hardware — die Überwachung funktioniert also auch dann noch, wenn die Hersteller-App verschwindet.',
    benefits: [
      { label: 'Kein Installateur nötig', detail: 'Einfach in eine Steckdose oder den Anschluss des Wechselrichters stecken — kein Elektriker, keine Dacharbeiten, in den meisten meldepflichtigen Märkten keine Genehmigung.' },
      { label: 'Schnelle Amortisation', detail: 'Ein einfaches 600–800-Watt-Set kostet meist ein paar Hundert Euro und kann sich je nach lokalem Strompreis innerhalb weniger Jahre amortisieren.' },
      { label: 'Keine Hersteller-Cloud', detail: 'Home Assistant liest die meisten gängigen Wechselrichter und Speicher direkt über Modbus, MQTT oder eine lokale API aus — die Erzeugungsdaten bleiben im eigenen Netzwerk.' },
      { label: 'Zunehmend legal', detail: 'Frankreich, Österreich, Belgien, die Niederlande, Deutschland und Portugal erlauben alle eine reine Meldepflicht; acht US-Bundesstaaten haben seit 2025 eigene Gesetze verabschiedet.' },
    ],
  },
  fr: {
    title: 'Balcony Solar : kits, réglementation et installations sans cloud',
    intro: 'Un kit solaire de balcon (Balkonkraftwerk) permet de produire sa propre électricité depuis une rambarde, un mur ou un jardin, sans installateur de toiture. Ces 33 guides couvrent toute la pile : les meilleurs kits, batteries et micro-onduleurs, la légalité par pays, l\'installation et l\'enregistrement, et le pilotage via Home Assistant plutôt qu\'un cloud propriétaire.',
    intro2: 'La plupart des marques de solaire de balcon poussent vers leur propre application et tableau de bord cloud — Hoymiles, Deye, APsystems, EcoFlow, Anker et Zendure font par défaut transiter les données de production par un serveur du fabricant. Une installation locale lit ces mêmes données directement depuis l\'onduleur ou la batterie et les garde sur du matériel que vous possédez, afin que le suivi continue de fonctionner même si l\'application du fabricant disparaît.',
    benefits: [
      { label: 'Aucun installateur requis', detail: 'Branchez-le sur une prise ou le connecteur propre de l\'onduleur — pas d\'électricien, pas de travaux de toiture, et aucun permis dans la plupart des marchés à simple notification.' },
      { label: 'Rentabilité rapide', detail: 'Un kit de base de 600 à 800 W coûte généralement quelques centaines d\'euros et peut s\'amortir en quelques années selon le prix local de l\'électricité.' },
      { label: 'Sans cloud propriétaire', detail: 'Home Assistant lit directement la plupart des onduleurs et batteries via Modbus, MQTT ou une API locale — les données de production restent sur votre propre réseau.' },
      { label: 'De plus en plus légal', detail: 'La France, l\'Autriche, la Belgique, les Pays-Bas, l\'Allemagne et le Portugal autorisent tous un enregistrement par simple notification ; huit États américains ont adopté des lois dédiées depuis 2025.' },
    ],
  },
  ja: {
    title: 'Balcony Solar：キット、ルール、クラウド不要のセットアップ',
    intro: 'プラグイン式バルコニーソーラー（Balkonkraftwerk）は、手すりや壁、庭のパネルから自家発電できる仕組みで、屋根への設置業者は不要です。この33本のガイドで、ベストなキット・バッテリー・マイクロインバーター、国ごとの合法性、設置と登録、そしてベンダーのクラウドではなくHome Assistantで運用する方法までをカバーします。',
    intro2: 'バルコニーソーラーの多くのブランドは自社アプリとクラウドダッシュボードへの依存を前提としています——Hoymiles、Deye、APsystems、EcoFlow、Anker、Zendureはいずれも発電データをメーカーのサーバー経由で送る仕様がデフォルトです。ローカル構成なら同じデータをインバーターやバッテリーから直接読み取り、自分が所有するハードウェア上に保持できるため、メーカーのアプリが提供終了になってもモニタリングは動き続けます。',
    benefits: [
      { label: '設置業者不要', detail: 'コンセントやインバーター自体のコネクタに差し込むだけ——電気工事士も屋根工事も、届出制の市場のほとんどでは許可も不要です。' },
      { label: '早い投資回収', detail: '基本的な600〜800Wのキットは数百ユーロ・ドル程度で、地域の電気料金次第では数年で元が取れます。' },
      { label: 'ベンダークラウド不要', detail: 'Home Assistantは主要なインバーターやバッテリーの多くをModbus・MQTT・ローカルAPI経由で直接読み取れるため、発電データは自分のネットワーク内に留まります。' },
      { label: '合法化が進行中', detail: 'フランス・オーストリア・ベルギー・オランダ・ドイツ・ポルトガルはいずれも届出のみで登録可能。米国では2025年以降8州が専用法を制定しています。' },
    ],
  },
  zh: {
    title: 'Balcony Solar：套件、法规与无云端方案',
    intro: '插入式阳台光伏（Balkonkraftwerk）让您可以在栏杆、墙面或庭院面板上自行发电，无需屋顶安装工。这33篇指南覆盖完整技术栈：最佳套件、电池与微型逆变器，各国合法性，安装与注册，以及使用Home Assistant而非厂商云端来运行整套系统。',
    intro2: '大多数阳台光伏品牌都会引导用户使用自家App和云端仪表盘——Hoymiles、Deye、APsystems、EcoFlow、Anker和Zendure默认都会把发电数据经由厂商服务器传输。本地化方案则直接从逆变器或电池读取相同数据，并保存在您自己拥有的硬件上，即使厂商App下线，监控仍能持续运行。',
    benefits: [
      { label: '无需安装工', detail: '直接插入插座或逆变器自带的接口即可——无需电工、无需屋顶施工，在大多数仅需备案的市场也无需许可。' },
      { label: '回本快', detail: '一套基础的600–800W套件通常只需几百欧元/美元，视当地电价而定，往往几年内即可回本。' },
      { label: '无厂商云端', detail: 'Home Assistant可通过Modbus、MQTT或本地API直接读取大多数主流逆变器和电池——发电数据留在您自己的网络内。' },
      { label: '合法性持续提升', detail: '法国、奥地利、比利时、荷兰、德国和葡萄牙均允许仅备案登记；美国自2025年以来已有8个州通过专门立法。' },
    ],
  },
  es: {
    title: 'Balcony Solar: kits, normativa y montajes sin nube',
    intro: 'Un kit solar de balcón (Balkonkraftwerk) permite generar tu propia electricidad desde una barandilla, una pared o un panel de jardín, sin instalador de tejado. Estas 33 guías cubren toda la pila: los mejores kits, baterías y microinversores, la legalidad por país, la instalación y el registro, y cómo controlarlo todo con Home Assistant en lugar de la nube del fabricante.',
    intro2: 'La mayoría de las marcas de energía solar de balcón te empujan hacia su propia app y panel en la nube — Hoymiles, Deye, APsystems, EcoFlow, Anker y Zendure enrutan por defecto tus datos de producción a través de un servidor del fabricante. Una configuración local lee esos mismos datos directamente desde el inversor o la batería y los mantiene en hardware que tú controlas, de modo que la monitorización sigue funcionando incluso si la app del fabricante desaparece.',
    benefits: [
      { label: 'Sin instalador', detail: 'Conéctalo a un enchufe o al propio conector del inversor — sin electricista, sin obras en el tejado, y sin permiso en la mayoría de mercados de simple notificación.' },
      { label: 'Amortización rápida', detail: 'Un kit básico de 600–800 W suele costar unos pocos cientos de euros o dólares y puede amortizarse en pocos años según el precio local de la electricidad.' },
      { label: 'Sin nube del fabricante', detail: 'Home Assistant lee la mayoría de inversores y baterías principales directamente vía Modbus, MQTT o una API local — los datos de producción se quedan en tu propia red.' },
      { label: 'Cada vez más legal', detail: 'Francia, Austria, Bélgica, los Países Bajos, Alemania y Portugal permiten un registro de simple notificación; ocho estados de EE. UU. han aprobado leyes dedicadas desde 2025.' },
    ],
  },
  pt: {
    title: 'Balcony Solar: kits, regras e configurações sem nuvem',
    intro: 'Um kit solar de varanda (Balkonkraftwerk) permite gerar sua própria energia a partir de uma grade, parede ou painel de jardim, sem instalador de telhado. Estes 33 guias cobrem toda a pilha: os melhores kits, baterias e microinversores, a legalidade por país, instalação e registro, e como controlar tudo com o Home Assistant em vez da nuvem do fabricante.',
    intro2: 'A maioria das marcas de energia solar de varanda empurra você para o próprio aplicativo e painel na nuvem — Hoymiles, Deye, APsystems, EcoFlow, Anker e Zendure roteiam por padrão seus dados de produção por um servidor do fabricante. Uma configuração local lê esses mesmos dados diretamente do inversor ou da bateria e os mantém em hardware que você controla, para que o monitoramento continue funcionando mesmo se o aplicativo do fabricante deixar de existir.',
    benefits: [
      { label: 'Sem instalador', detail: 'Basta conectar em uma tomada ou no próprio conector do inversor — sem eletricista, sem obra no telhado, e sem necessidade de licença na maioria dos mercados que exigem apenas notificação.' },
      { label: 'Retorno rápido', detail: 'Um kit básico de 600–800 W geralmente custa algumas centenas de dólares ou euros e pode se pagar em poucos anos, dependendo do preço local da eletricidade.' },
      { label: 'Sem nuvem do fabricante', detail: 'O Home Assistant lê a maioria dos principais inversores e baterias diretamente via Modbus, MQTT ou uma API local — os dados de produção ficam na sua própria rede.' },
      { label: 'Cada vez mais legal', detail: 'França, Áustria, Bélgica, Países Baixos, Alemanha e Portugal permitem registro apenas por notificação; oito estados dos EUA sancionaram leis próprias desde 2025.' },
    ],
  },
  ar: {
    title: 'Balcony Solar: الأطقم والقواعد والإعدادات بلا سحابة',
    intro: 'يتيح لك طقم الطاقة الشمسية للشرفة (Balkonkraftwerk) توليد الكهرباء الخاصة بك من درابزين أو جدار أو لوحة حديقة، دون الحاجة لفني تركيب أسطح. تغطي هذه الأدلة الـ33 المنظومة الكاملة: أفضل الأطقم والبطاريات والمحولات الدقيقة، والوضع القانوني حسب الدولة، والتركيب والتسجيل، وتشغيل كل ذلك عبر Home Assistant بدلاً من سحابة الشركة المصنعة.',
    intro2: 'تدفعك معظم علامات الطاقة الشمسية للشرفة نحو تطبيقها ولوحة التحكم السحابية الخاصة بها — فشركات Hoymiles وDeye وAPsystems وEcoFlow وAnker وZendure تُوجّه جميعها بيانات الإنتاج افتراضيًا عبر خادم الشركة المصنعة. أما الإعداد المحلي فيقرأ نفس البيانات مباشرة من العاكس أو البطارية ويحتفظ بها على أجهزة تملكها أنت، بحيث تستمر المراقبة في العمل حتى لو اختفى تطبيق الشركة المصنعة.',
    benefits: [
      { label: 'لا حاجة لفني تركيب', detail: 'وصّله بمقبس كهربائي أو موصل العاكس نفسه — دون كهربائي، ودون أعمال في السطح، ودون أي تصريح في معظم الأسواق التي تكتفي بالإخطار.' },
      { label: 'عائد سريع', detail: 'يكلف الطقم الأساسي بقدرة 600–800 واط عادةً بضع مئات من اليورو أو الدولار، ويمكن أن يسترد تكلفته خلال سنوات قليلة حسب أسعار الكهرباء المحلية.' },
      { label: 'دون سحابة الشركة المصنعة', detail: 'يقرأ Home Assistant معظم العواكس والبطاريات الرئيسية مباشرة عبر Modbus أو MQTT أو واجهة برمجية محلية — تبقى بيانات الإنتاج داخل شبكتك الخاصة.' },
      { label: 'قانونية بشكل متزايد', detail: 'تسمح فرنسا والنمسا وبلجيكا وهولندا وألمانيا والبرتغال جميعها بالتسجيل بالإخطار فقط؛ وقد أقرت ثماني ولايات أمريكية قوانين مخصصة منذ عام 2025.' },
    ],
  },
  ko: {
    title: 'Balcony Solar: 키트, 규정, 클라우드 없는 구성',
    intro: '플러그인 발코니 태양광(Balkonkraftwerk)은 난간, 벽, 정원 패널에서 직접 전기를 생산할 수 있게 해줍니다 — 지붕 설치업자가 필요 없습니다. 이 33개 가이드는 전체 스택을 다룹니다: 최고의 키트, 배터리, 마이크로인버터, 국가별 합법성, 설치와 등록, 그리고 제조사 클라우드 대신 Home Assistant로 전체 시스템을 운영하는 방법까지.',
    intro2: '대부분의 발코니 태양광 브랜드는 자사 앱과 클라우드 대시보드 사용을 유도합니다 — Hoymiles, Deye, APsystems, EcoFlow, Anker, Zendure 모두 기본적으로 발전 데이터를 제조사 서버를 통해 전송합니다. 로컬 구성은 동일한 데이터를 인버터나 배터리에서 직접 읽어 사용자가 소유한 하드웨어에 보관하므로, 제조사 앱이 사라지더라도 모니터링은 계속 작동합니다.',
    benefits: [
      { label: '설치업자 불필요', detail: '콘센트나 인버터 자체 커넥터에 꽂기만 하면 됩니다 — 전기기사도, 지붕 공사도 필요 없고, 대부분의 신고제 시장에서는 허가도 필요 없습니다.' },
      { label: '빠른 투자 회수', detail: '기본 600–800W 키트는 보통 몇백 유로/달러 수준이며, 현지 전기 요금에 따라 몇 년 안에 투자금을 회수할 수 있습니다.' },
      { label: '제조사 클라우드 불필요', detail: 'Home Assistant는 Modbus, MQTT 또는 로컬 API를 통해 대부분의 주요 인버터와 배터리를 직접 읽을 수 있어 발전 데이터가 자체 네트워크 안에 머무릅니다.' },
      { label: '점점 합법화', detail: '프랑스, 오스트리아, 벨기에, 네덜란드, 독일, 포르투갈 모두 신고만으로 등록이 가능하며, 미국은 2025년 이후 8개 주가 전용 법률을 제정했습니다.' },
    ],
  },
}

const CATEGORY_COPY: Partial<Record<Lang, Record<string, { badge: string; description: string }>>> = {
  en: {
    'hub-money':      { badge: 'Hub + Core Money Pages',        description: 'The cluster anchor and the primary buyer-intent guides: what balcony solar is, the best kits, batteries, and micro-inverters, and running it all without the cloud.' },
    'decision-howto': { badge: 'Decision & How-To',              description: 'Mid-funnel guides: balcony vs rooftop, installation, registration, sizing and payback, and mounting.' },
    'legislation':    { badge: 'Legislation Moat',                description: 'Per-country legal status: the global tracker plus dedicated pages for the US, Germany, Spain/LatAm, Portugal/Brazil, and the Gulf/MENA region.' },
    'long-tail':      { badge: 'Long-Tail & Conversion Support', description: 'Brand comparisons, battery need, payback worth-it framing, and troubleshooting.' },
    'trends-2027':    { badge: '2027 Trends', description: 'What changes in 2027: EU battery/wattage standards, B2B housing-association adoption, the end of net metering in the Netherlands, and country-by-country status reports for Japan, China, Brazil, Greece, and the Gulf/MENA gap.' },
  },
  de: {
    'hub-money':      { badge: 'Hub & Kern-Kaufseiten',          description: 'Der Ankerartikel und die wichtigsten kaufrelevanten Guides: was ein Balkonkraftwerk ist, die besten Sets, Speicher und Mikrowechselrichter, und der Betrieb ohne Cloud.' },
    'decision-howto': { badge: 'Entscheidung & Anleitung',        description: 'Guides für die mittlere Phase: Balkon vs. Dach, Installation, Anmeldung, Dimensionierung und Amortisation, Montage.' },
    'legislation':    { badge: 'Rechtslage nach Land',             description: 'Rechtlicher Status je Land: der globale Tracker sowie eigene Seiten für die USA, Deutschland, Spanien/LatAm, Portugal/Brasilien und die Golfregion/MENA.' },
    'long-tail':      { badge: 'Long-Tail & Kaufunterstützung',   description: 'Markenvergleiche, Speicherbedarf, Amortisations-Einordnung und Fehlerbehebung.' },
    'trends-2027':    { badge: 'Trends 2027', description: 'Was sich 2027 ändert: EU-Speicher-/Leistungsstandards, B2B-Adoption durch Wohnungsgenossenschaften, das Ende des Net-Metering in den Niederlanden sowie länderspezifische Statusberichte für Japan, China, Brasilien, Griechenland und die Golfregion/MENA-Lücke.' },
  },
  fr: {
    'hub-money':      { badge: 'Hub et pages d\'achat principales', description: 'La page pivot et les guides principaux à intention d\'achat : qu\'est-ce que le solaire de balcon, les meilleurs kits, batteries et micro-onduleurs, et le pilotage sans cloud.' },
    'decision-howto': { badge: 'Décision et guides pratiques',       description: 'Guides de milieu de tunnel : balcon vs toiture, installation, enregistrement, dimensionnement et rentabilité, fixation.' },
    'legislation':    { badge: 'Réglementation par pays',            description: 'Statut légal par pays : le tracker mondial ainsi que des pages dédiées aux États-Unis, à l\'Allemagne, à l\'Espagne/LatAm, au Portugal/Brésil et au Golfe/MENA.' },
    'long-tail':      { badge: 'Longue traîne et conversion',        description: 'Comparatifs de marques, besoin de batterie, rentabilité, et dépannage.' },
    'trends-2027':    { badge: 'Tendances 2027', description: 'Ce qui change en 2027 : normes UE batterie/puissance, adoption B2B par les copropriétés/bailleurs, la fin du net metering aux Pays-Bas, et des rapports de statut pays par pays pour le Japon, la Chine, le Brésil, la Grèce et le vide du Golfe/MENA.' },
  },
  ja: {
    'hub-money':      { badge: 'ハブと主要マネーページ',              description: 'クラスターの起点と主要な購入意図ガイド：バルコニーソーラーとは何か、最良のキット・バッテリー・マイクロインバーター、そしてクラウドなしでの運用。' },
    'decision-howto': { badge: '意思決定とハウツー',                   description: '中間層のガイド：バルコニーvs屋根、設置、登録、サイジングと投資回収、取り付け。' },
    'legislation':    { badge: '国別法規制',                          description: '国ごとの法的状況：グローバルトラッカーに加え、米国、ドイツ、スペイン/ラテンアメリカ、ポルトガル/ブラジル、湾岸/MENA地域の専用ページ。' },
    'long-tail':      { badge: 'ロングテールとコンバージョン支援',        description: 'ブランド比較、バッテリーの必要性、投資回収の妥当性、トラブルシューティング。' },
    'trends-2027':    { badge: '2027年のトレンド', description: '2027年に変わること：EUのバッテリー・出力標準、住宅組合によるB2B導入、オランダでのネットメータリング終了、そして日本・中国・ブラジル・ギリシャおよび湾岸/MENAのギャップに関する国別ステータスレポート。' },
  },
  zh: {
    'hub-money':      { badge: '枢纽与核心变现页',                    description: '集群锚点与主要购买意向指南：什么是阳台光伏、最佳套件/电池/微型逆变器，以及如何在无云端条件下运行。' },
    'decision-howto': { badge: '决策与操作指南',                       description: '中期漏斗指南：阳台vs屋顶、安装、注册、选型与回本周期、安装方式。' },
    'legislation':    { badge: '各国法规护城河',                       description: '各国法律状态：全球追踪页，以及美国、德国、西班牙/拉美、葡萄牙/巴西、海湾/中东北非地区的专属页面。' },
    'long-tail':      { badge: '长尾与转化支持',                       description: '品牌对比、电池必要性、回本值不值的分析，以及故障排查。' },
    'trends-2027':    { badge: '2027年趋势', description: '2027年将发生的变化：欧盟电池/功率标准、住房协会的B2B采纳、荷兰净计量制度的终结，以及日本、中国、巴西、希腊和海湾/中东北非空白市场的国别状态报告。' },
  },
  es: {
    'hub-money':      { badge: 'Hub y páginas de compra principales', description: 'La página ancla del clúster y las guías principales de intención de compra: qué es el solar de balcón, los mejores kits, baterías y microinversores, y su funcionamiento sin nube.' },
    'decision-howto': { badge: 'Decisión y guías prácticas',           description: 'Guías de mitad de embudo: balcón vs tejado, instalación, registro, dimensionamiento y amortización, montaje.' },
    'legislation':    { badge: 'Legislación por país',                 description: 'Estado legal por país: el rastreador global además de páginas dedicadas a EE. UU., Alemania, España/LatAm, Portugal/Brasil y el Golfo/MENA.' },
    'long-tail':      { badge: 'Cola larga y apoyo a la conversión',   description: 'Comparativas de marcas, necesidad de batería, si compensa la inversión, y solución de problemas.' },
    'trends-2027':    { badge: 'Tendencias 2027', description: 'Lo que cambia en 2027: estándares de batería/potencia en la UE, adopción B2B por asociaciones de vivienda, el fin del net metering en los Países Bajos, e informes de estado por país para Japón, China, Brasil, Grecia y el vacío del Golfo/MENA.' },
  },
  pt: {
    'hub-money':      { badge: 'Hub e páginas principais de compra', description: 'A página âncora do cluster e os principais guias de intenção de compra: o que é o solar de varanda, os melhores kits, baterias e microinversores, e o funcionamento sem nuvem.' },
    'decision-howto': { badge: 'Decisão e guias práticos',            description: 'Guias de meio de funil: varanda vs telhado, instalação, registo, dimensionamento e retorno, montagem.' },
    'legislation':    { badge: 'Legislação por país',                  description: 'Estado legal por país: o rastreador global além de páginas dedicadas aos EUA, Alemanha, Espanha/LatAm, Portugal/Brasil e Golfo/MENA.' },
    'long-tail':      { badge: 'Cauda longa e apoio à conversão',      description: 'Comparações de marcas, necessidade de bateria, se vale a pena o retorno, e resolução de problemas.' },
    'trends-2027':    { badge: 'Tendências 2027', description: 'O que muda em 2027: padrões de bateria/potência da UE, adoção B2B por associações habitacionais, o fim do net metering na Holanda, e relatórios de status por país para Japão, China, Brasil, Grécia e a lacuna do Golfo/MENA.' },
  },
  ar: {
    'hub-money':      { badge: 'المركز وصفحات الشراء الأساسية',       description: 'الصفحة المحورية للمجموعة والأدلة الرئيسية لنية الشراء: ما هي الطاقة الشمسية للشرفة، وأفضل الأطقم والبطاريات والمحولات الدقيقة، وتشغيلها دون سحابة.' },
    'decision-howto': { badge: 'القرار والإرشادات العملية',            description: 'أدلة منتصف القمع: الشرفة مقابل السطح، التركيب، التسجيل، تحديد الحجم والعائد، التثبيت.' },
    'legislation':    { badge: 'الوضع القانوني حسب الدولة',            description: 'الوضع القانوني حسب الدولة: المتتبع العالمي بالإضافة إلى صفحات مخصصة للولايات المتحدة وألمانيا وإسبانيا/أمريكا اللاتينية والبرتغال/البرازيل والخليج/منطقة الشرق الأوسط وشمال أفريقيا.' },
    'long-tail':      { badge: 'الذيل الطويل ودعم التحويل',            description: 'مقارنات العلامات التجارية، الحاجة إلى بطارية، جدوى العائد، واستكشاف الأخطاء وإصلاحها.' },
    'trends-2027':    { badge: 'اتجاهات 2027', description: 'ما سيتغير في 2027: معايير البطارية/الطاقة في الاتحاد الأوروبي، تبني B2B من قبل جمعيات الإسكان، نهاية نظام صافي القياس في هولندا، وتقارير الحالة حسب الدولة لليابان والصين والبرازيل واليونان وفجوة الخليج/الشرق الأوسط وشمال أفريقيا.' },
  },
  ko: {
    'hub-money':      { badge: '허브 및 핵심 수익 페이지', description: '클러스터의 앵커이자 주요 구매 의도 가이드: 발코니 태양광이란 무엇인지, 최고의 키트·배터리·마이크로인버터, 그리고 클라우드 없이 운영하는 방법.' },
    'decision-howto': { badge: '결정 및 방법 가이드', description: '중간 퍼널 가이드: 발코니 vs 지붕, 설치, 등록, 사이징과 투자 회수, 마운팅.' },
    'legislation':    { badge: '국가별 법규', description: '국가별 법적 상태: 글로벌 트래커와 미국·독일·스페인/라틴아메리카·포르투갈/브라질·걸프/MENA 지역 전용 페이지.' },
    'long-tail':      { badge: '롱테일 및 전환 지원', description: '브랜드 비교, 배터리 필요성, 투자 회수 타당성, 문제 해결.' },
    'trends-2027':    { badge: '2027년 트렌드', description: '2027년에 바뀌는 것: EU 배터리/출력 표준, 주택 조합의 B2B 도입, 네덜란드의 넷미터링 종료, 그리고 일본·중국·브라질·그리스 및 걸프/MENA 공백에 대한 국가별 현황 보고서.' },
  },
}

interface HubFaqEntry { q: string; a: string }

const HUB_FAQ: Partial<Record<Lang, HubFaqEntry[]>> = {
  en: [
    { q: 'What is balcony solar (Balkonkraftwerk)?', a: 'A plug-in solar system — usually one or two panels feeding a small micro-inverter — that connects directly to a household outlet or dedicated connector, generating power for self-consumption without a rooftop installation or an electrician in most markets.' },
    { q: 'Do I need a permit to install balcony solar?', a: 'It depends on the country. France, Austria, Belgium, the Netherlands, Germany, and Portugal use simple notification-only registration for small systems; the US now has 8 states with dedicated laws; several other markets — the UAE, Saudi Arabia, Brazil, Japan — have no dedicated framework yet, so requirements vary.' },
    { q: 'How much does a balcony solar kit cost, and what\'s the payback time?', a: 'Typical kits run from a few hundred to around a thousand dollars or euros depending on panel count, inverter brand, and whether a battery is included — payback commonly falls in the 2–5 year range depending on local electricity prices and how much of the output you self-consume.' },
    { q: 'Can I monitor my balcony solar system without the manufacturer\'s cloud app?', a: 'Yes, for most major brands — Hoymiles, Deye, APsystems, EcoFlow, Anker, and Zendure inverters and batteries can be read locally via Modbus, MQTT, or a local API and pulled into Home Assistant, keeping your production data off the vendor\'s servers.' },
    { q: 'Is balcony solar legal where I live?', a: 'Check the country-by-country guide in this cluster — legal status ranges from fully codified (Germany, Portugal, France) to notification-only (Austria, Belgium, Netherlands) to nascent or unaddressed (the UAE, Saudi Arabia, Brazil, Japan, Bahrain, Taiwan) to state-by-state (the US).' },
  ],
  de: [
    { q: 'Was ist ein Balkonkraftwerk?', a: 'Ein steckerfertiges Solargerät — meist ein oder zwei Module mit einem kleinen Mikrowechselrichter —, das direkt an eine Haushaltssteckdose oder einen eigenen Anschluss angeschlossen wird und Strom für den Eigenverbrauch erzeugt, ohne Dachinstallation oder Elektriker in den meisten Märkten.' },
    { q: 'Brauche ich eine Genehmigung für ein Balkonkraftwerk?', a: 'Das hängt vom Land ab. Frankreich, Österreich, Belgien, die Niederlande, Deutschland und Portugal verlangen für kleine Anlagen nur eine einfache Meldung; die USA haben inzwischen 8 Bundesstaaten mit eigenen Gesetzen; mehrere andere Märkte — die VAE, Saudi-Arabien, Brasilien, Japan — haben noch keinen eigenen Rahmen, die Anforderungen variieren also.' },
    { q: 'Was kostet ein Balkonkraftwerk-Set, und wie schnell amortisiert es sich?', a: 'Typische Sets kosten je nach Modulanzahl, Wechselrichter-Marke und Speicheroption zwischen ein paar Hundert und rund tausend Euro — die Amortisation liegt meist zwischen 2 und 5 Jahren, abhängig vom lokalen Strompreis und dem tatsächlichen Eigenverbrauchsanteil.' },
    { q: 'Kann ich mein Balkonkraftwerk ohne die Hersteller-Cloud überwachen?', a: 'Ja, bei den meisten großen Marken — Wechselrichter und Speicher von Hoymiles, Deye, APsystems, EcoFlow, Anker und Zendure lassen sich lokal über Modbus, MQTT oder eine lokale API auslesen und in Home Assistant einbinden, sodass die Erzeugungsdaten nicht auf den Servern des Herstellers landen.' },
    { q: 'Ist ein Balkonkraftwerk an meinem Wohnort legal?', a: 'Siehe den Länder-Guide in diesem Cluster — der rechtliche Status reicht von vollständig kodifiziert (Deutschland, Portugal, Frankreich) über reine Meldepflicht (Österreich, Belgien, Niederlande) bis zu unklar oder ungeregelt (VAE, Saudi-Arabien, Brasilien, Japan, Bahrain, Taiwan) und bundesstaatenweise geregelt (USA).' },
  ],
  fr: [
    { q: 'Qu\'est-ce que le solaire de balcon (Balkonkraftwerk) ?', a: 'Un système solaire enfichable — généralement un ou deux panneaux alimentant un petit micro-onduleur — qui se branche directement sur une prise domestique ou un connecteur dédié, produisant de l\'électricité pour l\'autoconsommation sans installation sur toiture ni électricien dans la plupart des marchés.' },
    { q: 'Ai-je besoin d\'un permis pour installer du solaire de balcon ?', a: 'Cela dépend du pays. La France, l\'Autriche, la Belgique, les Pays-Bas, l\'Allemagne et le Portugal utilisent une simple notification pour les petits systèmes ; les États-Unis comptent désormais 8 États avec des lois dédiées ; plusieurs autres marchés — les Émirats arabes unis, l\'Arabie saoudite, le Brésil, le Japon — n\'ont pas encore de cadre dédié, donc les exigences varient.' },
    { q: 'Combien coûte un kit solaire de balcon, et quel est le délai de rentabilité ?', a: 'Les kits classiques coûtent de quelques centaines à environ mille dollars ou euros selon le nombre de panneaux, la marque de l\'onduleur et la présence d\'une batterie — la rentabilité se situe généralement entre 2 et 5 ans selon le prix local de l\'électricité et la part d\'autoconsommation.' },
    { q: 'Puis-je surveiller mon installation solaire de balcon sans l\'application cloud du fabricant ?', a: 'Oui, pour la plupart des grandes marques — les onduleurs et batteries Hoymiles, Deye, APsystems, EcoFlow, Anker et Zendure peuvent être lus localement via Modbus, MQTT ou une API locale et intégrés à Home Assistant, gardant vos données de production hors des serveurs du fabricant.' },
    { q: 'Le solaire de balcon est-il légal là où je vis ?', a: 'Consultez le guide pays par pays de ce cluster — le statut légal va du cadre pleinement codifié (Allemagne, Portugal, France) à la simple notification (Autriche, Belgique, Pays-Bas), en passant par des marchés naissants ou non réglementés (Émirats arabes unis, Arabie saoudite, Brésil, Japon, Bahreïn, Taïwan) jusqu\'à une réglementation État par État (États-Unis).' },
  ],
  ja: [
    { q: 'バルコニーソーラー（Balkonkraftwerk）とは何ですか？', a: '通常1〜2枚のパネルと小型マイクロインバーターで構成され、家庭用コンセントや専用コネクタに直接接続できるプラグイン式の太陽光発電システムです。ほとんどの市場で屋根工事や電気工事士なしに自家消費用の電力を発電できます。' },
    { q: 'バルコニーソーラーの設置に許可は必要ですか？', a: '国によって異なります。フランス・オーストリア・ベルギー・オランダ・ドイツ・ポルトガルは小規模システムに対して簡易な届出のみで済みます。米国では現在8州に専用法があります。UAE・サウジアラビア・ブラジル・日本など専用の枠組みがまだない市場もあり、要件は様々です。' },
    { q: 'バルコニーソーラーキットの費用と投資回収期間はどれくらいですか？', a: '一般的なキットはパネル枚数・インバーターブランド・バッテリーの有無により数百ドル（ユーロ）から千ドル（ユーロ）程度です。投資回収期間は地域の電気料金と自家消費率次第で、一般的に2〜5年程度です。' },
    { q: 'メーカーのクラウドアプリを使わずにバルコニーソーラーを監視できますか？', a: 'はい、主要ブランドのほとんどで可能です——Hoymiles・Deye・APsystems・EcoFlow・Anker・Zendureのインバーターやバッテリーは、Modbus・MQTT・ローカルAPI経由でローカルに読み取り、Home Assistantに取り込むことができ、発電データがベンダーのサーバーに送られるのを防げます。' },
    { q: '自分の住んでいる場所でバルコニーソーラーは合法ですか？', a: 'このクラスター内の国別ガイドをご確認ください——法的状況は、完全に成文化された国（ドイツ・ポルトガル・フランス）から、届出制のみの国（オーストリア・ベルギー・オランダ）、まだ枠組みが未整備または未対応の国（UAE・サウジアラビア・ブラジル・日本・バーレーン・台湾）、そして州ごとに異なる米国まで多岐にわたります。' },
  ],
  zh: [
    { q: '什么是阳台光伏（Balkonkraftwerk）？', a: '一种插入式太阳能系统——通常由一到两块面板配一个小型微型逆变器组成——可直接接入家用插座或专用接口，在大多数市场无需屋顶安装或电工即可为自家用电发电。' },
    { q: '安装阳台光伏需要许可吗？', a: '这取决于所在国家。法国、奥地利、比利时、荷兰、德国和葡萄牙对小型系统仅要求简单备案；美国目前已有8个州出台专门法律；阿联酋、沙特阿拉伯、巴西、日本等一些市场尚无专门框架，因此要求各不相同。' },
    { q: '阳台光伏套件多少钱，回本需要多久？', a: '典型套件价格从几百到约一千美元/欧元不等，取决于面板数量、逆变器品牌以及是否含电池——回本周期通常为2到5年，具体取决于当地电价及自用比例。' },
    { q: '我能否在不使用厂商云端App的情况下监控我的阳台光伏系统？', a: '可以，大多数主流品牌都支持——Hoymiles、Deye、APsystems、EcoFlow、Anker和Zendure的逆变器与电池均可通过Modbus、MQTT或本地API本地读取，并接入Home Assistant，使发电数据不经过厂商服务器。' },
    { q: '阳台光伏在我所在地是否合法？', a: '请查阅本专题内的各国指南——法律状态从完全成文（德国、葡萄牙、法国）到仅需备案（奥地利、比利时、荷兰），再到尚属新兴或无明确规定（阿联酋、沙特阿拉伯、巴西、日本、巴林、台湾），以及按州各异（美国），情况各不相同。' },
  ],
  es: [
    { q: '¿Qué es la energía solar de balcón (Balkonkraftwerk)?', a: 'Un sistema solar enchufable — normalmente uno o dos paneles alimentando un pequeño microinversor — que se conecta directamente a un enchufe doméstico o a un conector dedicado, generando electricidad para autoconsumo sin instalación en tejado ni electricista en la mayoría de mercados.' },
    { q: '¿Necesito un permiso para instalar energía solar de balcón?', a: 'Depende del país. Francia, Austria, Bélgica, los Países Bajos, Alemania y Portugal usan un simple registro por notificación para sistemas pequeños; EE. UU. ya cuenta con 8 estados con leyes dedicadas; otros mercados — los Emiratos Árabes Unidos, Arabia Saudita, Brasil, Japón — aún no tienen un marco dedicado, por lo que los requisitos varían.' },
    { q: '¿Cuánto cuesta un kit de energía solar de balcón, y cuál es el plazo de amortización?', a: 'Los kits típicos van desde unos pocos cientos hasta cerca de mil dólares o euros según el número de paneles, la marca del inversor y si incluye batería — la amortización suele situarse entre 2 y 5 años según el precio local de la electricidad y cuánta producción autoconsumes.' },
    { q: '¿Puedo monitorizar mi sistema de energía solar de balcón sin la app en la nube del fabricante?', a: 'Sí, para la mayoría de las marcas principales — los inversores y baterías de Hoymiles, Deye, APsystems, EcoFlow, Anker y Zendure pueden leerse localmente vía Modbus, MQTT o una API local e integrarse en Home Assistant, manteniendo tus datos de producción fuera de los servidores del fabricante.' },
    { q: '¿Es legal la energía solar de balcón donde vivo?', a: 'Consulta la guía país por país de este clúster — el estado legal va desde plenamente codificado (Alemania, Portugal, Francia) hasta simple notificación (Austria, Bélgica, Países Bajos), pasando por mercados incipientes o sin regular (Emiratos Árabes Unidos, Arabia Saudita, Brasil, Japón, Baréin, Taiwán) y regulación estado por estado (EE. UU.).' },
  ],
  pt: [
    { q: 'O que é energia solar de varanda (Balkonkraftwerk)?', a: 'Um sistema solar plug-and-play — geralmente um ou dois painéis alimentando um pequeno microinversor — que se conecta diretamente a uma tomada residencial ou a um conector dedicado, gerando energia para autoconsumo sem instalação no telhado nem eletricista na maioria dos mercados.' },
    { q: 'Preciso de licença para instalar energia solar de varanda?', a: 'Depende do país. França, Áustria, Bélgica, Países Baixos, Alemanha e Portugal usam apenas um registro simples por notificação para sistemas pequenos; os EUA já têm 8 estados com leis próprias; outros mercados — Emirados Árabes Unidos, Arábia Saudita, Brasil, Japão — ainda não têm um marco dedicado, então os requisitos variam.' },
    { q: 'Quanto custa um kit de energia solar de varanda, e qual é o prazo de retorno?', a: 'Kits típicos custam de algumas centenas a cerca de mil dólares ou euros, dependendo do número de painéis, da marca do inversor e da presença de bateria — o retorno costuma ficar entre 2 e 5 anos, dependendo do preço local da eletricidade e de quanto da produção você consome.' },
    { q: 'Posso monitorar meu sistema de energia solar de varanda sem o aplicativo na nuvem do fabricante?', a: 'Sim, para a maioria das grandes marcas — inversores e baterias da Hoymiles, Deye, APsystems, EcoFlow, Anker e Zendure podem ser lidos localmente via Modbus, MQTT ou uma API local e integrados ao Home Assistant, mantendo seus dados de produção fora dos servidores do fabricante.' },
    { q: 'A energia solar de varanda é legal onde eu moro?', a: 'Consulte o guia país por país deste cluster — o status legal varia de totalmente codificado (Alemanha, Portugal, França) a apenas notificação (Áustria, Bélgica, Países Baixos), passando por mercados incipientes ou sem regulamentação (Emirados Árabes Unidos, Arábia Saudita, Brasil, Japão, Bahrein, Taiwan) até regulamentação estado a estado (EUA).' },
  ],
  ar: [
    { q: 'ما هي الطاقة الشمسية للشرفة (Balkonkraftwerk)؟', a: 'نظام شمسي قابل للتوصيل المباشر — عادةً لوح أو لوحان يغذيان عاكسًا دقيقًا صغيرًا — يتصل مباشرة بمقبس كهربائي منزلي أو موصل مخصص، وينتج كهرباء للاستهلاك الذاتي دون الحاجة لتركيب على السطح أو فني كهربائي في معظم الأسواق.' },
    { q: 'هل أحتاج إلى تصريح لتركيب طاقة شمسية للشرفة؟', a: 'يعتمد ذلك على الدولة. تستخدم فرنسا والنمسا وبلجيكا وهولندا وألمانيا والبرتغال تسجيلاً بالإخطار فقط للأنظمة الصغيرة؛ ولدى الولايات المتحدة الآن 8 ولايات لديها قوانين مخصصة؛ بينما لا تزال أسواق أخرى — الإمارات والسعودية والبرازيل واليابان — بلا إطار مخصص، لذا تختلف المتطلبات.' },
    { q: 'كم تكلفة طقم الطاقة الشمسية للشرفة، وما هي مدة استرداد التكلفة؟', a: 'تتراوح تكلفة الأطقم النموذجية بين بضع مئات وحوالي ألف دولار أو يورو حسب عدد الألواح وماركة العاكس ووجود بطارية من عدمها — وعادةً ما تتراوح مدة استرداد التكلفة بين 2 و5 سنوات حسب أسعار الكهرباء المحلية ونسبة الاستهلاك الذاتي.' },
    { q: 'هل يمكنني مراقبة نظام الطاقة الشمسية للشرفة دون تطبيق السحابة الخاص بالشركة المصنعة؟', a: 'نعم، بالنسبة لمعظم العلامات التجارية الكبرى — يمكن قراءة عواكس وبطاريات Hoymiles وDeye وAPsystems وEcoFlow وAnker وZendure محليًا عبر Modbus أو MQTT أو واجهة برمجية محلية ودمجها في Home Assistant، مما يبقي بيانات الإنتاج بعيدًا عن خوادم الشركة المصنعة.' },
    { q: 'هل الطاقة الشمسية للشرفة قانونية في مكان إقامتي؟', a: 'راجع الدليل الخاص بكل دولة في هذه المجموعة — يتراوح الوضع القانوني بين مقنن بالكامل (ألمانيا والبرتغال وفرنسا)، وقائم على الإخطار فقط (النمسا وبلجيكا وهولندا)، وناشئ أو غير محدد (الإمارات والسعودية والبرازيل واليابان والبحرين وتايوان)، وحتى منظم على مستوى كل ولاية (الولايات المتحدة).' },
  ],
  ko: [
    { q: '발코니 태양광(Balkonkraftwerk)이란 무엇인가요?', a: '보통 한두 개의 패널과 소형 마이크로인버터로 구성되어 가정용 콘센트나 전용 커넥터에 직접 연결하는 플러그인 태양광 시스템으로, 대부분의 시장에서 지붕 공사나 전기기사 없이 자가소비용 전력을 생산합니다.' },
    { q: '발코니 태양광 설치에 허가가 필요한가요?', a: '국가마다 다릅니다. 프랑스, 오스트리아, 벨기에, 네덜란드, 독일, 포르투갈은 소형 시스템에 대해 단순 신고 등록만 요구합니다. 미국은 현재 8개 주가 전용 법률을 갖추고 있습니다. UAE, 사우디아라비아, 브라질, 일본 등 일부 시장은 아직 전용 규정이 없어 요건이 다양합니다.' },
    { q: '발코니 태양광 키트 가격과 투자 회수 기간은 어느 정도인가요?', a: '일반적인 키트는 패널 수, 인버터 브랜드, 배터리 포함 여부에 따라 수백에서 약 천 달러/유로 수준입니다. 투자 회수 기간은 현지 전기 요금과 자가소비 비율에 따라 보통 2~5년입니다.' },
    { q: '제조사의 클라우드 앱 없이 발코니 태양광 시스템을 모니터링할 수 있나요?', a: '네, 대부분의 주요 브랜드에서 가능합니다 — Hoymiles, Deye, APsystems, EcoFlow, Anker, Zendure의 인버터와 배터리는 Modbus, MQTT 또는 로컬 API를 통해 로컬에서 읽어 Home Assistant에 연동할 수 있어, 발전 데이터가 제조사 서버로 전송되지 않습니다.' },
    { q: '제가 사는 곳에서 발코니 태양광은 합법인가요?', a: '이 클러스터의 국가별 가이드를 확인하세요 — 법적 상태는 완전히 성문화된 경우(독일, 포르투갈, 프랑스)부터 신고제만 있는 경우(오스트리아, 벨기에, 네덜란드), 아직 초기 단계이거나 규정이 없는 경우(UAE, 사우디아라비아, 브라질, 일본, 바레인, 대만), 그리고 주(州)별로 다른 미국까지 다양합니다.' },
  ],
}

const HUB_FAQ_HEADING: Partial<Record<Lang, string>> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  ar: 'الأسئلة الشائعة',
  ko: '자주 묻는 질문',
}

const HUB_REVIEWED_LABEL: Partial<Record<Lang, string>> = {
  en: 'Content last reviewed:',
  de: 'Inhalt zuletzt geprüft:',
  fr: 'Contenu vérifié pour la dernière fois:',
  ja: 'コンテンツの最終確認日:',
  zh: '内容最后审核于:',
  es: 'Contenido revisado por última vez:',
  pt: 'Conteúdo revisado pela última vez em:',
  ar: 'آخر مراجعة للمحتوى:',
  ko: '콘텐츠 최종 검토일:',
}

// Most recent dateModified across all balcony-solar articles (EN block, always present).
// Used as the hub's "content last reviewed" date — the hub itself has no article body to date.
function latestBalconySolarDateModified(): string | undefined {
  const dates = Object.values(balconySolarContent)
    .map((article) => (article?.en as any)?.dateModified ?? article?.en?.publishDate)
    .filter((d): d is string => !!d)
  return dates.sort().at(-1)
}

const HUB_RELATED_LABEL: Partial<Record<Lang, string>> = {
  en: 'Related guides',
  de: 'Weitere Guides',
  fr: 'Guides associés',
  ja: '関連ガイド',
  zh: '相关指南',
  es: 'Guías relacionadas',
  pt: 'Guias relacionados',
  ar: 'أدلة ذات صلة',
  ko: '관련 가이드',
}

const HUB_RELATED_LINKS: Partial<Record<Lang, { label: string; path: string }[]>> = {
  en: [
    { label: 'Smart Home', path: '/smart-home' },
    { label: 'Local LLMs', path: '/local-llms' },
    { label: 'Power Local LLM', path: '/power-local-llm' },
  ],
  de: [
    { label: 'Smart Home', path: '/de/smart-home' },
    { label: 'Lokale LLMs', path: '/de/local-llms' },
    { label: 'Power Local LLM', path: '/de/power-local-llm' },
  ],
  fr: [
    { label: 'Smart Home', path: '/fr/smart-home' },
    { label: 'LLMs locaux', path: '/fr/local-llms' },
    { label: 'Power Local LLM', path: '/fr/power-local-llm' },
  ],
  ja: [
    { label: 'Smart Home', path: '/ja/smart-home' },
    { label: 'ローカルLLM', path: '/ja/local-llms' },
    { label: 'Power Local LLM', path: '/ja/power-local-llm' },
  ],
  zh: [
    { label: 'Smart Home', path: '/zh/smart-home' },
    { label: '本地大模型', path: '/zh/local-llms' },
    { label: 'Power Local LLM', path: '/zh/power-local-llm' },
  ],
  es: [
    { label: 'Smart Home', path: '/es/smart-home' },
    { label: 'LLMs locales', path: '/es/local-llms' },
    { label: 'Power Local LLM', path: '/es/power-local-llm' },
  ],
  pt: [
    { label: 'Smart Home', path: '/pt/smart-home' },
    { label: 'LLMs locais', path: '/pt/local-llms' },
    { label: 'Power Local LLM', path: '/pt/power-local-llm' },
  ],
  ar: [
    { label: 'Smart Home', path: '/ar/smart-home' },
    { label: 'نماذج اللغة المحلية', path: '/ar/local-llms' },
    { label: 'Power Local LLM', path: '/ar/power-local-llm' },
  ],
  ko: [
    { label: 'Smart Home', path: '/ko/smart-home' },
    { label: '로컬 LLM', path: '/ko/local-llms' },
    { label: 'Power Local LLM', path: '/ko/power-local-llm' },
  ],
}

const HUB_WAITLIST_CTA_LABEL: Partial<Record<Lang, string>> = {
  en: 'Join the PromptQuorum Waitlist',
  de: 'PromptQuorum-Warteliste beitreten',
  fr: "Rejoindre la liste d'attente PromptQuorum",
  ja: 'PromptQuorumのウェイトリストに参加',
  zh: '加入 PromptQuorum 候补名单',
  es: 'Únete a la lista de espera de PromptQuorum',
  pt: 'Entre na lista de espera do PromptQuorum',
  ar: 'انضم إلى قائمة انتظار PromptQuorum',
  ko: 'PromptQuorum 대기자 명단 참여',
}

const HUB_PRESENTATION_URL = '/presentations/balcony-solar-overview-static.html'

const HUB_PRESENTATION_DESCRIPTION: Partial<Record<Lang, string>> = {
  en: 'The slide deck below covers: why balcony solar beats rooftop installation for cost and speed (plug-and-play, no electrician, fast payback), the core stack (panel, micro-inverter, optional battery, and Home Assistant for cloud-free monitoring), the EU\'s converging 800W standard versus Greece\'s stricter zero-feed-in design, and a hardware buying matrix for kits, batteries, and micro-inverters by brand. Download the PDF as a balcony solar planning reference.',
  de: 'Das Foliendeck behandelt: warum ein Balkonkraftwerk bei Kosten und Geschwindigkeit gegenüber einer Dachanlage gewinnt (steckerfertig, kein Elektriker, schnelle Amortisation), den Kern-Stack (Modul, Mikrowechselrichter, optionaler Speicher und Home Assistant für cloudfreie Überwachung), den sich angleichenden 800-Watt-Standard in der EU gegenüber Griechenlands strengerem Zero-Feed-in-Modell sowie eine Kaufmatrix für Sets, Speicher und Mikrowechselrichter nach Marke. PDF als Planungsreferenz für Balkonkraftwerke herunterladen.',
  fr: 'Le diaporama ci-dessous couvre : pourquoi le solaire de balcon l\'emporte sur une installation en toiture en coût et en rapidité (prêt à brancher, sans électricien, rentabilité rapide), la pile technique de base (panneau, micro-onduleur, batterie optionnelle et Home Assistant pour un suivi sans cloud), la convergence vers un standard de 800 W dans l\'UE face au modèle plus strict de zéro injection en Grèce, et une matrice d\'achat pour les kits, batteries et micro-onduleurs par marque. Téléchargez le PDF comme référence de planification pour le solaire de balcon.',
  ja: '以下のスライドデッキは次をカバーします：バルコニーソーラーが屋根設置よりコストと速さで優れている理由（差し込むだけ、電気工事士不要、早期回収）、コアスタック（パネル、マイクロインバーター、オプションのバッテリー、クラウド不要の監視を実現するHome Assistant）、EUで収束しつつある800W標準とギリシャのより厳格なゼロフィードイン方式の比較、そしてブランド別のキット・バッテリー・マイクロインバーター購入比較表です。PDFをバルコニーソーラー計画のリファレンスとしてダウンロードしてください。',
  zh: '以下幻灯片涵盖：为什么阳台光伏在成本和速度上优于屋顶安装（即插即用、无需电工、回本快），核心技术栈（面板、微型逆变器、可选电池，以及实现无云端监控的Home Assistant），欧盟正在趋同的800W标准与希腊更严格的零馈网方案的对比，以及按品牌划分的套件、电池与微型逆变器购买对比表。下载PDF作为阳台光伏规划参考。',
  es: 'El deck de diapositivas a continuación cubre: por qué la energía solar de balcón supera a la instalación en tejado en coste y rapidez (listo para enchufar, sin electricista, amortización rápida), la pila básica (panel, microinversor, batería opcional y Home Assistant para una monitorización sin nube), la convergencia hacia un estándar de 800 W en la UE frente al modelo más estricto de cero inyección de Grecia, y una matriz de compra de kits, baterías y microinversores por marca. Descarga el PDF como referencia de planificación para energía solar de balcón.',
  pt: 'O conjunto de slides abaixo aborda: por que a energia solar de varanda supera a instalação no telhado em custo e velocidade (plug-and-play, sem eletricista, retorno rápido), a pilha central (painel, microinversor, bateria opcional e Home Assistant para monitoramento sem nuvem), a convergência para um padrão de 800 W na UE frente ao modelo mais rígido de zero injeção da Grécia, e uma matriz de compra de kits, baterias e microinversores por marca. Baixe o PDF como referência de planejamento para energia solar de varanda.',
  ar: 'يغطي عرض الشرائح أدناه: لماذا تتفوق الطاقة الشمسية للشرفة على التركيب على السطح من حيث التكلفة والسرعة (جاهزة للتوصيل، دون كهربائي، عائد سريع)، والمنظومة الأساسية (اللوح، العاكس الدقيق، البطارية الاختيارية، وHome Assistant للمراقبة دون سحابة)، وتقارب معيار 800 واط في الاتحاد الأوروبي مقابل نموذج اليونان الأكثر صرامة بلا تغذية عكسية، ومصفوفة شراء للأطقم والبطاريات والعواكس الدقيقة حسب العلامة التجارية. حمّل ملف PDF كمرجع للتخطيط للطاقة الشمسية للشرفة.',
  ko: '아래 슬라이드 덱은 다음을 다룹니다: 발코니 태양광이 비용과 속도 면에서 지붕 설치보다 나은 이유(플러그 앤 플레이, 전기기사 불필요, 빠른 투자 회수), 핵심 스택(패널, 마이크로인버터, 선택적 배터리, 클라우드 없는 모니터링을 위한 Home Assistant), EU에서 수렴 중인 800W 표준과 그리스의 더 엄격한 제로 피드인 방식 비교, 그리고 브랜드별 키트·배터리·마이크로인버터 구매 비교표. 발코니 태양광 계획 참고 자료로 PDF를 다운로드하세요.',
}

function renderHub(lang: Lang) {
  const copy = HUB_COPY[lang] ?? HUB_COPY['en']!
  const hubTitle = copy.title
  const hubIntro = copy.intro
  const reviewedDate = latestBalconySolarDateModified()
  const faq = HUB_FAQ[lang] ?? HUB_FAQ['en']!
  const relatedLinks = HUB_RELATED_LINKS[lang] ?? HUB_RELATED_LINKS['en']!

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-6">
          Balcony Solar
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-5">{hubTitle}</h1>
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-4">{hubIntro}</p>
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">{copy.intro2}</p>
        {reviewedDate && (
          <time
            dateTime={reviewedDate}
            className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-10"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {HUB_REVIEWED_LABEL[lang] ?? HUB_REVIEWED_LABEL['en']} {formatDisplayDate(reviewedDate, lang as any)}
          </time>
        )}

        <img
          src={`/images/balcony-solar-hub-overview-hero-${lang}.webp`}
          alt={hubTitle}
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl border border-primary/10 mb-10"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {copy.benefits.map((benefit) => (
            <div key={benefit.label} className="border border-primary/15 bg-card rounded-xl px-5 py-4">
              <div className="text-sm font-bold text-primary mb-1">{benefit.label}</div>
              <div className="text-sm text-text-secondary leading-relaxed">{benefit.detail}</div>
            </div>
          ))}
        </div>

        <section className="mb-14">
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-4">
            {HUB_PRESENTATION_DESCRIPTION[lang] ?? HUB_PRESENTATION_DESCRIPTION['en']}
          </p>
          <iframe
            src={`${HUB_PRESENTATION_URL}?lang=${lang}`}
            title="Balcony Solar Overview"
            className="w-full aspect-video rounded-xl border border-primary/15"
            loading="lazy"
          />
        </section>

        <div className="space-y-14 mb-14">
          {HUB_THEMES.map((theme) => (
            <section key={theme.id}>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-3 ${theme.colorBadge}`}>
                {CATEGORY_COPY[lang]?.[theme.id]?.badge ?? theme.badge}
              </span>
              <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
                {CATEGORY_COPY[lang]?.[theme.id]?.description ?? theme.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {theme.slugs.map((slug) => {
                  const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
                  const articleData = key ? balconySolarContent[key] : undefined
                  const enArticle = articleData?.['en']
                  const article = articleData?.[lang] ?? enArticle
                  const showNew = isNewArticle(enArticle?.publishDate)
                  const showUpdated = !showNew && isUpdatedArticle(enArticle?.publishDate, enArticle?.dateModified)
                  return (
                    <div key={slug} className={`relative rounded-xl ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}`}>
                      {showNew && (
                        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-md rounded px-2.5 py-0.5 z-10">
                          {NEW_LABEL[lang] ?? NEW_LABEL['en']}
                        </span>
                      )}
                      {showUpdated && (
                        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-amber-500 border-2 border-amber-300 shadow-md rounded px-2.5 py-0.5 z-10">
                          {UPDATED_LABEL[lang] ?? UPDATED_LABEL['en']}
                        </span>
                      )}
                      <Link
                        href={balconySolarArticlePath(lang, slug)}
                        className={`group flex items-start gap-3 bg-card rounded-xl px-5 py-4 transition-colors ${showNew ? 'border-2 border-emerald-400 hover:border-emerald-500' : showUpdated ? 'border-2 border-amber-400 hover:border-amber-500' : 'border border-primary/15 hover:border-primary/40'}`}
                      >
                        <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${theme.colorDot}`} />
                        <div>
                          <div className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                            {article?.title ?? enArticle?.title ?? slugToTitle(slug)}
                          </div>
                          {article?.intro && (
                            <p className="text-xs text-text-secondary leading-relaxed mt-1 line-clamp-2">{article.intro}</p>
                          )}
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-text-primary mb-6">{HUB_FAQ_HEADING[lang] ?? HUB_FAQ_HEADING['en']}</h2>
          <div className="space-y-6">
            {faq.map((entry) => (
              <div key={entry.q}>
                <div className="font-semibold text-text-primary mb-1">{entry.q}</div>
                <p className="text-text-secondary leading-relaxed">{entry.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">
            {HUB_RELATED_LABEL[lang] ?? HUB_RELATED_LABEL['en']}
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="px-4 py-2 border border-primary/15 bg-card rounded-lg text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <BalconySolarWaitlistCTA label={HUB_WAITLIST_CTA_LABEL[lang] ?? HUB_WAITLIST_CTA_LABEL['en']!} />
      </div>
    </div>
  )
}

export async function buildHubPageElement(lang: Lang) {
  const canonicalUrl = `${BASE}${balconySolarHubPath(lang)}`
  const faq = HUB_FAQ[lang] ?? HUB_FAQ['en']!

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: HUB_COPY[lang]?.title ?? HUB_COPY['en']!.title,
    description: (HUB_COPY[lang] ?? HUB_COPY['en']!).intro,
    url: canonicalUrl,
    inLanguage: lang,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: HUB_LABEL, item: canonicalUrl },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: HUB_COPY[lang]?.title ?? HUB_COPY['en']!.title,
    itemListElement: HUB_THEMES.flatMap((theme) => theme.slugs).map((slug, i) => {
      const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
      const articleData = key ? balconySolarContent[key] : undefined
      const article = articleData?.[lang] ?? articleData?.['en']
      return {
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${balconySolarArticlePath(lang, slug)}`,
        name: article?.title ?? slugToTitle(slug),
      }
    }),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: entry.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {renderHub(lang)}
    </>
  )
}

// ─── COMING SOON RENDERER ─────────────────────────────────────────────────

function renderComingSoon({ slug, lang, kind }: { slug?: string; lang: Lang; kind: 'article' | 'hub' }) {
  const copy = (COMING_SOON_COPY[lang] ?? COMING_SOON_COPY['en'])!
  const title = slug ? slugToTitle(slug) : HUB_LABEL
  const enHref = slug ? balconySolarArticlePath('en', slug) : balconySolarHubPath('en')
  const body = kind === 'article' ? copy.bodyArticle : copy.bodyHub
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
          {copy.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">{body}</p>
        <Link
          href={enHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          {copy.back}
        </Link>
      </div>
    </div>
  )
}
