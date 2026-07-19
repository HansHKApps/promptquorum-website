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
import { balconySolarContent } from './content'
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'
import { BALCONY_SOLAR_CATEGORIES } from './categories'
import { balconySolarAlternates, balconySolarHubPath, balconySolarArticlePath } from './metadata-helpers'
import { isBalconySolarArticlePublished, isBalconySolarHubPublished } from './published'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'

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
        'https://bsky.app/profile/hhkbluesky.bsky.social',
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
      <BalconySolarPostClient slug={slug} lang={lang} />
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
    }
    return {
      id: cat.id,
      badge: cat.titleEn,
      description: cat.descriptionEn,
      ...palette[cat.id],
      slugs: cat.articleSlugs,
    }
  })

const HUB_COPY: Partial<Record<Lang, { title: string; intro: string }>> = {
  en: {
    title: 'Balcony Solar: Kits, Rules, and No-Cloud Setups',
    intro: 'Plug-in balcony solar (Balkonkraftwerk) lets you generate your own power from a railing, wall, or garden panel — no rooftop installer required. These 20 guides cover the stack: the best kits, batteries, and micro-inverters, legality by country, installation and registration, and running the whole setup on Home Assistant instead of a vendor cloud.',
  },
  de: {
    title: 'Balcony Solar: Sets, Regeln und Setups ohne Cloud',
    intro: 'Ein Steckersolargerät (Balkonkraftwerk) erzeugt eigenen Strom vom Balkongeländer, der Wand oder dem Garten — ganz ohne Dachinstallateur. Diese 20 Guides decken den gesamten Stack ab: die besten Sets, Speicher und Mikrowechselrichter, die Rechtslage je Land, Installation und Anmeldung sowie den Betrieb über Home Assistant statt einer Hersteller-Cloud.',
  },
  fr: {
    title: 'Balcony Solar : kits, réglementation et installations sans cloud',
    intro: 'Un kit solaire de balcon (Balkonkraftwerk) permet de produire sa propre électricité depuis une rambarde, un mur ou un jardin, sans installateur de toiture. Ces 20 guides couvrent toute la pile : les meilleurs kits, batteries et micro-onduleurs, la légalité par pays, l\'installation et l\'enregistrement, et le pilotage via Home Assistant plutôt qu\'un cloud propriétaire.',
  },
  ja: {
    title: 'Balcony Solar：キット、ルール、クラウド不要のセットアップ',
    intro: 'プラグイン式バルコニーソーラー（Balkonkraftwerk）は、手すりや壁、庭のパネルから自家発電できる仕組みで、屋根への設置業者は不要です。この20本のガイドで、ベストなキット・バッテリー・マイクロインバーター、国ごとの合法性、設置と登録、そしてベンダーのクラウドではなくHome Assistantで運用する方法までをカバーします。',
  },
  zh: {
    title: 'Balcony Solar：套件、法规与无云端方案',
    intro: '插入式阳台光伏（Balkonkraftwerk）让您可以在栏杆、墙面或庭院面板上自行发电，无需屋顶安装工。这20篇指南覆盖完整技术栈：最佳套件、电池与微型逆变器，各国合法性，安装与注册，以及使用Home Assistant而非厂商云端来运行整套系统。',
  },
  es: {
    title: 'Balcony Solar: kits, normativa y montajes sin nube',
    intro: 'Un kit solar de balcón (Balkonkraftwerk) permite generar tu propia electricidad desde una barandilla, una pared o un panel de jardín, sin instalador de tejado. Estas 20 guías cubren toda la pila: los mejores kits, baterías y microinversores, la legalidad por país, la instalación y el registro, y cómo controlarlo todo con Home Assistant en lugar de la nube del fabricante.',
  },
  pt: {
    title: 'Balcony Solar: kits, regras e configurações sem nuvem',
    intro: 'Um kit solar de varanda (Balkonkraftwerk) permite gerar sua própria energia a partir de uma grade, parede ou painel de jardim, sem instalador de telhado. Estes 20 guias cobrem toda a pilha: os melhores kits, baterias e microinversores, a legalidade por país, instalação e registro, e como controlar tudo com o Home Assistant em vez da nuvem do fabricante.',
  },
  ar: {
    title: 'Balcony Solar: الأطقم والقواعد والإعدادات بلا سحابة',
    intro: 'يتيح لك طقم الطاقة الشمسية للشرفة (Balkonkraftwerk) توليد الكهرباء الخاصة بك من درابزين أو جدار أو لوحة حديقة، دون الحاجة لفني تركيب أسطح. تغطي هذه الأدلة العشرون المنظومة الكاملة: أفضل الأطقم والبطاريات والمحولات الدقيقة، والوضع القانوني حسب الدولة، والتركيب والتسجيل، وتشغيل كل ذلك عبر Home Assistant بدلاً من سحابة الشركة المصنعة.',
  },
}

const CATEGORY_COPY: Partial<Record<Lang, Record<string, { badge: string; description: string }>>> = {
  en: {
    'hub-money':      { badge: 'Hub + Core Money Pages',        description: 'The cluster anchor and the primary buyer-intent guides: what balcony solar is, the best kits, batteries, and micro-inverters, and running it all without the cloud.' },
    'decision-howto': { badge: 'Decision & How-To',              description: 'Mid-funnel guides: balcony vs rooftop, installation, registration, sizing and payback, and mounting.' },
    'legislation':    { badge: 'Legislation Moat',                description: 'Per-country legal status: the global tracker plus dedicated pages for the US, Germany, Spain/LatAm, Portugal/Brazil, and the Gulf/MENA region.' },
    'long-tail':      { badge: 'Long-Tail & Conversion Support', description: 'Brand comparisons, battery need, payback worth-it framing, and troubleshooting.' },
  },
  de: {
    'hub-money':      { badge: 'Hub & Kern-Kaufseiten',          description: 'Der Ankerartikel und die wichtigsten kaufrelevanten Guides: was ein Balkonkraftwerk ist, die besten Sets, Speicher und Mikrowechselrichter, und der Betrieb ohne Cloud.' },
    'decision-howto': { badge: 'Entscheidung & Anleitung',        description: 'Guides für die mittlere Phase: Balkon vs. Dach, Installation, Anmeldung, Dimensionierung und Amortisation, Montage.' },
    'legislation':    { badge: 'Rechtslage nach Land',             description: 'Rechtlicher Status je Land: der globale Tracker sowie eigene Seiten für die USA, Deutschland, Spanien/LatAm, Portugal/Brasilien und die Golfregion/MENA.' },
    'long-tail':      { badge: 'Long-Tail & Kaufunterstützung',   description: 'Markenvergleiche, Speicherbedarf, Amortisations-Einordnung und Fehlerbehebung.' },
  },
  fr: {
    'hub-money':      { badge: 'Hub et pages d\'achat principales', description: 'La page pivot et les guides principaux à intention d\'achat : qu\'est-ce que le solaire de balcon, les meilleurs kits, batteries et micro-onduleurs, et le pilotage sans cloud.' },
    'decision-howto': { badge: 'Décision et guides pratiques',       description: 'Guides de milieu de tunnel : balcon vs toiture, installation, enregistrement, dimensionnement et rentabilité, fixation.' },
    'legislation':    { badge: 'Réglementation par pays',            description: 'Statut légal par pays : le tracker mondial ainsi que des pages dédiées aux États-Unis, à l\'Allemagne, à l\'Espagne/LatAm, au Portugal/Brésil et au Golfe/MENA.' },
    'long-tail':      { badge: 'Longue traîne et conversion',        description: 'Comparatifs de marques, besoin de batterie, rentabilité, et dépannage.' },
  },
  ja: {
    'hub-money':      { badge: 'ハブと主要マネーページ',              description: 'クラスターの起点と主要な購入意図ガイド：バルコニーソーラーとは何か、最良のキット・バッテリー・マイクロインバーター、そしてクラウドなしでの運用。' },
    'decision-howto': { badge: '意思決定とハウツー',                   description: '中間層のガイド：バルコニーvs屋根、設置、登録、サイジングと投資回収、取り付け。' },
    'legislation':    { badge: '国別法規制',                          description: '国ごとの法的状況：グローバルトラッカーに加え、米国、ドイツ、スペイン/ラテンアメリカ、ポルトガル/ブラジル、湾岸/MENA地域の専用ページ。' },
    'long-tail':      { badge: 'ロングテールとコンバージョン支援',        description: 'ブランド比較、バッテリーの必要性、投資回収の妥当性、トラブルシューティング。' },
  },
  zh: {
    'hub-money':      { badge: '枢纽与核心变现页',                    description: '集群锚点与主要购买意向指南：什么是阳台光伏、最佳套件/电池/微型逆变器，以及如何在无云端条件下运行。' },
    'decision-howto': { badge: '决策与操作指南',                       description: '中期漏斗指南：阳台vs屋顶、安装、注册、选型与回本周期、安装方式。' },
    'legislation':    { badge: '各国法规护城河',                       description: '各国法律状态：全球追踪页，以及美国、德国、西班牙/拉美、葡萄牙/巴西、海湾/中东北非地区的专属页面。' },
    'long-tail':      { badge: '长尾与转化支持',                       description: '品牌对比、电池必要性、回本值不值的分析，以及故障排查。' },
  },
  es: {
    'hub-money':      { badge: 'Hub y páginas de compra principales', description: 'La página ancla del clúster y las guías principales de intención de compra: qué es el solar de balcón, los mejores kits, baterías y microinversores, y su funcionamiento sin nube.' },
    'decision-howto': { badge: 'Decisión y guías prácticas',           description: 'Guías de mitad de embudo: balcón vs tejado, instalación, registro, dimensionamiento y amortización, montaje.' },
    'legislation':    { badge: 'Legislación por país',                 description: 'Estado legal por país: el rastreador global además de páginas dedicadas a EE. UU., Alemania, España/LatAm, Portugal/Brasil y el Golfo/MENA.' },
    'long-tail':      { badge: 'Cola larga y apoyo a la conversión',   description: 'Comparativas de marcas, necesidad de batería, si compensa la inversión, y solución de problemas.' },
  },
  pt: {
    'hub-money':      { badge: 'Hub e páginas principais de compra', description: 'A página âncora do cluster e os principais guias de intenção de compra: o que é o solar de varanda, os melhores kits, baterias e microinversores, e o funcionamento sem nuvem.' },
    'decision-howto': { badge: 'Decisão e guias práticos',            description: 'Guias de meio de funil: varanda vs telhado, instalação, registo, dimensionamento e retorno, montagem.' },
    'legislation':    { badge: 'Legislação por país',                  description: 'Estado legal por país: o rastreador global além de páginas dedicadas aos EUA, Alemanha, Espanha/LatAm, Portugal/Brasil e Golfo/MENA.' },
    'long-tail':      { badge: 'Cauda longa e apoio à conversão',      description: 'Comparações de marcas, necessidade de bateria, se vale a pena o retorno, e resolução de problemas.' },
  },
  ar: {
    'hub-money':      { badge: 'المركز وصفحات الشراء الأساسية',       description: 'الصفحة المحورية للمجموعة والأدلة الرئيسية لنية الشراء: ما هي الطاقة الشمسية للشرفة، وأفضل الأطقم والبطاريات والمحولات الدقيقة، وتشغيلها دون سحابة.' },
    'decision-howto': { badge: 'القرار والإرشادات العملية',            description: 'أدلة منتصف القمع: الشرفة مقابل السطح، التركيب، التسجيل، تحديد الحجم والعائد، التثبيت.' },
    'legislation':    { badge: 'الوضع القانوني حسب الدولة',            description: 'الوضع القانوني حسب الدولة: المتتبع العالمي بالإضافة إلى صفحات مخصصة للولايات المتحدة وألمانيا وإسبانيا/أمريكا اللاتينية والبرتغال/البرازيل والخليج/منطقة الشرق الأوسط وشمال أفريقيا.' },
    'long-tail':      { badge: 'الذيل الطويل ودعم التحويل',            description: 'مقارنات العلامات التجارية، الحاجة إلى بطارية، جدوى العائد، واستكشاف الأخطاء وإصلاحها.' },
  },
}

function renderHub(lang: Lang) {
  const copy = HUB_COPY[lang] ?? HUB_COPY['en']!
  const hubTitle = copy.title
  const hubIntro = copy.intro

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-6">
          Balcony Solar
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-5">{hubTitle}</h1>
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-14">{hubIntro}</p>

        <div className="space-y-14">
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
                        <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                          {articleData?.[lang]?.title ?? enArticle?.title ?? slugToTitle(slug)}
                        </span>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function buildHubPageElement(lang: Lang) {
  return renderHub(lang)
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
