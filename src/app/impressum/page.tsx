import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | PromptQuorum',
  description: 'Impressum und Anbieterkennzeichnung gemäß § 5 DDG für PromptQuorum.',
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-gray-400 mb-4">
            <a href="/" className="hover:text-purple-600 transition-colors">PromptQuorum</a>
            <span className="mx-2">/</span>
            <span>Impressum</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Impressum</h1>
          <p className="mt-2 text-sm text-gray-500">Angaben gemäß § 5 DDG</p>
        </div>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Verantwortlich</h2>
            <p>
              Hans-Helmut Kuepper<br />
              Muehlwingertweg 2<br />
              69242 Muehlhausen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:hello@promptquorum.com"
                className="text-purple-600 hover:underline"
              >
                hello@promptquorum.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Inhaltlich Verantwortlicher</h2>
            <p>
              Hans-Helmut Kuepper (Anschrift wie oben)
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-100 text-xs text-gray-400">
            <a href="/privacy" className="hover:text-purple-600 transition-colors">Datenschutzerklärung</a>
          </div>

        </div>
      </div>
    </div>
  )
}
