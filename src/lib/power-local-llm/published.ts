// Power Local LLM — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml for the EN locale. All other slugs in the cluster — including
// every DE/FR/JA/ZH variant — remain noindex + sitemap-excluded until they pass
// audit and are added here.
//
// Launched 2026-05-08: Cat 2 (RAG, 5) + Cat 6 (Mobile/Edge, 5) + Cat 7
// (Productivity, 5) + Directory (1) + Hub. 16 articles + hub = 17 URLs.
// 2026-05-14: Opened all remaining 20 articles.

export const POWER_LLM_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Cat 0 — Overview & Reference (1)
  'local-llm-software-directory-2026',

  // Cat 1 — Getting Started
  'easiest-local-ai-app-windows-mac-linux',
  'best-local-ai-app-low-end-pc',
  'local-ai-app-non-technical-users',

  // Cat 2 — RAG & Document Chat (5)
  'anythingllm-vs-privategpt-vs-openwebui-rag',
  'local-rag-on-your-pdfs-step-by-step',
  'best-embedding-models-local-rag-2026',
  'chat-with-1000-pdfs-locally',
  'local-rag-for-private-business-data',
  'local-ai-app-with-built-in-rag',

  // Cat 3 — Coding
  'continue-dev-vs-cline-vs-aider-local',
  'best-local-coding-models-2026',
  'local-coding-llm-without-internet',
  'replace-github-copilot-with-local-llm',
  'local-llm-code-review-ci-cd',

  // Cat 4 — Agents & Automation
  'local-ai-agents-with-mcp-2026',
  'autonomous-local-agents-actually-work',
  'local-ai-agents-business-workflows-eu-compliance',
  'replace-zapier-with-local-ai-agents',

  // Cat 5 — Creative Writing
  'best-local-llm-creative-writing-2026',
  'local-llm-prompts-for-fiction-writers',
  'local-llm-screenwriting-and-novel-drafting',
  'sillytavern-vs-agnai-vs-risuai-roleplay',
  'uncensored-local-llm-creative-writing-ethics',

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

  // Cat 8 — Tools & App Reviews
  'lm-studio-vs-jan-vs-gpt4all-2026',
  'best-local-models-tool-calling-2026',

  // Cat 9 — Voice, Speech & Multimodal
  'local-whisper-stt-comparison-2026',
  'local-vision-models-llava-ollama-2026',
  'local-tts-voice-cloning-piper-coqui-xtts',
  'build-local-voice-assistant-2026',
  'local-multimodal-pipeline-voice-vision-text',

  // Cat 10 — Hardware Buying Guides & Affiliate
  'best-gpu-buying-guide-local-llm-2026',
  'best-mac-for-local-ai-2026',
  'cloud-gpu-rental-guide-2026',
  'local-ai-workstation-build-guide-2026',
  'best-vpn-ai-privacy-local-llm-2026',
  'best-nas-storage-local-ai-models-2026',
  'best-ai-coding-tools-comparison-2026',
  'best-monitors-ai-development-2026',
  'best-laptops-local-llm-2026',
  'best-ai-courses-certifications-2026',
  'best-affiliate-tools-ai-developers-2026',
])

export const POWER_LLM_HUB_PUBLISHED = true

export function isPowerLLMArticlePublished(slug: string, _lang: string): boolean {
  return POWER_LLM_PUBLISHED_SLUGS.has(slug)
}

export function isPowerLLMHubPublished(_lang: string): boolean {
  return POWER_LLM_HUB_PUBLISHED
}
