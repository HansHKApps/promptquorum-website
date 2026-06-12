import type { Language } from '@/lib/blog/blogContent'
import type { PEArticle } from '@/lib/prompt-engineering/types'
import { CLOUD_MODELS, LOCAL_MODELS, CUTOFF_DATA_LAST_VERIFIED } from '@/lib/shared/cutoff-data'

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI Knowledge Cutoffs, Live Search, and GEO: The Complete Guide',
    seoTitle: 'AI Knowledge Cutoff Dates & GEO Strategy 2026 — Local LLM Focus',
    intro: '**Every AI model has a knowledge cutoff date — a hard boundary after which its training data ends. But cloud and local models handle this limit in fundamentally different ways.** This guide explains the cutoff vs. live-search distinction, maps each major model\'s behavior, and draws out the strategic implications for users and for companies that want to appear in AI-generated answers — including the critical insight that local LLMs require a completely different GEO strategy than cloud models.',
    metaDescription: 'Complete guide to AI knowledge cutoffs: verified dates for Claude, GPT, Gemini, Grok, Llama, Qwen, Gemma, Phi — plus GEO strategy for appearing in cloud AI vs local LLMs. Local models need RAG, not SEO.',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastFactChecked: CUTOFF_DATA_LAST_VERIFIED,
    readTime: '16 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI Knowledge Cutoff',
    audience: 'Users, product teams, and marketers who need to understand where AI models get their information — and what to do about it',
    current_models_mentioned: [
      'Claude Opus 4.8', 'Claude Sonnet 4.6', 'ChatGPT', 'GPT-4o', 'Gemini 2.5 Pro',
      'Grok 3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4', 'Perplexity',
    ],
    leadAnswerBlock: '**An AI knowledge cutoff is the date after which the model has no training data.** Cloud models partially compensate via built-in web search (ChatGPT → Bing, Gemini → Google, Grok → X). Local LLMs have no search layer — their cutoff is absolute. For GEO strategy: to appear in cloud AI, optimize for search. To appear in local AI, build RAG pipelines — SEO alone cannot reach a model that never searches the web.',
    quickFacts: [
      '**6 cloud models** covered — verified cutoff dates with primary source links',
      '**6 local/open-weight models** covered — all have "None" for search layer',
      '**Gemma 3 27B** has the earliest verified cutoff among current local models: August 2024',
      '**Phi-4** has a June 2024 cutoff — the second-earliest verified among locals',
      '**Grok 3** is the only cloud model whose default search layer is a social platform (X/Twitter) rather than general web',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/api/og/knowledge-cutoffs-and-geo',
        width: 1200,
        height: 630,
      },
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
          name: 'Why does ChatGPT seem to know about recent events even with an Oct 2023 cutoff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (the product) searches Bing by default in paid tiers and augments its responses with current search results. This means it can answer factual questions about recent events even though the underlying GPT-4o model\'s training data ends in October 2023. The training cutoff still limits contextual understanding of post-cutoff topics.',
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
            text: 'Among verified primary-source cutoffs: Claude Sonnet 4.6 has the most recent at August 2025. Grok 3 is next at November 2024. DeepSeek-V3 is July 2024. Gemma 3 27B is August 2024. Phi-4 is June 2024. GPT-4o is October 2023. Several current models including Llama 4, Qwen3, and Mistral Large have not publicly disclosed exact cutoff dates.',
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
            text: 'ChatGPT uses Bing by default (paid tiers). Gemini 2.5 Pro uses Google Search by default. Grok 3 searches X (Twitter) by default. Perplexity is web-search-native for every query. Claude requires explicit developer tool activation and does not search by default. DeepSeek and Mistral Large have no default search. All local LLMs (Llama, Qwen, Gemma, Phi, Mistral open weights) have no search capability.',
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
          'Verified cutoffs: Claude Sonnet 4.6 = Aug 2025; Grok 3 = Nov 2024; Gemma 3 27B = Aug 2024; DeepSeek-V3 = Jul 2024; Phi-4 = Jun 2024; GPT-4o = Oct 2023',
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
          { 'Model / Product': 'ChatGPT (GPT-4o)', 'Search Layer': 'Bing', 'Search Trigger': 'Automatic — model decides', 'Notes': 'Default on for ChatGPT Plus/Pro; off for raw API calls' },
          { 'Model / Product': 'Gemini 2.5 Pro', 'Search Layer': 'Google Search', 'Search Trigger': 'Automatic — model decides', 'Notes': 'Google Grounding API available for Vertex AI developers' },
          { 'Model / Product': 'Grok 3 (X.com)', 'Search Layer': 'X (Twitter)', 'Search Trigger': 'Automatic — model decides', 'Notes': 'DeepSearch = broader web search, opt-in' },
          { 'Model / Product': 'Perplexity', 'Search Layer': 'Multi-source web', 'Search Trigger': 'Always — every query', 'Notes': 'Search-first by design; cites sources' },
          { 'Model / Product': 'Claude (Anthropic)', 'Search Layer': 'Brave / Web (tool)', 'Search Trigger': 'Developer opt-in only', 'Notes': 'Not on by default; requires API tool configuration' },
          { 'Model / Product': 'DeepSeek (cloud)', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No search layer; cutoff is hard limit' },
          { 'Model / Product': 'Mistral (cloud)', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No search layer; cutoff is hard limit' },
          { 'Model / Product': 'All local LLMs', 'Search Layer': 'None', 'Search Trigger': 'N/A', 'Notes': 'No internet access by default; RAG required for currency' },
        ],
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
          { 'AI System': 'Claude (free/pro)', 'Post-Cutoff Behavior': 'Uses training data only by default', 'Reliability for Current Info': 'Low — Aug 2025 cutoff', 'How to Improve': 'Paste current text into context; API users can enable search tool' },
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
          { 'AI System': 'ChatGPT / GPT-4o', 'GEO Channel': 'Bing search retrieval', 'Optimize For': 'Bing SEO: technical SEO, Bing Webmaster Tools, structured data', 'Local Deployment Changes This?': 'Yes — local GPT-4o APIs have no Bing; cutoff is hard' },
          { 'AI System': 'Gemini 2.5 Pro', 'GEO Channel': 'Google Search grounding', 'Optimize For': 'Google SEO + structured data (FAQ, HowTo, Article schemas)', 'Local Deployment Changes This?': 'Not yet — Gemini is cloud-only as of June 2026' },
          { 'AI System': 'Grok 3', 'GEO Channel': 'X (Twitter) content', 'Optimize For': 'X presence: verified account, high-engagement posts, X Communities', 'Local Deployment Changes This?': 'Not yet — Grok is cloud-only as of June 2026' },
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
            a: 'Among primary-source verified cutoffs: Claude Sonnet 4.6 is August 2025. Grok 3 is November 2024. DeepSeek-V3 and Gemma 3 27B are tied at around July–August 2024. Phi-4 is June 2024. GPT-4o is October 2023. Several current models (Llama 4, Qwen3, Mistral Large) have not publicly disclosed exact dates.',
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
    },
  },
}
