// RAPR AI Review: Local Desktop Command Center for Ollama, Claude, Gemini, Codex and Cursor
// Slug: rapr-ai-review
// Companion to: local-ai-agents-with-mcp-2026, autonomous-local-agents-actually-work

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/rapr-ai-review-hero-en.webp',
    title: 'RAPR AI Review (2026): Local Desktop Command Center for Ollama, Claude and Gemini',
    seoTitle: 'RAPR AI Review 2026: Desktop AI Agent Command Center',
    intro:
      'RAPR AI, built by RAPR AI and available at [raprai.com](https://raprai.com/), markets itself as a "local desktop command center for every AI you use." It does not replace Ollama, Claude, Gemini, Codex, or Cursor — it sits in front of them, giving you one Windows desktop interface to dispatch tasks, automate the desktop, remember context, and route work to whichever AI backend fits a given job. The practical question this review answers is narrower than the marketing line suggests: RAPR AI is only local and offline when you configure it to use Ollama on your own machine; every other backend it supports is a cloud API call routed through RAPR AI\'s interface, exactly like using that service directly.',
    metaDescription:
      'RAPR AI review: a free, early-access Windows app that orchestrates local Ollama models and cloud AI (Claude, Gemini, Codex, Cursor) with automation, memory and MCP connectors.',
    twitterDescription:
      'RAPR AI review: free early-access Windows app that routes between local Ollama models and cloud AI (Claude, Gemini, Cursor) with workflow automation, memory and MCP connectors.',
    audience:
      'Windows users already running Ollama locally who also hold accounts with cloud AI services (Claude, Gemini, Codex, Cursor) and want one workspace to orchestrate, automate and remember context across both.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI is a free, early-access Windows desktop app that orchestrates local Ollama models and cloud AI (Claude, Gemini, Codex, Cursor, OpenRouter) from one workspace, with workflow automation, memory and MCP connectors.** It only becomes a private, offline tool in the specific mode where you point it at Ollama running on your own hardware — every other backend it supports sends that conversation to the respective provider\'s cloud API. macOS and Linux support is underway but not yet shipped; Windows 10+ is the only platform available today.',
    quickAnswerTop: {
      en: {
        question: 'Is RAPR AI a local AI app or a cloud tool?',
        answer:
          'RAPR AI is both. It is a Windows desktop command center that runs fully offline through Ollama when you choose local models, and it also connects to cloud AI (Claude, Gemini, Codex, Cursor) and hundreds of models via OpenRouter. Orchestration data, memory, and API keys stay on your machine regardless of which backend you use.',
        bullets: [
          'Free during early access; paid tiers planned later, no price published yet.',
          'Windows 10+ supported now; macOS and Linux support is underway, not shipped.',
          'Offline/local mode requires pointing RAPR AI at Ollama running on your machine.',
          'MCP connectors (Zapier, Composio) and an AI Council feature for multi-model comparison.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is RAPR AI?', anchor: 'what-is-rapr' },
      { label: 'What Can You Do With RAPR AI?', anchor: 'core-features' },
      { label: 'Is RAPR AI Actually Local?', anchor: 'is-rapr-local' },
      { label: 'Platforms and Pricing', anchor: 'platforms-pricing' },
      { label: 'Who Should Use RAPR AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use RAPR AI', anchor: 'who-should-not-use' },
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
        items: [
          'RAPR AI ([raprai.com](https://raprai.com/)) is a desktop "command center" that orchestrates multiple AI backends — local Ollama models and cloud AI (Claude, Gemini, Codex, Cursor, OpenRouter) — from one workspace.',
          'It is local and offline only when configured to use Ollama on your own machine; the cloud-model paths still send that conversation to the respective provider\'s API.',
          'Orchestration/session data, the shared memory vault, and API credentials are kept on the user\'s machine regardless of backend, per RAPR AI\'s own claims.',
          'Key features: a visual AI agent workflow builder, desktop automation ("computer use" — the AI can see the screen and act), a shared memory vault across providers, Telegram remote triggers, scheduled AI tasks, voice-out responses (offline TTS or ElevenLabs), MCP connectors (Zapier, Composio), and an AI Council feature for multi-AI comparison.',
          'Windows 10+ is supported today; macOS and Linux support is underway but not yet shipped.',
          'Pricing: free during early access; the vendor states paid tiers will follow, with no price published yet.',
          'No independent benchmark, rating, or download-count data exists for RAPR AI — treat vendor claims about capability and data handling as unverified until you test them yourself.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'What Is RAPR AI?',
        content: [
          '**RAPR AI is a desktop application, built by RAPR AI and available at [raprai.com](https://raprai.com), that describes itself as a "local desktop command center for every AI you use."** Rather than replacing Ollama, Claude, Gemini, Codex, or Cursor, it sits in front of them — one interface for dispatching, automating, and remembering across whichever AI backend you choose for a given task.',
          'The app is a hybrid orchestration tool, not an exclusively local-LLM app. It supports fully offline operation through [Ollama](https://ollama.com) running on your own hardware, and it also connects to cloud AI services and agents — Claude, Gemini, Codex, and Cursor — plus hundreds of models through [OpenRouter](https://openrouter.ai). Whether a given conversation stays private and offline or gets routed to a cloud API depends entirely on which backend you pick inside RAPR AI for that task.',
          'RAPR AI describes its data model as "bring your own accounts or local models, no per-token surcharge" — you connect your own API keys or your own local Ollama install, and RAPR AI does not add a markup on top of what those providers already charge. Orchestration data, memory, and credentials are kept on the user\'s machine.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'What Can You Actually Do With RAPR AI?',
        content: ['RAPR AI\'s feature set centers on coordinating AI backends rather than being one itself:'],
        items: [
          '**Visual AI agent workflow builder.** Chain steps across different AI backends (local Ollama models, Claude, Gemini, Codex, Cursor) into a single visual workflow instead of manually copy-pasting between separate chat windows.',
          '**Desktop automation ("computer use").** RAPR AI can see the screen and take actions on your desktop, letting an AI agent operate applications directly rather than only producing text you have to execute yourself.',
          '**Shared memory vault across providers.** A memory layer that persists context across different AI backends, so switching from a local Ollama model to Claude for a harder step does not mean starting the conversation from zero.',
          '**Telegram remote triggers and scheduled tasks.** Kick off an AI workflow remotely via Telegram, or schedule a task to run automatically without opening the app.',
          '**Voice-out responses.** Responses can be read aloud using either an offline text-to-speech option or ElevenLabs, so you can choose a fully local voice path or a cloud voice service depending on your priorities.',
          '**MCP connectors (Zapier, Composio).** [Model Context Protocol](https://modelcontextprotocol.io) connectors let RAPR AI-managed agents reach external services through Zapier and Composio, extending what an agent can act on beyond the desktop itself.',
          '**AI Council.** A feature for running the same prompt across multiple AI backends at once and comparing or debating their answers side by side, rather than trusting a single model\'s output alone.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'Is RAPR AI Actually a Local AI Tool?',
        content: [
          '**RAPR AI is local and offline only in the specific configuration where you point it at [Ollama](https://ollama.com) running on your own machine — in every other configuration, it is a desktop client for cloud AI APIs.** This distinction matters because the marketing phrase "local desktop command center" describes the app itself running locally on your machine, not that every conversation inside it stays offline.',
          'When set to use Ollama, inference happens on your own hardware and, per RAPR AI\'s claims, that specific conversation does not need to leave your machine. When set to use Claude, Gemini, Codex, Cursor, or a model routed through OpenRouter, that conversation is sent to the respective provider\'s cloud API — the same as using those tools directly, just dispatched from inside RAPR AI\'s interface.',
          'What does stay local in both cases, according to RAPR AI: orchestration and session data, the shared memory vault, and your API keys and credentials. The app\'s job is to route the conversation and manage the surrounding workflow, not to run every model itself — only the Ollama path does that.',
        ],
        note: 'If privacy is the primary reason you are considering RAPR AI, build every workflow you create in it around the Ollama backend specifically. Adding a Claude, Gemini, Codex, Cursor, or OpenRouter step to that same workflow routes that step\'s data off your machine, regardless of how the rest of the workflow is configured.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'RAPR AI Platform Support and Pricing',
        columns: ['Platform / Plan', 'Status', 'What to expect'],
        rows: [
          {
            'Platform / Plan': 'Windows',
            'Status': 'Supported now',
            'What to expect': 'RAPR AI runs on Windows 10 and later today. This is the only platform with a shipped release at the time of this review.',
          },
          {
            'Platform / Plan': 'macOS',
            'Status': 'Underway, not shipped',
            'What to expect': 'RAPR AI has stated macOS support is underway. It is not available yet — do not plan around a Mac build being available today.',
          },
          {
            'Platform / Plan': 'Linux',
            'Status': 'Underway, not shipped',
            'What to expect': 'Linux support is also described as underway alongside macOS. Neither platform has a published release date.',
          },
          {
            'Platform / Plan': 'Pricing',
            'Status': 'Free (early access)',
            'What to expect': 'RAPR AI is free to use during its early-access period. The vendor states paid tiers will follow later; no fixed price has been published yet.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use RAPR AI',
        items: [
          '**Windows users already juggling Ollama plus multiple cloud AI subscriptions.** If you already have accounts with Claude, Gemini, or an OpenRouter key and also run local models through Ollama, RAPR AI gives you one place to dispatch tasks to whichever backend fits, instead of switching between separate apps.',
          '**Users who want an AI agent that can act on the desktop, not just chat.** The computer-use / desktop automation feature is aimed at people who want an agent to operate applications directly rather than copy-pasting AI output by hand.',
          '**Users who want to compare answers across multiple AI backends.** The AI Council feature is built for exactly this — running one prompt across several models and comparing the results instead of trusting a single answer.',
          '**Users comfortable with early-access software.** Free access during this period is a trade-off: expect the feature set, platform support, and pricing to change as RAPR AI moves out of early access.',
          '**Users who want to automate AI tasks via Telegram or on a schedule.** If remote triggering or scheduled runs are useful to your workflow, RAPR AI supports both without extra scripting.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use RAPR AI',
        items: [
          '**Mac or Linux users who need a working app today.** RAPR AI is Windows-only right now; macOS and Linux support is described as underway but is not available. Do not plan around it until a release ships on your platform.',
          '**Users who want a purely offline, cloud-free tool.** RAPR AI is a hybrid orchestrator. Unless every workflow you build inside it is configured to use Ollama, some of your conversations will go to Claude, Gemini, Codex, Cursor, or OpenRouter — the same as using those services directly.',
          '**Users who need a stable, long-term-supported feature set today.** Early-access, free software from a small vendor is more likely to change its features, pricing, and platform support than an established product. Budget for that if you plan to build a workflow around it.',
          '**Users who need independently verified performance or reliability numbers.** No third-party benchmark, uptime, or user-rating data is available for RAPR AI at this time; this review has not independently audited the vendor\'s claims about features and data handling.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is RAPR AI free?',
            a: 'Yes, RAPR AI is free during its current early-access period. The vendor states that paid tiers will follow later, but no price has been published yet, so budget for a future cost if you plan to rely on it long-term.',
          },
          {
            q: 'Does RAPR AI work offline?',
            a: 'Only in the configuration where you connect it to Ollama running on your own machine. In that mode, inference happens locally. If you use RAPR AI\'s connections to Claude, Gemini, Codex, Cursor, or OpenRouter instead, those conversations require an internet connection and go to that provider\'s cloud API, the same as using those tools directly.',
          },
          {
            q: 'Is RAPR AI available for Mac or Linux?',
            a: 'Not yet. At the time of this review, RAPR AI runs on Windows 10 and later only. RAPR AI has stated that macOS and Linux support is underway, but neither has a published release date.',
          },
          {
            q: 'What is the AI Council feature in RAPR AI?',
            a: 'AI Council is a RAPR AI feature that runs the same prompt across multiple AI backends at once so you can compare or debate their answers side by side, rather than relying on a single model\'s response.',
          },
          {
            q: 'Does RAPR AI store my data or API keys in the cloud?',
            a: 'RAPR AI\'s own claim is that orchestration and session data, its shared memory vault, and your API keys and credentials are kept on your machine, regardless of which AI backend (local or cloud) you route a given task to. Review RAPR AI\'s current privacy documentation directly before using it for sensitive work — this review has not independently audited that claim. This is not legal advice.',
          },
          {
            q: 'What is the "computer use" or desktop automation feature in RAPR AI?',
            a: 'It lets an AI agent inside RAPR AI see your screen and take actions on your desktop directly — operating applications rather than only producing text you would otherwise have to execute yourself.',
          },
          {
            q: 'What is MCP, and what do RAPR AI\'s MCP connectors do?',
            a: '[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is a standard that lets AI agents connect to external tools and data sources. RAPR AI supports MCP connectors for Zapier and Composio, letting an agent reach services beyond your desktop through those platforms.',
          },
          {
            q: 'Can RAPR AI replace Ollama, Claude, or Cursor?',
            a: 'No. RAPR AI is not a replacement for those tools — it is an orchestration layer that sits in front of them. You still need Ollama installed for local models, or your own accounts and API keys for Claude, Gemini, Codex, Cursor, or OpenRouter; RAPR AI coordinates between them rather than providing its own model.',
          },
          {
            q: 'Does RAPR AI support voice responses?',
            a: 'Yes. RAPR AI can read responses aloud using either an offline text-to-speech option or ElevenLabs, so you can choose a fully local voice path or a cloud voice service depending on your priorities.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'RAPR AI is worth evaluating if you already run Ollama locally and also hold accounts with cloud AI services, and you want one Windows desktop app to route between them with automation, memory, and MCP connectors — it is not worth evaluating today if you need a Mac or Linux build, or a tool that is offline by default in every mode. Its most distinctive features are the visual workflow builder, desktop "computer use" automation, the AI Council multi-model comparison, and a memory vault that persists across different AI backends. The honest caveat: it is free, early-access software from a small vendor, with no independent benchmarks, ratings, or long-term reliability data available, on one platform only, and its feature set, pricing, and platform support should all be expected to change before RAPR AI leaves early access.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[RAPR AI official site](https://raprai.com) — product description, feature list, platform availability, and pricing status.',
          '[Ollama official site](https://ollama.com) — the local inference engine RAPR AI connects to for offline/local model support.',
          '[Model Context Protocol specification](https://modelcontextprotocol.io) — the open standard behind RAPR AI\'s Zapier and Composio connectors.',
          '[OpenRouter](https://openrouter.ai) — the routing service RAPR AI uses for access to hundreds of additional cloud models.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — a hands-on MCP setup guide for local agents, useful background for RAPR AI\'s MCP connectors.',
          '[Local AI Agents in 2026: What Actually Works (And What Still Fails)](/power-local-llm/autonomous-local-agents-actually-work) — a broader look at the current state of local agent tooling RAPR AI competes in.',
          '[Replace Zapier With Local AI Agents: 5 Workflows That Save $30/Month (2026)](/power-local-llm/replace-zapier-with-local-ai-agents) — useful if you are weighing RAPR AI\'s Zapier MCP connector against a fully local alternative.',
          '[The Complete Local LLM Software Directory: 160+ Tools to Run AI on Your Own Hardware (2026)](/power-local-llm/local-llm-software-directory) — see where RAPR AI fits among other local and hybrid AI tools.',
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
    heroImage: '/images/rapr-ai-review-hero-ar.webp',
    title: 'مراجعة ⁨RAPR AI⁩ (⁨2026⁩): مركز تحكم سطح مكتب محلي لـ ⁨Ollama⁩ و⁨Claude⁩ و⁨Gemini⁩',
    seoTitle: 'مراجعة ⁨RAPR AI 2026⁩: مركز تحكم لوكلاء الذكاء الاصطناعي',
    intro:
      'تُقدّم ⁨RAPR AI⁩، من تطوير شركة ⁨RAPR AI⁩ والمتاحة على ⁨[raprai.com](https://raprai.com/)⁩، نفسها كـ"مركز تحكم سطح مكتب محلي لكل ذكاء اصطناعي تستخدمه". لا تستبدل هذه الأداة ⁨Ollama⁩ أو ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ — بل تعمل كواجهة أمامها، فتمنحك واجهة واحدة على ⁨Windows⁩ لتوزيع المهام وأتمتة سطح المكتب وحفظ السياق وتوجيه العمل إلى النموذج الأنسب. السؤال العملي الذي تجيب عنه هذه المراجعة أضيق مما توحي به العبارة التسويقية: ⁨RAPR AI⁩ محلية وتعمل دون اتصال فقط عند ضبطها على استخدام ⁨Ollama⁩ على جهازك؛ وكل نموذج آخر تدعمه هو استدعاء لواجهة سحابية يُمرَّر عبر واجهة ⁨RAPR AI⁩، تمامًا كاستخدام تلك الخدمة مباشرة.',
    metaDescription:
      'مراجعة ⁨RAPR AI⁩: تطبيق ⁨Windows⁩ مجاني في مرحلة الوصول المبكر ينسّق بين نماذج ⁨Ollama⁩ المحلية والذكاء الاصطناعي السحابي (⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩) مع أتمتة وذاكرة وموصلات ⁨MCP⁩.',
    twitterDescription:
      'مراجعة ⁨RAPR AI⁩: تطبيق ⁨Windows⁩ مجاني يوجّه بين نماذج ⁨Ollama⁩ المحلية والذكاء الاصطناعي السحابي (⁨Claude⁩، ⁨Gemini⁩، ⁨Cursor⁩) مع أتمتة سير العمل والذاكرة وموصلات ⁨MCP⁩.',
    audience:
      'مستخدمو ⁨Windows⁩ الذين يشغّلون ⁨Ollama⁩ محليًا بالفعل ولديهم أيضًا حسابات في خدمات الذكاء الاصطناعي السحابية (⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩) ويريدون مساحة عمل واحدة للتنسيق والأتمتة وحفظ السياق بين الاثنين.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**⁨RAPR AI⁩ تطبيق سطح مكتب مجاني في مرحلة الوصول المبكر لنظام ⁨Windows⁩ ينسّق بين نماذج ⁨Ollama⁩ المحلية والذكاء الاصطناعي السحابي (⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩، ⁨OpenRouter⁩) من مساحة عمل واحدة، مع أتمتة سير العمل والذاكرة وموصلات ⁨MCP⁩.** لا تصبح أداة خاصة وتعمل دون اتصال إلا في الوضع الذي توجّهها فيه إلى ⁨Ollama⁩ العاملة على جهازك — أما كل نموذج آخر تدعمه فيُرسل تلك المحادثة إلى الواجهة السحابية لمزوّد الخدمة المعني. دعم ⁨macOS⁩ و⁨Linux⁩ قيد التطوير ولم يُطلق بعد؛ و⁨Windows 10+⁩ هو المنصة الوحيدة المتاحة حاليًا.',
    quickAnswerTop: {
      ar: {
        question: 'هل ⁨RAPR AI⁩ أداة ذكاء اصطناعي محلية أم سحابية؟',
        answer:
          'كلاهما. فهي مركز تحكم سطح مكتب على ⁨Windows⁩ يعمل بالكامل دون اتصال عبر ⁨Ollama⁩ عند اختيار نماذج محلية، وتتصل أيضًا بالذكاء الاصطناعي السحابي (⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩) ومئات النماذج عبر ⁨OpenRouter⁩. تبقى بيانات التنسيق والذاكرة ومفاتيح ⁨API⁩ على جهازك بغض النظر عن النموذج المستخدم.',
        bullets: [
          'مجانية خلال مرحلة الوصول المبكر؛ خطط مدفوعة مخطط لها لاحقًا، بلا سعر معلن بعد.',
          '⁨Windows 10+⁩ مدعوم الآن؛ دعم ⁨macOS⁩ و⁨Linux⁩ قيد التطوير ولم يُطلق بعد.',
          'يتطلب وضع التشغيل المحلي/دون اتصال توجيه ⁨RAPR AI⁩ إلى ⁨Ollama⁩ على جهازك.',
          'موصلات ⁨MCP⁩ (⁨Zapier⁩، ⁨Composio⁩) وميزة ⁨AI Council⁩ لمقارنة عدة نماذج.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هي ⁨RAPR AI⁩؟', anchor: 'what-is-rapr' },
      { label: 'ماذا يمكنك أن تفعل بـ ⁨RAPR AI⁩؟', anchor: 'core-features' },
      { label: 'هل ⁨RAPR AI⁩ محلية فعلًا؟', anchor: 'is-rapr-local' },
      { label: 'المنصات والتسعير', anchor: 'platforms-pricing' },
      { label: 'لمن تناسب ⁨RAPR AI⁩', anchor: 'who-should-use' },
      { label: 'لمن لا تناسب ⁨RAPR AI⁩', anchor: 'who-should-not-use' },
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
        items: [
          '⁨RAPR AI⁩ (⁨[raprai.com](https://raprai.com/)⁩) مركز تحكم سطح مكتب ينسّق بين عدة نماذج ذكاء اصطناعي — ⁨Ollama⁩ المحلية والذكاء الاصطناعي السحابي (⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩، ⁨OpenRouter⁩) — من مساحة عمل واحدة.',
          'تكون محلية وتعمل دون اتصال فقط عند ضبطها على استخدام ⁨Ollama⁩ على جهازك؛ أما مسارات النماذج السحابية فترسل المحادثة إلى واجهة المزوّد المعني.',
          'وفقًا لادعاءات ⁨RAPR AI⁩ نفسها، تبقى بيانات التنسيق/الجلسة، وخزانة الذاكرة المشتركة، ومفاتيح ⁨API⁩ على جهاز المستخدم بغض النظر عن النموذج المستخدم.',
          'أبرز الميزات: أداة مرئية لبناء سير عمل وكلاء الذكاء الاصطناعي، وأتمتة سطح المكتب ("استخدام الحاسوب" — يرى الذكاء الاصطناعي الشاشة وينفّذ إجراءات)، وخزانة ذاكرة مشتركة بين المزوّدين، ومحفّزات تشغيل عن بُعد عبر ⁨Telegram⁩، ومهام مجدولة، وردود صوتية (تحويل نص لصوت دون اتصال أو عبر ⁨ElevenLabs⁩)، وموصلات ⁨MCP⁩ (⁨Zapier⁩، ⁨Composio⁩)، وميزة ⁨AI Council⁩ لمقارنة عدة نماذج.',
          '⁨Windows 10+⁩ مدعوم حاليًا؛ دعم ⁨macOS⁩ و⁨Linux⁩ قيد التطوير ولم يُطلق بعد.',
          'التسعير: مجاني خلال مرحلة الوصول المبكر؛ تذكر الشركة أن خططًا مدفوعة ستُطرح لاحقًا، بلا سعر معلن بعد.',
          'لا تتوفر بيانات مستقلة عن الأداء أو التقييمات أو أعداد التنزيل لـ ⁨RAPR AI⁩ — تعامل مع ادعاءات المزوّد حول القدرات والتعامل مع البيانات على أنها غير مُتحقَّق منها حتى تختبرها بنفسك.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'ما هي ⁨RAPR AI⁩؟',
        content: [
          '**⁨RAPR AI⁩ تطبيق سطح مكتب، من تطوير شركة ⁨RAPR AI⁩ والمتاح على [raprai.com](https://raprai.com)، يصف نفسه بأنه "مركز تحكم سطح مكتب محلي لكل ذكاء اصطناعي تستخدمه".** بدلًا من استبدال ⁨Ollama⁩ أو ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩، تعمل الأداة كواجهة أمامها — واجهة واحدة لتوزيع المهام وأتمتتها وحفظ سياقها عبر أي نموذج تختاره لمهمة معيّنة.',
          'الأداة أداة تنسيق هجينة، وليست أداة ذكاء اصطناعي محلي حصريًا. فهي تدعم التشغيل الكامل دون اتصال عبر [Ollama](https://ollama.com) العاملة على عتادك، وتتصل أيضًا بخدمات ووكلاء الذكاء الاصطناعي السحابية — ⁨Claude⁩ و⁨Gemini⁩ و⁨Codex⁩ و⁨Cursor⁩ — إضافة إلى مئات النماذج عبر [OpenRouter](https://openrouter.ai). وما إذا كانت محادثة معيّنة تبقى خاصة ودون اتصال أو تُوجَّه إلى واجهة سحابية يعتمد كليًا على النموذج الذي تختاره داخل ⁨RAPR AI⁩ لتلك المهمة.',
          'تصف ⁨RAPR AI⁩ نموذج بياناتها بأنه "أحضر حساباتك الخاصة أو نماذجك المحلية، بلا رسوم إضافية لكل رمز" — أي أنك تربط مفاتيح ⁨API⁩ الخاصة بك أو تثبيت ⁨Ollama⁩ المحلي الخاص بك، ولا تضيف ⁨RAPR AI⁩ هامشًا فوق ما تتقاضاه تلك الخدمات أصلًا. تبقى بيانات التنسيق والذاكرة وبيانات الاعتماد على جهاز المستخدم.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'ماذا يمكنك أن تفعل فعليًا بـ ⁨RAPR AI⁩؟',
        content: ['تتمحور ميزات ⁨RAPR AI⁩ حول تنسيق نماذج الذكاء الاصطناعي أكثر من كونها نموذجًا بحد ذاتها:'],
        items: [
          '**أداة مرئية لبناء سير عمل وكلاء الذكاء الاصطناعي.** اربط خطوات عبر نماذج مختلفة (⁨Ollama⁩ المحلية، ⁨Claude⁩، ⁨Gemini⁩، ⁨Codex⁩، ⁨Cursor⁩) في سير عمل مرئي واحد بدلًا من النسخ واللصق يدويًا بين نوافذ محادثة منفصلة.',
          '**أتمتة سطح المكتب ("استخدام الحاسوب").** تستطيع ⁨RAPR AI⁩ رؤية الشاشة واتخاذ إجراءات على سطح مكتبك، ما يتيح لوكيل الذكاء الاصطناعي تشغيل التطبيقات مباشرة بدلًا من الاكتفاء بإنتاج نص عليك تنفيذه بنفسك.',
          '**خزانة ذاكرة مشتركة بين المزوّدين.** طبقة ذاكرة تحافظ على السياق عبر نماذج مختلفة، بحيث لا يعني الانتقال من نموذج ⁨Ollama⁩ محلي إلى ⁨Claude⁩ لخطوة أصعب بدء المحادثة من الصفر.',
          '**محفّزات تشغيل عن بُعد عبر ⁨Telegram⁩ ومهام مجدولة.** ابدأ سير عمل ذكاء اصطناعي عن بُعد عبر ⁨Telegram⁩، أو جدول مهمة لتعمل تلقائيًا دون فتح التطبيق.',
          '**ردود صوتية.** يمكن قراءة الردود بصوت عالٍ باستخدام خيار تحويل نص إلى صوت دون اتصال أو عبر ⁨ElevenLabs⁩، بما يتيح لك اختيار مسار صوتي محلي بالكامل أو خدمة صوتية سحابية.',
          '**موصلات ⁨MCP⁩ (⁨Zapier⁩، ⁨Composio⁩).** تتيح موصلات [بروتوكول سياق النموذج](https://modelcontextprotocol.io) لوكلاء ⁨RAPR AI⁩ الوصول إلى خدمات خارجية عبر ⁨Zapier⁩ و⁨Composio⁩، ما يوسّع نطاق ما يمكن للوكيل التصرف فيه خارج سطح المكتب نفسه.',
          '**⁨AI Council⁩.** ميزة لتشغيل الطلب نفسه عبر عدة نماذج ذكاء اصطناعي في آنٍ واحد ومقارنة إجاباتها أو مناقشتها جنبًا إلى جنب، بدلًا من الاعتماد على إجابة نموذج واحد فقط.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'هل ⁨RAPR AI⁩ أداة ذكاء اصطناعي محلية فعلًا؟',
        content: [
          '**تكون ⁨RAPR AI⁩ محلية وتعمل دون اتصال فقط في الإعداد المحدد الذي توجّهها فيه إلى [Ollama](https://ollama.com) العاملة على جهازك — وفي أي إعداد آخر، فهي عميل سطح مكتب لواجهات ذكاء اصطناعي سحابية.** هذا الفرق مهم لأن العبارة التسويقية "مركز تحكم سطح مكتب محلي" تصف التطبيق نفسه وهو يعمل محليًا على جهازك، لا أن كل محادثة داخله تبقى دون اتصال.',
          'عند الضبط على استخدام ⁨Ollama⁩، يجري الاستدلال على عتادك الخاص، ووفقًا لادعاءات ⁨RAPR AI⁩، لا تحتاج تلك المحادثة تحديدًا إلى مغادرة جهازك. أما عند الضبط على استخدام ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ أو نموذج مُوجَّه عبر ⁨OpenRouter⁩، فتُرسَل تلك المحادثة إلى الواجهة السحابية للمزوّد المعني — تمامًا كاستخدام تلك الأدوات مباشرة، لكن بتوجيهها من داخل واجهة ⁨RAPR AI⁩.',
          'أما ما يبقى محليًا في كلتا الحالتين، وفقًا لـ ⁨RAPR AI⁩: بيانات التنسيق والجلسة، وخزانة الذاكرة المشتركة، ومفاتيح ⁨API⁩ وبيانات الاعتماد الخاصة بك. مهمة التطبيق هي توجيه المحادثة وإدارة سير العمل المحيط بها، لا تشغيل كل نموذج بنفسه — فمسار ⁨Ollama⁩ فقط هو من يفعل ذلك.',
        ],
        note: 'إذا كانت الخصوصية هي السبب الرئيسي وراء تفكيرك في ⁨RAPR AI⁩، فابنِ كل سير عمل تنشئه فيها حول مصدر ⁨Ollama⁩ تحديدًا. إضافة خطوة تعتمد على ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ أو ⁨OpenRouter⁩ إلى سير العمل نفسه يُخرج بيانات تلك الخطوة من جهازك، بصرف النظر عن كيفية ضبط بقية سير العمل.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'دعم منصات ⁨RAPR AI⁩ والتسعير',
        columns: ['المنصة / الخطة', 'الحالة', 'ما يمكن توقعه'],
        rows: [
          {
            'المنصة / الخطة': 'Windows',
            'الحالة': 'مدعومة الآن',
            'ما يمكن توقعه': 'تعمل ⁨RAPR AI⁩ على ⁨Windows 10⁩ وما بعده اليوم. هذه هي المنصة الوحيدة ذات الإصدار المُطلق وقت كتابة هذه المراجعة.',
          },
          {
            'المنصة / الخطة': 'macOS',
            'الحالة': 'قيد التطوير، لم يُطلق',
            'ما يمكن توقعه': 'ذكرت ⁨RAPR AI⁩ أن دعم ⁨macOS⁩ قيد التطوير. غير متاح بعد — لا تخطط بافتراض توفر إصدار لـ ⁨Mac⁩ حاليًا.',
          },
          {
            'المنصة / الخطة': 'Linux',
            'الحالة': 'قيد التطوير، لم يُطلق',
            'ما يمكن توقعه': 'يُوصف دعم ⁨Linux⁩ أيضًا بأنه قيد التطوير إلى جانب ⁨macOS⁩. لا تاريخ إطلاق معلن لأي منهما.',
          },
          {
            'المنصة / الخطة': 'التسعير',
            'الحالة': 'مجاني (وصول مبكر)',
            'ما يمكن توقعه': '⁨RAPR AI⁩ مجانية الاستخدام خلال مرحلة الوصول المبكر. تذكر الشركة أن خططًا مدفوعة ستُطرح لاحقًا؛ ولم يُعلَن بعد عن سعر ثابت.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن تناسب ⁨RAPR AI⁩',
        items: [
          '**مستخدمو ⁨Windows⁩ الذين يديرون ⁨Ollama⁩ إلى جانب عدة اشتراكات ذكاء اصطناعي سحابية.** إذا كانت لديك بالفعل حسابات في ⁨Claude⁩ أو ⁨Gemini⁩ أو مفتاح ⁨OpenRouter⁩، وتشغّل أيضًا نماذج محلية عبر ⁨Ollama⁩، تمنحك ⁨RAPR AI⁩ مكانًا واحدًا لتوزيع المهام على النموذج الأنسب بدلًا من التنقل بين تطبيقات منفصلة.',
          '**من يريد وكيل ذكاء اصطناعي قادرًا على العمل على سطح المكتب لا مجرد المحادثة.** تستهدف ميزة "استخدام الحاسوب"/أتمتة سطح المكتب من يريد وكيلًا يشغّل التطبيقات مباشرة بدلًا من نسخ مخرجات الذكاء الاصطناعي ولصقها يدويًا.',
          '**من يريد مقارنة إجابات عدة نماذج ذكاء اصطناعي.** بُنيت ميزة ⁨AI Council⁩ لهذا الغرض تحديدًا — تشغيل طلب واحد عبر عدة نماذج ومقارنة النتائج بدلًا من الوثوق بإجابة واحدة.',
          '**من يرتاح للتعامل مع برمجيات في مرحلة الوصول المبكر.** الوصول المجاني خلال هذه المرحلة له مقابل: توقع أن تتغير مجموعة الميزات ودعم المنصات والتسعير مع خروج ⁨RAPR AI⁩ من مرحلة الوصول المبكر.',
          '**من يريد أتمتة مهام ذكاء اصطناعي عبر ⁨Telegram⁩ أو وفق جدول زمني.** إذا كان التشغيل عن بُعد أو التنفيذ المجدول مفيدًا لسير عملك، تدعم ⁨RAPR AI⁩ كليهما دون برمجة إضافية.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا تناسب ⁨RAPR AI⁩',
        items: [
          '**مستخدمو ⁨Mac⁩ أو ⁨Linux⁩ الذين يحتاجون تطبيقًا يعمل اليوم.** ⁨RAPR AI⁩ حاليًا مخصصة لـ ⁨Windows⁩ فقط؛ ويُوصف دعم ⁨macOS⁩ و⁨Linux⁩ بأنه قيد التطوير لكنه غير متاح. لا تخطط بالاعتماد عليها حتى يُطلق إصدار لمنصتك.',
          '**من يريد أداة تعمل دون اتصال بالكامل وبلا سحابة.** ⁨RAPR AI⁩ أداة تنسيق هجينة. ما لم يكن كل سير عمل تبنيه فيها مضبوطًا على استخدام ⁨Ollama⁩، سترسل بعض محادثاتك إلى ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ أو ⁨OpenRouter⁩ — تمامًا كاستخدام تلك الخدمات مباشرة.',
          '**من يحتاج مجموعة ميزات مستقرة ومدعومة على المدى الطويل اليوم.** البرمجيات المجانية في مرحلة الوصول المبكر من مزوّد صغير أكثر عرضة لتغيير ميزاتها وتسعيرها ودعم منصاتها من منتج راسخ. احسب حساب ذلك إذا كنت تخطط لبناء سير عمل حوله.',
          '**من يحتاج أرقام أداء أو موثوقية مُتحقَّقًا منها بشكل مستقل.** لا تتوفر حاليًا بيانات مقاييس أداء أو موثوقية تشغيل أو تقييمات مستخدمين من طرف ثالث لـ ⁨RAPR AI⁩؛ ولم تُدقّق هذه المراجعة بشكل مستقل ادعاءات المزوّد حول الميزات والتعامل مع البيانات.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ⁨RAPR AI⁩ مجانية؟',
            a: 'نعم، ⁨RAPR AI⁩ مجانية خلال مرحلة الوصول المبكر الحالية. تذكر الشركة أن خططًا مدفوعة ستُطرح لاحقًا، لكن لم يُعلَن بعد عن سعر، لذا يُستحسن احتساب تكلفة مستقبلية إذا كنت تخطط للاعتماد عليها على المدى الطويل.',
          },
          {
            q: 'هل تعمل ⁨RAPR AI⁩ دون اتصال بالإنترنت؟',
            a: 'فقط في الإعداد الذي تربطها فيه بـ ⁨Ollama⁩ العاملة على جهازك. في هذا الوضع، يجري الاستدلال محليًا. أما إذا استخدمت اتصالات ⁨RAPR AI⁩ بـ ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ أو ⁨OpenRouter⁩، فتتطلب تلك المحادثات اتصالًا بالإنترنت وتذهب إلى الواجهة السحابية لذلك المزوّد، تمامًا كاستخدام تلك الأدوات مباشرة.',
          },
          {
            q: 'هل ⁨RAPR AI⁩ متاحة لـ ⁨Mac⁩ أو ⁨Linux⁩؟',
            a: 'ليس بعد. وقت كتابة هذه المراجعة، تعمل ⁨RAPR AI⁩ على ⁨Windows 10⁩ وما بعده فقط. ذكرت ⁨RAPR AI⁩ أن دعم ⁨macOS⁩ و⁨Linux⁩ قيد التطوير، لكن لا تاريخ إطلاق معلن لأي منهما.',
          },
          {
            q: 'ما هي ميزة ⁨AI Council⁩ في ⁨RAPR AI⁩؟',
            a: '⁨AI Council⁩ ميزة في ⁨RAPR AI⁩ تُشغّل الطلب نفسه عبر عدة نماذج ذكاء اصطناعي في آنٍ واحد لتتمكن من مقارنة إجاباتها أو مناقشتها جنبًا إلى جنب، بدلًا من الاعتماد على استجابة نموذج واحد.',
          },
          {
            q: 'هل تخزّن ⁨RAPR AI⁩ بياناتي أو مفاتيح ⁨API⁩ الخاصة بي في السحابة؟',
            a: 'ادعاء ⁨RAPR AI⁩ نفسها هو أن بيانات التنسيق والجلسة، وخزانة الذاكرة المشتركة، ومفاتيح ⁨API⁩ وبيانات الاعتماد الخاصة بك تبقى على جهازك، بصرف النظر عن نموذج الذكاء الاصطناعي (محلي أو سحابي) الذي تُوجَّه إليه مهمة معيّنة. راجع سياسة خصوصية ⁨RAPR AI⁩ الحالية مباشرة قبل استخدامها لعمل حساس — لم تُدقّق هذه المراجعة هذا الادعاء بشكل مستقل. هذا لا يُعد استشارة قانونية.',
          },
          {
            q: 'ما هي ميزة "استخدام الحاسوب" أو أتمتة سطح المكتب في ⁨RAPR AI⁩؟',
            a: 'تتيح لوكيل الذكاء الاصطناعي داخل ⁨RAPR AI⁩ رؤية شاشتك واتخاذ إجراءات على سطح مكتبك مباشرة — تشغيل التطبيقات بدلًا من الاكتفاء بإنتاج نص عليك تنفيذه بنفسك.',
          },
          {
            q: 'ما هو ⁨MCP⁩، وماذا تفعل موصلات ⁨RAPR AI⁩ لـ ⁨MCP⁩؟',
            a: '[بروتوكول سياق النموذج (MCP)](https://modelcontextprotocol.io) معيار يتيح لوكلاء الذكاء الاصطناعي الاتصال بأدوات ومصادر بيانات خارجية. تدعم ⁨RAPR AI⁩ موصلات ⁨MCP⁩ لـ ⁨Zapier⁩ و⁨Composio⁩، ما يتيح للوكيل الوصول إلى خدمات خارج سطح مكتبك عبر هاتين المنصتين.',
          },
          {
            q: 'هل يمكن لـ ⁨RAPR AI⁩ أن تحل محل ⁨Ollama⁩ أو ⁨Claude⁩ أو ⁨Cursor⁩؟',
            a: 'لا. ⁨RAPR AI⁩ ليست بديلًا عن تلك الأدوات — بل طبقة تنسيق تعمل أمامها. لا تزال بحاجة إلى تثبيت ⁨Ollama⁩ للنماذج المحلية، أو حساباتك ومفاتيح ⁨API⁩ الخاصة لـ ⁨Claude⁩ أو ⁨Gemini⁩ أو ⁨Codex⁩ أو ⁨Cursor⁩ أو ⁨OpenRouter⁩؛ وتنسّق ⁨RAPR AI⁩ بينها بدلًا من توفير نموذجها الخاص.',
          },
          {
            q: 'هل تدعم ⁨RAPR AI⁩ الردود الصوتية؟',
            a: 'نعم. يمكن لـ ⁨RAPR AI⁩ قراءة الردود بصوت عالٍ باستخدام خيار تحويل نص إلى صوت دون اتصال أو عبر ⁨ElevenLabs⁩، بما يتيح لك اختيار مسار صوتي محلي بالكامل أو خدمة صوتية سحابية حسب أولوياتك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'تستحق ⁨RAPR AI⁩ التقييم إذا كنت تشغّل ⁨Ollama⁩ محليًا بالفعل ولديك أيضًا حسابات في خدمات ذكاء اصطناعي سحابية، وتريد تطبيق ⁨Windows⁩ واحدًا للتوجيه بينها مع أتمتة وذاكرة وموصلات ⁨MCP⁩ — وهي ليست جديرة بالتقييم اليوم إذا كنت تحتاج إصدارًا لـ ⁨Mac⁩ أو ⁨Linux⁩، أو أداة تعمل دون اتصال افتراضيًا في كل وضع. أبرز ميزاتها المميّزة هي أداة سير العمل المرئية، وأتمتة "استخدام الحاسوب"، ومقارنة ⁨AI Council⁩ متعددة النماذج، وخزانة ذاكرة تستمر عبر نماذج مختلفة. التحفظ الصريح: إنها برمجية مجانية في مرحلة الوصول المبكر من مزوّد صغير، بلا معايير أداء مستقلة أو تقييمات أو بيانات موثوقية طويلة الأمد، وعلى منصة واحدة فقط، وينبغي توقع تغيّر ميزاتها وتسعيرها ودعم منصاتها قبل أن تغادر ⁨RAPR AI⁩ مرحلة الوصول المبكر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الموقع الرسمي لـ RAPR AI](https://raprai.com) — وصف المنتج، قائمة الميزات، توفر المنصات، وحالة التسعير.',
          '[الموقع الرسمي لـ Ollama](https://ollama.com) — محرك الاستدلال المحلي الذي تتصل به ⁨RAPR AI⁩ لدعم النماذج المحلية/دون اتصال.',
          '[مواصفات بروتوكول سياق النموذج](https://modelcontextprotocol.io) — المعيار المفتوح الذي تعتمد عليه موصلات ⁨RAPR AI⁩ لـ ⁨Zapier⁩ و⁨Composio⁩.',
          '[OpenRouter](https://openrouter.ai) — خدمة التوجيه التي تستخدمها ⁨RAPR AI⁩ للوصول إلى مئات النماذج السحابية الإضافية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[ربط Ollama بقواعد البيانات وواجهات API عبر MCP: إعداد وكيل محلي 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — دليل عملي لإعداد ⁨MCP⁩ للوكلاء المحليين، خلفية مفيدة لموصلات ⁨RAPR AI⁩ لـ ⁨MCP⁩.',
          '[وكلاء الذكاء الاصطناعي المحليون في 2026: ما ينجح فعلًا (وما لا يزال يفشل)](/ar/power-local-llm/autonomous-local-agents-actually-work) — نظرة أوسع على الوضع الحالي لأدوات الوكلاء المحليين التي تنافس فيها ⁨RAPR AI⁩.',
          '[استبدل Zapier بوكلاء ذكاء اصطناعي محليين: 5 مهام سير عمل توفّر 30 دولارًا شهريًا (2026)](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — مفيد إذا كنت تقارن موصل ⁨Zapier⁩ في ⁨RAPR AI⁩ ببديل محلي بالكامل.',
          '[الدليل الكامل لبرمجيات LLM المحلية: أكثر من 160 أداة لتشغيل الذكاء الاصطناعي على عتادك الخاص (2026)](/ar/power-local-llm/local-llm-software-directory) — تعرّف على موقع ⁨RAPR AI⁩ بين أدوات الذكاء الاصطناعي المحلية والهجينة الأخرى.',
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
    heroImage: '/images/rapr-ai-review-hero-de.webp',
    title: 'RAPR AI im Test (2026): Lokale Desktop-Kommandozentrale für Ollama, Claude und Gemini',
    seoTitle: 'RAPR AI Test 2026: Kommandozentrale für KI-Agenten',
    intro:
      'RAPR AI, entwickelt von RAPR AI und verfügbar unter [raprai.com](https://raprai.com/), positioniert sich als "lokale Desktop-Kommandozentrale für jede KI, die Sie nutzen". Die App ersetzt nicht Ollama, Claude, Gemini, Codex oder Cursor — sie legt sich vor diese Werkzeuge und bietet eine einzige Windows-Oberfläche, um Aufgaben zu verteilen, den Desktop zu automatisieren, Kontext zu behalten und Arbeit an das jeweils passende KI-Backend weiterzuleiten. Die praktische Frage, die dieser Test beantwortet, ist enger gefasst als die Marketing-Aussage: RAPR AI ist nur dann lokal und offline, wenn Sie sie auf Ollama auf Ihrem eigenen Rechner konfigurieren; jedes andere unterstützte Backend ist ein Cloud-API-Aufruf, der über die RAPR-AI-Oberfläche geleitet wird — genau wie bei direkter Nutzung des jeweiligen Dienstes.',
    metaDescription:
      'RAPR AI im Test: eine kostenlose Windows-App im Early Access, die lokale Ollama-Modelle und Cloud-KI (Claude, Gemini, Codex, Cursor) orchestriert — mit Automatisierung, Gedächtnis und MCP-Konnektoren.',
    twitterDescription:
      'RAPR AI im Test: kostenlose Windows-App im Early Access, die zwischen lokalen Ollama-Modellen und Cloud-KI (Claude, Gemini, Cursor) vermittelt — mit Workflow-Automatisierung, Gedächtnis und MCP-Konnektoren.',
    audience:
      'Windows-Nutzer, die bereits lokal Ollama betreiben und zusätzlich Konten bei Cloud-KI-Diensten (Claude, Gemini, Codex, Cursor) haben und einen gemeinsamen Arbeitsbereich für Orchestrierung, Automatisierung und Kontexthaltung über beide hinweg suchen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI ist eine kostenlose Windows-Desktop-App im Early Access, die lokale Ollama-Modelle und Cloud-KI (Claude, Gemini, Codex, Cursor, OpenRouter) aus einem einzigen Arbeitsbereich orchestriert — mit Workflow-Automatisierung, Gedächtnis und MCP-Konnektoren.** Sie wird nur in dem spezifischen Modus zu einem privaten, offline arbeitenden Werkzeug, in dem Sie sie auf die auf Ihrer eigenen Hardware laufende Ollama-Instanz einstellen — jedes andere unterstützte Backend sendet die Unterhaltung an die Cloud-API des jeweiligen Anbieters. macOS- und Linux-Support sind angekündigt, aber noch nicht verfügbar; Windows 10+ ist derzeit die einzige verfügbare Plattform.',
    quickAnswerTop: {
      de: {
        question: 'Ist RAPR AI eine lokale KI-App oder ein Cloud-Tool?',
        answer:
          'Beides. RAPR AI ist eine Windows-Desktop-Kommandozentrale, die bei Auswahl lokaler Modelle vollständig offline über Ollama läuft, und sich zugleich mit Cloud-KI (Claude, Gemini, Codex, Cursor) sowie Hunderten Modellen über OpenRouter verbindet. Orchestrierungsdaten, Gedächtnis und API-Schlüssel bleiben unabhängig vom genutzten Backend auf Ihrem Rechner.',
        bullets: [
          'Kostenlos während des Early Access; kostenpflichtige Stufen für später geplant, noch kein Preis veröffentlicht.',
          'Windows 10+ wird jetzt unterstützt; macOS- und Linux-Support sind angekündigt, aber noch nicht verfügbar.',
          'Der lokale/Offline-Modus erfordert, RAPR AI auf die auf Ihrem Rechner laufende Ollama-Instanz einzustellen.',
          'MCP-Konnektoren (Zapier, Composio) und eine AI-Council-Funktion für den Vergleich mehrerer Modelle.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist RAPR AI?', anchor: 'what-is-rapr' },
      { label: 'Was können Sie mit RAPR AI tun?', anchor: 'core-features' },
      { label: 'Ist RAPR AI wirklich lokal?', anchor: 'is-rapr-local' },
      { label: 'Plattformen und Preise', anchor: 'platforms-pricing' },
      { label: 'Für wen sich RAPR AI eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich RAPR AI nicht eignet', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'RAPR AI ([raprai.com](https://raprai.com/)) ist eine Desktop-"Kommandozentrale", die mehrere KI-Backends orchestriert — lokale Ollama-Modelle und Cloud-KI (Claude, Gemini, Codex, Cursor, OpenRouter) — aus einem Arbeitsbereich.',
          'Lokal und offline arbeitet die App nur, wenn sie auf Ollama auf Ihrem eigenen Rechner konfiguriert ist; die Cloud-Modell-Pfade senden die Unterhaltung weiterhin an die API des jeweiligen Anbieters.',
          'Orchestrierungs-/Sitzungsdaten, der gemeinsame Gedächtnis-Speicher und API-Zugangsdaten bleiben laut eigenen Angaben von RAPR AI unabhängig vom Backend auf dem Rechner des Nutzers.',
          'Zentrale Funktionen: ein visueller Workflow-Builder für KI-Agenten, Desktop-Automatisierung ("Computer Use" — die KI sieht den Bildschirm und führt Aktionen aus), ein anbieterübergreifender gemeinsamer Gedächtnis-Speicher, Fernauslösung über Telegram, geplante KI-Aufgaben, Sprachausgabe (offline TTS oder ElevenLabs), MCP-Konnektoren (Zapier, Composio) sowie eine AI-Council-Funktion für den Modellvergleich.',
          'Windows 10+ wird heute unterstützt; macOS- und Linux-Support sind angekündigt, aber noch nicht verfügbar.',
          'Preise: kostenlos während des Early Access; der Anbieter kündigt spätere kostenpflichtige Stufen an, ein Preis wurde noch nicht veröffentlicht.',
          'Es liegen keine unabhängigen Benchmark-, Bewertungs- oder Download-Zahlen zu RAPR AI vor — behandeln Sie Herstellerangaben zu Leistungsfähigkeit und Datenumgang als unbestätigt, bis Sie sie selbst getestet haben.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'Was ist RAPR AI?',
        content: [
          '**RAPR AI ist eine Desktop-Anwendung von RAPR AI, verfügbar unter [raprai.com](https://raprai.com), die sich selbst als "lokale Desktop-Kommandozentrale für jede KI, die Sie nutzen" beschreibt.** Statt Ollama, Claude, Gemini, Codex oder Cursor zu ersetzen, legt sie sich vor diese Werkzeuge — eine einzige Oberfläche zum Verteilen, Automatisieren und Behalten von Kontext über das jeweils gewählte KI-Backend hinweg.',
          'Die App ist ein hybrides Orchestrierungswerkzeug, keine ausschließlich lokale LLM-App. Sie unterstützt vollständigen Offline-Betrieb über [Ollama](https://ollama.com) auf Ihrer eigenen Hardware und verbindet sich zusätzlich mit Cloud-KI-Diensten und -Agenten — Claude, Gemini, Codex und Cursor — sowie Hunderten Modellen über [OpenRouter](https://openrouter.ai). Ob eine bestimmte Unterhaltung privat und offline bleibt oder an eine Cloud-API weitergeleitet wird, hängt vollständig davon ab, welches Backend Sie in RAPR AI für diese Aufgabe auswählen.',
          'RAPR AI beschreibt sein Datenmodell als "bring your own accounts or local models, no per-token surcharge" — Sie verbinden Ihre eigenen API-Schlüssel oder Ihre eigene lokale Ollama-Installation, und RAPR AI berechnet keinen Aufschlag auf das, was diese Anbieter ohnehin verlangen. Orchestrierungsdaten, Gedächtnis und Zugangsdaten bleiben auf dem Rechner des Nutzers.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Was können Sie mit RAPR AI tatsächlich tun?',
        content: ['Der Funktionsumfang von RAPR AI dreht sich um die Koordination von KI-Backends, nicht darum, selbst eines zu sein:'],
        items: [
          '**Visueller Workflow-Builder für KI-Agenten.** Verketten Sie Schritte über verschiedene Backends hinweg (lokale Ollama-Modelle, Claude, Gemini, Codex, Cursor) zu einem einzigen visuellen Workflow, statt manuell zwischen separaten Chat-Fenstern zu kopieren und einzufügen.',
          '**Desktop-Automatisierung ("Computer Use").** RAPR AI kann den Bildschirm sehen und Aktionen auf Ihrem Desktop ausführen, sodass ein KI-Agent Anwendungen direkt bedienen kann, statt nur Text zu erzeugen, den Sie selbst umsetzen müssen.',
          '**Anbieterübergreifender gemeinsamer Gedächtnis-Speicher.** Eine Gedächtnisschicht, die Kontext über verschiedene Backends hinweg erhält, sodass ein Wechsel von einem lokalen Ollama-Modell zu Claude für einen schwierigeren Schritt nicht bedeutet, die Unterhaltung bei null zu beginnen.',
          '**Fernauslösung über Telegram und geplante Aufgaben.** Starten Sie einen KI-Workflow aus der Ferne per Telegram, oder planen Sie eine Aufgabe, die automatisch ausgeführt wird, ohne die App zu öffnen.',
          '**Sprachausgabe.** Antworten können mit einer Offline-Text-zu-Sprache-Option oder mit ElevenLabs vorgelesen werden, sodass Sie zwischen einem vollständig lokalen Sprachweg und einem Cloud-Sprachdienst wählen können.',
          '**MCP-Konnektoren (Zapier, Composio).** [Model-Context-Protocol](https://modelcontextprotocol.io)-Konnektoren ermöglichen es von RAPR AI verwalteten Agenten, über Zapier und Composio auf externe Dienste zuzugreifen — und erweitern so, worauf ein Agent über den Desktop hinaus einwirken kann.',
          '**AI Council.** Eine Funktion, die denselben Prompt gleichzeitig über mehrere KI-Backends laufen lässt und deren Antworten nebeneinander vergleichen oder gegeneinander abwägen lässt, statt sich auf die Ausgabe eines einzelnen Modells zu verlassen.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'Ist RAPR AI wirklich ein lokales KI-Werkzeug?',
        content: [
          '**RAPR AI ist nur in der spezifischen Konfiguration lokal und offline, in der Sie sie auf die auf Ihrem eigenen Rechner laufende [Ollama](https://ollama.com) einstellen — in jeder anderen Konfiguration ist sie ein Desktop-Client für Cloud-KI-APIs.** Diese Unterscheidung ist wichtig, weil die Marketing-Formulierung "lokale Desktop-Kommandozentrale" beschreibt, dass die App selbst lokal auf Ihrem Rechner läuft, nicht dass jede Unterhaltung darin offline bleibt.',
          'Bei Einstellung auf Ollama läuft die Inferenz auf Ihrer eigenen Hardware, und laut Angaben von RAPR AI muss diese konkrete Unterhaltung Ihren Rechner nicht verlassen. Bei Einstellung auf Claude, Gemini, Codex, Cursor oder ein über OpenRouter geroutetes Modell wird diese Unterhaltung an die Cloud-API des jeweiligen Anbieters gesendet — genau wie bei direkter Nutzung dieser Werkzeuge, nur eben aus der RAPR-AI-Oberfläche heraus angestoßen.',
          'Was in beiden Fällen laut RAPR AI lokal bleibt: Orchestrierungs- und Sitzungsdaten, der gemeinsame Gedächtnis-Speicher sowie Ihre API-Schlüssel und Zugangsdaten. Aufgabe der App ist es, die Unterhaltung zu routen und den umgebenden Workflow zu verwalten, nicht jedes Modell selbst auszuführen — das übernimmt nur der Ollama-Pfad.',
        ],
        note: 'Wenn Datenschutz der Hauptgrund ist, aus dem Sie RAPR AI in Betracht ziehen, bauen Sie jeden Workflow, den Sie darin erstellen, gezielt um das Ollama-Backend herum auf. Ein zusätzlicher Schritt mit Claude, Gemini, Codex, Cursor oder OpenRouter im selben Workflow leitet die Daten dieses Schritts von Ihrem Rechner weg — unabhängig davon, wie der Rest des Workflows konfiguriert ist.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'RAPR AI: Plattform-Support und Preise',
        columns: ['Plattform / Tarif', 'Status', 'Was Sie erwarten können'],
        rows: [
          {
            'Plattform / Tarif': 'Windows',
            'Status': 'Jetzt unterstützt',
            'Was Sie erwarten können': 'RAPR AI läuft heute auf Windows 10 und neuer. Dies ist zum Zeitpunkt dieses Tests die einzige Plattform mit veröffentlichtem Release.',
          },
          {
            'Plattform / Tarif': 'macOS',
            'Status': 'Angekündigt, nicht verfügbar',
            'Was Sie erwarten können': 'RAPR AI hat angekündigt, dass macOS-Support in Arbeit ist. Er ist noch nicht verfügbar — planen Sie derzeit nicht mit einer Mac-Version.',
          },
          {
            'Plattform / Tarif': 'Linux',
            'Status': 'Angekündigt, nicht verfügbar',
            'Was Sie erwarten können': 'Linux-Support wird ebenfalls als in Arbeit befindlich beschrieben, parallel zu macOS. Für keine der beiden Plattformen gibt es ein veröffentlichtes Datum.',
          },
          {
            'Plattform / Tarif': 'Preise',
            'Status': 'Kostenlos (Early Access)',
            'Was Sie erwarten können': 'RAPR AI ist während der Early-Access-Phase kostenlos nutzbar. Der Anbieter kündigt spätere kostenpflichtige Stufen an; ein fester Preis wurde noch nicht veröffentlicht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich RAPR AI eignet',
        items: [
          '**Windows-Nutzer, die bereits Ollama neben mehreren Cloud-KI-Abos jonglieren.** Wenn Sie bereits Konten bei Claude, Gemini oder einen OpenRouter-Schlüssel haben und zusätzlich lokale Modelle über Ollama betreiben, bietet Ihnen RAPR AI einen einzigen Ort, um Aufgaben an das jeweils passende Backend zu verteilen, statt zwischen separaten Apps zu wechseln.',
          '**Nutzer, die einen KI-Agenten wollen, der auf dem Desktop handelt, nicht nur chattet.** Die Funktion "Computer Use"/Desktop-Automatisierung richtet sich an Nutzer, die möchten, dass ein Agent Anwendungen direkt bedient, statt KI-Ausgaben manuell zu kopieren und einzufügen.',
          '**Nutzer, die Antworten über mehrere KI-Backends hinweg vergleichen wollen.** Genau dafür ist die AI-Council-Funktion gebaut — einen Prompt über mehrere Modelle laufen lassen und die Ergebnisse vergleichen, statt einer einzelnen Antwort zu vertrauen.',
          '**Nutzer, die mit Software im Early Access umgehen können.** Der kostenlose Zugang während dieser Phase hat einen Preis: Rechnen Sie damit, dass sich Funktionsumfang, Plattform-Support und Preise ändern, sobald RAPR AI den Early-Access-Status verlässt.',
          '**Nutzer, die KI-Aufgaben über Telegram oder nach Zeitplan automatisieren wollen.** Wenn Fernauslösung oder geplante Ausführungen für Ihren Workflow nützlich sind, unterstützt RAPR AI beides ohne zusätzliches Scripting.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich RAPR AI nicht eignet',
        items: [
          '**Mac- oder Linux-Nutzer, die heute eine funktionierende App brauchen.** RAPR AI ist derzeit nur für Windows verfügbar; macOS- und Linux-Support werden als in Arbeit befindlich beschrieben, sind aber nicht verfügbar. Planen Sie nicht damit, bis ein Release für Ihre Plattform erscheint.',
          '**Nutzer, die ein rein offline arbeitendes, cloud-freies Werkzeug wollen.** RAPR AI ist ein hybrider Orchestrator. Sofern nicht jeder von Ihnen erstellte Workflow auf Ollama eingestellt ist, gehen einige Ihrer Unterhaltungen an Claude, Gemini, Codex, Cursor oder OpenRouter — genau wie bei direkter Nutzung dieser Dienste.',
          '**Nutzer, die heute einen stabilen, langfristig unterstützten Funktionsumfang benötigen.** Kostenlose Software im Early Access von einem kleinen Anbieter ändert Funktionen, Preise und Plattform-Support wahrscheinlicher als ein etabliertes Produkt. Kalkulieren Sie das ein, wenn Sie einen Workflow darauf aufbauen wollen.',
          '**Nutzer, die unabhängig geprüfte Leistungs- oder Zuverlässigkeitszahlen benötigen.** Derzeit liegen keine unabhängigen Benchmark-, Verfügbarkeits- oder Nutzerbewertungsdaten zu RAPR AI vor; dieser Test hat die Angaben des Anbieters zu Funktionen und Datenumgang nicht unabhängig geprüft.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist RAPR AI kostenlos?',
            a: 'Ja, RAPR AI ist während der aktuellen Early-Access-Phase kostenlos. Der Anbieter kündigt an, dass später kostenpflichtige Stufen folgen, ein Preis wurde aber noch nicht veröffentlicht — kalkulieren Sie also mit künftigen Kosten, falls Sie langfristig darauf setzen wollen.',
          },
          {
            q: 'Funktioniert RAPR AI offline?',
            a: 'Nur in der Konfiguration, in der Sie sie mit der auf Ihrem eigenen Rechner laufenden Ollama-Instanz verbinden. In diesem Modus läuft die Inferenz lokal. Nutzen Sie stattdessen die Verbindungen von RAPR AI zu Claude, Gemini, Codex, Cursor oder OpenRouter, benötigen diese Unterhaltungen eine Internetverbindung und laufen über die Cloud-API des jeweiligen Anbieters — genau wie bei direkter Nutzung dieser Werkzeuge.',
          },
          {
            q: 'Gibt es RAPR AI für Mac oder Linux?',
            a: 'Noch nicht. Zum Zeitpunkt dieses Tests läuft RAPR AI ausschließlich auf Windows 10 und neuer. RAPR AI hat angekündigt, dass macOS- und Linux-Support in Arbeit sind, aber für keines der beiden gibt es ein veröffentlichtes Datum.',
          },
          {
            q: 'Was ist die AI-Council-Funktion in RAPR AI?',
            a: 'AI Council ist eine Funktion von RAPR AI, die denselben Prompt gleichzeitig über mehrere KI-Backends laufen lässt, damit Sie deren Antworten nebeneinander vergleichen oder gegeneinander abwägen können, statt sich auf die Antwort eines einzelnen Modells zu verlassen.',
          },
          {
            q: 'Speichert RAPR AI meine Daten oder API-Schlüssel in der Cloud?',
            a: 'RAPR AIs eigene Angabe lautet, dass Orchestrierungs- und Sitzungsdaten, der gemeinsame Gedächtnis-Speicher sowie Ihre API-Schlüssel und Zugangsdaten unabhängig davon, an welches KI-Backend (lokal oder Cloud) eine Aufgabe geroutet wird, auf Ihrem Rechner bleiben. Prüfen Sie vor der Nutzung für sensible Aufgaben direkt die aktuelle Datenschutzerklärung von RAPR AI — dieser Test hat diese Angabe nicht unabhängig geprüft. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Was ist die Funktion "Computer Use" bzw. Desktop-Automatisierung in RAPR AI?',
            a: 'Sie erlaubt einem KI-Agenten in RAPR AI, Ihren Bildschirm zu sehen und direkt Aktionen auf Ihrem Desktop auszuführen — also Anwendungen zu bedienen, statt nur Text zu erzeugen, den Sie selbst umsetzen müssten.',
          },
          {
            q: 'Was ist MCP, und was tun die MCP-Konnektoren von RAPR AI?',
            a: 'Das [Model Context Protocol (MCP)](https://modelcontextprotocol.io) ist ein Standard, der KI-Agenten die Verbindung zu externen Werkzeugen und Datenquellen ermöglicht. RAPR AI unterstützt MCP-Konnektoren für Zapier und Composio, wodurch ein Agent über diese Plattformen auf Dienste außerhalb Ihres Desktops zugreifen kann.',
          },
          {
            q: 'Kann RAPR AI Ollama, Claude oder Cursor ersetzen?',
            a: 'Nein. RAPR AI ersetzt diese Werkzeuge nicht — sie ist eine Orchestrierungsschicht, die sich vor sie legt. Sie benötigen weiterhin ein installiertes Ollama für lokale Modelle oder eigene Konten und API-Schlüssel für Claude, Gemini, Codex, Cursor oder OpenRouter; RAPR AI koordiniert zwischen diesen, statt ein eigenes Modell bereitzustellen.',
          },
          {
            q: 'Unterstützt RAPR AI Sprachantworten?',
            a: 'Ja. RAPR AI kann Antworten mit einer Offline-Text-zu-Sprache-Option oder mit ElevenLabs vorlesen, sodass Sie je nach Priorität zwischen einem vollständig lokalen Sprachweg und einem Cloud-Sprachdienst wählen können.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'RAPR AI lohnt eine Prüfung, wenn Sie bereits lokal Ollama betreiben und zusätzlich Konten bei Cloud-KI-Diensten haben und eine einzige Windows-Desktop-App wollen, um mit Automatisierung, Gedächtnis und MCP-Konnektoren zwischen beiden zu vermitteln — sie lohnt sich heute nicht, wenn Sie eine Mac- oder Linux-Version brauchen oder ein Werkzeug, das in jedem Modus standardmäßig offline arbeitet. Die markantesten Funktionen sind der visuelle Workflow-Builder, die "Computer Use"-Desktop-Automatisierung, der AI-Council-Modellvergleich und ein Gedächtnis-Speicher, der über verschiedene KI-Backends hinweg erhalten bleibt. Der ehrliche Vorbehalt: Es handelt sich um kostenlose Early-Access-Software eines kleinen Anbieters, ohne unabhängige Benchmarks, Bewertungen oder Langzeit-Zuverlässigkeitsdaten, nur für eine Plattform verfügbar — und Funktionsumfang, Preise und Plattform-Support sollten sich erwartbar ändern, bevor RAPR AI den Early-Access-Status verlässt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle RAPR-AI-Website](https://raprai.com) — Produktbeschreibung, Funktionsliste, Plattformverfügbarkeit und Preisstatus.',
          '[Offizielle Ollama-Website](https://ollama.com) — die lokale Inferenz-Engine, mit der sich RAPR AI für Offline-/lokalen Modellsupport verbindet.',
          '[Model-Context-Protocol-Spezifikation](https://modelcontextprotocol.io) — der offene Standard hinter den Zapier- und Composio-Konnektoren von RAPR AI.',
          '[OpenRouter](https://openrouter.ai) — der Routing-Dienst, den RAPR AI für den Zugriff auf Hunderte zusätzliche Cloud-Modelle nutzt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Ollama über MCP mit Datenbanken und APIs verbinden: Lokales Agenten-Setup 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — eine praxisnahe MCP-Setup-Anleitung für lokale Agenten, nützlicher Hintergrund zu den MCP-Konnektoren von RAPR AI.',
          '[Lokale KI-Agenten 2026: Was wirklich funktioniert (und was noch scheitert)](/de/power-local-llm/autonomous-local-agents-actually-work) — ein breiterer Blick auf den aktuellen Stand lokaler Agenten-Werkzeuge, in dem RAPR AI antritt.',
          '[Zapier durch lokale KI-Agenten ersetzen: 5 Workflows, die 30 $/Monat sparen (2026)](/de/power-local-llm/replace-zapier-with-local-ai-agents) — nützlich, wenn Sie den Zapier-MCP-Konnektor von RAPR AI gegen eine vollständig lokale Alternative abwägen.',
          '[Das vollständige lokale LLM-Software-Verzeichnis: 160+ Tools für KI auf eigener Hardware (2026)](/de/power-local-llm/local-llm-software-directory) — sehen Sie, wo sich RAPR AI unter anderen lokalen und hybriden KI-Werkzeugen einordnet.',
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
    heroImage: '/images/rapr-ai-review-hero-es.webp',
    title: 'Reseña de RAPR AI (2026): Centro de Control de Escritorio Local para Ollama, Claude y Gemini',
    seoTitle: 'Reseña RAPR AI 2026: Centro de Control de Agentes IA',
    intro:
      'RAPR AI, desarrollada por RAPR AI y disponible en [raprai.com](https://raprai.com/), se presenta como un "centro de control de escritorio local para cada IA que usas". No reemplaza a Ollama, Claude, Gemini, Codex ni Cursor: se coloca delante de ellos, ofreciendo una única interfaz en Windows para repartir tareas, automatizar el escritorio, mantener el contexto y enrutar el trabajo hacia el backend de IA más adecuado para cada tarea. La pregunta práctica que responde esta reseña es más estrecha de lo que sugiere el mensaje comercial: RAPR AI solo es local y funciona sin conexión cuando la configuras para usar Ollama en tu propio equipo; cualquier otro backend que admite es una llamada a una API en la nube enrutada a través de la interfaz de RAPR AI, exactamente igual que usar ese servicio directamente.',
    metaDescription:
      'Reseña de RAPR AI: una app de Windows gratuita en acceso anticipado que orquesta modelos locales de Ollama e IA en la nube (Claude, Gemini, Codex, Cursor) con automatización, memoria y conectores MCP.',
    twitterDescription:
      'Reseña de RAPR AI: app de Windows gratuita en acceso anticipado que enruta entre modelos locales de Ollama e IA en la nube (Claude, Gemini, Cursor) con automatización de flujos, memoria y conectores MCP.',
    audience:
      'Usuarios de Windows que ya ejecutan Ollama localmente y también tienen cuentas en servicios de IA en la nube (Claude, Gemini, Codex, Cursor) y quieren un solo espacio de trabajo para orquestar, automatizar y mantener el contexto entre ambos.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI es una app de escritorio para Windows gratuita, en acceso anticipado, que orquesta modelos locales de Ollama e IA en la nube (Claude, Gemini, Codex, Cursor, OpenRouter) desde un único espacio de trabajo, con automatización de flujos, memoria y conectores MCP.** Solo se convierte en una herramienta privada y sin conexión en el modo específico donde la configuras para usar Ollama en tu propio hardware; cualquier otro backend que admite envía esa conversación a la API en la nube del proveedor correspondiente. El soporte para macOS y Linux está en desarrollo pero aún no se ha lanzado; Windows 10+ es la única plataforma disponible hoy.',
    quickAnswerTop: {
      es: {
        question: '¿RAPR AI es una app de IA local o una herramienta en la nube?',
        answer:
          'Es ambas cosas. Es un centro de control de escritorio para Windows que funciona totalmente sin conexión mediante Ollama cuando eliges modelos locales, y también se conecta con IA en la nube (Claude, Gemini, Codex, Cursor) y cientos de modelos vía OpenRouter. Los datos de orquestación, la memoria y las claves de API permanecen en tu equipo sin importar el backend que uses.',
        bullets: [
          'Gratis durante el acceso anticipado; se planean niveles de pago más adelante, sin precio publicado todavía.',
          'Windows 10+ es compatible ahora; el soporte de macOS y Linux está en desarrollo, no lanzado.',
          'El modo local/sin conexión requiere configurar RAPR AI para usar Ollama en tu propio equipo.',
          'Conectores MCP (Zapier, Composio) y una función AI Council para comparar varios modelos.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es RAPR AI?', anchor: 'what-is-rapr' },
      { label: '¿Qué puedes hacer con RAPR AI?', anchor: 'core-features' },
      { label: '¿RAPR AI es realmente local?', anchor: 'is-rapr-local' },
      { label: 'Plataformas y precios', anchor: 'platforms-pricing' },
      { label: 'A quién le conviene RAPR AI', anchor: 'who-should-use' },
      { label: 'A quién no le conviene RAPR AI', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        items: [
          'RAPR AI ([raprai.com](https://raprai.com/)) es un "centro de control" de escritorio que orquesta varios backends de IA — modelos locales de Ollama e IA en la nube (Claude, Gemini, Codex, Cursor, OpenRouter) — desde un solo espacio de trabajo.',
          'Es local y funciona sin conexión solo cuando se configura para usar Ollama en tu propio equipo; las rutas de modelos en la nube siguen enviando esa conversación a la API del proveedor correspondiente.',
          'Los datos de orquestación/sesión, la bóveda de memoria compartida y las credenciales de API permanecen en el equipo del usuario sin importar el backend, según las propias afirmaciones de RAPR AI.',
          'Funciones clave: un creador visual de flujos de trabajo para agentes de IA, automatización de escritorio ("computer use", donde la IA puede ver la pantalla y actuar), una bóveda de memoria compartida entre proveedores, activadores remotos por Telegram, tareas de IA programadas, respuestas por voz (TTS sin conexión o ElevenLabs), conectores MCP (Zapier, Composio) y una función AI Council para comparar varios modelos.',
          'Windows 10+ es compatible hoy; el soporte de macOS y Linux está en desarrollo pero aún no se ha lanzado.',
          'Precios: gratis durante el acceso anticipado; el proveedor indica que habrá niveles de pago más adelante, sin precio publicado todavía.',
          'No existen datos independientes de rendimiento, valoraciones o número de descargas para RAPR AI: trata las afirmaciones del proveedor sobre capacidad y manejo de datos como no verificadas hasta probarlas tú mismo.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: '¿Qué es RAPR AI?',
        content: [
          '**RAPR AI es una aplicación de escritorio, desarrollada por RAPR AI y disponible en [raprai.com](https://raprai.com), que se describe como un "centro de control de escritorio local para cada IA que usas".** En lugar de reemplazar a Ollama, Claude, Gemini, Codex o Cursor, se coloca delante de ellos: una sola interfaz para repartir tareas, automatizarlas y mantener el contexto sea cual sea el backend de IA que elijas para cada tarea.',
          'La app es una herramienta de orquestación híbrida, no una app exclusivamente de LLM local. Admite funcionamiento totalmente sin conexión mediante [Ollama](https://ollama.com) en tu propio hardware, y también se conecta con servicios y agentes de IA en la nube — Claude, Gemini, Codex y Cursor — además de cientos de modelos a través de [OpenRouter](https://openrouter.ai). Que una conversación concreta permanezca privada y sin conexión, o se enrute a una API en la nube, depende por completo de qué backend elijas dentro de RAPR AI para esa tarea.',
          'RAPR AI describe su modelo de datos como "trae tus propias cuentas o modelos locales, sin recargo por token" — conectas tus propias claves de API o tu propia instalación local de Ollama, y RAPR AI no añade un margen sobre lo que esos proveedores ya cobran. Los datos de orquestación, la memoria y las credenciales permanecen en el equipo del usuario.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: '¿Qué puedes hacer realmente con RAPR AI?',
        content: ['El conjunto de funciones de RAPR AI se centra en coordinar backends de IA, no en ser uno de ellos:'],
        items: [
          '**Creador visual de flujos de trabajo para agentes de IA.** Encadena pasos entre distintos backends (modelos locales de Ollama, Claude, Gemini, Codex, Cursor) en un único flujo visual, en lugar de copiar y pegar manualmente entre ventanas de chat separadas.',
          '**Automatización de escritorio ("computer use").** RAPR AI puede ver la pantalla y realizar acciones en tu escritorio, lo que permite a un agente de IA operar aplicaciones directamente en lugar de solo producir texto que tienes que ejecutar tú mismo.',
          '**Bóveda de memoria compartida entre proveedores.** Una capa de memoria que persiste el contexto entre distintos backends de IA, de modo que pasar de un modelo local de Ollama a Claude para un paso más difícil no significa empezar la conversación desde cero.',
          '**Activadores remotos por Telegram y tareas programadas.** Inicia un flujo de trabajo de IA a distancia por Telegram, o programa una tarea para que se ejecute automáticamente sin abrir la app.',
          '**Respuestas por voz.** Las respuestas pueden leerse en voz alta usando una opción de texto a voz sin conexión o ElevenLabs, así que puedes elegir entre una vía de voz totalmente local o un servicio de voz en la nube.',
          '**Conectores MCP (Zapier, Composio).** Los conectores de [Model Context Protocol](https://modelcontextprotocol.io) permiten a los agentes gestionados por RAPR AI acceder a servicios externos a través de Zapier y Composio, ampliando lo que un agente puede hacer más allá del propio escritorio.',
          '**AI Council.** Una función para ejecutar el mismo prompt en varios backends de IA a la vez y comparar o contrastar sus respuestas lado a lado, en lugar de confiar solo en la salida de un modelo.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: '¿RAPR AI es realmente una herramienta de IA local?',
        content: [
          '**RAPR AI es local y funciona sin conexión solo en la configuración específica donde la apuntas a [Ollama](https://ollama.com) ejecutándose en tu propio equipo; en cualquier otra configuración, es un cliente de escritorio para APIs de IA en la nube.** Esta distinción importa porque la frase comercial "centro de control de escritorio local" describe que la propia app se ejecuta localmente en tu equipo, no que cada conversación dentro de ella permanezca sin conexión.',
          'Cuando se configura para usar Ollama, la inferencia ocurre en tu propio hardware y, según las afirmaciones de RAPR AI, esa conversación concreta no necesita salir de tu equipo. Cuando se configura para usar Claude, Gemini, Codex, Cursor o un modelo enrutado a través de OpenRouter, esa conversación se envía a la API en la nube del proveedor correspondiente — igual que usar esas herramientas directamente, solo que activada desde la interfaz de RAPR AI.',
          'Lo que permanece local en ambos casos, según RAPR AI: los datos de orquestación y sesión, la bóveda de memoria compartida y tus claves de API y credenciales. El trabajo de la app es enrutar la conversación y gestionar el flujo de trabajo que la rodea, no ejecutar cada modelo por sí misma — eso solo lo hace la vía Ollama.',
        ],
        note: 'Si la privacidad es la razón principal por la que consideras RAPR AI, construye cada flujo de trabajo que crees en ella en torno al backend de Ollama específicamente. Añadir un paso con Claude, Gemini, Codex, Cursor u OpenRouter a ese mismo flujo saca los datos de ese paso de tu equipo, sin importar cómo esté configurado el resto del flujo.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Soporte de plataformas y precios de RAPR AI',
        columns: ['Plataforma / Plan', 'Estado', 'Qué esperar'],
        rows: [
          {
            'Plataforma / Plan': 'Windows',
            'Estado': 'Compatible ahora',
            'Qué esperar': 'RAPR AI funciona en Windows 10 y versiones posteriores hoy mismo. Es la única plataforma con lanzamiento publicado al momento de esta reseña.',
          },
          {
            'Plataforma / Plan': 'macOS',
            'Estado': 'En desarrollo, no lanzado',
            'Qué esperar': 'RAPR AI ha indicado que el soporte de macOS está en desarrollo. Aún no está disponible; no planifiques asumiendo una versión para Mac por ahora.',
          },
          {
            'Plataforma / Plan': 'Linux',
            'Estado': 'En desarrollo, no lanzado',
            'Qué esperar': 'El soporte de Linux también se describe como en desarrollo junto con macOS. Ninguna de las dos plataformas tiene fecha de lanzamiento publicada.',
          },
          {
            'Plataforma / Plan': 'Precios',
            'Estado': 'Gratis (acceso anticipado)',
            'Qué esperar': 'RAPR AI es de uso gratuito durante su periodo de acceso anticipado. El proveedor indica que habrá niveles de pago más adelante; aún no se ha publicado un precio fijo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene RAPR AI',
        items: [
          '**Usuarios de Windows que ya combinan Ollama con varias suscripciones de IA en la nube.** Si ya tienes cuentas en Claude, Gemini o una clave de OpenRouter, y también ejecutas modelos locales con Ollama, RAPR AI te da un solo lugar para repartir tareas al backend adecuado en lugar de cambiar entre aplicaciones separadas.',
          '**Usuarios que quieren un agente de IA capaz de actuar en el escritorio, no solo chatear.** La función de automatización de escritorio / "computer use" está pensada para quienes quieren que un agente opere aplicaciones directamente en lugar de copiar y pegar la salida de la IA a mano.',
          '**Usuarios que quieren comparar respuestas entre varios backends de IA.** La función AI Council está diseñada exactamente para esto: ejecutar un prompt en varios modelos y comparar los resultados en lugar de confiar en una sola respuesta.',
          '**Usuarios cómodos con software en acceso anticipado.** El acceso gratuito durante este periodo tiene una contrapartida: espera que el conjunto de funciones, el soporte de plataformas y los precios cambien a medida que RAPR AI salga del acceso anticipado.',
          '**Usuarios que quieren automatizar tareas de IA vía Telegram o con horario.** Si activar tareas a distancia o programarlas es útil para tu flujo de trabajo, RAPR AI admite ambas cosas sin scripting adicional.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene RAPR AI',
        items: [
          '**Usuarios de Mac o Linux que necesitan una app funcional hoy.** RAPR AI es solo para Windows por ahora; el soporte de macOS y Linux se describe como en desarrollo, pero no está disponible. No planifiques en torno a él hasta que se publique una versión para tu plataforma.',
          '**Usuarios que quieren una herramienta puramente sin conexión y libre de la nube.** RAPR AI es un orquestador híbrido. A menos que cada flujo de trabajo que construyas en él esté configurado para usar Ollama, algunas de tus conversaciones irán a Claude, Gemini, Codex, Cursor u OpenRouter — igual que usar esos servicios directamente.',
          '**Usuarios que necesitan un conjunto de funciones estable y con soporte a largo plazo hoy.** El software gratuito en acceso anticipado de un proveedor pequeño tiene más probabilidades de cambiar sus funciones, precios y soporte de plataformas que un producto establecido. Ten esto en cuenta si planeas construir un flujo de trabajo alrededor de él.',
          '**Usuarios que necesitan cifras de rendimiento o fiabilidad verificadas de forma independiente.** No hay datos independientes de referencia, tiempo de actividad o valoraciones de usuarios disponibles para RAPR AI en este momento; esta reseña no ha auditado de forma independiente las afirmaciones del proveedor sobre funciones y manejo de datos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿RAPR AI es gratis?',
            a: 'Sí, RAPR AI es gratis durante su periodo actual de acceso anticipado. El proveedor indica que habrá niveles de pago más adelante, pero aún no se ha publicado un precio, así que conviene presupuestar un costo futuro si planeas depender de ella a largo plazo.',
          },
          {
            q: '¿RAPR AI funciona sin conexión?',
            a: 'Solo en la configuración donde la conectas a Ollama ejecutándose en tu propio equipo. En ese modo, la inferencia ocurre localmente. Si usas en cambio las conexiones de RAPR AI con Claude, Gemini, Codex, Cursor u OpenRouter, esas conversaciones requieren conexión a internet y van a la API en la nube de ese proveedor, igual que usar esas herramientas directamente.',
          },
          {
            q: '¿Hay RAPR AI para Mac o Linux?',
            a: 'Todavía no. Al momento de esta reseña, RAPR AI funciona solo en Windows 10 y versiones posteriores. RAPR AI ha indicado que el soporte de macOS y Linux está en desarrollo, pero ninguno tiene fecha de lanzamiento publicada.',
          },
          {
            q: '¿Qué es la función AI Council en RAPR AI?',
            a: 'AI Council es una función de RAPR AI que ejecuta el mismo prompt en varios backends de IA a la vez para que puedas comparar o contrastar sus respuestas lado a lado, en lugar de depender de la respuesta de un solo modelo.',
          },
          {
            q: '¿RAPR AI almacena mis datos o claves de API en la nube?',
            a: 'La propia afirmación de RAPR AI es que los datos de orquestación y sesión, su bóveda de memoria compartida y tus claves de API y credenciales permanecen en tu equipo, sin importar a qué backend de IA (local o en la nube) enrutes una tarea concreta. Revisa directamente la política de privacidad actual de RAPR AI antes de usarla para trabajo sensible; esta reseña no ha auditado de forma independiente esa afirmación. Esto no es asesoramiento legal.',
          },
          {
            q: '¿Qué es la función "computer use" o de automatización de escritorio en RAPR AI?',
            a: 'Permite que un agente de IA dentro de RAPR AI vea tu pantalla y realice acciones en tu escritorio directamente, operando aplicaciones en lugar de solo producir texto que tendrías que ejecutar tú mismo.',
          },
          {
            q: '¿Qué es MCP y qué hacen los conectores MCP de RAPR AI?',
            a: 'El [Model Context Protocol (MCP)](https://modelcontextprotocol.io) es un estándar que permite a los agentes de IA conectarse con herramientas y fuentes de datos externas. RAPR AI admite conectores MCP para Zapier y Composio, permitiendo que un agente acceda a servicios más allá de tu escritorio a través de esas plataformas.',
          },
          {
            q: '¿RAPR AI puede reemplazar a Ollama, Claude o Cursor?',
            a: 'No. RAPR AI no es un reemplazo de esas herramientas: es una capa de orquestación que se coloca delante de ellas. Sigues necesitando Ollama instalado para modelos locales, o tus propias cuentas y claves de API para Claude, Gemini, Codex, Cursor u OpenRouter; RAPR AI coordina entre ellos en lugar de aportar su propio modelo.',
          },
          {
            q: '¿RAPR AI admite respuestas por voz?',
            a: 'Sí. RAPR AI puede leer las respuestas en voz alta usando una opción de texto a voz sin conexión o ElevenLabs, así que puedes elegir una vía de voz totalmente local o un servicio de voz en la nube según tus prioridades.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Vale la pena evaluar RAPR AI si ya ejecutas Ollama localmente y también tienes cuentas en servicios de IA en la nube, y quieres una sola app de escritorio para Windows que enrute entre ambos con automatización, memoria y conectores MCP; no vale la pena hoy si necesitas una versión para Mac o Linux, o una herramienta que esté sin conexión por defecto en todos los modos. Sus funciones más distintivas son el creador visual de flujos de trabajo, la automatización de escritorio "computer use", la comparación multimodelo AI Council y una bóveda de memoria que persiste entre distintos backends de IA. La salvedad honesta: es software gratuito en acceso anticipado de un proveedor pequeño, sin referencias de rendimiento, valoraciones ni datos de fiabilidad a largo plazo independientes disponibles, en una sola plataforma, y hay que esperar que su conjunto de funciones, precios y soporte de plataformas cambien antes de que RAPR AI salga del acceso anticipado.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de RAPR AI](https://raprai.com) — descripción del producto, lista de funciones, disponibilidad por plataforma y estado de precios.',
          '[Sitio oficial de Ollama](https://ollama.com) — el motor de inferencia local al que se conecta RAPR AI para el soporte local/sin conexión.',
          '[Especificación del Model Context Protocol](https://modelcontextprotocol.io) — el estándar abierto detrás de los conectores de RAPR AI para Zapier y Composio.',
          '[OpenRouter](https://openrouter.ai) — el servicio de enrutamiento que usa RAPR AI para acceder a cientos de modelos en la nube adicionales.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conecta Ollama a bases de datos y APIs con MCP: configuración de agentes locales 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — una guía práctica de configuración de MCP para agentes locales, buen contexto para los conectores MCP de RAPR AI.',
          '[Agentes de IA locales en 2026: qué funciona de verdad (y qué sigue fallando)](/es/power-local-llm/autonomous-local-agents-actually-work) — una mirada más amplia al estado actual de las herramientas de agentes locales en el que compite RAPR AI.',
          '[Reemplaza Zapier con agentes de IA locales: 5 flujos de trabajo que ahorran $30/mes (2026)](/es/power-local-llm/replace-zapier-with-local-ai-agents) — útil si estás sopesando el conector MCP de Zapier de RAPR AI frente a una alternativa totalmente local.',
          '[El directorio completo de software LLM local: más de 160 herramientas para IA en tu propio hardware (2026)](/es/power-local-llm/local-llm-software-directory) — descubre dónde encaja RAPR AI entre otras herramientas de IA locales e híbridas.',
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
    heroImage: '/images/rapr-ai-review-hero-fr.webp',
    title: 'RAPR AI : notre avis (2026) — centre de contrôle local pour Ollama, Claude et Gemini',
    seoTitle: 'RAPR AI : avis 2026 sur ce centre de contrôle IA',
    intro:
      'RAPR AI, développée par RAPR AI et disponible sur [raprai.com](https://raprai.com/), se présente comme un "centre de contrôle de bureau local pour chaque IA que vous utilisez". Elle ne remplace ni Ollama, ni Claude, ni Gemini, ni Codex, ni Cursor : elle se place devant ces outils et offre une interface Windows unique pour répartir les tâches, automatiser le bureau, conserver le contexte et orienter le travail vers le backend d\'IA le plus adapté. La question pratique à laquelle répond cet avis est plus restreinte que le discours commercial ne le laisse penser : RAPR AI n\'est locale et hors ligne que lorsque vous la configurez pour utiliser Ollama sur votre propre machine ; tout autre backend qu\'elle prend en charge correspond à un appel API cloud relayé par l\'interface de RAPR AI, exactement comme si vous utilisiez ce service directement.',
    metaDescription:
      'Avis RAPR AI : une app Windows gratuite en accès anticipé qui orchestre des modèles Ollama locaux et de l\'IA cloud (Claude, Gemini, Codex, Cursor) avec automatisation, mémoire et connecteurs MCP.',
    twitterDescription:
      'Avis RAPR AI : app Windows gratuite en accès anticipé qui bascule entre modèles Ollama locaux et IA cloud (Claude, Gemini, Cursor), avec automatisation de workflows, mémoire et connecteurs MCP.',
    audience:
      'Utilisateurs Windows qui font déjà tourner Ollama en local et possèdent aussi des comptes chez des services d\'IA cloud (Claude, Gemini, Codex, Cursor), et veulent un espace de travail unique pour orchestrer, automatiser et conserver le contexte entre les deux.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI est une application de bureau Windows gratuite, en accès anticipé, qui orchestre des modèles Ollama locaux et de l\'IA cloud (Claude, Gemini, Codex, Cursor, OpenRouter) depuis un seul espace de travail, avec automatisation des workflows, mémoire et connecteurs MCP.** Elle ne devient un outil privé et hors ligne que dans le mode précis où vous la configurez pour utiliser Ollama sur votre propre matériel ; tout autre backend pris en charge envoie la conversation vers l\'API cloud du fournisseur concerné. Le support macOS et Linux est en cours mais pas encore disponible ; Windows 10+ est aujourd\'hui la seule plateforme disponible.',
    quickAnswerTop: {
      fr: {
        question: 'RAPR AI est-elle une app IA locale ou un outil cloud ?',
        answer:
          'Les deux. C\'est un centre de contrôle de bureau Windows qui fonctionne entièrement hors ligne via Ollama quand vous choisissez des modèles locaux, et qui se connecte aussi à l\'IA cloud (Claude, Gemini, Codex, Cursor) et à des centaines de modèles via OpenRouter. Les données d\'orchestration, la mémoire et les clés API restent sur votre machine quel que soit le backend utilisé.',
        bullets: [
          'Gratuite pendant l\'accès anticipé ; des niveaux payants sont prévus plus tard, aucun prix publié à ce jour.',
          'Windows 10+ pris en charge dès maintenant ; support macOS et Linux en cours, non disponible.',
          'Le mode local/hors ligne exige de configurer RAPR AI pour utiliser Ollama sur votre propre machine.',
          'Connecteurs MCP (Zapier, Composio) et fonction AI Council pour comparer plusieurs modèles.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que RAPR AI ?', anchor: 'what-is-rapr' },
      { label: 'Que pouvez-vous faire avec RAPR AI ?', anchor: 'core-features' },
      { label: 'RAPR AI est-elle vraiment locale ?', anchor: 'is-rapr-local' },
      { label: 'Plateformes et tarifs', anchor: 'platforms-pricing' },
      { label: 'Pour qui RAPR AI convient', anchor: 'who-should-use' },
      { label: 'Pour qui RAPR AI ne convient pas', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          'RAPR AI ([raprai.com](https://raprai.com/)) est un "centre de contrôle" de bureau qui orchestre plusieurs backends d\'IA — modèles Ollama locaux et IA cloud (Claude, Gemini, Codex, Cursor, OpenRouter) — depuis un seul espace de travail.',
          'Elle n\'est locale et hors ligne que lorsqu\'elle est configurée pour utiliser Ollama sur votre propre machine ; les chemins vers les modèles cloud continuent d\'envoyer la conversation à l\'API du fournisseur concerné.',
          'Les données d\'orchestration/de session, le coffre de mémoire partagé et les identifiants d\'API restent sur la machine de l\'utilisateur quel que soit le backend, selon les déclarations de RAPR AI elle-même.',
          'Fonctions clés : un créateur visuel de workflows pour agents IA, l\'automatisation du bureau ("computer use" — l\'IA voit l\'écran et agit), un coffre de mémoire partagé entre fournisseurs, des déclencheurs à distance via Telegram, des tâches IA planifiées, des réponses vocales (synthèse vocale hors ligne ou ElevenLabs), des connecteurs MCP (Zapier, Composio), et une fonction AI Council pour comparer plusieurs IA.',
          'Windows 10+ est pris en charge dès aujourd\'hui ; le support macOS et Linux est en cours mais pas encore disponible.',
          'Tarifs : gratuit pendant l\'accès anticipé ; l\'éditeur indique que des niveaux payants suivront, sans prix publié à ce jour.',
          'Aucune donnée indépendante de benchmark, de notation ou de nombre de téléchargements n\'existe pour RAPR AI — considérez les affirmations de l\'éditeur sur les capacités et le traitement des données comme non vérifiées tant que vous ne les avez pas testées vous-même.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'Qu\'est-ce que RAPR AI ?',
        content: [
          '**RAPR AI est une application de bureau, développée par RAPR AI et disponible sur [raprai.com](https://raprai.com), qui se décrit comme un "centre de contrôle de bureau local pour chaque IA que vous utilisez".** Plutôt que de remplacer Ollama, Claude, Gemini, Codex ou Cursor, elle se place devant ces outils — une interface unique pour répartir les tâches, les automatiser et en conserver le contexte, quel que soit le backend d\'IA choisi pour une tâche donnée.',
          'L\'application est un outil d\'orchestration hybride, pas une app exclusivement dédiée aux LLM locaux. Elle prend en charge un fonctionnement entièrement hors ligne via [Ollama](https://ollama.com) sur votre propre matériel, et se connecte aussi à des services et agents d\'IA cloud — Claude, Gemini, Codex et Cursor — plus des centaines de modèles via [OpenRouter](https://openrouter.ai). Le fait qu\'une conversation donnée reste privée et hors ligne, ou soit acheminée vers une API cloud, dépend entièrement du backend choisi dans RAPR AI pour cette tâche.',
          'RAPR AI décrit son modèle de données comme "apportez vos propres comptes ou modèles locaux, sans surcoût par jeton" — vous connectez vos propres clés API ou votre propre installation locale d\'Ollama, et RAPR AI n\'ajoute pas de marge par-dessus ce que ces fournisseurs facturent déjà. Les données d\'orchestration, la mémoire et les identifiants restent sur la machine de l\'utilisateur.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Que pouvez-vous vraiment faire avec RAPR AI ?',
        content: ['L\'ensemble de fonctions de RAPR AI vise à coordonner des backends d\'IA plutôt qu\'à en être un elle-même :'],
        items: [
          '**Créateur visuel de workflows pour agents IA.** Enchaînez des étapes entre différents backends (modèles Ollama locaux, Claude, Gemini, Codex, Cursor) dans un seul workflow visuel, au lieu de copier-coller manuellement entre des fenêtres de discussion distinctes.',
          '**Automatisation du bureau ("computer use").** RAPR AI peut voir l\'écran et agir sur votre bureau, permettant à un agent IA d\'opérer directement des applications plutôt que de simplement produire du texte que vous devez exécuter vous-même.',
          '**Coffre de mémoire partagé entre fournisseurs.** Une couche de mémoire qui conserve le contexte entre différents backends d\'IA, de sorte que passer d\'un modèle Ollama local à Claude pour une étape plus difficile ne signifie pas repartir de zéro.',
          '**Déclencheurs à distance via Telegram et tâches planifiées.** Lancez un workflow IA à distance via Telegram, ou planifiez une tâche pour qu\'elle s\'exécute automatiquement sans ouvrir l\'application.',
          '**Réponses vocales.** Les réponses peuvent être lues à voix haute via une option de synthèse vocale hors ligne ou via ElevenLabs, ce qui permet de choisir entre une voie vocale entièrement locale ou un service vocal cloud.',
          '**Connecteurs MCP (Zapier, Composio).** Les connecteurs [Model Context Protocol](https://modelcontextprotocol.io) permettent aux agents gérés par RAPR AI d\'accéder à des services externes via Zapier et Composio, élargissant ce sur quoi un agent peut agir au-delà du bureau.',
          '**AI Council.** Une fonction pour exécuter le même prompt sur plusieurs backends d\'IA en même temps et comparer ou confronter leurs réponses côte à côte, plutôt que de se fier à la sortie d\'un seul modèle.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'RAPR AI est-elle vraiment un outil d\'IA local ?',
        content: [
          '**RAPR AI n\'est locale et hors ligne que dans la configuration précise où vous la pointez vers [Ollama](https://ollama.com) fonctionnant sur votre propre machine — dans toute autre configuration, c\'est un client de bureau pour des API d\'IA cloud.** Cette distinction compte, car la formule commerciale "centre de contrôle de bureau local" décrit le fait que l\'application elle-même tourne localement sur votre machine, pas que chaque conversation en son sein reste hors ligne.',
          'Configurée sur Ollama, l\'inférence se fait sur votre propre matériel et, selon les déclarations de RAPR AI, cette conversation précise n\'a pas besoin de quitter votre machine. Configurée sur Claude, Gemini, Codex, Cursor ou un modèle acheminé via OpenRouter, cette conversation est envoyée vers l\'API cloud du fournisseur correspondant — exactement comme si vous utilisiez ces outils directement, mais déclenchée depuis l\'interface de RAPR AI.',
          'Ce qui reste local dans les deux cas, selon RAPR AI : les données d\'orchestration et de session, le coffre de mémoire partagé, et vos clés API et identifiants. Le rôle de l\'application est d\'acheminer la conversation et de gérer le workflow environnant, pas de faire tourner chaque modèle elle-même — seule la voie Ollama fait cela.',
        ],
        note: 'Si la confidentialité est la principale raison pour laquelle vous envisagez RAPR AI, construisez chaque workflow que vous y créez spécifiquement autour du backend Ollama. Ajouter une étape Claude, Gemini, Codex, Cursor ou OpenRouter au même workflow fait sortir les données de cette étape de votre machine, quelle que soit la configuration du reste du workflow.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Plateformes prises en charge et tarifs de RAPR AI',
        columns: ['Plateforme / Offre', 'Statut', 'À quoi s\'attendre'],
        rows: [
          {
            'Plateforme / Offre': 'Windows',
            'Statut': 'Prise en charge dès maintenant',
            'À quoi s\'attendre': 'RAPR AI fonctionne dès aujourd\'hui sur Windows 10 et versions ultérieures. C\'est la seule plateforme avec une version publiée au moment de cet avis.',
          },
          {
            'Plateforme / Offre': 'macOS',
            'Statut': 'En cours, non disponible',
            'À quoi s\'attendre': 'RAPR AI a indiqué que le support macOS est en cours. Il n\'est pas encore disponible — ne comptez pas sur une version Mac pour l\'instant.',
          },
          {
            'Plateforme / Offre': 'Linux',
            'Statut': 'En cours, non disponible',
            'À quoi s\'attendre': 'Le support Linux est également décrit comme en cours, en parallèle de macOS. Aucune date de sortie n\'est publiée pour l\'une ou l\'autre plateforme.',
          },
          {
            'Plateforme / Offre': 'Tarifs',
            'Statut': 'Gratuit (accès anticipé)',
            'À quoi s\'attendre': 'RAPR AI est gratuite pendant sa période d\'accès anticipé. L\'éditeur indique que des niveaux payants suivront plus tard ; aucun prix fixe n\'a encore été publié.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui RAPR AI convient',
        items: [
          '**Utilisateurs Windows qui jonglent déjà entre Ollama et plusieurs abonnements d\'IA cloud.** Si vous avez déjà des comptes chez Claude, Gemini, ou une clé OpenRouter, et que vous faites aussi tourner des modèles locaux via Ollama, RAPR AI vous offre un seul endroit pour répartir les tâches vers le backend adapté au lieu de basculer entre applications distinctes.',
          '**Utilisateurs qui veulent un agent IA capable d\'agir sur le bureau, pas seulement de discuter.** La fonction d\'automatisation du bureau / "computer use" vise ceux qui veulent qu\'un agent opère directement les applications plutôt que de copier-coller la sortie de l\'IA à la main.',
          '**Utilisateurs qui veulent comparer les réponses de plusieurs backends d\'IA.** La fonction AI Council est conçue exactement pour cela : exécuter un prompt sur plusieurs modèles et comparer les résultats plutôt que de se fier à une seule réponse.',
          '**Utilisateurs à l\'aise avec les logiciels en accès anticipé.** L\'accès gratuit pendant cette période a une contrepartie : attendez-vous à ce que les fonctions, le support des plateformes et les tarifs évoluent à mesure que RAPR AI sort de l\'accès anticipé.',
          '**Utilisateurs qui veulent automatiser des tâches IA via Telegram ou selon un planning.** Si le déclenchement à distance ou les exécutions planifiées sont utiles à votre workflow, RAPR AI prend en charge les deux sans script supplémentaire.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui RAPR AI ne convient pas',
        items: [
          '**Utilisateurs Mac ou Linux qui ont besoin d\'une application fonctionnelle aujourd\'hui.** RAPR AI est aujourd\'hui réservée à Windows ; le support macOS et Linux est décrit comme en cours mais n\'est pas disponible. Ne comptez pas dessus tant qu\'une version n\'est pas sortie sur votre plateforme.',
          '**Utilisateurs qui veulent un outil purement hors ligne et sans cloud.** RAPR AI est un orchestrateur hybride. À moins que chaque workflow que vous y créez soit configuré pour utiliser Ollama, certaines de vos conversations partiront vers Claude, Gemini, Codex, Cursor ou OpenRouter — exactement comme si vous utilisiez ces services directement.',
          '**Utilisateurs qui ont besoin dès aujourd\'hui d\'un ensemble de fonctions stable et soutenu sur le long terme.** Un logiciel gratuit en accès anticipé, développé par un petit éditeur, a plus de chances de voir ses fonctions, ses tarifs et son support de plateformes évoluer qu\'un produit établi. Prévoyez cela si vous voulez bâtir un workflow autour.',
          '**Utilisateurs qui ont besoin de chiffres de performance ou de fiabilité vérifiés de façon indépendante.** Aucune donnée indépendante de benchmark, de disponibilité ou de notation utilisateur n\'existe pour RAPR AI à ce jour ; cet avis n\'a pas audité de façon indépendante les affirmations de l\'éditeur sur les fonctions et le traitement des données.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'RAPR AI est-elle gratuite ?',
            a: 'Oui, RAPR AI est gratuite pendant sa période actuelle d\'accès anticipé. L\'éditeur indique que des niveaux payants suivront plus tard, mais aucun prix n\'a encore été publié — prévoyez donc un coût futur si vous comptez vous appuyer dessus sur la durée.',
          },
          {
            q: 'RAPR AI fonctionne-t-elle hors ligne ?',
            a: 'Uniquement dans la configuration où vous la connectez à Ollama fonctionnant sur votre propre machine. Dans ce mode, l\'inférence se fait localement. Si vous utilisez plutôt les connexions de RAPR AI vers Claude, Gemini, Codex, Cursor ou OpenRouter, ces conversations nécessitent une connexion internet et passent par l\'API cloud de ce fournisseur, exactement comme si vous utilisiez ces outils directement.',
          },
          {
            q: 'RAPR AI est-elle disponible sur Mac ou Linux ?',
            a: 'Pas encore. Au moment de cet avis, RAPR AI ne fonctionne que sur Windows 10 et versions ultérieures. RAPR AI a indiqué que le support macOS et Linux est en cours, mais aucune date de sortie n\'est publiée pour l\'un ou l\'autre.',
          },
          {
            q: 'Qu\'est-ce que la fonction AI Council dans RAPR AI ?',
            a: 'AI Council est une fonction de RAPR AI qui exécute le même prompt sur plusieurs backends d\'IA en même temps, pour que vous puissiez comparer ou confronter leurs réponses côte à côte plutôt que de vous fier à la réponse d\'un seul modèle.',
          },
          {
            q: 'RAPR AI stocke-t-elle mes données ou mes clés API dans le cloud ?',
            a: 'RAPR AI affirme elle-même que les données d\'orchestration et de session, son coffre de mémoire partagé, ainsi que vos clés API et identifiants restent sur votre machine, quel que soit le backend d\'IA (local ou cloud) vers lequel une tâche donnée est acheminée. Consultez directement la politique de confidentialité actuelle de RAPR AI avant de l\'utiliser pour un travail sensible — cet avis n\'a pas audité cette affirmation de façon indépendante. Ceci ne constitue pas un avis juridique.',
          },
          {
            q: 'Qu\'est-ce que la fonction "computer use" ou d\'automatisation du bureau dans RAPR AI ?',
            a: 'Elle permet à un agent IA au sein de RAPR AI de voir votre écran et d\'effectuer des actions directement sur votre bureau — c\'est-à-dire d\'opérer des applications plutôt que de simplement produire du texte que vous auriez ensuite à exécuter vous-même.',
          },
          {
            q: 'Qu\'est-ce que le MCP, et que font les connecteurs MCP de RAPR AI ?',
            a: 'Le [Model Context Protocol (MCP)](https://modelcontextprotocol.io) est une norme qui permet aux agents IA de se connecter à des outils et sources de données externes. RAPR AI prend en charge des connecteurs MCP pour Zapier et Composio, permettant à un agent d\'atteindre des services au-delà de votre bureau via ces plateformes.',
          },
          {
            q: 'RAPR AI peut-elle remplacer Ollama, Claude ou Cursor ?',
            a: 'Non. RAPR AI ne remplace pas ces outils : c\'est une couche d\'orchestration qui se place devant eux. Vous avez toujours besoin d\'Ollama installé pour les modèles locaux, ou de vos propres comptes et clés API pour Claude, Gemini, Codex, Cursor ou OpenRouter ; RAPR AI coordonne entre eux au lieu de fournir son propre modèle.',
          },
          {
            q: 'RAPR AI prend-elle en charge les réponses vocales ?',
            a: 'Oui. RAPR AI peut lire les réponses à voix haute via une option de synthèse vocale hors ligne ou via ElevenLabs, ce qui permet de choisir entre une voie vocale entièrement locale ou un service vocal cloud selon vos priorités.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'RAPR AI mérite d\'être évaluée si vous faites déjà tourner Ollama en local et possédez aussi des comptes chez des services d\'IA cloud, et que vous voulez une seule application de bureau Windows pour basculer entre les deux avec automatisation, mémoire et connecteurs MCP — elle ne mérite pas d\'être évaluée aujourd\'hui si vous avez besoin d\'une version Mac ou Linux, ou d\'un outil hors ligne par défaut dans tous les modes. Ses fonctions les plus distinctives sont le créateur visuel de workflows, l\'automatisation "computer use" du bureau, la comparaison multi-modèles AI Council, et un coffre de mémoire qui persiste entre différents backends d\'IA. La réserve honnête : il s\'agit d\'un logiciel gratuit en accès anticipé développé par un petit éditeur, sans benchmarks indépendants, notations ni données de fiabilité à long terme disponibles, sur une seule plateforme, et son ensemble de fonctions, ses tarifs et son support de plateformes devraient tous évoluer avant que RAPR AI ne sorte de l\'accès anticipé.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel de RAPR AI](https://raprai.com) — description du produit, liste de fonctions, disponibilité par plateforme et statut tarifaire.',
          '[Site officiel d\'Ollama](https://ollama.com) — le moteur d\'inférence local auquel RAPR AI se connecte pour le support local/hors ligne.',
          '[Spécification du Model Context Protocol](https://modelcontextprotocol.io) — la norme ouverte derrière les connecteurs Zapier et Composio de RAPR AI.',
          '[OpenRouter](https://openrouter.ai) — le service de routage utilisé par RAPR AI pour accéder à des centaines de modèles cloud supplémentaires.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama à des bases de données et des API via MCP : configuration d\'agents locaux 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — un guide pratique de configuration MCP pour agents locaux, un bon complément aux connecteurs MCP de RAPR AI.',
          '[Agents IA locaux en 2026 : ce qui fonctionne vraiment (et ce qui échoue encore)](/fr/power-local-llm/autonomous-local-agents-actually-work) — un panorama plus large de l\'état actuel des outils d\'agents locaux, sur le terrain où RAPR AI se positionne.',
          '[Remplacer Zapier par des agents IA locaux : 5 workflows qui économisent 30 $/mois (2026)](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — utile si vous comparez le connecteur MCP Zapier de RAPR AI à une alternative entièrement locale.',
          '[Le répertoire complet des logiciels LLM locaux : plus de 160 outils pour faire tourner l\'IA sur votre propre matériel (2026)](/fr/power-local-llm/local-llm-software-directory) — voyez où se situe RAPR AI parmi les autres outils d\'IA locaux et hybrides.',
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
    heroImage: '/images/rapr-ai-review-hero-ja.webp',
    title: 'RAPR AIレビュー（2026）：Ollama・Claude・Geminiをまとめるローカルデスクトップ司令塔',
    seoTitle: 'RAPR AIレビュー2026：AIエージェント司令塔アプリ',
    intro:
      'RAPR AI社が開発しraprai.comで公開されているRAPR AIは、「使っているすべてのAIのためのローカルデスクトップ司令塔」を掲げるアプリです。OllamaやClaude、Gemini、Codex、Cursorを置き換えるものではなく、それらの手前に立ち、タスクの振り分け、デスクトップ自動化、コンテキストの記憶、タスクごとに最適なAIバックエンドへのルーティングを、Windows上の一つの画面から行えるようにします。本レビューが答える実務的な問いは、宣伝文句が示唆するより限定的です。RAPR AIがローカルかつオフラインになるのは、自分のマシン上のOllamaを使う設定にした場合のみで、それ以外のバックエンドはすべて、RAPR AIの画面を経由してクラウドAPIを呼び出しているにすぎません。これは各サービスを直接使う場合と同じです。',
    metaDescription:
      'RAPR AIレビュー：ローカルのOllamaモデルとクラウドAI（Claude、Gemini、Codex、Cursor）を自動化・記憶・MCPコネクタでまとめる、早期アクセス無料のWindowsアプリ。',
    twitterDescription:
      'RAPR AIレビュー：ローカルOllamaモデルとクラウドAI（Claude、Gemini、Cursor）をつなぐ早期アクセス無料のWindowsアプリ。ワークフロー自動化、記憶、MCPコネクタ対応。',
    audience:
      'すでにOllamaをローカルで運用しつつ、Claude・Gemini・Codex・Cursorなどクラウド AIサービスのアカウントも持ち、両者をまとめて自動化・記憶できる作業スペースを求めるWindowsユーザー。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AIは、ローカルのOllamaモデルとクラウドAI（Claude、Gemini、Codex、Cursor、OpenRouter）を一つの作業スペースから統合する、早期アクセス無料のWindowsデスクトップアプリです。ワークフロー自動化・記憶・MCPコネクタを備えます。** プライベートかつオフラインのツールになるのは、自分のハードウェア上で動くOllamaを使う設定にした場合のみで、それ以外に対応するバックエンドはすべて会話を該当プロバイダーのクラウドAPIへ送信します。macOS・Linux対応は開発中で未提供、現時点で利用できるのはWindows 10以降のみです。',
    quickAnswerTop: {
      ja: {
        question: 'RAPR AIはローカルAIアプリか、それともクラウドツールか？',
        answer:
          '両方です。ローカルモデルを選べばOllama経由で完全にオフライン動作するWindowsデスクトップ司令塔である一方、クラウドAI（Claude、Gemini、Codex、Cursor）やOpenRouter経由の数百のモデルにも接続します。どのバックエンドを使っても、統合データ・記憶・APIキーは自分のマシンに留まります。',
        bullets: [
          '早期アクセス期間中は無料。有料プランは後日予定、価格は未公表。',
          'Windows 10以降は今すぐ対応。macOS・Linux対応は開発中で未提供。',
          'ローカル／オフラインモードには、自分のマシン上で動くOllamaへの接続設定が必要。',
          'MCPコネクタ（Zapier、Composio）と、複数モデルを比較するAI Council機能を搭載。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'RAPR AIとは？', anchor: 'what-is-rapr' },
      { label: 'RAPR AIで何ができる？', anchor: 'core-features' },
      { label: 'RAPR AIは本当にローカルか？', anchor: 'is-rapr-local' },
      { label: '対応プラットフォームと料金', anchor: 'platforms-pricing' },
      { label: 'RAPR AIが向いている人', anchor: 'who-should-use' },
      { label: 'RAPR AIが向いていない人', anchor: 'who-should-not-use' },
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
        items: [
          'RAPR AI（[raprai.com](https://raprai.com/)）は、ローカルのOllamaモデルとクラウドAI（Claude、Gemini、Codex、Cursor、OpenRouter）という複数のAIバックエンドを一つの作業スペースから統合するデスクトップ「司令塔」アプリです。',
          'ローカルかつオフラインになるのは、自分のマシン上のOllamaを使う設定にした場合のみで、クラウドモデル経由の会話は該当プロバイダーのAPIへ送信され続けます。',
          'RAPR AI自身の説明によれば、統合／セッションデータ、共有記憶ボールト、API認証情報は、使用するバックエンドに関わらずユーザーのマシンに保持されます。',
          '主な機能：AIエージェント用のビジュアルワークフロービルダー、デスクトップ自動化（「computer use」— AIが画面を見て操作を実行）、プロバイダー横断の共有記憶ボールト、Telegram経由のリモートトリガー、AIタスクのスケジュール実行、音声応答（オフラインTTSまたはElevenLabs）、MCPコネクタ（Zapier、Composio）、複数AIを比較するAI Council機能。',
          'Windows 10以降は現在対応済み。macOS・Linux対応は開発中で未提供。',
          '料金：早期アクセス期間中は無料。開発元は後日有料プランを予定していると述べていますが、価格はまだ公表されていません。',
          'RAPR AIについて第三者によるベンチマーク・評価・ダウンロード数のデータは存在しません。機能やデータ取り扱いに関する開発元の主張は、自分で検証するまでは未確認のものとして扱ってください。',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'RAPR AIとは？',
        content: [
          '**RAPR AIは、RAPR AI社が開発し[raprai.com](https://raprai.com)で公開しているデスクトップアプリで、「使っているすべてのAIのためのローカルデスクトップ司令塔」を自称しています。** Ollama、Claude、Gemini、Codex、Cursorを置き換えるのではなく、それらの手前に立ち、タスクごとに選んだAIバックエンドを横断してタスクを振り分け、自動化し、コンテキストを記憶する単一のインターフェースを提供します。',
          'このアプリはハイブリッドなオーケストレーションツールであり、ローカルLLM専用アプリではありません。自分のハードウェア上で動く[Ollama](https://ollama.com)による完全なオフライン動作に対応する一方、クラウドAIサービス・エージェント（Claude、Gemini、Codex、Cursor）と、[OpenRouter](https://openrouter.ai)経由の数百のモデルにも接続します。ある会話がプライベートかつオフラインのままか、クラウドAPIへ送られるかは、そのタスクでRAPR AI内でどのバックエンドを選ぶかに完全に依存します。',
          'RAPR AIは自社のデータモデルを「自分のアカウントやローカルモデルを持ち込み、トークンごとの上乗せ料金なし」と説明しています。つまり自分のAPIキーやローカルのOllama環境を接続する形で、RAPR AIはそれらのプロバイダーが元々請求する料金に上乗せしません。統合データ、記憶、認証情報はユーザーのマシンに保持されます。',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'RAPR AIで実際に何ができるのか？',
        content: ['RAPR AIの機能群は、自らがモデルであることよりも、AIバックエンドの調整に重点を置いています。'],
        items: [
          '**AIエージェント用のビジュアルワークフロービルダー。** 別々のチャットウィンドウを手動でコピー＆ペーストする代わりに、複数のバックエンド（ローカルOllamaモデル、Claude、Gemini、Codex、Cursor）にまたがるステップを一つのビジュアルワークフローとしてつなげられます。',
          '**デスクトップ自動化（「computer use」）。** RAPR AIは画面を見てデスクトップ上で操作を実行できるため、AIエージェントが自分で実行しなければならないテキストを生成するだけでなく、アプリケーションを直接操作できます。',
          '**プロバイダー横断の共有記憶ボールト。** 異なるAIバックエンドをまたいでコンテキストを保持する記憶レイヤーで、難しいステップのためにローカルOllamaモデルからClaudeに切り替えても、会話をゼロから始める必要はありません。',
          '**Telegram経由のリモートトリガーとスケジュールタスク。** Telegram経由で遠隔からAIワークフローを起動したり、アプリを開かずに自動実行されるようタスクをスケジュールしたりできます。',
          '**音声応答。** オフラインの音声合成オプション、またはElevenLabsのいずれかで応答を読み上げられるため、完全にローカルな音声経路とクラウド音声サービスを選べます。',
          '**MCPコネクタ（Zapier、Composio）。** [Model Context Protocol](https://modelcontextprotocol.io)コネクタにより、RAPR AIが管理するエージェントはZapierやComposioを通じて外部サービスにアクセスでき、デスクトップの外までエージェントの操作範囲が広がります。',
          '**AI Council。** 同じプロンプトを複数のAIバックエンドで同時に実行し、その回答を並べて比較・議論させる機能で、単一モデルの出力だけを信頼するのではなく複数の視点を得られます。',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'RAPR AIは本当にローカルAIツールなのか？',
        content: [
          '**RAPR AIがローカルかつオフラインになるのは、自分のマシン上で動く[Ollama](https://ollama.com)を指定した特定の設定の場合のみです。それ以外の設定では、クラウドAI APIのためのデスクトップクライアントにすぎません。** この違いは重要です。「ローカルデスクトップ司令塔」という宣伝文句は、アプリ自体が自分のマシン上でローカルに動くことを説明しているのであって、その中のすべての会話がオフラインのまま留まることを意味してはいません。',
          'Ollamaを使う設定にした場合、推論は自分のハードウェア上で行われ、RAPR AIの主張によればその特定の会話はマシンの外に出る必要がありません。Claude、Gemini、Codex、Cursor、あるいはOpenRouter経由のモデルを使う設定にした場合は、その会話は該当プロバイダーのクラウドAPIへ送信されます。これはそれらのツールを直接使う場合と同じで、単にRAPR AIの画面から起動しているだけです。',
          'RAPR AIによれば、どちらの場合でもローカルに留まるのは、統合・セッションデータ、共有記憶ボールト、そしてあなたのAPIキーと認証情報です。アプリの役割は会話をルーティングし、周辺のワークフローを管理することであり、すべてのモデルを自ら実行することではありません。それを行うのはOllama経由の場合だけです。',
        ],
        note: 'プライバシーがRAPR AIを検討する主な理由であるなら、そこで作るすべてのワークフローをOllamaバックエンドを中心に構築してください。同じワークフローにClaude、Gemini、Codex、Cursor、OpenRouterのステップを追加すると、他の部分の設定に関わらず、そのステップのデータはマシンの外へ出ます。',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'RAPR AIの対応プラットフォームと料金',
        columns: ['プラットフォーム／プラン', '状況', '内容'],
        rows: [
          {
            'プラットフォーム／プラン': 'Windows',
            '状況': '現在対応',
            '内容': 'RAPR AIは現在Windows 10以降で動作します。本レビュー時点で、実際にリリースされているのはこのプラットフォームのみです。',
          },
          {
            'プラットフォーム／プラン': 'macOS',
            '状況': '開発中・未提供',
            '内容': 'RAPR AIはmacOS対応が開発中であると述べています。まだ利用できないため、現時点でMac版が使えることを前提に計画しないでください。',
          },
          {
            'プラットフォーム／プラン': 'Linux',
            '状況': '開発中・未提供',
            '内容': 'Linux対応もmacOSと並行して開発中とされています。どちらのプラットフォームについても公表されたリリース日はありません。',
          },
          {
            'プラットフォーム／プラン': '料金',
            '状況': '無料（早期アクセス）',
            '内容': 'RAPR AIは早期アクセス期間中は無料で利用できます。開発元は後日有料プランを予定していると述べていますが、確定した価格はまだ公表されていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'RAPR AIが向いている人',
        items: [
          '**すでにOllamaと複数のクラウドAIサブスクリプションを併用しているWindowsユーザー。** Claude、Gemini、またはOpenRouterのアカウントを既に持ち、Ollama経由でローカルモデルも運用しているなら、RAPR AIは別々のアプリを切り替える代わりに、タスクを適切なバックエンドへ振り分ける一つの場所を提供します。',
          '**チャットだけでなくデスクトップ上で行動できるAIエージェントを求める人。** computer use／デスクトップ自動化機能は、AI出力を手作業でコピー＆ペーストするのではなく、エージェントに直接アプリケーションを操作させたい人向けです。',
          '**複数のAIバックエンドの回答を比較したい人。** AI Council機能はまさにこのために作られており、一つのプロンプトを複数モデルで実行し、単一の回答を信頼する代わりに結果を比較できます。',
          '**早期アクセスのソフトウェアに慣れている人。** この期間中の無料アクセスには代償があります。RAPR AIが早期アクセスを脱するにつれ、機能セット、プラットフォーム対応、料金が変わることを見込んでおいてください。',
          '**Telegramやスケジュールで AIタスクを自動化したい人。** リモートトリガーやスケジュール実行が自分のワークフローに役立つなら、RAPR AIは追加のスクリプトなしで両方に対応します。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'RAPR AIが向いていない人',
        items: [
          '**今日すぐ使えるアプリが必要なMacまたはLinuxユーザー。** RAPR AIは現時点でWindows専用です。macOS・Linux対応は開発中とされていますが、利用できません。自分のプラットフォーム向けにリリースされるまで計画に含めないでください。',
          '**純粋にオフラインでクラウド不要のツールを求める人。** RAPR AIはハイブリッドなオーケストレーターです。作成するすべてのワークフローをOllama使用に設定しない限り、一部の会話はClaude、Gemini、Codex、Cursor、OpenRouterへ送られます。これはそれらのサービスを直接使う場合と同じです。',
          '**今すぐ安定した長期サポートの機能セットが必要な人。** 小規模な開発元による無料の早期アクセスソフトウェアは、確立された製品に比べて機能・料金・プラットフォーム対応が変わりやすい傾向があります。それを前提にワークフローを構築する場合は考慮してください。',
          '**独立検証された性能・信頼性の数値が必要な人。** 現時点でRAPR AIについて第三者によるベンチマーク、稼働率、ユーザー評価のデータは存在しません。本レビューは機能やデータ取り扱いに関する開発元の主張を独自に検証していません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'RAPR AIは無料ですか？',
            a: 'はい、現在の早期アクセス期間中RAPR AIは無料です。開発元は後日有料プランを予定していると述べていますが、価格はまだ公表されていません。長期的に利用するつもりなら、将来的なコストを見込んでおくとよいでしょう。',
          },
          {
            q: 'RAPR AIはオフラインで動作しますか？',
            a: '自分のマシン上で動くOllamaに接続する設定にした場合のみです。このモードでは推論はローカルで行われます。代わりにClaude、Gemini、Codex、Cursor、OpenRouterへのRAPR AIの接続を使う場合、それらの会話はインターネット接続が必要で、その各プロバイダーのクラウドAPIへ送られます。これはそれらのツールを直接使う場合と同じです。',
          },
          {
            q: 'RAPR AIはMacやLinuxで使えますか？',
            a: 'まだ使えません。本レビュー時点で、RAPR AIはWindows 10以降でのみ動作します。RAPR AIはmacOS・Linux対応が開発中であると述べていますが、どちらについても公表されたリリース日はありません。',
          },
          {
            q: 'RAPR AIのAI Council機能とは何ですか？',
            a: 'AI Councilは、同じプロンプトを複数のAIバックエンドで同時に実行し、単一モデルの回答に頼るのではなく、それらの回答を並べて比較・議論できるRAPR AIの機能です。',
          },
          {
            q: 'RAPR AIは私のデータやAPIキーをクラウドに保存しますか？',
            a: 'RAPR AI自身の主張によれば、統合・セッションデータ、共有記憶ボールト、そしてあなたのAPIキーと認証情報は、タスクを（ローカル・クラウドいずれの）どのAIバックエンドへルーティングするかに関わらず、あなたのマシン上に保持されます。機密性の高い作業に使う前に、RAPR AIの最新のプライバシーポリシーを直接確認してください。本レビューはこの主張を独自に検証したものではありません。これは法的助言ではありません。',
          },
          {
            q: 'RAPR AIの「computer use」つまりデスクトップ自動化機能とは何ですか？',
            a: 'RAPR AI内のAIエージェントが画面を見て、あなたのデスクトップ上で直接操作を実行できる機能です。自分で実行しなければならないテキストを生成するだけでなく、アプリケーションを操作します。',
          },
          {
            q: 'MCPとは何で、RAPR AIのMCPコネクタは何をしますか？',
            a: '[Model Context Protocol（MCP）](https://modelcontextprotocol.io)は、AIエージェントが外部のツールやデータソースに接続するための標準規格です。RAPR AIはZapierとComposio向けのMCPコネクタに対応しており、これによりエージェントはこれらのプラットフォームを通じてデスクトップの外にあるサービスへアクセスできます。',
          },
          {
            q: 'RAPR AIはOllama、Claude、Cursorの代わりになりますか？',
            a: 'いいえ。RAPR AIはこれらのツールの代替ではなく、それらの手前に立つオーケストレーション層です。ローカルモデルにはOllamaのインストールが引き続き必要で、Claude、Gemini、Codex、Cursor、OpenRouterには自分のアカウントとAPIキーが必要です。RAPR AIは独自のモデルを提供するのではなく、それらを調整する役割を担います。',
          },
          {
            q: 'RAPR AIは音声応答に対応していますか？',
            a: 'はい。RAPR AIはオフラインの音声合成オプション、またはElevenLabsのいずれかで応答を読み上げられるため、優先事項に応じて完全にローカルな音声経路とクラウド音声サービスを選べます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'すでにOllamaをローカルで運用し、クラウドAIサービスのアカウントも持っていて、自動化・記憶・MCPコネクタを備えた一つのWindowsデスクトップアプリで両者を行き来したいなら、RAPR AIは検討する価値があります。逆に、今すぐMacやLinux版が必要な場合や、あらゆるモードでデフォルトでオフラインになるツールが必要な場合には、現時点では検討に値しません。最も特徴的な機能は、ビジュアルワークフロービルダー、デスクトップの「computer use」自動化、複数モデルを比較するAI Council、そして異なるAIバックエンドをまたいで維持される記憶ボールトです。率直な留保点として、これは小規模な開発元による無料の早期アクセスソフトウェアであり、独立したベンチマーク、評価、長期的な信頼性データは存在せず、対応プラットフォームも一つだけです。RAPR AIが早期アクセスを脱するまでに、機能セット、料金、プラットフォーム対応はすべて変わることを見込んでおくべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[RAPR AI公式サイト](https://raprai.com) — 製品概要、機能一覧、プラットフォーム対応状況、料金の現状。',
          '[Ollama公式サイト](https://ollama.com) — RAPR AIがオフライン／ローカルモデル対応のために接続するローカル推論エンジン。',
          '[Model Context Protocol仕様](https://modelcontextprotocol.io) — RAPR AIのZapier・Composioコネクタの基盤となるオープン標準。',
          '[OpenRouter](https://openrouter.ai) — RAPR AIが数百の追加クラウドモデルへのアクセスに使用するルーティングサービス。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[MCPでOllamaをデータベースやAPIに接続する：ローカルエージェント構築2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — ローカルエージェント向けの実践的なMCP設定ガイドで、RAPR AIのMCPコネクタを理解する上で役立つ背景情報。',
          '[2026年のローカルAIエージェント：実際に機能するもの（と、いまだ機能しないもの）](/ja/power-local-llm/autonomous-local-agents-actually-work) — RAPR AIが競合するローカルエージェントツールの現状を広く俯瞰した記事。',
          '[Zapierをローカル AIエージェントで置き換える：月30ドル節約する5つのワークフロー（2026）](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — RAPR AIのZapier向けMCPコネクタを完全ローカルな代替手段と比較検討する際に役立ちます。',
          '[完全版ローカルLLMソフトウェアディレクトリ：自分のハードウェアでAIを動かす160以上のツール（2026）](/ja/power-local-llm/local-llm-software-directory) — 他のローカル／ハイブリッドAIツールの中でRAPR AIがどう位置づけられるかを確認できます。',
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
    heroImage: '/images/rapr-ai-review-hero-pt.webp',
    title: 'RAPR AI: Análise (2026) — Central de Comando Local para Ollama, Claude e Gemini',
    seoTitle: 'RAPR AI: Análise 2026 da Central de Agentes de IA',
    intro:
      'A RAPR AI, desenvolvida pela RAPR AI e disponível em [raprai.com](https://raprai.com/), se apresenta como uma "central de comando de desktop local para cada IA que você usa". Ela não substitui o Ollama, o Claude, o Gemini, o Codex ou o Cursor — ela se posiciona à frente dessas ferramentas, oferecendo uma única interface no Windows para distribuir tarefas, automatizar o desktop, manter contexto e direcionar o trabalho para o backend de IA mais adequado a cada tarefa. A pergunta prática que esta análise responde é mais restrita do que sugere o discurso de marketing: a RAPR AI só é local e funciona offline quando você a configura para usar o Ollama na sua própria máquina; qualquer outro backend que ela suporta é uma chamada de API na nuvem roteada pela interface da RAPR AI, exatamente como usar aquele serviço diretamente.',
    metaDescription:
      'Análise da RAPR AI: um app gratuito para Windows em acesso antecipado que orquestra modelos locais do Ollama e IA na nuvem (Claude, Gemini, Codex, Cursor) com automação, memória e conectores MCP.',
    twitterDescription:
      'Análise da RAPR AI: app gratuito para Windows em acesso antecipado que alterna entre modelos locais do Ollama e IA na nuvem (Claude, Gemini, Cursor), com automação de fluxos, memória e conectores MCP.',
    audience:
      'Usuários de Windows que já rodam o Ollama localmente e também têm contas em serviços de IA na nuvem (Claude, Gemini, Codex, Cursor) e querem um único espaço de trabalho para orquestrar, automatizar e manter contexto entre os dois.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**A RAPR AI é um aplicativo de desktop gratuito para Windows, em acesso antecipado, que orquestra modelos locais do Ollama e IA na nuvem (Claude, Gemini, Codex, Cursor, OpenRouter) a partir de um único espaço de trabalho, com automação de fluxos, memória e conectores MCP.** Ela só se torna uma ferramenta privada e offline no modo específico em que você a configura para usar o Ollama no seu próprio hardware; qualquer outro backend suportado envia essa conversa para a API na nuvem do respectivo provedor. O suporte a macOS e Linux está a caminho, mas ainda não foi lançado; Windows 10+ é a única plataforma disponível hoje.',
    quickAnswerTop: {
      pt: {
        question: 'A RAPR AI é um app de IA local ou uma ferramenta na nuvem?',
        answer:
          'É as duas coisas. É uma central de comando de desktop para Windows que funciona totalmente offline via Ollama quando você escolhe modelos locais, e também se conecta a IA na nuvem (Claude, Gemini, Codex, Cursor) e a centenas de modelos via OpenRouter. Os dados de orquestração, a memória e as chaves de API permanecem na sua máquina independentemente do backend usado.',
        bullets: [
          'Gratuita durante o acesso antecipado; planos pagos previstos para depois, sem preço divulgado ainda.',
          'Windows 10+ suportado agora; suporte a macOS e Linux está a caminho, ainda não lançado.',
          'O modo local/offline exige configurar a RAPR AI para usar o Ollama na sua própria máquina.',
          'Conectores MCP (Zapier, Composio) e um recurso AI Council para comparar vários modelos.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é a RAPR AI?', anchor: 'what-is-rapr' },
      { label: 'O que dá para fazer com a RAPR AI?', anchor: 'core-features' },
      { label: 'A RAPR AI é realmente local?', anchor: 'is-rapr-local' },
      { label: 'Plataformas e preços', anchor: 'platforms-pricing' },
      { label: 'Para quem a RAPR AI é indicada', anchor: 'who-should-use' },
      { label: 'Para quem a RAPR AI não é indicada', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'A RAPR AI ([raprai.com](https://raprai.com/)) é uma "central de comando" de desktop que orquestra vários backends de IA — modelos locais do Ollama e IA na nuvem (Claude, Gemini, Codex, Cursor, OpenRouter) — a partir de um único espaço de trabalho.',
          'Ela é local e funciona offline apenas quando configurada para usar o Ollama na sua própria máquina; os caminhos de modelos na nuvem continuam enviando a conversa para a API do respectivo provedor.',
          'Segundo as próprias declarações da RAPR AI, os dados de orquestração/sessão, o cofre de memória compartilhado e as credenciais de API permanecem na máquina do usuário, independentemente do backend.',
          'Principais recursos: um construtor visual de fluxos de trabalho para agentes de IA, automação de desktop ("computer use" — a IA vê a tela e age), um cofre de memória compartilhado entre provedores, gatilhos remotos via Telegram, tarefas de IA agendadas, respostas por voz (TTS offline ou ElevenLabs), conectores MCP (Zapier, Composio) e um recurso AI Council para comparar várias IAs.',
          'Windows 10+ é suportado hoje; o suporte a macOS e Linux está a caminho, mas ainda não foi lançado.',
          'Preços: gratuita durante o acesso antecipado; o fornecedor afirma que planos pagos virão depois, sem preço divulgado ainda.',
          'Não existem dados independentes de benchmark, avaliação ou número de downloads para a RAPR AI — trate as afirmações do fornecedor sobre capacidade e tratamento de dados como não verificadas até testá-las você mesmo.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'O que é a RAPR AI?',
        content: [
          '**A RAPR AI é um aplicativo de desktop, desenvolvido pela RAPR AI e disponível em [raprai.com](https://raprai.com), que se descreve como uma "central de comando de desktop local para cada IA que você usa".** Em vez de substituir Ollama, Claude, Gemini, Codex ou Cursor, ela se posiciona à frente dessas ferramentas — uma única interface para distribuir tarefas, automatizá-las e manter o contexto, qualquer que seja o backend de IA escolhido para cada tarefa.',
          'O app é uma ferramenta de orquestração híbrida, não um app exclusivamente de LLM local. Ele suporta operação totalmente offline via [Ollama](https://ollama.com) no seu próprio hardware, e também se conecta a serviços e agentes de IA na nuvem — Claude, Gemini, Codex e Cursor — além de centenas de modelos via [OpenRouter](https://openrouter.ai). Se uma determinada conversa permanece privada e offline, ou é roteada para uma API na nuvem, depende inteiramente de qual backend você escolhe dentro da RAPR AI para aquela tarefa.',
          'A RAPR AI descreve seu modelo de dados como "traga suas próprias contas ou modelos locais, sem sobretaxa por token" — você conecta suas próprias chaves de API ou sua própria instalação local do Ollama, e a RAPR AI não adiciona margem sobre o que esses provedores já cobram. Os dados de orquestração, a memória e as credenciais permanecem na máquina do usuário.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'O que dá para fazer de fato com a RAPR AI?',
        content: ['O conjunto de recursos da RAPR AI é centrado em coordenar backends de IA, e não em ser um deles:'],
        items: [
          '**Construtor visual de fluxos de trabalho para agentes de IA.** Encadeie etapas entre diferentes backends (modelos locais do Ollama, Claude, Gemini, Codex, Cursor) em um único fluxo visual, em vez de copiar e colar manualmente entre janelas de chat separadas.',
          '**Automação de desktop ("computer use").** A RAPR AI consegue ver a tela e executar ações no seu desktop, permitindo que um agente de IA opere aplicativos diretamente em vez de apenas produzir texto que você precisa executar sozinho.',
          '**Cofre de memória compartilhado entre provedores.** Uma camada de memória que mantém o contexto entre diferentes backends de IA, de modo que alternar de um modelo local do Ollama para o Claude em uma etapa mais difícil não significa começar a conversa do zero.',
          '**Gatilhos remotos via Telegram e tarefas agendadas.** Inicie um fluxo de trabalho de IA remotamente pelo Telegram, ou agende uma tarefa para rodar automaticamente sem abrir o aplicativo.',
          '**Respostas por voz.** As respostas podem ser lidas em voz alta usando uma opção de texto para voz offline ou o ElevenLabs, permitindo escolher entre um caminho de voz totalmente local ou um serviço de voz na nuvem.',
          '**Conectores MCP (Zapier, Composio).** Conectores do [Model Context Protocol](https://modelcontextprotocol.io) permitem que agentes gerenciados pela RAPR AI acessem serviços externos via Zapier e Composio, ampliando o que um agente pode acionar além do próprio desktop.',
          '**AI Council.** Um recurso para rodar o mesmo prompt em vários backends de IA ao mesmo tempo e comparar ou colocar suas respostas em debate lado a lado, em vez de confiar apenas na saída de um único modelo.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'A RAPR AI é realmente uma ferramenta de IA local?',
        content: [
          '**A RAPR AI só é local e offline na configuração específica em que você a aponta para o [Ollama](https://ollama.com) rodando na sua própria máquina — em qualquer outra configuração, ela é um cliente de desktop para APIs de IA na nuvem.** Essa distinção importa porque a frase de marketing "central de comando de desktop local" descreve o próprio aplicativo rodando localmente na sua máquina, não que toda conversa dentro dele permaneça offline.',
          'Quando configurada para usar o Ollama, a inferência acontece no seu próprio hardware e, segundo a RAPR AI, essa conversa específica não precisa sair da sua máquina. Quando configurada para usar Claude, Gemini, Codex, Cursor ou um modelo roteado via OpenRouter, essa conversa é enviada para a API na nuvem do respectivo provedor — exatamente como usar essas ferramentas diretamente, apenas acionada de dentro da interface da RAPR AI.',
          'O que permanece local em ambos os casos, segundo a RAPR AI: os dados de orquestração e sessão, o cofre de memória compartilhado e suas chaves de API e credenciais. A função do app é rotear a conversa e gerenciar o fluxo de trabalho ao redor, não executar cada modelo por conta própria — isso só o caminho do Ollama faz.',
        ],
        note: 'Se a privacidade é o principal motivo para considerar a RAPR AI, construa cada fluxo de trabalho que você criar nela especificamente em torno do backend Ollama. Adicionar uma etapa com Claude, Gemini, Codex, Cursor ou OpenRouter ao mesmo fluxo faz os dados dessa etapa saírem da sua máquina, independentemente de como o restante do fluxo estiver configurado.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'Suporte a plataformas e preços da RAPR AI',
        columns: ['Plataforma / Plano', 'Status', 'O que esperar'],
        rows: [
          {
            'Plataforma / Plano': 'Windows',
            'Status': 'Suportado agora',
            'O que esperar': 'A RAPR AI roda no Windows 10 e versões posteriores hoje. Esta é a única plataforma com versão lançada no momento desta análise.',
          },
          {
            'Plataforma / Plano': 'macOS',
            'Status': 'A caminho, não lançado',
            'O que esperar': 'A RAPR AI afirmou que o suporte a macOS está a caminho. Ainda não está disponível — não planeje contando com uma versão para Mac por enquanto.',
          },
          {
            'Plataforma / Plano': 'Linux',
            'Status': 'A caminho, não lançado',
            'O que esperar': 'O suporte a Linux também é descrito como a caminho, junto com o macOS. Nenhuma das duas plataformas tem data de lançamento divulgada.',
          },
          {
            'Plataforma / Plano': 'Preços',
            'Status': 'Gratuito (acesso antecipado)',
            'O que esperar': 'A RAPR AI é gratuita durante seu período de acesso antecipado. O fornecedor afirma que planos pagos virão depois; ainda não foi divulgado um preço fixo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem a RAPR AI é indicada',
        items: [
          '**Usuários de Windows que já usam Ollama junto com várias assinaturas de IA na nuvem.** Se você já tem contas no Claude, Gemini ou uma chave do OpenRouter, e também roda modelos locais via Ollama, a RAPR AI oferece um único lugar para distribuir tarefas ao backend adequado, em vez de alternar entre aplicativos separados.',
          '**Usuários que querem um agente de IA capaz de agir no desktop, não só conversar.** O recurso de automação de desktop / "computer use" é voltado para quem quer que um agente opere aplicativos diretamente, em vez de copiar e colar a saída da IA manualmente.',
          '**Usuários que querem comparar respostas entre vários backends de IA.** O recurso AI Council foi criado exatamente para isso — rodar um prompt em vários modelos e comparar os resultados em vez de confiar em uma única resposta.',
          '**Usuários confortáveis com software em acesso antecipado.** O acesso gratuito durante esse período tem uma contrapartida: espere que o conjunto de recursos, o suporte a plataformas e os preços mudem conforme a RAPR AI deixe o acesso antecipado.',
          '**Usuários que querem automatizar tarefas de IA via Telegram ou em horário programado.** Se o acionamento remoto ou a execução agendada forem úteis ao seu fluxo de trabalho, a RAPR AI suporta ambos sem script adicional.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem a RAPR AI não é indicada',
        items: [
          '**Usuários de Mac ou Linux que precisam de um app funcional hoje.** A RAPR AI é exclusiva para Windows por enquanto; o suporte a macOS e Linux é descrito como a caminho, mas não está disponível. Não planeje contando com isso até que uma versão seja lançada para a sua plataforma.',
          '**Usuários que querem uma ferramenta puramente offline e livre de nuvem.** A RAPR AI é uma orquestradora híbrida. A menos que todo fluxo de trabalho que você criar nela esteja configurado para usar o Ollama, algumas das suas conversas irão para Claude, Gemini, Codex, Cursor ou OpenRouter — exatamente como usar esses serviços diretamente.',
          '**Usuários que precisam de um conjunto de recursos estável e com suporte de longo prazo hoje.** Software gratuito em acesso antecipado de um fornecedor pequeno tem mais chance de mudar recursos, preços e suporte a plataformas do que um produto estabelecido. Considere isso se planeja construir um fluxo de trabalho em torno dele.',
          '**Usuários que precisam de números de desempenho ou confiabilidade verificados de forma independente.** Não há dados independentes de benchmark, disponibilidade ou avaliação de usuários para a RAPR AI no momento; esta análise não auditou de forma independente as afirmações do fornecedor sobre recursos e tratamento de dados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A RAPR AI é gratuita?',
            a: 'Sim, a RAPR AI é gratuita durante o período atual de acesso antecipado. O fornecedor afirma que planos pagos virão depois, mas nenhum preço foi divulgado ainda — então vale considerar um custo futuro se você planeja depender dela a longo prazo.',
          },
          {
            q: 'A RAPR AI funciona offline?',
            a: 'Somente na configuração em que você a conecta ao Ollama rodando na sua própria máquina. Nesse modo, a inferência acontece localmente. Se você usar as conexões da RAPR AI com Claude, Gemini, Codex, Cursor ou OpenRouter, essas conversas exigem conexão com a internet e vão para a API na nuvem daquele provedor, exatamente como usar essas ferramentas diretamente.',
          },
          {
            q: 'A RAPR AI está disponível para Mac ou Linux?',
            a: 'Ainda não. No momento desta análise, a RAPR AI roda apenas no Windows 10 e versões posteriores. A RAPR AI afirmou que o suporte a macOS e Linux está a caminho, mas nenhum dos dois tem data de lançamento divulgada.',
          },
          {
            q: 'O que é o recurso AI Council na RAPR AI?',
            a: 'AI Council é um recurso da RAPR AI que roda o mesmo prompt em vários backends de IA ao mesmo tempo, para que você possa comparar ou colocar as respostas em debate lado a lado, em vez de depender da resposta de um único modelo.',
          },
          {
            q: 'A RAPR AI armazena meus dados ou chaves de API na nuvem?',
            a: 'A própria afirmação da RAPR AI é que os dados de orquestração e sessão, seu cofre de memória compartilhado e suas chaves de API e credenciais permanecem na sua máquina, independentemente de qual backend de IA (local ou nuvem) uma determinada tarefa é roteada. Revise diretamente a política de privacidade atual da RAPR AI antes de usá-la para trabalho sensível — esta análise não auditou essa afirmação de forma independente. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'O que é o recurso "computer use" ou automação de desktop na RAPR AI?',
            a: 'Ele permite que um agente de IA dentro da RAPR AI veja sua tela e execute ações diretamente no seu desktop — operando aplicativos em vez de apenas produzir texto que você teria que executar sozinho.',
          },
          {
            q: 'O que é o MCP, e o que fazem os conectores MCP da RAPR AI?',
            a: 'O [Model Context Protocol (MCP)](https://modelcontextprotocol.io) é um padrão que permite que agentes de IA se conectem a ferramentas e fontes de dados externas. A RAPR AI suporta conectores MCP para Zapier e Composio, permitindo que um agente alcance serviços além do seu desktop através dessas plataformas.',
          },
          {
            q: 'A RAPR AI pode substituir o Ollama, o Claude ou o Cursor?',
            a: 'Não. A RAPR AI não substitui essas ferramentas — é uma camada de orquestração que se posiciona à frente delas. Você ainda precisa do Ollama instalado para modelos locais, ou de suas próprias contas e chaves de API para Claude, Gemini, Codex, Cursor ou OpenRouter; a RAPR AI coordena entre eles em vez de fornecer seu próprio modelo.',
          },
          {
            q: 'A RAPR AI suporta respostas por voz?',
            a: 'Sim. A RAPR AI pode ler respostas em voz alta usando uma opção de texto para voz offline ou o ElevenLabs, permitindo escolher entre um caminho de voz totalmente local ou um serviço de voz na nuvem, conforme suas prioridades.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'Vale a pena avaliar a RAPR AI se você já roda o Ollama localmente e também tem contas em serviços de IA na nuvem, e quer um único app de desktop para Windows para transitar entre eles com automação, memória e conectores MCP — não vale a pena avaliar hoje se você precisa de uma versão para Mac ou Linux, ou de uma ferramenta que seja offline por padrão em todos os modos. Seus recursos mais distintos são o construtor visual de fluxos de trabalho, a automação de desktop "computer use", a comparação multimodelo do AI Council e um cofre de memória que persiste entre diferentes backends de IA. A ressalva honesta: é software gratuito em acesso antecipado de um fornecedor pequeno, sem benchmarks independentes, avaliações ou dados de confiabilidade de longo prazo disponíveis, em apenas uma plataforma, e é de se esperar que seu conjunto de recursos, preços e suporte a plataformas mudem antes que a RAPR AI deixe o acesso antecipado.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial da RAPR AI](https://raprai.com) — descrição do produto, lista de recursos, disponibilidade por plataforma e status de preços.',
          '[Site oficial do Ollama](https://ollama.com) — o mecanismo de inferência local ao qual a RAPR AI se conecta para suporte local/offline.',
          '[Especificação do Model Context Protocol](https://modelcontextprotocol.io) — o padrão aberto por trás dos conectores da RAPR AI para Zapier e Composio.',
          '[OpenRouter](https://openrouter.ai) — o serviço de roteamento que a RAPR AI usa para acessar centenas de modelos adicionais na nuvem.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conecte o Ollama a bancos de dados e APIs com MCP: configuração de agente local 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — um guia prático de configuração de MCP para agentes locais, um bom contexto sobre os conectores MCP da RAPR AI.',
          '[Agentes de IA locais em 2026: o que realmente funciona (e o que ainda falha)](/pt/power-local-llm/autonomous-local-agents-actually-work) — um panorama mais amplo do estado atual das ferramentas de agentes locais, o terreno em que a RAPR AI compete.',
          '[Substitua o Zapier por agentes de IA locais: 5 fluxos de trabalho que economizam US$ 30/mês (2026)](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — útil se você está avaliando o conector MCP do Zapier da RAPR AI contra uma alternativa totalmente local.',
          '[O diretório completo de software LLM local: mais de 160 ferramentas para rodar IA no seu próprio hardware (2026)](/pt/power-local-llm/local-llm-software-directory) — veja onde a RAPR AI se encaixa entre outras ferramentas de IA locais e híbridas.',
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
    heroImage: '/images/rapr-ai-review-hero-zh.webp',
    title: 'RAPR AI 评测（2026）：整合 Ollama、Claude 与 Gemini 的本地桌面指挥中心',
    seoTitle: 'RAPR AI 评测 2026：AI 智能体指挥中心',
    intro:
      'RAPR AI 由 RAPR AI 公司开发，可在 [raprai.com](https://raprai.com/) 获取，其定位是"面向你所使用的每一个 AI 的本地桌面指挥中心"。它并不替代 Ollama、Claude、Gemini、Codex 或 Cursor，而是位于它们之前，在 Windows 上提供统一界面来分派任务、自动化桌面操作、保留上下文，并将工作路由到最适合的 AI 后端。本文回答的实际问题比宣传语暗示的要窄:RAPR AI 只有在你将其配置为使用你自己机器上的 Ollama 时才是本地且离线的;它支持的其他后端都只是通过 RAPR AI 界面转发的云端 API 调用,与直接使用那些服务完全相同。',
    metaDescription:
      'RAPR AI 评测:一款处于早期访问阶段的免费 Windows 应用,整合本地 Ollama 模型与云端 AI(Claude、Gemini、Codex、Cursor),带有自动化、记忆和 MCP 连接器。',
    twitterDescription:
      'RAPR AI 评测:免费的早期访问 Windows 应用,在本地 Ollama 模型与云端 AI(Claude、Gemini、Cursor)之间路由任务,支持工作流自动化、记忆与 MCP 连接器。',
    audience:
      '已经在本地运行 Ollama、同时也拥有 Claude、Gemini、Codex、Cursor 等云端 AI 服务账户,并希望用一个统一工作区来编排、自动化并跨两者保留上下文的 Windows 用户。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI 是一款免费的早期访问 Windows 桌面应用,可在一个工作区中整合本地 Ollama 模型与云端 AI(Claude、Gemini、Codex、Cursor、OpenRouter),并提供工作流自动化、记忆和 MCP 连接器。** 只有在你将其设置为使用运行在自己硬件上的 Ollama 时,它才会成为一个私密、离线的工具;它支持的其他任何后端都会把对话发送到相应提供商的云端 API。macOS 与 Linux 支持正在开发中但尚未发布;目前仅 Windows 10 及以上版本可用。',
    quickAnswerTop: {
      zh: {
        question: 'RAPR AI 是本地 AI 应用还是云端工具?',
        answer:
          '两者皆是。选择本地模型时,它是通过 Ollama 完全离线运行的 Windows 桌面指挥中心;同时它也连接云端 AI(Claude、Gemini、Codex、Cursor)以及通过 OpenRouter 提供的数百个模型。无论使用哪种后端,编排数据、记忆和 API 密钥都保留在你的机器上。',
        bullets: [
          '早期访问阶段免费;计划后续推出付费套餐,尚未公布价格。',
          'Windows 10 及以上版本现已支持;macOS 与 Linux 支持正在开发中,尚未发布。',
          '本地/离线模式需要将 RAPR AI 配置为连接你自己机器上运行的 Ollama。',
          'MCP 连接器(Zapier、Composio)以及用于对比多个模型的 AI Council 功能。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'RAPR AI 是什么?', anchor: 'what-is-rapr' },
      { label: 'RAPR AI 能做什么?', anchor: 'core-features' },
      { label: 'RAPR AI 真的是本地工具吗?', anchor: 'is-rapr-local' },
      { label: '平台支持与定价', anchor: 'platforms-pricing' },
      { label: '适合使用 RAPR AI 的人群', anchor: 'who-should-use' },
      { label: '不适合使用 RAPR AI 的人群', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'RAPR AI([raprai.com](https://raprai.com/))是一款桌面"指挥中心"应用,在一个工作区中整合多个 AI 后端——本地 Ollama 模型与云端 AI(Claude、Gemini、Codex、Cursor、OpenRouter)。',
          '只有配置为使用你自己机器上的 Ollama 时,它才是本地且离线的;云端模型路径仍会将对话发送到相应提供商的 API。',
          '根据 RAPR AI 自身的说明,无论使用哪种后端,编排/会话数据、共享记忆库和 API 凭证都保留在用户的机器上。',
          '主要功能:面向 AI 智能体的可视化工作流构建器、桌面自动化("computer use"——AI 可以看到屏幕并执行操作)、跨提供商的共享记忆库、通过 Telegram 的远程触发、定时 AI 任务、语音输出(离线 TTS 或 ElevenLabs)、MCP 连接器(Zapier、Composio),以及用于多模型对比的 AI Council 功能。',
          'Windows 10 及以上版本目前已支持;macOS 与 Linux 支持正在开发中,尚未发布。',
          '定价:早期访问阶段免费;官方表示后续将推出付费套餐,尚未公布价格。',
          '目前没有关于 RAPR AI 的独立基准测试、评分或下载量数据——在自行测试之前,应将厂商关于功能与数据处理方式的说法视为未经验证。',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'RAPR AI 是什么?',
        content: [
          '**RAPR AI 是由 RAPR AI 公司开发、在 [raprai.com](https://raprai.com) 提供的桌面应用,自我定位为"面向你所使用的每一个 AI 的本地桌面指挥中心"。** 它不替代 Ollama、Claude、Gemini、Codex 或 Cursor,而是位于这些工具之前——用一个统一界面来分派任务、自动化操作,并跨你为某项任务选择的任意 AI 后端保留上下文。',
          '这款应用是一个混合编排工具,而非纯粹的本地 LLM 应用。它支持通过运行在你自己硬件上的 [Ollama](https://ollama.com) 完全离线运行,同时也连接云端 AI 服务与智能体——Claude、Gemini、Codex 和 Cursor——以及通过 [OpenRouter](https://openrouter.ai) 提供的数百个模型。某次对话是保持私密和离线,还是被路由到云端 API,完全取决于你在 RAPR AI 中为该任务选择的后端。',
          'RAPR AI 将其数据模式描述为"自带账户或本地模型,不加收按 token 计费的额外费用"——你连接自己的 API 密钥或自己的本地 Ollama 安装,RAPR AI 不会在这些提供商本已收取的费用之上加价。编排数据、记忆和凭证都保留在用户的机器上。',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: '使用 RAPR AI 实际能做什么?',
        content: ['RAPR AI 的功能集重点在于协调各个 AI 后端,而不是自己充当模型:'],
        items: [
          '**面向 AI 智能体的可视化工作流构建器。** 将跨不同后端(本地 Ollama 模型、Claude、Gemini、Codex、Cursor)的步骤串联成一个可视化工作流,而不必在多个独立聊天窗口之间手动复制粘贴。',
          '**桌面自动化("computer use")。** RAPR AI 可以看到屏幕并在你的桌面上执行操作,让 AI 智能体直接操作应用程序,而不只是生成需要你自己去执行的文本。',
          '**跨提供商的共享记忆库。** 一个跨不同 AI 后端保留上下文的记忆层,这样在遇到更难的步骤时从本地 Ollama 模型切换到 Claude,并不意味着要从零开始对话。',
          '**Telegram 远程触发与定时任务。** 通过 Telegram 远程启动 AI 工作流,或安排任务在不打开应用的情况下自动运行。',
          '**语音输出。** 回答可以使用离线文本转语音选项或 ElevenLabs 朗读,让你可以在完全本地的语音路径与云端语音服务之间选择。',
          '**MCP 连接器(Zapier、Composio)。** [模型上下文协议](https://modelcontextprotocol.io)连接器让 RAPR AI 管理的智能体能够通过 Zapier 和 Composio 访问外部服务,把智能体可操作的范围扩展到桌面之外。',
          '**AI Council。** 一项可以同时在多个 AI 后端上运行同一提示词,并将其回答并排比较或对比讨论的功能,而不是只依赖单一模型的输出。',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'RAPR AI 真的是本地 AI 工具吗?',
        content: [
          '**只有在你将 RAPR AI 指向运行在自己机器上的 [Ollama](https://ollama.com) 这一特定配置下,它才是本地且离线的——在任何其他配置下,它都是面向云端 AI API 的桌面客户端。** 这一区别很重要,因为"本地桌面指挥中心"这一宣传语描述的是应用本身在你的机器上本地运行,而不是其中每一次对话都保持离线。',
          '当设置为使用 Ollama 时,推理在你自己的硬件上进行,根据 RAPR AI 的说法,该具体对话无需离开你的机器。当设置为使用 Claude、Gemini、Codex、Cursor 或通过 OpenRouter 路由的模型时,该对话会被发送到相应提供商的云端 API——与直接使用这些工具完全相同,只是从 RAPR AI 的界面中发起。',
          '根据 RAPR AI 的说法,在这两种情况下都保留在本地的是:编排与会话数据、共享记忆库,以及你的 API 密钥和凭证。这款应用的职责是路由对话并管理周围的工作流,而不是自行运行每一个模型——只有 Ollama 路径才会那样做。',
        ],
        note: '如果隐私是你考虑使用 RAPR AI 的主要原因,请把你在其中创建的每一个工作流都专门围绕 Ollama 后端来构建。在同一工作流中添加 Claude、Gemini、Codex、Cursor 或 OpenRouter 步骤,无论工作流其余部分如何配置,都会使该步骤的数据离开你的机器。',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'RAPR AI 的平台支持与定价',
        columns: ['平台 / 方案', '状态', '预期情况'],
        rows: [
          {
            '平台 / 方案': 'Windows',
            '状态': '现已支持',
            '预期情况': 'RAPR AI 目前可在 Windows 10 及更高版本上运行。截至本文撰写时,这是唯一已发布正式版本的平台。',
          },
          {
            '平台 / 方案': 'macOS',
            '状态': '开发中,尚未发布',
            '预期情况': 'RAPR AI 已表示 macOS 支持正在开发中。目前尚不可用——不要按现在就有 Mac 版本来规划。',
          },
          {
            '平台 / 方案': 'Linux',
            '状态': '开发中,尚未发布',
            '预期情况': 'Linux 支持同样被描述为与 macOS 一起在开发中。两个平台均未公布发布日期。',
          },
          {
            '平台 / 方案': '定价',
            '状态': '免费(早期访问)',
            '预期情况': 'RAPR AI 在早期访问阶段可免费使用。官方表示后续将推出付费套餐;目前尚未公布固定价格。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用 RAPR AI 的人群',
        items: [
          '**同时使用 Ollama 和多个云端 AI 订阅服务的 Windows 用户。** 如果你已经拥有 Claude、Gemini 账户或 OpenRouter 密钥,同时也通过 Ollama 运行本地模型,RAPR AI 能让你在一个地方将任务分派给合适的后端,而不必在多个独立应用之间切换。',
          '**希望 AI 智能体能在桌面上执行操作、而不只是对话的用户。** 桌面自动化/"computer use"功能面向那些希望智能体直接操作应用程序、而不是手动复制粘贴 AI 输出的用户。',
          '**希望对比多个 AI 后端回答的用户。** AI Council 功能正是为此而设计——在多个模型上运行同一提示词并对比结果,而不是只信任单一回答。',
          '**能接受早期访问软件的用户。** 这一阶段的免费访问是有代价的:随着 RAPR AI 走出早期访问阶段,应预期其功能集、平台支持和定价都会发生变化。',
          '**希望通过 Telegram 或按计划自动化 AI 任务的用户。** 如果远程触发或定时执行对你的工作流有用,RAPR AI 无需额外脚本即可支持两者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用 RAPR AI 的人群',
        items: [
          '**今天就需要可用应用的 Mac 或 Linux 用户。** RAPR AI 目前仅限 Windows;macOS 与 Linux 支持被描述为正在开发中,但尚不可用。在你所用平台的版本发布之前,不要将其纳入计划。',
          '**希望使用纯离线、无云依赖工具的用户。** RAPR AI 是一个混合编排器。除非你在其中创建的每一个工作流都配置为使用 Ollama,否则你的部分对话会发送给 Claude、Gemini、Codex、Cursor 或 OpenRouter——与直接使用这些服务完全相同。',
          '**今天就需要稳定、长期支持功能集的用户。** 小型厂商推出的免费早期访问软件,比成熟产品更可能改变其功能、定价和平台支持。如果你打算围绕它构建工作流,需要考虑这一点。',
          '**需要经独立验证的性能或可靠性数据的用户。** 目前没有关于 RAPR AI 的第三方基准测试、正常运行时间或用户评分数据;本文并未独立核实厂商关于功能和数据处理方式的说法。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'RAPR AI 免费吗?',
            a: '是的,RAPR AI 在当前的早期访问阶段是免费的。官方表示后续将推出付费套餐,但尚未公布价格——如果你打算长期依赖它,建议为未来的费用做好预算。',
          },
          {
            q: 'RAPR AI 能离线使用吗?',
            a: '只有在你将其连接到运行在自己机器上的 Ollama 这一配置下才可以。在该模式下,推理在本地进行。如果你改用 RAPR AI 与 Claude、Gemini、Codex、Cursor 或 OpenRouter 的连接,这些对话就需要联网,并会发送到相应提供商的云端 API,与直接使用这些工具完全相同。',
          },
          {
            q: 'RAPR AI 有 Mac 或 Linux 版本吗?',
            a: '目前还没有。截至本文撰写时,RAPR AI 仅支持 Windows 10 及更高版本。RAPR AI 已表示 macOS 与 Linux 支持正在开发中,但两者均未公布发布日期。',
          },
          {
            q: 'RAPR AI 中的 AI Council 功能是什么?',
            a: 'AI Council 是 RAPR AI 的一项功能,可同时在多个 AI 后端上运行同一提示词,让你能够并排比较或对比它们的回答,而不是依赖单一模型的响应。',
          },
          {
            q: 'RAPR AI 会把我的数据或 API 密钥存储在云端吗?',
            a: 'RAPR AI 自身的说法是,无论某项任务被路由到哪个 AI 后端(本地或云端),编排与会话数据、其共享记忆库以及你的 API 密钥和凭证都保留在你的机器上。在将其用于敏感工作之前,请直接查阅 RAPR AI 当前的隐私政策——本文并未独立核实这一说法。这不构成法律建议。',
          },
          {
            q: 'RAPR AI 中的"computer use"(桌面自动化)功能是什么?',
            a: '它让 RAPR AI 中的 AI 智能体能够看到你的屏幕并直接在桌面上执行操作——即直接操作应用程序,而不只是生成需要你自己去执行的文本。',
          },
          {
            q: '什么是 MCP,RAPR AI 的 MCP 连接器有什么作用?',
            a: '[模型上下文协议(MCP)](https://modelcontextprotocol.io)是一种让 AI 智能体连接外部工具和数据源的标准。RAPR AI 支持面向 Zapier 和 Composio 的 MCP 连接器,让智能体能够通过这些平台访问桌面之外的服务。',
          },
          {
            q: 'RAPR AI 能取代 Ollama、Claude 或 Cursor 吗?',
            a: '不能。RAPR AI 并不是这些工具的替代品——它是位于它们之前的一层编排。你仍然需要为本地模型安装 Ollama,或为 Claude、Gemini、Codex、Cursor、OpenRouter 准备自己的账户和 API 密钥;RAPR AI 负责在它们之间协调,而不是提供自己的模型。',
          },
          {
            q: 'RAPR AI 支持语音回答吗?',
            a: '支持。RAPR AI 可以使用离线文本转语音选项或 ElevenLabs 朗读回答,让你可以根据优先事项在完全本地的语音路径与云端语音服务之间选择。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果你已经在本地运行 Ollama,同时也拥有云端 AI 服务的账户,并希望用一个 Windows 桌面应用在两者之间路由任务,同时获得自动化、记忆和 MCP 连接器,那么 RAPR AI 值得评估;但如果你今天就需要 Mac 或 Linux 版本,或者需要在所有模式下都默认离线的工具,现在评估它并不值得。它最具特色的功能是可视化工作流构建器、桌面"computer use"自动化、AI Council 多模型对比,以及跨不同 AI 后端持续保留的记忆库。诚实的保留意见是:这是一款来自小型厂商的免费早期访问软件,目前没有独立基准测试、评分或长期可靠性数据,且仅支持一个平台;在 RAPR AI 走出早期访问阶段之前,应预期其功能集、定价和平台支持都会发生变化。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[RAPR AI 官方网站](https://raprai.com)——产品说明、功能列表、平台可用性与定价现状。',
          '[Ollama 官方网站](https://ollama.com)——RAPR AI 为支持离线/本地模型而连接的本地推理引擎。',
          '[模型上下文协议规范](https://modelcontextprotocol.io)——RAPR AI 的 Zapier 和 Composio 连接器背后所依据的开放标准。',
          '[OpenRouter](https://openrouter.ai)——RAPR AI 用于访问数百个额外云端模型的路由服务。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[通过 MCP 将 Ollama 连接到数据库与 API:本地智能体搭建指南 2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026)——面向本地智能体的实操 MCP 配置指南,有助于理解 RAPR AI 的 MCP 连接器。',
          '[2026 年的本地 AI 智能体:真正好用的与仍然行不通的](/zh/power-local-llm/autonomous-local-agents-actually-work)——对本地智能体工具当前现状的更全面梳理,RAPR AI 正是在这一领域竞争。',
          '[用本地 AI 智能体替代 Zapier:每月节省 30 美元的 5 个工作流(2026)](/zh/power-local-llm/replace-zapier-with-local-ai-agents)——如果你在权衡 RAPR AI 的 Zapier MCP 连接器与完全本地方案,这篇文章会有帮助。',
          '[完整本地 LLM 软件目录:在自己硬件上运行 AI 的 160 多种工具(2026)](/zh/power-local-llm/local-llm-software-directory)——了解 RAPR AI 在其他本地与混合 AI 工具中的定位。',
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
    heroImage: '/images/rapr-ai-review-hero-ko.webp',
    title: 'RAPR AI 리뷰(2026): Ollama·Claude·Gemini를 위한 로컬 데스크톱 커맨드 센터',
    seoTitle: 'RAPR AI 리뷰 2026: AI 에이전트 커맨드 센터',
    intro:
      'RAPR AI는 RAPR AI사가 개발하고 raprai.com에서 제공하는 앱으로, "사용하는 모든 AI를 위한 로컬 데스크톱 커맨드 센터"를 표방합니다. 이 앱은 Ollama, Claude, Gemini, Codex, Cursor를 대체하지 않으며, 이러한 도구들 앞단에 위치해 Windows에서 하나의 인터페이스로 작업을 분배하고, 데스크톱을 자동화하고, 컨텍스트를 기억하며, 작업에 가장 적합한 AI 백엔드로 라우팅할 수 있도록 합니다. 이 리뷰가 다루는 실질적인 질문은 마케팅 문구가 암시하는 것보다 훨씬 좁습니다. RAPR AI는 자신의 기기에서 실행되는 Ollama를 사용하도록 설정한 경우에만 로컬이자 오프라인이며, 이를 제외한 다른 모든 백엔드는 RAPR AI 인터페이스를 거쳐 전달되는 클라우드 API 호출일 뿐입니다 — 해당 서비스를 직접 사용하는 것과 정확히 동일합니다.',
    metaDescription:
      'RAPR AI 리뷰: 로컬 Ollama 모델과 클라우드 AI(Claude, Gemini, Codex, Cursor)를 자동화, 메모리, MCP 커넥터로 조율하는 무료 얼리 액세스 Windows 앱.',
    twitterDescription:
      'RAPR AI 리뷰: 로컬 Ollama 모델과 클라우드 AI(Claude, Gemini, Cursor) 사이를 오가는 무료 얼리 액세스 Windows 앱 — 워크플로 자동화, 메모리, MCP 커넥터 지원.',
    audience:
      '이미 Ollama를 로컬에서 운영하면서 Claude, Gemini, Codex, Cursor 같은 클라우드 AI 서비스 계정도 함께 사용하며, 두 환경을 아우르는 하나의 작업 공간에서 조율·자동화·컨텍스트 유지를 원하는 Windows 사용자.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RAPR AI review',
    targetKeywords: [
      'rapr ai review',
      'rapr ai local ai',
      'rapr ai ollama',
      'rapr ai windows',
      'rapr ai pricing',
      'rapr ai mcp connectors',
      'ai agent command center',
      'rapr ai council',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Windows 10+', 'Ollama (local inference)'],
    leadAnswerBlock:
      '**RAPR AI는 로컬 Ollama 모델과 클라우드 AI(Claude, Gemini, Codex, Cursor, OpenRouter)를 하나의 작업 공간에서 조율하는 무료 얼리 액세스 Windows 데스크톱 앱이며, 워크플로 자동화, 메모리, MCP 커넥터를 제공합니다.** 자신의 하드웨어에서 실행되는 Ollama를 사용하도록 설정한 특정 모드에서만 프라이빗하고 오프라인으로 작동하는 도구가 되며, 그 외에 지원하는 모든 백엔드는 해당 대화를 각 제공업체의 클라우드 API로 전송합니다. macOS와 Linux 지원은 개발 중이며 아직 출시되지 않았고, 현재 사용 가능한 플랫폼은 Windows 10 이상뿐입니다.',
    quickAnswerTop: {
      ko: {
        question: 'RAPR AI는 로컬 AI 앱입니까, 클라우드 도구입니까?',
        answer:
          '둘 다입니다. 로컬 모델을 선택하면 Ollama를 통해 완전히 오프라인으로 작동하는 Windows 데스크톱 커맨드 센터이며, 동시에 클라우드 AI(Claude, Gemini, Codex, Cursor)와 OpenRouter를 통한 수백 개의 모델에도 연결됩니다. 어떤 백엔드를 사용하든 조율 데이터, 메모리, API 키는 사용자의 기기에 남습니다.',
        bullets: [
          '얼리 액세스 기간에는 무료이며, 유료 등급은 추후 계획되어 있으나 아직 가격은 공개되지 않았습니다.',
          'Windows 10 이상은 현재 지원되며, macOS와 Linux 지원은 개발 중으로 아직 출시되지 않았습니다.',
          '로컬/오프라인 모드를 사용하려면 RAPR AI를 자신의 기기에서 실행되는 Ollama에 연결하도록 설정해야 합니다.',
          'MCP 커넥터(Zapier, Composio)와 여러 모델을 비교하는 AI Council 기능을 제공합니다.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'RAPR AI란 무엇인가요?', anchor: 'what-is-rapr' },
      { label: 'RAPR AI로 무엇을 할 수 있나요?', anchor: 'core-features' },
      { label: 'RAPR AI는 정말 로컬인가요?', anchor: 'is-rapr-local' },
      { label: '플랫폼 지원 및 가격', anchor: 'platforms-pricing' },
      { label: 'RAPR AI가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'RAPR AI가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 콘텐츠', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'RAPR AI([raprai.com](https://raprai.com/))는 로컬 Ollama 모델과 클라우드 AI(Claude, Gemini, Codex, Cursor, OpenRouter)라는 여러 AI 백엔드를 하나의 작업 공간에서 조율하는 데스크톱 "커맨드 센터"입니다.',
          '자신의 기기에서 실행되는 Ollama를 사용하도록 설정한 경우에만 로컬이자 오프라인이며, 클라우드 모델 경로는 여전히 해당 대화를 각 제공업체의 API로 전송합니다.',
          'RAPR AI 자체 설명에 따르면, 조율/세션 데이터, 공유 메모리 저장소, API 자격 증명은 사용하는 백엔드와 무관하게 사용자의 기기에 유지됩니다.',
          '주요 기능: AI 에이전트를 위한 시각적 워크플로 빌더, 데스크톱 자동화("컴퓨터 사용" — AI가 화면을 보고 조작을 실행), 제공업체 간 공유되는 메모리 저장소, Telegram을 통한 원격 트리거, 예약된 AI 작업, 음성 응답(오프라인 TTS 또는 ElevenLabs), MCP 커넥터(Zapier, Composio), 여러 AI를 비교하는 AI Council 기능.',
          'Windows 10 이상은 현재 지원되며, macOS와 Linux 지원은 개발 중이나 아직 출시되지 않았습니다.',
          '가격: 얼리 액세스 기간에는 무료이며, 제작사는 이후 유료 등급을 도입할 예정이라고 밝혔으나 아직 가격은 공개되지 않았습니다.',
          'RAPR AI에 대한 독립적인 벤치마크, 평점, 다운로드 수 데이터는 존재하지 않습니다 — 직접 테스트해 보기 전까지는 기능 및 데이터 처리에 관한 제작사의 주장을 검증되지 않은 것으로 취급하십시오.',
        ],
      },
      whatIsRapr: {
        id: 'what-is-rapr',
        title: 'RAPR AI란 무엇인가요?',
        content: [
          '**RAPR AI는 RAPR AI사가 개발하고 [raprai.com](https://raprai.com)에서 제공하는 데스크톱 애플리케이션으로, "사용하는 모든 AI를 위한 로컬 데스크톱 커맨드 센터"를 자처합니다.** Ollama, Claude, Gemini, Codex, Cursor를 대체하는 대신 이들 앞단에 위치해, 특정 작업을 위해 선택한 AI 백엔드에 관계없이 작업을 분배하고 자동화하며 컨텍스트를 유지하는 단일 인터페이스를 제공합니다.',
          '이 앱은 하이브리드 조율 도구이며, 로컬 LLM 전용 앱이 아닙니다. 자신의 하드웨어에서 실행되는 [Ollama](https://ollama.com)를 통해 완전한 오프라인 작동을 지원하는 동시에, Claude, Gemini, Codex, Cursor 같은 클라우드 AI 서비스·에이전트와 [OpenRouter](https://openrouter.ai)를 통한 수백 개 모델에도 연결됩니다. 특정 대화가 프라이빗하고 오프라인 상태로 유지되는지, 클라우드 API로 라우팅되는지는 전적으로 해당 작업을 위해 RAPR AI 안에서 어떤 백엔드를 선택하는지에 달려 있습니다.',
          'RAPR AI는 자사의 데이터 모델을 "자신의 계정이나 로컬 모델을 가져와 사용하며, 토큰당 추가 요금이 없다"고 설명합니다 — 즉 자신의 API 키나 로컬 Ollama 설치를 직접 연결하며, RAPR AI는 이러한 제공업체가 이미 청구하는 비용에 마진을 추가하지 않습니다. 조율 데이터, 메모리, 자격 증명은 사용자의 기기에 유지됩니다.',
        ],
      },
      coreFeatures: {
        id: 'core-features',
        title: 'RAPR AI로 실제로 무엇을 할 수 있나요?',
        content: ['RAPR AI의 기능은 스스로 하나의 모델이 되기보다는 여러 AI 백엔드를 조율하는 데 중점을 둡니다.'],
        items: [
          '**AI 에이전트를 위한 시각적 워크플로 빌더.** 서로 다른 채팅 창 사이를 수동으로 복사·붙여넣기 하는 대신, 여러 백엔드(로컬 Ollama 모델, Claude, Gemini, Codex, Cursor)에 걸친 단계를 하나의 시각적 워크플로로 연결할 수 있습니다.',
          '**데스크톱 자동화("컴퓨터 사용").** RAPR AI는 화면을 보고 데스크톱에서 조작을 실행할 수 있어, AI 에이전트가 직접 실행해야 할 텍스트를 생성하는 데 그치지 않고 애플리케이션을 직접 조작할 수 있게 합니다.',
          '**제공업체 간 공유되는 메모리 저장소.** 서로 다른 AI 백엔드에 걸쳐 컨텍스트를 유지하는 메모리 계층으로, 더 어려운 단계에서 로컬 Ollama 모델에서 Claude로 전환하더라도 대화를 처음부터 다시 시작할 필요가 없습니다.',
          '**Telegram 원격 트리거와 예약 작업.** Telegram을 통해 원격으로 AI 워크플로를 시작하거나, 앱을 열지 않고도 자동으로 실행되도록 작업을 예약할 수 있습니다.',
          '**음성 응답.** 오프라인 텍스트 음성 변환 옵션이나 ElevenLabs를 사용해 응답을 음성으로 읽어줄 수 있어, 완전히 로컬인 음성 경로와 클라우드 음성 서비스 중에서 선택할 수 있습니다.',
          '**MCP 커넥터(Zapier, Composio).** [Model Context Protocol](https://modelcontextprotocol.io) 커넥터를 통해 RAPR AI가 관리하는 에이전트가 Zapier와 Composio를 거쳐 외부 서비스에 접근할 수 있어, 에이전트가 데스크톱 밖에서 조작할 수 있는 범위가 확장됩니다.',
          '**AI Council.** 동일한 프롬프트를 여러 AI 백엔드에서 동시에 실행하고 그 답변을 나란히 비교하거나 토론시키는 기능으로, 단일 모델의 출력만 신뢰하는 대신 활용할 수 있습니다.',
        ],
      },
      isRaprLocal: {
        id: 'is-rapr-local',
        title: 'RAPR AI는 정말로 로컬 AI 도구인가요?',
        content: [
          '**RAPR AI는 자신의 기기에서 실행되는 [Ollama](https://ollama.com)를 가리키도록 설정한 특정 구성에서만 로컬이자 오프라인이며, 그 외 모든 구성에서는 클라우드 AI API를 위한 데스크톱 클라이언트입니다.** 이 구분은 중요한데, "로컬 데스크톱 커맨드 센터"라는 마케팅 문구는 앱 자체가 사용자의 기기에서 로컬로 실행된다는 점을 설명할 뿐, 그 안의 모든 대화가 오프라인 상태로 유지된다는 뜻은 아니기 때문입니다.',
          'Ollama를 사용하도록 설정하면 추론은 자신의 하드웨어에서 이루어지며, RAPR AI의 주장에 따르면 해당 특정 대화는 기기를 벗어날 필요가 없습니다. Claude, Gemini, Codex, Cursor 또는 OpenRouter를 통해 라우팅되는 모델을 사용하도록 설정하면, 해당 대화는 각 제공업체의 클라우드 API로 전송됩니다 — 이는 그러한 도구를 직접 사용하는 것과 동일하며, 다만 RAPR AI 인터페이스에서 실행될 뿐입니다.',
          'RAPR AI에 따르면 두 경우 모두 로컬에 유지되는 것은 조율 및 세션 데이터, 공유 메모리 저장소, 그리고 사용자의 API 키와 자격 증명입니다. 이 앱의 역할은 대화를 라우팅하고 주변 워크플로를 관리하는 것이지, 모든 모델을 직접 실행하는 것이 아닙니다 — 그것은 오직 Ollama 경로에서만 이루어집니다.',
        ],
        note: '개인정보 보호가 RAPR AI를 고려하는 주된 이유라면, 그 안에서 만드는 모든 워크플로를 특별히 Ollama 백엔드 중심으로 구성하십시오. 동일한 워크플로에 Claude, Gemini, Codex, Cursor, OpenRouter 단계를 추가하면, 워크플로의 나머지 부분이 어떻게 설정되어 있든 해당 단계의 데이터는 기기를 벗어나게 됩니다.',
      },
      platformsPricing: {
        id: 'platforms-pricing',
        itemHeadings: true,
        title: 'RAPR AI의 플랫폼 지원과 가격',
        columns: ['플랫폼 / 요금제', '상태', '예상 내용'],
        rows: [
          {
            '플랫폼 / 요금제': 'Windows',
            '상태': '현재 지원',
            '예상 내용': 'RAPR AI는 현재 Windows 10 이상에서 작동합니다. 이 리뷰 시점 기준으로 정식 출시된 유일한 플랫폼입니다.',
          },
          {
            '플랫폼 / 요금제': 'macOS',
            '상태': '개발 중, 미출시',
            '예상 내용': 'RAPR AI는 macOS 지원이 개발 중이라고 밝혔습니다. 아직 사용할 수 없으므로, 현재 Mac 버전이 있다고 가정하고 계획을 세우지 마십시오.',
          },
          {
            '플랫폼 / 요금제': 'Linux',
            '상태': '개발 중, 미출시',
            '예상 내용': 'Linux 지원 역시 macOS와 함께 개발 중으로 설명됩니다. 두 플랫폼 모두 공개된 출시일이 없습니다.',
          },
          {
            '플랫폼 / 요금제': '가격',
            '상태': '무료(얼리 액세스)',
            '예상 내용': 'RAPR AI는 얼리 액세스 기간 동안 무료로 사용할 수 있습니다. 제작사는 이후 유료 등급이 도입될 것이라고 밝혔지만, 아직 확정된 가격은 공개되지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'RAPR AI가 적합한 사용자',
        items: [
          '**이미 Ollama와 여러 클라우드 AI 구독을 함께 사용하는 Windows 사용자.** 이미 Claude, Gemini 계정이나 OpenRouter 키를 가지고 있고 Ollama로 로컬 모델도 운영한다면, RAPR AI는 여러 개의 별도 앱을 오가는 대신 작업을 적합한 백엔드로 분배할 수 있는 하나의 장소를 제공합니다.',
          '**단순히 대화만이 아니라 데스크톱에서 조작할 수 있는 AI 에이전트를 원하는 사용자.** 컴퓨터 사용/데스크톱 자동화 기능은 AI 출력을 수동으로 복사·붙여넣기 하는 대신 에이전트가 애플리케이션을 직접 조작하기를 원하는 사용자를 대상으로 합니다.',
          '**여러 AI 백엔드의 답변을 비교하고 싶은 사용자.** AI Council 기능은 정확히 이를 위해 만들어졌습니다 — 하나의 프롬프트를 여러 모델에서 실행하고 결과를 비교하는 방식으로, 단일 답변에만 의존하지 않습니다.',
          '**얼리 액세스 소프트웨어를 감수할 수 있는 사용자.** 이 기간 동안의 무료 이용에는 대가가 따릅니다. RAPR AI가 얼리 액세스를 벗어나면서 기능, 플랫폼 지원, 가격이 변경될 것을 예상해야 합니다.',
          '**Telegram이나 예약을 통해 AI 작업을 자동화하고 싶은 사용자.** 원격 트리거나 예약 실행이 워크플로에 유용하다면, RAPR AI는 별도의 스크립트 없이 두 기능 모두를 지원합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'RAPR AI가 적합하지 않은 사용자',
        items: [
          '**오늘 당장 작동하는 앱이 필요한 Mac 또는 Linux 사용자.** RAPR AI는 현재 Windows 전용입니다. macOS와 Linux 지원은 개발 중이라고 설명되지만 아직 사용할 수 없습니다. 해당 플랫폼용 버전이 출시되기 전까지는 이를 염두에 두고 계획하지 마십시오.',
          '**순수하게 오프라인이며 클라우드가 없는 도구를 원하는 사용자.** RAPR AI는 하이브리드 오케스트레이터입니다. 그 안에서 만드는 모든 워크플로가 Ollama를 사용하도록 설정되어 있지 않은 한, 일부 대화는 Claude, Gemini, Codex, Cursor 또는 OpenRouter로 전송됩니다 — 이는 해당 서비스를 직접 사용하는 것과 동일합니다.',
          '**오늘 당장 안정적이고 장기적으로 지원되는 기능 세트가 필요한 사용자.** 소규모 제작사의 무료 얼리 액세스 소프트웨어는 확립된 제품보다 기능, 가격, 플랫폼 지원이 변경될 가능성이 더 높습니다. 이를 중심으로 워크플로를 구축할 계획이라면 이 점을 고려해야 합니다.',
          '**독립적으로 검증된 성능 또는 신뢰성 수치가 필요한 사용자.** 현재 RAPR AI에 대한 제3자의 벤치마크, 가동 시간, 사용자 평점 데이터는 존재하지 않습니다. 이 리뷰는 기능 및 데이터 처리에 관한 제작사의 주장을 독립적으로 검증하지 않았습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'RAPR AI는 무료인가요?',
            a: '예, RAPR AI는 현재 얼리 액세스 기간 동안 무료입니다. 제작사는 이후 유료 등급이 도입될 것이라고 밝혔지만 아직 가격은 공개되지 않았으므로, 장기적으로 의존할 계획이라면 향후 비용을 예산에 반영하는 것이 좋습니다.',
          },
          {
            q: 'RAPR AI는 오프라인에서 작동하나요?',
            a: '자신의 기기에서 실행되는 Ollama에 연결하도록 설정한 경우에만 그렇습니다. 이 모드에서는 추론이 로컬에서 이루어집니다. 대신 RAPR AI의 Claude, Gemini, Codex, Cursor, OpenRouter 연결을 사용하면, 이러한 대화는 인터넷 연결이 필요하며 해당 제공업체의 클라우드 API로 전송됩니다 — 이는 그러한 도구를 직접 사용하는 것과 동일합니다.',
          },
          {
            q: 'RAPR AI는 Mac이나 Linux에서 사용할 수 있나요?',
            a: '아직은 아닙니다. 이 리뷰 시점 기준으로 RAPR AI는 Windows 10 이상에서만 작동합니다. RAPR AI는 macOS와 Linux 지원이 개발 중이라고 밝혔지만, 두 플랫폼 모두 공개된 출시일이 없습니다.',
          },
          {
            q: 'RAPR AI의 AI Council 기능은 무엇인가요?',
            a: 'AI Council은 동일한 프롬프트를 여러 AI 백엔드에서 동시에 실행해, 단일 모델의 응답에만 의존하는 대신 그 답변을 나란히 비교하거나 토론시킬 수 있게 하는 RAPR AI의 기능입니다.',
          },
          {
            q: 'RAPR AI는 제 데이터나 API 키를 클라우드에 저장하나요?',
            a: 'RAPR AI 자체의 설명에 따르면, 특정 작업이 어떤 AI 백엔드(로컬 또는 클라우드)로 라우팅되든 관계없이 조율 및 세션 데이터, 공유 메모리 저장소, 사용자의 API 키와 자격 증명은 사용자의 기기에 유지됩니다. 민감한 작업에 사용하기 전에는 RAPR AI의 최신 개인정보 처리방침을 직접 확인하십시오 — 이 리뷰는 해당 주장을 독립적으로 검증하지 않았습니다. 이는 법률 자문이 아닙니다.',
          },
          {
            q: 'RAPR AI의 "컴퓨터 사용" 또는 데스크톱 자동화 기능은 무엇인가요?',
            a: 'RAPR AI 안의 AI 에이전트가 사용자의 화면을 보고 데스크톱에서 직접 조작을 실행할 수 있게 하는 기능으로, 사용자가 직접 실행해야 할 텍스트를 생성하는 데 그치지 않고 애플리케이션을 조작합니다.',
          },
          {
            q: 'MCP란 무엇이며, RAPR AI의 MCP 커넥터는 무엇을 하나요?',
            a: '[Model Context Protocol(MCP)](https://modelcontextprotocol.io)은 AI 에이전트가 외부 도구 및 데이터 소스에 연결할 수 있도록 하는 표준입니다. RAPR AI는 Zapier와 Composio용 MCP 커넥터를 지원해, 에이전트가 이러한 플랫폼을 통해 데스크톱 밖의 서비스에 접근할 수 있게 합니다.',
          },
          {
            q: 'RAPR AI가 Ollama, Claude, Cursor를 대체할 수 있나요?',
            a: '아니요. RAPR AI는 이러한 도구를 대체하지 않으며, 이들 앞단에 위치하는 조율 계층입니다. 로컬 모델을 위해서는 여전히 Ollama 설치가 필요하며, Claude, Gemini, Codex, Cursor, OpenRouter를 위해서는 자신의 계정과 API 키가 필요합니다. RAPR AI는 자체 모델을 제공하는 대신 이들 사이를 조율합니다.',
          },
          {
            q: 'RAPR AI는 음성 응답을 지원하나요?',
            a: '예. RAPR AI는 오프라인 텍스트 음성 변환 옵션이나 ElevenLabs를 사용해 응답을 음성으로 읽어줄 수 있어, 우선순위에 따라 완전히 로컬인 음성 경로와 클라우드 음성 서비스 중에서 선택할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          '이미 Ollama를 로컬에서 운영하면서 클라우드 AI 서비스 계정도 함께 사용하고 있고, 자동화·메모리·MCP 커넥터를 갖춘 하나의 Windows 데스크톱 앱으로 이 둘 사이를 오가고 싶다면 RAPR AI는 검토해 볼 가치가 있습니다 — 반면 오늘 당장 Mac이나 Linux 버전이 필요하거나, 모든 모드에서 기본적으로 오프라인인 도구가 필요하다면 지금은 검토할 가치가 없습니다. 가장 특징적인 기능은 시각적 워크플로 빌더, 데스크톱 "컴퓨터 사용" 자동화, AI Council 다중 모델 비교, 그리고 서로 다른 AI 백엔드에 걸쳐 유지되는 메모리 저장소입니다. 솔직한 유보 사항은 다음과 같습니다: 이는 소규모 제작사의 무료 얼리 액세스 소프트웨어로, 독립적인 벤치마크, 평점, 장기 신뢰성 데이터가 없으며, 단 하나의 플랫폼에서만 사용할 수 있습니다. RAPR AI가 얼리 액세스를 벗어나기 전까지는 기능, 가격, 플랫폼 지원이 모두 변경될 것으로 예상해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[RAPR AI 공식 사이트](https://raprai.com) — 제품 설명, 기능 목록, 플랫폼 가용성, 가격 현황.',
          '[Ollama 공식 사이트](https://ollama.com) — RAPR AI가 오프라인/로컬 모델 지원을 위해 연결하는 로컬 추론 엔진.',
          '[Model Context Protocol 명세](https://modelcontextprotocol.io) — RAPR AI의 Zapier 및 Composio 커넥터를 뒷받침하는 개방형 표준.',
          '[OpenRouter](https://openrouter.ai) — RAPR AI가 수백 개의 추가 클라우드 모델에 접근하기 위해 사용하는 라우팅 서비스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 콘텐츠',
        items: [
          '[MCP로 Ollama를 데이터베이스와 API에 연결하기: 로컬 에이전트 설정 2026](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — 로컬 에이전트를 위한 실습형 MCP 설정 가이드로, RAPR AI의 MCP 커넥터를 이해하는 데 유용한 배경 지식입니다.',
          '[2026년 로컬 AI 에이전트: 실제로 작동하는 것과 여전히 실패하는 것](/ko/power-local-llm/autonomous-local-agents-actually-work) — RAPR AI가 경쟁하고 있는 로컬 에이전트 도구의 현재 상황을 더 폭넓게 살펴본 글입니다.',
          '[Zapier를 로컬 AI 에이전트로 대체하기: 월 30달러를 절약하는 5가지 워크플로(2026)](/ko/power-local-llm/replace-zapier-with-local-ai-agents) — RAPR AI의 Zapier MCP 커넥터를 완전한 로컬 대안과 비교 검토할 때 유용합니다.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리: 자신의 하드웨어에서 AI를 실행하는 160개 이상의 도구(2026)](/ko/power-local-llm/local-llm-software-directory) — 다른 로컬 및 하이브리드 AI 도구들 사이에서 RAPR AI가 어디에 위치하는지 확인할 수 있습니다.',
        ],
      },
    },
  },
}
