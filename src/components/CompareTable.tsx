import Link from 'next/link'
import type { CompareColumn, CompareRow } from '@/lib/power-local-llm/compare-data'

interface CompareTableProps {
  columns: CompareColumn[]
  rows: CompareRow[]
  lang: string
  /** Prepended to each review path, e.g. '/de' for non-English pages. */
  localePrefix?: string
}

/**
 * Side-by-side comparison table shared by the category articles and the homepage comparison tool.
 * "—" means "not stated in the project's own documentation", never "no".
 */
export function CompareTable({ columns, rows, localePrefix = '' }: CompareTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-surface">
          <tr>
            <th scope="col" className="sticky left-0 bg-surface px-3 py-2 font-bold text-text-primary">
              Tool
            </th>
            {columns.map((c) => (
              <th key={c.key} scope="col" className="px-3 py-2 font-bold text-text-primary">
                {c.label}
              </th>
            ))}
            <th scope="col" className="px-3 py-2 font-bold text-text-primary">
              Review
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.slug} className="border-t border-border">
              <th scope="row" className="sticky left-0 bg-white px-3 py-2 font-semibold text-text-primary">
                {r.reviewSlug ? (
                  <Link href={`${localePrefix}/power-local-llm/${r.reviewSlug}`} className="text-primary hover:underline">
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
                {r.reviewSlug ? (
                  <Link href={`${localePrefix}/power-local-llm/${r.reviewSlug}`} className="font-semibold text-primary hover:underline">
                    Read review →
                  </Link>
                ) : (
                  <span className="text-text-muted">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
