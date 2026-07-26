import type { Language } from '@/lib/blog/blogContent'
import type { PEArticle } from '@/lib/prompt-engineering/types'
import { CLOUD_MODELS, LOCAL_MODELS, CUTOFF_DATA_LAST_VERIFIED } from '@/lib/shared/cutoff-data'
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('knowledge-cutoffs-and-geo');

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI Knowledge Cutoffs, Live Search, and GEO: The Complete Guide',
    seoTitle: 'AI Knowledge Cutoff Dates & GEO Strategy 2026 — Local LLM Focus',
    intro: '**Every AI model has a knowledge cutoff date — a hard boundary after which its training data ends. But cloud and local models handle this limit in fundamentally different ways.** This guide explains the cutoff vs. live-search distinction, maps each major model\'s behavior, and draws out the strategic implications for users and for companies that want to appear in AI-generated answers — including the critical insight that local LLMs require a completely different GEO strategy than cloud models.',
    metaDescription: 'Complete guide to AI knowledge cutoffs: verified dates for Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi — plus GEO strategy for appearing in cloud AI vs local LLMs. Local models need RAG, not SEO.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-en.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI Knowledge Cutoff',
    audience: 'Users, product teams, and marketers who need to understand where AI models get their information — and what to do about it',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**An AI knowledge cutoff is the date after which the model has no training data.** Cloud models partially compensate via built-in web search (ChatGPT → Bing, Gemini → Google, Grok → X). Local LLMs have no search layer — their cutoff is absolute. For GEO strategy: to appear in cloud AI, optimize for search. To appear in local AI, build RAG pipelines — SEO alone cannot reach a model that never searches the web.',
    quickFacts: [
      '**6 cloud models** covered — verified cutoff dates with primary source links',
      '**6 local/open-weight models** covered — all have "None" for search layer',
      '**Gemma 3 27B** has the earliest verified cutoff among current local models: August 2024',
      '**Phi-4** has a June 2024 cutoff — the second-earliest verified among locals',
      '**Grok 4.3** is the only cloud model whose default search layer is a social platform (X/Twitter) rather than general web',
      '**GEO implication**: companies that deploy Llama/Qwen internally can only be reached via the RAG pipelines those companies build themselves',
    ],
    toc: [
      { label: 'Key Takeaways', anchor: 'key-takeaways' },
      { label: 'The Invisible Limit: What a Cutoff Actually Is', anchor: 'the-invisible-limit' },
      { label: 'Cutoff vs Live Search: the Critical Distinction', anchor: 'cutoff-vs-live-search' },
      { label: 'The Full Data Table: All Models', anchor: 'full-model-table' },
      { label: 'The Local LLM Problem: Running on a Frozen Brain', anchor: 'local-llm-problem' },
      { label: 'Implications for Users', anchor: 'implications-for-users' },
      { label: 'Implications for Companies: GEO Strategy', anchor: 'geo-strategy' },
      { label: 'The GEO Solution: Building a Moat', anchor: 'geo-solution' },
      { label: 'FAQ', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'AI Knowledge Cutoffs, Live Search, and GEO: The Complete Guide',
      description: 'Complete guide to AI knowledge cutoff dates with verified data for all major cloud and local models, plus GEO strategy implications — including why local LLMs require RAG, not SEO.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'en',
      keywords: [
        'AI knowledge cutoff', 'knowledge cutoff date', 'local LLM cutoff', 'GEO strategy',
        'generative engine optimization', 'RAG vs SEO', 'ChatGPT knowledge cutoff',
        'Claude knowledge cutoff', 'Llama cutoff', 'Gemma cutoff', 'Phi-4 cutoff',
        'AI training cutoff 2026', 'AI live search', 'Bing AI search', 'local LLM limitations',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'en'),
      url: 'https://www.promptquorum.com/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI knowledge cutoff date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI knowledge cutoff date is the date after which the model\'s training data ends. The model has no information about events, products, research, or any other content published after this date. Cloud models can partially compensate via built-in web search; local LLMs cannot — their cutoff is absolute.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does ChatGPT seem to know about recent events even though its base model has a training cutoff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (the product) searches Bing by default in paid tiers and augments its responses with current search results. This means it can answer factual questions about recent events even though the underlying model\'s training data has a fixed cutoff (GPT-5.5 training cutoff is Aug 2025; legacy GPT-4o ends Oct 2023). The training cutoff still limits contextual understanding of post-cutoff topics.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do local LLMs like Llama and Qwen ever receive knowledge updates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A local LLM\'s knowledge is permanently frozen at its training cutoff. When a new model version is released (e.g. Llama 4 Scout replacing Llama 3.3), it has a new cutoff — but the running model on your machine does not update itself. To access current information, you must build a RAG (Retrieval-Augmented Generation) pipeline that fetches documents at query time and injects them into the model\'s context window.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is GEO and how does it relate to knowledge cutoffs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO (Generative Engine Optimization) is the practice of making your brand or content appear in AI-generated answers. For cloud AI models, GEO overlaps with SEO — if your content ranks well in Bing, Google, or X search, it can be retrieved and cited by ChatGPT, Gemini, or Grok. For local LLMs, GEO through search is impossible because the model never searches the web. The only way to reach a local LLM deployment is via RAG pipelines built by the organization running the model.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI model has the most recent knowledge cutoff date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Among verified primary-source cutoffs: Claude Opus 4.8 has the most recent reliable cutoff at January 2026. GPT-5.5 is August 2025. Grok 4.3 is November 2024. Gemini 3.1 Pro is January 2025. DeepSeek-V3 is July 2024. Gemma 3 27B is August 2024. Phi-4 is June 2024. GPT-4o (legacy) is October 2023. Several current models including Llama 4, Qwen3, and Mistral Large have not publicly disclosed exact cutoff dates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use SEO to appear in Llama or Qwen answers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Search engine optimization cannot influence a locally-run LLM because the model never performs a web search. To appear in local LLM outputs, you must either: (1) have been in the model\'s training data before its cutoff, or (2) be included via RAG pipelines built by whoever is deploying the model. This is a fundamentally different channel from traditional SEO or cloud AI GEO.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which cloud AI models search the live web by default?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT uses Bing by default (paid tiers). Gemini 3.1 Pro uses Google Search by default. Grok 4.3 searches X (Twitter) by default. Perplexity is web-search-native for every query. Claude requires explicit developer tool activation and does not search by default. DeepSeek and Mistral Large have no default search. All local LLMs (Llama, Qwen, Gemma, Phi, Mistral open weights) have no search capability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I need current information from a local LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Build a RAG (Retrieval-Augmented Generation) pipeline. A RAG system retrieves relevant current documents — from a web search, internal database, or document store — at query time and injects them into the LLM\'s context window before generating a response. Popular local RAG tools include LlamaIndex, LangChain, and Ollama with a retrieval layer. The LLM then reasons over the injected documents rather than relying solely on frozen training data.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Every AI model has a knowledge cutoff — a hard date after which its training data ends and it has no awareness of events, products, or information',
          'Cloud models (ChatGPT, Gemini, Grok) layer live web search on top of their training data; this partially overrides the cutoff for factual queries',
          'Local LLMs (Llama, Qwen, Gemma, Phi, open-weight Mistral) have NO search layer — the cutoff is absolute and cannot be overridden without building a RAG system',
          'For GEO (Generative Engine Optimization): appearing in cloud AI requires traditional search optimization (Bing, Google, X); appearing in local AI requires RAG pipelines — SEO cannot reach a model that never touches the web',
          'Verified cutoffs: Claude Opus 4.8 = Jan 2026 (reliable); GPT-5.5 = Aug 2025; Gemini 3.1 Pro = Jan 2025; Grok 4.3 = Nov 2024; Gemma 3 27B = Aug 2024; DeepSeek-V3 = Jul 2024; Phi-4 = Jun 2024; GPT-4o (legacy) = Oct 2023 (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.)',
          'Several major models — Llama 4, Qwen3, Mistral Large 3 — have not publicly disclosed exact cutoff dates',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'The Invisible Limit: What a Knowledge Cutoff Actually Is',
        content: [
          '<strong>A knowledge cutoff date is the date after which an AI model received no more training data.</strong> The model has read enormous quantities of text — web pages, books, code, research papers — up to that date, and absolutely nothing after it. Events, product launches, new research, price changes, company rebrands, or any other development that occurred after the cutoff is invisible to the model.',
          'This creates a systematic failure mode that users often miss: the AI gives confident, well-structured answers about topics it has no knowledge of, because it doesn\'t know what it doesn\'t know. Ask a model with a 2023 cutoff about a 2025 product and it will either confabulate (invent plausible-sounding fabrications), correctly acknowledge ignorance, or — most dangerously — give an answer based on an earlier version of the product that is now significantly outdated.',
          'The confusion is compounded by the fact that many cloud products now layer live search on top of their base models, making the cutoff invisible to casual users. When ChatGPT answers a question about today\'s news, it is using Bing — not its training data. Strip that search layer away and the model would be working from knowledge that is months or years old.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Quick Reference',
            text: 'Need just the cutoff dates table? See the <a href="/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">AI Knowledge Cutoff Dates Cheat Sheet</a> — a scannable reference table for all major models.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'Cutoff vs Live Search: the Distinction That Changes Everything',
        content: [
          '<strong>The most important distinction in understanding AI knowledge limits is between the training cutoff (a model property) and live search (a product capability).</strong> These are often confused because cloud AI products blend both seamlessly.',
          'A <strong>training cutoff</strong> is baked into the model weights. It cannot be changed without retraining or fine-tuning the model. Every copy of GPT-4o — whether running through ChatGPT, the API, or any third-party tool — has the same October 2023 cutoff.',
          'A <strong>live search layer</strong> is an external tool integrated at the product level. When ChatGPT needs current information, it queries Bing\'s API, gets current results, and synthesizes them with its reasoning capabilities. This happens at inference time and can be toggled on or off by the product team.',
        ],
        columns: ['Model / Product', 'Search Layer', 'Search Trigger', 'Notes'],
        rows: [
          { 'Model / Product': 'GPT-5.5 (ChatGPT)', 'Search Layer': 'Bing', 'Search Trigger': 'Automatic — model decides', 'Notes': 'Default on for ChatGPT Plus/Pro; off for raw API calls' },
          { 'Model / Product': 'Gemini 3.1 Pro', 'Search Layer': 'Google Search', 'Search Trigger': 'Automatic — model decides', 'Notes': 'Google Grounding API available for Vertex AI developers' },
          { 'Model / Product': 'Grok 4.3 (X.com)', 'Search Layer': 'X (Twitter)', 'Search Trigger': 'Automatic — model decides', 'Notes': 'DeepSearch = broader web search, opt-in' },
          { 'Model / Product': 'Perplexity', 'Search Layer': 'Multi-source web', 'Search Trigger': 'Always — every query', 'Notes': 'Search-first by design; cites sources' },
          { 'Model / Product': 'Claude (Anthropic)', 'Search Layer': 'Brave / Web (tool)', 'Search Trigger': 'Developer opt-in only', 'Notes': 'Not on by default; requires API tool configuration' },
          { 'Model / Product': 'DeepSeek (cloud)', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No search layer; cutoff is hard limit' },
          { 'Model / Product': 'Mistral (cloud)', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No search layer; cutoff is hard limit' },
          { 'Model / Product': 'All local LLMs', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No internet access by default; RAG required for currency' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-en.png',
        imageCaption: 'Cutoff vs Live Search -- Which AI systems search the web',
      },
      full_table: {
        id: 'full-model-table',
        title: 'Full Verified Cutoff Data: All Major Models',
        content: [
          'The table below uses only primary-source data — model cards, official documentation, and peer-reviewed technical reports. Where no primary source exists, the cutoff is listed as "Not publicly disclosed" rather than estimated.',
          '<strong>Cloud models:</strong>',
        ],
        columns: ['Model', 'Vendor', 'Cutoff Date', 'Verified', 'Default Search', 'Search Layer'],
        rows: CLOUD_MODELS.map(m => ({
          'Model': m.modelName,
          'Vendor': m.vendor,
          'Cutoff Date': m.cutoffDate,
          'Verified': m.cutoffVerified ? '✓' : '—',
          'Default Search': m.hasLiveSearchDefault ? 'Yes' : (m.searchLayer === 'Tool-use only' ? 'Tool-use only' : 'No'),
          'Search Layer': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Among cloud models, only Claude requires explicit developer configuration for web search — all others have live search on by default for end users.',
          },
          {
            type: 'in-plain-terms',
            text: 'Cloud AI models are like researchers who can look things up between answering questions. Local AI models are like researchers who have been completely offline since a fixed date.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'Local / Open-Weight Models: Verified Cutoff Dates',
        content: [
          '<strong>Local open-weight models — all with "None" for search:</strong>',
        ],
        columns: ['Model', 'Vendor', 'Cutoff Date', 'Verified', 'Deployment', 'License'],
        rows: LOCAL_MODELS.map(m => ({
          'Model': m.modelName,
          'Vendor': m.vendor,
          'Cutoff Date': m.cutoffDate,
          'Verified': m.cutoffVerified ? '✓ Primary source' : '— Not disclosed',
          'Deployment': m.deployment,
          'License': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'Key insight',
            text: 'Every local model in this table has "None" for search. This is not a limitation of specific models — it is a structural property of locally-deployed LLMs. They have no network access unless explicitly programmed.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'The Local LLM Problem: Running on a Frozen Brain',
        content: [
          '<strong>When you run a local LLM — whether via Ollama, LM Studio, llama.cpp, or any other runner — you are running a model whose knowledge is completely frozen.</strong> Not "a bit outdated." Not "mostly current." Completely frozen at a fixed date.',
          'This is not just an inconvenience. It is a fundamental architectural property. There is no phone-home, no background update, no model that silently refreshes its knowledge. The weights on disk are the weights — they encode everything the model knows, and those weights do not change between runs.',
          'This creates specific, predictable failure patterns. A locally-run model asked about a company that rebranded after its cutoff will use the old name. A model asked about a product launched after its cutoff will either say it doesn\'t know, or — more problematically — hallucinate a plausible description of what such a product might be like.',
          '<strong>The thousands of applications built on local LLMs — internal chatbots, code assistants, document analyzers — all share this frozen-knowledge problem.</strong> Any organization deploying Llama, Qwen, Gemma, or Phi internally is running software that literally cannot know about anything that happened after the model\'s training cutoff, unless they build a RAG system on top.',
        ],
        columns: ['Scenario', 'Cloud LLM with Search', 'Local LLM without RAG'],
        rows: [
          { 'Scenario': 'Ask about today\'s news', 'Cloud LLM with Search': 'Retrieves from Bing/Google; current answer', 'Local LLM without RAG': 'Admits ignorance or hallucinates' },
          { 'Scenario': 'Ask about a 2025 product launch', 'Cloud LLM with Search': 'Searches web; current specs', 'Local LLM without RAG': 'No knowledge if after cutoff' },
          { 'Scenario': 'Ask about your company (if post-cutoff)', 'Cloud LLM with Search': 'Can retrieve your website via search', 'Local LLM without RAG': 'Cannot find you; not in training data' },
          { 'Scenario': 'Ask about a competitor\'s rebrand', 'Cloud LLM with Search': 'Finds current name from search', 'Local LLM without RAG': 'Uses old name from training' },
          { 'Scenario': 'Ask about a new regulation', 'Cloud LLM with Search': 'Retrieves current legal text', 'Local LLM without RAG': 'Pre-regulation knowledge only' },
          { 'Scenario': 'Ask about AI model rankings', 'Cloud LLM with Search': 'Searches benchmarks; mostly current', 'Local LLM without RAG': 'Frozen at cutoff; outdated rankings' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'Local LLM limitations',
            text: 'For a full breakdown of what local LLMs can and cannot do — beyond just cutoffs — see <a href="/local-llms/local-llm-limitations" class="text-primary hover:underline">Local LLM Limitations: What They Can\'t Do</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'Implications for Users: When to Trust AI Answers',
        content: [
          '<strong>The single most important rule: always ask yourself whether the answer could have changed after the model\'s cutoff date.</strong> If yes, verify independently — especially for medical, legal, financial, and technology topics.',
          'Different AI systems handle post-cutoff gaps differently. Understanding how each system behaves helps you calibrate how much to trust the answer.',
        ],
        columns: ['AI System', 'Post-Cutoff Behavior', 'Reliability for Current Info', 'How to Improve'],
        rows: [
          { 'AI System': 'ChatGPT (paid)', 'Post-Cutoff Behavior': 'Searches Bing automatically', 'Reliability for Current Info': 'High for facts; lower for nuance', 'How to Improve': 'Ask it to cite sources; cross-check key claims' },
          { 'AI System': 'Gemini (paid)', 'Post-Cutoff Behavior': 'Searches Google automatically', 'Reliability for Current Info': 'High for facts; lower for nuance', 'How to Improve': 'Enable grounding; review cited URLs' },
          { 'AI System': 'Grok (X.com)', 'Post-Cutoff Behavior': 'Searches X posts automatically', 'Reliability for Current Info': 'Good for social trends; uneven for facts', 'How to Improve': 'Use DeepSearch for deeper web coverage' },
          { 'AI System': 'Claude (free/pro)', 'Post-Cutoff Behavior': 'Uses training data only by default', 'Reliability for Current Info': 'Moderate — Jan 2026 reliable cutoff', 'How to Improve': 'Paste current text into context; API users can enable search tool' },
          { 'AI System': 'Perplexity', 'Post-Cutoff Behavior': 'Always searches web first', 'Reliability for Current Info': 'High — search-native product', 'How to Improve': 'Already cites sources by design' },
          { 'AI System': 'Any local LLM', 'Post-Cutoff Behavior': 'Uses training data only — no override', 'Reliability for Current Info': 'Very low for post-cutoff topics', 'How to Improve': 'Build RAG pipeline; paste context manually' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Hallucination risk',
            text: 'The highest hallucination risk comes when a model is asked about something that postdates its cutoff but sounds plausibly similar to what it does know. It will give a confident-sounding answer based on its outdated training data rather than admitting ignorance.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'Implications for Companies: GEO Strategy by AI System',
        content: [
          '<strong>GEO (Generative Engine Optimization) is the practice of making your brand, product, or content appear in AI-generated answers.</strong> For most AI systems, GEO works similarly to SEO — the AI retrieves content from search engines, so ranking well in Bing or Google feeds directly into AI answers.',
          'But local LLMs break this model completely. A locally-deployed Llama or Qwen never searches the web. You cannot optimize your way into its answers through search — the model will only mention you if you were in its training data before the cutoff, or if the deploying organization injects your content via RAG.',
          'This table maps the GEO channel for each AI system:',
        ],
        columns: ['AI System', 'GEO Channel', 'Optimize For', 'Local Deployment Changes This?'],
        rows: [
          { 'AI System': 'GPT-5.5 (ChatGPT)', 'GEO Channel': 'Bing search retrieval', 'Optimize For': 'Bing SEO: technical SEO, Bing Webmaster Tools, structured data', 'Local Deployment Changes This?': 'Yes — local OpenAI API calls have no Bing; cutoff is hard' },
          { 'AI System': 'Gemini 3.1 Pro', 'GEO Channel': 'Google Search grounding', 'Optimize For': 'Google SEO + structured data (FAQ, HowTo, Article schemas)', 'Local Deployment Changes This?': 'Not yet — Gemini is cloud-only as of June 2026' },
          { 'AI System': 'Grok 4.3', 'GEO Channel': 'X (Twitter) content', 'Optimize For': 'X presence: verified account, high-engagement posts, X Communities', 'Local Deployment Changes This?': 'Not yet — Grok is cloud-only as of June 2026' },
          { 'AI System': 'Perplexity', 'GEO Channel': 'Web-native retrieval', 'Optimize For': 'All search engines + citing authoritative sources, clear structured content', 'Local Deployment Changes This?': 'No — Perplexity is web-native by design' },
          { 'AI System': 'Claude (API)', 'GEO Channel': 'Tool-use search (Brave/Web) — opt-in', 'Optimize For': 'General web presence; structured content for snippet eligibility', 'Local Deployment Changes This?': 'Yes — many Claude deployments have search disabled' },
          { 'AI System': 'Llama (local)', 'GEO Channel': 'RAG pipelines ONLY', 'Optimize For': 'RAG: structured data formats, knowledge bases, document APIs', 'Local Deployment Changes This?': 'This IS local deployment — SEO is irrelevant' },
          { 'AI System': 'Qwen / Gemma / Phi (local)', 'GEO Channel': 'RAG pipelines ONLY', 'Optimize For': 'RAG: document ingestion pipelines at deploying organization', 'Local Deployment Changes This?': 'This IS local deployment — SEO is irrelevant' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'The local LLM GEO blind spot',
            text: 'Most GEO guides focus entirely on cloud AI — they tell you to optimize for Bing or Google Search. That advice is useless for reaching internal deployments of Llama, Qwen, Gemma, or Phi. Those models never search. The only GEO channel that works is convincing the organization deploying the model to include your content in their RAG pipeline.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-en.png',
        imageCaption: 'GEO Strategy by AI System -- Two tracks: search-based vs RAG-based',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'The GEO Solution: Building a Moat for Both AI Types',
        content: [
          '<strong>A complete GEO strategy in 2026 requires two parallel tracks: search optimization for cloud AI, and RAG-readiness for local AI.</strong> Most organizations are executing only the first track.',
          '<strong>Track 1 — Cloud AI (search-based GEO):</strong> Traditional SEO techniques apply but with AI-specific additions. Your content must be structured for snippet eligibility (FAQ and HowTo JSON-LD schema), factually accurate (AI models avoid citing pages with correction histories), and authoritative (Bing and Google quality signals translate directly into AI citation likelihood). For Grok specifically, X presence (verified account, engagement rate, follower count) determines whether your brand appears in Grok answers.',
          '<strong>Track 2 — Local AI (RAG-based GEO):</strong> You cannot optimize your way into a local LLM through search. The path is entirely different: (1) create machine-readable knowledge bases in formats that RAG pipelines consume (Markdown, JSON-LD, OpenAPI specs, structured FAQs); (2) participate in open data initiatives so your information is available to organizations building RAG systems; (3) build direct relationships with enterprise customers deploying local LLMs and propose data partnership agreements; (4) provide SDKs or APIs that make it trivial to include your content in a RAG pipeline.',
          'For most companies, Track 1 is already underway as part of SEO. Track 2 requires new work — specifically, producing content in formats optimized for machine ingestion, not human reading.',
        ],
        numberedItems: [
          'Audit your AI visibility: which AI systems mention your brand? Test ChatGPT, Gemini, Grok, Perplexity, and a local Llama/Qwen deployment separately',
          'For cloud AI gaps: apply structured data markup (FAQPage, HowTo, TechArticle, Product), improve Bing Webmaster presence, strengthen E-E-A-T signals',
          'For local AI gaps: produce a machine-readable knowledge base (structured JSON, Markdown docs, OpenAPI spec) that RAG systems can ingest',
          'Document your brand facts in a canonical, unchanging format — model name, descriptions, capabilities, pricing — updated at each version change',
          'Publish an llms.txt file (plain-text site description for AI crawlers) and structured data on every major page',
          'Track mention rates across AI systems quarterly — the landscape shifts faster than traditional search',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Local RAG resources',
            text: 'For technical implementation of local RAG to give your own LLM deployment current knowledge, see <a href="/local-llms/local-rag-2026" class="text-primary hover:underline">Local RAG 2026: Best Tools and Frameworks</a> and <a href="/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">Corporate RAG with Local LLMs</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is an AI knowledge cutoff date?',
            a: 'A knowledge cutoff date is the date after which the model\'s training data ends. The model has zero information about events, products, research, or content published after this date. Cloud models can partially compensate via web search; local LLMs cannot.',
          },
          {
            q: 'Why does ChatGPT know about recent events if its cutoff is October 2023?',
            a: 'ChatGPT (the product) searches Bing by default in paid tiers and synthesizes current search results with its training-data reasoning. The underlying GPT-4o model still has an October 2023 training cutoff — what you\'re seeing is the search layer, not updated training data.',
          },
          {
            q: 'Do local LLMs like Llama and Qwen ever receive knowledge updates?',
            a: 'No — not automatically. A local LLM\'s knowledge is permanently frozen at its training cutoff. Each new model release (Llama 4 Scout, Qwen3 14B) has a different cutoff, but the copy running on your machine has fixed knowledge. To get current information, build a RAG pipeline.',
          },
          {
            q: 'What is GEO and how does it relate to knowledge cutoffs?',
            a: 'GEO (Generative Engine Optimization) is the discipline of making your content appear in AI-generated answers. For cloud AI, GEO works through search optimization — rank in Bing/Google and you get cited. For local LLMs, this is structurally impossible because the model never searches. Local LLM GEO requires RAG pipelines at the deploying organization.',
          },
          {
            q: 'Which AI model has the most recent knowledge cutoff date (verified)?',
            a: 'Among primary-source verified cutoffs: Claude Opus 4.8 has the most recent reliable cutoff at January 2026. GPT-5.5 is August 2025. Gemini 3.1 Pro is January 2025. Grok 4.3 is November 2024. DeepSeek-V3 and Gemma 3 27B are around July–August 2024. Phi-4 is June 2024. GPT-4o (legacy) is October 2023. Several current models (Llama 4, Qwen3, Mistral Large) have not publicly disclosed exact dates.',
          },
          {
            q: 'Can I use SEO to appear in Llama or Qwen answers?',
            a: 'No. SEO cannot influence a locally-deployed LLM because the model never searches the web. The only paths are: (1) be in the training data before the cutoff, or (2) be included in a RAG pipeline by the organization deploying the model.',
          },
          {
            q: 'How should I fact-check an AI answer about something that might be affected by the cutoff?',
            a: 'Three signals suggest a cutoff risk: (1) the topic involves specific versions, prices, people, or events; (2) you asked about something in a fast-moving industry; (3) the AI answer lacks citations. When any of these apply, verify against a primary source — the model\'s confident tone is not a reliability indicator.',
          },
          {
            q: 'Is there a way to tell from an AI\'s answer whether it used live search?',
            a: 'Often yes: Perplexity always shows source citations. Gemini shows a Google search icon when grounding is used. Grok indicates X search results. ChatGPT shows a globe icon and can be prompted to show sources. Claude does not search by default, so no indicator is needed. Local LLMs never search, so no indicator exists — the answer is always from training data.',
          },
        ],
      },
      relatedReading: {
          title: 'Related Reading',
          items: [
            '[RAG Explained: Retrieval-Augmented Generation](/prompt-engineering/rag-explained) — RAG is the primary solution to local LLM knowledge cutoff limits',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — knowledge cutoff staleness is a leading cause of hallucinations',
            "[AI Limitations: What LLMs Can't Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — structural constraints including frozen knowledge and the absence of live search",
            '[AI Model Knowledge Cutoff Dates 2026: Cheat Sheet](/prompt-bites/ai-model-knowledge-cutoff-dates) — scannable reference table for all major cloud and local models',
            '[Local LLM Model Updates 2026](/local-llms/local-llm-model-updates-2026) — track every major open-weight release and how it shifts the cutoff landscape',
          ],
        },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI 지식 마감 날짜, 실시간 검색, 그리고 GEO: 완전 가이드',
    seoTitle: 'AI 지식 마감 날짜 및 GEO 전략 2026 — 로컬 LLM 중심',
    intro: '**모든 AI 모델에는 지식 마감 날짜(Knowledge Cutoff)가 있습니다 — 학습 데이터가 끝나는 경계선입니다. 하지만 클라우드 모델과 로컬 모델은 이 한계를 근본적으로 다른 방식으로 다룹니다.** 이 가이드는 마감 날짜와 실시간 검색의 차이를 설명하고, 주요 모델별 동작 방식을 정리하며, 사용자와 AI 생성 답변에 노출되길 원하는 기업 모두를 위한 전략적 시사점을 도출합니다 — 로컬 LLM은 클라우드 모델과 완전히 다른 GEO 전략이 필요하다는 핵심 인사이트를 포함하여.',
    metaDescription: 'AI 지식 마감 날짜 완전 가이드: Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi의 검증된 날짜 — 클라우드 AI vs 로컬 LLM GEO 전략 포함. 로컬 모델에는 SEO가 아닌 RAG가 필요합니다.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ko.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI 지식 마감 날짜',
    audience: '사용자, 제품 팀, 그리고 AI 모델이 정보를 어디서 얻는지 — 그리고 어떻게 대응해야 하는지를 이해해야 하는 마케터',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**AI 지식 마감 날짜란 모델의 학습 데이터가 끝나는 날짜입니다.** 클라우드 모델은 내장 웹 검색(ChatGPT → Bing, Gemini → Google, Grok → X)을 통해 부분적으로 보완합니다. 로컬 LLM에는 검색 레이어가 없어 마감 날짜가 절대적입니다. GEO 전략 측면에서: 클라우드 AI에 노출되려면 검색을 최적화하세요. 로컬 AI에 노출되려면 RAG 파이프라인을 구축하세요 — SEO만으로는 웹을 검색하지 않는 모델에 도달할 수 없습니다.',
    quickFacts: [
      '**클라우드 모델 6개** 포함 — 1차 출처 링크와 함께 검증된 마감 날짜',
      '**로컬/오픈웨이트 모델 6개** 포함 — 모두 검색 레이어 "없음"',
      '**Gemma 3 27B**는 현재 로컬 모델 중 가장 이른 검증된 마감 날짜: 2024년 8월',
      '**Phi-4**의 마감 날짜는 2024년 6월 — 로컬 중 두 번째로 이른 검증 날짜',
      '**Grok 4.3**은 기본 검색 레이어가 일반 웹이 아닌 소셜 플랫폼(X/Twitter)인 유일한 클라우드 모델',
      '**GEO 시사점**: Llama/Qwen을 내부적으로 배포하는 기업은 해당 기업이 직접 구축한 RAG 파이프라인을 통해서만 도달할 수 있음',
    ],
    toc: [
      { label: '핵심 요점', anchor: 'key-takeaways' },
      { label: '보이지 않는 한계: 마감 날짜의 실체', anchor: 'the-invisible-limit' },
      { label: '마감 날짜 vs 실시간 검색: 결정적 차이', anchor: 'cutoff-vs-live-search' },
      { label: '전체 데이터 표: 모든 모델', anchor: 'full-model-table' },
      { label: '로컬 LLM 문제: 동결된 뇌로 실행하기', anchor: 'local-llm-problem' },
      { label: '사용자를 위한 시사점', anchor: 'implications-for-users' },
      { label: '기업을 위한 시사점: GEO 전략', anchor: 'geo-strategy' },
      { label: 'GEO 해결책: 해자 구축하기', anchor: 'geo-solution' },
      { label: '자주 묻는 질문', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'LLM 작동 방식에 대한 기본 이해',
      headline: 'AI 지식 마감 날짜, 실시간 검색, 그리고 GEO: 완전 가이드',
      description: '모든 주요 클라우드 및 로컬 모델에 대한 검증 데이터와 함께한 AI 지식 마감 날짜 완전 가이드, 로컬 LLM에 SEO가 아닌 RAG가 필요한 이유를 포함한 GEO 전략 시사점.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'ko',
      keywords: [
        'AI 지식 마감 날짜', '지식 마감 날짜', '로컬 LLM 마감', 'GEO 전략',
        '생성형 엔진 최적화', 'RAG vs SEO', 'ChatGPT 지식 마감',
        'Claude 지식 마감', 'Llama 마감', 'Gemma 마감', 'Phi-4 마감',
        'AI 학습 마감 2026', 'AI 실시간 검색', 'Bing AI 검색', '로컬 LLM 한계',
      ],
      about: [
        { '@type': 'Thing', name: 'AI 지식 마감 날짜' },
        { '@type': 'Thing', name: '생성형 엔진 최적화' },
        { '@type': 'Thing', name: '로컬 LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'ko'),
      url: 'https://www.promptquorum.com/ko/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'AI 지식 마감 날짜란 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI 지식 마감 날짜는 모델의 학습 데이터가 끝나는 날짜입니다. 모델은 이 날짜 이후에 발생한 사건, 제품, 연구, 콘텐츠에 대한 정보가 전혀 없습니다. 클라우드 모델은 내장 웹 검색을 통해 부분적으로 보완할 수 있지만, 로컬 LLM은 그렇지 않아 마감 날짜가 절대적입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '기본 모델의 학습 마감이 있음에도 ChatGPT가 최근 이벤트를 아는 이유는 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT(제품)는 유료 티어에서 기본적으로 Bing을 검색하여 현재 검색 결과로 응답을 보완합니다. 즉, 기본 모델의 학습 데이터에 고정된 마감 날짜(GPT-5.5 학습 마감은 2025년 8월; 레거시 GPT-4o는 2023년 10월)가 있더라도 최근 이벤트에 대한 사실 질문에 답할 수 있습니다. 학습 마감은 여전히 마감 이후 주제에 대한 맥락적 이해를 제한합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Llama나 Qwen 같은 로컬 LLM이 지식 업데이트를 받습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아닙니다. 로컬 LLM의 지식은 학습 마감 날짜에 영구적으로 동결됩니다. 새 모델 버전이 출시될 때(예: Llama 4 Scout)는 새로운 마감 날짜를 가지지만, 사용자 기기에서 실행 중인 모델은 스스로 업데이트되지 않습니다. 현재 정보에 접근하려면 쿼리 시 문서를 가져와 모델의 컨텍스트 윈도우에 주입하는 RAG(검색 증강 생성) 파이프라인을 구축해야 합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'GEO란 무엇이며 지식 마감과 어떤 관계가 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO(생성형 엔진 최적화)는 브랜드 또는 콘텐츠를 AI 생성 답변에 노출시키는 실천입니다. 클라우드 AI 모델에서 GEO는 SEO와 겹칩니다 — Bing, Google, X 검색에서 좋은 순위를 얻으면 ChatGPT, Gemini, Grok에 인용될 수 있습니다. 로컬 LLM의 경우 모델이 웹을 검색하지 않으므로 검색을 통한 GEO는 불가능합니다. 로컬 LLM에 도달하는 유일한 방법은 해당 모델을 운영하는 조직이 구축한 RAG 파이프라인을 통해서입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '가장 최근 지식 마감 날짜를 가진 AI 모델은 어느 것입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '검증된 1차 출처 마감 날짜 중: Claude Opus 4.8이 2026년 1월로 가장 최근의 신뢰할 수 있는 마감 날짜를 가집니다. GPT-5.5는 2025년 8월. Grok 4.3은 2024년 11월. Gemini 3.1 Pro는 2025년 1월. DeepSeek-V3은 2024년 7월. Gemma 3 27B는 2024년 8월. Phi-4는 2024년 6월. GPT-4o(레거시)는 2023년 10월. Llama 4, Qwen3, Mistral Large를 포함한 여러 현재 모델은 정확한 마감 날짜를 공개적으로 공시하지 않았습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'SEO를 사용하여 Llama나 Qwen 답변에 노출될 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아닙니다. 검색 엔진 최적화는 로컬에서 실행되는 LLM에 영향을 줄 수 없습니다. 모델이 웹 검색을 수행하지 않기 때문입니다. 로컬 LLM 출력에 나타나려면: (1) 마감 날짜 이전에 모델의 학습 데이터에 포함되어 있었거나, (2) 모델을 배포하는 조직이 구축한 RAG 파이프라인에 포함되어야 합니다. 이것은 전통적인 SEO나 클라우드 AI GEO와 근본적으로 다른 채널입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '기본적으로 실시간 웹을 검색하는 클라우드 AI 모델은 어느 것입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT는 기본적으로 Bing을 검색합니다(유료 티어). Gemini 3.1 Pro는 기본적으로 Google 검색을 사용합니다. Grok 4.3은 기본적으로 X(Twitter)를 검색합니다. Perplexity는 모든 쿼리에 웹 검색 네이티브입니다. Claude는 명시적인 개발자 도구 활성화가 필요하며 기본적으로 검색하지 않습니다. DeepSeek과 Mistral Large는 기본 검색이 없습니다. 모든 로컬 LLM(Llama, Qwen, Gemma, Phi, Mistral 오픈 웨이트)은 검색 기능이 없습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '로컬 LLM에서 현재 정보가 필요할 때 어떻게 해야 합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RAG(검색 증강 생성) 파이프라인을 구축하십시오. RAG 시스템은 쿼리 시 — 웹 검색, 내부 데이터베이스, 또는 문서 저장소에서 — 관련 최신 문서를 검색하여 응답을 생성하기 전에 LLM의 컨텍스트 윈도우에 주입합니다. 인기 있는 로컬 RAG 도구로는 LlamaIndex, LangChain, 검색 레이어가 있는 Ollama 등이 있습니다. LLM은 동결된 학습 데이터에만 의존하는 대신 주입된 문서를 기반으로 추론합니다.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '모든 AI 모델에는 지식 마감 날짜가 있습니다 — 학습 데이터가 끝나고 이벤트, 제품, 정보에 대한 인식이 없는 확정 날짜',
          '클라우드 모델(ChatGPT, Gemini, Grok)은 학습 데이터 위에 실시간 웹 검색을 추가하여 사실 쿼리에 대한 마감 날짜를 부분적으로 재정의합니다',
          '로컬 LLM(Llama, Qwen, Gemma, Phi, 오픈웨이트 Mistral)에는 검색 레이어가 없습니다 — 마감 날짜는 절대적이며 RAG 시스템 없이는 재정의할 수 없습니다',
          'GEO(생성형 엔진 최적화)를 위해: 클라우드 AI에 노출되려면 전통적인 검색 최적화(Bing, Google, X)가 필요하고; 로컬 AI에 노출되려면 RAG 파이프라인이 필요합니다 — SEO로는 웹을 한 번도 접촉하지 않는 모델에 도달할 수 없습니다',
          '검증된 마감 날짜: Claude Opus 4.8 = 2026년 1월(신뢰 가능); GPT-5.5 = 2025년 8월; Gemini 3.1 Pro = 2025년 1월; Grok 4.3 = 2024년 11월; Gemma 3 27B = 2024년 8월; DeepSeek-V3 = 2024년 7월; Phi-4 = 2024년 6월; GPT-4o(레거시) = 2023년 10월 (DeepSeek는 이후 오픈 웨이트 신세대 모델인 DeepSeek-V4—Flash/Pro—를 출시했습니다. R1/V3는 계속 로컬에서 사용할 수 있습니다.)',
          'Llama 4, Qwen3, Mistral Large 3을 포함한 여러 주요 모델은 정확한 마감 날짜를 공개적으로 공시하지 않았습니다',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: '보이지 않는 한계: 지식 마감 날짜의 실체',
        content: [
          '<strong>지식 마감 날짜는 AI 모델이 더 이상 학습 데이터를 받지 않는 날짜입니다.</strong> 모델은 해당 날짜까지 방대한 양의 텍스트 — 웹 페이지, 책, 코드, 연구 논문 — 를 읽었으며, 그 이후에는 아무것도 없습니다. 마감 이후에 발생한 이벤트, 제품 출시, 새로운 연구, 가격 변경, 회사 리브랜딩, 또는 기타 개발 사항은 모델에 보이지 않습니다.',
          '이것은 사용자가 종종 놓치는 체계적인 실패 모드를 만듭니다: AI는 아무것도 모르는 주제에 대해 자신감 있고 잘 구성된 답변을 제공합니다. 왜냐하면 모델이 자신이 무엇을 모르는지 모르기 때문입니다. 2023년 마감이 있는 모델에 2025년 제품에 대해 물어보면 모델은 (믿을 만한 허위 정보를) 꾸며내거나, 올바르게 무지를 인정하거나, 또는 — 가장 위험하게 — 현재 크게 구식이 된 이전 버전 제품에 기반한 답변을 제공할 것입니다.',
          '많은 클라우드 제품이 이제 기본 모델 위에 실시간 검색을 추가하여 일반 사용자에게 마감 날짜를 보이지 않게 만들기 때문에 혼란이 가중됩니다. ChatGPT가 오늘의 뉴스에 대한 질문에 답할 때 Bing을 사용하는 것입니다 — 학습 데이터가 아닙니다. 그 검색 레이어를 제거하면 모델은 몇 달 또는 몇 년 전 지식으로 작동하게 됩니다.',
        ],
        callouts: [
          {
            type: 'info',
            label: '빠른 참조',
            text: '마감 날짜 표만 필요하신가요? <a href="/ko/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">AI 지식 마감 날짜 치트 시트</a>를 확인하세요 — 모든 주요 모델에 대한 스캔 가능한 참조 표입니다.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: '마감 날짜 vs 실시간 검색: 모든 것을 바꾸는 차이',
        content: [
          '<strong>AI 지식 한계를 이해하는 데 가장 중요한 구분은 학습 마감(모델 속성)과 실시간 검색(제품 기능) 사이입니다.</strong> 클라우드 AI 제품이 두 가지를 매끄럽게 혼합하기 때문에 종종 혼동됩니다.',
          '<strong>학습 마감</strong>은 모델 가중치에 내장되어 있습니다. 모델을 재학습하거나 파인튜닝하지 않고는 변경할 수 없습니다. ChatGPT, API, 또는 서드파티 도구를 통해 실행되는 GPT-4o의 모든 복사본은 동일한 2023년 10월 마감 날짜를 가집니다.',
          '<strong>실시간 검색 레이어</strong>는 제품 수준에서 통합된 외부 도구입니다. ChatGPT가 현재 정보가 필요할 때 Bing의 API를 쿼리하고, 현재 결과를 가져와 추론 능력으로 합성합니다. 이것은 추론 시에 발생하며 제품 팀이 켜고 끌 수 있습니다.',
        ],
        columns: ['모델 / 제품', '검색 레이어', '검색 트리거', '참고'],
        rows: [
          { '모델 / 제품': 'GPT-5.5 (ChatGPT)', '검색 레이어': 'Bing', '검색 트리거': '자동 — 모델이 결정', '참고': 'ChatGPT Plus/Pro에서 기본 켜짐; 원시 API 호출에서는 꺼짐' },
          { '모델 / 제품': 'Gemini 3.1 Pro', '검색 레이어': 'Google 검색', '검색 트리거': '자동 — 모델이 결정', '참고': 'Vertex AI 개발자를 위한 Google Grounding API 제공' },
          { '모델 / 제품': 'Grok 4.3 (X.com)', '검색 레이어': 'X (Twitter)', '검색 트리거': '자동 — 모델이 결정', '참고': 'DeepSearch = 더 넓은 웹 검색, 옵트인' },
          { '모델 / 제품': 'Perplexity', '검색 레이어': '멀티소스 웹', '검색 트리거': '항상 — 모든 쿼리', '참고': '설계상 검색 우선; 출처 인용' },
          { '모델 / 제품': 'Claude (Anthropic)', '검색 레이어': 'Brave / 웹 (도구)', '검색 트리거': '개발자 옵트인만', '참고': '기본 꺼짐; API 도구 구성 필요' },
          { '모델 / 제품': 'DeepSeek (클라우드)', '검색 레이어': '없음', '검색 트리거': '해당 없음', '참고': '검색 레이어 없음; 마감 날짜가 경성 한계' },
          { '모델 / 제품': 'Mistral (클라우드)', '검색 레이어': '없음', '검색 트리거': '해당 없음', '참고': '검색 레이어 없음; 마감 날짜가 경성 한계' },
          { '모델 / 제품': '모든 로컬 LLM', '검색 레이어': '없음', '검색 트리거': '해당 없음', '참고': '기본적으로 인터넷 접근 없음; 최신성을 위해 RAG 필요' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ko.png',
        imageCaption: '지식 컷오프 대 실시간 검색 -- 어떤 AI 시스템이 웹을 검색하는가',
      },
      full_table: {
        id: 'full-model-table',
        title: '전체 검증 마감 데이터: 모든 주요 모델',
        content: [
          '아래 표는 모델 카드, 공식 문서, 동료 심사 기술 보고서 등 1차 출처 데이터만 사용합니다. 1차 출처가 없는 경우 마감 날짜는 추정이 아닌 "공개적으로 공시되지 않음"으로 표시됩니다.',
          '<strong>클라우드 모델:</strong>',
        ],
        columns: ['모델', '벤더', '마감 날짜', '검증됨', '기본 검색', '검색 레이어'],
        rows: CLOUD_MODELS.map(m => ({
          '모델': m.modelName,
          '벤더': m.vendor,
          '마감 날짜': m.cutoffDate,
          '검증됨': m.cutoffVerified ? '✓' : '—',
          '기본 검색': m.hasLiveSearchDefault ? '예' : (m.searchLayer === 'Tool-use only' ? '도구 사용만' : '아니오'),
          '검색 레이어': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: '클라우드 모델 중 Claude만이 웹 검색에 명시적인 개발자 구성이 필요합니다 — 나머지는 모두 최종 사용자에게 기본적으로 실시간 검색이 켜져 있습니다.',
          },
          {
            type: 'in-plain-terms',
            text: '클라우드 AI 모델은 질문에 답하는 사이에 검색할 수 있는 연구자와 같습니다. 로컬 AI 모델은 고정된 날짜 이후 완전히 오프라인 상태인 연구자와 같습니다.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: '로컬 / 오픈웨이트 모델: 검증된 마감 날짜',
        content: [
          '<strong>로컬 오픈웨이트 모델 — 모두 검색 레이어 "없음":</strong>',
        ],
        columns: ['모델', '벤더', '마감 날짜', '검증됨', '배포', '라이선스'],
        rows: LOCAL_MODELS.map(m => ({
          '모델': m.modelName,
          '벤더': m.vendor,
          '마감 날짜': m.cutoffDate,
          '검증됨': m.cutoffVerified ? '✓ 1차 출처' : '— 공시 없음',
          '배포': m.deployment,
          '라이선스': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: '핵심 인사이트',
            text: '이 표의 모든 로컬 모델은 검색 레이어가 "없음"입니다. 이것은 특정 모델의 한계가 아닙니다 — 로컬로 배포된 LLM의 구조적 특성입니다. 명시적으로 프로그래밍되지 않는 한 네트워크 접근이 없습니다.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: '로컬 LLM 문제: 동결된 뇌로 실행하기',
        content: [
          '<strong>Ollama, LM Studio, llama.cpp, 또는 기타 실행기를 통해 로컬 LLM을 실행할 때 지식이 완전히 동결된 모델을 실행하는 것입니다.</strong> "약간 구식"이 아닙니다. "대부분 최신"도 아닙니다. 고정된 날짜에 완전히 동결되어 있습니다.',
          '이것은 단순한 불편함이 아닙니다. 근본적인 아키텍처 특성입니다. 집에 전화, 백그라운드 업데이트, 자동으로 지식을 갱신하는 모델이 없습니다. 디스크의 가중치가 바로 그 가중치입니다 — 모델이 아는 모든 것을 인코딩하며, 실행 사이에 변경되지 않습니다.',
          '이것은 특정하고 예측 가능한 실패 패턴을 만듭니다. 마감 이후 리브랜딩한 회사에 대해 질문하는 로컬 실행 모델은 이전 이름을 사용할 것입니다. 마감 이후 출시된 제품에 대해 질문하는 모델은 모른다고 말하거나 — 더 문제적으로 — 그런 제품이 어떨지에 대한 그럴듯한 설명을 꾸며낼 것입니다.',
          '<strong>로컬 LLM으로 구축된 수천 개의 애플리케이션 — 내부 챗봇, 코드 어시스턴트, 문서 분석기 — 모두 이 동결된 지식 문제를 공유합니다.</strong> 내부적으로 Llama, Qwen, Gemma, 또는 Phi를 배포하는 모든 조직은 RAG 시스템을 구축하지 않는 한 모델의 학습 마감 이후 발생한 것을 문자 그대로 알 수 없는 소프트웨어를 실행하고 있습니다.',
        ],
        columns: ['시나리오', '검색이 있는 클라우드 LLM', 'RAG 없는 로컬 LLM'],
        rows: [
          { '시나리오': '오늘의 뉴스 질문', '검색이 있는 클라우드 LLM': 'Bing/Google에서 검색; 현재 답변', 'RAG 없는 로컬 LLM': '무지를 인정하거나 환각' },
          { '시나리오': '2025년 제품 출시 질문', '검색이 있는 클라우드 LLM': '웹 검색; 현재 사양', 'RAG 없는 로컬 LLM': '마감 이후라면 지식 없음' },
          { '시나리오': '회사(마감 이후)에 대한 질문', '검색이 있는 클라우드 LLM': '검색을 통해 웹사이트 검색 가능', 'RAG 없는 로컬 LLM': '찾을 수 없음; 학습 데이터에 없음' },
          { '시나리오': '경쟁사 리브랜딩 질문', '검색이 있는 클라우드 LLM': '검색에서 현재 이름 찾기', 'RAG 없는 로컬 LLM': '학습에서 이전 이름 사용' },
          { '시나리오': '새로운 규정 질문', '검색이 있는 클라우드 LLM': '현재 법적 텍스트 검색', 'RAG 없는 로컬 LLM': '규정 이전 지식만' },
          { '시나리오': 'AI 모델 순위 질문', '검색이 있는 클라우드 LLM': '벤치마크 검색; 대부분 최신', 'RAG 없는 로컬 LLM': '마감 날짜에 동결; 구식 순위' },
        ],
        callouts: [
          {
            type: 'info',
            label: '로컬 LLM 한계',
            text: '마감 날짜를 넘어 로컬 LLM이 할 수 없는 것에 대한 전체 분석은 <a href="/ko/local-llms/local-llm-limitations" class="text-primary hover:underline">로컬 LLM 한계: 할 수 없는 것들</a>을 참조하세요.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: '사용자를 위한 시사점: AI 답변을 신뢰하는 방법',
        content: [
          '<strong>가장 중요한 규칙: 항상 답변이 모델의 마감 날짜 이후에 변경되었을 수 있는지 자문하십시오.</strong> 그렇다면 독립적으로 확인하십시오 — 특히 의료, 법적, 금융, 기술 주제에 대해.',
          '다른 AI 시스템은 마감 후 공백을 다르게 처리합니다. 각 시스템의 동작 방식을 이해하면 답변을 얼마나 신뢰할지 조정하는 데 도움이 됩니다.',
        ],
        columns: ['AI 시스템', '마감 후 동작', '현재 정보 신뢰도', '개선 방법'],
        rows: [
          { 'AI 시스템': 'ChatGPT (유료)', '마감 후 동작': '자동으로 Bing 검색', '현재 정보 신뢰도': '사실은 높음; 뉘앙스는 낮음', '개선 방법': '출처 인용 요청; 주요 주장 교차 확인' },
          { 'AI 시스템': 'Gemini (유료)', '마감 후 동작': '자동으로 Google 검색', '현재 정보 신뢰도': '사실은 높음; 뉘앙스는 낮음', '개선 방법': '그라운딩 활성화; 인용된 URL 검토' },
          { 'AI 시스템': 'Grok (X.com)', '마감 후 동작': '자동으로 X 게시물 검색', '현재 정보 신뢰도': '소셜 트렌드에 좋음; 사실은 고르지 않음', '개선 방법': '더 깊은 웹 커버리지를 위해 DeepSearch 사용' },
          { 'AI 시스템': 'Claude (무료/프로)', '마감 후 동작': '기본적으로 학습 데이터만 사용', '현재 정보 신뢰도': '중간 — 2026년 1월 신뢰할 수 있는 마감', '개선 방법': '현재 텍스트를 컨텍스트에 붙여넣기; API 사용자는 검색 도구 활성화 가능' },
          { 'AI 시스템': 'Perplexity', '마감 후 동작': '항상 먼저 웹 검색', '현재 정보 신뢰도': '높음 — 검색 네이티브 제품', '개선 방법': '설계상 이미 출처 인용' },
          { 'AI 시스템': '모든 로컬 LLM', '마감 후 동작': '학습 데이터만 사용 — 재정의 없음', '현재 정보 신뢰도': '마감 후 주제에서 매우 낮음', '개선 방법': 'RAG 파이프라인 구축; 수동으로 컨텍스트 붙여넣기' },
        ],
        callouts: [
          {
            type: 'warning',
            label: '환각 위험',
            text: '가장 높은 환각 위험은 모델이 마감 날짜 이후 내용에 대해 질문받을 때인데, 그것이 모델이 알고 있는 것과 그럴듯하게 유사해 보일 때입니다. 모델은 무지를 인정하지 않고 구식 학습 데이터를 기반으로 자신감 있는 답변을 제공할 것입니다.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: '기업을 위한 시사점: AI 시스템별 GEO 전략',
        content: [
          '<strong>GEO(생성형 엔진 최적화)는 브랜드, 제품, 또는 콘텐츠를 AI 생성 답변에 노출시키는 실천입니다.</strong> 대부분의 AI 시스템에서 GEO는 SEO와 유사하게 작동합니다 — AI가 검색 엔진에서 콘텐츠를 검색하므로 Bing이나 Google에서 좋은 순위를 얻으면 AI 답변에 직접 반영됩니다.',
          '하지만 로컬 LLM은 이 모델을 완전히 깨뜨립니다. 로컬에 배포된 Llama나 Qwen은 웹을 검색하지 않습니다. 검색을 통해 답변에 최적화할 수 없습니다 — 마감 전에 학습 데이터에 있었거나, 배포 조직이 RAG를 통해 콘텐츠를 주입하는 경우에만 모델이 언급할 것입니다.',
          '이 표는 각 AI 시스템에 대한 GEO 채널을 매핑합니다:',
        ],
        columns: ['AI 시스템', 'GEO 채널', '최적화 대상', '로컬 배포가 이것을 변경합니까?'],
        rows: [
          { 'AI 시스템': 'GPT-5.5 (ChatGPT)', 'GEO 채널': 'Bing 검색 검색', '최적화 대상': 'Bing SEO: 기술 SEO, Bing 웹마스터 도구, 구조화 데이터', '로컬 배포가 이것을 변경합니까?': '예 — 로컬 OpenAI API 호출에는 Bing 없음; 마감 날짜가 경성' },
          { 'AI 시스템': 'Gemini 3.1 Pro', 'GEO 채널': 'Google 검색 그라운딩', '최적화 대상': 'Google SEO + 구조화 데이터(FAQ, HowTo, Article 스키마)', '로컬 배포가 이것을 변경합니까?': '아직 아님 — 2026년 6월 기준 Gemini는 클라우드 전용' },
          { 'AI 시스템': 'Grok 4.3', 'GEO 채널': 'X (Twitter) 콘텐츠', '최적화 대상': 'X 존재: 인증 계정, 고참여 게시물, X 커뮤니티', '로컬 배포가 이것을 변경합니까?': '아직 아님 — 2026년 6월 기준 Grok은 클라우드 전용' },
          { 'AI 시스템': 'Perplexity', 'GEO 채널': '웹 네이티브 검색', '최적화 대상': '모든 검색 엔진 + 권위 있는 출처 인용, 명확한 구조화 콘텐츠', '로컬 배포가 이것을 변경합니까?': '아니오 — Perplexity는 설계상 웹 네이티브' },
          { 'AI 시스템': 'Claude (API)', 'GEO 채널': '도구 사용 검색(Brave/웹) — 옵트인', '최적화 대상': '일반 웹 존재; 스니펫 적합성을 위한 구조화 콘텐츠', '로컬 배포가 이것을 변경합니까?': '예 — 많은 Claude 배포에서 검색이 비활성화되어 있음' },
          { 'AI 시스템': 'Llama (로컬)', 'GEO 채널': 'RAG 파이프라인만', '최적화 대상': 'RAG: 구조화 데이터 형식, 지식 베이스, 문서 API', '로컬 배포가 이것을 변경합니까?': '이것이 바로 로컬 배포입니다 — SEO는 관련 없음' },
          { 'AI 시스템': 'Qwen / Gemma / Phi (로컬)', 'GEO 채널': 'RAG 파이프라인만', '최적화 대상': 'RAG: 배포 조직의 문서 수집 파이프라인', '로컬 배포가 이것을 변경합니까?': '이것이 바로 로컬 배포입니다 — SEO는 관련 없음' },
        ],
        callouts: [
          {
            type: 'warning',
            label: '로컬 LLM GEO 사각지대',
            text: '대부분의 GEO 가이드는 클라우드 AI에만 집중합니다 — Bing이나 Google 검색을 위해 최적화하라고 말합니다. 그 조언은 Llama, Qwen, Gemma, 또는 Phi의 내부 배포에 도달하는 데 쓸모가 없습니다. 이 모델들은 검색하지 않습니다. 작동하는 유일한 GEO 채널은 모델을 배포하는 조직이 RAG 파이프라인에 콘텐츠를 포함하도록 설득하는 것입니다.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-ko.png',
        imageCaption: 'AI 시스템별 GEO 전략 -- 두 가지 경로: 검색 기반 대 RAG 기반',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'GEO 해결책: 두 AI 유형 모두를 위한 해자 구축',
        content: [
          '<strong>2026년의 완전한 GEO 전략은 두 가지 병렬 트랙이 필요합니다: 클라우드 AI를 위한 검색 최적화와 로컬 AI를 위한 RAG 준비성.</strong> 대부분의 조직은 첫 번째 트랙만 실행하고 있습니다.',
          '<strong>트랙 1 — 클라우드 AI(검색 기반 GEO):</strong> 전통적인 SEO 기법이 AI 특정 추가 사항과 함께 적용됩니다. 콘텐츠는 스니펫 적합성을 위해 구조화되어야 하고(FAQ 및 HowTo JSON-LD 스키마), 사실적으로 정확해야 하며(AI 모델은 수정 이력이 있는 페이지 인용을 피합니다), 권위 있어야 합니다(Bing 및 Google 품질 신호가 AI 인용 가능성에 직접 반영됩니다). Grok의 경우 X 존재(인증 계정, 참여율, 팔로워 수)가 브랜드가 Grok 답변에 나타나는지를 결정합니다.',
          '<strong>트랙 2 — 로컬 AI(RAG 기반 GEO):</strong> 검색을 통해 로컬 LLM에 최적화할 수 없습니다. 경로는 완전히 다릅니다: (1) RAG 파이프라인이 소비하는 형식(Markdown, JSON-LD, OpenAPI 사양, 구조화 FAQ)으로 기계 판독 가능한 지식 베이스 생성; (2) 오픈 데이터 이니셔티브에 참여하여 RAG 시스템을 구축하는 조직이 정보를 사용할 수 있게 하기; (3) 로컬 LLM을 배포하는 기업 고객과 직접 관계를 구축하고 데이터 파트너십 계약 제안; (4) 콘텐츠를 RAG 파이프라인에 포함시키는 것을 간단하게 만드는 SDK 또는 API 제공.',
          '대부분의 회사에서 트랙 1은 SEO의 일환으로 이미 진행 중입니다. 트랙 2는 새로운 작업이 필요합니다 — 구체적으로 인간 독서가 아닌 기계 수집에 최적화된 형식으로 콘텐츠를 생성하는 것입니다.',
        ],
        numberedItems: [
          'AI 가시성 감사: 어떤 AI 시스템이 브랜드를 언급합니까? ChatGPT, Gemini, Grok, Perplexity, 그리고 로컬 Llama/Qwen 배포를 별도로 테스트하십시오',
          '클라우드 AI 공백의 경우: 구조화 데이터 마크업 적용(FAQPage, HowTo, TechArticle, Product), Bing 웹마스터 존재 개선, E-E-A-T 신호 강화',
          '로컬 AI 공백의 경우: RAG 시스템이 수집할 수 있는 기계 판독 가능한 지식 베이스(구조화 JSON, Markdown 문서, OpenAPI 사양) 생성',
          '브랜드 사실을 표준적이고 변경되지 않는 형식으로 문서화하십시오 — 모델 이름, 설명, 기능, 가격 — 각 버전 변경 시 업데이트',
          '모든 주요 페이지에 llms.txt 파일(AI 크롤러를 위한 일반 텍스트 사이트 설명) 및 구조화 데이터 게시',
          'AI 시스템 전반에 걸쳐 분기별로 언급율 추적 — 전통적인 검색보다 빠르게 변화하는 환경',
        ],
        callouts: [
          {
            type: 'info',
            label: '로컬 RAG 리소스',
            text: '자체 LLM 배포에 최신 지식을 제공하기 위한 로컬 RAG의 기술적 구현은 <a href="/ko/local-llms/local-rag-2026" class="text-primary hover:underline">로컬 RAG 2026: 최고의 도구 및 프레임워크</a>와 <a href="/ko/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">로컬 LLM을 사용한 기업 RAG</a>를 참조하세요.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AI 지식 마감 날짜란 무엇입니까?',
            a: '지식 마감 날짜는 모델의 학습 데이터가 끝나는 날짜입니다. 모델은 이 날짜 이후에 발생한 이벤트, 제품, 연구, 또는 콘텐츠에 대한 정보가 전혀 없습니다. 클라우드 모델은 웹 검색을 통해 부분적으로 보완할 수 있지만, 로컬 LLM은 그렇지 않습니다.',
          },
          {
            q: 'ChatGPT의 마감이 2023년 10월이라면 왜 최근 이벤트를 알고 있습니까?',
            a: 'ChatGPT(제품)는 유료 티어에서 기본적으로 Bing을 검색하여 현재 검색 결과와 학습 데이터 추론을 합성합니다. 기본 GPT-4o 모델은 여전히 2023년 10월 학습 마감 날짜를 가지고 있습니다 — 보이는 것은 검색 레이어이지 업데이트된 학습 데이터가 아닙니다.',
          },
          {
            q: 'Llama나 Qwen 같은 로컬 LLM이 지식 업데이트를 받습니까?',
            a: '아닙니다 — 자동으로는 안 됩니다. 로컬 LLM의 지식은 학습 마감 날짜에 영구적으로 동결됩니다. 각 새로운 모델 릴리스(Llama 4 Scout, Qwen3 14B)는 다른 마감 날짜를 가지지만, 사용자 기기에서 실행 중인 복사본은 고정된 지식을 가집니다. 현재 정보를 얻으려면 RAG 파이프라인을 구축하십시오.',
          },
          {
            q: 'GEO란 무엇이며 지식 마감과 어떤 관계가 있습니까?',
            a: 'GEO(생성형 엔진 최적화)는 콘텐츠를 AI 생성 답변에 노출시키는 분야입니다. 클라우드 AI의 경우 GEO는 검색 최적화를 통해 작동합니다 — Bing/Google에서 순위를 얻으면 인용됩니다. 로컬 LLM의 경우 모델이 검색하지 않기 때문에 이것은 구조적으로 불가능합니다. 로컬 LLM GEO는 배포 조직의 RAG 파이프라인이 필요합니다.',
          },
          {
            q: '검증된 지식 마감 날짜가 가장 최근인 AI 모델은 어느 것입니까?',
            a: '1차 출처 검증 마감 날짜 중: Claude Opus 4.8이 2026년 1월로 가장 최근의 신뢰할 수 있는 마감 날짜를 가집니다. GPT-5.5는 2025년 8월. Gemini 3.1 Pro는 2025년 1월. Grok 4.3은 2024년 11월. DeepSeek-V3와 Gemma 3 27B는 2024년 7월~8월경. Phi-4는 2024년 6월. GPT-4o(레거시)는 2023년 10월. Llama 4, Qwen3, Mistral Large를 포함한 여러 현재 모델은 정확한 날짜를 공개적으로 공시하지 않았습니다.',
          },
          {
            q: 'SEO를 사용하여 Llama나 Qwen 답변에 노출될 수 있습니까?',
            a: '아닙니다. 모델이 웹을 검색하지 않기 때문에 SEO는 로컬로 배포된 LLM에 영향을 줄 수 없습니다. 유일한 경로는: (1) 마감 전에 학습 데이터에 있었거나, (2) 모델을 배포하는 조직의 RAG 파이프라인에 포함되는 것입니다.',
          },
          {
            q: '마감 날짜의 영향을 받을 수 있는 AI 답변을 어떻게 사실 확인해야 합니까?',
            a: '세 가지 신호가 마감 위험을 시사합니다: (1) 주제가 특정 버전, 가격, 인물, 또는 이벤트를 포함; (2) 빠르게 변화하는 산업의 것을 물어봄; (3) AI 답변에 인용이 없음. 이 중 어느 하나가 적용되면 1차 출처에서 확인하십시오 — 모델의 자신감 있는 어조는 신뢰도 지표가 아닙니다.',
          },
          {
            q: 'AI 답변에서 실시간 검색을 사용했는지 알 수 있는 방법이 있습니까?',
            a: '종종 그렇습니다: Perplexity는 항상 출처 인용을 표시합니다. Gemini는 그라운딩이 사용될 때 Google 검색 아이콘을 표시합니다. Grok은 X 검색 결과를 나타냅니다. ChatGPT는 지구본 아이콘을 표시하며 출처를 표시하도록 요청할 수 있습니다. Claude는 기본적으로 검색하지 않으므로 지표가 필요 없습니다. 로컬 LLM은 검색하지 않으므로 지표가 없습니다 — 답변은 항상 학습 데이터에서 나옵니다.',
          },
        ],
      },
      relatedReading: {
          title: '관련 읽기',
          items: [
            '[RAG 설명: 검색 증강 생성](/ko/prompt-engineering/rag-explained) — RAG는 로컬 LLM 지식 마감일 제한의 주요 해결책입니다',
            '[AI 환각: AI가 잘못된 정보를 생성하는 이유](/ko/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 지식 마감일 노후화는 환각의 주요 원인입니다',
            '[AI 한계: LLM이 할 수 없는 것](/ko/prompt-engineering/ai-limitations-what-llms-cant-do) — 동결된 지식과 실시간 검색 부재를 포함한 구조적 제약',
            '[AI 모델 지식 마감일 2026: 치트 시트](/ko/prompt-bites/ai-model-knowledge-cutoff-dates) — 모든 주요 클라우드 및 로컬 모델의 빠른 참조 표',
            '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) — 모든 주요 오픈 웨이트 출시와 마감일 변화 추적',
          ],
        },
    },
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'Datas de corte de conhecimento de IA, busca ao vivo e GEO: Guia completo',
    seoTitle: 'Datas de corte de IA e estratégia GEO 2026 — foco em LLM local',
    intro: '**Todo modelo de IA possui uma data de corte de conhecimento — a fronteira onde os dados de treinamento terminam. Mas modelos em nuvem e modelos locais lidam com esse limite de formas fundamentalmente diferentes.** Este guia explica a diferença entre datas de corte e busca ao vivo, resume o comportamento dos principais modelos e extrai implicações estratégicas para usuários e empresas que desejam aparecer em respostas geradas por IA — incluindo o insight central de que LLMs locais exigem uma estratégia GEO completamente diferente dos modelos em nuvem.',
    metaDescription: 'Guia completo sobre datas de corte de conhecimento de IA: datas verificadas para Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma e Phi — com estratégia GEO para IA em nuvem vs LLM local. Modelos locais precisam de RAG, não de SEO.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-pt.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'data de corte de conhecimento de IA',
    audience: 'Usuários, equipes de produto e profissionais de marketing que precisam entender de onde os modelos de IA obtêm informações — e como responder a isso',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**A data de corte de conhecimento de IA é a data até a qual os dados de treinamento do modelo terminam.** Modelos em nuvem compensam parcialmente com busca web integrada (ChatGPT → Bing, Gemini → Google, Grok → X). LLMs locais não possuem camada de busca, tornando a data de corte absoluta. Para estratégia GEO: aparecer em IA em nuvem requer otimização de busca. Aparecer em IA local requer pipelines RAG — SEO sozinho não alcança modelos que não navegam na web.',
    quickFacts: [
      '**6 modelos em nuvem** incluídos — datas de corte verificadas com links de fontes primárias',
      '**6 modelos locais/open-weight** incluídos — todos com "nenhuma" camada de busca',
      '**Gemma 3 27B** possui a data de corte verificada mais antiga entre modelos locais: agosto de 2024',
      '**Phi-4** tem data de corte de junho de 2024 — segunda data verificada mais antiga entre locais',
      '**Grok 4.3** é o único modelo em nuvem cuja camada de busca padrão é uma plataforma social (X/Twitter) em vez da web geral',
      '**Implicação GEO**: empresas que implantam Llama/Qwen internamente só podem ser alcançadas por meio de pipelines RAG que a própria empresa construiu',
    ],
    toc: [
      { label: 'Pontos principais', anchor: 'key-takeaways' },
      { label: 'O limite invisível: a realidade das datas de corte', anchor: 'the-invisible-limit' },
      { label: 'Data de corte vs busca ao vivo: a diferença decisiva', anchor: 'cutoff-vs-live-search' },
      { label: 'Tabela completa: todos os modelos', anchor: 'full-model-table' },
      { label: 'O problema do LLM local: rodando com conhecimento congelado', anchor: 'local-llm-problem' },
      { label: 'Implicações para usuários', anchor: 'implications-for-users' },
      { label: 'Implicações para empresas: estratégia GEO', anchor: 'geo-strategy' },
      { label: 'Solução GEO: construindo sua vantagem competitiva', anchor: 'geo-solution' },
      { label: 'Perguntas frequentes', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Compreensão básica de como funcionam LLMs',
      headline: 'Datas de corte de conhecimento de IA, busca ao vivo e GEO: Guia completo',
      description: 'Guia completo sobre datas de corte de conhecimento de IA com dados verificados para todos os principais modelos em nuvem e locais, incluindo implicações de estratégia GEO e por que LLMs locais precisam de RAG em vez de SEO.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'pt',
      keywords: [
        'data de corte de conhecimento de IA', 'data de corte', 'corte de LLM local', 'estratégia GEO',
        'otimização de motor generativo', 'RAG vs SEO', 'data de corte ChatGPT',
        'data de corte Claude', 'corte Llama', 'corte Gemma', 'corte Phi-4',
        'corte de treinamento de IA 2026', 'busca ao vivo IA', 'busca Bing IA', 'limitações LLM local',
      ],
      about: [
        { '@type': 'Thing', name: 'Data de Corte de Conhecimento de IA' },
        { '@type': 'Thing', name: 'Otimização de Motor Generativo' },
        { '@type': 'Thing', name: 'LLM Local' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'pt'),
      url: 'https://www.promptquorum.com/pt/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é uma data de corte de conhecimento de IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A data de corte de conhecimento é a data até a qual os dados de treinamento do modelo terminam. O modelo não tem nenhuma informação sobre eventos, produtos, pesquisas ou conteúdos publicados após essa data. Modelos em nuvem podem compensar parcialmente com busca web, mas LLMs locais não — tornando a data de corte absoluta.',
          },
        },
        {
          '@type': 'Question',
          name: 'Por que o ChatGPT conhece eventos recentes mesmo tendo data de corte de outubro de 2023?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O ChatGPT (produto) busca no Bing por padrão nos planos pagos, complementando respostas com resultados de busca atuais. O modelo base GPT-5.5 tem data de corte de agosto de 2025; o legado GPT-4o tem outubro de 2023. O que você vê é a camada de busca, não dados de treinamento atualizados.',
          },
        },
        {
          '@type': 'Question',
          name: 'LLMs locais como Llama ou Qwen recebem atualizações de conhecimento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. O conhecimento de LLMs locais fica permanentemente congelado na data de corte de treinamento. Para acessar informações atuais, você precisa construir um pipeline RAG (Geração Aumentada por Recuperação).',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é GEO e como se relaciona com datas de corte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO (Otimização de Motor Generativo) é a prática de fazer sua marca ou conteúdo aparecer em respostas geradas por IA. Para IA em nuvem, GEO se sobrepõe ao SEO. Para LLMs locais, o modelo não busca na web, então GEO via busca é estruturalmente impossível. O único caminho é por meio de pipelines RAG construídos pela organização que implanta o modelo.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual modelo de IA tem a data de corte de conhecimento verificada mais recente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Claude Opus 4.8 tem a data de corte confiável mais recente em janeiro de 2026. GPT-5.5: agosto de 2025. Gemini 3.1 Pro: janeiro de 2025. Grok 4.3: novembro de 2024. DeepSeek-V3: julho de 2024. Gemma 3 27B: agosto de 2024. Phi-4: junho de 2024. GPT-4o (legado): outubro de 2023.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso usar SEO para aparecer em respostas do Llama ou Qwen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. SEO não pode influenciar LLMs implantados localmente porque o modelo não faz busca na web. Os únicos caminhos são: (1) estar nos dados de treinamento antes da data de corte, ou (2) ser incluído no pipeline RAG da organização que implanta o modelo.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como verificar factualmente respostas de IA que podem ser afetadas por datas de corte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Três sinais indicam risco de corte: (1) o tópico envolve versões específicas, preços, pessoas ou eventos; (2) você está perguntando sobre um setor que muda rapidamente; (3) a resposta da IA não tem citações. Se qualquer um se aplicar, verifique em fontes primárias.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como saber se uma resposta de IA usou busca ao vivo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity sempre exibe citações de fontes. Gemini mostra ícone do Google Search quando usa grounding. Grok indica resultados de busca no X. ChatGPT exibe ícone de globo. Claude não busca por padrão. LLMs locais nunca buscam — respostas sempre vêm dos dados de treinamento.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Todo modelo de IA tem uma data de corte de conhecimento — uma data definitiva após a qual não há dados de treinamento sobre eventos, produtos ou informações',
          'Modelos em nuvem (ChatGPT, Gemini, Grok) adicionam busca web ao vivo sobre os dados de treinamento, substituindo parcialmente a data de corte para consultas factuais',
          'LLMs locais (Llama, Qwen, Gemma, Phi, Mistral open-weight) não possuem camada de busca — a data de corte é absoluta e não pode ser substituída sem um sistema RAG',
          'Para GEO: aparecer em IA em nuvem requer otimização de busca tradicional (Bing, Google, X); aparecer em IA local requer pipelines RAG — SEO não alcança modelos que nunca tocam a web',
          'Datas de corte verificadas: Claude Opus 4.8 = jan 2026 (confiável); GPT-5.5 = ago 2025; Gemini 3.1 Pro = jan 2025; Grok 4.3 = nov 2024; Gemma 3 27B = ago 2024; DeepSeek-V3 = jul 2024; Phi-4 = jun 2024; GPT-4o (legado) = out 2023 (Desde então, a DeepSeek lançou o DeepSeek-V4 — Flash/Pro — como nova geração de pesos abertos; R1/V3 continuam válidos para uso local.)',
          'Vários modelos principais — incluindo Llama 4, Qwen3 e Mistral Large 3 — não divulgaram publicamente datas exatas de corte',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'O limite invisível: a realidade das datas de corte de conhecimento',
        content: [
          '<strong>A data de corte de conhecimento é a data após a qual um modelo de IA não recebe mais dados de treinamento.</strong> O modelo leu uma enorme quantidade de texto — páginas da web, livros, código, artigos de pesquisa — até essa data, e depois disso, nada. Eventos ocorridos após o corte, lançamentos de produtos, novas pesquisas, mudanças de preço ou qualquer outro desenvolvimento são invisíveis ao modelo.',
          'Isso cria um modo de falha sistemático que os usuários frequentemente perdem: a IA fornece respostas confiantes e bem estruturadas sobre tópicos que desconhece completamente. Porque o modelo não sabe o que não sabe.',
          'A confusão é amplificada porque muitos produtos em nuvem agora adicionam busca ao vivo sobre o modelo base. Quando o ChatGPT responde a uma pergunta sobre notícias de hoje, ele está usando Bing — não dados de treinamento.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Referência rápida',
            text: 'Só precisa da tabela de datas de corte? Veja a <a href="/pt/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">Folha de referência de datas de corte de conhecimento de IA</a>.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'Data de corte vs busca ao vivo: a diferença que muda tudo',
        content: [
          '<strong>A distinção mais importante é entre corte de treinamento (propriedade do modelo) e busca ao vivo (recurso do produto).</strong>',
          '<strong>O corte de treinamento</strong> está incorporado nos pesos do modelo. Não pode ser alterado sem retreinar o modelo. Toda cópia do GPT-4o tem o mesmo corte de outubro de 2023.',
          '<strong>A camada de busca ao vivo</strong> é uma ferramenta externa integrada no nível do produto. Quando o ChatGPT precisa de informações atuais, ele consulta a API do Bing e sintetiza os resultados com sua capacidade de raciocínio.',
        ],
        columns: ['Modelo / Produto', 'Camada de busca', 'Gatilho de busca', 'Observação'],
        rows: [
          { 'Modelo / Produto': 'GPT-5.5 (ChatGPT)', 'Camada de busca': 'Bing', 'Gatilho de busca': 'Automático — o modelo decide', 'Observação': 'Ativado por padrão no ChatGPT Plus/Pro; desativado em chamadas brutas de API' },
          { 'Modelo / Produto': 'Gemini 3.1 Pro', 'Camada de busca': 'Google Search', 'Gatilho de busca': 'Automático — o modelo decide', 'Observação': 'Google Grounding API disponível para desenvolvedores no Vertex AI' },
          { 'Modelo / Produto': 'Grok 4.3 (X.com)', 'Camada de busca': 'X (Twitter)', 'Gatilho de busca': 'Automático — o modelo decide', 'Observação': 'DeepSearch = busca na web mais ampla, opt-in' },
          { 'Modelo / Produto': 'Perplexity', 'Camada de busca': 'Web multi-fonte', 'Gatilho de busca': 'Sempre — em cada consulta', 'Observação': 'Busca-first por design; cita fontes' },
          { 'Modelo / Produto': 'Claude (Anthropic)', 'Camada de busca': 'Brave / web (ferramenta)', 'Gatilho de busca': 'Opt-in de desenvolvedor apenas', 'Observação': 'Desativado por padrão; requer configuração de ferramentas na API' },
          { 'Modelo / Produto': 'DeepSeek (nuvem)', 'Camada de busca': 'Nenhuma', 'Gatilho de busca': 'N/A', 'Observação': 'Sem camada de busca; data de corte é limite rígido' },
          { 'Modelo / Produto': 'Mistral (nuvem)', 'Camada de busca': 'Nenhuma', 'Gatilho de busca': 'N/A', 'Observação': 'Sem camada de busca; data de corte é limite rígido' },
          { 'Modelo / Produto': 'Todos os LLMs locais', 'Camada de busca': 'Nenhuma', 'Gatilho de busca': 'N/A', 'Observação': 'Sem acesso à internet por padrão; requer RAG para informações atuais' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-pt.png',
        imageCaption: 'Corte de Conhecimento vs Busca ao Vivo -- Quais sistemas de IA pesquisam na web',
      },
      full_table: {
        id: 'full-model-table',
        title: 'Dados completos verificados: todos os principais modelos',
        content: [
          'A tabela abaixo usa apenas dados de fontes primárias. Onde não há fonte primária, a data de corte é marcada como "não divulgada publicamente".',
          '<strong>Modelos em nuvem:</strong>',
        ],
        columns: ['Modelo', 'Fornecedor', 'Data de corte', 'Verificado', 'Busca padrão', 'Camada de busca'],
        rows: CLOUD_MODELS.map(m => ({
          'Modelo': m.modelName,
          'Fornecedor': m.vendor,
          'Data de corte': m.cutoffDate,
          'Verificado': m.cutoffVerified ? '✓' : '—',
          'Busca padrão': m.hasLiveSearchDefault ? 'Sim' : (m.searchLayer === 'Tool-use only' ? 'Somente via ferramenta' : 'Não'),
          'Camada de busca': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Entre os modelos em nuvem, apenas Claude requer configuração explícita de desenvolvedor para busca web — todos os outros têm busca ao vivo ativa por padrão para usuários finais.',
          },
          {
            type: 'in-plain-terms',
            text: 'Modelos de IA em nuvem são como pesquisadores que podem fazer buscas entre respostas. Modelos de IA local são como pesquisadores completamente offline desde uma data específica.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'Modelos locais / open-weight: datas de corte verificadas',
        content: [
          '<strong>Modelos open-weight locais — todos com "nenhuma" camada de busca:</strong>',
        ],
        columns: ['Modelo', 'Fornecedor', 'Data de corte', 'Verificado', 'Implantação', 'Licença'],
        rows: LOCAL_MODELS.map(m => ({
          'Modelo': m.modelName,
          'Fornecedor': m.vendor,
          'Data de corte': m.cutoffDate,
          'Verificado': m.cutoffVerified ? '✓ Fonte primária' : '— Não divulgado',
          'Implantação': m.deployment,
          'Licença': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'Insight principal',
            text: 'Todos os modelos locais nesta tabela têm camada de busca "nenhuma". Isso não é uma limitação de um modelo específico — é uma característica estrutural de LLMs implantados localmente.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'O problema do LLM local: rodando com conhecimento congelado',
        content: [
          '<strong>Ao rodar um LLM local via Ollama, LM Studio ou llama.cpp, você está rodando um modelo com conhecimento completamente congelado.</strong> Não "ligeiramente desatualizado". Completamente congelado em uma data fixa.',
          'Isso não é apenas uma inconveniência. É uma característica arquitetural fundamental. Os pesos no disco são exatamente esses pesos — codificando tudo que o modelo sabe, não mudando entre execuções.',
          'Padrões de falha previsíveis: um modelo perguntado sobre uma empresa que fez rebranding após o corte usará o nome antigo. Um modelo perguntado sobre um produto lançado após o corte inventará uma descrição plausível.',
          '<strong>Milhares de aplicações construídas sobre LLMs locais compartilham esse problema.</strong> Qualquer organização que implanta Llama, Qwen, Gemma ou Phi internamente está rodando software que literalmente não consegue saber nada que aconteceu após o corte — a menos que construa um sistema RAG.',
        ],
        columns: ['Cenário', 'LLM em nuvem com busca', 'LLM local sem RAG'],
        rows: [
          { 'Cenário': 'Pergunta sobre notícias de hoje', 'LLM em nuvem com busca': 'Busca no Bing/Google; resposta atual', 'LLM local sem RAG': 'Admite ignorância ou alucina' },
          { 'Cenário': 'Pergunta sobre lançamento de produto em 2025', 'LLM em nuvem com busca': 'Busca na web; especificações atuais', 'LLM local sem RAG': 'Sem conhecimento se após o corte' },
          { 'Cenário': 'Pergunta sobre empresa (pós-corte)', 'LLM em nuvem com busca': 'Consegue buscar site via pesquisa', 'LLM local sem RAG': 'Não encontra; não está nos dados de treinamento' },
          { 'Cenário': 'Rebranding de concorrente', 'LLM em nuvem com busca': 'Encontra nome atual via busca', 'LLM local sem RAG': 'Usa nome antigo do treinamento' },
          { 'Cenário': 'Nova regulamentação', 'LLM em nuvem com busca': 'Busca texto legal atual', 'LLM local sem RAG': 'Apenas conhecimento pré-regulamentação' },
          { 'Cenário': 'Ranking de modelos de IA', 'LLM em nuvem com busca': 'Busca benchmarks; maiormente atualizado', 'LLM local sem RAG': 'Congelado na data de corte; ranking desatualizado' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'Limitações de LLM local',
            text: 'Para análise completa do que LLMs locais não conseguem fazer além da data de corte, veja <a href="/pt/local-llms/local-llm-limitations" class="text-primary hover:underline">Limitações de LLM local: o que eles não conseguem fazer</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'Implicações para usuários: como confiar em respostas de IA',
        content: [
          '<strong>A regra mais importante: sempre pergunte a si mesmo se a resposta pode ter mudado após a data de corte do modelo.</strong> Se sim, verifique de forma independente.',
          'Diferentes sistemas de IA lidam com lacunas pós-corte de formas diferentes.',
        ],
        columns: ['Sistema de IA', 'Comportamento pós-corte', 'Confiabilidade de informações atuais', 'Como melhorar'],
        rows: [
          { 'Sistema de IA': 'ChatGPT (pago)', 'Comportamento pós-corte': 'Busca automaticamente no Bing', 'Confiabilidade de informações atuais': 'Alta para fatos; baixa para nuances', 'Como melhorar': 'Peça citações de fontes; verifique afirmações principais' },
          { 'Sistema de IA': 'Gemini (pago)', 'Comportamento pós-corte': 'Busca automaticamente no Google', 'Confiabilidade de informações atuais': 'Alta para fatos; baixa para nuances', 'Como melhorar': 'Ative grounding; revise URLs citadas' },
          { 'Sistema de IA': 'Grok (X.com)', 'Comportamento pós-corte': 'Busca automaticamente posts do X', 'Confiabilidade de informações atuais': 'Bom para tendências sociais; irregular para fatos', 'Como melhorar': 'Use DeepSearch para cobertura web mais ampla' },
          { 'Sistema de IA': 'Claude (gratuito/pro)', 'Comportamento pós-corte': 'Usa apenas dados de treinamento por padrão', 'Confiabilidade de informações atuais': 'Média — corte confiável em jan 2026', 'Como melhorar': 'Cole texto atual no contexto; usuários de API podem ativar ferramenta de busca' },
          { 'Sistema de IA': 'Perplexity', 'Comportamento pós-corte': 'Sempre busca na web primeiro', 'Confiabilidade de informações atuais': 'Alta — produto nativo de busca', 'Como melhorar': 'Já cita fontes por design' },
          { 'Sistema de IA': 'Todos os LLMs locais', 'Comportamento pós-corte': 'Apenas dados de treinamento — sem substituição', 'Confiabilidade de informações atuais': 'Muito baixa para tópicos pós-corte', 'Como melhorar': 'Construa pipeline RAG; cole contexto manualmente' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Risco de alucinação',
            text: 'O maior risco de alucinação ocorre quando o modelo é perguntado sobre conteúdo após a data de corte que parece plausível similar ao que o modelo conhece.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'Implicações para empresas: estratégia GEO por sistema de IA',
        content: [
          '<strong>GEO (Otimização de Motor Generativo) é a prática de fazer sua marca, produto ou conteúdo aparecer em respostas geradas por IA.</strong> Na maioria dos sistemas de IA, GEO funciona de forma similar ao SEO.',
          'Mas LLMs locais quebram completamente esse modelo. Um Llama ou Qwen implantado localmente não busca na web.',
          'Esta tabela mapeia os canais GEO para cada sistema de IA:',
        ],
        columns: ['Sistema de IA', 'Canal GEO', 'O que otimizar', 'Implantação local muda isso?'],
        rows: [
          { 'Sistema de IA': 'GPT-5.5 (ChatGPT)', 'Canal GEO': 'Busca Bing', 'O que otimizar': 'SEO Bing: SEO técnico, Bing Webmaster Tools, dados estruturados', 'Implantação local muda isso?': 'Sim — chamadas locais de API OpenAI sem Bing; corte é rígido' },
          { 'Sistema de IA': 'Gemini 3.1 Pro', 'Canal GEO': 'Grounding Google Search', 'O que otimizar': 'SEO Google + dados estruturados (FAQ, HowTo, Article schema)', 'Implantação local muda isso?': 'Ainda não — Gemini é somente nuvem em junho 2026' },
          { 'Sistema de IA': 'Grok 4.3', 'Canal GEO': 'Conteúdo X (Twitter)', 'O que otimizar': 'Presença no X: conta verificada, posts com alto engajamento', 'Implantação local muda isso?': 'Ainda não — Grok é somente nuvem em junho 2026' },
          { 'Sistema de IA': 'Perplexity', 'Canal GEO': 'Busca web nativa', 'O que otimizar': 'Todos os mecanismos de busca + fontes autoritativas citáveis', 'Implantação local muda isso?': 'Não — Perplexity é nativo na web por design' },
          { 'Sistema de IA': 'Claude (API)', 'Canal GEO': 'Busca via ferramenta (Brave/web) — opt-in', 'O que otimizar': 'Presença web geral; conteúdo estruturado para adequação a snippets', 'Implantação local muda isso?': 'Sim — muitas implantações de Claude têm busca desativada' },
          { 'Sistema de IA': 'Llama (local)', 'Canal GEO': 'Somente pipeline RAG', 'O que otimizar': 'RAG: formatos de dados estruturados, base de conhecimento, APIs de documentos', 'Implantação local muda isso?': 'Isso é a implantação local — SEO é irrelevante' },
          { 'Sistema de IA': 'Qwen / Gemma / Phi (local)', 'Canal GEO': 'Somente pipeline RAG', 'O que otimizar': 'RAG: pipeline de coleta de documentos da organização implantadora', 'Implantação local muda isso?': 'Isso é a implantação local — SEO é irrelevante' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Ponto cego de GEO para LLM local',
            text: 'A maioria dos guias de GEO se foca apenas em IA em nuvem. Esse conselho é inútil para alcançar implantações internas de Llama, Qwen, Gemma ou Phi. Esses modelos não buscam. O único canal GEO que funciona é convencer a organização que implanta o modelo a incluir seu conteúdo no pipeline RAG.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-pt.png',
        imageCaption: 'Estratégia GEO por Sistema de IA -- Duas vias: baseada em busca vs baseada em RAG',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'Solução GEO: construindo vantagem competitiva para ambos os tipos de IA',
        content: [
          '<strong>Uma estratégia GEO completa em 2026 requer duas trilhas paralelas: otimização de busca para IA em nuvem e prontidão para RAG para IA local.</strong> A maioria das organizações só está executando a primeira trilha.',
          '<strong>Trilha 1 — IA em nuvem (GEO baseado em busca):</strong> Técnicas tradicionais de SEO com adições específicas de IA. O conteúdo precisa ser estruturado para adequação a snippets (esquemas JSON-LD FAQ e HowTo), factualmente preciso e autoritativo.',
          '<strong>Trilha 2 — IA local (GEO baseado em RAG):</strong> Crie base de conhecimento legível por máquina (Markdown, JSON-LD, especificações OpenAPI); participe de iniciativas de dados abertos; construa relacionamentos com clientes corporativos que implantam LLMs localmente.',
          'Para a maioria das empresas, a Trilha 1 já está em andamento como parte do SEO. A Trilha 2 requer trabalho novo.',
        ],
        numberedItems: [
          'Auditoria de visibilidade em IA: quais sistemas de IA mencionam sua marca? Teste ChatGPT, Gemini, Grok, Perplexity e implantações locais separadamente',
          'Para lacunas em IA em nuvem: aplique marcação de dados estruturados (FAQPage, HowTo, TechArticle, Product), melhore presença no Bing Webmaster, fortaleça sinais E-E-A-T',
          'Para lacunas em IA local: crie base de conhecimento legível por máquina (JSON estruturado, documentos Markdown, especificações OpenAPI)',
          'Documente fatos da marca em formato canônico — nomes de modelos, descrições, recursos, preços — atualize a cada mudança de versão',
          'Publique arquivo llms.txt e dados estruturados em todas as páginas principais',
          'Acompanhe a taxa de menção em todos os sistemas de IA trimestralmente',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Recursos de RAG local',
            text: 'Para implementação técnica de RAG local, veja <a href="/pt/local-llms/local-rag-2026" class="text-primary hover:underline">RAG local 2026: melhores ferramentas e frameworks</a> e <a href="/pt/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">RAG corporativo com LLMs locais</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é uma data de corte de conhecimento de IA?',
            a: 'A data de corte de conhecimento é a data após a qual os dados de treinamento do modelo terminam. O modelo não tem nenhuma informação sobre eventos, produtos, pesquisas ou conteúdos ocorridos após essa data. Modelos em nuvem podem compensar parcialmente via busca web, mas LLMs locais não.',
          },
          {
            q: 'Se o corte do ChatGPT é outubro de 2023, por que ele conhece eventos recentes?',
            a: 'O ChatGPT (produto) busca no Bing por padrão nos planos pagos, sintetizando resultados de busca atuais com a inferência dos dados de treinamento. O modelo GPT-4o base ainda tem data de corte de outubro de 2023 — o que você vê é a camada de busca, não dados de treinamento atualizados.',
          },
          {
            q: 'LLMs locais como Llama ou Qwen recebem atualizações de conhecimento?',
            a: 'Não — não automaticamente. O conhecimento de LLMs locais fica permanentemente congelado na data de corte de treinamento. Para obter informações atuais, construa um pipeline RAG.',
          },
          {
            q: 'O que é GEO e como se relaciona com datas de corte?',
            a: 'GEO (Otimização de Motor Generativo) é a área de fazer conteúdo aparecer em respostas geradas por IA. Para IA em nuvem, GEO funciona via otimização de busca. Para LLMs locais, isso é estruturalmente impossível porque o modelo não busca. GEO de LLM local requer pipeline RAG da organização implantadora.',
          },
          {
            q: 'Qual modelo de IA tem a data de corte verificada mais recente?',
            a: 'Claude Opus 4.8 tem a data de corte confiável mais recente em janeiro de 2026. GPT-5.5: agosto de 2025. Gemini 3.1 Pro: janeiro de 2025. Grok 4.3: novembro de 2024. DeepSeek-V3 e Gemma 3 27B: julho-agosto de 2024. Phi-4: junho de 2024. GPT-4o (legado): outubro de 2023.',
          },
          {
            q: 'Posso usar SEO para aparecer nas respostas do Llama ou Qwen?',
            a: 'Não. SEO não consegue influenciar LLMs implantados localmente porque o modelo não busca na web. Os únicos caminhos são: (1) estar nos dados de treinamento antes do corte, ou (2) ser incluído no pipeline RAG da organização que implanta o modelo.',
          },
          {
            q: 'Como verificar faticamente respostas de IA afetadas por datas de corte?',
            a: 'Três sinais indicam risco de corte: (1) o tópico envolve versões específicas, preços, pessoas ou eventos; (2) você está perguntando sobre um setor que muda rapidamente; (3) a resposta da IA não tem citações. Se qualquer um se aplicar, verifique em fontes primárias.',
          },
          {
            q: 'Como saber se uma resposta de IA usou busca ao vivo?',
            a: 'Perplexity sempre exibe citações de fontes. Gemini mostra ícone do Google Search quando usa grounding. Grok indica resultados de busca no X. ChatGPT exibe ícone de globo. Claude não busca por padrão. LLMs locais nunca buscam — as respostas sempre vêm dos dados de treinamento.',
          },
        ],
      },
      relatedReading: {
          title: 'Leitura relacionada',
          items: [
            '[RAG Explicado: Geração com Recuperação Aumentada](/pt/prompt-engineering/rag-explained) — RAG é a principal solução para os limites de corte de conhecimento do LLM local',
            '[Alucinações de IA: Por que a IA inventa coisas](/pt/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — o envelhecimento por corte de conhecimento é uma causa líder de alucinações',
            '[Limitações da IA: O que os LLMs não conseguem fazer](/pt/prompt-engineering/ai-limitations-what-llms-cant-do) — restrições estruturais incluindo conhecimento congelado e ausência de pesquisa ao vivo',
            '[Datas de corte de conhecimento de IA 2026: Folha de referência](/pt/prompt-bites/ai-model-knowledge-cutoff-dates) — tabela de referência para todos os principais modelos cloud e locais',
            '[Atualizações de modelos LLM locais 2026](/pt/local-llms/local-llm-model-updates-2026) — acompanhe cada grande lançamento open-weight e como afeta o panorama de corte',
          ],
        },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI知識カットオフ、ライブ検索、GEO：完全ガイド',
    seoTitle: 'AIの知識カットオフ日と GEO戦略 2026 — ローカルLLM完全解説',
    intro: '**すべてのAIモデルには知識カットオフ日があります — 学習データが終わる境界線です。しかしクラウドモデルとローカルモデルでは、この限界への対処方法が根本的に異なります。** このガイドでは、カットオフとライブ検索の違いを解説し、主要モデルごとの動作を整理し、ユーザーとAI生成回答への露出を狙う企業向けの戦略的示唆を導き出します — ローカルLLMはクラウドモデルとはまったく異なるGEO戦略が必要だという核心的な洞察も含めて。',
    metaDescription: 'AIの知識カットオフ完全ガイド：Claude、GPT、Gemini、Grok、Llama、Qwen、Gemma、Phiの検証済み日付 — クラウドAI対ローカルLLMのGEO戦略付き。ローカルモデルにはSEOではなくRAGが必要です。',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ja.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI知識カットオフ',
    audience: 'AIモデルがどこから情報を得ているか、そしてその対策を理解する必要があるユーザー、プロダクトチーム、マーケター',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**AI知識カットオフとは、モデルの学習データが終わる日付のことです。** クラウドモデルは組み込みのウェブ検索（ChatGPT → Bing、Gemini → Google、Grok → X）で部分的に補います。ローカルLLMには検索レイヤーがないため、カットオフは絶対的です。GEO戦略の観点では、クラウドAIに露出するには検索最適化が必要です。ローカルAIに露出するにはRAGパイプラインの構築が必要です — SEOだけでは、ウェブを検索しないモデルには届きません。',
    quickFacts: [
      '**クラウドモデル6件**収録 — 一次情報源リンク付きの検証済みカットオフ日付',
      '**ローカル/オープンウェイトモデル6件**収録 — すべて検索レイヤー「なし」',
      '**Gemma 3 27B**は現在のローカルモデル中、最も早い検証済みカットオフ：2024年8月',
      '**Phi-4**のカットオフは2024年6月 — ローカルモデル中2番目に早い検証済み日付',
      '**Grok 4.3**はデフォルト検索レイヤーが一般ウェブではなくソーシャルプラットフォーム（X/Twitter）の唯一のクラウドモデル',
      '**GEOの示唆**：Llama/Qwenを社内にデプロイしている企業は、その企業が自ら構築したRAGパイプラインを通じてのみアプローチ可能',
    ],
    toc: [
      { label: 'まとめ', anchor: 'key-takeaways' },
      { label: '見えない限界：カットオフとは何か', anchor: 'the-invisible-limit' },
      { label: 'カットオフ vs ライブ検索：決定的な違い', anchor: 'cutoff-vs-live-search' },
      { label: '全データ表：全モデル一覧', anchor: 'full-model-table' },
      { label: 'ローカルLLMの問題：凍結した知識で動かす', anchor: 'local-llm-problem' },
      { label: 'ユーザーへの示唆', anchor: 'implications-for-users' },
      { label: '企業への示唆：GEO戦略', anchor: 'geo-strategy' },
      { label: 'GEO解決策：両AI型への参入戦略', anchor: 'geo-solution' },
      { label: 'よくある質問', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'AI知識カットオフ、ライブ検索、GEO：完全ガイド',
      description: '全主要クラウドモデルおよびローカルモデルの検証済みデータを用いたAI知識カットオフ完全ガイド。ローカルLLMにSEOではなくRAGが必要な理由を含むGEO戦略の示唆。',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'ja',
      keywords: [
        'AI knowledge cutoff', 'knowledge cutoff date', 'local LLM cutoff', 'GEO strategy',
        'generative engine optimization', 'RAG vs SEO', 'ChatGPT knowledge cutoff',
        'Claude knowledge cutoff', 'Llama cutoff', 'Gemma cutoff', 'Phi-4 cutoff',
        'AI training cutoff 2026', 'AI live search', 'Bing AI search', 'local LLM limitations',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'ja'),
      url: 'https://www.promptquorum.com/ja/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'AI知識カットオフ日とは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI知識カットオフ日とは、モデルの学習データが終わる日付のことです。モデルはその日付以降に発生したイベント、製品、研究、その他のコンテンツに関する情報を一切持っていません。クラウドモデルは組み込みのウェブ検索で部分的に補うことができますが、ローカルLLMはできません — カットオフは絶対的です。',
          },
        },
        {
          '@type': 'Question',
          name: 'ベースモデルにトレーニングカットオフがあるのに、ChatGPTが最近の出来事を知っているのはなぜですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT（製品）は有料プランではデフォルトでBingを検索し、現在の検索結果で回答を補強します。これにより、基盤モデルの学習データに固定されたカットオフ日（GPT-5.5は2025年8月、レガシーGPT-4oは2023年10月）があっても、最近のイベントについての質問に答えられます。ただし、カットオフ以降のトピックに関する文脈的理解は依然として制限されます。',
          },
        },
        {
          '@type': 'Question',
          name: 'LlamaやQwenのようなローカルLLMは知識のアップデートを受け取りますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。ローカルLLMの知識はトレーニングカットオフ時点で永久に凍結されます。新しいモデルバージョン（Llama 4 ScoutなどがLlama 3.3に取って代わる場合）には新しいカットオフがありますが、マシン上で実行中のモデルは自動更新されません。現在の情報にアクセスするには、クエリ時にドキュメントを取得してモデルのコンテキストウィンドウに注入するRAG（検索拡張生成）パイプラインを構築する必要があります。',
          },
        },
        {
          '@type': 'Question',
          name: 'GEOとは何ですか？知識カットオフとどう関係しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO（生成エンジン最適化）とは、ブランドやコンテンツをAI生成回答に露出させる取り組みです。クラウドAIモデルでは、GEOはSEOと重なります — Bing、Google、XでランクインすればChatGPT、Gemini、Grokに引用される可能性があります。ローカルLLMでは、モデルがウェブを検索しないため、検索経由のGEOは構造的に不可能です。ローカルLLMにリーチする唯一の方法は、そのモデルを運用する組織が構築したRAGパイプラインを通じることです。',
          },
        },
        {
          '@type': 'Question',
          name: '最も新しい知識カットオフ日を持つAIモデルはどれですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '一次情報源で検証済みのカットオフ日の中では：Claude Opus 4.8が2026年1月という最も新しい信頼性の高いカットオフを持ちます。GPT-5.5は2025年8月。Grok 4.3は2024年11月。Gemini 3.1 Proは2025年1月。DeepSeek-V3は2024年7月。Gemma 3 27Bは2024年8月。Phi-4は2024年6月。GPT-4o（レガシー）は2023年10月。Llama 4、Qwen3、Mistral Largeを含む複数の現行モデルは正確なカットオフ日を公式に開示していません。',
          },
        },
        {
          '@type': 'Question',
          name: 'SEOを使ってLlamaやQwenの回答に露出できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。検索エンジン最適化はローカルでデプロイされたLLMに影響を与えることができません。モデルがウェブ検索を行わないからです。ローカルLLMの出力に登場するには：(1) カットオフ前にモデルの学習データに含まれていたか、(2) モデルをデプロイしている組織が構築したRAGパイプラインに含まれる必要があります。これは従来のSEOやクラウドAIのGEOとは根本的に異なるチャネルです。',
          },
        },
        {
          '@type': 'Question',
          name: 'デフォルトでライブウェブを検索するクラウドAIモデルはどれですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPTはデフォルトでBingを検索します（有料プラン）。Gemini 3.1 ProはデフォルトでGoogle検索を使用します。Grok 4.3はデフォルトでX（Twitter）を検索します。Perplexityはすべてのクエリでウェブ検索ネイティブです。Claudeは明示的な開発者ツールの有効化が必要で、デフォルトでは検索しません。DeepSeekとMistral Largeにはデフォルト検索がありません。すべてのローカルLLM（Llama、Qwen、Gemma、Phi、Mistralオープンウェイト）には検索機能がありません。',
          },
        },
        {
          '@type': 'Question',
          name: 'ローカルLLMで現在の情報が必要な場合はどうすればよいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RAG（検索拡張生成）パイプラインを構築してください。RAGシステムは、クエリ時にウェブ検索、内部データベース、またはドキュメントストアから関連する最新ドキュメントを取得し、回答生成の前にLLMのコンテキストウィンドウに注入します。人気のローカルRAGツールにはLlamaIndex、LangChain、検索レイヤーを備えたOllamaなどがあります。LLMは凍結された学習データだけに依存するのではなく、注入されたドキュメントを基に推論を行います。',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'すべてのAIモデルには知識カットオフがあります — 学習データが終わり、イベント、製品、情報への認識がなくなる確定日付',
          'クラウドモデル（ChatGPT、Gemini、Grok）は学習データの上にライブウェブ検索を重ねており、事実確認クエリについてはカットオフを部分的に上書きします',
          'ローカルLLM（Llama、Qwen、Gemma、Phi、オープンウェイトMistral）には検索レイヤーがありません — カットオフは絶対的で、RAGシステムなしに上書きできません',
          'GEO（生成エンジン最適化）の観点で：クラウドAIに露出するには従来の検索最適化（Bing、Google、X）が必要。ローカルAIに露出するにはRAGパイプラインが必要 — SEOはウェブに一切触れないモデルには届きません',
          '検証済みカットオフ：Claude Opus 4.8 = 2026年1月（信頼性高）、GPT-5.5 = 2025年8月、Gemini 3.1 Pro = 2025年1月、Grok 4.3 = 2024年11月、Gemma 3 27B = 2024年8月、DeepSeek-V3 = 2024年7月、Phi-4 = 2024年6月、GPT-4o（レガシー）= 2023年10月 (DeepSeekはその後、オープンウェイトの新世代としてDeepSeek-V4—Flash/Pro—をリリースしました。R1/V3は引き続きローカルで利用可能です。)',
          'Llama 4、Qwen3、Mistral Large 3を含む主要モデル複数が正確なカットオフ日を公式に開示していません',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: '見えない限界：知識カットオフとは実際何か',
        content: [
          '<strong>知識カットオフ日とは、AIモデルがそれ以上学習データを受け取らなくなった日付のことです。</strong> モデルはその日付まで膨大な量のテキスト — ウェブページ、書籍、コード、研究論文 — を読んでおり、それ以降は何もありません。カットオフ後に発生したイベント、製品発売、新しい研究、価格変更、企業のリブランディング、その他いかなる発展もモデルには見えません。',
          'これは、ユーザーが見落としがちな体系的な失敗パターンを生み出します：AIは何も知らないトピックについて、自信に満ちた構造的な回答を返します。なぜなら、モデルは自分が何を知らないかを知らないからです。2023年のカットオフを持つモデルに2025年の製品について尋ねると、モデルは（もっともらしい偽情報を）作り上げるか、正直に無知を認めるか、あるいは最も危険な形として、今では大幅に時代遅れになった旧バージョンの製品に基づいた回答を返すかのいずれかです。',
          '多くのクラウド製品が今やベースモデルの上にライブ検索を重ねており、一般ユーザーにはカットオフが見えなくなっているため、混乱はさらに深まります。ChatGPTが今日のニュースについての質問に答えるとき、それはBingを使っています — 学習データではありません。その検索レイヤーを取り除くと、モデルは数ヶ月または数年前の知識で動作することになります。',
        ],
        callouts: [
          {
            type: 'info',
            label: 'クイックリファレンス',
            text: 'カットオフ日付の表だけが必要ですか？<a href="/ja/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">AI知識カットオフ日付チートシート</a>をご覧ください — 全主要モデルをひと目で確認できる参照表です。',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'カットオフ vs ライブ検索：すべてを変える決定的な違い',
        content: [
          '<strong>AIの知識限界を理解する上で最も重要な区別は、トレーニングカットオフ（モデルの属性）とライブ検索（製品の機能）の違いです。</strong> クラウドAI製品が両者をシームレスに融合させているため、よく混同されます。',
          '<strong>トレーニングカットオフ</strong>はモデルの重みに組み込まれています。モデルの再トレーニングまたはファインチューニングなしには変更できません。ChatGPT経由、API経由、あるいは任意のサードパーティツール経由で実行されるGPT-4oのコピーはすべて、同じ2023年10月のカットオフを持ちます。',
          '<strong>ライブ検索レイヤー</strong>は製品レベルで統合された外部ツールです。ChatGPTが現在の情報を必要とするとき、BingのAPIにクエリを送り、現在の結果を取得し、推論能力と合わせて統合します。これは推論時に行われ、製品チームがオン・オフを切り替えられます。',
        ],
        columns: ['モデル / 製品', '検索レイヤー', '検索トリガー', '備考'],
        rows: [
          { 'モデル / 製品': 'GPT-5.5 (ChatGPT)', '検索レイヤー': 'Bing', '検索トリガー': '自動 — モデルが判断', '備考': 'ChatGPT Plus/Proではデフォルトオン；生のAPI呼び出しではオフ' },
          { 'モデル / 製品': 'Gemini 3.1 Pro', '検索レイヤー': 'Google検索', '検索トリガー': '自動 — モデルが判断', '備考': 'Vertex AI開発者向けのGoogle Grounding APIが利用可能' },
          { 'モデル / 製品': 'Grok 4.3 (X.com)', '検索レイヤー': 'X (Twitter)', '検索トリガー': '自動 — モデルが判断', '備考': 'DeepSearch = より広いウェブ検索、オプトイン' },
          { 'モデル / 製品': 'Perplexity', '検索レイヤー': 'マルチソースウェブ', '検索トリガー': '常時 — すべてのクエリ', '備考': '設計上、検索ファースト；ソースを引用' },
          { 'モデル / 製品': 'Claude (Anthropic)', '検索レイヤー': 'Brave / ウェブ（ツール）', '検索トリガー': '開発者オプトインのみ', '備考': 'デフォルトはオフ；APIツール設定が必要' },
          { 'モデル / 製品': 'DeepSeek（クラウド）', '検索レイヤー': 'なし', '検索トリガー': 'N/A', '備考': '検索レイヤーなし；カットオフがハード制限' },
          { 'モデル / 製品': 'Mistral（クラウド）', '検索レイヤー': 'なし', '検索トリガー': 'N/A', '備考': '検索レイヤーなし；カットオフがハード制限' },
          { 'モデル / 製品': 'すべてのローカルLLM', '検索レイヤー': 'なし', '検索トリガー': 'N/A', '備考': 'デフォルトではインターネットアクセスなし；最新情報にはRAGが必要' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ja.png',
        imageCaption: '知識カットオフ対リアルタイム検索 -- どのAIシステムがウェブ検索するか',
      },
      full_table: {
        id: 'full-model-table',
        title: '全検証済みカットオフデータ：全主要モデル',
        content: [
          '以下の表は、モデルカード、公式ドキュメント、査読済み技術レポートなど一次情報源のデータのみを使用しています。一次情報源が存在しない場合、カットオフは推定ではなく「公開されていません」と記載されています。',
          '<strong>クラウドモデル：</strong>',
        ],
        columns: ['モデル', 'ベンダー', 'カットオフ日付', '検証済み', 'デフォルト検索', '検索レイヤー'],
        rows: CLOUD_MODELS.map(m => ({
          'モデル': m.modelName,
          'ベンダー': m.vendor,
          'カットオフ日付': m.cutoffDate,
          '検証済み': m.cutoffVerified ? '✓' : '—',
          'デフォルト検索': m.hasLiveSearchDefault ? 'あり' : (m.searchLayer === 'Tool-use only' ? 'ツール使用のみ' : 'なし'),
          '検索レイヤー': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'クラウドモデルの中で、Claudeだけがウェブ検索に開発者による明示的な設定を必要とします — 他のモデルはすべてエンドユーザーに対してライブ検索がデフォルトでオンになっています。',
          },
          {
            type: 'in-plain-terms',
            text: 'クラウドAIモデルは、質問に答える合間に調べ物ができる研究者のようなものです。ローカルAIモデルは、固定された日付以降完全にオフラインになっている研究者のようなものです。',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'ローカル / オープンウェイトモデル：検証済みカットオフ日付',
        content: [
          '<strong>ローカルオープンウェイトモデル — すべて検索レイヤー「なし」：</strong>',
        ],
        columns: ['モデル', 'ベンダー', 'カットオフ日付', '検証済み', 'デプロイメント', 'ライセンス'],
        rows: LOCAL_MODELS.map(m => ({
          'モデル': m.modelName,
          'ベンダー': m.vendor,
          'カットオフ日付': m.cutoffDate,
          '検証済み': m.cutoffVerified ? '✓ 一次情報源' : '— 非公開',
          'デプロイメント': m.deployment,
          'ライセンス': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: '重要な洞察',
            text: 'この表のすべてのローカルモデルの検索レイヤーは「なし」です。これは特定モデルの制限ではありません — ローカルにデプロイされたLLMの構造的な特性です。明示的にプログラムされない限り、ネットワークアクセスはありません。',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'ローカルLLMの問題：凍結した知識で動かす',
        content: [
          '<strong>Ollama、LM Studio、llama.cpp、その他のランナーを通じてローカルLLMを実行するとき、あなたは知識が完全に凍結したモデルを実行しています。</strong>「少し時代遅れ」ではありません。「ほぼ最新」でもありません。固定された日付で完全に凍結されています。',
          'これは単なる不便ではありません。根本的なアーキテクチャの特性です。自動更新もなく、バックグラウンドアップデートもなく、知識を静かに更新するモデルもありません。ディスク上の重みがそのまま重みです — モデルが知っているすべてを符号化しており、実行間に変化しません。',
          'これにより、特定の予測可能な失敗パターンが生じます。カットオフ後にリブランディングした企業について尋ねるローカルで実行されたモデルは古い名称を使います。カットオフ後に発売された製品について尋ねるモデルは知らないと言うか、より問題なことに、そのような製品がどのようなものかのもっともらしい説明をでっち上げるかのどちらかです。',
          '<strong>ローカルLLM上に構築された数千ものアプリケーション — 社内チャットボット、コードアシスタント、ドキュメント分析ツール — はすべてこの凍結知識問題を共有しています。</strong> Llama、Qwen、Gemma、またはPhiを社内にデプロイしているあらゆる組織は、RAGシステムを構築しない限り、モデルのトレーニングカットオフ以降に起きたことを文字通り何も知ることができないソフトウェアを実行しています。',
        ],
        columns: ['シナリオ', '検索あり クラウドLLM', 'RAGなし ローカルLLM'],
        rows: [
          { 'シナリオ': '今日のニュースについて尋ねる', '検索あり クラウドLLM': 'Bing/Googleから取得；最新の回答', 'RAGなし ローカルLLM': '無知を認めるか幻覚を起こす' },
          { 'シナリオ': '2025年の製品発売について尋ねる', '検索あり クラウドLLM': 'ウェブ検索；最新の仕様', 'RAGなし ローカルLLM': 'カットオフ後なら知識なし' },
          { 'シナリオ': '（カットオフ後の）自社について尋ねる', '検索あり クラウドLLM': '検索経由でウェブサイトを取得できる', 'RAGなし ローカルLLM': '見つからない；学習データにない' },
          { 'シナリオ': '競合他社のリブランディングについて尋ねる', '検索あり クラウドLLM': '検索から現在の名称を見つける', 'RAGなし ローカルLLM': 'トレーニング時の古い名称を使用' },
          { 'シナリオ': '新しい規制について尋ねる', '検索あり クラウドLLM': '現在の法的テキストを取得', 'RAGなし ローカルLLM': '規制前の知識のみ' },
          { 'シナリオ': 'AIモデルのランキングについて尋ねる', '検索あり クラウドLLM': 'ベンチマークを検索；ほぼ最新', 'RAGなし ローカルLLM': 'カットオフ時点で凍結；時代遅れのランキング' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'ローカルLLMの制限',
            text: 'カットオフだけでなく、ローカルLLMができないことの完全な解説は<a href="/ja/local-llms/local-llm-limitations" class="text-primary hover:underline">ローカルLLMの限界：できないこと</a>をご覧ください。',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'ユーザーへの示唆：AI回答をいつ信頼するか',
        content: [
          '<strong>最も重要なルール：回答がモデルのカットオフ日以降に変わっている可能性があるかを常に自問してください。</strong> もしそうなら、独立して確認してください — 特に医療、法律、金融、テクノロジーのトピックについては。',
          '異なるAIシステムはカットオフ後のギャップをそれぞれ異なる方法で処理します。各システムの動作を理解することで、回答をどれほど信頼するかの調整に役立ちます。',
        ],
        columns: ['AIシステム', 'カットオフ後の動作', '現在情報の信頼性', '改善方法'],
        rows: [
          { 'AIシステム': 'ChatGPT（有料）', 'カットオフ後の動作': '自動でBingを検索', '現在情報の信頼性': '事実は高い；ニュアンスは低い', '改善方法': 'ソースの引用を求める；重要な主張をクロスチェック' },
          { 'AIシステム': 'Gemini（有料）', 'カットオフ後の動作': '自動でGoogle検索', '現在情報の信頼性': '事実は高い；ニュアンスは低い', '改善方法': 'グラウンディングを有効にする；引用URLを確認' },
          { 'AIシステム': 'Grok (X.com)', 'カットオフ後の動作': '自動でXの投稿を検索', '現在情報の信頼性': 'ソーシャルトレンドには良い；事実はムラがある', '改善方法': 'より深いウェブカバレッジにはDeepSearchを使用' },
          { 'AIシステム': 'Claude（無料/プロ）', 'カットオフ後の動作': 'デフォルトでは学習データのみ使用', '現在情報の信頼性': '中程度 — 2026年1月の信頼性の高いカットオフ', '改善方法': '現在のテキストをコンテキストに貼り付ける；APIユーザーは検索ツールを有効化可能' },
          { 'AIシステム': 'Perplexity', 'カットオフ後の動作': '常にまずウェブを検索', '現在情報の信頼性': '高い — 検索ネイティブ製品', '改善方法': 'すでに設計上ソースを引用している' },
          { 'AIシステム': 'すべてのローカルLLM', 'カットオフ後の動作': '学習データのみ使用 — 上書き不可', '現在情報の信頼性': 'カットオフ後のトピックでは非常に低い', '改善方法': 'RAGパイプラインを構築；手動でコンテキストを貼り付ける' },
        ],
        callouts: [
          {
            type: 'warning',
            label: '幻覚リスク',
            text: '最も高い幻覚リスクは、カットオフ後の事柄についてモデルが尋ねられたとき、それがモデルが知っていることともっともらしく似ている場合に生じます。モデルは無知を認めるのではなく、時代遅れの学習データに基づいた自信に満ちた回答を返します。',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: '企業への示唆：AIシステム別GEO戦略',
        content: [
          '<strong>GEO（生成エンジン最適化）とは、ブランド、製品、またはコンテンツをAI生成回答に露出させる取り組みです。</strong> ほとんどのAIシステムでは、GEOはSEOと同様に機能します — AIが検索エンジンからコンテンツを取得するため、BingやGoogleで良い順位を得ることがAI回答に直結します。',
          'しかしローカルLLMはこのモデルを完全に崩します。ローカルにデプロイされたLlamaやQwenはウェブを検索しません。検索経由で回答に最適化することはできません — カットオフ前に学習データに含まれていたか、デプロイ組織がRAG経由でコンテンツを注入する場合にのみ、モデルはあなたについて言及します。',
          'この表は各AIシステムのGEOチャネルをまとめています：',
        ],
        columns: ['AIシステム', 'GEOチャネル', '最適化対象', 'ローカルデプロイでの変化'],
        rows: [
          { 'AIシステム': 'GPT-5.5 (ChatGPT)', 'GEOチャネル': 'Bing検索による取得', '最適化対象': 'Bing SEO：テクニカルSEO、Bingウェブマスターツール、構造化データ', 'ローカルデプロイでの変化': 'あり — ローカルOpenAI API呼び出しにはBingなし；カットオフがハード' },
          { 'AIシステム': 'Gemini 3.1 Pro', 'GEOチャネル': 'Google検索グラウンディング', '最適化対象': 'Google SEO + 構造化データ（FAQ、HowTo、Articleスキーマ）', 'ローカルデプロイでの変化': 'まだなし — 2026年6月時点でGeminiはクラウド専用' },
          { 'AIシステム': 'Grok 4.3', 'GEOチャネル': 'X（Twitter）コンテンツ', '最適化対象': 'Xプレゼンス：認証済みアカウント、高エンゲージメント投稿、Xコミュニティ', 'ローカルデプロイでの変化': 'まだなし — 2026年6月時点でGrokはクラウド専用' },
          { 'AIシステム': 'Perplexity', 'GEOチャネル': 'ウェブネイティブ取得', '最適化対象': 'すべての検索エンジン + 権威ある情報源の引用、明確な構造化コンテンツ', 'ローカルデプロイでの変化': 'なし — Perplexityは設計上ウェブネイティブ' },
          { 'AIシステム': 'Claude（API）', 'GEOチャネル': 'ツール使用検索（Brave/ウェブ）— オプトイン', '最適化対象': '一般的なウェブプレゼンス；スニペット適格性のための構造化コンテンツ', 'ローカルデプロイでの変化': 'あり — 多くのClaudeデプロイでは検索が無効' },
          { 'AIシステム': 'Llama（ローカル）', 'GEOチャネル': 'RAGパイプラインのみ', '最適化対象': 'RAG：構造化データ形式、ナレッジベース、ドキュメントAPI', 'ローカルデプロイでの変化': 'これ自体がローカルデプロイ — SEOは無関係' },
          { 'AIシステム': 'Qwen / Gemma / Phi（ローカル）', 'GEOチャネル': 'RAGパイプラインのみ', '最適化対象': 'RAG：デプロイ組織でのドキュメント取り込みパイプライン', 'ローカルデプロイでの変化': 'これ自体がローカルデプロイ — SEOは無関係' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'ローカルLLMのGEOの盲点',
            text: 'ほとんどのGEOガイドはクラウドAIのみに焦点を当てています — BingやGoogle検索向けに最適化するよう指示します。そのアドバイスは、Llama、Qwen、Gemma、またはPhiの社内デプロイにリーチするには役立ちません。これらのモデルは検索しません。機能する唯一のGEOチャネルは、モデルをデプロイしている組織を説得して、あなたのコンテンツをRAGパイプラインに含めてもらうことです。',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-ja.png',
        imageCaption: 'AIシステム別GEO戦略 -- 検索ベース対RAGベースの2つの経路',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'GEO解決策：両AI型への参入戦略',
        content: [
          '<strong>2026年の完全なGEO戦略には2つの並行トラックが必要です：クラウドAI向けの検索最適化と、ローカルAI向けのRAG準備性です。</strong> ほとんどの組織は最初のトラックしか実施していません。',
          '<strong>トラック1 — クラウドAI（検索ベースGEO）：</strong> 従来のSEOテクニックにAI固有の追加事項を加えて適用します。コンテンツはスニペット適格性のために構造化されている必要があり（FAQ、HowToのJSON-LDスキーマ）、事実に正確であり（AIモデルは修正履歴のあるページの引用を避けます）、権威ある必要があります（BingとGoogleの品質シグナルがAI引用の可能性に直結します）。Grokについては特に、Xプレゼンス（認証済みアカウント、エンゲージメント率、フォロワー数）がブランドがGrok回答に現れるかどうかを決定します。',
          '<strong>トラック2 — ローカルAI（RAGベースGEO）：</strong> 検索経由でローカルLLMに最適化することはできません。アプローチはまったく異なります：(1) RAGパイプラインが消費する形式（Markdown、JSON-LD、OpenAPI仕様、構造化FAQ）で機械可読なナレッジベースを作成する；(2) オープンデータイニシアチブに参加して、RAGシステムを構築する組織が情報を利用できるようにする；(3) ローカルLLMをデプロイしているエンタープライズ顧客と直接関係を構築し、データパートナーシップ協定を提案する；(4) RAGパイプラインへのコンテンツ組み込みを簡単にするSDKやAPIを提供する。',
          'ほとんどの企業にとって、トラック1はすでにSEOの一環として進行中です。トラック2には新しい作業が必要です — 具体的には、人間が読むためではなく機械による取り込みに最適化された形式でコンテンツを制作することです。',
        ],
        numberedItems: [
          'AIの可視性を監査する：どのAIシステムがブランドに言及していますか？ChatGPT、Gemini、Grok、Perplexity、そしてローカルのLlama/Qwenデプロイを個別にテストしてください',
          'クラウドAIのギャップについては：構造化データマークアップを適用し（FAQPage、HowTo、TechArticle、Product）、Bingウェブマスタープレゼンスを改善し、E-E-A-Tシグナルを強化する',
          'ローカルAIのギャップについては：RAGシステムが取り込める機械可読なナレッジベース（構造化JSON、Markdownドキュメント、OpenAPI仕様）を制作する',
          'ブランドの事実を正規の変更されない形式でドキュメント化する — モデル名、説明、機能、価格 — 各バージョン変更時に更新',
          'llms.txtファイル（AIクローラー向けのプレーンテキストサイト説明）とすべての主要ページに構造化データを公開する',
          'AIシステム全体のメンション率を四半期ごとに追跡する — 従来の検索よりも速く変化する環境です',
        ],
        callouts: [
          {
            type: 'info',
            label: 'ローカルRAGリソース',
            text: '独自のLLMデプロイに最新知識を与えるためのローカルRAGの技術的な実装については、<a href="/ja/local-llms/local-rag-2026" class="text-primary hover:underline">ローカルRAG 2026：ベストツールとフレームワーク</a>および<a href="/ja/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">ローカルLLMを使った企業向けRAG</a>をご覧ください。',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AI知識カットオフ日とは何ですか？',
            a: '知識カットオフ日とは、モデルの学習データが終わる日付のことです。モデルはその日付以降に発生したイベント、製品、研究、またはコンテンツに関する情報をまったく持っていません。クラウドモデルはウェブ検索で部分的に補うことができますが、ローカルLLMはできません。',
          },
          {
            q: 'ChatGPTのカットオフが2023年10月なのに最近の出来事を知っているのはなぜですか？',
            a: 'ChatGPT（製品）は有料プランではデフォルトでBingを検索し、現在の検索結果を学習データの推論と合わせて統合します。基盤のGPT-4oモデルは依然として2023年10月のトレーニングカットオフを持っています — あなたが見ているのは検索レイヤーであり、更新された学習データではありません。',
          },
          {
            q: 'LlamaやQwenのようなローカルLLMは知識のアップデートを受け取りますか？',
            a: 'いいえ — 自動的にはありません。ローカルLLMの知識はトレーニングカットオフ時点で永久に凍結されます。新しいモデルリリース（Llama 4 Scout、Qwen3 14B）はそれぞれ異なるカットオフを持ちますが、マシン上で実行中のコピーは固定された知識を持ちます。現在の情報を得るにはRAGパイプラインを構築してください。',
          },
          {
            q: 'GEOとは何ですか？知識カットオフとどう関係しますか？',
            a: 'GEO（生成エンジン最適化）とは、コンテンツをAI生成回答に露出させる分野です。クラウドAIでは、GEOは検索最適化を通じて機能します — Bing/Googleで順位を得ることで引用されます。ローカルLLMでは、モデルが検索しないため、これは構造的に不可能です。ローカルLLMのGEOはデプロイ組織のRAGパイプラインが必要です。',
          },
          {
            q: '検証済みの中で最も新しい知識カットオフ日を持つAIモデルはどれですか？',
            a: '一次情報源で検証済みのカットオフの中では：Claude Opus 4.8が2026年1月という最も新しい信頼性の高いカットオフを持ちます。GPT-5.5は2025年8月。Gemini 3.1 Proは2025年1月。Grok 4.3は2024年11月。DeepSeek-V3とGemma 3 27Bは2024年7～8月ごろ。Phi-4は2024年6月。GPT-4o（レガシー）は2023年10月。Llama 4、Qwen3、Mistral Largeを含む複数の現行モデルは正確な日付を公式に開示していません。',
          },
          {
            q: 'SEOを使ってLlamaやQwenの回答に露出できますか？',
            a: 'いいえ。モデルがウェブを検索しないため、SEOはローカルにデプロイされたLLMに影響を与えることができません。唯一の経路は：(1) カットオフ前に学習データに含まれていたか、(2) モデルをデプロイしている組織のRAGパイプラインに含まれることです。',
          },
          {
            q: 'カットオフの影響を受ける可能性があるAI回答をどうやってファクトチェックすればよいですか？',
            a: 'カットオフリスクを示す3つのシグナル：(1) トピックが特定のバージョン、価格、人物、またはイベントを含む；(2) 変化の速い業界について尋ねている；(3) AI回答に引用がない。これらのいずれかが当てはまる場合、一次情報源で確認してください — モデルの自信に満ちたトーンは信頼性の指標ではありません。',
          },
          {
            q: 'AI回答がライブ検索を使ったかどうかわかりますか？',
            a: '多くの場合はわかります：Perplexityは常にソース引用を表示します。GeminiはグラウンディングとGoogle検索アイコンを表示します。GrokはXの検索結果を示します。ChatGPTは地球儀アイコンを表示し、ソースを表示するよう求めることができます。Claudeはデフォルトで検索しないため、インジケーターは不要です。ローカルLLMは決して検索しないため、インジケーターは存在しません — 回答は常に学習データから来ています。',
          },
        ],
      },
      relatedReading: {
          title: '関連記事',
          items: [
            '[RAG解説：検索拡張生成](/ja/prompt-engineering/rag-explained) — RAGはローカルLLMの知識カットオフ制限に対する主要な解決策です',
            '[AIの幻覚：AIはなぜ嘘をつくのか](/ja/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 知識カットオフによる情報の陳腐化は幻覚の主要な原因です',
            '[AIの限界：LLMができないこと](/ja/prompt-engineering/ai-limitations-what-llms-cant-do) — 凍結知識やライブ検索の欠如を含む構造的制約',
            '[AIモデル知識カットオフ日付 2026：チートシート](/ja/prompt-bites/ai-model-knowledge-cutoff-dates) — 全主要クラウド・ローカルモデルのひと目でわかる参照表',
            '[ローカルLLMモデルアップデート 2026](/ja/local-llms/local-llm-model-updates-2026) — 主要なオープンウェイトリリースすべてとカットオフ状況の変化を追跡',
          ],
        },
    },
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'تواريخ انقطاع معرفة الذكاء الاصطناعي والبحث المباشر و⁨GEO⁩: الدليل الكامل',
    seoTitle: 'تواريخ انقطاع معرفة النماذج واستراتيجية ⁨GEO 2026⁩',
    intro: '**كل نموذج ذكاء اصطناعي يمتلك تاريخ انقطاع معرفة — الحد الذي تنتهي عنده بيانات التدريب. لكن نماذج السحابة والنماذج المحلية تتعامل مع هذا الحد بطرق مختلفة جوهريًا.** يشرح هذا الدليل الفرق بين تواريخ الانقطاع والبحث المباشر، ويستخلص الآثار الاستراتيجية للمستخدمين والشركات — بما فيها الرؤية المحورية أن نماذج LLM المحلية تستلزم استراتيجية GEO مختلفة كليًا عن نماذج السحابة.',
    metaDescription: 'تواريخ انقطاع موثّقة لـ ⁨Claude⁩ و⁨GPT⁩ و⁨Gemini⁩ و⁨Llama⁩ و⁨Qwen⁩، مع استراتيجية ⁨GEO⁩: السحابي مقابل ⁨LLM⁩ المحلي. النماذج المحلية تحتاج ⁨RAG⁩ لا ⁨SEO⁩.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ar.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'تاريخ انقطاع معرفة الذكاء الاصطناعي',
    audience: 'المستخدمون وفرق المنتجات والمسوّقون الذين يحتاجون إلى فهم من أين تحصل نماذج الذكاء الاصطناعي على معلوماتها — وكيفية الاستجابة لذلك',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**تاريخ انقطاع معرفة الذكاء الاصطناعي هو التاريخ الذي تنتهي عنده بيانات تدريب النموذج.** تعوّض نماذج السحابة جزئيًا بالبحث المدمج في الويب (ChatGPT ← Bing، وGemini ← Google، وGrok ← X). نماذج LLM المحلية لا تملك طبقة بحث، مما يجعل تاريخ الانقطاع مطلقًا. لاستراتيجية GEO: الظهور في ذكاء اصطناعي السحابة يتطلب تحسين البحث. الظهور في الذكاء الاصطناعي المحلي يتطلب خطوط أنابيب RAG — SEO وحده لا يصل إلى نماذج لا تتصفح الويب.',
    quickFacts: [
      '**6 نماذج سحابية** متضمنة — تواريخ انقطاع موثّقة بروابط مصادر أولية',
      '**6 نماذج محلية / open-weight** متضمنة — جميعها بطبقة بحث "لا شيء"',
      '**Gemma 3 27B** لديها أقدم تاريخ انقطاع موثّق بين النماذج المحلية: أغسطس 2024',
      '**Phi-4** تاريخ انقطاعه يونيو 2024 — ثاني أقدم تاريخ موثّق بين المحلية',
      '**Grok 4.3** هو النموذج السحابي الوحيد الذي طبقة بحثه الافتراضية منصة اجتماعية (X/Twitter)',
      '**الأثر على GEO**: الشركات التي تنشر Llama/Qwen داخليًا لا يمكن الوصول إليها إلا عبر خطوط أنابيب RAG',
    ],
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
      { label: 'الحد الخفي: حقيقة تواريخ الانقطاع', anchor: 'the-invisible-limit' },
      { label: 'تاريخ الانقطاع مقابل البحث المباشر: الفرق الحاسم', anchor: 'cutoff-vs-live-search' },
      { label: 'جدول البيانات الكامل: جميع النماذج', anchor: 'full-model-table' },
      { label: 'مشكلة LLM المحلي: التشغيل بمعرفة مجمّدة', anchor: 'local-llm-problem' },
      { label: 'الآثار على المستخدمين', anchor: 'implications-for-users' },
      { label: 'الآثار على الشركات: استراتيجية GEO', anchor: 'geo-strategy' },
      { label: 'حل GEO: بناء ميزة تنافسية', anchor: 'geo-solution' },
      { label: 'الأسئلة الشائعة', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'فهم أساسي لكيفية عمل نماذج اللغة الكبيرة',
      headline: 'تواريخ انقطاع معرفة الذكاء الاصطناعي والبحث المباشر وGEO: الدليل الكامل',
      description: 'الدليل الكامل لتواريخ انقطاع معرفة الذكاء الاصطناعي مع بيانات موثّقة لجميع النماذج الرئيسية وآثار استراتيجية GEO ولماذا تحتاج نماذج LLM المحلية RAG وليس SEO.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'ar',
      keywords: [
        'تاريخ انقطاع معرفة الذكاء الاصطناعي', 'تاريخ الانقطاع', 'انقطاع LLM المحلي', 'استراتيجية GEO',
        'تحسين محرك التوليد', 'RAG مقابل SEO', 'انقطاع ChatGPT',
        'انقطاع Claude', 'انقطاع Llama', 'انقطاع Gemma', 'انقطاع Phi-4',
        'انقطاع تدريب الذكاء الاصطناعي 2026', 'البحث المباشر بالذكاء الاصطناعي', 'بحث Bing بالذكاء الاصطناعي', 'قيود LLM المحلي',
      ],
      about: [
        { '@type': 'Thing', name: 'تاريخ انقطاع معرفة الذكاء الاصطناعي' },
        { '@type': 'Thing', name: 'تحسين محرك التوليد' },
        { '@type': 'Thing', name: 'نموذج اللغة الكبير المحلي' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'ar'),
      url: 'https://www.promptquorum.com/ar/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ما هو تاريخ انقطاع معرفة الذكاء الاصطناعي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'تاريخ انقطاع المعرفة هو التاريخ الذي تنتهي عنده بيانات تدريب النموذج. لا يمتلك النموذج أي معلومات عن الأحداث والمنتجات والأبحاث أو المحتوى بعد هذا التاريخ. يمكن لنماذج السحابة التعويض جزئيًا عبر البحث على الويب، لكن نماذج LLM المحلية لا تستطيع.',
          },
        },
        {
          '@type': 'Question',
          name: 'لماذا يعرف ChatGPT الأحداث الأخيرة رغم أن تاريخ انقطاعه أكتوبر 2023؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (المنتج) يبحث في Bing افتراضيًا في الخطط المدفوعة. النموذج الأساسي GPT-5.5 تاريخ انقطاعه أغسطس 2025؛ GPT-4o القديم أكتوبر 2023. ما تراه هو طبقة البحث، وليس بيانات تدريب محدّثة.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل تتلقى نماذج LLM المحلية كـLlama أو Qwen تحديثات للمعرفة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. معرفة نماذج LLM المحلية تتجمّد بصفة دائمة عند تاريخ انقطاع التدريب. للوصول إلى معلومات حالية، تحتاج إلى بناء خط أنابيب RAG.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما هو GEO وعلاقته بتواريخ الانقطاع؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO (تحسين محرك التوليد) هو ممارسة جعل علامتك التجارية أو محتواك يظهر في إجابات الذكاء الاصطناعي. لذكاء اصطناعي السحابة، GEO يتداخل مع SEO. لنماذج LLM المحلية، هذا مستحيل هيكليًا لأن النموذج لا يبحث. GEO لـLLM المحلي يتطلب خط أنابيب RAG من المنظمة المنشِرة.',
          },
        },
        {
          '@type': 'Question',
          name: 'أي نموذج ذكاء اصطناعي لديه أحدث تاريخ انقطاع معرفة موثّق؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Claude Opus 4.8 لديه أحدث تاريخ انقطاع موثوق في يناير 2026. GPT-5.5: أغسطس 2025. Gemini 3.1 Pro: يناير 2025. Grok 4.3: نوفمبر 2024. DeepSeek-V3: يوليو 2024. Gemma 3 27B: أغسطس 2024. Phi-4: يونيو 2024. GPT-4o القديم: أكتوبر 2023.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يمكنني استخدام SEO للظهور في إجابات Llama أو Qwen؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. SEO لا يستطيع التأثير في نماذج LLM المنشورة محليًا لأن النموذج لا يبحث في الويب. المسارات الوحيدة: (1) أن تكون في بيانات التدريب قبل تاريخ الانقطاع، أو (2) أن تُضمَّن في خط أنابيب RAG للمنظمة المنشِرة.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أتحقق من صحة إجابات الذكاء الاصطناعي المتأثرة بتواريخ الانقطاع؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ثلاثة مؤشرات تشير إلى خطر الانقطاع: (1) الموضوع يتضمن إصدارات محددة أو أسعارًا؛ (2) تسأل عن قطاع يتغير بسرعة؛ (3) إجابة الذكاء الاصطناعي خالية من الاستشهادات. تحقق دائمًا من المصادر الأولية.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أعرف إذا كانت إجابة ذكاء اصطناعي استخدمت البحث المباشر؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity دائمًا يعرض استشهادات بالمصادر. Gemini يعرض أيقونة Google Search عند التأريض. Grok يشير إلى نتائج بحث X. ChatGPT يعرض أيقونة كرة أرضية. Claude لا يبحث افتراضيًا. نماذج LLM المحلية لا تبحث أبدًا.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'كل نموذج ذكاء اصطناعي لديه تاريخ انقطاع معرفة — تاريخ حاسم لا توجد بعده بيانات تدريب عن الأحداث أو المنتجات أو المعلومات',
          'نماذج السحابة (ChatGPT وGemini وGrok) تضيف بحثًا مباشرًا على الويب فوق بيانات التدريب، مما يتجاوز جزئيًا تاريخ الانقطاع للاستعلامات الواقعية',
          'نماذج LLM المحلية (Llama وQwen وGemma وPhi وMistral open-weight) لا تملك طبقة بحث — تاريخ الانقطاع مطلق ولا يمكن تجاوزه بدون نظام RAG',
          'لاستراتيجية GEO: الظهور في ذكاء اصطناعي السحابة يتطلب تحسين البحث التقليدي (Bing وGoogle وX)؛ الظهور في الذكاء الاصطناعي المحلي يتطلب خطوط أنابيب RAG',
          'تواريخ انقطاع موثّقة: Claude Opus 4.8 = يناير 2026؛ GPT-5.5 = أغسطس 2025؛ Gemini 3.1 Pro = يناير 2025؛ Grok 4.3 = نوفمبر 2024؛ Gemma 3 27B = أغسطس 2024؛ DeepSeek-V3 = يوليو 2024؛ Phi-4 = يونيو 2024؛ GPT-4o القديم = أكتوبر 2023 (أصدرت DeepSeek منذ ذلك الحين DeepSeek-V4 — Flash/Pro — كجيل جديد بأوزان مفتوحة؛ يظل R1/V3 صالحًا للتشغيل محليًا.)',
          'عدة نماذج رئيسية — بما فيها Llama 4 وQwen3 وMistral Large 3 — لم تُفصح علنًا عن تواريخ انقطاع دقيقة',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'الحد الخفي: حقيقة تواريخ انقطاع المعرفة',
        content: [
          '<strong>تاريخ انقطاع المعرفة هو التاريخ الذي يتوقف فيه نموذج الذكاء الاصطناعي عن تلقي بيانات التدريب.</strong> الأحداث التي وقعت بعد الانقطاع وإطلاقات المنتجات والأبحاث الجديدة وتغيرات الأسعار أو أي تطورات أخرى غير مرئية للنموذج.',
          'هذا يخلق نمط فشل منهجي: الذكاء الاصطناعي يقدم إجابات واثقة عن موضوعات لا يعرفها إطلاقًا. لأن النموذج لا يعرف ما لا يعرفه.',
          'يزيد الالتباس لأن كثيرًا من المنتجات السحابية تضيف بحثًا مباشرًا فوق النموذج الأساسي. حين يجيب ChatGPT على سؤال عن أخبار اليوم، يستخدم Bing — وليس بيانات التدريب.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'مرجع سريع',
            text: 'تحتاج الجدول فقط؟ راجع <a href="/ar/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">ورقة مرجع تواريخ انقطاع معرفة الذكاء الاصطناعي</a>.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'تاريخ الانقطاع مقابل البحث المباشر: الفرق الذي يغير كل شيء',
        content: [
          '<strong>التمييز الأهم هو بين انقطاع التدريب (خاصية النموذج) والبحث المباشر (ميزة المنتج).</strong>',
          '<strong>انقطاع التدريب</strong> مضمّن في أوزان النموذج. لا يمكن تغييره دون إعادة تدريب النموذج.',
          '<strong>طبقة البحث المباشر</strong> أداة خارجية مدمجة على مستوى المنتج. حين يحتاج ChatGPT إلى معلومات حالية، يستعلم API Bing ويجمع النتائج مع قدرته الاستدلالية.',
        ],
        columns: ['النموذج / المنتج', 'طبقة البحث', 'محفّز البحث', 'ملاحظة'],
        rows: [
          { 'النموذج / المنتج': 'GPT-5.5 (ChatGPT)', 'طبقة البحث': 'Bing', 'محفّز البحث': 'تلقائي — النموذج يقرر', 'ملاحظة': 'مفعّل افتراضيًا في ChatGPT Plus/Pro؛ مطفأ في API المباشر' },
          { 'النموذج / المنتج': 'Gemini 3.1 Pro', 'طبقة البحث': 'Google Search', 'محفّز البحث': 'تلقائي — النموذج يقرر', 'ملاحظة': 'Google Grounding API للمطورين' },
          { 'النموذج / المنتج': 'Grok 4.3 (X.com)', 'طبقة البحث': 'X (Twitter)', 'محفّز البحث': 'تلقائي — النموذج يقرر', 'ملاحظة': 'DeepSearch = بحث أوسع، اختياري' },
          { 'النموذج / المنتج': 'Perplexity', 'طبقة البحث': 'ويب متعدد المصادر', 'محفّز البحث': 'دائمًا — في كل استعلام', 'ملاحظة': 'بحث-أولًا بالتصميم؛ يستشهد بالمصادر' },
          { 'النموذج / المنتج': 'Claude (Anthropic)', 'طبقة البحث': 'Brave / ويب (أداة)', 'محفّز البحث': 'اختياري للمطور فقط', 'ملاحظة': 'مطفأ افتراضيًا؛ يتطلب تكوين أدوات API' },
          { 'النموذج / المنتج': 'DeepSeek (سحابة)', 'طبقة البحث': 'لا شيء', 'محفّز البحث': 'لا ينطبق', 'ملاحظة': 'بلا طبقة بحث؛ تاريخ الانقطاع حد صلب' },
          { 'النموذج / المنتج': 'Mistral (سحابة)', 'طبقة البحث': 'لا شيء', 'محفّز البحث': 'لا ينطبق', 'ملاحظة': 'بلا طبقة بحث؛ تاريخ الانقطاع حد صلب' },
          { 'النموذج / المنتج': 'جميع نماذج LLM المحلية', 'طبقة البحث': 'لا شيء', 'محفّز البحث': 'لا ينطبق', 'ملاحظة': 'بلا وصول للإنترنت افتراضيًا؛ يتطلب RAG للمعلومات الحالية' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-ar.png',
        imageCaption: 'حد المعرفة مقابل البحث المباشر -- أي أنظمة ذكاء اصطناعي تبحث على الويب',
      },
      full_table: {
        id: 'full-model-table',
        title: 'البيانات الموثّقة الكاملة: جميع النماذج الرئيسية',
        content: [
          'الجدول أدناه يستخدم فقط بيانات المصادر الأولية. حيث لا يوجد مصدر أولي يُعلَّم تاريخ الانقطاع "غير مُفصح عنه علنًا".',
          '<strong>النماذج السحابية:</strong>',
        ],
        columns: ['النموذج', 'المزوّد', 'تاريخ الانقطاع', 'موثّق', 'بحث افتراضي', 'طبقة البحث'],
        rows: CLOUD_MODELS.map(m => ({
          'النموذج': m.modelName,
          'المزوّد': m.vendor,
          'تاريخ الانقطاع': m.cutoffDate,
          'موثّق': m.cutoffVerified ? '✓' : '—',
          'بحث افتراضي': m.hasLiveSearchDefault ? 'نعم' : (m.searchLayer === 'Tool-use only' ? 'عبر أداة فقط' : 'لا'),
          'طبقة البحث': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'من بين نماذج السحابة، Claude وحده يتطلب تكوينًا صريحًا من المطور لبحث الويب — جميع الآخرين لديهم البحث المباشر مفعّلًا افتراضيًا.',
          },
          {
            type: 'in-plain-terms',
            text: 'نماذج الذكاء الاصطناعي السحابية كباحثين يمكنهم البحث بين الإجابات. نماذج الذكاء الاصطناعي المحلية كباحثين كانوا دون اتصال منذ تاريخ محدد.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'النماذج المحلية / open-weight: تواريخ انقطاع موثّقة',
        content: [
          '<strong>نماذج open-weight المحلية — جميعها بطبقة بحث "لا شيء":</strong>',
        ],
        columns: ['النموذج', 'المزوّد', 'تاريخ الانقطاع', 'موثّق', 'النشر', 'الترخيص'],
        rows: LOCAL_MODELS.map(m => ({
          'النموذج': m.modelName,
          'المزوّد': m.vendor,
          'تاريخ الانقطاع': m.cutoffDate,
          'موثّق': m.cutoffVerified ? '✓ مصدر أولي' : '— غير مُفصح',
          'النشر': m.deployment,
          'الترخيص': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'الرؤية الأساسية',
            text: 'جميع النماذج المحلية في هذا الجدول لديها طبقة بحث "لا شيء". هذه خاصية هيكلية لنماذج LLM المنشورة محليًا، وليست قيدًا على نموذج بعينه.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'مشكلة LLM المحلي: التشغيل بمعرفة مجمّدة',
        content: [
          '<strong>عند تشغيل LLM محلي عبر Ollama أو LM Studio أو llama.cpp، أنت تشغّل نموذجًا معرفته مجمّدة كليًا في تاريخ محدد.</strong>',
          'هذه ليست مجرد إزعاج — إنها خاصية معمارية أساسية. الأوزان على القرص لا تتغير بين التشغيلات.',
          'أنماط فشل محددة: نموذج يُسأل عن شركة أعادت تسميتها بعد الانقطاع سيستخدم الاسم القديم. نموذج يُسأل عن منتج أُطلق بعد الانقطاع سيخترع وصفًا مقنعًا.',
          '<strong>الآلاف من التطبيقات المبنية على نماذج LLM المحلية تشترك في مشكلة المعرفة المجمّدة هذه.</strong> أي منظمة تنشر Llama أو Qwen أو Gemma أو Phi داخليًا بلا RAG تشغّل برمجيات لا تعرف ما حدث بعد تاريخ الانقطاع.',
        ],
        columns: ['السيناريو', 'LLM سحابي مع بحث', 'LLM محلي بلا RAG'],
        rows: [
          { 'السيناريو': 'سؤال عن أخبار اليوم', 'LLM سحابي مع بحث': 'يبحث في Bing/Google؛ إجابة حالية', 'LLM محلي بلا RAG': 'يعترف بالجهل أو يهلوس' },
          { 'السيناريو': 'سؤال عن إطلاق منتج 2025', 'LLM سحابي مع بحث': 'يبحث على الويب؛ مواصفات حالية', 'LLM محلي بلا RAG': 'بلا معرفة إذا كان بعد الانقطاع' },
          { 'السيناريو': 'سؤال عن شركة (بعد الانقطاع)', 'LLM سحابي مع بحث': 'يستطيع البحث عن الموقع', 'LLM محلي بلا RAG': 'لا يجد؛ غير موجود في بيانات التدريب' },
          { 'السيناريو': 'إعادة تسمية منافس', 'LLM سحابي مع بحث': 'يجد الاسم الحالي عبر البحث', 'LLM محلي بلا RAG': 'يستخدم الاسم القديم من التدريب' },
          { 'السيناريو': 'لائحة تنظيمية جديدة', 'LLM سحابي مع بحث': 'يبحث عن النص القانوني الحالي', 'LLM محلي بلا RAG': 'معرفة ما قبل اللائحة فقط' },
          { 'السيناريو': 'ترتيب نماذج الذكاء الاصطناعي', 'LLM سحابي مع بحث': 'يبحث عن المعايير؛ محدّث في معظمه', 'LLM محلي بلا RAG': 'مجمّد عند تاريخ الانقطاع؛ ترتيب قديم' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'قيود LLM المحلي',
            text: 'للتحليل الكامل راجع <a href="/ar/local-llms/local-llm-limitations" class="text-primary hover:underline">قيود LLM المحلي: ما لا يستطيع فعله</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'الآثار على المستخدمين: كيفية الوثوق بإجابات الذكاء الاصطناعي',
        content: [
          '<strong>القاعدة الأهم: اسأل نفسك دائمًا إذا كانت الإجابة قد تغيرت بعد تاريخ انقطاع النموذج.</strong> إذا نعم، تحقق باستقلالية.',
          'تتعامل أنظمة الذكاء الاصطناعي المختلفة مع الفجوات بعد الانقطاع بطرق مختلفة.',
        ],
        columns: ['نظام الذكاء الاصطناعي', 'السلوك بعد الانقطاع', 'موثوقية المعلومات الحالية', 'كيفية التحسين'],
        rows: [
          { 'نظام الذكاء الاصطناعي': 'ChatGPT (مدفوع)', 'السلوك بعد الانقطاع': 'يبحث تلقائيًا في Bing', 'موثوقية المعلومات الحالية': 'عالية للحقائق؛ منخفضة للفروق الدقيقة', 'كيفية التحسين': 'اطلب استشهادات بالمصادر؛ تحقق من الادعاءات الرئيسية' },
          { 'نظام الذكاء الاصطناعي': 'Gemini (مدفوع)', 'السلوك بعد الانقطاع': 'يبحث تلقائيًا في Google', 'موثوقية المعلومات الحالية': 'عالية للحقائق؛ منخفضة للفروق الدقيقة', 'كيفية التحسين': 'فعّل التأريض؛ راجع روابط URL المستشهد بها' },
          { 'نظام الذكاء الاصطناعي': 'Grok (X.com)', 'السلوك بعد الانقطاع': 'يبحث تلقائيًا في منشورات X', 'موثوقية المعلومات الحالية': 'جيد للاتجاهات الاجتماعية؛ غير منتظم للحقائق', 'كيفية التحسين': 'استخدم DeepSearch لتغطية أوسع' },
          { 'نظام الذكاء الاصطناعي': 'Claude (مجاني/برو)', 'السلوك بعد الانقطاع': 'يستخدم بيانات التدريب فقط افتراضيًا', 'موثوقية المعلومات الحالية': 'متوسط — انقطاع موثوق يناير 2026', 'كيفية التحسين': 'الصق النص الحالي في السياق' },
          { 'نظام الذكاء الاصطناعي': 'Perplexity', 'السلوك بعد الانقطاع': 'يبحث على الويب دائمًا أولًا', 'موثوقية المعلومات الحالية': 'عالية — منتج بحث أصيل', 'كيفية التحسين': 'يستشهد بالمصادر بالتصميم بالفعل' },
          { 'نظام الذكاء الاصطناعي': 'جميع نماذج LLM المحلية', 'السلوك بعد الانقطاع': 'بيانات تدريب فقط — بلا تجاوز', 'موثوقية المعلومات الحالية': 'منخفضة جدًا للمواضيع بعد الانقطاع', 'كيفية التحسين': 'ابنِ خط أنابيب RAG؛ الصق السياق يدويًا' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'خطر الهلوسة',
            text: 'أعلى خطر للهلوسة يكون حين يُسأل النموذج عن محتوى بعد تاريخ الانقطاع يبدو مشابهًا لما يعرفه النموذج. سيقدم إجابة واثقة بدلًا من الاعتراف بالجهل.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'الآثار على الشركات: استراتيجية GEO لكل نظام ذكاء اصطناعي',
        content: [
          '<strong>GEO (تحسين محرك التوليد) هو ممارسة جعل علامتك التجارية أو منتجك أو محتواك يظهر في إجابات الذكاء الاصطناعي.</strong>',
          'لكن نماذج LLM المحلية تكسر هذا النموذج كليًا. Llama أو Qwen المنشور محليًا لا يبحث في الويب.',
          'هذا الجدول يُعيّن قنوات GEO لكل نظام ذكاء اصطناعي:',
        ],
        columns: ['نظام الذكاء الاصطناعي', 'قناة GEO', 'ما يجب تحسينه', 'هل يغيّر النشر المحلي هذا؟'],
        rows: [
          { 'نظام الذكاء الاصطناعي': 'GPT-5.5 (ChatGPT)', 'قناة GEO': 'بحث Bing', 'ما يجب تحسينه': 'SEO Bing: SEO تقني وBing Webmaster Tools وبيانات منظّمة', 'هل يغيّر النشر المحلي هذا؟': 'نعم — استدعاءات API المحلية بلا Bing' },
          { 'نظام الذكاء الاصطناعي': 'Gemini 3.1 Pro', 'قناة GEO': 'تأريض Google Search', 'ما يجب تحسينه': 'SEO Google + بيانات منظّمة', 'هل يغيّر النشر المحلي هذا؟': 'ليس بعد — Gemini سحابة فقط' },
          { 'نظام الذكاء الاصطناعي': 'Grok 4.3', 'قناة GEO': 'محتوى X (Twitter)', 'ما يجب تحسينه': 'حضور على X: حساب موثّق ومنشورات عالية التفاعل', 'هل يغيّر النشر المحلي هذا؟': 'ليس بعد — Grok سحابة فقط' },
          { 'نظام الذكاء الاصطناعي': 'Perplexity', 'قناة GEO': 'بحث ويب أصيل', 'ما يجب تحسينه': 'جميع محركات البحث + مصادر موثوقة', 'هل يغيّر النشر المحلي هذا؟': 'لا — ويب أصيل بالتصميم' },
          { 'نظام الذكاء الاصطناعي': 'Claude (API)', 'قناة GEO': 'بحث عبر أداة — اختياري', 'ما يجب تحسينه': 'حضور ويب عام؛ محتوى منظّم لملاءمة المقتطفات', 'هل يغيّر النشر المحلي هذا؟': 'نعم — كثير من نشريات Claude لديها البحث معطّلًا' },
          { 'نظام الذكاء الاصطناعي': 'Llama (محلي)', 'قناة GEO': 'خط أنابيب RAG فقط', 'ما يجب تحسينه': 'RAG: تنسيقات بيانات منظّمة وقاعدة معرفة وAPIs للمستندات', 'هل يغيّر النشر المحلي هذا؟': 'هذا هو النشر المحلي — SEO غير ذي صلة' },
          { 'نظام الذكاء الاصطناعي': 'Qwen / Gemma / Phi (محلي)', 'قناة GEO': 'خط أنابيب RAG فقط', 'ما يجب تحسينه': 'RAG: خط أنابيب جمع مستندات المنظمة المنشِرة', 'هل يغيّر النشر المحلي هذا؟': 'هذا هو النشر المحلي — SEO غير ذي صلة' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'نقطة عمياء GEO للـLLM المحلي',
            text: 'معظم أدلة GEO تركز على ذكاء اصطناعي السحابة فقط. ذلك النصح عديم الجدوى للوصول إلى نشريات داخلية من Llama أو Qwen. هذه النماذج لا تبحث. قناة GEO الوحيدة الفعّالة هي إقناع المنظمة المنشِرة بتضمين محتواك في خط أنابيب RAG.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-ar.png',
        imageCaption: 'استراتيجية GEO حسب نظام الذكاء الاصطناعي -- مساران: قائم على البحث مقابل قائم على RAG',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'حل GEO: بناء ميزة تنافسية لكلا نوعَي الذكاء الاصطناعي',
        content: [
          '<strong>استراتيجية GEO الكاملة في 2026 تتطلب مسارين متوازيين: تحسين البحث للذكاء الاصطناعي السحابي والجاهزية لـRAG للذكاء الاصطناعي المحلي.</strong>',
          '<strong>المسار 1 — الذكاء الاصطناعي السحابي:</strong> تقنيات SEO التقليدية مع إضافات خاصة بالذكاء الاصطناعي — هيكلة المحتوى لملاءمة المقتطفات ودقته واقعيًا وسلطته.',
          '<strong>المسار 2 — الذكاء الاصطناعي المحلي:</strong> إنشاء قاعدة معرفة قابلة للقراءة آليًا (Markdown وJSON-LD ومواصفات OpenAPI)؛ المشاركة في مبادرات البيانات المفتوحة؛ بناء علاقات مع عملاء مؤسسيين.',
          'المسار 1 جارٍ عادةً كجزء من SEO. المسار 2 يتطلب عملًا جديدًا — إنشاء محتوى محسّن لجمع الآلات.',
        ],
        numberedItems: [
          'مراجعة الظهور في الذكاء الاصطناعي: اختبر ChatGPT وGemini وGrok وPerplexity والنشريات المحلية بشكل منفصل',
          'لثغرات الذكاء الاصطناعي السحابي: طبّق ترميز البيانات المنظّمة (FAQPage وHowTo وTechArticle) وحسّن حضور Bing Webmaster',
          'لثغرات الذكاء الاصطناعي المحلي: أنشئ قاعدة معرفة قابلة للقراءة آليًا (JSON منظّم ومستندات Markdown)',
          'وثّق حقائق العلامة التجارية بتنسيق ثابت — أسماء النماذج والأوصاف والميزات والأسعار',
          'انشر ملف llms.txt والبيانات المنظّمة في جميع الصفحات الرئيسية',
          'تتبّع معدل الذكر في جميع أنظمة الذكاء الاصطناعي ربع سنويًا',
        ],
        callouts: [
          {
            type: 'info',
            label: 'موارد RAG المحلي',
            text: 'للتطبيق التقني، راجع <a href="/ar/local-llms/local-rag-2026" class="text-primary hover:underline">RAG المحلي 2026: أفضل الأدوات والأطر</a> و<a href="/ar/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">RAG المؤسسي مع نماذج LLM المحلية</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو تاريخ انقطاع معرفة الذكاء الاصطناعي؟',
            a: 'تاريخ انقطاع المعرفة هو التاريخ الذي تنتهي عنده بيانات تدريب النموذج. لا يمتلك النموذج أي معلومات عن الأحداث أو المنتجات أو المحتوى بعد هذا التاريخ. يمكن لنماذج السحابة التعويض جزئيًا، لكن نماذج LLM المحلية لا تستطيع.',
          },
          {
            q: 'إذا كان انقطاع ChatGPT في أكتوبر 2023، لماذا يعرف الأحداث الأخيرة؟',
            a: 'ChatGPT (المنتج) يبحث في Bing افتراضيًا في الخطط المدفوعة. النموذج الأساسي GPT-4o لا يزال بتاريخ انقطاع أكتوبر 2023 — ما تراه هو طبقة البحث، وليس بيانات تدريب محدّثة.',
          },
          {
            q: 'هل تتلقى نماذج LLM المحلية كـLlama أو Qwen تحديثات للمعرفة؟',
            a: 'لا. معرفة نماذج LLM المحلية تتجمّد بصفة دائمة عند تاريخ انقطاع التدريب. للحصول على معلومات حالية، ابنِ خط أنابيب RAG.',
          },
          {
            q: 'ما هو GEO وعلاقته بتواريخ الانقطاع؟',
            a: 'GEO (تحسين محرك التوليد) هو ممارسة جعل علامتك التجارية أو محتواك يظهر في إجابات الذكاء الاصطناعي. لذكاء اصطناعي السحابة، GEO يتداخل مع SEO. لنماذج LLM المحلية، هذا مستحيل هيكليًا لأن النموذج لا يبحث.',
          },
          {
            q: 'أي نموذج ذكاء اصطناعي لديه أحدث تاريخ انقطاع موثّق؟',
            a: 'Claude Opus 4.8 لديه أحدث تاريخ انقطاع موثوق في يناير 2026. GPT-5.5: أغسطس 2025. Gemini 3.1 Pro: يناير 2025. Grok 4.3: نوفمبر 2024. Phi-4: يونيو 2024. GPT-4o القديم: أكتوبر 2023.',
          },
          {
            q: 'هل يمكنني استخدام SEO للظهور في إجابات Llama أو Qwen؟',
            a: 'لا. SEO لا يستطيع التأثير في نماذج LLM المنشورة محليًا لأن النموذج لا يبحث في الويب.',
          },
          {
            q: 'كيف أتحقق من صحة إجابات الذكاء الاصطناعي المتأثرة بتواريخ الانقطاع؟',
            a: 'ثلاثة مؤشرات: (1) الموضوع يتضمن إصدارات أو أسعارًا محددة؛ (2) قطاع يتغير بسرعة؛ (3) لا استشهادات في الإجابة. تحقق دائمًا من المصادر الأولية.',
          },
          {
            q: 'كيف أعرف إذا كانت إجابة الذكاء الاصطناعي استخدمت البحث المباشر؟',
            a: 'Perplexity دائمًا يعرض استشهادات. Gemini يعرض أيقونة Google Search. Grok يشير إلى نتائج X. ChatGPT يعرض أيقونة كرة أرضية. Claude لا يبحث افتراضيًا. نماذج LLM المحلية لا تبحث أبدًا.',
          },
        ],
      },
      relatedReading: {
          title: 'قراءة ذات صلة',
          items: [
            '[RAG موضّح: التوليد المعزّز بالاسترجاع](/ar/prompt-engineering/rag-explained) — RAG هو الحل الرئيسي لحدود قطع معرفة LLM المحلي',
            '[هلوسة الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي معلومات](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — قِدَم انقطاع المعرفة هو سبب رئيسي للهلوسة',
            '[قيود الذكاء الاصطناعي: ما لا تستطيع نماذج LLM فعله](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) — القيود الهيكلية بما فيها المعرفة المجمّدة وغياب البحث المباشر',
            '[تواريخ انقطاع معرفة نماذج الذكاء الاصطناعي 2026: ورقة مرجعية](/ar/prompt-bites/ai-model-knowledge-cutoff-dates) — جدول مرجعي قابل للمسح لجميع النماذج الرئيسية السحابية والمحلية',
            '[تحديثات نماذج LLM المحلية 2026](/ar/local-llms/local-llm-model-updates-2026) — تتبع كل إصدار رئيسي مفتوح الأوزان وتأثيره على مشهد الانقطاع',
          ],
        },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'Dates de coupure des IA, recherche en direct et GEO : le guide complet',
    seoTitle: 'Dates de coupure des IA & stratégie GEO 2026 — Focus LLM local',
    intro: '**Chaque modèle d\'IA possède une date de coupure de connaissance — une limite ferme après laquelle ses données d\'entraînement s\'arrêtent. Mais les modèles cloud et les modèles locaux gèrent cette limite de façons fondamentalement différentes.** Ce guide explique la distinction entre coupure et recherche en direct, cartographie le comportement de chaque modèle majeur, et dégage les implications stratégiques pour les utilisateurs et les entreprises qui souhaitent apparaître dans les réponses générées par l\'IA — y compris l\'insight clé que les LLM locaux nécessitent une stratégie GEO entièrement différente de celle des modèles cloud.',
    metaDescription: 'Guide complet sur les dates de coupure des IA : dates vérifiées pour Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi — plus stratégie GEO pour apparaître dans l\'IA cloud vs LLM locaux. Les modèles locaux ont besoin de RAG, pas de SEO.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-fr.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Date de coupure de l\'IA',
    audience: 'Utilisateurs, équipes produit et marketeurs qui ont besoin de comprendre où les modèles d\'IA obtiennent leurs informations — et comment agir en conséquence',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**Une date de coupure de connaissance est la date après laquelle le modèle ne dispose plus de données d\'entraînement.** Les modèles cloud compensent partiellement via une recherche web intégrée (ChatGPT → Bing, Gemini → Google, Grok → X). Les LLM locaux n\'ont aucune couche de recherche — leur coupure est absolue. Pour la stratégie GEO : pour apparaître dans l\'IA cloud, optimisez pour la recherche. Pour apparaître dans l\'IA locale, construisez des pipelines RAG — le SEO seul ne peut pas atteindre un modèle qui ne recherche jamais sur le web.',
    quickFacts: [
      '**6 modèles cloud** couverts — dates de coupure vérifiées avec liens vers les sources primaires',
      '**6 modèles locaux/open-weight** couverts — tous ont "Aucune" pour la couche de recherche',
      '**Gemma 3 27B** a la date de coupure vérifiée la plus ancienne parmi les modèles locaux actuels : août 2024',
      '**Phi-4** a une coupure de juin 2024 — la deuxième plus ancienne vérifiée parmi les modèles locaux',
      '**Grok 4.3** est le seul modèle cloud dont la couche de recherche par défaut est une plateforme sociale (X/Twitter) plutôt que le web général',
      '**Implication GEO** : les entreprises qui déploient Llama/Qwen en interne ne peuvent être atteintes que via les pipelines RAG qu\'elles construisent elles-mêmes',
    ],
    toc: [
      { label: 'Points clés', anchor: 'key-takeaways' },
      { label: 'La limite invisible : ce qu\'est vraiment une coupure', anchor: 'the-invisible-limit' },
      { label: 'Coupure vs recherche en direct : la distinction décisive', anchor: 'cutoff-vs-live-search' },
      { label: 'Tableau de données complet : tous les modèles', anchor: 'full-model-table' },
      { label: 'Le problème des LLM locaux : tourner avec un cerveau gelé', anchor: 'local-llm-problem' },
      { label: 'Implications pour les utilisateurs', anchor: 'implications-for-users' },
      { label: 'Implications pour les entreprises : stratégie GEO', anchor: 'geo-strategy' },
      { label: 'La solution GEO : construire un fossé défensif', anchor: 'geo-solution' },
      { label: 'FAQ', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'Dates de coupure des IA, recherche en direct et GEO : le guide complet',
      description: 'Guide complet sur les dates de coupure des IA avec données vérifiées pour tous les modèles cloud et locaux majeurs, plus les implications de la stratégie GEO — y compris pourquoi les LLM locaux nécessitent du RAG, pas du SEO.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'fr',
      keywords: [
        'date de coupure IA', 'date de coupure connaissance', 'coupure LLM local', 'stratégie GEO',
        'optimisation moteur génératif', 'RAG vs SEO', 'coupure connaissance ChatGPT',
        'coupure connaissance Claude', 'coupure Llama', 'coupure Gemma', 'coupure Phi-4',
        'coupure entraînement IA 2026', 'recherche en direct IA', 'recherche Bing IA', 'limitations LLM local',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'fr'),
      url: 'https://www.promptquorum.com/fr/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'une date de coupure de connaissance IA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une date de coupure de connaissance est la date après laquelle les données d\'entraînement du modèle s\'arrêtent. Le modèle n\'a aucune information sur les événements, produits, recherches ou tout autre contenu publié après cette date. Les modèles cloud peuvent partiellement compenser via une recherche web intégrée ; les LLM locaux ne le peuvent pas — leur coupure est absolue.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi ChatGPT semble-t-il connaître des événements récents alors que son modèle de base a une date de coupure d\'entraînement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (le produit) recherche sur Bing par défaut dans les niveaux payants et enrichit ses réponses avec des résultats de recherche actuels. Cela signifie qu\'il peut répondre à des questions factuelles sur des événements récents même si les données d\'entraînement du modèle sous-jacent ont une coupure fixe (la coupure d\'entraînement de GPT-5.5 est août 2025 ; le GPT-4o héritage se termine en octobre 2023). La coupure d\'entraînement limite toujours la compréhension contextuelle des sujets postérieurs à la coupure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les LLM locaux comme Llama et Qwen reçoivent-ils des mises à jour de connaissance ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. La connaissance d\'un LLM local est définitivement figée à sa date de coupure d\'entraînement. Lorsqu\'une nouvelle version du modèle est publiée (par ex. Llama 4 Scout remplaçant Llama 3.3), elle a une nouvelle coupure — mais le modèle en cours d\'exécution sur votre machine ne se met pas à jour automatiquement. Pour accéder aux informations actuelles, vous devez construire un pipeline RAG (Génération Augmentée par Récupération) qui récupère les documents au moment de la requête et les injecte dans la fenêtre de contexte du modèle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que le GEO et quel est son rapport avec les dates de coupure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le GEO (Generative Engine Optimization ou Optimisation pour les Moteurs Génératifs) est la pratique qui consiste à faire apparaître votre marque ou contenu dans les réponses générées par l\'IA. Pour les modèles IA cloud, le GEO chevauche le SEO — si votre contenu est bien classé dans Bing, Google ou X, il peut être récupéré et cité par ChatGPT, Gemini ou Grok. Pour les LLM locaux, le GEO via la recherche est impossible car le modèle ne fait jamais de recherche web. Le seul moyen d\'atteindre un déploiement LLM local est via des pipelines RAG construits par l\'organisation qui exécute le modèle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quel modèle IA a la date de coupure de connaissance la plus récente ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parmi les coupures vérifiées par source primaire : Claude Opus 4.8 a la coupure fiable la plus récente à janvier 2026. GPT-5.5 est août 2025. Grok 4.3 est novembre 2024. Gemini 3.1 Pro est janvier 2025. DeepSeek-V3 est juillet 2024. Gemma 3 27B est août 2024. Phi-4 est juin 2024. GPT-4o (héritage) est octobre 2023. Plusieurs modèles actuels dont Llama 4, Qwen3 et Mistral Large n\'ont pas divulgué publiquement de dates de coupure exactes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Puis-je utiliser le SEO pour apparaître dans les réponses de Llama ou Qwen ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. L\'optimisation pour les moteurs de recherche ne peut pas influencer un LLM exécuté localement car le modèle n\'effectue jamais de recherche web. Pour apparaître dans les sorties d\'un LLM local, vous devez soit : (1) avoir été présent dans les données d\'entraînement du modèle avant sa coupure, soit (2) être inclus via des pipelines RAG construits par l\'organisation qui déploie le modèle. C\'est un canal fondamentalement différent du SEO traditionnel ou du GEO pour l\'IA cloud.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels modèles IA cloud effectuent une recherche sur le web en direct par défaut ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT utilise Bing par défaut (niveaux payants). Gemini 3.1 Pro utilise Google Search par défaut. Grok 4.3 recherche sur X (Twitter) par défaut. Perplexity est natif de la recherche web pour chaque requête. Claude nécessite une activation explicite d\'outil par le développeur et ne recherche pas par défaut. DeepSeek et Mistral Large n\'ont pas de recherche par défaut. Tous les LLM locaux (Llama, Qwen, Gemma, Phi, poids ouverts Mistral) n\'ont aucune capacité de recherche.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que faire si j\'ai besoin d\'informations actuelles depuis un LLM local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Construisez un pipeline RAG (Génération Augmentée par Récupération). Un système RAG récupère les documents actuels pertinents — depuis une recherche web, une base de données interne ou un entrepôt de documents — au moment de la requête et les injecte dans la fenêtre de contexte du LLM avant de générer une réponse. Les outils RAG locaux populaires incluent LlamaIndex, LangChain et Ollama avec une couche de récupération. Le LLM raisonne alors sur les documents injectés plutôt que de s\'appuyer uniquement sur des données d\'entraînement figées.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Chaque modèle IA a une date de coupure de connaissance — une date ferme après laquelle ses données d\'entraînement s\'arrêtent et il n\'a aucune conscience des événements, produits ou informations',
          'Les modèles cloud (ChatGPT, Gemini, Grok) superposent une recherche web en direct sur leurs données d\'entraînement ; cela remplace partiellement la coupure pour les requêtes factuelles',
          'Les LLM locaux (Llama, Qwen, Gemma, Phi, Mistral open-weight) n\'ont AUCUNE couche de recherche — la coupure est absolue et ne peut pas être contournée sans construire un système RAG',
          'Pour le GEO (Optimisation pour les Moteurs Génératifs) : apparaître dans l\'IA cloud nécessite une optimisation de recherche traditionnelle (Bing, Google, X) ; apparaître dans l\'IA locale nécessite des pipelines RAG — le SEO ne peut pas atteindre un modèle qui ne touche jamais au web',
          'Coupures vérifiées : Claude Opus 4.8 = jan. 2026 (fiable) ; GPT-5.5 = août 2025 ; Gemini 3.1 Pro = jan. 2025 ; Grok 4.3 = nov. 2024 ; Gemma 3 27B = août 2024 ; DeepSeek-V3 = juil. 2024 ; Phi-4 = juin 2024 ; GPT-4o (héritage) = oct. 2023 (DeepSeek a depuis publié DeepSeek-V4 — Flash/Pro — comme nouvelle génération à poids ouverts ; R1/V3 restent utilisables en local.)',
          'Plusieurs modèles majeurs — Llama 4, Qwen3, Mistral Large 3 — n\'ont pas divulgué publiquement de dates de coupure exactes',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'La limite invisible : ce qu\'est vraiment une date de coupure de connaissance',
        content: [
          '<strong>Une date de coupure de connaissance est la date après laquelle un modèle IA n\'a plus reçu de données d\'entraînement.</strong> Le modèle a lu d\'énormes quantités de texte — pages web, livres, code, articles de recherche — jusqu\'à cette date, et absolument rien après. Les événements, lancements de produits, nouvelles recherches, changements de prix, refontes d\'entreprises ou tout autre développement survenu après la coupure est invisible pour le modèle.',
          'Cela crée un mode d\'échec systématique que les utilisateurs manquent souvent : l\'IA donne des réponses confiantes et bien structurées sur des sujets dont elle n\'a aucune connaissance, car elle ne sait pas ce qu\'elle ne sait pas. Demandez à un modèle avec une coupure de 2023 des informations sur un produit de 2025 et il va soit confabuler (inventer des fabrications plausibles), soit reconnaître correctement son ignorance, soit — le plus dangereusement — donner une réponse basée sur une version antérieure du produit qui est maintenant significativement dépassée.',
          'La confusion est aggravée par le fait que de nombreux produits cloud superposent maintenant une recherche en direct sur leurs modèles de base, rendant la coupure invisible pour les utilisateurs occasionnels. Quand ChatGPT répond à une question sur l\'actualité du jour, il utilise Bing — pas ses données d\'entraînement. Retirez cette couche de recherche et le modèle travaillerait à partir de connaissances vieilles de plusieurs mois ou années.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Référence rapide',
            text: 'Vous avez juste besoin du tableau des dates de coupure ? Consultez la <a href="/fr/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">Fiche mémo des dates de coupure des IA</a> — un tableau de référence balayable pour tous les modèles majeurs.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'Coupure vs recherche en direct : la distinction qui change tout',
        content: [
          '<strong>La distinction la plus importante pour comprendre les limites de connaissance de l\'IA est entre la coupure d\'entraînement (une propriété du modèle) et la recherche en direct (une capacité du produit).</strong> Elles sont souvent confondues car les produits IA cloud mélangent les deux de façon transparente.',
          'Une <strong>coupure d\'entraînement</strong> est intégrée dans les poids du modèle. Elle ne peut pas être modifiée sans réentraîner ou affiner le modèle. Chaque copie de GPT-4o — qu\'elle tourne via ChatGPT, l\'API ou tout outil tiers — a la même coupure d\'octobre 2023.',
          'Une <strong>couche de recherche en direct</strong> est un outil externe intégré au niveau du produit. Quand ChatGPT a besoin d\'informations actuelles, il interroge l\'API de Bing, obtient des résultats actuels et les synthétise avec ses capacités de raisonnement. Cela se produit au moment de l\'inférence et peut être activé ou désactivé par l\'équipe produit.',
        ],
        columns: ['Modèle / Produit', 'Couche de recherche', 'Déclencheur', 'Notes'],
        rows: [
          { 'Modèle / Produit': 'GPT-5.5 (ChatGPT)', 'Couche de recherche': 'Bing', 'Déclencheur': 'Automatique — le modèle décide', 'Notes': 'Activé par défaut pour ChatGPT Plus/Pro ; désactivé pour les appels API bruts' },
          { 'Modèle / Produit': 'Gemini 3.1 Pro', 'Couche de recherche': 'Google Search', 'Déclencheur': 'Automatique — le modèle décide', 'Notes': 'API Google Grounding disponible pour les développeurs Vertex AI' },
          { 'Modèle / Produit': 'Grok 4.3 (X.com)', 'Couche de recherche': 'X (Twitter)', 'Déclencheur': 'Automatique — le modèle décide', 'Notes': 'DeepSearch = recherche web plus large, opt-in' },
          { 'Modèle / Produit': 'Perplexity', 'Couche de recherche': 'Web multi-sources', 'Déclencheur': 'Toujours — chaque requête', 'Notes': 'Conçu recherche en premier ; cite les sources' },
          { 'Modèle / Produit': 'Claude (Anthropic)', 'Couche de recherche': 'Brave / Web (outil)', 'Déclencheur': 'Opt-in développeur uniquement', 'Notes': 'Désactivé par défaut ; nécessite une configuration d\'outil API' },
          { 'Modèle / Produit': 'DeepSeek (cloud)', 'Couche de recherche': 'Aucune', 'Déclencheur': 'S/O', 'Notes': 'Pas de couche de recherche ; la coupure est une limite ferme' },
          { 'Modèle / Produit': 'Mistral (cloud)', 'Couche de recherche': 'Aucune', 'Déclencheur': 'S/O', 'Notes': 'Pas de couche de recherche ; la coupure est une limite ferme' },
          { 'Modèle / Produit': 'Tous les LLM locaux', 'Couche de recherche': 'Aucune', 'Déclencheur': 'S/O', 'Notes': 'Pas d\'accès internet par défaut ; RAG requis pour les informations actuelles' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-fr.png',
        imageCaption: 'Cutoff vs Recherche en Direct -- Quels systèmes IA recherchent sur le web',
      },
      full_table: {
        id: 'full-model-table',
        title: 'Données de coupure complètes et vérifiées : tous les modèles majeurs',
        content: [
          'Le tableau ci-dessous n\'utilise que des données de source primaire — fiches modèles, documentation officielle et rapports techniques évalués par des pairs. Lorsqu\'aucune source primaire n\'existe, la coupure est indiquée comme "Non divulguée publiquement" plutôt qu\'estimée.',
          '<strong>Modèles cloud :</strong>',
        ],
        columns: ['Modèle', 'Éditeur', 'Date de coupure', 'Vérifié', 'Recherche par défaut', 'Couche de recherche'],
        rows: CLOUD_MODELS.map(m => ({
          'Modèle': m.modelName,
          'Éditeur': m.vendor,
          'Date de coupure': m.cutoffDate,
          'Vérifié': m.cutoffVerified ? '✓' : '—',
          'Recherche par défaut': m.hasLiveSearchDefault ? 'Oui' : (m.searchLayer === 'Tool-use only' ? 'Outil uniquement' : 'Non'),
          'Couche de recherche': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Parmi les modèles cloud, seul Claude nécessite une configuration explicite du développeur pour la recherche web — tous les autres ont la recherche en direct activée par défaut pour les utilisateurs finaux.',
          },
          {
            type: 'in-plain-terms',
            text: 'Les modèles IA cloud sont comme des chercheurs qui peuvent consulter des sources entre les questions. Les modèles IA locaux sont comme des chercheurs qui sont complètement hors ligne depuis une date fixe.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'Modèles locaux / open-weight : dates de coupure vérifiées',
        content: [
          '<strong>Modèles open-weight locaux — tous avec "Aucune" pour la recherche :</strong>',
        ],
        columns: ['Modèle', 'Éditeur', 'Date de coupure', 'Vérifié', 'Déploiement', 'Licence'],
        rows: LOCAL_MODELS.map(m => ({
          'Modèle': m.modelName,
          'Éditeur': m.vendor,
          'Date de coupure': m.cutoffDate,
          'Vérifié': m.cutoffVerified ? '✓ Source primaire' : '— Non divulgué',
          'Déploiement': m.deployment,
          'Licence': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'Point clé',
            text: 'Chaque modèle local dans ce tableau a "Aucune" pour la recherche. Ce n\'est pas une limitation de modèles spécifiques — c\'est une propriété structurelle des LLM déployés localement. Ils n\'ont aucun accès réseau sauf si explicitement programmé.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'Le problème des LLM locaux : tourner avec un cerveau gelé',
        content: [
          '<strong>Lorsque vous exécutez un LLM local — via Ollama, LM Studio, llama.cpp ou tout autre runner — vous exécutez un modèle dont la connaissance est complètement figée.</strong> Pas "un peu dépassée". Pas "principalement à jour". Complètement figée à une date fixe.',
          'Ce n\'est pas juste un inconvénient. C\'est une propriété architecturale fondamentale. Il n\'y a pas de rappel vers un serveur, pas de mise à jour en arrière-plan, pas de modèle qui rafraîchit silencieusement sa connaissance. Les poids sur le disque sont les poids — ils encodent tout ce que le modèle sait, et ces poids ne changent pas entre les exécutions.',
          'Cela crée des modes d\'échec spécifiques et prévisibles. Un modèle exécuté localement interrogé sur une entreprise qui a changé de nom après sa coupure utilisera l\'ancien nom. Un modèle interrogé sur un produit lancé après sa coupure dira soit qu\'il ne sait pas, soit — plus problématiquement — hallucine une description plausible de ce à quoi ce produit pourrait ressembler.',
          '<strong>Les milliers d\'applications construites sur des LLM locaux — chatbots internes, assistants de code, analyseurs de documents — partagent tous ce problème de connaissance figée.</strong> Toute organisation déployant Llama, Qwen, Gemma ou Phi en interne exécute un logiciel qui ne peut littéralement pas connaître quoi que ce soit survenu après la coupure d\'entraînement du modèle, à moins qu\'elle ne construise un système RAG par-dessus.',
        ],
        columns: ['Scénario', 'LLM cloud avec recherche', 'LLM local sans RAG'],
        rows: [
          { 'Scénario': 'Demander l\'actualité du jour', 'LLM cloud avec recherche': 'Récupère depuis Bing/Google ; réponse actuelle', 'LLM local sans RAG': 'Reconnaît son ignorance ou hallucine' },
          { 'Scénario': 'Demander un lancement de produit 2025', 'LLM cloud avec recherche': 'Recherche sur le web ; spécifications actuelles', 'LLM local sans RAG': 'Aucune connaissance si après la coupure' },
          { 'Scénario': 'Demander des infos sur votre entreprise (si post-coupure)', 'LLM cloud avec recherche': 'Peut récupérer votre site via la recherche', 'LLM local sans RAG': 'Ne peut pas vous trouver ; absent des données d\'entraînement' },
          { 'Scénario': 'Demander le rebranding d\'un concurrent', 'LLM cloud avec recherche': 'Trouve le nom actuel via la recherche', 'LLM local sans RAG': 'Utilise l\'ancien nom de l\'entraînement' },
          { 'Scénario': 'Demander une nouvelle réglementation', 'LLM cloud avec recherche': 'Récupère le texte légal actuel', 'LLM local sans RAG': 'Connaissance pré-réglementation uniquement' },
          { 'Scénario': 'Demander les classements des modèles IA', 'LLM cloud avec recherche': 'Recherche les benchmarks ; principalement à jour', 'LLM local sans RAG': 'Figé à la coupure ; classements dépassés' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'Limitations des LLM locaux',
            text: 'Pour une analyse complète de ce que les LLM locaux peuvent et ne peuvent pas faire — au-delà des simples coupures — consultez <a href="/fr/local-llms/local-llm-limitations" class="text-primary hover:underline">Limitations des LLM locaux : ce qu\'ils ne peuvent pas faire</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'Implications pour les utilisateurs : quand faire confiance aux réponses de l\'IA',
        content: [
          '<strong>La règle la plus importante : demandez-vous toujours si la réponse aurait pu changer après la date de coupure du modèle.</strong> Si oui, vérifiez de façon indépendante — en particulier pour les sujets médicaux, juridiques, financiers et technologiques.',
          'Les différents systèmes IA gèrent les lacunes post-coupure différemment. Comprendre le comportement de chaque système vous aide à calibrer le niveau de confiance à accorder à la réponse.',
        ],
        columns: ['Système IA', 'Comportement post-coupure', 'Fiabilité pour l\'info actuelle', 'Comment améliorer'],
        rows: [
          { 'Système IA': 'ChatGPT (payant)', 'Comportement post-coupure': 'Recherche sur Bing automatiquement', 'Fiabilité pour l\'info actuelle': 'Élevée pour les faits ; moindre pour les nuances', 'Comment améliorer': 'Demandez-lui de citer ses sources ; vérifiez les affirmations clés' },
          { 'Système IA': 'Gemini (payant)', 'Comportement post-coupure': 'Recherche sur Google automatiquement', 'Fiabilité pour l\'info actuelle': 'Élevée pour les faits ; moindre pour les nuances', 'Comment améliorer': 'Activez le grounding ; vérifiez les URL citées' },
          { 'Système IA': 'Grok (X.com)', 'Comportement post-coupure': 'Recherche les posts X automatiquement', 'Fiabilité pour l\'info actuelle': 'Bonne pour les tendances sociales ; inégale pour les faits', 'Comment améliorer': 'Utilisez DeepSearch pour une couverture web plus large' },
          { 'Système IA': 'Claude (gratuit/pro)', 'Comportement post-coupure': 'Utilise uniquement les données d\'entraînement par défaut', 'Fiabilité pour l\'info actuelle': 'Modérée — coupure fiable de jan. 2026', 'Comment améliorer': 'Collez le texte actuel dans le contexte ; les utilisateurs API peuvent activer l\'outil de recherche' },
          { 'Système IA': 'Perplexity', 'Comportement post-coupure': 'Recherche toujours le web en premier', 'Fiabilité pour l\'info actuelle': 'Élevée — produit natif de la recherche', 'Comment améliorer': 'Cite déjà les sources par conception' },
          { 'Système IA': 'Tout LLM local', 'Comportement post-coupure': 'Utilise uniquement les données d\'entraînement — pas de remplacement', 'Fiabilité pour l\'info actuelle': 'Très faible pour les sujets post-coupure', 'Comment améliorer': 'Construisez un pipeline RAG ; collez le contexte manuellement' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Risque d\'hallucination',
            text: 'Le risque d\'hallucination le plus élevé survient quand un modèle est interrogé sur quelque chose qui est postérieur à sa coupure mais qui ressemble plausiblement à ce qu\'il connaît. Il donnera une réponse plausible et confiante basée sur ses données d\'entraînement dépassées plutôt que d\'admettre son ignorance.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'Implications pour les entreprises : stratégie GEO par système IA',
        content: [
          '<strong>Le GEO (Generative Engine Optimization ou Optimisation pour les Moteurs Génératifs) est la pratique qui consiste à faire apparaître votre marque, produit ou contenu dans les réponses générées par l\'IA.</strong> Pour la plupart des systèmes IA, le GEO fonctionne de façon similaire au SEO — l\'IA récupère le contenu des moteurs de recherche, donc bien se classer dans Bing ou Google alimente directement les réponses IA.',
          'Mais les LLM locaux brisent complètement ce modèle. Un Llama ou Qwen déployé localement ne recherche jamais sur le web. Vous ne pouvez pas optimiser votre présence dans ses réponses via la recherche — le modèle ne vous mentionnera que si vous étiez dans ses données d\'entraînement avant la coupure, ou si l\'organisation qui le déploie injecte votre contenu via RAG.',
          'Ce tableau cartographie le canal GEO pour chaque système IA :',
        ],
        columns: ['Système IA', 'Canal GEO', 'Optimiser pour', 'Le déploiement local change-t-il cela ?'],
        rows: [
          { 'Système IA': 'GPT-5.5 (ChatGPT)', 'Canal GEO': 'Récupération via recherche Bing', 'Optimiser pour': 'SEO Bing : SEO technique, Bing Webmaster Tools, données structurées', 'Le déploiement local change-t-il cela ?': 'Oui — les appels API OpenAI locaux n\'ont pas Bing ; la coupure est ferme' },
          { 'Système IA': 'Gemini 3.1 Pro', 'Canal GEO': 'Grounding Google Search', 'Optimiser pour': 'SEO Google + données structurées (schémas FAQ, HowTo, Article)', 'Le déploiement local change-t-il cela ?': 'Pas encore — Gemini est uniquement cloud à juin 2026' },
          { 'Système IA': 'Grok 4.3', 'Canal GEO': 'Contenu X (Twitter)', 'Optimiser pour': 'Présence sur X : compte vérifié, posts à fort engagement, X Communities', 'Le déploiement local change-t-il cela ?': 'Pas encore — Grok est uniquement cloud à juin 2026' },
          { 'Système IA': 'Perplexity', 'Canal GEO': 'Récupération web native', 'Optimiser pour': 'Tous les moteurs de recherche + citer des sources faisant autorité, contenu structuré clair', 'Le déploiement local change-t-il cela ?': 'Non — Perplexity est natif du web par conception' },
          { 'Système IA': 'Claude (API)', 'Canal GEO': 'Recherche par outil (Brave/Web) — opt-in', 'Optimiser pour': 'Présence web générale ; contenu structuré pour l\'éligibilité aux extraits', 'Le déploiement local change-t-il cela ?': 'Oui — beaucoup de déploiements Claude ont la recherche désactivée' },
          { 'Système IA': 'Llama (local)', 'Canal GEO': 'Pipelines RAG UNIQUEMENT', 'Optimiser pour': 'RAG : formats de données structurées, bases de connaissance, APIs de documents', 'Le déploiement local change-t-il cela ?': 'C\'est le déploiement local — le SEO est hors sujet' },
          { 'Système IA': 'Qwen / Gemma / Phi (local)', 'Canal GEO': 'Pipelines RAG UNIQUEMENT', 'Optimiser pour': 'RAG : pipelines d\'ingestion de documents chez l\'organisation qui déploie', 'Le déploiement local change-t-il cela ?': 'C\'est le déploiement local — le SEO est hors sujet' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'L\'angle mort GEO des LLM locaux',
            text: 'La plupart des guides GEO se concentrent entièrement sur l\'IA cloud — ils vous disent d\'optimiser pour Bing ou Google Search. Ces conseils sont inutiles pour atteindre les déploiements internes de Llama, Qwen, Gemma ou Phi. Ces modèles ne font jamais de recherche. Le seul canal GEO qui fonctionne est de convaincre l\'organisation qui déploie le modèle d\'inclure votre contenu dans son pipeline RAG.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-fr.png',
        imageCaption: 'Stratégie GEO par Système IA -- Deux voies : basée recherche vs basée RAG',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'La solution GEO : construire un fossé défensif pour les deux types d\'IA',
        content: [
          '<strong>Une stratégie GEO complète en 2026 nécessite deux pistes parallèles : l\'optimisation de recherche pour l\'IA cloud, et la préparation RAG pour l\'IA locale.</strong> La plupart des organisations n\'exécutent que la première piste.',
          '<strong>Piste 1 — IA cloud (GEO basé sur la recherche) :</strong> Les techniques SEO traditionnelles s\'appliquent mais avec des ajouts spécifiques à l\'IA. Votre contenu doit être structuré pour l\'éligibilité aux extraits (schémas JSON-LD FAQ et HowTo), factuellement précis (les modèles IA évitent de citer des pages ayant un historique de corrections), et faisant autorité (les signaux de qualité Bing et Google se traduisent directement en probabilité de citation IA). Pour Grok spécifiquement, la présence sur X (compte vérifié, taux d\'engagement, nombre d\'abonnés) détermine si votre marque apparaît dans les réponses Grok.',
          '<strong>Piste 2 — IA locale (GEO basé sur RAG) :</strong> Vous ne pouvez pas optimiser votre présence dans un LLM local via la recherche. Le chemin est entièrement différent : (1) créer des bases de connaissance lisibles par machine dans des formats que les pipelines RAG consomment (Markdown, JSON-LD, spécifications OpenAPI, FAQ structurées) ; (2) participer aux initiatives de données ouvertes pour que vos informations soient disponibles aux organisations qui construisent des systèmes RAG ; (3) construire des relations directes avec les clients entreprise déployant des LLM locaux et proposer des accords de partenariat de données ; (4) fournir des SDK ou APIs qui rendent triviale l\'inclusion de votre contenu dans un pipeline RAG.',
          'Pour la plupart des entreprises, la Piste 1 est déjà en cours dans le cadre du SEO. La Piste 2 nécessite un nouveau travail — spécifiquement, produire du contenu dans des formats optimisés pour l\'ingestion machine, pas pour la lecture humaine.',
        ],
        numberedItems: [
          'Auditez votre visibilité IA : quels systèmes IA mentionnent votre marque ? Testez ChatGPT, Gemini, Grok, Perplexity et un déploiement local Llama/Qwen séparément',
          'Pour les lacunes IA cloud : appliquez le balisage de données structurées (FAQPage, HowTo, TechArticle, Product), améliorez la présence dans Bing Webmaster Tools, renforcez les signaux E-E-A-T',
          'Pour les lacunes IA locale : produisez une base de connaissance lisible par machine (JSON structuré, docs Markdown, spécification OpenAPI) que les systèmes RAG peuvent ingérer',
          'Documentez les faits sur votre marque dans un format canonique et immuable — nom du modèle, descriptions, capacités, tarification — mis à jour à chaque changement de version',
          'Publiez un fichier llms.txt (description du site en texte brut pour les crawlers IA) et des données structurées sur chaque page principale',
          'Suivez les taux de mention dans les systèmes IA trimestriellement — le paysage évolue plus vite que la recherche traditionnelle',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Ressources RAG locales',
            text: 'Pour l\'implémentation technique du RAG local pour donner des connaissances actuelles à votre propre déploiement LLM, consultez <a href="/fr/local-llms/local-rag-2026" class="text-primary hover:underline">RAG local 2026 : meilleurs outils et frameworks</a> et <a href="/fr/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">RAG d\'entreprise avec des LLM locaux</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'une date de coupure de connaissance IA ?',
            a: 'Une date de coupure de connaissance est la date après laquelle les données d\'entraînement du modèle s\'arrêtent. Le modèle n\'a aucune information sur les événements, produits, recherches ou contenu publiés après cette date. Les modèles cloud peuvent partiellement compenser via la recherche web ; les LLM locaux ne le peuvent pas.',
          },
          {
            q: 'Pourquoi ChatGPT connaît-il des événements récents si sa coupure est octobre 2023 ?',
            a: 'ChatGPT (le produit) recherche sur Bing par défaut dans les niveaux payants et synthétise les résultats de recherche actuels avec son raisonnement issu des données d\'entraînement. Le modèle GPT-4o sous-jacent a toujours une coupure d\'entraînement d\'octobre 2023 — ce que vous voyez est la couche de recherche, pas des données d\'entraînement mises à jour.',
          },
          {
            q: 'Les LLM locaux comme Llama et Qwen reçoivent-ils des mises à jour de connaissance ?',
            a: 'Non — pas automatiquement. La connaissance d\'un LLM local est définitivement figée à sa coupure d\'entraînement. Chaque nouvelle version (Llama 4 Scout, Qwen3 14B) a une coupure différente, mais la copie sur votre machine a une connaissance fixe. Pour obtenir des informations actuelles, construisez un pipeline RAG.',
          },
          {
            q: 'Qu\'est-ce que le GEO et quel est son rapport avec les dates de coupure ?',
            a: 'Le GEO (Generative Engine Optimization) est la discipline qui consiste à faire apparaître votre contenu dans les réponses générées par l\'IA. Pour l\'IA cloud, le GEO fonctionne via l\'optimisation de recherche — classez-vous dans Bing/Google et vous serez cité. Pour les LLM locaux, c\'est structurellement impossible car le modèle ne fait jamais de recherche. Le GEO pour les LLM locaux nécessite des pipelines RAG chez l\'organisation qui déploie le modèle.',
          },
          {
            q: 'Quel modèle IA a la date de coupure de connaissance la plus récente (vérifiée) ?',
            a: 'Parmi les coupures vérifiées par source primaire : Claude Opus 4.8 a la coupure fiable la plus récente à janvier 2026. GPT-5.5 est août 2025. Gemini 3.1 Pro est janvier 2025. Grok 4.3 est novembre 2024. DeepSeek-V3 et Gemma 3 27B sont autour de juillet–août 2024. Phi-4 est juin 2024. GPT-4o (héritage) est octobre 2023. Plusieurs modèles actuels (Llama 4, Qwen3, Mistral Large) n\'ont pas divulgué de dates exactes publiquement.',
          },
          {
            q: 'Puis-je utiliser le SEO pour apparaître dans les réponses de Llama ou Qwen ?',
            a: 'Non. Le SEO ne peut pas influencer un LLM déployé localement car le modèle ne fait jamais de recherche web. Les seuls chemins sont : (1) être dans les données d\'entraînement avant la coupure, ou (2) être inclus dans un pipeline RAG par l\'organisation qui déploie le modèle.',
          },
          {
            q: 'Comment vérifier une réponse IA sur quelque chose qui pourrait être affecté par la coupure ?',
            a: 'Trois signaux indiquent un risque de coupure : (1) le sujet implique des versions spécifiques, des prix, des personnes ou des événements ; (2) vous avez interrogé sur quelque chose dans un secteur en évolution rapide ; (3) la réponse IA manque de citations. Quand l\'un de ces éléments s\'applique, vérifiez auprès d\'une source primaire — le ton confiant du modèle n\'est pas un indicateur de fiabilité.',
          },
          {
            q: 'Peut-on voir dans la réponse d\'une IA si elle a utilisé la recherche en direct ?',
            a: 'Souvent oui : Perplexity montre toujours des citations de sources. Gemini affiche une icône Google Search quand le grounding est utilisé. Grok indique les résultats de recherche X. ChatGPT affiche une icône globe et peut être invité à montrer ses sources. Claude ne recherche pas par défaut, donc aucun indicateur n\'est nécessaire. Les LLM locaux ne font jamais de recherche, donc aucun indicateur n\'existe — la réponse provient toujours des données d\'entraînement.',
          },
        ],
      },
      relatedReading: {
        title: 'Lectures connexes',
        items: [
          '[RAG expliqué : la génération augmentée par récupération](/fr/prompt-engineering/rag-explained) — le RAG est la solution principale aux limites de coupure des LLM locaux',
          '[Hallucinations IA : pourquoi l\'IA invente des choses](/fr/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — la désuétude due à la coupure est une cause principale des hallucinations',
          '[Limitations de l\'IA : ce que les LLM ne peuvent pas faire](/fr/prompt-engineering/ai-limitations-what-llms-cant-do) — contraintes structurelles incluant la connaissance figée et l\'absence de recherche en direct',
          '[Dates de coupure des modèles IA 2026 : fiche mémo](/fr/prompt-bites/ai-model-knowledge-cutoff-dates) — tableau de référence balayable pour tous les modèles cloud et locaux majeurs',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) — suivez chaque publication open-weight majeure et comment elle fait évoluer le paysage des coupures',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'KI-Wissensgrenzen, Live-Suche und GEO: Der vollständige Leitfaden',
    seoTitle: 'KI-Wissensgrenze Daten & GEO-Strategie 2026 — Fokus lokale LLMs',
    intro: '**Jedes KI-Modell hat ein Wissens-Cutoff-Datum — eine harte Grenze, nach der die Trainingsdaten enden. Aber Cloud- und lokale Modelle gehen mit dieser Einschränkung auf grundlegend unterschiedliche Weise um.** Dieser Leitfaden erklärt den Unterschied zwischen Cutoff und Live-Suche, kartiert das Verhalten jedes wichtigen Modells und leitet die strategischen Implikationen für Nutzer und Unternehmen ab, die in KI-generierten Antworten erscheinen möchten — einschließlich der entscheidenden Erkenntnis, dass lokale LLMs eine völlig andere GEO-Strategie erfordern als Cloud-Modelle.',
    metaDescription: 'Vollständiger Leitfaden zu KI-Wissensgrenzen: Verifizierte Daten für Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi — plus GEO-Strategie für das Erscheinen in Cloud-KI vs. lokalen LLMs. Lokale Modelle brauchen RAG, nicht SEO.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-de.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 Min. Lesen',
    educationalLevel: 'Intermediate',
    primaryTerm: 'KI-Wissensgrenze',
    audience: 'Nutzer, Produktteams und Marketer, die verstehen müssen, woher KI-Modelle ihre Informationen beziehen — und was dagegen zu tun ist',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**Ein KI-Wissens-Cutoff ist das Datum, nach dem das Modell keine Trainingsdaten mehr hat.** Cloud-Modelle kompensieren dies teilweise über integrierte Websuche (ChatGPT → Bing, Gemini → Google, Grok → X). Lokale LLMs haben keine Suchschicht — ihr Cutoff ist absolut. Für die GEO-Strategie gilt: Um in Cloud-KI zu erscheinen, optimieren Sie für Suche. Um in lokaler KI zu erscheinen, bauen Sie RAG-Pipelines — SEO allein kann kein Modell erreichen, das niemals das Web durchsucht.',
    quickFacts: [
      '**6 Cloud-Modelle** abgedeckt — verifizierte Cutoff-Daten mit Primärquellen-Links',
      '**6 lokale/Open-Weight-Modelle** abgedeckt — alle haben „Keine" für die Suchschicht',
      '**Gemma 3 27B** hat unter den aktuellen lokalen Modellen das früheste verifizierte Cutoff-Datum: August 2024',
      '**Phi-4** hat einen Cutoff im Juni 2024 — das zweitfrüheste verifizierte Datum unter lokalen Modellen',
      '**Grok 4.3** ist das einzige Cloud-Modell, dessen Standard-Suchschicht eine soziale Plattform (X/Twitter) statt des allgemeinen Webs ist',
      '**GEO-Implikation**: Unternehmen, die Llama/Qwen intern einsetzen, sind nur über die RAG-Pipelines erreichbar, die diese Unternehmen selbst aufbauen',
    ],
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: 'key-takeaways' },
      { label: 'Die unsichtbare Grenze: Was ein Cutoff wirklich ist', anchor: 'the-invisible-limit' },
      { label: 'Cutoff vs. Live-Suche: Der entscheidende Unterschied', anchor: 'cutoff-vs-live-search' },
      { label: 'Die vollständige Datentabelle: Alle Modelle', anchor: 'full-model-table' },
      { label: 'Das lokale LLM-Problem: Mit einem eingefrorenen Gehirn arbeiten', anchor: 'local-llm-problem' },
      { label: 'Implikationen für Nutzer', anchor: 'implications-for-users' },
      { label: 'Implikationen für Unternehmen: GEO-Strategie', anchor: 'geo-strategy' },
      { label: 'Die GEO-Lösung: Einen Burggraben aufbauen', anchor: 'geo-solution' },
      { label: 'FAQ', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'KI-Wissensgrenzen, Live-Suche und GEO: Der vollständige Leitfaden',
      description: 'Vollständiger Leitfaden zu KI-Wissens-Cutoff-Daten mit verifizierten Daten für alle wichtigen Cloud- und lokalen Modelle sowie GEO-Strategie-Implikationen — einschließlich der Frage, warum lokale LLMs RAG statt SEO benötigen.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'de',
      keywords: [
        'KI-Wissensgrenze', 'Wissens-Cutoff-Datum', 'lokaler LLM Cutoff', 'GEO-Strategie',
        'Generative Engine Optimization', 'RAG vs SEO', 'ChatGPT Wissensgrenze',
        'Claude Wissensgrenze', 'Llama Cutoff', 'Gemma Cutoff', 'Phi-4 Cutoff',
        'KI Trainings-Cutoff 2026', 'KI Live-Suche', 'Bing KI-Suche', 'lokale LLM Einschränkungen',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'de'),
      url: 'https://www.promptquorum.com/de/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist ein KI-Wissens-Cutoff-Datum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein KI-Wissens-Cutoff-Datum ist das Datum, nach dem die Trainingsdaten des Modells enden. Das Modell hat keinerlei Informationen über Ereignisse, Produkte, Forschungsergebnisse oder andere Inhalte, die nach diesem Datum veröffentlicht wurden. Cloud-Modelle können dies teilweise über die integrierte Websuche kompensieren; lokale LLMs können das nicht — ihr Cutoff ist absolut.',
          },
        },
        {
          '@type': 'Question',
          name: 'Warum scheint ChatGPT aktuelle Ereignisse zu kennen, obwohl sein Basismodell einen Trainings-Cutoff hat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (das Produkt) durchsucht standardmäßig Bing in bezahlten Tarifen und ergänzt seine Antworten mit aktuellen Suchergebnissen. Dadurch kann es sachliche Fragen zu aktuellen Ereignissen beantworten, obwohl die Trainingsdaten des zugrundeliegenden Modells einen festen Cutoff haben (GPT-5.5 Trainings-Cutoff ist Aug 2025; Legacy GPT-4o endet Okt 2023). Der Trainings-Cutoff schränkt nach wie vor das kontextuelle Verständnis von Themen nach dem Cutoff ein.',
          },
        },
        {
          '@type': 'Question',
          name: 'Erhalten lokale LLMs wie Llama und Qwen jemals Wissensaktualisierungen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Das Wissen eines lokalen LLMs ist permanent auf seinen Trainings-Cutoff eingefroren. Wenn eine neue Modellversion veröffentlicht wird (z. B. Llama 4 Scout als Nachfolger von Llama 3.3), hat sie einen neuen Cutoff — aber das auf dem eigenen Rechner laufende Modell aktualisiert sich nicht selbst. Um auf aktuelle Informationen zuzugreifen, muss eine RAG-Pipeline (Retrieval-Augmented Generation) aufgebaut werden, die Dokumente zur Abfragezeit abruft und in das Kontextfenster des Modells einfügt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist GEO und wie hängt es mit Wissensgrenzen zusammen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO (Generative Engine Optimization) ist die Praxis, dafür zu sorgen, dass die eigene Marke oder Inhalte in KI-generierten Antworten erscheinen. Bei Cloud-KI-Modellen überschneidet sich GEO mit SEO — wenn Inhalte in Bing, Google oder X gut ranken, können sie von ChatGPT, Gemini oder Grok abgerufen und zitiert werden. Bei lokalen LLMs ist GEO über Suche strukturell unmöglich, weil das Modell nie das Web durchsucht. Der einzige Weg, ein lokales LLM-Deployment zu erreichen, führt über RAG-Pipelines, die von der Organisation erstellt wurden, die das Modell betreibt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welches KI-Modell hat das aktuellste Wissens-Cutoff-Datum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unter den verifizierten Primärquellen-Cutoffs: Claude Opus 4.8 hat mit Januar 2026 den aktuellsten zuverlässigen Cutoff. GPT-5.5 ist August 2025. Grok 4.3 ist November 2024. Gemini 3.1 Pro ist Januar 2025. DeepSeek-V3 ist Juli 2024. Gemma 3 27B ist August 2024. Phi-4 ist Juni 2024. GPT-4o (Legacy) ist Oktober 2023. Mehrere aktuelle Modelle — darunter Llama 4, Qwen3 und Mistral Large — haben keine genauen Cutoff-Daten öffentlich bekannt gegeben.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich SEO nutzen, um in Llama- oder Qwen-Antworten zu erscheinen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Suchmaschinenoptimierung kann einen lokal betriebenen LLM nicht beeinflussen, weil das Modell nie eine Websuche durchführt. Um in lokalen LLM-Ausgaben zu erscheinen, muss man entweder: (1) vor dem Cutoff in den Trainingsdaten des Modells vorhanden gewesen sein, oder (2) über RAG-Pipelines eingebunden werden, die von demjenigen erstellt wurden, der das Modell betreibt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Cloud-KI-Modelle durchsuchen standardmäßig das Live-Web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT nutzt standardmäßig Bing (bezahlte Tarife). Gemini 3.1 Pro nutzt standardmäßig Google Suche. Grok 4.3 durchsucht standardmäßig X (Twitter). Perplexity ist websuche-nativ für jede Anfrage. Claude erfordert explizite Entwickler-Tool-Aktivierung und sucht standardmäßig nicht. DeepSeek und Mistral Large haben keine Standard-Suche. Alle lokalen LLMs (Llama, Qwen, Gemma, Phi, Mistral Open Weights) haben keine Suchfähigkeit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was sollte ich tun, wenn ich aktuelle Informationen von einem lokalen LLM benötige?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine RAG-Pipeline (Retrieval-Augmented Generation) aufbauen. Ein RAG-System ruft zur Abfragezeit relevante aktuelle Dokumente ab — aus einer Websuche, internen Datenbank oder einem Dokumentenspeicher — und fügt sie in das Kontextfenster des LLMs ein, bevor eine Antwort generiert wird. Beliebte lokale RAG-Tools sind LlamaIndex, LangChain und Ollama mit einer Abrufschicht. Der LLM argumentiert dann über die eingefügten Dokumente, anstatt sich ausschließlich auf eingefrorene Trainingsdaten zu stützen.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jedes KI-Modell hat einen Wissens-Cutoff — ein hartes Datum, nach dem die Trainingsdaten enden und das Modell keine Kenntnis von Ereignissen, Produkten oder Informationen hat',
          'Cloud-Modelle (ChatGPT, Gemini, Grok) legen Live-Websuche über ihre Trainingsdaten; dies überschreibt den Cutoff für sachliche Abfragen teilweise',
          'Lokale LLMs (Llama, Qwen, Gemma, Phi, Open-Weight-Mistral) haben KEINE Suchschicht — der Cutoff ist absolut und kann ohne den Aufbau eines RAG-Systems nicht überschrieben werden',
          'Für GEO (Generative Engine Optimization): Um in Cloud-KI zu erscheinen, ist traditionelle Suchoptimierung erforderlich (Bing, Google, X); um in lokaler KI zu erscheinen, werden RAG-Pipelines benötigt — SEO kann kein Modell erreichen, das nie das Web berührt',
          'Verifizierte Cutoffs: Claude Opus 4.8 = Jan 2026 (zuverlässig); GPT-5.5 = Aug 2025; Gemini 3.1 Pro = Jan 2025; Grok 4.3 = Nov 2024; Gemma 3 27B = Aug 2024; DeepSeek-V3 = Jul 2024; Phi-4 = Jun 2024; GPT-4o (Legacy) = Okt 2023 (DeepSeek hat inzwischen DeepSeek-V4 — Flash/Pro — als neuere offene Generation veröffentlicht; R1/V3 bleiben weiterhin lokal nutzbar.)',
          'Mehrere große Modelle — Llama 4, Qwen3, Mistral Large 3 — haben keine genauen Cutoff-Daten öffentlich bekannt gegeben',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'Die unsichtbare Grenze: Was ein Wissens-Cutoff wirklich ist',
        content: [
          '<strong>Ein Wissens-Cutoff-Datum ist das Datum, nach dem ein KI-Modell keine Trainingsdaten mehr erhalten hat.</strong> Das Modell hat enorme Mengen an Text gelesen — Webseiten, Bücher, Code, Forschungsartikel — bis zu diesem Datum, und danach absolut nichts mehr. Ereignisse, Produkteinführungen, neue Forschungsergebnisse, Preisänderungen, Unternehmens-Rebrandings oder sonstige Entwicklungen, die nach dem Cutoff eingetreten sind, sind für das Modell unsichtbar.',
          'Dies erzeugt ein systematisches Fehlermuster, das Nutzer häufig übersehen: Die KI gibt selbstbewusste, gut strukturierte Antworten zu Themen, über die sie keinerlei Wissen besitzt, weil sie nicht weiß, was sie nicht weiß. Fragt man ein Modell mit einem Cutoff von 2023 nach einem Produkt aus 2025, wird es entweder halluzinieren (plausibel klingende Erfindungen produzieren), die eigene Unwissenheit korrekt eingestehen oder — am gefährlichsten — eine Antwort auf Basis einer früheren Version des Produkts geben, die heute erheblich veraltet ist.',
          'Die Verwirrung wird dadurch verstärkt, dass viele Cloud-Produkte inzwischen Live-Suche über ihre Basismodelle legen und so den Cutoff für Gelegenheitsnutzer unsichtbar machen. Wenn ChatGPT eine Frage zu den heutigen Nachrichten beantwortet, nutzt es Bing — nicht seine Trainingsdaten. Entfernt man diese Suchschicht, würde das Modell mit Wissen arbeiten, das Monate oder Jahre alt ist.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Schnellreferenz',
            text: 'Nur die Cutoff-Datumstabelle gesucht? Siehe das <a href="/de/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">KI-Wissensgrenze Spickzettel</a> — eine übersichtliche Referenztabelle für alle wichtigen Modelle.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'Cutoff vs. Live-Suche: Der Unterschied, der alles verändert',
        content: [
          '<strong>Die wichtigste Unterscheidung beim Verständnis von KI-Wissensgrenzen liegt zwischen dem Trainings-Cutoff (eine Modelleigenschaft) und der Live-Suche (eine Produktfunktion).</strong> Diese werden häufig verwechselt, weil Cloud-KI-Produkte beide nahtlos miteinander verbinden.',
          'Ein <strong>Trainings-Cutoff</strong> ist in den Modellgewichten verankert. Er kann nicht ohne Neutraining oder Fine-Tuning des Modells geändert werden. Jede Kopie von GPT-4o — ob über ChatGPT, die API oder ein Drittanbieter-Tool — hat denselben Cutoff vom Oktober 2023.',
          'Eine <strong>Live-Suchschicht</strong> ist ein externes Tool, das auf Produktebene integriert ist. Wenn ChatGPT aktuelle Informationen benötigt, fragt es die Bing-API ab, erhält aktuelle Ergebnisse und synthetisiert diese mit seinen Argumentationsfähigkeiten. Dies geschieht zur Inferenzzeit und kann vom Produktteam ein- und ausgeschaltet werden.',
        ],
        columns: ['Modell / Produkt', 'Suchlayer', 'Auslöser', 'Hinweise'],
        rows: [
          { 'Modell / Produkt': 'GPT-5.5 (ChatGPT)', 'Suchlayer': 'Bing', 'Auslöser': 'Automatisch — Modell entscheidet', 'Hinweise': 'Standardmäßig für ChatGPT Plus/Pro; deaktiviert für rohe API-Aufrufe' },
          { 'Modell / Produkt': 'Gemini 3.1 Pro', 'Suchlayer': 'Google Suche', 'Auslöser': 'Automatisch — Modell entscheidet', 'Hinweise': 'Google Grounding API für Vertex AI-Entwickler verfügbar' },
          { 'Modell / Produkt': 'Grok 4.3 (X.com)', 'Suchlayer': 'X (Twitter)', 'Auslöser': 'Automatisch — Modell entscheidet', 'Hinweise': 'DeepSearch = breitere Websuche, opt-in' },
          { 'Modell / Produkt': 'Perplexity', 'Suchlayer': 'Multi-Source-Web', 'Auslöser': 'Immer — jede Anfrage', 'Hinweise': 'Suche-first per Design; zitiert Quellen' },
          { 'Modell / Produkt': 'Claude (Anthropic)', 'Suchlayer': 'Brave / Web (Tool)', 'Auslöser': 'Nur Entwickler-Opt-in', 'Hinweise': 'Standardmäßig deaktiviert; erfordert API-Tool-Konfiguration' },
          { 'Modell / Produkt': 'DeepSeek (Cloud)', 'Suchlayer': 'Keine', 'Auslöser': 'Nicht zutreffend', 'Hinweise': 'Keine Suchschicht; Cutoff ist harte Grenze' },
          { 'Modell / Produkt': 'Mistral (Cloud)', 'Suchlayer': 'Keine', 'Auslöser': 'Nicht zutreffend', 'Hinweise': 'Keine Suchschicht; Cutoff ist harte Grenze' },
          { 'Modell / Produkt': 'Alle lokalen LLMs', 'Suchlayer': 'Keine', 'Auslöser': 'Nicht zutreffend', 'Hinweise': 'Standardmäßig kein Internetzugang; RAG für Aktualität erforderlich' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-de.png',
        imageCaption: 'Cutoff vs. Live-Suche -- Welche KI-Systeme das Web durchsuchen',
      },
      full_table: {
        id: 'full-model-table',
        title: 'Vollständige verifizierte Cutoff-Daten: Alle wichtigen Modelle',
        content: [
          'Die nachstehende Tabelle verwendet ausschließlich Primärquellendaten — Modellkarten, offizielle Dokumentation und begutachtete technische Berichte. Wo keine Primärquelle vorhanden ist, wird der Cutoff als „Nicht öffentlich bekannt gegeben" aufgeführt, anstatt ihn zu schätzen.',
          '<strong>Cloud-Modelle:</strong>',
        ],
        columns: ['Modell', 'Anbieter', 'Cutoff-Datum', 'Verifiziert', 'Standard-Suche', 'Suchlayer'],
        rows: CLOUD_MODELS.map(m => ({
          'Modell': m.modelName,
          'Anbieter': m.vendor,
          'Cutoff-Datum': m.cutoffDate,
          'Verifiziert': m.cutoffVerified ? '✓' : '—',
          'Standard-Suche': m.hasLiveSearchDefault ? 'Ja' : (m.searchLayer === 'Tool-use only' ? 'Nur Tool' : 'Nein'),
          'Suchlayer': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Unter den Cloud-Modellen erfordert nur Claude eine explizite Entwicklerkonfiguration für die Websuche — alle anderen haben Live-Suche standardmäßig für Endnutzer aktiviert.',
          },
          {
            type: 'in-plain-terms',
            text: 'Cloud-KI-Modelle sind wie Forscher, die zwischen dem Beantworten von Fragen nachschlagen können. Lokale KI-Modelle sind wie Forscher, die seit einem festen Datum vollständig offline sind.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'Lokale / Open-Weight-Modelle: Verifizierte Cutoff-Daten',
        content: [
          '<strong>Lokale Open-Weight-Modelle — alle mit „Keine" für Suche:</strong>',
        ],
        columns: ['Modell', 'Anbieter', 'Cutoff-Datum', 'Verifiziert', 'Bereitstellung', 'Lizenz'],
        rows: LOCAL_MODELS.map(m => ({
          'Modell': m.modelName,
          'Anbieter': m.vendor,
          'Cutoff-Datum': m.cutoffDate,
          'Verifiziert': m.cutoffVerified ? '✓ Primärquelle' : '— Nicht angegeben',
          'Bereitstellung': m.deployment,
          'Lizenz': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'Wesentliche Erkenntnis',
            text: 'Jedes lokale Modell in dieser Tabelle hat „Keine" für Suche. Dies ist keine Einschränkung spezifischer Modelle — es ist eine strukturelle Eigenschaft lokal eingesetzter LLMs. Sie haben keinen Netzwerkzugang, sofern nicht explizit programmiert.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'Das lokale LLM-Problem: Mit einem eingefrorenen Gehirn arbeiten',
        content: [
          '<strong>Wenn ein lokales LLM betrieben wird — ob über Ollama, LM Studio, llama.cpp oder einen anderen Runner — läuft ein Modell, dessen Wissen vollständig eingefroren ist.</strong> Nicht „etwas veraltet." Nicht „größtenteils aktuell." Vollständig eingefroren auf ein festes Datum.',
          'Dies ist keine bloße Unannehmlichkeit. Es ist eine fundamentale Architektureigenschaft. Es gibt kein Kontaktieren eines Servers, keine Hintergrundaktualisierung, kein Modell, das sein Wissen stillschweigend auffrischt. Die Gewichte auf der Festplatte sind die Gewichte — sie kodieren alles, was das Modell weiß, und diese Gewichte ändern sich nicht zwischen den Ausführungen.',
          'Dies erzeugt spezifische, vorhersehbare Fehlermuster. Ein lokal betriebenes Modell, das nach einem Unternehmen gefragt wird, das nach seinem Cutoff umbenannt wurde, verwendet den alten Namen. Ein Modell, das nach einem nach seinem Cutoff eingeführten Produkt gefragt wird, wird entweder sagen, es wisse es nicht, oder — problematischer — eine plausible Beschreibung halluzinieren, wie ein solches Produkt aussehen könnte.',
          '<strong>Die Tausenden von Anwendungen, die auf lokalen LLMs aufgebaut sind — interne Chatbots, Code-Assistenten, Dokumentenanalysetools — teilen allesamt dieses Problem des eingefrorenen Wissens.</strong> Jede Organisation, die Llama, Qwen, Gemma oder Phi intern einsetzt, betreibt Software, die buchstäblich nichts über Ereignisse nach dem Trainings-Cutoff des Modells wissen kann, sofern kein RAG-System darüber aufgebaut wird.',
        ],
        columns: ['Szenario', 'Cloud-LLM mit Suche', 'Lokales LLM ohne RAG'],
        rows: [
          { 'Szenario': 'Nach heutigen Nachrichten fragen', 'Cloud-LLM mit Suche': 'Ruft von Bing/Google ab; aktuelle Antwort', 'Lokales LLM ohne RAG': 'Gibt Unwissenheit zu oder halluziniert' },
          { 'Szenario': 'Nach einer Produkteinführung 2025 fragen', 'Cloud-LLM mit Suche': 'Durchsucht Web; aktuelle Spezifikationen', 'Lokales LLM ohne RAG': 'Kein Wissen, wenn nach Cutoff' },
          { 'Szenario': 'Nach dem eigenen Unternehmen fragen (wenn nach Cutoff)', 'Cloud-LLM mit Suche': 'Kann Website über Suche abrufen', 'Lokales LLM ohne RAG': 'Kann nicht gefunden werden; nicht in Trainingsdaten' },
          { 'Szenario': 'Nach einem Rebranding eines Wettbewerbers fragen', 'Cloud-LLM mit Suche': 'Findet aktuellen Namen aus der Suche', 'Lokales LLM ohne RAG': 'Verwendet alten Namen aus dem Training' },
          { 'Szenario': 'Nach einer neuen Regulierung fragen', 'Cloud-LLM mit Suche': 'Ruft aktuellen Rechtstext ab', 'Lokales LLM ohne RAG': 'Nur Vor-Regulierungs-Wissen' },
          { 'Szenario': 'Nach KI-Modell-Rankings fragen', 'Cloud-LLM mit Suche': 'Durchsucht Benchmarks; größtenteils aktuell', 'Lokales LLM ohne RAG': 'Eingefroren auf Cutoff; veraltete Rankings' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'Einschränkungen lokaler LLMs',
            text: 'Für eine vollständige Übersicht dessen, was lokale LLMs können und nicht können — über reine Cutoffs hinaus — siehe <a href="/de/local-llms/local-llm-limitations" class="text-primary hover:underline">Einschränkungen lokaler LLMs: Was sie nicht können</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'Implikationen für Nutzer: Wann KI-Antworten vertrauenswürdig sind',
        content: [
          '<strong>Die wichtigste Regel: Immer fragen, ob sich die Antwort nach dem Cutoff-Datum des Modells geändert haben könnte.</strong> Falls ja, unabhängig verifizieren — insbesondere bei medizinischen, rechtlichen, finanziellen und technologischen Themen.',
          'Verschiedene KI-Systeme gehen mit Lücken nach dem Cutoff unterschiedlich um. Das Verständnis des Verhaltens jedes Systems hilft dabei, einzuschätzen, wie stark der Antwort vertraut werden kann.',
        ],
        columns: ['KI-System', 'Verhalten nach Cutoff', 'Zuverlässigkeit für aktuelle Infos', 'Wie verbessern'],
        rows: [
          { 'KI-System': 'ChatGPT (bezahlt)', 'Verhalten nach Cutoff': 'Durchsucht automatisch Bing', 'Zuverlässigkeit für aktuelle Infos': 'Hoch für Fakten; geringer für Nuancen', 'Wie verbessern': 'Auffordern, Quellen zu nennen; wichtige Behauptungen gegenchecken' },
          { 'KI-System': 'Gemini (bezahlt)', 'Verhalten nach Cutoff': 'Durchsucht automatisch Google', 'Zuverlässigkeit für aktuelle Infos': 'Hoch für Fakten; geringer für Nuancen', 'Wie verbessern': 'Grounding aktivieren; zitierte URLs prüfen' },
          { 'KI-System': 'Grok (X.com)', 'Verhalten nach Cutoff': 'Durchsucht automatisch X-Posts', 'Zuverlässigkeit für aktuelle Infos': 'Gut für soziale Trends; ungleichmäßig für Fakten', 'Wie verbessern': 'DeepSearch für tiefere Web-Abdeckung nutzen' },
          { 'KI-System': 'Claude (kostenlos/pro)', 'Verhalten nach Cutoff': 'Nutzt standardmäßig nur Trainingsdaten', 'Zuverlässigkeit für aktuelle Infos': 'Mittel — zuverlässiger Cutoff Jan 2026', 'Wie verbessern': 'Aktuellen Text in den Kontext einfügen; API-Nutzer können Such-Tool aktivieren' },
          { 'KI-System': 'Perplexity', 'Verhalten nach Cutoff': 'Durchsucht immer zuerst das Web', 'Zuverlässigkeit für aktuelle Infos': 'Hoch — suchbasiertes Produkt', 'Wie verbessern': 'Zitiert bereits standardmäßig Quellen' },
          { 'KI-System': 'Jeder lokale LLM', 'Verhalten nach Cutoff': 'Nutzt nur Trainingsdaten — keine Überschreibung', 'Zuverlässigkeit für aktuelle Infos': 'Sehr gering für Themen nach dem Cutoff', 'Wie verbessern': 'RAG-Pipeline aufbauen; Kontext manuell einfügen' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Halluzinationsrisiko',
            text: 'Das höchste Halluzinationsrisiko besteht, wenn ein Modell nach etwas gefragt wird, das nach seinem Cutoff liegt, aber plausibel ähnlich zu dem klingt, was es kennt. Es gibt eine selbstbewusst klingende Antwort auf Basis veralteter Trainingsdaten, anstatt Unwissenheit einzugestehen.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'Implikationen für Unternehmen: GEO-Strategie nach KI-System',
        content: [
          '<strong>GEO (Generative Engine Optimization) ist die Praxis, dafür zu sorgen, dass die eigene Marke, das eigene Produkt oder die eigenen Inhalte in KI-generierten Antworten erscheinen.</strong> Bei den meisten KI-Systemen funktioniert GEO ähnlich wie SEO — die KI ruft Inhalte aus Suchmaschinen ab, sodass ein gutes Ranking in Bing oder Google direkt in KI-Antworten einfließt.',
          'Lokale LLMs brechen dieses Modell jedoch vollständig auf. Ein lokal eingesetztes Llama oder Qwen durchsucht nie das Web. Es ist nicht möglich, sich über Suche in seine Antworten zu optimieren — das Modell erwähnt einen nur, wenn man vor dem Cutoff in seinen Trainingsdaten war oder wenn die einsetzende Organisation Inhalte über RAG einspeist.',
          'Diese Tabelle ordnet den GEO-Kanal für jedes KI-System zu:',
        ],
        columns: ['KI-System', 'GEO-Kanal', 'Optimieren für', 'Ändert sich bei lokalem Einsatz?'],
        rows: [
          { 'KI-System': 'GPT-5.5 (ChatGPT)', 'GEO-Kanal': 'Bing-Suchabruf', 'Optimieren für': 'Bing-SEO: Technisches SEO, Bing Webmaster Tools, strukturierte Daten', 'Ändert sich bei lokalem Einsatz?': 'Ja — lokale OpenAI-API-Aufrufe haben kein Bing; Cutoff ist hart' },
          { 'KI-System': 'Gemini 3.1 Pro', 'GEO-Kanal': 'Google Search Grounding', 'Optimieren für': 'Google SEO + strukturierte Daten (FAQ, HowTo, Article-Schemas)', 'Ändert sich bei lokalem Einsatz?': 'Noch nicht — Gemini ist nur als Cloud verfügbar (Stand Juni 2026)' },
          { 'KI-System': 'Grok 4.3', 'GEO-Kanal': 'X (Twitter) Inhalte', 'Optimieren für': 'X-Präsenz: Verifiziertes Konto, hohe Engagement-Rate, X Communities', 'Ändert sich bei lokalem Einsatz?': 'Noch nicht — Grok ist nur als Cloud verfügbar (Stand Juni 2026)' },
          { 'KI-System': 'Perplexity', 'GEO-Kanal': 'Webnatives Abrufen', 'Optimieren für': 'Alle Suchmaschinen + Zitieren autoritativer Quellen, klare strukturierte Inhalte', 'Ändert sich bei lokalem Einsatz?': 'Nein — Perplexity ist von Natur aus webbasiert' },
          { 'KI-System': 'Claude (API)', 'GEO-Kanal': 'Tool-Use-Suche (Brave/Web) — opt-in', 'Optimieren für': 'Allgemeine Webpräsenz; strukturierte Inhalte für Snippet-Eignung', 'Ändert sich bei lokalem Einsatz?': 'Ja — viele Claude-Deployments haben Suche deaktiviert' },
          { 'KI-System': 'Llama (lokal)', 'GEO-Kanal': 'Ausschließlich RAG-Pipelines', 'Optimieren für': 'RAG: Strukturierte Datenformate, Wissensdatenbanken, Dokument-APIs', 'Ändert sich bei lokalem Einsatz?': 'Dies IST lokaler Einsatz — SEO ist irrelevant' },
          { 'KI-System': 'Qwen / Gemma / Phi (lokal)', 'GEO-Kanal': 'Ausschließlich RAG-Pipelines', 'Optimieren für': 'RAG: Dokumentenaufnahme-Pipelines bei der einsetzenden Organisation', 'Ändert sich bei lokalem Einsatz?': 'Dies IST lokaler Einsatz — SEO ist irrelevant' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Der blinde Fleck bei lokalem LLM-GEO',
            text: 'Die meisten GEO-Leitfäden konzentrieren sich ausschließlich auf Cloud-KI — sie empfehlen, für Bing oder Google Search zu optimieren. Dieser Ratschlag ist nutzlos, um interne Deployments von Llama, Qwen, Gemma oder Phi zu erreichen. Diese Modelle suchen nie. Der einzige funktionierende GEO-Kanal besteht darin, die Organisation, die das Modell betreibt, davon zu überzeugen, die eigenen Inhalte in ihre RAG-Pipeline aufzunehmen.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-de.png',
        imageCaption: 'GEO-Strategie nach KI-System -- Zwei Wege: suchbasiert vs. RAG-basiert',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'Die GEO-Lösung: Einen Burggraben für beide KI-Typen aufbauen',
        content: [
          '<strong>Eine vollständige GEO-Strategie erfordert 2026 zwei parallele Spuren: Suchoptimierung für Cloud-KI und RAG-Bereitschaft für lokale KI.</strong> Die meisten Organisationen verfolgen nur die erste Spur.',
          '<strong>Spur 1 — Cloud-KI (suchbasiertes GEO):</strong> Traditionelle SEO-Techniken gelten, aber mit KI-spezifischen Ergänzungen. Inhalte müssen für Snippet-Eignung strukturiert sein (FAQ- und HowTo-JSON-LD-Schema), sachlich korrekt (KI-Modelle vermeiden das Zitieren von Seiten mit Korrekturhistorien) und autoritativ (Bing- und Google-Qualitätssignale übersetzen sich direkt in KI-Zitationswahrscheinlichkeit). Für Grok speziell bestimmt die X-Präsenz (verifiziertes Konto, Engagement-Rate, Follower-Anzahl), ob die Marke in Grok-Antworten erscheint.',
          '<strong>Spur 2 — Lokale KI (RAG-basiertes GEO):</strong> Es ist nicht möglich, sich über Suche in einen lokalen LLM zu optimieren. Der Weg ist völlig anders: (1) maschinenlesbare Wissensdatenbanken in Formaten erstellen, die RAG-Pipelines verarbeiten (Markdown, JSON-LD, OpenAPI-Specs, strukturierte FAQs); (2) an Open-Data-Initiativen teilnehmen, damit Informationen für Organisationen verfügbar sind, die RAG-Systeme aufbauen; (3) direkte Beziehungen zu Unternehmenskunden aufbauen, die lokale LLMs einsetzen, und Datenpartnerschaftsvereinbarungen vorschlagen; (4) SDKs oder APIs bereitstellen, die es trivial machen, eigene Inhalte in eine RAG-Pipeline aufzunehmen.',
          'Für die meisten Unternehmen ist Spur 1 bereits im Rahmen von SEO in Gang. Spur 2 erfordert neue Arbeit — insbesondere die Produktion von Inhalten in Formaten, die für maschinelle Aufnahme optimiert sind, nicht für menschliches Lesen.',
        ],
        numberedItems: [
          'KI-Sichtbarkeit prüfen: Welche KI-Systeme erwähnen die eigene Marke? ChatGPT, Gemini, Grok, Perplexity und ein lokales Llama/Qwen-Deployment separat testen',
          'Bei Cloud-KI-Lücken: Strukturierte Daten-Markup anwenden (FAQPage, HowTo, TechArticle, Product), Bing Webmaster-Präsenz verbessern, E-E-A-T-Signale stärken',
          'Bei lokalen KI-Lücken: Eine maschinenlesbare Wissensdatenbank erstellen (strukturiertes JSON, Markdown-Docs, OpenAPI-Spec), die RAG-Systeme aufnehmen können',
          'Markenfakten in einem kanonischen, unveränderlichen Format dokumentieren — Modellname, Beschreibungen, Fähigkeiten, Preise — bei jeder Versionsänderung aktualisiert',
          'Eine llms.txt-Datei (Klartextbeschreibung der Website für KI-Crawler) und strukturierte Daten auf jeder wichtigen Seite veröffentlichen',
          'Erwähnungsraten über alle KI-Systeme vierteljährlich verfolgen — die Landschaft verändert sich schneller als die traditionelle Suche',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Lokale RAG-Ressourcen',
            text: 'Für die technische Implementierung von lokalem RAG, um dem eigenen LLM-Deployment aktuelles Wissen zu geben, siehe <a href="/de/local-llms/local-rag-2026" class="text-primary hover:underline">Lokales RAG 2026: Beste Tools und Frameworks</a> und <a href="/de/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">Corporate RAG mit lokalen LLMs</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist ein KI-Wissens-Cutoff-Datum?',
            a: 'Ein Wissens-Cutoff-Datum ist das Datum, nach dem die Trainingsdaten des Modells enden. Das Modell hat keinerlei Informationen über Ereignisse, Produkte, Forschungsergebnisse oder Inhalte, die nach diesem Datum veröffentlicht wurden. Cloud-Modelle können dies teilweise über Websuche kompensieren; lokale LLMs können das nicht.',
          },
          {
            q: 'Warum kennt ChatGPT aktuelle Ereignisse, wenn sein Cutoff Oktober 2023 ist?',
            a: 'ChatGPT (das Produkt) durchsucht in bezahlten Tarifen standardmäßig Bing und synthetisiert aktuelle Suchergebnisse mit seinen Trainingsdaten. Das zugrundeliegende GPT-4o-Modell hat weiterhin einen Trainings-Cutoff vom Oktober 2023 — was gezeigt wird, ist die Suchschicht, keine aktualisierten Trainingsdaten.',
          },
          {
            q: 'Erhalten lokale LLMs wie Llama und Qwen jemals Wissensaktualisierungen?',
            a: 'Nein — nicht automatisch. Das Wissen eines lokalen LLMs ist permanent auf seinen Trainings-Cutoff eingefroren. Jede neue Modellversion (Llama 4 Scout, Qwen3 14B) hat einen anderen Cutoff, aber die auf dem eigenen Rechner laufende Kopie hat festes Wissen. Für aktuelle Informationen eine RAG-Pipeline aufbauen.',
          },
          {
            q: 'Was ist GEO und wie hängt es mit Wissensgrenzen zusammen?',
            a: 'GEO (Generative Engine Optimization) ist die Disziplin, eigene Inhalte in KI-generierten Antworten erscheinen zu lassen. Bei Cloud-KI funktioniert GEO über Suchoptimierung — in Bing/Google ranken und zitiert werden. Bei lokalen LLMs ist dies strukturell unmöglich, weil das Modell nie sucht. Lokales LLM-GEO erfordert RAG-Pipelines bei der einsetzenden Organisation.',
          },
          {
            q: 'Welches KI-Modell hat das aktuellste verifizierte Wissens-Cutoff-Datum?',
            a: 'Unter primärquellen-verifizierten Cutoffs: Claude Opus 4.8 hat mit Januar 2026 den aktuellsten zuverlässigen Cutoff. GPT-5.5 ist August 2025. Gemini 3.1 Pro ist Januar 2025. Grok 4.3 ist November 2024. DeepSeek-V3 und Gemma 3 27B liegen bei Juli–August 2024. Phi-4 ist Juni 2024. GPT-4o (Legacy) ist Oktober 2023. Mehrere aktuelle Modelle (Llama 4, Qwen3, Mistral Large) haben keine genauen Daten öffentlich bekannt gegeben.',
          },
          {
            q: 'Kann ich SEO nutzen, um in Llama- oder Qwen-Antworten zu erscheinen?',
            a: 'Nein. SEO kann einen lokal eingesetzten LLM nicht beeinflussen, weil das Modell nie das Web durchsucht. Die einzigen Wege sind: (1) vor dem Cutoff in den Trainingsdaten vorhanden gewesen sein, oder (2) über eine RAG-Pipeline der einsetzenden Organisation eingebunden werden.',
          },
          {
            q: 'Wie sollte eine KI-Antwort zu Faktencheck unterzogen werden, die vom Cutoff betroffen sein könnte?',
            a: 'Drei Signale deuten auf ein Cutoff-Risiko hin: (1) Das Thema betrifft spezifische Versionen, Preise, Personen oder Ereignisse; (2) es wurde nach etwas in einer schnelllebigen Branche gefragt; (3) die KI-Antwort enthält keine Zitate. Wenn eines dieser Zeichen zutrifft, anhand einer Primärquelle verifizieren — der selbstbewusste Ton des Modells ist kein Zuverlässigkeitsindikator.',
          },
          {
            q: 'Gibt es eine Möglichkeit, anhand einer KI-Antwort zu erkennen, ob Live-Suche verwendet wurde?',
            a: 'Oft ja: Perplexity zeigt immer Quellenangaben. Gemini zeigt ein Google-Such-Symbol, wenn Grounding genutzt wird. Grok weist auf X-Suchergebnisse hin. ChatGPT zeigt ein Globus-Symbol und kann aufgefordert werden, Quellen zu zeigen. Claude sucht standardmäßig nicht, daher ist kein Indikator nötig. Lokale LLMs suchen nie, daher gibt es keinen Indikator — die Antwort stammt immer aus den Trainingsdaten.',
          },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[RAG erklärt: Retrieval-Augmented Generation](/de/prompt-engineering/rag-explained) — RAG ist die primäre Lösung für die Wissensgrenzprobleme lokaler LLMs',
          '[KI-Halluzinationen: Warum KI Dinge erfindet](/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Veraltung durch Wissens-Cutoffs ist eine führende Ursache für Halluzinationen',
          '[KI-Einschränkungen: Was LLMs nicht können](/de/prompt-engineering/ai-limitations-what-llms-cant-do) — Strukturelle Einschränkungen einschließlich eingefrorenen Wissens und fehlender Live-Suche',
          '[KI-Modell-Wissensgrenzen 2026: Spickzettel](/de/prompt-bites/ai-model-knowledge-cutoff-dates) — Übersichtliche Referenztabelle für alle wichtigen Cloud- und lokalen Modelle',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) — Alle wichtigen Open-Weight-Veröffentlichungen verfolgen und wie sie die Cutoff-Landschaft verschieben',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI知识截止日期、实时搜索与GEO：完整指南',
    seoTitle: 'AI知识截止日期与GEO策略2026 — 本地LLM深度解析',
    intro: '**每个AI模型都有知识截止日期——训练数据结束的硬性边界。但云端模型与本地模型处理这一限制的方式存在根本性差异。** 本指南解释截止日期与实时搜索的区别，梳理各主流模型的行为方式，并为用户和希望出现在AI生成回答中的企业提炼出战略启示——包括本地LLM需要与云端模型完全不同的GEO策略这一核心洞察。',
    metaDescription: 'AI知识截止日期完整指南：Claude、GPT、Gemini、Grok、Llama、Qwen、Gemma、Phi的已验证日期——以及出现在云端AI与本地LLM回答中的GEO策略。本地模型需要RAG，而非SEO。',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-zh.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI知识截止日期',
    audience: '需要了解AI模型从何处获取信息——以及如何应对的用户、产品团队和营销人员',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**AI知识截止日期是指该模型不再拥有训练数据的日期。** 云端模型通过内置网络搜索（ChatGPT → Bing、Gemini → Google、Grok → X）进行部分补偿。本地LLM没有搜索层——其截止日期是绝对的。对于GEO策略：要出现在云端AI中，需优化搜索；要出现在本地AI中，需构建RAG管道——仅靠SEO无法触达从不搜索网络的模型。',
    quickFacts: [
      '**6个云端模型**收录 — 附一手资料链接的已验证截止日期',
      '**6个本地/开源权重模型**收录 — 全部搜索层为"无"',
      '**Gemma 3 27B** 是当前本地模型中已验证截止日期最早的：2024年8月',
      '**Phi-4** 截止日期为2024年6月 — 本地模型中已验证的第二早截止日期',
      '**Grok 4.3** 是唯一一个默认搜索层为社交平台（X/Twitter）而非通用网络的云端模型',
      '**GEO启示**：在内部部署Llama/Qwen的企业，只能通过该企业自己构建的RAG管道才能被触达',
    ],
    toc: [
      { label: '核心要点', anchor: 'key-takeaways' },
      { label: '隐形限制：截止日期究竟是什么', anchor: 'the-invisible-limit' },
      { label: '截止日期与实时搜索：决定性区别', anchor: 'cutoff-vs-live-search' },
      { label: '完整数据表：所有模型', anchor: 'full-model-table' },
      { label: '本地LLM问题：运行在冻结的大脑上', anchor: 'local-llm-problem' },
      { label: '对用户的影响', anchor: 'implications-for-users' },
      { label: '对企业的影响：GEO策略', anchor: 'geo-strategy' },
      { label: 'GEO解决方案：构建护城河', anchor: 'geo-solution' },
      { label: '常见问题', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'AI知识截止日期、实时搜索与GEO：完整指南',
      description: '面向所有主流云端与本地模型的AI知识截止日期完整指南，附已验证数据及GEO策略影响分析——包括为何本地LLM需要RAG而非SEO。',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'zh',
      keywords: [
        'AI知识截止日期', '知识截止日期', '本地LLM截止', 'GEO策略',
        '生成式引擎优化', 'RAG与SEO', 'ChatGPT知识截止',
        'Claude知识截止', 'Llama截止', 'Gemma截止', 'Phi-4截止',
        'AI训练截止2026', 'AI实时搜索', 'Bing AI搜索', '本地LLM局限性',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'zh'),
      url: 'https://www.promptquorum.com/zh/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '什么是AI知识截止日期？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI知识截止日期是指模型训练数据结束的日期。模型对该日期之后发生的事件、产品、研究或任何内容一无所知。云端模型可通过内置网络搜索进行部分补偿；本地LLM则不能——其截止日期是绝对的。',
          },
        },
        {
          '@type': 'Question',
          name: '为什么ChatGPT似乎知道最近发生的事情，即使其基础模型有训练截止日期？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT（产品）在付费层默认搜索Bing，并以当前搜索结果补充其回答。这意味着即便底层模型的训练数据有固定截止（GPT-5.5训练截止为2025年8月；旧版GPT-4o截止为2023年10月），它也能回答近期事件的事实性问题。训练截止仍会限制模型对截止后话题的语境理解。',
          },
        },
        {
          '@type': 'Question',
          name: '像Llama和Qwen这样的本地LLM会收到知识更新吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不会。本地LLM的知识在训练截止时就永久冻结了。当新模型版本发布时（例如Llama 4 Scout替代Llama 3.3），它有新的截止日期——但运行在您机器上的模型不会自我更新。要访问当前信息，您必须构建一个RAG（检索增强生成）管道，在查询时获取文档并注入模型的上下文窗口。',
          },
        },
        {
          '@type': 'Question',
          name: '什么是GEO，它与知识截止日期有何关联？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO（生成式引擎优化）是使您的品牌或内容出现在AI生成回答中的实践。对于云端AI模型，GEO与SEO重叠——如果您的内容在Bing、Google或X搜索中排名靠前，就能被ChatGPT、Gemini或Grok检索并引用。对于本地LLM，通过搜索实现GEO是不可能的，因为模型从不搜索网络。触达本地LLM部署的唯一途径是通过运行该模型的组织构建的RAG管道。',
          },
        },
        {
          '@type': 'Question',
          name: '哪个AI模型拥有最新的知识截止日期？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '在已验证的一手资料截止日期中：Claude Opus 4.8拥有最新的可靠截止日期——2026年1月。GPT-5.5为2025年8月。Grok 4.3为2024年11月。Gemini 3.1 Pro为2025年1月。DeepSeek-V3为2024年7月。Gemma 3 27B为2024年8月。Phi-4为2024年6月。GPT-4o（旧版）为2023年10月。包括Llama 4、Qwen3和Mistral Large在内的多个当前模型尚未公开披露确切截止日期。',
          },
        },
        {
          '@type': 'Question',
          name: '我能用SEO让自己出现在Llama或Qwen的回答中吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不能。搜索引擎优化无法影响本地运行的LLM，因为该模型从不执行网络搜索。要出现在本地LLM输出中，您必须：（1）在模型训练截止前已出现在其训练数据中，或（2）通过部署该模型的组织构建的RAG管道被纳入。这与传统SEO或云端AI GEO是根本不同的渠道。',
          },
        },
        {
          '@type': 'Question',
          name: '哪些云端AI模型默认搜索实时网络？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT默认使用Bing（付费层）。Gemini 3.1 Pro默认使用Google搜索。Grok 4.3默认搜索X（Twitter）。Perplexity对每个查询都进行网络搜索。Claude需要明确的开发者工具激活，默认不搜索。DeepSeek和Mistral Large没有默认搜索。所有本地LLM（Llama、Qwen、Gemma、Phi、Mistral开源权重）均无搜索能力。',
          },
        },
        {
          '@type': 'Question',
          name: '如果我需要从本地LLM获取当前信息，该怎么办？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '构建RAG（检索增强生成）管道。RAG系统在查询时从网络搜索、内部数据库或文档存储中检索相关当前文档，并在生成响应前将其注入LLM的上下文窗口。流行的本地RAG工具包括LlamaIndex、LangChain以及带检索层的Ollama。LLM随后基于注入的文档进行推理，而不是仅依赖冻结的训练数据。',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '每个AI模型都有知识截止日期——在此日期之后，模型对事件、产品或任何信息一无所知',
          '云端模型（ChatGPT、Gemini、Grok）在训练数据之上叠加实时网络搜索，对事实性查询部分覆盖了截止限制',
          '本地LLM（Llama、Qwen、Gemma、Phi、开源Mistral）没有搜索层——截止日期是绝对的，不构建RAG系统就无法绕过',
          '对于GEO（生成式引擎优化）：出现在云端AI中需要传统搜索优化（Bing、Google、X）；出现在本地AI中需要RAG管道——SEO无法触达从不接触网络的模型',
          '已验证截止日期：Claude Opus 4.8 = 2026年1月（可靠）；GPT-5.5 = 2025年8月；Gemini 3.1 Pro = 2025年1月；Grok 4.3 = 2024年11月；Gemma 3 27B = 2024年8月；DeepSeek-V3 = 2024年7月；Phi-4 = 2024年6月；GPT-4o（旧版）= 2023年10月 (DeepSeek 此后发布了开源权重新一代模型 DeepSeek-V4——Flash/Pro;R1/V3 仍可在本地正常使用。)',
          '多个主流模型——Llama 4、Qwen3、Mistral Large 3——尚未公开披露确切截止日期',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: '隐形限制：知识截止日期究竟是什么',
        content: [
          '<strong>知识截止日期是AI模型不再接收训练数据的日期。</strong>模型在该日期之前读取了海量文本——网页、书籍、代码、研究论文——此后则一无所有。截止日期之后发生的事件、产品发布、新研究、价格变动、公司品牌重塑或任何其他进展，对模型而言都是不可见的。',
          '这造成了用户常常忽视的系统性失效模式：AI会对自己毫不知情的话题给出自信、结构良好的回答，因为它不知道自己不知道什么。询问一个截止于2023年的模型关于2025年产品的问题，它要么凭空捏造（编造听起来合理的内容），要么正确地承认无知，或者——最危险的情况——给出基于该产品早期版本的回答，而该版本现在已严重过时。',
          '这种混淆因许多云端产品在基础模型之上叠加实时搜索而加剧，使普通用户感知不到截止日期的存在。当ChatGPT回答今日新闻问题时，它使用的是Bing——而非训练数据。去掉那个搜索层，模型将基于数月乃至数年前的知识作答。',
        ],
        callouts: [
          {
            type: 'info',
            label: '快速参考',
            text: '只需要截止日期表？请参阅 <a href="/zh/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">AI知识截止日期速查表</a> — 涵盖所有主流模型的可扫描参考表格。',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: '截止日期与实时搜索：改变一切的关键区别',
        content: [
          '<strong>理解AI知识限制最重要的区别，是训练截止（模型属性）与实时搜索（产品能力）之间的区别。</strong>由于云端AI产品无缝融合两者，这两者常被混淆。',
          '<strong>训练截止</strong>内嵌于模型权重中。不经过重新训练或微调，无法改变。无论通过ChatGPT、API还是任何第三方工具运行的GPT-4o，都有相同的2023年10月截止日期。',
          '<strong>实时搜索层</strong>是在产品层面集成的外部工具。当ChatGPT需要当前信息时，它查询Bing的API，获取最新结果，并与其推理能力综合。这发生在推理阶段，可由产品团队随时开启或关闭。',
        ],
        columns: ['模型/产品', '搜索层', '触发条件', '备注'],
        rows: [
          { '模型/产品': 'GPT-5.5 (ChatGPT)', '搜索层': 'Bing', '触发条件': '自动 — 模型自行决定', '备注': 'ChatGPT Plus/Pro默认开启；原始API调用默认关闭' },
          { '模型/产品': 'Gemini 3.1 Pro', '搜索层': 'Google搜索', '触发条件': '自动 — 模型自行决定', '备注': 'Vertex AI开发者可使用Google Grounding API' },
          { '模型/产品': 'Grok 4.3 (X.com)', '搜索层': 'X (Twitter)', '触发条件': '自动 — 模型自行决定', '备注': 'DeepSearch = 更广泛的网络搜索，需手动开启' },
          { '模型/产品': 'Perplexity', '搜索层': '多源网络', '触发条件': '始终 — 每次查询', '备注': '设计即以搜索为先；引用来源' },
          { '模型/产品': 'Claude (Anthropic)', '搜索层': 'Brave/网络（工具）', '触发条件': '仅限开发者主动开启', '备注': '默认关闭；需通过API工具配置' },
          { '模型/产品': 'DeepSeek（云端）', '搜索层': '无', '触发条件': '不适用', '备注': '无搜索层；截止日期为硬性限制' },
          { '模型/产品': 'Mistral（云端）', '搜索层': '无', '触发条件': '不适用', '备注': '无搜索层；截止日期为硬性限制' },
          { '模型/产品': '所有本地LLM', '搜索层': '无', '触发条件': '不适用', '备注': '默认无互联网访问；需构建RAG以获取实时信息' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-zh.png',
        imageCaption: '知识截止日期 vs 实时搜索 -- 哪些AI系统会搜索网络',
      },
      full_table: {
        id: 'full-model-table',
        title: '完整已验证截止数据：所有主流模型',
        content: [
          '下表仅使用一手资料数据——模型卡、官方文档和经同行评审的技术报告。凡无一手资料来源的，截止日期标注为"未公开披露"，而非估算。',
          '<strong>云端模型：</strong>',
        ],
        columns: ['模型', '厂商', '截止日期', '已验证', '默认搜索', '搜索层'],
        rows: CLOUD_MODELS.map(m => ({
          '模型': m.modelName,
          '厂商': m.vendor,
          '截止日期': m.cutoffDate,
          '已验证': m.cutoffVerified ? '✓' : '—',
          '默认搜索': m.hasLiveSearchDefault ? '是' : (m.searchLayer === 'Tool-use only' ? '仅工具' : '否'),
          '搜索层': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: '在云端模型中，只有Claude需要开发者明确配置才能进行网络搜索——其他所有模型默认为终端用户开启实时搜索。',
          },
          {
            type: 'in-plain-terms',
            text: '云端AI模型就像在回答问题间隙可以查阅资料的研究员。本地AI模型则像自某个固定日期起完全断网的研究员。',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: '本地/开源权重模型：已验证截止日期',
        content: [
          '<strong>本地开源权重模型 — 全部搜索层为"无"：</strong>',
        ],
        columns: ['模型', '厂商', '截止日期', '已验证', '部署方式', '许可证'],
        rows: LOCAL_MODELS.map(m => ({
          '模型': m.modelName,
          '厂商': m.vendor,
          '截止日期': m.cutoffDate,
          '已验证': m.cutoffVerified ? '✓ 主要来源' : '— 未披露',
          '部署方式': m.deployment,
          '许可证': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: '核心洞察',
            text: '本表中每个本地模型的搜索层均为"无"。这不是特定模型的局限——这是本地部署LLM的结构性特征。除非经过明确编程，否则它们没有任何网络访问能力。',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: '本地LLM问题：运行在冻结的大脑上',
        content: [
          '<strong>当您通过Ollama、LM Studio、llama.cpp或任何其他运行器运行本地LLM时，您运行的是一个知识完全冻结的模型。</strong>不是"稍微过时"，不是"基本最新"，而是完全冻结在某个固定日期。',
          '这不仅仅是不便。这是一个根本性的架构特性。没有电话回家、没有后台更新、没有模型会悄悄刷新其知识。磁盘上的权重就是那些权重——它们编码了模型所知的一切，并且在运行之间不会改变。',
          '这会产生特定的、可预测的失效模式。询问一个本地运行模型关于在其截止日期之后完成品牌重塑的公司，它会使用旧名称。询问关于截止日期之后发布的产品，它要么说不知道，要么——更严重地——凭空捏造一个听起来合理的描述。',
          '<strong>建立在本地LLM之上的数千个应用——内部聊天机器人、代码助手、文档分析器——都共享这个知识冻结问题。</strong>任何在内部部署Llama、Qwen、Gemma或Phi的组织，都在运行一个字面上无法了解模型训练截止之后发生任何事情的软件，除非他们在上面构建RAG系统。',
        ],
        columns: ['场景', '带搜索的云端LLM', '无RAG的本地LLM'],
        rows: [
          { '场景': '询问今日新闻', '带搜索的云端LLM': '从Bing/Google检索；给出当前答案', '无RAG的本地LLM': '承认无知或产生幻觉' },
          { '场景': '询问2025年产品发布', '带搜索的云端LLM': '搜索网络；给出当前规格', '无RAG的本地LLM': '若在截止日期后则无相关知识' },
          { '场景': '询问您的公司（截止后成立）', '带搜索的云端LLM': '可通过搜索检索您的网站', '无RAG的本地LLM': '找不到您；不在训练数据中' },
          { '场景': '询问竞争对手品牌重塑', '带搜索的云端LLM': '从搜索找到当前名称', '无RAG的本地LLM': '使用训练数据中的旧名称' },
          { '场景': '询问新法规', '带搜索的云端LLM': '检索当前法律文本', '无RAG的本地LLM': '仅有法规颁布前的知识' },
          { '场景': '询问AI模型排名', '带搜索的云端LLM': '搜索基准测试；基本最新', '无RAG的本地LLM': '冻结在截止日期；排名已过时' },
        ],
        callouts: [
          {
            type: 'info',
            label: '本地LLM局限性',
            text: '关于本地LLM能做什么、不能做什么的完整分析（不仅限于截止日期），请参阅 <a href="/zh/local-llms/local-llm-limitations" class="text-primary hover:underline">本地LLM局限性：它们无法做的事</a>。',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: '对用户的影响：何时信任AI回答',
        content: [
          '<strong>最重要的一条规则：始终问自己，这个答案在模型截止日期之后是否可能已发生变化。</strong>如果是，请独立核实——尤其是医疗、法律、金融和技术类话题。',
          '不同的AI系统处理截止日期之后信息缺口的方式各不相同。了解每个系统的行为方式，有助于您判断该在多大程度上信任其回答。',
        ],
        columns: ['AI系统', '截止后行为', '当前信息可靠性', '改善方法'],
        rows: [
          { 'AI系统': 'ChatGPT（付费）', '截止后行为': '自动搜索Bing', '当前信息可靠性': '事实层面较高；细微之处较低', '改善方法': '要求引用来源；交叉核实关键主张' },
          { 'AI系统': 'Gemini（付费）', '截止后行为': '自动搜索Google', '当前信息可靠性': '事实层面较高；细微之处较低', '改善方法': '开启接地功能；审阅引用的URL' },
          { 'AI系统': 'Grok (X.com)', '截止后行为': '自动搜索X帖子', '当前信息可靠性': '社交趋势方面较好；事实层面参差不齐', '改善方法': '使用DeepSearch获取更广泛的网络覆盖' },
          { 'AI系统': 'Claude（免费/专业版）', '截止后行为': '默认仅使用训练数据', '当前信息可靠性': '中等 — 可靠截止日期为2026年1月', '改善方法': '将当前文本粘贴到上下文中；API用户可开启搜索工具' },
          { 'AI系统': 'Perplexity', '截止后行为': '始终优先搜索网络', '当前信息可靠性': '较高 — 原生搜索产品', '改善方法': '设计上已自动引用来源' },
          { 'AI系统': '任何本地LLM', '截止后行为': '仅使用训练数据 — 无法覆盖', '当前信息可靠性': '截止后话题极低', '改善方法': '构建RAG管道；手动粘贴上下文' },
        ],
        callouts: [
          {
            type: 'warning',
            label: '幻觉风险',
            text: '当模型被问及截止日期之后的内容，而该内容与模型已知内容听起来合情合理地相似时，幻觉风险最高。它会基于过时的训练数据给出听起来自信的答案，而非承认无知。',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: '对企业的影响：按AI系统划分的GEO策略',
        content: [
          '<strong>GEO（生成式引擎优化）是使您的品牌、产品或内容出现在AI生成回答中的实践。</strong>对于大多数AI系统，GEO的运作方式类似于SEO——AI从搜索引擎检索内容，因此在Bing或Google上排名靠前就能直接影响AI回答。',
          '但本地LLM彻底打破了这一模式。本地部署的Llama或Qwen从不搜索网络。您无法通过搜索优化进入其回答——只有当您在截止日期之前就在训练数据中，或者部署组织通过RAG注入您的内容时，模型才会提及您。',
          '下表梳理了每个AI系统的GEO渠道：',
        ],
        columns: ['AI系统', 'GEO渠道', '优化方向', '本地部署是否影响'],
        rows: [
          { 'AI系统': 'GPT-5.5 (ChatGPT)', 'GEO渠道': 'Bing搜索检索', '优化方向': 'Bing SEO：技术SEO、Bing站长工具、结构化数据', '本地部署是否影响': '是 — 本地OpenAI API调用无Bing；截止日期为硬性限制' },
          { 'AI系统': 'Gemini 3.1 Pro', 'GEO渠道': 'Google搜索接地', '优化方向': 'Google SEO + 结构化数据（FAQ、HowTo、Article schema）', '本地部署是否影响': '暂无 — 截至2026年6月Gemini仅限云端' },
          { 'AI系统': 'Grok 4.3', 'GEO渠道': 'X (Twitter) 内容', '优化方向': 'X平台存在：认证账户、高互动帖子、X社区', '本地部署是否影响': '暂无 — 截至2026年6月Grok仅限云端' },
          { 'AI系统': 'Perplexity', 'GEO渠道': '原生网络检索', '优化方向': '所有搜索引擎 + 引用权威来源、清晰结构化内容', '本地部署是否影响': '否 — Perplexity设计上即为原生网络' },
          { 'AI系统': 'Claude (API)', 'GEO渠道': '工具调用搜索（Brave/网络）— 需主动开启', '优化方向': '通用网络存在；为摘要资格准备结构化内容', '本地部署是否影响': '是 — 许多Claude部署已禁用搜索' },
          { 'AI系统': 'Llama（本地）', 'GEO渠道': '仅RAG管道', '优化方向': 'RAG：结构化数据格式、知识库、文档API', '本地部署是否影响': '这本身就是本地部署 — SEO无关' },
          { 'AI系统': 'Qwen / Gemma / Phi（本地）', 'GEO渠道': '仅RAG管道', '优化方向': 'RAG：部署组织的文档摄取管道', '本地部署是否影响': '这本身就是本地部署 — SEO无关' },
        ],
        callouts: [
          {
            type: 'warning',
            label: '本地LLM GEO盲点',
            text: '大多数GEO指南完全聚焦于云端AI——告诉您优化Bing或Google搜索。这些建议对于触达Llama、Qwen、Gemma或Phi的内部部署毫无用处。这些模型从不搜索。唯一有效的GEO渠道，是说服部署该模型的组织将您的内容纳入其RAG管道。',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-zh.png',
        imageCaption: '按AI系统划分的GEO策略 -- 两条路径：基于搜索与基于RAG',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'GEO解决方案：为两类AI构建护城河',
        content: [
          '<strong>2026年的完整GEO策略需要两条并行轨道：面向云端AI的搜索优化，以及面向本地AI的RAG就绪准备。</strong>大多数组织只在执行第一条轨道。',
          '<strong>轨道1 — 云端AI（基于搜索的GEO）：</strong>传统SEO技术适用，但需加入AI特定的补充措施。您的内容必须针对摘要资格进行结构化（FAQ和HowTo JSON-LD schema），事实准确（AI模型会避免引用有更正历史的页面），并具有权威性（Bing和Google质量信号直接转化为AI引用可能性）。针对Grok，X平台存在（认证账户、互动率、粉丝数量）决定您的品牌是否出现在Grok回答中。',
          '<strong>轨道2 — 本地AI（基于RAG的GEO）：</strong>您无法通过搜索优化进入本地LLM。路径完全不同：（1）创建RAG管道可消费格式的机器可读知识库（Markdown、JSON-LD、OpenAPI规范、结构化FAQ）；（2）参与开放数据计划，使构建RAG系统的组织可以使用您的信息；（3）与部署本地LLM的企业客户建立直接关系，提出数据合作协议；（4）提供SDK或API，让将您的内容纳入RAG管道变得轻而易举。',
          '对大多数公司而言，轨道1已作为SEO工作的一部分在进行中。轨道2需要新的工作——具体来说，是以针对机器摄取而非人类阅读优化的格式生产内容。',
        ],
        numberedItems: [
          '审计您的AI可见性：哪些AI系统提到了您的品牌？分别测试ChatGPT、Gemini、Grok、Perplexity以及本地Llama/Qwen部署',
          '针对云端AI的差距：应用结构化数据标记（FAQPage、HowTo、TechArticle、Product），提升Bing站长存在感，强化E-E-A-T信号',
          '针对本地AI的差距：生产机器可读知识库（结构化JSON、Markdown文档、OpenAPI规范），RAG系统可以摄取',
          '以规范的、不变的格式记录品牌事实——模型名称、描述、能力、定价——每次版本变更时更新',
          '在每个主要页面发布llms.txt文件（面向AI爬虫的纯文本站点描述）和结构化数据',
          '每季度跨AI系统追踪提及率——格局变化比传统搜索快得多',
        ],
        callouts: [
          {
            type: 'info',
            label: '本地RAG资源',
            text: '关于为自有LLM部署注入当前知识的本地RAG技术实现，请参阅 <a href="/zh/local-llms/local-rag-2026" class="text-primary hover:underline">本地RAG 2026：最佳工具与框架</a> 和 <a href="/zh/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">企业级本地LLM RAG</a>。',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: '常见问题',
        faqs: [
          {
            q: '什么是AI知识截止日期？',
            a: '知识截止日期是指模型训练数据结束的日期。模型对该日期之后发生的事件、产品、研究或内容一无所知。云端模型可通过网络搜索进行部分补偿；本地LLM则不能。',
          },
          {
            q: '如果ChatGPT的截止日期是2023年10月，为什么它知道近期发生的事情？',
            a: 'ChatGPT（产品）在付费层默认搜索Bing，并将当前搜索结果与训练数据推理综合。底层GPT-4o模型的训练截止日期仍为2023年10月——您看到的是搜索层，而非更新的训练数据。',
          },
          {
            q: '像Llama和Qwen这样的本地LLM会收到知识更新吗？',
            a: '不会——不会自动更新。本地LLM的知识在训练截止日期时就永久冻结。每个新模型版本（Llama 4 Scout、Qwen3 14B）有不同的截止日期，但运行在您机器上的副本具有固定知识。要获取当前信息，请构建RAG管道。',
          },
          {
            q: '什么是GEO，它与知识截止日期有何关联？',
            a: 'GEO（生成式引擎优化）是使内容出现在AI生成回答中的学科。对于云端AI，GEO通过搜索优化实现——在Bing/Google排名靠前就能被引用。对于本地LLM，这在结构上是不可能的，因为模型从不搜索。本地LLM GEO需要部署组织的RAG管道。',
          },
          {
            q: '哪个AI模型拥有最新的已验证知识截止日期？',
            a: '在一手资料已验证截止日期中：Claude Opus 4.8拥有最新的可靠截止日期——2026年1月。GPT-5.5为2025年8月。Gemini 3.1 Pro为2025年1月。Grok 4.3为2024年11月。DeepSeek-V3和Gemma 3 27B约为2024年7月至8月。Phi-4为2024年6月。GPT-4o（旧版）为2023年10月。包括Llama 4、Qwen3和Mistral Large在内的多个当前模型尚未公开披露确切日期。',
          },
          {
            q: '我能用SEO让自己出现在Llama或Qwen的回答中吗？',
            a: '不能。SEO无法影响本地部署的LLM，因为该模型从不搜索网络。唯一的途径是：（1）在截止日期前已出现在训练数据中，或（2）被部署该模型的组织的RAG管道所纳入。',
          },
          {
            q: '如何对可能受截止日期影响的AI回答进行事实核查？',
            a: '三个信号提示截止风险：（1）话题涉及特定版本、价格、人物或事件；（2）您询问的是快速变化行业的内容；（3）AI回答缺乏引用。任何一个适用时，请通过一手资料核实——模型自信的语气不是可靠性指标。',
          },
          {
            q: '有没有办法从AI的回答判断它是否使用了实时搜索？',
            a: '通常有：Perplexity始终显示来源引用。Gemini在使用接地功能时会显示Google搜索图标。Grok会标注X搜索结果。ChatGPT会显示地球图标，并可提示其展示来源。Claude默认不搜索，因此无需指示。本地LLM从不搜索，所以不存在任何指示——答案始终来自训练数据。',
          },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[RAG详解：检索增强生成](/zh/prompt-engineering/rag-explained) — RAG是解决本地LLM知识截止局限的主要方案',
          '[AI幻觉：为什么AI会编造内容](/zh/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 知识截止导致的过时是幻觉的主要原因之一',
          '[AI局限性：LLM无法做的事](/zh/prompt-engineering/ai-limitations-what-llms-cant-do) — 结构性约束，包括冻结知识和缺乏实时搜索',
          '[AI模型知识截止日期2026：速查表](/zh/prompt-bites/ai-model-knowledge-cutoff-dates) — 所有主流云端与本地模型的可扫描参考表',
          '[本地LLM模型更新2026](/zh/local-llms/local-llm-model-updates-2026) — 追踪每个主要开源权重发布及其对截止日期格局的影响',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'Fechas de corte del conocimiento de la IA, búsqueda en vivo y GEO: la guía completa',
    seoTitle: 'Fechas de corte del conocimiento de IA y estrategia GEO 2026 — Enfoque en LLM local',
    intro: '**Todo modelo de IA tiene una fecha de corte del conocimiento — un límite firme tras el cual sus datos de entrenamiento terminan. Pero los modelos en la nube y los modelos locales gestionan este límite de maneras fundamentalmente diferentes.** Esta guía explica la distinción entre corte y búsqueda en vivo, mapea el comportamiento de cada modelo principal y extrae las implicaciones estratégicas para usuarios y empresas que desean aparecer en las respuestas generadas por IA — incluida la conclusión clave de que los LLM locales requieren una estrategia GEO completamente distinta a la de los modelos en la nube.',
    metaDescription: 'Guía completa sobre fechas de corte de la IA: fechas verificadas para Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi — más estrategia GEO para aparecer en IA en la nube vs LLM locales. Los modelos locales necesitan RAG, no SEO.',
    heroImage: '/images/knowledge-cutoffs-and-geo-search-layer-hero-es.png',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Fecha de corte del conocimiento de la IA',
    audience: 'Usuarios, equipos de producto y profesionales de marketing que necesitan entender de dónde obtienen información los modelos de IA — y qué hacer al respecto',
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**Una fecha de corte del conocimiento es la fecha tras la cual el modelo no dispone de datos de entrenamiento.** Los modelos en la nube compensan parcialmente mediante búsqueda web integrada (ChatGPT → Bing, Gemini → Google, Grok → X). Los LLM locales no tienen capa de búsqueda — su corte es absoluto. Para la estrategia GEO: para aparecer en la IA en la nube, optimice para la búsqueda. Para aparecer en la IA local, construya pipelines RAG — el SEO por sí solo no puede alcanzar a un modelo que nunca busca en la web.',
    quickFacts: [
      '**6 modelos en la nube** cubiertos — fechas de corte verificadas con enlaces a fuentes primarias',
      '**6 modelos locales/open-weight** cubiertos — todos tienen "Ninguna" para la capa de búsqueda',
      '**Gemma 3 27B** tiene la fecha de corte verificada más antigua entre los modelos locales actuales: agosto de 2024',
      '**Phi-4** tiene un corte de junio de 2024 — el segundo más antiguo verificado entre los modelos locales',
      '**Grok 4.3** es el único modelo en la nube cuya capa de búsqueda predeterminada es una plataforma social (X/Twitter) en lugar de la web general',
      '**Implicación GEO**: las empresas que despliegan Llama/Qwen internamente solo pueden ser alcanzadas a través de los pipelines RAG que esas empresas construyan por sí mismas',
    ],
    toc: [
      { label: 'Conclusiones clave', anchor: 'key-takeaways' },
      { label: 'El límite invisible: qué es realmente un corte', anchor: 'the-invisible-limit' },
      { label: 'Corte vs búsqueda en vivo: la distinción crítica', anchor: 'cutoff-vs-live-search' },
      { label: 'Tabla de datos completa: todos los modelos', anchor: 'full-model-table' },
      { label: 'El problema de los LLM locales: funcionar con un cerebro congelado', anchor: 'local-llm-problem' },
      { label: 'Implicaciones para los usuarios', anchor: 'implications-for-users' },
      { label: 'Implicaciones para las empresas: estrategia GEO', anchor: 'geo-strategy' },
      { label: 'La solución GEO: construir una ventaja competitiva', anchor: 'geo-solution' },
      { label: 'Preguntas frecuentes', anchor: 'faq-knowledge-cutoffs' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
      dependencies: 'Basic understanding of how LLMs work',
      headline: 'Fechas de corte del conocimiento de la IA, búsqueda en vivo y GEO: la guía completa',
      description: 'Guía completa sobre las fechas de corte del conocimiento de la IA con datos verificados para todos los modelos principales en la nube y locales, más las implicaciones de la estrategia GEO — incluida la razón por la que los LLM locales requieren RAG, no SEO.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'es',
      keywords: [
        'fecha de corte IA', 'fecha de corte del conocimiento', 'corte LLM local', 'estrategia GEO',
        'optimización para motores generativos', 'RAG vs SEO', 'fecha de corte ChatGPT',
        'fecha de corte Claude', 'corte Llama', 'corte Gemma', 'corte Phi-4',
        'corte entrenamiento IA 2026', 'búsqueda en vivo IA', 'búsqueda Bing IA', 'limitaciones LLM local',
      ],
      about: [
        { '@type': 'Thing', name: 'AI Knowledge Cutoff' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'es'),
      url: 'https://www.promptquorum.com/es/prompt-engineering/knowledge-cutoffs-and-geo',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es una fecha de corte del conocimiento de la IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una fecha de corte del conocimiento es la fecha tras la cual los datos de entrenamiento del modelo terminan. El modelo no tiene información sobre eventos, productos, investigaciones ni ningún otro contenido publicado después de esa fecha. Los modelos en la nube pueden compensar parcialmente mediante búsqueda web integrada; los LLM locales no pueden — su corte es absoluto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué ChatGPT parece conocer eventos recientes aunque su modelo base tiene una fecha de corte de entrenamiento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (el producto) busca en Bing de forma predeterminada en los planes de pago y enriquece sus respuestas con resultados de búsqueda actuales. Esto significa que puede responder preguntas factuales sobre eventos recientes aunque los datos de entrenamiento del modelo subyacente tengan un corte fijo (el corte de entrenamiento de GPT-5.5 es agosto de 2025; el GPT-4o heredado termina en octubre de 2023). El corte de entrenamiento sigue limitando la comprensión contextual de los temas posteriores al corte.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Reciben actualizaciones de conocimiento los LLM locales como Llama y Qwen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El conocimiento de un LLM local está permanentemente congelado en su fecha de corte de entrenamiento. Cuando se publica una nueva versión del modelo (por ejemplo, Llama 4 Scout sustituyendo a Llama 3.3), tiene un nuevo corte — pero el modelo en ejecución en su máquina no se actualiza automáticamente. Para acceder a información actual, debe construir un pipeline RAG (Generación Aumentada por Recuperación) que obtenga documentos en el momento de la consulta y los inyecte en la ventana de contexto del modelo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es el GEO y cómo se relaciona con las fechas de corte del conocimiento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El GEO (Generative Engine Optimization u Optimización para Motores Generativos) es la práctica de lograr que su marca o contenido aparezca en las respuestas generadas por IA. Para los modelos de IA en la nube, el GEO se solapa con el SEO — si su contenido se posiciona bien en Bing, Google o X, puede ser recuperado y citado por ChatGPT, Gemini o Grok. Para los LLM locales, el GEO a través de la búsqueda es imposible porque el modelo nunca busca en la web. La única forma de llegar a un despliegue de LLM local es a través de pipelines RAG construidos por la organización que ejecuta el modelo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué modelo de IA tiene la fecha de corte del conocimiento más reciente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entre los cortes verificados por fuente primaria: Claude Opus 4.8 tiene el corte fiable más reciente en enero de 2026. GPT-5.5 es agosto de 2025. Grok 4.3 es noviembre de 2024. Gemini 3.1 Pro es enero de 2025. DeepSeek-V3 es julio de 2024. Gemma 3 27B es agosto de 2024. Phi-4 es junio de 2024. GPT-4o (heredado) es octubre de 2023. Varios modelos actuales, incluidos Llama 4, Qwen3 y Mistral Large, no han divulgado públicamente fechas de corte exactas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar el SEO para aparecer en las respuestas de Llama o Qwen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La optimización para motores de búsqueda no puede influir en un LLM desplegado localmente porque el modelo nunca realiza búsquedas web. Para aparecer en las salidas de un LLM local, debe: (1) haber estado en los datos de entrenamiento del modelo antes de su corte, o (2) ser incluido a través de pipelines RAG construidos por quien despliegue el modelo. Este es un canal fundamentalmente diferente al SEO tradicional o al GEO para IA en la nube.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué modelos de IA en la nube realizan búsquedas en la web en vivo de forma predeterminada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT usa Bing de forma predeterminada (planes de pago). Gemini 3.1 Pro usa Google Search de forma predeterminada. Grok 4.3 busca en X (Twitter) de forma predeterminada. Perplexity es nativo de la búsqueda web para cada consulta. Claude requiere activación explícita de herramienta por parte del desarrollador y no realiza búsquedas de forma predeterminada. DeepSeek y Mistral Large no tienen búsqueda predeterminada. Todos los LLM locales (Llama, Qwen, Gemma, Phi, pesos abiertos de Mistral) no tienen capacidad de búsqueda.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué debo hacer si necesito información actual de un LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Construya un pipeline RAG (Generación Aumentada por Recuperación). Un sistema RAG recupera documentos actuales relevantes — desde una búsqueda web, una base de datos interna o un almacén de documentos — en el momento de la consulta y los inyecta en la ventana de contexto del LLM antes de generar una respuesta. Las herramientas RAG locales populares incluyen LlamaIndex, LangChain y Ollama con una capa de recuperación. El LLM entonces razona sobre los documentos inyectados en lugar de depender únicamente de datos de entrenamiento congelados.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Todo modelo de IA tiene una fecha de corte del conocimiento — una fecha firme tras la cual sus datos de entrenamiento terminan y no tiene conocimiento de eventos, productos ni información posterior',
          'Los modelos en la nube (ChatGPT, Gemini, Grok) superponen búsqueda web en vivo sobre sus datos de entrenamiento; esto reemplaza parcialmente el corte para consultas factuales',
          'Los LLM locales (Llama, Qwen, Gemma, Phi, Mistral open-weight) NO tienen capa de búsqueda — el corte es absoluto y no puede superarse sin construir un sistema RAG',
          'Para el GEO (Optimización para Motores Generativos): aparecer en la IA en la nube requiere optimización de búsqueda tradicional (Bing, Google, X); aparecer en la IA local requiere pipelines RAG — el SEO no puede alcanzar a un modelo que nunca toca la web',
          'Cortes verificados: Claude Opus 4.8 = ene. 2026 (fiable); GPT-5.5 = ago. 2025; Gemini 3.1 Pro = ene. 2025; Grok 4.3 = nov. 2024; Gemma 3 27B = ago. 2024; DeepSeek-V3 = jul. 2024; Phi-4 = jun. 2024; GPT-4o (heredado) = oct. 2023 (DeepSeek ha lanzado desde entonces DeepSeek-V4 —Flash/Pro— como nueva generación de pesos abiertos; R1/V3 siguen siendo válidos para ejecutar en local.)',
          'Varios modelos principales — Llama 4, Qwen3, Mistral Large 3 — no han divulgado públicamente fechas de corte exactas',
        ],
      },
      invisible_limit: {
        id: 'the-invisible-limit',
        title: 'El límite invisible: qué es realmente una fecha de corte del conocimiento',
        content: [
          '<strong>Una fecha de corte del conocimiento es la fecha tras la cual un modelo de IA dejó de recibir datos de entrenamiento.</strong> El modelo ha leído enormes cantidades de texto — páginas web, libros, código, artículos de investigación — hasta esa fecha, y absolutamente nada después. Los eventos, lanzamientos de productos, nuevas investigaciones, cambios de precios, rebranding de empresas o cualquier otro desarrollo ocurrido tras el corte es invisible para el modelo.',
          'Esto crea un modo de fallo sistemático que los usuarios suelen pasar por alto: la IA da respuestas confiadas y bien estructuradas sobre temas de los que no tiene conocimiento, porque no sabe lo que no sabe. Pregunte a un modelo con un corte de 2023 sobre un producto de 2025 y este o bien inventará respuestas plausibles (confabulación), o reconocerá correctamente su ignorancia, o — lo más peligroso — dará una respuesta basada en una versión anterior del producto que ahora está significativamente desactualizada.',
          'La confusión se agrava por el hecho de que muchos productos en la nube superponen hoy en día búsqueda en vivo sobre sus modelos base, haciendo que el corte sea invisible para los usuarios ocasionales. Cuando ChatGPT responde una pregunta sobre las noticias del día, está usando Bing — no sus datos de entrenamiento. Elimine esa capa de búsqueda y el modelo estaría trabajando con conocimiento que tiene meses o años de antigüedad.',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Referencia rápida',
            text: '¿Solo necesita la tabla de fechas de corte? Consulte la <a href="/es/prompt-bites/ai-model-knowledge-cutoff-dates" class="text-primary hover:underline">Hoja de referencia de fechas de corte de modelos de IA</a> — una tabla de referencia escaneable para todos los modelos principales.',
          },
        ],
      },
      cutoff_vs_search: {
        id: 'cutoff-vs-live-search',
        title: 'Corte vs búsqueda en vivo: la distinción que lo cambia todo',
        content: [
          '<strong>La distinción más importante para entender los límites del conocimiento de la IA es entre el corte de entrenamiento (una propiedad del modelo) y la búsqueda en vivo (una capacidad del producto).</strong> A menudo se confunden porque los productos de IA en la nube mezclan ambos de forma transparente.',
          'Un <strong>corte de entrenamiento</strong> está integrado en los pesos del modelo. No se puede modificar sin reentrenar o ajustar el modelo. Cada copia de GPT-4o — ya sea ejecutándose a través de ChatGPT, la API o cualquier herramienta de terceros — tiene el mismo corte de octubre de 2023.',
          'Una <strong>capa de búsqueda en vivo</strong> es una herramienta externa integrada a nivel de producto. Cuando ChatGPT necesita información actual, consulta la API de Bing, obtiene resultados actuales y los sintetiza con sus capacidades de razonamiento. Esto ocurre en el momento de la inferencia y puede ser activado o desactivado por el equipo de producto.',
        ],
        columns: ['Modelo / Producto', 'Capa de búsqueda', 'Disparador', 'Notas'],
        rows: [
          { 'Modelo / Producto': 'GPT-5.5 (ChatGPT)', 'Capa de búsqueda': 'Bing', 'Disparador': 'Automático — el modelo decide', 'Notas': 'Activado por defecto para ChatGPT Plus/Pro; desactivado para llamadas API directas' },
          { 'Modelo / Producto': 'Gemini 3.1 Pro', 'Capa de búsqueda': 'Google Search', 'Disparador': 'Automático — el modelo decide', 'Notas': 'API Google Grounding disponible para desarrolladores Vertex AI' },
          { 'Modelo / Producto': 'Grok 4.3 (X.com)', 'Capa de búsqueda': 'X (Twitter)', 'Disparador': 'Automático — el modelo decide', 'Notas': 'DeepSearch = búsqueda web más amplia, opt-in' },
          { 'Modelo / Producto': 'Perplexity', 'Capa de búsqueda': 'Web multi-fuente', 'Disparador': 'Siempre — cada consulta', 'Notas': 'Diseñado búsqueda primero; cita fuentes' },
          { 'Modelo / Producto': 'Claude (Anthropic)', 'Capa de búsqueda': 'Brave / Web (herramienta)', 'Disparador': 'Solo opt-in del desarrollador', 'Notas': 'No activo por defecto; requiere configuración de herramienta API' },
          { 'Modelo / Producto': 'DeepSeek (nube)', 'Capa de búsqueda': 'Ninguna', 'Disparador': 'N/A', 'Notas': 'Sin capa de búsqueda; el corte es límite firme' },
          { 'Modelo / Producto': 'Mistral (nube)', 'Capa de búsqueda': 'Ninguna', 'Disparador': 'N/A', 'Notas': 'Sin capa de búsqueda; el corte es límite firme' },
          { 'Modelo / Producto': 'Todos los LLM locales', 'Capa de búsqueda': 'Ninguna', 'Disparador': 'N/A', 'Notas': 'Sin acceso a internet por defecto; se requiere RAG para información actual' },
        ],
        image: '/images/knowledge-cutoffs-and-geo-search-layer-hero-es.png',
        imageCaption: 'Corte de Conocimiento vs Búsqueda en Vivo -- Qué sistemas de IA buscan en la web',
      },
      full_table: {
        id: 'full-model-table',
        title: 'Datos de corte completos y verificados: todos los modelos principales',
        content: [
          'La tabla siguiente utiliza únicamente datos de fuente primaria — fichas de modelo, documentación oficial e informes técnicos revisados por pares. Cuando no existe ninguna fuente primaria, el corte se indica como "No divulgado públicamente" en lugar de estimarse.',
          '<strong>Modelos en la nube:</strong>',
        ],
        columns: ['Modelo', 'Proveedor', 'Fecha de corte', 'Verificado', 'Búsqueda predeterminada', 'Capa de búsqueda'],
        rows: CLOUD_MODELS.map(m => ({
          'Modelo': m.modelName,
          'Proveedor': m.vendor,
          'Fecha de corte': m.cutoffDate,
          'Verificado': m.cutoffVerified ? '✓' : '—',
          'Búsqueda predeterminada': m.hasLiveSearchDefault ? 'Sí' : (m.searchLayer === 'Tool-use only' ? 'Solo herramienta' : 'No'),
          'Capa de búsqueda': m.searchLayer,
        })),
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Entre los modelos en la nube, solo Claude requiere configuración explícita del desarrollador para la búsqueda web — todos los demás tienen la búsqueda en vivo activada de forma predeterminada para los usuarios finales.',
          },
          {
            type: 'in-plain-terms',
            text: 'Los modelos de IA en la nube son como investigadores que pueden consultar fuentes entre respuestas. Los modelos de IA locales son como investigadores que han estado completamente desconectados desde una fecha fija.',
          },
        ],
      },
      local_table_section: {
        id: 'local-llm-table',
        title: 'Modelos locales / open-weight: fechas de corte verificadas',
        content: [
          '<strong>Modelos open-weight locales — todos con "Ninguna" para la búsqueda:</strong>',
        ],
        columns: ['Modelo', 'Proveedor', 'Fecha de corte', 'Verificado', 'Despliegue', 'Licencia'],
        rows: LOCAL_MODELS.map(m => ({
          'Modelo': m.modelName,
          'Proveedor': m.vendor,
          'Fecha de corte': m.cutoffDate,
          'Verificado': m.cutoffVerified ? '✓ Fuente primaria' : '— No divulgado',
          'Despliegue': m.deployment,
          'Licencia': m.license,
        })),
        callouts: [
          {
            type: 'warning',
            label: 'Punto clave',
            text: 'Cada modelo local en esta tabla tiene "Ninguna" para la búsqueda. Esto no es una limitación de modelos específicos — es una propiedad estructural de los LLM desplegados localmente. No tienen acceso a la red a menos que se programe explícitamente.',
          },
        ],
      },
      local_problem: {
        id: 'local-llm-problem',
        title: 'El problema de los LLM locales: funcionar con un cerebro congelado',
        content: [
          '<strong>Cuando ejecuta un LLM local — ya sea a través de Ollama, LM Studio, llama.cpp o cualquier otro ejecutor — está ejecutando un modelo cuyo conocimiento está completamente congelado.</strong> No "un poco desactualizado". No "mayormente actualizado". Completamente congelado en una fecha fija.',
          'Esto no es simplemente un inconveniente. Es una propiedad arquitectónica fundamental. No hay conexión con servidores externos, ni actualización en segundo plano, ni ningún modelo que refresque silenciosamente su conocimiento. Los pesos en disco son los pesos — codifican todo lo que el modelo sabe, y esos pesos no cambian entre ejecuciones.',
          'Esto crea patrones de fallo específicos y predecibles. Un modelo ejecutado localmente al que se le pregunta sobre una empresa que cambió de nombre tras su corte usará el nombre antiguo. Un modelo al que se le pregunta sobre un producto lanzado después de su corte dirá que no lo sabe, o — más problemáticamente — alucinará una descripción plausible de cómo podría ser ese producto.',
          '<strong>Los miles de aplicaciones construidas sobre LLM locales — chatbots internos, asistentes de código, analizadores de documentos — comparten todas este problema de conocimiento congelado.</strong> Cualquier organización que despliegue Llama, Qwen, Gemma o Phi internamente está ejecutando software que literalmente no puede saber nada de lo que ocurrió después del corte de entrenamiento del modelo, a menos que construya un sistema RAG encima.',
        ],
        columns: ['Escenario', 'LLM nube con búsqueda', 'LLM local sin RAG'],
        rows: [
          { 'Escenario': 'Preguntar sobre noticias de hoy', 'LLM nube con búsqueda': 'Recupera de Bing/Google; respuesta actual', 'LLM local sin RAG': 'Admite ignorancia o alucina' },
          { 'Escenario': 'Preguntar sobre lanzamiento de producto 2025', 'LLM nube con búsqueda': 'Busca en web; especificaciones actuales', 'LLM local sin RAG': 'Sin conocimiento si es posterior al corte' },
          { 'Escenario': 'Preguntar sobre tu empresa (si post-corte)', 'LLM nube con búsqueda': 'Puede recuperar tu sitio web mediante búsqueda', 'LLM local sin RAG': 'No puede encontrarte; no está en datos de entrenamiento' },
          { 'Escenario': 'Preguntar sobre el rebranding de un competidor', 'LLM nube con búsqueda': 'Encuentra nombre actual desde búsqueda', 'LLM local sin RAG': 'Usa nombre antiguo del entrenamiento' },
          { 'Escenario': 'Preguntar sobre una nueva regulación', 'LLM nube con búsqueda': 'Recupera texto legal actual', 'LLM local sin RAG': 'Solo conocimiento pre-regulación' },
          { 'Escenario': 'Preguntar sobre rankings de modelos IA', 'LLM nube con búsqueda': 'Busca benchmarks; mayormente actual', 'LLM local sin RAG': 'Congelado en el corte; rankings desactualizados' },
        ],
        callouts: [
          {
            type: 'info',
            label: 'Limitaciones de LLM local',
            text: 'Para un análisis completo de lo que los LLM locales pueden y no pueden hacer — más allá de los cortes — ver <a href="/es/local-llms/local-llm-limitations" class="text-primary hover:underline">Limitaciones de LLM local: lo que no pueden hacer</a>.',
          },
        ],
      },
      user_implications: {
        id: 'implications-for-users',
        title: 'Implicaciones para los usuarios: cuándo confiar en las respuestas de la IA',
        content: [
          '<strong>La regla más importante: pregúntese siempre si la respuesta podría haber cambiado después de la fecha de corte del modelo.</strong> Si es así, verifique de forma independiente — especialmente en temas médicos, legales, financieros y tecnológicos.',
          'Los distintos sistemas de IA gestionan las lagunas posteriores al corte de manera diferente. Entender cómo se comporta cada sistema le ayuda a calibrar cuánto confiar en la respuesta.',
        ],
        columns: ['Sistema IA', 'Comportamiento post-corte', 'Fiabilidad para info actual', 'Cómo mejorar'],
        rows: [
          { 'Sistema IA': 'ChatGPT (pago)', 'Comportamiento post-corte': 'Busca en Bing automáticamente', 'Fiabilidad para info actual': 'Alta para hechos; menor para matices', 'Cómo mejorar': 'Pide que cite fuentes; verifica afirmaciones clave' },
          { 'Sistema IA': 'Gemini (pago)', 'Comportamiento post-corte': 'Busca en Google automáticamente', 'Fiabilidad para info actual': 'Alta para hechos; menor para matices', 'Cómo mejorar': 'Activa grounding; revisa URLs citadas' },
          { 'Sistema IA': 'Grok (X.com)', 'Comportamiento post-corte': 'Busca posts de X automáticamente', 'Fiabilidad para info actual': 'Buena para tendencias sociales; desigual para hechos', 'Cómo mejorar': 'Usa DeepSearch para mayor cobertura web' },
          { 'Sistema IA': 'Claude (gratis/pro)', 'Comportamiento post-corte': 'Usa solo datos de entrenamiento por defecto', 'Fiabilidad para info actual': 'Moderada — corte fiable enero 2026', 'Cómo mejorar': 'Pega texto actual en contexto; usuarios API pueden activar herramienta de búsqueda' },
          { 'Sistema IA': 'Perplexity', 'Comportamiento post-corte': 'Siempre busca en web primero', 'Fiabilidad para info actual': 'Alta — producto nativo de búsqueda', 'Cómo mejorar': 'Ya cita fuentes por diseño' },
          { 'Sistema IA': 'Cualquier LLM local', 'Comportamiento post-corte': 'Usa solo datos de entrenamiento — sin anulación', 'Fiabilidad para info actual': 'Muy baja para temas post-corte', 'Cómo mejorar': 'Construye pipeline RAG; pega contexto manualmente' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'Riesgo de alucinación',
            text: 'El mayor riesgo de alucinación ocurre cuando se pregunta a un modelo sobre algo posterior a su corte pero que suena plausiblemente similar a lo que sí conoce. Dará una respuesta de tono confiado basada en sus datos de entrenamiento desactualizados en lugar de admitir ignorancia.',
          },
        ],
      },
      geo_strategy: {
        id: 'geo-strategy',
        title: 'Implicaciones para las empresas: estrategia GEO por sistema de IA',
        content: [
          '<strong>El GEO (Generative Engine Optimization u Optimización para Motores Generativos) es la práctica de lograr que su marca, producto o contenido aparezca en las respuestas generadas por IA.</strong> Para la mayoría de los sistemas de IA, el GEO funciona de manera similar al SEO — la IA recupera contenido de los motores de búsqueda, por lo que posicionarse bien en Bing o Google se traslada directamente a las respuestas de IA.',
          'Pero los LLM locales rompen completamente este modelo. Un Llama o Qwen desplegado localmente nunca busca en la web. No puede optimizar su aparición en sus respuestas a través de la búsqueda — el modelo solo le mencionará si estaba en sus datos de entrenamiento antes del corte, o si la organización que lo despliega inyecta su contenido a través de RAG.',
          'Esta tabla mapea el canal GEO para cada sistema de IA:',
        ],
        columns: ['Sistema IA', 'Canal GEO', 'Optimizar para', '¿Despliegue local cambia esto?'],
        rows: [
          { 'Sistema IA': 'GPT-5.5 (ChatGPT)', 'Canal GEO': 'Recuperación búsqueda Bing', 'Optimizar para': 'SEO Bing: SEO técnico, Bing Webmaster Tools, datos estructurados', '¿Despliegue local cambia esto?': 'Sí — llamadas API locales de OpenAI no tienen Bing; corte es firme' },
          { 'Sistema IA': 'Gemini 3.1 Pro', 'Canal GEO': 'Grounding Google Search', 'Optimizar para': 'SEO Google + datos estructurados (FAQ, HowTo, esquemas Article)', '¿Despliegue local cambia esto?': 'Aún no — Gemini es solo cloud a junio 2026' },
          { 'Sistema IA': 'Grok 4.3', 'Canal GEO': 'Contenido X (Twitter)', 'Optimizar para': 'Presencia en X: cuenta verificada, posts de alto engagement, X Communities', '¿Despliegue local cambia esto?': 'Aún no — Grok es solo cloud a junio 2026' },
          { 'Sistema IA': 'Perplexity', 'Canal GEO': 'Recuperación nativa web', 'Optimizar para': 'Todos los motores de búsqueda + citar fuentes autorizadas, contenido estructurado claro', '¿Despliegue local cambia esto?': 'No — Perplexity es nativo web por diseño' },
          { 'Sistema IA': 'Claude (API)', 'Canal GEO': 'Búsqueda tool-use (Brave/Web) — opt-in', 'Optimizar para': 'Presencia web general; contenido estructurado para elegibilidad de fragmento', '¿Despliegue local cambia esto?': 'Sí — muchos despliegues de Claude tienen búsqueda desactivada' },
          { 'Sistema IA': 'Llama (local)', 'Canal GEO': 'SOLO pipelines RAG', 'Optimizar para': 'RAG: formatos de datos estructurados, bases de conocimiento, APIs de documentos', '¿Despliegue local cambia esto?': 'ESTO ES despliegue local — el SEO es irrelevante' },
          { 'Sistema IA': 'Qwen / Gemma / Phi (local)', 'Canal GEO': 'SOLO pipelines RAG', 'Optimizar para': 'RAG: pipelines de ingesta de documentos en la organización que despliega', '¿Despliegue local cambia esto?': 'ESTO ES despliegue local — el SEO es irrelevante' },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'El punto ciego GEO de los LLM locales',
            text: 'La mayoría de las guías GEO se centran íntegramente en la IA en la nube — le dicen que optimice para Bing o Google Search. Ese consejo es inútil para llegar a los despliegues internos de Llama, Qwen, Gemma o Phi. Esos modelos nunca buscan. El único canal GEO que funciona es convencer a la organización que despliega el modelo para que incluya su contenido en su pipeline RAG.',
          },
        ],
        image: '/images/knowledge-cutoffs-and-geo-geo-strategy-hero-es.png',
        imageCaption: 'Estrategia GEO por Sistema de IA -- Dos vías: basada en búsqueda vs basada en RAG',
      },
      geo_solution: {
        id: 'geo-solution',
        title: 'La solución GEO: construir una ventaja competitiva para ambos tipos de IA',
        content: [
          '<strong>Una estrategia GEO completa en 2026 requiere dos vías paralelas: optimización de búsqueda para la IA en la nube, y preparación RAG para la IA local.</strong> La mayoría de las organizaciones solo ejecutan la primera vía.',
          '<strong>Vía 1 — IA en la nube (GEO basado en búsqueda):</strong> Las técnicas SEO tradicionales se aplican pero con adiciones específicas para IA. Su contenido debe estar estructurado para elegibilidad de fragmento destacado (esquemas JSON-LD FAQ y HowTo), ser factualmente preciso (los modelos de IA evitan citar páginas con historial de correcciones), y ser autoritativo (las señales de calidad de Bing y Google se traducen directamente en probabilidad de citación por IA). Para Grok específicamente, la presencia en X (cuenta verificada, tasa de engagement, número de seguidores) determina si su marca aparece en las respuestas de Grok.',
          '<strong>Vía 2 — IA local (GEO basado en RAG):</strong> No puede optimizar su aparición en un LLM local a través de la búsqueda. El camino es completamente diferente: (1) crear bases de conocimiento legibles por máquina en formatos que consumen los pipelines RAG (Markdown, JSON-LD, especificaciones OpenAPI, preguntas frecuentes estructuradas); (2) participar en iniciativas de datos abiertos para que su información esté disponible para las organizaciones que construyen sistemas RAG; (3) establecer relaciones directas con clientes empresariales que despliegan LLM locales y proponer acuerdos de asociación de datos; (4) proporcionar SDK o APIs que hagan trivial incluir su contenido en un pipeline RAG.',
          'Para la mayoría de las empresas, la Vía 1 ya está en marcha como parte del SEO. La Vía 2 requiere trabajo nuevo — específicamente, producir contenido en formatos optimizados para la ingesta por máquinas, no para la lectura humana.',
        ],
        numberedItems: [
          'Audite su visibilidad en IA: ¿qué sistemas de IA mencionan su marca? Pruebe ChatGPT, Gemini, Grok, Perplexity y un despliegue local de Llama/Qwen por separado',
          'Para brechas en IA en la nube: aplique marcado de datos estructurados (FAQPage, HowTo, TechArticle, Product), mejore la presencia en Bing Webmaster Tools, refuerce las señales E-E-A-T',
          'Para brechas en IA local: produzca una base de conocimiento legible por máquina (JSON estructurado, documentos Markdown, especificación OpenAPI) que los sistemas RAG puedan ingerir',
          'Documente los datos de su marca en un formato canónico e invariable — nombre del modelo, descripciones, capacidades, precios — actualizado con cada cambio de versión',
          'Publique un archivo llms.txt (descripción del sitio en texto plano para rastreadores de IA) y datos estructurados en cada página principal',
          'Haga seguimiento de las tasas de mención en sistemas de IA trimestralmente — el panorama cambia más rápido que la búsqueda tradicional',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Recursos RAG local',
            text: 'Para implementación técnica de RAG local, ver <a href="/es/local-llms/local-rag-2026" class="text-primary hover:underline">RAG Local 2026: Mejores herramientas y frameworks</a> y <a href="/es/local-llms/corporate-rag-local-llms" class="text-primary hover:underline">RAG corporativo con LLM locales</a>.',
          },
        ],
      },
      faq: {
        id: 'faq-knowledge-cutoffs',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es una fecha de corte del conocimiento de la IA?',
            a: 'Una fecha de corte del conocimiento es la fecha tras la cual los datos de entrenamiento del modelo terminan. El modelo no tiene información alguna sobre eventos, productos, investigaciones ni contenido publicado después de esa fecha. Los modelos en la nube pueden compensar parcialmente mediante búsqueda web; los LLM locales no pueden.',
          },
          {
            q: '¿Por qué ChatGPT conoce eventos recientes si su corte es octubre de 2023?',
            a: 'ChatGPT (el producto) busca en Bing de forma predeterminada en los planes de pago y sintetiza los resultados de búsqueda actuales con su razonamiento basado en datos de entrenamiento. El modelo GPT-4o subyacente sigue teniendo un corte de entrenamiento de octubre de 2023 — lo que ve es la capa de búsqueda, no datos de entrenamiento actualizados.',
          },
          {
            q: '¿Reciben actualizaciones de conocimiento los LLM locales como Llama y Qwen?',
            a: 'No — no de forma automática. El conocimiento de un LLM local está permanentemente congelado en su corte de entrenamiento. Cada nueva versión del modelo (Llama 4 Scout, Qwen3 14B) tiene un corte diferente, pero la copia en ejecución en su máquina tiene un conocimiento fijo. Para obtener información actual, construya un pipeline RAG.',
          },
          {
            q: '¿Qué es el GEO y cómo se relaciona con las fechas de corte?',
            a: 'El GEO (Generative Engine Optimization) es la disciplina de lograr que su contenido aparezca en las respuestas generadas por IA. Para la IA en la nube, el GEO funciona a través de la optimización de búsqueda — posiciónese en Bing/Google y será citado. Para los LLM locales, esto es estructuralmente imposible porque el modelo nunca realiza búsquedas. El GEO para LLM locales requiere pipelines RAG en la organización que despliega el modelo.',
          },
          {
            q: '¿Qué modelo de IA tiene la fecha de corte del conocimiento más reciente (verificada)?',
            a: 'Entre los cortes verificados por fuente primaria: Claude Opus 4.8 tiene el corte fiable más reciente en enero de 2026. GPT-5.5 es agosto de 2025. Gemini 3.1 Pro es enero de 2025. Grok 4.3 es noviembre de 2024. DeepSeek-V3 y Gemma 3 27B están alrededor de julio–agosto de 2024. Phi-4 es junio de 2024. GPT-4o (heredado) es octubre de 2023. Varios modelos actuales (Llama 4, Qwen3, Mistral Large) no han divulgado fechas exactas públicamente.',
          },
          {
            q: '¿Puedo usar el SEO para aparecer en las respuestas de Llama o Qwen?',
            a: 'No. El SEO no puede influir en un LLM desplegado localmente porque el modelo nunca realiza búsquedas web. Los únicos caminos son: (1) estar en los datos de entrenamiento antes del corte, o (2) ser incluido en un pipeline RAG por la organización que despliega el modelo.',
          },
          {
            q: '¿Cómo verifico una respuesta de IA sobre algo que podría estar afectado por el corte?',
            a: 'Tres señales indican riesgo de corte: (1) el tema involucra versiones específicas, precios, personas o eventos; (2) preguntó sobre algo en un sector de rápida evolución; (3) la respuesta de IA carece de citas. Cuando alguna de estas aplique, verifique con una fuente primaria — el tono confiado del modelo no es un indicador de fiabilidad.',
          },
          {
            q: '¿Hay alguna manera de saber a partir de la respuesta de una IA si utilizó búsqueda en vivo?',
            a: 'A menudo sí: Perplexity siempre muestra citas de fuentes. Gemini muestra un ícono de Google Search cuando se usa grounding. Grok indica resultados de búsqueda en X. ChatGPT muestra un ícono de globo terráqueo y puede solicitársele que muestre las fuentes. Claude no busca de forma predeterminada, por lo que no se necesita indicador. Los LLM locales nunca buscan, así que no existe ningún indicador — la respuesta siempre proviene de los datos de entrenamiento.',
          },
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[RAG explicado: Generación aumentada por recuperación](/es/prompt-engineering/rag-explained) — el RAG es la solución principal a los límites de corte de LLM locales',
          '[Alucinaciones de IA: Por qué la IA inventa cosas](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — la obsolescencia del corte es una causa principal de las alucinaciones',
          '[Limitaciones de IA: Lo que los LLM no pueden hacer](/es/prompt-engineering/ai-limitations-what-llms-cant-do) — restricciones estructurales incluyendo conocimiento congelado y ausencia de búsqueda en vivo',
          '[Fechas de corte de modelos IA 2026: Hoja de referencia](/es/prompt-bites/ai-model-knowledge-cutoff-dates) — tabla de referencia escaneable para todos los modelos principales cloud y locales',
          '[Actualizaciones de modelos LLM locales 2026](/es/local-llms/local-llm-model-updates-2026) — seguimiento de cada lanzamiento open-weight importante y cómo cambia el panorama de los cortes',
        ],
      },
    },
  },
}
