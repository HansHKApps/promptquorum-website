// LocalAI (ApexCreator) Review: Offline AI Chat, Document RAG, and Vision for Android
// Slug: localai-apexcreator-review
// Companion to: toolneuron-review, layla-review, rikkahub-review, maid-review, pocketpal-ai-review,
// best-local-llm-apps-android-2026, local-llm-software-directory
// Not to be confused with the separately reviewed `localai` project (mudler/LocalAI, the
// OpenAI-compatible local inference server) — unrelated project, same name.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-en.webp',
    title: 'LocalAI Review (2026): ApexCreator\'s Offline Android AI Chat App',
    seoTitle: 'LocalAI (ApexCreator) Review 2026: Offline Android AI Chat',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), by developer [ApexCreator](mailto:info@apexcreators.co.in), is a free Android app that runs GGUF language models on-device via llama.cpp, with an optional paid premium tier. Per its Google Play listing, it adds document chat over PDF, Word, Excel, and CSV files using on-device vector retrieval, support for vision-capable models, structured JSON/grammar-constrained output, and real-time performance telemetry. Unlike [ToolNeuron](/power-local-llm/toolneuron-review), this app is closed-source, with no public code repository found for this review — every claim below is sourced from its public Play Store listing, not independent testing or a developer interview.',
    metaDescription:
      'LocalAI (ApexCreator) review 2026: free Android app for offline AI chat, PDF/document RAG, and vision models via llama.cpp, with an optional premium tier. Closed source — what the listing claims and what this review could not verify.',
    twitterDescription:
      'LocalAI (ApexCreator) review: a free Android app running GGUF models on-device via llama.cpp, with document RAG, vision model support, and structured output — per its Play Store listing. Closed source, no public repository found.',
    audience:
      'Android users considering a free, on-device AI chat app with document and vision features, who want a clear-eyed read on what is confirmed versus what only the app\'s own store listing claims.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM is a free Android app by developer ApexCreator that runs GGUF language models on-device via llama.cpp, with an optional paid premium tier.** Per its Google Play listing, it adds document chat over PDF, Word, Excel, and CSV files using on-device vector retrieval (sqlite-vec), support for vision-capable models, and structured JSON/grammar-constrained output. The app is closed-source, and this review found no public code repository for it — every technical claim here is sourced from the public Play Store listing, not an independent audit. Readers who want an open-source alternative with a public repository should read the [ToolNeuron review](/power-local-llm/toolneuron-review) instead.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get LocalAI', anchor: 'get-it' },
      { label: 'What LocalAI Is', anchor: 'what-is-localai' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features: Document Chat, Vision, and Structured Output', anchor: 'features' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'Privacy and Open-Source Status', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'LocalAI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use LocalAI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use LocalAI', anchor: 'who-should-not-use' },
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
            text: 'LocalAI: Offline AI Chat LLM is a free, closed-source Android app by ApexCreator that runs GGUF models on-device via llama.cpp, adding document RAG, vision model support, and structured output per its Google Play listing, with no public source code available for independent review.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free Android chat app that can also read your PDFs and look at your photos, all running on your phone — but because the developer has not published the code, you have to take the listing\'s privacy and feature claims mostly on trust rather than verifying them yourself.',
          },
        ],
        items: [
          'Price: free to [download](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) and use, with an optional paid premium tier; exact premium price not confirmed for this review.',
          'Developer: ApexCreator (contact: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) for GGUF models, running on-device, per the Google Play listing.',
          'Features beyond chat: document RAG over PDF, Word, Excel, and CSV files via on-device vector retrieval; vision-capable model support; GBNF grammar and JSON-schema structured output; real-time performance telemetry, per the listing.',
          'Open source status: closed source — this review found no public code repository for the app.',
          'Google Play rating: 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026).',
          'Distribution: available on [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) only.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the app\'s public Google Play listing and general web search results about it, checked in September 2026. PromptQuorum has not conducted independent hands-on testing, a privacy-policy review, or a code audit of this app — because the app is closed-source, no code audit was possible.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM is available only from Google Play.**',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which indexes local-AI tools across platforms, including this app\'s own entry.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Google Play',
            'Get It': '[LocalAI: Offline AI Chat LLM on Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'The app itself is free to download; an in-app premium tier is available, per the listing, but this review could not confirm its exact price — check the current listing before purchasing.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'What LocalAI Is',
        content: [
          '**LocalAI: Offline AI Chat LLM is an Android app that runs GGUF-format language models on-device through llama.cpp, per its Google Play listing.** Beyond plain chat, the listing describes document retrieval (RAG) over common office file formats and support for vision-capable models, positioning it as a broader on-device AI toolkit rather than a single-purpose chatbot.',
          'The app is made by a developer or small studio operating as ApexCreator, reachable at [info@apexcreators.co.in](mailto:info@apexcreators.co.in). This review relies on the app\'s public Play Store listing and general web search results about it — no public source code repository, dedicated developer website, or privacy policy document could be located for independent review, which is a meaningful difference from open-source alternatives like [ToolNeuron](/power-local-llm/toolneuron-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setting up LocalAI takes a few steps.** The overall process, from install to a first offline response, takes a few minutes plus however long the chosen model takes to download.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Get [LocalAI: Offline AI Chat LLM from Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). The app itself is free to install.',
          },
          {
            title: 'Download a GGUF model',
            whyItMatters: 'This step requires an internet connection. Download size depends on the model chosen; chat afterward does not need a network connection, per the listing.',
          },
          {
            title: 'Chat, or add a document for RAG',
            whyItMatters: 'Attach a supported file (PDF, Word, Excel, or CSV) to have the model answer questions about it, using on-device document retrieval per the listing.',
          },
          {
            title: 'Optional: use a vision-capable model',
            whyItMatters: 'Load a vision-capable model to analyze photos or images, per the listing — this is optional and separate from plain text chat.',
          },
          {
            title: 'Optional: upgrade to the premium tier',
            whyItMatters: 'A paid premium tier is available in-app; this review could not confirm its exact price or scope beyond the base free features — check the current listing.',
          },
        ],
        note: 'Exact model compatibility, download sizes, and premium-tier contents were not independently confirmed for this review — check the app\'s own listing before committing to a large download or a purchase.',
      },
      features: {
        id: 'features',
        title: 'Features: Document Chat, Vision, and Structured Output',
        content: [
          '**Per its Google Play listing, LocalAI runs GGUF models through [llama.cpp](https://github.com/ggml-org/llama.cpp) and adds several features beyond plain chat.** Document chat (RAG) covers PDF, Word, Excel, and CSV files, parsed and chunked locally with on-device vector retrieval; the listing describes this as running fully offline, with no document content sent to a server.',
          'The listing also describes support for vision-capable models — naming SmolVLM, LLaVA, and Qwen-VL as examples — for analyzing photos or images on-device, along with GBNF grammar and JSON-schema support for constraining model output to a structured format, and real-time performance telemetry (tokens per second and similar metrics) shown while chatting.',
          'This review has not independently verified these features in hands-on testing; they are presented here as the app\'s own stated capabilities, not confirmed benchmarks.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**LocalAI is free to download and use, with an optional paid premium tier, per its Google Play listing.** This review could not confirm the premium tier\'s exact price or what it unlocks beyond the base free features — Play Store in-app pricing can also vary by region.',
        ],
        note: 'Confirm the current premium price and its exact contents on the [Google Play listing](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) before purchasing.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Open-Source Status',
        content: [
          '**LocalAI is closed-source: this review found no public code repository for the app.** Its listing describes chat, document RAG, and vision features as running on-device, but because the code is not published, those claims cannot be independently checked against the app\'s actual behavior the way an open-source app\'s can.',
          'This is a meaningful difference from an app like [ToolNeuron](/power-local-llm/toolneuron-review), whose entire codebase and security architecture are published and auditable. Readers who weigh independent verifiability heavily should factor that in before installing.',
        ],
        items: [
          '**Closed source.** No public GitHub repository or equivalent was found for this app; feature and privacy claims rest on the Play Store listing alone.',
          '**No privacy policy located.** This review could not find a dedicated, detailed privacy policy document for the app beyond its Play Store data-safety section.',
          '**On-device processing claimed.** The listing states chat and document RAG run on-device, but this is a vendor claim, not an independently audited fact.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free base app with a broad feature set',
            'What it means in real use': 'Chat, document RAG, and vision model support cost nothing to try.',
            'Limitation / caveat': 'This review has not independently verified how well each feature performs.',
          },
          {
            'Benefit': 'Document and vision features beyond plain chat',
            'What it means in real use': 'Fewer separate apps needed for PDF/Office chat or image analysis.',
            'Limitation / caveat': 'Feature depth and reliability rest on the listing\'s own description, not independent testing.',
          },
          {
            'Benefit': 'Structured output (GBNF/JSON schema)',
            'What it means in real use': 'Useful for readers who want the model\'s output in a predictable format.',
            'Limitation / caveat': 'Availability and quality across different loaded models were not independently checked.',
          },
          {
            'Benefit': 'Optional premium tier, not a hard paywall',
            'What it means in real use': 'Core features are usable for free before deciding whether to pay.',
            'Limitation / caveat': 'Exact premium price and contents were not confirmed for this review.',
          },
        ],
        note: 'Closed source, with no public repository found: unlike ToolNeuron, none of the claims above can be checked against published code.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Open source', 'Key difference'],
        rows: [
          {
            'App': 'LocalAI (ApexCreator)',
            'Platforms': 'Android only',
            'Price': 'Free, with an optional premium tier',
            'Open source': 'No — closed source, no public repository found',
            'Key difference': 'Document RAG and vision model support, per the listing, but not independently verifiable',
          },
          {
            'App': '[ToolNeuron](/power-local-llm/toolneuron-review)',
            'Platforms': 'Android only',
            'Price': 'Free, open source (MIT)',
            'Open source': 'Yes — public GitHub repository',
            'Key difference': 'Similar breadth of features (RAG, voice, plugins), fully auditable source code',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android and iOS',
            'Price': '$19.99 one-time purchase, plus in-app tiers',
            'Open source': 'No — closed source',
            'Key difference': 'Persona and roleplay focus, with an optional opt-in cloud mode',
          },
          {
            'App': '[RikkaHub](/power-local-llm/rikkahub-review)',
            'Platforms': 'Android only',
            'Price': 'Free, open source',
            'Open source': 'Yes',
            'Key difference': 'Another free, open-source Android option for direct comparison',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use LocalAI',
        items: [
          '**Android users who want a free app with document and vision features bundled in.** PDF/Office chat and vision model support go beyond plain text chat, per the listing.',
          '**Readers who don\'t weight source-code transparency heavily.** If verifying the code yourself is not a priority, the closed-source status may not matter to your use case.',
          '**Readers already comparing several Android local-AI apps.** It is a useful free data point next to open-source options like ToolNeuron and RikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use LocalAI',
        items: [
          '**iPhone, desktop, or web users.** The app is Android-only, distributed solely through Google Play.',
          '**Readers who want to audit the app\'s source code themselves.** This review found no public repository; an open-source alternative like [ToolNeuron](/power-local-llm/toolneuron-review) allows independent code review.',
          '**Readers who need a detailed, independently reviewable privacy policy before installing.** This review could not locate one beyond the Play Store\'s own data-safety section.',
          '**Readers who weight app-store ratings heavily.** At 3.0 out of 5 from 181 ratings at the time of this review\'s research, it rates lower than several alternatives compared here.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is LocalAI (ApexCreator) free?',
            a: 'The base app is free to download and use. An optional paid premium tier exists, per the listing, but this review could not confirm its exact price — check the current Google Play listing.',
          },
          {
            q: 'Who makes LocalAI: Offline AI Chat LLM?',
            a: 'A developer or small studio operating as ApexCreator, reachable at [info@apexcreators.co.in](mailto:info@apexcreators.co.in). This review found no public developer website or GitHub organization beyond that contact.',
          },
          {
            q: 'What can LocalAI do beyond chat?',
            a: 'Per its Google Play listing: document chat (RAG) over PDF, Word, Excel, and CSV files; support for vision-capable models; GBNF grammar and JSON-schema structured output; and real-time performance telemetry. These are the app\'s own stated features, not independently benchmarked by this review.',
          },
          {
            q: 'Is LocalAI open source?',
            a: 'No. This review searched for a public code repository and did not find one — the app appears to be closed source.',
          },
          {
            q: 'Does LocalAI work offline?',
            a: 'Per its listing, yes, once a model is downloaded. An internet connection is needed to download models and app updates.',
          },
          {
            q: 'How does LocalAI compare to ToolNeuron?',
            a: '[ToolNeuron](/power-local-llm/toolneuron-review) is free and open source, with a public GitHub repository documenting its security architecture. LocalAI (ApexCreator) offers a similarly broad feature set — including document RAG and vision model support, per its listing — but is closed source, with no public repository this review could find. Choose based on whether independently auditable source code matters to you.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'LocalAI: Offline AI Chat LLM, per its Google Play listing, packs a genuinely broad feature set into a free Android app: on-device chat via llama.cpp, document RAG over common office file formats, vision-capable model support, and structured output — features that go well beyond a plain chat client.',
          'What keeps this review cautious is that every one of those claims rests on the developer\'s own store listing: this review found no public source code, no dedicated developer website, and no detailed privacy policy to check them against. That is a real gap next to an open-source alternative like ToolNeuron, whose equivalent claims can be verified in published code.',
          'Readers who want to try a free, feature-rich Android AI app and don\'t weigh source-code transparency heavily can reasonably try it; readers who want to independently verify what an app actually does with local data should start with [ToolNeuron](/power-local-llm/toolneuron-review) or [RikkaHub](/power-local-llm/rikkahub-review) instead, both of which publish their source.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalAI: Offline AI Chat LLM on Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — pricing, features, and rating, checked 2026-09-12.',
          'General web search results describing the app\'s document RAG, vision, and structured-output features, checked 2026-09-12 — no independent developer website or source repository was located to cross-check these claims.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[ToolNeuron Review](/power-local-llm/toolneuron-review) — a similarly broad, free, open-source Android alternative with a public GitHub repository.',
          '[Layla Review](/power-local-llm/layla-review) — a paid, cross-platform on-device companion app with an optional cloud mode.',
          '[RikkaHub Review](/power-local-llm/rikkahub-review) — another free, open-source Android local-AI chat app.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source local-AI app with iOS and some Android support.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-de.webp',
    title: 'LocalAI im Test (2026): ApexCreators Offline-KI-Chat-App für Android',
    seoTitle: 'LocalAI (ApexCreator) im Test 2026: Offline-KI-Chat für Android',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), vom Entwickler [ApexCreator](mailto:info@apexcreators.co.in), ist eine kostenlose Android-App, die GGUF-Sprachmodelle über llama.cpp auf dem Gerät ausführt, mit einer optionalen kostenpflichtigen Premium-Stufe. Laut eigenem Google-Play-Eintrag fügt sie Dokumenten-Chat über PDF-, Word-, Excel- und CSV-Dateien mittels On-Device-Vektorabruf, Unterstützung für vision-fähige Modelle, strukturierte JSON-/Grammatik-eingeschränkte Ausgabe und Echtzeit-Leistungstelemetrie hinzu. Anders als [ToolNeuron](/de/power-local-llm/toolneuron-review) ist diese App quellcodegeschlossen — für diesen Test wurde kein öffentliches Code-Repository gefunden. Jede Aussage unten stammt aus dem öffentlichen Play-Store-Eintrag, nicht aus einem unabhängigen Test oder einem Entwickler-Interview.',
    metaDescription:
      'LocalAI (ApexCreator) im Test 2026: kostenlose Android-App für offline KI-Chat, PDF-/Dokumenten-RAG und Vision-Modelle über llama.cpp, mit optionaler Premium-Stufe. Quellcodegeschlossen — was der Eintrag behauptet und was dieser Test nicht verifizieren konnte.',
    twitterDescription:
      'LocalAI (ApexCreator) im Test: eine kostenlose Android-App, die GGUF-Modelle über llama.cpp auf dem Gerät ausführt, mit Dokumenten-RAG, Unterstützung für Vision-Modelle und strukturierter Ausgabe — laut eigenem Play-Store-Eintrag. Quellcodegeschlossen, kein öffentliches Repository gefunden.',
    audience:
      'Android-Nutzer, die eine kostenlose, on-device laufende KI-Chat-App mit Dokumenten- und Vision-Funktionen in Betracht ziehen und eine unverblümte Einschätzung darüber wollen, was bestätigt ist und was nur der eigene Store-Eintrag der App behauptet.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM ist eine kostenlose Android-App des Entwicklers ApexCreator, die GGUF-Sprachmodelle über llama.cpp auf dem Gerät ausführt, mit einer optionalen kostenpflichtigen Premium-Stufe.** Laut eigenem Google-Play-Eintrag fügt sie Dokumenten-Chat über PDF-, Word-, Excel- und CSV-Dateien mittels On-Device-Vektorabruf (sqlite-vec), Unterstützung für vision-fähige Modelle und strukturierte JSON-/Grammatik-eingeschränkte Ausgabe hinzu. Die App ist quellcodegeschlossen, und für diesen Test wurde kein öffentliches Code-Repository dafür gefunden — jede technische Aussage hier stammt aus dem öffentlichen Play-Store-Eintrag, nicht aus einer unabhängigen Prüfung. Leser, die eine quelloffene Alternative mit einem öffentlichen Repository möchten, sollten stattdessen den [ToolNeuron-Test](/de/power-local-llm/toolneuron-review) lesen.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich die Installation von LocalAI (ApexCreator)?',
        answer:
          'Das hängt davon ab, wie stark Sie Quellcode-Transparenz gewichten. Die App ist kostenlos, führt Modelle über llama.cpp auf dem Gerät aus und fügt laut eigenem Eintrag Dokumenten-Chat, Unterstützung für Vision-Modelle und strukturierte Ausgabe hinzu — ein breites Funktionsspektrum für eine kostenlose App. Sie ist jedoch quellcodegeschlossen, und dieser Test konnte kein öffentliches Repository dafür finden, sodass ihre Datenschutz- und Datenverarbeitungsangaben vollständig auf dem Eintrag selbst beruhen und nicht anhand unabhängig prüfbaren Codes verifiziert werden können. Wer dasselbe Funktionsspektrum mit veröffentlichtem Quellcode möchte, sollte zuerst ToolNeuron ausprobieren.',
        bullets: [
          'Kostenlos zum Herunterladen und Nutzen, mit einer optionalen kostenpflichtigen Premium-Stufe — der genaue Premium-Preis wurde für diesen Test nicht bestätigt; prüfen Sie den aktuellen Eintrag.',
          'Führt GGUF-Sprachmodelle laut Google-Play-Eintrag über llama.cpp auf dem Gerät aus.',
          'Fügt laut Eintrag Dokumenten-Chat (RAG) über PDF-, Word-, Excel- und CSV-Dateien mittels On-Device-Vektorabruf sowie Unterstützung für vision-fähige Modelle hinzu.',
          'Quellcodegeschlossen: Dieser Test fand kein öffentliches GitHub-Repository für die App, anders als bei ToolNeuron.',
          'Die Google-Play-Bewertung lag zum Zeitpunkt der Recherche für diesen Test (September 2026) bei 3,0 von 5 aus 181 Bewertungen — dies ist eine Momentaufnahme des Eintrags, keine Empfehlung.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'LocalAI holen', anchor: 'get-it' },
      { label: 'Was LocalAI ist', anchor: 'what-is-localai' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen: Dokumenten-Chat, Vision und strukturierte Ausgabe', anchor: 'features' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'Datenschutz und Open-Source-Status', anchor: 'privacy' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'LocalAI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer LocalAI nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer LocalAI nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM ist eine kostenlose, quellcodegeschlossene Android-App von ApexCreator, die GGUF-Modelle über llama.cpp auf dem Gerät ausführt und laut eigenem Google-Play-Eintrag Dokumenten-RAG, Unterstützung für Vision-Modelle und strukturierte Ausgabe hinzufügt, wobei kein öffentlicher Quellcode für eine unabhängige Prüfung verfügbar ist.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine kostenlose Android-Chat-App vor, die auch Ihre PDFs lesen und Ihre Fotos betrachten kann, alles auf Ihrem Telefon — da der Entwickler den Code aber nicht veröffentlicht hat, müssen Sie die Datenschutz- und Funktionsangaben des Eintrags größtenteils auf Vertrauen hin akzeptieren, statt sie selbst zu prüfen.',
          },
        ],
        items: [
          'Preis: kostenlos zum [Herunterladen](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) und Nutzen, mit einer optionalen kostenpflichtigen Premium-Stufe; der genaue Premium-Preis wurde für diesen Test nicht bestätigt.',
          'Entwickler: ApexCreator (Kontakt: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) für GGUF-Modelle, laut Google-Play-Eintrag auf dem Gerät ausgeführt.',
          'Funktionen über Chat hinaus: Dokumenten-RAG über PDF-, Word-, Excel- und CSV-Dateien via On-Device-Vektorabruf; Unterstützung für vision-fähige Modelle; GBNF-Grammatik und JSON-Schema-strukturierte Ausgabe; Echtzeit-Leistungstelemetrie, laut Eintrag.',
          'Open-Source-Status: quellcodegeschlossen — dieser Test fand kein öffentliches Code-Repository für die App.',
          'Google-Play-Bewertung: 3,0 von 5 aus 181 Bewertungen zum Zeitpunkt der Recherche für diesen Test (September 2026).',
          'Vertrieb: nur über [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) verfügbar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen Google-Play-Eintrag der App und allgemeinen Websuchergebnissen dazu, geprüft im September 2026. PromptQuorum hat keinen unabhängigen praktischen Test, keine Prüfung der Datenschutzerklärung und keine Code-Prüfung dieser App durchgeführt — da die App quellcodegeschlossen ist, war keine Code-Prüfung möglich.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'LocalAI holen',
        content: [
          '**LocalAI: Offline AI Chat LLM ist nur über Google Play erhältlich.**',
          'Dieser Test ist eine Ergänzung zu PromptQuorums [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory), das lokale KI-Tools über Plattformen hinweg auflistet, einschließlich des eigenen Eintrags dieser App.',
        ],
        columns: ['Kanal', 'Holen'],
        rows: [
          {
            'Kanal': 'Google Play',
            'Holen': '[LocalAI: Offline AI Chat LLM bei Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'Die App selbst ist kostenlos herunterladbar; laut Eintrag ist eine In-App-Premium-Stufe verfügbar, aber dieser Test konnte deren genauen Preis nicht bestätigen — prüfen Sie vor einem Kauf den aktuellen Eintrag.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'Was LocalAI ist',
        content: [
          '**LocalAI: Offline AI Chat LLM ist laut eigenem Google-Play-Eintrag eine Android-App, die Sprachmodelle im GGUF-Format über llama.cpp auf dem Gerät ausführt.** Über den reinen Chat hinaus beschreibt der Eintrag Dokumentenabruf (RAG) über gängige Office-Dateiformate und Unterstützung für vision-fähige Modelle, was die App eher als breiteres On-Device-KI-Werkzeug denn als Einzelzweck-Chatbot positioniert.',
          'Die App wird von einem Entwickler oder einem kleinen Studio unter dem Namen ApexCreator gemacht, erreichbar unter [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Dieser Test stützt sich auf den öffentlichen Play-Store-Eintrag der App und allgemeine Websuchergebnisse dazu — kein öffentliches Quellcode-Repository, keine eigene Entwickler-Website und kein Datenschutzerklärungsdokument konnten für eine unabhängige Prüfung gefunden werden, was einen bedeutenden Unterschied zu quelloffenen Alternativen wie [ToolNeuron](/de/power-local-llm/toolneuron-review) darstellt.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von LocalAI dauert wenige Schritte.** Der gesamte Vorgang, von der Installation bis zur ersten Offline-Antwort, dauert wenige Minuten plus die Zeit, die das gewählte Modell zum Herunterladen benötigt.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Holen Sie [LocalAI: Offline AI Chat LLM bei Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). Die App selbst ist kostenlos installierbar.',
          },
          {
            title: 'Ein GGUF-Modell herunterladen',
            whyItMatters: 'Dieser Schritt erfordert eine Internetverbindung. Die Downloadgröße hängt vom gewählten Modell ab; das anschließende Chatten benötigt laut Eintrag keine Netzwerkverbindung.',
          },
          {
            title: 'Chatten oder ein Dokument für RAG hinzufügen',
            whyItMatters: 'Fügen Sie eine unterstützte Datei (PDF, Word, Excel oder CSV) an, damit das Modell dazu Fragen beantwortet, mittels On-Device-Dokumentenabruf laut Eintrag.',
          },
          {
            title: 'Optional: ein vision-fähiges Modell nutzen',
            whyItMatters: 'Laden Sie laut Eintrag ein vision-fähiges Modell, um Fotos oder Bilder zu analysieren — dies ist optional und vom reinen Text-Chat getrennt.',
          },
          {
            title: 'Optional: auf die Premium-Stufe upgraden',
            whyItMatters: 'Eine kostenpflichtige Premium-Stufe ist in der App verfügbar; dieser Test konnte deren genauen Preis oder Umfang über die kostenlosen Basisfunktionen hinaus nicht bestätigen — prüfen Sie den aktuellen Eintrag.',
          },
        ],
        note: 'Die genaue Modellkompatibilität, Downloadgrößen und Inhalte der Premium-Stufe wurden für diesen Test nicht unabhängig bestätigt — prüfen Sie den eigenen Eintrag der App, bevor Sie einen großen Download oder einen Kauf tätigen.',
      },
      features: {
        id: 'features',
        title: 'Funktionen: Dokumenten-Chat, Vision und strukturierte Ausgabe',
        content: [
          '**Laut eigenem Google-Play-Eintrag führt LocalAI GGUF-Modelle über [llama.cpp](https://github.com/ggml-org/llama.cpp) aus und fügt mehrere Funktionen über den reinen Chat hinaus hinzu.** Der Dokumenten-Chat (RAG) deckt PDF-, Word-, Excel- und CSV-Dateien ab, die lokal geparst und in Abschnitte zerlegt werden, mit On-Device-Vektorabruf; der Eintrag beschreibt dies als vollständig offline laufend, ohne dass Dokumenteninhalte an einen Server gesendet werden.',
          'Der Eintrag beschreibt außerdem Unterstützung für vision-fähige Modelle — als Beispiele werden SmolVLM, LLaVA und Qwen-VL genannt — zum Analysieren von Fotos oder Bildern auf dem Gerät, zusammen mit GBNF-Grammatik und JSON-Schema-Unterstützung zur Einschränkung der Modellausgabe auf ein strukturiertes Format sowie Echtzeit-Leistungstelemetrie (Tokens pro Sekunde und ähnliche Metriken), die während des Chattens angezeigt wird.',
          'Dieser Test hat diese Funktionen nicht durch eigene praktische Tests unabhängig verifiziert; sie werden hier als die vom Hersteller selbst angegebenen Fähigkeiten dargestellt, nicht als bestätigte Benchmarks.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**LocalAI ist laut eigenem Google-Play-Eintrag kostenlos herunterladbar und nutzbar, mit einer optionalen kostenpflichtigen Premium-Stufe.** Dieser Test konnte den genauen Preis der Premium-Stufe oder das, was sie über die kostenlosen Basisfunktionen hinaus freischaltet, nicht bestätigen — In-App-Preise im Play Store können außerdem je nach Region variieren.',
        ],
        note: 'Bestätigen Sie den aktuellen Premium-Preis und dessen genauen Inhalt im [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), bevor Sie kaufen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Open-Source-Status',
        content: [
          '**LocalAI ist quellcodegeschlossen: Dieser Test fand kein öffentliches Code-Repository für die App.** Der Eintrag beschreibt Chat-, Dokumenten-RAG- und Vision-Funktionen als auf dem Gerät laufend, aber da der Code nicht veröffentlicht ist, lassen sich diese Aussagen nicht wie bei einer quelloffenen App unabhängig gegen das tatsächliche Verhalten der App prüfen.',
          'Das ist ein bedeutender Unterschied zu einer App wie [ToolNeuron](/de/power-local-llm/toolneuron-review), deren gesamte Codebasis und Sicherheitsarchitektur veröffentlicht und prüfbar sind. Leser, denen unabhängige Überprüfbarkeit wichtig ist, sollten dies vor der Installation berücksichtigen.',
        ],
        items: [
          '**Quellcodegeschlossen.** Für diese App wurde kein öffentliches GitHub-Repository oder Äquivalent gefunden; Funktions- und Datenschutzangaben beruhen allein auf dem Play-Store-Eintrag.',
          '**Keine Datenschutzerklärung gefunden.** Dieser Test konnte über den Datensicherheitsbereich des Play Store hinaus kein eigenes, detailliertes Datenschutzerklärungsdokument für die App finden.',
          '**On-Device-Verarbeitung behauptet.** Der Eintrag gibt an, dass Chat und Dokumenten-RAG auf dem Gerät laufen, aber dies ist eine Herstellerangabe, keine unabhängig geprüfte Tatsache.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlose Basis-App mit breitem Funktionsspektrum',
            'Was das in der Praxis bedeutet': 'Chat, Dokumenten-RAG und Unterstützung für Vision-Modelle kosten nichts zum Ausprobieren.',
            'Einschränkung / Hinweis': 'Dieser Test hat nicht unabhängig verifiziert, wie gut jede Funktion tatsächlich funktioniert.',
          },
          {
            'Vorteil': 'Dokumenten- und Vision-Funktionen über den reinen Chat hinaus',
            'Was das in der Praxis bedeutet': 'Weniger separate Apps nötig für PDF-/Office-Chat oder Bildanalyse.',
            'Einschränkung / Hinweis': 'Funktionstiefe und Zuverlässigkeit beruhen auf der eigenen Beschreibung des Eintrags, nicht auf unabhängigen Tests.',
          },
          {
            'Vorteil': 'Strukturierte Ausgabe (GBNF/JSON-Schema)',
            'Was das in der Praxis bedeutet': 'Nützlich für Leser, die die Modellausgabe in einem vorhersagbaren Format möchten.',
            'Einschränkung / Hinweis': 'Verfügbarkeit und Qualität über verschiedene geladene Modelle hinweg wurden nicht unabhängig geprüft.',
          },
          {
            'Vorteil': 'Optionale Premium-Stufe, keine harte Paywall',
            'Was das in der Praxis bedeutet': 'Kernfunktionen sind kostenlos nutzbar, bevor man sich für eine Zahlung entscheidet.',
            'Einschränkung / Hinweis': 'Der genaue Premium-Preis und -Inhalt wurden für diesen Test nicht bestätigt.',
          },
        ],
        note: 'Quellcodegeschlossen, kein öffentliches Repository gefunden: Anders als bei ToolNeuron lässt sich keine der obigen Aussagen anhand veröffentlichten Codes prüfen.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Quelloffen', 'Hauptunterschied'],
        rows: [
          {
            'App': 'LocalAI (ApexCreator)',
            'Plattformen': 'Nur Android',
            'Preis': 'Kostenlos, mit optionaler Premium-Stufe',
            'Quelloffen': 'Nein — quellcodegeschlossen, kein öffentliches Repository gefunden',
            'Hauptunterschied': 'Dokumenten-RAG und Unterstützung für Vision-Modelle, laut Eintrag, aber nicht unabhängig verifizierbar',
          },
          {
            'App': '[ToolNeuron](/de/power-local-llm/toolneuron-review)',
            'Plattformen': 'Nur Android',
            'Preis': 'Kostenlos, quelloffen (MIT)',
            'Quelloffen': 'Ja — öffentliches GitHub-Repository',
            'Hauptunterschied': 'Ähnlich breites Funktionsspektrum (RAG, Sprache, Plugins), vollständig prüfbarer Quellcode',
          },
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android und iOS',
            'Preis': '19,99 $ Einmalkauf, plus In-App-Stufen',
            'Quelloffen': 'Nein — quellcodegeschlossen',
            'Hauptunterschied': 'Persona- und Rollenspiel-Fokus, mit optionalem Opt-in-Cloud-Modus',
          },
          {
            'App': '[RikkaHub](/de/power-local-llm/rikkahub-review)',
            'Plattformen': 'Nur Android',
            'Preis': 'Kostenlos, quelloffen',
            'Quelloffen': 'Ja',
            'Hauptunterschied': 'Eine weitere kostenlose, quelloffene Android-Option zum direkten Vergleich',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig — prüfen Sie vor einer Entscheidung die aktuellen Angaben im jeweiligen App-Eintrag.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer LocalAI nutzen sollte',
        items: [
          '**Android-Nutzer, die eine kostenlose App mit integrierten Dokumenten- und Vision-Funktionen möchten.** PDF-/Office-Chat und Unterstützung für Vision-Modelle gehen laut Eintrag über reinen Text-Chat hinaus.',
          '**Leser, die Quellcode-Transparenz nicht stark gewichten.** Wenn das eigenständige Prüfen des Codes keine Priorität ist, spielt der quellcodegeschlossene Status für Ihren Anwendungsfall möglicherweise keine Rolle.',
          '**Leser, die bereits mehrere lokale KI-Apps für Android vergleichen.** Sie ist ein nützlicher kostenloser Vergleichspunkt neben quelloffenen Optionen wie ToolNeuron und RikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer LocalAI nicht nutzen sollte',
        items: [
          '**iPhone-, Desktop- oder Web-Nutzer.** Die App ist reine Android-App, ausschließlich über Google Play vertrieben.',
          '**Leser, die den Quellcode der App selbst prüfen möchten.** Dieser Test fand kein öffentliches Repository; eine quelloffene Alternative wie [ToolNeuron](/de/power-local-llm/toolneuron-review) erlaubt eine unabhängige Code-Prüfung.',
          '**Leser, die vor der Installation eine detaillierte, unabhängig prüfbare Datenschutzerklärung benötigen.** Dieser Test konnte über den eigenen Datensicherheitsbereich des Play Store hinaus keine solche finden.',
          '**Leser, die App-Store-Bewertungen stark gewichten.** Mit 3,0 von 5 aus 181 Bewertungen zum Zeitpunkt der Recherche für diesen Test liegt sie niedriger als mehrere hier verglichene Alternativen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist LocalAI (ApexCreator) kostenlos?',
            a: 'Die Basis-App ist kostenlos herunterladbar und nutzbar. Laut Eintrag gibt es eine optionale kostenpflichtige Premium-Stufe, aber dieser Test konnte deren genauen Preis nicht bestätigen — prüfen Sie den aktuellen Google-Play-Eintrag.',
          },
          {
            q: 'Wer macht LocalAI: Offline AI Chat LLM?',
            a: 'Ein Entwickler oder kleines Studio unter dem Namen ApexCreator, erreichbar unter [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Dieser Test fand über diesen Kontakt hinaus keine öffentliche Entwickler-Website oder GitHub-Organisation.',
          },
          {
            q: 'Was kann LocalAI über den Chat hinaus?',
            a: 'Laut eigenem Google-Play-Eintrag: Dokumenten-Chat (RAG) über PDF-, Word-, Excel- und CSV-Dateien; Unterstützung für vision-fähige Modelle; GBNF-Grammatik und JSON-Schema-strukturierte Ausgabe; und Echtzeit-Leistungstelemetrie. Dies sind die vom Hersteller selbst angegebenen Funktionen, nicht von diesem Test unabhängig benchmarkt.',
          },
          {
            q: 'Ist LocalAI quelloffen?',
            a: 'Nein. Dieser Test hat nach einem öffentlichen Code-Repository gesucht und keines gefunden — die App scheint quellcodegeschlossen zu sein.',
          },
          {
            q: 'Funktioniert LocalAI offline?',
            a: 'Laut Eintrag ja, sobald ein Modell heruntergeladen ist. Eine Internetverbindung wird zum Herunterladen von Modellen und App-Updates benötigt.',
          },
          {
            q: 'Wie schneidet LocalAI im Vergleich zu ToolNeuron ab?',
            a: '[ToolNeuron](/de/power-local-llm/toolneuron-review) ist kostenlos und quelloffen, mit einem öffentlichen GitHub-Repository, das seine Sicherheitsarchitektur dokumentiert. LocalAI (ApexCreator) bietet laut Eintrag ein ähnlich breites Funktionsspektrum — einschließlich Dokumenten-RAG und Unterstützung für Vision-Modelle — ist aber quellcodegeschlossen, und dieser Test fand kein öffentliches Repository dafür. Wählen Sie danach, ob Ihnen unabhängig prüfbarer Quellcode wichtig ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'LocalAI: Offline AI Chat LLM packt laut eigenem Google-Play-Eintrag ein wirklich breites Funktionsspektrum in eine kostenlose Android-App: On-Device-Chat über llama.cpp, Dokumenten-RAG über gängige Office-Dateiformate, Unterstützung für vision-fähige Modelle und strukturierte Ausgabe — Funktionen, die deutlich über einen reinen Chat-Client hinausgehen.',
          'Was diesen Test vorsichtig bleiben lässt, ist, dass jede dieser Aussagen auf dem eigenen Store-Eintrag des Entwicklers beruht: Dieser Test fand keinen öffentlichen Quellcode, keine eigene Entwickler-Website und keine detaillierte Datenschutzerklärung, um sie dagegen zu prüfen. Das ist eine echte Lücke gegenüber einer quelloffenen Alternative wie ToolNeuron, deren entsprechende Aussagen sich im veröffentlichten Code verifizieren lassen.',
          'Leser, die eine kostenlose, funktionsreiche Android-KI-App ausprobieren möchten und Quellcode-Transparenz nicht stark gewichten, können sie vertretbar ausprobieren; Leser, die unabhängig verifizieren möchten, was eine App tatsächlich mit lokalen Daten macht, sollten stattdessen mit [ToolNeuron](/de/power-local-llm/toolneuron-review) oder [RikkaHub](/de/power-local-llm/rikkahub-review) beginnen, die beide ihren Quellcode veröffentlichen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LocalAI: Offline AI Chat LLM bei Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — Preise, Funktionen und Bewertung, geprüft am 12.09.2026.',
          'Allgemeine Websuchergebnisse, die die Dokumenten-RAG-, Vision- und strukturierte-Ausgabe-Funktionen der App beschreiben, geprüft am 12.09.2026 — es konnte keine unabhängige Entwickler-Website oder Quellcode-Repository gefunden werden, um diese Aussagen abzugleichen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[ToolNeuron-Test](/de/power-local-llm/toolneuron-review) — eine ähnlich breite, kostenlose, quelloffene Android-Alternative mit einem öffentlichen GitHub-Repository.',
          '[Layla-Test](/de/power-local-llm/layla-review) — eine kostenpflichtige, plattformübergreifende On-Device-Begleit-App mit optionalem Cloud-Modus.',
          '[RikkaHub-Test](/de/power-local-llm/rikkahub-review) — eine weitere kostenlose, quelloffene Android-Chat-App für lokale KI.',
          '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene lokale KI-App mit iOS- und teilweiser Android-Unterstützung.',
          '[Das vollständige lokale LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein umfassenderes Verzeichnis lokaler LLM-Tools über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-fr.webp',
    title: 'LocalAI en test (2026) : l\'application de chat IA hors ligne d\'ApexCreator pour Android',
    seoTitle: 'LocalAI (ApexCreator) en test 2026 : chat IA hors ligne pour Android',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), du développeur [ApexCreator](mailto:info@apexcreators.co.in), est une application Android gratuite qui exécute des modèles de langage GGUF directement sur l\'appareil via llama.cpp, avec un niveau premium payant optionnel. Selon sa fiche Google Play, elle ajoute un chat documentaire sur des fichiers PDF, Word, Excel et CSV via une recherche vectorielle sur l\'appareil, la prise en charge de modèles capables de vision, une sortie structurée JSON/contrainte par grammaire, et une télémétrie de performance en temps réel. Contrairement à [ToolNeuron](/fr/power-local-llm/toolneuron-review), cette application est à code fermé — aucun dépôt de code public n\'a été trouvé pour ce test. Chaque affirmation ci-dessous provient de la fiche publique du Play Store, pas d\'un test indépendant ni d\'un entretien avec le développeur.',
    metaDescription:
      'LocalAI (ApexCreator) en test 2026 : application Android gratuite pour le chat IA hors ligne, le RAG PDF/documentaire et les modèles de vision via llama.cpp, avec un niveau premium optionnel. Code fermé — ce que la fiche affirme et ce que ce test n\'a pas pu vérifier.',
    twitterDescription:
      'LocalAI (ApexCreator) en test : une application Android gratuite exécutant des modèles GGUF sur l\'appareil via llama.cpp, avec RAG documentaire, prise en charge de modèles de vision et sortie structurée — selon sa fiche Play Store. Code fermé, aucun dépôt public trouvé.',
    audience:
      'Les utilisateurs Android envisageant une application de chat IA gratuite fonctionnant sur l\'appareil avec des fonctions documentaires et de vision, qui veulent une lecture lucide de ce qui est confirmé par rapport à ce que seule la fiche du store de l\'application affirme.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM est une application Android gratuite du développeur ApexCreator, qui exécute des modèles de langage GGUF sur l\'appareil via llama.cpp, avec un niveau premium payant optionnel.** Selon sa fiche Google Play, elle ajoute un chat documentaire sur des fichiers PDF, Word, Excel et CSV via une recherche vectorielle sur l\'appareil (sqlite-vec), la prise en charge de modèles capables de vision, et une sortie structurée JSON/contrainte par grammaire. L\'application est à code fermé, et ce test n\'a trouvé aucun dépôt de code public pour elle — chaque affirmation technique ici provient de la fiche publique du Play Store, pas d\'un audit indépendant. Les lecteurs qui souhaitent une alternative open source avec un dépôt public devraient plutôt lire le [test de ToolNeuron](/fr/power-local-llm/toolneuron-review).',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Vaut-il la peine d\'installer LocalAI (ApexCreator) ?',
        answer:
          'Cela dépend de l\'importance que vous accordez à la transparence du code source. L\'application est gratuite, exécute des modèles sur l\'appareil via llama.cpp et ajoute, selon sa fiche, un chat documentaire, la prise en charge de modèles de vision et une sortie structurée — un ensemble de fonctions large pour une application gratuite. Elle est cependant à code fermé, et ce test n\'a trouvé aucun dépôt public pour elle, si bien que ses affirmations sur la confidentialité et le traitement des données reposent entièrement sur la fiche elle-même, et non sur un code vérifiable de manière indépendante. Si vous voulez le même type d\'ensemble de fonctions avec un code source publié, essayez d\'abord ToolNeuron.',
        bullets: [
          'Gratuite à télécharger et à utiliser, avec un niveau premium payant optionnel — le prix exact du premium n\'a pas été confirmé pour ce test ; vérifiez la fiche actuelle.',
          'Exécute des modèles de langage GGUF sur l\'appareil via llama.cpp, selon la fiche Google Play.',
          'Ajoute un chat documentaire (RAG) sur des fichiers PDF, Word, Excel et CSV via une recherche vectorielle sur l\'appareil, ainsi que la prise en charge de modèles capables de vision, selon la fiche.',
          'Code fermé : ce test n\'a trouvé aucun dépôt GitHub public pour l\'application, contrairement à ToolNeuron.',
          'La note Google Play était de 3,0 sur 5 pour 181 avis au moment de la recherche pour ce test (septembre 2026) — à considérer comme une photographie de la fiche, pas comme une recommandation.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir LocalAI', anchor: 'get-it' },
      { label: 'Ce qu\'est LocalAI', anchor: 'what-is-localai' },
      { label: 'Comment démarrer', anchor: 'how-to-get-started' },
      { label: 'Fonctions : chat documentaire, vision et sortie structurée', anchor: 'features' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Confidentialité et statut open source', anchor: 'privacy' },
      { label: 'Compromis : avantages vs limites', anchor: 'tradeoffs' },
      { label: 'LocalAI vs alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser LocalAI', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser LocalAI', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM est une application Android gratuite et à code fermé d\'ApexCreator, qui exécute des modèles GGUF sur l\'appareil via llama.cpp, en ajoutant un RAG documentaire, la prise en charge de modèles de vision et une sortie structurée selon sa fiche Google Play, sans code source public disponible pour un examen indépendant.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une application de chat gratuite pour Android qui peut aussi lire vos PDF et regarder vos photos, tout cela sur votre téléphone — mais comme le développeur n\'a pas publié le code, vous devez accepter en grande partie sur la foi les affirmations de la fiche sur la confidentialité et les fonctions, plutôt que de les vérifier vous-même.',
          },
        ],
        items: [
          'Prix : gratuite à [télécharger](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) et à utiliser, avec un niveau premium payant optionnel ; le prix exact du premium n\'a pas été confirmé pour ce test.',
          'Développeur : ApexCreator (contact : [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'Moteur : [llama.cpp](https://github.com/ggml-org/llama.cpp) pour les modèles GGUF, exécuté sur l\'appareil, selon la fiche Google Play.',
          'Fonctions au-delà du chat : RAG documentaire sur des fichiers PDF, Word, Excel et CSV via une recherche vectorielle sur l\'appareil ; prise en charge de modèles capables de vision ; sortie structurée par grammaire GBNF et schéma JSON ; télémétrie de performance en temps réel, selon la fiche.',
          'Statut open source : code fermé — ce test n\'a trouvé aucun dépôt de code public pour l\'application.',
          'Note Google Play : 3,0 sur 5 pour 181 avis au moment de la recherche pour ce test (septembre 2026).',
          'Distribution : disponible uniquement sur [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test se fonde sur la fiche publique Google Play de l\'application et des résultats de recherche généraux à son sujet, consultés en septembre 2026. PromptQuorum n\'a pas mené de test pratique indépendant, d\'examen de la politique de confidentialité, ni d\'audit de code de cette application — comme l\'application est à code fermé, aucun audit de code n\'était possible.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Obtenir LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM n\'est disponible que sur Google Play.**',
          'Ce test complète le [répertoire de logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense les outils d\'IA locale sur toutes les plateformes, y compris la fiche de cette application.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Google Play',
            'Obtenir': '[LocalAI: Offline AI Chat LLM sur Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'L\'application elle-même est gratuite à télécharger ; un niveau premium intégré est disponible, selon la fiche, mais ce test n\'a pas pu confirmer son prix exact — vérifiez la fiche actuelle avant tout achat.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'Ce qu\'est LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM est, selon sa fiche Google Play, une application Android qui exécute des modèles de langage au format GGUF sur l\'appareil via llama.cpp.** Au-delà du simple chat, la fiche décrit une recherche documentaire (RAG) sur des formats de fichiers bureautiques courants et la prise en charge de modèles capables de vision, positionnant l\'application comme une boîte à outils d\'IA sur l\'appareil plus large qu\'un simple chatbot.',
          'L\'application est réalisée par un développeur ou un petit studio opérant sous le nom ApexCreator, joignable à [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Ce test s\'appuie sur la fiche publique du Play Store de l\'application et des résultats de recherche généraux à son sujet — aucun dépôt de code source public, aucun site web dédié au développeur, ni aucun document de politique de confidentialité n\'a pu être trouvé pour un examen indépendant, ce qui constitue une différence notable avec des alternatives open source comme [ToolNeuron](/fr/power-local-llm/toolneuron-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment démarrer',
        content: [
          '**La mise en place de LocalAI ne prend que quelques étapes.** Le processus global, de l\'installation à la première réponse hors ligne, prend quelques minutes, plus le temps nécessaire au téléchargement du modèle choisi.',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Obtenez [LocalAI: Offline AI Chat LLM sur Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). L\'application elle-même est gratuite à installer.',
          },
          {
            title: 'Télécharger un modèle GGUF',
            whyItMatters: 'Cette étape nécessite une connexion internet. La taille du téléchargement dépend du modèle choisi ; le chat qui suit ne nécessite pas de connexion réseau, selon la fiche.',
          },
          {
            title: 'Discuter, ou ajouter un document pour le RAG',
            whyItMatters: 'Joignez un fichier pris en charge (PDF, Word, Excel ou CSV) pour que le modèle réponde à des questions à son sujet, via une recherche documentaire sur l\'appareil, selon la fiche.',
          },
          {
            title: 'Optionnel : utiliser un modèle capable de vision',
            whyItMatters: 'Chargez un modèle capable de vision pour analyser des photos ou des images, selon la fiche — cela est optionnel et distinct du simple chat textuel.',
          },
          {
            title: 'Optionnel : passer au niveau premium',
            whyItMatters: 'Un niveau premium payant est disponible dans l\'application ; ce test n\'a pas pu confirmer son prix exact ni sa portée au-delà des fonctions de base gratuites — vérifiez la fiche actuelle.',
          },
        ],
        note: 'La compatibilité exacte des modèles, les tailles de téléchargement et le contenu du niveau premium n\'ont pas été confirmés de manière indépendante pour ce test — vérifiez la fiche de l\'application avant de vous engager dans un téléchargement volumineux ou un achat.',
      },
      features: {
        id: 'features',
        title: 'Fonctions : chat documentaire, vision et sortie structurée',
        content: [
          '**Selon sa fiche Google Play, LocalAI exécute des modèles GGUF via [llama.cpp](https://github.com/ggml-org/llama.cpp) et ajoute plusieurs fonctions au-delà du simple chat.** Le chat documentaire (RAG) couvre les fichiers PDF, Word, Excel et CSV, analysés et découpés localement avec une recherche vectorielle sur l\'appareil ; la fiche décrit cela comme fonctionnant entièrement hors ligne, sans que le contenu des documents soit envoyé à un serveur.',
          'La fiche décrit également la prise en charge de modèles capables de vision — citant SmolVLM, LLaVA et Qwen-VL comme exemples — pour analyser des photos ou des images sur l\'appareil, ainsi que la prise en charge de grammaire GBNF et de schéma JSON pour contraindre la sortie du modèle à un format structuré, et une télémétrie de performance en temps réel (tokens par seconde et mesures similaires) affichée pendant le chat.',
          'Ce test n\'a pas vérifié ces fonctions de manière indépendante par des essais pratiques ; elles sont présentées ici comme les capacités déclarées par l\'application elle-même, et non comme des benchmarks confirmés.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**LocalAI est gratuite à télécharger et à utiliser, avec un niveau premium payant optionnel, selon sa fiche Google Play.** Ce test n\'a pas pu confirmer le prix exact du niveau premium ni ce qu\'il débloque au-delà des fonctions de base gratuites — les prix intégrés du Play Store peuvent aussi varier selon la région.',
        ],
        note: 'Confirmez le prix premium actuel et son contenu exact sur la [fiche Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) avant tout achat.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et statut open source',
        content: [
          '**LocalAI est à code fermé : ce test n\'a trouvé aucun dépôt de code public pour l\'application.** Sa fiche décrit les fonctions de chat, de RAG documentaire et de vision comme fonctionnant sur l\'appareil, mais comme le code n\'est pas publié, ces affirmations ne peuvent pas être vérifiées de manière indépendante par rapport au comportement réel de l\'application, comme ce serait le cas pour une application open source.',
          'C\'est une différence notable par rapport à une application comme [ToolNeuron](/fr/power-local-llm/toolneuron-review), dont l\'ensemble du code et de l\'architecture de sécurité est publié et vérifiable. Les lecteurs qui accordent une grande importance à la vérifiabilité indépendante devraient en tenir compte avant d\'installer l\'application.',
        ],
        items: [
          '**Code fermé.** Aucun dépôt GitHub public ou équivalent n\'a été trouvé pour cette application ; les affirmations sur les fonctions et la confidentialité reposent uniquement sur la fiche du Play Store.',
          '**Aucune politique de confidentialité trouvée.** Ce test n\'a pas pu trouver de document de politique de confidentialité dédié et détaillé pour l\'application, au-delà de la section sécurité des données du Play Store.',
          '**Traitement sur l\'appareil affirmé.** La fiche indique que le chat et le RAG documentaire fonctionnent sur l\'appareil, mais il s\'agit d\'une affirmation du fournisseur, pas d\'un fait audité de manière indépendante.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Application de base gratuite avec un large ensemble de fonctions',
            'Ce que cela signifie en usage réel': 'Le chat, le RAG documentaire et la prise en charge de modèles de vision ne coûtent rien à essayer.',
            'Limite / réserve': 'Ce test n\'a pas vérifié de manière indépendante la performance réelle de chaque fonction.',
          },
          {
            'Avantage': 'Fonctions documentaires et de vision au-delà du simple chat',
            'Ce que cela signifie en usage réel': 'Moins d\'applications distinctes nécessaires pour le chat PDF/bureautique ou l\'analyse d\'images.',
            'Limite / réserve': 'La profondeur et la fiabilité des fonctions reposent sur la propre description de la fiche, pas sur des tests indépendants.',
          },
          {
            'Avantage': 'Sortie structurée (GBNF/schéma JSON)',
            'Ce que cela signifie en usage réel': 'Utile pour les lecteurs qui veulent la sortie du modèle dans un format prévisible.',
            'Limite / réserve': 'La disponibilité et la qualité selon les différents modèles chargés n\'ont pas été vérifiées de manière indépendante.',
          },
          {
            'Avantage': 'Niveau premium optionnel, pas un mur payant strict',
            'Ce que cela signifie en usage réel': 'Les fonctions principales sont utilisables gratuitement avant de décider de payer.',
            'Limite / réserve': 'Le prix et le contenu exacts du niveau premium n\'ont pas été confirmés pour ce test.',
          },
        ],
        note: 'Code fermé, sans dépôt public trouvé : contrairement à ToolNeuron, aucune des affirmations ci-dessus ne peut être vérifiée par rapport à un code publié.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI vs alternatives',
        columns: ['Application', 'Plateformes', 'Prix', 'Open source', 'Différence clé'],
        rows: [
          {
            'Application': 'LocalAI (ApexCreator)',
            'Plateformes': 'Android uniquement',
            'Prix': 'Gratuite, avec niveau premium optionnel',
            'Open source': 'Non — code fermé, aucun dépôt public trouvé',
            'Différence clé': 'RAG documentaire et prise en charge de modèles de vision, selon la fiche, mais non vérifiable de manière indépendante',
          },
          {
            'Application': '[ToolNeuron](/fr/power-local-llm/toolneuron-review)',
            'Plateformes': 'Android uniquement',
            'Prix': 'Gratuite, open source (MIT)',
            'Open source': 'Oui — dépôt GitHub public',
            'Différence clé': 'Ensemble de fonctions d\'une ampleur similaire (RAG, voix, plugins), code source entièrement vérifiable',
          },
          {
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android et iOS',
            'Prix': 'Achat unique de 19,99 $, plus des niveaux intégrés',
            'Open source': 'Non — code fermé',
            'Différence clé': 'Orientée persona et jeu de rôle, avec un mode cloud optionnel',
          },
          {
            'Application': '[RikkaHub](/fr/power-local-llm/rikkahub-review)',
            'Plateformes': 'Android uniquement',
            'Prix': 'Gratuite, open source',
            'Open source': 'Oui',
            'Différence clé': 'Une autre option Android gratuite et open source pour une comparaison directe',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctions des applications tierces changent fréquemment — vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser LocalAI',
        items: [
          '**Les utilisateurs Android qui veulent une application gratuite avec des fonctions documentaires et de vision intégrées.** Le chat PDF/bureautique et la prise en charge de modèles de vision vont, selon la fiche, au-delà du simple chat textuel.',
          '**Les lecteurs qui n\'accordent pas une grande importance à la transparence du code source.** Si vérifier le code vous-même n\'est pas une priorité, le statut de code fermé pourrait ne pas compter pour votre usage.',
          '**Les lecteurs qui comparent déjà plusieurs applications d\'IA locale pour Android.** C\'est un point de comparaison gratuit utile à côté d\'options open source comme ToolNeuron et RikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser LocalAI',
        items: [
          '**Les utilisateurs d\'iPhone, de bureau ou du web.** L\'application est réservée à Android, distribuée uniquement via Google Play.',
          '**Les lecteurs qui veulent auditer eux-mêmes le code source de l\'application.** Ce test n\'a trouvé aucun dépôt public ; une alternative open source comme [ToolNeuron](/fr/power-local-llm/toolneuron-review) permet un examen de code indépendant.',
          '**Les lecteurs qui ont besoin d\'une politique de confidentialité détaillée et vérifiable de manière indépendante avant d\'installer.** Ce test n\'a pas pu en trouver une au-delà de la propre section sécurité des données du Play Store.',
          '**Les lecteurs qui accordent une grande importance aux notes des boutiques d\'applications.** Avec 3,0 sur 5 pour 181 avis au moment de la recherche pour ce test, elle se classe plus bas que plusieurs alternatives comparées ici.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LocalAI (ApexCreator) est-elle gratuite ?',
            a: 'L\'application de base est gratuite à télécharger et à utiliser. Un niveau premium payant optionnel existe, selon la fiche, mais ce test n\'a pas pu confirmer son prix exact — vérifiez la fiche Google Play actuelle.',
          },
          {
            q: 'Qui fabrique LocalAI: Offline AI Chat LLM ?',
            a: 'Un développeur ou un petit studio opérant sous le nom ApexCreator, joignable à [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Ce test n\'a trouvé aucun site web public de développeur ni organisation GitHub au-delà de ce contact.',
          },
          {
            q: 'Que peut faire LocalAI au-delà du chat ?',
            a: 'Selon sa fiche Google Play : chat documentaire (RAG) sur des fichiers PDF, Word, Excel et CSV ; prise en charge de modèles capables de vision ; sortie structurée par grammaire GBNF et schéma JSON ; et télémétrie de performance en temps réel. Ce sont les fonctions déclarées par l\'application elle-même, non testées en benchmark de manière indépendante par ce test.',
          },
          {
            q: 'LocalAI est-elle open source ?',
            a: 'Non. Ce test a recherché un dépôt de code public et n\'en a trouvé aucun — l\'application semble être à code fermé.',
          },
          {
            q: 'LocalAI fonctionne-t-elle hors ligne ?',
            a: 'Selon sa fiche, oui, une fois qu\'un modèle est téléchargé. Une connexion internet est nécessaire pour télécharger les modèles et les mises à jour de l\'application.',
          },
          {
            q: 'Comment LocalAI se compare-t-elle à ToolNeuron ?',
            a: '[ToolNeuron](/fr/power-local-llm/toolneuron-review) est gratuite et open source, avec un dépôt GitHub public documentant son architecture de sécurité. LocalAI (ApexCreator) propose un ensemble de fonctions d\'une ampleur similaire — incluant le RAG documentaire et la prise en charge de modèles de vision, selon sa fiche — mais est à code fermé, et ce test n\'a trouvé aucun dépôt public pour elle. Choisissez selon l\'importance que vous accordez à un code source vérifiable de manière indépendante.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'LocalAI: Offline AI Chat LLM, selon sa fiche Google Play, condense un ensemble de fonctions réellement large dans une application Android gratuite : chat sur l\'appareil via llama.cpp, RAG documentaire sur des formats de fichiers bureautiques courants, prise en charge de modèles capables de vision et sortie structurée — des fonctions qui vont bien au-delà d\'un simple client de chat.',
          'Ce qui incite ce test à rester prudent, c\'est que chacune de ces affirmations repose sur la propre fiche du store du développeur : ce test n\'a trouvé aucun code source public, aucun site web dédié au développeur, et aucune politique de confidentialité détaillée pour les vérifier. C\'est un véritable écart par rapport à une alternative open source comme ToolNeuron, dont les affirmations équivalentes peuvent être vérifiées dans un code publié.',
          'Les lecteurs qui veulent essayer une application IA Android gratuite et riche en fonctions, et qui n\'accordent pas une grande importance à la transparence du code source, peuvent raisonnablement l\'essayer ; les lecteurs qui veulent vérifier de manière indépendante ce qu\'une application fait réellement avec les données locales devraient plutôt commencer par [ToolNeuron](/fr/power-local-llm/toolneuron-review) ou [RikkaHub](/fr/power-local-llm/rikkahub-review), qui publient tous deux leur code source.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalAI: Offline AI Chat LLM sur Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — tarifs, fonctions et note, vérifiés le 12/09/2026.',
          'Résultats de recherche généraux décrivant les fonctions de RAG documentaire, de vision et de sortie structurée de l\'application, vérifiés le 12/09/2026 — aucun site web indépendant de développeur ni dépôt de code source n\'a été trouvé pour recouper ces affirmations.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de ToolNeuron](/fr/power-local-llm/toolneuron-review) — une alternative Android tout aussi large, gratuite et open source, avec un dépôt GitHub public.',
          '[Test de Layla](/fr/power-local-llm/layla-review) — une application compagne payante et multiplateforme sur l\'appareil, avec un mode cloud optionnel.',
          '[Test de RikkaHub](/fr/power-local-llm/rikkahub-review) — une autre application de chat IA locale gratuite et open source pour Android.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une application d\'IA locale gratuite et open source avec prise en charge iOS et partielle sur Android.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux sur toutes les plateformes.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-es.webp',
    title: 'LocalAI a prueba (2026): la app de chat de IA sin conexión de ApexCreator para Android',
    seoTitle: 'LocalAI (ApexCreator) a prueba 2026: chat de IA sin conexión en Android',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), del desarrollador [ApexCreator](mailto:info@apexcreators.co.in), es una app gratuita para Android que ejecuta modelos de lenguaje GGUF en el propio dispositivo mediante llama.cpp, con un nivel premium de pago opcional. Según su propia ficha en Google Play, añade chat con documentos en PDF, Word, Excel y CSV mediante recuperación vectorial en el dispositivo, compatibilidad con modelos con capacidades de visión, salida estructurada JSON/restringida por gramática y telemetría de rendimiento en tiempo real. A diferencia de [ToolNeuron](/es/power-local-llm/toolneuron-review), esta app es de código cerrado — para esta reseña no se encontró ningún repositorio de código público. Cada afirmación de abajo procede de su ficha pública en Play Store, no de pruebas independientes ni de una entrevista con el desarrollador.',
    metaDescription:
      'LocalAI (ApexCreator) a prueba 2026: app gratuita para Android de chat de IA sin conexión, RAG de documentos/PDF y modelos de visión mediante llama.cpp, con un nivel premium opcional. Código cerrado — lo que afirma la ficha y lo que esta reseña no pudo verificar.',
    twitterDescription:
      'LocalAI (ApexCreator) a prueba: una app gratuita para Android que ejecuta modelos GGUF en el dispositivo mediante llama.cpp, con RAG de documentos, compatibilidad con modelos de visión y salida estructurada — según su ficha en Play Store. Código cerrado, sin repositorio público encontrado.',
    audience:
      'Usuarios de Android que consideran una app gratuita de chat de IA en el dispositivo con funciones de documentos y visión, y que quieren una lectura clara de lo que está confirmado frente a lo que solo afirma la propia ficha de la app en la tienda.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM es una app gratuita para Android del desarrollador ApexCreator que ejecuta modelos de lenguaje GGUF en el propio dispositivo mediante llama.cpp, con un nivel premium de pago opcional.** Según su propia ficha en Google Play, añade chat con documentos en PDF, Word, Excel y CSV mediante recuperación vectorial en el dispositivo (sqlite-vec), compatibilidad con modelos con capacidades de visión y salida estructurada JSON/restringida por gramática. La app es de código cerrado, y para esta reseña no se encontró ningún repositorio de código público — cada afirmación técnica aquí procede de la ficha pública en Play Store, no de una auditoría independiente. Los lectores que quieran una alternativa de código abierto con un repositorio público deberían leer en su lugar la [reseña de ToolNeuron](/es/power-local-llm/toolneuron-review).',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Merece la pena instalar LocalAI (ApexCreator)?',
        answer:
          'Depende de cuánto valore la transparencia del código fuente. La app es gratuita, ejecuta modelos en el dispositivo mediante llama.cpp y, según su ficha, añade chat con documentos, compatibilidad con modelos de visión y salida estructurada — un conjunto de funciones amplio para una app gratuita. Sin embargo, es de código cerrado y esta reseña no pudo encontrar ningún repositorio público, por lo que sus afirmaciones sobre privacidad y tratamiento de datos descansan por completo en la propia ficha, no en un código auditable de forma independiente. Si quiere el mismo tipo de funciones con código fuente publicado, pruebe primero ToolNeuron.',
        bullets: [
          'Gratuita para descargar y usar, con un nivel premium de pago opcional — el precio exacto del premium no se confirmó para esta reseña; consulte la ficha actual.',
          'Ejecuta modelos de lenguaje GGUF en el dispositivo mediante llama.cpp, según la ficha de Google Play.',
          'Añade chat con documentos (RAG) en PDF, Word, Excel y CSV mediante recuperación vectorial en el dispositivo, y compatibilidad con modelos con capacidades de visión, según la ficha.',
          'Código cerrado: esta reseña no encontró ningún repositorio público en GitHub para la app, a diferencia de ToolNeuron.',
          'La valoración en Google Play era de 3,0 sobre 5 con 181 reseñas en el momento de la investigación para esta reseña (septiembre de 2026) — trátelo como una instantánea de la ficha, no como una recomendación.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Consigue LocalAI', anchor: 'get-it' },
      { label: 'Qué es LocalAI', anchor: 'what-is-localai' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones: chat con documentos, visión y salida estructurada', anchor: 'features' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Privacidad y estado de código abierto', anchor: 'privacy' },
      { label: 'Ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'LocalAI frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar LocalAI', anchor: 'who-should-use' },
      { label: 'Quién no debería usar LocalAI', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM es una app gratuita y de código cerrado para Android de ApexCreator que ejecuta modelos GGUF en el dispositivo mediante llama.cpp, y que, según su propia ficha en Google Play, añade RAG de documentos, compatibilidad con modelos de visión y salida estructurada, sin código fuente público disponible para una revisión independiente.',
          },
          {
            type: 'plain-terms',
            text: 'Piense en ella como una app de chat gratuita para Android que también puede leer sus PDF y mirar sus fotos, todo ejecutándose en su teléfono — pero como el desarrollador no ha publicado el código, tiene que aceptar en gran medida por confianza las afirmaciones de privacidad y funciones de la ficha, en lugar de verificarlas usted mismo.',
          },
        ],
        items: [
          'Precio: gratuita para [descargar](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) y usar, con un nivel premium de pago opcional; el precio exacto del premium no se confirmó para esta reseña.',
          'Desarrollador: ApexCreator (contacto: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'Motor: [llama.cpp](https://github.com/ggml-org/llama.cpp) para modelos GGUF, ejecutado en el dispositivo, según la ficha de Google Play.',
          'Funciones más allá del chat: RAG de documentos en PDF, Word, Excel y CSV mediante recuperación vectorial en el dispositivo; compatibilidad con modelos con capacidades de visión; gramática GBNF y salida estructurada por esquema JSON; telemetría de rendimiento en tiempo real, según la ficha.',
          'Estado de código abierto: código cerrado — esta reseña no encontró ningún repositorio de código público para la app.',
          'Valoración en Google Play: 3,0 sobre 5 con 181 reseñas en el momento de la investigación para esta reseña (septiembre de 2026).',
          'Distribución: disponible solo en [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha pública de la app en Google Play y en resultados generales de búsqueda web sobre ella, comprobados en septiembre de 2026. PromptQuorum no ha realizado pruebas prácticas independientes, ni una revisión de la política de privacidad, ni una auditoría de código de esta app — al ser de código cerrado, no fue posible realizar una auditoría de código.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Consigue LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM solo está disponible en Google Play.**',
          'Esta reseña complementa el [Directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que indexa herramientas de IA local en distintas plataformas, incluida la propia ficha de esta app.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'Google Play',
            'Cómo conseguirla': '[LocalAI: Offline AI Chat LLM en Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'La app en sí es gratuita para descargar; según la ficha, existe un nivel premium dentro de la app, pero esta reseña no pudo confirmar su precio exacto — consulte la ficha actual antes de comprar.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'Qué es LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM es, según su ficha en Google Play, una app para Android que ejecuta modelos de lenguaje en formato GGUF en el dispositivo mediante llama.cpp.** Más allá del chat sencillo, la ficha describe recuperación de documentos (RAG) sobre formatos de archivo de ofimática habituales y compatibilidad con modelos con capacidades de visión, lo que la posiciona más como un conjunto de herramientas de IA en el dispositivo que como un chatbot de propósito único.',
          'La app está hecha por un desarrollador o estudio pequeño que opera como ApexCreator, contactable en [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Esta reseña se basa en la ficha pública de la app en Play Store y en resultados generales de búsqueda web sobre ella — no se pudo localizar ningún repositorio de código fuente público, ninguna web propia del desarrollador ni ningún documento de política de privacidad para una revisión independiente, lo cual es una diferencia relevante respecto a alternativas de código abierto como [ToolNeuron](/es/power-local-llm/toolneuron-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar LocalAI lleva unos pocos pasos.** El proceso completo, desde la instalación hasta la primera respuesta sin conexión, tarda unos minutos más el tiempo que tarde en descargarse el modelo elegido.',
        ],
        numberedItems: [
          {
            title: 'Instalar la app',
            whyItMatters: 'Consiga [LocalAI: Offline AI Chat LLM en Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). La app en sí es gratuita de instalar.',
          },
          {
            title: 'Descargar un modelo GGUF',
            whyItMatters: 'Este paso requiere conexión a internet. El tamaño de la descarga depende del modelo elegido; según la ficha, chatear después no necesita conexión de red.',
          },
          {
            title: 'Chatear o añadir un documento para RAG',
            whyItMatters: 'Adjunte un archivo compatible (PDF, Word, Excel o CSV) para que el modelo responda preguntas sobre él, mediante recuperación de documentos en el dispositivo, según la ficha.',
          },
          {
            title: 'Opcional: usar un modelo con capacidades de visión',
            whyItMatters: 'Cargue, según la ficha, un modelo con capacidades de visión para analizar fotos o imágenes — esto es opcional y distinto del chat de texto simple.',
          },
          {
            title: 'Opcional: pasar al nivel premium',
            whyItMatters: 'Dentro de la app hay disponible un nivel premium de pago; esta reseña no pudo confirmar su precio exacto ni su alcance más allá de las funciones gratuitas básicas — consulte la ficha actual.',
          },
        ],
        note: 'La compatibilidad exacta de modelos, los tamaños de descarga y el contenido del nivel premium no se confirmaron de forma independiente para esta reseña — consulte la propia ficha de la app antes de comprometerse a una descarga grande o a una compra.',
      },
      features: {
        id: 'features',
        title: 'Funciones: chat con documentos, visión y salida estructurada',
        content: [
          '**Según su ficha en Google Play, LocalAI ejecuta modelos GGUF mediante [llama.cpp](https://github.com/ggml-org/llama.cpp) y añade varias funciones más allá del chat sencillo.** El chat con documentos (RAG) cubre archivos PDF, Word, Excel y CSV, analizados y fragmentados localmente con recuperación vectorial en el dispositivo; la ficha describe esto como un funcionamiento totalmente sin conexión, sin que el contenido de los documentos se envíe a ningún servidor.',
          'La ficha también describe compatibilidad con modelos con capacidades de visión — citando como ejemplos SmolVLM, LLaVA y Qwen-VL — para analizar fotos o imágenes en el dispositivo, junto con gramática GBNF y compatibilidad con esquemas JSON para restringir la salida del modelo a un formato estructurado, y telemetría de rendimiento en tiempo real (tokens por segundo y métricas similares) mostrada durante el chat.',
          'Esta reseña no ha verificado estas funciones de forma independiente mediante pruebas prácticas; se presentan aquí como las capacidades declaradas por la propia app, no como puntos de referencia confirmados.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**LocalAI es gratuita para descargar y usar, con un nivel premium de pago opcional, según su ficha en Google Play.** Esta reseña no pudo confirmar el precio exacto del nivel premium ni qué desbloquea más allá de las funciones gratuitas básicas — los precios dentro de la app en Play Store también pueden variar según la región.',
        ],
        note: 'Confirme el precio premium actual y su contenido exacto en la [ficha de Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) antes de comprar.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y estado de código abierto',
        content: [
          '**LocalAI es de código cerrado: esta reseña no encontró ningún repositorio de código público para la app.** Su ficha describe las funciones de chat, RAG de documentos y visión como ejecutadas en el dispositivo, pero al no estar publicado el código, esas afirmaciones no pueden comprobarse de forma independiente frente al comportamiento real de la app como sí ocurre con una app de código abierto.',
          'Esta es una diferencia relevante respecto a una app como [ToolNeuron](/es/power-local-llm/toolneuron-review), cuya base de código completa y arquitectura de seguridad están publicadas y son auditables. Los lectores que valoren mucho la verificabilidad independiente deberían tenerlo en cuenta antes de instalarla.',
        ],
        items: [
          '**Código cerrado.** No se encontró ningún repositorio público en GitHub ni equivalente para esta app; las afirmaciones sobre funciones y privacidad descansan únicamente en la ficha de Play Store.',
          '**No se localizó política de privacidad.** Esta reseña no pudo encontrar un documento de política de privacidad propio y detallado para la app más allá de su sección de seguridad de datos en Play Store.',
          '**Procesamiento en el dispositivo, según se afirma.** La ficha declara que el chat y el RAG de documentos se ejecutan en el dispositivo, pero es una afirmación del proveedor, no un hecho auditado de forma independiente.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'App base gratuita con un amplio conjunto de funciones',
            'Qué significa en el uso real': 'Probar el chat, el RAG de documentos y la compatibilidad con modelos de visión no cuesta nada.',
            'Limitación / advertencia': 'Esta reseña no ha verificado de forma independiente el rendimiento real de cada función.',
          },
          {
            'Ventaja': 'Funciones de documentos y visión más allá del chat sencillo',
            'Qué significa en el uso real': 'Se necesitan menos apps distintas para el chat con PDF/Office o el análisis de imágenes.',
            'Limitación / advertencia': 'La profundidad y fiabilidad de las funciones descansan en la propia descripción de la ficha, no en pruebas independientes.',
          },
          {
            'Ventaja': 'Salida estructurada (GBNF/esquema JSON)',
            'Qué significa en el uso real': 'Útil para lectores que quieren la salida del modelo en un formato predecible.',
            'Limitación / advertencia': 'No se comprobó de forma independiente la disponibilidad ni la calidad en los distintos modelos cargados.',
          },
          {
            'Ventaja': 'Nivel premium opcional, sin muro de pago obligatorio',
            'Qué significa en el uso real': 'Las funciones principales se pueden usar gratis antes de decidir si pagar.',
            'Limitación / advertencia': 'El precio exacto y el contenido del nivel premium no se confirmaron para esta reseña.',
          },
        ],
        note: 'De código cerrado, sin repositorio público encontrado: a diferencia de ToolNeuron, ninguna de las afirmaciones anteriores puede comprobarse frente a código publicado.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Código abierto', 'Diferencia clave'],
        rows: [
          {
            'App': 'LocalAI (ApexCreator)',
            'Plataformas': 'Solo Android',
            'Precio': 'Gratuita, con nivel premium opcional',
            'Código abierto': 'No — código cerrado, sin repositorio público encontrado',
            'Diferencia clave': 'RAG de documentos y compatibilidad con modelos de visión, según la ficha, pero no verificable de forma independiente',
          },
          {
            'App': '[ToolNeuron](/es/power-local-llm/toolneuron-review)',
            'Plataformas': 'Solo Android',
            'Precio': 'Gratuita, código abierto (MIT)',
            'Código abierto': 'Sí — repositorio público en GitHub',
            'Diferencia clave': 'Amplitud de funciones similar (RAG, voz, plugins), código fuente totalmente auditable',
          },
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android e iOS',
            'Precio': 'Compra única de 19,99 $, más niveles dentro de la app',
            'Código abierto': 'No — código cerrado',
            'Diferencia clave': 'Enfoque en personajes y rol, con un modo en la nube opcional de suscripción voluntaria',
          },
          {
            'App': '[RikkaHub](/es/power-local-llm/rikkahub-review)',
            'Plataformas': 'Solo Android',
            'Precio': 'Gratuita, código abierto',
            'Código abierto': 'Sí',
            'Diferencia clave': 'Otra opción gratuita y de código abierto para Android como comparación directa',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifique los datos actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar LocalAI',
        items: [
          '**Usuarios de Android que quieran una app gratuita con funciones de documentos y visión integradas.** Según la ficha, el chat con PDF/Office y la compatibilidad con modelos de visión van más allá del chat de texto simple.',
          '**Lectores que no dan mucho peso a la transparencia del código fuente.** Si verificar el código usted mismo no es una prioridad, el estado de código cerrado quizá no importe para su caso de uso.',
          '**Lectores que ya están comparando varias apps de IA local para Android.** Es un dato de referencia gratuito útil junto a opciones de código abierto como ToolNeuron y RikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar LocalAI',
        items: [
          '**Usuarios de iPhone, escritorio o web.** La app es exclusiva de Android, distribuida solo a través de Google Play.',
          '**Lectores que quieran auditar el código fuente de la app ellos mismos.** Esta reseña no encontró ningún repositorio público; una alternativa de código abierto como [ToolNeuron](/es/power-local-llm/toolneuron-review) permite una revisión de código independiente.',
          '**Lectores que necesiten una política de privacidad detallada y revisable de forma independiente antes de instalarla.** Esta reseña no pudo localizar ninguna más allá de la propia sección de seguridad de datos de Play Store.',
          '**Lectores que dan mucho peso a las valoraciones de la tienda de apps.** Con 3,0 sobre 5 y 181 reseñas en el momento de la investigación para esta reseña, puntúa más bajo que varias de las alternativas comparadas aquí.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratuita LocalAI (ApexCreator)?',
            a: 'La app base es gratuita para descargar y usar. Según la ficha, existe un nivel premium de pago opcional, pero esta reseña no pudo confirmar su precio exacto — consulte la ficha actual en Google Play.',
          },
          {
            q: '¿Quién hace LocalAI: Offline AI Chat LLM?',
            a: 'Un desarrollador o estudio pequeño que opera como ApexCreator, contactable en [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Esta reseña no encontró ninguna web pública del desarrollador ni organización en GitHub más allá de ese contacto.',
          },
          {
            q: '¿Qué puede hacer LocalAI más allá del chat?',
            a: 'Según su ficha en Google Play: chat con documentos (RAG) en PDF, Word, Excel y CSV; compatibilidad con modelos con capacidades de visión; gramática GBNF y salida estructurada por esquema JSON; y telemetría de rendimiento en tiempo real. Son las funciones declaradas por la propia app, no puntos de referencia comprobados de forma independiente por esta reseña.',
          },
          {
            q: '¿Es LocalAI de código abierto?',
            a: 'No. Esta reseña buscó un repositorio de código público y no encontró ninguno — la app parece ser de código cerrado.',
          },
          {
            q: '¿Funciona LocalAI sin conexión?',
            a: 'Según su ficha, sí, una vez descargado un modelo. Se necesita conexión a internet para descargar modelos y actualizaciones de la app.',
          },
          {
            q: '¿Cómo se compara LocalAI con ToolNeuron?',
            a: '[ToolNeuron](/es/power-local-llm/toolneuron-review) es gratuita y de código abierto, con un repositorio público en GitHub que documenta su arquitectura de seguridad. LocalAI (ApexCreator) ofrece, según su ficha, un conjunto de funciones de amplitud similar — incluidos RAG de documentos y compatibilidad con modelos de visión — pero es de código cerrado, y esta reseña no encontró ningún repositorio público para ella. Elija según cuánto le importe disponer de código fuente verificable de forma independiente.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'LocalAI: Offline AI Chat LLM, según su ficha en Google Play, reúne un conjunto de funciones realmente amplio en una app gratuita para Android: chat en el dispositivo mediante llama.cpp, RAG de documentos sobre formatos de archivo de ofimática habituales, compatibilidad con modelos con capacidades de visión y salida estructurada — funciones que van mucho más allá de un cliente de chat sencillo.',
          'Lo que mantiene cautelosa a esta reseña es que cada una de esas afirmaciones descansa únicamente en la propia ficha del desarrollador en la tienda: esta reseña no encontró código fuente público, ninguna web propia del desarrollador ni una política de privacidad detallada con la que comprobarlas. Esa es una brecha real frente a una alternativa de código abierto como ToolNeuron, cuyas afirmaciones equivalentes pueden verificarse en código publicado.',
          'Los lectores que quieran probar una app de IA para Android gratuita y rica en funciones, y que no den mucho peso a la transparencia del código fuente, pueden probarla razonablemente; los lectores que quieran verificar de forma independiente qué hace realmente una app con los datos locales deberían empezar en su lugar por [ToolNeuron](/es/power-local-llm/toolneuron-review) o [RikkaHub](/es/power-local-llm/rikkahub-review), que publican ambas su código fuente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LocalAI: Offline AI Chat LLM en Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — precios, funciones y valoración, comprobado el 12-09-2026.',
          'Resultados generales de búsqueda web que describen las funciones de RAG de documentos, visión y salida estructurada de la app, comprobados el 12-09-2026 — no se localizó ninguna web propia del desarrollador ni repositorio de código fuente para verificar cruzadamente estas afirmaciones.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de ToolNeuron](/es/power-local-llm/toolneuron-review) — una alternativa para Android igualmente amplia, gratuita y de código abierto, con un repositorio público en GitHub.',
          '[Reseña de Layla](/es/power-local-llm/layla-review) — una app de acompañamiento en el dispositivo de pago y multiplataforma con un modo en la nube opcional.',
          '[Reseña de RikkaHub](/es/power-local-llm/rikkahub-review) — otra app de chat de IA local para Android gratuita y de código abierto.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una app de IA local gratuita y de código abierto con soporte para iOS y parcial para Android.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en distintas plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-pt.webp',
    title: 'LocalAI em Análise (2026): App de Chat com IA Offline da ApexCreator para Android',
    seoTitle: 'LocalAI (ApexCreator) em Análise 2026: Chat com IA Offline no Android',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp), da desenvolvedora [ApexCreator](mailto:info@apexcreators.co.in), é um aplicativo Android gratuito que executa modelos de linguagem GGUF no próprio dispositivo via llama.cpp, com um nível premium pago opcional. Segundo sua página na Google Play, o app adiciona chat com documentos em arquivos PDF, Word, Excel e CSV usando recuperação vetorial no dispositivo, suporte a modelos com capacidade de visão, saída estruturada em JSON/restrita por gramática e telemetria de desempenho em tempo real. Diferente do [ToolNeuron](/pt/power-local-llm/toolneuron-review), este app é de código fechado — nenhum repositório de código público foi encontrado para esta análise. Cada afirmação abaixo tem como fonte a página pública da Play Store, não testes independentes nem uma entrevista com a desenvolvedora.',
    metaDescription:
      'LocalAI (ApexCreator) em análise 2026: app Android gratuito para chat com IA offline, RAG de PDF/documentos e modelos de visão via llama.cpp, com nível premium opcional. Código fechado — o que a página afirma e o que esta análise não conseguiu verificar.',
    twitterDescription:
      'LocalAI (ApexCreator) em análise: um app Android gratuito que executa modelos GGUF no dispositivo via llama.cpp, com RAG de documentos, suporte a modelos de visão e saída estruturada — segundo sua página na Play Store. Código fechado, nenhum repositório público encontrado.',
    audience:
      'Usuários de Android que consideram um app gratuito de chat com IA no dispositivo com recursos de documentos e visão, e que querem uma leitura clara sobre o que está confirmado versus o que apenas a própria página do app na loja afirma.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM é um app Android gratuito da desenvolvedora ApexCreator que executa modelos de linguagem GGUF no próprio dispositivo via llama.cpp, com um nível premium pago opcional.** Segundo sua página na Google Play, o app adiciona chat com documentos em arquivos PDF, Word, Excel e CSV usando recuperação vetorial no dispositivo (sqlite-vec), suporte a modelos com capacidade de visão e saída estruturada em JSON/restrita por gramática. O app é de código fechado, e esta análise não encontrou nenhum repositório de código público para ele — cada afirmação técnica aqui tem como fonte a página pública da Play Store, não uma auditoria independente. Leitores que queiram uma alternativa de código aberto com repositório público devem ler a [análise do ToolNeuron](/pt/power-local-llm/toolneuron-review) em vez disso.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'Vale a pena instalar o LocalAI (ApexCreator)?',
        answer:
          'Depende de quanto você valoriza a transparência do código-fonte. O app é gratuito, executa modelos no dispositivo via llama.cpp e, segundo sua página, adiciona chat com documentos, suporte a modelos de visão e saída estruturada — um conjunto amplo de recursos para um app gratuito. No entanto, é de código fechado, sem repositório público encontrado por esta análise, então suas afirmações sobre privacidade e tratamento de dados dependem inteiramente da própria página, e não de um código auditável de forma independente. Se você quer o mesmo tipo de conjunto de recursos com código publicado, experimente primeiro o ToolNeuron.',
        bullets: [
          'Gratuito para baixar e usar, com um nível premium pago opcional — o preço exato do premium não foi confirmado para esta análise; verifique a página atual.',
          'Executa modelos de linguagem GGUF no dispositivo via llama.cpp, segundo a página na Google Play.',
          'Adiciona chat com documentos (RAG) em arquivos PDF, Word, Excel e CSV usando recuperação vetorial no dispositivo, e suporte a modelos com capacidade de visão, segundo a página.',
          'Código fechado: esta análise não encontrou nenhum repositório público no GitHub para o app, diferente do ToolNeuron.',
          'A avaliação na Google Play era de 3,0 de 5 em 181 avaliações no momento da pesquisa para esta análise (setembro de 2026) — trate isso como um retrato da página, não como um endosso.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta Rápida', anchor: 'quick-answer' },
      { label: 'Obter o LocalAI', anchor: 'get-it' },
      { label: 'O Que é o LocalAI', anchor: 'what-is-localai' },
      { label: 'Como Começar', anchor: 'how-to-get-started' },
      { label: 'Recursos: Chat com Documentos, Visão e Saída Estruturada', anchor: 'features' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Privacidade e Status de Código Aberto', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefícios vs. Limitações', anchor: 'tradeoffs' },
      { label: 'LocalAI vs. Alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem Deve Usar o LocalAI', anchor: 'who-should-use' },
      { label: 'Quem Não Deve Usar o LocalAI', anchor: 'who-should-not-use' },
      { label: 'Perguntas Frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura Relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM é um app Android gratuito e de código fechado da ApexCreator, que executa modelos GGUF no dispositivo via llama.cpp, adicionando RAG de documentos, suporte a modelos de visão e saída estruturada segundo sua página na Google Play, sem código-fonte público disponível para revisão independente.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um app de chat Android gratuito que também consegue ler seus PDFs e olhar suas fotos, tudo funcionando no seu celular — mas, como a desenvolvedora não publicou o código, você precisa confiar principalmente nas afirmações de privacidade e recursos da página, em vez de verificá-las você mesmo.',
          },
        ],
        items: [
          'Preço: gratuito para [baixar](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) e usar, com um nível premium pago opcional; o preço exato do premium não foi confirmado para esta análise.',
          'Desenvolvedora: ApexCreator (contato: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) para modelos GGUF, executando no dispositivo, segundo a página na Google Play.',
          'Recursos além do chat: RAG de documentos em arquivos PDF, Word, Excel e CSV via recuperação vetorial no dispositivo; suporte a modelos com capacidade de visão; saída estruturada com gramática GBNF e esquema JSON; telemetria de desempenho em tempo real, segundo a página.',
          'Status de código aberto: código fechado — esta análise não encontrou nenhum repositório de código público para o app.',
          'Avaliação na Google Play: 3,0 de 5 em 181 avaliações no momento da pesquisa para esta análise (setembro de 2026).',
          'Distribuição: disponível apenas na [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página pública do app na Google Play e em resultados gerais de busca na web sobre ele, verificados em setembro de 2026. A PromptQuorum não realizou testes práticos independentes, revisão de política de privacidade ou auditoria de código deste app — como o app é de código fechado, não foi possível realizar uma auditoria de código.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Obter o LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM está disponível apenas na Google Play.**',
          'Esta análise complementa o [Diretório de Software de LLM Local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que indexa ferramentas de IA local em diversas plataformas, incluindo a própria entrada deste app.',
        ],
        columns: ['Canal', 'Onde Obter'],
        rows: [
          {
            'Canal': 'Google Play',
            'Onde Obter': '[LocalAI: Offline AI Chat LLM na Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'O app em si é gratuito para baixar; um nível premium dentro do app está disponível, segundo a página, mas esta análise não conseguiu confirmar seu preço exato — verifique a página atual antes de comprar.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'O Que é o LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM é, segundo sua página na Google Play, um app Android que executa modelos de linguagem no formato GGUF no dispositivo através do llama.cpp.** Além do chat simples, a página descreve recuperação de documentos (RAG) em formatos comuns de arquivos de escritório e suporte a modelos com capacidade de visão, posicionando-o como um conjunto de ferramentas de IA no dispositivo mais amplo, e não um chatbot de propósito único.',
          'O app é feito por uma desenvolvedora ou pequeno estúdio operando como ApexCreator, acessível em [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Esta análise se baseia na página pública do app na Play Store e em resultados gerais de busca na web sobre ele — nenhum repositório de código-fonte público, site próprio da desenvolvedora ou documento de política de privacidade pôde ser localizado para revisão independente, o que é uma diferença significativa em relação a alternativas de código aberto como o [ToolNeuron](/pt/power-local-llm/toolneuron-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como Começar',
        content: [
          '**Configurar o LocalAI leva poucas etapas.** O processo completo, desde a instalação até a primeira resposta offline, leva alguns minutos mais o tempo que o modelo escolhido leva para ser baixado.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Obtenha o [LocalAI: Offline AI Chat LLM na Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). O app em si é gratuito para instalar.',
          },
          {
            title: 'Baixe um modelo GGUF',
            whyItMatters: 'Esta etapa requer conexão com a internet. O tamanho do download depende do modelo escolhido; o chat depois disso não precisa de conexão de rede, segundo a página.',
          },
          {
            title: 'Converse ou adicione um documento para RAG',
            whyItMatters: 'Anexe um arquivo compatível (PDF, Word, Excel ou CSV) para que o modelo responda perguntas sobre ele, usando recuperação de documentos no dispositivo segundo a página.',
          },
          {
            title: 'Opcional: use um modelo com capacidade de visão',
            whyItMatters: 'Carregue um modelo com capacidade de visão para analisar fotos ou imagens, segundo a página — isso é opcional e separado do chat de texto simples.',
          },
          {
            title: 'Opcional: faça upgrade para o nível premium',
            whyItMatters: 'Um nível premium pago está disponível dentro do app; esta análise não conseguiu confirmar seu preço exato ou alcance além dos recursos gratuitos básicos — verifique a página atual.',
          },
        ],
        note: 'A compatibilidade exata de modelos, os tamanhos de download e o conteúdo do nível premium não foram confirmados de forma independente para esta análise — verifique a própria página do app antes de se comprometer com um download grande ou uma compra.',
      },
      features: {
        id: 'features',
        title: 'Recursos: Chat com Documentos, Visão e Saída Estruturada',
        content: [
          '**Segundo sua página na Google Play, o LocalAI executa modelos GGUF através do [llama.cpp](https://github.com/ggml-org/llama.cpp) e adiciona diversos recursos além do chat simples.** O chat com documentos (RAG) abrange arquivos PDF, Word, Excel e CSV, analisados e divididos em blocos localmente com recuperação vetorial no dispositivo; a página descreve isso como funcionando totalmente offline, sem o conteúdo de documentos ser enviado a um servidor.',
          'A página também descreve suporte a modelos com capacidade de visão — citando SmolVLM, LLaVA e Qwen-VL como exemplos — para analisar fotos ou imagens no dispositivo, junto com suporte a gramática GBNF e esquema JSON para restringir a saída do modelo a um formato estruturado, e telemetria de desempenho em tempo real (tokens por segundo e métricas similares) exibida durante o chat.',
          'Esta análise não verificou esses recursos de forma independente em testes práticos; eles são apresentados aqui como as capacidades declaradas pelo próprio app, não como benchmarks confirmados.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O LocalAI é gratuito para baixar e usar, com um nível premium pago opcional, segundo sua página na Google Play.** Esta análise não conseguiu confirmar o preço exato do nível premium ou o que ele desbloqueia além dos recursos gratuitos básicos — os preços dentro do app na Play Store também podem variar por região.',
        ],
        note: 'Confirme o preço premium atual e seu conteúdo exato na [página da Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) antes de comprar.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e Status de Código Aberto',
        content: [
          '**O LocalAI é de código fechado: esta análise não encontrou nenhum repositório de código público para o app.** Sua página descreve os recursos de chat, RAG de documentos e visão como funcionando no dispositivo, mas, como o código não é publicado, essas afirmações não podem ser verificadas de forma independente em relação ao comportamento real do app da mesma forma que um app de código aberto permite.',
          'Essa é uma diferença significativa em relação a um app como o [ToolNeuron](/pt/power-local-llm/toolneuron-review), cuja base de código completa e arquitetura de segurança são publicadas e auditáveis. Leitores que valorizam bastante a verificabilidade independente devem considerar isso antes de instalar.',
        ],
        items: [
          '**Código fechado.** Nenhum repositório público no GitHub ou equivalente foi encontrado para este app; as afirmações sobre recursos e privacidade dependem apenas da página na Play Store.',
          '**Nenhuma política de privacidade localizada.** Esta análise não conseguiu encontrar um documento de política de privacidade dedicado e detalhado para o app além da seção de segurança de dados da Play Store.',
          '**Processamento no dispositivo declarado.** A página afirma que o chat e o RAG de documentos funcionam no dispositivo, mas isso é uma afirmação do fornecedor, não um fato auditado de forma independente.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefícios vs. Limitações',
        columns: ['Benefício', 'O que isso significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'App básico gratuito com amplo conjunto de recursos',
            'O que isso significa na prática': 'Chat, RAG de documentos e suporte a modelos de visão não custam nada para experimentar.',
            'Limitação / ressalva': 'Esta análise não verificou de forma independente o desempenho real de cada recurso.',
          },
          {
            'Benefício': 'Recursos de documentos e visão além do chat simples',
            'O que isso significa na prática': 'Menos apps separados necessários para chat com PDF/Office ou análise de imagens.',
            'Limitação / ressalva': 'A profundidade e confiabilidade dos recursos dependem da descrição da própria página, não de testes independentes.',
          },
          {
            'Benefício': 'Saída estruturada (GBNF/esquema JSON)',
            'O que isso significa na prática': 'Útil para leitores que querem a saída do modelo em um formato previsível.',
            'Limitação / ressalva': 'A disponibilidade e qualidade em diferentes modelos carregados não foram verificadas de forma independente.',
          },
          {
            'Benefício': 'Nível premium opcional, sem paywall obrigatório',
            'O que isso significa na prática': 'Os recursos principais podem ser usados gratuitamente antes de decidir pagar.',
            'Limitação / ressalva': 'O preço e o conteúdo exatos do premium não foram confirmados para esta análise.',
          },
        ],
        note: 'Código fechado, sem repositório público encontrado: diferente do ToolNeuron, nenhuma das afirmações acima pode ser verificada em relação a código publicado.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI vs. Alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Código aberto', 'Principal diferença'],
        rows: [
          {
            'App': 'LocalAI (ApexCreator)',
            'Plataformas': 'Apenas Android',
            'Preço': 'Gratuito, com nível premium opcional',
            'Código aberto': 'Não — código fechado, nenhum repositório público encontrado',
            'Principal diferença': 'RAG de documentos e suporte a modelos de visão, segundo a página, mas não verificável de forma independente',
          },
          {
            'App': '[ToolNeuron](/pt/power-local-llm/toolneuron-review)',
            'Plataformas': 'Apenas Android',
            'Preço': 'Gratuito, código aberto (MIT)',
            'Código aberto': 'Sim — repositório público no GitHub',
            'Principal diferença': 'Amplitude de recursos semelhante (RAG, voz, plugins), código-fonte totalmente auditável',
          },
          {
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android e iOS',
            'Preço': 'US$ 19,99 de compra única, mais níveis dentro do app',
            'Código aberto': 'Não — código fechado',
            'Principal diferença': 'Foco em personas e roleplay, com modo em nuvem opcional (opt-in)',
          },
          {
            'App': '[RikkaHub](/pt/power-local-llm/rikkahub-review)',
            'Plataformas': 'Apenas Android',
            'Preço': 'Gratuito, código aberto',
            'Código aberto': 'Sim',
            'Principal diferença': 'Outra opção Android gratuita e de código aberto para comparação direta',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as especificações atuais na página de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem Deve Usar o LocalAI',
        items: [
          '**Usuários de Android que querem um app gratuito com recursos de documentos e visão incluídos.** O chat com PDF/Office e o suporte a modelos de visão vão além do chat de texto simples, segundo a página.',
          '**Leitores que não valorizam muito a transparência do código-fonte.** Se verificar o código pessoalmente não é uma prioridade, o status de código fechado pode não importar para seu caso de uso.',
          '**Leitores que já estão comparando vários apps de IA local para Android.** É um ponto de comparação gratuito e útil ao lado de opções de código aberto como ToolNeuron e RikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem Não Deve Usar o LocalAI',
        items: [
          '**Usuários de iPhone, desktop ou web.** O app é exclusivo para Android, distribuído apenas pela Google Play.',
          '**Leitores que querem auditar o código-fonte do app pessoalmente.** Esta análise não encontrou nenhum repositório público; uma alternativa de código aberto como o [ToolNeuron](/pt/power-local-llm/toolneuron-review) permite revisão independente de código.',
          '**Leitores que precisam de uma política de privacidade detalhada e verificável de forma independente antes de instalar.** Esta análise não conseguiu localizar uma além da própria seção de segurança de dados da Play Store.',
          '**Leitores que valorizam muito as avaliações da loja de apps.** Com 3,0 de 5 em 181 avaliações no momento da pesquisa para esta análise, ele fica abaixo de várias alternativas comparadas aqui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O LocalAI (ApexCreator) é gratuito?',
            a: 'O app básico é gratuito para baixar e usar. Existe um nível premium pago opcional, segundo a página, mas esta análise não conseguiu confirmar seu preço exato — verifique a página atual na Google Play.',
          },
          {
            q: 'Quem desenvolve o LocalAI: Offline AI Chat LLM?',
            a: 'Uma desenvolvedora ou pequeno estúdio operando como ApexCreator, acessível em [info@apexcreators.co.in](mailto:info@apexcreators.co.in). Esta análise não encontrou nenhum site próprio da desenvolvedora ou organização no GitHub além desse contato.',
          },
          {
            q: 'O que o LocalAI pode fazer além do chat?',
            a: 'Segundo sua página na Google Play: chat com documentos (RAG) em arquivos PDF, Word, Excel e CSV; suporte a modelos com capacidade de visão; saída estruturada com gramática GBNF e esquema JSON; e telemetria de desempenho em tempo real. Esses são os recursos declarados pelo próprio app, não avaliados de forma independente por esta análise.',
          },
          {
            q: 'O LocalAI é de código aberto?',
            a: 'Não. Esta análise buscou um repositório de código público e não encontrou nenhum — o app parece ser de código fechado.',
          },
          {
            q: 'O LocalAI funciona offline?',
            a: 'Segundo a página, sim, depois que um modelo é baixado. É necessária conexão com a internet para baixar modelos e atualizações do app.',
          },
          {
            q: 'Como o LocalAI se compara ao ToolNeuron?',
            a: 'O [ToolNeuron](/pt/power-local-llm/toolneuron-review) é gratuito e de código aberto, com um repositório público no GitHub que documenta sua arquitetura de segurança. O LocalAI (ApexCreator) oferece um conjunto de recursos igualmente amplo — incluindo RAG de documentos e suporte a modelos de visão, segundo a página — mas é de código fechado, sem repositório público encontrado por esta análise. Escolha com base em quanto importa para você ter código-fonte auditável de forma independente.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O LocalAI: Offline AI Chat LLM, segundo sua página na Google Play, reúne um conjunto de recursos genuinamente amplo em um app Android gratuito: chat no dispositivo via llama.cpp, RAG de documentos em formatos comuns de arquivos de escritório, suporte a modelos com capacidade de visão e saída estruturada — recursos que vão bem além de um cliente de chat simples.',
          'O que mantém esta análise cautelosa é que cada uma dessas afirmações depende da própria página da desenvolvedora na loja: esta análise não encontrou código-fonte público, nenhum site próprio da desenvolvedora e nenhuma política de privacidade detalhada para verificá-las. Isso é uma lacuna real em comparação com uma alternativa de código aberto como o ToolNeuron, cujas afirmações equivalentes podem ser verificadas no código publicado.',
          'Leitores que querem experimentar um app de IA para Android gratuito e rico em recursos, e que não valorizam muito a transparência do código-fonte, podem experimentá-lo com razoável tranquilidade; leitores que querem verificar de forma independente o que um app realmente faz com dados locais devem começar com o [ToolNeuron](/pt/power-local-llm/toolneuron-review) ou o [RikkaHub](/pt/power-local-llm/rikkahub-review), ambos com código-fonte publicado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LocalAI: Offline AI Chat LLM na Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — preços, recursos e avaliação, verificados em 12/09/2026.',
          'Resultados gerais de busca na web descrevendo os recursos de RAG de documentos, visão e saída estruturada do app, verificados em 12/09/2026 — nenhum site próprio da desenvolvedora ou repositório de código-fonte foi localizado para confrontar essas afirmações.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Análise do ToolNeuron](/pt/power-local-llm/toolneuron-review) — uma alternativa Android igualmente ampla, gratuita e de código aberto, com repositório público no GitHub.',
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um app pago e multiplataforma de companhia no dispositivo, com modo em nuvem opcional.',
          '[Análise do RikkaHub](/pt/power-local-llm/rikkahub-review) — outro app de chat com IA local gratuito e de código aberto para Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um app de IA local gratuito e de código aberto com suporte a iOS e parcial ao Android.',
          '[O Diretório Completo de Software de LLM Local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em diversas plataformas.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-ja.webp',
    title: 'LocalAIレビュー(2026年):ApexCreatorのオフラインAndroid AIチャットアプリ',
    seoTitle: 'LocalAI(ApexCreator)レビュー2026:オフラインAndroid AIチャット',
    intro:
      '開発者[ApexCreator](mailto:info@apexcreators.co.in)による[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)は、llama.cppを介してGGUF言語モデルをデバイス上で実行する無料のAndroidアプリで、有料プレミアム層はオプションで用意されている。Google Playの掲載情報によると、デバイス上のベクトル検索を使ったPDF・Word・Excel・CSVファイルへのドキュメントチャット、ビジョン対応モデルのサポート、構造化されたJSON/文法制約付き出力、リアルタイムのパフォーマンステレメトリーが追加されているとされる。[ToolNeuron](/ja/power-local-llm/toolneuron-review)とは異なり、このアプリはクローズドソースであり、本レビューでは公開されているコードリポジトリは見つからなかった――以下の内容はすべてPlayストアの公開掲載情報から得たものであり、独自テストや開発者インタビューによるものではない。',
    metaDescription:
      'LocalAI(ApexCreator)レビュー2026:llama.cppによるオフラインAIチャット、PDF/ドキュメントRAG、ビジョンモデルに対応した無料のAndroidアプリで、有料プレミアム層もオプションで用意されている。クローズドソース――掲載情報が主張する内容と、本レビューで確認できなかった内容を検証する。',
    twitterDescription:
      'LocalAI(ApexCreator)レビュー:llama.cppを介してGGUFモデルをデバイス上で実行する無料のAndroidアプリで、ドキュメントRAG、ビジョンモデル対応、構造化出力を備える――Playストアの掲載情報による。クローズドソースで、公開リポジトリは見つからなかった。',
    audience:
      'ドキュメントおよびビジョン機能を備えた無料のオンデバイスAIチャットアプリを検討しているAndroidユーザーで、何が確認済みで何がアプリ自身のストア掲載情報のみによる主張なのかを冷静に把握したい人。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLMは、開発者ApexCreatorによる無料のAndroidアプリで、llama.cppを介してGGUF言語モデルをデバイス上で実行し、有料プレミアム層もオプションで用意されている。** Google Playの掲載情報によると、デバイス上のベクトル検索(sqlite-vec)を使ったPDF・Word・Excel・CSVファイルへのドキュメントチャット、ビジョン対応モデルのサポート、構造化されたJSON/文法制約付き出力が追加されているとされる。このアプリはクローズドソースであり、本レビューでは公開されているコードリポジトリは見つからなかった――ここに記載する技術的な主張はすべてPlayストアの公開掲載情報から得たものであり、独自の調査によるものではない。公開リポジトリを持つオープンソースの代替を求める読者は、代わりに[ToolNeuronレビュー](/ja/power-local-llm/toolneuron-review)を読むべきだろう。',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'LocalAI(ApexCreator)はインストールする価値があるか?',
        answer:
          'ソースコードの透明性をどれだけ重視するかによる。このアプリは無料で、llama.cppを介してモデルをデバイス上で実行し、掲載情報によればドキュメントチャット、ビジョンモデル対応、構造化出力を追加している――無料アプリとしては広範な機能セットだ。しかしクローズドソースであり、本レビューでは公開リポジトリを見つけられなかったため、プライバシーとデータ処理に関する主張は掲載情報そのものに完全に依存しており、独立して検証可能なコードによるものではない。同種の機能セットで公開されたソースコードを求めるなら、まずToolNeuronを試すべきだろう。',
        bullets: [
          'ダウンロードと利用は無料で、有料プレミアム層はオプションで用意されている――正確なプレミアム価格は本レビューでは確認できなかったため、最新の掲載情報を確認すること。',
          'Google Playの掲載情報によると、llama.cppを介してGGUF言語モデルをデバイス上で実行する。',
          '掲載情報によると、デバイス上のベクトル検索を使ったPDF・Word・Excel・CSVファイルへのドキュメントチャット(RAG)と、ビジョン対応モデルのサポートを追加している。',
          'クローズドソース:本レビューではToolNeuronとは異なり、このアプリの公開GitHubリポジトリは見つからなかった。',
          '本レビューの調査時点(2026年9月)で、Google Playの評価は181件の評価に基づき5点満点中3.0だった――これは掲載情報のスナップショットであり、推奨を意味するものではない。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LocalAIを入手する', anchor: 'get-it' },
      { label: 'LocalAIとは何か', anchor: 'what-is-localai' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能:ドキュメントチャット、ビジョン、構造化出力', anchor: 'features' },
      { label: '価格', anchor: 'pricing' },
      { label: 'プライバシーとオープンソースの状況', anchor: 'privacy' },
      { label: 'トレードオフ:利点と限界', anchor: 'tradeoffs' },
      { label: 'LocalAIと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'LocalAIを使うべき人', anchor: 'who-should-use' },
      { label: 'LocalAIを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLMは、ApexCreatorによる無料のクローズドソースAndroidアプリで、llama.cppを介してGGUFモデルをデバイス上で実行し、Google Playの掲載情報によればドキュメントRAG、ビジョンモデル対応、構造化出力を追加しているが、独立した検証のための公開ソースコードは存在しない。',
          },
          {
            type: 'plain-terms',
            text: 'PDFを読んだり写真を見たりもできる無料のAndroidチャットアプリを思い浮かべてほしい。すべてスマートフォン上で動作するが、開発者がコードを公開していないため、掲載情報のプライバシーや機能に関する主張は自分で検証するのではなく、おおむね信頼するしかない。',
          },
        ],
        items: [
          '価格:[ダウンロード](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)と利用は無料で、有料プレミアム層はオプション。正確なプレミアム価格は本レビューでは確認できなかった。',
          '開発者:ApexCreator(連絡先:[info@apexcreators.co.in](mailto:info@apexcreators.co.in))。',
          'エンジン:GGUFモデル用の[llama.cpp](https://github.com/ggml-org/llama.cpp)を、Google Playの掲載情報によればデバイス上で実行する。',
          'チャット以外の機能:デバイス上のベクトル検索によるPDF・Word・Excel・CSVファイルへのドキュメントRAG、ビジョン対応モデルのサポート、GBNF文法とJSONスキーマによる構造化出力、リアルタイムのパフォーマンステレメトリー(掲載情報による)。',
          'オープンソースの状況:クローズドソース――本レビューではこのアプリの公開コードリポジトリは見つからなかった。',
          'Google Playの評価:本レビューの調査時点(2026年9月)で181件の評価に基づき5点満点中3.0。',
          '配布:[Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)のみで提供されている。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年9月に確認したアプリの公開Google Play掲載情報と、それに関する一般的なウェブ検索結果に基づいている。PromptQuorumはこのアプリについて独自の実機テスト、プライバシーポリシーの検証、コード審査を行っていない――このアプリがクローズドソースであるため、コード審査は不可能だった。',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'LocalAIを入手する',
        content: [
          '**LocalAI: Offline AI Chat LLMはGoogle Playからのみ入手できる。**',
          '本レビューは、プラットフォーム横断でローカルAIツールを索引化しているPromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)の補足記事であり、そこにはこのアプリ自体の項目も含まれている。',
        ],
        columns: ['チャネル', '入手方法'],
        rows: [
          {
            'チャネル': 'Google Play',
            '入手方法': '[LocalAI: Offline AI Chat LLM(Google Play)](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'アプリ自体のダウンロードは無料。掲載情報によればアプリ内プレミアム層が用意されているが、本レビューではその正確な価格を確認できなかった――購入前に最新の掲載情報を確認すること。',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'LocalAIとは何か',
        content: [
          '**LocalAI: Offline AI Chat LLMは、Google Playの掲載情報によれば、llama.cppを介してGGUF形式の言語モデルをデバイス上で実行するAndroidアプリである。** 単純なチャットに加え、掲載情報では一般的なオフィスファイル形式に対するドキュメント検索(RAG)とビジョン対応モデルのサポートが説明されており、単一目的のチャットボットというより、より広範なオンデバイスAIツールキットとして位置づけられている。',
          'このアプリはApexCreatorとして活動する開発者または小規模スタジオによって作られており、連絡先は[info@apexcreators.co.in](mailto:info@apexcreators.co.in)である。本レビューはアプリの公開Playストア掲載情報とそれに関する一般的なウェブ検索結果に依拠している――独立した検証のための公開ソースコードリポジトリ、専用の開発者ウェブサイト、プライバシーポリシー文書のいずれも見つけることができず、これは[ToolNeuron](/ja/power-local-llm/toolneuron-review)のようなオープンソースの代替アプリとの重要な違いである。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**LocalAIのセットアップはいくつかの手順で完了する。** インストールから最初のオフライン応答までの全体の流れは数分で終わり、あとは選んだモデルのダウンロードにかかる時間次第だ。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[LocalAI: Offline AI Chat LLM(Google Play)](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)を入手する。アプリ自体のインストールは無料。',
          },
          {
            title: 'GGUFモデルをダウンロードする',
            whyItMatters: 'この手順にはインターネット接続が必要。ダウンロードサイズは選んだモデルによって異なり、掲載情報によればその後のチャットにはネットワーク接続は不要。',
          },
          {
            title: 'チャットする、またはRAG用にドキュメントを追加する',
            whyItMatters: '対応ファイル(PDF、Word、Excel、CSV)を添付すると、掲載情報によればデバイス上のドキュメント検索を使ってモデルがその内容について質問に答える。',
          },
          {
            title: 'オプション:ビジョン対応モデルを使う',
            whyItMatters: '掲載情報によれば、ビジョン対応モデルを読み込んで写真や画像を分析できる――これはオプションであり、通常のテキストチャットとは別。',
          },
          {
            title: 'オプション:プレミアム層にアップグレードする',
            whyItMatters: '有料プレミアム層はアプリ内で利用可能。本レビューでは無料の基本機能を超える正確な価格や範囲を確認できなかった――最新の掲載情報を確認すること。',
          },
        ],
        note: '正確なモデル互換性、ダウンロードサイズ、プレミアム層の内容は本レビューでは独立して確認できなかった――大きなダウンロードや購入を行う前にアプリ自体の掲載情報を確認すること。',
      },
      features: {
        id: 'features',
        title: '機能:ドキュメントチャット、ビジョン、構造化出力',
        content: [
          '**Google Playの掲載情報によれば、LocalAIは[llama.cpp](https://github.com/ggml-org/llama.cpp)を通じてGGUFモデルを実行し、単純なチャットを超えるいくつかの機能を追加している。** ドキュメントチャット(RAG)はPDF・Word・Excel・CSVファイルに対応し、デバイス上のベクトル検索を用いてローカルで解析・分割される。掲載情報では、これは完全にオフラインで動作し、ドキュメントの内容がサーバーに送信されないと説明されている。',
          '掲載情報ではさらに、SmolVLM、LLaVA、Qwen-VLを例として挙げつつビジョン対応モデルのサポートについても説明されており、デバイス上で写真や画像を分析できるとされる。加えて、モデルの出力を構造化フォーマットに制約するGBNF文法とJSONスキーマのサポート、チャット中に表示されるリアルタイムのパフォーマンステレメトリー(1秒当たりのトークン数などの指標)も備えるとされる。',
          '本レビューはこれらの機能を実機テストで独立して検証していない。ここではアプリ自身が主張する機能として記載しているのみで、確認済みのベンチマークではない。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '価格',
        content: [
          '**Google Playの掲載情報によれば、LocalAIのダウンロードと利用は無料で、有料プレミアム層はオプションで用意されている。** 本レビューでは、プレミアム層の正確な価格や、無料の基本機能を超えて何が解放されるのかを確認できなかった――Playストアのアプリ内価格は地域によっても異なる可能性がある。',
        ],
        note: '購入前に[Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)で最新のプレミアム価格とその正確な内容を確認すること。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとオープンソースの状況',
        content: [
          '**LocalAIはクローズドソースであり、本レビューではこのアプリの公開コードリポジトリは見つからなかった。** 掲載情報ではチャット、ドキュメントRAG、ビジョン機能がデバイス上で動作すると説明されているが、コードが公開されていないため、これらの主張はオープンソースアプリの場合のようにアプリの実際の動作と照らして独立して確認することができない。',
          'これは、コードベース全体とセキュリティアーキテクチャが公開され検証可能な[ToolNeuron](/ja/power-local-llm/toolneuron-review)のようなアプリとの重要な違いである。独立した検証可能性を重視する読者は、インストール前にこの点を考慮すべきだろう。',
        ],
        items: [
          '**クローズドソース。** このアプリの公開GitHubリポジトリまたは同等のものは見つからなかった。機能とプライバシーに関する主張はPlayストアの掲載情報のみに基づいている。',
          '**プライバシーポリシーが見つからない。** 本レビューでは、Playストアのデータセーフティ欄を超える、このアプリ専用の詳細なプライバシーポリシー文書を見つけることができなかった。',
          '**オンデバイス処理を主張。** 掲載情報ではチャットとドキュメントRAGがデバイス上で動作すると述べているが、これはベンダーの主張であり、独立して検証された事実ではない。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と限界',
        columns: ['利点', '実際の利用での意味', '限界・注意点'],
        rows: [
          {
            '利点': '広範な機能セットを備えた無料の基本アプリ',
            '実際の利用での意味': 'チャット、ドキュメントRAG、ビジョンモデル対応を無料で試せる。',
            '限界・注意点': '本レビューでは各機能が実際にどれほど機能するかを独立して検証していない。',
          },
          {
            '利点': '単純なチャットを超えるドキュメントとビジョン機能',
            '実際の利用での意味': 'PDF/オフィスチャットや画像分析のために別々のアプリを用意する必要が減る。',
            '限界・注意点': '機能の深さと信頼性は独立したテストではなく掲載情報自体の説明に依拠している。',
          },
          {
            '利点': '構造化出力(GBNF/JSONスキーマ)',
            '実際の利用での意味': 'モデルの出力を予測可能な形式で得たい読者に有用。',
            '限界・注意点': '読み込むモデルごとの利用可能性と品質は独立して確認されていない。',
          },
          {
            '利点': 'オプションのプレミアム層で、厳格な有料化ではない',
            '実際の利用での意味': '支払うかどうか決める前にコア機能を無料で利用できる。',
            '限界・注意点': '正確なプレミアム価格と内容は本レビューでは確認できなかった。',
          },
        ],
        note: 'クローズドソースで公開リポジトリは見つからない:ToolNeuronとは異なり、上記のいずれの主張も公開されたコードと照らして確認することはできない。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAIと代替アプリの比較',
        columns: ['アプリ', 'プラットフォーム', '価格', 'オープンソース', '主な違い'],
        rows: [
          {
            'アプリ': 'LocalAI(ApexCreator)',
            'プラットフォーム': 'Androidのみ',
            '価格': '無料、プレミアム層はオプション',
            'オープンソース': 'いいえ――クローズドソースで公開リポジトリは見つからない',
            '主な違い': '掲載情報によればドキュメントRAGとビジョンモデル対応があるが、独立して検証できない',
          },
          {
            'アプリ': '[ToolNeuron](/ja/power-local-llm/toolneuron-review)',
            'プラットフォーム': 'Androidのみ',
            '価格': '無料、オープンソース(MIT)',
            'オープンソース': 'はい――公開GitHubリポジトリあり',
            '主な違い': '同程度に広範な機能(RAG、音声、プラグイン)、完全に検証可能なソースコード',
          },
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'AndroidとiOS',
            '価格': '19.99ドルの一括購入、加えてアプリ内階層',
            'オープンソース': 'いいえ――クローズドソース',
            '主な違い': 'ペルソナとロールプレイに重点を置き、オプトインのクラウドモードもオプションで用意',
          },
          {
            'アプリ': '[RikkaHub](/ja/power-local-llm/rikkahub-review)',
            'プラットフォーム': 'Androidのみ',
            '価格': '無料、オープンソース',
            'オープンソース': 'はい',
            '主な違い': '直接比較できる、もう一つの無料オープンソースAndroidアプリ',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変わる――判断する前に各アプリ自体の掲載情報で最新の情報を確認すること。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LocalAIを使うべき人',
        items: [
          '**ドキュメントとビジョン機能がまとめて入った無料アプリを求めるAndroidユーザー。** 掲載情報によれば、PDF/オフィスチャットとビジョンモデル対応は単純なテキストチャットを超えている。',
          '**ソースコードの透明性をあまり重視しない読者。** コードを自分で検証することが優先事項でないなら、クローズドソースであることは自分の用途にとって重要でないかもしれない。',
          '**すでに複数のAndroidローカルAIアプリを比較している読者。** ToolNeuronやRikkaHubのようなオープンソースの選択肢と並べて比較する際の、無料で有用な参照点になる。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LocalAIを使うべきでない人',
        items: [
          '**iPhone、デスクトップ、ウェブのユーザー。** このアプリはAndroid専用で、Google Playのみで配布されている。',
          '**アプリのソースコードを自分で検証したい読者。** 本レビューでは公開リポジトリは見つからなかった。[ToolNeuron](/ja/power-local-llm/toolneuron-review)のようなオープンソースの代替アプリなら独立したコード検証が可能。',
          '**インストール前に詳細で独立して検証可能なプライバシーポリシーを必要とする読者。** 本レビューではPlayストア自体のデータセーフティ欄を超えるものは見つからなかった。',
          '**アプリストアの評価を重視する読者。** 本レビューの調査時点で181件の評価に基づき5点満点中3.0であり、ここで比較した他の選択肢より低い評価となっている。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LocalAI(ApexCreator)は無料か?',
            a: '基本アプリのダウンロードと利用は無料。掲載情報によれば有料プレミアム層がオプションで存在するが、本レビューではその正確な価格を確認できなかった――最新のGoogle Play掲載情報を確認すること。',
          },
          {
            q: 'LocalAI: Offline AI Chat LLMは誰が作っているのか?',
            a: 'ApexCreatorとして活動する開発者または小規模スタジオで、連絡先は[info@apexcreators.co.in](mailto:info@apexcreators.co.in)である。本レビューではこの連絡先以外に公開の開発者ウェブサイトやGitHub組織は見つからなかった。',
          },
          {
            q: 'LocalAIはチャット以外に何ができるのか?',
            a: 'Google Playの掲載情報によれば:PDF・Word・Excel・CSVファイルへのドキュメントチャット(RAG)、ビジョン対応モデルのサポート、GBNF文法とJSONスキーマによる構造化出力、リアルタイムのパフォーマンステレメトリー。これらはアプリ自身が主張する機能であり、本レビューが独立してベンチマークしたものではない。',
          },
          {
            q: 'LocalAIはオープンソースか?',
            a: 'いいえ。本レビューでは公開コードリポジトリを検索したが見つからなかった――このアプリはクローズドソースであると見られる。',
          },
          {
            q: 'LocalAIはオフラインで動作するのか?',
            a: '掲載情報によれば、モデルをダウンロードすれば動作する。モデルとアプリの更新のダウンロードにはインターネット接続が必要。',
          },
          {
            q: 'LocalAIはToolNeuronと比べてどうか?',
            a: '[ToolNeuron](/ja/power-local-llm/toolneuron-review)は無料でオープンソースであり、セキュリティアーキテクチャを文書化した公開GitHubリポジトリを持つ。LocalAI(ApexCreator)は掲載情報によれば同程度に広範な機能セット――ドキュメントRAGやビジョンモデル対応を含む――を提供しているが、クローズドソースであり、本レビューでは公開リポジトリを見つけられなかった。独立して検証可能なソースコードを重視するかどうかで選ぶべきだろう。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'LocalAI: Offline AI Chat LLMは、Google Playの掲載情報によれば、無料のAndroidアプリに本当に広範な機能セットを詰め込んでいる:llama.cppによるオンデバイスチャット、一般的なオフィスファイル形式へのドキュメントRAG、ビジョン対応モデルのサポート、構造化出力――これらは単純なチャットクライアントを大きく超える機能だ。',
          '本レビューが慎重であり続ける理由は、これらの主張のすべてが開発者自身のストア掲載情報に依拠している点にある:本レビューは公開ソースコード、専用の開発者ウェブサイト、詳細なプライバシーポリシーのいずれも、それらを照らし合わせて確認できるものを見つけられなかった。これはToolNeuronのようなオープンソースの代替アプリと比べた際の実質的なギャップであり、ToolNeuronの同等の主張は公開されたコードで検証できる。',
          '無料で機能豊富なAndroid AIアプリを試したく、ソースコードの透明性をあまり重視しない読者は、妥当な選択として試してみてよいだろう。アプリがローカルデータを実際にどう扱っているかを独立して検証したい読者は、代わりに、どちらも自身のソースコードを公開している[ToolNeuron](/ja/power-local-llm/toolneuron-review)や[RikkaHub](/ja/power-local-llm/rikkahub-review)から始めるべきだ。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[LocalAI: Offline AI Chat LLM(Google Play)](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) ―― 価格、機能、評価。2026年9月12日確認。',
          'アプリのドキュメントRAG、ビジョン、構造化出力機能を説明する一般的なウェブ検索結果。2026年9月12日確認――これらの主張を照らし合わせるための独立した開発者ウェブサイトやソースコードリポジトリは見つからなかった。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ToolNeuronレビュー](/ja/power-local-llm/toolneuron-review) ―― 公開GitHubリポジトリを持つ、同程度に広範な無料オープンソースのAndroid代替アプリ。',
          '[Laylaレビュー](/ja/power-local-llm/layla-review) ―― オプションのクラウドモードを備えた有料でクロスプラットフォームのオンデバイス伴走アプリ。',
          '[RikkaHubレビュー](/ja/power-local-llm/rikkahub-review) ―― もう一つの無料オープンソースAndroidローカルAIチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) ―― iOSと一部Androidに対応した無料オープンソースのローカルAIアプリ。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) ―― プラットフォーム横断でローカルLLMツールを網羅するより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-zh.webp',
    title: 'LocalAI评测(2026):ApexCreator的Android离线AI聊天应用',
    seoTitle: 'LocalAI(ApexCreator)评测2026:Android离线AI聊天',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)由开发者[ApexCreator](mailto:info@apexcreators.co.in)开发,是一款免费的Android应用,通过llama.cpp在设备本地运行GGUF语言模型,并提供可选的付费高级套餐。根据其Google Play商店页面介绍,该应用还加入了针对PDF、Word、Excel和CSV文件的文档聊天功能(使用设备本地向量检索)、对支持视觉的模型的支持、结构化JSON/语法约束输出,以及实时性能遥测。与[ToolNeuron](/zh/power-local-llm/toolneuron-review)不同,这款应用是闭源的——本次评测未能找到其公开的代码仓库,以下所有说法均来自其公开的Play商店页面介绍,而非独立测试或开发者采访。',
    metaDescription:
      'LocalAI(ApexCreator)评测2026:一款免费Android应用,通过llama.cpp实现离线AI聊天、PDF/文档RAG及视觉模型支持,并提供可选高级套餐。闭源——商店页面的说法与本次评测未能验证的部分。',
    twitterDescription:
      'LocalAI(ApexCreator)评测:一款免费Android应用,通过llama.cpp在设备本地运行GGUF模型,提供文档RAG、视觉模型支持及结构化输出——均依据其Play商店页面介绍。闭源,未找到公开代码仓库。',
    audience:
      '正在考虑使用一款免费、可在设备本地运行、具备文档与视觉功能的AI聊天应用的Android用户,希望清楚了解哪些内容已被确认,哪些仅是该应用自身商店页面的说法。',
    readTime: '8分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM是开发者ApexCreator推出的一款免费Android应用,通过llama.cpp在设备本地运行GGUF语言模型,并提供可选的付费高级套餐。**根据其Google Play商店页面介绍,该应用还加入了针对PDF、Word、Excel和CSV文件的文档聊天功能(使用设备本地向量检索,sqlite-vec)、对支持视觉的模型的支持,以及结构化JSON/语法约束输出。这款应用是闭源的,本次评测未能找到其公开的代码仓库——文中所有技术性说法均来自公开的Play商店页面介绍,而非独立审查。希望使用拥有公开代码仓库的开源替代方案的读者,应改读[ToolNeuron评测](/zh/power-local-llm/toolneuron-review)。',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'LocalAI(ApexCreator)值得安装吗?',
        answer:
          '这取决于你对源代码透明度的重视程度。这款应用免费,通过llama.cpp在设备本地运行模型,并根据其页面介绍加入了文档聊天、视觉模型支持和结构化输出——对一款免费应用来说功能相当全面。然而它是闭源的,本次评测未能找到其公开的代码仓库,因此其隐私与数据处理方面的说法完全依赖于页面介绍本身,而非可独立审查的代码。如果你想要同类功能集且代码已公开的方案,建议先试用ToolNeuron。',
        bullets: [
          '免费下载和使用,提供可选的付费高级套餐——本次评测未能确认高级套餐的具体价格,请查看当前页面。',
          '根据Google Play页面介绍,通过llama.cpp在设备本地运行GGUF语言模型。',
          '根据页面介绍,加入了针对PDF、Word、Excel和CSV文件的文档聊天(RAG)功能(使用设备本地向量检索),以及对支持视觉的模型的支持。',
          '闭源:本次评测未能找到该应用的公开GitHub仓库,这一点与ToolNeuron不同。',
          '在本次评测调研当时(2026年9月),Google Play评分为5分中的3.0分,共181条评分——请将其视为页面当时的快照,而非推荐背书。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取LocalAI', anchor: 'get-it' },
      { label: 'LocalAI是什么', anchor: 'what-is-localai' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能:文档聊天、视觉与结构化输出', anchor: 'features' },
      { label: '价格', anchor: 'pricing' },
      { label: '隐私与开源状态', anchor: 'privacy' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: 'LocalAI与其他方案对比', anchor: 'vs-alternatives' },
      { label: '哪些人适合使用LocalAI', anchor: 'who-should-use' },
      { label: '哪些人不适合使用LocalAI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '参考来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM是ApexCreator推出的一款免费、闭源Android应用,通过llama.cpp在设备本地运行GGUF模型,根据其Google Play页面介绍加入了文档RAG、视觉模型支持和结构化输出,但没有可供独立审查的公开源代码。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想象成一款免费的Android聊天应用,还能读取你的PDF文件、查看你的照片,一切都在你的手机上运行——但由于开发者没有公开代码,你对页面介绍中的隐私和功能说法基本只能信任接受,而无法自行验证。',
          },
        ],
        items: [
          '价格:免费[下载](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)和使用,提供可选的付费高级套餐;本次评测未能确认高级套餐的具体价格。',
          '开发者:ApexCreator(联系方式:[info@apexcreators.co.in](mailto:info@apexcreators.co.in))。',
          '引擎:根据Google Play页面介绍,使用[llama.cpp](https://github.com/ggml-org/llama.cpp)在设备本地运行GGUF模型。',
          '聊天之外的功能:根据页面介绍,通过设备本地向量检索实现针对PDF、Word、Excel和CSV文件的文档RAG;支持视觉模型;GBNF语法与JSON模式的结构化输出;实时性能遥测。',
          '开源状态:闭源——本次评测未能找到该应用的公开代码仓库。',
          'Google Play评分:在本次评测调研当时(2026年9月),为5分中的3.0分,共181条评分。',
          '分发渠道:仅通过[Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)提供。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本次评测基于该应用公开的Google Play页面介绍及关于它的一般网络搜索结果,检索时间为2026年9月。PromptQuorum并未对该应用进行独立的实际操作测试、隐私政策审查或代码审计——由于该应用是闭源的,代码审计也无法进行。',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM仅通过Google Play提供。**',
          '本次评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的配套内容,该目录收录了各平台的本地AI工具,也包括这款应用本身的条目。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Google Play',
            '获取方式': '[LocalAI: Offline AI Chat LLM(Google Play)](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: '应用本身可免费下载;根据页面介绍,应用内提供高级套餐,但本次评测未能确认其具体价格——购买前请查看当前页面。',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'LocalAI是什么',
        content: [
          '**根据其Google Play页面介绍,LocalAI: Offline AI Chat LLM是一款通过llama.cpp在设备本地运行GGUF格式语言模型的Android应用。**除普通聊天外,页面介绍还提到了针对常见办公文件格式的文档检索(RAG)功能,以及对支持视觉的模型的支持,这使其定位更像一个更全面的本地AI工具集,而非单一功能的聊天机器人。',
          '这款应用由一名开发者或以ApexCreator名义运营的小型工作室开发,可通过[info@apexcreators.co.in](mailto:info@apexcreators.co.in)联系。本次评测依据的是该应用公开的Play商店页面介绍及关于它的一般网络搜索结果——未能找到公开的源代码仓库、专门的开发者网站或隐私政策文件供独立审查,这与像[ToolNeuron](/zh/power-local-llm/toolneuron-review)这样的开源替代方案存在明显差异。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置LocalAI只需几个步骤。**从安装到收到第一条离线回复的整个过程只需几分钟,再加上所选模型下载所需的时间。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[Google Play获取LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)。应用本身可免费安装。',
          },
          {
            title: '下载一个GGUF模型',
            whyItMatters: '此步骤需要联网。下载大小取决于所选模型;根据页面介绍,之后的聊天不需要网络连接。',
          },
          {
            title: '聊天,或添加一份文档用于RAG',
            whyItMatters: '附加一份受支持的文件(PDF、Word、Excel或CSV),根据页面介绍,模型会借助设备本地文档检索来回答相关问题。',
          },
          {
            title: '可选:使用支持视觉的模型',
            whyItMatters: '根据页面介绍,加载一个支持视觉的模型以分析照片或图像——这是可选功能,与普通文本聊天分开。',
          },
          {
            title: '可选:升级到高级套餐',
            whyItMatters: '应用内提供付费高级套餐;本次评测未能确认其具体价格,或其在免费基础功能之外的具体范围——请查看当前页面。',
          },
        ],
        note: '本次评测未能独立确认具体的模型兼容性、下载大小以及高级套餐的具体内容——在进行大文件下载或付费购买之前,请先查看该应用自身的页面介绍。',
      },
      features: {
        id: 'features',
        title: '功能:文档聊天、视觉与结构化输出',
        content: [
          '**根据其Google Play页面介绍,LocalAI通过[llama.cpp](https://github.com/ggml-org/llama.cpp)运行GGUF模型,并在普通聊天之外加入了多项功能。**文档聊天(RAG)覆盖PDF、Word、Excel和CSV文件,在本地进行解析和分块,并使用设备本地向量检索;页面介绍称此功能完全离线运行,不会将文档内容发送到服务器。',
          '页面介绍还提到了对支持视觉的模型的支持——列举了SmolVLM、LLaVA和Qwen-VL作为示例——用于在设备本地分析照片或图像,此外还有GBNF语法和JSON模式支持,可将模型输出约束为结构化格式,以及聊天时显示的实时性能遥测(每秒生成的token数等指标)。',
          '本次评测并未通过实际操作对这些功能进行独立验证;以上内容是应用自身所声称的功能,而非经过确认的基准测试结果。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '价格',
        content: [
          '**根据其Google Play页面介绍,LocalAI可免费下载和使用,并提供可选的付费高级套餐。**本次评测未能确认高级套餐的具体价格,或其在免费基础功能之外具体解锁的内容——Play商店的应用内定价也可能因地区而异。',
        ],
        note: '购买前请在[Google Play页面](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)确认当前的高级套餐价格及其具体内容。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与开源状态',
        content: [
          '**LocalAI是闭源的:本次评测未能找到该应用的公开代码仓库。**页面介绍称聊天、文档RAG和视觉功能均在设备本地运行,但由于代码未公开,这些说法无法像开源应用那样,针对应用实际行为进行独立核实。',
          '这与像[ToolNeuron](/zh/power-local-llm/toolneuron-review)这样的应用存在明显差异——后者的整套代码库和安全架构均已公开并可供审查。重视独立可验证性的读者,在安装前应考虑这一点。',
        ],
        items: [
          '**闭源。**未能找到该应用的公开GitHub仓库或类似渠道;功能与隐私方面的说法仅依据Play商店页面介绍。',
          '**未找到隐私政策。**除Play商店自身的数据安全部分外,本次评测未能找到该应用专门、详细的隐私政策文件。',
          '**声称在设备本地处理。**页面介绍称聊天和文档RAG在设备本地运行,但这只是厂商自身的说法,并非经过独立审计确认的事实。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '功能全面的免费基础应用',
            '实际使用中的意义': '聊天、文档RAG和视觉模型支持均可免费试用。',
            '局限/注意事项': '本次评测未能独立验证各项功能实际的表现好坏。',
          },
          {
            '优点': '超出普通聊天的文档与视觉功能',
            '实际使用中的意义': '无需再安装多个单独的应用来处理PDF/Office聊天或图像分析。',
            '局限/注意事项': '功能的深度与可靠性仅依据页面介绍本身的描述,并非独立测试的结果。',
          },
          {
            '优点': '结构化输出(GBNF/JSON模式)',
            '实际使用中的意义': '对希望模型输出格式可预测的读者很有用。',
            '局限/注意事项': '在不同加载模型之间的可用性和质量均未经独立核实。',
          },
          {
            '优点': '可选高级套餐,而非强制付费墙',
            '实际使用中的意义': '核心功能可先免费使用,再决定是否付费。',
            '局限/注意事项': '本次评测未能确认高级套餐的具体价格及内容。',
          },
        ],
        note: '闭源,且未找到公开代码仓库:与ToolNeuron不同,以上任何说法都无法通过公开代码进行核实。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI与其他方案对比',
        columns: ['应用', '支持平台', '价格', '开源', '主要差异'],
        rows: [
          {
            '应用': 'LocalAI(ApexCreator)',
            '支持平台': '仅限Android',
            '价格': '免费,提供可选高级套餐',
            '开源': '否——闭源,未找到公开代码仓库',
            '主要差异': '根据页面介绍支持文档RAG和视觉模型,但无法独立验证',
          },
          {
            '应用': '[ToolNeuron](/zh/power-local-llm/toolneuron-review)',
            '支持平台': '仅限Android',
            '价格': '免费,开源(MIT许可)',
            '开源': '是——公开GitHub仓库',
            '主要差异': '功能范围相近(RAG、语音、插件),源代码完全可供审查',
          },
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '支持平台': 'Android和iOS',
            '价格': '19.99美元一次性购买,外加应用内分级套餐',
            '开源': '否——闭源',
            '主要差异': '专注人设与角色扮演,提供可选的自愿云端模式',
          },
          {
            '应用': '[RikkaHub](/zh/power-local-llm/rikkahub-review)',
            '支持平台': '仅限Android',
            '价格': '免费,开源',
            '开源': '是',
            '主要差异': '另一款免费、开源的Android方案,可作直接对比',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变动——做决定前请在各应用自身页面核实当前的具体信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '哪些人适合使用LocalAI',
        items: [
          '**希望使用一款集成文档与视觉功能的免费应用的Android用户。**根据页面介绍,PDF/Office聊天和视觉模型支持超出了普通文本聊天的范围。',
          '**不太看重源代码透明度的读者。**如果自行验证代码并非优先事项,那么闭源状态可能对你的使用场景影响不大。',
          '**已经在比较多款Android本地AI应用的读者。**作为一个免费选项,它可以与ToolNeuron和RikkaHub等开源方案放在一起对比参考。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '哪些人不适合使用LocalAI',
        items: [
          '**iPhone、桌面端或网页端用户。**这款应用仅支持Android,且只通过Google Play分发。',
          '**希望自行审查应用源代码的读者。**本次评测未能找到公开代码仓库;像[ToolNeuron](/zh/power-local-llm/toolneuron-review)这样的开源方案可供独立代码审查。',
          '**在安装前需要一份详细、可独立审查的隐私政策的读者。**本次评测除Play商店自身的数据安全部分外,未能找到此类文件。',
          '**非常看重应用商店评分的读者。**在本次评测调研当时,该应用评分为5分中的3.0分,共181条评分,低于本文对比的几款其他方案。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LocalAI(ApexCreator)是免费的吗?',
            a: '基础应用可免费下载和使用。根据页面介绍,存在可选的付费高级套餐,但本次评测未能确认其具体价格——请查看当前的Google Play页面。',
          },
          {
            q: 'LocalAI: Offline AI Chat LLM是谁开发的?',
            a: '由一名开发者或以ApexCreator名义运营的小型工作室开发,可通过[info@apexcreators.co.in](mailto:info@apexcreators.co.in)联系。除该联系方式外,本次评测未找到公开的开发者网站或GitHub组织。',
          },
          {
            q: 'LocalAI除聊天外还能做什么?',
            a: '根据其Google Play页面介绍:针对PDF、Word、Excel和CSV文件的文档聊天(RAG);支持视觉模型;GBNF语法与JSON模式的结构化输出;以及实时性能遥测。这些均是应用自身声称的功能,并未经过本次评测的独立基准测试。',
          },
          {
            q: 'LocalAI是开源的吗?',
            a: '不是。本次评测曾寻找公开的代码仓库但未能找到——该应用似乎是闭源的。',
          },
          {
            q: 'LocalAI能离线使用吗?',
            a: '根据页面介绍,一旦模型下载完成即可离线使用。下载模型和应用更新时需要联网。',
          },
          {
            q: 'LocalAI与ToolNeuron相比如何?',
            a: '[ToolNeuron](/zh/power-local-llm/toolneuron-review)是免费开源的,拥有公开的GitHub仓库,记录了其安全架构。LocalAI(ApexCreator)根据其页面介绍提供了同样广泛的功能——包括文档RAG和视觉模型支持——但它是闭源的,本次评测未能找到其公开代码仓库。请根据你是否重视可独立审查的源代码来做选择。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '根据其Google Play页面介绍,LocalAI: Offline AI Chat LLM为一款免费Android应用塞入了相当全面的功能集:通过llama.cpp实现设备本地聊天、针对常见办公文件格式的文档RAG、支持视觉的模型,以及结构化输出——这些功能远远超出了一款普通聊天客户端。',
          '让本次评测保持谨慎的原因是,以上每一项说法都仅依据开发者自身的商店页面介绍:本次评测未能找到公开源代码、专门的开发者网站,也未能找到详细的隐私政策来加以核实。相比像ToolNeuron这样的开源替代方案——其同类说法均可在公开代码中得到验证——这是一个实实在在的差距。',
          '希望尝试一款免费、功能丰富的Android AI应用、且不太看重源代码透明度的读者,可以合理地一试;而希望独立核实一款应用对本地数据究竟做了什么的读者,则应改从[ToolNeuron](/zh/power-local-llm/toolneuron-review)或[RikkaHub](/zh/power-local-llm/rikkahub-review)入手,这两款应用均公开了自己的源代码。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[LocalAI: Offline AI Chat LLM(Google Play)](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)——价格、功能与评分,检索于2026-09-12。',
          '关于该应用文档RAG、视觉及结构化输出功能的一般网络搜索结果,检索于2026-09-12——未能找到独立的开发者网站或源代码仓库来核对这些说法。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[ToolNeuron评测](/zh/power-local-llm/toolneuron-review)——一款功能同样广泛、免费开源的Android替代方案,拥有公开的GitHub仓库。',
          '[Layla评测](/zh/power-local-llm/layla-review)——一款付费、跨平台的设备本地陪伴应用,提供可选的云端模式。',
          '[RikkaHub评测](/zh/power-local-llm/rikkahub-review)——另一款免费、开源的Android本地AI聊天应用。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)——一款免费、开源的本地AI应用,支持iOS及部分Android机型。',
          '[完整的本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)——一个覆盖各平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-ar.webp',
    title: 'مراجعة LocalAI (2026): تطبيق ApexCreator للدردشة مع الذكاء الاصطناعي دون اتصال على أندرويد',
    seoTitle: 'مراجعة LocalAI (ApexCreator) 2026: دردشة ذكاء اصطناعي دون اتصال على أندرويد',
    intro:
      '[LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)، من المطوّر [ApexCreator](mailto:info@apexcreators.co.in)، هو تطبيق مجاني لأندرويد يشغّل نماذج لغوية بصيغة GGUF على الجهاز نفسه عبر llama.cpp، مع فئة مدفوعة اختيارية premium. وحسب صفحته على Google Play، يضيف التطبيق دردشة على المستندات عبر ملفات PDF وWord وExcel وCSV باستخدام استرجاع متجهي على الجهاز، ودعم نماذج ذات قدرة على الرؤية، وإخراج بنية JSON/قواعد مقيدة (grammar)، وقياسات أداء لحظية. وعلى خلاف [ToolNeuron](/ar/power-local-llm/toolneuron-review)، هذا التطبيق مغلق المصدر، ولم يُعثر على مستودع كود عام له لأغراض هذه المراجعة — كل ادعاء أدناه مصدره صفحة Google Play العامة، لا اختبار مستقل أو مقابلة مع المطوّر.',
    metaDescription:
      'مراجعة LocalAI (ApexCreator) 2026: تطبيق أندرويد مجاني للدردشة دون اتصال مع الذكاء الاصطناعي، ودردشة على المستندات (RAG)، ونماذج رؤية عبر llama.cpp، مع فئة premium اختيارية. مغلق المصدر — ما تدّعيه الصفحة وما لم تستطع هذه المراجعة تأكيده.',
    twitterDescription:
      'مراجعة LocalAI (ApexCreator): تطبيق أندرويد مجاني يشغّل نماذج GGUF على الجهاز عبر llama.cpp، مع دردشة على المستندات (RAG)، ودعم نماذج الرؤية، وإخراج بنيوي — وفق صفحته على Play Store. مغلق المصدر، ولم يُعثر على مستودع عام.',
    audience:
      'مستخدمو أندرويد الذين ينظرون في تطبيق دردشة ذكاء اصطناعي مجاني يعمل على الجهاز نفسه مع ميزات المستندات والرؤية، ويريدون قراءة واضحة لما هو مؤكد في مقابل ما تدّعيه صفحة المتجر الخاصة بالتطبيق فقط.',
    readTime: '8 دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM هو تطبيق أندرويد مجاني من المطوّر ApexCreator يشغّل نماذج لغوية بصيغة GGUF على الجهاز عبر llama.cpp، مع فئة مدفوعة اختيارية premium.** وحسب صفحته على Google Play، يضيف دردشة على المستندات عبر ملفات PDF وWord وExcel وCSV باستخدام استرجاع متجهي على الجهاز (sqlite-vec)، ودعم نماذج ذات قدرة على الرؤية، وإخراج بنية JSON/قواعد مقيدة. التطبيق مغلق المصدر، ولم تعثر هذه المراجعة على مستودع كود عام له — كل ادعاء تقني هنا مصدره صفحة Google Play العامة، لا تدقيق مستقل. من يريد بديلاً مفتوح المصدر بمستودع عام، عليه قراءة [مراجعة ToolNeuron](/ar/power-local-llm/toolneuron-review) بدلاً من ذلك.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق LocalAI (ApexCreator) التثبيت؟',
        answer:
          'يعتمد ذلك على مدى أهمية شفافية الكود المصدري لديك. التطبيق مجاني، ويشغّل النماذج على الجهاز عبر llama.cpp، ويضيف حسب صفحته دردشة على المستندات، ودعم نماذج الرؤية، وإخراجًا بنيويًا — وهي مجموعة ميزات واسعة لتطبيق مجاني. لكنه مغلق المصدر ولم تعثر هذه المراجعة على مستودع عام له، فادعاءات الخصوصية ومعالجة البيانات تعتمد كليًا على الصفحة نفسها، لا على كود قابل للتدقيق المستقل. من يريد مجموعة ميزات مماثلة بكود منشور، فليجرّب ToolNeuron أولاً.',
        bullets: [
          'مجاني للتنزيل والاستخدام، مع فئة premium مدفوعة اختيارية — لم يتم تأكيد السعر الدقيق لهذه الفئة في هذه المراجعة؛ تحقق من الصفحة الحالية.',
          'يشغّل نماذج لغوية بصيغة GGUF على الجهاز عبر llama.cpp، وفق صفحة Google Play.',
          'يضيف دردشة على المستندات (RAG) عبر ملفات PDF وWord وExcel وCSV باستخدام استرجاع متجهي على الجهاز، ودعم نماذج ذات قدرة على الرؤية، وفق الصفحة.',
          'مغلق المصدر: لم تعثر هذه المراجعة على مستودع GitHub عام للتطبيق، بخلاف ToolNeuron.',
          'كان تقييم Google Play 3.0 من 5 من 181 تقييمًا وقت إجراء بحث هذه المراجعة (سبتمبر 2026) — يجب اعتبار ذلك لقطة للصفحة، لا توصية.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على LocalAI', anchor: 'get-it' },
      { label: 'ما هو LocalAI', anchor: 'what-is-localai' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات: دردشة المستندات، الرؤية، والإخراج البنيوي', anchor: 'features' },
      { label: 'التسعير', anchor: 'pricing' },
      { label: 'الخصوصية وحالة المصدر المفتوح', anchor: 'privacy' },
      { label: 'المقايضات: المزايا في مقابل القيود', anchor: 'tradeoffs' },
      { label: 'LocalAI في مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم LocalAI', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم LocalAI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM هو تطبيق أندرويد مجاني ومغلق المصدر من ApexCreator يشغّل نماذج GGUF على الجهاز عبر llama.cpp، ويضيف حسب صفحته على Google Play دردشة على المستندات (RAG)، ودعم نماذج الرؤية، وإخراجًا بنيويًا، دون توفر كود مصدري عام لمراجعة مستقلة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيق دردشة مجاني على أندرويد يمكنه أيضًا قراءة ملفات PDF الخاصة بك والنظر إلى صورك، وكل ذلك يعمل على هاتفك — لكن لأن المطوّر لم ينشر الكود، فعليك أن تأخذ ادعاءات الصفحة بشأن الخصوصية والميزات على أساس الثقة إلى حد كبير، بدل التحقق منها بنفسك.',
          },
        ],
        items: [
          'السعر: مجاني [للتنزيل](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) والاستخدام، مع فئة premium مدفوعة اختيارية؛ لم يتم تأكيد السعر الدقيق لهذه الفئة في هذه المراجعة.',
          'المطوّر: ApexCreator (للتواصل: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          'المحرّك: [llama.cpp](https://github.com/ggml-org/llama.cpp) لنماذج GGUF، يعمل على الجهاز، وفق صفحة Google Play.',
          'ميزات تتجاوز الدردشة: دردشة على المستندات (RAG) عبر ملفات PDF وWord وExcel وCSV عبر استرجاع متجهي على الجهاز؛ دعم نماذج ذات قدرة على الرؤية؛ إخراج بنيوي بقواعد GBNF ومخطط JSON؛ قياسات أداء لحظية، وفق الصفحة.',
          'حالة المصدر المفتوح: مغلق المصدر — لم تعثر هذه المراجعة على مستودع كود عام للتطبيق.',
          'تقييم Google Play: 3.0 من 5 من 181 تقييمًا وقت إجراء بحث هذه المراجعة (سبتمبر 2026).',
          'التوزيع: متوفر فقط عبر [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة التطبيق العامة على Google Play ونتائج بحث عامة على الويب عنه، جرى التحقق منهما في سبتمبر 2026. لم تجرِ PromptQuorum اختبارًا عمليًا مستقلًا، أو مراجعة لسياسة الخصوصية، أو تدقيقًا للكود لهذا التطبيق — ولأن التطبيق مغلق المصدر، لم يكن تدقيق الكود ممكنًا.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'الحصول على LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM متوفر فقط عبر Google Play.**',
          'هذه المراجعة مكمّلة لـ[دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) من PromptQuorum، الذي يفهرس أدوات الذكاء الاصطناعي المحلي عبر المنصات، بما فيها إدخال هذا التطبيق نفسه.',
        ],
        columns: ['القناة', 'الحصول عليه'],
        rows: [
          {
            'القناة': 'Google Play',
            'الحصول عليه': '[LocalAI: Offline AI Chat LLM على Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: 'التطبيق نفسه مجاني التنزيل؛ وتتوفر فئة premium داخل التطبيق وفق الصفحة، لكن هذه المراجعة لم تستطع تأكيد سعرها الدقيق — تحقق من الصفحة الحالية قبل الشراء.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'ما هو LocalAI',
        content: [
          '**LocalAI: Offline AI Chat LLM هو تطبيق أندرويد يشغّل نماذج لغوية بصيغة GGUF على الجهاز عبر llama.cpp، وفق صفحته على Google Play.** وبخلاف الدردشة البسيطة، تصف الصفحة استرجاع مستندات (RAG) عبر صيغ ملفات مكتبية شائعة ودعمًا لنماذج ذات قدرة على الرؤية، مما يضعه كأداة ذكاء اصطناعي أوسع على الجهاز بدل كونه روبوت دردشة بغرض واحد.',
          'التطبيق من صنع مطوّر أو استوديو صغير يعمل تحت اسم ApexCreator، ويمكن التواصل معه عبر [info@apexcreators.co.in](mailto:info@apexcreators.co.in). تعتمد هذه المراجعة على صفحة التطبيق العامة على Play Store ونتائج بحث عامة على الويب عنه — لم يُعثر على مستودع كود مصدري عام، أو موقع ويب مخصص للمطوّر، أو وثيقة سياسة خصوصية لأغراض المراجعة المستقلة، وهذا فرق مهم عن بدائل مفتوحة المصدر مثل [ToolNeuron](/ar/power-local-llm/toolneuron-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**يتطلب إعداد LocalAI بضع خطوات.** تستغرق العملية بأكملها، من التثبيت إلى أول رد دون اتصال، بضع دقائق بالإضافة إلى المدة التي يستغرقها تنزيل النموذج المختار.',
        ],
        numberedItems: [
          {
            title: 'تثبيت التطبيق',
            whyItMatters: 'احصل على [LocalAI: Offline AI Chat LLM من Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp). التطبيق نفسه مجاني التثبيت.',
          },
          {
            title: 'تنزيل نموذج GGUF',
            whyItMatters: 'تتطلب هذه الخطوة اتصالاً بالإنترنت. تعتمد حجم التنزيل على النموذج المختار؛ ولا تحتاج الدردشة بعد ذلك إلى اتصال شبكي، وفق الصفحة.',
          },
          {
            title: 'الدردشة، أو إضافة مستند لاستخدام RAG',
            whyItMatters: 'أرفق ملفًا مدعومًا (PDF أو Word أو Excel أو CSV) ليجيب النموذج على أسئلة بشأنه، باستخدام استرجاع مستندات على الجهاز وفق الصفحة.',
          },
          {
            title: 'اختياري: استخدام نموذج ذي قدرة على الرؤية',
            whyItMatters: 'حمّل نموذجًا ذا قدرة على الرؤية لتحليل الصور، وفق الصفحة — وهذا اختياري ومستقل عن الدردشة النصية البسيطة.',
          },
          {
            title: 'اختياري: الترقية إلى الفئة premium',
            whyItMatters: 'تتوفر فئة premium مدفوعة داخل التطبيق؛ ولم تستطع هذه المراجعة تأكيد سعرها الدقيق أو نطاقها بعد الميزات المجانية الأساسية — تحقق من الصفحة الحالية.',
          },
        ],
        note: 'لم يتم تأكيد توافق النماذج الدقيق، وأحجام التنزيل، ومحتويات الفئة premium بشكل مستقل في هذه المراجعة — تحقق من صفحة التطبيق نفسها قبل الالتزام بتنزيل كبير أو شراء.',
      },
      features: {
        id: 'features',
        title: 'الميزات: دردشة المستندات، الرؤية، والإخراج البنيوي',
        content: [
          '**وفق صفحته على Google Play، يشغّل LocalAI نماذج GGUF عبر [llama.cpp](https://github.com/ggml-org/llama.cpp) ويضيف عدة ميزات تتجاوز الدردشة البسيطة.** تشمل دردشة المستندات (RAG) ملفات PDF وWord وExcel وCSV، تُحلَّل وتُقسَّم إلى أجزاء محليًا مع استرجاع متجهي على الجهاز؛ وتصف الصفحة ذلك بأنه يعمل بشكل كامل دون اتصال، دون إرسال محتوى المستندات إلى أي خادم.',
          'تصف الصفحة أيضًا دعمًا لنماذج ذات قدرة على الرؤية — وتذكر SmolVLM وLLaVA وQwen-VL كأمثلة — لتحليل الصور على الجهاز، إلى جانب دعم قواعد GBNF ومخطط JSON لتقييد إخراج النموذج بصيغة بنيوية، وقياسات أداء لحظية (عدد الرموز في الثانية ومقاييس مماثلة) تُعرض أثناء الدردشة.',
          'لم تُتحقق هذه المراجعة من هذه الميزات بشكل مستقل عبر اختبار عملي؛ وهي تُعرض هنا كقدرات معلَنة من التطبيق نفسه، لا كمعايير أداء مؤكدة.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'التسعير',
        content: [
          '**LocalAI مجاني للتنزيل والاستخدام، مع فئة premium مدفوعة اختيارية، وفق صفحته على Google Play.** لم تستطع هذه المراجعة تأكيد السعر الدقيق لفئة premium أو ما تفتحه بعد الميزات المجانية الأساسية — وقد تختلف أيضًا أسعار الشراء داخل التطبيق على Play Store حسب المنطقة.',
        ],
        note: 'تحقق من السعر الحالي لفئة premium ومحتوياتها الدقيقة على [صفحة Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) قبل الشراء.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وحالة المصدر المفتوح',
        content: [
          '**LocalAI مغلق المصدر: لم تعثر هذه المراجعة على مستودع كود عام للتطبيق.** تصف صفحته الدردشة ودردشة المستندات (RAG) وميزات الرؤية بأنها تعمل على الجهاز، ولكن لأن الكود غير منشور، لا يمكن التحقق من هذه الادعاءات بشكل مستقل مقابل السلوك الفعلي للتطبيق كما يمكن لتطبيق مفتوح المصدر.',
          'وهذا فرق مهم عن تطبيق مثل [ToolNeuron](/ar/power-local-llm/toolneuron-review)، الذي تُنشر قاعدة كوده وبنيته الأمنية بالكامل وتكون قابلة للتدقيق. على القرّاء الذين يهمّهم كثيرًا التحقق المستقل مراعاة ذلك قبل التثبيت.',
        ],
        items: [
          '**مغلق المصدر.** لم يُعثر على مستودع GitHub عام أو ما يعادله لهذا التطبيق؛ وتعتمد ادعاءات الميزات والخصوصية على صفحة Play Store وحدها.',
          '**لم يُعثر على سياسة خصوصية.** لم تستطع هذه المراجعة إيجاد وثيقة سياسة خصوصية مفصّلة ومخصصة للتطبيق تتجاوز قسم أمان البيانات في Play Store.',
          '**ادّعاء بالمعالجة على الجهاز.** تنص الصفحة على أن الدردشة ودردشة المستندات (RAG) تعملان على الجهاز، لكن هذا ادعاء من الجهة المصنّعة، لا حقيقة خضعت لتدقيق مستقل.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا في مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'تطبيق أساسي مجاني بمجموعة ميزات واسعة',
            'ماذا تعني في الاستخدام الفعلي': 'الدردشة ودردشة المستندات (RAG) ودعم نماذج الرؤية بلا تكلفة للتجربة.',
            'القيد / التحفظ': 'لم تتحقق هذه المراجعة بشكل مستقل من مدى جودة أداء كل ميزة.',
          },
          {
            'الميزة': 'ميزات مستندات ورؤية تتجاوز الدردشة البسيطة',
            'ماذا تعني في الاستخدام الفعلي': 'حاجة أقل لتطبيقات منفصلة لدردشة PDF/المكتب أو تحليل الصور.',
            'القيد / التحفظ': 'يعتمد عمق الميزات وموثوقيتها على وصف الصفحة نفسها، لا على اختبار مستقل.',
          },
          {
            'الميزة': 'إخراج بنيوي (قواعد GBNF/مخطط JSON)',
            'ماذا تعني في الاستخدام الفعلي': 'مفيد للقرّاء الذين يريدون إخراج النموذج بصيغة قابلة للتنبؤ.',
            'القيد / التحفظ': 'لم يتم التحقق بشكل مستقل من التوفر والجودة عبر النماذج المختلفة المحمَّلة.',
          },
          {
            'الميزة': 'فئة premium اختيارية، لا حاجز دفع صارم',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن استخدام الميزات الأساسية مجانًا قبل اتخاذ قرار الدفع.',
            'القيد / التحفظ': 'لم يتم تأكيد السعر الدقيق لفئة premium ومحتوياتها في هذه المراجعة.',
          },
        ],
        note: 'مغلق المصدر، ولم يُعثر على مستودع عام: بخلاف ToolNeuron، لا يمكن التحقق من أي من الادعاءات أعلاه مقابل كود منشور.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI في مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مفتوح المصدر', 'الفرق الأساسي'],
        rows: [
          {
            'التطبيق': 'LocalAI (ApexCreator)',
            'المنصات': 'أندرويد فقط',
            'السعر': 'مجاني، مع فئة premium اختيارية',
            'مفتوح المصدر': 'لا — مغلق المصدر، لم يُعثر على مستودع عام',
            'الفرق الأساسي': 'دردشة على المستندات (RAG) ودعم نماذج الرؤية، وفق الصفحة، لكن غير قابل للتحقق المستقل',
          },
          {
            'التطبيق': '[ToolNeuron](/ar/power-local-llm/toolneuron-review)',
            'المنصات': 'أندرويد فقط',
            'السعر': 'مجاني، مفتوح المصدر (MIT)',
            'مفتوح المصدر': 'نعم — مستودع GitHub عام',
            'الفرق الأساسي': 'مجموعة ميزات مماثلة في الاتساع (RAG، الصوت، الإضافات)، وكود مصدري قابل للتدقيق الكامل',
          },
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد وiOS',
            'السعر': 'شراء لمرة واحدة بسعر 19.99 دولارًا، إلى جانب فئات داخل التطبيق',
            'مفتوح المصدر': 'لا — مغلق المصدر',
            'الفرق الأساسي': 'تركيز على الشخصيات ولعب الأدوار، مع وضع سحابي اختياري بموافقة المستخدم',
          },
          {
            'التطبيق': '[RikkaHub](/ar/power-local-llm/rikkahub-review)',
            'المنصات': 'أندرويد فقط',
            'السعر': 'مجاني، مفتوح المصدر',
            'مفتوح المصدر': 'نعم',
            'الفرق الأساسي': 'خيار آخر مجاني ومفتوح المصدر لأندرويد للمقارنة المباشرة',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات للتطبيقات الخارجية بشكل متكرر — تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم LocalAI',
        items: [
          '**مستخدمو أندرويد الذين يريدون تطبيقًا مجانيًا مع ميزات مستندات ورؤية مدمجة.** تتجاوز دردشة PDF/المكتب ودعم نماذج الرؤية الدردشة النصية البسيطة، وفق الصفحة.',
          '**القرّاء الذين لا يعطون وزنًا كبيرًا لشفافية الكود المصدري.** إذا لم يكن التحقق من الكود بنفسك أولوية، فقد لا تهم حالة الإغلاق المصدري لحالة استخدامك.',
          '**القرّاء الذين يقارنون بالفعل بين عدة تطبيقات ذكاء اصطناعي محلي على أندرويد.** فهو نقطة مقارنة مجانية مفيدة إلى جانب خيارات مفتوحة المصدر مثل ToolNeuron وRikkaHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم LocalAI',
        items: [
          '**مستخدمو iPhone أو سطح المكتب أو الويب.** التطبيق مخصص لأندرويد فقط، ويوزَّع حصريًا عبر Google Play.',
          '**القرّاء الذين يريدون تدقيق الكود المصدري للتطبيق بأنفسهم.** لم تعثر هذه المراجعة على مستودع عام؛ ويسمح بديل مفتوح المصدر مثل [ToolNeuron](/ar/power-local-llm/toolneuron-review) بمراجعة كود مستقلة.',
          '**القرّاء الذين يحتاجون إلى سياسة خصوصية مفصّلة وقابلة للمراجعة المستقلة قبل التثبيت.** لم تستطع هذه المراجعة إيجاد سياسة كهذه تتجاوز قسم أمان البيانات في Play Store.',
          '**القرّاء الذين يعطون وزنًا كبيرًا لتقييمات متجر التطبيقات.** بتقييم 3.0 من 5 من 181 تقييمًا وقت إجراء بحث هذه المراجعة، فهو يأتي بتقييم أدنى من عدة بدائل مقارَنة هنا.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل تطبيق LocalAI (ApexCreator) مجاني؟',
            a: 'التطبيق الأساسي مجاني للتنزيل والاستخدام. وتوجد فئة premium مدفوعة اختيارية وفق الصفحة، لكن هذه المراجعة لم تستطع تأكيد سعرها الدقيق — تحقق من صفحة Google Play الحالية.',
          },
          {
            q: 'من يصنع LocalAI: Offline AI Chat LLM؟',
            a: 'مطوّر أو استوديو صغير يعمل تحت اسم ApexCreator، ويمكن التواصل معه عبر [info@apexcreators.co.in](mailto:info@apexcreators.co.in). لم تعثر هذه المراجعة على موقع ويب عام للمطوّر أو منظمة GitHub بعد هذا التواصل.',
          },
          {
            q: 'ماذا يمكن أن يفعل LocalAI بعد الدردشة؟',
            a: 'وفق صفحته على Google Play: دردشة على المستندات (RAG) عبر ملفات PDF وWord وExcel وCSV؛ دعم نماذج ذات قدرة على الرؤية؛ إخراج بنيوي بقواعد GBNF ومخطط JSON؛ وقياسات أداء لحظية. هذه ميزات معلَنة من التطبيق نفسه، لم تُختبر معياريًا بشكل مستقل من هذه المراجعة.',
          },
          {
            q: 'هل LocalAI مفتوح المصدر؟',
            a: 'لا. بحثت هذه المراجعة عن مستودع كود عام ولم تجد أي مستودع — يبدو أن التطبيق مغلق المصدر.',
          },
          {
            q: 'هل يعمل LocalAI دون اتصال؟',
            a: 'وفق صفحته، نعم، بعد تنزيل النموذج. يلزم الاتصال بالإنترنت لتنزيل النماذج وتحديثات التطبيق.',
          },
          {
            q: 'كيف يقارن LocalAI بـToolNeuron؟',
            a: '[ToolNeuron](/ar/power-local-llm/toolneuron-review) مجاني ومفتوح المصدر، بمستودع GitHub عام يوثّق بنيته الأمنية. ويقدّم LocalAI (ApexCreator) مجموعة ميزات مماثلة في الاتساع — بما فيها دردشة المستندات (RAG) ودعم نماذج الرؤية، وفق صفحته — لكنه مغلق المصدر، ولم تعثر هذه المراجعة على مستودع عام له. اختر بناءً على أهمية الكود المصدري القابل للتدقيق المستقل بالنسبة لك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يجمع LocalAI: Offline AI Chat LLM، وفق صفحته على Google Play، مجموعة ميزات واسعة حقًا في تطبيق أندرويد مجاني: دردشة على الجهاز عبر llama.cpp، ودردشة على المستندات (RAG) عبر صيغ ملفات مكتبية شائعة، ودعم نماذج ذات قدرة على الرؤية، وإخراج بنيوي — ميزات تتجاوز بوضوح عميل دردشة بسيط.',
          'ما يجعل هذه المراجعة متحفظة هو أن كل ادعاء من تلك الادعاءات يعتمد على صفحة المتجر الخاصة بالمطوّر نفسه: لم تعثر هذه المراجعة على كود مصدري عام، ولا موقع ويب مخصص للمطوّر، ولا سياسة خصوصية مفصّلة للتحقق منها. وهذه ثغرة حقيقية مقارنة ببديل مفتوح المصدر مثل ToolNeuron، الذي يمكن التحقق من ادعاءاته المماثلة في الكود المنشور.',
          'القرّاء الذين يريدون تجربة تطبيق ذكاء اصطناعي مجاني وغني بالميزات على أندرويد ولا يعطون وزنًا كبيرًا لشفافية الكود المصدري يمكنهم تجربته بشكل معقول؛ أما القرّاء الذين يريدون التحقق بشكل مستقل من ما يفعله التطبيق فعليًا بالبيانات المحلية، فعليهم البدء بـ[ToolNeuron](/ar/power-local-llm/toolneuron-review) أو [RikkaHub](/ar/power-local-llm/rikkahub-review) بدلاً من ذلك، فكلاهما ينشر كوده المصدري.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LocalAI: Offline AI Chat LLM على Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — التسعير والميزات والتقييم، تم التحقق منها في 2026-09-12.',
          'نتائج بحث عامة على الويب تصف ميزات دردشة المستندات (RAG) والرؤية والإخراج البنيوي للتطبيق، تم التحقق منها في 2026-09-12 — لم يُعثر على موقع ويب مستقل للمطوّر أو مستودع مصدري للتحقق من هذه الادعاءات.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة ToolNeuron](/ar/power-local-llm/toolneuron-review) — بديل أندرويد مجاني ومفتوح المصدر بمستودع GitHub عام، وباتساع مماثل في الميزات.',
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق مرافق مدفوع وعابر للمنصات يعمل على الجهاز، مع وضع سحابي اختياري.',
          '[مراجعة RikkaHub](/ar/power-local-llm/rikkahub-review) — تطبيق دردشة ذكاء اصطناعي محلي آخر مجاني ومفتوح المصدر لأندرويد.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — تطبيق ذكاء اصطناعي محلي مجاني ومفتوح المصدر يدعم iOS وبعض أجهزة أندرويد.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localai-apexcreator-review-hero-ko.webp',
    title: 'LocalAI 리뷰(2026):ApexCreator의 오프라인 안드로이드 AI 채팅 앱',
    seoTitle: 'LocalAI(ApexCreator) 리뷰 2026:오프라인 안드로이드 AI 채팅',
    intro:
      '개발자 [ApexCreator](mailto:info@apexcreators.co.in)가 만든 [LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)은 llama.cpp를 통해 GGUF 언어 모델을 기기 내에서 실행하는 무료 안드로이드 앱으로, 유료 프리미엄 등급을 선택할 수 있습니다. 자체 Google Play 등록 정보에 따르면 PDF, Word, Excel, CSV 파일에 대한 기기 내 벡터 검색 기반 문서 채팅, 비전 지원 모델, 구조화된 JSON/문법 제한 출력, 실시간 성능 텔레메트리를 제공합니다. [ToolNeuron](/power-local-llm/toolneuron-review)과 달리 이 앱은 클로즈드 소스이며, 이 리뷰에서는 공개 코드 저장소를 찾지 못했습니다 — 아래의 모든 주장은 독립적인 테스트나 개발자 인터뷰가 아니라 공개된 Play 스토어 등록 정보에서 가져온 것입니다.',
    metaDescription:
      'LocalAI(ApexCreator) 리뷰 2026:llama.cpp를 통한 오프라인 AI 채팅, PDF/문서 RAG, 비전 모델을 지원하는 무료 안드로이드 앱, 선택적 프리미엄 등급 제공. 클로즈드 소스 — 등록 정보가 주장하는 내용과 이 리뷰가 확인하지 못한 내용.',
    twitterDescription:
      'LocalAI(ApexCreator) 리뷰:llama.cpp를 통해 GGUF 모델을 기기 내에서 실행하는 무료 안드로이드 앱 — 문서 RAG, 비전 모델 지원, 구조화된 출력 — 자체 Play 스토어 등록 정보에 따름. 클로즈드 소스, 공개 저장소를 찾지 못함.',
    audience:
      '문서 및 비전 기능을 갖춘 무료 온디바이스 AI 채팅 앱을 고려 중인 안드로이드 사용자 대상——확인된 사항과 앱 자체 스토어 등록 정보만이 주장하는 사항을 명확히 구분한 리뷰를 원하는 독자.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalAI ApexCreator review',
    targetKeywords: [
      'localai apexcreator review',
      'localai offline ai chat llm android',
      'apexcreator localai app',
      'offline ai chat app android',
      'local ai pdf chat android',
      'llama.cpp android app free',
      'localai vs toolneuron',
      'free local ai app android',
    ],
    current_models_mentioned: ['GGUF models', 'SmolVLM', 'LLaVA', 'Qwen-VL'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**LocalAI: Offline AI Chat LLM은 개발자 ApexCreator가 만든 무료 안드로이드 앱으로, llama.cpp를 통해 GGUF 언어 모델을 기기 내에서 실행하며 유료 프리미엄 등급을 선택할 수 있습니다.** 자체 Google Play 등록 정보에 따르면 기기 내 벡터 검색(sqlite-vec)을 이용한 PDF, Word, Excel, CSV 파일 문서 채팅, 비전 지원 모델, 구조화된 JSON/문법 제한 출력을 제공합니다. 이 앱은 클로즈드 소스이며, 이 리뷰에서는 공개 코드 저장소를 찾지 못했습니다 — 여기 실린 모든 기술적 주장은 독립적인 감사가 아니라 공개된 Play 스토어 등록 정보에서 가져온 것입니다. 공개 저장소가 있는 오픈소스 대안을 원하는 독자는 대신 [ToolNeuron 리뷰](/power-local-llm/toolneuron-review)를 읽어보시기 바랍니다.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalAI (ApexCreator) worth installing?',
        answer:
          'It depends on how much you weigh source-code transparency. The app is free, runs models on-device via llama.cpp, and per its listing adds document chat, vision model support, and structured output — a broad feature set for a free app. However, it is closed-source with no public repository this review could find, so its privacy and data-handling claims rest entirely on the listing itself, not independently auditable code. If you want the same kind of feature set with published source, try ToolNeuron first.',
        bullets: [
          'Free to download and use, with an optional paid premium tier — exact premium pricing was not confirmed for this review; check the current listing.',
          'Runs GGUF language models on-device via llama.cpp, per the Google Play listing.',
          'Adds document chat (RAG) over PDF, Word, Excel, and CSV files using on-device vector retrieval, and support for vision-capable models, per the listing.',
          'Closed source: this review found no public GitHub repository for the app, unlike ToolNeuron.',
          'Google Play rating was 3.0 out of 5 from 181 ratings at the time of this review\'s research (September 2026) — treat this as a listing snapshot, not an endorsement.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'LocalAI(ApexCreator)는 설치할 가치가 있을까요?',
        answer:
          '소스 코드 투명성을 얼마나 중요하게 여기는지에 따라 다릅니다. 이 앱은 무료이며 llama.cpp를 통해 모델을 기기 내에서 실행하고, 등록 정보에 따르면 문서 채팅, 비전 모델 지원, 구조화된 출력을 추가로 제공합니다 — 무료 앱으로서는 폭넓은 기능 구성입니다. 다만 클로즈드 소스이며 이 리뷰에서 찾을 수 있는 공개 저장소가 없어, 개인정보 보호 및 데이터 처리에 관한 주장은 독립적으로 검증 가능한 코드가 아니라 등록 정보 자체에 전적으로 의존하고 있습니다. 공개된 소스 코드로 같은 종류의 기능을 원한다면 먼저 ToolNeuron을 시도해 보세요.',
        bullets: [
          '무료로 다운로드 및 사용 가능하며 유료 프리미엄 등급을 선택할 수 있습니다 — 정확한 프리미엄 가격은 이 리뷰에서 확인되지 않았으니 현재 등록 정보를 확인하세요.',
          'Google Play 등록 정보에 따르면 llama.cpp를 통해 GGUF 언어 모델을 기기 내에서 실행합니다.',
          '등록 정보에 따르면 기기 내 벡터 검색을 이용한 PDF, Word, Excel, CSV 파일 문서 채팅(RAG)과 비전 지원 모델을 추가로 제공합니다.',
          '클로즈드 소스: 이 리뷰에서는 ToolNeuron과 달리 이 앱의 공개 GitHub 저장소를 찾지 못했습니다.',
          '이 리뷰의 조사 시점(2026년 9월) 기준 Google Play 평점은 181개 평가 중 5점 만점에 3.0점이었습니다 — 이는 등록 정보의 한 시점 스냅샷일 뿐 추천이 아닙니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '요약 답변', anchor: 'quick-answer' },
      { label: 'LocalAI 받기', anchor: 'get-it' },
      { label: 'LocalAI란 무엇인가', anchor: 'what-is-localai' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능: 문서 채팅, 비전, 구조화된 출력', anchor: 'features' },
      { label: '가격', anchor: 'pricing' },
      { label: '개인정보 보호 및 오픈소스 여부', anchor: 'privacy' },
      { label: '장단점: 이점 vs. 한계', anchor: 'tradeoffs' },
      { label: 'LocalAI vs. 대안', anchor: 'vs-alternatives' },
      { label: 'LocalAI를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'LocalAI를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalAI: Offline AI Chat LLM은 ApexCreator가 만든 무료 클로즈드 소스 안드로이드 앱으로, llama.cpp를 통해 GGUF 모델을 기기 내에서 실행하며 자체 Google Play 등록 정보에 따라 문서 RAG, 비전 모델 지원, 구조화된 출력을 추가하지만, 독립적인 검토를 위한 공개 소스 코드는 없습니다.',
          },
          {
            type: 'plain-terms',
            text: 'PDF도 읽고 사진도 볼 수 있는 무료 안드로이드 채팅 앱을 휴대폰에서 그대로 실행한다고 생각하면 됩니다 — 다만 개발자가 코드를 공개하지 않았기 때문에, 등록 정보의 개인정보 보호 및 기능 주장을 직접 검증하기보다는 대부분 신뢰에 맡겨야 합니다.',
          },
        ],
        items: [
          '가격: [다운로드](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) 및 사용이 무료이며, 유료 프리미엄 등급을 선택할 수 있습니다. 정확한 프리미엄 가격은 이 리뷰에서 확인되지 않았습니다.',
          '개발자: ApexCreator(연락처: [info@apexcreators.co.in](mailto:info@apexcreators.co.in)).',
          '엔진: Google Play 등록 정보에 따르면 GGUF 모델을 위한 [llama.cpp](https://github.com/ggml-org/llama.cpp)가 기기 내에서 실행됩니다.',
          '채팅 외 기능: 기기 내 벡터 검색을 이용한 PDF, Word, Excel, CSV 파일 문서 RAG; 비전 지원 모델; GBNF 문법 및 JSON 스키마 구조화 출력; 실시간 성능 텔레메트리, 등록 정보에 따름.',
          '오픈소스 여부: 클로즈드 소스 — 이 리뷰에서는 이 앱의 공개 코드 저장소를 찾지 못했습니다.',
          'Google Play 평점: 이 리뷰의 조사 시점(2026년 9월) 기준 181개 평가 중 5점 만점에 3.0점.',
          '배포: [Google Play](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)에서만 이용 가능.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 9월에 확인한 앱의 공개 Google Play 등록 정보 및 일반적인 웹 검색 결과를 기반으로 합니다. PromptQuorum은 이 앱에 대해 독립적인 실사용 테스트, 개인정보 보호정책 검토, 코드 감사를 수행하지 않았습니다 — 앱이 클로즈드 소스이기 때문에 코드 감사는 불가능했습니다.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'LocalAI 받기',
        content: [
          '**LocalAI: Offline AI Chat LLM은 Google Play에서만 이용할 수 있습니다.**',
          '이 리뷰는 플랫폼 전반의 로컬 AI 도구를 정리한 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/power-local-llm/local-llm-software-directory)와 함께 보는 자료이며, 이 앱의 자체 항목도 포함되어 있습니다.',
        ],
        columns: ['채널', '받기'],
        rows: [
          {
            '채널': 'Google Play',
            '받기': '[Google Play의 LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)',
          },
        ],
        note: '앱 자체는 무료로 다운로드할 수 있습니다. 등록 정보에 따르면 인앱 프리미엄 등급이 있지만, 이 리뷰는 정확한 가격을 확인하지 못했습니다 — 구매 전 현재 등록 정보를 확인하세요.',
      },
      whatIsLocalAI: {
        id: 'what-is-localai',
        title: 'LocalAI란 무엇인가',
        content: [
          '**LocalAI: Offline AI Chat LLM은 자체 Google Play 등록 정보에 따르면 llama.cpp를 통해 GGUF 형식 언어 모델을 기기 내에서 실행하는 안드로이드 앱입니다.** 단순 채팅을 넘어, 등록 정보는 일반적인 오피스 파일 형식에 대한 문서 검색(RAG)과 비전 지원 모델을 설명하며, 이를 단일 목적 챗봇이 아닌 더 넓은 온디바이스 AI 툴킷으로 포지셔닝하고 있습니다.',
          '이 앱은 ApexCreator라는 이름으로 활동하는 개발자 또는 소규모 스튜디오가 만들었으며, [info@apexcreators.co.in](mailto:info@apexcreators.co.in)으로 연락할 수 있습니다. 이 리뷰는 앱의 공개 Play 스토어 등록 정보와 일반적인 웹 검색 결과에 의존하고 있습니다 — 독립적인 검토를 위한 공개 소스 코드 저장소, 전용 개발자 웹사이트, 개인정보 보호정책 문서를 찾을 수 없었으며, 이는 [ToolNeuron](/power-local-llm/toolneuron-review)과 같은 오픈소스 대안과의 중요한 차이입니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**LocalAI 설정은 몇 단계로 이루어집니다.** 설치부터 첫 오프라인 응답까지 전체 과정은 몇 분 정도 걸리며, 여기에 선택한 모델의 다운로드 시간이 추가됩니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[Google Play에서 LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)을 받으세요. 앱 자체는 무료로 설치할 수 있습니다.',
          },
          {
            title: 'GGUF 모델 다운로드',
            whyItMatters: '이 단계는 인터넷 연결이 필요합니다. 다운로드 용량은 선택한 모델에 따라 다르며, 등록 정보에 따르면 이후 채팅에는 네트워크 연결이 필요하지 않습니다.',
          },
          {
            title: '채팅하거나 RAG용 문서 추가',
            whyItMatters: '등록 정보에 따르면 기기 내 문서 검색을 이용해, 지원되는 파일(PDF, Word, Excel, CSV)을 첨부하면 모델이 이에 대해 질문에 답합니다.',
          },
          {
            title: '선택: 비전 지원 모델 사용',
            whyItMatters: '등록 정보에 따르면 비전 지원 모델을 불러와 사진이나 이미지를 분석할 수 있습니다 — 이는 선택 사항이며 일반 텍스트 채팅과는 별개입니다.',
          },
          {
            title: '선택: 프리미엄 등급으로 업그레이드',
            whyItMatters: '앱 내에서 유료 프리미엄 등급을 이용할 수 있습니다. 이 리뷰는 기본 무료 기능을 넘어서는 정확한 가격이나 범위를 확인하지 못했습니다 — 현재 등록 정보를 확인하세요.',
          },
        ],
        note: '정확한 모델 호환성, 다운로드 용량, 프리미엄 등급 내용은 이 리뷰에서 독립적으로 확인되지 않았습니다 — 대용량 다운로드나 구매를 결정하기 전에 앱 자체의 등록 정보를 확인하세요.',
      },
      features: {
        id: 'features',
        title: '기능: 문서 채팅, 비전, 구조화된 출력',
        content: [
          '**자체 Google Play 등록 정보에 따르면 LocalAI는 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 GGUF 모델을 실행하며 단순 채팅을 넘어선 여러 기능을 추가합니다.** 문서 채팅(RAG)은 PDF, Word, Excel, CSV 파일을 지원하며, 기기 내 벡터 검색을 이용해 로컬에서 구문 분석하고 청크로 나눕니다. 등록 정보는 이를 완전히 오프라인으로 실행되며 문서 내용이 서버로 전송되지 않는다고 설명합니다.',
          '등록 정보는 또한 SmolVLM, LLaVA, Qwen-VL을 예로 들어 사진이나 이미지를 기기 내에서 분석할 수 있는 비전 지원 모델 지원을 설명하며, 모델 출력을 구조화된 형식으로 제한하는 GBNF 문법 및 JSON 스키마 지원, 그리고 채팅 중 표시되는 실시간 성능 텔레메트리(초당 토큰 수 등의 지표)도 함께 설명합니다.',
          '이 리뷰는 이러한 기능을 실사용 테스트로 독립적으로 검증하지 않았습니다. 여기서는 확인된 벤치마크가 아니라 앱 자체가 밝힌 기능으로 소개됩니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '가격',
        content: [
          '**LocalAI는 자체 Google Play 등록 정보에 따르면 다운로드 및 사용이 무료이며, 유료 프리미엄 등급을 선택할 수 있습니다.** 이 리뷰는 프리미엄 등급의 정확한 가격이나 기본 무료 기능을 넘어서 잠금 해제되는 내용을 확인하지 못했습니다 — Play 스토어 인앱 가격은 지역에 따라 다를 수도 있습니다.',
        ],
        note: '구매하기 전에 [Google Play 등록 정보](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp)에서 현재 프리미엄 가격과 정확한 내용을 확인하세요.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 오픈소스 여부',
        content: [
          '**LocalAI는 클로즈드 소스입니다: 이 리뷰에서는 이 앱의 공개 코드 저장소를 찾지 못했습니다.** 등록 정보는 채팅, 문서 RAG, 비전 기능이 기기 내에서 실행된다고 설명하지만, 코드가 공개되지 않았기 때문에 오픈소스 앱처럼 앱의 실제 동작과 이러한 주장을 독립적으로 대조할 수 없습니다.',
          '이는 전체 코드베이스와 보안 아키텍처가 공개되어 감사 가능한 [ToolNeuron](/power-local-llm/toolneuron-review)과 같은 앱과의 중요한 차이입니다. 독립적인 검증 가능성을 중요하게 여기는 독자는 설치 전에 이를 고려해야 합니다.',
        ],
        items: [
          '**클로즈드 소스.** 이 앱에 대한 공개 GitHub 저장소나 그에 준하는 것을 찾지 못했습니다. 기능 및 개인정보 보호 관련 주장은 오직 Play 스토어 등록 정보에만 근거합니다.',
          '**개인정보 보호정책을 찾지 못함.** 이 리뷰는 Play 스토어 자체 데이터 안전 섹션 외에 이 앱에 대한 전용 상세 개인정보 보호정책 문서를 찾지 못했습니다.',
          '**온디바이스 처리를 주장.** 등록 정보는 채팅과 문서 RAG가 기기 내에서 실행된다고 밝히지만, 이는 제조사의 주장일 뿐 독립적으로 감사된 사실은 아닙니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점 vs. 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 주의 사항'],
        rows: [
          {
            '이점': '폭넓은 기능을 갖춘 무료 기본 앱',
            '실제 사용에서의 의미': '채팅, 문서 RAG, 비전 모델 지원을 비용 없이 사용해 볼 수 있습니다.',
            '한계 / 주의 사항': '이 리뷰는 각 기능이 실제로 얼마나 잘 작동하는지 독립적으로 검증하지 않았습니다.',
          },
          {
            '이점': '단순 채팅을 넘어선 문서 및 비전 기능',
            '실제 사용에서의 의미': 'PDF/오피스 채팅이나 이미지 분석을 위해 별도 앱이 덜 필요합니다.',
            '한계 / 주의 사항': '기능의 깊이와 신뢰성은 독립적인 테스트가 아니라 등록 정보 자체의 설명에 근거합니다.',
          },
          {
            '이점': '구조화된 출력(GBNF/JSON 스키마)',
            '실제 사용에서의 의미': '모델 출력을 예측 가능한 형식으로 원하는 독자에게 유용합니다.',
            '한계 / 주의 사항': '다양한 로드 모델에서의 지원 여부와 품질은 독립적으로 확인되지 않았습니다.',
          },
          {
            '이점': '선택적 프리미엄 등급, 강제 결제벽 아님',
            '실제 사용에서의 의미': '결제 여부를 결정하기 전에 핵심 기능을 무료로 사용할 수 있습니다.',
            '한계 / 주의 사항': '정확한 프리미엄 가격과 내용은 이 리뷰에서 확인되지 않았습니다.',
          },
        ],
        note: '클로즈드 소스이며 공개 저장소를 찾지 못했습니다: ToolNeuron과 달리 위의 어떤 주장도 공개된 코드로 확인할 수 없습니다.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LocalAI vs. 대안',
        columns: ['앱', '플랫폼', '가격', '오픈소스', '핵심 차이'],
        rows: [
          {
            '앱': 'LocalAI (ApexCreator)',
            '플랫폼': '안드로이드 전용',
            '가격': '무료, 선택적 프리미엄 등급',
            '오픈소스': '아니오 — 클로즈드 소스, 공개 저장소를 찾지 못함',
            '핵심 차이': '등록 정보에 따른 문서 RAG 및 비전 모델 지원이지만 독립적으로 검증할 수 없음',
          },
          {
            '앱': '[ToolNeuron](/power-local-llm/toolneuron-review)',
            '플랫폼': '안드로이드 전용',
            '가격': '무료, 오픈소스(MIT)',
            '오픈소스': '예 — 공개 GitHub 저장소',
            '핵심 차이': '비슷하게 폭넓은 기능(RAG, 음성, 플러그인), 완전히 감사 가능한 소스 코드',
          },
          {
            '앱': '[Layla](/power-local-llm/layla-review)',
            '플랫폼': '안드로이드 및 iOS',
            '가격': '일회성 구매 19.99달러, 추가 인앱 등급',
            '오픈소스': '아니오 — 클로즈드 소스',
            '핵심 차이': '페르소나 및 롤플레이 중심, 선택적 옵트인 클라우드 모드',
          },
          {
            '앱': '[RikkaHub](/power-local-llm/rikkahub-review)',
            '플랫폼': '안드로이드 전용',
            '가격': '무료, 오픈소스',
            '오픈소스': '예',
            '핵심 차이': '직접 비교할 만한 또 다른 무료 오픈소스 안드로이드 옵션',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능 정보는 자주 바뀝니다 — 결정 전에 각 앱 자체의 최신 등록 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LocalAI를 사용해야 하는 사람',
        items: [
          '**문서 및 비전 기능이 포함된 무료 앱을 원하는 안드로이드 사용자.** 등록 정보에 따르면 PDF/오피스 채팅과 비전 모델 지원이 단순 텍스트 채팅을 넘어섭니다.',
          '**소스 코드 투명성을 크게 중요시하지 않는 독자.** 코드를 스스로 검증하는 것이 우선순위가 아니라면 클로즈드 소스 여부는 사용 목적에 크게 영향을 주지 않을 수 있습니다.',
          '**이미 여러 안드로이드 로컬 AI 앱을 비교 중인 독자.** ToolNeuron이나 RikkaHub 같은 오픈소스 옵션과 나란히 놓고 볼 유용한 무료 비교 대상입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LocalAI를 사용하지 말아야 하는 사람',
        items: [
          '**아이폰, 데스크톱, 웹 사용자.** 이 앱은 안드로이드 전용이며 Google Play를 통해서만 배포됩니다.',
          '**앱의 소스 코드를 직접 감사하고 싶은 독자.** 이 리뷰에서는 공개 저장소를 찾지 못했습니다. [ToolNeuron](/power-local-llm/toolneuron-review) 같은 오픈소스 대안은 독립적인 코드 검토를 허용합니다.',
          '**설치 전에 상세하고 독립적으로 검토 가능한 개인정보 보호정책이 필요한 독자.** 이 리뷰는 Play 스토어 자체 데이터 안전 섹션 외에 그런 것을 찾지 못했습니다.',
          '**앱 스토어 평점을 크게 중요시하는 독자.** 이 리뷰의 조사 시점 기준 181개 평가 중 5점 만점에 3.0점으로, 여기서 비교한 여러 대안보다 낮은 평점입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LocalAI(ApexCreator)는 무료인가요?',
            a: '기본 앱은 다운로드와 사용이 무료입니다. 등록 정보에 따르면 선택적 유료 프리미엄 등급이 있지만, 이 리뷰는 정확한 가격을 확인하지 못했습니다 — 현재 Google Play 등록 정보를 확인하세요.',
          },
          {
            q: 'LocalAI: Offline AI Chat LLM은 누가 만드나요?',
            a: 'ApexCreator라는 이름으로 활동하는 개발자 또는 소규모 스튜디오이며, [info@apexcreators.co.in](mailto:info@apexcreators.co.in)으로 연락할 수 있습니다. 이 리뷰는 이 연락처 외에 공개 개발자 웹사이트나 GitHub 조직을 찾지 못했습니다.',
          },
          {
            q: 'LocalAI는 채팅 외에 무엇을 할 수 있나요?',
            a: '자체 Google Play 등록 정보에 따르면: PDF, Word, Excel, CSV 파일에 대한 문서 채팅(RAG); 비전 지원 모델 지원; GBNF 문법 및 JSON 스키마 구조화 출력; 실시간 성능 텔레메트리. 이는 앱 자체가 밝힌 기능이며, 이 리뷰가 독립적으로 벤치마크한 것은 아닙니다.',
          },
          {
            q: 'LocalAI는 오픈소스인가요?',
            a: '아니요. 이 리뷰는 공개 코드 저장소를 검색했지만 찾지 못했습니다 — 이 앱은 클로즈드 소스로 보입니다.',
          },
          {
            q: 'LocalAI는 오프라인에서 작동하나요?',
            a: '등록 정보에 따르면, 모델을 다운로드한 이후에는 그렇습니다. 모델과 앱 업데이트를 다운로드할 때만 인터넷 연결이 필요합니다.',
          },
          {
            q: 'LocalAI는 ToolNeuron과 비교해 어떤가요?',
            a: '[ToolNeuron](/power-local-llm/toolneuron-review)은 무료이자 오픈소스이며, 보안 아키텍처를 문서화한 공개 GitHub 저장소가 있습니다. LocalAI(ApexCreator)는 등록 정보에 따르면 문서 RAG와 비전 모델 지원을 포함해 비슷하게 폭넓은 기능을 제공하지만 클로즈드 소스이며, 이 리뷰에서는 공개 저장소를 찾지 못했습니다. 독립적으로 감사 가능한 소스 코드가 중요한지에 따라 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'LocalAI: Offline AI Chat LLM은 자체 Google Play 등록 정보에 따르면 무료 안드로이드 앱에 실제로 폭넓은 기능을 담고 있습니다: llama.cpp를 통한 온디바이스 채팅, 일반적인 오피스 파일 형식에 대한 문서 RAG, 비전 지원 모델 지원, 구조화된 출력 — 단순 채팅 클라이언트를 훨씬 넘어서는 기능입니다.',
          '이 리뷰가 신중한 태도를 유지하는 이유는, 이 모든 주장이 개발자 자체의 스토어 등록 정보에 근거한다는 점입니다: 이 리뷰는 공개 소스 코드, 전용 개발자 웹사이트, 상세한 개인정보 보호정책을 찾지 못했고 이를 대조할 방법이 없었습니다. 이는 동등한 주장을 공개된 코드로 검증할 수 있는 ToolNeuron 같은 오픈소스 대안과 비교했을 때 실질적인 공백입니다.',
          '무료로 기능이 풍부한 안드로이드 AI 앱을 시도해 보고 싶고 소스 코드 투명성을 크게 중요시하지 않는 독자라면 합리적으로 시도해 볼 수 있습니다. 앱이 로컬 데이터로 실제로 무엇을 하는지 독립적으로 검증하고 싶은 독자는 대신 소스를 공개하는 [ToolNeuron](/power-local-llm/toolneuron-review)이나 [RikkaHub](/power-local-llm/rikkahub-review)로 시작해야 합니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 LocalAI: Offline AI Chat LLM](https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp) — 가격, 기능, 평점, 2026-09-12 확인.',
          '앱의 문서 RAG, 비전, 구조화된 출력 기능을 설명하는 일반적인 웹 검색 결과, 2026-09-12 확인 — 이러한 주장을 대조할 독립적인 개발자 웹사이트나 소스 저장소는 찾지 못했습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[ToolNeuron 리뷰](/power-local-llm/toolneuron-review) — 공개 GitHub 저장소가 있는, 비슷하게 폭넓은 무료 오픈소스 안드로이드 대안.',
          '[Layla 리뷰](/power-local-llm/layla-review) — 선택적 클라우드 모드가 있는 유료 크로스플랫폼 온디바이스 동반 앱.',
          '[RikkaHub 리뷰](/power-local-llm/rikkahub-review) — 또 다른 무료 오픈소스 안드로이드 로컬 AI 채팅 앱.',
          '[PocketPal AI 리뷰](/power-local-llm/pocketpal-ai-review) — iOS와 일부 안드로이드를 지원하는 무료 오픈소스 로컬 AI 앱.',
          '[전체 로컬 LLM 소프트웨어 디렉터리](/power-local-llm/local-llm-software-directory) — 플랫폼 전반의 로컬 LLM 도구를 더 광범위하게 정리한 디렉터리.',
        ],
      },
    },
  },
}
