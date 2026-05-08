// Power Local LLM — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml for the EN locale. All other slugs in the cluster — including
// every DE/FR/JA/ZH variant — remain noindex + sitemap-excluded until they pass
// audit and are added here.
//
// Launched 2026-05-08: Cat 2 (RAG, 5) + Cat 6 (Mobile/Edge, 5) + Cat 7
// (Productivity, 5) + Directory (1) + Hub. 16 articles + hub = 17 URLs.

export const POWER_LLM_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Cat 0 — Overview & Reference (1)
  'local-llm-software-directory-2026',

  // Cat 2 — RAG & Document Chat (5)
  'anythingllm-vs-privategpt-vs-openwebui-rag',
  'local-rag-on-your-pdfs-step-by-step',
  'best-embedding-models-local-rag-2026',
  'chat-with-1000-pdfs-locally',
  'local-rag-for-private-business-data',

  // Cat 6 — Mobile & Edge LLMs (5)
  'best-local-llm-apps-iphone-2026',
  'best-local-llm-apps-android-2026',
  'run-ai-on-tablet-ipad-android',
  'mobile-llm-models-phi4-gemma-smollm',
  'voice-assistant-local-mobile-offline',

  // Cat 7 — Productivity & Knowledge Tools (5)
  'local-llm-with-obsidian-2026',
  'local-llm-with-logseq-and-joplin',
  'local-llm-personal-knowledge-base-2026',
  'local-llm-email-and-calendar-automation',
  'replace-grammarly-notion-ai-with-local',
])

export const POWER_LLM_HUB_PUBLISHED = true

export function isPowerLLMArticlePublished(slug: string, lang: string): boolean {
  return lang === 'en' && POWER_LLM_PUBLISHED_SLUGS.has(slug)
}

export function isPowerLLMHubPublished(lang: string): boolean {
  return (lang === 'en' || lang === 'de') && POWER_LLM_HUB_PUBLISHED
}
