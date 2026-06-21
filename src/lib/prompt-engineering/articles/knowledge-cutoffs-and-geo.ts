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
          'Verified cutoffs: Claude Opus 4.8 = Jan 2026 (reliable); GPT-5.5 = Aug 2025; Gemini 3.1 Pro = Jan 2025; Grok 4.3 = Nov 2024; Gemma 3 27B = Aug 2024; DeepSeek-V3 = Jul 2024; Phi-4 = Jun 2024; GPT-4o (legacy) = Oct 2023',
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
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/api/og/knowledge-cutoffs-and-geo',
        width: 1200,
        height: 630,
      },
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
          '검증된 마감 날짜: Claude Opus 4.8 = 2026년 1월(신뢰 가능); GPT-5.5 = 2025년 8월; Gemini 3.1 Pro = 2025년 1월; Grok 4.3 = 2024년 11월; Gemma 3 27B = 2024년 8월; DeepSeek-V3 = 2024년 7월; Phi-4 = 2024년 6월; GPT-4o(레거시) = 2023년 10월',
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
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/api/og/knowledge-cutoffs-and-geo',
        width: 1200,
        height: 630,
      },
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
          'Datas de corte verificadas: Claude Opus 4.8 = jan 2026 (confiável); GPT-5.5 = ago 2025; Gemini 3.1 Pro = jan 2025; Grok 4.3 = nov 2024; Gemma 3 27B = ago 2024; DeepSeek-V3 = jul 2024; Phi-4 = jun 2024; GPT-4o (legado) = out 2023',
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
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'تواريخ انقطاع معرفة الذكاء الاصطناعي والبحث المباشر و⁨GEO⁩: الدليل الكامل',
    seoTitle: 'تواريخ انقطاع معرفة النماذج واستراتيجية ⁨GEO 2026⁩',
    intro: '**كل نموذج ذكاء اصطناعي يمتلك تاريخ انقطاع معرفة — الحد الذي تنتهي عنده بيانات التدريب. لكن نماذج السحابة والنماذج المحلية تتعامل مع هذا الحد بطرق مختلفة جوهريًا.** يشرح هذا الدليل الفرق بين تواريخ الانقطاع والبحث المباشر، ويستخلص الآثار الاستراتيجية للمستخدمين والشركات — بما فيها الرؤية المحورية أن نماذج LLM المحلية تستلزم استراتيجية GEO مختلفة كليًا عن نماذج السحابة.',
    metaDescription: 'تواريخ انقطاع موثّقة لـ ⁨Claude⁩ و⁨GPT⁩ و⁨Gemini⁩ و⁨Llama⁩ و⁨Qwen⁩، مع استراتيجية ⁨GEO⁩: السحابي مقابل ⁨LLM⁩ المحلي. النماذج المحلية تحتاج ⁨RAG⁩ لا ⁨SEO⁩.',
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
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/api/og/knowledge-cutoffs-and-geo',
        width: 1200,
        height: 630,
      },
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
          'تواريخ انقطاع موثّقة: Claude Opus 4.8 = يناير 2026؛ GPT-5.5 = أغسطس 2025؛ Gemini 3.1 Pro = يناير 2025؛ Grok 4.3 = نوفمبر 2024؛ Gemma 3 27B = أغسطس 2024؛ DeepSeek-V3 = يوليو 2024؛ Phi-4 = يونيو 2024؛ GPT-4o القديم = أكتوبر 2023',
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
}
