// Shared server-side rendering helpers for the Power Local LLM cluster.
// Both the EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/) call into here so
// the metadata + JSON-LD + page JSX logic lives in exactly one place.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { PowerLocalLLMPostClient } from '@/components/PowerLocalLLMPostClient'
import { powerLLMContent } from './content'
import { POWER_LLM_SLUG_TO_KEY } from './slugs'
import { powerLLMAlternates, powerLLMHubPath, powerLLMArticlePath } from './metadata-helpers'
import { POWER_LLM_BRIEFS, type ArticleBrief } from './briefs'
import { isPowerLLMArticlePublished, isPowerLLMHubPublished } from './published'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayMonthYear } from '@/lib/formatDisplayDate'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新', es: 'NUEVO', pt: 'NOVO', ar: 'جديد', ko: '새글' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新', es: 'ACTUALIZADO', pt: 'ATUALIZADO', ar: 'محدث', ko: '업데이트' }
import { getPowerLLMGeoEntities } from '@/lib/geo-schema'
import { toOutputLocale } from '@/lib/i18n/constants'

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

const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  apis: 'APIs',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  mcp: 'MCP',
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
    bodyArticle: 'This article is being prepared. Explore the English version of the Power Local LLM hub in the meantime.',
    bodyHub: 'The Power Local LLM hub will be available in this language soon. Explore the English version below.',
    back: '← View English version',
  },
  de: {
    badge: 'Bald verfügbar',
    bodyArticle: 'Dieser Artikel wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Power Local LLM Hubs.',
    bodyHub: 'Der Power Local LLM Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.',
    back: '← Englische Version ansehen',
  },
  fr: {
    badge: 'Bientôt disponible',
    bodyArticle: 'Cet article est en cours de préparation. Explorez la version anglaise du Power Local LLM Hub en attendant.',
    bodyHub: 'Le Power Local LLM Hub sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.',
    back: '← Voir la version anglaise',
  },
  ja: {
    badge: '近日公開',
    bodyArticle: 'この記事は準備中です。その間、Power Local LLM ハブの英語版をご覧ください。',
    bodyHub: 'Power Local LLM ハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。',
    back: '← 英語版を表示',
  },
  zh: {
    badge: '即将推出',
    bodyArticle: '本文正在准备中。请同时浏览 Power Local LLM 中心的英文版。',
    bodyHub: 'Power Local LLM 中心即将推出此语言版本。请查看以下的英文版。',
    back: '← 查看英文版',
  },
  es: {
    badge: 'Próximamente',
    bodyArticle: 'Este artículo está en preparación. Explora la versión en inglés del centro Power Local LLM mientras tanto.',
    bodyHub: 'El centro Power Local LLM estará disponible en este idioma pronto. Consulta la versión en inglés a continuación.',
    back: '← Ver versión en inglés',
  },
  pt: {
    badge: 'Em breve', // VERIFY
    bodyArticle: 'Este artigo está em preparação. Explore a versão em inglês do hub Power Local LLM enquanto isso.', // VERIFY
    bodyHub: 'O hub Power Local LLM estará disponível neste idioma em breve. Confira a versão em inglês abaixo.', // VERIFY
    back: '← Ver versão em inglês', // VERIFY
  },
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(POWER_LLM_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = POWER_LLM_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = powerLLMContent[key]
  const hasEnContent = !!articleData?.['en'] && Object.keys(articleData['en']?.sections ?? {}).length > 0
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    article?.intro ??
    'A guide in the Power Local LLM cluster from PromptQuorum.'

  const isPublished = isPowerLLMArticlePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
    description: desc,
    alternates: powerLLMAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: baseTitle,
      description: desc,
      url: `${BASE}${powerLLMArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [
        {
          url: (article as any).heroImage
            ? `${BASE}${(article as any).heroImage}`
            : `${BASE}/api/og/${slug}?lang=${lang}`,
          width: 1200,
          height: 675,
          alt: baseTitle,
        },
      ],
      publishedTime: article?.publishDate,
      modifiedTime: article?.dateModified ?? ((article as any)?.lastFactChecked as string | undefined)?.substring(0, 10) ?? article?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: baseTitle,
      description: (article as any)?.twitterDescription ?? desc,
      images: [`${BASE}/api/og/${slug}?lang=${lang}`],
    },
    ...(isPublished
      ? {}
      : {
          other: {
            // Hard-belt-and-braces noindex for crawlers that ignore the metadata API
            'robots-cluster': 'noindex, follow',
          },
        }),
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = POWER_LLM_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = powerLLMContent[key]
  const enArticle = articleData?.['en']
  const hasEnContent = !!enArticle && Object.keys(enArticle.sections ?? {}).length > 0

  // Coming-soon when: slug exists in registry, but no EN content yet OR target lang has no translation.
  if (!hasEnContent) {
    const brief = POWER_LLM_BRIEFS[slug]
    if (lang === 'en' && brief) {
      return renderArticleBrief({ slug, brief })
    }
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const langArticle = articleData?.[lang]
  const hasLangContent = !!langArticle && Object.keys(langArticle.sections ?? {}).length > 0

  if (!hasLangContent) {
    // Render coming-soon for non-EN locales until translations land. EN is guaranteed above.
    if (lang !== 'en') {
      return renderComingSoon({ slug, lang, kind: 'article' })
    }
  }

  const article = (langArticle ?? enArticle)!
  const canonicalUrl = `${BASE}${powerLLMArticlePath(lang, slug)}`

  // ─── Schemas (Article + Breadcrumb + FAQ + HowTo) ──
  const llmEdLevel = (article as any).educationalLevel ?? (enArticle as any)?.educationalLevel
  const llmLevelMap: Record<string, string> = {
    Beginner: 'Beginner',
    Intermediate: 'Intermediate',
    Advanced: 'Expert',
    Technical: 'Expert',
  }
  const proficiencyLevel = llmEdLevel ? llmLevelMap[llmEdLevel] ?? llmEdLevel : undefined

  const articleSchema = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? ((article as any).lastFactChecked as string | undefined)?.substring(0, 10) ?? article.publishDate,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    ...(proficiencyLevel && { proficiencyLevel }),
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
      name: 'Power Local LLM Guide',
      url: `${BASE}${powerLLMHubPath(lang)}`,
    },
  }

  // Ensure inLanguage is always set (covers pre-built article.schema with missing or EN block)
  if (!(articleSchema as any).inLanguage) {
    (articleSchema as any).inLanguage = toOutputLocale(lang)
  }

  // Prefer heroImage when available, fall back to OG API route
  if ((article as any).heroImage) {
    ;(articleSchema as any).image = {
      '@type': 'ImageObject',
      url: `${BASE}${(article as any).heroImage}`,
      width: 1200,
      height: 675,
    }
  }

  // Inject GEO Schema Matrix entities
  const geoAbout = getPowerLLMGeoEntities((article as any).theme ?? '', lang)
  if (geoAbout.length > 0) {
    (articleSchema as any).about = geoAbout
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}${powerLLMHubPath(lang)}` },
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
            const name = typeof step !== 'string'
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
            '@type': 'SoftwareApplication',
            name: (row['Tool'] ?? '').replace(/\*\*/g, '').trim(),
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
      <PowerLocalLLMPostClient slug={slug} lang={lang} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const titleByLang: Partial<Record<Lang, string>> = {
    en: 'Local LLM Software Hub: Guides by Use Case — Coding, RAG, Agents (2026)',
    de: 'Lokale LLM-Software-Hub: Guides nach Anwendungsfall — Coding, RAG, Agenten (2026)',
    fr: "Hub Logiciels LLM Locaux : Guides par Cas d'Usage — Code, RAG, Agents (2026)",
    ja: 'ローカルLLMソフトウェアハブ：用途別ガイド — コーディング・RAG・エージェント (2026)',
    zh: '本地 LLM 软件中心：按用例分类的指南 — 编码、RAG、代理（2026）',
    es: 'Hub de Software LLM Local: Guías por Caso de Uso — Código, RAG, Agentes (2026)',
    pt: 'Hub de Software LLM Local: Guias por Caso de Uso — Código, RAG, Agentes (2026)',
    ar: 'مركز برمجيات LLM المحلية: أدلة حسب حالة الاستخدام — البرمجة وRAG والوكلاء (2026)',
    ko: '로컬 LLM 소프트웨어 허브: 용도별 가이드 — 코딩·RAG·에이전트 (2026)',
  }
  const descByLang: Partial<Record<Lang, string>> = {
    en: 'The local LLM software hub: guides and comparisons by use case — coding, RAG, agents, mobile, creative writing — plus the complete 88-tool directory. Tested workflows, 2026 stack.',
    de: 'Der Hub für lokale LLM-Software: Guides und Vergleiche nach Anwendungsfall — Coding, RAG, Agenten, Mobile, kreatives Schreiben — plus das vollständige Verzeichnis mit 88 Tools. Getestete Workflows, 2026er Stack.',
    fr: "Le hub des logiciels LLM locaux : guides et comparatifs par cas d'usage — code, RAG, agents, mobile, écriture créative — plus l'annuaire complet de 88 outils. Workflows testés, stack 2026.",
    ja: 'ローカルLLMソフトウェアハブ：コーディング、RAG、エージェント、モバイル、創作など用途別ガイドと比較、さらに88ツールを網羅した完全ディレクトリ。検証済みワークフロー、2026年版スタック。',
    zh: '本地 LLM 软件中心：按用例分类的指南与对比——编码、RAG、代理、移动端、创意写作——以及完整的 88 款工具目录。经过测试的工作流程，2026 年技术栈。',
    es: 'El hub de software LLM local: guías y comparativas por caso de uso — código, RAG, agentes, móvil, escritura creativa — más el directorio completo de 88 herramientas. Flujos de trabajo probados, stack 2026.',
    pt: 'O hub de software LLM local: guias e comparativos por caso de uso — código, RAG, agentes, mobile, escrita criativa — mais o diretório completo com 88 ferramentas. Fluxos de trabalho testados, stack 2026.',
    ar: 'مركز برمجيات LLM المحلية: أدلة ومقارنات حسب حالة الاستخدام — البرمجة وRAG والوكلاء والهاتف المحمول والكتابة الإبداعية — بالإضافة إلى الدليل الكامل المكوّن من 88 أداة. سير عمل مُختبَر، ومكدس 2026.',
    ko: '로컬 LLM 소프트웨어 허브: 코딩, RAG, 에이전트, 모바일, 창작 등 용도별 가이드와 비교, 그리고 88개 도구를 아우르는 전체 디렉터리까지. 검증된 워크플로, 2026 스택.',
  }

  const isPublished = isPowerLLMHubPublished(lang)

  return {
    title: truncateTitle((titleByLang[lang] ?? titleByLang["en"])!),
    description: (descByLang[lang] ?? descByLang["en"])!,
    alternates: powerLLMAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: titleByLang[lang],
      description: (descByLang[lang] ?? descByLang["en"])!,
      url: `${BASE}${powerLLMHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: titleByLang[lang],
      description: (descByLang[lang] ?? descByLang["en"])!,
    },
  } satisfies Metadata
}

export async function buildHubPageElement(lang: Lang) {
  if (lang === 'en' || lang === 'de' || lang === 'fr' || lang === 'ja' || lang === 'zh' || lang === 'es' || lang === 'pt' || lang === 'ar' || lang === 'ko') {
    return renderLocalizedHub(lang as 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko')
  }
  return renderComingSoon({ lang, kind: 'hub' })
}

// ─── COMING SOON RENDERER ─────────────────────────────────────────────────

// ─── EDITORIAL BRIEF RENDERER ─────────────────────────────────────────────
// Renders the writing brief for an EN article slug that has been registered but
// not yet authored. Replaced by full article content as articles are written.

function isClusterSlug(ref: string): boolean {
  return !ref.startsWith('/') && ref in POWER_LLM_SLUG_TO_KEY
}

function refHref(ref: string): string {
  if (ref.startsWith('/')) return ref
  if (isClusterSlug(ref)) return powerLLMArticlePath('en', ref)
  return ref
}

function refLabel(ref: string): string {
  if (ref.startsWith('/')) return ref
  if (isClusterSlug(ref)) {
    return powerLLMContent[ref]?.['en']?.title ?? slugToTitle(ref)
  }
  return ref
}

function renderArticleBrief({ slug, brief }: { slug: string; brief: ArticleBrief }) {
  const hubHref = powerLLMHubPath('en')
  const hasTable = !!brief.structure.headers && !!brief.structure.rows && brief.structure.rows.length > 0

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Status banner — distinct from Coming Soon's primary-blue badge */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-50 border border-amber-200 text-amber-800">
            Editorial Brief
          </span>
          <p className="text-xs text-text-secondary mt-3">
            Internal writing scaffold. The full article publishes within 2 days.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{brief.title}</h1>

        <blockquote className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-10 text-text-secondary italic">
          {brief.meta}
        </blockquote>

        {/* Type / SERP / CTR — three short metadata rows */}
        <section className="border border-primary/15 bg-card rounded-xl p-5 mb-8 space-y-3">
          <div className="text-sm">
            <span className="font-semibold text-text-primary">Article type:</span>{' '}
            <span className="text-text-secondary">{brief.articleType}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-text-primary">SERP intent:</span>{' '}
            <span className="text-text-secondary">{brief.serpIntent}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-text-primary">CTR rule:</span>{' '}
            <span className="text-text-secondary">{brief.ctrRule}</span>
          </div>
        </section>

        {/* Writing brief */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">Writing brief</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4">
            <p className="text-text-secondary leading-relaxed">{brief.writingBrief}</p>
          </div>
        </section>

        {/* Structure */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">{brief.structure.label}</h2>

          {hasTable && (
            <div className="overflow-x-auto border border-primary/15 rounded-xl">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/5">
                    {brief.structure.headers!.map((h, i) => (
                      <th
                        key={i}
                        className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {brief.structure.rows!.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="border border-primary/15 px-3 py-2 text-text-secondary align-top"
                        >
                          {cell || <span className="text-text-secondary/40">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {brief.structure.notes && (
            <pre className="border border-primary/15 bg-card rounded-xl p-5 text-sm text-text-secondary whitespace-pre-wrap font-sans leading-relaxed">
              {brief.structure.notes}
            </pre>
          )}
        </section>

        {/* Internal links (cluster) */}
        {brief.internalLinks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-3">Internal links (cluster)</h2>
            <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-3">
              {brief.internalLinks.map((l, i) => (
                <li key={i} className="text-sm">
                  <Link
                    href={refHref(l.ref)}
                    className="font-medium text-primary hover:underline break-words"
                  >
                    {refLabel(l.ref)}
                  </Link>
                  <span className="text-text-secondary"> — {l.reasoning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* External links (other site clusters) */}
        {brief.externalLinks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-3">External links (on-site)</h2>
            <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-3">
              {brief.externalLinks.map((l, i) => (
                <li key={i} className="text-sm">
                  <Link href={l.url} className="font-medium text-primary hover:underline break-words">
                    {l.url}
                  </Link>
                  <span className="text-text-secondary"> — {l.reasoning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ seeds */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">FAQ topic seeds</h2>
          <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-2 list-disc list-inside marker:text-primary">
            {brief.faqSeeds.map((q, i) => (
              <li key={i} className="text-sm text-text-secondary">{q}</li>
            ))}
          </ul>
        </section>

        {/* Mobile angle */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text-primary mb-3">Mobile angle</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4">
            <p className="text-sm text-text-secondary leading-relaxed">{brief.mobileAngle}</p>
          </div>
        </section>

        {/* Slug + back link */}
        <div className="border-t border-primary/15 pt-8 flex items-center justify-between gap-4 flex-wrap">
          <code className="text-xs text-text-secondary bg-primary/5 border border-primary/15 px-2 py-1 rounded">
            /power-local-llm/{slug}
          </code>
          <Link
            href={hubHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Power Local LLM hub
          </Link>
        </div>
      </div>
    </div>
  )
}

function renderComingSoon({ slug, lang, kind }: { slug?: string; lang: Lang; kind: 'article' | 'hub' }) {
  const copy = (COMING_SOON_COPY[lang] ?? COMING_SOON_COPY['en'])!
  const title = slug ? slugToTitle(slug) : 'Power Local LLM'
  const enHref = slug ? powerLLMArticlePath('en', slug) : powerLLMHubPath('en')
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

// ─── ENGLISH HUB CONTENT ──────────────────────────────────────────────────

// Per-category visual + copy. Mirrors the pattern in /src/components/LocalLLMsHub.tsx
// (THEME_LABELS / THEME_DESCRIPTIONS / THEME_COLORS) so the three cluster hubs share
// the same shape: colored badge → question H2 → 2-col card grid.
const HUB_THEMES: Array<{
  id: string
  badge: string
  question: string
  description: string
  colorBadge: string
  colorDot: string
  slugs: string[]
}> = [
  {
    id: 'overview-reference',
    badge: 'Overview & Reference',
    question: 'Overview & Reference: Where Do You Start in the Local LLM Ecosystem?',
    description: 'A directory of every local-LLM tool worth knowing — runtimes, desktop apps, web UIs, coding assistants, RAG systems, agent frameworks, voice/multimodal, mobile, and productivity plugins. The "what exists" map before you commit to a stack.',
    colorBadge: 'bg-slate-50 text-slate-700 border-slate-200',
    colorDot: 'bg-slate-400',
    slugs: [
      'local-llm-software-directory-2026',
      'apple-mlx-vs-nvidia-cuda-local-llm-2026',
      'deepseek-vs-qwen-local-comparison-2026',
    ],
  },
  {
    id: 'easiest-desktop-apps',
    badge: 'Easiest Desktop Apps',
    question: 'Easiest Desktop Apps: Which Local AI App Should You Install First?',
    description: 'ChatGPT-like apps you download and run. No terminal required. Best entry point for beginners. LM Studio, Jan, and GPT4All tested side-by-side for speed, UX, and privacy.',
    colorBadge: 'bg-blue-50 text-blue-700 border-blue-200',
    colorDot: 'bg-blue-400',
    slugs: [
      'lm-studio-vs-jan-vs-gpt4all-2026',
      'easiest-local-ai-app-windows-mac-linux',
      'local-ai-app-non-technical-users',
      'best-local-ai-app-low-end-pc',
      'local-ai-app-with-built-in-rag',
      'qwen-local-deployment-complete-guide-2026',
      'best-workstation-build-local-ai-2026',
    ],
  },
  {
    id: 'rag-document-chat',
    badge: 'RAG & Document Chat',
    question: 'RAG & Document Chat: How Do You Talk to Your Own PDFs Locally?',
    description: 'Personal knowledge bases that never leave your device. AnythingLLM, PrivateGPT, and Open WebUI tested on real corpora. Embedding-model picks for legal, research, and technical content.',
    colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    colorDot: 'bg-emerald-400',
    slugs: [
      'anythingllm-vs-privategpt-vs-openwebui-rag',
      'local-rag-on-your-pdfs-step-by-step',
      'best-embedding-models-local-rag-2026',
      'chat-with-1000-pdfs-locally',
      'local-rag-for-private-business-data',
      'best-rag-tools-for-business-documents-2026',
    ],
  },
  {
    id: 'coding-assistants',
    badge: 'Coding Assistants',
    question: 'Coding Assistants: Can a Local LLM Really Replace GitHub Copilot?',
    description: 'Continue.dev, Cline, Aider, and Qwen3-Coder benchmarked against GitHub Copilot on real Next.js, Python, and Rust projects. Cost math, setup walkthroughs, and honest verdicts on quality gaps.',
    colorBadge: 'bg-purple-50 text-purple-700 border-purple-200',
    colorDot: 'bg-purple-400',
    slugs: [
      'replace-github-copilot-with-local-llm',
      'continue-dev-vs-cline-vs-aider-local',
      'best-local-coding-models-2026',
      'local-coding-llm-without-internet',
      'local-llm-code-review-ci-cd',
      'best-local-llm-ide-plugins-2026',
      'deepseek-vs-qwen-coding-local-2026',
    ],
  },
  {
    id: 'local-ai-agents',
    badge: 'Local AI Agents & Tool Use',
    question: 'Local AI Agents & Tool Use: Which Workflows Actually Work Without the Cloud?',
    description: 'MCP, tool calling, autonomous agents — the 2026 frontier. Honest reports on what runs reliably (and what still fails). Replacing Zapier with self-hosted agents and EU-compliance patterns.',
    colorBadge: 'bg-orange-50 text-orange-700 border-orange-200',
    colorDot: 'bg-orange-400',
    slugs: [
      'local-ai-agents-with-mcp-2026',
      'best-local-models-tool-calling-2026',
      'autonomous-local-agents-actually-work',
      'replace-zapier-with-local-ai-agents',
      'local-ai-agents-business-workflows-eu-compliance',
      'local-ai-behind-firewall-offline-2026',
    ],
  },
  {
    id: 'creative-roleplay',
    badge: 'Creative & Roleplay',
    question: 'Creative & Roleplay: Which Local Models Write Like a Human?',
    description: 'Fiction, dialogue, worldbuilding, screenplays — tested on 50+ creative prompts. SillyTavern vs Agnai vs RisuAI for character work. The honest take on uncensored models for legitimate creative writing.',
    colorBadge: 'bg-rose-50 text-rose-700 border-rose-200',
    colorDot: 'bg-rose-400',
    slugs: [
      'best-local-llm-creative-writing-2026',
      'sillytavern-vs-agnai-vs-risuai-roleplay',
      'local-llm-prompts-for-fiction-writers',
      'uncensored-local-llm-creative-writing-ethics',
      'local-llm-screenwriting-and-novel-drafting',
    ],
  },
  {
    id: 'mobile-edge-llms',
    badge: 'Mobile & Edge LLMs',
    question: 'Mobile & Edge LLMs: Can You Run Real AI Offline on Your Phone?',
    description: 'iPhone, Android, iPad, Pixel — tested on real devices in 2026. Phi-4 Mini, Gemma 3 4B, SmolLM benchmarked for speed and quality. Voice assistants and Whisper-based offline pipelines.',
    colorBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    colorDot: 'bg-cyan-400',
    slugs: [
      'best-local-llm-apps-iphone-2026',
      'best-local-llm-apps-android-2026',
      'run-ai-on-tablet-ipad-android',
      'mobile-llm-models-phi4-gemma-smollm',
      'voice-assistant-local-mobile-offline',
    ],
  },
  {
    id: 'productivity-tools',
    badge: 'Productivity & Knowledge Tools',
    question: 'Productivity Tools: How Do You Plug Local AI into Your Daily Workflow?',
    description: 'Obsidian, Logseq, Joplin integrations. Email/calendar automation. Replace Grammarly and Notion AI with local models. The full personal-knowledge-base stack for 10,000+ items.',
    colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',
    colorDot: 'bg-amber-400',
    slugs: [
      'local-llm-with-obsidian-2026',
      'local-llm-with-logseq-and-joplin',
      'local-llm-personal-knowledge-base-2026',
      'local-llm-email-and-calendar-automation',
      'replace-grammarly-notion-ai-with-local',
      'wechat-bot-local-llm-personal-assistant-2026',
      'wechat-local-llm-integration-2026',
    ],
  },
  {
    id: 'voice-speech-multimodal',
    badge: 'Voice, Speech & Multimodal',
    question: 'Voice, Speech & Multimodal: How Do You Build a Fully Offline Voice and Vision Pipeline?',
    description: 'Local STT with whisper.cpp and faster-whisper. Local TTS with Piper, Coqui, and XTTS v2. Vision models (LLaVA, Llama 3.2 Vision) via Ollama. Full offline voice assistant builds and multimodal pipelines — no cloud microphone required.',
    colorBadge: 'bg-violet-50 text-violet-700 border-violet-200',
    colorDot: 'bg-violet-400',
    slugs: [
      'local-whisper-stt-comparison-2026',
      'local-vision-models-llava-ollama-2026',
      'local-tts-voice-cloning-piper-coqui-xtts',
      'build-local-voice-assistant-2026',
      'local-multimodal-pipeline-voice-vision-text',
    ],
  },
]

// ─── LOCALIZED HUB CONTENT ────────────────────────────────────────────────

type HubFaq = { q: string; a: string }

// DE theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_DE: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Übersicht & Referenz',
    question: 'Übersicht & Referenz: Wo starten Sie im lokalen LLM-Ökosystem?',
    description: 'Ein Verzeichnis aller lokalen LLM-Tools — Runtimes, Desktop-Apps, Web-UIs, Coding-Assistenten, RAG-Systeme, Agenten-Frameworks, Sprach- und Multimodal-Tools, Mobile und Produktivitäts-Plugins. Die „Was gibt es"-Karte, bevor Sie sich für einen Stack entscheiden.',
  },
  {
    badge: 'Einfachste Desktop-Apps',
    question: 'Einfachste Desktop-Apps: Welche lokale KI-App sollten Sie zuerst installieren?',
    description: 'ChatGPT-ähnliche Apps, die Sie herunterladen und direkt starten. Kein Terminal erforderlich. Bester Einstiegspunkt für Einsteiger. LM Studio, Jan und GPT4All im direkten Vergleich für Geschwindigkeit, Benutzerfreundlichkeit und Datenschutz.',
  },
  {
    badge: 'RAG & Dokument-Chat',
    question: 'RAG & Dokument-Chat: Wie sprechen Sie lokal mit Ihren eigenen PDFs?',
    description: 'Persönliche Wissensdatenbanken, die Ihr Gerät nie verlassen. AnythingLLM, PrivateGPT und Open WebUI an echten Korpora getestet. Embedding-Modell-Empfehlungen für rechtliche, wissenschaftliche und technische Inhalte.',
  },
  {
    badge: 'Coding-Assistenten',
    question: 'Coding-Assistenten: Kann ein lokales LLM wirklich GitHub Copilot ersetzen?',
    description: 'Continue.dev, Cline, Aider und Qwen3-Coder im Benchmark gegen GitHub Copilot an echten Next.js-, Python- und Rust-Projekten. Kostenrechnung, Setup-Anleitungen und ehrliche Einschätzungen zu Qualitätsunterschieden.',
  },
  {
    badge: 'Lokale KI-Agenten & Tool-Nutzung',
    question: 'Lokale KI-Agenten & Tool-Nutzung: Welche Workflows funktionieren wirklich ohne die Cloud?',
    description: 'MCP, Tool-Calling, autonome Agenten — die Grenze von 2026. Ehrliche Berichte darüber, was zuverlässig läuft (und was noch scheitert). Zapier durch selbst gehostete Agenten ersetzen und EU-konforme Muster.',
  },
  {
    badge: 'Kreativ & Roleplay',
    question: 'Kreativ & Roleplay: Welche lokalen Modelle schreiben wie ein Mensch?',
    description: 'Fiktion, Dialoge, Weltenbau, Drehbücher — an über 50 kreativen Prompts getestet. SillyTavern vs. Agnai vs. RisuAI für Charakterarbeit. Die ehrliche Einschätzung zu unzensierten Modellen für legitimes kreatives Schreiben.',
  },
  {
    badge: 'Mobile & Edge LLMs',
    question: 'Mobile & Edge LLMs: Kann man auf dem Smartphone echte KI offline betreiben?',
    description: 'iPhone, Android, iPad, Pixel — an echten Geräten in 2026 getestet. Phi-4 Mini, Gemma 3 4B, SmolLM im Benchmark für Geschwindigkeit und Qualität. Sprachassistenten und Whisper-basierte Offline-Pipelines.',
  },
  {
    badge: 'Produktivität & Wissenswerkzeuge',
    question: 'Produktivität: Wie integrieren Sie lokale KI in Ihren Arbeitsalltag?',
    description: 'Obsidian-, Logseq- und Joplin-Integrationen. E-Mail- und Kalender-Automatisierung. Grammarly und Notion AI durch lokale Modelle ersetzen. Der vollständige Personal-Knowledge-Base-Stack für über 10.000 Einträge.',
  },
  {
    badge: 'Sprache, Spracheingabe & Multimodal',
    question: 'Sprache & Multimodal: Wie bauen Sie eine vollständig offline betriebene Sprach- und Vision-Pipeline?',
    description: 'Lokale Spracherkennung mit whisper.cpp und faster-whisper. Lokale Sprachsynthese mit Piper, Coqui und XTTS v2. Vision-Modelle (LLaVA, Llama 3.2 Vision) via Ollama. Vollständige Offline-Sprachassistenten und multimodale Pipelines — ohne Cloud-Mikrofon.',
  },
]

const HUB_THEME_TEXT_FR: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Aperçu & Référence',
    question: 'Aperçu & Référence : Par Où Commencer dans l\'Écosystème des LLMs Locaux ?',
    description: 'Un annuaire de tous les outils LLM locaux — runtimes, applications de bureau, interfaces web, assistants de codage, systèmes RAG, frameworks d\'agents, outils vocaux/multimodaux, mobile et plugins de productivité. La carte « ce qui existe » avant de vous engager sur un stack.',
  },
  {
    badge: 'Applications de Bureau Les Plus Simples',
    question: 'Applications de Bureau Les Plus Simples : Quelle Application IA Locale Devriez-vous Installer en Premier ?',
    description: 'Applications de type ChatGPT que vous téléchargez et exécutez. Pas de terminal requis. Meilleur point d\'entrée pour les débutants. LM Studio, Jan et GPT4All testés côte à côte pour la vitesse, l\'UX et la confidentialité.',
  },
  {
    badge: 'RAG & Chat de Documents',
    question: 'RAG & Chat de Documents : Comment Parlez-vous Localement à Vos Propres PDFs ?',
    description: 'Bases de connaissances personnelles qui ne quittent jamais votre appareil. AnythingLLM, PrivateGPT et Open WebUI testés sur des corpus réels. Choix de modèles d\'embedding pour le contenu juridique, de recherche et technique.',
  },
  {
    badge: 'Assistants de Codage',
    question: 'Assistants de Codage : Un LLM Local Peut-il Vraiment Remplacer GitHub Copilot ?',
    description: 'Continue.dev, Cline, Aider et Qwen3-Coder benchmarkés contre GitHub Copilot sur de vrais projets Next.js, Python et Rust. Calculs de coûts, guides de configuration et évaluations honnêtes des écarts de qualité.',
  },
  {
    badge: 'Agents IA Locaux & Tool-Calling',
    question: 'Agents IA Locaux & Tool-Calling : Quels Workflows Fonctionnent Vraiment Sans le Cloud ?',
    description: 'MCP, tool-calling, agents autonomes — la frontière 2026. Rapports honnêtes sur ce qui fonctionne fiablement (et ce qui échoue encore). Remplacez Zapier par des agents auto-hébergés et des modèles conformes à l\'UE.',
  },
  {
    badge: 'Créatif & Roleplay',
    question: 'Créatif & Roleplay : Quels Modèles Locaux Écrivent Comme un Humain ?',
    description: 'Fiction, dialogues, worldbuilding, scénarios — testés sur 50+ prompts créatifs. SillyTavern vs Agnai vs RisuAI pour le travail de personnage. Avis honnête sur les modèles non censurés pour l\'écriture créative légitime.',
  },
  {
    badge: 'LLMs Mobiles & Edge',
    question: 'LLMs Mobiles & Edge : Pouvez-vous Vraiment Exécuter une IA Réelle Hors Ligne sur un Téléphone ?',
    description: 'iPhone, Android, iPad, Pixel — testés sur de vrais appareils en 2026. Phi-4 Mini, Gemma 3 4B, SmolLM benchmarkés pour la vitesse et la qualité. Assistants vocaux et pipelines hors ligne basés sur Whisper.',
  },
  {
    badge: 'Productivité & Outils de Connaissance',
    question: 'Productivité : Comment Intégrez-vous l\'IA Locale dans Votre Workflow Quotidien ?',
    description: 'Intégrations Obsidian, Logseq et Joplin. Automatisation des emails et des calendriers. Remplacez Grammarly et Notion AI par des modèles locaux. Stack complet de base de connaissances personnelle pour 10 000+ entrées.',
  },
  {
    badge: 'Voix, Parole & Multimodal',
    question: 'Voix & Multimodal : Comment Construire un Pipeline Complet de Parole et de Vision Hors Ligne ?',
    description: 'Reconnaissance vocale locale avec whisper.cpp et faster-whisper. Synthèse vocale locale avec Piper, Coqui et XTTS v2. Modèles de vision (LLaVA, Llama 3.2 Vision) via Ollama. Assistants vocaux hors ligne complets et pipelines multimodaux — pas de microphone cloud.',
  },
]

// JA theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_JA: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: '概要 & リファレンス',
    question: '概要 & リファレンス：ローカルLLMエコシステムのどこから始めますか？',
    description: 'すべてのローカルLLMツールのディレクトリ — ランタイム、デスクトップアプリ、Web UI、コーディングアシスタント、RAGシステム、エージェントフレームワーク、音声/マルチモーダル、モバイル、生産性プラグイン。スタックにコミットする前の「何が存在するか」マップ。',
  },
  {
    badge: '最も簡単なデスクトップアプリ',
    question: '最も簡単なデスクトップアプリ：最初にインストールすべきローカルAIアプリはどれですか？',
    description: 'ChatGPT風アプリをダウンロードして実行。ターミナルは不要です。初心者向けの最適な入口。LM Studio、Jan、GPT4Allを速度、UX、プライバシーについて並べて比較。',
  },
  {
    badge: 'RAG & ドキュメントチャット',
    question: 'RAG & ドキュメントチャット：あなた独自のPDFをローカルでチャットするにはどうしますか？',
    description: 'デバイスを離れない個人知識ベース。AnythingLLM、PrivateGPT、Open WebUIを実際のコーパスでテスト。法律、研究、技術コンテンツ向けの埋め込みモデルピック。',
  },
  {
    badge: 'コーディングアシスタント',
    question: 'コーディングアシスタント：ローカルLLMは本当にGitHub Copilotを置き換えることができるか？',
    description: 'Continue.dev、Cline、Aider、Qwen3-Coderを実際のNext.js、Python、RustプロジェクトでGitHub Copilotとベンチマーク。コスト計算、セットアップガイド、品質ギャップについての誠実な判定。',
  },
  {
    badge: 'ローカルAIエージェント & ツール呼び出し',
    question: 'ローカルAIエージェント & ツール呼び出し：クラウドなしで実際に機能するワークフローはどれですか？',
    description: 'MCP、ツール呼び出し、自律エージェント — 2026年のフロンティア。何が確実に実行され、何がまだ失敗しているかについての誠実なレポート。ZapierをセルフホストエージェントとEU準拠パターンで置き換える。',
  },
  {
    badge: 'クリエイティブ & ロールプレイ',
    question: 'クリエイティブ & ロールプレイ：どのローカルモデルが人間のように書きますか？',
    description: 'フィクション、対話、世界観構築、脚本 — 50以上のクリエイティブプロンプトでテスト。キャラクター作成用のSillyTavern vs Agnai vs RisuAI。正当なクリエイティブライティングのための検閲されていないモデルについての誠実な意見。',
  },
  {
    badge: 'モバイル & エッジLLM',
    question: 'モバイル & エッジLLM：スマートフォンで本当にオフラインAIを実行できますか？',
    description: 'iPhone、Android、iPad、Pixel — 2026年の実デバイスでテスト。Phi-4 Mini、Gemma 3 4B、SmolLMを速度と品質についてベンチマーク。音声アシスタントとWhisperベースのオフラインパイプライン。',
  },
  {
    badge: '生産性 & ナレッジツール',
    question: '生産性：ローカルAIを日々のワークフローにどのように組み込みますか？',
    description: 'Obsidian、Logseq、Joplin統合。メール/カレンダー自動化。Grammarly と Notion AI をローカルモデルで置き換える。10,000以上のアイテムに対応する完全なパーソナルナレッジベーススタック。',
  },
  {
    badge: '音声、スピーチ & マルチモーダル',
    question: '音声 & マルチモーダル：完全にオフラインの音声とビジョンパイプラインをどのように構築しますか？',
    description: 'whisper.cpp と faster-whisper によるローカル音声認識。Piper、Coqui、XTTS v2 によるローカル音声合成。LLaVA、Llama 3.2 Vision via Ollama などのビジョンモデル。完全なオフライン音声アシスタント構築とマルチモーダルパイプライン — クラウドマイクは不要。',
  },
]

// ZH theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_ZH: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: '概览 & 参考',
    question: '概览 & 参考：在本地LLM生态系统中从何处开始？',
    description: '所有值得了解的本地LLM工具目录 — 运行时、桌面应用、Web UI、编码助手、RAG系统、代理框架、语音/多模态、移动和生产力插件。确定堆栈之前的"存在什么"地图。',
  },
  {
    badge: '最简单的桌面应用',
    question: '最简单的桌面应用：您应该首先安装哪个本地AI应用？',
    description: '您下载并运行的ChatGPT风应用。无需终端。初学者的最佳入门点。LM Studio、Jan和GPT4All在速度、用户体验和隐私方面并排测试。',
  },
  {
    badge: 'RAG & 文档对话',
    question: 'RAG & 文档对话：您如何在本地与自己的PDF进行交谈？',
    description: '永不离开设备的个人知识库。AnythingLLM、PrivateGPT和Open WebUI在真实语料库中测试。法律、研究和技术内容的嵌入模型选择。',
  },
  {
    badge: '编码助手',
    question: '编码助手：本地LLM真的能替代GitHub Copilot吗？',
    description: 'Continue.dev、Cline、Aider和Qwen3-Coder在真实Next.js、Python和Rust项目上与GitHub Copilot基准。成本计算、设置指南和对质量差距的诚实评价。',
  },
  {
    badge: '本地AI代理 & 工具调用',
    question: '本地AI代理 & 工具调用：哪些工作流在没有云的情况下真正有效？',
    description: 'MCP、工具调用、自主代理 — 2026年前沿。诚实报告什么可靠运行（什么仍然失败）。用自托管代理和欧盟合规模式替代Zapier。',
  },
  {
    badge: '创意 & 角色扮演',
    question: '创意 & 角色扮演：哪些本地模型写得像人类？',
    description: '虚构、对话、世界构建、剧本 — 在50多个创意提示上测试。SillyTavern vs Agnai vs RisuAI用于角色创作。关于正当创意写作未审查模型的诚实看法。',
  },
  {
    badge: '移动 & 边缘LLM',
    question: '移动 & 边缘LLM：您能在手机上真正离线运行真正的AI吗？',
    description: 'iPhone、Android、iPad、Pixel — 在2026年真实设备上测试。Phi-4 Mini、Gemma 3 4B、SmolLM在速度和质量上的基准。语音助手和基于Whisper的离线管道。',
  },
  {
    badge: '生产力 & 知识工具',
    question: '生产力：您如何将本地AI集成到日常工作流程中？',
    description: 'Obsidian、Logseq、Joplin集成。电子邮件/日历自动化。用本地模型替代Grammarly和Notion AI。10,000+项目的完整个人知识库堆栈。',
  },
  {
    badge: '语音、语言 & 多模态',
    question: '语音 & 多模态：您如何构建完全离线的语音和视觉管道？',
    description: '使用whisper.cpp和faster-whisper的本地STT。使用Piper、Coqui和XTTS v2的本地TTS。LLaVA、Llama 3.2 Vision via Ollama等视觉模型。完整离线语音助手构建和多模态管道 — 无云麦克风。',
  },
]

// ES theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_ES: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Descripción General y Referencia',
    question: 'Descripción General y Referencia: ¿Por Dónde Empiezas en el Ecosistema de LLMs Locales?',
    description: 'Un directorio de todas las herramientas LLM locales que vale la pena conocer — runtimes, aplicaciones de escritorio, interfaces web, asistentes de código, sistemas RAG, frameworks de agentes, herramientas de voz/multimodal, móvil y plugins de productividad. El mapa de "qué existe" antes de comprometerse con un stack.',
  },
  {
    badge: 'Aplicaciones de Escritorio Más Fáciles',
    question: 'Aplicaciones de Escritorio Más Fáciles: ¿Cuál Debería Ser Tu Primera Aplicación de IA Local?',
    description: 'Aplicaciones tipo ChatGPT que descargas y ejecutas. Sin terminal requerido. Mejor punto de entrada para principiantes. LM Studio, Jan y GPT4All probadas lado a lado para velocidad, UX y privacidad.',
  },
  {
    badge: 'RAG y Chat de Documentos',
    question: 'RAG y Chat de Documentos: ¿Cómo Hablas Localmente con Tus Propios PDFs?',
    description: 'Bases de conocimiento personales que nunca dejan tu dispositivo. AnythingLLM, PrivateGPT y Open WebUI probadas en corpus reales. Selecciones de modelos de embedding para contenido legal, investigativo y técnico.',
  },
  {
    badge: 'Asistentes de Código',
    question: 'Asistentes de Código: ¿Puede un LLM Local Realmente Reemplazar GitHub Copilot?',
    description: 'Continue.dev, Cline, Aider y Qwen3-Coder comparados con GitHub Copilot en proyectos reales de Next.js, Python y Rust. Matemática de costos, guías de configuración y veredictos honestos sobre brechas de calidad.',
  },
  {
    badge: 'Agentes de IA Locales y Tool-Calling',
    question: 'Agentes de IA Locales y Tool-Calling: ¿Qué Flujos de Trabajo Realmente Funcionan sin la Nube?',
    description: 'MCP, tool-calling, agentes autónomos — la frontera de 2026. Reportes honestos sobre qué se ejecuta confiablemente (y qué aún falla). Reemplaza Zapier con agentes auto-alojados y patrones compatibles con la UE.',
  },
  {
    badge: 'Creativo y Roleplay',
    question: 'Creativo y Roleplay: ¿Cuáles Modelos Locales Escriben como Humanos?',
    description: 'Ficción, diálogos, worldbuilding, guiones — probados en 50+ prompts creativos. SillyTavern vs Agnai vs RisuAI para trabajo de personajes. El veredicto honesto sobre modelos sin censura para escritura creativa legítima.',
  },
  {
    badge: 'LLMs Móviles y Edge',
    question: 'LLMs Móviles y Edge: ¿Puedes Realmente Ejecutar IA Real Offline en un Teléfono?',
    description: 'iPhone, Android, iPad, Pixel — probados en dispositivos reales en 2026. Phi-4 Mini, Gemma 3 4B, SmolLM comparados para velocidad y calidad. Asistentes de voz y pipelines offline basados en Whisper.',
  },
  {
    badge: 'Productividad y Herramientas de Conocimiento',
    question: 'Productividad: ¿Cómo Integras IA Local en Tu Flujo de Trabajo Diario?',
    description: 'Integraciones con Obsidian, Logseq y Joplin. Automatización de email y calendario. Reemplaza Grammarly y Notion AI con modelos locales. Stack completo de base de conocimiento personal para 10,000+ entradas.',
  },
  {
    badge: 'Voz, Habla y Multimodal',
    question: 'Voz y Multimodal: ¿Cómo Construyes un Pipeline Completo de Voz y Visión Offline?',
    description: 'STT local con whisper.cpp y faster-whisper. Síntesis de voz local con Piper, Coqui y XTTS v2. Modelos de visión (LLaVA, Llama 3.2 Vision) vía Ollama. Asistentes de voz completamente offline y pipelines multimodales — sin micrófono en la nube.',
  },
]

// PT theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_PT: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Visão Geral e Referência',
    question: 'Visão Geral e Referência: Por Onde Começar no Ecossistema de LLMs Locais?',
    description: 'Um diretório de todas as ferramentas de LLM local que valem a pena conhecer — runtimes, apps de desktop, interfaces web, assistentes de código, sistemas RAG, frameworks de agentes, ferramentas de voz/multimodal, mobile e plugins de produtividade. O mapa do "o que existe" antes de você se comprometer com um stack.',
  },
  {
    badge: 'Apps de Desktop Mais Fáceis',
    question: 'Apps de Desktop Mais Fáceis: Qual App de IA Local Você Deve Instalar Primeiro?',
    description: 'Apps tipo ChatGPT que você baixa e roda. Sem terminal. Melhor ponto de entrada para iniciantes. LM Studio, Jan e GPT4All testados lado a lado em velocidade, UX e privacidade.',
  },
  {
    badge: 'RAG e Chat com Documentos',
    question: 'RAG e Chat com Documentos: Como Você Conversa Localmente com Seus Próprios PDFs?',
    description: 'Bases de conhecimento pessoais que nunca saem do seu dispositivo. AnythingLLM, PrivateGPT e Open WebUI testados em corpora reais. Escolhas de modelos de embedding para conteúdo jurídico, de pesquisa e técnico.',
  },
  {
    badge: 'Assistentes de Código',
    question: 'Assistentes de Código: Um LLM Local Pode Realmente Substituir o GitHub Copilot?',
    description: 'Continue.dev, Cline, Aider e Qwen3-Coder testados contra o GitHub Copilot em projetos reais de Next.js, Python e Rust. Cálculo de custos, guias de configuração e veredictos honestos sobre diferenças de qualidade.',
  },
  {
    badge: 'Agentes de IA Locais e Tool-Calling',
    question: 'Agentes de IA Locais e Tool-Calling: Quais Fluxos de Trabalho Realmente Funcionam sem a Nuvem?',
    description: 'MCP, tool-calling, agentes autônomos — a fronteira de 2026. Relatos honestos sobre o que roda de forma confiável (e o que ainda falha). Substituir o Zapier por agentes auto-hospedados e padrões em conformidade com a UE.',
  },
  {
    badge: 'Criativo e Roleplay',
    question: 'Criativo e Roleplay: Quais Modelos Locais Escrevem Como um Humano?',
    description: 'Ficção, diálogos, worldbuilding, roteiros — testados em mais de 50 prompts criativos. SillyTavern vs Agnai vs RisuAI para trabalho de personagens. O veredicto honesto sobre modelos sem censura para escrita criativa legítima.',
  },
  {
    badge: 'LLMs Mobile e Edge',
    question: 'LLMs Mobile e Edge: Você Consegue Rodar IA de Verdade Offline no Seu Celular?',
    description: 'iPhone, Android, iPad, Pixel — testados em dispositivos reais em 2026. Phi-4 Mini, Gemma 3 4B, SmolLM testados em velocidade e qualidade. Assistentes de voz e pipelines offline baseados em Whisper.',
  },
  {
    badge: 'Produtividade e Ferramentas de Conhecimento',
    question: 'Produtividade: Como Você Integra IA Local ao Seu Fluxo de Trabalho Diário?',
    description: 'Integrações com Obsidian, Logseq e Joplin. Automação de e-mail e calendário. Substitua o Grammarly e o Notion AI por modelos locais. O stack completo de base de conhecimento pessoal para mais de 10.000 itens.',
  },
  {
    badge: 'Voz, Fala e Multimodal',
    question: 'Voz e Multimodal: Como Você Constrói um Pipeline Totalmente Offline de Voz e Visão?',
    description: 'STT local com whisper.cpp e faster-whisper. TTS local com Piper, Coqui e XTTS v2. Modelos de visão (LLaVA, Llama 3.2 Vision) via Ollama. Assistentes de voz totalmente offline e pipelines multimodais — sem microfone na nuvem.',
  },
]

// KO theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_KO: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: '개요 및 참고',
    question: '개요 및 참고: 로컬 LLM 생태계에서 어디서 시작할까요?',
    description: '알아둘 만한 모든 로컬 LLM 도구 목록 — 런타임, 데스크톱 앱, 웹 UI, 코딩 어시스턴트, RAG 시스템, 에이전트 프레임워크, 음성/멀티모달, 모바일, 생산성 플러그인. 스택을 결정하기 전에 "무엇이 있는지" 파악하는 지도.',
  },
  {
    badge: '가장 쉬운 데스크톱 앱',
    question: '가장 쉬운 데스크톱 앱: 어떤 로컬 AI 앱을 먼저 설치해야 할까요?',
    description: '다운로드하면 바로 실행되는 ChatGPT 스타일 앱. 터미널 불필요. 초보자에게 최적의 진입점. LM Studio, Jan, GPT4All을 속도·UX·개인정보 보호 기준으로 비교 테스트.',
  },
  {
    badge: 'RAG 및 문서 채팅',
    question: 'RAG 및 문서 채팅: 내 PDF와 로컬에서 대화하는 방법은?',
    description: '기기를 떠나지 않는 개인 지식 베이스. AnythingLLM, PrivateGPT, Open WebUI를 실제 문서로 테스트. 법률·연구·기술 콘텐츠에 맞는 임베딩 모델 추천.',
  },
  {
    badge: '코딩 어시스턴트',
    question: '코딩 어시스턴트: 로컬 LLM이 정말 GitHub Copilot을 대체할 수 있을까요?',
    description: 'Continue.dev, Cline, Aider, Qwen3-Coder를 실제 Next.js·Python·Rust 프로젝트에서 GitHub Copilot과 벤치마크 비교. 비용 계산, 설정 가이드, 품질 차이에 대한 솔직한 평가.',
  },
  {
    badge: '로컬 AI 에이전트 및 Tool-Calling',
    question: '로컬 AI 에이전트 및 Tool-Calling: 클라우드 없이 실제로 작동하는 워크플로는?',
    description: 'MCP, 도구 호출, 자율 에이전트 — 2026년의 최전선. 안정적으로 작동하는 것(과 여전히 실패하는 것)에 대한 솔직한 보고서. Zapier를 셀프호스팅 에이전트로 교체하고 EU 규정 준수 패턴 적용.',
  },
  {
    badge: '창작 및 롤플레이',
    question: '창작 및 롤플레이: 어떤 로컬 모델이 사람처럼 글을 쓸까요?',
    description: '소설, 대화, 세계관 구축, 시나리오 — 50개 이상의 창작 프롬프트로 테스트. 캐릭터 작업을 위한 SillyTavern vs Agnai vs RisuAI. 합법적 창작 글쓰기를 위한 무검열 모델에 대한 솔직한 평가.',
  },
  {
    badge: '모바일 및 엣지 LLM',
    question: '모바일 및 엣지 LLM: 스마트폰에서 진짜 AI를 오프라인으로 실행할 수 있을까요?',
    description: 'iPhone, Android, iPad, Pixel — 2026년 실제 기기 테스트. Phi-4 Mini, Gemma 3 4B, SmolLM 속도 및 품질 벤치마크. 음성 어시스턴트와 Whisper 기반 오프라인 파이프라인.',
  },
  {
    badge: '생산성 및 지식 도구',
    question: '생산성 도구: 로컬 AI를 일상 워크플로에 어떻게 연결할까요?',
    description: 'Obsidian, Logseq, Joplin 통합. 이메일·캘린더 자동화. Grammarly와 Notion AI를 로컬 모델로 대체. 10,000개 이상 항목을 위한 완전한 개인 지식 베이스 스택.',
  },
  {
    badge: '음성, 음성 인식 및 멀티모달',
    question: '음성 및 멀티모달: 완전한 오프라인 음성·비전 파이프라인을 어떻게 구축할까요?',
    description: 'whisper.cpp와 faster-whisper로 로컬 STT. Piper, Coqui, XTTS v2로 로컬 TTS. Ollama를 통한 비전 모델(LLaVA, Llama 3.2 Vision). 완전한 오프라인 음성 어시스턴트와 멀티모달 파이프라인 — 클라우드 마이크 불필요.',
  },
]

// AR theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_AR: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'نظرة عامة ومرجع',
    question: 'نظرة عامة ومرجع: من أين تبدأ في منظومة LLM المحلية؟',
    description: 'دليل شامل لكل أدوات LLM المحلية التي تستحق المعرفة — بيئات التشغيل، تطبيقات سطح المكتب، واجهات الويب، مساعدو البرمجة، أنظمة RAG، أطر الوكلاء، أدوات الصوت والوسائط المتعددة، المحمول، وإضافات الإنتاجية. خريطة "ما هو موجود" قبل أن تلتزم بمكدس معين.',
  },
  {
    badge: 'أسهل تطبيقات سطح المكتب',
    question: 'أسهل تطبيقات سطح المكتب: أيّ تطبيق ذكاء اصطناعي محلي يجب أن تثبّته أولاً؟',
    description: 'تطبيقات شبيهة بـ ChatGPT تنزّلها وتشغّلها مباشرة. لا يحتاج إلى واجهة أوامر. أفضل نقطة دخول للمبتدئين. اختبار LM Studio وJan وGPT4All جنباً إلى جنب من حيث السرعة وتجربة الاستخدام والخصوصية.',
  },
  {
    badge: 'RAG والدردشة مع المستندات',
    question: 'RAG والدردشة مع المستندات: كيف تتحدث مع ملفاتك المحلية؟',
    description: 'قواعد معرفة شخصية لا تغادر جهازك قط. اختبار AnythingLLM وPrivateGPT وOpen WebUI على مجموعات مستندات حقيقية. اختيارات نماذج التضمين للمحتوى القانوني والبحثي والتقني.',
  },
  {
    badge: 'مساعدو البرمجة',
    question: 'مساعدو البرمجة: هل يستطيع LLM محلي حقاً أن يحلّ محل GitHub Copilot؟',
    description: 'اختبار Continue.dev وCline وAider وQwen3-Coder في مواجهة GitHub Copilot على مشاريع حقيقية بـ Next.js وPython وRust. حسابات التكلفة، وإرشادات الإعداد، وأحكام صريحة حول فجوات الجودة.',
  },
  {
    badge: 'وكلاء الذكاء الاصطناعي المحلي واستدعاء الأدوات',
    question: 'وكلاء الذكاء الاصطناعي المحلي واستدعاء الأدوات: أيّ سير عمل يعمل فعلاً بدون السحابة؟',
    description: 'بروتوكول MCP، استدعاء الأدوات، الوكلاء المستقلون — الحدود الأمامية لعام 2026. تقارير صريحة عمّا يعمل بموثوقية (وما يستمر في الفشل). استبدال Zapier بوكلاء مستضافة ذاتياً وأنماط الامتثال الأوروبي.',
  },
  {
    badge: 'الإبداع والأدوار التمثيلية',
    question: 'الإبداع والأدوار التمثيلية: أيّ النماذج المحلية تكتب كالبشر؟',
    description: 'الخيال والحوار وبناء العوالم والسيناريوهات — اختبار على أكثر من 50 موجهاً إبداعياً. SillyTavern مقابل Agnai مقابل RisuAI لعمل الشخصيات. الرأي الصريح في النماذج غير المقيّدة للكتابة الإبداعية المشروعة.',
  },
  {
    badge: 'LLMs المحمول والحافة',
    question: 'LLMs المحمول والحافة: هل يمكنك تشغيل ذكاء اصطناعي حقيقي دون اتصال على هاتفك؟',
    description: 'iPhone وAndroid وiPad وPixel — اختبار على أجهزة حقيقية في 2026. قياس Phi-4 Mini وGemma 3 4B وSmolLM من حيث السرعة والجودة. المساعدون الصوتيون وخطوط أنابيب Whisper للعمل دون اتصال.',
  },
  {
    badge: 'أدوات الإنتاجية وإدارة المعرفة',
    question: 'أدوات الإنتاجية: كيف تدمج الذكاء الاصطناعي المحلي في سير عملك اليومي؟',
    description: 'تكاملات Obsidian وLogseq وJoplin. أتمتة البريد الإلكتروني والتقويم. استبدال Grammarly وNotion AI بنماذج محلية. مكدس قاعدة المعرفة الشخصية الكاملة لأكثر من 10,000 عنصر.',
  },
  {
    badge: 'الصوت والكلام والوسائط المتعددة',
    question: 'الصوت والوسائط المتعددة: كيف تبني خط أنابيب صوت ورؤية يعمل بالكامل دون اتصال؟',
    description: 'تحويل الكلام إلى نص محلياً عبر whisper.cpp وfaster-whisper. تحويل النص إلى كلام محلياً عبر Piper وCoqui وXTTS v2. نماذج الرؤية (LLaVA وLlama 3.2 Vision) عبر Ollama. مساعدون صوتيون كاملون دون اتصال وخطوط أنابيب متعددة الوسائط — بدون ميكروفون سحابي.',
  },
]

type HubHeroL10n = { h1: string; intro: string; introBold: string; keyTakeaways: string[] }

const HUB_HERO_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko', HubHeroL10n> = {
  en: {
    h1: 'Local LLM Software — Guides & Comparisons by Use Case',
    intro: 'Local LLMs are no longer just chatbots. In 2026 they run inside your code editor, query your private documents, automate workflows, and replace tools you currently pay monthly for.',
    introBold: 'If you can run Ollama or LM Studio, you can replace 5-10 SaaS subscriptions before the end of this month.',
    keyTakeaways: [
      'Local LLM ecosystem in 2026 = chat tools, RAG systems, coding agents, creative apps, mobile inference, and tool-calling agents.',
      'Best entry points: LM Studio (beginners), Ollama + Open WebUI (balance), Continue.dev (coders).',
      'The biggest 2026 shift: agentic coding harnesses replacing $200/month cloud API bills.',
      'Mobile and edge LLMs are the fastest-growing segment — running on phones, tablets, and NPUs.',
      'Privacy, cost arbitrage, and offline reliability are the three forces driving adoption.',
    ],
  },
  de: {
    h1: 'Lokale LLM-Software — Guides und Vergleiche nach Anwendungsfall',
    intro: 'Lokale LLMs sind längst mehr als Chatbots. 2026 laufen sie in Ihrem Code-Editor, durchsuchen private Dokumente, automatisieren Workflows und ersetzen Tools, für die Sie monatlich zahlen.',
    introBold: 'Wer Ollama oder LM Studio betreiben kann, ersetzt in diesem Monat fünf bis zehn SaaS-Abonnements.',
    keyTakeaways: [
      'Das lokale LLM-Ökosystem 2026: Chat-Tools, RAG-Systeme, Coding-Agenten, kreative Apps, mobile Inferenz und Tool-Calling-Agenten.',
      'Beste Einstiegspunkte: LM Studio (Einsteiger), Ollama + Open WebUI (ausgewogen), Continue.dev (Entwickler).',
      'Größter Wandel 2026: Agentenbasierte Coding-Harnesses ersetzen Cloud-API-Kosten von 200 €/Monat.',
      'Mobile und Edge-LLMs sind das am schnellsten wachsende Segment — auf Smartphones, Tablets und NPUs.',
      'Datenschutz, Kostenersparnis und Offline-Zuverlässigkeit sind die drei treibenden Kräfte der Verbreitung.',
    ],
  },
  fr: {
    h1: "Logiciels LLM Locaux — Guides et Comparatifs par Cas d'Usage",
    intro: 'Les LLMs locaux ne sont plus de simples chatbots. En 2026, ils tournent dans votre éditeur de code, interrogent vos documents privés, automatisent les workflows et remplacent les outils que vous payez mensuellement.',
    introBold: 'Si vous pouvez exécuter Ollama ou LM Studio, vous remplacez 5 à 10 abonnements SaaS d\'ici la fin du mois.',
    keyTakeaways: [
      'L\'écosystème des LLMs locaux en 2026 = outils de chat, systèmes RAG, agents de codage, applications créatives, inférence mobile et agents de tool-calling.',
      'Points d\'entrée recommandés : LM Studio (débutants), Ollama + Open WebUI (équilibre), Continue.dev (développeurs).',
      'Plus grand changement 2026 : les harnesses de codage agentic remplacent les factures cloud de 200 $/mois.',
      'Les LLMs mobiles et edge sont le segment à plus forte croissance — sur téléphones, tablettes et NPUs.',
      'Confidentialité, arbitrage des coûts et fiabilité hors ligne sont les trois forces motrices de l\'adoption.',
    ],
  },
  ja: {
    h1: 'ローカルLLMソフトウェア — 用途別ガイドと比較',
    intro: 'ローカルLLMはもはやチャットボットに限った話ではありません。2026年は、コードエディタ内で実行され、プライベートドキュメントをクエリし、ワークフローを自動化し、月単位で支払っているツールを置き換えています。',
    introBold: 'OllamaまたはLM Studioを実行できれば、月末までに5～10のSaaSサブスクリプションを削減できます。',
    keyTakeaways: [
      '2026年のローカルLLMエコシステム = チャットツール、RAGシステム、コーディングエージェント、クリエイティブアプリ、モバイル推論、ツール呼び出しエージェント。',
      '推奨エントリーポイント: LM Studio（初心者向け）、Ollama + Open WebUI（バランス型）、Continue.dev（開発者向け）。',
      '2026年最大の変化: エージェントティックコーディングハーネスが月額200ドルのクラウドAPI料金を削減。',
      'モバイルおよびエッジLLMが最も急速に成長しているセグメント — スマートフォン、タブレット、NPUで実行。',
      'プライバシー、コスト裁定取引、オフライン信頼性が導入を推進する3つの力。',
    ],
  },
  zh: {
    h1: '本地 LLM 软件 — 按用例分类的指南与对比',
    intro: '本地LLM已不仅仅是聊天机器人。2026年它们在您的代码编辑器内运行、查询您的私有文档、自动化工作流程，并替代您当前按月支付的工具。',
    introBold: '如果您可以运行Ollama或LM Studio，可以在本月底前替代5～10个SaaS订阅。',
    keyTakeaways: [
      '2026年本地LLM生态 = 聊天工具、RAG系统、编码代理、创意应用、移动推理、工具调用代理。',
      '最佳入门点：LM Studio（初学者）、Ollama + Open WebUI（均衡）、Continue.dev（编码者）。',
      '2026年最大转变：代理编码框架替代$200/月的云API账单。',
      '移动和边缘LLM增长最快 — 在手机、平板和NPU上运行。',
      '隐私、成本优化和离线可靠性推动采用的三股力量。',
    ],
  },
  es: {
    h1: 'Software LLM Local — Guías y Comparativas por Caso de Uso',
    intro: 'Los LLMs locales ya no son solo chatbots. En 2026 se ejecutan dentro de tu editor de código, consultan tus documentos privados, automatizan flujos de trabajo y reemplazan herramientas por las que actualmente pagas mensualmente.',
    introBold: 'Si puedes ejecutar Ollama o LM Studio, reemplazas 5 a 10 suscripciones SaaS antes de fin de mes.',
    keyTakeaways: [
      'Ecosistema de LLM local en 2026 = herramientas de chat, sistemas RAG, agentes de código, aplicaciones creativas, inferencia móvil y agentes de tool-calling.',
      'Mejores puntos de entrada: LM Studio (principiantes), Ollama + Open WebUI (equilibrado), Continue.dev (desarrolladores).',
      'El cambio más grande en 2026: harnesses de codificación agentic reemplazan facturas de API en la nube de $200/mes.',
      'LLMs móviles y edge son el segmento de crecimiento más rápido — corriendo en teléfonos, tabletas y NPUs.',
      'Privacidad, arbitraje de costos y confiabilidad offline son las tres fuerzas impulsoras de la adopción.',
    ],
  },
  pt: {
    h1: 'Software LLM Local — Guias e Comparativos por Caso de Uso',
    intro: 'LLMs locais já não são apenas chatbots. Em 2026 eles rodam dentro do seu editor de código, consultam seus documentos privados, automatizam fluxos de trabalho e substituem ferramentas que você paga mensalmente hoje.',
    introBold: 'Se você consegue rodar o Ollama ou o LM Studio, você substitui 5 a 10 assinaturas de SaaS antes do fim do mês.',
    keyTakeaways: [
      'Ecossistema de LLM local em 2026 = ferramentas de chat, sistemas RAG, agentes de código, apps criativos, inferência em mobile e agentes de tool-calling.',
      'Melhores pontos de entrada: LM Studio (iniciantes), Ollama + Open WebUI (equilíbrio), Continue.dev (programadores).',
      'A maior virada de 2026: harnesses de codificação agentic substituindo contas de API na nuvem de US$ 200/mês.',
      'LLMs mobile e edge são o segmento que mais cresce — rodando em celulares, tablets e NPUs.',
      'Privacidade, arbitragem de custos e confiabilidade offline são as três forças que impulsionam a adoção.',
    ],
  },
  ar: {
    h1: 'برمجيات LLM المحلية — أدلة ومقارنات حسب حالة الاستخدام',
    intro: 'لم تعد نماذج اللغة المحلية مجرد روبوتات دردشة. في 2026 تعمل داخل محرر الكود الخاص بك، وتستعلم عن مستنداتك الخاصة، وتؤتمت سير العمل، وتحل محل الأدوات التي تدفع ثمنها شهرياً.',
    introBold: 'إذا كنت قادراً على تشغيل Ollama أو LM Studio، يمكنك استبدال 5 إلى 10 اشتراكات SaaS قبل نهاية هذا الشهر.',
    keyTakeaways: [
      'منظومة LLM المحلية في 2026 = أدوات الدردشة وأنظمة RAG ووكلاء البرمجة والتطبيقات الإبداعية والاستدلال على الهاتف المحمول ووكلاء استدعاء الأدوات.',
      'أفضل نقاط البداية: LM Studio (للمبتدئين)، Ollama + Open WebUI (التوازن)، Continue.dev (للمطورين).',
      'أكبر تحول في 2026: أطر البرمجة الذكية تحل محل فواتير API السحابية البالغة 200 دولار/شهر.',
      'نماذج LLM للهاتف والحافة هي الشريحة الأسرع نمواً — تعمل على الهواتف والأجهزة اللوحية ووحدات NPU.',
      'الخصوصية وتحسين التكاليف والموثوقية دون اتصال هي القوى الثلاث التي تدفع الاعتماد.',
    ],
  },
  ko: {
    h1: '로컬 LLM 소프트웨어 — 용도별 가이드와 비교',
    intro: '로컬 LLM은 더 이상 단순한 챗봇이 아닙니다. 2026년에는 코드 에디터 안에서 실행되고, 개인 문서를 쿼리하며, 워크플로를 자동화하고, 월정액을 지불하던 도구들을 대체합니다.',
    introBold: 'Ollama 또는 LM Studio를 실행할 수 있다면, 이번 달 말까지 5~10개의 SaaS 구독을 절약할 수 있습니다.',
    keyTakeaways: [
      '2026년 로컬 LLM 생태계 = 채팅 도구, RAG 시스템, 코딩 에이전트, 크리에이티브 앱, 모바일 추론, 도구 호출 에이전트.',
      '최적 진입점: LM Studio(초보자), Ollama + Open WebUI(균형), Continue.dev(개발자).',
      '2026년 최대 변화: 에이전틱 코딩 하네스가 월 200달러 클라우드 API 비용을 대체.',
      '모바일 및 엣지 LLM이 가장 빠르게 성장하는 분야 — 스마트폰, 태블릿, NPU에서 실행.',
      '개인 정보 보호, 비용 절감, 오프라인 신뢰성이 채택을 이끄는 세 가지 힘.',
    ],
  },
}

type HubLabelsL10n = {
  faqHeading: string
  keyTakeawaysLabel: string
  lastUpdatedLabel: string
  directoryHeading: string
  directoryBody: string
  directoryCta: string
  relatedReadingHeading: string
  relatedReadingLinks: Array<{ href: string; label: string }>
}

const HUB_LABELS_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko', HubLabelsL10n> = {
  en: {
    faqHeading: 'Frequently Asked Questions',
    keyTakeawaysLabel: 'Key Takeaways',
    lastUpdatedLabel: 'Last updated:',
    directoryHeading: 'Browse the Full Software Directory',
    directoryBody: 'Every tool mentioned across these guides — plus dozens more — is catalogued with description, licence, and link in one place.',
    directoryCta: 'Open the 88-tool directory →',
    relatedReadingHeading: 'Related Reading',
    relatedReadingLinks: [
      { href: '/local-llms/local-llm-hardware-guide-2026', label: 'Local LLM Hardware Guide 2026' },
      { href: '/local-llms/best-local-llms-2026', label: 'Best Local LLMs in 2026' },
      { href: '/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/prompt-engineering/rag-explained', label: 'RAG Explained' },
    ],
  },
  de: {
    faqHeading: 'Häufig gestellte Fragen',
    keyTakeawaysLabel: 'Wichtigste Erkenntnisse',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    directoryHeading: 'Das vollständige Software-Verzeichnis durchsuchen',
    directoryBody: 'Jedes in diesen Guides erwähnte Tool — plus Dutzende weitere — ist an einem Ort mit Beschreibung, Lizenz und Link katalogisiert.',
    directoryCta: 'Zum Verzeichnis mit 88 Tools →',
    relatedReadingHeading: 'Weiterführende Literatur',
    relatedReadingLinks: [
      { href: '/de/local-llms/local-llm-hardware-guide-2026', label: 'Lokale LLM-Hardware-Guide 2026' },
      { href: '/de/local-llms/best-local-llms-2026', label: 'Die besten lokalen LLMs 2026' },
      { href: '/de/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs. Ollama vs. vLLM' },
      { href: '/de/prompt-engineering/rag-explained', label: 'RAG erklärt' },
    ],
  },
  fr: {
    faqHeading: 'Questions Fréquemment Posées',
    keyTakeawaysLabel: 'Points Clés',
    lastUpdatedLabel: 'Dernière mise à jour :',
    directoryHeading: 'Parcourir l\'Annuaire Complet des Logiciels',
    directoryBody: 'Chaque outil mentionné dans ces guides — et des dizaines d\'autres — est répertorié au même endroit avec description, licence et lien.',
    directoryCta: 'Voir l\'annuaire de 88 outils →',
    relatedReadingHeading: 'Lectures Complémentaires',
    relatedReadingLinks: [
      { href: '/fr/local-llms/local-llm-hardware-guide-2026', label: 'Guide Matériel LLM Local 2026' },
      { href: '/fr/local-llms/best-local-llms-2026', label: 'Meilleurs LLMs Locaux en 2026' },
      { href: '/fr/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/fr/prompt-engineering/rag-explained', label: 'RAG Expliqué' },
    ],
  },
  ja: {
    faqHeading: 'よくある質問',
    keyTakeawaysLabel: '重要ポイント',
    lastUpdatedLabel: '最終更新:',
    directoryHeading: '完全なソフトウェアディレクトリを見る',
    directoryBody: 'これらのガイドで紹介されているすべてのツール — さらに数十件 — を、説明・ライセンス・リンク付きで一箇所にまとめています。',
    directoryCta: '88ツールのディレクトリを開く →',
    relatedReadingHeading: '関連リソース',
    relatedReadingLinks: [
      { href: '/ja/local-llms/local-llm-hardware-guide-2026', label: 'ローカルLLMハードウェアガイド2026' },
      { href: '/ja/local-llms/best-local-llms-2026', label: '2026年最高のローカルLLM' },
      { href: '/ja/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/ja/prompt-engineering/rag-explained', label: 'RAG解説' },
    ],
  },
  zh: {
    faqHeading: '常见问题',
    keyTakeawaysLabel: '关键要点',
    lastUpdatedLabel: '最后更新:',
    directoryHeading: '浏览完整软件目录',
    directoryBody: '这些指南中提到的每一款工具——以及数十款其他工具——都在同一处附有描述、许可证和链接。',
    directoryCta: '打开 88 款工具目录 →',
    relatedReadingHeading: '相关阅读',
    relatedReadingLinks: [
      { href: '/zh/local-llms/local-llm-hardware-guide-2026', label: '本地LLM硬件指南2026' },
      { href: '/zh/local-llms/best-local-llms-2026', label: '2026年最佳本地LLM' },
      { href: '/zh/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/zh/prompt-engineering/rag-explained', label: 'RAG详解' },
    ],
  },
  es: {
    faqHeading: 'Preguntas Frecuentes',
    keyTakeawaysLabel: 'Puntos Clave',
    lastUpdatedLabel: 'Última actualización:',
    directoryHeading: 'Explora el Directorio Completo de Software',
    directoryBody: 'Cada herramienta mencionada en estas guías — y docenas más — está catalogada en un solo lugar con descripción, licencia y enlace.',
    directoryCta: 'Abrir el directorio de 88 herramientas →',
    relatedReadingHeading: 'Lecturas Relacionadas',
    relatedReadingLinks: [
      { href: '/es/local-llms/local-llm-hardware-guide-2026', label: 'Guía de Hardware para LLM Local 2026' },
      { href: '/es/local-llms/best-local-llms-2026', label: 'Mejores LLMs Locales en 2026' },
      { href: '/es/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/es/prompt-engineering/rag-explained', label: 'RAG Explicado' },
    ],
  },
  pt: {
    faqHeading: 'Perguntas Frequentes',
    keyTakeawaysLabel: 'Pontos-Chave',
    lastUpdatedLabel: 'Última atualização:',
    directoryHeading: 'Explore o Diretório Completo de Software',
    directoryBody: 'Cada ferramenta mencionada nestes guias — e dezenas de outras — está catalogada em um só lugar com descrição, licença e link.',
    directoryCta: 'Abrir o diretório de 88 ferramentas →',
    relatedReadingHeading: 'Leituras Relacionadas',
    relatedReadingLinks: [
      { href: '/pt/local-llms/local-llm-hardware-guide-2026', label: 'Guia de Hardware para LLM Local 2026' },
      { href: '/pt/local-llms/best-local-llms-2026', label: 'Melhores LLMs Locais em 2026' },
      { href: '/pt/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/pt/prompt-engineering/rag-explained', label: 'RAG Explicado' },
    ],
  },
  ar: {
    faqHeading: 'الأسئلة الشائعة',
    keyTakeawaysLabel: 'النقاط الرئيسية',
    lastUpdatedLabel: 'آخر تحديث:',
    directoryHeading: 'تصفح دليل البرمجيات الكامل',
    directoryBody: 'كل أداة وردت في هذه الأدلة — وعشرات أخرى — مُصنّفة في مكان واحد مع الوصف والترخيص والرابط.',
    directoryCta: 'افتح دليل الـ 88 أداة ←',
    relatedReadingHeading: 'قراءات ذات صلة',
    relatedReadingLinks: [
      { href: '/ar/local-llms/local-llm-hardware-guide-2026', label: 'دليل أجهزة LLM المحلي 2026' },
      { href: '/ar/local-llms/best-local-llms-2026', label: 'أفضل نماذج LLM المحلية 2026' },
      { href: '/ar/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp مقابل Ollama مقابل vLLM' },
      { href: '/ar/prompt-engineering/rag-explained', label: 'شرح RAG' },
    ],
  },
  ko: {
    faqHeading: '자주 묻는 질문',
    keyTakeawaysLabel: '핵심 요점',
    lastUpdatedLabel: '최종 업데이트:',
    directoryHeading: '전체 소프트웨어 디렉터리 보기',
    directoryBody: '이 가이드들에서 언급된 모든 도구와 그 외 수십 개의 도구를 설명, 라이선스, 링크와 함께 한곳에 정리했습니다.',
    directoryCta: '88개 도구 디렉터리 열기 →',
    relatedReadingHeading: '관련 자료',
    relatedReadingLinks: [
      { href: '/ko/local-llms/local-llm-hardware-guide-2026', label: '로컬 LLM 하드웨어 가이드 2026' },
      { href: '/ko/local-llms/best-local-llms-2026', label: '2026년 최고의 로컬 LLM' },
      { href: '/ko/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/ko/prompt-engineering/rag-explained', label: 'RAG 설명' },
    ],
  },
}

const HUB_FAQS_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko', HubFaq[]> = {
  en: [
    { q: 'What is a local LLM and how is it different from ChatGPT?', a: 'A local LLM runs entirely on your own hardware — phone, laptop, desktop, or server — without sending prompts to any cloud service. ChatGPT runs on OpenAI servers and sends your prompts there. Local LLMs are private, work offline, and have no per-token cost; ChatGPT is faster on rare topics and requires no setup.' },
    { q: 'Do I need a powerful computer to run local LLMs?', a: 'No. 4 GB RAM and an integrated GPU is enough for small models like Phi-4 Mini or Gemma 3 4B. 16 GB RAM and a midrange GPU (RTX 3060 12 GB or M3 Pro) covers most everyday workflows. Heavy power users want 24+ GB VRAM.' },
    { q: 'Are local LLMs as good as ChatGPT or Claude?', a: 'For everyday tasks (chat, summarization, common code) the gap is 5-15% in 2026. For frontier reasoning and very obscure knowledge, cloud models still lead. The cost-quality trade-off favors local for most users with private or sensitive data.' },
    { q: 'Can I run local LLMs on my phone?', a: 'Yes. Apps like LLM Farm and Private LLM run Phi-4 Mini and Gemma 3 4B on iPhone 16+ and flagship Android devices. Performance is 8-15 tokens/sec — usable for chat, draft writing, and offline reference.' },
    { q: 'How much does it cost to run a local LLM?', a: 'After hardware, marginal cost is just electricity — usually $1-3/month for moderate use. The hardware investment ranges from $0 (existing laptop) to ~$2,000 for a high-end build. Compared to $20-200/month SaaS subscriptions, payback is typically 8-24 months.' },
    { q: 'Is my data really private when using local LLMs?', a: 'Yes — assuming the app does not telemeter prompts, which most do not. Verifiable via open-source apps (Jan, GPT4All, Ollama) where you can audit network traffic. The model file itself does not "phone home" — it is just weights on disk.' },
    { q: 'What is the easiest local LLM app for beginners?', a: 'GPT4All has the simplest install (one click, runs on 8 GB RAM). LM Studio is the most feature-rich. Jan is best for privacy. See the dedicated LM Studio vs Jan vs GPT4All comparison for benchmarks on each.' },
    { q: 'Can local LLMs replace my coding assistant?', a: 'Yes. Continue.dev + Ollama + Qwen3-Coder reaches 90-95% of GitHub Copilot quality on everyday TypeScript and Python work, with full code privacy. Hardware requirements are RTX 3060 12 GB or M3 Pro+ Mac.' },
    { q: 'Do local LLMs work offline completely?', a: 'Yes — once the model is downloaded, all inference is local. Useful for travel, restricted networks, secure environments, and anywhere internet is unreliable.' },
    { q: 'Which local LLM stack is best for businesses in the EU?', a: 'For GDPR/EU AI Act compliance: Ollama or vLLM running on dedicated hardware, paired with Jan (UI), Continue.dev (coding), and AnythingLLM (RAG). All open source, all auditable, all on-prem. Mistral Large is a strong EU-hosted alternative for hybrid setups.' },
    { q: 'Is there a directory of local LLM software?', a: 'Yes — the Local LLM Software Directory catalogues 88 tools across nine categories (runtimes, desktop apps, RAG, coding, agents, mobile, and more) with description, licence, and link for each.' },
    { q: 'SillyTavern vs Open WebUI: which should I use?', a: 'They solve different problems. SillyTavern is a roleplay and character-chat frontend built for persona management and long-form fiction. Open WebUI is a general-purpose chat and RAG frontend built for document Q&A and everyday assistant use. Pick SillyTavern for creative writing and character work; pick Open WebUI for research, RAG, and daily chat.' },
    { q: 'Obsidian vs Ollama: what is the difference?', a: 'They are not competitors — Obsidian is a note-taking app, and Ollama is a local model runtime. Used together, Ollama runs the model locally while an Obsidian plugin sends your notes to it for summarization, Q&A, or writing assistance.' },
  ],
  de: [
    { q: 'Was ist ein lokales LLM und worin unterscheidet es sich von ChatGPT?', a: 'Ein lokales LLM läuft vollständig auf Ihrer eigenen Hardware — Smartphone, Laptop, Desktop oder Server — ohne Prompts an einen Cloud-Dienst zu senden. ChatGPT läuft auf OpenAI-Servern und überträgt Ihre Eingaben dorthin. Lokale LLMs sind privat, funktionieren offline und verursachen keine Kosten pro Token; ChatGPT ist bei seltenen Themen schneller und erfordert keine Einrichtung.' },
    { q: 'Benötige ich einen leistungsstarken Computer für lokale LLMs?', a: 'Nein. 4 GB RAM und eine integrierte GPU reichen für kleine Modelle wie Phi-4 Mini oder Gemma 3 4B. 16 GB RAM und eine mittelklassige GPU (RTX 3060 12 GB oder M3 Pro) decken die meisten Alltagsworkflows ab. Power-User benötigen 24+ GB VRAM.' },
    { q: 'Sind lokale LLMs so gut wie ChatGPT oder Claude?', a: 'Für Alltagsaufgaben (Chat, Zusammenfassung, gängiger Code) beträgt der Unterschied 2026 5–15 %. Bei Frontier-Reasoning und sehr obskurem Wissen liegen Cloud-Modelle noch vorn. Das Kosten-Qualitäts-Verhältnis spricht für lokale Modelle bei den meisten Nutzern mit privaten oder sensiblen Daten.' },
    { q: 'Kann ich lokale LLMs auf meinem Smartphone nutzen?', a: 'Ja. Apps wie LLM Farm und Private LLM führen Phi-4 Mini und Gemma 3 4B auf iPhone 16+ und aktuellen Android-Flaggschiffen aus. Die Leistung beträgt 8–15 Tokens/Sek. — nutzbar für Chat, Entwürfe und Offline-Nachschlagewerke.' },
    { q: 'Was kostet der Betrieb eines lokalen LLMs?', a: 'Nach der Hardware-Investition fallen nur Stromkosten an — meist 1–3 €/Monat bei moderater Nutzung. Die Hardware-Investition reicht von 0 € (vorhandener Laptop) bis ca. 1.999 € für einen High-End-Build. Im Vergleich zu SaaS-Abonnements von 20–200 €/Monat ist die Amortisation typischerweise in 8–24 Monaten erreicht.' },
    { q: 'Sind meine Daten bei lokalen LLMs wirklich privat?', a: 'Ja — vorausgesetzt, die App sendet keine Prompts per Telemetrie, was die meisten nicht tun. Überprüfbar mit Open-Source-Apps (Jan, GPT4All, Ollama), bei denen Sie den Netzwerkverkehr auditieren können. Die Modelldatei selbst sendet keine Daten — sie sind lediglich Gewichte auf der Festplatte.' },
    { q: 'Welche lokale LLM-App ist am einfachsten für Einsteiger?', a: 'GPT4All hat die einfachste Installation (ein Klick, läuft mit 8 GB RAM). LM Studio bietet den größten Funktionsumfang. Jan ist die beste Wahl für Datenschutz. Einen Vergleich mit Benchmarks finden Sie im Artikel LM Studio vs. Jan vs. GPT4All.' },
    { q: 'Können lokale LLMs meinen Coding-Assistenten ersetzen?', a: 'Ja. Continue.dev + Ollama + Qwen3-Coder erreicht 90–95 % der GitHub-Copilot-Qualität bei alltäglichen TypeScript- und Python-Aufgaben — mit vollständiger Code-Privatsphäre. Hardware-Anforderungen: RTX 3060 12 GB oder M3 Pro+ Mac.' },
    { q: 'Funktionieren lokale LLMs vollständig offline?', a: 'Ja — sobald das Modell heruntergeladen ist, findet die gesamte Inferenz lokal statt. Nützlich für Reisen, eingeschränkte Netzwerke, sichere Umgebungen und überall dort, wo das Internet unzuverlässig ist.' },
    { q: 'Welcher lokale LLM-Stack eignet sich am besten für Unternehmen in der EU?', a: 'Für DSGVO- und EU-KI-Gesetz-Konformität: Ollama oder vLLM auf dedizierter Hardware, kombiniert mit Jan (UI), Continue.dev (Coding) und AnythingLLM (RAG). Alles Open Source, alles auditierbar, alles On-Premises. Mistral Large ist eine starke EU-gehostete Alternative für hybride Setups.' },
    { q: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?', a: 'Ja, grundsätzlich. Da lokale LLMs alle Daten ausschließlich auf Ihrer eigenen Hardware verarbeiten, erfüllen Sie automatisch die Anforderungen der DSGVO-Artikel 5 (Datensparsamkeit) und Artikel 25 (Datenschutz durch Technikgestaltung). Im Gegensatz zu Cloud-LLMs müssen Sie keinen Auftragsverarbeitungsvertrag (AVV) gemäß Artikel 28 mit einem US-amerikanischen Anbieter abschließen. Für Unternehmen empfehlen sich Open-Source-Runtimes (Ollama, vLLM) in Kombination mit den BSI-Grundschutz-Katalogen, um interne IT-Sicherheitsanforderungen vollständig zu erfüllen. Ein Datenschutz-Audit ist dennoch ratsam, wenn personenbezogene Daten verarbeitet werden.' },
    { q: 'Sind lokale LLMs für den deutschen Mittelstand geeignet?', a: 'Ja, besonders für mittelständische Unternehmen mit strengen Datenschutz- oder Compliance-Anforderungen. Lokale LLMs bieten Datensouveränität ohne laufende SaaS-Kosten, was die Amortisation in 8–18 Monaten ermöglicht. Empfohlener Stack für den Mittelstand: Ollama als Runtime, Jan oder Open WebUI als Benutzeroberfläche, AnythingLLM für Dokument-RAG und Continue.dev für die Softwareentwicklung. Für unternehmenskritische Anwendungen empfiehlt das BSI (Bundesamt für Sicherheit in der Informationstechnik) den Einsatz von On-Premises-Modellen in Übereinstimmung mit dem BSI-Grundschutz-Kompendium.' },
    { q: 'Gibt es ein Verzeichnis für lokale LLM-Software?', a: 'Ja — das Local LLM Software Directory katalogisiert 88 Tools in neun Kategorien (Runtimes, Desktop-Apps, RAG, Coding, Agenten, Mobile und mehr) mit Beschreibung, Lizenz und Link für jedes.' },
    { q: 'SillyTavern vs. Open WebUI: Was sollten Sie verwenden?', a: 'Beide lösen unterschiedliche Probleme. SillyTavern ist ein Roleplay- und Charakter-Chat-Frontend für Persona-Verwaltung und Langform-Fiktion. Open WebUI ist ein allgemeines Chat- und RAG-Frontend für Dokumenten-Q&A und den täglichen Assistenten-Einsatz. Wählen Sie SillyTavern für kreatives Schreiben und Charakterarbeit; wählen Sie Open WebUI für Recherche, RAG und tägliches Chatten.' },
    { q: 'Obsidian vs. Ollama: Was ist der Unterschied?', a: 'Die beiden sind keine Konkurrenten — Obsidian ist eine Notiz-App, Ollama eine lokale Modell-Runtime. Zusammen verwendet, führt Ollama das Modell lokal aus, während ein Obsidian-Plugin Ihre Notizen zur Zusammenfassung, Beantwortung oder Schreibunterstützung dorthin sendet.' },
  ],
  fr: [
    { q: 'Qu\'est-ce qu\'un LLM local et en quoi est-ce différent de ChatGPT ?', a: 'Un LLM local s\'exécute entièrement sur votre matériel — téléphone, laptop, ordinateur de bureau ou serveur — sans envoyer vos prompts à aucun service cloud. ChatGPT s\'exécute sur les serveurs OpenAI et y envoie vos prompts. Les LLMs locaux sont privés, fonctionnent hors ligne et n\'ont aucun coût par token ; ChatGPT est plus rapide sur les sujets rares et ne nécessite aucune configuration.' },
    { q: 'Ai-je besoin d\'un ordinateur puissant pour exécuter des LLMs locaux ?', a: 'Non. 4 Go de RAM et un GPU intégré suffisent pour les petits modèles comme Phi-4 Mini ou Gemma 3 4B. 16 Go de RAM et un GPU milieu de gamme (RTX 3060 12 Go ou M3 Pro) couvrent la plupart des workflows quotidiens. Les utilisateurs avancés veulent 24+ Go de VRAM.' },
    { q: 'Les LLMs locaux sont-ils aussi bons que ChatGPT ou Claude ?', a: 'Pour les tâches quotidiennes (chat, résumé, code courant), l\'écart est de 5 à 15 % en 2026. Pour le raisonnement de pointe et les connaissances très obscures, les modèles cloud gardent une longueur d\'avance. Le compromis coût-qualité favorise le local pour la plupart des utilisateurs ayant des données privées ou sensibles.' },
    { q: 'Puis-je exécuter des LLMs locaux sur mon téléphone ?', a: 'Oui. Des applications comme LLM Farm et Private LLM exécutent Phi-4 Mini et Gemma 3 4B sur iPhone 16+ et les appareils Android phares. Les performances sont de 8 à 15 tokens/sec — utilisable pour le chat, la rédaction de brouillons et les références hors ligne.' },
    { q: 'Combien coûte l\'exécution d\'un LLM local ?', a: 'Après le matériel, le coût marginal n\'est que l\'électricité — généralement 1 à 3 $/mois pour une utilisation modérée. L\'investissement matériel varie de 0 $ (laptop existant) à env. 2 000 $ pour une configuration haut de gamme. Par rapport aux abonnements SaaS de 20 à 200 $/mois, l\'amortissement est généralement de 8 à 24 mois.' },
    { q: 'Mes données sont-elles vraiment privées quand j\'utilise des LLMs locaux ?', a: 'Oui — en supposant que l\'application ne télémètre pas les prompts, ce que la plupart ne font pas. Vérifiable via des applications open source (Jan, GPT4All, Ollama) où vous pouvez vérifier le trafic réseau. Le fichier de modèle lui-même n\'« appelle pas à la maison » — il n\'est que des poids sur disque.' },
    { q: 'Quelle est l\'application LLM local la plus simple pour les débutants ?', a: 'GPT4All a l\'installation la plus simple (un clic, s\'exécute avec 8 Go de RAM). LM Studio offre le plus de fonctionnalités. Jan est le meilleur pour la confidentialité. Consultez la comparaison dédiée LM Studio vs Jan vs GPT4All pour les benchmarks de chacun.' },
    { q: 'Les LLMs locaux peuvent-ils remplacer mon assistant de codage ?', a: 'Oui. Continue.dev + Ollama + Qwen3-Coder atteint 90 à 95 % de la qualité de GitHub Copilot sur le travail TypeScript et Python quotidien, avec une confidentialité totale du code. La configuration requise est RTX 3060 12 Go ou M3 Pro+ Mac.' },
    { q: 'Les LLMs locaux fonctionnent-ils complètement hors ligne ?', a: 'Oui — une fois le modèle téléchargé, toute l\'inférence est locale. Utile pour les voyages, les réseaux restreints, les environnements sécurisés et partout où Internet n\'est pas fiable.' },
    { q: 'Quelle stack LLM local est la meilleure pour les entreprises de l\'UE ?', a: 'Pour la conformité RGPD/Loi sur l\'IA de l\'UE : Ollama ou vLLM s\'exécutant sur du matériel dédié, associés à Jan (UI), Continue.dev (codage) et AnythingLLM (RAG). Tout open source, tout auditable, tout sur site. Mistral Large est une alternative hébergée en UE solide pour les configurations hybrides.' },
    { q: 'Existe-t-il un annuaire des logiciels LLM locaux ?', a: 'Oui — l\'Annuaire des Logiciels LLM Locaux répertorie 88 outils dans neuf catégories (runtimes, applications de bureau, RAG, codage, agents, mobile, et plus) avec description, licence et lien pour chacun.' },
    { q: 'SillyTavern vs Open WebUI : lequel choisir ?', a: 'Ils résolvent des problèmes différents. SillyTavern est un frontend de roleplay et de chat de personnages conçu pour la gestion de personas et la fiction longue. Open WebUI est un frontend de chat et RAG généraliste conçu pour les questions-réponses sur documents et l\'usage quotidien d\'assistant. Choisissez SillyTavern pour l\'écriture créative et le travail de personnage ; choisissez Open WebUI pour la recherche, le RAG et le chat quotidien.' },
    { q: 'Obsidian vs Ollama : quelle est la différence ?', a: 'Ce ne sont pas des concurrents — Obsidian est une application de prise de notes, et Ollama un runtime de modèle local. Utilisés ensemble, Ollama exécute le modèle localement pendant qu\'un plugin Obsidian lui envoie vos notes pour résumé, questions-réponses ou aide à l\'écriture.' },
  ],
  ja: [
    { q: 'ローカルLLMとは何か、ChatGPTとどう違うのか？', a: 'ローカルLLMはあなた自身のハードウェア（スマートフォン、ノートパソコン、デスクトップ、またはサーバー）で完全に実行され、プロンプトをクラウドサービスに送信しません。ChatGPTはOpenAIのサーバーで実行され、プロンプトをそこに送信します。ローカルLLMはプライベート、オフラインで動作、トークンごとのコスト無し。ChatGPTは稀なトピックでは高速で、セットアップは不要です。' },
    { q: 'ローカルLLMを実行するには強力なコンピュータが必要か？', a: 'いいえ。4 GB RAMと統合GPUでPhi-4 MiniやGemma 3 4Bなどの小さなモデルで十分です。16 GB RAMとミッドレンジGPU（RTX 3060 12 GBまたはM3 Pro）は、ほとんどの日常的なワークフローをカバーしています。ハイエンドユーザーは24+ GB VRAMを望みます。' },
    { q: 'ローカルLLMはChatGPTやClaudeと同じくらい優れているか？', a: '日常的なタスク（チャット、要約、一般的なコード）では、2026年のギャップは5～15％です。フロンティア推論と非常にニッチな知識では、クラウドモデルがまだ主導しています。プライベートまたは機密データを扱うほとんどのユーザーにとって、コスト対品質のトレードオフはローカルが有利です。' },
    { q: 'スマートフォンでローカルLLMを実行できるか？', a: 'はい。LLM FarmやPrivate LLMなどのアプリはiPhone 16+およびフラッグシップAndroidデバイスでPhi-4 MiniとGemma 3 4Bを実行します。パフォーマンスは毎秒8～15トークン。チャット、ドラフト作成、オフラインリファレンスに利用可能です。' },
    { q: 'ローカルLLM実行コストはいくらか？', a: 'ハードウェア後、限界コストは電気代だけです。通常、中程度の使用で月々$1～3。ハードウェア投資は既存ラップトップ$0から高性能ビルド約$2,000までです。月々$20～200のSaaS購読と比較して、回収期間は通常8～24ヶ月です。' },
    { q: 'ローカルLLM使用時、データは本当にプライベートか？', a: 'はい。アプリがプロンプトをテレメトリーしないと仮定した場合（ほとんどがそうしません）。Jan、GPT4All、Ollama などのオープンソースアプリでネットワークトラフィックを監査して確認できます。モデルファイル自体は「本国に電話」しません。単にディスク上の重みです。' },
    { q: '初心者向けで最も簡単なローカルLLMアプリは？', a: 'GPT4Allは最もシンプルなインストール（ワンクリック、8 GB RAMで実行）です。LM Studioは最も機能が豊富です。Janはプライバシーに最適です。各ベンチマークはLM Studio vs Jan vs GPT4All比較をご覧ください。' },
    { q: 'ローカルLLMはコーディングアシスタントを置き換えられるか？', a: 'はい。Continue.dev + Ollama + Qwen3-Coderは日常のTypeScriptおよびPython作業でGitHub Copilot品質の90～95％に達し、完全なコードプライバシーです。必要なハードウェア：RTX 3060 12 GBまたはM3 Pro+ Mac。' },
    { q: 'ローカルLLMは完全にオフラインで動作するか？', a: 'はい。モデルがダウンロードされると、すべての推論はローカルです。旅行、制限されたネットワーク、セキュアな環境、インターネットが不安定な場所に有用です。' },
    { q: 'EUの企業に最適なローカルLLMスタックは？', a: 'GDPR/EU AI Act準拠：Ollama またはvLLMを専用ハードウェアで実行し、Jan（UI）、Continue.dev（コーディング）、AnythingLLM（RAG）と組み合わせ。すべてオープンソース、すべて監査可能、すべてオンプレミス。Mistral Largeはハイブリッドセットアップの強力なEUホストオプションです。' },
    { q: 'ローカルLLMソフトウェアのディレクトリはありますか？', a: 'はい — ローカルLLMソフトウェアディレクトリは、ランタイム、デスクトップアプリ、RAG、コーディング、エージェント、モバイルなど9カテゴリにわたる88のツールを、それぞれの説明・ライセンス・リンク付きでカタログ化しています。' },
    { q: 'SillyTavern と Open WebUI、どちらを使うべきですか？', a: '両者は異なる課題を解決します。SillyTavernはペルソナ管理と長編フィクション向けのロールプレイ・キャラクターチャットフロントエンドです。Open WebUIはドキュメントQ&Aと日常的なアシスタント用途向けの汎用チャット・RAGフロントエンドです。創作やキャラクター作業にはSillyTavernを、リサーチ・RAG・日常チャットにはOpen WebUIを選んでください。' },
    { q: 'Obsidian と Ollama の違いは何ですか？', a: 'この2つは競合関係ではありません — Obsidianはノートアプリ、Ollamaはローカルモデルランタイムです。組み合わせて使う場合、Ollamaがモデルをローカルで実行し、Obsidianのプラグインがノートを送信して要約・質問応答・執筆支援を行います。' },
  ],
  zh: [
    { q: '什么是本地LLM，它与ChatGPT有什么不同？', a: '本地LLM完全在您自己的硬件（手机、笔记本电脑、台式电脑或服务器）上运行，不会将提示发送给任何云服务。ChatGPT在OpenAI服务器上运行并将您的提示发送给它们。本地LLM是私有的、离线工作的、无按令牌费用的；ChatGPT在罕见主题上更快，无需设置。' },
    { q: '运行本地LLM需要强大的计算机吗？', a: '不需要。4 GB RAM和集成GPU足以运行小型模型，如Phi-4 Mini或Gemma 3 4B。16 GB RAM和中档GPU（RTX 3060 12 GB或M3 Pro）覆盖大多数日常工作流。高级用户需要24+ GB VRAM。' },
    { q: '本地LLM与ChatGPT或Claude一样好吗？', a: '对于日常任务（聊天、摘要、常见代码），2026年差距为5～15％。对于前沿推理和非常深奥的知识，云模型仍然领先。对于拥有私人或敏感数据的大多数用户，成本与质量的权衡更倾向于本地。' },
    { q: '我能在手机上运行本地LLM吗？', a: '可以。LLM Farm和Private LLM等应用程序在iPhone 16+和旗舰Android设备上运行Phi-4 Mini和Gemma 3 4B。性能为每秒8～15个令牌，可用于聊天、起草和离线参考。' },
    { q: '运行本地LLM的成本是多少？', a: '硬件之后，边际成本仅为电力，通常中等使用每月$1～3。硬件投资范围从$0（现有笔记本电脑）到约$2,000（高端配置）。与月费$20～200的SaaS订阅相比，回本期通常为8～24个月。' },
    { q: '使用本地LLM时，我的数据真的是私人的吗？', a: '是的，假设应用程序不会发送遥测提示（大多数应用程序不会）。可通过开源应用程序（Jan、GPT4All、Ollama）验证，您可在其中审计网络流量。模型文件本身不会"回家"，它只是磁盘上的权重。' },
    { q: '对初学者来说最简单的本地LLM应用是什么？', a: 'GPT4All安装最简单（一键点击，8 GB RAM运行）。LM Studio功能最丰富。Jan最好用于隐私。请参阅LM Studio vs Jan vs GPT4All专项对比了解每个应用的基准。' },
    { q: '本地LLM能否替代我的编码助手？', a: '可以。Continue.dev + Ollama + Qwen3-Coder在日常TypeScript和Python工作中达到GitHub Copilot质量的90～95％，具有完整的代码隐私。硬件要求为RTX 3060 12 GB或M3 Pro+ Mac。' },
    { q: '本地LLM能完全离线工作吗？', a: '可以。下载模型后，所有推理都在本地进行。适用于旅行、受限网络、安全环境以及任何互联网不可靠的地方。' },
    { q: '欧盟企业的最佳本地LLM堆栈是什么？', a: '满足GDPR/欧盟AI法案合规性：在专用硬件上运行Ollama或vLLM，结合Jan（UI）、Continue.dev（编码）和AnythingLLM（RAG）。全部开源、全部可审计、全部本地部署。Mistral Large是混合设置的强有力的欧盟托管替代方案。' },
    { q: '有本地LLM软件的目录吗？', a: '有 — 本地LLM软件目录收录了9个类别中的88款工具(运行时、桌面应用、RAG、编码、代理、移动端等),每款都附有描述、许可证和链接。' },
    { q: 'SillyTavern 与 Open WebUI:应该选哪个？', a: '两者解决的是不同的问题。SillyTavern 是为角色管理和长篇小说创作设计的角色扮演聊天前端。Open WebUI 是为文档问答和日常助手使用设计的通用聊天与RAG前端。创意写作和角色扮演选择 SillyTavern;研究、RAG和日常聊天选择 Open WebUI。' },
    { q: 'Obsidian 与 Ollama 有什么区别？', a: '两者不是竞品——Obsidian 是笔记应用,Ollama 是本地模型运行时。搭配使用时,Ollama 在本地运行模型,而 Obsidian 插件将笔记发送给它进行摘要、问答或写作辅助。' },
  ],
  es: [
    { q: '¿Qué es un LLM local y cómo difiere de ChatGPT?', a: 'Un LLM local se ejecuta completamente en tu propio hardware — teléfono, laptop, desktop o servidor — sin enviar prompts a ningún servicio en la nube. ChatGPT se ejecuta en servidores de OpenAI y envía tus prompts allí. Los LLMs locales son privados, funcionan offline y no tienen costo por token; ChatGPT es más rápido en temas raros y no requiere configuración.' },
    { q: '¿Necesito una computadora potente para ejecutar LLMs locales?', a: 'No. 4 GB de RAM e una GPU integrada es suficiente para modelos pequeños como Phi-4 Mini o Gemma 3 4B. 16 GB de RAM y una GPU de rango medio (RTX 3060 12 GB o M3 Pro) cubre la mayoría de flujos de trabajo diarios. Los usuarios avanzados quieren 24+ GB VRAM.' },
    { q: '¿Los LLMs locales son tan buenos como ChatGPT o Claude?', a: 'Para tareas diarias (chat, resumen, código común) la brecha es de 5-15% en 2026. Para razonamiento de frontera y conocimiento muy oscuro, los modelos en la nube siguen liderando. El balance costo-calidad favorece lo local para la mayoría de usuarios con datos privados o sensibles.' },
    { q: '¿Puedo ejecutar LLMs locales en mi teléfono?', a: 'Sí. Aplicaciones como LLM Farm y Private LLM ejecutan Phi-4 Mini y Gemma 3 4B en iPhone 16+ y dispositivos Android líderes. El rendimiento es de 8-15 tokens/seg — usable para chat, redacción de borradores y referencia offline.' },
    { q: '¿Cuánto cuesta ejecutar un LLM local?', a: 'Después del hardware, el costo marginal es solo electricidad — típicamente $1-3/mes para uso moderado. La inversión en hardware varía desde $0 (laptop existente) a ~$2,000 para una configuración de alto rendimiento. Comparado con suscripciones SaaS de $20-200/mes, el retorno típicamente es de 8-24 meses.' },
    { q: '¿Mis datos realmente son privados cuando uso LLMs locales?', a: 'Sí — suponiendo que la aplicación no telemetre prompts, lo cual la mayoría no hace. Verificable a través de aplicaciones open source (Jan, GPT4All, Ollama) donde puedes auditar el tráfico de red. El archivo del modelo mismo no "llama a casa" — es solo pesos en disco.' },
    { q: '¿Cuál es la aplicación LLM local más fácil para principiantes?', a: 'GPT4All tiene la instalación más simple (un click, se ejecuta con 8 GB RAM). LM Studio es el más rico en características. Jan es mejor para privacidad. Consulta la comparación dedicada LM Studio vs Jan vs GPT4All para benchmarks de cada uno.' },
    { q: '¿Pueden los LLMs locales reemplazar mi asistente de código?', a: 'Sí. Continue.dev + Ollama + Qwen3-Coder alcanza 90-95% de la calidad de GitHub Copilot en trabajo diario de TypeScript y Python, con privacidad completa de código. Los requisitos de hardware son RTX 3060 12 GB o Mac M3 Pro+.' },
    { q: '¿Los LLMs locales funcionan completamente offline?', a: 'Sí — una vez que el modelo se descarga, toda la inferencia es local. Útil para viajes, redes restringidas, entornos seguros y en cualquier lugar donde el internet sea confiable.' },
    { q: '¿Cuál es el mejor stack de LLM local para empresas en la UE?', a: 'Para cumplimiento GDPR/Ley de IA de la UE: Ollama o vLLM ejecutándose en hardware dedicado, emparejado con Jan (UI), Continue.dev (codificación) y AnythingLLM (RAG). Todo open source, todo auditable, todo on-prem. Mistral Large es una alternativa fuerte alojada en la UE para configuraciones híbridas.' },
    { q: '¿Existe un directorio de software LLM local?', a: 'Sí — el Directorio de Software LLM Local cataloga 88 herramientas en nueve categorías (runtimes, aplicaciones de escritorio, RAG, código, agentes, móvil y más) con descripción, licencia y enlace para cada una.' },
    { q: 'SillyTavern vs Open WebUI: ¿cuál debería usar?', a: 'Resuelven problemas diferentes. SillyTavern es un frontend de roleplay y chat de personajes diseñado para gestión de personas y ficción extensa. Open WebUI es un frontend de chat y RAG de propósito general diseñado para preguntas sobre documentos y uso diario como asistente. Elige SillyTavern para escritura creativa y trabajo de personajes; elige Open WebUI para investigación, RAG y chat diario.' },
    { q: 'Obsidian vs Ollama: ¿cuál es la diferencia?', a: 'No son competidores — Obsidian es una aplicación de notas y Ollama es un runtime de modelo local. Usados juntos, Ollama ejecuta el modelo localmente mientras un plugin de Obsidian le envía tus notas para resumen, preguntas y respuestas, o asistencia de escritura.' },
  ],
  pt: [
    { q: 'O que é um LLM local e como ele difere do ChatGPT?', a: 'Um LLM local roda inteiramente no seu próprio hardware — celular, notebook, computador ou servidor — sem enviar prompts para nenhum serviço na nuvem. O ChatGPT roda nos servidores da OpenAI e envia seus prompts para lá. LLMs locais são privados, funcionam offline e não têm custo por token; o ChatGPT é mais rápido em temas raros e não exige configuração.' },
    { q: 'Preciso de um computador potente para rodar LLMs locais?', a: 'Não. 4 GB de RAM e uma GPU integrada bastam para modelos pequenos como Phi-4 Mini ou Gemma 3 4B. 16 GB de RAM e uma GPU intermediária (RTX 3060 12 GB ou M3 Pro) cobrem a maioria dos fluxos de trabalho do dia a dia. Usuários avançados querem 24+ GB de VRAM.' },
    { q: 'LLMs locais são tão bons quanto ChatGPT ou Claude?', a: 'Para tarefas do dia a dia (chat, resumo, código comum) a diferença é de 5-15% em 2026. Para raciocínio de fronteira e conhecimento muito obscuro, os modelos na nuvem ainda lideram. O equilíbrio custo-qualidade favorece o local para a maioria dos usuários com dados privados ou sensíveis.' },
    { q: 'Posso rodar LLMs locais no meu celular?', a: 'Sim. Apps como LLM Farm e Private LLM rodam Phi-4 Mini e Gemma 3 4B em iPhone 16+ e aparelhos Android de ponta. O desempenho é de 8-15 tokens/seg — utilizável para chat, redação de rascunhos e consulta offline.' },
    { q: 'Quanto custa rodar um LLM local?', a: 'Depois do hardware, o custo marginal é só eletricidade — geralmente US$ 1-3/mês para uso moderado. O investimento em hardware varia de US$ 0 (notebook que você já tem) a cerca de US$ 2.000 para uma máquina de alto desempenho. Comparado a assinaturas de SaaS de US$ 20-200/mês, o retorno costuma vir em 8-24 meses.' },
    { q: 'Meus dados são realmente privados ao usar LLMs locais?', a: 'Sim — desde que o app não envie prompts por telemetria, o que a maioria não faz. Verificável com apps open source (Jan, GPT4All, Ollama), onde você pode auditar o tráfego de rede. O arquivo do modelo em si não "liga para casa" — são apenas pesos no disco.' },
    { q: 'Qual é o app de LLM local mais fácil para iniciantes?', a: 'O GPT4All tem a instalação mais simples (um clique, roda com 8 GB de RAM). O LM Studio é o mais completo em recursos. O Jan é o melhor para privacidade. Veja a comparação dedicada LM Studio vs Jan vs GPT4All para benchmarks de cada um.' },
    { q: 'LLMs locais podem substituir meu assistente de código?', a: 'Sim. Continue.dev + Ollama + Qwen3-Coder alcança 90-95% da qualidade do GitHub Copilot no trabalho diário de TypeScript e Python, com privacidade total do código. Os requisitos de hardware são RTX 3060 12 GB ou Mac M3 Pro+.' },
    { q: 'LLMs locais funcionam totalmente offline?', a: 'Sim — uma vez que o modelo é baixado, toda a inferência é local. Útil para viagens, redes restritas, ambientes seguros e qualquer lugar onde a internet seja instável.' },
    { q: 'Qual é o melhor stack de LLM local para empresas na UE?', a: 'Para conformidade com GDPR/Lei de IA da UE: Ollama ou vLLM rodando em hardware dedicado, combinado com Jan (UI), Continue.dev (codificação) e AnythingLLM (RAG). Tudo open source, tudo auditável, tudo on-prem. O Mistral Large é uma forte alternativa hospedada na UE para configurações híbridas.' },
    { q: 'Existe um diretório de software LLM local?', a: 'Sim — o Diretório de Software LLM Local cataloga 88 ferramentas em nove categorias (runtimes, apps de desktop, RAG, código, agentes, mobile e mais) com descrição, licença e link para cada uma.' },
    { q: 'SillyTavern vs Open WebUI: qual devo usar?', a: 'Eles resolvem problemas diferentes. O SillyTavern é um frontend de roleplay e chat de personagens feito para gestão de personas e ficção longa. O Open WebUI é um frontend de chat e RAG de propósito geral feito para perguntas sobre documentos e uso diário como assistente. Escolha o SillyTavern para escrita criativa e trabalho de personagens; escolha o Open WebUI para pesquisa, RAG e chat diário.' },
    { q: 'Obsidian vs Ollama: qual é a diferença?', a: 'Eles não são concorrentes — o Obsidian é um app de notas, e o Ollama é um runtime de modelo local. Usados juntos, o Ollama roda o modelo localmente enquanto um plugin do Obsidian envia suas notas para resumo, perguntas e respostas ou ajuda na escrita.' },
  ],
  ar: [
    { q: 'ما هو LLM المحلي وكيف يختلف عن ChatGPT؟', a: 'يعمل نموذج LLM المحلي بالكامل على أجهزتك الخاصة — هاتف أو حاسوب محمول أو سطح مكتب أو خادم — دون إرسال طلباتك إلى أي خدمة سحابية. يعمل ChatGPT على خوادم OpenAI ويرسل طلباتك إليها. نماذج LLM المحلية خاصة وتعمل دون اتصال بالإنترنت وبدون تكلفة لكل رمز؛ ChatGPT أسرع في الموضوعات النادرة ولا يتطلب أي إعداد.' },
    { q: 'هل أحتاج إلى حاسوب قوي لتشغيل نماذج LLM المحلية؟', a: 'لا. 4 جيجابايت من ذاكرة الوصول العشوائي ووحدة معالجة رسومات مدمجة تكفي للنماذج الصغيرة مثل Phi-4 Mini أو Gemma 3 4B. 16 جيجابايت من الذاكرة ووحدة معالجة رسومات متوسطة (RTX 3060 12 GB أو M3 Pro) تغطي معظم سير العمل اليومية. يريد المستخدمون المتقدمون 24 جيجابايت VRAM أو أكثر.' },
    { q: 'هل نماذج LLM المحلية جيدة مثل ChatGPT أو Claude؟', a: 'للمهام اليومية (الدردشة والتلخيص والكود الشائع) يتراوح الفارق بين 5-15٪ في 2026. في الاستدلال المتقدم والمعرفة النادرة جداً، لا تزال النماذج السحابية في المقدمة. يميل ميزان التكلفة مقابل الجودة لصالح المحلي لمعظم المستخدمين الذين يتعاملون مع بيانات خاصة أو حساسة.' },
    { q: 'هل يمكنني تشغيل نماذج LLM المحلية على هاتفي؟', a: 'نعم. تطبيقات مثل LLM Farm وPrivate LLM تشغّل Phi-4 Mini وGemma 3 4B على iPhone 16+ وأجهزة Android الرائدة. الأداء يتراوح بين 8-15 رمزاً في الثانية — مناسب للدردشة وصياغة المسودات والمراجعة دون اتصال.' },
    { q: 'كم تكلفة تشغيل نموذج LLM محلي؟', a: 'بعد الأجهزة، التكلفة الهامشية هي الكهرباء فقط — عادةً 1-3 دولار/شهر للاستخدام المعتدل. تتراوح الاستثمارات في الأجهزة من 0 دولار (حاسوب محمول موجود) إلى حوالي 2000 دولار لبناء عالي الأداء. مقارنةً باشتراكات SaaS بين 20-200 دولار/شهر، تكون فترة الاسترداد عادةً 8-24 شهراً.' },
    { q: 'هل بياناتي خاصة فعلاً عند استخدام نماذج LLM المحلية؟', a: 'نعم — بافتراض أن التطبيق لا يرسل الطلبات عبر القياس عن بُعد، وهو ما لا تفعله معظم التطبيقات. يمكن التحقق من ذلك عبر تطبيقات مفتوحة المصدر (Jan وGPT4All وOllama) حيث يمكنك مراجعة حركة الشبكة. ملف النموذج نفسه لا "يتصل بالمنزل" — إنه مجرد أوزان على القرص.' },
    { q: 'ما هو أسهل تطبيق LLM محلي للمبتدئين؟', a: 'GPT4All يمتلك أبسط عملية تثبيت (نقرة واحدة، يعمل بذاكرة 8 جيجابايت). LM Studio الأغنى بالميزات. Jan الأفضل للخصوصية. راجع مقارنة LM Studio مقابل Jan مقابل GPT4All للاطلاع على المعايير لكل منها.' },
    { q: 'هل يمكن لنماذج LLM المحلية أن تحل محل مساعد البرمجة لديّ؟', a: 'نعم. Continue.dev + Ollama + Qwen3-Coder يصل إلى 90-95٪ من جودة GitHub Copilot في العمل اليومي بـ TypeScript وPython مع الحفاظ على خصوصية الكود بالكامل. متطلبات الأجهزة: RTX 3060 12 GB أو Mac M3 Pro+.' },
    { q: 'هل تعمل نماذج LLM المحلية دون اتصال بالكامل؟', a: 'نعم — بمجرد تنزيل النموذج، يتم كل الاستدلال محلياً. مفيد للسفر والشبكات المقيّدة والبيئات الآمنة وأي مكان يكون فيه الإنترنت غير موثوق.' },
    { q: 'ما أفضل مكدس LLM محلي للشركات في الاتحاد الأوروبي؟', a: 'للامتثال لـ GDPR/قانون الذكاء الاصطناعي الأوروبي: Ollama أو vLLM على أجهزة مخصصة، مقترناً بـ Jan (واجهة المستخدم) وContinue.dev (البرمجة) وAnythingLLM (RAG). كل شيء مفتوح المصدر وقابل للتدقيق ومحلي بالكامل. Mistral Large بديل قوي مستضاف في الاتحاد الأوروبي للإعدادات الهجينة.' },
    { q: 'هل يوجد دليل لبرمجيات LLM المحلية؟', a: 'نعم — يُصنّف دليل برمجيات LLM المحلية 88 أداة ضمن تسع فئات (بيئات التشغيل، تطبيقات سطح المكتب، RAG، البرمجة، الوكلاء، الهاتف المحمول وغيرها) مع وصف وترخيص ورابط لكل أداة.' },
    { q: 'SillyTavern مقابل Open WebUI: أيهما يجب أن تستخدم؟', a: 'كل منهما يحل مشكلة مختلفة. SillyTavern واجهة لعب الأدوار والدردشة الشخصياتية، مصممة لإدارة الشخصيات والكتابة الطويلة. Open WebUI واجهة دردشة وRAG عامة، مصممة للإجابة عن أسئلة المستندات والاستخدام اليومي كمساعد. اختر SillyTavern للكتابة الإبداعية وعمل الشخصيات؛ واختر Open WebUI للبحث وRAG والدردشة اليومية.' },
    { q: 'Obsidian مقابل Ollama: ما الفرق؟', a: 'إنهما ليسا منافسين — Obsidian تطبيق لتدوين الملاحظات، وOllama بيئة تشغيل نماذج محلية. عند استخدامهما معاً، يشغّل Ollama النموذج محلياً بينما يرسل إضافة في Obsidian ملاحظاتك إليه للتلخيص أو الإجابة عن الأسئلة أو المساعدة في الكتابة.' },
  ],
  ko: [
    { q: '로컬 LLM이란 무엇이고 ChatGPT와 어떻게 다른가요?', a: '로컬 LLM은 어떤 클라우드 서비스에도 프롬프트를 보내지 않고 자신의 기기(스마트폰, 노트북, 데스크톱, 서버)에서 완전히 실행됩니다. ChatGPT는 OpenAI 서버에서 실행되며 프롬프트를 그곳으로 전송합니다. 로컬 LLM은 프라이빗하고 오프라인에서 작동하며 토큰당 비용이 없습니다. ChatGPT는 드문 주제에서 더 빠르고 별도 설정이 필요 없습니다.' },
    { q: '로컬 LLM을 실행하려면 강력한 컴퓨터가 필요한가요?', a: '아닙니다. Phi-4 Mini나 Gemma 3 4B 같은 소형 모델은 4GB RAM과 내장 GPU로 충분합니다. 16GB RAM과 중급 GPU(RTX 3060 12GB 또는 M3 Pro)는 대부분의 일상 워크플로를 커버합니다. 고급 사용자는 24GB 이상의 VRAM을 원합니다.' },
    { q: '로컬 LLM이 ChatGPT나 Claude만큼 좋은가요?', a: '일상적인 작업(채팅, 요약, 일반 코드)에서 2026년 격차는 5~15%입니다. 최첨단 추론과 매우 드문 지식에서는 클라우드 모델이 여전히 앞섭니다. 개인 또는 민감한 데이터를 가진 대부분의 사용자에게는 비용 대비 품질 면에서 로컬이 유리합니다.' },
    { q: '스마트폰에서 로컬 LLM을 실행할 수 있나요?', a: '네. LLM Farm, Private LLM 같은 앱이 iPhone 16+와 최신 안드로이드 기기에서 Phi-4 Mini와 Gemma 3 4B를 실행합니다. 성능은 초당 8~15토큰으로 채팅, 초안 작성, 오프라인 참조에 활용 가능합니다.' },
    { q: '로컬 LLM 실행 비용은 얼마인가요?', a: '하드웨어 이후 한계 비용은 전기료뿐입니다. 일반적으로 적당한 사용 시 월 1~3달러입니다. 하드웨어 투자는 0달러(기존 노트북)에서 고성능 빌드의 경우 약 2,000달러까지 다양합니다. 월 20~200달러의 SaaS 구독과 비교하면 회수 기간은 일반적으로 8~24개월입니다.' },
    { q: '로컬 LLM을 사용할 때 데이터가 정말 비공개인가요?', a: '네 — 앱이 프롬프트를 원격 측정으로 전송하지 않는다는 가정 하에(대부분 전송하지 않습니다). Jan, GPT4All, Ollama 같은 오픈소스 앱에서 네트워크 트래픽을 감사하여 확인할 수 있습니다. 모델 파일 자체는 "집에 전화하지" 않습니다 — 디스크의 가중치일 뿐입니다.' },
    { q: '초보자에게 가장 쉬운 로컬 LLM 앱은 무엇인가요?', a: 'GPT4All이 가장 간단한 설치를 제공합니다(클릭 한 번, 8GB RAM으로 실행). LM Studio는 기능이 가장 풍부합니다. Jan은 프라이버시에 최적화되어 있습니다. 각 벤치마크는 LM Studio vs Jan vs GPT4All 비교를 참조하세요.' },
    { q: '로컬 LLM이 코딩 어시스턴트를 대체할 수 있나요?', a: '네. Continue.dev + Ollama + Qwen3-Coder는 일상적인 TypeScript 및 Python 작업에서 GitHub Copilot 품질의 90~95%에 도달하며 코드 프라이버시를 완전히 보장합니다. 하드웨어 요구사항은 RTX 3060 12GB 또는 M3 Pro+ Mac입니다.' },
    { q: '로컬 LLM이 완전히 오프라인으로 작동하나요?', a: '네 — 모델을 다운로드하면 모든 추론이 로컬에서 이루어집니다. 여행, 제한된 네트워크, 보안 환경, 인터넷이 불안정한 모든 곳에서 유용합니다.' },
    { q: 'EU 기업에 가장 적합한 로컬 LLM 스택은 무엇인가요?', a: 'GDPR/EU AI 법 준수를 위해: 전용 하드웨어에서 Ollama 또는 vLLM을 실행하고 Jan(UI), Continue.dev(코딩), AnythingLLM(RAG)과 결합하세요. 모두 오픈소스, 모두 감사 가능, 모두 온프레미스입니다. Mistral Large는 하이브리드 설정을 위한 강력한 EU 호스팅 대안입니다.' },
    { q: '로컬 LLM 소프트웨어 디렉터리가 있나요?', a: '네 — 로컬 LLM 소프트웨어 디렉터리는 런타임, 데스크톱 앱, RAG, 코딩, 에이전트, 모바일 등 9개 카테고리에 걸쳐 88개 도구를 각각의 설명, 라이선스, 링크와 함께 정리해 두었습니다.' },
    { q: 'SillyTavern과 Open WebUI, 어느 것을 사용해야 하나요?', a: '둘은 서로 다른 문제를 해결합니다. SillyTavern은 페르소나 관리와 장편 픽션을 위한 롤플레이·캐릭터 채팅 프론트엔드입니다. Open WebUI는 문서 질의응답과 일상적인 어시스턴트 용도를 위한 범용 채팅·RAG 프론트엔드입니다. 창작과 캐릭터 작업에는 SillyTavern을, 리서치·RAG·일상 채팅에는 Open WebUI를 선택하세요.' },
    { q: 'Obsidian과 Ollama의 차이는 무엇인가요?', a: '둘은 경쟁 관계가 아닙니다 — Obsidian은 노트 앱이고, Ollama는 로컬 모델 런타임입니다. 함께 사용할 경우 Ollama가 모델을 로컬에서 실행하고, Obsidian 플러그인이 노트를 보내 요약, 질의응답, 글쓰기 지원을 받습니다.' },
  ],
}

function PowerArticleCard({ slug, dot, lang }: { slug: string; dot: string; lang: 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko' }) {
  const hasContent =
    !!powerLLMContent[slug]?.['en'] &&
    Object.keys(powerLLMContent[slug]?.['en']?.sections ?? {}).length > 0
  const brief = POWER_LLM_BRIEFS[slug]
  const linkable = hasContent || !!brief
  const title =
    powerLLMContent[slug]?.[lang]?.title ??
    powerLLMContent[slug]?.['en']?.title ??
    brief?.title ?? slugToTitle(slug)

  if (!linkable) {
    return (
      <div className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl p-4 opacity-50 cursor-default select-none">
        <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-gray-300" />
        <span className="text-text-secondary text-sm font-medium leading-snug flex-1">
          {title}
          <span className="ml-2 text-xs font-normal opacity-60">· soon</span>
        </span>
      </div>
    )
  }

  const publishDate = powerLLMContent[slug]?.['en']?.publishDate
  const dateModified = powerLLMContent[slug]?.['en']?.dateModified
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div className={`relative h-full transition-all rounded-xl ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}`}>
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
        href={powerLLMArticlePath(lang, slug)}
        className={`flex items-start gap-3 bg-card rounded-xl p-4 h-full transition-colors group ${showNew ? 'border-2 border-emerald-400 hover:border-emerald-500' : showUpdated ? 'border-2 border-amber-400 hover:border-amber-500' : 'border border-primary/15 hover:border-primary/50 hover:bg-primary/5'}`}
      >
        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
        <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
          {title}
        </span>
      </Link>
    </div>
  )
}

// Most recent dateModified across all published power-local-llm articles (EN block).
function latestPowerLLMDateModified(): string {
  const dates = Object.values(powerLLMContent)
    .map((article) => (article?.en as any)?.dateModified ?? article?.en?.publishDate)
    .filter((d): d is string => !!d)
  return dates.sort().at(-1) ?? '2026-05-07'
}

function renderLocalizedHub(lang: 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko') {
  const lastUpdated = latestPowerLLMDateModified()
  const hero = HUB_HERO_L10N[lang]
  const faqs = HUB_FAQS_L10N[lang]
  const labels = HUB_LABELS_L10N[lang]

  const hubFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const hubBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}${powerLLMHubPath(lang)}` },
    ],
  }

  // CollectionPage/ItemList — tells crawlers this hub indexes a curated set of software guides,
  // one entry per published article across every theme (de-duplicated; theme order preserved).
  const seenSlugs = new Set<string>()
  const publishedSlugs = HUB_THEMES.flatMap((theme) => theme.slugs).filter((slug) => {
    if (seenSlugs.has(slug) || !isPowerLLMArticlePublished(slug, lang)) return false
    seenSlugs.add(slug)
    return true
  })
  const hubCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hero.h1,
    description: hero.intro,
    inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    url: `${BASE}${powerLLMHubPath(lang)}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: publishedSlugs.length,
      itemListElement: publishedSlugs.map((slug, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${powerLLMArticlePath(lang, slug)}`,
        name: powerLLMContent[slug]?.[lang]?.title ?? powerLLMContent[slug]?.['en']?.title ?? slugToTitle(slug),
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubCollectionSchema) }} />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Power Local LLM</p>
            <p className="text-xs text-text-secondary mb-4">{labels.lastUpdatedLabel} <time dateTime={lastUpdated}>{formatDisplayMonthYear(lastUpdated, lang)}</time></p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              {hero.h1}
            </h1>
            <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
              {hero.intro} <strong>{hero.introBold}</strong>
            </p>

            {/* Key Takeaways */}
            <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{labels.keyTakeawaysLabel}</p>
              <ul className="space-y-2">
                {hero.keyTakeaways.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Directory callout — funnels traffic to the dedicated 88-tool directory article
              instead of duplicating its table here (would compete with it for the same queries). */}
          <div className="mb-16 -mt-8 border border-primary/20 bg-primary/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-1">{labels.directoryHeading}</h2>
              <p className="text-sm text-text-secondary max-w-xl">{labels.directoryBody}</p>
            </div>
            <Link
              href={powerLLMArticlePath(lang, 'local-llm-software-directory-2026')}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {labels.directoryCta}
            </Link>
          </div>

          {/* Recently Published — auto-surfaced articles with publishDate within 15 days */}
          {(() => {
            const RECENT_HEADING: Record<string, string> = {
              en: 'New This Month', de: 'Neu diesen Monat', fr: 'Nouveautés du mois', ja: '今月の新着', zh: '本月新増', es: 'Nuevo Este Mes', pt: 'Novo este mês', ar: 'جديد هذا الشهر', ko: '이번 달 신규',
            }
            const RECENT_SUB: Record<string, string> = {
              en: 'Just published — disappears from this spot after 14 days',
              de: 'Gerade veröffentlicht — verschwindet nach 14 Tagen',
              fr: 'Vient de paraître — disparaît de cet emplacement après 14 jours',
              ja: '公開されたばかり — 14日後にここから消えます',
              zh: '刚刚发布 — 14天后从此处消失',
              es: 'Recién publicado — desaparece de este lugar después de 14 días',
              pt: 'Recém publicado — desaparece deste local após 14 dias',
              ar: 'نُشر للتو — يختفي من هنا بعد 14 يومًا',
              ko: '방금 게시됨 — 14일 후 이 위치에서 사라집니다',
            }
            const recentSlugs = Object.entries(powerLLMContent)
              .filter(([slug, content]) => isNewArticle(content?.['en']?.publishDate) && isPowerLLMArticlePublished(slug, 'en'))
              .map(([slug]) => slug)
            if (recentSlugs.length === 0) return null
            return (
              <section className="mb-16 border-2 border-emerald-400/40 rounded-2xl p-6 bg-emerald-50/30">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-black text-emerald-800 tracking-tight">
                    {RECENT_HEADING[lang] ?? RECENT_HEADING['en']}
                  </h2>
                  <span className="text-xs font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-sm rounded px-2.5 py-1">
                    {recentSlugs.length}
                  </span>
                </div>
                <p className="text-xs text-emerald-700/70 mb-5">{RECENT_SUB[lang] ?? RECENT_SUB['en']}</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {recentSlugs.map(slug => (
                    <PowerArticleCard key={slug} slug={slug} dot="bg-emerald-400" lang={lang} />
                  ))}
                </div>
              </section>
            )
          })()}

          {/* Themed sections — one per category */}
          {HUB_THEMES.map((theme, idx) => {
            const themeText = lang === 'de' ? HUB_THEME_TEXT_DE[idx] : lang === 'fr' ? HUB_THEME_TEXT_FR[idx] : lang === 'ja' ? HUB_THEME_TEXT_JA[idx] : lang === 'zh' ? HUB_THEME_TEXT_ZH[idx] : lang === 'es' ? HUB_THEME_TEXT_ES[idx] : lang === 'pt' ? HUB_THEME_TEXT_PT[idx] : lang === 'ko' ? HUB_THEME_TEXT_KO[idx] : lang === 'ar' ? HUB_THEME_TEXT_AR[idx] : theme
            return (
              <section key={theme.id} id={theme.id} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${theme.colorBadge}`}>
                    {themeText.badge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{themeText.question}</h2>
                <p className="text-text-secondary text-sm mb-6 max-w-2xl">{themeText.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {theme.slugs.map((slug) => (
                    <PowerArticleCard key={slug} slug={slug} dot={theme.colorDot} lang={lang} />
                  ))}
                </div>
              </section>
            )
          })}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.faqHeading}</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="border border-primary/15 rounded-xl p-4 group bg-card">
                  <summary className="cursor-pointer font-semibold text-text-primary group-open:mb-3">{f.q}</summary>
                  <p className="text-text-secondary leading-relaxed text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="border-t border-primary/15 pt-8">
            <h2 className="text-lg font-bold text-text-primary mb-4">{labels.relatedReadingHeading}</h2>
            <ul className="space-y-2 text-sm">
              {labels.relatedReadingLinks.map((link, i) => (
                <li key={i}><Link href={link.href} className="text-primary hover:underline">{link.label}</Link></li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </>
  )
}
