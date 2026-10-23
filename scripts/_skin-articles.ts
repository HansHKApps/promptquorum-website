// Fixtures for test-article-skin: a few real articles with a TL;DR, lead block and TOC.
import { article as a } from '../src/lib/power-local-llm/articles/locally-uncensored-review'
export const ARTICLES: Record<string, Record<string, unknown>> = { 'locally-uncensored-review': a as any }
import { article as frontends } from '../src/lib/local-llms/articles/best-local-llm-frontends'
export const LOCAL_LLM_ARTICLES: Record<string, Record<string, unknown>> = { 'best-local-llm-frontends': frontends as any }
