import { Fragment } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { SECURITY_EMAIL, securityContent } from '@/lib/security/content'

const SITE = 'https://www.promptquorum.com'
const LINK = 'text-purple-600 hover:underline'

function langPrefix(lang: Language): string {
  return lang === 'en' ? '' : `/${lang}`
}

function renderParagraph(text: string, lang: Language, labels: { privacy: string; impressum: string }) {
  const parts = text.split(/(\{privacy\}|\{impressum\}|\{email\}|`[^`]+`)/)
  return parts.map((part, i) => {
    if (part === '{privacy}') return <a key={i} href={`${langPrefix(lang)}/privacy`} className={LINK}>{labels.privacy}</a>
    if (part === '{impressum}') return <a key={i} href="/impressum" className={LINK}>{labels.impressum}</a>
    if (part === '{email}') return <a key={i} href={`mailto:${SECURITY_EMAIL}`} className={LINK}>{SECURITY_EMAIL}</a>
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} dir="ltr" className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function SecurityPage({ lang }: { lang: Language }) {
  const c = securityContent[lang]
  const prefix = langPrefix(lang)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.home, item: `${SITE}${prefix || '/'}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `${SITE}${prefix}/security` },
    ],
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-24" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-gray-400 mb-4">
            <a href={prefix || '/'} className="hover:text-purple-600 transition-colors">{c.home}</a>
            <span className="mx-2">/</span>
            <span>{c.breadcrumb}</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-900">{c.h1}</h1>
          <p className="mt-2 text-sm text-gray-500">{c.subtitle}</p>
        </div>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          {c.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-base font-semibold text-gray-900 mb-2">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : undefined}>
                  {renderParagraph(p, lang, { privacy: c.privacyLabel, impressum: c.impressumLabel })}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
