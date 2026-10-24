// Murmur Review: On-Device AI Music Generator for iPhone
// Slug: murmur-review
// Companion to: bark-tts-review, mlx-audio-review, local-llm-voice-audio-compared
// Sources: the App Store listing (apps.apple.com/us/app/id6776807467, iTunes lookup API, per-storefront in-app prices), murmurapps.com and
// murmurapps.com/privacy (last updated 2026-10-16), all checked 2026-10-24 — no hands-on testing. Pro prices are per-storefront
// App Store prices (US $17.99, DE/ES/FR 19,99 EUR, JP JPY 3,000, KR KRW 29,000, BR R$ 79,90), never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-en.webp',
    title: 'Murmur Review: On-Device AI Music Generator for iPhone',
    seoTitle: 'Murmur Review: On-Device AI Music Generator for iPhone',
    intro:
      'Murmur is an iPhone app by the independent developer [Konstantin Tabakov](https://murmurapps.com) that composes instrumental music for photos, videos and games, and says it generates every track on the phone after a one-time model download. It is free to download, with a one-time Pro unlock. This review is based on the App Store listing, the maker\'s website and its privacy policy, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Murmur review: iPhone app that composes instrumental AI music for photos, videos and games on the device. Free with a one-time Pro unlock; untested.',
    twitterDescription:
      'Murmur review: on-device AI music for iPhone, scored for your photos and videos. Free, one-time Pro unlock, what the sources confirm and what they do not.',
    audience:
      'Creators and iPhone users who want background music generated on the phone and need to know what the sources confirm, what the maker only claims and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Murmur review',
    targetKeywords: [
      'murmur review',
      'murmur ai music iphone',
      'on-device ai music generator',
      'offline ai music app iphone',
      'royalty-free ai music for video',
      'ai soundtrack for photos and videos',
      'murmur on-device ai music',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur (version 2.2.5, updated on 22 October 2026) is an iPhone app that composes instrumental music for your photos, videos and games on the device.** It is free to download and sells a one-time Pro unlock instead of a subscription. It produces no vocals, and every statement here comes from the App Store listing, the maker\'s site and its privacy policy.',
    quickAnswerTop: {
      en: {
        question: 'Does Murmur really make AI music offline on the iPhone?',
        answer:
          'Per the maker, yes: after a one-time model download, tracks are generated on the phone without an internet connection. The maker\'s privacy policy adds that prompts and saved tracks are not uploaded, while anonymous usage and crash data are collected unless you switch them off.',
        bullets: [
          'Score mode composes music for a photo or video and fits it to the clip length.',
          'Live mode streams an instrumental set that you steer with on-screen knobs.',
          'Presets, Moments and Story Worlds give one-tap starting points.',
          'Exports include WAV files and videos with the new music.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Murmur?', anchor: 'what-is-murmur' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
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
            text: 'Murmur is a closed-source iPhone app that turns presets, text prompts or your own photos and videos into instrumental music generated on the phone.',
          },
          {
            type: 'plain-terms',
            text: 'You pick a clip or a mood, the app writes an original instrumental track in seconds, and you save it as audio or as a video with the new soundtrack.',
          },
        ],
        items: [
          'Maintenance: version 2.2.5 was released on 22 October 2026 and the version history shows frequent releases since June, so no stale-project warning applies.',
          'Engines: Orpheus for Score and standard tracks, Google\'s Magenta RT for Live mode, per the maker.',
          'Cost: free tier with daily limits and a one-time Pro unlock; there is no subscription.',
          'Output: instrumental only, with no vocals or lyrics.',
          'Maker: an independent developer, with no published source code.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, the maker\'s website and privacy policy, checked on 24 October 2026. PromptQuorum has not installed, listened to or benchmarked the app, so sound quality is not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'What Is Murmur?',
        content: [
          '**Murmur is an AI music generator for iPhone that composes original instrumental tracks from presets, written scene descriptions or a photo or video you choose.** The App Store lists it as "Murmur: On-Device AI Music" in the Music category, from the seller Konstantin Tabakov, and the listing first appeared on 16 June 2026.',
          'The maker says two engines do the work: Orpheus, described as powered by Stability AI, writes standard tracks and Score soundtracks, while Google\'s Magenta RT drives Live mode and stays selectable as a "Classic" engine. The App Store title varies by storefront, for example "Murmur: KI-Musik-Generator" in Germany and "Murmur: AI作曲・BGMメーカー" in Japan; all refer to the same app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Murmur is an App Store download for iPhone; no Android, web or desktop-native version is listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'iPhone', 'How to get it': '[Murmur on the App Store](https://apps.apple.com/app/id6776807467), free download with an in-app purchase' },
          { 'Option': 'Murmur Pro', 'How to get it': 'One-time "Lifetime Unlock", $17.99 on the US storefront; no subscription' },
          { 'Option': 'Website', 'How to get it': '[murmurapps.com](https://murmurapps.com)' },
          { 'Option': 'Privacy policy', 'How to get it': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'Option': 'Source code', 'How to get it': 'Not published' },
        ],
        note: 'Version reviewed: 2.2.5, released on 22 October 2026 per the App Store; the app is 75.9 MB before its model download. The listing also shows iPad, Mac with Apple silicon and Apple Vision compatibility, while the maker\'s site describes an iPhone app. Prices are from the US storefront and vary by country.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The App Store lists iOS 26.0 as the minimum, and the first-run model download is 1.2 GB or 2.1 GB depending on the iPhone.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'iOS or iPadOS 26.0 or later per the App Store; the maker\'s FAQ says the Orpheus engine needs iOS 18 or later' },
          { 'Item': 'Model download', 'What the sources say': 'About 2.1 GB for the full engine on iPhone 15 Pro and newer, about 1.2 GB (Orpheus Small) on older iPhones' },
          { 'Item': 'Scene suggestions', 'What the sources say': 'Need Apple Intelligence on iPhone 15 Pro or newer with iOS 27; Score still works with presets and prompts elsewhere' },
          { 'Item': 'Internet', 'What the sources say': 'Needed once to download the models, not for generating tracks afterwards' },
          { 'Item': 'Live sessions', 'What the sources say': 'Limited to a few minutes because of heat on the phone' },
        ],
        note: 'The two operating-system figures differ between the listing and the site; the App Store entry is the one that decides whether the app installs, and the listing says nothing about RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the maker\'s own "how it works" outline; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install and download the models',
            whyItMatters: 'Install Murmur from the App Store and let it download its models once, over a network connection.',
          },
          {
            title: 'Start from a scene',
            whyItMatters: 'Pick a photo or video, choose a preset, Moment or Story World, or describe the scene in your own words.',
          },
          {
            title: 'Let Murmur compose',
            whyItMatters: 'The app writes an original instrumental in seconds, as long as your clip; non-English prompts are translated on the device first.',
          },
          {
            title: 'Export',
            whyItMatters: 'Save the video with its new music, share it, or export the track as a WAV file for an editor or game engine.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description or the maker\'s website; none has been independently tested.**',
        ],
        items: [
          '**Score (new in 2.2).** Pick a photo or video, set a feeling such as epic or chill, and get a soundtrack that matches the clip length; you can keep or replace the original sound and retry without losing a take.',
          '**Presets, Moments and Story Worlds.** More than 170 curated presets, 31 ready-made Moments such as birthdays and travel, and over 40 searchable cinematic moods.',
          '**Live mode.** A continuous instrumental set composed second by second, which you steer by fading layers such as beat, bass, keys and strings in and out.',
          '**Prompts and languages.** Custom scene prompts, with German, French, Spanish, Portuguese and Japanese prompts translated on the device; the App Store lists eleven interface languages.',
          '**Library and export.** Saved tracks can be edited and exported as WAV files, and finished videos can be saved, shared or posted to Instagram in 9:16 or 1:1.',
        ],
        note: 'The Pro unlock lifts the free-tier limits: tracks up to 6 minutes, all presets, custom prompts, Live mode, WAV export and scoring full-length videos without a watermark.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated on 16 October 2026, says prompts, style choices and saved tracks are processed and stored on the iPhone and are not uploaded.** Photos and videos used in Score also stay on the phone, per the maker\'s FAQ. No account is required, and the policy states there is no advertising, no ad tracking and no location access.',
          'The app does send some data: EU-hosted PostHog analytics (device model, iOS and app version, usage events), Sentry crash reports, and purchase data through Apple and RevenueCat. Model downloads use Apple App Attest and signed links, so the server sees your IP address but, per the policy, never prompts or audio. Analytics and crash reports can be switched off under Settings, Privacy. Voice dictation uses Apple\'s speech recognition, which may run on Apple\'s servers.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. PromptQuorum has not inspected the app\'s network traffic. The developer is named as the data controller under the GDPR and can be reached at the address in the policy.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Short-video creators** who need background music that fits a clip and do not want to browse a stock library.',
          '**Indie game developers and podcasters** who want instrumental loops or WAV files for their own projects.',
          '**iPhone owners curious about on-device generation** who accept a large first download and an unproven app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Sound quality.** PromptQuorum did not listen to full tracks, so musical quality, variety and loop behaviour are not assessed; the examples on the site are the maker\'s own.',
          '**Licensing and rights.** The maker states that all tracks are royalty-free for commercial use and that the Orpheus model was trained on licensed and Creative Commons audio; PromptQuorum has not checked the engine licences, and this is not legal advice.',
          '**Free-tier limits.** The FAQ gives three tracks a day of up to 30 seconds plus one free long track, while the pricing text speaks of unlimited fixed-length generations; the two are not reconciled.',
          '**Heat and battery.** The maker says Live sessions are limited by thermals; run time, battery drain and performance on older phones are untested.',
          '**Other devices.** The App Store listing shows iPad, Mac and Vision compatibility that the maker\'s site does not mention.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Bark](/power-local-llm/bark-tts-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source speech model that can also produce sound effects and short music; a developer tool, not a phone app' },
          { 'App': '[MLX-Audio](/power-local-llm/mlx-audio-review)', 'Platforms': 'macOS (Apple silicon)', 'Price / license': 'Free / MIT', 'Key difference': 'Python library for speech generation and recognition on Macs; no music workflow' },
        ],
        note: 'No other music-generation app has a PromptQuorum review yet, so these are the nearest on-device audio tools; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use the music on YouTube or in a commercial game?',
            a: 'The maker says every track, free or Pro, is royalty-free and can be used commercially, and that neither Murmur nor its model providers claim rights to your output. It also warns that automated systems such as Content ID can rarely flag a false match, which can be disputed.',
          },
          {
            q: 'Does Murmur write vocals or lyrics?',
            a: 'No. The maker describes it as a pure instrumental generator aimed at background soundscapes, lo-fi beats and cinematic loops.',
          },
          {
            q: 'Why does the free tier look different in two places?',
            a: 'The maker\'s FAQ lists three free tracks a day of up to 30 seconds plus one long track, while its pricing section describes unlimited generations at a fixed length. Check the limits inside the app before relying on either.',
          },
          {
            q: 'What does Pro cost outside the United States?',
            a: 'On the App Store storefronts checked on 24 October 2026 the Lifetime Unlock was 19,99 € in Germany, Spain and France, ¥3,000 in Japan, ₩29,000 in South Korea and R$ 79,90 in Brazil, against $17.99 in the US.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Murmur is a focused, actively updated way to get instrumental music for clips from an iPhone, with a free tier to try it and a one-time Pro price instead of a subscription. Against that, it is closed-source, comes from one independent developer, needs a recent iOS and a large model download, and none of its sound claims could be checked here. It suits creators who want fast background tracks that the maker says are generated on the phone and can test the free tier first; anyone who needs a documented licence for the generated music should read the engine terms and the maker\'s statement carefully before using tracks commercially.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Murmur on the App Store](https://apps.apple.com/app/id6776807467) — description, version history, requirements, privacy labels and in-app purchase prices per storefront, checked 24 October 2026.',
          '[Murmur website](https://murmurapps.com) — feature list, FAQ, engine descriptions and pricing text, checked 24 October 2026.',
          '[Murmur privacy policy](https://murmurapps.com/privacy/) — data collection, third parties and opt-outs, last updated 16 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Bark Review](/power-local-llm/bark-tts-review) — a generative audio model that can add sound effects and music to speech.',
          '[MLX-Audio Review](/power-local-llm/mlx-audio-review) — speech generation and recognition on Apple silicon.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Murmur Review: On-Device AI Music Generator for iPhone',
      description:
        'Murmur review: an iPhone app that composes instrumental AI music for photos, videos and games on the device. Pricing, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/murmur-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Creators and iPhone users evaluating an on-device AI music generator' },
      about: [
        { '@type': 'Thing', name: 'Murmur' },
        { '@type': 'Thing', name: 'AI music generation' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'iPhone' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/murmur-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Murmur Review', item: 'https://www.promptquorum.com/power-local-llm/murmur-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-de.webp',
    title: 'Murmur-Rezension: KI-Musikgenerator direkt auf dem iPhone',
    seoTitle: 'Murmur-Rezension: KI-Musik direkt auf dem iPhone erzeugen',
    intro:
      'Murmur ist eine iPhone-App des unabhängigen Entwicklers [Konstantin Tabakov](https://murmurapps.com), die instrumentale Musik für Fotos, Videos und Spiele komponiert; laut Hersteller entsteht jeder Track nach einem einmaligen Modell-Download auf dem Telefon selbst. Der Download ist kostenlos, Pro wird einmalig freigeschaltet. Diese Rezension stützt sich auf den App-Store-Eintrag, die Website des Herstellers und seine Datenschutzerklärung, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Murmur-Rezension: iPhone-App, die instrumentale KI-Musik für Fotos, Videos und Spiele auf dem Gerät komponiert. Gratis, Pro als Einmalkauf; ungetestet.',
    twitterDescription:
      'Murmur-Rezension: KI-Musik direkt auf dem iPhone, passend zu Ihren Fotos und Videos. Gratis, Pro als Einmalkauf – was die Quellen bestätigen und was nicht.',
    audience:
      'Kreative und iPhone-Nutzer, die Hintergrundmusik direkt auf dem Telefon erzeugen möchten und wissen müssen, was die Quellen bestätigen, was der Hersteller nur behauptet und was die App kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Murmur Rezension',
    targetKeywords: [
      'murmur rezension',
      'murmur ki musik iphone',
      'ki musikgenerator auf dem gerät',
      'offline ki musik app iphone',
      'lizenzfreie ki musik für videos',
      'ki soundtrack für fotos und videos',
      'murmur ki musik offline',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur (Version 2.2.5, aktualisiert am 22. Oktober 2026) ist eine iPhone-App, die instrumentale Musik für Ihre Fotos, Videos und Spiele direkt auf dem Gerät komponiert.** Der Download ist kostenlos, statt eines Abos gibt es eine einmalige Pro-Freischaltung. Gesang erzeugt die App nicht, und jede Aussage hier stammt aus dem App-Store-Eintrag, der Website des Herstellers und seiner Datenschutzerklärung.',
    quickAnswerTop: {
      de: {
        question: 'Erzeugt Murmur die KI-Musik wirklich offline auf dem iPhone?',
        answer:
          'Laut Hersteller ja: Nach einem einmaligen Modell-Download entstehen die Tracks ohne Internetverbindung auf dem Telefon. Die Datenschutzerklärung des Herstellers ergänzt, dass Prompts und gespeicherte Tracks nicht hochgeladen werden, anonyme Nutzungs- und Absturzdaten jedoch erfasst werden, sofern Sie dies nicht abschalten.',
        bullets: [
          'Der Score-Modus komponiert Musik zu einem Foto oder Video und passt sie an die Cliplänge an.',
          'Der Live-Modus streamt ein Instrumental-Set, das Sie mit Reglern auf dem Bildschirm steuern.',
          'Presets, Moments und Story Worlds bieten Startpunkte per Fingertipp.',
          'Exportiert werden WAV-Dateien und Videos mit der neuen Musik.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Murmur?', anchor: 'what-is-murmur' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
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
            text: 'Murmur ist eine quellgeschlossene iPhone-App, die aus Presets, Text-Prompts oder Ihren eigenen Fotos und Videos instrumentale Musik macht, die auf dem Telefon erzeugt wird.',
          },
          {
            type: 'plain-terms',
            text: 'Sie wählen einen Clip oder eine Stimmung, die App schreibt in Sekunden einen eigenen Instrumental-Track, und Sie speichern ihn als Audio oder als Video mit dem neuen Soundtrack.',
          },
        ],
        items: [
          'Pflege: Version 2.2.5 erschien am 22. Oktober 2026, und der Versionsverlauf zeigt seit Juni häufige Releases; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Engines: laut Hersteller Orpheus für Score und normale Tracks, Googles Magenta RT für den Live-Modus.',
          'Kosten: kostenlose Stufe mit Tageslimits und eine einmalige Pro-Freischaltung; ein Abo gibt es nicht.',
          'Ausgabe: ausschließlich instrumental, ohne Gesang und ohne Liedtexte.',
          'Hersteller: ein unabhängiger Entwickler, ohne veröffentlichten Quellcode.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den App-Store-Eintrag, die Website und die Datenschutzerklärung des Herstellers, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch angehört oder gemessen; die Klangqualität wird daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'Was ist Murmur?',
        content: [
          '**Murmur ist ein KI-Musikgenerator für das iPhone, der eigene Instrumental-Tracks aus Presets, schriftlichen Szenenbeschreibungen oder einem von Ihnen gewählten Foto oder Video komponiert.** Der App Store führt die App als „Murmur: On-Device AI Music“ in der Kategorie Musik, Anbieter ist Konstantin Tabakov, und der Eintrag erschien erstmals am 16. Juni 2026.',
          'Laut Hersteller arbeiten zwei Engines: Orpheus, beschrieben als „powered by Stability AI“, schreibt normale Tracks und Score-Soundtracks, während Googles Magenta RT den Live-Modus antreibt und als „Classic“-Engine weiter auswählbar bleibt. Der Titel im App Store unterscheidet sich je nach Land, etwa „Murmur: KI-Musik-Generator“ in Deutschland und „Murmur: AI作曲・BGMメーカー“ in Japan; gemeint ist jeweils dieselbe App.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Murmur gibt es als Download im App Store für das iPhone; eine Android-, Web- oder native Desktop-Version ist nicht gelistet.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'iPhone', 'Bezug': '[Murmur im App Store](https://apps.apple.com/app/id6776807467), kostenloser Download mit In-App-Kauf' },
          { 'Option': 'Murmur Pro', 'Bezug': 'Einmaliger „Lifetime Unlock“, 19,99 € (deutscher Store); kein Abo' },
          { 'Option': 'Website', 'Bezug': '[murmurapps.com](https://murmurapps.com)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'Option': 'Quellcode', 'Bezug': 'Nicht veröffentlicht' },
        ],
        note: 'Geprüfte Version: 2.2.5, laut App Store am 22. Oktober 2026 veröffentlicht; die App ist vor dem Modell-Download 75,9 MB groß. Der Eintrag nennt außerdem Kompatibilität mit iPad, Mac mit Apple Silicon und Apple Vision, während die Website des Herstellers eine iPhone-App beschreibt. Der Preis stammt aus dem deutschen App Store und variiert je nach Land.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Der App Store nennt iOS 26.0 als Mindestversion, und der Modell-Download beim ersten Start umfasst je nach iPhone 1,2 GB oder 2,1 GB.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angaben der Quellen': 'Laut App Store iOS oder iPadOS 26.0 oder neuer; laut FAQ des Herstellers braucht die Orpheus-Engine iOS 18 oder neuer' },
          { 'Punkt': 'Modell-Download', 'Angaben der Quellen': 'Etwa 2,1 GB für die volle Engine ab iPhone 15 Pro, etwa 1,2 GB (Orpheus Small) auf älteren iPhones' },
          { 'Punkt': 'Szenenvorschläge', 'Angaben der Quellen': 'Benötigen Apple Intelligence auf iPhone 15 Pro oder neuer mit iOS 27; Score funktioniert sonst weiter mit Presets und Prompts' },
          { 'Punkt': 'Internet', 'Angaben der Quellen': 'Einmal nötig für den Modell-Download, danach nicht zum Erzeugen von Tracks' },
          { 'Punkt': 'Live-Sitzungen', 'Angaben der Quellen': 'Wegen der Wärmeentwicklung am Telefon auf wenige Minuten begrenzt' },
        ],
        note: 'Die beiden Angaben zum Betriebssystem unterscheiden sich zwischen Eintrag und Website; maßgeblich dafür, ob die App installiert werden kann, ist der App-Store-Eintrag, und zum Arbeitsspeicher sagt der Eintrag nichts.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der „How it works“-Übersicht des Herstellers; PromptQuorum hat sie nicht selbst durchgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren und Modelle laden',
            whyItMatters: 'Installieren Sie Murmur aus dem App Store und lassen Sie die App ihre Modelle einmalig über eine Netzwerkverbindung herunterladen.',
          },
          {
            title: 'Mit einer Szene beginnen',
            whyItMatters: 'Wählen Sie ein Foto oder Video, ein Preset, einen Moment oder eine Story World, oder beschreiben Sie die Szene in eigenen Worten.',
          },
          {
            title: 'Murmur komponieren lassen',
            whyItMatters: 'Die App schreibt in Sekunden ein eigenes Instrumental in der Länge Ihres Clips; nicht englische Prompts werden zuvor auf dem Gerät übersetzt.',
          },
          {
            title: 'Exportieren',
            whyItMatters: 'Speichern Sie das Video mit der neuen Musik, teilen Sie es, oder exportieren Sie den Track als WAV-Datei für einen Editor oder eine Game-Engine.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der App-Store-Beschreibung oder von der Website des Herstellers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Score (Vertonung, neu in 2.2).** Sie wählen ein Foto oder Video, legen eine Stimmung wie episch oder entspannt fest und erhalten einen Soundtrack in der Länge des Clips; den Originalton können Sie behalten oder ersetzen und neue Versuche starten, ohne einen Take zu verlieren.',
          '**Presets, Moments und Story Worlds.** Mehr als 170 kuratierte Presets, 31 fertige Moments wie Geburtstage und Reisen sowie über 40 durchsuchbare cineastische Stimmungen.',
          '**Live-Modus.** Ein durchgehendes Instrumental-Set, Sekunde für Sekunde komponiert, das Sie steuern, indem Sie Ebenen wie Beat, Bass, Keys und Streicher ein- und ausblenden.',
          '**Prompts und Sprachen.** Eigene Szenen-Prompts, wobei deutsche, französische, spanische, portugiesische und japanische Prompts auf dem Gerät übersetzt werden; der App Store nennt elf Sprachen für die Oberfläche.',
          '**Bibliothek und Export.** Gespeicherte Tracks lassen sich bearbeiten und als WAV-Dateien exportieren, fertige Videos können gespeichert, geteilt oder im Format 9:16 oder 1:1 auf Instagram gepostet werden.',
        ],
        note: 'Die Pro-Freischaltung hebt die Grenzen der kostenlosen Stufe auf: Tracks bis 6 Minuten, alle Presets, eigene Prompts, Live-Modus, WAV-Export und die Vertonung ganzer Videos ohne Wasserzeichen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut Datenschutzerklärung, zuletzt aktualisiert am 16. Oktober 2026, werden Prompts, Stilvorgaben und gespeicherte Tracks auf dem iPhone verarbeitet und gespeichert und nicht hochgeladen.** Laut FAQ des Herstellers bleiben auch die in Score verwendeten Fotos und Videos auf dem Telefon. Ein Konto ist nicht nötig, und die Erklärung gibt an, dass es keine Werbung, kein Werbe-Tracking und keinen Standortzugriff gibt.',
          'Einige Daten sendet die App dennoch: PostHog-Analysen mit Hosting in der EU (Gerätemodell, iOS- und App-Version, Nutzungsereignisse), Sentry-Absturzberichte sowie Kaufdaten über Apple und RevenueCat. Modell-Downloads nutzen Apple App Attest und signierte Links, sodass der Server Ihre IP-Adresse sieht, laut Erklärung aber niemals Prompts oder Audio. Analysen und Absturzberichte lassen sich unter Einstellungen, Datenschutz abschalten. Die Spracheingabe nutzt Apples Spracherkennung, die auf Servern von Apple laufen kann.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Entwicklers, keine Prüfergebnisse, und der Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Der Entwickler ist als Verantwortlicher im Sinne der DSGVO genannt und über die Adresse in der Erklärung erreichbar.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Ersteller kurzer Videos**, die zum Clip passende Hintergrundmusik brauchen und keine Stock-Bibliothek durchsuchen möchten.',
          '**Indie-Spieleentwickler und Podcaster**, die instrumentale Loops oder WAV-Dateien für eigene Projekte suchen.',
          '**iPhone-Besitzer, die Generierung auf dem Gerät ausprobieren möchten** und einen großen ersten Download sowie eine noch unerprobte App in Kauf nehmen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Klangqualität.** PromptQuorum hat keine vollständigen Tracks angehört; musikalische Qualität, Abwechslung und Loop-Verhalten werden daher nicht bewertet. Die Beispiele auf der Website stammen vom Hersteller selbst.',
          '**Lizenzen und Rechte.** Der Hersteller gibt an, dass alle Tracks lizenzfrei kommerziell nutzbar sind und das Orpheus-Modell mit lizenziertem und Creative-Commons-Audio trainiert wurde; PromptQuorum hat die Lizenzen der Engines nicht geprüft, und dies ist keine Rechtsberatung.',
          '**Grenzen der kostenlosen Stufe.** Die FAQ nennt drei Tracks pro Tag mit bis zu 30 Sekunden plus einen kostenlosen langen Track, während der Preistext von unbegrenzten Generierungen mit fester Länge spricht; beide Angaben sind nicht miteinander abgeglichen.',
          '**Wärme und Akku.** Laut Hersteller sind Live-Sitzungen durch die Temperatur begrenzt; Laufzeit, Akkuverbrauch und Leistung auf älteren Telefonen sind ungetestet.',
          '**Andere Geräte.** Der App-Store-Eintrag nennt Kompatibilität mit iPad, Mac und Vision, die auf der Website des Herstellers nicht erwähnt wird.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Bark](/de/power-local-llm/bark-tts-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Quelloffenes Sprachmodell, das auch Soundeffekte und kurze Musik erzeugen kann; ein Entwicklerwerkzeug, keine Smartphone-App' },
          { 'App': '[MLX-Audio](/de/power-local-llm/mlx-audio-review)', 'Plattformen': 'macOS (Apple Silicon)', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Python-Bibliothek für Sprachausgabe und Spracherkennung auf Macs; kein Musik-Workflow' },
        ],
        note: 'Zu keiner anderen Musik-App gibt es bisher eine PromptQuorum-Rezension; dies sind daher die nächstliegenden Audio-Werkzeuge für das eigene Gerät. Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Darf ich die Musik auf YouTube oder in einem kommerziellen Spiel verwenden?',
            a: 'Laut Hersteller ist jeder Track, ob kostenlos oder Pro, lizenzfrei und kommerziell nutzbar, und weder Murmur noch seine Modellanbieter beanspruchen Rechte an Ihren Ergebnissen. Er weist auch darauf hin, dass automatische Systeme wie Content ID in seltenen Fällen eine falsche Übereinstimmung melden können, gegen die man Einspruch einlegen kann.',
          },
          {
            q: 'Erzeugt Murmur Gesang oder Liedtexte?',
            a: 'Nein. Der Hersteller beschreibt die App als reinen Instrumental-Generator für Hintergrundklänge, Lo-Fi-Beats und cineastische Loops.',
          },
          {
            q: 'Warum ist die kostenlose Stufe an zwei Stellen unterschiedlich beschrieben?',
            a: 'Die FAQ des Herstellers nennt drei kostenlose Tracks pro Tag mit bis zu 30 Sekunden plus einen langen Track, während der Preisabschnitt unbegrenzte Generierungen mit fester Länge beschreibt. Prüfen Sie die Grenzen in der App, bevor Sie sich auf eine der beiden Angaben verlassen.',
          },
          {
            q: 'Was kostet Pro außerhalb der USA?',
            a: 'In den am 24. Oktober 2026 geprüften App-Store-Ländern kostete der Lifetime Unlock 19,99 € in Deutschland, Spanien und Frankreich, 3.000 ¥ in Japan, 29.000 ₩ in Südkorea und R$ 79,90 in Brasilien, gegenüber 17,99 $ in den USA.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Murmur ist ein fokussierter, aktiv gepflegter Weg, auf dem iPhone instrumentale Musik für Clips zu erhalten, mit einer kostenlosen Stufe zum Ausprobieren und einem einmaligen Pro-Preis statt eines Abos. Dem stehen gegenüber: Die App ist quellgeschlossen, stammt von einem einzelnen unabhängigen Entwickler, braucht ein aktuelles iOS und einen großen Modell-Download, und keine ihrer Aussagen zum Klang ließ sich hier überprüfen. Sie passt zu Kreativen, die schnelle Hintergrund-Tracks, die laut Hersteller auf dem Telefon entstehen möchten und zuerst die kostenlose Stufe testen können; wer für die erzeugte Musik eine dokumentierte Lizenz braucht, sollte die Bedingungen der Engines und die Erklärung des Herstellers sorgfältig lesen, bevor er Tracks kommerziell nutzt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Murmur im App Store](https://apps.apple.com/app/id6776807467) — Beschreibung, Versionsverlauf, Anforderungen, Datenschutzangaben und In-App-Kaufpreise je Land, geprüft am 24. Oktober 2026.',
          '[Website von Murmur](https://murmurapps.com) — Funktionsliste, FAQ, Engine-Beschreibungen und Preistext, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung von Murmur](https://murmurapps.com/privacy/) — Datenerhebung, Drittanbieter und Abschaltmöglichkeiten, zuletzt aktualisiert am 16. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Bark-Rezension](/de/power-local-llm/bark-tts-review) — ein generatives Audiomodell, das Sprache um Soundeffekte und Musik ergänzen kann.',
          '[MLX-Audio-Rezension](/de/power-local-llm/mlx-audio-review) — Sprachausgabe und Spracherkennung auf Apple Silicon.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-es.webp',
    title: 'Reseña de Murmur: generador de música con IA en el iPhone',
    seoTitle: 'Reseña de Murmur: música con IA en el propio iPhone',
    intro:
      'Murmur es una app para iPhone del desarrollador independiente [Konstantin Tabakov](https://murmurapps.com) que compone música instrumental para fotos, vídeos y juegos, y según su creador genera cada pista en el propio teléfono tras una descarga única del modelo. Se descarga gratis y ofrece un desbloqueo Pro de pago único. Esta reseña se basa en la ficha de la App Store, el sitio web del creador y su política de privacidad, comprobados el 24 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription:
      'Reseña de Murmur: app de iPhone que compone música instrumental con IA para fotos, vídeos y juegos en el dispositivo. Gratis, con Pro de pago único.',
    twitterDescription:
      'Reseña de Murmur: música con IA generada en el iPhone para tus fotos y vídeos. Gratis, Pro de pago único, y qué confirman las fuentes y qué no.',
    audience:
      'Creadores y usuarios de iPhone que quieren música de fondo generada en el teléfono y necesitan saber qué confirman las fuentes, qué solo afirma el creador y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Murmur',
    targetKeywords: [
      'reseña murmur',
      'murmur música ia iphone',
      'generador de música con ia en el dispositivo',
      'app de música con ia sin conexión para iphone',
      'música con ia libre de derechos para vídeos',
      'banda sonora con ia para fotos y vídeos',
      'murmur música ia en el dispositivo',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur (versión 2.2.5, actualizada el 22 de octubre de 2026) es una app para iPhone que compone en el propio dispositivo música instrumental para tus fotos, vídeos y juegos.** Se descarga gratis y vende un desbloqueo Pro de pago único en lugar de una suscripción. No genera voces, y todo lo que se afirma aquí procede de la ficha de la App Store, del sitio del creador y de su política de privacidad.',
    quickAnswerTop: {
      es: {
        question: '¿Murmur crea de verdad música con IA sin conexión en el iPhone?',
        answer:
          'Según el creador, sí: tras una descarga única del modelo, las pistas se generan en el teléfono sin conexión a internet. Su política de privacidad añade que los prompts y las pistas guardadas no se suben, aunque se recopilan datos anónimos de uso y de fallos salvo que los desactives.',
        bullets: [
          'El modo Score compone música para una foto o un vídeo y la ajusta a la duración del clip.',
          'El modo Live reproduce un set instrumental continuo que diriges con controles en pantalla.',
          'Los Presets, Moments y Story Worlds ofrecen puntos de partida con un toque.',
          'Puedes exportar archivos WAV y vídeos con la nueva música.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Murmur?', anchor: 'what-is-murmur' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
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
            text: 'Murmur es una app de código cerrado para iPhone que convierte presets, descripciones escritas o tus propias fotos y vídeos en música instrumental generada en el teléfono.',
          },
          {
            type: 'plain-terms',
            text: 'Eliges un clip o un ambiente, la app escribe en segundos una pista instrumental original y la guardas como audio o como vídeo con la nueva banda sonora.',
          },
        ],
        items: [
          'Mantenimiento: la versión 2.2.5 se publicó el 22 de octubre de 2026 y el historial de versiones muestra actualizaciones frecuentes desde junio, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Motores: Orpheus para Score y las pistas estándar, y Magenta RT de Google para el modo Live, según el creador.',
          'Coste: nivel gratuito con límites diarios y un desbloqueo Pro de pago único; no hay suscripción.',
          'Resultado: solo música instrumental, sin voces ni letras.',
          'Creador: un desarrollador independiente, sin código fuente publicado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha de la App Store, el sitio web del creador y su política de privacidad, comprobados el 24 de octubre de 2026. PromptQuorum no ha instalado, escuchado ni medido la app, así que no se evalúa la calidad del sonido.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: '¿Qué es Murmur?',
        content: [
          '**Murmur es un generador de música con IA para iPhone que compone pistas instrumentales originales a partir de presets, descripciones escritas de una escena o una foto o un vídeo que elijas.** La App Store lo muestra como "Murmur: On-Device AI Music" en la categoría Música, con Konstantin Tabakov como vendedor, y la ficha apareció por primera vez el 16 de junio de 2026.',
          'Según el creador, el trabajo lo hacen dos motores: Orpheus, descrito como impulsado por Stability AI, escribe las pistas estándar y las bandas sonoras de Score, mientras que Magenta RT de Google mueve el modo Live y sigue disponible como motor "Classic". El título en la App Store cambia según la tienda de cada país, por ejemplo "Murmur: KI-Musik-Generator" en Alemania y "Murmur: AI作曲・BGMメーカー" en Japón; todos se refieren a la misma app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Murmur se descarga desde la App Store para iPhone; no figura ninguna versión para Android, web ni escritorio nativo.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'iPhone', 'Cómo conseguirlo': '[Murmur en la App Store](https://apps.apple.com/app/id6776807467), descarga gratuita con compra dentro de la app' },
          { 'Opción': 'Murmur Pro', 'Cómo conseguirlo': '"Lifetime Unlock" de pago único, 19,99 € (tienda española); sin suscripción' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[murmurapps.com](https://murmurapps.com)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'No publicado' },
        ],
        note: 'Versión revisada: 2.2.5, publicada el 22 de octubre de 2026 según la App Store; la app ocupa 75.9 MB antes de descargar el modelo. La ficha también indica compatibilidad con iPad, Mac con Apple silicon y Apple Vision, mientras que el sitio del creador describe una app para iPhone. El precio indicado es el de la tienda española de la App Store y varía según el país.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La App Store indica iOS 26.0 como mínimo, y la descarga del modelo en el primer arranque es de 1.2 GB o 2.1 GB según el iPhone.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'iOS o iPadOS 26.0 o posterior según la App Store; las preguntas frecuentes del creador dicen que el motor Orpheus necesita iOS 18 o posterior' },
          { 'Elemento': 'Descarga del modelo', 'Qué dicen las fuentes': 'Unos 2.1 GB para el motor completo en iPhone 15 Pro y posteriores, unos 1.2 GB (Orpheus Small) en iPhone más antiguos' },
          { 'Elemento': 'Sugerencias de escena', 'Qué dicen las fuentes': 'Requieren Apple Intelligence en un iPhone 15 Pro o posterior con iOS 27; en los demás, Score sigue funcionando con presets y prompts' },
          { 'Elemento': 'Internet', 'Qué dicen las fuentes': 'Necesario una vez para descargar los modelos, no para generar pistas después' },
          { 'Elemento': 'Sesiones Live', 'Qué dicen las fuentes': 'Limitadas a unos pocos minutos por el calor del teléfono' },
        ],
        note: 'Las dos cifras del sistema operativo no coinciden entre la ficha y el sitio; la de la App Store es la que decide si la app se instala, y la ficha no dice nada sobre la RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el esquema "cómo funciona" del propio creador; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app y descarga los modelos',
            whyItMatters: 'Instala Murmur desde la App Store y deja que descargue sus modelos una sola vez con conexión a la red.',
          },
          {
            title: 'Parte de una escena',
            whyItMatters: 'Elige una foto o un vídeo, selecciona un preset, un Moment o un Story World, o describe la escena con tus propias palabras.',
          },
          {
            title: 'Deja que Murmur componga',
            whyItMatters: 'La app escribe en segundos una pieza instrumental original tan larga como tu clip; los prompts que no están en inglés se traducen primero en el dispositivo.',
          },
          {
            title: 'Exporta',
            whyItMatters: 'Guarda el vídeo con su nueva música, compártelo o exporta la pista como archivo WAV para un editor o un motor de juegos.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de esta lista procede de la descripción de la App Store o del sitio web del creador; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Score (banda sonora, nuevo en la 2.2).** Elige una foto o un vídeo, define un sentimiento como épico o relajado y obtén una banda sonora ajustada a la duración del clip; puedes conservar o sustituir el sonido original y reintentar sin perder ninguna toma.',
          '**Presets, Moments y Story Worlds.** Más de 170 presets seleccionados, 31 Moments listos para usar, como cumpleaños y viajes, y más de 40 ambientes cinematográficos que se pueden buscar.',
          '**Modo Live.** Un set instrumental continuo compuesto segundo a segundo, que diriges subiendo y bajando capas como ritmo, bajo, teclados y cuerdas.',
          '**Prompts e idiomas.** Prompts de escena personalizados; los escritos en alemán, francés, español, portugués y japonés se traducen en el dispositivo, y la App Store indica once idiomas de interfaz.',
          '**Biblioteca y exportación.** Las pistas guardadas se pueden editar y exportar como archivos WAV, y los vídeos terminados se pueden guardar, compartir o publicar en Instagram en 9:16 o 1:1.',
        ],
        note: 'El desbloqueo Pro elimina los límites del nivel gratuito: pistas de hasta 6 minutos, todos los presets, prompts personalizados, modo Live, exportación WAV y bandas sonoras para vídeos completos sin marca de agua.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 16 de octubre de 2026, dice que los prompts, las elecciones de estilo y las pistas guardadas se procesan y almacenan en el iPhone y no se suben.** Las fotos y los vídeos usados en Score también se quedan en el teléfono, según las preguntas frecuentes del creador. No hace falta cuenta, y la política afirma que no hay publicidad, ni rastreo publicitario ni acceso a la ubicación.',
          'La app sí envía algunos datos: analítica de PostHog alojada en la UE (modelo del dispositivo, versión de iOS y de la app, eventos de uso), informes de fallos de Sentry y datos de compra a través de Apple y RevenueCat. Las descargas del modelo usan Apple App Attest y enlaces firmados, así que el servidor ve tu dirección IP pero, según la política, nunca los prompts ni el audio. La analítica y los informes de fallos se pueden desactivar en Ajustes, Privacidad. El dictado por voz usa el reconocimiento de voz de Apple, que puede ejecutarse en los servidores de Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. PromptQuorum no ha inspeccionado el tráfico de red de la app. El desarrollador figura como responsable del tratamiento según el RGPD y se le puede contactar en la dirección que indica la política.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Creadores de vídeos cortos** que necesitan música de fondo ajustada a un clip y no quieren buscar en una biblioteca de stock.',
          '**Desarrolladores de juegos independientes y podcasters** que quieren loops instrumentales o archivos WAV para sus propios proyectos.',
          '**Usuarios de iPhone con curiosidad por la generación en el dispositivo** que aceptan una primera descarga grande y una app aún sin trayectoria probada.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad del sonido.** PromptQuorum no escuchó pistas completas, así que no se evalúan la calidad musical, la variedad ni el comportamiento de los loops; los ejemplos del sitio son del propio creador.',
          '**Licencias y derechos.** El creador afirma que todas las pistas son libres de derechos para uso comercial y que el modelo Orpheus se entrenó con audio con licencia y Creative Commons; PromptQuorum no ha revisado las licencias de los motores, y esto no es asesoramiento jurídico.',
          '**Límites del nivel gratuito.** Las preguntas frecuentes hablan de tres pistas al día de hasta 30 segundos más una pista larga gratis, mientras que el texto de precios habla de generaciones ilimitadas de duración fija; ambas versiones no se concilian.',
          '**Calor y batería.** El creador dice que las sesiones Live están limitadas por la temperatura; la duración, el consumo de batería y el rendimiento en teléfonos más antiguos no se han probado.',
          '**Otros dispositivos.** La ficha de la App Store muestra compatibilidad con iPad, Mac y Vision que el sitio del creador no menciona.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Bark](/es/power-local-llm/bark-tts-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Modelo de voz de código abierto que también puede producir efectos de sonido y música breve; una herramienta para desarrolladores, no una app para el teléfono' },
          { 'App': '[MLX-Audio](/es/power-local-llm/mlx-audio-review)', 'Plataformas': 'macOS (Apple silicon)', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Biblioteca de Python para generación y reconocimiento de voz en Mac; sin flujo de trabajo para música' },
        ],
        note: 'Ninguna otra app de generación musical tiene todavía una reseña en PromptQuorum, así que estas son las herramientas de audio en el dispositivo más cercanas; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar la música en YouTube o en un juego comercial?',
            a: 'El creador dice que todas las pistas, gratuitas o Pro, son libres de derechos y se pueden usar comercialmente, y que ni Murmur ni sus proveedores de modelos reclaman derechos sobre lo que generas. También advierte de que sistemas automáticos como Content ID pueden, en raras ocasiones, señalar una coincidencia falsa, que se puede impugnar.',
          },
          {
            q: '¿Murmur genera voces o letras?',
            a: 'No. El creador lo describe como un generador puramente instrumental pensado para ambientes de fondo, ritmos lo-fi y loops cinematográficos.',
          },
          {
            q: '¿Por qué el nivel gratuito aparece distinto en dos sitios?',
            a: 'Las preguntas frecuentes del creador indican tres pistas gratuitas al día de hasta 30 segundos más una pista larga, mientras que su sección de precios describe generaciones ilimitadas de duración fija. Comprueba los límites dentro de la app antes de fiarte de cualquiera de las dos.',
          },
          {
            q: '¿Cuánto cuesta Pro fuera de Estados Unidos?',
            a: 'En las tiendas de la App Store consultadas el 24 de octubre de 2026, el Lifetime Unlock costaba 19,99 € en Alemania, España y Francia, ¥3,000 en Japón, ₩29,000 en Corea del Sur y R$ 79,90 en Brasil, frente a $17.99 en Estados Unidos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Murmur es una forma centrada y con actualizaciones activas de conseguir música instrumental para clips desde un iPhone, con un nivel gratuito para probarla y un precio Pro de pago único en lugar de una suscripción. En contra, es de código cerrado, procede de un único desarrollador independiente, necesita un iOS reciente y una descarga de modelo grande, y aquí no se pudo comprobar ninguna de sus afirmaciones sobre el sonido. Encaja con creadores que quieren pistas de fondo rápidas que, según el creador, se generan en el teléfono y pueden probar antes el nivel gratuito; quien necesite una licencia documentada para la música generada debería leer con atención los términos de los motores y la declaración del creador antes de usar las pistas comercialmente.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Murmur en la App Store](https://apps.apple.com/app/id6776807467) — descripción, historial de versiones, requisitos, etiquetas de privacidad y precios de compras dentro de la app por tienda, comprobado el 24 de octubre de 2026.',
          '[Sitio web de Murmur](https://murmurapps.com) — lista de funciones, preguntas frecuentes, descripción de los motores y texto de precios, comprobado el 24 de octubre de 2026.',
          '[Política de privacidad de Murmur](https://murmurapps.com/privacy/) — recopilación de datos, terceros y opciones de exclusión, actualizada por última vez el 16 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Bark](/es/power-local-llm/bark-tts-review) — un modelo de audio generativo que puede añadir efectos de sonido y música a la voz.',
          '[Reseña de MLX-Audio](/es/power-local-llm/mlx-audio-review) — generación y reconocimiento de voz en Apple silicon.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-fr.webp',
    title: 'Test de Murmur : générateur de musique IA embarqué pour iPhone',
    seoTitle: 'Test de Murmur : musique IA générée sur l’iPhone',
    intro:
      'Murmur est une application iPhone du développeur indépendant [Konstantin Tabakov](https://murmurapps.com) qui compose de la musique instrumentale pour vos photos, vidéos et jeux ; selon lui, chaque morceau est généré sur le téléphone après un téléchargement unique des modèles. Le téléchargement est gratuit, avec un déblocage Pro en achat unique. Ce test repose sur la fiche App Store, le site du développeur et sa politique de confidentialité, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Test de Murmur : app iPhone composant sur l’appareil de la musique IA instrumentale pour photos, vidéos et jeux. Gratuite, Pro en achat unique, non testée.',
    twitterDescription:
      'Test de Murmur : musique IA générée sur l’iPhone pour vos photos et vidéos. Gratuite, Pro en achat unique : ce que les sources confirment, et ce qu’elles taisent.',
    audience:
      'Créateurs et utilisateurs d’iPhone qui veulent une musique de fond générée sur le téléphone et ont besoin de savoir ce que les sources confirment, ce que le développeur se contente d’affirmer et ce que cela coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test murmur',
    targetKeywords: [
      'test murmur',
      'murmur musique ia iphone',
      'générateur de musique ia sur l’appareil',
      'application musique ia hors ligne iphone',
      'musique ia libre de droits pour vidéo',
      'bande-son ia pour photos et vidéos',
      'murmur musique ia embarquée',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur (version 2.2.5, mise à jour le 22 octobre 2026) est une application iPhone qui compose sur l’appareil de la musique instrumentale pour vos photos, vidéos et jeux.** Le téléchargement est gratuit, et un déblocage Pro en achat unique remplace l’abonnement. Elle ne produit pas de voix, et chaque affirmation ici provient de la fiche App Store, du site du développeur et de sa politique de confidentialité.',
    quickAnswerTop: {
      fr: {
        question: 'Murmur génère-t-il vraiment de la musique IA hors ligne sur l’iPhone ?',
        answer:
          'Selon le développeur, oui : après un téléchargement unique des modèles, les morceaux sont générés sur le téléphone sans connexion Internet. Sa politique de confidentialité précise que les prompts et les morceaux enregistrés ne sont pas envoyés, mais que des données d’usage anonymes et des rapports de plantage sont collectés, sauf si vous les désactivez.',
        bullets: [
          'Le mode Score compose une musique pour une photo ou une vidéo, ajustée à la durée du clip.',
          'Le mode Live diffuse un set instrumental que vous pilotez avec des boutons à l’écran.',
          'Presets, Moments et Story Worlds offrent des points de départ en un geste.',
          'Exports en fichiers WAV et en vidéos accompagnées de la nouvelle musique.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Murmur ?', anchor: 'what-is-murmur' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui elle s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Murmur est une application iPhone à code fermé qui transforme des presets, des prompts écrits ou vos propres photos et vidéos en musique instrumentale générée sur le téléphone.',
          },
          {
            type: 'plain-terms',
            text: 'Vous choisissez un clip ou une ambiance, l’application écrit en quelques secondes un morceau instrumental original, et vous l’enregistrez en audio ou en vidéo avec la nouvelle bande-son.',
          },
        ],
        items: [
          'Maintenance : la version 2.2.5 est sortie le 22 octobre 2026 et l’historique des versions montre des mises à jour fréquentes depuis juin ; aucun avertissement de projet délaissé ne s’applique.',
          'Moteurs : Orpheus pour Score et les morceaux standard, Magenta RT de Google pour le mode Live, selon le développeur.',
          'Coût : version gratuite avec limites quotidiennes et déblocage Pro en achat unique ; aucun abonnement.',
          'Sortie : uniquement instrumentale, sans voix ni paroles.',
          'Éditeur : un développeur indépendant, sans code source publié.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur la fiche App Store, le site du développeur et sa politique de confidentialité, consultés le 24 octobre 2026. PromptQuorum n’a ni installé, ni écouté, ni mesuré l’application : la qualité sonore n’est donc pas évaluée.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'Qu’est-ce que Murmur ?',
        content: [
          '**Murmur est un générateur de musique IA pour iPhone qui compose des morceaux instrumentaux originaux à partir de presets, de descriptions de scène écrites ou d’une photo ou vidéo de votre choix.** L’App Store le référence sous le nom « Murmur: On-Device AI Music » dans la catégorie Musique, vendu par Konstantin Tabakov ; la fiche est apparue le 16 juin 2026.',
          'Selon le développeur, deux moteurs se partagent le travail : Orpheus, présenté comme reposant sur Stability AI, écrit les morceaux standard et les bandes-son Score, tandis que Magenta RT de Google pilote le mode Live et reste sélectionnable comme moteur « Classic ». Le titre sur l’App Store varie selon le pays, par exemple « Murmur: KI-Musik-Generator » en Allemagne et « Murmur: AI作曲・BGMメーカー » au Japon ; il s’agit toujours de la même application.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Murmur se télécharge sur l’App Store pour iPhone ; aucune version Android, web ou native pour ordinateur n’est proposée.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'iPhone', 'Comment l’obtenir': '[Murmur sur l’App Store](https://apps.apple.com/app/id6776807467), téléchargement gratuit avec achat intégré' },
          { 'Option': 'Murmur Pro', 'Comment l’obtenir': '« Lifetime Unlock » en achat unique, 19,99 € (App Store français) ; sans abonnement' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[murmurapps.com](https://murmurapps.com)' },
          { 'Option': 'Confidentialité', 'Comment l’obtenir': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'Option': 'Code source', 'Comment l’obtenir': 'Non publié' },
        ],
        note: 'Version testée : 2.2.5, publiée le 22 octobre 2026 selon l’App Store ; l’application pèse 75.9 MB avant le téléchargement des modèles. La fiche indique aussi une compatibilité iPad, Mac à puce Apple et Apple Vision, alors que le site du développeur décrit une application iPhone. Les prix proviennent de l’App Store français et varient selon le pays.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**L’App Store exige au minimum iOS 26.0, et le téléchargement des modèles au premier lancement pèse 1.2 GB ou 2.1 GB selon l’iPhone.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système', 'Ce que disent les sources': 'iOS ou iPadOS 26.0 ou ultérieur selon l’App Store ; la FAQ du développeur indique qu’Orpheus requiert iOS 18 ou ultérieur' },
          { 'Élément': 'Modèles', 'Ce que disent les sources': 'Environ 2.1 GB pour le moteur complet sur iPhone 15 Pro et plus récents, environ 1.2 GB (Orpheus Small) sur les iPhone plus anciens' },
          { 'Élément': 'Suggestions de scène', 'Ce que disent les sources': 'Requièrent Apple Intelligence sur iPhone 15 Pro ou plus récent avec iOS 27 ; ailleurs, Score fonctionne avec presets et prompts' },
          { 'Élément': 'Internet', 'Ce que disent les sources': 'Nécessaire une fois pour télécharger les modèles, pas pour générer ensuite' },
          { 'Élément': 'Sessions Live', 'Ce que disent les sources': 'Limitées à quelques minutes à cause de l’échauffement du téléphone' },
        ],
        note: 'Les deux versions minimales du système diffèrent entre la fiche et le site ; c’est la fiche App Store qui détermine si l’application s’installe, et elle ne dit rien de la RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent la présentation « comment ça marche » du développeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer et télécharger les modèles',
            whyItMatters: 'Installez Murmur depuis l’App Store et laissez-le télécharger ses modèles une fois, via une connexion réseau.',
          },
          {
            title: 'Partir d’une scène',
            whyItMatters: 'Choisissez une photo ou une vidéo, sélectionnez un preset, un Moment ou un Story World, ou décrivez la scène avec vos propres mots.',
          },
          {
            title: 'Laisser Murmur composer',
            whyItMatters: 'L’application écrit en quelques secondes un morceau instrumental original de la durée de votre clip ; les prompts non anglais sont d’abord traduits sur l’appareil.',
          },
          {
            title: 'Exporter',
            whyItMatters: 'Enregistrez la vidéo avec sa nouvelle musique, partagez-la, ou exportez le morceau en WAV pour un logiciel de montage ou un moteur de jeu.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la description App Store ou du site du développeur ; aucun n’a été testé de manière indépendante.**',
        ],
        items: [
          '**Score (nouveau en 2.2).** Choisissez une photo ou une vidéo, fixez une ambiance (épique, détendue…) et obtenez une bande-son de la durée du clip ; vous pouvez garder ou remplacer le son d’origine et relancer sans perdre une prise.',
          '**Presets, Moments et Story Worlds.** Plus de 170 presets sélectionnés, 31 Moments prêts à l’emploi comme les anniversaires ou les voyages, et plus de 40 ambiances cinématographiques consultables par recherche.',
          '**Mode Live.** Un set instrumental continu composé seconde par seconde, que vous pilotez en faisant entrer ou sortir des couches comme le rythme, la basse, les claviers et les cordes.',
          '**Prompts et langues.** Prompts de scène personnalisés ; les prompts en allemand, français, espagnol, portugais et japonais sont traduits sur l’appareil, et l’App Store liste onze langues d’interface.',
          '**Bibliothèque et export.** Les morceaux enregistrés peuvent être modifiés et exportés en WAV, et les vidéos finies enregistrées, partagées ou publiées sur Instagram en 9:16 ou 1:1.',
        ],
        note: 'Le déblocage Pro lève les limites de la version gratuite : morceaux jusqu’à 6 minutes, tous les presets, prompts personnalisés, mode Live, export WAV et mise en musique de vidéos entières sans filigrane.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Selon la politique de confidentialité, mise à jour le 16 octobre 2026, les prompts, choix de style et morceaux enregistrés sont traités et stockés sur l’iPhone et ne sont pas envoyés.** Les photos et vidéos utilisées dans Score restent aussi sur le téléphone, d’après la FAQ du développeur. Aucun compte n’est requis, et la politique indique qu’il n’y a ni publicité, ni suivi publicitaire, ni accès à la localisation.',
          'L’application envoie toutefois certaines données : statistiques PostHog hébergées dans l’UE (modèle d’appareil, versions d’iOS et de l’app, événements d’usage), rapports de plantage Sentry, et données d’achat via Apple et RevenueCat. Les téléchargements de modèles passent par Apple App Attest et des liens signés : le serveur voit donc votre adresse IP mais, selon la politique, jamais les prompts ni l’audio. Statistiques et rapports de plantage se désactivent dans Réglages, Confidentialité. La dictée vocale utilise la reconnaissance vocale d’Apple, qui peut s’exécuter sur les serveurs d’Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations du développeur, pas de résultats d’audit, et le code source n’est pas publié. PromptQuorum n’a pas inspecté le trafic réseau de l’application. Le développeur est désigné comme responsable du traitement au sens du RGPD et peut être contacté à l’adresse indiquée dans la politique.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Créateurs de vidéos courtes** qui ont besoin d’une musique de fond adaptée à un clip sans fouiller une banque de sons.',
          '**Développeurs de jeux indépendants et podcasteurs** qui veulent des boucles instrumentales ou des fichiers WAV pour leurs propres projets.',
          '**Possesseurs d’iPhone curieux de la génération sur l’appareil** qui acceptent un gros premier téléchargement et une application encore peu éprouvée.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité sonore.** PromptQuorum n’a pas écouté de morceaux complets : qualité musicale, variété et comportement des boucles ne sont pas évalués ; les exemples du site proviennent du développeur.',
          '**Licences et droits.** Le développeur affirme que tous les morceaux sont libres de droits pour un usage commercial et que le modèle Orpheus a été entraîné sur de l’audio sous licence et sous Creative Commons ; PromptQuorum n’a pas vérifié les licences des moteurs, et ceci ne constitue pas un conseil juridique.',
          '**Limites de la version gratuite.** La FAQ annonce trois morceaux par jour de 30 secondes maximum plus un morceau long gratuit, tandis que le texte tarifaire parle de générations illimitées à durée fixe ; les deux ne sont pas conciliés.',
          '**Chauffe et batterie.** Le développeur indique que les sessions Live sont limitées par la température ; autonomie, consommation et performances sur les anciens téléphones ne sont pas testées.',
          '**Autres appareils.** La fiche App Store indique une compatibilité iPad, Mac et Vision que le site du développeur ne mentionne pas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Bark](/fr/power-local-llm/bark-tts-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Modèle vocal open source qui peut aussi produire des effets sonores et de courtes musiques ; un outil de développeur, pas une application mobile' },
          { 'Application': '[MLX-Audio](/fr/power-local-llm/mlx-audio-review)', 'Plateformes': 'macOS (puce Apple)', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Bibliothèque Python de synthèse et de reconnaissance vocales sur Mac ; pas de flux de travail musical' },
        ],
        note: 'Aucune autre application de génération musicale n’a encore de test PromptQuorum : ce sont donc les outils audio sur l’appareil les plus proches ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser la musique sur YouTube ou dans un jeu commercial ?',
            a: 'Selon le développeur, chaque morceau, gratuit ou Pro, est libre de droits et utilisable commercialement, et ni Murmur ni ses fournisseurs de modèles ne revendiquent de droits sur vos créations. Il prévient aussi que des systèmes automatisés comme Content ID peuvent, rarement, signaler une fausse correspondance, que vous pouvez contester.',
          },
          {
            q: 'Murmur produit-il des voix ou des paroles ?',
            a: 'Non. Le développeur le décrit comme un générateur purement instrumental, destiné aux ambiances de fond, aux beats lo-fi et aux boucles cinématographiques.',
          },
          {
            q: 'Pourquoi la version gratuite est-elle décrite différemment à deux endroits ?',
            a: 'La FAQ du développeur annonce trois morceaux gratuits par jour de 30 secondes maximum plus un morceau long, tandis que sa section tarifaire décrit des générations illimitées à durée fixe. Vérifiez les limites dans l’application avant de vous fier à l’une ou l’autre.',
          },
          {
            q: 'Combien coûte Pro en dehors des États-Unis ?',
            a: 'Sur les App Store consultés le 24 octobre 2026, le Lifetime Unlock coûtait 19,99 € en Allemagne, en Espagne et en France, 3 000 ¥ au Japon, 29 000 ₩ en Corée du Sud et 79,90 R$ au Brésil, contre 17,99 $ aux États-Unis.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Murmur est un moyen ciblé et activement mis à jour d’obtenir de la musique instrumentale pour vos clips depuis un iPhone, avec une version gratuite pour l’essayer et un prix Pro unique plutôt qu’un abonnement. En contrepartie, son code est fermé, il provient d’un seul développeur indépendant, exige un iOS récent et un gros téléchargement de modèles, et aucune de ses promesses sonores n’a pu être vérifiée ici. Il convient aux créateurs qui veulent des musiques de fond rapides qui, selon le développeur, sont générées sur le téléphone, et peuvent d’abord tester la version gratuite ; quiconque a besoin d’une licence documentée pour la musique générée doit lire attentivement les conditions des moteurs et la déclaration du développeur avant tout usage commercial.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Murmur sur l’App Store](https://apps.apple.com/app/id6776807467) — description, historique des versions, prérequis, étiquettes de confidentialité et prix des achats intégrés par pays, consultés le 24 octobre 2026.',
          '[Site de Murmur](https://murmurapps.com) — liste des fonctions, FAQ, description des moteurs et texte tarifaire, consultés le 24 octobre 2026.',
          '[Politique de confidentialité de Murmur](https://murmurapps.com/privacy/) — collecte de données, tiers et options de refus, mise à jour le 16 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Bark](/fr/power-local-llm/bark-tts-review) — un modèle audio génératif qui peut ajouter effets sonores et musique à la voix.',
          '[Test de MLX-Audio](/fr/power-local-llm/mlx-audio-review) — synthèse et reconnaissance vocales sur puce Apple.',
          '[Comparatif des outils voix et audio](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-ja.webp',
    title: 'Murmurレビュー：iPhoneで動くオンデバイスAI作曲アプリ',
    seoTitle: 'Murmurレビュー：iPhone上で作曲するオンデバイスAI音楽アプリ',
    intro:
      'Murmurは、独立系開発者の[Konstantin Tabakov](https://murmurapps.com)によるiPhoneアプリです。写真・動画・ゲーム向けに、インストゥルメンタル音楽を作曲します。開発者によれば、初回にモデルを一度ダウンロードした後は、すべての曲をiPhone上で生成します。ダウンロードは無料で、Proは買い切りで解放できます。このレビューは、2026年10月24日に確認したApp Storeの掲載情報、開発者の公式サイト、プライバシーポリシーに基づきます。PromptQuorumは実機でのテストを行っていません。',
    metaDescription:
      'Murmurレビュー：写真・動画・ゲーム向けのBGMをiPhone上で作曲するAI音楽アプリ。無料で、Proは買い切り。料金、動作要件、プライバシー、未検証の点を解説します。',
    twitterDescription:
      'Murmurレビュー：写真や動画に合わせてiPhone上でBGMを作るAI音楽アプリ。無料、Proは買い切り。情報源で確認できた点とできなかった点。',
    audience:
      'BGMをiPhone上で生成したいクリエイターやiPhoneユーザー。情報源で確認できる点、開発者の主張にとどまる点、費用を知りたい方向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'murmur レビュー',
    targetKeywords: [
      'murmur レビュー',
      'murmur ai 作曲 iphone',
      'オンデバイス ai 作曲アプリ',
      'オフライン ai 作曲 iphone',
      'ロイヤリティフリー ai bgm 動画',
      '写真 動画 ai bgm 自動生成',
      'murmur オンデバイス ai 音楽',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur（バージョン2.2.5、2026年10月22日更新）は、写真・動画・ゲーム向けのインストゥルメンタル音楽をiPhone上で作曲するアプリです。**ダウンロードは無料で、サブスクリプションではなく買い切りのPro解放を販売しています。ボーカルは生成しません。本記事の記載はすべて、App Storeの掲載情報、開発者のサイトとプライバシーポリシーに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'MurmurはiPhoneで本当にオフラインでAI音楽を作れますか？',
        answer:
          '開発者によれば可能です。モデルを一度ダウンロードした後は、インターネット接続なしでiPhone上で曲を生成します。開発者のプライバシーポリシーでは、プロンプトと保存した曲はアップロードされない一方、匿名の利用データとクラッシュデータはオフにしない限り収集されるとしています。',
        bullets: [
          'Scoreモードは写真や動画に合わせて作曲し、クリップの長さに曲を合わせます。',
          'Liveモードは画面上のノブで操作できるインストゥルメンタルを連続再生します。',
          'Presets・Moments・Story Worldsでワンタップで作曲を始められます。',
          '書き出しはWAVファイルと、新しい音楽を付けた動画に対応します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Murmurとは', anchor: 'what-is-murmur' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
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
            text: 'Murmurは、プリセット、テキストプロンプト、または自分の写真や動画から、iPhone上でインストゥルメンタル音楽を生成するクローズドソースのiPhoneアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'クリップや雰囲気を選ぶと、アプリが数秒でオリジナルのインストゥルメンタル曲を作り、音声ファイルまたは新しいBGM付きの動画として保存できます。',
          },
        ],
        items: [
          'メンテナンス：バージョン2.2.5は2026年10月22日に公開され、バージョン履歴では6月以降に頻繁なリリースが確認できるため、更新停止の警告は対象外です。',
          'エンジン：開発者によれば、Scoreと通常の曲はOrpheus、LiveモードはGoogleのMagenta RTが担当します。',
          '費用：1日あたりの制限付きの無料版と、買い切りのPro解放があります。サブスクリプションはありません。',
          '出力：インストゥルメンタルのみで、ボーカルや歌詞は生成しません。',
          '開発元：独立系の個人開発者で、ソースコードは公開されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したApp Storeの掲載情報、開発者のサイトとプライバシーポリシーに基づきます。PromptQuorumはアプリのインストール、試聴、ベンチマークを行っていないため、音質は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'Murmurとは',
        content: [
          '**Murmurは、プリセット、文章によるシーンの説明、または選んだ写真や動画から、オリジナルのインストゥルメンタル曲を作曲するiPhone向けAI音楽生成アプリです。**App Storeでは「Murmur: On-Device AI Music」として「ミュージック」カテゴリに掲載され、販売元はKonstantin Tabakovです。掲載が初めて確認できるのは2026年6月16日です。',
          '開発者によれば、2つのエンジンが使われています。Stability AIの技術を基盤とするとされるOrpheusが通常の曲とScoreのサウンドトラックを作り、GoogleのMagenta RTがLiveモードを担当し、「Classic」エンジンとしても選択できます。App Storeのタイトルはストアごとに異なり、たとえばドイツでは「Murmur: KI-Musik-Generator」、日本では「Murmur: AI作曲・BGMメーカー」ですが、いずれも同じアプリです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**MurmurはiPhone向けにApp Storeから入手します。Android版、Web版、デスクトップネイティブ版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'iPhone', '入手方法': '[App StoreのMurmur](https://apps.apple.com/app/id6776807467)、無料ダウンロード（App内課金あり）' },
          { '項目': 'Murmur Pro', '入手方法': '買い切りの「Lifetime Unlock」、¥3,000（日本のApp Store）。サブスクリプションなし' },
          { '項目': '公式サイト', '入手方法': '[murmurapps.com](https://murmurapps.com)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { '項目': 'ソースコード', '入手方法': '非公開' },
        ],
        note: 'レビュー対象のバージョン：2.2.5（App Storeによれば2026年10月22日公開）。モデルのダウンロード前のアプリサイズは75.9 MBです。掲載情報にはiPad、Appleシリコン搭載Mac、Apple Visionへの対応も表示されていますが、開発者のサイトではiPhoneアプリとして説明されています。価格は国や地域のストアによって異なります。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**App Storeでは最小要件はiOS 26.0とされ、初回起動時のモデルのダウンロードはiPhoneの機種により1.2 GBまたは2.1 GBです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'App StoreではiOSまたはiPadOS 26.0以降。開発者のFAQではOrpheusエンジンにはiOS 18以降が必要としています' },
          { '項目': 'モデルのダウンロード', '情報源の記載': 'iPhone 15 Pro以降はフルエンジンで約2.1 GB、それ以前のiPhoneは約1.2 GB（Orpheus Small）' },
          { '項目': 'シーンの提案', '情報源の記載': 'iPhone 15 Pro以降・iOS 27でApple Intelligenceが必要。それ以外でもScoreはプリセットとプロンプトで使えます' },
          { '項目': 'インターネット', '情報源の記載': 'モデルのダウンロード時に一度だけ必要で、その後の曲の生成には不要' },
          { '項目': 'Liveセッション', '情報源の記載': 'iPhoneの発熱のため数分に制限されます' },
        ],
        note: 'OSの2つの数値は掲載情報とサイトで異なります。アプリをインストールできるかどうかを決めるのはApp Storeの記載です。また、掲載情報にはRAMについての記載がありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順は開発者自身の「使い方」の説明に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールしてモデルをダウンロードする',
            whyItMatters: 'App StoreからMurmurをインストールし、ネットワーク接続のある状態でモデルを一度ダウンロードします。',
          },
          {
            title: 'シーンを選ぶ',
            whyItMatters: '写真や動画を選び、Preset、Moment、Story Worldを選択するか、シーンを自分の言葉で説明します。',
          },
          {
            title: 'Murmurに作曲させる',
            whyItMatters: 'アプリがクリップと同じ長さのオリジナルのインストゥルメンタルを数秒で作ります。英語以外のプロンプトは、先にiPhone上で翻訳されます。',
          },
          {
            title: '書き出す',
            whyItMatters: '新しい音楽付きの動画を保存・共有するか、編集ソフトやゲームエンジン用に曲をWAVファイルで書き出します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてApp Storeの説明文または開発者のサイトによるもので、独自のテストは行っていません。**',
        ],
        items: [
          '**Score（2.2の新機能）。**写真や動画を選び、エピックやチルなどの雰囲気を指定すると、クリップの長さに合ったサウンドトラックが作られます。元の音声は残すことも置き換えることもでき、テイクを失わずに作り直せます。',
          '**Presets・Moments・Story Worlds。**170以上の厳選プリセット、誕生日や旅行などすぐに使える31のMoments（シーン）、検索できる40以上の映画的なムード（Story Worlds）を用意しています。',
          '**Liveモード。**1秒ごとに作曲される連続したインストゥルメンタルで、ビート、ベース、キー、ストリングスなどのレイヤーをフェードイン・アウトして操作します。',
          '**プロンプトと言語。**独自のシーンプロンプトに対応し、ドイツ語、フランス語、スペイン語、ポルトガル語、日本語のプロンプトはiPhone上で翻訳されます。App Storeには11のインターフェース言語が掲載されています。',
          '**ライブラリと書き出し。**保存した曲は編集してWAVファイルで書き出せます。完成した動画は保存、共有、または9:16か1:1でInstagramに投稿できます。',
        ],
        note: 'Pro解放で無料版の制限がなくなります：最長6分の曲、すべてのプリセット、独自プロンプト、Liveモード、WAV書き出し、透かしなしでのフルレングス動画へのScore。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年10月16日に最終更新されたプライバシーポリシーによれば、プロンプト、スタイルの選択、保存した曲はiPhone上で処理・保存され、アップロードされません。**開発者のFAQによれば、Scoreで使う写真や動画もiPhone上にとどまります。アカウントは不要で、ポリシーでは広告、広告トラッキング、位置情報へのアクセスはないとしています。',
          '一方で、アプリは一部のデータを送信します。EU内でホストされるPostHogの分析（端末の機種、iOSとアプリのバージョン、利用イベント）、Sentryのクラッシュレポート、そしてAppleとRevenueCatを通じた購入データです。モデルのダウンロードにはApple App Attestと署名付きリンクが使われるため、サーバーにはIPアドレスが見えますが、ポリシーによればプロンプトや音声は送られません。分析とクラッシュレポートは「設定」の「プライバシー」でオフにできます。音声入力にはAppleの音声認識が使われ、Appleのサーバー上で処理される場合があります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の申告であり監査結果ではなく、ソースコードも公開されていません。PromptQuorumはアプリのネットワーク通信を調べていません。開発者はGDPR上のデータ管理者として記載されており、ポリシーに記載された連絡先から問い合わせできます。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ショート動画のクリエイター。**クリップに合うBGMが必要で、ストック音源のライブラリを探したくない方。',
          '**インディーゲーム開発者やポッドキャスター。**自分のプロジェクト用にインストゥルメンタルのループやWAVファイルが欲しい方。',
          '**オンデバイス生成に興味のあるiPhoneユーザー。**大容量の初回ダウンロードと、実績の少ないアプリであることを受け入れられる方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**音質。**PromptQuorumは曲を通して聴いていないため、音楽的な品質、バリエーション、ループの挙動は評価していません。サイト上のサンプルは開発者自身のものです。',
          '**ライセンスと権利。**開発者は、すべての曲が商用利用可能なロイヤリティフリーであり、Orpheusモデルはライセンス取得済みの音源とクリエイティブ・コモンズの音源で学習されたとしています。PromptQuorumはエンジンのライセンスを確認しておらず、本記事は法的助言ではありません。',
          '**無料版の制限。**FAQでは1日3曲（各最長30秒）と長尺の曲1曲が無料とされる一方、料金の説明では固定長の生成が無制限とされており、両者の整合は取れていません。',
          '**発熱とバッテリー。**開発者はLiveセッションが発熱により制限されるとしています。連続使用時間、バッテリー消費、古い機種での性能はテストされていません。',
          '**その他のデバイス。**App Storeの掲載情報にはiPad、Mac、Visionへの対応が表示されていますが、開発者のサイトでは触れられていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Bark](/ja/power-local-llm/bark-tts-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '効果音や短い音楽も生成できるオープンソースの音声モデル。スマートフォンアプリではなく開発者向けツール' },
          { 'アプリ': '[MLX-Audio](/ja/power-local-llm/mlx-audio-review)', '対応プラットフォーム': 'macOS（Appleシリコン）', '価格／ライセンス': '無料／MIT', '主な違い': 'Mac上で音声生成と音声認識を行うPythonライブラリ。音楽制作のワークフローはなし' },
        ],
        note: 'PromptQuorumには他の音楽生成アプリのレビューがまだないため、最も近いオンデバイスの音声ツールを挙げています。各アプリの最新の価格、ライセンス、対応プラットフォームはそれぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '生成した音楽はYouTubeや商用ゲームで使えますか？',
            a: '開発者によれば、無料版・Proを問わずすべての曲はロイヤリティフリーで商用利用でき、Murmurもモデル提供元も生成物の権利を主張しません。また、Content IDなどの自動システムがまれに誤って一致と判定することがあり、その場合は異議申し立てができると注意を促しています。',
          },
          {
            q: 'Murmurはボーカルや歌詞を生成しますか？',
            a: 'いいえ。開発者は、BGM的なサウンドスケープ、lo-fiビート、映画的なループを目的とした純粋なインストゥルメンタル生成アプリだと説明しています。',
          },
          {
            q: '無料版の内容が2か所で異なるのはなぜですか？',
            a: '開発者のFAQでは1日3曲（各最長30秒）と長尺の曲1曲が無料とされる一方、料金のセクションでは固定長の生成が無制限と説明されています。どちらかを前提にする前に、アプリ内で制限を確認してください。',
          },
          {
            q: '米国以外ではProの価格はいくらですか？',
            a: '2026年10月24日に確認したApp Storeの各ストアでは、Lifetime Unlockはドイツ・スペイン・フランスで€19.99、日本で¥3,000、韓国で₩29,000、ブラジルでR$79.90、米国では$17.99でした。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Murmurは、iPhoneからクリップ用のインストゥルメンタル音楽を得るための、用途を絞った活発に更新されているアプリです。試せる無料版があり、Proはサブスクリプションではなく買い切りです。一方で、クローズドソースで、開発者は独立系の1人であり、新しいiOSと大容量のモデルのダウンロードが必要で、音に関する主張はここでは一つも検証できませんでした。開発者によれば端末上で生成されるBGMを素早く作りたく、先に無料版を試せるクリエイターに向いています。生成した音楽のライセンスを文書で確認する必要がある方は、曲を商用利用する前にエンジンの利用規約と開発者の説明を注意深く読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのMurmur](https://apps.apple.com/app/id6776807467) — 説明文、バージョン履歴、動作要件、プライバシーラベル、ストアごとのApp内課金価格（2026年10月24日確認）。',
          '[Murmur公式サイト](https://murmurapps.com) — 機能一覧、FAQ、エンジンの説明、料金の説明（2026年10月24日確認）。',
          '[Murmurプライバシーポリシー](https://murmurapps.com/privacy/) — データ収集、第三者、オプトアウト（2026年10月16日最終更新）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Barkレビュー](/ja/power-local-llm/bark-tts-review) — 音声に効果音や音楽を加えられる生成オーディオモデル。',
          '[MLX-Audioレビュー](/ja/power-local-llm/mlx-audio-review) — Appleシリコンでの音声生成と音声認識。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — このレビューが属するカテゴリの比較記事。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-pt.webp',
    title: 'Análise do Murmur: gerador de música com IA no próprio iPhone',
    seoTitle: 'Análise do Murmur: música com IA direto no iPhone',
    intro:
      'O Murmur é um app para iPhone do desenvolvedor independente [Konstantin Tabakov](https://murmurapps.com) que compõe músicas instrumentais para fotos, vídeos e jogos e, segundo ele, gera cada faixa no próprio celular depois de um download único dos modelos. O download é gratuito, com um desbloqueio Pro de pagamento único. Esta análise se baseia na página da App Store, no site do desenvolvedor e na política de privacidade dele, verificados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Murmur: app para iPhone que compõe música instrumental com IA para fotos, vídeos e jogos no aparelho. Grátis, com Pro vitalício; não testado.',
    twitterDescription:
      'Análise do Murmur: música com IA gerada no iPhone para suas fotos e vídeos. Grátis, Pro de pagamento único, o que as fontes confirmam e o que não confirmam.',
    audience:
      'Criadores de conteúdo e usuários de iPhone que querem trilhas de fundo geradas no celular e precisam saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do murmur',
    targetKeywords: [
      'análise murmur',
      'murmur música com ia iphone',
      'gerador de música com ia no aparelho',
      'app de música com ia offline para iphone',
      'música com ia livre de royalties para vídeo',
      'trilha sonora com ia para fotos e vídeos',
      'murmur música com ia offline',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**O Murmur (versão 2.2.5, atualizada em 22 de outubro de 2026) é um app para iPhone que compõe, no próprio aparelho, músicas instrumentais para suas fotos, vídeos e jogos.** O download é gratuito e, em vez de assinatura, ele vende um desbloqueio Pro de pagamento único. Ele não gera vocais, e tudo o que consta aqui vem da página da App Store, do site do desenvolvedor e da política de privacidade dele.',
    quickAnswerTop: {
      pt: {
        question: 'O Murmur realmente cria música com IA offline no iPhone?',
        answer:
          'Segundo o desenvolvedor, sim: depois de um download único dos modelos, as faixas são geradas no celular sem conexão com a internet. A política de privacidade dele acrescenta que prompts e faixas salvas não são enviados, enquanto dados anônimos de uso e de falhas são coletados, a menos que você os desative.',
        bullets: [
          'O modo Score compõe música para uma foto ou vídeo e a ajusta à duração do clipe.',
          'O modo Live toca um set instrumental contínuo que você conduz com controles na tela.',
          'Presets, Moments e Story Worlds oferecem pontos de partida com um toque.',
          'É possível exportar arquivos WAV e vídeos com a nova trilha.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Murmur?', anchor: 'what-is-murmur' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
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
            text: 'O Murmur é um app de código fechado para iPhone que transforma presets, prompts de texto ou suas próprias fotos e vídeos em música instrumental gerada no celular.',
          },
          {
            type: 'plain-terms',
            text: 'Você escolhe um clipe ou um clima, o app cria uma faixa instrumental original em segundos e você a salva como áudio ou como vídeo com a nova trilha sonora.',
          },
        ],
        items: [
          'Manutenção: a versão 2.2.5 foi lançada em 22 de outubro de 2026 e o histórico de versões mostra atualizações frequentes desde junho, então não se aplica nenhum aviso de projeto parado.',
          'Motores: Orpheus para o Score e as faixas padrão, e o Magenta RT do Google para o modo Live, segundo o desenvolvedor.',
          'Custo: plano gratuito com limites diários e um desbloqueio Pro de pagamento único; não há assinatura.',
          'Resultado: apenas instrumental, sem vocais nem letras.',
          'Desenvolvedor: um desenvolvedor independente, sem código-fonte publicado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, no site do desenvolvedor e na política de privacidade dele, verificados em 24 de outubro de 2026. A PromptQuorum não instalou, não ouviu nem fez benchmark do app, por isso a qualidade do som não foi avaliada.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'O que é o Murmur?',
        content: [
          '**O Murmur é um gerador de música com IA para iPhone que compõe faixas instrumentais originais a partir de presets, descrições de cena escritas ou de uma foto ou vídeo que você escolher.** A App Store o lista como "Murmur: On-Device AI Music" na categoria Música, com o vendedor Konstantin Tabakov, e a página apareceu pela primeira vez em 16 de junho de 2026.',
          'O desenvolvedor diz que dois motores fazem o trabalho: o Orpheus, descrito como baseado em tecnologia da Stability AI, cria as faixas padrão e as trilhas do Score, enquanto o Magenta RT do Google move o modo Live e continua disponível como motor "Classic". O título na App Store varia conforme a loja de cada país, por exemplo "Murmur: KI-Musik-Generator" na Alemanha e "Murmur: AI作曲・BGMメーカー" no Japão; todos se referem ao mesmo app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Murmur é baixado pela App Store para iPhone; não há versão listada para Android, web ou desktop nativo.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'iPhone', 'Onde obter': '[Murmur na App Store](https://apps.apple.com/app/id6776807467), download gratuito com compra no app' },
          { 'Opção': 'Murmur Pro', 'Onde obter': '"Lifetime Unlock" de pagamento único, R$ 79,90 (loja brasileira); sem assinatura' },
          { 'Opção': 'Site', 'Onde obter': '[murmurapps.com](https://murmurapps.com)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Não publicado' },
        ],
        note: 'Versão analisada: 2.2.5, lançada em 22 de outubro de 2026 segundo a App Store; o app tem 75.9 MB antes do download dos modelos. A página também indica compatibilidade com iPad, Mac com Apple silicon e Apple Vision, enquanto o site do desenvolvedor descreve um app para iPhone. O preço acima é o da App Store brasileira; os preços variam por país.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A App Store indica o iOS 26.0 como mínimo, e o download dos modelos na primeira execução é de 1.2 GB ou 2.1 GB, dependendo do iPhone.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'iOS ou iPadOS 26.0 ou superior segundo a App Store; o FAQ do desenvolvedor diz que o motor Orpheus exige iOS 18 ou superior' },
          { 'Item': 'Download dos modelos', 'O que dizem as fontes': 'Cerca de 2.1 GB para o motor completo no iPhone 15 Pro e mais novos, cerca de 1.2 GB (Orpheus Small) em iPhones mais antigos' },
          { 'Item': 'Sugestões de cena', 'O que dizem as fontes': 'Exigem Apple Intelligence no iPhone 15 Pro ou mais novo com iOS 27; nos demais, o Score funciona com presets e prompts' },
          { 'Item': 'Internet', 'O que dizem as fontes': 'Necessária uma vez para baixar os modelos, não para gerar faixas depois' },
          { 'Item': 'Sessões Live', 'O que dizem as fontes': 'Limitadas a poucos minutos por causa do aquecimento do celular' },
        ],
        note: 'Os dois números de sistema operacional divergem entre a App Store e o site; o que vale para saber se o app instala é o da App Store, e a página não diz nada sobre RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o roteiro "como funciona" do próprio desenvolvedor; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale e baixe os modelos',
            whyItMatters: 'Instale o Murmur pela App Store e deixe que ele baixe os modelos uma única vez, com conexão de rede.',
          },
          {
            title: 'Comece por uma cena',
            whyItMatters: 'Escolha uma foto ou vídeo, selecione um preset, Moment ou Story World, ou descreva a cena com suas próprias palavras.',
          },
          {
            title: 'Deixe o Murmur compor',
            whyItMatters: 'O app cria uma faixa instrumental original em segundos, com a mesma duração do seu clipe; prompts em outros idiomas que não o inglês são traduzidos antes no próprio aparelho.',
          },
          {
            title: 'Exporte',
            whyItMatters: 'Salve o vídeo com a nova música, compartilhe-o ou exporte a faixa como arquivo WAV para um editor ou um motor de jogos.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição na App Store ou do site do desenvolvedor; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Score (trilha sonora, novo na 2.2).** Escolha uma foto ou vídeo, defina um clima como épico ou relaxado e receba uma trilha com a duração do clipe; você pode manter ou substituir o som original e tentar de novo sem perder uma versão.',
          '**Presets, Moments e Story Worlds.** Mais de 170 presets selecionados, 31 Moments prontos, como aniversários e viagens, e mais de 40 climas cinematográficos pesquisáveis.',
          '**Modo Live (ao vivo).** Um set instrumental contínuo composto segundo a segundo, que você conduz ativando e desativando gradualmente camadas como batida, baixo, teclados e cordas.',
          '**Prompts e idiomas.** Prompts de cena personalizados, com prompts em alemão, francês, espanhol, português e japonês traduzidos no aparelho; a App Store lista onze idiomas de interface.',
          '**Biblioteca e exportação.** As faixas salvas podem ser editadas e exportadas como arquivos WAV, e os vídeos prontos podem ser salvos, compartilhados ou publicados no Instagram em 9:16 ou 1:1.',
        ],
        note: 'O desbloqueio Pro remove os limites do plano gratuito: faixas de até 6 minutos, todos os presets, prompts personalizados, modo Live, exportação em WAV e trilhas para vídeos completos sem marca d\'água.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 16 de outubro de 2026, diz que prompts, escolhas de estilo e faixas salvas são processados e armazenados no iPhone e não são enviados.** Fotos e vídeos usados no Score também ficam no celular, segundo o FAQ do desenvolvedor. Não é preciso criar conta, e a política afirma que não há publicidade, rastreamento de anúncios nem acesso à localização.',
          'O app envia alguns dados: análises do PostHog hospedado na UE (modelo do aparelho, versão do iOS e do app, eventos de uso), relatórios de falhas do Sentry e dados de compra por meio da Apple e da RevenueCat. Os downloads dos modelos usam o App Attest da Apple e links assinados, então o servidor vê seu endereço IP, mas, segundo a política, nunca prompts nem áudio. Análises e relatórios de falhas podem ser desativados em Ajustes, Privacidade. O ditado por voz usa o reconhecimento de fala da Apple, que pode rodar nos servidores da Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A PromptQuorum não inspecionou o tráfego de rede do app. O desenvolvedor é indicado como controlador dos dados segundo o GDPR e pode ser contatado pelo endereço informado na política.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Criadores de vídeos curtos** que precisam de música de fundo que combine com o clipe e não querem procurar em um banco de músicas.',
          '**Desenvolvedores de jogos independentes e podcasters** que querem loops instrumentais ou arquivos WAV para os próprios projetos.',
          '**Donos de iPhone curiosos sobre geração no aparelho** que aceitam um primeiro download grande e um app ainda não comprovado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade do som.** A PromptQuorum não ouviu faixas completas, então qualidade musical, variedade e comportamento dos loops não foram avaliados; os exemplos do site são do próprio desenvolvedor.',
          '**Licenciamento e direitos.** O desenvolvedor afirma que todas as faixas são livres de royalties para uso comercial e que o modelo Orpheus foi treinado com áudio licenciado e em Creative Commons; a PromptQuorum não verificou as licenças dos motores, e isto não é aconselhamento jurídico.',
          '**Limites do plano gratuito.** O FAQ fala em três faixas por dia de até 30 segundos, mais uma faixa longa grátis, enquanto o texto de preços fala em gerações ilimitadas de duração fixa; as duas informações não são conciliadas.',
          '**Aquecimento e bateria.** O desenvolvedor diz que as sessões Live são limitadas pela temperatura; tempo de uso, consumo de bateria e desempenho em celulares mais antigos não foram testados.',
          '**Outros aparelhos.** A página da App Store indica compatibilidade com iPad, Mac e Vision, que o site do desenvolvedor não menciona.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Bark](/pt/power-local-llm/bark-tts-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Modelo de fala de código aberto que também gera efeitos sonoros e trechos curtos de música; uma ferramenta para desenvolvedores, não um app de celular' },
          { 'App': '[MLX-Audio](/pt/power-local-llm/mlx-audio-review)', 'Plataformas': 'macOS (Apple silicon)', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Biblioteca Python para geração e reconhecimento de fala em Macs; sem fluxo de trabalho para música' },
        ],
        note: 'Nenhum outro app de geração de música tem análise na PromptQuorum ainda, por isso estas são as ferramentas de áudio no aparelho mais próximas; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar a música no YouTube ou em um jogo comercial?',
            a: 'O desenvolvedor diz que todas as faixas, grátis ou Pro, são livres de royalties e podem ser usadas comercialmente, e que nem o Murmur nem os fornecedores dos modelos reivindicam direitos sobre o que você gera. Ele também alerta que sistemas automáticos como o Content ID podem, raramente, apontar uma correspondência falsa, que pode ser contestada.',
          },
          {
            q: 'O Murmur cria vocais ou letras?',
            a: 'Não. O desenvolvedor o descreve como um gerador puramente instrumental, voltado a ambientações sonoras de fundo, batidas lo-fi e loops cinematográficos.',
          },
          {
            q: 'Por que o plano gratuito aparece de forma diferente em dois lugares?',
            a: 'O FAQ do desenvolvedor fala em três faixas grátis por dia de até 30 segundos, mais uma faixa longa, enquanto a seção de preços descreve gerações ilimitadas de duração fixa. Confira os limites dentro do app antes de contar com qualquer uma das duas.',
          },
          {
            q: 'Quanto custa o Pro fora dos Estados Unidos?',
            a: 'Nas lojas da App Store verificadas em 24 de outubro de 2026, o Lifetime Unlock custava 19,99 € na Alemanha, na Espanha e na França, ¥3.000 no Japão, ₩29.000 na Coreia do Sul e R$ 79,90 no Brasil, contra US$ 17,99 nos EUA.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Murmur é uma forma focada e atualizada com frequência de obter música instrumental para clipes a partir do iPhone, com um plano gratuito para experimentar e um preço Pro único em vez de assinatura. Por outro lado, tem código fechado, vem de um único desenvolvedor independente, exige um iOS recente e um download grande de modelos, e nenhuma das afirmações sobre o som pôde ser verificada aqui. Ele atende criadores que querem trilhas de fundo rápidas que, segundo o desenvolvedor, são geradas no celular e que podem testar o plano gratuito primeiro; quem precisa de uma licença documentada para a música gerada deve ler com atenção os termos dos motores e a declaração do desenvolvedor antes de usar as faixas comercialmente.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Murmur na App Store](https://apps.apple.com/app/id6776807467) — descrição, histórico de versões, requisitos, rótulos de privacidade e preços de compras no app por loja, verificado em 24 de outubro de 2026.',
          '[Site do Murmur](https://murmurapps.com) — lista de recursos, FAQ, descrição dos motores e texto de preços, verificado em 24 de outubro de 2026.',
          '[Política de privacidade do Murmur](https://murmurapps.com/privacy/) — coleta de dados, terceiros e opções de desativação, atualizada pela última vez em 16 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Bark](/pt/power-local-llm/bark-tts-review) — um modelo de áudio generativo que pode adicionar efeitos sonoros e música à fala.',
          '[Análise do MLX-Audio](/pt/power-local-llm/mlx-audio-review) — geração e reconhecimento de fala em Apple silicon.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria à qual esta análise pertence.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-ar.webp',
    title: 'مراجعة Murmur: مولّد موسيقى بالذكاء الاصطناعي على iPhone',
    seoTitle: 'مراجعة Murmur: موسيقى بالذكاء الاصطناعي على iPhone',
    intro:
      'Murmur تطبيق لـ iPhone من المطوّر المستقل [Konstantin Tabakov](https://murmurapps.com) يؤلّف موسيقى آلية للصور ومقاطع الفيديو والألعاب، ويقول إنه يولّد كل مقطوعة على الهاتف نفسه بعد تنزيل النموذج مرة واحدة. التطبيق مجاني التنزيل، مع ترقية Pro تُدفع مرة واحدة. تستند هذه المراجعة إلى صفحة التطبيق في App Store وموقع المطوّر وسياسة الخصوصية، وقد رُوجعت في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Murmur: تطبيق iPhone يؤلّف موسيقى آلية بالذكاء الاصطناعي لصورك وفيديوهاتك وألعابك على الجهاز نفسه. مجاني مع ترقية Pro لمرة واحدة؛ لم نختبره.',
    twitterDescription:
      'مراجعة Murmur: موسيقى بالذكاء الاصطناعي تُولَّد على iPhone لصورك وفيديوهاتك. مجاني مع ترقية Pro لمرة واحدة، وما تؤكده المصادر وما لا تؤكده.',
    audience:
      'صنّاع المحتوى ومستخدمو iPhone الذين يريدون موسيقى خلفية تُولَّد على الهاتف، ويحتاجون إلى معرفة ما تؤكده المصادر وما يكتفي المطوّر بادعائه وكم تبلغ التكلفة.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Murmur',
    targetKeywords: [
      'مراجعة murmur',
      'murmur موسيقى ذكاء اصطناعي iphone',
      'مولد موسيقى بالذكاء الاصطناعي على الجهاز',
      'تطبيق موسيقى ذكاء اصطناعي بدون إنترنت iphone',
      'موسيقى ذكاء اصطناعي خالية من الحقوق للفيديو',
      'موسيقى تصويرية بالذكاء الاصطناعي للصور والفيديو',
      'murmur موسيقى على الجهاز',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur (الإصدار 2.2.5، حُدِّث في 22 أكتوبر 2026) تطبيق لـ iPhone يؤلّف موسيقى آلية لصورك وفيديوهاتك وألعابك على الجهاز نفسه.** تنزيله مجاني، ويبيع ترقية Pro تُدفع مرة واحدة بدلًا من الاشتراك. لا ينتج غناءً، وكل ما يرد هنا مصدره صفحة App Store وموقع المطوّر وسياسة الخصوصية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يولّد Murmur الموسيقى بالذكاء الاصطناعي على iPhone دون اتصال فعلًا؟',
        answer:
          'وفق المطوّر، نعم: بعد تنزيل النموذج مرة واحدة تُولَّد المقطوعات على الهاتف دون اتصال بالإنترنت. وتضيف سياسة الخصوصية لدى المطوّر أن الأوامر النصية والمقطوعات المحفوظة لا تُرفع، بينما تُجمع بيانات استخدام مجهولة وتقارير أعطال ما لم توقفها.',
        bullets: [
          'وضع Score (التأليف للمقطع) يؤلّف موسيقى لصورة أو فيديو ويضبطها على طول المقطع.',
          'وضع Live (البث المباشر) يبث مقطوعة آلية متواصلة توجّهها بمقابض على الشاشة.',
          'توفّر Presets وMoments وStory Worlds نقاط بداية بلمسة واحدة.',
          'يشمل التصدير ملفات WAV وفيديوهات بالموسيقى الجديدة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Murmur؟', anchor: 'what-is-murmur' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
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
            text: 'Murmur تطبيق مغلق المصدر لـ iPhone يحوّل الإعدادات الجاهزة أو الأوامر النصية أو صورك وفيديوهاتك إلى موسيقى آلية تُولَّد على الهاتف.',
          },
          {
            type: 'plain-terms',
            text: 'تختار مقطعًا أو حالة مزاجية، فيكتب التطبيق مقطوعة آلية أصلية في ثوانٍ، ثم تحفظها ملفًا صوتيًا أو فيديو بالموسيقى التصويرية الجديدة.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار 2.2.5 في 22 أكتوبر 2026، ويُظهر سجل الإصدارات تحديثات متكررة منذ يونيو، لذا لا ينطبق تحذير المشروع المتوقف.',
          'المحرّكات: Orpheus لوضع Score والمقطوعات العادية، وMagenta RT من Google لوضع Live، وفق المطوّر.',
          'التكلفة: فئة مجانية بحدود يومية وترقية Pro تُدفع مرة واحدة؛ ولا يوجد اشتراك.',
          'المخرجات: موسيقى آلية فقط، بلا غناء أو كلمات.',
          'المطوّر: مطوّر مستقل، وبلا شيفرة مصدرية منشورة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر وسياسة الخصوصية، وقد رُوجعت في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تستمع إليه ولم تقِس أداءه، لذا لا تقيّم المراجعة جودة الصوت.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'ما هو Murmur؟',
        content: [
          '**Murmur مولّد موسيقى بالذكاء الاصطناعي لـ iPhone يؤلّف مقطوعات آلية أصلية انطلاقًا من إعدادات جاهزة أو أوصاف مكتوبة للمشهد أو صورة أو فيديو تختاره.** يدرجه App Store باسم "Murmur: On-Device AI Music" ضمن فئة الموسيقى، والبائع Konstantin Tabakov، وقد ظهرت صفحته لأول مرة في 16 يونيو 2026.',
          'يقول المطوّر إن محرّكين يتوليان العمل: Orpheus، الموصوف بأنه مدعوم من Stability AI، يكتب المقطوعات العادية وموسيقى Score، بينما يشغّل Magenta RT من Google وضع Live ويبقى متاحًا للاختيار بوصفه محرّكًا "Classic". يختلف اسم التطبيق في App Store من متجر لآخر، فهو مثلًا "Murmur: KI-Musik-Generator" في ألمانيا و"Murmur: AI作曲・BGMメーカー" في اليابان؛ وكلها تشير إلى التطبيق نفسه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Murmur متاح للتنزيل من App Store على iPhone؛ ولا توجد نسخة مدرجة لـ Android أو للويب أو لسطح المكتب.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'iPhone', 'مصدر الحصول عليه': '[Murmur على App Store](https://apps.apple.com/app/id6776807467)، تنزيل مجاني مع شراء داخل التطبيق' },
          { 'الخيار': 'Murmur Pro', 'مصدر الحصول عليه': '"Lifetime Unlock" لمرة واحدة، $17.99 (المتجر الأمريكي)؛ بلا اشتراك' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[murmurapps.com](https://murmurapps.com)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': 'غير منشورة' },
        ],
        note: 'الإصدار الذي رُوجع: 2.2.5، صدر في 22 أكتوبر 2026 وفق App Store؛ وحجم التطبيق 75.9 MB قبل تنزيل النموذج. تُظهر الصفحة أيضًا توافقًا مع iPad وMac بمعالج Apple silicon وApple Vision، بينما يصف موقع المطوّر تطبيقًا لـ iPhone. الأسعار من المتجر الأمريكي وتختلف حسب البلد.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يحدد App Store الإصدار iOS 26.0 حدًا أدنى، ويبلغ تنزيل النموذج عند التشغيل الأول 1.2 GB أو 2.1 GB بحسب طراز iPhone.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'iOS أو iPadOS 26.0 أو أحدث وفق App Store؛ وتقول الأسئلة الشائعة لدى المطوّر إن محرّك Orpheus يتطلب iOS 18 أو أحدث' },
          { 'البند': 'تنزيل النموذج', 'ما تقوله المصادر': 'نحو 2.1 GB للمحرّك الكامل على iPhone 15 Pro وما بعده، ونحو 1.2 GB (Orpheus Small) على أجهزة iPhone الأقدم' },
          { 'البند': 'اقتراحات المشهد', 'ما تقوله المصادر': 'تتطلب Apple Intelligence على iPhone 15 Pro أو أحدث مع iOS 27؛ ويبقى Score عاملًا بالإعدادات الجاهزة والأوامر النصية على غيرها' },
          { 'البند': 'الإنترنت', 'ما تقوله المصادر': 'مطلوب مرة واحدة لتنزيل النماذج، لا لتوليد المقطوعات بعد ذلك' },
          { 'البند': 'جلسات Live', 'ما تقوله المصادر': 'محدودة ببضع دقائق بسبب سخونة الهاتف' },
        ],
        note: 'يختلف رقما نظام التشغيل بين صفحة المتجر والموقع؛ وصفحة App Store هي التي تحدد إن كان التطبيق سيُثبَّت، ولا تذكر الصفحة شيئًا عن ذاكرة RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات مخطط "كيف يعمل" الذي نشره المطوّر نفسه؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق ونزّل النماذج',
            whyItMatters: 'ثبّت Murmur من App Store ودعه ينزّل نماذجه مرة واحدة عبر اتصال بالشبكة.',
          },
          {
            title: 'ابدأ من مشهد',
            whyItMatters: 'اختر صورة أو فيديو، أو إعدادًا جاهزًا أو Moment أو Story World، أو صِف المشهد بكلماتك.',
          },
          {
            title: 'دع Murmur يؤلّف',
            whyItMatters: 'يكتب التطبيق مقطوعة آلية أصلية في ثوانٍ بطول مقطعك؛ وتُترجم الأوامر المكتوبة بغير الإنجليزية على الجهاز أولًا.',
          },
          {
            title: 'صدّر النتيجة',
            whyItMatters: 'احفظ الفيديو بموسيقاه الجديدة أو شاركه، أو صدّر المقطوعة ملف WAV لاستخدامها في محرّر فيديو أو محرّك ألعاب.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف App Store أو موقع المطوّر؛ ولم يُختبر أي منها اختبارًا مستقلًا.**',
        ],
        items: [
          '**Score (جديد في 2.2).** اختر صورة أو فيديو، وحدد إحساسًا مثل الملحمي أو الهادئ، لتحصل على موسيقى تصويرية بطول المقطع؛ ويمكنك إبقاء الصوت الأصلي أو استبداله، وإعادة المحاولة دون فقدان أي نسخة.',
          '**Presets وMoments وStory Worlds.** أكثر من 170 إعدادًا جاهزًا منتقى، و31 من Moments الجاهزة مثل أعياد الميلاد والسفر، وأكثر من 40 حالة مزاجية سينمائية قابلة للبحث.',
          '**وضع Live.** مقطوعة آلية متواصلة تُؤلَّف ثانية بثانية، توجّهها بإظهار طبقات مثل الإيقاع والباص والمفاتيح والوتريات أو إخفائها تدريجيًا.',
          '**الأوامر النصية واللغات.** أوامر مخصصة لوصف المشهد، مع ترجمة الأوامر المكتوبة بالألمانية والفرنسية والإسبانية والبرتغالية واليابانية على الجهاز؛ ويدرج App Store إحدى عشرة لغة للواجهة.',
          '**المكتبة والتصدير.** يمكن تعديل المقطوعات المحفوظة وتصديرها ملفات WAV، ويمكن حفظ الفيديوهات الجاهزة أو مشاركتها أو نشرها على Instagram بنسبة 9:16 أو 1:1.',
        ],
        note: 'ترفع ترقية Pro حدود الفئة المجانية: مقطوعات حتى 6 دقائق، وجميع الإعدادات الجاهزة، والأوامر المخصصة، ووضع Live، وتصدير WAV، وتأليف موسيقى لفيديوهات كاملة الطول بلا علامة مائية.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، المحدَّثة آخر مرة في 16 أكتوبر 2026، إن الأوامر النصية واختيارات الأسلوب والمقطوعات المحفوظة تُعالَج وتُخزَّن على iPhone ولا تُرفع.** وتبقى الصور والفيديوهات المستخدمة في Score على الهاتف أيضًا، وفق الأسئلة الشائعة لدى المطوّر. لا يلزم إنشاء حساب، وتنص السياسة على عدم وجود إعلانات أو تتبع إعلاني أو وصول إلى الموقع الجغرافي.',
          'لكن التطبيق يرسل بعض البيانات: تحليلات PostHog المستضافة في الاتحاد الأوروبي (طراز الجهاز وإصدار iOS وإصدار التطبيق وأحداث الاستخدام)، وتقارير أعطال Sentry، وبيانات الشراء عبر Apple وRevenueCat. تستخدم تنزيلات النموذج Apple App Attest وروابط موقّعة، فيرى الخادم عنوان IP الخاص بك، لكنه وفق السياسة لا يرى الأوامر النصية ولا الصوت أبدًا. يمكن إيقاف التحليلات وتقارير الأعطال من الإعدادات، ثم الخصوصية. ويستخدم الإملاء الصوتي خدمة التعرّف على الكلام من Apple، التي قد تعمل على خوادم Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. لم تفحص PromptQuorum حركة الشبكة الصادرة عن التطبيق. ويُسمّى المطوّر بوصفه المسؤول عن البيانات بموجب اللائحة العامة لحماية البيانات (GDPR)، ويمكن التواصل معه عبر العنوان الوارد في السياسة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**صنّاع الفيديوهات القصيرة** الذين يحتاجون إلى موسيقى خلفية تناسب المقطع ولا يريدون التنقيب في مكتبة موسيقى جاهزة.',
          '**مطورو الألعاب المستقلون وصنّاع البودكاست** الذين يريدون حلقات موسيقية آلية أو ملفات WAV لمشاريعهم.',
          '**مالكو iPhone المهتمون بالتوليد على الجهاز** الذين يقبلون تنزيلًا أوليًا كبيرًا وتطبيقًا لم تثبت جودته بعد.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الصوت.** لم تستمع PromptQuorum إلى مقطوعات كاملة، لذا لم تُقيَّم الجودة الموسيقية ولا التنوع ولا سلوك التكرار الحلقي؛ والأمثلة المعروضة على الموقع من إعداد المطوّر نفسه.',
          '**الترخيص والحقوق.** يقول المطوّر إن جميع المقطوعات خالية من حقوق الاستخدام للاستخدام التجاري، وإن نموذج Orpheus دُرِّب على صوتيات مرخّصة وأخرى بترخيص Creative Commons؛ ولم تتحقق PromptQuorum من تراخيص المحرّكات، وهذا ليس استشارة قانونية.',
          '**حدود الفئة المجانية.** تذكر الأسئلة الشائعة ثلاث مقطوعات يوميًا مدة كل منها حتى 30 ثانية إضافة إلى مقطوعة طويلة مجانية واحدة، بينما يتحدث نص التسعير عن توليد غير محدود بطول ثابت؛ ولا يوفّق المطوّر بين الروايتين.',
          '**السخونة والبطارية.** يقول المطوّر إن جلسات Live محدودة بسبب الحرارة؛ ولم تُختبر مدة التشغيل ولا استهلاك البطارية ولا الأداء على الهواتف الأقدم.',
          '**الأجهزة الأخرى.** تُظهر صفحة App Store توافقًا مع iPad وMac وVision لا يذكره موقع المطوّر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Bark](/ar/power-local-llm/bark-tts-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'نموذج كلام مفتوح المصدر يمكنه أيضًا إنتاج مؤثرات صوتية وموسيقى قصيرة؛ أداة للمطورين، لا تطبيق للهاتف' },
          { 'التطبيق': '[MLX-Audio](/ar/power-local-llm/mlx-audio-review)', 'المنصات': 'macOS (Apple silicon)', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'مكتبة Python لتوليد الكلام والتعرّف عليه على أجهزة Mac؛ بلا مسار عمل للموسيقى' },
        ],
        note: 'لا توجد بعد مراجعة من PromptQuorum لأي تطبيق آخر لتوليد الموسيقى، لذا فهذه أقرب أدوات الصوت العاملة على الجهاز؛ تحقّق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام الموسيقى على YouTube أو في لعبة تجارية؟',
            a: 'يقول المطوّر إن كل مقطوعة، في الفئة المجانية أو Pro، خالية من حقوق الاستخدام ويمكن استخدامها تجاريًا، وإن Murmur ومزوّدي نماذجه لا يطالبون بأي حقوق في مخرجاتك. ويحذّر أيضًا من أن الأنظمة الآلية مثل Content ID قد تُبلغ في حالات نادرة عن تطابق خاطئ يمكن الاعتراض عليه.',
          },
          {
            q: 'هل يكتب Murmur غناءً أو كلمات أغانٍ؟',
            a: 'لا. يصفه المطوّر بأنه مولّد موسيقى آلية بحتة موجّه إلى الأجواء الصوتية الخلفية وإيقاعات lo-fi والحلقات السينمائية.',
          },
          {
            q: 'لماذا تبدو الفئة المجانية مختلفة في موضعين؟',
            a: 'تذكر الأسئلة الشائعة لدى المطوّر ثلاث مقطوعات مجانية يوميًا مدة كل منها حتى 30 ثانية إضافة إلى مقطوعة طويلة واحدة، بينما يصف قسم التسعير توليدًا غير محدود بطول ثابت. تحقّق من الحدود داخل التطبيق قبل الاعتماد على أي منهما.',
          },
          {
            q: 'كم تكلّف ترقية Pro خارج الولايات المتحدة؟',
            a: 'في متاجر App Store التي رُوجعت في 24 أكتوبر 2026، كان سعر Lifetime Unlock هو 19.99 € في ألمانيا وإسبانيا وفرنسا، و¥3,000 في اليابان، و₩29,000 في كوريا الجنوبية، وR$ 79.90 في البرازيل، مقابل $17.99 في الولايات المتحدة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Murmur وسيلة مركّزة ومحدَّثة باستمرار للحصول على موسيقى آلية لمقاطعك من iPhone، مع فئة مجانية للتجربة وسعر Pro يُدفع مرة واحدة بدلًا من الاشتراك. في المقابل، هو مغلق المصدر، ويأتي من مطوّر مستقل واحد، ويتطلب إصدار iOS حديثًا وتنزيل نموذج كبير، ولم يكن ممكنًا هنا التحقق من أي من ادعاءاته المتعلقة بالصوت. يناسب صنّاع المحتوى الذين يريدون مقطوعات خلفية سريعة تُولَّد على الهاتف بحسب المطوّر ويمكنهم تجربة الفئة المجانية أولًا؛ أما من يحتاج إلى ترخيص موثّق للموسيقى المولَّدة فعليه قراءة شروط المحرّكات وتصريح المطوّر بعناية قبل استخدام المقطوعات تجاريًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Murmur على App Store](https://apps.apple.com/app/id6776807467) — الوصف وسجل الإصدارات والمتطلبات وملصقات الخصوصية وأسعار الشراء داخل التطبيق لكل متجر، رُوجعت في 24 أكتوبر 2026.',
          '[موقع Murmur](https://murmurapps.com) — قائمة الميزات والأسئلة الشائعة وأوصاف المحرّكات ونص التسعير، رُوجعت في 24 أكتوبر 2026.',
          '[سياسة خصوصية Murmur](https://murmurapps.com/privacy/) — جمع البيانات والأطراف الثالثة وخيارات الإيقاف، آخر تحديث في 16 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Bark](/ar/power-local-llm/bark-tts-review) — نموذج صوتي توليدي يمكنه إضافة مؤثرات صوتية وموسيقى إلى الكلام.',
          '[مراجعة MLX-Audio](/ar/power-local-llm/mlx-audio-review) — توليد الكلام والتعرّف عليه على Apple silicon.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-zh.webp',
    title: 'Murmur 评测：在 iPhone 本机运行的 AI 音乐生成器',
    seoTitle: 'Murmur 评测：iPhone 端侧 AI 音乐生成应用',
    intro:
      'Murmur 是独立开发者 [Konstantin Tabakov](https://murmurapps.com) 推出的 iPhone 应用，可为照片、视频和游戏创作纯器乐音乐。开发者表示，只需一次性下载模型，之后每首曲目都在手机本机生成。应用可免费下载，Pro 版为一次性解锁。本评测基于 2026年10月24日核对的 App Store 页面、开发者官网及其隐私政策；PromptQuorum 未上手实测该应用。',
    metaDescription:
      'Murmur 评测：在 iPhone 本机为照片、视频和游戏生成纯器乐 AI 音乐的应用。免费下载，Pro 一次性解锁；PromptQuorum 未实测，本文说明来源能证实什么。',
    twitterDescription:
      'Murmur 评测：iPhone 端侧 AI 音乐，为你的照片和视频配乐。免费下载，Pro 一次性解锁；哪些内容有来源证实，哪些没有。',
    audience:
      '希望在手机本机生成背景音乐的创作者和 iPhone 用户，需要了解来源证实了什么、哪些只是开发者的说法，以及费用是多少。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'murmur 评测',
    targetKeywords: [
      'murmur 评测',
      'murmur iphone ai 音乐',
      '端侧 ai 音乐生成器',
      'iphone 离线 ai 音乐 app',
      '视频免版税 ai 配乐',
      '照片视频 ai 配乐',
      'murmur 本地 ai 音乐',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur（版本 2.2.5，2026年10月22日更新）是一款 iPhone 应用，可在手机本机为你的照片、视频和游戏创作纯器乐音乐。**它可免费下载，付费方式是一次性 Pro 解锁而非订阅。它不生成人声；本文所有说法均来自 App Store 页面、开发者官网及其隐私政策。',
    quickAnswerTop: {
      zh: {
        question: 'Murmur 真的能在 iPhone 上离线生成 AI 音乐吗？',
        answer:
          '按开发者的说法，可以：一次性下载模型后，曲目在手机上生成，无需联网。开发者的隐私政策还说明，提示词和已保存的曲目不会上传；但匿名使用数据和崩溃数据默认会被收集，除非你手动关闭。',
        bullets: [
          'Score（配乐）模式为照片或视频创作音乐，并匹配片段时长。',
          'Live（实时）模式持续输出器乐，你可用屏幕上的旋钮调控。',
          'Presets、Moments 和 Story Worlds 提供一键起步的模板。',
          '可导出 WAV 文件，或导出配上新音乐的视频。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Murmur 是什么？', anchor: 'what-is-murmur' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
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
            text: 'Murmur 是一款闭源 iPhone 应用，可把预设、文字提示或你自己的照片和视频变成在手机本机生成的纯器乐音乐。',
          },
          {
            type: 'plain-terms',
            text: '你选一个片段或一种氛围，应用在几秒内写出一首原创器乐曲，你可以把它存成音频，或存成配上新配乐的视频。',
          },
        ],
        items: [
          '维护状态：版本 2.2.5 于 2026年10月22日发布，版本历史显示自 6 月以来更新频繁，因此无需显示项目停更警告。',
          '引擎：据开发者介绍，Score 和普通曲目使用 Orpheus，Live 模式使用 Google 的 Magenta RT。',
          '费用：免费版有每日限额，Pro 为一次性解锁，没有订阅。',
          '输出：仅限纯器乐，不含人声或歌词。',
          '开发者：一位独立开发者，未公开源代码。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026年10月24日核对的 App Store 页面、开发者官网及隐私政策。PromptQuorum 没有安装、试听或跑分测试该应用，因此不评价音质。',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'Murmur 是什么？',
        content: [
          '**Murmur 是一款 iPhone AI 音乐生成器，可根据预设、文字场景描述或你选择的照片或视频，创作原创纯器乐曲目。**它在 App Store 上的名称为“Murmur: On-Device AI Music”，归入“音乐”类别，销售者为 Konstantin Tabakov，于 2026年6月16日首次上架。',
          '开发者表示由两个引擎完成生成：Orpheus（官方描述为由 Stability AI 提供支持）负责普通曲目和 Score 配乐，Google 的 Magenta RT 驱动 Live 模式，并仍可作为“Classic”引擎选用。App Store 上的应用名称因地区而异，例如德国为“Murmur: KI-Musik-Generator”，日本为“Murmur: AI作曲・BGMメーカー”；它们都是同一款应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Murmur 通过 App Store 下载，仅面向 iPhone；未列出 Android、网页或桌面原生版本。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'iPhone', '获取方式': '[App Store 上的 Murmur](https://apps.apple.com/app/id6776807467)，免费下载，含 App 内购买' },
          { '选项': 'Murmur Pro', '获取方式': '一次性“Lifetime Unlock”，$17.99（美国区）；无订阅' },
          { '选项': '官网', '获取方式': '[murmurapps.com](https://murmurapps.com)' },
          { '选项': '隐私政策', '获取方式': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { '选项': '源代码', '获取方式': '未公开' },
        ],
        note: '本次评测版本：2.2.5，据 App Store 于 2026年10月22日发布；下载模型前应用大小为 75.9 MB。App Store 页面还显示兼容 iPad、搭载 Apple 芯片的 Mac 和 Apple Vision，而开发者官网介绍的是 iPhone 应用。价格取自美国区，各国/地区有所不同。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**App Store 标注的最低系统为 iOS 26.0；首次运行需下载 1.2 GB 或 2.1 GB 的模型，视 iPhone 机型而定。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': '据 App Store 为 iOS 或 iPadOS 26.0 及以上；开发者 FAQ 称 Orpheus 引擎需要 iOS 18 及以上' },
          { '项目': '模型下载', '来源说明': 'iPhone 15 Pro 及更新机型下载完整引擎约 2.1 GB，较旧 iPhone 下载 Orpheus Small 约 1.2 GB' },
          { '项目': '场景建议', '来源说明': '需在 iPhone 15 Pro 或更新机型上使用 iOS 27 的 Apple Intelligence；其他机型上 Score 仍可用预设和提示词' },
          { '项目': '网络', '来源说明': '仅下载模型时需要一次，之后生成曲目无需联网' },
          { '项目': 'Live 会话', '来源说明': '因手机发热，时长限制在几分钟内' },
        ],
        note: 'App Store 页面和官网给出的两个系统版本不一致；能否安装以 App Store 条目为准，该页面也未提及内存要求。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤按开发者自己的“使用方法”说明整理；PromptQuorum 未实际操作。**',
        ],
        numberedItems: [
          {
            title: '安装并下载模型',
            whyItMatters: '从 App Store 安装 Murmur，并在联网状态下让它一次性下载模型。',
          },
          {
            title: '从一个场景开始',
            whyItMatters: '选一张照片或一段视频，选择一个 Preset、Moment 或 Story World，或用自己的话描述场景。',
          },
          {
            title: '让 Murmur 作曲',
            whyItMatters: '应用会在几秒内写出与片段等长的原创器乐曲；非英语提示词会先在手机本机翻译。',
          },
          {
            title: '导出',
            whyItMatters: '保存配上新音乐的视频、分享出去，或把曲目导出为 WAV 文件，用于剪辑软件或游戏引擎。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自 App Store 描述或开发者官网，均未经独立测试。**',
        ],
        items: [
          '**Score（2.2 版新增）。**选一张照片或一段视频，设定一种情绪（如史诗或轻松），即可得到与片段时长匹配的配乐；你可以保留或替换原声，重试时也不会丢失已有版本。',
          '**Presets、Moments 和 Story Worlds。**超过 170 个精选预设、31 个现成的 Moments（如生日、旅行），以及 40 多种可搜索的电影感氛围。',
          '**Live 模式。**逐秒创作、连续播放的器乐，你可以通过淡入淡出节拍、贝斯、键盘和弦乐等声部来调控。',
          '**提示词与语言。**支持自定义场景提示词，德语、法语、西班牙语、葡萄牙语和日语提示词会在手机本机翻译；App Store 列出 11 种界面语言。',
          '**曲库与导出。**已保存的曲目可编辑并导出为 WAV 文件，完成的视频可保存、分享，或以 9:16 或 1:1 发布到 Instagram。',
        ],
        note: 'Pro 解锁会取消免费版限制：曲目最长 6 分钟、全部预设、自定义提示词、Live 模式、WAV 导出，以及为完整视频配乐且无水印。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（最后更新于 2026年10月16日）称，提示词、风格选择和已保存的曲目都在 iPhone 上处理和存储，不会上传。**据开发者 FAQ，Score 中使用的照片和视频也留在手机上。无需注册账号；政策声明没有广告、没有广告追踪，也不访问位置信息。',
          '应用确实会发送部分数据：托管在欧盟的 PostHog 分析（设备型号、iOS 和应用版本、使用事件）、Sentry 崩溃报告，以及经由 Apple 和 RevenueCat 的购买数据。模型下载使用 Apple App Attest 和签名链接，因此服务器能看到你的 IP 地址，但按政策说法从不接触提示词或音频。分析和崩溃报告可在“设置 > 隐私”中关闭。语音输入使用 Apple 的语音识别，可能在 Apple 的服务器上运行。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发者的声明，并非审计结果，且源代码未公开。PromptQuorum 未检查该应用的网络流量。开发者在政策中被列为 GDPR 下的数据控制者，可通过政策中的地址联系。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**短视频创作者**：需要与片段契合的背景音乐，又不想翻找素材库。',
          '**独立游戏开发者和播客主**：需要为自己的项目准备器乐循环或 WAV 文件。',
          '**对端侧生成感兴趣的 iPhone 用户**：能接受首次大容量下载，以及一款尚未经过验证的应用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**音质。**PromptQuorum 未试听完整曲目，因此不评价音乐质量、多样性和循环表现；官网上的示例均由开发者提供。',
          '**授权与版权。**开发者称所有曲目均免版税、可商用，并称 Orpheus 模型使用已授权及 Creative Commons 音频训练；PromptQuorum 未核查引擎许可证，本文不构成法律建议。',
          '**免费版限额。**FAQ 写的是每天 3 首、每首最长 30 秒，外加 1 首免费长曲；而定价说明写的是不限次数的固定时长生成，两者并不一致。',
          '**发热与续航。**开发者称 Live 会话受发热限制；运行时长、耗电情况和在旧机型上的表现均未经测试。',
          '**其他设备。**App Store 页面显示兼容 iPad、Mac 和 Vision，但开发者官网未提及。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Bark](/zh/power-local-llm/bark-tts-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '开源语音模型，也能生成音效和短音乐；是开发者工具，而非手机应用' },
          { '应用': '[MLX-Audio](/zh/power-local-llm/mlx-audio-review)', '平台': 'macOS（Apple 芯片）', '价格 / 许可证': '免费 / MIT', '主要区别': '在 Mac 上做语音生成和识别的 Python 库；没有音乐创作流程' },
        ],
        note: 'PromptQuorum 目前还没有评测过其他音乐生成应用，因此这里列出的是最接近的端侧音频工具；请在各应用的官方页面核实当前价格、许可证和支持平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '生成的音乐能用在 YouTube 或商业游戏中吗？',
            a: '开发者称，无论免费版还是 Pro 版，每首曲目都免版税、可商用，Murmur 及其模型提供方都不对你的输出主张权利。开发者同时提醒，Content ID 等自动系统偶尔可能误判匹配，可以提出申诉。',
          },
          {
            q: 'Murmur 会生成人声或歌词吗？',
            a: '不会。开发者将它描述为纯器乐生成器，面向背景音景、lo-fi 节拍和电影感循环。',
          },
          {
            q: '为什么两处对免费版的说法不一样？',
            a: '开发者 FAQ 写的是每天 3 首免费曲目、每首最长 30 秒，外加 1 首长曲；而定价部分描述的是不限次数的固定时长生成。请先在应用内确认限额，再决定依据哪一种说法。',
          },
          {
            q: 'Pro 在美国以外的价格是多少？',
            a: '在 2026年10月24日核对的各地区 App Store 中，Lifetime Unlock 在德国、西班牙和法国为 €19.99，日本为 ¥3,000（日元），韩国为 ₩29,000，巴西为 R$79.90，美国为 $17.99。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Murmur 专注于用 iPhone 为短片获取器乐配乐，更新活跃，提供免费版可供试用，Pro 为一次性付费而非订阅。另一方面，它闭源、出自一位独立开发者、需要较新的 iOS 和大容量模型下载，而且其音质方面的说法本文都无法核实。它适合想要快速获得、据开发者称在手机本机生成的背景音乐、并能先试用免费版的创作者；需要为生成音乐取得书面授权依据的用户，在商用之前应仔细阅读引擎条款和开发者声明。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Murmur](https://apps.apple.com/app/id6776807467) — 描述、版本历史、运行要求、隐私标签及各地区 App 内购买价格，核对于 2026年10月24日。',
          '[Murmur 官网](https://murmurapps.com) — 功能列表、FAQ、引擎说明和定价文字，核对于 2026年10月24日。',
          '[Murmur 隐私政策](https://murmurapps.com/privacy/) — 数据收集、第三方及退出选项，最后更新于 2026年10月16日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Bark 评测](/zh/power-local-llm/bark-tts-review) — 可为语音添加音效和音乐的生成式音频模型。',
          '[MLX-Audio 评测](/zh/power-local-llm/mlx-audio-review) — 在 Apple 芯片上进行语音生成和识别。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属类别的对比文章。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/murmur-review-hero-ko.webp',
    title: 'Murmur 리뷰: iPhone용 온디바이스 AI 음악 생성 앱',
    seoTitle: 'Murmur 리뷰: iPhone 온디바이스 AI 음악 생성 앱',
    intro:
      'Murmur는 독립 개발자 [Konstantin Tabakov](https://murmurapps.com)가 만든 iPhone 앱으로, 사진·동영상·게임에 쓸 연주곡을 작곡하며, 1회 모델 다운로드 후에는 모든 트랙을 휴대폰에서 생성한다고 밝히고 있습니다. 다운로드는 무료이고 Pro 기능은 1회 구매로 잠금 해제합니다. 이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지, 개발자 웹사이트, 개인정보 처리방침을 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'Murmur 리뷰: 사진·동영상·게임용 연주곡을 기기에서 직접 작곡하는 iPhone AI 음악 앱입니다. 무료 다운로드에 Pro는 1회 구매이며, 직접 테스트하지는 않았습니다.',
    twitterDescription:
      'Murmur 리뷰: 사진과 동영상에 맞춰 곡을 만드는 iPhone 온디바이스 AI 음악 앱. 무료, Pro 1회 구매, 출처가 확인하는 것과 확인하지 않는 것.',
    audience:
      '휴대폰에서 생성한 배경음악이 필요하며, 출처가 무엇을 확인해 주고 개발자가 무엇을 주장할 뿐이며 비용이 얼마인지 알고 싶은 크리에이터와 iPhone 사용자를 위한 글입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'murmur 리뷰',
    targetKeywords: [
      'murmur 리뷰',
      'murmur ai 음악 아이폰',
      '온디바이스 ai 음악 생성',
      '오프라인 ai 음악 앱 아이폰',
      '영상용 저작권 없는 ai 음악',
      '사진 동영상 ai 배경음악',
      'murmur 온디바이스 ai 음악',
    ],
    current_models_mentioned: ['Orpheus', 'Magenta RT'],
    current_hardware_mentioned: ['iPhone', 'Apple Neural Engine', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Murmur(버전 2.2.5, 2026년 10월 22일 업데이트)는 사진·동영상·게임에 쓸 연주곡을 기기에서 직접 작곡하는 iPhone 앱입니다.** 다운로드는 무료이며, 구독 대신 Pro 기능을 1회 구매로 판매합니다. 보컬은 만들지 않으며, 이 글의 모든 내용은 App Store 페이지, 개발자 사이트, 개인정보 처리방침에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Murmur는 정말 iPhone에서 오프라인으로 AI 음악을 만듭니까?',
        answer:
          '개발자에 따르면 그렇습니다. 1회 모델 다운로드 후에는 인터넷 연결 없이 휴대폰에서 트랙을 생성합니다. 개발자의 개인정보 처리방침은 프롬프트와 저장된 트랙이 업로드되지 않는다고 덧붙이며, 익명 사용 데이터와 충돌 데이터는 사용자가 끄지 않는 한 수집됩니다.',
        bullets: [
          'Score 모드는 사진이나 동영상에 맞춰 곡을 작곡하고 클립 길이에 맞춥니다.',
          'Live 모드는 화면의 노브로 조절하는 연주곡을 끊김 없이 스트리밍합니다.',
          'Presets, Moments, Story Worlds가 한 번의 탭으로 시작점을 제공합니다.',
          'WAV 파일과 새 음악을 입힌 동영상으로 내보낼 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Murmur란?', anchor: 'what-is-murmur' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
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
            text: 'Murmur는 프리셋, 텍스트 프롬프트 또는 사용자의 사진·동영상을 휴대폰에서 생성한 연주곡으로 바꿔 주는 비공개 소스 iPhone 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '클립이나 분위기를 고르면 앱이 몇 초 만에 오리지널 연주곡을 만들고, 이를 오디오 파일이나 새 사운드트랙을 입힌 동영상으로 저장할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 버전 2.2.5가 2026년 10월 22일에 출시되었고 버전 기록상 6월 이후 업데이트가 잦으므로, 업데이트 중단 경고는 해당하지 않습니다.',
          '엔진: 개발자에 따르면 Score와 일반 트랙에는 Orpheus, Live 모드에는 Google의 Magenta RT를 사용합니다.',
          '비용: 일일 제한이 있는 무료 등급과 1회 구매형 Pro 잠금 해제가 있으며, 구독은 없습니다.',
          '결과물: 연주곡 전용이며 보컬이나 가사는 없습니다.',
          '개발자: 독립 개발자 1인이 만들며, 공개된 소스 코드는 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지, 개발자 웹사이트, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 들어 보거나 벤치마크하지 않았으므로 음질은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-murmur',
        title: 'Murmur란?',
        content: [
          '**Murmur는 프리셋, 직접 쓴 장면 설명, 또는 사용자가 고른 사진이나 동영상으로 오리지널 연주곡을 작곡하는 iPhone용 AI 음악 생성 앱입니다.** App Store에는 판매자 Konstantin Tabakov의 "Murmur: On-Device AI Music"으로 음악 카테고리에 등록되어 있으며, 2026년 6월 16일에 처음 공개되었습니다.',
          '개발자는 두 엔진이 작업을 맡는다고 설명합니다. Stability AI 기반으로 소개되는 Orpheus가 일반 트랙과 Score 사운드트랙을 만들고, Google의 Magenta RT는 Live 모드를 구동하며 "Classic" 엔진으로도 계속 선택할 수 있습니다. App Store의 앱 이름은 국가별 스토어마다 달라서 독일에서는 "Murmur: KI-Musik-Generator", 일본에서는 "Murmur: AI作曲・BGMメーカー"로 표시되지만 모두 같은 앱입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Murmur는 App Store에서 내려받는 iPhone 앱이며, Android, 웹 또는 데스크톱 전용 버전은 등록되어 있지 않습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'iPhone', '입수 방법': '[App Store의 Murmur](https://apps.apple.com/app/id6776807467), 무료 다운로드, 앱 내 구입 있음' },
          { '옵션': 'Murmur Pro', '입수 방법': '1회 구매 "Lifetime Unlock", ₩29,000(한국 스토어), 구독 없음' },
          { '옵션': '웹사이트', '입수 방법': '[murmurapps.com](https://murmurapps.com)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[murmurapps.com/privacy](https://murmurapps.com/privacy/)' },
          { '옵션': '소스 코드', '입수 방법': '공개되지 않음' },
        ],
        note: '리뷰 대상 버전: App Store 기준 2026년 10월 22일에 출시된 2.2.5이며, 앱 크기는 모델 다운로드 전 75.9 MB입니다. App Store 페이지에는 iPad, Apple silicon Mac, Apple Vision 호환도 표시되지만 개발자 사이트는 iPhone 앱으로 소개합니다. 가격은 한국 스토어 기준이며 국가마다 다릅니다(미국 스토어는 $17.99).',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**App Store에는 최소 iOS 26.0이 표시되어 있으며, 첫 실행 시 모델 다운로드는 iPhone에 따라 1.2 GB 또는 2.1 GB입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영체제', '출처의 설명': 'App Store 기준 iOS/iPadOS 26.0 이상 / 개발자 FAQ는 Orpheus 엔진에 iOS 18 이상 필요라고 설명' },
          { '항목': '모델 다운로드', '출처의 설명': 'iPhone 15 Pro 이상은 전체 엔진 약 2.1 GB, 이전 iPhone은 약 1.2 GB(Orpheus Small)' },
          { '항목': '장면 제안', '출처의 설명': 'iOS 27을 탑재한 iPhone 15 Pro 이상에서 Apple Intelligence 필요 / 그 밖의 기기에서도 Score는 프리셋과 프롬프트로 작동' },
          { '항목': '인터넷', '출처의 설명': '모델 다운로드 시 1회만 필요하며 이후 트랙 생성에는 불필요' },
          { '항목': 'Live 세션', '출처의 설명': '휴대폰 발열 때문에 몇 분으로 제한' },
        ],
        note: '운영체제 요구 사항은 App Store 페이지와 사이트 사이에 차이가 있습니다. 앱 설치 가능 여부를 결정하는 것은 App Store 항목이며, App Store 페이지에는 RAM에 관한 언급이 없습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 개발자가 직접 제시한 "작동 방식" 개요를 따른 것이며, PromptQuorum이 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치하고 모델 내려받기',
            whyItMatters: 'App Store에서 Murmur를 설치하고, 네트워크에 연결된 상태에서 모델을 한 번 내려받습니다.',
          },
          {
            title: '장면에서 시작하기',
            whyItMatters: '사진이나 동영상을 고르거나, 프리셋·Moment·Story World를 선택하거나, 장면을 직접 글로 설명합니다.',
          },
          {
            title: 'Murmur가 작곡하게 하기',
            whyItMatters: '앱이 클립 길이에 맞춘 오리지널 연주곡을 몇 초 만에 만듭니다. 영어 이외의 프롬프트는 먼저 기기에서 번역됩니다.',
          },
          {
            title: '내보내기',
            whyItMatters: '새 음악을 입힌 동영상을 저장하거나 공유하고, 편집 도구나 게임 엔진용으로 트랙을 WAV 파일로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 설명이나 개발자 웹사이트에 근거하며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**Score(2.2에서 새로 추가).** 사진이나 동영상을 고르고 웅장함이나 차분함 같은 느낌을 지정하면 클립 길이에 맞는 사운드트랙이 만들어집니다. 원래 소리를 유지하거나 교체할 수 있고, 이전 결과를 잃지 않고 다시 생성할 수 있습니다.',
          '**Presets, Moments, Story Worlds.** 엄선된 170개 이상의 프리셋, 생일이나 여행 같은 31개의 기성 Moments, 검색 가능한 40개 이상의 영화적 분위기를 제공합니다.',
          '**Live 모드.** 1초 단위로 작곡되는 연속 연주곡으로, 비트·베이스·키·스트링 같은 레이어를 페이드 인/아웃하며 조절합니다.',
          '**프롬프트와 언어.** 사용자 지정 장면 프롬프트를 지원하며, 독일어·프랑스어·스페인어·포르투갈어·일본어 프롬프트는 기기에서 번역됩니다. App Store에는 11개 인터페이스 언어가 표시되어 있습니다.',
          '**라이브러리와 내보내기.** 저장한 트랙은 편집하고 WAV 파일로 내보낼 수 있으며, 완성한 동영상은 저장·공유하거나 9:16 또는 1:1 비율로 Instagram에 게시할 수 있습니다.',
        ],
        note: 'Pro 잠금 해제는 무료 등급의 제한을 없앱니다. 최대 6분 길이의 트랙, 모든 프리셋, 사용자 지정 프롬프트, Live 모드, WAV 내보내기, 워터마크 없는 전체 길이 동영상 스코어링이 가능해집니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 10월 16일에 마지막으로 업데이트된 개인정보 처리방침에 따르면 프롬프트, 스타일 선택, 저장한 트랙은 iPhone에서 처리·저장되며 업로드되지 않습니다.** 개발자 FAQ에 따르면 Score에 사용한 사진과 동영상도 휴대폰에 남습니다. 계정이 필요 없으며, 처리방침은 광고, 광고 추적, 위치 정보 접근이 없다고 명시합니다.',
          '앱이 전송하는 데이터도 있습니다. EU에서 호스팅되는 PostHog 분석(기기 모델, iOS 및 앱 버전, 사용 이벤트), Sentry 충돌 보고서, 그리고 Apple과 RevenueCat을 통한 구매 데이터입니다. 모델 다운로드에는 Apple App Attest와 서명된 링크가 사용되므로 서버는 IP 주소를 보지만, 처리방침에 따르면 프롬프트나 오디오는 절대 보지 않습니다. 분석과 충돌 보고서는 설정의 개인정보 항목에서 끌 수 있습니다. 음성 받아쓰기는 Apple의 음성 인식을 사용하며, 이는 Apple 서버에서 실행될 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이지 감사 결과가 아니며, 소스 코드도 공개되지 않았습니다. PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다. 개발자는 GDPR상 개인정보 처리 책임자(데이터 컨트롤러)로 명시되어 있으며, 처리방침에 적힌 주소로 연락할 수 있습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**숏폼 영상 크리에이터** 중 클립에 맞는 배경음악이 필요하고 스톡 음원 라이브러리를 뒤지고 싶지 않은 분.',
          '**인디 게임 개발자와 팟캐스터** 중 자신의 프로젝트에 쓸 연주 루프나 WAV 파일이 필요한 분.',
          '**온디바이스 생성에 관심 있는 iPhone 사용자** 중 큰 용량의 첫 다운로드와 아직 검증되지 않은 앱을 감수할 수 있는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**음질.** PromptQuorum은 전체 트랙을 들어 보지 않았으므로 음악적 품질, 다양성, 루프 동작은 평가하지 않았습니다. 사이트의 예시는 개발자가 직접 제공한 것입니다.',
          '**라이선스와 권리.** 개발자는 모든 트랙이 상업적 용도로 로열티 프리이며 Orpheus 모델이 라이선스를 받은 오디오와 Creative Commons 오디오로 학습되었다고 밝힙니다. PromptQuorum은 엔진 라이선스를 확인하지 않았으며, 이는 법률 자문이 아닙니다.',
          '**무료 등급 제한.** FAQ는 하루 최대 30초 트랙 3개와 무료 긴 트랙 1개를 제시하는 반면, 가격 안내 문구는 고정 길이 생성 무제한이라고 설명합니다. 두 내용은 서로 맞춰져 있지 않습니다.',
          '**발열과 배터리.** 개발자는 Live 세션이 발열로 제한된다고 말합니다. 실행 시간, 배터리 소모, 구형 휴대폰에서의 성능은 테스트되지 않았습니다.',
          '**다른 기기.** App Store 페이지에는 개발자 사이트에서 언급하지 않는 iPad, Mac, Vision 호환이 표시되어 있습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Bark](/ko/power-local-llm/bark-tts-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '효과음과 짧은 음악도 만들 수 있는 오픈소스 음성 모델이며, 휴대폰 앱이 아닌 개발자 도구입니다' },
          { '앱': '[MLX-Audio](/ko/power-local-llm/mlx-audio-review)', '플랫폼': 'macOS(Apple silicon)', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': 'Mac에서 음성 생성과 인식을 하는 Python 라이브러리이며, 음악 워크플로는 없습니다' },
        ],
        note: '다른 음악 생성 앱은 아직 PromptQuorum 리뷰가 없으므로, 이들은 가장 가까운 온디바이스 오디오 도구입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'YouTube나 상업용 게임에서 이 음악을 사용할 수 있습니까?',
            a: '개발자는 무료든 Pro든 모든 트랙이 로열티 프리이고 상업적으로 사용할 수 있으며, Murmur와 모델 제공업체 모두 사용자의 결과물에 권리를 주장하지 않는다고 밝힙니다. 다만 Content ID 같은 자동화 시스템이 드물게 잘못된 일치를 표시할 수 있으며, 이 경우 이의를 제기할 수 있다고도 경고합니다.',
          },
          {
            q: 'Murmur는 보컬이나 가사도 만듭니까?',
            a: '아닙니다. 개발자는 Murmur를 배경 사운드스케이프, 로파이 비트, 영화적 루프를 위한 순수 연주곡 생성 앱으로 설명합니다.',
          },
          {
            q: '무료 등급 설명이 두 곳에서 다른 이유는 무엇입니까?',
            a: '개발자 FAQ는 하루 최대 30초 무료 트랙 3개와 긴 트랙 1개를 제시하는 반면, 가격 안내 섹션은 고정 길이 생성 무제한을 설명합니다. 어느 쪽을 믿기 전에 앱 안에서 제한을 확인하십시오.',
          },
          {
            q: '미국 외 지역에서 Pro 가격은 얼마입니까?',
            a: '2026년 10월 24일에 확인한 App Store 스토어별 Lifetime Unlock 가격은 독일·스페인·프랑스 €19.99, 일본 ¥3,000, 한국 ₩29,000, 브라질 R$79.90이었으며, 미국은 $17.99였습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Murmur는 iPhone에서 클립용 연주곡을 얻을 수 있는, 기능이 명확하고 활발히 업데이트되는 앱으로, 체험용 무료 등급과 구독 대신 1회 구매형 Pro 가격을 제공합니다. 반면 비공개 소스이고 독립 개발자 1인이 만들며, 최신 iOS와 대용량 모델 다운로드가 필요하고, 음질에 관한 주장은 이 리뷰에서 하나도 확인할 수 없었습니다. 개발자에 따르면 기기에서 생성되는 배경 트랙을 빠르게 얻고 싶고 먼저 무료 등급으로 시험해 볼 수 있는 크리에이터에게 적합합니다. 생성된 음악에 대해 문서화된 라이선스가 필요한 분은 트랙을 상업적으로 사용하기 전에 엔진 약관과 개발자의 설명을 꼼꼼히 읽어야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Murmur](https://apps.apple.com/app/id6776807467) — 설명, 버전 기록, 요구 사항, 개인정보 레이블, 스토어별 앱 내 구입 가격, 2026년 10월 24일 확인.',
          '[Murmur 웹사이트](https://murmurapps.com) — 기능 목록, FAQ, 엔진 설명, 가격 안내 문구, 2026년 10월 24일 확인.',
          '[Murmur 개인정보 처리방침](https://murmurapps.com/privacy/) — 데이터 수집, 제3자, 수집 거부 방법, 2026년 10월 16일 최종 업데이트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Bark 리뷰](/ko/power-local-llm/bark-tts-review) — 음성에 효과음과 음악을 더할 수 있는 생성형 오디오 모델.',
          '[MLX-Audio 리뷰](/ko/power-local-llm/mlx-audio-review) — Apple silicon에서의 음성 생성과 인식.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교 글.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
