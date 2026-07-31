// Shared server-side rendering helpers for the Smart Home cluster.
// The EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/, /es/, /pt/, /ar/, /ko/) all
// call into here so the metadata + JSON-LD + page JSX logic lives in exactly one place.
//
// Mirrors the architecture of src/lib/power-local-llm/page-helpers.tsx:
//   - path-based locales (NOT ?lang=) via metadata-helpers.ts
//   - noindex contract driven by published.ts (index/follow once a slug is added there)
//   - auto-generated TechArticle + BreadcrumbList + FAQPage + HowTo + ItemList schema
//   - Coming-Soon fallback for any future slug without authored content
//
// LAUNCHED (all phases complete): all 30 articles are live across all 9 languages —
// see published.ts. The Coming-Soon renderer below stays as a safety net for any new
// slug added to the registry before its content lands.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { SmartHomePostClient } from '@/components/SmartHomePostClient'
import { SmartHomeWaitlistCTA } from '@/components/SmartHomeWaitlistCTA'
import { smartHomeContent } from './content'
import { SMART_HOME_SLUG_TO_KEY } from './slugs'
import { SMART_HOME_CATEGORIES } from './categories'
import { smartHomeAlternates, smartHomeHubPath, smartHomeArticlePath } from './metadata-helpers'
import { isSmartHomeArticlePublished, isSmartHomeHubPublished } from './published'
import { formatDisplayDate } from '@/lib/formatDisplayDate'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

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

const HUB_LABEL = 'Smart Home'

const SLUG_ACRONYMS: Record<string, string> = {
  ai: 'AI',
  llm: 'LLM',
  llms: 'LLMs',
  gdpr: 'GDPR',
  pc: 'PC',
  tts: 'TTS',
  stt: 'STT',
  nvr: 'NVR',
  x10: 'X10',
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
    bodyArticle: 'This Smart Home guide is being prepared. Explore the English version of the Smart Home hub in the meantime.',
    bodyHub: 'The Smart Home hub will be available in this language soon. Explore the English version below.',
    back: '← View English version',
  },
  de: {
    badge: 'Bald verfügbar',
    bodyArticle: 'Dieser Smart-Home-Leitfaden wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Smart-Home-Hubs.',
    bodyHub: 'Der Smart-Home-Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.',
    back: '← Englische Version ansehen',
  },
  fr: {
    badge: 'Bientôt disponible',
    bodyArticle: 'Ce guide Smart Home est en cours de préparation. Explorez la version anglaise du hub Smart Home en attendant.',
    bodyHub: 'Le hub Smart Home sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.',
    back: '← Voir la version anglaise',
  },
  ja: {
    badge: '近日公開',
    bodyArticle: 'このスマートホームガイドは準備中です。その間、スマートホームハブの英語版をご覧ください。',
    bodyHub: 'スマートホームハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。',
    back: '← 英語版を表示',
  },
  zh: {
    badge: '即将推出',
    bodyArticle: '本智能家居指南正在准备中。请同时浏览智能家居中心的英文版。',
    bodyHub: '智能家居中心即将推出此语言版本。请查看以下的英文版。',
    back: '← 查看英文版',
  },
  es: {
    badge: 'Próximamente',
    bodyArticle: 'Esta guía de Smart Home está en preparación. Explora la versión en inglés del centro Smart Home mientras tanto.',
    bodyHub: 'El centro Smart Home estará disponible en este idioma pronto. Consulta la versión en inglés a continuación.',
    back: '← Ver versión en inglés',
  },
  pt: {
    badge: 'Em breve',
    bodyArticle: 'Este guia de Smart Home está em preparação. Explore a versão em inglês do hub Smart Home enquanto isso.',
    bodyHub: 'O hub Smart Home estará disponível neste idioma em breve. Confira a versão em inglês abaixo.',
    back: '← Ver versão em inglês',
  },
  ar: {
    badge: 'قريباً',
    bodyArticle: 'يجري إعداد دليل المنزل الذكي هذا. استكشف النسخة الإنجليزية من مركز المنزل الذكي في هذه الأثناء.',
    bodyHub: 'سيتوفر مركز المنزل الذكي بهذه اللغة قريباً. استكشف النسخة الإنجليزية أدناه.',
    back: '← عرض النسخة الإنجليزية',
  },
  ko: {
    badge: '출시 예정',
    bodyArticle: '이 Smart Home 가이드를 준비 중입니다. 그동안 영어 버전 Smart Home 허브를 탐색하십시오.',
    bodyHub: 'Smart Home 허브가 곧 이 언어로 제공될 예정입니다. 아래에서 영어 버전을 확인하십시오.',
    back: '← 영어 버전 보기',
  },
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(SMART_HOME_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = SMART_HOME_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = smartHomeContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    article?.intro ??
    'A guide in the Smart Home cluster from PromptQuorum.'

  const isPublished = isSmartHomeArticlePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
    description: desc,
    alternates: smartHomeAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: article?.title ?? fallbackTitle,
      description: desc,
      url: `${BASE}${smartHomeArticlePath(lang, slug)}`,
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
  const key = SMART_HOME_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = smartHomeContent[key]
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
  const canonicalUrl = `${BASE}${smartHomeArticlePath(lang, slug)}`

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
      name: 'Smart Home Guide',
      url: `${BASE}${smartHomeHubPath(lang)}`,
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
      { '@type': 'ListItem', position: 2, name: HUB_LABEL, item: `${BASE}${smartHomeHubPath(lang)}` },
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
    .filter((s) => s.rows && s.rows.length > 0 && s.columns && s.columns.length > 0)
    // Column headers are localized (e.g. 'Link' in EN is 'Lien'/'Enlace'/'リンク' elsewhere), so detect
    // the link column by content (markdown URL pattern) rather than by matching the English header text.
    .map((s) => {
      const columns = s.columns!
      const linkCol = columns.find((col) => s.rows!.some((r) => mdUrlRe.test(r[col] ?? '')))
      if (!linkCol) return null
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: s.title ?? article.title,
        itemListElement: s.rows!.map((row, i) => {
          const urlMatch = (row[linkCol] ?? '').match(mdUrlRe)
          // The item-name column is 'Device'/'Tool' in EN; other locales translate the header,
          // so fall back to the conventional 2nd column (Category, Device, Link, Why) or the 1st.
          const nameVal = row['Device'] ?? row['Tool'] ?? row['Model'] ?? row[columns[1]] ?? row[columns[0]] ?? ''
          return {
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Thing',
              name: nameVal.replace(/\*\*/g, '').trim(),
              ...(urlMatch && { url: urlMatch[1] }),
              description: row['Description'] ?? '',
            },
          }
        }),
      }
    })
    .filter((s): s is NonNullable<typeof s> => s !== null)

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
      <SmartHomePostClient slug={slug} lang={lang} articleData={articleData!} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const title = 'Smart Home, Run Locally: Private Home Automation on a Local LLM (2026)'
  const desc =
    'Run your smart home on your own hardware, not the cloud. Home Assistant, Matter local control, fully local voice assistants, and Ollama-driven AI automation. 25 guides.'

  const isPublished = isSmartHomeHubPublished(lang)

  return {
    title: truncateTitle(title),
    description: desc,
    alternates: smartHomeAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title,
      description: desc,
      url: `${BASE}${smartHomeHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
      images: [{ url: `${BASE}/images/smart-home-hub-overview-hero-${lang}.png`, width: 1200, height: 675, alt: title }],
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

// Per-category visual + copy. Mirrors HUB_THEMES in power-local-llm/page-helpers.tsx:
// colored badge → question H2 → 2-col card grid. Colors match THEME_COLORS in
// SmartHomePostClient.tsx so article badges match the hub category badge.
const HUB_THEMES: Array<{ id: string; badge: string; description: string; colorBadge: string; colorDot: string; slugs: string[] }> =
  SMART_HOME_CATEGORIES.map((cat) => {
    const palette: Record<string, { colorBadge: string; colorDot: string }> = {
      foundations:          { colorBadge: 'bg-slate-50 text-slate-700 border-slate-200',     colorDot: 'bg-slate-400' },
      'local-first':        { colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200', colorDot: 'bg-emerald-400' },
      'local-ai':           { colorBadge: 'bg-violet-50 text-violet-700 border-violet-200',   colorDot: 'bg-violet-400' },
      'decision-comparison': { colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',     colorDot: 'bg-amber-400' },
      'energy-solar-integration':   { colorBadge: 'bg-sky-50 text-sky-700 border-sky-200',    colorDot: 'bg-sky-400' },
      'protocols-regulation-2027':  { colorBadge: 'bg-rose-50 text-rose-700 border-rose-200', colorDot: 'bg-rose-400' },
      'advanced-local-ai':          { colorBadge: 'bg-teal-50 text-teal-700 border-teal-200', colorDot: 'bg-teal-400' },
      'affiliate-buyers-guides':    { colorBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200', colorDot: 'bg-indigo-400' },
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
    title: 'Run Your Smart Home on a Local LLM, Not the Cloud',
    intro: 'A local-first smart home runs entirely on your own hardware: no cloud dependence, works offline, full privacy. These 25 guides cover the stack — Home Assistant, Matter and Thread, local voice (Whisper, Piper, Wyoming), and an Ollama-driven local LLM as the brain of your home.',
    intro2: 'Cloud-dependent smart home platforms route your voice recordings, camera footage, and daily routines through a manufacturer\'s servers — and stop working the moment that company changes its terms, raises prices, or shuts down the service. A local-first setup keeps that data on hardware you control and keeps automations running even without an internet connection.',
    benefits: [
      { label: 'Privacy', detail: 'Voice recordings, camera feeds, and routines stay on your network — never sent to a manufacturer\'s server.' },
      { label: 'No subscriptions', detail: 'One-time hardware cost. No monthly fees for automations, voice control, or camera storage.' },
      { label: 'Works offline', detail: 'Automations keep running during an internet outage, because the logic runs on your own hardware.' },
      { label: 'You own it', detail: 'No vendor can discontinue the app, change the terms, or brick your devices.' },
    ],
  },
  de: {
    title: 'Steuere dein Smart Home mit einem lokalen LLM, nicht in der Cloud',
    intro: 'Ein lokales Smart Home läuft vollständig auf deiner eigenen Hardware: keine Cloud-Abhängigkeit, funktioniert offline, volle Privatsphäre. Diese 25 Guides decken den gesamten Stack ab — Home Assistant, Matter und Thread, lokale Sprachsteuerung (Whisper, Piper, Wyoming) und ein Ollama-LLM als Gehirn deines Hauses.',
    intro2: 'Cloud-abhängige Smart-Home-Plattformen leiten Ihre Sprachaufnahmen, Kamerabilder und täglichen Routinen über die Server eines Herstellers — und funktionieren nicht mehr, sobald dieses Unternehmen die Bedingungen ändert, die Preise erhöht oder den Dienst einstellt. Ein lokales Setup behält diese Daten auf Hardware, die Sie selbst kontrollieren, und hält Automatisierungen auch ohne Internetverbindung am Laufen.',
    benefits: [
      { label: 'Privatsphäre', detail: 'Sprachaufnahmen, Kamerabilder und Automatisierungen bleiben in Ihrem Netzwerk — sie werden nie an den Server eines Herstellers gesendet.' },
      { label: 'Keine Abos', detail: 'Einmalige Hardwarekosten. Keine monatlichen Gebühren für Automatisierungen, Sprachsteuerung oder Kameraspeicher.' },
      { label: 'Funktioniert offline', detail: 'Automatisierungen laufen auch bei einem Internetausfall weiter, da die Logik auf Ihrer eigenen Hardware läuft.' },
      { label: 'Es gehört Ihnen', detail: 'Kein Hersteller kann die App einstellen, die Bedingungen ändern oder Ihre Geräte funktionsunfähig machen.' },
    ],
  },
  fr: {
    title: 'Pilotez votre maison connectée avec un LLM local, sans cloud',
    intro: 'Une maison connectée locale fonctionne entièrement sur votre propre matériel : pas de dépendance au cloud, fonctionne hors ligne, confidentialité totale. Ces 25 guides couvrent la pile complète — Home Assistant, Matter et Thread, assistants vocaux locaux (Whisper, Piper, Wyoming) et un LLM Ollama comme cerveau de votre maison.',
    intro2: 'Les plateformes domotiques dépendantes du cloud font transiter vos enregistrements vocaux, vos images de caméra et vos habitudes quotidiennes par les serveurs d\'un fabricant — et cessent de fonctionner dès que cette entreprise change ses conditions, augmente ses prix ou arrête le service. Une installation locale garde ces données sur du matériel que vous contrôlez et continue de faire tourner les automatisations même sans connexion Internet.',
    benefits: [
      { label: 'Confidentialité', detail: 'Les enregistrements vocaux, les images des caméras et les automatisations restent sur votre réseau — jamais envoyés au serveur d\'un fabricant.' },
      { label: 'Sans abonnement', detail: 'Coût matériel unique. Aucun frais mensuel pour les automatisations, la commande vocale ou le stockage des caméras.' },
      { label: 'Fonctionne hors ligne', detail: 'Les automatisations continuent de fonctionner pendant une panne Internet, car la logique tourne sur votre propre matériel.' },
      { label: 'Vous en êtes propriétaire', detail: 'Aucun fournisseur ne peut arrêter l\'application, changer les conditions ou rendre vos appareils inutilisables.' },
    ],
  },
  ja: {
    title: 'クラウドではなくローカルLLMでスマートホームを動かす',
    intro: 'ローカルファーストのスマートホームは、完全に自分のハードウェアで動作します。クラウド依存なし、オフライン動作、完全なプライバシー。この25本のガイドで、Home Assistant、MatterとThread、ローカル音声（Whisper、Piper、Wyoming）、そしてOllamaで動くLLMをすべてカバーします。',
    intro2: 'クラウド依存型のスマートホームプラットフォームは、音声録音・カメラ映像・毎日の生活パターンをメーカーのサーバーへ送信します。そのため、そのメーカーが規約を変更したり、価格を引き上げたり、サービスを終了したりした瞬間に使えなくなります。ローカルファーストの構成なら、そのデータを自分が管理するハードウェアに留め、インターネット接続がなくても自動化を動かし続けられます。',
    benefits: [
      { label: 'プライバシー', detail: '音声録音、カメラ映像、自動化ルーチンはすべてご自身のネットワーク内に留まり、メーカーのサーバーには送信されません。' },
      { label: 'サブスクリプション不要', detail: 'ハードウェア費用は一度だけ。自動化、音声操作、カメラ映像の保存に月額料金はかかりません。' },
      { label: 'オフラインでも動作', detail: 'ロジックが自分のハードウェア上で動くため、インターネット障害時も自動化が継続します。' },
      { label: '所有権はあなたに', detail: 'メーカーがアプリを終了したり、規約を変更したり、デバイスを使用不能にすることはできません。' },
    ],
  },
  zh: {
    title: '用本地大模型驱动智能家居，告别云端',
    intro: '本地优先的智能家居完全运行在您自己的硬件上：无云端依赖、离线可用、完全私密。这25篇指南覆盖完整技术栈——Home Assistant、Matter与Thread、本地语音助手（Whisper、Piper、Wyoming），以及由Ollama驱动的本地大模型。',
    intro2: '依赖云端的智能家居平台会将您的语音录音、摄像头画面和日常习惯发送到厂商服务器——一旦该公司更改条款、上调价格或关闭服务，一切便随之失效。本地优先的方案则把这些数据留在您自己掌控的硬件上，即使没有互联网连接，自动化也能持续运行。',
    benefits: [
      { label: '隐私保护', detail: '语音录音、摄像头画面和自动化流程都保留在您自己的网络中，绝不会发送到厂商服务器。' },
      { label: '无需订阅', detail: '一次性硬件投入。自动化、语音控制和摄像头存储均无月费。' },
      { label: '离线可用', detail: '由于运行逻辑就在您自己的硬件上，断网时自动化仍可继续运行。' },
      { label: '完全归你所有', detail: '没有厂商能够停用应用、更改条款或让您的设备变砖。' },
    ],
  },
  es: {
    title: 'Controla tu hogar inteligente con un LLM local, no en la nube',
    intro: 'Un hogar inteligente local funciona completamente en tu propio hardware: sin dependencia de la nube, funciona sin conexión, privacidad total. Estos 25 guías cubren toda la pila: Home Assistant, Matter y Thread, voz local (Whisper, Piper, Wyoming) y un LLM de Ollama como cerebro de tu hogar.',
    intro2: 'Las plataformas de hogar inteligente dependientes de la nube envían tus grabaciones de voz, imágenes de cámaras y rutinas diarias a los servidores de un fabricante, y dejan de funcionar en el momento en que esa empresa cambia sus condiciones, sube los precios o cierra el servicio. Una configuración local mantiene esos datos en hardware que tú controlas y sigue ejecutando automatizaciones incluso sin conexión a internet.',
    benefits: [
      { label: 'Privacidad', detail: 'Las grabaciones de voz, las imágenes de cámaras y las automatizaciones se quedan en tu red — nunca se envían al servidor de un fabricante.' },
      { label: 'Sin suscripciones', detail: 'Coste de hardware único. Sin cuotas mensuales por automatizaciones, control por voz o almacenamiento de cámaras.' },
      { label: 'Funciona sin conexión', detail: 'Las automatizaciones siguen funcionando durante un corte de internet, porque la lógica corre en tu propio hardware.' },
      { label: 'Es tuyo', detail: 'Ningún fabricante puede descontinuar la app, cambiar las condiciones o inutilizar tus dispositivos.' },
    ],
  },
  pt: {
    title: 'Execute sua casa inteligente em um LLM local, não na nuvem',
    intro: 'Uma casa inteligente local funciona inteiramente no seu próprio hardware: sem dependência de nuvem, funciona offline, privacidade total. Estes 25 guias cobrem toda a pilha — Home Assistant, Matter e Thread, voz local (Whisper, Piper, Wyoming) e um LLM com Ollama como o cérebro da sua casa.',
    intro2: 'As plataformas de casa inteligente dependentes da nuvem enviam suas gravações de voz, imagens de câmeras e rotinas diárias para os servidores de um fabricante — e param de funcionar assim que essa empresa muda os termos, aumenta os preços ou encerra o serviço. Uma configuração local mantém esses dados em hardware que você controla e continua executando automações mesmo sem conexão à internet.',
    benefits: [
      { label: 'Privacidade', detail: 'Gravações de voz, imagens de câmeras e automações ficam na sua rede — nunca são enviadas para o servidor de um fabricante.' },
      { label: 'Sem assinaturas', detail: 'Custo único de hardware. Sem mensalidades para automações, controle por voz ou armazenamento de câmeras.' },
      { label: 'Funciona offline', detail: 'As automações continuam funcionando durante uma queda de internet, porque a lógica roda no seu próprio hardware.' },
      { label: 'Você é o dono', detail: 'Nenhum fabricante pode descontinuar o app, mudar os termos ou inutilizar seus dispositivos.' },
    ],
  },
  ar: {
    title: 'شغِّل منزلك الذكي بنموذج لغوي محلي بدلاً من السحابة',
    intro: 'المنزل الذكي المحلي يعمل بالكامل على أجهزتك الخاصة: بلا اعتماد على السحابة، يعمل دون اتصال، وخصوصية كاملة. هذه الـ25 دليلاً تغطي المنظومة الكاملة — Home Assistant وMatter وThread والصوت المحلي (Whisper وPiper وWyoming) ونموذج Ollama اللغوي كعقل منزلك.',
    intro2: 'منصات المنزل الذكي المعتمدة على السحابة ترسل تسجيلاتك الصوتية ولقطات الكاميرا وروتينك اليومي إلى خوادم الشركة المصنّعة — وتتوقف عن العمل بمجرد أن تغيّر تلك الشركة شروطها أو ترفع أسعارها أو توقف الخدمة. أما الإعداد المحلي فيُبقي هذه البيانات على أجهزة تتحكم بها أنت، ويُواصل تشغيل الأتمتة حتى بدون اتصال بالإنترنت.',
    benefits: [
      { label: 'الخصوصية', detail: 'تبقى التسجيلات الصوتية ولقطات الكاميرا والأتمتة داخل شبكتك الخاصة — ولا تُرسل أبداً إلى خوادم الشركة المصنّعة.' },
      { label: 'بلا اشتراكات', detail: 'تكلفة أجهزة لمرة واحدة فقط. بلا رسوم شهرية للأتمتة أو التحكم الصوتي أو تخزين الكاميرا.' },
      { label: 'يعمل دون اتصال', detail: 'تستمر الأتمتة في العمل أثناء انقطاع الإنترنت لأن المنطق يعمل على أجهزتك الخاصة.' },
      { label: 'أنت المالك', detail: 'لا يمكن لأي شركة مصنّعة إيقاف التطبيق أو تغيير الشروط أو تعطيل أجهزتك.' },
    ],
  },
  ko: {
    title: '클라우드 없이 로컬 LLM으로 스마트홈 구동하기',
    intro: '로컬 퍼스트 스마트홈은 자신의 하드웨어에서 완전히 실행됩니다. 클라우드 의존 없음, 오프라인 동작, 완전한 개인 정보 보호. 이 25개 가이드는 Home Assistant, Matter와 Thread, 로컬 음성(Whisper, Piper, Wyoming), 그리고 Ollama 기반 LLM을 아우르는 전체 스택을 다룹니다.',
    intro2: '클라우드 의존형 스마트홈 플랫폼은 음성 녹음, 카메라 영상, 일상 루틴을 제조사 서버로 전송합니다. 그 회사가 약관을 바꾸거나 가격을 올리거나 서비스를 종료하는 순간 작동이 멈춥니다. 로컬 퍼스트 구성은 이러한 데이터를 사용자가 직접 통제하는 하드웨어에 보관하며, 인터넷 연결이 없어도 자동화를 계속 실행합니다.',
    benefits: [
      { label: '개인정보 보호', detail: '음성 녹음, 카메라 영상, 자동화 루틴은 모두 사용자의 네트워크 안에 머물며 제조사 서버로 전송되지 않습니다.' },
      { label: '구독료 없음', detail: '하드웨어 비용은 한 번만 지불합니다. 자동화, 음성 제어, 카메라 저장에 월 이용료가 없습니다.' },
      { label: '오프라인에서도 작동', detail: '로직이 자신의 하드웨어에서 실행되므로 인터넷 장애 중에도 자동화가 계속 작동합니다.' },
      { label: '완전한 소유권', detail: '어떤 제조사도 앱을 종료하거나 약관을 변경하거나 기기를 사용 불가능하게 만들 수 없습니다.' },
    ],
  },
}

const CATEGORY_COPY: Partial<Record<Lang, Record<string, { badge: string; description: string }>>> = {
  en: {
    foundations:          { badge: 'Smart Home Foundations',         description: 'High-volume entry guides: what a smart home is, the ecosystems, the protocols, and the privacy risks that make local control matter.' },
    'local-first':        { badge: 'Local-First Smart Home',         description: 'The core moat: everything runs on your hardware. Home Assistant, Matter local control, GDPR-friendly setups, and migrating off the cloud.' },
    'local-ai':           { badge: 'Local AI & LLMs in the Smart Home', description: 'The intersection: run your smart home on a local LLM. Ollama + Home Assistant, fully local voice assistants, AI automations, and private AI cameras.' },
    'decision-comparison':{ badge: 'Decision & Comparison',          description: 'Buyer-intent comparison pages: Home Assistant vs Alexa vs Google, best mini PCs for HA + local AI, local vs cloud voice, and zero-subscription builds.' },
  },
  de: {
    foundations:          { badge: 'Smart-Home-Grundlagen',          description: 'Einsteiger-Guides mit hohem Traffic: Was ist ein Smart Home, Ökosysteme, Protokolle und Datenschutzrisiken, die lokale Steuerung wichtig machen.' },
    'local-first':        { badge: 'Lokales Smart Home',             description: 'Der Kern: Alles läuft auf deiner Hardware. Home Assistant, Matter-Lokalsteuerung, DSGVO-konforme Setups und die Migration aus der Cloud.' },
    'local-ai':           { badge: 'Lokale KI & LLMs im Smart Home', description: 'Die Schnittmenge: Smart Home mit lokalem LLM steuern. Ollama + Home Assistant, vollständig lokale Sprachassistenten, KI-Automatisierungen und private KI-Kameras.' },
    'decision-comparison':{ badge: 'Entscheidung & Vergleich',       description: 'Kaufentscheidungs-Seiten: Home Assistant vs Alexa vs Google, beste Mini-PCs für HA + KI, lokale vs. Cloud-Stimme und abo-freie Setups.' },
  },
  fr: {
    foundations:          { badge: 'Fondamentaux de la maison connectée', description: 'Guides d\'entrée à fort trafic : qu\'est-ce qu\'une maison connectée, les écosystèmes, les protocoles et les risques de confidentialité qui justifient le contrôle local.' },
    'local-first':        { badge: 'Maison connectée locale',         description: 'Le cœur du sujet : tout tourne sur votre matériel. Home Assistant, contrôle local Matter, configurations conformes RGPD et migration hors du cloud.' },
    'local-ai':           { badge: 'IA locale & LLMs dans la maison connectée', description: 'L\'intersection : piloter sa maison avec un LLM local. Ollama + Home Assistant, assistants vocaux entièrement locaux, automatisations IA et caméras privées.' },
    'decision-comparison':{ badge: 'Décision & Comparaison',          description: 'Pages d\'intention d\'achat : Home Assistant vs Alexa vs Google, meilleurs mini-PC pour HA + IA locale, voix locale vs cloud, configurations sans abonnement.' },
  },
  ja: {
    foundations:          { badge: 'スマートホームの基礎',              description: '高トラフィックの入門ガイド：スマートホームとは何か、エコシステム、プロトコル、そしてローカル制御を重要にするプライバシーリスク。' },
    'local-first':        { badge: 'ローカルファーストのスマートホーム', description: 'コアとなるアドバンテージ：すべてが自分のハードウェアで動作。Home Assistant、Matterのローカル制御、GDPRに対応したセットアップ、クラウドからの移行。' },
    'local-ai':           { badge: 'スマートホームにおけるローカルAIとLLM', description: '交差点：ローカルLLMでスマートホームを制御。Ollama + Home Assistant、完全ローカルの音声アシスタント、AI自動化、プライベートAIカメラ。' },
    'decision-comparison':{ badge: '比較と選択',                       description: '購入意向比較ページ：Home Assistant vs Alexa vs Google、HA + ローカルAI向け最適ミニPC、ローカルvsクラウド音声、サブスクリプション不要のビルド。' },
  },
  zh: {
    foundations:          { badge: '智能家居基础',                     description: '高流量入门指南：智能家居是什么、生态系统、协议，以及使本地控制变得重要的隐私风险。' },
    'local-first':        { badge: '本地优先智能家居',                  description: '核心优势：一切都在您的硬件上运行。Home Assistant、Matter本地控制、符合GDPR的设置，以及从云端迁移。' },
    'local-ai':           { badge: '智能家居中的本地AI与大模型',         description: '交汇点：用本地大模型控制智能家居。Ollama + Home Assistant、完全本地化语音助手、AI自动化和私人AI摄像头。' },
    'decision-comparison':{ badge: '决策与比较',                       description: '购买意向对比页：Home Assistant vs Alexa vs Google、HA + 本地AI最佳迷你PC、本地vs云端语音、零订阅构建。' },
  },
  es: {
    foundations:          { badge: 'Fundamentos del hogar inteligente', description: 'Guías de entrada de alto volumen: qué es un hogar inteligente, los ecosistemas, los protocolos y los riesgos de privacidad que hacen importante el control local.' },
    'local-first':        { badge: 'Hogar inteligente local',          description: 'El núcleo: todo funciona en tu hardware. Home Assistant, control local con Matter, configuraciones compatibles con GDPR y migración desde la nube.' },
    'local-ai':           { badge: 'IA local y LLMs en el hogar inteligente', description: 'La intersección: controla tu hogar con un LLM local. Ollama + Home Assistant, asistentes de voz totalmente locales, automatizaciones de IA y cámaras de IA privadas.' },
    'decision-comparison':{ badge: 'Decisión y Comparación',           description: 'Páginas de comparación para compradores: Home Assistant vs Alexa vs Google, mejores mini PCs para HA + IA local, voz local vs nube y builds sin suscripción.' },
  },
  pt: {
    foundations:          { badge: 'Fundamentos da casa inteligente',  description: 'Guias de entrada de alto volume: o que é uma casa inteligente, os ecossistemas, os protocolos e os riscos de privacidade que tornam o controlo local importante.' },
    'local-first':        { badge: 'Casa inteligente local',           description: 'O núcleo: tudo corre no seu hardware. Home Assistant, controlo local com Matter, configurações compatíveis com RGPD e migração da nuvem.' },
    'local-ai':           { badge: 'IA local e LLMs na casa inteligente', description: 'A intersecção: controla a tua casa com um LLM local. Ollama + Home Assistant, assistentes de voz totalmente locais, automações de IA e câmeras de IA privadas.' },
    'decision-comparison':{ badge: 'Decisão e Comparação',             description: 'Páginas de comparação para compradores: Home Assistant vs Alexa vs Google, melhores mini PCs para HA + IA local, voz local vs nuvem e builds sem assinatura.' },
  },
  ar: {
    foundations:          { badge: 'أساسيات المنزل الذكي',            description: 'أدلة المبتدئين عالية الزيارات: ما هو المنزل الذكي، الأنظمة البيئية، البروتوكولات، ومخاطر الخصوصية التي تجعل التحكم المحلي ضرورياً.' },
    'local-first':        { badge: 'المنزل الذكي المحلي',              description: 'الجوهر: كل شيء يعمل على أجهزتك. Home Assistant وتحكم Matter المحلي وإعدادات متوافقة مع GDPR والهجرة من السحابة.' },
    'local-ai':           { badge: 'الذكاء الاصطناعي المحلي ونماذج اللغة في المنزل الذكي', description: 'نقطة التقاطع: التحكم في منزلك بنموذج لغوي محلي. Ollama مع Home Assistant ومساعدات صوتية محلية بالكامل وأتمتة بالذكاء الاصطناعي وكاميرات خاصة.' },
    'decision-comparison':{ badge: 'مقارنة واتخاذ القرار',             description: 'صفحات مقارنة الشراء: Home Assistant مقابل Alexa مقابل Google وأفضل الحواسيب المصغرة لـ HA والذكاء الاصطناعي المحلي والصوت المحلي مقابل السحابة وإعدادات بلا اشتراك.' },
  },
  ko: {
    foundations:          { badge: '스마트홈 기초',                     description: '고트래픽 입문 가이드: 스마트홈이란 무엇인가, 생태계, 프로토콜, 그리고 로컬 제어를 중요하게 만드는 개인 정보 위험.' },
    'local-first':        { badge: '로컬 퍼스트 스마트홈',              description: '핵심: 모든 것이 내 하드웨어에서 실행됩니다. Home Assistant, Matter 로컬 제어, GDPR 친화적 설정, 클라우드에서 마이그레이션.' },
    'local-ai':           { badge: '스마트홈의 로컬 AI & LLM',          description: '교차점: 로컬 LLM으로 스마트홈 제어하기. Ollama + Home Assistant, 완전 로컬 음성 어시스턴트, AI 자동화, 프라이빗 AI 카메라.' },
    'decision-comparison':{ badge: '비교 및 선택',                      description: '구매 의도 비교 페이지: Home Assistant vs Alexa vs Google, HA + 로컬 AI 최적 미니 PC, 로컬 vs 클라우드 음성, 구독 없는 빌드.' },
  },
}

interface HubFaqEntry { q: string; a: string }

const HUB_FAQ: Partial<Record<Lang, HubFaqEntry[]>> = {
  en: [
    { q: 'What is a local-first smart home?', a: 'A local-first smart home runs its automation logic, voice processing, and device control entirely on hardware you own — typically a mini PC or NAS running Home Assistant — instead of routing commands through a manufacturer\'s cloud server.' },
    { q: 'Do I need to know how to code to set one up?', a: 'No. Home Assistant\'s setup wizard and Home Assistant Operating System installer handle most of the configuration through a web interface. Coding only becomes useful for advanced custom automations.' },
    { q: 'What hardware do I need to run a local smart home with AI?', a: 'A mini PC with at least 8 GB of RAM handles Home Assistant and basic automations. Running a local LLM for AI-driven automations needs 16 GB or more RAM and, ideally, a discrete GPU or an Apple Silicon Mac for acceptable response times.' },
    { q: 'Is a local-first smart home GDPR-compliant by default?', a: 'Keeping data on local hardware satisfies most data-residency requirements under GDPR Article 28, since no personal data — voice recordings, camera footage — leaves the property. You remain the data controller and must still document your setup.' },
    { q: 'Can I keep using Alexa or Google Assistant alongside a local setup?', a: 'Yes. Home Assistant integrates with most existing smart speakers and can bridge cloud devices into a hybrid setup while you migrate privacy-sensitive automations to the local-first stack.' },
  ],
  de: [
    { q: 'Was ist ein lokales Smart Home?', a: 'Ein lokales Smart Home führt seine Automatisierungslogik, Sprachverarbeitung und Gerätesteuerung vollständig auf Hardware aus, die Ihnen gehört — meist ein Mini-PC oder NAS mit Home Assistant — statt Befehle über den Cloud-Server eines Herstellers zu leiten.' },
    { q: 'Muss ich programmieren können, um es einzurichten?', a: 'Nein. Der Einrichtungsassistent von Home Assistant und der Home Assistant Operating System-Installer übernehmen die meiste Konfiguration über eine Weboberfläche. Programmierkenntnisse sind nur für fortgeschrittene, individuelle Automatisierungen hilfreich.' },
    { q: 'Welche Hardware brauche ich für ein lokales Smart Home mit KI?', a: 'Ein Mini-PC mit mindestens 8 GB RAM reicht für Home Assistant und einfache Automatisierungen. Für ein lokales LLM bei KI-gesteuerten Automatisierungen sind 16 GB RAM oder mehr nötig, idealerweise mit dedizierter GPU oder einem Apple-Silicon-Mac für akzeptable Antwortzeiten.' },
    { q: 'Ist ein lokales Smart Home automatisch DSGVO-konform?', a: 'Das Speichern der Daten auf lokaler Hardware erfüllt die meisten Anforderungen an die Datenresidenz nach Art. 28 DSGVO, da keine personenbezogenen Daten — Sprachaufnahmen, Kamerabilder — das Grundstück verlassen. Sie bleiben weiterhin Verantwortlicher und müssen Ihr Setup dokumentieren.' },
    { q: 'Kann ich Alexa oder Google Assistant weiterhin parallel nutzen?', a: 'Ja. Home Assistant lässt sich mit den meisten vorhandenen Smart Speakern verbinden und kann Cloud-Geräte in ein hybrides Setup einbinden, während Sie datenschutzsensible Automatisierungen schrittweise in den lokalen Stack verlagern.' },
  ],
  fr: [
    { q: 'Qu\'est-ce qu\'une maison connectée locale ?', a: 'Une maison connectée locale exécute sa logique d\'automatisation, le traitement vocal et le contrôle des appareils entièrement sur du matériel que vous possédez — généralement un mini PC ou un NAS avec Home Assistant — au lieu de faire transiter les commandes par le serveur cloud d\'un fabricant.' },
    { q: 'Faut-il savoir coder pour la mettre en place ?', a: 'Non. L\'assistant de configuration de Home Assistant et l\'installateur Home Assistant Operating System gèrent la majeure partie de la configuration via une interface web. Le code n\'est utile que pour des automatisations avancées et personnalisées.' },
    { q: 'Quel matériel faut-il pour une maison connectée locale avec IA ?', a: 'Un mini PC avec au moins 8 Go de RAM suffit pour Home Assistant et les automatisations de base. Faire tourner un LLM local pour des automatisations pilotées par IA demande 16 Go de RAM ou plus, idéalement avec un GPU dédié ou un Mac Apple Silicon pour des temps de réponse acceptables.' },
    { q: 'Une maison connectée locale est-elle conforme au RGPD par défaut ?', a: 'Conserver les données sur du matériel local répond à la plupart des exigences de résidence des données de l\'article 28 du RGPD, puisqu\'aucune donnée personnelle — enregistrements vocaux, images de caméra — ne quitte le domicile. Vous restez responsable du traitement et devez documenter votre installation.' },
    { q: 'Puis-je continuer à utiliser Alexa ou Google Assistant en parallèle ?', a: 'Oui. Home Assistant s\'intègre avec la plupart des enceintes connectées existantes et peut relier des appareils cloud dans une configuration hybride, le temps de migrer les automatisations sensibles vers la pile locale.' },
  ],
  ja: [
    { q: 'ローカルファーストのスマートホームとは何ですか?', a: 'ローカルファーストのスマートホームは、自動化ロジック・音声処理・デバイス制御のすべてを、自分で所有するハードウェア（多くはHome Assistantを動かすミニPCやNAS）上で実行し、メーカーのクラウドサーバーを経由しません。' },
    { q: '設定にプログラミングの知識は必要ですか?', a: 'いいえ。Home Assistantのセットアップウィザードと Home Assistant Operating System インストーラーが、Webインターフェース上でほとんどの設定を行います。プログラミングが役立つのは、高度なカスタム自動化を作成する場合のみです。' },
    { q: 'AIを使ったローカルスマートホームにはどのようなハードウェアが必要ですか?', a: 'Home Assistantと基本的な自動化には、8GB以上のRAMを搭載したミニPCで十分です。AI駆動の自動化のためにローカルLLMを動かすには16GB以上のRAMが必要で、許容できる応答速度のためには専用GPUまたはApple SiliconのMacが望ましいです。' },
    { q: 'ローカルファーストのスマートホームは標準でGDPRに準拠していますか?', a: '音声録音やカメラ映像などの個人データが敷地外に出ないため、データをローカルハードウェアに保持することはGDPR第28条のデータレジデンシー要件の大部分を満たします。ただし、あなたは引き続きデータ管理者であり、自分のセットアップを文書化する必要があります。' },
    { q: 'ローカル環境と並行してAlexaやGoogleアシスタントを使い続けられますか?', a: 'はい。Home Assistantはほとんどの既存スマートスピーカーと統合でき、プライバシーに配慮した自動化をローカルファーストのスタックへ移行する間、クラウドデバイスをハイブリッド構成に組み込むことができます。' },
  ],
  zh: [
    { q: '什么是本地优先智能家居?', a: '本地优先智能家居将自动化逻辑、语音处理和设备控制完全运行在您自己拥有的硬件上——通常是运行Home Assistant的迷你主机或NAS——而不是通过厂商的云服务器转发指令。' },
    { q: '搭建它需要会编程吗?', a: '不需要。Home Assistant的设置向导和Home Assistant Operating System安装程序通过网页界面完成大部分配置。只有在制作高级自定义自动化时，编程才会派上用场。' },
    { q: '运行带AI功能的本地智能家居需要什么硬件?', a: '至少8GB内存的迷你主机即可运行Home Assistant和基础自动化。若要为AI驱动的自动化运行本地大模型，则需要16GB以上内存，并最好配备独立显卡或Apple Silicon Mac以获得可接受的响应速度。' },
    { q: '本地优先智能家居默认符合GDPR吗?', a: '由于语音录音、摄像头画面等个人数据不会离开住所，将数据保留在本地硬件上可满足GDPR第28条的大部分数据驻留要求。但您仍是数据控制者，仍需记录自己的配置方案。' },
    { q: '使用本地方案的同时还能继续使用Alexa或Google Assistant吗?', a: '可以。Home Assistant可与大多数现有智能音箱集成，并能将云端设备接入混合方案，方便您在迁移隐私敏感型自动化到本地优先技术栈的过程中平稳过渡。' },
  ],
  es: [
    { q: '¿Qué es un hogar inteligente local?', a: 'Un hogar inteligente local ejecuta toda su lógica de automatización, procesamiento de voz y control de dispositivos en hardware que tú posees —normalmente un mini PC o un NAS con Home Assistant— en lugar de enviar los comandos a través del servidor en la nube de un fabricante.' },
    { q: '¿Necesito saber programar para configurarlo?', a: 'No. El asistente de configuración de Home Assistant y el instalador de Home Assistant Operating System gestionan la mayor parte de la configuración desde una interfaz web. Programar solo resulta útil para automatizaciones avanzadas y personalizadas.' },
    { q: '¿Qué hardware necesito para un hogar inteligente local con IA?', a: 'Un mini PC con al menos 8 GB de RAM es suficiente para Home Assistant y automatizaciones básicas. Ejecutar un LLM local para automatizaciones impulsadas por IA requiere 16 GB de RAM o más, idealmente con una GPU dedicada o un Mac con Apple Silicon para tiempos de respuesta aceptables.' },
    { q: '¿Un hogar inteligente local cumple con el RGPD por defecto?', a: 'Mantener los datos en hardware local satisface la mayoría de los requisitos de residencia de datos del artículo 28 del RGPD, ya que ningún dato personal —grabaciones de voz, imágenes de cámaras— sale de la vivienda. Sigues siendo el responsable del tratamiento y debes documentar tu configuración.' },
    { q: '¿Puedo seguir usando Alexa o Google Assistant junto con una configuración local?', a: 'Sí. Home Assistant se integra con la mayoría de los altavoces inteligentes existentes y puede conectar dispositivos en la nube dentro de una configuración híbrida mientras migras las automatizaciones sensibles a la privacidad hacia la pila local.' },
  ],
  pt: [
    { q: 'O que é uma casa inteligente local?', a: 'Uma casa inteligente local executa toda a lógica de automação, processamento de voz e controle de dispositivos em hardware que você possui — geralmente um mini PC ou NAS rodando Home Assistant — em vez de enviar comandos pelo servidor na nuvem de um fabricante.' },
    { q: 'Preciso saber programar para configurar?', a: 'Não. O assistente de configuração do Home Assistant e o instalador do Home Assistant Operating System cuidam da maior parte da configuração por uma interface web. Programar só é útil para automações avançadas e personalizadas.' },
    { q: 'Que hardware preciso para uma casa inteligente local com IA?', a: 'Um mini PC com pelo menos 8 GB de RAM já roda o Home Assistant e automações básicas. Rodar um LLM local para automações com IA exige 16 GB de RAM ou mais, idealmente com GPU dedicada ou um Mac com Apple Silicon para tempos de resposta aceitáveis.' },
    { q: 'Uma casa inteligente local é compatível com a LGPD por padrão?', a: 'Manter os dados em hardware local atende à maior parte dos requisitos de residência de dados da LGPD, já que nenhum dado pessoal — gravações de voz, imagens de câmeras — sai da residência. Você continua sendo o controlador dos dados e deve documentar sua configuração.' },
    { q: 'Posso continuar usando Alexa ou Google Assistant junto com uma configuração local?', a: 'Sim. O Home Assistant se integra à maioria dos smart speakers já existentes e pode conectar dispositivos na nuvem em uma configuração híbrida enquanto você migra automações sensíveis para a pilha local.' },
  ],
  ar: [
    { q: 'ما هو المنزل الذكي المحلي؟', a: 'المنزل الذكي المحلي يُشغّل منطق الأتمتة ومعالجة الصوت والتحكم بالأجهزة بالكامل على أجهزة تملكها أنت — عادةً حاسوب مصغر أو جهاز NAS يعمل عليه Home Assistant — بدلاً من توجيه الأوامر عبر خادم سحابي تابع لشركة مصنّعة.' },
    { q: 'هل أحتاج إلى معرفة البرمجة لإعداده؟', a: 'لا. يتولى معالج الإعداد في Home Assistant وأداة تثبيت Home Assistant Operating System معظم عملية الإعداد عبر واجهة ويب. البرمجة مفيدة فقط عند إنشاء أتمتة مخصصة ومتقدمة.' },
    { q: 'ما الأجهزة التي أحتاجها لتشغيل منزل ذكي محلي بالذكاء الاصطناعي؟', a: 'حاسوب مصغر بذاكرة عشوائية لا تقل عن 8 جيجابايت يكفي لتشغيل Home Assistant والأتمتة الأساسية. أما تشغيل نموذج لغوي محلي للأتمتة المعتمدة على الذكاء الاصطناعي فيتطلب 16 جيجابايت من الذاكرة أو أكثر، ويُفضّل مع بطاقة رسومات مخصصة أو جهاز Mac بمعالج Apple Silicon للحصول على زمن استجابة مقبول.' },
    { q: 'هل المنزل الذكي المحلي متوافق تلقائياً مع اللوائح الأوروبية لحماية البيانات؟', a: 'الاحتفاظ بالبيانات على أجهزة محلية يلبي معظم متطلبات إقامة البيانات، إذ لا تغادر أي بيانات شخصية — كالتسجيلات الصوتية أو لقطات الكاميرا — نطاق المنزل. ومع ذلك تبقى أنت المسؤول عن معالجة البيانات ويتوجب عليك توثيق إعدادك.' },
    { q: 'هل يمكنني الاستمرار في استخدام Alexa أو Google Assistant مع إعداد محلي؟', a: 'نعم. يتكامل Home Assistant مع معظم مكبرات الصوت الذكية الحالية، ويمكنه ربط الأجهزة السحابية ضمن إعداد هجين أثناء نقلك للأتمتة الحساسة من ناحية الخصوصية إلى المنظومة المحلية.' },
  ],
  ko: [
    { q: '로컬 퍼스트 스마트홈이란 무엇입니까?', a: '로컬 퍼스트 스마트홈은 자동화 로직, 음성 처리, 기기 제어를 제조사의 클라우드 서버를 거치지 않고 사용자가 직접 소유한 하드웨어— 대개 Home Assistant를 실행하는 미니 PC나 NAS —에서 전적으로 실행합니다.' },
    { q: '설정하려면 코딩을 알아야 합니까?', a: '아닙니다. Home Assistant의 설정 마법사와 Home Assistant Operating System 설치 프로그램이 웹 인터페이스를 통해 대부분의 구성을 처리합니다. 코딩은 고급 맞춤 자동화를 만들 때만 유용합니다.' },
    { q: 'AI를 활용한 로컬 스마트홈을 구동하려면 어떤 하드웨어가 필요합니까?', a: '최소 8GB RAM을 갖춘 미니 PC로 Home Assistant와 기본 자동화를 실행할 수 있습니다. AI 기반 자동화를 위해 로컬 LLM을 구동하려면 16GB 이상의 RAM이 필요하며, 적절한 응답 속도를 위해서는 별도의 GPU나 Apple Silicon Mac을 갖추는 것이 이상적입니다.' },
    { q: '로컬 퍼스트 스마트홈은 기본적으로 개인정보 보호 규정을 준수합니까?', a: '음성 녹음이나 카메라 영상과 같은 개인정보가 주거지 밖으로 나가지 않으므로, 데이터를 로컬 하드웨어에 보관하는 것은 대부분의 데이터 보관 요건을 충족합니다. 다만 사용자는 여전히 데이터 처리자이며 자신의 구성을 문서화해야 합니다.' },
    { q: '로컬 구성과 함께 Alexa나 Google Assistant를 계속 사용할 수 있습니까?', a: '예. Home Assistant는 기존 스마트 스피커 대부분과 연동되며, 개인정보에 민감한 자동화를 로컬 퍼스트 스택으로 이전하는 동안 클라우드 기기를 하이브리드 구성으로 연결할 수 있습니다.' },
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

const HUB_PRESENTATION_URL = '/presentations/smart-home-local-first-overview-static.html'

const HUB_PRESENTATION_DESCRIPTION: Partial<Record<Lang, string>> = {
  en: 'The slide deck below covers: why local-first beats cloud smart homes (privacy, cost, offline reliability), the Home Assistant + Ollama architecture that runs automations without an internet connection, the local voice stack (Whisper, Piper, Wyoming), and a hardware buying matrix for mini PCs that handle both Home Assistant and a local LLM. Download the PDF as a local smart home planning reference.',
  de: 'Das Foliendeck behandelt: warum lokale Smart Homes der Cloud überlegen sind (Privatsphäre, Kosten, Offline-Zuverlässigkeit), die Home-Assistant-plus-Ollama-Architektur, die Automatisierungen ohne Internetverbindung ausführt, den lokalen Sprach-Stack (Whisper, Piper, Wyoming) sowie eine Hardware-Kaufmatrix für Mini-PCs, die sowohl Home Assistant als auch ein lokales LLM betreiben. PDF als Planungsreferenz für das lokale Smart Home herunterladen.',
  fr: 'Le diaporama ci-dessous couvre : pourquoi le local l\'emporte sur le cloud pour la maison connectée (confidentialité, coût, fiabilité hors ligne), l\'architecture Home Assistant + Ollama qui exécute les automatisations sans connexion Internet, la pile vocale locale (Whisper, Piper, Wyoming), et une matrice d\'achat de mini PC capables de faire tourner à la fois Home Assistant et un LLM local. Téléchargez le PDF comme référence de planification pour votre maison connectée locale.',
  ja: '以下のスライドデッキは次をカバーします：クラウドよりローカルファーストのスマートホームが優れている理由（プライバシー、コスト、オフラインでの信頼性）、インターネット接続なしで自動化を実行するHome Assistant + Ollamaアーキテクチャ、ローカル音声スタック（Whisper、Piper、Wyoming）、そしてHome AssistantとローカルLLMの両方を動かせるミニPCの購入比較表です。PDFをローカルスマートホーム計画のリファレンスとしてダウンロードしてください。',
  zh: '以下幻灯片涵盖：为什么本地优先胜过云端智能家居（隐私、成本、离线可靠性）、无需联网即可运行自动化的Home Assistant + Ollama架构、本地语音技术栈（Whisper、Piper、Wyoming），以及适合同时运行Home Assistant和本地大模型的迷你主机购买对比表。下载PDF作为本地智能家居规划参考。',
  es: 'El deck de diapositivas a continuación cubre: por qué lo local supera a la nube en el hogar inteligente (privacidad, coste, fiabilidad sin conexión), la arquitectura Home Assistant + Ollama que ejecuta automatizaciones sin conexión a internet, la pila de voz local (Whisper, Piper, Wyoming) y una matriz de compra de mini PCs capaces de ejecutar tanto Home Assistant como un LLM local. Descarga el PDF como referencia de planificación para tu hogar inteligente local.',
  pt: 'O conjunto de slides abaixo aborda: por que o local supera a nuvem na casa inteligente (privacidade, custo, confiabilidade offline), a arquitetura Home Assistant + Ollama que executa automações sem conexão à internet, a pilha de voz local (Whisper, Piper, Wyoming) e uma matriz de compra de mini PCs capazes de rodar tanto o Home Assistant quanto um LLM local. Baixe o PDF como referência de planejamento para sua casa inteligente local.',
  ar: 'يغطي عرض الشرائح أدناه: لماذا يتفوق الإعداد المحلي على السحابة في المنزل الذكي (الخصوصية والتكلفة والموثوقية دون اتصال)، بنية Home Assistant مع Ollama التي تُشغّل الأتمتة دون اتصال بالإنترنت، منظومة الصوت المحلية (Whisper وPiper وWyoming)، ومصفوفة شراء للحواسيب المصغّرة القادرة على تشغيل Home Assistant ونموذج لغوي محلي معاً. حمّل ملف PDF كمرجع لتخطيط منزلك الذكي المحلي.',
  ko: '아래 슬라이드 덱은 다음을 다룹니다: 로컬 퍼스트가 클라우드 스마트홈보다 나은 이유(개인정보 보호, 비용, 오프라인 안정성), 인터넷 연결 없이 자동화를 실행하는 Home Assistant + Ollama 아키텍처, 로컬 음성 스택(Whisper, Piper, Wyoming), 그리고 Home Assistant와 로컬 LLM을 함께 구동할 수 있는 미니 PC 구매 비교표. 로컬 스마트홈 계획 참고 자료로 PDF를 다운로드하세요.',
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
    { label: 'Local LLMs', path: '/local-llms' },
    { label: 'Power Local LLM', path: '/power-local-llm' },
    { label: 'Compare Models', path: '/compare' },
  ],
  de: [
    { label: 'Lokale LLMs', path: '/de/local-llms' },
    { label: 'Power Local LLM', path: '/de/power-local-llm' },
    { label: 'Modelle vergleichen', path: '/de/compare' },
  ],
  fr: [
    { label: 'LLMs locaux', path: '/fr/local-llms' },
    { label: 'Power Local LLM', path: '/fr/power-local-llm' },
    { label: 'Comparer les modèles', path: '/fr/compare' },
  ],
  ja: [
    { label: 'ローカルLLM', path: '/ja/local-llms' },
    { label: 'Power Local LLM', path: '/ja/power-local-llm' },
    { label: 'モデルを比較', path: '/ja/compare' },
  ],
  zh: [
    { label: '本地大模型', path: '/zh/local-llms' },
    { label: 'Power Local LLM', path: '/zh/power-local-llm' },
    { label: '比较模型', path: '/zh/compare' },
  ],
  es: [
    { label: 'LLMs locales', path: '/es/local-llms' },
    { label: 'Power Local LLM', path: '/es/power-local-llm' },
    { label: 'Comparar modelos', path: '/es/compare' },
  ],
  pt: [
    { label: 'LLMs locais', path: '/pt/local-llms' },
    { label: 'Power Local LLM', path: '/pt/power-local-llm' },
    { label: 'Comparar modelos', path: '/pt/compare' },
  ],
  ar: [
    { label: 'نماذج اللغة المحلية', path: '/ar/local-llms' },
    { label: 'Power Local LLM', path: '/ar/power-local-llm' },
    { label: 'مقارنة النماذج', path: '/ar/compare' },
  ],
  ko: [
    { label: '로컬 LLM', path: '/ko/local-llms' },
    { label: 'Power Local LLM', path: '/ko/power-local-llm' },
    { label: '모델 비교', path: '/ko/compare' },
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

// Most recent dateModified across all 25 smart-home articles (EN block, always present).
// Used as the hub's "content last reviewed" date — the hub itself has no article body to date.
function latestSmartHomeDateModified(): string | undefined {
  const dates = Object.values(smartHomeContent)
    .map((article) => (article?.en as any)?.dateModified ?? article?.en?.publishDate)
    .filter((d): d is string => !!d)
  return dates.sort().at(-1)
}

function renderHub(lang: Lang) {
  const copy = HUB_COPY[lang] ?? HUB_COPY['en']!
  const hubTitle = copy.title
  const hubIntro = copy.intro
  const reviewedDate = latestSmartHomeDateModified()
  const faq = HUB_FAQ[lang] ?? HUB_FAQ['en']!
  const relatedLinks = HUB_RELATED_LINKS[lang] ?? HUB_RELATED_LINKS['en']!

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-6">
          Smart Home
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
          src={`/images/smart-home-hub-overview-hero-${lang}.png`}
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
            title="Local-First Smart Home Overview"
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
                  const key = SMART_HOME_SLUG_TO_KEY[slug]
                  const articleData = key ? smartHomeContent[key] : undefined
                  const article = articleData?.[lang] ?? articleData?.['en']
                  return (
                    <Link
                      key={slug}
                      href={smartHomeArticlePath(lang, slug)}
                      className="group flex items-start gap-3 border border-primary/15 bg-card rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                    >
                      <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${theme.colorDot}`} />
                      <div>
                        <div className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                          {article?.title ?? slugToTitle(slug)}
                        </div>
                        {article?.intro && (
                          <p className="text-xs text-text-secondary leading-relaxed mt-1 line-clamp-2">{article.intro}</p>
                        )}
                      </div>
                    </Link>
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

        <SmartHomeWaitlistCTA label={HUB_WAITLIST_CTA_LABEL[lang] ?? HUB_WAITLIST_CTA_LABEL['en']!} />
      </div>
    </div>
  )
}

export async function buildHubPageElement(lang: Lang) {
  const canonicalUrl = `${BASE}${smartHomeHubPath(lang)}`
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
      const key = SMART_HOME_SLUG_TO_KEY[slug]
      const articleData = key ? smartHomeContent[key] : undefined
      const article = articleData?.[lang] ?? articleData?.['en']
      return {
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${smartHomeArticlePath(lang, slug)}`,
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
  const enHref = slug ? smartHomeArticlePath('en', slug) : smartHomeHubPath('en')
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
