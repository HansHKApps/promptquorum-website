// Ensu Review: Free On-Device Chat App from Ente Labs
// Slug: ensu-review
// Companion to: pocketpal-ai-review, google-ai-edge-gallery-review, locally-ai-review, jan-review, local-llm-chat-assistants-compared
// Sources (all read 2026-10-24, no hands-on testing): ente.com/blog/ensu (announcement dated 2026-03-02), ente.com/ensu (v0.1.22 downloads),
// GitHub Releases ente-io/ente tag ensu-v0.1.22 (2026-10-23) and the release notes of 0.1.15-0.1.22, the model catalog and RAM-based default
// selection in rust/crates/ensu/src/config.rs on main, the App Store listing id6758197006 (iTunes lookup API), the Google Play listing
// io.ente.ensu and the Ente privacy policy (last updated 2026-10-16). The request came from the site owner, not from Ente: no maker comment exists.
// Last upstream update 2026-10-23 (v0.1.22) => no stale warning. Models are named only in the source code, not on ente.com.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-en.webp',
    title: 'Ensu Review: Free On-Device Chat App from Ente Labs',
    seoTitle: 'Ensu Review: Free On-Device AI Chat App by Ente Labs',
    intro:
      'Ensu is a free, open-source chat app from Ente Labs that runs language models on your own phone or computer. It is available for iOS, Android, macOS, Windows and Linux, plus an experimental web version, and its code is on GitHub. This review is based on the maker\'s blog post and website, the store listings, the GitHub release notes and the source code, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Ensu review: free, open-source chat app from Ente Labs that runs models on iPhone, Android, Mac, Windows and Linux. Models, privacy and open questions.',
    twitterDescription:
      'Ensu review: a free, open-source chat app from Ente Labs that runs downloaded models on your phone or computer. What the sources confirm and what they do not.',
    audience:
      'People who want a free chat app that runs on their own devices and need to know which models it uses, what it costs and what the sources confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ensu review',
    targetKeywords: [
      'ensu review',
      'ensu ente',
      'ente labs ensu app',
      'offline llm app',
      'on-device ai chat app',
      'open source local llm app',
      'ensu local llm ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu (version 0.1.22, released on 23 October 2026) is a free chat app from Ente Labs that runs downloaded language models on the device, with no account.** It is open source, and the maker itself says it is not yet as capable as ChatGPT or Claude Code. Every statement here comes from public sources, not from our own tests.',
    quickAnswerTop: {
      en: {
        question: 'Does Ensu really run offline, and which model does it use?',
        answer:
          'Per the maker, yes: chats are processed on the device, so the app works without internet once a model has been downloaded. The announcement names no model; the open-source code lists seven chat models from the LFM 2.5, Qwen 3.5 and Gemma 4 families and picks a default by the device\'s memory.',
        bullets: [
          'Images can be attached to chats.',
          'Voice input is transcribed on the phone, on iOS and Android.',
          'Ensu Packs add downloadable knowledge sources; on desktop, chats can use your local markdown notes.',
          'Encrypted sync and backup through an Ente account are planned but not enabled.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Ensu?', anchor: 'what-is-ensu' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Models and Requirements', anchor: 'requirements' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
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
            text: 'Ensu is an open-source chat app from Ente Labs that downloads a small language model and answers on your phone or computer instead of in the cloud.',
          },
          {
            type: 'plain-terms',
            text: 'You install the app, let it download a model once, and then chat, attach images or dictate by voice without an account.',
          },
        ],
        items: [
          'Maintenance: the releases page shows regular releases from April to October 2026, the latest on 23 October 2026, so no stale-project warning applies.',
          'Models: downloaded inside the app; the source code lists seven, among them LFM 2.5, Qwen 3.5 and Gemma 4.',
          'Cost: free with no account; the maker has not announced any pricing.',
          'Platforms: iOS, Android, macOS, Windows and Linux, plus an experimental web version.',
          'Openness: source code on GitHub in a repository licensed AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on public sources (the maker\'s blog and site, the store listings, GitHub release notes and the source code), checked on 24 October 2026. PromptQuorum has not installed or benchmarked Ensu, so answer quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'What Is Ensu?',
        content: [
          '**Ensu is a chat app from Ente Labs that the maker describes as "a chatgpt-like app that runs completely on your device with full privacy and zero cost".** The announcement is dated 2 March 2026, the App Store lists the seller as Ente Technologies, Inc., and the first App Store release was on 27 February 2026.',
          'According to the announcement, the core logic is written in Rust, the mobile apps are native and the desktop apps use Tauri; the source code runs the models with llama.cpp. The App Store title is "Ensu - Ente\'s Local LLM".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Ensu has an installer or store listing on every major system: App Store, Google Play and GitHub Releases downloads for macOS, Windows and Linux.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'iPhone / iPad', 'How to get it': '[Ensu on the App Store](https://apps.apple.com/app/id6758197006), free' },
          { 'Option': 'Android', 'How to get it': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) or the APK on [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'macOS', 'How to get it': 'Universal .dmg on [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Windows', 'How to get it': 'x64 setup .exe on [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Linux', 'How to get it': 'AppImage, .deb (amd64) or .rpm (x86_64) on [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Website', 'How to get it': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'Option': 'Privacy policy', 'How to get it': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'Option': 'Source code', 'How to get it': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: 'Version reviewed: 0.1.22, released on 23 October 2026 on GitHub and the App Store; the iOS app is 61.6 MB before any model download. The maker labels the web version experimental. The Google Play page showed an update date of 7 October 2026, earlier than the 0.1.22 release; the APK on GitHub carries 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Models and Requirements',
        content: [
          '**Ente does not publish a RAM requirement or a model list on its website; the models and default choices below come from the open-source code and the release notes.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Models', 'What the sources say': 'Downloaded inside the app. The code lists seven: LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B, 2B and 4B, and Gemma 4 E2B and E4B' },
          { 'Item': 'Download size', 'What the sources say': 'Main file from about 0.2 GB (LFM 2.5 350M) to about 5.0 GB (Gemma 4 E4B); vision models add an image file of about 0.2 to 1.0 GB' },
          { 'Item': 'Default on phones', 'What the sources say': 'By device memory: LFM 2.5 350M up to 4 GB, LFM 2.5 VL 1.6B above 4 GB up to 8 GB, Gemma 4 E2B above 8 GB; chat is disabled below 4 GB' },
          { 'Item': 'Default on desktop', 'What the sources say': 'Gemma 4 E4B with 16 GB of memory or more, otherwise LFM 2.5 VL 1.6B; the app offers a few other models to switch to' },
          { 'Item': 'Operating systems', 'What the sources say': 'iOS 16.0 or later per the App Store; Windows x64 and Linux amd64 / x86_64 packages; no minimum is stated for Android or macOS' },
          { 'Item': 'Internet', 'What the sources say': 'Needed to download models, packs and desktop updates; chatting afterwards works offline per the maker' },
        ],
        note: 'The model policy was read from the main branch of the open-source code on 24 October 2026 and can change with any release; the phone limits come from the code and the 0.1.17 release notes.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s announcement, the release notes or the source code; none has been independently tested.**',
        ],
        items: [
          '**Local chat.** Conversations run on the device; the maker lists no web search and says the app is "not as powerful as ChatGPT or Claude Code".',
          '**Image attachments.** Images can be attached to chats; phones resize them to the model\'s limits (0.1.16) and desktop accepts dragged-in images (0.1.17).',
          '**Voice dictation.** On iOS and Android, speech for the chat box is transcribed locally with a separate downloadable speech model (0.1.16).',
          '**Ensu Packs.** Optional knowledge packs for more accurate answers, added on mobile in 0.1.18 and on desktop in 0.1.20.',
          '**Your Notes on desktop.** Chat with local markdown notes (0.1.20), with checks for changed or unavailable sources in follow-up questions (0.1.21).',
        ],
        note: 'The release notes also list GPU-accelerated replies on Linux through Vulkan (0.1.18), automatic updates on desktop (0.1.15) and chat renaming on desktop (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The maker says processing happens on the device and that Ensu offers "full privacy"; the App Store listing adds that it needs no account and has no tracking or usage limits.** The announcement says end-to-end encrypted sync and backup through an Ente account, with self-hosting, are planned but not enabled in this release.',
          'The code fetches models from Hugging Face repositories published by Ente and the speech model from models.ente.com, and desktop apps check for updates. [Ente\'s privacy policy](https://ente.com/privacy), last updated on 16 October 2026, does not mention Ensu; it says Ente collects no analytics about how app features are used and lists anonymized crash reports and Hugging Face for model hosting.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements and what the public code shows, not audit results. PromptQuorum has not inspected network traffic or stored data; because the code is public, others can check the claims.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Privacy-minded users** who want a chat app without an account whose code anyone can read.',
          '**People with several devices** who want the same app on iPhone, Android, Mac, Windows and Linux.',
          '**Tinkerers on modest hardware** who accept small models for simple questions and chats over their own notes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Answer quality and speed.** PromptQuorum did not run the models, so quality, speed and battery use on any device are not assessed.',
          '**Model terms.** The licences of the downloaded models and of the converted files Ente hosts were not reviewed; this is not legal advice.',
          '**Sync and backup.** Not enabled in this release, so chats stay on the device where they were made until the planned sync ships.',
          '**Hardware needs.** No RAM requirement is published; the memory thresholds above come from the source code.',
          '**Stability.** The version is 0.1.22, the maker calls this a first release without pricing or stability commitments, and the web version is labelled experimental.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source on-device chat for phones; no desktop build' },
          { 'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'Google\'s on-device app; no desktop build' },
          { 'App': '[Locally AI](/power-local-llm/locally-ai-review)', 'Platforms': 'iOS, macOS', 'Price / license': 'Free / closed source', 'Key difference': 'Runs open models through MLX on Apple devices; no Android or Windows' },
          { 'App': '[Jan](/power-local-llm/jan-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / Apache 2.0 (variant)', 'Key difference': 'Open-source offline desktop chat; no phone app listed' },
        ],
        note: 'Compared from each app\'s PromptQuorum directory entry; confirm current platforms, price and licence on each app\'s own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Ensu free, and will it stay free?',
            a: 'Ensu is free to use and the announcement calls it "zero cost", but the maker says it has not set pricing yet, so the sources cannot rule out later changes.',
          },
          {
            q: 'Can I bring my own models?',
            a: 'The sources do not say. The app downloads the models in its catalog, and none of the sources checked mention importing your own model files.',
          },
          {
            q: 'Can I continue a chat on another device?',
            a: 'Not yet. Sync is not enabled in this release; the maker plans optional end-to-end encrypted sync and backup through an Ente account and says existing local chats will be included once it arrives.',
          },
          {
            q: 'Why does the iOS link on the Ensu page say "ente-locker"?',
            a: 'The link on ente.com/ensu points to App Store id 6758197006, whose URL slug reads "ente-locker" while the listing itself is titled "Ensu - Ente\'s Local LLM". This review links the listing by its id.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ensu is a free, open-source way to run small language models on a phone or a computer without an account, from a maker that ships regular releases. Against that, it is a 0.1.x release with small models, sync and backup are not available yet, and none of its privacy, speed or quality claims could be tested here. It suits people who want a simple local chat app across many devices and are comfortable with a young project; anyone who needs answers at the level of large cloud models or chat history across devices should wait for the planned features or choose another tool.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ensu announcement](https://ente.com/blog/ensu/) — product description, platforms, limitations and roadmap, dated 2 March 2026.',
          '[Ensu download page](https://ente.com/ensu) — version 0.1.22 and the per-platform downloads, checked 24 October 2026.',
          '[Ensu 0.1.22 on GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — release date, assets and the release notes of earlier versions.',
          '[Model catalog in the source code](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — models, file sizes and default choice by device memory, main branch on 24 October 2026.',
          '[Ensu on the App Store](https://apps.apple.com/app/id6758197006) and [on Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — store descriptions, iOS requirements and version data.',
          '[Ente privacy policy](https://ente.com/privacy) — data collection and third parties, last updated 16 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — an open-source on-device chat app for iOS and Android.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s on-device model app.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — on-device chat for iPhone, iPad and Mac.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source offline chat client for desktop.',
          '[Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ensu Review: Free On-Device Chat App from Ente Labs',
      description:
        'Ensu review: a free, open-source chat app from Ente Labs that runs language models on iPhone, Android, Mac, Windows and Linux. Models, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/ensu-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a free on-device AI chat app for phone and desktop' },
      about: [
        { '@type': 'Thing', name: 'Ensu' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM chat app' },
        { '@type': 'Thing', name: 'Ente Labs' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/ensu-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ensu Review', item: 'https://www.promptquorum.com/power-local-llm/ensu-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-de.webp',
    title: 'Ensu-Rezension: Kostenlose KI-Chat-App von Ente Labs für das Gerät',
    seoTitle: 'Ensu-Rezension: Kostenlose KI-Chat-App von Ente Labs',
    intro:
      'Ensu ist eine kostenlose Open-Source-Chat-App von Ente Labs, die Sprachmodelle direkt auf Ihrem Smartphone oder Computer ausführt. Sie ist für iOS, Android, macOS, Windows und Linux erhältlich, dazu gibt es eine experimentelle Web-Version, und der Code liegt auf GitHub. Diese Rezension stützt sich auf den Blogbeitrag und die Website des Herstellers, die Store-Einträge, die GitHub-Release-Notes und den Quellcode, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Ensu-Rezension: kostenlose Open-Source-Chat-App von Ente Labs für iPhone, Android, Mac, Windows und Linux. Modelle, Datenschutz, offene Fragen.',
    twitterDescription:
      'Ensu-Rezension: kostenlose Open-Source-Chat-App von Ente Labs, die heruntergeladene Modelle auf Smartphone oder Computer ausführt. Was die Quellen bestätigen und was nicht.',
    audience:
      'Menschen, die eine kostenlose Chat-App auf den eigenen Geräten nutzen möchten und wissen müssen, welche Modelle sie verwendet, was sie kostet und was die Quellen bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ensu Rezension',
    targetKeywords: [
      'ensu rezension',
      'ensu ente',
      'ente labs ensu app',
      'offline llm app',
      'ki chat app auf dem gerät',
      'open source lokale llm app',
      'ensu lokales llm ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu (Version 0.1.22, veröffentlicht am 23. Oktober 2026) ist eine kostenlose Chat-App von Ente Labs, die heruntergeladene Sprachmodelle ohne Konto direkt auf dem Gerät ausführt.** Sie ist quelloffen, und der Hersteller selbst sagt, sie sei noch nicht so leistungsfähig wie ChatGPT oder Claude Code. Jede Aussage hier stammt aus öffentlichen Quellen, nicht aus eigenen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Läuft Ensu wirklich offline, und welches Modell nutzt die App?',
        answer:
          'Laut Hersteller ja: Chats werden auf dem Gerät verarbeitet, die App funktioniert also ohne Internet, sobald ein Modell geladen ist. Die Ankündigung nennt kein Modell; der Open-Source-Code listet sieben Chat-Modelle aus den Familien LFM 2.5, Qwen 3.5 und Gemma 4 und wählt je nach Gerätespeicher ein Standardmodell.',
        bullets: [
          'An Chats lassen sich Bilder anhängen.',
          'Spracheingaben werden auf dem Telefon transkribiert, unter iOS und Android.',
          'Ensu Packs ergänzen ladbare Wissensquellen; am Desktop können Chats Ihre lokalen Markdown-Notizen nutzen.',
          'Verschlüsselte Synchronisierung und Sicherung über ein Ente-Konto sind geplant, aber noch nicht aktiv.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Ensu?', anchor: 'what-is-ensu' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Modelle und Anforderungen', anchor: 'requirements' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu ist eine quelloffene Chat-App von Ente Labs, die ein kleines Sprachmodell herunterlädt und auf Ihrem Smartphone oder Computer statt in der Cloud antwortet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, lassen einmal ein Modell laden und chatten dann ohne Konto, hängen Bilder an oder diktieren per Sprache.',
          },
        ],
        items: [
          'Pflege: Die Release-Seite zeigt regelmäßige Veröffentlichungen von April bis Oktober 2026, die jüngste am 23. Oktober 2026; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Modelle: werden in der App heruntergeladen; der Quellcode listet sieben, darunter LFM 2.5, Qwen 3.5 und Gemma 4.',
          'Kosten: kostenlos und ohne Konto; der Hersteller hat keine Preise angekündigt.',
          'Plattformen: iOS, Android, macOS, Windows und Linux, dazu eine experimentelle Web-Version.',
          'Offenheit: Quellcode auf GitHub in einem Repository unter AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf öffentliche Quellen (Blog und Website des Herstellers, Store-Einträge, GitHub-Release-Notes und Quellcode), geprüft am 24. Oktober 2026. PromptQuorum hat Ensu weder installiert noch gemessen; Antwortqualität und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'Was ist Ensu?',
        content: [
          '**Ensu ist eine Chat-App von Ente Labs, die der Hersteller als „a chatgpt-like app that runs completely on your device with full privacy and zero cost“ beschreibt, also als ChatGPT-ähnliche App, die vollständig auf dem Gerät läuft.** Die Ankündigung stammt vom 2. März 2026, der App Store nennt als Anbieter Ente Technologies, Inc., und die erste App-Store-Version erschien am 27. Februar 2026.',
          'Laut Ankündigung ist die Kernlogik in Rust geschrieben, die mobilen Apps sind nativ und die Desktop-Apps nutzen Tauri; der Quellcode führt die Modelle mit llama.cpp aus. Der Titel im App Store lautet „Ensu - Ente\'s Local LLM“.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Für jedes gängige System gibt es einen Installer oder Store-Eintrag: App Store, Google Play sowie GitHub-Releases-Downloads für macOS, Windows und Linux.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'iPhone / iPad', 'Bezug': '[Ensu im App Store](https://apps.apple.com/app/id6758197006), kostenlos' },
          { 'Option': 'Android', 'Bezug': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) oder die APK auf [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'macOS', 'Bezug': 'Universelle .dmg auf [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Windows', 'Bezug': 'x64-Setup-.exe auf [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Linux', 'Bezug': 'AppImage, .deb (amd64) oder .rpm (x86_64) auf [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Website', 'Bezug': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: 'Geprüfte Version: 0.1.22, am 23. Oktober 2026 auf GitHub und im App Store veröffentlicht; die iOS-App ist vor jedem Modell-Download 61,6 MB groß. Der Hersteller bezeichnet die Web-Version als experimentell. Die Google-Play-Seite zeigte als Aktualisierungsdatum den 7. Oktober 2026, also vor dem Release 0.1.22; die APK auf GitHub trägt die Version 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Modelle und Anforderungen',
        content: [
          '**Ente veröffentlicht auf seiner Website weder eine RAM-Anforderung noch eine Modellliste; die Modelle und Standardwahlen unten stammen aus dem Open-Source-Code und den Release-Notes.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Modelle', 'Angaben der Quellen': 'Werden in der App geladen. Der Code listet sieben: LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B, 2B und 4B sowie Gemma 4 E2B und E4B' },
          { 'Punkt': 'Downloadgröße', 'Angaben der Quellen': 'Hauptdatei von etwa 0,2 GB (LFM 2.5 350M) bis etwa 5,0 GB (Gemma 4 E4B); Vision-Modelle brauchen zusätzlich eine Bilddatei von etwa 0,2 bis 1,0 GB' },
          { 'Punkt': 'Standard am Telefon', 'Angaben der Quellen': 'Je nach Gerätespeicher: LFM 2.5 350M bis 4 GB, LFM 2.5 VL 1.6B über 4 bis 8 GB, Gemma 4 E2B über 8 GB; unter 4 GB ist der Chat deaktiviert' },
          { 'Punkt': 'Standard am Desktop', 'Angaben der Quellen': 'Gemma 4 E4B ab 16 GB Speicher, sonst LFM 2.5 VL 1.6B; die App bietet einige weitere Modelle zur Auswahl' },
          { 'Punkt': 'Betriebssysteme', 'Angaben der Quellen': 'Laut App Store iOS 16.0 oder neuer; Pakete für Windows x64 und Linux amd64 / x86_64; für Android und macOS ist kein Minimum angegeben' },
          { 'Punkt': 'Internet', 'Angaben der Quellen': 'Nötig für Modelle, Packs und Desktop-Updates; danach funktioniert der Chat laut Hersteller offline' },
        ],
        note: 'Die Modellregeln wurden am 24. Oktober 2026 aus dem Hauptzweig des Open-Source-Codes gelesen und können sich mit jedem Release ändern; die Grenzen für Telefone stammen aus dem Code und den Release-Notes zu 0.1.17.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Ankündigung des Herstellers, den Release-Notes oder dem Quellcode; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Lokaler Chat.** Gespräche laufen auf dem Gerät; der Hersteller nennt keine Websuche und sagt, die App sei „not as powerful as ChatGPT or Claude Code“.',
          '**Bildanhänge.** An Chats lassen sich Bilder anhängen; Telefone skalieren sie auf die Grenzen des Modells (0.1.16), und am Desktop können Bilder hineingezogen werden (0.1.17).',
          '**Sprachdiktat.** Unter iOS und Android wird Sprache für das Chatfeld lokal mit einem separat ladbaren Sprachmodell transkribiert (0.1.16).',
          '**Ensu Packs.** Optionale Wissenspakete für genauere Antworten, auf Mobilgeräten seit 0.1.18 und am Desktop seit 0.1.20.',
          '**Your Notes am Desktop.** Chat mit lokalen Markdown-Notizen (0.1.20), bei Folgefragen mit Prüfung auf geänderte oder nicht verfügbare Quellen (0.1.21).',
        ],
        note: 'Die Release-Notes nennen außerdem GPU-beschleunigte Antworten unter Linux über Vulkan (0.1.18), automatische Updates am Desktop (0.1.15) und das Umbenennen von Chats am Desktop (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Der Hersteller sagt, die Verarbeitung finde auf dem Gerät statt und Ensu biete „full privacy“; der App-Store-Eintrag ergänzt, es brauche kein Konto und habe kein Tracking und keine Nutzungslimits.** Laut Ankündigung sind Ende-zu-Ende-verschlüsselte Synchronisierung und Sicherung über ein Ente-Konto, auch mit Self-Hosting, geplant, in diesem Release aber nicht aktiv.',
          'Der Code lädt Modelle aus von Ente veröffentlichten Hugging-Face-Repositories und das Sprachmodell von models.ente.com, und die Desktop-Apps prüfen auf Updates. [Entes Datenschutzerklärung](https://ente.com/privacy), zuletzt am 16. Oktober 2026 aktualisiert, erwähnt Ensu nicht; sie sagt, Ente erhebe keine Analysen zur Nutzung von App-Funktionen, und nennt anonymisierte Absturzberichte sowie Hugging Face für das Modell-Hosting.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Herstellers und das, was der öffentliche Code zeigt, keine Auditergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch gespeicherte Daten untersucht; da der Code öffentlich ist, können andere die Angaben prüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Datenschutzbewusste Nutzer**, die eine Chat-App ohne Konto wollen, deren Code jeder lesen kann.',
          '**Menschen mit mehreren Geräten**, die dieselbe App auf iPhone, Android, Mac, Windows und Linux nutzen möchten.',
          '**Tüftler mit bescheidener Hardware**, die kleine Modelle für einfache Fragen und Chats über eigene Notizen akzeptieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Antwortqualität und Geschwindigkeit.** PromptQuorum hat die Modelle nicht ausgeführt; Qualität, Tempo und Akkuverbrauch auf einem Gerät werden daher nicht bewertet.',
          '**Modellbedingungen.** Die Lizenzen der heruntergeladenen Modelle und der von Ente gehosteten konvertierten Dateien wurden nicht geprüft; dies ist keine Rechtsberatung.',
          '**Synchronisierung und Sicherung.** In diesem Release nicht aktiv; Chats bleiben daher auf dem Gerät, auf dem sie entstanden sind, bis die geplante Synchronisierung erscheint.',
          '**Hardwarebedarf.** Es ist keine RAM-Anforderung veröffentlicht; die Speichergrenzen oben stammen aus dem Quellcode.',
          '**Stabilität.** Die Version lautet 0.1.22, der Hersteller nennt dies ein erstes Release ohne Zusagen zu Preisen oder Stabilität, und die Web-Version ist als experimentell gekennzeichnet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Gratis / MIT', 'Hauptunterschied': 'Quelloffener Chat auf dem Gerät für Telefone; kein Desktop-Build' },
          { 'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Gratis / Apache 2.0', 'Hauptunterschied': 'Googles On-Device-App; kein Desktop-Build' },
          { 'App': '[Locally AI](/de/power-local-llm/locally-ai-review)', 'Plattformen': 'iOS, macOS', 'Preis / Lizenz': 'Gratis / Closed Source', 'Hauptunterschied': 'Führt offene Modelle über MLX auf Apple-Geräten aus; kein Android oder Windows' },
          { 'App': '[Jan](/de/power-local-llm/jan-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Gratis / Apache 2.0 (Variante)', 'Hauptunterschied': 'Quelloffener Offline-Chat für den Desktop; keine Telefon-App gelistet' },
        ],
        note: 'Verglichen anhand des PromptQuorum-Verzeichniseintrags jeder App; prüfen Sie aktuelle Plattformen, Preise und Lizenzen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Ensu kostenlos, und bleibt das so?',
            a: 'Ensu ist kostenlos nutzbar, und die Ankündigung spricht von „zero cost“; der Hersteller sagt aber, er habe noch keine Preise festgelegt, spätere Änderungen lassen sich aus den Quellen also nicht ausschließen.',
          },
          {
            q: 'Kann ich eigene Modelle verwenden?',
            a: 'Die Quellen sagen dazu nichts. Die App lädt die Modelle ihres Katalogs, und keine der geprüften Quellen erwähnt den Import eigener Modelldateien.',
          },
          {
            q: 'Kann ich einen Chat auf einem anderen Gerät fortsetzen?',
            a: 'Noch nicht. Die Synchronisierung ist in diesem Release nicht aktiv; der Hersteller plant optionale Ende-zu-Ende-verschlüsselte Synchronisierung und Sicherung über ein Ente-Konto und sagt, bestehende lokale Chats würden dann einbezogen.',
          },
          {
            q: 'Warum steht im iOS-Link auf der Ensu-Seite „ente-locker“?',
            a: 'Der Link auf ente.com/ensu verweist auf die App-Store-ID 6758197006, deren URL-Slug „ente-locker“ lautet, während der Eintrag selbst „Ensu - Ente\'s Local LLM“ heißt. Diese Rezension verlinkt den Eintrag über seine ID.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Ensu ist ein kostenloser, quelloffener Weg, kleine Sprachmodelle ohne Konto auf einem Telefon oder Computer auszuführen, von einem Hersteller, der regelmäßig Releases liefert. Dagegen steht, dass es ein 0.1.x-Release mit kleinen Modellen ist, Synchronisierung und Sicherung noch nicht verfügbar sind und keine der Angaben zu Datenschutz, Tempo oder Qualität hier getestet werden konnte. Es eignet sich für Menschen, die eine einfache lokale Chat-App für viele Geräte möchten und mit einem jungen Projekt zurechtkommen; wer Antworten auf dem Niveau großer Cloud-Modelle oder einen geräteübergreifenden Chatverlauf braucht, sollte die geplanten Funktionen abwarten oder ein anderes Werkzeug wählen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ensu-Ankündigung](https://ente.com/blog/ensu/) — Produktbeschreibung, Plattformen, Einschränkungen und Roadmap, datiert auf den 2. März 2026.',
          '[Ensu-Download-Seite](https://ente.com/ensu) — Version 0.1.22 und die Downloads je Plattform, geprüft am 24. Oktober 2026.',
          '[Ensu 0.1.22 auf GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — Veröffentlichungsdatum, Dateien und die Release-Notes früherer Versionen.',
          '[Modellkatalog im Quellcode](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — Modelle, Dateigrößen und Standardwahl nach Gerätespeicher, Hauptzweig am 24. Oktober 2026.',
          '[Ensu im App Store](https://apps.apple.com/app/id6758197006) und [bei Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — Store-Beschreibungen, iOS-Anforderungen und Versionsdaten.',
          '[Ente-Datenschutzerklärung](https://ente.com/privacy) — Datenerhebung und Dritte, zuletzt am 16. Oktober 2026 aktualisiert.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — eine quelloffene Chat-App auf dem Gerät für iOS und Android.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles App für Modelle auf dem Gerät.',
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — Chat auf dem Gerät für iPhone, iPad und Mac.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — ein quelloffener Offline-Chat-Client für den Desktop.',
          '[Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-es.webp',
    title: 'Reseña de Ensu: la app de chat con IA gratuita de Ente Labs en tu dispositivo',
    seoTitle: 'Reseña de Ensu: chat con IA gratis en tu dispositivo',
    intro:
      'Ensu es una app de chat gratuita y de código abierto de Ente Labs que ejecuta modelos de lenguaje en tu propio móvil u ordenador. Está disponible para iOS, Android, macOS, Windows y Linux, además de una versión web experimental, y su código está en GitHub. Esta reseña se basa en la entrada del blog y el sitio web del desarrollador, las fichas de las tiendas, las notas de versión de GitHub y el código fuente, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Reseña de Ensu: app de chat gratuita y de código abierto de Ente Labs para iPhone, Android, Mac, Windows y Linux. Modelos, privacidad y dudas abiertas.',
    twitterDescription:
      'Reseña de Ensu: una app de chat gratuita y de código abierto de Ente Labs que ejecuta modelos descargados en tu móvil u ordenador. Qué confirman las fuentes y qué no.',
    audience:
      'Personas que quieren una app de chat gratuita que funcione en sus propios dispositivos y necesitan saber qué modelos usa, cuánto cuesta y qué confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Ensu',
    targetKeywords: [
      'reseña ensu',
      'ensu ente',
      'app ente labs ensu',
      'app llm sin conexión',
      'app de chat con ia en el dispositivo',
      'app llm local de código abierto',
      'ensu llm local ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu (versión 0.1.22, publicada el 23 de octubre de 2026) es una app de chat gratuita de Ente Labs que ejecuta en el dispositivo modelos de lenguaje descargados, sin necesidad de cuenta.** Es de código abierto, y el propio desarrollador reconoce que todavía no es tan capaz como ChatGPT o Claude Code. Todo lo que se afirma aquí procede de fuentes públicas, no de pruebas propias.',
    quickAnswerTop: {
      es: {
        question: '¿Ensu funciona de verdad sin conexión y qué modelo usa?',
        answer:
          'Según el desarrollador, sí: los chats se procesan en el dispositivo, así que la app funciona sin internet una vez descargado un modelo. El anuncio no nombra ningún modelo; el código abierto enumera siete modelos de chat de las familias LFM 2.5, Qwen 3.5 y Gemma 4 y elige uno por defecto según la memoria del dispositivo.',
        bullets: [
          'Se pueden adjuntar imágenes a los chats.',
          'La entrada de voz se transcribe en el teléfono, en iOS y Android.',
          'Los Ensu Packs añaden fuentes de conocimiento descargables; en el escritorio, los chats pueden usar tus notas Markdown locales.',
          'La sincronización y la copia de seguridad cifradas con una cuenta de Ente están previstas, pero aún no activadas.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Ensu?', anchor: 'what-is-ensu' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Modelos y requisitos', anchor: 'requirements' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu es una app de chat de código abierto de Ente Labs que descarga un modelo de lenguaje pequeño y responde en tu móvil u ordenador en lugar de en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas la app, dejas que descargue un modelo una vez y luego chateas sin cuenta, adjuntas imágenes o dictas por voz.',
          },
        ],
        items: [
          'Mantenimiento: la página de versiones muestra lanzamientos regulares de abril a octubre de 2026, el último el 23 de octubre de 2026, por lo que no se aplica ningún aviso de proyecto abandonado.',
          'Modelos: se descargan dentro de la app; el código fuente enumera siete, entre ellos LFM 2.5, Qwen 3.5 y Gemma 4.',
          'Coste: gratis y sin cuenta; el desarrollador no ha anunciado ningún precio.',
          'Plataformas: iOS, Android, macOS, Windows y Linux, además de una versión web experimental.',
          'Apertura: código fuente en GitHub, en un repositorio con licencia AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en fuentes públicas (blog y sitio del desarrollador, fichas de las tiendas, notas de versión de GitHub y código fuente), consultadas el 24 de octubre de 2026. PromptQuorum no ha instalado ni medido Ensu, así que no se evalúan la calidad de las respuestas ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: '¿Qué es Ensu?',
        content: [
          '**Ensu es una app de chat de Ente Labs que el desarrollador describe como «a chatgpt-like app that runs completely on your device with full privacy and zero cost», es decir, una app tipo ChatGPT que funciona por completo en el dispositivo.** El anuncio tiene fecha del 2 de marzo de 2026, la App Store indica como vendedor a Ente Technologies, Inc. y la primera versión en la App Store salió el 27 de febrero de 2026.',
          'Según el anuncio, la lógica central está escrita en Rust, las apps móviles son nativas y las de escritorio usan Tauri; el código fuente ejecuta los modelos con llama.cpp. El título en la App Store es «Ensu - Ente\'s Local LLM».',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Hay un instalador o una ficha de tienda para cada sistema habitual: App Store, Google Play y descargas de GitHub Releases para macOS, Windows y Linux.**',
        ],
        columns: ['Opción', 'Cómo conseguirla'],
        rows: [
          { 'Opción': 'iPhone / iPad', 'Cómo conseguirla': '[Ensu en la App Store](https://apps.apple.com/app/id6758197006), gratis' },
          { 'Opción': 'Android', 'Cómo conseguirla': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) o el APK en [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opción': 'macOS', 'Cómo conseguirla': '.dmg universal en [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opción': 'Windows', 'Cómo conseguirla': 'Instalador .exe x64 en [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opción': 'Linux', 'Cómo conseguirla': 'AppImage, .deb (amd64) o .rpm (x86_64) en [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirla': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirla': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirla': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: 'Versión revisada: 0.1.22, publicada el 23 de octubre de 2026 en GitHub y la App Store; la app de iOS pesa 61.6 MB antes de descargar ningún modelo. El desarrollador califica la versión web de experimental. La página de Google Play mostraba como fecha de actualización el 7 de octubre de 2026, anterior a la versión 0.1.22; el APK de GitHub lleva la 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Modelos y requisitos',
        content: [
          '**Ente no publica en su sitio web ni un requisito de RAM ni una lista de modelos; los modelos y las elecciones por defecto de abajo proceden del código abierto y de las notas de versión.**',
        ],
        columns: ['Elemento', 'Lo que dicen las fuentes'],
        rows: [
          { 'Elemento': 'Modelos', 'Lo que dicen las fuentes': 'Se descargan dentro de la app. El código enumera siete: LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B, 2B y 4B, y Gemma 4 E2B y E4B' },
          { 'Elemento': 'Tamaño de descarga', 'Lo que dicen las fuentes': 'Archivo principal de unos 0.2 GB (LFM 2.5 350M) a unos 5.0 GB (Gemma 4 E4B); los modelos de visión añaden un archivo de imagen de unos 0.2 a 1.0 GB' },
          { 'Elemento': 'Por defecto en móvil', 'Lo que dicen las fuentes': 'Según la memoria: LFM 2.5 350M hasta 4 GB, LFM 2.5 VL 1.6B por encima de 4 GB y hasta 8 GB, Gemma 4 E2B por encima de 8 GB; el chat se desactiva por debajo de 4 GB' },
          { 'Elemento': 'Por defecto en escritorio', 'Lo que dicen las fuentes': 'Gemma 4 E4B con 16 GB de memoria o más, y si no LFM 2.5 VL 1.6B; la app ofrece algunos otros modelos' },
          { 'Elemento': 'Sistemas operativos', 'Lo que dicen las fuentes': 'iOS 16.0 o posterior según la App Store; paquetes para Windows x64 y Linux amd64 / x86_64; no se indica mínimo para Android ni macOS' },
          { 'Elemento': 'Internet', 'Lo que dicen las fuentes': 'Necesario para descargar modelos, packs y actualizaciones de escritorio; después el chat funciona sin conexión según el desarrollador' },
        ],
        note: 'La política de modelos se leyó en la rama principal del código abierto el 24 de octubre de 2026 y puede cambiar con cada versión; los límites para móviles proceden del código y de las notas de la versión 0.1.17.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede del anuncio del desarrollador, de las notas de versión o del código fuente; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Chat local.** Las conversaciones se ejecutan en el dispositivo; el desarrollador no menciona búsqueda web y dice que la app es «not as powerful as ChatGPT or Claude Code».',
          '**Imágenes adjuntas.** Se pueden adjuntar imágenes a los chats; los móviles las redimensionan a los límites del modelo (0.1.16) y el escritorio admite arrastrar imágenes (0.1.17).',
          '**Dictado por voz.** En iOS y Android, el habla para el cuadro de chat se transcribe localmente con un modelo de voz aparte que se descarga (0.1.16).',
          '**Ensu Packs.** Packs de conocimiento opcionales para respuestas más precisas, añadidos en móvil en 0.1.18 y en escritorio en 0.1.20.',
          '**Your Notes en escritorio.** Chat con notas Markdown locales (0.1.20), con comprobación de fuentes modificadas o no disponibles en las preguntas de seguimiento (0.1.21).',
        ],
        note: 'Las notas de versión también mencionan respuestas aceleradas por GPU en Linux mediante Vulkan (0.1.18), actualizaciones automáticas en escritorio (0.1.15) y renombrar chats en escritorio (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El desarrollador afirma que el procesamiento ocurre en el dispositivo y que Ensu ofrece «full privacy»; la ficha de la App Store añade que no requiere cuenta y no tiene seguimiento ni límites de uso.** Según el anuncio, la sincronización y la copia de seguridad cifradas de extremo a extremo con una cuenta de Ente, con opción de autoalojamiento, están previstas pero no activadas en esta versión.',
          'El código descarga los modelos de repositorios de Hugging Face publicados por Ente y el modelo de voz desde models.ente.com, y las apps de escritorio buscan actualizaciones. La [política de privacidad de Ente](https://ente.com/privacy), actualizada el 16 de octubre de 2026, no menciona Ensu; indica que Ente no recopila analíticas sobre el uso de las funciones de la app y cita informes de fallos anonimizados y Hugging Face para el alojamiento de modelos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador y lo que muestra el código público, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni los datos almacenados; como el código es público, otros pueden comprobar las afirmaciones.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios preocupados por la privacidad** que quieren una app de chat sin cuenta cuyo código cualquiera puede leer.',
          '**Personas con varios dispositivos** que quieren la misma app en iPhone, Android, Mac, Windows y Linux.',
          '**Aficionados con hardware modesto** que aceptan modelos pequeños para preguntas sencillas y chats sobre sus propias notas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de las respuestas y velocidad.** PromptQuorum no ejecutó los modelos, así que no se evalúan la calidad, la velocidad ni el consumo de batería en ningún dispositivo.',
          '**Condiciones de los modelos.** No se revisaron las licencias de los modelos descargados ni de los archivos convertidos que aloja Ente; esto no es asesoramiento jurídico.',
          '**Sincronización y copia de seguridad.** No activadas en esta versión, por lo que los chats permanecen en el dispositivo donde se crearon hasta que llegue la sincronización prevista.',
          '**Necesidades de hardware.** No se publica ningún requisito de RAM; los umbrales de memoria anteriores proceden del código fuente.',
          '**Estabilidad.** La versión es 0.1.22, el desarrollador habla de un primer lanzamiento sin compromisos de precio ni de estabilidad, y la versión web está marcada como experimental.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Chat de código abierto en el dispositivo para móviles; sin versión de escritorio' },
          { 'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'App de Google en el dispositivo; sin versión de escritorio' },
          { 'App': '[Locally AI](/es/power-local-llm/locally-ai-review)', 'Plataformas': 'iOS, macOS', 'Precio / licencia': 'Gratis / código cerrado', 'Diferencia clave': 'Ejecuta modelos abiertos con MLX en dispositivos Apple; sin Android ni Windows' },
          { 'App': '[Jan](/es/power-local-llm/jan-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / Apache 2.0 (variante)', 'Diferencia clave': 'Chat sin conexión de código abierto para escritorio; sin app móvil listada' },
        ],
        note: 'Comparación basada en la ficha de cada app en el directorio de PromptQuorum; confirma plataformas, precio y licencia actuales en la ficha propia de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Ensu es gratuita y seguirá siéndolo?',
            a: 'Ensu es de uso gratuito y el anuncio habla de «zero cost», pero el desarrollador dice que aún no ha fijado precios, así que las fuentes no permiten descartar cambios futuros.',
          },
          {
            q: '¿Puedo usar mis propios modelos?',
            a: 'Las fuentes no lo dicen. La app descarga los modelos de su catálogo y ninguna de las fuentes consultadas menciona importar tus propios archivos de modelo.',
          },
          {
            q: '¿Puedo continuar un chat en otro dispositivo?',
            a: 'Todavía no. La sincronización no está activada en esta versión; el desarrollador prevé una sincronización y copia de seguridad opcionales, cifradas de extremo a extremo, con una cuenta de Ente, y dice que los chats locales existentes se incluirán cuando llegue.',
          },
          {
            q: '¿Por qué el enlace de iOS de la página de Ensu dice «ente-locker»?',
            a: 'El enlace de ente.com/ensu apunta al identificador de App Store 6758197006, cuyo slug de URL es «ente-locker», mientras que la ficha se titula «Ensu - Ente\'s Local LLM». Esta reseña enlaza la ficha por su identificador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Ensu es una forma gratuita y de código abierto de ejecutar modelos de lenguaje pequeños en un móvil o un ordenador sin cuenta, de un desarrollador que publica versiones con regularidad. En su contra, es una versión 0.1.x con modelos pequeños, la sincronización y la copia de seguridad aún no están disponibles y ninguna de sus afirmaciones sobre privacidad, velocidad o calidad se pudo probar aquí. Encaja con quienes quieren una app de chat local sencilla en muchos dispositivos y se sienten cómodos con un proyecto joven; quien necesite respuestas al nivel de los grandes modelos en la nube o un historial entre dispositivos debería esperar a las funciones previstas o elegir otra herramienta.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Anuncio de Ensu](https://ente.com/blog/ensu/) — descripción del producto, plataformas, limitaciones y hoja de ruta, con fecha del 2 de marzo de 2026.',
          '[Página de descarga de Ensu](https://ente.com/ensu) — versión 0.1.22 y descargas por plataforma, consultadas el 24 de octubre de 2026.',
          '[Ensu 0.1.22 en GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — fecha de publicación, archivos y notas de versiones anteriores.',
          '[Catálogo de modelos en el código fuente](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — modelos, tamaños de archivo y elección por defecto según la memoria, rama principal el 24 de octubre de 2026.',
          '[Ensu en la App Store](https://apps.apple.com/app/id6758197006) y [en Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — descripciones de las tiendas, requisitos de iOS y datos de versión.',
          '[Política de privacidad de Ente](https://ente.com/privacy) — recopilación de datos y terceros, actualizada el 16 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una app de chat de código abierto en el dispositivo para iOS y Android.',
          '[Reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de modelos en el dispositivo de Google.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — chat en el dispositivo para iPhone, iPad y Mac.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — un cliente de chat sin conexión de código abierto para escritorio.',
          '[Asistentes de chat comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-fr.webp',
    title: 'Test d\'Ensu : l\'application de chat IA gratuite d\'Ente Labs sur l\'appareil',
    seoTitle: 'Test d\'Ensu : chat IA gratuit sur l\'appareil, Ente Labs',
    intro:
      'Ensu est une application de chat gratuite et open source d\'Ente Labs qui exécute des modèles de langage directement sur votre téléphone ou votre ordinateur. Elle existe pour iOS, Android, macOS, Windows et Linux, avec en plus une version web expérimentale, et son code est sur GitHub. Ce test s\'appuie sur l\'article de blog et le site du développeur, les fiches des boutiques, les notes de version GitHub et le code source, consultés le 24 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en conditions réelles.',
    metaDescription:
      'Test d\'Ensu : app de chat gratuite et open source d\'Ente Labs sur iPhone, Android, Mac, Windows et Linux. Modèles, vie privée, zones d\'ombre.',
    twitterDescription:
      'Test d\'Ensu : une application de chat gratuite et open source d\'Ente Labs qui exécute des modèles téléchargés sur votre téléphone ou ordinateur. Ce que les sources confirment ou non.',
    audience:
      'Les personnes qui veulent une application de chat gratuite fonctionnant sur leurs propres appareils et qui doivent savoir quels modèles elle utilise, combien elle coûte et ce que les sources confirment.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Ensu',
    targetKeywords: [
      'test ensu',
      'ensu ente',
      'application ente labs ensu',
      'application llm hors ligne',
      'application de chat ia sur l\'appareil',
      'application llm locale open source',
      'ensu llm local ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu (version 0.1.22, publiée le 23 octobre 2026) est une application de chat gratuite d\'Ente Labs qui exécute sur l\'appareil des modèles de langage téléchargés, sans compte.** Elle est open source, et son développeur indique lui-même qu\'elle n\'est pas encore aussi performante que ChatGPT ou Claude Code. Chaque affirmation ci-dessous provient de sources publiques, pas de nos propres tests.',
    quickAnswerTop: {
      fr: {
        question: 'Ensu fonctionne-t-elle vraiment hors ligne, et quel modèle utilise-t-elle ?',
        answer:
          'Selon le développeur, oui : les conversations sont traitées sur l\'appareil, l\'application fonctionne donc sans internet une fois un modèle téléchargé. L\'annonce ne nomme aucun modèle ; le code open source en liste sept des familles LFM 2.5, Qwen 3.5 et Gemma 4 et choisit un modèle par défaut selon la mémoire de l\'appareil.',
        bullets: [
          'Des images peuvent être jointes aux conversations.',
          'La saisie vocale est transcrite sur le téléphone, sur iOS et Android.',
          'Les Ensu Packs ajoutent des sources de connaissances téléchargeables ; sur ordinateur, les conversations peuvent s\'appuyer sur vos notes Markdown locales.',
          'La synchronisation et la sauvegarde chiffrées via un compte Ente sont prévues mais pas encore activées.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'Ensu ?', anchor: 'what-is-ensu' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Modèles et configuration requise', anchor: 'requirements' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et vie privée', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-elle', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu est une application de chat open source d\'Ente Labs qui télécharge un petit modèle de langage et répond sur votre téléphone ou ordinateur plutôt que dans le cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez l\'application, la laissez télécharger un modèle une fois, puis vous discutez sans compte, joignez des images ou dictez à la voix.',
          },
        ],
        items: [
          'Maintenance : la page des versions montre des publications régulières d\'avril à octobre 2026, la dernière le 23 octobre 2026 ; aucun avertissement de projet abandonné ne s\'applique.',
          'Modèles : téléchargés dans l\'application ; le code source en liste sept, dont LFM 2.5, Qwen 3.5 et Gemma 4.',
          'Coût : gratuite et sans compte ; le développeur n\'a annoncé aucun tarif.',
          'Plateformes : iOS, Android, macOS, Windows et Linux, plus une version web expérimentale.',
          'Ouverture : code source sur GitHub, dans un dépôt sous licence AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur des sources publiques (blog et site du développeur, fiches des boutiques, notes de version GitHub et code source), consultées le 24 octobre 2026. PromptQuorum n\'a ni installé ni mesuré Ensu ; la qualité des réponses et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'Qu\'est-ce qu\'Ensu ?',
        content: [
          '**Ensu est une application de chat d\'Ente Labs que le développeur décrit comme « a chatgpt-like app that runs completely on your device with full privacy and zero cost », c\'est-à-dire une application de type ChatGPT qui tourne entièrement sur l\'appareil.** L\'annonce date du 2 mars 2026, l\'App Store indique comme vendeur Ente Technologies, Inc., et la première version sur l\'App Store est sortie le 27 février 2026.',
          'Selon l\'annonce, la logique centrale est écrite en Rust, les applications mobiles sont natives et les applications de bureau utilisent Tauri ; le code source exécute les modèles avec llama.cpp. Le titre sur l\'App Store est « Ensu - Ente\'s Local LLM ».',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Un installeur ou une fiche de boutique existe pour chaque système courant : App Store, Google Play et téléchargements GitHub Releases pour macOS, Windows et Linux.**',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { 'Option': 'iPhone / iPad', 'Comment l\'obtenir': '[Ensu sur l\'App Store](https://apps.apple.com/app/id6758197006), gratuite' },
          { 'Option': 'Android', 'Comment l\'obtenir': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) ou l\'APK sur [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'macOS', 'Comment l\'obtenir': '.dmg universel sur [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Windows', 'Comment l\'obtenir': 'Installeur .exe x64 sur [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Linux', 'Comment l\'obtenir': 'AppImage, .deb (amd64) ou .rpm (x86_64) sur [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Option': 'Site web', 'Comment l\'obtenir': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'Option': 'Politique de confidentialité', 'Comment l\'obtenir': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'Option': 'Code source', 'Comment l\'obtenir': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: 'Version testée : 0.1.22, publiée le 23 octobre 2026 sur GitHub et l\'App Store ; l\'application iOS pèse 61.6 Mo avant tout téléchargement de modèle. Le développeur qualifie la version web d\'expérimentale. La page Google Play affichait une date de mise à jour du 7 octobre 2026, antérieure à la version 0.1.22 ; l\'APK sur GitHub porte la version 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Modèles et configuration requise',
        content: [
          '**Ente ne publie sur son site ni exigence de RAM ni liste de modèles ; les modèles et choix par défaut ci-dessous proviennent du code open source et des notes de version.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Modèles', 'Ce que disent les sources': 'Téléchargés dans l\'application. Le code en liste sept : LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B, 2B et 4B, et Gemma 4 E2B et E4B' },
          { 'Élément': 'Taille du téléchargement', 'Ce que disent les sources': 'Fichier principal d\'environ 0.2 Go (LFM 2.5 350M) à environ 5.0 Go (Gemma 4 E4B) ; les modèles de vision ajoutent un fichier d\'image d\'environ 0.2 à 1.0 Go' },
          { 'Élément': 'Défaut sur téléphone', 'Ce que disent les sources': 'Selon la mémoire : LFM 2.5 350M jusqu\'à 4 Go, LFM 2.5 VL 1.6B au-delà de 4 Go jusqu\'à 8 Go, Gemma 4 E2B au-delà de 8 Go ; le chat est désactivé sous 4 Go' },
          { 'Élément': 'Défaut sur ordinateur', 'Ce que disent les sources': 'Gemma 4 E4B à partir de 16 Go de mémoire, sinon LFM 2.5 VL 1.6B ; l\'application propose quelques autres modèles' },
          { 'Élément': 'Systèmes d\'exploitation', 'Ce que disent les sources': 'iOS 16.0 ou plus récent selon l\'App Store ; paquets Windows x64 et Linux amd64 / x86_64 ; aucun minimum n\'est indiqué pour Android ou macOS' },
          { 'Élément': 'Internet', 'Ce que disent les sources': 'Nécessaire pour télécharger modèles, packs et mises à jour de bureau ; ensuite, le chat fonctionne hors ligne selon le développeur' },
        ],
        note: 'La politique de modèles a été lue dans la branche principale du code open source le 24 octobre 2026 et peut changer à chaque version ; les limites pour téléphone viennent du code et des notes de la version 0.1.17.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de l\'annonce du développeur, des notes de version ou du code source ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat local.** Les conversations s\'exécutent sur l\'appareil ; le développeur ne mentionne aucune recherche web et dit que l\'application est « not as powerful as ChatGPT or Claude Code ».',
          '**Images jointes.** Des images peuvent être jointes aux conversations ; les téléphones les redimensionnent aux limites du modèle (0.1.16) et l\'ordinateur accepte le glisser-déposer d\'images (0.1.17).',
          '**Dictée vocale.** Sur iOS et Android, la parole destinée à la zone de saisie est transcrite localement avec un modèle vocal distinct à télécharger (0.1.16).',
          '**Ensu Packs.** Packs de connaissances optionnels pour des réponses plus précises, ajoutés sur mobile en 0.1.18 et sur ordinateur en 0.1.20.',
          '**Your Notes sur ordinateur.** Discussion avec des notes Markdown locales (0.1.20), avec vérification des sources modifiées ou indisponibles dans les questions de suivi (0.1.21).',
        ],
        note: 'Les notes de version mentionnent aussi des réponses accélérées par GPU sous Linux via Vulkan (0.1.18), les mises à jour automatiques sur ordinateur (0.1.15) et le renommage des conversations sur ordinateur (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et vie privée',
        content: [
          '**Le développeur affirme que le traitement se fait sur l\'appareil et qu\'Ensu offre « full privacy » ; la fiche de l\'App Store ajoute qu\'elle ne demande aucun compte et n\'impose ni suivi ni limite d\'usage.** Selon l\'annonce, une synchronisation et une sauvegarde chiffrées de bout en bout via un compte Ente, avec auto-hébergement, sont prévues mais pas activées dans cette version.',
          'Le code récupère les modèles dans des dépôts Hugging Face publiés par Ente et le modèle vocal sur models.ente.com, et les applications de bureau vérifient les mises à jour. La [politique de confidentialité d\'Ente](https://ente.com/privacy), mise à jour le 16 octobre 2026, ne mentionne pas Ensu ; elle indique qu\'Ente ne collecte pas d\'analyses sur l\'usage des fonctions de l\'application et cite des rapports de plantage anonymisés ainsi que Hugging Face pour l\'hébergement des modèles.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur et ce que montre le code public, pas des résultats d\'audit. PromptQuorum n\'a inspecté ni le trafic réseau ni les données stockées ; le code étant public, d\'autres peuvent vérifier ces affirmations.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle',
        items: [
          '**Les utilisateurs soucieux de leur vie privée** qui veulent une application de chat sans compte dont chacun peut lire le code.',
          '**Les personnes équipées de plusieurs appareils** qui veulent la même application sur iPhone, Android, Mac, Windows et Linux.',
          '**Les bricoleurs avec un matériel modeste** qui acceptent de petits modèles pour des questions simples et des discussions sur leurs propres notes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité des réponses et vitesse.** PromptQuorum n\'a pas exécuté les modèles ; qualité, vitesse et consommation de batterie sur un appareil ne sont donc pas évaluées.',
          '**Conditions des modèles.** Les licences des modèles téléchargés et des fichiers convertis qu\'Ente héberge n\'ont pas été examinées ; ceci n\'est pas un avis juridique.',
          '**Synchronisation et sauvegarde.** Non activées dans cette version : les conversations restent sur l\'appareil où elles ont été créées jusqu\'à l\'arrivée de la synchronisation prévue.',
          '**Besoins matériels.** Aucune exigence de RAM n\'est publiée ; les seuils de mémoire ci-dessus viennent du code source.',
          '**Stabilité.** La version est 0.1.22, le développeur parle d\'une première version sans engagement sur les tarifs ni la stabilité, et la version web est présentée comme expérimentale.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Chat open source sur l\'appareil pour téléphones ; pas de version bureau' },
          { 'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'Application de Google sur l\'appareil ; pas de version bureau' },
          { 'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)', 'Plateformes': 'iOS, macOS', 'Prix / licence': 'Gratuit / code fermé', 'Différence clé': 'Exécute des modèles ouverts via MLX sur appareils Apple ; ni Android ni Windows' },
          { 'Application': '[Jan](/fr/power-local-llm/jan-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / Apache 2.0 (variante)', 'Différence clé': 'Chat hors ligne open source pour ordinateur ; pas d\'application téléphone listée' },
        ],
        note: 'Comparaison établie d\'après la fiche de chaque application dans l\'annuaire PromptQuorum ; vérifiez plateformes, prix et licence actuels sur la fiche propre à chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ensu est-elle gratuite, et le restera-t-elle ?',
            a: 'Ensu est gratuite et l\'annonce parle de « zero cost », mais le développeur dit ne pas avoir encore fixé de tarifs ; les sources ne permettent donc pas d\'exclure des changements ultérieurs.',
          },
          {
            q: 'Puis-je utiliser mes propres modèles ?',
            a: 'Les sources ne le disent pas. L\'application télécharge les modèles de son catalogue, et aucune des sources consultées ne mentionne l\'import de vos propres fichiers de modèle.',
          },
          {
            q: 'Puis-je poursuivre une conversation sur un autre appareil ?',
            a: 'Pas encore. La synchronisation n\'est pas activée dans cette version ; le développeur prévoit une synchronisation et une sauvegarde chiffrées de bout en bout, facultatives, via un compte Ente, et dit que les conversations locales existantes y seront incluses.',
          },
          {
            q: 'Pourquoi le lien iOS de la page Ensu contient-il « ente-locker » ?',
            a: 'Le lien sur ente.com/ensu pointe vers l\'identifiant App Store 6758197006, dont le slug d\'URL est « ente-locker » alors que la fiche s\'intitule « Ensu - Ente\'s Local LLM ». Ce test renvoie vers la fiche par son identifiant.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ensu est un moyen gratuit et open source d\'exécuter de petits modèles de langage sur un téléphone ou un ordinateur sans compte, proposé par un développeur qui publie régulièrement des versions. En revanche, il s\'agit d\'une version 0.1.x avec de petits modèles, la synchronisation et la sauvegarde ne sont pas encore disponibles, et aucune de ses affirmations sur la vie privée, la vitesse ou la qualité n\'a pu être testée ici. Elle convient à ceux qui veulent une application de chat locale simple sur de nombreux appareils et s\'accommodent d\'un projet jeune ; qui a besoin de réponses du niveau des grands modèles cloud ou d\'un historique entre appareils devrait attendre les fonctions prévues ou choisir un autre outil.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Annonce d\'Ensu](https://ente.com/blog/ensu/) — description du produit, plateformes, limites et feuille de route, datée du 2 mars 2026.',
          '[Page de téléchargement d\'Ensu](https://ente.com/ensu) — version 0.1.22 et téléchargements par plateforme, consultés le 24 octobre 2026.',
          '[Ensu 0.1.22 sur GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — date de publication, fichiers et notes des versions précédentes.',
          '[Catalogue de modèles dans le code source](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — modèles, tailles de fichiers et choix par défaut selon la mémoire, branche principale au 24 octobre 2026.',
          '[Ensu sur l\'App Store](https://apps.apple.com/app/id6758197006) et [sur Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — descriptions des boutiques, configuration iOS et données de version.',
          '[Politique de confidentialité d\'Ente](https://ente.com/privacy) — collecte de données et tiers, mise à jour le 16 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une application de chat open source sur l\'appareil pour iOS et Android.',
          '[Test de Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application de modèles sur l\'appareil de Google.',
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — chat sur l\'appareil pour iPhone, iPad et Mac.',
          '[Test de Jan](/fr/power-local-llm/jan-review) — un client de chat hors ligne open source pour ordinateur.',
          '[Assistants de chat comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — la comparaison de catégorie à laquelle appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-ja.webp',
    title: 'Ensuレビュー：Ente Labs製の無料オンデバイスAIチャットアプリ',
    seoTitle: 'Ensuレビュー：Ente Labsの無料AIチャットアプリ',
    intro:
      'Ensuは、Ente Labsが提供する無料のオープンソースのチャットアプリで、言語モデルをお使いのスマートフォンやパソコン上で実行します。iOS、Android、macOS、Windows、Linuxに対応し、実験的なWeb版もあり、コードはGitHubで公開されています。本レビューは、開発元のブログ記事とWebサイト、ストアの掲載情報、GitHubのリリースノート、ソースコードに基づき、2026年10月24日に確認したものです。PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Ensuレビュー：Ente Labsの無料オープンソースのチャットアプリ。iPhone・Android・Mac・Windows・Linuxでモデルを端末内実行。モデル、プライバシー、未確認事項を整理。',
    twitterDescription:
      'Ensuレビュー：Ente Labsの無料オープンソースのチャットアプリが、ダウンロードしたモデルをスマホやパソコンで実行。情報源が確認していること、していないこと。',
    audience:
      '自分の端末で動く無料のチャットアプリを探していて、使用モデル、費用、情報源が確認している内容を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ensuレビュー',
    targetKeywords: [
      'ensu レビュー',
      'ensu ente',
      'ente labs ensu アプリ',
      'オフライン llm アプリ',
      '端末内 ai チャットアプリ',
      'オープンソース ローカル llm アプリ',
      'ensu ローカル llm ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu（バージョン0.1.22、2026年10月23日公開）は、Ente Labsの無料チャットアプリで、ダウンロードした言語モデルをアカウント不要で端末上で実行します。** オープンソースで、開発元自身もChatGPTやClaude Codeほどの性能にはまだ達していないと述べています。以下の記述はすべて公開情報に基づき、独自の検証結果ではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Ensuは本当にオフラインで動作し、どのモデルを使いますか？',
        answer:
          '開発元によれば、はい。チャットは端末上で処理されるため、モデルをダウンロードした後はインターネットなしで動作します。発表記事にモデル名はありませんが、オープンソースのコードにはLFM 2.5、Qwen 3.5、Gemma 4の各ファミリーから7つのチャットモデルが記載され、端末のメモリに応じて既定のモデルが選ばれます。',
        bullets: [
          'チャットに画像を添付できます。',
          '音声入力はiOSとAndroidで端末上で文字起こしされます。',
          'Ensu Packsでダウンロード可能な知識ソースを追加でき、デスクトップではローカルのMarkdownノートも利用できます。',
          'Enteアカウントによる暗号化同期とバックアップは予定されていますが、まだ有効ではありません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Ensuとは', anchor: 'what-is-ensu' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'モデルと動作要件', anchor: 'requirements' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensuは、Ente Labsのオープンソースのチャットアプリで、小型の言語モデルをダウンロードし、クラウドではなくスマホやパソコン上で回答します。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールしてモデルを一度ダウンロードすれば、アカウントなしでチャット、画像の添付、音声入力ができます。',
          },
        ],
        items: [
          '保守状況：リリースページには2026年4月から10月まで定期的な公開が見られ、最新は2026年10月23日のため、更新停止の警告は該当しません。',
          'モデル：アプリ内でダウンロード。ソースコードには、LFM 2.5、Qwen 3.5、Gemma 4など7つが記載されています。',
          '費用：無料でアカウント不要。開発元は料金を発表していません。',
          '対応環境：iOS、Android、macOS、Windows、Linux、および実験的なWeb版。',
          '公開状況：ソースコードはGitHubで公開され、リポジトリのライセンスはAGPL-3.0です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは公開情報（開発元のブログとサイト、ストアの掲載情報、GitHubのリリースノート、ソースコード）に基づき、2026年10月24日に確認しました。PromptQuorumはEnsuをインストールも計測もしていないため、回答品質や速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'Ensuとは',
        content: [
          '**Ensuは、Ente Labsのチャットアプリで、開発元は「a chatgpt-like app that runs completely on your device with full privacy and zero cost」（端末上で完全に動作するChatGPT風のアプリ）と説明しています。** 発表は2026年3月2日付で、App Storeの販売元はEnte Technologies, Inc.、App Storeでの初回リリースは2026年2月27日です。',
          '発表によれば、中核ロジックはRustで書かれ、モバイル版はネイティブ、デスクトップ版はTauriを使用しています。ソースコードではllama.cppでモデルを実行します。App Storeでの名称は「Ensu - Ente\'s Local LLM」です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**主要なOSごとにインストーラーまたはストアの掲載があります。App Store、Google Play、そしてmacOS・Windows・Linux向けのGitHub Releasesです。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'iPhone / iPad', '入手方法': '[App StoreのEnsu](https://apps.apple.com/app/id6758197006)（無料）' },
          { '項目': 'Android', '入手方法': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu)、または[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)のAPK' },
          { '項目': 'macOS', '入手方法': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)のユニバーサル版.dmg' },
          { '項目': 'Windows', '入手方法': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)のx64セットアップ.exe' },
          { '項目': 'Linux', '入手方法': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)のAppImage、.deb（amd64）、.rpm（x86_64）' },
          { '項目': 'Webサイト', '入手方法': '[ente.com/ensu](https://ente.com/ensu)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[ente.com/privacy](https://ente.com/privacy)' },
          { '項目': 'ソースコード', '入手方法': '[github.com/ente-io/ente](https://github.com/ente-io/ente)（AGPL-3.0）' },
        ],
        note: '確認したバージョン：0.1.22。GitHubとApp Storeで2026年10月23日に公開されました。iOSアプリはモデルのダウンロード前で61.6 MBです。開発元はWeb版を実験的としています。Google Playのページの更新日は2026年10月7日で、0.1.22の公開より前でした。GitHubのAPKは0.1.22です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'モデルと動作要件',
        content: [
          '**EnteはWebサイト上でRAM要件もモデル一覧も公開していません。以下のモデルと既定の選択は、オープンソースのコードとリリースノートに基づきます。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'モデル', '情報源の記載': 'アプリ内でダウンロード。コードには7つ：LFM 2.5 350M、LFM 2.5 VL 1.6B、Qwen 3.5 0.8B・2B・4B、Gemma 4 E2B・E4B' },
          { '項目': 'ダウンロード容量', '情報源の記載': 'メインファイルは約0.2 GB（LFM 2.5 350M）から約5.0 GB（Gemma 4 E4B）。ビジョン対応モデルは約0.2〜1.0 GBの画像用ファイルが追加' },
          { '項目': 'スマホの既定', '情報源の記載': 'メモリに応じて：4 GB以下はLFM 2.5 350M、4 GB超〜8 GBはLFM 2.5 VL 1.6B、8 GB超はGemma 4 E2B。4 GB未満ではチャットは無効' },
          { '項目': 'デスクトップの既定', '情報源の記載': 'メモリ16 GB以上はGemma 4 E4B、それ未満はLFM 2.5 VL 1.6B。他のモデルにも切り替え可能' },
          { '項目': '対応OS', '情報源の記載': 'App Storeの記載ではiOS 16.0以降。Windows x64、Linux amd64 / x86_64のパッケージ。AndroidとmacOSの最低要件は記載なし' },
          { '項目': 'インターネット', '情報源の記載': 'モデル、パック、デスクトップ更新のダウンロードに必要。その後のチャットは開発元によればオフラインで可能' },
        ],
        note: 'モデルの選択ルールは、2026年10月24日にオープンソースのコードのメインブランチから読み取ったもので、リリースごとに変わる可能性があります。スマホの制限はコードとバージョン0.1.17のリリースノートに基づきます。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべて開発元の発表、リリースノート、ソースコードに基づく内容で、独自に検証したものはありません。**',
        ],
        items: [
          '**ローカルチャット。** 会話は端末上で実行されます。開発元はWeb検索を挙げておらず、「not as powerful as ChatGPT or Claude Code」と述べています。',
          '**画像の添付。** チャットに画像を添付できます。スマホではモデルの上限に合わせて縮小され（0.1.16）、デスクトップではドラッグ＆ドロップに対応します（0.1.17）。',
          '**音声入力。** iOSとAndroidでは、チャット欄への音声を別途ダウンロードする音声モデルで端末上で文字起こしします（0.1.16）。',
          '**Ensu Packs。** より正確な回答のための任意の知識パックで、モバイルでは0.1.18、デスクトップでは0.1.20で追加されました。',
          '**デスクトップのYour Notes。** ローカルのMarkdownノートとチャットでき（0.1.20）、フォローアップ質問では変更または利用不可のソースを確認します（0.1.21）。',
        ],
        note: 'リリースノートには、LinuxでのVulkanによるGPU高速化（0.1.18）、デスクトップの自動更新（0.1.15）、デスクトップでのチャット名の変更（0.1.20）も記載されています。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**開発元は、処理は端末上で行われ、Ensuは「full privacy」を提供すると述べています。App Storeの説明には、アカウント不要でトラッキングも利用制限もないとあります。** 発表によれば、Enteアカウントによるエンドツーエンド暗号化の同期とバックアップ（セルフホストも可）は予定されていますが、このリリースでは有効ではありません。',
          'コードは、Enteが公開するHugging Faceのリポジトリからモデルを、models.ente.comから音声モデルを取得し、デスクトップ版は更新を確認します。[Enteのプライバシーポリシー](https://ente.com/privacy)（2026年10月16日更新）はEnsuに触れていませんが、アプリ機能の利用状況の分析は収集しないこと、匿名化されたクラッシュレポート、モデルのホスティングにHugging Faceを使うことが記されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の説明と公開コードが示す内容であり、監査結果ではありません。PromptQuorumはネットワーク通信や保存データを調べていません。コードが公開されているため、第三者が検証できます。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**プライバシーを重視する人**：アカウント不要で、誰でもコードを読めるチャットアプリを使いたい方。',
          '**複数の端末を使う人**：iPhone、Android、Mac、Windows、Linuxで同じアプリを使いたい方。',
          '**控えめなスペックで試したい人**：小型モデルで、簡単な質問や自分のノートを使ったチャットができれば十分な方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**回答品質と速度。** PromptQuorumはモデルを実行していないため、どの端末でも品質、速度、バッテリー消費は評価していません。',
          '**モデルの利用条件。** ダウンロードされるモデルやEnteがホストする変換済みファイルのライセンスは確認していません。法的助言ではありません。',
          '**同期とバックアップ。** このリリースでは無効のため、予定の同期が提供されるまでチャットは作成した端末に残ります。',
          '**必要なハードウェア。** RAM要件は公開されておらず、上記のメモリ基準はソースコードに基づきます。',
          '**安定性。** バージョンは0.1.22で、開発元は初回リリースであり料金や安定性は約束していないとしています。Web版は実験的とされています。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', '対応環境', '価格 / ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)', '対応環境': 'iOS、Android', '価格 / ライセンス': '無料 / MIT', '主な違い': 'スマホ向けのオープンソースの端末内チャット。デスクトップ版なし' },
          { 'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)', '対応環境': 'iOS、Android', '価格 / ライセンス': '無料 / Apache 2.0', '主な違い': 'Googleの端末内モデルアプリ。デスクトップ版なし' },
          { 'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)', '対応環境': 'iOS、macOS', '価格 / ライセンス': '無料 / クローズドソース', '主な違い': 'AppleデバイスでMLX経由でオープンモデルを実行。AndroidとWindowsは非対応' },
          { 'アプリ': '[Jan](/ja/power-local-llm/jan-review)', '対応環境': 'macOS、Windows、Linux', '価格 / ライセンス': '無料 / Apache 2.0（派生）', '主な違い': 'デスクトップ向けのオープンソースのオフラインチャット。スマホアプリの記載なし' },
        ],
        note: '各アプリのPromptQuorumディレクトリの掲載情報に基づく比較です。最新の対応環境、価格、ライセンスは各アプリの公式ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ensuは無料ですか。今後も無料ですか。',
            a: 'Ensuは無料で使え、発表でも「zero cost」とされています。ただし開発元は料金をまだ決めていないとしており、情報源からは今後の変更を否定できません。',
          },
          {
            q: '自分のモデルを使えますか。',
            a: '情報源には記載がありません。アプリはカタログ内のモデルをダウンロードし、確認した情報源には独自のモデルファイルを取り込む方法の記載はありません。',
          },
          {
            q: '別の端末でチャットを続けられますか。',
            a: 'まだできません。このリリースでは同期は無効です。開発元はEnteアカウントによる任意のエンドツーエンド暗号化の同期とバックアップを予定しており、提供開始後は既存のローカルチャットも対象になるとしています。',
          },
          {
            q: 'EnsuのページにあるiOSリンクに「ente-locker」とあるのはなぜですか。',
            a: 'ente.com/ensuのリンクはApp StoreのID 6758197006を指し、そのURLのスラッグは「ente-locker」ですが、掲載名は「Ensu - Ente\'s Local LLM」です。本レビューはIDで掲載ページにリンクしています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Ensuは、アカウントなしで小型の言語モデルをスマホやパソコンで動かせる、無料のオープンソースの手段で、開発元は定期的にリリースを続けています。一方で、0.1.x段階のリリースで、モデルは小型であり、同期とバックアップはまだ利用できず、プライバシー、速度、品質に関する主張はここでは検証できませんでした。多数の端末で使えるシンプルなローカルチャットアプリを求め、若いプロジェクトでも構わない方に向いています。大規模なクラウドモデル並みの回答や端末間のチャット履歴が必要な方は、予定されている機能を待つか、別のツールを選ぶのがよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Ensuの発表記事](https://ente.com/blog/ensu/) — 製品説明、対応環境、制限事項、今後の計画（2026年3月2日付）。',
          '[Ensuのダウンロードページ](https://ente.com/ensu) — バージョン0.1.22とプラットフォーム別ダウンロード（2026年10月24日確認）。',
          '[GitHub ReleasesのEnsu 0.1.22](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — 公開日、配布ファイル、過去バージョンのリリースノート。',
          '[ソースコード内のモデルカタログ](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — モデル、ファイルサイズ、メモリ別の既定選択（2026年10月24日のメインブランチ）。',
          '[App StoreのEnsu](https://apps.apple.com/app/id6758197006)と[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — ストアの説明、iOSの要件、バージョン情報。',
          '[Enteのプライバシーポリシー](https://ente.com/privacy) — データ収集と第三者（2026年10月16日更新）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOS・Android向けのオープンソースの端末内チャットアプリ。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleの端末内モデルアプリ。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iPhone・iPad・Mac向けの端末内チャット。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — デスクトップ向けのオープンソースのオフラインチャットクライアント。',
          '[チャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — 本レビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-pt.webp',
    title: 'Análise do Ensu: o app de chat com IA gratuito da Ente Labs no seu dispositivo',
    seoTitle: 'Análise do Ensu: chat com IA grátis no seu dispositivo',
    intro:
      'O Ensu é um app de chat gratuito e de código aberto da Ente Labs que executa modelos de linguagem no seu próprio celular ou computador. Está disponível para iOS, Android, macOS, Windows e Linux, além de uma versão web experimental, e o código está no GitHub. Esta análise se baseia no post do blog e no site do desenvolvedor, nas páginas das lojas, nas notas de versão do GitHub e no código-fonte, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Ensu: app de chat gratuito e de código aberto da Ente Labs para iPhone, Android, Mac, Windows e Linux. Modelos, privacidade e dúvidas.',
    twitterDescription:
      'Análise do Ensu: um app de chat gratuito e de código aberto da Ente Labs que executa modelos baixados no celular ou computador. O que as fontes confirmam e o que não confirmam.',
    audience:
      'Pessoas que querem um app de chat gratuito que rode nos próprios dispositivos e precisam saber quais modelos ele usa, quanto custa e o que as fontes confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Ensu',
    targetKeywords: [
      'análise ensu',
      'ensu ente',
      'app ente labs ensu',
      'app llm offline',
      'app de chat com ia no dispositivo',
      'app llm local de código aberto',
      'ensu llm local ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**O Ensu (versão 0.1.22, lançada em 23 de outubro de 2026) é um app de chat gratuito da Ente Labs que executa no dispositivo modelos de linguagem baixados, sem precisar de conta.** É de código aberto, e o próprio desenvolvedor diz que ainda não é tão capaz quanto o ChatGPT ou o Claude Code. Tudo o que está aqui vem de fontes públicas, não de testes próprios.',
    quickAnswerTop: {
      pt: {
        question: 'O Ensu funciona mesmo offline e qual modelo ele usa?',
        answer:
          'Segundo o desenvolvedor, sim: os chats são processados no dispositivo, então o app funciona sem internet depois que um modelo é baixado. O anúncio não cita nenhum modelo; o código aberto lista sete modelos de chat das famílias LFM 2.5, Qwen 3.5 e Gemma 4 e escolhe um padrão conforme a memória do dispositivo.',
        bullets: [
          'É possível anexar imagens aos chats.',
          'A entrada de voz é transcrita no celular, no iOS e no Android.',
          'Os Ensu Packs acrescentam fontes de conhecimento baixáveis; no desktop, os chats podem usar suas anotações Markdown locais.',
          'Sincronização e backup criptografados por uma conta Ente estão planejados, mas ainda não ativados.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Ensu?', anchor: 'what-is-ensu' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Modelos e requisitos', anchor: 'requirements' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Ensu é um app de chat de código aberto da Ente Labs que baixa um modelo de linguagem pequeno e responde no seu celular ou computador, e não na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, deixa que ele baixe um modelo uma vez e depois conversa sem conta, anexa imagens ou dita por voz.',
          },
        ],
        items: [
          'Manutenção: a página de versões mostra lançamentos regulares de abril a outubro de 2026, o mais recente em 23 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Modelos: baixados dentro do app; o código-fonte lista sete, entre eles LFM 2.5, Qwen 3.5 e Gemma 4.',
          'Custo: gratuito e sem conta; o desenvolvedor não anunciou preços.',
          'Plataformas: iOS, Android, macOS, Windows e Linux, além de uma versão web experimental.',
          'Abertura: código-fonte no GitHub, em um repositório com licença AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em fontes públicas (blog e site do desenvolvedor, páginas das lojas, notas de versão do GitHub e código-fonte), consultadas em 24 de outubro de 2026. A PromptQuorum não instalou nem mediu o Ensu, então qualidade das respostas e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'O que é o Ensu?',
        content: [
          '**O Ensu é um app de chat da Ente Labs que o desenvolvedor descreve como "a chatgpt-like app that runs completely on your device with full privacy and zero cost", ou seja, um app no estilo ChatGPT que roda inteiramente no dispositivo.** O anúncio é de 2 de março de 2026, a App Store lista como vendedor a Ente Technologies, Inc., e a primeira versão na App Store saiu em 27 de fevereiro de 2026.',
          'Segundo o anúncio, a lógica central é escrita em Rust, os apps móveis são nativos e os de desktop usam Tauri; o código-fonte executa os modelos com llama.cpp. O título na App Store é "Ensu - Ente\'s Local LLM".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**Há instalador ou página de loja para cada sistema comum: App Store, Google Play e downloads do GitHub Releases para macOS, Windows e Linux.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': 'iPhone / iPad', 'Como obter': '[Ensu na App Store](https://apps.apple.com/app/id6758197006), grátis' },
          { 'Opção': 'Android', 'Como obter': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) ou o APK no [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opção': 'macOS', 'Como obter': '.dmg universal no [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opção': 'Windows', 'Como obter': 'Instalador .exe x64 no [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opção': 'Linux', 'Como obter': 'AppImage, .deb (amd64) ou .rpm (x86_64) no [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'Opção': 'Site', 'Como obter': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'Opção': 'Política de privacidade', 'Como obter': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'Opção': 'Código-fonte', 'Como obter': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: 'Versão analisada: 0.1.22, lançada em 23 de outubro de 2026 no GitHub e na App Store; o app para iOS tem 61.6 MB antes de qualquer download de modelo. O desenvolvedor classifica a versão web como experimental. A página do Google Play mostrava como data de atualização 7 de outubro de 2026, anterior ao lançamento 0.1.22; o APK no GitHub traz a versão 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Modelos e requisitos',
        content: [
          '**A Ente não publica em seu site nem um requisito de RAM nem uma lista de modelos; os modelos e as escolhas padrão abaixo vêm do código aberto e das notas de versão.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Modelos', 'O que dizem as fontes': 'Baixados dentro do app. O código lista sete: LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B, 2B e 4B, e Gemma 4 E2B e E4B' },
          { 'Item': 'Tamanho do download', 'O que dizem as fontes': 'Arquivo principal de cerca de 0.2 GB (LFM 2.5 350M) a cerca de 5.0 GB (Gemma 4 E4B); modelos de visão acrescentam um arquivo de imagem de cerca de 0.2 a 1.0 GB' },
          { 'Item': 'Padrão no celular', 'O que dizem as fontes': 'Conforme a memória: LFM 2.5 350M até 4 GB, LFM 2.5 VL 1.6B acima de 4 GB até 8 GB, Gemma 4 E2B acima de 8 GB; o chat fica desativado abaixo de 4 GB' },
          { 'Item': 'Padrão no desktop', 'O que dizem as fontes': 'Gemma 4 E4B com 16 GB de memória ou mais, caso contrário LFM 2.5 VL 1.6B; o app oferece alguns outros modelos' },
          { 'Item': 'Sistemas operacionais', 'O que dizem as fontes': 'iOS 16.0 ou posterior segundo a App Store; pacotes para Windows x64 e Linux amd64 / x86_64; não há mínimo informado para Android ou macOS' },
          { 'Item': 'Internet', 'O que dizem as fontes': 'Necessária para baixar modelos, packs e atualizações do desktop; depois, o chat funciona offline segundo o desenvolvedor' },
        ],
        note: 'A política de modelos foi lida no ramo principal do código aberto em 24 de outubro de 2026 e pode mudar a cada versão; os limites para celulares vêm do código e das notas da versão 0.1.17.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do anúncio do desenvolvedor, das notas de versão ou do código-fonte; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat local.** As conversas rodam no dispositivo; o desenvolvedor não cita busca na web e diz que o app é "not as powerful as ChatGPT or Claude Code".',
          '**Imagens anexadas.** É possível anexar imagens aos chats; os celulares as redimensionam para os limites do modelo (0.1.16) e o desktop aceita imagens arrastadas (0.1.17).',
          '**Ditado por voz.** No iOS e no Android, a fala para a caixa de chat é transcrita localmente com um modelo de voz separado, que precisa ser baixado (0.1.16).',
          '**Ensu Packs.** Pacotes de conhecimento opcionais para respostas mais precisas, adicionados no celular na 0.1.18 e no desktop na 0.1.20.',
          '**Your Notes no desktop.** Chat com anotações Markdown locais (0.1.20), com verificação de fontes alteradas ou indisponíveis nas perguntas de acompanhamento (0.1.21).',
        ],
        note: 'As notas de versão também citam respostas aceleradas por GPU no Linux via Vulkan (0.1.18), atualizações automáticas no desktop (0.1.15) e renomear chats no desktop (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O desenvolvedor diz que o processamento ocorre no dispositivo e que o Ensu oferece "full privacy"; a página da App Store acrescenta que não exige conta e não tem rastreamento nem limites de uso.** Segundo o anúncio, sincronização e backup criptografados de ponta a ponta por uma conta Ente, com opção de hospedagem própria, estão planejados, mas não ativados nesta versão.',
          'O código baixa os modelos de repositórios do Hugging Face publicados pela Ente e o modelo de voz de models.ente.com, e os apps de desktop verificam atualizações. A [política de privacidade da Ente](https://ente.com/privacy), atualizada em 16 de outubro de 2026, não menciona o Ensu; ela diz que a Ente não coleta análises sobre o uso dos recursos do app e cita relatórios de falhas anonimizados e o Hugging Face para hospedar modelos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor e o que o código público mostra, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem os dados armazenados; como o código é público, outras pessoas podem conferir as afirmações.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários atentos à privacidade** que querem um app de chat sem conta e com código que qualquer pessoa pode ler.',
          '**Pessoas com vários dispositivos** que querem o mesmo app no iPhone, Android, Mac, Windows e Linux.',
          '**Entusiastas com hardware modesto** que aceitam modelos pequenos para perguntas simples e conversas sobre suas próprias anotações.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade das respostas e velocidade.** A PromptQuorum não executou os modelos, então qualidade, velocidade e consumo de bateria em qualquer dispositivo não são avaliados.',
          '**Termos dos modelos.** As licenças dos modelos baixados e dos arquivos convertidos hospedados pela Ente não foram analisadas; isto não é aconselhamento jurídico.',
          '**Sincronização e backup.** Não ativados nesta versão, então os chats ficam no dispositivo em que foram criados até que a sincronização planejada chegue.',
          '**Necessidades de hardware.** Nenhum requisito de RAM é publicado; os limites de memória acima vêm do código-fonte.',
          '**Estabilidade.** A versão é 0.1.22, o desenvolvedor fala em um primeiro lançamento sem compromisso de preço nem de estabilidade, e a versão web é marcada como experimental.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Chat de código aberto no dispositivo para celulares; sem versão para desktop' },
          { 'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'App do Google no dispositivo; sem versão para desktop' },
          { 'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)', 'Plataformas': 'iOS, macOS', 'Preço / licença': 'Grátis / código fechado', 'Diferença principal': 'Executa modelos abertos via MLX em dispositivos Apple; sem Android nem Windows' },
          { 'App': '[Jan](/pt/power-local-llm/jan-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / Apache 2.0 (variante)', 'Diferença principal': 'Chat offline de código aberto para desktop; sem app de celular listado' },
        ],
        note: 'Comparação feita a partir da ficha de cada app no diretório da PromptQuorum; confirme plataformas, preço e licença atuais na página própria de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Ensu é gratuito e continuará sendo?',
            a: 'O Ensu é gratuito e o anúncio fala em "zero cost", mas o desenvolvedor diz que ainda não definiu preços, então as fontes não permitem descartar mudanças futuras.',
          },
          {
            q: 'Posso usar meus próprios modelos?',
            a: 'As fontes não dizem. O app baixa os modelos do seu catálogo e nenhuma das fontes consultadas menciona importar seus próprios arquivos de modelo.',
          },
          {
            q: 'Posso continuar um chat em outro dispositivo?',
            a: 'Ainda não. A sincronização não está ativada nesta versão; o desenvolvedor planeja sincronização e backup opcionais, criptografados de ponta a ponta, por uma conta Ente, e diz que os chats locais existentes serão incluídos quando ela chegar.',
          },
          {
            q: 'Por que o link do iOS na página do Ensu diz "ente-locker"?',
            a: 'O link em ente.com/ensu aponta para o ID 6758197006 da App Store, cujo slug de URL é "ente-locker", enquanto a página do app se chama "Ensu - Ente\'s Local LLM". Esta análise vincula a página pelo ID.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Ensu é um jeito gratuito e de código aberto de executar modelos de linguagem pequenos em um celular ou computador sem conta, de um desenvolvedor que lança versões com regularidade. Em contrapartida, é uma versão 0.1.x com modelos pequenos, sincronização e backup ainda não estão disponíveis e nenhuma de suas afirmações sobre privacidade, velocidade ou qualidade pôde ser testada aqui. Serve para quem quer um app de chat local simples em vários dispositivos e se sente à vontade com um projeto jovem; quem precisa de respostas no nível dos grandes modelos na nuvem ou de histórico entre dispositivos deve esperar os recursos planejados ou escolher outra ferramenta.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Anúncio do Ensu](https://ente.com/blog/ensu/) — descrição do produto, plataformas, limitações e roteiro, datado de 2 de março de 2026.',
          '[Página de download do Ensu](https://ente.com/ensu) — versão 0.1.22 e downloads por plataforma, consultados em 24 de outubro de 2026.',
          '[Ensu 0.1.22 no GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — data de lançamento, arquivos e notas de versões anteriores.',
          '[Catálogo de modelos no código-fonte](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — modelos, tamanhos de arquivo e escolha padrão conforme a memória, ramo principal em 24 de outubro de 2026.',
          '[Ensu na App Store](https://apps.apple.com/app/id6758197006) e [no Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — descrições das lojas, requisitos do iOS e dados de versão.',
          '[Política de privacidade da Ente](https://ente.com/privacy) — coleta de dados e terceiros, atualizada em 16 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um app de chat de código aberto no dispositivo para iOS e Android.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de modelos no dispositivo do Google.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — chat no dispositivo para iPhone, iPad e Mac.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um cliente de chat offline de código aberto para desktop.',
          '[Assistentes de chat comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação de categoria à qual esta análise pertence.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-zh.webp',
    title: 'Ensu 评测：Ente Labs 推出的免费本地 AI 聊天应用',
    seoTitle: 'Ensu 评测：Ente Labs 免费本地 AI 聊天应用',
    intro:
      'Ensu 是 Ente Labs 推出的免费开源聊天应用，可在你自己的手机或电脑上运行语言模型。它支持 iOS、Android、macOS、Windows 和 Linux，另有实验性的网页版，代码托管在 GitHub。本评测基于开发方的博客文章和网站、应用商店页面、GitHub 发布说明以及源代码，核查日期为 2026 年 10 月 24 日；PromptQuorum 未实际测试该应用。',
    metaDescription:
      'Ensu 评测：Ente Labs 的免费开源聊天应用，在 iPhone、Android、Mac、Windows 和 Linux 上本地运行模型。所用模型、隐私与未解问题。',
    twitterDescription:
      'Ensu 评测：Ente Labs 的免费开源聊天应用，在手机或电脑上运行下载的模型。资料确认了什么，没有确认什么。',
    audience:
      '想要一款能在自己设备上运行的免费聊天应用，并需要了解它使用哪些模型、收费情况以及资料确认内容的读者。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ensu 评测',
    targetKeywords: [
      'ensu 评测',
      'ensu ente',
      'ente labs ensu 应用',
      '离线 llm 应用',
      '本地 ai 聊天应用',
      '开源本地 llm 应用',
      'ensu 本地 llm ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu（版本 0.1.22，2026 年 10 月 23 日发布）是 Ente Labs 的免费聊天应用，无需账号，在设备上运行下载的语言模型。** 它是开源的，开发方自己也表示其能力尚不及 ChatGPT 或 Claude Code。以下所有陈述均来自公开资料，而非我们自己的测试。',
    quickAnswerTop: {
      zh: {
        question: 'Ensu 真的能离线运行吗？它使用哪个模型？',
        answer:
          '据开发方称，可以：聊天在设备上处理，因此下载模型后无需联网。发布公告没有点名模型；开源代码列出了 LFM 2.5、Qwen 3.5 和 Gemma 4 系列的七个聊天模型，并根据设备内存选择默认模型。',
        bullets: [
          '聊天中可以附加图片。',
          '语音输入在手机上本地转写，支持 iOS 和 Android。',
          'Ensu Packs 提供可下载的知识来源；在桌面端，聊天可使用你的本地 Markdown 笔记。',
          '通过 Ente 账号进行加密同步和备份已在计划中，但尚未启用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Ensu 是什么？', anchor: 'what-is-ensu' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '模型与运行要求', anchor: 'requirements' },
      { label: '资料确认的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu 是 Ente Labs 推出的开源聊天应用，它下载一个小型语言模型，在你的手机或电脑上而不是云端作答。',
          },
          {
            type: 'plain-terms',
            text: '安装应用后，让它下载一次模型，之后无需账号即可聊天、附加图片或语音输入。',
          },
        ],
        items: [
          '维护：发布页显示 2026 年 4 月至 10 月有定期发布，最近一次为 2026 年 10 月 23 日，因此无需显示项目停更警告。',
          '模型：在应用内下载；源代码列出七个，包括 LFM 2.5、Qwen 3.5 和 Gemma 4。',
          '费用：免费且无需账号；开发方尚未公布任何定价。',
          '平台：iOS、Android、macOS、Windows 和 Linux，另有实验性网页版。',
          '开放性：源代码在 GitHub 上，仓库采用 AGPL-3.0 许可证。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于公开资料（开发方的博客和网站、应用商店页面、GitHub 发布说明和源代码），核查日期为 2026 年 10 月 24 日。PromptQuorum 未安装或测试 Ensu，因此不评估回答质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'Ensu 是什么？',
        content: [
          '**Ensu 是 Ente Labs 的聊天应用，开发方将其描述为“a chatgpt-like app that runs completely on your device with full privacy and zero cost”，即完全在设备上运行的类 ChatGPT 应用。** 公告日期为 2026 年 3 月 2 日，App Store 列出的卖家是 Ente Technologies, Inc.，App Store 首次发布于 2026 年 2 月 27 日。',
          '据公告，核心逻辑用 Rust 编写，移动端为原生应用，桌面端使用 Tauri；源代码通过 llama.cpp 运行模型。App Store 中的名称是“Ensu - Ente\'s Local LLM”。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**每个主流系统都有安装包或商店页面：App Store、Google Play，以及 macOS、Windows 和 Linux 的 GitHub Releases 下载。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'iPhone / iPad', '获取方式': '[App Store 上的 Ensu](https://apps.apple.com/app/id6758197006)，免费' },
          { '选项': 'Android', '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu)，或 [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) 上的 APK' },
          { '选项': 'macOS', '获取方式': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) 上的通用版 .dmg' },
          { '选项': 'Windows', '获取方式': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) 上的 x64 安装程序 .exe' },
          { '选项': 'Linux', '获取方式': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) 上的 AppImage、.deb（amd64）或 .rpm（x86_64）' },
          { '选项': '官方网站', '获取方式': '[ente.com/ensu](https://ente.com/ensu)' },
          { '选项': '隐私政策', '获取方式': '[ente.com/privacy](https://ente.com/privacy)' },
          { '选项': '源代码', '获取方式': '[github.com/ente-io/ente](https://github.com/ente-io/ente)，AGPL-3.0' },
        ],
        note: '评测版本：0.1.22，于 2026 年 10 月 23 日在 GitHub 和 App Store 发布；iOS 应用在下载任何模型前为 61.6 MB。开发方将网页版标注为实验性。Google Play 页面显示的更新日期为 2026 年 10 月 7 日，早于 0.1.22 的发布；GitHub 上的 APK 为 0.1.22。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '模型与运行要求',
        content: [
          '**Ente 的网站既未公布内存要求，也未列出模型清单；以下模型和默认选择来自开源代码和发布说明。**',
        ],
        columns: ['项目', '资料说明'],
        rows: [
          { '项目': '模型', '资料说明': '在应用内下载。代码列出七个：LFM 2.5 350M、LFM 2.5 VL 1.6B、Qwen 3.5 0.8B、2B 和 4B，以及 Gemma 4 E2B 和 E4B' },
          { '项目': '下载大小', '资料说明': '主文件约 0.2 GB（LFM 2.5 350M）至约 5.0 GB（Gemma 4 E4B）；视觉模型另需约 0.2 至 1.0 GB 的图像文件' },
          { '项目': '手机默认模型', '资料说明': '按设备内存：4 GB 及以下为 LFM 2.5 350M，4 GB 以上至 8 GB 为 LFM 2.5 VL 1.6B，8 GB 以上为 Gemma 4 E2B；低于 4 GB 时聊天被禁用' },
          { '项目': '桌面默认模型', '资料说明': '内存 16 GB 及以上为 Gemma 4 E4B，否则为 LFM 2.5 VL 1.6B；应用还提供几个可切换的模型' },
          { '项目': '操作系统', '资料说明': 'App Store 标明 iOS 16.0 或更高；提供 Windows x64 和 Linux amd64 / x86_64 安装包；Android 和 macOS 未标明最低要求' },
          { '项目': '网络', '资料说明': '下载模型、资料包和桌面端更新时需要联网；之后聊天据开发方称可离线进行' },
        ],
        note: '模型策略读取自开源代码主分支，日期为 2026 年 10 月 24 日，可能随任何版本变化；手机上的限制来自代码和 0.1.17 版的发布说明。',
      },
      features: {
        id: 'key-features',
        title: '资料确认的功能',
        content: [
          '**以下每一项都来自开发方的公告、发布说明或源代码；均未经独立测试。**',
        ],
        items: [
          '**本地聊天。** 对话在设备上运行；开发方未列出网页搜索，并表示该应用“not as powerful as ChatGPT or Claude Code”。',
          '**图片附件。** 聊天中可以附加图片；手机端会按模型限制缩放图片（0.1.16），桌面端支持拖入图片（0.1.17）。',
          '**语音输入。** 在 iOS 和 Android 上，聊天输入框的语音使用另行下载的语音模型在本地转写（0.1.16）。',
          '**Ensu Packs。** 可选的知识包，用于提高回答的准确性，移动端于 0.1.18 加入，桌面端于 0.1.20 加入。',
          '**桌面端 Your Notes。** 可与本地 Markdown 笔记对话（0.1.20），追问时会检查来源是否已更改或不可用（0.1.21）。',
        ],
        note: '发布说明还提到 Linux 上通过 Vulkan 的 GPU 加速回复（0.1.18）、桌面端自动更新（0.1.15）以及桌面端重命名聊天（0.1.20）。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**开发方称处理在设备上完成，Ensu 提供“full privacy”；App Store 页面补充说明无需账号，没有跟踪，也没有使用限制。** 据公告，通过 Ente 账号进行端到端加密的同步和备份（支持自托管）已在计划中，但本版本未启用。',
          '代码从 Ente 发布的 Hugging Face 仓库获取模型，从 models.ente.com 获取语音模型，桌面端会检查更新。[Ente 的隐私政策](https://ente.com/privacy)（2026 年 10 月 16 日更新）未提及 Ensu；它称 Ente 不收集应用功能使用情况的分析数据，并列出匿名化的崩溃报告以及用于模型托管的 Hugging Face。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发方的说法和公开代码所显示的内容，并非审计结果。PromptQuorum 未检查网络流量或存储的数据；由于代码公开，其他人可以核查这些说法。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**重视隐私的用户**：想要一款无需账号、代码人人可读的聊天应用。',
          '**拥有多台设备的用户**：希望在 iPhone、Android、Mac、Windows 和 Linux 上使用同一款应用。',
          '**硬件一般的尝鲜者**：接受用小型模型回答简单问题，以及针对自己笔记的对话。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**回答质量与速度。** PromptQuorum 没有运行这些模型，因此不评估任何设备上的质量、速度和电池消耗。',
          '**模型条款。** 未审查所下载模型以及 Ente 托管的转换文件的许可证；这不构成法律建议。',
          '**同步与备份。** 本版本未启用，因此在计划的同步推出之前，聊天只保存在创建它的设备上。',
          '**硬件需求。** 未公布内存要求；上文的内存阈值来自源代码。',
          '**稳定性。** 版本为 0.1.22，开发方称这是首个版本，未承诺定价或稳定性，网页版被标注为实验性。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '面向手机的开源本地聊天；无桌面版' },
          { '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '谷歌的设备端模型应用；无桌面版' },
          { '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)', '平台': 'iOS、macOS', '价格 / 许可证': '免费 / 闭源', '主要区别': '在苹果设备上通过 MLX 运行开放模型；无 Android 和 Windows 版' },
          { '应用': '[Jan](/zh/power-local-llm/jan-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / Apache 2.0（变体）', '主要区别': '面向桌面的开源离线聊天；未列出手机应用' },
        ],
        note: '对比依据各应用在 PromptQuorum 目录中的条目；请在各应用自己的页面确认最新的平台、价格和许可证。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ensu 免费吗？会一直免费吗？',
            a: 'Ensu 可免费使用，公告称其“zero cost”，但开发方表示尚未确定定价，因此仅凭这些资料无法排除日后的变化。',
          },
          {
            q: '可以使用自己的模型吗？',
            a: '资料没有说明。应用下载其目录中的模型，所查阅的资料均未提及导入自己的模型文件。',
          },
          {
            q: '可以在另一台设备上继续聊天吗？',
            a: '目前不行。本版本未启用同步；开发方计划通过 Ente 账号提供可选的端到端加密同步和备份，并表示功能推出后会纳入现有的本地聊天。',
          },
          {
            q: '为什么 Ensu 页面上的 iOS 链接写着“ente-locker”？',
            a: 'ente.com/ensu 上的链接指向 App Store ID 6758197006，其 URL 别名为“ente-locker”，而页面本身的标题是“Ensu - Ente\'s Local LLM”。本评测通过 ID 链接该页面。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Ensu 是一种免费、开源、无需账号的方式，可在手机或电脑上运行小型语言模型，开发方定期发布新版本。另一方面，它仍是 0.1.x 版本，模型较小，同步和备份尚不可用，其隐私、速度和质量方面的说法在此均无法测试。它适合想要一款覆盖多种设备的简单本地聊天应用、并能接受年轻项目的人；需要大型云端模型水平的回答或跨设备聊天记录的人，应等待计划中的功能或选择其他工具。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Ensu 公告](https://ente.com/blog/ensu/) — 产品介绍、平台、局限和路线图，日期为 2026 年 3 月 2 日。',
          '[Ensu 下载页面](https://ente.com/ensu) — 0.1.22 版本及各平台下载，核查日期为 2026 年 10 月 24 日。',
          '[GitHub Releases 上的 Ensu 0.1.22](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — 发布日期、文件以及早期版本的发布说明。',
          '[源代码中的模型目录](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — 模型、文件大小以及按设备内存选择的默认模型，2026 年 10 月 24 日的主分支。',
          '[App Store 上的 Ensu](https://apps.apple.com/app/id6758197006) 和 [Google Play 上的 Ensu](https://play.google.com/store/apps/details?id=io.ente.ensu) — 商店说明、iOS 要求和版本数据。',
          '[Ente 隐私政策](https://ente.com/privacy) — 数据收集与第三方，2026 年 10 月 16 日更新。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的开源本地聊天应用。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — 谷歌的设备端模型应用。',
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 面向 iPhone、iPad 和 Mac 的本地聊天。',
          '[Jan 评测](/zh/power-local-llm/jan-review) — 面向桌面的开源离线聊天客户端。',
          '[聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 本评测所属的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-ar.webp',
    title: 'مراجعة Ensu: تطبيق دردشة مجاني بالذكاء الاصطناعي على جهازك من Ente Labs',
    seoTitle: 'مراجعة Ensu: دردشة ذكاء اصطناعي مجانية من Ente Labs',
    intro:
      'Ensu تطبيق دردشة مجاني ومفتوح المصدر من Ente Labs يشغّل النماذج اللغوية على هاتفك أو حاسوبك مباشرة. يتوفر لأنظمة iOS وAndroid وmacOS وWindows وLinux، إضافة إلى نسخة ويب تجريبية، ورمزه المصدري على GitHub. تستند هذه المراجعة إلى مقال المطوّر ومدونته وموقعه وصفحات المتاجر وملاحظات الإصدار على GitHub والرمز المصدري، وقد روجعت في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Ensu: تطبيق دردشة مجاني ومفتوح المصدر من Ente Labs يشغّل النماذج على iPhone وAndroid وMac وWindows وLinux. النماذج والخصوصية وما بقي دون تحقق.',
    twitterDescription:
      'مراجعة Ensu: تطبيق دردشة مجاني ومفتوح المصدر من Ente Labs يشغّل نماذج منزّلة على هاتفك أو حاسوبك. ما تؤكده المصادر وما لا تؤكده.',
    audience:
      'من يريدون تطبيق دردشة مجانيًا يعمل على أجهزتهم ويحتاجون إلى معرفة النماذج التي يستخدمها وتكلفته وما تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Ensu',
    targetKeywords: [
      'مراجعة ensu',
      'ensu ente',
      'تطبيق ente labs ensu',
      'تطبيق llm دون إنترنت',
      'تطبيق دردشة ذكاء اصطناعي على الجهاز',
      'تطبيق llm محلي مفتوح المصدر',
      'ensu llm محلي ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu (الإصدار 0.1.22، صدر في 23 أكتوبر 2026) تطبيق دردشة مجاني من Ente Labs يشغّل على الجهاز نماذج لغوية منزّلة، دون حاجة إلى حساب.** وهو مفتوح المصدر، ويقول المطوّر نفسه إنه لم يبلغ بعد قدرة ChatGPT أو Claude Code. كل ما يرد هنا مصدره معلومات عامة، لا اختباراتنا الخاصة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Ensu فعلًا دون إنترنت، وأي نموذج يستخدم؟',
        answer:
          'بحسب المطوّر نعم: تُعالَج المحادثات على الجهاز، فيعمل التطبيق دون إنترنت بعد تنزيل نموذج. لا يذكر الإعلان أي نموذج؛ أما الرمز المفتوح المصدر فيسرد سبعة نماذج دردشة من عائلات LFM 2.5 وQwen 3.5 وGemma 4 ويختار نموذجًا افتراضيًا بحسب ذاكرة الجهاز.',
        bullets: [
          'يمكن إرفاق صور بالمحادثات.',
          'يُحوَّل الإدخال الصوتي إلى نص على الهاتف نفسه في iOS وAndroid.',
          'تضيف حزم Ensu Packs مصادر معرفة قابلة للتنزيل؛ وعلى سطح المكتب يمكن للمحادثات استخدام ملاحظاتك المحلية بصيغة Markdown.',
          'المزامنة والنسخ الاحتياطي المشفّران عبر حساب Ente مخطَّط لهما لكنهما غير مفعّلين بعد.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Ensu؟', anchor: 'what-is-ensu' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'النماذج والمتطلبات', anchor: 'requirements' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu تطبيق دردشة مفتوح المصدر من Ente Labs ينزّل نموذجًا لغويًا صغيرًا ويجيب على هاتفك أو حاسوبك بدلًا من السحابة.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق وتتركه ينزّل نموذجًا مرة واحدة، ثم تدردش وترفق الصور أو تملي صوتيًا دون حساب.',
          },
        ],
        items: [
          'الصيانة: تُظهر صفحة الإصدارات إصدارات منتظمة من أبريل إلى أكتوبر 2026، وآخرها في 23 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'النماذج: تُنزَّل داخل التطبيق؛ ويسرد الرمز المصدري سبعة منها، من بينها LFM 2.5 وQwen 3.5 وGemma 4.',
          'التكلفة: مجاني ودون حساب؛ ولم يعلن المطوّر أي أسعار.',
          'المنصات: iOS وAndroid وmacOS وWindows وLinux، إضافة إلى نسخة ويب تجريبية.',
          'الانفتاح: الرمز المصدري على GitHub في مستودع مرخّص بموجب AGPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى مصادر عامة (مدونة المطوّر وموقعه، وصفحات المتاجر، وملاحظات إصدار GitHub، والرمز المصدري)، روجعت في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Ensu ولم تقِس أداءه، ولذلك لا تُقيَّم جودة الإجابات ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'ما هو Ensu؟',
        content: [
          '**Ensu تطبيق دردشة من Ente Labs يصفه المطوّر بأنه "a chatgpt-like app that runs completely on your device with full privacy and zero cost"، أي تطبيق شبيه بـ ChatGPT يعمل بالكامل على جهازك.** تاريخ الإعلان 2 مارس 2026، ويُدرج App Store البائع Ente Technologies, Inc.، وصدر أول إصدار في App Store في 27 فبراير 2026.',
          'بحسب الإعلان، كُتب المنطق الأساسي بلغة Rust، وتطبيقات الجوال أصلية، وتطبيقات سطح المكتب تستخدم Tauri؛ ويشغّل الرمز المصدري النماذج عبر llama.cpp. عنوان التطبيق في App Store هو "Ensu - Ente\'s Local LLM".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**يتوفر مثبّت أو صفحة متجر لكل نظام شائع: App Store وGoogle Play وتنزيلات GitHub Releases لأنظمة macOS وWindows وLinux.**',
        ],
        columns: ['الخيار', 'طريقة الحصول عليه'],
        rows: [
          { 'الخيار': 'iPhone / iPad', 'طريقة الحصول عليه': '[Ensu على App Store](https://apps.apple.com/app/id6758197006)، مجاني' },
          { 'الخيار': 'Android', 'طريقة الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) أو ملف APK على [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'الخيار': 'macOS', 'طريقة الحصول عليه': 'ملف .dmg شامل على [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'الخيار': 'Windows', 'طريقة الحصول عليه': 'مثبّت .exe بنسخة x64 على [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'الخيار': 'Linux', 'طريقة الحصول عليه': 'AppImage أو .deb (amd64) أو .rpm (x86_64) على [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)' },
          { 'الخيار': 'الموقع', 'طريقة الحصول عليه': '[ente.com/ensu](https://ente.com/ensu)' },
          { 'الخيار': 'سياسة الخصوصية', 'طريقة الحصول عليه': '[ente.com/privacy](https://ente.com/privacy)' },
          { 'الخيار': 'الرمز المصدري', 'طريقة الحصول عليه': '[github.com/ente-io/ente](https://github.com/ente-io/ente)، AGPL-3.0' },
        ],
        note: 'الإصدار الذي روجع: 0.1.22، صدر في 23 أكتوبر 2026 على GitHub وApp Store؛ وحجم تطبيق iOS 61.6 MB قبل تنزيل أي نموذج. ويصف المطوّر نسخة الويب بأنها تجريبية. أظهرت صفحة Google Play تاريخ تحديث هو 7 أكتوبر 2026، أي قبل صدور 0.1.22؛ أما ملف APK على GitHub فيحمل الإصدار 0.1.22.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'النماذج والمتطلبات',
        content: [
          '**لا تنشر Ente على موقعها متطلبات الذاكرة ولا قائمة بالنماذج؛ والنماذج والاختيارات الافتراضية أدناه مأخوذة من الرمز المفتوح المصدر وملاحظات الإصدار.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'النماذج', 'ما تقوله المصادر': 'تُنزَّل داخل التطبيق. يسرد الرمز سبعة: LFM 2.5 350M وLFM 2.5 VL 1.6B وQwen 3.5 بحجم 0.8B و2B و4B وGemma 4 E2B وE4B' },
          { 'البند': 'حجم التنزيل', 'ما تقوله المصادر': 'الملف الرئيسي من نحو 0.2 GB (LFM 2.5 350M) إلى نحو 5.0 GB (Gemma 4 E4B)؛ وتضيف نماذج الرؤية ملف صور بنحو 0.2 إلى 1.0 GB' },
          { 'البند': 'الافتراضي على الهاتف', 'ما تقوله المصادر': 'بحسب الذاكرة: LFM 2.5 350M حتى 4 GB، وLFM 2.5 VL 1.6B فوق 4 GB حتى 8 GB، وGemma 4 E2B فوق 8 GB؛ وتُعطَّل الدردشة تحت 4 GB' },
          { 'البند': 'الافتراضي على سطح المكتب', 'ما تقوله المصادر': 'Gemma 4 E4B عند 16 GB من الذاكرة أو أكثر، وإلا LFM 2.5 VL 1.6B؛ ويتيح التطبيق التبديل إلى بضعة نماذج أخرى' },
          { 'البند': 'أنظمة التشغيل', 'ما تقوله المصادر': 'iOS 16.0 أو أحدث بحسب App Store؛ وحزم لنظامي Windows x64 وLinux amd64 / x86_64؛ ولا يُذكر حد أدنى لنظامي Android وmacOS' },
          { 'البند': 'الإنترنت', 'ما تقوله المصادر': 'مطلوب لتنزيل النماذج والحزم وتحديثات سطح المكتب؛ وبعد ذلك تعمل الدردشة دون إنترنت بحسب المطوّر' },
        ],
        note: 'قُرئت سياسة النماذج من الفرع الرئيسي للرمز المفتوح المصدر في 24 أكتوبر 2026، وقد تتغير مع أي إصدار؛ أما حدود الهواتف فمصدرها الرمز وملاحظات الإصدار 0.1.17.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من إعلان المطوّر أو ملاحظات الإصدار أو الرمز المصدري؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**دردشة محلية.** تعمل المحادثات على الجهاز؛ ولا يذكر المطوّر وجود بحث على الويب، ويقول إن التطبيق "not as powerful as ChatGPT or Claude Code".',
          '**إرفاق الصور.** يمكن إرفاق صور بالمحادثات؛ وتُصغَّر على الهواتف إلى حدود النموذج (0.1.16)، ويقبل سطح المكتب سحب الصور وإفلاتها (0.1.17).',
          '**الإملاء الصوتي.** في iOS وAndroid يُحوَّل الكلام المدخل إلى حقل الدردشة إلى نص محليًا بنموذج صوتي منفصل يُنزَّل (0.1.16).',
          '**Ensu Packs.** حزم معرفة اختيارية لإجابات أدق، أُضيفت إلى الجوال في 0.1.18 وإلى سطح المكتب في 0.1.20.',
          '**Your Notes على سطح المكتب.** دردشة مع ملاحظات Markdown محلية (0.1.20)، مع التحقق من المصادر المتغيرة أو غير المتاحة في الأسئلة اللاحقة (0.1.21).',
        ],
        note: 'تذكر ملاحظات الإصدار أيضًا ردودًا مسرَّعة بوحدة GPU على Linux عبر Vulkan (0.1.18)، وتحديثات تلقائية على سطح المكتب (0.1.15)، وإعادة تسمية المحادثات على سطح المكتب (0.1.20).',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يقول المطوّر إن المعالجة تتم على الجهاز وإن Ensu يوفر "full privacy"؛ وتضيف صفحة App Store أنه لا يتطلب حسابًا ولا يتتبع المستخدم ولا يفرض حدود استخدام.** وبحسب الإعلان فإن المزامنة والنسخ الاحتياطي المشفّرين من طرف إلى طرف عبر حساب Ente، مع إمكانية الاستضافة الذاتية، مخطَّط لهما لكنهما غير مفعّلين في هذا الإصدار.',
          'يجلب الرمز النماذج من مستودعات Hugging Face التي تنشرها Ente، ويجلب النموذج الصوتي من models.ente.com، وتتحقق تطبيقات سطح المكتب من التحديثات. أما [سياسة خصوصية Ente](https://ente.com/privacy) المحدَّثة في 16 أكتوبر 2026 فلا تذكر Ensu؛ وتقول إن Ente لا تجمع تحليلات عن استخدام ميزات التطبيق، وتذكر تقارير أعطال مجهولة الهوية وHugging Face لاستضافة النماذج.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه أقوال المطوّر وما يظهره الرمز العام، لا نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا البيانات المخزّنة؛ وبما أن الرمز عام فبإمكان غيرنا التحقق من هذه الادعاءات.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المهتمون بالخصوصية** ممن يريدون تطبيق دردشة دون حساب ويمكن لأي شخص قراءة رمزه.',
          '**أصحاب الأجهزة المتعددة** ممن يريدون التطبيق نفسه على iPhone وAndroid وMac وWindows وLinux.',
          '**المجرّبون بأجهزة متواضعة** ممن يقبلون بنماذج صغيرة لأسئلة بسيطة ولمحادثات حول ملاحظاتهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الإجابات والسرعة.** لم تشغّل PromptQuorum النماذج، فلا تُقيَّم الجودة ولا السرعة ولا استهلاك البطارية على أي جهاز.',
          '**شروط النماذج.** لم تُراجَع تراخيص النماذج المنزّلة ولا الملفات المحوّلة التي تستضيفها Ente؛ وهذا ليس استشارة قانونية.',
          '**المزامنة والنسخ الاحتياطي.** غير مفعّلين في هذا الإصدار، فتبقى المحادثات على الجهاز الذي أُنشئت عليه إلى أن تصدر المزامنة المخطَّط لها.',
          '**احتياجات العتاد.** لا يُنشر أي متطلب للذاكرة؛ وحدود الذاكرة أعلاه مأخوذة من الرمز المصدري.',
          '**الاستقرار.** الإصدار هو 0.1.22، ويصفه المطوّر بأنه إصدار أول دون التزام بالأسعار أو الاستقرار، وتُوسَم نسخة الويب بأنها تجريبية.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الأبرز': 'دردشة مفتوحة المصدر على الهاتف؛ بلا نسخة لسطح المكتب' },
          { 'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'تطبيق Google للنماذج على الجهاز؛ بلا نسخة لسطح المكتب' },
          { 'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)', 'المنصات': 'iOS وmacOS', 'السعر / الترخيص': 'مجاني / مغلق المصدر', 'الفرق الأبرز': 'يشغّل نماذج مفتوحة عبر MLX على أجهزة Apple؛ بلا Android أو Windows' },
          { 'التطبيق': '[Jan](/ar/power-local-llm/jan-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الترخيص': 'مجاني / Apache 2.0 (نسخة معدّلة)', 'الفرق الأبرز': 'دردشة مفتوحة المصدر دون إنترنت لسطح المكتب؛ لا يُدرج تطبيق هاتف' },
        ],
        note: 'المقارنة مبنية على إدخال كل تطبيق في دليل PromptQuorum؛ تحقق من المنصات والسعر والترخيص الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Ensu مجاني وهل سيبقى كذلك؟',
            a: 'Ensu مجاني الاستخدام ويصفه الإعلان بأنه "zero cost"، لكن المطوّر يقول إنه لم يحدد الأسعار بعد، فلا تتيح المصادر استبعاد تغييرات لاحقة.',
          },
          {
            q: 'هل يمكنني استخدام نماذجي الخاصة؟',
            a: 'لا تذكر المصادر ذلك. ينزّل التطبيق النماذج الموجودة في كتالوجه، ولا يذكر أي مصدر مما روجع استيراد ملفات نماذج خاصة بك.',
          },
          {
            q: 'هل يمكنني متابعة محادثة على جهاز آخر؟',
            a: 'ليس بعد. المزامنة غير مفعّلة في هذا الإصدار؛ ويخطط المطوّر لمزامنة ونسخ احتياطي اختياريين ومشفّرين من طرف إلى طرف عبر حساب Ente، ويقول إن المحادثات المحلية الموجودة ستُضمَّن عند صدورهما.',
          },
          {
            q: 'لماذا يحمل رابط iOS في صفحة Ensu عبارة "ente-locker"؟',
            a: 'يشير الرابط في ente.com/ensu إلى معرّف App Store رقم 6758197006، ومعرّف الرابط النصي فيه هو "ente-locker" بينما عنوان الصفحة نفسها "Ensu - Ente\'s Local LLM". تربط هذه المراجعة الصفحة بمعرّفها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Ensu وسيلة مجانية ومفتوحة المصدر لتشغيل نماذج لغوية صغيرة على هاتف أو حاسوب دون حساب، من مطوّر يصدر إصدارات منتظمة. في المقابل هو إصدار 0.1.x بنماذج صغيرة، والمزامنة والنسخ الاحتياطي غير متاحين بعد، ولم يمكن اختبار أي من ادعاءاته عن الخصوصية أو السرعة أو الجودة هنا. يناسب من يريدون تطبيق دردشة محليًا بسيطًا عبر أجهزة كثيرة ولا يمانعون مشروعًا حديث العهد؛ ومن يحتاج إلى إجابات بمستوى نماذج السحابة الكبيرة أو سجل محادثات عبر الأجهزة فعليه انتظار الميزات المخطَّط لها أو اختيار أداة أخرى.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[إعلان Ensu](https://ente.com/blog/ensu/) — وصف المنتج والمنصات والقيود وخارطة الطريق، بتاريخ 2 مارس 2026.',
          '[صفحة تنزيل Ensu](https://ente.com/ensu) — الإصدار 0.1.22 والتنزيلات لكل منصة، روجعت في 24 أكتوبر 2026.',
          '[Ensu 0.1.22 على GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — تاريخ الإصدار والملفات وملاحظات الإصدارات السابقة.',
          '[كتالوج النماذج في الرمز المصدري](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — النماذج وأحجام الملفات والاختيار الافتراضي بحسب ذاكرة الجهاز، الفرع الرئيسي في 24 أكتوبر 2026.',
          '[Ensu على App Store](https://apps.apple.com/app/id6758197006) و[على Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) — أوصاف المتاجر ومتطلبات iOS وبيانات الإصدار.',
          '[سياسة خصوصية Ente](https://ente.com/privacy) — جمع البيانات والأطراف الثالثة، حُدّثت في 16 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — تطبيق دردشة مفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google للنماذج على الجهاز.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — دردشة على الجهاز لأجهزة iPhone وiPad وMac.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — عميل دردشة مفتوح المصدر دون إنترنت لسطح المكتب.',
          '[مساعدو الدردشة: مقارنة](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ensu-review-hero-ko.webp',
    title: 'Ensu 리뷰: Ente Labs의 무료 온디바이스 AI 채팅 앱',
    seoTitle: 'Ensu 리뷰: Ente Labs 무료 온디바이스 AI 채팅',
    intro:
      'Ensu는 Ente Labs가 만든 무료 오픈소스 채팅 앱으로, 언어 모델을 사용자의 스마트폰이나 컴퓨터에서 직접 실행합니다. iOS, Android, macOS, Windows, Linux를 지원하며 실험적인 웹 버전도 있고, 코드는 GitHub에 공개되어 있습니다. 이 리뷰는 개발사의 블로그 글과 웹사이트, 스토어 페이지, GitHub 릴리스 노트, 소스 코드를 바탕으로 2026년 10월 24일에 확인한 내용이며, PromptQuorum은 앱을 직접 사용해 테스트하지 않았습니다.',
    metaDescription:
      'Ensu 리뷰: Ente Labs의 무료 오픈소스 채팅 앱. iPhone, Android, Mac, Windows, Linux에서 모델을 기기 내 실행합니다. 모델과 개인정보를 정리했습니다.',
    twitterDescription:
      'Ensu 리뷰: Ente Labs의 무료 오픈소스 채팅 앱이 내려받은 모델을 스마트폰이나 컴퓨터에서 실행합니다. 자료가 확인한 것과 확인하지 못한 것.',
    audience:
      '자신의 기기에서 실행되는 무료 채팅 앱을 찾으면서 어떤 모델을 쓰는지, 비용은 얼마인지, 자료가 무엇을 확인했는지 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ensu 리뷰',
    targetKeywords: [
      'ensu 리뷰',
      'ensu ente',
      'ente labs ensu 앱',
      '오프라인 llm 앱',
      '온디바이스 ai 채팅 앱',
      '오픈소스 로컬 llm 앱',
      'ensu 로컬 llm ios android',
    ],
    current_models_mentioned: ['LFM 2.5', 'Qwen 3.5', 'Gemma 4'],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Ensu(버전 0.1.22, 2026년 10월 23일 출시)는 Ente Labs의 무료 채팅 앱으로, 계정 없이 내려받은 언어 모델을 기기에서 실행합니다.** 오픈소스이며, 개발사 스스로도 아직 ChatGPT나 Claude Code만큼 강력하지는 않다고 밝혔습니다. 여기에 적힌 모든 내용은 공개 자료에서 나온 것이며, 자체 테스트 결과가 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Ensu는 정말 오프라인으로 동작하며 어떤 모델을 사용합니까?',
        answer:
          '개발사에 따르면 그렇습니다. 채팅은 기기에서 처리되므로 모델을 내려받은 뒤에는 인터넷 없이 동작합니다. 발표 글에는 모델 이름이 없고, 오픈소스 코드에는 LFM 2.5, Qwen 3.5, Gemma 4 계열의 채팅 모델 7개가 나열되어 있으며 기기 메모리에 따라 기본 모델이 정해집니다.',
        bullets: [
          '채팅에 이미지를 첨부할 수 있습니다.',
          '음성 입력은 iOS와 Android에서 휴대폰 안에서 텍스트로 변환됩니다.',
          'Ensu Packs로 내려받을 수 있는 지식 소스를 추가할 수 있으며, 데스크톱에서는 로컬 마크다운 노트를 활용할 수 있습니다.',
          'Ente 계정을 통한 암호화 동기화와 백업은 계획 중이지만 아직 활성화되어 있지 않습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Ensu란?', anchor: 'what-is-ensu' },
      { label: '구하는 방법', anchor: 'get-it' },
      { label: '모델과 요구 사항', anchor: 'requirements' },
      { label: '자료로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ensu는 Ente Labs의 오픈소스 채팅 앱으로, 작은 언어 모델을 내려받아 클라우드가 아닌 스마트폰이나 컴퓨터에서 답변합니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받게 하면, 계정 없이 채팅하고 이미지를 첨부하거나 음성으로 입력할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 릴리스 페이지에 2026년 4월부터 10월까지 정기 릴리스가 보이고 가장 최근은 2026년 10월 23일이므로, 개발 중단 경고는 해당되지 않습니다.',
          '모델: 앱 안에서 내려받으며, 소스 코드에는 LFM 2.5, Qwen 3.5, Gemma 4 등 7개가 나열되어 있습니다.',
          '비용: 무료이며 계정이 필요 없고, 개발사는 요금을 발표하지 않았습니다.',
          '플랫폼: iOS, Android, macOS, Windows, Linux와 실험적인 웹 버전.',
          '공개 여부: 소스 코드는 GitHub에 있으며 저장소 라이선스는 AGPL-3.0입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개 자료(개발사의 블로그와 사이트, 스토어 페이지, GitHub 릴리스 노트, 소스 코드)를 바탕으로 2026년 10월 24일에 확인했습니다. PromptQuorum은 Ensu를 설치하거나 측정하지 않았으므로 답변 품질과 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-ensu',
        title: 'Ensu란?',
        content: [
          '**Ensu는 Ente Labs의 채팅 앱으로, 개발사는 이를 "a chatgpt-like app that runs completely on your device with full privacy and zero cost"(기기에서 완전히 실행되는 ChatGPT 같은 앱)라고 설명합니다.** 발표는 2026년 3월 2일자이고, App Store의 판매자는 Ente Technologies, Inc.이며, App Store 첫 출시는 2026년 2월 27일입니다.',
          '발표에 따르면 핵심 로직은 Rust로 작성되었고 모바일 앱은 네이티브, 데스크톱 앱은 Tauri를 사용합니다. 소스 코드에서는 llama.cpp로 모델을 실행합니다. App Store에서의 이름은 "Ensu - Ente\'s Local LLM"입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**주요 운영체제마다 설치 파일이나 스토어 페이지가 있습니다. App Store, Google Play, 그리고 macOS·Windows·Linux용 GitHub Releases 다운로드입니다.**',
        ],
        columns: ['항목', '구하는 방법'],
        rows: [
          { '항목': 'iPhone / iPad', '구하는 방법': '[App Store의 Ensu](https://apps.apple.com/app/id6758197006), 무료' },
          { '항목': 'Android', '구하는 방법': '[Google Play](https://play.google.com/store/apps/details?id=io.ente.ensu) 또는 [GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)의 APK' },
          { '항목': 'macOS', '구하는 방법': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)의 유니버설 .dmg' },
          { '항목': 'Windows', '구하는 방법': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)의 x64 설치 .exe' },
          { '항목': 'Linux', '구하는 방법': '[GitHub Releases](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22)의 AppImage, .deb(amd64), .rpm(x86_64)' },
          { '항목': '웹사이트', '구하는 방법': '[ente.com/ensu](https://ente.com/ensu)' },
          { '항목': '개인정보 처리방침', '구하는 방법': '[ente.com/privacy](https://ente.com/privacy)' },
          { '항목': '소스 코드', '구하는 방법': '[github.com/ente-io/ente](https://github.com/ente-io/ente), AGPL-3.0' },
        ],
        note: '확인한 버전: 0.1.22, 2026년 10월 23일 GitHub와 App Store에 출시되었습니다. iOS 앱은 모델을 내려받기 전 61.6 MB입니다. 개발사는 웹 버전을 실험적이라고 표시합니다. Google Play 페이지의 업데이트 날짜는 2026년 10월 7일로 0.1.22 출시보다 앞섰으며, GitHub의 APK는 0.1.22입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '모델과 요구 사항',
        content: [
          '**Ente는 웹사이트에 RAM 요구 사항도 모델 목록도 게시하지 않습니다. 아래의 모델과 기본 선택은 오픈소스 코드와 릴리스 노트에서 나온 것입니다.**',
        ],
        columns: ['항목', '자료의 내용'],
        rows: [
          { '항목': '모델', '자료의 내용': '앱 안에서 내려받습니다. 코드에는 7개가 있습니다: LFM 2.5 350M, LFM 2.5 VL 1.6B, Qwen 3.5 0.8B·2B·4B, Gemma 4 E2B·E4B' },
          { '항목': '다운로드 크기', '자료의 내용': '메인 파일은 약 0.2 GB(LFM 2.5 350M)에서 약 5.0 GB(Gemma 4 E4B)까지이며, 비전 모델은 약 0.2~1.0 GB의 이미지 파일이 추가됩니다' },
          { '항목': '휴대폰 기본값', '자료의 내용': '메모리에 따라: 4 GB 이하는 LFM 2.5 350M, 4 GB 초과~8 GB는 LFM 2.5 VL 1.6B, 8 GB 초과는 Gemma 4 E2B이며 4 GB 미만에서는 채팅이 비활성화됩니다' },
          { '항목': '데스크톱 기본값', '자료의 내용': '메모리 16 GB 이상이면 Gemma 4 E4B, 그렇지 않으면 LFM 2.5 VL 1.6B이며 앱에서 다른 모델 몇 가지로 바꿀 수 있습니다' },
          { '항목': '운영체제', '자료의 내용': 'App Store 기준 iOS 16.0 이상, Windows x64와 Linux amd64 / x86_64 패키지가 있으며 Android와 macOS의 최소 요구 사항은 표시되어 있지 않습니다' },
          { '항목': '인터넷', '자료의 내용': '모델, 팩, 데스크톱 업데이트를 내려받을 때 필요하며, 그 뒤의 채팅은 개발사에 따르면 오프라인에서 가능합니다' },
        ],
        note: '모델 정책은 2026년 10월 24일 오픈소스 코드의 메인 브랜치에서 읽은 것으로 릴리스마다 바뀔 수 있으며, 휴대폰 제한은 코드와 0.1.17 릴리스 노트에서 나왔습니다.',
      },
      features: {
        id: 'key-features',
        title: '자료로 확인된 기능',
        content: [
          '**아래 항목은 모두 개발사의 발표, 릴리스 노트, 소스 코드에서 나온 것이며 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**로컬 채팅.** 대화는 기기에서 실행됩니다. 개발사는 웹 검색을 제공한다고 밝히지 않았고, 앱이 "not as powerful as ChatGPT or Claude Code"라고 말합니다.',
          '**이미지 첨부.** 채팅에 이미지를 첨부할 수 있습니다. 휴대폰은 모델 한도에 맞게 이미지를 줄이고(0.1.16), 데스크톱은 이미지 끌어놓기를 지원합니다(0.1.17).',
          '**음성 입력.** iOS와 Android에서는 채팅 입력란의 음성을 별도로 내려받는 음성 모델로 기기에서 변환합니다(0.1.16).',
          '**Ensu Packs.** 더 정확한 답변을 위한 선택형 지식 팩으로, 모바일에는 0.1.18, 데스크톱에는 0.1.20에서 추가되었습니다.',
          '**데스크톱의 Your Notes.** 로컬 마크다운 노트와 대화할 수 있으며(0.1.20), 후속 질문에서는 변경되었거나 사용할 수 없는 소스를 확인합니다(0.1.21).',
        ],
        note: '릴리스 노트에는 Linux에서 Vulkan을 통한 GPU 가속 응답(0.1.18), 데스크톱 자동 업데이트(0.1.15), 데스크톱에서 채팅 이름 바꾸기(0.1.20)도 나와 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**개발사는 처리가 기기에서 이루어지며 Ensu가 "full privacy"를 제공한다고 밝힙니다. App Store 설명에는 계정이 필요 없고 추적과 사용 제한이 없다고 되어 있습니다.** 발표에 따르면 Ente 계정을 통한 종단 간 암호화 동기화와 백업(자체 호스팅 포함)은 계획 중이지만 이번 릴리스에서는 활성화되어 있지 않습니다.',
          '코드는 Ente가 게시한 Hugging Face 저장소에서 모델을, models.ente.com에서 음성 모델을 가져오며, 데스크톱 앱은 업데이트를 확인합니다. [Ente의 개인정보 처리방침](https://ente.com/privacy)(2026년 10월 16일 갱신)은 Ensu를 언급하지 않으며, 앱 기능 사용에 관한 분석은 수집하지 않는다고 밝히고 익명화된 충돌 보고서와 모델 호스팅용 Hugging Face를 나열합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 진술과 공개 코드가 보여 주는 내용이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 저장된 데이터를 검사하지 않았습니다. 코드가 공개되어 있으므로 다른 사람이 주장을 확인할 수 있습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**개인정보를 중시하는 사용자**: 누구나 코드를 읽을 수 있는, 계정이 필요 없는 채팅 앱을 원하는 분.',
          '**여러 기기를 쓰는 사용자**: iPhone, Android, Mac, Windows, Linux에서 같은 앱을 쓰고 싶은 분.',
          '**평범한 사양으로 시험해 보려는 분**: 간단한 질문과 자신의 노트에 대한 채팅에 작은 모델이면 충분한 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**답변 품질과 속도.** PromptQuorum은 모델을 실행하지 않았으므로 어떤 기기에서도 품질, 속도, 배터리 소모를 평가하지 않았습니다.',
          '**모델 이용 조건.** 내려받는 모델과 Ente가 호스팅하는 변환 파일의 라이선스는 검토하지 않았으며, 법률 자문이 아닙니다.',
          '**동기화와 백업.** 이번 릴리스에서는 활성화되지 않아, 계획된 동기화가 나올 때까지 채팅은 만든 기기에만 남습니다.',
          '**하드웨어 요구 사항.** RAM 요구 사항은 게시되지 않았으며, 위의 메모리 기준은 소스 코드에서 나온 것입니다.',
          '**안정성.** 버전은 0.1.22이며, 개발사는 첫 릴리스로서 요금이나 안정성을 약속하지 않았다고 밝힙니다. 웹 버전은 실험적이라고 표시되어 있습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          { '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '주요 차이': '휴대폰용 오픈소스 온디바이스 채팅, 데스크톱 버전 없음' },
          { '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / Apache 2.0', '주요 차이': 'Google의 온디바이스 모델 앱, 데스크톱 버전 없음' },
          { '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)', '플랫폼': 'iOS, macOS', '가격 / 라이선스': '무료 / 비공개 소스', '주요 차이': 'Apple 기기에서 MLX로 오픈 모델 실행, Android와 Windows 없음' },
          { '앱': '[Jan](/ko/power-local-llm/jan-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / Apache 2.0(변형)', '주요 차이': '데스크톱용 오픈소스 오프라인 채팅, 휴대폰 앱은 목록에 없음' },
        ],
        note: '각 앱의 PromptQuorum 디렉터리 항목을 바탕으로 비교했습니다. 최신 플랫폼, 가격, 라이선스는 각 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ensu는 무료이며 앞으로도 무료입니까?',
            a: 'Ensu는 무료로 사용할 수 있고 발표에서도 "zero cost"라고 하지만, 개발사는 요금을 아직 정하지 않았다고 밝혀 자료만으로는 이후 변경 가능성을 배제할 수 없습니다.',
          },
          {
            q: '직접 가져온 모델을 쓸 수 있습니까?',
            a: '자료에는 나와 있지 않습니다. 앱은 카탈로그에 있는 모델을 내려받으며, 확인한 자료 어디에도 직접 모델 파일을 가져오는 기능은 언급되지 않습니다.',
          },
          {
            q: '다른 기기에서 채팅을 이어 갈 수 있습니까?',
            a: '아직은 아닙니다. 이번 릴리스에서는 동기화가 활성화되어 있지 않습니다. 개발사는 Ente 계정을 통한 선택형 종단 간 암호화 동기화와 백업을 계획하고 있으며, 출시되면 기존 로컬 채팅도 포함된다고 합니다.',
          },
          {
            q: 'Ensu 페이지의 iOS 링크에 "ente-locker"라고 적힌 이유는 무엇입니까?',
            a: 'ente.com/ensu의 링크는 App Store ID 6758197006을 가리키며 URL 슬러그는 "ente-locker"이지만 페이지 제목은 "Ensu - Ente\'s Local LLM"입니다. 이 리뷰는 ID로 해당 페이지를 연결합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Ensu는 계정 없이 작은 언어 모델을 스마트폰이나 컴퓨터에서 실행할 수 있는 무료 오픈소스 방법이며, 개발사는 정기적으로 릴리스를 내놓습니다. 반면 0.1.x 릴리스이고 모델이 작으며 동기화와 백업은 아직 제공되지 않고, 개인정보·속도·품질에 관한 주장은 여기서 테스트할 수 없었습니다. 여러 기기에서 쓸 수 있는 간단한 로컬 채팅 앱을 원하고 젊은 프로젝트를 받아들일 수 있는 분께 적합합니다. 대형 클라우드 모델 수준의 답변이나 기기 간 채팅 기록이 필요하다면 계획된 기능을 기다리거나 다른 도구를 선택하는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ensu 발표 글](https://ente.com/blog/ensu/) — 제품 설명, 플랫폼, 한계, 로드맵. 2026년 3월 2일자.',
          '[Ensu 다운로드 페이지](https://ente.com/ensu) — 버전 0.1.22와 플랫폼별 다운로드. 2026년 10월 24일 확인.',
          '[GitHub Releases의 Ensu 0.1.22](https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22) — 출시일, 배포 파일, 이전 버전의 릴리스 노트.',
          '[소스 코드의 모델 카탈로그](https://github.com/ente-io/ente/blob/main/rust/crates/ensu/src/config.rs) — 모델, 파일 크기, 기기 메모리별 기본 선택. 2026년 10월 24일 메인 브랜치.',
          '[App Store의 Ensu](https://apps.apple.com/app/id6758197006)와 [Google Play의 Ensu](https://play.google.com/store/apps/details?id=io.ente.ensu) — 스토어 설명, iOS 요구 사항, 버전 정보.',
          '[Ente 개인정보 처리방침](https://ente.com/privacy) — 데이터 수집과 제3자. 2026년 10월 16일 갱신.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 오픈소스 온디바이스 채팅 앱.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 온디바이스 모델 앱.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — iPhone, iPad, Mac용 온디바이스 채팅.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 데스크톱용 오픈소스 오프라인 채팅 클라이언트.',
          '[채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 목록.',
        ],
      },
    },
  },
}
