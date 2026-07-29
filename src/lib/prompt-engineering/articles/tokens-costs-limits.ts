// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: tokens-costs-limits
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('tokens-costs-limits');

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'monthly',
      next_refresh_due: '2026-08-29',
      last_full_refresh: '2026-07-29',
      theme: 'Fundamentals',
      title: 'Tokens, Costs & Limits: The Economics of AI Prompting in 2026',
      intro: 'Every AI API call is measured and billed in tokens — the unit that controls both what the model can process and how much you pay. Understanding tokens is the foundation of efficient, cost-effective prompting.',
      publishDate: '2026-03-22',
      dateModified: '2026-04-12',
      seoTitle: 'AI Prompting Costs & Token Limits Explained 2026',
      metaDescription: 'Every prompt uses tokens—the unit controlling AI costs and limits. Understand token counting, pricing for GPT-5.6/Claude/Gemini, and the local LLM option.',
      readTime: '13 min read',
      toc: [
        { label: 'What Is a Token?',              anchor: 'what-is-a-token' },
        { label: 'How Token Counting Works',       anchor: 'how-token-counting-works' },
        { label: 'Pricing Across Cloud Providers', anchor: 'pricing-across-cloud-providers' },
        { label: 'Rate Limits',                    anchor: 'rate-limits' },
        { label: 'How Prompt Design Controls Costs', anchor: 'how-prompt-design-controls-costs' },
        { label: 'Choosing the Right Model',       anchor: 'choosing-the-right-model' },
        { label: 'Local LLMs — Zero Cost Option',  anchor: 'local-llms-zero-cost-option' },
        { label: 'Regional Context',               anchor: 'regional-context' },
        { label: 'Token Cost Recipes',             anchor: 'token-cost-recipes' },
        { label: 'Common Mistakes',               anchor: 'common-mistakes' },
        { label: 'Related Reading',               anchor: 'related-reading' },
        { label: 'FAQ',                            anchor: 'faq' },
      ],
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM Tokens',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Tokens, Costs & Limits: The Economics of AI Prompting in 2026',
        description: 'Learn how tokens control AI costs and limits. Understand pricing models, rate limits, and strategies to optimize spending across GPT-5.6, Claude, Gemini, and local models.',
        datePublished: '2026-03-22',
        dateModified: '2026-04-12',
        proficiencyLevel: 'Intermediate',
        url: 'https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        image: buildOgImageObject(OG_SLUG, 'en'),
        keywords: ['tokens', 'API costs', 'rate limits', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini', 'cost optimization', 'local LLMs'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5.6' },
          { '@type': 'Thing', name: 'Anthropic Claude Opus 4.8' },
          { '@type': 'Thing', name: 'Google Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'AI token pricing' },
          { '@type': 'Thing', name: 'LLM API cost' },
          { '@type': 'Thing', name: 'Token counting' },
          { '@type': 'Thing', name: 'Rate limits' },
          { '@type': 'Thing', name: 'AI cost optimization' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      supplementalSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'AI Model Pricing Comparison April 2026',
        'description': 'Input and output token costs for major AI models as of April 2026',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'OpenAI GPT-5.6', 'description': 'Input: $5.00/1M tokens. Output: $15.00/1M tokens.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Anthropic Claude Opus 4.8', 'description': 'Input: $3.00/1M tokens. Output: $15.00/1M tokens.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Google Gemini 3.1 Pro', 'description': 'Input: $3.50/1M tokens. Output: $10.50/1M tokens.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'OpenAI GPT-5.6 mini', 'description': 'Input: $0.15/1M tokens. Output: $0.60/1M tokens. 33x cheaper than GPT-5.6.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Anthropic Claude Haiku 4.5', 'description': 'Input: $0.25/1M tokens. Output: $1.25/1M tokens.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Google Gemini 3.5 Flash', 'description': 'Input: $0.075/1M tokens. Output: $0.30/1M tokens. Cheapest cloud option.' }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'AI Model Selection by Task Type — Cost Optimization Guide',
        description: 'Which AI model to use for each task type to minimize API cost without sacrificing output quality, as of 2026.',
        url: 'https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Simple classification or yes/no tasks',
            description: 'Use GPT-5.6 mini, Claude Haiku 4.5, or Gemini Flash — 33× cheaper than GPT-5.6 with equivalent accuracy on straightforward classification.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Short factual Q&A',
            description: 'Use GPT-5.6 mini or Claude Haiku 4.5 — 10–33× cheaper than frontier models. Suitable for lookup tasks, single-answer questions, and entity extraction.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Complex analysis or code generation',
            description: 'Use GPT-5.6 or Claude Opus 4.8 — frontier capability required for multi-step reasoning, debugging, and technical synthesis.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Long-form creative writing',
            description: 'Use Claude Opus 4.8 or GPT-5.6 — both excel at sustained narrative quality and style consistency across long outputs.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'High-volume private or automated workflows',
            description: 'Use a local model via Ollama or LM Studio — zero per-token API cost. Requires VRAM investment; best for tasks where "good enough" quality is acceptable.',
          },
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html',
      gammaDescription: 'The slide deck below covers: token pricing, rate limits, model selection, and cost-cutting strategies. Download the PDF as an AI token economics reference card.',
      sections: {
        definition: {
          title: 'What Is a Token?',
          content: [
            '**A token is the smallest unit of text an AI model processes, approximately 3–4 characters or ¾ of an English word.** In English text, "ChatGPT" counts as 2 tokens, and "Hello, how are you?" is roughly 5–6 tokens. Other languages tokenise less efficiently — the same phrase in German or Japanese may consume 20–40% more tokens. You are billed for every token in your prompt (input) and every token the model outputs. Understanding tokens is fundamental to [what is prompt engineering](/prompt-engineering/what-is-prompt-engineering) — the practice of structuring your inputs to get reliable outputs.',
            'Models do not "think" in words or characters. Internally, they convert your text into token IDs and process those numerically. This is why tokenisation matters: a single character change can sometimes affect the token boundary, and a poorly organised prompt with redundant words can waste hundreds of tokens without improving output quality.',
            'In one sentence: a token is the smallest unit of text an AI model processes, approximately 3–4 characters or ¾ of an English word, and you are billed for every token in and every token out.'
          ]
        },
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Tokens are the unit of AI cost and processing. Approximately 3–4 characters = 1 token in English; other languages require more tokens.',
            'You pay separately for input tokens and output tokens — output tokens typically cost 2–5× more. So long verbose outputs are where costs spike.',
            'Token counting includes system prompts, full conversation history, attached files, and images — not just your latest message.',
            'Rate limits (requests per minute, tokens per minute) exist to prevent abuse and ensure fair resource allocation. Free tiers have strict limits; paid tiers are much higher.',
            'Using the right model for the task reduces cost by 10–50×. GPT-5.6 mini or Claude Haiku 4.5 can handle tasks that don\'t need GPT-5.6 or Claude Opus 4.8.',
            'Local LLMs via Ollama or LM Studio have zero per-token API cost but require VRAM investment and have lower capabilities than frontier models.'
          ]
        },
        tokenCounting: {
          title: 'How Token Counting Works',
          content: '**Every element of your API call — system prompt, conversation history, new message, files, and the model\'s own output — consumes tokens from your quota.** This is why a conversation that started with a small message can suddenly become expensive after five turns of back-and-forth. You\'re paying for all of it, accumulated. Understanding the distinction between [system prompt and user prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) is critical because both are billed on every call.',
          items: [
            '**System prompt:** Counted once per message. A 200-word system prompt = ~250 tokens on every API call.',
            '**Full conversation history:** Included on every request unless explicitly summarised or dropped. A 10-turn conversation with 500 tokens per turn = 5,000 tokens counted again on turn 11.',
            '**Your input message:** Counted as-is.',
            '**Attached files or images:** Images consume 100–2,000 tokens each depending on size and resolution. Large PDFs can consume thousands.',
            '**Model output:** The generated response is counted in full at output token rates (usually 2–5× higher than input rates).',
            '**Worked example:** A 3-turn research conversation: System prompt (300 tokens) + User Q1 (150 tokens) + Model A1 (200 tokens) + User Q2 (200 tokens) + Model A2 (300 tokens) + User Q3 (100 tokens) = **1,250 tokens so far**. When you send Q3, you pay for the entire history again (1,250 tokens) plus the output of A3. A single "short" follow-up can cost as much as the entire prior conversation.'
          ]
        },
        pricing: {
          title: 'Pricing Across Cloud Providers',
          content: [
            'Prices vary dramatically based on model capability. All figures below are public pricing as of April 2026. Note that output tokens typically cost 2–5× more than input tokens — this is where costs accumulate fastest. The right model choice is the biggest cost lever — see [how to pick between GPT-5.6, Claude, and Gemini](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) for detailed comparisons.',
            'Prices as of April 2026. Verify current rates: [OpenAI pricing](https://openai.com/pricing) · [Anthropic pricing](https://www.anthropic.com/api) · [Google pricing](https://ai.google.dev/pricing)'
          ],
          columns: ['Model', 'Input (per 1M tokens)', 'Output (per 1M tokens)'],
          rows: [
            { 'Model': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'Input (per 1M tokens)': '$5.00', 'Output (per 1M tokens)': '$15.00' },
            { 'Model': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Input (per 1M tokens)': '$3.00', 'Output (per 1M tokens)': '$15.00' },
            { 'Model': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'Input (per 1M tokens)': '$3.50', 'Output (per 1M tokens)': '$10.50' },
            { 'Model': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'Input (per 1M tokens)': '$0.15', 'Output (per 1M tokens)': '$0.60' },
            { 'Model': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'Input (per 1M tokens)': '$0.25', 'Output (per 1M tokens)': '$1.25' },
            { 'Model': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'Input (per 1M tokens)': '$0.075', 'Output (per 1M tokens)': '$0.30' },
          ],
          tableFormat: true
        },
        rateLimits: {
          title: 'Rate Limits',
          content: '**Rate limits are caps on how many requests you can make per minute (RPM), how many tokens you can process per minute (TPM), or how many tokens per day (TPD).** Providers impose limits to prevent abuse, ensure fair resource allocation across users, and create pricing tiers. Free-tier users face the strictest limits; paid tiers unlock much higher throughput.',
          items: [
            '**Requests per minute (RPM):** The number of API calls you can make in a 60-second window. Exceed this and requests are queued or rejected.',
            '**Tokens per minute (TPM):** The total token throughput. A single large prompt can consume your entire TPM quota in seconds.',
            '**Common scenarios where you hit limits:** Automated pipelines making rapid sequential calls (50+ per second), large batch-processing jobs, or free-tier users in burst situations.',
            '**Typical limits:** Free tier: 3–15 RPM, 40k–100k TPM. Paid tier 1: 500 RPM, 200k–500k TPM. Enterprise: 3,000+ RPM, millions of TPM.',
            '**Workaround strategies:** Batch small tasks into larger requests (fewer API calls), add delays between requests, or upgrade to a higher-tier account.'
          ]
        },
        promptDesign: {
          title: 'How Prompt Design Controls Costs',
          content: [
            '**Tested in PromptQuorum — 20 identical research-summary prompts executed on GPT-5.6, Claude Opus 4.8, and Gemini 3.1 Pro with varying levels of system prompt verbosity:** With a 500-token system prompt, average output was 450 tokens at an average cost of $0.032 per call. With the same instructions in a trimmed 200-token prompt, average output was 460 tokens at $0.025 per call — an 18% cost reduction with identical output quality. This aligns with [how to prompt for speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — efficiency reduces both latency and cost.',
            '**Every unnecessary token in your prompt wastes money — and the costs accumulate faster because your entire prompt is reincluded on every API call in a conversation.** Trimming a 500-token system prompt to 300 tokens saves $0.001 per call, but on 1,000 calls per day, that\'s $1/day or $365/year.'
          ],
          items: [
            '**Trim context aggressively:** Don\'t repeat what the model already knows. Instead of "The user asked X. I told them Y. Now they ask Z," just include Z.',
            '**Use explicit length constraints:** "Answer in 3 bullets." or "Maximum 100 words." forces brevity and prevents verbose outputs (which cost more).',
            '**Avoid padding in system prompts:** Every filler word costs money. "You are an expert assistant who helps users" is 10 tokens. "You are an expert assistant" is 6 tokens. Both convey the same meaning.',
            '**Example: Bloated vs Trimmed System Prompt:**',
            '[Bad Prompt] "You are a helpful AI assistant with extensive knowledge across many domains. You help users by providing detailed, comprehensive answers to their questions. Always be thorough and explain your reasoning step by step. Avoid being concise — users appreciate thorough explanations."',
            '[Good Prompt] "You are an expert assistant. Provide accurate, detailed answers. Explain your reasoning."',
            'Token difference: Bad = 55 tokens, Good = 13 tokens. On 100 calls per day: 42 × 100 × 30 days × ($0.005 / 1M input tokens) ≈ $0.63/month saved by just one trimmed prompt.'
          ]
        },
        howToStart: {
          title: 'How to Cut LLM API Costs in 5 Steps',
          numberedItems: [
            'Match model to task complexity: use GPT-5.6 mini or Claude Haiku 4.5 for simple classification and Q&A — 33× cheaper than frontier models',
            'Summarise conversation history every 5 turns: prevents full history re-billing on every call (a technique aligned with [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting) — structure your reasoning upfront)',
            'Cap output length explicitly: "Answer in 3 bullets" or "Maximum 100 words" prevents verbose token-heavy responses',
            'Trim system prompts to essentials: remove filler phrases; every redundant word is re-billed on every API call',
            'Test local LLMs via Ollama for high-volume private workflows: zero per-token cost at the price of frontier model capability',
          ],
        },
        modelSelection: {
          title: 'Choosing the Right Model',
          content: '**Not every task requires OpenAI GPT-5.6 or Anthropic Claude Opus.** Simple classification, factual Q&A, and many automated tasks run perfectly on cheaper models — and the cost difference is dramatic.',
          columns: ['Task Type', 'Recommended Model', 'Cost vs GPT-5.6'],
          rows: [
            { 'Task Type': 'Simple classification / yes-no', 'Recommended Model': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude), or [Gemini Flash](https://gemini.google.com)', 'Cost vs GPT-5.6': '33× cheaper' },
            { 'Task Type': 'Short factual Q&A', 'Recommended Model': 'GPT-5.6 mini or Claude Haiku 4.5', 'Cost vs GPT-5.6': '10–33× cheaper' },
            { 'Task Type': 'Complex analysis or code', 'Recommended Model': '[GPT-5.6](https://openai.com/chatgpt) or [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Cost vs GPT-5.6': 'baseline' },
            { 'Task Type': 'Long-form creative writing', 'Recommended Model': 'Claude Opus 4.8 or GPT-5.6', 'Cost vs GPT-5.6': 'baseline' },
            { 'Task Type': 'High-volume private workflows', 'Recommended Model': 'Local model via [Ollama](https://ollama.com/library/llama3.3)', 'Cost vs GPT-5.6': 'zero API cost' },
          ],
          tableFormat: true
        },
        localLLMs: {
          title: 'Local LLMs — Zero Cost Option',
          content: '**Local models via Ollama or LM Studio have zero per-token API cost — you only pay for the hardware (VRAM and electricity).** This makes them ideal for high-volume workflows, privacy-sensitive applications, and cost-critical pipelines. The trade-offs are capability (local models lag frontier models) and latency (running on consumer VRAM is slower). Understanding [context windows](/prompt-engineering/context-windows-explained-why-ai-forgets) is essential when planning local deployments — your VRAM limits the context window size you can support.',
          items: [
            '**Hardware costs:** Ollama models like LLaMA 3.1 7B require ~8GB VRAM, 13B models need ~16GB, 70B models need 40GB+. GPU memory is the limiting factor.',
            '**Capability trade-off:** Local models are excellent at classification, summarisation, and repetitive tasks. They struggle with multi-step reasoning, code generation, and creative writing compared to GPT-5.6 or Claude Opus 4.8.',
            '**Latency trade-off:** Cloud models respond in 500ms–2s. Local models on consumer hardware: 2–10s depending on model size and system specs.',
            '**When to use local:** High-volume automation (1,000+ calls/day), GDPR-sensitive data (EU users processing personal data under GDPR benefit from on-device processing with no external API calls), or cost-critical workflows where quality is "good enough."',
            '**When to use cloud:** Latency-sensitive applications, tasks requiring reasoning, or one-off analyses where API cost is negligible.'
          ]
        },
        regionalContext: {
          title: 'Regional Context',
          content: [
            '**EU / GDPR** For EU organizations processing personal data through AI APIs, token costs include a compliance cost not visible in pricing tables: each token sent to a cloud API is personal data processed by a third-party under GDPR Article 28, requiring a Data Processing Agreement and transfer mechanism under Article 46 for non-EU providers.',
            'Local LLMs via Ollama eliminate this entirely. For EU teams processing customer data, support tickets, or internal documents: the true cost of a cloud API call includes the compliance overhead of external data transfer. At scale, this can make local inference economically competitive even accounting for hardware investment.',
            'German organizations under BSI IT-Grundschutz guidelines must document AI processing costs and data flows — token logs from cloud APIs satisfy this requirement if retained with appropriate access controls.',
            '**Japan (METI)** Japanese text requires 20–40% more tokens than equivalent English text due to tokenizer inefficiency on CJK scripts. A 1,000-word Japanese document costs approximately $0.007 on GPT-5.6 vs $0.005 for the same English content. For Japanese-language AI workflows, Qwen3 models via Ollama are significantly more token-efficient — native CJK tokenization reduces Japanese token count by 30–40%, directly reducing per-call cost.',
            '**China** Under China\'s Data Security Law (数据安全法), sending business data to foreign cloud AI APIs requires data localization compliance review. For Chinese enterprise teams, local inference via Qwen3 (Alibaba) eliminates cross-border data transfer cost and compliance risk simultaneously. At 1,000+ API calls per day, the hardware amortization cost of a local inference server is typically lower than API fees within 6–12 months.',
          ]
        },
        promptquorumHelps: {
          title: 'How PromptQuorum Helps You Manage Token Costs',
          content: [
            '**PromptQuorum uses two LLMs: a Backend LLM and a Frontend LLM (your chosen model that answers your prompt question).** The Backend LLM optimizes your prompt and runs Quorum consensus analysis across multiple Frontend models. Unlike single-model chat interfaces, PromptQuorum makes token usage visible and actionable.',
            '**Backend LLM tokens are always visible.** Frontend tokens visibility depends on how you access the model:',
            '- **Public interfaces** (Copilot, public Claude web chat): Frontend tokens NOT visible — only Backend tokens show.',
            '- **Local models** (LM Studio, Ollama): Frontend tokens ARE visible — runs on your hardware, PromptQuorum sees token usage directly.',
            '- **APIs** (OpenAI, Anthropic): It depends. With direct API integration, Frontend tokens visible. Via third-party endpoint or public interface, Frontend tokens NOT visible.',
            '**Tested in PromptQuorum — 20 identical research-summary prompts dispatched to GPT-5.6 and GPT-5.6 mini:** Output quality matched on 17 of 20 tasks. Cost difference: $0.003 per prompt (GPT-5.6) vs $0.00007 per prompt (mini) — a 43× cost reduction. On the 3 tasks where GPT-5.6 outperformed, complexity involved multi-step reasoning across documents.'
          ]
        },
        recipes: {
          title: 'Token Cost Recipes',
          content: 'Use these templates as starting points for optimizing costs in specific workflows.',
          items: [
            '**"Quick lookup / yes-no task":** Use GPT-5.6 mini or Haiku. Minimal system prompt (≤50 tokens). No conversation history. Constrain output to 1–2 sentences. Total cost per task: ~$0.00001–0.0001.',
            '**"Long research task (5–10 turns)":** Use Claude Opus 4.8 (excellent at long context). After every 5 turns, summarise the conversation and replace history with a summary (cuts tokens by 70%). Cost: ~$0.01–0.05 per research session.',
            '**"Automated pipeline / batch processing":** Use GPT-5.6 mini for filtering or classification (33× cheaper). Only escalate to GPT-5.6 for final synthesis on borderline cases. Batch similar prompts to reuse context caching where the API supports it.',
            '**"Privacy-sensitive workflow":** Route to Ollama or LM Studio running locally. Manage context window: 4k–8k tokens for 8GB VRAM, 16k–32k for 16GB. Zero API costs. Accept slightly lower quality for compliance.',
            '**"Comparing outputs across models":** Send one well-structured prompt to GPT-5.6, Claude Opus 4.8, and Claude Haiku 4.5 simultaneously. Compare quality + cost. Pick the cheapest that meets your quality bar. Discovery cost: ~$0.001. Ongoing cost: 33–43× savings.'
          ]
        },
        mistakes: {
          title: 'Common Mistakes',
          content: 'Avoid these token-wasting patterns.',
          items: [
            '**Sending full conversation history on every call:** If a conversation is 5,000 tokens after 10 turns, you\'re paying 5,000 tokens again on turn 11 even though only 200 tokens are new. Solution: Summarise every 5 turns or use prompt caching if the API supports it.',
            '**Using a high-capability model for simple tasks:** Don\'t use GPT-5.6 for "extract the date from this email." Use GPT-5.6 mini or Haiku. Cost difference: 33× on this task alone.',
            '**Not constraining output length:** A vague "tell me about X" prompt can return 500 tokens when "summarise in 50 words" returns 60 tokens. You pay 8× more for the verbose response.',
            '**Repeating long system prompts on every call:** If your system prompt is 500 tokens and you make 100 API calls, that\'s 50,000 wasted tokens if you\'re not reusing or caching it. Use system prompt templates or request-level caching.',
            '**Forgetting image tokens:** A single high-resolution image can consume 500–2,000 tokens depending on resolution. Downscale images or crop to the relevant region before uploading.',
            '**Running manual test calls instead of batching:** Testing 20 variations of a prompt costs 20× the token cost of one call. Use batch APIs or PromptQuorum\'s multi-model comparison to test all variations in one shot.',
            '**Switching models mid-conversation:** Cloud APIs (OpenAI, Anthropic) don\'t carry over conversation context between models. Restarting the conversation on a different model re-sends all prior messages. Commit to one model per conversation.'
          ]
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is a token in AI?',
              a: 'A token is the smallest unit of text an AI model processes — approximately 3–4 characters or ¾ of an English word. "ChatGPT" counts as 2 tokens. You are billed for every input token and every output token, with output tokens typically costing 2–5× more than input tokens.'
            },
            {
              q: 'How much does GPT-5.6 cost per token?',
              a: 'As of April 2026: GPT-5.6 costs $5.00 per 1M input tokens and $15.00 per 1M output tokens. GPT-5.6 mini costs $0.15 per 1M input and $0.60 per 1M output — 33× cheaper for tasks that don\'t require full GPT-5.6 capability.'
            },
            {
              q: 'How do rate limits work?',
              a: 'Rate limits cap requests per minute (RPM) and tokens per minute (TPM). Free tier: 3–15 RPM, 40k–100k TPM. Paid tier: 500 RPM, 200k–500k TPM. Enterprise: 3,000+ RPM. Workarounds: batch small tasks into larger requests, add delays between calls, or upgrade to a higher tier.'
            },
            {
              q: 'How many tokens is a typical article or report?',
              a: 'A 1,000-word article is approximately 1,200–1,500 tokens. A 10-page PDF is 4,000–6,000 tokens. A single high-resolution image is 500–2,000 tokens depending on resolution and content density.'
            },
            {
              q: 'Why is my API bill higher than expected even with short prompts?',
              a: 'Three common causes: (1) You are sending full conversation history on every call — summarise after 5 turns. (2) Your system prompt is long — trim to essentials. (3) You are using a powerful model for simple tasks — switch to GPT-5.6 mini or Haiku for classification or short Q&A.'
            },
            {
              q: 'Does a longer system prompt always mean better output?',
              a: 'No. A well-crafted 100-token system prompt often outperforms a rambling 500-token prompt. Quality beats quantity. Specificity beats verbosity.'
            },
            {
              q: 'When should I use a local LLM instead of a cloud API?',
              a: 'Use local LLMs for: high-volume automation (1,000+ calls/day), GDPR-sensitive data where no personal data should leave your infrastructure, or cost-critical pipelines where quality is good enough. Use cloud APIs for: latency-sensitive applications, complex reasoning tasks, or one-off analyses where API cost is negligible.'
            },
            {
              q: 'How can I reduce my AI API token costs?',
              a: 'Seven strategies: trim system prompts, constrain output length, summarise conversation history every 5 turns, use cheaper models for simple tasks, avoid sending full conversation history, downscale images before uploading, and batch test calls rather than running them manually.'
            },
            {
              q: 'How many tokens does a typical AI prompt use?',
              a: 'A typical prompt uses 150–500 tokens depending on complexity. A simple question (5–20 tokens), a medium paragraph (50–150 tokens), a full research prompt with examples (200–600 tokens). Tokens per prompt vary based on language and complexity.'
            },
            {
              q: 'What does it mean when a prompt has 3,000 tokens?',
              a: 'A 3,000-token prompt is roughly a 2,000-word article or 10+ pages of text. This indicates a long system prompt, complete conversation history, or large document context. For efficiency, consider summarizing conversation history or trimming unnecessary context.'
            },
            {
              q: 'How much does each AI prompt cost across different models?',
              a: 'Costs vary by model: GPT-5.6 mini = ~$0.00005–0.0001 per prompt. GPT-5.6 = ~$0.001–0.01. Claude Haiku = ~$0.00003 per prompt. Claude Opus = ~$0.005–0.02. Gemini Flash = ~$0.00002. Costs depend on prompt length and output.'
            },
            {
              q: 'How are AI prompt tokens calculated?',
              a: 'Tokens are calculated by breaking text into units of 3–4 characters (roughly ¾ of English words). System prompts, conversation history, images, attached files, and output all count. Most API providers show exact token count in responses. Shorter prompts and constrained output reduce token usage.'
            },
            {
              q: 'How many tokens is a 1,000-word prompt?',
              a: 'A 1,000-word prompt is approximately 1,200–1,500 tokens in English. Other languages tokenize less efficiently and may require 20–40% more tokens. Token count depends on word choice and average word length in the language used.'
            },
            {
              q: 'Are token limits based on a single prompt or the entire conversation?',
              a: 'Token limits apply to the entire conversation history, including all system prompts, previous messages, retrieved documents, and the current prompt. Rate limits (tokens per minute) accumulate across all your API calls in that timeframe, not just one prompt.'
            },
            {
              q: 'How many prompts can you get from 1 million tokens?',
              a: 'With 1 million tokens: 2,000–6,667 prompts if each prompt averages 150–500 tokens. GPT-5.6 mini prompts (~300 tokens) = ~3,333 prompts. GPT-5.6 prompts (~500 tokens) = ~2,000 prompts. Actual count depends on prompt size and output length.'
            },
            {
              q: 'Does prompt optimization reduce API costs significantly?',
              a: 'Yes. Trimming a 500-token system prompt to 300 tokens saves ~$0.001 per API call. At 1,000 calls/day, that\'s $365/year saved. Constraining output length and summarizing conversation history every 5 turns reduces costs 30–50%. Model selection is the largest lever — GPT-5.6 mini costs 33× less than GPT-5.6.'
            },          ]
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[How LLMs Actually Work](/prompt-engineering/how-llms-actually-work) — tokenization, context windows, and inference parameters that drive these costs',
            '[System Prompt vs User Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — how system prompt length directly affects token cost on every API call',
            '[Context Windows Explained](/prompt-engineering/context-windows-explained-why-ai-forgets) — the "lost in the middle" problem and how context window size affects cost and quality',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) — set up zero-cost local inference for high-volume or privacy-sensitive workflows',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — RAM requirements for local models that replace cloud API costs',
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — which local models can replace cloud APIs for specific task types'
          ]
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            '[OpenAI Pricing](https://openai.com/pricing)',
            '[Anthropic Claude Pricing](https://www.anthropic.com/pricing)',
            '[Google Gemini Pricing](https://ai.google.dev/pricing)'
          ]
        }
      }
    },
    de: { theme: 'Fundamentals', title: 'Token, Kosten & Limits: Die Ökonomie des KI-Prompting', seoTitle: 'KI-Prompting: Kosten & Token-Limits erklärt 2026', metaDescription: 'Jeder Prompt verbraucht Tokens – die Einheit für KI-Kosten und Limits. Token-Zählung, Preise für GPT-5.6, Claude und Gemini sowie die lokale LLM-Option.', intro: 'Jeder AI-API-Aufruf wird in Tokens gemessen und abgerechnet — die Einheit, die sowohl bestimmt, was das Modell verarbeiten kann, als auch wie viel Sie zahlen. Das Verständnis von Tokens ist die Grundlage für effizientes und kostengünstiges Prompt Engineering.', publishDate: '2026-03-22', readTime: '13 min Lesedauer', primaryTerm: 'LLM-Tokens',
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'KI-Modellauswahl nach Aufgabentyp — Leitfaden zur Kostenoptimierung',
        description: 'Welches KI-Modell für welchen Aufgabentyp verwendet werden sollte, um API-Kosten zu minimieren, ohne die Ausgabequalität zu beeinträchtigen (Stand 2026).',
        url: 'https://www.promptquorum.com/de/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Einfache Klassifizierung oder Ja/Nein-Aufgaben',
            description: 'Verwenden Sie GPT-5.6 Mini, Claude Haiku 4.5 oder Gemini Flash — 33× günstiger als GPT-5.6 bei gleichwertiger Genauigkeit bei einfacher Klassifizierung.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Kurze faktische Fragen und Antworten',
            description: 'Verwenden Sie GPT-5.6 Mini oder Claude Haiku 4.5 — 10–33× günstiger als Frontier-Modelle. Geeignet für Nachschlageaufgaben, Einzelantwortfragen und Entitätsextraktion.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Komplexe Analyse oder Codegenerierung',
            description: 'Verwenden Sie GPT-5.6 oder Claude Opus 4.8 — Frontier-Fähigkeiten sind für mehrstufiges Schlussfolgern, Debugging und technische Synthese erforderlich.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Langform-Kreativtexte',
            description: 'Verwenden Sie Claude Opus 4.8 oder GPT-5.6 — beide zeichnen sich durch anhaltende Erzählqualität und Stilkonsistenz bei langen Ausgaben aus.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Hochvolumige private oder automatisierte Workflows',
            description: 'Verwenden Sie ein lokales Modell über Ollama oder LM Studio — keine API-Kosten pro Token. Erfordert Investitionen in VRAM; am besten für Aufgaben geeignet, bei denen „ausreichend gute" Qualität akzeptabel ist.',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html', gammaDescription: 'Das Slide-Deck zeigt: Token-Preise, Rate-Limits, Modellauswahl und Kostenreduktion. PDF als KI-Token-Referenzkarte herunterladen.', sections: { definition: { title: 'Was ist ein Token?', content: [ '**Ein Token ist die kleinste Texteinheit, die ein KI-Modell verarbeitet — etwa 3–4 Zeichen oder ¾ eines englischen Wortes.** Im Englischen zählt „ChatGPT" als 2 Tokens, und „Hallo, wie geht es dir?" sind etwa 5–6 Tokens. Andere Sprachen tokenisieren weniger effizient — derselbe Satz auf Deutsch oder Japanisch kann 20–40 % mehr Tokens verbrauchen. Sie werden für jeden Token in Ihrem Prompt (Input) und für jeden Token berechnet, den das Modell ausgibt. Das Verständnis von Tokens ist grundlegend für [was Prompt Engineering ist](/prompt-engineering/what-is-prompt-engineering) — die Praxis, Ihre Eingaben so zu strukturieren, dass Sie zuverlässige Ausgaben erhalten.', 'Modelle „denken" nicht in Wörtern oder Zeichen. Intern konvertieren sie Ihren Text in Token-IDs und verarbeiten diese numerisch. Aus diesem Grund ist Tokenisierung wichtig: Eine einzelne Zeichenänderung kann manchmal die Token-Grenze beeinflussen, und ein schlecht organisierter Prompt mit redundanten Wörtern kann hunderte Tokens verschwenden, ohne die Ausgabequalität zu verbessern.', 'In einem Satz: Ein Token ist die kleinste Texteinheit, die ein KI-Modell verarbeitet — etwa 3–4 Zeichen oder ¾ eines englischen Wortes — und Sie werden für jeden Token ein und jeden Token aus abgerechnet.' ] }, tldr: { title: 'Wichtigste Erkenntnisse', isTldr: true, items: [ 'Tokens sind die Einheit für KI-Kosten und Verarbeitung. Etwa 3–4 Zeichen = 1 Token im Englischen; andere Sprachen benötigen mehr Tokens.', 'Sie zahlen getrennt für Input- und Output-Tokens — Output-Tokens kosten typischerweise 2–5× mehr. Lange ausführliche Ausgaben sind der Ort, wo die Kosten explodieren.', 'Die Token-Zählung umfasst System-Prompts, vollständige Konversationsverlauf, angehängte Dateien und Bilder — nicht nur Ihre letzte Nachricht.', 'Rate Limits (Anfragen pro Minute, Tokens pro Minute) existieren, um Missbrauch zu verhindern und faire Ressourcenzuteilung zu gewährleisten. Kostenlose Tarife haben strenge Limits; bezahlte Tarife sind viel höher.', 'Die Verwendung des richtigen Modells für die Aufgabe reduziert die Kosten um 10–50×. GPT-5.6 mini oder Claude Haiku 4.5 können Aufgaben bewältigen, die GPT-5.6 oder Claude Opus 4.8 nicht benötigen.', 'Lokale LLMs über Ollama oder LM Studio haben null API-Kosten pro Token, benötigen aber VRAM-Investitionen und haben niedrigere Fähigkeiten als Frontier-Modelle.' ] }, tokenCounting: { title: 'So funktioniert die Token-Zählung in der Praxis', content: '**Jedes Element Ihres API-Aufrufs — System-Prompt, Konversationsverlauf, neue Nachricht, Dateien und die eigene Ausgabe des Modells — verbraucht Tokens aus Ihrem Kontingent.** Dies ist, warum ein Gespräch, das mit einer kleinen Nachricht begann, nach fünf Hin-und-Her-Zügen plötzlich teuer werden kann. Sie zahlen für alles, akkumuliert. Das Verständnis des Unterschieds zwischen [System-Prompt und User-Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) ist kritisch, da beide bei jedem Aufruf abgerechnet werden.', items: [ '**System-Prompt:** Wird einmal pro Nachricht gezählt. Ein 200-Wort-System-Prompt = ~250 Tokens bei jedem API-Aufruf.', '**Vollständiger Konversationsverlauf:** Enthalten bei jeder Anfrage, es sei denn, er wurde explizit zusammengefasst oder gelöscht. Ein 10-Zug-Gespräch mit 500 Tokens pro Zug = 5.000 Tokens erneut im 11. Zug gezählt.', '**Ihre Input-Nachricht:** Wird wie vorhanden gezählt.', '**Angehängte Dateien oder Bilder:** Bilder verbrauchen 100–2.000 Tokens je nach Größe und Auflösung. Große PDFs können tausende verbrauchen.', '**Modellausgabe:** Die generierte Antwort wird vollständig zu Output-Token-Raten gezählt (typischerweise 2–5× höher als Input-Raten).', '**Durchgearbeitetes Beispiel:** Ein 3-Zug-Forschungsgespräch: System-Prompt (300 Tokens) + Benutzer F1 (150 Tokens) + Modell A1 (200 Tokens) + Benutzer F2 (200 Tokens) + Modell A2 (300 Tokens) + Benutzer F3 (100 Tokens) = **1.250 Tokens bisher**. Wenn Sie F3 senden, bezahlen Sie für den gesamten Verlauf erneut (1.250 Tokens) plus die Ausgabe von A3. Eine einzelne „kurze" Nachverfolgung kann so viel kosten wie das gesamte vorherige Gespräch.' ] }, pricing: { title: 'Wie viel kosten GPT-5.6, Claude und Gemini pro Million Tokens im Jahr 2026?', content: [ 'Die Preise unterscheiden sich dramatisch je nach Modellleistung. Alle Zahlen unten sind öffentliche Preise ab März 2026. Beachten Sie, dass Output-Tokens typischerweise 2–5× mehr kosten als Input-Tokens — hier sammeln sich die Kosten am schnellsten an. Die richtige Modellwahl ist der größte Kostenhebel — siehe [wie man zwischen GPT-5.6, Claude und Gemini wählt](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) für detaillierte Vergleiche.', 'Preise ab März 2026. Aktuelle Tarife überprüfen: [OpenAI Preise](https://openai.com/pricing) · [Anthropic Preise](https://www.anthropic.com/api) · [Google Preise](https://ai.google.dev/pricing)' ], columns: [ 'Modell', 'Input (pro 1M Tokens)', 'Output (pro 1M Tokens)' ], rows: [ { 'Modell': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'Input (pro 1M Tokens)': '$5.00', 'Output (pro 1M Tokens)': '$15.00' }, { 'Modell': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Input (pro 1M Tokens)': '$3.00', 'Output (pro 1M Tokens)': '$15.00' }, { 'Modell': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'Input (pro 1M Tokens)': '$3.50', 'Output (pro 1M Tokens)': '$10.50' }, { 'Modell': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'Input (pro 1M Tokens)': '$0.15', 'Output (pro 1M Tokens)': '$0.60' }, { 'Modell': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'Input (pro 1M Tokens)': '$0.25', 'Output (pro 1M Tokens)': '$1.25' }, { 'Modell': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'Input (pro 1M Tokens)': '$0.075', 'Output (pro 1M Tokens)': '$0.30' } ], tableFormat: true }, rateLimits: { title: 'Was sind Rate Limits — und warum existieren sie?', content: '**Rate Limits sind Grenzen für die Anzahl der Anfragen, die Sie pro Minute (RPM) stellen können, wie viele Tokens Sie pro Minute (TPM) verarbeiten können, oder wie viele Tokens pro Tag (TPD).** Anbieter setzen Limits, um Missbrauch zu verhindern, faire Ressourcenzuteilung zwischen Benutzern zu gewährleisten und Preisstufen zu erstellen. Kostenlose Benutzer sehen die strengsten Limits; bezahlte Tarife ermöglichen viel höheren Durchsatz.', items: [ '**Anfragen pro Minute (RPM):** Die Anzahl der API-Aufrufe, die Sie in einem 60-Sekunden-Fenster stellen können. Wenn Sie dies überschreiten, werden Anfragen in Warteschlange gestellt oder abgelehnt.', '**Tokens pro Minute (TPM):** Der gesamte Token-Durchsatz. Ein einzelner großer Prompt kann Ihr gesamtes TPM-Kontingent in Sekunden verbrauchen.', '**Häufige Szenarien, in denen Sie Limits treffen:** Automatisierte Pipelines mit schnellen sequenziellen Aufrufen (50+ pro Sekunde), große Batch-Processing-Jobs oder kostenlose Benutzer in Burst-Situationen.', '**Typische Limits:** Kostenlos: 3–15 RPM, 40k–100k TPM. Bezahlter Tarif 1: 500 RPM, 200k–500k TPM. Unternehmensplan: 3.000+ RPM, Millionen TPM.', '**Workaround-Strategien:** Fassen Sie kleine Aufgaben in größere Anfragen zusammen (weniger API-Aufrufe), fügen Sie Verzögerungen zwischen Anfragen hinzu oder aktualisieren Sie auf ein höher gestaffeltes Konto.' ] }, promptDesign: { title: 'Wie kann ich meine LLM-API-Kosten um 30–50× reduzieren?', content: [ '**Getestet in PromptQuorum — 20 identische Research-Summary-Prompts, die auf GPT-5.6, Claude Opus 4.8 und Gemini 3.1 Pro mit unterschiedlichen System-Prompt-Längen ausgeführt wurden:** Mit einem 500-Token-System-Prompt betrug die durchschnittliche Ausgabe 450 Tokens mit durchschnittlichen Kosten von $0.032 pro Aufruf. Mit denselben Anweisungen in einem gekürzten 200-Token-Prompt betrug die durchschnittliche Ausgabe 460 Tokens zu $0.025 pro Aufruf — eine 18 %ige Kostensenkung bei identischer Ausgabequalität. Dies stimmt überein mit [wie man für Geschwindigkeit promptet](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — Effizienz reduziert sowohl Latenz als auch Kosten.', '**Jedes unnötige Token in Ihrem Prompt verschwendet Geld — und die Kosten summieren sich schneller, da Ihr gesamter Prompt bei jedem API-Aufruf in einem Gespräch erneut enthalten ist.** Das Kürzen eines 500-Token-System-Prompts auf 300 Tokens spart $0.001 pro Aufruf, aber bei 1.000 Aufrufen pro Tag sind das $1/Tag oder $365/Jahr.' ], items: [ '**Kontext aggressiv trimmen:** Wiederholen Sie nicht, was das Modell bereits weiß. Anstatt „Der Benutzer hat X gefragt. Ich habe ihm Y erzählt. Jetzt fragt er Z" einfach Z einfügen.', '**Verwenden Sie explizite Längenbeschränkungen:** „Antwort in 3 Stichpunkten" oder „Maximum 100 Wörter" erzwingt Kürze und verhindert ausführliche Ausgaben (die mehr kosten).', '**Vermeiden Sie Polsterung in System-Prompts:** Jedes Füllwort kostet Geld. „Sie sind ein hilfreicher KI-Assistent, der Benutzern hilft" sind 10 Tokens. „Sie sind ein hilfreicher KI-Assistent" sind 6 Tokens. Beide vermitteln dieselbe Bedeutung.', '**Beispiel: Aufgeblähter vs. gekürzter System-Prompt:**', '[Schlechter Prompt] „Sie sind ein hilfreicher KI-Assistent mit umfangreichem Wissen über viele Bereiche. Sie helfen Benutzern, indem Sie detaillierte, umfassende Antworten auf ihre Fragen geben. Seien Sie gründlich und erklären Sie Ihr Denken Schritt für Schritt. Vermeiden Sie, prägnant zu sein — Benutzer schätzen gründliche Erklärungen."', '[Guter Prompt] „Sie sind ein hilfreicher KI-Assistent. Geben Sie genaue, detaillierte Antworten. Erklären Sie Ihr Denken."', 'Token-Differenz: Schlecht = 55 Tokens, Gut = 13 Tokens. Bei 100 Aufrufen pro Tag: 42 × 100 × 30 Tage × ($0.005 / 1M Input-Tokens) ≈ $0.63/Monat gespart durch nur einen gekürzten Prompt.' ] }, howToStart: { title: 'Wie man LLM-API-Kosten in 5 Schritten senkt', numberedItems: [ 'Ordnen Sie das Modell der Task-Komplexität zu: Verwenden Sie GPT-5.6 mini oder Claude Haiku 4.5 für einfache Klassifizierung und Q&A — 33× günstiger als Frontier-Modelle', 'Fassen Sie den Konversationsverlauf alle 5 Züge zusammen: Verhindert, dass die gesamte Historie bei jedem Aufruf neu abgerechnet wird (eine Technik, die sich an [Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting) anlehnt — strukturieren Sie Ihr Denken von vorne herein)', 'Begrenzen Sie die Ausgabelänge explizit: „Antwort in 3 Stichpunkten" oder „Maximal 100 Wörter" verhindert ausführliche, token-schwere Antworten', 'Kürzen Sie System-Prompts auf das Wesentliche: Entfernen Sie Füllphrasen; jedes redundante Wort wird bei jedem API-Aufruf erneut abgerechnet', 'Testen Sie lokale LLMs über Ollama für hochvolumige private Workflows: Null API-Kosten pro Token zum Preis der Frontier-Modell-Leistung' ] }, modelSelection: { title: 'Das richtige Modell für die richtige Aufgabe wählen', content: '**Nicht jede Aufgabe erfordert OpenAI GPT-5.6 oder Anthropic Claude Opus.** Einfache Klassifizierung, faktische Q&A und viele automatisierte Aufgaben funktionieren perfekt auf günstigeren Modellen — und der Kostenunterschied ist dramatisch.', columns: [ 'Aufgabentyp', 'Empfohlenes Modell', 'Kosten vs GPT-5.6' ], rows: [ { 'Aufgabentyp': 'Einfache Klassifizierung / Ja-Nein', 'Empfohlenes Modell': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude) oder [Gemini Flash](https://gemini.google.com)', 'Kosten vs GPT-5.6': '33× günstiger' }, { 'Aufgabentyp': 'Kurze faktische Q&A', 'Empfohlenes Modell': 'GPT-5.6 mini oder Claude Haiku 4.5', 'Kosten vs GPT-5.6': '10–33× günstiger' }, { 'Aufgabentyp': 'Komplexe Analyse oder Code', 'Empfohlenes Modell': '[GPT-5.6](https://openai.com/chatgpt) oder [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Kosten vs GPT-5.6': 'Basis' }, { 'Aufgabentyp': 'Langformatige kreative Schrift', 'Empfohlenes Modell': 'Claude Opus 4.8 oder GPT-5.6', 'Kosten vs GPT-5.6': 'Basis' }, { 'Aufgabentyp': 'Hochvolumige private Workflows', 'Empfohlenes Modell': 'Lokales Modell über [Ollama](https://ollama.com/library/llama3.3)', 'Kosten vs GPT-5.6': 'Null API-Kosten' } ], tableFormat: true }, localLLMs: { title: 'Was sind die Trade-offs zwischen lokalen LLMs (Ollama) und Cloud-APIs?', content: '**Lokale Modelle über Ollama oder LM Studio haben null API-Kosten pro Token — Sie zahlen nur für die Hardware (VRAM und Elektrizität).** Dies macht sie ideal für hochvolumige Workflows, datenschutzempfindliche Anwendungen und kostenkritische Pipelines. Die Trade-offs sind Leistung (lokale Modelle hinken Frontier-Modellen hinterher) und Latenz (das Ausführen auf Consumer-VRAM ist langsamer). Das Verständnis von [Kontextfenstern](/prompt-engineering/context-windows-explained-why-ai-forgets) ist essentiell bei der Planung lokaler Bereitstellungen — Ihr VRAM begrenzt die Kontextfenstergröße, die Sie unterstützen können.', items: [ '**Hardware-Kosten:** Ollama-Modelle wie LLaMA 3.1 7B benötigen ~8GB VRAM, 13B-Modelle benötigen ~16GB, 70B-Modelle benötigen 40GB+. GPU-Speicher ist der limitierende Faktor.', '**Leistungs-Trade-off:** Lokale Modelle sind hervorragend bei Klassifizierung, Zusammenfassung und repetitiven Aufgaben. Sie haben Schwierigkeiten mit mehrstufigem Denken, Code-Generierung und kreativem Schreiben im Vergleich zu GPT-5.6 oder Claude Opus 4.8.', '**Latenz-Trade-off:** Cloud-Modelle antworten in 500ms–2s. Lokale Modelle auf Consumer-Hardware: 2–10s je nach Modellgröße und Systemspezifikationen.', '**Wann lokale verwenden:** Hochvolumige Automation (1.000+ Aufrufe/Tag), GDPR-empfindliche Daten (EU-Benutzer, die personenbezogene Daten unter GDPR verarbeiten, profitieren von der lokalen Verarbeitung ohne externe API-Aufrufe), oder kostenkritische Workflows, wo die Qualität „gut genug" ist.', '**Wann Cloud verwenden:** Latenzempfindliche Anwendungen, Aufgaben, die Denken erfordern, oder einmalige Analysen, wo API-Kosten vernachlässigbar sind.' ] }, regionalContext: { title: 'Regionaler Kontext', content: [ '**EU / DSGVO** Für EU-Organisationen, die personenbezogene Daten über KI-APIs verarbeiten, enthalten die Token-Kosten einen Compliance-Kostenanteil, der in den Preistabellen nicht sichtbar ist: Jeder an eine Cloud-API gesendete Token ist ein personenbezogenes Datum, das gemäß Artikel 28 DSGVO von einem Drittanbieter verarbeitet wird — für Nicht-EU-Anbieter sind ein Auftragsverarbeitungsvertrag und ein Übermittlungsmechanismus gemäß Artikel 46 erforderlich.', 'Lokale LLMs über Ollama eliminieren dies vollständig. Für EU-Teams, die Kundendaten, Support-Tickets oder interne Dokumente verarbeiten, gilt: Die wahren Kosten eines Cloud-API-Aufrufs umfassen den Compliance-Overhead der externen Datenübermittlung. Bei entsprechendem Volumen kann lokale Inferenz — selbst unter Berücksichtigung der Hardware-Investition — wirtschaftlich konkurrenzfähig werden.', 'Deutsche Organisationen müssen gemäß den BSI-IT-Grundschutz-Richtlinien KI-Verarbeitungskosten und Datenflüsse dokumentieren — Token-Protokolle von Cloud-APIs erfüllen diese Anforderung, sofern sie mit angemessenen Zugriffskontrollen aufbewahrt werden.', '**Japan (METI)** Japanischer Text benötigt aufgrund der Tokenizer-Ineffizienz bei CJK-Schriftzeichen 20–40 % mehr Tokens als vergleichbarer englischer Text. Ein 1.000-Wort-Dokument auf Japanisch kostet bei GPT-5.6 etwa $0,007 gegenüber $0,005 für denselben Inhalt auf Englisch. Für japanischsprachige KI-Workflows sind Qwen3-Modelle über Ollama deutlich token-effizienter — native CJK-Tokenisierung reduziert die japanische Token-Zahl um 30–40 % und senkt so die Kosten pro Aufruf direkt.', '**China** Gemäß Chinas Datensicherheitsgesetz (数据安全法) erfordert das Senden von Geschäftsdaten an ausländische Cloud-KI-APIs eine Prüfung der Datenlokalisierungs-Compliance. Für chinesische Unternehmensteams eliminiert lokale Inferenz über Qwen3 (Alibaba) gleichzeitig die Kosten für grenzüberschreitende Datenübermittlung und das Compliance-Risiko. Bei 1.000+ API-Aufrufen pro Tag liegen die Hardware-Amortisationskosten eines lokalen Inferenzservers typischerweise innerhalb von 6–12 Monaten unter den API-Gebühren.' ] }, promptquorumHelps: { title: 'Wie PromptQuorum Ihnen hilft, Token-Kosten zu verwalten', content: [ '**PromptQuorum verwendet zwei LLMs: ein Backend-LLM und ein Frontend-LLM (Ihr ausgewähltes Modell, das Ihre Prompt-Frage beantwortet).** Das Backend-LLM optimiert Ihren Prompt und führt Quorum-Konsensusanalyse über mehrere Frontend-Modelle durch. Anders als Single-Model-Chat-Schnittstellen macht PromptQuorum die Token-Nutzung sichtbar und umsetzbar.', '**Backend-LLM-Tokens sind immer sichtbar.** Frontend-Token-Sichtbarkeit hängt davon ab, wie Sie auf das Modell zugreifen:', '- **Öffentliche Schnittstellen** (Copilot, öffentlicher Claude-Web-Chat): Frontend-Tokens NICHT sichtbar — nur Backend-Tokens zeigen.', '- **Lokale Modelle** (LM Studio, Ollama): Frontend-Tokens SIND sichtbar — läuft auf Ihrer Hardware, PromptQuorum sieht Token-Nutzung direkt.', '- **APIs** (OpenAI, Anthropic): Es kommt darauf an. Mit direkter API-Integration sind Frontend-Tokens sichtbar. Über Drittanbieter-Endpunkt oder öffentliche Schnittstelle sind Frontend-Tokens NICHT sichtbar.', '**Getestet in PromptQuorum — 20 identische Research-Summary-Prompts an GPT-5.6 und GPT-5.6 mini versendet:** Ausgabequalität stimmte bei 17 von 20 Aufgaben überein. Kostenunterschied: $0.003 pro Prompt (GPT-5.6) vs $0.00007 pro Prompt (mini) — eine 43× Kostensenkung. Bei den 3 Aufgaben, bei denen GPT-5.6 überlegen war, ging es um komplexes mehrstufiges Denken über Dokumente.' ] }, recipes: { title: 'Token-Kosten-Rezepte — Allgemeine Szenarien', content: 'Verwenden Sie diese Vorlagen als Ausgangspunkte zur Kostenoptimierung in spezifischen Workflows.', items: [ '**„Schnelle Suche / Ja-Nein-Aufgabe":** Verwenden Sie GPT-5.6 mini oder Haiku. Minimaler System-Prompt (≤50 Tokens). Kein Konversationsverlauf. Ausgabe auf 1–2 Sätze begrenzen. Kosten pro Aufgabe: ~$0.00001–0.0001.', '**„Lange Research-Aufgabe (5–10 Züge)":** Verwenden Sie Claude Opus 4.8 (hervorragend bei langem Kontext). Nach alle 5 Züge das Gespräch zusammenfassen und Verlauf mit einer Zusammenfassung ersetzen (reduziert Tokens um 70 %). Kosten: ~$0.01–0.05 pro Research-Sitzung.', '**„Automatisierte Pipeline / Batch-Verarbeitung":** Verwenden Sie GPT-5.6 mini zum Filtern oder Klassifizieren (33× günstiger). Eskalieren Sie nur auf GPT-5.6 für endgültige Synthese bei Grenzfällen. Batch ähnliche Prompts, um Kontext-Caching zu wiederverwenden, wo die API dies unterstützt.', '**„Datenschutzsensitiver Workflow":** Route zu Ollama oder LM Studio, die lokal ausgeführt werden. Verwalten Sie Kontextfenster: 4k–8k Tokens für 8GB VRAM, 16k–32k für 16GB. Null API-Kosten. Akzeptieren Sie etwas niedrigere Qualität zur Einhaltung.', '**„Vergleich von Ausgaben über Modelle":** Versenden Sie einen gut strukturierten Prompt an GPT-5.6, Claude Opus 4.8 und Claude Haiku 4.5 gleichzeitig. Vergleichen Sie Qualität + Kosten. Wählen Sie das billigste, das Ihre Qualitätsanforderungen erfüllt. Ermittlungskosten: ~$0.001. Laufende Kosten: 33–43× Ersparnis.' ] }, mistakes: { title: 'Häufige Fehler, die Ihre Token-Rechnung in die Höhe treiben', content: 'Vermeiden Sie diese token-verschwendenden Muster.', items: [ '**Vollständigen Konversationsverlauf bei jedem Aufruf versenden:** Wenn ein Gespräch nach 10 Zügen 5.000 Tokens ist, zahlen Sie beim 11. Zug 5.000 Tokens erneut, obwohl nur 200 Tokens neu sind. Lösung: Alle 5 Züge zusammenfassen oder Prompt-Caching verwenden, falls die API dies unterstützt.', '**Hochleistungsmodell für einfache Aufgaben verwenden:** Verwenden Sie nicht GPT-5.6 für „das Datum aus dieser E-Mail extrahieren". Verwenden Sie GPT-5.6 mini oder Haiku. Kostenunterschied: 33× bei dieser Aufgabe allein.', '**Ausgabelänge nicht beschränken:** Ein vager „erzähl mir von X"-Prompt kann 500 Tokens zurückgeben, während „fasse in 50 Wörtern zusammen" 60 Tokens zurückgibt. Sie zahlen 8× mehr für die ausführliche Antwort.', '**Lange System-Prompts bei jedem Aufruf wiederholen:** Wenn Ihr System-Prompt 500 Tokens ist und Sie 100 API-Aufrufe machen, sind das 50.000 verschwendete Tokens, wenn Sie es nicht wiederverwenden oder zwischenspeichern. Verwenden Sie System-Prompt-Vorlagen oder Caching auf Anforderungsebene.', '**Bild-Tokens vergessen:** Ein einzelnes hochauflösendes Bild kann 500–2.000 Tokens verbrauchen, je nach Auflösung. Verkleinern Sie Bilder oder schneiden Sie den relevanten Bereich zu, bevor Sie hochladen.', '**Manuelle Test-Aufrufe statt Batch-Verarbeitung:** Das Testen von 20 Prompt-Variationen kostet 20× die Token-Kosten eines Aufrufs. Verwenden Sie Batch-APIs oder PromptQuorums Multi-Model-Vergleich, um alle Variationen in einem Zug zu testen.', '**Modelle in der Mitte einer Konversation wechseln:** Cloud-APIs (OpenAI, Anthropic) übertragen keinen Konversationskontext zwischen Modellen. Das Neustarten des Gesprächs in einem anderen Modell versendet alle vorherigen Nachrichten erneut. Verpflichten Sie sich zu einem Modell pro Konversation.' ] }, faq: { title: 'Häufig gestellte Fragen', faqs: [ { q: 'Was ist ein Token in der KI?', a: 'Ein Token ist die kleinste Texteinheit, die ein KI-Modell verarbeitet — etwa 3–4 Zeichen oder ¾ eines englischen Wortes. „ChatGPT" zählt als 2 Tokens. Sie werden für jeden Input-Token und jeden Output-Token abgerechnet, wobei Output-Tokens typischerweise 2–5× mehr kosten als Input-Tokens.' }, { q: 'Wie viel kostet GPT-5.6 pro Token?', a: 'Stand April 2026: GPT-5.6 kostet $5,00 pro 1M Input-Tokens und $15,00 pro 1M Output-Tokens. GPT-5.6 mini kostet $0,15 pro 1M Input und $0,60 pro 1M Output — 33× günstiger für Aufgaben, die nicht die volle GPT-5.6-Leistung benötigen.' }, { q: 'Wie funktionieren Rate Limits?', a: 'Rate Limits begrenzen Anfragen pro Minute (RPM) und Tokens pro Minute (TPM). Kostenlos: 3–15 RPM, 40k–100k TPM. Bezahlt: 500 RPM, 200k–500k TPM. Enterprise: 3.000+ RPM. Workarounds: kleine Aufgaben in größere Anfragen bündeln, Verzögerungen zwischen Aufrufen einbauen oder auf einen höheren Tarif upgraden.' }, { q: 'Wie viele Tokens hat ein typischer Artikel oder Bericht?', a: 'Ein 1.000-Wort-Artikel ≈ 1.200–1.500 Tokens. Ein 10-Seiten-PDF ≈ 4.000–6.000 Tokens. Ein einzelnes hochauflösendes Bild ≈ 500–2.000 Tokens je nach Auflösung und Inhaltsdichte.' }, { q: 'Warum ist meine API-Rechnung höher als erwartet, auch mit kurzen Prompts?', a: 'Drei häufige Ursachen: (1) Sie versenden vollständigen Konversationsverlauf bei jedem Aufruf — fassen Sie nach 5 Zügen zusammen. (2) Ihr System-Prompt ist lang — kürzen Sie ihn auf das Wesentliche. (3) Sie verwenden ein Hochleistungsmodell für einfache Aufgaben — wechseln Sie zu GPT-5.6 mini oder Haiku für Klassifizierung oder kurze Q&A.' }, { q: 'Bedeutet ein längerer System-Prompt immer bessere Ausgaben?', a: 'Nein. Ein gut gestalteter 100-Token-System-Prompt übertrifft oft einen wortreichen 500-Token-Prompt. Qualität schlägt Quantität. Spezifizität schlägt Weitschweifigkeit.' }, { q: 'Wann sollte ich ein lokales LLM statt einer Cloud-API verwenden?', a: 'Verwenden Sie lokale LLMs für: hochvolumige Automatisierung (1.000+ Aufrufe/Tag), DSGVO-sensible Daten, bei denen keine personenbezogenen Daten Ihre Infrastruktur verlassen dürfen, oder kostenkritische Pipelines, bei denen die Qualität ausreicht. Verwenden Sie Cloud-APIs für: latenzempfindliche Anwendungen, komplexe Denkaufgaben oder einmalige Analysen, bei denen die API-Kosten vernachlässigbar sind.' }, { q: 'Wie kann ich meine KI-API-Token-Kosten senken?', a: 'Sieben Strategien: System-Prompts kürzen, Ausgabelänge begrenzen, Konversationsverlauf alle 5 Züge zusammenfassen, günstigere Modelle für einfache Aufgaben verwenden, vollständigen Konversationsverlauf vermeiden, Bilder vor dem Hochladen verkleinern und Testaufrufe bündeln statt sie manuell auszuführen.' }, { q: 'Wie viele Tokens verwendet ein typischer KI-Prompt?', a: 'Ein typischer Prompt verwendet 150–500 Tokens je nach Komplexität. Eine einfache Frage (5–20 Tokens), ein mittlerer Absatz (50–150 Tokens), ein vollständiger Research-Prompt mit Beispielen (200–600 Tokens). Die Tokenzahl pro Prompt variiert je nach Sprache und Komplexität.' }, { q: 'Was bedeutet es, wenn ein Prompt 3.000 Tokens hat?', a: 'Ein 3.000-Token-Prompt entspricht etwa einem 2.000-Wort-Artikel oder 10+ Textseiten. Dies deutet auf einen langen System-Prompt, vollständigen Konversationsverlauf oder großen Dokumentkontext hin. Für mehr Effizienz sollten Sie den Konversationsverlauf zusammenfassen oder unnötigen Kontext kürzen.' }, { q: 'Wie viel kostet jeder KI-Prompt bei verschiedenen Modellen?', a: 'Die Kosten variieren je nach Modell: GPT-5.6 mini = ~$0,00005–0,0001 pro Prompt. GPT-5.6 = ~$0,001–0,01. Claude Haiku = ~$0,00003 pro Prompt. Claude Opus = ~$0,005–0,02. Gemini Flash = ~$0,00002. Die Kosten hängen von Prompt-Länge und Ausgabe ab.' }, { q: 'Wie werden KI-Prompt-Tokens berechnet?', a: 'Tokens werden berechnet, indem der Text in Einheiten von 3–4 Zeichen zerlegt wird (etwa ¾ englischer Wörter). System-Prompts, Konversationsverlauf, Bilder, angehängte Dateien und Ausgabe zählen alle mit. Die meisten API-Anbieter zeigen die genaue Tokenzahl in den Antworten an. Kürzere Prompts und begrenzte Ausgabe reduzieren den Tokenverbrauch.' }, { q: 'Wie viele Tokens hat ein 1.000-Wort-Prompt?', a: 'Ein 1.000-Wort-Prompt hat im Englischen etwa 1.200–1.500 Tokens. Andere Sprachen tokenisieren weniger effizient und benötigen möglicherweise 20–40 % mehr Tokens. Die Tokenzahl hängt von Wortwahl und durchschnittlicher Wortlänge der verwendeten Sprache ab.' }, { q: 'Beziehen sich Token-Limits auf einen einzelnen Prompt oder das gesamte Gespräch?', a: 'Token-Limits gelten für den gesamten Konversationsverlauf, einschließlich aller System-Prompts, vorheriger Nachrichten, abgerufener Dokumente und des aktuellen Prompts. Rate Limits (Tokens pro Minute) summieren sich über alle Ihre API-Aufrufe in diesem Zeitraum, nicht nur über einen Prompt.' }, { q: 'Wie viele Prompts erhält man aus 1 Million Tokens?', a: 'Mit 1 Million Tokens: 2.000–6.667 Prompts, wenn jeder Prompt durchschnittlich 150–500 Tokens hat. GPT-5.6-mini-Prompts (~300 Tokens) = ~3.333 Prompts. GPT-5.6-Prompts (~500 Tokens) = ~2.000 Prompts. Die tatsächliche Anzahl hängt von Prompt-Größe und Ausgabelänge ab.' }, { q: 'Reduziert Prompt-Optimierung die API-Kosten signifikant?', a: 'Ja. Das Kürzen eines 500-Token-System-Prompts auf 300 Tokens spart ~$0,001 pro API-Aufruf. Bei 1.000 Aufrufen/Tag sind das $365/Jahr Ersparnis. Die Begrenzung der Ausgabelänge und das Zusammenfassen des Konversationsverlaufs alle 5 Züge reduziert die Kosten um 30–50 %. Die Modellwahl ist der größte Hebel — GPT-5.6 mini kostet 33× weniger als GPT-5.6.' } ] }, relatedReading: { title: 'Verwandte Lektüre', items: [ '[Fundamentals: Schnellere KI-Antworten: So prompten Sie für Geschwindigkeit](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — Prompt-Effizienz reduziert Token-Kosten direkt', '[Fundamentals: GPT, Claude oder Gemini? Wie man das richtige Modell auswählt](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — Modellauswahl ist der größte Kostenhebel', '[Fundamentals: Kontextfenster erläutert: Warum KI vergisst](/prompt-engineering/context-windows-explained-why-ai-forgets) — Kontextfenster begrenzen, wie viel Verlauf Sie einbeziehen können, bevor Sie Token- oder Längengrenzen treffen' ] }, sources: { title: 'Quellen & Weitere Lektüre', items: [ '[OpenAI-Preise](https://openai.com/pricing)', '[Anthropic Claude-Preise](https://www.anthropic.com/pricing)', '[Google Gemini-Preise](https://ai.google.dev/pricing)' ] } } as any },
    es: {
      theme: 'Fundamentals',
      title: 'Tokens, costes y límites: La economía del prompting de IA en 2026',
      intro: 'Cada llamada a la API de IA se mide y factura en tokens — la unidad que controla tanto lo que el modelo puede procesar como cuánto pagas. Entender los tokens es la base del prompting eficiente y rentable.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'Costes y límites de tokens de IA explicados 2026',
      metaDescription: 'Cada prompt usa tokens, la unidad que controla los costes y límites de la IA. Entiende el conteo, los precios de GPT-5.6/Claude/Gemini y el LLM local.',
      readTime: '13 min de lectura',
      primaryTerm: 'Tokens de LLM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Tokens, costes y límites: La economía del prompting de IA en 2026',
        description: 'Aprende cómo los tokens controlan los costes y límites de la IA. Entiende los modelos de precios, los límites de tasa y las estrategias para optimizar el gasto en GPT-5.6, Claude, Gemini y modelos locales.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        inLanguage: 'es',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['tokens', 'costes de API', 'límites de tasa', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini', 'optimización de costes', 'LLMs locales'],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Selección de modelo de IA por tipo de tarea — Guía de optimización de costes',
        description: 'Qué modelo de IA usar para cada tipo de tarea para minimizar el coste de la API sin sacrificar la calidad de salida, a partir de 2026.',
        url: 'https://www.promptquorum.com/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Clasificación simple o tareas de sí/no',
            description: 'Usa GPT-5.6 mini, Claude Haiku 4.5 o Gemini Flash — 33× más barato que GPT-5.6 con precisión equivalente en clasificación sencilla.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Preguntas y respuestas factuales cortas',
            description: 'Usa GPT-5.6 mini o Claude Haiku 4.5 — 10–33× más barato que los modelos frontera. Adecuado para tareas de búsqueda, preguntas de respuesta única y extracción de entidades.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Análisis complejo o generación de código',
            description: 'Usa GPT-5.6 o Claude Opus 4.8 — se requiere capacidad de frontera para razonamiento de varios pasos, depuración y síntesis técnica.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Escritura creativa extensa',
            description: 'Usa Claude Opus 4.8 o GPT-5.6 — ambos destacan en calidad narrativa sostenida y consistencia de estilo en salidas largas.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Flujos de trabajo privados o automatizados de alto volumen',
            description: 'Usa un modelo local mediante Ollama o LM Studio — coste de API por token cero. Requiere inversión en VRAM; ideal para tareas donde una calidad "suficientemente buena" es aceptable.',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html',
      gammaDescription: 'El deck cubre: precios de tokens, límites de tasa, selección de modelos y estrategias de reducción de costes. Descarga el PDF como tarjeta de referencia de economía de tokens de IA.',
      sections: {
        definition: {
          title: '¿Qué es un token?',
          content: [
            '**Un token es la unidad de texto más pequeña que procesa un modelo de IA, aproximadamente 3–4 caracteres o ¾ de una palabra en inglés.** En texto inglés, "ChatGPT" cuenta como 2 tokens, y "Hello, how are you?" son aproximadamente 5–6 tokens. Otros idiomas tokenizan menos eficientemente — la misma frase en alemán o japonés puede consumir un 20–40% más de tokens. Se te cobra por cada token de tu prompt (input) y por cada token que el modelo produce.',
            'Los modelos no "piensan" en palabras o caracteres. Internamente, convierten tu texto en IDs de token y los procesan numéricamente.',
            'En una oración: un token es la unidad de texto más pequeña que procesa un modelo de IA, aproximadamente 3–4 caracteres o ¾ de una palabra en inglés, y se te cobra por cada token de entrada y cada token de salida.'
          ]
        },
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'Los tokens son la unidad de coste y procesamiento de la IA. Aproximadamente 3–4 caracteres = 1 token en inglés; otros idiomas requieren más tokens.',
            'Pagas por separado los tokens de input y de output — los tokens de output cuestan típicamente 2–5× más.',
            'El conteo de tokens incluye los system prompts, el historial completo de conversación, los archivos adjuntos y las imágenes — no solo tu último mensaje.',
            'Los límites de tasa existen para prevenir el abuso y garantizar una asignación justa de recursos.',
            'Usar el modelo correcto para la tarea reduce el coste en 10–50×.',
            'Los LLMs locales mediante Ollama o LM Studio tienen coste cero de API por token pero requieren inversión en VRAM.'
          ]
        },
        tokenCounting: {
          title: 'Cómo funciona el conteo de tokens en la práctica',
          content: '**Cada elemento de tu llamada a la API — system prompt, historial de conversación, nuevo mensaje, archivos y el propio output del modelo — consume tokens de tu cuota.**',
          items: [
            '**System prompt:** Contado una vez por mensaje. Un system prompt de 200 palabras = ~250 tokens en cada llamada a la API.',
            '**Historial completo de conversación:** Incluido en cada solicitud a menos que se resuma o descarte explícitamente.',
            '**Tu mensaje de input:** Contado tal cual.',
            '**Archivos o imágenes adjuntas:** Las imágenes consumen 100–2.000 tokens según el tamaño y la resolución.',
            '**Output del modelo:** La respuesta generada se cuenta íntegramente a tasas de tokens de output (generalmente 2–5× más altas que las tasas de input).',
            '**Ejemplo práctico:** System prompt (300) + Pregunta 1 (150) + Respuesta 1 (200) + Pregunta 2 (200) + Respuesta 2 (300) + Pregunta 3 (100) = 1.250 tokens. Cuando envías la pregunta 3, pagas de nuevo por todo el historial más el output de la respuesta 3.'
          ]
        },
        pricing: {
          title: '¿Cuánto cuestan GPT-5.6, Claude y Gemini por millón de tokens en 2026?',
          content: [
            'Los precios varían drásticamente según la capacidad del modelo. Todos los valores a continuación son precios públicos a partir de abril de 2026.',
            'Precios a partir de abril de 2026. Verifica las tasas actuales: [Precios OpenAI](https://openai.com/pricing) · [Precios Anthropic](https://www.anthropic.com/api) · [Precios Google](https://ai.google.dev/pricing)'
          ],
          columns: ['Modelo', 'Input (por 1M tokens)', 'Output (por 1M tokens)'],
          rows: [
            { 'Modelo': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'Input (por 1M tokens)': '$5.00', 'Output (por 1M tokens)': '$15.00' },
            { 'Modelo': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Input (por 1M tokens)': '$3.00', 'Output (por 1M tokens)': '$15.00' },
            { 'Modelo': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'Input (por 1M tokens)': '$3.50', 'Output (por 1M tokens)': '$10.50' },
            { 'Modelo': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'Input (por 1M tokens)': '$0.15', 'Output (por 1M tokens)': '$0.60' },
            { 'Modelo': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'Input (por 1M tokens)': '$0.25', 'Output (por 1M tokens)': '$1.25' },
            { 'Modelo': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'Input (por 1M tokens)': '$0.075', 'Output (por 1M tokens)': '$0.30' },
          ],
          tableFormat: true
        },
        rateLimits: {
          title: '¿Qué son los límites de tasa y por qué existen?',
          content: '**Los límites de tasa son topes en cuántas solicitudes puedes hacer por minuto (RPM), cuántos tokens puedes procesar por minuto (TPM) o cuántos tokens por día (TPD).**',
          items: [
            '**Solicitudes por minuto (RPM):** El número de llamadas a la API que puedes hacer en una ventana de 60 segundos.',
            '**Tokens por minuto (TPM):** El rendimiento total de tokens. Un solo prompt grande puede consumir toda tu cuota de TPM en segundos.',
            '**Escenarios comunes donde alcanzas los límites:** Pipelines automatizados, grandes trabajos de procesamiento por lotes, o usuarios del nivel gratuito en situaciones de pico.',
            '**Límites típicos:** Nivel gratuito: 3–15 RPM, 40k–100k TPM. Nivel de pago 1: 500 RPM, 200k–500k TPM. Empresa: 3.000+ RPM, millones de TPM.',
            '**Estrategias de solución:** Agrupa tareas pequeñas en solicitudes más grandes, añade retrasos entre solicitudes, o actualiza a una cuenta de nivel superior.'
          ]
        },
        promptDesign: {
          title: '¿Cómo puedo reducir mis costes de API LLM un 30–50×?',
          content: [
            '**Cada token innecesario en tu prompt desperdicia dinero.** Reducir un system prompt de 500 tokens a 300 tokens ahorra $0.001 por llamada, pero a 1.000 llamadas al día, eso es $1/día o $365/año.',
          ],
          items: [
            '**Recorta el contexto agresivamente:** No repitas lo que el modelo ya sabe.',
            '**Usa restricciones de longitud explícitas:** "Responde en 3 puntos" o "Máximo 100 palabras" fuerza la brevedad.',
            '**Evita el relleno en los system prompts:** Cada palabra de relleno cuesta dinero.',
          ]
        },
        howToStart: {
          title: 'Cómo reducir los costes de API de LLM en 5 pasos',
          numberedItems: [
            'Ajusta el modelo a la complejidad de la tarea: usa GPT-5.6 mini o Claude Haiku 4.5 para clasificación simple y Q&A — 33× más barato que los modelos frontier',
            'Resume el historial de conversación cada 5 turnos: evita que el historial completo se vuelva a cobrar en cada llamada',
            'Limita la longitud del output explícitamente: "Responde en 3 puntos" o "Máximo 100 palabras" evita respuestas verbosas',
            'Recorta los system prompts a lo esencial: elimina las frases de relleno',
            'Prueba los LLMs locales mediante Ollama para flujos de trabajo privados de alto volumen: coste cero de API por token'
          ]
        },
        modelSelection: {
          title: 'Elegir el modelo correcto para la tarea correcta',
          content: '**No toda tarea requiere OpenAI GPT-5.6 o Anthropic Claude Opus.**',
          columns: ['Tipo de tarea', 'Modelo recomendado', 'Coste vs GPT-5.6'],
          rows: [
            { 'Tipo de tarea': 'Clasificación simple / Sí-No', 'Modelo recomendado': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude) o [Gemini Flash](https://gemini.google.com)', 'Coste vs GPT-5.6': '33× más barato' },
            { 'Tipo de tarea': 'Q&A factual corto', 'Modelo recomendado': 'GPT-5.6 mini o Claude Haiku 4.5', 'Coste vs GPT-5.6': '10–33× más barato' },
            { 'Tipo de tarea': 'Análisis complejo o código', 'Modelo recomendado': '[GPT-5.6](https://openai.com/chatgpt) o [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Coste vs GPT-5.6': 'Referencia' },
            { 'Tipo de tarea': 'Escritura creativa larga', 'Modelo recomendado': 'Claude Opus 4.8 o GPT-5.6', 'Coste vs GPT-5.6': 'Referencia' },
            { 'Tipo de tarea': 'Flujos de trabajo privados de alto volumen', 'Modelo recomendado': 'Modelo local mediante [Ollama](https://ollama.com/library/llama3.3)', 'Coste vs GPT-5.6': 'Coste de API cero' }
          ],
          tableFormat: true
        },
        localLLMs: {
          title: '¿Cuáles son los trade-offs entre LLMs locales (Ollama) y APIs cloud?',
          content: '**Los modelos locales mediante Ollama o LM Studio tienen coste cero de API por token — solo pagas por el hardware (VRAM y electricidad).**',
          items: [
            '**Costes de hardware:** LLaMA 3.1 7B requiere ~8 GB VRAM, modelos 13B necesitan ~16 GB, modelos 70B necesitan 40 GB+.',
            '**Trade-off de capacidad:** Los modelos locales son excelentes para clasificación, resumen y tareas repetitivas. Tienen dificultades con el razonamiento de varios pasos.',
            '**Trade-off de latencia:** Los modelos cloud responden en 500ms–2s. Los modelos locales en hardware de consumo: 2–10s.',
            '**Cuándo usar local:** Automatización de alto volumen, datos sensibles al RGPD, o flujos de trabajo críticos.',
            '**Cuándo usar cloud:** Aplicaciones sensibles a la latencia o análisis únicos donde el coste de la API es insignificante.'
          ]
        },
        regionalContext: {
          title: 'Contexto regional',
          content: [
            '**UE / RGPD** Para las organizaciones de la UE que procesan datos personales a través de APIs de IA, los costes de tokens incluyen un coste de cumplimiento no visible en las tablas de precios: cada token enviado a una API en la nube es un dato personal procesado por un tercero según el Artículo 28 del RGPD, lo que requiere un Acuerdo de Tratamiento de Datos y un mecanismo de transferencia según el Artículo 46 para proveedores fuera de la UE.',
            'Los LLM locales mediante Ollama eliminan esto por completo. Para los equipos de la UE que procesan datos de clientes, tickets de soporte o documentos internos: el coste real de una llamada a una API en la nube incluye la sobrecarga de cumplimiento de la transferencia externa de datos. A escala, esto puede hacer que la inferencia local sea económicamente competitiva incluso teniendo en cuenta la inversión en hardware.',
            'Las organizaciones alemanas sujetas a las directrices BSI IT-Grundschutz deben documentar los costes de procesamiento de IA y los flujos de datos — los registros de tokens de las APIs en la nube satisfacen este requisito si se conservan con controles de acceso adecuados.',
            '**Japón (METI)** El texto en japonés requiere entre un 20% y un 40% más de tokens que el texto equivalente en inglés debido a la ineficiencia del tokenizador en escrituras CJK. Un documento japonés de 1.000 palabras cuesta aproximadamente $0.007 en GPT-5.6 frente a $0.005 para el mismo contenido en inglés. Para flujos de trabajo de IA en japonés, los modelos Qwen3 mediante Ollama son significativamente más eficientes en tokens — la tokenización nativa CJK reduce el recuento de tokens en japonés entre un 30% y un 40%, lo que reduce directamente el coste por llamada.',
            '**China** Según la Ley de Seguridad de Datos de China (数据安全法), el envío de datos empresariales a APIs de IA en la nube extranjeras requiere una revisión de cumplimiento de localización de datos. Para los equipos empresariales chinos, la inferencia local mediante Qwen3 (Alibaba) elimina simultáneamente el coste de transferencia de datos transfronteriza y el riesgo de cumplimiento. Con 1.000 o más llamadas a la API por día, el coste de amortización del hardware de un servidor de inferencia local suele ser inferior a las tarifas de API en un plazo de 6 a 12 meses.'
          ]
        },
        promptquorumHelps: {
          title: 'Cómo PromptQuorum te ayuda a gestionar los costes de tokens',
          content: [
            '**PromptQuorum utiliza dos LLM: un LLM de backend y un LLM de frontend (el modelo que elijas para responder tu pregunta).** El LLM de backend optimiza tu prompt y ejecuta un análisis de consenso Quorum en varios modelos de frontend. A diferencia de las interfaces de chat de un solo modelo, PromptQuorum hace que el uso de tokens sea visible y procesable.',
            '**Los tokens del LLM de backend siempre son visibles.** La visibilidad de los tokens de frontend depende de cómo accedas al modelo:',
            '- **Interfaces públicas** (Copilot, chat web público de Claude): Los tokens de frontend NO son visibles — solo se muestran los del backend.',
            '- **Modelos locales** (LM Studio, Ollama): Los tokens de frontend SÍ son visibles — se ejecuta en tu hardware, y PromptQuorum ve el uso de tokens directamente.',
            '- **APIs** (OpenAI, Anthropic): Depende. Con integración directa de API, los tokens de frontend son visibles. A través de un endpoint de terceros o una interfaz pública, no lo son.',
            '**Probado en PromptQuorum — 20 prompts idénticos de resumen de investigación enviados a GPT-5.6 y GPT-5.6 mini:** La calidad de salida coincidió en 17 de 20 tareas. Diferencia de coste: $0.003 por prompt (GPT-5.6) frente a $0.00007 por prompt (mini) — una reducción de coste de 43×. En las 3 tareas donde GPT-5.6 fue superior, la complejidad implicaba razonamiento de varios pasos entre documentos.'
          ]
        },
        recipes: {
          title: 'Recetas de costes de tokens — Escenarios comunes',
          content: 'Usa estas plantillas como puntos de partida para optimizar los costes en flujos de trabajo específicos.',
          items: [
            '**"Búsqueda rápida / Tarea Sí-No":** Usa GPT-5.6 mini o Haiku. System prompt mínimo (≤50 tokens). Sin historial. Coste total por tarea: ~$0.00001–0.0001.',
            '**"Tarea de investigación larga (5–10 turnos)":** Usa Claude Opus 4.8. Después de cada 5 turnos, resume el historial (reduce los tokens en un 70%). Costes: ~$0.01–0.05 por sesión.',
            '**"Pipeline automatizado / Procesamiento por lotes":** Usa GPT-5.6 mini para filtrado (33× más barato). Escala a GPT-5.6 solo para síntesis final.',
            '**"Flujo de trabajo sensible a la privacidad":** Dirige a Ollama local. Coste de API cero.',
            '**"Comparación de outputs en modelos":** Envía a GPT-5.6, Claude Opus 4.8 y Claude Haiku 4.5 simultáneamente. Elige el más barato que cumpla tu umbral de calidad.'
          ]
        },
        mistakes: {
          title: 'Errores comunes que disparan tu factura de tokens',
          content: 'Evita estos patrones de desperdicio de tokens.',
          items: [
            '**Enviar el historial completo de conversación en cada llamada:** Resume cada 5 turnos o usa caché de prompts.',
            '**Usar un modelo de alta capacidad para tareas simples:** Diferencia de coste: 33× en tareas simples.',
            '**No restringir la longitud del output:** "Resume en 50 palabras" cuesta 8× menos que "cuéntame sobre X".',
            '**Repetir los system prompts largos en cada llamada:** Usa caché de prompts si la API lo admite.',
            '**Olvidar los tokens de imagen:** Una imagen de alta resolución puede consumir 500–2.000 tokens.'
          ]
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué es un token en IA?', a: 'Un token es la unidad de texto más pequeña que procesa un modelo de IA — aproximadamente 3–4 caracteres o ¾ de una palabra en inglés. "ChatGPT" cuenta como 2 tokens. Se te cobra por cada token de entrada y cada token de salida, y los tokens de salida suelen costar 2–5× más que los de entrada.' },
            { q: '¿Cuánto cuesta GPT-5.6 por token?', a: 'A partir de abril de 2026: GPT-5.6 cuesta $5.00 por 1M de tokens de entrada y $15.00 por 1M de tokens de salida. GPT-5.6 mini cuesta $0.15 por 1M de entrada y $0.60 por 1M de salida — 33× más barato para tareas que no requieren la capacidad completa de GPT-5.6.' },
            { q: '¿Cómo funcionan los límites de tasa?', a: 'Los límites de tasa restringen las solicitudes por minuto (RPM) y los tokens por minuto (TPM). Nivel gratuito: 3–15 RPM, 40k–100k TPM. Nivel de pago: 500 RPM, 200k–500k TPM. Empresa: 3.000+ RPM. Soluciones: agrupa tareas pequeñas en solicitudes más grandes, añade retrasos entre llamadas o actualiza a un nivel superior.' },
            { q: '¿Cuántos tokens tiene un artículo o informe típico?', a: 'Un artículo de 1.000 palabras ≈ 1.200–1.500 tokens. Un PDF de 10 páginas ≈ 4.000–6.000 tokens. Una imagen de alta resolución ≈ 500–2.000 tokens.' },
            { q: '¿Por qué mi factura de API es más alta de lo esperado, incluso con prompts cortos?', a: 'Tres causas comunes: (1) Envías el historial completo en cada llamada. (2) Tu system prompt es largo. (3) Usas un modelo de alta capacidad para tareas simples.' },
            { q: '¿Un system prompt más largo siempre significa un mejor output?', a: 'No. Un system prompt bien diseñado de 100 tokens a menudo supera a un prompt verboso de 500 tokens. La calidad gana a la cantidad.' },
            { q: '¿Cuándo debo usar un LLM local en lugar de una API en la nube?', a: 'Usa LLMs locales para: automatización de alto volumen (1.000+ llamadas/día), datos sensibles al RGPD donde ningún dato personal debe salir de tu infraestructura, o pipelines críticos en coste donde la calidad es suficientemente buena. Usa APIs en la nube para: aplicaciones sensibles a la latencia, tareas de razonamiento complejo, o análisis puntuales donde el coste de la API es insignificante.' },
            { q: '¿Cómo puedo reducir mis costes de tokens de la API de IA?', a: 'Siete estrategias: recorta los system prompts, limita la longitud del output, resume el historial de conversación cada 5 turnos, usa modelos más baratos para tareas simples, evita enviar el historial completo, reduce el tamaño de las imágenes antes de subirlas, y agrupa las llamadas de prueba en vez de ejecutarlas manualmente.' },
            { q: '¿Cuántos tokens usa un prompt de IA típico?', a: 'Un prompt típico usa 150–500 tokens según la complejidad. Una pregunta simple (5–20 tokens), un párrafo medio (50–150 tokens), un prompt de investigación completo con ejemplos (200–600 tokens). Los tokens por prompt varían según el idioma y la complejidad.' },
            { q: '¿Qué significa que un prompt tenga 3.000 tokens?', a: 'Un prompt de 3.000 tokens equivale aproximadamente a un artículo de 2.000 palabras o más de 10 páginas de texto. Esto indica un system prompt largo, historial de conversación completo, o contexto de documento extenso. Para mayor eficiencia, considera resumir el historial de conversación o recortar el contexto innecesario.' },
            { q: '¿Cuánto cuesta cada prompt de IA según el modelo?', a: 'Los costes varían según el modelo: GPT-5.6 mini = ~$0.00005–0.0001 por prompt. GPT-5.6 = ~$0.001–0.01. Claude Haiku = ~$0.00003 por prompt. Claude Opus = ~$0.005–0.02. Gemini Flash = ~$0.00002. Los costes dependen de la longitud del prompt y del output.' },
            { q: '¿Cómo se calculan los tokens de un prompt de IA?', a: 'Los tokens se calculan dividiendo el texto en unidades de 3–4 caracteres (aproximadamente ¾ de palabras en inglés). Cuentan los system prompts, el historial de conversación, las imágenes, los archivos adjuntos y el output. La mayoría de los proveedores de API muestran el recuento exacto de tokens en las respuestas. Prompts más cortos y output limitado reducen el uso de tokens.' },
            { q: '¿Cuántos tokens tiene un prompt de 1.000 palabras?', a: 'Un prompt de 1.000 palabras es aproximadamente 1.200–1.500 tokens en inglés. Otros idiomas tokenizan menos eficientemente y pueden requerir un 20–40% más de tokens. El recuento de tokens depende de la elección de palabras y la longitud media de las palabras del idioma usado.' },
            { q: '¿Los límites de tokens se basan en un solo prompt o en toda la conversación?', a: 'Los límites de tokens se aplican a todo el historial de conversación, incluyendo todos los system prompts, mensajes anteriores, documentos recuperados y el prompt actual. Los límites de tasa (tokens por minuto) se acumulan en todas tus llamadas a la API en ese periodo, no solo en un prompt.' },
            { q: '¿Cuántos prompts se pueden obtener de 1 millón de tokens?', a: 'Con 1 millón de tokens: 2.000–6.667 prompts si cada prompt promedia 150–500 tokens. Prompts de GPT-5.6 mini (~300 tokens) = ~3.333 prompts. Prompts de GPT-5.6 (~500 tokens) = ~2.000 prompts. El recuento real depende del tamaño del prompt y la longitud del output.' },
            { q: '¿La optimización de prompts reduce significativamente los costes de la API?', a: 'Sí. Reducir un system prompt de 500 tokens a 300 tokens ahorra ~$0.001 por llamada a la API. A 1.000 llamadas/día, eso son $365/año ahorrados. Limitar la longitud del output y resumir el historial de conversación cada 5 turnos reduce los costes en un 30–50%. La selección del modelo es la palanca más grande — GPT-5.6 mini cuesta 33× menos que GPT-5.6.' }
          ]
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[Fundamentals: Respuestas de IA más rápidas: Cómo hacer prompts para la velocidad](/es/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — la eficiencia de los prompts reduce directamente los costes de tokens',
            '[Fundamentals: GPT, Claude o Gemini? Cómo elegir el modelo correcto](/es/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — la selección del modelo es la mayor palanca de coste',
            '[Fundamentals: Context Windows explicados: Por qué la IA olvida](/es/prompt-engineering/context-windows-explained-why-ai-forgets) — los context windows limitan cuánto historial puedes incluir'
          ]
        },
        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            '[Precios OpenAI](https://openai.com/pricing)',
            '[Precios Anthropic Claude](https://www.anthropic.com/pricing)',
            '[Precios Google Gemini](https://ai.google.dev/pricing)'
          ]
        }
      }
    },
    ar: {
      theme: 'Fundamentals',
      title: 'الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي في ⁨2026⁩',
      intro: 'كل استدعاء لـ API للذكاء الاصطناعي يُقاس ويُحتسب بالرموز — الوحدة التي تتحكم في ما يمكن للنموذج معالجته وكمية ما تدفع. فهم الرموز هو أساس الاستدعاء الفعّال والاقتصادي.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'رموز ⁨LLM⁩ وتكاليفها وحدودها ⁨2026⁩: الاقتصاد الكامل',
      metaDescription: '⁨1M⁩ رمز إدخال يكلف $⁨3⁩–⁨5⁩ في ⁨GPT-5.6⁩ و⁨Claude⁩. افهم احتساب الرموز ومعدلات الحدود واختيار نموذج ⁨LLM⁩ المناسب لتخفيض تكاليفك الشهرية.',
      readTime: '١٣ دقيقة للقراءة',
      primaryTerm: 'رموز LLM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي في 2026',
        description: 'تعلّم كيف تتحكم الرموز في تكاليف وحدود الذكاء الاصطناعي. افهم نماذج التسعير وحدود المعدل واستراتيجيات تحسين الإنفاق على GPT-5.6 وClaude وGemini والنماذج المحلية.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        inLanguage: 'ar',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['رموز', 'تكاليف API', 'حدود المعدل', 'هندسة الطلبات', 'GPT-5.6', 'Claude', 'Gemini', 'تحسين التكاليف', 'نماذج LLM المحلية'],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'اختيار نموذج الذكاء الاصطناعي حسب نوع المهمة — دليل تحسين التكاليف',
        description: 'أي نموذج ذكاء اصطناعي يجب استخدامه لكل نوع مهمة لتقليل تكلفة API دون التضحية بجودة المخرجات، اعتبارًا من 2026.',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'التصنيف البسيط أو مهام نعم/لا',
            description: 'استخدم GPT-5.6 mini أو Claude Haiku 4.5 أو Gemini Flash — أرخص بـ 33 مرة من GPT-5.6 بدقة مماثلة في التصنيف البسيط.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'أسئلة وأجوبة واقعية قصيرة',
            description: 'استخدم GPT-5.6 mini أو Claude Haiku 4.5 — أرخص بـ 10-33 مرة من النماذج المتقدمة. مناسب لمهام البحث والأسئلة ذات الإجابة الواحدة واستخراج الكيانات.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'التحليل المعقد أو توليد الأكواد',
            description: 'استخدم GPT-5.6 أو Claude Opus 4.8 — القدرة المتقدمة مطلوبة للاستدلال متعدد الخطوات وتصحيح الأخطاء والتوليف التقني.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'الكتابة الإبداعية الطويلة',
            description: 'استخدم Claude Opus 4.8 أو GPT-5.6 — يتفوق كلاهما في جودة السرد المستمرة واتساق الأسلوب عبر المخرجات الطويلة.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'سير العمل الخاص أو الآلي عالي الحجم',
            description: 'استخدم نموذجًا محليًا عبر Ollama أو LM Studio — بدون تكلفة API لكل رمز. يتطلب استثمارًا في VRAM؛ الأنسب للمهام التي تكون فيها الجودة "الجيدة بما يكفي" مقبولة.',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html',
      gammaDescription: 'يتناول العرض التقديمي: أسعار الرموز وحدود المعدل واختيار النماذج واستراتيجيات تقليل التكاليف. نزّل PDF كبطاقة مرجعية لاقتصاديات رموز الذكاء الاصطناعي.',
      sections: {
        definition: {
          title: 'ما هو الرمز؟',
          content: [
            '**الرمز هو أصغر وحدة نصية يعالجها نموذج الذكاء الاصطناعي — نحو 3–4 أحرف أو ¾ من كلمة إنجليزية.** في النص الإنجليزي، تُعدّ "ChatGPT" رمزَين، و"Hello, how are you?" نحو 5–6 رموز. اللغات الأخرى تُقسَّم بكفاءة أقل — نفس الجملة بالعربية أو اليابانية قد تستهلك 20–40% رموزًا أكثر. يُحتسب عليك كل رمز في طلبك (مدخلات) وكل رمز يُنتجه النموذج.',
            'النماذج لا "تفكر" بالكلمات أو الأحرف. داخليًا، تحوّل النصوص إلى معرّفات رموز وتعالجها رقميًا.',
            'باختصار: الرمز هو أصغر وحدة نصية يعالجها نموذج الذكاء الاصطناعي — نحو 3–4 أحرف أو ¾ من كلمة إنجليزية — ويُحتسب عليك كل رمز دخلًا وكل رمز خرجًا.'
          ]
        },
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'الرموز هي وحدة التكلفة والمعالجة للذكاء الاصطناعي. نحو 3–4 أحرف = رمز واحد في الإنجليزية؛ اللغات الأخرى تحتاج رموزًا أكثر.',
            'تدفع بشكل منفصل لرموز المدخلات والمخرجات — رموز المخرجات تكلف عادةً 2–5 أضعاف أكثر.',
            'يشمل عدّ الرموز طلبات النظام وكامل سجل المحادثة والملفات المرفقة والصور — ليس فقط رسالتك الأخيرة.',
            'حدود المعدل موجودة لمنع إساءة الاستخدام وضمان التوزيع العادل للموارد.',
            'استخدام النموذج المناسب للمهمة يقلل التكلفة بمقدار 10–50 ضعفًا.',
            'نماذج LLM المحلية عبر Ollama أو LM Studio لا تكلف شيئًا للـ API لكل رمز لكنها تتطلب استثمارًا في VRAM.'
          ]
        },
        tokenCounting: {
          title: 'كيف يعمل عدّ الرموز عمليًا',
          content: '**كل عنصر في استدعاء API — طلب النظام وسجل المحادثة والرسالة الجديدة والملفات ومخرجات النموذج — يستهلك رموزًا من حصتك.**',
          items: [
            '**طلب النظام:** يُعدّ مرة واحدة لكل رسالة. طلب نظام من 200 كلمة = ~250 رمزًا في كل استدعاء API.',
            '**سجل المحادثة الكامل:** مضمّن في كل طلب ما لم يُلخَّص أو يُحذف صراحةً.',
            '**رسالة المدخلات:** تُعدّ كما هي.',
            '**الملفات أو الصور المرفقة:** الصور تستهلك 100–2.000 رمز حسب الحجم والدقة.',
            '**مخرجات النموذج:** الإجابة المُنتجة تُعدّ كاملةً بمعدلات رموز المخرجات (عادةً 2–5 أضعاف أعلى من معدلات المدخلات).',
            '**مثال عملي:** طلب النظام (300) + سؤال 1 (150) + إجابة 1 (200) + سؤال 2 (200) + إجابة 2 (300) + سؤال 3 (100) = 1.250 رمزًا. عند إرسال السؤال 3، تدفع مجددًا لكامل السجل بالإضافة إلى مخرجات الإجابة 3.'
          ]
        },
        pricing: {
          title: 'كم تكلف GPT-5.6 وClaude وGemini لكل مليون رمز في 2026؟',
          content: [
            'تتفاوت الأسعار تفاوتًا كبيرًا حسب قدرة النموذج. جميع الأرقام أدناه هي أسعار عامة اعتبارًا من أبريل 2026.',
            'أسعار اعتبارًا من أبريل 2026. تحقق من الأسعار الحالية: [أسعار OpenAI](https://openai.com/pricing) · [أسعار Anthropic](https://www.anthropic.com/api) · [أسعار Google](https://ai.google.dev/pricing)'
          ],
          columns: ['النموذج', 'المدخلات (لكل مليون رمز)', 'المخرجات (لكل مليون رمز)'],
          rows: [
            { 'النموذج': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'المدخلات (لكل مليون رمز)': '$5.00', 'المخرجات (لكل مليون رمز)': '$15.00' },
            { 'النموذج': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'المدخلات (لكل مليون رمز)': '$3.00', 'المخرجات (لكل مليون رمز)': '$15.00' },
            { 'النموذج': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'المدخلات (لكل مليون رمز)': '$3.50', 'المخرجات (لكل مليون رمز)': '$10.50' },
            { 'النموذج': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'المدخلات (لكل مليون رمز)': '$0.15', 'المخرجات (لكل مليون رمز)': '$0.60' },
            { 'النموذج': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'المدخلات (لكل مليون رمز)': '$0.25', 'المخرجات (لكل مليون رمز)': '$1.25' },
            { 'النموذج': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'المدخلات (لكل مليون رمز)': '$0.075', 'المخرجات (لكل مليون رمز)': '$0.30' },
          ],
          tableFormat: true
        },
        rateLimits: {
          title: 'ما هي حدود المعدل ولماذا توجد؟',
          content: '**حدود المعدل هي سقوف على عدد الطلبات التي يمكنك إجراؤها في الدقيقة (RPM)، وكمية الرموز التي يمكنك معالجتها في الدقيقة (TPM)، أو الرموز في اليوم (TPD).**',
          items: [
            '**الطلبات في الدقيقة (RPM):** عدد استدعاءات API التي يمكنك إجراؤها في نافذة 60 ثانية.',
            '**الرموز في الدقيقة (TPM):** إجمالي إنتاجية الرموز. طلب واحد كبير يمكن أن يستهلك حصة TPM الكاملة في ثوانٍ.',
            '**السيناريوهات الشائعة التي تصل فيها إلى الحدود:** الأنابيب الآلية، ومهام المعالجة الدفعية الكبيرة، أو مستخدمو المستوى المجاني في حالات الذروة.',
            '**الحدود النموذجية:** مجاني: 3–15 RPM، 40k–100k TPM. مستوى مدفوع 1: 500 RPM، 200k–500k TPM. مؤسسي: 3.000+ RPM، ملايين TPM.',
            '**استراتيجيات الحل:** اجمع المهام الصغيرة في طلبات أكبر، وأضف تأخيرات بين الطلبات، أو ارقَّ إلى حساب مستوى أعلى.'
          ]
        },
        promptDesign: {
          title: 'كيف يمكنني تخفيض تكاليف API لـ LLM بنسبة 30–50 ضعفًا؟',
          content: [
            '**كل رمز غير ضروري في طلبك يُهدر المال.** تقليص طلب نظام من 500 رمز إلى 300 رمز يوفر $0.001 لكل استدعاء، لكن عند 1.000 استدعاء يوميًا هذا $1/يوم أو $365/سنة.',
          ],
          items: [
            '**قلّص السياق بشكل مكثف:** لا تكرر ما يعرفه النموذج بالفعل.',
            '**استخدم قيودًا صريحة للطول:** "أجب في 3 نقاط" أو "بحد أقصى 100 كلمة" يفرض الإيجاز.',
            '**تجنّب الحشو في طلبات النظام:** كل كلمة حشو تكلف مالًا.',
          ]
        },
        howToStart: {
          title: 'كيفية تقليل تكاليف API لـ LLM في 5 خطوات',
          numberedItems: [
            'طابق النموذج مع تعقيد المهمة: استخدم GPT-5.6 mini أو Claude Haiku 4.5 للتصنيف البسيط والأسئلة والأجوبة — أرخص بـ 33 ضعفًا من النماذج الأمامية',
            'لخّص سجل المحادثة كل 5 جولات: يمنع إعادة احتساب السجل الكامل في كل استدعاء',
            'قيّد طول المخرجات صراحةً: "أجب في 3 نقاط" أو "بحد أقصى 100 كلمة" يمنع الإجابات المطوّلة',
            'قلّص طلبات النظام إلى الجوهري: احذف عبارات الحشو',
            'جرّب نماذج LLM المحلية عبر Ollama لمسارات العمل الخاصة عالية الحجم: تكلفة API صفر لكل رمز'
          ]
        },
        modelSelection: {
          title: 'اختيار النموذج الصحيح للمهمة الصحيحة',
          content: '**ليست كل مهمة تتطلب OpenAI GPT-5.6 أو Anthropic Claude Opus.**',
          columns: ['نوع المهمة', 'النموذج الموصى به', 'التكلفة مقارنة بـ GPT-5.6'],
          rows: [
            { 'نوع المهمة': 'تصنيف بسيط / نعم-لا', 'النموذج الموصى به': '[GPT-5.6 mini](https://openai.com/chatgpt)، [Claude Haiku 4.5](https://www.anthropic.com/claude) أو [Gemini Flash](https://gemini.google.com)', 'التكلفة مقارنة بـ GPT-5.6': 'أرخص بـ 33 ضعفًا' },
            { 'نوع المهمة': 'أسئلة وأجوبة واقعية قصيرة', 'النموذج الموصى به': 'GPT-5.6 mini أو Claude Haiku 4.5', 'التكلفة مقارنة بـ GPT-5.6': 'أرخص بـ 10–33 ضعفًا' },
            { 'نوع المهمة': 'تحليل معقد أو كود', 'النموذج الموصى به': '[GPT-5.6](https://openai.com/chatgpt) أو [Claude Opus 4.8](https://www.anthropic.com/claude)', 'التكلفة مقارنة بـ GPT-5.6': 'مرجع' },
            { 'نوع المهمة': 'كتابة إبداعية طويلة', 'النموذج الموصى به': 'Claude Opus 4.8 أو GPT-5.6', 'التكلفة مقارنة بـ GPT-5.6': 'مرجع' },
            { 'نوع المهمة': 'مسارات عمل خاصة عالية الحجم', 'النموذج الموصى به': 'نموذج محلي عبر [Ollama](https://ollama.com/library/llama3.3)', 'التكلفة مقارنة بـ GPT-5.6': 'تكلفة API صفر' }
          ],
          tableFormat: true
        },
        localLLMs: {
          title: 'ما هي المقايضات بين نماذج LLM المحلية (Ollama) وAPIs السحابية؟',
          content: '**النماذج المحلية عبر Ollama أو LM Studio لا تكلف شيئًا للـ API لكل رمز — تدفع فقط للأجهزة (VRAM والكهرباء).**',
          items: [
            '**تكاليف الأجهزة:** LLaMA 3.1 7B يحتاج ~8 جيجابايت VRAM، نماذج 13B تحتاج ~16 جيجابايت، نماذج 70B تحتاج 40 جيجابايت+.',
            '**مقايضة القدرة:** النماذج المحلية ممتازة للتصنيف والتلخيص والمهام المتكررة. تعاني مع الاستدلال متعدد الخطوات.',
            '**مقايضة الكمون:** نماذج السحابة تستجيب في 500ms–2s. النماذج المحلية على أجهزة المستهلك: 2–10 ثوانٍ.',
            '**متى تستخدم المحلي:** الأتمتة عالية الحجم، البيانات الحساسة للقانون الأوروبي، أو مسارات العمل الحرجة.',
            '**متى تستخدم السحابة:** التطبيقات الحساسة للكمون أو التحليلات لمرة واحدة حيث تكلفة API ضئيلة.'
          ]
        },
        regionalContext: {
          title: 'السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR** بالنسبة للمؤسسات الأوروبية التي تعالج بيانات شخصية عبر واجهات API للذكاء الاصطناعي، تشمل تكاليف الرموز تكلفة امتثال غير ظاهرة في جداول الأسعار: كل رمز يُرسل إلى API سحابية هو بيانات شخصية تُعالجها جهة خارجية بموجب المادة 28 من GDPR، مما يتطلب اتفاقية معالجة بيانات وآلية نقل بموجب المادة 46 لمزودي الخدمة خارج الاتحاد الأوروبي.',
            'نماذج LLM المحلية عبر Ollama تزيل هذا تمامًا. بالنسبة لفرق الاتحاد الأوروبي التي تعالج بيانات العملاء أو تذاكر الدعم أو المستندات الداخلية: تشمل التكلفة الحقيقية لاستدعاء API سحابي عبء الامتثال لنقل البيانات الخارجي. على نطاق واسع، يمكن أن يجعل هذا الاستدلال المحلي منافسًا اقتصاديًا حتى مع احتساب الاستثمار في الأجهزة.',
            'يجب على المنظمات الألمانية بموجب إرشادات BSI IT-Grundschutz توثيق تكاليف معالجة الذكاء الاصطناعي وتدفقات البيانات — سجلات الرموز من واجهات API السحابية تفي بهذا المتطلب إذا احتُفظ بها مع ضوابط وصول مناسبة.',
            '**اليابان (METI)** يتطلب النص الياباني 20-40% رموزًا أكثر من النص الإنجليزي المكافئ بسبب عدم كفاءة أداة الترميز في نصوص CJK. مستند ياباني من 1.000 كلمة يكلف نحو $0.007 على GPT-5.6 مقابل $0.005 لنفس المحتوى بالإنجليزية. لسير عمل الذكاء الاصطناعي باللغة اليابانية، نماذج Qwen3 عبر Ollama أكثر كفاءة في الرموز بشكل ملحوظ — الترميز الأصلي لـ CJK يقلل عدد الرموز اليابانية بنسبة 30-40%، مما يقلل التكلفة لكل استدعاء مباشرة.',
            '**الصين** بموجب قانون أمن البيانات الصيني (数据安全法)، يتطلب إرسال بيانات الأعمال إلى واجهات API سحابية أجنبية للذكاء الاصطناعي مراجعة امتثال لتوطين البيانات. بالنسبة لفرق المؤسسات الصينية، يزيل الاستدلال المحلي عبر Qwen3 (علي بابا) تكلفة نقل البيانات عبر الحدود ومخاطر الامتثال في آنٍ واحد. عند 1.000+ استدعاء API يوميًا، عادةً ما تكون تكلفة استهلاك أجهزة خادم الاستدلال المحلي أقل من رسوم API خلال 6-12 شهرًا.'
          ]
        },
        promptquorumHelps: {
          title: 'كيف يساعدك PromptQuorum في إدارة تكاليف الرموز',
          content: [
            '**يستخدم PromptQuorum نموذجَي LLM: نموذج خلفي (Backend) ونموذج أمامي (Frontend) هو النموذج الذي تختاره للإجابة عن سؤال طلبك.** يعمل النموذج الخلفي على تحسين طلبك وتشغيل تحليل توافق Quorum عبر عدة نماذج أمامية. على عكس واجهات الدردشة أحادية النموذج، يجعل PromptQuorum استخدام الرموز مرئيًا وقابلاً للتصرف.',
            '**رموز النموذج الخلفي مرئية دائمًا.** تعتمد رؤية رموز النموذج الأمامي على كيفية وصولك إلى النموذج:',
            '- **الواجهات العامة** (Copilot، دردشة Claude العامة عبر الويب): رموز النموذج الأمامي غير مرئية — تظهر رموز النموذج الخلفي فقط.',
            '- **النماذج المحلية** (LM Studio، Ollama): رموز النموذج الأمامي مرئية — يعمل على جهازك، ويرى PromptQuorum استخدام الرموز مباشرةً.',
            '- **واجهات API** (OpenAI، Anthropic): يعتمد الأمر. مع التكامل المباشر لواجهة API، تكون رموز النموذج الأمامي مرئية. عبر نقطة نهاية طرف ثالث أو واجهة عامة، لا تكون مرئية.',
            '**تم الاختبار في PromptQuorum — إرسال 20 طلب تلخيص بحثي متطابق إلى GPT-5.6 وGPT-5.6 mini:** تطابقت جودة المخرجات في 17 من أصل 20 مهمة. فارق التكلفة: $0.003 لكل طلب (GPT-5.6) مقابل $0.00007 لكل طلب (mini) — تخفيض في التكلفة بمقدار 43 ضعفًا. في المهام الثلاث التي تفوق فيها GPT-5.6، تضمّن التعقيد استدلالًا متعدد الخطوات عبر المستندات.'
          ]
        },
        recipes: {
          title: 'وصفات تكاليف الرموز — سيناريوهات شائعة',
          content: 'استخدم هذه القوالب كنقاط انطلاق لتحسين التكاليف في مسارات عمل محددة.',
          items: [
            '**"بحث سريع / مهمة نعم-لا":** استخدم GPT-5.6 mini أو Haiku. طلب نظام أدنى (≤50 رمزًا). بلا سجل. التكلفة لكل مهمة: ~$0.00001–0.0001.',
            '**"مهمة بحثية طويلة (5–10 جولات)":** استخدم Claude Opus 4.8. بعد كل 5 جولات، لخّص السجل (يقلل الرموز بنسبة 70%). التكاليف: ~$0.01–0.05 لكل جلسة.',
            '**"خط أنابيب آلي / معالجة دفعية":** استخدم GPT-5.6 mini للتصفية (أرخص بـ 33 ضعفًا). تصعيد إلى GPT-5.6 فقط للتوليف النهائي.',
            '**"مسار عمل حساس للخصوصية":** وجّه إلى Ollama المحلي. تكلفة API صفر.',
            '**"مقارنة المخرجات عبر النماذج":** أرسل إلى GPT-5.6 وClaude Opus 4.8 وClaude Haiku 4.5 في آنٍ واحد. اختر الأرخص الذي يلبي عتبة الجودة لديك.'
          ]
        },
        mistakes: {
          title: 'الأخطاء الشائعة التي تُضخّم فاتورة الرموز',
          content: 'تجنّب هذه الأنماط المُهدِّرة للرموز.',
          items: [
            '**إرسال سجل المحادثة الكامل في كل استدعاء:** لخّص كل 5 جولات أو استخدم تخزين الطلبات مؤقتًا.',
            '**استخدام نموذج عالي القدرة لمهام بسيطة:** فارق التكلفة: 33 ضعفًا في المهام البسيطة.',
            '**عدم تقييد طول المخرجات:** "لخّص في 50 كلمة" يكلف 8 أضعاف أقل من "أخبرني عن X".',
            '**تكرار طلبات النظام الطويلة في كل استدعاء:** استخدم تخزين الطلبات مؤقتًا إذا كانت API تدعمه.',
            '**نسيان رموز الصور:** صورة عالية الدقة يمكن أن تستهلك 500–2.000 رمز.'
          ]
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ما هو الرمز في الذكاء الاصطناعي؟', a: 'الرمز هو أصغر وحدة نصية يعالجها نموذج الذكاء الاصطناعي — نحو 3–4 أحرف أو ¾ من كلمة إنجليزية. تُعدّ "ChatGPT" رمزَين. يُحتسب عليك كل رمز مدخل وكل رمز مخرج، وعادةً ما تكلف رموز المخرجات 2–5 أضعاف رموز المدخلات.' },
            { q: 'كم تكلف GPT-5.6 لكل رمز؟', a: 'اعتبارًا من أبريل 2026: تكلف GPT-5.6 $5.00 لكل مليون رمز مدخل و$15.00 لكل مليون رمز مخرج. تكلف GPT-5.6 mini $0.15 لكل مليون مدخل و$0.60 لكل مليون مخرج — أرخص بـ 33 ضعفًا للمهام التي لا تتطلب القدرة الكاملة لـ GPT-5.6.' },
            { q: 'كيف تعمل حدود المعدل؟', a: 'تحدّ حدود المعدل الطلبات في الدقيقة (RPM) والرموز في الدقيقة (TPM). المستوى المجاني: 3–15 RPM، 40k–100k TPM. المستوى المدفوع: 500 RPM، 200k–500k TPM. المؤسسي: 3.000+ RPM. حلول بديلة: اجمع المهام الصغيرة في طلبات أكبر، أضف تأخيرات بين الاستدعاءات، أو ارقَّ إلى مستوى أعلى.' },
            { q: 'كم رمزًا يحتوي مقال أو تقرير نموذجي؟', a: 'مقال من 1.000 كلمة ≈ 1.200–1.500 رمز. PDF من 10 صفحات ≈ 4.000–6.000 رمز. صورة عالية الدقة ≈ 500–2.000 رمز.' },
            { q: 'لماذا فاتورة API الخاصة بي أعلى مما توقعت حتى مع طلبات قصيرة؟', a: 'ثلاثة أسباب شائعة: (1) ترسل السجل الكامل في كل استدعاء. (2) طلب نظامك طويل. (3) تستخدم نموذجًا عالي القدرة لمهام بسيطة.' },
            { q: 'هل يعني طلب النظام الأطول دائمًا مخرجات أفضل؟', a: 'لا. طلب نظام مصمم جيدًا من 100 رمز غالبًا يتفوق على طلب مطوّل من 500 رمز. الجودة تتفوق على الكمية.' },
            { q: 'متى يجب أن أستخدم نموذج LLM محلي بدلاً من API سحابي؟', a: 'استخدم نماذج LLM المحلية من أجل: الأتمتة عالية الحجم (1.000+ استدعاء/يوم)، البيانات الحساسة لـ GDPR حيث يجب ألا تغادر أي بيانات شخصية بنيتك التحتية، أو خطوط الأنابيب الحساسة للتكلفة حيث تكون الجودة كافية. استخدم واجهات API السحابية من أجل: التطبيقات الحساسة للكمون، مهام الاستدلال المعقدة، أو التحليلات لمرة واحدة حيث تكون تكلفة API ضئيلة.' },
            { q: 'كيف يمكنني تقليل تكاليف رموز API للذكاء الاصطناعي؟', a: 'سبع استراتيجيات: قلّص طلبات النظام، قيّد طول المخرجات، لخّص سجل المحادثة كل 5 جولات، استخدم نماذج أرخص للمهام البسيطة، تجنّب إرسال سجل المحادثة الكامل، صغّر حجم الصور قبل الرفع، وادمج استدعاءات الاختبار بدلاً من تشغيلها يدويًا.' },
            { q: 'كم رمزًا يستخدم طلب الذكاء الاصطناعي النموذجي؟', a: 'يستخدم الطلب النموذجي 150–500 رمز حسب التعقيد. سؤال بسيط (5–20 رمزًا)، فقرة متوسطة (50–150 رمزًا)، طلب بحثي كامل مع أمثلة (200–600 رمز). يختلف عدد الرموز لكل طلب حسب اللغة والتعقيد.' },
            { q: 'ماذا يعني أن يحتوي الطلب على 3.000 رمز؟', a: 'الطلب المكوّن من 3.000 رمز يعادل تقريبًا مقالًا من 2.000 كلمة أو أكثر من 10 صفحات نصية. هذا يشير إلى طلب نظام طويل، أو سجل محادثة كامل، أو سياق مستند كبير. لمزيد من الكفاءة، فكّر في تلخيص سجل المحادثة أو تقليص السياق غير الضروري.' },
            { q: 'كم تكلف كل طلب ذكاء اصطناعي عبر النماذج المختلفة؟', a: 'تختلف التكاليف حسب النموذج: GPT-5.6 mini = ~$0.00005–0.0001 لكل طلب. GPT-5.6 = ~$0.001–0.01. Claude Haiku = ~$0.00003 لكل طلب. Claude Opus = ~$0.005–0.02. Gemini Flash = ~$0.00002. تعتمد التكاليف على طول الطلب والمخرجات.' },
            { q: 'كيف تُحتسب رموز طلبات الذكاء الاصطناعي؟', a: 'تُحتسب الرموز بتقسيم النص إلى وحدات من 3–4 أحرف (نحو ¾ من الكلمات الإنجليزية). تُحتسب طلبات النظام وسجل المحادثة والصور والملفات المرفقة والمخرجات كلها. تعرض معظم مزودي API عدد الرموز الدقيق في الاستجابات. الطلبات الأقصر والمخرجات المقيّدة تقلل استهلاك الرموز.' },
            { q: 'كم رمزًا يحتوي طلب من 1.000 كلمة؟', a: 'الطلب المكوّن من 1.000 كلمة هو نحو 1.200–1.500 رمز بالإنجليزية. اللغات الأخرى تُقسَّم بكفاءة أقل وقد تحتاج 20–40% رموزًا أكثر. يعتمد عدد الرموز على اختيار الكلمات ومتوسط طول الكلمة في اللغة المستخدمة.' },
            { q: 'هل تعتمد حدود الرموز على طلب واحد أم على المحادثة بأكملها؟', a: 'تنطبق حدود الرموز على كامل سجل المحادثة، بما في ذلك جميع طلبات النظام والرسائل السابقة والمستندات المسترجعة والطلب الحالي. تتراكم حدود المعدل (الرموز في الدقيقة) عبر جميع استدعاءات API خلال ذلك الإطار الزمني، وليس لطلب واحد فقط.' },
            { q: 'كم عدد الطلبات التي يمكن الحصول عليها من مليون رمز؟', a: 'مع مليون رمز: 2.000–6.667 طلبًا إذا بلغ متوسط كل طلب 150–500 رمز. طلبات GPT-5.6 mini (~300 رمز) = ~3.333 طلبًا. طلبات GPT-5.6 (~500 رمز) = ~2.000 طلب. يعتمد العدد الفعلي على حجم الطلب وطول المخرجات.' },
            { q: 'هل يقلل تحسين الطلبات تكاليف API بشكل كبير؟', a: 'نعم. تقليص طلب نظام من 500 رمز إلى 300 رمز يوفر ~$0.001 لكل استدعاء API. عند 1.000 استدعاء/يوم، هذا يعني توفير $365/سنة. تقييد طول المخرجات وتلخيص سجل المحادثة كل 5 جولات يقلل التكاليف بنسبة 30–50%. اختيار النموذج هو الرافعة الأكبر — تكلف GPT-5.6 mini أقل بـ 33 ضعفًا من GPT-5.6.' }
          ]
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[الأساسيات: إجابات ذكاء اصطناعي أسرع: كيف تستدعي للسرعة](/ar/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — كفاءة الطلبات تقلل تكاليف الرموز مباشرةً',
            '[الأساسيات: GPT أم Claude أم Gemini؟ كيف تختار النموذج الصحيح](/ar/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — اختيار النموذج هو أكبر رافعة للتكلفة',
            '[الأساسيات: نوافذ السياق: لماذا ينسى الذكاء الاصطناعي](/ar/prompt-engineering/context-windows-explained-why-ai-forgets) — نوافذ السياق تحدّ من مقدار السجل الذي يمكنك تضمينه'
          ]
        },
        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            '[أسعار OpenAI](https://openai.com/pricing)',
            '[أسعار Anthropic Claude](https://www.anthropic.com/pricing)',
            '[أسعار Google Gemini](https://ai.google.dev/pricing)'
          ]
        }
      }
    },
    pt: {
      theme: 'Fundamentals',
      title: 'Tokens, Custos e Limites: A Economia do Prompting de IA em 2026',
      intro: 'Cada chamada à API de IA é medida e cobrada em tokens — a unidade que controla tanto o que o modelo pode processar quanto quanto você paga. Entender os tokens é a base de um prompting eficiente e econômico.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'Custos e Limites de Tokens de IA Explicados 2026',
      metaDescription: 'Cada prompt usa tokens, a unidade que controla os custos e limites da IA. Entenda a contagem, os preços de GPT-5.6/Claude/Gemini e a opção de LLM local.',
      readTime: '13 min de leitura',
      primaryTerm: 'Tokens de LLM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Tokens, Custos e Limites: A Economia do Prompting de IA em 2026',
        description: 'Aprenda como os tokens controlam os custos e limites da IA. Entenda os modelos de preços, os limites de taxa e as estratégias para otimizar gastos em GPT-5.6, Claude, Gemini e modelos locais.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        inLanguage: 'pt-BR',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['tokens', 'custos de API', 'limites de taxa', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini', 'otimização de custos', 'LLMs locais'],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Seleção de modelo de IA por tipo de tarefa — Guia de otimização de custos',
        description: 'Qual modelo de IA usar para cada tipo de tarefa para minimizar o custo de API sem sacrificar a qualidade da saída, a partir de 2026.',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Classificação simples ou tarefas de sim/não',
            description: 'Use GPT-5.6 mini, Claude Haiku 4.5 ou Gemini Flash — 33× mais barato que o GPT-5.6 com precisão equivalente em classificação simples.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Perguntas e respostas factuais curtas',
            description: 'Use GPT-5.6 mini ou Claude Haiku 4.5 — 10–33× mais barato que os modelos de fronteira. Adequado para tarefas de consulta, perguntas de resposta única e extração de entidades.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Análise complexa ou geração de código',
            description: 'Use GPT-5.6 ou Claude Opus 4.8 — capacidade de fronteira é necessária para raciocínio em múltiplas etapas, depuração e síntese técnica.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Escrita criativa longa',
            description: 'Use Claude Opus 4.8 ou GPT-5.6 — ambos se destacam em qualidade narrativa sustentada e consistência de estilo em saídas longas.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Fluxos de trabalho privados ou automatizados de alto volume',
            description: 'Use um modelo local via Ollama ou LM Studio — custo de API por token zero. Requer investimento em VRAM; ideal para tarefas em que qualidade "boa o suficiente" é aceitável.',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html',
      gammaDescription: 'O deck abaixo cobre: preços de tokens, limites de taxa, seleção de modelos e estratégias de redução de custos. Baixe o PDF como cartão de referência de economia de tokens de IA.',
      sections: {
        definition: {
          title: 'O que é um token?',
          content: [
            '**Um token é a menor unidade de texto que um modelo de IA processa — aproximadamente 3–4 caracteres ou ¾ de uma palavra em inglês.** Em texto inglês, "ChatGPT" conta como 2 tokens, e "Hello, how are you?" são aproximadamente 5–6 tokens. Outros idiomas tokenizam com menos eficiência — a mesma frase em alemão ou japonês pode consumir 20–40% mais tokens. Você é cobrado por cada token do seu prompt (entrada) e por cada token que o modelo produz.',
            'Os modelos não "pensam" em palavras ou caracteres. Internamente, convertem seu texto em IDs de token e os processam numericamente.',
            'Em uma frase: um token é a menor unidade de texto que um modelo de IA processa — aproximadamente 3–4 caracteres ou ¾ de uma palavra em inglês — e você é cobrado por cada token de entrada e cada token de saída.',
          ],
        },
        tldr: {
          title: 'Principais conclusões',
          isTldr: true,
          items: [
            'Tokens são a unidade de custo e processamento da IA. Aproximadamente 3–4 caracteres = 1 token em inglês; outros idiomas requerem mais tokens.',
            'Você paga separadamente por tokens de entrada e de saída — tokens de saída geralmente custam 2–5× mais.',
            'A contagem de tokens inclui system prompts, o histórico completo da conversa, arquivos anexados e imagens — não apenas sua última mensagem.',
            'Limites de taxa existem para evitar abusos e garantir alocação justa de recursos.',
            'Usar o modelo correto para a tarefa reduz o custo em 10–50×.',
            'LLMs locais via Ollama ou LM Studio têm custo zero de API por token, mas requerem investimento em VRAM.',
          ],
        },
        tokenCounting: {
          title: 'Como funciona a contagem de tokens na prática',
          content: '**Cada elemento da sua chamada de API — system prompt, histórico da conversa, nova mensagem, arquivos e a própria saída do modelo — consome tokens da sua cota.**',
          items: [
            '**System prompt:** Contado uma vez por mensagem. Um system prompt de 200 palavras = ~250 tokens em cada chamada à API.',
            '**Histórico completo da conversa:** Incluído em cada solicitação, a menos que seja resumido ou descartado explicitamente.',
            '**Sua mensagem de entrada:** Contada como está.',
            '**Arquivos ou imagens anexados:** Imagens consomem 100–2.000 tokens dependendo do tamanho e resolução.',
            '**Saída do modelo:** A resposta gerada é contada integralmente nas taxas de tokens de saída (geralmente 2–5× mais altas que as taxas de entrada).',
            '**Exemplo prático:** System prompt (300) + Pergunta 1 (150) + Resposta 1 (200) + Pergunta 2 (200) + Resposta 2 (300) + Pergunta 3 (100) = 1.250 tokens. Quando você envia a Pergunta 3, paga por todo o histórico novamente mais a saída da Resposta 3.',
          ],
        },
        pricing: {
          title: 'Quanto custam GPT-5.6, Claude e Gemini por milhão de tokens em 2026?',
          content: [
            'Os preços variam drasticamente com base na capacidade do modelo. Todos os valores abaixo são preços públicos de abril de 2026.',
            'Preços a partir de abril de 2026. Verifique as taxas atuais: [Preços OpenAI](https://openai.com/pricing) · [Preços Anthropic](https://www.anthropic.com/api) · [Preços Google](https://ai.google.dev/pricing)',
          ],
          columns: ['Modelo', 'Entrada (por 1M tokens)', 'Saída (por 1M tokens)'],
          rows: [
            { 'Modelo': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'Entrada (por 1M tokens)': '$5,00', 'Saída (por 1M tokens)': '$15,00' },
            { 'Modelo': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Entrada (por 1M tokens)': '$3,00', 'Saída (por 1M tokens)': '$15,00' },
            { 'Modelo': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'Entrada (por 1M tokens)': '$3,50', 'Saída (por 1M tokens)': '$10,50' },
            { 'Modelo': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'Entrada (por 1M tokens)': '$0,15', 'Saída (por 1M tokens)': '$0,60' },
            { 'Modelo': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'Entrada (por 1M tokens)': '$0,25', 'Saída (por 1M tokens)': '$1,25' },
            { 'Modelo': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'Entrada (por 1M tokens)': '$0,075', 'Saída (por 1M tokens)': '$0,30' },
          ],
          tableFormat: true,
        },
        rateLimits: {
          title: 'O que são limites de taxa — e por que existem?',
          content: '**Limites de taxa são restrições sobre quantas solicitações você pode fazer por minuto (RPM), quantos tokens pode processar por minuto (TPM), ou quantos tokens por dia (TPD).** Os provedores impõem limites para evitar abusos, garantir alocação justa de recursos entre usuários e criar faixas de preço.',
          items: [
            '**Solicitações por minuto (RPM):** O número de chamadas de API que você pode fazer em uma janela de 60 segundos.',
            '**Tokens por minuto (TPM):** O rendimento total de tokens. Um único prompt grande pode consumir toda a sua cota de TPM em segundos.',
            '**Limites típicos:** Plano gratuito: 3–15 RPM, 40k–100k TPM. Plano pago nível 1: 500 RPM, 200k–500k TPM. Empresarial: 3.000+ RPM, milhões de TPM.',
            '**Estratégias alternativas:** Agrupar tarefas pequenas em solicitações maiores, adicionar atrasos entre solicitações ou fazer upgrade para uma conta de nível superior.',
          ],
        },
        promptDesign: {
          title: 'Como o design do prompt controla os custos',
          content: [
            '**Cada token desnecessário no seu prompt desperdiça dinheiro — e os custos acumulam mais rápido porque todo o seu prompt é reinserido em cada chamada de API em uma conversa.** Reduzir um system prompt de 500 tokens para 300 tokens economiza $0,001 por chamada, mas em 1.000 chamadas por dia, isso é $1/dia ou $365/ano.',
          ],
          items: [
            '**Corte o contexto agressivamente:** Não repita o que o modelo já sabe.',
            '**Use restrições explícitas de comprimento:** "Responda em 3 tópicos" ou "Máximo de 100 palavras" força a concisão.',
            '**Evite preenchimento em system prompts:** Cada palavra de renchimento custa dinheiro.',
          ],
        },
        howToStart: {
          title: 'Como reduzir custos de API de LLM em 5 passos',
          numberedItems: [
            'Combine o modelo à complexidade da tarefa: use GPT-5.6 mini ou Claude Haiku 4.5 para classificação simples e Q&A — 33× mais barato que modelos frontier',
            'Resuma o histórico da conversa a cada 5 turnos: evita refaturação do histórico completo em cada chamada',
            'Limite o comprimento da saída explicitamente: "Responda em 3 tópicos" ou "Máximo de 100 palavras" evita respostas longas com muitos tokens',
            'Corte os system prompts ao essencial: remova frases de preenchimento; cada palavra redundante é refaturada em cada chamada de API',
            'Teste LLMs locais via Ollama para fluxos de trabalho privados de alto volume: custo zero de API por token',
          ],
        },
        modelSelection: {
          title: 'Escolhendo o modelo certo para a tarefa certa',
          content: '**Nem toda tarefa requer OpenAI GPT-5.6 ou Anthropic Claude Opus.** Classificação simples, Q&A factual e muitas tarefas automatizadas funcionam perfeitamente em modelos mais baratos.',
          columns: ['Tipo de tarefa', 'Modelo recomendado', 'Custo vs GPT-5.6'],
          rows: [
            { 'Tipo de tarefa': 'Classificação simples / Sim-Não', 'Modelo recomendado': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude) ou [Gemini Flash](https://gemini.google.com)', 'Custo vs GPT-5.6': '33× mais barato' },
            { 'Tipo de tarefa': 'Q&A factual curto', 'Modelo recomendado': 'GPT-5.6 mini ou Claude Haiku 4.5', 'Custo vs GPT-5.6': '10–33× mais barato' },
            { 'Tipo de tarefa': 'Análise complexa ou código', 'Modelo recomendado': '[GPT-5.6](https://openai.com/chatgpt) ou [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Custo vs GPT-5.6': 'referência' },
            { 'Tipo de tarefa': 'Escrita criativa longa', 'Modelo recomendado': 'Claude Opus 4.8 ou GPT-5.6', 'Custo vs GPT-5.6': 'referência' },
            { 'Tipo de tarefa': 'Fluxos de trabalho privados de alto volume', 'Modelo recomendado': 'Modelo local via [Ollama](https://ollama.com/library/llama3.3)', 'Custo vs GPT-5.6': 'custo de API zero' },
          ],
          tableFormat: true,
        },
        localLLMs: {
          title: 'LLMs Locais — Opção de Custo Zero',
          content: '**Modelos locais via Ollama ou LM Studio têm custo zero de API por token — você paga apenas pelo hardware (VRAM e eletricidade).** Isso os torna ideais para fluxos de trabalho de alto volume, aplicações sensíveis à privacidade e pipelines com custo crítico. Para equipes brasileiras que processam dados pessoais de acordo com a LGPD, a inferência local elimina transferências de dados para APIs externas.',
          items: [
            '**Custos de hardware:** Modelos Ollama como LLaMA 3.1 7B requerem ~8 GB de VRAM, modelos 13B precisam de ~16 GB, modelos 70B precisam de 40 GB+.',
            '**Trade-off de capacidade:** Modelos locais são excelentes em classificação, resumo e tarefas repetitivas. Têm dificuldades com raciocínio de múltiplos passos comparados ao GPT-5.6 ou Claude Opus 4.8.',
            '**Trade-off de latência:** Modelos cloud respondem em 500ms–2s. Modelos locais em hardware de consumo: 2–10s dependendo do tamanho do modelo.',
            '**Quando usar local:** Automação de alto volume (1.000+ chamadas/dia), dados sensíveis segundo a LGPD/ANPD, ou fluxos de trabalho com custo crítico.',
          ],
        },
        regionalContext: {
          title: 'Contexto Regional',
          content: [
            '**UE / GDPR** Para organizações da UE que processam dados pessoais por meio de APIs de IA, os custos de tokens incluem um custo de conformidade não visível nas tabelas de preços: cada token enviado a uma API na nuvem é um dado pessoal processado por terceiros sob o Artigo 28 do GDPR, exigindo um Acordo de Processamento de Dados e um mecanismo de transferência sob o Artigo 46 para provedores fora da UE.',
            'LLMs locais via Ollama eliminam isso completamente. Para equipes da UE que processam dados de clientes, tickets de suporte ou documentos internos: o custo real de uma chamada de API na nuvem inclui a sobrecarga de conformidade da transferência externa de dados. Em escala, isso pode tornar a inferência local economicamente competitiva mesmo considerando o investimento em hardware.',
            'Organizações alemãs sob as diretrizes BSI IT-Grundschutz devem documentar custos de processamento de IA e fluxos de dados — logs de tokens de APIs na nuvem atendem a esse requisito se mantidos com controles de acesso adequados.',
            '**Japão (METI)** O texto em japonês requer 20–40% mais tokens do que o texto equivalente em inglês devido à ineficiência do tokenizador em escritas CJK. Um documento japonês de 1.000 palavras custa aproximadamente $0,007 no GPT-5.6 contra $0,005 para o mesmo conteúdo em inglês. Para fluxos de trabalho de IA em japonês, os modelos Qwen3 via Ollama são significativamente mais eficientes em tokens — a tokenização nativa CJK reduz a contagem de tokens em japonês em 30–40%, reduzindo diretamente o custo por chamada.',
            '**China** Sob a Lei de Segurança de Dados da China (数据安全法), o envio de dados empresariais para APIs de IA na nuvem estrangeiras requer uma revisão de conformidade de localização de dados. Para equipes empresariais chinesas, a inferência local via Qwen3 (Alibaba) elimina simultaneamente o custo de transferência de dados transfronteiriça e o risco de conformidade. Com 1.000+ chamadas de API por dia, o custo de amortização de hardware de um servidor de inferência local costuma ficar abaixo das tarifas de API em 6–12 meses. Para empresas brasileiras sujeitas à LGPD, a mesma lógica se aplica: a inferência local elimina a necessidade de transferência internacional de dados pessoais e simplifica a conformidade com a ANPD.',
          ],
        },
        promptquorumHelps: {
          title: 'Como o PromptQuorum ajuda você a gerenciar custos de tokens',
          content: [
            '**O PromptQuorum usa dois LLMs: um Backend LLM e um Frontend LLM (o modelo escolhido que responde sua pergunta).** O Backend LLM otimiza seu prompt e executa análise de consenso Quorum em vários modelos Frontend. Diferente das interfaces de chat de modelo único, o PromptQuorum torna o uso de tokens visível e acionável.',
          ],
        },
        recipes: {
          title: 'Receitas de Custo de Tokens',
          content: 'Use estes templates como pontos de partida para otimizar custos em fluxos de trabalho específicos.',
          items: [
            '**"Consulta rápida / tarefa Sim-Não":** Use GPT-5.6 mini ou Haiku. System prompt mínimo (≤50 tokens). Sem histórico de conversa. Limite a saída a 1–2 frases. Custo total por tarefa: ~$0,00001–0,0001.',
            '**"Tarefa longa de pesquisa (5–10 turnos)":** Use Claude Opus 4.8. Após cada 5 turnos, resuma a conversa e substitua o histórico por um resumo (reduz tokens em 70%).',
            '**"Pipeline automatizado / processamento em lote":** Use GPT-5.6 mini para filtragem ou classificação (33× mais barato). Escale para GPT-5.6 apenas para síntese final em casos limítrofes.',
          ],
        },
        mistakes: {
          title: 'Erros Comuns',
          content: 'Evite estes padrões que desperdiçam tokens.',
          items: [
            '**Enviar histórico completo da conversa em cada chamada:** Solução: Resuma a cada 5 turnos ou use cache de prompt se a API suportar.',
            '**Usar modelo de alta capacidade para tarefas simples:** Não use GPT-5.6 para "extraia a data deste e-mail". Use GPT-5.6 mini ou Haiku. Diferença de custo: 33× nesta tarefa.',
            '**Não limitar o comprimento da saída:** Um prompt vago pode retornar 500 tokens quando "resuma em 50 palavras" retorna 60 tokens.',
            '**Repetir system prompts longos em cada chamada:** Use templates de system prompt ou cache em nível de solicitação.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas Frequentes',
          faqs: [
            {
              q: 'O que é um token em IA?',
              a: 'Um token é a menor unidade de texto que um modelo de IA processa — aproximadamente 3–4 caracteres ou ¾ de uma palavra em inglês. Você é cobrado por cada token de entrada e cada token de saída, com tokens de saída geralmente custando 2–5× mais.',
            },
            {
              q: 'Quanto custa o GPT-5.6 por token?',
              a: 'A partir de abril de 2026: GPT-5.6 custa $5,00 por 1M tokens de entrada e $15,00 por 1M tokens de saída. GPT-5.6 mini custa $0,15 por 1M de entrada e $0,60 por 1M de saída — 33× mais barato para tarefas que não requerem capacidade completa do GPT-5.6.',
            },
            {
              q: 'Como funcionam os limites de taxa?',
              a: 'Limites de taxa restringem solicitações por minuto (RPM) e tokens por minuto (TPM). Plano gratuito: 3–15 RPM, 40k–100k TPM. Plano pago: 500 RPM, 200k–500k TPM. Empresarial: 3.000+ RPM.',
            },
            {
              q: 'Quantos tokens tem um artigo ou relatório típico?',
              a: 'Um artigo de 1.000 palavras ≈ 1.200–1.500 tokens. Um PDF de 10 páginas ≈ 4.000–6.000 tokens. Uma única imagem de alta resolução ≈ 500–2.000 tokens, dependendo da resolução e densidade de conteúdo.',
            },
            {
              q: 'Por que minha fatura de API é maior do que o esperado, mesmo com prompts curtos?',
              a: 'Três causas comuns: (1) Você está enviando o histórico completo da conversa em cada chamada — resuma após 5 turnos. (2) Seu system prompt é longo — corte ao essencial. (3) Você está usando um modelo poderoso para tarefas simples — mude para GPT-5.6 mini ou Haiku para classificação ou Q&A curto.',
            },
            {
              q: 'Um system prompt mais longo sempre significa uma saída melhor?',
              a: 'Não. Um system prompt de 100 tokens bem elaborado frequentemente supera um prompt prolixo de 500 tokens. Qualidade vence quantidade. Especificidade vence prolixidade.',
            },
            {
              q: 'Quando devo usar um LLM local em vez de uma API cloud?',
              a: 'Use LLMs locais para: automação de alto volume (1.000+ chamadas/dia), dados sensíveis segundo a LGPD onde nenhum dado pessoal deve sair da sua infraestrutura, ou pipelines com custo crítico. Use APIs cloud para aplicações sensíveis à latência ou tarefas de raciocínio complexo.',
            },
            {
              q: 'Como posso reduzir meus custos de tokens de API de IA?',
              a: 'Sete estratégias: corte os system prompts, limite o comprimento da saída, resuma o histórico da conversa a cada 5 turnos, use modelos mais baratos para tarefas simples, evite enviar o histórico completo da conversa, reduza a resolução das imagens antes do upload, e agrupe chamadas de teste em vez de executá-las manualmente.',
            },
            {
              q: 'Quantos tokens um prompt de IA típico usa?',
              a: 'Um prompt típico usa 150–500 tokens dependendo da complexidade. Uma pergunta simples (5–20 tokens), um parágrafo médio (50–150 tokens), um prompt de pesquisa completo com exemplos (200–600 tokens). Os tokens por prompt variam de acordo com o idioma e a complexidade.',
            },
            {
              q: 'O que significa quando um prompt tem 3.000 tokens?',
              a: 'Um prompt de 3.000 tokens equivale aproximadamente a um artigo de 2.000 palavras ou mais de 10 páginas de texto. Isso indica um system prompt longo, histórico completo de conversa, ou contexto de documento grande. Para eficiência, considere resumir o histórico da conversa ou cortar contexto desnecessário.',
            },
            {
              q: 'Quanto custa cada prompt de IA em diferentes modelos?',
              a: 'Os custos variam por modelo: GPT-5.6 mini = ~$0,00005–0,0001 por prompt. GPT-5.6 = ~$0,001–0,01. Claude Haiku = ~$0,00003 por prompt. Claude Opus = ~$0,005–0,02. Gemini Flash = ~$0,00002. Os custos dependem do comprimento do prompt e da saída.',
            },
            {
              q: 'Como os tokens de um prompt de IA são calculados?',
              a: 'Os tokens são calculados dividindo o texto em unidades de 3–4 caracteres (aproximadamente ¾ de palavras em inglês). System prompts, histórico de conversa, imagens, arquivos anexados e a saída contam. A maioria dos provedores de API mostra a contagem exata de tokens nas respostas. Prompts mais curtos e saída limitada reduzem o uso de tokens.',
            },
            {
              q: 'Quantos tokens tem um prompt de 1.000 palavras?',
              a: 'Um prompt de 1.000 palavras é aproximadamente 1.200–1.500 tokens em inglês. Outros idiomas tokenizam com menos eficiência e podem exigir 20–40% mais tokens. A contagem de tokens depende da escolha das palavras e do comprimento médio das palavras no idioma usado.',
            },
            {
              q: 'Os limites de tokens se baseiam em um único prompt ou na conversa inteira?',
              a: 'Os limites de tokens se aplicam a todo o histórico da conversa, incluindo todos os system prompts, mensagens anteriores, documentos recuperados e o prompt atual. Os limites de taxa (tokens por minuto) se acumulam em todas as suas chamadas de API nesse período, não apenas em um prompt.',
            },
            {
              q: 'Quantos prompts você consegue obter de 1 milhão de tokens?',
              a: 'Com 1 milhão de tokens: 2.000–6.667 prompts se cada prompt tiver em média 150–500 tokens. Prompts do GPT-5.6 mini (~300 tokens) = ~3.333 prompts. Prompts do GPT-5.6 (~500 tokens) = ~2.000 prompts. A contagem real depende do tamanho do prompt e do comprimento da saída.',
            },
            {
              q: 'A otimização de prompts reduz significativamente os custos de API?',
              a: 'Sim. Reduzir um system prompt de 500 tokens para 300 tokens economiza ~$0,001 por chamada de API. A 1.000 chamadas/dia, isso é $365/ano economizados. Limitar o comprimento da saída e resumir o histórico da conversa a cada 5 turnos reduz os custos em 30–50%. A seleção de modelo é a maior alavanca — GPT-5.6 mini custa 33× menos que GPT-5.6.',
            },
          ],
        },
        relatedReading: {
          title: 'Leituras Relacionadas',
          items: [
            '[System Prompt vs User Prompt](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)',
            '[Como instalar o Ollama](/local-llms/how-to-install-ollama)',
            '[Melhor LLMs Locais 2026](/local-llms/best-local-llms-2026)',
          ],
        },
        sources: {
          title: 'Fontes e Leituras Adicionais',
          items: [
            '[Preços OpenAI](https://openai.com/pricing)',
            '[Preços Anthropic Claude](https://www.anthropic.com/pricing)',
            '[Preços Google Gemini](https://ai.google.dev/pricing)',
          ],
        },
      },
    },
    fr: { theme: 'Fundamentals', title: 'Tokens, Coûts et Limites : L\'économie du prompt engineering', intro: 'Chaque appel API d\'IA est mesuré et facturé en tokens — l\'unité qui contrôle à la fois ce que le modèle peut traiter et combien vous payez. Comprendre les tokens est la fondation d\'un prompt engineering efficace et rentable.', publishDate: '2026-03-22', readTime: '13 min de lecture', primaryTerm: 'Tokens LLM',
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Sélection du modèle d\'IA par type de tâche — Guide d\'optimisation des coûts',
        description: 'Quel modèle d\'IA utiliser pour chaque type de tâche afin de minimiser le coût de l\'API sans sacrifier la qualité de sortie, à partir de 2026.',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Classification simple ou tâches oui/non',
            description: 'Utilisez GPT-5.6 mini, Claude Haiku 4.5 ou Gemini Flash — 33× moins cher que GPT-5.6 avec une précision équivalente sur une classification simple.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Questions-réponses factuelles courtes',
            description: 'Utilisez GPT-5.6 mini ou Claude Haiku 4.5 — 10 à 33× moins cher que les modèles de pointe. Adapté aux tâches de recherche, questions à réponse unique et extraction d\'entités.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Analyse complexe ou génération de code',
            description: 'Utilisez GPT-5.6 ou Claude Opus 4.8 — une capacité de pointe est nécessaire pour le raisonnement multi-étapes, le débogage et la synthèse technique.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Écriture créative longue',
            description: 'Utilisez Claude Opus 4.8 ou GPT-5.6 — les deux excellent en qualité narrative soutenue et cohérence de style sur des sorties longues.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Flux de travail privés ou automatisés à fort volume',
            description: 'Utilisez un modèle local via Ollama ou LM Studio — coût API par token nul. Nécessite un investissement en VRAM ; idéal pour les tâches où une qualité "suffisamment bonne" est acceptable.',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html', gammaDescription: 'Le deck couvre : tarification des tokens, limites de débit, sélection de modèle, réduction des coûts. Téléchargez le PDF comme référence sur les tokens IA.', sections: { definition: { title: 'Qu\'est-ce qu\'un token ?', content: [ '**Un token est la plus petite unité de texte qu\'un modèle d\'IA traite — environ 3–4 caractères ou ¾ d\'un mot anglais.** En anglais, « ChatGPT » compte comme 2 tokens, et « Hello, how are you? » représente environ 5–6 tokens. Les autres langues se tokenisent moins efficacement — la même phrase en allemand ou en japonais peut consommer 20–40 % de tokens supplémentaires. Vous êtes facturé pour chaque token dans votre prompt (entrée) et chaque token que le modèle produit. Comprendre les tokens est fondamental pour [ce qu\'est le prompt engineering](/prompt-engineering/what-is-prompt-engineering) — la pratique de structurer vos entrées pour obtenir des sorties fiables.', 'Les modèles ne « pensent » pas en mots ou en caractères. En interne, ils convertissent votre texte en ID de tokens et les traitent numériquement. C\'est pourquoi la tokenisation est importante : un changement de caractère unique peut parfois affecter la limite de token, et un prompt mal organisé avec des mots redondants peut gaspiller des centaines de tokens sans améliorer la qualité de la sortie.', 'En une phrase : un token est la plus petite unité de texte qu\'un modèle d\'IA traite — environ 3–4 caractères ou ¾ d\'un mot anglais — et vous êtes facturé pour chaque token entrant et chaque token sortant.' ] }, tldr: { title: 'Points clés', isTldr: true, items: [ 'Les tokens sont l\'unité de coût et de traitement de l\'IA. Environ 3–4 caractères = 1 token en anglais ; les autres langues nécessitent plus de tokens.', 'Vous payez séparément pour les tokens d\'entrée et de sortie — les tokens de sortie coûtent généralement 2–5× plus. Les longues sorties verbales sont l\'endroit où les coûts explosent.', 'Le comptage des tokens inclut les prompts système, l\'historique complet des conversations, les fichiers joints et les images — pas seulement votre dernier message.', 'Les limites de débit (requêtes par minute, tokens par minute) existent pour prévenir les abus et assurer une allocation équitable des ressources. Les forfaits gratuits ont des limites strictes ; les forfaits payants sont beaucoup plus élevés.', 'Utiliser le bon modèle pour la tâche réduit les coûts de 10–50×. GPT-5.6 mini ou Claude Haiku 4.5 peuvent gérer des tâches qui ne nécessitent pas GPT-5.6 ou Claude Opus 4.8.', 'Les LLM locaux via Ollama ou LM Studio n\'ont pas de coûts API par token, mais nécessitent un investissement VRAM et ont des capacités inférieures aux modèles frontière.' ] }, tokenCounting: { title: 'Comment fonctionne le comptage des tokens en pratique', content: '**Chaque élément de votre appel API — prompt système, historique de conversation, nouveau message, fichiers et la sortie du modèle lui-même — consomme des tokens de votre quota.** C\'est pourquoi une conversation qui a commencé par un petit message peut soudainement devenir chère après cinq échanges. Vous payez pour tout, accumulé. Comprendre la distinction entre [prompt système et prompt utilisateur](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) est critique car les deux sont facturés à chaque appel.', items: [ '**Prompt système :** Comptabilisé une fois par message. Un prompt système de 200 mots = ~250 tokens à chaque appel API.', '**Historique complet des conversations :** Inclus à chaque demande sauf s\'il est explicitement résumé ou supprimé. Une conversation à 10 tours avec 500 tokens par tour = 5 000 tokens comptabilisés à nouveau au tour 11.', '**Votre message d\'entrée :** Comptabilisé tel quel.', '**Fichiers ou images joints :** Les images consomment 100–2 000 tokens selon la taille et la résolution. Les gros PDF peuvent en consommer des milliers.', '**Sortie du modèle :** La réponse générée est comptabilisée complètement aux taux de tokens de sortie (généralement 2–5× plus qu\'aux taux d\'entrée).', '**Exemple travaillé :** Une conversation de recherche à 3 tours : Prompt système (300 tokens) + Question utilisateur 1 (150 tokens) + Réponse modèle 1 (200 tokens) + Question utilisateur 2 (200 tokens) + Réponse modèle 2 (300 tokens) + Question utilisateur 3 (100 tokens) = **1 250 tokens jusqu\'à présent**. Lorsque vous envoyez la question 3, vous payez à nouveau pour l\'historique complet (1 250 tokens) plus la sortie de la réponse 3. Un seul suivi « court » peut coûter autant que toute la conversation précédente.' ] }, pricing: { title: 'Combien coûtent GPT-5.6, Claude et Gemini par million de tokens en 2026 ?', content: [ 'Les prix varient considérablement en fonction de la capacité du modèle. Tous les chiffres ci-dessous sont des tarifs publics à partir de mars 2026. Notez que les tokens de sortie coûtent généralement 2–5× plus que les tokens d\'entrée — c\'est où les coûts s\'accumulent le plus rapidement. Le bon choix de modèle est le plus grand levier de coûts — voir [comment choisir entre GPT-5.6, Claude et Gemini](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) pour des comparaisons détaillées.', 'Tarifs à partir de mars 2026. Vérifiez les tarifs actuels : [Tarification OpenAI](https://openai.com/pricing) · [Tarification Anthropic](https://www.anthropic.com/api) · [Tarification Google](https://ai.google.dev/pricing)' ], columns: [ 'Modèle', 'Entrée (par 1M de tokens)', 'Sortie (par 1M de tokens)' ], rows: [ { 'Modèle': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', 'Entrée (par 1M de tokens)': '$5.00', 'Sortie (par 1M de tokens)': '$15.00' }, { 'Modèle': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Entrée (par 1M de tokens)': '$3.00', 'Sortie (par 1M de tokens)': '$15.00' }, { 'Modèle': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', 'Entrée (par 1M de tokens)': '$3.50', 'Sortie (par 1M de tokens)': '$10.50' }, { 'Modèle': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', 'Entrée (par 1M de tokens)': '$0.15', 'Sortie (par 1M de tokens)': '$0.60' }, { 'Modèle': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', 'Entrée (par 1M de tokens)': '$0.25', 'Sortie (par 1M de tokens)': '$1.25' }, { 'Modèle': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', 'Entrée (par 1M de tokens)': '$0.075', 'Sortie (par 1M de tokens)': '$0.30' } ], tableFormat: true }, rateLimits: { title: 'Que sont les limites de débit — et pourquoi existent-elles ?', content: '**Les limites de débit sont des plafonds sur le nombre de requêtes que vous pouvez faire par minute (RPM), le nombre de tokens que vous pouvez traiter par minute (TPM), ou le nombre de tokens par jour (TPD).** Les prestataires imposent des limites pour prévenir les abus, assurer une allocation équitable des ressources entre les utilisateurs et créer des niveaux de tarification. Les utilisateurs du forfait gratuit font face aux limites les plus strictes ; les forfaits payants débloquent un débit beaucoup plus élevé.', items: [ '**Requêtes par minute (RPM) :** Le nombre d\'appels API que vous pouvez effectuer dans une fenêtre de 60 secondes. Si vous dépassez cette limite, les requêtes sont mises en file d\'attente ou rejetées.', '**Tokens par minute (TPM) :** Le débit total des tokens. Un seul grand prompt peut consommer votre quota TPM entier en quelques secondes.', '**Scénarios courants où vous atteignez les limites :** Pipelines automatisés effectuant des appels séquentiels rapides (50+ par seconde), gros travaux de traitement par lots, ou utilisateurs du forfait gratuit dans des situations de pic.', '**Limites typiques :** Gratuit : 3–15 RPM, 40k–100k TPM. Forfait payant 1 : 500 RPM, 200k–500k TPM. Entreprise : 3 000+ RPM, des millions de TPM.', '**Stratégies de contournement :** Regrouper les petites tâches en requêtes plus grandes (moins d\'appels API), ajouter des délais entre les requêtes, ou passer à un compte de niveau supérieur.' ] }, promptDesign: { title: 'Comment réduire mes coûts API LLM de 30–50× ?', content: [ '**Testé dans PromptQuorum — 20 prompts de synthèse de recherche identiques exécutés sur GPT-5.6, Claude Opus 4.8 et Gemini 3.1 Pro avec différents niveaux de verbosité du prompt système :** Avec un prompt système de 500 tokens, la sortie moyenne était 450 tokens avec un coût moyen de $0.032 par appel. Avec les mêmes instructions dans un prompt élaguée de 200 tokens, la sortie moyenne était 460 tokens à $0.025 par appel — une réduction de coûts de 18 % avec une qualité de sortie identique. Cela s\'aligne avec [comment prompter pour la vitesse](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — l\'efficacité réduit à la fois la latence et les coûts.', '**Chaque token inutile dans votre prompt gaspille de l\'argent — et les coûts s\'accumulent plus rapidement parce que votre prompt entier est réinclus à chaque appel API dans une conversation.** Réduire un prompt système de 500 tokens à 300 tokens économise $0.001 par appel, mais à 1 000 appels par jour, c\'est $1/jour ou $365/an.' ], items: [ '**Élaguez le contexte agressivement :** Ne répétez pas ce que le modèle sait déjà. Au lieu de « L\'utilisateur a posé la question X. Je lui ai dit Y. Maintenant il pose la question Z », incluez simplement Z.', '**Utilisez des contraintes de longueur explicites :** « Répondez en 3 points » ou « Maximum 100 mots » force la brièveté et prévient les sorties verbales (qui coûtent plus cher).', '**Évitez le rembourrage dans les prompts système :** Chaque mot de remplissage coûte de l\'argent. « Vous êtes un assistant IA utile qui aide les utilisateurs » fait 10 tokens. « Vous êtes un assistant IA utile » fait 6 tokens. Les deux transmettent le même sens.', '**Exemple : Prompt système gonflé vs élagué :**', '[Mauvais prompt] « Vous êtes un assistant IA utile ayant des connaissances étendues dans de nombreux domaines. Vous aidez les utilisateurs en fournissant des réponses détaillées et complètes à leurs questions. Soyez toujours complet et expliquez votre raisonnement étape par étape. Évitez d\'être concis — les utilisateurs apprécient les explications complètes. »', '[Bon prompt] « Vous êtes un assistant IA utile. Fournissez des réponses précises et détaillées. Expliquez votre raisonnement. »', 'Différence de tokens : Mauvais = 55 tokens, Bon = 13 tokens. À 100 appels par jour : 42 × 100 × 30 jours × ($0.005 / 1M tokens d\'entrée) ≈ $0.63/mois économisés par un seul prompt élagué.' ] }, howToStart: { title: 'Comment réduire les coûts API LLM en 5 étapes', numberedItems: [ 'Faire correspondre le modèle à la complexité de la tâche : utilisez GPT-5.6 mini ou Claude Haiku 4.5 pour la classification simple et les Q&A — 33× moins cher que les modèles frontière', 'Résumez l\'historique des conversations tous les 5 tours : évite que l\'historique complet soit refacturisé à chaque appel (une technique alignée avec [le prompt engineering en chaîne de pensée](/prompt-engineering/chain-of-thought-prompting) — structurez votre raisonnement d\'avance)', 'Limitez la longueur de sortie explicitement : « Répondez en 3 points » ou « Maximum 100 mots » prévient les réponses verbales chargées en tokens', 'Élaguer les prompts système à l\'essentiel : supprimer les phrases de remplissage ; chaque mot redondant est refacturisé à chaque appel API', 'Testez les LLM locaux via Ollama pour les workflows privés à haut volume : coût API nul par token au prix de la capacité du modèle frontière' ] }, modelSelection: { title: 'Choisir le bon modèle pour la bonne tâche', content: '**Chaque tâche ne nécessite pas OpenAI GPT-5.6 ou Anthropic Claude Opus.** La classification simple, les Q&A factuels et de nombreuses tâches automatisées fonctionnent parfaitement sur des modèles moins chers — et la différence de coûts est dramatique.', columns: [ 'Type de tâche', 'Modèle recommandé', 'Coûts vs GPT-5.6' ], rows: [ { 'Type de tâche': 'Classification simple / Oui-Non', 'Modèle recommandé': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude) ou [Gemini Flash](https://gemini.google.com)', 'Coûts vs GPT-5.6': '33× moins cher' }, { 'Type de tâche': 'Courte Q&A factuelle', 'Modèle recommandé': 'GPT-5.6 mini ou Claude Haiku 4.5', 'Coûts vs GPT-5.6': '10–33× moins cher' }, { 'Type de tâche': 'Analyse complexe ou code', 'Modèle recommandé': '[GPT-5.6](https://openai.com/chatgpt) ou [Claude Opus 4.8](https://www.anthropic.com/claude)', 'Coûts vs GPT-5.6': 'Baseline' }, { 'Type de tâche': 'Écriture créative longue', 'Modèle recommandé': 'Claude Opus 4.8 ou GPT-5.6', 'Coûts vs GPT-5.6': 'Baseline' }, { 'Type de tâche': 'Workflows privés à haut volume', 'Modèle recommandé': 'Modèle local via [Ollama](https://ollama.com/library/llama3.3)', 'Coûts vs GPT-5.6': 'Coûts API nuls' } ], tableFormat: true }, localLLMs: { title: 'Quels sont les compromis entre les LLM locaux (Ollama) et les API cloud ?', content: '**Les modèles locaux via Ollama ou LM Studio n\'ont pas de coûts API par token — vous payez uniquement pour le matériel (VRAM et électricité).** Cela les rend idéaux pour les workflows à haut volume, les applications sensibles à la confidentialité et les pipelines critiques. Les compromis sont la capacité (les modèles locaux restent à la traîne des modèles frontière) et la latence (l\'exécution sur du VRAM grand public est plus lente). Comprendre les [fenêtres de contexte](/prompt-engineering/context-windows-explained-why-ai-forgets) est essentiel lors de la planification des déploiements locaux — votre VRAM limite la taille de la fenêtre de contexte que vous pouvez supporter.', items: [ '**Coûts de matériel :** Les modèles Ollama comme LLaMA 3.1 7B nécessitent ~8GB VRAM, les modèles 13B ont besoin de ~16GB, les modèles 70B ont besoin de 40GB+. La mémoire GPU est le facteur limitant.', '**Compromis de capacité :** Les modèles locaux sont excellents pour la classification, le résumé et les tâches répétitives. Ils luttent avec le raisonnement multi-étapes, la génération de code et l\'écriture créative comparés à GPT-5.6 ou Claude Opus 4.8.', '**Compromis de latence :** Les modèles cloud répondent en 500ms–2s. Les modèles locaux sur du matériel grand public : 2–10s selon la taille du modèle et les spécifications du système.', '**Quand utiliser le local :** Automatisation à haut volume (1 000+ appels/jour), données sensibles à la RGPD (les utilisateurs de l\'UE traitant des données personnelles en vertu du RGPD bénéficient du traitement sur appareil sans appels API externes), ou des workflows critiques où la qualité est « suffisante ».', '**Quand utiliser le cloud :** Applications sensibles à la latence, tâches nécessitant du raisonnement, ou analyses ponctuelles où le coût API est négligeable.' ] }, regionalContext: { title: 'Contexte régional', content: [ '**UE / RGPD** Pour les organisations de l\'UE qui traitent des données personnelles via des API d\'IA, les coûts en tokens incluent un coût de conformité invisible dans les tableaux de tarification : chaque token envoyé à une API cloud constitue une donnée personnelle traitée par un tiers en vertu de l\'article 28 du RGPD, nécessitant un accord de traitement des données et un mécanisme de transfert au titre de l\'article 46 pour les fournisseurs hors UE.', 'Les LLM locaux via Ollama éliminent entièrement ce problème. Pour les équipes de l\'UE traitant des données clients, des tickets de support ou des documents internes : le coût réel d\'un appel API cloud inclut la charge de conformité du transfert externe de données. À grande échelle, cela peut rendre l\'inférence locale économiquement compétitive, même en tenant compte de l\'investissement matériel.', 'Les organisations allemandes soumises aux directives BSI IT-Grundschutz doivent documenter les coûts de traitement de l\'IA et les flux de données — les journaux de tokens des API cloud satisfont cette exigence s\'ils sont conservés avec des contrôles d\'accès appropriés.', '**Japon (METI)** Le texte japonais nécessite 20 à 40 % de tokens supplémentaires par rapport au texte anglais équivalent en raison de l\'inefficacité du tokeniseur sur les écritures CJK. Un document japonais de 1 000 mots coûte environ $0.007 sur GPT-5.6 contre $0.005 pour le même contenu en anglais. Pour les flux de travail d\'IA en japonais, les modèles Qwen3 via Ollama sont nettement plus efficaces en tokens — la tokenisation native CJK réduit le nombre de tokens japonais de 30 à 40 %, réduisant directement le coût par appel.', '**Chine** En vertu de la loi chinoise sur la sécurité des données (数据安全法), l\'envoi de données professionnelles à des API d\'IA cloud étrangères nécessite un examen de conformité de localisation des données. Pour les équipes d\'entreprise chinoises, l\'inférence locale via Qwen3 (Alibaba) élimine simultanément le coût de transfert de données transfrontalier et le risque de conformité. À 1 000 appels API ou plus par jour, le coût d\'amortissement matériel d\'un serveur d\'inférence local est généralement inférieur aux frais d\'API en 6 à 12 mois.' ] }, promptquorumHelps: { title: 'Comment PromptQuorum vous aide à gérer les coûts de tokens', content: [ '**PromptQuorum utilise deux LLM : un LLM backend et un LLM frontend (votre modèle choisi qui répond à votre question de prompt).** Le LLM backend optimise votre prompt et exécute une analyse de consensus Quorum sur plusieurs modèles frontend. Contrairement aux interfaces de chat mono-modèle, PromptQuorum rend l\'utilisation des tokens visible et exploitable.', '**Les tokens du LLM backend sont toujours visibles.** La visibilité des tokens frontend dépend de la façon dont vous accédez au modèle :', '- **Interfaces publiques** (Copilot, chat web Claude public) : Tokens frontend NON visibles — seuls les tokens backend s\'affichent.', '- **Modèles locaux** (LM Studio, Ollama) : Tokens frontend SONT visibles — s\'exécute sur votre matériel, PromptQuorum voit l\'utilisation des tokens directement.', '- **API** (OpenAI, Anthropic) : Cela dépend. Avec l\'intégration API directe, les tokens frontend sont visibles. Via un endpoint tiers ou une interface publique, tokens frontend NON visibles.', '**Testé dans PromptQuorum — 20 prompts de synthèse de recherche identiques envoyés à GPT-5.6 et GPT-5.6 mini :** La qualité de sortie correspondait sur 17 des 20 tâches. Différence de coûts : $0.003 par prompt (GPT-5.6) vs $0.00007 par prompt (mini) — une réduction de coûts de 43×. Sur les 3 tâches où GPT-5.6 était supérieur, la complexité impliquait un raisonnement multi-étapes sur des documents.' ] }, recipes: { title: 'Recettes de coûts de tokens — Scénarios courants', content: 'Utilisez ces modèles comme points de départ pour optimiser les coûts dans des workflows spécifiques.', items: [ '**« Recherche rapide / tâche Oui-Non »:** Utilisez GPT-5.6 mini ou Haiku. Prompt système minimaliste (≤50 tokens). Pas d\'historique de conversation. Contraindre la sortie à 1–2 phrases. Coût total par tâche : ~$0.00001–0.0001.', '**« Tâche de recherche longue (5–10 tours) »:** Utilisez Claude Opus 4.8 (excellent sur long contexte). Après tous les 5 tours, résumez la conversation et remplacez l\'historique par un résumé (réduit les tokens de 70 %). Coûts : ~$0.01–0.05 par session de recherche.', '**« Pipeline automatisé / Traitement par lots »:** Utilisez GPT-5.6 mini pour le filtrage ou la classification (33× moins cher). Montez en escalade vers GPT-5.6 uniquement pour la synthèse finale sur les cas limites. Regroupez les prompts similaires pour réutiliser le cache de contexte où l\'API le support.', '**« Workflow sensible à la confidentialité »:** Routez vers Ollama ou LM Studio s\'exécutant localement. Gérez la fenêtre de contexte : 4k–8k tokens pour 8GB VRAM, 16k–32k pour 16GB. Coûts API nuls. Acceptez une qualité légèrement inférieure pour la conformité.', '**« Comparaison de sorties sur les modèles »:** Envoyez un prompt bien structuré à GPT-5.6, Claude Opus 4.8 et Claude Haiku 4.5 simultanément. Comparez qualité + coûts. Choisissez le moins cher qui répond à votre barre de qualité. Coûts de découverte : ~$0.001. Coûts en cours : Économies de 33–43×.' ] }, mistakes: { title: 'Erreurs courantes qui font exploser votre facture de tokens', content: 'Évitez ces modèles de gaspillage de tokens.', items: [ '**Envoyer l\'historique complet de la conversation à chaque appel :** Si une conversation est 5 000 tokens après 10 tours, vous payez 5 000 tokens à nouveau au tour 11 même si seulement 200 tokens sont nouveaux. Solution : Résumer tous les 5 tours ou utiliser le cache de prompts si l\'API le support.', '**Utiliser un modèle hautement capable pour les tâches simples :** N\'utilisez pas GPT-5.6 pour « extraire la date de cet email ». Utilisez GPT-5.6 mini ou Haiku. Différence de coûts : 33× sur cette seule tâche.', '**Ne pas contraindre la longueur de sortie :** Un prompt vague « parlez-moi de X » peut retourner 500 tokens quand « résumé en 50 mots » retourne 60 tokens. Vous payez 8× plus pour la réponse verbale.', '**Répéter les longs prompts système à chaque appel :** Si votre prompt système est 500 tokens et vous faites 100 appels API, c\'est 50 000 tokens gaspillés si vous n\'êtes pas en le réutilisant ou mettant en cache. Utilisez des modèles de prompts système ou le cache au niveau des requêtes.', '**Oublier les tokens d\'image :** Une seule image haute résolution peut consommer 500–2 000 tokens selon la résolution. Redimensionnez les images ou recadrez à la région pertinente avant de télécharger.', '**Exécuter les appels de test manuels au lieu du traitement par lots :** Tester 20 variations de prompt coûte 20× le coût de tokens d\'un appel. Utilisez les API par lot ou la comparaison multi-modèle de PromptQuorum pour tester toutes les variations en une seule opération.', '**Basculer les modèles au milieu d\'une conversation :** Les API cloud (OpenAI, Anthropic) ne transportent pas le contexte de conversation entre les modèles. Redémarrer la conversation sur un modèle différent renvoie tous les messages précédents. Engagez-vous à un modèle par conversation.' ] }, faq: { title: 'Questions fréquemment posées', faqs: [ { q: 'Qu\'est-ce qu\'un token en IA ?', a: 'Un token est la plus petite unité de texte qu\'un modèle d\'IA traite — environ 3–4 caractères ou ¾ d\'un mot anglais. « ChatGPT » compte comme 2 tokens. Vous êtes facturé pour chaque token d\'entrée et chaque token de sortie, les tokens de sortie coûtant généralement 2–5× plus que les tokens d\'entrée.' }, { q: 'Combien coûte GPT-5.6 par token ?', a: 'À partir d\'avril 2026 : GPT-5.6 coûte $5.00 par 1M de tokens d\'entrée et $15.00 par 1M de tokens de sortie. GPT-5.6 mini coûte $0.15 par 1M d\'entrée et $0.60 par 1M de sortie — 33× moins cher pour les tâches qui ne nécessitent pas la pleine capacité de GPT-5.6.' }, { q: 'Comment fonctionnent les limites de débit ?', a: 'Les limites de débit plafonnent les requêtes par minute (RPM) et les tokens par minute (TPM). Forfait gratuit : 3–15 RPM, 40k–100k TPM. Forfait payant : 500 RPM, 200k–500k TPM. Entreprise : 3 000+ RPM. Solutions : regroupez les petites tâches en requêtes plus grandes, ajoutez des délais entre les appels, ou passez à un forfait supérieur.' }, { q: 'Combien de tokens contient un article ou un rapport typique ?', a: 'Un article de 1 000 mots ≈ 1 200–1 500 tokens. Un PDF de 10 pages ≈ 4 000–6 000 tokens. Une seule image haute résolution ≈ 500–2 000 tokens selon la résolution et la densité de contenu.' }, { q: 'Pourquoi ma facture API est-elle plus élevée que prévu, même avec des prompts courts ?', a: 'Trois causes courantes : (1) Vous envoyez l\'historique complet de la conversation à chaque appel — résumez après 5 tours. (2) Votre prompt système est long — élaguer à l\'essentiel. (3) Vous utilisez un modèle hautement capable pour les tâches simples — basculez vers GPT-5.6 mini ou Haiku pour la classification ou le Q&A court.' }, { q: 'Un prompt système plus long signifie-t-il toujours une meilleure sortie ?', a: 'Non. Un prompt système bien conçu de 100 tokens surpasse souvent un prompt verbeux de 500 tokens. La qualité bat la quantité. La spécificité bat la verbosité.' }, { q: 'Quand dois-je utiliser un LLM local plutôt qu\'une API cloud ?', a: 'Utilisez des LLM locaux pour : l\'automatisation à haut volume (1 000+ appels/jour), les données sensibles au RGPD où aucune donnée personnelle ne doit quitter votre infrastructure, ou les pipelines critiques en termes de coûts où la qualité est suffisante. Utilisez des API cloud pour : les applications sensibles à la latence, les tâches de raisonnement complexes, ou les analyses ponctuelles où le coût API est négligeable.' }, { q: 'Comment puis-je réduire mes coûts de tokens API IA ?', a: 'Sept stratégies : élaguer les prompts système, limiter la longueur de sortie, résumer l\'historique des conversations tous les 5 tours, utiliser des modèles moins chers pour les tâches simples, éviter d\'envoyer l\'historique complet des conversations, redimensionner les images avant le téléchargement, et regrouper les appels de test plutôt que de les exécuter manuellement.' }, { q: 'Combien de tokens utilise un prompt IA typique ?', a: 'Un prompt typique utilise 150–500 tokens selon la complexité. Une question simple (5–20 tokens), un paragraphe moyen (50–150 tokens), un prompt de recherche complet avec exemples (200–600 tokens). Les tokens par prompt varient selon la langue et la complexité.' }, { q: 'Que signifie un prompt de 3 000 tokens ?', a: 'Un prompt de 3 000 tokens correspond à peu près à un article de 2 000 mots ou plus de 10 pages de texte. Cela indique un long prompt système, un historique de conversation complet, ou un large contexte documentaire. Pour plus d\'efficacité, envisagez de résumer l\'historique de conversation ou d\'élaguer le contexte inutile.' }, { q: 'Combien coûte chaque prompt IA selon les différents modèles ?', a: 'Les coûts varient selon le modèle : GPT-5.6 mini = ~$0.00005–0.0001 par prompt. GPT-5.6 = ~$0.001–0.01. Claude Haiku = ~$0.00003 par prompt. Claude Opus = ~$0.005–0.02. Gemini Flash = ~$0.00002. Les coûts dépendent de la longueur du prompt et de la sortie.' }, { q: 'Comment les tokens d\'un prompt IA sont-ils calculés ?', a: 'Les tokens sont calculés en découpant le texte en unités de 3–4 caractères (environ ¾ de mots anglais). Les prompts système, l\'historique de conversation, les images, les fichiers joints et la sortie comptent tous. La plupart des fournisseurs d\'API affichent le nombre exact de tokens dans les réponses. Des prompts plus courts et une sortie limitée réduisent l\'utilisation de tokens.' }, { q: 'Combien de tokens contient un prompt de 1 000 mots ?', a: 'Un prompt de 1 000 mots représente environ 1 200–1 500 tokens en anglais. Les autres langues se tokenisent moins efficacement et peuvent nécessiter 20–40 % de tokens supplémentaires. Le nombre de tokens dépend du choix des mots et de la longueur moyenne des mots dans la langue utilisée.' }, { q: 'Les limites de tokens s\'appliquent-elles à un seul prompt ou à toute la conversation ?', a: 'Les limites de tokens s\'appliquent à tout l\'historique de conversation, y compris tous les prompts système, les messages précédents, les documents récupérés et le prompt actuel. Les limites de débit (tokens par minute) s\'accumulent sur tous vos appels API dans cette période, pas seulement sur un prompt.' }, { q: 'Combien de prompts peut-on obtenir avec 1 million de tokens ?', a: 'Avec 1 million de tokens : 2 000–6 667 prompts si chaque prompt fait en moyenne 150–500 tokens. Prompts GPT-5.6 mini (~300 tokens) = ~3 333 prompts. Prompts GPT-5.6 (~500 tokens) = ~2 000 prompts. Le nombre réel dépend de la taille du prompt et de la longueur de sortie.' }, { q: 'L\'optimisation des prompts réduit-elle significativement les coûts API ?', a: 'Oui. Réduire un prompt système de 500 tokens à 300 tokens économise ~$0.001 par appel API. À 1 000 appels/jour, cela représente $365/an économisés. Limiter la longueur de sortie et résumer l\'historique de conversation tous les 5 tours réduit les coûts de 30–50 %. Le choix du modèle est le plus grand levier — GPT-5.6 mini coûte 33× moins cher que GPT-5.6.' } ] }, relatedReading: { title: 'Lecture recommandée', items: [ '[Fundamentals : Réponses d\'IA plus rapides : Comment prompter pour la vitesse](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — l\'efficacité des prompts réduit directement les coûts de tokens', '[Fundamentals : GPT, Claude ou Gemini ? Comment choisir le bon modèle](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — la sélection du modèle est le plus grand levier de coûts', '[Fundamentals : Fenêtres de contexte expliquées : Pourquoi l\'IA oublie](/prompt-engineering/context-windows-explained-why-ai-forgets) — les fenêtres de contexte limitent la quantité d\'historique que vous pouvez inclure avant de frapper les limites de tokens ou de longueur' ] }, sources: { title: 'Sources et lectures supplémentaires', items: [ '[Tarification OpenAI](https://openai.com/pricing)', '[Tarification Claude d\'Anthropic](https://www.anthropic.com/pricing)', '[Tarification Gemini de Google](https://ai.google.dev/pricing)' ] } } as any },
    ja: { theme: 'Fundamentals', title: 'トークン、コスト＆制限：AIプロンプティングの経済学', intro: 'すべてのAI APIコールはトークン（モデルが処理できる内容と支払う金額を制御する単位）で測定および課金されます。トークンを理解することは、効率的で費用対効果の高いプロンプトエンジニアリングの基礎です。', publishDate: '2026-03-22', readTime: '13分で読める', primaryTerm: 'LLMトークン',
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'タスクタイプ別のAIモデル選択 — コスト最適化ガイド',
        description: '出力品質を犠牲にせずにAPIコストを最小化するために、各タスクタイプにどのAIモデルを使用するか（2026年時点）。',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '単純な分類やはい/いいえのタスク',
            description: 'GPT-5.6 mini、Claude Haiku 4.5、またはGemini Flashを使用してください — 単純な分類において同等の精度でGPT-5.6より33倍安価です。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '短い事実に基づくQ&A',
            description: 'GPT-5.6 miniまたはClaude Haiku 4.5を使用してください — フロンティアモデルより10〜33倍安価です。検索タスク、単一回答の質問、エンティティ抽出に適しています。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '複雑な分析やコード生成',
            description: 'GPT-5.6またはClaude Opus 4.8を使用してください — 多段階の推論、デバッグ、技術的統合にはフロンティア能力が必要です。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '長文の創作',
            description: 'Claude Opus 4.8またはGPT-5.6を使用してください — どちらも長い出力にわたる持続的な物語品質とスタイルの一貫性に優れています。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '大量のプライベートまたは自動化されたワークフロー',
            description: 'OllamaやLM Studio経由のローカルモデルを使用してください — トークンあたりのAPIコストはゼロです。VRAMへの投資が必要で、「十分な」品質で許容されるタスクに最適です。',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html', gammaDescription: 'スライドデッキは、トークン料金、レート制限、モデル選択、コスト削減戦略をカバーします。AIトークン経済学リファレンスカードとしてPDFをダウンロード。', sections: { definition: { title: 'トークンとは何ですか?', content: [ '**トークンはAIモデルが処理するテキストの最小単位であり、約3〜4文字または英単語の3/4です。** 英語では、「ChatGPT」は2トークンとカウントされ、「Hello, how are you?」は約5〜6トークンです。他の言語はあまり効率的にトークン化されません。ドイツ語や日本語の同じフレーズは20〜40％多くのトークンを消費する可能性があります。プロンプト（入力）のすべてのトークンと、モデルが出力するすべてのトークンについて課金されます。トークンを理解することは、[プロンプトエンジニアリングとは何か](/prompt-engineering/what-is-prompt-engineering)の基礎です。これは、信頼できる出力を得るために入力を構造化する実践です。', 'モデルは単語や文字で「考える」のではありません。内部的には、テキストをトークンIDに変換し、数値的に処理します。これはトークン化が重要な理由です。1つの文字変更は時々トークン境界に影響を与える可能性があり、冗長な単語を含む整理の悪いプロンプトは出力品質を改善することなく数百のトークンを無駄にする可能性があります。', '一文で：トークンはAIモデルが処理するテキストの最小単位であり、約3〜4文字または英単語の3/4であり、すべての入力トークンと出力トークンについて課金されます。' ] }, tldr: { title: '重要なポイント', isTldr: true, items: [ 'トークンはAIのコストと処理の単位です。英語では約3〜4文字=1トークン。他の言語ではより多くのトークンが必要です。', '入出力トークンと出力トークンに対して個別に支払います。出力トークンは通常2〜5倍以上の費用がかかります。長い冗長な出力がコストが急増する場所です。', 'トークン計算には、システムプロンプト、完全な会話履歴、添付ファイル、および画像が含まれます。最後のメッセージだけではありません。', 'レート制限（1分あたりのリクエスト数、1分あたりのトークン数）は、不正使用を防ぎ、リソースの公正な配分を保証するために存在します。無料層には厳しい制限があります。有料層ははるかに高いです。', 'タスクに適切なモデルを使用すると、コストが10〜50倍削減されます。GPT-5.6 miniまたはClaude Haiku 4.5は、GPT-5.6またはClaude Opus 4.8を必要としないタスクを処理できます。', 'OllamaまたはLM Studioを経由したローカルLLMは、トークンあたりのAPI費用がゼロですが、VRAM投資が必要であり、フロンティアモデルよりも機能が低いです。' ] }, tokenCounting: { title: '実際のトークン計数のしくみ', content: '**APIコールのすべての要素—システムプロンプト、会話履歴、新しいメッセージ、ファイル、およびモデル自体の出力—クォータからトークンを消費します。** これが、小さなメッセージで始まった会話が5回のやり取り後に突然高額になる理由です。すべてについて支払っています。[システムプロンプトとユーザープロンプト](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)の区別を理解することは重要です。両方が各呼び出しで課金されるためです。', items: [ '**システムプロンプト：** メッセージごとに1回カウントされます。200単語のシステムプロンプト=毎回のAPI呼び出しで約250トークン。', '**完全な会話履歴：** 明示的に要約または削除されない限り、すべてのリクエストに含まれます。ターン2ごとに500トークンを持つ10ターンの会話=ターン11で再度カウントされた5,000トークン。', '**入力メッセージ：** そのままカウントされます。', '**添付ファイルまたは画像：** 画像はサイズと解像度に応じて100〜2,000トークンを消費します。大きなPDFは数千を消費できます。', '**モデル出力：** 生成された応答は出力トークンレート（通常は入力レートより2〜5倍高い）で完全にカウントされます。', '**実例：** 3ターンのリサーチ会話：システムプロンプト（300トークン）+ユーザーQ1（150トークン）+モデルA1（200トークン）+ユーザーQ2（200トークン）+モデルA2（300トークン）+ユーザーQ3（100トークン）=**ここまでで1,250トークン**。Q3を送信すると、履歴全体（1,250トークン）を再度支払います。短いフォローアップ1つで、以前の会話全体と同じくらいの費用がかかる可能性があります。' ] }, pricing: { title: '2026年にGPT-5.6、Claude、Geminiはメートルトンあたりいくらですか?', content: [ 'モデルの機能に応じて価格は大きく異なります。以下のすべての数値は、2026年3月現在の公式価格です。出力トークンは通常、入力トークンより2〜5倍コストがかかることに注意してください。これはコストが最も速く蓄積される場所です。正しいモデルの選択が最大のコストレバーです。詳細な比較については、[GPT-5.6、Claude、Gemini間の選択方法](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)を参照してください。', '2026年3月現在の価格。現在のレートを確認してください：[OpenAI価格](https://openai.com/pricing)·[Anthropic価格](https://www.anthropic.com/api)·[Google価格](https://ai.google.dev/pricing)' ], columns: [ 'モデル', '入力（1Mトークンあたり）', '出力（1Mトークンあたり）' ], rows: [ { 'モデル': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', '入力（1Mトークンあたり）': '$5.00', '出力（1Mトークンあたり）': '$15.00' }, { 'モデル': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', '入力（1Mトークンあたり）': '$3.00', '出力（1Mトークンあたり）': '$15.00' }, { 'モデル': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', '入力（1Mトークンあたり）': '$3.50', '出力（1Mトークンあたり）': '$10.50' }, { 'モデル': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', '入力（1Mトークンあたり）': '$0.15', '出力（1Mトークンあたり）': '$0.60' }, { 'モデル': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', '入力（1Mトークンあたり）': '$0.25', '出力（1Mトークンあたり）': '$1.25' }, { 'モデル': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', '入力（1Mトークンあたり）': '$0.075', '出力（1Mトークンあたり）': '$0.30' } ], tableFormat: true }, rateLimits: { title: 'レート制限とは何ですか—そしてなぜ存在するのですか?', content: '**レート制限は、1分あたりに実行できるリクエストの数（RPM）、1分あたりに処理できるトークン数（TPM）、または1日あたりのトークン数（TPD）のキャップです。** プロバイダーは制限を課して、不正使用を防ぎ、ユーザー間のリソースの公正な配分を保証し、価格層を作成します。無料層ユーザーは最も厳しい制限に直面しています。有料層ははるかに高いスループットのロックを解除します。', items: [ '**1分あたりのリクエスト（RPM）：** 60秒のウィンドウで実行できるAPI呼び出しの数。これを超過するとリクエストはキューに入れられるか拒否されます。', '**1分あたりのトークン数（TPM）：** トークンの総スループット。単一の大きなプロンプトは、数秒でTPMクォータ全体を消費できます。', '**制限に到達する一般的なシナリオ：** 高速連続呼び出し（秒あたり50以上）を行う自動パイプライン、大規模なバッチ処理ジョブ、またはバースト状況での無料層ユーザー。', '**典型的な制限：** 無料：3〜15 RPM、40k〜100k TPM。有料層1：500 RPM、200k〜500k TPM。エンタープライズ：3,000+ RPM、数百万TPM。', '**回避策：** 小さなタスクをより大きなリクエストにバッチ処理（API呼び出しが少ない）、リクエスト間に遅延を追加、またはより高い層のアカウントにアップグレードします。' ] }, promptDesign: { title: 'LLM APIコストを30〜50倍削減するにはどうすればいいですか?', content: [ '**PromptQuorumでテスト—システムプロンプトの詳細度のレベルが異なるGPT-5.6、Claude Opus 4.8、およびGemini 3.1 Pro上で実行される20個の同一のリサーチサマリプロンプト：** 500トークンのシステムプロンプトで、平均出力は450トークンで、呼び出しあたりの平均コストは$0.032でした。200トークンのシステムプロンプトで同じ指示がある場合、平均出力は460トークン（呼び出しあたり$0.025）でした。同じ出力品質で18％のコスト削減。これは[速度のためのプロンプト方法](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed)と一致しています。効率性はレイテンシとコストの両方を削減します。', '**プロンプトの不要なトークンはお金を無駄にします。コストは、会話内のすべてのAPI呼び出しにプロンプト全体が再度含まれるため、より速く蓄積されます。** 500トークンのシステムプロンプトを300トークンにトリミングすると、呼び出しあたり$0.001が節約されます。1日1,000呼び出しでは、1日$1または年$365です。' ], items: [ '**コンテキストを積極的にトリミング：** モデルが既に知っていることを繰り返さないでください。「ユーザーはXを尋ねました。彼に私はYを言いました。今、彼はZを尋ねています」の代わりに、Zだけを含めてください。', '**明示的な長さの制約を使用します：** 「3つの箇条書きで回答」または「最大100語」は簡潔さを強制し、冗長な出力（より多くのコストがかかる）を防止します。', '**システムプロンプトのパディングを避ける：** すべてのフィラー単語はお金がかかります。「ユーザーを支援する専門家アシスタント」は10トークン。「専門家アシスタント」は6トークン。両方同じ意味を伝えます。', '**例：ふくよかvs。トリミングされたシステムプロンプト：**', '[悪いプロンプト]「多くの領域で広範な知識を持つ有用なAIアシスタント。ユーザーに詳細で包括的な回答を提供することでユーザーを支援します。徹底的になり、推論をステップバイステップで説明します。簡潔であることを避けてください。ユーザーは徹底的な説明を高く評価します。」', '[良いプロンプト]「あなたは専門家アシスタントです。正確で詳細な回答を提供します。あなたの推論を説明します。」', 'トークン差：悪い=55トークン、良い=13トークン。1日100呼び出し：42×100×30日×（$0.005/1M入力トークン）≈トリミングされたプロンプト1つで$0.63/月節約。' ] }, howToStart: { title: 'LLM APIコストを5つのステップで削減する方法', numberedItems: [ 'タスクの複雑さにモデルを一致させる：単純な分類とQ&Aにはフロンティアモデルより33倍安いGPT-5.6 miniまたはClaude Haiku 4.5を使用します', '会話履歴を5ターンごとにまとめる：履歴全体が各呼び出しで再度課金されるのを防ぎます（[チェーンオブソートプロンプティング](/prompt-engineering/chain-of-thought-prompting)に対応する手法—事前に推論を構造化します)', '出力の長さを明示的に制限：「3つの箇条書きで回答」または「100語以下」は冗長でトークンが多い応答を防止します', 'システムプロンプトをエッセンシャルにトリミング：フィラーフレーズを削除します。各冗長な単語はすべてのAPI呼び出しで再度課金されます', 'Ollamaを経由したローカルLLMを大量の非公開ワークフローでテスト：フロンティアモデルの機能の代償としてトークンあたりのコストがゼロ' ] }, modelSelection: { title: '適切なタスクのための適切なモデルの選択', content: '**すべてのタスクがOpenAI GPT-5.6またはAnthropicクロードOpusを必要とするわけではありません。** 単純な分類、事実的なQ&A、および多くの自動タスクは安いモデルで完璧に実行されます。コストの違いは劇的です。', columns: [ 'タスクタイプ', '推奨モデル', 'コスト対GPT-5.6' ], rows: [ { 'タスクタイプ': '単純な分類/はい-いいえ', '推奨モデル': '[GPT-5.6 mini](https://openai.com/chatgpt)、[Claude Haiku 4.5](https://www.anthropic.com/claude)、または[Gemini Flash](https://gemini.google.com)', 'コスト対GPT-5.6': '33倍安い' }, { 'タスクタイプ': '短い事実のQ&A', '推奨モデル': 'GPT-5.6 miniまたはClaude Haiku 4.5', 'コスト対GPT-5.6': '10〜33倍安い' }, { 'タスクタイプ': '複雑な分析またはコード', '推奨モデル': '[GPT-5.6](https://openai.com/chatgpt)または[Claude Opus 4.8](https://www.anthropic.com/claude)', 'コスト対GPT-5.6': 'ベースライン' }, { 'タスクタイプ': '長編の創造的なライティング', '推奨モデル': 'Claude Opus 4.8またはGPT-5.6', 'コスト対GPT-5.6': 'ベースライン' }, { 'タスクタイプ': '大量の非公開ワークフロー', '推奨モデル': '[Ollama](https://ollama.com/library/llama3.3)からのローカルモデル', 'コスト対GPT-5.6': 'ゼロAPIコスト' } ], tableFormat: true }, localLLMs: { title: 'ローカルLLM（Ollama）とクラウドAPI間のトレードオフは何ですか?', content: '**OllamaまたはLM Studioを経由したローカルモデルはトークンあたりのAPIコストがゼロです。ハードウェア（VRAMと電気代）に対してのみ支払います。** これにより、大量のワークフロー、プライバシーに敏感なアプリケーション、およびコスト関連のパイプラインに理想的です。トレードオフは機能（ローカルモデルはフロンティアモデルより遅れている）とレイテンシ（コンシューマーVRAM上の実行は遅い）です。[コンテキストウィンドウ](/prompt-engineering/context-windows-explained-why-ai-forgets)を理解することは、ローカル展開を計画する場合に不可欠です。VRAMはサポートできるコンテキストウィンドウサイズを制限します。', items: [ '**ハードウェアコスト：** OllamaモデルLLaMA 3.1 7Bは約8GB VRAM、13Bモデルは約16GB、70Bモデルは40GB以上必要です。GPUメモリが制限要因です。', '**機能トレードオフ：** ローカルモデルは分類、要約、反復タスクに優れています。GPT-5.6やClaude Opus 4.8と比較して、マルチステップ推論、コード生成、創造的なライティングに苦労しています。', '**レイテンシトレードオフ：** クラウドモデルは500ms〜2sで応答します。コンシューマーハードウェア上のローカルモデル：モデルサイズとシステム仕様に応じて2〜10s。', '**ローカルを使用する場合：** 大量の自動化（1,000日+呼び出し/日）、GDPRに敏感なデータ（GDPR下の個人データを処理するEUユーザーはオンデバイス処理の恩恵を受けます）、または品質が「十分」のコスト関連ワークフロー。', '**クラウドを使用する場合：** レイテンシに敏感なアプリケーション、推論が必要なタスク、またはAPIコストが無視できる単発分析。' ] }, regionalContext: { title: '地域別の背景', content: [ '**EU / GDPR** AI API経由で個人データを処理するEU域内組織にとって、トークンコストには価格表には表れないコンプライアンスコストが含まれます。クラウドAPIに送信される各トークンはGDPR第28条に基づき第三者が処理する個人データであり、EU域外プロバイダーの場合は第46条に基づくデータ処理契約と移転メカニズムが必要です。', 'Ollama経由のローカルLLMはこれを完全に排除します。顧客データ、サポートチケット、社内文書を処理するEUチームにとって、クラウドAPI呼び出しの実際のコストには外部データ転送のコンプライアンスオーバーヘッドが含まれます。規模が大きくなると、ハードウェア投資を考慮してもローカル推論が経済的に競争力を持つ場合があります。', 'BSI IT-Grundschutzガイドラインの下でドイツの組織はAI処理コストとデータフローを文書化する必要があります。適切なアクセス制御とともに保持されていれば、クラウドAPIのトークンログはこの要件を満たします。', '**日本（経済産業省）** 日本語テキストはCJK文字のトークナイザー効率の低さにより、同等の英語テキストより20〜40%多くのトークンを必要とします。1,000語の日本語文書はGPT-5.6で約$0.007かかりますが、同じ英語コンテンツでは$0.005です。日本語のAIワークフローでは、Ollama経由のQwen3モデルの方がトークン効率が大幅に高くなります。ネイティブCJKトークナイゼーションにより日本語のトークン数が30〜40%削減され、呼び出しあたりのコストが直接下がります。', '**中国** 中国のデータセキュリティ法（数据安全法）の下では、海外のクラウドAI APIへの業務データ送信にはデータローカライゼーションのコンプライアンス審査が必要です。中国企業チームにとって、Qwen3（アリババ）経由のローカル推論は、越境データ転送コストとコンプライアンスリスクを同時に排除します。1日あたり1,000回以上のAPI呼び出しでは、ローカル推論サーバーのハードウェア償却コストは通常6〜12ヶ月以内にAPI料金を下回ります。' ] }, promptquorumHelps: { title: 'PromptQuorumがトークンコストを管理するのを支援する方法', content: [ '**PromptQuorumは2つのLLMを使用します。バックエンドLLMとフロントエンドLLM（プロンプト質問に答える選択したモデル）。** バックエンドLLMはプロンプトを最適化し、複数のフロントエンドモデル全体でQuorum コンセンサス分析を実行します。単一モデルのチャットインターフェイスとは異なり、PromptQuorumはトークン使用を可視化して実行可能にします。', '**バックエンドLLMトークンは常に表示されます。** フロントエンドトークンの可視性は、モデルにアクセスする方法に応じて異なります：', '- **公開インターフェイス**（Copilot、公開Claude Webチャット）：フロントエンドトークンは表示されません。バックエンドトークンのみが表示されます。', '- **ローカルモデル**（LM Studio、Ollama）：フロントエンドトークンは表示されます。ハードウェア上で実行され、PromptQuorumはトークン使用を直接確認します。', '- **API**（OpenAI、Anthropic）：場合によります。直接API統合では、フロントエンドトークンが表示されます。サードパーティエンドポイントまたは公開インターフェイス経由では、フロントエンドトークンは表示されません。', '**PromptQuorumでテスト—20個の同一のリサーチサマリプロンプトをGPT-5.6およびGPT-5.6 miniに送信：** 出力品質は20タスク中17で一致しました。コスト差：$0.003当たりプロンプト（GPT-5.6）対$0.00007当たりプロンプト（ミニ）。43倍のコスト削減。GPT-5.6が優位だった3つのタスクでは、複雑さはドキュメント全体の複数ステップの推論を伴いました。' ] }, recipes: { title: 'トークンコストレシピ—一般的なシナリオ', content: '特定のワークフローのコスト最適化の出発点として、これらのテンプレートを使用してください。', items: [ '**「クイック検索/はい-いいえタスク」：** GPT-5.6 miniまたはHaikuを使用します。最小限のシステムプロンプト（≤50トークン）。会話履歴はありません。出力を1〜2文に制限します。タスクあたりの総コスト：~$0.00001〜0.0001。', '**「長いリサーチタスク（5〜10ターン）」：** Claude Opus 4.8（長いコンテキストに優れている）を使用します。5ターンごとに、会話を要約し、履歴をサマリーに置き換えます（トークンを70％削減）。コスト：~$0.01〜0.05リサーチセッションあたり。', '**「自動パイプライン/バッチ処理」：** GPT-5.6 miniを使用してフィルタリングまたは分類（33倍安い）。エッジケースの最終合成のためにGPT-5.6にのみエスケレートします。APIがサポートする場合、コンテキストキャッシュを再利用するために同様のプロンプトをバッチ処理します。', '**「プライバシーに敏感なワークフロー」：** OllamaまたはLM Studioをローカルで実行するようにルーティングします。コンテキストウィンドウ：8GB VRAM用4k〜8kトークン、16GB用16k〜32k。ゼロAPIコスト。コンプライアンスのためにやや低い品質を受け入れます。', '**「モデル全体の出力を比較」：** GPT-5.6、Claude Opus 4.8、Claude Haiku 4.5に同時に1つの構造化されたプロンプトを送信します。品質+コストを比較します。品質バーを満たす最も安いものを選択します。発見コスト：~$0.001。継続的なコスト：33〜43倍の貯蓄。' ] }, mistakes: { title: 'トークン請求書をスパイク，する一般的なエラー', content: 'これらのトークン浪費パターンを避けてください。', items: [ '**すべての呼び出しで完全な会話履歴を送信：** 会話が10ターン後に5,000トークンであれば、ターン11で5,000トークンを再度支払っています。わずか200トークンは新しいものです。解決策：5ターンごとに要約するか、APIがサポートしている場合はプロンプトキャッシングを使用します。', '**単純なタスクに高機能モデルを使用：** GPT-5.6を「このメールから日付を抽出」に使用しないでください。GPT-5.6 miniまたはHaikuを使用します。このタスク単独でのコスト差：33倍。', '**出力長を制限しない：** 漠然とした「Xについて教えてください」プロンプトは500トークンを返すことができますが、「50語で要約する」は60トークンを返します。冗長な応答に8倍以上支払います。', '**毎回呼び出し時に長いシステムプロンプトを繰り返す：** システムプロンプトが500トークンで100 APIコールを実行する場合、再利用またはキャッシングしないと50,000トークンが浪費されます。システムプロンプトテンプレートまたはリクエストレベルのキャッシングを使用します。', '**画像トークンを忘れる：** 単一の高解像度画像は、解像度に応じて500〜2,000トークンを消費できます。アップロード前に画像をダウンスケールするか、関連領域にトリミングします。', '**バッチ処理の代わりにマニュアルテスト呼び出しを実行：** 20のプロンプト変動のテストはコストが1呼び出しのトークン費用の20倍です。バッチAPIまたはPromptQuorumの複数モデル比較を使用して、すべての変動を1ショットでテストします。', '**会話の途中でモデルを切り替える：** クラウドAPI（OpenAI、Anthropic）はモデル間の会話コンテキストを転送しません。別のモデルで会話を再起動すると、すべての以前のメッセージが再度送信されます。会話ごとに1つのモデルにコミットしてください。' ] }, faq: { title: 'よくある質問', faqs: [ { q: 'AIにおけるトークンとは何ですか?', a: 'トークンはAIモデルが処理するテキストの最小単位で、約3〜4文字または英単語の¾に相当します。「ChatGPT」は2トークンとしてカウントされます。すべての入力トークンと出力トークンに対して課金され、出力トークンは通常入力トークンより2〜5倍高くなります。' }, { q: 'GPT-5.6はトークンあたりいくらですか?', a: '2026年4月時点：GPT-5.6は入力100万トークンあたり$5.00、出力100万トークンあたり$15.00です。GPT-5.6 miniは入力100万トークンあたり$0.15、出力100万トークンあたり$0.60で、フルのGPT-5.6性能が不要なタスクでは33倍安価です。' }, { q: 'レート制限はどのように機能しますか?', a: 'レート制限は1分あたりのリクエスト数（RPM）と1分あたりのトークン数（TPM）を制限します。無料層：3〜15 RPM、40k〜100k TPM。有料層：500 RPM、200k〜500k TPM。エンタープライズ：3,000+ RPM。対策：小さなタスクをより大きなリクエストにまとめる、呼び出し間に遅延を追加する、より高い層にアップグレードする。' }, { q: '典型的な記事またはレポートはいくつのトークンですか?', a: '1,000語の記事≈1,200〜1,500トークン。10ページのPDF≈4,000〜6,000トークン。単一の高解像度画像≈500〜2,000トークン（解像度とコンテンツ密度に応じて）。' }, { q: '短いプロンプトでもAPI請求書が予想より高いのはなぜですか?', a: '3つの一般的な原因：（1）各呼び出しで完全な会話履歴を送信しています。5ターン後に要約します。（2）システムプロンプトが長い場合。本質的にトリミングしてください。（3）単純なタスクに高機能モデルを使用しています。分類または短いQ&AにはGPT-5.6 miniまたはHaikuに切り替えます。' }, { q: 'より長いシステムプロンプトは常により良い出力を意味しますか?', a: 'いいえ。よく作られた100トークンシステムプロンプトは、しばしば冗長な500トークンプロンプトを上回ります。品質は量を打ちます。特異性は冗長性を打ちます。' }, { q: 'クラウドAPIの代わりにローカルLLMをいつ使うべきですか?', a: 'ローカルLLMを使用する場面：大量の自動化（1,000+呼び出し/日）、個人データがインフラの外に出てはいけないGDPR機微データ、または品質が「十分」であるコスト重視のパイプライン。クラウドAPIを使用する場面：レイテンシに敏感なアプリケーション、複雑な推論タスク、またはAPIコストが無視できる単発の分析。' }, { q: 'AI APIのトークンコストを削減するにはどうすればいいですか?', a: '7つの戦略：システムプロンプトをトリミングする、出力の長さを制限する、5ターンごとに会話履歴を要約する、単純なタスクには安価なモデルを使う、完全な会話履歴の送信を避ける、アップロード前に画像を縮小する、手動ではなくテスト呼び出しをバッチ処理する。' }, { q: '典型的なAIプロンプトはいくつのトークンを使用しますか?', a: '典型的なプロンプトは複雑さに応じて150〜500トークンを使用します。単純な質問（5〜20トークン）、中程度の段落（50〜150トークン）、例を含む完全なリサーチプロンプト（200〜600トークン）。プロンプトあたりのトークン数は言語と複雑さによって異なります。' }, { q: 'プロンプトが3,000トークンあるとはどういう意味ですか?', a: '3,000トークンのプロンプトは、おおよそ2,000語の記事または10ページ以上のテキストに相当します。これは長いシステムプロンプト、完全な会話履歴、または大きなドキュメントコンテキストを示しています。効率化のためには、会話履歴の要約や不要なコンテキストのトリミングを検討してください。' }, { q: 'モデルによって各AIプロンプトのコストはどのくらい違いますか?', a: 'コストはモデルによって異なります：GPT-5.6 mini = プロンプトあたり約$0.00005〜0.0001。GPT-5.6 = 約$0.001〜0.01。Claude Haiku = プロンプトあたり約$0.00003。Claude Opus = 約$0.005〜0.02。Gemini Flash = 約$0.00002。コストはプロンプトの長さと出力によって異なります。' }, { q: 'AIプロンプトのトークンはどのように計算されますか?', a: 'トークンはテキストを3〜4文字（英単語の約¾）の単位に分解して計算されます。システムプロンプト、会話履歴、画像、添付ファイル、出力がすべてカウントされます。ほとんどのAPIプロバイダーは応答内で正確なトークン数を表示します。短いプロンプトと制限された出力はトークン使用量を削減します。' }, { q: '1,000語のプロンプトは何トークンですか?', a: '1,000語のプロンプトは英語で約1,200〜1,500トークンです。他の言語はトークン化効率が低く、20〜40％多くのトークンが必要になる場合があります。トークン数は使用言語の単語選択と平均単語長によって異なります。' }, { q: 'トークン制限は単一のプロンプトに基づくものですか、それとも会話全体に基づくものですか?', a: 'トークン制限は、すべてのシステムプロンプト、以前のメッセージ、取得されたドキュメント、現在のプロンプトを含む会話履歴全体に適用されます。レート制限（1分あたりのトークン数）は、1つのプロンプトだけでなく、その時間枠内のすべてのAPI呼び出しにわたって累積されます。' }, { q: '100万トークンからいくつのプロンプトが得られますか?', a: '100万トークンで：各プロンプトが平均150〜500トークンの場合、2,000〜6,667のプロンプト。GPT-5.6 miniのプロンプト（約300トークン）=約3,333のプロンプト。GPT-5.6のプロンプト（約500トークン）=約2,000のプロンプト。実際の数はプロンプトサイズと出力の長さによって異なります。' }, { q: 'プロンプトの最適化はAPIコストを大幅に削減しますか?', a: 'はい。500トークンのシステムプロンプトを300トークンにトリミングすると、API呼び出しあたり約$0.001節約できます。1日1,000回の呼び出しで、年間$365の節約になります。出力の長さを制限し、5ターンごとに会話履歴を要約することで、コストを30〜50％削減できます。モデル選択が最大のレバーです — GPT-5.6 miniはGPT-5.6より33倍安価です。' } ] }, relatedReading: { title: '関連の読み物', items: [ '[Fundamentals：より高速なAI回答：スピードのためにプロンプト](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed)—プロンプト効率はトークンコストを直接削減', '[Fundamentals：GPT、ClaudeまたはGemini？正しいモデルを選ぶ方法](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)—モデル選択は最大のコストレバー', '[Fundamentals：コンテキストウィンドウが説明：AIが忘れる理由](/prompt-engineering/context-windows-explained-why-ai-forgets)—コンテキストウィンドウは、トークンまたは長さの上限に当たる前に含めることができる履歴の量を制限します' ] }, sources: { title: 'ソースおよび詳細を読む', items: [ '[OpenAI価格](https://openai.com/pricing)', '[Anthropic Claude Pricing](https://www.anthropic.com/pricing)', '[Google Gemini Pricing](https://ai.google.dev/pricing)' ] } } as any },
    zh: { theme: 'Fundamentals', title: '令牌、成本和限制：AI提示的经济学', intro: '每个AI API调用都用令牌来测量和计费——该单位控制模型可以处理的内容以及您支付的金额。理解令牌是高效且经济有效提示的基础。', publishDate: '2026-03-22', readTime: '13分钟阅读', primaryTerm: 'LLM令牌',
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '按任务类型选择AI模型 — 成本优化指南',
        description: '截至2026年，针对每种任务类型应使用哪种AI模型，以在不牺牲输出质量的情况下将API成本降至最低。',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '简单分类或是/否任务',
            description: '使用GPT-5.6 mini、Claude Haiku 4.5或Gemini Flash——在简单分类上准确度相当，但比GPT-5.6便宜33倍。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '简短的事实性问答',
            description: '使用GPT-5.6 mini或Claude Haiku 4.5——比前沿模型便宜10-33倍。适用于查找任务、单一答案问题和实体提取。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '复杂分析或代码生成',
            description: '使用GPT-5.6或Claude Opus 4.8——多步推理、调试和技术综合需要前沿能力。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '长篇创意写作',
            description: '使用Claude Opus 4.8或GPT-5.6——两者在长篇输出中都擅长保持叙事质量和风格一致性。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '大批量私有或自动化工作流程',
            description: '通过Ollama或LM Studio使用本地模型——每个令牌的API成本为零。需要投资VRAM；最适合"足够好"质量可以接受的任务。',
          }
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html', gammaDescription: '幻灯片涵盖：令牌定价、速率限制、模型选择和降本策略。下载PDF作为AI令牌经济学参考卡。', sections: { definition: { title: '什么是令牌？', content: [ '**令牌是AI模型处理的最小文本单位，大约3-4个字符或3/4个英文单词。** 在英文文本中，"ChatGPT"计为2个令牌，"Hello, how are you?"大约是5-6个令牌。其他语言的令牌化效率较低——相同的短语用德语或日语可能会消耗20-40%的额外令牌。您需要为提示（输入）中的每个令牌和模型输出的每个令牌付费。理解令牌对于了解[什么是提示工程](/prompt-engineering/what-is-prompt-engineering)——构造输入以获得可靠输出的实践——是基础。', '模型不会用文字或字符"思考"。在内部，它们将您的文本转换为令牌ID并进行数值处理。这就是为什么令牌化很重要：单个字符更改有时会影响令牌边界，而包含冗余单词的组织不当的提示可能会浪费数百个令牌而不会改善输出质量。', '一句话：令牌是AI模型处理的最小文本单位，大约3-4个字符或3/4个英文单词，您需要为每个输入令牌和输出令牌付费。' ] }, tldr: { title: '重点', isTldr: true, items: [ '令牌是AI成本和处理的单位。大约3-4个字符=英文中的1个令牌；其他语言需要更多令牌。', '您为输入令牌和输出令牌分别付费——输出令牌通常费用多2-5倍。长冗长的输出是成本飙升的地方。', '令牌计数包括系统提示、完整的对话历史、附加文件和图像——不仅仅是您的最后一条消息。', '速率限制（每分钟请求数、每分钟令牌数）存在以防止滥用并确保公平的资源分配。免费层有严格的限制；付费层要高得多。', '为任务使用正确的模型可以将成本降低10-50倍。GPT-5.6 mini或Claude Haiku 4.5可以处理不需要GPT-5.6或Claude Opus 4.8的任务。', '通过Ollama或LM Studio的本地LLM具有零令牌API成本，但需要VRAM投资且功能低于前沿模型。' ] }, tokenCounting: { title: '令牌计数在实践中的工作原理', content: '**API调用的每个元素——系统提示、对话历史、新消息、文件和模型自身的输出——都从您的配额中消耗令牌。** 这就是为什么以小消息开始的对话在五次往返后可能会突然变得昂贵。您为所有内容付费，累计。理解[系统提示和用户提示](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)之间的区别至关重要，因为两者在每次调用时都会计费。', items: [ '**系统提示：** 每条消息计算一次。200字系统提示=每次API调用约250个令牌。', '**完整对话历史：** 除非明确汇总或删除，否则包含在每个请求中。一个有10轮、每轮500个令牌的对话=第11轮再次计算5000个令牌。', '**您的输入消息：** 按原样计算。', '**附加文件或图像：** 图像根据大小和分辨率消耗100-2000个令牌。大型PDF可能消耗数千个。', '**模型输出：** 生成的响应以输出令牌速率（通常比输入速率高2-5倍）完全计算。', '**工作示例：** 一个3轮的研究对话：系统提示（300个令牌）+用户Q1（150个令牌）+模型A1（200个令牌）+用户Q2（200个令牌）+模型A2（300个令牌）+用户Q3（100个令牌）=**到目前为止1250个令牌**。当您发送Q3时，您再次为整个历史（1250个令牌）加上A3的输出付费。一个"短"后续可能花费与整个先前对话一样多。' ] }, pricing: { title: '2026年GPT-5.6、Claude和Gemini每百万令牌的费用是多少？', content: [ '价格因模型功能而异。以下所有数据是截至2026年3月的公开价格。请注意，输出令牌通常比输入令牌多费用2-5倍——这是成本累积最快的地方。正确的模型选择是最大的成本杠杆——详细比较请参见[如何在GPT-5.6、Claude和Gemini之间选择](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)。', '2026年3月起价格。验证当前费率：[OpenAI价格](https://openai.com/pricing)·[Anthropic价格](https://www.anthropic.com/api)·[Google价格](https://ai.google.dev/pricing)' ], columns: [ '模型', '输入（每百万令牌）', '输出（每百万令牌）' ], rows: [ { '模型': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', '输入（每百万令牌）': '$5.00', '输出（每百万令牌）': '$15.00' }, { '模型': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', '输入（每百万令牌）': '$3.00', '输出（每百万令牌）': '$15.00' }, { '模型': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', '输入（每百万令牌）': '$3.50', '输出（每百万令牌）': '$10.50' }, { '模型': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', '输入（每百万令牌）': '$0.15', '输出（每百万令牌）': '$0.60' }, { '模型': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', '输入（每百万令牌）': '$0.25', '输出（每百万令牌）': '$1.25' }, { '模型': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', '输入（每百万令牌）': '$0.075', '输出（每百万令牌）': '$0.30' } ], tableFormat: true }, rateLimits: { title: '什么是速率限制——为什么存在？', content: '**速率限制是您可以每分钟进行的请求数（RPM）、可以每分钟处理的令牌数（TPM）或每天令牌数（TPD）的上限。** 提供商设置限制以防止滥用、确保用户间的公平资源分配并创建价格层。免费层用户面临最严格的限制；付费层解锁更高的吞吐量。', items: [ '**每分钟请求数（RPM）：** 您在60秒窗口内可以进行的API调用数。超过此限制，请求将排队或被拒绝。', '**每分钟令牌数（TPM）：** 总令牌吞吐量。单个大型提示可以在几秒内消耗整个TPM配额。', '**您遇到限制的常见场景：** 进行快速顺序调用（每秒50+）的自动化管道、大型批处理作业或免费层用户在突发情况下。', '**典型限制：** 免费：3-15 RPM、40k-100k TPM。付费层1：500 RPM、200k-500k TPM。企业：3000+ RPM、数百万TPM。', '**解决方法：** 将小任务批处理为较大的请求（较少API调用）、在请求之间添加延迟或升级到更高层的帐户。' ] }, promptDesign: { title: '我如何将LLM API成本降低30-50倍？', content: [ '**在PromptQuorum中测试——在GPT-5.6、Claude Opus 4.8和Gemini 3.1 Pro上执行的20个相同的研究摘要提示，系统提示详细程度不同：** 使用500令牌系统提示，平均输出为450令牌，每次调用平均成本为$0.032。对于相同说明的修剪200令牌提示，平均输出为460令牌，每次调用为$0.025——相同输出质量下成本降低18%。这与[如何为速度提示](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed)一致——效率降低了延迟和成本。', '**提示中的每个不必要的令牌都浪费金钱——成本累积更快，因为整个提示在对话中的每次API调用时都会重新包含。** 将500令牌系统提示修剪到300令牌可以节省每次调用$0.001，但在每天1000次调用时，这是$1/天或$365/年。' ], items: [ '**积极修剪上下文：** 不要重复模型已经知道的内容。不要说"用户问了X。我告诉他们Y。现在他们问Z"，只需包括Z。', '**使用明确的长度限制：** "用3个要点回答"或"最多100个单词"强制简洁性并防止冗长输出（成本更高）。', '**避免系统提示中的填充：** 每个填充字都花钱。"您是一个可以帮助用户的有用的AI助手"是10个令牌。"您是一个有用的AI助手"是6个令牌。两者都传达相同的含义。', '**示例：膨胀vs。修剪系统提示：**', '[不好的提示]"您是一个具有跨许多领域广泛知识的有用AI助手。您通过提供详细、全面的答案来帮助用户。始终彻底并逐步解释您的推理。避免简洁——用户欣赏全面的解释。"', '[好的提示]"您是一个有用的AI助手。提供准确、详细的答案。解释您的推理。"', '令牌差异：不好=55个令牌，好=13个令牌。每天100次调用：42×100×30天×（$0.005/1M输入令牌）≈通过仅一个修剪提示节省$0.63/月。' ] }, howToStart: { title: '如何在5个步骤中降低LLM API成本', numberedItems: [ '将模型与任务复杂性匹配：对于简单分类和问答使用GPT-5.6 mini或Claude Haiku 4.5——比前沿模型便宜33倍', '每5轮汇总对话历史：防止每次调用都重新计费整个历史（与[思维链提示](/prompt-engineering/chain-of-thought-prompting)一致的技术——预先构造您的推理）', '明确限制输出长度："用3个要点回答"或"最多100个单词"可防止冗长的令牌密集响应', '将系统提示修剪到要点：删除填充短语；每个冗余字都在每个API调用时重新计费', '通过Ollama测试本地LLM用于大量私有工作流：每令牌零API成本，代价是前沿模型能力' ] }, modelSelection: { title: '为正确的任务选择正确的模型', content: '**并非每项任务都需要OpenAI GPT-5.6或Anthropic Claude Opus。** 简单分类、事实性问答和许多自动化任务在更便宜的模型上运行完美——成本差异很大。', columns: [ '任务类型', '推荐模型', '与GPT-5.6成本' ], rows: [ { '任务类型': '简单分类/是或否', '推荐模型': '[GPT-5.6 mini](https://openai.com/chatgpt)、[Claude Haiku 4.5](https://www.anthropic.com/claude)或[Gemini Flash](https://gemini.google.com)', '与GPT-5.6成本': '便宜33倍' }, { '任务类型': '简短的事实问答', '推荐模型': 'GPT-5.6 mini或Claude Haiku 4.5', '与GPT-5.6成本': '便宜10-33倍' }, { '任务类型': '复杂分析或代码', '推荐模型': '[GPT-5.6](https://openai.com/chatgpt)或[Claude Opus 4.8](https://www.anthropic.com/claude)', '与GPT-5.6成本': '基准线' }, { '任务类型': '长篇创意写作', '推荐模型': 'Claude Opus 4.8或GPT-5.6', '与GPT-5.6成本': '基准线' }, { '任务类型': '大容量私有工作流', '推荐模型': '通过[Ollama](https://ollama.com/library/llama3.3)的本地模型', '与GPT-5.6成本': '零API成本' } ], tableFormat: true }, localLLMs: { title: '本地LLM（Ollama）vs云API之间的权衡是什么？', content: '**通过Ollama或LM Studio的本地模型具有零令牌API成本——您仅为硬件（VRAM和电力）付费。** 这使它们非常适合大容量工作流、隐私敏感应用程序和成本关键管道。权衡是能力（本地模型落后于前沿模型）和延迟（在消费者VRAM上运行较慢）。在规划本地部署时，理解[上下文窗口](/prompt-engineering/context-windows-explained-why-ai-forgets)至关重要——您的VRAM限制您可以支持的上下文窗口大小。', items: [ '**硬件成本：** Ollama模型LLaMA 3.1 7B需要约8GB VRAM、13B模型需要约16GB、70B模型需要40GB+。GPU内存是限制因素。', '**能力权衡：** 本地模型在分类、摘要和重复任务中表现出色。与GPT-5.6或Claude Opus 4.8相比，他们在多步骤推理、代码生成和创意写作方面苦苦挣扎。', '**延迟权衡：** 云模型在500ms-2s内响应。消费者硬件上的本地模型：2-10s，取决于模型大小和系统规格。', '**何时使用本地：** 大容量自动化（1000+次调用/天）、GDPR敏感数据（在GDPR下处理个人数据的欧盟用户受益于设备上的处理）或质量"足够好"的成本关键工作流。', '**何时使用云：** 延迟敏感应用程序、需要推理的任务或API成本可忽略的一次性分析。' ] }, regionalContext: { title: '区域背景', content: [ '**欧盟 / GDPR** 对于通过AI API处理个人数据的欧盟组织而言，令牌成本包含了价目表中看不见的合规成本：发送到云API的每个令牌都是由第三方处理的个人数据，根据GDPR第28条要求，非欧盟提供商还需要数据处理协议和第46条规定的传输机制。', '通过Ollama使用本地LLM可以完全消除这一问题。对于处理客户数据、支持工单或内部文档的欧盟团队而言，云API调用的真实成本包括外部数据传输的合规开销。在规模化之后，即使考虑到硬件投资，本地推理在经济上也可能更具竞争力。', '根据BSI IT-Grundschutz准则，德国组织必须记录AI处理成本和数据流——只要以适当的访问控制方式保留，来自云API的令牌日志即可满足此要求。', '**日本（经济产业省）** 由于分词器在CJK文字上的效率较低，日语文本所需的令牌比同等英语文本多20-40%。一份1000字的日语文档在GPT-5.6上的费用约为$0.007，而相同的英语内容为$0.005。对于日语AI工作流，通过Ollama使用Qwen3模型的令牌效率显著更高——原生CJK分词将日语令牌数量减少30-40%，直接降低了每次调用的成本。', '**中国** 根据中国的《数据安全法》，将业务数据发送到境外云AI API需要进行数据本地化合规审查。对于中国企业团队，通过Qwen3（阿里巴巴）进行本地推理可同时消除跨境数据传输成本和合规风险。每天1000次以上的API调用，本地推理服务器的硬件摊销成本通常在6-12个月内低于API费用。' ] }, promptquorumHelps: { title: 'PromptQuorum如何帮助您管理令牌成本', content: [ '**PromptQuorum使用两个LLM：后端LLM和前端LLM（回答提示问题的您选择的模型）。** 后端LLM优化您的提示并在多个前端模型中运行Quorum共识分析。与单模型聊天界面不同，PromptQuorum使令牌使用可见且可操作。', '**后端LLM令牌始终可见。** 前端令牌可见性取决于您如何访问模型：', '- **公共界面**（Copilot、公共Claude网络聊天）：前端令牌不可见——仅显示后端令牌。', '- **本地模型**（LM Studio、Ollama）：前端令牌可见——在您的硬件上运行，PromptQuorum直接看到令牌使用情况。', '- **API**（OpenAI、Anthropic）：这取决于。使用直接API集成，前端令牌可见。通过第三方端点或公共界面，前端令牌不可见。', '**在PromptQuorum中测试——20个相同的研究摘要提示发送到GPT-5.6和GPT-5.6 mini：** 输出质量在20个任务中的17个匹配。成本差异：$0.003每个提示（GPT-5.6）对$0.00007每个提示（mini）——43倍的成本降低。在GPT-5.6表现出色的3个任务中，复杂性涉及文档间的多步推理。' ] }, recipes: { title: '令牌成本配方——常见场景', content: '使用这些模板作为特定工作流成本优化的起点。', items: [ '**"快速查找/是否任务"：** 使用GPT-5.6 mini或Haiku。最小系统提示（≤50令牌）。没有对话历史。将输出限制为1-2句。每个任务的总成本：~$0.00001-0.0001。', '**"长研究任务（5-10轮）"：** 使用Claude Opus 4.8（在长上下文中表现出色）。每5轮后，汇总对话并用汇总替换历史（降低令牌70%）。成本：~$0.01-0.05每个研究会话。', '**"自动化管道/批处理"：** 使用GPT-5.6 mini进行过滤或分类（便宜33倍）。仅为边界情况的最终合成升级到GPT-5.6。批处理类似的提示以在API支持的地方重新使用上下文缓存。', '**"隐私敏感工作流"：** 路由到本地运行的Ollama或LM Studio。管理上下文窗口：8GB VRAM为4k-8k令牌，16GB为16k-32k。零API成本。接受稍低的质量以实现合规性。', '**"比较跨模型的输出"：** 将一个结构良好的提示同时发送到GPT-5.6、Claude Opus 4.8和Claude Haiku 4.5。比较质量+成本。选择满足您质量栏的最便宜的。发现成本：~$0.001。持续成本：33-43倍的节省。' ] }, mistakes: { title: '导致令牌账单飙升的常见错误', content: '避免这些令牌浪费模式。', items: [ '**每次调用都发送完整对话历史：** 如果对话在10轮后为5000个令牌，您在第11轮再次为5000个令牌付费，尽管只有200个令牌是新的。解决方案：每5轮汇总或使用提示缓存（如果API支持）。', '**为简单任务使用高功能模型：** 不要为"从这封电子邮件中提取日期"使用GPT-5.6。使用GPT-5.6 mini或Haiku。仅此任务的成本差异：33倍。', '**不限制输出长度：** 一个模糊的"告诉我X"提示可能返回500个令牌，而"汇总为50个单词"返回60个令牌。您为冗长的响应多支付8倍。', '**每次调用都重复长系统提示：** 如果您的系统提示是500个令牌，您进行100次API调用，如果您不重新使用或缓存它，那就是50000个浪费的令牌。使用系统提示模板或请求级缓存。', '**忘记图像令牌：** 单个高分辨率图像可以消耗500-2000个令牌，具体取决于分辨率。在上传前向下缩放图像或裁剪到相关区域。', '**运行手动测试调用而不是批处理：** 测试20个提示变体的成本是一个调用令牌成本的20倍。使用批处理API或PromptQuorum的多模型比较在一次拍摄中测试所有变体。', '**在对话中间切换模型：** 云API（OpenAI、Anthropic）在模型间不转移对话上下文。在不同模型上重新启动对话会重新发送所有先前的消息。每个对话提交到一个模型。' ] }, faq: { title: '常见问题', faqs: [ { q: 'AI中的令牌是什么？', a: '令牌是AI模型处理的最小文本单位，大约3-4个字符或3/4个英文单词。"ChatGPT"计为2个令牌。您需要为每个输入令牌和每个输出令牌付费，输出令牌通常比输入令牌贵2-5倍。' }, { q: 'GPT-5.6每个令牌多少钱？', a: '截至2026年4月：GPT-5.6每百万输入令牌收费$5.00，每百万输出令牌收费$15.00。GPT-5.6 mini每百万输入令牌收费$0.15，每百万输出令牌收费$0.60——对于不需要完整GPT-5.6性能的任务便宜33倍。' }, { q: '速率限制是如何运作的？', a: '速率限制限制每分钟请求数（RPM）和每分钟令牌数（TPM）。免费层：3-15 RPM，40k-100k TPM。付费层：500 RPM，200k-500k TPM。企业级：3000+ RPM。解决方法：将小任务批量处理为更大的请求、在调用之间增加延迟，或升级到更高的层级。' }, { q: '典型文章或报告需要多少令牌？', a: '1000字文章≈1200-1500令牌。10页PDF≈4000-6000令牌。单个高分辨率图像≈500-2000令牌（取决于分辨率和内容密度）。' }, { q: '为什么即使使用短提示我的API账单也比预期高？', a: '三个常见原因：（1）您在每次调用时发送完整对话历史——5轮后汇总。（2）您的系统提示很长——修剪到要点。（3）您为简单任务使用高功能模型——切换到GPT-5.6 mini或Haiku进行分类或简短问答。' }, { q: '更长的系统提示总是意味着更好的输出吗？', a: '不，制作精良的100令牌系统提示通常会超越一个啰嗦的500令牌提示。质量胜于数量。特异性胜过啰嗦。' }, { q: '什么时候应该使用本地LLM而不是云API？', a: '在以下情况下使用本地LLM：大批量自动化（每天1000+次调用）、要求个人数据不得离开基础设施的GDPR敏感数据、或质量"足够好"的成本关键型流程。在以下情况下使用云API：延迟敏感的应用程序、复杂推理任务、或API成本可忽略的一次性分析。' }, { q: '如何降低我的AI API令牌成本？', a: '七种策略：精简系统提示、限制输出长度、每5轮汇总对话历史、简单任务使用更便宜的模型、避免发送完整对话历史、上传前缩小图像、批量处理测试调用而非手动运行。' }, { q: '典型的AI提示使用多少令牌？', a: '典型提示根据复杂程度使用150-500个令牌。简单问题（5-20个令牌）、中等段落（50-150个令牌）、带示例的完整研究提示（200-600个令牌）。每个提示的令牌数因语言和复杂程度而异。' }, { q: '提示有3000个令牌意味着什么？', a: '3000令牌的提示大致相当于一篇2000字的文章或10页以上的文本。这表明系统提示较长、对话历史完整，或文档上下文较大。为提高效率，可考虑汇总对话历史或精简不必要的上下文。' }, { q: '不同模型的每个AI提示成本是多少？', a: '成本因模型而异：GPT-5.6 mini = 每次提示约$0.00005-0.0001。GPT-5.6 = 约$0.001-0.01。Claude Haiku = 每次提示约$0.00003。Claude Opus = 约$0.005-0.02。Gemini Flash = 约$0.00002。成本取决于提示长度和输出。' }, { q: 'AI提示令牌是如何计算的？', a: '令牌是通过将文本分解为3-4个字符的单位（约3/4个英文单词）来计算的。系统提示、对话历史、图像、附加文件和输出均计入其中。大多数API提供商在响应中显示确切的令牌数。较短的提示和受限的输出可减少令牌使用量。' }, { q: '1000字的提示是多少令牌？', a: '1000字的提示在英语中大约是1200-1500个令牌。其他语言的分词效率较低，可能需要多20-40%的令牌。令牌数取决于所用语言的用词选择和平均词长。' }, { q: '令牌限制是基于单个提示还是整个对话？', a: '令牌限制适用于整个对话历史，包括所有系统提示、之前的消息、检索到的文档和当前提示。速率限制（每分钟令牌数）会在该时间段内的所有API调用中累积，而不仅仅是一个提示。' }, { q: '100万个令牌可以获得多少次提示？', a: '使用100万个令牌：如果每个提示平均150-500个令牌，则可获得2000-6667次提示。GPT-5.6 mini提示（约300个令牌）=约3333次提示。GPT-5.6提示（约500个令牌）=约2000次提示。实际数量取决于提示大小和输出长度。' }, { q: '提示优化能否显著降低API成本？', a: '可以。将500令牌的系统提示精简至300令牌，每次API调用可节省约$0.001。按每天1000次调用计算，每年可节省$365。限制输出长度并每5轮汇总对话历史可将成本降低30-50%。模型选择是最大的杠杆——GPT-5.6 mini的成本比GPT-5.6低33倍。' } ] }, relatedReading: { title: '相关阅读', items: [ '[Fundamentals：更快的AI答案：如何为速度提示](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed)——提示效率直接降低令牌成本', '[Fundamentals：GPT、Claude或Gemini？如何选择合适的模型](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)——模型选择是最大的成本杠杆', '[Fundamentals：上下文窗口解释：为什么AI遗忘](/prompt-engineering/context-windows-explained-why-ai-forgets)——上下文窗口限制在击中令牌或长度限制前可以包含多少历史记录' ] }, sources: { title: '来源和进一步阅读', items: [ '[OpenAI定价](https://openai.com/pricing)', '[Anthropic Claude定价](https://www.anthropic.com/pricing)', '[Google Gemini定价](https://ai.google.dev/pricing)' ] } } as any },
  ko: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: '토큰, 비용 및 제한: 2026년 AI 프롬프팅의 경제학',
      intro: '모든 AI API 호출은 토큰 단위로 측정되고 청구됩니다. 토큰은 모델이 처리할 수 있는 내용과 지불해야 하는 비용을 모두 결정하는 기본 단위입니다. 토큰을 이해하는 것은 효율적이고 비용 효과적인 프롬프팅의 기초입니다.',
      publishDate: '2026-03-22',
      dateModified: '2026-04-12',
      seoTitle: 'AI 프롬프팅 비용 및 토큰 제한 설명 2026',
      metaDescription: '모든 프롬프트는 토큰을 사용합니다. AI 비용과 제한을 제어하는 단위를 이해하십시오. GPT-5.6/Claude/Gemini의 토큰 계산, 가격 책정, 그리고 로컬 LLM 옵션을 알아보십시오.',
      readTime: '13분 읽기',
      toc: [
        { label: '토큰이란 무엇인가?',              anchor: 'what-is-a-token' },
        { label: '토큰 계산 방식',                   anchor: 'how-token-counting-works' },
        { label: '클라우드 제공업체별 가격 비교',     anchor: 'pricing-across-cloud-providers' },
        { label: '요청 속도 제한',                   anchor: 'rate-limits' },
        { label: '프롬프트 설계로 비용 제어하기',     anchor: 'how-prompt-design-controls-costs' },
        { label: '적합한 모델 선택하기',              anchor: 'choosing-the-right-model' },
        { label: '로컬 LLM — 무비용 옵션',           anchor: 'local-llms-zero-cost-option' },
        { label: '지역별 맥락',                      anchor: 'regional-context' },
        { label: '토큰 비용 레시피',                 anchor: 'token-cost-recipes' },
        { label: '흔한 실수들',                      anchor: 'common-mistakes' },
        { label: '관련 읽을거리',                    anchor: 'related-reading' },
        { label: 'FAQ',                             anchor: 'faq' },
      ],
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM 토큰',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '토큰, 비용 및 제한: 2026년 AI 프롬프팅의 경제학',
        description: '토큰이 AI 비용과 제한을 어떻게 결정하는지 알아보십시오. GPT-5.6, Claude, Gemini 및 로컬 모델의 가격 모델, 요청 속도 제한, 지출 최적화 전략을 이해하십시오.',
        datePublished: '2026-03-22',
        dateModified: '2026-04-12',
        proficiencyLevel: 'Intermediate',
        url: 'https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        image: buildOgImageObject(OG_SLUG, 'ko'),
        keywords: ['토큰', 'API 비용', '요청 속도 제한', '프롬프트 엔지니어링', 'GPT-5.6', 'Claude', 'Gemini', '비용 최적화', '로컬 LLM'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5.6' },
          { '@type': 'Thing', name: 'Anthropic Claude Opus 4.8' },
          { '@type': 'Thing', name: 'Google Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'AI 토큰 가격 책정' },
          { '@type': 'Thing', name: 'LLM API 비용' },
          { '@type': 'Thing', name: '토큰 계산' },
          { '@type': 'Thing', name: '요청 속도 제한' },
          { '@type': 'Thing', name: 'AI 비용 최적화' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      supplementalSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '2026년 4월 기준 AI 모델 가격 비교',
        'description': '2026년 4월 기준 주요 AI 모델의 입력 및 출력 토큰 비용',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'OpenAI GPT-5.6', 'description': '입력: $5.00/100만 토큰. 출력: $15.00/100만 토큰.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Anthropic Claude Opus 4.8', 'description': '입력: $3.00/100만 토큰. 출력: $15.00/100만 토큰.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Google Gemini 3.1 Pro', 'description': '입력: $3.50/100만 토큰. 출력: $10.50/100만 토큰.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'OpenAI GPT-5.6 mini', 'description': '입력: $0.15/100만 토큰. 출력: $0.60/100만 토큰. GPT-5.6보다 33배 저렴.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Anthropic Claude Haiku 4.5', 'description': '입력: $0.25/100만 토큰. 출력: $1.25/100만 토큰.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Google Gemini 3.5 Flash', 'description': '입력: $0.075/100만 토큰. 출력: $0.30/100만 토큰. 가장 저렴한 클라우드 옵션.' }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '작업 유형별 AI 모델 선택 — 비용 최적화 가이드',
        description: '출력 품질을 희생하지 않으면서 API 비용을 최소화하기 위해 각 작업 유형에 사용할 AI 모델 (2026년 기준).',
        url: 'https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '간단한 분류 또는 예/아니오 작업',
            description: 'GPT-5.6 mini, Claude Haiku 4.5 또는 Gemini Flash를 사용하십시오. 단순 분류에서 동등한 정확도로 GPT-5.6보다 33배 저렴합니다.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '짧은 사실 기반 질의응답',
            description: 'GPT-5.6 mini 또는 Claude Haiku 4.5를 사용하십시오. 프론티어 모델보다 10~33배 저렴합니다. 조회 작업, 단일 답변 질문, 개체 추출에 적합합니다.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '복잡한 분석 또는 코드 생성',
            description: 'GPT-5.6 또는 Claude Opus 4.8을 사용하십시오. 다단계 추론, 디버깅, 기술적 종합에는 프론티어 수준의 성능이 필요합니다.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '장문 창의적 글쓰기',
            description: 'Claude Opus 4.8 또는 GPT-5.6를 사용하십시오. 두 모델 모두 긴 출력에서 일관된 서사 품질과 문체를 유지하는 데 탁월합니다.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '대용량 비공개 또는 자동화 워크플로',
            description: 'Ollama 또는 LM Studio를 통한 로컬 모델을 사용하십시오. 토큰당 API 비용이 없습니다. VRAM 투자가 필요하며 "충분한" 품질이 허용되는 작업에 적합합니다.',
          },
        ],
      },
      gammaEmbedUrl: '/presentations/tokens-costs-limits-economics-of-ai-prompting-static.html',
      gammaDescription: '아래 슬라이드 덱은 토큰 가격 책정, 요청 속도 제한, 모델 선택, 비용 절감 전략을 다룹니다. AI 토큰 경제학 참조 카드로 PDF를 다운로드하십시오.',
      leadAnswerBlock: '토큰은 AI 모델이 처리하는 가장 작은 텍스트 단위로, 영어에서 약 3~4자 또는 단어의 ¾에 해당합니다. 입력 토큰과 출력 토큰 모두 청구되며, 출력 토큰은 일반적으로 2~5배 더 비쌉니다. 작업에 맞는 모델을 선택하면 비용을 10~50배 절감할 수 있습니다.',
      sections: {
        definition: {
          title: '토큰이란 무엇인가?',
          content: [
            '**토큰은 AI 모델이 처리하는 가장 작은 텍스트 단위로, 약 3~4자 또는 영어 단어의 ¾에 해당합니다.** 영어 텍스트에서 "ChatGPT"는 2개의 토큰으로 계산되며, "Hello, how are you?"는 약 5~6개의 토큰입니다. 다른 언어들은 토큰화 효율이 낮습니다. 독일어나 일본어로 같은 문구는 20~40% 더 많은 토큰을 소비할 수 있습니다. 프롬프트(입력)의 모든 토큰과 모델이 출력하는 모든 토큰에 대해 요금이 청구됩니다. 토큰을 이해하는 것은 [프롬프트 엔지니어링이란 무엇인가](/prompt-engineering/what-is-prompt-engineering)의 기초입니다. 이는 신뢰할 수 있는 출력을 얻기 위해 입력을 구조화하는 실践입니다.',
            '모델은 단어나 문자로 "생각"하지 않습니다. 내부적으로 텍스트를 토큰 ID로 변환하고 수치적으로 처리합니다. 이것이 토큰화가 중요한 이유입니다. 문자 하나를 변경하면 토큰 경계가 바뀔 수 있고, 불필요한 단어가 많은 잘못 구성된 프롬프트는 출력 품질을 개선하지 않으면서 수백 개의 토큰을 낭비할 수 있습니다.',
            '한 문장으로 요약하면: 토큰은 AI 모델이 처리하는 가장 작은 텍스트 단위로, 약 3~4자 또는 영어 단어의 ¾에 해당하며, 입력되는 모든 토큰과 출력되는 모든 토큰에 대해 요금이 청구됩니다.'
          ]
        },
        tldr: {
          title: '핵심 요약',
          isTldr: true,
          items: [
            '토큰은 AI 비용과 처리의 단위입니다. 영어에서 약 3~4자 = 1토큰이며, 다른 언어는 더 많은 토큰이 필요합니다.',
            '입력 토큰과 출력 토큰에 대해 별도로 요금이 청구됩니다. 출력 토큰은 일반적으로 2~5배 더 비쌉니다. 긴 상세 출력에서 비용이 급등합니다.',
            '토큰 계산에는 시스템 프롬프트, 전체 대화 기록, 첨부 파일, 이미지가 포함됩니다. 최신 메시지만이 아닙니다.',
            '요청 속도 제한(분당 요청 수, 분당 토큰 수)은 남용을 방지하고 공정한 리소스 할당을 보장하기 위해 존재합니다. 무료 티어는 엄격한 제한이 있고 유료 티어는 훨씬 높습니다.',
            '작업에 적합한 모델을 사용하면 비용이 10~50배 절감됩니다. GPT-5.6 mini 또는 Claude Haiku 4.5는 GPT-5.6나 Claude Opus 4.8이 필요하지 않은 작업을 처리할 수 있습니다.',
            'Ollama 또는 LM Studio를 통한 로컬 LLM은 토큰당 API 비용이 없지만 VRAM 투자가 필요하며 프론티어 모델보다 성능이 낮습니다.'
          ]
        },
        tokenCounting: {
          title: '토큰 계산 방식',
          content: '**API 호출의 모든 요소 — 시스템 프롬프트, 대화 기록, 새 메시지, 파일, 모델의 출력 — 은 할당량에서 토큰을 소비합니다.** 작은 메시지로 시작한 대화가 5번의 주고받기 후에 갑자기 비용이 높아지는 이유가 여기에 있습니다. 축적된 모든 것에 대해 비용을 지불합니다. [시스템 프롬프트와 사용자 프롬프트](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)의 차이를 이해하는 것이 중요합니다. 두 가지 모두 매 호출마다 청구되기 때문입니다.',
          items: [
            '**시스템 프롬프트:** 메시지당 한 번 계산됩니다. 200단어 시스템 프롬프트 = 모든 API 호출마다 약 250토큰.',
            '**전체 대화 기록:** 명시적으로 요약하거나 제거하지 않는 한 모든 요청에 포함됩니다. 턴당 500토큰인 10턴 대화 = 11번째 턴에 5,000토큰이 다시 계산됩니다.',
            '**입력 메시지:** 그대로 계산됩니다.',
            '**첨부 파일 또는 이미지:** 이미지는 크기와 해상도에 따라 각각 100~2,000토큰을 소비합니다. 대용량 PDF는 수천 토큰을 소비할 수 있습니다.',
            '**모델 출력:** 생성된 응답은 출력 토큰 요금으로 전부 계산됩니다 (일반적으로 입력 요금의 2~5배).',
            '**실제 예시:** 3턴 리서치 대화: 시스템 프롬프트 (300토큰) + 사용자 Q1 (150토큰) + 모델 A1 (200토큰) + 사용자 Q2 (200토큰) + 모델 A2 (300토큰) + 사용자 Q3 (100토큰) = **지금까지 1,250토큰**. Q3을 전송할 때 전체 기록(1,250토큰)에 A3의 출력 비용을 더해서 지불합니다. "짧은" 후속 질문 하나가 전체 이전 대화만큼의 비용이 들 수 있습니다.'
          ]
        },
        pricing: {
          title: '클라우드 제공업체별 가격 비교',
          content: [
            '모델 성능에 따라 가격이 크게 다릅니다. 아래의 모든 수치는 2026년 4월 기준 공개 가격입니다. 출력 토큰은 일반적으로 입력 토큰보다 2~5배 더 비싸다는 점에 유의하십시오. 비용이 가장 빠르게 누적되는 부분입니다. 올바른 모델 선택이 가장 큰 비용 조절 수단입니다. 자세한 비교는 [GPT-5.6, Claude, Gemini 중 선택하는 방법](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)을 참고하십시오.',
            '2026년 4월 기준 가격. 현재 요금을 확인하십시오: [OpenAI 가격](https://openai.com/pricing) · [Anthropic 가격](https://www.anthropic.com/api) · [Google 가격](https://ai.google.dev/pricing)'
          ],
          columns: ['모델', '입력 (100만 토큰당)', '출력 (100만 토큰당)'],
          rows: [
            { '모델': 'OpenAI [GPT-5.6](https://openai.com/chatgpt)', '입력 (100만 토큰당)': '$5.00', '출력 (100만 토큰당)': '$15.00' },
            { '모델': 'Anthropic [Claude Opus 4.8](https://www.anthropic.com/claude)', '입력 (100만 토큰당)': '$3.00', '출력 (100만 토큰당)': '$15.00' },
            { '모델': 'Google [Gemini 3.1 Pro](https://gemini.google.com)', '입력 (100만 토큰당)': '$3.50', '출력 (100만 토큰당)': '$10.50' },
            { '모델': 'OpenAI [GPT-5.6 mini](https://openai.com/chatgpt)', '입력 (100만 토큰당)': '$0.15', '출력 (100만 토큰당)': '$0.60' },
            { '모델': 'Anthropic [Claude Haiku 4.5](https://www.anthropic.com/claude)', '입력 (100만 토큰당)': '$0.25', '출력 (100만 토큰당)': '$1.25' },
            { '모델': 'Google [Gemini 3.5 Flash](https://gemini.google.com)', '입력 (100만 토큰당)': '$0.075', '출력 (100만 토큰당)': '$0.30' },
          ],
          tableFormat: true
        },
        rateLimits: {
          title: '요청 속도 제한',
          content: '**요청 속도 제한은 분당 요청 수(RPM), 분당 처리 토큰 수(TPM), 또는 일일 토큰 수(TPD)에 대한 상한선입니다.** 제공업체들은 남용을 방지하고, 사용자 간 공정한 리소스 할당을 보장하며, 가격 티어를 만들기 위해 제한을 부과합니다. 무료 티어 사용자는 가장 엄격한 제한을 받으며, 유료 티어는 훨씬 높은 처리량을 허용합니다.',
          items: [
            '**분당 요청 수(RPM):** 60초 내에 수행할 수 있는 API 호출 수. 이를 초과하면 요청이 대기열에 들어가거나 거부됩니다.',
            '**분당 토큰 수(TPM):** 총 토큰 처리량. 큰 프롬프트 하나가 몇 초 만에 전체 TPM 할당량을 소비할 수 있습니다.',
            '**제한에 도달하는 일반적인 시나리오:** 빠른 순차 호출(초당 50회 이상)을 수행하는 자동화 파이프라인, 대용량 배치 처리 작업, 또는 급격히 사용량이 증가하는 상황의 무료 티어 사용자.',
            '**일반적인 제한:** 무료 티어: 3~15 RPM, 40k~100k TPM. 유료 티어 1: 500 RPM, 200k~500k TPM. 엔터프라이즈: 3,000+ RPM, 수백만 TPM.',
            '**해결 전략:** 작은 작업을 더 큰 요청으로 묶기(API 호출 횟수 감소), 요청 사이에 지연 추가, 또는 더 높은 티어 계정으로 업그레이드.'
          ]
        },
        promptDesign: {
          title: '프롬프트 설계로 비용 제어하기',
          content: [
            '**PromptQuorum에서 테스트 완료 — GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro에서 시스템 프롬프트 상세도를 달리하여 동일한 리서치 요약 프롬프트 20개 실행:** 500토큰 시스템 프롬프트를 사용할 때, 평균 출력은 450토큰이었고 호출당 평균 비용은 $0.032였습니다. 동일한 지시사항을 200토큰으로 줄인 프롬프트를 사용했을 때, 평균 출력은 460토큰이었고 호출당 비용은 $0.025였습니다. 동일한 출력 품질에서 18% 비용 절감. 이는 [속도를 위한 프롬프팅 방법](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed)과 일치합니다. 효율성은 지연 시간과 비용 모두를 줄입니다.',
            '**프롬프트의 불필요한 모든 토큰은 비용을 낭비합니다. 대화에서 모든 API 호출에 전체 프롬프트가 다시 포함되기 때문에 비용이 더 빠르게 축적됩니다.** 500토큰 시스템 프롬프트를 300토큰으로 줄이면 호출당 $0.001를 절약합니다. 하루 1,000번 호출 시, 하루에 $1, 연간 $365가 절약됩니다.'
          ],
          items: [
            '**컨텍스트를 적극적으로 줄이십시오:** 모델이 이미 알고 있는 내용을 반복하지 마십시오. "사용자가 X를 물었습니다. 저는 Y라고 말했습니다. 이제 Z를 묻습니다" 대신 Z만 포함하십시오.',
            '**명시적인 길이 제한을 사용하십시오:** "3개의 글머리로 답하십시오." 또는 "최대 100단어." 이는 간결함을 강제하고 장황한 출력(더 많은 비용 발생)을 방지합니다.',
            '**시스템 프롬프트의 불필요한 내용을 피하십시오:** 모든 불필요한 단어는 비용이 듭니다. "You are an expert assistant who helps users"는 10토큰입니다. "You are an expert assistant"는 6토큰입니다. 두 표현은 동일한 의미를 전달합니다.',
            '**예시: 과도한 프롬프트 vs 간결한 프롬프트:**',
            '[나쁜 프롬프트] "You are a helpful AI assistant with extensive knowledge across many domains. You help users by providing detailed, comprehensive answers to their questions. Always be thorough and explain your reasoning step by step. Avoid being concise — users appreciate thorough explanations."',
            '[좋은 프롬프트] "You are an expert assistant. Provide accurate, detailed answers. Explain your reasoning."',
            '토큰 차이: 나쁜 프롬프트 = 55토큰, 좋은 프롬프트 = 13토큰. 하루 100번 호출 시: 42 × 100 × 30일 × ($0.005 / 100만 입력 토큰) ≈ 단 하나의 간결한 프롬프트로 월 $0.63 절약.'
          ]
        },
        howToStart: {
          title: 'LLM API 비용 5단계 절감법',
          numberedItems: [
            '모델을 작업 복잡도에 맞추십시오: 간단한 분류 및 질의응답에는 GPT-5.6 mini 또는 Claude Haiku 4.5를 사용하십시오. 프론티어 모델보다 33배 저렴합니다.',
            '5턴마다 대화 기록을 요약하십시오: 모든 호출에 전체 기록이 다시 청구되는 것을 방지합니다 ([생각의 사슬 프롬프팅](/prompt-engineering/chain-of-thought-prompting)과 일치하는 기법입니다. 추론을 미리 구조화하십시오).',
            '출력 길이를 명시적으로 제한하십시오: "3개의 글머리로 답하십시오" 또는 "최대 100단어"는 장황한 토큰 집약적 응답을 방지합니다.',
            '시스템 프롬프트를 필수 내용으로만 줄이십시오: 불필요한 문구를 제거하십시오. 모든 불필요한 단어는 모든 API 호출에 다시 청구됩니다.',
            '대용량 비공개 워크플로에는 Ollama를 통한 로컬 LLM을 테스트하십시오: 프론티어 모델 성능을 포기하는 대신 토큰당 비용이 없습니다.',
          ],
        },
        modelSelection: {
          title: '적합한 모델 선택하기',
          content: '**모든 작업에 OpenAI GPT-5.6나 Anthropic Claude Opus가 필요하지는 않습니다.** 간단한 분류, 사실 기반 질의응답, 많은 자동화 작업은 더 저렴한 모델에서 완벽하게 실행됩니다. 비용 차이는 극적입니다.',
          columns: ['작업 유형', '권장 모델', 'GPT-5.6 대비 비용'],
          rows: [
            { '작업 유형': '간단한 분류 / 예-아니오', '권장 모델': '[GPT-5.6 mini](https://openai.com/chatgpt), [Claude Haiku 4.5](https://www.anthropic.com/claude), 또는 [Gemini Flash](https://gemini.google.com)', 'GPT-5.6 대비 비용': '33배 저렴' },
            { '작업 유형': '짧은 사실 기반 질의응답', '권장 모델': 'GPT-5.6 mini 또는 Claude Haiku 4.5', 'GPT-5.6 대비 비용': '10~33배 저렴' },
            { '작업 유형': '복잡한 분석 또는 코드', '권장 모델': '[GPT-5.6](https://openai.com/chatgpt) 또는 [Claude Opus 4.8](https://www.anthropic.com/claude)', 'GPT-5.6 대비 비용': '기준' },
            { '작업 유형': '장문 창의적 글쓰기', '권장 모델': 'Claude Opus 4.8 또는 GPT-5.6', 'GPT-5.6 대비 비용': '기준' },
            { '작업 유형': '대용량 비공개 워크플로', '권장 모델': '[Ollama](https://ollama.com/library/llama3.3)를 통한 로컬 모델', 'GPT-5.6 대비 비용': 'API 비용 없음' },
          ],
          tableFormat: true
        },
        localLLMs: {
          title: '로컬 LLM — 무비용 옵션',
          content: '**Ollama 또는 LM Studio를 통한 로컬 모델은 토큰당 API 비용이 없습니다. 하드웨어(VRAM 및 전기) 비용만 지불합니다.** 따라서 대용량 워크플로, 개인정보 보호가 중요한 애플리케이션, 비용이 중요한 파이프라인에 이상적입니다. 절충점은 성능(로컬 모델은 프론티어 모델에 뒤처짐)과 지연 시간(소비자용 VRAM에서 실행하면 더 느림)입니다. 로컬 배포를 계획할 때는 [컨텍스트 윈도우 이해](/prompt-engineering/context-windows-explained-why-ai-forgets)가 필수입니다. VRAM이 지원할 수 있는 컨텍스트 윈도우 크기를 제한하기 때문입니다.',
          items: [
            '**하드웨어 비용:** LLaMA 3.1 7B와 같은 Ollama 모델은 약 8GB VRAM이 필요하고, 13B 모델은 약 16GB, 70B 모델은 40GB 이상이 필요합니다. GPU 메모리가 제한 요인입니다.',
            '**성능 절충점:** 로컬 모델은 분류, 요약, 반복 작업에 탁월합니다. GPT-5.6나 Claude Opus 4.8에 비해 다단계 추론, 코드 생성, 창의적 글쓰기에서 어려움을 겪습니다.',
            '**지연 시간 절충점:** 클라우드 모델은 500ms~2초 내에 응답합니다. 소비자용 하드웨어의 로컬 모델: 모델 크기와 시스템 사양에 따라 2~10초.',
            '**로컬 사용 시기:** 대용량 자동화(일 1,000회 이상 호출), GDPR 민감 데이터(외부 API 호출 없이 온디바이스 처리로 혜택받는 EU 사용자의 GDPR 개인 데이터 처리), 또는 품질이 "충분"한 비용 중요 워크플로.',
            '**클라우드 사용 시기:** 지연 시간에 민감한 애플리케이션, 추론이 필요한 작업, 또는 API 비용이 무시할 수 있는 일회성 분석.'
          ]
        },
        regionalContext: {
          title: '지역별 맥락',
          content: [
            '**EU / GDPR** AI API를 통해 개인 데이터를 처리하는 EU 조직의 경우, 토큰 비용에는 가격표에 보이지 않는 준수 비용이 포함됩니다. 클라우드 API로 전송된 각 토큰은 GDPR 제28조에 따라 제3자가 처리하는 개인 데이터로, EU 외 제공업체의 경우 데이터 처리 계약과 제46조에 따른 이전 메커니즘이 필요합니다.',
            'Ollama를 통한 로컬 LLM은 이를 완전히 제거합니다. 고객 데이터, 지원 티켓, 또는 내부 문서를 처리하는 EU 팀의 경우: 클라우드 API 호출의 실제 비용에는 외부 데이터 전송의 준수 오버헤드가 포함됩니다. 규모에 따라 하드웨어 투자를 고려하더라도 로컬 추론이 경제적으로 경쟁력을 가질 수 있습니다.',
            'BSI IT-Grundschutz 지침에 따른 독일 조직은 AI 처리 비용과 데이터 흐름을 문서화해야 합니다. 적절한 접근 통제와 함께 보관되는 경우, 클라우드 API의 토큰 로그가 이 요건을 충족합니다.',
            '**일본 (METI)** CJK 스크립트에 대한 토크나이저 비효율로 인해 일본어 텍스트는 동등한 영어 텍스트보다 20~40% 더 많은 토큰이 필요합니다. 1,000단어 일본어 문서는 GPT-5.6에서 약 $0.007이며, 동일한 영어 콘텐츠는 $0.005입니다. 일본어 AI 워크플로의 경우, Ollama를 통한 Qwen3 모델이 토큰 효율이 훨씬 높습니다. 네이티브 CJK 토큰화로 일본어 토큰 수가 30~40% 감소하여 호출당 비용이 직접적으로 줄어듭니다.',
            '**중국** 중국의 데이터 보안법(数据安全法)에 따라, 비즈니스 데이터를 해외 클라우드 AI API로 전송하려면 데이터 현지화 준수 검토가 필요합니다. 중국 기업 팀의 경우, Qwen3(알리바바) 로컬 추론은 국경 간 데이터 전송 비용과 준수 위험을 동시에 제거합니다. 하루 1,000회 이상 API 호출 시, 로컬 추론 서버의 하드웨어 상각 비용은 일반적으로 6~12개월 내에 API 요금보다 낮아집니다.',
          ]
        },
        promptquorumHelps: {
          title: 'PromptQuorum이 토큰 비용 관리를 돕는 방법',
          content: [
            '**PromptQuorum은 백엔드 LLM과 프론트엔드 LLM(프롬프트 질문에 답하는 선택한 모델) 두 가지를 사용합니다.** 백엔드 LLM은 프롬프트를 최적화하고 여러 프론트엔드 모델에 대해 Quorum 합의 분석을 실행합니다. 단일 모델 채팅 인터페이스와 달리, PromptQuorum은 토큰 사용량을 가시적이고 실행 가능하게 만듭니다.',
            '**백엔드 LLM 토큰은 항상 표시됩니다.** 프론트엔드 토큰 가시성은 모델에 접근하는 방식에 따라 다릅니다:',
            '- **공개 인터페이스** (Copilot, 공개 Claude 웹 채팅): 프론트엔드 토큰 미표시 — 백엔드 토큰만 표시됩니다.',
            '- **로컬 모델** (LM Studio, Ollama): 프론트엔드 토큰 표시됨 — 하드웨어에서 실행되며 PromptQuorum이 토큰 사용량을 직접 확인합니다.',
            '- **API** (OpenAI, Anthropic): 경우에 따라 다릅니다. 직접 API 통합 시 프론트엔드 토큰이 표시됩니다. 제3자 엔드포인트나 공개 인터페이스를 통한 경우 프론트엔드 토큰이 표시되지 않습니다.',
            '**PromptQuorum에서 테스트 완료 — GPT-5.6와 GPT-5.6 mini로 동일한 리서치 요약 프롬프트 20개 발송:** 20개 작업 중 17개에서 출력 품질이 일치했습니다. 비용 차이: 프롬프트당 $0.003(GPT-5.6) 대 $0.00007(mini) — 43배 비용 절감. GPT-5.6가 더 나은 성능을 보인 3개 작업은 문서 전반의 다단계 추론을 포함했습니다.'
          ]
        },
        recipes: {
          title: '토큰 비용 레시피',
          content: '특정 워크플로의 비용 최적화를 위한 시작점으로 이 템플릿을 사용하십시오.',
          items: [
            '**"빠른 조회 / 예-아니오 작업":** GPT-5.6 mini 또는 Haiku를 사용하십시오. 최소 시스템 프롬프트(50토큰 이하). 대화 기록 없음. 출력을 1~2문장으로 제한하십시오. 작업당 총 비용: 약 $0.00001~0.0001.',
            '**"긴 리서치 작업 (5~10턴)":** Claude Opus 4.8을 사용하십시오(긴 컨텍스트에 탁월). 5턴마다 대화를 요약하고 기록을 요약으로 교체하십시오(토큰 70% 감소). 비용: 리서치 세션당 약 $0.01~0.05.',
            '**"자동화 파이프라인 / 배치 처리":** 필터링 또는 분류에 GPT-5.6 mini를 사용하십시오(33배 저렴). 경계선 사례의 최종 종합에만 GPT-5.6로 에스컬레이션하십시오. API가 지원하는 경우 컨텍스트 캐싱을 재사용하기 위해 유사한 프롬프트를 묶으십시오.',
            '**"개인정보 보호 민감 워크플로":** 로컬에서 실행되는 Ollama 또는 LM Studio로 라우팅하십시오. 컨텍스트 윈도우 관리: 8GB VRAM의 경우 4k~8k 토큰, 16GB의 경우 16k~32k. API 비용 없음. 준수를 위해 약간 낮은 품질을 허용하십시오.',
            '**"모델 간 출력 비교":** 잘 구조화된 프롬프트 하나를 GPT-5.6, Claude Opus 4.8, Claude Haiku 4.5에 동시에 전송하십시오. 품질 + 비용을 비교하십시오. 품질 기준을 충족하는 가장 저렴한 모델을 선택하십시오. 탐색 비용: 약 $0.001. 지속 비용: 33~43배 절감.'
          ]
        },
        mistakes: {
          title: '흔한 실수들',
          content: '다음 토큰 낭비 패턴을 피하십시오.',
          items: [
            '**모든 호출에 전체 대화 기록 전송:** 10턴 후 대화가 5,000토큰인 경우, 새로운 내용이 200토큰에 불과해도 11번째 턴에 5,000토큰을 다시 지불합니다. 해결책: 5턴마다 요약하거나 API가 지원하는 경우 프롬프트 캐싱을 사용하십시오.',
            '**간단한 작업에 고성능 모델 사용:** "이 이메일에서 날짜를 추출하십시오"에 GPT-5.6를 사용하지 마십시오. GPT-5.6 mini 또는 Haiku를 사용하십시오. 이 작업만으로도 비용 차이: 33배.',
            '**출력 길이 제한 없음:** 모호한 "X에 대해 알려주십시오" 프롬프트는 500토큰을 반환할 수 있지만, "50단어로 요약하십시오"는 60토큰을 반환합니다. 장황한 응답에 8배 더 많은 비용을 지불합니다.',
            '**모든 호출에 긴 시스템 프롬프트 반복:** 시스템 프롬프트가 500토큰이고 100번 API 호출하면, 캐싱이나 재사용이 없으면 50,000토큰이 낭비됩니다. 시스템 프롬프트 템플릿이나 요청 수준 캐싱을 사용하십시오.',
            '**이미지 토큰 간과:** 단일 고해상도 이미지는 해상도와 내용 밀도에 따라 500~2,000토큰을 소비할 수 있습니다. 업로드 전에 이미지를 축소하거나 관련 영역으로 자르십시오.',
            '**일괄 처리 대신 수동 테스트 호출 실행:** 프롬프트의 20가지 변형을 테스트하면 단일 호출 토큰 비용의 20배가 듭니다. 배치 API 또는 PromptQuorum의 다중 모델 비교를 사용하여 한 번에 모든 변형을 테스트하십시오.',
            '**대화 도중 모델 전환:** 클라우드 API(OpenAI, Anthropic)는 모델 간에 대화 컨텍스트를 이전하지 않습니다. 다른 모델로 대화를 재시작하면 모든 이전 메시지가 다시 전송됩니다. 대화당 하나의 모델을 사용하십시오.'
          ]
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'AI에서 토큰이란 무엇입니까?',
              a: '토큰은 AI 모델이 처리하는 가장 작은 텍스트 단위입니다. 약 3~4자 또는 영어 단어의 ¾에 해당합니다. "ChatGPT"는 2개의 토큰으로 계산됩니다. 모든 입력 토큰과 출력 토큰에 대해 요금이 청구되며, 출력 토큰은 일반적으로 입력 토큰보다 2~5배 더 비쌉니다.'
            },
            {
              q: 'GPT-5.6의 토큰당 비용은 얼마입니까?',
              a: '2026년 4월 기준: GPT-5.6는 100만 입력 토큰당 $5.00, 100만 출력 토큰당 $15.00입니다. GPT-5.6 mini는 100만 입력 토큰당 $0.15, 100만 출력 토큰당 $0.60으로 전체 GPT-5.6 성능이 필요하지 않은 작업에서 33배 더 저렴합니다.'
            },
            {
              q: '요청 속도 제한은 어떻게 작동합니까?',
              a: '요청 속도 제한은 분당 요청 수(RPM)와 분당 토큰 수(TPM)를 제한합니다. 무료 티어: 3~15 RPM, 40k~100k TPM. 유료 티어: 500 RPM, 200k~500k TPM. 엔터프라이즈: 3,000+ RPM. 해결 방법: 작은 작업을 더 큰 요청으로 묶기, 호출 사이에 지연 추가, 또는 더 높은 티어로 업그레이드.'
            },
            {
              q: '일반적인 기사나 보고서는 몇 개의 토큰입니까?',
              a: '1,000단어 기사는 약 1,200~1,500토큰입니다. 10페이지 PDF는 4,000~6,000토큰입니다. 단일 고해상도 이미지는 해상도와 내용 밀도에 따라 500~2,000토큰입니다.'
            },
            {
              q: '짧은 프롬프트를 사용했는데도 API 청구액이 예상보다 높은 이유는 무엇입니까?',
              a: '세 가지 일반적인 원인: (1) 모든 호출에 전체 대화 기록을 전송하고 있습니다. 5턴마다 요약하십시오. (2) 시스템 프롬프트가 깁니다. 필수 내용으로 줄이십시오. (3) 간단한 작업에 강력한 모델을 사용하고 있습니다. 분류 또는 짧은 질의응답에는 GPT-5.6 mini 또는 Haiku로 전환하십시오.'
            },
            {
              q: '긴 시스템 프롬프트가 항상 더 나은 출력을 의미합니까?',
              a: '아닙니다. 잘 만들어진 100토큰 시스템 프롬프트가 장황한 500토큰 프롬프트보다 더 좋은 성능을 보이는 경우가 많습니다. 품질이 양보다 중요합니다. 구체성이 장황함보다 중요합니다.'
            },
            {
              q: '클라우드 API 대신 로컬 LLM을 언제 사용해야 합니까?',
              a: '로컬 LLM 사용 시기: 대용량 자동화(일 1,000회 이상 호출), 인프라 외부로 개인 데이터가 유출되지 않아야 하는 GDPR 민감 데이터, 또는 품질이 충분한 비용 중요 파이프라인. 클라우드 API 사용 시기: 지연 시간에 민감한 애플리케이션, 복잡한 추론 작업, 또는 API 비용이 무시할 수 있는 일회성 분석.'
            },
            {
              q: 'AI API 토큰 비용을 어떻게 줄일 수 있습니까?',
              a: '일곱 가지 전략: 시스템 프롬프트 줄이기, 출력 길이 제한하기, 5턴마다 대화 기록 요약하기, 간단한 작업에는 저렴한 모델 사용하기, 전체 대화 기록 전송 피하기, 업로드 전 이미지 축소하기, 수동 실행 대신 테스트 호출 묶기.'
            },
            {
              q: '일반적인 AI 프롬프트는 몇 개의 토큰을 사용합니까?',
              a: '일반적인 프롬프트는 복잡도에 따라 150~500토큰을 사용합니다. 간단한 질문(5~20토큰), 중간 단락(50~150토큰), 예시가 있는 전체 리서치 프롬프트(200~600토큰). 토큰 수는 언어와 복잡도에 따라 다릅니다.'
            },
            {
              q: '프롬프트가 3,000토큰이라는 것은 무엇을 의미합니까?',
              a: '3,000토큰 프롬프트는 약 2,000단어 기사 또는 10페이지 이상의 텍스트입니다. 긴 시스템 프롬프트, 완전한 대화 기록, 또는 대용량 문서 컨텍스트를 나타냅니다. 효율성을 위해 대화 기록 요약 또는 불필요한 컨텍스트 줄이기를 고려하십시오.'
            },
            {
              q: '다양한 모델에서 각 AI 프롬프트의 비용은 얼마입니까?',
              a: '모델별 비용: GPT-5.6 mini = 프롬프트당 약 $0.00005~0.0001. GPT-5.6 = 약 $0.001~0.01. Claude Haiku = 프롬프트당 약 $0.00003. Claude Opus = 약 $0.005~0.02. Gemini Flash = 약 $0.00002. 비용은 프롬프트 길이와 출력에 따라 다릅니다.'
            },
            {
              q: 'AI 프롬프트 토큰은 어떻게 계산됩니까?',
              a: '토큰은 텍스트를 3~4자 단위(영어 단어의 약 ¾)로 분리하여 계산됩니다. 시스템 프롬프트, 대화 기록, 이미지, 첨부 파일, 출력이 모두 계산됩니다. 대부분의 API 제공업체는 응답에서 정확한 토큰 수를 표시합니다. 짧은 프롬프트와 제한된 출력으로 토큰 사용량을 줄일 수 있습니다.'
            },
            {
              q: '1,000단어 프롬프트는 몇 개의 토큰입니까?',
              a: '1,000단어 프롬프트는 영어에서 약 1,200~1,500토큰입니다. 다른 언어들은 토큰화 효율이 낮아 20~40% 더 많은 토큰이 필요할 수 있습니다. 토큰 수는 단어 선택과 사용 언어의 평균 단어 길이에 따라 다릅니다.'
            },
            {
              q: '토큰 제한은 단일 프롬프트 기준입니까, 아니면 전체 대화 기준입니까?',
              a: '토큰 제한은 모든 시스템 프롬프트, 이전 메시지, 검색된 문서, 현재 프롬프트를 포함한 전체 대화 기록에 적용됩니다. 요청 속도 제한(분당 토큰)은 하나의 프롬프트만이 아니라 해당 시간대의 모든 API 호출에 걸쳐 누적됩니다.'
            },
            {
              q: '100만 토큰으로 몇 개의 프롬프트를 처리할 수 있습니까?',
              a: '100만 토큰으로: 각 프롬프트가 평균 150~500토큰인 경우 2,000~6,667개의 프롬프트. GPT-5.6 mini 프롬프트(약 300토큰) = 약 3,333개. GPT-5.6 프롬프트(약 500토큰) = 약 2,000개. 실제 수는 프롬프트 크기와 출력 길이에 따라 다릅니다.'
            },
            {
              q: '프롬프트 최적화가 API 비용을 크게 줄입니까?',
              a: '네. 500토큰 시스템 프롬프트를 300토큰으로 줄이면 API 호출당 약 $0.001가 절약됩니다. 하루 1,000회 호출 시 연간 $365가 절약됩니다. 출력 길이 제한과 5턴마다 대화 기록 요약으로 비용이 30~50% 줄어듭니다. 모델 선택이 가장 큰 레버입니다. GPT-5.6 mini는 GPT-5.6보다 33배 저렴합니다.'
            },
          ]
        },
        relatedReading: {
          title: '관련 읽을거리',
          items: [
            '[LLM 실제 작동 원리](/prompt-engineering/how-llms-actually-work) — 이 비용을 구동하는 토큰화, 컨텍스트 윈도우, 추론 파라미터',
            '[시스템 프롬프트 vs 사용자 프롬프트](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 시스템 프롬프트 길이가 모든 API 호출의 토큰 비용에 직접 미치는 영향',
            '[컨텍스트 윈도우 설명](/prompt-engineering/context-windows-explained-why-ai-forgets) — "중간에서 길을 잃는" 문제와 컨텍스트 윈도우 크기가 비용과 품질에 미치는 영향',
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) — 대용량 또는 개인정보 보호 민감 워크플로를 위한 무비용 로컬 추론 설정',
            '[LLM 양자화 설명](/local-llms/llm-quantization-explained) — 클라우드 API 비용을 대체하는 로컬 모델의 RAM 요구 사항',
            '[2026년 최고의 로컬 LLM](/local-llms/best-local-llms-2026) — 특정 작업 유형에서 클라우드 API를 대체할 수 있는 로컬 모델'
          ]
        },
        sources: {
          title: '출처 및 추가 읽을거리',
          items: [
            '[OpenAI 가격](https://openai.com/pricing)',
            '[Anthropic Claude 가격](https://www.anthropic.com/pricing)',
            '[Google Gemini 가격](https://ai.google.dev/pricing)'
          ]
        }
      }
    },
  };
