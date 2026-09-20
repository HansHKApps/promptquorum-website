'use client'

import { useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { CATEGORY_GROUPS } from '@/lib/power-local-llm/apps/categories'
import type { CategoryGroupKey } from '@/lib/power-local-llm/apps/categories'
import { t, type HomeUiKey } from './home-i18n'

const GROUP_LABEL_KEY: Record<CategoryGroupKey, HomeUiKey> = {
  'run-serve': 'catRunServe',
  'chat-assistants': 'catChatAssistants',
  'code-development': 'catCodeDevelopment',
  'knowledge-retrieval': 'catKnowledgeRetrieval',
  'voice-audio': 'catVoiceAudio',
  'images-video': 'catImagesVideo',
  'train-operate': 'catTrainOperate',
}

/**
 * UI shell only — no comparison-article content exists yet (a separate
 * content commitment, one dedicated comparison article per category, still
 * to be written). The category selector and app-narrowing selector are
 * real and wired to real data (the 7 CATEGORY_GROUPS); the table itself has
 * nothing to render from until that content ships, so it stays a
 * "launching soon" placeholder rather than faking sample rows.
 */
export function ComparisonToolShell({ lang = 'en' }: { lang?: Language }) {
  const [category, setCategory] = useState<CategoryGroupKey | null>(null)

  return (
    <div className="rounded-xl border border-border bg-card p-6 h-full">
      <h2 className="text-xl font-bold text-text-primary mb-1">{t('compareHeading', lang)}</h2>
      <p className="text-sm text-text-secondary mb-4">{t('compareSubheading', lang)}</p>

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
            {t(GROUP_LABEL_KEY[group.key], lang)}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-dashed border-border bg-surface/50 p-8 text-center">
        <p className="text-sm text-text-muted">
          {category
            ? t('compareCategoryPickedTemplate', lang, { category: t(GROUP_LABEL_KEY[category], lang) })
            : t('compareNoCategoryPicked', lang)}
        </p>
      </div>
    </div>
  )
}
