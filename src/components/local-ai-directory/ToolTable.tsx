// Table-view rendering, sortable by clicking a column header. Mirrors the
// section.rows/section.columns table branch in PowerLocalLLMPostClient.tsx
// (sticky first column, hover row highlight, overflow-x scroll container)
// for visual parity with the rest of the article shell.

import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import { HardwareBlock } from './HardwareBlock'
import { StarIcon } from './icons'
import type { MachineType, SortDir, SortKey } from './types'
import { t } from './directory-i18n'

export function ToolTable({
  apps,
  lang,
  machine,
  sortKey,
  sortDir,
  onSort,
  onOpen,
}: {
  apps: ToolRecord[]
  lang: Language
  machine: MachineType
  sortKey: SortKey
  sortDir: SortDir
  onSort: (key: SortKey) => void
  onOpen: (slug: string) => void
}) {
  const COLUMNS: { key: SortKey; label: string }[] = [
    { key: 'name', label: t('colTool', lang) },
    { key: 'stars', label: t('colStars', lang) },
    { key: 'ram', label: t('detailHardware', lang) },
    { key: 'added', label: t('detailAdded', lang) },
    { key: 'status', label: t('colStatus', lang) },
    { key: 'category', label: t('colCategory', lang) },
  ]
  const STATUS_LABEL: Record<ToolRecord['status'], string> = {
    listed: t('statusListed', lang),
    verified: t('statusVerified', lang),
    tested: t('statusTested', lang),
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            {COLUMNS.map((col, i) => {
              const active = sortKey === col.key
              return (
                <th key={col.key} className={`text-left p-2 sm:p-3 font-bold text-text-primary bg-primary/5 whitespace-nowrap${i === 0 ? ' sticky left-0 z-10' : ''}`}>
                  <button
                    type="button"
                    onClick={() => onSort(col.key)}
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    {col.label}
                    {active && <span className="text-primary">{sortDir === 'asc' ? '↑' : '↓'}</span>}
                  </button>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => (
            <tr
              key={app.slug}
              onClick={() => onOpen(app.slug)}
              className="border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer group"
            >
              <td className="p-2 sm:p-3 sticky left-0 z-10 bg-white group-hover:bg-primary/5 transition-colors font-medium text-text-primary whitespace-nowrap">
                {app.name}
              </td>
              <td className="p-2 sm:p-3 text-text-secondary">
                {app.stars != null ? (
                  <span className="inline-flex items-center gap-1">
                    <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                    {app.stars.toLocaleString()}
                  </span>
                ) : (
                  <span className="text-text-secondary/50">—</span>
                )}
              </td>
              <td className="p-2 sm:p-3 text-text-secondary">
                <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} lang={lang} compact />
              </td>
              <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                {app.addedDate ? formatDisplayDate(app.addedDate, lang) : <span className="text-text-secondary/50">—</span>}
              </td>
              <td className="p-2 sm:p-3 text-text-secondary">{STATUS_LABEL[app.status]}</td>
              <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">{CATEGORY_SUB_LABEL[app.categories[0]][lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
