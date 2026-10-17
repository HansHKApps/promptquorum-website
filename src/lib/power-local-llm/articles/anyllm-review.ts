// AnyLLM Review: BYOK AI Chat Client for Android
// Slug: anyllm-review
// Companion to: rikkahub-review, pocketpal-ai-review, private-mind-review, solair-ai-review, anythingllm-review
// Facts verified 2026-10-17 against the Google Play listing (com.dotwellabs.anyllm, v1.5.1, updated 2026-09-05), dotwellabs.web.app and the privacy policy (updated 2026-04-12).
// In-app purchase range per storefront: US $0.99-$14.99, JP ¥170-¥2,180, BR R$4,99-R$69,99, SA 4.29-53.99 SAR (read from each storefront's listing; DE/FR/ES/KR/ZH show the US-store USD range).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-en.webp',
    title: 'AnyLLM Review: BYOK AI Chat Client for Android',
    seoTitle: 'AnyLLM Review: BYOK AI Chat Client for Android + Ollama',
    intro: 'AnyLLM is an Android chat app where you bring your own API keys for providers such as OpenAI, Anthropic, Google and Groq, and can also connect an Ollama server for local models. This review covers what its Google Play listing, the developer\'s site and its privacy policy document, what stays unclear, and how it compares with other mobile chat clients.',
    metaDescription: 'AnyLLM review: Android chat client for your own OpenAI, Anthropic, Google and Groq API keys, with Ollama, MCP tools and web search. Price, privacy, limits.',
    twitterDescription: 'AnyLLM review: a freemium, closed-source Android client for your own API keys, with Ollama, MCP tools and AI-vs-AI debates. Requirements, pricing, privacy, limits.',
    audience: 'Android users who already have AI provider API keys, or an Ollama server, and want one chat app for several models — covers features, requirements, pricing, privacy, limits, and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AnyLLM review',
    targetKeywords: [
      'anyllm review',
      'anyllm android app',
      'byok ai chat app android',
      'ollama android client',
      'mcp client android',
      'openai anthropic gemini one app',
      'ai chat client android',
      'ai vs ai debate app',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM is a freemium, closed-source Android chat client from Dotwel Labs that connects to AI providers with your own API keys — OpenAI, Anthropic, Google, Groq and others — and to an Ollama server for local models.** It runs no model itself. Per its Google Play listing it needs Android 7.0 or later; this review covers version 1.5.1 and is based on the public listing, the developer\'s site and its privacy policy, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is AnyLLM a local AI app or a cloud chat client?',
        answer: 'Mostly a cloud chat client: it sends your messages to the provider whose API key you enter, and it is "local" only when you point it at an Ollama server. Pick it if you already pay for API access and want several providers, MCP tools and AI-vs-AI debates in one Android app; skip it if you want models that run on the phone itself. RikkaHub is the open-source Android alternative, and PocketPal AI runs models on the device.',
        bullets: [
          'Free download with in-app purchases; model usage is billed by each provider at its own rates.',
          'Bring-your-own-key chat with OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek and Together AI.',
          'Optional Ollama connection for local or self-hosted models; the app runs no model on the phone.',
          'Extras: MCP tool servers, SKILL.md agent skills, web search and AI-vs-AI debates.',
          'Closed source, Android only, and chats are stored in a local database on the device.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'Get AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM at a Glance',
        anchor: 'at-a-glance',
      },
      {
        label: 'What AnyLLM Is',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'How to Get Started',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Features',
        anchor: 'features',
      },
      {
        label: 'Providers, Ollama and Data Flow',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'Pricing and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Trade-Offs: Benefits vs. Limitations',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM vs. Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Who Should Use AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: 'Who Should Not Use AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM, by Dotwel Labs, is a free-to-download Android chat client where you bring your own API keys for OpenAI, Anthropic, Google, Groq and others, with optional Ollama, MCP tool and web-search support.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as one chat app for several AI services: you paste in your own keys, pick a model and pay each provider directly. It does not run AI models on the phone; the "local" part is an optional link to an Ollama server you run yourself.',
          },
        ],
        items: [
          'Maker: Dotwel Labs, an independent studio whose [site](https://dotwellabs.web.app) presents AnyLLM as its flagship app.',
          'Audience: people who already hold API keys and want several providers in one Android app.',
          'Standout features: AI-vs-AI debates, MCP servers, SKILL.md agent skills and web search.',
          'Limits: closed source, no on-device inference, and the listing does not say what the in-app purchases unlock.',
          'Maturity: Google Play shows 1,000+ downloads, so it is a young app with little independent coverage.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'Get AnyLLM',
        content: [
          '**AnyLLM is distributed through Google Play.** It is a free download with in-app purchases.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/directory), which lists AnyLLM next to other mobile chat clients.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            Channel: 'Google Play',
            'Get It': '[AnyLLM: AI Chat Client on Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            Channel: 'Website',
            'Get It': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            Channel: 'Privacy policy',
            'Get It': '[AnyLLM privacy policy](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'No public source repository was found, and there is no iPhone or desktop build; the listing covers Android only. The website is the developer\'s studio page, not a dedicated AnyLLM site.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM at a Glance',
        columns: ['Attribute', 'AnyLLM'],
        rows: [
          {
            Attribute: 'Platform',
            AnyLLM: 'Android 7.0 and later',
          },
          {
            Attribute: 'Version',
            AnyLLM: '1.5.1',
          },
          {
            Attribute: 'Last app update',
            AnyLLM: 'September 5, 2026',
          },
          {
            Attribute: 'Price',
            AnyLLM: 'Free, in-app purchases',
          },
          {
            Attribute: 'License',
            AnyLLM: 'Closed source',
          },
          {
            Attribute: 'Runs models itself',
            AnyLLM: 'No model engine is described; it connects to providers and Ollama',
          },
          {
            Attribute: 'Image input',
            AnyLLM: 'Yes, images can be attached per the privacy policy',
          },
          {
            Attribute: 'Voice input / output',
            AnyLLM: 'Not stated in the listing',
          },
          {
            Attribute: 'MCP tool servers',
            AnyLLM: 'Yes, SSE and Streamable HTTP',
          },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. "Not stated" means the Google Play listing and the developer\'s site do not say, not that the feature is absent.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'What AnyLLM Is',
        content: [
          '**AnyLLM is an Android chat client, not a model runner.** The Google Play listing pitches "one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more" and describes a bring-your-own-key (BYOK) model: you enter your own API keys and pay the providers directly.',
          'It is published as Dotwel Labs, which the [developer site](https://dotwellabs.web.app) describes as an independent product studio. Do not confuse it with [AnythingLLM](/power-local-llm/anythingllm-review), an unrelated open-source app.',
          'This review draws on the Google Play listing, the developer site and the privacy policy only. It has no hands-on testing, so speed, stability and answer quality are not rated here. Marketing lines such as "the most polished AI chat UI on Android" are the developer\'s own and are not repeated as findings.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a Google Play install, then adding at least one provider key.** The listing does not document the first-run flow, so the steps below follow what the listing and privacy policy state.',
        ],
        numberedItems: [
          {
            title: 'Check your phone',
            whyItMatters: 'The listing requires Android 7.0 or later. No RAM or chip requirement is stated, because the models run at a provider or on a server rather than on the phone.',
          },
          {
            title: 'Get your keys ready',
            whyItMatters: 'AnyLLM is BYOK, so create an API key at each provider you want to use. The privacy policy says keys are kept on the device in secure storage.',
          },
          {
            title: 'Install and add a provider',
            whyItMatters: 'Install the app from [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm), enter a key or a custom OpenAI-compatible endpoint, and choose a model.',
          },
          {
            title: 'Optionally add Ollama, MCP servers and search',
            whyItMatters: 'Point the app at an Ollama server for local models, add MCP servers, and enable DuckDuckGo, Brave Search or SerpAPI for web search.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**AnyLLM\'s selling point is the set of tools around the chat.** Everything below comes from the Google Play listing and the privacy policy.',
        ],
        items: [
          '**AI-vs-AI debates.** Two models argue a topic against each other in real time. The listing calls this a feature no other AI chat app offers, a claim this review did not check.',
          '**MCP tools.** Connects to Model Context Protocol servers over SSE and Streamable HTTP, with an agent loop that supports tool calling.',
          '**Agent skills.** Import SKILL.md files to give a chat domain knowledge, for example a coding assistant or a writing partner.',
          '**Web search.** Live browsing through DuckDuckGo, Brave Search or SerpAPI.',
          '**Reasoning mode.** A thinking-mode toggle for models such as Claude and OpenAI\'s o1 shows step-by-step reasoning before the final answer.',
          '**Chat interface.** Markdown, LaTeX math, code highlighting, streamed output and system-prompt presets such as Code Expert or Socratic Teacher.',
          '**Per-model controls.** Temperature, maximum tokens and context-window size can be set for each model.',
          '**Memory.** The privacy policy says the app extracts key facts from chats ("memory facts") and stores them on the device.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'Providers, Ollama and Data Flow',
        content: [
          '**Most of AnyLLM is a client for cloud APIs.** The listing names OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek and Together AI, and the privacy policy adds OpenRouter. Meta\'s Llama 3 is offered through Groq rather than run in the app. Custom endpoints and OpenAI-compatible APIs are listed, and per the listing you pay providers at their own rates with no subscription from AnyLLM.',
          '**Ollama is the local path.** The listing describes an Ollama integration for "offline/local AI models", and the privacy policy says Ollama data stays on your local network or follows your Ollama cloud configuration. The listing does not say where the Ollama server must run; Ollama is a server program, so expect to run it on a computer you control and point the phone at it.',
          '**What goes where.** Each message, and any image or document you attach, goes straight to the provider you selected, under your own agreement with that provider. With Ollama it goes to the server you configure.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing and Privacy',
        content: [
          '**AnyLLM is a free download with in-app purchases; the US Google Play listing shows $0.99 to $14.99 per item.** Neither the listing nor the developer\'s site says what the purchases unlock, so check the in-app store before relying on a feature. Budget separately for API usage, which each provider bills.',
          'The privacy policy, last updated April 12, 2026, says chat history, memory facts, API keys and model settings stay on your device in a local database or secure vault and are not uploaded to the developer\'s servers. It also says there is no cloud sync.',
          'The policy discloses Google Analytics for Firebase: app launches, screens viewed, feature use, device model, OS version and country- or city-level location, but not chat content or keys. Opting out is possible in the system settings or by contacting the developer.',
          'The app is closed source and this review did not inspect network traffic, so these statements are the developer\'s own.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'One app, many providers',
            'What it means in real use': 'Switch between OpenAI, Anthropic, Google and Groq models in one chat interface.',
            'Limitation / caveat': 'Needs an API key per provider, and each bills separately.',
          },
          {
            Benefit: 'Ollama connection',
            'What it means in real use': 'Use local or self-hosted models from the phone.',
            'Limitation / caveat': 'Needs an Ollama server you run; setup is not documented in the listing.',
          },
          {
            Benefit: 'MCP tools and skills',
            'What it means in real use': 'Tool calling, SKILL.md skills and web search in a mobile chat.',
            'Limitation / caveat': 'Results depend on the model and the servers you add; not tested here.',
          },
          {
            Benefit: 'AI-vs-AI debates',
            'What it means in real use': 'Compare how two models reason about one topic.',
            'Limitation / caveat': 'Each debate calls two models, so it uses more API credit.',
          },
          {
            Benefit: 'Local chat storage',
            'What it means in real use': 'History and keys stay on the device.',
            'Limitation / caveat': 'Closed source, with analytics enabled; the claims are the developer\'s own.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Where models run', 'Key difference'],
        rows: [
          {
            App: 'AnyLLM',
            Platforms: 'Android',
            'Price and license': 'Freemium, closed source',
            'Where models run': 'Provider APIs and Ollama',
            'Key difference': 'Multi-provider BYOK with MCP, skills and AI-vs-AI debates',
          },
          {
            App: '[RikkaHub](/power-local-llm/rikkahub-review)',
            Platforms: 'Android',
            'Price and license': 'Free, MIT',
            'Where models run': 'Providers you configure',
            'Key difference': 'Open source, same provider-switching idea',
          },
          {
            App: '[Solair AI](/power-local-llm/solair-ai-review)',
            Platforms: 'iOS',
            'Price and license': 'Free, closed source',
            'Where models run': 'On the device, optional own-key cloud fallback',
            'Key difference': 'iPhone only, local first',
          },
          {
            App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            Platforms: 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Where models run': 'On the phone',
            'Key difference': 'Runs models on the device, no keys needed',
          },
          {
            App: '[Private Mind](/power-local-llm/private-mind-review)',
            Platforms: 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Where models run': 'On the phone',
            'Key difference': 'Offline chat with on-device document Q&A',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use AnyLLM',
        items: [
          '**Android users who already pay for API access.** One app covers OpenAI, Anthropic, Google and Groq keys.',
          '**Tinkerers who want tools on the phone.** MCP servers, SKILL.md skills and web search turn a chat into an agent loop.',
          '**Self-hosters with an Ollama server.** The app can reach it from the phone.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use AnyLLM',
        items: [
          '**Anyone who wants models running on the phone.** AnyLLM runs none; [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Private Mind](/power-local-llm/private-mind-review) do.',
          '**Anyone who needs open source.** No repository was found; [RikkaHub](/power-local-llm/rikkahub-review) is MIT-licensed.',
          '**iPhone users.** Only Android is listed; [Solair AI](/power-local-llm/solair-ai-review) is an iOS option.',
          '**People without API keys.** Every cloud model needs a key and a provider account.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Who makes AnyLLM?',
            a: 'Dotwel Labs, an independent studio that presents AnyLLM as its flagship app. The Google Play listing and the privacy policy are the only other public documents found.',
          },
          {
            q: 'Can AnyLLM run models on my phone?',
            a: 'No model engine is described. It is a client: models run at the provider or on an Ollama server. For on-device inference, see PocketPal AI.',
          },
          {
            q: 'Does AnyLLM work on iPhone or desktop?',
            a: 'No. The listing covers Android only.',
          },
          {
            q: 'Which search engines does web search use?',
            a: 'DuckDuckGo, Brave Search or SerpAPI, per the listing. The privacy policy names Brave Search as a third-party service.',
          },
          {
            q: 'Can I use my own endpoint?',
            a: 'Yes. The listing and the developer\'s site say custom endpoints and OpenAI-compatible APIs are supported, so a self-hosted gateway can work. Compatibility with a specific server was not tested.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'AnyLLM is a reasonable pick for an Android user who already holds API keys and wants OpenAI, Anthropic, Google and Groq models, MCP tools and web search in one app.',
          'The caveats are age and transparency: it is young and small, closed source, and the listing documents neither the paid items nor the Ollama setup. It runs no model on the phone.',
          'If you want models on the device, start with [PocketPal AI](/power-local-llm/pocketpal-ai-review). If you want an open-source multi-provider Android client, look at [RikkaHub](/power-local-llm/rikkahub-review) first, and try AnyLLM\'s free tier before buying anything.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AnyLLM: AI Chat Client on Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — version, update date, price range, requirements and feature list.',
          '[Dotwel Labs website](https://dotwellabs.web.app) — the developer\'s description of AnyLLM and of BYOK and custom endpoints.',
          '[AnyLLM privacy policy](https://sanjayram-a.github.io/anyllm-privacy-policy/) — data storage, analytics and third-party services.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[RikkaHub Review](/power-local-llm/rikkahub-review) — an open-source Android chat client that switches between providers.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — open-source on-device chat for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app for iPhone and Android.',
          '[Solair AI Review](/power-local-llm/solair-ai-review) — a local-first iOS assistant with optional own-key cloud fallback.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — the unrelated open-source workspace app with a similar name.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-de.webp',
    title: 'AnyLLM-Rezension: KI-Chat-Client für Android mit eigenen API-Schlüsseln',
    seoTitle: 'AnyLLM-Rezension: Android-Chat mit eigenen API-Schlüsseln',
    intro: 'AnyLLM ist eine Android-Chat-App, in der Sie Ihre eigenen API-Schlüssel für Anbieter wie OpenAI, Anthropic, Google und Groq verwenden und zusätzlich einen Ollama-Server für lokale Modelle anbinden können. Diese Rezension beschreibt, was der Google-Play-Eintrag, die Website des Entwicklers und die Datenschutzerklärung dokumentieren, was unklar bleibt und wie AnyLLM im Vergleich zu anderen mobilen Chat-Clients abschneidet.',
    metaDescription: 'AnyLLM-Rezension: Android-Chat-Client mit eigenen API-Schlüsseln für OpenAI, Anthropic, Google, Groq, plus Ollama, MCP, Websuche. Preis und Datenschutz.',
    twitterDescription: 'AnyLLM-Rezension: ein Freemium-Android-Client mit geschlossenem Quellcode für eigene API-Schlüssel, mit Ollama, MCP-Tools und KI-gegen-KI-Debatten. Anforderungen, Preise, Datenschutz, Grenzen.',
    audience: 'Android-Nutzer, die bereits API-Schlüssel von KI-Anbietern oder einen Ollama-Server haben und eine Chat-App für mehrere Modelle suchen — behandelt Funktionen, Anforderungen, Preise, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AnyLLM Rezension',
    targetKeywords: [
      'anyllm test',
      'anyllm android app',
      'byok ki chat app android',
      'ollama android client',
      'mcp client android',
      'openai anthropic gemini in einer app',
      'ki chat client android',
      'ki gegen ki debatte app',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM ist ein Freemium-Chat-Client für Android mit geschlossenem Quellcode von Dotwel Labs, der sich mit Ihren eigenen API-Schlüsseln mit KI-Anbietern — OpenAI, Anthropic, Google, Groq und weiteren — sowie mit einem Ollama-Server für lokale Modelle verbindet.** Er führt selbst kein Modell aus. Laut Google-Play-Eintrag setzt er Android 7.0 oder neuer voraus; diese Rezension behandelt Version 1.5.1 und stützt sich auf den öffentlichen Eintrag, die Website des Entwicklers und die Datenschutzerklärung, nicht auf eigene Tests.',
    quickAnswerTop: {
      de: {
        question: 'Ist AnyLLM eine lokale KI-App oder ein Cloud-Chat-Client?',
        answer: 'Überwiegend ein Cloud-Chat-Client: Er sendet Ihre Nachrichten an den Anbieter, dessen API-Schlüssel Sie eintragen, und ist nur dann „lokal“, wenn Sie ihn auf einen Ollama-Server verweisen. Er passt, wenn Sie ohnehin für API-Zugänge zahlen und mehrere Anbieter, MCP-Tools und KI-gegen-KI-Debatten in einer Android-App wollen; wer Modelle direkt auf dem Smartphone ausführen möchte, sollte verzichten. RikkaHub ist die quelloffene Android-Alternative, PocketPal AI führt Modelle auf dem Gerät aus.',
        bullets: [
          'Kostenloser Download mit In-App-Käufen; die Modellnutzung rechnet jeder Anbieter zu seinen eigenen Preisen ab.',
          'Chat mit eigenen Schlüsseln für OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek und Together AI.',
          'Optionale Ollama-Anbindung für lokale oder selbst gehostete Modelle; die App führt kein Modell auf dem Smartphone aus.',
          'Extras: MCP-Tool-Server, SKILL.md-Agenten-Skills, Websuche und KI-gegen-KI-Debatten.',
          'Geschlossener Quellcode, nur Android, Chats liegen in einer lokalen Datenbank auf dem Gerät.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'AnyLLM herunterladen',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM im Überblick',
        anchor: 'at-a-glance',
      },
      {
        label: 'Was AnyLLM ist',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'Erste Schritte',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funktionen',
        anchor: 'features',
      },
      {
        label: 'Anbieter, Ollama und Datenfluss',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'Preise und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Abwägungen: Vorteile vs. Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM vs. Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Wer AnyLLM nutzen sollte',
        anchor: 'who-should-use',
      },
      {
        label: 'Wer AnyLLM nicht nutzen sollte',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM von Dotwel Labs ist ein kostenlos ladbarer Android-Chat-Client, in dem Sie eigene API-Schlüssel für OpenAI, Anthropic, Google, Groq und weitere einsetzen, mit optionaler Unterstützung für Ollama, MCP-Tools und Websuche.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als eine Chat-App für mehrere KI-Dienste vor: Sie tragen Ihre eigenen Schlüssel ein, wählen ein Modell und zahlen jeden Anbieter direkt. KI-Modelle laufen nicht auf dem Smartphone; der „lokale“ Teil ist eine optionale Verbindung zu einem Ollama-Server, den Sie selbst betreiben.',
          },
        ],
        items: [
          'Hersteller: Dotwel Labs, ein unabhängiges Studio, dessen [Website](https://dotwellabs.web.app) AnyLLM als Flaggschiff-App vorstellt.',
          'Zielgruppe: Menschen, die bereits API-Schlüssel besitzen und mehrere Anbieter in einer Android-App wollen.',
          'Besondere Funktionen: KI-gegen-KI-Debatten, MCP-Server, SKILL.md-Agenten-Skills und Websuche.',
          'Grenzen: geschlossener Quellcode, keine Inferenz auf dem Gerät, und der Eintrag nennt nicht, was die In-App-Käufe freischalten.',
          'Reife: Google Play zeigt über 1.000 Downloads, es ist also eine junge App mit wenig unabhängiger Berichterstattung.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'AnyLLM herunterladen',
        content: [
          '**AnyLLM wird über Google Play vertrieben.** Der Download ist kostenlos, es gibt In-App-Käufe.',
          'Diese Rezension ergänzt das [Local LLM Software Directory](/de/directory) von PromptQuorum, in dem AnyLLM neben anderen mobilen Chat-Clients gelistet ist.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            Kanal: 'Google Play',
            Download: '[AnyLLM: AI Chat Client bei Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            Kanal: 'Website',
            Download: '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            Kanal: 'Datenschutzerklärung',
            Download: '[Datenschutzerklärung von AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'Ein öffentliches Quellcode-Repository wurde nicht gefunden, und es gibt keine iPhone- oder Desktop-Version; der Eintrag deckt nur Android ab. Die Website ist die Studioseite des Entwicklers, keine eigene AnyLLM-Seite.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM im Überblick',
        columns: ['Merkmal', 'AnyLLM'],
        rows: [
          {
            Merkmal: 'Plattform',
            AnyLLM: 'Android 7.0 und neuer',
          },
          {
            Merkmal: 'Version',
            AnyLLM: '1.5.1',
          },
          {
            Merkmal: 'Letztes App-Update',
            AnyLLM: '5. September 2026',
          },
          {
            Merkmal: 'Preis',
            AnyLLM: 'Kostenlos, In-App-Käufe',
          },
          {
            Merkmal: 'Lizenz',
            AnyLLM: 'Geschlossener Quellcode',
          },
          {
            Merkmal: 'Führt Modelle selbst aus',
            AnyLLM: 'Keine Modell-Engine beschrieben; verbindet sich mit Anbietern und Ollama',
          },
          {
            Merkmal: 'Bildeingabe',
            AnyLLM: 'Ja, Bilder lassen sich laut Datenschutzerklärung anhängen',
          },
          {
            Merkmal: 'Spracheingabe / -ausgabe',
            AnyLLM: 'Im Eintrag nicht angegeben',
          },
          {
            Merkmal: 'MCP-Tool-Server',
            AnyLLM: 'Ja, SSE und Streamable HTTP',
          },
        ],
        note: 'Die Merkmale folgen dem Vergleich mobiler Chat-Apps im Local LLM Software Directory. „Nicht angegeben“ heißt, dass Google-Play-Eintrag und Entwicklerwebsite es nicht nennen — nicht, dass die Funktion fehlt.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'Was AnyLLM ist',
        content: [
          '**AnyLLM ist ein Android-Chat-Client, kein Modell-Runner.** Der Google-Play-Eintrag bewirbt „one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more“ und beschreibt ein Bring-your-own-key-Modell (BYOK): Sie tragen Ihre eigenen API-Schlüssel ein und bezahlen die Anbieter direkt.',
          'Veröffentlicht wird die App unter dem Namen Dotwel Labs, den die [Entwicklerwebsite](https://dotwellabs.web.app) als unabhängiges Produktstudio beschreibt. Verwechseln Sie sie nicht mit [AnythingLLM](/de/power-local-llm/anythingllm-review), einer nicht verwandten Open-Source-App.',
          'Diese Rezension stützt sich ausschließlich auf den Google-Play-Eintrag, die Entwicklerwebsite und die Datenschutzerklärung. Eigene Tests gab es nicht, daher werden Geschwindigkeit, Stabilität und Antwortqualität hier nicht bewertet. Werbeaussagen wie „the most polished AI chat UI on Android“ stammen vom Entwickler und werden nicht als Befund wiederholt.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus der Installation über Google Play und dem Hinzufügen mindestens eines Anbieter-Schlüssels.** Der Eintrag dokumentiert den ersten Start nicht; die folgenden Schritte richten sich nach dem, was Eintrag und Datenschutzerklärung angeben.',
        ],
        numberedItems: [
          {
            title: 'Smartphone prüfen',
            whyItMatters: 'Der Eintrag verlangt Android 7.0 oder neuer. Eine RAM- oder Chip-Anforderung wird nicht genannt, weil die Modelle bei einem Anbieter oder auf einem Server laufen und nicht auf dem Smartphone.',
          },
          {
            title: 'Schlüssel bereithalten',
            whyItMatters: 'AnyLLM ist BYOK, legen Sie also bei jedem gewünschten Anbieter einen API-Schlüssel an. Laut Datenschutzerklärung werden Schlüssel im sicheren Speicher des Geräts abgelegt.',
          },
          {
            title: 'Installieren und Anbieter hinzufügen',
            whyItMatters: 'Installieren Sie die App über [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm), tragen Sie einen Schlüssel oder einen eigenen OpenAI-kompatiblen Endpunkt ein und wählen Sie ein Modell.',
          },
          {
            title: 'Optional Ollama, MCP-Server und Suche hinzufügen',
            whyItMatters: 'Verweisen Sie die App auf einen Ollama-Server für lokale Modelle, fügen Sie MCP-Server hinzu und aktivieren Sie DuckDuckGo, Brave Search oder SerpAPI für die Websuche.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Reiz von AnyLLM liegt in den Werkzeugen rund um den Chat.** Alles Folgende stammt aus dem Google-Play-Eintrag und der Datenschutzerklärung.',
        ],
        items: [
          '**KI-gegen-KI-Debatten.** Zwei Modelle diskutieren ein Thema in Echtzeit gegeneinander. Der Eintrag nennt das eine Funktion, die keine andere KI-Chat-App biete; diese Behauptung wurde hier nicht geprüft.',
          '**MCP-Tools.** Verbindet sich über SSE und Streamable HTTP mit Model-Context-Protocol-Servern, mit einer Agentenschleife, die Tool-Aufrufe unterstützt.',
          '**Agenten-Skills.** SKILL.md-Dateien importieren, um einem Chat Fachwissen mitzugeben, etwa als Coding-Assistent oder Schreibpartner.',
          '**Websuche.** Live-Recherche über DuckDuckGo, Brave Search oder SerpAPI.',
          '**Reasoning-Modus.** Ein Schalter für den Denkmodus bei Modellen wie Claude und OpenAI o1 zeigt die schrittweise Argumentation vor der endgültigen Antwort.',
          '**Chat-Oberfläche.** Markdown, LaTeX-Formeln, Code-Hervorhebung, gestreamte Ausgabe und Systemprompt-Vorlagen wie „Code Expert“ oder „Socratic Teacher“.',
          '**Steuerung pro Modell.** Temperatur, maximale Token und Kontextfenster lassen sich für jedes Modell einstellen.',
          '**Gedächtnis.** Laut Datenschutzerklärung extrahiert die App wichtige Fakten aus Chats („Memory Facts“) und speichert sie auf dem Gerät.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'Anbieter, Ollama und Datenfluss',
        content: [
          '**Der größte Teil von AnyLLM ist ein Client für Cloud-APIs.** Der Eintrag nennt OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek und Together AI, die Datenschutzerklärung ergänzt OpenRouter. Metas Llama 3 wird über Groq angeboten und nicht in der App ausgeführt. Eigene Endpunkte und OpenAI-kompatible APIs sind aufgeführt, und laut Eintrag zahlen Sie die Anbieter zu deren eigenen Preisen, ohne Abonnement bei AnyLLM.',
          '**Ollama ist der lokale Weg.** Der Eintrag beschreibt eine Ollama-Anbindung für „offline/local AI models“, und die Datenschutzerklärung besagt, dass Ollama-Daten in Ihrem lokalen Netzwerk bleiben oder Ihrer Ollama-Cloud-Konfiguration folgen. Wo der Ollama-Server laufen muss, nennt der Eintrag nicht; Ollama ist ein Serverprogramm, rechnen Sie also damit, es auf einem Rechner Ihrer Wahl zu betreiben und das Smartphone darauf zu richten.',
          '**Was wohin geht.** Jede Nachricht und jedes angehängte Bild oder Dokument geht direkt an den ausgewählten Anbieter, im Rahmen Ihrer eigenen Vereinbarung mit diesem Anbieter. Bei Ollama geht sie an den von Ihnen konfigurierten Server.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise und Datenschutz',
        content: [
          '**AnyLLM ist ein kostenloser Download mit In-App-Käufen; der Google-Play-Eintrag im US-Store zeigt 0,99 bis 14,99 US-Dollar pro Artikel.** Weder der Eintrag noch die Website des Entwicklers nennen, was die Käufe freischalten, prüfen Sie den In-App-Shop also, bevor Sie sich auf eine Funktion verlassen. Planen Sie die API-Nutzung gesondert ein, die jeder Anbieter selbst abrechnet.',
          'Die Datenschutzerklärung, zuletzt aktualisiert am 12. April 2026, besagt, dass Chatverlauf, Memory Facts, API-Schlüssel und Modelleinstellungen in einer lokalen Datenbank oder einem sicheren Speicher auf Ihrem Gerät bleiben und nicht auf Server des Entwicklers hochgeladen werden. Sie schließt außerdem eine Cloud-Synchronisierung aus.',
          'Die Erklärung weist Google Analytics for Firebase aus: App-Starts, aufgerufene Bildschirme, Funktionsnutzung, Gerätemodell, Betriebssystemversion und Standort auf Länder- oder Stadtebene, aber keine Chatinhalte oder Schlüssel. Ein Opt-out ist in den Systemeinstellungen oder per Kontakt zum Entwickler möglich.',
          'Die App hat geschlossenen Quellcode, und diese Rezension hat den Netzwerkverkehr nicht untersucht; die Angaben stammen daher vom Entwickler selbst.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Eine App, viele Anbieter',
            'Bedeutung im Alltag': 'Zwischen Modellen von OpenAI, Anthropic, Google und Groq in einer Chat-Oberfläche wechseln.',
            'Einschränkung / Hinweis': 'Pro Anbieter ist ein API-Schlüssel nötig, und jeder rechnet separat ab.',
          },
          {
            Vorteil: 'Ollama-Anbindung',
            'Bedeutung im Alltag': 'Lokale oder selbst gehostete Modelle vom Smartphone aus nutzen.',
            'Einschränkung / Hinweis': 'Braucht einen von Ihnen betriebenen Ollama-Server; die Einrichtung ist im Eintrag nicht dokumentiert.',
          },
          {
            Vorteil: 'MCP-Tools und Skills',
            'Bedeutung im Alltag': 'Tool-Aufrufe, SKILL.md-Skills und Websuche in einem mobilen Chat.',
            'Einschränkung / Hinweis': 'Die Ergebnisse hängen vom Modell und den hinzugefügten Servern ab; hier nicht getestet.',
          },
          {
            Vorteil: 'KI-gegen-KI-Debatten',
            'Bedeutung im Alltag': 'Vergleichen, wie zwei Modelle ein Thema begründen.',
            'Einschränkung / Hinweis': 'Jede Debatte ruft zwei Modelle auf und verbraucht mehr API-Guthaben.',
          },
          {
            Vorteil: 'Lokale Chat-Speicherung',
            'Bedeutung im Alltag': 'Verlauf und Schlüssel bleiben auf dem Gerät.',
            'Einschränkung / Hinweis': 'Geschlossener Quellcode, Analytics aktiv; die Angaben stammen vom Entwickler.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM vs. Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis und Lizenz',
          'Wo die Modelle laufen',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: 'AnyLLM',
            Plattformen: 'Android',
            'Preis und Lizenz': 'Freemium, geschlossener Quellcode',
            'Wo die Modelle laufen': 'Anbieter-APIs und Ollama',
            'Wichtigster Unterschied': 'BYOK mit mehreren Anbietern, MCP, Skills und KI-gegen-KI-Debatten',
          },
          {
            App: '[RikkaHub](/de/power-local-llm/rikkahub-review)',
            Plattformen: 'Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Wo die Modelle laufen': 'Von Ihnen konfigurierte Anbieter',
            'Wichtigster Unterschied': 'Open Source, gleiche Idee des Anbieterwechsels',
          },
          {
            App: '[Solair AI](/de/power-local-llm/solair-ai-review)',
            Plattformen: 'iOS',
            'Preis und Lizenz': 'Kostenlos, geschlossener Quellcode',
            'Wo die Modelle laufen': 'Auf dem Gerät, optionaler Cloud-Fallback mit eigenem Schlüssel',
            'Wichtigster Unterschied': 'Nur iPhone, lokal zuerst',
          },
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Wo die Modelle laufen': 'Auf dem Smartphone',
            'Wichtigster Unterschied': 'Führt Modelle auf dem Gerät aus, keine Schlüssel nötig',
          },
          {
            App: '[Private Mind](/de/power-local-llm/private-mind-review)',
            Plattformen: 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Wo die Modelle laufen': 'Auf dem Smartphone',
            'Wichtigster Unterschied': 'Offline-Chat mit Dokumenten-Fragen und -Antworten auf dem Gerät',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Apps von Drittanbietern ändern sich häufig. Prüfen Sie die aktuellen Angaben im jeweiligen Eintrag der App, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer AnyLLM nutzen sollte',
        items: [
          '**Android-Nutzer, die bereits für API-Zugänge zahlen.** Eine App deckt Schlüssel von OpenAI, Anthropic, Google und Groq ab.',
          '**Tüftler, die Werkzeuge auf dem Smartphone wollen.** MCP-Server, SKILL.md-Skills und Websuche machen aus einem Chat eine Agentenschleife.',
          '**Selbst-Hoster mit Ollama-Server.** Die App erreicht ihn vom Smartphone aus.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer AnyLLM nicht nutzen sollte',
        items: [
          '**Alle, die Modelle auf dem Smartphone ausführen wollen.** AnyLLM führt keine aus; [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Private Mind](/de/power-local-llm/private-mind-review) tun es.',
          '**Alle, die Open Source brauchen.** Ein Repository wurde nicht gefunden; [RikkaHub](/de/power-local-llm/rikkahub-review) steht unter der MIT-Lizenz.',
          '**iPhone-Nutzer.** Genannt wird nur Android; [Solair AI](/de/power-local-llm/solair-ai-review) ist eine iOS-Option.',
          '**Menschen ohne API-Schlüssel.** Jedes Cloud-Modell braucht einen Schlüssel und ein Anbieterkonto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wer steckt hinter AnyLLM?',
            a: 'Dotwel Labs, ein unabhängiges Studio, das AnyLLM als Flaggschiff-App vorstellt. Der Google-Play-Eintrag und die Datenschutzerklärung sind die einzigen weiteren gefundenen öffentlichen Dokumente.',
          },
          {
            q: 'Kann AnyLLM Modelle auf meinem Smartphone ausführen?',
            a: 'Eine Modell-Engine wird nicht beschrieben. Es ist ein Client: Die Modelle laufen beim Anbieter oder auf einem Ollama-Server. Für Inferenz auf dem Gerät siehe PocketPal AI.',
          },
          {
            q: 'Läuft AnyLLM auf iPhone oder Desktop?',
            a: 'Nein. Der Eintrag deckt nur Android ab.',
          },
          {
            q: 'Welche Suchmaschinen nutzt die Websuche?',
            a: 'Laut Eintrag DuckDuckGo, Brave Search oder SerpAPI. Die Datenschutzerklärung nennt Brave Search als Drittanbieterdienst.',
          },
          {
            q: 'Kann ich einen eigenen Endpunkt verwenden?',
            a: 'Ja. Eintrag und Entwicklerwebsite nennen eigene Endpunkte und OpenAI-kompatible APIs als unterstützt, ein selbst gehostetes Gateway kann also funktionieren. Die Kompatibilität mit einem bestimmten Server wurde nicht getestet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'AnyLLM ist eine vernünftige Wahl für Android-Nutzer, die bereits API-Schlüssel besitzen und Modelle von OpenAI, Anthropic, Google und Groq, MCP-Tools und Websuche in einer App wollen.',
          'Die Vorbehalte sind Alter und Transparenz: Die App ist jung und klein, hat geschlossenen Quellcode, und der Eintrag dokumentiert weder die kostenpflichtigen Artikel noch die Ollama-Einrichtung. Auf dem Smartphone läuft kein Modell.',
          'Wenn Sie Modelle auf dem Gerät wollen, beginnen Sie mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review). Für einen quelloffenen Android-Client mit mehreren Anbietern sehen Sie sich zuerst [RikkaHub](/de/power-local-llm/rikkahub-review) an, und testen Sie die kostenlose Stufe von AnyLLM, bevor Sie etwas kaufen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AnyLLM: AI Chat Client bei Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — Version, Update-Datum, Preisspanne, Anforderungen und Funktionsliste.',
          '[Website von Dotwel Labs](https://dotwellabs.web.app) — die Beschreibung von AnyLLM durch den Entwickler, inklusive BYOK und eigener Endpunkte.',
          '[Datenschutzerklärung von AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/) — Datenspeicherung, Analytics und Drittanbieterdienste.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[RikkaHub-Rezension](/de/power-local-llm/rikkahub-review) — ein quelloffener Android-Chat-Client, der zwischen Anbietern wechselt.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — quelloffener Chat auf dem Gerät für iOS und Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App für iPhone und Android.',
          '[Solair-AI-Rezension](/de/power-local-llm/solair-ai-review) — ein lokal ausgerichteter iOS-Assistent mit optionalem Cloud-Fallback mit eigenem Schlüssel.',
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — die nicht verwandte Open-Source-Workspace-App mit ähnlichem Namen.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler LLM-Tools für alle Plattformen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-fr.webp',
    title: 'Test d\'AnyLLM : client de chat IA pour Android avec vos propres clés API',
    seoTitle: 'Test d\'AnyLLM : client de chat Android avec vos clés API',
    intro: 'AnyLLM est une application de chat pour Android dans laquelle vous utilisez vos propres clés API chez des fournisseurs comme OpenAI, Anthropic, Google et Groq, et où vous pouvez aussi connecter un serveur Ollama pour des modèles locaux. Ce test présente ce que documentent la fiche Google Play, le site du développeur et sa politique de confidentialité, ce qui reste flou, et comment AnyLLM se situe face aux autres clients de chat mobiles.',
    metaDescription: 'Test d\'AnyLLM : client de chat Android avec vos clés API OpenAI, Anthropic, Google et Groq, plus Ollama, MCP et recherche web. Prix et confidentialité.',
    twitterDescription: 'Test d\'AnyLLM : un client Android freemium à code fermé pour vos propres clés API, avec Ollama, outils MCP et débats IA contre IA. Prérequis, tarifs, confidentialité, limites.',
    audience: 'Utilisateurs Android qui ont déjà des clés API de fournisseurs d\'IA, ou un serveur Ollama, et veulent une seule application de chat pour plusieurs modèles — couvre fonctionnalités, prérequis, tarifs, confidentialité, limites et alternatives.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test AnyLLM',
    targetKeywords: [
      'test anyllm',
      'application anyllm android',
      'chat ia byok android',
      'client ollama android',
      'client mcp android',
      'openai anthropic gemini dans une seule application',
      'client de chat ia android',
      'application débat ia contre ia',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM est un client de chat Android freemium à code fermé, édité par Dotwel Labs, qui se connecte à des fournisseurs d\'IA avec vos propres clés API — OpenAI, Anthropic, Google, Groq et d\'autres — ainsi qu\'à un serveur Ollama pour des modèles locaux.** Il n\'exécute lui-même aucun modèle. Selon sa fiche Google Play, il exige Android 7.0 ou plus récent ; ce test porte sur la version 1.5.1 et s\'appuie sur la fiche publique, le site du développeur et sa politique de confidentialité, pas sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'AnyLLM est-elle une application d\'IA locale ou un client de chat cloud ?',
        answer: 'Surtout un client de chat cloud : elle envoie vos messages au fournisseur dont vous saisissez la clé API, et elle n\'est « locale » que si vous la pointez vers un serveur Ollama. Elle convient si vous payez déjà un accès API et voulez plusieurs fournisseurs, des outils MCP et des débats IA contre IA dans une seule application Android ; passez votre chemin si vous voulez des modèles qui tournent sur le téléphone. RikkaHub est l\'alternative Android open source, et PocketPal AI exécute les modèles sur l\'appareil.',
        bullets: [
          'Téléchargement gratuit avec achats intégrés ; l\'usage des modèles est facturé par chaque fournisseur à ses propres tarifs.',
          'Chat avec vos propres clés pour OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek et Together AI.',
          'Connexion Ollama facultative pour des modèles locaux ou auto-hébergés ; l\'application n\'exécute aucun modèle sur le téléphone.',
          'En plus : serveurs d\'outils MCP, compétences d\'agent SKILL.md, recherche web et débats IA contre IA.',
          'Code fermé, Android uniquement, et les conversations sont stockées dans une base locale sur l\'appareil.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Obtenir AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM en bref',
        anchor: 'at-a-glance',
      },
      {
        label: 'Ce qu\'est AnyLLM',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'Comment commencer',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Fonctionnalités',
        anchor: 'features',
      },
      {
        label: 'Fournisseurs, Ollama et flux de données',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'Tarifs et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'Compromis : avantages vs. limites',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM vs. alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Qui devrait utiliser AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: 'Qui ne devrait pas utiliser AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures complémentaires',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM, de Dotwel Labs, est un client de chat Android au téléchargement gratuit où vous utilisez vos propres clés API pour OpenAI, Anthropic, Google, Groq et d\'autres, avec une prise en charge facultative d\'Ollama, des outils MCP et de la recherche web.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une seule application de chat pour plusieurs services d\'IA : vous collez vos propres clés, choisissez un modèle et payez chaque fournisseur directement. Elle n\'exécute pas de modèles d\'IA sur le téléphone ; la partie « locale » est un lien facultatif vers un serveur Ollama que vous gérez vous-même.',
          },
        ],
        items: [
          'Éditeur : Dotwel Labs, un studio indépendant dont le [site](https://dotwellabs.web.app) présente AnyLLM comme son application phare.',
          'Public : les personnes qui détiennent déjà des clés API et veulent plusieurs fournisseurs dans une application Android.',
          'Atouts : débats IA contre IA, serveurs MCP, compétences d\'agent SKILL.md et recherche web.',
          'Limites : code fermé, pas d\'inférence sur l\'appareil, et la fiche n\'indique pas ce que débloquent les achats intégrés.',
          'Maturité : Google Play affiche plus de 1 000 téléchargements ; c\'est une application récente, peu couverte par des sources indépendantes.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'Obtenir AnyLLM',
        content: [
          '**AnyLLM est distribuée via Google Play.** Le téléchargement est gratuit, avec des achats intégrés.',
          'Ce test accompagne le [Local LLM Software Directory](/fr/directory) de PromptQuorum, qui référence AnyLLM aux côtés d\'autres clients de chat mobiles.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            Canal: 'Google Play',
            Obtenir: '[AnyLLM: AI Chat Client sur Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            Canal: 'Site web',
            Obtenir: '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            Canal: 'Politique de confidentialité',
            Obtenir: '[Politique de confidentialité d\'AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'Aucun dépôt de code source public n\'a été trouvé, et il n\'existe pas de version iPhone ni de bureau ; la fiche ne couvre qu\'Android. Le site est la page du studio du développeur, pas un site dédié à AnyLLM.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM en bref',
        columns: ['Attribut', 'AnyLLM'],
        rows: [
          {
            Attribut: 'Plateforme',
            AnyLLM: 'Android 7.0 et plus récent',
          },
          {
            Attribut: 'Version',
            AnyLLM: '1.5.1',
          },
          {
            Attribut: 'Dernière mise à jour de l\'application',
            AnyLLM: '5 septembre 2026',
          },
          {
            Attribut: 'Prix',
            AnyLLM: 'Gratuit, achats intégrés',
          },
          {
            Attribut: 'Licence',
            AnyLLM: 'Code fermé',
          },
          {
            Attribut: 'Exécute elle-même les modèles',
            AnyLLM: 'Aucun moteur de modèles décrit ; elle se connecte aux fournisseurs et à Ollama',
          },
          {
            Attribut: 'Entrée d\'image',
            AnyLLM: 'Oui, des images peuvent être jointes d\'après la politique de confidentialité',
          },
          {
            Attribut: 'Entrée / sortie vocale',
            AnyLLM: 'Non précisé dans la fiche',
          },
          {
            Attribut: 'Serveurs d\'outils MCP',
            AnyLLM: 'Oui, SSE et Streamable HTTP',
          },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles du Local LLM Software Directory. « Non précisé » signifie que la fiche Google Play et le site du développeur ne le disent pas, pas que la fonction est absente.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'Ce qu\'est AnyLLM',
        content: [
          '**AnyLLM est un client de chat Android, pas un lanceur de modèles.** La fiche Google Play la présente comme « one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more » et décrit un modèle « apportez votre propre clé » (BYOK) : vous saisissez vos propres clés API et payez directement les fournisseurs.',
          'Elle est publiée sous le nom Dotwel Labs, que le [site du développeur](https://dotwellabs.web.app) décrit comme un studio de produits indépendant. Ne la confondez pas avec [AnythingLLM](/fr/power-local-llm/anythingllm-review), une application open source sans rapport.',
          'Ce test s\'appuie uniquement sur la fiche Google Play, le site du développeur et la politique de confidentialité. Il ne comprend aucun essai pratique ; la vitesse, la stabilité et la qualité des réponses ne sont donc pas notées. Des formules marketing comme « the most polished AI chat UI on Android » sont celles du développeur et ne sont pas reprises comme des constats.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route consiste à installer l\'application depuis Google Play, puis à ajouter au moins une clé de fournisseur.** La fiche ne documente pas le premier lancement ; les étapes ci-dessous suivent ce qu\'indiquent la fiche et la politique de confidentialité.',
        ],
        numberedItems: [
          {
            title: 'Vérifier votre téléphone',
            whyItMatters: 'La fiche exige Android 7.0 ou plus récent. Aucune exigence de RAM ou de puce n\'est indiquée, car les modèles tournent chez un fournisseur ou sur un serveur, pas sur le téléphone.',
          },
          {
            title: 'Préparer vos clés',
            whyItMatters: 'AnyLLM fonctionne en BYOK : créez une clé API chez chaque fournisseur voulu. D\'après la politique de confidentialité, les clés sont conservées sur l\'appareil dans un stockage sécurisé.',
          },
          {
            title: 'Installer et ajouter un fournisseur',
            whyItMatters: 'Installez l\'application depuis [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm), saisissez une clé ou un point d\'accès personnalisé compatible OpenAI, puis choisissez un modèle.',
          },
          {
            title: 'Ajouter éventuellement Ollama, des serveurs MCP et la recherche',
            whyItMatters: 'Pointez l\'application vers un serveur Ollama pour des modèles locaux, ajoutez des serveurs MCP et activez DuckDuckGo, Brave Search ou SerpAPI pour la recherche web.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L\'intérêt d\'AnyLLM tient à l\'ensemble d\'outils autour du chat.** Tout ce qui suit provient de la fiche Google Play et de la politique de confidentialité.',
        ],
        items: [
          '**Débats IA contre IA.** Deux modèles débattent d\'un sujet en temps réel. La fiche y voit une fonction qu\'aucune autre application de chat IA n\'offre, affirmation que ce test n\'a pas vérifiée.',
          '**Outils MCP.** Se connecte à des serveurs Model Context Protocol via SSE et Streamable HTTP, avec une boucle d\'agent qui prend en charge l\'appel d\'outils.',
          '**Compétences d\'agent.** Importez des fichiers SKILL.md pour donner à un chat des connaissances métier, par exemple un assistant de code ou un partenaire d\'écriture.',
          '**Recherche web.** Navigation en direct via DuckDuckGo, Brave Search ou SerpAPI.',
          '**Mode raisonnement.** Un interrupteur du mode réflexion pour des modèles comme Claude et o1 d\'OpenAI affiche le raisonnement pas à pas avant la réponse finale.',
          '**Interface de chat.** Markdown, formules LaTeX, coloration du code, sortie en flux continu et préréglages de prompt système comme « Code Expert » ou « Socratic Teacher ».',
          '**Réglages par modèle.** La température, le nombre maximal de tokens et la taille de la fenêtre de contexte se règlent pour chaque modèle.',
          '**Mémoire.** D\'après la politique de confidentialité, l\'application extrait des faits clés des conversations (« memory facts ») et les stocke sur l\'appareil.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'Fournisseurs, Ollama et flux de données',
        content: [
          '**L\'essentiel d\'AnyLLM est un client pour des API cloud.** La fiche cite OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek et Together AI, et la politique de confidentialité ajoute OpenRouter. Llama 3 de Meta est proposé via Groq et non exécuté dans l\'application. Les points d\'accès personnalisés et les API compatibles OpenAI sont mentionnés, et d\'après la fiche vous payez les fournisseurs à leurs propres tarifs, sans abonnement chez AnyLLM.',
          '**Ollama est la voie locale.** La fiche décrit une intégration d\'Ollama pour des « offline/local AI models », et la politique de confidentialité indique que les données Ollama restent sur votre réseau local ou suivent votre configuration Ollama cloud. La fiche ne dit pas où le serveur Ollama doit tourner ; Ollama est un programme serveur, il faut donc s\'attendre à l\'exécuter sur un ordinateur que vous contrôlez et à y diriger le téléphone.',
          '**Ce qui part où.** Chaque message, ainsi que toute image ou tout document joint, part directement chez le fournisseur choisi, dans le cadre de votre propre accord avec lui. Avec Ollama, il part vers le serveur que vous configurez.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Tarifs et confidentialité',
        content: [
          '**AnyLLM se télécharge gratuitement, avec des achats intégrés ; la fiche Google Play du store américain affiche de 0,99 à 14,99 dollars US par article.** Ni la fiche ni le site du développeur ne disent ce que débloquent ces achats ; consultez la boutique intégrée avant de compter sur une fonction. Prévoyez à part le budget d\'usage des API, facturé par chaque fournisseur.',
          'La politique de confidentialité, mise à jour le 12 avril 2026, indique que l\'historique des chats, les memory facts, les clés API et les réglages des modèles restent sur votre appareil, dans une base locale ou un coffre sécurisé, et ne sont pas envoyés aux serveurs du développeur. Elle exclut aussi toute synchronisation cloud.',
          'La politique mentionne Google Analytics for Firebase : lancements de l\'application, écrans consultés, usage des fonctions, modèle d\'appareil, version du système et localisation au niveau du pays ou de la ville, mais ni contenu des chats ni clés. Le refus est possible dans les réglages du système ou en contactant le développeur.',
          'L\'application est à code fermé et ce test n\'a pas inspecté le trafic réseau ; ces déclarations sont donc celles du développeur.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Une application, plusieurs fournisseurs',
            'Ce que cela signifie en usage réel': 'Passer des modèles d\'OpenAI, Anthropic, Google et Groq de l\'un à l\'autre dans une seule interface de chat.',
            'Limite / réserve': 'Une clé API par fournisseur, et chacun facture séparément.',
          },
          {
            Avantage: 'Connexion Ollama',
            'Ce que cela signifie en usage réel': 'Utiliser des modèles locaux ou auto-hébergés depuis le téléphone.',
            'Limite / réserve': 'Exige un serveur Ollama que vous gérez ; la mise en place n\'est pas documentée dans la fiche.',
          },
          {
            Avantage: 'Outils MCP et compétences',
            'Ce que cela signifie en usage réel': 'Appel d\'outils, compétences SKILL.md et recherche web dans un chat mobile.',
            'Limite / réserve': 'Les résultats dépendent du modèle et des serveurs ajoutés ; non testé ici.',
          },
          {
            Avantage: 'Débats IA contre IA',
            'Ce que cela signifie en usage réel': 'Comparer la façon dont deux modèles raisonnent sur un même sujet.',
            'Limite / réserve': 'Chaque débat appelle deux modèles et consomme donc plus de crédit API.',
          },
          {
            Avantage: 'Stockage local des chats',
            'Ce que cela signifie en usage réel': 'L\'historique et les clés restent sur l\'appareil.',
            'Limite / réserve': 'Code fermé, analytique activée ; ces déclarations sont celles du développeur.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM vs. alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix et licence',
          'Où tournent les modèles',
          'Différence clé',
        ],
        rows: [
          {
            Application: 'AnyLLM',
            Plateformes: 'Android',
            'Prix et licence': 'Freemium, code fermé',
            'Où tournent les modèles': 'API des fournisseurs et Ollama',
            'Différence clé': 'BYOK multifournisseur avec MCP, compétences et débats IA contre IA',
          },
          {
            Application: '[RikkaHub](/fr/power-local-llm/rikkahub-review)',
            Plateformes: 'Android',
            'Prix et licence': 'Gratuit, MIT',
            'Où tournent les modèles': 'Fournisseurs que vous configurez',
            'Différence clé': 'Open source, même idée de changement de fournisseur',
          },
          {
            Application: '[Solair AI](/fr/power-local-llm/solair-ai-review)',
            Plateformes: 'iOS',
            'Prix et licence': 'Gratuit, code fermé',
            'Où tournent les modèles': 'Sur l\'appareil, repli cloud facultatif avec votre clé',
            'Différence clé': 'iPhone uniquement, local d\'abord',
          },
          {
            Application: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Où tournent les modèles': 'Sur le téléphone',
            'Différence clé': 'Exécute les modèles sur l\'appareil, aucune clé nécessaire',
          },
          {
            Application: '[Private Mind](/fr/power-local-llm/private-mind-review)',
            Plateformes: 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Où tournent les modèles': 'Sur le téléphone',
            'Différence clé': 'Chat hors ligne avec questions-réponses sur documents, sur l\'appareil',
          },
        ],
        note: 'Les plateformes, prix et fonctions des applications tierces changent fréquemment. Vérifiez les informations actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser AnyLLM',
        items: [
          '**Les utilisateurs Android qui paient déjà un accès API.** Une seule application couvre les clés OpenAI, Anthropic, Google et Groq.',
          '**Les bricoleurs qui veulent des outils sur le téléphone.** Serveurs MCP, compétences SKILL.md et recherche web transforment un chat en boucle d\'agent.',
          '**Les auto-hébergeurs avec un serveur Ollama.** L\'application peut l\'atteindre depuis le téléphone.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser AnyLLM',
        items: [
          '**Ceux qui veulent des modèles exécutés sur le téléphone.** AnyLLM n\'en exécute aucun ; [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Private Mind](/fr/power-local-llm/private-mind-review) le font.',
          '**Ceux qui ont besoin d\'open source.** Aucun dépôt n\'a été trouvé ; [RikkaHub](/fr/power-local-llm/rikkahub-review) est sous licence MIT.',
          '**Les utilisateurs d\'iPhone.** Seul Android est mentionné ; [Solair AI](/fr/power-local-llm/solair-ai-review) est une option iOS.',
          '**Ceux qui n\'ont pas de clés API.** Chaque modèle cloud exige une clé et un compte chez le fournisseur.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qui édite AnyLLM ?',
            a: 'Dotwel Labs, un studio indépendant qui présente AnyLLM comme son application phare. La fiche Google Play et la politique de confidentialité sont les seuls autres documents publics trouvés.',
          },
          {
            q: 'AnyLLM peut-elle exécuter des modèles sur mon téléphone ?',
            a: 'Aucun moteur de modèles n\'est décrit. C\'est un client : les modèles tournent chez le fournisseur ou sur un serveur Ollama. Pour l\'inférence sur l\'appareil, voir PocketPal AI.',
          },
          {
            q: 'AnyLLM fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Non. La fiche ne couvre qu\'Android.',
          },
          {
            q: 'Quels moteurs de recherche la recherche web utilise-t-elle ?',
            a: 'DuckDuckGo, Brave Search ou SerpAPI, d\'après la fiche. La politique de confidentialité cite Brave Search comme service tiers.',
          },
          {
            q: 'Puis-je utiliser mon propre point d\'accès ?',
            a: 'Oui. La fiche et le site du développeur indiquent que les points d\'accès personnalisés et les API compatibles OpenAI sont pris en charge ; une passerelle auto-hébergée peut donc fonctionner. La compatibilité avec un serveur précis n\'a pas été testée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'AnyLLM est un choix raisonnable pour un utilisateur Android qui détient déjà des clés API et veut des modèles OpenAI, Anthropic, Google et Groq, des outils MCP et la recherche web dans une seule application.',
          'Les réserves tiennent à la jeunesse et à la transparence : l\'application est récente et petite, à code fermé, et la fiche ne documente ni les articles payants ni la mise en place d\'Ollama. Elle n\'exécute aucun modèle sur le téléphone.',
          'Si vous voulez des modèles sur l\'appareil, commencez par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review). Pour un client Android multifournisseur open source, regardez d\'abord [RikkaHub](/fr/power-local-llm/rikkahub-review), et essayez la version gratuite d\'AnyLLM avant d\'acheter quoi que ce soit.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AnyLLM: AI Chat Client sur Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — version, date de mise à jour, fourchette de prix, prérequis et liste des fonctions.',
          '[Site de Dotwel Labs](https://dotwellabs.web.app) — la description d\'AnyLLM par le développeur, avec le BYOK et les points d\'accès personnalisés.',
          '[Politique de confidentialité d\'AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/) — stockage des données, analytique et services tiers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de RikkaHub](/fr/power-local-llm/rikkahub-review) — un client de chat Android open source qui change de fournisseur.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — chat open source sur l\'appareil pour iOS et Android.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source pour iPhone et Android.',
          '[Test de Solair AI](/fr/power-local-llm/solair-ai-review) — un assistant iOS local d\'abord, avec repli cloud facultatif via votre clé.',
          '[Test d\'AnythingLLM](/fr/power-local-llm/anythingllm-review) — l\'application d\'espace de travail open source, sans rapport, au nom proche.',
          '[Le Local LLM Software Directory complet](/fr/directory) — un répertoire plus large d\'outils de LLM locaux, toutes plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-ja.webp',
    title: 'AnyLLMレビュー:自分のAPIキーで使うAndroid向けAIチャットクライアント',
    seoTitle: 'AnyLLMレビュー:自分のAPIキーで使うAndroidチャット',
    intro: 'AnyLLMは、OpenAI、Anthropic、Google、Groqなどのプロバイダーを自分のAPIキーで使うAndroid向けチャットアプリで、ローカルモデル用にOllamaサーバーも接続できます。このレビューでは、Google Playの掲載情報、開発元のサイト、プライバシーポリシーで確認できる内容、不明な点、他のモバイル向けチャットクライアントとの違いをまとめます。',
    metaDescription: 'AnyLLMレビュー。OpenAI・Anthropic・Google・Groqを自分のAPIキーで使うAndroidチャット。Ollama、MCP、Web検索に対応。料金とプライバシー、制約。',
    twitterDescription: 'AnyLLMレビュー:自分のAPIキーで使う、クローズドソースのフリーミアムAndroidクライアント。Ollama、MCPツール、AI同士のディベートに対応。要件、料金、プライバシー、制約。',
    audience: 'AIプロバイダーのAPIキーやOllamaサーバーをすでに持っていて、複数のモデルを1つのチャットアプリで使いたいAndroidユーザー。機能、要件、料金、プライバシー、制約、代替アプリを扱います。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AnyLLM レビュー',
    targetKeywords: [
      'anyllm レビュー',
      'anyllm android アプリ',
      'byok aiチャット android',
      'ollama android クライアント',
      'mcp クライアント android',
      'openai anthropic gemini 1つのアプリ',
      'aiチャット クライアント android',
      'ai同士 ディベート アプリ',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLMは、Dotwel Labsが提供するクローズドソースのフリーミアムAndroidチャットクライアントで、自分のAPIキーでAIプロバイダー(OpenAI、Anthropic、Google、Groqなど)に接続し、ローカルモデル用のOllamaサーバーにも接続できます。** アプリ自体はモデルを実行しません。Google Playの掲載情報ではAndroid 7.0以降が必要です。このレビューはバージョン1.5.1を対象とし、実機での検証ではなく、公開されている掲載情報、開発元のサイト、プライバシーポリシーに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'AnyLLMはローカルAIアプリですか、それともクラウドのチャットクライアントですか?',
        answer: '主にクラウドのチャットクライアントです。入力したAPIキーのプロバイダーにメッセージを送信し、「ローカル」になるのはOllamaサーバーを指定した場合だけです。すでにAPIの利用料を払っていて、複数のプロバイダー、MCPツール、AI同士のディベートを1つのAndroidアプリで使いたい人に向いています。スマートフォン上でモデルを動かしたい人には向きません。オープンソースのAndroid代替はRikkaHub、端末上でモデルを動かすならPocketPal AIです。',
        bullets: [
          'ダウンロードは無料でアプリ内課金あり。モデルの利用料は各プロバイダーが自社の料金で請求します。',
          'OpenAI、Anthropic、Google、Groq、Mistral、DeepSeek、Together AIを自分のキーで利用できます。',
          'ローカルまたは自前ホストのモデル用に、Ollamaへの接続が任意で使えます。アプリはスマートフォン上でモデルを実行しません。',
          '追加機能:MCPツールサーバー、SKILL.mdエージェントスキル、Web検索、AI同士のディベート。',
          'クローズドソースでAndroid専用。チャットは端末内のローカルデータベースに保存されます。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'AnyLLMを入手する',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLMの概要',
        anchor: 'at-a-glance',
      },
      {
        label: 'AnyLLMとは',
        anchor: 'what-is-anyllm',
      },
      {
        label: '始め方',
        anchor: 'how-to-get-started',
      },
      {
        label: '機能',
        anchor: 'features',
      },
      {
        label: 'プロバイダー、Ollama、データの流れ',
        anchor: 'providers-and-ollama',
      },
      {
        label: '料金とプライバシー',
        anchor: 'privacy',
      },
      {
        label: 'トレードオフ:メリットと制約',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM 対 代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'AnyLLMを使うべき人',
        anchor: 'who-should-use',
      },
      {
        label: 'AnyLLMを使うべきでない人',
        anchor: 'who-should-not-use',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '出典',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLMはDotwel LabsのAndroidチャットクライアントで、ダウンロードは無料。OpenAI、Anthropic、Google、Groqなどを自分のAPIキーで使い、Ollama、MCPツール、Web検索にも任意で対応します。',
          },
          {
            type: 'plain-terms',
            text: '複数のAIサービスを1つのチャットアプリにまとめたものと考えてください。自分のキーを入力してモデルを選び、料金は各プロバイダーに直接支払います。AIモデルをスマートフォン上で動かすわけではなく、「ローカル」とは自分で運用するOllamaサーバーへの任意の接続のことです。',
          },
        ],
        items: [
          '開発元:Dotwel Labs。独立系スタジオで、[公式サイト](https://dotwellabs.web.app)ではAnyLLMを主力アプリとして紹介しています。',
          '対象:すでにAPIキーを持ち、複数のプロバイダーを1つのAndroidアプリで使いたい人。',
          '特徴:AI同士のディベート、MCPサーバー、SKILL.mdエージェントスキル、Web検索。',
          '制約:クローズドソースで、端末上の推論はなく、アプリ内課金で何が使えるようになるかは掲載情報に記載がありません。',
          '成熟度:Google Playのダウンロード数は1,000以上で、登場して間もなく、第三者による紹介も少ないアプリです。',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'AnyLLMを入手する',
        content: [
          '**AnyLLMはGoogle Playで配布されています。** ダウンロードは無料で、アプリ内課金があります。',
          'このレビューはPromptQuorumの[Local LLM Software Directory](/ja/directory)の補足記事で、同ディレクトリではAnyLLMを他のモバイル向けチャットクライアントと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Google Play',
            '入手方法': '[Google PlayのAnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            '入手経路': '公式サイト',
            '入手方法': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            '入手経路': 'プライバシーポリシー',
            '入手方法': '[AnyLLMのプライバシーポリシー](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: '公開されているソースコードのリポジトリは見つかっておらず、iPhone版やデスクトップ版もありません。掲載情報の対象はAndroidのみです。公式サイトは開発元のスタジオ紹介ページで、AnyLLM専用のサイトではありません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLMの概要',
        columns: ['項目', 'AnyLLM'],
        rows: [
          {
            '項目': 'プラットフォーム',
            AnyLLM: 'Android 7.0以降',
          },
          {
            '項目': 'バージョン',
            AnyLLM: '1.5.1',
          },
          {
            '項目': 'アプリの最終更新日',
            AnyLLM: '2026年9月5日',
          },
          {
            '項目': '価格',
            AnyLLM: '無料、アプリ内課金あり',
          },
          {
            '項目': 'ライセンス',
            AnyLLM: 'クローズドソース',
          },
          {
            '項目': 'モデルを自分で実行',
            AnyLLM: 'モデルエンジンの記載はなく、プロバイダーとOllamaに接続します',
          },
          {
            '項目': '画像入力',
            AnyLLM: 'あり(プライバシーポリシーによると画像を添付できます)',
          },
          {
            '項目': '音声入力・出力',
            AnyLLM: '掲載情報に記載なし',
          },
          {
            '項目': 'MCPツールサーバー',
            AnyLLM: 'あり(SSEとStreamable HTTP)',
          },
        ],
        note: '項目はLocal LLM Software Directoryのモバイル向けチャット比較に準じています。「記載なし」は、Google Playの掲載情報と開発元のサイトに記載がないという意味で、機能がないという意味ではありません。',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'AnyLLMとは',
        content: [
          '**AnyLLMはAndroid向けのチャットクライアントで、モデルを動かすアプリではありません。** Google Playの掲載情報では「one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more」と紹介され、自分のAPIキーを使う方式(BYOK)で、キーを入力してプロバイダーに直接料金を支払う仕組みだと説明されています。',
          '公開名はDotwel Labsで、[開発元のサイト](https://dotwellabs.web.app)では独立系のプロダクトスタジオとされています。無関係のオープンソースアプリである[AnythingLLM](/ja/power-local-llm/anythingllm-review)とは別物です。',
          'このレビューはGoogle Playの掲載情報、開発元のサイト、プライバシーポリシーのみに基づいています。実機での検証は行っていないため、速度、安定性、回答の質は評価していません。「the most polished AI chat UI on Android」のような宣伝文句は開発元自身のもので、検証結果としては繰り返しません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、Google Playからのインストールと、プロバイダーのキーを1つ以上追加する作業です。** 初回起動の流れは掲載情報に記載がないため、以下の手順は掲載情報とプライバシーポリシーの記載に沿っています。',
        ],
        numberedItems: [
          {
            title: '端末を確認する',
            whyItMatters: '掲載情報ではAndroid 7.0以降が必要です。モデルはプロバイダーやサーバー側で動き、スマートフォン上では動かないため、RAMやチップの要件は記載されていません。',
          },
          {
            title: 'キーを用意する',
            whyItMatters: 'AnyLLMはBYOKなので、使いたいプロバイダーごとにAPIキーを作成します。プライバシーポリシーによると、キーは端末内の安全なストレージに保管されます。',
          },
          {
            title: 'インストールしてプロバイダーを追加する',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)からアプリをインストールし、キーまたはOpenAI互換のカスタムエンドポイントを入力して、モデルを選びます。',
          },
          {
            title: '必要に応じてOllama、MCPサーバー、検索を追加する',
            whyItMatters: 'ローカルモデルを使うならOllamaサーバーを指定し、MCPサーバーを追加し、Web検索にはDuckDuckGo、Brave Search、SerpAPIのいずれかを有効にします。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**AnyLLMの特徴は、チャットの周辺にそろったツール群です。** 以下はすべてGoogle Playの掲載情報とプライバシーポリシーに基づきます。',
        ],
        items: [
          '**AI同士のディベート。** 2つのモデルがリアルタイムでテーマについて議論します。掲載情報は他のAIチャットアプリにはない機能としていますが、このレビューでは確認していません。',
          '**MCPツール。** SSEとStreamable HTTPでModel Context Protocolサーバーに接続し、ツール呼び出しに対応したエージェントループを備えます。',
          '**エージェントスキル。** SKILL.mdファイルを読み込むと、コーディングアシスタントや執筆パートナーなど、特定分野の知識をチャットに持たせられます。',
          '**Web検索。** DuckDuckGo、Brave Search、SerpAPIでリアルタイムに検索します。',
          '**推論モード。** ClaudeやOpenAIのo1などのモデルでは、思考モードを切り替えると最終回答の前に段階的な推論が表示されます。',
          '**チャット画面。** Markdown、LaTeX数式、コードのハイライト、ストリーミング出力に対応し、「Code Expert」や「Socratic Teacher」などのシステムプロンプトのプリセットがあります。',
          '**モデルごとの設定。** temperature、最大トークン数、コンテキストウィンドウのサイズをモデルごとに調整できます。',
          '**メモリ。** プライバシーポリシーによると、アプリはチャットから要点(「memory facts」)を抽出して端末内に保存します。',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'プロバイダー、Ollama、データの流れ',
        content: [
          '**AnyLLMの大部分はクラウドAPI向けのクライアントです。** 掲載情報ではOpenAI、Anthropic、Google、Groq、Mistral、DeepSeek、Together AIが挙げられ、プライバシーポリシーにはOpenRouterも記載されています。MetaのLlama 3はGroq経由で提供され、アプリ内では実行されません。カスタムエンドポイントとOpenAI互換APIも掲載されており、掲載情報によると料金は各プロバイダーの料金で支払い、AnyLLMのサブスクリプションはありません。',
          '**ローカルで使う手段はOllamaです。** 掲載情報は「offline/local AI models」向けのOllama連携を説明し、プライバシーポリシーはOllamaのデータがローカルネットワーク内にとどまるか、Ollamaクラウドの設定に従うとしています。Ollamaサーバーをどこで動かすかは掲載情報にありません。Ollamaはサーバープログラムなので、自分で管理するパソコンで動かし、スマートフォンから接続する形が一般的と考えられます。',
          '**データの送信先。** 各メッセージと、添付した画像や文書は、選択したプロバイダーに直接送信され、そのプロバイダーとの契約に従って扱われます。Ollamaを使う場合は、設定したサーバーに送信されます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金とプライバシー',
        content: [
          '**AnyLLMはダウンロード無料でアプリ内課金があり、日本のGoogle Playの掲載情報では1アイテムあたり¥170〜¥2,180と表示されます。** 課金で何が使えるようになるかは、掲載情報にも開発元のサイトにも記載がないため、機能を当てにする前にアプリ内ストアを確認してください。APIの利用料は各プロバイダーが請求するので、別に予算を見込んでください。',
          'プライバシーポリシー(最終更新日:2026年4月12日)によると、チャット履歴、memory facts、APIキー、モデル設定は端末内のローカルデータベースまたは安全な保管領域に保存され、開発元のサーバーにはアップロードされません。クラウド同期もないと記載されています。',
          'ポリシーにはGoogle Analytics for Firebaseの利用が明記されています。収集対象はアプリの起動、閲覧した画面、機能の利用状況、端末モデル、OSバージョン、国・市区町村レベルの位置情報で、チャットの内容やキーは含まれません。オプトアウトはシステム設定または開発元への連絡で可能です。',
          'アプリはクローズドソースで、このレビューではネットワーク通信を調べていないため、これらは開発元自身の説明です。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': '1つのアプリで複数のプロバイダー',
            '実際の利用での意味': 'OpenAI、Anthropic、Google、Groqのモデルを1つのチャット画面で切り替えられます。',
            '制約・注意点': 'プロバイダーごとにAPIキーが必要で、料金も別々に請求されます。',
          },
          {
            'メリット': 'Ollama連携',
            '実際の利用での意味': 'ローカルまたは自前ホストのモデルをスマートフォンから使えます。',
            '制約・注意点': '自分で運用するOllamaサーバーが必要で、設定方法は掲載情報にありません。',
          },
          {
            'メリット': 'MCPツールとスキル',
            '実際の利用での意味': 'ツール呼び出し、SKILL.mdスキル、Web検索をモバイルのチャットで使えます。',
            '制約・注意点': '結果はモデルと追加するサーバー次第で、ここでは検証していません。',
          },
          {
            'メリット': 'AI同士のディベート',
            '実際の利用での意味': '1つのテーマについて2つのモデルの考え方を比べられます。',
            '制約・注意点': '1回のディベートで2つのモデルを呼び出すため、APIの利用量が増えます。',
          },
          {
            'メリット': 'チャットのローカル保存',
            '実際の利用での意味': '履歴とキーが端末内にとどまります。',
            '制約・注意点': 'クローズドソースで解析も有効です。これらは開発元自身の説明です。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの実行場所', '主な違い'],
        rows: [
          {
            'アプリ': 'AnyLLM',
            'プラットフォーム': 'Android',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの実行場所': 'プロバイダーAPIとOllama',
            '主な違い': '複数プロバイダーのBYOKで、MCP、スキル、AI同士のディベートに対応',
          },
          {
            'アプリ': '[RikkaHub](/ja/power-local-llm/rikkahub-review)',
            'プラットフォーム': 'Android',
            '価格とライセンス': '無料、MIT',
            'モデルの実行場所': '自分で設定したプロバイダー',
            '主な違い': 'オープンソースで、プロバイダーを切り替える考え方は同じ',
          },
          {
            'アプリ': '[Solair AI](/ja/power-local-llm/solair-ai-review)',
            'プラットフォーム': 'iOS',
            '価格とライセンス': '無料、クローズドソース',
            'モデルの実行場所': '端末上、任意で自分のキーによるクラウド代替',
            '主な違い': 'iPhone専用でローカル優先',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの実行場所': 'スマートフォン上',
            '主な違い': '端末上でモデルを実行し、キーは不要',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの実行場所': 'スマートフォン上',
            '主な違い': '端末上の文書Q&Aに対応したオフラインチャット',
          },
        ],
        note: '他社アプリのプラットフォーム、価格、機能は頻繁に変わります。決める前に各アプリの掲載ページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnyLLMを使うべき人',
        items: [
          '**すでにAPIの利用料を払っているAndroidユーザー。** 1つのアプリでOpenAI、Anthropic、Google、Groqのキーをまとめて扱えます。',
          '**スマートフォンでツールを試したい人。** MCPサーバー、SKILL.mdスキル、Web検索で、チャットをエージェントループにできます。',
          '**Ollamaサーバーを自前で運用している人。** スマートフォンのアプリから接続できます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnyLLMを使うべきでない人',
        items: [
          '**スマートフォン上でモデルを動かしたい人。** AnyLLMは動かしません。[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)なら動かせます。',
          '**オープンソースが必須の人。** リポジトリは見つかっていません。[RikkaHub](/ja/power-local-llm/rikkahub-review)はMITライセンスです。',
          '**iPhoneユーザー。** 対応はAndroidのみです。iOSなら[Solair AI](/ja/power-local-llm/solair-ai-review)があります。',
          '**APIキーを持っていない人。** クラウドのモデルはすべて、キーとプロバイダーのアカウントが必要です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AnyLLMを作っているのは誰ですか?',
            a: '独立系スタジオのDotwel Labsで、AnyLLMを主力アプリとして紹介しています。ほかに見つかった公開資料は、Google Playの掲載情報とプライバシーポリシーだけです。',
          },
          {
            q: 'AnyLLMはスマートフォン上でモデルを実行できますか?',
            a: 'モデルエンジンの記載はありません。クライアントなので、モデルはプロバイダーかOllamaサーバーで動きます。端末上で推論するならPocketPal AIをご覧ください。',
          },
          {
            q: 'AnyLLMはiPhoneやパソコンで使えますか?',
            a: '使えません。掲載情報の対象はAndroidのみです。',
          },
          {
            q: 'Web検索はどの検索エンジンを使いますか?',
            a: '掲載情報によると、DuckDuckGo、Brave Search、SerpAPIのいずれかです。プライバシーポリシーはBrave Searchを第三者サービスとして挙げています。',
          },
          {
            q: '自分のエンドポイントを使えますか?',
            a: '使えます。掲載情報と開発元のサイトには、カスタムエンドポイントとOpenAI互換APIに対応するとあるため、自前ホストのゲートウェイも使える可能性があります。特定のサーバーとの互換性は検証していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'AnyLLMは、すでにAPIキーを持っていて、OpenAI、Anthropic、Google、Groqのモデル、MCPツール、Web検索を1つのアプリで使いたいAndroidユーザーには、妥当な選択肢です。',
          '注意点は新しさと透明性です。登場して間もない小規模なアプリで、クローズドソースであり、有料アイテムもOllamaの設定方法も掲載情報に書かれていません。スマートフォン上ではモデルを実行しません。',
          '端末上でモデルを動かしたいなら、まず[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)をご覧ください。オープンソースで複数プロバイダー対応のAndroidクライアントなら、先に[RikkaHub](/ja/power-local-llm/rikkahub-review)を見て、課金する前にAnyLLMの無料版を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのAnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — バージョン、更新日、価格帯、要件、機能一覧。',
          '[Dotwel Labsの公式サイト](https://dotwellabs.web.app) — 開発元によるAnyLLMの説明(BYOKとカスタムエンドポイントを含む)。',
          '[AnyLLMのプライバシーポリシー](https://sanjayram-a.github.io/anyllm-privacy-policy/) — データの保存、解析、第三者サービス。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[RikkaHubレビュー](/ja/power-local-llm/rikkahub-review) — プロバイダーを切り替えられるオープンソースのAndroidチャットクライアント。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けのオープンソースの端末内チャット。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けのオープンソースのオフラインチャットアプリ。',
          '[Solair AIレビュー](/ja/power-local-llm/solair-ai-review) — 自分のキーによるクラウド代替を任意で使える、ローカル優先のiOSアシスタント。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — 名前が似ている無関係のオープンソースのワークスペースアプリ。',
          '[ローカルLLMソフトウェア総合ディレクトリ](/ja/directory) — 各プラットフォームのローカルLLMツールを集めた、より幅広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-zh.webp',
    title: 'AnyLLM 评测：自带 API 密钥的 Android AI 聊天客户端',
    seoTitle: 'AnyLLM 评测：自带密钥的 Android 聊天客户端',
    intro: 'AnyLLM 是一款 Android 聊天应用，你可以用自己的 API 密钥接入 OpenAI、Anthropic、Google、Groq 等服务商，也可以连接 Ollama 服务器使用本地模型。本评测梳理 Google Play 页面、开发者网站和隐私政策中记载的内容、仍不清楚的地方，以及它与其他移动端聊天客户端的对比。',
    metaDescription: 'AnyLLM 评测：用自己的 API 密钥接入 OpenAI、Anthropic、Google 和 Groq 的 Android 聊天客户端，支持 Ollama、MCP 和网页搜索。价格、隐私与局限。',
    twitterDescription: 'AnyLLM 评测：闭源的免费增值 Android 客户端，自带 API 密钥，支持 Ollama、MCP 工具和 AI 对 AI 辩论。系统要求、价格、隐私与局限。',
    audience: '已有 AI 服务商 API 密钥或 Ollama 服务器、想用一个聊天应用接入多个模型的 Android 用户——涵盖功能、系统要求、价格、隐私、局限和替代方案。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AnyLLM 评测',
    targetKeywords: [
      'anyllm 评测',
      'anyllm android 应用',
      'byok ai 聊天 android',
      'ollama android 客户端',
      'mcp 客户端 android',
      'openai anthropic gemini 一个应用',
      'ai 聊天客户端 android',
      'ai 对 ai 辩论 应用',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM 是 Dotwel Labs 推出的闭源免费增值 Android 聊天客户端，用你自己的 API 密钥连接 AI 服务商（OpenAI、Anthropic、Google、Groq 等），并可连接 Ollama 服务器使用本地模型。** 应用本身不运行任何模型。根据 Google Play 页面，它需要 Android 7.0 或更高版本；本评测针对 1.5.1 版本，依据的是公开页面、开发者网站和隐私政策，而非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'AnyLLM 是本地 AI 应用，还是云端聊天客户端?',
        answer: '主要是云端聊天客户端：它把消息发送给你填入 API 密钥的服务商，只有把它指向 Ollama 服务器时才算“本地”。如果你已经在为 API 付费，并想在一个 Android 应用里使用多个服务商、MCP 工具和 AI 对 AI 辩论，它很合适；如果你想让模型直接在手机上运行，就不适合。开源的 Android 替代品是 RikkaHub，在设备上运行模型的是 PocketPal AI。',
        bullets: [
          '免费下载，含应用内购买；模型用量由各服务商按各自价格计费。',
          '用自己的密钥与 OpenAI、Anthropic、Google、Groq、Mistral、DeepSeek 和 Together AI 聊天。',
          '可选连接 Ollama，使用本地或自托管模型；应用不在手机上运行模型。',
          '附加功能：MCP 工具服务器、SKILL.md 智能体技能、网页搜索和 AI 对 AI 辩论。',
          '闭源，仅限 Android，聊天记录保存在设备本地数据库中。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: '快速答案',
        anchor: 'quick-answer',
      },
      {
        label: '获取 AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM 概览',
        anchor: 'at-a-glance',
      },
      {
        label: 'AnyLLM 是什么',
        anchor: 'what-is-anyllm',
      },
      {
        label: '如何开始使用',
        anchor: 'how-to-get-started',
      },
      {
        label: '功能',
        anchor: 'features',
      },
      {
        label: '服务商、Ollama 与数据流向',
        anchor: 'providers-and-ollama',
      },
      {
        label: '定价与隐私',
        anchor: 'privacy',
      },
      {
        label: '权衡：优点与局限',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM 与替代方案对比',
        anchor: 'vs-alternatives',
      },
      {
        label: '谁适合使用 AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: '谁不适合使用 AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM 由 Dotwel Labs 开发，是一款可免费下载的 Android 聊天客户端，用自己的 API 密钥接入 OpenAI、Anthropic、Google、Groq 等，并可选支持 Ollama、MCP 工具和网页搜索。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个聊天应用，统一接入多个 AI 服务：填入你自己的密钥，选择模型，费用直接付给各服务商。它不在手机上运行 AI 模型，所谓“本地”只是可选地连接你自己运行的 Ollama 服务器。',
          },
        ],
        items: [
          '开发方：Dotwel Labs，一家独立工作室，其[网站](https://dotwellabs.web.app)把 AnyLLM 作为主打应用。',
          '适用人群：已有 API 密钥、想在一个 Android 应用里使用多个服务商的人。',
          '亮点：AI 对 AI 辩论、MCP 服务器、SKILL.md 智能体技能和网页搜索。',
          '局限：闭源，不支持设备端推理，页面也没有说明应用内购买能解锁什么。',
          '成熟度：Google Play 显示下载量超过 1,000 次，属于较新的应用，第三方报道不多。',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: '获取 AnyLLM',
        content: [
          '**AnyLLM 通过 Google Play 分发。** 免费下载，含应用内购买。',
          '本评测是 PromptQuorum [Local LLM Software Directory](/zh/directory) 的配套文章，该目录把 AnyLLM 与其他移动端聊天客户端一并收录。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Google Play',
            '获取方式': '[Google Play 上的 AnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            '渠道': '官方网站',
            '获取方式': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            '渠道': '隐私政策',
            '获取方式': '[AnyLLM 隐私政策](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: '未找到公开的源代码仓库，也没有 iPhone 或桌面版本；页面仅覆盖 Android。该网站是开发者的工作室主页，并非 AnyLLM 专属网站。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM 概览',
        columns: ['属性', 'AnyLLM'],
        rows: [
          {
            '属性': '平台',
            AnyLLM: 'Android 7.0 及以上',
          },
          {
            '属性': '版本',
            AnyLLM: '1.5.1',
          },
          {
            '属性': '应用最近更新',
            AnyLLM: '2026年9月5日',
          },
          {
            '属性': '价格',
            AnyLLM: '免费，含应用内购买',
          },
          {
            '属性': '许可证',
            AnyLLM: '闭源',
          },
          {
            '属性': '自行运行模型',
            AnyLLM: '页面未描述模型引擎；它连接服务商和 Ollama',
          },
          {
            '属性': '图像输入',
            AnyLLM: '支持，隐私政策称可附加图片',
          },
          {
            '属性': '语音输入 / 输出',
            AnyLLM: '页面未说明',
          },
          {
            '属性': 'MCP 工具服务器',
            AnyLLM: '支持，SSE 和 Streamable HTTP',
          },
        ],
        note: '这些属性遵循 Local LLM Software Directory 中的移动端聊天对比。“未说明”表示 Google Play 页面和开发者网站没有提及，并不表示该功能不存在。',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'AnyLLM 是什么',
        content: [
          '**AnyLLM 是一款 Android 聊天客户端，而不是模型运行器。** Google Play 页面把它描述为“one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more”，并说明采用自带密钥（BYOK）模式：你填入自己的 API 密钥，直接向服务商付费。',
          '它以 Dotwel Labs 的名义发布，[开发者网站](https://dotwellabs.web.app)称其为独立产品工作室。请不要与毫无关联的开源应用 [AnythingLLM](/zh/power-local-llm/anythingllm-review) 混淆。',
          '本评测只依据 Google Play 页面、开发者网站和隐私政策，没有实际上手测试，因此不评价速度、稳定性和回答质量。“the most polished AI chat UI on Android”之类的宣传语出自开发者本人，不作为结论重复。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置过程是从 Google Play 安装，然后至少添加一个服务商密钥。** 页面没有说明首次运行流程，以下步骤依据页面和隐私政策的记载。',
        ],
        numberedItems: [
          {
            title: '检查手机',
            whyItMatters: '页面要求 Android 7.0 或更高版本。由于模型在服务商或服务器上运行，而不是在手机上，所以没有标明内存或芯片要求。',
          },
          {
            title: '准备好密钥',
            whyItMatters: 'AnyLLM 采用 BYOK，所以要在每个想用的服务商处创建 API 密钥。隐私政策称密钥保存在设备的安全存储中。',
          },
          {
            title: '安装并添加服务商',
            whyItMatters: '从 [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) 安装应用，填入密钥或兼容 OpenAI 的自定义端点，然后选择模型。',
          },
          {
            title: '可选：添加 Ollama、MCP 服务器和搜索',
            whyItMatters: '把应用指向 Ollama 服务器以使用本地模型，添加 MCP 服务器，并启用 DuckDuckGo、Brave Search 或 SerpAPI 进行网页搜索。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: ['**AnyLLM 的卖点是围绕聊天的一整套工具。** 以下内容均来自 Google Play 页面和隐私政策。'],
        items: [
          '**AI 对 AI 辩论。** 两个模型就一个话题实时辩论。页面称这是其他 AI 聊天应用没有的功能，本评测未核实这一说法。',
          '**MCP 工具。** 通过 SSE 和 Streamable HTTP 连接 Model Context Protocol 服务器，并带有支持工具调用的智能体循环。',
          '**智能体技能。** 导入 SKILL.md 文件，让聊天具备特定领域的知识，例如编程助手或写作搭档。',
          '**网页搜索。** 通过 DuckDuckGo、Brave Search 或 SerpAPI 实时搜索。',
          '**推理模式。** 对 Claude、OpenAI o1 等模型，可切换思考模式，在最终回答之前显示逐步推理。',
          '**聊天界面。** 支持 Markdown、LaTeX 公式、代码高亮、流式输出，以及“Code Expert”“Socratic Teacher”等系统提示词预设。',
          '**按模型设置。** 可为每个模型单独设置 temperature、最大 token 数和上下文窗口大小。',
          '**记忆。** 隐私政策称，应用会从聊天中提取关键事实（“memory facts”）并保存在设备上。',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: '服务商、Ollama 与数据流向',
        content: [
          '**AnyLLM 的大部分功能是云端 API 的客户端。** 页面列出了 OpenAI、Anthropic、Google、Groq、Mistral、DeepSeek 和 Together AI，隐私政策还提到 OpenRouter。Meta 的 Llama 3 通过 Groq 提供，而不是在应用内运行。页面列出了自定义端点和兼容 OpenAI 的 API，并称你按各服务商的价格付费，AnyLLM 本身没有订阅。',
          '**Ollama 是本地路径。** 页面描述了面向“offline/local AI models”的 Ollama 集成，隐私政策称 Ollama 的数据保留在你的本地网络内，或遵循你的 Ollama 云配置。页面没有说明 Ollama 服务器必须运行在哪里；Ollama 是服务器程序，因此通常要在你自己掌控的电脑上运行，再让手机连接过去。',
          '**数据流向。** 每条消息，以及你附加的图片或文档，都会直接发送给你选择的服务商，适用你与该服务商之间的协议。使用 Ollama 时，则发送到你配置的服务器。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '定价与隐私',
        content: [
          '**AnyLLM 免费下载，含应用内购买；美国区 Google Play 页面显示每项 $0.99 至 $14.99。** 页面和开发者网站都没有说明购买项能解锁什么，所以在依赖某项功能前，请先查看应用内商店。API 用量由各服务商另行计费，需单独预算。',
          '隐私政策（最近更新于 2026年4月12日）称，聊天记录、memory facts、API 密钥和模型设置都保存在你设备上的本地数据库或安全存储中，不会上传到开发者的服务器，也没有云同步。',
          '政策披露使用了 Google Analytics for Firebase：应用启动、浏览的页面、功能使用情况、设备型号、系统版本以及国家或城市级别的位置，但不包括聊天内容或密钥。可在系统设置中或联系开发者选择退出。',
          '该应用闭源，本评测也未检查网络流量，因此上述说法均出自开发者本人。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '一个应用，多个服务商',
            '实际使用中的意义': '在同一个聊天界面里切换 OpenAI、Anthropic、Google 和 Groq 的模型。',
            '局限/注意事项': '每个服务商都需要一个 API 密钥，并分别计费。',
          },
          {
            '优点': '连接 Ollama',
            '实际使用中的意义': '在手机上使用本地或自托管模型。',
            '局限/注意事项': '需要你自己运行 Ollama 服务器，页面没有记载设置方法。',
          },
          {
            '优点': 'MCP 工具与技能',
            '实际使用中的意义': '在移动端聊天中使用工具调用、SKILL.md 技能和网页搜索。',
            '局限/注意事项': '效果取决于模型和你添加的服务器，本文未测试。',
          },
          {
            '优点': 'AI 对 AI 辩论',
            '实际使用中的意义': '比较两个模型对同一话题的推理方式。',
            '局限/注意事项': '每场辩论要调用两个模型，会消耗更多 API 额度。',
          },
          {
            '优点': '聊天本地存储',
            '实际使用中的意义': '历史记录和密钥保留在设备上。',
            '局限/注意事项': '闭源且启用了统计分析；这些说法出自开发者本人。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM 与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型运行位置', '主要区别'],
        rows: [
          {
            '应用': 'AnyLLM',
            '平台': 'Android',
            '价格与许可证': '免费增值，闭源',
            '模型运行位置': '服务商 API 和 Ollama',
            '主要区别': '多服务商 BYOK，支持 MCP、技能和 AI 对 AI 辩论',
          },
          {
            '应用': '[RikkaHub](/zh/power-local-llm/rikkahub-review)',
            '平台': 'Android',
            '价格与许可证': '免费，MIT',
            '模型运行位置': '你配置的服务商',
            '主要区别': '开源，同样可在服务商之间切换',
          },
          {
            '应用': '[Solair AI](/zh/power-local-llm/solair-ai-review)',
            '平台': 'iOS',
            '价格与许可证': '免费，闭源',
            '模型运行位置': '设备端，可选用自己密钥的云端回退',
            '主要区别': '仅限 iPhone，本地优先',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型运行位置': '手机上',
            '主要区别': '在设备上运行模型，无需密钥',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型运行位置': '手机上',
            '主要区别': '离线聊天，支持设备端文档问答',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。做决定前，请在各应用自己的页面核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用 AnyLLM',
        items: [
          '**已经在为 API 付费的 Android 用户。** 一个应用即可管理 OpenAI、Anthropic、Google 和 Groq 的密钥。',
          '**想在手机上用工具的折腾爱好者。** MCP 服务器、SKILL.md 技能和网页搜索能把聊天变成智能体循环。',
          '**自己运行 Ollama 服务器的人。** 应用可以从手机连接到它。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用 AnyLLM',
        items: [
          '**想让模型在手机上运行的人。** AnyLLM 不运行任何模型；[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 和 [Private Mind](/zh/power-local-llm/private-mind-review) 可以。',
          '**需要开源的人。** 未找到源代码仓库；[RikkaHub](/zh/power-local-llm/rikkahub-review) 采用 MIT 许可证。',
          '**iPhone 用户。** 页面只列出 Android;iOS 可考虑 [Solair AI](/zh/power-local-llm/solair-ai-review)。',
          '**没有 API 密钥的人。** 每个云端模型都需要密钥和服务商账号。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AnyLLM 是谁开发的?',
            a: 'Dotwel Labs，一家把 AnyLLM 作为主打应用的独立工作室。除此之外，只找到 Google Play 页面和隐私政策这两份公开资料。',
          },
          {
            q: 'AnyLLM 能在我的手机上运行模型吗?',
            a: '页面没有描述模型引擎。它是客户端：模型在服务商处或 Ollama 服务器上运行。需要设备端推理，请参阅 PocketPal AI。',
          },
          {
            q: 'AnyLLM 能在 iPhone 或电脑上使用吗?',
            a: '不能。页面仅覆盖 Android。',
          },
          {
            q: '网页搜索使用哪些搜索引擎?',
            a: '根据页面，可选 DuckDuckGo、Brave Search 或 SerpAPI。隐私政策把 Brave Search 列为第三方服务。',
          },
          {
            q: '我可以使用自己的端点吗?',
            a: '可以。页面和开发者网站称支持自定义端点和兼容 OpenAI 的 API，因此自托管网关可能可用。未测试与具体服务器的兼容性。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '对已有 API 密钥、想在一个应用里使用 OpenAI、Anthropic、Google 和 Groq 的模型、MCP 工具与网页搜索的 Android 用户来说，AnyLLM 是一个合理的选择。',
          '需要注意的是应用较新、透明度有限：它规模小、闭源，页面既没有记载付费项目，也没有记载 Ollama 的设置方法，并且不在手机上运行任何模型。',
          '想在设备上运行模型，请先看 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。想要开源的多服务商 Android 客户端，请先看 [RikkaHub](/zh/power-local-llm/rikkahub-review)，并在购买任何内容前先试用 AnyLLM 的免费版本。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 AnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — 版本、更新日期、价格区间、系统要求和功能列表。',
          '[Dotwel Labs 网站](https://dotwellabs.web.app) — 开发者对 AnyLLM 的介绍，包括 BYOK 和自定义端点。',
          '[AnyLLM 隐私政策](https://sanjayram-a.github.io/anyllm-privacy-policy/) — 数据存储、统计分析和第三方服务。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[RikkaHub 评测](/zh/power-local-llm/rikkahub-review) — 可在服务商之间切换的开源 Android 聊天客户端。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的开源设备端聊天应用。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的开源离线聊天应用。',
          '[Solair AI 评测](/zh/power-local-llm/solair-ai-review) — 本地优先的 iOS 助手，可选用自己密钥的云端回退。',
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review) — 名称相近但毫无关联的开源工作区应用。',
          '[完整的本地 LLM 软件目录](/zh/directory) — 涵盖各平台本地 LLM 工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-es.webp',
    title: 'Reseña de AnyLLM: cliente de chat con IA para Android con tus propias claves API',
    seoTitle: 'Reseña de AnyLLM: chat Android con tus claves API',
    intro: 'AnyLLM es una app de chat para Android en la que usas tus propias claves API de proveedores como OpenAI, Anthropic, Google y Groq, y también puedes conectar un servidor Ollama para modelos locales. Esta reseña recoge lo que documentan la ficha de Google Play, el sitio del desarrollador y su política de privacidad, lo que sigue poco claro y cómo se compara AnyLLM con otros clientes de chat móviles.',
    metaDescription: 'Reseña de AnyLLM: cliente de chat Android con tus claves API de OpenAI, Anthropic, Google y Groq, más Ollama, MCP y búsqueda web. Precio y privacidad.',
    twitterDescription: 'Reseña de AnyLLM: un cliente Android freemium de código cerrado para tus propias claves API, con Ollama, herramientas MCP y debates entre IAs. Requisitos, precios, privacidad y límites.',
    audience: 'Usuarios de Android que ya tienen claves API de proveedores de IA, o un servidor Ollama, y quieren una sola app de chat para varios modelos — cubre funciones, requisitos, precios, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña AnyLLM',
    targetKeywords: [
      'reseña anyllm',
      'app anyllm android',
      'chat ia byok android',
      'cliente ollama android',
      'cliente mcp android',
      'openai anthropic gemini en una app',
      'cliente de chat ia android',
      'app debate ia contra ia',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM es un cliente de chat para Android, freemium y de código cerrado, de Dotwel Labs, que se conecta a proveedores de IA con tus propias claves API —OpenAI, Anthropic, Google, Groq y otros— y a un servidor Ollama para modelos locales.** No ejecuta ningún modelo por sí mismo. Según su ficha de Google Play, requiere Android 7.0 o posterior; esta reseña cubre la versión 1.5.1 y se basa en la ficha pública, el sitio del desarrollador y su política de privacidad, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿AnyLLM es una app de IA local o un cliente de chat en la nube?',
        answer: 'Sobre todo un cliente de chat en la nube: envía tus mensajes al proveedor cuya clave API introduces, y solo es «local» si la apuntas a un servidor Ollama. Encaja si ya pagas acceso a APIs y quieres varios proveedores, herramientas MCP y debates entre IAs en una sola app de Android; descártala si quieres modelos que se ejecuten en el propio teléfono. RikkaHub es la alternativa de código abierto para Android, y PocketPal AI ejecuta modelos en el dispositivo.',
        bullets: [
          'Descarga gratuita con compras dentro de la app; cada proveedor cobra el uso de los modelos según sus propias tarifas.',
          'Chat con tus propias claves para OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek y Together AI.',
          'Conexión opcional con Ollama para modelos locales o autoalojados; la app no ejecuta ningún modelo en el teléfono.',
          'Extras: servidores de herramientas MCP, habilidades de agente SKILL.md, búsqueda web y debates entre IAs.',
          'Código cerrado, solo Android, y los chats se guardan en una base de datos local del dispositivo.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Cómo conseguir AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM de un vistazo',
        anchor: 'at-a-glance',
      },
      {
        label: 'Qué es AnyLLM',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'Cómo empezar',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funciones',
        anchor: 'features',
      },
      {
        label: 'Proveedores, Ollama y flujo de datos',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'Precios y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Compensaciones: ventajas frente a limitaciones',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM frente a alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Quién debería usar AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: 'Quién no debería usar AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM, de Dotwel Labs, es un cliente de chat para Android de descarga gratuita en el que usas tus propias claves API de OpenAI, Anthropic, Google, Groq y otros, con compatibilidad opcional con Ollama, herramientas MCP y búsqueda web.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como una sola app de chat para varios servicios de IA: pegas tus propias claves, eliges un modelo y pagas a cada proveedor directamente. No ejecuta modelos de IA en el teléfono; la parte «local» es un enlace opcional a un servidor Ollama que gestionas tú.',
          },
        ],
        items: [
          'Creador: Dotwel Labs, un estudio independiente cuyo [sitio web](https://dotwellabs.web.app) presenta AnyLLM como su app principal.',
          'Público: personas que ya tienen claves API y quieren varios proveedores en una app de Android.',
          'Funciones destacadas: debates entre IAs, servidores MCP, habilidades de agente SKILL.md y búsqueda web.',
          'Límites: código cerrado, sin inferencia en el dispositivo, y la ficha no dice qué desbloquean las compras dentro de la app.',
          'Madurez: Google Play muestra más de 1.000 descargas, así que es una app joven con poca cobertura independiente.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'Cómo conseguir AnyLLM',
        content: [
          '**AnyLLM se distribuye a través de Google Play.** La descarga es gratuita, con compras dentro de la app.',
          'Esta reseña acompaña al [Local LLM Software Directory](/es/directory) de PromptQuorum, que incluye AnyLLM junto a otros clientes de chat móviles.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            Canal: 'Google Play',
            'Cómo conseguirla': '[AnyLLM: AI Chat Client en Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            Canal: 'Sitio web',
            'Cómo conseguirla': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            Canal: 'Política de privacidad',
            'Cómo conseguirla': '[Política de privacidad de AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'No se encontró ningún repositorio público de código fuente, y no hay versión para iPhone ni de escritorio; la ficha solo cubre Android. El sitio web es la página del estudio del desarrollador, no un sitio dedicado a AnyLLM.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM de un vistazo',
        columns: ['Atributo', 'AnyLLM'],
        rows: [
          {
            Atributo: 'Plataforma',
            AnyLLM: 'Android 7.0 o posterior',
          },
          {
            Atributo: 'Versión',
            AnyLLM: '1.5.1',
          },
          {
            Atributo: 'Última actualización de la app',
            AnyLLM: '5 de septiembre de 2026',
          },
          {
            Atributo: 'Precio',
            AnyLLM: 'Gratis, compras dentro de la app',
          },
          {
            Atributo: 'Licencia',
            AnyLLM: 'Código cerrado',
          },
          {
            Atributo: 'Ejecuta modelos por sí misma',
            AnyLLM: 'No se describe ningún motor de modelos; se conecta a proveedores y a Ollama',
          },
          {
            Atributo: 'Entrada de imágenes',
            AnyLLM: 'Sí, se pueden adjuntar imágenes según la política de privacidad',
          },
          {
            Atributo: 'Entrada / salida de voz',
            AnyLLM: 'No se indica en la ficha',
          },
          {
            Atributo: 'Servidores de herramientas MCP',
            AnyLLM: 'Sí, SSE y Streamable HTTP',
          },
        ],
        note: 'Los atributos siguen la comparativa de apps de chat móviles del Local LLM Software Directory. «No se indica» significa que ni la ficha de Google Play ni el sitio del desarrollador lo mencionan, no que la función no exista.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'Qué es AnyLLM',
        content: [
          '**AnyLLM es un cliente de chat para Android, no un ejecutor de modelos.** La ficha de Google Play lo presenta como «one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more» y describe un modelo de «trae tu propia clave» (BYOK): introduces tus propias claves API y pagas directamente a los proveedores.',
          'Se publica con el nombre Dotwel Labs, que el [sitio del desarrollador](https://dotwellabs.web.app) describe como un estudio de productos independiente. No lo confundas con [AnythingLLM](/es/power-local-llm/anythingllm-review), una app de código abierto sin relación.',
          'Esta reseña se basa solo en la ficha de Google Play, el sitio del desarrollador y la política de privacidad. No incluye pruebas prácticas, así que aquí no se valoran la velocidad, la estabilidad ni la calidad de las respuestas. Frases publicitarias como «the most polished AI chat UI on Android» son del propio desarrollador y no se repiten como hallazgos.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La puesta en marcha consiste en instalar desde Google Play y añadir al menos una clave de proveedor.** La ficha no documenta el primer inicio, así que los pasos siguientes se basan en lo que indican la ficha y la política de privacidad.',
        ],
        numberedItems: [
          {
            title: 'Comprueba tu teléfono',
            whyItMatters: 'La ficha exige Android 7.0 o posterior. No se indica ningún requisito de RAM ni de chip, porque los modelos se ejecutan en un proveedor o en un servidor, no en el teléfono.',
          },
          {
            title: 'Prepara tus claves',
            whyItMatters: 'AnyLLM es BYOK, así que crea una clave API en cada proveedor que quieras usar. Según la política de privacidad, las claves se guardan en el dispositivo en un almacenamiento seguro.',
          },
          {
            title: 'Instala y añade un proveedor',
            whyItMatters: 'Instala la app desde [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm), introduce una clave o un endpoint personalizado compatible con OpenAI y elige un modelo.',
          },
          {
            title: 'Añade opcionalmente Ollama, servidores MCP y búsqueda',
            whyItMatters: 'Apunta la app a un servidor Ollama para modelos locales, añade servidores MCP y activa DuckDuckGo, Brave Search o SerpAPI para la búsqueda web.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El atractivo de AnyLLM es el conjunto de herramientas que rodea al chat.** Todo lo siguiente procede de la ficha de Google Play y de la política de privacidad.',
        ],
        items: [
          '**Debates entre IAs.** Dos modelos discuten un tema entre sí en tiempo real. La ficha lo presenta como una función que ninguna otra app de chat con IA ofrece, algo que esta reseña no comprobó.',
          '**Herramientas MCP.** Se conecta a servidores del Model Context Protocol mediante SSE y Streamable HTTP, con un bucle de agente que admite llamadas a herramientas.',
          '**Habilidades de agente.** Importa archivos SKILL.md para dar a un chat conocimiento de un ámbito, por ejemplo un asistente de programación o un compañero de escritura.',
          '**Búsqueda web.** Navegación en vivo mediante DuckDuckGo, Brave Search o SerpAPI.',
          '**Modo de razonamiento.** Un interruptor de modo de pensamiento para modelos como Claude y o1 de OpenAI muestra el razonamiento paso a paso antes de la respuesta final.',
          '**Interfaz de chat.** Markdown, fórmulas LaTeX, resaltado de código, salida en streaming y preajustes de prompt de sistema como «Code Expert» o «Socratic Teacher».',
          '**Controles por modelo.** La temperatura, el máximo de tokens y el tamaño de la ventana de contexto se pueden ajustar para cada modelo.',
          '**Memoria.** Según la política de privacidad, la app extrae datos clave de los chats («memory facts») y los guarda en el dispositivo.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'Proveedores, Ollama y flujo de datos',
        content: [
          '**La mayor parte de AnyLLM es un cliente de APIs en la nube.** La ficha cita OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek y Together AI, y la política de privacidad añade OpenRouter. Llama 3 de Meta se ofrece a través de Groq y no se ejecuta en la app. Se mencionan endpoints personalizados y APIs compatibles con OpenAI, y según la ficha pagas a los proveedores a sus propias tarifas, sin suscripción de AnyLLM.',
          '**Ollama es la vía local.** La ficha describe una integración con Ollama para «offline/local AI models», y la política de privacidad dice que los datos de Ollama permanecen en tu red local o siguen tu configuración de Ollama en la nube. La ficha no dice dónde debe ejecutarse el servidor Ollama; Ollama es un programa de servidor, así que lo normal es ejecutarlo en un ordenador que controlas y apuntar el teléfono hacia él.',
          '**Qué va adónde.** Cada mensaje, y cualquier imagen o documento que adjuntes, va directamente al proveedor que elegiste, bajo tu propio acuerdo con él. Con Ollama va al servidor que configures.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios y privacidad',
        content: [
          '**AnyLLM es una descarga gratuita con compras dentro de la app; la ficha de Google Play de la tienda de EE. UU. muestra de 0.99 a 14.99 dólares por artículo.** Ni la ficha ni el sitio del desarrollador dicen qué desbloquean las compras, así que revisa la tienda interna antes de depender de una función. Presupuesta aparte el uso de las APIs, que factura cada proveedor.',
          'La política de privacidad, actualizada por última vez el 12 de abril de 2026, dice que el historial de chats, los memory facts, las claves API y los ajustes de los modelos permanecen en tu dispositivo, en una base de datos local o un almacén seguro, y no se suben a los servidores del desarrollador. También dice que no hay sincronización en la nube.',
          'La política declara Google Analytics for Firebase: inicios de la app, pantallas vistas, uso de funciones, modelo del dispositivo, versión del sistema y ubicación a nivel de país o ciudad, pero no el contenido de los chats ni las claves. Se puede desactivar en los ajustes del sistema o contactando con el desarrollador.',
          'La app es de código cerrado y esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son del propio desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Una app, varios proveedores',
            'Qué significa en el uso real': 'Cambiar entre modelos de OpenAI, Anthropic, Google y Groq en una sola interfaz de chat.',
            'Limitación / advertencia': 'Hace falta una clave API por proveedor, y cada uno factura por separado.',
          },
          {
            Ventaja: 'Conexión con Ollama',
            'Qué significa en el uso real': 'Usar modelos locales o autoalojados desde el teléfono.',
            'Limitación / advertencia': 'Requiere un servidor Ollama que gestionas tú; la configuración no está documentada en la ficha.',
          },
          {
            Ventaja: 'Herramientas MCP y habilidades',
            'Qué significa en el uso real': 'Llamadas a herramientas, habilidades SKILL.md y búsqueda web en un chat móvil.',
            'Limitación / advertencia': 'Los resultados dependen del modelo y de los servidores que añadas; no se probó aquí.',
          },
          {
            Ventaja: 'Debates entre IAs',
            'Qué significa en el uso real': 'Comparar cómo razonan dos modelos sobre un mismo tema.',
            'Limitación / advertencia': 'Cada debate llama a dos modelos, así que gasta más crédito de API.',
          },
          {
            Ventaja: 'Almacenamiento local de chats',
            'Qué significa en el uso real': 'El historial y las claves permanecen en el dispositivo.',
            'Limitación / advertencia': 'Código cerrado y analítica activada; las afirmaciones son del desarrollador.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM frente a alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio y licencia',
          'Dónde se ejecutan los modelos',
          'Diferencia clave',
        ],
        rows: [
          {
            App: 'AnyLLM',
            Plataformas: 'Android',
            'Precio y licencia': 'Freemium, código cerrado',
            'Dónde se ejecutan los modelos': 'APIs de proveedores y Ollama',
            'Diferencia clave': 'BYOK con varios proveedores, MCP, habilidades y debates entre IAs',
          },
          {
            App: '[RikkaHub](/es/power-local-llm/rikkahub-review)',
            Plataformas: 'Android',
            'Precio y licencia': 'Gratis, MIT',
            'Dónde se ejecutan los modelos': 'Proveedores que configuras',
            'Diferencia clave': 'Código abierto, la misma idea de cambiar de proveedor',
          },
          {
            App: '[Solair AI](/es/power-local-llm/solair-ai-review)',
            Plataformas: 'iOS',
            'Precio y licencia': 'Gratis, código cerrado',
            'Dónde se ejecutan los modelos': 'En el dispositivo, respaldo opcional en la nube con tu clave',
            'Diferencia clave': 'Solo iPhone, primero local',
          },
          {
            App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Dónde se ejecutan los modelos': 'En el teléfono',
            'Diferencia clave': 'Ejecuta modelos en el dispositivo, sin claves',
          },
          {
            App: '[Private Mind](/es/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Dónde se ejecutan los modelos': 'En el teléfono',
            'Diferencia clave': 'Chat sin conexión con preguntas y respuestas sobre documentos en el dispositivo',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de apps de terceros cambian con frecuencia. Verifica los datos actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar AnyLLM',
        items: [
          '**Usuarios de Android que ya pagan acceso a APIs.** Una sola app cubre claves de OpenAI, Anthropic, Google y Groq.',
          '**Curiosos que quieren herramientas en el teléfono.** Los servidores MCP, las habilidades SKILL.md y la búsqueda web convierten un chat en un bucle de agente.',
          '**Quienes autoalojan un servidor Ollama.** La app puede llegar a él desde el teléfono.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar AnyLLM',
        items: [
          '**Quien quiera modelos ejecutándose en el teléfono.** AnyLLM no ejecuta ninguno; [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Private Mind](/es/power-local-llm/private-mind-review) sí.',
          '**Quien necesite código abierto.** No se encontró ningún repositorio; [RikkaHub](/es/power-local-llm/rikkahub-review) tiene licencia MIT.',
          '**Usuarios de iPhone.** Solo figura Android; [Solair AI](/es/power-local-llm/solair-ai-review) es una opción para iOS.',
          '**Quien no tenga claves API.** Cada modelo en la nube necesita una clave y una cuenta con el proveedor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Quién está detrás de AnyLLM?',
            a: 'Dotwel Labs, un estudio independiente que presenta AnyLLM como su app principal. La ficha de Google Play y la política de privacidad son los únicos otros documentos públicos que se encontraron.',
          },
          {
            q: '¿Puede AnyLLM ejecutar modelos en mi teléfono?',
            a: 'No se describe ningún motor de modelos. Es un cliente: los modelos se ejecutan en el proveedor o en un servidor Ollama. Para inferencia en el dispositivo, consulta PocketPal AI.',
          },
          {
            q: '¿Funciona AnyLLM en iPhone o en el ordenador?',
            a: 'No. La ficha solo cubre Android.',
          },
          {
            q: '¿Qué buscadores usa la búsqueda web?',
            a: 'DuckDuckGo, Brave Search o SerpAPI, según la ficha. La política de privacidad nombra a Brave Search como servicio de terceros.',
          },
          {
            q: '¿Puedo usar mi propio endpoint?',
            a: 'Sí. La ficha y el sitio del desarrollador indican que se admiten endpoints personalizados y APIs compatibles con OpenAI, así que una pasarela autoalojada puede funcionar. No se probó la compatibilidad con un servidor concreto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'AnyLLM es una opción razonable para un usuario de Android que ya tiene claves API y quiere modelos de OpenAI, Anthropic, Google y Groq, herramientas MCP y búsqueda web en una sola app.',
          'Las salvedades son la juventud y la transparencia: es una app joven y pequeña, de código cerrado, y la ficha no documenta ni los artículos de pago ni la configuración de Ollama. No ejecuta ningún modelo en el teléfono.',
          'Si quieres modelos en el dispositivo, empieza por [PocketPal AI](/es/power-local-llm/pocketpal-ai-review). Si buscas un cliente Android multiproveedor de código abierto, mira primero [RikkaHub](/es/power-local-llm/rikkahub-review), y prueba la versión gratuita de AnyLLM antes de comprar nada.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[AnyLLM: AI Chat Client en Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — versión, fecha de actualización, rango de precios, requisitos y lista de funciones.',
          '[Sitio web de Dotwel Labs](https://dotwellabs.web.app) — la descripción de AnyLLM por parte del desarrollador, incluidos BYOK y los endpoints personalizados.',
          '[Política de privacidad de AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/) — almacenamiento de datos, analítica y servicios de terceros.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de RikkaHub](/es/power-local-llm/rikkahub-review) — un cliente de chat para Android de código abierto que cambia entre proveedores.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — chat de código abierto en el dispositivo para iOS y Android.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto para iPhone y Android.',
          '[Reseña de Solair AI](/es/power-local-llm/solair-ai-review) — un asistente para iOS con prioridad local y respaldo opcional en la nube con tu clave.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — la app de espacio de trabajo de código abierto, sin relación, con nombre parecido.',
          '[El directorio completo de software de LLM locales](/es/directory) — un directorio más amplio de herramientas de LLM locales para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-pt.webp',
    title: 'Análise do AnyLLM: cliente de chat com IA para Android com suas próprias chaves de API',
    seoTitle: 'Análise do AnyLLM: chat Android com chaves de API',
    intro: 'O AnyLLM é um app de chat para Android em que você usa suas próprias chaves de API de provedores como OpenAI, Anthropic, Google e Groq, e também pode conectar um servidor Ollama para modelos locais. Esta análise reúne o que a página do Google Play, o site do desenvolvedor e a política de privacidade documentam, o que continua incerto e como o AnyLLM se compara a outros clientes de chat para celular.',
    metaDescription: 'Análise do AnyLLM: cliente de chat Android com chaves de API da OpenAI, Anthropic, Google e Groq, mais Ollama, MCP e busca na web. Preço e privacidade.',
    twitterDescription: 'Análise do AnyLLM: um cliente Android freemium de código fechado para suas próprias chaves de API, com Ollama, ferramentas MCP e debates entre IAs. Requisitos, preços, privacidade e limites.',
    audience: 'Usuários de Android que já têm chaves de API de provedores de IA, ou um servidor Ollama, e querem um único app de chat para vários modelos — cobre recursos, requisitos, preços, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise AnyLLM',
    targetKeywords: [
      'análise anyllm',
      'app anyllm android',
      'chat ia byok android',
      'cliente ollama android',
      'cliente mcp android',
      'openai anthropic gemini em um app',
      'cliente de chat ia android',
      'app debate ia contra ia',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**O AnyLLM é um cliente de chat para Android, freemium e de código fechado, da Dotwel Labs, que se conecta a provedores de IA com suas próprias chaves de API — OpenAI, Anthropic, Google, Groq e outros — e a um servidor Ollama para modelos locais.** Ele não executa nenhum modelo por conta própria. Segundo a página do Google Play, exige Android 7.0 ou superior; esta análise cobre a versão 1.5.1 e se baseia na página pública, no site do desenvolvedor e na política de privacidade, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'O AnyLLM é um app de IA local ou um cliente de chat na nuvem?',
        answer: 'Principalmente um cliente de chat na nuvem: ele envia suas mensagens ao provedor cuja chave de API você informa e só é «local» quando você o aponta para um servidor Ollama. Serve se você já paga por acesso a APIs e quer vários provedores, ferramentas MCP e debates entre IAs em um único app Android; descarte-o se quiser modelos rodando no próprio celular. O RikkaHub é a alternativa de código aberto para Android, e o PocketPal AI executa modelos no aparelho.',
        bullets: [
          'Download gratuito com compras no app; cada provedor cobra o uso dos modelos pelas próprias tarifas.',
          'Chat com suas próprias chaves para OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek e Together AI.',
          'Conexão opcional com o Ollama para modelos locais ou hospedados por você; o app não executa nenhum modelo no celular.',
          'Extras: servidores de ferramentas MCP, habilidades de agente SKILL.md, busca na web e debates entre IAs.',
          'Código fechado, somente Android, e os chats ficam em um banco de dados local no aparelho.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Como obter o AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM em resumo',
        anchor: 'at-a-glance',
      },
      {
        label: 'O que é o AnyLLM',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'Como começar',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Recursos',
        anchor: 'features',
      },
      {
        label: 'Provedores, Ollama e fluxo de dados',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'Preços e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Prós e contras: benefícios vs. limitações',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM vs. alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Quem deveria usar o AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: 'Quem não deveria usar o AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O AnyLLM, da Dotwel Labs, é um cliente de chat para Android com download gratuito em que você usa suas próprias chaves de API da OpenAI, Anthropic, Google, Groq e outros, com suporte opcional a Ollama, ferramentas MCP e busca na web.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um único app de chat para vários serviços de IA: você cola suas próprias chaves, escolhe um modelo e paga a cada provedor diretamente. Ele não executa modelos de IA no celular; a parte «local» é uma ligação opcional com um servidor Ollama que você mesmo mantém.',
          },
        ],
        items: [
          'Criador: Dotwel Labs, um estúdio independente cujo [site](https://dotwellabs.web.app) apresenta o AnyLLM como seu app principal.',
          'Público: pessoas que já têm chaves de API e querem vários provedores em um app Android.',
          'Destaques: debates entre IAs, servidores MCP, habilidades de agente SKILL.md e busca na web.',
          'Limites: código fechado, sem inferência no aparelho, e a página não diz o que as compras no app liberam.',
          'Maturidade: o Google Play mostra mais de 1.000 downloads, então é um app jovem com pouca cobertura independente.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'Como obter o AnyLLM',
        content: [
          '**O AnyLLM é distribuído pelo Google Play.** O download é gratuito, com compras no app.',
          'Esta análise acompanha o [Local LLM Software Directory](/pt/directory) da PromptQuorum, que lista o AnyLLM ao lado de outros clientes de chat para celular.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            Canal: 'Google Play',
            'Como obter': '[AnyLLM: AI Chat Client no Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            Canal: 'Site',
            'Como obter': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            Canal: 'Política de privacidade',
            'Como obter': '[Política de privacidade do AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'Nenhum repositório público de código-fonte foi encontrado, e não há versão para iPhone nem para computador; a página cobre apenas Android. O site é a página do estúdio do desenvolvedor, não um site dedicado ao AnyLLM.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM em resumo',
        columns: ['Atributo', 'AnyLLM'],
        rows: [
          {
            Atributo: 'Plataforma',
            AnyLLM: 'Android 7.0 ou superior',
          },
          {
            Atributo: 'Versão',
            AnyLLM: '1.5.1',
          },
          {
            Atributo: 'Última atualização do app',
            AnyLLM: '5 de setembro de 2026',
          },
          {
            Atributo: 'Preço',
            AnyLLM: 'Grátis, compras no app',
          },
          {
            Atributo: 'Licença',
            AnyLLM: 'Código fechado',
          },
          {
            Atributo: 'Executa modelos por conta própria',
            AnyLLM: 'Nenhum mecanismo de modelos é descrito; ele se conecta a provedores e ao Ollama',
          },
          {
            Atributo: 'Entrada de imagem',
            AnyLLM: 'Sim, é possível anexar imagens segundo a política de privacidade',
          },
          {
            Atributo: 'Entrada / saída de voz',
            AnyLLM: 'Não informado na página',
          },
          {
            Atributo: 'Servidores de ferramentas MCP',
            AnyLLM: 'Sim, SSE e Streamable HTTP',
          },
        ],
        note: 'Os atributos seguem a comparação de apps de chat para celular do Local LLM Software Directory. «Não informado» significa que a página do Google Play e o site do desenvolvedor não mencionam, não que o recurso não exista.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'O que é o AnyLLM',
        content: [
          '**O AnyLLM é um cliente de chat para Android, não um executor de modelos.** A página do Google Play o apresenta como «one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more» e descreve um modelo de «traga sua própria chave» (BYOK): você informa suas próprias chaves de API e paga diretamente aos provedores.',
          'Ele é publicado com o nome Dotwel Labs, que o [site do desenvolvedor](https://dotwellabs.web.app) descreve como um estúdio de produtos independente. Não o confunda com o [AnythingLLM](/pt/power-local-llm/anythingllm-review), um app de código aberto sem relação.',
          'Esta análise se baseia somente na página do Google Play, no site do desenvolvedor e na política de privacidade. Não inclui testes práticos, então velocidade, estabilidade e qualidade das respostas não são avaliadas aqui. Frases de marketing como «the most polished AI chat UI on Android» são do próprio desenvolvedor e não são repetidas como constatações.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é instalar pelo Google Play e adicionar ao menos uma chave de provedor.** A página não documenta a primeira execução, então os passos abaixo seguem o que a página e a política de privacidade informam.',
        ],
        numberedItems: [
          {
            title: 'Confira o seu celular',
            whyItMatters: 'A página exige Android 7.0 ou superior. Nenhum requisito de RAM ou de chip é informado, porque os modelos rodam em um provedor ou em um servidor, não no celular.',
          },
          {
            title: 'Deixe as chaves prontas',
            whyItMatters: 'O AnyLLM é BYOK, então crie uma chave de API em cada provedor que quiser usar. Segundo a política de privacidade, as chaves ficam no aparelho, em armazenamento seguro.',
          },
          {
            title: 'Instale e adicione um provedor',
            whyItMatters: 'Instale o app pelo [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm), informe uma chave ou um endpoint personalizado compatível com a OpenAI e escolha um modelo.',
          },
          {
            title: 'Se quiser, adicione Ollama, servidores MCP e busca',
            whyItMatters: 'Aponte o app para um servidor Ollama para modelos locais, adicione servidores MCP e ative DuckDuckGo, Brave Search ou SerpAPI para a busca na web.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O atrativo do AnyLLM é o conjunto de ferramentas em torno do chat.** Tudo o que segue vem da página do Google Play e da política de privacidade.',
        ],
        items: [
          '**Debates entre IAs.** Dois modelos discutem um tema entre si em tempo real. A página diz que nenhum outro app de chat com IA oferece isso, afirmação que esta análise não verificou.',
          '**Ferramentas MCP.** Conecta-se a servidores do Model Context Protocol por SSE e Streamable HTTP, com um laço de agente que oferece suporte a chamadas de ferramentas.',
          '**Habilidades de agente.** Importe arquivos SKILL.md para dar a um chat conhecimento de uma área, por exemplo um assistente de programação ou um parceiro de escrita.',
          '**Busca na web.** Navegação em tempo real via DuckDuckGo, Brave Search ou SerpAPI.',
          '**Modo de raciocínio.** Uma chave do modo de pensamento para modelos como Claude e o1 da OpenAI mostra o raciocínio passo a passo antes da resposta final.',
          '**Interface de chat.** Markdown, fórmulas LaTeX, destaque de código, saída em streaming e predefinições de prompt de sistema como «Code Expert» ou «Socratic Teacher».',
          '**Controles por modelo.** Temperatura, máximo de tokens e tamanho da janela de contexto podem ser ajustados para cada modelo.',
          '**Memória.** Segundo a política de privacidade, o app extrai fatos importantes dos chats («memory facts») e os guarda no aparelho.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'Provedores, Ollama e fluxo de dados',
        content: [
          '**A maior parte do AnyLLM é um cliente de APIs na nuvem.** A página cita OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek e Together AI, e a política de privacidade acrescenta o OpenRouter. O Llama 3 da Meta é oferecido via Groq e não é executado no app. Endpoints personalizados e APIs compatíveis com a OpenAI estão listados, e segundo a página você paga aos provedores pelas tarifas deles, sem assinatura do AnyLLM.',
          '**O Ollama é o caminho local.** A página descreve uma integração com o Ollama para «offline/local AI models», e a política de privacidade diz que os dados do Ollama ficam na sua rede local ou seguem a sua configuração do Ollama na nuvem. A página não diz onde o servidor Ollama precisa rodar; o Ollama é um programa de servidor, então espere executá-lo em um computador seu e apontar o celular para ele.',
          '**O que vai para onde.** Cada mensagem, e qualquer imagem ou documento anexado, vai direto para o provedor escolhido, sob o seu próprio acordo com ele. Com o Ollama, vai para o servidor que você configurar.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços e privacidade',
        content: [
          '**O AnyLLM é um download gratuito com compras no app; a página do Google Play na loja brasileira mostra de R$ 4,99 a R$ 69,99 por item.** Nem a página nem o site do desenvolvedor dizem o que as compras liberam, então confira a loja interna antes de depender de um recurso. Reserve um orçamento à parte para o uso das APIs, que cada provedor cobra.',
          'A política de privacidade, atualizada em 12 de abril de 2026, diz que o histórico de chats, os memory facts, as chaves de API e as configurações dos modelos ficam no seu aparelho, em um banco de dados local ou em um cofre seguro, e não são enviados aos servidores do desenvolvedor. Também diz que não há sincronização na nuvem.',
          'A política informa o uso do Google Analytics for Firebase: aberturas do app, telas visualizadas, uso de recursos, modelo do aparelho, versão do sistema e localização em nível de país ou cidade, mas não o conteúdo dos chats nem as chaves. É possível recusar nas configurações do sistema ou falando com o desenvolvedor.',
          'O app é de código fechado e esta análise não inspecionou o tráfego de rede, então essas afirmações são do próprio desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Um app, vários provedores',
            'O que significa no uso real': 'Alternar entre modelos da OpenAI, Anthropic, Google e Groq em uma só interface de chat.',
            'Limitação / ressalva': 'Exige uma chave de API por provedor, e cada um cobra separadamente.',
          },
          {
            'Benefício': 'Conexão com o Ollama',
            'O que significa no uso real': 'Usar modelos locais ou hospedados por você a partir do celular.',
            'Limitação / ressalva': 'Exige um servidor Ollama que você mantém; a configuração não está documentada na página.',
          },
          {
            'Benefício': 'Ferramentas MCP e habilidades',
            'O que significa no uso real': 'Chamadas de ferramentas, habilidades SKILL.md e busca na web em um chat móvel.',
            'Limitação / ressalva': 'Os resultados dependem do modelo e dos servidores adicionados; não testado aqui.',
          },
          {
            'Benefício': 'Debates entre IAs',
            'O que significa no uso real': 'Comparar como dois modelos raciocinam sobre o mesmo tema.',
            'Limitação / ressalva': 'Cada debate chama dois modelos, então consome mais crédito de API.',
          },
          {
            'Benefício': 'Armazenamento local dos chats',
            'O que significa no uso real': 'Histórico e chaves ficam no aparelho.',
            'Limitação / ressalva': 'Código fechado, com análise de uso ativada; as afirmações são do desenvolvedor.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM vs. alternativas',
        columns: [
          'Aplicativo',
          'Plataformas',
          'Preço e licença',
          'Onde os modelos rodam',
          'Diferença-chave',
        ],
        rows: [
          {
            Aplicativo: 'AnyLLM',
            Plataformas: 'Android',
            'Preço e licença': 'Freemium, código fechado',
            'Onde os modelos rodam': 'APIs de provedores e Ollama',
            'Diferença-chave': 'BYOK com vários provedores, MCP, habilidades e debates entre IAs',
          },
          {
            Aplicativo: '[RikkaHub](/pt/power-local-llm/rikkahub-review)',
            Plataformas: 'Android',
            'Preço e licença': 'Grátis, MIT',
            'Onde os modelos rodam': 'Provedores que você configura',
            'Diferença-chave': 'Código aberto, a mesma ideia de alternar entre provedores',
          },
          {
            Aplicativo: '[Solair AI](/pt/power-local-llm/solair-ai-review)',
            Plataformas: 'iOS',
            'Preço e licença': 'Grátis, código fechado',
            'Onde os modelos rodam': 'No aparelho, alternativa opcional na nuvem com sua chave',
            'Diferença-chave': 'Somente iPhone, local em primeiro lugar',
          },
          {
            Aplicativo: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço e licença': 'Grátis, MIT',
            'Onde os modelos rodam': 'No celular',
            'Diferença-chave': 'Executa modelos no aparelho, sem chaves',
          },
          {
            Aplicativo: '[Private Mind](/pt/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Preço e licença': 'Grátis, MIT',
            'Onde os modelos rodam': 'No celular',
            'Diferença-chave': 'Chat offline com perguntas e respostas sobre documentos no aparelho',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confirme os dados atuais na página de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o AnyLLM',
        items: [
          '**Usuários de Android que já pagam por acesso a APIs.** Um único app cobre chaves da OpenAI, Anthropic, Google e Groq.',
          '**Curiosos que querem ferramentas no celular.** Servidores MCP, habilidades SKILL.md e busca na web transformam um chat em um laço de agente.',
          '**Quem hospeda um servidor Ollama.** O app consegue alcançá-lo a partir do celular.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o AnyLLM',
        items: [
          '**Quem quer modelos rodando no celular.** O AnyLLM não executa nenhum; o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e o [Private Mind](/pt/power-local-llm/private-mind-review) executam.',
          '**Quem precisa de código aberto.** Nenhum repositório foi encontrado; o [RikkaHub](/pt/power-local-llm/rikkahub-review) tem licença MIT.',
          '**Usuários de iPhone.** Só o Android está listado; o [Solair AI](/pt/power-local-llm/solair-ai-review) é uma opção para iOS.',
          '**Quem não tem chaves de API.** Todo modelo na nuvem exige uma chave e uma conta no provedor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quem faz o AnyLLM?',
            a: 'A Dotwel Labs, um estúdio independente que apresenta o AnyLLM como seu app principal. A página do Google Play e a política de privacidade são os únicos outros documentos públicos encontrados.',
          },
          {
            q: 'O AnyLLM consegue executar modelos no meu celular?',
            a: 'Nenhum mecanismo de modelos é descrito. Ele é um cliente: os modelos rodam no provedor ou em um servidor Ollama. Para inferência no aparelho, veja o PocketPal AI.',
          },
          {
            q: 'O AnyLLM funciona no iPhone ou no computador?',
            a: 'Não. A página cobre apenas Android.',
          },
          {
            q: 'Quais mecanismos de busca a busca na web usa?',
            a: 'DuckDuckGo, Brave Search ou SerpAPI, segundo a página. A política de privacidade cita o Brave Search como serviço de terceiros.',
          },
          {
            q: 'Posso usar meu próprio endpoint?',
            a: 'Sim. A página e o site do desenvolvedor dizem que endpoints personalizados e APIs compatíveis com a OpenAI são aceitos, então um gateway hospedado por você pode funcionar. A compatibilidade com um servidor específico não foi testada.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O AnyLLM é uma escolha razoável para o usuário de Android que já tem chaves de API e quer modelos da OpenAI, Anthropic, Google e Groq, ferramentas MCP e busca na web em um só app.',
          'As ressalvas são a pouca idade e a transparência: é um app jovem e pequeno, de código fechado, e a página não documenta nem os itens pagos nem a configuração do Ollama. Ele não executa nenhum modelo no celular.',
          'Se você quer modelos no aparelho, comece pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review). Se quer um cliente Android multiprovedor de código aberto, veja primeiro o [RikkaHub](/pt/power-local-llm/rikkahub-review), e teste a versão gratuita do AnyLLM antes de comprar qualquer coisa.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[AnyLLM: AI Chat Client no Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — versão, data de atualização, faixa de preço, requisitos e lista de recursos.',
          '[Site da Dotwel Labs](https://dotwellabs.web.app) — a descrição do AnyLLM feita pelo desenvolvedor, incluindo BYOK e endpoints personalizados.',
          '[Política de privacidade do AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/) — armazenamento de dados, análise de uso e serviços de terceiros.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do RikkaHub](/pt/power-local-llm/rikkahub-review) — um cliente de chat Android de código aberto que alterna entre provedores.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — chat de código aberto no aparelho para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto para iPhone e Android.',
          '[Análise do Solair AI](/pt/power-local-llm/solair-ai-review) — um assistente para iOS com prioridade local e alternativa opcional na nuvem com sua chave.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — o app de espaço de trabalho de código aberto, sem relação, com nome parecido.',
          '[O Local LLM Software Directory completo](/pt/directory) — um diretório mais amplo de ferramentas de LLMs locais para várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-ar.webp',
    title: 'مراجعة AnyLLM: عميل دردشة بالذكاء الاصطناعي لنظام Android بمفاتيح API الخاصة بك',
    seoTitle: 'مراجعة AnyLLM: عميل دردشة لـ Android بمفاتيح API خاصة',
    intro: 'AnyLLM تطبيق دردشة لنظام Android تستخدم فيه مفاتيح API الخاصة بك لدى مزوّدين مثل OpenAI وAnthropic وGoogle وGroq، ويمكنك أيضًا ربطه بخادم Ollama لتشغيل نماذج محلية. تستعرض هذه المراجعة ما توثّقه صفحة Google Play وموقع المطوّر وسياسة الخصوصية، وما بقي غير واضح، وكيف يقارن AnyLLM بعملاء الدردشة الآخرين على الهاتف.',
    metaDescription: 'مراجعة AnyLLM: عميل دردشة لـ Android بمفاتيح API لدى OpenAI وAnthropic وGoogle وGroq، مع Ollama وMCP والبحث على الويب. السعر والخصوصية والقيود.',
    twitterDescription: 'مراجعة AnyLLM: عميل Android مغلق المصدر بنموذج مجاني مع مشتريات داخل التطبيق، بمفاتيحك الخاصة، مع Ollama وأدوات MCP ومناظرات بين النماذج. المتطلبات والأسعار والخصوصية والقيود.',
    audience: 'مستخدمو Android الذين لديهم مفاتيح API من مزوّدي الذكاء الاصطناعي أو خادم Ollama ويريدون تطبيق دردشة واحدًا لعدة نماذج — تغطي المراجعة الميزات والمتطلبات والأسعار والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة AnyLLM',
    targetKeywords: [
      'مراجعة anyllm',
      'تطبيق anyllm android',
      'دردشة ذكاء اصطناعي byok android',
      'عميل ollama android',
      'عميل mcp android',
      'openai anthropic gemini في تطبيق واحد',
      'عميل دردشة ذكاء اصطناعي android',
      'تطبيق مناظرة بين نماذج الذكاء الاصطناعي',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM عميل دردشة لنظام Android من Dotwel Labs، مغلق المصدر ويعمل بنموذج مجاني مع مشتريات داخل التطبيق، يتصل بمزوّدي الذكاء الاصطناعي بمفاتيح API الخاصة بك — OpenAI وAnthropic وGoogle وGroq وغيرهم — وبخادم Ollama للنماذج المحلية.** لا يشغّل التطبيق أي نموذج بنفسه. بحسب صفحته على Google Play يتطلب Android 7.0 أو أحدث؛ وتغطي هذه المراجعة الإصدار 1.5.1 وتعتمد على الصفحة العامة وموقع المطوّر وسياسة الخصوصية، لا على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل AnyLLM تطبيق ذكاء اصطناعي محلي أم عميل دردشة سحابي؟',
        answer: 'هو في الغالب عميل دردشة سحابي: يرسل رسائلك إلى المزوّد الذي تُدخل مفتاح API الخاص به، ولا يكون «محليًا» إلا عندما توجّهه إلى خادم Ollama. يناسبك إن كنت تدفع أصلًا مقابل الوصول إلى واجهات API وتريد عدة مزوّدين وأدوات MCP ومناظرات بين النماذج في تطبيق Android واحد؛ ولا يناسبك إن أردت نماذج تعمل على الهاتف نفسه. بديل Android مفتوح المصدر هو RikkaHub، أما PocketPal AI فيشغّل النماذج على الجهاز.',
        bullets: [
          'تنزيل مجاني مع مشتريات داخل التطبيق؛ ويحاسبك كل مزوّد على استخدام النماذج بأسعاره الخاصة.',
          'دردشة بمفاتيحك الخاصة مع OpenAI وAnthropic وGoogle وGroq وMistral وDeepSeek وTogether AI.',
          'اتصال اختياري بـ Ollama للنماذج المحلية أو المستضافة ذاتيًا؛ ولا يشغّل التطبيق أي نموذج على الهاتف.',
          'إضافات: خوادم أدوات MCP ومهارات الوكيل بصيغة SKILL.md والبحث على الويب ومناظرات بين النماذج.',
          'مغلق المصدر ويعمل على Android فقط، وتُحفظ المحادثات في قاعدة بيانات محلية على الجهاز.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'كيفية الحصول على AnyLLM',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو AnyLLM',
        anchor: 'what-is-anyllm',
      },
      {
        label: 'كيفية البدء',
        anchor: 'how-to-get-started',
      },
      {
        label: 'الميزات',
        anchor: 'features',
      },
      {
        label: 'المزوّدون وOllama وتدفق البيانات',
        anchor: 'providers-and-ollama',
      },
      {
        label: 'الأسعار والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'المفاضلات: المزايا مقابل القيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'من يجب أن يستخدم AnyLLM',
        anchor: 'who-should-use',
      },
      {
        label: 'من لا يجب أن يستخدم AnyLLM',
        anchor: 'who-should-not-use',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الحكم النهائي',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM من Dotwel Labs عميل دردشة لنظام Android يمكن تنزيله مجانًا، تستخدم فيه مفاتيح API الخاصة بك لدى OpenAI وAnthropic وGoogle وGroq وغيرهم، مع دعم اختياري لـ Ollama وأدوات MCP والبحث على الويب.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كتطبيق دردشة واحد لعدة خدمات ذكاء اصطناعي: تُدخل مفاتيحك الخاصة وتختار نموذجًا وتدفع لكل مزوّد مباشرة. لا يشغّل نماذج الذكاء الاصطناعي على الهاتف؛ والجزء «المحلي» هو اتصال اختياري بخادم Ollama تديره بنفسك.',
          },
        ],
        items: [
          'الجهة المطوّرة: Dotwel Labs، استوديو مستقل يقدّم [موقعه](https://dotwellabs.web.app) تطبيق AnyLLM على أنه تطبيقه الرئيسي.',
          'الفئة المستهدفة: من لديهم مفاتيح API أصلًا ويريدون عدة مزوّدين في تطبيق Android واحد.',
          'أبرز الميزات: مناظرات بين النماذج وخوادم MCP ومهارات الوكيل بصيغة SKILL.md والبحث على الويب.',
          'القيود: مغلق المصدر، ولا استدلال على الجهاز، ولا توضح الصفحة ما تتيحه المشتريات داخل التطبيق.',
          'النضج: تُظهر Google Play أكثر من 1,000 تنزيل، فهو تطبيق حديث والتغطية المستقلة له قليلة.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'كيفية الحصول على AnyLLM',
        content: [
          '**يُوزَّع AnyLLM عبر Google Play.** التنزيل مجاني مع مشتريات داخل التطبيق.',
          'هذه المراجعة مرافقة لـ[Local LLM Software Directory](/ar/directory) من PromptQuorum، الذي يدرج AnyLLM إلى جانب عملاء دردشة آخرين على الهاتف.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Google Play',
            'كيفية الحصول عليه': '[AnyLLM: AI Chat Client على Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            'القناة': 'الموقع الإلكتروني',
            'كيفية الحصول عليه': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            'القناة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[سياسة خصوصية AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: 'لم يُعثر على مستودع عام للشيفرة المصدرية، ولا توجد نسخة لـ iPhone أو لسطح المكتب؛ فالصفحة تغطي Android فقط. والموقع هو صفحة استوديو المطوّر، وليس موقعًا مخصصًا لـ AnyLLM.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM في لمحة',
        columns: ['الخاصية', 'AnyLLM'],
        rows: [
          {
            'الخاصية': 'المنصة',
            AnyLLM: 'Android 7.0 أو أحدث',
          },
          {
            'الخاصية': 'الإصدار',
            AnyLLM: '1.5.1',
          },
          {
            'الخاصية': 'آخر تحديث للتطبيق',
            AnyLLM: '٥ سبتمبر ٢٠٢٦',
          },
          {
            'الخاصية': 'السعر',
            AnyLLM: 'مجاني مع مشتريات داخل التطبيق',
          },
          {
            'الخاصية': 'الترخيص',
            AnyLLM: 'مغلق المصدر',
          },
          {
            'الخاصية': 'تشغيل النماذج بنفسه',
            AnyLLM: 'لا يوصف أي محرك نماذج؛ يتصل بالمزوّدين وبـ Ollama',
          },
          {
            'الخاصية': 'إدخال الصور',
            AnyLLM: 'نعم، يمكن إرفاق الصور بحسب سياسة الخصوصية',
          },
          {
            'الخاصية': 'إدخال / إخراج صوتي',
            AnyLLM: 'غير مذكور في الصفحة',
          },
          {
            'الخاصية': 'خوادم أدوات MCP',
            AnyLLM: 'نعم، عبر SSE وStreamable HTTP',
          },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الهاتف في Local LLM Software Directory. تعني عبارة «غير مذكور» أن صفحة Google Play وموقع المطوّر لا يذكران ذلك، لا أن الميزة غير موجودة.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'ما هو AnyLLM',
        content: [
          '**AnyLLM عميل دردشة لنظام Android، وليس مشغّل نماذج.** تقدّمه صفحة Google Play بعبارة «one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more» وتصف نموذج «أحضر مفتاحك بنفسك» (BYOK): تُدخل مفاتيح API الخاصة بك وتدفع للمزوّدين مباشرة.',
          'يُنشر التطبيق باسم Dotwel Labs، الذي يصفه [موقع المطوّر](https://dotwellabs.web.app) بأنه استوديو منتجات مستقل. ولا تخلطه مع [AnythingLLM](/ar/power-local-llm/anythingllm-review)، وهو تطبيق مفتوح المصدر لا علاقة له به.',
          'تعتمد هذه المراجعة على صفحة Google Play وموقع المطوّر وسياسة الخصوصية فقط. لا يوجد اختبار عملي، لذا لا تُقيَّم هنا السرعة ولا الاستقرار ولا جودة الإجابات. وعبارات التسويق مثل «the most polished AI chat UI on Android» من كلام المطوّر نفسه ولا تُكرَّر كنتائج.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد هو التثبيت من Google Play ثم إضافة مفتاح مزوّد واحد على الأقل.** لا توثّق الصفحة تجربة التشغيل الأولى، لذا تتبع الخطوات التالية ما تذكره الصفحة وسياسة الخصوصية.',
        ],
        numberedItems: [
          {
            title: 'تحقق من هاتفك',
            whyItMatters: 'تشترط الصفحة Android 7.0 أو أحدث. ولا تُذكر متطلبات للذاكرة أو المعالج لأن النماذج تعمل لدى مزوّد أو على خادم لا على الهاتف.',
          },
          {
            title: 'جهّز مفاتيحك',
            whyItMatters: 'AnyLLM يعتمد BYOK، فأنشئ مفتاح API لدى كل مزوّد تريد استخدامه. وتقول سياسة الخصوصية إن المفاتيح تُحفظ على الجهاز في تخزين آمن.',
          },
          {
            title: 'ثبّت التطبيق وأضف مزوّدًا',
            whyItMatters: 'ثبّت التطبيق من [Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)، وأدخل مفتاحًا أو نقطة وصول مخصصة متوافقة مع OpenAI، ثم اختر نموذجًا.',
          },
          {
            title: 'أضف اختياريًا Ollama وخوادم MCP والبحث',
            whyItMatters: 'وجّه التطبيق إلى خادم Ollama للنماذج المحلية، وأضف خوادم MCP، وفعّل DuckDuckGo أو Brave Search أو SerpAPI للبحث على الويب.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**نقطة قوة AnyLLM هي مجموعة الأدوات المحيطة بالدردشة.** كل ما يلي مأخوذ من صفحة Google Play وسياسة الخصوصية.',
        ],
        items: [
          '**مناظرات بين النماذج.** يتناظر نموذجان حول موضوع ما في الوقت الفعلي. تصف الصفحة ذلك بأنه ميزة لا يقدمها أي تطبيق دردشة آخر، وهو ادعاء لم تتحقق منه هذه المراجعة.',
          '**أدوات MCP.** يتصل بخوادم Model Context Protocol عبر SSE وStreamable HTTP، مع حلقة وكيل تدعم استدعاء الأدوات.',
          '**مهارات الوكيل.** استورد ملفات SKILL.md لمنح المحادثة معرفة بمجال معيّن، مثل مساعد برمجة أو شريك كتابة.',
          '**البحث على الويب.** تصفح مباشر عبر DuckDuckGo أو Brave Search أو SerpAPI.',
          '**وضع الاستدلال.** مفتاح لوضع التفكير مع نماذج مثل Claude وo1 من OpenAI يعرض الاستدلال خطوة بخطوة قبل الإجابة النهائية.',
          '**واجهة الدردشة.** تدعم Markdown ومعادلات LaTeX وتمييز الشيفرة والإخراج المتدفق، مع إعدادات مسبقة لموجّه النظام مثل «Code Expert» و«Socratic Teacher».',
          '**ضوابط لكل نموذج.** يمكن ضبط temperature والحد الأقصى للرموز وحجم نافذة السياق لكل نموذج.',
          '**الذاكرة.** تقول سياسة الخصوصية إن التطبيق يستخرج حقائق رئيسية من المحادثات («memory facts») ويخزنها على الجهاز.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: 'المزوّدون وOllama وتدفق البيانات',
        content: [
          '**معظم AnyLLM هو عميل لواجهات API السحابية.** تذكر الصفحة OpenAI وAnthropic وGoogle وGroq وMistral وDeepSeek وTogether AI، وتضيف سياسة الخصوصية OpenRouter. يُقدَّم Llama 3 من Meta عبر Groq ولا يُشغَّل داخل التطبيق. وتُذكر نقاط الوصول المخصصة وواجهات API المتوافقة مع OpenAI، وبحسب الصفحة تدفع للمزوّدين بأسعارهم دون اشتراك من AnyLLM.',
          '**Ollama هو المسار المحلي.** تصف الصفحة تكاملًا مع Ollama لـ«offline/local AI models»، وتقول سياسة الخصوصية إن بيانات Ollama تبقى في شبكتك المحلية أو تتبع إعدادات Ollama السحابية لديك. ولا توضح الصفحة أين يجب تشغيل خادم Ollama؛ وهو برنامج خادم، لذا توقّع أن تشغّله على حاسوب تتحكم فيه وتوجّه الهاتف إليه.',
          '**إلى أين يذهب كل شيء.** تذهب كل رسالة، وأي صورة أو مستند ترفقه، مباشرة إلى المزوّد الذي اخترته، وفق اتفاقك أنت معه. ومع Ollama تذهب إلى الخادم الذي تضبطه.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والخصوصية',
        content: [
          '**AnyLLM تنزيل مجاني مع مشتريات داخل التطبيق؛ وتعرض صفحة Google Play في المتجر السعودي من 4.29 إلى 53.99 ر.س. لكل عنصر.** لا تذكر الصفحة ولا موقع المطوّر ما تتيحه هذه المشتريات، فراجع المتجر الداخلي قبل الاعتماد على أي ميزة. وخصّص ميزانية منفصلة لاستخدام واجهات API، فكل مزوّد يحاسبك عليه.',
          'تقول سياسة الخصوصية، المحدّثة آخر مرة في ١٢ أبريل ٢٠٢٦، إن سجل الدردشة وmemory facts ومفاتيح API وإعدادات النماذج تبقى على جهازك في قاعدة بيانات محلية أو مخزن آمن ولا تُرفع إلى خوادم المطوّر. وتقول أيضًا إنه لا توجد مزامنة سحابية.',
          'تفصح السياسة عن استخدام Google Analytics for Firebase: مرات فتح التطبيق والشاشات المعروضة واستخدام الميزات وطراز الجهاز وإصدار النظام والموقع على مستوى الدولة أو المدينة، دون محتوى المحادثات أو المفاتيح. ويمكن إلغاء الاشتراك من إعدادات النظام أو بالتواصل مع المطوّر.',
          'التطبيق مغلق المصدر ولم تفحص هذه المراجعة حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'تطبيق واحد وعدة مزوّدين',
            'ما تعنيه في الاستخدام الفعلي': 'التبديل بين نماذج OpenAI وAnthropic وGoogle وGroq في واجهة دردشة واحدة.',
            'القيد / الملاحظة': 'يلزم مفتاح API لكل مزوّد، ويحاسب كل منهم على حدة.',
          },
          {
            'الميزة': 'الاتصال بـ Ollama',
            'ما تعنيه في الاستخدام الفعلي': 'استخدام نماذج محلية أو مستضافة ذاتيًا من الهاتف.',
            'القيد / الملاحظة': 'يتطلب خادم Ollama تديره بنفسك، والإعداد غير موثّق في الصفحة.',
          },
          {
            'الميزة': 'أدوات MCP والمهارات',
            'ما تعنيه في الاستخدام الفعلي': 'استدعاء الأدوات ومهارات SKILL.md والبحث على الويب داخل دردشة على الهاتف.',
            'القيد / الملاحظة': 'تعتمد النتائج على النموذج والخوادم التي تضيفها؛ ولم تُختبر هنا.',
          },
          {
            'الميزة': 'مناظرات بين النماذج',
            'ما تعنيه في الاستخدام الفعلي': 'مقارنة طريقة استدلال نموذجين حول موضوع واحد.',
            'القيد / الملاحظة': 'كل مناظرة تستدعي نموذجين، فتستهلك رصيد API أكثر.',
          },
          {
            'الميزة': 'تخزين الدردشة محليًا',
            'ما تعنيه في الاستخدام الفعلي': 'يبقى السجل والمفاتيح على الجهاز.',
            'القيد / الملاحظة': 'مغلق المصدر مع تفعيل التحليلات؛ والأقوال من المطوّر نفسه.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مكان تشغيل النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'AnyLLM',
            'المنصات': 'Android',
            'السعر والترخيص': 'مجاني مع مشتريات، مغلق المصدر',
            'مكان تشغيل النماذج': 'واجهات API للمزوّدين وOllama',
            'الفرق الرئيسي': 'BYOK متعدد المزوّدين مع MCP ومهارات ومناظرات بين النماذج',
          },
          {
            'التطبيق': '[RikkaHub](/ar/power-local-llm/rikkahub-review)',
            'المنصات': 'Android',
            'السعر والترخيص': 'مجاني، MIT',
            'مكان تشغيل النماذج': 'المزوّدون الذين تضبطهم',
            'الفرق الرئيسي': 'مفتوح المصدر وبالفكرة نفسها للتبديل بين المزوّدين',
          },
          {
            'التطبيق': '[Solair AI](/ar/power-local-llm/solair-ai-review)',
            'المنصات': 'iOS',
            'السعر والترخيص': 'مجاني، مغلق المصدر',
            'مكان تشغيل النماذج': 'على الجهاز، مع بديل سحابي اختياري بمفتاحك',
            'الفرق الرئيسي': 'iPhone فقط، والأولوية للمحلي',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر والترخيص': 'مجاني، MIT',
            'مكان تشغيل النماذج': 'على الهاتف',
            'الفرق الرئيسي': 'يشغّل النماذج على الجهاز دون مفاتيح',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر والترخيص': 'مجاني، MIT',
            'مكان تشغيل النماذج': 'على الهاتف',
            'الفرق الرئيسي': 'دردشة دون اتصال مع أسئلة وأجوبة عن المستندات على الجهاز',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات في التطبيقات الأخرى كثيرًا. تحقق من التفاصيل الحالية في صفحة كل تطبيق قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم AnyLLM',
        items: [
          '**مستخدمو Android الذين يدفعون أصلًا مقابل واجهات API.** تطبيق واحد يغطي مفاتيح OpenAI وAnthropic وGoogle وGroq.',
          '**المهتمون بالتجريب الذين يريدون أدوات على الهاتف.** تحوّل خوادم MCP ومهارات SKILL.md والبحث على الويب الدردشة إلى حلقة وكيل.',
          '**من يستضيفون خادم Ollama بأنفسهم.** يستطيع التطبيق الوصول إليه من الهاتف.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم AnyLLM',
        items: [
          '**من يريد نماذج تعمل على الهاتف.** AnyLLM لا يشغّل أيًا منها؛ أما [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Private Mind](/ar/power-local-llm/private-mind-review) فيفعلان.',
          '**من يحتاج إلى مصدر مفتوح.** لم يُعثر على مستودع؛ أما [RikkaHub](/ar/power-local-llm/rikkahub-review) فبترخيص MIT.',
          '**مستخدمو iPhone.** المذكور هو Android فقط؛ و[Solair AI](/ar/power-local-llm/solair-ai-review) خيار لنظام iOS.',
          '**من لا يملك مفاتيح API.** كل نموذج سحابي يحتاج إلى مفتاح وحساب لدى المزوّد.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'من يطوّر AnyLLM؟',
            a: 'Dotwel Labs، استوديو مستقل يقدّم AnyLLM على أنه تطبيقه الرئيسي. وصفحة Google Play وسياسة الخصوصية هما الوثيقتان العامتان الوحيدتان الأخريان اللتان وُجدتا.',
          },
          {
            q: 'هل يستطيع AnyLLM تشغيل النماذج على هاتفي؟',
            a: 'لا يوصف أي محرك نماذج. إنه عميل: النماذج تعمل لدى المزوّد أو على خادم Ollama. وللاستدلال على الجهاز راجع PocketPal AI.',
          },
          {
            q: 'هل يعمل AnyLLM على iPhone أو الحاسوب؟',
            a: 'لا. الصفحة تغطي Android فقط.',
          },
          {
            q: 'أي محركات بحث يستخدمها البحث على الويب؟',
            a: 'DuckDuckGo أو Brave Search أو SerpAPI بحسب الصفحة. وتذكر سياسة الخصوصية Brave Search كخدمة طرف ثالث.',
          },
          {
            q: 'هل يمكنني استخدام نقطة وصول خاصة بي؟',
            a: 'نعم. تذكر الصفحة وموقع المطوّر دعم نقاط الوصول المخصصة وواجهات API المتوافقة مع OpenAI، لذا قد تعمل بوابة مستضافة ذاتيًا. ولم يُختبر التوافق مع خادم بعينه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'AnyLLM خيار معقول لمستخدم Android لديه مفاتيح API بالفعل ويريد نماذج OpenAI وAnthropic وGoogle وGroq وأدوات MCP والبحث على الويب في تطبيق واحد.',
          'التحفظات هي حداثة التطبيق والشفافية: فهو حديث وصغير ومغلق المصدر، ولا توثّق الصفحة العناصر المدفوعة ولا إعداد Ollama، ولا يشغّل أي نموذج على الهاتف.',
          'إن أردت نماذج على الجهاز فابدأ بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review). وإن أردت عميل Android مفتوح المصدر ومتعدد المزوّدين فانظر أولًا إلى [RikkaHub](/ar/power-local-llm/rikkahub-review)، وجرّب النسخة المجانية من AnyLLM قبل شراء أي شيء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[AnyLLM: AI Chat Client على Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — الإصدار وتاريخ التحديث ونطاق الأسعار والمتطلبات وقائمة الميزات.',
          '[موقع Dotwel Labs](https://dotwellabs.web.app) — وصف المطوّر لـ AnyLLM، بما في ذلك BYOK ونقاط الوصول المخصصة.',
          '[سياسة خصوصية AnyLLM](https://sanjayram-a.github.io/anyllm-privacy-policy/) — تخزين البيانات والتحليلات وخدمات الأطراف الثالثة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة RikkaHub](/ar/power-local-llm/rikkahub-review) — عميل دردشة Android مفتوح المصدر يبدّل بين المزوّدين.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — دردشة مفتوحة المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر دون اتصال لـ iPhone وAndroid.',
          '[مراجعة Solair AI](/ar/power-local-llm/solair-ai-review) — مساعد iOS تكون الأولوية فيه للمحلي مع بديل سحابي اختياري بمفتاحك.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — تطبيق مساحة عمل مفتوح المصدر لا علاقة له بالاسم المشابه.',
          '[دليل برامج النماذج اللغوية المحلية الكامل](/ar/directory) — دليل أوسع لأدوات النماذج اللغوية المحلية على مختلف المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anyllm-review-hero-ko.webp',
    title: 'AnyLLM 리뷰: 내 API 키로 쓰는 Android AI 채팅 클라이언트',
    seoTitle: 'AnyLLM 리뷰: 내 API 키로 쓰는 Android 채팅 앱',
    intro: 'AnyLLM은 OpenAI, Anthropic, Google, Groq 같은 제공업체를 내 API 키로 사용하는 Android 채팅 앱이며, 로컬 모델을 위해 Ollama 서버도 연결할 수 있습니다. 이 리뷰는 Google Play 목록, 개발사 웹사이트, 개인정보 처리방침에서 확인되는 내용과 불분명한 부분, 다른 모바일 채팅 클라이언트와의 비교를 정리합니다.',
    metaDescription: 'AnyLLM 리뷰: OpenAI, Anthropic, Google, Groq를 내 API 키로 쓰는 Android 채팅 클라이언트. Ollama, MCP, 웹 검색 지원. 가격과 개인정보, 한계.',
    twitterDescription: 'AnyLLM 리뷰: 내 API 키로 쓰는 비공개 소스 프리미엄 Android 클라이언트. Ollama, MCP 도구, AI 간 토론 지원. 요구 사항, 가격, 개인정보, 한계.',
    audience: 'AI 제공업체의 API 키나 Ollama 서버를 이미 갖고 있으며 여러 모델을 채팅 앱 하나로 쓰고 싶은 Android 사용자. 기능, 요구 사항, 가격, 개인정보, 한계, 대안을 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AnyLLM 리뷰',
    targetKeywords: [
      'anyllm 리뷰',
      'anyllm android 앱',
      'byok ai 채팅 android',
      'ollama android 클라이언트',
      'mcp 클라이언트 android',
      'openai anthropic gemini 한 앱',
      'ai 채팅 클라이언트 android',
      'ai 간 토론 앱',
    ],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock: '**AnyLLM은 Dotwel Labs가 만든 비공개 소스 프리미엄 Android 채팅 클라이언트로, 내 API 키로 AI 제공업체(OpenAI, Anthropic, Google, Groq 등)에 접속하고 로컬 모델을 위한 Ollama 서버에도 연결할 수 있습니다.** 앱 자체는 모델을 실행하지 않습니다. Google Play 목록에 따르면 Android 7.0 이상이 필요하며, 이 리뷰는 버전 1.5.1을 다루고 직접 사용해 본 결과가 아니라 공개 목록, 개발사 웹사이트, 개인정보 처리방침에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'AnyLLM은 로컬 AI 앱입니까, 클라우드 채팅 클라이언트입니까?',
        answer: '주로 클라우드 채팅 클라이언트입니다. 입력한 API 키의 제공업체로 메시지를 보내며, Ollama 서버를 지정할 때만 "로컬"이 됩니다. 이미 API 이용료를 내고 있고 여러 제공업체, MCP 도구, AI 간 토론을 Android 앱 하나로 쓰고 싶다면 적합하며, 휴대폰에서 직접 모델을 실행하려는 경우에는 맞지 않습니다. 오픈소스 Android 대안은 RikkaHub이고, 기기에서 모델을 실행하는 앱은 PocketPal AI입니다.',
        bullets: [
          '무료로 내려받을 수 있고 앱 내 구매가 있으며, 모델 사용료는 각 제공업체가 자체 요금으로 청구합니다.',
          'OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, Together AI를 내 키로 이용합니다.',
          '로컬 또는 자체 호스팅 모델을 위한 Ollama 연결은 선택 사항이며, 앱은 휴대폰에서 모델을 실행하지 않습니다.',
          '추가 기능: MCP 도구 서버, SKILL.md 에이전트 스킬, 웹 검색, AI 간 토론.',
          '비공개 소스이고 Android 전용이며, 채팅은 기기의 로컬 데이터베이스에 저장됩니다.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'AnyLLM 받기',
        anchor: 'get-it',
      },
      {
        label: 'AnyLLM 한눈에 보기',
        anchor: 'at-a-glance',
      },
      {
        label: 'AnyLLM이란 무엇인가',
        anchor: 'what-is-anyllm',
      },
      {
        label: '시작하는 방법',
        anchor: 'how-to-get-started',
      },
      {
        label: '기능',
        anchor: 'features',
      },
      {
        label: '제공업체, Ollama, 데이터 흐름',
        anchor: 'providers-and-ollama',
      },
      {
        label: '가격 및 개인정보 보호',
        anchor: 'privacy',
      },
      {
        label: '장단점: 이점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: 'AnyLLM 대 대안 앱',
        anchor: 'vs-alternatives',
      },
      {
        label: 'AnyLLM을 사용해야 하는 사람',
        anchor: 'who-should-use',
      },
      {
        label: 'AnyLLM을 사용하지 말아야 하는 사람',
        anchor: 'who-should-not-use',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '총평',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 읽을거리',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnyLLM은 Dotwel Labs의 Android 채팅 클라이언트로 무료로 내려받을 수 있으며, OpenAI, Anthropic, Google, Groq 등을 내 API 키로 사용하고 Ollama, MCP 도구, 웹 검색을 선택적으로 지원합니다.',
          },
          {
            type: 'plain-terms',
            text: '여러 AI 서비스를 하나의 채팅 앱으로 묶은 것으로 생각하면 됩니다. 내 키를 입력하고 모델을 고르며, 요금은 각 제공업체에 직접 냅니다. 휴대폰에서 AI 모델을 실행하지 않으며, "로컬"은 직접 운영하는 Ollama 서버에 선택적으로 연결한다는 뜻입니다.',
          },
        ],
        items: [
          '개발사: Dotwel Labs. 독립 스튜디오이며 [웹사이트](https://dotwellabs.web.app)에서 AnyLLM을 주력 앱으로 소개합니다.',
          '대상: 이미 API 키가 있고 여러 제공업체를 Android 앱 하나로 쓰고 싶은 사람.',
          '특징: AI 간 토론, MCP 서버, SKILL.md 에이전트 스킬, 웹 검색.',
          '한계: 비공개 소스이고 기기 내 추론이 없으며, 앱 내 구매로 무엇이 열리는지는 목록에 나와 있지 않습니다.',
          '성숙도: Google Play의 다운로드 수는 1,000회 이상으로, 출시된 지 얼마 안 되어 독립적인 소개가 적은 앱입니다.',
        ],
      },
      getItAnyllm: {
        id: 'get-it',
        title: 'AnyLLM 받기',
        content: [
          '**AnyLLM은 Google Play를 통해 배포됩니다.** 무료로 내려받을 수 있고 앱 내 구매가 있습니다.',
          '이 리뷰는 PromptQuorum의 [Local LLM Software Directory](/ko/directory)를 보완하는 글이며, 해당 디렉터리는 AnyLLM을 다른 모바일 채팅 클라이언트와 함께 소개합니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': 'Google Play',
            '받는 방법': '[Google Play의 AnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)',
          },
          {
            '경로': '웹사이트',
            '받는 방법': '[dotwellabs.web.app](https://dotwellabs.web.app)',
          },
          {
            '경로': '개인정보 처리방침',
            '받는 방법': '[AnyLLM 개인정보 처리방침](https://sanjayram-a.github.io/anyllm-privacy-policy/)',
          },
        ],
        note: '공개된 소스 코드 저장소는 찾지 못했고 iPhone 버전이나 데스크톱 버전도 없습니다. 목록은 Android만 다룹니다. 웹사이트는 개발자의 스튜디오 소개 페이지이며 AnyLLM 전용 사이트가 아닙니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'AnyLLM 한눈에 보기',
        columns: ['항목', 'AnyLLM'],
        rows: [
          {
            '항목': '플랫폼',
            AnyLLM: 'Android 7.0 이상',
          },
          {
            '항목': '버전',
            AnyLLM: '1.5.1',
          },
          {
            '항목': '앱 마지막 업데이트',
            AnyLLM: '2026년 9월 5일',
          },
          {
            '항목': '가격',
            AnyLLM: '무료, 앱 내 구매',
          },
          {
            '항목': '라이선스',
            AnyLLM: '비공개 소스',
          },
          {
            '항목': '모델 직접 실행',
            AnyLLM: '모델 엔진에 대한 설명은 없으며, 제공업체와 Ollama에 연결합니다',
          },
          {
            '항목': '이미지 입력',
            AnyLLM: '예, 개인정보 처리방침에 따르면 이미지를 첨부할 수 있습니다',
          },
          {
            '항목': '음성 입력 / 출력',
            AnyLLM: '목록에 명시되지 않음',
          },
          {
            '항목': 'MCP 도구 서버',
            AnyLLM: '예, SSE 및 Streamable HTTP',
          },
        ],
        note: '항목은 Local LLM Software Directory의 모바일 채팅 비교를 따릅니다. "명시되지 않음"은 Google Play 목록과 개발사 웹사이트에 언급이 없다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
      },
      whatIsAnyllm: {
        id: 'what-is-anyllm',
        title: 'AnyLLM이란 무엇인가',
        content: [
          '**AnyLLM은 Android 채팅 클라이언트이며 모델을 실행하는 앱이 아닙니다.** Google Play 목록은 "one unified workspace to talk to GPT-4o, Claude, Gemini, Llama, Groq, and more"라고 소개하고, 내 키를 가져오는(BYOK) 방식이라고 설명합니다. 사용자가 직접 API 키를 입력하고 제공업체에 직접 요금을 냅니다.',
          'Dotwel Labs라는 이름으로 게시되어 있으며, [개발사 웹사이트](https://dotwellabs.web.app)는 이를 독립 제품 스튜디오로 설명합니다. 관련 없는 오픈소스 앱 [AnythingLLM](/ko/power-local-llm/anythingllm-review)과 혼동하지 마십시오.',
          '이 리뷰는 Google Play 목록, 개발사 웹사이트, 개인정보 처리방침만을 근거로 합니다. 직접 사용해 본 테스트는 없으므로 속도, 안정성, 답변 품질은 평가하지 않습니다. "the most polished AI chat UI on Android" 같은 홍보 문구는 개발사 자신의 주장이며 결과로 되풀이하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 Google Play에서 설치한 뒤 제공업체 키를 하나 이상 추가하는 것입니다.** 목록에는 첫 실행 과정이 설명되어 있지 않으므로 아래 단계는 목록과 개인정보 처리방침에 나온 내용을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '휴대폰 확인',
            whyItMatters: '목록에 따르면 Android 7.0 이상이 필요합니다. 모델은 휴대폰이 아니라 제공업체나 서버에서 실행되므로 RAM이나 칩 요구 사항은 명시되어 있지 않습니다.',
          },
          {
            title: '키 준비',
            whyItMatters: 'AnyLLM은 BYOK 방식이므로 사용하려는 제공업체마다 API 키를 만드십시오. 개인정보 처리방침에 따르면 키는 기기의 보안 저장소에 보관됩니다.',
          },
          {
            title: '설치 후 제공업체 추가',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm)에서 앱을 설치하고, 키 또는 OpenAI 호환 사용자 지정 엔드포인트를 입력한 다음 모델을 선택합니다.',
          },
          {
            title: '필요하면 Ollama, MCP 서버, 검색 추가',
            whyItMatters: '로컬 모델을 쓰려면 앱이 Ollama 서버를 가리키게 하고, MCP 서버를 추가하며, 웹 검색에는 DuckDuckGo, Brave Search, SerpAPI 중 하나를 켭니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**AnyLLM의 강점은 채팅을 둘러싼 도구 모음입니다.** 아래 내용은 모두 Google Play 목록과 개인정보 처리방침에서 가져왔습니다.',
        ],
        items: [
          '**AI 간 토론.** 두 모델이 한 주제를 놓고 실시간으로 토론합니다. 목록은 다른 AI 채팅 앱에 없는 기능이라고 하지만, 이 리뷰는 이를 확인하지 않았습니다.',
          '**MCP 도구.** SSE와 Streamable HTTP로 Model Context Protocol 서버에 연결하며, 도구 호출을 지원하는 에이전트 루프를 갖추고 있습니다.',
          '**에이전트 스킬.** SKILL.md 파일을 가져와 채팅에 특정 분야의 지식을 줄 수 있으며, 예를 들어 코딩 도우미나 글쓰기 파트너를 만들 수 있습니다.',
          '**웹 검색.** DuckDuckGo, Brave Search, SerpAPI로 실시간 검색을 합니다.',
          '**추론 모드.** Claude나 OpenAI o1 같은 모델에서는 사고 모드를 켜면 최종 답변 전에 단계별 추론을 보여 줍니다.',
          '**채팅 화면.** Markdown, LaTeX 수식, 코드 강조, 스트리밍 출력을 지원하고 "Code Expert", "Socratic Teacher" 같은 시스템 프롬프트 프리셋이 있습니다.',
          '**모델별 설정.** temperature, 최대 토큰 수, 컨텍스트 윈도 크기를 모델마다 조정할 수 있습니다.',
          '**메모리.** 개인정보 처리방침에 따르면 앱은 채팅에서 핵심 사실("memory facts")을 추출해 기기에 저장합니다.',
        ],
      },
      providersAndOllama: {
        id: 'providers-and-ollama',
        title: '제공업체, Ollama, 데이터 흐름',
        content: [
          '**AnyLLM의 대부분은 클라우드 API용 클라이언트입니다.** 목록에는 OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, Together AI가 나오고, 개인정보 처리방침에는 OpenRouter가 추가로 나옵니다. Meta의 Llama 3는 Groq를 통해 제공되며 앱 안에서 실행되지 않습니다. 사용자 지정 엔드포인트와 OpenAI 호환 API도 명시되어 있고, 목록에 따르면 제공업체에는 해당 업체의 요금대로 내며 AnyLLM의 구독은 없습니다.',
          '**로컬로 쓰는 길은 Ollama입니다.** 목록은 "offline/local AI models"를 위한 Ollama 연동을 설명하며, 개인정보 처리방침은 Ollama 데이터가 로컬 네트워크에 머물거나 Ollama 클라우드 설정을 따른다고 합니다. Ollama 서버를 어디에서 실행해야 하는지는 목록에 없습니다. Ollama는 서버 프로그램이므로 직접 관리하는 컴퓨터에서 실행하고 휴대폰을 그쪽으로 연결하는 방식을 예상하면 됩니다.',
          '**데이터가 가는 곳.** 모든 메시지와 첨부한 이미지나 문서는 선택한 제공업체로 직접 전송되며, 그 제공업체와 맺은 약관을 따릅니다. Ollama를 쓰면 설정한 서버로 전송됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격 및 개인정보 보호',
        content: [
          '**AnyLLM은 무료로 내려받을 수 있고 앱 내 구매가 있으며, 미국 Google Play 목록에는 항목당 $0.99에서 $14.99로 표시됩니다.** 목록과 개발사 웹사이트 모두 구매로 무엇이 열리는지 밝히지 않으므로, 기능에 의존하기 전에 앱 내 스토어를 확인하십시오. API 사용료는 제공업체별로 청구되므로 따로 예산을 잡아야 합니다.',
          '개인정보 처리방침(최종 업데이트: 2026년 4월 12일)에 따르면 채팅 기록, memory facts, API 키, 모델 설정은 기기의 로컬 데이터베이스 또는 보안 저장소에 남고 개발사 서버로 업로드되지 않습니다. 클라우드 동기화도 없다고 합니다.',
          '방침은 Google Analytics for Firebase를 사용한다고 밝힙니다. 앱 실행, 본 화면, 기능 사용, 기기 모델, OS 버전, 국가 또는 도시 수준의 위치가 수집되며 채팅 내용과 키는 포함되지 않습니다. 시스템 설정에서 또는 개발사에 연락해 수집을 거부할 수 있습니다.',
          '앱은 비공개 소스이고 이 리뷰는 네트워크 트래픽을 검사하지 않았으므로, 위 내용은 개발사 자신의 설명입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '앱 하나로 여러 제공업체',
            '실제 사용에서의 의미': 'OpenAI, Anthropic, Google, Groq 모델을 하나의 채팅 화면에서 바꿔 쓸 수 있습니다.',
            '한계 / 유의 사항': '제공업체마다 API 키가 필요하고 요금도 따로 청구됩니다.',
          },
          {
            '이점': 'Ollama 연결',
            '실제 사용에서의 의미': '로컬 또는 자체 호스팅 모델을 휴대폰에서 쓸 수 있습니다.',
            '한계 / 유의 사항': '직접 운영하는 Ollama 서버가 필요하며, 설정 방법은 목록에 없습니다.',
          },
          {
            '이점': 'MCP 도구와 스킬',
            '실제 사용에서의 의미': '모바일 채팅에서 도구 호출, SKILL.md 스킬, 웹 검색을 쓸 수 있습니다.',
            '한계 / 유의 사항': '결과는 모델과 추가한 서버에 따라 달라지며, 여기서는 테스트하지 않았습니다.',
          },
          {
            '이점': 'AI 간 토론',
            '실제 사용에서의 의미': '한 주제에 대해 두 모델이 어떻게 추론하는지 비교할 수 있습니다.',
            '한계 / 유의 사항': '토론마다 두 모델을 호출하므로 API 크레딧을 더 많이 씁니다.',
          },
          {
            '이점': '채팅 로컬 저장',
            '실제 사용에서의 의미': '기록과 키가 기기에 남습니다.',
            '한계 / 유의 사항': '비공개 소스이고 분석이 켜져 있으며, 이 내용은 개발사의 설명입니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnyLLM 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 실행 위치', '핵심 차이점'],
        rows: [
          {
            '앱': 'AnyLLM',
            '플랫폼': 'Android',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 실행 위치': '제공업체 API와 Ollama',
            '핵심 차이점': '여러 제공업체를 쓰는 BYOK이며 MCP, 스킬, AI 간 토론 지원',
          },
          {
            '앱': '[RikkaHub](/ko/power-local-llm/rikkahub-review)',
            '플랫폼': 'Android',
            '가격 및 라이선스': '무료, MIT',
            '모델 실행 위치': '직접 설정한 제공업체',
            '핵심 차이점': '오픈소스이며 제공업체를 바꿔 쓰는 방식은 같음',
          },
          {
            '앱': '[Solair AI](/ko/power-local-llm/solair-ai-review)',
            '플랫폼': 'iOS',
            '가격 및 라이선스': '무료, 비공개 소스',
            '모델 실행 위치': '기기 내, 선택적으로 내 키를 쓰는 클라우드 대체',
            '핵심 차이점': 'iPhone 전용, 로컬 우선',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 및 라이선스': '무료, MIT',
            '모델 실행 위치': '휴대폰 내',
            '핵심 차이점': '기기에서 모델을 실행하며 키가 필요 없음',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 및 라이선스': '무료, MIT',
            '모델 실행 위치': '휴대폰 내',
            '핵심 차이점': '기기 내 문서 질의응답을 지원하는 오프라인 채팅',
          },
        ],
        note: '다른 회사 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 앱의 목록에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnyLLM을 사용해야 하는 사람',
        items: [
          '**이미 API 이용료를 내는 Android 사용자.** 앱 하나로 OpenAI, Anthropic, Google, Groq 키를 모두 다룰 수 있습니다.',
          '**휴대폰에서 도구를 써 보고 싶은 사람.** MCP 서버, SKILL.md 스킬, 웹 검색으로 채팅을 에이전트 루프로 만들 수 있습니다.',
          '**Ollama 서버를 직접 운영하는 사람.** 앱이 휴대폰에서 그 서버에 연결할 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnyLLM을 사용하지 말아야 하는 사람',
        items: [
          '**휴대폰에서 모델을 실행하려는 사람.** AnyLLM은 모델을 실행하지 않으며, [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 [Private Mind](/ko/power-local-llm/private-mind-review)는 실행합니다.',
          '**오픈소스가 필요한 사람.** 저장소를 찾지 못했으며, [RikkaHub](/ko/power-local-llm/rikkahub-review)는 MIT 라이선스입니다.',
          '**iPhone 사용자.** Android만 지원하며, iOS용으로는 [Solair AI](/ko/power-local-llm/solair-ai-review)가 있습니다.',
          '**API 키가 없는 사람.** 모든 클라우드 모델에는 키와 제공업체 계정이 필요합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AnyLLM은 누가 만듭니까?',
            a: 'AnyLLM을 주력 앱으로 소개하는 독립 스튜디오 Dotwel Labs입니다. 그 밖에 찾은 공개 문서는 Google Play 목록과 개인정보 처리방침뿐입니다.',
          },
          {
            q: 'AnyLLM이 제 휴대폰에서 모델을 실행할 수 있습니까?',
            a: '모델 엔진에 대한 설명은 없습니다. 클라이언트이므로 모델은 제공업체나 Ollama 서버에서 실행됩니다. 기기 내 추론은 PocketPal AI를 참고하십시오.',
          },
          {
            q: 'AnyLLM은 iPhone이나 PC에서 쓸 수 있습니까?',
            a: '아니요. 목록은 Android만 다룹니다.',
          },
          {
            q: '웹 검색은 어떤 검색 엔진을 씁니까?',
            a: '목록에 따르면 DuckDuckGo, Brave Search, SerpAPI 중 하나입니다. 개인정보 처리방침은 Brave Search를 제3자 서비스로 명시합니다.',
          },
          {
            q: '제 엔드포인트를 쓸 수 있습니까?',
            a: '예. 목록과 개발사 웹사이트는 사용자 지정 엔드포인트와 OpenAI 호환 API를 지원한다고 밝히므로, 자체 호스팅 게이트웨이도 작동할 수 있습니다. 특정 서버와의 호환성은 테스트하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'AnyLLM은 이미 API 키가 있고 OpenAI, Anthropic, Google, Groq 모델과 MCP 도구, 웹 검색을 앱 하나로 쓰고 싶은 Android 사용자에게 무난한 선택입니다.',
          '유의할 점은 출시 시기와 투명성입니다. 나온 지 얼마 안 된 작은 앱이고 비공개 소스이며, 목록에는 유료 항목도 Ollama 설정 방법도 설명되어 있지 않습니다. 휴대폰에서는 모델을 실행하지 않습니다.',
          '기기에서 모델을 실행하고 싶다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)부터 보십시오. 오픈소스의 다중 제공업체 Android 클라이언트를 원한다면 먼저 [RikkaHub](/ko/power-local-llm/rikkahub-review)를 보고, 결제하기 전에 AnyLLM의 무료 버전을 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 AnyLLM: AI Chat Client](https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm) — 버전, 업데이트 날짜, 가격 범위, 요구 사항, 기능 목록.',
          '[Dotwel Labs 웹사이트](https://dotwellabs.web.app) — BYOK와 사용자 지정 엔드포인트를 포함한 개발사의 AnyLLM 설명.',
          '[AnyLLM 개인정보 처리방침](https://sanjayram-a.github.io/anyllm-privacy-policy/) — 데이터 저장, 분석, 제3자 서비스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[RikkaHub 리뷰](/ko/power-local-llm/rikkahub-review) — 제공업체를 바꿔 쓰는 오픈소스 Android 채팅 클라이언트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 오픈소스 기기 내 채팅 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 오픈소스 오프라인 채팅 앱.',
          '[Solair AI 리뷰](/ko/power-local-llm/solair-ai-review) — 내 키를 쓰는 클라우드 대체를 선택할 수 있는 로컬 우선 iOS 어시스턴트.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 이름이 비슷하지만 관련 없는 오픈소스 워크스페이스 앱.',
          '[전체 로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 여러 플랫폼의 로컬 LLM 도구를 모은 더 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
