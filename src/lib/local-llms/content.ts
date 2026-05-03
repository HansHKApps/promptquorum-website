// Phase 2: Router for content split refactor.
// Selects the data source based on NEXT_PUBLIC_USE_SPLIT_LLM_CONTENT.
// Both branches must compile so type-checks and tree-shaking work.
// See docs/plans/content-refactor-2026-04.md for the full rollout plan.

import { llmContent as llmContentOriginal } from './content.original'
import { llmContent as llmContentSplit } from './articles-barrel'

export type { LLMSection, LLMArticle } from './types'

const useSplit = process.env.NEXT_PUBLIC_USE_SPLIT_LLM_CONTENT === 'true'

export const llmContent = useSplit ? llmContentSplit : llmContentOriginal
