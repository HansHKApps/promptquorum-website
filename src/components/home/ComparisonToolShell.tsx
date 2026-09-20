'use client'

import { useState } from 'react'
import { HomeIcon } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { CATEGORY_GROUPS, CATEGORY_GROUP_LABEL } from '@/lib/power-local-llm/apps/categories'

/**
 * UI shell only — no comparison-article content exists yet (a separate
 * content commitment, one dedicated comparison article per category, still
 * to be written). The category selector and app-narrowing selector are
 * real and wired to real data (the 7 CATEGORY_GROUPS); the table itself has
 * nothing to render from until that content ships, so it stays a
 * "launching soon" placeholder rather than faking sample rows.
 */
export function ComparisonToolShell() {
  const [category, setCategory] = useState<string | null>(null)

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.action} p-6 h-full`}>
      <h2 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
        <HomeIcon name="compare" size={20} />
        Compare Tools
      </h2>
      <p className="text-sm text-text-secondary mb-4">
        Comparison tool launching soon — we&apos;re building out category comparisons.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORY_GROUPS.map((group) => (
          <button
            key={group.key}
            type="button"
            onClick={() => setCategory(group.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              category === group.key
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-text-secondary hover:border-primary/50'
            }`}
          >
            {CATEGORY_GROUP_LABEL[group.key]}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-dashed border-border bg-surface/50 p-8 text-center">
        <p className="text-sm text-text-muted">
          {category
            ? `Comparison tables for "${CATEGORY_GROUP_LABEL[category as keyof typeof CATEGORY_GROUP_LABEL]}" aren't published yet.`
            : 'Pick a category above to preview its comparison table once it exists.'}
        </p>
      </div>
    </div>
  )
}
