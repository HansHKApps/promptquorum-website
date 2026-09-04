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
  // AI & open-source license taxonomy (evergreen reference) — 2026-09-03
  'ai-tool-licenses-explained',

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
  // Bodega One Code review — 2026-09-03
  'bodega-one-code-review-2026',

  // Cat 4 — Agents & Automation
  'local-ai-agents-with-mcp-2026',
  'autonomous-local-agents-actually-work',
  'local-ai-agents-business-workflows-eu-compliance',
  'replace-zapier-with-local-ai-agents',
  'babyagi-review-autonomous-agent',

  // Cat 5 — Creative Writing
  'best-local-llm-creative-writing-2026',
  'local-llm-prompts-for-fiction-writers',
  'local-llm-screenwriting-and-novel-drafting',
  'sillytavern-vs-agnai-vs-risuai-roleplay',
  'uncensored-local-llm-creative-writing-ethics',

  // Backyard AI review — 2026-09-02
  'backyard-ai-review-local-roleplay-2026',

  // Cat 6 — Mobile & Edge LLMs (6)
  'best-local-llm-apps-iphone-2026',
  'best-local-llm-apps-android-2026',
  'loci-ai-review-offline-local-ai',
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
  'elevenlabs-vs-local-tts-piper-xtts',
  'voice-ai-writers-cloud-vs-local',
  'local-whisper-stt-comparison-2026',
  'local-vision-models-llava-ollama-2026',
  'local-tts-voice-cloning-piper-coqui-xtts',
  'build-local-voice-assistant-2026',
  'local-multimodal-pipeline-voice-vision-text',

  // Commercial Sprint 2026-05-26 — 6 new revenue pages
  'qwen-local-deployment-complete-guide-2026',
  // China Sprint 2026-05-26
  'deepseek-vs-qwen-local-comparison-2026',
  'deepseek-vs-qwen-coding-local-2026',
  'best-workstation-build-local-ai-2026',
  'best-local-llm-ide-plugins-2026',
  'best-rag-tools-for-business-documents-2026',
  'wechat-bot-local-llm-personal-assistant-2026',
  'local-ai-behind-firewall-offline-2026',
  'wechat-local-llm-integration-2026',

  // Cat 10 — Hardware Buying Guides & Affiliate
  'best-gpu-buying-guide-local-llm-2026',
  'rtx-3090-local-llm-buy-or-rent',
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
  'apple-mlx-vs-nvidia-cuda-local-llm-2026',
  'cursor-vs-windsurf-vs-copilot-cline-2026',
  'pinecone-vs-weaviate-vs-qdrant-vs-chroma-2026',

  // DeepSeek Series 2026-06-19
  'deepseek-r1-vs-distills-explained-2026',
  'deepseek-offline-china-self-hosted-2026',

  // Category 11 — Image & Video Generation
  'local-ai-video-generation-vs-cloud',
  'local-ai-image-generation-vs-cloud',

  // AnimateDiff guide — 2026-09-02
  'animatediff-video-generation-guide-2026',

  // Web Hosting Series 2026-08-30 — 9 localized pages, en+native per file
  'best-web-hosting-2026',

  // ASUS mini PC + electricity/solar affiliate pages — 2026-09-01
  'asus-mini-pc-local-ai-2026',
  'local-llm-electricity-cost-balcony-solar-2026',

  // Flowise shutdown coverage — 2026-09-02
  'flowise-ai-visual-workflow-builder-review',

  // Haystack (deepset) RAG framework review — 2026-09-02
  'haystack-deepset-rag-framework-review',

  // Enterprise/B2B infrastructure — 2026-09-02
  'enterprise-llm-inference-servers-vllm-tgi-nim-2026',
  // Dify LLMOps platform review — 2026-09-02
  'dify-ai-workflow-builder-review',
  // Langflow review — 2026-09-02
  'langflow-visual-ai-orchestration-review',
  // LlamaIndex deep-dive — 2026-09-02
  'llamaindex-rag-framework-review',
  // txtai embedded vector database review — 2026-09-02
  'txtai-embedded-vector-database-review',
  // Quivr maintenance-status review — 2026-09-02
  'quivr-self-hosted-knowledge-assistant-review',
  // RAGFlow deep document understanding review — 2026-09-02
  'ragflow-document-understanding-rag-review',
  // Khoj review — 2026-09-02
  'khoj-ai-second-brain-review',
  'real-esrgan-ai-image-upscaler-review',
  // Second Me review — 2026-09-03
  'second-me-review-2026',

  // Enterprise/B2B — customer support & call centers — 2026-09-03
  'best-local-llms-customer-support-call-centers-enterprise',
  // Enterprise/B2B — internal IT helpdesk & HR chatbots — 2026-09-03
  'enterprise-chatbot-deployment-helpdesk-hr-bots',
  // Enterprise/B2B — AI-powered HR software for enterprises — 2026-09-03
  'best-ai-hr-software-enterprise-2026',
  // Enterprise/B2B — vector database procurement/deployment — 2026-09-03
  'enterprise-rag-vector-database-deployment-guide-2026',
  // Enterprise/B2B — AI-powered marketing software for enterprises — 2026-09-03
  'best-ai-marketing-software-enterprise-2026',
  // AutoGPT classic-vs-Platform review — 2026-09-02
  'autogpt-local-review-2026',
  // Atomic Chat review — 2026-09-03
  'atomic-chat-review',
  // h2oGPT enterprise review — 2026-09-03
  'h2ogpt-review-2026',
  // LibreChat review — 2026-09-03
  'librechat-review-2026',
  // Hermes Agent (Nous Research) self-hosted agent review — 2026-09-03
  'hermes-agent-review-2026',
  // Open Interpreter Rust/Codex-fork review — 2026-09-03
  'open-interpreter-review',

  // Edge & Embedded AI — 2026-09-02, folded in from the removed /edge-ai cluster.
  // Published (not left in the default-closed state new power-local-llm slugs get)
  // because they were live and indexed under /local-llms/ during the brief interim
  // move there — this keeps them continuously indexed through the second move.
  'edge-ai-hardware-for-local-llms',
  'vla-models-robots-local-inference',
  'vlm-video-analytics-drones-edge',
  // Msty Go local-first AI task-automation agent review — 2026-09-03
  'msty-go-review-2026',
  // Enterprise/B2B — governance & risk — 2026-09-03
  'shadow-ai-controls-by-company-size',
  'agentic-ai-security-identity-access',
  'ai-generated-content-ip-risk',
  'us-state-ai-employment-laws-compliance',
  // Enclave AI review — 2026-09-03
  'enclave-ai-review-2026',

  // Aori, RAPR AI, Open Felix, BoBe (Local AI Agents & Tool Use), Osaurus,
  // Hanoki (Easiest Desktop Apps), Voxa, Jarvis Mac (Voice/Speech/Multimodal),
  // Locally AI, Arbiter (Mobile & Edge LLMs) reviews — 2026-09-04
  'aori-ai-personal-agent-review',
  'rapr-ai-review-2026',
  'open-felix-review-2026',
  'bobe-review-2026',
  'osaurus-ai-review-2026',
  'hanoki-review-2026',
  'voxa-review-2026',
  'jarvis-mac-review-2026',
  'locally-ai-review-2026',
  'arbiter-local-ai-chat-review-2026',
])

export const POWER_LLM_HUB_PUBLISHED = true

export function isPowerLLMArticlePublished(slug: string, _lang: string): boolean {
  return POWER_LLM_PUBLISHED_SLUGS.has(slug)
}

export function isPowerLLMHubPublished(_lang: string): boolean {
  return POWER_LLM_HUB_PUBLISHED
}
