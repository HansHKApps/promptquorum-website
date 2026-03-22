export const SLUG_TO_POST_ID = {
  'prompt-frameworks': 'frameworks',
  'local-ai-vs-cloud': 'localAI',
  'ai-model-comparison': 'comparison',
  'quorum': 'quorum',
  'prompt-optimization': 'optimization',
  'enterprise-data-privacy': 'dataPrivacy',
  'research-prompt-optimization-impact': 'promptImpact',
  'ai-consensus-scoring': 'consensusScoring',
  'promptquorum-vs-askquorum': 'vsAskQuorum',
  'what-is-ai-consensus-scoring': 'whatIsConsensusScoring',
  'ai-hallucinations-why-ai-makes-things-up': 'hallucinations',
} as const

export type BlogSlug = keyof typeof SLUG_TO_POST_ID
export type PostId = typeof SLUG_TO_POST_ID[BlogSlug]
