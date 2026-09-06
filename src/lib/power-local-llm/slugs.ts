// Maps URL slugs to article keys for the Power Local LLM cluster.
// All 35 slugs from the spec are registered here; only those with content in articles-barrel.ts
// will render real content — the rest fall through to the "Coming Soon" template.

export const POWER_LLM_SLUG_TO_KEY: Record<string, string> = {
  // Category 0 — Overview & Reference
  'local-llm-software-directory':                'local-llm-software-directory-2026',
  // AI & open-source license taxonomy — evergreen reference — 2026-09-03
  'ai-tool-licenses-explained':                  'ai-tool-licenses-explained',

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
  // Bodega One Code review — 2026-09-03
  'bodega-one-code-review':                 'bodega-one-code-review-2026',

  // Category 4 — Local AI Agents & Tool Use
  'local-ai-agents-with-mcp-2026':               'local-ai-agents-with-mcp-2026',
  'best-local-models-tool-calling-2026':         'best-local-models-tool-calling-2026',
  'autonomous-local-agents-actually-work':       'autonomous-local-agents-actually-work',
  'autogpt-local-review':                   'autogpt-local-review-2026',
  'open-interpreter-review':                     'open-interpreter-review',
  'openclaw-review':                             'openclaw-review',
  'replace-zapier-with-local-ai-agents':         'replace-zapier-with-local-ai-agents',
  'local-ai-agents-business-workflows-eu-compliance': 'local-ai-agents-business-workflows-eu-compliance',
  'babyagi-review-autonomous-agent':             'babyagi-review-autonomous-agent',
  'hermes-agent-review':                    'hermes-agent-review-2026',
  'msty-go-review':                         'msty-go-review-2026',
  'msty-review':                             'msty-review',
  'enchanted-review':                        'enchanted-review',

  // Category 5 — Creative & Roleplay
  'best-local-llm-creative-writing-2026':        'best-local-llm-creative-writing-2026',
  'sillytavern-vs-agnai-vs-risuai-roleplay':     'sillytavern-vs-agnai-vs-risuai-roleplay',
  // Clarifies MetaGPT (multi-agent dev framework) vs Agnai/RisuAI (roleplay chat) — 2026-09-05
  'metagpt-agnai-risuai-explained':              'metagpt-agnai-risuai-explained',
  'local-llm-prompts-for-fiction-writers':       'local-llm-prompts-for-fiction-writers',
  'uncensored-local-llm-creative-writing-ethics':'uncensored-local-llm-creative-writing-ethics',
  'local-llm-screenwriting-and-novel-drafting':  'local-llm-screenwriting-and-novel-drafting',
  'backyard-ai-review-local-roleplay':      'backyard-ai-review-local-roleplay-2026',

  // Category 6 — Mobile & Edge LLMs
  'best-local-llm-apps-iphone-2026':             'best-local-llm-apps-iphone-2026',
  'best-local-llm-apps-android-2026':            'best-local-llm-apps-android-2026',
  'loci-ai-review-offline-local-ai':             'loci-ai-review-offline-local-ai',
  'run-ai-on-tablet-ipad-android':               'run-ai-on-tablet-ipad-android',
  'mobile-llm-models-phi4-gemma-smollm':         'mobile-llm-models-phi4-gemma-smollm',
  'voice-assistant-local-mobile-offline':        'voice-assistant-local-mobile-offline',

  // Category 7 — Productivity & Knowledge Tools
  'local-llm-with-obsidian-2026':                'local-llm-with-obsidian-2026',
  'local-llm-with-logseq-and-joplin':            'local-llm-with-logseq-and-joplin',
  // AI plugins for Obsidian and Logseq — evergreen feature comparison — 2026-09-05
  'obsidian-logseq-ai-plugins':                  'obsidian-logseq-ai-plugins',
  'local-llm-personal-knowledge-base-2026':      'local-llm-personal-knowledge-base-2026',
  'local-llm-email-and-calendar-automation':     'local-llm-email-and-calendar-automation',
  'replace-grammarly-notion-ai-with-local':      'replace-grammarly-notion-ai-with-local',

  // Enterprise/B2B infrastructure — 2026-09-02
  'enterprise-llm-inference-servers-vllm-tgi-nim': 'enterprise-llm-inference-servers-vllm-tgi-nim-2026',

  // Category 10 — Hardware Buying Guides
  'best-gpu-buying-guide-local-llm-2026':        'best-gpu-buying-guide-local-llm-2026',
  'rtx-3090-local-llm-buy-or-rent':              'rtx-3090-local-llm-buy-or-rent',
  'best-mac-for-local-ai-2026':                  'best-mac-for-local-ai-2026',
  'asus-mini-pc-local-ai':                  'asus-mini-pc-local-ai-2026',
  'local-llm-electricity-cost-balcony-solar': 'local-llm-electricity-cost-balcony-solar-2026',
  'local-ai-workstation-build-guide-2026':       'local-ai-workstation-build-guide-2026',
  'best-vpn-ai-privacy-local-llm-2026':          'best-vpn-ai-privacy-local-llm-2026',
  'best-nas-storage-local-ai-models-2026':       'best-nas-storage-local-ai-models-2026',
  'best-ai-coding-tools-comparison-2026':        'best-ai-coding-tools-comparison-2026',
  'best-monitors-ai-development-2026':           'best-monitors-ai-development-2026',
  'best-laptops-local-llm-2026':                 'best-laptops-local-llm-2026',
  'best-ai-courses-certifications-2026':         'best-ai-courses-certifications-2026',
  'best-affiliate-tools-ai-developers-2026':     'best-affiliate-tools-ai-developers-2026',
  'apple-mlx-vs-nvidia-cuda-local-llm-2026':     'apple-mlx-vs-nvidia-cuda-local-llm-2026',
  'cursor-vs-windsurf-vs-copilot-cline':    'cursor-vs-windsurf-vs-copilot-cline-2026',
  'pinecone-vs-weaviate-vs-qdrant-vs-chroma': 'pinecone-vs-weaviate-vs-qdrant-vs-chroma-2026',

  // Commercial Sprint 2026-05-26 — 6 new revenue pages
  'qwen-local-deployment-complete-guide-2026':   'qwen-local-deployment-complete-guide-2026',
  // China Sprint 2026-05-26
  'deepseek-vs-qwen-local-comparison-2026':      'deepseek-vs-qwen-local-comparison-2026',
  'deepseek-vs-qwen-coding-local-2026':          'deepseek-vs-qwen-coding-local-2026',
  'best-workstation-build-local-ai-2026':        'best-workstation-build-local-ai-2026',
  'best-local-llm-ide-plugins-2026':             'best-local-llm-ide-plugins-2026',
  'best-rag-tools-for-business-documents-2026':  'best-rag-tools-for-business-documents-2026',
  'enterprise-rag-vector-database-deployment-guide': 'enterprise-rag-vector-database-deployment-guide-2026',
  'wechat-bot-local-llm-personal-assistant-2026': 'wechat-bot-local-llm-personal-assistant-2026',
  'local-ai-behind-firewall-offline-2026':        'local-ai-behind-firewall-offline-2026',
  'wechat-local-llm-integration-2026':            'wechat-local-llm-integration-2026',

  // Category 9 — Voice, Speech & Multimodal
  'elevenlabs-vs-local-tts-piper-xtts':          'elevenlabs-vs-local-tts-piper-xtts',
  'voice-ai-writers-cloud-vs-local': 'voice-ai-writers-cloud-vs-local',
  'local-whisper-stt-comparison-2026':           'local-whisper-stt-comparison-2026',
  'local-vision-models-llava-ollama-2026':        'local-vision-models-llava-ollama-2026',
  'local-tts-voice-cloning-piper-coqui-xtts':    'local-tts-voice-cloning-piper-coqui-xtts',
  'build-local-voice-assistant-2026':             'build-local-voice-assistant-2026',
  'local-multimodal-pipeline-voice-vision-text':  'local-multimodal-pipeline-voice-vision-text',
  // DeepSeek Series 2026-06-19
  'deepseek-r1-vs-distills-explained-2026':       'deepseek-r1-vs-distills-explained-2026',
  'deepseek-offline-china-self-hosted-2026':      'deepseek-offline-china-self-hosted-2026',

  // Category 11 — Image & Video Generation
  'local-ai-video-generation-vs-cloud':           'local-ai-video-generation-vs-cloud',
  'local-ai-image-generation-vs-cloud':           'local-ai-image-generation-vs-cloud',
  'animatediff-video-generation-guide':      'animatediff-video-generation-guide-2026',

  // Hosting Guides 2026-08-30
  'best-web-hosting':                        'best-web-hosting-2026',
  // AI cloud provider comparison — 2026-09-05
  'digitalocean-vs-aws-cloud-for-ai-companies': 'digitalocean-vs-aws-cloud-for-ai-companies',

  // Flowise shutdown coverage 2026-09-02
  'flowise-ai-visual-workflow-builder-review':    'flowise-ai-visual-workflow-builder-review',

  // Haystack (deepset) RAG framework review 2026-09-02
  'haystack-deepset-rag-framework-review':        'haystack-deepset-rag-framework-review',

  // Dify LLMOps platform review 2026-09-02
  'dify-ai-workflow-builder-review':              'dify-ai-workflow-builder-review',
  // Langflow review — 2026-09-02
  'langflow-visual-ai-orchestration-review':      'langflow-visual-ai-orchestration-review',
  // LangChain review — agent frameworks series, article 1 of 14 — 2026-09-05
  'langchain-review':                             'langchain-review',
  // AutoGen review — agent frameworks series, article 2 of 14 — 2026-09-05
  'autogen-review':                               'autogen-review',
  // CrewAI review — agent frameworks series, article 3 of 14 — 2026-09-05
  'crewai-review':                                'crewai-review',
  // LangGraph review — agent frameworks series, article 5 of 14 — 2026-09-05
  'langgraph-review':                             'langgraph-review',
  // LlamaIndex deep-dive 2026-09-02
  'llamaindex-rag-framework-review':              'llamaindex-rag-framework-review',
  // txtai embedded vector database review — 2026-09-02
  'txtai-embedded-vector-database-review':        'txtai-embedded-vector-database-review',
  // Quivr maintenance-status review 2026-09-02
  'quivr-self-hosted-knowledge-assistant-review': 'quivr-self-hosted-knowledge-assistant-review',
  // RAGFlow deep document understanding review 2026-09-02
  'ragflow-document-understanding-rag-review':    'ragflow-document-understanding-rag-review',
  // Khoj review 2026-09-02
  'khoj-ai-second-brain-review':                  'khoj-ai-second-brain-review',
  // Second Me review 2026-09-03
  'second-me-review':                        'second-me-review-2026',
  // Real-ESRGAN review 2026-09-02
  'real-esrgan-ai-image-upscaler-review':         'real-esrgan-ai-image-upscaler-review',
  // LibreChat review 2026-09-03
  'librechat-review':                        'librechat-review-2026',

  // Enterprise/B2B — customer support & call centers — 2026-09-03
  'best-local-llms-customer-support-call-centers-enterprise': 'best-local-llms-customer-support-call-centers-enterprise',
  // Enterprise/B2B — internal IT helpdesk & HR chatbots — 2026-09-03
  'enterprise-chatbot-deployment-helpdesk-hr-bots': 'enterprise-chatbot-deployment-helpdesk-hr-bots',
  // Enterprise/B2B — AI-powered HR software for enterprises — 2026-09-03
  'best-ai-hr-software-enterprise':          'best-ai-hr-software-enterprise-2026',
  // Enterprise/B2B — AI-powered marketing software for enterprises — 2026-09-03
  'best-ai-marketing-software-enterprise':   'best-ai-marketing-software-enterprise-2026',
  // Enterprise/B2B — governance & risk — 2026-09-03
  'shadow-ai-controls-by-company-size':           'shadow-ai-controls-by-company-size',
  'agentic-ai-security-identity-access':          'agentic-ai-security-identity-access',
  'ai-generated-content-ip-risk':                 'ai-generated-content-ip-risk',
  'us-state-ai-employment-laws-compliance':       'us-state-ai-employment-laws-compliance',
  // Atomic Chat review — 2026-09-03
  'atomic-chat-review':                           'atomic-chat-review',
  // h2oGPT enterprise review — 2026-09-03
  'h2ogpt-review':                           'h2ogpt-review-2026',
  // Enclave AI review — 2026-09-03
  'enclave-ai-review':                       'enclave-ai-review-2026',

  // Edge & Embedded AI — 2026-09-02, folded in from the removed /edge-ai cluster
  'edge-ai-hardware-for-local-llms':              'edge-ai-hardware-for-local-llms',
  'vla-models-robots-local-inference':            'vla-models-robots-local-inference',
  'vlm-video-analytics-drones-edge':              'vlm-video-analytics-drones-edge',

  // Aori review — 2026-09-04
  'aori-ai-personal-agent-review':                'aori-ai-personal-agent-review',
  // RAPR AI review — 2026-09-04
  'rapr-ai-review':                          'rapr-ai-review',
  // Open Felix review — 2026-09-04
  'open-felix-review':                       'open-felix-review',
  // BoBe review — 2026-09-04
  'bobe-review':                             'bobe-review',
  // Osaurus review — 2026-09-04
  'osaurus-ai-review':                       'osaurus-ai-review',
  // Hanoki review — 2026-09-04
  'hanoki-review':                           'hanoki-review',
  // Voxa review — 2026-09-04
  'voxa-review':                             'voxa-review',
  // Jarvis (Mac) review — 2026-09-04
  'jarvis-mac-review':                       'jarvis-mac-review',
  // Locally AI review — 2026-09-04
  'locally-ai-review':                       'locally-ai-review',
  // Arbiter review — 2026-09-04
  'arbiter-local-ai-chat-review':            'arbiter-local-ai-chat-review',
  // Chatty-mini review — 2026-09-04
  'chatty-mini-review':                      'chatty-mini-review',
  // Continue.dev, Cline, PearAI reviews — 2026-09-05
  'continue-dev-review':                     'continue-dev-review',
  'cline-review':                            'cline-review',
  'pearai-review':                           'pearai-review',
  'whisper-cpp-review':                      'whisper-cpp-review',
  'faster-whisper-review':                   'faster-whisper-review',
  'piper-tts-review':                        'piper-tts-review',
  'coqui-tts-review':                        'coqui-tts-review',
  'xtts-v2-review':                          'xtts-v2-review',
  'bark-tts-review':                         'bark-tts-review',
  // PocketPal AI review — 2026-09-05
  'pocketpal-ai-review':                     'pocketpal-ai-review',
  // Private LLM review — 2026-09-05
  'private-llm-review':                      'private-llm-review',
  // Stable Diffusion review — 2026-09-05
  'stable-diffusion-review':                 'stable-diffusion-review',

  // llama.cpp explainer (Runtimes & Inference Engines) — 2026-09-05
  'llama-cpp-explained':                     'llama-cpp-explained',
  // vLLM explainer (Runtimes & Inference Engines) — 2026-09-06
  'vllm-explained':                          'vllm-explained',
  'koboldcpp-review':                        'koboldcpp-review',
  // LocalAI explainer (Runtimes & Inference Engines) — 2026-09-06
  'localai-explained':                       'localai-explained',

  // Runtimes & Engines — 2026-09-05
  // Windsurf, Sourcegraph Cody, Tabby reviews — 2026-09-05
  'windsurf-review':                         'windsurf-review',
  'sourcegraph-cody-review':                 'sourcegraph-cody-review',
  'tabby-review':                            'tabby-review',
  // CodeGPT, OpenHands, Cursor (local mode) reviews — 2026-09-05
  'codegpt-review':                          'codegpt-review',
  'openhands-review':                        'openhands-review',
  'cursor-local-mode-review':                'cursor-local-mode-review',
  // Twinny, Aider, shell-gpt reviews — 2026-09-06
  'twinny-review':                           'twinny-review',
  'aider-review':                            'aider-review',
  'shell-gpt-review':                        'shell-gpt-review',
  // aichat, tgpt, Blackbox AI CLI, PrivateGPT reviews — 2026-09-06
  'aichat-review':                           'aichat-review',
  'tgpt-review':                             'tgpt-review',
  'blackbox-ai-cli-review':                  'blackbox-ai-cli-review',
  'privategpt-review':                       'privategpt-review',
}
