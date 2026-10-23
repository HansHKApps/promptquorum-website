// Fixtures for test-article-skin: a few real articles with a TL;DR, lead block and TOC.
import { article as a } from '../src/lib/power-local-llm/articles/locally-uncensored-review'
export const ARTICLES: Record<string, Record<string, unknown>> = { 'locally-uncensored-review': a as any }
