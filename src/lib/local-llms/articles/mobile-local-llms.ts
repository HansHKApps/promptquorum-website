// Auto-generated from src/lib/local-llms/content.ts
// Slug: mobile-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    last_full_refresh: '2026-08-27',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-27',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Mobile Local LLMs 2026: Offline AI on iPhone and Android',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-en.webp',
    seoTitle: 'Run a Local LLM on iPhone or Android (2026 Guide)',
    intro: '**You can run a small language model directly on many current phones and tablets.** This guide explains which apps do it, how large the model downloads are, why MLC Chat and Ollama are different things, and what limits to expect. PromptQuorum has not benchmarked phones, so this page gives no speed or battery figures.',
    metaDescription: 'Run a local LLM on iPhone or Android: PocketPal AI, MLC Chat and Private LLM, model download sizes, why Ollama needs a computer, and real limits (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Yes, many current phones can run a small language model offline. Start with a 1B model (Llama 3.2 1B is a 1.3 GB download in Ollama’s library; app builds differ in size), then try 3B (2.0 GB) if your device copes. Speed, heat and battery drain depend on the phone, the app and the model, so test on your own device.**',
    audience: 'Developers and mobile users evaluating offline AI and on-device LLM inference for iOS and Android',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mobile LLM',
    toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'What Actually Works on Mobile (2026)', anchor: '#what-works' },
        { label: 'What Mobile Hardware Runs Local LLMs?', anchor: '#hardware' },
        { label: 'Best Current Setups: Apps & Frameworks', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama: Android Compared', anchor: '#mlc-vs-ollama' },
        { label: 'Mobile vs Laptop vs Mini PC', anchor: '#mobile-comparison' },
        { label: 'How Fast Are Mobile LLMs vs Desktop?', anchor: '#performance' },
        { label: 'Best Use Cases for Mobile LLMs', anchor: '#use-cases' },
        { label: 'Limitations You Should Know', anchor: '#limitations' },
        { label: 'When Will Mobile LLMs Become Practical?', anchor: '#future' },
        { label: 'Regional Considerations', anchor: '#regional-context' },
        { label: 'Watch: Running Local AI Models on Your Phone with PocketPal AI', anchor: '#video-walkthrough' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Many current phones and tablets can run a small language model on the device, with speed and stability depending on hardware, app and model.',
          },
          {
            type: 'plain-terms',
            text: 'Your phone can answer prompts without a connection once the app and model are downloaded, but a small model makes more mistakes than a large one.',
          },
        ],
        items: [
          '**It can work:** start with a small model of about 1B to 3B parameters.',
          '**Apps:** PocketPal AI (iOS and Android), MLC Chat, and Private LLM (Apple devices).',
          '**Ollama:** its download page lists macOS, Linux and Windows, not a phone app.',
          '**Limits:** free memory, heat, battery and model quality. We have not measured them.',
          '**Privacy:** local inference does not by itself settle app permissions, backups or legal duties.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Llama 3.2 1B:** about 1.3 GB download in the [Ollama library](https://ollama.com/library/llama3.2/tags); other formats differ',
          '**Llama 3.2 3B:** about 2.0 GB in the same library; running it needs more memory than the file size',
          '**PocketPal AI:** MIT-licensed app for iOS and Android that runs GGUF models ([repository](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** in the [App Store](https://llm.mlc.ai/docs/deploy/ios.html) for iOS; the [Android guide](https://llm.mlc.ai/docs/deploy/android.html) links a demo APK',
          '**Phone speed and battery:** not measured by PromptQuorum',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'What Actually Works on Mobile (2026)',
        content: [
          '**Short tasks:** simple questions, rewriting a few sentences and short summaries are sensible first tests.',
          '**Model size:** start with 1B. Move to 3B or larger only if the app loads it and stays stable on your device.',
          '**Memory:** the operating system and other apps share the RAM, so not all advertised memory is free for the model.',
          '**What to expect less of:** long documents, complex code and demanding reasoning. Check every important answer.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'What Mobile Hardware Runs Local LLMs in 2026?',
        content: [
          '**There is no single minimum phone.** Free memory, chip, operating system and app version decide what loads. The table is a test order, not a compatibility promise.',
        ],
        columns: ['Your device', 'First model to try', 'Download size', 'Then check'],
        rows: [
          {
            'Your device': 'Older or low-memory phone',
            'First model to try': 'Llama 3.2 1B',
            'Download size': 'About 1.3 GB',
            'Then check': 'Does it load and stay open?',
          },
          {
            'Your device': 'Recent high-end phone',
            'First model to try': 'Llama 3.2 3B',
            'Download size': 'About 2.0 GB',
            'Then check': 'Speed, heat, battery',
          },
          {
            'Your device': 'Tablet with more memory',
            'First model to try': 'Llama 3.2 3B or larger',
            'Download size': '2.0 GB or more',
            'Then check': 'Stability with long chats',
          },
        ],
        note: 'Sizes are from the Ollama library and serve as a guide only; the files that mobile apps download can have different sizes.',
      },
      apps: {
        id: 'apps',
        title: 'Best Current Setups: Apps & Frameworks',
        columns: ['App', 'Platforms', 'What it is', 'Cost / source'],
        rows: [
          {
            App: '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            Platforms: 'iOS, Android',
            'What it is': 'Runs GGUF models locally',
            'Cost / source': 'MIT licence',
          },
          {
            App: '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            Platforms: 'iOS; Android demo APK',
            'What it is': 'Chat app from the MLC LLM project',
            'Cost / source': 'Free in the App Store',
          },
          {
            App: '[Private LLM](https://privatellm.app)',
            Platforms: 'iPhone, iPad, Mac',
            'What it is': 'Offline chat after model download',
            'Cost / source': 'One-time purchase',
          },
          {
            App: '[Ollama](https://ollama.com/download)',
            Platforms: 'macOS, Linux, Windows',
            'What it is': 'Model runner for computers',
            'Cost / source': 'No phone app listed',
          },
        ],
        note: 'Features, store availability and prices change. Check the store page and the app’s privacy information before you install. We did not test these apps for this page.',
      },
      frameworks: {
        id: 'frameworks',
        title: 'What Frameworks Support Mobile LLM Development?',
        content: [
          '**llama.cpp:** the [open-source engine](https://github.com/ggml-org/llama.cpp) for GGUF models; PocketPal AI uses it for language models.',
          '**MLC LLM:** compiles and runs models on several platforms, including [iOS](https://llm.mlc.ai/docs/deploy/ios.html) and [Android](https://llm.mlc.ai/docs/deploy/android.html).',
          '**Android system model:** Google’s [ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai) let developers use Gemini Nano through AICore on supported devices.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama: Android On-Device Inference Compared',
        content: [
          '**The difference is where the model runs.** MLC Chat runs a model on the phone. Ollama’s download page lists computers only; a phone can use it through a third-party client app that connects to a computer running Ollama.',
          '**Android setup:** MLC’s Android guide links a demo APK built for the Samsung S23 and does not mention Google Play. Installing an APK from outside a store carries risk, so download only from the project’s official links.',
        ],
        columns: ['Factor', 'MLC Chat', 'Ollama with a phone client'],
        rows: [
          {
            Factor: 'Where the model runs',
            'MLC Chat': 'On the phone',
            'Ollama with a phone client': 'On your computer',
          },
          {
            Factor: 'Works away from your network',
            'MLC Chat': 'Yes, after model download',
            'Ollama with a phone client': 'Needs a route to the computer',
          },
          {
            Factor: 'What you install',
            'MLC Chat': 'MLC Chat app or APK',
            'Ollama with a phone client': 'Ollama plus a client app',
          },
          {
            Factor: 'Which memory limits the model',
            'MLC Chat': 'The phone’s',
            'Ollama with a phone client': 'The computer’s',
          },
          {
            Factor: 'Speed depends on',
            'MLC Chat': 'Phone and model',
            'Ollama with a phone client': 'Computer, model and network',
          },
        ],
        note: 'Do not expose an Ollama server directly to the public internet. Use a trusted network or a properly secured private connection.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'Mobile vs Laptop vs Mini PC: Which Should You Use?',
        content: [
          '**A phone is the most portable option, while a computer usually leaves more memory and cooling headroom.**',
        ],
        columns: ['Factor', 'Phone', 'Laptop', 'Mini PC'],
        rows: [
          {
            Factor: 'Model size room',
            Phone: 'Small models',
            Laptop: 'Depends on memory',
            'Mini PC': 'Depends on memory',
          },
          {
            Factor: 'Portability',
            Phone: 'Pocket',
            Laptop: 'Bag',
            'Mini PC': 'Usually stationary',
          },
          {
            Factor: 'Power',
            Phone: 'Battery, heats up',
            Laptop: 'Battery or mains',
            'Mini PC': 'Mains',
          },
          {
            Factor: 'Extra cost',
            Phone: 'None if your phone copes',
            Laptop: 'Depends on model',
            'Mini PC': 'Depends on model',
          },
          {
            Factor: 'Good for',
            Phone: 'Short offline tasks',
            Laptop: 'Portable work',
            'Mini PC': 'Home or office server',
          },
        ],
        note: 'See the [mini PC guide](/local-llms/best-mini-pcs-local-llm) if you want a computer that serves models to your phone.',
      },
      performance: {
        id: 'performance',
        title: 'How Fast Are Mobile LLMs vs Desktop?',
        content: [
          '**Speed cannot be predicted from the phone’s name alone.** Memory bandwidth, chip, model size, quantization, app version and temperature all matter. We publish no phone speed figures because we have not measured them.',
        ],
        columns: ['Factor', 'Effect', 'What to do'],
        rows: [
          {
            Factor: 'Model size',
            Effect: 'Larger is usually slower',
            'What to do': 'Start small',
          },
          {
            Factor: 'Quantization',
            Effect: 'Changes size and quality',
            'What to do': 'Compare answers',
          },
          {
            Factor: 'Heat',
            Effect: 'Can reduce speed',
            'What to do': 'Test a longer session',
          },
          {
            Factor: 'App and version',
            Effect: 'Backends differ',
            'What to do': 'Note the version you test',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Regional Considerations',
        content: [
          '**EU and UK:** on-device inference can avoid sending prompts to an AI provider. That alone does not make processing GDPR-compliant; legal basis, security, retention and other duties still apply.',
          '**Other countries:** laws such as Japan’s APPI, China’s PIPL, Brazil’s LGPD or Korea’s PIPA have their own conditions. Running a model on a phone does not settle them.',
          '**Before work use:** check app analytics, crash reports, cloud backups, device management and your employer’s rules. This is general information, not legal advice. Whether other rules apply to a public or commercial service needs separate legal review.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Best Use Cases for Mobile LLMs',
        content: [
          '**Small on-device models suit limited tasks where offline access matters more than the best answer quality.**',
        ],
        items: [
          '**Offline questions:** draft ideas or ask simple questions without a connection, then verify facts later.',
          '**Notes:** shorten or rewrite your own notes. Check where the app stores chats and whether they are backed up.',
          '**Small code questions:** ask for explanations of short snippets and test any code.',
          '**Language practice:** rehearse simple dialogues; expect mistakes.',
          '**Sensitive work data:** use only with approval from your organisation. Local processing alone is not compliance.',
          '**Journaling:** get writing prompts; check app permissions and backups if the content is private.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitations You Should Know',
        items: [
          '**Memory:** a model needs more memory than its file size, and a long context needs more. The app may close if memory runs out.',
          '**Battery:** generating text uses power. Measure on your own device; we publish no run times.',
          '**Heat:** the phone may slow down in long sessions. Stop if the device gets uncomfortably hot.',
          '**Quality:** small models can state wrong facts confidently and struggle with complex tasks.',
          '**Not for critical advice:** do not rely on them for medical, legal or financial decisions.',
          '**Storage:** every model takes space; delete the ones you do not use.',
        ],
      },
      future: {
        id: 'future',
        title: 'When Will Mobile LLMs Become Practical?',
        content: [
          '**We do not forecast model sizes or speeds for future phones.** There is no reliable basis for a date.',
          '**What to watch:** new app releases, supported models and Google’s on-device APIs.',
          '**How to decide:** repeat the same short test after updates and compare answers, load time and battery use.',
          '**If your phone is not enough:** run a model on a computer and connect securely. A Mac mini M5 Pro starts at $1,699 with 24 GB; the 64 GB configuration starts at $2,699 (US list prices). See the [hardware guide](/local-llms/local-llm-hardware-guide).',
        ],
      },
      videoWalkthrough: {
        id: 'video-walkthrough',
        title: 'Watch: Running Local AI Models on Your Phone with PocketPal AI',
        content: 'This third-party video by the channel kintu is titled “How to Run Local LLMs on Your iOS & Android Smartphone (PocketPal AI)”. PromptQuorum has not verified its statements; apps and menus may have changed.',
        youtubeUrl: 'https://www.youtube.com/watch?v=sMIEK_dzNLU',
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run a local LLM on my iPhone?',
            a: 'Often yes, with a small model. PocketPal AI, MLC Chat and Private LLM offer iPhone apps. Whether a given model loads and runs well depends on your iPhone, so start small.',
          },
          {
            q: 'Which Android phones can run a local LLM?',
            a: 'There is no reliable single list. Free memory, chip, Android version and app support all matter. Install an app from its official source and try a 1B model first.',
          },
          {
            q: 'Is there an official Ollama app for phones?',
            a: 'Ollama’s download page lists macOS, Linux and Windows, not iOS or Android. Phone clients from third parties connect to Ollama running on a computer.',
          },
          {
            q: 'MLC Chat or PocketPal AI: which should I choose?',
            a: 'Try the one that supports your model and device. PocketPal AI runs GGUF models on iOS and Android. MLC Chat uses models prepared for MLC LLM. We have not compared their speed.',
          },
          {
            q: 'Can Android apps use Gemini Nano?',
            a: 'Google documents ML Kit GenAI APIs that let developers use Gemini Nano through AICore on supported devices. Support differs by feature and device.',
          },
          {
            q: 'Does a local LLM drain the battery?',
            a: 'Generating text uses power and can warm the device. How much depends on phone, app and model. PromptQuorum has not measured run times.',
          },
          {
            q: 'Is my data private with a local model?',
            a: 'Prompts can stay on the device during inference, but apps may use analytics, backups, web search or cloud features. Read the privacy information and check the settings.',
          },
          {
            q: 'Can a phone run a 70B model?',
            a: 'A 70B Q4 model is about 43 GB before context memory, which is more than a typical phone can hold in memory. Run it on a suitable computer or rented server instead.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide)',
          '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends)',
          '[Laptop vs Desktop Local LLM](/local-llms/laptop-vs-desktop-local-llm)',
          '[Best Small Local LLMs Under 4 GB](/prompt-bites/best-ollama-models-4gb-vram)',
          '[How to Install Ollama](/local-llms/how-to-install-ollama)',
          '[Top Open Source Models for Ollama](/local-llms/top-open-source-models-ollama)',
          '[Apple On-Device AI vs Local LLMs](/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PocketPal AI repository: platforms, licence and formats](https://github.com/a-ghorbani/pocketpal-ai)',
          '[MLC LLM guide for iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[MLC LLM guide for Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Ollama download page](https://ollama.com/download)',
          '[Llama 3.2 download sizes in the Ollama library](https://ollama.com/library/llama3.2/tags)',
          '[Google ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai)',
          '[What LLMs cannot do](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mobile Local LLMs 2026: Offline AI on iPhone and Android',
      description: 'Run a local LLM on iPhone or Android: PocketPal AI, MLC Chat and Private LLM, model download sizes, why Ollama needs a computer, and real limits (2026).',
      url: 'https://www.promptquorum.com/local-llms/mobile-local-llms',
      inLanguage: 'en',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and mobile users evaluating offline AI and on-device LLM inference for iOS and Android',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I run a local LLM on my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often yes, with a small model. PocketPal AI, MLC Chat and Private LLM offer iPhone apps. Whether a given model loads and runs well depends on your iPhone, so start small.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which Android phones can run a local LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no reliable single list. Free memory, chip, Android version and app support all matter. Install an app from its official source and try a 1B model first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there an official Ollama app for phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama’s download page lists macOS, Linux and Windows, not iOS or Android. Phone clients from third parties connect to Ollama running on a computer.',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC Chat or PocketPal AI: which should I choose?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Try the one that supports your model and device. PocketPal AI runs GGUF models on iOS and Android. MLC Chat uses models prepared for MLC LLM. We have not compared their speed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Android apps use Gemini Nano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google documents ML Kit GenAI APIs that let developers use Gemini Nano through AICore on supported devices. Support differs by feature and device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a local LLM drain the battery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generating text uses power and can warm the device. How much depends on phone, app and model. PromptQuorum has not measured run times.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my data private with a local model?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prompts can stay on the device during inference, but apps may use analytics, backups, web search or cloud features. Read the privacy information and check the settings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a phone run a 70B model?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 70B Q4 model is about 43 GB before context memory, which is more than a typical phone can hold in memory. Run it on a suitable computer or rented server instead.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Apps for running models with a phone or tablet',
      numberOfItems: 4,
      inLanguage: 'en',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Lokale LLMs auf dem Handy 2026: Offline-KI auf iPhone und Android',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-de.webp',
    seoTitle: 'Lokales LLM auf iPhone oder Android nutzen (2026)',
    intro: '**Auf vielen aktuellen Smartphones und Tablets läuft ein kleines Sprachmodell direkt auf dem Gerät.** Dieser Leitfaden zeigt, welche Apps das können, wie groß die Modelle sind, warum MLC Chat und Ollama verschiedene Dinge sind und welche Grenzen es gibt. PromptQuorum hat keine Smartphones gebenchmarkt, daher nennt diese Seite keine Tempo- oder Akkuwerte.',
    metaDescription: 'Lokales LLM auf iPhone oder Android: PocketPal AI, MLC Chat und Private LLM, Modellgrößen, warum Ollama einen Computer braucht und echte Grenzen (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Ja, viele aktuelle Smartphones können ein kleines Sprachmodell offline ausführen. Beginnen Sie mit einem 1B-Modell (Llama 3.2 1B sind in der Ollama-Bibliothek 1,3 GB; App-Versionen können abweichen) und testen Sie dann 3B (2,0 GB), wenn Ihr Gerät mitkommt. Tempo, Wärme und Akkuverbrauch hängen von Gerät, App und Modell ab.**',
    audience: 'Entwickler und Mobilnutzer, die Offline-KI und On-Device-Inferenz für iOS und Android prüfen',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mobile LLM',
    toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Kurzfakten', anchor: '#quick-facts' },
        { label: 'Was auf Mobilgeräten wirklich funktioniert (2026)', anchor: '#what-works' },
        { label: 'Welche mobile Hardware führt lokale LLMs aus?', anchor: '#hardware' },
        { label: 'Beste aktuelle Setups: Apps & Frameworks', anchor: '#apps' },
        { label: 'MLC LLM vs. Ollama: Android im Vergleich', anchor: '#mlc-vs-ollama' },
        { label: 'Handy vs Laptop vs Mini-PC', anchor: '#mobile-comparison' },
        { label: 'Wie schnell sind mobile LLMs vs Desktop?', anchor: '#performance' },
        { label: 'Beste Anwendungsfälle für mobile LLMs', anchor: '#use-cases' },
        { label: 'Einschränkungen, die Sie kennen sollten', anchor: '#limitations' },
        { label: 'Wann werden mobile LLMs praktisch?', anchor: '#future' },
        { label: 'Regionale Aspekte', anchor: '#regional-context' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
        { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Viele aktuelle Smartphones und Tablets können ein kleines Sprachmodell auf dem Gerät ausführen; Tempo und Stabilität hängen von Hardware, App und Modell ab.',
          },
          {
            type: 'plain-terms',
            text: 'Sind App und Modell heruntergeladen, kann Ihr Handy ohne Verbindung antworten. Ein kleines Modell macht jedoch mehr Fehler als ein großes.',
          },
        ],
        items: [
          '**Es kann funktionieren:** Beginnen Sie mit einem kleinen Modell mit etwa 1 bis 3 Milliarden Parametern.',
          '**Apps:** PocketPal AI (iOS und Android), MLC Chat und Private LLM (Apple-Geräte).',
          '**Ollama:** Die Download-Seite nennt macOS, Linux und Windows, keine Handy-App.',
          '**Grenzen:** freier Speicher, Wärme, Akku und Modellqualität. Wir haben sie nicht gemessen.',
          '**Datenschutz:** Lokale Inferenz klärt für sich weder App-Berechtigungen noch Backups oder rechtliche Pflichten.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Llama 3.2 1B:** etwa 1,3 GB Download in der [Ollama-Bibliothek](https://ollama.com/library/llama3.2/tags); andere Formate weichen ab',
          '**Llama 3.2 3B:** etwa 2,0 GB in derselben Bibliothek; im Betrieb braucht es mehr Speicher als die Dateigröße',
          '**PocketPal AI:** App unter MIT-Lizenz für iOS und Android, die GGUF-Modelle ausführt ([Repository](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** für iOS im [App Store](https://llm.mlc.ai/docs/deploy/ios.html); die [Android-Anleitung](https://llm.mlc.ai/docs/deploy/android.html) verlinkt eine Demo-APK',
          '**Tempo und Akku:** von PromptQuorum nicht gemessen',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'Was auf Mobilgeräten wirklich funktioniert (2026)',
        content: [
          '**Kurze Aufgaben:** einfache Fragen, ein paar Sätze umformulieren und kurze Zusammenfassungen sind sinnvolle erste Tests.',
          '**Modellgröße:** Beginnen Sie mit 1B. Wechseln Sie zu 3B oder größer nur, wenn die App das Modell lädt und stabil bleibt.',
          '**Speicher:** Betriebssystem und andere Apps teilen sich den RAM, daher steht nicht der gesamte beworbene Speicher zur Verfügung.',
          '**Weniger geeignet:** lange Dokumente, komplexer Code und anspruchsvolles Schlussfolgern. Prüfen Sie jede wichtige Antwort.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Welche mobile Hardware führt lokale LLMs 2026 aus?',
        content: [
          '**Ein einheitliches Mindest-Smartphone gibt es nicht.** Freier Speicher, Chip, Betriebssystem und App-Version entscheiden, was lädt. Die Tabelle ist eine Testreihenfolge, keine Kompatibilitätszusage.',
        ],
        columns: ['Ihr Gerät', 'Erstes Testmodell', 'Downloadgröße', 'Danach prüfen'],
        rows: [
          {
            'Ihr Gerät': 'Älteres Handy, wenig RAM',
            'Erstes Testmodell': 'Llama 3.2 1B',
            'Downloadgröße': 'Etwa 1,3 GB',
            'Danach prüfen': 'Lädt es und bleibt offen?',
          },
          {
            'Ihr Gerät': 'Aktuelles Topmodell',
            'Erstes Testmodell': 'Llama 3.2 3B',
            'Downloadgröße': 'Etwa 2,0 GB',
            'Danach prüfen': 'Tempo, Wärme, Akku',
          },
          {
            'Ihr Gerät': 'Tablet mit mehr Speicher',
            'Erstes Testmodell': 'Llama 3.2 3B oder größer',
            'Downloadgröße': '2,0 GB oder mehr',
            'Danach prüfen': 'Stabilität in langen Chats',
          },
        ],
        note: 'Die Größen stammen aus der Ollama-Bibliothek und dienen nur zur Orientierung; Dateien in Mobil-Apps können abweichen.',
      },
      apps: {
        id: 'apps',
        title: 'Beste aktuelle Setups: Apps & Frameworks',
        columns: ['App', 'Plattformen', 'Was sie tut', 'Kosten / Quelle'],
        rows: [
          {
            App: '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            Plattformen: 'iOS, Android',
            'Was sie tut': 'Führt GGUF-Modelle lokal aus',
            'Kosten / Quelle': 'MIT-Lizenz',
          },
          {
            App: '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            Plattformen: 'iOS; Android-Demo-APK',
            'Was sie tut': 'Chat-App des Projekts MLC LLM',
            'Kosten / Quelle': 'Kostenlos im App Store',
          },
          {
            App: '[Private LLM](https://privatellm.app)',
            Plattformen: 'iPhone, iPad, Mac',
            'Was sie tut': 'Offline nach Modell-Download',
            'Kosten / Quelle': 'Einmalkauf',
          },
          {
            App: '[Ollama](https://ollama.com/download)',
            Plattformen: 'macOS, Linux, Windows',
            'Was sie tut': 'Modell-Runtime für Computer',
            'Kosten / Quelle': 'Keine Handy-App genannt',
          },
        ],
        note: 'Funktionen, Verfügbarkeit und Preise ändern sich. Prüfen Sie vor der Installation Store-Seite und Datenschutzangaben. Wir haben diese Apps für diese Seite nicht getestet.',
      },
      frameworks: {
        id: 'frameworks',
        title: 'Welche Frameworks unterstützen mobile LLM-Entwicklung?',
        content: [
          '**llama.cpp:** die [Open-Source-Engine](https://github.com/ggml-org/llama.cpp) für GGUF-Modelle; PocketPal AI nutzt sie für Sprachmodelle.',
          '**MLC LLM:** kompiliert und betreibt Modelle auf mehreren Plattformen, darunter [iOS](https://llm.mlc.ai/docs/deploy/ios.html) und [Android](https://llm.mlc.ai/docs/deploy/android.html).',
          '**Android-Systemmodell:** Mit Googles [ML-Kit-GenAI-APIs](https://developers.google.com/ml-kit/genai) können Entwickler Gemini Nano über AICore auf unterstützten Geräten nutzen.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs. Ollama: Android On-Device-Inferenz im Vergleich',
        content: [
          '**Entscheidend ist, wo das Modell läuft.** MLC Chat führt ein Modell auf dem Handy aus. Die Download-Seite von Ollama nennt nur Computer; ein Handy kann Ollama über die Client-App eines Drittanbieters nutzen, die sich mit einem Computer verbindet.',
          '**Einrichtung unter Android:** Die Android-Anleitung von MLC verlinkt eine für das Samsung S23 gebaute Demo-APK und erwähnt Google Play nicht. APKs von außerhalb eines Stores sind riskant; laden Sie nur über offizielle Projektlinks.',
        ],
        columns: ['Faktor', 'MLC Chat', 'Ollama mit Handy-Client'],
        rows: [
          {
            Faktor: 'Wo das Modell läuft',
            'MLC Chat': 'Auf dem Handy',
            'Ollama mit Handy-Client': 'Auf Ihrem Computer',
          },
          {
            Faktor: 'Außerhalb Ihres Netzes nutzbar',
            'MLC Chat': 'Ja, nach Modell-Download',
            'Ollama mit Handy-Client': 'Braucht Weg zum Computer',
          },
          {
            Faktor: 'Zu installieren',
            'MLC Chat': 'MLC-Chat-App oder APK',
            'Ollama mit Handy-Client': 'Ollama plus Client-App',
          },
          {
            Faktor: 'Welcher Speicher begrenzt',
            'MLC Chat': 'Der des Handys',
            'Ollama mit Handy-Client': 'Der des Computers',
          },
          {
            Faktor: 'Tempo hängt ab von',
            'MLC Chat': 'Handy und Modell',
            'Ollama mit Handy-Client': 'Computer, Modell, Netz',
          },
        ],
        note: 'Machen Sie einen Ollama-Server nicht direkt aus dem öffentlichen Internet erreichbar. Nutzen Sie ein vertrauenswürdiges Netz oder eine abgesicherte private Verbindung.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'Handy vs Laptop vs Mini-PC: Was sollten Sie verwenden?',
        content: [
          '**Das Handy ist am mobilsten, ein Computer bietet meist mehr Spielraum bei Speicher und Kühlung.**',
        ],
        columns: ['Faktor', 'Smartphone', 'Laptop', 'Mini-PC'],
        rows: [
          {
            Faktor: 'Platz für Modelle',
            Smartphone: 'Kleine Modelle',
            Laptop: 'Je nach Speicher',
            'Mini-PC': 'Je nach Speicher',
          },
          {
            Faktor: 'Mobilität',
            Smartphone: 'Hosentasche',
            Laptop: 'Tasche',
            'Mini-PC': 'Meist stationär',
          },
          {
            Faktor: 'Strom',
            Smartphone: 'Akku, wird warm',
            Laptop: 'Akku oder Netz',
            'Mini-PC': 'Netzstrom',
          },
          {
            Faktor: 'Zusatzkosten',
            Smartphone: 'Keine, wenn es reicht',
            Laptop: 'Je nach Modell',
            'Mini-PC': 'Je nach Modell',
          },
          {
            Faktor: 'Gut für',
            Smartphone: 'Kurze Offline-Aufgaben',
            Laptop: 'Mobiles Arbeiten',
            'Mini-PC': 'Server zu Hause/Büro',
          },
        ],
        note: 'Im [Mini-PC-Leitfaden](/de/local-llms/best-mini-pcs-local-llm) finden Sie Computer, die Modelle für Ihr Handy bereitstellen können.',
      },
      performance: {
        id: 'performance',
        title: 'Wie schnell sind mobile LLMs im Vergleich zu Desktop?',
        content: [
          '**Das Tempo lässt sich nicht allein am Gerätenamen ablesen.** Speicherbandbreite, Chip, Modellgröße, Quantisierung, App-Version und Temperatur zählen. Wir nennen keine Handy-Werte, weil wir nicht gemessen haben.',
        ],
        columns: ['Faktor', 'Wirkung', 'Was tun'],
        rows: [
          {
            Faktor: 'Modellgröße',
            Wirkung: 'Größer ist meist langsamer',
            'Was tun': 'Klein beginnen',
          },
          {
            Faktor: 'Quantisierung',
            Wirkung: 'Ändert Größe und Qualität',
            'Was tun': 'Antworten vergleichen',
          },
          {
            Faktor: 'Wärme',
            Wirkung: 'Kann bremsen',
            'Was tun': 'Längere Sitzung testen',
          },
          {
            Faktor: 'App und Version',
            Wirkung: 'Backends unterscheiden sich',
            'Was tun': 'Version notieren',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Regionale Aspekte',
        content: [
          '**DACH und EU:** Inferenz auf dem Gerät kann vermeiden, dass Prompts an einen KI-Anbieter gehen. Das allein macht die Verarbeitung nicht DSGVO-konform; Rechtsgrundlage, Sicherheit, Löschfristen und weitere Pflichten bleiben.',
          '**Andere Länder:** Gesetze wie das APPI in Japan, das PIPL in China oder das LGPD in Brasilien haben eigene Anforderungen. Ein Modell auf dem Handy erfüllt sie nicht automatisch.',
          '**Vor dem beruflichen Einsatz:** Prüfen Sie App-Analysen, Absturzberichte, Cloud-Backups, Geräteverwaltung und Firmenregeln. Dies sind allgemeine Informationen, keine Rechtsberatung. Für öffentliche oder gewerbliche Dienste ist eine eigene rechtliche Prüfung nötig.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Beste Anwendungsfälle für mobile LLMs',
        content: [
          '**Kleine Modelle auf dem Gerät passen zu begrenzten Aufgaben, bei denen Offline-Zugriff wichtiger ist als beste Antwortqualität.**',
        ],
        items: [
          '**Offline-Fragen:** Ideen entwerfen oder einfache Fragen stellen und Fakten später prüfen.',
          '**Notizen:** eigene Notizen kürzen oder umformulieren. Prüfen Sie, wo die App Chats speichert und ob sie gesichert werden.',
          '**Kleine Code-Fragen:** kurze Ausschnitte erklären lassen und jeden Code testen.',
          '**Sprachübung:** einfache Dialoge üben; mit Fehlern rechnen.',
          '**Sensible Arbeitsdaten:** nur mit Freigabe Ihrer Organisation. Lokale Verarbeitung allein bedeutet keine Compliance.',
          '**Tagebuch:** Schreibimpulse erhalten; bei privaten Inhalten Berechtigungen und Backups prüfen.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Einschränkungen, die Sie kennen sollten',
        items: [
          '**Speicher:** Ein Modell braucht mehr Speicher als seine Dateigröße, langer Kontext noch mehr. Reicht er nicht, kann die App schließen.',
          '**Akku:** Texterzeugung kostet Energie. Messen Sie auf dem eigenen Gerät; wir nennen keine Laufzeiten.',
          '**Wärme:** In langen Sitzungen kann das Gerät langsamer werden. Hören Sie auf, wenn es unangenehm heiß wird.',
          '**Qualität:** Kleine Modelle können Falsches überzeugend behaupten und scheitern an komplexen Aufgaben.',
          '**Nichts Kritisches:** Verlassen Sie sich nicht auf sie bei medizinischen, rechtlichen oder finanziellen Entscheidungen.',
          '**Speicherplatz:** Jedes Modell belegt Platz; löschen Sie ungenutzte.',
        ],
      },
      future: {
        id: 'future',
        title: 'Wann werden mobile LLMs praktisch?',
        content: [
          '**Wir sagen keine Modellgrößen oder Geschwindigkeiten künftiger Handys voraus.** Für ein Datum fehlt eine belastbare Grundlage.',
          '**Darauf achten:** neue App-Versionen, unterstützte Modelle und Googles On-Device-APIs.',
          '**So entscheiden Sie:** Wiederholen Sie nach Updates denselben kurzen Test und vergleichen Sie Antworten, Ladezeit und Akkuverbrauch.',
          '**Wenn das Handy nicht reicht:** Betreiben Sie das Modell auf einem Computer und verbinden Sie sich sicher. Ein Mac mini M5 Pro kostet ab 1.699 $ mit 24 GB; die 64-GB-Konfiguration ab 2.699 $ (US-Listenpreise). Siehe [Hardware-Leitfaden](/de/local-llms/local-llm-hardware-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Kann ich ein lokales LLM auf dem iPhone nutzen?',
            a: 'Oft ja, mit einem kleinen Modell. PocketPal AI, MLC Chat und Private LLM bieten iPhone-Apps. Ob ein Modell lädt und gut läuft, hängt von Ihrem iPhone ab; beginnen Sie klein.',
          },
          {
            q: 'Welche Android-Handys können ein lokales LLM ausführen?',
            a: 'Eine verlässliche Einheitsliste gibt es nicht. Freier Speicher, Chip, Android-Version und App-Unterstützung zählen. Installieren Sie eine App aus offizieller Quelle und testen Sie zuerst 1B.',
          },
          {
            q: 'Gibt es eine offizielle Ollama-App fürs Handy?',
            a: 'Die Download-Seite von Ollama nennt macOS, Linux und Windows, nicht iOS oder Android. Handy-Clients von Drittanbietern verbinden sich mit Ollama auf einem Computer.',
          },
          {
            q: 'MLC Chat oder PocketPal AI?',
            a: 'Nehmen Sie die App, die Ihr Modell und Gerät unterstützt. PocketPal AI führt GGUF-Modelle auf iOS und Android aus. MLC Chat nutzt für MLC LLM vorbereitete Modelle. Das Tempo haben wir nicht verglichen.',
          },
          {
            q: 'Können Android-Apps Gemini Nano nutzen?',
            a: 'Google dokumentiert ML-Kit-GenAI-APIs, mit denen Entwickler Gemini Nano über AICore auf unterstützten Geräten nutzen. Die Unterstützung variiert je nach Funktion und Gerät.',
          },
          {
            q: 'Belastet ein lokales LLM den Akku?',
            a: 'Texterzeugung kostet Energie und kann das Gerät erwärmen. Wie stark, hängt von Handy, App und Modell ab. PromptQuorum hat keine Laufzeiten gemessen.',
          },
          {
            q: 'Sind meine Daten mit einem lokalen Modell privat?',
            a: 'Bei der Inferenz können Prompts auf dem Gerät bleiben, Apps können aber Analysen, Backups, Websuche oder Cloud-Funktionen nutzen. Lesen Sie die Datenschutzangaben und prüfen Sie die Einstellungen.',
          },
          {
            q: 'Kann ein Handy ein 70B-Modell ausführen?',
            a: 'Ein 70B-Modell in Q4 hat etwa 43 GB ohne Kontextspeicher, mehr als ein typisches Handy im Arbeitsspeicher halten kann. Nutzen Sie einen passenden Computer oder gemieteten Server.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Lokaler LLM Hardware-Leitfaden](/de/local-llms/local-llm-hardware-guide)',
          '[Beste lokale LLM-Frontends](/de/local-llms/best-local-llm-frontends)',
          '[Laptop vs Desktop lokale LLM](/de/local-llms/laptop-vs-desktop-local-llm)',
          '[Beste kleine lokale LLMs unter 4 GB](/de/prompt-bites/best-ollama-models-4gb-vram)',
          '[Wie man Ollama installiert](/de/local-llms/how-to-install-ollama)',
          '[Top Open-Source-Modelle für Ollama](/de/local-llms/top-open-source-models-ollama)',
          '[Apples On-Device-KI vs. lokale LLMs](/de/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PocketPal-AI-Repository: Plattformen, Lizenz und Formate](https://github.com/a-ghorbani/pocketpal-ai)',
          '[MLC-LLM-Anleitung für iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[MLC-LLM-Anleitung für Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Download-Seite von Ollama](https://ollama.com/download)',
          '[Downloadgrößen von Llama 3.2 in der Ollama-Bibliothek](https://ollama.com/library/llama3.2/tags)',
          '[Google ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale LLMs auf dem Handy 2026: Offline-KI auf iPhone und Android',
      description: 'Lokales LLM auf iPhone oder Android: PocketPal AI, MLC Chat und Private LLM, Modellgrößen, warum Ollama einen Computer braucht und echte Grenzen (2026).',
      url: 'https://www.promptquorum.com/de/local-llms/mobile-local-llms',
      inLanguage: 'de',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Entwickler und Mobilnutzer, die Offline-KI und On-Device-Inferenz für iOS und Android prüfen',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann ich ein lokales LLM auf dem iPhone nutzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oft ja, mit einem kleinen Modell. PocketPal AI, MLC Chat und Private LLM bieten iPhone-Apps. Ob ein Modell lädt und gut läuft, hängt von Ihrem iPhone ab; beginnen Sie klein.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Android-Handys können ein lokales LLM ausführen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine verlässliche Einheitsliste gibt es nicht. Freier Speicher, Chip, Android-Version und App-Unterstützung zählen. Installieren Sie eine App aus offizieller Quelle und testen Sie zuerst 1B.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gibt es eine offizielle Ollama-App fürs Handy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Download-Seite von Ollama nennt macOS, Linux und Windows, nicht iOS oder Android. Handy-Clients von Drittanbietern verbinden sich mit Ollama auf einem Computer.',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC Chat oder PocketPal AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nehmen Sie die App, die Ihr Modell und Gerät unterstützt. PocketPal AI führt GGUF-Modelle auf iOS und Android aus. MLC Chat nutzt für MLC LLM vorbereitete Modelle. Das Tempo haben wir nicht verglichen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Können Android-Apps Gemini Nano nutzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google dokumentiert ML-Kit-GenAI-APIs, mit denen Entwickler Gemini Nano über AICore auf unterstützten Geräten nutzen. Die Unterstützung variiert je nach Funktion und Gerät.',
          },
        },
        {
          '@type': 'Question',
          name: 'Belastet ein lokales LLM den Akku?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Texterzeugung kostet Energie und kann das Gerät erwärmen. Wie stark, hängt von Handy, App und Modell ab. PromptQuorum hat keine Laufzeiten gemessen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sind meine Daten mit einem lokalen Modell privat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bei der Inferenz können Prompts auf dem Gerät bleiben, Apps können aber Analysen, Backups, Websuche oder Cloud-Funktionen nutzen. Lesen Sie die Datenschutzangaben und prüfen Sie die Einstellungen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ein Handy ein 70B-Modell ausführen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein 70B-Modell in Q4 hat etwa 43 GB ohne Kontextspeicher, mehr als ein typisches Handy im Arbeitsspeicher halten kann. Nutzen Sie einen passenden Computer oder gemieteten Server.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Apps, um Modelle mit Handy oder Tablet zu nutzen',
      numberOfItems: 4,
      inLanguage: 'de',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'LLM local sur mobile en 2026 : l’IA hors ligne sur iPhone et Android',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-fr.webp',
    seoTitle: 'LLM local sur iPhone ou Android : guide 2026',
    intro: '**De nombreux téléphones et tablettes récents peuvent exécuter un petit modèle de langage directement sur l’appareil.** Ce guide présente les applications, la taille des modèles, la différence entre MLC Chat et Ollama et les limites à prévoir. PromptQuorum n’a pas testé de téléphones : cette page ne donne aucun chiffre de vitesse ou d’autonomie.',
    metaDescription: 'LLM local sur iPhone ou Android : PocketPal AI, MLC Chat et Private LLM, taille des modèles, pourquoi Ollama exige un ordinateur, et limites (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Oui, beaucoup de téléphones récents peuvent exécuter un petit modèle hors ligne. Commencez par un modèle 1B (Llama 3.2 1B pèse 1.3 Go dans la bibliothèque Ollama ; les versions d’applications diffèrent), puis essayez le 3B (2.0 Go) si l’appareil suit. Vitesse, chauffe et batterie dépendent du téléphone, de l’application et du modèle.**',
    audience: 'Développeurs et utilisateurs mobiles qui évaluent l’IA hors ligne sur iOS et Android',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mobile LLM',
    toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Faits rapides', anchor: '#quick-facts' },
        { label: 'Ce qui fonctionne vraiment sur mobile (2026)', anchor: '#what-works' },
        { label: 'Quel matériel mobile pour les LLM locaux ?', anchor: '#hardware' },
        { label: 'Meilleurs setups actuels : apps et frameworks', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama : comparaison Android', anchor: '#mlc-vs-ollama' },
        { label: 'Mobile vs portable vs mini PC', anchor: '#mobile-comparison' },
        { label: 'Quelle vitesse : LLM mobiles vs bureau ?', anchor: '#performance' },
        { label: 'Meilleurs cas d\'usage pour LLM mobiles', anchor: '#use-cases' },
        { label: 'Limitations à connaître', anchor: '#limitations' },
        { label: 'Quand les LLM mobiles deviendront-ils pratiques ?', anchor: '#future' },
        { label: 'Considérations régionales', anchor: '#regional-context' },
        { label: 'Questions fréquentes', anchor: '#faq' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'De nombreux téléphones et tablettes récents peuvent exécuter un petit modèle sur l’appareil ; vitesse et stabilité dépendent du matériel, de l’application et du modèle.',
          },
          {
            type: 'plain-terms',
            text: 'Une fois l’application et le modèle téléchargés, le téléphone peut répondre sans connexion, mais un petit modèle se trompe plus qu’un grand.',
          },
        ],
        items: [
          '**C’est possible :** commencez par un petit modèle d’environ 1 à 3 milliards de paramètres.',
          '**Applications :** PocketPal AI (iOS et Android), MLC Chat et Private LLM (appareils Apple).',
          '**Ollama :** sa page de téléchargement cite macOS, Linux et Windows, pas d’application mobile.',
          '**Limites :** mémoire libre, chauffe, batterie et qualité du modèle. Nous ne les avons pas mesurées.',
          '**Confidentialité :** l’inférence locale ne règle pas à elle seule autorisations, sauvegardes ou obligations légales.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Llama 3.2 1B :** environ 1.3 Go dans la [bibliothèque Ollama](https://ollama.com/library/llama3.2/tags) ; d’autres formats diffèrent',
          '**Llama 3.2 3B :** environ 2.0 Go au même endroit ; l’exécution demande plus de mémoire que la taille du fichier',
          '**PocketPal AI :** application sous licence MIT pour iOS et Android qui exécute des modèles GGUF ([dépôt](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat :** sur l’[App Store](https://llm.mlc.ai/docs/deploy/ios.html) pour iOS ; le [guide Android](https://llm.mlc.ai/docs/deploy/android.html) propose un APK de démonstration',
          '**Vitesse et batterie :** non mesurées par PromptQuorum',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'Ce qui fonctionne vraiment sur mobile (2026)',
        content: [
          '**Tâches courtes :** questions simples, reformulation de quelques phrases et résumés courts sont de bons premiers tests.',
          '**Taille du modèle :** commencez par 1B. Passez à 3B ou plus seulement si l’application le charge et reste stable.',
          '**Mémoire :** le système et les autres applications partagent la RAM ; toute la mémoire annoncée n’est pas disponible.',
          '**À moins attendre :** longs documents, code complexe et raisonnement exigeant. Vérifiez toute réponse importante.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel mobile pour les LLM locaux en 2026 ?',
        content: [
          '**Il n’existe pas de téléphone minimal unique.** Mémoire libre, puce, système et version de l’application déterminent ce qui se charge. Le tableau donne un ordre de test, pas une garantie de compatibilité.',
        ],
        columns: ['Votre appareil', 'Premier modèle', 'Téléchargement', 'À vérifier ensuite'],
        rows: [
          {
            'Votre appareil': 'Ancien, peu de mémoire',
            'Premier modèle': 'Llama 3.2 1B',
            'Téléchargement': 'Environ 1.3 Go',
            'À vérifier ensuite': 'Se charge-t-il et tient-il ?',
          },
          {
            'Votre appareil': 'Haut de gamme récent',
            'Premier modèle': 'Llama 3.2 3B',
            'Téléchargement': 'Environ 2.0 Go',
            'À vérifier ensuite': 'Vitesse, chauffe, batterie',
          },
          {
            'Votre appareil': 'Tablette plus dotée',
            'Premier modèle': 'Llama 3.2 3B ou plus',
            'Téléchargement': '2.0 Go ou plus',
            'À vérifier ensuite': 'Stabilité en longue session',
          },
        ],
        note: 'Les tailles viennent de la bibliothèque Ollama et ne sont qu’un repère ; les fichiers des applications mobiles peuvent différer.',
      },
      apps: {
        id: 'apps',
        title: 'Meilleurs setups actuels : apps et frameworks',
        columns: ['Application', 'Plateformes', 'Fonction', 'Coût / source'],
        rows: [
          {
            Application: '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            Plateformes: 'iOS, Android',
            Fonction: 'Exécute des modèles GGUF',
            'Coût / source': 'Licence MIT',
          },
          {
            Application: '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            Plateformes: 'iOS ; APK démo Android',
            Fonction: 'Application du projet MLC LLM',
            'Coût / source': 'Gratuite sur l’App Store',
          },
          {
            Application: '[Private LLM](https://privatellm.app)',
            Plateformes: 'iPhone, iPad, Mac',
            Fonction: 'Hors ligne après téléchargement',
            'Coût / source': 'Achat unique',
          },
          {
            Application: '[Ollama](https://ollama.com/download)',
            Plateformes: 'macOS, Linux, Windows',
            Fonction: 'Moteur pour ordinateurs',
            'Coût / source': 'Aucune app mobile citée',
          },
        ],
        note: 'Fonctions, disponibilité et prix évoluent. Consultez la fiche du store et les informations de confidentialité avant d’installer. Nous n’avons pas testé ces applications pour cette page.',
      },
      frameworks: {
        id: 'frameworks',
        title: 'Quels frameworks pour le développement LLM mobile ?',
        content: [
          '**llama.cpp :** le [moteur open source](https://github.com/ggml-org/llama.cpp) des modèles GGUF ; PocketPal AI l’utilise pour les modèles de langage.',
          '**MLC LLM :** compile et exécute des modèles sur plusieurs plateformes, dont [iOS](https://llm.mlc.ai/docs/deploy/ios.html) et [Android](https://llm.mlc.ai/docs/deploy/android.html).',
          '**Modèle système Android :** les [API ML Kit GenAI](https://developers.google.com/ml-kit/genai) de Google permettent aux développeurs d’utiliser Gemini Nano via AICore sur les appareils pris en charge.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama : comparaison de l\'inférence Android sur l\'appareil',
        content: [
          '**La différence tient au lieu d’exécution.** MLC Chat exécute le modèle sur le téléphone. La page de téléchargement d’Ollama ne cite que des ordinateurs ; un téléphone peut l’utiliser via une application cliente tierce reliée à un ordinateur.',
          '**Sur Android :** le guide Android de MLC propose un APK de démonstration conçu pour le Samsung S23 et ne mentionne pas Google Play. Installer un APK hors store comporte des risques : passez uniquement par les liens officiels du projet.',
        ],
        columns: ['Critère', 'MLC Chat', 'Ollama avec client mobile'],
        rows: [
          {
            'Critère': 'Lieu d’exécution',
            'MLC Chat': 'Sur le téléphone',
            'Ollama avec client mobile': 'Sur votre ordinateur',
          },
          {
            'Critère': 'Hors de votre réseau',
            'MLC Chat': 'Oui, après téléchargement',
            'Ollama avec client mobile': 'Accès à l’ordinateur requis',
          },
          {
            'Critère': 'À installer',
            'MLC Chat': 'App MLC Chat ou APK',
            'Ollama avec client mobile': 'Ollama et une app cliente',
          },
          {
            'Critère': 'Mémoire limitante',
            'MLC Chat': 'Celle du téléphone',
            'Ollama avec client mobile': 'Celle de l’ordinateur',
          },
          {
            'Critère': 'La vitesse dépend de',
            'MLC Chat': 'Téléphone et modèle',
            'Ollama avec client mobile': 'Ordinateur, modèle, réseau',
          },
        ],
        note: 'N’exposez pas un serveur Ollama directement sur l’internet public. Utilisez un réseau de confiance ou une connexion privée sécurisée.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'Mobile vs portable vs mini PC : que choisir ?',
        content: [
          '**Le téléphone est le plus portable ; un ordinateur offre généralement plus de marge en mémoire et en refroidissement.**',
        ],
        columns: ['Facteur', 'Téléphone', 'Portable', 'Mini PC'],
        rows: [
          {
            Facteur: 'Marge pour le modèle',
            'Téléphone': 'Petits modèles',
            Portable: 'Selon la mémoire',
            'Mini PC': 'Selon la mémoire',
          },
          {
            Facteur: 'Portabilité',
            'Téléphone': 'Poche',
            Portable: 'Sac',
            'Mini PC': 'Plutôt fixe',
          },
          {
            Facteur: 'Énergie',
            'Téléphone': 'Batterie, chauffe',
            Portable: 'Batterie ou secteur',
            'Mini PC': 'Secteur',
          },
          {
            Facteur: 'Coût en plus',
            'Téléphone': 'Aucun si le mobile suffit',
            Portable: 'Selon le modèle',
            'Mini PC': 'Selon le modèle',
          },
          {
            Facteur: 'Adapté à',
            'Téléphone': 'Courtes tâches hors ligne',
            Portable: 'Travail nomade',
            'Mini PC': 'Serveur maison/bureau',
          },
        ],
        note: 'Le [guide des mini PC](/fr/local-llms/best-mini-pcs-local-llm) présente des machines pouvant servir des modèles à votre téléphone.',
      },
      performance: {
        id: 'performance',
        title: 'Quelle vitesse : LLM mobiles vs bureau ?',
        content: [
          '**Le nom du téléphone ne suffit pas à prédire la vitesse.** Bande passante mémoire, puce, taille, quantification, version de l’application et température comptent. Nous ne publions aucun chiffre mobile, faute de mesures.',
        ],
        columns: ['Facteur', 'Effet', 'Que faire'],
        rows: [
          {
            Facteur: 'Taille du modèle',
            Effet: 'Plus grand, souvent plus lent',
            'Que faire': 'Commencer petit',
          },
          {
            Facteur: 'Quantification',
            Effet: 'Change taille et qualité',
            'Que faire': 'Comparer les réponses',
          },
          {
            Facteur: 'Chaleur',
            Effet: 'Peut ralentir',
            'Que faire': 'Tester une longue session',
          },
          {
            Facteur: 'App et version',
            Effet: 'Moteurs différents',
            'Que faire': 'Noter la version testée',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Considérations régionales',
        content: [
          '**UE :** l’inférence sur l’appareil peut éviter d’envoyer les prompts à un fournisseur d’IA. Cela ne suffit pas à rendre le traitement conforme au RGPD : base légale, sécurité, conservation et autres obligations demeurent.',
          '**Autres pays :** l’APPI japonaise, la PIPL chinoise ou la LGPD brésilienne ont leurs propres conditions. Exécuter un modèle sur un téléphone ne les règle pas.',
          '**Avant un usage professionnel :** vérifiez statistiques d’usage, rapports de plantage, sauvegardes cloud, gestion des appareils et règles de l’employeur. Information générale, et non un conseil juridique. Un service public ou commercial demande un examen juridique distinct.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Meilleurs cas d\'usage pour les LLM mobiles',
        content: [
          '**Les petits modèles embarqués conviennent à des tâches limitées où l’accès hors ligne prime sur la meilleure qualité.**',
        ],
        items: [
          '**Questions hors ligne :** chercher des idées ou poser des questions simples, puis vérifier les faits.',
          '**Notes :** raccourcir ou reformuler vos notes. Vérifiez où l’application conserve les conversations et si elles sont sauvegardées.',
          '**Petites questions de code :** faire expliquer un court extrait et tester tout code.',
          '**Langues :** répéter des dialogues simples, avec des erreurs possibles.',
          '**Données professionnelles sensibles :** uniquement avec l’accord de votre organisation. Le traitement local seul ne vaut pas conformité.',
          '**Journal personnel :** obtenir des pistes d’écriture ; vérifier autorisations et sauvegardes.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitations à connaître',
        items: [
          '**Mémoire :** un modèle demande plus que la taille de son fichier, et un long contexte davantage. L’application peut se fermer.',
          '**Batterie :** la génération consomme de l’énergie. Mesurez sur votre appareil ; nous ne publions pas d’autonomie.',
          '**Chauffe :** le téléphone peut ralentir lors de longues sessions. Arrêtez s’il devient trop chaud.',
          '**Qualité :** les petits modèles peuvent affirmer des erreurs avec assurance et peinent sur les tâches complexes.',
          '**Pas de décisions critiques :** ne vous y fiez pas pour des décisions médicales, juridiques ou financières.',
          '**Stockage :** chaque modèle occupe de la place ; supprimez ceux que vous n’utilisez pas.',
        ],
      },
      future: {
        id: 'future',
        title: 'Quand les LLM mobiles deviendront-ils pratiques ?',
        content: [
          '**Nous ne prévoyons ni tailles ni vitesses pour les futurs téléphones.** Aucune base fiable ne permet de donner une date.',
          '**À suivre :** nouvelles versions d’applications, modèles pris en charge et API embarquées de Google.',
          '**Pour décider :** refaites le même court test après les mises à jour et comparez réponses, chargement et batterie.',
          '**Si le téléphone ne suffit pas :** faites tourner le modèle sur un ordinateur avec une connexion sécurisée. Un Mac mini M5 Pro démarre à 1 699 $ avec 24 Go ; la version 64 Go à 2 699 $ (prix américains). Voir le [guide matériel](/fr/local-llms/local-llm-hardware-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je exécuter un LLM local sur mon iPhone ?',
            a: 'Souvent oui, avec un petit modèle. PocketPal AI, MLC Chat et Private LLM existent sur iPhone. Le chargement et la fluidité dépendent de votre appareil : commencez petit.',
          },
          {
            q: 'Quels téléphones Android conviennent ?',
            a: 'Il n’y a pas de liste unique fiable. Mémoire libre, puce, version d’Android et prise en charge par l’application comptent. Installez depuis la source officielle et essayez d’abord un modèle 1B.',
          },
          {
            q: 'Existe-t-il une application Ollama officielle sur mobile ?',
            a: 'La page de téléchargement d’Ollama cite macOS, Linux et Windows, ni iOS ni Android. Des clients mobiles tiers se connectent à Ollama sur un ordinateur.',
          },
          {
            q: 'MLC Chat ou PocketPal AI ?',
            a: 'Prenez celle qui prend en charge votre modèle et votre appareil. PocketPal AI exécute des modèles GGUF sur iOS et Android. MLC Chat utilise des modèles préparés pour MLC LLM. Nous n’avons pas comparé leur vitesse.',
          },
          {
            q: 'Les applications Android peuvent-elles utiliser Gemini Nano ?',
            a: 'Google documente des API ML Kit GenAI qui permettent d’utiliser Gemini Nano via AICore sur les appareils pris en charge. La prise en charge varie selon la fonction et l’appareil.',
          },
          {
            q: 'Un LLM local vide-t-il la batterie ?',
            a: 'La génération consomme de l’énergie et peut chauffer l’appareil. L’ampleur dépend du téléphone, de l’application et du modèle. PromptQuorum n’a pas mesuré d’autonomie.',
          },
          {
            q: 'Mes données restent-elles privées ?',
            a: 'Les prompts peuvent rester sur l’appareil pendant l’inférence, mais une application peut utiliser statistiques, sauvegardes, recherche web ou fonctions cloud. Lisez sa politique et vérifiez les réglages.',
          },
          {
            q: 'Un téléphone peut-il exécuter un modèle 70B ?',
            a: 'Un modèle 70B en Q4 pèse environ 43 Go hors contexte, plus que ce qu’un téléphone courant peut charger en mémoire. Utilisez un ordinateur adapté ou un serveur loué.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide)',
          '[Meilleures interfaces LLM locaux](/fr/local-llms/best-local-llm-frontends)',
          '[Laptop vs Desktop LLM local](/fr/local-llms/laptop-vs-desktop-local-llm)',
          '[Meilleurs petits LLM locaux sous 4 Go](/fr/prompt-bites/best-ollama-models-4gb-vram)',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama)',
          '[Meilleurs modèles open source pour Ollama](/fr/local-llms/top-open-source-models-ollama)',
          '[L’IA embarquée d’Apple face aux LLM locaux](/fr/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dépôt PocketPal AI : plateformes, licence et formats](https://github.com/a-ghorbani/pocketpal-ai)',
          '[Guide MLC LLM pour iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[Guide MLC LLM pour Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Page de téléchargement d’Ollama](https://ollama.com/download)',
          '[Tailles de Llama 3.2 dans la bibliothèque Ollama](https://ollama.com/library/llama3.2/tags)',
          '[API Google ML Kit GenAI](https://developers.google.com/ml-kit/genai)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM local sur mobile en 2026 : l’IA hors ligne sur iPhone et Android',
      description: 'LLM local sur iPhone ou Android : PocketPal AI, MLC Chat et Private LLM, taille des modèles, pourquoi Ollama exige un ordinateur, et limites (2026).',
      url: 'https://www.promptquorum.com/fr/local-llms/mobile-local-llms',
      inLanguage: 'fr',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Développeurs et utilisateurs mobiles qui évaluent l’IA hors ligne sur iOS et Android',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Puis-je exécuter un LLM local sur mon iPhone ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Souvent oui, avec un petit modèle. PocketPal AI, MLC Chat et Private LLM existent sur iPhone. Le chargement et la fluidité dépendent de votre appareil : commencez petit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels téléphones Android conviennent ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il n’y a pas de liste unique fiable. Mémoire libre, puce, version d’Android et prise en charge par l’application comptent. Installez depuis la source officielle et essayez d’abord un modèle 1B.',
          },
        },
        {
          '@type': 'Question',
          name: 'Existe-t-il une application Ollama officielle sur mobile ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La page de téléchargement d’Ollama cite macOS, Linux et Windows, ni iOS ni Android. Des clients mobiles tiers se connectent à Ollama sur un ordinateur.',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC Chat ou PocketPal AI ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prenez celle qui prend en charge votre modèle et votre appareil. PocketPal AI exécute des modèles GGUF sur iOS et Android. MLC Chat utilise des modèles préparés pour MLC LLM. Nous n’avons pas comparé leur vitesse.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les applications Android peuvent-elles utiliser Gemini Nano ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google documente des API ML Kit GenAI qui permettent d’utiliser Gemini Nano via AICore sur les appareils pris en charge. La prise en charge varie selon la fonction et l’appareil.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un LLM local vide-t-il la batterie ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La génération consomme de l’énergie et peut chauffer l’appareil. L’ampleur dépend du téléphone, de l’application et du modèle. PromptQuorum n’a pas mesuré d’autonomie.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes données restent-elles privées ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les prompts peuvent rester sur l’appareil pendant l’inférence, mais une application peut utiliser statistiques, sauvegardes, recherche web ou fonctions cloud. Lisez sa politique et vérifiez les réglages.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un téléphone peut-il exécuter un modèle 70B ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un modèle 70B en Q4 pèse environ 43 Go hors contexte, plus que ce qu’un téléphone courant peut charger en mémoire. Utilisez un ordinateur adapté ou un serveur loué.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Applications pour utiliser des modèles avec un téléphone ou une tablette',
      numberOfItems: 4,
      inLanguage: 'fr',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'スマホで動くローカルLLM 2026：iPhoneとAndroidのオフラインAI',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-ja.webp',
    seoTitle: 'iPhone・AndroidでローカルLLMを動かす（2026年版）',
    intro: '**最近のスマートフォンやタブレットの多くは、小さな言語モデルを端末上で実行できます。** このガイドでは、対応アプリ、モデルのサイズ、MLC ChatとOllamaの違い、想定すべき制限を説明します。PromptQuorumはスマートフォンを計測していないため、速度やバッテリーの数値は掲載しません。',
    metaDescription: 'iPhoneやAndroidでローカルLLMを使うには。PocketPal AI、MLC Chat、Private LLMの違い、モデルのダウンロードサイズ、Ollamaにパソコンが必要な理由、実際の制限を解説します（2026年版）。',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**はい、最近のスマートフォンの多くは小さなモデルをオフラインで実行できます。まず1Bモデル（OllamaライブラリのLlama 3.2 1Bは1.3GB。アプリ用のファイルは異なります）を試し、端末が耐えられれば3B（2.0GB）を試してください。速度、発熱、電池の減り方は端末、アプリ、モデルで変わります。**',
    audience: 'iOSとAndroidでのオフラインAIとオンデバイス推論を検討する開発者とモバイル利用者',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mobile LLM',
    toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '基本データ', anchor: '#quick-facts' },
        { label: 'モバイルで本当に使えるもの（2026年）', anchor: '#what-works' },
        { label: 'ローカルLLMを実行できるモバイルハードウェアは？', anchor: '#hardware' },
        { label: '最適なセットアップ：アプリとフレームワーク', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama：Android比較', anchor: '#mlc-vs-ollama' },
        { label: 'スマートフォン vs ノートPC vs ミニPC', anchor: '#mobile-comparison' },
        { label: 'モバイルLLMの速度 vs デスクトップ', anchor: '#performance' },
        { label: 'モバイルLLMの最適なユースケース', anchor: '#use-cases' },
        { label: '知っておくべき制限事項', anchor: '#limitations' },
        { label: 'モバイルLLMはいつ実用的になるか？', anchor: '#future' },
        { label: '地域別の考慮事項', anchor: '#regional-context' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: '出典', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '最近のスマートフォンやタブレットの多くは小さな言語モデルを端末上で実行でき、速度と安定性は機器、アプリ、モデルによって変わります。',
          },
          {
            type: 'plain-terms',
            text: 'アプリとモデルをダウンロードしておけば接続なしでも回答できますが、小さいモデルは大きいモデルより誤りが増えます。',
          },
        ],
        items: [
          '**動かせる場合があります：** まず約10億〜30億パラメータの小さいモデルから始めます。',
          '**アプリ：** PocketPal AI（iOS・Android）、MLC Chat、Private LLM（Apple製品）。',
          '**Ollama：** ダウンロードページはmacOS、Linux、Windowsのみで、スマホアプリは載っていません。',
          '**制限：** 空きメモリ、発熱、電池、モデルの品質。当サイトは計測していません。',
          '**プライバシー：** ローカル推論だけでは、アプリの権限、バックアップ、法的義務の問題は解決しません。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本データ',
        items: [
          '**Llama 3.2 1B：** [Ollamaライブラリ](https://ollama.com/library/llama3.2/tags)で約1.3GB。他の形式は異なります',
          '**Llama 3.2 3B：** 同ライブラリで約2.0GB。実行にはファイルサイズより多くのメモリが必要です',
          '**PocketPal AI：** GGUFモデルを実行するMITライセンスのiOS・Androidアプリ（[リポジトリ](https://github.com/a-ghorbani/pocketpal-ai)）',
          '**MLC Chat：** iOS版は[App Store](https://llm.mlc.ai/docs/deploy/ios.html)で配布。[Androidの手順](https://llm.mlc.ai/docs/deploy/android.html)にはデモ用APKがあります',
          '**速度と電池：** PromptQuorumは未計測です',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'モバイルで本当に使えるもの（2026年）',
        content: [
          '**短い作業：** 簡単な質問、数文の書き直し、短い要約が最初のテストに向いています。',
          '**モデルサイズ：** 1Bから始め、アプリで読み込めて安定する場合だけ3B以上にします。',
          '**メモリ：** OSや他のアプリもRAMを使うため、公称容量のすべてをモデルに使えるわけではありません。',
          '**期待を下げるべき用途：** 長い文書、複雑なコード、高度な推論。重要な回答は必ず確認してください。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '2026年にローカルLLMを実行できるモバイルハードウェアは？',
        content: ['**一律の最低機種はありません。** 空きメモリ、チップ、OS、アプリのバージョンで読み込めるモデルが決まります。表は試す順番の目安で、動作保証ではありません。'],
        columns: ['お使いの端末', '最初に試すモデル', 'サイズ', '次に確認'],
        rows: [
          {
            'お使いの端末': '古い・メモリが少ない端末',
            '最初に試すモデル': 'Llama 3.2 1B',
            'サイズ': '約1.3GB',
            '次に確認': '読み込めて落ちないか',
          },
          {
            'お使いの端末': '最近の上位スマホ',
            '最初に試すモデル': 'Llama 3.2 3B',
            'サイズ': '約2.0GB',
            '次に確認': '速度・発熱・電池',
          },
          {
            'お使いの端末': 'メモリの多いタブレット',
            '最初に試すモデル': 'Llama 3.2 3B以上',
            'サイズ': '2.0GB以上',
            '次に確認': '長い会話での安定性',
          },
        ],
        note: 'サイズはOllamaライブラリの値で目安です。モバイルアプリがダウンロードするファイルは異なる場合があります。',
      },
      apps: {
        id: 'apps',
        title: '最適なセットアップ：アプリとフレームワーク',
        columns: ['アプリ', '対応環境', '内容', '費用・出典'],
        rows: [
          {
            'アプリ': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            '対応環境': 'iOS・Android',
            '内容': 'GGUFモデルを端末で実行',
            '費用・出典': 'MITライセンス',
          },
          {
            'アプリ': '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            '対応環境': 'iOS／AndroidデモAPK',
            '内容': 'MLC LLMのチャットアプリ',
            '費用・出典': 'App Storeで無料',
          },
          {
            'アプリ': '[Private LLM](https://privatellm.app)',
            '対応環境': 'iPhone・iPad・Mac',
            '内容': 'モデル取得後はオフライン',
            '費用・出典': '買い切り',
          },
          {
            'アプリ': '[Ollama](https://ollama.com/download)',
            '対応環境': 'macOS・Linux・Windows',
            '内容': 'パソコン向け実行環境',
            '費用・出典': 'スマホアプリの記載なし',
          },
        ],
        note: '機能、配布状況、価格は変わります。インストール前にストアのページとプライバシー情報を確認してください。このページのためのアプリテストは行っていません。',
      },
      frameworks: {
        id: 'frameworks',
        title: 'モバイルLLM開発を支援するフレームワークは？',
        content: [
          '**llama.cpp：** GGUFモデル向けの[オープンソースエンジン](https://github.com/ggml-org/llama.cpp)で、PocketPal AIは言語モデルに使っています。',
          '**MLC LLM：** [iOS](https://llm.mlc.ai/docs/deploy/ios.html)や[Android](https://llm.mlc.ai/docs/deploy/android.html)など複数の環境でモデルをコンパイルして実行します。',
          '**Androidのシステムモデル：** Googleの[ML Kit GenAI API](https://developers.google.com/ml-kit/genai)により、開発者は対応端末でAICore経由のGemini Nanoを利用できます。',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama：Android オンデバイス推論の比較',
        content: [
          '**違いはモデルが動く場所です。** MLC Chatはスマホ上でモデルを実行します。Ollamaのダウンロードページはパソコンのみで、スマホからは、パソコンに接続するサードパーティ製クライアントアプリで利用します。',
          '**Androidでの導入：** MLCのAndroid手順にはSamsung S23向けのデモ用APKがあり、Google Playの記載はありません。ストア外のAPK導入にはリスクがあるため、公式リンクからのみ入手してください。',
        ],
        columns: ['比較項目', 'MLC Chat', 'Ollama＋スマホ用クライアント'],
        rows: [
          {
            '比較項目': 'モデルが動く場所',
            'MLC Chat': 'スマホ',
            'Ollama＋スマホ用クライアント': '自分のパソコン',
          },
          {
            '比較項目': '外出先で使えるか',
            'MLC Chat': 'モデル取得後は可能',
            'Ollama＋スマホ用クライアント': 'パソコンへの接続が必要',
          },
          {
            '比較項目': 'インストールするもの',
            'MLC Chat': 'MLC ChatアプリかAPK',
            'Ollama＋スマホ用クライアント': 'Ollamaとクライアント',
          },
          {
            '比較項目': '制限になるメモリ',
            'MLC Chat': 'スマホ側',
            'Ollama＋スマホ用クライアント': 'パソコン側',
          },
          {
            '比較項目': '速度を左右するもの',
            'MLC Chat': 'スマホとモデル',
            'Ollama＋スマホ用クライアント': 'パソコン・モデル・回線',
          },
        ],
        note: 'Ollamaサーバーをインターネットに直接公開しないでください。信頼できるネットワークか、安全に構成した専用接続を使ってください。',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'スマートフォン vs ノートPC vs ミニPC：どれを使うべきか？',
        content: ['**スマホは最も持ち運びやすく、パソコンは一般にメモリと冷却の余裕があります。**'],
        columns: ['要素', 'スマートフォン', 'ノートPC', 'ミニPC'],
        rows: [
          {
            '要素': '扱えるモデル',
            'スマートフォン': '小型モデル',
            'ノートPC': 'メモリ次第',
            'ミニPC': 'メモリ次第',
          },
          {
            '要素': '携帯性',
            'スマートフォン': 'ポケット',
            'ノートPC': 'バッグ',
            'ミニPC': '主に据え置き',
          },
          {
            '要素': '電源',
            'スマートフォン': '電池・発熱あり',
            'ノートPC': '電池か電源',
            'ミニPC': '電源接続',
          },
          {
            '要素': '追加費用',
            'スマートフォン': '手持ちで足りれば不要',
            'ノートPC': '機種による',
            'ミニPC': '機種による',
          },
          {
            '要素': '向く用途',
            'スマートフォン': '短いオフライン作業',
            'ノートPC': '外出先の作業',
            'ミニPC': '自宅や職場のサーバー',
          },
        ],
        note: 'スマホから使うモデル用のパソコンは[ミニPCガイド](/ja/local-llms/best-mini-pcs-local-llm)を参照してください。',
      },
      performance: {
        id: 'performance',
        title: 'モバイルLLMの速度 vs デスクトップ',
        content: [
          '**機種名だけでは速度を予測できません。** メモリ帯域、チップ、モデルサイズ、量子化、アプリのバージョン、温度が影響します。計測していないため、スマホの速度値は掲載しません。',
        ],
        columns: ['要素', '影響', '対処'],
        rows: [
          {
            '要素': 'モデルサイズ',
            '影響': '大きいほど遅くなりがち',
            '対処': '小さく始める',
          },
          {
            '要素': '量子化',
            '影響': 'サイズと品質が変わる',
            '対処': '回答を比べる',
          },
          {
            '要素': '発熱',
            '影響': '速度が落ちることも',
            '対処': '長めに試す',
          },
          {
            '要素': 'アプリと版',
            '影響': '実行方式が異なる',
            '対処': '版を記録する',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '地域別の考慮事項',
        content: [
          '**日本：** 端末上の推論は、プロンプトをAI事業者に送らずに済む場合があります。それだけで個人情報保護法に準拠することにはならず、利用目的、安全管理措置などの義務は残ります。',
          '**他の国と地域：** EUのGDPR、中国の個人情報保護法、ブラジルのLGPDなどには独自の要件があります。スマホで実行するだけでは満たせません。',
          '**業務利用の前に：** アプリの利用状況分析、クラッシュレポート、クラウドバックアップ、端末管理、社内規程を確認してください。これは一般的な情報で、法的助言ではありません。公開・商用サービスには別途の法的確認が必要です。',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'モバイルLLMの最適なユースケース',
        content: ['**端末上の小型モデルは、回答品質の高さよりオフライン利用が重要な限られた作業に向いています。**'],
        items: [
          '**オフラインの質問：** アイデア出しや簡単な質問に使い、事実は後で確認します。',
          '**メモ：** 自分のメモを短くしたり書き直したりします。会話の保存先とバックアップを確認してください。',
          '**短いコードの質問：** 短い断片の説明を求め、コードは必ず動作確認します。',
          '**語学練習：** 簡単な会話の練習に。誤りがある前提で使います。',
          '**機密の業務データ：** 所属組織の承認がある場合のみ。ローカル処理だけでは法令準拠になりません。',
          '**日記：** 書くきっかけを得られます。内容が私的な場合は権限とバックアップを確認してください。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '知っておくべき制限事項',
        items: [
          '**メモリ：** モデルにはファイルサイズ以上のメモリが必要で、長い文脈ではさらに増えます。不足するとアプリが終了することがあります。',
          '**電池：** 文章生成は電力を使います。自分の端末で確認してください。当サイトは稼働時間を掲載しません。',
          '**発熱：** 長時間使うと遅くなることがあります。熱くなりすぎたら中止してください。',
          '**品質：** 小型モデルは誤りを自信ありげに述べることがあり、複雑な作業は苦手です。',
          '**重要な判断に使わない：** 医療、法律、金融の判断を任せないでください。',
          '**保存容量：** モデルごとに容量を使います。使わないものは削除しましょう。',
        ],
      },
      future: {
        id: 'future',
        title: 'モバイルLLMはいつ実用的になるか？',
        content: [
          '**将来のスマホで扱えるモデルサイズや速度は予測しません。** 時期を示せる確かな根拠がないためです。',
          '**注目点：** アプリの更新、対応モデル、Googleの端末上API。',
          '**判断の方法：** 更新後に同じ短いテストを繰り返し、回答、読み込み時間、電池の減りを比べます。',
          '**スマホで足りない場合：** パソコンでモデルを動かして安全に接続します。Mac mini M5 Proは24GBが1,699ドルから、64GB構成が2,699ドルからです（米国定価）。[ハードウェアガイド](/ja/local-llms/local-llm-hardware-guide)も参照してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneでローカルLLMは使えますか？',
            a: '小さいモデルなら使えることが多いです。PocketPal AI、MLC Chat、Private LLMにiPhone版があります。読み込みと動作は機種次第なので、小さいモデルから始めてください。',
          },
          {
            q: 'どのAndroid端末で動きますか？',
            a: '信頼できる一律の一覧はありません。空きメモリ、チップ、Androidのバージョン、アプリの対応が関係します。公式の入手先から導入し、まず1Bを試してください。',
          },
          {
            q: 'スマホ向けの公式Ollamaアプリはありますか？',
            a: 'OllamaのダウンロードページにはmacOS、Linux、Windowsがあり、iOSとAndroidはありません。サードパーティ製のスマホ用クライアントは、パソコン上のOllamaに接続します。',
          },
          {
            q: 'MLC ChatとPocketPal AIはどちらを選ぶべきですか？',
            a: '使いたいモデルと端末に対応する方を選びます。PocketPal AIはiOSとAndroidでGGUFモデルを実行し、MLC ChatはMLC LLM向けに用意されたモデルを使います。速度は比較していません。',
          },
          {
            q: 'AndroidアプリはGemini Nanoを使えますか？',
            a: 'GoogleはML Kit GenAI APIを公開しており、開発者は対応端末でAICore経由のGemini Nanoを利用できます。対応状況は機能と端末で異なります。',
          },
          {
            q: 'ローカルLLMは電池を消耗しますか？',
            a: '文章生成は電力を使い、端末が温かくなることがあります。程度は端末、アプリ、モデルによります。PromptQuorumは稼働時間を計測していません。',
          },
          {
            q: 'ローカルモデルならデータは非公開ですか？',
            a: '推論中のプロンプトは端末内にとどめられますが、アプリが分析、バックアップ、ウェブ検索、クラウド機能を使うことがあります。プライバシー情報と設定を確認してください。',
          },
          {
            q: 'スマホで70Bモデルは動きますか？',
            a: '70BのQ4モデルはコンテキスト分を除いて約43GBで、一般的なスマホのメモリには収まりません。適切なパソコンやレンタルサーバーを使ってください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide)',
          '[最良のローカルLLMフロントエンド](/ja/local-llms/best-local-llm-frontends)',
          '[ラップトップ vs デスクトップ ローカルLLM](/ja/local-llms/laptop-vs-desktop-local-llm)',
          '[4 GB以下の最良小型ローカルLLM](/ja/prompt-bites/best-ollama-models-4gb-vram)',
          '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama)',
          '[Ollama向けトップオープンソースモデル](/ja/local-llms/top-open-source-models-ollama)',
          '[AppleのオンデバイスAIとローカルLLMの比較](/ja/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[PocketPal AIリポジトリ：対応環境、ライセンス、形式](https://github.com/a-ghorbani/pocketpal-ai)',
          '[MLC LLMのiOS向けガイド](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[MLC LLMのAndroid向けガイド](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Ollamaのダウンロードページ](https://ollama.com/download)',
          '[OllamaライブラリのLlama 3.2のサイズ](https://ollama.com/library/llama3.2/tags)',
          '[Google ML Kit GenAI API](https://developers.google.com/ml-kit/genai)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマホで動くローカルLLM 2026：iPhoneとAndroidのオフラインAI',
      description: 'iPhoneやAndroidでローカルLLMを使うには。PocketPal AI、MLC Chat、Private LLMの違い、モデルのダウンロードサイズ、Ollamaにパソコンが必要な理由、実際の制限を解説します（2026年版）。',
      url: 'https://www.promptquorum.com/ja/local-llms/mobile-local-llms',
      inLanguage: 'ja',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'iOSとAndroidでのオフラインAIとオンデバイス推論を検討する開発者とモバイル利用者',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'iPhoneでローカルLLMは使えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '小さいモデルなら使えることが多いです。PocketPal AI、MLC Chat、Private LLMにiPhone版があります。読み込みと動作は機種次第なので、小さいモデルから始めてください。',
          },
        },
        {
          '@type': 'Question',
          name: 'どのAndroid端末で動きますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '信頼できる一律の一覧はありません。空きメモリ、チップ、Androidのバージョン、アプリの対応が関係します。公式の入手先から導入し、まず1Bを試してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'スマホ向けの公式Ollamaアプリはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OllamaのダウンロードページにはmacOS、Linux、Windowsがあり、iOSとAndroidはありません。サードパーティ製のスマホ用クライアントは、パソコン上のOllamaに接続します。',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC ChatとPocketPal AIはどちらを選ぶべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '使いたいモデルと端末に対応する方を選びます。PocketPal AIはiOSとAndroidでGGUFモデルを実行し、MLC ChatはMLC LLM向けに用意されたモデルを使います。速度は比較していません。',
          },
        },
        {
          '@type': 'Question',
          name: 'AndroidアプリはGemini Nanoを使えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GoogleはML Kit GenAI APIを公開しており、開発者は対応端末でAICore経由のGemini Nanoを利用できます。対応状況は機能と端末で異なります。',
          },
        },
        {
          '@type': 'Question',
          name: 'ローカルLLMは電池を消耗しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '文章生成は電力を使い、端末が温かくなることがあります。程度は端末、アプリ、モデルによります。PromptQuorumは稼働時間を計測していません。',
          },
        },
        {
          '@type': 'Question',
          name: 'ローカルモデルならデータは非公開ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '推論中のプロンプトは端末内にとどめられますが、アプリが分析、バックアップ、ウェブ検索、クラウド機能を使うことがあります。プライバシー情報と設定を確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'スマホで70Bモデルは動きますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '70BのQ4モデルはコンテキスト分を除いて約43GBで、一般的なスマホのメモリには収まりません。適切なパソコンやレンタルサーバーを使ってください。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'スマホやタブレットでモデルを使うためのアプリ',
      numberOfItems: 4,
      inLanguage: 'ja',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '2026年手机本地大模型：在 iPhone 和安卓上离线使用 AI',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-zh.webp',
    seoTitle: '在 iPhone 或安卓上运行本地大模型（2026指南）',
    intro: '**许多近年的手机和平板可以直接在设备上运行小型语言模型。** 本指南介绍相关应用、模型体积、MLC Chat 与 Ollama 的区别以及需要预期的限制。PromptQuorum 未对手机做基准测试，因此本页不给出速度或续航数据。',
    metaDescription: '在 iPhone 或安卓手机上运行本地大模型：介绍 PocketPal AI、MLC Chat、Private LLM 三款应用，模型下载体积，为什么使用 Ollama 需要一台电脑，以及发热、内存、续航和回答质量方面需要预期的限制（2026年版指南）。',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**可以，许多近年的手机能离线运行小模型。先试 1B 模型（Ollama 模型库中的 Llama 3.2 1B 为 1.3 GB，应用版本体积可能不同），设备撑得住再试 3B（2.0 GB）。速度、发热和耗电取决于手机、应用和模型。**',
    audience: '评估 iOS 与安卓离线 AI 和端侧推理的开发者与手机用户',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mobile LLM',
    toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '基本数据', anchor: '#quick-facts' },
        { label: '移动端真正可用的方案（2026年）', anchor: '#what-works' },
        { label: '哪些移动硬件可以运行本地LLM？', anchor: '#hardware' },
        { label: '最佳配置方案：应用与框架', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama：Android对比', anchor: '#mlc-vs-ollama' },
        { label: '手机 vs 笔记本 vs 迷你PC', anchor: '#mobile-comparison' },
        { label: '移动端LLM vs 桌面速度对比', anchor: '#performance' },
        { label: '移动端LLM最佳使用场景', anchor: '#use-cases' },
        { label: '您需要了解的限制', anchor: '#limitations' },
        { label: '移动端LLM何时变得实用？', anchor: '#future' },
        { label: '地区考量', anchor: '#regional-context' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '来源', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '许多近年的手机和平板可以在设备上运行小型语言模型，速度和稳定性取决于硬件、应用和模型。',
          },
          {
            type: 'plain-terms',
            text: '应用和模型下载好后，手机无需联网就能回答，但小模型比大模型更容易出错。',
          },
        ],
        items: [
          '**可行：** 从约10亿到30亿参数的小模型开始。',
          '**应用：** PocketPal AI（iOS 和安卓）、MLC Chat、Private LLM（苹果设备）。',
          '**Ollama：** 下载页列出 macOS、Linux 和 Windows，没有手机应用。',
          '**限制：** 可用内存、发热、电量和模型质量。我们未做测量。',
          '**隐私：** 仅靠本地推理并不能解决应用权限、备份或法律义务问题。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本数据',
        items: [
          '**Llama 3.2 1B：** [Ollama 模型库](https://ollama.com/library/llama3.2/tags)中约 1.3 GB，其他格式不同',
          '**Llama 3.2 3B：** 同一模型库中约 2.0 GB，运行所需内存大于文件体积',
          '**PocketPal AI：** MIT 许可的 iOS 与安卓应用，运行 GGUF 模型（[代码库](https://github.com/a-ghorbani/pocketpal-ai)）',
          '**MLC Chat：** iOS 版见 [App Store](https://llm.mlc.ai/docs/deploy/ios.html)；[安卓指南](https://llm.mlc.ai/docs/deploy/android.html)提供演示版 APK',
          '**速度与续航：** PromptQuorum 未测量',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: '移动端真正可用的方案（2026年）',
        content: [
          '**短任务：** 简单提问、改写几句话、简短摘要适合作为首批测试。',
          '**模型大小：** 从 1B 开始，只有应用能加载且运行稳定时再换 3B 或更大。',
          '**内存：** 系统和其他应用共享内存，标称内存不会全部留给模型。',
          '**应降低预期：** 长文档、复杂代码和高难度推理。重要回答务必核对。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '2026年哪些移动硬件可以运行本地LLM？',
        content: ['**没有统一的最低机型要求。** 能否加载取决于可用内存、芯片、系统和应用版本。下表是测试顺序建议，并非兼容性承诺。'],
        columns: ['您的设备', '首先尝试', '下载体积', '随后检查'],
        rows: [
          {
            '您的设备': '旧款或内存较小的手机',
            '首先尝试': 'Llama 3.2 1B',
            '下载体积': '约 1.3 GB',
            '随后检查': '能否加载且不闪退',
          },
          {
            '您的设备': '近年高端手机',
            '首先尝试': 'Llama 3.2 3B',
            '下载体积': '约 2.0 GB',
            '随后检查': '速度、发热、耗电',
          },
          {
            '您的设备': '内存较大的平板',
            '首先尝试': 'Llama 3.2 3B 或更大',
            '下载体积': '2.0 GB 以上',
            '随后检查': '长对话稳定性',
          },
        ],
        note: '体积取自 Ollama 模型库，仅供参考；手机应用下载的文件可能不同。',
      },
      apps: {
        id: 'apps',
        title: '最佳配置方案：应用与框架',
        columns: ['应用', '平台', '用途', '费用/来源'],
        rows: [
          {
            '应用': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            '平台': 'iOS、安卓',
            '用途': '在本地运行 GGUF 模型',
            '费用/来源': 'MIT 许可',
          },
          {
            '应用': '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            '平台': 'iOS；安卓演示 APK',
            '用途': 'MLC LLM 项目的聊天应用',
            '费用/来源': 'App Store 免费',
          },
          {
            '应用': '[Private LLM](https://privatellm.app)',
            '平台': 'iPhone、iPad、Mac',
            '用途': '下载模型后可离线使用',
            '费用/来源': '一次性购买',
          },
          {
            '应用': '[Ollama](https://ollama.com/download)',
            '平台': 'macOS、Linux、Windows',
            '用途': '电脑端模型运行工具',
            '费用/来源': '未列出手机应用',
          },
        ],
        note: '功能、上架情况和价格会变化。安装前请查看商店页面和隐私说明。本页未对这些应用做测试。',
      },
      frameworks: {
        id: 'frameworks',
        title: '哪些框架支持移动端LLM开发？',
        content: [
          '**llama.cpp：** 运行 GGUF 模型的[开源引擎](https://github.com/ggml-org/llama.cpp)，PocketPal AI 用它运行语言模型。',
          '**MLC LLM：** 在多种平台上编译并运行模型，包括 [iOS](https://llm.mlc.ai/docs/deploy/ios.html) 和[安卓](https://llm.mlc.ai/docs/deploy/android.html)。',
          '**安卓系统模型：** 借助 Google 的 [ML Kit GenAI API](https://developers.google.com/ml-kit/genai)，开发者可在受支持设备上通过 AICore 使用 Gemini Nano。',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama：Android 本地推理对比',
        content: [
          '**关键区别在于模型在哪里运行。** MLC Chat 在手机上运行模型。Ollama 下载页只列出电脑系统；手机可以通过第三方客户端连接运行 Ollama 的电脑。',
          '**安卓安装：** MLC 的安卓指南提供为三星 S23 构建的演示版 APK，未提及 Google Play。安装商店以外的 APK 有风险，请只通过项目官方链接下载。',
        ],
        columns: ['比较项目', 'MLC Chat', 'Ollama＋手机客户端'],
        rows: [
          {
            '比较项目': '模型运行位置',
            'MLC Chat': '手机上',
            'Ollama＋手机客户端': '您的电脑上',
          },
          {
            '比较项目': '离开自家网络可用吗',
            'MLC Chat': '下载模型后可以',
            'Ollama＋手机客户端': '需要能连到电脑',
          },
          {
            '比较项目': '需要安装',
            'MLC Chat': 'MLC Chat 应用或 APK',
            'Ollama＋手机客户端': 'Ollama 和客户端应用',
          },
          {
            '比较项目': '受限于谁的内存',
            'MLC Chat': '手机',
            'Ollama＋手机客户端': '电脑',
          },
          {
            '比较项目': '速度取决于',
            'MLC Chat': '手机和模型',
            'Ollama＋手机客户端': '电脑、模型和网络',
          },
        ],
        note: '不要把 Ollama 服务器直接暴露到公共互联网。请使用可信网络或妥善加固的私有连接。',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: '手机 vs 笔记本 vs 迷你PC：该选哪个？',
        content: ['**手机最便携，电脑通常在内存和散热上余量更大。**'],
        columns: ['因素', '手机', '笔记本', '迷你主机'],
        rows: [
          {
            '因素': '模型空间',
            '手机': '小模型',
            '笔记本': '取决于内存',
            '迷你主机': '取决于内存',
          },
          {
            '因素': '便携性',
            '手机': '放进口袋',
            '笔记本': '放进背包',
            '迷你主机': '通常固定',
          },
          {
            '因素': '供电',
            '手机': '电池，会发热',
            '笔记本': '电池或电源',
            '迷你主机': '接电源',
          },
          {
            '因素': '额外费用',
            '手机': '手机够用则无',
            '笔记本': '视机型而定',
            '迷你主机': '视机型而定',
          },
          {
            '因素': '适合',
            '手机': '简短离线任务',
            '笔记本': '移动办公',
            '迷你主机': '家用或办公服务器',
          },
        ],
        note: '如需一台为手机提供模型服务的电脑，请看[迷你主机指南](/zh/local-llms/best-mini-pcs-local-llm)。',
      },
      performance: {
        id: 'performance',
        title: '移动端LLM vs 桌面速度对比',
        content: ['**仅凭手机型号无法预测速度。** 内存带宽、芯片、模型大小、量化方式、应用版本和温度都有影响。由于未做测量，本页不发布手机速度数据。'],
        columns: ['因素', '影响', '应对'],
        rows: [
          {
            '因素': '模型大小',
            '影响': '越大通常越慢',
            '应对': '从小模型开始',
          },
          {
            '因素': '量化',
            '影响': '改变体积和质量',
            '应对': '对比回答',
          },
          {
            '因素': '发热',
            '影响': '可能降速',
            '应对': '测试较长会话',
          },
          {
            '因素': '应用及版本',
            '影响': '后端不同',
            '应对': '记录测试版本',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '地区考量',
        content: [
          '**中国：** 端侧推理可以避免把提示词发给 AI 服务商，但这本身并不意味着符合《个人信息保护法》或《数据安全法》；合法性基础、安全措施等义务仍然适用。面向公众提供生成式 AI 服务是否需要备案等手续，须单独做法律评估，本地运行并不能自动免除。',
          '**其他地区：** 欧盟 GDPR、日本 APPI、巴西 LGPD 等各有要求，在手机上运行模型并不能自动满足。',
          '**用于工作前：** 检查应用的统计分析、崩溃报告、云备份、设备管理和单位规定。以上为一般信息，不构成法律建议。',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: '移动端LLM最佳使用场景',
        content: ['**端侧小模型适合范围有限、离线可用比回答质量更重要的任务。**'],
        items: [
          '**离线提问：** 构思想法或问简单问题，事后核实事实。',
          '**笔记：** 精简或改写自己的笔记。请确认应用把聊天存在哪里、是否备份。',
          '**简短代码问题：** 请它解释小段代码，所有代码都要测试。',
          '**语言练习：** 练习简单对话，要预料到错误。',
          '**敏感工作数据：** 仅在单位批准后使用。仅靠本地处理并不等于合规。',
          '**日记：** 获取写作提示；内容私密时请检查权限和备份。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '您需要了解的限制',
        items: [
          '**内存：** 模型所需内存大于文件体积，长上下文需要更多。内存不足时应用可能退出。',
          '**电量：** 生成文字会耗电。请在自己的设备上观察，本页不发布续航时间。',
          '**发热：** 长时间使用可能降速，过热时请停止。',
          '**质量：** 小模型可能自信地给出错误内容，也难以胜任复杂任务。',
          '**勿用于关键决策：** 不要依赖它做医疗、法律或财务决定。',
          '**存储：** 每个模型都占空间，不用的请删除。',
        ],
      },
      future: {
        id: 'future',
        title: '移动端LLM何时变得实用？',
        content: [
          '**本页不预测未来手机能运行的模型大小或速度。** 目前没有可靠依据给出时间点。',
          '**值得关注：** 应用更新、受支持模型以及 Google 的端侧 API。',
          '**如何判断：** 更新后重复同一个简短测试，比较回答、加载时间和耗电。',
          '**手机不够用时：** 在电脑上运行模型并安全连接。Mac mini M5 Pro 24 GB 款 1,699 美元起，64 GB 配置 2,699 美元起（美国标价）。另见[硬件指南](/zh/local-llms/local-llm-hardware-guide)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'iPhone 能运行本地大模型吗？',
            a: '使用小模型通常可以。PocketPal AI、MLC Chat 和 Private LLM 都有 iPhone 版。某个模型能否加载并顺畅运行取决于机型，请从小模型开始。',
          },
          {
            q: '哪些安卓手机可以运行？',
            a: '没有可靠的统一清单。可用内存、芯片、安卓版本和应用支持都有关系。请从官方渠道安装应用，先试 1B 模型。',
          },
          {
            q: '有官方的 Ollama 手机应用吗？',
            a: 'Ollama 下载页列出 macOS、Linux 和 Windows，没有 iOS 或安卓。第三方手机客户端连接的是电脑上的 Ollama。',
          },
          {
            q: 'MLC Chat 和 PocketPal AI 怎么选？',
            a: '选支持您所需模型和设备的那一个。PocketPal AI 在 iOS 和安卓上运行 GGUF 模型；MLC Chat 使用为 MLC LLM 准备的模型。我们未比较两者速度。',
          },
          {
            q: '安卓应用能使用 Gemini Nano 吗？',
            a: 'Google 提供 ML Kit GenAI API 文档，开发者可在受支持设备上通过 AICore 使用 Gemini Nano。支持情况因功能和设备而异。',
          },
          {
            q: '本地大模型耗电吗？',
            a: '生成文字会耗电并可能让设备发热，程度取决于手机、应用和模型。PromptQuorum 未测量续航。',
          },
          {
            q: '使用本地模型，数据就私密吗？',
            a: '推理时提示词可以留在设备上，但应用可能使用统计分析、备份、联网搜索或云功能。请阅读隐私说明并检查设置。',
          },
          {
            q: '手机能运行 70B 模型吗？',
            a: '70B 的 Q4 模型不含上下文约 43 GB，超出一般手机内存的承载能力。请改用合适的电脑或租用服务器。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide)',
          '[最佳本地LLM前端](/zh/local-llms/best-local-llm-frontends)',
          '[笔记本 vs 台式机本地LLM](/zh/local-llms/laptop-vs-desktop-local-llm)',
          '[4 GB以下最佳小型本地LLM](/zh/prompt-bites/best-ollama-models-4gb-vram)',
          '[如何安装Ollama](/zh/local-llms/how-to-install-ollama)',
          '[Ollama顶级开源模型](/zh/local-llms/top-open-source-models-ollama)',
          '[Apple 端侧 AI 与本地大模型对比](/zh/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[PocketPal AI 代码库：平台、许可证和格式](https://github.com/a-ghorbani/pocketpal-ai)',
          '[MLC LLM iOS 指南](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[MLC LLM 安卓指南](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Ollama 下载页](https://ollama.com/download)',
          '[Ollama 模型库中的 Llama 3.2 体积](https://ollama.com/library/llama3.2/tags)',
          '[Google ML Kit GenAI API](https://developers.google.com/ml-kit/genai)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026年手机本地大模型：在 iPhone 和安卓上离线使用 AI',
      description: '在 iPhone 或安卓手机上运行本地大模型：介绍 PocketPal AI、MLC Chat、Private LLM 三款应用，模型下载体积，为什么使用 Ollama 需要一台电脑，以及发热、内存、续航和回答质量方面需要预期的限制（2026年版指南）。',
      url: 'https://www.promptquorum.com/zh/local-llms/mobile-local-llms',
      inLanguage: 'zh',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: '评估 iOS 与安卓离线 AI 和端侧推理的开发者与手机用户',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'iPhone 能运行本地大模型吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '使用小模型通常可以。PocketPal AI、MLC Chat 和 Private LLM 都有 iPhone 版。某个模型能否加载并顺畅运行取决于机型，请从小模型开始。',
          },
        },
        {
          '@type': 'Question',
          name: '哪些安卓手机可以运行？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '没有可靠的统一清单。可用内存、芯片、安卓版本和应用支持都有关系。请从官方渠道安装应用，先试 1B 模型。',
          },
        },
        {
          '@type': 'Question',
          name: '有官方的 Ollama 手机应用吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama 下载页列出 macOS、Linux 和 Windows，没有 iOS 或安卓。第三方手机客户端连接的是电脑上的 Ollama。',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC Chat 和 PocketPal AI 怎么选？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '选支持您所需模型和设备的那一个。PocketPal AI 在 iOS 和安卓上运行 GGUF 模型；MLC Chat 使用为 MLC LLM 准备的模型。我们未比较两者速度。',
          },
        },
        {
          '@type': 'Question',
          name: '安卓应用能使用 Gemini Nano 吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google 提供 ML Kit GenAI API 文档，开发者可在受支持设备上通过 AICore 使用 Gemini Nano。支持情况因功能和设备而异。',
          },
        },
        {
          '@type': 'Question',
          name: '本地大模型耗电吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '生成文字会耗电并可能让设备发热，程度取决于手机、应用和模型。PromptQuorum 未测量续航。',
          },
        },
        {
          '@type': 'Question',
          name: '使用本地模型，数据就私密吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '推理时提示词可以留在设备上，但应用可能使用统计分析、备份、联网搜索或云功能。请阅读隐私说明并检查设置。',
          },
        },
        {
          '@type': 'Question',
          name: '手机能运行 70B 模型吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '70B 的 Q4 模型不含上下文约 43 GB，超出一般手机内存的承载能力。请改用合适的电脑或租用服务器。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '可配合手机或平板使用模型的应用',
      numberOfItems: 4,
      inLanguage: 'zh',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'LLM locales en el móvil 2026: IA sin conexión en iPhone y Android',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-es.webp',
    seoTitle: 'LLM local en iPhone o Android: guía 2026',
    intro: '**Muchos móviles y tabletas actuales pueden ejecutar un modelo de lenguaje pequeño en el propio dispositivo.** Esta guía explica qué aplicaciones lo hacen, cuánto ocupan los modelos, por qué MLC Chat y Ollama son cosas distintas y qué límites esperar. PromptQuorum no ha medido móviles, así que no damos cifras de velocidad ni de batería.',
    metaDescription: 'LLM local en iPhone o Android: PocketPal AI, MLC Chat y Private LLM, tamaño de los modelos, por qué Ollama necesita un PC y sus límites (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Sí, muchos móviles actuales pueden ejecutar un modelo pequeño sin conexión. Empieza con uno de 1B (Llama 3.2 1B ocupa 1.3 GB en la biblioteca de Ollama; las versiones de las apps varían) y prueba luego el de 3B (2.0 GB) si tu equipo aguanta. Velocidad, calor y batería dependen del móvil, la app y el modelo.**',
    audience: 'Desarrolladores y usuarios móviles que evalúan IA sin conexión en iOS y Android',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM móvil',
    toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Datos rápidos', anchor: '#quick-facts' },
        { label: 'Qué funciona realmente en móvil (2026)', anchor: '#what-works' },
        { label: '¿Qué hardware móvil ejecuta LLMs locales?', anchor: '#hardware' },
        { label: 'Mejores configuraciones actuales: apps y frameworks', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama: comparativa Android', anchor: '#mlc-vs-ollama' },
        { label: 'Móvil vs portátil vs mini PC', anchor: '#mobile-comparison' },
        { label: '¿Qué tan rápidos son los LLM móviles vs escritorio?', anchor: '#performance' },
        { label: 'Mejores casos de uso para LLMs móviles', anchor: '#use-cases' },
        { label: 'Limitaciones que debes conocer', anchor: '#limitations' },
        { label: '¿Cuándo serán prácticos los LLMs móviles?', anchor: '#future' },
        { label: 'Consideraciones regionales', anchor: '#regional-context' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Muchos móviles y tabletas actuales pueden ejecutar un modelo pequeño en el dispositivo; la velocidad y la estabilidad dependen del hardware, la app y el modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Con la app y el modelo descargados, el móvil puede responder sin conexión, pero un modelo pequeño se equivoca más que uno grande.',
          },
        ],
        items: [
          '**Puede funcionar:** empieza con un modelo pequeño de unos 1.000 a 3.000 millones de parámetros.',
          '**Apps:** PocketPal AI (iOS y Android), MLC Chat y Private LLM (dispositivos Apple).',
          '**Ollama:** su página de descargas cita macOS, Linux y Windows, no una app móvil.',
          '**Límites:** memoria libre, calor, batería y calidad del modelo. No los hemos medido.',
          '**Privacidad:** la inferencia local no resuelve por sí sola permisos, copias de seguridad ni obligaciones legales.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Llama 3.2 1B:** unos 1.3 GB en la [biblioteca de Ollama](https://ollama.com/library/llama3.2/tags); otros formatos varían',
          '**Llama 3.2 3B:** unos 2.0 GB en la misma biblioteca; ejecutarlo pide más memoria que el tamaño del archivo',
          '**PocketPal AI:** app con licencia MIT para iOS y Android que ejecuta modelos GGUF ([repositorio](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** en la [App Store](https://llm.mlc.ai/docs/deploy/ios.html) para iOS; la [guía de Android](https://llm.mlc.ai/docs/deploy/android.html) enlaza un APK de demostración',
          '**Velocidad y batería:** PromptQuorum no las ha medido',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'Qué funciona realmente en móvil (2026)',
        content: [
          '**Tareas cortas:** preguntas sencillas, reescribir unas frases y resúmenes breves son buenas primeras pruebas.',
          '**Tamaño:** empieza con 1B. Pasa a 3B o más solo si la app lo carga y se mantiene estable.',
          '**Memoria:** el sistema y otras apps comparten la RAM, así que no queda libre toda la memoria anunciada.',
          '**Espera menos en:** documentos largos, código complejo y razonamiento exigente. Verifica toda respuesta importante.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '¿Qué hardware móvil ejecuta LLMs locales en 2026?',
        content: [
          '**No existe un móvil mínimo único.** La memoria libre, el chip, el sistema y la versión de la app determinan qué se carga. La tabla es un orden de pruebas, no una promesa de compatibilidad.',
        ],
        columns: ['Tu dispositivo', 'Primer modelo', 'Descarga', 'Comprueba después'],
        rows: [
          {
            'Tu dispositivo': 'Móvil antiguo o con poca RAM',
            'Primer modelo': 'Llama 3.2 1B',
            Descarga: 'Unos 1.3 GB',
            'Comprueba después': '¿Carga y sigue abierto?',
          },
          {
            'Tu dispositivo': 'Gama alta reciente',
            'Primer modelo': 'Llama 3.2 3B',
            Descarga: 'Unos 2.0 GB',
            'Comprueba después': 'Velocidad, calor, batería',
          },
          {
            'Tu dispositivo': 'Tableta con más memoria',
            'Primer modelo': 'Llama 3.2 3B o mayor',
            Descarga: '2.0 GB o más',
            'Comprueba después': 'Estabilidad en chats largos',
          },
        ],
        note: 'Los tamaños vienen de la biblioteca de Ollama y son solo orientativos; los archivos de las apps móviles pueden diferir.',
      },
      apps: {
        id: 'apps',
        title: 'Mejores configuraciones actuales: apps y frameworks',
        columns: ['App', 'Plataformas', 'Qué es', 'Coste / fuente'],
        rows: [
          {
            App: '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            Plataformas: 'iOS, Android',
            'Qué es': 'Ejecuta modelos GGUF',
            'Coste / fuente': 'Licencia MIT',
          },
          {
            App: '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            Plataformas: 'iOS; APK demo Android',
            'Qué es': 'App del proyecto MLC LLM',
            'Coste / fuente': 'Gratis en la App Store',
          },
          {
            App: '[Private LLM](https://privatellm.app)',
            Plataformas: 'iPhone, iPad, Mac',
            'Qué es': 'Sin conexión tras descargar',
            'Coste / fuente': 'Pago único',
          },
          {
            App: '[Ollama](https://ollama.com/download)',
            Plataformas: 'macOS, Linux, Windows',
            'Qué es': 'Motor para PC',
            'Coste / fuente': 'No cita app móvil',
          },
        ],
        note: 'Funciones, disponibilidad y precios cambian. Revisa la tienda y la información de privacidad antes de instalar. No hemos probado estas apps para esta página.',
      },
      frameworks: {
        id: 'frameworks',
        title: '¿Qué frameworks soportan el desarrollo de LLM móvil?',
        content: [
          '**llama.cpp:** el [motor de código abierto](https://github.com/ggml-org/llama.cpp) para modelos GGUF; PocketPal AI lo usa para los modelos de lenguaje.',
          '**MLC LLM:** compila y ejecuta modelos en varias plataformas, entre ellas [iOS](https://llm.mlc.ai/docs/deploy/ios.html) y [Android](https://llm.mlc.ai/docs/deploy/android.html).',
          '**Modelo del sistema Android:** las [API ML Kit GenAI](https://developers.google.com/ml-kit/genai) de Google permiten a los desarrolladores usar Gemini Nano mediante AICore en dispositivos compatibles.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama: inferencia local en Android comparada',
        content: [
          '**La diferencia está en dónde se ejecuta el modelo.** MLC Chat lo ejecuta en el móvil. La página de descargas de Ollama solo cita PC; un móvil puede usarlo con una app cliente de terceros conectada a un PC.',
          '**En Android:** la guía de MLC enlaza un APK de demostración creado para el Samsung S23 y no menciona Google Play. Instalar APK fuera de una tienda tiene riesgos; descarga solo desde enlaces oficiales del proyecto.',
        ],
        columns: ['Factor', 'MLC Chat', 'Ollama con cliente móvil'],
        rows: [
          {
            Factor: 'Dónde se ejecuta',
            'MLC Chat': 'En el móvil',
            'Ollama con cliente móvil': 'En tu PC',
          },
          {
            Factor: 'Fuera de tu red',
            'MLC Chat': 'Sí, tras descargar',
            'Ollama con cliente móvil': 'Necesita llegar al PC',
          },
          {
            Factor: 'Qué instalas',
            'MLC Chat': 'App MLC Chat o APK',
            'Ollama con cliente móvil': 'Ollama y una app cliente',
          },
          {
            Factor: 'Memoria que limita',
            'MLC Chat': 'La del móvil',
            'Ollama con cliente móvil': 'La del PC',
          },
          {
            Factor: 'La velocidad depende de',
            'MLC Chat': 'Móvil y modelo',
            'Ollama con cliente móvil': 'PC, modelo y red',
          },
        ],
        note: 'No expongas un servidor Ollama directamente a internet. Usa una red de confianza o una conexión privada bien protegida.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'Móvil vs portátil vs mini PC: ¿cuál deberías usar?',
        content: [
          '**El móvil es lo más portátil; un PC suele dar más margen de memoria y refrigeración.**',
        ],
        columns: ['Factor', 'Teléfono', 'Portátil', 'Mini PC'],
        rows: [
          {
            Factor: 'Margen para modelos',
            'Teléfono': 'Modelos pequeños',
            'Portátil': 'Según la memoria',
            'Mini PC': 'Según la memoria',
          },
          {
            Factor: 'Portabilidad',
            'Teléfono': 'Bolsillo',
            'Portátil': 'Mochila',
            'Mini PC': 'Normalmente fijo',
          },
          {
            Factor: 'Energía',
            'Teléfono': 'Batería, se calienta',
            'Portátil': 'Batería o red',
            'Mini PC': 'Red eléctrica',
          },
          {
            Factor: 'Coste extra',
            'Teléfono': 'Ninguno si el móvil sirve',
            'Portátil': 'Según el modelo',
            'Mini PC': 'Según el modelo',
          },
          {
            Factor: 'Bueno para',
            'Teléfono': 'Tareas cortas sin red',
            'Portátil': 'Trabajo fuera',
            'Mini PC': 'Servidor en casa/oficina',
          },
        ],
        note: 'Consulta la [guía de mini PC](/es/local-llms/best-mini-pcs-local-llm) si quieres un PC que sirva modelos a tu móvil.',
      },
      performance: {
        id: 'performance',
        title: '¿Qué tan rápidos son los LLMs móviles vs escritorio?',
        content: [
          '**El nombre del móvil no permite predecir la velocidad.** Influyen el ancho de banda de memoria, el chip, el tamaño, la cuantización, la versión de la app y la temperatura. No publicamos cifras porque no hemos medido.',
        ],
        columns: ['Factor', 'Efecto', 'Qué hacer'],
        rows: [
          {
            Factor: 'Tamaño del modelo',
            Efecto: 'Mayor suele ser más lento',
            'Qué hacer': 'Empezar pequeño',
          },
          {
            Factor: 'Cuantización',
            Efecto: 'Cambia tamaño y calidad',
            'Qué hacer': 'Comparar respuestas',
          },
          {
            Factor: 'Calor',
            Efecto: 'Puede frenar',
            'Qué hacer': 'Probar una sesión larga',
          },
          {
            Factor: 'App y versión',
            Efecto: 'Motores distintos',
            'Qué hacer': 'Anotar la versión',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Consideraciones regionales',
        content: [
          '**España y la UE:** la inferencia en el dispositivo puede evitar enviar prompts a un proveedor de IA. Eso por sí solo no hace que el tratamiento cumpla el RGPD; siguen aplicando base jurídica, seguridad, plazos y demás obligaciones.',
          '**Latinoamérica:** cada país tiene sus normas de protección de datos, con condiciones propias. Ejecutar el modelo en el móvil no las resuelve.',
          '**Otros países:** la APPI japonesa, la PIPL china o la LGPD brasileña también tienen requisitos propios.',
          '**Antes del uso laboral:** revisa analíticas de la app, informes de fallos, copias en la nube, gestión de dispositivos y normas de la empresa. Es información general, no asesoramiento legal. Un servicio público o comercial requiere una revisión legal aparte.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Mejores casos de uso para LLMs móviles',
        content: [
          '**Los modelos pequeños en el móvil sirven para tareas acotadas donde importa más funcionar sin conexión que la máxima calidad.**',
        ],
        items: [
          '**Preguntas sin conexión:** esbozar ideas o preguntar cosas sencillas y verificar los datos después.',
          '**Notas:** acortar o reescribir tus notas. Comprueba dónde guarda la app los chats y si se hacen copias.',
          '**Dudas breves de código:** pedir explicaciones de fragmentos cortos y probar todo código.',
          '**Idiomas:** practicar diálogos sencillos, contando con errores.',
          '**Datos laborales sensibles:** solo con autorización de tu organización. El tratamiento local por sí solo no es cumplimiento.',
          '**Diario:** obtener ideas para escribir; revisa permisos y copias si el contenido es privado.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitaciones que debes conocer',
        items: [
          '**Memoria:** un modelo necesita más memoria que lo que ocupa el archivo y un contexto largo, aún más. La app puede cerrarse.',
          '**Batería:** generar texto gasta energía. Mídelo en tu equipo; no publicamos autonomías.',
          '**Calor:** el móvil puede ir más lento en sesiones largas. Para si se calienta demasiado.',
          '**Calidad:** los modelos pequeños pueden afirmar errores con seguridad y fallan en tareas complejas.',
          '**Nada crítico:** no dependas de ellos para decisiones médicas, legales o financieras.',
          '**Almacenamiento:** cada modelo ocupa espacio; borra los que no uses.',
        ],
      },
      future: {
        id: 'future',
        title: '¿Cuándo serán prácticos los LLMs móviles?',
        content: [
          '**No pronosticamos tamaños ni velocidades de futuros móviles.** No hay base fiable para dar una fecha.',
          '**Qué seguir:** nuevas versiones de apps, modelos compatibles y las API locales de Google.',
          '**Cómo decidir:** repite la misma prueba corta tras las actualizaciones y compara respuestas, carga y batería.',
          '**Si el móvil no basta:** ejecuta el modelo en un PC y conéctate de forma segura. Un Mac mini M5 Pro parte de 1.699 $ con 24 GB; la versión de 64 GB, de 2.699 $ (precios de EE. UU.). Consulta la [guía de hardware](/es/local-llms/local-llm-hardware-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo ejecutar un LLM local en mi iPhone?',
            a: 'A menudo sí, con un modelo pequeño. PocketPal AI, MLC Chat y Private LLM tienen app para iPhone. Que un modelo cargue y funcione bien depende de tu iPhone; empieza pequeño.',
          },
          {
            q: '¿Qué móviles Android sirven?',
            a: 'No hay una lista única fiable. Cuentan la memoria libre, el chip, la versión de Android y la compatibilidad de la app. Instala desde la fuente oficial y prueba primero un 1B.',
          },
          {
            q: '¿Hay una app oficial de Ollama para móviles?',
            a: 'La página de descargas de Ollama cita macOS, Linux y Windows, no iOS ni Android. Clientes móviles de terceros se conectan a Ollama en un PC.',
          },
          {
            q: '¿MLC Chat o PocketPal AI?',
            a: 'Elige la que admita tu modelo y dispositivo. PocketPal AI ejecuta modelos GGUF en iOS y Android. MLC Chat usa modelos preparados para MLC LLM. No hemos comparado su velocidad.',
          },
          {
            q: '¿Pueden las apps Android usar Gemini Nano?',
            a: 'Google documenta las API ML Kit GenAI, con las que los desarrolladores usan Gemini Nano mediante AICore en dispositivos compatibles. La compatibilidad varía según la función y el equipo.',
          },
          {
            q: '¿Gasta mucha batería un LLM local?',
            a: 'Generar texto consume energía y puede calentar el equipo. Cuánto depende del móvil, la app y el modelo. PromptQuorum no ha medido autonomías.',
          },
          {
            q: '¿Son privados mis datos con un modelo local?',
            a: 'Durante la inferencia los prompts pueden quedarse en el dispositivo, pero la app puede usar analíticas, copias, búsqueda web o funciones en la nube. Lee su política y revisa los ajustes.',
          },
          {
            q: '¿Puede un móvil ejecutar un modelo de 70B?',
            a: 'Un modelo de 70B en Q4 ocupa unos 43 GB sin el contexto, más de lo que un móvil habitual puede cargar en memoria. Usa un PC adecuado o un servidor alquilado.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Guía de hardware para LLM local](/es/local-llms/local-llm-hardware-guide)',
          '[Mejores interfaces para LLM local](/es/local-llms/best-local-llm-frontends)',
          '[Portátil vs escritorio para LLM local](/es/local-llms/laptop-vs-desktop-local-llm)',
          '[Mejores LLMs locales pequeños de menos de 4 GB](/es/prompt-bites/best-ollama-models-4gb-vram)',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama)',
          '[Top modelos de código abierto para Ollama](/es/local-llms/top-open-source-models-ollama)',
          '[La IA en el dispositivo de Apple frente a los LLM locales](/es/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio de PocketPal AI: plataformas, licencia y formatos](https://github.com/a-ghorbani/pocketpal-ai)',
          '[Guía de MLC LLM para iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[Guía de MLC LLM para Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Página de descargas de Ollama](https://ollama.com/download)',
          '[Tamaños de Llama 3.2 en la biblioteca de Ollama](https://ollama.com/library/llama3.2/tags)',
          '[API Google ML Kit GenAI](https://developers.google.com/ml-kit/genai)',
          '[Lo que los LLM no pueden hacer](https://www.promptquorum.com/es/prompt-engineering/ai-limitations-what-llms-cant-do)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM locales en el móvil 2026: IA sin conexión en iPhone y Android',
      description: 'LLM local en iPhone o Android: PocketPal AI, MLC Chat y Private LLM, tamaño de los modelos, por qué Ollama necesita un PC y sus límites (2026).',
      url: 'https://www.promptquorum.com/es/local-llms/mobile-local-llms',
      inLanguage: 'es',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Desarrolladores y usuarios móviles que evalúan IA sin conexión en iOS y Android',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puedo ejecutar un LLM local en mi iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A menudo sí, con un modelo pequeño. PocketPal AI, MLC Chat y Private LLM tienen app para iPhone. Que un modelo cargue y funcione bien depende de tu iPhone; empieza pequeño.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué móviles Android sirven?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No hay una lista única fiable. Cuentan la memoria libre, el chip, la versión de Android y la compatibilidad de la app. Instala desde la fuente oficial y prueba primero un 1B.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Hay una app oficial de Ollama para móviles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La página de descargas de Ollama cita macOS, Linux y Windows, no iOS ni Android. Clientes móviles de terceros se conectan a Ollama en un PC.',
          },
        },
        {
          '@type': 'Question',
          name: '¿MLC Chat o PocketPal AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Elige la que admita tu modelo y dispositivo. PocketPal AI ejecuta modelos GGUF en iOS y Android. MLC Chat usa modelos preparados para MLC LLM. No hemos comparado su velocidad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden las apps Android usar Gemini Nano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google documenta las API ML Kit GenAI, con las que los desarrolladores usan Gemini Nano mediante AICore en dispositivos compatibles. La compatibilidad varía según la función y el equipo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Gasta mucha batería un LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generar texto consume energía y puede calentar el equipo. Cuánto depende del móvil, la app y el modelo. PromptQuorum no ha medido autonomías.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Son privados mis datos con un modelo local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Durante la inferencia los prompts pueden quedarse en el dispositivo, pero la app puede usar analíticas, copias, búsqueda web o funciones en la nube. Lee su política y revisa los ajustes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puede un móvil ejecutar un modelo de 70B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un modelo de 70B en Q4 ocupa unos 43 GB sin el contexto, más de lo que un móvil habitual puede cargar en memoria. Usa un PC adecuado o un servidor alquilado.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Apps para usar modelos con un móvil o una tableta',
      numberOfItems: 4,
      inLanguage: 'es',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'النماذج اللغوية المحلية على الهاتف 2026: ذكاء اصطناعي دون اتصال على iPhone وAndroid',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-ar.webp',
    seoTitle: 'تشغيل نموذج لغوي محلي على iPhone أو Android (2026)',
    intro: '**يستطيع كثير من الهواتف والأجهزة اللوحية الحديثة تشغيل نموذج لغوي صغير على الجهاز نفسه.** يشرح هذا الدليل التطبيقات المتاحة، وأحجام النماذج، والفرق بين MLC Chat وOllama، والحدود المتوقعة. لم تختبر PromptQuorum أداء الهواتف، لذلك لا نذكر أرقاماً للسرعة أو البطارية.',
    metaDescription: 'تشغيل نموذج لغوي محلي على iPhone أو Android: ‏PocketPal AI وMLC Chat وPrivate LLM، وأحجام النماذج، ولماذا يحتاج Ollama إلى حاسوب، وأبرز الحدود (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**نعم، يستطيع كثير من الهواتف الحديثة تشغيل نموذج صغير دون اتصال. ابدأ بنموذج 1B (حجم Llama 3.2 1B في مكتبة Ollama هو 1.3 جيجابايت، وقد تختلف ملفات التطبيقات)، ثم جرّب 3B ‏(2.0 جيجابايت) إن تحمّله جهازك. تعتمد السرعة والحرارة واستهلاك البطارية على الهاتف والتطبيق والنموذج.**',
    audience: 'المطورون ومستخدمو الهواتف الذين يقيّمون الذكاء الاصطناعي دون اتصال على iOS وAndroid',
    readTime: '6 دقائق قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM للهواتف',
    toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'حقائق سريعة', anchor: '#quick-facts' },
        { label: 'ما الذي يعمل فعلًا على الهاتف (2026)', anchor: '#what-works' },
        { label: 'أي عتاد للهواتف يشغّل نماذج LLM المحلية؟', anchor: '#hardware' },
        { label: 'أفضل التهيئات الحالية: التطبيقات وأطر العمل', anchor: '#apps' },
        { label: 'MLC LLM مقابل Ollama: مقارنة أندرويد', anchor: '#mlc-vs-ollama' },
        { label: 'الهاتف مقابل الحاسوب المحمول مقابل الحاسوب الصغير', anchor: '#mobile-comparison' },
        { label: 'ما مدى سرعة نماذج LLM للهواتف مقابل سطح المكتب؟', anchor: '#performance' },
        { label: 'أفضل حالات الاستخدام لنماذج LLM للهواتف', anchor: '#use-cases' },
        { label: 'قيود يجب أن تعرفها', anchor: '#limitations' },
        { label: 'متى ستصبح نماذج LLM للهواتف عملية؟', anchor: '#future' },
        { label: 'اعتبارات إقليمية', anchor: '#regional-context' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'المصادر', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يستطيع كثير من الهواتف والأجهزة اللوحية الحديثة تشغيل نموذج لغوي صغير على الجهاز، وتعتمد السرعة والاستقرار على العتاد والتطبيق والنموذج.',
          },
          {
            type: 'plain-terms',
            text: 'بعد تنزيل التطبيق والنموذج يمكن للهاتف أن يجيب دون اتصال، لكن النموذج الصغير يخطئ أكثر من الكبير.',
          },
        ],
        items: [
          '**يمكن أن ينجح:** ابدأ بنموذج صغير يضم نحو مليار إلى 3 مليارات معامل.',
          '**التطبيقات:** PocketPal AI ‏(iOS وAndroid)، وMLC Chat، وPrivate LLM ‏(أجهزة Apple).',
          '**Ollama:** تذكر صفحة التنزيل أنظمة macOS وLinux وWindows، دون تطبيق للهاتف.',
          '**الحدود:** الذاكرة المتاحة والحرارة والبطارية وجودة النموذج. لم نقِسها.',
          '**الخصوصية:** الاستدلال المحلي وحده لا يحسم أذونات التطبيق أو النسخ الاحتياطية أو الالتزامات القانونية.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**Llama 3.2 1B:** نحو 1.3 جيجابايت في [مكتبة Ollama](https://ollama.com/library/llama3.2/tags)، وتختلف الصيغ الأخرى',
          '**Llama 3.2 3B:** نحو 2.0 جيجابايت في المكتبة نفسها، ويحتاج تشغيله إلى ذاكرة أكبر من حجم الملف',
          '**PocketPal AI:** تطبيق برخصة MIT على iOS وAndroid يشغّل نماذج GGUF ‏([المستودع](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** متاح لنظام iOS في [App Store](https://llm.mlc.ai/docs/deploy/ios.html)، ويوفر [دليل Android](https://llm.mlc.ai/docs/deploy/android.html) ملف APK تجريبياً',
          '**السرعة والبطارية:** لم تقِسها PromptQuorum',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'ما الذي يعمل فعلًا على الهاتف (2026)',
        content: [
          '**المهام القصيرة:** الأسئلة البسيطة وإعادة صياغة بضع جمل والملخصات القصيرة اختبارات أولى مناسبة.',
          '**حجم النموذج:** ابدأ بـ 1B، ولا تنتقل إلى 3B أو أكبر إلا إذا حمّله التطبيق وظل مستقراً.',
          '**الذاكرة:** يتقاسم النظام والتطبيقات الأخرى الذاكرة، فلا تتوفر كل السعة المعلنة للنموذج.',
          '**توقع أقل في:** المستندات الطويلة والشيفرة المعقدة والاستنتاج الصعب. تحقق من كل إجابة مهمة.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'أي عتاد للهواتف يشغّل نماذج LLM المحلية في 2026؟',
        content: [
          '**لا يوجد حد أدنى موحّد للهاتف.** تحدد الذاكرة المتاحة والمعالج والنظام وإصدار التطبيق ما يمكن تحميله. الجدول ترتيب مقترح للاختبار وليس ضماناً للتوافق.',
        ],
        columns: ['جهازك', 'أول نموذج للتجربة', 'حجم التنزيل', 'ثم تحقق من'],
        rows: [
          {
            'جهازك': 'هاتف قديم أو قليل الذاكرة',
            'أول نموذج للتجربة': 'Llama 3.2 1B',
            'حجم التنزيل': 'نحو 1.3 جيجابايت',
            'ثم تحقق من': 'هل يُحمَّل ويبقى مفتوحاً؟',
          },
          {
            'جهازك': 'هاتف رائد حديث',
            'أول نموذج للتجربة': 'Llama 3.2 3B',
            'حجم التنزيل': 'نحو 2.0 جيجابايت',
            'ثم تحقق من': 'السرعة والحرارة والبطارية',
          },
          {
            'جهازك': 'جهاز لوحي بذاكرة أكبر',
            'أول نموذج للتجربة': 'Llama 3.2 3B أو أكبر',
            'حجم التنزيل': '2.0 جيجابايت أو أكثر',
            'ثم تحقق من': 'الاستقرار في المحادثات الطويلة',
          },
        ],
        note: 'الأحجام مأخوذة من مكتبة Ollama وهي للاسترشاد فقط، وقد تختلف ملفات تطبيقات الهاتف.',
      },
      apps: {
        id: 'apps',
        title: 'أفضل التهيئات الحالية: التطبيقات وأطر العمل',
        columns: ['التطبيق', 'المنصات', 'ما يقدمه', 'الكلفة / المصدر'],
        rows: [
          {
            'التطبيق': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            'المنصات': 'iOS وAndroid',
            'ما يقدمه': 'تشغيل نماذج GGUF محلياً',
            'الكلفة / المصدر': 'رخصة MIT',
          },
          {
            'التطبيق': '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            'المنصات': 'iOS؛ ‏APK تجريبي لـ Android',
            'ما يقدمه': 'تطبيق محادثة لمشروع MLC LLM',
            'الكلفة / المصدر': 'مجاني في App Store',
          },
          {
            'التطبيق': '[Private LLM](https://privatellm.app)',
            'المنصات': 'iPhone وiPad وMac',
            'ما يقدمه': 'يعمل دون اتصال بعد التنزيل',
            'الكلفة / المصدر': 'شراء لمرة واحدة',
          },
          {
            'التطبيق': '[Ollama](https://ollama.com/download)',
            'المنصات': 'macOS وLinux وWindows',
            'ما يقدمه': 'أداة تشغيل للحواسيب',
            'الكلفة / المصدر': 'لا يُذكر تطبيق للهاتف',
          },
        ],
        note: 'تتغير الميزات والتوفر والأسعار. راجع صفحة المتجر ومعلومات الخصوصية قبل التثبيت. لم نختبر هذه التطبيقات لهذه الصفحة.',
      },
      frameworks: {
        id: 'frameworks',
        title: 'أي أطر عمل تدعم تطوير LLM للهواتف؟',
        content: [
          '**llama.cpp:** [محرك مفتوح المصدر](https://github.com/ggml-org/llama.cpp) لنماذج GGUF، ويستخدمه PocketPal AI للنماذج اللغوية.',
          '**MLC LLM:** يجمّع النماذج ويشغلها على عدة منصات، منها [iOS](https://llm.mlc.ai/docs/deploy/ios.html) و[Android](https://llm.mlc.ai/docs/deploy/android.html).',
          '**نموذج نظام Android:** تتيح [واجهات ML Kit GenAI](https://developers.google.com/ml-kit/genai) من Google للمطورين استخدام Gemini Nano عبر AICore على الأجهزة المدعومة.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM مقابل Ollama: مقارنة الاستدلال المحلي على أندرويد',
        content: [
          '**الفرق في مكان تشغيل النموذج.** يشغّل MLC Chat النموذج على الهاتف. أما صفحة تنزيل Ollama فتذكر الحواسيب فقط، ويمكن للهاتف استخدامه عبر تطبيق عميل من طرف ثالث يتصل بحاسوب.',
          '**على Android:** يوفر دليل MLC ملف APK تجريبياً بُني لهاتف Samsung S23 ولا يذكر Google Play. تثبيت ملفات APK من خارج المتاجر ينطوي على مخاطر، فنزّل من روابط المشروع الرسمية فقط.',
        ],
        columns: ['العامل', 'MLC Chat', 'Ollama مع تطبيق عميل'],
        rows: [
          {
            'العامل': 'مكان تشغيل النموذج',
            'MLC Chat': 'على الهاتف',
            'Ollama مع تطبيق عميل': 'على حاسوبك',
          },
          {
            'العامل': 'خارج شبكتك',
            'MLC Chat': 'نعم بعد تنزيل النموذج',
            'Ollama مع تطبيق عميل': 'يلزم الوصول إلى الحاسوب',
          },
          {
            'العامل': 'ما تثبّته',
            'MLC Chat': 'تطبيق MLC Chat أو APK',
            'Ollama مع تطبيق عميل': 'Ollama وتطبيق عميل',
          },
          {
            'العامل': 'الذاكرة المقيِّدة',
            'MLC Chat': 'ذاكرة الهاتف',
            'Ollama مع تطبيق عميل': 'ذاكرة الحاسوب',
          },
          {
            'العامل': 'تعتمد السرعة على',
            'MLC Chat': 'الهاتف والنموذج',
            'Ollama مع تطبيق عميل': 'الحاسوب والنموذج والشبكة',
          },
        ],
        note: 'لا تعرّض خادم Ollama مباشرةً للإنترنت العام. استخدم شبكة موثوقة أو اتصالاً خاصاً مؤمّناً جيداً.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'الهاتف مقابل الحاسوب المحمول مقابل الحاسوب الصغير: أيها تستخدم؟',
        content: ['**الهاتف هو الأسهل حملاً، ويوفر الحاسوب عادةً مجالاً أوسع في الذاكرة والتبريد.**'],
        columns: ['العامل', 'الهاتف', 'الحاسوب المحمول', 'الحاسوب الصغير'],
        rows: [
          {
            'العامل': 'مساحة النماذج',
            'الهاتف': 'نماذج صغيرة',
            'الحاسوب المحمول': 'حسب الذاكرة',
            'الحاسوب الصغير': 'حسب الذاكرة',
          },
          {
            'العامل': 'سهولة الحمل',
            'الهاتف': 'في الجيب',
            'الحاسوب المحمول': 'في الحقيبة',
            'الحاسوب الصغير': 'ثابت غالباً',
          },
          {
            'العامل': 'الطاقة',
            'الهاتف': 'بطارية مع حرارة',
            'الحاسوب المحمول': 'بطارية أو كهرباء',
            'الحاسوب الصغير': 'كهرباء',
          },
          {
            'العامل': 'كلفة إضافية',
            'الهاتف': 'لا شيء إن كفى هاتفك',
            'الحاسوب المحمول': 'حسب الطراز',
            'الحاسوب الصغير': 'حسب الطراز',
          },
          {
            'العامل': 'مناسب لـ',
            'الهاتف': 'مهام قصيرة دون اتصال',
            'الحاسوب المحمول': 'العمل المتنقل',
            'الحاسوب الصغير': 'خادم منزلي أو مكتبي',
          },
        ],
        note: 'راجع [دليل الحواسيب الصغيرة](/ar/local-llms/best-mini-pcs-local-llm) إن أردت حاسوباً يقدم النماذج لهاتفك.',
      },
      performance: {
        id: 'performance',
        title: 'ما مدى سرعة نماذج LLM للهواتف مقابل سطح المكتب؟',
        content: [
          '**لا يمكن توقع السرعة من اسم الهاتف وحده.** يؤثر عرض نطاق الذاكرة والمعالج وحجم النموذج والتكميم وإصدار التطبيق والحرارة. لا ننشر أرقاماً لسرعة الهواتف لأننا لم نقِسها.',
        ],
        columns: ['العامل', 'الأثر', 'ما تفعله'],
        rows: [
          {
            'العامل': 'حجم النموذج',
            'الأثر': 'الأكبر أبطأ غالباً',
            'ما تفعله': 'ابدأ بالصغير',
          },
          {
            'العامل': 'التكميم',
            'الأثر': 'يغيّر الحجم والجودة',
            'ما تفعله': 'قارن الإجابات',
          },
          {
            'العامل': 'الحرارة',
            'الأثر': 'قد تخفض السرعة',
            'ما تفعله': 'اختبر جلسة أطول',
          },
          {
            'العامل': 'التطبيق وإصداره',
            'الأثر': 'محركات مختلفة',
            'ما تفعله': 'سجّل الإصدار',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'اعتبارات إقليمية',
        content: [
          '**دول الخليج والمنطقة العربية:** قد يغني الاستدلال على الجهاز عن إرسال الطلبات إلى مزود ذكاء اصطناعي. لكن ذلك لا يكفي وحده للامتثال لأنظمة حماية البيانات المحلية، مثل نظام حماية البيانات الشخصية في السعودية؛ فالأساس القانوني والأمن والاحتفاظ وغيرها تبقى واجبة.',
          '**الاتحاد الأوروبي:** المعالجة المحلية وحدها لا تجعلها ممتثلة للائحة GDPR.',
          '**مناطق أخرى:** لقوانين مثل APPI في اليابان وPIPL في الصين وLGPD في البرازيل شروطها الخاصة.',
          '**قبل الاستخدام في العمل:** راجع تحليلات التطبيق وتقارير الأعطال والنسخ السحابي وإدارة الأجهزة وسياسات جهة العمل. هذه معلومات عامة وليست استشارة قانونية، والخدمات العامة أو التجارية تحتاج إلى مراجعة قانونية مستقلة.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'أفضل حالات الاستخدام لنماذج LLM للهواتف',
        content: [
          '**تناسب النماذج الصغيرة على الجهاز مهام محدودة يكون العمل دون اتصال فيها أهم من أفضل جودة للإجابة.**',
        ],
        items: [
          '**أسئلة دون اتصال:** صغ أفكاراً أو اطرح أسئلة بسيطة، ثم تحقق من الحقائق لاحقاً.',
          '**الملاحظات:** اختصر ملاحظاتك أو أعد صياغتها، وتحقق من مكان حفظ المحادثات ونسخها احتياطياً.',
          '**أسئلة برمجية قصيرة:** اطلب شرح مقاطع صغيرة واختبر كل شيفرة.',
          '**تعلم اللغات:** تدرّب على حوارات بسيطة وتوقع الأخطاء.',
          '**بيانات العمل الحساسة:** بموافقة مؤسستك فقط. المعالجة المحلية وحدها ليست امتثالاً.',
          '**اليوميات:** احصل على أفكار للكتابة، وراجع الأذونات والنسخ الاحتياطية إن كان المحتوى خاصاً.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'قيود يجب أن تعرفها',
        items: [
          '**الذاكرة:** يحتاج النموذج إلى ذاكرة أكبر من حجم ملفه، والسياق الطويل يحتاج أكثر. قد يُغلق التطبيق عند نفادها.',
          '**البطارية:** توليد النص يستهلك الطاقة. راقب ذلك على جهازك، فلا ننشر مدد تشغيل.',
          '**الحرارة:** قد يبطؤ الهاتف في الجلسات الطويلة. توقف إذا سخن بشكل مزعج.',
          '**الجودة:** قد تذكر النماذج الصغيرة معلومات خاطئة بثقة، وتتعثر في المهام المعقدة.',
          '**لا للقرارات المهمة:** لا تعتمد عليها في قرارات طبية أو قانونية أو مالية.',
          '**التخزين:** يشغل كل نموذج مساحة، فاحذف ما لا تستخدمه.',
        ],
      },
      future: {
        id: 'future',
        title: 'متى ستصبح نماذج LLM للهواتف عملية؟',
        content: [
          '**لا نتنبأ بأحجام النماذج أو سرعتها على الهواتف المستقبلية.** لا يوجد أساس موثوق لتحديد موعد.',
          '**ما تتابعه:** إصدارات التطبيقات والنماذج المدعومة وواجهات Google على الجهاز.',
          '**كيف تقرر:** كرر الاختبار القصير نفسه بعد التحديثات وقارن الإجابات ووقت التحميل والبطارية.',
          '**إذا لم يكفِ الهاتف:** شغّل النموذج على حاسوب واتصل به بأمان. يبدأ سعر Mac mini M5 Pro من 1,699 دولاراً بذاكرة 24 جيجابايت، وإعداد 64 جيجابايت من 2,699 دولاراً (أسعار أمريكية). راجع [دليل العتاد](/ar/local-llms/local-llm-hardware-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن تشغيل نموذج لغوي محلي على iPhone؟',
            a: 'غالباً نعم مع نموذج صغير. لتطبيقات PocketPal AI وMLC Chat وPrivate LLM إصدارات للهاتف. يعتمد تحميل نموذج معين وعمله بسلاسة على جهازك، فابدأ بالصغير.',
          },
          {
            q: 'ما هواتف Android المناسبة؟',
            a: 'لا توجد قائمة موحدة موثوقة. تؤثر الذاكرة المتاحة والمعالج وإصدار Android ودعم التطبيق. ثبّت من المصدر الرسمي وجرّب 1B أولاً.',
          },
          {
            q: 'هل يوجد تطبيق رسمي لـ Ollama على الهاتف؟',
            a: 'تذكر صفحة تنزيل Ollama أنظمة macOS وLinux وWindows، دون iOS أو Android. تتصل تطبيقات العميل من أطراف ثالثة بـ Ollama على حاسوب.',
          },
          {
            q: 'MLC Chat أم PocketPal AI؟',
            a: 'اختر ما يدعم نموذجك وجهازك. يشغّل PocketPal AI نماذج GGUF على iOS وAndroid، ويستخدم MLC Chat نماذج مهيأة لـ MLC LLM. لم نقارن سرعتهما.',
          },
          {
            q: 'هل تستطيع تطبيقات Android استخدام Gemini Nano؟',
            a: 'توثق Google واجهات ML Kit GenAI التي تتيح للمطورين استخدام Gemini Nano عبر AICore على الأجهزة المدعومة، ويختلف الدعم حسب الميزة والجهاز.',
          },
          {
            q: 'هل يستنزف النموذج المحلي البطارية؟',
            a: 'يستهلك توليد النص الطاقة وقد يسخّن الجهاز، ويعتمد المقدار على الهاتف والتطبيق والنموذج. لم تقِس PromptQuorum مدد التشغيل.',
          },
          {
            q: 'هل تبقى بياناتي خاصة مع نموذج محلي؟',
            a: 'قد تبقى الطلبات على الجهاز أثناء الاستدلال، لكن التطبيق قد يستخدم التحليلات أو النسخ الاحتياطي أو البحث في الويب أو ميزات سحابية. اقرأ سياسة الخصوصية وراجع الإعدادات.',
          },
          {
            q: 'هل يشغّل الهاتف نموذج 70B؟',
            a: 'يبلغ حجم نموذج 70B بصيغة Q4 نحو 43 جيجابايت دون ذاكرة السياق، وهو أكبر مما تتسع له ذاكرة هاتف معتاد. استخدم حاسوباً مناسباً أو خادماً مستأجراً.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل العتاد لـ LLM المحلي](/ar/local-llms/local-llm-hardware-guide)',
          '[أفضل واجهات LLM المحلي](/ar/local-llms/best-local-llm-frontends)',
          '[الحاسوب المحمول مقابل المكتبي لـ LLM المحلي](/ar/local-llms/laptop-vs-desktop-local-llm)',
          '[أفضل نماذج LLM المحلية الصغيرة أقل من 4 GB](/ar/prompt-bites/best-ollama-models-4gb-vram)',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama)',
          '[أفضل النماذج مفتوحة المصدر لـ Ollama](/ar/local-llms/top-open-source-models-ollama)',
          '[الذكاء الاصطناعي على الجهاز من Apple مقابل النماذج المحلية](/ar/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع PocketPal AI: المنصات والرخصة والصيغ](https://github.com/a-ghorbani/pocketpal-ai)',
          '[دليل MLC LLM لنظام iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[دليل MLC LLM لنظام Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[صفحة تنزيل Ollama](https://ollama.com/download)',
          '[أحجام Llama 3.2 في مكتبة Ollama](https://ollama.com/library/llama3.2/tags)',
          '[واجهات Google ML Kit GenAI](https://developers.google.com/ml-kit/genai)',
          '[ما لا تستطيع النماذج اللغوية فعله](https://www.promptquorum.com/ar/prompt-engineering/ai-limitations-what-llms-cant-do)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'النماذج اللغوية المحلية على الهاتف 2026: ذكاء اصطناعي دون اتصال على iPhone وAndroid',
      description: 'تشغيل نموذج لغوي محلي على iPhone أو Android: ‏PocketPal AI وMLC Chat وPrivate LLM، وأحجام النماذج، ولماذا يحتاج Ollama إلى حاسوب، وأبرز الحدود (2026).',
      url: 'https://www.promptquorum.com/ar/local-llms/mobile-local-llms',
      inLanguage: 'ar',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        {
          '@type': 'Thing',
          name: 'PocketPal AI',
        },
        {
          '@type': 'Thing',
          name: 'MLC Chat',
        },
        {
          '@type': 'Thing',
          name: 'Private LLM',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'المطورون ومستخدمو الهواتف الذين يقيّمون الذكاء الاصطناعي دون اتصال على iOS وAndroid',
      },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يمكن تشغيل نموذج لغوي محلي على iPhone؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'غالباً نعم مع نموذج صغير. لتطبيقات PocketPal AI وMLC Chat وPrivate LLM إصدارات للهاتف. يعتمد تحميل نموذج معين وعمله بسلاسة على جهازك، فابدأ بالصغير.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما هواتف Android المناسبة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا توجد قائمة موحدة موثوقة. تؤثر الذاكرة المتاحة والمعالج وإصدار Android ودعم التطبيق. ثبّت من المصدر الرسمي وجرّب 1B أولاً.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يوجد تطبيق رسمي لـ Ollama على الهاتف؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'تذكر صفحة تنزيل Ollama أنظمة macOS وLinux وWindows، دون iOS أو Android. تتصل تطبيقات العميل من أطراف ثالثة بـ Ollama على حاسوب.',
          },
        },
        {
          '@type': 'Question',
          name: 'MLC Chat أم PocketPal AI؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'اختر ما يدعم نموذجك وجهازك. يشغّل PocketPal AI نماذج GGUF على iOS وAndroid، ويستخدم MLC Chat نماذج مهيأة لـ MLC LLM. لم نقارن سرعتهما.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل تستطيع تطبيقات Android استخدام Gemini Nano؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'توثق Google واجهات ML Kit GenAI التي تتيح للمطورين استخدام Gemini Nano عبر AICore على الأجهزة المدعومة، ويختلف الدعم حسب الميزة والجهاز.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يستنزف النموذج المحلي البطارية؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يستهلك توليد النص الطاقة وقد يسخّن الجهاز، ويعتمد المقدار على الهاتف والتطبيق والنموذج. لم تقِس PromptQuorum مدد التشغيل.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل تبقى بياناتي خاصة مع نموذج محلي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'قد تبقى الطلبات على الجهاز أثناء الاستدلال، لكن التطبيق قد يستخدم التحليلات أو النسخ الاحتياطي أو البحث في الويب أو ميزات سحابية. اقرأ سياسة الخصوصية وراجع الإعدادات.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يشغّل الهاتف نموذج 70B؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يبلغ حجم نموذج 70B بصيغة Q4 نحو 43 جيجابايت دون ذاكرة السياق، وهو أكبر مما تتسع له ذاكرة هاتف معتاد. استخدم حاسوباً مناسباً أو خادماً مستأجراً.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'تطبيقات لاستخدام النماذج عبر الهاتف أو الجهاز اللوحي',
      numberOfItems: 4,
      inLanguage: 'ar',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
    pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'LLM local no celular em 2026: IA offline no iPhone e Android',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-pt.webp',
    seoTitle: 'LLM local no iPhone ou Android: guia 2026',
    intro: '**Muitos celulares e tablets atuais conseguem rodar um modelo de linguagem pequeno no próprio aparelho.** Este guia mostra os apps, o tamanho dos modelos, por que MLC Chat e Ollama são coisas diferentes e quais limites esperar. A PromptQuorum não testou celulares, então não há números de velocidade nem de bateria.',
    metaDescription: 'LLM local no iPhone ou Android: PocketPal AI, MLC Chat e Private LLM, tamanho dos modelos, por que o Ollama precisa de um computador e os limites (2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Sim, muitos celulares atuais rodam um modelo pequeno offline. Comece com um de 1B (o Llama 3.2 1B tem 1.3 GB na biblioteca do Ollama; versões de apps variam) e depois teste o de 3B (2.0 GB) se o aparelho aguentar. Velocidade, calor e bateria dependem do celular, do app e do modelo.**',
    audience: 'Desenvolvedores e usuários que avaliam IA offline no iOS e no Android',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM móvel',
    toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'Dados rápidos', anchor: '#quick-facts' },
        { label: 'O que realmente funciona no celular (2026)', anchor: '#what-works' },
        { label: 'Qual hardware móvel executa LLMs locais?', anchor: '#hardware' },
        { label: 'Melhores configurações atuais: apps e frameworks', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama: comparação no Android', anchor: '#mlc-vs-ollama' },
        { label: 'Celular vs laptop vs mini PC', anchor: '#mobile-comparison' },
        { label: 'Quão rápidos são os LLMs móveis vs desktop?', anchor: '#performance' },
        { label: 'Melhores casos de uso para LLMs móveis', anchor: '#use-cases' },
        { label: 'Limitações que você precisa conhecer', anchor: '#limitations' },
        { label: 'Quando os LLMs móveis serão práticos?', anchor: '#future' },
        { label: 'Considerações regionais', anchor: '#regional-context' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'Fontes', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Muitos celulares e tablets atuais rodam um modelo pequeno no aparelho; velocidade e estabilidade dependem do hardware, do app e do modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Com o app e o modelo baixados, o celular responde sem conexão, mas um modelo pequeno erra mais que um grande.',
          },
        ],
        items: [
          '**Pode funcionar:** comece com um modelo pequeno de cerca de 1 a 3 bilhões de parâmetros.',
          '**Apps:** PocketPal AI (iOS e Android), MLC Chat e Private LLM (aparelhos Apple).',
          '**Ollama:** a página de download cita macOS, Linux e Windows, sem app de celular.',
          '**Limites:** memória livre, calor, bateria e qualidade do modelo. Não os medimos.',
          '**Privacidade:** inferência local não resolve sozinha permissões, backups ou obrigações legais.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**Llama 3.2 1B:** cerca de 1.3 GB na [biblioteca do Ollama](https://ollama.com/library/llama3.2/tags); outros formatos variam',
          '**Llama 3.2 3B:** cerca de 2.0 GB na mesma biblioteca; rodar exige mais memória que o tamanho do arquivo',
          '**PocketPal AI:** app com licença MIT para iOS e Android que roda modelos GGUF ([repositório](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** na [App Store](https://llm.mlc.ai/docs/deploy/ios.html) para iOS; o [guia Android](https://llm.mlc.ai/docs/deploy/android.html) traz um APK de demonstração',
          '**Velocidade e bateria:** não medidas pela PromptQuorum',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: 'O que realmente funciona no celular (2026)',
        content: [
          '**Tarefas curtas:** perguntas simples, reescrever frases e resumos curtos são bons primeiros testes.',
          '**Tamanho e memória:** comece com 1B e só avance se o app carregar e ficar estável. O sistema e outros apps dividem a RAM.',
          '**Espere menos em:** documentos longos, código complexo e raciocínio exigente. Confira toda resposta importante.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Qual hardware móvel executa LLMs locais?',
        columns: ['Seu aparelho', 'Primeiro modelo', 'Download', 'Depois confira'],
        rows: [
          {
            'Seu aparelho': 'Antigo ou com pouca memória',
            'Primeiro modelo': 'Llama 3.2 1B',
            Download: 'Cerca de 1.3 GB',
            'Depois confira': 'Carrega e fica aberto?',
          },
          {
            'Seu aparelho': 'Topo de linha recente',
            'Primeiro modelo': 'Llama 3.2 3B',
            Download: 'Cerca de 2.0 GB',
            'Depois confira': 'Velocidade, calor, bateria',
          },
          {
            'Seu aparelho': 'Tablet com mais memória',
            'Primeiro modelo': 'Llama 3.2 3B ou maior',
            Download: '2.0 GB ou mais',
            'Depois confira': 'Estabilidade em chats longos',
          },
        ],
        content: [
          '**Não existe um celular mínimo único.** Memória livre, chip, sistema e versão do app decidem o que carrega.',
        ],
        note: 'Os tamanhos vêm da biblioteca do Ollama e servem só de referência; arquivos de apps móveis podem diferir.',
      },
      apps: {
        id: 'apps',
        title: 'Melhores apps e frameworks atuais',
        items: [
          '**[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai):** iOS e Android, roda modelos GGUF, licença MIT.',
          '**[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html):** grátis na App Store para iOS; no Android, o guia traz um APK de demonstração.',
          '**[Private LLM](https://privatellm.app):** iPhone, iPad e Mac, compra única, funciona offline após baixar o modelo.',
          '**[Ollama](https://ollama.com/download):** para macOS, Linux e Windows; a página não cita app de celular.',
          '**Antes de instalar:** confira a loja e as informações de privacidade. Não testamos esses apps para esta página.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama: comparação de inferência local no Android',
        content: [
          '**A diferença é onde o modelo roda.** O MLC Chat roda o modelo no celular. A página de download do Ollama só cita computadores; um celular pode usá-lo por um app cliente de terceiros ligado a um computador.',
          '**No Android:** o guia do MLC traz um APK de demonstração feito para o Samsung S23 e não menciona o Google Play. Instalar APK fora de loja tem riscos; use só os links oficiais do projeto.',
        ],
        columns: ['Fator', 'MLC Chat', 'Ollama com cliente'],
        rows: [
          {
            Fator: 'Onde o modelo roda',
            'MLC Chat': 'No celular',
            'Ollama com cliente': 'No seu computador',
          },
          {
            Fator: 'Fora da sua rede',
            'MLC Chat': 'Sim, após baixar',
            'Ollama com cliente': 'Precisa alcançar o computador',
          },
          {
            Fator: 'O que instalar',
            'MLC Chat': 'App MLC Chat ou APK',
            'Ollama com cliente': 'Ollama e um app cliente',
          },
          {
            Fator: 'Memória que limita',
            'MLC Chat': 'A do celular',
            'Ollama com cliente': 'A do computador',
          },
          {
            Fator: 'A velocidade depende de',
            'MLC Chat': 'Celular e modelo',
            'Ollama com cliente': 'Computador, modelo e rede',
          },
        ],
        note: 'Não exponha um servidor Ollama diretamente à internet. Use uma rede confiável ou uma conexão privada protegida.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: 'Celular vs laptop vs mini PC: comparação de desempenho',
        columns: ['Aparelho', 'Folga para modelos', 'Velocidade', 'Energia', 'Custo'],
        rows: [
          {
            Aparelho: 'Celular',
            'Folga para modelos': 'Modelos pequenos',
            Velocidade: 'Teste no seu aparelho',
            Energia: 'Gasta bateria',
            Custo: 'Nenhum se ele aguentar',
          },
          {
            Aparelho: 'Notebook',
            'Folga para modelos': 'Depende da memória',
            Velocidade: 'Teste no seu aparelho',
            Energia: 'Bateria ou tomada',
            Custo: 'Depende do modelo',
          },
          {
            Aparelho: 'Mini PC',
            'Folga para modelos': 'Depende da memória',
            Velocidade: 'Teste no seu aparelho',
            Energia: 'Tomada',
            Custo: 'Depende do modelo',
          },
        ],
      },
      performance: {
        id: 'performance',
        title: 'Quão rápidos são os LLMs móveis vs desktop?',
        content: [
          '**O nome do celular não permite prever a velocidade.** Contam largura de banda de memória, chip, tamanho, quantização, versão do app e temperatura.',
          '**Não publicamos números de celular porque não medimos.** Para comparar, repita o mesmo prompt e anote modelo e versão do app.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: 'Melhores casos de uso para LLMs móveis',
        items: [
          '**Perguntas offline:** rascunhar ideias e conferir os fatos depois.',
          '**Notas:** encurtar ou reescrever suas anotações; veja onde o app guarda as conversas.',
          '**Dúvidas curtas de código:** pedir explicações de trechos pequenos e testar todo código.',
          '**Idiomas:** praticar diálogos simples, contando com erros.',
          '**Dados sensíveis de trabalho:** só com autorização da organização. Processamento local sozinho não é conformidade.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitações que você precisa conhecer',
        items: [
          '**Memória:** o modelo precisa de mais memória que o tamanho do arquivo; o app pode fechar.',
          '**Bateria e calor:** gerar texto gasta energia e pode esquentar e desacelerar o aparelho.',
          '**Qualidade:** modelos pequenos podem afirmar erros com segurança.',
          '**Nada crítico:** não dependa deles para decisões médicas, jurídicas ou financeiras.',
          '**Armazenamento:** cada modelo ocupa espaço; apague os que não usa.',
        ],
      },
      future: {
        id: 'future',
        title: 'Quando os LLMs móveis serão práticos para uso geral?',
        content: [
          '**Não prevemos tamanhos ou velocidades de celulares futuros.** Acompanhe versões dos apps, modelos suportados e as APIs locais do Google.',
          '**Se o celular não bastar:** rode o modelo num computador e conecte-se com segurança. O Mac mini M5 Pro parte de US$ 1.699 com 24 GB; a versão de 64 GB, de US$ 2.699 (preços dos EUA).',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Considerações regionais',
        content: [
          '**Brasil:** a inferência no aparelho pode evitar enviar prompts a um provedor de IA. Isso sozinho não garante conformidade com a LGPD; base legal, segurança, retenção e demais obrigações continuam.',
          '**Outros países:** o GDPR na UE, o APPI no Japão ou a PIPL na China têm requisitos próprios. Rodar o modelo no celular não os resolve.',
          '**Antes do uso no trabalho:** verifique análises do app, relatórios de falha, backups em nuvem e regras da empresa. Informação geral, não é aconselhamento jurídico.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso rodar um LLM local no iPhone?',
            a: 'Muitas vezes sim, com um modelo pequeno. PocketPal AI, MLC Chat e Private LLM têm app para iPhone. Se um modelo carrega e roda bem depende do seu aparelho; comece pequeno.',
          },
          {
            q: 'Quais celulares Android servem?',
            a: 'Não há uma lista única confiável. Contam memória livre, chip, versão do Android e suporte do app. Instale pela fonte oficial e teste primeiro um 1B.',
          },
          {
            q: 'Existe app oficial do Ollama para celular?',
            a: 'A página de download do Ollama cita macOS, Linux e Windows, não iOS nem Android. Clientes móveis de terceiros se conectam ao Ollama em um computador.',
          },
          {
            q: 'MLC Chat ou PocketPal AI?',
            a: 'Escolha o que suporta seu modelo e aparelho. O PocketPal AI roda modelos GGUF no iOS e no Android. O MLC Chat usa modelos preparados para MLC LLM. Não comparamos a velocidade.',
          },
          {
            q: 'Apps Android podem usar o Gemini Nano?',
            a: 'O Google documenta as APIs ML Kit GenAI, que permitem usar o Gemini Nano via AICore em aparelhos compatíveis. O suporte varia por recurso e aparelho.',
          },
          {
            q: 'Um LLM local gasta muita bateria?',
            a: 'Gerar texto consome energia e pode esquentar o aparelho. Quanto depende do celular, app e modelo. A PromptQuorum não mediu autonomia.',
          },
          {
            q: 'Meus dados ficam privados?',
            a: 'Na inferência os prompts podem ficar no aparelho, mas o app pode usar análises, backups, busca na web ou nuvem. Leia a política e confira as configurações.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[M5 Pro vs M5 Max para LLMs locais: especificações e velocidades estimadas](/pt/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Mac Mini M5 como Servidor de IA Local](/pt/local-llms/mac-mini-m5-local-ai-server)',
          '[LLMs Locais vs APIs na Nuvem](/pt/local-llms/local-llms-vs-cloud-apis)',
          '[A IA no dispositivo da Apple vs LLMs locais](/pt/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório do PocketPal AI: plataformas, licença e formatos](https://github.com/a-ghorbani/pocketpal-ai)',
          '[Guia do MLC LLM para iOS](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[Guia do MLC LLM para Android](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Página de download do Ollama](https://ollama.com/download)',
          '[Tamanhos do Llama 3.2 na biblioteca do Ollama](https://ollama.com/library/llama3.2/tags)',
          '[APIs Google ML Kit GenAI](https://developers.google.com/ml-kit/genai)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM local no celular em 2026: IA offline no iPhone e Android',
      description: 'LLM local no iPhone ou Android: PocketPal AI, MLC Chat e Private LLM, tamanho dos modelos, por que o Ollama precisa de um computador e os limites (2026).',
      url: 'https://www.promptquorum.com/pt/local-llms/mobile-local-llms',
      inLanguage: 'pt-BR',
      datePublished: '2026-04-04',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Apps para usar modelos com celular ou tablet',
      numberOfItems: 4,
      inLanguage: 'pt-BR',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '2026년 모바일 로컬 LLM: iPhone과 Android의 오프라인 AI',
    heroImage: '/images/local-llms-mobile-local-llms-overview-hero-ko.webp',
    seoTitle: 'iPhone·Android에서 로컬 LLM 실행하기 (2026)',
    intro: '**최근 스마트폰과 태블릿 상당수는 작은 언어 모델을 기기에서 직접 실행할 수 있습니다.** 이 가이드는 관련 앱, 모델 크기, MLC Chat과 Ollama의 차이, 예상해야 할 한계를 설명합니다. PromptQuorum은 스마트폰을 벤치마크하지 않았으므로 속도나 배터리 수치를 제시하지 않습니다.',
    metaDescription: 'iPhone과 Android에서 로컬 LLM 실행하기: PocketPal AI, MLC Chat, Private LLM, 모델 다운로드 크기, Ollama에 컴퓨터가 필요한 이유와 현실적인 한계(2026).',
    publishDate: '2026-04-04',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**네, 최근 스마트폰 상당수는 작은 모델을 오프라인으로 실행할 수 있습니다. 1B 모델부터 시작하고(Ollama 라이브러리의 Llama 3.2 1B는 1.3GB이며 앱용 파일은 다를 수 있음), 기기가 감당하면 3B(2.0GB)를 시험하십시오. 속도, 발열, 배터리는 기기·앱·모델에 따라 다릅니다.**',
    audience: 'iOS와 Android의 오프라인 AI와 온디바이스 추론을 검토하는 개발자와 모바일 사용자',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '모바일 LLM',
    toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '빠른 정보', anchor: '#quick-facts' },
        { label: '2026년 모바일에서 실제로 작동하는 것', anchor: '#what-works' },
        { label: '로컬 LLM을 실행할 수 있는 모바일 하드웨어', anchor: '#hardware' },
        { label: '현재 최고의 설정: 앱 & 프레임워크', anchor: '#apps' },
        { label: 'MLC LLM vs Ollama: 안드로이드 비교', anchor: '#mlc-vs-ollama' },
        { label: '모바일 vs 노트북 vs 미니 PC', anchor: '#mobile-comparison' },
        { label: '모바일 LLM과 데스크톱의 속도 비교', anchor: '#performance' },
        { label: '모바일 LLM의 최적 활용 사례', anchor: '#use-cases' },
        { label: '알아야 할 한계점', anchor: '#limitations' },
        { label: '모바일 LLM은 언제 실용적이 될까?', anchor: '#future' },
        { label: '지역별 고려 사항', anchor: '#regional-context' },
        { label: '시청: PocketPal AI로 스마트폰에서 로컬 AI 모델 실행하기', anchor: '#video-walkthrough' },
        { label: '자주 묻는 질문', anchor: '#faq' },
        { label: '관련 자료', anchor: '#related-reading' },
        { label: '출처', anchor: '#sources' },
      ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '최근 스마트폰과 태블릿 상당수는 작은 언어 모델을 기기에서 실행할 수 있으며 속도와 안정성은 하드웨어, 앱, 모델에 따라 다릅니다.',
          },
          {
            type: 'plain-terms',
            text: '앱과 모델을 내려받으면 연결 없이도 답할 수 있지만, 작은 모델은 큰 모델보다 실수가 많습니다.',
          },
        ],
        items: [
          '**가능합니다:** 약 10억~30억 파라미터의 작은 모델부터 시작하십시오.',
          '**앱:** PocketPal AI(iOS·Android), MLC Chat, Private LLM(Apple 기기).',
          '**Ollama:** 다운로드 페이지에는 macOS, Linux, Windows만 있고 휴대폰 앱은 없습니다.',
          '**한계:** 여유 메모리, 발열, 배터리, 모델 품질. 당 사이트는 측정하지 않았습니다.',
          '**개인정보:** 로컬 추론만으로 앱 권한, 백업, 법적 의무 문제가 해결되지는 않습니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 정보',
        items: [
          '**Llama 3.2 1B:** [Ollama 라이브러리](https://ollama.com/library/llama3.2/tags)에서 약 1.3GB, 다른 형식은 다름',
          '**Llama 3.2 3B:** 같은 라이브러리에서 약 2.0GB, 실행에는 파일 크기보다 많은 메모리가 필요',
          '**PocketPal AI:** GGUF 모델을 실행하는 MIT 라이선스 iOS·Android 앱([저장소](https://github.com/a-ghorbani/pocketpal-ai))',
          '**MLC Chat:** iOS는 [App Store](https://llm.mlc.ai/docs/deploy/ios.html), [Android 안내](https://llm.mlc.ai/docs/deploy/android.html)에는 데모 APK 링크',
          '**속도와 배터리:** PromptQuorum은 측정하지 않음',
        ],
      },
      whatWorks: {
        id: 'what-works',
        title: '2026년 모바일에서 실제로 작동하는 것',
        content: [
          '**짧은 작업:** 간단한 질문, 몇 문장 고쳐 쓰기, 짧은 요약이 첫 시험에 적합합니다.',
          '**모델 크기:** 1B로 시작하고, 앱이 불러오며 안정적일 때만 3B 이상으로 올리십시오.',
          '**메모리:** 운영체제와 다른 앱이 RAM을 함께 쓰므로 표기 용량 전부를 모델에 쓸 수는 없습니다.',
          '**기대를 낮출 부분:** 긴 문서, 복잡한 코드, 어려운 추론. 중요한 답은 반드시 확인하십시오.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '2026년 로컬 LLM을 실행할 수 있는 모바일 하드웨어',
        content: [
          '**모두에게 통하는 최소 기종은 없습니다.** 여유 메모리, 칩, 운영체제, 앱 버전에 따라 불러올 수 있는 모델이 달라집니다. 표는 시험 순서이며 호환 보장이 아닙니다.',
        ],
        columns: ['사용 기기', '첫 시험 모델', '다운로드 크기', '이후 확인'],
        rows: [
          {
            '사용 기기': '구형·저메모리 휴대폰',
            '첫 시험 모델': 'Llama 3.2 1B',
            '다운로드 크기': '약 1.3GB',
            '이후 확인': '로드되고 유지되는지',
          },
          {
            '사용 기기': '최신 고급 휴대폰',
            '첫 시험 모델': 'Llama 3.2 3B',
            '다운로드 크기': '약 2.0GB',
            '이후 확인': '속도·발열·배터리',
          },
          {
            '사용 기기': '메모리가 큰 태블릿',
            '첫 시험 모델': 'Llama 3.2 3B 이상',
            '다운로드 크기': '2.0GB 이상',
            '이후 확인': '긴 대화 안정성',
          },
        ],
        note: '크기는 Ollama 라이브러리 기준이며 참고용입니다. 모바일 앱이 내려받는 파일은 다를 수 있습니다.',
      },
      apps: {
        id: 'apps',
        title: '현재 최고의 설정: 앱 & 프레임워크',
        columns: ['앱', '플랫폼', '설명', '비용/출처'],
        rows: [
          {
            '앱': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)',
            '플랫폼': 'iOS, Android',
            '설명': 'GGUF 모델 로컬 실행',
            '비용/출처': 'MIT 라이선스',
          },
          {
            '앱': '[MLC Chat](https://llm.mlc.ai/docs/deploy/ios.html)',
            '플랫폼': 'iOS, Android 데모 APK',
            '설명': 'MLC LLM 프로젝트 채팅 앱',
            '비용/출처': 'App Store 무료',
          },
          {
            '앱': '[Private LLM](https://privatellm.app)',
            '플랫폼': 'iPhone, iPad, Mac',
            '설명': '모델 다운로드 후 오프라인',
            '비용/출처': '1회 구매',
          },
          {
            '앱': '[Ollama](https://ollama.com/download)',
            '플랫폼': 'macOS, Linux, Windows',
            '설명': '컴퓨터용 모델 실행 도구',
            '비용/출처': '휴대폰 앱 표기 없음',
          },
        ],
        note: '기능, 배포 상태, 가격은 바뀝니다. 설치 전에 스토어 페이지와 개인정보 안내를 확인하십시오. 이 페이지를 위해 앱을 시험하지는 않았습니다.',
      },
      frameworks: {
        id: 'frameworks',
        title: '모바일 LLM 개발을 지원하는 프레임워크',
        content: [
          '**llama.cpp:** GGUF 모델용 [오픈소스 엔진](https://github.com/ggml-org/llama.cpp)으로, PocketPal AI가 언어 모델에 사용합니다.',
          '**MLC LLM:** [iOS](https://llm.mlc.ai/docs/deploy/ios.html)와 [Android](https://llm.mlc.ai/docs/deploy/android.html) 등 여러 플랫폼에서 모델을 컴파일해 실행합니다.',
          '**Android 시스템 모델:** Google의 [ML Kit GenAI API](https://developers.google.com/ml-kit/genai)로 개발자는 지원 기기에서 AICore를 통해 Gemini Nano를 사용할 수 있습니다.',
        ],
      },
      mlcVsOllama: {
        id: 'mlc-vs-ollama',
        title: 'MLC LLM vs Ollama: 안드로이드 온디바이스 추론 비교',
        content: [
          '**차이는 모델이 실행되는 위치입니다.** MLC Chat은 휴대폰에서 모델을 실행합니다. Ollama 다운로드 페이지에는 컴퓨터만 있으며, 휴대폰에서는 컴퓨터에 접속하는 타사 클라이언트 앱으로 사용합니다.',
          '**Android 설치:** MLC의 Android 안내는 Samsung S23용으로 빌드한 데모 APK를 제공하며 Google Play는 언급하지 않습니다. 스토어 밖 APK 설치는 위험하므로 프로젝트 공식 링크에서만 받으십시오.',
        ],
        columns: ['항목', 'MLC Chat', 'Ollama + 휴대폰 클라이언트'],
        rows: [
          {
            '항목': '모델 실행 위치',
            'MLC Chat': '휴대폰',
            'Ollama + 휴대폰 클라이언트': '내 컴퓨터',
          },
          {
            '항목': '외부에서 사용',
            'MLC Chat': '모델 다운로드 후 가능',
            'Ollama + 휴대폰 클라이언트': '컴퓨터 접속 필요',
          },
          {
            '항목': '설치할 것',
            'MLC Chat': 'MLC Chat 앱 또는 APK',
            'Ollama + 휴대폰 클라이언트': 'Ollama와 클라이언트 앱',
          },
          {
            '항목': '제한이 되는 메모리',
            'MLC Chat': '휴대폰',
            'Ollama + 휴대폰 클라이언트': '컴퓨터',
          },
          {
            '항목': '속도를 좌우하는 것',
            'MLC Chat': '휴대폰과 모델',
            'Ollama + 휴대폰 클라이언트': '컴퓨터·모델·네트워크',
          },
        ],
        note: 'Ollama 서버를 공용 인터넷에 직접 노출하지 마십시오. 신뢰할 수 있는 네트워크나 안전하게 구성한 사설 연결을 사용하십시오.',
      },
      mobileComparison: {
        id: 'mobile-comparison',
        title: '모바일 vs 노트북 vs 미니 PC: 무엇을 선택해야 할까?',
        content: ['**휴대폰은 가장 휴대하기 좋고, 컴퓨터는 대체로 메모리와 냉각에 여유가 있습니다.**'],
        columns: ['항목', '스마트폰', '노트북', '미니 PC'],
        rows: [
          {
            '항목': '모델 여유',
            '스마트폰': '소형 모델',
            '노트북': '메모리에 따라',
            '미니 PC': '메모리에 따라',
          },
          {
            '항목': '휴대성',
            '스마트폰': '주머니',
            '노트북': '가방',
            '미니 PC': '주로 고정',
          },
          {
            '항목': '전원',
            '스마트폰': '배터리, 발열',
            '노트북': '배터리 또는 전원',
            '미니 PC': '전원 연결',
          },
          {
            '항목': '추가 비용',
            '스마트폰': '기존 기기로 충분하면 없음',
            '노트북': '기종에 따라',
            '미니 PC': '기종에 따라',
          },
          {
            '항목': '적합한 용도',
            '스마트폰': '짧은 오프라인 작업',
            '노트북': '이동 작업',
            '미니 PC': '가정·사무실 서버',
          },
        ],
        note: '휴대폰에 모델을 제공할 컴퓨터는 [미니 PC 가이드](/ko/local-llms/best-mini-pcs-local-llm)를 참고하십시오.',
      },
      performance: {
        id: 'performance',
        title: '모바일 LLM과 데스크톱의 속도는 얼마나 차이 나는가?',
        content: [
          '**기종 이름만으로는 속도를 예측할 수 없습니다.** 메모리 대역폭, 칩, 모델 크기, 양자화, 앱 버전, 온도가 모두 영향을 줍니다. 측정하지 않았으므로 휴대폰 속도 수치를 싣지 않습니다.',
        ],
        columns: ['요인', '영향', '대처'],
        rows: [
          {
            '요인': '모델 크기',
            '영향': '클수록 대개 느림',
            '대처': '작게 시작',
          },
          {
            '요인': '양자화',
            '영향': '크기와 품질 변화',
            '대처': '답변 비교',
          },
          {
            '요인': '발열',
            '영향': '속도 저하 가능',
            '대처': '긴 사용 시험',
          },
          {
            '요인': '앱과 버전',
            '영향': '백엔드가 다름',
            '대처': '버전 기록',
          },
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '지역별 고려 사항',
        content: [
          '**한국:** 기기 내 추론은 프롬프트를 AI 업체에 보내지 않을 수 있게 합니다. 그것만으로 개인정보보호법을 준수하게 되지는 않으며 처리 근거, 안전 조치 등의 의무는 남습니다.',
          '**다른 지역:** EU의 GDPR, 일본의 APPI, 중국의 PIPL, 브라질의 LGPD 등은 각자의 요건이 있으며 휴대폰에서 모델을 실행한다고 충족되지 않습니다.',
          '**업무에 쓰기 전에:** 앱 분석, 오류 보고, 클라우드 백업, 기기 관리, 사내 규정을 확인하십시오. 일반적인 정보이며 법률 자문이 아닙니다. 공개·상업 서비스는 별도의 법률 검토가 필요합니다.',
        ],
      },
      useCases: {
        id: 'use-cases',
        title: '모바일 LLM의 최적 활용 사례',
        content: ['**기기 내 소형 모델은 최고 품질보다 오프라인 사용이 중요한 제한된 작업에 적합합니다.**'],
        items: [
          '**오프라인 질문:** 아이디어를 정리하거나 간단히 묻고, 사실은 나중에 확인하십시오.',
          '**메모:** 내 메모를 줄이거나 고쳐 씁니다. 앱이 대화를 어디에 저장하고 백업하는지 확인하십시오.',
          '**짧은 코드 질문:** 짧은 코드의 설명을 요청하고 모든 코드는 시험하십시오.',
          '**언어 연습:** 간단한 대화를 연습하되 오류를 감안하십시오.',
          '**민감한 업무 데이터:** 조직의 승인이 있을 때만 사용하십시오. 로컬 처리만으로는 법령 준수가 되지 않습니다.',
          '**일기:** 글감을 얻을 수 있습니다. 사적인 내용이면 권한과 백업을 확인하십시오.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '알아야 할 한계점',
        items: [
          '**메모리:** 모델에는 파일 크기보다 많은 메모리가 필요하고 긴 컨텍스트는 더 필요합니다. 부족하면 앱이 종료될 수 있습니다.',
          '**배터리:** 텍스트 생성은 전력을 씁니다. 내 기기에서 확인하십시오. 사용 시간은 싣지 않습니다.',
          '**발열:** 오래 쓰면 느려질 수 있습니다. 지나치게 뜨거워지면 중단하십시오.',
          '**품질:** 작은 모델은 틀린 내용을 자신 있게 말할 수 있고 복잡한 작업에 약합니다.',
          '**중요한 판단 금지:** 의료, 법률, 금융 결정을 맡기지 마십시오.',
          '**저장 공간:** 모델마다 공간을 차지하니 안 쓰는 것은 삭제하십시오.',
        ],
      },
      future: {
        id: 'future',
        title: '모바일 LLM은 언제 실용적이 될까?',
        content: [
          '**미래 휴대폰의 모델 크기나 속도는 예측하지 않습니다.** 시점을 말할 믿을 만한 근거가 없습니다.',
          '**지켜볼 것:** 앱 업데이트, 지원 모델, Google의 온디바이스 API.',
          '**판단 방법:** 업데이트 후 같은 짧은 시험을 반복해 답변, 로딩 시간, 배터리를 비교하십시오.',
          '**휴대폰으로 부족하다면:** 컴퓨터에서 모델을 실행하고 안전하게 접속하십시오. Mac mini M5 Pro는 24GB가 1,699달러부터, 64GB 구성이 2,699달러부터입니다(미국 정가). [하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide)를 참고하십시오.',
        ],
      },
      videoWalkthrough: {
        id: 'video-walkthrough',
        title: '시청: PocketPal AI로 스마트폰에서 로컬 AI 모델 실행하기',
        content: 'kintu 채널의 외부 영상으로 제목은 “How to Run Local LLMs on Your iOS & Android Smartphone (PocketPal AI)”입니다. PromptQuorum은 내용을 검증하지 않았으며 앱과 메뉴가 달라졌을 수 있습니다.',
        youtubeUrl: 'https://www.youtube.com/watch?v=sMIEK_dzNLU',
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPhone에서 로컬 LLM을 실행할 수 있습니까?',
            a: '작은 모델이라면 가능한 경우가 많습니다. PocketPal AI, MLC Chat, Private LLM은 iPhone 앱이 있습니다. 특정 모델의 실행 여부는 기종에 따라 다르니 작게 시작하십시오.',
          },
          {
            q: '어떤 Android 휴대폰에서 됩니까?',
            a: '믿을 만한 단일 목록은 없습니다. 여유 메모리, 칩, Android 버전, 앱 지원이 관건입니다. 공식 경로로 설치하고 1B부터 시험하십시오.',
          },
          {
            q: '휴대폰용 공식 Ollama 앱이 있습니까?',
            a: 'Ollama 다운로드 페이지에는 macOS, Linux, Windows가 있고 iOS와 Android는 없습니다. 타사 휴대폰 클라이언트는 컴퓨터의 Ollama에 접속합니다.',
          },
          {
            q: 'MLC Chat과 PocketPal AI 중 무엇을 골라야 합니까?',
            a: '원하는 모델과 기기를 지원하는 쪽을 고르십시오. PocketPal AI는 iOS와 Android에서 GGUF 모델을 실행하고, MLC Chat은 MLC LLM용 모델을 사용합니다. 속도는 비교하지 않았습니다.',
          },
          {
            q: 'Android 앱이 Gemini Nano를 쓸 수 있습니까?',
            a: 'Google은 ML Kit GenAI API를 문서화하고 있으며 개발자는 지원 기기에서 AICore를 통해 Gemini Nano를 사용할 수 있습니다. 지원 범위는 기능과 기기마다 다릅니다.',
          },
          {
            q: '로컬 LLM은 배터리를 많이 씁니까?',
            a: '텍스트 생성은 전력을 쓰고 기기가 따뜻해질 수 있습니다. 정도는 기기, 앱, 모델에 따라 다릅니다. PromptQuorum은 사용 시간을 측정하지 않았습니다.',
          },
          {
            q: '로컬 모델이면 데이터가 비공개입니까?',
            a: '추론 중 프롬프트는 기기에 남을 수 있지만 앱이 분석, 백업, 웹 검색, 클라우드 기능을 쓸 수 있습니다. 개인정보 안내와 설정을 확인하십시오.',
          },
          {
            q: '휴대폰에서 70B 모델을 실행할 수 있습니까?',
            a: '70B Q4 모델은 컨텍스트를 제외하고 약 43GB로 일반 휴대폰 메모리에 담기 어렵습니다. 적합한 컴퓨터나 임대 서버를 사용하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide)',
          '[최고의 로컬 LLM 프론트엔드](/ko/local-llms/best-local-llm-frontends)',
          '[노트북 vs 데스크톱 로컬 LLM](/ko/local-llms/laptop-vs-desktop-local-llm)',
          '[4 GB 미만 최고의 소형 로컬 LLM](/ko/prompt-bites/best-ollama-models-4gb-vram)',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)',
          '[Ollama용 최고의 오픈 소스 모델](/ko/local-llms/top-open-source-models-ollama)',
          '[Apple 온디바이스 AI와 로컬 LLM 비교](/ko/local-llms/apple-on-device-ai-vs-local-llms)',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[PocketPal AI 저장소: 플랫폼, 라이선스, 형식](https://github.com/a-ghorbani/pocketpal-ai)',
          '[MLC LLM iOS 안내](https://llm.mlc.ai/docs/deploy/ios.html)',
          '[MLC LLM Android 안내](https://llm.mlc.ai/docs/deploy/android.html)',
          '[Ollama 다운로드 페이지](https://ollama.com/download)',
          '[Ollama 라이브러리의 Llama 3.2 크기](https://ollama.com/library/llama3.2/tags)',
          '[Google ML Kit GenAI API](https://developers.google.com/ml-kit/genai)',
          '[LLM이 할 수 없는 것](https://www.promptquorum.com/ko/prompt-engineering/ai-limitations-what-llms-cant-do)',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '휴대폰이나 태블릿으로 모델을 사용하는 앱',
      numberOfItems: 4,
      inLanguage: 'ko',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'PocketPal AI',
          url: 'https://github.com/a-ghorbani/pocketpal-ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MLC Chat',
          url: 'https://llm.mlc.ai/docs/deploy/ios.html',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private LLM',
          url: 'https://privatellm.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ollama',
          url: 'https://ollama.com/download',
        },
      ],
    },
  },
  };
