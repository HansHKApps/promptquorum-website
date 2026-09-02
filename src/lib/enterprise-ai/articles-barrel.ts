import type { EnterpriseAiArticle } from './types'
import type { Language } from '@/lib/blog/blogContent'
import { article as shadowAiControlsByCompanySize } from './articles/shadow-ai-controls-by-company-size'

export const enterpriseAiContent: Record<string, Partial<Record<Language, EnterpriseAiArticle>>> = {
  'shadow-ai-controls-by-company-size': shadowAiControlsByCompanySize,
}
