// PAIOS Review: Offline Gemini Nano Chat for Android
// Slug: paios-review
// Companion to: google-ai-edge-gallery-review, layla-review, pocketpal-ai-review, off-grid-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-en.webp',
    title: 'PAIOS Review: Offline Gemini Nano Chat for Android',
    seoTitle: 'PAIOS Review: Offline Gemini Nano Chat for Android',
    intro:
      'PAIOS (Personal AI Operating System) is a free, open-source Android app that gives Google\'s on-device Gemini Nano model a chat interface, with multiple chats, custom prompts, and temperature controls. This review covers what it does, which phones it works on, and where it falls short, using the project\'s own README, changelog, and Google Play listing.',
    metaDescription:
      'PAIOS review: free, open-source Android chat app (Unlicense) for Google\'s on-device Gemini Nano. Features, supported devices, privacy details, limits, and how it compares to Layla and PocketPal AI.',
    twitterDescription:
      'PAIOS review: an Android client for Gemini Nano via Google AI Core. Which phones work, what the changelog says about network use, and where it falls short.',
    audience:
      'Android users with a Pixel 9 or newer (or another AICore-supported phone) who want a free, open-source, on-device chat app for Gemini Nano — covers features, device support, privacy, limits, and how PAIOS compares to other Android local-AI apps.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_models_mentioned: ['Gemini Nano'],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS is a chat front end for Google\'s Gemini Nano model that runs entirely on an Android phone through Google AI Core, with its code released into the public domain under the [Unlicense](https://github.com/Puzzaks/PAIOS).** It is a client, not a model library: it only works on phones where AI Core is supported (the README names the Pixel 9 and 10 series as examples) and only with Gemini Nano. The project labels itself alpha, and this review (version 1.1.8) is based on its public documentation, not hands-on device testing.',
    quickAnswerTop: {
      en: {
        question: 'Is PAIOS worth installing on an Android phone?',
        answer:
          'Yes, if you own a phone with Google AI Core support and want a free, open-source way to chat with Gemini Nano offline, with per-chat prompts and temperature control. Skip it if you want to choose between many models or import your own: PAIOS only talks to Gemini Nano. Layla, PocketPal AI, and Off Grid AI cover broader model choice.',
        bullets: [
          'Free on Google Play and as a GitHub APK; open source under the Unlicense.',
          'Runs Gemini Nano on-device through Google AI Core; no model import and no model catalogue.',
          'Needs a phone with AI Core support, per the README (Pixel 9/10 series given as examples).',
          'Multiple chats, custom instructions, temperature and token controls, and an editable prompt library.',
          'Self-described alpha software on a developer-preview model: expect rough edges.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get PAIOS', anchor: 'get-it' },
      { label: 'PAIOS at a Glance', anchor: 'at-a-glance' },
      { label: 'What PAIOS Is', anchor: 'what-is-paios' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features and Controls', anchor: 'features' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'PAIOS vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use PAIOS', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PAIOS', anchor: 'who-should-not-use' },
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
            text: 'PAIOS, built by developer Puzzak, lets you chat with Gemini Nano fully on-device through Google AI Core, with multiple chats, custom prompts, and temperature controls; it costs nothing and its source is public.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat window for the small AI model that Google already built into supported Android phones: no account, no cloud model, and no model files to manage, but also no choice of model.',
          },
        ],
        items: [
          'Version reviewed: 1.1.8, the latest [GitHub release](https://github.com/Puzzaks/PAIOS/releases).',
          'Price and license: free, with no in-app purchases listed on [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios); the code is public domain under the Unlicense.',
          'Model: Gemini Nano only, run by Google AI Core on the phone; PAIOS cannot load other models.',
          'Platform: Android only, and only on AI Core-supported phones (see Device Requirements).',
          'Maturity: the developer labels it alpha, and the project had its last commit in May 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'Get PAIOS',
        content: [
          '**PAIOS is available from Google Play and as a direct APK on GitHub.** Both are free. Use the Play listing for automatic updates, or the GitHub APK if you prefer to install outside the Play Store.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists PAIOS alongside other on-device and local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Google Play',
            'Get It': '[PAIOS - Offline AI on Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Channel': 'GitHub APK',
            'Get It': '[PAIOS releases on GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Channel': 'Source code',
            'Get It': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Since version 1.1.2 the app uses a new package name, and the developer says older versions no longer work because of a Play Store listing issue. Install a current build rather than an old APK.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS at a Glance',
        columns: ['Attribute', 'PAIOS'],
        rows: [
          { 'Attribute': 'Platform', 'PAIOS': 'Android only' },
          { 'Attribute': 'Price', 'PAIOS': 'Free' },
          { 'Attribute': 'License', 'PAIOS': 'Unlicense (public domain)' },
          { 'Attribute': 'Runs fully offline', 'PAIOS': 'Yes, on-device via Google AI Core' },
          { 'Attribute': 'Import your own models', 'PAIOS': 'Not stated; Gemini Nano only' },
          { 'Attribute': 'In-app model downloads', 'PAIOS': 'Not stated' },
          { 'Attribute': 'Image input', 'PAIOS': 'Not stated; text interface' },
          { 'Attribute': 'Voice input / output', 'PAIOS': 'Not stated' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. "Not stated" means the README, roadmap, and changelog do not mention the feature, not that it was tested and found missing.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'What PAIOS Is',
        content: [
          '**PAIOS is a front end for Gemini Nano, not an inference engine.** Google AI Core, the Android system service that hosts Gemini Nano, runs the model. PAIOS adds the chat interface around it: separate conversations, prompts, and generation settings.',
          'It is built by a single developer, Puzzak, written in Dart, and published as an independent project that is not affiliated with Google. The repository was created in November 2025 and has about 170 GitHub stars.',
          'This review draws on the README, changelog, roadmap, GitHub releases, and the Google Play listing. It does not include hands-on testing on a device, so speed and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a normal app install on a supported phone, with no account.** The README does not describe the first-run flow in detail, so the steps below follow the documented requirements.',
        ],
        numberedItems: [
          {
            title: 'Check that your phone supports AI Core',
            whyItMatters: 'PAIOS only works where Google AI Core is available; confirm your device is supported before installing (see Device Requirements).',
          },
          {
            title: 'Install PAIOS',
            whyItMatters: 'Get it from [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) or the [GitHub releases page](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'Start a chat',
            whyItMatters: 'Create a conversation, then set its temperature, token limit, and prompt if you want something other than the defaults.',
          },
          {
            title: 'Optional: customize prompts',
            whyItMatters: 'Open the prompt manager to pick a system prompt, write your own, or import one from a Markdown file.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features and Controls',
        content: [
          '**PAIOS focuses on controlling how Gemini Nano is prompted, since the model itself is fixed.** Everything below comes from the README and changelog for versions up to 1.1.8.',
        ],
        items: [
          '**Multiple chats.** Create, rename, and pin conversations, each with its own context.',
          '**Generation controls.** Adjust temperature and maximum response tokens; since 1.1.7, temperature can be set per chat.',
          '**Prompt manager.** Since 1.1.6 you can pick, edit, and assign system and user prompts per chat; 1.1.8 added Markdown import and export of prompts.',
          '**Custom instructions.** Steer the model toward a persona or task, and optionally inject the current date, time, and app language.',
          '**Prompt transparency.** You can view the actual system prompt PAIOS sends to the model.',
          '**Auto-continue.** Since 1.1.7, long answers can be continued automatically, a workaround for the roughly 25-second generation limit described in the roadmap.',
          '**Translations.** Community contributors have added Turkish, German, and Chinese interface translations.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**PAIOS needs a phone with Google AI Core support.** The README states that it "requires a supported device with Google AI Core (e.g., Pixel 9/10 series)". It lists no minimum RAM or storage figure, so device support, not specs, is the gate.',
          'Google decides which phones receive AI Core and Gemini Nano, and that list can change. Check Google\'s own device documentation, or try the Play Store install on your phone, before assuming a non-Pixel device will work.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The README says PAIOS runs "entirely on-device using Google\'s AI Core. No data leaves your phone."** The Google Play listing shows the developer\'s data-safety declaration as "No data collected" and "No data shared".',
          'The changelog adds detail worth knowing. Version 1.1.2 introduced optional analytics for debugging and crash reporting, version 1.1.5 added crash reporting, and later versions mention Firebase Remote Config for app settings and prompts downloaded from GitHub. The README and the Play declaration do not mention these, and this review did not inspect the app\'s network traffic.',
          'If you need zero network contact, check the app\'s settings for the analytics option and inspect traffic yourself. The source is public, so the claims can be audited by anyone.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and public domain',
            'What it means in real use': 'No price, no account, and no license restrictions on the code.',
            'Limitation / caveat': 'A single maintainer; the last commit was in May 2026, so update pace is uncertain.',
          },
          {
            'Benefit': 'No model files to manage',
            'What it means in real use': 'Google AI Core supplies Gemini Nano, so there are no GGUF files or catalogues to deal with.',
            'Limitation / caveat': 'You cannot switch models or import your own; Gemini Nano is the only option.',
          },
          {
            'Benefit': 'Strong prompt controls',
            'What it means in real use': 'Per-chat prompts, temperature, and token limits make the small model easier to steer.',
            'Limitation / caveat': 'The README warns Gemini Nano is tuned for summarization and smart reply, and it may hallucinate or lose context.',
          },
          {
            'Benefit': 'Open source, auditable',
            'What it means in real use': 'Anyone can read the code behind the privacy claims.',
            'Limitation / caveat': 'The README says typing curses or slurs can soft-lock the app when auto-retry is on, because of the model\'s own filters.',
          },
          {
            'Benefit': 'Auto-continue for long answers',
            'What it means in real use': 'Responses cut off by the roughly 25-second generation window can be extended.',
            'Limitation / caveat': 'The changelog lists auto-continue as still in testing: it may continue finished answers or miss cut-off ones.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'PAIOS',
            'Platforms': 'Android',
            'Price and license': 'Free, Unlicense',
            'Model flexibility': 'Gemini Nano only, via Google AI Core',
            'Key difference': 'Open-source Gemini Nano client with strong prompt controls; needs an AI Core phone',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'Android, iOS',
            'Price and license': 'Free, Apache 2.0',
            'Model flexibility': 'Google\'s on-device Gemma models',
            'Key difference': 'Google\'s own on-device app, running Gemma models',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android',
            'Price and license': 'Freemium, closed source',
            'Model flexibility': 'GGUF models plus other on-device backends',
            'Key difference': 'Android-first assistant with broader model choice, but not open source',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'Android, iOS',
            'Price and license': 'Free, MIT',
            'Model flexibility': 'GGUF models you download yourself',
            'Key difference': 'Ships its own inference engine instead of using AI Core, but you manage model files yourself',
          },
          {
            'App': '[Off Grid AI](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'Android, iOS, macOS, Windows',
            'Price and license': 'Freemium, MIT',
            'Model flexibility': 'Local models plus Ollama connections',
            'Key difference': 'Cross-platform and feature-rich, but a much larger app than a focused Gemini Nano client',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PAIOS',
        items: [
          '**Owners of an AI Core-supported phone who want a free chat front end for Gemini Nano.** It is the most direct way to talk to the model Google already ships on the device.',
          '**Privacy-minded users who prefer open source.** The code is public and under a public-domain license, so the data-handling claims can be checked.',
          '**Tinkerers who like to steer a small model.** Per-chat prompts, temperature, and a prompt library with Markdown import and export reward experimentation.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PAIOS',
        items: [
          '**Anyone whose phone lacks AI Core support.** The app cannot run without it (see Device Requirements above).',
          '**Users who want to choose or import models.** PAIOS offers Gemini Nano only; try [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Layla](/power-local-llm/layla-review) instead.',
          '**People who need depth or reliability.** Gemini Nano is a small on-device model, and the project calls itself alpha.',
          '**iPhone, Mac, or Windows users.** PAIOS is Android-only; [Off Grid AI](/power-local-llm/off-grid-ai-review) covers more platforms.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is PAIOS free?',
            a: 'Yes. The Google Play listing shows no in-app purchases, and the roadmap lists monetization only as a future, unchecked item.',
          },
          {
            q: 'Who makes PAIOS?',
            a: 'An independent developer who publishes as Puzzak (GitHub: Puzzaks). The project states it is not affiliated with, endorsed by, or sponsored by Google.',
          },
          {
            q: 'Does PAIOS work on any Android phone?',
            a: 'No. It needs Google AI Core, which Google enables on selected devices. See Device Requirements for the README wording.',
          },
          {
            q: 'Can I use other models, like Llama or Gemma, in PAIOS?',
            a: 'Not according to the README or roadmap. PAIOS is built as a client for Gemini Nano through AI Core. For other models, see the alternatives table above.',
          },
          {
            q: 'Why do long answers sometimes stop partway?',
            a: 'The roadmap describes a roughly 25-second generation window that can end answers early. Version 1.1.7 added auto-continue as a workaround, and the changelog still lists it as in testing.',
          },
          {
            q: 'Is PAIOS actively maintained?',
            a: 'Releases run from 1.0.0 to 1.1.8, the latest, published on April 21, 2026, and the last commit was in May 2026. The roadmap still lists open items such as AICore version controls and in-app documentation.',
          },
          {
            q: 'Can I install PAIOS without Google Play?',
            a: 'Yes. Each GitHub release includes an APK, and the source is public if you prefer to build it yourself.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PAIOS does one narrow thing well on paper: it turns the Gemini Nano model already inside supported Android phones into a configurable, open-source chat app, free and without an account.',
          'The same narrowness is the catch. You get one small model, a hard dependency on Google AI Core support, and software its own author calls alpha. That makes it a good fit for owners of recent Pixel-class phones who like to experiment, and a poor fit for anyone who wants model choice, broad device support, or polish.',
          'If your phone qualifies, install it and see how Gemini Nano feels with your own prompts. If it does not, or you want more models, start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Layla](/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PAIOS on GitHub](https://github.com/Puzzaks/PAIOS) — README, changelog, roadmap, license, and repository statistics.',
          '[PAIOS releases](https://github.com/Puzzaks/PAIOS/releases) — version 1.1.8 and release assets.',
          '[PAIOS - Offline AI on Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — listing, price, and data-safety declaration.',
          '[Developer site](https://puzzak.page) — developer homepage linked from the repository.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s own on-device app, also on Android.',
          '[Layla Review](/power-local-llm/layla-review) — an Android-first local assistant with wider model choice.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free, open-source GGUF chat client.',
          '[Off Grid AI Review](/power-local-llm/off-grid-ai-review) — a cross-platform local AI app.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
}
