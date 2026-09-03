// Backyard AI Review: Local Roleplay and AI Character Chat (2026)
// Slug: backyard-ai-review-local-roleplay-2026
// Companion to: sillytavern-vs-agnai-vs-risuai-roleplay, uncensored-local-llm-creative-writing-ethics,
// local-llm-prompts-for-fiction-writers, best-local-llm-creative-writing-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-en.webp',
    title: 'Backyard AI Review (2026): Local AI Character Chat and Roleplay',
    seoTitle: 'Backyard AI Review 2026: Local Roleplay & Character Chat',
    intro:
      'Backyard AI ([backyard.ai](https://backyard.ai)), formerly named Faraday.dev, is a free, closed-source desktop app for Windows and Mac built specifically for AI character chat and roleplay. It runs open-source models — Llama, Mistral, Gemma, and community-tuned roleplay fine-tunes such as Fimbulvetr 10.7B — entirely on your own hardware, with no account and no credit card required for local use. Its Character Hub gives you thousands of user-created personas to chat with out of the box, and an optional paid Backyard Cloud tier adds hosted inference for readers without a capable local GPU. The practical question is not whether local roleplay is possible — SillyTavern and RisuAI already prove that — it is whether Backyard AI\'s point-and-click simplicity is worth its closed-source model and curated character library compared with the more open, more configurable frontends covered elsewhere on this site.',
    metaDescription:
      'Backyard AI review 2026: free local roleplay app for Windows and Mac. Character Hub, Fimbulvetr 10.7B, Backyard Cloud pricing ($7/$18/$35), hardware needs, and how it compares with Loci AI and SillyTavern.',
    twitterDescription:
      'Backyard AI review 2026: free local character chat for Windows/Mac, Character Hub, optional Backyard Cloud tiers, and how it stacks up against SillyTavern, Loci AI, and RisuAI.',
    audience:
      'Roleplay and AI-character-chat users deciding between Backyard AI\'s low-friction local app, its paid cloud tiers, and more configurable local frontends like SillyTavern, Agnai, or RisuAI — covers setup, hardware needs, pricing, and privacy trade-offs.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visit Backyard AI official site →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['16 GB VRAM gaming GPU', 'RTX 4090 24 GB', 'Apple Silicon 36 GB+ unified memory'],
    leadAnswerBlock:
      '**Backyard AI is the pick for readers who want AI character chat and roleplay running on their own machine without configuring a frontend.** The free desktop app for Windows and Mac needs no account, no credit card, and no manual setup of backends like koboldcpp or text-generation-webui — install it, pick a character from the built-in Character Hub or a community roleplay model like Fimbulvetr 10.7B, and start chatting entirely offline. Readers without a capable GPU can pay for Backyard Cloud ($7–$35/month) to run larger hosted models instead. Readers who want deep prompt-template control, group chats, or a fully open-source stack should compare it with [SillyTavern](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) or [Loci AI](/power-local-llm/loci-ai-review-offline-local-ai).',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Backyard AI Is', anchor: 'what-is-backyard-ai' },
      { label: 'How Local Mode Works', anchor: 'how-local-mode-works' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Backyard Cloud Pricing', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI on Windows and Mac', anchor: 'platforms' },
      { label: 'Backyard AI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Backyard AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Backyard AI', anchor: 'who-should-not-use' },
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
          'Backyard AI ([backyard.ai](https://backyard.ai)), formerly Faraday.dev, is a free, closed-source desktop app for Windows and Mac focused on AI character chat and roleplay.',
          'Local mode is free, needs no account, and runs entirely offline once a model is downloaded — models include Llama, Mistral, Gemma, and community roleplay fine-tunes like Fimbulvetr 10.7B.',
          'Character Hub is the standout feature: thousands of pre-built, user-created AI characters and personas, ready to chat with immediately.',
          'Optional Backyard Cloud tiers (Free/$7/$18/$35 per month) add hosted inference on larger models — Midnight Rose 70B and Magnum 72B on the Pro tier — for readers without a strong local GPU, plus mobile and web access that syncs with desktop.',
          'Hardware guidance: Fimbulvetr 10.7B and similar 8B–13B roleplay merges run comfortably on a 16 GB VRAM gaming GPU; the largest community models want 24 GB+ VRAM or 36 GB+ unified memory on Apple Silicon.',
          'Backyard AI trades customization for simplicity: no group chats, no open-source frontend code, and a curated (not unlimited) local model list, compared with SillyTavern.',
          'The referral program pays account bill credit for referrals, not cash commission — do not confuse it with a traditional affiliate program.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'What Backyard AI Is',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI is a free, closed-source desktop app for Windows and Mac that runs open-source LLMs locally for AI character chat and roleplay, with an optional paid cloud tier for hosted inference.' },
          { type: 'plain-terms', text: 'Think of it as a roleplay-focused alternative to Ollama plus a chat interface, pre-packaged with thousands of ready-made characters — you skip the backend/frontend split that SillyTavern requires.' },
        ],
        content: [
          'Backyard AI is a desktop application, formerly named Faraday.dev, built by a small independent team around one goal: making local AI character chat and roleplay approachable for readers who do not want to assemble a backend (koboldcpp, text-generation-webui, Ollama) and a separate frontend (SillyTavern, Agnai, RisuAI) themselves.',
          'The app is free and closed-source — unlike SillyTavern, RisuAI, or Agnai, the frontend code is not published for community audit or modification. In local mode it needs no account, no credit card, and no internet connection once a model is downloaded.',
          'Its centerpiece feature is the Character Hub: a built-in library of thousands of user-created AI characters and personas. Instead of writing a character card from scratch (the standard SillyTavern workflow), most readers start by browsing the Hub and picking one that already fits the kind of conversation or story they want.',
          'Local mode supports voice interaction alongside text chat, and advanced settings expose lorebooks, author\'s notes, custom context size, sampler settings, and grammars for readers who want more control once they are comfortable with the basics.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'How Local Mode Works',
        content: [
          'Local mode is the free, offline path: install the app, download a model, and chat without sending anything to a server.',
        ],
        items: [
          '**Model selection.** Backyard AI ships with a curated set of open-source models optimized for character chat — Llama and Mistral base models, Gemma variants, and community roleplay fine-tunes such as Fimbulvetr 10.7B, which was built specifically for character consistency and narrative voice rather than general assistant tasks.',
          '**No account required.** Local chat works without signing up, entering payment details, or connecting to Backyard Cloud. Everything runs and stays on the machine you installed the app on.',
          '**Character Hub browsing.** Pick a pre-built character card from the Hub, or import/write your own — the same underlying local model powers every character, but the character card supplies personality, backstory, and tone.',
          '**Advanced controls when you want them.** Lorebooks (persistent world/character facts injected into context), author\'s notes (steering instructions), custom context window size, sampler settings (temperature, top-p, repetition penalty), and grammars (structured output constraints) are all available in local mode without needing Backyard Cloud.',
          '**Tethering to a desktop.** Readers running Backyard AI on a phone or lighter machine can tether to a more powerful desktop running the full app, offloading inference to that machine while keeping the chat interface on the lighter device.',
        ],
        note: 'Model download sizes and exact VRAM requirements vary by quantization level and context length chosen. Verify current model list and file sizes on backyard.ai before committing to a hardware purchase. Last verified 2026-09-02.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free local mode, no account',
            'What it means in real use': 'Download the app and a model, then chat offline indefinitely at no cost.',
            'Limitation / caveat': 'Larger/newer models beyond the curated local list require Backyard Cloud instead.',
          },
          {
            'Benefit': 'Character Hub',
            'What it means in real use': 'Thousands of ready-made AI characters — no need to write a character card to start chatting.',
            'Limitation / caveat': 'Quality of community-submitted characters varies; curation is uneven compared to a hand-picked set.',
          },
          {
            'Benefit': 'Minimal setup',
            'What it means in real use': 'One installer, no separate backend/frontend pairing to configure, unlike SillyTavern.',
            'Limitation / caveat': 'Less transparency into what is running under the hood since the app is closed-source.',
          },
          {
            'Benefit': 'Local privacy',
            'What it means in real use': 'Local-mode conversations are processed on-device; nothing is sent to Backyard Cloud unless you opt in.',
            'Limitation / caveat': 'Closed-source code means the privacy claim cannot be independently verified the way an open-source frontend can.',
          },
          {
            'Benefit': 'Optional cloud scaling',
            'What it means in real use': 'Backyard Cloud lets readers without a strong GPU run 70B-class models (Midnight Rose 70B, Magnum 72B) from any device.',
            'Limitation / caveat': 'Cloud tiers cost $7–$35/month and conversations on cloud models are processed on Backyard\'s servers, not locally.',
          },
          {
            'Benefit': 'Advanced controls available locally',
            'What it means in real use': 'Lorebooks, author\'s notes, custom context size, sampler settings, and grammars work without a subscription.',
            'Limitation / caveat': 'No group chats and no visual node-based workflow editor — SillyTavern extensions go further for power users.',
          },
          {
            'Benefit': 'Cross-device continuity (cloud)',
            'What it means in real use': 'Backyard Cloud syncs the same characters and chats across desktop, web, iOS, and Android.',
            'Limitation / caveat': 'This convenience only applies to the paid cloud tiers, not to fully offline local-mode chat.',
          },
          {
            'Benefit': 'Community roleplay fine-tunes',
            'What it means in real use': 'Fimbulvetr 10.7B and similar merges are tuned specifically for character voice consistency, not generic assistant behavior.',
            'Limitation / caveat': 'These merges reason less reliably than larger frontier or general-purpose instruction models.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Backyard Cloud Pricing',
        content: [
          'Backyard Cloud is optional — local mode covers chat for free indefinitely. Cloud tiers exist for readers who want larger hosted models or cross-device sync without owning a capable GPU.',
        ],
        columns: ['Plan', 'Price', 'What you get', 'Token memory / speed'],
        rows: [
          {
            'Plan': 'Free',
            'Price': '$0/month',
            'What you get': '100 daily messages on Fimbulvetr 10.7B, 25 daily free messages on Advanced/Pro-tier models, web + desktop + iOS + Android apps',
            'Token memory / speed': '4,096-token model memory',
          },
          {
            'Plan': 'Standard',
            'Price': '$7/month',
            'What you get': 'Unlimited messages on Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3',
            'Token memory / speed': '4,096-token memory / up to 30 tok/s',
          },
          {
            'Plan': 'Advanced',
            'Price': '$18/month',
            'What you get': 'Adds Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B; Standard models extended to 8k context',
            'Token memory / speed': '8,192-token memory / up to 40 tok/s',
          },
          {
            'Plan': 'Pro',
            'Price': '$35/month',
            'What you get': 'Adds Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B; expert params (grammars); private support channel',
            'Token memory / speed': '6,000–30,000-token memory',
          },
        ],
        note: 'Backyard Cloud runs a referral program, not a cash-commission affiliate program: referring a friend gives them 50% off their first month, and gives the referrer promotional bill credit (roughly $17.50 per Pro referral, $9.00 per Advanced, $3.50 per Standard) applied to their own account — not a cash payout. Pricing verified against backyard.ai on 2026-09-02; confirm current tiers before subscribing since SaaS pricing changes.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI on Windows and Mac',
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'Windows',
            'What to expect': 'Free installer from backyard.ai. Local inference uses your GPU (NVIDIA CUDA) or CPU/RAM depending on hardware. Full Character Hub and local model library available.',
            'Important note': 'A 16 GB VRAM gaming GPU comfortably runs Fimbulvetr 10.7B-class models; CPU-only setups work but respond slower.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Native app for Apple Silicon. Unified memory lets larger community models run without a discrete GPU, similar to how Ollama and LM Studio use Apple Silicon.',
            'Important note': '36 GB+ unified memory gives headroom for the larger community roleplay merges; base 8–16 GB Macs are limited to smaller models.',
          },
          {
            'Platform': 'Mobile & web (Backyard Cloud only)',
            'What to expect': 'iOS, Android, and web apps connect to Backyard Cloud for hosted inference and sync the same characters and chat history with desktop.',
            'Important note': 'Mobile/web access requires a Backyard Cloud plan (Free tier included) — there is no offline local-inference mode on phone.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. Alternatives',
        columns: ['App', 'Best for', 'Setup level', 'Model flexibility', 'Source model', 'Key limitation'],
        rows: [
          {
            'App': 'Backyard AI',
            'Best for': 'Low-friction local character chat with a built-in Character Hub',
            'Setup level': 'Minimal (one installer, download a model)',
            'Model flexibility': 'Curated open models + community roleplay fine-tunes',
            'Source model': 'Closed-source app, free local use',
            'Key limitation': 'No group chats; closed-source frontend; curated model list',
          },
          {
            'App': 'SillyTavern',
            'Best for': 'Maximum customization, group chats, prompt-template control',
            'Setup level': 'High (separate backend + frontend)',
            'Model flexibility': 'Any GGUF via koboldcpp/text-generation-webui/Ollama backend',
            'Source model': 'Fully open source',
            'Key limitation': 'Steepest learning curve of the three; no built-in character library',
          },
          {
            'App': 'Loci AI',
            'Best for': 'Cross-platform general-purpose on-device chat (not roleplay-focused)',
            'Setup level': 'Minimal (download, chat)',
            'Model flexibility': 'Curated library (~10 models); cannot import GGUF',
            'Source model': 'Closed-source app, free local use',
            'Key limitation': 'Not built for character/roleplay features like lorebooks or Character Hub',
          },
          {
            'App': 'RisuAI',
            'Best for': 'Entry-level roleplay UI with lighter setup than SillyTavern',
            'Setup level': 'Medium (web or self-hosted, backend still required)',
            'Model flexibility': 'Any GGUF via a connected backend',
            'Source model': 'Open source',
            'Key limitation': 'Smaller extension ecosystem than SillyTavern; still needs a separate backend',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Backyard AI',
        items: [
          '**Reader new to local AI roleplay.** Backyard AI removes the backend/frontend split entirely — one installer, one app, immediate access to the Character Hub. This is the easiest on-ramp into local character chat covered on this site.',
          '**Reader who wants ready-made characters.** Browsing thousands of pre-built personas in the Character Hub beats writing a character card from scratch, especially for a first session.',
          '**Reader without a strong GPU who still wants larger models.** Backyard Cloud\'s Standard/Advanced/Pro tiers give access to 70B-class models (Midnight Rose 70B, Magnum 72B) without buying hardware.',
          '**Reader who wants cross-device continuity.** Backyard Cloud syncs chats and characters across desktop, web, iOS, and Android — useful for continuing a conversation started on a PC from a phone.',
          '**Reader who values simplicity over deep configuration.** Lorebooks, author\'s notes, and sampler settings are available without needing to learn SillyTavern\'s extension ecosystem.',
          '**Privacy-conscious reader on a budget.** Local mode is free, needs no account, and keeps conversations on-device — a reasonable middle ground between a fully cloud service and a fully DIY open-source stack.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Backyard AI',
        items: [
          '**Reader who wants an auditable, fully open-source frontend.** Backyard AI\'s app code is closed-source. Readers who need to verify exactly what the app does with their data, or who want to modify the frontend, should use [SillyTavern](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) or RisuAI instead.',
          '**Reader who needs group chats or advanced prompt templating.** SillyTavern\'s extension ecosystem covers multi-character group scenes and deep prompt-template control that Backyard AI does not offer.',
          '**Reader who wants unlimited model choice locally.** Backyard AI\'s local model list is curated; it does not support importing any arbitrary GGUF file the way SillyTavern-plus-koboldcpp does.',
          '**Reader unwilling to pay for larger hosted models.** The free local models are capped around the 8B–13B range; reaching Midnight Rose 70B or Magnum 72B quality requires a paid Backyard Cloud subscription.',
          '**Reader who needs the deepest model-management control, quantization tuning, or benchmarking.** More technical local-LLM tools give finer control over quantization formats and inference parameters than Backyard AI\'s simplified interface exposes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Backyard AI free?',
            a: 'Yes, for local mode. The desktop app for Windows and Mac is free to download, needs no account or credit card, and lets you chat with locally downloaded models offline at no cost. Backyard Cloud, the optional hosted tier for larger models and mobile/web access, has a free plan plus three paid tiers: Standard ($7/month), Advanced ($18/month), and Pro ($35/month).',
          },
          {
            q: 'What was Backyard AI called before?',
            a: 'Backyard AI was previously named Faraday.dev. The app was rebranded to Backyard AI; the underlying local-first character-chat concept is the same.',
          },
          {
            q: 'Is Backyard AI open source?',
            a: 'No. Backyard AI is closed-source, unlike SillyTavern, RisuAI, and Agnai, which publish their frontend code for community audit and modification. Local-mode chat still runs entirely on your device, but the app itself is not open for inspection.',
          },
          {
            q: 'What is the Character Hub?',
            a: 'The Character Hub is Backyard AI\'s built-in library of thousands of user-created AI characters and personas. Instead of writing a character card from scratch, most readers browse the Hub and pick one that fits the conversation or story they want, then chat with it using a locally downloaded model.',
          },
          {
            q: 'What hardware do I need to run Backyard AI locally?',
            a: 'Fimbulvetr 10.7B and similar 8B–13B roleplay-tuned models run comfortably on a 16 GB VRAM gaming GPU. The largest community models available in Backyard Cloud (Midnight Rose 70B, Magnum 72B) need roughly the same VRAM tier as any 70B-class local model — around 42 GB VRAM at Q4_K_M — or 36 GB+ unified memory on Apple Silicon; for local (non-cloud) use, stick to the 8B–13B tier unless your hardware matches that ceiling.',
          },
          {
            q: 'Does Backyard AI work offline?',
            a: 'Yes, in local mode. Once the app and a model are downloaded, chat runs entirely on-device with no internet connection required. Backyard Cloud, mobile apps, and web access require an internet connection since inference happens on Backyard\'s servers.',
          },
          {
            q: 'Is the Backyard Cloud referral program a paid affiliate program?',
            a: 'No. Referring a friend gives them 50% off their first month and gives the referrer promotional bill credit toward their own subscription — roughly $17.50 for a Pro referral, $9.00 for Advanced, and $3.50 for Standard. This is account credit, not a cash commission payout.',
          },
          {
            q: 'How does Backyard AI compare to SillyTavern?',
            a: 'Backyard AI trades customization for simplicity: one installer, a built-in Character Hub, and no separate backend to configure, but a closed-source app with no group chats. SillyTavern is fully open source, supports group chats and deep prompt-template customization via extensions, but requires pairing it with a separate backend (koboldcpp, text-generation-webui, or Ollama) and has a steeper learning curve. See the full comparison in [SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: 'Can I import my own character cards or models into Backyard AI?',
            a: 'You can import or write your own character cards for use with any locally downloaded model. Model selection for local mode is limited to Backyard AI\'s curated list (Llama, Mistral, Gemma variants, and roleplay fine-tunes like Fimbulvetr 10.7B) — it does not support importing an arbitrary GGUF file the way a koboldcpp-plus-SillyTavern setup does.',
          },
          {
            q: 'Does Backyard AI support voice interaction?',
            a: 'Yes. Local mode includes voice interaction alongside text chat, in addition to advanced settings like lorebooks, author\'s notes, custom context size, sampler settings, and grammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Backyard AI earns its place as the lowest-friction entry point into local AI character chat covered on this site. The combination of a free desktop app, no account requirement, and a Character Hub stocked with thousands of ready-made personas removes the two biggest barriers to trying local roleplay: backend configuration and character-card writing. For readers who outgrow the local model ceiling, Backyard Cloud\'s $7–$35/month tiers scale up to 70B-class models (Midnight Rose 70B, Magnum 72B) without requiring a hardware upgrade, and the referral program pays account credit rather than cash — worth knowing so expectations are set correctly. The trade-off is real: the app is closed-source, offers no group chats, and limits local model choice to a curated list, so readers who want an auditable, fully open, deeply customizable stack should use SillyTavern instead. For everyone else who wants roleplay working in minutes rather than hours, Backyard AI is a strong first stop.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Backyard AI official site](https://backyard.ai) — product overview, downloads, Character Hub, Backyard Cloud pricing.',
          '[Backyard AI documentation — Start Guide](https://backyard.ai/docs/start-guide/overview) — setup, model selection, and feature overview.',
          '[Backyard AI models on Hugging Face](https://huggingface.co/backyardai) — GGUF model files distributed for use with the app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI: Best Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — the open-source, more configurable alternative; full backend/frontend comparison.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — model-level guidance that applies to any local roleplay frontend, Backyard AI included.',
          '[Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers) — prompt structures for character voice and narrative consistency.',
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — model-side comparison for picking what to run inside Backyard AI or any frontend.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a general-purpose (non-roleplay-focused) on-device chat app for comparison.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-de.webp',
    title: 'Backyard AI im Test (2026): Lokaler KI-Charakter-Chat und Rollenspiel',
    seoTitle: 'Backyard AI Test 2026: Lokales Rollenspiel & Charakter-Chat',
    intro:
      'Backyard AI ([backyard.ai](https://backyard.ai)), früher Faraday.dev genannt, ist eine kostenlose, closed-source Desktop-App für Windows und Mac, die speziell für KI-Charakter-Chat und Rollenspiel entwickelt wurde. Sie führt Open-Source-Modelle — Llama, Mistral, Gemma und community-getunte Rollenspiel-Fine-Tunes wie Fimbulvetr 10.7B — vollständig auf Ihrer eigenen Hardware aus, ohne Konto und ohne Kreditkarte für die lokale Nutzung. Der Character Hub liefert von Anfang an tausende von Community-erstellten Personas zum sofortigen Chatten, und eine optionale kostenpflichtige Backyard-Cloud-Stufe bietet gehostete Inferenz für Leser ohne leistungsfähige lokale GPU. Die praktische Frage ist nicht, ob lokales Rollenspiel möglich ist — SillyTavern und RisuAI beweisen das bereits —, sondern ob die Klick-und-fertig-Einfachheit von Backyard AI angesichts des closed-source Modells und der kuratierten Charakter-Bibliothek den offeneren, konfigurierbareren Frontends dieser Seite vorzuziehen ist.',
    metaDescription:
      'Backyard AI Test 2026: kostenlose lokale Rollenspiel-App für Windows und Mac. Character Hub, Fimbulvetr 10.7B, Backyard-Cloud-Preise (7 $/18 $/35 $), Hardware-Bedarf und Vergleich mit Loci AI und SillyTavern.',
    twitterDescription:
      'Backyard AI Test 2026: kostenloser lokaler Charakter-Chat für Windows/Mac, Character Hub, optionale Backyard-Cloud-Stufen und Vergleich mit SillyTavern, Loci AI und RisuAI.',
    audience:
      'Rollenspiel- und KI-Charakter-Chat-Nutzer, die zwischen der unkomplizierten lokalen App von Backyard AI, ihren kostenpflichtigen Cloud-Stufen und konfigurierbareren lokalen Frontends wie SillyTavern, Agnai oder RisuAI entscheiden — behandelt Einrichtung, Hardware-Bedarf, Preise und Datenschutz-Kompromisse.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Offizielle Backyard-AI-Website besuchen →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['16 GB VRAM Gaming-GPU', 'RTX 4090 24 GB', 'Apple Silicon 36 GB+ Unified Memory'],
    leadAnswerBlock:
      '**Backyard AI ist die richtige Wahl für Leser, die KI-Charakter-Chat und Rollenspiel auf dem eigenen Rechner nutzen wollen, ohne ein Frontend konfigurieren zu müssen.** Die kostenlose Desktop-App für Windows und Mac benötigt kein Konto, keine Kreditkarte und keine manuelle Einrichtung von Backends wie koboldcpp oder text-generation-webui — installieren, einen Charakter aus dem integrierten Character Hub oder ein Community-Rollenspielmodell wie Fimbulvetr 10.7B wählen, und vollständig offline loschatten. Leser ohne leistungsfähige GPU können für Backyard Cloud (7–35 $/Monat) bezahlen, um größere gehostete Modelle zu nutzen. Wer tiefe Prompt-Template-Kontrolle, Gruppenchats oder einen vollständig quelloffenen Stack möchte, sollte [SillyTavern](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) oder [Loci AI](/de/power-local-llm/loci-ai-review-offline-local-ai) vergleichen.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      de: {
        question: 'Sollte ich Backyard AI für lokales Rollenspiel und Charakter-Chat nutzen?',
        answer:
          'Nutzen Sie Backyard AI, wenn Sie eine kostenlose Desktop-App ohne Einrichtungsaufwand für KI-Charakter-Chat wollen, die Open-Source-Modelle vollständig auf Ihrem eigenen Windows- oder Mac-Rechner ausführt, mit integriertem Character Hub voller Community-Personas. Verzichten Sie darauf, wenn Sie einen quelloffenen, vollständig auditierbaren Stack, tiefe Prompt-Template-Anpassung oder Gruppenchat-Funktionen benötigen — SillyTavern bietet alle drei, allerdings mit schwierigerer Einrichtung.',
        bullets: [
          'Kostenlose Desktop-App für Windows und Mac; kein Konto oder Kreditkarte für den lokalen Modus nötig.',
          'Führt Llama, Mistral, Gemma und Rollenspiel-Fine-Tunes wie Fimbulvetr 10.7B vollständig offline aus.',
          'Character Hub: tausende von Community-erstellten KI-Charakteren und Personas integriert.',
          'Optionale Backyard-Cloud-Stufen (7 $/18 $/35 $ pro Monat) bieten gehostete Inferenz für größere Modelle ohne lokale GPU.',
          'Closed-Source-App — anders als SillyTavern ist der Frontend-Code selbst nicht für Audit oder Änderungen offen.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Backyard AI ist', anchor: 'what-is-backyard-ai' },
      { label: 'Wie der lokale Modus funktioniert', anchor: 'how-local-mode-works' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Backyard-Cloud-Preise', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI auf Windows und Mac', anchor: 'platforms' },
      { label: 'Backyard AI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Backyard AI nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Backyard AI nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Backyard AI ([backyard.ai](https://backyard.ai)), früher Faraday.dev, ist eine kostenlose, closed-source Desktop-App für Windows und Mac für KI-Charakter-Chat und Rollenspiel.',
          'Der lokale Modus ist kostenlos, benötigt kein Konto und läuft nach dem Modell-Download vollständig offline — Modelle umfassen Llama, Mistral, Gemma und Community-Rollenspiel-Fine-Tunes wie Fimbulvetr 10.7B.',
          'Der Character Hub ist das Highlight: tausende vorgefertigte, Community-erstellte KI-Charaktere und Personas, sofort einsatzbereit.',
          'Optionale Backyard-Cloud-Stufen (Free/7 $/18 $/35 $ pro Monat) bieten gehostete Inferenz auf größeren Modellen — Midnight Rose 70B und Magnum 72B in der Pro-Stufe — für Leser ohne starke lokale GPU, plus mobilen und Web-Zugriff mit Desktop-Synchronisation.',
          'Hardware-Hinweis: Fimbulvetr 10.7B und ähnliche 8B–13B-Rollenspiel-Merges laufen problemlos auf einer 16-GB-VRAM-Gaming-GPU; die größten Community-Modelle benötigen 24 GB+ VRAM oder 36 GB+ Unified Memory auf Apple Silicon.',
          'Backyard AI tauscht Anpassbarkeit gegen Einfachheit: keine Gruppenchats, kein quelloffener Frontend-Code und eine kuratierte (nicht unbegrenzte) lokale Modellliste im Vergleich zu SillyTavern.',
          'Das Empfehlungsprogramm zahlt Konto-Gutschrift für Empfehlungen, keine Bargeld-Provision — nicht mit einem klassischen Affiliate-Programm verwechseln.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Was Backyard AI ist',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI ist eine kostenlose, closed-source Desktop-App für Windows und Mac, die Open-Source-LLMs lokal für KI-Charakter-Chat und Rollenspiel ausführt, mit optionaler kostenpflichtiger Cloud-Stufe für gehostete Inferenz.' },
          { type: 'plain-terms', text: 'Man kann es sich als rollenspielfokussierte Alternative zu Ollama plus Chat-Oberfläche vorstellen, vorinstalliert mit tausenden fertigen Charakteren — die Backend/Frontend-Trennung, die SillyTavern erfordert, entfällt.' },
        ],
        content: [
          'Backyard AI ist eine Desktop-Anwendung, früher Faraday.dev genannt, entwickelt von einem kleinen unabhängigen Team mit einem Ziel: lokalen KI-Charakter-Chat und Rollenspiel für Leser zugänglich zu machen, die kein Backend (koboldcpp, text-generation-webui, Ollama) und ein separates Frontend (SillyTavern, Agnai, RisuAI) selbst zusammenstellen wollen.',
          'Die App ist kostenlos und closed-source — anders als SillyTavern, RisuAI oder Agnai ist der Frontend-Code nicht für Community-Audits oder Änderungen veröffentlicht. Im lokalen Modus benötigt sie kein Konto, keine Kreditkarte und keine Internetverbindung, sobald ein Modell heruntergeladen ist.',
          'Das Herzstück ist der Character Hub: eine integrierte Bibliothek mit tausenden Community-erstellten KI-Charakteren und Personas. Statt eine Charakterkarte von Grund auf zu schreiben (der übliche SillyTavern-Workflow), starten die meisten Leser mit einem Blick in den Hub und wählen eine Karte, die bereits zur gewünschten Art von Gespräch oder Geschichte passt.',
          'Der lokale Modus unterstützt Sprachinteraktion neben Text-Chat, und erweiterte Einstellungen bieten Lorebooks, Author\'s Notes, benutzerdefinierte Kontextgröße, Sampler-Einstellungen und Grammars für Leser, die mehr Kontrolle wünschen, sobald sie mit den Grundlagen vertraut sind.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'Wie der lokale Modus funktioniert',
        content: [
          'Der lokale Modus ist der kostenlose Offline-Weg: App installieren, Modell herunterladen und chatten, ohne dass etwas an einen Server gesendet wird.',
        ],
        items: [
          '**Modellauswahl.** Backyard AI wird mit einer kuratierten Auswahl an Open-Source-Modellen ausgeliefert, die für Charakter-Chat optimiert sind — Llama- und Mistral-Basismodelle, Gemma-Varianten und Community-Rollenspiel-Fine-Tunes wie Fimbulvetr 10.7B, das speziell für Charakterkonsistenz und narrative Stimme statt allgemeine Assistenzaufgaben entwickelt wurde.',
          '**Kein Konto erforderlich.** Lokaler Chat funktioniert ohne Registrierung, Zahlungsdaten oder Verbindung zu Backyard Cloud. Alles läuft und bleibt auf dem Rechner, auf dem die App installiert wurde.',
          '**Character-Hub-Browsing.** Wählen Sie eine vorgefertigte Charakterkarte aus dem Hub oder importieren/schreiben Sie Ihre eigene — dasselbe lokale Modell treibt jeden Charakter an, aber die Charakterkarte liefert Persönlichkeit, Hintergrundgeschichte und Tonfall.',
          '**Erweiterte Kontrollen bei Bedarf.** Lorebooks (dauerhafte Welt-/Charakterfakten, die in den Kontext eingespeist werden), Author\'s Notes (Steuerungsanweisungen), benutzerdefinierte Kontextfenstergröße, Sampler-Einstellungen (Temperatur, Top-P, Wiederholungsstrafe) und Grammars (strukturierte Ausgabebeschränkungen) sind im lokalen Modus alle ohne Backyard Cloud verfügbar.',
          '**Tethering an einen Desktop.** Leser, die Backyard AI auf einem Telefon oder leichteren Gerät nutzen, können sich mit einem leistungsfähigeren Desktop-Rechner koppeln, der die vollständige App ausführt, und die Inferenz auf diesen Rechner auslagern, während die Chat-Oberfläche auf dem leichteren Gerät bleibt.',
        ],
        note: 'Download-Größen und exakte VRAM-Anforderungen variieren je nach gewählter Quantisierungsstufe und Kontextlänge. Prüfen Sie die aktuelle Modellliste und Dateigrößen auf backyard.ai, bevor Sie einen Hardware-Kauf tätigen. Zuletzt geprüft am 02.09.2026.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenloser lokaler Modus, kein Konto',
            'Was das in der Praxis bedeutet': 'App und Modell herunterladen, dann unbegrenzt kostenlos offline chatten.',
            'Einschränkung / Hinweis': 'Größere/neuere Modelle außerhalb der kuratierten lokalen Liste erfordern Backyard Cloud.',
          },
          {
            'Vorteil': 'Character Hub',
            'Was das in der Praxis bedeutet': 'Tausende fertige KI-Charaktere — keine Charakterkarte nötig, um loszuchatten.',
            'Einschränkung / Hinweis': 'Qualität der Community-Charaktere schwankt; Kuratierung ist ungleichmäßig im Vergleich zu handverlesenen Sets.',
          },
          {
            'Vorteil': 'Minimale Einrichtung',
            'Was das in der Praxis bedeutet': 'Ein Installer, keine separate Backend/Frontend-Paarung wie bei SillyTavern.',
            'Einschränkung / Hinweis': 'Weniger Transparenz, was im Hintergrund läuft, da die App closed-source ist.',
          },
          {
            'Vorteil': 'Lokale Privatsphäre',
            'Was das in der Praxis bedeutet': 'Gespräche im lokalen Modus werden auf dem Gerät verarbeitet; nichts wird an Backyard Cloud gesendet, außer Sie stimmen zu.',
            'Einschränkung / Hinweis': 'Closed-Source-Code bedeutet, dass der Datenschutzanspruch nicht unabhängig überprüfbar ist wie bei einem Open-Source-Frontend.',
          },
          {
            'Vorteil': 'Optionale Cloud-Skalierung',
            'Was das in der Praxis bedeutet': 'Backyard Cloud lässt Leser ohne starke GPU Modelle der 70B-Klasse (Midnight Rose 70B, Magnum 72B) von jedem Gerät aus nutzen.',
            'Einschränkung / Hinweis': 'Cloud-Stufen kosten 7–35 $/Monat, und Gespräche mit Cloud-Modellen werden auf Backyards Servern verarbeitet, nicht lokal.',
          },
          {
            'Vorteil': 'Erweiterte Kontrollen lokal verfügbar',
            'Was das in der Praxis bedeutet': 'Lorebooks, Author\'s Notes, benutzerdefinierte Kontextgröße und Sampler-Einstellungen funktionieren ohne Abonnement.',
            'Einschränkung / Hinweis': 'Keine Gruppenchats und kein visueller Node-basierter Workflow-Editor — SillyTavern-Erweiterungen gehen für Power-User weiter.',
          },
          {
            'Vorteil': 'Geräteübergreifende Kontinuität (Cloud)',
            'Was das in der Praxis bedeutet': 'Backyard Cloud synchronisiert dieselben Charaktere und Chats über Desktop, Web, iOS und Android.',
            'Einschränkung / Hinweis': 'Diese Bequemlichkeit gilt nur für die kostenpflichtigen Cloud-Stufen, nicht für vollständig offline laufenden lokalen Chat.',
          },
          {
            'Vorteil': 'Community-Rollenspiel-Fine-Tunes',
            'Was das in der Praxis bedeutet': 'Fimbulvetr 10.7B und ähnliche Merges sind speziell auf Konsistenz der Charakterstimme getunt, nicht auf allgemeines Assistenzverhalten.',
            'Einschränkung / Hinweis': 'Diese Merges argumentieren weniger zuverlässig als größere Frontier- oder allgemeine Instruction-Modelle.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Backyard-Cloud-Preise',
        content: [
          'Backyard Cloud ist optional — der lokale Modus deckt Chat unbegrenzt kostenlos ab. Die Cloud-Stufen existieren für Leser, die größere gehostete Modelle oder geräteübergreifende Synchronisation ohne leistungsfähige GPU wollen.',
        ],
        columns: ['Stufe', 'Preis', 'Was Sie erhalten', 'Token-Speicher / Geschwindigkeit'],
        rows: [
          {
            'Stufe': 'Free',
            'Preis': '0 $/Monat',
            'Was Sie erhalten': '100 tägliche Nachrichten auf Fimbulvetr 10.7B, 25 tägliche kostenlose Nachrichten auf Advanced-/Pro-Stufen-Modellen, Web- + Desktop- + iOS- + Android-Apps',
            'Token-Speicher / Geschwindigkeit': '4.096-Token-Modellgedächtnis',
          },
          {
            'Stufe': 'Standard',
            'Preis': '7 $/Monat',
            'Was Sie erhalten': 'Unbegrenzte Nachrichten auf Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3',
            'Token-Speicher / Geschwindigkeit': '4.096-Token-Gedächtnis / bis zu 30 Tok/s',
          },
          {
            'Stufe': 'Advanced',
            'Preis': '18 $/Monat',
            'Was Sie erhalten': 'Zusätzlich Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B; Standard-Modelle erweitert auf 8k Kontext',
            'Token-Speicher / Geschwindigkeit': '8.192-Token-Gedächtnis / bis zu 40 Tok/s',
          },
          {
            'Stufe': 'Pro',
            'Preis': '35 $/Monat',
            'Was Sie erhalten': 'Zusätzlich Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B; Experten-Parameter (Grammars); privater Support-Kanal',
            'Token-Speicher / Geschwindigkeit': '6.000–30.000-Token-Gedächtnis',
          },
        ],
        note: 'Backyard Cloud betreibt ein Empfehlungsprogramm, kein Affiliate-Programm mit Bargeld-Provision: Wer einen Freund wirbt, gibt diesem 50 % Rabatt auf den ersten Monat und erhält selbst eine Werbe-Kontogutschrift (ca. 17,50 $ pro Pro-Empfehlung, 9,00 $ pro Advanced, 3,50 $ pro Standard) auf das eigene Konto — keine Bargeld-Auszahlung. Preise geprüft anhand backyard.ai am 02.09.2026; aktuelle Stufen vor Abschluss prüfen, da sich SaaS-Preise ändern.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI auf Windows und Mac',
        columns: ['Plattform', 'Was Sie erwartet', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform': 'Windows',
            'Was Sie erwartet': 'Kostenloser Installer von backyard.ai. Lokale Inferenz nutzt Ihre GPU (NVIDIA CUDA) oder CPU/RAM je nach Hardware. Vollständiger Character Hub und lokale Modellbibliothek verfügbar.',
            'Wichtiger Hinweis': 'Eine 16-GB-VRAM-Gaming-GPU führt Modelle der Fimbulvetr-10.7B-Klasse problemlos aus; reine CPU-Setups funktionieren, antworten aber langsamer.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Native App für Apple Silicon. Unified Memory ermöglicht größere Community-Modelle ohne dedizierte GPU, ähnlich wie Ollama und LM Studio Apple Silicon nutzen.',
            'Wichtiger Hinweis': '36 GB+ Unified Memory bietet Spielraum für die größeren Community-Rollenspiel-Merges; Basis-Macs mit 8–16 GB sind auf kleinere Modelle beschränkt.',
          },
          {
            'Plattform': 'Mobil & Web (nur Backyard Cloud)',
            'Was Sie erwartet': 'iOS-, Android- und Web-Apps verbinden sich mit Backyard Cloud für gehostete Inferenz und synchronisieren dieselben Charaktere und Chatverläufe mit dem Desktop.',
            'Wichtiger Hinweis': 'Mobiler/Web-Zugriff erfordert einen Backyard-Cloud-Plan (Free-Stufe inklusive) — es gibt keinen Offline-Lokalinferenz-Modus auf dem Telefon.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. Alternativen',
        columns: ['App', 'Am besten für', 'Einrichtungsaufwand', 'Modellflexibilität', 'Quellmodell', 'Wichtigste Einschränkung'],
        rows: [
          {
            'App': 'Backyard AI',
            'Am besten für': 'Unkomplizierter lokaler Charakter-Chat mit integriertem Character Hub',
            'Einrichtungsaufwand': 'Minimal (ein Installer, Modell herunterladen)',
            'Modellflexibilität': 'Kuratierte offene Modelle + Community-Rollenspiel-Fine-Tunes',
            'Quellmodell': 'Closed-Source-App, kostenlose lokale Nutzung',
            'Wichtigste Einschränkung': 'Keine Gruppenchats; closed-source Frontend; kuratierte Modellliste',
          },
          {
            'App': 'SillyTavern',
            'Am besten für': 'Maximale Anpassung, Gruppenchats, Prompt-Template-Kontrolle',
            'Einrichtungsaufwand': 'Hoch (separates Backend + Frontend)',
            'Modellflexibilität': 'Jede GGUF-Datei über koboldcpp-/text-generation-webui-/Ollama-Backend',
            'Quellmodell': 'Vollständig quelloffen',
            'Wichtigste Einschränkung': 'Steilste Lernkurve der drei; keine integrierte Charakter-Bibliothek',
          },
          {
            'App': 'Loci AI',
            'Am besten für': 'Plattformübergreifender Allzweck-Chat auf dem Gerät (nicht rollenspielfokussiert)',
            'Einrichtungsaufwand': 'Minimal (herunterladen, chatten)',
            'Modellflexibilität': 'Kuratierte Bibliothek (~10 Modelle); kein GGUF-Import',
            'Quellmodell': 'Closed-Source-App, kostenlose lokale Nutzung',
            'Wichtigste Einschränkung': 'Nicht für Charakter-/Rollenspielfunktionen wie Lorebooks oder Character Hub gebaut',
          },
          {
            'App': 'RisuAI',
            'Am besten für': 'Einsteigerfreundliche Rollenspiel-UI mit leichterer Einrichtung als SillyTavern',
            'Einrichtungsaufwand': 'Mittel (Web oder Self-Hosting, Backend weiterhin nötig)',
            'Modellflexibilität': 'Jede GGUF-Datei über verbundenes Backend',
            'Quellmodell': 'Quelloffen',
            'Wichtigste Einschränkung': 'Kleineres Erweiterungs-Ökosystem als SillyTavern; benötigt weiterhin ein separates Backend',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Backyard AI nutzen sollte',
        items: [
          '**Einsteiger in lokales KI-Rollenspiel.** Backyard AI eliminiert die Backend/Frontend-Trennung komplett — ein Installer, eine App, sofortiger Zugriff auf den Character Hub. Das ist der einfachste Einstieg in lokalen Charakter-Chat auf dieser Seite.',
          '**Leser, die fertige Charaktere wollen.** Das Durchstöbern tausender vorgefertigter Personas im Character Hub schlägt das Schreiben einer Charakterkarte von Grund auf, besonders für die erste Sitzung.',
          '**Leser ohne starke GPU, die dennoch größere Modelle wollen.** Die Standard-/Advanced-/Pro-Stufen von Backyard Cloud bieten Zugriff auf Modelle der 70B-Klasse (Midnight Rose 70B, Magnum 72B) ohne Hardware-Kauf.',
          '**Leser, die geräteübergreifende Kontinuität wollen.** Backyard Cloud synchronisiert Chats und Charaktere über Desktop, Web, iOS und Android — nützlich, um ein am PC begonnenes Gespräch vom Telefon aus fortzusetzen.',
          '**Leser, denen Einfachheit wichtiger ist als tiefe Konfiguration.** Lorebooks, Author\'s Notes und Sampler-Einstellungen sind verfügbar, ohne das Erweiterungs-Ökosystem von SillyTavern lernen zu müssen.',
          '**Datenschutzbewusster Leser mit Budget.** Der lokale Modus ist kostenlos, benötigt kein Konto und hält Gespräche auf dem Gerät — ein vernünftiger Mittelweg zwischen einem vollständigen Cloud-Dienst und einem vollständigen DIY-Open-Source-Stack.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Backyard AI nicht nutzen sollte',
        items: [
          '**Leser, die ein auditierbares, vollständig quelloffenes Frontend wollen.** Der App-Code von Backyard AI ist closed-source. Leser, die genau überprüfen müssen, was die App mit ihren Daten macht, oder die das Frontend anpassen wollen, sollten stattdessen [SillyTavern](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) oder RisuAI nutzen.',
          '**Leser, die Gruppenchats oder erweiterte Prompt-Vorlagen brauchen.** Das Erweiterungs-Ökosystem von SillyTavern deckt Mehrfach-Charakter-Gruppenszenen und tiefe Prompt-Template-Kontrolle ab, die Backyard AI nicht bietet.',
          '**Leser, die unbegrenzte Modellwahl lokal wollen.** Die lokale Modellliste von Backyard AI ist kuratiert; sie unterstützt keinen Import beliebiger GGUF-Dateien wie eine Kombination aus SillyTavern und koboldcpp.',
          '**Leser, die nicht für größere gehostete Modelle bezahlen wollen.** Die kostenlosen lokalen Modelle sind im Bereich 8B–13B gedeckelt; Midnight-Rose-70B- oder Magnum-72B-Qualität erfordert ein kostenpflichtiges Backyard-Cloud-Abo.',
          '**Leser, die die tiefste Modellverwaltung, Quantisierungsanpassung oder Benchmarking-Kontrolle brauchen.** Technischere lokale LLM-Tools bieten feinere Kontrolle über Quantisierungsformate und Inferenzparameter, als die vereinfachte Oberfläche von Backyard AI zeigt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Backyard AI kostenlos?',
            a: 'Ja, für den lokalen Modus. Die Desktop-App für Windows und Mac ist kostenlos herunterladbar, benötigt kein Konto oder Kreditkarte und lässt Sie kostenlos offline mit lokal heruntergeladenen Modellen chatten. Backyard Cloud, die optionale gehostete Stufe für größere Modelle und mobilen/Web-Zugriff, hat einen kostenlosen Plan plus drei kostenpflichtige Stufen: Standard (7 $/Monat), Advanced (18 $/Monat) und Pro (35 $/Monat).',
          },
          {
            q: 'Wie hieß Backyard AI vorher?',
            a: 'Backyard AI hieß vorher Faraday.dev. Die App wurde zu Backyard AI umbenannt; das zugrunde liegende lokale Charakter-Chat-Konzept blieb gleich.',
          },
          {
            q: 'Ist Backyard AI Open Source?',
            a: 'Nein. Backyard AI ist closed-source, anders als SillyTavern, RisuAI und Agnai, die ihren Frontend-Code für Community-Audits und Änderungen veröffentlichen. Der Chat im lokalen Modus läuft weiterhin vollständig auf Ihrem Gerät, aber die App selbst ist nicht für Prüfungen offen.',
          },
          {
            q: 'Was ist der Character Hub?',
            a: 'Der Character Hub ist Backyard AIs integrierte Bibliothek mit tausenden Community-erstellten KI-Charakteren und Personas. Statt eine Charakterkarte von Grund auf zu schreiben, durchstöbern die meisten Leser den Hub und wählen eine, die zum gewünschten Gespräch oder zur Geschichte passt, und chatten dann damit über ein lokal heruntergeladenes Modell.',
          },
          {
            q: 'Welche Hardware brauche ich, um Backyard AI lokal zu betreiben?',
            a: 'Fimbulvetr 10.7B und ähnliche 8B–13B-rollenspielgetunte Modelle laufen problemlos auf einer 16-GB-VRAM-Gaming-GPU. Die größten Community-Modelle in Backyard Cloud (Midnight Rose 70B, Magnum 72B) benötigen etwa dieselbe VRAM-Klasse wie jedes lokale Modell der 70B-Klasse — rund 42 GB VRAM bei Q4_K_M — oder 36 GB+ Unified Memory auf Apple Silicon; für lokale (nicht cloudbasierte) Nutzung bleiben Sie bei der 8B–13B-Klasse, sofern Ihre Hardware nicht diese Obergrenze erreicht.',
          },
          {
            q: 'Funktioniert Backyard AI offline?',
            a: 'Ja, im lokalen Modus. Sobald App und Modell heruntergeladen sind, läuft der Chat vollständig auf dem Gerät ohne Internetverbindung. Backyard Cloud, mobile Apps und Web-Zugriff benötigen eine Internetverbindung, da die Inferenz auf Backyards Servern stattfindet.',
          },
          {
            q: 'Ist das Backyard-Cloud-Empfehlungsprogramm ein bezahltes Affiliate-Programm?',
            a: 'Nein. Wer einen Freund wirbt, gibt diesem 50 % Rabatt auf den ersten Monat und erhält selbst eine Werbe-Kontogutschrift auf das eigene Abo — rund 17,50 $ für eine Pro-Empfehlung, 9,00 $ für Advanced und 3,50 $ für Standard. Das ist eine Kontogutschrift, keine Bargeld-Provision.',
          },
          {
            q: 'Wie schneidet Backyard AI im Vergleich zu SillyTavern ab?',
            a: 'Backyard AI tauscht Anpassbarkeit gegen Einfachheit: ein Installer, ein integrierter Character Hub und kein separates Backend zum Konfigurieren, aber eine closed-source App ohne Gruppenchats. SillyTavern ist vollständig quelloffen, unterstützt Gruppenchats und tiefe Prompt-Template-Anpassung über Erweiterungen, erfordert aber die Kopplung mit einem separaten Backend (koboldcpp, text-generation-webui oder Ollama) und hat eine steilere Lernkurve. Den vollständigen Vergleich finden Sie unter [SillyTavern vs. Agnai vs. RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: 'Kann ich eigene Charakterkarten oder Modelle in Backyard AI importieren?',
            a: 'Sie können eigene Charakterkarten für jedes lokal heruntergeladene Modell importieren oder schreiben. Die Modellauswahl im lokalen Modus ist auf Backyard AIs kuratierte Liste beschränkt (Llama-, Mistral-, Gemma-Varianten und Rollenspiel-Fine-Tunes wie Fimbulvetr 10.7B) — der Import beliebiger GGUF-Dateien wie bei einer Kombination aus koboldcpp und SillyTavern wird nicht unterstützt.',
          },
          {
            q: 'Unterstützt Backyard AI Sprachinteraktion?',
            a: 'Ja. Der lokale Modus umfasst Sprachinteraktion neben Text-Chat sowie erweiterte Einstellungen wie Lorebooks, Author\'s Notes, benutzerdefinierte Kontextgröße, Sampler-Einstellungen und Grammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Backyard AI verdient seinen Platz als der reibungsloseste Einstiegspunkt in lokalen KI-Charakter-Chat auf dieser Seite. Die Kombination aus kostenloser Desktop-App, keinem Kontozwang und einem mit tausenden fertigen Personas gefüllten Character Hub beseitigt die beiden größten Hürden beim Ausprobieren von lokalem Rollenspiel: Backend-Konfiguration und Charakterkarten-Schreiben. Für Leser, die die lokale Modellobergrenze überschreiten, skalieren die 7–35-$/Monat-Stufen von Backyard Cloud bis zu Modellen der 70B-Klasse (Midnight Rose 70B, Magnum 72B) ohne Hardware-Upgrade, und das Empfehlungsprogramm zahlt Kontogutschrift statt Bargeld — gut zu wissen, damit die Erwartungen korrekt gesetzt sind. Der Kompromiss ist real: Die App ist closed-source, bietet keine Gruppenchats und begrenzt die lokale Modellwahl auf eine kuratierte Liste, sodass Leser, die einen auditierbaren, vollständig offenen, tief anpassbaren Stack wollen, stattdessen SillyTavern nutzen sollten. Für alle anderen, die Rollenspiel in Minuten statt Stunden zum Laufen bringen wollen, ist Backyard AI eine starke erste Anlaufstelle.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle Backyard-AI-Website](https://backyard.ai) — Produktübersicht, Downloads, Character Hub, Backyard-Cloud-Preise.',
          '[Backyard-AI-Dokumentation — Start Guide](https://backyard.ai/docs/start-guide/overview) — Einrichtung, Modellauswahl und Funktionsübersicht.',
          '[Backyard-AI-Modelle auf Hugging Face](https://huggingface.co/backyardai) — GGUF-Modelldateien zur Verwendung mit der App.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI: Bestes Rollenspiel-Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — die quelloffene, konfigurierbarere Alternative; vollständiger Backend/Frontend-Vergleich.',
          '[Unzensierte lokale LLMs für kreatives Schreiben: Ethik, Legalität & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — modellseitige Hinweise, die für jedes lokale Rollenspiel-Frontend gelten, Backyard AI eingeschlossen.',
          '[Lokale-LLM-Prompts für Belletristik-Autoren](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — Prompt-Strukturen für Charakterstimme und narrative Konsistenz.',
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) — modellseitiger Vergleich zur Auswahl, was in Backyard AI oder jedem anderen Frontend laufen soll.',
          '[Loci AI im Test: Offline-KI für iPhone, Android, iPad, Mac und Windows](/de/power-local-llm/loci-ai-review-offline-local-ai) — eine allgemeine (nicht rollenspielfokussierte) On-Device-Chat-App zum Vergleich.',
          '[Lokale-LLM-Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-es.webp',
    title: 'Análisis de Backyard AI (2026): Chat de Personajes IA y Roleplay Local',
    seoTitle: 'Backyard AI 2026: Roleplay Local y Chat de Personajes',
    intro:
      'Backyard AI ([backyard.ai](https://backyard.ai)), antes llamada Faraday.dev, es una app de escritorio gratuita y de código cerrado para Windows y Mac, creada específicamente para el chat de personajes IA y el roleplay. Ejecuta modelos de código abierto — Llama, Mistral, Gemma y ajustes finos de roleplay de la comunidad como Fimbulvetr 10.7B — completamente en tu propio equipo, sin cuenta ni tarjeta de crédito para el uso local. Su Character Hub ofrece de entrada miles de personas creadas por usuarios para chatear, y una capa opcional de pago, Backyard Cloud, añade inferencia alojada para quienes no tienen una GPU local potente. La pregunta práctica no es si el roleplay local es posible — SillyTavern y RisuAI ya lo demuestran —, sino si la sencillez de "instalar y listo" de Backyard AI compensa su modelo de código cerrado y su biblioteca de personajes curada frente a los frontends más abiertos y configurables que cubrimos en este sitio.',
    metaDescription:
      'Backyard AI 2026: app gratuita de roleplay local para Windows y Mac. Character Hub, Fimbulvetr 10.7B, precios de Backyard Cloud ($7/$18/$35), requisitos de hardware y comparación con Loci AI y SillyTavern.',
    twitterDescription:
      'Backyard AI 2026: chat de personajes local gratis para Windows/Mac, Character Hub, niveles opcionales de Backyard Cloud y comparación con SillyTavern, Loci AI y RisuAI.',
    audience:
      'Usuarios de roleplay y chat de personajes IA que deciden entre la app local sin fricción de Backyard AI, sus niveles de pago en la nube y frontends locales más configurables como SillyTavern, Agnai o RisuAI — cubre configuración, requisitos de hardware, precios y compromisos de privacidad.',
    readTime: '9 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar el sitio oficial de Backyard AI →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['GPU gaming 16 GB VRAM', 'RTX 4090 24 GB', 'Apple Silicon 36 GB+ memoria unificada'],
    leadAnswerBlock:
      '**Backyard AI es la opción para quienes quieren chat de personajes IA y roleplay en su propio equipo sin configurar un frontend.** La app de escritorio gratuita para Windows y Mac no necesita cuenta, tarjeta de crédito ni configuración manual de backends como koboldcpp o text-generation-webui — instálala, elige un personaje del Character Hub integrado o un modelo de roleplay de la comunidad como Fimbulvetr 10.7B, y empieza a chatear totalmente offline. Quienes no tengan una GPU potente pueden pagar Backyard Cloud ($7–$35/mes) para ejecutar modelos alojados más grandes. Quienes quieran control profundo de plantillas de prompt, chats grupales o una pila totalmente de código abierto deberían comparar con [SillyTavern](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) o [Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai).',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      es: {
        question: '¿Debería usar Backyard AI para roleplay local y chat de personajes?',
        answer:
          'Usa Backyard AI si quieres una app de escritorio gratuita sin configuración para chat de personajes IA que ejecute modelos de código abierto totalmente en tu propio equipo Windows o Mac, con un Character Hub integrado de personas creadas por usuarios. Sáltatela si necesitas una pila de código abierto totalmente auditable, personalización profunda de plantillas de prompt o funciones de chat grupal — SillyTavern te ofrece las tres, a costa de una configuración más difícil.',
        bullets: [
          'App de escritorio gratuita para Windows y Mac; no requiere cuenta ni tarjeta de crédito en modo local.',
          'Ejecuta Llama, Mistral, Gemma y ajustes finos de roleplay como Fimbulvetr 10.7B totalmente offline.',
          'Character Hub: miles de personajes y personas creados por usuarios integrados.',
          'Niveles opcionales de Backyard Cloud ($7/$18/$35 al mes) añaden inferencia alojada para modelos más grandes sin GPU local.',
          'App de código cerrado — a diferencia de SillyTavern, el código del frontend no está abierto para auditoría o modificación.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Backyard AI', anchor: 'what-is-backyard-ai' },
      { label: 'Cómo funciona el modo local', anchor: 'how-local-mode-works' },
      { label: 'Compromisos: beneficios vs. limitaciones', anchor: 'tradeoffs' },
      { label: 'Precios de Backyard Cloud', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI en Windows y Mac', anchor: 'platforms' },
      { label: 'Backyard AI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Backyard AI', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Backyard AI', anchor: 'who-should-not-use' },
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
        items: [
          'Backyard AI ([backyard.ai](https://backyard.ai)), antes Faraday.dev, es una app de escritorio gratuita y de código cerrado para Windows y Mac centrada en chat de personajes IA y roleplay.',
          'El modo local es gratuito, no necesita cuenta y funciona totalmente offline tras descargar un modelo — los modelos incluyen Llama, Mistral, Gemma y ajustes finos de roleplay de la comunidad como Fimbulvetr 10.7B.',
          'El Character Hub es la función destacada: miles de personajes IA prediseñados y creados por la comunidad, listos para chatear de inmediato.',
          'Los niveles opcionales de Backyard Cloud (Free/$7/$18/$35 al mes) añaden inferencia alojada en modelos más grandes — Midnight Rose 70B y Magnum 72B en el nivel Pro — para quienes no tienen una GPU local potente, además de acceso móvil y web sincronizado con el escritorio.',
          'Guía de hardware: Fimbulvetr 10.7B y merges de roleplay similares de 8B–13B funcionan bien en una GPU gaming de 16 GB VRAM; los modelos más grandes de la comunidad quieren 24 GB+ VRAM o 36 GB+ de memoria unificada en Apple Silicon.',
          'Backyard AI cambia personalización por simplicidad: sin chats grupales, sin código de frontend abierto y una lista de modelos locales curada (no ilimitada), en comparación con SillyTavern.',
          'El programa de referidos paga crédito en cuenta por referir, no comisión en efectivo — no lo confundas con un programa de afiliados tradicional.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Qué es Backyard AI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI es una app de escritorio gratuita y de código cerrado para Windows y Mac que ejecuta LLMs de código abierto localmente para chat de personajes IA y roleplay, con un nivel opcional de pago en la nube para inferencia alojada.' },
          { type: 'plain-terms', text: 'Es como una alternativa a Ollama enfocada en roleplay más una interfaz de chat, empaquetada con miles de personajes ya hechos — te ahorras la separación backend/frontend que exige SillyTavern.' },
        ],
        content: [
          'Backyard AI es una aplicación de escritorio, antes llamada Faraday.dev, creada por un pequeño equipo independiente con un objetivo: hacer accesible el chat de personajes IA y el roleplay local para quienes no quieren montar por su cuenta un backend (koboldcpp, text-generation-webui, Ollama) y un frontend separado (SillyTavern, Agnai, RisuAI).',
          'La app es gratuita y de código cerrado — a diferencia de SillyTavern, RisuAI o Agnai, el código del frontend no se publica para auditoría o modificación de la comunidad. En modo local no necesita cuenta, tarjeta de crédito ni conexión a internet una vez descargado un modelo.',
          'Su función central es el Character Hub: una biblioteca integrada con miles de personajes y personas IA creados por usuarios. En lugar de escribir una ficha de personaje desde cero (el flujo habitual de SillyTavern), la mayoría de usuarios empieza explorando el Hub y eligiendo uno que ya encaje con el tipo de conversación o historia que quiere.',
          'El modo local admite interacción por voz junto al chat de texto, y la configuración avanzada expone lorebooks, notas de autor, tamaño de contexto personalizado, ajustes de sampler y grammars para quienes quieran más control una vez dominados los fundamentos.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'Cómo funciona el modo local',
        content: [
          'El modo local es la vía gratuita y offline: instala la app, descarga un modelo y chatea sin enviar nada a un servidor.',
        ],
        items: [
          '**Selección de modelo.** Backyard AI incluye un conjunto curado de modelos de código abierto optimizados para chat de personajes — modelos base Llama y Mistral, variantes de Gemma y ajustes finos de roleplay de la comunidad como Fimbulvetr 10.7B, creado específicamente para la consistencia del personaje y la voz narrativa, no para tareas generales de asistente.',
          '**No requiere cuenta.** El chat local funciona sin registrarse, sin introducir datos de pago ni conectarse a Backyard Cloud. Todo se ejecuta y permanece en el equipo donde instalaste la app.',
          '**Explorar el Character Hub.** Elige una ficha de personaje ya creada en el Hub, o importa/escribe la tuya propia — el mismo modelo local impulsa a cada personaje, pero la ficha aporta personalidad, trasfondo y tono.',
          '**Controles avanzados cuando los necesitas.** Lorebooks (datos persistentes del mundo/personaje inyectados en el contexto), notas de autor (instrucciones de dirección), tamaño de ventana de contexto personalizado, ajustes de sampler (temperatura, top-p, penalización por repetición) y grammars (restricciones de salida estructurada) están todos disponibles en modo local sin necesitar Backyard Cloud.',
          '**Vinculación con un escritorio.** Quienes usan Backyard AI en un teléfono o equipo más ligero pueden vincularse a un escritorio más potente que ejecute la app completa, delegando la inferencia a esa máquina mientras la interfaz de chat se queda en el dispositivo más ligero.',
        ],
        note: 'Los tamaños de descarga de los modelos y los requisitos exactos de VRAM varían según el nivel de cuantización y la longitud de contexto elegidos. Verifica la lista actual de modelos y tamaños de archivo en backyard.ai antes de comprar hardware. Última verificación: 02/09/2026.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromisos: beneficios vs. limitaciones',
        columns: ['Beneficio', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Beneficio': 'Modo local gratuito, sin cuenta',
            'Qué significa en la práctica': 'Descarga la app y un modelo, luego chatea offline indefinidamente sin coste.',
            'Limitación / advertencia': 'Los modelos más grandes o recientes fuera de la lista local curada requieren Backyard Cloud.',
          },
          {
            'Beneficio': 'Character Hub',
            'Qué significa en la práctica': 'Miles de personajes IA ya hechos — no hace falta escribir una ficha para empezar a chatear.',
            'Limitación / advertencia': 'La calidad de los personajes enviados por la comunidad varía; la curación es desigual frente a un set seleccionado a mano.',
          },
          {
            'Beneficio': 'Configuración mínima',
            'Qué significa en la práctica': 'Un solo instalador, sin emparejar backend y frontend por separado como en SillyTavern.',
            'Limitación / advertencia': 'Menos transparencia sobre lo que ocurre por debajo, ya que la app es de código cerrado.',
          },
          {
            'Beneficio': 'Privacidad local',
            'Qué significa en la práctica': 'Las conversaciones en modo local se procesan en el dispositivo; nada se envía a Backyard Cloud salvo que lo actives.',
            'Limitación / advertencia': 'El código cerrado significa que la afirmación de privacidad no se puede verificar de forma independiente como con un frontend de código abierto.',
          },
          {
            'Beneficio': 'Escalado opcional en la nube',
            'Qué significa en la práctica': 'Backyard Cloud permite a quienes no tienen una GPU potente ejecutar modelos de la clase 70B (Midnight Rose 70B, Magnum 72B) desde cualquier dispositivo.',
            'Limitación / advertencia': 'Los niveles en la nube cuestan $7–$35/mes, y las conversaciones con modelos en la nube se procesan en los servidores de Backyard, no localmente.',
          },
          {
            'Beneficio': 'Controles avanzados disponibles localmente',
            'Qué significa en la práctica': 'Lorebooks, notas de autor, tamaño de contexto personalizado y ajustes de sampler funcionan sin suscripción.',
            'Limitación / advertencia': 'Sin chats grupales ni editor visual de flujos basado en nodos — las extensiones de SillyTavern van más allá para usuarios avanzados.',
          },
          {
            'Beneficio': 'Continuidad entre dispositivos (nube)',
            'Qué significa en la práctica': 'Backyard Cloud sincroniza los mismos personajes y chats entre escritorio, web, iOS y Android.',
            'Limitación / advertencia': 'Esta comodidad solo aplica a los niveles de pago en la nube, no al chat en modo local totalmente offline.',
          },
          {
            'Beneficio': 'Ajustes finos de roleplay de la comunidad',
            'Qué significa en la práctica': 'Fimbulvetr 10.7B y merges similares están ajustados específicamente para la consistencia de la voz del personaje, no para comportamiento genérico de asistente.',
            'Limitación / advertencia': 'Estos merges razonan de forma menos fiable que modelos frontier o de instrucciones generales más grandes.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Precios de Backyard Cloud',
        content: [
          'Backyard Cloud es opcional — el modo local cubre el chat gratis indefinidamente. Los niveles en la nube existen para quienes quieren modelos alojados más grandes o sincronización entre dispositivos sin tener una GPU potente.',
        ],
        columns: ['Plan', 'Precio', 'Qué incluye', 'Memoria de tokens / velocidad'],
        rows: [
          {
            'Plan': 'Free',
            'Precio': '$0/mes',
            'Qué incluye': '100 mensajes diarios en Fimbulvetr 10.7B, 25 mensajes gratuitos diarios en modelos de nivel Advanced/Pro, apps web + escritorio + iOS + Android',
            'Memoria de tokens / velocidad': 'Memoria de modelo de 4.096 tokens',
          },
          {
            'Plan': 'Standard',
            'Precio': '$7/mes',
            'Qué incluye': 'Mensajes ilimitados en Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3',
            'Memoria de tokens / velocidad': 'Memoria de 4.096 tokens / hasta 30 tok/s',
          },
          {
            'Plan': 'Advanced',
            'Precio': '$18/mes',
            'Qué incluye': 'Añade Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B; modelos Standard extendidos a 8k de contexto',
            'Memoria de tokens / velocidad': 'Memoria de 8.192 tokens / hasta 40 tok/s',
          },
          {
            'Plan': 'Pro',
            'Precio': '$35/mes',
            'Qué incluye': 'Añade Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B; parámetros expertos (grammars); canal de soporte privado',
            'Memoria de tokens / velocidad': 'Memoria de 6.000–30.000 tokens',
          },
        ],
        note: 'Backyard Cloud tiene un programa de referidos, no un programa de afiliados con comisión en efectivo: referir a un amigo le da un 50 % de descuento en su primer mes, y da al que refiere un crédito promocional en su cuenta (aproximadamente $17,50 por referido Pro, $9,00 por Advanced, $3,50 por Standard) — no un pago en efectivo. Precios verificados en backyard.ai el 02/09/2026; confirma los niveles actuales antes de suscribirte, ya que los precios de SaaS cambian.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI en Windows y Mac',
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'Windows',
            'Qué esperar': 'Instalador gratuito desde backyard.ai. La inferencia local usa tu GPU (NVIDIA CUDA) o CPU/RAM según el hardware. Character Hub completo y biblioteca de modelos locales disponibles.',
            'Nota importante': 'Una GPU gaming de 16 GB VRAM ejecuta cómodamente modelos de la clase Fimbulvetr 10.7B; las configuraciones solo con CPU funcionan pero responden más lento.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'App nativa para Apple Silicon. La memoria unificada permite ejecutar modelos comunitarios más grandes sin GPU discreta, de forma similar a cómo Ollama y LM Studio usan Apple Silicon.',
            'Nota importante': '36 GB+ de memoria unificada da margen para los merges de roleplay comunitarios más grandes; los Mac base de 8–16 GB están limitados a modelos más pequeños.',
          },
          {
            'Plataforma': 'Móvil y web (solo Backyard Cloud)',
            'Qué esperar': 'Las apps de iOS, Android y web se conectan a Backyard Cloud para inferencia alojada y sincronizan los mismos personajes e historiales de chat con el escritorio.',
            'Nota importante': 'El acceso móvil/web requiere un plan de Backyard Cloud (nivel Free incluido) — no hay modo de inferencia local offline en el teléfono.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. alternativas',
        columns: ['App', 'Ideal para', 'Nivel de configuración', 'Flexibilidad de modelos', 'Modelo de origen', 'Limitación clave'],
        rows: [
          {
            'App': 'Backyard AI',
            'Ideal para': 'Chat de personajes local sin fricción con Character Hub integrado',
            'Nivel de configuración': 'Mínimo (un instalador, descargar un modelo)',
            'Flexibilidad de modelos': 'Modelos abiertos curados + ajustes finos de roleplay de la comunidad',
            'Modelo de origen': 'App de código cerrado, uso local gratuito',
            'Limitación clave': 'Sin chats grupales; frontend de código cerrado; lista de modelos curada',
          },
          {
            'App': 'SillyTavern',
            'Ideal para': 'Máxima personalización, chats grupales, control de plantillas de prompt',
            'Nivel de configuración': 'Alto (backend + frontend separados)',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF vía backend koboldcpp/text-generation-webui/Ollama',
            'Modelo de origen': 'Totalmente de código abierto',
            'Limitación clave': 'La curva de aprendizaje más pronunciada de las tres; sin biblioteca de personajes integrada',
          },
          {
            'App': 'Loci AI',
            'Ideal para': 'Chat de propósito general en el dispositivo multiplataforma (no enfocado en roleplay)',
            'Nivel de configuración': 'Mínimo (descargar, chatear)',
            'Flexibilidad de modelos': 'Biblioteca curada (~10 modelos); no admite importar GGUF',
            'Modelo de origen': 'App de código cerrado, uso local gratuito',
            'Limitación clave': 'No está diseñada para funciones de personaje/roleplay como lorebooks o Character Hub',
          },
          {
            'App': 'RisuAI',
            'Ideal para': 'UI de roleplay de nivel inicial con configuración más ligera que SillyTavern',
            'Nivel de configuración': 'Medio (web o autoalojado, backend sigue siendo necesario)',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF vía un backend conectado',
            'Modelo de origen': 'Código abierto',
            'Limitación clave': 'Ecosistema de extensiones más pequeño que SillyTavern; sigue necesitando un backend separado',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Backyard AI',
        items: [
          '**Usuario nuevo en el roleplay local con IA.** Backyard AI elimina por completo la separación backend/frontend — un instalador, una app, acceso inmediato al Character Hub. Es la entrada más fácil al chat de personajes local que cubrimos en este sitio.',
          '**Usuario que quiere personajes ya hechos.** Explorar miles de personas prediseñadas en el Character Hub gana a escribir una ficha de personaje desde cero, sobre todo para la primera sesión.',
          '**Usuario sin GPU potente que aun así quiere modelos más grandes.** Los niveles Standard/Advanced/Pro de Backyard Cloud dan acceso a modelos de la clase 70B (Midnight Rose 70B, Magnum 72B) sin comprar hardware.',
          '**Usuario que quiere continuidad entre dispositivos.** Backyard Cloud sincroniza chats y personajes entre escritorio, web, iOS y Android — útil para continuar desde el móvil una conversación empezada en el PC.',
          '**Usuario que valora la simplicidad sobre la configuración profunda.** Lorebooks, notas de autor y ajustes de sampler están disponibles sin tener que aprender el ecosistema de extensiones de SillyTavern.',
          '**Usuario consciente de la privacidad y con presupuesto limitado.** El modo local es gratis, no necesita cuenta y mantiene las conversaciones en el dispositivo — un término medio razonable entre un servicio totalmente en la nube y una pila totalmente DIY de código abierto.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Backyard AI',
        items: [
          '**Usuario que quiere un frontend auditable y totalmente de código abierto.** El código de la app de Backyard AI es cerrado. Quienes necesiten verificar exactamente qué hace la app con sus datos, o quieran modificar el frontend, deberían usar [SillyTavern](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) o RisuAI en su lugar.',
          '**Usuario que necesita chats grupales o plantillas de prompt avanzadas.** El ecosistema de extensiones de SillyTavern cubre escenas grupales con múltiples personajes y control profundo de plantillas de prompt que Backyard AI no ofrece.',
          '**Usuario que quiere elección de modelo ilimitada en local.** La lista de modelos locales de Backyard AI es curada; no admite importar cualquier archivo GGUF como sí hace SillyTavern combinado con koboldcpp.',
          '**Usuario que no quiere pagar por modelos alojados más grandes.** Los modelos locales gratuitos están limitados al rango 8B–13B; alcanzar la calidad de Midnight Rose 70B o Magnum 72B requiere una suscripción de pago a Backyard Cloud.',
          '**Usuario que necesita el control más profundo de gestión de modelos, ajuste de cuantización o benchmarking.** Las herramientas de LLM local más técnicas ofrecen un control más fino sobre formatos de cuantización y parámetros de inferencia del que expone la interfaz simplificada de Backyard AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Backyard AI?',
            a: 'Sí, en modo local. La app de escritorio para Windows y Mac es gratis de descargar, no necesita cuenta ni tarjeta de crédito, y te permite chatear gratis y offline con modelos descargados localmente. Backyard Cloud, el nivel opcional alojado para modelos más grandes y acceso móvil/web, tiene un plan gratuito más tres niveles de pago: Standard ($7/mes), Advanced ($18/mes) y Pro ($35/mes).',
          },
          {
            q: '¿Cómo se llamaba antes Backyard AI?',
            a: 'Backyard AI se llamaba antes Faraday.dev. La app cambió de nombre a Backyard AI; el concepto subyacente de chat de personajes local-first es el mismo.',
          },
          {
            q: '¿Es Backyard AI de código abierto?',
            a: 'No. Backyard AI es de código cerrado, a diferencia de SillyTavern, RisuAI y Agnai, que publican su código de frontend para auditoría y modificación de la comunidad. El chat en modo local sigue ejecutándose totalmente en tu dispositivo, pero la app en sí no está abierta a inspección.',
          },
          {
            q: '¿Qué es el Character Hub?',
            a: 'El Character Hub es la biblioteca integrada de Backyard AI con miles de personajes y personas IA creados por usuarios. En lugar de escribir una ficha de personaje desde cero, la mayoría explora el Hub y elige uno que encaje con la conversación o historia que quiere, y luego chatea con él usando un modelo descargado localmente.',
          },
          {
            q: '¿Qué hardware necesito para ejecutar Backyard AI localmente?',
            a: 'Fimbulvetr 10.7B y modelos similares de roleplay de 8B–13B funcionan bien en una GPU gaming de 16 GB VRAM. Los modelos comunitarios más grandes disponibles en Backyard Cloud (Midnight Rose 70B, Magnum 72B) necesitan aproximadamente la misma clase de VRAM que cualquier modelo local de clase 70B — unos 42 GB VRAM en Q4_K_M — o 36 GB+ de memoria unificada en Apple Silicon; para uso local (no en la nube), quédate en la clase 8B–13B a menos que tu hardware alcance ese techo.',
          },
          {
            q: '¿Funciona Backyard AI sin conexión?',
            a: 'Sí, en modo local. Una vez descargados la app y un modelo, el chat funciona totalmente en el dispositivo sin necesitar conexión a internet. Backyard Cloud, las apps móviles y el acceso web sí requieren conexión a internet, ya que la inferencia ocurre en los servidores de Backyard.',
          },
          {
            q: '¿El programa de referidos de Backyard Cloud es un programa de afiliados de pago?',
            a: 'No. Referir a un amigo le da un 50 % de descuento en su primer mes, y da al que refiere un crédito promocional para su propia suscripción — aproximadamente $17,50 por un referido Pro, $9,00 por Advanced y $3,50 por Standard. Esto es crédito en cuenta, no un pago en efectivo.',
          },
          {
            q: '¿Cómo se compara Backyard AI con SillyTavern?',
            a: 'Backyard AI cambia personalización por simplicidad: un instalador, un Character Hub integrado y sin backend separado que configurar, pero es una app de código cerrado sin chats grupales. SillyTavern es totalmente de código abierto, admite chats grupales y personalización profunda de plantillas de prompt mediante extensiones, pero requiere emparejarla con un backend separado (koboldcpp, text-generation-webui u Ollama) y tiene una curva de aprendizaje más pronunciada. Consulta la comparación completa en [SillyTavern vs. Agnai vs. RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: '¿Puedo importar mis propias fichas de personaje o modelos en Backyard AI?',
            a: 'Puedes importar o escribir tus propias fichas de personaje para usar con cualquier modelo descargado localmente. La selección de modelos en modo local está limitada a la lista curada de Backyard AI (variantes de Llama, Mistral, Gemma y ajustes finos de roleplay como Fimbulvetr 10.7B) — no admite importar un archivo GGUF cualquiera como sí hace una configuración de koboldcpp más SillyTavern.',
          },
          {
            q: '¿Backyard AI admite interacción por voz?',
            a: 'Sí. El modo local incluye interacción por voz junto al chat de texto, además de ajustes avanzados como lorebooks, notas de autor, tamaño de contexto personalizado, ajustes de sampler y grammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Backyard AI se gana su lugar como el punto de entrada con menos fricción al chat de personajes IA local que cubrimos en este sitio. La combinación de una app de escritorio gratuita, sin requisito de cuenta y un Character Hub repleto de miles de personas ya hechas elimina las dos mayores barreras para probar el roleplay local: la configuración de backend y la escritura de fichas de personaje. Para quienes superen el techo del modelo local, los niveles de $7–$35/mes de Backyard Cloud escalan hasta modelos de clase 70B (Midnight Rose 70B, Magnum 72B) sin necesitar una mejora de hardware, y el programa de referidos paga crédito en cuenta en lugar de efectivo — bueno saberlo para ajustar expectativas. El compromiso es real: la app es de código cerrado, no ofrece chats grupales y limita la elección de modelo local a una lista curada, así que quienes quieran una pila auditable, totalmente abierta y profundamente personalizable deberían usar SillyTavern en su lugar. Para todos los demás que quieren tener el roleplay funcionando en minutos en lugar de horas, Backyard AI es una parada inicial sólida.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Backyard AI](https://backyard.ai) — resumen del producto, descargas, Character Hub, precios de Backyard Cloud.',
          '[Documentación de Backyard AI — Guía de inicio](https://backyard.ai/docs/start-guide/overview) — configuración, selección de modelos y resumen de funciones.',
          '[Modelos de Backyard AI en Hugging Face](https://huggingface.co/backyardai) — archivos de modelo GGUF distribuidos para usar con la app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI: el mejor frontend de roleplay](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — la alternativa de código abierto y más configurable; comparación completa de backend/frontend.',
          '[LLMs locales sin censura para escritura creativa: ética, legalidad y buenas prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — orientación a nivel de modelo aplicable a cualquier frontend de roleplay local, Backyard AI incluido.',
          '[Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — estructuras de prompt para la voz del personaje y la consistencia narrativa.',
          '[Mejores LLMs locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) — comparación a nivel de modelo para elegir qué ejecutar dentro de Backyard AI o cualquier frontend.',
          '[Análisis de Loci AI: IA offline para iPhone, Android, iPad, Mac y Windows](/es/power-local-llm/loci-ai-review-offline-local-ai) — una app de chat en el dispositivo de propósito general (no enfocada en roleplay) para comparar.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio completo de apps y herramientas para todas las plataformas.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-fr.webp',
    title: 'Avis sur Backyard AI (2026) : chat de personnages IA et roleplay local',
    seoTitle: 'Backyard AI 2026 : roleplay local et chat de personnages',
    intro:
      'Backyard AI ([backyard.ai](https://backyard.ai)), anciennement Faraday.dev, est une application de bureau gratuite et à code fermé pour Windows et Mac, conçue spécifiquement pour le chat de personnages IA et le roleplay. Elle exécute des modèles open source — Llama, Mistral, Gemma et des fine-tunes de roleplay communautaires comme Fimbulvetr 10.7B — entièrement sur votre propre machine, sans compte ni carte bancaire pour l\'usage local. Son Character Hub propose d\'emblée des milliers de personas créés par la communauté, et une offre payante optionnelle, Backyard Cloud, ajoute une inférence hébergée pour les lecteurs sans GPU local puissant. La question pratique n\'est pas de savoir si le roleplay local est possible — SillyTavern et RisuAI le prouvent déjà — mais si la simplicité "installer et jouer" de Backyard AI compense son modèle à code fermé et sa bibliothèque de personnages sélectionnée face aux frontends plus ouverts et configurables traités sur ce site.',
    metaDescription:
      'Avis Backyard AI 2026 : app de roleplay local gratuite pour Windows et Mac. Character Hub, Fimbulvetr 10.7B, tarifs Backyard Cloud (7 $/18 $/35 $), besoins matériels et comparaison avec Loci AI et SillyTavern.',
    twitterDescription:
      'Backyard AI 2026 : chat de personnages local gratuit pour Windows/Mac, Character Hub, offres Backyard Cloud optionnelles, comparaison avec SillyTavern, Loci AI et RisuAI.',
    audience:
      'Utilisateurs de roleplay et de chat de personnages IA hésitant entre l\'application locale sans friction de Backyard AI, ses offres cloud payantes et des frontends locaux plus configurables comme SillyTavern, Agnai ou RisuAI — configuration, besoins matériels, tarifs et compromis de confidentialité.',
    readTime: '9 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visiter le site officiel de Backyard AI →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['GPU gaming 16 Go VRAM', 'RTX 4090 24 Go', 'Apple Silicon 36 Go+ mémoire unifiée'],
    leadAnswerBlock:
      '**Backyard AI est le bon choix pour les lecteurs qui veulent du chat de personnages IA et du roleplay sur leur propre machine sans configurer de frontend.** L\'application de bureau gratuite pour Windows et Mac ne nécessite ni compte, ni carte bancaire, ni configuration manuelle d\'un backend comme koboldcpp ou text-generation-webui — installez-la, choisissez un personnage dans le Character Hub intégré ou un modèle de roleplay communautaire comme Fimbulvetr 10.7B, et commencez à discuter entièrement hors ligne. Les lecteurs sans GPU puissant peuvent payer Backyard Cloud (7-35 $/mois) pour exécuter des modèles hébergés plus grands. Ceux qui veulent un contrôle poussé des templates de prompt, des chats de groupe ou une pile entièrement open source devraient comparer avec [SillyTavern](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) ou [Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai).',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      fr: {
        question: 'Dois-je utiliser Backyard AI pour le roleplay local et le chat de personnages ?',
        answer:
          'Utilisez Backyard AI si vous voulez une application de bureau gratuite, sans configuration, pour le chat de personnages IA qui exécute des modèles open source entièrement sur votre propre machine Windows ou Mac, avec un Character Hub intégré de personas créés par les utilisateurs. Passez votre chemin si vous avez besoin d\'une pile open source entièrement auditable, d\'une personnalisation poussée des templates de prompt ou de fonctions de chat de groupe — SillyTavern offre les trois, au prix d\'une configuration plus difficile.',
        bullets: [
          'Application de bureau gratuite pour Windows et Mac ; ni compte ni carte bancaire requis en mode local.',
          'Exécute Llama, Mistral, Gemma et des fine-tunes de roleplay comme Fimbulvetr 10.7B entièrement hors ligne.',
          'Character Hub : des milliers de personnages et personas IA créés par les utilisateurs, intégrés.',
          'Offres Backyard Cloud optionnelles (7 $/18 $/35 $ par mois) ajoutant une inférence hébergée pour des modèles plus grands sans GPU local.',
          'Application à code fermé — contrairement à SillyTavern, le code du frontend n\'est pas ouvert à l\'audit ou à la modification.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Backyard AI', anchor: 'what-is-backyard-ai' },
      { label: 'Comment fonctionne le mode local', anchor: 'how-local-mode-works' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Tarifs Backyard Cloud', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI sur Windows et Mac', anchor: 'platforms' },
      { label: 'Backyard AI vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Backyard AI', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Backyard AI', anchor: 'who-should-not-use' },
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
          'Backyard AI ([backyard.ai](https://backyard.ai)), anciennement Faraday.dev, est une application de bureau gratuite et à code fermé pour Windows et Mac dédiée au chat de personnages IA et au roleplay.',
          'Le mode local est gratuit, ne nécessite pas de compte, et fonctionne entièrement hors ligne une fois un modèle téléchargé — les modèles incluent Llama, Mistral, Gemma et des fine-tunes de roleplay communautaires comme Fimbulvetr 10.7B.',
          'Le Character Hub est la fonctionnalité phare : des milliers de personnages IA prédéfinis et créés par la communauté, prêts à discuter immédiatement.',
          'Les offres Backyard Cloud optionnelles (Free/7 $/18 $/35 $ par mois) ajoutent une inférence hébergée sur des modèles plus grands — Midnight Rose 70B et Magnum 72B dans l\'offre Pro — pour les lecteurs sans GPU local puissant, plus un accès mobile et web synchronisé avec le bureau.',
          'Repère matériel : Fimbulvetr 10.7B et les merges de roleplay similaires 8B-13B tournent confortablement sur un GPU gaming à 16 Go VRAM ; les plus gros modèles communautaires demandent 24 Go+ VRAM ou 36 Go+ de mémoire unifiée sur Apple Silicon.',
          'Backyard AI échange la personnalisation contre la simplicité : pas de chats de groupe, pas de code frontend open source, et une liste de modèles locaux sélectionnée (non illimitée), comparé à SillyTavern.',
          'Le programme de parrainage verse un crédit de compte pour les parrainages, pas une commission en espèces — à ne pas confondre avec un programme d\'affiliation classique.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Qu\'est-ce que Backyard AI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI est une application de bureau gratuite et à code fermé pour Windows et Mac qui exécute des LLM open source localement pour le chat de personnages IA et le roleplay, avec une offre cloud payante optionnelle pour l\'inférence hébergée.' },
          { type: 'plain-terms', text: 'Imaginez une alternative à Ollama centrée sur le roleplay, associée à une interface de chat, préchargée avec des milliers de personnages tout faits — vous évitez la séparation backend/frontend qu\'exige SillyTavern.' },
        ],
        content: [
          'Backyard AI est une application de bureau, anciennement nommée Faraday.dev, développée par une petite équipe indépendante autour d\'un objectif : rendre le chat de personnages IA et le roleplay local accessibles aux lecteurs qui ne veulent pas assembler eux-mêmes un backend (koboldcpp, text-generation-webui, Ollama) et un frontend séparé (SillyTavern, Agnai, RisuAI).',
          'L\'application est gratuite et à code fermé — contrairement à SillyTavern, RisuAI ou Agnai, le code du frontend n\'est pas publié pour audit ou modification par la communauté. En mode local, elle ne nécessite ni compte, ni carte bancaire, ni connexion internet une fois un modèle téléchargé.',
          'Sa fonctionnalité phare est le Character Hub : une bibliothèque intégrée de milliers de personnages et personas IA créés par les utilisateurs. Plutôt que d\'écrire une fiche de personnage à partir de zéro (le flux habituel de SillyTavern), la plupart des lecteurs commencent par parcourir le Hub et choisir un personnage qui correspond déjà au type de conversation ou d\'histoire recherché.',
          'Le mode local prend en charge l\'interaction vocale en plus du chat texte, et les réglages avancés exposent les lorebooks, les notes d\'auteur, une taille de contexte personnalisée, des réglages d\'échantillonnage et des grammars pour les lecteurs qui veulent plus de contrôle une fois les bases maîtrisées.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'Comment fonctionne le mode local',
        content: [
          'Le mode local est la voie gratuite et hors ligne : installez l\'application, téléchargez un modèle, et discutez sans rien envoyer à un serveur.',
        ],
        items: [
          '**Sélection de modèle.** Backyard AI est livré avec un ensemble sélectionné de modèles open source optimisés pour le chat de personnages — modèles de base Llama et Mistral, variantes Gemma, et fine-tunes de roleplay communautaires comme Fimbulvetr 10.7B, conçu spécifiquement pour la cohérence du personnage et la voix narrative plutôt que pour des tâches d\'assistant généraliste.',
          '**Aucun compte requis.** Le chat local fonctionne sans inscription, sans informations de paiement, sans connexion à Backyard Cloud. Tout s\'exécute et reste sur la machine où l\'application est installée.',
          '**Navigation dans le Character Hub.** Choisissez une fiche de personnage préconçue dans le Hub, ou importez/écrivez la vôtre — le même modèle local anime chaque personnage, mais la fiche apporte personnalité, background et ton.',
          '**Contrôles avancés quand vous en avez besoin.** Lorebooks (faits persistants sur le monde/personnage injectés dans le contexte), notes d\'auteur (instructions de direction), taille de fenêtre de contexte personnalisée, réglages d\'échantillonnage (température, top-p, pénalité de répétition) et grammars (contraintes de sortie structurée) sont tous disponibles en mode local sans nécessiter Backyard Cloud.',
          '**Liaison avec un poste de bureau.** Les lecteurs utilisant Backyard AI sur un téléphone ou une machine plus légère peuvent se lier à un poste de bureau plus puissant exécutant l\'application complète, en déléguant l\'inférence à cette machine tout en gardant l\'interface de chat sur l\'appareil léger.',
        ],
        note: 'Les tailles de téléchargement des modèles et les besoins exacts en VRAM varient selon le niveau de quantification et la longueur de contexte choisis. Vérifiez la liste actuelle des modèles et les tailles de fichiers sur backyard.ai avant tout achat de matériel. Dernière vérification : 02/09/2026.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / précaution'],
        rows: [
          {
            'Avantage': 'Mode local gratuit, sans compte',
            'Ce que cela signifie en pratique': 'Téléchargez l\'application et un modèle, puis discutez hors ligne indéfiniment sans frais.',
            'Limite / précaution': 'Les modèles plus grands ou récents en dehors de la liste locale sélectionnée nécessitent Backyard Cloud.',
          },
          {
            'Avantage': 'Character Hub',
            'Ce que cela signifie en pratique': 'Des milliers de personnages IA prêts à l\'emploi — pas besoin d\'écrire une fiche pour commencer à discuter.',
            'Limite / précaution': 'La qualité des personnages soumis par la communauté varie ; la sélection est inégale comparée à un ensemble choisi à la main.',
          },
          {
            'Avantage': 'Configuration minimale',
            'Ce que cela signifie en pratique': 'Un seul installeur, pas de couplage backend/frontend séparé à configurer, contrairement à SillyTavern.',
            'Limite / précaution': 'Moins de transparence sur ce qui tourne sous le capot puisque l\'application est à code fermé.',
          },
          {
            'Avantage': 'Confidentialité locale',
            'Ce que cela signifie en pratique': 'Les conversations en mode local sont traitées sur l\'appareil ; rien n\'est envoyé à Backyard Cloud sauf si vous l\'activez.',
            'Limite / précaution': 'Le code fermé signifie que l\'affirmation de confidentialité ne peut pas être vérifiée indépendamment comme avec un frontend open source.',
          },
          {
            'Avantage': 'Montée en puissance cloud optionnelle',
            'Ce que cela signifie en pratique': 'Backyard Cloud permet aux lecteurs sans GPU puissant d\'exécuter des modèles de classe 70B (Midnight Rose 70B, Magnum 72B) depuis n\'importe quel appareil.',
            'Limite / précaution': 'Les offres cloud coûtent 7-35 $/mois, et les conversations avec les modèles cloud sont traitées sur les serveurs de Backyard, pas localement.',
          },
          {
            'Avantage': 'Contrôles avancés disponibles en local',
            'Ce que cela signifie en pratique': 'Lorebooks, notes d\'auteur, taille de contexte personnalisée et réglages d\'échantillonnage fonctionnent sans abonnement.',
            'Limite / précaution': 'Pas de chats de groupe ni d\'éditeur de workflow visuel à base de nœuds — les extensions de SillyTavern vont plus loin pour les utilisateurs avancés.',
          },
          {
            'Avantage': 'Continuité entre appareils (cloud)',
            'Ce que cela signifie en pratique': 'Backyard Cloud synchronise les mêmes personnages et discussions entre bureau, web, iOS et Android.',
            'Limite / précaution': 'Cette commodité ne s\'applique qu\'aux offres cloud payantes, pas au chat en mode local entièrement hors ligne.',
          },
          {
            'Avantage': 'Fine-tunes de roleplay communautaires',
            'Ce que cela signifie en pratique': 'Fimbulvetr 10.7B et les merges similaires sont réglés spécifiquement pour la cohérence de la voix du personnage, pas pour un comportement d\'assistant générique.',
            'Limite / précaution': 'Ces merges raisonnent moins fiablement que des modèles frontier ou d\'instruction généralistes plus grands.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Tarifs Backyard Cloud',
        content: [
          'Backyard Cloud est optionnel — le mode local couvre le chat gratuitement, indéfiniment. Les offres cloud existent pour les lecteurs qui veulent des modèles hébergés plus grands ou une synchronisation entre appareils sans posséder de GPU puissant.',
        ],
        columns: ['Offre', 'Prix', 'Ce que vous obtenez', 'Mémoire de tokens / vitesse'],
        rows: [
          {
            'Offre': 'Free',
            'Prix': '0 $/mois',
            'Ce que vous obtenez': '100 messages quotidiens sur Fimbulvetr 10.7B, 25 messages gratuits quotidiens sur les modèles de niveau Advanced/Pro, apps web + bureau + iOS + Android',
            'Mémoire de tokens / vitesse': 'Mémoire de modèle de 4 096 tokens',
          },
          {
            'Offre': 'Standard',
            'Prix': '7 $/mois',
            'Ce que vous obtenez': 'Messages illimités sur Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3',
            'Mémoire de tokens / vitesse': 'Mémoire de 4 096 tokens / jusqu\'à 30 tok/s',
          },
          {
            'Offre': 'Advanced',
            'Prix': '18 $/mois',
            'Ce que vous obtenez': 'Ajoute Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B ; modèles Standard étendus à 8k de contexte',
            'Mémoire de tokens / vitesse': 'Mémoire de 8 192 tokens / jusqu\'à 40 tok/s',
          },
          {
            'Offre': 'Pro',
            'Prix': '35 $/mois',
            'Ce que vous obtenez': 'Ajoute Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B ; paramètres experts (grammars) ; canal de support privé',
            'Mémoire de tokens / vitesse': 'Mémoire de 6 000-30 000 tokens',
          },
        ],
        note: 'Backyard Cloud propose un programme de parrainage, pas un programme d\'affiliation à commission en espèces : parrainer un ami lui donne 50 % de réduction sur son premier mois, et donne au parrain un crédit promotionnel sur son propre compte (environ 17,50 $ par parrainage Pro, 9,00 $ pour Advanced, 3,50 $ pour Standard) — pas un versement en espèces. Tarifs vérifiés sur backyard.ai le 02/09/2026 ; confirmez les offres actuelles avant de vous abonner, les prix SaaS évoluant.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI sur Windows et Mac',
        columns: ['Plateforme', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme': 'Windows',
            'À quoi s\'attendre': 'Installeur gratuit depuis backyard.ai. L\'inférence locale utilise votre GPU (NVIDIA CUDA) ou CPU/RAM selon le matériel. Character Hub complet et bibliothèque de modèles locaux disponibles.',
            'Remarque importante': 'Un GPU gaming à 16 Go VRAM exécute confortablement des modèles de classe Fimbulvetr 10.7B ; les configurations CPU uniquement fonctionnent mais répondent plus lentement.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Application native pour Apple Silicon. La mémoire unifiée permet d\'exécuter des modèles communautaires plus grands sans GPU dédié, comme le font Ollama et LM Studio sur Apple Silicon.',
            'Remarque importante': '36 Go+ de mémoire unifiée offre de la marge pour les plus gros merges de roleplay communautaires ; les Mac de base à 8-16 Go sont limités aux modèles plus petits.',
          },
          {
            'Plateforme': 'Mobile et web (Backyard Cloud uniquement)',
            'À quoi s\'attendre': 'Les apps iOS, Android et web se connectent à Backyard Cloud pour l\'inférence hébergée et synchronisent les mêmes personnages et historiques de chat avec le bureau.',
            'Remarque importante': 'L\'accès mobile/web nécessite une offre Backyard Cloud (niveau Free inclus) — il n\'existe pas de mode d\'inférence locale hors ligne sur téléphone.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. alternatives',
        columns: ['App', 'Idéal pour', 'Niveau de configuration', 'Flexibilité des modèles', 'Modèle source', 'Limite principale'],
        rows: [
          {
            'App': 'Backyard AI',
            'Idéal pour': 'Chat de personnages local sans friction avec Character Hub intégré',
            'Niveau de configuration': 'Minimal (un installeur, télécharger un modèle)',
            'Flexibilité des modèles': 'Modèles ouverts sélectionnés + fine-tunes de roleplay communautaires',
            'Modèle source': 'Application à code fermé, usage local gratuit',
            'Limite principale': 'Pas de chats de groupe ; frontend à code fermé ; liste de modèles sélectionnée',
          },
          {
            'App': 'SillyTavern',
            'Idéal pour': 'Personnalisation maximale, chats de groupe, contrôle des templates de prompt',
            'Niveau de configuration': 'Élevé (backend + frontend séparés)',
            'Flexibilité des modèles': 'Tout fichier GGUF via backend koboldcpp/text-generation-webui/Ollama',
            'Modèle source': 'Entièrement open source',
            'Limite principale': 'Courbe d\'apprentissage la plus raide des trois ; pas de bibliothèque de personnages intégrée',
          },
          {
            'App': 'Loci AI',
            'Idéal pour': 'Chat généraliste sur l\'appareil multiplateforme (non orienté roleplay)',
            'Niveau de configuration': 'Minimal (télécharger, discuter)',
            'Flexibilité des modèles': 'Bibliothèque sélectionnée (~10 modèles) ; pas d\'import GGUF',
            'Modèle source': 'Application à code fermé, usage local gratuit',
            'Limite principale': 'Non conçue pour les fonctions personnage/roleplay comme les lorebooks ou le Character Hub',
          },
          {
            'App': 'RisuAI',
            'Idéal pour': 'UI de roleplay pour débutants, configuration plus légère que SillyTavern',
            'Niveau de configuration': 'Moyen (web ou auto-hébergé, backend toujours requis)',
            'Flexibilité des modèles': 'Tout fichier GGUF via un backend connecté',
            'Modèle source': 'Open source',
            'Limite principale': 'Écosystème d\'extensions plus restreint que SillyTavern ; nécessite toujours un backend séparé',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Backyard AI',
        items: [
          '**Lecteur débutant en roleplay IA local.** Backyard AI supprime totalement la séparation backend/frontend — un installeur, une application, accès immédiat au Character Hub. C\'est l\'entrée la plus simple dans le chat de personnages local traité sur ce site.',
          '**Lecteur qui veut des personnages prêts à l\'emploi.** Parcourir des milliers de personas préconçus dans le Character Hub bat l\'écriture d\'une fiche de personnage à partir de zéro, surtout pour une première session.',
          '**Lecteur sans GPU puissant qui veut quand même des modèles plus grands.** Les offres Standard/Advanced/Pro de Backyard Cloud donnent accès à des modèles de classe 70B (Midnight Rose 70B, Magnum 72B) sans acheter de matériel.',
          '**Lecteur qui veut une continuité entre appareils.** Backyard Cloud synchronise discussions et personnages entre bureau, web, iOS et Android — utile pour poursuivre depuis un téléphone une conversation commencée sur PC.',
          '**Lecteur qui privilégie la simplicité à la configuration poussée.** Lorebooks, notes d\'auteur et réglages d\'échantillonnage sont disponibles sans avoir à apprendre l\'écosystème d\'extensions de SillyTavern.',
          '**Lecteur soucieux de sa confidentialité et de son budget.** Le mode local est gratuit, ne nécessite pas de compte, et garde les conversations sur l\'appareil — un compromis raisonnable entre un service entièrement cloud et une pile open source entièrement DIY.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Backyard AI',
        items: [
          '**Lecteur qui veut un frontend auditable et entièrement open source.** Le code de l\'application Backyard AI est fermé. Les lecteurs qui doivent vérifier exactement ce que l\'application fait de leurs données, ou qui veulent modifier le frontend, devraient plutôt utiliser [SillyTavern](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) ou RisuAI.',
          '**Lecteur ayant besoin de chats de groupe ou de templates de prompt avancés.** L\'écosystème d\'extensions de SillyTavern couvre les scènes de groupe multi-personnages et le contrôle poussé des templates de prompt que Backyard AI n\'offre pas.',
          '**Lecteur qui veut un choix de modèle illimité en local.** La liste de modèles locaux de Backyard AI est sélectionnée ; elle ne permet pas d\'importer n\'importe quel fichier GGUF comme le fait SillyTavern couplé à koboldcpp.',
          '**Lecteur qui ne veut pas payer pour des modèles hébergés plus grands.** Les modèles locaux gratuits sont plafonnés autour de la classe 8B-13B ; atteindre la qualité de Midnight Rose 70B ou Magnum 72B nécessite un abonnement Backyard Cloud payant.',
          '**Lecteur ayant besoin du contrôle le plus poussé sur la gestion des modèles, le réglage de la quantification ou le benchmarking.** Des outils LLM locaux plus techniques offrent un contrôle plus fin sur les formats de quantification et les paramètres d\'inférence que ce que l\'interface simplifiée de Backyard AI expose.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Backyard AI est-elle gratuite ?',
            a: 'Oui, en mode local. L\'application de bureau pour Windows et Mac est gratuite à télécharger, ne nécessite ni compte ni carte bancaire, et permet de discuter gratuitement hors ligne avec des modèles téléchargés localement. Backyard Cloud, l\'offre hébergée optionnelle pour des modèles plus grands et l\'accès mobile/web, propose un plan gratuit plus trois offres payantes : Standard (7 $/mois), Advanced (18 $/mois) et Pro (35 $/mois).',
          },
          {
            q: 'Comment s\'appelait Backyard AI avant ?',
            a: 'Backyard AI s\'appelait auparavant Faraday.dev. L\'application a été rebaptisée Backyard AI ; le concept sous-jacent de chat de personnages local-first reste le même.',
          },
          {
            q: 'Backyard AI est-elle open source ?',
            a: 'Non. Backyard AI est à code fermé, contrairement à SillyTavern, RisuAI et Agnai, qui publient leur code frontend pour audit et modification par la communauté. Le chat en mode local s\'exécute toujours entièrement sur votre appareil, mais l\'application elle-même n\'est pas ouverte à l\'inspection.',
          },
          {
            q: 'Qu\'est-ce que le Character Hub ?',
            a: 'Le Character Hub est la bibliothèque intégrée de Backyard AI contenant des milliers de personnages et personas IA créés par les utilisateurs. Plutôt que d\'écrire une fiche de personnage à partir de zéro, la plupart des lecteurs parcourent le Hub et choisissent un personnage adapté à la conversation ou à l\'histoire recherchée, puis discutent avec via un modèle téléchargé localement.',
          },
          {
            q: 'De quel matériel ai-je besoin pour exécuter Backyard AI en local ?',
            a: 'Fimbulvetr 10.7B et les modèles de roleplay similaires 8B-13B tournent confortablement sur un GPU gaming à 16 Go VRAM. Les plus gros modèles communautaires disponibles dans Backyard Cloud (Midnight Rose 70B, Magnum 72B) demandent à peu près la même classe de VRAM que tout modèle local de classe 70B — environ 42 Go VRAM en Q4_K_M — ou 36 Go+ de mémoire unifiée sur Apple Silicon ; pour un usage local (hors cloud), restez sur la classe 8B-13B sauf si votre matériel atteint ce plafond.',
          },
          {
            q: 'Backyard AI fonctionne-t-elle hors ligne ?',
            a: 'Oui, en mode local. Une fois l\'application et un modèle téléchargés, le chat s\'exécute entièrement sur l\'appareil, sans connexion internet requise. Backyard Cloud, les apps mobiles et l\'accès web nécessitent une connexion internet puisque l\'inférence a lieu sur les serveurs de Backyard.',
          },
          {
            q: 'Le programme de parrainage de Backyard Cloud est-il un programme d\'affiliation payant ?',
            a: 'Non. Parrainer un ami lui donne 50 % de réduction sur son premier mois, et donne au parrain un crédit promotionnel sur son propre abonnement — environ 17,50 $ pour un parrainage Pro, 9,00 $ pour Advanced et 3,50 $ pour Standard. Il s\'agit d\'un crédit de compte, pas d\'un versement en espèces.',
          },
          {
            q: 'Comment Backyard AI se compare-t-elle à SillyTavern ?',
            a: 'Backyard AI échange la personnalisation contre la simplicité : un installeur, un Character Hub intégré, aucun backend séparé à configurer, mais une application à code fermé sans chats de groupe. SillyTavern est entièrement open source, prend en charge les chats de groupe et une personnalisation poussée des templates de prompt via des extensions, mais nécessite de l\'associer à un backend séparé (koboldcpp, text-generation-webui ou Ollama) et a une courbe d\'apprentissage plus raide. Voir la comparaison complète dans [SillyTavern vs. Agnai vs. RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: 'Puis-je importer mes propres fiches de personnage ou modèles dans Backyard AI ?',
            a: 'Vous pouvez importer ou écrire vos propres fiches de personnage pour les utiliser avec tout modèle téléchargé localement. La sélection de modèles en mode local est limitée à la liste sélectionnée de Backyard AI (variantes Llama, Mistral, Gemma, et fine-tunes de roleplay comme Fimbulvetr 10.7B) — l\'import de n\'importe quel fichier GGUF n\'est pas pris en charge, contrairement à une configuration koboldcpp plus SillyTavern.',
          },
          {
            q: 'Backyard AI prend-elle en charge l\'interaction vocale ?',
            a: 'Oui. Le mode local inclut l\'interaction vocale en plus du chat texte, ainsi que des réglages avancés comme les lorebooks, les notes d\'auteur, une taille de contexte personnalisée, les réglages d\'échantillonnage et les grammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Backyard AI mérite sa place comme le point d\'entrée le plus simple vers le chat de personnages IA local traité sur ce site. La combinaison d\'une application de bureau gratuite, sans obligation de compte, et d\'un Character Hub garni de milliers de personas prêts à l\'emploi supprime les deux plus grands obstacles à l\'essai du roleplay local : la configuration du backend et l\'écriture de fiches de personnage. Pour les lecteurs qui dépassent le plafond des modèles locaux, les offres à 7-35 $/mois de Backyard Cloud montent en puissance jusqu\'à des modèles de classe 70B (Midnight Rose 70B, Magnum 72B) sans nécessiter de mise à niveau matérielle, et le programme de parrainage verse un crédit de compte plutôt qu\'en espèces — bon à savoir pour ajuster ses attentes. Le compromis est réel : l\'application est à code fermé, n\'offre pas de chats de groupe, et limite le choix de modèle local à une liste sélectionnée, donc les lecteurs voulant une pile auditable, entièrement ouverte et profondément personnalisable devraient plutôt utiliser SillyTavern. Pour tous les autres qui veulent faire fonctionner le roleplay en quelques minutes plutôt qu\'en quelques heures, Backyard AI est une excellente première étape.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel de Backyard AI](https://backyard.ai) — présentation du produit, téléchargements, Character Hub, tarifs Backyard Cloud.',
          '[Documentation Backyard AI — Guide de démarrage](https://backyard.ai/docs/start-guide/overview) — configuration, sélection de modèles et présentation des fonctionnalités.',
          '[Modèles Backyard AI sur Hugging Face](https://huggingface.co/backyardai) — fichiers de modèles GGUF distribués pour usage avec l\'application.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI : le meilleur frontend de roleplay](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — l\'alternative open source, plus configurable ; comparaison complète backend/frontend.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique, légalité et bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — recommandations au niveau du modèle, applicables à tout frontend de roleplay local, Backyard AI compris.',
          '[Prompts LLM local pour auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — structures de prompt pour la voix des personnages et la cohérence narrative.',
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) — comparaison au niveau du modèle pour choisir quoi exécuter dans Backyard AI ou tout autre frontend.',
          '[Avis Loci AI : IA hors ligne pour iPhone, Android, iPad, Mac et Windows](/fr/power-local-llm/loci-ai-review-offline-local-ai) — une application de chat sur l\'appareil généraliste (non orientée roleplay) à comparer.',
          '[Répertoire de logiciels LLM local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire complet d\'applications et d\'outils pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-ja.webp',
    title: 'Backyard AIレビュー(2026):ローカルAIキャラクターチャットとロールプレイ',
    seoTitle: 'Backyard AI 2026レビュー:ローカルロールプレイとキャラクターチャット',
    intro:
      'Backyard AI(backyard.ai、旧Faraday.dev)は、AIキャラクターチャットとロールプレイのために作られた、WindowsとMac向けの無料・クローズドソースのデスクトップアプリです。Llama、Mistral、Gemma、そしてFimbulvetr 10.7Bのようなコミュニティ製ロールプレイ用ファインチューンモデルを、アカウントもクレジットカードも不要でご自身のハードウェア上で完全に実行できます。Character Hub(キャラクターハブ)には数千のユーザー作成ペルソナが最初から用意されており、有料オプションのBackyard Cloudでは強力なローカルGPUを持たない読者向けにホスト型推論を提供します。実際の論点はローカルロールプレイが可能かどうかではありません — SillyTavernやRisuAIがすでに実証済みです。論点は、Backyard AIのクリックだけで使える手軽さが、クローズドソースモデルと厳選されたキャラクターライブラリという代償に見合うか、このサイトで扱うよりオープンで設定自由度の高いフロントエンドと比べてどうか、という点です。',
    metaDescription:
      'Backyard AIレビュー2026:WindowsとMac向け無料ローカルロールプレイアプリ。Character Hub、Fimbulvetr 10.7B、Backyard Cloud料金(7/18/35ドル)、必要ハードウェア、Loci AIやSillyTavernとの比較。',
    twitterDescription:
      'Backyard AIレビュー2026:Windows/Mac向け無料ローカルキャラクターチャット、Character Hub、有料Backyard Cloudプラン、SillyTavern・Loci AI・RisuAIとの比較。',
    audience:
      'Backyard AIの手軽なローカルアプリ、有料クラウドプラン、SillyTavern・Agnai・RisuAIのような自由度の高いローカルフロントエンドの間で迷っているロールプレイ・AIキャラクターチャットユーザー向け — セットアップ、必要ハードウェア、料金、プライバシーのトレードオフを解説します。',
    readTime: '9分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Backyard AI公式サイトを見る →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['16GB VRAMのゲーミングGPU', 'RTX 4090 24GB', 'Apple Silicon 36GB以上のユニファイドメモリ'],
    leadAnswerBlock:
      '**Backyard AIは、フロントエンドを設定せずに自分のマシンでAIキャラクターチャットとロールプレイをしたい読者に最適です。** WindowsとMac向けの無料デスクトップアプリは、アカウントもクレジットカードも、koboldcppやtext-generation-webuiのようなバックエンドの手動設定も不要です。インストールして、内蔵のCharacter HubからキャラクターやFimbulvetr 10.7Bのようなコミュニティ製ロールプレイモデルを選べば、完全オフラインでチャットを開始できます。強力なGPUを持たない読者は、Backyard Cloud(月額7〜35ドル)を利用してより大きなホスト型モデルを実行できます。深いプロンプトテンプレート制御、グループチャット、完全オープンソースのスタックを求める読者は、[SillyTavern](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)や[Loci AI](/ja/power-local-llm/loci-ai-review-offline-local-ai)と比較してください。',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      ja: {
        question: 'ローカルロールプレイとキャラクターチャットにはBackyard AIを使うべきですか?',
        answer:
          '設定不要の無料デスクトップアプリで、Windows・Macマシン上で完全にオープンソースモデルを動かし、ユーザー作成ペルソナのCharacter Hubを内蔵したAIキャラクターチャットが欲しいならBackyard AIを使ってください。オープンソースで完全に監査可能なスタック、深いプロンプトテンプレートのカスタマイズ、グループチャット機能が必要なら見送りましょう — SillyTavernはこれら3つすべてを、より難しいセットアップと引き換えに提供します。',
        bullets: [
          'WindowsとMac向けの無料デスクトップアプリ。ローカルモードではアカウントもクレジットカードも不要。',
          'Llama、Mistral、Gemma、Fimbulvetr 10.7Bのようなロールプレイ用ファインチューンを完全オフラインで実行。',
          'Character Hub:数千のユーザー作成AIキャラクターとペルソナを内蔵。',
          'オプションのBackyard Cloudプラン(月額7/18/35ドル)でローカルGPUなしでも大きなモデルのホスト型推論を利用可能。',
          'クローズドソースアプリ — SillyTavernと異なり、フロントエンドのコード自体は監査や改変のために公開されていない。',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Backyard AIとは', anchor: 'what-is-backyard-ai' },
      { label: 'ローカルモードの仕組み', anchor: 'how-local-mode-works' },
      { label: 'トレードオフ:メリットと制限', anchor: 'tradeoffs' },
      { label: 'Backyard Cloud料金', anchor: 'backyard-cloud-pricing' },
      { label: 'WindowsとMacでのBackyard AI', anchor: 'platforms' },
      { label: 'Backyard AI vs. 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Backyard AIを使うべき人', anchor: 'who-should-use' },
      { label: 'Backyard AIを使うべきでない人', anchor: 'who-should-not-use' },
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
          'Backyard AI(backyard.ai、旧Faraday.dev)は、AIキャラクターチャットとロールプレイに特化した、WindowsとMac向けの無料・クローズドソースのデスクトップアプリです。',
          'ローカルモードは無料でアカウント不要、モデルをダウンロードすれば完全オフラインで動作します — モデルにはLlama、Mistral、Gemma、Fimbulvetr 10.7Bのようなコミュニティ製ロールプレイファインチューンが含まれます。',
          'Character Hubが目玉機能です:数千のユーザー作成AIキャラクターとペルソナがすぐに使える形で用意されています。',
          'オプションのBackyard Cloudプラン(無料/月額7/18/35ドル)は、より大きなモデル(Proプランでは Midnight Rose 70BやMagnum 72B)のホスト型推論を、強力なローカルGPUを持たない読者に提供し、さらにデスクトップと同期するモバイル・Webアクセスも加わります。',
          'ハードウェアの目安:Fimbulvetr 10.7Bや同様の8B〜13Bロールプレイマージは16GB VRAMのゲーミングGPUで快適に動作します。最大規模のコミュニティモデルには24GB以上のVRAM、またはApple Siliconで36GB以上のユニファイドメモリが必要です。',
          'Backyard AIはカスタマイズ性をシンプルさと引き換えにしています:SillyTavernと比べ、グループチャットなし、オープンソースのフロントエンドコードなし、厳選(無制限ではない)ローカルモデルリストという制約があります。',
          '紹介プログラムは現金報酬ではなくアカウントへの請求クレジットを支払います — 従来のアフィリエイトプログラムと混同しないでください。',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Backyard AIとは',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AIは、AIキャラクターチャットとロールプレイのためにオープンソースLLMをローカルで実行する、WindowsとMac向けの無料・クローズドソースのデスクトップアプリで、ホスト型推論のための有料オプションのクラウドプランがあります。' },
          { type: 'plain-terms', text: 'ロールプレイに特化したOllamaのようなものにチャットインターフェースを組み合わせ、数千の既製キャラクターをあらかじめ用意したものと考えてください — SillyTavernが要求するバックエンド/フロントエンドの分離を避けられます。' },
        ],
        content: [
          'Backyard AIは、旧称Faraday.devというデスクトップアプリケーションで、小規模な独立チームが1つの目標を掲げて開発しました。それは、バックエンド(koboldcpp、text-generation-webui、Ollama)と別のフロントエンド(SillyTavern、Agnai、RisuAI)を自分で組み合わせたくない読者にも、ローカルAIキャラクターチャットとロールプレイを身近なものにすることです。',
          'このアプリは無料でクローズドソースです — SillyTavern、RisuAI、Agnaiと異なり、フロントエンドのコードはコミュニティによる監査や改変のために公開されていません。ローカルモードでは、モデルをダウンロードすればアカウントもクレジットカードもインターネット接続も不要です。',
          '中心機能はCharacter Hubです:数千のユーザー作成AIキャラクターとペルソナを収録した内蔵ライブラリです。キャラクターカードをゼロから書く(SillyTavernの標準的なワークフロー)代わりに、多くの読者はまずHubを閲覧し、求める会話やストーリーにすでに合うキャラクターを選びます。',
          'ローカルモードはテキストチャットに加えて音声インタラクションもサポートし、高度な設定にはLorebook(ロアブック)、Author\'s Note(作者ノート)、カスタムコンテキストサイズ、サンプラー設定、Grammarsが用意されており、基本操作に慣れた読者はより細かい制御が可能です。',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'ローカルモードの仕組み',
        content: [
          'ローカルモードは無料のオフライン経路です:アプリをインストールし、モデルをダウンロードすれば、サーバーに何も送信せずにチャットできます。',
        ],
        items: [
          '**モデル選択。** Backyard AIには、キャラクターチャット向けに最適化された厳選のオープンソースモデルが同梱されています — Llama・Mistralのベースモデル、Gemmaのバリエーション、そしてFimbulvetr 10.7Bのようなコミュニティ製ロールプレイファインチューンです。Fimbulvetr 10.7Bは、汎用アシスタントタスクではなくキャラクターの一貫性と物語の声のために特別に構築されています。',
          '**アカウント不要。** ローカルチャットは登録も支払い情報の入力もBackyard Cloudへの接続も不要です。すべてアプリをインストールしたマシン上で実行され、そこにとどまります。',
          '**Character Hubの閲覧。** Hubから既製のキャラクターカードを選ぶか、自分のカードをインポート・作成できます — どのキャラクターも同じローカルモデルが動かしていますが、性格・背景・トーンはキャラクターカードが与えます。',
          '**必要なときの高度な制御。** コンテキストに注入される永続的な世界・キャラクター情報であるLorebook、方向付け指示であるAuthor\'s Note、カスタムコンテキストウィンドウサイズ、サンプラー設定(温度、top-p、繰り返しペナルティ)、構造化出力の制約であるGrammarsは、Backyard Cloudなしでもすべてローカルモードで利用できます。',
          '**デスクトップへのテザリング。** スマートフォンや軽量マシンでBackyard AIを使う読者は、フルアプリを実行するより強力なデスクトップにテザリングして、チャットインターフェースは軽量デバイスに残したまま推論をそちらのマシンにオフロードできます。',
        ],
        note: 'モデルのダウンロードサイズと正確なVRAM要件は、選択した量子化レベルとコンテキスト長によって異なります。ハードウェアを購入する前に、backyard.aiで最新のモデルリストとファイルサイズを確認してください。最終確認日:2026年9月2日。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制限',
        columns: ['メリット', '実際の使用での意味', '制限・注意点'],
        rows: [
          {
            'メリット': '無料のローカルモード、アカウント不要',
            '実際の使用での意味': 'アプリとモデルをダウンロードすれば、無期限に無料でオフラインチャットできる。',
            '制限・注意点': '厳選ローカルリストを超える大型・新しいモデルはBackyard Cloudが必要。',
          },
          {
            'メリット': 'Character Hub',
            '実際の使用での意味': '数千の既製AIキャラクター — チャットを始めるためにキャラクターカードを書く必要がない。',
            '制限・注意点': 'コミュニティ投稿キャラクターの質にはばらつきがあり、厳選セットに比べてキュレーションは不均一。',
          },
          {
            'メリット': '最小限のセットアップ',
            '実際の使用での意味': 'インストーラー1つで、SillyTavernのようなバックエンド/フロントエンドの個別ペアリングが不要。',
            '制限・注意点': 'アプリがクローズドソースのため、内部で何が動いているかの透明性が低い。',
          },
          {
            'メリット': 'ローカルプライバシー',
            '実際の使用での意味': 'ローカルモードの会話はデバイス上で処理され、オプトインしない限りBackyard Cloudには何も送信されない。',
            '制限・注意点': 'クローズドソースコードのため、オープンソースフロントエンドのようにプライバシー主張を独立に検証できない。',
          },
          {
            'メリット': 'オプションのクラウドスケーリング',
            '実際の使用での意味': 'Backyard Cloudにより、強力なGPUを持たない読者もどのデバイスからでも70Bクラスのモデル(Midnight Rose 70B、Magnum 72B)を実行できる。',
            '制限・注意点': 'クラウドプランは月額7〜35ドルで、クラウドモデルとの会話はローカルではなくBackyardのサーバーで処理される。',
          },
          {
            'メリット': 'ローカルで利用できる高度な制御',
            '実際の使用での意味': 'Lorebook、Author\'s Note、カスタムコンテキストサイズ、サンプラー設定はサブスクリプションなしで動作する。',
            '制限・注意点': 'グループチャットも視覚的なノードベースワークフローエディタもない — パワーユーザー向けにはSillyTavernの拡張機能の方が踏み込んでいる。',
          },
          {
            'メリット': 'デバイス間の継続性(クラウド)',
            '実際の使用での意味': 'Backyard Cloudはデスクトップ、Web、iOS、Android間で同じキャラクターとチャットを同期する。',
            '制限・注意点': 'この利便性は有料クラウドプランのみに適用され、完全オフラインで動くローカルモードのチャットには適用されない。',
          },
          {
            'メリット': 'コミュニティ製ロールプレイファインチューン',
            '実際の使用での意味': 'Fimbulvetr 10.7Bや同様のマージは、汎用アシスタント動作ではなくキャラクターの声の一貫性のために特別に調整されている。',
            '制限・注意点': 'これらのマージは、より大きなフロンティアモデルや汎用instructモデルほど推論の信頼性は高くない。',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Backyard Cloud料金',
        content: [
          'Backyard Cloudはオプションです — ローカルモードは無期限に無料でチャットをカバーします。クラウドプランは、強力なGPUを持たずにより大きなホスト型モデルやデバイス間同期を求める読者向けに存在します。',
        ],
        columns: ['プラン', '価格', '内容', 'トークンメモリ / 速度'],
        rows: [
          {
            'プラン': 'Free',
            '価格': '0ドル/月',
            '内容': 'Fimbulvetr 10.7Bで1日100メッセージ、Advanced/Proクラスモデルで1日25メッセージ無料、Web + デスクトップ + iOS + Androidアプリ',
            'トークンメモリ / 速度': '4,096トークンのモデルメモリ',
          },
          {
            'プラン': 'Standard',
            '価格': '7ドル/月',
            '内容': 'Fimbulvetr 10.7B、Llama 3.1 Instruct 8B、Mythomax-Kimiko 13B、Llama 3 Stheno V3.3で無制限メッセージ',
            'トークンメモリ / 速度': '4,096トークンメモリ / 最大30トークン/秒',
          },
          {
            'プラン': 'Advanced',
            '価格': '18ドル/月',
            '内容': 'Chunky Lemon Cookie 11B、Llama 3 Jamet MK.V Blackroot 8Bを追加。Standardモデルは8kコンテキストに拡張',
            'トークンメモリ / 速度': '8,192トークンメモリ / 最大40トークン/秒',
          },
          {
            'プラン': 'Pro',
            '価格': '35ドル/月',
            '内容': 'Midnight Rose 70B、Magnum 72B、Psyonic-Cetacean Ultra 20Bを追加。エキスパートパラメータ(Grammars)、専用サポートチャンネル',
            'トークンメモリ / 速度': '6,000〜30,000トークンメモリ',
          },
        ],
        note: 'Backyard Cloudは現金報酬のアフィリエイトプログラムではなく、紹介プログラムを運営しています:友人を紹介すると相手は初月50%割引になり、紹介者本人には自分のアカウントに適用されるプロモーションの請求クレジット(Pro紹介で約17.50ドル、Advancedで約9.00ドル、Standardで約3.50ドル)が付与されます — 現金の支払いではありません。料金は2026年9月2日時点でbackyard.aiにて確認済み。SaaS料金は変動するため、契約前に最新プランを確認してください。',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'WindowsとMacでのBackyard AI',
        columns: ['プラットフォーム', '想定される内容', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '想定される内容': 'backyard.aiから無料インストーラーを入手。ローカル推論はハードウェアに応じてGPU(NVIDIA CUDA)またはCPU/RAMを使用。Character Hubとローカルモデルライブラリをフル利用可能。',
            '重要な注意点': '16GB VRAMのゲーミングGPUならFimbulvetr 10.7Bクラスのモデルを快適に実行できる。CPUのみの構成でも動くが応答は遅くなる。',
          },
          {
            'プラットフォーム': 'Mac',
            '想定される内容': 'Apple Silicon向けのネイティブアプリ。ユニファイドメモリにより、OllamaやLM StudioがApple Siliconを活用するのと同様に、専用GPUなしでより大きなコミュニティモデルを実行できる。',
            '重要な注意点': '36GB以上のユニファイドメモリがあれば、より大きなコミュニティ製ロールプレイマージにも余裕がある。8〜16GBのベースMacはより小さなモデルに限定される。',
          },
          {
            'プラットフォーム': 'モバイル・Web(Backyard Cloudのみ)',
            '想定される内容': 'iOS、Android、Webアプリはホスト型推論のためにBackyard Cloudに接続し、同じキャラクターとチャット履歴をデスクトップと同期する。',
            '重要な注意点': 'モバイル・WebアクセスにはBackyard Cloudプラン(Freeプラン含む)が必要 — スマートフォンにオフラインのローカル推論モードはない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. 代替アプリ',
        columns: ['アプリ', '最適な用途', 'セットアップの手間', 'モデルの柔軟性', 'ソースモデル', '主な制限'],
        rows: [
          {
            'アプリ': 'Backyard AI',
            '最適な用途': '内蔵Character Hubを使った手軽なローカルキャラクターチャット',
            'セットアップの手間': '最小限(インストーラー1つ、モデルをダウンロード)',
            'モデルの柔軟性': '厳選されたオープンモデル + コミュニティ製ロールプレイファインチューン',
            'ソースモデル': 'クローズドソースアプリ、ローカル利用は無料',
            '主な制限': 'グループチャットなし、クローズドソースのフロントエンド、厳選されたモデルリスト',
          },
          {
            'アプリ': 'SillyTavern',
            '最適な用途': '最大限のカスタマイズ、グループチャット、プロンプトテンプレート制御',
            'セットアップの手間': '高い(バックエンドとフロントエンドを別々に設定)',
            'モデルの柔軟性': 'koboldcpp/text-generation-webui/Ollamaバックエンド経由で任意のGGUF',
            'ソースモデル': '完全オープンソース',
            '主な制限': '3つの中で最も学習曲線が急、内蔵キャラクターライブラリなし',
          },
          {
            'アプリ': 'Loci AI',
            '最適な用途': 'クロスプラットフォームの汎用オンデバイスチャット(ロールプレイ特化ではない)',
            'セットアップの手間': '最小限(ダウンロードしてチャット)',
            'モデルの柔軟性': '厳選ライブラリ(約10モデル)、GGUFインポート不可',
            'ソースモデル': 'クローズドソースアプリ、ローカル利用は無料',
            '主な制限': 'LorebookやCharacter Hubのようなキャラクター/ロールプレイ機能向けには作られていない',
          },
          {
            'アプリ': 'RisuAI',
            '最適な用途': 'SillyTavernより軽いセットアップの入門向けロールプレイUI',
            'セットアップの手間': '中程度(Webまたはセルフホスト、バックエンドは依然必要)',
            'モデルの柔軟性': '接続したバックエンド経由で任意のGGUF',
            'ソースモデル': 'オープンソース',
            '主な制限': 'SillyTavernより拡張機能エコシステムが小さく、依然として別途バックエンドが必要',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Backyard AIを使うべき人',
        items: [
          '**ローカルAIロールプレイを初めて試す読者。** Backyard AIはバックエンド/フロントエンドの分離を完全に取り除きます — インストーラー1つ、アプリ1つで、Character Hubへ即座にアクセスできます。当サイトで扱うローカルキャラクターチャットの中で最も簡単な入口です。',
          '**既製キャラクターが欲しい読者。** Character Hubで数千の既製ペルソナを閲覧するほうが、特に最初のセッションではキャラクターカードをゼロから書くより手軽です。',
          '**強力なGPUがなくても大きなモデルを使いたい読者。** Backyard CloudのStandard/Advanced/Proプランは、ハードウェアを購入せずに70Bクラスのモデル(Midnight Rose 70B、Magnum 72B)へのアクセスを提供します。',
          '**デバイス間の継続性を求める読者。** Backyard Cloudはデスクトップ、Web、iOS、Android間でチャットとキャラクターを同期します — PCで始めた会話をスマートフォンで続けるのに便利です。',
          '**深い設定よりシンプルさを重視する読者。** LorebookやAuthor\'s Note、サンプラー設定は、SillyTavernの拡張機能エコシステムを学ぶ必要なく利用できます。',
          '**予算重視でプライバシーを意識する読者。** ローカルモードは無料でアカウント不要、会話はデバイス上にとどまります — 完全なクラウドサービスと完全なDIYオープンソーススタックの中間として妥当な選択肢です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Backyard AIを使うべきでない人',
        items: [
          '**監査可能で完全オープンソースのフロントエンドを求める読者。** Backyard AIのアプリコードはクローズドソースです。アプリが自分のデータで何をしているか正確に確認する必要がある読者、またはフロントエンドを改変したい読者は、代わりに[SillyTavern](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)やRisuAIを使うべきです。',
          '**グループチャットや高度なプロンプトテンプレートが必要な読者。** SillyTavernの拡張機能エコシステムは、Backyard AIが提供しない複数キャラクターのグループシーンや深いプロンプトテンプレート制御をカバーしています。',
          '**ローカルで無制限のモデル選択を求める読者。** Backyard AIのローカルモデルリストは厳選されており、SillyTavernとkoboldcppの組み合わせのように任意のGGUFファイルをインポートすることはできません。',
          '**より大きなホスト型モデルにお金を払いたくない読者。** 無料のローカルモデルは8B〜13Bクラス程度が上限であり、Midnight Rose 70BやMagnum 72Bの品質に到達するには有料のBackyard Cloudサブスクリプションが必要です。',
          '**モデル管理、量子化調整、ベンチマークについて最も深い制御を必要とする読者。** より技術的なローカルLLMツールは、Backyard AIの簡素化されたインターフェースが公開する範囲より、量子化フォーマットや推論パラメータをきめ細かく制御できます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Backyard AIは無料ですか?',
            a: 'はい、ローカルモードは無料です。WindowsとMac向けのデスクトップアプリは無料でダウンロードでき、アカウントもクレジットカードも不要で、ローカルにダウンロードしたモデルとオフラインで無料でチャットできます。より大きなモデルとモバイル・Webアクセスのためのオプションのホスト型プランであるBackyard Cloudには、無料プランに加えて3つの有料プランがあります:Standard(月額7ドル)、Advanced(月額18ドル)、Pro(月額35ドル)。',
          },
          {
            q: 'Backyard AIの旧名は何ですか?',
            a: 'Backyard AIは以前Faraday.devという名前でした。アプリはBackyard AIにリブランドされましたが、根底にあるローカルファーストのキャラクターチャットというコンセプトは同じです。',
          },
          {
            q: 'Backyard AIはオープンソースですか?',
            a: 'いいえ。Backyard AIはクローズドソースです。フロントエンドコードをコミュニティによる監査や改変のために公開しているSillyTavern、RisuAI、Agnaiとは異なります。ローカルモードのチャット自体は依然として完全にデバイス上で実行されますが、アプリ自体は検証のために公開されていません。',
          },
          {
            q: 'Character Hubとは何ですか?',
            a: 'Character Hubは、数千のユーザー作成AIキャラクターとペルソナを収録したBackyard AIの内蔵ライブラリです。キャラクターカードをゼロから書く代わりに、多くの読者はHubを閲覧して求める会話やストーリーに合うキャラクターを選び、ローカルにダウンロードしたモデルを使ってチャットします。',
          },
          {
            q: 'Backyard AIをローカルで実行するにはどのようなハードウェアが必要ですか?',
            a: 'Fimbulvetr 10.7Bや同様の8B〜13Bのロールプレイ用チューニングモデルは、16GB VRAMのゲーミングGPUで快適に動作します。Backyard Cloudで利用できる最大規模のコミュニティモデル(Midnight Rose 70B、Magnum 72B)は、他の70Bクラスのローカルモデルとほぼ同じVRAMクラス — Q4_K_Mでおよそ42GB VRAM — またはApple Siliconで36GB以上のユニファイドメモリを必要とします。ローカル(非クラウド)利用では、ハードウェアがこの上限に達しない限り8B〜13Bクラスにとどめてください。',
          },
          {
            q: 'Backyard AIはオフラインで動作しますか?',
            a: 'はい、ローカルモードでは動作します。アプリとモデルをダウンロードすれば、インターネット接続なしで完全にデバイス上でチャットが実行されます。Backyard Cloud、モバイルアプリ、Webアクセスは、推論がBackyardのサーバーで行われるためインターネット接続が必要です。',
          },
          {
            q: 'Backyard Cloudの紹介プログラムは有料アフィリエイトプログラムですか?',
            a: 'いいえ。友人を紹介すると相手は初月50%割引になり、紹介者本人には自分のサブスクリプションに適用されるプロモーションの請求クレジットが付与されます — Pro紹介で約17.50ドル、Advancedで9.00ドル、Standardで3.50ドル程度です。これはアカウントクレジットであり、現金の支払いではありません。',
          },
          {
            q: 'Backyard AIはSillyTavernと比べてどうですか?',
            a: 'Backyard AIはカスタマイズ性をシンプルさと引き換えにしています:インストーラー1つ、内蔵Character Hub、設定すべき別のバックエンドなし、しかしクローズドソースアプリでグループチャットはありません。SillyTavernは完全オープンソースで、拡張機能によるグループチャットと深いプロンプトテンプレートのカスタマイズをサポートしますが、別のバックエンド(koboldcpp、text-generation-webui、Ollama)と組み合わせる必要があり、学習曲線もより急です。完全な比較は[SillyTavern vs. Agnai vs. RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)を参照してください。',
          },
          {
            q: '自分のキャラクターカードやモデルをBackyard AIにインポートできますか?',
            a: 'ローカルにダウンロードした任意のモデルで使用する独自のキャラクターカードをインポートまたは作成できます。ローカルモードでのモデル選択はBackyard AIの厳選リスト(Llama・Mistral・Gemmaのバリエーション、Fimbulvetr 10.7Bのようなロールプレイファインチューン)に限られます — koboldcppとSillyTavernの組み合わせのように任意のGGUFファイルをインポートすることはサポートされていません。',
          },
          {
            q: 'Backyard AIは音声インタラクションに対応していますか?',
            a: 'はい。ローカルモードにはテキストチャットに加えて音声インタラクションが含まれ、Lorebook、Author\'s Note、カスタムコンテキストサイズ、サンプラー設定、Grammarsといった高度な設定もあります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Backyard AIは、当サイトで扱うローカルAIキャラクターチャットの中で最も摩擦の少ない入口としての地位を確立しています。無料のデスクトップアプリ、アカウント不要、数千の既製ペルソナを揃えたCharacter Hubの組み合わせは、ローカルロールプレイを試す上での2大障壁 — バックエンドの設定とキャラクターカードの作成 — を取り除きます。ローカルモデルの上限を超えたい読者には、Backyard Cloudの月額7〜35ドルのプランがハードウェアのアップグレードなしで70Bクラスのモデル(Midnight Rose 70B、Magnum 72B)までスケールアップでき、紹介プログラムは現金ではなくアカウントクレジットを支払う点も期待値を正しく設定するために知っておく価値があります。トレードオフは実在します:アプリはクローズドソースで、グループチャットはなく、ローカルモデルの選択肢は厳選リストに限られるため、監査可能で完全にオープン、深くカスタマイズ可能なスタックを求める読者は代わりにSillyTavernを使うべきです。それ以外の、数時間ではなく数分でロールプレイを動かしたい人にとって、Backyard AIは強力な最初の選択肢です。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Backyard AI公式サイト](https://backyard.ai) — 製品概要、ダウンロード、Character Hub、Backyard Cloud料金。',
          '[Backyard AIドキュメント — スタートガイド](https://backyard.ai/docs/start-guide/overview) — セットアップ、モデル選択、機能概要。',
          '[Hugging Face上のBackyard AIモデル](https://huggingface.co/backyardai) — アプリで使用するために配布されているGGUFモデルファイル。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI:最適なロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — オープンソースでより設定自由度の高い代替アプリ。バックエンド/フロントエンドの完全比較。',
          '[検閲なしのローカルLLMによる創作:倫理・合法性・ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — Backyard AIを含む、あらゆるローカルロールプレイフロントエンドに適用されるモデルレベルのガイダンス。',
          '[小説家のためのローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — キャラクターの声と物語の一貫性のためのプロンプト構造。',
          '[2026年版 創作向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026) — Backyard AIや他のフロントエンドで何を実行するか選ぶためのモデル側の比較。',
          '[Loci AIレビュー:iPhone、Android、iPad、Mac、Windows向けオフラインAI](/ja/power-local-llm/loci-ai-review-offline-local-ai) — 比較対象となる汎用(ロールプレイ特化でない)オンデバイスチャットアプリ。',
          '[2026年版 ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory-2026) — 全プラットフォーム対応の包括的なアプリ・ツールディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-zh.webp',
    title: 'Backyard AI评测(2026):本地AI角色聊天与角色扮演',
    seoTitle: 'Backyard AI 2026评测:本地角色扮演与角色聊天',
    intro:
      'Backyard AI(backyard.ai,前身为Faraday.dev)是一款免费、闭源的Windows和Mac桌面应用,专为AI角色聊天和角色扮演打造。它可以在你自己的硬件上完全本地运行开源模型——Llama、Mistral、Gemma,以及Fimbulvetr 10.7B这类社区调优的角色扮演模型——本地使用无需账号、无需信用卡。其Character Hub开箱即用地提供数千个用户创建的角色供你聊天,而可选的付费Backyard Cloud则为没有强力本地GPU的用户提供托管推理。真正的问题不在于本地角色扮演是否可行——SillyTavern和RisuAI早已证明这一点——而在于Backyard AI这种即装即用的简便性,相对于其闭源模型和精选角色库,是否值得,尤其是与本站介绍的更开放、更可配置的前端相比。',
    metaDescription:
      'Backyard AI 2026评测:适用于Windows和Mac的免费本地角色扮演应用。Character Hub、Fimbulvetr 10.7B、Backyard Cloud定价($7/$18/$35)、硬件需求,以及与Loci AI、SillyTavern的对比。',
    twitterDescription:
      'Backyard AI 2026评测:Windows/Mac免费本地角色聊天,Character Hub,可选Backyard Cloud订阅,以及与SillyTavern、Loci AI、RisuAI的对比。',
    audience:
      '在Backyard AI低门槛本地应用、付费云端方案与SillyTavern、Agnai、RisuAI等更可配置的本地前端之间做选择的角色扮演与AI角色聊天用户——涵盖安装配置、硬件需求、定价与隐私权衡。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '访问Backyard AI官网 →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['16GB显存游戏GPU', 'RTX 4090 24GB', 'Apple Silicon 36GB以上统一内存'],
    leadAnswerBlock:
      '**如果你想在自己的设备上进行AI角色聊天和角色扮演,又不想配置前端,Backyard AI是首选。** 这款适用于Windows和Mac的免费桌面应用不需要账号、不需要信用卡,也不需要手动配置koboldcpp或text-generation-webui这类后端——安装后,从内置Character Hub中选一个角色,或选择Fimbulvetr 10.7B这类社区角色扮演模型,即可完全离线开始聊天。没有强力GPU的用户可以付费使用Backyard Cloud(每月7-35美元)运行更大的托管模型。如果你想要更深入的提示词模板控制、群聊功能或完全开源的技术栈,应该对比[SillyTavern](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)或[Loci AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)。',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      zh: {
        question: '本地角色扮演和角色聊天应该用Backyard AI吗?',
        answer:
          '如果你想要一款免费、无需配置的桌面应用,能在自己的Windows或Mac设备上完全运行开源模型进行AI角色聊天,并内置用户创建角色的Character Hub,那就用Backyard AI。如果你需要开源、完全可审计的技术栈、深度提示词模板定制或群聊功能,则不要选它——SillyTavern能提供这三项,但配置难度更高。',
        bullets: [
          '适用于Windows和Mac的免费桌面应用;本地模式无需账号或信用卡。',
          '完全离线运行Llama、Mistral、Gemma以及Fimbulvetr 10.7B等角色扮演调优模型。',
          'Character Hub:内置数千个用户创建的AI角色和人设。',
          '可选的Backyard Cloud订阅(每月7/18/35美元)为没有本地GPU的用户提供更大模型的托管推理。',
          '闭源应用——与SillyTavern不同,前端代码本身不开放供审计或修改。',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Backyard AI是什么', anchor: 'what-is-backyard-ai' },
      { label: '本地模式如何运作', anchor: 'how-local-mode-works' },
      { label: '权衡:优势与局限', anchor: 'tradeoffs' },
      { label: 'Backyard Cloud定价', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI在Windows和Mac上', anchor: 'platforms' },
      { label: 'Backyard AI与其他替代方案', anchor: 'vs-alternatives' },
      { label: '谁适合使用Backyard AI', anchor: 'who-should-use' },
      { label: '谁不适合使用Backyard AI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'Backyard AI(backyard.ai,前身Faraday.dev)是一款专注于AI角色聊天和角色扮演的免费闭源Windows/Mac桌面应用。',
          '本地模式免费、无需账号,下载模型后完全离线运行——模型包括Llama、Mistral、Gemma,以及Fimbulvetr 10.7B等社区角色扮演调优模型。',
          'Character Hub是其标志性功能:数千个预制的、用户创建的AI角色,可立即开始聊天。',
          '可选的Backyard Cloud订阅(免费版/每月7/18/35美元)为没有强力本地GPU的用户提供更大模型的托管推理——Pro订阅可用Midnight Rose 70B和Magnum 72B——并提供与桌面同步的移动端和网页访问。',
          '硬件建议:Fimbulvetr 10.7B及类似的8B-13B角色扮演融合模型在16GB显存的游戏GPU上运行流畅;最大的社区模型需要24GB以上显存,或Apple Silicon上36GB以上的统一内存。',
          'Backyard AI以简便性换取定制性:与SillyTavern相比,没有群聊、前端代码不开源,本地模型列表是精选(非无限)的。',
          '推荐计划支付的是账户账单抵扣,而非现金佣金——不要与传统的联盟营销计划混淆。',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Backyard AI是什么',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI是一款免费、闭源的Windows和Mac桌面应用,在本地运行开源LLM进行AI角色聊天和角色扮演,并提供可选的付费云端方案用于托管推理。' },
          { type: 'plain-terms', text: '可以把它想象成专注角色扮演的Ollama加聊天界面,预先打包了数千个现成角色——省去了SillyTavern要求的后端/前端拆分。' },
        ],
        content: [
          'Backyard AI是一款桌面应用程序,前身名为Faraday.dev,由一个小型独立团队开发,目标只有一个:让不想自己搭建后端(koboldcpp、text-generation-webui、Ollama)和独立前端(SillyTavern、Agnai、RisuAI)的用户,也能轻松使用本地AI角色聊天和角色扮演。',
          '该应用免费且闭源——与SillyTavern、RisuAI或Agnai不同,其前端代码并未公开供社区审计或修改。在本地模式下,它不需要账号、不需要信用卡,模型下载完成后也不需要互联网连接。',
          '其核心功能是Character Hub:一个内置的、收录数千个用户创建AI角色和人设的库。大多数用户不是从零开始编写角色卡(SillyTavern的常规流程),而是先浏览Hub,选择一个已经符合自己想要的对话或故事类型的角色。',
          '本地模式在文本聊天之外还支持语音交互,高级设置提供Lorebook(设定集)、Author\'s Note(作者注释)、自定义上下文大小、采样器设置和Grammars,供熟悉基础操作后想要更多控制权的用户使用。',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: '本地模式如何运作',
        content: [
          '本地模式是免费的离线路径:安装应用、下载模型,即可聊天而无需向任何服务器发送数据。',
        ],
        items: [
          '**模型选择。** Backyard AI内置一组针对角色聊天优化的精选开源模型——Llama和Mistral基础模型、Gemma变体,以及Fimbulvetr 10.7B等社区角色扮演调优模型,后者专为角色一致性和叙事声线而构建,而非通用助手任务。',
          '**无需账号。** 本地聊天无需注册、无需输入支付信息、也无需连接Backyard Cloud。一切都在安装应用的设备上运行并留存于此。',
          '**浏览Character Hub。** 从Hub中选择一个预制角色卡,或导入/编写自己的角色卡——每个角色都由同一个本地模型驱动,但角色卡赋予其性格、背景故事和语气。',
          '**按需使用的高级控制。** Lorebook(注入上下文的持久世界/角色设定)、Author\'s Note(引导指令)、自定义上下文窗口大小、采样器设置(温度、top-p、重复惩罚)以及Grammars(结构化输出约束),在本地模式下均无需Backyard Cloud即可使用。',
          '**连接桌面设备。** 在手机或性能较弱设备上使用Backyard AI的用户,可以连接到运行完整应用的更强大桌面设备,把推理任务转移到该设备上,同时聊天界面仍保留在较轻的设备上。',
        ],
        note: '模型下载大小和确切的显存需求因所选量化级别和上下文长度而异。购买硬件前,请在backyard.ai上核实当前的模型列表和文件大小。最后核实日期:2026年9月2日。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优势与局限',
        columns: ['优势', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优势': '免费本地模式,无需账号',
            '实际使用中的意义': '下载应用和模型后,即可无限期免费离线聊天。',
            '局限/注意事项': '超出精选本地列表的更大或更新模型需要Backyard Cloud。',
          },
          {
            '优势': 'Character Hub',
            '实际使用中的意义': '数千个现成AI角色——无需编写角色卡即可开始聊天。',
            '局限/注意事项': '社区提交角色的质量参差不齐;相较手工精选的角色集,整理程度不均。',
          },
          {
            '优势': '极简配置',
            '实际使用中的意义': '一个安装包,无需像SillyTavern那样单独配置后端/前端配对。',
            '局限/注意事项': '由于应用闭源,底层运行机制的透明度较低。',
          },
          {
            '优势': '本地隐私',
            '实际使用中的意义': '本地模式对话在设备上处理;除非你主动选择,否则不会发送给Backyard Cloud。',
            '局限/注意事项': '闭源代码意味着无法像开源前端那样独立验证隐私声明。',
          },
          {
            '优势': '可选的云端扩展',
            '实际使用中的意义': 'Backyard Cloud让没有强力GPU的用户也能从任意设备运行70B级模型(Midnight Rose 70B、Magnum 72B)。',
            '局限/注意事项': '云端订阅费用为每月7-35美元,且云端模型的对话在Backyard的服务器上处理,而非本地。',
          },
          {
            '优势': '本地即可使用的高级控制',
            '实际使用中的意义': 'Lorebook、Author\'s Note、自定义上下文大小和采样器设置无需订阅即可使用。',
            '局限/注意事项': '没有群聊,也没有可视化节点工作流编辑器——SillyTavern的扩展功能为高级用户提供更多可能。',
          },
          {
            '优势': '跨设备连续性(云端)',
            '实际使用中的意义': 'Backyard Cloud在桌面、网页、iOS和Android之间同步相同的角色和聊天记录。',
            '局限/注意事项': '这种便利仅适用于付费云端订阅,不适用于完全离线的本地模式聊天。',
          },
          {
            '优势': '社区角色扮演调优模型',
            '实际使用中的意义': 'Fimbulvetr 10.7B及类似融合模型专门针对角色声线一致性调优,而非通用助手行为。',
            '局限/注意事项': '这些融合模型的推理可靠性不及更大的前沿模型或通用指令模型。',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Backyard Cloud定价',
        content: [
          'Backyard Cloud是可选项——本地模式可无限期免费覆盖聊天需求。云端订阅面向那些想要更大托管模型或跨设备同步、又没有强力GPU的用户。',
        ],
        columns: ['订阅', '价格', '包含内容', '记忆Token / 速度'],
        rows: [
          {
            '订阅': 'Free',
            '价格': '$0/月',
            '包含内容': 'Fimbulvetr 10.7B每日100条消息,Advanced/Pro级模型每日25条免费消息,网页+桌面+iOS+Android应用',
            '记忆Token / 速度': '4,096 token模型记忆',
          },
          {
            '订阅': 'Standard',
            '价格': '$7/月',
            '包含内容': 'Fimbulvetr 10.7B、Llama 3.1 Instruct 8B、Mythomax-Kimiko 13B、Llama 3 Stheno V3.3无限消息',
            '记忆Token / 速度': '4,096 token记忆 / 最高30 tok/s',
          },
          {
            '订阅': 'Advanced',
            '价格': '$18/月',
            '包含内容': '新增Chunky Lemon Cookie 11B、Llama 3 Jamet MK.V Blackroot 8B;Standard模型上下文扩展至8k',
            '记忆Token / 速度': '8,192 token记忆 / 最高40 tok/s',
          },
          {
            '订阅': 'Pro',
            '价格': '$35/月',
            '包含内容': '新增Midnight Rose 70B、Magnum 72B、Psyonic-Cetacean Ultra 20B;专家参数(Grammars);专属支持渠道',
            '记忆Token / 速度': '6,000-30,000 token记忆',
          },
        ],
        note: 'Backyard Cloud运营的是推荐计划,而非现金佣金的联盟营销计划:推荐朋友可让对方首月享5折优惠,推荐人则获得应用于自己账户的促销账单抵扣(Pro级约17.50美元,Advanced约9.00美元,Standard约3.50美元)——不是现金支付。价格已于2026年9月2日在backyard.ai核实;订阅前请确认当前订阅档次,因为SaaS定价会变动。',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI在Windows和Mac上',
        columns: ['平台', '预期体验', '重要提示'],
        rows: [
          {
            '平台': 'Windows',
            '预期体验': '从backyard.ai免费下载安装包。本地推理根据硬件使用GPU(NVIDIA CUDA)或CPU/RAM。可使用完整的Character Hub和本地模型库。',
            '重要提示': '16GB显存的游戏GPU可流畅运行Fimbulvetr 10.7B级模型;纯CPU配置也能运行,但响应更慢。',
          },
          {
            '平台': 'Mac',
            '预期体验': '为Apple Silicon打造的原生应用。统一内存让更大的社区模型无需独立GPU即可运行,与Ollama和LM Studio利用Apple Silicon的方式类似。',
            '重要提示': '36GB以上统一内存可为更大的社区角色扮演融合模型提供余量;8-16GB的基础款Mac仅限运行较小模型。',
          },
          {
            '平台': '移动端与网页(仅限Backyard Cloud)',
            '预期体验': 'iOS、Android和网页应用连接Backyard Cloud进行托管推理,并将相同的角色和聊天记录与桌面同步。',
            '重要提示': '移动端/网页访问需要Backyard Cloud订阅(含免费档)——手机上没有离线本地推理模式。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI与其他替代方案',
        columns: ['应用', '最适合场景', '配置难度', '模型灵活性', '源代码模式', '主要局限'],
        rows: [
          {
            '应用': 'Backyard AI',
            '最适合场景': '搭配内置Character Hub的低门槛本地角色聊天',
            '配置难度': '极低(一个安装包,下载模型)',
            '模型灵活性': '精选开源模型 + 社区角色扮演调优模型',
            '源代码模式': '闭源应用,本地使用免费',
            '主要局限': '无群聊;前端闭源;模型列表经过精选',
          },
          {
            '应用': 'SillyTavern',
            '最适合场景': '最大化定制、群聊、提示词模板控制',
            '配置难度': '高(需分别配置后端和前端)',
            '模型灵活性': '通过koboldcpp/text-generation-webui/Ollama后端使用任意GGUF模型',
            '源代码模式': '完全开源',
            '主要局限': '三者中学习曲线最陡;无内置角色库',
          },
          {
            '应用': 'Loci AI',
            '最适合场景': '跨平台通用设备端聊天(非角色扮演专注)',
            '配置难度': '极低(下载即可聊天)',
            '模型灵活性': '精选库(约10个模型);不支持导入GGUF',
            '源代码模式': '闭源应用,本地使用免费',
            '主要局限': '并非为Lorebook或Character Hub这类角色/角色扮演功能而设计',
          },
          {
            '应用': 'RisuAI',
            '最适合场景': '比SillyTavern配置更轻的入门级角色扮演界面',
            '配置难度': '中等(网页或自托管,仍需后端)',
            '模型灵活性': '通过连接的后端使用任意GGUF模型',
            '源代码模式': '开源',
            '主要局限': '扩展生态比SillyTavern小;仍需单独的后端',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Backyard AI',
        items: [
          '**初次尝试本地AI角色扮演的用户。** Backyard AI完全消除了后端/前端的拆分——一个安装包、一个应用,立即可访问Character Hub。这是本站介绍的本地角色聊天中最简单的入门方式。',
          '**想要现成角色的用户。** 在Character Hub中浏览数千个预制人设,比从零编写角色卡更省事,尤其对第一次使用的人来说。',
          '**没有强力GPU但仍想使用更大模型的用户。** Backyard Cloud的Standard/Advanced/Pro订阅可让你无需购买硬件即可使用70B级模型(Midnight Rose 70B、Magnum 72B)。',
          '**想要跨设备连续性的用户。** Backyard Cloud在桌面、网页、iOS和Android之间同步聊天和角色——便于在手机上继续PC上开始的对话。',
          '**重视简便性而非深度配置的用户。** 无需学习SillyTavern的扩展生态,即可使用Lorebook、Author\'s Note和采样器设置。',
          '**注重隐私且预算有限的用户。** 本地模式免费,无需账号,对话保留在设备上——是完全云端服务与完全DIY开源技术栈之间合理的折中方案。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Backyard AI',
        items: [
          '**想要可审计、完全开源前端的用户。** Backyard AI的应用代码是闭源的。需要精确核实应用如何处理数据,或想修改前端的用户,应改用[SillyTavern](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)或RisuAI。',
          '**需要群聊或高级提示词模板的用户。** SillyTavern的扩展生态覆盖了多角色群戏场景和深度提示词模板控制,而这些Backyard AI并未提供。',
          '**想要本地无限模型选择的用户。** Backyard AI的本地模型列表是经过精选的;它不像SillyTavern搭配koboldcpp那样支持导入任意GGUF文件。',
          '**不愿为更大的托管模型付费的用户。** 免费的本地模型上限大约在8B-13B级别;要达到Midnight Rose 70B或Magnum 72B的质量,需要付费的Backyard Cloud订阅。',
          '**需要最深入的模型管理、量化调整或基准测试控制的用户。** 更技术化的本地LLM工具在量化格式和推理参数上提供的精细控制,超出了Backyard AI简化界面所暴露的范围。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Backyard AI是免费的吗?',
            a: '是的,本地模式免费。适用于Windows和Mac的桌面应用可免费下载,无需账号或信用卡,可免费离线聊天使用本地下载的模型。可选的托管订阅Backyard Cloud用于更大模型和移动端/网页访问,提供免费档外加三个付费档:Standard($7/月)、Advanced($18/月)和Pro($35/月)。',
          },
          {
            q: 'Backyard AI以前叫什么名字?',
            a: 'Backyard AI此前名为Faraday.dev。该应用已更名为Backyard AI;底层的本地优先角色聊天理念保持不变。',
          },
          {
            q: 'Backyard AI是开源的吗?',
            a: '不是。Backyard AI是闭源的,这与公开前端代码供社区审计和修改的SillyTavern、RisuAI和Agnai不同。本地模式的聊天依然完全在你的设备上运行,但应用本身不开放供检查。',
          },
          {
            q: 'Character Hub是什么?',
            a: 'Character Hub是Backyard AI内置的库,收录数千个用户创建的AI角色和人设。大多数用户不是从零编写角色卡,而是浏览Hub选择一个符合自己想要对话或故事的角色,然后使用本地下载的模型与其聊天。',
          },
          {
            q: '本地运行Backyard AI需要什么硬件?',
            a: 'Fimbulvetr 10.7B及类似的8B-13B角色扮演调优模型,在16GB显存的游戏GPU上运行流畅。Backyard Cloud中最大的社区模型(Midnight Rose 70B、Magnum 72B)所需显存级别与任何本地70B级模型大致相同——在Q4_K_M下约42GB显存——或Apple Silicon上36GB以上的统一内存;若用于本地(非云端)用途,除非你的硬件达到这一上限,否则建议保持在8B-13B级别。',
          },
          {
            q: 'Backyard AI能离线使用吗?',
            a: '可以,在本地模式下。一旦应用和模型下载完成,聊天将完全在设备上运行,无需互联网连接。Backyard Cloud、移动应用和网页访问则需要互联网连接,因为推理在Backyard的服务器上进行。',
          },
          {
            q: 'Backyard Cloud的推荐计划是付费联盟营销计划吗?',
            a: '不是。推荐朋友可让对方首月享5折优惠,推荐人则获得应用于自己订阅的促销账单抵扣——Pro级推荐约17.50美元,Advanced约9.00美元,Standard约3.50美元。这是账户抵扣,而非现金支付。',
          },
          {
            q: 'Backyard AI与SillyTavern相比如何?',
            a: 'Backyard AI以简便性换取定制性:一个安装包、内置Character Hub、无需配置独立后端,但它是闭源应用且没有群聊。SillyTavern完全开源,通过扩展支持群聊和深度提示词模板定制,但需要搭配单独的后端(koboldcpp、text-generation-webui或Ollama)使用,学习曲线也更陡。完整对比见[SillyTavern vs. Agnai vs. RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)。',
          },
          {
            q: '我可以将自己的角色卡或模型导入Backyard AI吗?',
            a: '你可以导入或编写自己的角色卡,用于任何本地下载的模型。本地模式的模型选择仅限于Backyard AI的精选列表(Llama、Mistral、Gemma变体,以及Fimbulvetr 10.7B等角色扮演调优模型)——它不支持像koboldcpp加SillyTavern那样导入任意GGUF文件。',
          },
          {
            q: 'Backyard AI支持语音交互吗?',
            a: '支持。本地模式在文本聊天之外还包含语音交互,以及Lorebook、Author\'s Note、自定义上下文大小、采样器设置和Grammars等高级设置。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Backyard AI凭借摩擦最小的入门体验,在本站介绍的本地AI角色聊天中占据一席之地。免费桌面应用、无需账号,加上装满数千个现成人设的Character Hub,消除了尝试本地角色扮演的两大障碍:后端配置和角色卡编写。对于超出本地模型上限的用户,Backyard Cloud每月7-35美元的订阅可在无需升级硬件的情况下,扩展到70B级模型(Midnight Rose 70B、Magnum 72B),而推荐计划支付的是账户抵扣而非现金——了解这一点有助于设定正确预期。这种权衡是真实存在的:该应用闭源,不提供群聊,本地模型选择也限定在精选列表内,因此想要可审计、完全开放、深度可定制技术栈的用户应改用SillyTavern。对于其他想在几分钟而非几小时内让角色扮演运转起来的用户,Backyard AI是一个强有力的第一站选择。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Backyard AI官网](https://backyard.ai) — 产品概览、下载、Character Hub、Backyard Cloud定价。',
          '[Backyard AI文档 — 入门指南](https://backyard.ai/docs/start-guide/overview) — 设置、模型选择和功能概览。',
          '[Hugging Face上的Backyard AI模型](https://huggingface.co/backyardai) — 供应用使用的GGUF模型文件分发。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI:最佳角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 更开放、更可配置的替代方案;完整的后端/前端对比。',
          '[无审查本地LLM创意写作:伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 适用于包括Backyard AI在内的任何本地角色扮演前端的模型层面指导。',
          '[面向小说作者的本地LLM提示词](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 用于角色声线和叙事一致性的提示词结构。',
          '[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026) — 模型层面的对比,帮助你选择在Backyard AI或任何前端中运行的模型。',
          '[Loci AI评测:iPhone、Android、iPad、Mac和Windows离线AI](/zh/power-local-llm/loci-ai-review-offline-local-ai) — 一款通用(非角色扮演专注)的设备端聊天应用,供对比参考。',
          '[2026年本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory-2026) — 覆盖所有平台的全面应用和工具目录。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-pt.webp',
    title: 'Análise do Backyard AI (2026): Chat de Personagens IA e Roleplay Local',
    seoTitle: 'Backyard AI 2026: Roleplay Local e Chat de Personagens',
    intro:
      'O Backyard AI ([backyard.ai](https://backyard.ai)), antes chamado Faraday.dev, é um aplicativo de desktop gratuito e de código fechado para Windows e Mac, criado especificamente para chat de personagens IA e roleplay. Ele executa modelos de código aberto — Llama, Mistral, Gemma e ajustes finos de roleplay da comunidade, como o Fimbulvetr 10.7B — totalmente no seu próprio hardware, sem necessidade de conta ou cartão de crédito para uso local. O Character Hub oferece de cara milhares de personas criadas por usuários para você conversar, e um nível pago opcional, o Backyard Cloud, adiciona inferência hospedada para quem não tem uma GPU local potente. A questão prática não é se o roleplay local é possível — o SillyTavern e o RisuAI já provam isso — mas sim se a simplicidade "instalou e já era" do Backyard AI compensa seu modelo de código fechado e sua biblioteca de personagens curada, em comparação com os frontends mais abertos e configuráveis cobertos neste site.',
    metaDescription:
      'Backyard AI 2026: app gratuito de roleplay local para Windows e Mac. Character Hub, Fimbulvetr 10.7B, preços do Backyard Cloud ($7/$18/$35), requisitos de hardware e comparação com Loci AI e SillyTavern.',
    twitterDescription:
      'Backyard AI 2026: chat de personagens local gratuito para Windows/Mac, Character Hub, planos opcionais do Backyard Cloud e comparação com SillyTavern, Loci AI e RisuAI.',
    audience:
      'Usuários de roleplay e chat de personagens IA que estão decidindo entre o app local sem fricção do Backyard AI, seus planos pagos na nuvem e frontends locais mais configuráveis como SillyTavern, Agnai ou RisuAI — aborda configuração, requisitos de hardware, preços e trade-offs de privacidade.',
    readTime: '9 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar o site oficial do Backyard AI →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['GPU gamer com 16 GB de VRAM', 'RTX 4090 24 GB', 'Apple Silicon com 36 GB+ de memória unificada'],
    leadAnswerBlock:
      '**O Backyard AI é a escolha certa para quem quer chat de personagens IA e roleplay na própria máquina sem configurar um frontend.** O aplicativo de desktop gratuito para Windows e Mac não precisa de conta, cartão de crédito nem configuração manual de backends como koboldcpp ou text-generation-webui — instale, escolha um personagem no Character Hub integrado ou um modelo de roleplay da comunidade como o Fimbulvetr 10.7B, e comece a conversar totalmente offline. Quem não tem uma GPU potente pode pagar pelo Backyard Cloud ($7–$35/mês) para rodar modelos hospedados maiores. Quem quer controle profundo de templates de prompt, chats em grupo ou uma stack totalmente open source deve comparar com [SillyTavern](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) ou [Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai).',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      pt: {
        question: 'Devo usar o Backyard AI para roleplay local e chat de personagens?',
        answer:
          'Use o Backyard AI se você quer um app de desktop gratuito, sem configuração, para chat de personagens IA que roda modelos open source totalmente na sua própria máquina Windows ou Mac, com um Character Hub integrado de personas criadas por usuários. Não use se você precisa de uma stack open source totalmente auditável, personalização profunda de templates de prompt ou recursos de chat em grupo — o SillyTavern oferece os três, mas com uma configuração mais difícil.',
        bullets: [
          'App de desktop gratuito para Windows e Mac; não exige conta ou cartão de crédito no modo local.',
          'Roda Llama, Mistral, Gemma e ajustes finos de roleplay como o Fimbulvetr 10.7B totalmente offline.',
          'Character Hub: milhares de personagens e personas IA criados por usuários, já integrados.',
          'Planos opcionais do Backyard Cloud ($7/$18/$35 por mês) adicionam inferência hospedada para modelos maiores sem GPU local.',
          'App de código fechado — diferente do SillyTavern, o código do frontend em si não está aberto para auditoria ou modificação.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Backyard AI', anchor: 'what-is-backyard-ai' },
      { label: 'Como funciona o modo local', anchor: 'how-local-mode-works' },
      { label: 'Trade-offs: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Preços do Backyard Cloud', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI no Windows e no Mac', anchor: 'platforms' },
      { label: 'Backyard AI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Backyard AI', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Backyard AI', anchor: 'who-should-not-use' },
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
          'O Backyard AI ([backyard.ai](https://backyard.ai)), antes Faraday.dev, é um app de desktop gratuito e de código fechado para Windows e Mac focado em chat de personagens IA e roleplay.',
          'O modo local é gratuito, não exige conta e roda totalmente offline depois de baixar um modelo — os modelos incluem Llama, Mistral, Gemma e ajustes finos de roleplay da comunidade como o Fimbulvetr 10.7B.',
          'O Character Hub é o destaque: milhares de personagens IA prontos e criados pela comunidade, disponíveis para conversar imediatamente.',
          'Planos opcionais do Backyard Cloud (Free/$7/$18/$35 por mês) adicionam inferência hospedada em modelos maiores — Midnight Rose 70B e Magnum 72B no plano Pro — para quem não tem uma GPU local potente, além de acesso móvel e web sincronizado com o desktop.',
          'Recomendação de hardware: o Fimbulvetr 10.7B e merges de roleplay semelhantes de 8B–13B rodam bem em uma GPU gamer com 16 GB de VRAM; os maiores modelos da comunidade pedem 24 GB+ de VRAM ou 36 GB+ de memória unificada em Apple Silicon.',
          'O Backyard AI troca personalização por simplicidade: sem chats em grupo, sem código de frontend open source, e uma lista de modelos locais curada (não ilimitada), em comparação com o SillyTavern.',
          'O programa de indicação paga crédito na conta por indicações, não comissão em dinheiro — não confunda com um programa de afiliados tradicional.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'O que é o Backyard AI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Backyard AI é um app de desktop gratuito e de código fechado para Windows e Mac que roda LLMs open source localmente para chat de personagens IA e roleplay, com um plano pago opcional na nuvem para inferência hospedada.' },
          { type: 'plain-terms', text: 'Pense nele como uma alternativa ao Ollama focada em roleplay somada a uma interface de chat, já vindo com milhares de personagens prontos — você pula a separação entre backend e frontend que o SillyTavern exige.' },
        ],
        content: [
          'O Backyard AI é um aplicativo de desktop, antes chamado Faraday.dev, criado por uma pequena equipe independente com um objetivo: tornar o chat de personagens IA e o roleplay local acessíveis para quem não quer montar sozinho um backend (koboldcpp, text-generation-webui, Ollama) e um frontend separado (SillyTavern, Agnai, RisuAI).',
          'O app é gratuito e de código fechado — diferente do SillyTavern, RisuAI ou Agnai, o código do frontend não é publicado para auditoria ou modificação pela comunidade. No modo local, ele não precisa de conta, cartão de crédito nem conexão com a internet depois que um modelo é baixado.',
          'Seu recurso central é o Character Hub: uma biblioteca integrada com milhares de personagens e personas IA criados por usuários. Em vez de escrever uma ficha de personagem do zero (o fluxo padrão do SillyTavern), a maioria dos usuários começa explorando o Hub e escolhendo um personagem que já combina com o tipo de conversa ou história que deseja.',
          'O modo local suporta interação por voz além do chat de texto, e as configurações avançadas expõem lorebooks, notas de autor, tamanho de contexto personalizado, ajustes de sampler e grammars para quem quer mais controle depois de se familiarizar com o básico.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'Como funciona o modo local',
        content: [
          'O modo local é o caminho gratuito e offline: instale o app, baixe um modelo e converse sem enviar nada para um servidor.',
        ],
        items: [
          '**Seleção de modelo.** O Backyard AI vem com um conjunto curado de modelos open source otimizados para chat de personagens — modelos base Llama e Mistral, variantes do Gemma e ajustes finos de roleplay da comunidade como o Fimbulvetr 10.7B, construído especificamente para consistência de personagem e voz narrativa, não para tarefas de assistente genérico.',
          '**Não exige conta.** O chat local funciona sem cadastro, sem inserir dados de pagamento e sem se conectar ao Backyard Cloud. Tudo roda e permanece na máquina onde o app foi instalado.',
          '**Explorando o Character Hub.** Escolha uma ficha de personagem já pronta no Hub, ou importe/escreva a sua própria — o mesmo modelo local move cada personagem, mas a ficha fornece personalidade, história de fundo e tom.',
          '**Controles avançados quando você precisa.** Lorebooks (fatos persistentes de mundo/personagem injetados no contexto), notas de autor (instruções de direção), tamanho de janela de contexto personalizado, ajustes de sampler (temperatura, top-p, penalidade de repetição) e grammars (restrições de saída estruturada) estão todos disponíveis no modo local sem precisar do Backyard Cloud.',
          '**Vínculo com um desktop.** Usuários rodando o Backyard AI em um celular ou máquina mais leve podem se vincular a um desktop mais potente rodando o app completo, transferindo a inferência para essa máquina enquanto mantêm a interface de chat no dispositivo mais leve.',
        ],
        note: 'Os tamanhos de download dos modelos e os requisitos exatos de VRAM variam conforme o nível de quantização e o comprimento de contexto escolhidos. Verifique a lista atual de modelos e os tamanhos de arquivo em backyard.ai antes de comprar hardware. Última verificação: 02/09/2026.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-offs: benefícios vs. limitações',
        columns: ['Benefício', 'O que isso significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Modo local gratuito, sem conta',
            'O que isso significa na prática': 'Baixe o app e um modelo, depois converse offline indefinidamente sem custo.',
            'Limitação / ressalva': 'Modelos maiores/mais novos fora da lista local curada exigem o Backyard Cloud.',
          },
          {
            'Benefício': 'Character Hub',
            'O que isso significa na prática': 'Milhares de personagens IA prontos — não precisa escrever uma ficha de personagem para começar a conversar.',
            'Limitação / ressalva': 'A qualidade dos personagens enviados pela comunidade varia; a curadoria é irregular em comparação a um conjunto selecionado à mão.',
          },
          {
            'Benefício': 'Configuração mínima',
            'O que isso significa na prática': 'Um único instalador, sem precisar parear backend e frontend separadamente como no SillyTavern.',
            'Limitação / ressalva': 'Menos transparência sobre o que roda por baixo, já que o app é de código fechado.',
          },
          {
            'Benefício': 'Privacidade local',
            'O que isso significa na prática': 'As conversas no modo local são processadas no dispositivo; nada é enviado ao Backyard Cloud a menos que você opte por isso.',
            'Limitação / ressalva': 'O código fechado significa que a alegação de privacidade não pode ser verificada de forma independente como em um frontend open source.',
          },
          {
            'Benefício': 'Escalonamento opcional na nuvem',
            'O que isso significa na prática': 'O Backyard Cloud permite que quem não tem uma GPU potente rode modelos de classe 70B (Midnight Rose 70B, Magnum 72B) de qualquer dispositivo.',
            'Limitação / ressalva': 'Os planos na nuvem custam $7–$35/mês, e as conversas com modelos na nuvem são processadas nos servidores do Backyard, não localmente.',
          },
          {
            'Benefício': 'Controles avançados disponíveis localmente',
            'O que isso significa na prática': 'Lorebooks, notas de autor, tamanho de contexto personalizado e ajustes de sampler funcionam sem assinatura.',
            'Limitação / ressalva': 'Sem chats em grupo nem editor visual de fluxo baseado em nós — as extensões do SillyTavern vão mais longe para usuários avançados.',
          },
          {
            'Benefício': 'Continuidade entre dispositivos (nuvem)',
            'O que isso significa na prática': 'O Backyard Cloud sincroniza os mesmos personagens e chats entre desktop, web, iOS e Android.',
            'Limitação / ressalva': 'Essa conveniência se aplica apenas aos planos pagos na nuvem, não ao chat totalmente offline do modo local.',
          },
          {
            'Benefício': 'Ajustes finos de roleplay da comunidade',
            'O que isso significa na prática': 'O Fimbulvetr 10.7B e merges semelhantes são ajustados especificamente para consistência da voz do personagem, não para comportamento genérico de assistente.',
            'Limitação / ressalva': 'Esses merges raciocinam de forma menos confiável do que modelos frontier maiores ou modelos de instrução gerais.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Preços do Backyard Cloud',
        content: [
          'O Backyard Cloud é opcional — o modo local cobre o chat gratuitamente e indefinidamente. Os planos na nuvem existem para quem quer modelos hospedados maiores ou sincronização entre dispositivos sem ter uma GPU potente.',
        ],
        columns: ['Plano', 'Preço', 'O que você recebe', 'Memória de tokens / velocidade'],
        rows: [
          {
            'Plano': 'Free',
            'Preço': '$0/mês',
            'O que você recebe': '100 mensagens diárias no Fimbulvetr 10.7B, 25 mensagens gratuitas diárias em modelos de nível Advanced/Pro, apps web + desktop + iOS + Android',
            'Memória de tokens / velocidade': 'Memória de modelo de 4.096 tokens',
          },
          {
            'Plano': 'Standard',
            'Preço': '$7/mês',
            'O que você recebe': 'Mensagens ilimitadas no Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3',
            'Memória de tokens / velocidade': 'Memória de 4.096 tokens / até 30 tok/s',
          },
          {
            'Plano': 'Advanced',
            'Preço': '$18/mês',
            'O que você recebe': 'Adiciona Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B; modelos Standard estendidos para 8k de contexto',
            'Memória de tokens / velocidade': 'Memória de 8.192 tokens / até 40 tok/s',
          },
          {
            'Plano': 'Pro',
            'Preço': '$35/mês',
            'O que você recebe': 'Adiciona Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B; parâmetros avançados (grammars); canal de suporte privado',
            'Memória de tokens / velocidade': 'Memória de 6.000–30.000 tokens',
          },
        ],
        note: 'O Backyard Cloud opera um programa de indicação, não um programa de afiliados com comissão em dinheiro: indicar um amigo dá a ele 50% de desconto no primeiro mês, e dá a quem indicou um crédito promocional na própria conta (cerca de $17,50 por indicação Pro, $9,00 por Advanced, $3,50 por Standard) — não é um pagamento em dinheiro. Preços verificados em backyard.ai em 02/09/2026; confirme os planos atuais antes de assinar, já que preços de SaaS mudam. Os preços no Brasil podem variar bastante devido a impostos de importação, mas o Backyard Cloud é cobrado diretamente em dólar, sem versão em reais.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI no Windows e no Mac',
        columns: ['Plataforma', 'O que esperar', 'Observação importante'],
        rows: [
          {
            'Plataforma': 'Windows',
            'O que esperar': 'Instalador gratuito em backyard.ai. A inferência local usa sua GPU (NVIDIA CUDA) ou CPU/RAM, dependendo do hardware. Character Hub completo e biblioteca de modelos locais disponíveis.',
            'Observação importante': 'Uma GPU gamer com 16 GB de VRAM roda com folga modelos da classe Fimbulvetr 10.7B; configurações apenas com CPU funcionam, mas respondem mais devagar.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'App nativo para Apple Silicon. A memória unificada permite rodar modelos comunitários maiores sem GPU dedicada, de forma parecida com o uso que Ollama e LM Studio fazem do Apple Silicon.',
            'Observação importante': '36 GB+ de memória unificada dá folga para os maiores merges de roleplay da comunidade; Macs básicos com 8–16 GB ficam limitados a modelos menores.',
          },
          {
            'Plataforma': 'Móvel e web (somente Backyard Cloud)',
            'O que esperar': 'Os apps iOS, Android e web se conectam ao Backyard Cloud para inferência hospedada e sincronizam os mesmos personagens e histórico de chat com o desktop.',
            'Observação importante': 'O acesso móvel/web exige um plano do Backyard Cloud (nível Free incluído) — não há modo de inferência local offline no celular.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI vs. alternativas',
        columns: ['App', 'Melhor para', 'Nível de configuração', 'Flexibilidade de modelos', 'Modelo de origem', 'Limitação principal'],
        rows: [
          {
            'App': 'Backyard AI',
            'Melhor para': 'Chat de personagens local sem fricção com Character Hub integrado',
            'Nível de configuração': 'Mínimo (um instalador, baixar um modelo)',
            'Flexibilidade de modelos': 'Modelos abertos curados + ajustes finos de roleplay da comunidade',
            'Modelo de origem': 'App de código fechado, uso local gratuito',
            'Limitação principal': 'Sem chats em grupo; frontend de código fechado; lista de modelos curada',
          },
          {
            'App': 'SillyTavern',
            'Melhor para': 'Personalização máxima, chats em grupo, controle de templates de prompt',
            'Nível de configuração': 'Alto (backend + frontend separados)',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF via backend koboldcpp/text-generation-webui/Ollama',
            'Modelo de origem': 'Totalmente open source',
            'Limitação principal': 'Curva de aprendizado mais íngreme dos três; sem biblioteca de personagens integrada',
          },
          {
            'App': 'Loci AI',
            'Melhor para': 'Chat de propósito geral no dispositivo, multiplataforma (não focado em roleplay)',
            'Nível de configuração': 'Mínimo (baixar, conversar)',
            'Flexibilidade de modelos': 'Biblioteca curada (~10 modelos); não permite importar GGUF',
            'Modelo de origem': 'App de código fechado, uso local gratuito',
            'Limitação principal': 'Não é feito para recursos de personagem/roleplay como lorebooks ou Character Hub',
          },
          {
            'App': 'RisuAI',
            'Melhor para': 'UI de roleplay para iniciantes com configuração mais leve que o SillyTavern',
            'Nível de configuração': 'Médio (web ou auto-hospedado, backend ainda necessário)',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF via um backend conectado',
            'Modelo de origem': 'Open source',
            'Limitação principal': 'Ecossistema de extensões menor que o do SillyTavern; ainda precisa de um backend separado',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Backyard AI',
        items: [
          '**Usuário iniciante em roleplay local com IA.** O Backyard AI elimina completamente a separação entre backend e frontend — um instalador, um app, acesso imediato ao Character Hub. É a entrada mais fácil para o chat de personagens local coberto neste site.',
          '**Usuário que quer personagens já prontos.** Explorar milhares de personas pré-criadas no Character Hub é mais rápido do que escrever uma ficha de personagem do zero, principalmente na primeira sessão.',
          '**Usuário sem GPU potente que ainda assim quer modelos maiores.** Os planos Standard/Advanced/Pro do Backyard Cloud dão acesso a modelos de classe 70B (Midnight Rose 70B, Magnum 72B) sem comprar hardware.',
          '**Usuário que quer continuidade entre dispositivos.** O Backyard Cloud sincroniza chats e personagens entre desktop, web, iOS e Android — útil para continuar do celular uma conversa iniciada no PC.',
          '**Usuário que valoriza simplicidade acima de configuração profunda.** Lorebooks, notas de autor e ajustes de sampler estão disponíveis sem precisar aprender o ecossistema de extensões do SillyTavern.',
          '**Usuário preocupado com privacidade e com orçamento limitado.** O modo local é gratuito, não exige conta e mantém as conversas no dispositivo — um meio-termo razoável entre um serviço totalmente na nuvem e uma stack totalmente DIY open source.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Backyard AI',
        items: [
          '**Usuário que quer um frontend auditável e totalmente open source.** O código do app do Backyard AI é fechado. Usuários que precisam verificar exatamente o que o app faz com seus dados, ou que querem modificar o frontend, devem usar o [SillyTavern](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) ou o RisuAI em vez disso.',
          '**Usuário que precisa de chats em grupo ou templates de prompt avançados.** O ecossistema de extensões do SillyTavern cobre cenas em grupo com múltiplos personagens e controle profundo de templates de prompt que o Backyard AI não oferece.',
          '**Usuário que quer escolha ilimitada de modelos localmente.** A lista de modelos locais do Backyard AI é curada; ela não suporta importar qualquer arquivo GGUF como uma combinação de SillyTavern com koboldcpp.',
          '**Usuário que não quer pagar por modelos hospedados maiores.** Os modelos locais gratuitos ficam limitados à faixa de 8B–13B; alcançar a qualidade do Midnight Rose 70B ou Magnum 72B exige uma assinatura paga do Backyard Cloud.',
          '**Usuário que precisa do controle mais profundo de gerenciamento de modelos, ajuste de quantização ou benchmarking.** Ferramentas de LLM local mais técnicas oferecem controle mais fino sobre formatos de quantização e parâmetros de inferência do que a interface simplificada do Backyard AI expõe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Backyard AI é gratuito?',
            a: 'Sim, no modo local. O app de desktop para Windows e Mac é gratuito para baixar, não exige conta nem cartão de crédito, e permite conversar offline de graça com modelos baixados localmente. O Backyard Cloud, o nível hospedado opcional para modelos maiores e acesso móvel/web, tem um plano gratuito mais três níveis pagos: Standard ($7/mês), Advanced ($18/mês) e Pro ($35/mês).',
          },
          {
            q: 'Como o Backyard AI se chamava antes?',
            a: 'O Backyard AI se chamava antes Faraday.dev. O app foi renomeado para Backyard AI; o conceito de chat de personagens local-first por trás dele permanece o mesmo.',
          },
          {
            q: 'O Backyard AI é open source?',
            a: 'Não. O Backyard AI é de código fechado, diferente do SillyTavern, RisuAI e Agnai, que publicam seu código de frontend para auditoria e modificação pela comunidade. O chat no modo local ainda roda totalmente no seu dispositivo, mas o app em si não está aberto para inspeção.',
          },
          {
            q: 'O que é o Character Hub?',
            a: 'O Character Hub é a biblioteca integrada do Backyard AI com milhares de personagens e personas IA criados por usuários. Em vez de escrever uma ficha de personagem do zero, a maioria dos usuários explora o Hub e escolhe uma que combine com a conversa ou história desejada, e depois conversa usando um modelo baixado localmente.',
          },
          {
            q: 'Que hardware eu preciso para rodar o Backyard AI localmente?',
            a: 'O Fimbulvetr 10.7B e modelos de roleplay semelhantes de 8B–13B rodam bem em uma GPU gamer com 16 GB de VRAM. Os maiores modelos comunitários disponíveis no Backyard Cloud (Midnight Rose 70B, Magnum 72B) precisam aproximadamente da mesma classe de VRAM que qualquer modelo local de classe 70B — cerca de 42 GB de VRAM em Q4_K_M — ou 36 GB+ de memória unificada em Apple Silicon; para uso local (fora da nuvem), fique na classe 8B–13B a menos que seu hardware alcance esse teto.',
          },
          {
            q: 'O Backyard AI funciona offline?',
            a: 'Sim, no modo local. Depois que o app e um modelo são baixados, o chat roda totalmente no dispositivo, sem exigir conexão com a internet. O Backyard Cloud, os apps móveis e o acesso web exigem conexão com a internet, já que a inferência acontece nos servidores do Backyard.',
          },
          {
            q: 'O programa de indicação do Backyard Cloud é um programa de afiliados pago?',
            a: 'Não. Indicar um amigo dá a ele 50% de desconto no primeiro mês, e dá a quem indicou um crédito promocional para a própria assinatura — cerca de $17,50 por uma indicação Pro, $9,00 por Advanced e $3,50 por Standard. Isso é crédito na conta, não um pagamento em dinheiro.',
          },
          {
            q: 'Como o Backyard AI se compara ao SillyTavern?',
            a: 'O Backyard AI troca personalização por simplicidade: um instalador, um Character Hub integrado e nenhum backend separado para configurar, mas é um app de código fechado sem chats em grupo. O SillyTavern é totalmente open source, suporta chats em grupo e personalização profunda de templates de prompt via extensões, mas exige emparelhá-lo com um backend separado (koboldcpp, text-generation-webui ou Ollama) e tem uma curva de aprendizado mais íngreme. Veja a comparação completa em [SillyTavern vs. Agnai vs. RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: 'Posso importar minhas próprias fichas de personagem ou modelos para o Backyard AI?',
            a: 'Você pode importar ou escrever suas próprias fichas de personagem para usar com qualquer modelo baixado localmente. A seleção de modelos no modo local é limitada à lista curada do Backyard AI (variantes Llama, Mistral, Gemma e ajustes finos de roleplay como o Fimbulvetr 10.7B) — não suporta importar um arquivo GGUF qualquer como uma configuração de koboldcpp com SillyTavern.',
          },
          {
            q: 'O Backyard AI suporta interação por voz?',
            a: 'Sim. O modo local inclui interação por voz além do chat de texto, junto com configurações avançadas como lorebooks, notas de autor, tamanho de contexto personalizado, ajustes de sampler e grammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Backyard AI merece seu lugar como o ponto de entrada com menos fricção para o chat de personagens IA local coberto neste site. A combinação de um app de desktop gratuito, sem exigência de conta, e um Character Hub cheio de milhares de personas já prontas remove as duas maiores barreiras para experimentar roleplay local: configuração de backend e escrita de fichas de personagem. Para usuários que ultrapassam o teto do modelo local, os níveis de $7–$35/mês do Backyard Cloud escalam até modelos de classe 70B (Midnight Rose 70B, Magnum 72B) sem exigir upgrade de hardware, e o programa de indicação paga crédito na conta em vez de dinheiro — bom saber isso para ajustar as expectativas. O trade-off é real: o app é de código fechado, não oferece chats em grupo e limita a escolha de modelo local a uma lista curada, então usuários que querem uma stack auditável, totalmente aberta e profundamente personalizável devem usar o SillyTavern em vez disso. Para todos os outros que querem colocar o roleplay para funcionar em minutos em vez de horas, o Backyard AI é uma ótima primeira parada.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial do Backyard AI](https://backyard.ai) — visão geral do produto, downloads, Character Hub, preços do Backyard Cloud.',
          '[Documentação do Backyard AI — Guia de início](https://backyard.ai/docs/start-guide/overview) — configuração, seleção de modelos e visão geral de recursos.',
          '[Modelos do Backyard AI no Hugging Face](https://huggingface.co/backyardai) — arquivos de modelo GGUF distribuídos para uso com o app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI: o melhor frontend de roleplay](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — a alternativa open source e mais configurável; comparação completa de backend/frontend.',
          '[LLMs locais sem censura para escrita criativa: ética, legalidade e boas práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — orientações no nível do modelo aplicáveis a qualquer frontend de roleplay local, incluindo o Backyard AI.',
          '[Prompts de LLM local para escritores de ficção](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — estruturas de prompt para voz de personagem e consistência narrativa.',
          '[Melhores LLMs locais para escrita criativa 2026](/pt/power-local-llm/best-local-llm-creative-writing-2026) — comparação no nível do modelo para escolher o que rodar dentro do Backyard AI ou de qualquer frontend.',
          '[Análise do Loci AI: IA offline para iPhone, Android, iPad, Mac e Windows](/pt/power-local-llm/loci-ai-review-offline-local-ai) — um app de chat no dispositivo de propósito geral (não focado em roleplay) para comparação.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório completo de apps e ferramentas para todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-ar.webp',
    title: 'مراجعة Backyard AI (2026): محادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار محلياً',
    seoTitle: 'مراجعة Backyard AI 2026: لعب الأدوار المحلي ومحادثة الشخصيات',
    intro:
      'Backyard AI ([backyard.ai](https://backyard.ai))، الذي كان يُعرف سابقاً باسم Faraday.dev، هو تطبيق سطح مكتب مجاني ومغلق المصدر لأنظمة Windows و Mac، صُمم خصيصاً لمحادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار. يشغّل نماذج مفتوحة المصدر — Llama و Mistral و Gemma، وإصدارات مضبوطة من المجتمع لِلعب الأدوار مثل Fimbulvetr 10.7B — بالكامل على جهازك الخاص، دون حساب أو بطاقة ائتمان للاستخدام المحلي. يوفّر Character Hub الخاص به منذ البداية آلاف الشخصيات التي أنشأها المستخدمون للمحادثة، بينما تضيف طبقة Backyard Cloud المدفوعة الاختيارية استدلالاً مستضافاً للقراء الذين لا يملكون بطاقة رسومات محلية قوية. السؤال العملي ليس ما إذا كان لعب الأدوار المحلي ممكناً — فقد أثبت SillyTavern و RisuAI ذلك بالفعل — بل ما إذا كانت بساطة Backyard AI في "التثبيت والاستخدام مباشرة" تستحق نموذجه المغلق المصدر ومكتبة شخصياته المنسّقة، مقارنة بالواجهات الأكثر انفتاحاً وقابلية للتخصيص التي يغطيها هذا الموقع.',
    metaDescription:
      'مراجعة Backyard AI 2026: تطبيق مجاني للعب الأدوار المحلي على Windows و Mac. Character Hub، وFimbulvetr 10.7B، وأسعار Backyard Cloud ($7/$18/$35)، ومتطلبات الأجهزة، ومقارنة مع Loci AI وSillyTavern.',
    twitterDescription:
      'مراجعة Backyard AI 2026: محادثة شخصيات محلية مجانية لأنظمة Windows/Mac، مع Character Hub وخطط Backyard Cloud الاختيارية، ومقارنة مع SillyTavern وLoci AI وRisuAI.',
    audience:
      'مستخدمو لعب الأدوار ومحادثة الشخصيات بالذكاء الاصطناعي الذين يقررون بين تطبيق Backyard AI المحلي السلس، وخططه السحابية المدفوعة، والواجهات المحلية الأكثر قابلية للتخصيص مثل SillyTavern وAgnai وRisuAI — يغطي الإعداد ومتطلبات الأجهزة والأسعار ومفاضلات الخصوصية.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'زيارة موقع Backyard AI الرسمي ←', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['بطاقة رسومات ألعاب بذاكرة VRAM سعة 16 GB', 'RTX 4090 24 GB', 'Apple Silicon بذاكرة موحدة 36 GB فأكثر'],
    leadAnswerBlock:
      '**يُعد Backyard AI الخيار المناسب للقراء الذين يريدون محادثة شخصيات بالذكاء الاصطناعي ولعب أدوار على جهازهم الخاص دون إعداد واجهة أمامية.** لا يحتاج تطبيق سطح المكتب المجاني لأنظمة Windows و Mac إلى حساب أو بطاقة ائتمان أو إعداد يدوي لخلفيات مثل koboldcpp أو text-generation-webui — قم بتثبيته، واختر شخصية من Character Hub المدمج أو نموذج لعب أدوار من المجتمع مثل Fimbulvetr 10.7B، وابدأ المحادثة دون اتصال بالإنترنت بالكامل. يمكن للقراء الذين لا يملكون بطاقة رسومات قوية الاشتراك في Backyard Cloud (7-35 دولاراً شهرياً) لتشغيل نماذج مستضافة أكبر. من يريد تحكماً عميقاً في قوالب الأوامر، أو محادثات جماعية، أو مكدساً مفتوح المصدر بالكامل، يجب أن يقارن مع [SillyTavern](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) أو [Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai).',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      ar: {
        question: 'هل يجب أن أستخدم Backyard AI للعب الأدوار المحلي ومحادثة الشخصيات؟',
        answer:
          'استخدم Backyard AI إذا كنت تريد تطبيق سطح مكتب مجاني وبدون إعداد لمحادثة الشخصيات بالذكاء الاصطناعي، يشغّل نماذج مفتوحة المصدر بالكامل على جهازك الخاص بنظام Windows أو Mac، مع Character Hub مدمج يضم شخصيات أنشأها المستخدمون. تجنبه إذا كنت تحتاج إلى مكدس مفتوح المصدر قابل للتدقيق بالكامل، أو تخصيصاً عميقاً لقوالب الأوامر، أو ميزات المحادثة الجماعية — يوفر لك SillyTavern هذه الأمور الثلاثة جميعها، لكن بإعداد أصعب.',
        bullets: [
          'تطبيق سطح مكتب مجاني لأنظمة Windows و Mac؛ لا يتطلب حساباً أو بطاقة ائتمان في الوضع المحلي.',
          'يشغّل Llama و Mistral و Gemma وإصدارات لعب الأدوار المضبوطة مثل Fimbulvetr 10.7B دون اتصال بالإنترنت بالكامل.',
          'Character Hub: آلاف الشخصيات وأنماط الشخصية بالذكاء الاصطناعي التي أنشأها المستخدمون، مدمجة مسبقاً.',
          'خطط Backyard Cloud الاختيارية (7/18/35 دولاراً شهرياً) تضيف استدلالاً مستضافاً لنماذج أكبر دون بطاقة رسومات محلية.',
          'تطبيق مغلق المصدر — على عكس SillyTavern، كود الواجهة الأمامية نفسه غير متاح للتدقيق أو التعديل.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Backyard AI', anchor: 'what-is-backyard-ai' },
      { label: 'كيف يعمل الوضع المحلي', anchor: 'how-local-mode-works' },
      { label: 'المقايضات: الفوائد مقابل القيود', anchor: 'tradeoffs' },
      { label: 'أسعار Backyard Cloud', anchor: 'backyard-cloud-pricing' },
      { label: 'Backyard AI على Windows و Mac', anchor: 'platforms' },
      { label: 'Backyard AI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Backyard AI', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Backyard AI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'Backyard AI ([backyard.ai](https://backyard.ai))، الذي كان يُعرف سابقاً باسم Faraday.dev، هو تطبيق سطح مكتب مجاني ومغلق المصدر لأنظمة Windows و Mac يركّز على محادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار.',
          'الوضع المحلي مجاني ولا يحتاج إلى حساب، ويعمل بالكامل دون اتصال بالإنترنت بعد تنزيل نموذج — تشمل النماذج Llama و Mistral و Gemma وإصدارات لعب الأدوار المضبوطة من المجتمع مثل Fimbulvetr 10.7B.',
          'يُعد Character Hub الميزة الأبرز: آلاف الشخصيات الجاهزة التي أنشأها المجتمع بالذكاء الاصطناعي، جاهزة للمحادثة فوراً.',
          'تضيف خطط Backyard Cloud الاختيارية (مجانية/7/18/35 دولاراً شهرياً) استدلالاً مستضافاً على نماذج أكبر — Midnight Rose 70B و Magnum 72B في خطة Pro — للقراء الذين لا يملكون بطاقة رسومات محلية قوية، بالإضافة إلى وصول عبر الجوال والويب متزامن مع سطح المكتب.',
          'إرشادات الأجهزة: يعمل Fimbulvetr 10.7B ونماذج الدمج المماثلة للعب الأدوار من فئة 8B-13B بسلاسة على بطاقة رسومات ألعاب بذاكرة VRAM سعة 16 GB؛ تحتاج أكبر نماذج المجتمع إلى 24 GB فأكثر من VRAM أو 36 GB فأكثر من الذاكرة الموحدة على Apple Silicon.',
          'يقايض Backyard AI التخصيص بالبساطة: لا محادثات جماعية، ولا كود واجهة أمامية مفتوح المصدر، وقائمة نماذج محلية منسّقة (وليست غير محدودة)، مقارنة بـ SillyTavern.',
          'يدفع برنامج الإحالة رصيداً في الحساب مقابل الإحالات، وليس عمولة نقدية — لا تخلط بينه وبين برنامج تسويق بالعمولة تقليدي.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'ما هو Backyard AI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI هو تطبيق سطح مكتب مجاني ومغلق المصدر لأنظمة Windows و Mac يشغّل نماذج LLM مفتوحة المصدر محلياً لمحادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار، مع خطة سحابية مدفوعة اختيارية للاستدلال المستضاف.' },
          { type: 'plain-terms', text: 'تخيله بديلاً لـ Ollama مخصصاً للعب الأدوار مع واجهة محادثة، معبأً مسبقاً بآلاف الشخصيات الجاهزة — فتتجنب الفصل بين الخلفية والواجهة الأمامية الذي يتطلبه SillyTavern.' },
        ],
        content: [
          'Backyard AI هو تطبيق سطح مكتب، كان يُعرف سابقاً باسم Faraday.dev، طوّره فريق مستقل صغير بهدف واحد: جعل محادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار المحلي في متناول القراء الذين لا يريدون تجميع خلفية (koboldcpp أو text-generation-webui أو Ollama) وواجهة أمامية منفصلة (SillyTavern أو Agnai أو RisuAI) بأنفسهم.',
          'التطبيق مجاني ومغلق المصدر — على عكس SillyTavern أو RisuAI أو Agnai، لا يُنشر كود الواجهة الأمامية للتدقيق أو التعديل من قبل المجتمع. في الوضع المحلي، لا يحتاج إلى حساب أو بطاقة ائتمان أو اتصال بالإنترنت بمجرد تنزيل نموذج.',
          'ميزته المحورية هي Character Hub: مكتبة مدمجة تضم آلاف الشخصيات وأنماط الشخصية بالذكاء الاصطناعي التي أنشأها المستخدمون. بدلاً من كتابة بطاقة شخصية من الصفر (سير العمل المعتاد في SillyTavern)، يبدأ معظم القراء بتصفح Center Hub واختيار شخصية تناسب بالفعل نوع المحادثة أو القصة التي يريدونها.',
          'يدعم الوضع المحلي التفاعل الصوتي إلى جانب المحادثة النصية، وتكشف الإعدادات المتقدمة عن Lorebooks وAuthor\'s Notes وحجم سياق مخصص وإعدادات Sampler وGrammars للقراء الذين يريدون مزيداً من التحكم بعد التعرف على الأساسيات.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: 'كيف يعمل الوضع المحلي',
        content: [
          'الوضع المحلي هو المسار المجاني وغير المتصل بالإنترنت: ثبّت التطبيق، نزّل نموذجاً، وتحدث دون إرسال أي شيء إلى خادم.',
        ],
        items: [
          '**اختيار النموذج.** يأتي Backyard AI مزوداً بمجموعة منسّقة من النماذج مفتوحة المصدر المحسّنة لمحادثة الشخصيات — نماذج Llama و Mistral الأساسية، ومتغيرات Gemma، وإصدارات لعب الأدوار المضبوطة من المجتمع مثل Fimbulvetr 10.7B، الذي بُني خصيصاً لاتساق الشخصية والصوت السردي بدلاً من مهام المساعد العامة.',
          '**لا يتطلب حساباً.** تعمل المحادثة المحلية دون تسجيل أو إدخال بيانات دفع أو الاتصال بـ Backyard Cloud. كل شيء يعمل ويبقى على الجهاز الذي ثُبّت عليه التطبيق.',
          '**تصفح Character Hub.** اختر بطاقة شخصية جاهزة من Center Hub، أو استورد/اكتب بطاقتك الخاصة — النموذج المحلي نفسه يشغّل كل شخصية، لكن بطاقة الشخصية توفر الشخصية والخلفية القصصية والنبرة.',
          '**عناصر تحكم متقدمة عند الحاجة.** تتوفر Lorebooks (حقائق دائمة عن العالم/الشخصية تُدرج في السياق)، وAuthor\'s Notes (تعليمات توجيهية)، وحجم نافذة سياق مخصص، وإعدادات Sampler (درجة الحرارة وtop-p وعقوبة التكرار)، وGrammars (قيود مخرجات منظمة)، كلها في الوضع المحلي دون الحاجة إلى Backyard Cloud.',
          '**الربط بجهاز سطح مكتب.** يمكن للقراء الذين يستخدمون Backyard AI على هاتف أو جهاز أخف الربط بجهاز سطح مكتب أقوى يشغّل التطبيق الكامل، ونقل الاستدلال إلى ذلك الجهاز مع إبقاء واجهة المحادثة على الجهاز الأخف.',
        ],
        note: 'تختلف أحجام تنزيل النماذج ومتطلبات VRAM الدقيقة حسب مستوى التكميم وطول السياق المختارين. تحقق من قائمة النماذج الحالية وأحجام الملفات على backyard.ai قبل شراء أي جهاز. آخر تحقق: 2026-09-02.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: الفوائد مقابل القيود',
        columns: ['الفائدة', 'ماذا يعني ذلك في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الفائدة': 'وضع محلي مجاني، بدون حساب',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'نزّل التطبيق ونموذجاً، ثم تحدث دون اتصال بالإنترنت إلى أجل غير مسمى دون تكلفة.',
            'القيد / الملاحظة': 'النماذج الأكبر/الأحدث خارج القائمة المحلية المنسّقة تتطلب Backyard Cloud.',
          },
          {
            'الفائدة': 'Character Hub',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'آلاف الشخصيات الجاهزة بالذكاء الاصطناعي — لا حاجة لكتابة بطاقة شخصية لبدء المحادثة.',
            'القيد / الملاحظة': 'جودة الشخصيات المرسلة من المجتمع متفاوتة؛ التنسيق غير متساوٍ مقارنة بمجموعة مختارة يدوياً.',
          },
          {
            'الفائدة': 'إعداد بسيط للغاية',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'مثبّت واحد، دون الحاجة لإقران خلفية/واجهة أمامية منفصلة كما في SillyTavern.',
            'القيد / الملاحظة': 'شفافية أقل حول ما يعمل خلف الكواليس لأن التطبيق مغلق المصدر.',
          },
          {
            'الفائدة': 'خصوصية محلية',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'تُعالج المحادثات في الوضع المحلي على الجهاز؛ لا يُرسل شيء إلى Backyard Cloud ما لم تفعّل ذلك بنفسك.',
            'القيد / الملاحظة': 'الكود المغلق المصدر يعني أن ادعاء الخصوصية لا يمكن التحقق منه بشكل مستقل كما هو الحال في واجهة مفتوحة المصدر.',
          },
          {
            'الفائدة': 'توسع سحابي اختياري',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'يتيح Backyard Cloud للقراء الذين لا يملكون بطاقة رسومات قوية تشغيل نماذج من فئة 70B (Midnight Rose 70B وMagnum 72B) من أي جهاز.',
            'القيد / الملاحظة': 'تكلف الخطط السحابية 7-35 دولاراً شهرياً، وتُعالج المحادثات مع النماذج السحابية على خوادم Backyard، وليس محلياً.',
          },
          {
            'الفائدة': 'عناصر تحكم متقدمة متاحة محلياً',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'تعمل Lorebooks وAuthor\'s Notes وحجم السياق المخصص وإعدادات Sampler دون اشتراك.',
            'القيد / الملاحظة': 'لا توجد محادثات جماعية ولا محرر سير عمل مرئي قائم على العُقد — تذهب إضافات SillyTavern أبعد من ذلك للمستخدمين المتقدمين.',
          },
          {
            'الفائدة': 'استمرارية عبر الأجهزة (السحابة)',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'يزامن Backyard Cloud نفس الشخصيات والمحادثات بين سطح المكتب والويب وiOS وAndroid.',
            'القيد / الملاحظة': 'هذه الراحة تنطبق فقط على الخطط السحابية المدفوعة، وليس على المحادثة في الوضع المحلي غير المتصل بالكامل.',
          },
          {
            'الفائدة': 'إصدارات لعب أدوار مضبوطة من المجتمع',
            'ماذا يعني ذلك في الاستخدام الفعلي': 'تُضبط Fimbulvetr 10.7B ونماذج الدمج المماثلة خصيصاً لاتساق صوت الشخصية، وليس لسلوك مساعد عام.',
            'القيد / الملاحظة': 'تستدل هذه النماذج المدمجة بشكل أقل موثوقية من النماذج الحدودية الأكبر أو نماذج التعليمات العامة.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'أسعار Backyard Cloud',
        content: [
          'Backyard Cloud اختياري — يغطي الوضع المحلي المحادثة مجاناً إلى أجل غير مسمى. توجد الخطط السحابية للقراء الذين يريدون نماذج مستضافة أكبر أو مزامنة عبر الأجهزة دون امتلاك بطاقة رسومات قوية.',
        ],
        columns: ['الخطة', 'السعر', 'ما تحصل عليه', 'ذاكرة الرموز / السرعة'],
        rows: [
          {
            'الخطة': 'Free',
            'السعر': '0 دولار/شهرياً',
            'ما تحصل عليه': '100 رسالة يومية على Fimbulvetr 10.7B، و25 رسالة مجانية يومية على نماذج مستوى Advanced/Pro، تطبيقات الويب + سطح المكتب + iOS + Android',
            'ذاكرة الرموز / السرعة': 'ذاكرة نموذج بسعة 4,096 رمزاً',
          },
          {
            'الخطة': 'Standard',
            'السعر': '7 دولارات/شهرياً',
            'ما تحصل عليه': 'رسائل غير محدودة على Fimbulvetr 10.7B وLlama 3.1 Instruct 8B وMythomax-Kimiko 13B وLlama 3 Stheno V3.3',
            'ذاكرة الرموز / السرعة': 'ذاكرة 4,096 رمزاً / حتى 30 رمزاً/ثانية',
          },
          {
            'الخطة': 'Advanced',
            'السعر': '18 دولاراً/شهرياً',
            'ما تحصل عليه': 'يضيف Chunky Lemon Cookie 11B وLlama 3 Jamet MK.V Blackroot 8B؛ تمتد نماذج Standard إلى سياق 8k',
            'ذاكرة الرموز / السرعة': 'ذاكرة 8,192 رمزاً / حتى 40 رمزاً/ثانية',
          },
          {
            'الخطة': 'Pro',
            'السعر': '35 دولاراً/شهرياً',
            'ما تحصل عليه': 'يضيف Midnight Rose 70B وMagnum 72B وPsyonic-Cetacean Ultra 20B؛ معاملات خبيرة (Grammars)؛ قناة دعم خاصة',
            'ذاكرة الرموز / السرعة': 'ذاكرة 6,000-30,000 رمز',
          },
        ],
        note: 'يدير Backyard Cloud برنامج إحالة، وليس برنامج تسويق بالعمولة النقدية: إحالة صديق تمنحه خصم 50% على شهره الأول، وتمنح المحيل رصيداً ترويجياً في حسابه الخاص (نحو 17.50 دولاراً لكل إحالة Pro، و9.00 دولارات لـ Advanced، و3.50 دولارات لـ Standard) — وليس دفعة نقدية. الأسعار مُتحقق منها على backyard.ai بتاريخ 2026-09-02؛ تأكد من الخطط الحالية قبل الاشتراك لأن أسعار البرمجيات كخدمة تتغير.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Backyard AI على Windows و Mac',
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'Windows',
            'ما يمكن توقعه': 'مثبّت مجاني من backyard.ai. يستخدم الاستدلال المحلي بطاقة الرسومات (NVIDIA CUDA) أو المعالج/الذاكرة العشوائية حسب الجهاز. Character Hub الكامل ومكتبة النماذج المحلية متاحان.',
            'ملاحظة مهمة': 'تشغّل بطاقة رسومات ألعاب بذاكرة VRAM سعة 16 GB نماذج من فئة Fimbulvetr 10.7B بسلاسة؛ تعمل الإعدادات القائمة على المعالج فقط لكنها تستجيب بشكل أبطأ.',
          },
          {
            'المنصة': 'Mac',
            'ما يمكن توقعه': 'تطبيق أصلي لأجهزة Apple Silicon. تتيح الذاكرة الموحدة تشغيل نماذج مجتمعية أكبر دون بطاقة رسومات منفصلة، على غرار استخدام Ollama وLM Studio لـ Apple Silicon.',
            'ملاحظة مهمة': 'توفر الذاكرة الموحدة بسعة 36 GB فأكثر هامشاً لأكبر نماذج دمج لعب الأدوار المجتمعية؛ تقتصر أجهزة Mac الأساسية بذاكرة 8-16 GB على النماذج الأصغر.',
          },
          {
            'المنصة': 'الجوال والويب (Backyard Cloud فقط)',
            'ما يمكن توقعه': 'تتصل تطبيقات iOS وAndroid والويب بـ Backyard Cloud للاستدلال المستضاف، وتزامن نفس الشخصيات وسجل المحادثات مع سطح المكتب.',
            'ملاحظة مهمة': 'يتطلب الوصول عبر الجوال/الويب خطة Backyard Cloud (تشمل المستوى المجاني) — لا يوجد وضع استدلال محلي دون اتصال على الهاتف.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI مقابل البدائل',
        columns: ['التطبيق', 'الأنسب لـ', 'مستوى الإعداد', 'مرونة النماذج', 'نموذج المصدر', 'القيد الرئيسي'],
        rows: [
          {
            'التطبيق': 'Backyard AI',
            'الأنسب لـ': 'محادثة شخصيات محلية سلسة مع Character Hub مدمج',
            'مستوى الإعداد': 'ضئيل (مثبّت واحد، تنزيل نموذج)',
            'مرونة النماذج': 'نماذج مفتوحة منسّقة + إصدارات لعب أدوار مضبوطة من المجتمع',
            'نموذج المصدر': 'تطبيق مغلق المصدر، استخدام محلي مجاني',
            'القيد الرئيسي': 'لا محادثات جماعية؛ واجهة أمامية مغلقة المصدر؛ قائمة نماذج منسّقة',
          },
          {
            'التطبيق': 'SillyTavern',
            'الأنسب لـ': 'أقصى تخصيص، محادثات جماعية، تحكم في قوالب الأوامر',
            'مستوى الإعداد': 'عالٍ (خلفية + واجهة أمامية منفصلتان)',
            'مرونة النماذج': 'أي ملف GGUF عبر خلفية koboldcpp/text-generation-webui/Ollama',
            'نموذج المصدر': 'مفتوح المصدر بالكامل',
            'القيد الرئيسي': 'أشد منحنى تعلم بين الثلاثة؛ لا مكتبة شخصيات مدمجة',
          },
          {
            'التطبيق': 'Loci AI',
            'الأنسب لـ': 'محادثة عامة على الجهاز عبر منصات متعددة (غير مركّزة على لعب الأدوار)',
            'مستوى الإعداد': 'ضئيل (تنزيل، محادثة)',
            'مرونة النماذج': 'مكتبة منسّقة (~10 نماذج)؛ لا استيراد GGUF',
            'نموذج المصدر': 'تطبيق مغلق المصدر، استخدام محلي مجاني',
            'القيد الرئيسي': 'غير مصمم لميزات الشخصية/لعب الأدوار مثل Lorebooks أو Character Hub',
          },
          {
            'التطبيق': 'RisuAI',
            'الأنسب لـ': 'واجهة لعب أدوار للمبتدئين بإعداد أخف من SillyTavern',
            'مستوى الإعداد': 'متوسط (ويب أو استضافة ذاتية، الخلفية لا تزال مطلوبة)',
            'مرونة النماذج': 'أي ملف GGUF عبر خلفية متصلة',
            'نموذج المصدر': 'مفتوح المصدر',
            'القيد الرئيسي': 'نظام إضافات أصغر من SillyTavern؛ لا يزال يتطلب خلفية منفصلة',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Backyard AI',
        items: [
          '**القارئ الجديد على لعب الأدوار المحلي بالذكاء الاصطناعي.** يلغي Backyard AI الفصل بين الخلفية والواجهة الأمامية تماماً — مثبّت واحد، تطبيق واحد، وصول فوري إلى Character Hub. إنه أسهل مدخل لمحادثة الشخصيات المحلية التي يغطيها هذا الموقع.',
          '**القارئ الذي يريد شخصيات جاهزة.** تصفح آلاف الشخصيات الجاهزة في Character Hub أسهل من كتابة بطاقة شخصية من الصفر، خاصة في الجلسة الأولى.',
          '**القارئ الذي لا يملك بطاقة رسومات قوية لكنه ما زال يريد نماذج أكبر.** توفر خطط Standard/Advanced/Pro من Backyard Cloud وصولاً إلى نماذج من فئة 70B (Midnight Rose 70B وMagnum 72B) دون شراء أجهزة.',
          '**القارئ الذي يريد استمرارية عبر الأجهزة.** يزامن Backyard Cloud المحادثات والشخصيات بين سطح المكتب والويب وiOS وAndroid — مفيد لمتابعة محادثة بدأت على جهاز الكمبيوتر من الهاتف.',
          '**القارئ الذي يقدّر البساطة على التكوين العميق.** تتوفر Lorebooks وAuthor\'s Notes وإعدادات Sampler دون الحاجة لتعلم نظام إضافات SillyTavern.',
          '**القارئ المهتم بالخصوصية وذو الميزانية المحدودة.** الوضع المحلي مجاني، لا يحتاج إلى حساب، ويبقي المحادثات على الجهاز — حل وسط معقول بين خدمة سحابية كاملة ومكدس مفتوح المصدر مبني ذاتياً بالكامل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Backyard AI',
        items: [
          '**القارئ الذي يريد واجهة أمامية قابلة للتدقيق ومفتوحة المصدر بالكامل.** كود تطبيق Backyard AI مغلق المصدر. القراء الذين يحتاجون إلى التحقق بدقة مما يفعله التطبيق ببياناتهم، أو يريدون تعديل الواجهة الأمامية، يجب أن يستخدموا [SillyTavern](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) أو RisuAI بدلاً من ذلك.',
          '**القارئ الذي يحتاج إلى محادثات جماعية أو قوالب أوامر متقدمة.** يغطي نظام إضافات SillyTavern مشاهد جماعية متعددة الشخصيات وتحكماً عميقاً في قوالب الأوامر لا يوفره Backyard AI.',
          '**القارئ الذي يريد اختيار نماذج غير محدود محلياً.** قائمة النماذج المحلية في Backyard AI منسّقة؛ لا تدعم استيراد أي ملف GGUF كما يفعل SillyTavern مع koboldcpp.',
          '**القارئ غير الراغب في الدفع مقابل نماذج مستضافة أكبر.** النماذج المحلية المجانية محدودة بنطاق 8B-13B تقريباً؛ الوصول إلى جودة Midnight Rose 70B أو Magnum 72B يتطلب اشتراكاً مدفوعاً في Backyard Cloud.',
          '**القارئ الذي يحتاج إلى أعمق تحكم في إدارة النماذج أو ضبط التكميم أو القياس المرجعي.** توفر أدوات LLM المحلية الأكثر تقنية تحكماً أدق في صيغ التكميم ومعاملات الاستدلال مما تكشفه واجهة Backyard AI المبسطة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Backyard AI مجاني؟',
            a: 'نعم، في الوضع المحلي. تطبيق سطح المكتب لأنظمة Windows و Mac مجاني للتنزيل، ولا يحتاج إلى حساب أو بطاقة ائتمان، ويتيح لك المحادثة مجاناً دون اتصال بالإنترنت مع نماذج تم تنزيلها محلياً. أما Backyard Cloud، الطبقة المستضافة الاختيارية للنماذج الأكبر والوصول عبر الجوال/الويب، فلديها خطة مجانية بالإضافة إلى ثلاث خطط مدفوعة: Standard (7 دولارات/شهرياً)، وAdvanced (18 دولاراً/شهرياً)، وPro (35 دولاراً/شهرياً).',
          },
          {
            q: 'ما الاسم السابق لـ Backyard AI؟',
            a: 'كان اسم Backyard AI سابقاً Faraday.dev. أُعيدت تسمية التطبيق إلى Backyard AI؛ ومفهوم محادثة الشخصيات المحلي الأساسي لم يتغير.',
          },
          {
            q: 'هل Backyard AI مفتوح المصدر؟',
            a: 'لا. Backyard AI مغلق المصدر، على عكس SillyTavern وRisuAI وAgnai، التي تنشر كود واجهتها الأمامية للتدقيق والتعديل من قبل المجتمع. لا تزال المحادثة في الوضع المحلي تعمل بالكامل على جهازك، لكن التطبيق نفسه غير مفتوح للفحص.',
          },
          {
            q: 'ما هو Character Hub؟',
            a: 'Character Hub هو مكتبة Backyard AI المدمجة التي تضم آلاف الشخصيات وأنماط الشخصية بالذكاء الاصطناعي التي أنشأها المستخدمون. بدلاً من كتابة بطاقة شخصية من الصفر، يتصفح معظم القراء الـ Hub ويختارون شخصية تناسب المحادثة أو القصة المرغوبة، ثم يتحدثون معها باستخدام نموذج تم تنزيله محلياً.',
          },
          {
            q: 'ما الجهاز الذي أحتاجه لتشغيل Backyard AI محلياً؟',
            a: 'يعمل Fimbulvetr 10.7B ونماذج لعب الأدوار المماثلة من فئة 8B-13B بسلاسة على بطاقة رسومات ألعاب بذاكرة VRAM سعة 16 GB. تحتاج أكبر النماذج المجتمعية المتاحة في Backyard Cloud (Midnight Rose 70B وMagnum 72B) تقريباً نفس فئة VRAM التي يحتاجها أي نموذج محلي من فئة 70B — نحو 42 GB من VRAM عند Q4_K_M — أو 36 GB فأكثر من الذاكرة الموحدة على Apple Silicon؛ للاستخدام المحلي (غير السحابي)، التزم بفئة 8B-13B ما لم يبلغ جهازك هذا السقف.',
          },
          {
            q: 'هل يعمل Backyard AI دون اتصال بالإنترنت؟',
            a: 'نعم، في الوضع المحلي. بمجرد تنزيل التطبيق ونموذج، تعمل المحادثة بالكامل على الجهاز دون الحاجة إلى اتصال بالإنترنت. تتطلب Backyard Cloud وتطبيقات الجوال والوصول عبر الويب اتصالاً بالإنترنت لأن الاستدلال يحدث على خوادم Backyard.',
          },
          {
            q: 'هل برنامج إحالة Backyard Cloud برنامج تسويق بالعمولة مدفوعة؟',
            a: 'لا. إحالة صديق تمنحه خصم 50% على شهره الأول، وتمنح المحيل رصيداً ترويجياً لاشتراكه الخاص — نحو 17.50 دولاراً لإحالة Pro، و9.00 دولارات لـ Advanced، و3.50 دولارات لـ Standard. هذا رصيد في الحساب، وليس دفعة نقدية.',
          },
          {
            q: 'كيف يقارن Backyard AI بـ SillyTavern؟',
            a: 'يقايض Backyard AI التخصيص بالبساطة: مثبّت واحد، وCharacter Hub مدمج، ولا خلفية منفصلة يجب إعدادها، لكنه تطبيق مغلق المصدر بلا محادثات جماعية. SillyTavern مفتوح المصدر بالكامل، ويدعم المحادثات الجماعية والتخصيص العميق لقوالب الأوامر عبر الإضافات، لكنه يتطلب إقرانه بخلفية منفصلة (koboldcpp أو text-generation-webui أو Ollama) وله منحنى تعلم أشد. راجع المقارنة الكاملة في [SillyTavern مقابل Agnai مقابل RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
          },
          {
            q: 'هل يمكنني استيراد بطاقات الشخصيات أو النماذج الخاصة بي إلى Backyard AI؟',
            a: 'يمكنك استيراد أو كتابة بطاقات شخصياتك الخاصة لاستخدامها مع أي نموذج تم تنزيله محلياً. اختيار النموذج في الوضع المحلي مقتصر على قائمة Backyard AI المنسّقة (متغيرات Llama وMistral وGemma، وإصدارات لعب الأدوار المضبوطة مثل Fimbulvetr 10.7B) — لا يدعم استيراد أي ملف GGUF كما يفعل إعداد koboldcpp مع SillyTavern.',
          },
          {
            q: 'هل يدعم Backyard AI التفاعل الصوتي؟',
            a: 'نعم. يتضمن الوضع المحلي التفاعل الصوتي إلى جانب المحادثة النصية، بالإضافة إلى إعدادات متقدمة مثل Lorebooks وAuthor\'s Notes وحجم السياق المخصص وإعدادات Sampler وGrammars.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يستحق Backyard AI مكانته كأسهل نقطة دخول لمحادثة الشخصيات المحلية بالذكاء الاصطناعي التي يغطيها هذا الموقع. الجمع بين تطبيق سطح مكتب مجاني، بلا حاجة لحساب، وCharacter Hub مليء بآلاف الشخصيات الجاهزة، يزيل أكبر عقبتين أمام تجربة لعب الأدوار المحلي: إعداد الخلفية وكتابة بطاقات الشخصيات. بالنسبة للقراء الذين يتجاوزون سقف النموذج المحلي، تتوسع خطط Backyard Cloud بسعر 7-35 دولاراً شهرياً إلى نماذج من فئة 70B (Midnight Rose 70B وMagnum 72B) دون الحاجة إلى ترقية الجهاز، ويدفع برنامج الإحالة رصيداً في الحساب بدلاً من نقود — من المفيد معرفة ذلك لضبط التوقعات بشكل صحيح. المقايضة حقيقية: التطبيق مغلق المصدر، ولا يوفر محادثات جماعية، ويحصر اختيار النموذج المحلي في قائمة منسّقة، لذا يجب على القراء الذين يريدون مكدساً قابلاً للتدقيق ومفتوحاً بالكامل وقابلاً للتخصيص العميق استخدام SillyTavern بدلاً من ذلك. بالنسبة لكل من يريد تشغيل لعب الأدوار في دقائق بدلاً من ساعات، يُعد Backyard AI محطة أولى قوية.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Backyard AI الرسمي](https://backyard.ai) — نظرة عامة على المنتج، التنزيلات، Character Hub، أسعار Backyard Cloud.',
          '[وثائق Backyard AI — دليل البدء](https://backyard.ai/docs/start-guide/overview) — الإعداد واختيار النماذج ونظرة عامة على الميزات.',
          '[نماذج Backyard AI على Hugging Face](https://huggingface.co/backyardai) — ملفات نماذج GGUF الموزعة للاستخدام مع التطبيق.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة أمامية للعب الأدوار](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — البديل مفتوح المصدر الأكثر قابلية للتخصيص؛ مقارنة كاملة بين الخلفية والواجهة الأمامية.',
          '[نماذج LLM المحلية غير الخاضعة للرقابة للكتابة الإبداعية: الأخلاقيات والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) — إرشادات على مستوى النموذج تنطبق على أي واجهة أمامية للعب الأدوار المحلي، بما في ذلك Backyard AI.',
          '[أوامر LLM المحلية لكتّاب القصص](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — هياكل أوامر لصوت الشخصية واتساق السرد.',
          '[أفضل نماذج LLM المحلية للكتابة الإبداعية 2026](/ar/power-local-llm/best-local-llm-creative-writing-2026) — مقارنة على مستوى النموذج لاختيار ما يُشغَّل داخل Backyard AI أو أي واجهة أمامية أخرى.',
          '[مراجعة Loci AI: ذكاء اصطناعي دون اتصال لأجهزة iPhone وAndroid وiPad وMac وWindows](/ar/power-local-llm/loci-ai-review-offline-local-ai) — تطبيق محادثة عام على الجهاز (غير مركّز على لعب الأدوار) للمقارنة.',
          '[دليل برمجيات LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل شامل للتطبيقات والأدوات لجميع المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Creative & Roleplay',
    heroImage: '/images/backyard-ai-review-local-roleplay-2026-hero-ko.webp',
    title: 'Backyard AI 리뷰(2026): 로컬 AI 캐릭터 채팅과 롤플레이',
    seoTitle: 'Backyard AI 2026 리뷰: 로컬 롤플레이와 캐릭터 채팅',
    intro:
      'Backyard AI(backyard.ai, 이전 명칭 Faraday.dev)는 AI 캐릭터 채팅과 롤플레이를 위해 특별히 제작된 Windows 및 Mac용 무료 폐쇄형 소스 데스크톱 앱입니다. Llama, Mistral, Gemma, 그리고 Fimbulvetr 10.7B와 같은 커뮤니티 제작 롤플레이 파인튜닝 모델을 계정이나 신용카드 없이 사용자의 하드웨어에서 완전히 로컬로 실행합니다. Character Hub는 처음부터 수천 개의 사용자 제작 페르소나를 제공하며, 강력한 로컬 GPU가 없는 독자를 위한 유료 옵션인 Backyard Cloud는 호스팅 추론을 추가로 제공합니다. 실질적인 질문은 로컬 롤플레이가 가능한지가 아닙니다 — SillyTavern과 RisuAI가 이미 이를 입증했습니다. 문제는 Backyard AI의 설치만 하면 되는 단순함이, 본 사이트에서 다루는 더 개방적이고 설정 자유도가 높은 프런트엔드와 비교했을 때 폐쇄형 소스 모델과 선별된 캐릭터 라이브러리라는 대가를 치를 가치가 있는지입니다.',
    metaDescription:
      'Backyard AI 2026 리뷰: Windows와 Mac용 무료 로컬 롤플레이 앱입니다. Character Hub, Fimbulvetr 10.7B, Backyard Cloud 요금제($7/$18/$35), 필요 하드웨어, Loci AI 및 SillyTavern과의 비교를 다룹니다.',
    twitterDescription:
      'Backyard AI 2026 리뷰: Windows/Mac용 무료 로컬 캐릭터 채팅, Character Hub, 선택적 Backyard Cloud 요금제, SillyTavern·Loci AI·RisuAI와의 비교.',
    audience:
      'Backyard AI의 손쉬운 로컬 앱, 유료 클라우드 요금제, SillyTavern·Agnai·RisuAI 같은 설정 자유도가 높은 로컬 프런트엔드 사이에서 고민하는 롤플레이 및 AI 캐릭터 채팅 사용자를 위한 콘텐츠입니다 — 설정, 필요 하드웨어, 요금제, 프라이버시 트레이드오프를 다룹니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Backyard AI 공식 사이트 방문하기 →', url: 'https://backyard.ai', productName: 'Backyard AI', productCategory: 'software' },
    ],
    primaryTerm: 'Backyard AI review',
    targetKeywords: [
      'backyard ai review',
      'backyard ai local roleplay',
      'faraday.dev backyard ai',
      'backyard ai character hub',
      'backyard ai vs sillytavern',
      'backyard ai vs loci ai',
      'backyard cloud pricing',
      'fimbulvetr 10.7b backyard ai',
    ],
    current_models_mentioned: ['Fimbulvetr 10.7B', 'Llama 3.1 Instruct 8B', 'Mythomax-Kimiko 13B', 'Llama 3 Stheno V3.3', 'Chunky Lemon Cookie 11B', 'Llama 3 Jamet MK.V Blackroot 8B', 'Midnight Rose 70B', 'Magnum 72B', 'Psyonic-Cetacean Ultra 20B'],
    current_hardware_mentioned: ['16GB VRAM 게이밍 GPU', 'RTX 4090 24GB', 'Apple Silicon 36GB 이상 통합 메모리'],
    leadAnswerBlock:
      '**Backyard AI는 프런트엔드를 설정하지 않고 자신의 기기에서 AI 캐릭터 채팅과 롤플레이를 하고 싶은 독자에게 적합합니다.** Windows와 Mac용 무료 데스크톱 앱은 계정도, 신용카드도, koboldcpp나 text-generation-webui 같은 백엔드의 수동 설정도 필요하지 않습니다. 설치한 뒤 내장된 Character Hub에서 캐릭터를 고르거나 Fimbulvetr 10.7B 같은 커뮤니티 롤플레이 모델을 선택하면 완전히 오프라인으로 채팅을 시작할 수 있습니다. 강력한 GPU가 없는 독자는 Backyard Cloud(월 7~35달러)를 결제해 더 큰 호스팅 모델을 실행할 수 있습니다. 깊은 프롬프트 템플릿 제어, 그룹 채팅, 완전한 오픈소스 스택을 원하는 독자는 [SillyTavern](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)이나 [Loci AI](/ko/power-local-llm/loci-ai-review-offline-local-ai)와 비교해야 합니다.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Backyard AI for local roleplay and character chat?',
        answer:
          'Use Backyard AI if you want a free, no-setup desktop app for AI character chat that runs open-source models entirely on your own Windows or Mac machine, with a built-in Character Hub of user-made personas. Skip it if you need an open-source, fully auditable stack, deep prompt-template customization, or group chat features — SillyTavern gives you all three at the cost of a harder setup.',
        bullets: [
          'Free desktop app for Windows and Mac; no account or credit card required for local mode.',
          'Runs Llama, Mistral, Gemma, and roleplay fine-tunes like Fimbulvetr 10.7B fully offline.',
          'Character Hub: thousands of user-created AI characters and personas built in.',
          'Optional Backyard Cloud tiers ($7/$18/$35 per month) add hosted inference for larger models without a local GPU.',
          'Closed-source app — unlike SillyTavern, the frontend code itself is not open for audit or modification.',
        ],
        updatedDate: '2026-09-02',
      },
      ko: {
        question: '로컬 롤플레이와 캐릭터 채팅에 Backyard AI를 사용해야 합니까?',
        answer:
          '설정 없이 바로 사용할 수 있는 무료 데스크톱 앱으로, 자신의 Windows 또는 Mac 기기에서 오픈소스 모델을 완전히 로컬로 실행하고 사용자 제작 페르소나가 담긴 Character Hub를 내장한 AI 캐릭터 채팅을 원한다면 Backyard AI를 사용하십시오. 오픈소스로 완전히 검증 가능한 스택, 깊은 프롬프트 템플릿 커스터마이징, 그룹 채팅 기능이 필요하다면 사용하지 마십시오 — SillyTavern이 이 세 가지를 모두 제공하지만 설정이 더 어렵습니다.',
        bullets: [
          'Windows와 Mac용 무료 데스크톱 앱으로, 로컬 모드에서는 계정이나 신용카드가 필요 없습니다.',
          'Llama, Mistral, Gemma, Fimbulvetr 10.7B 같은 롤플레이 파인튜닝 모델을 완전히 오프라인으로 실행합니다.',
          'Character Hub: 수천 개의 사용자 제작 AI 캐릭터와 페르소나가 내장되어 있습니다.',
          '선택적 Backyard Cloud 요금제(월 7/18/35달러)는 로컬 GPU 없이도 더 큰 모델의 호스팅 추론을 추가합니다.',
          '폐쇄형 소스 앱입니다 — SillyTavern과 달리 프런트엔드 코드 자체는 검증이나 수정을 위해 공개되어 있지 않습니다.',
        ],
        updatedDate: '2026-09-02',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Backyard AI란 무엇인가', anchor: 'what-is-backyard-ai' },
      { label: '로컬 모드 작동 방식', anchor: 'how-local-mode-works' },
      { label: '트레이드오프: 장점과 한계', anchor: 'tradeoffs' },
      { label: 'Backyard Cloud 요금제', anchor: 'backyard-cloud-pricing' },
      { label: 'Windows와 Mac에서의 Backyard AI', anchor: 'platforms' },
      { label: 'Backyard AI 대 대안', anchor: 'vs-alternatives' },
      { label: 'Backyard AI를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Backyard AI를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 자료', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'Backyard AI(backyard.ai, 이전 Faraday.dev)는 AI 캐릭터 채팅과 롤플레이에 초점을 맞춘 Windows와 Mac용 무료 폐쇄형 소스 데스크톱 앱입니다.',
          '로컬 모드는 무료이며 계정이 필요 없고, 모델을 다운로드하면 완전히 오프라인으로 작동합니다 — 모델에는 Llama, Mistral, Gemma, 그리고 Fimbulvetr 10.7B 같은 커뮤니티 롤플레이 파인튜닝 모델이 포함됩니다.',
          'Character Hub가 대표 기능입니다: 수천 개의 사전 제작된 커뮤니티 제작 AI 캐릭터가 있어 즉시 채팅할 수 있습니다.',
          '선택적 Backyard Cloud 요금제(Free/월 7/18/35달러)는 강력한 로컬 GPU가 없는 독자를 위해 더 큰 모델(Pro 요금제의 Midnight Rose 70B, Magnum 72B)의 호스팅 추론을 추가하며, 데스크톱과 동기화되는 모바일 및 웹 액세스도 제공합니다.',
          '하드웨어 기준: Fimbulvetr 10.7B와 유사한 8B~13B 롤플레이 병합 모델은 16GB VRAM 게이밍 GPU에서 원활하게 실행됩니다. 가장 큰 커뮤니티 모델은 24GB 이상의 VRAM 또는 Apple Silicon에서 36GB 이상의 통합 메모리가 필요합니다.',
          'Backyard AI는 커스터마이징을 단순함과 맞바꿉니다: SillyTavern과 비교해 그룹 채팅이 없고, 오픈소스 프런트엔드 코드가 없으며, 로컬 모델 목록도 (무제한이 아닌) 선별된 목록입니다.',
          '추천 프로그램은 현금 커미션이 아니라 계정 청구 크레딧을 지급합니다 — 전통적인 제휴 프로그램과 혼동하지 마십시오.',
        ],
      },
      whatIsBackyardAI: {
        id: 'what-is-backyard-ai',
        title: 'Backyard AI란 무엇인가',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Backyard AI는 AI 캐릭터 채팅과 롤플레이를 위해 오픈소스 LLM을 로컬로 실행하는 Windows와 Mac용 무료 폐쇄형 소스 데스크톱 앱이며, 호스팅 추론을 위한 선택적 유료 클라우드 요금제를 제공합니다.' },
          { type: 'plain-terms', text: '롤플레이에 특화된 Ollama에 채팅 인터페이스를 결합하고 수천 개의 완성된 캐릭터를 미리 패키징해 둔 것이라고 생각하면 됩니다 — SillyTavern이 요구하는 백엔드/프런트엔드 분리가 필요 없습니다.' },
        ],
        content: [
          'Backyard AI는 이전에 Faraday.dev라는 이름으로 불리던 데스크톱 애플리케이션으로, 소규모 독립 팀이 하나의 목표를 위해 개발했습니다: 백엔드(koboldcpp, text-generation-webui, Ollama)와 별도의 프런트엔드(SillyTavern, Agnai, RisuAI)를 직접 조합하고 싶지 않은 독자도 로컬 AI 캐릭터 채팅과 롤플레이에 쉽게 접근할 수 있게 만드는 것입니다.',
          '이 앱은 무료이며 폐쇄형 소스입니다 — SillyTavern, RisuAI, Agnai와 달리 프런트엔드 코드는 커뮤니티의 검증이나 수정을 위해 공개되지 않습니다. 로컬 모드에서는 모델을 다운로드하면 계정도, 신용카드도, 인터넷 연결도 필요하지 않습니다.',
          '핵심 기능은 Character Hub입니다: 수천 개의 사용자 제작 AI 캐릭터와 페르소나를 담은 내장 라이브러리입니다. 캐릭터 카드를 처음부터 작성하는 대신(SillyTavern의 일반적인 작업 방식), 대부분의 독자는 먼저 Hub를 둘러보고 원하는 대화나 스토리에 이미 맞는 캐릭터를 선택합니다.',
          '로컬 모드는 텍스트 채팅과 더불어 음성 상호작용을 지원하며, 고급 설정에서는 기본기에 익숙해진 뒤 더 많은 제어를 원하는 독자를 위해 Lorebook, Author\'s Note, 사용자 지정 컨텍스트 크기, 샘플러 설정, Grammars를 제공합니다.',
        ],
      },
      howLocalModeWorks: {
        id: 'how-local-mode-works',
        title: '로컬 모드 작동 방식',
        content: [
          '로컬 모드는 무료 오프라인 경로입니다: 앱을 설치하고 모델을 다운로드하면 서버에 아무것도 전송하지 않고 채팅할 수 있습니다.',
        ],
        items: [
          '**모델 선택.** Backyard AI에는 캐릭터 채팅에 최적화된 선별된 오픈소스 모델 세트가 포함되어 있습니다 — Llama와 Mistral 기반 모델, Gemma 변형, 그리고 Fimbulvetr 10.7B와 같은 커뮤니티 롤플레이 파인튜닝 모델입니다. Fimbulvetr 10.7B는 범용 어시스턴트 작업이 아니라 캐릭터 일관성과 서사적 목소리를 위해 특별히 제작되었습니다.',
          '**계정 불필요.** 로컬 채팅은 가입, 결제 정보 입력, Backyard Cloud 연결 없이 작동합니다. 모든 것이 앱을 설치한 기기에서 실행되고 그곳에 머무릅니다.',
          '**Character Hub 탐색.** Hub에서 사전 제작된 캐릭터 카드를 선택하거나 직접 작성/가져올 수 있습니다 — 모든 캐릭터는 동일한 로컬 모델이 구동하지만, 캐릭터 카드가 성격, 배경 이야기, 어조를 부여합니다.',
          '**필요할 때 사용하는 고급 제어.** 컨텍스트에 주입되는 지속적인 세계관/캐릭터 정보인 Lorebook, 방향 지시인 Author\'s Note, 사용자 지정 컨텍스트 창 크기, 샘플러 설정(온도, top-p, 반복 페널티), 구조화된 출력 제약인 Grammars는 모두 Backyard Cloud 없이 로컬 모드에서 사용할 수 있습니다.',
          '**데스크톱과의 테더링.** 휴대폰이나 더 가벼운 기기에서 Backyard AI를 사용하는 독자는 전체 앱을 실행하는 더 강력한 데스크톱에 테더링해, 채팅 인터페이스는 가벼운 기기에 유지하면서 추론은 그 기기로 오프로드할 수 있습니다.',
        ],
        note: '모델 다운로드 크기와 정확한 VRAM 요구 사항은 선택한 양자화 수준과 컨텍스트 길이에 따라 달라집니다. 하드웨어를 구매하기 전에 backyard.ai에서 최신 모델 목록과 파일 크기를 확인하십시오. 최종 확인일: 2026년 9월 2일.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '트레이드오프: 장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '장점': '무료 로컬 모드, 계정 불필요',
            '실제 사용에서의 의미': '앱과 모델을 다운로드한 뒤 비용 없이 무기한 오프라인으로 채팅할 수 있습니다.',
            '한계 / 유의 사항': '선별된 로컬 목록을 벗어난 더 크거나 새로운 모델은 Backyard Cloud가 필요합니다.',
          },
          {
            '장점': 'Character Hub',
            '실제 사용에서의 의미': '수천 개의 완성된 AI 캐릭터 — 채팅을 시작하기 위해 캐릭터 카드를 작성할 필요가 없습니다.',
            '한계 / 유의 사항': '커뮤니티가 제출한 캐릭터의 품질은 다양하며, 수작업으로 선별한 세트에 비해 큐레이션이 고르지 않습니다.',
          },
          {
            '장점': '최소한의 설정',
            '실제 사용에서의 의미': '설치 파일 하나로 끝나며, SillyTavern처럼 별도로 백엔드/프런트엔드를 짝지을 필요가 없습니다.',
            '한계 / 유의 사항': '앱이 폐쇄형 소스이기 때문에 내부에서 무엇이 실행되는지에 대한 투명성이 낮습니다.',
          },
          {
            '장점': '로컬 프라이버시',
            '실제 사용에서의 의미': '로컬 모드 대화는 기기에서 처리되며, 별도로 설정하지 않는 한 Backyard Cloud로 전송되지 않습니다.',
            '한계 / 유의 사항': '폐쇄형 소스 코드이기 때문에 오픈소스 프런트엔드처럼 프라이버시 주장을 독립적으로 검증할 수 없습니다.',
          },
          {
            '장점': '선택적 클라우드 확장',
            '실제 사용에서의 의미': 'Backyard Cloud를 이용하면 강력한 GPU가 없는 독자도 어떤 기기에서든 70B급 모델(Midnight Rose 70B, Magnum 72B)을 실행할 수 있습니다.',
            '한계 / 유의 사항': '클라우드 요금제는 월 7~35달러이며, 클라우드 모델과의 대화는 로컬이 아니라 Backyard의 서버에서 처리됩니다.',
          },
          {
            '장점': '로컬에서 사용 가능한 고급 제어',
            '실제 사용에서의 의미': 'Lorebook, Author\'s Note, 사용자 지정 컨텍스트 크기, 샘플러 설정은 구독 없이도 작동합니다.',
            '한계 / 유의 사항': '그룹 채팅이나 시각적 노드 기반 워크플로 편집기는 없습니다 — 파워 유저에게는 SillyTavern의 확장 기능이 더 깊이 들어갑니다.',
          },
          {
            '장점': '기기 간 연속성(클라우드)',
            '실제 사용에서의 의미': 'Backyard Cloud는 데스크톱, 웹, iOS, Android 간에 동일한 캐릭터와 채팅을 동기화합니다.',
            '한계 / 유의 사항': '이 편의성은 유료 클라우드 요금제에만 적용되며, 완전히 오프라인으로 작동하는 로컬 모드 채팅에는 적용되지 않습니다.',
          },
          {
            '장점': '커뮤니티 롤플레이 파인튜닝 모델',
            '실제 사용에서의 의미': 'Fimbulvetr 10.7B와 유사한 병합 모델은 범용 어시스턴트 동작이 아니라 캐릭터 목소리의 일관성을 위해 특별히 조정되었습니다.',
            '한계 / 유의 사항': '이러한 병합 모델은 더 큰 프런티어 모델이나 범용 지시 모델만큼 안정적으로 추론하지 못합니다.',
          },
        ],
      },
      backyardCloudPricing: {
        id: 'backyard-cloud-pricing',
        itemHeadings: true,
        title: 'Backyard Cloud 요금제',
        content: [
          'Backyard Cloud는 선택 사항입니다 — 로컬 모드만으로도 무기한 무료로 채팅을 이용할 수 있습니다. 클라우드 요금제는 강력한 GPU 없이 더 큰 호스팅 모델이나 기기 간 동기화를 원하는 독자를 위해 존재합니다.',
        ],
        columns: ['요금제', '가격', '제공 내용', '토큰 메모리 / 속도'],
        rows: [
          {
            '요금제': 'Free',
            '가격': '월 0달러',
            '제공 내용': 'Fimbulvetr 10.7B 일일 100회 메시지, Advanced/Pro급 모델 일일 무료 25회 메시지, 웹 + 데스크톱 + iOS + Android 앱',
            '토큰 메모리 / 속도': '4,096토큰 모델 메모리',
          },
          {
            '요금제': 'Standard',
            '가격': '월 7달러',
            '제공 내용': 'Fimbulvetr 10.7B, Llama 3.1 Instruct 8B, Mythomax-Kimiko 13B, Llama 3 Stheno V3.3에서 무제한 메시지',
            '토큰 메모리 / 속도': '4,096토큰 메모리 / 최대 30토큰/초',
          },
          {
            '요금제': 'Advanced',
            '가격': '월 18달러',
            '제공 내용': 'Chunky Lemon Cookie 11B, Llama 3 Jamet MK.V Blackroot 8B 추가. Standard 모델은 8k 컨텍스트로 확장',
            '토큰 메모리 / 속도': '8,192토큰 메모리 / 최대 40토큰/초',
          },
          {
            '요금제': 'Pro',
            '가격': '월 35달러',
            '제공 내용': 'Midnight Rose 70B, Magnum 72B, Psyonic-Cetacean Ultra 20B 추가. 전문가 파라미터(Grammars), 전용 지원 채널',
            '토큰 메모리 / 속도': '6,000~30,000토큰 메모리',
          },
        ],
        note: 'Backyard Cloud는 현금 커미션형 제휴 프로그램이 아니라 추천 프로그램을 운영합니다: 친구를 추천하면 상대방은 첫 달 50% 할인을 받고, 추천인 본인은 자신의 계정에 적용되는 프로모션 청구 크레딧(Pro 추천 약 17.50달러, Advanced 약 9.00달러, Standard 약 3.50달러)을 받습니다 — 현금 지급이 아닙니다. 요금은 2026년 9월 2일 기준 backyard.ai에서 확인했습니다. SaaS 요금은 변동될 수 있으므로 구독 전 최신 요금제를 확인하십시오.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Windows와 Mac에서의 Backyard AI',
        columns: ['플랫폼', '기대할 수 있는 것', '중요 참고 사항'],
        rows: [
          {
            '플랫폼': 'Windows',
            '기대할 수 있는 것': 'backyard.ai에서 무료 설치 파일을 받을 수 있습니다. 로컬 추론은 하드웨어에 따라 GPU(NVIDIA CUDA) 또는 CPU/RAM을 사용합니다. Character Hub와 로컬 모델 라이브러리를 전부 이용할 수 있습니다.',
            '중요 참고 사항': '16GB VRAM 게이밍 GPU는 Fimbulvetr 10.7B급 모델을 원활하게 실행합니다. CPU 전용 구성도 작동하지만 응답이 더 느립니다.',
          },
          {
            '플랫폼': 'Mac',
            '기대할 수 있는 것': 'Apple Silicon용 네이티브 앱입니다. 통합 메모리 덕분에 별도 GPU 없이도 더 큰 커뮤니티 모델을 실행할 수 있으며, Ollama와 LM Studio가 Apple Silicon을 활용하는 방식과 비슷합니다.',
            '중요 참고 사항': '36GB 이상의 통합 메모리는 더 큰 커뮤니티 롤플레이 병합 모델을 위한 여유를 제공합니다. 8~16GB 기본형 Mac은 더 작은 모델로 제한됩니다.',
          },
          {
            '플랫폼': '모바일 및 웹(Backyard Cloud 전용)',
            '기대할 수 있는 것': 'iOS, Android, 웹 앱은 호스팅 추론을 위해 Backyard Cloud에 연결되며, 동일한 캐릭터와 채팅 기록을 데스크톱과 동기화합니다.',
            '중요 참고 사항': '모바일/웹 액세스에는 Backyard Cloud 요금제(Free 등급 포함)가 필요합니다 — 휴대폰에는 오프라인 로컬 추론 모드가 없습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Backyard AI 대 대안',
        columns: ['앱', '최적 용도', '설정 난이도', '모델 유연성', '소스 모델', '주요 한계'],
        rows: [
          {
            '앱': 'Backyard AI',
            '최적 용도': '내장 Character Hub를 갖춘 손쉬운 로컬 캐릭터 채팅',
            '설정 난이도': '최소(설치 파일 하나, 모델 다운로드)',
            '모델 유연성': '선별된 오픈 모델 + 커뮤니티 롤플레이 파인튜닝 모델',
            '소스 모델': '폐쇄형 소스 앱, 로컬 사용 무료',
            '주요 한계': '그룹 채팅 없음, 폐쇄형 소스 프런트엔드, 선별된 모델 목록',
          },
          {
            '앱': 'SillyTavern',
            '최적 용도': '최대한의 커스터마이징, 그룹 채팅, 프롬프트 템플릿 제어',
            '설정 난이도': '높음(백엔드 + 프런트엔드 별도 구성)',
            '모델 유연성': 'koboldcpp/text-generation-webui/Ollama 백엔드를 통한 모든 GGUF 파일',
            '소스 모델': '완전 오픈소스',
            '주요 한계': '셋 중 가장 가파른 학습 곡선, 내장 캐릭터 라이브러리 없음',
          },
          {
            '앱': 'Loci AI',
            '최적 용도': '크로스 플랫폼 범용 온디바이스 채팅(롤플레이 특화 아님)',
            '설정 난이도': '최소(다운로드 후 채팅)',
            '모델 유연성': '선별 라이브러리(약 10개 모델), GGUF 가져오기 불가',
            '소스 모델': '폐쇄형 소스 앱, 로컬 사용 무료',
            '주요 한계': 'Lorebook이나 Character Hub 같은 캐릭터/롤플레이 기능용으로 설계되지 않음',
          },
          {
            '앱': 'RisuAI',
            '최적 용도': 'SillyTavern보다 가벼운 설정의 입문용 롤플레이 UI',
            '설정 난이도': '중간(웹 또는 셀프 호스팅, 여전히 백엔드 필요)',
            '모델 유연성': '연결된 백엔드를 통한 모든 GGUF 파일',
            '소스 모델': '오픈소스',
            '주요 한계': 'SillyTavern보다 작은 확장 생태계, 여전히 별도 백엔드 필요',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Backyard AI를 사용해야 하는 사람',
        items: [
          '**로컬 AI 롤플레이를 처음 접하는 독자.** Backyard AI는 백엔드/프런트엔드 분리를 완전히 없앱니다 — 설치 파일 하나, 앱 하나로 Character Hub에 즉시 접근할 수 있습니다. 본 사이트에서 다루는 로컬 캐릭터 채팅 중 가장 쉬운 입문 경로입니다.',
          '**완성된 캐릭터를 원하는 독자.** Character Hub에서 수천 개의 사전 제작 페르소나를 둘러보는 것이 캐릭터 카드를 처음부터 작성하는 것보다, 특히 첫 세션에서 훨씬 수월합니다.',
          '**강력한 GPU는 없지만 더 큰 모델을 쓰고 싶은 독자.** Backyard Cloud의 Standard/Advanced/Pro 요금제는 하드웨어를 구매하지 않고도 70B급 모델(Midnight Rose 70B, Magnum 72B)에 접근할 수 있게 해줍니다.',
          '**기기 간 연속성을 원하는 독자.** Backyard Cloud는 데스크톱, 웹, iOS, Android 간에 채팅과 캐릭터를 동기화합니다 — PC에서 시작한 대화를 휴대폰에서 이어가기에 유용합니다.',
          '**깊은 설정보다 단순함을 중시하는 독자.** SillyTavern의 확장 생태계를 배우지 않아도 Lorebook, Author\'s Note, 샘플러 설정을 이용할 수 있습니다.',
          '**예산이 한정되어 있고 프라이버시를 중시하는 독자.** 로컬 모드는 무료이고 계정이 필요 없으며 대화를 기기에 보관합니다 — 완전한 클라우드 서비스와 완전한 DIY 오픈소스 스택 사이의 합리적인 절충안입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Backyard AI를 사용하지 말아야 하는 사람',
        items: [
          '**검증 가능하고 완전히 오픈소스인 프런트엔드를 원하는 독자.** Backyard AI의 앱 코드는 폐쇄형 소스입니다. 앱이 자신의 데이터로 정확히 무엇을 하는지 확인해야 하거나 프런트엔드를 수정하고 싶은 독자는 대신 [SillyTavern](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)이나 RisuAI를 사용해야 합니다.',
          '**그룹 채팅이나 고급 프롬프트 템플릿이 필요한 독자.** SillyTavern의 확장 생태계는 Backyard AI가 제공하지 않는 다중 캐릭터 그룹 장면과 깊은 프롬프트 템플릿 제어를 다룹니다.',
          '**로컬에서 무제한 모델 선택을 원하는 독자.** Backyard AI의 로컬 모델 목록은 선별되어 있으며, koboldcpp와 SillyTavern 조합처럼 임의의 GGUF 파일을 가져오는 것을 지원하지 않습니다.',
          '**더 큰 호스팅 모델에 비용을 지불하고 싶지 않은 독자.** 무료 로컬 모델은 대략 8B~13B 범위로 제한되어 있으며, Midnight Rose 70B나 Magnum 72B 수준의 품질에 도달하려면 유료 Backyard Cloud 구독이 필요합니다.',
          '**모델 관리, 양자화 조정, 벤치마킹에 대한 가장 깊은 제어가 필요한 독자.** 더 기술적인 로컬 LLM 도구는 Backyard AI의 단순화된 인터페이스가 드러내는 범위보다 양자화 형식과 추론 파라미터에 대해 더 세밀한 제어를 제공합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Backyard AI는 무료입니까?',
            a: '네, 로컬 모드는 무료입니다. Windows와 Mac용 데스크톱 앱은 무료로 다운로드할 수 있고 계정이나 신용카드가 필요 없으며, 로컬로 다운로드한 모델과 오프라인으로 무료 채팅할 수 있습니다. 더 큰 모델과 모바일/웹 액세스를 위한 선택적 호스팅 요금제인 Backyard Cloud는 무료 요금제와 함께 세 가지 유료 요금제를 제공합니다: Standard(월 7달러), Advanced(월 18달러), Pro(월 35달러).',
          },
          {
            q: 'Backyard AI의 이전 이름은 무엇입니까?',
            a: 'Backyard AI는 이전에 Faraday.dev라는 이름이었습니다. 앱은 Backyard AI로 리브랜딩되었으며, 근본적인 로컬 우선 캐릭터 채팅 개념은 동일합니다.',
          },
          {
            q: 'Backyard AI는 오픈소스입니까?',
            a: '아닙니다. Backyard AI는 폐쇄형 소스이며, 프런트엔드 코드를 커뮤니티 검증과 수정을 위해 공개하는 SillyTavern, RisuAI, Agnai와는 다릅니다. 로컬 모드의 채팅 자체는 여전히 기기에서 완전히 실행되지만, 앱 자체는 검사를 위해 공개되어 있지 않습니다.',
          },
          {
            q: 'Character Hub란 무엇입니까?',
            a: 'Character Hub는 수천 개의 사용자 제작 AI 캐릭터와 페르소나를 담은 Backyard AI의 내장 라이브러리입니다. 캐릭터 카드를 처음부터 작성하는 대신, 대부분의 독자는 Hub를 둘러보고 원하는 대화나 스토리에 맞는 캐릭터를 선택한 뒤 로컬로 다운로드한 모델을 사용해 채팅합니다.',
          },
          {
            q: 'Backyard AI를 로컬로 실행하려면 어떤 하드웨어가 필요합니까?',
            a: 'Fimbulvetr 10.7B와 유사한 8B~13B 롤플레이 튜닝 모델은 16GB VRAM 게이밍 GPU에서 원활하게 실행됩니다. Backyard Cloud에서 이용 가능한 가장 큰 커뮤니티 모델(Midnight Rose 70B, Magnum 72B)은 다른 70B급 로컬 모델과 거의 같은 VRAM 등급을 필요로 합니다 — Q4_K_M 기준 약 42GB VRAM — 또는 Apple Silicon에서 36GB 이상의 통합 메모리가 필요합니다. 로컬(비클라우드) 용도로는 하드웨어가 이 상한선에 도달하지 않는 한 8B~13B 등급을 유지하는 것이 좋습니다.',
          },
          {
            q: 'Backyard AI는 오프라인에서 작동합니까?',
            a: '네, 로컬 모드에서는 작동합니다. 앱과 모델을 다운로드하면 인터넷 연결 없이도 채팅이 기기에서 완전히 실행됩니다. Backyard Cloud, 모바일 앱, 웹 액세스는 추론이 Backyard의 서버에서 이루어지므로 인터넷 연결이 필요합니다.',
          },
          {
            q: 'Backyard Cloud의 추천 프로그램은 유료 제휴 프로그램입니까?',
            a: '아닙니다. 친구를 추천하면 상대방은 첫 달 50% 할인을 받고, 추천인 본인은 자신의 구독에 적용되는 프로모션 청구 크레딧을 받습니다 — Pro 추천은 약 17.50달러, Advanced는 9.00달러, Standard는 3.50달러 정도입니다. 이는 계정 크레딧이며 현금 지급이 아닙니다.',
          },
          {
            q: 'Backyard AI는 SillyTavern과 비교해 어떻습니까?',
            a: 'Backyard AI는 커스터마이징을 단순함과 맞바꿉니다: 설치 파일 하나, 내장 Character Hub, 별도로 구성할 백엔드가 없지만, 그룹 채팅이 없는 폐쇄형 소스 앱입니다. SillyTavern은 완전 오픈소스이며 확장 기능을 통한 그룹 채팅과 깊은 프롬프트 템플릿 커스터마이징을 지원하지만, 별도의 백엔드(koboldcpp, text-generation-webui, Ollama)와 짝을 이뤄야 하고 학습 곡선도 더 가파릅니다. 전체 비교는 [SillyTavern 대 Agnai 대 RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)를 참고하십시오.',
          },
          {
            q: 'Backyard AI에 나만의 캐릭터 카드나 모델을 가져올 수 있습니까?',
            a: '로컬로 다운로드한 모든 모델에서 사용할 나만의 캐릭터 카드를 가져오거나 작성할 수 있습니다. 로컬 모드의 모델 선택은 Backyard AI의 선별된 목록(Llama, Mistral, Gemma 변형, Fimbulvetr 10.7B 같은 롤플레이 파인튜닝 모델)으로 제한됩니다 — koboldcpp와 SillyTavern 조합처럼 임의의 GGUF 파일을 가져오는 것은 지원하지 않습니다.',
          },
          {
            q: 'Backyard AI는 음성 상호작용을 지원합니까?',
            a: '네. 로컬 모드는 텍스트 채팅과 더불어 음성 상호작용을 포함하며, Lorebook, Author\'s Note, 사용자 지정 컨텍스트 크기, 샘플러 설정, Grammars 같은 고급 설정도 제공합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Backyard AI는 본 사이트에서 다루는 로컬 AI 캐릭터 채팅 중 가장 마찰이 적은 진입점으로서의 위치를 확보하고 있습니다. 무료 데스크톱 앱, 계정 불필요, 그리고 수천 개의 완성된 페르소나로 채워진 Character Hub의 조합은 로컬 롤플레이를 시도하는 데 가장 큰 두 가지 장벽인 백엔드 설정과 캐릭터 카드 작성을 없앱니다. 로컬 모델의 한계를 넘어서고 싶은 독자에게는, 월 7~35달러의 Backyard Cloud 요금제가 하드웨어 업그레이드 없이도 70B급 모델(Midnight Rose 70B, Magnum 72B)까지 확장되며, 추천 프로그램은 현금이 아니라 계정 크레딧을 지급합니다 — 기대치를 올바르게 설정하는 데 알아둘 만한 사실입니다. 트레이드오프는 실재합니다: 이 앱은 폐쇄형 소스이고, 그룹 채팅을 제공하지 않으며, 로컬 모델 선택을 선별된 목록으로 제한하므로, 검증 가능하고 완전히 개방적이며 깊이 커스터마이징 가능한 스택을 원하는 독자는 대신 SillyTavern을 사용해야 합니다. 몇 시간이 아니라 몇 분 만에 롤플레이를 시작하고 싶은 다른 모든 사람에게, Backyard AI는 강력한 첫 번째 선택지입니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Backyard AI 공식 사이트](https://backyard.ai) — 제품 개요, 다운로드, Character Hub, Backyard Cloud 요금제.',
          '[Backyard AI 문서 — 시작 가이드](https://backyard.ai/docs/start-guide/overview) — 설정, 모델 선택, 기능 개요.',
          '[Hugging Face의 Backyard AI 모델](https://huggingface.co/backyardai) — 앱과 함께 사용하도록 배포된 GGUF 모델 파일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[SillyTavern 대 Agnai 대 RisuAI: 최고의 롤플레이 프런트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 오픈소스이며 설정 자유도가 더 높은 대안. 백엔드/프런트엔드 전체 비교.',
          '[검열 없는 로컬 LLM 창작 글쓰기: 윤리, 합법성, 모범 사례](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics) — Backyard AI를 포함한 모든 로컬 롤플레이 프런트엔드에 적용되는 모델 수준 가이드.',
          '[소설가를 위한 로컬 LLM 프롬프트](/ko/power-local-llm/local-llm-prompts-for-fiction-writers) — 캐릭터 목소리와 서사적 일관성을 위한 프롬프트 구조.',
          '[2026년 창작 글쓰기를 위한 최고의 로컬 LLM](/ko/power-local-llm/best-local-llm-creative-writing-2026) — Backyard AI나 다른 프런트엔드 안에서 무엇을 실행할지 고르기 위한 모델 수준 비교.',
          '[Loci AI 리뷰: iPhone, Android, iPad, Mac, Windows용 오프라인 AI](/ko/power-local-llm/loci-ai-review-offline-local-ai) — 비교를 위한 범용(롤플레이 특화가 아닌) 온디바이스 채팅 앱.',
          '[2026년 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼을 아우르는 포괄적인 앱 및 도구 디렉터리.',
        ],
      },
    },
  },
}
