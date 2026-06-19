import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
  const t = translations[lang]

  return {
    title: t.featuresMetaTitle,
    description: t.featuresMetaDescription,
    alternates: generateAlternates('/features', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
    },
  }
}

export default async function ArFeaturesPage() {
  return (
    <>
      <FeaturesPageClient initialLang="ar" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'ميزات PromptQuorum — هندسة الموجهات، الإرسال متعدد النماذج، تحليل Quorum',
              'url': 'https://www.promptquorum.com/ar/features',
              'description': 'استكشف ميزات PromptQuorum: 9 أطر عمل للموجهات، تحسين بالذكاء الاصطناعي، إرسال إلى 25+ خدمة ذكاء اصطناعي، تحليل التوافق متعدد النماذج، كشف الهلوسة، دعم النماذج المحلية، وخصوصية كاملة.',
              'inLanguage': 'ar',
              'datePublished': '2026-04-05',
              'dateModified': '2026-04-05',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              'about': {
                '@type': 'SoftwareApplication',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': 'https://www.promptquorum.com/ar' },
                { '@type': 'ListItem', 'position': 2, 'name': 'الميزات', 'item': 'https://www.promptquorum.com/ar/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
