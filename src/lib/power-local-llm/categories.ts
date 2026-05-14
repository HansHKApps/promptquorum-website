// Power Local LLM — 8 category definitions used by the hub page.
// Each category lists its constituent article slugs (resolved against POWER_LLM_SLUG_TO_KEY).
// Localized copy lives in the hub page itself; this file only defines structure + slug membership.

export interface PowerLLMCategory {
  id: string
  slug: string
  titleEn: string
  descriptionEn: string
  articleSlugs: string[]
}

export const POWER_LLM_CATEGORIES: PowerLLMCategory[] = [
  {
    id: 'overview-reference',
    slug: 'overview-reference',
    titleEn: 'Overview & Reference',
    descriptionEn: 'Cross-cutting indexes and "what exists" maps before you commit to a stack.',
    articleSlugs: [
      'local-llm-software-directory-2026',
    ],
  },
  {
    id: 'easiest-desktop-apps',
    slug: 'easiest-desktop-apps',
    titleEn: 'Easiest Desktop Apps',
    descriptionEn: 'ChatGPT-like apps you download and run. No terminal required. Best entry point.',
    articleSlugs: [
      'lm-studio-vs-jan-vs-gpt4all-2026',
      'easiest-local-ai-app-windows-mac-linux',
      'local-ai-app-non-technical-users',
      'best-local-ai-app-low-end-pc',
      'local-ai-app-with-built-in-rag',
    ],
  },
  {
    id: 'rag-document-chat',
    slug: 'rag-document-chat',
    titleEn: 'RAG & Document Chat',
    descriptionEn: 'Talk to your PDFs, notes, and folders. Personal knowledge bases that never leave your device.',
    articleSlugs: [
      'anythingllm-vs-privategpt-vs-openwebui-rag',
      'local-rag-on-your-pdfs-step-by-step',
      'best-embedding-models-local-rag-2026',
      'chat-with-1000-pdfs-locally',
      'local-rag-for-private-business-data',
    ],
  },
  {
    id: 'coding-assistants',
    slug: 'coding-assistants',
    titleEn: 'Coding Assistants',
    descriptionEn: 'Replace GitHub Copilot and Claude Code with local models. Full IDE integration, zero per-token cost.',
    articleSlugs: [
      'replace-github-copilot-with-local-llm',
      'continue-dev-vs-cline-vs-aider-local',
      'best-local-coding-models-2026',
      'local-coding-llm-without-internet',
      'local-llm-code-review-ci-cd',
    ],
  },
  {
    id: 'local-ai-agents',
    slug: 'local-ai-agents',
    titleEn: 'Local AI Agents & Tool Use',
    descriptionEn: 'Autonomous workflows. Tool-calling. MCP integration. The 2026 frontier.',
    articleSlugs: [
      'local-ai-agents-with-mcp-2026',
      'best-local-models-tool-calling-2026',
      'autonomous-local-agents-actually-work',
      'replace-zapier-with-local-ai-agents',
      'local-ai-agents-business-workflows-eu-compliance',
    ],
  },
  {
    id: 'creative-roleplay',
    slug: 'creative-roleplay',
    titleEn: 'Creative & Roleplay',
    descriptionEn: 'Unlimited generation without quotas. Story writing, character chat, brainstorming.',
    articleSlugs: [
      'best-local-llm-creative-writing-2026',
      'sillytavern-vs-agnai-vs-risuai-roleplay',
      'local-llm-prompts-for-fiction-writers',
      'uncensored-local-llm-creative-writing-ethics',
      'local-llm-screenwriting-and-novel-drafting',
    ],
  },
  {
    id: 'mobile-edge-llms',
    slug: 'mobile-edge-llms',
    titleEn: 'Mobile & Edge LLMs',
    descriptionEn: 'Run powerful AI on phones, tablets, and NPUs. The fastest-growing segment.',
    articleSlugs: [
      'best-local-llm-apps-iphone-2026',
      'best-local-llm-apps-android-2026',
      'run-ai-on-tablet-ipad-android',
      'mobile-llm-models-phi4-gemma-smollm',
      'voice-assistant-local-mobile-offline',
    ],
  },
  {
    id: 'productivity-tools',
    slug: 'productivity-tools',
    titleEn: 'Productivity & Knowledge Tools',
    descriptionEn: 'Obsidian, Logseq, Joplin integrations. Smart search and writing assistance inside your tools.',
    articleSlugs: [
      'local-llm-with-obsidian-2026',
      'local-llm-with-logseq-and-joplin',
      'local-llm-personal-knowledge-base-2026',
      'local-llm-email-and-calendar-automation',
      'replace-grammarly-notion-ai-with-local',
    ],
  },
  {
    id: 'voice-speech-multimodal',
    slug: 'voice-speech-multimodal',
    titleEn: 'Voice, Speech & Multimodal',
    descriptionEn: 'Local STT, TTS, vision models, and full offline voice pipelines. No cloud microphone required.',
    articleSlugs: [
      'local-whisper-stt-comparison-2026',
      'local-vision-models-llava-ollama-2026',
      'local-tts-voice-cloning-piper-coqui-xtts',
      'build-local-voice-assistant-2026',
      'local-multimodal-pipeline-voice-vision-text',
    ],
  },
]
