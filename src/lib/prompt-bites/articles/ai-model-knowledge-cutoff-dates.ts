import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'
import { CLOUD_MODELS, LOCAL_MODELS, CUTOFF_DATA_LAST_VERIFIED } from '@/lib/shared/cutoff-data'
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = 'ai-model-knowledge-cutoff-dates';

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    is_living_page: true,
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-en.png',
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
        answer: 'Verified cutoffs: GPT-5.5 August 2025 (ChatGPT searches Bing by default; GPT-4o legacy Oct 2023); Claude Opus 4.8 January 2026 (reliable cutoff); Grok 4.3 November 2024 (searches X); Gemini 3.1 Pro January 2025 (native Google Search); DeepSeek-V3 July 2024; Gemma 3 27B August 2024; Phi-4 June 2024; Qwen2.5 December 2023. Several major models — including Mistral Large, Llama 4, and Qwen3 — have not publicly disclosed exact cutoff dates. Local LLMs have no web search and their cutoff is absolute. (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.)',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      image: buildOgImageObject(OG_SLUG, 'en'),
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
      relatedBites: {
        id: 'related-articles',
        title: 'Related Guides',
        items: [
          '[Best LLM Right Now](/prompt-bites/best-llm-right-now) — compare current top models by cutoff freshness',
          '[Can You Run Qwen3 on Ollama?](/prompt-bites/can-you-run-qwen3-on-ollama) — Qwen3 local deployment and its knowledge cutoff context',
          '[Ollama Latest Version](/prompt-bites/ollama-latest-version) — track which model versions are available locally',
          '[Local LLM Model Updates 2026](/local-llms/local-llm-model-updates-2026) — every major open-weight release and how it shifts the cutoff landscape',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-de.png',
    title: 'KI-Modell Wissens-Cutoff-Daten 2026: Vollständige Übersicht',
    seoTitle: 'KI Wissens-Cutoff-Daten 2026 | PromptQuorum',
    metaDescription: 'Verifizierte Wissens-Cutoff-Daten für Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma und Phi. Welche Modelle live suchen — und welche eingefroren sind.',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
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
      relatedBites: {
        id: 'related-articles',
        title: 'Verwandte Anleitungen',
        items: [
          '[Bestes LLM gerade jetzt](/de/prompt-bites/best-llm-right-now) — aktuelle Top-Modelle nach Aktualität des Wissens-Cutoffs vergleichen',
          '[Kann man Qwen3 mit Ollama ausführen?](/de/prompt-bites/can-you-run-qwen3-on-ollama) — Qwen3 lokale Bereitstellung und Wissens-Cutoff-Kontext',
          '[Ollama Neueste Version](/de/prompt-bites/ollama-latest-version) — verfolgen, welche Modellversionen lokal verfügbar sind',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) — alle wichtigen Open-Weight-Releases und deren Einfluss auf den Cutoff-Zeitraum',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen zu KI-Wissens-Cutoff-Daten',
        faqs: [
          { q: 'Was ist ein Wissens-Cutoff-Datum bei KI?', a: 'Ein Wissens-Cutoff-Datum ist das Datum, nach dem ein KI-Modell keine Trainingsdaten mehr hat. Ereignisse, Produktveröffentlichungen oder Informationen nach diesem Datum sind für das Modell unsichtbar, es sei denn, es kann im Live-Web suchen oder erhält die Information im Prompt.' },
          { q: 'Was ist der Unterschied zwischen Wissens-Cutoff und Live-Suche?', a: 'Ein Wissens-Cutoff ist eine Eigenschaft der Trainingsdaten des Modells — ein fixes, eingefrorenes Datum. Live-Suche ist eine zusätzliche Fähigkeit, die aktuelle Webseiten zur Abfragezeit abruft. Lokale LLMs haben standardmäßig keine Live-Suche.' },
          { q: 'Aktualisieren lokale LLMs jemals ihr Wissen?', a: 'Nein. Das Wissen eines lokalen LLM ist bei seinem Trainings-Cutoff eingefroren und bleibt dauerhaft eingefroren. Um Zugriff auf neuere Informationen zu geben, muss man entweder das Modell neu trainieren oder eine RAG-Pipeline aufbauen.' },
          { q: 'Welche KI-Modelle können aktuelle Nachrichten sehen?', a: 'ChatGPT, Gemini und Grok haben standardmäßig Zugriff auf aktuelle Informationen über eingebaute Websuche. Claude kann nur suchen, wenn Entwickler das Websuche-Tool explizit aktivieren. Lokale LLMs (Llama, Qwen, Gemma, Phi) haben keinen Standard-Suchzugriff.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-fr.png',
    title: 'Dates de Coupure des Modèles IA 2026 : Référence Complète',
    seoTitle: 'Dates de Coupure IA 2026 | PromptQuorum',
    metaDescription: 'Dates de coupure vérifiées pour Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma et Phi. Quels modèles utilisent la recherche live — et lesquels sont figés dans le temps.',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
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
    },
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
      faq: {
        id: 'faq',
        title: 'Questions fréquentes sur les dates de coupure des modèles IA',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'une date de coupure des connaissances en IA ?',
            a: 'Une date de coupure des connaissances est la date après laquelle un modèle d\'IA n\'a plus aucune donnée d\'entraînement. Les événements, lancements de produits, publications de recherche ou toute information publiée après la coupure sont invisibles pour le modèle. Le modèle ne peut pas connaître ces éléments, sauf s\'il peut effectuer une recherche web en direct ou si l\'information lui est fournie dans le prompt.',
          },
          {
            q: 'Quelle est la différence entre une date de coupure et la recherche en direct ?',
            a: 'Une date de coupure est une propriété des données d\'entraînement du modèle — une date fixe et figée. La recherche en direct est une capacité ajoutée par-dessus le modèle qui lui permet de récupérer des pages web actuelles au moment de la requête. ChatGPT (Bing), Gemini (Google) et Grok (X) disposent de la recherche en direct par défaut. Claude nécessite une activation explicite de l\'outil. Les LLM locaux n\'ont pas de recherche en direct par défaut — il faut construire un pipeline RAG pour l\'ajouter.',
          },
          {
            q: 'Les LLM locaux mettent-ils un jour à jour leurs connaissances ?',
            a: 'Non. Les connaissances d\'un LLM local sont figées à sa date de coupure d\'entraînement et le restent indéfiniment. Pour donner à un LLM local accès à des informations plus récentes, il faut soit : (1) réentraîner ou affiner le modèle sur des données plus récentes (coûteux), soit (2) construire un pipeline RAG (génération augmentée par récupération) qui récupère les documents pertinents au moment de la requête et les injecte dans le prompt.',
          },
          {
            q: 'Quels modèles d\'IA peuvent voir les actualités et événements actuels ?',
            a: 'ChatGPT (utilise Bing par défaut dans les offres payantes), Gemini 3.1 Pro (utilise Google par défaut) et Grok 4.3 (recherche X/Twitter par défaut) peuvent accéder aux informations actuelles. Perplexity est nativement connecté au web et récupère des résultats en direct pour chaque requête. Claude ne peut rechercher sur le web que si les développeurs activent explicitement l\'outil de recherche web. DeepSeek, Mistral Large et tous les LLM locaux (Llama, Qwen, Gemma, Phi) n\'ont pas d\'accès à la recherche par défaut.',
          },
          {
            q: 'La date de coupure de ChatGPT correspond-elle à ce qu\'il sait actuellement ?',
            a: 'Non. ChatGPT (le produit) dispose à la fois d\'une date de coupure d\'entraînement et d\'une capacité de recherche Bing en direct. Pour les requêtes factuelles récentes, il recherche sur Bing et complète sa réponse avec des résultats actuels — ce qu\'il « sait » au moment de la requête peut donc être bien plus récent que la coupure d\'entraînement. La coupure d\'entraînement reste importante pour : la compréhension nuancée des événements (pas seulement des faits), les connaissances contextuelles intégrées à son raisonnement, et toute information non indexée par Bing.',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: 'Guides associés',
        items: [
          '[Meilleur LLM en ce moment](/fr/prompt-bites/best-llm-right-now) — comparer les meilleurs modèles actuels par fraîcheur de coupure',
          "[Peut-on exécuter Qwen3 sur Ollama ?](/fr/prompt-bites/can-you-run-qwen3-on-ollama) — déploiement local de Qwen3 et contexte de coupure",
          '[Ollama dernière version](/fr/prompt-bites/ollama-latest-version) — suivre quelles versions de modèles sont disponibles localement',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) — chaque version majeure open-weight et son impact sur la coupure',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-ja.png',
    title: 'AIモデルの知識カットオフ日2026：完全チートシート',
    seoTitle: 'AIモデル知識カットオフ日2026 | PromptQuorum',
    metaDescription: 'Claude、ChatGPT、Gemini、Grok、Llama、Qwen、Gemma、Phiの検証済み知識カットオフ日。どのモデルがライブ検索を使用し、どのモデルが凍結されているかを解説。',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
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
    },
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
      faq: {
        id: 'faq',
        title: 'AIの知識カットオフ日に関するよくある質問',
        faqs: [
          {
            q: 'AIにおける知識カットオフ日とは何ですか？',
            a: '知識カットオフ日とは、その日以降のトレーニングデータをAIモデルが持たなくなる日付のことです。カットオフ後に発表された出来事、製品発売、研究論文、その他の情報はモデルには見えません。モデルがライブでウェブ検索できるか、プロンプトにその情報が与えられない限り、これらの存在を知ることはできません。',
          },
          {
            q: '知識カットオフとライブ検索の違いは何ですか？',
            a: '知識カットオフはモデルのトレーニングデータの特性であり、固定された凍結日です。ライブ検索はモデルに追加された機能で、クエリ時点の現在のウェブページを取得できます。ChatGPT（Bing）、Gemini（Google）、Grok（X）はデフォルトでライブ検索を備えています。Claudeは明示的なツールの有効化が必要です。ローカルLLMはデフォルトでライブ検索を持たず、追加するにはRAGパイプラインを構築する必要があります。',
          },
          {
            q: 'ローカルLLMは知識を更新することがありますか？',
            a: 'いいえ。ローカルLLMの知識はトレーニングのカットオフ時点で凍結され、それ以降は永久に更新されません。ローカルLLMに新しい情報へのアクセスを与えるには、（1）新しいデータでモデルをファインチューニングまたは再トレーニングする（コストがかかる）、または（2）クエリ時点で関連文書を取得しプロンプトに注入するRAG（検索拡張生成）パイプラインを構築する、のいずれかが必要です。',
          },
          {
            q: '今日のニュースや最新の出来事を確認できるAIモデルはどれですか？',
            a: 'ChatGPT（有料プランではデフォルトでBingを使用）、Gemini 3.1 Pro（デフォルトでGoogleを使用）、Grok 4.3（デフォルトでX/Twitterを検索）は最新情報にアクセスできます。Perplexityはウェブ検索ネイティブで、すべてのクエリに対してライブ結果を取得します。Claudeは開発者がウェブ検索ツールを明示的に有効化した場合のみウェブ検索が可能です。DeepSeek、Mistral Large、およびすべてのローカルLLM（Llama、Qwen、Gemma、Phi）はデフォルトの検索アクセスを持ちません。',
          },
          {
            q: 'ChatGPTのカットオフ日は、現在知っていることと同じですか？',
            a: 'いいえ。ChatGPT（製品）はトレーニングのカットオフ日とライブBing検索機能の両方を備えています。最近の事実に関するクエリでは、Bingを検索して最新の結果で回答を補完するため、クエリ時点で「知っている」内容はトレーニングカットオフよりもはるかに新しいことがあります。ただし、トレーニングカットオフは、単なる事実だけでなく出来事の微妙な理解、推論に織り込まれた文脈的知識、Bingにインデックスされていない情報については依然として重要です。',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: '関連ガイド',
        items: [
          '[今すぐ最良のLLM](/ja/prompt-bites/best-llm-right-now) — カットオフの新しさで現在のトップモデルを比較',
          '[Qwen3はOllamaで動かせる？](/ja/prompt-bites/can-you-run-qwen3-on-ollama) — Qwen3のローカル展開と知識カットオフのコンテキスト',
          '[Ollamaの最新バージョン](/ja/prompt-bites/ollama-latest-version) — ローカルで利用できるモデルバージョンを追跡',
          '[ローカルLLMモデル更新2026](/ja/local-llms/local-llm-model-updates-2026) — すべての主要なオープンウェイトリリースとカットオフへの影響',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-zh.png',
    title: 'AI模型知识截止日期2026：完整参考表',
    seoTitle: 'AI模型知识截止日期2026 | PromptQuorum',
    metaDescription: 'Claude、ChatGPT、Gemini、Grok、Llama、Qwen、Gemma和Phi的已验证知识截止日期。哪些模型使用实时搜索，哪些模型知识被冻结。',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
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
    },
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
      faq: {
        id: 'faq',
        title: '关于AI知识截止日期的常见问题',
        faqs: [
          {
            q: 'AI中的知识截止日期是什么？',
            a: '知识截止日期是指AI模型不再拥有训练数据的日期。截止日期之后发布的事件、产品发布、研究论文或任何信息对模型来说都是不可见的。除非模型可以进行实时网络搜索，或在提示中提供相关信息，否则模型无法知晓这些内容。',
          },
          {
            q: '知识截止日期与实时搜索有什么区别？',
            a: '知识截止日期是模型训练数据的一个属性——一个固定的冻结日期。实时搜索是叠加在模型之上的一项能力，使其能够在查询时检索当前的网页。ChatGPT（Bing）、Gemini（Google）和Grok（X）默认具备实时搜索功能。Claude需要显式启用工具。本地LLM默认没有实时搜索——需要构建RAG管道才能添加此功能。',
          },
          {
            q: '本地LLM会更新其知识吗？',
            a: '不会。本地LLM的知识在其训练截止日期被冻结，并无限期保持冻结状态。要让本地LLM获取更新的信息，必须：（1）用更新的数据对模型进行微调或重新训练（成本较高），或（2）构建一个RAG（检索增强生成）管道，在查询时获取相关文档并将其注入提示中。',
          },
          {
            q: '哪些AI模型可以查看今天的新闻和最新事件？',
            a: 'ChatGPT（在付费套餐中默认使用Bing）、Gemini 3.1 Pro（默认使用Google）和Grok 4.3（默认搜索X/Twitter）可以访问最新信息。Perplexity原生支持网络搜索，每次查询都会检索实时结果。Claude只有在开发者明确启用网络搜索工具时才能进行网络搜索。DeepSeek、Mistral Large以及所有本地LLM（Llama、Qwen、Gemma、Phi）默认没有搜索访问权限。',
          },
          {
            q: 'ChatGPT的截止日期与它当前所知道的内容相同吗？',
            a: '不同。ChatGPT（产品）同时具有训练截止日期和实时Bing搜索功能。对于近期的事实性查询，它会搜索Bing并用最新结果补充其回答——因此它在查询时"知道"的内容可能比训练截止日期新得多。但训练截止日期对以下方面仍然很重要：对事件（而不仅仅是事实）的细致理解、融入其推理的上下文知识，以及任何未被Bing索引的信息。',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: '相关指南',
        items: [
          '[目前最佳LLM](/zh/prompt-bites/best-llm-right-now) — 按知识截止日期的新鲜度比较当前顶级模型',
          '[Qwen3可以在Ollama上运行吗？](/zh/prompt-bites/can-you-run-qwen3-on-ollama) — Qwen3本地部署及其知识截止日期背景',
          '[Ollama最新版本](/zh/prompt-bites/ollama-latest-version) — 追踪本地可用的模型版本',
          '[本地LLM模型更新2026](/zh/local-llms/local-llm-model-updates-2026) — 所有主要开放权重发布及其对截止日期格局的影响',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-ko.png',
    title: 'AI 모델 지식 컷오프 날짜 2026: 완전한 치트 시트',
    seoTitle: 'AI 모델 지식 컷오프 날짜 2026 | PromptQuorum',
    metaDescription: 'Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma, Phi의 검증된 지식 컷오프 날짜. 어떤 모델이 실시간 웹 검색을 사용하고 어떤 모델이 과거 시점에 고정되어 있는지 확인하세요.',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
      ko: {
        question: '2026년 현재 AI 모델의 지식 컷오프 날짜는 무엇인가요?',
        answer: '검증된 컷오프: GPT-5.5는 2025년 8월(ChatGPT는 기본적으로 Bing 검색 사용; GPT-4o 레거시는 2023년 10월), Claude Opus 4.8은 2026년 1월(신뢰할 수 있는 컷오프), Grok 4.3은 2024년 11월(X 검색), Gemini 3.1 Pro는 2025년 1월(네이티브 Google Search). 로컬 LLM(Llama, Qwen, Gemma, Phi)은 검색 레이어가 없으므로 컷오프가 절대적인 한계입니다.',
        bullets: [
          'GPT-5.5 (ChatGPT): 컷오프 2025년 8월 — Bing 검색으로 부분 보완',
          'Claude (Opus 4.8): 컷오프 2026년 1월(신뢰 가능) — 웹 검색은 명시적 도구 활성화 필요',
          'Grok 4.3: 컷오프 2024년 11월 — 기본적으로 X 검색',
          '로컬 LLM: 검색 레이어 없음 — 컷오프는 고정된 절대적 한계',
        ],
        updatedDate: CUTOFF_DATA_LAST_VERIFIED,
      },
    },
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
      faq: {
        id: 'faq',
        title: 'AI 지식 컷오프 날짜에 대한 자주 묻는 질문',
        faqs: [
          {
            q: 'AI의 지식 컷오프 날짜란 무엇인가요?',
            a: '지식 컷오프 날짜는 AI 모델이 더 이상 학습 데이터를 갖지 않는 기준일입니다. 컷오프 이후에 발생한 사건, 제품 출시, 연구 논문 또는 기타 정보는 모델에게 보이지 않습니다. 모델이 실시간으로 웹을 검색하거나 프롬프트에 해당 정보가 제공되지 않는 한, 모델은 이러한 사실의 존재를 알 수 없습니다.',
          },
          {
            q: '지식 컷오프와 실시간 검색의 차이는 무엇인가요?',
            a: '지식 컷오프는 모델의 학습 데이터가 갖는 고정된 속성으로, 변하지 않는 기준일입니다. 실시간 검색은 모델 위에 추가된 기능으로, 질의 시점에 현재의 웹 페이지를 가져올 수 있게 해줍니다. ChatGPT(Bing), Gemini(Google), Grok(X)은 기본적으로 실시간 검색을 제공합니다. Claude는 명시적인 도구 활성화가 필요합니다. 로컬 LLM은 기본적으로 실시간 검색이 없으며, 이를 추가하려면 RAG 파이프라인을 구축해야 합니다.',
          },
          {
            q: '로컬 LLM은 지식을 업데이트하나요?',
            a: '아니요. 로컬 LLM의 지식은 학습 컷오프 시점에 고정되며 무기한 그대로 유지됩니다. 로컬 LLM에 더 최신 정보를 제공하려면 (1) 모델을 더 새로운 데이터로 파인튜닝하거나 재학습하거나(비용이 많이 듦), (2) 질의 시점에 관련 문서를 가져와 프롬프트에 주입하는 RAG(검색 증강 생성) 파이프라인을 구축해야 합니다.',
          },
          {
            q: '오늘의 뉴스와 최신 사건을 확인할 수 있는 AI 모델은 무엇인가요?',
            a: 'ChatGPT(유료 요금제에서 기본적으로 Bing 사용), Gemini 3.1 Pro(기본적으로 Google 사용), Grok 4.3(기본적으로 X/Twitter 검색)은 최신 정보에 접근할 수 있습니다. Perplexity는 웹 검색 네이티브로, 모든 질의에 대해 실시간 결과를 가져옵니다. Claude는 개발자가 웹 검색 도구를 명시적으로 활성화한 경우에만 웹을 검색할 수 있습니다. DeepSeek, Mistral Large 및 모든 로컬 LLM(Llama, Qwen, Gemma, Phi)은 기본적으로 검색 접근 권한이 없습니다.',
          },
          {
            q: 'ChatGPT의 컷오프 날짜가 현재 알고 있는 것과 같은가요?',
            a: '아니요. ChatGPT(제품)는 학습 컷오프 날짜와 실시간 Bing 검색 기능을 모두 갖고 있습니다. 최근 사실에 관한 질의에서는 Bing을 검색하여 최신 결과로 답변을 보완하므로, 질의 시점에 "알고 있는" 내용은 학습 컷오프보다 훨씬 최신일 수 있습니다. 그러나 학습 컷오프는 단순한 사실이 아닌 사건에 대한 미묘한 이해, 추론에 녹아든 맥락적 지식, Bing에 색인되지 않은 정보에 대해서는 여전히 중요합니다.',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: '관련 가이드',
        items: [
          '[지금 최고의 LLM](/ko/prompt-bites/best-llm-right-now) — 지식 마감일 기준으로 현재 최고 모델 비교',
          '[Qwen3을 Ollama에서 실행할 수 있나요?](/ko/prompt-bites/can-you-run-qwen3-on-ollama) — Qwen3 로컬 배포 및 지식 마감일 맥락',
          '[Ollama 최신 버전](/ko/prompt-bites/ollama-latest-version) — 로컬에서 사용 가능한 모델 버전 추적',
          '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) — 모든 주요 오픈 웨이트 출시와 마감일 변화',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-pt.png',
    title: 'Datas de corte de conhecimento dos modelos de IA 2026: guia de referência completo',
    seoTitle: 'Datas de corte de conhecimento de IA 2026 | PromptQuorum',
    metaDescription: 'Datas de corte verificadas para Claude, ChatGPT, Gemini, Grok, Llama, Qwen, Gemma e Phi. Descubra quais modelos usam busca web ao vivo e quais estão congelados em um ponto no tempo.',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
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
    },
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
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes sobre datas de corte de conhecimento de IA',
        faqs: [
          {
            q: 'O que é uma data de corte de conhecimento em IA?',
            a: 'Uma data de corte de conhecimento é a data após a qual um modelo de IA não possui dados de treinamento. Eventos, lançamentos de produtos, artigos de pesquisa ou qualquer informação publicada após o corte são invisíveis para o modelo. O modelo não pode saber que essas coisas existem, a menos que consiga pesquisar na web ao vivo ou receba a informação no prompt.',
          },
          {
            q: 'Qual é a diferença entre uma data de corte de conhecimento e busca ao vivo?',
            a: 'Uma data de corte de conhecimento é uma propriedade dos dados de treinamento do modelo — uma data fixa e congelada. A busca ao vivo é uma capacidade adicionada sobre o modelo que permite recuperar páginas web atuais no momento da consulta. ChatGPT (Bing), Gemini (Google) e Grok (X) têm busca ao vivo por padrão. Claude requer ativação explícita da ferramenta. LLMs locais não têm busca ao vivo por padrão — é preciso construir um pipeline RAG para adicioná-la.',
          },
          {
            q: 'Os LLMs locais alguma vez atualizam seu conhecimento?',
            a: 'Não. O conhecimento de um LLM local fica congelado em seu corte de treinamento e permanece assim indefinidamente. Para dar a um LLM local acesso a informações mais recentes, é preciso: (1) fazer fine-tuning ou retreinar o modelo com dados mais recentes (caro), ou (2) construir um pipeline RAG (geração aumentada por recuperação) que busca documentos relevantes no momento da consulta e os injeta no prompt.',
          },
          {
            q: 'Quais modelos de IA conseguem ver notícias e eventos atuais?',
            a: 'ChatGPT (usa o Bing por padrão nos planos pagos), Gemini 3.1 Pro (usa o Google por padrão) e Grok 4.3 (busca no X/Twitter por padrão) podem acessar informações atuais. O Perplexity é nativo de busca web e recupera resultados ao vivo para cada consulta. O Claude só consegue buscar na web quando os desenvolvedores ativam explicitamente a ferramenta de busca web. DeepSeek, Mistral Large e todos os LLMs locais (Llama, Qwen, Gemma, Phi) não têm acesso de busca por padrão.',
          },
          {
            q: 'A data de corte do ChatGPT é a mesma coisa que ele sabe agora?',
            a: 'Não. O ChatGPT (o produto) tem tanto uma data de corte de treinamento quanto uma capacidade de busca ao vivo no Bing. Para consultas factuais recentes, ele busca no Bing e complementa sua resposta com resultados atuais — então o que ele "sabe" no momento da consulta pode ser muito mais recente do que o corte de treinamento. O corte de treinamento ainda importa para: a compreensão sutil de eventos (não apenas fatos), o conhecimento contextual entrelaçado em seu raciocínio, e qualquer informação não indexada pelo Bing.',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: 'Guias relacionados',
        items: [
          '[Melhor LLM agora](/pt/prompt-bites/best-llm-right-now) — comparar os melhores modelos atuais pela data de corte',
          '[O Qwen3 roda no Ollama?](/pt/prompt-bites/can-you-run-qwen3-on-ollama) — implantação local do Qwen3 e contexto de corte de conhecimento',
          '[Última versão do Ollama](/pt/prompt-bites/ollama-latest-version) — acompanhar quais versões de modelos estão disponíveis localmente',
          '[Atualizações de modelos LLM locais 2026](/pt/local-llms/local-llm-model-updates-2026) — todos os principais lançamentos open-weight e como afetam o panorama dos cortes',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-07-12',
    theme: 'Knowledge & Research',
    heroImage: '/images/ai-model-knowledge-cutoff-dates-overview-hero-ar.png',
    title: 'تواريخ انقطاع معرفة نماذج الذكاء الاصطناعي ⁨2026⁩: دليل مرجعي شامل',
    seoTitle: 'تواريخ انقطاع معرفة نماذج الذكاء الاصطناعي ⁨2026⁩',
    metaDescription: 'تواريخ انقطاع موثّقة لـ ⁨Claude⁩ و⁨ChatGPT⁩ و⁨Gemini⁩ و⁨Llama⁩ و⁨Qwen⁩. اكتشف أي النماذج تستخدم البحث المباشر وأيها مجمّدة عند نقطة زمنية محددة.',
    publishDate: '2026-06-12',
    dateModified: '2026-06-21',
    quickAnswerTop: {
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
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة حول تواريخ انقطاع معرفة الذكاء الاصطناعي',
        faqs: [
          {
            q: 'ما هو تاريخ انقطاع المعرفة في الذكاء الاصطناعي؟',
            a: 'تاريخ انقطاع المعرفة هو التاريخ الذي لا يملك النموذج بعده أي بيانات تدريب. الأحداث وإطلاقات المنتجات وأوراق البحث أو أي معلومات نُشرت بعد الانقطاع تكون غير مرئية للنموذج. لا يمكن للنموذج معرفة وجود هذه الأشياء إلا إذا استطاع البحث في الويب مباشرة أو حصل على المعلومة داخل الطلب (prompt).',
          },
          {
            q: 'ما الفرق بين تاريخ انقطاع المعرفة والبحث المباشر؟',
            a: 'تاريخ انقطاع المعرفة خاصية من خصائص بيانات تدريب النموذج — تاريخ ثابت ومجمّد. أما البحث المباشر فهو قدرة تُضاف فوق النموذج تتيح له استرجاع صفحات ويب حالية وقت الاستعلام. يتوفر البحث المباشر افتراضيًا في ChatGPT (عبر Bing) وGemini (عبر Google) وGrok (عبر X). أما Claude فيتطلب تفعيلًا صريحًا للأداة. نماذج LLM المحلية لا تملك بحثًا مباشرًا افتراضيًا — يجب بناء خط أنابيب RAG لإضافته.',
          },
          {
            q: 'هل تُحدّث نماذج LLM المحلية معرفتها في أي وقت؟',
            a: 'لا. تبقى معرفة نموذج LLM المحلي مجمّدة عند تاريخ انقطاع تدريبه إلى أجل غير مسمى. لمنح نموذج LLM محلي إمكانية الوصول إلى معلومات أحدث، يجب إما: (1) إعادة ضبط دقيق أو إعادة تدريب النموذج على بيانات أحدث (مكلف)، أو (2) بناء خط أنابيب RAG (التوليد المعزز بالاسترجاع) يجلب المستندات ذات الصلة وقت الاستعلام ويُدرجها في الطلب.',
          },
          {
            q: 'ما هي نماذج الذكاء الاصطناعي القادرة على رؤية الأخبار والأحداث الحالية؟',
            a: 'يمكن لـ ChatGPT (يستخدم Bing افتراضيًا في الخطط المدفوعة)، وGemini 3.1 Pro (يستخدم Google افتراضيًا)، وGrok 4.3 (يبحث في X/Twitter افتراضيًا) الوصول إلى معلومات حالية. Perplexity مبني أصلًا على البحث في الويب ويسترجع نتائج مباشرة لكل استعلام. لا يستطيع Claude البحث في الويب إلا عندما يُفعّل المطورون أداة البحث في الويب صراحةً. لا تملك DeepSeek وMistral Large وجميع نماذج LLM المحلية (Llama وQwen وGemma وPhi) إمكانية بحث افتراضية.',
          },
          {
            q: 'هل تاريخ انقطاع ChatGPT هو نفسه ما يعرفه الآن؟',
            a: 'لا. يملك ChatGPT (المنتج) تاريخ انقطاع تدريب وقدرة بحث مباشر عبر Bing في آنٍ واحد. بالنسبة للاستعلامات الواقعية الحديثة، يبحث في Bing ويُكمّل إجابته بنتائج حالية — لذا فإن ما "يعرفه" وقت الاستعلام قد يكون أحدث بكثير من تاريخ انقطاع التدريب. يبقى تاريخ انقطاع التدريب مهمًا لـ: الفهم الدقيق للأحداث (وليس الحقائق فقط)، والمعرفة السياقية المدمجة في استدلاله، وأي معلومات لم تُفهرسها Bing.',
          },
        ],
      },
      relatedBites: {
        id: 'related-articles',
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل LLM الآن](/ar/prompt-bites/best-llm-right-now) — مقارنة أفضل النماذج الحالية بحسب حداثة تاريخ الانقطاع',
          '[هل يمكن تشغيل Qwen3 على Ollama؟](/ar/prompt-bites/can-you-run-qwen3-on-ollama) — نشر Qwen3 محليًا وسياق تاريخ انقطاع المعرفة',
          '[أحدث إصدار من Ollama](/ar/prompt-bites/ollama-latest-version) — تتبع إصدارات النماذج المتاحة محليًا',
          '[تحديثات نماذج LLM المحلية 2026](/ar/local-llms/local-llm-model-updates-2026) — جميع الإصدارات الرئيسية مفتوحة الأوزان وتأثيرها على مشهد الانقطاع',
        ],
      },
    },
  },
}
