// Local LLMs content entry point — re-exports types and the assembled llmContent.
// Post-canary: serves split files exclusively.
export type { LLMSection, LLMArticle } from './types';
export { llmContent } from './articles-barrel';
