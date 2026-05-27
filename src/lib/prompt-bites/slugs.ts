// Maps URL slugs to article keys for the Prompt Bites cluster.

export const PROMPT_BITES_SLUG_TO_KEY: Record<string, string> = {
  // Cluster A — Quantization & VRAM
  'how-much-vram-for-local-llm':          'howMuchVramForLocalLlm',
  'what-is-q4-k-m-quantization':          'whatIsQ4KMQuantization',
  'q4-k-m-vs-q8-0':                       'q4KMVsQ80',
  'best-ollama-models-rtx-3060-12gb':     'bestOllamaModelsRtx3060',
  'best-ollama-models-4gb-vram':          'bestOllamaModels4gbVram',
  'how-much-ram-for-7b-model':            'howMuchRamFor7bModel',
  'vram-for-70b-model':                   'vramFor70bModel',
  'best-local-llm-6gb-vram':              'bestLocalLlm6gbVram',

  // Cluster B — Ollama
  'ollama-latest-version':                'ollamaLatestVersion',
  'best-ollama-models-right-now':         'bestOllamaModelsRightNow',
  'best-ollama-models-cpu-only':          'bestOllamaModelsCpuOnly',
  'can-you-run-qwen3-on-ollama':          'canYouRunQwen3OnOllama',
  'which-ollama-models-support-vision':   'whichOllamaModelsVision',
  'ollama-128k-context-models':           'ollama128kContextModels',

  // Cluster C — Tool Comparisons
  'qwen-coder-vs-deepseek-coder':         'qwenCoderVsDeepseekCoder',
  'ollama-vs-lm-studio':                  'ollamaVsLmStudio',
  'jan-vs-lm-studio':                     'janVsLmStudio',
  'best-local-llm-apps-android':          'bestLocalLlmAppsAndroid',
  'best-frontend-for-ollama':             'bestFrontendForOllama',
  'cursor-pro-vs-continue-dev':           'cursorProVsContinueDev',
  'mlx-vs-ollama-vs-llamacpp':            'mlxVsOllamaVsLlamacpp',
  'convert-ollama-model-to-mlx':          'convertOllamaModelToMlx',
  'ollama-mlx-apple-silicon':             'ollamaMlxAppleSilicon',

  // Cluster D — Model Comparisons
  'qwen-14b-vs-llama-8b':                 'qwen14bVsLlama8b',
  'best-14b-models-coding':               'best14bModelsCoding',
  'best-mini-pc-for-local-llm':           'bestMiniPcForLocalLlm',
  'best-moe-models-local-coding':         'bestMoeModelsLocalCoding',

  // Cluster E — Hardware-Specific
  'best-local-llm-coding-12gb-vram':      'bestLocalLlmCoding12gbVram',
  'best-models-amd-5700x-3070ti':         'bestModelsAmd5700x3070ti',
  'radeon-6800m-local-llm':               'radeon6800mLocalLlm',
  'best-gpu-under-300-local-llm':         'bestGpuUnder300LocalLlm',
  'best-gpu-under-600-local-llm':         'bestGpuUnder600LocalLlm',
  'best-ssd-fast-model-loading':          'bestSsdFastModelLoading',
  'mac-mini-m4-local-llm':               'macMiniM4LocalLlm',
  'runpod-vs-vastai-pricing':             'runpodVsVastaiPricing',
  'cloud-gpu-cost-per-hour':              'cloudGpuCostPerHour',
  'best-egpu-ollama-macbook':             'bestEgpuOllamaMacbook',

  // Cluster F — Quick Answers
  'can-you-run-rag-on-2gb-ram':           'canYouRunRagOn2gbRam',
  'best-local-llm-16gb-ram-laptop':       'bestLocalLlm16gbRamLaptop',
  'best-budget-ai-laptop-under-1000':     'bestBudgetAiLaptopUnder1000',

  // Cluster G — Prompt Engineering & General
  'co-star-prompt-framework':             'coStarPromptFramework',
  'best-llm-right-now':                   'bestLlmRightNow',

  // Cluster H — Privacy & Compliance
  'is-qwen-gdpr-compliant':               'isQwenGdprCompliant',
  'is-deepseek-gdpr-safe':                'isDeepseekGdprSafe',
  'can-local-llm-help-gdpr':              'canLocalLlmHelpGdpr',
  'best-vpn-downloading-ai-models':       'bestVpnDownloadingAiModels',

  // New bites — zero-click gap coverage
  'best-quantization-6gb-vram':           'bestQuantization6gbVram',
  'mistral-small-24b-vs-qwen-14b-vs-llama-8b': 'mistralSmall24bVsQwen14bVsLlama8b',
  'strix-halo-ollama-vulkan':             'strixHaloOllamaVulkan',

  // China Sprint 2026-05-26
  'best-qwen-model-for-coding':                'bestQwenModelForCoding',
  'deepseek-v3-local-hardware-requirements':   'deepseekV3LocalHardwareRequirements',
  'chinese-prompting-vs-english-prompting':    'chinesePromptingVsEnglishPrompting',
  'sillytavern-chinese-roleplay-setup':        'sillyTavernChineseRoleplaySetup',

  // Commercial Sprint 2026-05-26
  'best-vpn-for-ai-development-china-2026':    'bestVpnForAiDevelopmentChina2026',
  'best-mini-pc-for-ollama-server-always-on':  'bestMiniPcForOllamaServerAlwaysOn',
  'best-egpu-setup-for-macbook-local-llm-2026': 'bestEgpuSetupForMacbookLocalLlm2026',
  'best-cloud-gpu-for-fine-tuning-under-1-per-hour': 'bestCloudGpuForFineTuningUnder1PerHour',
  'best-ai-text-to-speech-for-content-creators': 'bestAiTextToSpeechForContentCreators',
  'best-open-source-alternatives-to-chatgpt-plus': 'bestOpenSourceAlternativesToChatgptPlus',
  'cheapest-way-to-run-70b-model-locally':     'cheapestWayToRun70bModelLocally',

  // Japan Sprint 2026-05-27
  'best-local-llm-apps-japan-android':         'bestLocalLlmAppsJapanAndroid',
  'best-japanese-language-models-local':       'bestJapaneseLanguageModelsLocal',
  'run-local-llm-on-xperia-japan':             'runLocalLlmOnXperiaJapan',
  'best-mini-pc-local-llm-japan':              'bestMiniPcLocalLlmJapan',
  'best-gpu-local-llm-japan-price':            'bestGpuLocalLlmJapanPrice',
}
