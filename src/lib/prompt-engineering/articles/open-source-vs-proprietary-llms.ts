// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: open-source-vs-proprietary-llms
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Open Source vs Proprietary LLMs',
      intro: 'Open-weights models like LLaMA 3.1 and Mistral offer control and cost savings; proprietary models like GPT-4o and Claude 4.6 Sonnet deliver frontier performance. Both categories converge in capability but diverge in access, customization, and compliance requirements.',
      metaDescription: 'Open source vs proprietary LLMs: cost, control, privacy, fine-tuning, and performance tradeoffs in 2026. Choose the right model for your use case.',
      publishDate: '2026-03-24',
      seoTitle: 'Open Source vs Proprietary LLMs 2026: Cost & Performance',
      dateModified: '2026-04-01',
      readTime: '14 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Open Source LLMs',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        'inLanguage': 'en',
        headline: 'Open Source vs Proprietary LLMs',
        description: 'Open-weights models like LLaMA 3.1 and Mistral offer control and cost savings; proprietary models like GPT-4o and Claude 4.6 Sonnet deliver frontier performance.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-01',
        keywords: ['open source LLMs', 'LLaMA', 'Mistral', 'proprietary models', 'GPT-4o', 'Claude', 'fine-tuning', 'cost analysis', 'open-weights', 'local inference'],
        teaches: [
          'The difference between open weights and open source licensing for LLMs',
          'Cost and performance tradeoffs between open-weights and proprietary models',
          'When to choose local inference vs API access',
        ],
        about: [
          { '@type': 'Thing', name: 'Open-source LLMs' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large' },
          { '@type': 'Thing', name: 'EU AI Act compliance' },
          { '@type': 'Thing', name: 'LLM fine-tuning' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        mentions: [
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
          { '@type': 'Thing', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large 2' },
          { '@type': 'Thing', name: 'Qwen 2.5' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/open-source-vs-proprietary-llms', width: 1200, height: 630 },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Open-Weights vs Proprietary LLMs — Full Comparison',
        description: '10-dimension comparison of open-weights and proprietary LLMs covering cost, performance, privacy, fine-tuning, context window, sovereignty, speed, support, updates, and vendor lock-in.',
        numberOfItems: 10,
        url: 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Cost model',
            description: 'Open-weights: $0.50–2.00/hr infrastructure; free once deployed, no per-token billing. Proprietary: API billing $0.15–5.00 per 1M input tokens; $0.30–15.00 per 1M output tokens.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Performance ceiling',
            description: 'Open-weights (LLaMA 70B, Mistral Large): MMLU 80–82%, competitive on specific tasks. Proprietary (GPT-4o, Claude, Gemini): MMLU 88–90%, higher ceiling on reasoning and multimodal.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Context window',
            description: 'Open-weights: LLaMA 3.1 131K, Mistral Large 123K, Qwen 128K — sufficient for long documents. Proprietary: GPT-4o 128K, Claude 200K, Gemini 2.5 Pro 2M tokens.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Privacy',
            description: 'Open-weights: complete data sovereignty, no data leaves your infrastructure, zero vendor logging. Proprietary: data transits vendor servers; contractual deletion promised but brief exposure occurs.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Fine-tuning',
            description: 'Open-weights: full fine-tuning supported (LoRA, QLoRA, full training); you own resulting weights. Proprietary: limited (OpenAI mini models only) or unavailable (Anthropic Claude).',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Data sovereignty',
            description: 'Open-weights: on-premises deployment achieves full sovereignty; EU AI Act, HIPAA, SOX compliant. Proprietary: API-dependent; data residency unclear; harder to prove compliance.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Inference speed',
            description: 'Open-weights: hardware-dependent — A100 20–30 tokens/sec (70B), RTX 4090 10–15 tokens/sec. Proprietary: optimized servers 30–50+ tokens/sec; vendor manages optimization.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'Support',
            description: 'Open-weights: community-driven documentation; no vendor SLA; self-supported. Proprietary: vendor support, API SLAs, incident response, and uptime guarantees included.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'Update cadence',
            description: 'Open-weights: offline; you control adoption of new model versions; no forced updates. Proprietary: server-side; vendor updates models; adapt or use versioned API endpoints.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'Vendor lock-in',
            description: 'Open-weights: zero lock-in; deploy anywhere; own your compute. Proprietary: moderate to high lock-in; model behavior, APIs, and pricing under vendor control.',
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Choose Between Open-Source and Proprietary LLMs',
        'description': 'A decision framework for selecting open-weights or proprietary models based on cost, privacy, customization, and performance requirements.',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Assess data privacy requirements', 'text': 'If data must remain on-premises (healthcare, finance, legal, EU AI Act high-risk deployments), open-weights is mandatory. Proprietary models route data through external APIs, which may violate HIPAA, GDPR, or attorney-client privilege requirements.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Calculate daily token volume', 'text': 'Calculate API cost for 1M, 10M, and 100M daily tokens. Below ~5M tokens/day, proprietary APIs are usually cheaper due to zero infrastructure cost. Above 10M tokens/day, open-weights self-hosting becomes cost-effective; above 100M tokens/day, open-weights wins decisively.' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Evaluate fine-tuning needs', 'text': 'If you need to specialize the model on your domain, terminology, or task distribution, open-weights is required. Open-weights support LoRA, QLoRA, and full fine-tuning — you own the resulting weights. Proprietary APIs forbid or severely restrict customization.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Check infrastructure readiness', 'text': 'Open-weights requires VRAM, GPUs, and DevOps skill to self-host (LLaMA 70B: ~40GB VRAM on A100). Proprietary requires API keys and network connectivity but zero infrastructure. If you lack GPU resources or on-call coverage, proprietary is the simpler path.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Benchmark on your actual task', 'text': 'Use PromptQuorum to dispatch your prompt to GPT-4o, Claude, and a local Ollama instance simultaneously. Compare output quality, latency, and cost side-by-side. The model that wins on your specific task and data is the right choice — not the benchmark leader.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Is Llama 3.1 truly open source or just open-weights?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Just open-weights. LLaMA 3.1 releases model weights under Llama Community License 2.1, which is not OSI-compliant open source. The license permits commercial use but restricts naming derivatives "LLaMA," requires attribution, and includes non-compete clauses. True open-source licenses (Apache 2.0, MIT, GPL) have none of these restrictions.' } },
          { '@type': 'Question', 'name': 'Which is cheaper in 2026 — self-hosting Llama or using GPT-4o API?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Below 5M tokens/day, GPT-4o API is cheaper — no infrastructure cost. At 5–10M tokens/day, costs equalize. Above 10M tokens/day, self-hosting LLaMA 3.1 wins. At 100M tokens/day, self-hosting is 10–20× cheaper. Hidden factors: GPU amortization, electricity, DevOps labor, and downtime risk often tip marginal cases toward API.' } },
          { '@type': 'Question', 'name': 'Does the EU AI Act affect open-source LLMs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, depending on deployment. High-risk AI systems (hiring, credit, legal decisions) require risk documentation, bias testing, and audit trails. Open-weights on-premises make compliance easier — you control data and logs. Proprietary APIs force reliance on vendor attestations. General-purpose models with >10^25 FLOP training compute face additional transparency obligations.' } },
          { '@type': 'Question', 'name': 'Which open-source LLM is closest to GPT-4o in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B and Mistral Large 2 are closest. MMLU scores: GPT-4o 88.7%, LLaMA 3.1 70B 80.5%, Mistral Large 81.2%. On classification, summarization, and extraction, open-weights now matches proprietary. The reasoning gap narrows ~2–3 points per year.' } },
          { '@type': 'Question', 'name': 'Can I fine-tune GPT-4o?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. OpenAI fine-tuning is available only for GPT-4o mini, GPT-4, and gpt-3.5-turbo. Anthropic offers no fine-tuning for Claude. Google offers Gemini fine-tuning. Open-weights (LLaMA, Mistral, Qwen) support full fine-tuning via LoRA, QLoRA, or full training.' } },
          { '@type': 'Question', 'name': 'What hardware do I need to run LLaMA 3.1 70B locally?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Full precision: ~40GB VRAM (A100 80GB or dual RTX 4090). Quantized 4-bit: ~16–20GB VRAM (single RTX 4090). LLaMA 3.1 8B runs on consumer hardware (~8GB VRAM). Ollama handles quantization and optimization automatically.' } },
          { '@type': 'Question', 'name': 'Can I run open-source LLMs on a MacBook?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Apple Silicon (M1/M2/M3/M4/M5) Macs run open-weights models via Ollama or LM Studio. M2 Pro 16GB runs LLaMA 3.1 8B at 10–15 tokens/sec. M3 Max 128GB runs LLaMA 3.1 70B (4-bit). Slower than dedicated GPU servers but viable for development.' } },
          { '@type': 'Question', 'name': 'Do open-source LLMs have the same limitations as proprietary ones?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes on fundamentals: both hallucinate, have knowledge cutoffs, and context limits. Open-weights cannot be patched server-side — updates require a new release. Proprietary models can improve incrementally. Fine-tuning open-weights can mitigate domain-specific limitations but cannot overcome structural constraints.' } },
          { '@type': 'Question', 'name': 'Which open-weights model is best for coding in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B and Mistral Large 2 are strongest. HumanEval scores: ~73–78% vs GPT-4o ~90% and Claude 4.6 Sonnet ~87%. Competitive for Python, SQL, and structured output. Proprietary models maintain an edge on complex algorithm design and multi-file reasoning.' } },
          { '@type': 'Question', 'name': 'Can I use open-source LLMs for commercial applications?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. LLaMA, Mistral, and Qwen permit commercial use. Key constraint: cannot brand derivatives "LLaMA." LLaMA 2 restricted organizations with >700M monthly active users (removed in LLaMA 3.x). Internal private inference deployments avoid naming issues entirely.' } },
          { '@type': 'Question', 'name': 'What is LoRA and why does it matter for open-weights fine-tuning?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LoRA (Low-Rank Adaptation) trains ~1–5% of model parameters as adapters rather than full backpropagation, reducing training cost 5–10×. QLoRA extends this with 4-bit quantization for consumer GPUs (16–24GB VRAM). LoRA is the standard approach for domain-specializing LLaMA and Mistral without full retraining.' } },
        ],
      },
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            '**Open-weights models cost less at scale; proprietary models deliver frontier performance and managed infrastructure.** Below 5M tokens/day, APIs are cheaper. Above 10M tokens/day, open-weights self-hosting wins on cost.',
            'Open-weights = downloadable model weights (LLaMA, Mistral, Qwen); proprietary = API-only access (GPT-4o, Claude 4.6, Gemini 2.5). "Open weights" is not the same as open-source licensing.',
            'Performance gap has narrowed: LLaMA 3.1 70B and Mistral Large 2 now match proprietary models on classification, summarization, and structured tasks — but lag on complex reasoning (MMLU gap: 88.7% vs 80–81%).',
            'Proprietary advantages: frontier reasoning, tool integration, managed infrastructure. Open-weights advantages: full fine-tuning, local deployment, zero data egress, EU AI Act compliance.',
            'Open-weights require GPU infrastructure and DevOps skill; proprietary requires API keys and network access. Choose based on infrastructure readiness, not just cost.',
            'Fine-tuning: open-weights models support LoRA, QLoRA, full training; proprietary offers limited (OpenAI/Google) or no fine-tuning (Anthropic).',
            'Privacy/compliance: open-weights deployed locally = no data leaves your infrastructure. Proprietary APIs route data through vendor servers, which may violate healthcare, finance, or legal compliance rules.',
          ],
        },

        whatIsOpenSource: {
          title: 'What Is an Open Source LLM?',
          content: [
            '**"Open source" and "open weights" are not synonymous.** Open-source licensing (Apache 2.0, MIT, GPL) applies to source code and permits unrestricted commercial and private use. Open-weights means the trained model weights are downloadable but may be restricted under a specialized license. LLaMA 3.1 is open-weights, not open source — Meta releases the weights under Llama Community License 2.1, which permits commercial use but includes restrictions that prevent calling derivative models "LLaMA" and require attribution.',
            '**Proprietary models are neither open weights nor open source.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), and Google (Gemini 2.5 Pro) do not release model weights. You access them exclusively via API. The weights remain closed; you cannot see, download, modify, or deploy the model yourself.',
            'Understanding this distinction matters for compliance, customization, and data sovereignty. [Learn how LLMs work internally to understand why weights matter](/prompt-engineering/how-llms-actually-work).',
          ],
        },

        whatIsProprietary: {
          title: 'What Is a Proprietary LLM?',
          content: [
            '**Proprietary LLMs are closed models accessible only via API — the vendor controls the weights, training data, safety alignment, and all updates.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), and Mistral API are proprietary. You cannot download weights, view training data, run inference locally, or customize the model weights directly.',
            '**Pricing is per-token API billing on a vendor-controlled server.** GPT-4o costs $5 per 1M input tokens and $15 per 1M output tokens. Claude 4.6 Sonnet costs $3/$15. Gemini 2.5 Pro costs $1.25/$2.50 (≤200K context). You have no infrastructure cost but cannot predict monthly spend precisely — costs scale with usage.',
            '**Proprietary vendors maintain control over model updates, behavior, and alignment.** When OpenAI updates GPT-4o, you automatically get the new version. Safety alignment, constitutional AI, and instruction-following are vendor responsibilities. For regulated industries, this can simplify compliance — the vendor maintains audit trails and published safety practices.',
          ],
        },

        definitions: {
          title: 'Key Concepts & Definitions',
          content: [
            '**Open-Weights Model.** A large language model whose trained weights (the numerical parameters learned during training) are publicly available and can be downloaded, modified, fine-tuned, and self-hosted. Examples: LLaMA 3.1 (Meta), Mistral Large 2 (Mistral AI), Qwen 2.5 (Alibaba). Not to be confused with open-source licensing; "open weights" is about downloadable model files, not necessarily source code or OSI-compliant licensing.',
            '**Proprietary LLM.** A large language model whose weights are kept private and never released. Access is exclusively through a vendor\'s API, requiring per-token billing and network connectivity. Examples: GPT-4o (OpenAI), Claude 4.6 Sonnet (Anthropic), Gemini 2.5 Pro (Google). Users cannot download, inspect, modify, or self-host the model.',
            '**Fine-Tuning.** The process of retraining a pretrained model on a new, smaller dataset specific to a domain or task. Fine-tuning updates the model\'s weights to specialize in your use case (e.g., customer service tone, domain vocabulary). Open-weights models support full fine-tuning via LoRA, QLoRA, or full backpropagation; most proprietary models restrict or forbid fine-tuning.',
            '**Training Data Cutoff.** The date after which a model has no knowledge of events or information. GPT-4o has a cutoff of October 2024; Claude 4.6 Sonnet has early 2025; Gemini 2.5 Pro has October 2024. Models cannot provide accurate information about events after their cutoff date.',
            '**Model Weights.** The numerical parameters (billions to trillions of numbers) learned during model training. Weights determine the model\'s behavior, knowledge, and reasoning patterns. Open-weights models release these files (~15–800 GB depending on model size); proprietary models keep weights secret.',
          ],
        },

        questionDifference: {
          title: 'What is the Difference Between Open-Source and Proprietary LLMs?',
          content: 'Open-source LLMs (LLaMA 3.1, Mistral, Qwen) make model weights publicly available — organizations can download, inspect, fine-tune, and self-host them. Proprietary LLMs (GPT-4o, Claude, Gemini) are owned by vendors and accessible only through APIs. Users cannot download or modify proprietary weights, but benefit from managed infrastructure and vendor updates.',
        },

        questionPerformance: {
          title: 'Are Open-Source LLMs as Good as Proprietary Models?',
          content: 'On many tasks, yes. The performance gap has narrowed to 7–8 percentage points on reasoning benchmarks (MMLU). On classification, summarization, and domain-specific tasks, open-weights models like LLaMA 3.1 70B now match proprietary peers. Proprietary models still lead on complex multi-step reasoning, agent orchestration, and multimodal input handling.',
        },

        questionWhenToUse: {
          title: 'When Should Companies Use Open-Source LLMs?',
          content: 'Companies should use open-source LLMs when data privacy is mandatory (healthcare, finance, legal), when processing more than 10 million tokens per day, when domain-specific fine-tuning is required, or when EU AI Act compliance demands on-premises data residency. Open-weights models also eliminate vendor lock-in and per-token API billing.',
        },

        questionCanReplace: {
          title: 'Can Open-Source LLMs Replace Proprietary AI Models?',
          content: 'For many use cases, yes. Open-source LLMs are production-ready for classification, summarization, extraction, and domain-specific tasks. Proprietary models maintain advantages on complex reasoning, multimodal input, tool integration, and zero-infrastructure deployment. A hybrid approach — routing tasks based on cost, privacy, and performance requirements — outperforms relying on either model class alone.',
        },

        featureComparison: {
          title: 'Quick Feature Comparison',
          columns: ['Feature', 'Open Source LLM', 'Proprietary LLM'],
          rows: [
            { 'Feature': 'Cost', 'Open Source LLM': 'Infrastructure only ($0.50–2.00/hr self-hosted)', 'Proprietary LLM': 'Pay-per-token ($0.15–5.00 per 1M input tokens)' },
            { 'Feature': 'Control', 'Open Source LLM': 'Full — own weights, can fine-tune and modify', 'Proprietary LLM': 'Limited — vendor controls model and updates' },
            { 'Feature': 'Setup', 'Open Source LLM': 'Complex — requires GPUs, VRAM, DevOps skill', 'Proprietary LLM': 'Easy — API keys, network access only' },
            { 'Feature': 'Performance', 'Open Source LLM': '80–82% (MMLU) — competitive on specific tasks', 'Proprietary LLM': '88–90% (MMLU) — higher on general reasoning' },
            { 'Feature': 'Data Privacy', 'Open Source LLM': 'Full control — no data leaves your infrastructure', 'Proprietary LLM': 'Provider dependent — data transits vendor servers' },
          ],
          tableFormat: true,
        },

        decisionFramework: {
          title: 'Decision Framework: Which Should You Choose?',
          content: '**Use this framework to decide in 30 seconds.** Answer: Does your use case fit one of the categories below? If multiple criteria apply, weight them by importance to your project.',
          items: [
            '**Choose open-source LLMs if:**',
            '• Data privacy is critical (healthcare, finance, legal, EU GDPR)',
            '• You need full model control and customization (fine-tuning, domain specialization)',
            '• You process 10M+ tokens/day (cost savings dominate at scale)',
            '• You operate with no internet access (submarines, aircraft, offline networks)',
            '• EU AI Act compliance is required for high-risk AI systems',
            '• You want to avoid vendor lock-in and maintain independence',
            '',
            '**Choose proprietary LLMs if:**',
            '• You need frontier performance on reasoning and multi-step tasks',
            '• You process <5M tokens/day (APIs are cheaper than infrastructure)',
            '• You want zero infrastructure overhead and managed scaling',
            '• You need multimodal input (images, audio) reliability',
            '• You require tool integration and agent orchestration',
            '• You prefer vendor-managed safety alignment and updates',
            '• You lack GPU resources or DevOps expertise',
            '',
            '**Choose a hybrid approach (both) if:**',
            '• You have mixed use cases: private work on open-weights, complex reasoning on proprietary',
            '• You can route requests intelligently by privacy/cost/latency requirements',
            '• You want to compare models before committing to one vendor',
          ],
        },

        quickReference: {
          title: 'Quick Comparison: Top Open-Source vs Proprietary Models in 2026',
          columns: ['Model', 'Type', 'Context Window', 'Approx. Cost', 'Best For'],
          rows: [
            { 'Model': 'GPT-4o', 'Type': 'Proprietary', 'Context Window': '128K tokens', 'Approx. Cost': '$5/$15 per 1M input/output tokens', 'Best For': 'Tool integration, agents, multimodal reasoning' },
            { 'Model': 'Claude 4.6 Sonnet', 'Type': 'Proprietary', 'Context Window': '200K tokens', 'Approx. Cost': '$3/$15 per 1M input/output tokens', 'Best For': 'Writing, code review, structured reasoning' },
            { 'Model': 'Gemini 2.5 Pro', 'Type': 'Proprietary', 'Context Window': '2M tokens', 'Approx. Cost': '$1.25/$2.50 per 1M input/output tokens (≤200K)', 'Best For': 'Long-document research, Google integration' },
            { 'Model': 'LLaMA 3.1 70B', 'Type': 'Open-weights', 'Context Window': '131K tokens', 'Approx. Cost': '~$2/hr on A100 GPU (self-hosted)', 'Best For': 'Privacy, fine-tuning, cost-at-scale' },
            { 'Model': 'Mistral Large 2', 'Type': 'Open-weights', 'Context Window': '123K tokens', 'Approx. Cost': '~$2/hr on A100 GPU (self-hosted)', 'Best For': 'European deployments, competitive reasoning' },
            { 'Model': 'Qwen 2.5 72B', 'Type': 'Open-weights', 'Context Window': '128K tokens', 'Approx. Cost': '~$2/hr on A100 GPU (self-hosted)', 'Best For': 'Asia-Pacific workloads, Chinese language' },
            { 'Model': 'Mistral 7B', 'Type': 'Open-weights', 'Context Window': '32K tokens', 'Approx. Cost': '~$0.50/hr on consumer GPU (self-hosted)', 'Best For': 'Testing, prototypes, cost-sensitive work' },
          ],
          tableFormat: true,
        },

        openSourceLandscape: {
          title: 'The Open-Weights Landscape in 2026',
          content: [
            '**Open-source LLMs allow organizations to download, inspect, and modify model weights, then deploy them locally without vendor dependency or per-token API costs.** The leading models in 2026 are Meta\'s LLaMA 3.1, Mistral Large 2, Qwen 2.5, and others released under community licenses.',
            '**Meta\'s LLaMA 3.1 family is the leading open-weights competitor to proprietary models.** LLaMA 3.1 comes in three sizes: 8B (~8GB VRAM for inference), 70B (~40GB VRAM), and 405B (~800GB+ VRAM across multiple GPUs). All three support 131K token context windows — matching or exceeding many proprietary models. LLaMA 3.1 is trained on 15 trillion tokens of multilingual text; newer variants support multiple languages competitively.',
            '**Mistral AI offers two strong contenders: Mistral 7B and Mistral Large 2.** Mistral 7B is a lean 7B-parameter model with 32K context, ideal for consumer-grade inference and rapid prototyping. Mistral Large 2 scales to 123B parameters with 123K context, targeting the "frontier lite" performance band — competing directly with LLaMA 70B and proprietary models. Both are available for commercial use under Mistral Community License.',
            '**Qwen 2.5 (Alibaba) and emerging models (Falcon, Phi-4) round out the landscape.** Qwen 2.5 72B supports 128K context and excels on Chinese language tasks; useful for teams serving Asia-Pacific markets. Smaller models like Phi-4 (Microsoft) and Falcon 180B target cost-sensitive or specialized use cases. All are downloadable, self-hostable, and support fine-tuning via LoRA or full training.',
          ],
        },

        proprietaryLandscape: {
          title: 'The Proprietary Landscape in 2026',
          content: [
            '**Proprietary LLMs are accessed exclusively through vendor-controlled APIs; model weights are never released and cannot be downloaded, modified, or deployed locally.** Users pay per-token API billing and accept vendor control over model updates, safety policies, and performance characteristics.',
            '**OpenAI\'s GPT-4o remains the reasoning leader.** GPT-4o supports 128K token context with a training cutoff of October 2024. It excels at tool use, agent workflows, multimodal input (images, text), and complex multi-step reasoning. API pricing: $5 per 1M input tokens, $15 per 1M output tokens (March 2026 rates). GPT-4o is API-only; weights are never released. See [how context windows affect your AI system](/prompt-engineering/context-windows-explained-why-ai-forgets) to understand trade-offs.',
            '**Anthropic\'s Claude 4.6 Sonnet dominates writing and code quality benchmarks.** Claude supports 200K token context — 2× larger than GPT-4o — enabling longer documents and extended conversations. Training data cutoff: early 2025. API pricing: $3 per 1M input tokens, $15 per 1M output tokens. Claude does not offer public fine-tuning. Anthropic prioritizes interpretability and safety alignment over benchmark maximization.',
            '**Google\'s Gemini 2.5 Pro offers the largest context window: 2M tokens.** This enables full book-length document processing, exhaustive research, and extended multi-turn conversations. Pricing: $1.25 per 1M input tokens (≤200K context), $10 per 1M output tokens; higher rates for >200K context. Gemini integrates deeply with Google Workspace, Calendar, Gmail, and web search. Training data cutoff: October 2024. Fine-tuning is available for Gemini models.',
          ],
        },

        performanceBenchmarks: {
          title: 'Benchmark Performance: Where the Gap Stands in 2026',
          content: [
            '**Proprietary models still lead on general reasoning (MMLU), but the gap has narrowed to 7–8 percentage points.** MMLU (Massive Multitask Language Understanding) is a broad benchmark covering 57 academic disciplines. To understand why [how LLMs actually work](/prompt-engineering/how-llms-actually-work) matters for reasoning ability, read our deep dive on transformer architecture. Current scores:',
            '',
            'GPT-4o: 88.7% (OpenAI, 2024)',
            'Claude 3.5 Sonnet: 88.3% (Anthropic, 2024)',
            'LLaMA 3.1 70B: 80.5% (Meta, 2024)',
            'Mistral Large 2: 81.2% (Mistral AI, 2024)',
            'Qwen 2.5 72B: 82.1% (Alibaba, 2024)',
            '',
            '**The performance gap between open-weights and proprietary models has narrowed from 15–20 percentage points in 2022 to 7–8 points on reasoning tasks in 2026.** On specialized tasks (coding, math, summarization, classification), open-weights models now match or exceed proprietary peers.',
            '',
            'The remaining gap is primarily on abstract reasoning and [tool-use orchestration](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model). — Touvron et al., "Llama 3 Herd of Models", 2024',
            '',
            '**Important caveat:** Benchmarks measure narrow skills. Task-specific performance varies: on classification, summarization, and extraction, LLaMA 3.1 70B often matches or exceeds GPT-4o. For complex multi-step reasoning (algebra, long chains of thought), proprietary models maintain an edge. The only reliable benchmark is testing on your actual task — see [how to pick the right model for your use case](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model).',
          ],
        },

        costAnalysis: {
          title: 'Cost Analysis: API Pricing vs. Self-Hosting',
          content: [
            '**Direct cost comparison: proprietary APIs dominate at low volume; open-weights self-hosting wins at scale.** The crossover point is typically 5–10M tokens per day. Below this threshold, API simplicity and no infrastructure cost favor proprietary. Above this, open-weights self-hosting becomes cost-effective.',
            '',
            'API pricing as of March 2026:',
            '',
            'Self-hosting infrastructure cost: NVIDIA A100 80GB rents for ~$2/hour on cloud; RTX 4090 consumer hardware costs ~$1.50/hour in electricity + amortization (3-year lifespan). For Mistral 7B, inference throughput is ~50–100 tokens/second per GPU, or ~180–360M tokens/day per GPU. Mistral Large 2 or LLaMA 70B: ~20–30 tokens/second per A100, or ~1.7–2.6M tokens/day. At these throughputs:',
            '',
            '**At 5M tokens/day:** A100 self-hosting costs ~$2.50/day. API costs for Claude Sonnet: 5M × ($3 + $15) / 1M = $90/day (assumes 50% input, 50% output on average). APIs still cheaper.',
            '',
            '**At 50M tokens/day:** Need 20 A100s self-hosting = $50/day. API costs: $900/day. Open-weights wins decisively.',
            '',
            '**At 100M tokens/day:** Need 40 A100s = $100/day. API costs: $1,800/day. Open-weights is 18× cheaper.',
            '',
            'Verify pricing: [OpenAI Pricing](https://openai.com/pricing) · [Anthropic Pricing](https://www.anthropic.com/api) · [Google Pricing](https://ai.google.dev/pricing) — rates change quarterly. See [tokens, costs, and limits explained](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) for detailed token cost breakdown.',
          ],
          columns: ['Model', 'Input (per 1M tokens)', 'Output (per 1M tokens)'],
          rows: [
            { 'Model': 'GPT-4o', 'Input (per 1M tokens)': '$5.00', 'Output (per 1M tokens)': '$15.00' },
            { 'Model': 'Claude 4.6 Sonnet', 'Input (per 1M tokens)': '$3.00', 'Output (per 1M tokens)': '$15.00' },
            { 'Model': 'Gemini 2.5 Pro', 'Input (per 1M tokens)': '$1.25 (≤200K ctx)', 'Output (per 1M tokens)': '$2.50' },
          ],
          tableFormat: true,
        },

        privacyAndDataSovereignty: {
          title: 'Privacy, Data Sovereignty, and the EU AI Act',
          content: [
            '**Open-weights models deployed locally = zero data leaves your infrastructure.** When you run LLaMA 3.1 via Ollama on your private GPU, no inference data, metadata, or query logs leave your network. This is data sovereignty: you maintain complete control. Proprietary APIs (OpenAI, Anthropic, Google) require you to send requests over the network to external servers. Even with contractual data deletion, the data briefly transits vendor infrastructure and is logged for compliance.',
            '**The EU AI Act (2024) designates certain LLM applications as "high-risk," requiring risk documentation, bias testing, and audit trails.** Categories include systems that make significant decisions (hiring, credit, legal discovery, benefits determination). High-risk systems must maintain records of how decisions are made, prove non-discrimination, and support human oversight. Open-weights models deployed on-premises make this easier — you control the audit trail and data storage. Proprietary APIs make this harder — you depend on vendor compliance reports, which may be inadequate for regulated industries.',
            '**For regulated industries (healthcare, finance, legal services), open-weights is often mandatory.** HIPAA (healthcare), SOX (finance), and attorney-client privilege require data residency — meaning data cannot leave your jurisdiction. Proprietary APIs based in the US or other countries violate these requirements. Teams in these sectors typically deploy open-weights models (LLaMA, Mistral, or commercial distributions) on on-premises infrastructure.',
          ],
        },

        customizationAndFineTuning: {
          title: 'Fine-Tuning and Customization: Where Open Weights Win',
          content: [
            '**Open-weights models permit full fine-tuning; proprietary models restrict it or forbid it.** Fine-tuning means retraining the model weights on your own data to specialize it for your domain. You can use LoRA (Low-Rank Adaptation) for efficient fine-tuning, QLoRA for quantized training, or full backpropagation training if you have the compute. After fine-tuning, the model becomes yours — you own the resulting weights, can deploy them anywhere, and can update them offline.',
            '**Proprietary fine-tuning availability:** OpenAI fine-tuning API works only for GPT-4o mini, GPT-4 (older models). Not available for GPT-4o flagship. Anthropic does not offer fine-tuning for Claude via API. Google offers limited fine-tuning for Gemini. None of these permit ownership of the fine-tuned weights — you rent a fine-tuned copy of the proprietary model.',
            '**Security consideration:** When fine-tuning on proprietary APIs, your training data is uploaded to vendor servers. For sensitive domains, this violates compliance rules. Open-weights fine-tuning stays on-premises. See [prompt injection and security](/prompt-engineering/prompt-injection-and-security) for additional attack surface considerations when using external APIs.',
          ],
        },

        comparisonTable: {
          title: 'Key Differences Between Open Source and Proprietary LLMs',
          content: '**Open-weights models cost less at scale and enable full customization; proprietary models deliver faster time-to-value and managed infrastructure at higher per-token cost.** Below 5M tokens/day, proprietary APIs are usually cheaper. Above 10M tokens/day, self-hosted open-weights wins on cost. Choose based on your volume, privacy requirements, and infrastructure readiness.',
          columns: ['Dimension', 'Open-Weights Models', 'Proprietary Models'],
          rows: [
            { 'Dimension': 'Cost model', 'Open-Weights Models': 'Self-host: $0.50–2.00/hr infrastructure. Free once deployed. No per-token billing.', 'Proprietary Models': 'API billing: $0.15–5.00 per 1M input tokens; $0.30–15.00 per 1M output tokens. Scales with usage.' },
            { 'Dimension': 'Performance ceiling', 'Open-Weights Models': 'Best open-weights (LLaMA 70B, Mistral Large): MMLU 80–82%. Competitive on specific tasks, lag on abstract reasoning.', 'Proprietary Models': 'Frontier (GPT-4o, Claude, Gemini): MMLU 88–90%. Higher ceiling on reasoning, agents, multimodal.' },
            { 'Dimension': 'Context window', 'Open-Weights Models': 'LLaMA 3.1: 131K. Mistral Large: 123K. Qwen: 128K. Sufficient for long documents.', 'Proprietary Models': 'GPT-4o: 128K. Claude: 200K. Gemini 2.5: 2M. Larger windows enable longer research.' },
            { 'Dimension': 'Privacy', 'Open-Weights Models': 'Complete data sovereignty. No data leaves your infrastructure. Zero logging via vendor.', 'Proprietary Models': 'Data transits vendor servers. Contractual deletion promised but brief exposure during processing.' },
            { 'Dimension': 'Fine-tuning', 'Open-Weights Models': 'Full fine-tuning supported (LoRA, QLoRA, full training). You own weights. Domain customization.', 'Proprietary Models': 'Limited (OpenAI mini models only) or unavailable (Anthropic Claude). You do not own resulting weights.' },
            { 'Dimension': 'Data sovereignty', 'Open-Weights Models': 'On-premises deployment: full sovereignty. EU AI Act compliant. HIPAA/SOX/legal compliance achievable.', 'Proprietary Models': 'API-dependent: data residency unclear. Harder to prove compliance for regulated industries.' },
            { 'Dimension': 'Inference speed', 'Open-Weights Models': 'Depends on hardware. A100: 20–30 tokens/sec (70B). RTX 4090: 10–15 tokens/sec.', 'Proprietary Models': 'Optimized servers: 30–50+ tokens/sec. Deterministic. Vendor manages optimization.' },
            { 'Dimension': 'Support', 'Open-Weights Models': 'Community-driven. Documentation good; vendor SLA unavailable. You support yourself.', 'Proprietary Models': 'Vendor support included. API SLAs, incident response, uptime guarantees.' },
            { 'Dimension': 'Update cadence', 'Open-Weights Models': 'Offline. New versions released; you choose when to adopt. No forced updates.', 'Proprietary Models': 'Server-side. Vendor updates models; you adapt or use versioned API endpoints.' },
            { 'Dimension': 'Vendor lock-in', 'Open-Weights Models': 'Zero lock-in. Deploy anywhere. Switch vendors or self-host freely. Own your compute.', 'Proprietary Models': 'Moderate to high lock-in. Model behavior, APIs, and pricing under vendor control. Switching costs migration effort.' },
          ],
          tableFormat: true,
        },

        promptEngineeringImplications: {
          title: 'Open Source vs Proprietary LLMs for Prompt Engineering',
          content: [
            '**Open-weights models enable deeper prompt experimentation at lower cost.** You can run the same prompt 100 times against a local LLaMA 3.1 instance and iterate on wording, temperature, and structure without per-token billing. Fine-tune the model on prompt-response pairs from your domain. Experiment with jailbreaks and edge cases in your private infrastructure. This sandbox environment is ideal for research, prototyping, and understanding model behavior.',
            '**Proprietary APIs are faster to test and easier to scale.** You write a prompt, call the GPT-4o or Claude API, and get results in milliseconds with zero infrastructure setup. No need to manage VRAM, quantization, or model downloads. For quick A/B testing, production deployment, and handling variable traffic, proprietary models reduce operational complexity.',
            '**Hybrid approach: prototype on open-weights, validate on proprietary.** Develop and refine prompts locally with LLaMA 3.1 8B (fast iteration, no cost). Once the prompt strategy is locked, test on GPT-4o or Claude 4.6 to confirm frontier performance. Deploy the better performer to production. This combines open-weights flexibility with proprietary reliability.',
          ],
        },

        whenOpenSource: {
          title: 'When to Use Open Source Models',
          content: '**Choose open-weights when data privacy, cost at scale, or deep customization requirements dominate your constraints.** Open-weights excel in:',
          items: [
            '**Sensitive data (healthcare, finance, legal):** Patient records, financial data, attorney-client communications cannot transit external APIs. Open-weights deployed on-premises keeps data in your control and achieves compliance. Use LLaMA 3.1 or Mistral for HIPAA, GDPR, and attorney-client privilege compliance. Pair with [security controls against prompt injection](/prompt-engineering/prompt-injection-and-security) to protect model inputs.',
            '**High-volume automation (50M+ tokens/day):** Above ~10M tokens/day, self-hosting becomes cheaper than proprietary APIs. Use open-weights for high-volume classification, extraction, summarization, or data processing pipelines where [API costs would be prohibitive](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
            '**Domain customization and fine-tuning:** You have labeled datasets and need the model to specialize on your terminology, writing style, or task distribution. Open-weights permit LoRA, QLoRA, or full fine-tuning. Proprietary APIs forbid or restrict customization.',
            '**Geographic or network constraints:** You need inference with no internet access (submarines, aircraft, remote sites). Open-weights runs offline. Proprietary APIs require network connectivity.',
            '**EU AI Act compliance (high-risk deployments):** Hiring systems, credit decisions, benefits determination. Audit trails, risk documentation, and on-premises data residency are easier with open-weights. Proprietary APIs make compliance harder to demonstrate.',
            '**Cost predictability:** Open-weights infrastructure cost is fixed (hardware + electricity). Proprietary APIs scale unpredictably with usage. For cost-sensitive organizations, open-weights budgeting is clearer.',
          ],
        },

        whenProprietary: {
          title: 'When to Use Proprietary Models',
          content: '**Choose proprietary when absolute performance, managed infrastructure, or safety alignment matters most.** Proprietary excels in:',
          items: [
            '**Complex multi-step reasoning:** Agent workflows, complex research synthesis, and abstract problem-solving. GPT-4o, Claude 4.6, and Gemini 2.5 maintain a 7–8 point edge on MMLU. Open-weights close the gap on specific tasks but lag on general reasoning.',
            '**Long-context document research (1M+ tokens):** Gemini 2.5 Pro is the only production model with 2M token context. For processing entire books, research corpora, or exhaustive case law, no open-weights model matches it. Use proprietary when document length exceeds open-weights capabilities.',
            '**Zero infrastructure overhead:** You lack GPU resources, DevOps expertise, or on-call coverage for model infrastructure. Proprietary APIs handle availability, scaling, and optimization. Pay for simplicity; avoid operational burden.',
            '**Tool integration and agents:** OpenAI leads on tool use, function calling, and multi-step agent orchestration. If your system requires reliable function routing and multi-turn agent behaviors, GPT-4o is the pragmatic choice.',
            '**Managed safety and alignment:** Proprietary vendors invest heavily in constitutional AI, RLHF, and instruction-following. For chatbots, customer service, and user-facing systems, proprietary models are typically safer out-of-the-box.',
            '**Multimodal input (images, audio):** GPT-4o and Claude 4.6 Sonnet handle image input reliably. Multimodal open-weights models exist but are less mature. Use proprietary for reliable vision-language tasks.',
          ],
        },

        hybridArchitecture: {
          title: 'Hybrid AI Architectures (Open + Closed Models)',
          content: '**Organizations can use hybrid AI architectures that route requests to open-weights models for sensitive data and cost-sensitive tasks, while dispatching complex reasoning and multimodal work to proprietary models.** This approach combines the cost efficiency, privacy, and customization of open-weights with the performance and managed infrastructure of proprietary LLMs.',
          items: [
            '**Privacy-sensitive data → local open-weights; complex reasoning → proprietary API.** Route patient records, financial data, and legal documents to LLaMA 3.1 running locally via Ollama. Route multi-step research synthesis, code generation, and agent orchestration to GPT-4o or Claude 4.6 Sonnet. This hybrid approach achieves compliance while maintaining frontier performance.',
            '**Cost-sensitive batch processing → local open-weights; interactive requests → proprietary API.** For background tasks (classification, extraction, summarization), use self-hosted LLaMA 3.1 70B (~$2/hr on A100). For real-time user requests where latency matters, use GPT-4o API ($5/$15 per 1M tokens). Hybrid reduces total cost and latency.',
            '**Multi-model comparison and consensus → PromptQuorum.** Dispatch a single [prompt](/prompt-engineering/what-is-prompt-engineering) to local Ollama, GPT-4o, Claude 4.6, and Gemini 2.5 Pro simultaneously via PromptQuorum. Compare outputs side-by-side on quality, latency, and cost. Choose the winner for production or combine outputs for ensemble reasoning.',
            '**Testing and staging → open-weights; production serving → proprietary.** Use LLaMA 3.1 8B running locally for rapid prototyping and development. Once the prompt and pipeline are validated, upgrade to GPT-4o or Claude for production traffic where reliability, tool integration, and safety guarantees matter most.',
          ],
        },

        nuancedTakes: {
          title: 'Where the Conventional Wisdom Is Wrong',
          content: '**Open-weights is not always cheaper than proprietary APIs.** At <5M tokens/day, proprietary APIs (GPT-4o mini, Claude Haiku, Gemini Flash) are often cheaper because infrastructure cost (GPU amortization, electricity, DevOps labor) exceeds API billing. Only above 10M tokens/day do open-weights self-hosting become cost-optimal.',
          items: [
            '**The performance gap is task-specific, not universal.** Proprietary models lead on MMLU (reasoning) by 7–8 points. But on classification, summarization, extraction, and many domain tasks, LLaMA 3.1 70B matches or beats proprietary models. "Proprietary is better" is too broad. Benchmark your actual task.',
            '**"Open source" licensing is complex and often not actually open source.** LLaMA, Mistral, and Qwen are not OSI-compliant open source — they are "open weights" under non-standard licenses. Calling them "open source" is misleading and invites legal confusion. Clarify licensing with counsel before relying on legal protections.',
            '**Proprietary is not always more safe or aligned.** [All models hallucinate](/prompt-engineering/ai-limitations-what-llms-cant-do). Proprietary training data, cutoffs, and constitutional AI do not prevent jailbreaking, [prompt injection](/prompt-engineering/prompt-injection-and-security), or misuse. Open-weights can be fine-tuned to match or exceed proprietary alignment. Safety is a property of the deployment and guardrails, not the model class.',
          ],
        },

        keyTerms: {
          title: 'Key Terms',
          items: [
            '[Open Weights](/prompt-engineering/prompt-engineering-glossary#open-weights) — Model weights are downloadable but may be restricted by license',
            '[Fine-tuning](/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Retraining model weights on domain-specific data',
            '[LoRA](/prompt-engineering/prompt-engineering-glossary#lora) — Efficient fine-tuning via low-rank adaptation (5–10% of full training cost)',
            '[RAG](/prompt-engineering/prompt-engineering-glossary#rag) — Retrieval-Augmented Generation; grounding LLM outputs in external documents',
            '[Context Window](/prompt-engineering/prompt-engineering-glossary#context-window) — Maximum token capacity for input + output combined',
            '[VRAM](/prompt-engineering/prompt-engineering-glossary#vram) — GPU memory required for model inference',
          ],
        },

        promptExample: {
          title: 'Prompt Structure in Practice',
          content: [
            '[Bad Prompt] "Which is better, open source or GPT-4o?"',
            '[Good Prompt] "I need to process 20M tokens/day of customer support tickets. I cannot send data outside the EU. Compare open-weights (LLaMA 3.1 70B self-hosted) vs proprietary (GPT-4o via API) for this use case: include infrastructure cost at 20M tokens/day, GDPR data residency compliance, fine-tuning feasibility, and expected quality on ticket classification tasks."',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Fundamentals: AI Limitations and Structural Constraints](/prompt-engineering/ai-limitations-what-llms-cant-do) — Why both proprietary and open-weights models share fundamental limitations like hallucination and context bounds',
            '[Fundamentals: How LLMs Actually Work](/prompt-engineering/how-llms-actually-work) — Understanding transformer architecture explains why open-weights and proprietary models share the same core mechanics',
            '[Fundamentals: GPT-4o, Claude, or Gemini? How to Pick the Right Model](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — Detailed comparison of frontier proprietary models',
            '[Techniques: RAG Explained — Retrieval-Augmented Generation](/prompt-engineering/rag-explained) — How to extend any model (proprietary or open-weights) with external knowledge',
            '[Fundamentals: Tokens, Costs & Limits](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — Detailed cost analysis and token economics',
            '[Fundamentals: Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Security considerations for both model classes',
          ],
        },

        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Is Llama 3.1 truly open source or just open-weights?',
              a: 'Just open-weights. LLaMA 3.1 releases model weights under Llama Community License 2.1, which is not OSI-compliant open source. The license permits commercial use but restricts naming derivatives "LLaMA," requires attribution, and includes non-compete clauses. True open-source licenses (Apache 2.0, MIT, GPL) have none of these restrictions. LLaMA is more permissive than closed proprietary access but is not legally "open source."',
            },
            {
              q: 'Which is cheaper in 2026 — self-hosting Llama or using GPT-4o API?',
              a: 'It depends on volume. Below 5M tokens/day, GPT-4o API (or GPT-4o mini) is cheaper because infrastructure cost exceeds API billing. At 5–10M tokens/day, costs roughly equalize. Above 10M tokens/day, self-hosting LLaMA 3.1 wins on cost. At 100M tokens/day, self-hosting is 10–20× cheaper. Hidden factors: GPU amortization, electricity (~$0.10/kWh), DevOps labor, and downtime risk often tip marginal cases toward API.',
            },
            {
              q: 'Does the EU AI Act affect open-source LLMs?',
              a: 'Yes, depending on how you deploy them. The EU AI Act (2024) designates "high-risk" AI systems — hiring, credit scoring, legal discovery — as requiring risk documentation, bias testing, and audit trails. Open-weights deployed on-premises make compliance easier because you control data and logs. Proprietary APIs force reliance on vendor attestations. General-purpose AI models with >10^25 FLOP training compute (frontier models) face additional transparency obligations. For regulated sectors, consult compliance counsel.',
            },
            {
              q: 'Which open-source LLM is closest to GPT-4o in 2026?',
              a: 'LLaMA 3.1 70B and Mistral Large 2 are closest, but gaps remain. On MMLU (reasoning benchmark), GPT-4o scores 88.7% vs LLaMA 3.1 70B at 80.5% and Mistral Large at 81.2%. On specific tasks (classification, summarization, extraction), open-weights now matches proprietary. The gap narrows ~2–3 points per year; convergence on reasoning tasks is likely in 18–24 months.',
            },
            {
              q: 'Can I fine-tune GPT-4o?',
              a: 'No. OpenAI fine-tuning is available only for GPT-4o mini, GPT-4, and gpt-3.5-turbo — not GPT-4o itself. Anthropic offers no fine-tuning for Claude. Google offers fine-tuning for Gemini. Open-weights models (LLaMA, Mistral, Qwen) support full fine-tuning via LoRA, QLoRA, or full gradient training — you own the resulting weights.',
            },
            {
              q: 'What hardware do I need to run LLaMA 3.1 70B locally?',
              a: 'Full precision: ~40GB VRAM (A100 80GB or dual RTX 3090/4090). Quantized 4-bit via Ollama: ~16–20GB VRAM (single RTX 4090 24GB). LLaMA 3.1 8B runs on consumer hardware (~8GB VRAM, RTX 3060 or Apple M2 Pro). Ollama handles quantization and model management automatically — recommended for most local deployments.',
            },
            {
              q: 'Can I run open-source LLMs on a MacBook?',
              a: 'Yes. Apple Silicon (M1/M2/M3/M4/M5) Macs can run open-weights models via Ollama or LM Studio. The unified memory architecture shares RAM with GPU — an M2 Pro with 16GB runs LLaMA 3.1 8B at 10–15 tokens/sec. M3 Max with 128GB memory can run LLaMA 3.1 70B in 4-bit quantization. Performance is slower than a dedicated GPU server but viable for development and personal use.',
            },
            {
              q: 'Do open-source LLMs have the same limitations as proprietary ones?',
              a: 'Yes on fundamentals: both hallucinate, have knowledge cutoffs, context window limits, and reasoning boundaries. Open-weights cannot be patched server-side — weight updates require a new release and retraining. Proprietary models can be improved incrementally without user action. Fine-tuning open-weights can mitigate specific limitations (domain knowledge, tone), but cannot overcome structural constraints like knowledge cutoff or hallucination risk.',
            },
            {
              q: 'Which open-weights model is best for coding in 2026?',
              a: 'LLaMA 3.1 70B and Mistral Large 2 are the strongest open-weights coding models. On HumanEval (code generation benchmark), they score 73–78%, compared to GPT-4o at ~90% and Claude 4.6 Sonnet at ~87%. For Python, SQL, and structured output, open-weights is competitive. For complex algorithm design and multi-file reasoning, proprietary models maintain a significant edge.',
            },
            {
              q: 'Can I use open-source LLMs for commercial applications?',
              a: 'Yes. LLaMA, Mistral, and Qwen explicitly permit commercial use under their licenses. Key constraints: cannot brand derivatives "LLaMA" (must rename); must include license attribution; LLaMA 2 restricted organizations with >700M monthly active users (removed in LLaMA 3.x). Most teams deploy open-weights internally (private inference), which avoids naming issues entirely.',
            },
            {
              q: 'What is LoRA and why does it matter for open-weights fine-tuning?',
              a: 'LoRA (Low-Rank Adaptation) is a fine-tuning method that trains only a small set of adapter weights (~1–5% of model parameters) rather than full backpropagation across all layers. This reduces training cost 5–10× vs full fine-tuning with minimal quality loss. QLoRA extends this with 4-bit quantization, enabling fine-tuning on consumer GPUs (16–24GB VRAM). LoRA is the standard approach for adapting LLaMA and Mistral to domain-specific tasks without full retraining.',
            },
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            'Meta AI, "Llama 3 Herd of Models" (Touvron et al., 2024) — architecture, context window, benchmark scores, and training data documentation',
            'Mistral AI, Model Cards and Technical Documentation (2024) — Mistral Large 2 and Mistral 7B specifications',
            'Hendrycks et al., "Measuring Massive Multitask Language Understanding" (2021) — MMLU benchmark definition and baseline scores. arXiv:2009.03300',
            'Chen et al., "Evaluating Large Language Models Trained on Code" (2021) — HumanEval benchmark for code generation. arXiv:2107.03374',
            'European Union, "Artificial Intelligence Act" (2024) — high-risk AI system categories, GPAI model obligations, and compliance requirements',
            'Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models" (2021) — LoRA method definition and efficiency results. arXiv:2106.09685',
            'Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs" (2023) — QLoRA method and consumer GPU fine-tuning results. arXiv:2305.14314',
          ],
        },
      },
    },
    de: {
      theme: 'Techniques',
      title: 'Open Source vs. proprietäre LLMs',
      intro: 'Open-Weights-Modelle wie LLaMA 3.1 und Mistral bieten Kontrolle und Kosteneinsparungen; proprietäre Modelle wie GPT-4o und Claude 4.6 Sonnet liefern Spitzenleistung. Beide Kategorien konvergieren in der Leistungsfähigkeit, divergieren aber bei Zugriff, Anpassung und Compliance-Anforderungen.',
      metaDescription: 'Open Source vs. proprietäre LLMs: Kosten, Kontrolle, Datenschutz, Fine-Tuning und Performance 2026. Das richtige Modell für Ihren Anwendungsfall.',
      publishDate: '2026-03-24',
      seoTitle: 'Open Source vs Proprietäre LLMs: Kosten und Performance',
      dateModified: '2026-04-01',
      readTime: '14 min Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Open-Source-LLMs',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms?lang=de',
        'inLanguage': 'de',
        headline: 'Open Source vs. proprietäre LLMs',
        description: 'Open-Weights-Modelle wie LLaMA 3.1 und Mistral bieten Kontrolle und Kosteneinsparungen; proprietäre Modelle wie GPT-4o und Claude 4.6 Sonnet liefern Spitzenleistung.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-01',
        keywords: ['Open-Source-LLMs', 'LLaMA', 'Mistral', 'proprietäre Modelle', 'GPT-4o', 'Claude', 'Fine-Tuning', 'Kostenanalyse', 'Open-Weights', 'lokale Inferenz'],
        teaches: [
          'Der Unterschied zwischen Open-Weights und Open-Source-Lizenzen für LLMs',
          'Kosten- und Leistungskompromisse zwischen Open-Weights- und proprietären Modellen',
          'Wann lokale Inferenz versus API-Zugriff zu verwenden ist',
        ],
        about: [
          { '@type': 'Thing', name: 'Open-Source-LLMs' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large' },
          { '@type': 'Thing', name: 'EU AI Act Compliance' },
          { '@type': 'Thing', name: 'LLM Fine-Tuning' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        mentions: [
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
          { '@type': 'Thing', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large 2' },
          { '@type': 'Thing', name: 'Qwen 2.5' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/open-source-vs-proprietary-llms', width: 1200, height: 630 },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Open-Weights vs. proprietäre LLMs — Vollständiger Vergleich',
        description: '10-dimensionaler Vergleich von Open-Weights- und proprietären LLMs mit Fokus auf Kosten, Leistung, Datenschutz, Fine-Tuning, Kontextfenster, Souveränität, Geschwindigkeit, Support, Updates und Vendor Lock-in.',
        numberOfItems: 10,
        url: 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Kostenmodell',
            description: 'Open-Weights: $0,50–2,00/Stunde Infrastruktur; kostenlos nach Bereitstellung, kein Pro-Token-Billing. Proprietär: API-Billing $0,15–5,00 pro 1 Million Input-Token; $0,30–15,00 pro 1 Million Output-Token.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leistungsobergrenze',
            description: 'Open-Weights (LLaMA 70B, Mistral Large): MMLU 80–82%, wettbewerbsfähig bei spezifischen Aufgaben. Proprietär (GPT-4o, Claude, Gemini): MMLU 88–90%, höhere Obergrenze bei Reasoning und Multimodal.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Kontextfenster',
            description: 'Open-Weights: LLaMA 3.1 131K, Mistral Large 123K, Qwen 128K — ausreichend für lange Dokumente. Proprietär: GPT-4o 128K, Claude 200K, Gemini 2.5 Pro 2M Token.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Datenschutz',
            description: 'Open-Weights: vollständige Datensouveränität, keine Daten verlassen die Infrastruktur, keine Vendor-Protokollierung. Proprietär: Daten durchqueren Vendor-Server; vertragliche Löschung versprochen, aber kurzes Exponieren tritt auf.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Fine-Tuning',
            description: 'Open-Weights: Vollständiges Fine-Tuning unterstützt (LoRA, QLoRA, vollständiges Training); Sie besitzen resultierende Gewichte. Proprietär: Begrenzt (nur OpenAI Mini-Modelle) oder nicht verfügbar (Anthropic Claude).',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Datensouveränität',
            description: 'Open-Weights: On-Premises-Bereitstellung erreichbar; EU AI Act, HIPAA, SOX konform. Proprietär: API-abhängig; Datenspeicherort unklar; schwieriger zu beweisen, dass Compliance erfüllt ist.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Inferenz-Geschwindigkeit',
            description: 'Open-Weights: hardwareabhängig — A100 20–30 Token/Sec (70B), RTX 4090 10–15 Token/Sec. Proprietär: optimierte Server 30–50+ Token/Sec; Vendor verwaltet Optimierung.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'Support',
            description: 'Open-Weights: Community-getriebene Dokumentation; kein Vendor SLA; selbst unterstützt. Proprietär: Vendor-Support, API SLAs, Incident Response und Uptime-Garantien enthalten.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'Update-Frequenz',
            description: 'Open-Weights: offline; Sie kontrollieren die Einführung neuer Modellversionen; keine erzwungenen Updates. Proprietär: serverseitig; Vendor aktualisiert Modelle; passen Sie sich an oder verwenden Sie versionierte API-Endpoints.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'Vendor Lock-in',
            description: 'Open-Weights: kein Lock-in; stellen Sie überall bereit; besitzen Sie Ihre Compute. Proprietär: mäßig bis hohes Lock-in; Modellverhalten, APIs und Preisgestaltung unter Vendor-Kontrolle.',
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Wie man zwischen Open-Source- und proprietären LLMs wählt',
        'description': 'Ein Entscheidungsrahmen zur Auswahl von Open-Weights- oder proprietären Modellen basierend auf Kosten-, Datenschutz-, Anpassungs- und Leistungsanforderungen.',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Datenschutzanforderungen bewerten', 'text': 'Wenn Daten auf den Unternehmenseigenen Systemen bleiben müssen (Gesundheitswesen, Finanzen, Recht, EU AI Act High-Risk-Implementierungen), ist Open-Weights obligatorisch. Proprietäre Modelle leiten Daten über externe APIs weiter, was HIPAA-, GDPR- oder Anwalt-Klient-Berechtigungsanforderungen verletzen kann.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Tägliches Token-Volumen berechnen', 'text': 'Berechnen Sie die API-Kosten für 1M, 10M und 100M tägliche Token. Unter ~5M Token/Tag sind proprietäre APIs üblicherweise billiger aufgrund von Null-Infrastrukturkosten. Über 10M Token/Tag wird Open-Weights Self-Hosting kosteneffektiv; über 100M Token/Tag gewinnt Open-Weights entscheidend.' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Fine-Tuning-Anforderungen bewerten', 'text': 'Wenn Sie das Modell auf Ihrer Domain, Terminologie oder Task-Verteilung spezialisieren müssen, ist Open-Weights erforderlich. Open-Weights unterstützen LoRA, QLoRA und vollständiges Fine-Tuning — Sie besitzen die resultierenden Gewichte. Proprietäre APIs verbieten oder beschränken stark die Anpassung.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Infrastruktur-Bereitschaft prüfen', 'text': 'Open-Weights erfordert VRAM, GPUs und DevOps-Fähigkeiten zum Self-Hosting (LLaMA 70B: ~40GB VRAM auf A100). Proprietär erfordert API-Schlüssel und Netzwerkverbindung, aber null Infrastruktur. Wenn Ihnen GPU-Ressourcen oder On-Call-Coverage fehlt, ist proprietär der einfachere Weg.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Benchmark auf Ihrer tatsächlichen Aufgabe', 'text': 'Verwenden Sie PromptQuorum, um Ihren Prompt gleichzeitig an GPT-4o, Claude und eine lokale Ollama-Instanz zu verteilen. Vergleichen Sie Output-Qualität, Latenz und Kosten nebeneinander. Das Modell, das bei Ihrer spezifischen Aufgabe und Ihren Daten gewinnt, ist die richtige Wahl — nicht der Benchmark-Leiter.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Ist Llama 3.1 wirklich Open Source oder nur Open-Weights?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nur Open-Weights. LLaMA 3.1 veröffentlicht Modellgewichte unter Llama Community License 2.1, die nicht OSI-konform ist. Die Lizenz erlaubt kommerzielle Nutzung, beschränkt aber die Benennung von Derivaten als "LLaMA", erfordert Attribution und enthält Non-Compete-Klauseln. Echte Open-Source-Lizenzen (Apache 2.0, MIT, GPL) haben keine dieser Einschränkungen.' } },
          { '@type': 'Question', 'name': 'Was ist billiger in 2026 — Self-Hosting von Llama oder Nutzung der GPT-4o API?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Das hängt vom Volumen ab. Unter 5M Token/Tag ist GPT-4o API billiger — keine Infrastrukturkosten. Bei 5–10M Token/Tag gleichen sich die Kosten aus. Über 10M Token/Tag gewinnt Self-Hosting LLaMA 3.1 bei Kosten. Bei 100M Token/Tag ist Self-Hosting 10–20× billiger. Versteckte Faktoren: GPU-Amortisierung, Elektrizität und DevOps-Arbeit kippen Grenzfälle oft zur API.' } },
          { '@type': 'Question', 'name': 'Betrifft der EU AI Act Open-Source-LLMs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, abhängig von der Bereitstellung. High-Risk-AI-Systeme (Einstellung, Kredit, Rechtsbeschlüsse) erfordern Risicodokumentation, Bias-Tests und Audit-Trails. Open-Weights auf Unternehmenseigenen Systemen erleichtert Compliance — Sie kontrollieren Daten und Logs. Proprietäre APIs zwingen zur Abhängigkeit von Vendor-Bescheinigungen. Allzweckmodelle mit >10^25 FLOP Trainingscompute sehen sich zusätzlichen Transparenzpflichten gegenüber.' } },
          { '@type': 'Question', 'name': 'Welches Open-Source-LLM ist GPT-4o in 2026 am nächsten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B und Mistral Large 2 sind am nächsten. MMLU-Scores: GPT-4o 88,7%, LLaMA 3.1 70B 80,5%, Mistral Large 81,2%. Bei Klassifizierung, Zusammenfassung und Extraktion entspricht Open-Weights jetzt dem Proprietären. Der Reasoning-Gap verengt sich ~2–3 Punkte pro Jahr.' } },
          { '@type': 'Question', 'name': 'Kann ich GPT-4o Fine-Tunen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. OpenAI Fine-Tuning ist nur für GPT-4o mini, GPT-4 und gpt-3.5-turbo verfügbar. Anthropic bietet kein Fine-Tuning für Claude an. Google bietet Gemini Fine-Tuning an. Open-Weights (LLaMA, Mistral, Qwen) unterstützen vollständiges Fine-Tuning via LoRA, QLoRA oder vollständiges Training.' } },
          { '@type': 'Question', 'name': 'Welche Hardware benötige ich, um LLaMA 3.1 70B lokal zu betreiben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Vollständige Präzision: ~40GB VRAM (A100 80GB oder dual RTX 4090). Quantisiert 4-Bit: ~16–20GB VRAM (einzelner RTX 4090). LLaMA 3.1 8B läuft auf Consumer-Hardware (~8GB VRAM). Ollama behandelt Quantisierung und Optimierung automatisch.' } },
          { '@type': 'Question', 'name': 'Kann ich Open-Source-LLMs auf einem MacBook ausführen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Apple Silicon (M1/M2/M3/M4/M5) Macs führen Open-Weights-Modelle über Ollama oder LM Studio aus. M2 Pro 16GB führt LLaMA 3.1 8B mit 10–15 Token/Sec aus. M3 Max 128GB führt LLaMA 3.1 70B (4-Bit) aus. Langsamer als dedizierte GPU-Server, aber lebensfähig für Entwicklung.' } },
          { '@type': 'Question', 'name': 'Haben Open-Source-LLMs die gleichen Einschränkungen wie proprietäre?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja auf Grundlagen: beide halluzinieren, haben Wissens-Cutoffs und Kontextgrenzen. Open-Weights können nicht serverseitig gepatcht werden — Updates erfordern eine neue Veröffentlichung. Proprietäre Modelle können inkrementell verbessert werden. Fine-Tuning von Open-Weights kann domänenspezifische Einschränkungen mindern, kann aber nicht strukturelle Zwänge überwinden.' } },
          { '@type': 'Question', 'name': 'Welches Open-Weights-Modell ist 2026 am besten für Programmierung?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B und Mistral Large 2 sind am stärksten. HumanEval-Scores: ~73–78% vs. GPT-4o ~90% und Claude 4.6 Sonnet ~87%. Wettbewerbsfähig für Python, SQL und strukturierte Ausgabe. Proprietäre Modelle behalten einen Vorteil bei komplexem Algorithmus-Design und Multi-File-Reasoning.' } },
          { '@type': 'Question', 'name': 'Kann ich Open-Source-LLMs für kommerzielle Anwendungen nutzen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. LLaMA, Mistral und Qwen erlauben kommerzielle Nutzung. Schlüsselbeschränkung: können Derivate nicht "LLaMA" nennen; müssen Lizenzattribution einfügen; LLaMA 2 beschränkte Organisationen mit >700M monatlichen aktiven Benutzern (in LLaMA 3.x entfernt). Die meisten Teams stellen Open-Weights intern bereit (private Inferenz), was Benennungsprobleme vermeidet.' } },
          { '@type': 'Question', 'name': 'Was ist LoRA und warum spielt es eine Rolle für Open-Weights Fine-Tuning?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LoRA (Low-Rank Adaptation) trainiert ~1–5% der Modellparameter als Adapter anstelle von vollständiger Rückausbreitung, Reduktion von Trainingskosten 5–10×. QLoRA erweitert dies mit 4-Bit-Quantisierung für Consumer-GPUs (16–24GB VRAM). LoRA ist der Standard-Ansatz zum Spezialisieren von LLaMA und Mistral ohne vollständiges Neutraining.' } },
        ],
      },
      sections: {
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            '**Open-Weights-Modelle kosten in großem Maßstab weniger; proprietäre Modelle liefern Spitzenleistung und verwaltete Infrastruktur.** Unter 5M Token/Tag sind APIs billiger. Über 10M Token/Tag gewinnt Open-Weights Self-Hosting bei Kosten.',
            'Open-Weights = herunterladbare Modellgewichte (LLaMA, Mistral, Qwen); proprietär = nur API-Zugriff (GPT-4o, Claude 4.6, Gemini 2.5). "Open Weights" ist nicht dasselbe wie Open-Source-Lizenzierung.',
            'Leistungslücke hat sich verengt: LLaMA 3.1 70B und Mistral Large 2 entsprechen jetzt proprietären Modellen bei Klassifizierung, Zusammenfassung und strukturierten Aufgaben — liegen aber hinter bei komplexem Reasoning zurück (MMLU-Lücke: 88,7% vs. 80–81%).',
            'Proprietäre Vorteile: Frontier-Reasoning, Tool-Integration, verwaltete Infrastruktur. Open-Weights-Vorteile: vollständiges Fine-Tuning, lokale Bereitstellung, Zero-Daten-Egress, EU AI Act Compliance.',
            'Open-Weights erfordern GPU-Infrastruktur und DevOps-Fähigkeiten; proprietär erfordert API-Schlüssel und Netzwerkzugriff. Wählen Sie basierend auf Infrastruktur-Bereitschaft, nicht nur Kosten.',
            'Fine-Tuning: Open-Weights-Modelle unterstützen LoRA, QLoRA, vollständiges Training; proprietär bietet begrenzt (OpenAI/Google) oder kein Fine-Tuning (Anthropic).',
            'Datenschutz/Compliance: Open-Weights lokal bereitgestellt = keine Daten verlassen Ihre Infrastruktur. Proprietäre APIs leiten Daten durch Vendor-Server, was Gesundheitswesen-, Finanz- oder Rechts-Compliance-Regeln verletzen kann.',
          ],
        },
    
        whatIsOpenSource: {
          title: 'Was ist ein Open-Source-LLM?',
          content: [
            '**"Open Source" und "Open Weights" sind nicht synonym.** Open-Source-Lizenzierung (Apache 2.0, MIT, GPL) gilt für Quellcode und erlaubt unbeschränkte kommerzielle und private Nutzung. Open-Weights bedeutet, dass die trainierten Modellgewichte herunterladbar sind, aber möglicherweise unter einer spezialisierten Lizenz beschränkt sind. LLaMA 3.1 ist Open-Weights, nicht Open Source — Meta veröffentlicht die Gewichte unter Llama Community License 2.1, die kommerzielle Nutzung erlaubt, aber Einschränkungen enthält, die das Aufrufen von Derivatmodellen als "LLaMA" verhindern und Attribution erfordern.',
            '**Proprietäre Modelle sind weder Open-Weights noch Open Source.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet) und Google (Gemini 2.5 Pro) veröffentlichen keine Modellgewichte. Sie greifen ausschließlich über API zu. Die Gewichte bleiben geschlossen; Sie können das Modell nicht sehen, herunterladen, ändern oder selbst bereitstellen.',
            'Das Verständnis dieser Unterscheidung ist wichtig für Compliance, Anpassung und Datensouveränität. [Erfahren Sie, wie LLMs intern funktionieren, um zu verstehen, warum Gewichte wichtig sind](/prompt-engineering/how-llms-actually-work?lang=de).',
          ],
        },
    
        whatIsProprietary: {
          title: 'Was ist ein proprietäres LLM?',
          content: [
            '**Proprietäre LLMs sind geschlossene Modelle, auf die nur über API zugegriffen werden kann — der Vendor kontrolliert die Gewichte, Trainingsdaten, Safety-Alignment und alle Updates.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro) und Mistral API sind proprietär. Sie können keine Gewichte herunterladen, Trainingsdaten anzeigen, lokal Inferenz ausführen oder die Modellgewichte direkt anpassen.',
            '**Die Preisgestaltung ist Pro-Token-API-Billing auf einem Vendor-kontrollierten Server.** GPT-4o kostet $5 pro 1 Million Input-Token und $15 pro 1 Million Output-Token. Claude 4.6 Sonnet kostet $3/$15. Gemini 2.5 Pro kostet $1,25/$2,50 (≤200K Kontext). Sie haben keine Infrastrukturkosten, können aber die monatliche Ausgabe nicht genau vorhersagen — Kosten skalieren mit Nutzung.',
            '**Proprietäre Vendor behalten Kontrolle über Modell-Updates, Verhalten und Alignment.** Wenn OpenAI GPT-4o aktualisiert, erhalten Sie automatisch die neue Version. Safety-Alignment, Constitutional AI und Instruction-Following sind Vendor-Verantwortlichkeiten. Für regulierte Branchen kann dies Compliance vereinfachen — der Vendor behält Audit-Trails und veröffentlichte Safety-Praktiken.',
          ],
        },
    
        definitions: {
          title: 'Schlüsselkonzepte & Definitionen',
          content: [
            '**Open-Weights-Modell.** Ein großes Sprachmodell, dessen trainierte Gewichte (die numerischen Parameter, die während des Trainings gelernt wurden) öffentlich verfügbar sind und heruntergeladen, geändert, Fine-tuned und selbst gehostet werden können. Beispiele: LLaMA 3.1 (Meta), Mistral Large 2 (Mistral AI), Qwen 2.5 (Alibaba). Nicht zu verwechseln mit Open-Source-Lizenzierung; "Open Weights" ist über herunterladbare Modelldateien, nicht unbedingt Quellcode oder OSI-konforme Lizenzierung.',
            '**Proprietäres LLM.** Ein großes Sprachmodell, dessen Gewichte privat bleiben und nie freigegeben werden. Der Zugriff erfolgt ausschließlich über die API eines Vendors, erfordert Pro-Token-Billing und Netzwerkverbindung. Beispiele: GPT-4o (OpenAI), Claude 4.6 Sonnet (Anthropic), Gemini 2.5 Pro (Google). Benutzer können das Modell nicht herunterladen, inspizieren, ändern oder selbst hosten.',
            '**Fine-Tuning.** Der Prozess der Umschulung eines vortrainierten Modells auf einem neuen, kleineren Datensatz, der für eine Domain oder Aufgabe spezifisch ist. Fine-Tuning aktualisiert die Modellgewichte, um sich auf Ihren Anwendungsfall zu spezialisieren (z. B. Kundenservice-Ton, Domain-Vokabeln). Open-Weights-Modelle unterstützen vollständiges Fine-Tuning via LoRA, QLoRA oder vollständige Rückausbreitung; die meisten proprietären Modelle beschränken oder verbieten Fine-Tuning.',
            '**Training-Datums-Cutoff.** Das Datum, nach dem ein Modell kein Wissen über Ereignisse oder Informationen hat. GPT-4o hat einen Cutoff von Oktober 2024; Claude 4.6 Sonnet hat Anfang 2025; Gemini 2.5 Pro hat Oktober 2024. Modelle können keine genauen Informationen über Ereignisse nach ihrem Cutoff-Datum bereitstellen.',
            '**Modellgewichte.** Die numerischen Parameter (Milliarden bis Billionen von Zahlen), die während des Modelltrainings gelernt wurden. Gewichte bestimmen das Verhalten, Wissen und Reasoning-Muster des Modells. Open-Weights-Modelle veröffentlichen diese Dateien (~15–800 GB je nach Modellgröße); proprietäre Modelle halten Gewichte geheim.',
          ],
        },
    
        questionDifference: {
          title: 'Was ist der Unterschied zwischen Open-Source- und proprietären LLMs?',
          content: 'Open-Source-LLMs (LLaMA 3.1, Mistral, Qwen) machen Modellgewichte öffentlich verfügbar — Organisationen können sie herunterladen, inspizieren, Fine-tunen und selbst hosten. Proprietäre LLMs (GPT-4o, Claude, Gemini) gehören Vendors und sind nur über APIs zugänglich. Benutzer können proprietäre Gewichte nicht herunterladen oder ändern, profitieren aber von verwalteter Infrastruktur und Vendor-Updates.',
        },
    
        questionPerformance: {
          title: 'Sind Open-Source-LLMs so gut wie proprietäre Modelle?',
          content: 'Bei vielen Aufgaben ja. Die Leistungslücke hat sich auf 7–8 Prozentpunkte bei Reasoning-Benchmarks (MMLU) verengt. Bei Klassifizierung, Zusammenfassung und Domain-spezifischen Aufgaben entsprechen Open-Weights-Modelle wie LLaMA 3.1 70B jetzt proprietären Pendants. Proprietäre Modelle führen immer noch bei komplexem Multi-Step-Reasoning, Agent-Orchestrierung und Multimodal-Input-Handhabung.',
        },
    
        questionWhenToUse: {
          title: 'Wann sollten Unternehmen Open-Source-LLMs verwenden?',
          content: 'Unternehmen sollten Open-Source-LLMs verwenden, wenn Datenschutz obligatorisch ist (Gesundheitswesen, Finanzen, Recht), wenn die Verarbeitung mehr als 10 Millionen Token pro Tag erfolgt, wenn Domain-spezifische Fine-Tuning erforderlich ist oder wenn EU AI Act Compliance On-Premises-Datenresidenz verlangt. Open-Weights-Modelle eliminieren auch Vendor Lock-in und Pro-Token-API-Billing.',
        },
    
        questionCanReplace: {
          title: 'Können Open-Source-LLMs proprietäre AI-Modelle ersetzen?',
          content: 'Für viele Anwendungsfälle ja. Open-Source-LLMs sind produktionsreif für Klassifizierung, Zusammenfassung, Extraktion und Domain-spezifische Aufgaben. Proprietäre Modelle behalten Vorteile bei komplexem Reasoning, Multimodal-Input, Tool-Integration und Zero-Infrastruktur-Bereitstellung. Ein hybrider Ansatz — Routing von Aufgaben basierend auf Kosten-, Datenschutz- und Leistungsanforderungen — übertrifft die Abhängigkeit von einer Modellklasse allein.',
        },
    
        featureComparison: {
          title: 'Quick Feature Comparison',
          columns: ['Funktion', 'Open-Source-LLM', 'Proprietäres LLM'],
          rows: [
            { 'Funktion': 'Kosten', 'Open-Source-LLM': 'Nur Infrastruktur ($0,50–2,00/Stunde Self-Hosted)', 'Proprietäres LLM': 'Pay-per-Token ($0,15–5,00 pro 1 Million Input-Token)' },
            { 'Funktion': 'Kontrolle', 'Open-Source-LLM': 'Vollständig — besitzen Gewichte, können Fine-tunen und ändern', 'Proprietäres LLM': 'Begrenzt — Vendor kontrolliert Modell und Updates' },
            { 'Funktion': 'Setup', 'Open-Source-LLM': 'Komplex — erfordert GPUs, VRAM, DevOps-Fähigkeiten', 'Proprietäres LLM': 'Einfach — API-Schlüssel, nur Netzwerkzugriff' },
            { 'Funktion': 'Leistung', 'Open-Source-LLM': '80–82% (MMLU) — wettbewerbsfähig bei spezifischen Aufgaben', 'Proprietäres LLM': '88–90% (MMLU) — höher bei allgemeinem Reasoning' },
            { 'Funktion': 'Datenschutz', 'Open-Source-LLM': 'Vollständige Kontrolle — keine Daten verlassen Ihre Infrastruktur', 'Proprietäres LLM': 'Provider-abhängig — Daten durchqueren Vendor-Server' },
          ],
          tableFormat: true,
        },
    
        decisionFramework: {
          title: 'Entscheidungsrahmen: Welchen sollten Sie wählen?',
          content: '**Verwenden Sie diesen Rahmen, um in 30 Sekunden zu entscheiden.** Antwort: Passt Ihr Anwendungsfall in eine der unten stehenden Kategorien? Wenn mehrere Kriterien zutreffen, gewichten Sie sie nach Wichtigkeit für Ihr Projekt.',
          items: [
            '**Wählen Sie Open-Source-LLMs, wenn:**',
            '• Datenschutz ist kritisch (Gesundheitswesen, Finanzen, Recht, EU GDPR)',
            '• Sie benötigen vollständige Modellkontrolle und Anpassung (Fine-Tuning, Domain-Spezialisierung)',
            '• Sie verarbeiten 10M+ Token/Tag (Kostenersparnis dominiert in großem Maßstab)',
            '• Sie ohne Internetverbindung arbeiten (U-Boote, Flugzeuge, Offline-Netzwerke)',
            '• EU AI Act Compliance ist erforderlich für High-Risk-AI-Systeme',
            '• Sie möchten Vendor Lock-in vermeiden und Unabhängigkeit bewahren',
            '',
            '**Wählen Sie proprietäre LLMs, wenn:**',
            '• Sie benötigen Frontier-Leistung bei Reasoning und Multi-Step-Aufgaben',
            '• Sie verarbeiten <5M Token/Tag (APIs sind billiger als Infrastruktur)',
            '• Sie wollen Zero-Infrastruktur-Overhead und verwaltete Skalierung',
            '• Sie benötigen Multimodal-Input (Bilder, Audio) Zuverlässigkeit',
            '• Sie benötigen Tool-Integration und Agent-Orchestrierung',
            '• Sie bevorzugen Vendor-verwaltete Safety-Alignment und Updates',
            '• Ihnen fehlen GPU-Ressourcen oder DevOps-Expertise',
            '',
            '**Wählen Sie einen hybriden Ansatz (beide), wenn:**',
            '• Sie haben gemischte Anwendungsfälle: private Arbeit auf Open-Weights, komplexes Reasoning auf proprietär',
            '• Sie können Anfragen intelligently basierend auf Datenschutz-/Kosten-/Latenzanforderungen weiterleiten',
            '• Sie Modelle vor Commitment zu einem Vendor vergleichen möchten',
          ],
        },
    
        quickReference: {
          title: 'Quick Comparison: Top Open-Source vs Proprietäre Modelle in 2026',
          columns: ['Modell', 'Typ', 'Kontextfenster', 'Ungefähre Kosten', 'Am besten für'],
          rows: [
            { 'Modell': 'GPT-4o', 'Typ': 'Proprietär', 'Kontextfenster': '128K Token', 'Ungefähre Kosten': '$5/$15 pro 1 Million Input/Output-Token', 'Am besten für': 'Tool-Integration, Agents, Multimodal-Reasoning' },
            { 'Modell': 'Claude 4.6 Sonnet', 'Typ': 'Proprietär', 'Kontextfenster': '200K Token', 'Ungefähre Kosten': '$3/$15 pro 1 Million Input/Output-Token', 'Am besten für': 'Schreiben, Code Review, strukturiertes Reasoning' },
            { 'Modell': 'Gemini 2.5 Pro', 'Typ': 'Proprietär', 'Kontextfenster': '2M Token', 'Ungefähre Kosten': '$1,25/$2,50 pro 1 Million Input/Output-Token (≤200K)', 'Am besten für': 'Langdokument-Forschung, Google-Integration' },
            { 'Modell': 'LLaMA 3.1 70B', 'Typ': 'Open-Weights', 'Kontextfenster': '131K Token', 'Ungefähre Kosten': '~$2/Stunde auf A100 GPU (Self-Hosted)', 'Am besten für': 'Datenschutz, Fine-Tuning, Kosten in großem Maßstab' },
            { 'Modell': 'Mistral Large 2', 'Typ': 'Open-Weights', 'Kontextfenster': '123K Token', 'Ungefähre Kosten': '~$2/Stunde auf A100 GPU (Self-Hosted)', 'Am besten für': 'Europäische Bereitstellungen, wettbewerbsfähiges Reasoning' },
            { 'Modell': 'Qwen 2.5 72B', 'Typ': 'Open-Weights', 'Kontextfenster': '128K Token', 'Ungefähre Kosten': '~$2/Stunde auf A100 GPU (Self-Hosted)', 'Am besten für': 'Asia-Pacific-Workloads, Chinesische Sprache' },
            { 'Modell': 'Mistral 7B', 'Typ': 'Open-Weights', 'Kontextfenster': '32K Token', 'Ungefähre Kosten': '~$0,50/Stunde auf Consumer GPU (Self-Hosted)', 'Am besten für': 'Testing, Prototypen, kostenempfindliche Arbeit' },
          ],
          tableFormat: true,
        },
    
        openSourceLandscape: {
          title: 'Die Open-Weights-Landschaft in 2026',
          content: [
            '**Open-Source-LLMs ermöglichen Organisationen, Modellgewichte herunterzuladen, zu inspizieren und zu ändern und dann lokal ohne Vendor-Abhängigkeit oder Pro-Token-API-Kosten bereitzustellen.** Die führenden Modelle in 2026 sind Metas LLaMA 3.1, Mistral Large 2, Qwen 2.5 und andere, die unter Community-Lizenzen veröffentlicht wurden.',
            '**Metas LLaMA 3.1 Familie ist der führende Open-Weights-Konkurrent zu proprietären Modellen.** LLaMA 3.1 kommt in drei Größen: 8B (~8GB VRAM für Inferenz), 70B (~40GB VRAM) und 405B (~800GB+ VRAM über mehrere GPUs). Alle drei unterstützen 131K Token-Kontextfenster — entsprechend oder übertreffend viele proprietäre Modelle. LLaMA 3.1 wird auf 15 Billionen Token mehrsprachigen Text trainiert; neuere Varianten unterstützen mehrere Sprachen wettbewerbsfähig.',
            '**Mistral AI bietet zwei starke Kandidaten: Mistral 7B und Mistral Large 2.** Mistral 7B ist ein schlankes 7B-Parameter-Modell mit 32K Kontext, ideal für Consumer-Grade-Inferenz und schnelle Prototypen. Mistral Large 2 skaliert auf 123B Parameter mit 123K Kontext und zielt auf die "Frontier Lite" Leistungsband — konkurriert direkt mit LLaMA 70B und proprietären Modellen. Beide sind unter Mistral Community License für kommerzielle Nutzung verfügbar.',
            '**Qwen 2.5 (Alibaba) und aufstrebende Modelle (Falcon, Phi-4) runden die Landschaft ab.** Qwen 2.5 72B unterstützt 128K Kontext und zeichnet sich bei chinesischen Sprachaufgaben aus; nützlich für Teams, die Asia-Pacific-Märkte bedienen. Kleinere Modelle wie Phi-4 (Microsoft) und Falcon 180B zielen auf kostenempfindliche oder spezialisierte Anwendungsfälle ab. Alle sind herunterladbar, selbst-hostbar und unterstützen Fine-Tuning via LoRA oder vollständiges Training.',
          ],
        },
    
        proprietaryLandscape: {
          title: 'Die proprietäre Landschaft in 2026',
          content: [
            '**Proprietäre LLMs werden ausschließlich über Vendor-kontrollierte APIs zugegriffen; Modellgewichte werden nie veröffentlicht und können nicht heruntergeladen, geändert oder lokal bereitgestellt werden.** Benutzer zahlen Pro-Token-API-Billing und akzeptieren Vendor-Kontrolle über Modell-Updates, Sicherheitsrichtlinien und Leistungsmerkmale.',
            '**OpenAIs GPT-4o bleibt der Reasoning-Leiter.** GPT-4o unterstützt 128K Token-Kontextfenster mit Training-Cutoff Oktober 2024. Es zeichnet sich bei Tool-Use, Agent-Workflows, Multimodal-Input (Bilder, Text) und komplexem Multi-Step-Reasoning aus. API-Preisgestaltung: $5 pro 1 Million Input-Token, $15 pro 1 Million Output-Token (März 2026 Raten). GPT-4o ist nur API; Gewichte werden nie veröffentlicht. Siehe [wie Kontextfenster Ihr AI-System beeinflussen](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=de), um Trade-Offs zu verstehen.',
            '**Anthropics Claude 4.6 Sonnet dominiert Schreib- und Code-Qualitäts-Benchmarks.** Claude unterstützt 200K Token-Kontext — 2× größer als GPT-4o — ermöglicht längere Dokumente und erweiterte Gespräche. Training-Datums-Cutoff: Anfang 2025. API-Preisgestaltung: $3 pro 1 Million Input-Token, $15 pro 1 Million Output-Token. Claude bietet kein öffentliches Fine-Tuning. Anthropic priorisiert Interpretierbarkeit und Safety-Alignment gegenüber Benchmark-Maximierung.',
            '**Googles Gemini 2.5 Pro bietet das größte Kontextfenster: 2M Token.** Dies ermöglicht vollständiges Buch-Längen-Dokument-Verarbeitung, erschöpfende Forschung und erweiterte Multi-Turn-Gespräche. Preisgestaltung: $1,25 pro 1 Million Input-Token (≤200K Kontext), $10 pro 1 Million Output-Token; höhere Raten für >200K Kontext. Gemini integriert sich tief mit Google Workspace, Calendar, Gmail und Web-Suche. Training-Datums-Cutoff: Oktober 2024. Fine-Tuning ist für Gemini-Modelle verfügbar.',
          ],
        },
    
        performanceBenchmarks: {
          title: 'Benchmark-Leistung: Wo die Lücke in 2026 steht',
          content: [
            '**Proprietäre Modelle führen immer noch bei allgemeinem Reasoning (MMLU), aber die Lücke hat sich auf 7–8 Prozentpunkte verengt.** MMLU (Massive Multitask Language Understanding) ist ein breiter Benchmark, der 57 akademische Disziplinen abdeckt. Um zu verstehen, warum [wie LLMs tatsächlich funktionieren](/prompt-engineering/how-llms-actually-work?lang=de) wichtig für Reasoning-Fähigkeit ist, lesen Sie unseren tiefgehenden Bericht zur Transformer-Architektur. Aktuelle Scores:',
            '',
            'GPT-4o: 88,7% (OpenAI, 2024)',
            'Claude 3.5 Sonnet: 88,3% (Anthropic, 2024)',
            'LLaMA 3.1 70B: 80,5% (Meta, 2024)',
            'Mistral Large 2: 81,2% (Mistral AI, 2024)',
            'Qwen 2.5 72B: 82,1% (Alibaba, 2024)',
            '',
            '**Die Leistungslücke zwischen Open-Weights- und proprietären Modellen hat sich von 15–20 Prozentpunkten in 2022 auf 7–8 Punkte bei Reasoning-Aufgaben in 2026 verengt.** Bei spezialisierten Aufgaben (Programmierung, Mathematik, Zusammenfassung, Klassifizierung) entsprechen Open-Weights-Modelle jetzt proprietären Pendants oder übertreffen sie.',
            '',
            'Die verbleibende Lücke ist hauptsächlich bei abstraktem Reasoning und [Tool-Use-Orchestrierung](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=de). — Touvron et al., "Llama 3 Herd of Models", 2024',
            '',
            '**Wichtiger Vorbehalt:** Benchmarks messen enge Fähigkeiten. Task-spezifische Leistung variiert: bei Klassifizierung, Zusammenfassung und Extraktion entspricht LLaMA 3.1 70B oft oder übertrifft GPT-4o. Für komplexes Multi-Step-Reasoning (Algebra, lange Gedankenketten), behalten proprietäre Modelle einen Vorteil. Der einzige zuverlässige Benchmark ist das Testen bei Ihrer tatsächlichen Aufgabe — siehe [wie Sie das richtige Modell für Ihren Anwendungsfall wählen](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=de).',
          ],
        },
    
        costAnalysis: {
          title: 'Kostenanalyse: API-Preisgestaltung vs. Self-Hosting',
          content: [
            '**Direkter Kostenvergleich: proprietäre APIs dominieren bei niedrigem Volumen; Open-Weights Self-Hosting gewinnt in großem Maßstab.** Der Überkreuzungspunkt liegt typischerweise bei 5–10M Token pro Tag. Unter dieser Schwelle begünstigen API-Einfachheit und keine Infrastrukturkosten proprietär. Darüber gewinnt Open-Weights Self-Hosting bei Kosten.',
            '',
            'API-Preisgestaltung ab März 2026:',
            '',
            'Self-Hosting-Infrastruktur-Kosten: NVIDIA A100 80GB mietet für ~$2/Stunde in der Cloud; RTX 4090 Consumer-Hardware kostet ~$1,50/Stunde in Elektrizität + Amortisierung (3-Jahre Lebensdauer). Für Mistral 7B, Inferenz-Durchsatz ist ~50–100 Token/Sekunde pro GPU oder ~180–360M Token/Tag pro GPU. Mistral Large 2 oder LLaMA 70B: ~20–30 Token/Sekunde pro A100 oder ~1,7–2,6M Token/Tag. Bei diesen Durchsätzen:',
            '',
            '**Bei 5M Token/Tag:** A100 Self-Hosting kostet ~$2,50/Tag. API-Kosten für Claude Sonnet: 5M × ($3 + $15) / 1M = $90/Tag (angenommen 50% Input, 50% Output durchschnittlich). APIs immer noch billiger.',
            '',
            '**Bei 50M Token/Tag:** Benötigen 20 A100s Self-Hosting = $50/Tag. API-Kosten: $900/Tag. Open-Weights gewinnt entscheidend.',
            '',
            '**Bei 100M Token/Tag:** Benötigen 40 A100s = $100/Tag. API-Kosten: $1.800/Tag. Open-Weights ist 18× billiger.',
            '',
            'Überprüfen Sie Preisgestaltung: [OpenAI Pricing](https://openai.com/pricing) · [Anthropic Pricing](https://www.anthropic.com/api) · [Google Pricing](https://ai.google.dev/pricing) — Raten ändern sich vierteljährlich. Siehe [Token, Kosten und Limits erklärt](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=de) für detaillierter Token-Kosten-Aufschlüsselung.',
          ],
          columns: ['Modell', 'Input (pro 1M Token)', 'Output (pro 1M Token)'],
          rows: [
            { 'Modell': 'GPT-4o', 'Input (pro 1M Token)': '$5,00', 'Output (pro 1M Token)': '$15,00' },
            { 'Modell': 'Claude 4.6 Sonnet', 'Input (pro 1M Token)': '$3,00', 'Output (pro 1M Token)': '$15,00' },
            { 'Modell': 'Gemini 2.5 Pro', 'Input (pro 1M Token)': '$1,25 (≤200K ctx)', 'Output (pro 1M Token)': '$2,50' },
          ],
          tableFormat: true,
        },
    
        privacyAndDataSovereignty: {
          title: 'Datenschutz, Datensouveränität und der EU AI Act',
          content: [
            '**Open-Weights-Modelle lokal bereitgestellt = keine Daten verlassen Ihre Infrastruktur.** Wenn Sie LLaMA 3.1 über Ollama auf Ihrer privaten GPU ausführen, verlassen keine Inferenzdaten, Metadaten oder Abfrage-Logs Ihr Netzwerk. Dies ist Datensouveränität: Sie behalten vollständige Kontrolle. Proprietäre APIs (OpenAI, Anthropic, Google) erfordern, dass Sie Anfragen über das Netzwerk an externe Server senden. Selbst mit vertraglicher Datenlöschung, die Daten durchquert kurzzeitig Vendor-Infrastruktur und wird für Compliance protokolliert.',
            '**Der EU AI Act (2024) bezeichnet bestimmte LLM-Anwendungen als "hochriskant", die Risicodokumentation, Bias-Tests und Audit-Trails erfordern.** Kategorien umfassen Systeme, die bedeutende Entscheidungen treffen (Einstellung, Kredit, Rechtswegermittlung, Vorteilsbestimmung). Hochriskante Systeme müssen Aufzeichnungen darüber führen, wie Entscheidungen getroffen werden, Nicht-Diskriminierung beweisen und menschliche Aufsicht unterstützen. Open-Weights-Modelle On-Premises erleichtern dies — Sie kontrollieren das Audit-Trail und die Datenspeicherung. Proprietäre APIs erschweren dies — Sie verlassen sich auf Vendor-Compliance-Berichte, die möglicherweise für regulierte Branchen unzureichend sind.',
            '**Für regulierte Branchen (Gesundheitswesen, Finanzen, Rechtsdienstleistungen) ist Open-Weights oft obligatorisch.** HIPAA (Gesundheitswesen), SOX (Finanzen) und Anwalt-Klient-Berechtigungsprivileg erfordern Datenresidenz — d. h. Daten können Ihre Gerichtsbarkeit nicht verlassen. Proprietäre APIs mit Sitz in den USA oder anderen Ländern verletzen diese Anforderungen. Teams in diesen Sektoren stellen typischerweise Open-Weights-Modelle (LLaMA, Mistral oder kommerzielle Verteilungen) auf On-Premises-Infrastruktur bereit.',
          ],
        },
    
        customizationAndFineTuning: {
          title: 'Fine-Tuning und Anpassung: Wo Open-Weights gewinnen',
          content: [
            '**Open-Weights-Modelle erlauben vollständiges Fine-Tuning; proprietäre Modelle beschränken oder verbieten es.** Fine-Tuning bedeutet Umschulung der Modellgewichte auf Ihren eigenen Daten, um das Modell für Ihre Domain zu spezialisieren. Sie können LoRA (Low-Rank Adaptation) für effizientes Fine-Tuning, QLoRA für quantisiertes Training oder vollständiges Backpropagation-Training verwenden, wenn Sie die Compute haben. Nach Fine-Tuning gehört das Modell Ihnen — Sie besitzen die resultierenden Gewichte, können sie überall bereitstellen und können sie offline aktualisieren.',
            '**Proprietäre Fine-Tuning-Verfügbarkeit:** OpenAI Fine-Tuning-API funktioniert nur für GPT-4o mini, GPT-4 (ältere Modelle). Nicht verfügbar für GPT-4o Flagship. Anthropic bietet kein Fine-Tuning für Claude über API. Google bietet begrenzt Fine-Tuning für Gemini. Keine dieser Optionen erlaubt Besitz der Fine-Tuned-Gewichte — Sie mieten eine Fine-Tuned-Kopie des proprietären Modells.',
            '**Sicherheitsüberlegung:** Bei Fine-Tuning auf proprietären APIs werden Ihre Trainingsdaten auf Vendor-Server hochgeladen. Für sensitive Domains verletzt dies Compliance-Regeln. Open-Weights Fine-Tuning bleibt On-Premises. Siehe [Prompt-Injection und Sicherheit](/prompt-engineering/prompt-injection-and-security?lang=de) für zusätzliche Angriffsflächen-Überlegungen bei Verwendung externer APIs.',
          ],
        },
    
        comparisonTable: {
          title: 'Schlüsseldifferenzen zwischen Open-Source- und proprietären LLMs',
          content: '**Open-Weights-Modelle kosten in großem Maßstab weniger und ermöglichen vollständige Anpassung; proprietäre Modelle liefern schnellere Time-to-Value und verwaltete Infrastruktur zu höheren Pro-Token-Kosten.** Unter 5M Token/Tag sind proprietäre APIs üblicherweise billiger. Über 10M Token/Tag gewinnt Self-Hosted Open-Weights bei Kosten. Wählen Sie basierend auf Ihrem Volumen, Datenschutzanforderungen und Infrastruktur-Bereitschaft.',
          columns: ['Dimension', 'Open-Weights-Modelle', 'Proprietäre Modelle'],
          rows: [
            { 'Dimension': 'Kostenmodell', 'Open-Weights-Modelle': 'Self-Host: $0,50–2,00/Stunde Infrastruktur. Kostenlos nach Bereitstellung. Kein Pro-Token-Billing.', 'Proprietäre Modelle': 'API-Billing: $0,15–5,00 pro 1M Input-Token; $0,30–15,00 pro 1M Output-Token. Skaliert mit Nutzung.' },
            { 'Dimension': 'Leistungsobergrenze', 'Open-Weights-Modelle': 'Beste Open-Weights (LLaMA 70B, Mistral Large): MMLU 80–82%. Wettbewerbsfähig bei spezifischen Aufgaben, hinter bei abstraktem Reasoning.', 'Proprietäre Modelle': 'Frontier (GPT-4o, Claude, Gemini): MMLU 88–90%. Höhere Obergrenze bei Reasoning, Agents, Multimodal.' },
            { 'Dimension': 'Kontextfenster', 'Open-Weights-Modelle': 'LLaMA 3.1: 131K. Mistral Large: 123K. Qwen: 128K. Ausreichend für lange Dokumente.', 'Proprietäre Modelle': 'GPT-4o: 128K. Claude: 200K. Gemini 2.5: 2M. Größere Fenster ermöglichen längere Forschung.' },
            { 'Dimension': 'Datenschutz', 'Open-Weights-Modelle': 'Vollständige Datensouveränität. Keine Daten verlassen Infrastruktur. Keine Vendor-Protokollierung.', 'Proprietäre Modelle': 'Daten durchqueren Vendor-Server. Vertragliche Löschung versprochen, aber kurzes Exponieren während Verarbeitung.' },
            { 'Dimension': 'Fine-Tuning', 'Open-Weights-Modelle': 'Vollständiges Fine-Tuning unterstützt (LoRA, QLoRA, vollständiges Training). Sie besitzen Gewichte. Domain-Anpassung.', 'Proprietäre Modelle': 'Begrenzt (nur OpenAI Mini-Modelle) oder nicht verfügbar (Anthropic Claude). Sie besitzen resultierende Gewichte nicht.' },
            { 'Dimension': 'Datensouveränität', 'Open-Weights-Modelle': 'On-Premises-Bereitstellung: vollständige Souveränität. EU AI Act konform. HIPAA/SOX/Rechts-Compliance erreichbar.', 'Proprietäre Modelle': 'API-abhängig: Datenspeicherort unklar. Schwieriger zu beweisen, dass Compliance für regulierte Branchen erfüllt ist.' },
            { 'Dimension': 'Inferenz-Geschwindigkeit', 'Open-Weights-Modelle': 'Hängt von Hardware ab. A100: 20–30 Token/Sec (70B). RTX 4090: 10–15 Token/Sec.', 'Proprietäre Modelle': 'Optimierte Server: 30–50+ Token/Sec. Deterministisch. Vendor verwaltet Optimierung.' },
            { 'Dimension': 'Support', 'Open-Weights-Modelle': 'Community-getrieben. Dokumentation gut; Vendor SLA nicht verfügbar. Sie unterstützen sich selbst.', 'Proprietäre Modelle': 'Vendor-Support enthalten. API SLAs, Incident Response, Uptime-Garantien.' },
            { 'Dimension': 'Update-Frequenz', 'Open-Weights-Modelle': 'Offline. Neue Versionen veröffentlicht; Sie wählen, wann Sie übernehmen. Keine erzwungenen Updates.', 'Proprietäre Modelle': 'Serverseitig. Vendor aktualisiert Modelle; Sie passen an oder verwenden versionierte API-Endpoints.' },
            { 'Dimension': 'Vendor Lock-in', 'Open-Weights-Modelle': 'Kein Lock-in. Stellen Sie überall bereit. Wechseln Sie Vendors oder Self-Host frei. Besitzen Sie Compute.', 'Proprietäre Modelle': 'Mäßig bis hohes Lock-in. Modellverhalten, APIs und Preisgestaltung unter Vendor-Kontrolle. Wechselkosten durch Migrations-Aufwand.' },
          ],
          tableFormat: true,
        },
    
        promptEngineeringImplications: {
          title: 'Open Source vs. proprietäre LLMs für Prompt Engineering',
          content: [
            '**Open-Weights-Modelle ermöglichen tiefere Prompt-Experimente zu niedrigeren Kosten.** Sie können denselben Prompt 100 Mal gegen eine lokale LLaMA 3.1-Instanz ausführen und über Wording, Temperatur und Struktur ohne Pro-Token-Billing iterieren. Fine-Tune das Modell auf Prompt-Response-Paaren aus Ihrer Domain. Experimentieren Sie mit Jailbreaks und Grenzfällen in Ihrer privaten Infrastruktur. Diese Sandbox-Umgebung ist ideal für Forschung, Prototypen und Verständnis des Modellverhaltens.',
            '**Proprietäre APIs sind schneller zu testen und einfacher zu skalieren.** Sie schreiben einen Prompt, rufen die GPT-4o oder Claude-API auf und erhalten Ergebnisse in Millisekunden mit Null-Infrastruktur-Setup. Keine Notwendigkeit, VRAM, Quantisierung oder Modell-Downloads zu verwalten. Für schnelle A/B-Tests, Produktions-Bereitstellung und Handhabung variabler Traffic, reduzieren proprietäre Modelle operative Komplexität.',
            '**Hybrider Ansatz: Prototype auf Open-Weights, validiere auf proprietär.** Entwickeln und verfeinern Sie Prompts lokal mit LLaMA 3.1 8B (schnelle Iteration, keine Kosten). Sobald die Prompt-Strategie gesperrt ist, testen Sie auf GPT-4o oder Claude 4.6, um Frontier-Leistung zu bestätigen. Stellen Sie den besseren Performer zur Produktion bereit. Dies kombiniert Open-Weights-Flexibilität mit proprietärer Zuverlässigkeit.',
          ],
        },
    
        whenOpenSource: {
          title: 'Wann Open-Source-Modelle zu verwenden',
          content: '**Wählen Sie Open-Weights, wenn Datenschutz, Kosten in großem Maßstab oder tiefe Anpassungsanforderungen Ihre Zwänge dominieren.** Open-Weights zeichnen sich aus in:',
          items: [
            '**Sensitive Daten (Gesundheitswesen, Finanzen, Recht):** Patientenakten, Finanzdaten, Anwalt-Klient-Kommunikation können externe APIs nicht durchqueren. Open-Weights lokal bereitgestellt hält Daten in Ihrer Kontrolle und erreicht Compliance. Verwenden Sie LLaMA 3.1 oder Mistral für HIPAA-, GDPR- und Anwalt-Klient-Berechtigungs-Compliance. Kombinieren Sie mit [Sicherheitskontrollen gegen Prompt-Injection](/prompt-engineering/prompt-injection-and-security?lang=de), um Modell-Eingaben zu schützen.',
            '**High-Volume-Automatisierung (50M+ Token/Tag):** Über ~10M Token/Tag wird Self-Hosting billiger als proprietäre APIs. Verwenden Sie Open-Weights für High-Volume-Klassifizierung, Extraktion, Zusammenfassung oder Datenverarbeitungs-Pipelines, wo [API-Kosten unerschwinglich wären](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=de).',
            '**Domain-Anpassung und Fine-Tuning:** Sie haben gekennzeichnete Datensätze und müssen das Modell auf Ihre Terminologie, Schreibstil oder Task-Verteilung spezialisieren. Open-Weights erlauben LoRA, QLoRA oder vollständiges Fine-Tuning. Proprietäre APIs verbieten oder beschränken Anpassung.',
            '**Geografische oder Netzwerk-Zwänge:** Sie benötigen Inferenz ohne Internetverbindung (U-Boote, Flugzeuge, Remote-Standorte). Open-Weights läuft offline. Proprietäre APIs erfordern Netzwerkverbindung.',
            '**EU AI Act Compliance (High-Risk-Bereitstellungen):** Einstellungssysteme, Kreditentscheidungen, Vorteilsbestimmung. Audit-Trails, Risicodokumentation und On-Premises-Datenresidenz sind mit Open-Weights einfacher. Proprietäre APIs erschweren Compliance-Nachweis.',
            '**Kostenvorhersagbarkeit:** Open-Weights-Infrastruktur-Kosten sind fest (Hardware + Elektrizität). Proprietäre APIs skalieren unvorhersehbar mit Nutzung. Für kostenempfindliche Organisationen ist Open-Weights-Budgetierung klarer.',
          ],
        },
    
        whenProprietary: {
          title: 'Wann proprietäre Modelle zu verwenden',
          content: '**Wählen Sie proprietär, wenn absolute Leistung, verwaltete Infrastruktur oder Safety-Alignment am meisten wichtig ist.** Proprietär zeichnet sich aus in:',
          items: [
            '**Komplexes Multi-Step-Reasoning:** Agent-Workflows, komplexe Forschungs-Synthese und abstrakte Problemlösung. GPT-4o, Claude 4.6 und Gemini 2.5 behalten eine 7–8 Punkt-Kante bei MMLU. Open-Weights schließen die Lücke bei spezifischen Aufgaben, liegen aber bei allgemeinem Reasoning zurück.',
            '**Langkontext-Dokument-Forschung (1M+ Token):** Gemini 2.5 Pro ist das einzige Produktions-Modell mit 2M Token-Kontext. Für die Verarbeitung ganzer Bücher, Forschungs-Korpora oder erschöpfender Rechtsprechung entspricht kein Open-Weights-Modell. Verwenden Sie proprietär, wenn die Dokumentenlänge Open-Weights-Fähigkeiten übersteigt.',
            '**Zero-Infrastruktur-Overhead:** Ihnen fehlen GPU-Ressourcen, DevOps-Expertise oder On-Call-Coverage für Modell-Infrastruktur. Proprietäre APIs verwalten Verfügbarkeit, Skalierung und Optimierung. Zahlen Sie für Einfachheit; vermeiden Sie operative Last.',
            '**Tool-Integration und Agents:** OpenAI führt bei Tool-Use, Function-Calling und Multi-Step-Agent-Orchestrierung. Wenn Ihr System zuverlässiges Function-Routing und Multi-Turn-Agent-Verhalten erfordert, ist GPT-4o die pragmatische Wahl.',
            '**Verwaltete Safety und Alignment:** Proprietäre Vendor investieren schwer in Constitutional AI, RLHF und Instruction-Following. Für Chatbots, Kundenservice und User-Facing-Systeme sind proprietäre Modelle typischerweise sicherer Out-of-the-Box.',
            '**Multimodal-Input (Bilder, Audio):** GPT-4o und Claude 4.6 Sonnet verarbeiten Bild-Eingabe zuverlässig. Multimodal-Open-Weights-Modelle existieren, sind aber weniger reif. Verwenden Sie proprietär für zuverlässige Vision-Language-Aufgaben.',
          ],
        },
    
        hybridArchitecture: {
          title: 'Hybrid-AI-Architekturen (Open + Closed Modelle)',
          content: '**Organisationen können Hybrid-AI-Architekturen verwenden, die Anfragen an Open-Weights-Modelle für sensitive Daten und kostenempfindliche Aufgaben weiterleiten, während komplexes Reasoning und Multimodal-Arbeit an proprietäre Modelle verteilt werden.** Dieser Ansatz kombiniert die Kosteneffizienz, den Datenschutz und die Anpassung von Open-Weights mit der Leistung und verwalteten Infrastruktur von proprietären LLMs.',
          items: [
            '**Datenschutz-sensitive Daten → lokal Open-Weights; komplexes Reasoning → proprietäre API.** Leiten Sie Patientenakten, Finanzdaten und Rechtsdokumente an LLaMA 3.1 lokal über Ollama weiter. Leiten Sie Multi-Step-Forschungs-Synthese, Code-Generierung und Agent-Orchestrierung an GPT-4o oder Claude 4.6 Sonnet weiter. Dieser Hybrid-Ansatz erreicht Compliance bei Aufrechterhaltung der Frontier-Leistung.',
            '**Kostenempfindliche Batch-Verarbeitung → lokal Open-Weights; interaktive Anfragen → proprietäre API.** Für Background-Aufgaben (Klassifizierung, Extraktion, Zusammenfassung) verwenden Sie Self-Hosted LLaMA 3.1 70B (~$2/Stunde auf A100). Für Real-Time-User-Anfragen, wo Latenz wichtig ist, verwenden Sie GPT-4o API ($5/$15 pro 1M Token). Hybrid reduziert Gesamtkosten und Latenz.',
            '**Multi-Model-Vergleich und Consensus → PromptQuorum.** Verteilen Sie einen einzelnen [Prompt](/prompt-engineering/what-is-prompt-engineering?lang=de) gleichzeitig an lokal Ollama, GPT-4o, Claude 4.6 und Gemini 2.5 Pro über PromptQuorum. Vergleichen Sie Outputs nebeneinander auf Qualität, Latenz und Kosten. Wählen Sie den Gewinner für Produktion oder kombinieren Sie Outputs für Ensemble-Reasoning.',
            '**Testing und Staging → Open-Weights; Produktions-Serving → proprietär.** Verwenden Sie LLaMA 3.1 8B lokal für schnelle Prototypen und Entwicklung. Sobald Prompt und Pipeline validiert sind, upgraden Sie zu GPT-4o oder Claude für Production-Traffic, wo Zuverlässigkeit, Tool-Integration und Safety-Garantien am meisten wichtig sind.',
          ],
        },
    
        nuancedTakes: {
          title: 'Wo die konventionelle Weisheit falsch ist',
          content: '**Open-Weights ist nicht immer billiger als proprietäre APIs.** Bei <5M Token/Tag sind proprietäre APIs (GPT-4o mini, Claude Haiku, Gemini Flash) oft billiger, da Infrastruktur-Kosten (GPU-Amortisierung, Elektrizität, DevOps-Arbeit) API-Billing übersteigen. Nur über 10M Token/Tag wird Open-Weights Self-Hosting kostenoptimal.',
          items: [
            '**Die Leistungslücke ist task-spezifisch, nicht universell.** Proprietäre Modelle führen bei MMLU (Reasoning) um 7–8 Punkte. Aber bei Klassifizierung, Zusammenfassung, Extraktion und vielen Domain-Aufgaben entspricht LLaMA 3.1 70B proprietären Modellen oder übertrifft sie. "Proprietär ist besser" ist zu breit. Benchmark Ihre tatsächliche Aufgabe.',
            '**"Open Source" Lizenzierung ist komplex und oft nicht wirklich Open Source.** LLaMA, Mistral und Qwen sind nicht OSI-konform Open Source — sie sind "Open Weights" unter nicht-Standard-Lizenzen. Sie "Open Source" zu nennen ist irreführend und lädt zu Rechtsverwirung ein. Klären Sie Lizenzierung mit Rat bevor Sie sich auf legale Schutzmaßnahmen verlassen.',
            '**Proprietär ist nicht immer sicherer oder besser aligned.** [Alle Modelle halluzinieren](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de). Proprietäres Training-Data, Cutoffs und Constitutional AI verhindern nicht Jailbreaking, [Prompt-Injection](/prompt-engineering/prompt-injection-and-security?lang=de) oder Missbrauch. Open-Weights können Fine-Tuned werden, um proprietäres Alignment zu entsprechen oder zu übertreffen. Safety ist eine Eigenschaft der Bereitstellung und Schutzmaßnahmen, nicht der Modellklasse.',
          ],
        },
    
        keyTerms: {
          title: 'Schlüsselbegriffe',
          items: [
            '[Open Weights](/prompt-engineering/prompt-engineering-glossary?lang=de#open-weights) — Modellgewichte sind herunterladbar, aber möglicherweise unter Lizenz beschränkt',
            '[Fine-Tuning](/prompt-engineering/prompt-engineering-glossary?lang=de#fine-tuning) — Umschulung von Modellgewichten auf Domain-spezifischen Daten',
            '[LoRA](/prompt-engineering/prompt-engineering-glossary?lang=de#lora) — Effizientes Fine-Tuning über Low-Rank-Adaptation (5–10% von vollständigen Trainingskosten)',
            '[RAG](/prompt-engineering/prompt-engineering-glossary?lang=de#rag) — Retrieval-Augmented Generation; Verankerung von LLM-Ausgaben in externen Dokumenten',
            '[Context Window](/prompt-engineering/prompt-engineering-glossary?lang=de#context-window) — Maximale Token-Kapazität für Input + Output kombiniert',
            '[VRAM](/prompt-engineering/prompt-engineering-glossary?lang=de#vram) — GPU-Speicher erforderlich für Modell-Inferenz',
          ],
        },
    
        promptExample: {
          title: 'Prompt-Struktur in der Praxis',
          content: [
            '[Bad Prompt] "Welches ist besser, Open Source oder GPT-4o?"',
            '[Good Prompt] "Ich muss 20M Token/Tag von Kundenservice-Tickets verarbeiten. Ich kann Daten nicht außerhalb der EU senden. Vergleichen Sie Open-Weights (LLaMA 3.1 70B Self-Hosted) vs. proprietär (GPT-4o über API) für diesen Anwendungsfall: Infrastruktur-Kosten bei 20M Token/Tag, GDPR-Datenresidenz-Compliance, Fine-Tuning-Machbarkeit und erwartete Qualität bei Ticket-Klassifizierungs-Aufgaben einbeziehen."',
          ],
        },
    
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Fundamentals: AI Limitations and Structural Constraints](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de) — Warum sowohl proprietäre als auch Open-Weights-Modelle fundamentale Einschränkungen wie Halluzination und Kontextgrenzen teilen',
            '[Fundamentals: How LLMs Actually Work](/prompt-engineering/how-llms-actually-work?lang=de) — Verstehen von Transformer-Architektur erklärt, warum Open-Weights- und proprietäre Modelle den gleichen Core-Mechanismen teilen',
            '[Fundamentals: GPT-4o, Claude, or Gemini? How to Pick the Right Model](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=de) — Detaillierter Vergleich von Frontier-proprietären Modellen',
            '[Techniques: RAG Explained — Retrieval-Augmented Generation](/prompt-engineering/rag-explained?lang=de) — Wie man jedes Modell (proprietär oder Open-Weights) mit externem Wissen erweitert',
            '[Fundamentals: Tokens, Costs & Limits](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=de) — Detaillierte Kostenanalyse und Token-Ökonomie',
            '[Fundamentals: Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security?lang=de) — Sicherheitsüberlegungen für beide Modellklassen',
          ],
        },
    
        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Ist Llama 3.1 wirklich Open Source oder nur Open-Weights?',
              a: 'Nur Open-Weights. LLaMA 3.1 veröffentlicht Modellgewichte unter Llama Community License 2.1, die nicht OSI-konform ist. Die Lizenz erlaubt kommerzielle Nutzung, beschränkt aber die Benennung von Derivaten als "LLaMA," erfordert Attribution und enthält Non-Compete-Klauseln. Echte Open-Source-Lizenzen (Apache 2.0, MIT, GPL) haben keine dieser Einschränkungen. LLaMA ist permissiver als geschlossener proprietärer Zugriff, ist aber nicht rechtlich "Open Source."',
            },
            {
              q: 'Was ist billiger in 2026 — Self-Hosting von Llama oder Nutzung der GPT-4o API?',
              a: 'Es hängt vom Volumen ab. Unter 5M Token/Tag ist GPT-4o API (oder GPT-4o mini) billiger, da Infrastruktur-Kosten API-Billing übersteigen. Bei 5–10M Token/Tag gleichen sich Kosten aus. Über 10M Token/Tag gewinnt Self-Hosting LLaMA 3.1 bei Kosten. Bei 100M Token/Tag ist Self-Hosting 10–20× billiger. Versteckte Faktoren: GPU-Amortisierung, Elektrizität (~$0,10/kWh) und DevOps-Arbeit kippen oft Grenzfälle zur API.',
            },
            {
              q: 'Betrifft der EU AI Act Open-Source-LLMs?',
              a: 'Ja, abhängig von der Bereitstellung. Der EU AI Act (2024) bezeichnet "High-Risk" AI-Systeme — Einstellung, Kreditvergabe, Rechtsentscheidung — als erforderlich für Risicodokumentation, Bias-Tests und Audit-Trails. Open-Weights On-Premises erleichtern Compliance, da Sie Daten und Logs kontrollieren. Proprietäre APIs zwingen zu Abhängigkeit von Vendor-Bescheinigungen. Allzweck-AI-Modelle mit >10^25 FLOP Trainingscompute sehen sich zusätzlichen Transparenzpflichten gegenüber. Konsultieren Sie Compliance-Rat für regulierte Sektoren.',
            },
            {
              q: 'Welches Open-Source-LLM ist GPT-4o in 2026 am nächsten?',
              a: 'LLaMA 3.1 70B und Mistral Large 2 sind am nächsten, aber Lücken bleiben. Bei MMLU (Reasoning-Benchmark) erzielt GPT-4o 88,7% vs. LLaMA 3.1 70B bei 80,5% und Mistral Large bei 81,2%. Bei spezifischen Aufgaben (Klassifizierung, Zusammenfassung, Extraktion) entspricht Open-Weights jetzt proprietär. Die Lücke verengt sich ~2–3 Punkte pro Jahr; Konvergenz bei Reasoning-Aufgaben ist in 18–24 Monaten wahrscheinlich.',
            },
            {
              q: 'Kann ich GPT-4o Fine-Tunen?',
              a: 'Nein. OpenAI Fine-Tuning ist nur für GPT-4o mini, GPT-4 und gpt-3.5-turbo verfügbar — nicht GPT-4o selbst. Anthropic bietet kein Fine-Tuning für Claude an. Google bietet Fine-Tuning für Gemini an. Open-Weights-Modelle (LLaMA, Mistral, Qwen) unterstützen vollständiges Fine-Tuning via LoRA, QLoRA oder vollständiges Gradient-Training — Sie besitzen die resultierenden Gewichte.',
            },
            {
              q: 'Welche Hardware benötige ich, um LLaMA 3.1 70B lokal zu betreiben?',
              a: 'Vollständige Präzision: ~40GB VRAM (A100 80GB oder dual RTX 3090/4090). Quantisiert 4-Bit über Ollama: ~16–20GB VRAM (einzelner RTX 4090 24GB). LLaMA 3.1 8B läuft auf Consumer-Hardware (~8GB VRAM, RTX 3060 oder Apple M2 Pro). Ollama verarbeitet Quantisierung und Modell-Management automatisch — empfohlen für die meisten lokalen Bereitstellungen.',
            },
            {
              q: 'Kann ich Open-Source-LLMs auf einem MacBook ausführen?',
              a: 'Ja. Apple Silicon (M1/M2/M3/M4/M5) Macs können Open-Weights-Modelle über Ollama oder LM Studio ausführen. Die unified Memory-Architektur teilt RAM mit GPU — ein M2 Pro mit 16GB führt LLaMA 3.1 8B mit 10–15 Token/Sec aus. M3 Max mit 128GB Speicher kann LLaMA 3.1 70B in 4-Bit-Quantisierung ausführen. Leistung ist langsamer als ein dedizierter GPU-Server, aber lebensfähig für Entwicklung und persönliche Nutzung.',
            },
            {
              q: 'Haben Open-Source-LLMs die gleichen Einschränkungen wie proprietäre?',
              a: 'Ja bei Fundamentalen: beide halluzinieren, haben Wissens-Cutoffs, Kontextfenster-Grenzen und Reasoning-Grenzen. Open-Weights können nicht serverseitig gepatcht werden — Gewichts-Updates erfordern eine neue Veröffentlichung und Umschulung. Proprietäre Modelle können inkrementell ohne Benutzer-Aktion verbessert werden. Fine-Tuning von Open-Weights kann spezifische Einschränkungen (Domain-Wissen, Ton) mindern, kann aber strukturelle Zwänge wie Wissens-Cutoff oder Halluzinations-Risiko nicht überwinden.',
            },
            {
              q: 'Welches Open-Weights-Modell ist 2026 am besten für Programmierung?',
              a: 'LLaMA 3.1 70B und Mistral Large 2 sind die stärksten Open-Weights-Programmierungs-Modelle. Bei HumanEval (Code-Generierungs-Benchmark) erzielen sie 73–78%, verglichen mit GPT-4o bei ~90% und Claude 4.6 Sonnet bei ~87%. Für Python, SQL und strukturierte Ausgabe ist Open-Weights wettbewerbsfähig. Für komplexes Algorithmus-Design und Multi-File-Reasoning behalten proprietäre Modelle einen signifikanten Vorteil.',
            },
            {
              q: 'Kann ich Open-Source-LLMs für kommerzielle Anwendungen nutzen?',
              a: 'Ja. LLaMA, Mistral und Qwen erlauben ausdrücklich kommerzielle Nutzung unter ihren Lizenzen. Schlüssel-Zwänge: können Derivate nicht "LLaMA" nennen (müssen umbenennen); müssen Lizenz-Attribution einschließen; LLaMA 2 beschränkte Organisationen mit >700M monatlichen aktiven Benutzern (entfernt in LLaMA 3.x). Die meisten Teams stellen Open-Weights intern bereit (private Inferenz), was Benennungs-Probleme ganz vermeidet.',
            },
            {
              q: 'Was ist LoRA und warum spielt es eine Rolle für Open-Weights Fine-Tuning?',
              a: 'LoRA (Low-Rank Adaptation) ist ein Fine-Tuning-Methode, die nur einen kleinen Satz von Adapter-Gewichten trainiert (~1–5% der Modellparameter) anstelle von vollständiger Rückausbreitung über alle Layer. Dies reduziert Trainingskosten 5–10× vs. vollständigem Fine-Tuning mit minimalem Qualitätsverlust. QLoRA erweitert dies mit 4-Bit-Quantisierung, ermöglicht Fine-Tuning auf Consumer-GPUs (16–24GB VRAM). LoRA ist der Standard-Ansatz zur Anpassung von LLaMA und Mistral an Domain-spezifische Aufgaben ohne vollständiges Umtraining.',
            },
          ],
        },
    
        sources: {
          title: 'Quellen',
          items: [
            'Meta AI, "Llama 3 Herd of Models" (Touvron et al., 2024) — Architektur, Kontextfenster, Benchmark-Scores und Trainings-Daten-Dokumentation',
            'Mistral AI, Model Cards and Technical Documentation (2024) — Mistral Large 2 und Mistral 7B Spezifikationen',
            'Hendrycks et al., "Measuring Massive Multitask Language Understanding" (2021) — MMLU-Benchmark-Definition und Baseline-Scores. arXiv:2009.03300',
            'Chen et al., "Evaluating Large Language Models Trained on Code" (2021) — HumanEval-Benchmark für Code-Generierung. arXiv:2107.03374',
            'European Union, "Artificial Intelligence Act" (2024) — High-Risk-AI-System-Kategorien, GPAI-Modell-Verpflichtungen und Compliance-Anforderungen',
            'Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models" (2021) — LoRA-Methoden-Definition und Effizienz-Ergebnisse. arXiv:2106.09685',
            'Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs" (2023) — QLoRA-Methode und Consumer-GPU-Fine-Tuning-Ergebnisse. arXiv:2305.14314',
          ],
        },
      },
    },
    fr: {
      theme: 'Techniques',
      title: 'LLMs open source vs propriétaires',
      intro: 'Les modèles open-weights comme LLaMA 3.1 et Mistral offrent contrôle et économies ; les modèles propriétaires comme GPT-4o et Claude 4.6 Sonnet livrent des performances de pointe. Les deux catégories convergent en capacité, mais divergent en accès, personnalisation et exigences de conformité.',
      metaDescription: 'LLMs open source vs propriétaires : coût, contrôle, confidentialité, fine-tuning et performance. Choisissez le bon modèle pour votre cas d\'usage.',
      publishDate: '2026-03-24',
      seoTitle: 'LLMs open source vs propriétaires : Coûts et performance',
      dateModified: '2026-04-01',
      readTime: '14 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLMs open source',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms?lang=fr',
        'inLanguage': 'fr',
        headline: 'LLMs open source vs propriétaires',
        description: 'Les modèles open-weights comme LLaMA 3.1 et Mistral offrent contrôle et économies ; les modèles propriétaires comme GPT-4o et Claude 4.6 Sonnet livrent des performances de pointe.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-01',
        keywords: ['LLMs open source', 'LLaMA', 'Mistral', 'modèles propriétaires', 'GPT-4o', 'Claude', 'fine-tuning', 'analyse des coûts', 'open-weights', 'inférence locale'],
        teaches: [
          'La différence entre les licences open-weights et open source pour les LLMs',
          'Les compromis coût/performance entre modèles open-weights et propriétaires',
          'Quand choisir l\'inférence locale plutôt que l\'accès par API',
        ],
        about: [
          { '@type': 'Thing', name: 'LLMs open source' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large' },
          { '@type': 'Thing', name: 'Conformité EU AI Act' },
          { '@type': 'Thing', name: 'Fine-tuning de LLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        mentions: [
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
          { '@type': 'Thing', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large 2' },
          { '@type': 'Thing', name: 'Qwen 2.5' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/open-source-vs-proprietary-llms', width: 1200, height: 630 },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Open-Weights vs LLMs propriétaires — Comparaison complète',
        description: 'Comparaison en 10 dimensions des LLMs open-weights et propriétaires : coût, performance, confidentialité, fine-tuning, fenêtre de contexte, souveraineté, vitesse, support, mises à jour et dépendance fournisseur.',
        numberOfItems: 10,
        url: 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Modèle de coût',
            description: 'Open-weights : 0,50–2,00 $/h d\'infrastructure ; gratuit une fois déployé, pas de facturation par token. Propriétaire : facturation API 0,15–5,00 $ par million de tokens en entrée ; 0,30–15,00 $ par million de tokens en sortie.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Plafond de performance',
            description: 'Open-weights (LLaMA 70B, Mistral Large) : MMLU 80–82 %, compétitif sur des tâches spécifiques. Propriétaire (GPT-4o, Claude, Gemini) : MMLU 88–90 %, plafond supérieur sur le raisonnement et le multimodal.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Fenêtre de contexte',
            description: 'Open-weights : LLaMA 3.1 131 K, Mistral Large 123 K, Qwen 128 K — suffisant pour de longs documents. Propriétaire : GPT-4o 128 K, Claude 200 K, Gemini 2.5 Pro 2 M tokens.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Confidentialité',
            description: 'Open-weights : souveraineté totale des données, aucune donnée ne quitte votre infrastructure, zéro journalisation fournisseur. Propriétaire : les données transitent par les serveurs du fournisseur ; suppression contractuelle promise mais exposition brève lors du traitement.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Fine-tuning',
            description: 'Open-weights : fine-tuning complet pris en charge (LoRA, QLoRA, entraînement complet) ; vous êtes propriétaire des poids résultants. Propriétaire : limité (modèles mini OpenAI uniquement) ou indisponible (Anthropic Claude).',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Souveraineté des données',
            description: 'Open-weights : déploiement sur site pour une souveraineté totale ; conforme EU AI Act, HIPAA, SOX. Propriétaire : dépendant de l\'API ; résidence des données incertaine ; conformité difficile à prouver.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Vitesse d\'inférence',
            description: 'Open-weights : dépend du matériel — A100 20–30 tokens/s (70B), RTX 4090 10–15 tokens/s. Propriétaire : serveurs optimisés 30–50+ tokens/s ; le fournisseur gère l\'optimisation.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'Support',
            description: 'Open-weights : documentation communautaire ; pas de SLA fournisseur ; auto-supporté. Propriétaire : support fournisseur, SLA API, gestion des incidents et garanties de disponibilité inclus.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'Cadence de mise à jour',
            description: 'Open-weights : hors ligne ; vous contrôlez l\'adoption des nouvelles versions du modèle ; pas de mises à jour forcées. Propriétaire : côté serveur ; le fournisseur met à jour les modèles ; adaptez-vous ou utilisez les endpoints API versionnés.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'Dépendance fournisseur',
            description: 'Open-weights : zéro dépendance ; déployez partout ; possédez votre infrastructure. Propriétaire : dépendance modérée à élevée ; comportement du modèle, APIs et tarification sous contrôle du fournisseur.',
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment choisir entre LLMs open source et propriétaires',
        'description': 'Un cadre de décision pour sélectionner des modèles open-weights ou propriétaires selon les exigences de coût, confidentialité, personnalisation et performance.',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Évaluer les exigences de confidentialité des données', 'text': 'Si les données doivent rester sur site (santé, finance, juridique, déploiements à haut risque selon l\'EU AI Act), l\'open-weights est obligatoire. Les modèles propriétaires acheminent les données via des APIs externes, ce qui peut violer les exigences HIPAA, RGPD ou de confidentialité avocat-client.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Calculer le volume quotidien de tokens', 'text': 'Calculez le coût API pour 1 M, 10 M et 100 M de tokens quotidiens. En dessous de ~5 M tokens/jour, les APIs propriétaires sont généralement moins chères car aucun coût d\'infrastructure. Au-delà de 10 M tokens/jour, l\'hébergement auto d\'open-weights devient rentable ; au-delà de 100 M tokens/jour, l\'open-weights l\'emporte décisivement.' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Évaluer les besoins de fine-tuning', 'text': 'Si vous devez spécialiser le modèle sur votre domaine, terminologie ou distribution de tâches, l\'open-weights est requis. Les modèles open-weights prennent en charge LoRA, QLoRA et le fine-tuning complet — vous êtes propriétaire des poids résultants. Les APIs propriétaires interdisent ou restreignent sévèrement la personnalisation.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Vérifier la maturité de l\'infrastructure', 'text': 'L\'open-weights requiert VRAM, GPUs et compétences DevOps pour l\'hébergement auto (LLaMA 70B : ~40 Go VRAM sur A100). Le propriétaire requiert des clés API et une connectivité réseau, mais zéro infrastructure. Si vous manquez de ressources GPU ou de couverture d\'astreinte, le propriétaire est la voie la plus simple.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Effectuer des benchmarks sur votre tâche réelle', 'text': 'Utilisez PromptQuorum pour envoyer votre prompt simultanément à GPT-4o, Claude et une instance Ollama locale. Comparez la qualité des sorties, la latence et le coût côte à côte. Le modèle qui gagne sur votre tâche et vos données spécifiques est le bon choix — pas le leader des benchmarks.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Llama 3.1 est-il vraiment open source ou seulement open-weights ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Seulement open-weights. LLaMA 3.1 publie les poids du modèle sous la Llama Community License 2.1, qui n\'est pas une licence open source conforme à l\'OSI. La licence autorise l\'usage commercial mais restreint l\'appellation des dérivés "LLaMA", exige une attribution et comprend des clauses de non-concurrence. Les véritables licences open source (Apache 2.0, MIT, GPL) n\'imposent aucune de ces restrictions.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce qui est moins cher en 2026 — héberger Llama soi-même ou utiliser l\'API GPT-4o ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Cela dépend du volume. En dessous de 5 M tokens/jour, l\'API GPT-4o est moins chère — aucun coût d\'infrastructure. Entre 5 et 10 M tokens/jour, les coûts s\'équilibrent. Au-delà de 10 M tokens/jour, l\'hébergement auto de LLaMA 3.1 l\'emporte. À 100 M tokens/jour, l\'hébergement auto est 10 à 20 fois moins cher. Facteurs cachés : amortissement GPU, électricité (~0,10 $/kWh), main-d\'œuvre DevOps et risque d\'indisponibilité font souvent pencher les cas limites vers l\'API.' } },
          { '@type': 'Question', 'name': 'L\'EU AI Act affecte-t-il les LLMs open source ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, selon le déploiement. Les systèmes d\'IA à haut risque (recrutement, crédit, décisions juridiques) nécessitent une documentation des risques, des tests de biais et des pistes d\'audit. Les modèles open-weights déployés sur site facilitent la conformité — vous contrôlez les données et les journaux. Les APIs propriétaires obligent à dépendre des attestations du fournisseur. Les modèles à usage général avec plus de 10^25 FLOP de calcul d\'entraînement sont soumis à des obligations de transparence supplémentaires.' } },
          { '@type': 'Question', 'name': 'Quel LLM open source est le plus proche de GPT-4o en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B et Mistral Large 2 sont les plus proches. Scores MMLU : GPT-4o 88,7 %, LLaMA 3.1 70B 80,5 %, Mistral Large 81,2 %. Sur la classification, le résumé et l\'extraction, les modèles open-weights égalent désormais le propriétaire. L\'écart de raisonnement se réduit d\'environ 2 à 3 points par an.' } },
          { '@type': 'Question', 'name': 'Puis-je effectuer un fine-tuning de GPT-4o ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Le fine-tuning OpenAI est disponible uniquement pour GPT-4o mini, GPT-4 et gpt-3.5-turbo. Anthropic ne propose pas de fine-tuning pour Claude. Google propose le fine-tuning pour Gemini. Les modèles open-weights (LLaMA, Mistral, Qwen) prennent en charge le fine-tuning complet via LoRA, QLoRA ou l\'entraînement complet.' } },
          { '@type': 'Question', 'name': 'Quel matériel me faut-il pour exécuter LLaMA 3.1 70B localement ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pleine précision : ~40 Go VRAM (A100 80 Go ou double RTX 4090). Quantifié 4 bits : ~16–20 Go VRAM (RTX 4090 unique). LLaMA 3.1 8B fonctionne sur du matériel grand public (~8 Go VRAM). Ollama gère automatiquement la quantification et l\'optimisation.' } },
          { '@type': 'Question', 'name': 'Puis-je exécuter des LLMs open source sur un MacBook ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les Macs Apple Silicon (M1/M2/M3/M4/M5) peuvent exécuter des modèles open-weights via Ollama ou LM Studio. Un M2 Pro avec 16 Go exécute LLaMA 3.1 8B à 10–15 tokens/s. Un M3 Max avec 128 Go exécute LLaMA 3.1 70B en quantification 4 bits. Plus lent que des serveurs GPU dédiés, mais viable pour le développement.' } },
          { '@type': 'Question', 'name': 'Les LLMs open source ont-ils les mêmes limitations que les modèles propriétaires ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui sur les fondamentaux : les deux hallucinent, ont des dates de coupure des connaissances et des limites de contexte. Les modèles open-weights ne peuvent pas être corrigés côté serveur — les mises à jour nécessitent une nouvelle publication. Les modèles propriétaires peuvent être améliorés de façon incrémentale. Le fine-tuning des modèles open-weights peut atténuer les limitations spécifiques à un domaine, mais ne peut pas surmonter les contraintes structurelles.' } },
          { '@type': 'Question', 'name': 'Quel modèle open-weights est le meilleur pour le code en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B et Mistral Large 2 sont les plus performants. Scores HumanEval : 73–78 % contre GPT-4o ~90 % et Claude 4.6 Sonnet ~87 %. Compétitif pour Python, SQL et la sortie structurée. Les modèles propriétaires conservent un avantage sur la conception d\'algorithmes complexes et le raisonnement multi-fichiers.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser des LLMs open source pour des applications commerciales ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. LLaMA, Mistral et Qwen autorisent explicitement l\'usage commercial selon leurs licences. Contrainte principale : impossible de nommer les dérivés "LLaMA" ; attribution de licence requise ; LLaMA 2 restreignait les organisations avec plus de 700 M d\'utilisateurs actifs mensuels (supprimé dans LLaMA 3.x). La plupart des équipes déploient les modèles open-weights en interne (inférence privée), ce qui évite les problèmes de dénomination.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce que LoRA et pourquoi est-ce important pour le fine-tuning open-weights ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LoRA (Low-Rank Adaptation) entraîne ~1 à 5 % des paramètres du modèle comme adaptateurs plutôt que la rétropropagation complète, réduisant le coût d\'entraînement de 5 à 10 fois. QLoRA étend cela avec une quantification 4 bits pour les GPU grand public (16–24 Go VRAM). LoRA est l\'approche standard pour spécialiser LLaMA et Mistral sur des tâches de domaine sans réentraînement complet.' } },
        ],
      },
      sections: {
        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            '**Les modèles open-weights coûtent moins cher à grande échelle ; les modèles propriétaires livrent des performances de pointe et une infrastructure gérée.** En dessous de 5 M tokens/jour, les APIs sont moins chères. Au-delà de 10 M tokens/jour, l\'hébergement auto open-weights l\'emporte sur le coût.',
            'Open-weights = poids de modèle téléchargeables (LLaMA, Mistral, Qwen) ; propriétaire = accès API uniquement (GPT-4o, Claude 4.6, Gemini 2.5). "Open weights" n\'est pas synonyme de licence open source.',
            'L\'écart de performance s\'est réduit : LLaMA 3.1 70B et Mistral Large 2 égalent désormais les modèles propriétaires sur la classification, le résumé et les tâches structurées — mais restent en retard sur le raisonnement complexe (écart MMLU : 88,7 % vs 80–81 %).',
            'Avantages propriétaires : raisonnement de pointe, intégration d\'outils, infrastructure gérée. Avantages open-weights : fine-tuning complet, déploiement local, zéro sortie de données, conformité EU AI Act.',
            'L\'open-weights requiert une infrastructure GPU et des compétences DevOps ; le propriétaire requiert des clés API et un accès réseau. Choisissez en fonction de la maturité de votre infrastructure, pas seulement du coût.',
            'Fine-tuning : les modèles open-weights prennent en charge LoRA, QLoRA, entraînement complet ; le propriétaire offre un fine-tuning limité (OpenAI/Google) ou inexistant (Anthropic).',
            'Confidentialité/conformité : modèles open-weights déployés localement = aucune donnée ne quitte votre infrastructure. Les APIs propriétaires font transiter les données par les serveurs du fournisseur, ce qui peut violer les règles de conformité en santé, finance ou juridique.',
          ],
        },

        whatIsOpenSource: {
          title: 'Qu\'est-ce qu\'un LLM open source ?',
          content: [
            '**"Open source" et "open-weights" ne sont pas synonymes.** La licence open source (Apache 2.0, MIT, GPL) s\'applique au code source et autorise un usage commercial et privé sans restriction. Open-weights signifie que les poids du modèle entraîné sont téléchargeables, mais peuvent être restreints par une licence spécialisée. LLaMA 3.1 est open-weights, pas open source — Meta publie les poids sous la Llama Community License 2.1, qui autorise l\'usage commercial mais contient des restrictions empêchant d\'appeler les modèles dérivés "LLaMA" et exigeant une attribution.',
            '**Les modèles propriétaires ne sont ni open-weights ni open source.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet) et Google (Gemini 2.5 Pro) ne publient pas les poids des modèles. Vous y accédez exclusivement via API. Les poids restent fermés ; vous ne pouvez pas voir, télécharger, modifier ou déployer le modèle vous-même.',
            'Comprendre cette distinction est essentiel pour la conformité, la personnalisation et la souveraineté des données. [Découvrez comment les LLMs fonctionnent en interne pour comprendre pourquoi les poids sont importants](/prompt-engineering/how-llms-actually-work?lang=fr).',
          ],
        },

        whatIsProprietary: {
          title: 'Qu\'est-ce qu\'un LLM propriétaire ?',
          content: [
            '**Les LLMs propriétaires sont des modèles fermés accessibles uniquement via API — le fournisseur contrôle les poids, les données d\'entraînement, l\'alignement de sécurité et toutes les mises à jour.** OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro) et Mistral API sont propriétaires. Vous ne pouvez pas télécharger les poids, consulter les données d\'entraînement, exécuter l\'inférence localement ou personnaliser directement les poids du modèle.',
            '**La tarification est une facturation API par token sur un serveur contrôlé par le fournisseur.** GPT-4o coûte 5 $ par million de tokens en entrée et 15 $ par million de tokens en sortie. Claude 4.6 Sonnet coûte 3 $/15 $. Gemini 2.5 Pro coûte 1,25 $/2,50 $ (contexte ≤200 K). Vous n\'avez pas de coût d\'infrastructure mais ne pouvez pas prévoir précisément les dépenses mensuelles — les coûts évoluent avec l\'utilisation.',
            '**Les fournisseurs propriétaires conservent le contrôle sur les mises à jour du modèle, le comportement et l\'alignement.** Quand OpenAI met à jour GPT-4o, vous obtenez automatiquement la nouvelle version. L\'alignement de sécurité, l\'IA constitutionnelle et le suivi des instructions sont des responsabilités du fournisseur. Pour les secteurs réglementés, cela peut simplifier la conformité — le fournisseur maintient les pistes d\'audit et les pratiques de sécurité publiées.',
          ],
        },

        definitions: {
          title: 'Concepts clés et définitions',
          content: [
            '**Modèle open-weights.** Un grand modèle de langage dont les poids entraînés (les paramètres numériques appris durant l\'entraînement) sont accessibles publiquement et peuvent être téléchargés, modifiés, affinés et auto-hébergés. Exemples : LLaMA 3.1 (Meta), Mistral Large 2 (Mistral AI), Qwen 2.5 (Alibaba). À ne pas confondre avec la licence open source ; "open-weights" porte sur les fichiers de modèle téléchargeables, pas nécessairement sur le code source ou une licence conforme à l\'OSI.',
            '**LLM propriétaire.** Un grand modèle de langage dont les poids restent privés et ne sont jamais publiés. L\'accès se fait exclusivement via l\'API d\'un fournisseur, nécessitant une facturation par token et une connectivité réseau. Exemples : GPT-4o (OpenAI), Claude 4.6 Sonnet (Anthropic), Gemini 2.5 Pro (Google). Les utilisateurs ne peuvent pas télécharger, inspecter, modifier ou auto-héberger le modèle.',
            '**Fine-tuning.** Le processus de réentraînement d\'un modèle préentraîné sur un nouveau jeu de données plus petit, spécifique à un domaine ou une tâche. Le fine-tuning met à jour les poids du modèle pour le spécialiser sur votre cas d\'usage (ex. : tonalité du service client, vocabulaire de domaine). Les modèles open-weights prennent en charge le fine-tuning complet via LoRA, QLoRA ou la rétropropagation complète ; la plupart des modèles propriétaires restreignent ou interdisent le fine-tuning.',
            '**Date de coupure des données d\'entraînement.** La date au-delà de laquelle un modèle n\'a aucune connaissance des événements ou informations. GPT-4o a une coupure en octobre 2024 ; Claude 4.6 Sonnet au début 2025 ; Gemini 2.5 Pro en octobre 2024. Les modèles ne peuvent pas fournir d\'informations précises sur des événements postérieurs à leur date de coupure.',
            '**Poids du modèle.** Les paramètres numériques (des milliards à des billions de chiffres) appris lors de l\'entraînement du modèle. Les poids déterminent le comportement, les connaissances et les schémas de raisonnement du modèle. Les modèles open-weights publient ces fichiers (~15–800 Go selon la taille du modèle) ; les modèles propriétaires gardent les poids secrets.',
          ],
        },

        questionDifference: {
          title: 'Quelle est la différence entre les LLMs open source et propriétaires ?',
          content: 'Les LLMs open source (LLaMA 3.1, Mistral, Qwen) rendent les poids du modèle accessibles publiquement — les organisations peuvent les télécharger, les inspecter, les affiner et les auto-héberger. Les LLMs propriétaires (GPT-4o, Claude, Gemini) appartiennent à des fournisseurs et sont uniquement accessibles via APIs. Les utilisateurs ne peuvent pas télécharger ou modifier les poids propriétaires, mais bénéficient d\'une infrastructure gérée et des mises à jour du fournisseur.',
        },

        questionPerformance: {
          title: 'Les LLMs open source sont-ils aussi bons que les modèles propriétaires ?',
          content: 'Sur de nombreuses tâches, oui. L\'écart de performance s\'est réduit à 7–8 points de pourcentage sur les benchmarks de raisonnement (MMLU). Sur la classification, le résumé et les tâches spécifiques à un domaine, les modèles open-weights comme LLaMA 3.1 70B égalent désormais leurs homologues propriétaires. Les modèles propriétaires mènent encore sur le raisonnement multi-étapes complexe, l\'orchestration d\'agents et le traitement des entrées multimodales.',
        },

        questionWhenToUse: {
          title: 'Quand les entreprises devraient-elles utiliser des LLMs open source ?',
          content: 'Les entreprises devraient utiliser des LLMs open source quand la confidentialité des données est obligatoire (santé, finance, juridique), quand le traitement dépasse 10 millions de tokens par jour, quand un fine-tuning spécifique au domaine est requis, ou quand la conformité à l\'EU AI Act exige la résidence des données sur site. Les modèles open-weights éliminent également la dépendance fournisseur et la facturation API par token.',
        },

        questionCanReplace: {
          title: 'Les LLMs open source peuvent-ils remplacer les modèles d\'IA propriétaires ?',
          content: 'Pour de nombreux cas d\'usage, oui. Les LLMs open source sont prêts pour la production sur la classification, le résumé, l\'extraction et les tâches spécifiques à un domaine. Les modèles propriétaires conservent des avantages sur le raisonnement complexe, les entrées multimodales, l\'intégration d\'outils et le déploiement sans infrastructure. Une approche hybride — routage des tâches selon les exigences de coût, confidentialité et performance — surpasse la dépendance à une seule classe de modèles.',
        },

        featureComparison: {
          title: 'Comparaison rapide des fonctionnalités',
          columns: ['Fonctionnalité', 'LLM open source', 'LLM propriétaire'],
          rows: [
            { 'Fonctionnalité': 'Coût', 'LLM open source': 'Infrastructure uniquement (0,50–2,00 $/h auto-hébergé)', 'LLM propriétaire': 'Paiement par token (0,15–5,00 $ par million de tokens en entrée)' },
            { 'Fonctionnalité': 'Contrôle', 'LLM open source': 'Total — poids en propriété, fine-tuning et modification possibles', 'LLM propriétaire': 'Limité — le fournisseur contrôle le modèle et les mises à jour' },
            { 'Fonctionnalité': 'Configuration', 'LLM open source': 'Complexe — nécessite GPUs, VRAM, compétences DevOps', 'LLM propriétaire': 'Simple — clés API, accès réseau uniquement' },
            { 'Fonctionnalité': 'Performance', 'LLM open source': '80–82 % (MMLU) — compétitif sur des tâches spécifiques', 'LLM propriétaire': '88–90 % (MMLU) — supérieur sur le raisonnement général' },
            { 'Fonctionnalité': 'Confidentialité des données', 'LLM open source': 'Contrôle total — aucune donnée ne quitte votre infrastructure', 'LLM propriétaire': 'Dépend du fournisseur — les données transitent par les serveurs du fournisseur' },
          ],
          tableFormat: true,
        },

        decisionFramework: {
          title: 'Cadre de décision : lequel choisir ?',
          content: '**Utilisez ce cadre pour décider en 30 secondes.** Répondez : votre cas d\'usage correspond-il à l\'une des catégories ci-dessous ? Si plusieurs critères s\'appliquent, pondérez-les par importance pour votre projet.',
          items: [
            '**Choisissez les LLMs open source si :**',
            '• La confidentialité des données est critique (santé, finance, juridique, EU RGPD)',
            '• Vous avez besoin d\'un contrôle et d\'une personnalisation complets du modèle (fine-tuning, spécialisation de domaine)',
            '• Vous traitez 10 M+ tokens/jour (économies de coûts dominantes à grande échelle)',
            '• Vous opérez sans accès internet (sous-marins, aéronefs, réseaux hors ligne)',
            '• La conformité à l\'EU AI Act est requise pour les systèmes d\'IA à haut risque',
            '• Vous souhaitez éviter la dépendance fournisseur et maintenir votre indépendance',
            '',
            '**Choisissez les LLMs propriétaires si :**',
            '• Vous avez besoin de performances de pointe sur le raisonnement et les tâches multi-étapes',
            '• Vous traitez <5 M tokens/jour (les APIs sont moins chères que l\'infrastructure)',
            '• Vous souhaitez zéro surcharge d\'infrastructure et une mise à l\'échelle gérée',
            '• Vous avez besoin de fiabilité pour les entrées multimodales (images, audio)',
            '• Vous avez besoin d\'intégration d\'outils et d\'orchestration d\'agents',
            '• Vous préférez l\'alignement de sécurité géré par le fournisseur et les mises à jour',
            '• Vous manquez de ressources GPU ou d\'expertise DevOps',
            '',
            '**Choisissez une approche hybride (les deux) si :**',
            '• Vous avez des cas d\'usage mixtes : travail privé sur open-weights, raisonnement complexe sur propriétaire',
            '• Vous pouvez router les requêtes intelligemment selon les exigences de confidentialité/coût/latence',
            '• Vous souhaitez comparer les modèles avant de vous engager auprès d\'un fournisseur',
          ],
        },

        quickReference: {
          title: 'Comparaison rapide : principaux modèles open source vs propriétaires en 2026',
          columns: ['Modèle', 'Type', 'Fenêtre de contexte', 'Coût approximatif', 'Idéal pour'],
          rows: [
            { 'Modèle': 'GPT-4o', 'Type': 'Propriétaire', 'Fenêtre de contexte': '128 K tokens', 'Coût approximatif': '5 $/15 $ par million de tokens entrée/sortie', 'Idéal pour': 'Intégration d\'outils, agents, raisonnement multimodal' },
            { 'Modèle': 'Claude 4.6 Sonnet', 'Type': 'Propriétaire', 'Fenêtre de contexte': '200 K tokens', 'Coût approximatif': '3 $/15 $ par million de tokens entrée/sortie', 'Idéal pour': 'Rédaction, revue de code, raisonnement structuré' },
            { 'Modèle': 'Gemini 2.5 Pro', 'Type': 'Propriétaire', 'Fenêtre de contexte': '2 M tokens', 'Coût approximatif': '1,25 $/2,50 $ par million de tokens entrée/sortie (≤200 K)', 'Idéal pour': 'Recherche sur longs documents, intégration Google' },
            { 'Modèle': 'LLaMA 3.1 70B', 'Type': 'Open-weights', 'Fenêtre de contexte': '131 K tokens', 'Coût approximatif': '~2 $/h sur GPU A100 (auto-hébergé)', 'Idéal pour': 'Confidentialité, fine-tuning, coût à grande échelle' },
            { 'Modèle': 'Mistral Large 2', 'Type': 'Open-weights', 'Fenêtre de contexte': '123 K tokens', 'Coût approximatif': '~2 $/h sur GPU A100 (auto-hébergé)', 'Idéal pour': 'Déploiements européens, raisonnement compétitif' },
            { 'Modèle': 'Qwen 2.5 72B', 'Type': 'Open-weights', 'Fenêtre de contexte': '128 K tokens', 'Coût approximatif': '~2 $/h sur GPU A100 (auto-hébergé)', 'Idéal pour': 'Charges de travail Asie-Pacifique, langue chinoise' },
            { 'Modèle': 'Mistral 7B', 'Type': 'Open-weights', 'Fenêtre de contexte': '32 K tokens', 'Coût approximatif': '~0,50 $/h sur GPU grand public (auto-hébergé)', 'Idéal pour': 'Tests, prototypes, travaux sensibles aux coûts' },
          ],
          tableFormat: true,
        },

        openSourceLandscape: {
          title: 'Le paysage open-weights en 2026',
          content: [
            '**Les LLMs open source permettent aux organisations de télécharger, inspecter et modifier les poids du modèle, puis de les déployer localement sans dépendance fournisseur ni coûts API par token.** Les modèles phares en 2026 sont LLaMA 3.1 de Meta, Mistral Large 2, Qwen 2.5 et d\'autres publiés sous des licences communautaires.',
            '**La famille LLaMA 3.1 de Meta est le principal concurrent open-weights aux modèles propriétaires.** LLaMA 3.1 existe en trois tailles : 8B (~8 Go VRAM pour l\'inférence), 70B (~40 Go VRAM) et 405B (~800 Go+ VRAM sur plusieurs GPUs). Les trois prennent en charge des fenêtres de contexte de 131 K tokens — égalant ou dépassant de nombreux modèles propriétaires. LLaMA 3.1 est entraîné sur 15 000 milliards de tokens de texte multilingue ; les variantes récentes prennent en charge plusieurs langues de façon compétitive.',
            '**Mistral AI propose deux candidats solides : Mistral 7B et Mistral Large 2.** Mistral 7B est un modèle allégé de 7 milliards de paramètres avec un contexte de 32 K, idéal pour l\'inférence sur matériel grand public et le prototypage rapide. Mistral Large 2 monte à 123 milliards de paramètres avec un contexte de 123 K, visant la bande de performance "frontier lite" — en compétition directe avec LLaMA 70B et les modèles propriétaires. Les deux sont disponibles pour usage commercial sous la Mistral Community License.',
            '**Qwen 2.5 (Alibaba) et les modèles émergents (Falcon, Phi-4) complètent le paysage.** Qwen 2.5 72B prend en charge un contexte de 128 K et excelle sur les tâches en langue chinoise ; utile pour les équipes servant les marchés Asie-Pacifique. Les modèles plus petits comme Phi-4 (Microsoft) et Falcon 180B ciblent des cas d\'usage sensibles aux coûts ou spécialisés. Tous sont téléchargeables, auto-hébergeables et prennent en charge le fine-tuning via LoRA ou l\'entraînement complet.',
          ],
        },

        proprietaryLandscape: {
          title: 'Le paysage propriétaire en 2026',
          content: [
            '**Les LLMs propriétaires sont accessibles exclusivement via des APIs contrôlées par le fournisseur ; les poids du modèle ne sont jamais publiés et ne peuvent être ni téléchargés, ni modifiés, ni déployés localement.** Les utilisateurs paient une facturation API par token et acceptent le contrôle du fournisseur sur les mises à jour du modèle, les politiques de sécurité et les caractéristiques de performance.',
            '**GPT-4o d\'OpenAI reste le leader du raisonnement.** GPT-4o prend en charge un contexte de 128 K tokens avec une coupure d\'entraînement en octobre 2024. Il excelle dans l\'utilisation d\'outils, les workflows d\'agents, les entrées multimodales (images, texte) et le raisonnement multi-étapes complexe. Tarification API : 5 $ par million de tokens en entrée, 15 $ par million de tokens en sortie (tarifs mars 2026). GPT-4o est API uniquement ; les poids ne sont jamais publiés. Consultez [comment les fenêtres de contexte affectent votre système d\'IA](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=fr) pour comprendre les compromis.',
            '**Claude 4.6 Sonnet d\'Anthropic domine les benchmarks de qualité rédactionnelle et de code.** Claude prend en charge un contexte de 200 K tokens — 2× plus grand que GPT-4o — permettant de traiter des documents plus longs et des conversations prolongées. Coupure des données d\'entraînement : début 2025. Tarification API : 3 $ par million de tokens en entrée, 15 $ par million de tokens en sortie. Claude ne propose pas de fine-tuning public. Anthropic privilégie l\'interprétabilité et l\'alignement de sécurité plutôt que la maximisation des benchmarks.',
            '**Gemini 2.5 Pro de Google offre la plus grande fenêtre de contexte : 2 M tokens.** Cela permet le traitement de documents de la longueur d\'un livre entier, de recherches exhaustives et de conversations multi-tours étendues. Tarification : 1,25 $ par million de tokens en entrée (≤200 K contexte), 10 $ par million de tokens en sortie ; tarifs plus élevés pour >200 K de contexte. Gemini s\'intègre profondément avec Google Workspace, Calendar, Gmail et la recherche web. Coupure des données d\'entraînement : octobre 2024. Le fine-tuning est disponible pour les modèles Gemini.',
          ],
        },

        performanceBenchmarks: {
          title: 'Performance sur les benchmarks : où en est l\'écart en 2026',
          content: [
            '**Les modèles propriétaires mènent encore sur le raisonnement général (MMLU), mais l\'écart s\'est réduit à 7–8 points de pourcentage.** MMLU (Massive Multitask Language Understanding) est un benchmark large couvrant 57 disciplines académiques. Pour comprendre pourquoi [le fonctionnement réel des LLMs](/prompt-engineering/how-llms-actually-work?lang=fr) importe pour la capacité de raisonnement, consultez notre analyse approfondie de l\'architecture transformer. Scores actuels :',
            '',
            'GPT-4o : 88,7 % (OpenAI, 2024)',
            'Claude 3.5 Sonnet : 88,3 % (Anthropic, 2024)',
            'LLaMA 3.1 70B : 80,5 % (Meta, 2024)',
            'Mistral Large 2 : 81,2 % (Mistral AI, 2024)',
            'Qwen 2.5 72B : 82,1 % (Alibaba, 2024)',
            '',
            '**L\'écart de performance entre les modèles open-weights et propriétaires s\'est réduit de 15–20 points de pourcentage en 2022 à 7–8 points sur les tâches de raisonnement en 2026.** Sur les tâches spécialisées (code, mathématiques, résumé, classification), les modèles open-weights égalent ou dépassent désormais leurs homologues propriétaires.',
            '',
            'L\'écart restant porte principalement sur le raisonnement abstrait et [l\'orchestration d\'outils](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=fr). — Touvron et al., "Llama 3 Herd of Models", 2024',
            '',
            '**Mise en garde importante :** Les benchmarks mesurent des compétences étroites. Les performances spécifiques aux tâches varient : sur la classification, le résumé et l\'extraction, LLaMA 3.1 70B égale ou dépasse souvent GPT-4o. Pour le raisonnement multi-étapes complexe (algèbre, longues chaînes de pensée), les modèles propriétaires conservent un avantage. Le seul benchmark fiable est de tester sur votre tâche réelle — consultez [comment choisir le bon modèle pour votre cas d\'usage](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=fr).',
          ],
        },

        costAnalysis: {
          title: 'Analyse des coûts : tarification API vs auto-hébergement',
          content: [
            '**Comparaison directe des coûts : les APIs propriétaires dominent à faible volume ; l\'auto-hébergement open-weights l\'emporte à grande échelle.** Le point de croisement se situe généralement entre 5 et 10 M tokens par jour. En dessous de ce seuil, la simplicité de l\'API et l\'absence de coût d\'infrastructure favorisent le propriétaire. Au-delà, l\'auto-hébergement open-weights devient rentable.',
            '',
            'Tarification API en mars 2026 :',
            '',
            'Coût de l\'infrastructure d\'auto-hébergement : un NVIDIA A100 80 Go se loue ~2 $/heure dans le cloud ; un RTX 4090 grand public coûte ~1,50 $/heure en électricité + amortissement (durée de vie 3 ans). Pour Mistral 7B, le débit d\'inférence est ~50–100 tokens/seconde par GPU, soit ~180–360 M tokens/jour par GPU. Mistral Large 2 ou LLaMA 70B : ~20–30 tokens/seconde par A100, soit ~1,7–2,6 M tokens/jour. À ces débits :',
            '',
            '**À 5 M tokens/jour :** L\'auto-hébergement A100 coûte ~2,50 $/jour. Les coûts API pour Claude Sonnet : 5 M × (3 $ + 15 $) / 1 M = 90 $/jour (en supposant 50 % entrée, 50 % sortie en moyenne). Les APIs restent moins chères.',
            '',
            '**À 50 M tokens/jour :** Besoin de 20 A100 en auto-hébergement = 50 $/jour. Coûts API : 900 $/jour. L\'open-weights l\'emporte décisivement.',
            '',
            '**À 100 M tokens/jour :** Besoin de 40 A100 = 100 $/jour. Coûts API : 1 800 $/jour. L\'open-weights est 18× moins cher.',
            '',
            'Vérifiez les tarifs : [Tarification OpenAI](https://openai.com/pricing) · [Tarification Anthropic](https://www.anthropic.com/api) · [Tarification Google](https://ai.google.dev/pricing) — les tarifs changent trimestriellement. Consultez [tokens, coûts et limites expliqués](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=fr) pour une analyse détaillée des coûts par token.',
          ],
          columns: ['Modèle', 'Entrée (par million de tokens)', 'Sortie (par million de tokens)'],
          rows: [
            { 'Modèle': 'GPT-4o', 'Entrée (par million de tokens)': '5,00 $', 'Sortie (par million de tokens)': '15,00 $' },
            { 'Modèle': 'Claude 4.6 Sonnet', 'Entrée (par million de tokens)': '3,00 $', 'Sortie (par million de tokens)': '15,00 $' },
            { 'Modèle': 'Gemini 2.5 Pro', 'Entrée (par million de tokens)': '1,25 $ (≤200 K ctx)', 'Sortie (par million de tokens)': '2,50 $' },
          ],
          tableFormat: true,
        },

        privacyAndDataSovereignty: {
          title: 'Confidentialité, souveraineté des données et EU AI Act',
          content: [
            '**Les modèles open-weights déployés localement = zéro donnée ne quitte votre infrastructure.** Quand vous exécutez LLaMA 3.1 via Ollama sur votre GPU privé, aucune donnée d\'inférence, métadonnée ou journal de requêtes ne quitte votre réseau. C\'est la souveraineté des données : vous maintenez un contrôle total. Les APIs propriétaires (OpenAI, Anthropic, Google) vous obligent à envoyer des requêtes via le réseau à des serveurs externes. Même avec la suppression contractuelle des données, celles-ci transitent brièvement par l\'infrastructure du fournisseur et sont journalisées à des fins de conformité.',
            '**L\'EU AI Act (2024) désigne certaines applications LLM comme "à haut risque", exigeant documentation des risques, tests de biais et pistes d\'audit.** Les catégories incluent les systèmes prenant des décisions significatives (recrutement, crédit, découverte juridique, attribution de prestations). Les systèmes à haut risque doivent tenir des registres sur la façon dont les décisions sont prises, prouver l\'absence de discrimination et soutenir la supervision humaine. Les modèles open-weights déployés sur site facilitent cela — vous contrôlez la piste d\'audit et le stockage des données. Les APIs propriétaires le rendent plus difficile — vous dépendez des rapports de conformité du fournisseur, qui peuvent être insuffisants pour les secteurs réglementés.',
            '**Pour les secteurs réglementés (santé, finance, services juridiques), l\'open-weights est souvent obligatoire.** HIPAA (santé), SOX (finance) et le secret professionnel avocat-client exigent la résidence des données — ce qui signifie que les données ne peuvent pas quitter votre juridiction. Les APIs propriétaires basées aux États-Unis ou dans d\'autres pays violent ces exigences. Les équipes de ces secteurs déploient généralement des modèles open-weights (LLaMA, Mistral ou des distributions commerciales) sur une infrastructure sur site.',
          ],
        },

        customizationAndFineTuning: {
          title: 'Fine-tuning et personnalisation : là où l\'open-weights l\'emporte',
          content: [
            '**Les modèles open-weights permettent un fine-tuning complet ; les modèles propriétaires le restreignent ou l\'interdisent.** Le fine-tuning consiste à réentraîner les poids du modèle sur vos propres données pour le spécialiser sur votre domaine. Vous pouvez utiliser LoRA (Low-Rank Adaptation) pour un fine-tuning efficace, QLoRA pour un entraînement quantifié, ou la rétropropagation complète si vous disposez des ressources de calcul. Après le fine-tuning, le modèle vous appartient — vous êtes propriétaire des poids résultants, pouvez les déployer partout et les mettre à jour hors ligne.',
            '**Disponibilité du fine-tuning propriétaire :** L\'API de fine-tuning OpenAI fonctionne uniquement pour GPT-4o mini et GPT-4 (anciens modèles). Non disponible pour GPT-4o phare. Anthropic ne propose pas de fine-tuning pour Claude via API. Google propose un fine-tuning limité pour Gemini. Aucun de ces fournisseurs ne permet la propriété des poids affinés — vous louez une copie affinée du modèle propriétaire.',
            '**Considération de sécurité :** Lors du fine-tuning sur des APIs propriétaires, vos données d\'entraînement sont téléchargées sur les serveurs du fournisseur. Pour les domaines sensibles, cela viole les règles de conformité. Le fine-tuning open-weights reste sur site. Consultez [injection de prompt et sécurité](/prompt-engineering/prompt-injection-and-security?lang=fr) pour des considérations supplémentaires sur la surface d\'attaque lors de l\'utilisation d\'APIs externes.',
          ],
        },

        comparisonTable: {
          title: 'Différences clés entre LLMs open source et propriétaires',
          content: '**Les modèles open-weights coûtent moins cher à grande échelle et permettent une personnalisation complète ; les modèles propriétaires offrent une mise en valeur plus rapide et une infrastructure gérée à un coût par token plus élevé.** En dessous de 5 M tokens/jour, les APIs propriétaires sont généralement moins chères. Au-delà de 10 M tokens/jour, l\'open-weights auto-hébergé l\'emporte sur le coût. Choisissez selon votre volume, vos exigences de confidentialité et votre maturité d\'infrastructure.',
          columns: ['Dimension', 'Modèles open-weights', 'Modèles propriétaires'],
          rows: [
            { 'Dimension': 'Modèle de coût', 'Modèles open-weights': 'Auto-hébergement : 0,50–2,00 $/h d\'infrastructure. Gratuit une fois déployé. Pas de facturation par token.', 'Modèles propriétaires': 'Facturation API : 0,15–5,00 $ par million de tokens en entrée ; 0,30–15,00 $ par million de tokens en sortie. Évolue avec l\'utilisation.' },
            { 'Dimension': 'Plafond de performance', 'Modèles open-weights': 'Meilleur open-weights (LLaMA 70B, Mistral Large) : MMLU 80–82 %. Compétitif sur des tâches spécifiques, en retard sur le raisonnement abstrait.', 'Modèles propriétaires': 'Frontier (GPT-4o, Claude, Gemini) : MMLU 88–90 %. Plafond supérieur sur le raisonnement, les agents, le multimodal.' },
            { 'Dimension': 'Fenêtre de contexte', 'Modèles open-weights': 'LLaMA 3.1 : 131 K. Mistral Large : 123 K. Qwen : 128 K. Suffisant pour les longs documents.', 'Modèles propriétaires': 'GPT-4o : 128 K. Claude : 200 K. Gemini 2.5 : 2 M. Les fenêtres plus grandes permettent des recherches plus longues.' },
            { 'Dimension': 'Confidentialité', 'Modèles open-weights': 'Souveraineté totale des données. Aucune donnée ne quitte votre infrastructure. Zéro journalisation fournisseur.', 'Modèles propriétaires': 'Les données transitent par les serveurs du fournisseur. Suppression contractuelle promise mais exposition brève lors du traitement.' },
            { 'Dimension': 'Fine-tuning', 'Modèles open-weights': 'Fine-tuning complet pris en charge (LoRA, QLoRA, entraînement complet). Vous êtes propriétaire des poids. Personnalisation de domaine.', 'Modèles propriétaires': 'Limité (modèles mini OpenAI uniquement) ou indisponible (Anthropic Claude). Vous ne possédez pas les poids résultants.' },
            { 'Dimension': 'Souveraineté des données', 'Modèles open-weights': 'Déploiement sur site : souveraineté totale. Conforme EU AI Act. HIPAA/SOX/conformité juridique réalisable.', 'Modèles propriétaires': 'Dépendant de l\'API : résidence des données incertaine. Conformité difficile à prouver pour les secteurs réglementés.' },
            { 'Dimension': 'Vitesse d\'inférence', 'Modèles open-weights': 'Dépend du matériel. A100 : 20–30 tokens/s (70B). RTX 4090 : 10–15 tokens/s.', 'Modèles propriétaires': 'Serveurs optimisés : 30–50+ tokens/s. Déterministe. Le fournisseur gère l\'optimisation.' },
            { 'Dimension': 'Support', 'Modèles open-weights': 'Communautaire. Bonne documentation ; SLA fournisseur indisponible. Vous assurez votre propre support.', 'Modèles propriétaires': 'Support fournisseur inclus. SLA API, gestion des incidents, garanties de disponibilité.' },
            { 'Dimension': 'Cadence de mise à jour', 'Modèles open-weights': 'Hors ligne. Nouvelles versions publiées ; vous choisissez quand adopter. Pas de mises à jour forcées.', 'Modèles propriétaires': 'Côté serveur. Le fournisseur met à jour les modèles ; vous vous adaptez ou utilisez des endpoints API versionnés.' },
            { 'Dimension': 'Dépendance fournisseur', 'Modèles open-weights': 'Zéro dépendance. Déployez partout. Changez de fournisseur ou auto-hébergez librement. Possédez votre infrastructure.', 'Modèles propriétaires': 'Dépendance modérée à élevée. Comportement du modèle, APIs et tarification sous contrôle du fournisseur. Changer implique un effort de migration.' },
          ],
          tableFormat: true,
        },

        promptEngineeringImplications: {
          title: 'LLMs open source vs propriétaires pour le prompt engineering',
          content: [
            '**Les modèles open-weights permettent une expérimentation plus approfondie des prompts à moindre coût.** Vous pouvez exécuter le même prompt 100 fois sur une instance LLaMA 3.1 locale et itérer sur la formulation, la température et la structure sans facturation par token. Affinez le modèle sur des paires prompt-réponse de votre domaine. Expérimentez avec les jailbreaks et les cas limites dans votre infrastructure privée. Cet environnement sandbox est idéal pour la recherche, le prototypage et la compréhension du comportement du modèle.',
            '**Les APIs propriétaires sont plus rapides à tester et plus faciles à mettre à l\'échelle.** Vous écrivez un prompt, appelez l\'API GPT-4o ou Claude, et obtenez des résultats en millisecondes sans aucune configuration d\'infrastructure. Pas besoin de gérer VRAM, quantification ou téléchargements de modèles. Pour les tests A/B rapides, le déploiement en production et la gestion du trafic variable, les modèles propriétaires réduisent la complexité opérationnelle.',
            '**Approche hybride : prototypez sur open-weights, validez sur propriétaire.** Développez et affinez les prompts localement avec LLaMA 3.1 8B (itération rapide, sans coût). Une fois la stratégie de prompt arrêtée, testez sur GPT-4o ou Claude 4.6 pour confirmer les performances de pointe. Déployez le meilleur en production. Cette approche combine la flexibilité de l\'open-weights avec la fiabilité du propriétaire.',
          ],
        },

        whenOpenSource: {
          title: 'Quand utiliser des modèles open source',
          content: '**Choisissez l\'open-weights quand la confidentialité des données, le coût à grande échelle ou les exigences de personnalisation approfondie dominent vos contraintes.** L\'open-weights excelle dans :',
          items: [
            '**Données sensibles (santé, finance, juridique) :** Les dossiers patients, les données financières et les communications avocat-client ne peuvent pas transiter par des APIs externes. Les modèles open-weights déployés sur site gardent les données sous votre contrôle et assurent la conformité. Utilisez LLaMA 3.1 ou Mistral pour la conformité HIPAA, RGPD et le secret professionnel avocat-client. Associez avec des [contrôles de sécurité contre l\'injection de prompt](/prompt-engineering/prompt-injection-and-security?lang=fr) pour protéger les entrées du modèle.',
            '**Automatisation à grand volume (50 M+ tokens/jour) :** Au-delà de ~10 M tokens/jour, l\'auto-hébergement devient moins cher que les APIs propriétaires. Utilisez l\'open-weights pour les pipelines de classification, extraction, résumé ou traitement de données à haut volume où [les coûts API seraient prohibitifs](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=fr).',
            '**Personnalisation et fine-tuning de domaine :** Vous disposez de jeux de données étiquetés et avez besoin que le modèle se spécialise sur votre terminologie, style rédactionnel ou distribution de tâches. L\'open-weights permet LoRA, QLoRA ou le fine-tuning complet. Les APIs propriétaires l\'interdisent ou le restreignent.',
            '**Contraintes géographiques ou réseau :** Vous avez besoin d\'inférence sans accès internet (sous-marins, aéronefs, sites distants). L\'open-weights fonctionne hors ligne. Les APIs propriétaires nécessitent une connectivité réseau.',
            '**Conformité EU AI Act (déploiements à haut risque) :** Systèmes de recrutement, décisions de crédit, attribution de prestations. Les pistes d\'audit, la documentation des risques et la résidence des données sur site sont plus faciles à réaliser avec l\'open-weights. Les APIs propriétaires rendent la conformité plus difficile à démontrer.',
            '**Prévisibilité des coûts :** Le coût de l\'infrastructure open-weights est fixe (matériel + électricité). Les APIs propriétaires évoluent de façon imprévisible avec l\'utilisation. Pour les organisations sensibles aux coûts, la budgétisation open-weights est plus claire.',
          ],
        },

        whenProprietary: {
          title: 'Quand utiliser des modèles propriétaires',
          content: '**Choisissez le propriétaire quand les performances absolues, l\'infrastructure gérée ou l\'alignement de sécurité comptent le plus.** Le propriétaire excelle dans :',
          items: [
            '**Raisonnement multi-étapes complexe :** Workflows d\'agents, synthèse de recherche complexe et résolution de problèmes abstraits. GPT-4o, Claude 4.6 et Gemini 2.5 maintiennent un avantage de 7–8 points sur MMLU. L\'open-weights réduit l\'écart sur des tâches spécifiques mais reste en retard sur le raisonnement général.',
            '**Recherche sur longs documents (1 M+ tokens) :** Gemini 2.5 Pro est le seul modèle en production avec un contexte de 2 M tokens. Pour traiter des livres entiers, des corpus de recherche ou des jurisprudences exhaustives, aucun modèle open-weights n\'est comparable. Utilisez le propriétaire quand la longueur des documents dépasse les capacités de l\'open-weights.',
            '**Zéro surcharge d\'infrastructure :** Vous manquez de ressources GPU, d\'expertise DevOps ou de couverture d\'astreinte pour l\'infrastructure de modèles. Les APIs propriétaires gèrent la disponibilité, la mise à l\'échelle et l\'optimisation. Payez pour la simplicité ; évitez la charge opérationnelle.',
            '**Intégration d\'outils et agents :** OpenAI est en tête sur l\'utilisation d\'outils, les appels de fonctions et l\'orchestration d\'agents multi-étapes. Si votre système requiert un routage de fonctions fiable et des comportements d\'agents multi-tours, GPT-4o est le choix pragmatique.',
            '**Sécurité et alignement gérés :** Les fournisseurs propriétaires investissent massivement dans l\'IA constitutionnelle, le RLHF et le suivi des instructions. Pour les chatbots, le service client et les systèmes destinés aux utilisateurs, les modèles propriétaires sont généralement plus sûrs d\'emblée.',
            '**Entrées multimodales (images, audio) :** GPT-4o et Claude 4.6 Sonnet traitent les images de façon fiable. Les modèles open-weights multimodaux existent mais sont moins matures. Utilisez le propriétaire pour des tâches vision-langage fiables.',
          ],
        },

        hybridArchitecture: {
          title: 'Architectures d\'IA hybrides (modèles ouverts + fermés)',
          content: '**Les organisations peuvent utiliser des architectures d\'IA hybrides qui routent les requêtes vers des modèles open-weights pour les données sensibles et les tâches sensibles aux coûts, tout en envoyant le raisonnement complexe et le travail multimodal aux modèles propriétaires.** Cette approche combine l\'efficacité des coûts, la confidentialité et la personnalisation de l\'open-weights avec les performances et l\'infrastructure gérée des LLMs propriétaires.',
          items: [
            '**Données sensibles → open-weights local ; raisonnement complexe → API propriétaire.** Routez les dossiers patients, les données financières et les documents juridiques vers LLaMA 3.1 exécuté localement via Ollama. Routez la synthèse de recherche multi-étapes, la génération de code et l\'orchestration d\'agents vers GPT-4o ou Claude 4.6 Sonnet. Cette approche hybride assure la conformité tout en maintenant des performances de pointe.',
            '**Traitement par lots sensible aux coûts → open-weights local ; requêtes interactives → API propriétaire.** Pour les tâches en arrière-plan (classification, extraction, résumé), utilisez LLaMA 3.1 70B auto-hébergé (~2 $/h sur A100). Pour les requêtes utilisateur en temps réel où la latence compte, utilisez l\'API GPT-4o (5 $/15 $ par million de tokens). Le mode hybride réduit les coûts totaux et la latence.',
            '**Comparaison et consensus multi-modèles → PromptQuorum.** Envoyez un seul [prompt](/prompt-engineering/what-is-prompt-engineering?lang=fr) à Ollama local, GPT-4o, Claude 4.6 et Gemini 2.5 Pro simultanément via PromptQuorum. Comparez les sorties côte à côte sur la qualité, la latence et le coût. Choisissez le meilleur pour la production ou combinez les sorties pour un raisonnement en ensemble.',
            '**Tests et préproduction → open-weights ; serving en production → propriétaire.** Utilisez LLaMA 3.1 8B exécuté localement pour le prototypage rapide et le développement. Une fois le prompt et le pipeline validés, passez à GPT-4o ou Claude pour le trafic de production où la fiabilité, l\'intégration d\'outils et les garanties de sécurité comptent le plus.',
          ],
        },

        nuancedTakes: {
          title: 'Là où les idées reçues sont fausses',
          content: '**L\'open-weights n\'est pas toujours moins cher que les APIs propriétaires.** En dessous de 5 M tokens/jour, les APIs propriétaires (GPT-4o mini, Claude Haiku, Gemini Flash) sont souvent moins chères car le coût d\'infrastructure (amortissement GPU, électricité, main-d\'œuvre DevOps) dépasse la facturation API. Seul au-delà de 10 M tokens/jour l\'auto-hébergement open-weights devient optimal.',
          items: [
            '**L\'écart de performance est spécifique à la tâche, pas universel.** Les modèles propriétaires mènent sur MMLU (raisonnement) de 7–8 points. Mais sur la classification, le résumé, l\'extraction et de nombreuses tâches de domaine, LLaMA 3.1 70B égale ou dépasse les modèles propriétaires. "Le propriétaire est meilleur" est trop large. Benchmarkez votre tâche réelle.',
            '**La licence "open source" est complexe et souvent pas vraiment open source.** LLaMA, Mistral et Qwen ne sont pas conformes à l\'OSI — ce sont des "open-weights" sous des licences non standard. Les appeler "open source" est trompeur et invite à la confusion juridique. Clarifiez les licences avec un conseil juridique avant de vous reposer sur des protections légales.',
            '**Le propriétaire n\'est pas toujours plus sûr ou mieux aligné.** [Tous les modèles hallucinent](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=fr). Les données d\'entraînement propriétaires, les dates de coupure et l\'IA constitutionnelle ne préviennent pas le jailbreaking, [l\'injection de prompt](/prompt-engineering/prompt-injection-and-security?lang=fr) ou les abus. Les modèles open-weights peuvent être affinés pour égaler ou dépasser l\'alignement propriétaire. La sécurité est une propriété du déploiement et des garde-fous, pas de la classe de modèle.',
          ],
        },

        keyTerms: {
          title: 'Termes clés',
          items: [
            '[Open-Weights](/prompt-engineering/prompt-engineering-glossary#open-weights?lang=fr) — Les poids du modèle sont téléchargeables mais peuvent être restreints par licence',
            '[Fine-tuning](/prompt-engineering/prompt-engineering-glossary#fine-tuning?lang=fr) — Réentraînement des poids du modèle sur des données spécifiques à un domaine',
            '[LoRA](/prompt-engineering/prompt-engineering-glossary#lora?lang=fr) — Fine-tuning efficace via adaptation de faible rang (5–10 % du coût d\'entraînement complet)',
            '[RAG](/prompt-engineering/prompt-engineering-glossary#rag?lang=fr) — Retrieval-Augmented Generation ; ancrage des sorties LLM dans des documents externes',
            '[Fenêtre de contexte](/prompt-engineering/prompt-engineering-glossary#context-window?lang=fr) — Capacité maximale en tokens pour l\'entrée + la sortie combinées',
            '[VRAM](/prompt-engineering/prompt-engineering-glossary#vram?lang=fr) — Mémoire GPU requise pour l\'inférence du modèle',
          ],
        },

        promptExample: {
          title: 'Structure de prompt en pratique',
          content: [
            '[Mauvais prompt] "Lequel est le mieux, open source ou GPT-4o ?"',
            '[Bon prompt] "Je dois traiter 20 M tokens/jour de tickets de support client. Je ne peux pas envoyer de données hors de l\'UE. Comparez l\'open-weights (LLaMA 3.1 70B auto-hébergé) au propriétaire (GPT-4o via API) pour ce cas d\'usage : incluez le coût d\'infrastructure à 20 M tokens/jour, la conformité à la résidence des données RGPD, la faisabilité du fine-tuning et la qualité attendue sur les tâches de classification de tickets."',
          ],
        },

        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Fondamentaux : Limitations de l\'IA et contraintes structurelles](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=fr) — Pourquoi les modèles propriétaires et open-weights partagent des limitations fondamentales comme l\'hallucination et les limites de contexte',
            '[Fondamentaux : Comment les LLMs fonctionnent réellement](/prompt-engineering/how-llms-actually-work?lang=fr) — Comprendre l\'architecture transformer explique pourquoi les modèles open-weights et propriétaires partagent les mêmes mécaniques fondamentales',
            '[Fondamentaux : GPT-4o, Claude ou Gemini ? Comment choisir le bon modèle](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=fr) — Comparaison détaillée des modèles propriétaires de pointe',
            '[Techniques : RAG expliqué — Retrieval-Augmented Generation](/prompt-engineering/rag-explained?lang=fr) — Comment étendre n\'importe quel modèle (propriétaire ou open-weights) avec des connaissances externes',
            '[Fondamentaux : Tokens, coûts et limites](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=fr) — Analyse détaillée des coûts et économie des tokens',
            '[Fondamentaux : Injection de prompt et sécurité](/prompt-engineering/prompt-injection-and-security?lang=fr) — Considérations de sécurité pour les deux classes de modèles',
          ],
        },

        faq: {
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Llama 3.1 est-il vraiment open source ou seulement open-weights ?',
              a: 'Seulement open-weights. LLaMA 3.1 publie les poids du modèle sous la Llama Community License 2.1, qui n\'est pas une licence open source conforme à l\'OSI. La licence autorise l\'usage commercial mais restreint l\'appellation des dérivés "LLaMA", exige une attribution et comprend des clauses de non-concurrence. Les véritables licences open source (Apache 2.0, MIT, GPL) n\'imposent aucune de ces restrictions. LLaMA est plus permissif qu\'un accès propriétaire fermé, mais n\'est pas légalement "open source".',
            },
            {
              q: 'Qu\'est-ce qui est moins cher en 2026 — héberger Llama soi-même ou utiliser l\'API GPT-4o ?',
              a: 'Cela dépend du volume. En dessous de 5 M tokens/jour, l\'API GPT-4o (ou GPT-4o mini) est moins chère car le coût d\'infrastructure dépasse la facturation API. Entre 5 et 10 M tokens/jour, les coûts s\'équilibrent grossièrement. Au-delà de 10 M tokens/jour, l\'hébergement auto de LLaMA 3.1 l\'emporte sur le coût. À 100 M tokens/jour, l\'hébergement auto est 10 à 20 fois moins cher. Facteurs cachés : amortissement GPU, électricité (~0,10 $/kWh), main-d\'œuvre DevOps et risque d\'indisponibilité font souvent pencher les cas limites vers l\'API.',
            },
            {
              q: 'L\'EU AI Act affecte-t-il les LLMs open source ?',
              a: 'Oui, selon la façon dont vous les déployez. L\'EU AI Act (2024) désigne les systèmes d\'IA "à haut risque" — recrutement, scoring de crédit, découverte juridique — comme nécessitant une documentation des risques, des tests de biais et des pistes d\'audit. Les modèles open-weights déployés sur site facilitent la conformité car vous contrôlez les données et les journaux. Les APIs propriétaires vous obligent à dépendre des attestations du fournisseur. Les modèles d\'IA à usage général avec plus de 10^25 FLOP de calcul d\'entraînement (modèles frontier) sont soumis à des obligations de transparence supplémentaires. Pour les secteurs réglementés, consultez un conseil en conformité.',
            },
            {
              q: 'Quel LLM open source est le plus proche de GPT-4o en 2026 ?',
              a: 'LLaMA 3.1 70B et Mistral Large 2 sont les plus proches, mais des écarts subsistent. Sur MMLU (benchmark de raisonnement), GPT-4o obtient 88,7 % contre LLaMA 3.1 70B à 80,5 % et Mistral Large à 81,2 %. Sur des tâches spécifiques (classification, résumé, extraction), les modèles open-weights égalent désormais le propriétaire. L\'écart se réduit d\'environ 2 à 3 points par an ; la convergence sur les tâches de raisonnement est probable dans 18 à 24 mois.',
            },
            {
              q: 'Puis-je effectuer un fine-tuning de GPT-4o ?',
              a: 'Non. Le fine-tuning OpenAI est disponible uniquement pour GPT-4o mini, GPT-4 et gpt-3.5-turbo — pas GPT-4o lui-même. Anthropic ne propose pas de fine-tuning pour Claude. Google propose le fine-tuning pour Gemini. Les modèles open-weights (LLaMA, Mistral, Qwen) prennent en charge le fine-tuning complet via LoRA, QLoRA ou l\'entraînement par gradient complet — vous êtes propriétaire des poids résultants.',
            },
            {
              q: 'Quel matériel me faut-il pour exécuter LLaMA 3.1 70B localement ?',
              a: 'Pleine précision : ~40 Go VRAM (A100 80 Go ou double RTX 3090/4090). Quantifié 4 bits via Ollama : ~16–20 Go VRAM (RTX 4090 unique 24 Go). LLaMA 3.1 8B fonctionne sur du matériel grand public (~8 Go VRAM, RTX 3060 ou Apple M2 Pro). Ollama gère automatiquement la quantification et la gestion des modèles — recommandé pour la plupart des déploiements locaux.',
            },
            {
              q: 'Puis-je exécuter des LLMs open source sur un MacBook ?',
              a: 'Oui. Les Macs Apple Silicon (M1/M2/M3/M4/M5) peuvent exécuter des modèles open-weights via Ollama ou LM Studio. L\'architecture mémoire unifiée partage la RAM avec le GPU — un M2 Pro avec 16 Go exécute LLaMA 3.1 8B à 10–15 tokens/s. Un M3 Max avec 128 Go de mémoire peut exécuter LLaMA 3.1 70B en quantification 4 bits. Plus lent qu\'un serveur GPU dédié, mais viable pour le développement et l\'usage personnel.',
            },
            {
              q: 'Les LLMs open source ont-ils les mêmes limitations que les modèles propriétaires ?',
              a: 'Oui sur les fondamentaux : les deux hallucinent, ont des dates de coupure des connaissances, des limites de fenêtre de contexte et des frontières de raisonnement. Les modèles open-weights ne peuvent pas être corrigés côté serveur — les mises à jour des poids nécessitent une nouvelle publication et un réentraînement. Les modèles propriétaires peuvent être améliorés de façon incrémentale sans action de l\'utilisateur. Le fine-tuning des modèles open-weights peut atténuer des limitations spécifiques (connaissances de domaine, tonalité), mais ne peut pas surmonter les contraintes structurelles comme la date de coupure ou le risque d\'hallucination.',
            },
            {
              q: 'Quel modèle open-weights est le meilleur pour le code en 2026 ?',
              a: 'LLaMA 3.1 70B et Mistral Large 2 sont les modèles open-weights de codage les plus performants. Sur HumanEval (benchmark de génération de code), ils obtiennent 73–78 %, contre GPT-4o à ~90 % et Claude 4.6 Sonnet à ~87 %. Pour Python, SQL et la sortie structurée, l\'open-weights est compétitif. Pour la conception d\'algorithmes complexes et le raisonnement multi-fichiers, les modèles propriétaires conservent un avantage significatif.',
            },
            {
              q: 'Puis-je utiliser des LLMs open source pour des applications commerciales ?',
              a: 'Oui. LLaMA, Mistral et Qwen autorisent explicitement l\'usage commercial selon leurs licences. Contraintes principales : impossible de nommer les dérivés "LLaMA" (renommage obligatoire) ; attribution de licence requise ; LLaMA 2 restreignait les organisations avec plus de 700 M d\'utilisateurs actifs mensuels (supprimé dans LLaMA 3.x). La plupart des équipes déploient les modèles open-weights en interne (inférence privée), ce qui évite entièrement les problèmes de dénomination.',
            },
            {
              q: 'Qu\'est-ce que LoRA et pourquoi est-ce important pour le fine-tuning open-weights ?',
              a: 'LoRA (Low-Rank Adaptation) est une méthode de fine-tuning qui entraîne uniquement un petit ensemble de poids d\'adaptateurs (~1 à 5 % des paramètres du modèle) plutôt que la rétropropagation complète sur toutes les couches. Cela réduit le coût d\'entraînement de 5 à 10 fois par rapport au fine-tuning complet avec une perte de qualité minimale. QLoRA étend cela avec une quantification 4 bits, permettant le fine-tuning sur des GPU grand public (16–24 Go VRAM). LoRA est l\'approche standard pour adapter LLaMA et Mistral à des tâches spécifiques à un domaine sans réentraînement complet.',
            },
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            'Meta AI, "Llama 3 Herd of Models" (Touvron et al., 2024) — architecture, fenêtre de contexte, scores de benchmark et documentation des données d\'entraînement',
            'Mistral AI, fiches de modèle et documentation technique (2024) — spécifications de Mistral Large 2 et Mistral 7B',
            'Hendrycks et al., "Measuring Massive Multitask Language Understanding" (2021) — définition du benchmark MMLU et scores de référence. arXiv:2009.03300',
            'Chen et al., "Evaluating Large Language Models Trained on Code" (2021) — benchmark HumanEval pour la génération de code. arXiv:2107.03374',
            'Union européenne, "Artificial Intelligence Act" (2024) — catégories de systèmes d\'IA à haut risque, obligations des modèles GPAI et exigences de conformité',
            'Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models" (2021) — définition de la méthode LoRA et résultats d\'efficacité. arXiv:2106.09685',
            'Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs" (2023) — méthode QLoRA et résultats de fine-tuning sur GPU grand public. arXiv:2305.14314',
          ],
        },
      },
    },
    ja: {
      theme: 'Techniques',
      title: 'オープンソース vs 独自LLM：2026年の比較',
      intro: 'LLaMA 3.1やMistralなどのオープンウェイトモデルは制御とコスト削減を提供し、GPT-4oやClaude 4.6 Sonnetなどの独自モデルはフロンティアパフォーマンスを実現します。両カテゴリは性能面で収束しつつありますが、アクセス方法、カスタマイズ性、コンプライアンス要件では大きく異なります。',
      metaDescription: 'オープンソース vs 独自LLM：コスト、制御、プライバシー、ファインチューニング、性能を比較。自分のユースケースに最適なモデルを選びます。',
      publishDate: '2026-03-24',
      seoTitle: 'オープンソース vs 専有LLM：コスト＆性能',
      dateModified: '2026-04-01',
      readTime: '14分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'オープンソースLLM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms?lang=ja',
        'inLanguage': 'ja',
        headline: 'オープンソース vs 独自LLM：2026年の比較',
        description: 'LLaMA 3.1やMistralなどのオープンウェイトモデルは制御とコスト削減を提供し、GPT-4oやClaude 4.6 Sonnetなどの独自モデルはフロンティアパフォーマンスを実現します。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-01',
        keywords: ['オープンソースLLM', 'LLaMA', 'Mistral', '独自モデル', 'GPT-4o', 'Claude', 'ファインチューニング', 'コスト分析', 'オープンウェイト', 'ローカル推論'],
        teaches: [
          'LLMにおけるオープンウェイトとオープンソースライセンスの違い',
          'オープンウェイトモデルと独自モデルのコストとパフォーマンスのトレードオフ',
          'ローカル推論とAPIアクセスをいつ選ぶべきか',
        ],
        about: [
          { '@type': 'Thing', name: 'Open-source LLMs' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large' },
          { '@type': 'Thing', name: 'EU AI Act compliance' },
          { '@type': 'Thing', name: 'LLM fine-tuning' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        mentions: [
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
          { '@type': 'Thing', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large 2' },
          { '@type': 'Thing', name: 'Qwen 2.5' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/open-source-vs-proprietary-llms', width: 1200, height: 630 },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'オープンウェイト vs 独自LLM — 全項目比較',
        description: 'コスト・パフォーマンス・プライバシー・ファインチューニング・コンテキストウィンドウ・データ主権・速度・サポート・更新頻度・ベンダーロックインの10次元比較。',
        numberOfItems: 10,
        url: 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'コストモデル',
            description: 'オープンウェイト：インフラ費用$0.50〜2.00/時間。デプロイ後は無料、トークン課金なし。独自：APIトークン課金 入力$0.15〜5.00/100万トークン、出力$0.30〜15.00/100万トークン。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'パフォーマンス上限',
            description: 'オープンウェイト（LLaMA 70B、Mistral Large）：MMLU 80〜82%、特定タスクで競争力あり。独自（GPT-4o、Claude、Gemini）：MMLU 88〜90%、推論・マルチモーダルで高い上限。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'コンテキストウィンドウ',
            description: 'オープンウェイト：LLaMA 3.1 131K、Mistral Large 123K、Qwen 128K — 長文書に十分。独自：GPT-4o 128K、Claude 200K、Gemini 2.5 Pro 200万トークン。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'プライバシー',
            description: 'オープンウェイト：完全なデータ主権。データがインフラ外に出ない。ベンダーログなし。独自：データがベンダーサーバーを経由。契約上の削除は約束されるが、一時的な露出が発生。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'ファインチューニング',
            description: 'オープンウェイト：フルファインチューニング対応（LoRA、QLoRA、完全学習）。生成されたウェイトを所有。独自：限定的（OpenAIのミニモデルのみ）または不可（Anthropic Claude）。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'データ主権',
            description: 'オープンウェイト：オンプレミスデプロイで完全主権を実現。EU AI Act、HIPAA、SOX対応可能。独自：API依存。データ所在地が不明確。規制産業でのコンプライアンス証明が困難。',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: '推論速度',
            description: 'オープンウェイト：ハードウェア依存 — A100で20〜30トークン/秒（70B）、RTX 4090で10〜15トークン/秒。独自：最適化サーバーで30〜50+トークン/秒。ベンダーが最適化を管理。',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'サポート',
            description: 'オープンウェイト：コミュニティ主導のドキュメント。ベンダーSLAなし。自己サポート。独自：ベンダーサポート、API SLA、インシデント対応、稼働率保証が含まれる。',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: '更新サイクル',
            description: 'オープンウェイト：オフライン。新しいモデルバージョンの採用タイミングを自分で管理。強制更新なし。独自：サーバーサイド。ベンダーがモデルを更新。バージョン管理APIエンドポイントで対応。',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'ベンダーロックイン',
            description: 'オープンウェイト：ロックインなし。どこでもデプロイ可能。コンピュートを所有。独自：中〜高ロックイン。モデルの挙動・API・価格はベンダーが管理。',
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'オープンソースLLMと独自LLMの選び方',
        'description': 'コスト・プライバシー・カスタマイズ・パフォーマンス要件に基づいてオープンウェイトまたは独自モデルを選ぶための意思決定フレームワーク。',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'データプライバシー要件を評価する', 'text': 'データをオンプレミスに保持する必要がある場合（医療・金融・法律・EU AI Act高リスクデプロイ）、オープンウェイトが必須です。独自モデルは外部APIにデータを送信するため、HIPAA・GDPR・弁護士秘密特権要件に違反する可能性があります。' },
          { '@type': 'HowToStep', 'position': 2, 'name': '1日のトークン量を計算する', 'text': '100万・1000万・1億トークン/日のAPIコストを計算してください。1日500万トークン未満では、インフラコストがゼロなため独自APIの方が通常安価です。1000万トークン/日を超えると、オープンウェイトの自己ホスティングがコスト効果的になります。1億トークン/日を超えると、オープンウェイトが圧倒的に有利です。' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'ファインチューニングの必要性を評価する', 'text': 'ドメイン・用語・タスク分布に合わせてモデルを特化させる必要がある場合、オープンウェイトが必要です。オープンウェイトはLoRA・QLoRA・完全ファインチューニングをサポートし、生成されたウェイトを所有できます。独自APIはカスタマイズを禁止または厳しく制限しています。' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'インフラ準備状況を確認する', 'text': 'オープンウェイトは自己ホスティングにVRAM・GPU・DevOpsスキルが必要です（LLaMA 70B：A100で約40GB VRAM）。独自モデルはAPIキーとネットワーク接続のみ必要でインフラ不要。GPUリソースやオンコール対応がない場合、独自モデルがより簡単な選択肢です。' },
          { '@type': 'HowToStep', 'position': 5, 'name': '実際のタスクでベンチマークを測定する', 'text': 'PromptQuorumを使って、GPT-4o・Claude・ローカルOllamaインスタンスに同時にプロンプトを送信します。出力品質・レイテンシー・コストを並べて比較してください。ベンチマークリーダーではなく、自分の実際のタスクとデータで勝利したモデルが正しい選択です。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Llama 3.1は本当にオープンソースですか、それともオープンウェイトだけですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'オープンウェイトのみです。LLaMA 3.1はLlama Community License 2.1の下でモデルウェイトをリリースしており、OSI準拠のオープンソースではありません。このライセンスは商用利用を許可していますが、派生物を「LLaMA」と命名することを禁止し、帰属表示を要求し、競業禁止条項が含まれています。真のオープンソースライセンス（Apache 2.0、MIT、GPL）にはこれらの制限はありません。' } },
          { '@type': 'Question', 'name': '2026年、LlamaのセルフホスティングとGPT-4o APIではどちらが安いですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '1日500万トークン未満ではGPT-4o APIの方が安く、インフラコストが不要です。500万〜1000万トークン/日ではコストが均衡します。1000万トークン/日を超えるとLLaMA 3.1のセルフホスティングが有利です。1億トークン/日では、セルフホスティングが10〜20倍安くなります。隠れたコスト要因：GPU償却・電気代・DevOps人件費・ダウンタイムリスクが、境界ケースをAPIに傾けることが多いです。' } },
          { '@type': 'Question', 'name': 'EU AI ActはオープンソースLLMに影響しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、デプロイ方法によって異なります。高リスクAIシステム（採用・信用・法的決定）はリスク文書・バイアステスト・監査証跡が必要です。オープンウェイトのオンプレミスデプロイはデータとログを制御できるためコンプライアンスが容易です。独自APIはベンダーの証明に依存することになります。10^25 FLOPを超えるトレーニングコンピュートを持つ汎用AIモデルには追加の透明性義務があります。' } },
          { '@type': 'Question', 'name': '2026年でGPT-4oに最も近いオープンソースLLMはどれですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70BとMistral Large 2が最も近いですが、差は残っています。MMULスコア：GPT-4o 88.7%、LLaMA 3.1 70B 80.5%、Mistral Large 81.2%。分類・要約・抽出などの特定タスクでは、オープンウェイトが独自モデルに匹敵します。差は年間約2〜3ポイント縮まっており、18〜24ヶ月で推論タスクの収束が見込まれます。' } },
          { '@type': 'Question', 'name': 'GPT-4oをファインチューニングできますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'できません。OpenAIのファインチューニングはGPT-4o mini、GPT-4、gpt-3.5-turboのみ対応しており、GPT-4o本体には対応していません。AnthropicはClaudeのファインチューニングを提供していません。GoogleはGeminiのファインチューニングを提供しています。オープンウェイトモデル（LLaMA、Mistral、Qwen）はLoRA・QLoRA・完全勾配学習でフルファインチューニングをサポートしており、生成されたウェイトを所有できます。' } },
          { '@type': 'Question', 'name': 'LLaMA 3.1 70Bをローカルで実行するために必要なハードウェアは？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'フル精度：約40GB VRAM（A100 80GBまたはデュアルRTX 3090/4090）。Ollamaによる4ビット量子化：約16〜20GB VRAM（RTX 4090 24GB単体）。LLaMA 3.1 8Bはコンシューマーハードウェアで動作（約8GB VRAM、RTX 3060またはApple M2 Pro）。Ollamaが量子化とモデル管理を自動的に処理します。' } },
          { '@type': 'Question', 'name': 'MacBookでオープンソースLLMを実行できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。Apple Silicon（M1/M2/M3/M4/M5）MacはOllamaまたはLM Studio経由でオープンウェイトモデルを実行できます。ユニファイドメモリアーキテクチャがRAMとGPUを共有 — 16GBのM2 ProはLLaMA 3.1 8Bを10〜15トークン/秒で実行できます。128GBメモリのM3 MaxはLLaMA 3.1 70Bを4ビット量子化で実行可能。専用GPUサーバーより遅いですが、開発・個人利用に十分です。' } },
          { '@type': 'Question', 'name': 'オープンソースLLMは独自モデルと同じ制限がありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '基本的な制限は同じです：両者ともにハルシネーション、知識カットオフ、コンテキストウィンドウ制限、推論の限界があります。オープンウェイトはサーバーサイドでパッチを当てられず、ウェイトの更新には新しいリリースと再学習が必要です。独自モデルはユーザーの操作なしに段階的に改善できます。オープンウェイトのファインチューニングで特定の制限（ドメイン知識、トーン）を緩和できますが、知識カットオフやハルシネーションリスクなどの構造的制約は克服できません。' } },
          { '@type': 'Question', 'name': '2026年でコーディングに最適なオープンウェイトモデルはどれですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70BとMistral Large 2が最強のオープンウェイトコーディングモデルです。HumanEvalスコア（コード生成ベンチマーク）は73〜78%で、GPT-4oの約90%、Claude 4.6 Sonnetの約87%と比較されます。Python・SQL・構造化出力ではオープンウェイトが競争力を持ちます。複雑なアルゴリズム設計やマルチファイル推論では、独自モデルが依然として優位性を維持しています。' } },
          { '@type': 'Question', 'name': 'オープンソースLLMを商用アプリケーションに使用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。LLaMA・Mistral・Qwenはいずれもライセンスの下で商用利用を明示的に許可しています。主な制限：派生物を「LLaMA」と命名できない（改名必須）。ライセンスの帰属表示が必要。LLaMA 2は月間アクティブユーザー7億人超の組織を制限していましたが（LLaMA 3.xで削除）。ほとんどのチームはオープンウェイトを内部（プライベート推論）でデプロイしており、命名の問題を完全に回避しています。' } },
          { '@type': 'Question', 'name': 'LoRAとは何ですか？オープンウェイトのファインチューニングで重要な理由は？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LoRA（Low-Rank Adaptation）は、全レイヤーで完全なバックプロパゲーションを行うのではなく、少数のアダプターウェイト（モデルパラメータの約1〜5%）のみを学習するファインチューニング手法です。これにより、品質損失を最小限に抑えながら学習コストを完全ファインチューニングの5〜10分の1に削減できます。QLoRAは4ビット量子化でこれを拡張し、コンシューマーGPU（16〜24GB VRAM）でのファインチューニングを可能にします。LoRAはLLaMAやMistralを完全な再学習なしにドメイン特化タスクに適応させる標準的なアプローチです。' } },
        ],
      },
      sections: {
        tldr: {
          title: 'キーポイント',
          isTldr: true,
          items: [
            '**オープンウェイトモデルは大規模利用でコストを抑え、独自モデルはフロンティアパフォーマンスと管理されたインフラを提供します。** 1日500万トークン未満ではAPIの方が安く、1000万トークン/日を超えるとオープンウェイトのセルフホスティングがコスト面で有利です。',
            'オープンウェイト = ダウンロード可能なモデルウェイト（LLaMA、Mistral、Qwen）、独自 = APIのみアクセス（GPT-4o、Claude 4.6、Gemini 2.5）。「オープンウェイト」はオープンソースライセンスとは異なります。',
            'パフォーマンスの差は縮まっています：LLaMA 3.1 70BとMistral Large 2は分類・要約・構造化タスクで独自モデルに匹敵しますが、複雑な推論では依然として差があります（MMULの差：88.7% vs 80〜81%）。',
            '独自モデルの強み：フロンティア推論・ツール統合・管理されたインフラ。オープンウェイトの強み：完全なファインチューニング・ローカルデプロイ・データ漏洩なし・EU AI Actコンプライアンス。',
            'オープンウェイトはGPUインフラとDevOpsスキルが必要。独自モデルはAPIキーとネットワークアクセスのみ。コストだけでなく、インフラの準備状況に基づいて選択してください。',
            'ファインチューニング：オープンウェイトモデルはLoRA・QLoRA・完全学習をサポート。独自モデルは限定的（OpenAI/Google）または不可（Anthropic）。',
            'プライバシー/コンプライアンス：ローカルにデプロイされたオープンウェイト = データがインフラ外に出ない。独自APIはデータをベンダーサーバー経由で送信するため、医療・金融・法律のコンプライアンス規則に違反する可能性があります。',
          ],
        },

        whatIsOpenSource: {
          title: 'オープンソースLLMとは何ですか？',
          content: [
            '**「オープンソース」と「オープンウェイト」は同義語ではありません。** オープンソースライセンス（Apache 2.0、MIT、GPL）はソースコードに適用され、無制限の商用・プライベート利用を許可します。オープンウェイトとは、学習済みモデルウェイトがダウンロード可能ですが、特殊なライセンスの下で制限される場合があることを意味します。LLaMA 3.1はオープンウェイトであり、オープンソースではありません — MetaはLlama Community License 2.1の下でウェイトをリリースしており、商用利用は許可されていますが、派生モデルを「LLaMA」と命名することを禁止し、帰属表示を要求する制限が含まれています。',
            '**独自モデルはオープンウェイトでもオープンソースでもありません。** OpenAI（GPT-4o）・Anthropic（Claude 4.6 Sonnet）・Google（Gemini 2.5 Pro）はモデルウェイトをリリースしていません。APIを通じてのみアクセスできます。ウェイトはクローズドのままで、自分でモデルを確認・ダウンロード・修正・デプロイすることはできません。',
            'この区別を理解することは、コンプライアンス・カスタマイズ・データ主権の面で重要です。[LLMが内部でどのように機能するかを学ぶ](/prompt-engineering/how-llms-actually-work?lang=ja)と、なぜウェイトが重要なのかが理解できます。',
          ],
        },

        whatIsProprietary: {
          title: '独自LLMとは何ですか？',
          content: [
            '**独自LLMはAPIを通じてのみアクセスできるクローズドモデルです — ベンダーがウェイト・学習データ・安全アライメント・すべての更新を管理します。** OpenAI（GPT-4o）・Anthropic（Claude 4.6 Sonnet）・Google（Gemini 2.5 Pro）・Mistral APIは独自モデルです。ウェイトをダウンロードしたり、学習データを確認したり、ローカルで推論を実行したり、モデルウェイトを直接カスタマイズしたりすることはできません。',
            '**価格はベンダー管理サーバーでのトークン単位のAPI課金です。** GPT-4oは入力100万トークンあたり$5、出力100万トークンあたり$15です。Claude 4.6 Sonnetは$3/$15。Gemini 2.5 Proは$1.25/$2.50（200K以下のコンテキスト）。インフラコストはかかりませんが、月額コストを正確に予測することはできず、コストは使用量に応じてスケールします。',
            '**独自ベンダーはモデルの更新・挙動・アライメントを管理します。** OpenAIがGPT-4oを更新すると、新しいバージョンが自動的に適用されます。安全アライメント・Constitutional AI・指示への従い方はベンダーの責任です。規制産業では、これがコンプライアンスを簡素化する場合があります — ベンダーが監査証跡と公開された安全慣行を維持します。',
          ],
        },

        definitions: {
          title: '主要概念と定義',
          content: [
            '**オープンウェイトモデル。** 学習中に学習した数値パラメータ（ウェイト）が公開されており、ダウンロード・修正・ファインチューニング・自己ホスティングが可能な大規模言語モデル。例：LLaMA 3.1（Meta）、Mistral Large 2（Mistral AI）、Qwen 2.5（Alibaba）。オープンソースライセンスと混同しないこと。「オープンウェイト」はダウンロード可能なモデルファイルに関するものであり、必ずしもソースコードやOSI準拠のライセンスを意味しません。',
            '**独自LLM。** ウェイトが非公開で決してリリースされない大規模言語モデル。アクセスはベンダーのAPIを通じてのみ可能で、トークン課金とネットワーク接続が必要です。例：GPT-4o（OpenAI）、Claude 4.6 Sonnet（Anthropic）、Gemini 2.5 Pro（Google）。ユーザーはモデルをダウンロード・検査・修正・自己ホスティングすることができません。',
            '**ファインチューニング。** 事前学習済みモデルをドメインまたはタスクに特化した新しい小規模データセットで再学習するプロセス。ファインチューニングはモデルのウェイトを更新して、特定のユースケース（例：カスタマーサービスのトーン、ドメイン語彙）に特化させます。オープンウェイトモデルはLoRA・QLoRA・完全バックプロパゲーションによるフルファインチューニングをサポートしています。ほとんどの独自モデルはファインチューニングを制限または禁止しています。',
            '**学習データカットオフ。** モデルがその日付以降のイベントや情報の知識を持たない日付。GPT-4oのカットオフは2024年10月、Claude 4.6 Sonnetは2025年初頭、Gemini 2.5 Proは2024年10月です。モデルはカットオフ日以降のイベントについて正確な情報を提供できません。',
            '**モデルウェイト。** モデル学習中に学習された数値パラメータ（数十億から数兆の数字）。ウェイトはモデルの挙動・知識・推論パターンを決定します。オープンウェイトモデルはこれらのファイルをリリースします（モデルサイズによって約15〜800GB）。独自モデルはウェイトを秘密に保ちます。',
          ],
        },

        questionDifference: {
          title: 'オープンソースLLMと独自LLMの違いは何ですか？',
          content: 'オープンソースLLM（LLaMA 3.1、Mistral、Qwen）はモデルウェイトを公開しており、組織がダウンロード・検査・ファインチューニング・自己ホスティングを行えます。独自LLM（GPT-4o、Claude、Gemini）はベンダーが所有しており、APIを通じてのみアクセスできます。ユーザーは独自ウェイトをダウンロードまたは修正できませんが、管理されたインフラとベンダーの更新の恩恵を受けられます。',
        },

        questionPerformance: {
          title: 'オープンソースLLMは独自モデルと同程度の性能ですか？',
          content: '多くのタスクで、はい。推論ベンチマーク（MMLU）でのパフォーマンスの差は7〜8ポイントに縮まっています。分類・要約・ドメイン固有タスクでは、LLaMA 3.1 70Bなどのオープンウェイトモデルが独自モデルに匹敵します。独自モデルは複雑な多段階推論・エージェントオーケストレーション・マルチモーダル入力処理で依然としてリードしています。',
        },

        questionWhenToUse: {
          title: '企業はいつオープンソースLLMを使用すべきですか？',
          content: 'データプライバシーが必須の場合（医療・金融・法律）、1日1000万トークン以上を処理する場合、ドメイン固有のファインチューニングが必要な場合、またはEU AI Actのコンプライアンスがオンプレミスのデータ保管を要求する場合に、オープンソースLLMを使用すべきです。オープンウェイトモデルはベンダーロックインとトークン単位のAPI課金も排除します。',
        },

        questionCanReplace: {
          title: 'オープンソースLLMは独自AIモデルを置き換えられますか？',
          content: '多くのユースケースで、はい。オープンソースLLMは分類・要約・抽出・ドメイン固有タスクで本番対応しています。独自モデルは複雑な推論・マルチモーダル入力・ツール統合・インフラ不要のデプロイで優位性を維持しています。コスト・プライバシー・パフォーマンス要件に基づいてタスクをルーティングするハイブリッドアプローチは、どちらのモデルクラスだけに依存するよりも優れたパフォーマンスを発揮します。',
        },

        featureComparison: {
          title: '機能クイック比較',
          columns: ['機能', 'オープンソースLLM', '独自LLM'],
          rows: [
            { '機能': 'コスト', 'オープンソースLLM': 'インフラのみ（セルフホスト$0.50〜2.00/時間）', '独自LLM': 'トークン課金（入力100万トークンあたり$0.15〜5.00）' },
            { '機能': '制御', 'オープンソースLLM': '完全 — ウェイトを所有、ファインチューニングと修正が可能', '独自LLM': '限定的 — ベンダーがモデルと更新を管理' },
            { '機能': 'セットアップ', 'オープンソースLLM': '複雑 — GPU・VRAM・DevOpsスキルが必要', '独自LLM': '簡単 — APIキーとネットワーク接続のみ' },
            { '機能': 'パフォーマンス', 'オープンソースLLM': '80〜82%（MMLU）— 特定タスクで競争力あり', '独自LLM': '88〜90%（MMLU）— 一般推論でより高い性能' },
            { '機能': 'データプライバシー', 'オープンソースLLM': '完全制御 — データがインフラ外に出ない', '独自LLM': 'プロバイダー依存 — データがベンダーサーバーを経由' },
          ],
          tableFormat: true,
        },

        decisionFramework: {
          title: '意思決定フレームワーク：どちらを選ぶべきか？',
          content: '**このフレームワークを使用して30秒で決断してください。** 以下のカテゴリのいずれかにユースケースが当てはまるか確認してください。複数の条件が当てはまる場合は、プロジェクトへの重要度で重み付けしてください。',
          items: [
            '**オープンソースLLMを選ぶ場合：**',
            '• データプライバシーが重要な場合（医療・金融・法律・EU GDPR）',
            '• 完全なモデル制御とカスタマイズが必要な場合（ファインチューニング・ドメイン特化）',
            '• 1日1000万以上のトークンを処理する場合（大規模利用でコスト削減が支配的）',
            '• インターネット接続なしで運用する場合（潜水艦・航空機・オフラインネットワーク）',
            '• EU AI Actのコンプライアンスが高リスクAIシステムに必要な場合',
            '• ベンダーロックインを避け独立性を維持したい場合',
            '',
            '**独自LLMを選ぶ場合：**',
            '• 推論と多段階タスクでフロンティアパフォーマンスが必要な場合',
            '• 1日500万トークン未満を処理する場合（APIはインフラより安価）',
            '• インフラオーバーヘッドなしと管理されたスケーリングが必要な場合',
            '• マルチモーダル入力（画像・音声）の信頼性が必要な場合',
            '• ツール統合とエージェントオーケストレーションが必要な場合',
            '• ベンダー管理の安全アライメントと更新を好む場合',
            '• GPUリソースやDevOpsの専門知識がない場合',
            '',
            '**ハイブリッドアプローチ（両方）を選ぶ場合：**',
            '• 混合ユースケースがある場合：プライベート作業はオープンウェイト、複雑な推論は独自',
            '• プライバシー・コスト・レイテンシー要件に基づいてリクエストをインテリジェントにルーティングできる場合',
            '• 1つのベンダーにコミットする前にモデルを比較したい場合',
          ],
        },

        quickReference: {
          title: '2026年のオープンソースvs独自モデル：クイック比較',
          columns: ['モデル', 'タイプ', 'コンテキストウィンドウ', '概算コスト', '最適なユースケース'],
          rows: [
            { 'モデル': 'GPT-4o', 'タイプ': '独自', 'コンテキストウィンドウ': '128Kトークン', '概算コスト': '入力/出力100万トークンあたり$5/$15', '最適なユースケース': 'ツール統合・エージェント・マルチモーダル推論' },
            { 'モデル': 'Claude 4.6 Sonnet', 'タイプ': '独自', 'コンテキストウィンドウ': '200Kトークン', '概算コスト': '入力/出力100万トークンあたり$3/$15', '最適なユースケース': 'ライティング・コードレビュー・構造化推論' },
            { 'モデル': 'Gemini 2.5 Pro', 'タイプ': '独自', 'コンテキストウィンドウ': '200万トークン', '概算コスト': '入力/出力100万トークンあたり$1.25/$2.50（200K以下）', '最適なユースケース': '長文書調査・Google統合' },
            { 'モデル': 'LLaMA 3.1 70B', 'タイプ': 'オープンウェイト', 'コンテキストウィンドウ': '131Kトークン', '概算コスト': 'A100 GPU（セルフホスト）で約$2/時間', '最適なユースケース': 'プライバシー・ファインチューニング・大規模コスト削減' },
            { 'モデル': 'Mistral Large 2', 'タイプ': 'オープンウェイト', 'コンテキストウィンドウ': '123Kトークン', '概算コスト': 'A100 GPU（セルフホスト）で約$2/時間', '最適なユースケース': 'ヨーロッパ向けデプロイ・競争力のある推論' },
            { 'モデル': 'Qwen 2.5 72B', 'タイプ': 'オープンウェイト', 'コンテキストウィンドウ': '128Kトークン', '概算コスト': 'A100 GPU（セルフホスト）で約$2/時間', '最適なユースケース': 'アジア太平洋ワークロード・中国語処理' },
            { 'モデル': 'Mistral 7B', 'タイプ': 'オープンウェイト', 'コンテキストウィンドウ': '32Kトークン', '概算コスト': 'コンシューマーGPU（セルフホスト）で約$0.50/時間', '最適なユースケース': 'テスト・プロトタイプ・コスト重視の作業' },
          ],
          tableFormat: true,
        },

        openSourceLandscape: {
          title: '2026年のオープンウェイトの状況',
          content: [
            '**オープンソースLLMにより、組織はモデルウェイトをダウンロード・検査・修正し、ベンダー依存やトークン単位のAPIコストなしにローカルでデプロイできます。** 2026年の主要モデルは、MetaのLLaMA 3.1・Mistral Large 2・Qwen 2.5・その他コミュニティライセンスの下でリリースされたモデルです。',
            '**MetaのLLaMA 3.1ファミリーは独自モデルに対する主要なオープンウェイトの競合です。** LLaMA 3.1は3つのサイズがあります：8B（推論に約8GB VRAM）・70B（約40GB VRAM）・405B（複数GPUにわたる約800GB+ VRAM）。3つすべてが131Kトークンのコンテキストウィンドウをサポートしており、多くの独自モデルと同等かそれを上回ります。LLaMA 3.1は15兆トークンの多言語テキストで学習されており、新しいバリアントは複数の言語を競争力を持ってサポートしています。',
            '**Mistral AIは2つの強力な候補を提供しています：Mistral 7BとMistral Large 2。** Mistral 7Bは32Kコンテキストを持つ70億パラメータのスリムなモデルで、コンシューマーグレードの推論と迅速なプロトタイピングに最適です。Mistral Large 2は123Kコンテキストで123Bパラメータにスケールし、「フロンティアライト」パフォーマンス帯をターゲットにしており、LLaMA 70Bや独自モデルと直接競合します。両方ともMistral Community Licenseの下で商用利用が可能です。',
            '**Qwen 2.5（Alibaba）と新興モデル（Falcon、Phi-4）が状況を補完しています。** Qwen 2.5 72Bは128Kコンテキストをサポートし、中国語タスクで優れています。アジア太平洋市場を対象とするチームに有用です。Phi-4（Microsoft）やFalcon 180Bなどの小型モデルは、コスト重視または特化したユースケースをターゲットにしています。すべてダウンロード可能で、自己ホスティング可能で、LoRAまたは完全学習によるファインチューニングをサポートしています。',
          ],
        },

        proprietaryLandscape: {
          title: '2026年の独自モデルの状況',
          content: [
            '**独自LLMはベンダー管理のAPIを通じてのみアクセスできます。モデルウェイトは決してリリースされず、ダウンロード・修正・ローカルデプロイはできません。** ユーザーはトークン単位のAPI課金を支払い、モデルの更新・安全ポリシー・パフォーマンス特性に関するベンダーの管理を受け入れます。',
            '**OpenAIのGPT-4oは推論のリーダーとして地位を維持しています。** GPT-4oは2024年10月の学習カットオフで128Kトークンのコンテキストをサポートしています。ツール使用・エージェントワークフロー・マルチモーダル入力（画像・テキスト）・複雑な多段階推論で優れています。APIの価格：入力100万トークンあたり$5、出力100万トークンあたり$15（2026年3月現在）。GPT-4oはAPIのみです。[コンテキストウィンドウがAIシステムにどう影響するか](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=ja)を参照して、トレードオフを理解してください。',
            '**AnthropicのClaude 4.6 Sonnetはライティングとコード品質ベンチマークで支配的です。** Claudeは200Kトークンのコンテキストをサポートしており、GPT-4oの2倍で、より長い文書と長い会話が可能です。学習データのカットオフ：2025年初頭。APIの価格：入力100万トークンあたり$3、出力100万トークンあたり$15。Claudeは公開のファインチューニングを提供していません。Anthropicはベンチマーク最大化よりも解釈可能性と安全アライメントを優先しています。',
            '**GoogleのGemini 2.5 Proは最大のコンテキストウィンドウを提供しています：200万トークン。** これにより、本の長さの文書処理・徹底的な調査・長い多ターンの会話が可能になります。価格：入力100万トークンあたり$1.25（200K以下のコンテキスト）、出力100万トークンあたり$10。200K超のコンテキストには高い料金が適用されます。GeminiはGoogle Workspace・Calendar・Gmail・Webサーチと深く統合されています。学習データのカットオフ：2024年10月。GeminiモデルのファインチューニングはGoogleが提供しています。',
          ],
        },

        performanceBenchmarks: {
          title: 'ベンチマークパフォーマンス：2026年の差の現状',
          content: [
            '**独自モデルは一般推論（MMLU）でまだリードしていますが、差は7〜8ポイントに縮まっています。** MMLU（Massive Multitask Language Understanding）は57の学術分野を網羅する広範なベンチマークです。[LLMが実際にどのように機能するか](/prompt-engineering/how-llms-actually-work?lang=ja)が推論能力に関係する理由については、トランスフォーマーアーキテクチャに関する詳細解説をご覧ください。現在のスコア：',
            '',
            'GPT-4o: 88.7%（OpenAI、2024年）',
            'Claude 3.5 Sonnet: 88.3%（Anthropic、2024年）',
            'LLaMA 3.1 70B: 80.5%（Meta、2024年）',
            'Mistral Large 2: 81.2%（Mistral AI、2024年）',
            'Qwen 2.5 72B: 82.1%（Alibaba、2024年）',
            '',
            '**オープンウェイトと独自モデルのパフォーマンスの差は、2022年の15〜20ポイントから2026年の推論タスクでの7〜8ポイントに縮まっています。** 特化タスク（コーディング・数学・要約・分類）では、オープンウェイトモデルが独自モデルと同等またはそれ以上のパフォーマンスを発揮しています。',
            '',
            '残りの差は主に抽象推論と[ツール使用オーケストレーション](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=ja)にあります。— Touvron et al., "Llama 3 Herd of Models", 2024',
            '',
            '**重要な注意点：** ベンチマークは狭いスキルを測定します。タスク固有のパフォーマンスは変動します：分類・要約・抽出では、LLaMA 3.1 70BがGPT-4oと同等またはそれ以上のパフォーマンスを示すことが多いです。複雑な多段階推論（代数、長い思考の連鎖）では、独自モデルが優位性を維持しています。唯一の信頼できるベンチマークは、実際のタスクでテストすることです — [ユースケースに最適なモデルの選び方](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=ja)を参照してください。',
          ],
        },

        costAnalysis: {
          title: 'コスト分析：API課金 vs セルフホスティング',
          content: [
            '**直接コスト比較：独自APIは低量では有利、オープンウェイトのセルフホスティングは大規模で有利です。** 分岐点は通常1日500万〜1000万トークンです。このしきい値を下回ると、APIのシンプルさとインフラコストなしが独自モデルに有利。これを超えると、オープンウェイトのセルフホスティングがコスト効果的になります。',
            '',
            '2026年3月現在のAPIの価格：',
            '',
            'セルフホスティングのインフラコスト：NVIDIA A100 80GBはクラウドで約$2/時間でレンタル可能。RTX 4090コンシューマーハードウェアは電気代+償却（3年間）で約$1.50/時間。Mistral 7Bの場合、推論スループットはGPUあたり約50〜100トークン/秒、つまりGPUあたり約1.8〜3.6億トークン/日。Mistral Large 2またはLLaMA 70B：A100あたり約20〜30トークン/秒、つまり約170〜260万トークン/日。これらのスループットで：',
            '',
            '**1日500万トークンの場合：** A100セルフホスティングのコストは約$2.50/日。Claude Sonnetのコスト：500万 × ($3 + $15) / 100万 = $90/日（平均で入力50%、出力50%と仮定）。APIの方がまだ安価。',
            '',
            '**1日5000万トークンの場合：** セルフホスティングにA100が20台必要 = $50/日。APIコスト：$900/日。オープンウェイトが圧倒的。',
            '',
            '**1日1億トークンの場合：** A100が40台必要 = $100/日。APIコスト：$1,800/日。オープンウェイトは18倍安価。',
            '',
            '価格の確認：[OpenAI Pricing](https://openai.com/pricing) · [Anthropic Pricing](https://www.anthropic.com/api) · [Google Pricing](https://ai.google.dev/pricing) — 価格は四半期ごとに変更されます。詳細なトークンコストの内訳については[トークン・コスト・制限の解説](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=ja)を参照してください。',
          ],
          columns: ['モデル', '入力（100万トークンあたり）', '出力（100万トークンあたり）'],
          rows: [
            { 'モデル': 'GPT-4o', '入力（100万トークンあたり）': '$5.00', '出力（100万トークンあたり）': '$15.00' },
            { 'モデル': 'Claude 4.6 Sonnet', '入力（100万トークンあたり）': '$3.00', '出力（100万トークンあたり）': '$15.00' },
            { 'モデル': 'Gemini 2.5 Pro', '入力（100万トークンあたり）': '$1.25（200K以下）', '出力（100万トークンあたり）': '$2.50' },
          ],
          tableFormat: true,
        },

        privacyAndDataSovereignty: {
          title: 'プライバシー・データ主権・EU AI Act',
          content: [
            '**ローカルにデプロイされたオープンウェイトモデル = データがインフラ外に出ない。** Ollamaを使用してプライベートGPUでLLaMA 3.1を実行すると、推論データ・メタデータ・クエリログはネットワーク外に出ません。これがデータ主権です：完全な制御を維持できます。独自API（OpenAI・Anthropic・Google）は、外部サーバーへのネットワーク経由でリクエストを送信する必要があります。契約上のデータ削除があっても、データは一時的にベンダーのインフラを経由してコンプライアンスのためにログに記録されます。',
            '**EU AI Act（2024年）は特定のLLMアプリケーションを「高リスク」と指定しており、リスク文書・バイアステスト・監査証跡が必要です。** カテゴリには重要な決定を下すシステムが含まれます（採用・信用・法的発見・給付金決定）。高リスクシステムは意思決定の方法の記録を維持し、非差別を証明し、人間の監視をサポートする必要があります。オンプレミスにデプロイされたオープンウェイトモデルはこれを容易にします — 監査証跡とデータストレージを管理できます。独自APIはこれを難しくします — ベンダーのコンプライアンスレポートに依存することになり、規制産業には不十分な場合があります。',
            '**規制産業（医療・金融・法律サービス）では、オープンウェイトが必須であることが多いです。** HIPAA（医療）・SOX（金融）・弁護士秘密特権はデータ所在地を要求します — つまりデータが管轄区域外に出ることはできません。米国や他の国にある独自APIはこれらの要件に違反します。これらのセクターのチームは通常、オンプレミスインフラにオープンウェイトモデル（LLaMA・Mistral・商用配布版）をデプロイしています。',
          ],
        },

        customizationAndFineTuning: {
          title: 'ファインチューニングとカスタマイズ：オープンウェイトが勝る点',
          content: [
            '**オープンウェイトモデルはフルファインチューニングを許可します。独自モデルはこれを制限または禁止しています。** ファインチューニングとは、モデルのウェイトを自分のデータで再学習させて、特定のドメインに特化させることを意味します。効率的なファインチューニングにはLoRA（Low-Rank Adaptation）、量子化学習にはQLoRA、十分なコンピュートがある場合は完全なバックプロパゲーション学習を使用できます。ファインチューニング後、モデルはあなたのものになります — 生成されたウェイトを所有し、どこにでもデプロイでき、オフラインで更新できます。',
            '**独自のファインチューニング対応状況：** OpenAIのファインチューニングAPIはGPT-4o mini・GPT-4（旧モデル）のみ対応。GPT-4oフラッグシップには対応していません。AnthropicはAPIを通じたClaudeのファインチューニングを提供していません。GoogleはGeminiの限定的なファインチューニングを提供しています。これらのいずれもファインチューニングされたウェイトの所有権を許可しません — 独自モデルのファインチューニング済みコピーをレンタルするだけです。',
            '**セキュリティ上の考慮事項：** 独自APIでファインチューニングを行う場合、学習データがベンダーサーバーにアップロードされます。機密ドメインでは、これがコンプライアンス規則に違反します。オープンウェイトのファインチューニングはオンプレミスで実施されます。外部APIを使用する際の追加の攻撃面の考慮事項については[プロンプトインジェクションとセキュリティ](/prompt-engineering/prompt-injection-and-security?lang=ja)を参照してください。',
          ],
        },

        comparisonTable: {
          title: 'オープンソースLLMと独自LLMの主な違い',
          content: '**オープンウェイトモデルは大規模利用でコストを削減し、完全なカスタマイズを可能にします。独自モデルは高いトークン単位コストで迅速なデプロイと管理されたインフラを提供します。** 1日500万トークン未満では独自APIの方が通常安価。1000万トークン/日を超えると、セルフホストのオープンウェイトがコスト面で勝ります。量・プライバシー要件・インフラ準備状況に基づいて選択してください。',
          columns: ['次元', 'オープンウェイトモデル', '独自モデル'],
          rows: [
            { '次元': 'コストモデル', 'オープンウェイトモデル': 'セルフホスト：インフラ$0.50〜2.00/時間。デプロイ後は無料。トークン課金なし。', '独自モデル': 'API課金：入力100万トークンあたり$0.15〜5.00、出力$0.30〜15.00。使用量に応じてスケール。' },
            { '次元': 'パフォーマンス上限', 'オープンウェイトモデル': '最良のオープンウェイト（LLaMA 70B、Mistral Large）：MMLU 80〜82%。特定タスクで競争力あり、抽象推論では劣る。', '独自モデル': 'フロンティア（GPT-4o、Claude、Gemini）：MMLU 88〜90%。推論・エージェント・マルチモーダルでより高い上限。' },
            { '次元': 'コンテキストウィンドウ', 'オープンウェイトモデル': 'LLaMA 3.1：131K。Mistral Large：123K。Qwen：128K。長文書に十分。', '独自モデル': 'GPT-4o：128K。Claude：200K。Gemini 2.5：200万。大きなウィンドウで長い調査が可能。' },
            { '次元': 'プライバシー', 'オープンウェイトモデル': '完全なデータ主権。データがインフラ外に出ない。ベンダーによるログなし。', '独自モデル': 'データがベンダーサーバーを経由。処理中の一時的な露出があるが、契約上の削除は約束される。' },
            { '次元': 'ファインチューニング', 'オープンウェイトモデル': 'フルファインチューニング対応（LoRA、QLoRA、完全学習）。ウェイトを所有。ドメインカスタマイズ可能。', '独自モデル': '限定的（OpenAIのミニモデルのみ）または不可（Anthropic Claude）。生成されたウェイトを所有できない。' },
            { '次元': 'データ主権', 'オープンウェイトモデル': 'オンプレミスデプロイ：完全主権。EU AI Act対応。HIPAA/SOX/法律コンプライアンス達成可能。', '独自モデル': 'API依存：データ所在地が不明確。規制産業でのコンプライアンス証明が困難。' },
            { '次元': '推論速度', 'オープンウェイトモデル': 'ハードウェア依存。A100：20〜30トークン/秒（70B）。RTX 4090：10〜15トークン/秒。', '独自モデル': '最適化サーバー：30〜50+トークン/秒。決定論的。ベンダーが最適化を管理。' },
            { '次元': 'サポート', 'オープンウェイトモデル': 'コミュニティ主導。ドキュメントは充実しているが、ベンダーSLAなし。自己サポート。', '独自モデル': 'ベンダーサポート込み。API SLA・インシデント対応・稼働率保証。' },
            { '次元': '更新サイクル', 'オープンウェイトモデル': 'オフライン。新バージョンリリース時に採用タイミングを自分で選択。強制更新なし。', '独自モデル': 'サーバーサイド。ベンダーがモデルを更新。バージョン管理APIエンドポイントで適応。' },
            { '次元': 'ベンダーロックイン', 'オープンウェイトモデル': 'ロックインなし。どこでもデプロイ可能。自由にベンダー変更またはセルフホスト。コンピュートを所有。', '独自モデル': '中〜高ロックイン。モデルの挙動・API・価格はベンダーが管理。移行には移行コストが発生。' },
          ],
          tableFormat: true,
        },

        promptEngineeringImplications: {
          title: 'プロンプトエンジニアリングにおけるオープンソースvs独自LLM',
          content: [
            '**オープンウェイトモデルにより、より低コストで深いプロンプト実験が可能になります。** ローカルのLLaMA 3.1インスタンスに対して同じプロンプトを100回実行し、トークン課金なしで言葉・温度・構造を反復できます。ドメインのプロンプト-レスポンスペアでモデルをファインチューニングします。プライベートインフラでジェイルブレイクとエッジケースを実験します。このサンドボックス環境は研究・プロトタイピング・モデルの挙動理解に最適です。',
            '**独自APIはテストが速く、スケールが容易です。** プロンプトを書いてGPT-4oまたはClaude APIを呼び出すと、インフラセットアップなしで数ミリ秒で結果が得られます。VRAM・量子化・モデルのダウンロードを管理する必要はありません。A/Bテスト・本番デプロイ・可変トラフィックの処理では、独自モデルが運用の複雑さを軽減します。',
            '**ハイブリッドアプローチ：オープンウェイトでプロトタイプ、独自モデルで検証。** LLaMA 3.1 8Bを使用してローカルでプロンプトを開発・改善します（高速な反復、コストなし）。プロンプト戦略が固まったら、GPT-4oまたはClaude 4.6でテストしてフロンティアパフォーマンスを確認します。優れたパフォーマンスの方を本番環境にデプロイします。これにより、オープンウェイトの柔軟性と独自モデルの信頼性を組み合わせられます。',
          ],
        },

        whenOpenSource: {
          title: 'オープンソースモデルをいつ使用するか',
          content: '**データプライバシー・大規模コスト・深いカスタマイズ要件が制約を支配する場合、オープンウェイトを選択してください。** オープンウェイトが優れているケース：',
          items: [
            '**機密データ（医療・金融・法律）：** 患者記録・金融データ・弁護士-クライアント間のコミュニケーションは外部APIを経由できません。オンプレミスにデプロイされたオープンウェイトはデータを管理下に置き、コンプライアンスを達成できます。HIPAA・GDPR・弁護士秘密特権のコンプライアンスにはLLaMA 3.1またはMistralを使用してください。[プロンプトインジェクションに対するセキュリティ管理策](/prompt-engineering/prompt-injection-and-security?lang=ja)と組み合わせてモデル入力を保護してください。',
            '**高量オートメーション（1日5000万+トークン）：** 1日約1000万トークンを超えると、セルフホスティングが独自APIより安価になります。[APIコストが法外になる](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=ja)高量の分類・抽出・要約・データ処理パイプラインにはオープンウェイトを使用してください。',
            '**ドメインカスタマイズとファインチューニング：** ラベル付きデータセットがあり、モデルを自分の用語・文体・タスク分布に特化させる必要がある場合。オープンウェイトはLoRA・QLoRA・フルファインチューニングを許可します。独自APIはカスタマイズを禁止または制限しています。',
            '**地理的またはネットワーク上の制約：** インターネットアクセスなしで推論が必要な場合（潜水艦・航空機・遠隔地）。オープンウェイトはオフラインで動作します。独自APIはネットワーク接続が必要です。',
            '**EU AI Actコンプライアンス（高リスクデプロイ）：** 採用システム・信用決定・給付金決定。監査証跡・リスク文書・オンプレミスのデータ所在地はオープンウェイトの方が容易です。独自APIはコンプライアンスの実証を困難にします。',
            '**コストの予測可能性：** オープンウェイトのインフラコストは固定（ハードウェア+電気代）。独自APIは使用量に応じて予測不可能にスケールします。コスト重視の組織には、オープンウェイトの予算管理が明確です。',
          ],
        },

        whenProprietary: {
          title: '独自モデルをいつ使用するか',
          content: '**絶対的なパフォーマンス・管理されたインフラ・安全アライメントが最も重要な場合、独自モデルを選択してください。** 独自モデルが優れているケース：',
          items: [
            '**複雑な多段階推論：** エージェントワークフロー・複雑な研究合成・抽象的な問題解決。GPT-4o・Claude 4.6・Gemini 2.5はMMULで7〜8ポイントの優位性を維持しています。オープンウェイトは特定タスクで差を縮めていますが、一般推論では依然として劣っています。',
            '**長コンテキストの文書調査（100万+トークン）：** Gemini 2.5 Proは200万トークンのコンテキストを持つ唯一の本番モデルです。書籍全体・研究コーパス・膨大な判例法の処理では、オープンウェイトモデルには匹敵するものがありません。文書の長さがオープンウェイトの能力を超える場合は独自モデルを使用してください。',
            '**インフラオーバーヘッドなし：** GPUリソース・DevOpsの専門知識・モデルインフラのオンコール対応がない場合。独自APIが可用性・スケーリング・最適化を処理します。シンプルさのために支払い、運用負担を回避してください。',
            '**ツール統合とエージェント：** OpenAIはツール使用・関数呼び出し・多段階エージェントオーケストレーションでリードしています。システムが信頼性の高い関数ルーティングと多ターンのエージェント動作を必要とする場合、GPT-4oが実用的な選択肢です。',
            '**管理された安全性とアライメント：** 独自ベンダーはConstitutional AI・RLHF・指示への従い方に多大な投資をしています。チャットボット・カスタマーサービス・ユーザー向けシステムでは、独自モデルが通常すぐに使える安全性が高いです。',
            '**マルチモーダル入力（画像・音声）：** GPT-4oとClaude 4.6 Sonnetは画像入力を確実に処理します。マルチモーダルのオープンウェイトモデルは存在しますが、成熟度が低いです。信頼性の高いビジョン-言語タスクには独自モデルを使用してください。',
          ],
        },

        hybridArchitecture: {
          title: 'ハイブリッドAIアーキテクチャ（オープン+クローズドモデル）',
          content: '**組織は、機密データとコスト重視のタスクにはオープンウェイトモデルを、複雑な推論とマルチモーダル処理には独自モデルにルーティングするハイブリッドAIアーキテクチャを使用できます。** このアプローチにより、オープンウェイトのコスト効率・プライバシー・カスタマイズ性と、独自LLMのパフォーマンスと管理されたインフラを組み合わせられます。',
          items: [
            '**プライバシー敏感データ → ローカルのオープンウェイト、複雑な推論 → 独自API。** 患者記録・金融データ・法的文書をOllamaを通じてローカルで動作するLLaMA 3.1にルーティングします。多段階の研究合成・コード生成・エージェントオーケストレーションをGPT-4oまたはClaude 4.6 Sonnetにルーティングします。このハイブリッドアプローチでコンプライアンスを達成しながらフロンティアパフォーマンスを維持できます。',
            '**コスト重視のバッチ処理 → ローカルのオープンウェイト、インタラクティブなリクエスト → 独自API。** バックグラウンドタスク（分類・抽出・要約）にはセルフホストのLLaMA 3.1 70Bを使用（A100で約$2/時間）。レイテンシーが重要なリアルタイムのユーザーリクエストにはGPT-4o API（100万トークンあたり$5/$15）を使用。ハイブリッドにより総コストとレイテンシーが削減されます。',
            '**マルチモデル比較とコンセンサス → PromptQuorum。** PromptQuorumを使用して、単一の[プロンプト](/prompt-engineering/what-is-prompt-engineering?lang=ja)をローカルOllama・GPT-4o・Claude 4.6・Gemini 2.5 Proに同時にディスパッチします。品質・レイテンシー・コストを並べて比較してください。本番用のウィナーを選択するか、アンサンブル推論のために出力を組み合わせてください。',
            '**テストとステージング → オープンウェイト、本番サービング → 独自。** ローカルで動作するLLaMA 3.1 8Bを使用して迅���なプロトタイピングと開発を行います。プロンプトとパイプラインが検証されたら、信頼性・ツール統合・安全保証が重要な本番トラフィック用にGPT-4oまたはClaudeにアップグレードします。',
          ],
        },

        nuancedTakes: {
          title: '一般的な通説が間違っている点',
          content: '**オープンウェイトは常に独自APIより安価ではありません。** 1日500万トークン未満では、インフラコスト（GPU償却・電気代・DevOps人件費）がAPI課金を超えるため、独自API（GPT-4o mini、Claude Haiku、Gemini Flash）の方が多くの場合安価です。1000万トークン/日を超えた場合にのみ、オープンウェイトのセルフホスティングがコスト最適になります。',
          items: [
            '**パフォーマンスの差はタスク固有であり、普遍的ではありません。** 独自モデルはMMUL（推論）で7〜8ポイントリードしています。しかし分類・要約・抽出・多くのドメインタスクでは、LLaMA 3.1 70Bが独自モデルと同等またはそれ以上のパフォーマンスを発揮します。「独自モデルの方が優れている」という言い方は広すぎます。実際のタスクでベンチマークを測定してください。',
            '**「オープンソース」のライセンスは複雑であり、実際にはオープンソースではないことが多いです。** LLaMA・Mistral・Qwenは OSI準拠のオープンソースではなく、非標準ライセンスの下での「オープンウェイト」です。これらを「オープンソース」と呼ぶのは誤解を招き、法的な混乱を招きます。法的保護に依存する前に、顧問と一緒にライセンスを確認してください。',
            '**独自モデルが常により安全またはアライメントされているわけではありません。** [すべてのモデルはハルシネーションします](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=ja)。独自の学習データ・カットオフ・Constitutional AIは、ジェイルブレイク・[プロンプトインジェクション](/prompt-engineering/prompt-injection-and-security?lang=ja)・悪用を防ぐことができません。オープンウェイトは独自のアライメントと同等またはそれ以上になるようにファインチューニングできます。安全性はモデルクラスではなく、デプロイとガードレールの特性です。',
          ],
        },

        keyTerms: {
          title: '主要用語',
          items: [
            '[オープンウェイト](/prompt-engineering/prompt-engineering-glossary#open-weights?lang=ja) — モデルウェイトはダウンロード可能だが、ライセンスによって制限される場合がある',
            '[ファインチューニング](/prompt-engineering/prompt-engineering-glossary#fine-tuning?lang=ja) — ドメイン固有のデータでモデルウェイトを再学習させる',
            '[LoRA](/prompt-engineering/prompt-engineering-glossary#lora?lang=ja) — 低ランク適応による効率的なファインチューニング（完全学習コストの5〜10%）',
            '[RAG](/prompt-engineering/prompt-engineering-glossary#rag?lang=ja) — Retrieval-Augmented Generation：外部文書でLLM出力を根拠付ける',
            '[コンテキストウィンドウ](/prompt-engineering/prompt-engineering-glossary#context-window?lang=ja) — 入力+出力合計の最大トークン容量',
            '[VRAM](/prompt-engineering/prompt-engineering-glossary#vram?lang=ja) — モデル推論に必要なGPUメモリ',
          ],
        },

        promptExample: {
          title: '実践的なプロンプト構造',
          content: [
            '[悪いプロンプト]「オープンソースとGPT-4o、どちらが良いですか？」',
            '[良いプロンプト]「1日2000万トークンのカスタマーサポートチケットを処理する必要があります。EU外にデータを送信できません。このユースケースについて、オープンウェイト（LLaMA 3.1 70Bセルフホスト）vs 独自（GPT-4o APIを使用）を比較してください：1日2000万トークンでのインフラコスト・GDPRデータ所在地コンプライアンス・ファインチューニングの実現可能性・チケット分類タスクでの期待品質を含めてください。」',
          ],
        },

        relatedReading: {
          title: '関連資料',
          items: [
            '[基礎：AIの限界と構造的制約](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=ja) — 独自モデルとオープンウェイトモデルの両方がハルシネーションやコンテキスト上限などの基本的な制限を共有する理由',
            '[基礎：LLMが実際にどのように機能するか](/prompt-engineering/how-llms-actually-work?lang=ja) — トランスフォーマーアーキテクチャを理解することで、オープンウェイトと独自モデルが同じコアメカニズムを共有する理由がわかる',
            '[基礎：GPT-4o、Claude、それともGemini？正しいモデルの選び方](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=ja) — フロンティア独自モデルの詳細比較',
            '[テクニック：RAG解説 — Retrieval-Augmented Generation](/prompt-engineering/rag-explained?lang=ja) — 任意のモデル（独自またはオープンウェイト）を外部知識で拡張する方法',
            '[基礎：トークン・コスト・制限](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=ja) — 詳細なコスト分析とトークンエコノミクス',
            '[基礎：プロンプトインジェクションとセキュリティ](/prompt-engineering/prompt-injection-and-security?lang=ja) — 両モデルクラスのセキュリティ上の考慮事項',
          ],
        },

        faq: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'Llama 3.1は本当にオープンソースですか、それともオープンウェイトだけですか？',
              a: 'オープンウェイトのみです。LLaMA 3.1はLlama Community License 2.1の下でモデルウェイトをリリースしており、OSI準拠のオープンソースではありません。このライセンスは商用利用を許可していますが、派生物を「LLaMA」と命名することを禁止し、帰属表示を要求し、競業禁止条項が含まれています。真のオープンソースライセンス（Apache 2.0、MIT、GPL）にはこれらの制限はありません。LLaMAはクローズドな独自アクセスよりも許容的ですが、法的には「オープンソース」ではありません。',
            },
            {
              q: '2026年、LlamaのセルフホスティングとGPT-4o APIではどちらが安いですか？',
              a: '量によって異なります。1日500万トークン未満では、インフラコストがAPI課金を超えるため、GPT-4o API（またはGPT-4o mini）の方が安価です。500万〜1000万トークン/日ではコストが大体均衡します。1000万トークン/日を超えると、LLaMA 3.1のセルフホスティングがコスト面で有利になります。1億トークン/日では、セルフホスティングが10〜20倍安くなります。隠れたコスト要因：GPU償却・電気代（約$0.10/kWh）・DevOps人件費・ダウンタイムリスクが、境界ケースをAPIに傾けることが多いです。',
            },
            {
              q: 'EU AI ActはオープンソースLLMに影響しますか？',
              a: 'はい、デプロイ方法によって異なります。EU AI Act（2024年）は「高リスク」AIシステムを指定しています — 採用・信用スコアリング・法的発見 — リスク文書・バイアステスト・監査証跡が必要です。オンプレミスにデプロイされたオープンウェイトはデータとログを制御できるためコンプライアンスが容易です。独自APIはベンダーの証明に依存することになります。フロンティアモデル（10^25 FLOPを超えるトレーニングコンピュートを持つ汎用AIモデル）には追加の透明性義務があります。規制産業では、コンプライアンス顧問に相談してください。',
            },
            {
              q: '2026年でGPT-4oに最も近いオープンソースLLMはどれですか？',
              a: 'LLaMA 3.1 70BとMistral Large 2が最も近いですが、差は残っています。MMLU（推論ベンチマーク）で、GPT-4oは88.7%に対してLLaMA 3.1 70Bは80.5%、Mistral Largeは81.2%です。特定タスク（分類・要約・抽出）では、オープンウェイトが独自モデルに匹敵します。差は年間約2〜3ポイント縮まっており、18〜24ヶ月で推論タスクの収束が見込まれます。',
            },
            {
              q: 'GPT-4oをファインチューニングできますか？',
              a: 'できません。OpenAIのファインチューニングはGPT-4o mini・GPT-4・gpt-3.5-turboのみ対応しており、GPT-4o本体には対応していません。AnthropicはClaudeのファインチューニングを提供していません。GoogleはGeminiのファインチューニングを提供しています。オープンウェイトモデル（LLaMA、Mistral、Qwen）はLoRA・QLoRA・完全勾配学習でフルファインチューニングをサポートしており、生成されたウェイトを所有できます。',
            },
            {
              q: 'LLaMA 3.1 70Bをローカルで実行するために必要なハードウェアは？',
              a: 'フル精度：約40GB VRAM（A100 80GBまたはデュアルRTX 3090/4090）。Ollamaによる4ビット量子化：約16〜20GB VRAM（RTX 4090 24GB単体）。LLaMA 3.1 8Bはコンシューマーハードウェアで動作（約8GB VRAM、RTX 3060またはApple M2 Pro）。Ollamaが量子化とモデル管理を自動的に処理します。ほとんどのローカルデプロイに推奨されます。',
            },
            {
              q: 'MacBookでオープンソースLLMを実行できますか？',
              a: 'はい。Apple Silicon（M1/M2/M3/M4/M5）MacはOllamaまたはLM Studio経由でオープンウェイトモデルを実行できます。ユニファイドメモリアーキテクチャがRAMとGPUを共有 — 16GBのM2 ProはLLaMA 3.1 8Bを10〜15トークン/秒で実行できます。128GBメモリのM3 MaxはLLaMA 3.1 70Bを4ビット量子化で実行可能。専用GPUサーバーより遅いですが、開発・個人利用に十分です。',
            },
            {
              q: 'オープンソースLLMは独自モデルと同じ制限がありますか？',
              a: '基本的な制限は同じです：両者ともにハルシネーション・知識カットオフ・コンテキストウィンドウ制限・推論の限界があります。オープンウェイトはサーバーサイドでパッチを当てられず、ウェイトの更新には新しいリリースと再学習が必要です。独自モデルはユーザーの操作なしに段階的に改善できます。オープンウェイトのファインチューニングで特定の制限（ドメイン知識、トーン）を緩和できますが、知識カットオフやハルシネーションリスクなどの構造的制約は克服できません。',
            },
            {
              q: '2026年でコーディングに最適なオープンウェイトモデルはどれですか？',
              a: 'LLaMA 3.1 70BとMistral Large 2が最強のオープンウェイトコーディングモデルです。HumanEvalスコアは73〜78%で、GPT-4oの約90%、Claude 4.6 Sonnetの約87%と比較されます。Python・SQL・構造化出力ではオープンウェイトが競争力を持ちます。複雑なアルゴリズム設計やマルチファイル推論では、独自モデルが依然として大きな優位性を維持しています。',
            },
            {
              q: 'オープンソースLLMを商用アプリケーションに使用できますか？',
              a: 'はい。LLaMA・Mistral・Qwenはいずれもライセンスの下で商用利用を明示的に許可しています。主な制限：派生物を「LLaMA」と命名できない（改名必須）。ライセンスの帰属表示が必要。LLaMA 2は月間アクティブユーザー7億人超の組織を制限していましたが（LLaMA 3.xで削除）。ほとんどのチームはオープンウェイトを内部（プライベート推論）でデプロイしており、命名の問題を完全に回避しています。',
            },
            {
              q: 'LoRAとは何ですか？オープンウェイトのファインチューニングで重要な理由は？',
              a: 'LoRA（Low-Rank Adaptation）は、全レイヤーで完全なバックプロパゲーションを行うのではなく、少数のアダプターウェイト（モデルパラメータの約1〜5%）のみを学習するファインチューニング手法です。これにより、品質損失を最小限に抑えながら学習コストを完全ファインチューニングの5〜10分の1に削減できます。QLoRAは4ビット量子化でこれを拡張し、コンシューマーGPU（16〜24GB VRAM）でのファインチューニングを可能にします。LoRAはLLaMAやMistralを完全な再学習なしにドメイン特化タスクに適応させる標準的なアプローチです。',
            },
          ],
        },

        sources: {
          title: '参考文献',
          items: [
            'Meta AI, "Llama 3 Herd of Models"（Touvron et al., 2024）— アーキテクチャ・コンテキストウィンドウ・ベンチマークスコア・学習データのドキュメント',
            'Mistral AI, Model Cards and Technical Documentation（2024）— Mistral Large 2とMistral 7Bの仕様',
            'Hendrycks et al., "Measuring Massive Multitask Language Understanding"（2021）— MMULベンチマークの定義とベースラインスコア。arXiv:2009.03300',
            'Chen et al., "Evaluating Large Language Models Trained on Code"（2021）— コード生成のためのHumanEvalベンチマーク。arXiv:2107.03374',
            '欧州連合, "Artificial Intelligence Act"（2024）— 高リスクAIシステムカテゴリ・GPAIモデルの義務・コンプライアンス要件',
            'Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models"（2021）— LoRA手法の定義と効率性の結果。arXiv:2106.09685',
            'Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs"（2023）— QLoRA手法とコンシューマーGPUでのファインチューニング結果。arXiv:2305.14314',
          ],
        },
      },
    },
    zh: {
      theme: 'Techniques',
      title: '开源与专有LLM：竞争格局',
      intro: '开放权重模型（如LLaMA 3.1和Mistral）提供控制力与成本节省；专有模型（如GPT-4o和Claude 4.6 Sonnet）则提供前沿性能。两类模型的能力正在趋同，但在访问方式、定制化程度和合规要求上存在明显分歧。',
      metaDescription: '开源与专有LLM对比：2026年的成本、控制权、隐私保护、微调能力与性能权衡分析。为您的用例选择合适的模型。',
      publishDate: '2026-03-24',
      seoTitle: '2026年开源vs专有LLM比较：成本、控制与性能',
      dateModified: '2026-04-01',
      readTime: '阅读约14分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '开源LLM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms?lang=zh',
        'inLanguage': 'zh',
        headline: '开源与专有LLM：竞争格局',
        description: '开放权重模型（如LLaMA 3.1和Mistral）提供控制力与成本节省；专有模型（如GPT-4o和Claude 4.6 Sonnet）则提供前沿性能。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-01',
        keywords: ['开源LLM', 'LLaMA', 'Mistral', '专有模型', 'GPT-4o', 'Claude', '微调', '成本分析', '开放权重', '本地推理'],
        teaches: [
          'LLM中开放权重与开源许可的区别',
          '开放权重模型与专有模型在成本和性能上的权衡',
          '何时选择本地推理与API访问',
        ],
        about: [
          { '@type': 'Thing', name: 'Open-source LLMs' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large' },
          { '@type': 'Thing', name: 'EU AI Act compliance' },
          { '@type': 'Thing', name: 'LLM fine-tuning' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        mentions: [
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
          { '@type': 'Thing', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'LLaMA 3.1' },
          { '@type': 'Thing', name: 'Mistral Large 2' },
          { '@type': 'Thing', name: 'Qwen 2.5' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/open-source-vs-proprietary-llms', width: 1200, height: 630 },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '开放权重模型与专有LLM——全面对比',
        description: '从成本、性能、隐私、微调、上下文窗口、数据主权、速度、支持、更新频率和供应商锁定十个维度对比开放权重模型与专有LLM。',
        numberOfItems: 10,
        url: 'https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '成本模型',
            description: '开放权重：每小时基础设施费用0.50–2.00美元；部署后免费，无按token计费。专有：API按token计费，输入每百万token 0.15–5.00美元，输出每百万token 0.30–15.00美元。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '性能上限',
            description: '开放权重（LLaMA 70B、Mistral Large）：MMLU 80–82%，在特定任务上具有竞争力。专有（GPT-4o、Claude、Gemini）：MMLU 88–90%，在推理和多模态方面具有更高上限。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '上下文窗口',
            description: '开放权重：LLaMA 3.1为131K，Mistral Large为123K，Qwen为128K——足以处理长文档。专有：GPT-4o为128K，Claude为200K，Gemini 2.5 Pro为200万token。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '隐私保护',
            description: '开放权重：完全数据主权，数据不离开您的基础设施，供应商零日志记录。专有：数据经过供应商服务器传输；承诺合同删除，但短暂曝光仍会发生。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '微调能力',
            description: '开放权重：支持完整微调（LoRA、QLoRA、全量训练）；您拥有生成的权重。专有：有限（仅OpenAI mini模型）或不可用（Anthropic Claude）。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: '数据主权',
            description: '开放权重：本地部署实现完全主权；可符合欧盟AI法案、HIPAA、SOX要求。专有：依赖API；数据驻留不明确；合规性难以证明。',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: '推理速度',
            description: '开放权重：取决于硬件——A100每秒20–30个token（70B），RTX 4090每秒10–15个token。专有：优化服务器每秒30–50+个token；供应商负责优化。',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '技术支持',
            description: '开放权重：社区驱动文档；无供应商SLA；自行支持。专有：包含供应商支持、API SLA、事故响应和正常运行时间保证。',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: '更新频率',
            description: '开放权重：离线运行；您控制新版本的采用；无强制更新。专有：服务器端；供应商更新模型；适应或使用版本化API端点。',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: '供应商锁定',
            description: '开放权重：零锁定；随处部署；拥有自己的计算资源。专有：中度到高度锁定；模型行为、API和定价受供应商控制。',
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何在开源与专有LLM之间做出选择',
        'description': '基于成本、隐私、定制化和性能需求，选择开放权重或专有模型的决策框架。',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': '评估数据隐私需求', 'text': '如果数据必须保留在本地（医疗、金融、法律、欧盟AI法案高风险部署），则必须使用开放权重模型。专有模型通过外部API路由数据，可能违反HIPAA、GDPR或律师-客户特权要求。' },
          { '@type': 'HowToStep', 'position': 2, 'name': '计算每日token量', 'text': '计算100万、1000万和1亿每日token的API成本。每天低于约500万token时，专有API通常更便宜，因为基础设施成本为零。每天超过1000万token时，开放权重自托管具有成本效益；超过1亿token时，开放权重明显胜出。' },
          { '@type': 'HowToStep', 'position': 3, 'name': '评估微调需求', 'text': '如果您需要针对特定领域、术语或任务分布对模型进行专业化，则需要开放权重模型。开放权重支持LoRA、QLoRA和全量微调——您拥有生成的权重。专有API禁止或严格限制定制化。' },
          { '@type': 'HowToStep', 'position': 4, 'name': '检查基础设施准备情况', 'text': '开放权重需要VRAM、GPU和DevOps技能进行自托管（LLaMA 70B：在A100上约需40GB VRAM）。专有模型只需API密钥和网络连接，零基础设施。如果缺乏GPU资源或随叫随到的运维能力，专有模型是更简单的选择。' },
          { '@type': 'HowToStep', 'position': 5, 'name': '在实际任务上进行基准测试', 'text': '使用PromptQuorum同时将您的提示词分发给GPT-4o、Claude和本地Ollama实例。并排比较输出质量、延迟和成本。在您的具体任务和数据上胜出的模型才是正确选择——而不是基准测试排名第一的模型。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'LLaMA 3.1真的是开源的还是只是开放权重？', 'acceptedAnswer': { '@type': 'Answer', 'text': '只是开放权重。LLaMA 3.1在Llama Community License 2.1下发布模型权重，该许可证不符合OSI的开源标准。该许可证允许商业使用，但限制将衍生品命名为"LLaMA"，要求署名，并包含竞业禁止条款。真正的开源许可证（Apache 2.0、MIT、GPL）没有这些限制。' } },
          { '@type': 'Question', 'name': '2026年哪个更便宜——自托管LLaMA还是使用GPT-4o API？', 'acceptedAnswer': { '@type': 'Answer', 'text': '每天低于500万token时，GPT-4o API更便宜——无基础设施成本。每天500万至1000万token时，成本持平。每天超过1000万token时，自托管LLaMA 3.1在成本上胜出。每天1亿token时，自托管便宜10–20倍。隐藏因素：GPU摊销、电费、DevOps人力成本和停机风险往往使边界情况倾向于API。' } },
          { '@type': 'Question', 'name': '欧盟AI法案是否影响开源LLM？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的，取决于部署方式。高风险AI系统（招聘、信贷、法律决策）需要风险文档、偏见测试和审计跟踪。本地部署的开放权重模型使合规更容易——您控制数据和日志。专有API迫使依赖供应商证明。训练计算量超过10^25 FLOP的通用模型面临额外的透明度义务。' } },
          { '@type': 'Question', 'name': '2026年哪个开源LLM最接近GPT-4o？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B和Mistral Large 2最接近。MMLU分数：GPT-4o 88.7%，LLaMA 3.1 70B 80.5%，Mistral Large 81.2%。在分类、摘要和提取任务上，开放权重现已与专有模型相当。推理差距每年缩小约2–3个百分点。' } },
          { '@type': 'Question', 'name': '我可以微调GPT-4o吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不可以。OpenAI微调仅适用于GPT-4o mini、GPT-4和gpt-3.5-turbo。Anthropic不为Claude提供微调。Google提供Gemini微调。开放权重模型（LLaMA、Mistral、Qwen）通过LoRA、QLoRA或全量训练支持完整微调。' } },
          { '@type': 'Question', 'name': '在本地运行LLaMA 3.1 70B需要什么硬件？', 'acceptedAnswer': { '@type': 'Answer', 'text': '全精度：约40GB VRAM（A100 80GB或双RTX 4090）。4位量化：约16–20GB VRAM（单张RTX 4090）。LLaMA 3.1 8B可在消费级硬件上运行（约8GB VRAM）。Ollama自动处理量化和优化。' } },
          { '@type': 'Question', 'name': '我可以在MacBook上运行开源LLM吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。搭载Apple Silicon（M1/M2/M3/M4/M5）的Mac可通过Ollama或LM Studio运行开放权重模型。M2 Pro 16GB可以10–15个token/秒的速度运行LLaMA 3.1 8B。M3 Max 128GB可运行LLaMA 3.1 70B（4位量化）。速度比专用GPU服务器慢，但适合开发使用。' } },
          { '@type': 'Question', 'name': '开源LLM与专有模型有相同的局限性吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在基础层面是的：两者都会产生幻觉，都有知识截止日期和上下文限制。开放权重无法进行服务器端修补——更新需要新版本发布。专有模型可以逐步改进。对开放权重进行微调可以缓解特定领域的限制，但无法克服结构性约束。' } },
          { '@type': 'Question', 'name': '2026年哪个开放权重模型最适合编程？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLaMA 3.1 70B和Mistral Large 2最强。HumanEval分数：约73–78%，而GPT-4o约90%，Claude 4.6 Sonnet约87%。在Python、SQL和结构化输出方面具有竞争力。专有模型在复杂算法设计和多文件推理方面仍保持优势。' } },
          { '@type': 'Question', 'name': '我可以将开源LLM用于商业应用吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。LLaMA、Mistral和Qwen明确允许商业使用。主要限制：不能将衍生品品牌命名为"LLaMA"。LLaMA 2限制月活用户超过7亿的组织（LLaMA 3.x中已取消）。内部私有推理部署完全避免了命名问题。' } },
          { '@type': 'Question', 'name': 'LoRA是什么？为什么它对开放权重微调如此重要？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LoRA（低秩适应）训练约1–5%的模型参数作为适配器，而非全量反向传播，将训练成本降低5–10倍。QLoRA通过4位量化将其扩展到消费级GPU（16–24GB VRAM）。LoRA是针对LLaMA和Mistral进行领域专业化而无需全量重训练的标准方法。' } },
        ],
      },
      sections: {
        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '**开放权重模型在规模化时成本更低；专有模型提供前沿性能和托管基础设施。** 每天低于500万token时，API更便宜。每天超过1000万token时，开放权重自托管在成本上胜出。',
            '开放权重 = 可下载的模型权重（LLaMA、Mistral、Qwen）；专有 = 仅限API访问（GPT-4o、Claude 4.6、Gemini 2.5）。"开放权重"与开源许可证不同。',
            '性能差距已缩小：LLaMA 3.1 70B和Mistral Large 2现已在分类、摘要和结构化任务上与专有模型相当——但在复杂推理方面仍有差距（MMLU差距：88.7% vs 80–81%）。',
            '专有优势：前沿推理、工具集成、托管基础设施。开放权重优势：完整微调、本地部署、零数据外泄、欧盟AI法案合规。',
            '开放权重需要GPU基础设施和DevOps技能；专有模型需要API密钥和网络访问。根据基础设施准备情况选择，而不仅仅是成本。',
            '微调：开放权重模型支持LoRA、QLoRA和全量训练；专有模型提供有限（OpenAI/Google）或无微调（Anthropic）选项。',
            '隐私/合规：本地部署的开放权重 = 数据不离开您的基础设施。专有API通过供应商服务器路由数据，可能违反医疗、金融或法律合规规定。',
          ],
        },

        whatIsOpenSource: {
          title: '什么是开源LLM？',
          content: [
            '**"开源"与"开放权重"并不同义。** 开源许可证（Apache 2.0、MIT、GPL）适用于源代码，允许不受限制的商业和私人使用。开放权重意味着训练好的模型权重可以下载，但可能受专门许可证的限制。LLaMA 3.1是开放权重，而非开源——Meta在Llama Community License 2.1下发布权重，允许商业使用但包含限制，禁止将衍生模型命名为"LLaMA"且要求署名。',
            '**专有模型既非开放权重也非开源。** OpenAI（GPT-4o）、Anthropic（Claude 4.6 Sonnet）和Google（Gemini 2.5 Pro）不发布模型权重。您只能通过API访问它们。权重保持封闭；您无法查看、下载、修改或自行部署模型。',
            '理解这一区别对合规、定制化和数据主权至关重要。[了解LLM内部工作原理以理解权重的重要性](/prompt-engineering/how-llms-actually-work?lang=zh)。',
          ],
        },

        whatIsProprietary: {
          title: '什么是专有LLM？',
          content: [
            '**专有LLM是封闭模型，只能通过API访问——供应商控制权重、训练数据、安全对齐和所有更新。** OpenAI（GPT-4o）、Anthropic（Claude 4.6 Sonnet）、Google（Gemini 2.5 Pro）和Mistral API都是专有的。您无法下载权重、查看训练数据、在本地运行推理或直接定制模型权重。',
            '**定价为供应商控制服务器上的按token API计费。** GPT-4o的输入费用为每百万token 5美元，输出为每百万token 15美元。Claude 4.6 Sonnet为3美元/15美元。Gemini 2.5 Pro为1.25美元/2.50美元（≤200K上下文）。您没有基础设施成本，但无法精确预测每月支出——成本随使用量扩展。',
            '**专有供应商对模型更新、行为和对齐保持控制。** 当OpenAI更新GPT-4o时，您会自动获得新版本。安全对齐、Constitutional AI和指令遵循是供应商的责任。对于受监管行业，这可以简化合规——供应商维护审计跟踪和已发布的安全实践。',
          ],
        },

        definitions: {
          title: '关键概念与定义',
          content: [
            '**开放权重模型。** 一种大型语言模型，其训练权重（训练过程中学习的数值参数）公开可用，可以下载、修改、微调和自托管。示例：LLaMA 3.1（Meta）、Mistral Large 2（Mistral AI）、Qwen 2.5（阿里巴巴）。不要与开源许可证混淆；"开放权重"是指可下载的模型文件，不一定是源代码或符合OSI的许可证。',
            '**专有LLM。** 一种大型语言模型，其权重保密且从不发布。访问完全通过供应商的API进行，需要按token计费和网络连接。示例：GPT-4o（OpenAI）、Claude 4.6 Sonnet（Anthropic）、Gemini 2.5 Pro（Google）。用户无法下载、检查、修改或自托管模型。',
            '**微调。** 在针对特定领域或任务的新的较小数据集上重新训练预训练模型的过程。微调更新模型的权重以专业化于您的用例（例如客服语气、领域词汇）。开放权重模型通过LoRA、QLoRA或全量反向传播支持完整微调；大多数专有模型限制或禁止微调。',
            '**训练数据截止日期。** 模型对此日期之后的事件或信息不具备知识的日期。GPT-4o的截止日期为2024年10月；Claude 4.6 Sonnet为2025年初；Gemini 2.5 Pro为2024年10月。模型无法提供截止日期后事件的准确信息。',
            '**模型权重。** 训练过程中学习的数值参数（数十亿到数万亿个数字）。权重决定了模型的行为、知识和推理模式。开放权重模型发布这些文件（约15–800 GB，取决于模型大小）；专有模型将权重保密。',
          ],
        },

        questionDifference: {
          title: '开源与专有LLM有什么区别？',
          content: '开源LLM（LLaMA 3.1、Mistral、Qwen）使模型权重公开可用——组织可以下载、检查、微调和自托管它们。专有LLM（GPT-4o、Claude、Gemini）由供应商拥有，只能通过API访问。用户无法下载或修改专有权重，但受益于托管基础设施和供应商更新。',
        },

        questionPerformance: {
          title: '开源LLM与专有模型一样好吗？',
          content: '在许多任务上，是的。推理基准（MMLU）上的性能差距已缩小至7–8个百分点。在分类、摘要和特定领域任务上，LLaMA 3.1 70B等开放权重模型现已与专有同类产品相当。专有模型在复杂多步骤推理、智能体编排和多模态输入处理方面仍然领先。',
        },

        questionWhenToUse: {
          title: '企业什么时候应该使用开源LLM？',
          content: '当数据隐私是强制要求时（医疗、金融、法律），当每天处理超过1000万token时，当需要特定领域微调时，或者当欧盟AI法案合规要求本地数据驻留时，企业应使用开源LLM。开放权重模型还消除了供应商锁定和按token API计费。',
        },

        questionCanReplace: {
          title: '开源LLM能取代专有AI模型吗？',
          content: '对于许多用例，可以。开源LLM在分类、摘要、提取和特定领域任务上已可用于生产。专有模型在复杂推理、多模态输入、工具集成和零基础设施部署方面保持优势。混合方法——根据成本、隐私和性能需求路由任务——优于单独依赖任一模型类别。',
        },

        featureComparison: {
          title: '快速功能对比',
          columns: ['功能', '开源LLM', '专有LLM'],
          rows: [
            { '功能': '成本', '开源LLM': '仅基础设施费用（自托管每小时0.50–2.00美元）', '专有LLM': '按token付费（输入每百万token 0.15–5.00美元）' },
            { '功能': '控制权', '开源LLM': '完全——拥有权重，可微调和修改', '专有LLM': '有限——供应商控制模型和更新' },
            { '功能': '部署难度', '开源LLM': '复杂——需要GPU、VRAM、DevOps技能', '专有LLM': '简单——仅需API密钥和网络访问' },
            { '功能': '性能', '开源LLM': '80–82%（MMLU）——在特定任务上有竞争力', '专有LLM': '88–90%（MMLU）——在通用推理上更高' },
            { '功能': '数据隐私', '开源LLM': '完全控制——数据不离开您的基础设施', '专有LLM': '取决于供应商——数据经过供应商服务器传输' },
          ],
          tableFormat: true,
        },

        decisionFramework: {
          title: '决策框架：您应该选择哪个？',
          content: '**用这个框架在30秒内做决定。** 回答：您的用例是否符合以下类别之一？如果多个标准适用，请根据对您项目的重要性加权。',
          items: [
            '**选择开源LLM的情况：**',
            '• 数据隐私至关重要（医疗、金融、法律、欧盟GDPR）',
            '• 您需要完全的模型控制和定制化（微调、领域专业化）',
            '• 您每天处理1000万+个token（规模化时成本节省显著）',
            '• 您在没有互联网访问的环境中运行（潜艇、飞机、离线网络）',
            '• 高风险AI系统需要符合欧盟AI法案',
            '• 您希望避免供应商锁定，保持独立性',
            '',
            '**选择专有LLM的情况：**',
            '• 您需要推理和多步骤任务的前沿性能',
            '• 您每天处理不到500万token（API比基础设施更便宜）',
            '• 您希望零基础设施开销和托管扩展',
            '• 您需要多模态输入（图像、音频）可靠性',
            '• 您需要工具集成和智能体编排',
            '• 您偏好供应商管理的安全对齐和更新',
            '• 您缺乏GPU资源或DevOps专业知识',
            '',
            '**选择混合方式（两者都用）的情况：**',
            '• 您有混合用例：私密工作使用开放权重，复杂推理使用专有',
            '• 您可以根据隐私/成本/延迟需求智能路由请求',
            '• 您希望在决定使用某一供应商之前比较模型',
          ],
        },

        quickReference: {
          title: '快速参考：2026年顶级开源与专有模型对比',
          columns: ['模型', '类型', '上下文窗口', '大致成本', '最适用场景'],
          rows: [
            { '模型': 'GPT-4o', '类型': '专有', '上下文窗口': '128K个token', '大致成本': '输入/输出每百万token 5/15美元', '最适用场景': '工具集成、智能体、多模态推理' },
            { '模型': 'Claude 4.6 Sonnet', '类型': '专有', '上下文窗口': '200K个token', '大致成本': '输入/输出每百万token 3/15美元', '最适用场景': '写作、代码审查、结构化推理' },
            { '模型': 'Gemini 2.5 Pro', '类型': '专有', '上下文窗口': '200万个token', '大致成本': '输入/输出每百万token 1.25/2.50美元（≤200K）', '最适用场景': '长文档研究、Google集成' },
            { '模型': 'LLaMA 3.1 70B', '类型': '开放权重', '上下文窗口': '131K个token', '大致成本': '在A100 GPU上约每小时2美元（自托管）', '最适用场景': '隐私保护、微调、规模化成本' },
            { '模型': 'Mistral Large 2', '类型': '开放权重', '上下文窗口': '123K个token', '大致成本': '在A100 GPU上约每小时2美元（自托管）', '最适用场景': '欧洲部署、有竞争力的推理' },
            { '模型': 'Qwen 2.5 72B', '类型': '开放权重', '上下文窗口': '128K个token', '大致成本': '在A100 GPU上约每小时2美元（自托管）', '最适用场景': '亚太地区工作负载、中文处理' },
            { '模型': 'Mistral 7B', '类型': '开放权重', '上下文窗口': '32K个token', '大致成本': '在消费级GPU上约每小时0.50美元（自托管）', '最适用场景': '测试、原型开发、成本敏感工作' },
          ],
          tableFormat: true,
        },

        openSourceLandscape: {
          title: '2026年开放权重市场格局',
          content: [
            '**开源LLM允许组织下载、检查和修改模型权重，然后在没有供应商依赖或按token API成本的情况下在本地部署。** 2026年领先的模型是Meta的LLaMA 3.1、Mistral Large 2、Qwen 2.5以及其他在社区许可证下发布的模型。',
            '**Meta的LLaMA 3.1系列是开放权重模型中与专有模型竞争的领先者。** LLaMA 3.1有三种规格：8B（推理约需8GB VRAM）、70B（约需40GB VRAM）和405B（多GPU约需800GB+ VRAM）。三种规格都支持131K token上下文窗口——与许多专有模型持平或更优。LLaMA 3.1在15万亿token的多语言文本上训练；较新的变体具有竞争性的多语言支持。',
            '**Mistral AI提供两款强劲竞争者：Mistral 7B和Mistral Large 2。** Mistral 7B是具有32K上下文的精简7B参数模型，适合消费级推理和快速原型开发。Mistral Large 2扩展到1230亿参数和123K上下文，目标是"前沿精简版"性能级别——直接与LLaMA 70B和专有模型竞争。两者均可在Mistral Community License下用于商业用途。',
            '**Qwen 2.5（阿里巴巴）和新兴模型（Falcon、Phi-4）构成了市场全貌。** Qwen 2.5 72B支持128K上下文，在中文任务上表现出色；适合服务亚太市场的团队。Phi-4（微软）和Falcon 180B等较小模型面向成本敏感或专业用例。所有这些都可下载、自托管，并通过LoRA或全量训练支持微调。',
          ],
        },

        proprietaryLandscape: {
          title: '2026年专有模型市场格局',
          content: [
            '**专有LLM完全通过供应商控制的API访问；模型权重从不发布，无法下载、修改或在本地部署。** 用户按token API计费，并接受供应商对模型更新、安全策略和性能特性的控制。',
            '**OpenAI的GPT-4o仍然是推理领域的领导者。** GPT-4o支持128K token上下文，训练截止日期为2024年10月。它在工具使用、智能体工作流、多模态输入（图像、文本）和复杂多步骤推理方面表现出色。API定价：每百万输入token 5美元，每百万输出token 15美元（2026年3月价格）。GPT-4o仅限API；权重从不发布。参见[上下文窗口如何影响您的AI系统](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=zh)以了解权衡。',
            '**Anthropic的Claude 4.6 Sonnet在写作和代码质量基准上占据主导地位。** Claude支持200K token上下文——是GPT-4o的2倍——能够处理更长的文档和更长的对话。训练数据截止日期：2025年初。API定价：每百万输入token 3美元，每百万输出token 15美元。Claude不提供公开微调。Anthropic将可解释性和安全对齐置于基准最大化之上。',
            '**Google的Gemini 2.5 Pro提供最大的上下文窗口：200万token。** 这使得处理完整书籍长度的文档、详尽研究和扩展多轮对话成为可能。定价：每百万输入token 1.25美元（≤200K上下文），每百万输出token 10美元；超过200K上下文时价格更高。Gemini与Google Workspace、日历、Gmail和网络搜索深度集成。训练数据截止日期：2024年10月。Gemini模型可进行微调。',
          ],
        },

        performanceBenchmarks: {
          title: '基准性能：2026年的差距现状',
          content: [
            '**专有模型在通用推理（MMLU）上仍然领先，但差距已缩小至7–8个百分点。** MMLU（大规模多任务语言理解）是涵盖57个学术学科的广泛基准。要了解[LLM实际工作原理](/prompt-engineering/how-llms-actually-work?lang=zh)对推理能力的重要性，请阅读我们关于transformer架构的深度解析。当前分数：',
            '',
            'GPT-4o: 88.7%（OpenAI，2024年）',
            'Claude 3.5 Sonnet: 88.3%（Anthropic，2024年）',
            'LLaMA 3.1 70B: 80.5%（Meta，2024年）',
            'Mistral Large 2: 81.2%（Mistral AI，2024年）',
            'Qwen 2.5 72B: 82.1%（阿里巴巴，2024年）',
            '',
            '**2022年开放权重与专有模型之间的性能差距从15–20个百分点缩小到2026年推理任务的7–8个百分点。** 在专项任务（编程、数学、摘要、分类）上，开放权重模型现已与专有同类产品持平或超越。',
            '',
            '剩余差距主要在抽象推理和[工具使用编排](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=zh)上。——Touvron等，"LLaMA 3模型群"，2024年',
            '',
            '**重要说明：** 基准测试衡量的是狭窄技能。特定任务性能各有不同：在分类、摘要和提取方面，LLaMA 3.1 70B经常与GPT-4o持平甚至超越。在复杂多步骤推理（代数、长思维链）方面，专有模型保持优势。唯一可靠的基准是在您的实际任务上测试——参见[如何为您的用例选择合适的模型](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=zh)。',
          ],
        },

        costAnalysis: {
          title: '成本分析：API定价与自托管对比',
          content: [
            '**直接成本对比：专有API在低量时占优；开放权重自托管在规模化时胜出。** 交叉点通常为每天500万至1000万token。在此阈值以下，API简便性和无基础设施成本有利于专有模型。在此之上，开放权重自托管具有成本效益。',
            '',
            '截至2026年3月的API定价：',
            '',
            '自托管基础设施成本：NVIDIA A100 80GB在云端租用约每小时2美元；RTX 4090消费级硬件成本约每小时1.50美元（电费+摊销，3年使用寿命）。对于Mistral 7B，每GPU推理吞吐量约为每秒50–100个token，即每天每GPU约1.8–3.6亿个token。Mistral Large 2或LLaMA 70B：每A100约每秒20–30个token，即每天约170–260万个token。按这些吞吐量计算：',
            '',
            '**每天500万token时：** A100自托管成本约每天2.50美元。Claude Sonnet的API成本：500万 × (3美元 + 15美元) / 100万 = 每天90美元（假设输入输出各50%）。API仍然更便宜。',
            '',
            '**每天5000万token时：** 需要20台A100自托管 = 每天50美元。API成本：每天900美元。开放权重明显胜出。',
            '',
            '**每天1亿token时：** 需要40台A100 = 每天100美元。API成本：每天1,800美元。开放权重便宜18倍。',
            '',
            '验证定价：[OpenAI定价](https://openai.com/pricing) · [Anthropic定价](https://www.anthropic.com/api) · [Google定价](https://ai.google.dev/pricing)——价格每季度变化。参见[token、成本与限制详解](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=zh)获取详细的token成本分析。',
          ],
          columns: ['模型', '输入（每百万token）', '输出（每百万token）'],
          rows: [
            { '模型': 'GPT-4o', '输入（每百万token）': '$5.00', '输出（每百万token）': '$15.00' },
            { '模型': 'Claude 4.6 Sonnet', '输入（每百万token）': '$3.00', '输出（每百万token）': '$15.00' },
            { '模型': 'Gemini 2.5 Pro', '输入（每百万token）': '$1.25（≤200K上下文）', '输出（每百万token）': '$2.50' },
          ],
          tableFormat: true,
        },

        privacyAndDataSovereignty: {
          title: '隐私、数据主权与欧盟AI法案',
          content: [
            '**本地部署的开放权重模型 = 数据零外泄。** 当您通过Ollama在私有GPU上运行LLaMA 3.1时，没有任何推理数据、元数据或查询日志离开您的网络。这就是数据主权：您保持完全控制。专有API（OpenAI、Anthropic、Google）要求您通过网络将请求发送到外部服务器。即使有合同数据删除承诺，数据仍会短暂经过供应商基础设施并被记录以供合规使用。',
            '**欧盟AI法案（2024年）将某些LLM应用定为"高风险"，要求风险文档、偏见测试和审计跟踪。** 类别包括做出重大决策的系统（招聘、信贷、法律发现、福利确定）。高风险系统必须维护决策记录、证明无歧视性，并支持人工监督。本地部署的开放权重模型使此类要求更容易满足——您控制审计跟踪和数据存储。专有API使此类要求更难满足——您依赖供应商合规报告，这对于受监管行业可能不够充分。',
            '**对于受监管行业（医疗、金融、法律服务），开放权重通常是强制要求。** HIPAA（医疗）、SOX（金融）和律师-客户特权要求数据驻留——意味着数据不能离开您的司法管辖区。基于美国或其他国家的专有API违反这些要求。这些领域的团队通常在本地基础设施上部署开放权重模型（LLaMA、Mistral或商业发行版）。',
          ],
        },

        customizationAndFineTuning: {
          title: '微调与定制化：开放权重的优势所在',
          content: [
            '**开放权重模型允许完整微调；专有模型限制甚至禁止微调。** 微调意味着在您自己的数据上重新训练模型权重，以将其专业化于您的领域。您可以使用LoRA（低秩适应）进行高效微调，使用QLoRA进行量化训练，或者在有足够算力时进行全量反向传播训练。微调后，模型成为您的——您拥有生成的权重，可以在任何地方部署它们，并可以离线更新它们。',
            '**专有微调可用性：** OpenAI微调API仅适用于GPT-4o mini、GPT-4（旧版模型），不适用于GPT-4o旗舰版。Anthropic不通过API为Claude提供微调。Google为Gemini提供有限的微调。这些都不允许拥有微调后的权重——您只是租用专有模型的微调副本。',
            '**安全考虑：** 在专有API上进行微调时，您的训练数据会上传到供应商服务器。对于敏感领域，这违反合规规定。开放权重微调保留在本地。参见[提示词注入与安全](/prompt-engineering/prompt-injection-and-security?lang=zh)了解使用外部API时的其他攻击面考虑因素。',
          ],
        },

        comparisonTable: {
          title: '开源与专有LLM的关键差异',
          content: '**开放权重模型在规模化时成本更低，支持完整定制化；专有模型以更高的按token成本提供更快的价值实现时间和托管基础设施。** 每天低于500万token时，专有API通常更便宜。每天超过1000万token时，自托管的开放权重在成本上胜出。根据您的量、隐私需求和基础设施准备情况做出选择。',
          columns: ['维度', '开放权重模型', '专有模型'],
          rows: [
            { '维度': '成本模型', '开放权重模型': '自托管：每小时0.50–2.00美元基础设施费用。部署后免费，无按token计费。', '专有模型': 'API计费：输入每百万token 0.15–5.00美元；输出每百万token 0.30–15.00美元。随使用量扩展。' },
            { '维度': '性能上限', '开放权重模型': '最佳开放权重（LLaMA 70B、Mistral Large）：MMLU 80–82%。在特定任务上有竞争力，在抽象推理上有差距。', '专有模型': '前沿（GPT-4o、Claude、Gemini）：MMLU 88–90%。在推理、智能体和多模态方面上限更高。' },
            { '维度': '上下文窗口', '开放权重模型': 'LLaMA 3.1：131K。Mistral Large：123K。Qwen：128K。足以处理长文档。', '专有模型': 'GPT-4o：128K。Claude：200K。Gemini 2.5：200万。更大窗口支持更长研究。' },
            { '维度': '隐私保护', '开放权重模型': '完全数据主权。数据不离开您的基础设施。供应商零日志记录。', '专有模型': '数据经过供应商服务器传输。承诺合同删除，但处理过程中短暂曝光。' },
            { '维度': '微调能力', '开放权重模型': '支持完整微调（LoRA、QLoRA、全量训练）。您拥有权重。支持领域定制化。', '专有模型': '有限（仅OpenAI mini模型）或不可用（Anthropic Claude）。您不拥有生成的权重。' },
            { '维度': '数据主权', '开放权重模型': '本地部署：完全主权。符合欧盟AI法案。可实现HIPAA/SOX/法律合规。', '专有模型': 'API依赖：数据驻留不明确。受监管行业难以证明合规性。' },
            { '维度': '推理速度', '开放权重模型': '取决于硬件。A100：每秒20–30个token（70B）。RTX 4090：每秒10–15个token。', '专有模型': '优化服务器：每秒30–50+个token。确定性。供应商负责优化。' },
            { '维度': '技术支持', '开放权重模型': '社区驱动。文档良好；无供应商SLA。自行支持。', '专有模型': '包含供应商支持。API SLA、事故响应、正常运行时间保证。' },
            { '维度': '更新频率', '开放权重模型': '离线运行。发布新版本；您选择何时采用。无强制更新。', '专有模型': '服务器端。供应商更新模型；您适应或使用版本化API端点。' },
            { '维度': '供应商锁定', '开放权重模型': '零锁定。随处部署。自由切换供应商或自托管。拥有自己的计算资源。', '专有模型': '中度到高度锁定。模型行为、API和定价受供应商控制。切换需要迁移工作。' },
          ],
          tableFormat: true,
        },

        promptEngineeringImplications: {
          title: '提示词工程中的开源与专有LLM',
          content: [
            '**开放权重模型以更低的成本支持更深入的提示词实验。** 您可以在本地LLaMA 3.1实例上对同一提示词运行100次，并在没有按token计费的情况下迭代措辞、温度和结构。在您领域的提示词-响应对上微调模型。在私有基础设施中实验越狱和边缘案例。这种沙盒环境非常适合研究、原型开发和理解模型行为。',
            '**专有API测试更快，更易于扩展。** 您编写一个提示词，调用GPT-4o或Claude API，在毫秒内获得结果，无需任何基础设施设置。无需管理VRAM、量化或模型下载。对于快速A/B测试、生产部署和处理可变流量，专有模型降低了运营复杂性。',
            '**混合方式：在开放权重上原型开发，在专有模型上验证。** 使用LLaMA 3.1 8B在本地开发和完善提示词（快速迭代，无成本）。一旦提示词策略确定，在GPT-4o或Claude 4.6上测试以确认前沿性能。将性能更好的模型部署到生产环境。这结合了开放权重的灵活性与专有模型的可靠性。',
          ],
        },

        whenOpenSource: {
          title: '何时使用开源模型',
          content: '**当数据隐私、规模化成本或深度定制需求主导您的约束时，选择开放权重。** 开放权重的优势场景：',
          items: [
            '**敏感数据（医疗、金融、法律）：** 患者记录、金融数据、律师-客户通信不能经过外部API传输。本地部署的开放权重将数据保留在您的控制之下，实现合规性。使用LLaMA 3.1或Mistral满足HIPAA、GDPR和律师-客户特权合规要求。配合[提示词注入安全控制措施](/prompt-engineering/prompt-injection-and-security?lang=zh)保护模型输入。',
            '**高量自动化（每天5000万+个token）：** 每天超过约1000万token时，自托管比专有API更便宜。对于[API成本会过高](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=zh)的高量分类、提取、摘要或数据处理管道，使用开放权重。',
            '**领域定制化和微调：** 您有标注数据集，需要模型在您的术语、写作风格或任务分布上进行专业化。开放权重支持LoRA、QLoRA或全量微调。专有API禁止或限制定制化。',
            '**地理或网络约束：** 您需要在没有互联网访问的情况下进行推理（潜艇、飞机、远程站点）。开放权重可离线运行。专有API需要网络连接。',
            '**欧盟AI法案合规（高风险部署）：** 招聘系统、信贷决策、福利确定。审计跟踪、风险文档和本地数据驻留通过开放权重更容易实现。专有API使合规性更难证明。',
            '**成本可预测性：** 开放权重基础设施成本是固定的（硬件+电费）。专有API随使用量不可预测地扩展。对于成本敏感的组织，开放权重预算更清晰。',
          ],
        },

        whenProprietary: {
          title: '何时使用专有模型',
          content: '**当绝对性能、托管基础设施或安全对齐最为重要时，选择专有模型。** 专有模型的优势场景：',
          items: [
            '**复杂多步骤推理：** 智能体工作流、复杂研究综合和抽象问题解决。GPT-4o、Claude 4.6和Gemini 2.5在MMLU上保持7–8个百分点的优势。开放权重在特定任务上缩小差距，但在通用推理上仍有差距。',
            '**长上下文文档研究（100万+个token）：** Gemini 2.5 Pro是目前唯一具有200万token上下文的生产模型。对于处理整本书、研究语料库或详尽案例法，没有开放权重模型能与其匹敌。当文档长度超过开放权重能力时，使用专有模型。',
            '**零基础设施开销：** 您缺乏GPU资源、DevOps专业知识或模型基础设施的随叫随到运维能力。专有API处理可用性、扩展和优化。为简便性付费；避免运营负担。',
            '**工具集成和智能体：** OpenAI在工具使用、函数调用和多步骤智能体编排方面处于领先地位。如果您的系统需要可靠的函数路由和多轮智能体行为，GPT-4o是实用的选择。',
            '**托管安全和对齐：** 专有供应商在Constitutional AI、RLHF和指令遵循方面投入大量资源。对于聊天机器人、客服和面向用户的系统，专有模型开箱即用通常更安全。',
            '**多模态输入（图像、音频）：** GPT-4o和Claude 4.6 Sonnet可靠地处理图像输入。多模态开放权重模型存在但不够成熟。对于可靠的视觉-语言任务，使用专有模型。',
          ],
        },

        hybridArchitecture: {
          title: '混合AI架构（开放与封闭模型结合）',
          content: '**组织可以使用混合AI架构，将敏感数据和成本敏感任务的请求路由到开放权重模型，同时将复杂推理和多模态工作分发给专有模型。** 这种方法结合了开放权重的成本效率、隐私保护和定制化能力，以及专有LLM的性能和托管基础设施。',
          items: [
            '**隐私敏感数据 → 本地开放权重；复杂推理 → 专有API。** 将患者记录、金融数据和法律文件路由到通过Ollama本地运行的LLaMA 3.1。将多步骤研究综合、代码生成和智能体编排路由到GPT-4o或Claude 4.6 Sonnet。这种混合方式在保持前沿性能的同时实现合规性。',
            '**成本敏感的批处理 → 本地开放权重；交互式请求 → 专有API。** 对于后台任务（分类、提取、摘要），使用自托管的LLaMA 3.1 70B（在A100上约每小时2美元）。对于延迟重要的实时用户请求，使用GPT-4o API（每百万token 5/15美元）。混合方式降低总成本和延迟。',
            '**多模型对比和共识 → PromptQuorum。** 通过PromptQuorum同时将单个[提示词](/prompt-engineering/what-is-prompt-engineering?lang=zh)分发到本地Ollama、GPT-4o、Claude 4.6和Gemini 2.5 Pro。并排比较质量、延迟和成本方面的输出。选择生产中的获胜者，或将输出组合用于集成推理。',
            '**测试和暂存 → 开放权重；生产服务 → 专有。** 使用本地运行的LLaMA 3.1 8B进行快速原型开发和开发工作。一旦提示词和管道经过验证，升级到GPT-4o或Claude用于生产流量，在可靠性、工具集成和安全保证最重要的地方使用。',
          ],
        },

        nuancedTakes: {
          title: '颠覆传统认知的观点',
          content: '**开放权重并不总是比专有API更便宜。** 每天低于500万token时，专有API（GPT-4o mini、Claude Haiku、Gemini Flash）通常更便宜，因为基础设施成本（GPU摊销、电费、DevOps人力成本）超过API计费。只有每天超过1000万token时，开放权重自托管才具有成本优势。',
          items: [
            '**性能差距是特定任务的，并非普遍适用。** 专有模型在MMLU（推理）上领先7–8个百分点。但在分类、摘要、提取和许多领域任务上，LLaMA 3.1 70B与专有模型持平甚至超越。"专有模型更好"过于笼统。在您的实际任务上进行基准测试。',
            '**"开源"许可证复杂，通常并不真正是开源。** LLaMA、Mistral和Qwen不符合OSI的开源标准——它们是非标准许可证下的"开放权重"。将它们称为"开源"具有误导性，可能引起法律混淆。在依赖法律保护之前，请咨询法律顾问确认许可证要求。',
            '**专有模型并不总是更安全或更对齐。** [所有模型都会产生幻觉](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=zh)。专有训练数据、截止日期和Constitutional AI无法防止越狱、[提示词注入](/prompt-engineering/prompt-injection-and-security?lang=zh)或滥用。开放权重可以微调以匹配或超越专有模型的对齐效果。安全是部署和护栏的属性，而非模型类别的属性。',
          ],
        },

        keyTerms: {
          title: '关键术语',
          items: [
            '[开放权重](/prompt-engineering/prompt-engineering-glossary?lang=zh#open-weights) — 模型权重可下载，但可能受许可证限制',
            '[微调](/prompt-engineering/prompt-engineering-glossary?lang=zh#fine-tuning) — 在特定领域数据上重新训练模型权重',
            '[LoRA](/prompt-engineering/prompt-engineering-glossary?lang=zh#lora) — 通过低秩适应进行高效微调（全量训练成本的5–10%）',
            '[RAG](/prompt-engineering/prompt-engineering-glossary?lang=zh#rag) — 检索增强生成；将LLM输出锚定于外部文档',
            '[上下文窗口](/prompt-engineering/prompt-engineering-glossary?lang=zh#context-window) — 输入+输出合并的最大token容量',
            '[VRAM](/prompt-engineering/prompt-engineering-glossary?lang=zh#vram) — 模型推理所需的GPU显存',
          ],
        },

        promptExample: {
          title: '实践中的提示词结构',
          content: [
            '[不佳提示词] "开源和GPT-4o哪个更好？"',
            '[优质提示词] "我需要每天处理2000万个客户支持工单token。我无法将数据发送到欧盟以外。请比较开放权重（自托管LLaMA 3.1 70B）与专有模型（通过API使用GPT-4o）在此用例下的表现：包括每天2000万token的基础设施成本、GDPR数据驻留合规性、微调可行性，以及在工单分类任务上的预期质量。"',
          ],
        },

        relatedReading: {
          title: '延伸阅读',
          items: [
            '[基础知识：AI的局限性与结构性约束](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=zh) — 专有和开放权重模型为何共享幻觉和上下文限制等基本局限性',
            '[基础知识：LLM实际工作原理](/prompt-engineering/how-llms-actually-work?lang=zh) — 了解transformer架构有助于解释开放权重与专有模型共享相同核心机制',
            '[基础知识：GPT-4o、Claude还是Gemini？如何选择合适的模型](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=zh) — 前沿专有模型的详细对比',
            '[技术：RAG详解——检索增强生成](/prompt-engineering/rag-explained?lang=zh) — 如何用外部知识扩展任意模型（专有或开放权重）',
            '[基础知识：Token、成本与限制](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=zh) — 详细的成本分析和token经济学',
            '[基础知识：提示词注入与安全](/prompt-engineering/prompt-injection-and-security?lang=zh) — 两类模型的安全注意事项',
          ],
        },

        faq: {
          title: '常见问题',
          faqs: [
            {
              q: 'LLaMA 3.1真的是开源的还是只是开放权重？',
              a: '只是开放权重。LLaMA 3.1在Llama Community License 2.1下发布模型权重，该许可证不符合OSI的开源标准。该许可证允许商业使用，但限制将衍生品命名为"LLaMA"，要求署名，并包含竞业禁止条款。真正的开源许可证（Apache 2.0、MIT、GPL）没有这些限制。LLaMA比封闭的专有访问更宽松，但在法律上不是"开源"。',
            },
            {
              q: '2026年哪个更便宜——自托管LLaMA还是使用GPT-4o API？',
              a: '取决于量。每天低于500万token时，GPT-4o API（或GPT-4o mini）更便宜，因为基础设施成本超过API计费。每天500万至1000万token时，成本大致持平。每天超过1000万token时，自托管LLaMA 3.1在成本上胜出。每天1亿token时，自托管便宜10–20倍。隐藏因素：GPU摊销、电费（约每度电0.10美元）、DevOps人力成本和停机风险往往使边界情况倾向于API。',
            },
            {
              q: '欧盟AI法案是否影响开源LLM？',
              a: '是的，取决于您如何部署。欧盟AI法案（2024年）将"高风险"AI系统——招聘、信用评分、法律发现——定为需要风险文档、偏见测试和审计跟踪。本地部署的开放权重使合规更容易，因为您控制数据和日志。专有API迫使依赖供应商证明。训练计算量超过10^25 FLOP的通用AI模型（前沿模型）面临额外的透明度义务。对于受监管领域，请咨询合规法律顾问。',
            },
            {
              q: '2026年哪个开源LLM最接近GPT-4o？',
              a: 'LLaMA 3.1 70B和Mistral Large 2最接近，但差距依然存在。在MMLU（推理基准）上，GPT-4o得分88.7%，LLaMA 3.1 70B为80.5%，Mistral Large为81.2%。在特定任务（分类、摘要、提取）上，开放权重现已与专有模型相当。差距每年缩小约2–3个百分点；推理任务上的趋同可能在18–24个月内实现。',
            },
            {
              q: '我可以微调GPT-4o吗？',
              a: '不可以。OpenAI微调仅适用于GPT-4o mini、GPT-4和gpt-3.5-turbo——不适用于GPT-4o本身。Anthropic不为Claude提供微调。Google为Gemini提供微调。开放权重模型（LLaMA、Mistral、Qwen）通过LoRA、QLoRA或全量梯度训练支持完整微调——您拥有生成的权重。',
            },
            {
              q: '在本地运行LLaMA 3.1 70B需要什么硬件？',
              a: '全精度：约40GB VRAM（A100 80GB或双RTX 3090/4090）。通过Ollama进行4位量化：约16–20GB VRAM（单张RTX 4090 24GB）。LLaMA 3.1 8B可在消费级硬件上运行（约8GB VRAM，RTX 3060或Apple M2 Pro）。Ollama自动处理量化和模型管理——推荐用于大多数本地部署。',
            },
            {
              q: '我可以在MacBook上运行开源LLM吗？',
              a: '可以。搭载Apple Silicon（M1/M2/M3/M4/M5）的Mac可通过Ollama或LM Studio运行开放权重模型。统一内存架构与GPU共享RAM——配备16GB内存的M2 Pro可以10–15个token/秒的速度运行LLaMA 3.1 8B。配备128GB内存的M3 Max可以4位量化运行LLaMA 3.1 70B。性能比专用GPU服务器慢，但适合开发和个人使用。',
            },
            {
              q: '开源LLM与专有模型有相同的局限性吗？',
              a: '在基础层面是的：两者都会产生幻觉，都有知识截止日期、上下文窗口限制和推理边界。开放权重无法进行服务器端修补——权重更新需要新版本发布和重新训练。专有模型可以在用户无需任何操作的情况下逐步改进。微调开放权重可以缓解特定限制（领域知识、语气），但无法克服知识截止日期或幻觉风险等结构性约束。',
            },
            {
              q: '2026年哪个开放权重模型最适合编程？',
              a: 'LLaMA 3.1 70B和Mistral Large 2是最强的开放权重编程模型。在HumanEval（代码生成基准）上，它们得分73–78%，而GPT-4o约90%，Claude 4.6 Sonnet约87%。在Python、SQL和结构化输出方面，开放权重具有竞争力。在复杂算法设计和多文件推理方面，专有模型保持显著优势。',
            },
            {
              q: '我可以将开源LLM用于商业应用吗？',
              a: '可以。LLaMA、Mistral和Qwen明确允许在其许可证下商业使用。主要限制：不能将衍生品品牌命名为"LLaMA"（必须重命名）；必须包含许可证署名；LLaMA 2限制月活用户超过7亿的组织（LLaMA 3.x中已取消）。大多数团队在内部（私有推理）部署开放权重，完全避免了命名问题。',
            },
            {
              q: 'LoRA是什么？为什么它对开放权重微调如此重要？',
              a: 'LoRA（低秩适应）是一种微调方法，只训练一小部分适配器权重（约占模型参数的1–5%），而非对所有层进行全量反向传播。这在质量损失最小的情况下将训练成本降低5–10倍。QLoRA通过4位量化将其扩展到消费级GPU（16–24GB VRAM）。LoRA是将LLaMA和Mistral适应于特定领域任务而无需全量重训练的标准方法。',
            },
          ],
        },

        sources: {
          title: '参考来源',
          items: [
            'Meta AI，"Llama 3 Herd of Models"（Touvron等，2024年）——架构、上下文窗口、基准分数和训练数据文档',
            'Mistral AI，模型卡片和技术文档（2024年）——Mistral Large 2和Mistral 7B规格',
            'Hendrycks等，"Measuring Massive Multitask Language Understanding"（2021年）——MMLU基准定义和基线分数。arXiv:2009.03300',
            'Chen等，"Evaluating Large Language Models Trained on Code"（2021年）——代码生成的HumanEval基准。arXiv:2107.03374',
            '欧洲联盟，"人工智能法案"（2024年）——高风险AI系统类别、GPAI模型义务和合规要求',
            'Hu等，"LoRA: Low-Rank Adaptation of Large Language Models"（2021年）——LoRA方法定义和效率结果。arXiv:2106.09685',
            'Dettmers等，"QLoRA: Efficient Finetuning of Quantized LLMs"（2023年）——QLoRA方法和消费级GPU微调结果。arXiv:2305.14314',
          ],
        },
      },
    },
  };
