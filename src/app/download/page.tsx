import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    alternates: generateAlternates('/download'),
    openGraph: {
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
    },
  }
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Download</h1>
          <p className="text-lg text-text-secondary">Coming soon - Full download page</p>
        </div>
        <p className="text-center"><a href="/" className="text-primary hover:text-primary/80">← Back to Home</a></p>
      </div>
    </div>
  )
}
