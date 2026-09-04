// Aori AI Review: Local-First Personal Agent for Desktop and Mobile
// Slug: aori-ai-personal-agent-review
// Verified facts only: https://[www.aori-ai.app](https://www.aori-ai.app/)/ — hybrid local/cloud personal agent, public beta

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-en.webp',
    title: 'Aori AI Review (2026): Local-First Personal Agent for Desktop and Mobile',
    seoTitle: 'Aori AI Review 2026: Local-First Personal Agent',
    intro:
      'Aori is a personal AI agent app that runs on your desktop and phone, with persistent memory, switchable personas, and scheduled routines. It stores your API keys and conversations locally rather than on an Aori-run server, but it is not a fully offline app by default — most of its intelligence comes from whichever cloud LLM provider you connect. This review covers what Aori actually does, which platforms support fully local inference via Ollama, and where the local-first claim ends and the cloud dependency begins.',
    metaDescription:
      'Aori AI review: a local-first personal agent with memory, personas, and routines for desktop and Android. See when it runs fully offline via Ollama and when it depends on cloud providers.',
    twitterDescription:
      'Aori AI review 2026: personal agent app for desktop and Android with memory, personas, and routines. Local via Ollama on desktop only — honest breakdown of the hybrid model.',
    audience:
      'Users deciding whether to run a personal AI agent through Aori using their own cloud API key, or fully locally via Ollama on desktop — covers platform support, feature set, and the local-vs-cloud trade-off.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visit Aori official site →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**Aori is worth using if you want one personal AI agent — with memory, personas, and scheduled routines — across desktop and Android, and you are willing to bring your own LLM API key.** It only becomes a fully local, offline tool when you choose [Ollama](https://ollama.com) as the model backend on desktop; the Android app and any cloud-provider backend still send your prompts to that provider over the internet, even though Aori itself stores no copy of your data on its own servers.',
    quickAnswerTop: {
      en: {
        question: 'Is Aori AI a fully local, offline AI app?',
        answer:
          'No — Aori is hybrid. It runs on your device and never sends data to an Aori-run backend, but by default it routes prompts through a cloud provider (OpenAI, Anthropic, Google Gemini, Groq, DeepSeek, or OpenRouter) using your own API key. Fully local, offline inference only happens when you select Ollama as the backend, and that option exists on desktop only.',
        bullets: [
          'Desktop (Windows/macOS/Linux) supports Ollama for fully local models; Android does not.',
          'API keys are stored locally on your device and go straight to the provider — never through an Aori backend.',
          'Features: persistent memory, slash-command personas, Telegram/WhatsApp channels, Obsidian/Notion integration, scheduled routines.',
          'Platforms live now: Windows, macOS, Linux, Android. iOS is not yet available.',
          'Pricing is not published — Aori itself is free in beta; you pay whichever LLM provider you connect (Groq has a free tier).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Aori Is', anchor: 'what-is-aori' },
      { label: 'Features', anchor: 'features' },
      { label: 'Platforms and Pricing', anchor: 'platforms-pricing' },
      { label: 'Local vs. Cloud: What "Local-First" Actually Means', anchor: 'local-vs-cloud' },
      { label: 'Who Should Use Aori', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Aori', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori is a local-first desktop and mobile personal AI agent that keeps API keys and chat history on your device, but only runs fully offline when you choose Ollama as the model backend on desktop.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori is an app for your computer or Android phone that acts like a personal assistant with memory. You connect your own account and key from a provider like OpenAI or Anthropic to power it, or — on desktop only — you can run it with free local models through Ollama so nothing goes to the internet.',
          },
        ],
        items: [
          'Aori is a local-first desktop and mobile personal AI agent app, currently in public beta at [aori-ai.app](https://www.aori-ai.app/).',
          'No Aori backend stores your data — API keys and conversations are stored locally on your device and sent directly to the LLM provider you choose.',
          'Supported cloud providers: OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, and OpenRouter. On desktop only, Aori also supports [Ollama](https://ollama.com) for fully local models.',
          'Core features: persistent memory, personas switchable via slash commands (e.g. `/leo`, `/planner`), multi-channel chat (in-app, Telegram, WhatsApp) with isolated history per channel, knowledge integration (local folders, Obsidian, Notion), and proactive routines scheduled in plain English.',
          'Platforms: desktop on Windows, macOS, and Linux; mobile on Android now, with iOS coming later.',
          'Pricing is not published. Aori is free to use in its current beta; the real cost is whatever the LLM provider you connect charges (Groq has a free tier).',
          'Fully offline operation is limited to desktop with Ollama selected — every other configuration, including the Android app, depends on an internet connection to a cloud provider.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'What Aori Is',
        content: [
          '**Aori is a personal AI agent app that runs on your desktop or phone instead of through a hosted chat website.** It is available at [aori-ai.app](https://www.aori-ai.app/) and is currently in public beta on Windows, macOS, Linux, and Android.',
          'The core design choice is local-first: the app itself runs on your device, and Aori does not operate a backend server that stores your conversations. You connect your own API key from a supported LLM provider — OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, or OpenRouter — and Aori stores that key locally, sending requests directly from your device to the provider you chose.',
          'On desktop, Aori adds a second path: [Ollama](https://ollama.com) support, which lets you run open-source models entirely on your own hardware with no cloud provider involved at all. This path is desktop-only — the Android app has no local-model option and always depends on a cloud provider.',
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Aori\'s feature set centers on making one agent feel consistent across time, topics, and channels — not on giving you a bigger model to talk to.** The five features below are the ones that differentiate it from a plain chat interface in front of an LLM API.',
        ],
        items: [
          '**Persistent memory** — Aori learns from your conversations and any knowledge files you provide, carrying that context into future sessions instead of starting from zero each time you open it.',
          '**Personas via slash commands** — switch between assistant personas mid-conversation with commands like `/leo` or `/planner`, each tuned for a different role or task.',
          '**Multi-channel chat** — talk to Aori inside the app, or through Telegram or WhatsApp, with each channel keeping its own isolated conversation history.',
          '**Knowledge integration** — point Aori at local folders, an Obsidian vault, or a Notion workspace so it can reference your existing notes and documents when answering.',
          '**Proactive routines** — describe a recurring task in plain English, such as a morning briefing, and Aori runs it on that schedule without you having to prompt it each time.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Platforms and Pricing',
        columns: ['Platform / Plan', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform / Plan': 'Windows, macOS, Linux (desktop)',
            'What to expect': 'Full feature set. Supports cloud providers (OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter) and, uniquely, [Ollama](https://ollama.com) for fully local models.',
            'Important note': 'This is the only environment where Aori can run with zero cloud dependency, provided you select Ollama and a model your hardware can run.',
          },
          {
            'Platform / Plan': 'Android',
            'What to expect': 'Same persona, memory, channel, and routine features as desktop, connected to a cloud LLM provider using your own API key.',
            'Important note': 'No Ollama or local-model support on Android — every chat depends on an internet connection to your chosen provider.',
          },
          {
            'Platform / Plan': 'iOS',
            'What to expect': 'Not available yet.',
            'Important note': 'Aori has stated iOS is "coming later" with no published release date at the time of writing.',
          },
          {
            'Platform / Plan': 'Pricing',
            'What to expect': 'Not published. The app is usable in its current public beta without a subscription fee to Aori itself.',
            'Important note': 'Your real cost is set by the LLM provider whose API key you use — Groq offers a free tier; OpenAI, Anthropic, Gemini, DeepSeek, and OpenRouter bill per your own account with that provider.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. Cloud: What "Local-First" Actually Means',
        content: [
          '**"Local-first" describes where Aori stores your data, not where your prompts are processed.** In every configuration, your API keys and conversation history live on your device rather than on an Aori-run server. But whether the model itself runs on your device depends entirely on which backend you pick.',
          'This distinction matters because the two claims — "your data stays on your device" and "your AI runs on your device" — are not the same thing, and Aori only delivers both at once in one specific configuration.',
        ],
        decisionBlock: {
          title: 'How to Read Aori\'s Local vs. Cloud Setup',
          localIf: [
            'You are on desktop (Windows, macOS, or Linux)',
            'You select Ollama as the model backend',
            'The model you choose is one your hardware can run at acceptable speed',
          ],
          cloudIf: [
            'You are on Android, where Ollama is not supported at all',
            'You select OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, or OpenRouter as the backend',
            'You want access to the largest, most capable frontier models',
          ],
          quick: [
            'Desktop + Ollama = prompts and inference stay entirely on your machine',
            'Any other combination (desktop or Android + a cloud provider) = prompts leave your device and go to that provider\'s API',
            'Aori itself never runs a backend that stores your data either way — the local-vs-cloud line is about the model backend, not about Aori\'s own servers',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Aori',
        items: [
          '**Users who want one agent across desktop and Android.** Persistent memory, personas, and routines follow you between platforms as long as you use the same provider account.',
          '**Users comfortable bringing their own API key and paying providers directly.** Aori is the interface; you manage billing with OpenAI, Anthropic, Google, Groq, DeepSeek, or OpenRouter separately.',
          '**Users who want scheduled routines in plain English**, such as a recurring morning briefing, without setting up separate automation software.',
          '**Desktop users who want the option of fully local, offline inference** via [Ollama](https://ollama.com), without giving up the option to switch to a cloud provider for harder tasks.',
          '**Telegram or WhatsApp users** who want the same agent and memory available in those apps, each with its own isolated conversation history.',
          '**Users with an Obsidian vault or Notion workspace** they want an agent to reference directly, instead of copy-pasting notes into a chat window.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Aori',
        items: [
          '**iPhone or iPad users.** Aori has no iOS app yet; the company describes iOS support as "coming later" with no published date.',
          '**Users who want a fully offline app with no cloud option at all.** Aori\'s local path exists only on desktop with Ollama selected — most of its useful features assume a connected cloud provider, so treat it as a hybrid tool, not a privacy-by-default offline app.',
          '**Users who do not want to manage separate provider billing.** Aori has no bundled subscription that covers model usage; you open and fund your own account with whichever provider you pick.',
          '**Users who need a published, predictable price before committing.** Aori has not published pricing for the app itself, and provider costs vary by which model and provider you choose.',
          '**Android users who specifically want local, offline models.** Ollama support is desktop-only; Android always depends on a cloud provider.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Aori a fully offline, local AI app?',
            a: 'No, not by default. Aori is hybrid: it stores your API keys and conversations locally rather than on an Aori-run server, but the model that generates responses runs in the cloud unless you specifically select Ollama as the backend on desktop. Only that one configuration — desktop plus Ollama — is fully local and offline.',
          },
          {
            q: 'What platforms does Aori support?',
            a: 'Desktop apps for Windows, macOS, and Linux, plus a mobile app for Android. An iOS app is not yet available; Aori has described it as "coming later" without a published release date.',
          },
          {
            q: 'Does Aori store my data on its own servers?',
            a: 'No. Aori does not operate a backend that stores your conversations. Your API keys are stored locally on your device, and requests go directly from your device to whichever LLM provider you connect — not through an Aori-run server.',
          },
          {
            q: 'Which LLM providers does Aori support?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, and OpenRouter, all connected using your own API key ("bring your own key"). On desktop, Aori also supports Ollama for models that run entirely on your own hardware.',
          },
          {
            q: 'How much does Aori cost?',
            a: 'Aori has not published pricing; the app is usable in its current public beta without a fee to Aori itself. Your actual cost comes from the LLM provider you connect — Groq offers a free tier, while OpenAI, Anthropic, Gemini, DeepSeek, and OpenRouter bill you directly through your own account with that provider.',
          },
          {
            q: 'Can I run Aori fully offline on Android?',
            a: 'No. Ollama and local-model support in Aori is desktop-only. On Android, every conversation depends on an internet connection to whichever cloud LLM provider you have configured.',
          },
          {
            q: 'What are Aori\'s personas?',
            a: 'Personas are different assistant configurations you can switch between mid-conversation using slash commands, such as `/leo` or `/planner`. Each persona is tuned for a different role or task while sharing the same underlying memory.',
          },
          {
            q: 'Can Aori connect to Telegram and WhatsApp?',
            a: 'Yes. Aori supports multi-channel chat across the in-app interface, Telegram, and WhatsApp, with each channel keeping its own isolated conversation history rather than sharing one thread across all three.',
          },
          {
            q: 'Does Aori integrate with Obsidian or Notion?',
            a: 'Yes. Aori can reference local folders, an Obsidian vault, or a Notion workspace as knowledge sources, so it can answer using your existing notes and documents instead of only what you type in chat.',
          },
          {
            q: 'What are Aori\'s proactive routines?',
            a: 'Routines are recurring tasks you describe in plain English, such as a morning briefing, that Aori then runs automatically on that schedule without you needing to send a new prompt each time.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          '**Aori is a well-scoped personal-agent app if you evaluate it as hybrid, not as a privacy-by-default local AI tool.** The combination of persistent memory, slash-command personas, multi-channel chat (Telegram and WhatsApp with isolated histories), Obsidian/Notion knowledge integration, and plain-English proactive routines is a coherent feature set aimed at making one agent feel consistent across contexts. Storing API keys and conversations locally, with no Aori-run backend, is a real and verifiable privacy property regardless of which model backend you choose. But the fully local, offline claim applies to exactly one configuration: desktop with Ollama selected. Every other path — cloud providers on desktop, or any use on Android — sends your prompts to a third-party API over the internet. Users who understand and accept that trade-off, and who are comfortable bringing and paying for their own LLM API key, get a genuinely useful cross-platform agent. Users looking for a fully offline app by default, or an iOS app, should look elsewhere for now.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Aori official site](https://www.aori-ai.app/) — platform availability, feature list, and current public beta status.',
          '[Ollama](https://ollama.com) — the local-model runtime Aori uses on desktop for fully offline inference.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Hermes Agent Review: Local Autonomous AI Agent](/power-local-llm/hermes-agent-review-2026) — a comparable local-first agent app reviewed on this site.',
          '[BabyAGI Review: Autonomous Local Agent](/power-local-llm/babyagi-review-autonomous-agent) — another autonomous agent framework covered here.',
          '[Run a Local LLM with Obsidian](/power-local-llm/local-llm-with-obsidian-2026) — connecting local models to your Obsidian vault, the same integration path Aori supports.',
          '[Replace Grammarly and Notion AI with Local Models](/power-local-llm/replace-grammarly-notion-ai-with-local) — using local AI alongside a Notion workspace.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — full directory of local-AI apps and tools across platforms.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-ar.webp',
    title: 'مراجعة Aori AI (2026): وكيل ذكاء اصطناعي شخصي محلي أولاً لسطح المكتب والهاتف المحمول',
    seoTitle: 'مراجعة Aori AI 2026: وكيل شخصي محلي أولاً',
    intro:
      'Aori هو تطبيق وكيل ذكاء اصطناعي شخصي يعمل على سطح المكتب والهاتف لديك، مع ذاكرة دائمة، وشخصيات (personas) قابلة للتبديل، وروتينات مجدولة. يخزّن مفاتيح API الخاصة بك ومحادثاتك محلياً بدلاً من خادم تديره Aori، لكنه ليس تطبيقاً يعمل بدون إنترنت بشكل افتراضي — معظم ذكائه يأتي من مزود LLM السحابي الذي تربطه به. تغطي هذه المراجعة ما يفعله Aori فعلياً، وأي المنصات تدعم الاستدلال المحلي الكامل عبر Ollama، وأين ينتهي ادعاء "المحلي أولاً" وأين يبدأ الاعتماد على السحابة.',
    metaDescription:
      'مراجعة Aori AI: وكيل شخصي محلي أولاً بذاكرة وشخصيات وروتينات لسطح المكتب و Android. تعرف متى يعمل دون إنترنت عبر Ollama ومتى يعتمد على مزودي السحابة.',
    twitterDescription:
      'مراجعة Aori AI 2026: تطبيق وكيل شخصي لسطح المكتب و Android بذاكرة وشخصيات وروتينات. محلي عبر Ollama على سطح المكتب فقط — تفصيل صادق للنموذج الهجين.',
    audience:
      'المستخدمون الذين يقررون ما إذا كانوا سيشغّلون وكيل ذكاء اصطناعي شخصي عبر Aori باستخدام مفتاح API السحابي الخاص بهم، أو محلياً بالكامل عبر Ollama على سطح المكتب — يغطي دعم المنصات ومجموعة الميزات والمفاضلة بين المحلي والسحابي.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'زيارة موقع Aori الرسمي ←', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**يستحق Aori الاستخدام إذا كنت تريد وكيل ذكاء اصطناعي شخصي واحد — بذاكرة وشخصيات وروتينات مجدولة — عبر سطح المكتب و Android، وكنت مستعداً لإحضار مفتاح API الخاص بك لنموذج LLM.** لا يصبح أداة محلية بالكامل تعمل دون إنترنت إلا عندما تختار [Ollama](https://ollama.com) كخلفية النموذج على سطح المكتب؛ أما تطبيق Android وأي خلفية سحابية فلا تزال ترسل مطالباتك (prompts) إلى ذلك المزود عبر الإنترنت، حتى لو كان Aori نفسه لا يخزّن أي نسخة من بياناتك على خوادمه الخاصة.',
    quickAnswerTop: {
      ar: {
        question: 'هل Aori AI تطبيق ذكاء اصطناعي محلي بالكامل ويعمل دون إنترنت؟',
        answer:
          'لا — Aori هجين. يعمل على جهازك ولا يرسل بيانات إلى خادم تديره Aori، لكنه بشكل افتراضي يوجّه المطالبات عبر مزود سحابي (OpenAI أو Anthropic أو Google Gemini أو Groq أو DeepSeek أو OpenRouter) باستخدام مفتاح API الخاص بك. الاستدلال المحلي الكامل الذي يعمل دون إنترنت يحدث فقط عندما تختار Ollama كخلفية، وهذا الخيار متاح على سطح المكتب فقط.',
        bullets: [
          'سطح المكتب (Windows/macOS/Linux) يدعم Ollama للنماذج المحلية الكاملة؛ Android لا يدعمه.',
          'مفاتيح API تُخزَّن محلياً على جهازك وتذهب مباشرة إلى المزود — أبداً عبر خادم تديره Aori.',
          'الميزات: ذاكرة دائمة، شخصيات عبر أوامر شرطة مائلة، قنوات Telegram/WhatsApp، تكامل مع Obsidian/Notion، روتينات مجدولة.',
          'المنصات المتاحة الآن: Windows و macOS و Linux و Android. iOS غير متاح بعد.',
          'التسعير غير منشور — Aori نفسه مجاني في مرحلة البيتا؛ تدفع لمزود LLM الذي تربطه به (Groq لديه مستوى مجاني).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Aori', anchor: 'what-is-aori' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'المنصات والتسعير', anchor: 'platforms-pricing' },
      { label: 'المحلي مقابل السحابي: ماذا يعني "محلي أولاً" فعلياً', anchor: 'local-vs-cloud' },
      { label: 'من يجب أن يستخدم Aori', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Aori', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori هو وكيل ذكاء اصطناعي شخصي محلي أولاً لسطح المكتب والهاتف يحتفظ بمفاتيح API وسجل المحادثات على جهازك، لكنه يعمل دون إنترنت بالكامل فقط عند اختيار Ollama كخلفية النموذج على سطح المكتب.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori تطبيق لجهاز الكمبيوتر أو هاتف Android يعمل كمساعد شخصي له ذاكرة. تربطه بحسابك ومفتاحك الخاص من مزود مثل OpenAI أو Anthropic لتشغيله، أو — على سطح المكتب فقط — يمكنك تشغيله بنماذج محلية مجانية عبر Ollama بحيث لا يذهب شيء إلى الإنترنت.',
          },
        ],
        items: [
          'Aori هو تطبيق وكيل ذكاء اصطناعي شخصي محلي أولاً لسطح المكتب والهاتف، وهو حالياً في مرحلة البيتا العامة على [aori-ai.app](https://www.aori-ai.app/).',
          'لا يوجد خادم تديره Aori يخزّن بياناتك — مفاتيح API والمحادثات تُخزَّن محلياً على جهازك وتُرسل مباشرة إلى مزود LLM الذي تختاره.',
          'مزودو السحابة المدعومون: OpenAI و Anthropic Claude و Google Gemini و Groq و DeepSeek و OpenRouter. على سطح المكتب فقط، يدعم Aori أيضاً [Ollama](https://ollama.com) للنماذج المحلية الكاملة.',
          'الميزات الأساسية: ذاكرة دائمة، شخصيات قابلة للتبديل عبر أوامر شرطة مائلة (مثل `/leo` و `/planner`)، محادثة متعددة القنوات (داخل التطبيق، Telegram، WhatsApp) بسجل معزول لكل قناة، تكامل مع مصادر المعرفة (مجلدات محلية، Obsidian، Notion)، وروتينات استباقية مجدولة بلغة عادية.',
          'المنصات: سطح مكتب على Windows و macOS و Linux؛ هاتف محمول على Android الآن، مع وصول iOS لاحقاً.',
          'التسعير غير منشور. Aori مجاني للاستخدام في مرحلة البيتا الحالية؛ التكلفة الحقيقية هي ما يفرضه مزود LLM الذي تربطه به (Groq لديه مستوى مجاني).',
          'التشغيل دون إنترنت بالكامل يقتصر على سطح المكتب مع اختيار Ollama — أي إعداد آخر، بما في ذلك تطبيق Android، يعتمد على اتصال إنترنت بمزود سحابي.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'ما هو Aori',
        content: [
          '**Aori تطبيق وكيل ذكاء اصطناعي شخصي يعمل على سطح المكتب أو هاتفك بدلاً من موقع محادثة مستضاف.** إنه متاح على [aori-ai.app](https://www.aori-ai.app/) وهو حالياً في مرحلة البيتا العامة على Windows و macOS و Linux و Android.',
          'الخيار التصميمي الأساسي هو "محلي أولاً": التطبيق نفسه يعمل على جهازك، ولا تشغّل Aori خادماً خلفياً يخزّن محادثاتك. تربط مفتاح API الخاص بك من مزود LLM مدعوم — OpenAI أو Anthropic Claude أو Google Gemini أو Groq أو DeepSeek أو OpenRouter — وتخزّن Aori ذلك المفتاح محلياً، وترسل الطلبات مباشرة من جهازك إلى المزود الذي اخترته.',
          'على سطح المكتب، تضيف Aori مساراً ثانياً: دعم [Ollama](https://ollama.com)، الذي يتيح لك تشغيل نماذج مفتوحة المصدر بالكامل على عتادك الخاص دون أي مزود سحابي على الإطلاق. هذا المسار متاح فقط على سطح المكتب — تطبيق Android لا يملك خيار نموذج محلي ويعتمد دائماً على مزود سحابي.',
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور ميزات Aori حول جعل وكيل واحد يبدو متسقاً عبر الزمن والمواضيع والقنوات — وليس على إعطائك نموذجاً أكبر للتحدث معه.** الميزات الخمس أدناه هي ما يميّزه عن واجهة محادثة عادية أمام واجهة برمجة تطبيقات LLM.',
        ],
        items: [
          '**ذاكرة دائمة** — يتعلّم Aori من محادثاتك وأي ملفات معرفة تزوّده بها، ويحمل ذلك السياق إلى الجلسات المستقبلية بدلاً من البدء من الصفر في كل مرة تفتحه.',
          '**شخصيات عبر أوامر شرطة مائلة** — بدّل بين شخصيات المساعد أثناء المحادثة بأوامر مثل `/leo` أو `/planner`، كل واحدة مُهيّأة لدور أو مهمة مختلفة.',
          '**محادثة متعددة القنوات** — تحدث إلى Aori داخل التطبيق، أو عبر Telegram أو WhatsApp، مع احتفاظ كل قناة بسجل محادثة معزول خاص بها.',
          '**تكامل المعرفة** — وجّه Aori إلى مجلدات محلية، أو مخزن Obsidian، أو مساحة عمل Notion حتى يتمكن من الرجوع إلى ملاحظاتك ومستنداتك الحالية عند الإجابة.',
          '**روتينات استباقية** — صف مهمة متكررة بلغة عادية، مثل ملخص صباحي، ويقوم Aori بتشغيلها وفق ذلك الجدول دون الحاجة لطلبها منه في كل مرة.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'المنصات والتسعير',
        columns: ['المنصة / الخطة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة / الخطة': 'Windows و macOS و Linux (سطح المكتب)',
            'ما يمكن توقعه': 'مجموعة ميزات كاملة. يدعم مزودي السحابة (OpenAI و Anthropic و Gemini و Groq و DeepSeek و OpenRouter) و — بشكل فريد — [Ollama](https://ollama.com) للنماذج المحلية الكاملة.',
            'ملاحظة مهمة': 'هذه هي البيئة الوحيدة التي يمكن أن يعمل فيها Aori دون أي اعتماد سحابي، شريطة اختيار Ollama ونموذج يستطيع عتادك تشغيله.',
          },
          {
            'المنصة / الخطة': 'Android',
            'ما يمكن توقعه': 'نفس ميزات الشخصيات والذاكرة والقنوات والروتينات الموجودة على سطح المكتب، متصلة بمزود LLM سحابي باستخدام مفتاح API الخاص بك.',
            'ملاحظة مهمة': 'لا يوجد دعم لـ Ollama أو النماذج المحلية على Android — كل محادثة تعتمد على اتصال إنترنت بالمزود الذي اخترته.',
          },
          {
            'المنصة / الخطة': 'iOS',
            'ما يمكن توقعه': 'غير متاح بعد.',
            'ملاحظة مهمة': 'ذكرت Aori أن دعم iOS "قادم لاحقاً" دون تاريخ إصدار منشور حتى وقت كتابة هذا التقرير.',
          },
          {
            'المنصة / الخطة': 'التسعير',
            'ما يمكن توقعه': 'غير منشور. التطبيق قابل للاستخدام في مرحلة البيتا العامة الحالية دون رسوم اشتراك لـ Aori نفسه.',
            'ملاحظة مهمة': 'تكلفتك الحقيقية يحددها مزود LLM الذي تستخدم مفتاح API الخاص به — Groq يقدّم مستوى مجانياً؛ أما OpenAI و Anthropic و Gemini و DeepSeek و OpenRouter فتفرض رسوماً عبر حسابك الخاص مع ذلك المزود.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'المحلي مقابل السحابي: ماذا يعني "محلي أولاً" فعلياً',
        content: [
          '**يصف "محلي أولاً" مكان تخزين بياناتك في Aori، لا مكان معالجة مطالباتك.** في كل إعداد، تعيش مفاتيح API وسجل المحادثات على جهازك بدلاً من خادم تديره Aori. لكن ما إذا كان النموذج نفسه يعمل على جهازك يعتمد بالكامل على الخلفية التي تختارها.',
          'هذا الفرق مهم لأن الادعاءين — "بياناتك تبقى على جهازك" و"ذكاؤك الاصطناعي يعمل على جهازك" — ليسا نفس الشيء، ولا يحقق Aori كليهما معاً إلا في إعداد واحد محدد.',
        ],
        decisionBlock: {
          title: 'كيف تفهم إعداد Aori المحلي مقابل السحابي',
          localIf: [
            'أنت على سطح المكتب (Windows أو macOS أو Linux)',
            'تختار Ollama كخلفية النموذج',
            'النموذج الذي تختاره هو نموذج يمكن لعتادك تشغيله بسرعة مقبولة',
          ],
          cloudIf: [
            'أنت على Android، حيث لا يُدعم Ollama إطلاقاً',
            'تختار OpenAI أو Anthropic Claude أو Google Gemini أو Groq أو DeepSeek أو OpenRouter كخلفية',
            'تريد الوصول إلى أكبر النماذج الحدودية وأكثرها قدرة',
          ],
          quick: [
            'سطح المكتب + Ollama = تبقى المطالبات والاستدلال بالكامل على جهازك',
            'أي مزيج آخر (سطح المكتب أو Android + مزود سحابي) = تغادر المطالبات جهازك وتذهب إلى واجهة برمجة تطبيقات ذلك المزود',
            'لا تشغّل Aori نفسها خادماً خلفياً يخزّن بياناتك في أي حال — الخط الفاصل بين المحلي والسحابي يتعلق بخلفية النموذج، وليس بخوادم Aori نفسها',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Aori',
        items: [
          '**المستخدمون الذين يريدون وكيلاً واحداً عبر سطح المكتب و Android.** تتبعك الذاكرة الدائمة والشخصيات والروتينات بين المنصات طالما تستخدم نفس حساب المزود.',
          '**المستخدمون المرتاحون لإحضار مفتاح API الخاص بهم والدفع للمزودين مباشرة.** Aori هي الواجهة؛ أنت تدير الفوترة مع OpenAI أو Anthropic أو Google أو Groq أو DeepSeek أو OpenRouter بشكل منفصل.',
          '**المستخدمون الذين يريدون روتينات مجدولة بلغة عادية**، مثل ملخص صباحي متكرر، دون إعداد برنامج أتمتة منفصل.',
          '**مستخدمو سطح المكتب الذين يريدون خيار الاستدلال المحلي الكامل دون إنترنت** عبر [Ollama](https://ollama.com)، دون التخلي عن خيار التبديل إلى مزود سحابي للمهام الأصعب.',
          '**مستخدمو Telegram أو WhatsApp** الذين يريدون نفس الوكيل والذاكرة متاحة في تلك التطبيقات، كل منها بسجل محادثة معزول خاص به.',
          '**المستخدمون الذين لديهم مخزن Obsidian أو مساحة عمل Notion** يريدون من الوكيل الرجوع إليها مباشرة، بدلاً من نسخ ولصق الملاحظات في نافذة محادثة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Aori',
        items: [
          '**مستخدمو iPhone أو iPad.** لا يملك Aori تطبيق iOS بعد؛ تصف الشركة دعم iOS بأنه "قادم لاحقاً" دون تاريخ منشور.',
          '**المستخدمون الذين يريدون تطبيقاً يعمل دون إنترنت بالكامل بلا أي خيار سحابي إطلاقاً.** مسار Aori المحلي موجود فقط على سطح المكتب مع اختيار Ollama — معظم ميزاته المفيدة تفترض مزوداً سحابياً متصلاً، لذا تعامل معه كأداة هجينة، لا كأداة خصوصية افتراضية تعمل دون إنترنت.',
          '**المستخدمون الذين لا يريدون إدارة فوترة منفصلة مع المزود.** لا يملك Aori اشتراكاً مجمّعاً يغطي استخدام النموذج؛ تفتح وتموّل حسابك الخاص مع المزود الذي تختاره.',
          '**المستخدمون الذين يحتاجون سعراً منشوراً وقابلاً للتنبؤ قبل الالتزام.** لم تنشر Aori تسعيراً للتطبيق نفسه، وتختلف تكاليف المزود حسب النموذج والمزود اللذين تختارهما.',
          '**مستخدمو Android الذين يريدون تحديداً نماذج محلية تعمل دون إنترنت.** دعم Ollama متاح فقط على سطح المكتب؛ يعتمد Android دائماً على مزود سحابي.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Aori تطبيق ذكاء اصطناعي محلي بالكامل ويعمل دون إنترنت؟',
            a: 'لا، ليس بشكل افتراضي. Aori هجين: يخزّن مفاتيح API ومحادثاتك محلياً بدلاً من خادم تديره Aori، لكن النموذج الذي يولّد الردود يعمل في السحابة ما لم تختر تحديداً Ollama كخلفية على سطح المكتب. إعداد واحد فقط — سطح المكتب مع Ollama — محلي بالكامل ويعمل دون إنترنت.',
          },
          {
            q: 'ما المنصات التي يدعمها Aori؟',
            a: 'تطبيقات سطح مكتب لـ Windows و macOS و Linux، بالإضافة إلى تطبيق هاتف محمول لـ Android. تطبيق iOS غير متاح بعد؛ وصفته Aori بأنه "قادم لاحقاً" دون تاريخ إصدار منشور.',
          },
          {
            q: 'هل يخزّن Aori بياناتي على خوادمه الخاصة؟',
            a: 'لا. لا تشغّل Aori خادماً خلفياً يخزّن محادثاتك. تُخزَّن مفاتيح API الخاصة بك محلياً على جهازك، وتذهب الطلبات مباشرة من جهازك إلى مزود LLM الذي تربطه به — وليس عبر خادم تديره Aori.',
          },
          {
            q: 'ما مزودو LLM الذين يدعمهم Aori؟',
            a: 'OpenAI و Anthropic Claude و Google Gemini و Groq و DeepSeek و OpenRouter، جميعها متصلة باستخدام مفتاح API الخاص بك ("أحضر مفتاحك الخاص"). على سطح المكتب، يدعم Aori أيضاً Ollama للنماذج التي تعمل بالكامل على عتادك الخاص.',
          },
          {
            q: 'كم تكلفة Aori؟',
            a: 'لم تنشر Aori تسعيراً؛ التطبيق قابل للاستخدام في مرحلة البيتا العامة الحالية دون رسوم لـ Aori نفسه. تكلفتك الفعلية تأتي من مزود LLM الذي تربطه به — Groq يقدّم مستوى مجانياً، بينما تفرض OpenAI و Anthropic و Gemini و DeepSeek و OpenRouter رسوماً مباشرة عبر حسابك الخاص مع ذلك المزود.',
          },
          {
            q: 'هل يمكنني تشغيل Aori دون إنترنت بالكامل على Android؟',
            a: 'لا. دعم Ollama والنماذج المحلية في Aori متاح فقط على سطح المكتب. على Android، تعتمد كل محادثة على اتصال إنترنت بمزود LLM السحابي الذي أعددته.',
          },
          {
            q: 'ما هي شخصيات Aori؟',
            a: 'الشخصيات هي إعدادات مساعد مختلفة يمكنك التبديل بينها أثناء المحادثة باستخدام أوامر شرطة مائلة، مثل `/leo` أو `/planner`. كل شخصية مُهيّأة لدور أو مهمة مختلفة بينما تشارك نفس الذاكرة الأساسية.',
          },
          {
            q: 'هل يمكن لـ Aori الاتصال بـ Telegram و WhatsApp؟',
            a: 'نعم. يدعم Aori المحادثة متعددة القنوات عبر واجهة التطبيق و Telegram و WhatsApp، مع احتفاظ كل قناة بسجل محادثة معزول خاص بها بدلاً من مشاركة محادثة واحدة عبر الثلاثة.',
          },
          {
            q: 'هل يتكامل Aori مع Obsidian أو Notion؟',
            a: 'نعم. يمكن لـ Aori الرجوع إلى مجلدات محلية، أو مخزن Obsidian، أو مساحة عمل Notion كمصادر معرفة، بحيث يمكنه الإجابة باستخدام ملاحظاتك ومستنداتك الحالية بدلاً مما تكتبه في المحادثة فقط.',
          },
          {
            q: 'ما هي الروتينات الاستباقية في Aori؟',
            a: 'الروتينات هي مهام متكررة تصفها بلغة عادية، مثل ملخص صباحي، ثم يقوم Aori بتشغيلها تلقائياً وفق ذلك الجدول دون الحاجة لإرسال طلب جديد في كل مرة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          '**Aori تطبيق وكيل شخصي محدد النطاق بشكل جيد إذا قيّمته كأداة هجينة، لا كأداة ذكاء اصطناعي محلية خصوصيتها افتراضية.** الجمع بين الذاكرة الدائمة وشخصيات أوامر الشرطة المائلة والمحادثة متعددة القنوات (Telegram و WhatsApp بسجلات معزولة) وتكامل معرفة Obsidian/Notion والروتينات الاستباقية بلغة عادية يشكّل مجموعة ميزات متماسكة تهدف إلى جعل وكيل واحد يبدو متسقاً عبر السياقات. تخزين مفاتيح API والمحادثات محلياً، دون خادم تديره Aori، خاصية خصوصية حقيقية وقابلة للتحقق بغض النظر عن خلفية النموذج التي تختارها. لكن ادعاء التشغيل المحلي الكامل دون إنترنت ينطبق على إعداد واحد بالضبط: سطح المكتب مع اختيار Ollama. كل مسار آخر — مزودو السحابة على سطح المكتب، أو أي استخدام على Android — يرسل مطالباتك إلى واجهة برمجة تطبيقات طرف ثالث عبر الإنترنت. المستخدمون الذين يفهمون هذه المفاضلة ويقبلونها، والمرتاحون لإحضار ودفع تكلفة مفتاح API الخاص بهم لنموذج LLM، يحصلون على وكيل متعدد المنصات مفيد فعلاً. أما المستخدمون الباحثون عن تطبيق يعمل دون إنترنت بالكامل بشكل افتراضي، أو تطبيق iOS، فعليهم البحث في مكان آخر حالياً.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Aori الرسمي](https://www.aori-ai.app/) — توفر المنصات، قائمة الميزات، وحالة البيتا العامة الحالية.',
          '[Ollama](https://ollama.com) — بيئة تشغيل النماذج المحلية التي يستخدمها Aori على سطح المكتب للاستدلال الكامل دون إنترنت.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Hermes Agent: وكيل ذكاء اصطناعي محلي مستقل](/ar/power-local-llm/hermes-agent-review-2026) — مراجعة وكيل محلي أولاً مشابه على هذا الموقع.',
          '[مراجعة BabyAGI: وكيل محلي مستقل](/ar/power-local-llm/babyagi-review-autonomous-agent) — إطار عمل وكيل مستقل آخر تمت تغطيته هنا.',
          '[تشغيل نموذج LLM محلي مع Obsidian](/ar/power-local-llm/local-llm-with-obsidian-2026) — ربط النماذج المحلية بمخزن Obsidian الخاص بك، وهو نفس مسار التكامل الذي يدعمه Aori.',
          '[استبدال Grammarly و Notion AI بنماذج محلية](/ar/power-local-llm/replace-grammarly-notion-ai-with-local) — استخدام ذكاء اصطناعي محلي إلى جانب مساحة عمل Notion.',
          '[دليل برمجيات LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل كامل لتطبيقات وأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-de.webp',
    title: 'Aori AI Test (2026): Local-First Persönlicher KI-Agent für Desktop und Mobilgeräte',
    seoTitle: 'Aori AI Test 2026: Local-First Persönlicher KI-Agent',
    intro:
      'Aori ist eine App für einen persönlichen KI-Agenten, die auf Ihrem Desktop und Smartphone läuft, mit dauerhaftem Gedächtnis, umschaltbaren Personas und geplanten Routinen. Sie speichert Ihre API-Schlüssel und Unterhaltungen lokal statt auf einem von Aori betriebenen Server, ist aber standardmäßig keine vollständig offline-fähige App — der Großteil ihrer Intelligenz stammt von dem Cloud-LLM-Anbieter, den Sie anbinden. Dieser Test zeigt, was Aori tatsächlich leistet, welche Plattformen vollständig lokale Inferenz über Ollama unterstützen und wo der Local-First-Anspruch endet und die Cloud-Abhängigkeit beginnt.',
    metaDescription:
      'Aori AI Test: ein local-first persönlicher Agent mit Gedächtnis, Personas und Routinen für Desktop und Android. Wann läuft er offline über Ollama, wann hängt er von Cloud-Anbietern ab?',
    twitterDescription:
      'Aori AI Test 2026: persönliche Agenten-App für Desktop und Android mit Gedächtnis, Personas und Routinen. Lokal über Ollama nur auf dem Desktop — ehrliche Analyse des Hybridmodells.',
    audience:
      'Nutzer, die entscheiden, ob sie einen persönlichen KI-Agenten über Aori mit ihrem eigenen Cloud-API-Schlüssel oder vollständig lokal über Ollama auf dem Desktop betreiben — mit Plattformunterstützung, Funktionsumfang und der Abwägung zwischen lokal und Cloud.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Aori offizielle Website besuchen →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**Aori lohnt sich, wenn Sie einen einzigen persönlichen KI-Agenten — mit Gedächtnis, Personas und geplanten Routinen — für Desktop und Android nutzen möchten und bereit sind, Ihren eigenen LLM-API-Schlüssel mitzubringen.** Zu einem vollständig lokalen, offline-fähigen Werkzeug wird es nur, wenn Sie [Ollama](https://ollama.com) als Modell-Backend auf dem Desktop wählen; die Android-App und jedes Cloud-Backend senden Ihre Prompts weiterhin über das Internet an diesen Anbieter, auch wenn Aori selbst keine Kopie Ihrer Daten auf eigenen Servern speichert.',
    quickAnswerTop: {
      de: {
        question: 'Ist Aori AI eine vollständig lokale, offline-fähige KI-App?',
        answer:
          'Nein — Aori ist hybrid. Es läuft auf Ihrem Gerät und sendet nie Daten an ein von Aori betriebenes Backend, leitet Prompts aber standardmäßig über einen Cloud-Anbieter (OpenAI, Anthropic, Google Gemini, Groq, DeepSeek oder OpenRouter) mit Ihrem eigenen API-Schlüssel. Vollständig lokale, offline-fähige Inferenz gibt es nur, wenn Sie Ollama als Backend wählen — und diese Option existiert ausschließlich auf dem Desktop.',
        bullets: [
          'Desktop (Windows/macOS/Linux) unterstützt Ollama für vollständig lokale Modelle; Android nicht.',
          'API-Schlüssel werden lokal auf Ihrem Gerät gespeichert und gehen direkt an den Anbieter — niemals über ein Aori-Backend.',
          'Funktionen: dauerhaftes Gedächtnis, Personas per Slash-Befehl, Telegram/WhatsApp-Kanäle, Obsidian/Notion-Integration, geplante Routinen.',
          'Aktuell verfügbare Plattformen: Windows, macOS, Linux, Android. iOS ist noch nicht verfügbar.',
          'Preise sind nicht veröffentlicht — Aori selbst ist in der Beta kostenlos; Sie bezahlen den jeweils angebundenen LLM-Anbieter (Groq bietet eine kostenlose Stufe).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Aori ist', anchor: 'what-is-aori' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Plattformen und Preise', anchor: 'platforms-pricing' },
      { label: 'Lokal vs. Cloud: Was „Local-First" wirklich bedeutet', anchor: 'local-vs-cloud' },
      { label: 'Für wen sich Aori eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Aori nicht eignet', anchor: 'who-should-not-use' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori ist ein local-first persönlicher KI-Agent für Desktop und Mobilgeräte, der API-Schlüssel und Chatverlauf auf Ihrem Gerät hält, aber nur dann vollständig offline läuft, wenn Sie auf dem Desktop Ollama als Modell-Backend wählen.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori ist eine App für Ihren Computer oder Ihr Android-Smartphone, die wie ein persönlicher Assistent mit Gedächtnis funktioniert. Sie verbinden Ihr eigenes Konto und Ihren eigenen Schlüssel eines Anbieters wie OpenAI oder Anthropic, um es zu betreiben, oder — nur auf dem Desktop — Sie können es mit kostenlosen lokalen Modellen über Ollama betreiben, sodass nichts ins Internet geht.',
          },
        ],
        items: [
          'Aori ist eine local-first App für einen persönlichen KI-Agenten auf Desktop und Mobilgeräten, aktuell in der öffentlichen Beta unter [aori-ai.app](https://www.aori-ai.app/).',
          'Kein von Aori betriebenes Backend speichert Ihre Daten — API-Schlüssel und Unterhaltungen werden lokal auf Ihrem Gerät gespeichert und direkt an den gewählten LLM-Anbieter gesendet.',
          'Unterstützte Cloud-Anbieter: OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek und OpenRouter. Nur auf dem Desktop unterstützt Aori zusätzlich [Ollama](https://ollama.com) für vollständig lokale Modelle.',
          'Kernfunktionen: dauerhaftes Gedächtnis, per Slash-Befehl umschaltbare Personas (z. B. `/leo`, `/planner`), Multi-Channel-Chat (in der App, Telegram, WhatsApp) mit isoliertem Verlauf pro Kanal, Wissensintegration (lokale Ordner, Obsidian, Notion) und proaktive Routinen, die in normaler Sprache geplant werden.',
          'Plattformen: Desktop unter Windows, macOS und Linux; mobil aktuell unter Android, iOS folgt später.',
          'Preise sind nicht veröffentlicht. Aori ist in der aktuellen Beta kostenlos nutzbar; die eigentlichen Kosten entstehen beim angebundenen LLM-Anbieter (Groq bietet eine kostenlose Stufe).',
          'Vollständig offline läuft die App nur auf dem Desktop mit ausgewähltem Ollama — jede andere Konfiguration, einschließlich der Android-App, hängt von einer Internetverbindung zu einem Cloud-Anbieter ab.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Was Aori ist',
        content: [
          '**Aori ist eine App für einen persönlichen KI-Agenten, die auf Ihrem Desktop oder Smartphone läuft statt über eine gehostete Chat-Website.** Sie ist unter [aori-ai.app](https://www.aori-ai.app/) verfügbar und befindet sich aktuell in der öffentlichen Beta für Windows, macOS, Linux und Android.',
          'Die zentrale Design-Entscheidung ist Local-First: Die App selbst läuft auf Ihrem Gerät, und Aori betreibt keinen Backend-Server, der Ihre Unterhaltungen speichert. Sie verbinden Ihren eigenen API-Schlüssel eines unterstützten LLM-Anbieters — OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek oder OpenRouter — und Aori speichert diesen Schlüssel lokal und sendet Anfragen direkt von Ihrem Gerät an den gewählten Anbieter.',
          'Auf dem Desktop kommt ein zweiter Weg hinzu: die Unterstützung von [Ollama](https://ollama.com), mit der Sie Open-Source-Modelle vollständig auf Ihrer eigenen Hardware ausführen können, ganz ohne Cloud-Anbieter. Dieser Weg ist nur auf dem Desktop verfügbar — die Android-App hat keine Option für lokale Modelle und ist immer auf einen Cloud-Anbieter angewiesen.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang von Aori zielt darauf ab, dass sich ein Agent über Zeit, Themen und Kanäle hinweg konsistent anfühlt — nicht darauf, Ihnen ein größeres Modell zum Reden zu geben.** Die fünf folgenden Funktionen unterscheiden Aori von einer reinen Chat-Oberfläche vor einer LLM-API.',
        ],
        items: [
          '**Dauerhaftes Gedächtnis** — Aori lernt aus Ihren Unterhaltungen und allen bereitgestellten Wissensdateien und trägt diesen Kontext in künftige Sitzungen, statt jedes Mal bei null zu beginnen.',
          '**Personas per Slash-Befehl** — wechseln Sie mitten in der Unterhaltung mit Befehlen wie `/leo` oder `/planner` zwischen Assistenten-Personas, die jeweils auf eine andere Rolle oder Aufgabe zugeschnitten sind.',
          '**Multi-Channel-Chat** — sprechen Sie mit Aori in der App oder über Telegram oder WhatsApp, wobei jeder Kanal seinen eigenen isolierten Gesprächsverlauf behält.',
          '**Wissensintegration** — verweisen Sie Aori auf lokale Ordner, einen Obsidian-Vault oder einen Notion-Workspace, damit es beim Antworten auf Ihre vorhandenen Notizen und Dokumente zugreifen kann.',
          '**Proaktive Routinen** — beschreiben Sie eine wiederkehrende Aufgabe in normaler Sprache, etwa ein Morning-Briefing, und Aori führt sie nach diesem Zeitplan automatisch aus, ohne dass Sie jedes Mal einen neuen Prompt senden müssen.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Plattformen und Preise',
        columns: ['Plattform / Plan', 'Was Sie erwarten können', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform / Plan': 'Windows, macOS, Linux (Desktop)',
            'Was Sie erwarten können': 'Voller Funktionsumfang. Unterstützt Cloud-Anbieter (OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter) und, einzigartig, [Ollama](https://ollama.com) für vollständig lokale Modelle.',
            'Wichtiger Hinweis': 'Nur in dieser Umgebung kann Aori völlig ohne Cloud-Abhängigkeit laufen — vorausgesetzt, Sie wählen Ollama und ein Modell, das Ihre Hardware bewältigen kann.',
          },
          {
            'Plattform / Plan': 'Android',
            'Was Sie erwarten können': 'Dieselben Persona-, Gedächtnis-, Kanal- und Routinenfunktionen wie auf dem Desktop, verbunden mit einem Cloud-LLM-Anbieter über Ihren eigenen API-Schlüssel.',
            'Wichtiger Hinweis': 'Kein Ollama oder lokales Modell auf Android — jeder Chat hängt von einer Internetverbindung zum gewählten Anbieter ab.',
          },
          {
            'Plattform / Plan': 'iOS',
            'Was Sie erwarten können': 'Noch nicht verfügbar.',
            'Wichtiger Hinweis': 'Aori hat angekündigt, dass iOS „später" folgt, ohne veröffentlichtes Erscheinungsdatum zum Zeitpunkt dieses Tests.',
          },
          {
            'Plattform / Plan': 'Preise',
            'Was Sie erwarten können': 'Nicht veröffentlicht. Die App ist in der aktuellen öffentlichen Beta ohne Abogebühr für Aori selbst nutzbar.',
            'Wichtiger Hinweis': 'Ihre tatsächlichen Kosten bestimmt der LLM-Anbieter, dessen API-Schlüssel Sie nutzen — Groq bietet eine kostenlose Stufe; OpenAI, Anthropic, Gemini, DeepSeek und OpenRouter rechnen über Ihr eigenes Konto bei diesem Anbieter ab.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Lokal vs. Cloud: Was „Local-First" wirklich bedeutet',
        content: [
          '**„Local-First" beschreibt, wo Aori Ihre Daten speichert — nicht, wo Ihre Prompts verarbeitet werden.** In jeder Konfiguration liegen Ihre API-Schlüssel und Ihr Gesprächsverlauf auf Ihrem Gerät statt auf einem von Aori betriebenen Server. Ob das Modell selbst aber auf Ihrem Gerät läuft, hängt vollständig davon ab, welches Backend Sie wählen.',
          'Dieser Unterschied ist wichtig, weil die beiden Aussagen — „Ihre Daten bleiben auf Ihrem Gerät" und „Ihre KI läuft auf Ihrem Gerät" — nicht dasselbe sind, und Aori beides nur in einer ganz bestimmten Konfiguration gleichzeitig liefert.',
        ],
        decisionBlock: {
          title: 'So lesen Sie Aoris Lokal-vs-Cloud-Konfiguration',
          localIf: [
            'Sie sind auf dem Desktop (Windows, macOS oder Linux)',
            'Sie wählen Ollama als Modell-Backend',
            'Das gewählte Modell ist eines, das Ihre Hardware mit akzeptabler Geschwindigkeit ausführen kann',
          ],
          cloudIf: [
            'Sie sind auf Android, wo Ollama überhaupt nicht unterstützt wird',
            'Sie wählen OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek oder OpenRouter als Backend',
            'Sie möchten Zugriff auf die größten, leistungsfähigsten Frontier-Modelle',
          ],
          quick: [
            'Desktop + Ollama = Prompts und Inferenz bleiben vollständig auf Ihrem Rechner',
            'Jede andere Kombination (Desktop oder Android + ein Cloud-Anbieter) = Prompts verlassen Ihr Gerät und gehen an die API dieses Anbieters',
            'Aori selbst betreibt in keinem Fall ein Backend, das Ihre Daten speichert — die Grenze zwischen lokal und Cloud verläuft beim Modell-Backend, nicht bei Aoris eigenen Servern',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Aori eignet',
        items: [
          '**Nutzer, die einen einzigen Agenten für Desktop und Android möchten.** Dauerhaftes Gedächtnis, Personas und Routinen begleiten Sie plattformübergreifend, solange Sie dasselbe Anbieterkonto nutzen.',
          '**Nutzer, die bereit sind, ihren eigenen API-Schlüssel mitzubringen und Anbieter direkt zu bezahlen.** Aori ist die Oberfläche; die Abrechnung mit OpenAI, Anthropic, Google, Groq, DeepSeek oder OpenRouter verwalten Sie separat.',
          '**Nutzer, die geplante Routinen in normaler Sprache möchten**, etwa ein wiederkehrendes Morning-Briefing, ohne separate Automatisierungssoftware einzurichten.',
          '**Desktop-Nutzer, die die Option vollständig lokaler, offline-fähiger Inferenz** über [Ollama](https://ollama.com) möchten, ohne auf die Möglichkeit zu verzichten, für schwierigere Aufgaben zu einem Cloud-Anbieter zu wechseln.',
          '**Telegram- oder WhatsApp-Nutzer**, die denselben Agenten und dasselbe Gedächtnis in diesen Apps nutzen möchten, jeweils mit eigenem isoliertem Gesprächsverlauf.',
          '**Nutzer mit einem Obsidian-Vault oder Notion-Workspace**, auf den ein Agent direkt zugreifen soll, statt Notizen in ein Chatfenster zu kopieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Aori nicht eignet',
        items: [
          '**iPhone- oder iPad-Nutzer.** Aori hat noch keine iOS-App; das Unternehmen beschreibt die iOS-Unterstützung als „folgt später" ohne veröffentlichtes Datum.',
          '**Nutzer, die eine vollständig offline-fähige App ganz ohne Cloud-Option möchten.** Aoris lokaler Pfad existiert nur auf dem Desktop mit ausgewähltem Ollama — die meisten nützlichen Funktionen setzen einen verbundenen Cloud-Anbieter voraus. Behandeln Sie es also als Hybrid-Tool, nicht als standardmäßig private, offline-fähige App.',
          '**Nutzer, die keine separate Anbieterabrechnung verwalten möchten.** Aori hat kein gebündeltes Abo, das die Modellnutzung abdeckt; Sie eröffnen und finanzieren ein eigenes Konto beim gewählten Anbieter.',
          '**Nutzer, die vor der Entscheidung einen veröffentlichten, vorhersehbaren Preis benötigen.** Aori hat für die App selbst keine Preise veröffentlicht, und die Anbieterkosten variieren je nach gewähltem Modell und Anbieter.',
          '**Android-Nutzer, die gezielt lokale, offline-fähige Modelle wollen.** Ollama-Unterstützung gibt es nur auf dem Desktop; Android ist immer auf einen Cloud-Anbieter angewiesen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Aori eine vollständig lokale, offline-fähige KI-App?',
            a: 'Nein, nicht standardmäßig. Aori ist hybrid: Es speichert Ihre API-Schlüssel und Unterhaltungen lokal statt auf einem von Aori betriebenen Server, aber das Modell, das Antworten erzeugt, läuft in der Cloud, sofern Sie nicht ausdrücklich Ollama als Backend auf dem Desktop wählen. Nur diese eine Konfiguration — Desktop plus Ollama — ist vollständig lokal und offline-fähig.',
          },
          {
            q: 'Welche Plattformen unterstützt Aori?',
            a: 'Desktop-Apps für Windows, macOS und Linux sowie eine mobile App für Android. Eine iOS-App ist noch nicht verfügbar; Aori beschreibt sie als „folgt später" ohne veröffentlichtes Erscheinungsdatum.',
          },
          {
            q: 'Speichert Aori meine Daten auf eigenen Servern?',
            a: 'Nein. Aori betreibt kein Backend, das Ihre Unterhaltungen speichert. Ihre API-Schlüssel werden lokal auf Ihrem Gerät gespeichert, und Anfragen gehen direkt von Ihrem Gerät an den angebundenen LLM-Anbieter — nicht über einen von Aori betriebenen Server.',
          },
          {
            q: 'Welche LLM-Anbieter unterstützt Aori?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek und OpenRouter, alle verbunden über Ihren eigenen API-Schlüssel („bring your own key"). Auf dem Desktop unterstützt Aori zusätzlich Ollama für Modelle, die vollständig auf Ihrer eigenen Hardware laufen.',
          },
          {
            q: 'Was kostet Aori?',
            a: 'Aori hat keine Preise veröffentlicht; die App ist in der aktuellen öffentlichen Beta ohne Gebühr für Aori selbst nutzbar. Ihre tatsächlichen Kosten entstehen beim angebundenen LLM-Anbieter — Groq bietet eine kostenlose Stufe, während OpenAI, Anthropic, Gemini, DeepSeek und OpenRouter direkt über Ihr eigenes Konto bei diesem Anbieter abrechnen.',
          },
          {
            q: 'Kann ich Aori auf Android vollständig offline betreiben?',
            a: 'Nein. Ollama und die Unterstützung lokaler Modelle in Aori gibt es nur auf dem Desktop. Auf Android hängt jede Unterhaltung von einer Internetverbindung zum konfigurierten Cloud-LLM-Anbieter ab.',
          },
          {
            q: 'Was sind die Personas von Aori?',
            a: 'Personas sind unterschiedliche Assistenten-Konfigurationen, zwischen denen Sie mitten in der Unterhaltung per Slash-Befehl wechseln können, etwa `/leo` oder `/planner`. Jede Persona ist auf eine andere Rolle oder Aufgabe zugeschnitten, teilt sich aber dasselbe zugrunde liegende Gedächtnis.',
          },
          {
            q: 'Kann Aori mit Telegram und WhatsApp verbunden werden?',
            a: 'Ja. Aori unterstützt Multi-Channel-Chat über die App-Oberfläche, Telegram und WhatsApp, wobei jeder Kanal seinen eigenen isolierten Gesprächsverlauf behält, statt einen gemeinsamen Thread über alle drei zu teilen.',
          },
          {
            q: 'Integriert sich Aori mit Obsidian oder Notion?',
            a: 'Ja. Aori kann lokale Ordner, einen Obsidian-Vault oder einen Notion-Workspace als Wissensquellen nutzen, sodass es mit Ihren vorhandenen Notizen und Dokumenten antworten kann statt nur mit dem, was Sie im Chat eintippen.',
          },
          {
            q: 'Was sind die proaktiven Routinen von Aori?',
            a: 'Routinen sind wiederkehrende Aufgaben, die Sie in normaler Sprache beschreiben, etwa ein Morning-Briefing, das Aori dann automatisch nach diesem Zeitplan ausführt, ohne dass Sie jedes Mal einen neuen Prompt senden müssen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          '**Aori ist eine gut abgegrenzte App für einen persönlichen Agenten, wenn Sie sie als Hybrid bewerten — nicht als standardmäßig private lokale KI.** Die Kombination aus dauerhaftem Gedächtnis, Personas per Slash-Befehl, Multi-Channel-Chat (Telegram und WhatsApp mit isolierten Verläufen), Obsidian/Notion-Wissensintegration und proaktiven Routinen in normaler Sprache ist ein stimmiger Funktionsumfang, der einen Agenten über verschiedene Kontexte hinweg konsistent wirken lassen soll. Die lokale Speicherung von API-Schlüsseln und Unterhaltungen ohne von Aori betriebenes Backend ist eine echte, überprüfbare Datenschutz-Eigenschaft, unabhängig davon, welches Modell-Backend Sie wählen. Der Anspruch auf vollständig lokalen, offline-fähigen Betrieb gilt aber genau für eine Konfiguration: Desktop mit ausgewähltem Ollama. Jeder andere Weg — Cloud-Anbieter auf dem Desktop oder jede Nutzung auf Android — sendet Ihre Prompts über das Internet an eine Drittanbieter-API. Nutzer, die diesen Kompromiss verstehen und akzeptieren und bereit sind, ihren eigenen LLM-API-Schlüssel mitzubringen und zu bezahlen, erhalten einen wirklich nützlichen plattformübergreifenden Agenten. Wer standardmäßig eine vollständig offline-fähige App oder eine iOS-App sucht, sollte sich vorerst anderweitig umsehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle Aori-Website](https://www.aori-ai.app/) — Plattformverfügbarkeit, Funktionsliste und aktueller Beta-Status.',
          '[Ollama](https://ollama.com) — die Laufzeitumgebung für lokale Modelle, die Aori auf dem Desktop für vollständig offline-fähige Inferenz nutzt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Hermes-Agent-Test: Lokaler autonomer KI-Agent](/de/power-local-llm/hermes-agent-review-2026) — ein vergleichbarer local-first Agent, getestet auf dieser Website.',
          '[BabyAGI-Test: Autonomer lokaler Agent](/de/power-local-llm/babyagi-review-autonomous-agent) — ein weiteres autonomes Agenten-Framework auf dieser Website.',
          '[Ein lokales LLM mit Obsidian betreiben](/de/power-local-llm/local-llm-with-obsidian-2026) — lokale Modelle mit Ihrem Obsidian-Vault verbinden, derselbe Integrationsweg, den Aori unterstützt.',
          '[Grammarly und Notion AI durch lokale Modelle ersetzen](/de/power-local-llm/replace-grammarly-notion-ai-with-local) — lokale KI neben einem Notion-Workspace nutzen.',
          '[Local LLM Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — vollständiges Verzeichnis lokaler KI-Apps und -Tools für alle Plattformen.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-es.webp',
    title: 'Reseña de Aori AI (2026): Agente Personal Local-First para Escritorio y Móvil',
    seoTitle: 'Reseña de Aori AI 2026: Agente Personal Local-First',
    intro:
      'Aori es una app de agente de IA personal que funciona en tu escritorio y tu teléfono, con memoria persistente, personas intercambiables y rutinas programadas. Guarda tus claves de API y conversaciones localmente en lugar de en un servidor operado por Aori, pero no es una app totalmente offline por defecto — la mayor parte de su inteligencia proviene del proveedor de LLM en la nube que conectes. Esta reseña cubre lo que Aori realmente hace, qué plataformas admiten inferencia totalmente local vía Ollama, y dónde termina la promesa "local-first" y dónde empieza la dependencia de la nube.',
    metaDescription:
      'Reseña de Aori AI: un agente personal local-first con memoria, personas y rutinas para escritorio y Android. Cuándo funciona totalmente offline vía Ollama y cuándo depende de proveedores en la nube.',
    twitterDescription:
      'Reseña de Aori AI 2026: app de agente personal para escritorio y Android con memoria, personas y rutinas. Local vía Ollama solo en escritorio — análisis honesto del modelo híbrido.',
    audience:
      'Usuarios que deciden si ejecutar un agente de IA personal con Aori usando su propia clave de API en la nube, o totalmente local vía Ollama en escritorio — cubre soporte de plataformas, funciones y el equilibrio entre local y nube.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar el sitio oficial de Aori →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**Aori vale la pena si quieres un solo agente de IA personal — con memoria, personas y rutinas programadas — para escritorio y Android, y estás dispuesto a traer tu propia clave de API de LLM.** Solo se convierte en una herramienta totalmente local y offline cuando eliges [Ollama](https://ollama.com) como backend de modelo en escritorio; la app de Android y cualquier backend en la nube siguen enviando tus prompts por internet a ese proveedor, aunque Aori en sí no almacene ninguna copia de tus datos en sus propios servidores.',
    quickAnswerTop: {
      es: {
        question: '¿Aori AI es una app de IA totalmente local y offline?',
        answer:
          'No — Aori es híbrida. Funciona en tu dispositivo y nunca envía datos a un backend operado por Aori, pero por defecto enruta los prompts a través de un proveedor en la nube (OpenAI, Anthropic, Google Gemini, Groq, DeepSeek u OpenRouter) usando tu propia clave de API. La inferencia totalmente local y offline solo ocurre cuando eliges Ollama como backend, y esa opción existe únicamente en escritorio.',
        bullets: [
          'Escritorio (Windows/macOS/Linux) admite Ollama para modelos totalmente locales; Android no.',
          'Las claves de API se guardan localmente en tu dispositivo y van directo al proveedor, nunca a través de un backend de Aori.',
          'Funciones: memoria persistente, personas por comandos slash, canales de Telegram/WhatsApp, integración con Obsidian/Notion, rutinas programadas.',
          'Plataformas disponibles ahora: Windows, macOS, Linux, Android. iOS aún no está disponible.',
          'El precio no está publicado — Aori en sí es gratis en beta; pagas al proveedor de LLM que conectes (Groq tiene un nivel gratuito).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Aori', anchor: 'what-is-aori' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Plataformas y precios', anchor: 'platforms-pricing' },
      { label: 'Local vs. nube: qué significa realmente "local-first"', anchor: 'local-vs-cloud' },
      { label: 'Quién debería usar Aori', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Aori', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori es un agente de IA personal local-first para escritorio y móvil que mantiene las claves de API y el historial de chat en tu dispositivo, pero solo funciona totalmente offline cuando eliges Ollama como backend de modelo en escritorio.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori es una app para tu computadora o tu teléfono Android que actúa como un asistente personal con memoria. Conectas tu propia cuenta y clave de un proveedor como OpenAI o Anthropic para usarla, o — solo en escritorio — puedes ejecutarla con modelos locales gratuitos vía Ollama para que nada salga a internet.',
          },
        ],
        items: [
          'Aori es una app de agente de IA personal local-first para escritorio y móvil, actualmente en beta pública en [aori-ai.app](https://www.aori-ai.app/).',
          'Ningún backend operado por Aori almacena tus datos — las claves de API y las conversaciones se guardan localmente en tu dispositivo y se envían directo al proveedor de LLM que elijas.',
          'Proveedores en la nube compatibles: OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek y OpenRouter. Solo en escritorio, Aori también admite [Ollama](https://ollama.com) para modelos totalmente locales.',
          'Funciones principales: memoria persistente, personas intercambiables por comandos slash (por ejemplo `/leo`, `/planner`), chat multicanal (en la app, Telegram, WhatsApp) con historial aislado por canal, integración de conocimiento (carpetas locales, Obsidian, Notion) y rutinas proactivas programadas en lenguaje sencillo.',
          'Plataformas: escritorio en Windows, macOS y Linux; móvil en Android ahora, con iOS llegando más adelante.',
          'El precio no está publicado. Aori es gratis en su beta actual; el costo real es el que cobre el proveedor de LLM que conectes (Groq tiene un nivel gratuito).',
          'El funcionamiento totalmente offline se limita a escritorio con Ollama seleccionado — cualquier otra configuración, incluida la app de Android, depende de una conexión a internet con un proveedor en la nube.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Qué es Aori',
        content: [
          '**Aori es una app de agente de IA personal que funciona en tu escritorio o teléfono en lugar de a través de un sitio de chat alojado.** Está disponible en [aori-ai.app](https://www.aori-ai.app/) y actualmente está en beta pública para Windows, macOS, Linux y Android.',
          'La decisión de diseño principal es local-first: la app en sí funciona en tu dispositivo, y Aori no opera un servidor backend que almacene tus conversaciones. Conectas tu propia clave de API de un proveedor de LLM compatible — OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek u OpenRouter — y Aori guarda esa clave localmente, enviando las solicitudes directamente desde tu dispositivo al proveedor que elegiste.',
          'En escritorio, Aori añade una segunda vía: soporte de [Ollama](https://ollama.com), que te permite ejecutar modelos de código abierto totalmente en tu propio hardware, sin ningún proveedor en la nube de por medio. Esta vía es exclusiva de escritorio: la app de Android no tiene opción de modelo local y siempre depende de un proveedor en la nube.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones de Aori se centra en hacer que un agente se sienta consistente a través del tiempo, los temas y los canales, no en darte un modelo más grande con el que hablar.** Las cinco funciones siguientes son las que lo diferencian de una simple interfaz de chat frente a una API de LLM.',
        ],
        items: [
          '**Memoria persistente** — Aori aprende de tus conversaciones y de cualquier archivo de conocimiento que le proporciones, llevando ese contexto a futuras sesiones en lugar de empezar de cero cada vez que lo abres.',
          '**Personas por comandos slash** — cambia entre personas del asistente en medio de la conversación con comandos como `/leo` o `/planner`, cada una ajustada para un rol o tarea distinta.',
          '**Chat multicanal** — habla con Aori dentro de la app, o a través de Telegram o WhatsApp, y cada canal mantiene su propio historial de conversación aislado.',
          '**Integración de conocimiento** — dirige a Aori hacia carpetas locales, un vault de Obsidian o un espacio de trabajo de Notion para que pueda consultar tus notas y documentos existentes al responder.',
          '**Rutinas proactivas** — describe una tarea recurrente en lenguaje sencillo, como un resumen matutino, y Aori la ejecuta según ese horario sin que tengas que pedírselo cada vez.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Plataformas y precios',
        columns: ['Plataforma / Plan', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma / Plan': 'Windows, macOS, Linux (escritorio)',
            'Qué esperar': 'Conjunto completo de funciones. Admite proveedores en la nube (OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter) y, de forma única, [Ollama](https://ollama.com) para modelos totalmente locales.',
            'Nota importante': 'Este es el único entorno donde Aori puede funcionar sin ninguna dependencia de la nube, siempre que elijas Ollama y un modelo que tu hardware pueda ejecutar.',
          },
          {
            'Plataforma / Plan': 'Android',
            'Qué esperar': 'Las mismas funciones de personas, memoria, canales y rutinas que en escritorio, conectadas a un proveedor de LLM en la nube usando tu propia clave de API.',
            'Nota importante': 'Sin soporte de Ollama ni modelos locales en Android — cada chat depende de una conexión a internet con el proveedor elegido.',
          },
          {
            'Plataforma / Plan': 'iOS',
            'Qué esperar': 'Aún no disponible.',
            'Nota importante': 'Aori ha declarado que iOS "llegará más adelante", sin fecha de lanzamiento publicada al momento de escribir esto.',
          },
          {
            'Plataforma / Plan': 'Precios',
            'Qué esperar': 'No publicados. La app es usable en su beta pública actual sin cuota de suscripción para Aori en sí.',
            'Nota importante': 'Tu costo real lo fija el proveedor de LLM cuya clave de API uses — Groq ofrece un nivel gratuito; OpenAI, Anthropic, Gemini, DeepSeek y OpenRouter cobran a través de tu propia cuenta con ese proveedor.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. nube: qué significa realmente "local-first"',
        content: [
          '**"Local-first" describe dónde almacena Aori tus datos, no dónde se procesan tus prompts.** En cualquier configuración, tus claves de API y tu historial de conversación viven en tu dispositivo en lugar de en un servidor operado por Aori. Pero que el modelo en sí funcione en tu dispositivo depende por completo del backend que elijas.',
          'Esta distinción importa porque las dos afirmaciones — "tus datos permanecen en tu dispositivo" y "tu IA funciona en tu dispositivo" — no son lo mismo, y Aori solo cumple ambas a la vez en una configuración específica.',
        ],
        decisionBlock: {
          title: 'Cómo interpretar la configuración local vs. nube de Aori',
          localIf: [
            'Estás en escritorio (Windows, macOS o Linux)',
            'Eliges Ollama como backend de modelo',
            'El modelo que elijas es uno que tu hardware puede ejecutar a una velocidad aceptable',
          ],
          cloudIf: [
            'Estás en Android, donde Ollama no es compatible en absoluto',
            'Eliges OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek u OpenRouter como backend',
            'Quieres acceso a los modelos de frontera más grandes y capaces',
          ],
          quick: [
            'Escritorio + Ollama = los prompts y la inferencia permanecen enteramente en tu máquina',
            'Cualquier otra combinación (escritorio o Android + un proveedor en la nube) = los prompts salen de tu dispositivo hacia la API de ese proveedor',
            'Aori en sí nunca opera un backend que almacene tus datos, en ningún caso — la línea entre local y nube pasa por el backend del modelo, no por los servidores propios de Aori',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Aori',
        items: [
          '**Usuarios que quieren un solo agente para escritorio y Android.** La memoria persistente, las personas y las rutinas te siguen entre plataformas mientras uses la misma cuenta de proveedor.',
          '**Usuarios cómodos trayendo su propia clave de API y pagando directamente a los proveedores.** Aori es la interfaz; tú gestionas la facturación con OpenAI, Anthropic, Google, Groq, DeepSeek u OpenRouter por separado.',
          '**Usuarios que quieren rutinas programadas en lenguaje sencillo**, como un resumen matutino recurrente, sin configurar software de automatización aparte.',
          '**Usuarios de escritorio que quieren la opción de inferencia totalmente local y offline** vía [Ollama](https://ollama.com), sin renunciar a la opción de cambiar a un proveedor en la nube para tareas más difíciles.',
          '**Usuarios de Telegram o WhatsApp** que quieren el mismo agente y memoria disponibles en esas apps, cada una con su propio historial de conversación aislado.',
          '**Usuarios con un vault de Obsidian o un espacio de Notion** al que quieren que un agente consulte directamente, en lugar de copiar y pegar notas en una ventana de chat.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Aori',
        items: [
          '**Usuarios de iPhone o iPad.** Aori aún no tiene app de iOS; la empresa describe el soporte de iOS como "próximamente" sin fecha publicada.',
          '**Usuarios que quieren una app totalmente offline sin ninguna opción de nube.** La vía local de Aori solo existe en escritorio con Ollama seleccionado — la mayoría de sus funciones útiles asumen un proveedor en la nube conectado, así que trátala como una herramienta híbrida, no como una app offline con privacidad por defecto.',
          '**Usuarios que no quieren gestionar facturación separada con un proveedor.** Aori no tiene una suscripción combinada que cubra el uso del modelo; abres y financias tu propia cuenta con el proveedor que elijas.',
          '**Usuarios que necesitan un precio publicado y predecible antes de comprometerse.** Aori no ha publicado precios para la app en sí, y el costo del proveedor varía según el modelo y proveedor que elijas.',
          '**Usuarios de Android que específicamente quieren modelos locales y offline.** El soporte de Ollama es exclusivo de escritorio; Android siempre depende de un proveedor en la nube.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Aori es una app de IA totalmente offline y local?',
            a: 'No, no por defecto. Aori es híbrida: guarda tus claves de API y conversaciones localmente en lugar de en un servidor operado por Aori, pero el modelo que genera las respuestas funciona en la nube a menos que elijas específicamente Ollama como backend en escritorio. Solo esa configuración — escritorio más Ollama — es totalmente local y offline.',
          },
          {
            q: '¿Qué plataformas admite Aori?',
            a: 'Apps de escritorio para Windows, macOS y Linux, más una app móvil para Android. Una app de iOS aún no está disponible; Aori la ha descrito como "próximamente" sin fecha de lanzamiento publicada.',
          },
          {
            q: '¿Aori guarda mis datos en sus propios servidores?',
            a: 'No. Aori no opera un backend que almacene tus conversaciones. Tus claves de API se guardan localmente en tu dispositivo, y las solicitudes van directamente desde tu dispositivo al proveedor de LLM que conectes, no a través de un servidor operado por Aori.',
          },
          {
            q: '¿Qué proveedores de LLM admite Aori?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek y OpenRouter, todos conectados con tu propia clave de API ("trae tu propia clave"). En escritorio, Aori también admite Ollama para modelos que funcionan totalmente en tu propio hardware.',
          },
          {
            q: '¿Cuánto cuesta Aori?',
            a: 'Aori no ha publicado precios; la app es usable en su beta pública actual sin costo para Aori en sí. Tu costo real proviene del proveedor de LLM que conectes — Groq ofrece un nivel gratuito, mientras que OpenAI, Anthropic, Gemini, DeepSeek y OpenRouter cobran directamente a través de tu propia cuenta con ese proveedor.',
          },
          {
            q: '¿Puedo usar Aori totalmente offline en Android?',
            a: 'No. El soporte de Ollama y modelos locales en Aori es exclusivo de escritorio. En Android, cada conversación depende de una conexión a internet con el proveedor de LLM en la nube que hayas configurado.',
          },
          {
            q: '¿Qué son las personas de Aori?',
            a: 'Las personas son configuraciones de asistente distintas entre las que puedes cambiar en medio de una conversación con comandos slash, como `/leo` o `/planner`. Cada persona está ajustada para un rol o tarea diferente, pero comparte la misma memoria subyacente.',
          },
          {
            q: '¿Aori puede conectarse a Telegram y WhatsApp?',
            a: 'Sí. Aori admite chat multicanal a través de la interfaz de la app, Telegram y WhatsApp, y cada canal mantiene su propio historial de conversación aislado en lugar de compartir un solo hilo entre los tres.',
          },
          {
            q: '¿Aori se integra con Obsidian o Notion?',
            a: 'Sí. Aori puede usar carpetas locales, un vault de Obsidian o un espacio de Notion como fuentes de conocimiento, de modo que pueda responder usando tus notas y documentos existentes en lugar de solo lo que escribes en el chat.',
          },
          {
            q: '¿Qué son las rutinas proactivas de Aori?',
            a: 'Las rutinas son tareas recurrentes que describes en lenguaje sencillo, como un resumen matutino, que Aori luego ejecuta automáticamente según ese horario sin que tengas que enviar un nuevo prompt cada vez.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          '**Aori es una app de agente personal bien delimitada si la evalúas como híbrida, no como una herramienta de IA local con privacidad por defecto.** La combinación de memoria persistente, personas por comandos slash, chat multicanal (Telegram y WhatsApp con historiales aislados), integración de conocimiento con Obsidian/Notion y rutinas proactivas en lenguaje sencillo es un conjunto de funciones coherente orientado a que un agente se sienta consistente en distintos contextos. Guardar las claves de API y las conversaciones localmente, sin un backend operado por Aori, es una propiedad de privacidad real y verificable sin importar qué backend de modelo elijas. Pero la afirmación de funcionamiento totalmente local y offline se aplica exactamente a una configuración: escritorio con Ollama seleccionado. Cualquier otra vía — proveedores en la nube en escritorio, o cualquier uso en Android — envía tus prompts a una API de terceros por internet. Los usuarios que entienden y aceptan ese equilibrio, y que están cómodos trayendo y pagando su propia clave de API de LLM, obtienen un agente multiplataforma genuinamente útil. Quienes buscan una app totalmente offline por defecto, o una app de iOS, deberían buscar en otro lugar por ahora.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Aori](https://www.aori-ai.app/) — disponibilidad de plataformas, lista de funciones y estado actual de la beta pública.',
          '[Ollama](https://ollama.com) — el runtime de modelos locales que Aori usa en escritorio para inferencia totalmente offline.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Hermes Agent: agente de IA local autónomo](/es/power-local-llm/hermes-agent-review-2026) — una reseña comparable de un agente local-first en este sitio.',
          '[Reseña de BabyAGI: agente local autónomo](/es/power-local-llm/babyagi-review-autonomous-agent) — otro framework de agente autónomo cubierto aquí.',
          '[Ejecutar un LLM local con Obsidian](/es/power-local-llm/local-llm-with-obsidian-2026) — cómo conectar modelos locales a tu vault de Obsidian, la misma vía de integración que admite Aori.',
          '[Reemplazar Grammarly y Notion AI con modelos locales](/es/power-local-llm/replace-grammarly-notion-ai-with-local) — usar IA local junto a un espacio de trabajo de Notion.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio completo de apps y herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-fr.webp',
    title: 'Avis Aori AI (2026) : agent personnel local-first pour ordinateur et mobile',
    seoTitle: 'Avis Aori AI 2026 : agent personnel local-first',
    intro:
      'Aori est une application d\'agent IA personnel qui fonctionne sur votre ordinateur et votre téléphone, avec mémoire persistante, personas interchangeables et routines planifiées. Elle stocke vos clés API et vos conversations localement plutôt que sur un serveur exploité par Aori, mais ce n\'est pas une application entièrement hors ligne par défaut — l\'essentiel de son intelligence provient du fournisseur de LLM cloud que vous connectez. Cet avis détaille ce qu\'Aori fait réellement, quelles plateformes prennent en charge l\'inférence entièrement locale via Ollama, et où s\'arrête la promesse « local-first » pour laisser place à la dépendance au cloud.',
    metaDescription:
      'Avis Aori AI : un agent personnel local-first avec mémoire, personas et routines pour ordinateur et Android. Quand fonctionne-t-il hors ligne via Ollama, et quand dépend-il du cloud ?',
    twitterDescription:
      'Avis Aori AI 2026 : application d\'agent personnel pour ordinateur et Android avec mémoire, personas et routines. Local via Ollama sur ordinateur uniquement — analyse honnête du modèle hybride.',
    audience:
      'Utilisateurs qui hésitent entre faire tourner un agent IA personnel via Aori avec leur propre clé API cloud, ou entièrement en local via Ollama sur ordinateur — couvre le support des plateformes, les fonctionnalités et l\'arbitrage local/cloud.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visiter le site officiel d\'Aori →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**Aori vaut le coup si vous voulez un seul agent IA personnel — avec mémoire, personas et routines planifiées — sur ordinateur et Android, et que vous êtes prêt à apporter votre propre clé API de LLM.** Il ne devient un outil entièrement local et hors ligne que lorsque vous choisissez [Ollama](https://ollama.com) comme backend de modèle sur ordinateur ; l\'application Android et tout backend cloud continuent d\'envoyer vos prompts sur internet à ce fournisseur, même si Aori lui-même ne stocke aucune copie de vos données sur ses propres serveurs.',
    quickAnswerTop: {
      fr: {
        question: 'Aori AI est-elle une application IA entièrement locale et hors ligne ?',
        answer:
          'Non — Aori est hybride. Elle fonctionne sur votre appareil et n\'envoie jamais de données à un backend exploité par Aori, mais elle achemine par défaut les prompts via un fournisseur cloud (OpenAI, Anthropic, Google Gemini, Groq, DeepSeek ou OpenRouter) avec votre propre clé API. L\'inférence entièrement locale et hors ligne n\'a lieu que si vous choisissez Ollama comme backend, une option qui n\'existe que sur ordinateur.',
        bullets: [
          'Ordinateur (Windows/macOS/Linux) prend en charge Ollama pour des modèles entièrement locaux ; Android non.',
          'Les clés API sont stockées localement sur votre appareil et vont directement au fournisseur — jamais via un backend Aori.',
          'Fonctionnalités : mémoire persistante, personas via commandes slash, canaux Telegram/WhatsApp, intégration Obsidian/Notion, routines planifiées.',
          'Plateformes disponibles actuellement : Windows, macOS, Linux, Android. iOS n\'est pas encore disponible.',
          'Le tarif n\'est pas publié — Aori lui-même est gratuit en bêta ; vous payez le fournisseur de LLM que vous connectez (Groq propose un niveau gratuit).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Aori', anchor: 'what-is-aori' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Plateformes et tarifs', anchor: 'platforms-pricing' },
      { label: 'Local vs cloud : ce que « local-first » signifie vraiment', anchor: 'local-vs-cloud' },
      { label: 'À qui s\'adresse Aori', anchor: 'who-should-use' },
      { label: 'À qui Aori ne convient pas', anchor: 'who-should-not-use' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori est un agent IA personnel local-first pour ordinateur et mobile qui conserve les clés API et l\'historique de discussion sur votre appareil, mais ne fonctionne entièrement hors ligne que si vous choisissez Ollama comme backend de modèle sur ordinateur.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori est une application pour votre ordinateur ou votre téléphone Android qui agit comme un assistant personnel doté de mémoire. Vous connectez votre propre compte et votre propre clé d\'un fournisseur comme OpenAI ou Anthropic pour la faire fonctionner, ou — sur ordinateur uniquement — vous pouvez l\'utiliser avec des modèles locaux gratuits via Ollama pour que rien ne parte sur internet.',
          },
        ],
        items: [
          'Aori est une application d\'agent IA personnel local-first pour ordinateur et mobile, actuellement en bêta publique sur [aori-ai.app](https://www.aori-ai.app/).',
          'Aucun backend exploité par Aori ne stocke vos données — les clés API et les conversations sont stockées localement sur votre appareil et envoyées directement au fournisseur de LLM que vous choisissez.',
          'Fournisseurs cloud pris en charge : OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek et OpenRouter. Sur ordinateur uniquement, Aori prend aussi en charge [Ollama](https://ollama.com) pour des modèles entièrement locaux.',
          'Fonctionnalités clés : mémoire persistante, personas activables via commandes slash (par exemple `/leo`, `/planner`), discussion multicanal (dans l\'application, Telegram, WhatsApp) avec historique isolé par canal, intégration de connaissances (dossiers locaux, Obsidian, Notion) et routines proactives planifiées en langage courant.',
          'Plateformes : ordinateur sous Windows, macOS et Linux ; mobile sur Android dès maintenant, iOS à venir plus tard.',
          'Le tarif n\'est pas publié. Aori est utilisable gratuitement dans sa bêta actuelle ; le coût réel est celui facturé par le fournisseur de LLM que vous connectez (Groq propose un niveau gratuit).',
          'Le fonctionnement entièrement hors ligne se limite à l\'ordinateur avec Ollama sélectionné — toute autre configuration, y compris l\'application Android, dépend d\'une connexion internet vers un fournisseur cloud.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Ce qu\'est Aori',
        content: [
          '**Aori est une application d\'agent IA personnel qui fonctionne sur votre ordinateur ou votre téléphone plutôt que via un site de discussion hébergé.** Elle est disponible sur [aori-ai.app](https://www.aori-ai.app/) et se trouve actuellement en bêta publique sur Windows, macOS, Linux et Android.',
          'Le choix de conception central est le local-first : l\'application elle-même fonctionne sur votre appareil, et Aori n\'exploite pas de serveur backend qui stockerait vos conversations. Vous connectez votre propre clé API d\'un fournisseur de LLM pris en charge — OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek ou OpenRouter — et Aori stocke cette clé localement, envoyant les requêtes directement depuis votre appareil vers le fournisseur choisi.',
          'Sur ordinateur, Aori ajoute une seconde voie : la prise en charge d\'[Ollama](https://ollama.com), qui permet d\'exécuter des modèles open source entièrement sur votre propre matériel, sans aucun fournisseur cloud impliqué. Cette voie est réservée à l\'ordinateur — l\'application Android n\'a pas d\'option de modèle local et dépend toujours d\'un fournisseur cloud.',
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L\'ensemble des fonctionnalités d\'Aori vise à faire en sorte qu\'un agent unique reste cohérent dans le temps, entre les sujets et les canaux — pas à vous donner un modèle plus gros à qui parler.** Les cinq fonctionnalités ci-dessous sont celles qui le distinguent d\'une simple interface de discussion posée devant une API de LLM.',
        ],
        items: [
          '**Mémoire persistante** — Aori apprend de vos conversations et de tout fichier de connaissances que vous lui fournissez, en reportant ce contexte lors des sessions futures au lieu de repartir de zéro à chaque ouverture.',
          '**Personas via commandes slash** — changez de persona d\'assistant en pleine conversation avec des commandes comme `/leo` ou `/planner`, chacune adaptée à un rôle ou une tâche différente.',
          '**Discussion multicanal** — parlez à Aori dans l\'application, ou via Telegram ou WhatsApp, chaque canal conservant son propre historique de conversation isolé.',
          '**Intégration de connaissances** — dirigez Aori vers des dossiers locaux, un coffre Obsidian ou un espace de travail Notion pour qu\'il puisse s\'appuyer sur vos notes et documents existants en répondant.',
          '**Routines proactives** — décrivez une tâche récurrente en langage courant, comme un point du matin, et Aori l\'exécute selon ce calendrier sans que vous ayez à le lui redemander à chaque fois.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Plateformes et tarifs',
        columns: ['Plateforme / offre', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme / offre': 'Windows, macOS, Linux (ordinateur)',
            'À quoi s\'attendre': 'Ensemble complet de fonctionnalités. Prend en charge les fournisseurs cloud (OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter) et, fait unique, [Ollama](https://ollama.com) pour des modèles entièrement locaux.',
            'Remarque importante': 'C\'est le seul environnement où Aori peut fonctionner sans aucune dépendance au cloud, à condition de choisir Ollama et un modèle que votre matériel peut exécuter.',
          },
          {
            'Plateforme / offre': 'Android',
            'À quoi s\'attendre': 'Les mêmes fonctionnalités de personas, mémoire, canaux et routines que sur ordinateur, connectées à un fournisseur de LLM cloud via votre propre clé API.',
            'Remarque importante': 'Aucun support Ollama ou modèle local sur Android — chaque discussion dépend d\'une connexion internet vers le fournisseur choisi.',
          },
          {
            'Plateforme / offre': 'iOS',
            'À quoi s\'attendre': 'Pas encore disponible.',
            'Remarque importante': 'Aori a indiqué qu\'iOS arriverait « plus tard », sans date de sortie publiée au moment de la rédaction.',
          },
          {
            'Plateforme / offre': 'Tarifs',
            'À quoi s\'attendre': 'Non publiés. L\'application est utilisable dans sa bêta publique actuelle sans frais d\'abonnement pour Aori lui-même.',
            'Remarque importante': 'Votre coût réel est fixé par le fournisseur de LLM dont vous utilisez la clé API — Groq propose un niveau gratuit ; OpenAI, Anthropic, Gemini, DeepSeek et OpenRouter facturent via votre propre compte chez ce fournisseur.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs cloud : ce que « local-first » signifie vraiment',
        content: [
          '**« Local-first » décrit où Aori stocke vos données, pas où vos prompts sont traités.** Dans toutes les configurations, vos clés API et votre historique de conversation résident sur votre appareil plutôt que sur un serveur exploité par Aori. Mais que le modèle lui-même s\'exécute sur votre appareil dépend entièrement du backend que vous choisissez.',
          'Cette distinction compte car les deux affirmations — « vos données restent sur votre appareil » et « votre IA fonctionne sur votre appareil » — ne sont pas la même chose, et Aori ne réunit les deux à la fois que dans une seule configuration précise.',
        ],
        decisionBlock: {
          title: 'Comment lire la configuration local vs cloud d\'Aori',
          localIf: [
            'Vous êtes sur ordinateur (Windows, macOS ou Linux)',
            'Vous choisissez Ollama comme backend de modèle',
            'Le modèle choisi est un modèle que votre matériel peut exécuter à une vitesse acceptable',
          ],
          cloudIf: [
            'Vous êtes sur Android, où Ollama n\'est pas du tout pris en charge',
            'Vous choisissez OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek ou OpenRouter comme backend',
            'Vous voulez accéder aux modèles de pointe les plus grands et les plus performants',
          ],
          quick: [
            'Ordinateur + Ollama = les prompts et l\'inférence restent entièrement sur votre machine',
            'Toute autre combinaison (ordinateur ou Android + un fournisseur cloud) = les prompts quittent votre appareil et partent vers l\'API de ce fournisseur',
            'Aori lui-même n\'exploite jamais de backend stockant vos données, dans aucun cas — la frontière local/cloud passe par le backend du modèle, pas par les serveurs propres d\'Aori',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse Aori',
        items: [
          '**Utilisateurs qui veulent un seul agent sur ordinateur et Android.** La mémoire persistante, les personas et les routines vous suivent d\'une plateforme à l\'autre tant que vous utilisez le même compte fournisseur.',
          '**Utilisateurs à l\'aise pour apporter leur propre clé API et payer directement les fournisseurs.** Aori est l\'interface ; vous gérez séparément la facturation avec OpenAI, Anthropic, Google, Groq, DeepSeek ou OpenRouter.',
          '**Utilisateurs qui veulent des routines planifiées en langage courant**, comme un point du matin récurrent, sans configurer de logiciel d\'automatisation à part.',
          '**Utilisateurs sur ordinateur qui veulent l\'option d\'une inférence entièrement locale et hors ligne** via [Ollama](https://ollama.com), sans renoncer à la possibilité de basculer vers un fournisseur cloud pour les tâches plus difficiles.',
          '**Utilisateurs de Telegram ou WhatsApp** qui veulent retrouver le même agent et la même mémoire dans ces applications, chacune avec son propre historique de conversation isolé.',
          '**Utilisateurs disposant d\'un coffre Obsidian ou d\'un espace Notion** qu\'ils veulent qu\'un agent consulte directement, plutôt que de copier-coller des notes dans une fenêtre de discussion.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Aori ne convient pas',
        items: [
          '**Utilisateurs d\'iPhone ou d\'iPad.** Aori n\'a pas encore d\'application iOS ; l\'entreprise décrit le support iOS comme « à venir plus tard », sans date publiée.',
          '**Utilisateurs qui veulent une application entièrement hors ligne, sans aucune option cloud.** La voie locale d\'Aori n\'existe que sur ordinateur avec Ollama sélectionné — la plupart de ses fonctionnalités utiles supposent un fournisseur cloud connecté ; considérez-la donc comme un outil hybride, pas comme une application hors ligne privée par défaut.',
          '**Utilisateurs qui ne veulent pas gérer une facturation fournisseur séparée.** Aori n\'a pas d\'abonnement groupé couvrant l\'usage du modèle ; vous ouvrez et financez votre propre compte chez le fournisseur choisi.',
          '**Utilisateurs qui ont besoin d\'un tarif publié et prévisible avant de s\'engager.** Aori n\'a pas publié de tarif pour l\'application elle-même, et le coût du fournisseur varie selon le modèle et le fournisseur choisis.',
          '**Utilisateurs Android qui veulent spécifiquement des modèles locaux hors ligne.** Le support Ollama est réservé à l\'ordinateur ; Android dépend toujours d\'un fournisseur cloud.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Aori est-elle une application IA entièrement hors ligne et locale ?',
            a: 'Non, pas par défaut. Aori est hybride : elle stocke vos clés API et vos conversations localement plutôt que sur un serveur exploité par Aori, mais le modèle qui génère les réponses fonctionne dans le cloud sauf si vous choisissez spécifiquement Ollama comme backend sur ordinateur. Seule cette configuration — ordinateur plus Ollama — est entièrement locale et hors ligne.',
          },
          {
            q: 'Quelles plateformes Aori prend-elle en charge ?',
            a: 'Des applications de bureau pour Windows, macOS et Linux, plus une application mobile pour Android. Une application iOS n\'est pas encore disponible ; Aori la décrit comme « à venir plus tard », sans date de sortie publiée.',
          },
          {
            q: 'Aori stocke-t-elle mes données sur ses propres serveurs ?',
            a: 'Non. Aori n\'exploite pas de backend qui stockerait vos conversations. Vos clés API sont stockées localement sur votre appareil, et les requêtes partent directement de votre appareil vers le fournisseur de LLM que vous connectez, jamais via un serveur exploité par Aori.',
          },
          {
            q: 'Quels fournisseurs de LLM Aori prend-elle en charge ?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek et OpenRouter, tous connectés via votre propre clé API (« bring your own key »). Sur ordinateur, Aori prend aussi en charge Ollama pour des modèles qui s\'exécutent entièrement sur votre propre matériel.',
          },
          {
            q: 'Combien coûte Aori ?',
            a: 'Aori n\'a pas publié de tarif ; l\'application est utilisable dans sa bêta publique actuelle sans frais pour Aori lui-même. Votre coût réel provient du fournisseur de LLM que vous connectez — Groq propose un niveau gratuit, tandis qu\'OpenAI, Anthropic, Gemini, DeepSeek et OpenRouter facturent directement via votre propre compte chez ce fournisseur.',
          },
          {
            q: 'Puis-je utiliser Aori entièrement hors ligne sur Android ?',
            a: 'Non. Le support d\'Ollama et des modèles locaux dans Aori est réservé à l\'ordinateur. Sur Android, chaque conversation dépend d\'une connexion internet vers le fournisseur de LLM cloud que vous avez configuré.',
          },
          {
            q: 'Que sont les personas d\'Aori ?',
            a: 'Les personas sont différentes configurations d\'assistant entre lesquelles vous pouvez basculer en pleine conversation via des commandes slash, comme `/leo` ou `/planner`. Chaque persona est adaptée à un rôle ou une tâche différente, tout en partageant la même mémoire sous-jacente.',
          },
          {
            q: 'Aori peut-elle se connecter à Telegram et WhatsApp ?',
            a: 'Oui. Aori prend en charge la discussion multicanal via l\'interface de l\'application, Telegram et WhatsApp, chaque canal conservant son propre historique de conversation isolé plutôt que de partager un seul fil entre les trois.',
          },
          {
            q: 'Aori s\'intègre-t-elle à Obsidian ou Notion ?',
            a: 'Oui. Aori peut utiliser des dossiers locaux, un coffre Obsidian ou un espace Notion comme sources de connaissances, afin de pouvoir répondre en s\'appuyant sur vos notes et documents existants plutôt que sur ce que vous tapez uniquement dans la discussion.',
          },
          {
            q: 'Que sont les routines proactives d\'Aori ?',
            a: 'Les routines sont des tâches récurrentes que vous décrivez en langage courant, comme un point du matin, qu\'Aori exécute ensuite automatiquement selon ce calendrier sans que vous ayez à envoyer une nouvelle demande à chaque fois.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          '**Aori est une application d\'agent personnel bien délimitée si vous l\'évaluez comme hybride, et non comme un outil d\'IA locale privé par défaut.** La combinaison de mémoire persistante, de personas via commandes slash, de discussion multicanal (Telegram et WhatsApp avec historiques isolés), d\'intégration de connaissances Obsidian/Notion et de routines proactives en langage courant forme un ensemble de fonctionnalités cohérent visant à rendre un agent unique cohérent selon les contextes. Stocker les clés API et les conversations localement, sans backend exploité par Aori, est une propriété de confidentialité réelle et vérifiable quel que soit le backend de modèle choisi. Mais la promesse d\'un fonctionnement entièrement local et hors ligne s\'applique à une seule configuration précise : ordinateur avec Ollama sélectionné. Toute autre voie — fournisseurs cloud sur ordinateur, ou tout usage sur Android — envoie vos prompts vers une API tierce par internet. Les utilisateurs qui comprennent et acceptent ce compromis, et qui sont à l\'aise pour apporter et payer leur propre clé API de LLM, obtiennent un agent multiplateforme réellement utile. Ceux qui cherchent une application entièrement hors ligne par défaut, ou une application iOS, devraient pour l\'instant se tourner ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel d\'Aori](https://www.aori-ai.app/) — disponibilité des plateformes, liste des fonctionnalités et statut actuel de la bêta publique.',
          '[Ollama](https://ollama.com) — le runtime de modèles locaux qu\'Aori utilise sur ordinateur pour une inférence entièrement hors ligne.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Hermes Agent : agent IA local autonome](/fr/power-local-llm/hermes-agent-review-2026) — un avis sur un agent local-first comparable sur ce site.',
          '[Avis BabyAGI : agent local autonome](/fr/power-local-llm/babyagi-review-autonomous-agent) — un autre framework d\'agent autonome couvert ici.',
          '[Faire tourner un LLM local avec Obsidian](/fr/power-local-llm/local-llm-with-obsidian-2026) — connecter des modèles locaux à votre coffre Obsidian, la même voie d\'intégration qu\'Aori prend en charge.',
          '[Remplacer Grammarly et Notion AI par des modèles locaux](/fr/power-local-llm/replace-grammarly-notion-ai-with-local) — utiliser une IA locale aux côtés d\'un espace Notion.',
          '[Répertoire de logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire complet des applications et outils d\'IA locale pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-ja.webp',
    title: 'Aori AIレビュー(2026年):デスクトップとモバイル対応のローカルファースト個人向けAIエージェント',
    seoTitle: 'Aori AIレビュー2026:ローカルファーストAIエージェント',
    intro:
      'Aoriはデスクトップとスマートフォンで動作する個人向けAIエージェントアプリで、永続的な記憶、切り替え可能なペルソナ、スケジュール実行されるルーティンを備えています。APIキーと会話はAoriが運営するサーバーではなく端末にローカル保存されますが、デフォルトで完全オフラインのアプリではありません — 知能の大部分は接続したクラウドLLMプロバイダーに由来します。このレビューではAoriが実際に何をするか、どのプラットフォームがOllama経由の完全ローカル推論に対応しているか、そして「ローカルファースト」という主張がどこで終わりクラウド依存がどこから始まるかを検証します。',
    metaDescription:
      'Aori AIレビュー:デスクトップとAndroid向けの記憶・ペルソナ・ルーティンを備えたローカルファースト個人エージェント。Ollamaで完全オフライン動作する条件とクラウド依存する条件を解説。',
    twitterDescription:
      'Aori AIレビュー2026:記憶・ペルソナ・ルーティンを備えたデスクトップ/Android向け個人エージェントアプリ。デスクトップのOllamaのみローカル動作 — ハイブリッドモデルを正直に解説。',
    audience:
      '自分のクラウドAPIキーでAoriを使うか、デスクトップでOllamaを使い完全ローカルで運用するか判断したいユーザー向け。プラットフォーム対応、機能セット、ローカルとクラウドのトレードオフを解説します。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Aori公式サイトを見る →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**記憶・ペルソナ・スケジュールルーティンを備えた1つの個人向けAIエージェントをデスクトップとAndroidで使いたく、自分のLLM APIキーを用意する意思があるなら、Aoriは検討する価値があります。** デスクトップで[Ollama](https://ollama.com)をモデルバックエンドに選んだ場合にのみ完全にローカルでオフラインのツールになります。Androidアプリやクラウドプロバイダーのバックエンドを使う場合は、Ori自身は自社サーバーにデータのコピーを保存しないものの、プロンプトはインターネット経由でそのプロバイダーに送信され続けます。',
    quickAnswerTop: {
      ja: {
        question: 'Aori AIは完全にローカルでオフライン動作するAIアプリですか?',
        answer:
          'いいえ — Aoriはハイブリッドです。端末上で動作し、Aoriが運営するバックエンドにデータを送ることはありませんが、デフォルトでは自分のAPIキーを使ってクラウドプロバイダー(OpenAI、Anthropic、Google Gemini、Groq、DeepSeek、OpenRouter)経由でプロンプトを処理します。完全にローカルでオフラインの推論は、バックエンドにOllamaを選んだ場合のみで、これはデスクトップでのみ利用可能なオプションです。',
        bullets: [
          'デスクトップ(Windows/macOS/Linux)は完全ローカルモデル向けにOllamaに対応。Androidは非対応。',
          'APIキーは端末にローカル保存され、プロバイダーへ直接送信される — Aoriのバックエンドを経由しない。',
          '機能:永続的な記憶、スラッシュコマンドのペルソナ、Telegram/WhatsAppチャンネル、Obsidian/Notion連携、スケジュールルーティン。',
          '現在利用可能なプラットフォーム:Windows、macOS、Linux、Android。iOSはまだ未対応。',
          '料金は未公開 — Aori自体はベータ版で無料。接続するLLMプロバイダーに対して料金を支払う(Groqには無料枠あり)。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Aoriとは', anchor: 'what-is-aori' },
      { label: '機能', anchor: 'features' },
      { label: 'プラットフォームと料金', anchor: 'platforms-pricing' },
      { label: 'ローカルvsクラウド:「ローカルファースト」の実際の意味', anchor: 'local-vs-cloud' },
      { label: 'Aoriが向いている人', anchor: 'who-should-use' },
      { label: 'Aoriが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'AoriはAPIキーとチャット履歴を端末に保持するデスクトップ・モバイル向けローカルファースト個人AIエージェントだが、デスクトップでOllamaをモデルバックエンドに選んだ場合にのみ完全オフラインで動作する。',
          },
          {
            type: 'plain-terms',
            text:
              'Aoriはパソコンや Android スマートフォン向けのアプリで、記憶を持つ個人アシスタントのように動作する。OpenAIやAnthropicなどのプロバイダーの自分のアカウントとキーを接続して動かすか、あるいは — デスクトップのみ — Ollama経由の無料ローカルモデルで動かせば、何もインターネットに送られない。',
          },
        ],
        items: [
          'Aoriはデスクトップとモバイル向けのローカルファースト個人AIエージェントアプリで、現在[aori-ai.app](https://www.aori-ai.app/)で公開ベータ中。',
          'Aoriが運営するバックエンドはデータを保存しない — APIキーと会話は端末にローカル保存され、選んだLLMプロバイダーに直接送信される。',
          '対応するクラウドプロバイダー:OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek、OpenRouter。デスクトップのみ、完全ローカルモデル向けに[Ollama](https://ollama.com)にも対応。',
          '主要機能:永続的な記憶、スラッシュコマンドで切り替え可能なペルソナ(例:`/leo`、`/planner`)、チャンネルごとに履歴が分離されたマルチチャンネルチャット(アプリ内、Telegram、WhatsApp)、ナレッジ連携(ローカルフォルダ、Obsidian、Notion)、平易な英語で指示するプロアクティブなルーティン。',
          'プラットフォーム:デスクトップはWindows、macOS、Linux。モバイルは現在Androidのみ、iOSは今後対応予定。',
          '料金は未公開。Aori自体は現在の公開ベータでは無料で利用可能 — 実際のコストは接続するLLMプロバイダー次第(Groqには無料枠あり)。',
          '完全オフライン動作はOllamaを選択したデスクトップに限られる — Androidアプリを含む他のすべての構成は、クラウドプロバイダーへのインターネット接続に依存する。',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Aoriとは',
        content: [
          '**Aoriはホスト型のチャットサイトではなく、デスクトップやスマートフォン上で動作する個人向けAIエージェントアプリです。** [aori-ai.app](https://www.aori-ai.app/)で公開されており、現在Windows、macOS、Linux、Androidで公開ベータ中です。',
          '中心的な設計思想はローカルファーストです。アプリ自体が端末上で動作し、Aoriは会話を保存するバックエンドサーバーを運営していません。OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek、OpenRouterといった対応LLMプロバイダーの自分のAPIキーを接続すると、Aoriはそのキーを端末にローカル保存し、選んだプロバイダーへ端末から直接リクエストを送信します。',
          'デスクトップでは、Aoriはもう一つの経路を追加しています。[Ollama](https://ollama.com)への対応により、クラウドプロバイダーを一切介さずオープンソースモデルを完全に自分のハードウェア上で実行できます。この経路はデスクトップ限定で、Androidアプリにはローカルモデルの選択肢がなく、常にクラウドプロバイダーに依存します。',
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Aoriの機能セットは、より大きなモデルと話すことではなく、時間・トピック・チャンネルを超えて1つのエージェントが一貫して感じられるようにすることに主眼を置いています。** 以下の5つの機能が、LLM APIの前に置かれた単なるチャットインターフェースとの違いです。',
        ],
        items: [
          '**永続的な記憶** — Aoriは会話や提供したナレッジファイルから学習し、開くたびにゼロから始めるのではなく、その文脈を今後のセッションに引き継ぐ。',
          '**スラッシュコマンドによるペルソナ** — `/leo`や`/planner`のようなコマンドで会話の途中でもアシスタントのペルソナを切り替えられ、それぞれ異なる役割やタスク向けに調整されている。',
          '**マルチチャンネルチャット** — アプリ内、Telegram、WhatsAppでAoriと会話でき、各チャンネルは独立した会話履歴を保持する。',
          '**ナレッジ連携** — ローカルフォルダ、Obsidianのvault、Notionのワークスペースを指定すると、回答時に既存のノートやドキュメントを参照できる。',
          '**プロアクティブなルーティン** — 朝のブリーフィングのような繰り返しタスクを平易な言葉で記述すると、Aoriはその都度指示しなくてもそのスケジュールで自動実行する。',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'プラットフォームと料金',
        columns: ['プラットフォーム / プラン', '期待できること', '重要な注意点'],
        rows: [
          {
            'プラットフォーム / プラン': 'Windows、macOS、Linux(デスクトップ)',
            '期待できること': 'フル機能セット。クラウドプロバイダー(OpenAI、Anthropic、Gemini、Groq、DeepSeek、OpenRouter)に加え、独自に[Ollama](https://ollama.com)による完全ローカルモデルに対応。',
            '重要な注意点': 'Ollamaと自分のハードウェアで実行可能なモデルを選べば、Aoriがクラウドに一切依存せず動作できる唯一の環境。',
          },
          {
            'プラットフォーム / プラン': 'Android',
            '期待できること': 'デスクトップと同じペルソナ・記憶・チャンネル・ルーティン機能を、自分のAPIキーでクラウドLLMプロバイダーに接続して利用。',
            '重要な注意点': 'AndroidではOllamaやローカルモデルに非対応 — すべてのチャットは選んだプロバイダーへのインターネット接続に依存する。',
          },
          {
            'プラットフォーム / プラン': 'iOS',
            '期待できること': 'まだ利用不可。',
            '重要な注意点': 'Aoriは「今後対応予定」としているが、執筆時点で公開されたリリース日はない。',
          },
          {
            'プラットフォーム / プラン': '料金',
            '期待できること': '未公開。現在の公開ベータではAori自体のサブスクリプション料金なしで利用可能。',
            '重要な注意点': '実際のコストは使用するAPIキーのLLMプロバイダーが決める — Groqには無料枠があり、OpenAI、Anthropic、Gemini、DeepSeek、OpenRouterはそのプロバイダーの自分のアカウントを通じて課金される。',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルvsクラウド:「ローカルファースト」の実際の意味',
        content: [
          '**「ローカルファースト」はAoriがデータをどこに保存するかを表すもので、プロンプトがどこで処理されるかを表すものではありません。** どの構成でも、APIキーと会話履歴はAoriが運営するサーバーではなく端末上にあります。しかし、モデル自体が端末上で動作するかどうかは、選んだバックエンドに完全に依存します。',
          'この違いが重要なのは、「データが端末に残る」ことと「AIが端末上で動作する」ことは同じではなく、Aoriがこの2つを同時に満たすのは特定の1つの構成のみだからです。',
        ],
        decisionBlock: {
          title: 'Aoriのローカルvsクラウド構成の読み解き方',
          localIf: [
            'デスクトップ(Windows、macOS、Linux)を使用している',
            'モデルバックエンドにOllamaを選択している',
            '選んだモデルが自分のハードウェアで許容できる速度で実行できるものである',
          ],
          cloudIf: [
            'Ollamaが全く対応していないAndroidを使用している',
            'バックエンドにOpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek、OpenRouterのいずれかを選択している',
            '最大級で最も高性能なフロンティアモデルにアクセスしたい',
          ],
          quick: [
            'デスクトップ + Ollama = プロンプトと推論は完全に自分のマシン内にとどまる',
            'それ以外の組み合わせ(デスクトップまたはAndroid + クラウドプロバイダー)= プロンプトは端末を離れ、そのプロバイダーのAPIへ送られる',
            'いずれの場合もAori自体はデータを保存するバックエンドを運営しない — ローカルとクラウドの境界線はモデルバックエンドにあり、Aori自身のサーバーにあるわけではない',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Aoriが向いている人',
        items: [
          '**デスクトップとAndroidで1つのエージェントを使いたい人。** 同じプロバイダーアカウントを使う限り、永続的な記憶、ペルソナ、ルーティンはプラットフォームをまたいで引き継がれる。',
          '**自分のAPIキーを用意し、プロバイダーに直接支払うことに抵抗がない人。** Aoriはインターフェースであり、OpenAI、Anthropic、Google、Groq、DeepSeek、OpenRouterとの課金は別途自分で管理する。',
          '**朝のブリーフィングのような繰り返しの用件を平易な言葉でスケジュールしたい人。** 別途自動化ソフトを設定する必要がない。',
          '**[Ollama](https://ollama.com)による完全にローカルでオフラインの推論という選択肢を持ちつつ**、難しいタスクではクラウドプロバイダーに切り替える選択肢も残しておきたいデスクトップユーザー。',
          '**TelegramやWhatsAppユーザー。** それぞれ独立した会話履歴を持ったまま、同じエージェントと記憶をそれらのアプリでも使いたい人。',
          '**Obsidianのvaultや Notionのワークスペースを持つユーザー。** チャット画面にノートをコピー&ペーストする代わりに、エージェントに直接参照させたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Aoriが向いていない人',
        items: [
          '**iPhoneやiPadユーザー。** AoriにはまだiOSアプリがなく、同社はiOS対応を公開日未定の「今後対応予定」としている。',
          '**クラウドの選択肢が一切ない完全オフラインアプリを求めるユーザー。** Aoriのローカル経路はOllamaを選択したデスクトップにしか存在せず、有用な機能の大半は接続されたクラウドプロバイダーを前提としているため、デフォルトでプライベートなオフラインアプリではなく、ハイブリッドツールとして扱うべき。',
          '**別途プロバイダーの課金を管理したくないユーザー。** Aoriにはモデル利用をカバーする一括サブスクリプションがなく、選んだプロバイダーで自分のアカウントを開設し費用を負担する必要がある。',
          '**契約前に公開された予測可能な料金が必要なユーザー。** Aoriはアプリ自体の料金を公開しておらず、プロバイダーのコストは選ぶモデルとプロバイダーによって変動する。',
          '**ローカルでオフラインのモデルを特に求めるAndroidユーザー。** Ollama対応はデスクトップ限定で、Androidは常にクラウドプロバイダーに依存する。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Aoriは完全にオフラインで動作するローカルAIアプリですか?',
            a: 'いいえ、デフォルトでは違います。Aoriはハイブリッドです。APIキーと会話はAoriが運営するサーバーではなく端末にローカル保存されますが、デスクトップで明示的にOllamaをバックエンドに選ばない限り、応答を生成するモデルはクラウドで動作します。デスクトップとOllamaの組み合わせという、その1つの構成のみが完全にローカルでオフラインです。',
          },
          {
            q: 'Aoriはどのプラットフォームに対応していますか?',
            a: 'Windows、macOS、Linux向けのデスクトップアプリと、Android向けのモバイルアプリです。iOSアプリはまだ利用できず、Aoriは公開されたリリース日のない「今後対応予定」としています。',
          },
          {
            q: 'Aoriは私のデータを自社サーバーに保存しますか?',
            a: 'いいえ。Aoriは会話を保存するバックエンドを運営していません。APIキーは端末にローカル保存され、リクエストはAoriが運営するサーバーを経由せず、端末から接続したLLMプロバイダーへ直接送られます。',
          },
          {
            q: 'Aoriはどのようなプロバイダーに対応していますか?',
            a: 'OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek、OpenRouterで、いずれも自分のAPIキー(「bring your own key」)で接続します。デスクトップでは、完全に自分のハードウェア上で動作するモデル向けにOllamaにも対応しています。',
          },
          {
            q: 'Aoriの料金はいくらですか?',
            a: 'Aoriは料金を公開していません。現在の公開ベータではAori自体への料金なしでアプリを利用できます。実際のコストは接続したLLMプロバイダーから発生します — Groqには無料枠があり、OpenAI、Anthropic、Gemini、DeepSeek、OpenRouterはそのプロバイダーの自分のアカウントを通じて直接課金されます。',
          },
          {
            q: 'Androidで完全にオフラインでAoriを使えますか?',
            a: 'いいえ。AoriのOllamaおよびローカルモデル対応はデスクトップ限定です。Androidでは、すべての会話が設定したクラウドLLMプロバイダーへのインターネット接続に依存します。',
          },
          {
            q: 'Aoriのペルソナとは何ですか?',
            a: 'ペルソナは、`/leo`や`/planner`のようなスラッシュコマンドで会話の途中でも切り替えられる、異なるアシスタント設定です。各ペルソナは異なる役割やタスク向けに調整されていますが、基盤となる記憶は共有されます。',
          },
          {
            q: 'AoriはTelegramやWhatsAppに接続できますか?',
            a: 'はい。Aoriはアプリ内インターフェース、Telegram、WhatsAppにまたがるマルチチャンネルチャットに対応しており、各チャンネルは3つで1つのスレッドを共有するのではなく、独立した会話履歴を保持します。',
          },
          {
            q: 'AoriはObsidianやNotionと連携しますか?',
            a: 'はい。Aoriはローカルフォルダ、Obsidianのvault、Notionのワークスペースをナレッジソースとして利用でき、チャットに入力した内容だけでなく、既存のノートやドキュメントを使って回答できます。',
          },
          {
            q: 'Aoriのプロアクティブなルーティンとは何ですか?',
            a: 'ルーティンは、朝のブリーフィングのように平易な言葉で記述する繰り返しタスクで、毎回新しいプロンプトを送らなくてもAoriがそのスケジュールで自動的に実行します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          '**Aoriをデフォルトでプライベートなローカルツールとしてではなく、ハイブリッドとして評価するなら、これはよく設計された個人向けエージェントアプリです。** 永続的な記憶、スラッシュコマンドによるペルソナ、マルチチャンネルチャット(履歴が分離されたTelegramとWhatsApp)、Obsidian/Notionのナレッジ連携、平易な言葉によるプロアクティブなルーティンの組み合わせは、1つのエージェントを様々な文脈で一貫して感じさせることを狙った一貫性のある機能セットです。Aoriが運営するバックエンドを使わずAPIキーと会話をローカルに保存することは、選んだモデルバックエンドに関わらず本物で検証可能なプライバシー特性です。しかし、完全にローカルでオフラインという主張は、Ollamaを選択したデスクトップという1つの構成にのみ当てはまります。それ以外の経路 — デスクトップでのクラウドプロバイダー利用、あるいはAndroidでのあらゆる利用 — は、プロンプトをインターネット経由で第三者のAPIへ送信します。このトレードオフを理解し受け入れ、自分のLLM APIキーを用意して費用を負担することに抵抗がないユーザーは、実際に有用なクロスプラットフォームエージェントを手に入れられます。デフォルトで完全にオフラインのアプリやiOSアプリを求める人は、今のところ他を探すべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Aori公式サイト](https://www.aori-ai.app/) — プラットフォーム対応状況、機能一覧、現在の公開ベータのステータス。',
          '[Ollama](https://ollama.com) — Aoriがデスクトップで完全オフライン推論に使用するローカルモデルのランタイム。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Hermes Agentレビュー:ローカル自律型AIエージェント](/ja/power-local-llm/hermes-agent-review-2026) — 本サイトで扱う比較可能なローカルファーストエージェントのレビュー。',
          '[BabyAGIレビュー:自律型ローカルエージェント](/ja/power-local-llm/babyagi-review-autonomous-agent) — 本サイトで扱う別の自律型エージェントフレームワーク。',
          '[Obsidianでローカルモデルを実行する](/ja/power-local-llm/local-llm-with-obsidian-2026) — Aoriが対応するのと同じ連携経路で、ローカルモデルをObsidianのvaultに接続する方法。',
          '[GrammarlyとNotion AIをローカルモデルで置き換える](/ja/power-local-llm/replace-grammarly-notion-ai-with-local) — Notionのワークスペースと合わせてローカルAIを使う方法。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) — 全プラットフォーム向けローカルAIアプリ・ツールの完全な一覧。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-ko.webp',
    title: 'Aori AI 리뷰(2026): 데스크톱과 모바일을 위한 로컬 퍼스트 개인 AI 에이전트',
    seoTitle: 'Aori AI 리뷰 2026: 로컬 퍼스트 개인 AI 에이전트',
    intro:
      'Aori는 데스크톱과 휴대폰에서 실행되는 개인 AI 에이전트 앱으로, 지속적인 기억, 전환 가능한 페르소나, 예약된 루틴을 제공합니다. API 키와 대화는 Aori가 운영하는 서버가 아닌 기기에 로컬로 저장되지만, 기본적으로 완전한 오프라인 앱은 아닙니다 — 지능의 대부분은 연결한 클라우드 LLM 제공업체에서 나옵니다. 이 리뷰는 Aori가 실제로 무엇을 하는지, 어떤 플랫폼이 Ollama를 통한 완전한 로컬 추론을 지원하는지, 그리고 "로컬 퍼스트"라는 주장이 어디에서 끝나고 클라우드 의존이 어디에서 시작되는지를 다룹니다.',
    metaDescription:
      'Aori AI 리뷰: 데스크톱과 Android용 기억, 페르소나, 루틴을 갖춘 로컬 퍼스트 개인 에이전트. Ollama로 완전히 오프라인 작동하는 경우와 클라우드에 의존하는 경우를 확인하세요.',
    twitterDescription:
      'Aori AI 리뷰 2026: 기억, 페르소나, 루틴을 갖춘 데스크톱/Android용 개인 에이전트 앱. 데스크톱의 Ollama에서만 로컬 작동 — 하이브리드 모델을 정직하게 분석합니다.',
    audience:
      '자신의 클라우드 API 키로 Aori를 통해 개인 AI 에이전트를 운영할지, 아니면 데스크톱에서 Ollama를 통해 완전히 로컬로 운영할지 결정하려는 사용자 — 플랫폼 지원, 기능, 로컬 대 클라우드 트레이드오프를 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Aori 공식 사이트 방문 →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**기억, 페르소나, 예약된 루틴을 갖춘 하나의 개인 AI 에이전트를 데스크톱과 Android에서 사용하고 싶고, 자신의 LLM API 키를 준비할 의향이 있다면 Aori는 사용할 가치가 있습니다.** 데스크톱에서 [Ollama](https://ollama.com)를 모델 백엔드로 선택했을 때만 완전히 로컬이며 오프라인으로 작동하는 도구가 됩니다. Android 앱이나 클라우드 제공업체 백엔드는 Aori 자체가 자체 서버에 데이터 사본을 저장하지 않더라도 여전히 프롬프트를 인터넷을 통해 해당 제공업체로 전송합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Aori AI는 완전히 로컬로 오프라인 작동하는 AI 앱입니까?',
        answer:
          '아니요 — Aori는 하이브리드입니다. 기기에서 실행되며 Aori가 운영하는 백엔드로 데이터를 전송하지 않지만, 기본적으로 자신의 API 키를 사용해 클라우드 제공업체(OpenAI, Anthropic, Google Gemini, Groq, DeepSeek, OpenRouter)를 통해 프롬프트를 처리합니다. 완전히 로컬로 오프라인 추론이 이루어지는 경우는 백엔드로 Ollama를 선택했을 때뿐이며, 이 옵션은 데스크톱에서만 존재합니다.',
        bullets: [
          '데스크톱(Windows/macOS/Linux)은 완전한 로컬 모델을 위해 Ollama를 지원하지만 Android는 지원하지 않습니다.',
          'API 키는 기기에 로컬로 저장되며 Aori 백엔드를 거치지 않고 제공업체로 직접 전송됩니다.',
          '기능: 지속적인 기억, 슬래시 명령 페르소나, Telegram/WhatsApp 채널, Obsidian/Notion 연동, 예약된 루틴.',
          '현재 사용 가능한 플랫폼: Windows, macOS, Linux, Android. iOS는 아직 제공되지 않습니다.',
          '가격은 공개되지 않았습니다 — Aori 자체는 베타 기간 동안 무료이며, 연결한 LLM 제공업체에 비용을 지불합니다(Groq는 무료 등급 제공).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Aori란 무엇인가', anchor: 'what-is-aori' },
      { label: '기능', anchor: 'features' },
      { label: '플랫폼 및 가격', anchor: 'platforms-pricing' },
      { label: '로컬 대 클라우드: "로컬 퍼스트"의 실제 의미', anchor: 'local-vs-cloud' },
      { label: 'Aori를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Aori를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori는 API 키와 채팅 기록을 기기에 보관하는 데스크톱/모바일용 로컬 퍼스트 개인 AI 에이전트지만, 데스크톱에서 Ollama를 모델 백엔드로 선택했을 때만 완전히 오프라인으로 작동합니다.',
          },
          {
            type: 'plain-terms',
            text:
              'Aori는 컴퓨터나 Android 휴대폰용 앱으로, 기억을 가진 개인 비서처럼 작동합니다. OpenAI나 Anthropic 같은 제공업체의 자신의 계정과 키를 연결해 실행하거나, 데스크톱에서만 Ollama를 통한 무료 로컬 모델로 실행하면 아무것도 인터넷으로 전송되지 않습니다.',
          },
        ],
        items: [
          'Aori는 데스크톱과 모바일용 로컬 퍼스트 개인 AI 에이전트 앱으로, 현재 [aori-ai.app](https://www.aori-ai.app/)에서 공개 베타 중입니다.',
          'Aori가 운영하는 백엔드는 데이터를 저장하지 않습니다 — API 키와 대화는 기기에 로컬로 저장되며 선택한 LLM 제공업체로 직접 전송됩니다.',
          '지원되는 클라우드 제공업체: OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, OpenRouter. 데스크톱에서만 완전한 로컬 모델을 위해 [Ollama](https://ollama.com)도 지원합니다.',
          '핵심 기능: 지속적인 기억, 슬래시 명령으로 전환 가능한 페르소나(예: `/leo`, `/planner`), 채널별로 분리된 기록을 가진 멀티채널 채팅(앱 내, Telegram, WhatsApp), 지식 연동(로컬 폴더, Obsidian, Notion), 평이한 언어로 예약하는 능동적 루틴.',
          '플랫폼: Windows, macOS, Linux 데스크톱; 현재 Android 모바일, iOS는 추후 지원 예정.',
          '가격은 공개되지 않았습니다. Aori는 현재 베타 기간 동안 무료로 사용할 수 있습니다 — 실제 비용은 연결한 LLM 제공업체에 따라 달라집니다(Groq는 무료 등급 제공).',
          '완전한 오프라인 작동은 Ollama를 선택한 데스크톱으로 제한됩니다 — Android 앱을 포함한 다른 모든 구성은 클라우드 제공업체로의 인터넷 연결에 의존합니다.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Aori란 무엇인가',
        content: [
          '**Aori는 호스팅된 채팅 웹사이트가 아니라 데스크톱이나 휴대폰에서 실행되는 개인 AI 에이전트 앱입니다.** [aori-ai.app](https://www.aori-ai.app/)에서 제공되며 현재 Windows, macOS, Linux, Android에서 공개 베타 중입니다.',
          '핵심 설계 방향은 로컬 퍼스트입니다. 앱 자체는 기기에서 실행되며, Aori는 대화를 저장하는 백엔드 서버를 운영하지 않습니다. OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, OpenRouter 등 지원되는 LLM 제공업체의 자신의 API 키를 연결하면, Aori는 해당 키를 로컬에 저장하고 기기에서 선택한 제공업체로 직접 요청을 전송합니다.',
          '데스크톱에서 Aori는 두 번째 경로를 추가합니다. [Ollama](https://ollama.com) 지원을 통해 클라우드 제공업체를 전혀 거치지 않고 자신의 하드웨어에서 완전히 오픈소스 모델을 실행할 수 있습니다. 이 경로는 데스크톱 전용이며, Android 앱에는 로컬 모델 옵션이 없어 항상 클라우드 제공업체에 의존합니다.',
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Aori의 기능은 더 큰 모델과 대화하게 해주는 것이 아니라, 시간·주제·채널에 걸쳐 하나의 에이전트가 일관되게 느껴지도록 만드는 데 중점을 둡니다.** 아래 다섯 가지 기능은 LLM API 앞에 놓인 단순한 채팅 인터페이스와 Aori를 구별해주는 요소입니다.',
        ],
        items: [
          '**지속적인 기억** — Aori는 대화와 제공한 지식 파일에서 학습하여, 열 때마다 처음부터 시작하는 대신 그 맥락을 이후 세션까지 이어갑니다.',
          '**슬래시 명령 페르소나** — `/leo`나 `/planner` 같은 명령으로 대화 도중에도 어시스턴트 페르소나를 전환할 수 있으며, 각 페르소나는 서로 다른 역할이나 작업에 맞춰져 있습니다.',
          '**멀티채널 채팅** — 앱 내부, Telegram, WhatsApp을 통해 Aori와 대화할 수 있으며, 각 채널은 독립된 대화 기록을 유지합니다.',
          '**지식 연동** — 로컬 폴더, Obsidian 볼트, Notion 워크스페이스를 지정하면 Aori가 답변할 때 기존 노트와 문서를 참조할 수 있습니다.',
          '**능동적 루틴** — 아침 브리핑처럼 반복되는 작업을 평이한 언어로 설명하면, Aori는 매번 요청하지 않아도 해당 일정에 따라 자동으로 실행합니다.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: '플랫폼 및 가격',
        columns: ['플랫폼 / 요금제', '기대할 수 있는 것', '중요 참고 사항'],
        rows: [
          {
            '플랫폼 / 요금제': 'Windows, macOS, Linux(데스크톱)',
            '기대할 수 있는 것': '전체 기능 제공. 클라우드 제공업체(OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter)를 지원하며, 독자적으로 완전한 로컬 모델을 위한 [Ollama](https://ollama.com)도 지원합니다.',
            '중요 참고 사항': 'Ollama와 하드웨어가 실행할 수 있는 모델을 선택하면 Aori가 클라우드 의존 없이 작동할 수 있는 유일한 환경입니다.',
          },
          {
            '플랫폼 / 요금제': 'Android',
            '기대할 수 있는 것': '데스크톱과 동일한 페르소나, 기억, 채널, 루틴 기능을 자신의 API 키로 클라우드 LLM 제공업체에 연결해 사용합니다.',
            '중요 참고 사항': 'Android에서는 Ollama나 로컬 모델을 지원하지 않습니다 — 모든 채팅은 선택한 제공업체로의 인터넷 연결에 의존합니다.',
          },
          {
            '플랫폼 / 요금제': 'iOS',
            '기대할 수 있는 것': '아직 제공되지 않습니다.',
            '중요 참고 사항': 'Aori는 iOS 지원이 "추후 제공될 예정"이라고 밝혔으며, 작성 시점 기준 공개된 출시일은 없습니다.',
          },
          {
            '플랫폼 / 요금제': '가격',
            '기대할 수 있는 것': '공개되지 않음. 현재 공개 베타에서는 Aori 자체에 대한 구독료 없이 앱을 사용할 수 있습니다.',
            '중요 참고 사항': '실제 비용은 사용하는 API 키의 LLM 제공업체가 결정합니다 — Groq는 무료 등급을 제공하며, OpenAI, Anthropic, Gemini, DeepSeek, OpenRouter는 해당 제공업체의 자신의 계정을 통해 직접 청구됩니다.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '로컬 대 클라우드: "로컬 퍼스트"의 실제 의미',
        content: [
          '**"로컬 퍼스트"는 Aori가 데이터를 어디에 저장하는지를 설명하는 것이지, 프롬프트가 어디에서 처리되는지를 설명하는 것이 아닙니다.** 어떤 구성이든 API 키와 대화 기록은 Aori가 운영하는 서버가 아닌 기기에 저장됩니다. 하지만 모델 자체가 기기에서 실행되는지는 전적으로 선택한 백엔드에 달려 있습니다.',
          '이 구분이 중요한 이유는 "데이터가 기기에 남는다"는 것과 "AI가 기기에서 작동한다"는 것이 같은 말이 아니며, Aori가 이 둘을 동시에 충족하는 경우는 하나의 특정 구성에서만 가능하기 때문입니다.',
        ],
        decisionBlock: {
          title: 'Aori의 로컬 대 클라우드 구성 이해하기',
          localIf: [
            '데스크톱(Windows, macOS, Linux)을 사용 중이다',
            '모델 백엔드로 Ollama를 선택한다',
            '선택한 모델이 하드웨어에서 허용 가능한 속도로 실행할 수 있는 모델이다',
          ],
          cloudIf: [
            'Ollama를 전혀 지원하지 않는 Android를 사용 중이다',
            '백엔드로 OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, OpenRouter 중 하나를 선택한다',
            '가장 크고 강력한 프런티어 모델에 접근하고 싶다',
          ],
          quick: [
            '데스크톱 + Ollama = 프롬프트와 추론이 전적으로 자신의 기기에 머무릅니다',
            '그 외 모든 조합(데스크톱 또는 Android + 클라우드 제공업체) = 프롬프트가 기기를 떠나 해당 제공업체의 API로 전송됩니다',
            'Aori 자체는 어떤 경우에도 데이터를 저장하는 백엔드를 운영하지 않습니다 — 로컬과 클라우드의 경계는 모델 백엔드에 있는 것이지 Aori 자체 서버에 있는 것이 아닙니다',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Aori를 사용해야 하는 사람',
        items: [
          '**데스크톱과 Android에서 하나의 에이전트를 원하는 사용자.** 같은 제공업체 계정을 사용하는 한 지속적인 기억, 페르소나, 루틴이 플랫폼 간에 따라옵니다.',
          '**자신의 API 키를 준비하고 제공업체에 직접 비용을 지불하는 데 거부감이 없는 사용자.** Aori는 인터페이스일 뿐이며, OpenAI, Anthropic, Google, Groq, DeepSeek, OpenRouter와의 결제는 별도로 직접 관리합니다.',
          '**아침 브리핑처럼 반복되는 일정을 평이한 언어로 예약하고 싶은 사용자.** 별도의 자동화 소프트웨어를 설정할 필요가 없습니다.',
          '**[Ollama](https://ollama.com)를 통한 완전한 로컬 오프라인 추론이라는 선택지를 원하면서도**, 더 어려운 작업에는 클라우드 제공업체로 전환할 수 있는 선택지도 포기하고 싶지 않은 데스크톱 사용자.',
          '**Telegram이나 WhatsApp 사용자.** 각각 독립된 대화 기록을 가진 채로 해당 앱에서도 동일한 에이전트와 기억을 사용하고 싶은 사용자.',
          '**Obsidian 볼트나 Notion 워크스페이스가 있는 사용자.** 채팅 창에 노트를 복사해 붙여넣는 대신 에이전트가 직접 참조하기를 원하는 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Aori를 사용하지 말아야 하는 사람',
        items: [
          '**iPhone이나 iPad 사용자.** Aori는 아직 iOS 앱이 없으며, 회사는 iOS 지원을 공개된 날짜 없이 "추후 제공"이라고 설명하고 있습니다.',
          '**클라우드 옵션이 전혀 없는 완전한 오프라인 앱을 원하는 사용자.** Aori의 로컬 경로는 Ollama를 선택한 데스크톱에만 존재하며, 유용한 기능 대부분은 연결된 클라우드 제공업체를 전제로 하므로, 기본적으로 프라이버시가 보장되는 오프라인 앱이 아니라 하이브리드 도구로 취급해야 합니다.',
          '**별도의 제공업체 결제를 관리하고 싶지 않은 사용자.** Aori에는 모델 사용을 포함하는 통합 구독이 없으며, 선택한 제공업체에서 자신의 계정을 개설하고 비용을 부담해야 합니다.',
          '**결정 전에 공개되고 예측 가능한 가격이 필요한 사용자.** Aori는 앱 자체의 가격을 공개하지 않았으며, 제공업체 비용은 선택한 모델과 제공업체에 따라 달라집니다.',
          '**특히 로컬 오프라인 모델을 원하는 Android 사용자.** Ollama 지원은 데스크톱 전용이며, Android는 항상 클라우드 제공업체에 의존합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Aori는 완전히 오프라인으로 작동하는 로컬 AI 앱입니까?',
            a: '아니요, 기본적으로는 그렇지 않습니다. Aori는 하이브리드입니다. API 키와 대화는 Aori가 운영하는 서버가 아닌 기기에 로컬로 저장되지만, 데스크톱에서 명시적으로 Ollama를 백엔드로 선택하지 않는 한 응답을 생성하는 모델은 클라우드에서 실행됩니다. 데스크톱과 Ollama의 조합이라는 그 한 가지 구성만이 완전히 로컬이며 오프라인입니다.',
          },
          {
            q: 'Aori는 어떤 플랫폼을 지원합니까?',
            a: 'Windows, macOS, Linux용 데스크톱 앱과 Android용 모바일 앱입니다. iOS 앱은 아직 제공되지 않으며, Aori는 이를 공개된 출시일 없이 "추후 제공"이라고 설명하고 있습니다.',
          },
          {
            q: 'Aori는 제 데이터를 자체 서버에 저장합니까?',
            a: '아니요. Aori는 대화를 저장하는 백엔드를 운영하지 않습니다. API 키는 기기에 로컬로 저장되며, 요청은 Aori가 운영하는 서버를 거치지 않고 기기에서 연결한 LLM 제공업체로 직접 전송됩니다.',
          },
          {
            q: 'Aori는 어떤 LLM 제공업체를 지원합니까?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek, OpenRouter이며, 모두 자신의 API 키("bring your own key")로 연결합니다. 데스크톱에서는 완전히 자신의 하드웨어에서 실행되는 모델을 위해 Ollama도 지원합니다.',
          },
          {
            q: 'Aori 비용은 얼마입니까?',
            a: 'Aori는 가격을 공개하지 않았습니다. 앱은 현재 공개 베타에서 Aori 자체에 대한 비용 없이 사용할 수 있습니다. 실제 비용은 연결한 LLM 제공업체에서 발생합니다 — Groq는 무료 등급을 제공하며, OpenAI, Anthropic, Gemini, DeepSeek, OpenRouter는 해당 제공업체의 자신의 계정을 통해 직접 청구됩니다.',
          },
          {
            q: 'Android에서 Aori를 완전히 오프라인으로 사용할 수 있습니까?',
            a: '아니요. Aori의 Ollama 및 로컬 모델 지원은 데스크톱 전용입니다. Android에서는 모든 대화가 설정한 클라우드 LLM 제공업체로의 인터넷 연결에 의존합니다.',
          },
          {
            q: 'Aori의 페르소나란 무엇입니까?',
            a: '페르소나는 `/leo`나 `/planner` 같은 슬래시 명령으로 대화 도중에도 전환할 수 있는 서로 다른 어시스턴트 설정입니다. 각 페르소나는 서로 다른 역할이나 작업에 맞춰져 있지만 동일한 기본 기억을 공유합니다.',
          },
          {
            q: 'Aori는 Telegram과 WhatsApp에 연결할 수 있습니까?',
            a: '예. Aori는 앱 내 인터페이스, Telegram, WhatsApp에 걸친 멀티채널 채팅을 지원하며, 각 채널은 세 곳이 하나의 스레드를 공유하는 대신 독립된 대화 기록을 유지합니다.',
          },
          {
            q: 'Aori는 Obsidian이나 Notion과 연동됩니까?',
            a: '예. Aori는 로컬 폴더, Obsidian 볼트, Notion 워크스페이스를 지식 소스로 사용할 수 있어, 채팅에 입력한 내용뿐 아니라 기존 노트와 문서를 활용해 답변할 수 있습니다.',
          },
          {
            q: 'Aori의 능동적 루틴이란 무엇입니까?',
            a: '루틴은 아침 브리핑처럼 평이한 언어로 설명하는 반복 작업으로, Aori는 매번 새로운 요청을 보내지 않아도 해당 일정에 따라 자동으로 실행합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          '**Aori를 기본적으로 프라이버시가 보장되는 로컬 AI 도구가 아니라 하이브리드로 평가한다면, 이는 범위가 잘 설정된 개인 에이전트 앱입니다.** 지속적인 기억, 슬래시 명령 페르소나, 멀티채널 채팅(기록이 분리된 Telegram과 WhatsApp), Obsidian/Notion 지식 연동, 평이한 언어의 능동적 루틴의 조합은 하나의 에이전트가 여러 맥락에서 일관되게 느껴지도록 만드는 것을 목표로 한 일관된 기능 세트입니다. Aori가 운영하는 백엔드 없이 API 키와 대화를 로컬로 저장하는 것은 선택한 모델 백엔드와 무관하게 실제적이고 검증 가능한 프라이버시 특성입니다. 하지만 완전히 로컬이며 오프라인이라는 주장은 정확히 하나의 구성, 즉 Ollama를 선택한 데스크톱에만 적용됩니다. 그 외의 모든 경로 — 데스크톱에서의 클라우드 제공업체 사용, 또는 Android에서의 모든 사용 — 는 프롬프트를 인터넷을 통해 제3자 API로 전송합니다. 이러한 트레이드오프를 이해하고 받아들이며, 자신의 LLM API 키를 준비하고 비용을 지불하는 데 거부감이 없는 사용자는 실제로 유용한 크로스 플랫폼 에이전트를 얻게 됩니다. 기본적으로 완전한 오프라인 앱이나 iOS 앱을 찾는 사용자는 당분간 다른 곳을 찾아보아야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Aori 공식 사이트](https://www.aori-ai.app/) — 플랫폼 지원 현황, 기능 목록, 현재 공개 베타 상태.',
          '[Ollama](https://ollama.com) — Aori가 데스크톱에서 완전한 오프라인 추론에 사용하는 로컬 모델 런타임.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Hermes Agent 리뷰: 로컬 자율 AI 에이전트](/ko/power-local-llm/hermes-agent-review-2026) — 이 사이트에서 다룬 비교 가능한 로컬 퍼스트 에이전트 리뷰.',
          '[BabyAGI 리뷰: 자율 로컬 에이전트](/ko/power-local-llm/babyagi-review-autonomous-agent) — 이 사이트에서 다룬 또 다른 자율 에이전트 프레임워크.',
          '[Obsidian과 함께 로컬 LLM 실행하기](/ko/power-local-llm/local-llm-with-obsidian-2026) — Aori가 지원하는 것과 동일한 연동 방식으로 로컬 모델을 Obsidian 볼트에 연결하는 방법.',
          '[Grammarly와 Notion AI를 로컬 모델로 대체하기](/ko/power-local-llm/replace-grammarly-notion-ai-with-local) — Notion 워크스페이스와 함께 로컬 AI를 사용하는 방법.',
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼을 아우르는 로컬 AI 앱 및 도구 전체 디렉토리.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-pt.webp',
    title: 'Avaliação do Aori AI (2026): Agente Pessoal Local-First para Desktop e Mobile',
    seoTitle: 'Avaliação do Aori AI 2026: Agente Pessoal Local-First',
    intro:
      'Aori é um aplicativo de agente de IA pessoal que roda no seu computador e no seu celular, com memória persistente, personas alternáveis e rotinas agendadas. Ele guarda suas chaves de API e conversas localmente, em vez de em um servidor operado pelo Aori, mas não é um aplicativo totalmente offline por padrão — a maior parte da sua inteligência vem do provedor de LLM em nuvem que você conectar. Esta avaliação mostra o que o Aori realmente faz, quais plataformas suportam inferência totalmente local via Ollama, e onde termina a promessa "local-first" e começa a dependência da nuvem.',
    metaDescription:
      'Avaliação do Aori AI: um agente pessoal local-first com memória, personas e rotinas para desktop e Android. Veja quando ele funciona totalmente offline via Ollama e quando depende de provedores em nuvem.',
    twitterDescription:
      'Avaliação do Aori AI 2026: app de agente pessoal para desktop e Android com memória, personas e rotinas. Local via Ollama só no desktop — uma análise honesta do modelo híbrido.',
    audience:
      'Usuários decidindo entre rodar um agente de IA pessoal pelo Aori usando sua própria chave de API em nuvem, ou totalmente local via Ollama no desktop — cobre suporte de plataformas, conjunto de recursos e a troca entre local e nuvem.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar o site oficial do Aori →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**O Aori vale a pena se você quer um único agente de IA pessoal — com memória, personas e rotinas agendadas — no desktop e no Android, e está disposto a trazer sua própria chave de API de LLM.** Ele só se torna uma ferramenta totalmente local e offline quando você escolhe o [Ollama](https://ollama.com) como backend de modelo no desktop; o aplicativo Android e qualquer backend em nuvem continuam enviando seus prompts pela internet para esse provedor, mesmo que o próprio Aori não armazene nenhuma cópia dos seus dados em seus próprios servidores.',
    quickAnswerTop: {
      pt: {
        question: 'O Aori AI é um aplicativo de IA totalmente local e offline?',
        answer:
          'Não — o Aori é híbrido. Ele roda no seu dispositivo e nunca envia dados para um backend operado pelo Aori, mas por padrão encaminha os prompts por meio de um provedor em nuvem (OpenAI, Anthropic, Google Gemini, Groq, DeepSeek ou OpenRouter) usando sua própria chave de API. A inferência totalmente local e offline só acontece quando você escolhe o Ollama como backend, e essa opção existe apenas no desktop.',
        bullets: [
          'Desktop (Windows/macOS/Linux) suporta Ollama para modelos totalmente locais; o Android não.',
          'As chaves de API ficam armazenadas localmente no seu dispositivo e vão direto ao provedor — nunca por um backend do Aori.',
          'Recursos: memória persistente, personas por comandos de barra, canais de Telegram/WhatsApp, integração com Obsidian/Notion, rotinas agendadas.',
          'Plataformas disponíveis agora: Windows, macOS, Linux, Android. O iOS ainda não está disponível.',
          'O preço não está publicado — o Aori em si é gratuito na beta; você paga o provedor de LLM que conectar (o Groq tem um nível gratuito).',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Aori', anchor: 'what-is-aori' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Plataformas e preços', anchor: 'platforms-pricing' },
      { label: 'Local vs. nuvem: o que "local-first" realmente significa', anchor: 'local-vs-cloud' },
      { label: 'Quem deve usar o Aori', anchor: 'who-should-use' },
      { label: 'Quem não deve usar o Aori', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'O Aori é um agente de IA pessoal local-first para desktop e mobile que mantém chaves de API e histórico de chat no seu dispositivo, mas só funciona totalmente offline quando você escolhe o Ollama como backend de modelo no desktop.',
          },
          {
            type: 'plain-terms',
            text:
              'O Aori é um aplicativo para o seu computador ou celular Android que funciona como um assistente pessoal com memória. Você conecta sua própria conta e chave de um provedor como OpenAI ou Anthropic para usá-lo, ou — só no desktop — pode rodá-lo com modelos locais gratuitos via Ollama, de forma que nada vai para a internet.',
          },
        ],
        items: [
          'O Aori é um aplicativo de agente de IA pessoal local-first para desktop e mobile, atualmente em beta pública em [aori-ai.app](https://www.aori-ai.app/).',
          'Nenhum backend operado pelo Aori armazena seus dados — chaves de API e conversas ficam armazenadas localmente no seu dispositivo e são enviadas diretamente ao provedor de LLM escolhido.',
          'Provedores em nuvem suportados: OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek e OpenRouter. Só no desktop, o Aori também suporta o [Ollama](https://ollama.com) para modelos totalmente locais.',
          'Recursos principais: memória persistente, personas alternáveis por comandos de barra (por exemplo, `/leo`, `/planner`), chat multicanal (no app, Telegram, WhatsApp) com histórico isolado por canal, integração de conhecimento (pastas locais, Obsidian, Notion) e rotinas proativas agendadas em linguagem simples.',
          'Plataformas: desktop em Windows, macOS e Linux; mobile em Android agora, com iOS chegando mais tarde.',
          'O preço não está publicado. O Aori é gratuito na beta atual; o custo real é o que o provedor de LLM conectado cobrar (o Groq tem um nível gratuito).',
          'A operação totalmente offline se limita ao desktop com Ollama selecionado — qualquer outra configuração, incluindo o aplicativo Android, depende de uma conexão com a internet a um provedor em nuvem.',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'O que é o Aori',
        content: [
          '**O Aori é um aplicativo de agente de IA pessoal que roda no seu computador ou celular em vez de um site de chat hospedado.** Está disponível em [aori-ai.app](https://www.aori-ai.app/) e atualmente está em beta pública para Windows, macOS, Linux e Android.',
          'A escolha central de design é local-first: o próprio aplicativo roda no seu dispositivo, e o Aori não opera um servidor backend que armazene suas conversas. Você conecta sua própria chave de API de um provedor de LLM suportado — OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek ou OpenRouter — e o Aori armazena essa chave localmente, enviando solicitações diretamente do seu dispositivo ao provedor escolhido.',
          'No desktop, o Aori adiciona um segundo caminho: suporte ao [Ollama](https://ollama.com), que permite rodar modelos de código aberto totalmente no seu próprio hardware, sem nenhum provedor em nuvem envolvido. Esse caminho é exclusivo do desktop — o aplicativo Android não tem opção de modelo local e sempre depende de um provedor em nuvem.',
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos do Aori foca em fazer um único agente parecer consistente ao longo do tempo, dos temas e dos canais — não em dar a você um modelo maior para conversar.** Os cinco recursos abaixo são os que o diferenciam de uma simples interface de chat na frente de uma API de LLM.',
        ],
        items: [
          '**Memória persistente** — o Aori aprende com suas conversas e quaisquer arquivos de conhecimento que você fornecer, levando esse contexto para sessões futuras em vez de começar do zero toda vez que você o abre.',
          '**Personas por comandos de barra** — alterne entre personas do assistente no meio da conversa com comandos como `/leo` ou `/planner`, cada uma ajustada para um papel ou tarefa diferente.',
          '**Chat multicanal** — converse com o Aori dentro do app, ou pelo Telegram ou WhatsApp, com cada canal mantendo seu próprio histórico de conversa isolado.',
          '**Integração de conhecimento** — aponte o Aori para pastas locais, um vault do Obsidian ou um workspace do Notion para que ele possa consultar suas notas e documentos existentes ao responder.',
          '**Rotinas proativas** — descreva uma tarefa recorrente em linguagem simples, como um resumo matinal, e o Aori a executa nesse cronograma sem que você precise pedir toda vez.',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Plataformas e preços',
        columns: ['Plataforma / Plano', 'O que esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma / Plano': 'Windows, macOS, Linux (desktop)',
            'O que esperar': 'Conjunto completo de recursos. Suporta provedores em nuvem (OpenAI, Anthropic, Gemini, Groq, DeepSeek, OpenRouter) e, de forma exclusiva, o [Ollama](https://ollama.com) para modelos totalmente locais.',
            'Nota importante': 'Este é o único ambiente em que o Aori pode rodar sem nenhuma dependência da nuvem, desde que você escolha o Ollama e um modelo que seu hardware consiga executar.',
          },
          {
            'Plataforma / Plano': 'Android',
            'O que esperar': 'Os mesmos recursos de personas, memória, canais e rotinas do desktop, conectados a um provedor de LLM em nuvem usando sua própria chave de API.',
            'Nota importante': 'Sem suporte a Ollama ou modelo local no Android — todo chat depende de uma conexão com a internet ao provedor escolhido.',
          },
          {
            'Plataforma / Plano': 'iOS',
            'O que esperar': 'Ainda não disponível.',
            'Nota importante': 'O Aori afirmou que o iOS "chega mais tarde", sem data de lançamento publicada no momento da redação.',
          },
          {
            'Plataforma / Plano': 'Preços',
            'O que esperar': 'Não publicados. O aplicativo é utilizável na beta pública atual sem taxa de assinatura para o Aori em si.',
            'Nota importante': 'Seu custo real é definido pelo provedor de LLM cuja chave de API você usa — o Groq oferece um nível gratuito; OpenAI, Anthropic, Gemini, DeepSeek e OpenRouter cobram pela sua própria conta com esse provedor.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. nuvem: o que "local-first" realmente significa',
        content: [
          '**"Local-first" descreve onde o Aori armazena seus dados, não onde seus prompts são processados.** Em toda configuração, suas chaves de API e histórico de conversa ficam no seu dispositivo em vez de em um servidor operado pelo Aori. Mas se o próprio modelo roda no seu dispositivo depende inteiramente de qual backend você escolhe.',
          'Essa distinção importa porque as duas afirmações — "seus dados ficam no seu dispositivo" e "sua IA roda no seu dispositivo" — não são a mesma coisa, e o Aori só entrega as duas ao mesmo tempo em uma configuração específica.',
        ],
        decisionBlock: {
          title: 'Como interpretar a configuração local vs. nuvem do Aori',
          localIf: [
            'Você está no desktop (Windows, macOS ou Linux)',
            'Você escolhe o Ollama como backend de modelo',
            'O modelo escolhido é um que seu hardware consegue rodar em velocidade aceitável',
          ],
          cloudIf: [
            'Você está no Android, onde o Ollama não é suportado de forma alguma',
            'Você escolhe OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek ou OpenRouter como backend',
            'Você quer acesso aos maiores e mais capazes modelos de fronteira',
          ],
          quick: [
            'Desktop + Ollama = os prompts e a inferência ficam inteiramente na sua máquina',
            'Qualquer outra combinação (desktop ou Android + um provedor em nuvem) = os prompts saem do seu dispositivo e vão para a API desse provedor',
            'O Aori em si nunca opera um backend que armazene seus dados em nenhum dos casos — a linha entre local e nuvem passa pelo backend do modelo, não pelos próprios servidores do Aori',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar o Aori',
        items: [
          '**Usuários que querem um único agente no desktop e no Android.** Memória persistente, personas e rotinas acompanham você entre plataformas, desde que use a mesma conta de provedor.',
          '**Usuários confortáveis em trazer sua própria chave de API e pagar os provedores diretamente.** O Aori é a interface; você gerencia a cobrança com OpenAI, Anthropic, Google, Groq, DeepSeek ou OpenRouter separadamente.',
          '**Usuários que querem rotinas agendadas em linguagem simples**, como um resumo matinal recorrente, sem configurar um software de automação separado.',
          '**Usuários de desktop que querem a opção de inferência totalmente local e offline** via [Ollama](https://ollama.com), sem abrir mão da opção de trocar para um provedor em nuvem em tarefas mais difíceis.',
          '**Usuários de Telegram ou WhatsApp** que querem o mesmo agente e memória disponíveis nesses aplicativos, cada um com seu próprio histórico de conversa isolado.',
          '**Usuários com um vault do Obsidian ou um workspace do Notion** que querem que um agente consulte diretamente, em vez de copiar e colar notas em uma janela de chat.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deve usar o Aori',
        items: [
          '**Usuários de iPhone ou iPad.** O Aori ainda não tem aplicativo iOS; a empresa descreve o suporte a iOS como "chegando mais tarde", sem data publicada.',
          '**Usuários que querem um aplicativo totalmente offline sem nenhuma opção de nuvem.** O caminho local do Aori só existe no desktop com Ollama selecionado — a maioria dos seus recursos úteis pressupõe um provedor em nuvem conectado, então trate-o como uma ferramenta híbrida, não como um app offline com privacidade por padrão.',
          '**Usuários que não querem gerenciar cobrança separada com um provedor.** O Aori não tem assinatura combinada que cubra o uso do modelo; você abre e custeia sua própria conta com o provedor escolhido.',
          '**Usuários que precisam de um preço publicado e previsível antes de se comprometer.** O Aori não publicou preços para o aplicativo em si, e o custo do provedor varia conforme o modelo e o provedor escolhidos.',
          '**Usuários Android que especificamente querem modelos locais e offline.** O suporte ao Ollama é exclusivo do desktop; o Android sempre depende de um provedor em nuvem.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Aori é um aplicativo de IA totalmente offline e local?',
            a: 'Não, não por padrão. O Aori é híbrido: armazena suas chaves de API e conversas localmente em vez de em um servidor operado pelo Aori, mas o modelo que gera as respostas roda na nuvem, a menos que você escolha especificamente o Ollama como backend no desktop. Somente essa configuração — desktop mais Ollama — é totalmente local e offline.',
          },
          {
            q: 'Quais plataformas o Aori suporta?',
            a: 'Aplicativos de desktop para Windows, macOS e Linux, além de um aplicativo mobile para Android. Um aplicativo iOS ainda não está disponível; o Aori o descreve como "chegando mais tarde", sem data de lançamento publicada.',
          },
          {
            q: 'O Aori armazena meus dados em seus próprios servidores?',
            a: 'Não. O Aori não opera um backend que armazene suas conversas. Suas chaves de API ficam armazenadas localmente no seu dispositivo, e as solicitações vão diretamente do seu dispositivo ao provedor de LLM conectado — não por um servidor operado pelo Aori.',
          },
          {
            q: 'Quais provedores de LLM o Aori suporta?',
            a: 'OpenAI, Anthropic Claude, Google Gemini, Groq, DeepSeek e OpenRouter, todos conectados usando sua própria chave de API ("traga sua própria chave"). No desktop, o Aori também suporta o Ollama para modelos que rodam totalmente no seu próprio hardware.',
          },
          {
            q: 'Quanto custa o Aori?',
            a: 'O Aori não publicou preços; o aplicativo é utilizável na beta pública atual sem custo para o Aori em si. Seu custo real vem do provedor de LLM conectado — o Groq oferece um nível gratuito, enquanto OpenAI, Anthropic, Gemini, DeepSeek e OpenRouter cobram diretamente pela sua própria conta com esse provedor.',
          },
          {
            q: 'Posso rodar o Aori totalmente offline no Android?',
            a: 'Não. O suporte a Ollama e modelos locais no Aori é exclusivo do desktop. No Android, toda conversa depende de uma conexão com a internet ao provedor de LLM em nuvem configurado.',
          },
          {
            q: 'O que são as personas do Aori?',
            a: 'Personas são configurações de assistente diferentes entre as quais você pode alternar no meio da conversa usando comandos de barra, como `/leo` ou `/planner`. Cada persona é ajustada para um papel ou tarefa diferente, compartilhando a mesma memória subjacente.',
          },
          {
            q: 'O Aori pode se conectar ao Telegram e WhatsApp?',
            a: 'Sim. O Aori suporta chat multicanal pela interface do app, Telegram e WhatsApp, com cada canal mantendo seu próprio histórico de conversa isolado, em vez de compartilhar uma única conversa entre os três.',
          },
          {
            q: 'O Aori se integra com Obsidian ou Notion?',
            a: 'Sim. O Aori pode usar pastas locais, um vault do Obsidian ou um workspace do Notion como fontes de conhecimento, podendo responder usando suas notas e documentos existentes em vez de apenas o que você digita no chat.',
          },
          {
            q: 'O que são as rotinas proativas do Aori?',
            a: 'Rotinas são tarefas recorrentes que você descreve em linguagem simples, como um resumo matinal, que o Aori então executa automaticamente nesse cronograma sem que você precise enviar um novo prompt toda vez.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          '**O Aori é um aplicativo de agente pessoal bem delimitado se você o avaliar como híbrido, não como uma ferramenta de IA local com privacidade por padrão.** A combinação de memória persistente, personas por comandos de barra, chat multicanal (Telegram e WhatsApp com históricos isolados), integração de conhecimento com Obsidian/Notion e rotinas proativas em linguagem simples é um conjunto de recursos coerente, voltado a fazer um único agente parecer consistente em diferentes contextos. Armazenar chaves de API e conversas localmente, sem um backend operado pelo Aori, é uma propriedade de privacidade real e verificável, independentemente do backend de modelo escolhido. Mas a afirmação de operação totalmente local e offline se aplica a exatamente uma configuração: desktop com Ollama selecionado. Qualquer outro caminho — provedores em nuvem no desktop, ou qualquer uso no Android — envia seus prompts para uma API de terceiros pela internet. Usuários que entendem e aceitam essa troca, e que estão confortáveis em trazer e pagar sua própria chave de API de LLM, obtêm um agente multiplataforma genuinamente útil. Quem procura um aplicativo totalmente offline por padrão, ou um aplicativo iOS, deve procurar em outro lugar por enquanto.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial do Aori](https://www.aori-ai.app/) — disponibilidade de plataformas, lista de recursos e status atual da beta pública.',
          '[Ollama](https://ollama.com) — o runtime de modelos locais que o Aori usa no desktop para inferência totalmente offline.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Avaliação do Hermes Agent: agente de IA local autônomo](/pt/power-local-llm/hermes-agent-review-2026) — uma avaliação comparável de um agente local-first neste site.',
          '[Avaliação do BabyAGI: agente local autônomo](/pt/power-local-llm/babyagi-review-autonomous-agent) — outro framework de agente autônomo coberto aqui.',
          '[Rodar um LLM local com o Obsidian](/pt/power-local-llm/local-llm-with-obsidian-2026) — conectando modelos locais ao seu vault do Obsidian, o mesmo caminho de integração que o Aori suporta.',
          '[Substituir o Grammarly e o Notion AI por modelos locais](/pt/power-local-llm/replace-grammarly-notion-ai-with-local) — usando IA local junto de um workspace do Notion.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório completo de apps e ferramentas de IA local para todas as plataformas.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/aori-ai-personal-agent-review-hero-zh.webp',
    title: 'Aori AI 评测(2026):面向桌面和移动端的本地优先个人代理',
    seoTitle: 'Aori AI 评测 2026:本地优先个人 AI 代理',
    intro:
      'Aori 是一款个人 AI 代理应用,可在你的电脑和手机上运行,具备持久记忆、可切换的人设(persona)以及可安排的例行任务。它将你的 API 密钥和对话保存在本地设备上,而不是 Aori 运营的服务器上,但默认情况下它并非完全离线的应用 —— 它的大部分智能来自你连接的云端 LLM 提供商。本评测介绍 Aori 实际能做什么、哪些平台支持通过 Ollama 实现完全本地推理,以及"本地优先"的说法在哪里结束、云端依赖从哪里开始。',
    metaDescription:
      'Aori AI 评测:一款面向桌面和 Android 的本地优先个人代理,具备记忆、人设和例行任务功能。了解它何时通过 Ollama 完全离线运行,何时依赖云端提供商。',
    twitterDescription:
      'Aori AI 评测 2026:面向桌面和 Android 的个人代理应用,具备记忆、人设和例行任务。仅桌面端 Ollama 支持本地运行 —— 诚实拆解这一混合模式。',
    audience:
      '正在决定是通过自己的云端 API 密钥使用 Aori,还是在桌面端通过 Ollama 完全本地运行个人 AI 代理的用户 —— 涵盖平台支持、功能集以及本地与云端的取舍。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '访问 Aori 官方网站 →', url: 'https://[www.aori-ai.app](https://www.aori-ai.app/)/', productName: 'Aori', productCategory: 'software' },
    ],
    primaryTerm: 'Aori AI review',
    targetKeywords: [
      'aori ai review',
      'aori ai app',
      'aori personal agent',
      'aori local llm',
      'aori ollama',
      'aori ai android',
      'aori ai desktop',
      'aori ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows PC', 'Mac', 'Linux PC', 'Android'],
    leadAnswerBlock:
      '**如果你想在桌面端和 Android 上使用同一个具备记忆、人设和例行任务的个人 AI 代理,并且愿意自带 LLM API 密钥,那么 Aori 值得一用。** 只有在桌面端选择 [Ollama](https://ollama.com) 作为模型后端时,它才会成为完全本地、离线的工具;Android 应用以及任何云端后端仍会将你的提示词通过互联网发送给相应提供商 —— 即便 Aori 本身不会在自己的服务器上保存任何数据副本。',
    quickAnswerTop: {
      zh: {
        question: 'Aori AI 是完全本地、离线运行的 AI 应用吗?',
        answer:
          '不是 —— Aori 是混合模式。它在你的设备上运行,从不向 Aori 运营的后端发送数据,但默认情况下会使用你自己的 API 密钥,通过云端提供商(OpenAI、Anthropic、Google Gemini、Groq、DeepSeek 或 OpenRouter)转发提示词。只有当你选择 Ollama 作为后端时才会实现完全本地、离线的推理,而这一选项仅在桌面端提供。',
        bullets: [
          '桌面端(Windows/macOS/Linux)支持 Ollama 实现完全本地模型;Android 不支持。',
          'API 密钥保存在本地设备上,直接发送给提供商 —— 从不经过 Aori 的后端。',
          '功能:持久记忆、斜杠命令人设、Telegram/WhatsApp 频道、Obsidian/Notion 集成、可安排的例行任务。',
          '目前已上线的平台:Windows、macOS、Linux、Android。iOS 尚未推出。',
          '定价未公开 —— Aori 本身在测试阶段免费;费用取决于你连接的 LLM 提供商(Groq 提供免费额度)。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Aori 是什么', anchor: 'what-is-aori' },
      { label: '功能', anchor: 'features' },
      { label: '平台与定价', anchor: 'platforms-pricing' },
      { label: '本地 vs 云端:"本地优先"到底意味着什么', anchor: 'local-vs-cloud' },
      { label: '谁适合使用 Aori', anchor: 'who-should-use' },
      { label: '谁不适合使用 Aori', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '参考来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Aori 是一款面向桌面和移动端的本地优先个人 AI 代理,将 API 密钥和聊天记录保存在你的设备上,但只有在桌面端选择 Ollama 作为模型后端时才会完全离线运行。',
          },
          {
            type: 'plain-terms',
            text:
              'Aori 是一款电脑或 Android 手机应用,像一个具有记忆能力的个人助理。你可以连接 OpenAI 或 Anthropic 等提供商的账号和密钥来使用它,或者 —— 仅在桌面端 —— 通过 Ollama 使用免费的本地模型运行,这样任何数据都不会发送到互联网。',
          },
        ],
        items: [
          'Aori 是一款面向桌面和移动端的本地优先个人 AI 代理应用,目前在 [aori-ai.app](https://www.aori-ai.app/) 上公开测试。',
          '没有 Aori 运营的后端会保存你的数据 —— API 密钥和对话保存在本地设备上,并直接发送给你选择的 LLM 提供商。',
          '支持的云端提供商:OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek 和 OpenRouter。仅在桌面端,Aori 还支持 [Ollama](https://ollama.com) 实现完全本地模型。',
          '核心功能:持久记忆、可通过斜杠命令切换的人设(例如 `/leo`、`/planner`)、多渠道聊天(应用内、Telegram、WhatsApp)且每个渠道的记录相互隔离、知识集成(本地文件夹、Obsidian、Notion),以及用简单语言安排的主动例行任务。',
          '平台:桌面端支持 Windows、macOS 和 Linux;移动端目前支持 Android,iOS 将在后续推出。',
          '定价未公开。Aori 目前在测试阶段可免费使用;真正的费用取决于你连接的 LLM 提供商(Groq 提供免费额度)。',
          '完全离线运行仅限于选择 Ollama 的桌面端 —— 其他任何配置,包括 Android 应用,都依赖于与云端提供商的互联网连接。',
        ],
      },
      whatIsAori: {
        id: 'what-is-aori',
        title: 'Aori 是什么',
        content: [
          '**Aori 是一款个人 AI 代理应用,运行在你的电脑或手机上,而不是通过托管的聊天网站运行。** 它可在 [aori-ai.app](https://www.aori-ai.app/) 获取,目前在 Windows、macOS、Linux 和 Android 上公开测试。',
          '其核心设计理念是本地优先:应用本身运行在你的设备上,Aori 不运营存储你对话记录的后端服务器。你连接自己在受支持 LLM 提供商(OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek 或 OpenRouter)处的 API 密钥,Aori 会将该密钥保存在本地,并直接从你的设备向所选提供商发送请求。',
          '在桌面端,Aori 还提供第二条路径:支持 [Ollama](https://ollama.com),让你完全在自己的硬件上运行开源模型,完全不涉及任何云端提供商。这条路径仅限桌面端 —— Android 应用没有本地模型选项,始终依赖云端提供商。',
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Aori 的功能集重点在于让一个代理在时间、话题和渠道之间保持一致的体验 —— 而不是给你一个更大的模型去对话。** 以下五项功能是它区别于普通 LLM API 前端聊天界面的关键所在。',
        ],
        items: [
          '**持久记忆** —— Aori 会从你的对话和你提供的任何知识文件中学习,并将这些上下文延续到未来的会话中,而不是每次打开都从零开始。',
          '**斜杠命令人设** —— 使用 `/leo` 或 `/planner` 等命令,可在对话中途切换助手人设,每种人设针对不同的角色或任务进行了调校。',
          '**多渠道聊天** —— 在应用内、Telegram 或 WhatsApp 中与 Aori 对话,每个渠道保留各自独立隔离的对话记录。',
          '**知识集成** —— 将 Aori 指向本地文件夹、Obsidian 知识库(vault)或 Notion 工作区,使其在回答时能够参考你现有的笔记和文档。',
          '**主动例行任务** —— 用简单语言描述一项周期性任务,例如晨间简报,Aori 会按该时间表自动执行,无需你每次都重新提示。',
        ],
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: '平台与定价',
        columns: ['平台 / 方案', '可以期待什么', '重要提示'],
        rows: [
          {
            '平台 / 方案': 'Windows、macOS、Linux(桌面端)',
            '可以期待什么': '完整功能集。支持云端提供商(OpenAI、Anthropic、Gemini、Groq、DeepSeek、OpenRouter),并独家支持 [Ollama](https://ollama.com) 实现完全本地模型。',
            '重要提示': '只有在这个环境中,只要选择 Ollama 和你硬件能够运行的模型,Aori 才能完全不依赖云端运行。',
          },
          {
            '平台 / 方案': 'Android',
            '可以期待什么': '与桌面端相同的人设、记忆、渠道和例行任务功能,通过你自己的 API 密钥连接到云端 LLM 提供商。',
            '重要提示': 'Android 上不支持 Ollama 或本地模型 —— 每次聊天都依赖于与所选提供商的互联网连接。',
          },
          {
            '平台 / 方案': 'iOS',
            '可以期待什么': '尚未推出。',
            '重要提示': 'Aori 表示 iOS 支持"稍后推出",截至本文撰写时尚未公布发布日期。',
          },
          {
            '平台 / 方案': '定价',
            '可以期待什么': '未公开。在当前公开测试阶段,应用可免费使用,无需向 Aori 本身支付订阅费。',
            '重要提示': '你的实际成本取决于你使用其 API 密钥的 LLM 提供商 —— Groq 提供免费额度;OpenAI、Anthropic、Gemini、DeepSeek 和 OpenRouter 则通过你在该提供商处的账号直接计费。',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '本地 vs 云端:"本地优先"到底意味着什么',
        content: [
          '**"本地优先"描述的是 Aori 在哪里存储你的数据,而不是你的提示词在哪里被处理。** 在任何配置下,你的 API 密钥和对话记录都保存在你的设备上,而不是 Aori 运营的服务器上。但模型本身是否在你的设备上运行,完全取决于你选择的后端。',
          '这一区别很重要,因为"你的数据留在设备上"和"你的 AI 在设备上运行"这两种说法并不相同,而 Aori 只有在一种特定配置下才能同时满足这两点。',
        ],
        decisionBlock: {
          title: '如何理解 Aori 的本地 vs 云端配置',
          localIf: [
            '你使用桌面端(Windows、macOS 或 Linux)',
            '你选择 Ollama 作为模型后端',
            '你选择的模型是你的硬件能够以可接受速度运行的模型',
          ],
          cloudIf: [
            '你使用 Android,该平台完全不支持 Ollama',
            '你选择 OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek 或 OpenRouter 作为后端',
            '你希望访问最大、能力最强的前沿模型',
          ],
          quick: [
            '桌面端 + Ollama = 提示词和推理完全留在你的设备上',
            '其他任何组合(桌面端或 Android + 云端提供商)= 提示词离开你的设备,发送到该提供商的 API',
            '无论哪种情况,Aori 本身都不会运营存储你数据的后端 —— 本地与云端的界线在于模型后端,而不在于 Aori 自己的服务器',
          ],
        },
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用 Aori',
        items: [
          '**希望在桌面端和 Android 上使用同一个代理的用户。** 只要使用同一个提供商账号,持久记忆、人设和例行任务就会在各平台间保持同步。',
          '**愿意自带 API 密钥并直接向提供商付费的用户。** Aori 只是界面;你需要单独管理与 OpenAI、Anthropic、Google、Groq、DeepSeek 或 OpenRouter 的账单。',
          '**希望用简单语言安排例行任务的用户**,例如周期性的晨间简报,而无需单独配置自动化软件。',
          '**希望通过 [Ollama](https://ollama.com) 获得完全本地、离线推理选项的桌面用户**,同时不放弃在处理更难任务时切换到云端提供商的选项。',
          '**Telegram 或 WhatsApp 用户**,希望在这些应用中使用同一个代理和记忆,且各自保持独立隔离的对话记录。',
          '**拥有 Obsidian 知识库或 Notion 工作区的用户**,希望代理直接查阅这些内容,而不是把笔记复制粘贴进聊天窗口。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用 Aori',
        items: [
          '**iPhone 或 iPad 用户。** Aori 目前还没有 iOS 应用;官方将 iOS 支持描述为"稍后推出",没有公布日期。',
          '**希望完全没有任何云端选项的纯离线应用的用户。** Aori 的本地路径仅在选择 Ollama 的桌面端存在 —— 它大部分有用功能都假定连接了云端提供商,因此应将其视为混合工具,而不是默认隐私优先的离线应用。',
          '**不想单独管理提供商账单的用户。** Aori 没有涵盖模型使用费用的打包订阅;你需要在所选提供商处开设并自行支付账户费用。',
          '**在做决定前需要公开、可预测价格的用户。** Aori 尚未公布应用本身的定价,提供商成本会因所选模型和提供商而异。',
          '**特别希望使用本地离线模型的 Android 用户。** Ollama 支持仅限桌面端;Android 始终依赖云端提供商。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Aori 是完全离线的本地 AI 应用吗?',
            a: '默认情况下不是。Aori 是混合模式:它将你的 API 密钥和对话保存在本地,而不是 Aori 运营的服务器上,但除非你在桌面端明确选择 Ollama 作为后端,否则生成回复的模型运行在云端。只有桌面端加 Ollama 这一种配置才是完全本地、离线的。',
          },
          {
            q: 'Aori 支持哪些平台?',
            a: 'Windows、macOS 和 Linux 的桌面应用,以及 Android 的移动应用。iOS 应用尚未推出;Aori 将其描述为"稍后推出",没有公布发布日期。',
          },
          {
            q: 'Aori 会把我的数据存储在它自己的服务器上吗?',
            a: '不会。Aori 不运营存储你对话的后端。你的 API 密钥保存在本地设备上,请求直接从你的设备发送给你连接的 LLM 提供商 —— 不经过 Aori 运营的服务器。',
          },
          {
            q: 'Aori 支持哪些 LLM 提供商?',
            a: 'OpenAI、Anthropic Claude、Google Gemini、Groq、DeepSeek 和 OpenRouter,均通过你自己的 API 密钥("自带密钥")连接。在桌面端,Aori 还支持 Ollama,以运行完全在你自己硬件上运行的模型。',
          },
          {
            q: 'Aori 收费多少?',
            a: 'Aori 尚未公布定价;在当前公开测试阶段,应用可免费使用,无需向 Aori 本身付费。你的实际成本来自你连接的 LLM 提供商 —— Groq 提供免费额度,而 OpenAI、Anthropic、Gemini、DeepSeek 和 OpenRouter 会通过你在该提供商处的账号直接计费。',
          },
          {
            q: '我能在 Android 上完全离线使用 Aori 吗?',
            a: '不能。Aori 中的 Ollama 和本地模型支持仅限桌面端。在 Android 上,每一次对话都依赖于与你所配置的云端 LLM 提供商的互联网连接。',
          },
          {
            q: 'Aori 的人设是什么?',
            a: '人设是不同的助手配置,你可以在对话中途通过斜杠命令(例如 `/leo` 或 `/planner`)在它们之间切换。每种人设都针对不同的角色或任务进行了调校,但共享同一套底层记忆。',
          },
          {
            q: 'Aori 能连接 Telegram 和 WhatsApp 吗?',
            a: '可以。Aori 支持通过应用内界面、Telegram 和 WhatsApp 进行多渠道聊天,每个渠道都保留各自独立隔离的对话记录,而不是三者共享同一条对话线程。',
          },
          {
            q: 'Aori 能与 Obsidian 或 Notion 集成吗?',
            a: '可以。Aori 可以将本地文件夹、Obsidian 知识库或 Notion 工作区作为知识来源,从而能够利用你现有的笔记和文档来回答问题,而不仅仅依赖你在聊天中输入的内容。',
          },
          {
            q: 'Aori 的主动例行任务是什么?',
            a: '例行任务是你用简单语言描述的周期性任务,例如晨间简报,Aori 随后会按照该时间表自动执行,而无需你每次都发送新的提示词。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '**如果将 Aori 作为一款混合工具而非默认隐私优先的本地 AI 工具来评估,它是一款定位清晰的个人代理应用。** 持久记忆、斜杠命令人设、多渠道聊天(记录相互隔离的 Telegram 和 WhatsApp)、Obsidian/Notion 知识集成,以及用简单语言描述的主动例行任务,这些功能组合在一起,构成了一套连贯的功能集,目标是让一个代理在不同场景下保持一致的体验。无论你选择哪种模型后端,将 API 密钥和对话保存在本地、且没有 Aori 运营的后端,都是真实且可验证的隐私特性。但完全本地、离线运行的说法仅适用于一种确切配置:选择 Ollama 的桌面端。其他任何路径 —— 桌面端使用云端提供商,或在 Android 上的任何使用方式 —— 都会通过互联网将你的提示词发送给第三方 API。理解并接受这一取舍、愿意自带并支付 LLM API 密钥费用的用户,能够获得一个真正实用的跨平台代理。而那些默认寻求完全离线应用或 iOS 应用的用户,目前应另寻其他选择。',
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Aori 官方网站](https://www.aori-ai.app/) —— 平台可用性、功能列表以及当前公开测试状态。',
          '[Ollama](https://ollama.com) —— Aori 在桌面端用于实现完全离线推理的本地模型运行环境。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Hermes Agent 评测:本地自主 AI 代理](/zh/power-local-llm/hermes-agent-review-2026) —— 本站上一款可比较的本地优先代理评测。',
          '[BabyAGI 评测:自主本地代理](/zh/power-local-llm/babyagi-review-autonomous-agent) —— 本站介绍的另一款自主代理框架。',
          '[结合 Obsidian 运行本地 LLM](/zh/power-local-llm/local-llm-with-obsidian-2026) —— 将本地模型连接到你的 Obsidian 知识库,与 Aori 支持的集成方式相同。',
          '[用本地模型替代 Grammarly 和 Notion AI](/zh/power-local-llm/replace-grammarly-notion-ai-with-local) —— 在 Notion 工作区中搭配使用本地 AI。',
          '[2026 本地 LLM 软件目录](/zh/power-local-llm/local-llm-software-directory-2026) —— 涵盖所有平台的本地 AI 应用和工具完整目录。',
        ],
      },
    },
  },
}
