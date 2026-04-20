// Maps URL slugs to article keys used in content.ts
// slug === key for all local-llms articles (no legacy redirects needed)
export const LLM_SLUG_TO_KEY: Record<string, string> = {

  // Getting Started
  'what-are-local-llms':                  'what-are-local-llms',
  'local-llms-vs-cloud-apis':             'local-llms-vs-cloud-apis',
  'how-to-install-ollama':                'how-to-install-ollama',
  'how-to-install-lm-studio':             'how-to-install-lm-studio',
  'run-first-local-llm':                  'run-first-local-llm',
  'best-beginner-local-llm-models':       'best-beginner-local-llm-models',
  'local-llm-one-click-installers':       'local-llm-one-click-installers',
  'troubleshooting-local-llm-setup':      'troubleshooting-local-llm-setup',
  'local-llm-on-laptop':                  'local-llm-on-laptop',
  'local-llm-security-privacy-checklist': 'local-llm-security-privacy-checklist',
  'local-llm-limitations':               'local-llm-limitations',

  // Best Local LLM Models 2026
  'best-local-llms-2026':                 'best-local-llms-2026',
  'qwen-vs-llama-vs-mistral':             'qwen-vs-llama-vs-mistral',
  'best-local-llms-for-coding':           'best-local-llms-for-coding',
  'best-local-llms-for-creative-writing': 'best-local-llms-for-creative-writing',
  'small-local-llm-models':              'small-local-llm-models',
  '70b-models-consumer-hardware':         '70b-models-consumer-hardware',
  'llm-quantization-explained':           'llm-quantization-explained',
  'multilingual-local-llms':              'multilingual-local-llms',
  'long-context-local-llms':              'long-context-local-llms',
  'top-open-source-models-ollama':        'top-open-source-models-ollama',
  'local-llm-model-updates-2026':         'local-llm-model-updates-2026',

  // Tools & Interfaces
  'ollama-vs-lm-studio':                  'ollama-vs-lm-studio',
  'best-local-llm-frontends':             'best-local-llm-frontends',
  'text-generation-webui-vs-vllm-vs-llamacpp': 'text-generation-webui-vs-vllm-vs-llamacpp',
  'local-llm-openai-compatible-api':      'local-llm-openai-compatible-api',
  'lm-studio-advanced-features':          'lm-studio-advanced-features',
  'ollama-command-guide':                 'ollama-command-guide',
  'best-local-rag-tools':                 'best-local-rag-tools',
  'desktop-vs-webui-local-llm':           'desktop-vs-webui-local-llm',
  'local-llms-with-vscode-cursor':        'local-llms-with-vscode-cursor',
  'headless-local-llms':                  'headless-local-llms',

  // Hardware & Performance
  'local-llm-hardware-guide-2026':        'local-llm-hardware-guide-2026',
  'vram-calculator-local-llm':            'vram-calculator-local-llm',
  'gpu-vs-cpu-vs-apple-silicon':          'gpu-vs-cpu-vs-apple-silicon',
  'double-local-llm-speed':              'double-local-llm-speed',
  'best-gpus-for-local-llms':             'best-gpus-for-local-llms',
  'run-70b-models-24gb-vram':             'run-70b-models-24gb-vram',
  'local-llm-power-consumption':          'local-llm-power-consumption',
  'multi-gpu-local-llms':                 'multi-gpu-local-llms',
  'laptop-vs-desktop-local-llm':          'laptop-vs-desktop-local-llm',
  'mobile-local-llms':                    'mobile-local-llms',

  // Advanced Techniques & Applications
  'local-rag-2026':                       'local-rag-2026',
  'fine-tuning-local-llms-lora':          'fine-tuning-local-llms-lora',
  'local-ai-agents-langgraph-ollama':     'local-ai-agents-langgraph-ollama',
  'prompt-engineering-for-local-models':  'prompt-engineering-for-local-models',
  'private-local-ai-for-business':        'private-local-ai-for-business',
  'local-llms-for-coding-workflows':      'local-llms-for-coding-workflows',
  'multimodal-local-llms':               'multimodal-local-llms',
  'local-vs-cloud-agents':               'local-vs-cloud-agents',
  'create-custom-local-models':           'create-custom-local-models',
  'future-of-local-llms':                'future-of-local-llms',

  // Enterprise
  'why-enterprises-use-local-llms':       'why-enterprises-use-local-llms',
  'on-prem-air-gapped-local-llm':         'on-prem-air-gapped-local-llm',
  'enterprise-compliance-local-llms':     'enterprise-compliance-local-llms',
  'scaling-local-llms-enterprise':        'scaling-local-llms-enterprise',
  'corporate-rag-local-llms':             'corporate-rag-local-llms',

  // GPU Buying Guides (NEW THEME)
  'best-budget-gpus-local-llm':           'best-budget-gpus-local-llm',
  'rtx-5090-vs-rtx-4090-local-llm':       'rtx-5090-vs-rtx-4090-local-llm',
  'used-gpus-for-local-llms':             'used-gpus-for-local-llms',
  'how-much-vram-local-llm':              'how-much-vram-local-llm',
  'best-amd-gpus-local-llm':              'best-amd-gpus-local-llm',

  // Hardware Setups (NEW THEME)
  'local-llm-pc-build-1000':              'local-llm-pc-build-1000',
  'local-llm-pc-build-2000':              'local-llm-pc-build-2000',
  'local-llm-workstation-build':          'local-llm-workstation-build',
  'best-mini-pcs-local-llm':              'best-mini-pcs-local-llm',
  'best-laptops-local-llm':               'best-laptops-local-llm',

  // Tools & Interfaces (EXPANDED)
  'best-local-llm-stack-use-case':        'best-local-llm-stack-use-case',
  'lm-studio-vs-jan-ai':                  'lm-studio-vs-jan-ai',
  'open-webui-vs-sillytavern':            'open-webui-vs-sillytavern',
  'llamacpp-vs-ollama-vs-vllm':           'llamacpp-vs-ollama-vs-vllm',
  'local-llm-developer-stack':            'local-llm-developer-stack',

  // Models by Use Case (EXPANDED from Best Models)
  'best-local-llms-code-review':          'best-local-llms-code-review',
  'best-local-llms-business-writing':     'best-local-llms-business-writing',
  'best-7b-models-consumer-hardware':     'best-7b-models-consumer-hardware',
  'fastest-local-llms-low-end-pcs':       'fastest-local-llms-low-end-pcs',
  'quantization-levels-comparison':       'quantization-levels-comparison',

  // Privacy & Business (NEW THEME)
  'private-local-llm-sensitive-data':     'private-local-llm-sensitive-data',
  'local-llm-setup-for-teams':            'local-llm-setup-for-teams',
  'best-nas-storage-local-llm':           'best-nas-storage-local-llm',
  'vpn-for-local-llm-users':              'vpn-for-local-llm-users',
  'secure-offline-local-llm-workflow':    'secure-offline-local-llm-workflow',

  // Cost & Comparisons (NEW THEME)
  'local-llms-vs-chatgpt-plus':           'local-llms-vs-chatgpt-plus',
  'local-llms-vs-claude-pro':             'local-llms-vs-claude-pro',
  'local-llm-vs-cloud-gpu-cost':          'local-llm-vs-cloud-gpu-cost',
  'mac-vs-windows-vs-linux-local-llm':    'mac-vs-windows-vs-linux-local-llm',
  'gpu-vs-ai-subscription-roi':           'gpu-vs-ai-subscription-roi',
}
