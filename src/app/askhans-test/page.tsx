// Hidden cross-check page for Hans: all 21 Ask Hans categories with label, key, picture and link cards.
// Not linked anywhere, noindex, not in the sitemap. Open /askhans-test directly.

import type { Metadata } from 'next'
import { ASK_HANS_CATEGORIES } from '@/lib/askhans/categories'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ask Hans categories (test)',
    robots: { index: false, follow: false },
  }
}

export default function AskHansTestPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">Ask Hans — {ASK_HANS_CATEGORIES.length} Kategorien (Testseite)</h1>
      <p className="mt-2 text-sm text-gray-600">
        Quelle: <code>src/lib/askhans/categories.json</code>. Jede Karte zeigt Beschriftung, Schlüssel, Bild und die Link-Karten. „placeholder“ = automatisch gewählter Platzhalter-Link.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ASK_HANS_CATEGORIES.map((c) => (
          <li key={c.key} className="rounded-xl border border-gray-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.label_de}</p>
            <p className="text-xs text-gray-500">
              {c.key} · {c.label_en} · Icon {c.icon}
            </p>
            <img src={c.image} alt={c.alt} width={300} height={400} className="mt-2 w-full max-w-[300px] rounded-lg" />
            <ul className="mt-2 space-y-1 text-sm">
              {c.links.map((l) => (
                <li key={l.id}>
                  <a href={l.url} className="text-primary underline">{l.title}</a>
                  <span className="text-gray-500"> — {l.description}</span>
                  {l.placeholder && <span className="ml-1 rounded bg-yellow-100 px-1 text-[10px] text-yellow-800">placeholder</span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
