// Shared server-side rendering helpers for the Smart Home cluster.
// The EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/, /es/, /pt/) all call
// into here so the metadata + JSON-LD + page JSX logic lives in exactly one place.
//
// Mirrors the architecture of src/lib/power-local-llm/page-helpers.tsx:
//   - path-based locales (NOT ?lang=) via metadata-helpers.ts
//   - noindex contract driven by published.ts (every page noindex until launch)
//   - auto-generated TechArticle + BreadcrumbList + FAQPage + HowTo + ItemList schema
//   - Coming-Soon fallback for any slug without authored content
//
// SCAFFOLD STATE (Phase 1): articles-barrel.ts is empty, so every article route renders
// Coming Soon and the hub renders the category grid with placeholder links. Content lands
// in Phase 2; translations + the noindex flip happen in Phase 3.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { SmartHomePostClient } from '@/components/SmartHomePostClient'
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
          height: 630,
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
      name: 'Smart Home Guide',
      url: `${BASE}${smartHomeHubPath(lang)}`,
    },
  }

  if ((article as any).heroImage) {
    ;(articleSchema as any).image = {
      '@type': 'ImageObject',
      url: `${BASE}${(article as any).heroImage}`,
      width: 1200,
      height: 630,
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
      <SmartHomePostClient slug={slug} lang={lang} />
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
    title: 'Run Your Smart Home on a Local LLM, Not the Cloud',
    intro: 'A local-first smart home runs entirely on your own hardware: no cloud dependence, works offline, full privacy. These 25 guides cover the stack — Home Assistant, Matter and Thread, local voice (Whisper, Piper, Wyoming), and an Ollama-driven local LLM as the brain of your home.',
  },
  de: {
    title: 'Steuere dein Smart Home mit einem lokalen LLM, nicht in der Cloud',
    intro: 'Ein lokales Smart Home läuft vollständig auf deiner eigenen Hardware: keine Cloud-Abhängigkeit, funktioniert offline, volle Privatsphäre. Diese 25 Guides decken den gesamten Stack ab — Home Assistant, Matter und Thread, lokale Sprachsteuerung (Whisper, Piper, Wyoming) und ein Ollama-LLM als Gehirn deines Hauses.',
  },
  fr: {
    title: 'Pilotez votre maison connectée avec un LLM local, sans cloud',
    intro: 'Une maison connectée locale fonctionne entièrement sur votre propre matériel : pas de dépendance au cloud, fonctionne hors ligne, confidentialité totale. Ces 25 guides couvrent la pile complète — Home Assistant, Matter et Thread, assistants vocaux locaux (Whisper, Piper, Wyoming) et un LLM Ollama comme cerveau de votre maison.',
  },
  ja: {
    title: 'クラウドではなくローカルLLMでスマートホームを動かす',
    intro: 'ローカルファーストのスマートホームは、完全に自分のハードウェアで動作します。クラウド依存なし、オフライン動作、完全なプライバシー。この25本のガイドで、Home Assistant、MatterとThread、ローカル音声（Whisper、Piper、Wyoming）、そしてOllamaで動くLLMをすべてカバーします。',
  },
  zh: {
    title: '用本地大模型驱动智能家居，告别云端',
    intro: '本地优先的智能家居完全运行在您自己的硬件上：无云端依赖、离线可用、完全私密。这25篇指南覆盖完整技术栈——Home Assistant、Matter与Thread、本地语音助手（Whisper、Piper、Wyoming），以及由Ollama驱动的本地大模型。',
  },
  es: {
    title: 'Controla tu hogar inteligente con un LLM local, no en la nube',
    intro: 'Un hogar inteligente local funciona completamente en tu propio hardware: sin dependencia de la nube, funciona sin conexión, privacidad total. Estos 25 guías cubren toda la pila: Home Assistant, Matter y Thread, voz local (Whisper, Piper, Wyoming) y un LLM de Ollama como cerebro de tu hogar.',
  },
  pt: {
    title: 'Execute sua casa inteligente em um LLM local, não na nuvem',
    intro: 'Uma casa inteligente local funciona inteiramente no seu próprio hardware: sem dependência de nuvem, funciona offline, privacidade total. Estes 25 guias cobrem toda a pilha — Home Assistant, Matter e Thread, voz local (Whisper, Piper, Wyoming) e um LLM com Ollama como o cérebro da sua casa.',
  },
  ar: {
    title: 'شغِّل منزلك الذكي بنموذج لغوي محلي بدلاً من السحابة',
    intro: 'المنزل الذكي المحلي يعمل بالكامل على أجهزتك الخاصة: بلا اعتماد على السحابة، يعمل دون اتصال، وخصوصية كاملة. هذه الـ25 دليلاً تغطي المنظومة الكاملة — Home Assistant وMatter وThread والصوت المحلي (Whisper وPiper وWyoming) ونموذج Ollama اللغوي كعقل منزلك.',
  },
  ko: {
    title: '클라우드 없이 로컬 LLM으로 스마트홈 구동하기',
    intro: '로컬 퍼스트 스마트홈은 자신의 하드웨어에서 완전히 실행됩니다. 클라우드 의존 없음, 오프라인 동작, 완전한 개인 정보 보호. 이 25개 가이드는 Home Assistant, Matter와 Thread, 로컬 음성(Whisper, Piper, Wyoming), 그리고 Ollama 기반 LLM을 아우르는 전체 스택을 다룹니다.',
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

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-6">
          Smart Home
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-5">{hubTitle}</h1>
        <p className={`text-text-secondary leading-relaxed max-w-3xl ${reviewedDate ? 'mb-6' : 'mb-14'}`}>{hubIntro}</p>
        {reviewedDate && (
          <time
            dateTime={reviewedDate}
            className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-14"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {HUB_REVIEWED_LABEL[lang] ?? HUB_REVIEWED_LABEL['en']} {formatDisplayDate(reviewedDate, lang as any)}
          </time>
        )}

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
                {theme.slugs.map((slug) => (
                  <Link
                    key={slug}
                    href={smartHomeArticlePath(lang, slug)}
                    className="group flex items-start gap-3 border border-primary/15 bg-card rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${theme.colorDot}`} />
                    <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                      {(() => {
                        const key = SMART_HOME_SLUG_TO_KEY[slug]
                        const articleData = key ? smartHomeContent[key] : undefined
                        return articleData?.[lang]?.title ?? articleData?.['en']?.title ?? slugToTitle(slug)
                      })()}
                    </span>
                  </Link>
                ))}
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
