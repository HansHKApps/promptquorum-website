// Maps URL slugs to article keys for the Power Local LLM cluster.
// All 35 slugs from the spec are registered here; only those with content in articles-barrel.ts
// will render real content — the rest fall through to the "Coming Soon" template.

export const POWER_LLM_SLUG_TO_KEY: Record<string, string> = {
  // Category 0 — Overview & Reference
  'local-llm-software-directory-2026':           'local-llm-software-directory-2026',

  // Category 1 — Easiest Desktop Apps
  'lm-studio-vs-jan-vs-gpt4all-2026':            'lm-studio-vs-jan-vs-gpt4all-2026',
  'easiest-local-ai-app-windows-mac-linux':      'easiest-local-ai-app-windows-mac-linux',
  'local-ai-app-non-technical-users':            'local-ai-app-non-technical-users',
  'best-local-ai-app-low-end-pc':                'best-local-ai-app-low-end-pc',
  'local-ai-app-with-built-in-rag':              'local-ai-app-with-built-in-rag',

  // Category 2 — RAG & Document Chat
  'anythingllm-vs-privategpt-vs-openwebui-rag':  'anythingllm-vs-privategpt-vs-openwebui-rag',
  'local-rag-on-your-pdfs-step-by-step':         'local-rag-on-your-pdfs-step-by-step',
  'best-embedding-models-local-rag-2026':        'best-embedding-models-local-rag-2026',
  'chat-with-1000-pdfs-locally':                 'chat-with-1000-pdfs-locally',
  'local-rag-for-private-business-data':         'local-rag-for-private-business-data',

  // Category 3 — Coding Assistants
  'replace-github-copilot-with-local-llm':       'replace-github-copilot-with-local-llm',
  'continue-dev-vs-cline-vs-aider-local':        'continue-dev-vs-cline-vs-aider-local',
  'best-local-coding-models-2026':               'best-local-coding-models-2026',
  'local-coding-llm-without-internet':           'local-coding-llm-without-internet',
  'local-llm-code-review-ci-cd':                 'local-llm-code-review-ci-cd',

  // Category 4 — Local AI Agents & Tool Use
  'local-ai-agents-with-mcp-2026':               'local-ai-agents-with-mcp-2026',
  'best-local-models-tool-calling-2026':         'best-local-models-tool-calling-2026',
  'autonomous-local-agents-actually-work':       'autonomous-local-agents-actually-work',
  'replace-zapier-with-local-ai-agents':         'replace-zapier-with-local-ai-agents',
  'local-ai-agents-business-workflows-eu-compliance': 'local-ai-agents-business-workflows-eu-compliance',

  // Category 5 — Creative & Roleplay
  'best-local-llm-creative-writing-2026':        'best-local-llm-creative-writing-2026',
  'sillytavern-vs-agnai-vs-risuai-roleplay':     'sillytavern-vs-agnai-vs-risuai-roleplay',
  'local-llm-prompts-for-fiction-writers':       'local-llm-prompts-for-fiction-writers',
  'uncensored-local-llm-creative-writing-ethics':'uncensored-local-llm-creative-writing-ethics',
  'local-llm-screenwriting-and-novel-drafting':  'local-llm-screenwriting-and-novel-drafting',

  // Category 6 — Mobile & Edge LLMs
  'best-local-llm-apps-iphone-2026':             'best-local-llm-apps-iphone-2026',
  'best-local-llm-apps-android-2026':            'best-local-llm-apps-android-2026',
  'run-ai-on-tablet-ipad-android':               'run-ai-on-tablet-ipad-android',
  'mobile-llm-models-phi4-gemma-smollm':         'mobile-llm-models-phi4-gemma-smollm',
  'voice-assistant-local-mobile-offline':        'voice-assistant-local-mobile-offline',

  // Category 7 — Productivity & Knowledge Tools
  'local-llm-with-obsidian-2026':                'local-llm-with-obsidian-2026',
  'local-llm-with-logseq-and-joplin':            'local-llm-with-logseq-and-joplin',
  'local-llm-personal-knowledge-base-2026':      'local-llm-personal-knowledge-base-2026',
  'local-llm-email-and-calendar-automation':     'local-llm-email-and-calendar-automation',
  'replace-grammarly-notion-ai-with-local':      'replace-grammarly-notion-ai-with-local',

  // Category 10 — Hardware Buying Guides
  'best-gpu-buying-guide-local-llm-2026':        'best-gpu-buying-guide-local-llm-2026',
  'best-mac-for-local-ai-2026':                  'best-mac-for-local-ai-2026',
  'cloud-gpu-rental-guide-2026':                 'cloud-gpu-rental-guide-2026',
  'local-ai-workstation-build-guide-2026':       'local-ai-workstation-build-guide-2026',
  'best-vpn-ai-privacy-local-llm-2026':          'best-vpn-ai-privacy-local-llm-2026',
  'best-nas-storage-local-ai-models-2026':       'best-nas-storage-local-ai-models-2026',
  'best-ai-coding-tools-comparison-2026':        'best-ai-coding-tools-comparison-2026',
  'best-monitors-ai-development-2026':           'best-monitors-ai-development-2026',
  'best-laptops-local-llm-2026':                 'best-laptops-local-llm-2026',
  'best-ai-courses-certifications-2026':         'best-ai-courses-certifications-2026',
  'best-affiliate-tools-ai-developers-2026':     'best-affiliate-tools-ai-developers-2026',
  'apple-mlx-vs-nvidia-cuda-local-llm-2026':     'apple-mlx-vs-nvidia-cuda-local-llm-2026',

  // Commercial Sprint 2026-05-26 — 6 new revenue pages
  'qwen-local-deployment-complete-guide-2026':   'qwen-local-deployment-complete-guide-2026',
  'deepseek-vs-qwen-coding-local-2026':          'deepseek-vs-qwen-coding-local-2026',
  'best-workstation-build-local-ai-2026':        'best-workstation-build-local-ai-2026',
  'best-local-llm-ide-plugins-2026':             'best-local-llm-ide-plugins-2026',
  'best-rag-tools-for-business-documents-2026':  'best-rag-tools-for-business-documents-2026',
  'wechat-bot-local-llm-personal-assistant-2026': 'wechat-bot-local-llm-personal-assistant-2026',

  // Category 9 — Voice, Speech & Multimodal
  'local-whisper-stt-comparison-2026':           'local-whisper-stt-comparison-2026',
  'local-vision-models-llava-ollama-2026':        'local-vision-models-llava-ollama-2026',
  'local-tts-voice-cloning-piper-coqui-xtts':    'local-tts-voice-cloning-piper-coqui-xtts',
  'build-local-voice-assistant-2026':             'build-local-voice-assistant-2026',
  'local-multimodal-pipeline-voice-vision-text':  'local-multimodal-pipeline-voice-vision-text',
}
