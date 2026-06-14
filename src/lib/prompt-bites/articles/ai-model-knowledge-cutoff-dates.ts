import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'
import { CLOUD_MODELS, LOCAL_MODELS, CUTOFF_DATA_LAST_VERIFIED } from '@/lib/shared/cutoff-data'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    is_living_page: true,
    theme: 'Knowledge & Research',
    type: 'reference',
    title: 'AI Model Knowledge Cutoff Dates 2026: Complete Cheat Sheet',
    seoTitle: 'AI Model Knowledge Cutoff Dates 2026 | PromptQuorum Cheat Sheet',
    metaDescription: 'Verified knowledge cutoff dates for Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma, and Phi. Which models search the live web — and which ones are frozen in time.',
    educationalLevel: 'Beginner',
    audience: 'Anyone using AI tools who needs to know whether model answers reflect current information',
    publishDate: '2026-06-12',
    dateModified: CUTOFF_DATA_LAST_VERIFIED,
    lastUpdated: CUTOFF_DATA_LAST_VERIFIED,
    current_models_mentioned: [
      'Claude Opus 4.8', 'ChatGPT', 'GPT-5.5', 'GPT-4o', 'Gemini 3.1 Pro',
      'Grok 4.3', 'Mistral Large 3', 'DeepSeek-V3', 'Llama 4 Scout', 'Qwen3 14B',
      'Gemma 3 27B', 'Phi-4',
    ],
    parentArticle: '/prompt-engineering/knowledge-cutoffs-and-geo',
    siblingBites: ['best-llm-right-now', 'co-star-prompt-framework'],
    leadAnswerBlock: '**A knowledge cutoff date is the date after which an AI model has no training data — events, product releases, or facts after that date are invisible to the model.** Cloud models like ChatGPT and Gemini partially compensate with built-in web search. Local LLMs (Llama, Qwen, Gemma, Phi) have no search layer, so their cutoff is an absolute hard limit.',
    quickAnswerTop: {
      en: {
        question: 'What are the current AI model knowledge cutoff dates?',
        answer: 'Verified cutoffs: GPT-5.5 August 2025 (ChatGPT searches Bing by default; GPT-4o legacy Oct 2023); Claude Opus 4.8 January 2026 (reliable cutoff); Grok 4.3 November 2024 (searches X); Gemini 3.1 Pro January 2025 (native Google Search); DeepSeek-V3 July 2024; Gemma 3 27B August 2024; Phi-4 June 2024; Qwen2.5 December 2023. Several major models — including Mistral Large, Llama 4, and Qwen3 — have not publicly disclosed exact cutoff dates. Local LLMs have no web search and their cutoff is absolute.',
        bullets: [
          'GPT-5.5 (ChatGPT): Aug 2025 cutoff — partially offset by Bing search default',
          'Claude (Opus 4.8): Jan 2026 reliable cutoff — web search requires explicit tool activation',
          'Grok 4.3: Nov 2024 cutoff — searches X (Twitter) by default',
          'Local LLMs (Llama, Qwen, Gemma, Phi): no search layer — cutoff is a hard frozen limit',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      de: {
        question: 'Was sind die aktuellen Wissens-Cutoff-Daten der KI-Modelle?',
        answer: 'Verifizierte Cutoffs: GPT-5.5 August 2025 (ChatGPT durchsucht standardmäßig Bing; GPT-4o-Legacy Okt 2023); Claude Opus 4.8 Januar 2026 (zuverlässiger Cutoff); Grok 4.3 November 2024 (durchsucht X); Gemini 3.1 Pro Januar 2025 (native Google Search). Lokale LLMs (Llama, Qwen, Gemma, Phi) haben keine Websuche — ihr Cutoff ist absolut.',
        bullets: [
          'GPT-5.5 (ChatGPT): Cutoff Aug 2025 — teilweise durch Bing-Suche ausgeglichen',
          'Claude (Opus 4.8): Cutoff Jan 2026 (zuverlässig) — Websuche nur als optionales Tool',
          'Grok 4.3: Cutoff Nov 2024 — durchsucht X standardmäßig',
          'Lokale LLMs: keine Suchfunktion — Cutoff ist eine harte Wissensgrenze',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      fr: {
        question: 'Quelles sont les dates de coupure des modèles d\'IA en 2026 ?',
        answer: 'Coupures vérifiées : GPT-5.5 août 2025 (ChatGPT recherche Bing par défaut ; GPT-4o legacy oct 2023) ; Claude Opus 4.8 janvier 2026 (coupure fiable) ; Grok 4.3 novembre 2024 (recherche X) ; Gemini 3.1 Pro janvier 2025 (Google Search natif). Les LLM locaux (Llama, Qwen, Gemma, Phi) n\'ont pas de couche de recherche — leur coupure est une limite absolue.',
        bullets: [
          'GPT-5.5 (ChatGPT) : coupure août 2025 — partiellement compensée par Bing',
          'Claude (Opus 4.8) : coupure jan 2026 (fiable) — recherche web opt-in uniquement',
          'Grok 4.3 : coupure nov 2024 — recherche X par défaut',
          'LLM locaux : aucune recherche — la coupure est une limite dure',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      ja: {
        question: 'AIモデルの知識カットオフ日は2026年現在どうなっていますか？',
        answer: '確認済みカットオフ：GPT-5.5は2025年8月（ChatGPTはデフォルトでBing検索；GPT-4oレガシーは2023年10月）、Claude Opus 4.8は2026年1月（信頼性の高いカットオフ）、Grok 4.3は2024年11月（X検索）、Gemini 3.1 Proは2025年1月（Google Search統合）。ローカルLLM（Llama、Qwen、Gemma、Phi）は検索レイヤーなし — カットオフは絶対的な制限。',
        bullets: [
          'GPT-5.5 (ChatGPT)：カットオフ2025年8月 — Bing検索で部分補完',
          'Claude (Opus 4.8)：カットオフ2026年1月（信頼性高）— ウェブ検索はオプトイン',
          'Grok 4.3：カットオフ2024年11月 — X検索をデフォルトで使用',
          'ローカルLLM：検索なし — カットオフは固定された絶対的な知識の限界',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      zh: {
        question: '2026年AI模型的知识截止日期是什么？',
        answer: '已验证截止日期：GPT-5.5 2025年8月（ChatGPT默认搜索Bing；GPT-4o旧版2023年10月）；Claude Opus 4.8 2026年1月（可靠截止日期）；Grok 4.3 2024年11月（搜索X）；Gemini 3.1 Pro 2025年1月（原生Google Search集成）。本地LLM（Llama、Qwen、Gemma、Phi）无搜索层——截止日期是绝对硬限制。',
        bullets: [
          'GPT-5.5 (ChatGPT)：截止2025年8月 — 由Bing搜索部分补充',
          'Claude (Opus 4.8)：截止2026年1月（可靠）— 网络搜索需手动启用',
          'Grok 4.3：截止2024年11月 — 默认搜索X',
          '本地LLM：无搜索层 — 截止日期是冻结的绝对知识边界',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      pt: {
        question: 'Quais são as datas de corte de conhecimento dos modelos de IA em 2026?',
        answer: 'Datas de corte verificadas: GPT-5.5 agosto 2025 (ChatGPT busca no Bing por padrão; GPT-4o legado out 2023); Claude Opus 4.8 janeiro 2026 (corte confiável); Grok 4.3 novembro 2024 (busca X); Gemini 3.1 Pro janeiro 2025 (Google Search nativo). LLMs locais (Llama, Qwen, Gemma, Phi) não têm camada de busca — o corte é um limite absoluto.',
        bullets: [
          'GPT-5.5 (ChatGPT): corte ago 2025 — parcialmente compensado pela busca Bing',
          'Claude (Opus 4.8): corte jan 2026 (confiável) — busca web requer ativação explícita',
          'Grok 4.3: corte nov 2024 — busca X por padrão',
          'LLMs locais: sem camada de busca — o corte é um limite de conhecimento fixo',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
      ar: {
        question: 'ما هي تواريخ انقطاع معرفة نماذج الذكاء الاصطناعي في 2026؟',
        answer: 'تواريخ انقطاع موثّقة: GPT-5.5 أغسطس 2025 (ChatGPT يبحث في Bing افتراضيًا؛ GPT-4o القديم أكتوبر 2023)؛ Claude Opus 4.8 يناير 2026 (انقطاع موثوق)؛ Grok 4.3 نوفمبر 2024 (يبحث في X)؛ Gemini 3.1 Pro يناير 2025 (Google Search الأصيل). نماذج LLM المحلية (Llama وQwen وGemma وPhi) بلا طبقة بحث — الانقطاع حد مطلق.',
        bullets: [
          'GPT-5.5 (ChatGPT): انقطاع أغسطس 2025 — مُعوَّض جزئيًا ببحث Bing',
          'Claude (Opus 4.8): انقطاع يناير 2026 (موثوق) — بحث الويب يتطلب تفعيلًا صريحًا',
          'Grok 4.3: انقطاع نوفمبر 2024 — يبحث في X افتراضيًا',
          'نماذج LLM المحلية: بلا بحث — الانقطاع حد معرفي مجمّد مطلق',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'An AI knowledge cutoff date is the date after which the model has no training data — local LLMs have no web search so this limit is absolute, while cloud models like ChatGPT and Gemini partially compensate with live search.',
      },
      {
        type: 'plain-terms',
        text: 'Think of the cutoff as the last page of a book: the AI read everything up to that page and nothing after. Cloud models like ChatGPT can look up today\'s news; local LLMs running on your machine cannot.',
      },
    ],
    toc: [
      { label: 'Key Takeaways', anchor: 'key-takeaways' },
      { label: 'Cloud Models: Cutoffs & Search Layers', anchor: 'cloud-models-table' },
      { label: 'Local LLMs: Hard Cutoffs, No Search', anchor: 'local-models-table' },
      { label: 'Why Local LLMs Are Different', anchor: 'why-local-is-different' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A knowledge cutoff is a hard date — the model has zero training data after it, and will confabulate or say it doesn\'t know about anything after that date',
          'Cloud models (ChatGPT, Gemini, Grok) partially compensate via built-in web search; the search layer can override stale training data for factual queries',
          'Local LLMs (Llama, Qwen, Gemma, Phi, Mistral) have NO search layer — their cutoff is an absolute frozen knowledge limit with no override',
          'Several major models — Mistral Large, Llama 4, Qwen3 — have not publicly disclosed exact cutoff dates; "Not publicly disclosed" below means no primary source exists',
          'For GEO strategy: appearing in cloud AI requires SEO/search optimization; appearing in local AI requires RAG pipelines built by the deployer',
        ],
      },
      cloud_table: {
        id: 'cloud-models-table',
        title: 'Cloud AI Models: Knowledge Cutoffs & Live Search Layers',
        content: [
          'These are the cloud models end users interact with. Where a search layer exists, the model can retrieve current information for some queries — but the underlying knowledge cutoff still matters for context not covered by search.',
          '⚠️ <strong>"Default live search"</strong> means the model searches the web automatically for most queries, without any developer integration. "Tool-use only" means search must be explicitly wired by developers; end users without that setup see only the training cutoff.',
        ],
        columns: ['Model', 'Vendor', 'Cutoff Date', 'Default Live Search', 'Search Layer'],
        rows: CLOUD_MODELS.map(m => ({
          'Model': m.modelName,
          'Vendor': m.vendor,
          'Cutoff Date': m.cutoffDate,
          'Default Live Search': m.hasLiveSearchDefault ? 'Yes' : (m.searchLayer === 'Tool-use only' ? 'No (tool-use only)' : 'No'),
          'Search Layer': m.searchLayer,
        })),
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ChatGPT searches Bing by default, Gemini searches Google, and Grok searches X — but Claude requires explicit tool activation and DeepSeek has no search layer at all.',
          },
        ],
      },
      local_table: {
        id: 'local-models-table',
        title: 'Local / Open-Weight LLMs: Hard Knowledge Cutoffs',
        content: [
          'Local LLMs run entirely on your device or a self-hosted server. They have no internet connection by default and no built-in search layer. Every entry in this table has "None" for search — because the only way to give a local LLM access to current information is to build a RAG pipeline yourself.',
          '<strong>This means the cutoff dates below are HARD limits.</strong> Ask a locally-run Llama 4 Scout about something that happened after its training cutoff and it will either make something up or admit it doesn\'t know.',
        ],
        columns: ['Model', 'Vendor', 'Cutoff Date', 'Cutoff Verified', 'Search Layer'],
        rows: LOCAL_MODELS.map(m => ({
          'Model': m.modelName,
          'Vendor': m.vendor,
          'Cutoff Date': m.cutoffDate,
          'Cutoff Verified': m.cutoffVerified ? '✓ Primary source' : 'Not disclosed',
          'Search Layer': 'None — hard limit',
        })),
        callouts: [
          {
            type: 'warning',
            text: 'Local LLMs have NO live search. When you run Llama, Qwen, Gemma, or Phi locally (via Ollama, LM Studio, or any other runner), the model has zero access to information after its training cutoff date — unless YOU build a RAG system to inject current context.',
          },
        ],
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Running a local LLM is like asking an expert who has been completely offline since a specific date — brilliant about everything before that date, completely blind to everything after.',
          },
        ],
      },
      why_local: {
        id: 'why-local-is-different',
        title: 'Why Local LLMs Are Fundamentally Different',
        content: [
          '<strong>Cloud AI models and local LLMs handle knowledge cutoffs differently in one critical way: cloud models can search the live web; local models cannot.</strong>',
          'When ChatGPT can\'t answer from training data, it silently queries Bing and augments its response with current results. When Gemini 3.1 Pro is asked about a recent event, it searches Google. These search layers hide the cutoff from casual users — you get a current-sounding answer even though the base model\'s training data is months or years old.',
          'A locally-run Qwen3 or Llama 4 on your machine has no such safety net. Ask it about a product launched last month and it has two options: confabulate (hallucinate a plausible-sounding but fabricated answer), or say it doesn\'t know. There is no third option — it physically cannot reach the internet unless you build that capability yourself via a RAG pipeline.',
          'This distinction matters for three groups: <strong>users</strong> who need accurate current-events answers; <strong>businesses</strong> deploying AI internally on local hardware; and <strong>companies</strong> that want to appear in AI answers (GEO strategy — see the <a href="/prompt-engineering/knowledge-cutoffs-and-geo" class="text-primary hover:underline">full GEO analysis</a>).',
        ],
        callouts: [
          {
            type: 'info',
            text: 'Want the full strategic picture — including what this means for GEO (Generative Engine Optimization) and how to appear in local AI outputs? Read the deep dive: <a href="/prompt-engineering/knowledge-cutoffs-and-geo" class="text-primary hover:underline">Knowledge Cutoffs, GEO, and Local LLMs</a>.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions About AI Knowledge Cutoff Dates',
        faqs: [
          {
            q: 'What is a knowledge cutoff date in AI?',
            a: 'A knowledge cutoff date is the date after which an AI model has no training data. Events, product releases, research papers, or any information published after the cutoff are invisible to the model. The model cannot know these things exist unless it can search the live web or is given the information in the prompt.',
          },
          {
            q: 'What is the difference between a knowledge cutoff and live search?',
            a: 'A knowledge cutoff is a property of the model\'s training data — a fixed frozen date. Live search is a capability layered on top of the model that lets it retrieve current web pages at query time. ChatGPT (Bing), Gemini (Google), and Grok (X) have live search by default. Claude requires explicit tool activation. Local LLMs have no live search by default — you must build a RAG pipeline to add it.',
          },
          {
            q: 'Do local LLMs ever update their knowledge?',
            a: 'No. A local LLM\'s knowledge is frozen at its training cutoff and stays frozen indefinitely. To give a local LLM access to newer information, you must either: (1) fine-tune or retrain the model on newer data (expensive), or (2) build a RAG (Retrieval-Augmented Generation) pipeline that fetches relevant documents at query time and injects them into the prompt. See our guide to <a href="/local-llms/local-rag-2026" class="text-primary hover:underline">local RAG pipelines</a>.',
          },
          {
            q: 'Which AI models can see today\'s news and current events?',
            a: 'ChatGPT (uses Bing by default in paid tiers), Gemini 3.1 Pro (uses Google by default), and Grok 4.3 (searches X/Twitter by default) can access current information. Perplexity is web-search-native and retrieves live results for every query. Claude can search the web only when developers explicitly enable the web search tool. DeepSeek, Mistral Large, and all local LLMs (Llama, Qwen, Gemma, Phi) have no default search access.',
          },
          {
            q: 'Is the ChatGPT cutoff date the same as what it knows right now?',
            a: 'No. ChatGPT (the product) has both a training cutoff date and a live Bing search capability. For recent factual queries, it searches Bing and augments its answer with current results — so what it "knows" at query time can be much newer than the training cutoff. The training cutoff still matters for: nuanced understanding of events (not just facts), contextual knowledge woven into its reasoning, and any information not indexed by Bing.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI Model Knowledge Cutoff Dates 2026: Complete Cheat Sheet',
      description: 'Verified knowledge cutoff dates for Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma, and Phi — with live search layer breakdown for each model.',
      datePublished: '2026-06-12',
      dateModified: CUTOFF_DATA_LAST_VERIFIED,
      inLanguage: 'en',
      proficiencyLevel: 'Beginner',
      keywords: [
        'AI knowledge cutoff', 'knowledge cutoff date', 'ChatGPT knowledge cutoff',
        'Claude knowledge cutoff', 'Llama knowledge cutoff', 'local LLM cutoff',
        'AI training cutoff 2026', 'GPT-4o cutoff', 'Gemini cutoff date',
        'Grok knowledge cutoff', 'Phi-4 cutoff', 'Gemma cutoff date',
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
        url: 'https://www.promptquorum.com/api/og/ai-model-knowledge-cutoff-dates',
        width: 1200,
        height: 630,
      },
      url: 'https://www.promptquorum.com/prompt-bites/ai-model-knowledge-cutoff-dates',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a knowledge cutoff date in AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A knowledge cutoff date is the date after which an AI model has no training data. Events, product releases, or any information published after the cutoff are invisible to the model unless it can search the live web or is given the information in the prompt.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a knowledge cutoff and live search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A knowledge cutoff is fixed in the model\'s training. Live search is a capability added on top — ChatGPT uses Bing, Gemini uses Google, Grok uses X. Local LLMs have no live search by default; their cutoff is an absolute hard limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI models can see today\'s news?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT (Bing, default on paid tiers), Gemini 3.1 Pro (Google, default), and Grok 4.3 (X, default) can access current information. Perplexity is web-native. Claude requires explicit developer tool activation. All local LLMs (Llama, Qwen, Gemma, Phi) have no search access by default.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do local LLMs ever update their knowledge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A local LLM\'s knowledge is permanently frozen at its training cutoff. To give it access to current information, you must build a RAG (Retrieval-Augmented Generation) pipeline that injects relevant documents into the prompt at query time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the ChatGPT knowledge cutoff the same as what it actually knows?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — ChatGPT uses Bing to search for current facts, so it can answer questions about events after its training cutoff. But the training cutoff still limits the depth of its contextual understanding for any topic that postdates it.',
          },
        },
      ],
    },
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'KI-Modell Wissens-Cutoff-Daten 2026: Vollständige Übersicht',
    seoTitle: 'KI Wissens-Cutoff-Daten 2026 | PromptQuorum',
    metaDescription: 'Verifizierte Wissens-Cutoff-Daten für Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma und Phi. Welche Modelle live suchen — und welche eingefroren sind.',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein Wissens-Cutoff ist ein hartes Datum — das Modell hat nach diesem Datum keinerlei Trainingsdaten',
          'Cloud-Modelle (ChatGPT, Gemini, Grok) kompensieren dies teilweise durch eingebaute Websuche',
          'Lokale LLMs (Llama, Qwen, Gemma, Phi, Mistral) haben KEINE Suchfunktion — ihr Cutoff ist eine absolute Wissensgrenze',
          'Mehrere große Modelle — Mistral Large, Llama 4, Qwen3 — haben keine öffentlichen Cutoff-Daten bekannt gegeben',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'Dates de Coupure des Modèles IA 2026 : Référence Complète',
    seoTitle: 'Dates de Coupure IA 2026 | PromptQuorum',
    metaDescription: 'Dates de coupure vérifiées pour Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma et Phi. Quels modèles utilisent la recherche live — et lesquels sont figés dans le temps.',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Une date de coupure est fixe — le modèle n\'a aucune donnée d\'entraînement après cette date',
          'Les modèles cloud (ChatGPT, Gemini, Grok) compensent partiellement via la recherche web intégrée',
          'Les LLM locaux (Llama, Qwen, Gemma, Phi) n\'ont AUCUNE couche de recherche — leur coupure est une limite absolue',
          'Plusieurs grands modèles — Mistral Large, Llama 4, Qwen3 — n\'ont pas divulgué de dates de coupure exactes',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AIモデルの知識カットオフ日2026：完全チートシート',
    seoTitle: 'AIモデル知識カットオフ日2026 | PromptQuorum',
    metaDescription: 'Claude、ChatGPT、Gemini、Grok、Llama、Qwen、Gemma、Phiの検証済み知識カットオフ日。どのモデルがライブ検索を使用し、どのモデルが凍結されているかを解説。',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '知識カットオフは固定された日付 — その日以降のデータはモデルに存在しない',
          'クラウドモデル（ChatGPT、Gemini、Grok）は組み込みのウェブ検索で部分的に補完',
          'ローカルLLM（Llama、Qwen、Gemma、Phi）は検索レイヤーなし — カットオフは絶対的な制限',
          'Mistral Large、Llama 4、Qwen3など主要モデルのカットオフ日は非公開',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI模型知识截止日期2026：完整参考表',
    seoTitle: 'AI模型知识截止日期2026 | PromptQuorum',
    metaDescription: 'Claude、ChatGPT、Gemini、Grok、Llama、Qwen、Gemma和Phi的已验证知识截止日期。哪些模型使用实时搜索，哪些模型知识被冻结。',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '知识截止日期是固定的——该日期之后的信息对模型不可见',
          '云端模型（ChatGPT、Gemini、Grok）通过内置网络搜索部分弥补这一限制',
          '本地LLM（Llama、Qwen、Gemma、Phi）无搜索层——截止日期是绝对的知识边界',
          'Mistral Large、Llama 4、Qwen3等多个主要模型未公开具体截止日期',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'AI 모델 지식 컷오프 날짜 2026: 완전한 치트 시트',
    seoTitle: 'AI 모델 지식 컷오프 날짜 2026 | PromptQuorum',
    metaDescription: 'Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma, Phi의 검증된 지식 컷오프 날짜. 어떤 모델이 실시간 웹 검색을 사용하고 어떤 모델이 과거 시점에 고정되어 있는지 확인하세요.',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '지식 컷오프는 고정된 날짜입니다 — 그 날짜 이후의 정보는 모델에 존재하지 않습니다',
          '클라우드 모델(ChatGPT, Gemini, Grok)은 내장된 웹 검색으로 이를 부분적으로 보완합니다',
          '로컬 LLM(Llama, Qwen, Gemma, Phi)은 검색 레이어가 없습니다 — 컷오프는 절대적인 지식의 한계입니다',
          'Mistral Large, Llama 4, Qwen3 등 여러 주요 모델은 정확한 컷오프 날짜를 공개하지 않았습니다',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'Datas de corte de conhecimento dos modelos de IA 2026: guia de referência completo',
    seoTitle: 'Datas de corte de conhecimento de IA 2026 | PromptQuorum',
    metaDescription: 'Datas de corte verificadas para Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma e Phi. Descubra quais modelos usam busca web ao vivo e quais estão congelados em um ponto no tempo.',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Datas de corte de conhecimento são fixas — informações após essa data não existem para o modelo',
          'Modelos em nuvem (ChatGPT, Gemini, Grok) compensam parcialmente com busca web integrada',
          'LLMs locais (Llama, Qwen, Gemma, Phi) não têm camada de busca — o corte é um limite absoluto de conhecimento',
          'Vários modelos principais — incluindo Mistral Large, Llama 4 e Qwen3 — não divulgaram datas de corte exatas',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    title: 'تواريخ انقطاع معرفة نماذج الذكاء الاصطناعي 2026: دليل مرجعي شامل',
    seoTitle: 'تواريخ انقطاع معرفة الذكاء الاصطناعي 2026 | PromptQuorum',
    metaDescription: 'تواريخ انقطاع موثّقة لـ Claude وChatGPT وGemini وGrok وLlama وQwen وGemma وPhi. اكتشف أي النماذج تستخدم البحث المباشر وأيها مجمّدة عند نقطة زمنية محددة.',
    publishDate: '2026-06-12',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تواريخ انقطاع المعرفة ثابتة — المعلومات بعد هذا التاريخ غير موجودة للنموذج',
          'نماذج السحابة (ChatGPT وGemini وGrok) تعوّض جزئيًا ببحث ويب مدمج',
          'نماذج LLM المحلية (Llama وQwen وGemma وPhi) بلا طبقة بحث — الانقطاع حد معرفي مطلق',
          'عدة نماذج رئيسية — بما فيها Mistral Large وLlama 4 وQwen3 — لم تُفصح عن تواريخ انقطاع دقيقة',
        ],
      },
    },
  },
}
