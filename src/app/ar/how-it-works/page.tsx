import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
  const t = translations[lang]

  return {
    title: t.howItWorksMetaTitle,
    description: t.howItWorksMetaDescription,
    alternates: generateAlternates('/how-it-works', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
    },
  }
}

export default async function ArHowItWorksPage() {
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'كيف يعمل PromptQuorum — كتابة، تحسين، إرسال، Quorum',
      'url': 'https://www.promptquorum.com/ar/how-it-works',
      'inLanguage': 'ar',
      'description': 'دليل شامل لسير عمل PromptQuorum المكوّن من 4 مراحل: كتابة موجّهات منظمة باستخدام 9 أُطر، والتحسين بالذكاء الاصطناعي، والإرسال بنقرة واحدة إلى أكثر من 25 خدمة ذكاء اصطناعي، وتحليل Quorum متعدد النماذج.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': 'https://www.promptquorum.com/ar' },
        { '@type': 'ListItem', 'position': 2, 'name': 'كيف يعمل', 'item': 'https://www.promptquorum.com/ar/how-it-works' },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang="ar" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
