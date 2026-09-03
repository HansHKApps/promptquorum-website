import type { EnterpriseAiArticle } from './types'
import type { Language } from '@/lib/blog/blogContent'
import { article as shadowAiControlsByCompanySize } from './articles/shadow-ai-controls-by-company-size'
import { article as agenticAiSecurityIdentityAccess } from './articles/agentic-ai-security-identity-access'
import { article as aiGeneratedContentIpRisk } from './articles/ai-generated-content-ip-risk'

export const enterpriseAiContent: Record<string, Partial<Record<Language, EnterpriseAiArticle>>> = {
  'shadow-ai-controls-by-company-size': shadowAiControlsByCompanySize,
  'agentic-ai-security-identity-access': agenticAiSecurityIdentityAccess,
  'ai-generated-content-ip-risk': aiGeneratedContentIpRisk,
}
