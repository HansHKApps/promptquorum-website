import Link from 'next/link'
import { AffiliateLink } from '@/components/AffiliateLink'
import { AFFILIATE_LINK_MARKER } from '@/lib/affiliate-links'
import type { CompareColumn, CompareRow, CompareTableUi } from '@/lib/power-local-llm/compare-data'

interface CompareTableProps {
  columns: CompareColumn[]
  rows: CompareRow[]
  lang: string
  ui: CompareTableUi
  /** Prepended to each review path, e.g. '/de' for non-English pages. */
  localePrefix?: string
  /** Category label used as the tracked product category on each site button. Omit for no buttons. */
  siteLinkCategory?: string
}

/**
 * Side-by-side comparison table shared by the category articles and the homepage comparison tool.
 * "—" means "not stated in the project's own documentation", never "no".
 */
export function CompareTable({ columns, rows, lang, ui, localePrefix = '', siteLinkCategory }: CompareTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-surface">
          <tr>
            <th scope="col" className="sticky left-0 bg-surface px-3 py-2 font-bold text-text-primary">
              {ui.tool}
            </th>
            {columns.map((c) => (
              <th key={c.key} scope="col" className="px-3 py-2 font-bold text-text-primary">
                {c.label}
              </th>
            ))}
            <th scope="col" className="px-3 py-2 font-bold text-text-primary">
              {ui.review}
            </th>
            {siteLinkCategory && (
              <th scope="col" className="px-3 py-2 font-bold text-text-primary">
                {AFFILIATE_LINK_MARKER[lang] ?? AFFILIATE_LINK_MARKER.en}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.slug} className="border-t border-border">
              <th scope="row" className="sticky left-0 bg-white px-3 py-2 font-semibold text-text-primary">
                {r.reviewPath ? (
                  <Link href={`${localePrefix}${r.reviewPath}`} className="text-primary hover:underline">
                    {r.name}
                  </Link>
                ) : (
                  r.name
                )}
              </th>
              {columns.map((c) => (
                <td key={c.key} className={`px-3 py-2 ${r.cells[c.key] === '—' ? 'text-text-muted' : 'text-text-secondary'}`}>
                  {r.cells[c.key] ?? '—'}
                </td>
              ))}
              <td className="whitespace-nowrap px-3 py-2">
                {r.reviewPath ? (
                  <Link href={`${localePrefix}${r.reviewPath}`} className="font-semibold text-primary hover:underline">
                    {ui.readReview} →
                  </Link>
                ) : (
                  <span className="text-text-muted">—</span>
                )}
              </td>
              {siteLinkCategory && (
                <td className="whitespace-nowrap px-3 py-2">
                  {r.siteUrl ? (
                    <AffiliateLink url={r.siteUrl} productName={r.name} productCategory={siteLinkCategory} lang={lang} variant="button" showMarker={false} />
                  ) : (
                    <span className="text-text-muted">—</span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
