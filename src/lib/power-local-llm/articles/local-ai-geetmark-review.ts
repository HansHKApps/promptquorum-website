// Local AI: Offline Chat & Image (GeetMark) Review: Free Android App for Offline Chat, Stable Diffusion Images and Prompt Toolkits
// Slug: local-ai-geetmark-review
// Companion to: pocketpal-ai-review, off-grid-ai-review, tokforge-review, private-mind-review,
// best-local-llm-apps-android-2026
// Sources: the Google Play listing and the developer's website, checked 2026-10-09 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-en.webp',
    title: 'Local AI: Offline Chat & Image Review: Free Android App with Stable Diffusion and Prompt Toolkits',
    seoTitle: 'Local AI: Offline Chat & Image Review (Android)',
    intro:
      'Local AI: Offline Chat & Image is a free Android app published on Google Play by [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) that runs language models and Stable Diffusion image generation on the phone, plus 15 built-in prompt toolkits for writing, coding, study and business tasks. It carries a "Contains ads" label, the source code is not published, and no license is stated. This review is based on the Google Play listing and the developer\'s website at [localai.appsgm.com](https://localai.appsgm.com/), checked on 9 October 2026; PromptQuorum has not tested the app hands-on. It is unrelated to the open-source LocalAI server project.',
    metaDescription:
      'Local AI: Offline Chat & Image review: a free Android app with 20+ offline models, Stable Diffusion images and 15 prompt toolkits. Ads, privacy and limits.',
    twitterDescription:
      'Local AI: Offline Chat & Image review: free Android app for offline chat and Stable Diffusion images with 15 prompt toolkits. Contains ads, closed source, license not stated.',
    audience:
      'Android users who want a free offline chat and image app with ready-made prompt toolkits and who need to know what the sources confirm, what the developer only claims, and what could not be verified.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Offline Chat & Image review',
    targetKeywords: [
      'local ai offline chat and image review',
      'geetmark local ai android',
      'offline ai chat app android',
      'stable diffusion offline android app',
      'offline ai prompt toolkit app',
      'local llm android app with image generation',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock:
      '**Local AI: Offline Chat & Image by GeetMark is a free Android app that runs language models and Stable Diffusion on the device and adds 15 prompt toolkits, with no account or API key.** Its Google Play listing declares that no data is collected or shared, but it also carries a "Contains ads" label. The source code is not published and the license is not stated; the Play listing data gives the version as 26.10.11 as of 9 October 2026.',
    quickAnswerTop: {
      en: {
        question: 'Is Local AI: Offline Chat & Image free and does it run offline?',
        answer:
          'Per its Google Play listing, yes: it is free with no login or API key, and chat and image generation run on the device once models are downloaded. The listing also shows a "Contains ads" label, and model downloads need a network connection.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai); there is no iPhone or desktop version of this app listed.',
          'Chat with 20+ language models from 1B to 22B parameters, or generate images with Stable Diffusion (text-to-image, image-to-image, inpainting).',
          'Extras: 15 prompt toolkits ("Labs") such as Study, Code, Writing and Interview, plus LoRA support and an image upscaler.',
          'As checked on 9 October 2026: 5K+ Google Play downloads, released on 4 April 2026 and last updated on 30 September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Local AI: Offline Chat & Image?', anchor: 'what-is-local-ai-geetmark' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Hardware and Speed', anchor: 'hardware-requirements' },
      { label: 'Privacy, Ads and Online Features', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image is a free, ad-supported, closed-source Android app by GeetMark that runs language models and Stable Diffusion image generation on the phone and bundles 15 prompt toolkits.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play, download a model that fits your phone, and then chat, write, code or generate pictures without an account; the toolkits are ready-made prompt templates for tasks such as study, interviews and product descriptions.',
          },
        ],
        items: [
          'Publisher: listed on Google Play as GeetMark, with a support email and a privacy-policy link on the listing.',
          'Price and license: free with ads; no license text and no public source repository were found.',
          'Scope: 20+ chat models (1B to 22B parameters), Stable Diffusion with LoRA and .safetensors support, a local model manager, embeddings and an upscaler.',
          'Hardware: the listing recommends 4 GB+ of RAM, 2 to 15 GB of storage and a Snapdragon 8 Gen 1 or newer for best speed, with CPU and GPU fallback.',
          'Signals as checked on 9 October 2026: version 26.10.11, 5K+ downloads, Android 8.0 or newer, rated for all ages (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing and the developer\'s website, checked on 9 October 2026. Capabilities are the developer\'s own description, and PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'What Is Local AI: Offline Chat & Image?',
        content: [
          '**Local AI: Offline Chat & Image is an Android app that combines an offline chatbot, a Stable Diffusion image generator and a set of prompt-based writing and coding tools in one install.** According to its [Google Play listing](https://play.google.com/store/apps/details?id=com.geetmark.localai), it needs no login or API key and processes everything on the device.',
          'The app shares its name with other products: it is not the open-source LocalAI inference server, and the developer\'s website, [Local AI Hub](https://localai.appsgm.com/), is a separate directory of models and prompts that also advertises its own "Local AI Hub Android" download. That download is not linked from the Play listing, so this review covers only the Google Play app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The app is distributed through Google Play on Android; no iPhone, Mac or Windows version is listed.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android 8.0+',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Android privacy policy](https://localai.appsgm.com/policy/android)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version as verified on 9 October 2026: 26.10.11, read from the Play listing\'s app data; the last Play update was on 30 September 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The listing describes the flow only in outline; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install and check your free storage',
            whyItMatters: 'The listing says models take 2 to 15 GB of storage depending on which you choose, and the first run may be slower while models are cached.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'The in-app model manager downloads language and image models in the background; downloading needs a network connection.',
          },
          {
            title: 'Chat or open a toolkit',
            whyItMatters: 'Start a free-form chat, or pick one of the 15 Labs, such as Study Lab or Code Lab, for a task-specific prompt.',
          },
          {
            title: 'Generate images',
            whyItMatters: 'Set steps, CFG scale, seed and scheduler for Stable Diffusion text-to-image, image-to-image or inpainting.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or the developer\'s website; none has been independently tested.**',
        ],
        items: [
          '**Chat.** 20+ language models from 1B to 22B parameters, adjustable temperature and token limits, and categories for coding, reasoning and roleplay in several languages.',
          '**Prompt toolkits.** 15 "Labs" for study, ideas, e-commerce, lifestyle, fun, data, speech, interviews, analysis, combined workflows, writing, language, professional, code and content tasks.',
          '**Images.** Stable Diffusion text-to-image, image-to-image and inpainting, LoRA and .safetensors models, control over steps, CFG scale, seed and scheduler, and an image upscaler.',
          '**Acceleration.** CPU and GPU, plus Snapdragon NPU acceleration where available.',
          '**Management.** A local model and file manager, embeddings support, background model downloads and saved prompt templates.',
        ],
        note: 'The inference engine behind the chat models is not named in the sources read, so compatibility with specific model formats could not be confirmed.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware and Speed',
        content: [
          '**The listing recommends 4 GB or more of RAM and says storage needs range from 2 to 15 GB depending on the models you keep.** Best performance is stated for a Snapdragon 8 Gen 1 or newer; without an NPU the app falls back to CPU and GPU.',
          'The listing adds that large models need more RAM and that the first run may be slower. No speed figures, benchmarks or tokens-per-second numbers were found, so real-world performance on any given phone is unknown.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, Ads and Online Features',
        content: [
          '**The Google Play Data safety section declares "No data collected" and "No data shared with third parties", and the description calls the app "fully offline — no cloud, no tracking".** The same listing carries a "Contains ads" label.',
          'The developer\'s [Android privacy policy](https://localai.appsgm.com/policy/android) is written for a product it calls "Local AI Hub Android" and lists optional crash reports and basic device information, and it says models are downloaded from sources such as Hugging Face and Civitai. These statements are the developer\'s declarations, not audit results, and because the source is not published none of them can be checked against code.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not inspected the app\'s network traffic or ad behavior. Anyone handling confidential data should verify what the app sends while an ad is shown or a model is being downloaded.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and no account',
            'What it means in real use': 'Install and use without sign-up, login or API keys.',
            'Limitation / caveat': 'The listing carries a "Contains ads" label.',
          },
          {
            'Benefit': 'Chat and images in one app',
            'What it means in real use': 'Language models and Stable Diffusion sit in one install.',
            'Limitation / caveat': 'Breadth is described by the developer; quality is untested here.',
          },
          {
            'Benefit': '15 ready-made prompt toolkits',
            'What it means in real use': 'Task templates for study, code, writing and interviews.',
            'Limitation / caveat': 'They are prompt templates, not separate tools or agents.',
          },
          {
            'Benefit': 'Wide model-size range',
            'What it means in real use': 'Choose from 1B to 22B parameter models.',
            'Limitation / caveat': 'Large models need more RAM; no speed figures were found.',
          },
          {
            'Benefit': 'Private by declaration',
            'What it means in real use': 'Data safety lists no data collected or shared.',
            'Limitation / caveat': 'Source is not published, so the claim cannot be code-checked.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want one free app for offline chat and image generation.** Both are described as running on the device.',
          '**People who prefer ready-made prompts over writing their own.** The 15 Labs cover everyday study, writing and work tasks.',
          '**Users with a recent Snapdragon phone.** The listing names Snapdragon 8 Gen 1 or newer as the best-performing hardware.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**License and source code.** No license text or public repository was found, so behavior cannot be checked against code. The developer\'s website advertises a separate "open-source" Android app whose GitHub repositories returned 404, and it is not treated as this app.',
          '**Hands-on performance and quality.** PromptQuorum did not run the app, so speed, battery use, model quality and image quality are not assessed.',
          '**Engine and model list.** The listing does not name the inference engine or list which 20+ models are included, and the version number appears only in the page\'s embedded data, not in its visible text.',
          '**Ads and purchases.** The Play page shows a "Contains ads" label; what the ads are and whether paid options exist were not confirmed.',
          '**Not for iPhone users.** No iOS version is listed.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source on-device chat client with its own model library',
          },
          {
            'App': '[Off Grid AI](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'Android, iOS, Mac, Windows',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Offline chat with vision, voice and document chat',
          },
          {
            'App': '[TokForge](/power-local-llm/tokforge-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / closed source',
            'Key difference': 'Roleplay characters, images, voice and a speed leaderboard',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Who makes it?',
            a: 'Google Play lists the publisher as GeetMark and links the developer\'s website and a privacy policy; no company background was found in the sources read.',
          },
          {
            q: 'Does it work offline?',
            a: 'Per the listing, chat and image generation run on the device once models are downloaded. Downloading models needs a network.',
          },
          {
            q: 'Which chat models does it include?',
            a: 'The listing says 20+ models from 1B to 22B parameters but does not name them, so the exact list could not be confirmed.',
          },
          {
            q: 'Can it generate images?',
            a: 'Yes, according to the listing: Stable Diffusion text-to-image, image-to-image and inpainting, with LoRA and .safetensors support and an upscaler.',
          },
          {
            q: 'What are the Labs?',
            a: 'They are 15 prompt-based toolkits, for example Study Lab for summaries and flashcards and Code Lab for generating and fixing code.',
          },
          {
            q: 'How does it compare with PocketPal AI?',
            a: 'PocketPal AI is a free MIT-licensed chat client on iOS and Android, while this app is closed source with ads and adds Stable Diffusion images and prompt toolkits on Android only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Local AI: Offline Chat & Image offers offline chat, Stable Diffusion image generation and 15 prompt toolkits in one free Android app, with a Data safety section that declares no data collected. Against that, the app carries ads, the source is not published and no license is stated, the model list, engine and version are not shown, the install base is small at 5K+, and nothing here has been tested hands-on. It suits Android users who want a free all-in-one offline app and accept those terms; readers who want auditable code can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI: Offline Chat & Image on Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — description, Data safety section, ads label, download count and dates, checked 9 October 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — the developer\'s website, its [Android privacy policy](https://localai.appsgm.com/policy/android), and its apps and download pages, checked 9 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client.',
          '[Off Grid AI Review](/power-local-llm/off-grid-ai-review) — offline chat with vision, voice and documents.',
          '[TokForge Review](/power-local-llm/tokforge-review) — offline Android chat with roleplay and images.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI: Offline Chat & Image Review: Free Android App with Stable Diffusion and Prompt Toolkits',
      description:
        'Local AI: Offline Chat & Image review: a free Android app with 20+ offline models, Stable Diffusion image generation and 15 prompt toolkits. Privacy, ads, hardware, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/local-ai-geetmark-review',
      inLanguage: 'en',
      datePublished: '2026-10-09',
      dateModified: '2026-10-09',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating a free offline AI chat and image generation app' },
      about: [
        { '@type': 'Thing', name: 'Local AI: Offline Chat & Image' },
        { '@type': 'Thing', name: 'Stable Diffusion' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-ai-geetmark-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Local AI: Offline Chat & Image Review', item: 'https://promptquorum.com/power-local-llm/local-ai-geetmark-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-de.webp',
    title: 'Local AI: Offline Chat & Image im Test: kostenlose Android-App mit Stable Diffusion und Prompt-Toolkits',
    seoTitle: 'Local AI: Offline Chat & Image im Test (Android)',
    intro: 'Local AI: Offline Chat & Image ist eine kostenlose Android-App, die bei Google Play von [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) veröffentlicht wird. Sie führt Sprachmodelle und Stable-Diffusion-Bildgenerierung auf dem Smartphone aus und bringt 15 integrierte Prompt-Toolkits für Schreib-, Programmier-, Lern- und Business-Aufgaben mit. Der Eintrag trägt den Hinweis „Enthält Werbung“, der Quellcode ist nicht veröffentlicht, und eine Lizenz wird nicht genannt. Dieser Test beruht auf dem Google-Play-Eintrag und der Website des Entwicklers unter [localai.appsgm.com](https://localai.appsgm.com/), geprüft am 9. Oktober 2026; PromptQuorum hat die App nicht selbst getestet. Mit dem quelloffenen LocalAI-Serverprojekt hat sie nichts zu tun.',
    metaDescription: 'Local AI: Offline Chat & Image im Test: kostenlose Android-App mit über 20 Offline-Modellen, Stable-Diffusion-Bildern und 15 Prompt-Toolkits. Werbung, Datenschutz, Grenzen.',
    twitterDescription: 'Local AI: Offline Chat & Image im Test: kostenlose Android-App für Offline-Chat und Stable-Diffusion-Bilder mit 15 Prompt-Toolkits. Enthält Werbung, Closed Source, Lizenz nicht angegeben.',
    audience: 'Android-Nutzer, die eine kostenlose Offline-Chat- und Bild-App mit fertigen Prompt-Toolkits suchen und wissen müssen, was die Quellen bestätigen, was der Entwickler nur behauptet und was sich nicht überprüfen ließ.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Offline Chat & Image Test',
    targetKeywords: [
      'local ai offline chat and image test',
      'geetmark local ai android',
      'offline ki chat app android',
      'stable diffusion offline android app',
      'offline ki prompt toolkit app',
      'local llm android app mit bildgenerierung',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**Local AI: Offline Chat & Image von GeetMark ist eine kostenlose Android-App, die Sprachmodelle und Stable Diffusion auf dem Gerät ausführt und 15 Prompt-Toolkits ergänzt, ohne Konto und ohne API-Schlüssel.** Der Google-Play-Eintrag erklärt, dass keine Daten erhoben oder weitergegeben werden, trägt aber zugleich den Hinweis „Enthält Werbung“. Der Quellcode ist nicht veröffentlicht und die Lizenz nicht angegeben; die Versionsnummer lautet laut Play-Eintragsdaten 26.10.11 (Stand 9. Oktober 2026).',
    quickAnswerTop: {
      de: {
        question: 'Ist Local AI: Offline Chat & Image kostenlos, und läuft es offline?',
        answer: 'Laut Google-Play-Eintrag ja: Die App ist kostenlos, ohne Login und ohne API-Schlüssel, und Chat sowie Bildgenerierung laufen nach dem Herunterladen der Modelle auf dem Gerät. Der Eintrag trägt außerdem den Hinweis „Enthält Werbung“, und für Modell-Downloads ist eine Netzverbindung nötig.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai); eine iPhone- oder Desktop-Version dieser App ist nicht aufgeführt.',
          'Chat mit über 20 Sprachmodellen von 1 bis 22 Milliarden Parametern oder Bildgenerierung mit Stable Diffusion (Text-zu-Bild, Bild-zu-Bild, Inpainting).',
          'Extras: 15 Prompt-Toolkits („Labs“) wie Study, Code, Writing und Interview sowie LoRA-Unterstützung und ein Bild-Upscaler.',
          'Geprüft am 9. Oktober 2026: über 5.000 Downloads bei Google Play, veröffentlicht am 4. April 2026 und zuletzt aktualisiert am 30. September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Local AI: Offline Chat & Image?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Erste Schritte',
        anchor: 'getting-started',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Hardware und Geschwindigkeit',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Datenschutz, Werbung und Online-Funktionen',
        anchor: 'privacy',
      },
      {
        label: 'Abwägung: Vorteile und Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'Für wen sie sich eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was sich nicht überprüfen ließ',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Konkurrenten und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image ist eine kostenlose, werbefinanzierte Closed-Source-Android-App von GeetMark, die Sprachmodelle und Stable-Diffusion-Bildgenerierung auf dem Smartphone ausführt und 15 Prompt-Toolkits bündelt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play, laden ein zu Ihrem Smartphone passendes Modell herunter und können dann ohne Konto chatten, schreiben, programmieren oder Bilder erzeugen; die Toolkits sind fertige Prompt-Vorlagen für Aufgaben wie Lernen, Vorstellungsgespräche und Produktbeschreibungen.',
          },
        ],
        items: [
          'Herausgeber: bei Google Play als GeetMark geführt, mit Support-E-Mail und Link zur Datenschutzerklärung im Eintrag.',
          'Preis und Lizenz: kostenlos mit Werbung; weder ein Lizenztext noch ein öffentliches Quellcode-Repository wurden gefunden.',
          'Umfang: über 20 Chat-Modelle (1 bis 22 Milliarden Parameter), Stable Diffusion mit LoRA- und .safetensors-Unterstützung, ein lokaler Modell-Manager, Embeddings und ein Upscaler.',
          'Hardware: Der Eintrag empfiehlt mindestens 4 GB RAM, 2 bis 15 GB Speicherplatz und für die beste Geschwindigkeit einen Snapdragon 8 Gen 1 oder neuer, mit CPU- und GPU-Ausweichpfad.',
          'Angaben, geprüft am 9. Oktober 2026: Version 26.10.11, über 5.000 Downloads, Android 8.0 oder neuer, für alle Altersstufen freigegeben (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test beruht auf dem Google-Play-Eintrag und der Website des Entwicklers, geprüft am 9. Oktober 2026. Die Funktionen sind die Selbstbeschreibung des Entwicklers; PromptQuorum hat die App weder getestet noch Benchmarks durchgeführt.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'Was ist Local AI: Offline Chat & Image?',
        content: [
          '**Local AI: Offline Chat & Image ist eine Android-App, die einen Offline-Chatbot, einen Stable-Diffusion-Bildgenerator und eine Sammlung promptbasierter Schreib- und Programmierwerkzeuge in einer Installation vereint.** Laut [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.geetmark.localai) braucht sie weder Login noch API-Schlüssel und verarbeitet alles auf dem Gerät.',
          'Der Name wird von anderen Produkten geteilt: Die App ist nicht der quelloffene LocalAI-Inferenzserver, und die Website des Entwicklers, [Local AI Hub](https://localai.appsgm.com/), ist ein eigenständiges Verzeichnis für Modelle und Prompts, das zudem einen eigenen Download „Local AI Hub Android“ bewirbt. Dieser Download ist im Play-Eintrag nicht verlinkt, deshalb behandelt dieser Test ausschließlich die App aus Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Die App wird über Google Play für Android vertrieben; eine Version für iPhone, Mac oder Windows ist nicht aufgeführt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Android 8.0+',
            Bezugsquelle: '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung für Android](https://localai.appsgm.com/policy/android)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Diese Seite ist Begleitmaterial zum Eintrag der App im [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version, geprüft am 9. Oktober 2026: 26.10.11, aus den App-Daten des Play-Eintrags; die letzte Play-Aktualisierung war am 30. September 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Erste Schritte',
        content: [
          '**Der Eintrag beschreibt den Ablauf nur in Umrissen; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren und freien Speicherplatz prüfen',
            whyItMatters: 'Laut Eintrag belegen die Modelle je nach Auswahl 2 bis 15 GB Speicherplatz, und der erste Start kann langsamer sein, während Modelle zwischengespeichert werden.',
          },
          {
            title: 'Ein Modell herunterladen',
            whyItMatters: 'Der integrierte Modell-Manager lädt Sprach- und Bildmodelle im Hintergrund herunter; dafür ist eine Netzverbindung nötig.',
          },
          {
            title: 'Chatten oder ein Toolkit öffnen',
            whyItMatters: 'Starten Sie einen freien Chat oder wählen Sie eines der 15 Labs, etwa Study Lab oder Code Lab, für einen aufgabenspezifischen Prompt.',
          },
          {
            title: 'Bilder erzeugen',
            whyItMatters: 'Stellen Sie Schritte, CFG-Skala, Seed und Scheduler für Stable-Diffusion-Text-zu-Bild, -Bild-zu-Bild oder -Inpainting ein.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Google-Play-Beschreibung oder der Website des Entwicklers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat.** Über 20 Sprachmodelle von 1 bis 22 Milliarden Parametern, einstellbare Temperatur und Token-Limits sowie Kategorien für Programmierung, logisches Schlussfolgern und Rollenspiel in mehreren Sprachen.',
          '**Prompt-Toolkits.** 15 „Labs“ für Lernen, Ideen, E-Commerce, Lifestyle, Spaß, Daten, Reden, Vorstellungsgespräche, Analyse, kombinierte Workflows, Schreiben, Sprachen, Beruf, Code und Content-Aufgaben.',
          '**Bilder.** Stable-Diffusion-Text-zu-Bild, -Bild-zu-Bild und -Inpainting, LoRA- und .safetensors-Modelle, Kontrolle über Schritte, CFG-Skala, Seed und Scheduler sowie ein Bild-Upscaler.',
          '**Beschleunigung.** CPU und GPU, dazu Snapdragon-NPU-Beschleunigung, wo verfügbar.',
          '**Verwaltung.** Ein lokaler Modell- und Dateimanager, Embeddings-Unterstützung, Modell-Downloads im Hintergrund und gespeicherte Prompt-Vorlagen.',
        ],
        note: 'Die Inferenz-Engine hinter den Chat-Modellen wird in den gelesenen Quellen nicht genannt, daher ließ sich die Kompatibilität mit bestimmten Modellformaten nicht bestätigen.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware und Geschwindigkeit',
        content: [
          '**Der Eintrag empfiehlt mindestens 4 GB RAM und nennt einen Speicherbedarf von 2 bis 15 GB, je nachdem, welche Modelle Sie behalten.** Die beste Leistung wird für einen Snapdragon 8 Gen 1 oder neuer angegeben; ohne NPU weicht die App auf CPU und GPU aus.',
          'Der Eintrag ergänzt, dass große Modelle mehr RAM benötigen und der erste Start langsamer sein kann. Geschwindigkeitsangaben, Benchmarks oder Tokens pro Sekunde wurden nicht gefunden, daher ist die tatsächliche Leistung auf einem bestimmten Smartphone unbekannt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Werbung und Online-Funktionen',
        content: [
          '**Der Abschnitt „Datensicherheit“ bei Google Play erklärt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“, und die Beschreibung nennt die App „vollständig offline – keine Cloud, kein Tracking“.** Derselbe Eintrag trägt den Hinweis „Enthält Werbung“.',
          'Die [Datenschutzerklärung für Android](https://localai.appsgm.com/policy/android) des Entwicklers ist für ein Produkt namens „Local AI Hub Android“ verfasst, nennt optionale Absturzberichte und grundlegende Geräteinformationen und erklärt, dass Modelle aus Quellen wie Hugging Face und Civitai heruntergeladen werden. Das sind Selbstauskünfte des Entwicklers und keine Prüfergebnisse; da der Quellcode nicht veröffentlicht ist, lässt sich nichts davon am Code überprüfen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat den Netzwerkverkehr und das Werbeverhalten der App nicht untersucht. Wer vertrauliche Daten verarbeitet, sollte prüfen, was die App sendet, während eine Anzeige eingeblendet oder ein Modell heruntergeladen wird.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Abwägung: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            Vorteil: 'Kostenlos und ohne Konto',
            'Bedeutung im Alltag': 'Installieren und nutzen, ohne Registrierung, Login oder API-Schlüssel.',
            'Einschränkung / Vorbehalt': 'Der Eintrag trägt den Hinweis „Enthält Werbung“.',
          },
          {
            Vorteil: 'Chat und Bilder in einer App',
            'Bedeutung im Alltag': 'Sprachmodelle und Stable Diffusion in einer Installation.',
            'Einschränkung / Vorbehalt': 'Der Umfang stammt vom Entwickler; die Qualität wurde hier nicht getestet.',
          },
          {
            Vorteil: '15 fertige Prompt-Toolkits',
            'Bedeutung im Alltag': 'Aufgabenvorlagen für Lernen, Code, Schreiben und Bewerbungsgespräche.',
            'Einschränkung / Vorbehalt': 'Es sind Prompt-Vorlagen, keine eigenständigen Tools oder Agenten.',
          },
          {
            Vorteil: 'Große Spanne bei der Modellgröße',
            'Bedeutung im Alltag': 'Modelle mit 1 bis 22 Milliarden Parametern zur Auswahl.',
            'Einschränkung / Vorbehalt': 'Große Modelle brauchen mehr RAM; Geschwindigkeitsangaben fehlen.',
          },
          {
            Vorteil: 'Privat laut Selbstauskunft',
            'Bedeutung im Alltag': 'Datensicherheit nennt keine erhobenen oder weitergegebenen Daten.',
            'Einschränkung / Vorbehalt': 'Der Quellcode ist nicht veröffentlicht, die Aussage ist nicht am Code prüfbar.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sie sich eignet',
        items: [
          '**Android-Nutzer, die eine kostenlose App für Offline-Chat und Bildgenerierung wollen.** Beides läuft laut Beschreibung auf dem Gerät.',
          '**Menschen, die fertige Prompts lieber nutzen, als eigene zu schreiben.** Die 15 Labs decken alltägliche Lern-, Schreib- und Arbeitsaufgaben ab.',
          '**Nutzer mit einem aktuellen Snapdragon-Smartphone.** Der Eintrag nennt Snapdragon 8 Gen 1 oder neuer als Hardware mit der besten Leistung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was sich nicht überprüfen ließ',
        items: [
          '**Lizenz und Quellcode.** Weder ein Lizenztext noch ein öffentliches Repository wurden gefunden, daher lässt sich das Verhalten nicht am Code prüfen. Die Website des Entwicklers bewirbt eine eigene „Open-Source“-Android-App, deren GitHub-Repositories mit 404 antworteten; sie wird nicht als diese App behandelt.',
          '**Praxisleistung und Qualität.** PromptQuorum hat die App nicht ausgeführt, daher werden Geschwindigkeit, Akkuverbrauch sowie Modell- und Bildqualität nicht bewertet.',
          '**Engine und Modellliste.** Der Eintrag nennt weder die Inferenz-Engine noch die enthaltenen 20+ Modelle, und die Versionsnummer steht nur in den eingebetteten Daten der Seite, nicht im sichtbaren Text.',
          '**Werbung und Käufe.** Die Play-Seite zeigt den Hinweis „Enthält Werbung“; welche Anzeigen es sind und ob kostenpflichtige Optionen existieren, wurde nicht bestätigt.',
          '**Nichts für iPhone-Nutzer.** Eine iOS-Version ist nicht aufgeführt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            Hauptunterschied: 'Quelloffener Chat-Client auf dem Gerät mit eigener Modellbibliothek',
          },
          {
            App: '[Off Grid AI](/de/power-local-llm/off-grid-ai-review)',
            Plattformen: 'Android, iOS, Mac, Windows',
            'Preis / Lizenz': 'Freemium / MIT',
            Hauptunterschied: 'Offline-Chat mit Bildverständnis, Sprache und Dokumenten-Chat',
          },
          {
            App: '[TokForge](/de/power-local-llm/tokforge-review)',
            Plattformen: 'Android',
            'Preis / Lizenz': 'Kostenlos / Closed Source',
            Hauptunterschied: 'Rollenspiel-Charaktere, Bilder, Sprache und Geschwindigkeits-Rangliste',
          },
          {
            App: '[Private Mind](/de/power-local-llm/private-mind-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            Hauptunterschied: 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät',
          },
        ],
        note: 'Angaben zu Konkurrenten ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wer steckt dahinter?',
            a: 'Google Play führt GeetMark als Herausgeber und verlinkt die Website des Entwicklers sowie eine Datenschutzerklärung; Hintergründe zum Unternehmen wurden in den gelesenen Quellen nicht gefunden.',
          },
          {
            q: 'Funktioniert sie offline?',
            a: 'Laut Eintrag laufen Chat und Bildgenerierung auf dem Gerät, sobald die Modelle heruntergeladen sind. Für das Herunterladen von Modellen ist ein Netz nötig.',
          },
          {
            q: 'Welche Chat-Modelle sind enthalten?',
            a: 'Der Eintrag nennt über 20 Modelle von 1 bis 22 Milliarden Parametern, führt sie aber nicht namentlich auf; die genaue Liste ließ sich daher nicht bestätigen.',
          },
          {
            q: 'Kann sie Bilder erzeugen?',
            a: 'Ja, laut Eintrag: Stable-Diffusion-Text-zu-Bild, Bild-zu-Bild und Inpainting, mit LoRA- und .safetensors-Unterstützung sowie einem Upscaler.',
          },
          {
            q: 'Was sind die Labs?',
            a: 'Es sind 15 promptbasierte Toolkits, zum Beispiel das Study Lab für Zusammenfassungen und Karteikarten und das Code Lab zum Erzeugen und Korrigieren von Code.',
          },
          {
            q: 'Wie schneidet sie im Vergleich zu PocketPal AI ab?',
            a: 'PocketPal AI ist ein kostenloser, MIT-lizenzierter Chat-Client für iOS und Android, während diese App Closed Source ist, Werbung enthält und nur für Android Stable-Diffusion-Bilder und Prompt-Toolkits ergänzt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Local AI: Offline Chat & Image bietet Offline-Chat, Stable-Diffusion-Bildgenerierung und 15 Prompt-Toolkits in einer kostenlosen Android-App, mit einem Abschnitt „Datensicherheit“, der keine erhobenen Daten angibt. Dem stehen Werbung, ein nicht veröffentlichter Quellcode ohne genannte Lizenz, nicht ausgewiesene Modellliste und Engine, eine kleine Nutzerbasis von über 5.000 Downloads und fehlende praktische Tests gegenüber. Sie eignet sich für Android-Nutzer, die eine kostenlose Offline-App für alles wollen und diese Bedingungen akzeptieren; wer prüfbaren Code möchte, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Local AI: Offline Chat & Image bei Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — Beschreibung, Abschnitt „Datensicherheit“, Werbehinweis, Download-Zahl und Daten, geprüft am 9. Oktober 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — die Website des Entwicklers mit der [Datenschutzerklärung für Android](https://localai.appsgm.com/policy/android) sowie den Seiten zu Apps und Downloads, geprüft am 9. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät.',
          '[Off-Grid-AI-Rezension](/de/power-local-llm/off-grid-ai-review) — Offline-Chat mit Bildverständnis, Sprache und Dokumenten.',
          '[TokForge-Rezension](/de/power-local-llm/tokforge-review) — Offline-Chat für Android mit Rollenspiel und Bildern.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-es.webp',
    title: 'Análisis de Local AI: Offline Chat & Image: app gratuita para Android con Stable Diffusion y kits de prompts',
    seoTitle: 'Análisis de Local AI: Offline Chat & Image (Android)',
    intro: 'Local AI: Offline Chat & Image es una app gratuita para Android publicada en Google Play por [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) que ejecuta modelos de lenguaje y generación de imágenes con Stable Diffusion en el teléfono, además de 15 kits de prompts integrados para tareas de escritura, programación, estudio y negocios. Su ficha lleva la etiqueta «Contiene anuncios», el código fuente no está publicado y no se indica ninguna licencia. Este análisis se basa en la ficha de Google Play y en el sitio web del desarrollador, [localai.appsgm.com](https://localai.appsgm.com/), consultados el 9 de octubre de 2026; PromptQuorum no ha probado la app en la práctica. No tiene relación con el proyecto de servidor de código abierto LocalAI.',
    metaDescription: 'Análisis de Local AI: Offline Chat & Image: app gratuita para Android con más de 20 modelos offline, imágenes Stable Diffusion y 15 kits de prompts. Anuncios, privacidad y límites.',
    twitterDescription: 'Análisis de Local AI: Offline Chat & Image: app gratuita para Android de chat offline e imágenes Stable Diffusion con 15 kits de prompts. Con anuncios, código cerrado, licencia sin indicar.',
    audience: 'Usuarios de Android que quieren una app gratuita de chat e imágenes offline con kits de prompts listos para usar, y que necesitan saber qué confirman las fuentes, qué es solo una afirmación del desarrollador y qué no se pudo verificar.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Local AI Offline Chat & Image',
    targetKeywords: [
      'opiniones local ai offline chat and image',
      'geetmark local ai android',
      'app de chat de ia offline android',
      'app android stable diffusion offline',
      'app de kits de prompts de ia offline',
      'app android de llm local con generación de imágenes',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**Local AI: Offline Chat & Image, de GeetMark, es una app gratuita para Android que ejecuta modelos de lenguaje y Stable Diffusion en el dispositivo y añade 15 kits de prompts, sin cuenta ni claves de API.** Su ficha de Google Play declara que no se recopilan ni se comparten datos, pero también lleva la etiqueta «Contiene anuncios». El código fuente no está publicado y la licencia no se indica; los datos de la ficha de Play dan la versión 26.10.11 a fecha del 9 de octubre de 2026.',
    quickAnswerTop: {
      es: {
        question: '¿Local AI: Offline Chat & Image es gratis y funciona sin conexión?',
        answer: 'Según su ficha de Google Play, sí: es gratis, sin inicio de sesión ni clave de API, y el chat y la generación de imágenes se ejecutan en el dispositivo una vez descargados los modelos. La ficha también muestra la etiqueta «Contiene anuncios», y la descarga de modelos requiere conexión a la red.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai); no figura ninguna versión para iPhone ni para escritorio de esta app.',
          'Chat con más de 20 modelos de lenguaje de entre 1B y 22B parámetros, o generación de imágenes con Stable Diffusion (texto a imagen, imagen a imagen, inpainting).',
          'Extras: 15 kits de prompts («Labs») como Study, Code, Writing e Interview, además de compatibilidad con LoRA y un escalador de imágenes.',
          'Según lo comprobado el 9 de octubre de 2026: más de 5000 descargas en Google Play, lanzada el 4 de abril de 2026 y actualizada por última vez el 30 de septiembre de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Local AI: Offline Chat & Image?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: 'Dónde conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Primeros pasos',
        anchor: 'getting-started',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Hardware y velocidad',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Privacidad, anuncios y funciones en línea',
        anchor: 'privacy',
      },
      {
        label: 'Pros y contras: ventajas frente a limitaciones',
        anchor: 'tradeoffs',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Qué no se pudo verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image es una app gratuita para Android, financiada con anuncios y de código cerrado, creada por GeetMark, que ejecuta modelos de lenguaje y generación de imágenes con Stable Diffusion en el teléfono y reúne 15 kits de prompts.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play, descargas un modelo que quepa en tu teléfono y después chateas, escribes, programas o generas imágenes sin cuenta; los kits son plantillas de prompts listas para tareas como estudiar, preparar entrevistas o redactar descripciones de producto.',
          },
        ],
        items: [
          'Publicador: figura en Google Play como GeetMark, con un correo de soporte y un enlace a la política de privacidad en la ficha.',
          'Precio y licencia: gratis con anuncios; no se encontró ningún texto de licencia ni repositorio público de código fuente.',
          'Alcance: más de 20 modelos de chat (de 1B a 22B parámetros), Stable Diffusion con compatibilidad con LoRA y .safetensors, un gestor local de modelos, embeddings y un escalador de imágenes.',
          'Hardware: la ficha recomienda 4 GB o más de RAM, entre 2 y 15 GB de almacenamiento y un Snapdragon 8 Gen 1 o superior para la mejor velocidad, con alternativa en CPU y GPU.',
          'Datos comprobados el 9 de octubre de 2026: versión 26.10.11, más de 5000 descargas, Android 8.0 o superior, apta para todas las edades (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play y en el sitio web del desarrollador, consultados el 9 de octubre de 2026. Las capacidades son la descripción del propio desarrollador, y PromptQuorum no ha probado ni medido el rendimiento de la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: '¿Qué es Local AI: Offline Chat & Image?',
        content: [
          '**Local AI: Offline Chat & Image es una app para Android que combina un chatbot offline, un generador de imágenes con Stable Diffusion y un conjunto de herramientas de escritura y programación basadas en prompts en una sola instalación.** Según su [ficha de Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai), no necesita inicio de sesión ni clave de API y procesa todo en el dispositivo.',
          'El nombre lo comparten otros productos: la app no es el servidor de inferencia de código abierto LocalAI, y el sitio web del desarrollador, [Local AI Hub](https://localai.appsgm.com/), es un directorio independiente de modelos y prompts que además anuncia su propia descarga «Local AI Hub Android». Esa descarga no está enlazada desde la ficha de Play, así que este análisis cubre solo la app de Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**La app se distribuye a través de Google Play para Android; no figura ninguna versión para iPhone, Mac ni Windows.**',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Android 8.0+',
            'Dónde conseguirla': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad para Android](https://localai.appsgm.com/policy/android)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No publicado',
          },
        ],
        note: 'Esta página es material complementario de la entrada de la app en el [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versión verificada el 9 de octubre de 2026: 26.10.11, tomada de los datos de la ficha de Play; la última actualización en Play fue el 30 de septiembre de 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeros pasos',
        content: [
          '**La ficha describe el proceso solo a grandes rasgos; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala y comprueba tu almacenamiento libre',
            whyItMatters: 'La ficha indica que los modelos ocupan entre 2 y 15 GB según cuáles elijas, y que el primer arranque puede ser más lento mientras se almacenan los modelos en caché.',
          },
          {
            title: 'Descarga un modelo',
            whyItMatters: 'El gestor de modelos integrado descarga modelos de lenguaje y de imagen en segundo plano; la descarga requiere conexión a la red.',
          },
          {
            title: 'Chatea o abre un kit',
            whyItMatters: 'Inicia un chat libre o elige uno de los 15 Labs, como Study Lab o Code Lab, para obtener un prompt específico de la tarea.',
          },
          {
            title: 'Genera imágenes',
            whyItMatters: 'Ajusta pasos, escala CFG, semilla y programador para la generación de texto a imagen, imagen a imagen o inpainting con Stable Diffusion.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede de la descripción de Google Play o del sitio web del desarrollador; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Chat.** Más de 20 modelos de lenguaje de entre 1B y 22B parámetros, temperatura y límites de tokens ajustables, y categorías de programación, razonamiento y juegos de rol en varios idiomas.',
          '**Kits de prompts.** 15 «Labs» para estudio, ideas, comercio electrónico, estilo de vida, entretenimiento, datos, discursos, entrevistas, análisis, flujos combinados, escritura, idiomas, trabajo profesional, código y contenido.',
          '**Imágenes.** Stable Diffusion de texto a imagen, imagen a imagen e inpainting, modelos LoRA y .safetensors, control de pasos, escala CFG, semilla y programador, y un escalador de imágenes.',
          '**Aceleración.** CPU y GPU, además de aceleración con la NPU de Snapdragon cuando está disponible.',
          '**Gestión.** Un gestor local de modelos y archivos, compatibilidad con embeddings, descargas de modelos en segundo plano y plantillas de prompts guardadas.',
        ],
        note: 'El motor de inferencia de los modelos de chat no se nombra en las fuentes consultadas, por lo que no se pudo confirmar la compatibilidad con formatos de modelo concretos.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware y velocidad',
        content: [
          '**La ficha recomienda 4 GB o más de RAM e indica que el almacenamiento necesario va de 2 a 15 GB según los modelos que conserves.** El mejor rendimiento se indica para un Snapdragon 8 Gen 1 o superior; sin NPU, la app recurre a CPU y GPU.',
          'La ficha añade que los modelos grandes necesitan más RAM y que el primer arranque puede ser más lento. No se encontraron cifras de velocidad, benchmarks ni tokens por segundo, así que el rendimiento real en un teléfono concreto es desconocido.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, anuncios y funciones en línea',
        content: [
          '**La sección «Seguridad de los datos» de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros», y la descripción llama a la app «totalmente offline: sin nube, sin seguimiento».** La misma ficha lleva la etiqueta «Contiene anuncios».',
          'La [política de privacidad para Android](https://localai.appsgm.com/policy/android) del desarrollador está redactada para un producto que llama «Local AI Hub Android», menciona informes de fallos opcionales e información básica del dispositivo, y dice que los modelos se descargan de fuentes como Hugging Face y Civitai. Son declaraciones del desarrollador, no resultados de una auditoría, y como el código fuente no está publicado, nada de esto puede contrastarse con el código.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha inspeccionado el tráfico de red ni el comportamiento de los anuncios de la app. Quien maneje datos confidenciales debería comprobar qué envía la app mientras se muestra un anuncio o se descarga un modelo.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Pros y contras: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            Ventaja: 'Gratis y sin cuenta',
            'Qué significa en el uso real': 'Instalar y usar sin registro, inicio de sesión ni claves de API.',
            'Limitación / salvedad': 'La ficha lleva la etiqueta «Contiene anuncios».',
          },
          {
            Ventaja: 'Chat e imágenes en una sola app',
            'Qué significa en el uso real': 'Modelos de lenguaje y Stable Diffusion en una sola instalación.',
            'Limitación / salvedad': 'El alcance lo describe el desarrollador; la calidad no se ha probado aquí.',
          },
          {
            Ventaja: '15 kits de prompts listos para usar',
            'Qué significa en el uso real': 'Plantillas de tareas para estudio, código, escritura y entrevistas.',
            'Limitación / salvedad': 'Son plantillas de prompts, no herramientas ni agentes independientes.',
          },
          {
            Ventaja: 'Amplio rango de tamaños de modelo',
            'Qué significa en el uso real': 'Modelos de entre 1B y 22B parámetros a elegir.',
            'Limitación / salvedad': 'Los modelos grandes necesitan más RAM; no hay cifras de velocidad.',
          },
          {
            Ventaja: 'Privada por declaración',
            'Qué significa en el uso real': 'Seguridad de los datos indica que no se recopilan ni se comparten datos.',
            'Limitación / salvedad': 'El código no está publicado, así que la afirmación no se puede contrastar.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren una sola app gratuita para chat offline y generación de imágenes.** La descripción dice que ambas funciones se ejecutan en el dispositivo.',
          '**Personas que prefieren prompts ya preparados a escribir los suyos.** Los 15 Labs cubren tareas cotidianas de estudio, escritura y trabajo.',
          '**Usuarios con un teléfono Snapdragon reciente.** La ficha cita el Snapdragon 8 Gen 1 o superior como el hardware de mejor rendimiento.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qué no se pudo verificar',
        items: [
          '**Licencia y código fuente.** No se encontró ningún texto de licencia ni repositorio público, así que su comportamiento no puede contrastarse con el código. El sitio web del desarrollador anuncia una app de Android distinta, de «código abierto», cuyos repositorios de GitHub devolvieron 404, y no se trata como esta app.',
          '**Rendimiento y calidad en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de los modelos y de las imágenes.',
          '**Motor y lista de modelos.** La ficha no nombra el motor de inferencia ni indica cuáles son los más de 20 modelos incluidos, y el número de versión aparece solo en los datos incrustados de la página, no en su texto visible.',
          '**Anuncios y compras.** La página de Play muestra la etiqueta «Contiene anuncios»; no se confirmó qué anuncios son ni si existen opciones de pago.',
          '**No es para usuarios de iPhone.** No figura ninguna versión para iOS.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo con su propia biblioteca de modelos',
          },
          {
            App: '[Off Grid AI](/es/power-local-llm/off-grid-ai-review)',
            Plataformas: 'Android, iOS, Mac, Windows',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Chat offline con visión, voz y chat con documentos',
          },
          {
            App: '[TokForge](/es/power-local-llm/tokforge-review)',
            Plataformas: 'Android',
            'Precio / licencia': 'Gratis / código cerrado',
            'Diferencia clave': 'Personajes de rol, imágenes, voz y ranking de velocidad',
          },
          {
            App: '[Private Mind](/es/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas y respuestas sobre documentos en el dispositivo',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Quién la crea?',
            a: 'Google Play indica como publicador a GeetMark y enlaza el sitio web del desarrollador y una política de privacidad; en las fuentes consultadas no se encontraron antecedentes de la empresa.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Según la ficha, el chat y la generación de imágenes se ejecutan en el dispositivo una vez descargados los modelos. Descargar los modelos requiere red.',
          },
          {
            q: '¿Qué modelos de chat incluye?',
            a: 'La ficha dice que más de 20 modelos de entre 1B y 22B parámetros, pero no los nombra, así que no se pudo confirmar la lista exacta.',
          },
          {
            q: '¿Puede generar imágenes?',
            a: 'Sí, según la ficha: Stable Diffusion de texto a imagen, imagen a imagen e inpainting, con compatibilidad con LoRA y .safetensors y un escalador.',
          },
          {
            q: '¿Qué son los Labs?',
            a: 'Son 15 kits de herramientas basados en prompts, por ejemplo Study Lab para resúmenes y tarjetas de estudio y Code Lab para generar y corregir código.',
          },
          {
            q: '¿Cómo se compara con PocketPal AI?',
            a: 'PocketPal AI es un cliente de chat gratuito con licencia MIT para iOS y Android, mientras que esta app es de código cerrado, con anuncios, y añade imágenes Stable Diffusion y kits de prompts solo en Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Local AI: Offline Chat & Image ofrece chat offline, generación de imágenes con Stable Diffusion y 15 kits de prompts en una app gratuita para Android, con una sección de seguridad de los datos que declara que no se recopilan datos. En contra, la app incluye anuncios, el código fuente no está publicado y no se indica licencia, no se muestran la lista de modelos ni el motor, la base de instalaciones es pequeña (más de 5000 descargas) y nada de esto se ha probado en la práctica. Encaja con usuarios de Android que quieren una app offline gratuita que lo haga todo y aceptan esas condiciones; quien quiera código auditable puede comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Local AI: Offline Chat & Image en Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — descripción, sección de seguridad de los datos, etiqueta de anuncios, número de descargas y fechas, consultados el 9 de octubre de 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — el sitio web del desarrollador, su [política de privacidad para Android](https://localai.appsgm.com/policy/android) y sus páginas de apps y descargas, consultados el 9 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo.',
          '[Análisis de Off Grid AI](/es/power-local-llm/off-grid-ai-review) — chat offline con visión, voz y documentos.',
          '[Análisis de TokForge](/es/power-local-llm/tokforge-review) — chat offline para Android con juegos de rol e imágenes.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita con licencia MIT.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el panorama más amplio de Android.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-fr.webp',
    title: 'Test de Local AI: Offline Chat & Image : application Android gratuite avec Stable Diffusion et kits de prompts',
    seoTitle: 'Test de Local AI: Offline Chat & Image (Android)',
    intro: 'Local AI: Offline Chat & Image est une application Android gratuite publiée sur Google Play par [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) ; elle exécute des modèles de langage et la génération d\'images Stable Diffusion sur le téléphone, avec 15 kits de prompts intégrés pour l\'écriture, la programmation, les études et les tâches professionnelles. La fiche porte la mention « Contient des annonces », le code source n\'est pas publié et aucune licence n\'est indiquée. Ce test s\'appuie sur la fiche Google Play et sur le site du développeur, [localai.appsgm.com](https://localai.appsgm.com/), consultés le 9 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en conditions réelles. Elle n\'a aucun lien avec le projet de serveur open source LocalAI.',
    metaDescription: 'Test de Local AI: Offline Chat & Image : application Android gratuite avec plus de 20 modèles hors ligne, images Stable Diffusion et 15 kits de prompts. Publicités, confidentialité, limites.',
    twitterDescription: 'Test de Local AI: Offline Chat & Image : application Android gratuite de chat hors ligne et d\'images Stable Diffusion avec 15 kits de prompts. Avec publicités, code fermé, licence non indiquée.',
    audience: 'Utilisateurs Android qui veulent une application gratuite de chat et d\'images hors ligne avec des kits de prompts prêts à l\'emploi, et qui doivent savoir ce que les sources confirment, ce que le développeur affirme seulement et ce qui n\'a pas pu être vérifié.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test de Local AI Offline Chat & Image',
    targetKeywords: [
      'avis local ai offline chat and image',
      'geetmark local ai android',
      'application de chat ia hors ligne android',
      'application android stable diffusion hors ligne',
      'application de kits de prompts ia hors ligne',
      'application android llm local avec génération d\'images',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**Local AI: Offline Chat & Image de GeetMark est une application Android gratuite qui exécute des modèles de langage et Stable Diffusion sur l\'appareil et ajoute 15 kits de prompts, sans compte ni clé d\'API.** Sa fiche Google Play déclare qu\'aucune donnée n\'est collectée ni partagée, mais elle porte aussi la mention « Contient des annonces ». Le code source n\'est pas publié et la licence n\'est pas indiquée ; les données de la fiche Play donnent la version 26.10.11 au 9 octobre 2026.',
    quickAnswerTop: {
      fr: {
        question: 'Local AI: Offline Chat & Image est-elle gratuite et fonctionne-t-elle hors ligne ?',
        answer: 'Selon sa fiche Google Play, oui : elle est gratuite, sans connexion ni clé d\'API, et le chat comme la génération d\'images s\'exécutent sur l\'appareil une fois les modèles téléchargés. La fiche affiche aussi la mention « Contient des annonces », et le téléchargement des modèles nécessite une connexion réseau.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) ; aucune version iPhone ou ordinateur de cette application n\'est répertoriée.',
          'Chat avec plus de 20 modèles de langage de 1 à 22 milliards de paramètres, ou génération d\'images avec Stable Diffusion (texte vers image, image vers image, inpainting).',
          'En plus : 15 kits de prompts (« Labs ») comme Study, Code, Writing et Interview, la prise en charge de LoRA et un agrandisseur d\'images.',
          'Vérifié le 9 octobre 2026 : plus de 5 000 téléchargements sur Google Play, publiée le 4 avril 2026 et mise à jour pour la dernière fois le 30 septembre 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu\'est-ce que Local AI: Offline Chat & Image ?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: 'Où la trouver',
        anchor: 'get-it',
      },
      {
        label: 'Pour bien démarrer',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Matériel et vitesse',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Confidentialité, publicités et fonctions en ligne',
        anchor: 'privacy',
      },
      {
        label: 'Bilan : avantages et limites',
        anchor: 'tradeoffs',
      },
      {
        label: 'À qui elle convient',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
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
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image est une application Android gratuite, financée par la publicité et à code fermé, créée par GeetMark, qui exécute des modèles de langage et la génération d\'images Stable Diffusion sur le téléphone et regroupe 15 kits de prompts.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis Google Play, téléchargez un modèle adapté à votre téléphone, puis discutez, écrivez, programmez ou générez des images sans compte ; les kits sont des modèles de prompts prêts à l\'emploi pour des tâches comme réviser, préparer un entretien ou rédiger des fiches produit.',
          },
        ],
        items: [
          'Éditeur : répertorié sur Google Play sous le nom GeetMark, avec une adresse e-mail d\'assistance et un lien vers la politique de confidentialité dans la fiche.',
          'Prix et licence : gratuite avec publicités ; aucun texte de licence ni dépôt public de code source n\'a été trouvé.',
          'Périmètre : plus de 20 modèles de chat (de 1 à 22 milliards de paramètres), Stable Diffusion avec prise en charge de LoRA et .safetensors, un gestionnaire local de modèles, des embeddings et un agrandisseur d\'images.',
          'Matériel : la fiche recommande au moins 4 Go de RAM, 2 à 15 Go de stockage et un Snapdragon 8 Gen 1 ou plus récent pour la meilleure vitesse, avec repli sur le CPU et le GPU.',
          'Indications vérifiées le 9 octobre 2026 : version 26.10.11, plus de 5 000 téléchargements, Android 8.0 ou plus récent, tous publics (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur la fiche Google Play et sur le site du développeur, consultés le 9 octobre 2026. Les capacités sont celles décrites par le développeur, et PromptQuorum n\'a ni testé ni mesuré les performances de l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'Qu\'est-ce que Local AI: Offline Chat & Image ?',
        content: [
          '**Local AI: Offline Chat & Image est une application Android qui réunit en une seule installation un chatbot hors ligne, un générateur d\'images Stable Diffusion et un ensemble d\'outils d\'écriture et de programmation fondés sur des prompts.** D\'après sa [fiche Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai), elle ne demande ni connexion ni clé d\'API et traite tout sur l\'appareil.',
          'Le nom est partagé par d\'autres produits : l\'application n\'est pas le serveur d\'inférence open source LocalAI, et le site du développeur, [Local AI Hub](https://localai.appsgm.com/), est un annuaire distinct de modèles et de prompts qui présente aussi son propre téléchargement « Local AI Hub Android ». Ce téléchargement n\'est pas lié depuis la fiche Play ; ce test ne couvre donc que l\'application Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la trouver',
        content: [
          '**L\'application est distribuée via Google Play sur Android ; aucune version pour iPhone, Mac ou Windows n\'est répertoriée.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Android 8.0+',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité Android](https://localai.appsgm.com/policy/android)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': 'Non publié',
          },
        ],
        note: 'Cette page complète l\'entrée de l\'application dans le [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version vérifiée le 9 octobre 2026 : 26.10.11, lue dans les données de la fiche Play ; la dernière mise à jour sur Play date du 30 septembre 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La fiche ne décrit le déroulement que dans les grandes lignes ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer et vérifier l\'espace de stockage libre',
            whyItMatters: 'La fiche indique que les modèles occupent de 2 à 15 Go selon ceux que vous choisissez, et que le premier lancement peut être plus lent le temps que les modèles soient mis en cache.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Le gestionnaire de modèles intégré télécharge les modèles de langage et d\'image en arrière-plan ; le téléchargement nécessite une connexion réseau.',
          },
          {
            title: 'Discuter ou ouvrir un kit',
            whyItMatters: 'Lancez une conversation libre, ou choisissez l\'un des 15 Labs, comme Study Lab ou Code Lab, pour obtenir un prompt adapté à la tâche.',
          },
          {
            title: 'Générer des images',
            whyItMatters: 'Réglez les étapes, l\'échelle CFG, la graine et le planificateur pour la génération Stable Diffusion de texte vers image, d\'image vers image ou d\'inpainting.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient de la description Google Play ou du site du développeur ; rien n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat.** Plus de 20 modèles de langage de 1 à 22 milliards de paramètres, température et limites de tokens réglables, et catégories de programmation, de raisonnement et de jeu de rôle dans plusieurs langues.',
          '**Kits de prompts.** 15 « Labs » pour les études, les idées, le e-commerce, le mode de vie, les loisirs, les données, les discours, les entretiens, l\'analyse, les flux combinés, l\'écriture, les langues, le travail professionnel, le code et le contenu.',
          '**Images.** Stable Diffusion en texte vers image, image vers image et inpainting, modèles LoRA et .safetensors, contrôle des étapes, de l\'échelle CFG, de la graine et du planificateur, et un agrandisseur d\'images.',
          '**Accélération.** CPU et GPU, plus accélération par le NPU Snapdragon lorsqu\'il est disponible.',
          '**Gestion.** Un gestionnaire local de modèles et de fichiers, la prise en charge des embeddings, des téléchargements de modèles en arrière-plan et des modèles de prompts enregistrés.',
        ],
        note: 'Le moteur d\'inférence des modèles de chat n\'est pas nommé dans les sources consultées ; la compatibilité avec des formats de modèles précis n\'a donc pas pu être confirmée.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Matériel et vitesse',
        content: [
          '**La fiche recommande 4 Go de RAM ou plus et indique un besoin de stockage de 2 à 15 Go selon les modèles que vous conservez.** Les meilleures performances sont annoncées pour un Snapdragon 8 Gen 1 ou plus récent ; sans NPU, l\'application se rabat sur le CPU et le GPU.',
          'La fiche ajoute que les gros modèles demandent plus de RAM et que le premier lancement peut être plus lent. Aucun chiffre de vitesse, benchmark ou nombre de tokens par seconde n\'a été trouvé ; les performances réelles sur un téléphone donné restent donc inconnues.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, publicités et fonctions en ligne',
        content: [
          '**La section « Sécurité des données » de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers », et la description présente l\'application comme « entièrement hors ligne : pas de cloud, pas de suivi ».** La même fiche porte la mention « Contient des annonces ».',
          'La [politique de confidentialité Android](https://localai.appsgm.com/policy/android) du développeur est rédigée pour un produit qu\'elle appelle « Local AI Hub Android » ; elle mentionne des rapports de plantage facultatifs et des informations de base sur l\'appareil, et précise que les modèles sont téléchargés depuis des sources comme Hugging Face et Civitai. Ce sont des déclarations du développeur, non des résultats d\'audit, et comme le code source n\'est pas publié, aucune d\'elles ne peut être vérifiée dans le code.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a pas inspecté le trafic réseau ni le comportement publicitaire de l\'application. Quiconque traite des données confidentielles devrait vérifier ce que l\'application envoie pendant l\'affichage d\'une annonce ou le téléchargement d\'un modèle.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Bilan : avantages et limites',
        columns: ['Avantage', 'Ce que cela donne à l\'usage', 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Gratuite et sans compte',
            'Ce que cela donne à l\'usage': 'Installer et utiliser sans inscription, connexion ni clé d\'API.',
            'Limite / réserve': 'La fiche porte la mention « Contient des annonces ».',
          },
          {
            Avantage: 'Chat et images dans une seule application',
            'Ce que cela donne à l\'usage': 'Modèles de langage et Stable Diffusion dans une seule installation.',
            'Limite / réserve': 'L\'étendue est décrite par le développeur ; la qualité n\'a pas été testée ici.',
          },
          {
            Avantage: '15 kits de prompts prêts à l\'emploi',
            'Ce que cela donne à l\'usage': 'Modèles de tâches pour les études, le code, l\'écriture et les entretiens.',
            'Limite / réserve': 'Ce sont des modèles de prompts, pas des outils ni des agents distincts.',
          },
          {
            Avantage: 'Large éventail de tailles de modèles',
            'Ce que cela donne à l\'usage': 'Modèles de 1 à 22 milliards de paramètres au choix.',
            'Limite / réserve': 'Les gros modèles demandent plus de RAM ; aucun chiffre de vitesse trouvé.',
          },
          {
            Avantage: 'Privée sur déclaration',
            'Ce que cela donne à l\'usage': 'Sécurité des données indique qu\'aucune donnée n\'est collectée ni partagée.',
            'Limite / réserve': 'Le code n\'est pas publié ; l\'affirmation ne peut pas être vérifiée dans le code.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les utilisateurs Android qui veulent une seule application gratuite pour le chat hors ligne et la génération d\'images.** La description indique que les deux s\'exécutent sur l\'appareil.',
          '**Ceux qui préfèrent des prompts tout faits à rédiger les leurs.** Les 15 Labs couvrent des tâches courantes d\'étude, d\'écriture et de travail.',
          '**Les utilisateurs d\'un téléphone Snapdragon récent.** La fiche cite le Snapdragon 8 Gen 1 ou plus récent comme matériel aux meilleures performances.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Licence et code source.** Aucun texte de licence ni dépôt public n\'a été trouvé ; le comportement ne peut donc pas être vérifié dans le code. Le site du développeur présente une autre application Android « open source » dont les dépôts GitHub ont renvoyé une erreur 404 ; elle n\'est pas considérée comme cette application.',
          '**Performances et qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'application ; la vitesse, la consommation de batterie et la qualité des modèles et des images ne sont donc pas évaluées.',
          '**Moteur et liste de modèles.** La fiche ne nomme pas le moteur d\'inférence ni les plus de 20 modèles inclus, et le numéro de version n\'apparaît que dans les données intégrées de la page, pas dans son texte visible.',
          '**Publicités et achats.** La page Play affiche la mention « Contient des annonces » ; la nature des publicités et l\'existence d\'options payantes n\'ont pas été confirmées.',
          '**Pas pour les utilisateurs d\'iPhone.** Aucune version iOS n\'est répertoriée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil avec sa propre bibliothèque de modèles',
          },
          {
            Application: '[Off Grid AI](/fr/power-local-llm/off-grid-ai-review)',
            Plateformes: 'Android, iOS, Mac, Windows',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Chat hors ligne avec vision, voix et chat avec des documents',
          },
          {
            Application: '[TokForge](/fr/power-local-llm/tokforge-review)',
            Plateformes: 'Android',
            'Prix / licence': 'Gratuit / code fermé',
            'Différence clé': 'Personnages de jeu de rôle, images, voix et classement de vitesse',
          },
          {
            Application: '[Private Mind](/fr/power-local-llm/private-mind-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions-réponses sur documents sur l\'appareil',
          },
        ],
        note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qui l\'a créée ?',
            a: 'Google Play indique GeetMark comme éditeur et lie le site du développeur ainsi qu\'une politique de confidentialité ; aucune information sur l\'entreprise n\'a été trouvée dans les sources consultées.',
          },
          {
            q: 'Fonctionne-t-elle hors ligne ?',
            a: 'Selon la fiche, le chat et la génération d\'images s\'exécutent sur l\'appareil une fois les modèles téléchargés. Le téléchargement des modèles nécessite un réseau.',
          },
          {
            q: 'Quels modèles de chat inclut-elle ?',
            a: 'La fiche annonce plus de 20 modèles de 1 à 22 milliards de paramètres sans les nommer ; la liste exacte n\'a donc pas pu être confirmée.',
          },
          {
            q: 'Peut-elle générer des images ?',
            a: 'Oui, selon la fiche : Stable Diffusion en texte vers image, image vers image et inpainting, avec prise en charge de LoRA et .safetensors et un agrandisseur d\'images.',
          },
          {
            q: 'Que sont les Labs ?',
            a: 'Ce sont 15 kits d\'outils fondés sur des prompts, par exemple Study Lab pour les résumés et les cartes mémoire, et Code Lab pour générer et corriger du code.',
          },
          {
            q: 'Comment se compare-t-elle à PocketPal AI ?',
            a: 'PocketPal AI est un client de chat gratuit sous licence MIT sur iOS et Android, tandis que cette application est à code fermé, avec publicités, et ajoute des images Stable Diffusion et des kits de prompts sur Android uniquement.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Local AI: Offline Chat & Image propose le chat hors ligne, la génération d\'images Stable Diffusion et 15 kits de prompts dans une application Android gratuite, avec une section sur la sécurité des données qui déclare qu\'aucune donnée n\'est collectée. En face, l\'application affiche des publicités, son code source n\'est pas publié et aucune licence n\'est indiquée, la liste de modèles et le moteur ne sont pas communiqués, la base d\'installations est modeste (plus de 5 000 téléchargements) et rien n\'a été testé en conditions réelles. Elle convient aux utilisateurs Android qui veulent une application hors ligne gratuite tout-en-un et acceptent ces conditions ; ceux qui veulent un code auditable peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI: Offline Chat & Image sur Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — description, section sur la sécurité des données, mention des annonces, nombre de téléchargements et dates, consultés le 9 octobre 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — le site du développeur, sa [politique de confidentialité Android](https://localai.appsgm.com/policy/android) et ses pages d\'applications et de téléchargement, consultés le 9 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil.',
          '[Test d\'Off Grid AI](/fr/power-local-llm/off-grid-ai-review) — chat hors ligne avec vision, voix et documents.',
          '[Test de TokForge](/fr/power-local-llm/tokforge-review) — chat hors ligne pour Android avec jeu de rôle et images.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite sous licence MIT.',
          '[Les meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large d\'Android.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-ja.webp',
    title: 'Local AI: Offline Chat & Image レビュー:Stable Diffusionとプロンプトツールキットを備えた無料Androidアプリ',
    seoTitle: 'Local AI: Offline Chat & Image レビュー(Android)',
    intro: 'Local AI: Offline Chat & Imageは、[GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai)がGoogle Playで公開している無料のAndroidアプリで、言語モデルとStable Diffusionによる画像生成をスマートフォン上で実行し、文章作成・プログラミング・学習・ビジネス向けの15種類のプロンプトツールキットを内蔵しています。ストアには「広告を含む」の表示があり、ソースコードは公開されておらず、ライセンスも明記されていません。このレビューは、2026年10月9日に確認したGoogle Playの掲載情報と開発者のウェブサイト[localai.appsgm.com](https://localai.appsgm.com/)に基づいており、PromptQuorumは実機でのテストを行っていません。オープンソースのLocalAIサーバープロジェクトとは無関係です。',
    metaDescription: 'Local AI: Offline Chat & Imageのレビュー:20以上のオフラインモデル、Stable Diffusion画像生成、15種類のプロンプトツールキットを備えた無料Androidアプリ。広告、プライバシー、制限事項。',
    twitterDescription: 'Local AI: Offline Chat & Imageのレビュー:オフラインチャットとStable Diffusion画像生成、15種類のプロンプトツールキットを備えた無料Androidアプリ。広告あり、クローズドソース、ライセンス未記載。',
    audience: 'すぐ使えるプロンプトツールキット付きの無料オフラインチャット・画像アプリを探していて、情報源が確認していること、開発者が主張しているだけのこと、確認できなかったことを知りたいAndroidユーザー向け。',
    readTime: '読了目安8分',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Offline Chat & Image レビュー',
    targetKeywords: [
      'local ai offline chat and image レビュー',
      'geetmark local ai android',
      'オフライン AI チャット アプリ android',
      'stable diffusion オフライン android アプリ',
      'オフライン AI プロンプトツールキット アプリ',
      '画像生成付き ローカルLLM android アプリ',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**GeetMarkのLocal AI: Offline Chat & Imageは、言語モデルとStable Diffusionを端末上で実行し、15種類のプロンプトツールキットを加えた無料のAndroidアプリで、アカウントもAPIキーも不要です。** Google Playの掲載情報ではデータの収集・共有はないと宣言されていますが、「広告を含む」の表示もあります。ソースコードは公開されておらずライセンスも明記されていません。Playの掲載データでは、2026年10月9日時点のバージョンは26.10.11です。',
    quickAnswerTop: {
      ja: {
        question: 'Local AI: Offline Chat & Imageは無料で、オフラインで動作しますか?',
        answer: 'Google Playの掲載情報によれば、はい。ログインやAPIキーなしで無料で使え、モデルをダウンロードした後はチャットと画像生成が端末上で動作します。ただし「広告を含む」の表示があり、モデルのダウンロードにはネットワーク接続が必要です。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)で無料。このアプリのiPhone版やデスクトップ版は掲載されていません。',
          '1Bから22Bパラメータまでの20以上の言語モデルとのチャット、またはStable Diffusionによる画像生成(テキストから画像、画像から画像、インペインティング)。',
          '追加機能:Study、Code、Writing、Interviewなどの15種類のプロンプトツールキット(「Labs」)、LoRA対応、画像アップスケーラー。',
          '2026年10月9日時点の確認:Google Playで5,000回以上ダウンロード、2026年4月4日公開、2026年9月30日に最終更新。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Local AI: Offline Chat & Imageとは?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '使い始める手順',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'ハードウェアと速度',
        anchor: 'hardware-requirements',
      },
      {
        label: 'プライバシー、広告、オンライン機能',
        anchor: 'privacy',
      },
      {
        label: 'トレードオフ:メリットと制限',
        anchor: 'tradeoffs',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかったこと',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替アプリ',
        anchor: 'vs-alternatives',
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
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Imageは、GeetMarkによる無料・広告収入型・クローズドソースのAndroidアプリで、言語モデルとStable Diffusionの画像生成をスマートフォン上で実行し、15種類のプロンプトツールキットをまとめています。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールし、端末に合うモデルをダウンロードすれば、アカウントなしでチャット、執筆、コーディング、画像生成ができます。ツールキットは、学習、面接対策、商品説明の作成などに使える既成のプロンプトテンプレートです。',
          },
        ],
        items: [
          '提供元:Google PlayにGeetMarkとして掲載。掲載ページにサポート用メールアドレスとプライバシーポリシーへのリンクがあります。',
          '価格とライセンス:広告付きで無料。ライセンス文書も公開ソースリポジトリも見つかりませんでした。',
          '範囲:20以上のチャットモデル(1Bから22Bパラメータ)、LoRAと.safetensorsに対応したStable Diffusion、ローカルモデルマネージャー、エンベディング、アップスケーラー。',
          'ハードウェア:掲載情報はRAM 4GB以上、ストレージ2〜15GB、最高速度にはSnapdragon 8 Gen 1以降を推奨し、CPUとGPUへのフォールバックにも対応します。',
          '2026年10月9日時点の確認項目:バージョン26.10.11、5,000回以上のダウンロード、Android 8.0以降、全年齢対象(USK)。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月9日に確認したGoogle Playの掲載情報と開発者のウェブサイトに基づいています。機能は開発者自身の説明であり、PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'Local AI: Offline Chat & Imageとは?',
        content: [
          '**Local AI: Offline Chat & Imageは、オフラインチャットボット、Stable Diffusion画像生成、プロンプトベースの執筆・コーディングツール群を1つのインストールにまとめたAndroidアプリです。** [Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.geetmark.localai)によれば、ログインもAPIキーも不要で、すべて端末上で処理します。',
          '同じ名前を使う別の製品があります。このアプリはオープンソースのLocalAI推論サーバーではなく、開発者のウェブサイト[Local AI Hub](https://localai.appsgm.com/)はモデルとプロンプトの別のディレクトリで、独自の「Local AI Hub Android」ダウンロードも案内しています。そのダウンロードはPlayの掲載ページからリンクされていないため、このレビューの対象はGoogle Playのアプリのみです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**このアプリはAndroid向けにGoogle Play経由で配布されています。iPhone、Mac、Windows版は掲載されていません。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android 8.0以降',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Android向けプライバシーポリシー](https://localai.appsgm.com/policy/android)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: 'このページは、[Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)に掲載されたこのアプリの項目の補足資料です。2026年10月9日に確認したバージョン:26.10.11(Play掲載ページの埋め込みデータから取得)。Playでの最終更新は2026年9月30日です。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: ['**掲載情報には大まかな流れしか書かれておらず、PromptQuorumはこれらの手順を実行していません。**'],
        numberedItems: [
          {
            title: 'インストールして空きストレージを確認する',
            whyItMatters: '掲載情報によると、モデルは選ぶものによって2〜15GBのストレージを使い、初回起動はモデルのキャッシュ作成のため遅くなることがあります。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: '内蔵のモデルマネージャーが言語モデルと画像モデルをバックグラウンドでダウンロードします。ダウンロードにはネットワーク接続が必要です。',
          },
          {
            title: 'チャットするか、ツールキットを開く',
            whyItMatters: '自由形式のチャットを始めるか、Study LabやCode Labなど15種類のLabsの1つを選んで、タスク専用のプロンプトを使います。',
          },
          {
            title: '画像を生成する',
            whyItMatters: 'Stable Diffusionのテキストから画像、画像から画像、インペインティングで、ステップ数、CFGスケール、シード、スケジューラーを設定します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてGoogle Playの説明または開発者のウェブサイトに基づくもので、独自に検証したものはありません。**',
        ],
        items: [
          '**チャット。** 1Bから22Bパラメータの20以上の言語モデル、調整可能な温度とトークン上限、複数言語でのコーディング・推論・ロールプレイのカテゴリ。',
          '**プロンプトツールキット。** 学習、アイデア、Eコマース、ライフスタイル、娯楽、データ、スピーチ、面接、分析、複合ワークフロー、執筆、語学、ビジネス、コード、コンテンツ向けの15種類の「Labs」。',
          '**画像。** Stable Diffusionのテキストから画像、画像から画像、インペインティング、LoRAと.safetensorsモデル、ステップ数・CFGスケール・シード・スケジューラーの調整、画像アップスケーラー。',
          '**高速化。** CPUとGPUに加え、利用可能な場合はSnapdragon NPUによる高速化。',
          '**管理。** ローカルのモデル・ファイルマネージャー、エンベディング対応、バックグラウンドでのモデルダウンロード、保存済みプロンプトテンプレート。',
        ],
        note: 'チャットモデルの推論エンジンは、確認した情報源には記載がなく、特定のモデル形式との互換性は確認できませんでした。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ハードウェアと速度',
        content: [
          '**掲載情報はRAM 4GB以上を推奨し、ストレージは保存するモデルによって2〜15GB必要としています。** 最高の性能はSnapdragon 8 Gen 1以降とされ、NPUがない場合はCPUとGPUで動作します。',
          '掲載情報には、大きなモデルほど多くのRAMが必要で、初回起動は遅くなることがあるとも書かれています。速度の数値、ベンチマーク、毎秒トークン数は見つからなかったため、特定のスマートフォンでの実際の性能は不明です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、広告、オンライン機能',
        content: [
          '**Google Playの「データセーフティ」では「収集されるデータはありません」「第三者と共有されるデータはありません」と宣言され、説明文ではアプリを「完全オフライン。クラウドなし、トラッキングなし」としています。** 同じ掲載ページには「広告を含む」の表示もあります。',
          '開発者の[Android向けプライバシーポリシー](https://localai.appsgm.com/policy/android)は「Local AI Hub Android」という製品向けに書かれており、任意のクラッシュレポートと基本的な端末情報に触れ、モデルはHugging FaceやCivitaiなどからダウンロードされると説明しています。これらは開発者の申告であり監査結果ではなく、ソースコードが公開されていないため、コードとの照合はできません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumは、アプリの通信内容や広告の挙動を調べていません。機密データを扱う場合は、広告の表示中やモデルのダウンロード中にアプリが何を送信するかを確認してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': '無料でアカウント不要',
            '実際の使い勝手': '登録、ログイン、APIキーなしで使えます。',
            '制限・注意点': '掲載情報に「広告を含む」の表示があります。',
          },
          {
            'メリット': 'チャットと画像を1つのアプリで',
            '実際の使い勝手': '言語モデルとStable Diffusionが1回のインストールで使えます。',
            '制限・注意点': '幅広さは開発者の説明で、品質はここでは未検証です。',
          },
          {
            'メリット': '15種類のすぐ使えるプロンプトツールキット',
            '実際の使い勝手': '学習、コード、執筆、面接向けのタスクテンプレート。',
            '制限・注意点': 'プロンプトのテンプレートであり、独立したツールやエージェントではありません。',
          },
          {
            'メリット': '幅広いモデルサイズ',
            '実際の使い勝手': '1Bから22Bパラメータのモデルから選べます。',
            '制限・注意点': '大きなモデルはRAMを多く必要とし、速度の数値は見つかっていません。',
          },
          {
            'メリット': '申告ベースのプライバシー',
            '実際の使い勝手': 'データセーフティでは収集・共有されるデータなしとされています。',
            '制限・注意点': 'ソースが非公開のため、主張をコードで確認できません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**オフラインチャットと画像生成を1つの無料アプリで使いたいAndroidユーザー。** どちらも端末上で動作すると説明されています。',
          '**自分でプロンプトを書くより既成のものを使いたい人。** 15種類のLabsが、日常の学習・執筆・仕事のタスクをカバーします。',
          '**最近のSnapdragon搭載スマートフォンを使っている人。** 掲載情報は、Snapdragon 8 Gen 1以降を最も高性能なハードウェアとして挙げています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**ライセンスとソースコード。** ライセンス文書も公開リポジトリも見つからず、動作をコードで確認できません。開発者のウェブサイトは別の「オープンソース」Androidアプリを案内していますが、そのGitHubリポジトリは404を返しており、このアプリとは見なしていません。',
          '**実機での性能と品質。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、モデルと画像の品質は評価していません。',
          '**エンジンとモデル一覧。** 掲載情報は推論エンジンも、含まれる20以上のモデルも示しておらず、バージョン番号はページの埋め込みデータにのみあり、表示テキストにはありません。',
          '**広告と課金。** Playのページには「広告を含む」の表示がありますが、どのような広告か、有料オプションがあるかは確認できませんでした。',
          '**iPhoneユーザーには不向き。** iOS版は掲載されていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', '対応プラットフォーム', '価格/ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応プラットフォーム': 'iOS、Android',
            '価格/ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つオープンソースのオンデバイスチャットクライアント',
          },
          {
            'アプリ': '[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)',
            '対応プラットフォーム': 'Android、iOS、Mac、Windows',
            '価格/ライセンス': 'フリーミアム / MIT',
            '主な違い': 'ビジョン、音声、ドキュメントチャットを備えたオフラインチャット',
          },
          {
            'アプリ': '[TokForge](/ja/power-local-llm/tokforge-review)',
            '対応プラットフォーム': 'Android',
            '価格/ライセンス': '無料 / クローズドソース',
            '主な違い': 'ロールプレイキャラクター、画像、音声、速度リーダーボード',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            '対応プラットフォーム': 'iOS、Android',
            '価格/ライセンス': '無料 / MIT',
            '主な違い': 'オンデバイスのドキュメントQ&Aを備えたオープンソースのオフラインチャット',
          },
        ],
        note: '競合アプリの情報は頻繁に変わります。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '誰が作っていますか?',
            a: 'Google Playは提供元をGeetMarkとし、開発者のウェブサイトとプライバシーポリシーへのリンクを掲載しています。確認した情報源に企業の背景情報は見つかりませんでした。',
          },
          {
            q: 'オフラインで動作しますか?',
            a: '掲載情報によれば、モデルをダウンロードした後はチャットと画像生成が端末上で動作します。モデルのダウンロードにはネットワークが必要です。',
          },
          {
            q: 'どのチャットモデルが含まれていますか?',
            a: '掲載情報は1Bから22Bパラメータの20以上のモデルと述べていますが名称は示しておらず、正確な一覧は確認できませんでした。',
          },
          {
            q: '画像を生成できますか?',
            a: 'はい、掲載情報によれば、Stable Diffusionのテキストから画像、画像から画像、インペインティングに対応し、LoRAと.safetensorsのサポートとアップスケーラーがあります。',
          },
          {
            q: 'Labsとは何ですか?',
            a: 'プロンプトベースの15種類のツールキットで、たとえば要約や暗記カードを作るStudy Lab、コードの生成と修正を行うCode Labがあります。',
          },
          {
            q: 'PocketPal AIと比べてどうですか?',
            a: 'PocketPal AIはiOSとAndroid向けの無料でMITライセンスのチャットクライアントです。一方、このアプリはクローズドソースで広告があり、Stable Diffusion画像とプロンプトツールキットをAndroidのみで追加しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Local AI: Offline Chat & Imageは、オフラインチャット、Stable Diffusionの画像生成、15種類のプロンプトツールキットを1つの無料Androidアプリにまとめ、データセーフティでは収集データなしと申告しています。一方で、広告があり、ソースコードは非公開でライセンスも明記されず、モデル一覧とエンジンも示されず、インストール数は5,000回以上と少なく、実機での検証もありません。無料で何でもできるオフラインアプリを求め、これらの条件を受け入れるAndroidユーザーに向いています。検証可能なコードを求める方は[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Google PlayのLocal AI: Offline Chat & Image](https://play.google.com/store/apps/details?id=com.geetmark.localai) — 説明、データセーフティ、広告表示、ダウンロード数、日付。2026年10月9日確認。',
          '[localai.appsgm.com](https://localai.appsgm.com/) — 開発者のウェブサイト、[Android向けプライバシーポリシー](https://localai.appsgm.com/policy/android)、アプリとダウンロードのページ。2026年10月9日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料でオープンソースのオンデバイスチャットクライアント。',
          '[Off Grid AIレビュー](/ja/power-local-llm/off-grid-ai-review) — ビジョン、音声、ドキュメントを備えたオフラインチャット。',
          '[TokForgeレビュー](/ja/power-local-llm/tokforge-review) — ロールプレイと画像生成を備えたAndroid向けオフラインチャット。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — 無料でMITライセンスのオフラインチャットアプリ。',
          '[2026年版 Android向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android全体を見渡す記事。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-pt.webp',
    title: 'Análise do Local AI: Offline Chat & Image: app gratuito para Android com Stable Diffusion e kits de prompts',
    seoTitle: 'Análise do Local AI: Offline Chat & Image (Android)',
    intro: 'O Local AI: Offline Chat & Image é um app gratuito para Android publicado no Google Play pela [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) que executa modelos de linguagem e geração de imagens com Stable Diffusion no celular, além de 15 kits de prompts integrados para tarefas de escrita, programação, estudo e negócios. A página do app traz o rótulo "Contém anúncios", o código-fonte não é publicado e nenhuma licença é informada. Esta análise se baseia na página do Google Play e no site do desenvolvedor, [localai.appsgm.com](https://localai.appsgm.com/), consultados em 9 de outubro de 2026; a PromptQuorum não testou o app na prática. Ele não tem relação com o projeto de servidor de código aberto LocalAI.',
    metaDescription: 'Análise do Local AI: Offline Chat & Image: app gratuito para Android com mais de 20 modelos offline, imagens Stable Diffusion e 15 kits de prompts. Anúncios, privacidade e limites.',
    twitterDescription: 'Análise do Local AI: Offline Chat & Image: app gratuito para Android de chat offline e imagens Stable Diffusion com 15 kits de prompts. Com anúncios, código fechado, licença não informada.',
    audience: 'Usuários de Android que querem um app gratuito de chat e imagens offline com kits de prompts prontos e que precisam saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e o que não foi possível verificar.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Local AI Offline Chat & Image',
    targetKeywords: [
      'análise local ai offline chat and image',
      'geetmark local ai android',
      'app de chat de ia offline android',
      'app android stable diffusion offline',
      'app de kits de prompts de ia offline',
      'app android de llm local com geração de imagens',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**O Local AI: Offline Chat & Image, da GeetMark, é um app gratuito para Android que executa modelos de linguagem e Stable Diffusion no dispositivo e acrescenta 15 kits de prompts, sem conta e sem chave de API.** A página dele no Google Play declara que nenhum dado é coletado ou compartilhado, mas também traz o rótulo "Contém anúncios". O código-fonte não é publicado e a licença não é informada; os dados da página do Play indicam a versão 26.10.11 em 9 de outubro de 2026.',
    quickAnswerTop: {
      pt: {
        question: 'O Local AI: Offline Chat & Image é gratuito e funciona offline?',
        answer: 'Segundo a página do Google Play, sim: é gratuito, sem login nem chave de API, e o chat e a geração de imagens rodam no dispositivo depois que os modelos são baixados. A página também mostra o rótulo "Contém anúncios", e o download dos modelos exige conexão com a internet.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai); não há versão para iPhone nem para desktop listada para este app.',
          'Chat com mais de 20 modelos de linguagem de 1B a 22B parâmetros, ou geração de imagens com Stable Diffusion (texto para imagem, imagem para imagem, inpainting).',
          'Extras: 15 kits de prompts ("Labs") como Study, Code, Writing e Interview, além de suporte a LoRA e um ampliador de imagens.',
          'Verificado em 9 de outubro de 2026: mais de 5 mil downloads no Google Play, lançado em 4 de abril de 2026 e atualizado pela última vez em 30 de setembro de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Local AI: Offline Chat & Image?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Primeiros passos',
        anchor: 'getting-started',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Hardware e velocidade',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Privacidade, anúncios e recursos online',
        anchor: 'privacy',
      },
      {
        label: 'Prós e contras: benefícios e limitações',
        anchor: 'tradeoffs',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não foi possível verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Local AI: Offline Chat & Image é um app gratuito para Android, financiado por anúncios e de código fechado, feito pela GeetMark, que executa modelos de linguagem e geração de imagens com Stable Diffusion no celular e reúne 15 kits de prompts.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala pelo Google Play, baixa um modelo que caiba no seu celular e depois conversa, escreve, programa ou gera imagens sem conta; os kits são modelos de prompts prontos para tarefas como estudar, se preparar para entrevistas e escrever descrições de produtos.',
          },
        ],
        items: [
          'Publicador: listado no Google Play como GeetMark, com e-mail de suporte e link para a política de privacidade na página do app.',
          'Preço e licença: gratuito com anúncios; nenhum texto de licença nem repositório público de código-fonte foi encontrado.',
          'Escopo: mais de 20 modelos de chat (de 1B a 22B parâmetros), Stable Diffusion com suporte a LoRA e .safetensors, um gerenciador local de modelos, embeddings e um ampliador de imagens.',
          'Hardware: a página recomenda 4 GB ou mais de RAM, de 2 a 15 GB de armazenamento e um Snapdragon 8 Gen 1 ou mais recente para a melhor velocidade, com alternativa em CPU e GPU.',
          'Indicadores verificados em 9 de outubro de 2026: versão 26.10.11, mais de 5 mil downloads, Android 8.0 ou superior, classificação livre (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página do Google Play e no site do desenvolvedor, consultados em 9 de outubro de 2026. Os recursos são a descrição do próprio desenvolvedor, e a PromptQuorum não testou nem mediu o desempenho do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'O que é o Local AI: Offline Chat & Image?',
        content: [
          '**O Local AI: Offline Chat & Image é um app para Android que combina um chatbot offline, um gerador de imagens Stable Diffusion e um conjunto de ferramentas de escrita e programação baseadas em prompts em uma única instalação.** Segundo a [página do Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai), ele não exige login nem chave de API e processa tudo no dispositivo.',
          'O nome é compartilhado por outros produtos: o app não é o servidor de inferência de código aberto LocalAI, e o site do desenvolvedor, o [Local AI Hub](https://localai.appsgm.com/), é um diretório separado de modelos e prompts que também anuncia um download próprio, o "Local AI Hub Android". Esse download não está vinculado na página do Play, por isso esta análise cobre apenas o app do Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O app é distribuído pelo Google Play para Android; não há versão para iPhone, Mac ou Windows listada.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Android 8.0+',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade para Android](https://localai.appsgm.com/policy/android)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Esta página é material complementar à entrada do app no [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versão verificada em 9 de outubro de 2026: 26.10.11, lida nos dados da página do Play; a última atualização no Play foi em 30 de setembro de 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeiros passos',
        content: [
          '**A página descreve o fluxo apenas em linhas gerais; a PromptQuorum não executou estas etapas.**',
        ],
        numberedItems: [
          {
            title: 'Instale e confira o armazenamento livre',
            whyItMatters: 'A página diz que os modelos ocupam de 2 a 15 GB de armazenamento, conforme os escolhidos, e que a primeira execução pode ser mais lenta enquanto os modelos são colocados em cache.',
          },
          {
            title: 'Baixe um modelo',
            whyItMatters: 'O gerenciador de modelos integrado baixa modelos de linguagem e de imagem em segundo plano; o download exige conexão com a internet.',
          },
          {
            title: 'Converse ou abra um kit',
            whyItMatters: 'Inicie um chat livre ou escolha um dos 15 Labs, como o Study Lab ou o Code Lab, para obter um prompt específico para a tarefa.',
          },
          {
            title: 'Gere imagens',
            whyItMatters: 'Defina passos, escala CFG, seed e agendador para a geração de texto para imagem, imagem para imagem ou inpainting com Stable Diffusion.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem da descrição do Google Play ou do site do desenvolvedor; nada foi testado de forma independente.**',
        ],
        items: [
          '**Chat.** Mais de 20 modelos de linguagem de 1B a 22B parâmetros, temperatura e limites de tokens ajustáveis e categorias de programação, raciocínio e roleplay em vários idiomas.',
          '**Kits de prompts.** 15 "Labs" para estudo, ideias, e-commerce, estilo de vida, diversão, dados, discursos, entrevistas, análise, fluxos combinados, escrita, idiomas, trabalho profissional, código e conteúdo.',
          '**Imagens.** Stable Diffusion de texto para imagem, imagem para imagem e inpainting, modelos LoRA e .safetensors, controle de passos, escala CFG, seed e agendador, e um ampliador de imagens.',
          '**Aceleração.** CPU e GPU, além de aceleração pela NPU do Snapdragon quando disponível.',
          '**Gerenciamento.** Um gerenciador local de modelos e arquivos, suporte a embeddings, downloads de modelos em segundo plano e modelos de prompts salvos.',
        ],
        note: 'O mecanismo de inferência por trás dos modelos de chat não é citado nas fontes lidas, por isso não foi possível confirmar a compatibilidade com formatos de modelo específicos.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware e velocidade',
        content: [
          '**A página recomenda 4 GB ou mais de RAM e informa que o armazenamento necessário vai de 2 a 15 GB, conforme os modelos que você mantém.** O melhor desempenho é indicado para um Snapdragon 8 Gen 1 ou mais recente; sem NPU, o app recorre a CPU e GPU.',
          'A página acrescenta que modelos grandes exigem mais RAM e que a primeira execução pode ser mais lenta. Não foram encontrados números de velocidade, benchmarks nem tokens por segundo, então o desempenho real em um celular específico é desconhecido.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, anúncios e recursos online',
        content: [
          '**A seção "Segurança dos dados" do Google Play declara "Nenhum dado coletado" e "Nenhum dado compartilhado com terceiros", e a descrição chama o app de "totalmente offline: sem nuvem, sem rastreamento".** A mesma página traz o rótulo "Contém anúncios".',
          'A [política de privacidade para Android](https://localai.appsgm.com/policy/android) do desenvolvedor foi escrita para um produto que chama de "Local AI Hub Android", menciona relatórios de falhas opcionais e informações básicas do dispositivo e diz que os modelos são baixados de fontes como Hugging Face e Civitai. São declarações do desenvolvedor, não resultados de auditoria, e, como o código-fonte não é publicado, nada disso pode ser conferido no código.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não inspecionou o tráfego de rede nem o comportamento dos anúncios do app. Quem lida com dados confidenciais deve verificar o que o app envia enquanto um anúncio é exibido ou um modelo está sendo baixado.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios e limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito e sem conta',
            'O que significa no uso real': 'Instale e use sem cadastro, login ou chaves de API.',
            'Limitação / ressalva': 'A página traz o rótulo "Contém anúncios".',
          },
          {
            'Benefício': 'Chat e imagens em um só app',
            'O que significa no uso real': 'Modelos de linguagem e Stable Diffusion em uma única instalação.',
            'Limitação / ressalva': 'A abrangência é descrita pelo desenvolvedor; a qualidade não foi testada aqui.',
          },
          {
            'Benefício': '15 kits de prompts prontos',
            'O que significa no uso real': 'Modelos de tarefa para estudo, código, escrita e entrevistas.',
            'Limitação / ressalva': 'São modelos de prompts, não ferramentas ou agentes separados.',
          },
          {
            'Benefício': 'Ampla faixa de tamanhos de modelo',
            'O que significa no uso real': 'Escolha entre modelos de 1B a 22B parâmetros.',
            'Limitação / ressalva': 'Modelos grandes exigem mais RAM; não há números de velocidade.',
          },
          {
            'Benefício': 'Privado por declaração',
            'O que significa no uso real': 'Segurança dos dados indica nenhum dado coletado ou compartilhado.',
            'Limitação / ressalva': 'O código não é publicado, então a afirmação não pode ser conferida.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Android que querem um único app gratuito para chat offline e geração de imagens.** A descrição diz que ambos rodam no dispositivo.',
          '**Pessoas que preferem prompts prontos a escrever os próprios.** Os 15 Labs cobrem tarefas cotidianas de estudo, escrita e trabalho.',
          '**Usuários com um celular Snapdragon recente.** A página cita o Snapdragon 8 Gen 1 ou mais recente como o hardware de melhor desempenho.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não foi possível verificar',
        items: [
          '**Licença e código-fonte.** Nenhum texto de licença nem repositório público foi encontrado, então o comportamento não pode ser conferido no código. O site do desenvolvedor divulga outro app Android "de código aberto", cujos repositórios no GitHub retornaram 404, e ele não é tratado como este app.',
          '**Desempenho e qualidade na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade dos modelos e das imagens não são avaliados.',
          '**Mecanismo e lista de modelos.** A página não cita o mecanismo de inferência nem quais são os mais de 20 modelos incluídos, e o número da versão aparece apenas nos dados embutidos da página, não no texto visível.',
          '**Anúncios e compras.** A página do Play mostra o rótulo "Contém anúncios"; não foi confirmado quais são os anúncios nem se existem opções pagas.',
          '**Não serve para usuários de iPhone.** Nenhuma versão para iOS está listada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca própria de modelos',
          },
          {
            App: '[Off Grid AI](/pt/power-local-llm/off-grid-ai-review)',
            Plataformas: 'Android, iOS, Mac, Windows',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Chat offline com visão, voz e chat com documentos',
          },
          {
            App: '[TokForge](/pt/power-local-llm/tokforge-review)',
            Plataformas: 'Android',
            'Preço / licença': 'Grátis / código fechado',
            'Diferença principal': 'Personagens de roleplay, imagens, voz e ranking de velocidade',
          },
          {
            App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas e respostas sobre documentos no dispositivo',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quem faz o app?',
            a: 'O Google Play lista a GeetMark como publicadora e vincula o site do desenvolvedor e uma política de privacidade; nenhum histórico da empresa foi encontrado nas fontes lidas.',
          },
          {
            q: 'Funciona offline?',
            a: 'Segundo a página, o chat e a geração de imagens rodam no dispositivo depois que os modelos são baixados. Baixar os modelos exige internet.',
          },
          {
            q: 'Quais modelos de chat estão incluídos?',
            a: 'A página fala em mais de 20 modelos de 1B a 22B parâmetros, mas não os nomeia, então a lista exata não pôde ser confirmada.',
          },
          {
            q: 'Consegue gerar imagens?',
            a: 'Sim, segundo a página: Stable Diffusion de texto para imagem, imagem para imagem e inpainting, com suporte a LoRA e .safetensors e um ampliador.',
          },
          {
            q: 'O que são os Labs?',
            a: 'São 15 kits de ferramentas baseados em prompts, por exemplo o Study Lab para resumos e flashcards e o Code Lab para gerar e corrigir código.',
          },
          {
            q: 'Como se compara ao PocketPal AI?',
            a: 'O PocketPal AI é um cliente de chat gratuito com licença MIT para iOS e Android, enquanto este app é de código fechado, com anúncios, e acrescenta imagens Stable Diffusion e kits de prompts apenas no Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Local AI: Offline Chat & Image oferece chat offline, geração de imagens com Stable Diffusion e 15 kits de prompts em um app gratuito para Android, com uma seção de segurança dos dados que declara nenhum dado coletado. Em contrapartida, o app tem anúncios, o código-fonte não é publicado e não há licença informada, a lista de modelos e o mecanismo não são divulgados, a base de instalações é pequena (mais de 5 mil downloads) e nada disso foi testado na prática. Serve a usuários de Android que querem um app offline gratuito para tudo e aceitam essas condições; quem quiser código auditável pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Local AI: Offline Chat & Image no Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — descrição, seção de segurança dos dados, rótulo de anúncios, número de downloads e datas, consultados em 9 de outubro de 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — o site do desenvolvedor, sua [política de privacidade para Android](https://localai.appsgm.com/policy/android) e suas páginas de apps e downloads, consultados em 9 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo.',
          '[Análise do Off Grid AI](/pt/power-local-llm/off-grid-ai-review) — chat offline com visão, voz e documentos.',
          '[Análise do TokForge](/pt/power-local-llm/tokforge-review) — chat offline para Android com roleplay e imagens.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito com licença MIT.',
          '[Os melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo do Android.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-ar.webp',
    title: 'مراجعة Local AI: Offline Chat & Image: تطبيق Android مجاني مع Stable Diffusion وحزم أدوات للمطالبات',
    seoTitle: 'مراجعة Local AI: Offline Chat & Image (Android)',
    intro: 'Local AI: Offline Chat & Image تطبيق Android مجاني ينشره [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) على Google Play، ويشغّل نماذج اللغة وتوليد الصور عبر Stable Diffusion على الهاتف، إضافةً إلى 15 حزمة أدوات مدمجة للمطالبات في الكتابة والبرمجة والدراسة والأعمال. تحمل صفحة التطبيق وسم «يحتوي على إعلانات»، والشيفرة المصدرية غير منشورة، ولا يُذكر ترخيص. تستند هذه المراجعة إلى صفحة Google Play وموقع المطوّر [localai.appsgm.com](https://localai.appsgm.com/)، وقد جرى الاطلاع عليهما في 9 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا. لا علاقة له بمشروع خادم LocalAI مفتوح المصدر.',
    metaDescription: 'مراجعة Local AI: Offline Chat & Image: تطبيق Android مجاني بأكثر من 20 نموذجًا دون اتصال وصور Stable Diffusion و15 حزمة مطالبات. الإعلانات والخصوصية والحدود.',
    twitterDescription: 'مراجعة Local AI: Offline Chat & Image: تطبيق Android مجاني للدردشة دون اتصال وصور Stable Diffusion مع 15 حزمة مطالبات. يحتوي على إعلانات، مغلق المصدر، والترخيص غير مذكور.',
    audience: 'مستخدمو Android الذين يريدون تطبيقًا مجانيًا للدردشة والصور دون اتصال مع حزم مطالبات جاهزة، ويحتاجون إلى معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط وما تعذّر التحقق منه.',
    readTime: 'قراءة في 8 دقائق',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Local AI Offline Chat & Image',
    targetKeywords: [
      'مراجعة local ai offline chat and image',
      'geetmark local ai android',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال android',
      'تطبيق stable diffusion دون اتصال android',
      'تطبيق حزم مطالبات الذكاء الاصطناعي دون اتصال',
      'تطبيق android لنموذج لغوي محلي مع توليد الصور',
      'local ai offline chat مقابل pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**Local AI: Offline Chat & Image من GeetMark تطبيق Android مجاني يشغّل نماذج اللغة وStable Diffusion على الجهاز ويضيف 15 حزمة مطالبات، دون حساب ودون مفتاح API.** تعلن صفحته على Google Play أنه لا تُجمع بيانات ولا تُشارك، لكنها تحمل أيضًا وسم «يحتوي على إعلانات». الشيفرة المصدرية غير منشورة والترخيص غير مذكور؛ وتشير بيانات صفحة Play إلى الإصدار 26.10.11 حتى 9 أكتوبر 2026.',
    quickAnswerTop: {
      ar: {
        question: 'هل Local AI: Offline Chat & Image مجاني ويعمل دون اتصال؟',
        answer: 'بحسب صفحته على Google Play، نعم: هو مجاني دون تسجيل دخول أو مفتاح API، ويعمل كل من الدردشة وتوليد الصور على الجهاز بعد تنزيل النماذج. وتعرض الصفحة أيضًا وسم «يحتوي على إعلانات»، كما يتطلب تنزيل النماذج اتصالًا بالشبكة.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)؛ ولا توجد نسخة لـ iPhone أو لسطح المكتب مدرجة لهذا التطبيق.',
          'دردشة مع أكثر من 20 نموذج لغة من 1B إلى 22B معامل، أو توليد صور عبر Stable Diffusion (نص إلى صورة، صورة إلى صورة، الإكمال الداخلي Inpainting).',
          'إضافات: 15 حزمة مطالبات («Labs») مثل Study وCode وWriting وInterview، ودعم LoRA، ومكبّر للصور.',
          'وفق الاطلاع في 9 أكتوبر 2026: أكثر من 5000 تنزيل على Google Play، وصدر في 4 أبريل 2026، وآخر تحديث في 30 سبتمبر 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Local AI: Offline Chat & Image؟',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'خطوات البدء',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'العتاد والسرعة',
        anchor: 'hardware-requirements',
      },
      {
        label: 'الخصوصية والإعلانات والميزات عبر الإنترنت',
        anchor: 'privacy',
      },
      {
        label: 'المفاضلة: المزايا مقابل القيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما تعذّر التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image تطبيق Android مجاني ممول بالإعلانات ومغلق المصدر من GeetMark، يشغّل نماذج اللغة وتوليد الصور عبر Stable Diffusion على الهاتف ويجمع 15 حزمة مطالبات.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play، وتنزّل نموذجًا يناسب هاتفك، ثم تدردش أو تكتب أو تبرمج أو تولّد صورًا دون حساب؛ والحزم عبارة عن قوالب مطالبات جاهزة لمهام مثل الدراسة والمقابلات الوظيفية وأوصاف المنتجات.',
          },
        ],
        items: [
          'الناشر: مدرج على Google Play باسم GeetMark، مع بريد إلكتروني للدعم ورابط لسياسة الخصوصية في صفحة التطبيق.',
          'السعر والترخيص: مجاني مع إعلانات؛ ولم يُعثر على نص ترخيص ولا على مستودع عام للشيفرة المصدرية.',
          'النطاق: أكثر من 20 نموذج دردشة (من 1B إلى 22B معامل)، وStable Diffusion مع دعم LoRA وملفات .safetensors، ومدير نماذج محلي، وتضمينات (embeddings)، ومكبّر للصور.',
          'العتاد: توصي الصفحة بذاكرة RAM لا تقل عن 4 GB ومساحة تخزين من 2 إلى 15 GB ومعالج Snapdragon 8 Gen 1 أو أحدث لأفضل سرعة، مع بديل على CPU وGPU.',
          'مؤشرات جرى التحقق منها في 9 أكتوبر 2026: الإصدار 26.10.11، وأكثر من 5000 تنزيل، وAndroid 8.0 أو أحدث، ومناسب لجميع الأعمار (USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play وموقع المطوّر، وقد جرى الاطلاع عليهما في 9 أكتوبر 2026. القدرات المذكورة هي وصف المطوّر نفسه، ولم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'ما هو Local AI: Offline Chat & Image؟',
        content: [
          '**Local AI: Offline Chat & Image تطبيق Android يجمع في تثبيت واحد روبوت دردشة دون اتصال ومولّد صور Stable Diffusion ومجموعة أدوات كتابة وبرمجة قائمة على المطالبات.** وبحسب [صفحته على Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) فهو لا يتطلب تسجيل دخول ولا مفتاح API ويعالج كل شيء على الجهاز.',
          'يشترك في الاسم منتجات أخرى: فالتطبيق ليس خادم الاستدلال مفتوح المصدر LocalAI، وموقع المطوّر [Local AI Hub](https://localai.appsgm.com/) دليل منفصل للنماذج والمطالبات يعلن أيضًا عن تنزيل خاص به باسم «Local AI Hub Android». هذا التنزيل غير مرتبط من صفحة Play، ولذلك تغطي هذه المراجعة تطبيق Google Play فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع التطبيق عبر Google Play على Android؛ ولا توجد نسخة لـ iPhone أو Mac أو Windows مدرجة.**',
        ],
        columns: ['المنصة', 'أين تجده'],
        rows: [
          {
            'المنصة': 'Android 8.0+',
            'أين تجده': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'أين تجده': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'أين تجده': '[سياسة الخصوصية لنظام Android](https://localai.appsgm.com/policy/android)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'أين تجده': 'غير منشورة',
          },
        ],
        note: 'هذه الصفحة مادة مرافقة لإدخال التطبيق في [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). الإصدار الذي جرى التحقق منه في 9 أكتوبر 2026: 26.10.11، من بيانات صفحة Play المضمّنة؛ وكان آخر تحديث على Play في 30 سبتمبر 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'خطوات البدء',
        content: [
          '**تصف الصفحة المسار بخطوطه العامة فقط؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق وتحقق من المساحة الحرة',
            whyItMatters: 'تقول الصفحة إن النماذج تشغل من 2 إلى 15 GB بحسب ما تختاره، وإن أول تشغيل قد يكون أبطأ أثناء تخزين النماذج مؤقتًا.',
          },
          {
            title: 'نزّل نموذجًا',
            whyItMatters: 'ينزّل مدير النماذج المدمج نماذج اللغة والصور في الخلفية؛ ويتطلب التنزيل اتصالًا بالشبكة.',
          },
          {
            title: 'ابدأ دردشة أو افتح حزمة أدوات',
            whyItMatters: 'ابدأ دردشة حرة، أو اختر واحدًا من 15 Lab مثل Study Lab أو Code Lab للحصول على مطالبة مخصصة للمهمة.',
          },
          {
            title: 'ولّد الصور',
            whyItMatters: 'اضبط الخطوات ومقياس CFG والبذرة (seed) والمجدول (scheduler) في Stable Diffusion لتوليد صورة من نص أو من صورة أو للإكمال الداخلي.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مأخوذ من وصف Google Play أو من موقع المطوّر؛ ولم يُختبر أي منه بشكل مستقل.**',
        ],
        items: [
          '**الدردشة.** أكثر من 20 نموذج لغة من 1B إلى 22B معامل، ودرجة حرارة وحدود رموز (tokens) قابلة للضبط، وفئات للبرمجة والاستدلال ولعب الأدوار بعدة لغات.',
          '**حزم المطالبات.** 15 «Lab» للدراسة والأفكار والتجارة الإلكترونية ونمط الحياة والترفيه والبيانات والخطابات والمقابلات والتحليل وسير العمل المركّبة والكتابة واللغات والعمل المهني والبرمجة والمحتوى.',
          '**الصور.** Stable Diffusion من نص إلى صورة ومن صورة إلى صورة والإكمال الداخلي، ونماذج LoRA وملفات .safetensors، وتحكم في الخطوات ومقياس CFG والبذرة والمجدول، ومكبّر للصور.',
          '**التسريع.** CPU وGPU، إضافةً إلى تسريع وحدة NPU في Snapdragon حيثما تتوفر.',
          '**الإدارة.** مدير محلي للنماذج والملفات، ودعم التضمينات (embeddings)، وتنزيل النماذج في الخلفية، وقوالب مطالبات محفوظة.',
        ],
        note: 'لا يُذكر محرك الاستدلال الذي تعمل عليه نماذج الدردشة في المصادر المقروءة، ولذلك تعذّر تأكيد التوافق مع صيغ نماذج محددة.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'العتاد والسرعة',
        content: [
          '**توصي الصفحة بذاكرة RAM لا تقل عن 4 GB وتذكر أن مساحة التخزين تتراوح من 2 إلى 15 GB بحسب النماذج التي تحتفظ بها.** وأفضل أداء مذكور لمعالج Snapdragon 8 Gen 1 أو أحدث؛ وبدون NPU يعود التطبيق إلى CPU وGPU.',
          'تضيف الصفحة أن النماذج الكبيرة تحتاج إلى مزيد من RAM وأن أول تشغيل قد يكون أبطأ. لم يُعثر على أرقام للسرعة أو اختبارات أداء أو عدد رموز في الثانية، لذلك يبقى الأداء الفعلي على هاتف بعينه مجهولًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والإعلانات والميزات عبر الإنترنت',
        content: [
          '**يعلن قسم «أمان البيانات» في Google Play «لم يتم جمع أي بيانات» و«لا تتم مشاركة بيانات مع أطراف ثالثة»، ويصف النص التطبيق بأنه «يعمل دون اتصال بالكامل: بلا سحابة وبلا تتبّع».** وتحمل الصفحة نفسها وسم «يحتوي على إعلانات».',
          'كُتبت [سياسة الخصوصية لنظام Android](https://localai.appsgm.com/policy/android) الخاصة بالمطوّر لمنتج تسميه «Local AI Hub Android»، وتذكر تقارير أعطال اختيارية ومعلومات أساسية عن الجهاز، وتقول إن النماذج تُنزَّل من مصادر مثل Hugging Face وCivitai. هذه إفادات من المطوّر وليست نتائج تدقيق، ولأن الشيفرة المصدرية غير منشورة لا يمكن مطابقة أي منها بالشيفرة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تفحص PromptQuorum حركة الشبكة ولا سلوك الإعلانات في التطبيق. وينبغي لمن يتعامل مع بيانات سرية التحقق مما يرسله التطبيق أثناء عرض إعلان أو تنزيل نموذج.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'المفاضلة: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مجاني وبلا حساب',
            'ما تعنيه في الاستخدام الفعلي': 'ثبّته واستخدمه دون تسجيل أو تسجيل دخول أو مفاتيح API.',
            'القيد / التحفظ': 'تحمل الصفحة وسم «يحتوي على إعلانات».',
          },
          {
            'الميزة': 'دردشة وصور في تطبيق واحد',
            'ما تعنيه في الاستخدام الفعلي': 'نماذج اللغة وStable Diffusion في تثبيت واحد.',
            'القيد / التحفظ': 'نطاق الميزات من وصف المطوّر؛ والجودة لم تُختبر هنا.',
          },
          {
            'الميزة': '15 حزمة مطالبات جاهزة',
            'ما تعنيه في الاستخدام الفعلي': 'قوالب مهام للدراسة والبرمجة والكتابة والمقابلات.',
            'القيد / التحفظ': 'هي قوالب مطالبات وليست أدوات أو وكلاء مستقلين.',
          },
          {
            'الميزة': 'نطاق واسع لأحجام النماذج',
            'ما تعنيه في الاستخدام الفعلي': 'اختر من نماذج بين 1B و22B معامل.',
            'القيد / التحفظ': 'النماذج الكبيرة تحتاج مزيدًا من RAM؛ ولا توجد أرقام سرعة.',
          },
          {
            'الميزة': 'خاص بحسب الإعلان',
            'ما تعنيه في الاستخدام الفعلي': 'أمان البيانات لا يذكر بيانات مجموعة أو مشاركة.',
            'القيد / التحفظ': 'الشيفرة غير منشورة، فلا يمكن التحقق من الادعاء عبرها.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Android الذين يريدون تطبيقًا مجانيًا واحدًا للدردشة دون اتصال وتوليد الصور.** يصف النص كليهما بأنه يعمل على الجهاز.',
          '**من يفضلون المطالبات الجاهزة على كتابة مطالباتهم بأنفسهم.** تغطي الـ 15 Lab مهام الدراسة والكتابة والعمل اليومية.',
          '**أصحاب هواتف Snapdragon الحديثة.** تذكر الصفحة Snapdragon 8 Gen 1 أو أحدث بوصفه العتاد الأفضل أداءً.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما تعذّر التحقق منه',
        items: [
          '**الترخيص والشيفرة المصدرية.** لم يُعثر على نص ترخيص ولا على مستودع عام، فلا يمكن مطابقة السلوك بالشيفرة. يعلن موقع المطوّر عن تطبيق Android آخر «مفتوح المصدر» أعادت مستودعاته على GitHub الخطأ 404، ولا يُعامل على أنه هذا التطبيق.',
          '**الأداء والجودة عمليًا.** لم تشغّل PromptQuorum التطبيق، فلا يُقيَّم هنا الأداء ولا استهلاك البطارية ولا جودة النماذج والصور.',
          '**المحرك وقائمة النماذج.** لا تذكر الصفحة محرك الاستدلال ولا النماذج الـ 20 وأكثر المضمّنة، ويظهر رقم الإصدار في بيانات الصفحة المضمّنة فقط وليس في نصها المرئي.',
          '**الإعلانات والمشتريات.** تعرض صفحة Play وسم «يحتوي على إعلانات»؛ ولم يتأكد نوع الإعلانات ولا وجود خيارات مدفوعة.',
          '**لا يناسب مستخدمي iPhone.** لا توجد نسخة لنظام iOS مدرجة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة',
          },
          {
            'التطبيق': '[Off Grid AI](/ar/power-local-llm/off-grid-ai-review)',
            'المنصات': 'Android وiOS وMac وWindows',
            'السعر / الترخيص': 'Freemium / MIT',
            'الفرق الرئيسي': 'دردشة دون اتصال مع الرؤية والصوت والدردشة مع المستندات',
          },
          {
            'التطبيق': '[TokForge](/ar/power-local-llm/tokforge-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / مغلق المصدر',
            'الفرق الرئيسي': 'شخصيات لعب أدوار وصور وصوت ولوحة صدارة للسرعة',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة عن المستندات على الجهاز',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'من يصنعه؟',
            a: 'تذكر Google Play الناشر GeetMark وتربط موقع المطوّر وسياسة خصوصية؛ ولم يُعثر على خلفية عن الشركة في المصادر المقروءة.',
          },
          {
            q: 'هل يعمل دون اتصال؟',
            a: 'بحسب الصفحة، تعمل الدردشة وتوليد الصور على الجهاز بعد تنزيل النماذج. أما تنزيل النماذج فيتطلب شبكة.',
          },
          {
            q: 'ما نماذج الدردشة المضمّنة؟',
            a: 'تقول الصفحة أكثر من 20 نموذجًا من 1B إلى 22B معامل دون ذكر أسمائها، فتعذّر تأكيد القائمة الدقيقة.',
          },
          {
            q: 'هل يستطيع توليد الصور؟',
            a: 'نعم، بحسب الصفحة: Stable Diffusion من نص إلى صورة ومن صورة إلى صورة والإكمال الداخلي، مع دعم LoRA وملفات .safetensors ومكبّر للصور.',
          },
          {
            q: 'ما هي الـ Labs؟',
            a: 'هي 15 حزمة أدوات قائمة على المطالبات، مثل Study Lab للملخصات والبطاقات التعليمية وCode Lab لتوليد الشيفرة وإصلاحها.',
          },
          {
            q: 'كيف يقارن بـ PocketPal AI؟',
            a: 'PocketPal AI عميل دردشة مجاني بترخيص MIT على iOS وAndroid، أما هذا التطبيق فمغلق المصدر ويحتوي على إعلانات ويضيف صور Stable Diffusion وحزم المطالبات على Android فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'يقدّم Local AI: Offline Chat & Image دردشة دون اتصال وتوليد صور عبر Stable Diffusion و15 حزمة مطالبات في تطبيق Android مجاني، مع قسم أمان بيانات يعلن عدم جمع بيانات. في المقابل يحتوي التطبيق على إعلانات، وشيفرته غير منشورة والترخيص غير مذكور، وقائمة النماذج والمحرك غير معلنة، وقاعدة المستخدمين صغيرة (أكثر من 5000 تنزيل)، ولم يُختبر شيء من ذلك عمليًا. يناسب مستخدمي Android الذين يريدون تطبيقًا مجانيًا شاملًا يعمل دون اتصال ويقبلون هذه الشروط؛ ومن يريد شيفرة قابلة للتدقيق يمكنه المقارنة مع [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Local AI: Offline Chat & Image على Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) — الوصف وقسم أمان البيانات ووسم الإعلانات وعدد التنزيلات والتواريخ، جرى الاطلاع عليها في 9 أكتوبر 2026.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — موقع المطوّر و[سياسة الخصوصية لنظام Android](https://localai.appsgm.com/policy/android) وصفحات التطبيقات والتنزيل، جرى الاطلاع عليها في 9 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني مفتوح المصدر على الجهاز.',
          '[مراجعة Off Grid AI](/ar/power-local-llm/off-grid-ai-review) — دردشة دون اتصال مع الرؤية والصوت والمستندات.',
          '[مراجعة TokForge](/ar/power-local-llm/tokforge-review) — دردشة دون اتصال لنظام Android مع لعب الأدوار والصور.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الاستعراض الأوسع لنظام Android.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-zh.webp',
    title: 'Local AI: Offline Chat & Image 评测:支持 Stable Diffusion 与提示词工具包的免费 Android 应用',
    seoTitle: 'Local AI: Offline Chat & Image 评测(Android)',
    intro: 'Local AI: Offline Chat & Image 是由 [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai) 在 Google Play 上发布的免费 Android 应用,可在手机上运行语言模型和 Stable Diffusion 图像生成,并内置 15 个面向写作、编程、学习和商务任务的提示词工具包。应用页面带有“包含广告”标签,源代码未公开,也未注明许可证。本评测基于 2026 年 10 月 9 日查阅的 Google Play 页面和开发者网站 [localai.appsgm.com](https://localai.appsgm.com/);PromptQuorum 未对该应用进行实际测试。它与开源的 LocalAI 服务器项目无关。',
    metaDescription: 'Local AI: Offline Chat & Image 评测:免费 Android 应用,含 20 多个离线模型、Stable Diffusion 图像生成和 15 个提示词工具包。广告、隐私与局限。',
    twitterDescription: 'Local AI: Offline Chat & Image 评测:免费 Android 应用,支持离线聊天和 Stable Diffusion 图像,含 15 个提示词工具包。含广告,闭源,未注明许可证。',
    audience: '想要一款带现成提示词工具包的免费离线聊天与图像应用,并需要了解哪些内容有来源佐证、哪些只是开发者的说法、哪些无法核实的 Android 用户。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Offline Chat & Image 评测',
    targetKeywords: [
      'local ai offline chat and image 评测',
      'geetmark local ai android',
      '离线 AI 聊天 应用 android',
      'stable diffusion 离线 android 应用',
      '离线 AI 提示词工具包 应用',
      '带图像生成的本地大模型 android 应用',
      'local ai offline chat 对比 pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**GeetMark 的 Local AI: Offline Chat & Image 是一款免费 Android 应用,在设备上运行语言模型和 Stable Diffusion,并附带 15 个提示词工具包,无需账号或 API 密钥。** 它的 Google Play 页面声明不收集也不共享数据,但同时带有“包含广告”标签。源代码未公开,许可证未注明;Play 页面数据显示截至 2026 年 10 月 9 日的版本为 26.10.11。',
    quickAnswerTop: {
      zh: {
        question: 'Local AI: Offline Chat & Image 免费吗?能完全离线运行吗?',
        answer: '根据其 Google Play 页面,是的:免费,无需登录或 API 密钥,模型下载完成后,聊天和图像生成都在设备上运行。页面同时显示“包含广告”标签,而下载模型需要网络连接。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai) 免费获取;该应用未列出 iPhone 或桌面版本。',
          '可与 20 多个参数规模从 1B 到 22B 的语言模型聊天,也可用 Stable Diffusion 生成图像(文生图、图生图、局部重绘)。',
          '附加功能:15 个提示词工具包(“Labs”),如 Study、Code、Writing 和 Interview,另有 LoRA 支持和图像放大器。',
          '截至 2026 年 10 月 9 日核实:Google Play 下载量 5000+,2026 年 4 月 4 日发布,2026 年 9 月 30 日最近一次更新。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: 'Local AI: Offline Chat & Image 是什么?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '来源确认的功能',
        anchor: 'key-features',
      },
      {
        label: '硬件与速度',
        anchor: 'hardware-requirements',
      },
      {
        label: '隐私、广告与联网功能',
        anchor: 'privacy',
      },
      {
        label: '取舍:优点与局限',
        anchor: 'tradeoffs',
      },
      {
        label: '适合谁用',
        anchor: 'who-should-use',
      },
      {
        label: '无法核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image 是 GeetMark 推出的免费、靠广告支撑的闭源 Android 应用,可在手机上运行语言模型和 Stable Diffusion 图像生成,并整合了 15 个提示词工具包。',
          },
          {
            type: 'plain-terms',
            text: '从 Google Play 安装,下载一个适合手机的模型,无需账号即可聊天、写作、编程或生成图片;这些工具包是面向学习、面试、商品描述等任务的现成提示词模板。',
          },
        ],
        items: [
          '发布者:Google Play 上显示为 GeetMark,页面提供支持邮箱和隐私政策链接。',
          '价格与许可证:免费但含广告;未找到许可证文本,也未找到公开的源代码仓库。',
          '范围:20 多个聊天模型(1B 到 22B 参数)、支持 LoRA 和 .safetensors 的 Stable Diffusion、本地模型管理器、嵌入(embeddings)和图像放大器。',
          '硬件:页面建议 4 GB 以上内存、2 到 15 GB 存储空间,并建议使用骁龙 8 Gen 1 或更新的处理器以获得最佳速度,同时可回退到 CPU 和 GPU。',
          '截至 2026 年 10 月 9 日核实的信息:版本 26.10.11,下载量 5000+,需要 Android 8.0 或更高版本,适合所有年龄(USK)。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 9 日查阅的 Google Play 页面和开发者网站。各项能力均为开发者自述,PromptQuorum 未对该应用进行测试或基准评测。',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'Local AI: Offline Chat & Image 是什么?',
        content: [
          '**Local AI: Offline Chat & Image 是一款 Android 应用,在一次安装中集合了离线聊天机器人、Stable Diffusion 图像生成器和一组基于提示词的写作与编程工具。** 根据其 [Google Play 页面](https://play.google.com/store/apps/details?id=com.geetmark.localai),它无需登录或 API 密钥,所有处理都在设备上完成。',
          '有其他产品与它同名:该应用不是开源的 LocalAI 推理服务器;开发者网站 [Local AI Hub](https://localai.appsgm.com/) 是一个独立的模型与提示词目录,还介绍了自己的“Local AI Hub Android”下载。Play 页面并未链接该下载,因此本评测只涵盖 Google Play 上的应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**该应用通过 Google Play 在 Android 上分发;未列出 iPhone、Mac 或 Windows 版本。**',
        ],
        columns: ['平台', '获取渠道'],
        rows: [
          {
            '平台': 'Android 8.0+',
            '获取渠道': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            '平台': '官方网站',
            '获取渠道': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            '平台': '隐私政策',
            '获取渠道': '[Android 隐私政策](https://localai.appsgm.com/policy/android)',
          },
          {
            '平台': '源代码',
            '获取渠道': '未公开',
          },
        ],
        note: '本页是该应用在 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory) 中条目的配套资料。2026 年 10 月 9 日核实的版本:26.10.11,读取自 Play 页面的内嵌数据;Play 上的最近一次更新为 2026 年 9 月 30 日。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: ['**页面只概述了使用流程;PromptQuorum 没有执行过这些步骤。**'],
        numberedItems: [
          {
            title: '安装并检查可用存储空间',
            whyItMatters: '页面说明,模型根据所选不同占用 2 到 15 GB 存储空间,首次运行在缓存模型时可能较慢。',
          },
          {
            title: '下载模型',
            whyItMatters: '内置的模型管理器会在后台下载语言模型和图像模型;下载需要网络连接。',
          },
          {
            title: '开始聊天或打开工具包',
            whyItMatters: '开始自由聊天,或从 15 个 Labs 中选择一个(如 Study Lab 或 Code Lab),获得针对具体任务的提示词。',
          },
          {
            title: '生成图像',
            whyItMatters: '为 Stable Diffusion 的文生图、图生图或局部重绘设置步数、CFG 比例、随机种子和调度器。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: ['**以下各项均来自 Google Play 描述或开发者网站;均未经独立测试。**'],
        items: [
          '**聊天。** 20 多个参数规模从 1B 到 22B 的语言模型,可调节温度和 token 上限,并提供多语言的编程、推理和角色扮演分类。',
          '**提示词工具包。** 15 个“Labs”,涵盖学习、创意、电商、生活、娱乐、数据、演讲、面试、分析、组合工作流、写作、语言、职场、代码和内容任务。',
          '**图像。** Stable Diffusion 文生图、图生图和局部重绘,支持 LoRA 和 .safetensors 模型,可控制步数、CFG 比例、随机种子和调度器,并带有图像放大器。',
          '**加速。** 支持 CPU 和 GPU,在可用时还支持骁龙 NPU 加速。',
          '**管理。** 本地模型与文件管理器、嵌入支持、后台模型下载以及已保存的提示词模板。',
        ],
        note: '所查阅的来源未提及聊天模型背后的推理引擎,因此无法确认其对特定模型格式的兼容性。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '硬件与速度',
        content: [
          '**页面建议 4 GB 以上内存,并说明所需存储空间为 2 到 15 GB,取决于保留的模型。** 最佳性能针对骁龙 8 Gen 1 或更新的处理器;没有 NPU 时,应用回退到 CPU 和 GPU。',
          '页面还补充说,大模型需要更多内存,首次运行可能较慢。未找到速度数据、基准测试或每秒 token 数,因此在具体手机上的真实表现未知。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、广告与联网功能',
        content: [
          '**Google Play 的“数据安全”部分声明“未收集任何数据”和“未与第三方共享数据”,描述中称该应用“完全离线:无云端、无跟踪”。** 同一页面也带有“包含广告”标签。',
          '开发者的 [Android 隐私政策](https://localai.appsgm.com/policy/android) 是为一款名为“Local AI Hub Android”的产品撰写的,其中提到可选的崩溃报告和基本设备信息,并说明模型从 Hugging Face 和 Civitai 等来源下载。这些是开发者的声明,而非审计结果;由于源代码未公开,其中任何一项都无法对照代码核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有检查该应用的网络流量或广告行为。处理机密数据的用户应自行核实:在显示广告或下载模型时,应用会发送什么数据。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '取舍:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且无需账号',
            '实际使用中的含义': '无需注册、登录或 API 密钥即可安装使用。',
            '局限 / 注意事项': '页面带有“包含广告”标签。',
          },
          {
            '优点': '聊天和图像合二为一',
            '实际使用中的含义': '语言模型和 Stable Diffusion 在同一次安装中。',
            '局限 / 注意事项': '功能广度为开发者描述,质量未在此测试。',
          },
          {
            '优点': '15 个现成提示词工具包',
            '实际使用中的含义': '面向学习、代码、写作和面试的任务模板。',
            '局限 / 注意事项': '它们是提示词模板,不是独立的工具或智能体。',
          },
          {
            '优点': '模型规模范围广',
            '实际使用中的含义': '可选择 1B 到 22B 参数的模型。',
            '局限 / 注意事项': '大模型需要更多内存;未找到速度数据。',
          },
          {
            '优点': '隐私以声明为准',
            '实际使用中的含义': '数据安全部分称未收集或共享数据。',
            '局限 / 注意事项': '源代码未公开,该说法无法对照代码核实。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**想用一款免费应用完成离线聊天和图像生成的 Android 用户。** 描述称两者都在设备上运行。',
          '**更愿意用现成提示词而非自己编写的人。** 15 个 Labs 涵盖日常学习、写作和工作任务。',
          '**使用较新骁龙手机的用户。** 页面将骁龙 8 Gen 1 或更新的处理器列为性能最佳的硬件。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '无法核实的内容',
        items: [
          '**许可证与源代码。** 未找到许可证文本或公开仓库,因此无法对照代码核实其行为。开发者网站介绍了另一款“开源”Android 应用,其 GitHub 仓库返回 404,本文不将其视为该应用。',
          '**实际性能与质量。** PromptQuorum 没有运行该应用,因此未评估速度、耗电以及模型和图像质量。',
          '**引擎与模型清单。** 页面未说明推理引擎,也未列出所含的 20 多个模型,而且版本号只出现在页面内嵌数据中,不在可见文本里。',
          '**广告与购买。** Play 页面带有“包含广告”标签;广告的具体情况以及是否有付费选项均未得到确认。',
          '**不适合 iPhone 用户。** 未列出 iOS 版本。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '带自有模型库的开源设备端聊天客户端',
          },
          {
            '应用': '[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)',
            '平台': 'Android、iOS、Mac、Windows',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '支持视觉、语音和文档聊天的离线聊天',
          },
          {
            '应用': '[TokForge](/zh/power-local-llm/tokforge-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / 闭源',
            '主要区别': '角色扮演角色、图像、语音和速度排行榜',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答',
          },
        ],
        note: '竞品信息变化很快;请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '是谁开发的?',
            a: 'Google Play 将发布者列为 GeetMark,并链接了开发者网站和隐私政策;所查阅的来源中未找到公司背景信息。',
          },
          {
            q: '能离线使用吗?',
            a: '根据页面,模型下载完成后,聊天和图像生成在设备上运行。下载模型需要联网。',
          },
          {
            q: '包含哪些聊天模型?',
            a: '页面称有 20 多个参数规模从 1B 到 22B 的模型,但没有列出名称,因此无法确认确切清单。',
          },
          {
            q: '能生成图像吗?',
            a: '能,根据页面:Stable Diffusion 文生图、图生图和局部重绘,支持 LoRA 和 .safetensors,并带有放大器。',
          },
          {
            q: 'Labs 是什么?',
            a: '它们是 15 个基于提示词的工具包,例如用于摘要和记忆卡片的 Study Lab,以及用于生成和修复代码的 Code Lab。',
          },
          {
            q: '和 PocketPal AI 相比如何?',
            a: 'PocketPal AI 是适用于 iOS 和 Android 的免费 MIT 许可聊天客户端;而本应用是闭源且含广告,仅在 Android 上额外提供 Stable Diffusion 图像和提示词工具包。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Local AI: Offline Chat & Image 在一款免费 Android 应用中提供离线聊天、Stable Diffusion 图像生成和 15 个提示词工具包,其数据安全部分声明未收集数据。另一方面,应用含广告,源代码未公开且未注明许可证,模型清单和引擎未披露,安装量较小(5000+ 下载),并且这里没有任何实际测试。它适合想要一款免费、功能齐全的离线应用并接受这些条件的 Android 用户;想要可审计代码的读者可对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Local AI: Offline Chat & Image](https://play.google.com/store/apps/details?id=com.geetmark.localai) — 描述、数据安全部分、广告标签、下载量和日期,2026 年 10 月 9 日查阅。',
          '[localai.appsgm.com](https://localai.appsgm.com/) — 开发者网站、其 [Android 隐私政策](https://localai.appsgm.com/policy/android)以及应用和下载页面,2026 年 10 月 9 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 免费开源的设备端聊天客户端。',
          '[Off Grid AI 评测](/zh/power-local-llm/off-grid-ai-review) — 支持视觉、语音和文档的离线聊天。',
          '[TokForge 评测](/zh/power-local-llm/tokforge-review) — 带角色扮演和图像的 Android 离线聊天。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 免费、MIT 许可的离线聊天应用。',
          '[2026 年 Android 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 综述。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-geetmark-review-hero-ko.webp',
    title: 'Local AI: Offline Chat & Image 리뷰: Stable Diffusion과 프롬프트 툴킷을 갖춘 무료 Android 앱',
    seoTitle: 'Local AI: Offline Chat & Image 리뷰 (Android)',
    intro: 'Local AI: Offline Chat & Image는 [GeetMark](https://play.google.com/store/apps/details?id=com.geetmark.localai)가 Google Play에 게시한 무료 Android 앱으로, 언어 모델과 Stable Diffusion 이미지 생성을 휴대폰에서 실행하며 글쓰기·코딩·학습·비즈니스용 프롬프트 툴킷 15종을 내장합니다. 스토어 페이지에는 “광고 포함” 표시가 있고, 소스 코드는 공개되어 있지 않으며, 라이선스도 명시되어 있지 않습니다. 이 리뷰는 2026년 10월 9일에 확인한 Google Play 페이지와 개발자 웹사이트 [localai.appsgm.com](https://localai.appsgm.com/)을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다. 오픈소스 LocalAI 서버 프로젝트와는 무관합니다.',
    metaDescription: 'Local AI: Offline Chat & Image 리뷰: 오프라인 모델 20종 이상, Stable Diffusion 이미지, 프롬프트 툴킷 15종을 갖춘 무료 Android 앱. 광고, 개인정보, 한계.',
    twitterDescription: 'Local AI: Offline Chat & Image 리뷰: 오프라인 채팅과 Stable Diffusion 이미지, 프롬프트 툴킷 15종을 갖춘 무료 Android 앱. 광고 포함, 비공개 소스, 라이선스 미명시.',
    audience: '바로 쓸 수 있는 프롬프트 툴킷이 있는 무료 오프라인 채팅·이미지 앱을 찾으면서, 출처가 확인해 준 내용과 개발자의 주장일 뿐인 내용, 확인하지 못한 내용을 알고 싶은 Android 사용자를 위한 글입니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Offline Chat & Image 리뷰',
    targetKeywords: [
      'local ai offline chat and image 리뷰',
      'geetmark local ai android',
      '오프라인 AI 채팅 앱 android',
      'stable diffusion 오프라인 android 앱',
      '오프라인 AI 프롬프트 툴킷 앱',
      '이미지 생성 로컬 LLM android 앱',
      'local ai offline chat vs pocketpal',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LoRA', 'Hugging Face models'],
    current_hardware_mentioned: ['Android', 'Snapdragon 8 Gen 1', 'Snapdragon NPU'],
    leadAnswerBlock: '**GeetMark의 Local AI: Offline Chat & Image는 언어 모델과 Stable Diffusion을 기기에서 실행하고 프롬프트 툴킷 15종을 더한 무료 Android 앱으로, 계정도 API 키도 필요 없습니다.** Google Play 페이지는 데이터를 수집하거나 공유하지 않는다고 밝히지만 “광고 포함” 표시도 함께 있습니다. 소스 코드는 공개되지 않았고 라이선스도 명시되지 않았으며, Play 페이지 데이터에는 2026년 10월 9일 기준 버전이 26.10.11로 나와 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Local AI: Offline Chat & Image는 무료이고 오프라인으로 작동하나요?',
        answer: 'Google Play 페이지에 따르면 그렇습니다. 로그인이나 API 키 없이 무료이며, 모델을 내려받은 뒤에는 채팅과 이미지 생성이 기기에서 실행됩니다. 페이지에는 “광고 포함” 표시도 있고, 모델 다운로드에는 네트워크 연결이 필요합니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)에서 무료입니다. 이 앱의 iPhone 또는 데스크톱 버전은 목록에 없습니다.',
          '1B~22B 파라미터의 언어 모델 20종 이상과 채팅하거나 Stable Diffusion으로 이미지를 생성합니다(텍스트→이미지, 이미지→이미지, 인페인팅).',
          '추가 기능: Study, Code, Writing, Interview 등 프롬프트 툴킷(“Labs”) 15종, LoRA 지원, 이미지 업스케일러.',
          '2026년 10월 9일 확인: Google Play 다운로드 5천 회 이상, 2026년 4월 4일 출시, 2026년 9월 30일 마지막 업데이트.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '간단 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Local AI: Offline Chat & Image란?',
        anchor: 'what-is-local-ai-geetmark',
      },
      {
        label: '받는 방법',
        anchor: 'get-it',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '하드웨어와 속도',
        anchor: 'hardware-requirements',
      },
      {
        label: '개인정보, 광고, 온라인 기능',
        anchor: 'privacy',
      },
      {
        label: '장단점: 이점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: '누구에게 맞을까',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 앱과 대안',
        anchor: 'vs-alternatives',
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
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI: Offline Chat & Image는 GeetMark의 무료·광고 기반·비공개 소스 Android 앱으로, 언어 모델과 Stable Diffusion 이미지 생성을 휴대폰에서 실행하며 프롬프트 툴킷 15종을 묶어 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치하고 휴대폰에 맞는 모델을 내려받으면 계정 없이 채팅, 글쓰기, 코딩, 이미지 생성을 할 수 있습니다. 툴킷은 학습, 면접 준비, 상품 설명 작성 같은 작업을 위한 기성 프롬프트 템플릿입니다.',
          },
        ],
        items: [
          '게시자: Google Play에 GeetMark로 표시되며, 페이지에 지원 이메일과 개인정보 처리방침 링크가 있습니다.',
          '가격과 라이선스: 광고가 있는 무료 앱이며, 라이선스 문서도 공개 소스 저장소도 찾지 못했습니다.',
          '범위: 채팅 모델 20종 이상(1B~22B 파라미터), LoRA와 .safetensors를 지원하는 Stable Diffusion, 로컬 모델 관리자, 임베딩, 업스케일러.',
          '하드웨어: 페이지는 RAM 4GB 이상, 저장공간 2~15GB, 최고 속도를 위한 Snapdragon 8 Gen 1 이상을 권장하며 CPU와 GPU로의 대체 실행도 지원합니다.',
          '2026년 10월 9일 확인 정보: 버전 26.10.11, 다운로드 5천 회 이상, Android 8.0 이상, 전체 이용가(USK).',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 9일에 확인한 Google Play 페이지와 개발자 웹사이트를 바탕으로 합니다. 기능은 개발자 자신의 설명이며, PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-geetmark',
        title: 'Local AI: Offline Chat & Image란?',
        content: [
          '**Local AI: Offline Chat & Image는 오프라인 챗봇, Stable Diffusion 이미지 생성기, 프롬프트 기반 글쓰기·코딩 도구 모음을 한 번의 설치로 제공하는 Android 앱입니다.** [Google Play 페이지](https://play.google.com/store/apps/details?id=com.geetmark.localai)에 따르면 로그인이나 API 키가 필요 없고 모든 처리를 기기에서 합니다.',
          '같은 이름을 쓰는 다른 제품이 있습니다. 이 앱은 오픈소스 LocalAI 추론 서버가 아니며, 개발자 웹사이트 [Local AI Hub](https://localai.appsgm.com/)는 모델과 프롬프트를 모아 둔 별도의 디렉터리로 자체 “Local AI Hub Android” 다운로드도 안내합니다. 그 다운로드는 Play 페이지에서 링크되어 있지 않으므로, 이 리뷰는 Google Play 앱만 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**이 앱은 Android용으로 Google Play를 통해 배포됩니다. iPhone, Mac, Windows 버전은 목록에 없습니다.**',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android 8.0 이상',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.geetmark.localai)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[localai.appsgm.com](https://localai.appsgm.com/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Android 개인정보 처리방침](https://localai.appsgm.com/policy/android)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '공개되지 않음',
          },
        ],
        note: '이 페이지는 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)에 있는 이 앱 항목의 보조 자료입니다. 2026년 10월 9일에 확인한 버전: 26.10.11(Play 페이지에 내장된 데이터에서 확인). Play에서의 마지막 업데이트는 2026년 9월 30일입니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**페이지는 흐름을 개략적으로만 설명하며, PromptQuorum은 이 단계들을 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치하고 남은 저장공간 확인하기',
            whyItMatters: '페이지에 따르면 모델은 선택에 따라 2~15GB의 저장공간을 차지하고, 첫 실행은 모델을 캐시하는 동안 느릴 수 있습니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '내장 모델 관리자가 언어 모델과 이미지 모델을 백그라운드에서 내려받습니다. 다운로드에는 네트워크 연결이 필요합니다.',
          },
          {
            title: '채팅하거나 툴킷 열기',
            whyItMatters: '자유롭게 채팅을 시작하거나, Study Lab이나 Code Lab 같은 15개 Labs 중 하나를 골라 작업에 맞는 프롬프트를 사용합니다.',
          },
          {
            title: '이미지 생성하기',
            whyItMatters: 'Stable Diffusion의 텍스트→이미지, 이미지→이미지, 인페인팅에서 스텝 수, CFG 스케일, 시드, 스케줄러를 설정합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 개발자 웹사이트에서 가져온 것이며, 독립적으로 테스트된 것은 없습니다.**',
        ],
        items: [
          '**채팅.** 1B~22B 파라미터의 언어 모델 20종 이상, 조절 가능한 온도와 토큰 한도, 여러 언어의 코딩·추론·롤플레이 카테고리.',
          '**프롬프트 툴킷.** 학습, 아이디어, 이커머스, 라이프스타일, 재미, 데이터, 스피치, 면접, 분석, 결합 워크플로, 글쓰기, 언어, 직무, 코드, 콘텐츠 작업용 “Labs” 15종.',
          '**이미지.** Stable Diffusion 텍스트→이미지, 이미지→이미지, 인페인팅, LoRA와 .safetensors 모델, 스텝 수·CFG 스케일·시드·스케줄러 제어, 이미지 업스케일러.',
          '**가속.** CPU와 GPU, 그리고 사용 가능한 경우 Snapdragon NPU 가속.',
          '**관리.** 로컬 모델·파일 관리자, 임베딩 지원, 백그라운드 모델 다운로드, 저장된 프롬프트 템플릿.',
        ],
        note: '채팅 모델 뒤의 추론 엔진은 확인한 출처에 언급되지 않아, 특정 모델 형식과의 호환성은 확인하지 못했습니다.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '하드웨어와 속도',
        content: [
          '**페이지는 RAM 4GB 이상을 권장하며, 보관하는 모델에 따라 저장공간이 2~15GB 필요하다고 밝힙니다.** 최고 성능은 Snapdragon 8 Gen 1 이상에서 낸다고 하며, NPU가 없으면 CPU와 GPU로 실행합니다.',
          '페이지는 큰 모델일수록 RAM이 더 필요하고 첫 실행이 느릴 수 있다고 덧붙입니다. 속도 수치, 벤치마크, 초당 토큰 수는 찾지 못해 특정 휴대폰에서의 실제 성능은 알 수 없습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 광고, 온라인 기능',
        content: [
          '**Google Play의 “데이터 보안” 항목은 “수집된 데이터 없음”과 “서드 파티와 공유되는 데이터 없음”을 선언하고, 설명은 이 앱을 “완전한 오프라인: 클라우드 없음, 추적 없음”이라고 소개합니다.** 같은 페이지에 “광고 포함” 표시도 있습니다.',
          '개발자의 [Android 개인정보 처리방침](https://localai.appsgm.com/policy/android)은 “Local AI Hub Android”라는 제품을 기준으로 작성되어 있으며, 선택적 비정상 종료 보고서와 기본 기기 정보를 언급하고 모델을 Hugging Face와 Civitai 같은 출처에서 내려받는다고 설명합니다. 이는 개발자의 선언일 뿐 감사 결과가 아니며, 소스 코드가 공개되지 않아 어느 것도 코드로 확인할 수 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱의 네트워크 트래픽이나 광고 동작을 점검하지 않았습니다. 기밀 데이터를 다루는 사람은 광고가 표시되는 동안이나 모델을 내려받는 동안 앱이 무엇을 전송하는지 직접 확인해야 합니다.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '이점': '무료, 계정 불필요',
            '실제 사용에서의 의미': '가입, 로그인, API 키 없이 설치해 사용할 수 있습니다.',
            '한계 / 주의점': '페이지에 “광고 포함” 표시가 있습니다.',
          },
          {
            '이점': '한 앱에서 채팅과 이미지',
            '실제 사용에서의 의미': '언어 모델과 Stable Diffusion이 한 번의 설치에 들어 있습니다.',
            '한계 / 주의점': '폭넓은 기능은 개발자의 설명이며, 품질은 여기서 테스트하지 않았습니다.',
          },
          {
            '이점': '바로 쓰는 프롬프트 툴킷 15종',
            '실제 사용에서의 의미': '학습, 코드, 글쓰기, 면접용 작업 템플릿.',
            '한계 / 주의점': '프롬프트 템플릿일 뿐, 별도의 도구나 에이전트가 아닙니다.',
          },
          {
            '이점': '넓은 모델 크기 범위',
            '실제 사용에서의 의미': '1B~22B 파라미터 모델 중에서 고를 수 있습니다.',
            '한계 / 주의점': '큰 모델은 RAM이 더 필요하며 속도 수치는 찾지 못했습니다.',
          },
          {
            '이점': '선언 기준의 개인정보 보호',
            '실제 사용에서의 의미': '데이터 보안 항목에 수집·공유된 데이터가 없다고 나와 있습니다.',
            '한계 / 주의점': '소스가 공개되지 않아 주장을 코드로 확인할 수 없습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '누구에게 맞을까',
        items: [
          '**오프라인 채팅과 이미지 생성을 하나의 무료 앱으로 쓰고 싶은 Android 사용자.** 설명에 따르면 둘 다 기기에서 실행됩니다.',
          '**직접 프롬프트를 쓰기보다 준비된 프롬프트를 선호하는 사람.** 15개 Labs가 일상적인 학습, 글쓰기, 업무 작업을 다룹니다.',
          '**최신 Snapdragon 휴대폰 사용자.** 페이지는 Snapdragon 8 Gen 1 이상을 가장 성능이 좋은 하드웨어로 꼽습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**라이선스와 소스 코드.** 라이선스 문서도 공개 저장소도 찾지 못해 동작을 코드로 확인할 수 없습니다. 개발자 웹사이트는 별도의 “오픈소스” Android 앱을 안내하지만 해당 GitHub 저장소는 404를 반환했으며, 이 앱으로 간주하지 않습니다.',
          '**실제 성능과 품질.** PromptQuorum이 앱을 실행하지 않았으므로 속도, 배터리 사용량, 모델과 이미지 품질은 평가하지 않았습니다.',
          '**엔진과 모델 목록.** 페이지는 추론 엔진을 밝히지 않고 포함된 20종 이상의 모델도 나열하지 않으며, 버전 번호는 페이지의 내장 데이터에만 있고 보이는 텍스트에는 없습니다.',
          '**광고와 결제.** Play 페이지에 “광고 포함” 표시가 있지만 어떤 광고인지, 유료 옵션이 있는지는 확인하지 못했습니다.',
          '**iPhone 사용자에게는 맞지 않음.** iOS 버전은 목록에 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이점'],
        rows: [
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '자체 모델 라이브러리를 갖춘 오픈소스 온디바이스 채팅 클라이언트',
          },
          {
            '앱': '[Off Grid AI](/ko/power-local-llm/off-grid-ai-review)',
            '플랫폼': 'Android, iOS, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / MIT',
            '주요 차이점': '비전, 음성, 문서 채팅을 지원하는 오프라인 채팅',
          },
          {
            '앱': '[TokForge](/ko/power-local-llm/tokforge-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / 비공개 소스',
            '주요 차이점': '롤플레이 캐릭터, 이미지, 음성, 속도 리더보드',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '온디바이스 문서 Q&A를 지원하는 오픈소스 오프라인 채팅',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀝니다. 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '누가 만들었나요?',
            a: 'Google Play는 게시자를 GeetMark로 표시하고 개발자 웹사이트와 개인정보 처리방침을 링크합니다. 확인한 출처에서는 회사 배경 정보를 찾지 못했습니다.',
          },
          {
            q: '오프라인에서 작동하나요?',
            a: '페이지에 따르면 모델을 내려받은 뒤에는 채팅과 이미지 생성이 기기에서 실행됩니다. 모델을 내려받으려면 네트워크가 필요합니다.',
          },
          {
            q: '어떤 채팅 모델이 포함되어 있나요?',
            a: '페이지는 1B~22B 파라미터의 모델 20종 이상이라고만 하고 이름은 밝히지 않아 정확한 목록은 확인하지 못했습니다.',
          },
          {
            q: '이미지를 생성할 수 있나요?',
            a: '네, 페이지에 따르면 Stable Diffusion 텍스트→이미지, 이미지→이미지, 인페인팅을 지원하며 LoRA와 .safetensors 지원과 업스케일러가 있습니다.',
          },
          {
            q: 'Labs는 무엇인가요?',
            a: '프롬프트 기반 툴킷 15종으로, 예를 들어 요약과 플래시카드를 만드는 Study Lab, 코드를 생성하고 고치는 Code Lab이 있습니다.',
          },
          {
            q: 'PocketPal AI와 비교하면 어떤가요?',
            a: 'PocketPal AI는 iOS와 Android용 무료 MIT 라이선스 채팅 클라이언트이고, 이 앱은 비공개 소스에 광고가 있으며 Android에서만 Stable Diffusion 이미지와 프롬프트 툴킷을 더합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Local AI: Offline Chat & Image는 오프라인 채팅, Stable Diffusion 이미지 생성, 프롬프트 툴킷 15종을 하나의 무료 Android 앱에 담았고, 데이터 보안 항목은 수집 데이터가 없다고 밝힙니다. 반면 광고가 있고, 소스 코드는 공개되지 않았으며 라이선스도 명시되지 않았고, 모델 목록과 엔진이 공개되지 않았으며, 설치 규모는 다운로드 5천 회 이상으로 작고, 직접 테스트한 내용은 없습니다. 이런 조건을 받아들이면서 모든 것을 해 주는 무료 오프라인 앱을 원하는 Android 사용자에게 맞고, 검증 가능한 코드를 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)와 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Local AI: Offline Chat & Image](https://play.google.com/store/apps/details?id=com.geetmark.localai) — 설명, 데이터 보안 항목, 광고 표시, 다운로드 수와 날짜. 2026년 10월 9일 확인.',
          '[localai.appsgm.com](https://localai.appsgm.com/) — 개발자 웹사이트와 [Android 개인정보 처리방침](https://localai.appsgm.com/policy/android), 앱 및 다운로드 페이지. 2026년 10월 9일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[Off Grid AI 리뷰](/ko/power-local-llm/off-grid-ai-review) — 비전, 음성, 문서를 지원하는 오프라인 채팅.',
          '[TokForge 리뷰](/ko/power-local-llm/tokforge-review) — 롤플레이와 이미지를 갖춘 Android 오프라인 채팅.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[2026년 Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 개요.',
        ],
      },
    },
  },
}
