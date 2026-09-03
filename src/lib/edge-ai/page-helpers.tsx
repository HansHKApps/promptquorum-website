// Shared server-side rendering helpers for the Edge AI cluster.
// The EN route and all 8 locale-prefixed routes call into here so metadata +
// JSON-LD + page JSX logic lives in exactly one place. Mirrors
// src/lib/power-local-llm/page-helpers.tsx.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { EdgeAiPostClient } from '@/components/EdgeAiPostClient'
import { edgeAiContent } from './articles-barrel'
import { EDGE_AI_SLUG_TO_KEY } from './slugs'
import { edgeAiAlternates, edgeAiHubPath, edgeAiArticlePath } from './metadata-helpers'
import { isEdgeAiArticlePublished, isEdgeAiHubPublished } from './published'
import { toOutputLocale } from '@/lib/i18n/constants'
import { narrowArticleData } from '@/lib/narrowArticleData'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'
const ALL: Lang[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const HOME_LABEL: Record<Lang, string> = {
  en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '主页',
  es: 'Inicio', pt: 'Início', ar: 'الرئيسية', ko: '홈',
}

const HUB_LABEL: Record<Lang, string> = {
  en: 'Edge AI', de: 'Edge AI', fr: 'Edge AI', ja: 'エッジAI', zh: '边缘 AI',
  es: 'Edge AI', pt: 'Edge AI', ar: 'الذكاء الاصطناعي الطرفي', ko: '엣지 AI',
}

const SLUG_ACRONYMS: Record<string, string> = {
  ai: 'AI', llm: 'LLM', llms: 'LLMs', vla: 'VLA', vlm: 'VLM',
  gpu: 'GPU', cpu: 'CPU', npu: 'NPU', soc: 'SoC',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => SLUG_ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

const COMING_SOON_COPY: Record<Lang, { badge: string; bodyArticle: string; bodyHub: string; back: string }> = {
  en: { badge: 'Coming Soon', bodyArticle: 'This article is being prepared. Explore the English version of the Edge AI hub in the meantime.', bodyHub: 'The Edge AI hub will be available in this language soon. Explore the English version below.', back: '← View English version' },
  de: { badge: 'Bald verfügbar', bodyArticle: 'Dieser Artikel wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Edge-AI-Hubs.', bodyHub: 'Der Edge-AI-Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.', back: '← Englische Version ansehen' },
  fr: { badge: 'Bientôt disponible', bodyArticle: "Cet article est en cours de préparation. Explorez la version anglaise du hub Edge AI en attendant.", bodyHub: 'Le hub Edge AI sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.', back: '← Voir la version anglaise' },
  ja: { badge: '近日公開', bodyArticle: 'この記事は準備中です。その間、Edge AI ハブの英語版をご覧ください。', bodyHub: 'Edge AI ハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。', back: '← 英語版を表示' },
  zh: { badge: '即将推出', bodyArticle: '本文正在准备中。请同时浏览 Edge AI 中心的英文版。', bodyHub: 'Edge AI 中心即将推出此语言版本。请查看以下的英文版。', back: '← 查看英文版' },
  es: { badge: 'Próximamente', bodyArticle: 'Este artículo está en preparación. Explora la versión en inglés del centro Edge AI mientras tanto.', bodyHub: 'El centro Edge AI estará disponible en este idioma pronto. Consulta la versión en inglés a continuación.', back: '← Ver versión en inglés' },
  pt: { badge: 'Em breve', bodyArticle: 'Este artigo está em preparação. Explore a versão em inglês do hub Edge AI enquanto isso.', bodyHub: 'O hub Edge AI estará disponível neste idioma em breve. Confira a versão em inglês abaixo.', back: '← Ver versão em inglês' },
  ar: { badge: 'قريبًا', bodyArticle: 'هذا المقال قيد الإعداد. تصفح في هذه الأثناء النسخة الإنجليزية من مركز الذكاء الاصطناعي الطرفي.', bodyHub: 'سيتوفر مركز الذكاء الاصطناعي الطرفي بهذه اللغة قريبًا. تصفح النسخة الإنجليزية أدناه.', back: '← عرض النسخة الإنجليزية' },
  ko: { badge: '준비 중', bodyArticle: '이 글은 준비 중입니다. 그동안 Edge AI 허브의 영어 버전을 확인해 보세요.', bodyHub: 'Edge AI 허브는 곧 이 언어로 제공됩니다. 아래 영어 버전을 확인해 보세요.', back: '← 영어 버전 보기' },
}

function renderComingSoon({ slug, lang, kind }: { slug?: string; lang: Lang; kind: 'article' | 'hub' }) {
  const copy = COMING_SOON_COPY[lang] ?? COMING_SOON_COPY.en
  const title = slug ? slugToTitle(slug) : HUB_LABEL[lang]
  const backHref = kind === 'article' && slug ? `/edge-ai/${slug}` : '/edge-ai'
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
          {copy.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
          {kind === 'article' ? copy.bodyArticle : copy.bodyHub}
        </p>
        <Link href={backHref} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
          {copy.back}
        </Link>
      </div>
    </div>
  )
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(EDGE_AI_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = EDGE_AI_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = edgeAiContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc = (article as any)?.metaDescription ?? article?.intro ?? 'A guide in the Edge AI cluster from PromptQuorum.'
  const isPublished = isEdgeAiArticlePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
    description: desc,
    alternates: edgeAiAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: baseTitle,
      description: desc,
      url: `${BASE}${edgeAiArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{
        url: (article as any)?.heroImage ? `${BASE}${(article as any).heroImage}` : `${BASE}/api/og/${slug}?lang=${lang}`,
        width: 1200, height: 675, alt: baseTitle,
      }],
      publishedTime: article?.publishDate,
      modifiedTime: article?.dateModified ?? article?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: baseTitle,
      description: (article as any)?.twitterDescription ?? desc,
      images: [`${BASE}/api/og/${slug}?lang=${lang}`],
    },
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = EDGE_AI_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = edgeAiContent[key]
  const enArticle = articleData?.['en']
  const hasEnContent = !!enArticle && Object.keys(enArticle.sections ?? {}).length > 0

  if (!hasEnContent) {
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const langArticle = articleData?.[lang]
  const hasLangContent = !!langArticle && Object.keys(langArticle.sections ?? {}).length > 0
  if (!hasLangContent && lang !== 'en') {
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const article = (langArticle ?? enArticle)!
  const canonicalUrl = `${BASE}${edgeAiArticlePath(lang, slug)}`

  const edLevel = (article as any).educationalLevel ?? (enArticle as any)?.educationalLevel
  const levelMap: Record<string, string> = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Expert', Technical: 'Expert' }
  const proficiencyLevel = edLevel ? levelMap[edLevel] ?? edLevel : undefined

  const articleSchema: any = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
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
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
    },
    isPartOf: { '@type': 'WebPage', name: 'Edge AI Guide', url: `${BASE}${edgeAiHubPath(lang)}` },
  }
  if (!articleSchema.inLanguage) articleSchema.inLanguage = toOutputLocale(lang)
  if ((article as any).heroImage) {
    articleSchema.image = { '@type': 'ImageObject', url: `${BASE}${(article as any).heroImage}`, width: 1200, height: 675 }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: HUB_LABEL[lang], item: `${BASE}${edgeAiHubPath(lang)}` },
      { '@type': 'ListItem', position: 3, name: article.title ?? slugToTitle(slug), item: canonicalUrl },
    ],
  }

  const faqEntries = Object.values(article.sections).flatMap((s) => s.faqs ?? [])
  const quickAnswerTopEntry = (article as any).quickAnswerTop?.[lang]
  const allFaqEntries = [
    ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema = article.faqSchema ?? (allFaqEntries.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqEntries.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null)

  const howToSection = Object.values(article.sections).find((s) => s.numberedItems && s.numberedItems.length > 0)
  const howToSchema = article.howToSchema ?? (howToSection ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: article.title,
    description: article.intro,
    step: howToSection.numberedItems!.map((step, i) => {
      const rawText = typeof step === 'string' ? step : `${step.title}: ${step.whyItMatters}`
      const cleanText = rawText.replace(/\*\*/g, '')
      const colonIdx = cleanText.indexOf(':')
      const name = typeof step !== 'string' ? step.title : colonIdx > 0 && colonIdx < 80 ? cleanText.slice(0, colonIdx).trim() : cleanText.slice(0, 80).trim()
      return { '@type': 'HowToStep', position: i + 1, name, text: cleanText }
    }),
  } : null)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      <EdgeAiPostClient slug={slug} initialLang={lang} {...narrowArticleData(articleData, lang)} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

const HUB_TITLE: Record<Lang, string> = {
  en: 'Edge AI Silicon, Robots & Cameras 2026: Local LLMs Shipped in Products',
  de: 'Edge-AI-Hardware, Roboter & Kameras 2026: Lokale LLMs in Produkten',
  fr: "IA Embarquée : Silicium, Robots & Caméras 2026",
  ja: 'エッジAI：シリコン・ロボット・カメラ 2026',
  zh: '边缘 AI：芯片、机器人与摄像头 2026',
  es: 'IA de Borde: Silicio, Robots y Cámaras 2026',
  pt: 'IA de Borda: Silício, Robôs e Câmeras 2026',
  ar: 'الذكاء الاصطناعي الطرفي: الشرائح والروبوتات والكاميرات 2026',
  ko: '엣지 AI: 실리콘, 로봇, 카메라 2026',
}
const HUB_DESC: Record<Lang, string> = {
  en: 'Engineering guides for shipping local LLMs and VLMs inside real products: edge silicon selection, on-robot inference, and in-camera video analytics — power, thermals, and cost at volume.',
  de: 'Engineering-Guides für lokale LLMs und VLMs in echten Produkten: Edge-Silizium-Auswahl, On-Robot-Inferenz und In-Kamera-Videoanalyse — Leistung, Thermik und Kosten in Serie.',
  fr: "Guides d'ingénierie pour déployer des LLM et VLM locaux dans de vrais produits : choix du silicium embarqué, inférence sur robot et analyse vidéo embarquée — puissance, thermique et coût en volume.",
  ja: '実製品にローカルLLM・VLMを組み込むためのエンジニアリングガイド。エッジシリコン選定、ロボット搭載推論、カメラ内映像解析——電力・熱設計・量産コストを解説。',
  zh: '在真实产品中部署本地 LLM 与 VLM 的工程指南：边缘芯片选型、机器人端推理、摄像头内视频分析——聚焦功耗、散热与量产成本。',
  es: 'Guías de ingeniería para desplegar LLM y VLM locales en productos reales: selección de silicio de borde, inferencia a bordo de robots y análisis de vídeo en cámara — potencia, térmica y coste por volumen.',
  pt: 'Guias de engenharia para embarcar LLMs e VLMs locais em produtos reais: seleção de silício de borda, inferência a bordo de robôs e análise de vídeo embarcada — potência, térmica e custo em volume.',
  ar: 'أدلة هندسية لتشغيل نماذج اللغة والرؤية المحلية داخل منتجات فعلية: اختيار شرائح الحوسبة الطرفية، والاستدلال على متن الروبوتات، وتحليل الفيديو داخل الكاميرا — الطاقة والحرارة والتكلفة عند الإنتاج بالجملة.',
  ko: '실제 제품에 로컬 LLM·VLM을 탑재하기 위한 엔지니어링 가이드: 엣지 실리콘 선정, 로봇 탑재 추론, 카메라 내장 영상 분석 — 전력, 발열, 대량생산 비용을 다룹니다.',
}

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const isPublished = isEdgeAiHubPublished(lang)
  const title = HUB_TITLE[lang] ?? HUB_TITLE.en
  const desc = HUB_DESC[lang] ?? HUB_DESC.en
  return {
    title: truncateTitle(title),
    description: desc,
    alternates: edgeAiAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title, description: desc, url: `${BASE}${edgeAiHubPath(lang)}`, type: 'website', siteName: 'PromptQuorum',
      images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', site: '@promptquorum', title, description: desc },
  } satisfies Metadata
}

const HUB_INTRO: Record<Lang, string> = {
  en: 'Existing local-LLM content asks "can I run this?" This cluster asks "can I ship this in a product?" — power budgets, thermal design points, industrial temperature range, and unit cost at volume.',
  de: 'Bestehende Local-LLM-Inhalte fragen „Kann ich das ausführen?“ Dieser Bereich fragt „Kann ich das in einem Produkt ausliefern?“ — Leistungsbudget, thermisches Design, Industrietemperaturbereich und Stückkosten in Serie.',
  fr: "Le contenu LLM local existant demande « puis-je exécuter ceci ? ». Ce pôle demande « puis-je l'expédier dans un produit ? » — budget de puissance, point de conception thermique, plage de température industrielle et coût unitaire en volume.",
  ja: '既存のローカルLLMコンテンツは「動かせるか？」を問います。このクラスタは「製品に搭載できるか？」を問います——電力予算、熱設計、産業用温度範囲、量産単価。',
  zh: '现有的本地 LLM 内容问的是"能跑起来吗？"这个板块问的是"能装进产品里出货吗？"——功耗预算、热设计功耗点、工业温度范围与量产单价。',
  es: 'El contenido de LLM local existente pregunta "¿puedo ejecutar esto?". Este clúster pregunta "¿puedo enviarlo dentro de un producto?" — presupuesto de potencia, punto de diseño térmico, rango de temperatura industrial y coste unitario en volumen.',
  pt: 'O conteúdo de LLM local existente pergunta "posso executar isto?". Este cluster pergunta "posso embarcar isto num produto?" — orçamento de potência, ponto de projeto térmico, faixa de temperatura industrial e custo unitário em volume.',
  ar: 'يسأل محتوى LLM المحلي الحالي "هل يمكنني تشغيل هذا؟". يسأل هذا القسم "هل يمكنني شحن هذا داخل منتج؟" — ميزانية الطاقة، ونقطة التصميم الحراري، ونطاق درجة الحرارة الصناعي، وتكلفة الوحدة عند الإنتاج بالجملة.',
  ko: '기존 로컬 LLM 콘텐츠는 "실행할 수 있는가?"를 묻습니다. 이 클러스터는 "제품에 탑재해 출시할 수 있는가?"를 묻습니다 — 전력 예산, 열설계 기준점, 산업용 온도 범위, 대량생산 단가.',
}

const SECTION_LABEL: Record<Lang, { silicon: string; act: string; observe: string; siliconDesc: string; actDesc: string; observeDesc: string }> = {
  en: { silicon: 'Silicon', act: 'Act', observe: 'Observe', siliconDesc: 'What compute goes in the box.', actDesc: 'Machines that do things.', observeDesc: 'Systems that watch things.' },
  de: { silicon: 'Silizium', act: 'Handeln', observe: 'Beobachten', siliconDesc: 'Welche Rechenleistung ins Gerät kommt.', actDesc: 'Maschinen, die handeln.', observeDesc: 'Systeme, die beobachten.' },
  fr: { silicon: 'Silicium', act: 'Agir', observe: 'Observer', siliconDesc: "Le calcul embarqué dans le boîtier.", actDesc: 'Des machines qui agissent.', observeDesc: 'Des systèmes qui observent.' },
  ja: { silicon: 'シリコン', act: '動く', observe: '観る', siliconDesc: '筐体内に搭載する演算チップ。', actDesc: '実際に動作する機械。', observeDesc: '監視・観測するシステム。' },
  zh: { silicon: '芯片', act: '行动', observe: '观测', siliconDesc: '装进设备里的算力。', actDesc: '会动作的机器。', observeDesc: '负责观测的系统。' },
  es: { silicon: 'Silicio', act: 'Actuar', observe: 'Observar', siliconDesc: 'Qué cómputo va dentro del dispositivo.', actDesc: 'Máquinas que hacen cosas.', observeDesc: 'Sistemas que observan.' },
  pt: { silicon: 'Silício', act: 'Agir', observe: 'Observar', siliconDesc: 'Qual computação vai dentro do produto.', actDesc: 'Máquinas que fazem coisas.', observeDesc: 'Sistemas que observam.' },
  ar: { silicon: 'الشرائح', act: 'الفعل', observe: 'المراقبة', siliconDesc: 'الحوسبة التي تدخل داخل الجهاز.', actDesc: 'آلات تقوم بأفعال.', observeDesc: 'أنظمة تراقب.' },
  ko: { silicon: '실리콘', act: '동작', observe: '관측', siliconDesc: '기기 안에 들어가는 연산 장치.', actDesc: '동작하는 기계.', observeDesc: '관측하는 시스템.' },
}

export async function buildHubPageElement(lang: Lang) {
  if (!ALL.includes(lang)) return renderComingSoon({ lang: 'en', kind: 'hub' })
  return renderHub(lang)
}

function renderHub(lang: Lang) {
  const title = HUB_TITLE[lang] ?? HUB_TITLE.en
  const intro = HUB_INTRO[lang] ?? HUB_INTRO.en
  const labels = SECTION_LABEL[lang] ?? SECTION_LABEL.en
  const canonicalUrl = `${BASE}${edgeAiHubPath(lang)}`

  const hubBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: HUB_LABEL[lang], item: canonicalUrl },
    ],
  }

  const groups: Array<{ id: 'silicon' | 'act' | 'observe'; slugs: string[] }> = [
    { id: 'silicon', slugs: ['edge-ai-hardware-for-local-llms'] },
    { id: 'act', slugs: ['vla-models-robots-local-inference'] },
    { id: 'observe', slugs: ['vlm-video-analytics-drones-edge'] },
  ]

  const publishedGroups = groups.map((g) => ({
    ...g,
    slugs: g.slugs.filter((s) => isEdgeAiArticlePublished(s, lang)),
  }))

  const hubCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: intro,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: publishedGroups.reduce((n, g) => n + g.slugs.length, 0),
      itemListElement: publishedGroups.flatMap((g) => g.slugs).map((slug, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${edgeAiArticlePath(lang, slug)}`,
        name: edgeAiContent[slug]?.[lang]?.title ?? edgeAiContent[slug]?.['en']?.title ?? slugToTitle(slug),
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubCollectionSchema) }} />
      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{HUB_LABEL[lang]}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">{title}</h1>
            <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed">{intro}</p>
          </div>

          {groups.map((g) => (
            <section key={g.id} id={g.id} className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">{labels[g.id]}</h2>
              <p className="text-text-secondary text-sm mb-6 max-w-2xl">
                {g.id === 'silicon' ? labels.siliconDesc : g.id === 'act' ? labels.actDesc : labels.observeDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {g.slugs.map((slug) => {
                  const isLive = isEdgeAiArticlePublished(slug, lang)
                  const articleTitle = edgeAiContent[slug]?.[lang]?.title ?? edgeAiContent[slug]?.['en']?.title ?? slugToTitle(slug)
                  return (
                    <Link
                      key={slug}
                      href={isLive ? edgeAiArticlePath(lang, slug) : edgeAiArticlePath('en', slug)}
                      className="flex items-start gap-3 p-4 border border-primary/15 rounded-xl bg-card hover:border-primary/40 transition-colors"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm font-medium text-text-primary">{articleTitle}</span>
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
