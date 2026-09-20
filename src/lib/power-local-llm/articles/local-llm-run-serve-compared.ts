// Local Inference Engines, Runtimes & Gateways Compared: run and serve models on your own hardware
// Slug: local-llm-run-serve-compared
// Category comparison guide for the `run-serve` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// The per-attribute lists below were generated from those records (each value verified against the
// project's official README/site) and must also hold in each tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Overview & Reference',
    title: 'Local Inference Engines, Runtimes & Gateways Compared (2026): Run and Serve Models',
    seoTitle: 'Local Inference Engines & Runtimes Compared 2026',
    intro:
      'Running a model on your own hardware involves three different kinds of tool — inference engines that execute the model, runtimes and managers that download and run models for you, and routers and gateways that sit in front of them — and no single feature list compares them fairly. This guide compares 46 free and freemium tools, one kind at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 46 tools for running models locally: inference engines (llama.cpp, vLLM, SGLang, MLX and more), runtimes and managers (Ollama, LM Studio, Jan) and gateways. Licenses, GPU support, OpenAI-compatible APIs, from official documentation.',
    twitterDescription:
      'Local inference engines, runtimes and gateways compared by kind — licenses, NVIDIA/Apple/AMD/CPU support, OpenAI-compatible APIs, multi-GPU — from official documentation.',
    audience:
      'Developers, self-hosters and privacy-conscious users choosing how to run and serve language models locally, who want the differences laid out per kind of tool, not one blended list.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local inference engines compared',
    targetKeywords: [
      'local llm inference engine comparison',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'best local llm runtime',
      'openai compatible local server',
      'local llm gateway',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      '**The 46 local run-and-serve tools in the PromptQuorum directory split into three kinds that should be compared separately: inference engines (30 tools), runtimes and managers (13) and routers and gateways (4).** Within engines, 15 document NVIDIA GPU support, 17 document Apple Silicon support and 21 document an OpenAI-compatible API; among runtimes, 6 document an OpenAI-compatible API. Use the comparison table below, and read each tool\'s own review before you install it.',
    quickAnswerTop: {
      en: {
        question: 'Which local inference tool should I use?',
        answer:
          'It depends on the kind of tool, so compare within one kind at a time. Pick by the constraint that matters most — the hardware you have (NVIDIA, Apple Silicon, AMD or CPU), an OpenAI-compatible API, multi-GPU scaling, a desktop app or a headless server — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Inference engines: 30 tools compared on hardware support (NVIDIA, Apple Silicon, AMD, CPU), OpenAI-compatible API and multi-GPU or multi-node inference.',
          'Runtimes and managers: 13 tools compared on API, desktop app, built-in model library and headless mode.',
          'Routers and gateways: 4 tools compared on OpenAI-compatible endpoint, local models and fallback.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Inference Engines: What Differs', anchor: 'engine-differences' },
      { label: 'Runtimes and Managers: What Differs', anchor: 'runtime-differences' },
      { label: 'Routers and Gateways: What Differs', anchor: 'gateway-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Running models locally involves three kinds of tool — inference engines, runtimes and managers, and routers and gateways — so the 46 tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'An engine is the part that actually runs the model, a runtime or manager downloads and runs models for you, and a gateway routes requests between them. Comparing an engine with a gateway on GPU support makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '46 tools, three kinds: inference engines (30), runtimes and managers (13), routers and gateways (4). Ollama appears in two groups because it is both an engine and a runtime.',
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no". For some well-known tools the documentation quoted here is silent on a given feature, so their cells show a dash.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example OpenAI-compatible API or AMD GPU support) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (experimental, planned, or available only through a separate project), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. Tools listed only as API servers (h2oGPT, Tabby and OpenAI Edge TTS) are compared in their own categories. The comparison lists tools that run on your own hardware; it does not rank them, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a kind of tool below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Inference Engines: What Differs',
        items: [
          '**OpenAI-compatible API.** [candle-vllm](/power-local-llm/candle-vllm-review), [NVIDIA Dynamo](/power-local-llm/dynamo-review), [exo](/power-local-llm/exo-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [KServe](/power-local-llm/kserve-review), [llama.cpp](/power-local-llm/llama-cpp-explained), [LocalAI](/power-local-llm/localai-explained), [LoRAX](/power-local-llm/lorax-review), [Lucebox](/power-local-llm/lucebox-review), [MLC LLM](/power-local-llm/mlc-llm-explained), [mlx-serve](/power-local-llm/mlx-serve-review), [mlxcel](/power-local-llm/mlxcel-review), [OlliteRT](/power-local-llm/ollitert-review), [oMLX](/power-local-llm/omlx-review), [OpenLLM](/power-local-llm/openllm-review), [Rapid-MLX](/power-local-llm/rapid-mlx-review), [Shimmy](/power-local-llm/shimmy-review), [SwiftLM](/power-local-llm/swiftlm-review), [text-generation-webui](/power-local-llm/text-generation-webui-review), [vllm-mlx](/power-local-llm/vllm-mlx-review) and [vLLM](/power-local-llm/vllm-explained) document an OpenAI-compatible HTTP API, so apps written for the OpenAI API can point at them.',
          '**NVIDIA GPUs.** [candle-vllm](/power-local-llm/candle-vllm-review), [ExLlamaV2](/power-local-llm/exllamav2-explained), [KoboldCpp](/power-local-llm/koboldcpp-review), [llama.cpp](/power-local-llm/llama-cpp-explained), [LMDeploy](/power-local-llm/lmdeploy-review), [LocalAI](/power-local-llm/localai-explained), [LoRAX](/power-local-llm/lorax-review), [Lucebox](/power-local-llm/lucebox-review), [MLC LLM](/power-local-llm/mlc-llm-explained), [mlxcel](/power-local-llm/mlxcel-review), [SGLang](/power-local-llm/sglang-explained), [Shimmy](/power-local-llm/shimmy-review), [TensorRT-LLM](/power-local-llm/tensorrt-llm-explained), [text-generation-webui](/power-local-llm/text-generation-webui-review) and [vLLM](/power-local-llm/vllm-explained) document NVIDIA GPU (CUDA) support.',
          '**Apple Silicon.** [candle-vllm](/power-local-llm/candle-vllm-review), [claude-code-local](/power-local-llm/claude-code-local-review), [exo](/power-local-llm/exo-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [llama.cpp](/power-local-llm/llama-cpp-explained), [LocalAI](/power-local-llm/localai-explained), [MLC LLM](/power-local-llm/mlc-llm-explained), [MLX-LM](/power-local-llm/mlx-lm-explained), [mlx-serve](/power-local-llm/mlx-serve-review), [mlxcel](/power-local-llm/mlxcel-review), [oMLX](/power-local-llm/omlx-review), [Rapid-MLX](/power-local-llm/rapid-mlx-review), [Shimmy](/power-local-llm/shimmy-review), [SwiftLM](/power-local-llm/swiftlm-review), [text-generation-webui](/power-local-llm/text-generation-webui-review), [TurboFieldfare](/power-local-llm/turbo-fieldfare-review) and [vllm-mlx](/power-local-llm/vllm-mlx-review) document Apple Silicon, Metal or MLX support.',
          '**AMD GPUs.** [KoboldCpp](/power-local-llm/koboldcpp-review), [llama.cpp](/power-local-llm/llama-cpp-explained), [LocalAI](/power-local-llm/localai-explained), [Lucebox](/power-local-llm/lucebox-review), [MLC LLM](/power-local-llm/mlc-llm-explained), [SGLang](/power-local-llm/sglang-explained), [Shimmy](/power-local-llm/shimmy-review), [text-generation-webui](/power-local-llm/text-generation-webui-review) and [vLLM](/power-local-llm/vllm-explained) document AMD GPU support.',
          '**CPU inference.** [exo](/power-local-llm/exo-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [llama.cpp](/power-local-llm/llama-cpp-explained), [LocalAI](/power-local-llm/localai-explained), [OlliteRT](/power-local-llm/ollitert-review), [SGLang](/power-local-llm/sglang-explained), [text-generation-webui](/power-local-llm/text-generation-webui-review) and [vLLM](/power-local-llm/vllm-explained) document running inference on a CPU.',
          '**Multi-GPU and multi-node.** [candle-vllm](/power-local-llm/candle-vllm-review), [NVIDIA Dynamo](/power-local-llm/dynamo-review), [ExLlamaV2](/power-local-llm/exllamav2-explained), [exo](/power-local-llm/exo-review), [KServe](/power-local-llm/kserve-review), [LMDeploy](/power-local-llm/lmdeploy-review), [LocalAI](/power-local-llm/localai-explained), [LoRAX](/power-local-llm/lorax-review), [Lucebox](/power-local-llm/lucebox-review), [MLX-LM](/power-local-llm/mlx-lm-explained), [mlxcel](/power-local-llm/mlxcel-review), [oMLX](/power-local-llm/omlx-review), [SGLang](/power-local-llm/sglang-explained) and [vLLM](/power-local-llm/vllm-explained) document multi-GPU, tensor-parallel or multi-node inference.',
          '**License.** Most engines here are Apache-2.0 (19 tools) or MIT (9); KoboldCpp and text-generation-webui are AGPL-3.0. Copyleft licenses attach conditions to distributing modified versions — see [AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes and Managers: What Differs',
        items: [
          '**OpenAI-compatible API.** [Docker Model Runner](/power-local-llm/docker-model-runner-review), [Foundry Local](/power-local-llm/foundry-local-review), [GPUStack](/power-local-llm/gpustack-review), [Jan](/power-local-llm/jan-review), [Lemonade](/power-local-llm/lemonade-review) and [Osaurus](/power-local-llm/osaurus-ai-review) document an OpenAI-compatible API.',
          '**Desktop app.** [GPT4All](/power-local-llm/gpt4all-review), [Jan](/power-local-llm/jan-review), [LM Studio](/power-local-llm/lm-studio-review), [Osaurus](/power-local-llm/osaurus-ai-review) and [Ypipe](/power-local-llm/ypipe-review) document an installable desktop app.',
          '**Built-in model library.** [Foundry Local](/power-local-llm/foundry-local-review), [GPUStack](/power-local-llm/gpustack-review), [Jan](/power-local-llm/jan-review), [Lemonade](/power-local-llm/lemonade-review), [LM Studio](/power-local-llm/lm-studio-review) and [Ollama](/power-local-llm/ollama-review) document a built-in way to find and download models.',
          '**Headless or server mode.** [DreamServer](/power-local-llm/dreamserver-review), [GPUStack](/power-local-llm/gpustack-review), [Lemonade](/power-local-llm/lemonade-review) and [Osaurus](/power-local-llm/osaurus-ai-review) document running as a background service or server without the GUI.',
          '**License and price.** Four runtimes here are Apache-2.0 and four are MIT. LM Studio and Docker Model Runner are proprietary (LM Studio is free to use; Docker Model Runner is bundled with Docker Desktop), Msty is closed source with a free tier, and RunAnywhere and YPipe use their own or undocumented terms — check each review.',
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Routers and Gateways: What Differs',
        items: [
          '**OpenAI-compatible endpoint.** [AIClient2API](/power-local-llm/aiclient2api-review) and [litellm](/power-local-llm/litellm-review) document an OpenAI-compatible endpoint.',
          '**Routing to local models.** [litellm](/power-local-llm/litellm-review) documents local or self-hosted models (such as Ollama) among its supported providers.',
          '**Fallback and load balancing.** [AIClient2API](/power-local-llm/aiclient2api-review), [ClawRouter](/power-local-llm/clawrouter-review) and [litellm](/power-local-llm/litellm-review) document fallback, retry or load balancing across models or providers.',
          '**License.** Two of the four are MIT, one is GPL-3.0 and one is Apache-2.0.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not performance. It says nothing about tokens per second, memory use or latency — PromptQuorum has not measured them for these tools, and they depend heavily on your hardware and model.',
          'Dashes are gaps in the documentation we checked, not negative findings. Some tools may support a feature their README does not mention; this is most visible for a few widely used tools whose short READMEs state little (for example Ollama\'s engine features).',
          'Hardware support is what the documentation states, not a guarantee of a good experience on that hardware; read the tool\'s review for the real requirements.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the difference between an inference engine, a runtime and a gateway?',
            a: 'An inference engine executes the model on your hardware (for example llama.cpp or vLLM). A runtime or manager downloads models and runs them for you, often with a desktop app or a model library (for example Ollama or LM Studio). A router or gateway sits in front of one or more models or providers and forwards requests. They do different jobs, so they are compared separately.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Why is Ollama in two groups?',
            a: 'Ollama is both an inference engine and a runtime that manages models, so it is listed under both. Its README states few of the attributes compared here, so many of its cells show a dash.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — what the license families named above mean.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
          '[Local Voice & Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the same comparison for text-to-speech, speech-to-text and voice agents.',
          '[Local Image, Video & Vision Tools Compared](/power-local-llm/local-llm-images-video-compared) — the same comparison for image generation and vision models.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Inference Engines, Runtimes & Gateways Compared (2026): Run and Serve Models',
      description:
        'Compare 46 tools for running models locally: inference engines, runtimes and managers, and gateways, from official project documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and self-hosters choosing local inference tools' },
      about: [
        { '@type': 'Thing', name: 'Inference engines' },
        { '@type': 'Thing', name: 'Local LLM runtimes' },
        { '@type': 'Thing', name: 'LLM gateways' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Inference Engines, Runtimes & Gateways Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },
}
