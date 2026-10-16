import type { Language } from '@/lib/blog/blogContent'
import { TESTING_STANDARDS_COPY } from '@/lib/testing-standards/copy'
import { DISCLAIMER_COPY } from '@/lib/testing-standards/disclaimer'

const H2 = 'mt-10 mb-3 text-2xl font-bold text-text-primary'
const P = 'mb-4 max-w-prose leading-relaxed text-text-secondary'

export function TestingStandardsPageContent({ lang }: { lang: Language }) {
  const t = TESTING_STANDARDS_COPY[lang]
  const d = DISCLAIMER_COPY[lang]
  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold text-text-primary sm:text-4xl">{t.h1}</h1>
      {t.sections.map((s, i) => (
        <section key={s.h}>
          <h2 className={H2}>{s.h}</h2>
          {s.p.map((para) => (
            <p key={para} className={P}>{para}</p>
          ))}
          {i === t.sections.length - 1 && (
            <>
              <p className="mb-4 max-w-prose text-lg font-bold leading-relaxed text-text-primary">{t.question}</p>
              <p className={P}>{t.closing}</p>
            </>
          )}
        </section>
      ))}
      <p className="mt-10 italic text-text-muted">{t.tagline}</p>
      <section id="disclaimer" className="mt-12 rounded-md border border-border bg-card p-5">
        <h2 className="mb-3 text-xl font-bold text-text-primary">{d.title}</h2>
        {d.paragraphs.map((para) => (
          <p key={para} className="mb-3 max-w-prose text-sm leading-relaxed text-text-secondary">{para}</p>
        ))}
        <p className="max-w-prose text-sm leading-relaxed text-text-secondary">
          {d.contact.before}
          <a href="/impressum" className="text-primary underline">{d.contact.linkText}</a>
          {d.contact.after}
        </p>
      </section>
    </main>
  )
}
