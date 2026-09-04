// Chatty-mini Review: Private, Local-First GGUF Chat on Android
// Slug: chatty-mini-review
// Companion to: loci-ai-review-offline-local-ai, best-local-llm-apps-android-2026, mobile-llm-models-phi4-gemma-smollm

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-en.webp',
    title: 'Chatty-mini Review (2026): Private, Local-First GGUF Chat on Android',
    seoTitle: 'Chatty-mini Review 2026: Local GGUF Chat on Android',
    intro:
      'Chatty-mini, developed by Fractal Media Infrastructure and listed on Google Play as "Chatty-mini: Your Personal, Private AI Workspace," is a portrait-first Android app built to run GGUF models directly on the device. The [Google Play listing](https://play.google.com/store/apps/details?id=io.instance001.chatmini) describes it as "private, local-first AI chat" for offline creative writing, note-taking, and a private chat space, without naming a cloud fallback. This review covers what the public listing actually documents — the app is a small, independently developed project, and much of what a fuller review would normally verify (specific supported model families, storage footprint, pricing, and user-reported reliability) is not published anywhere beyond the store page itself.',
    metaDescription:
      'Chatty-mini review: a portrait-first Android app that runs GGUF models locally for private, offline chat. What the Google Play listing confirms, what it does not, and who it fits.',
    twitterDescription:
      'Chatty-mini review 2026: an Android app that runs GGUF models on-device for local-first, private chat. Based only on what its Google Play listing documents.',
    audience:
      'Android users evaluating a small, independently developed local-AI chat app against better-documented alternatives like Loci, Private LLM, or PocketPal AI.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Chatty-mini review',
    targetKeywords: [
      'chatty-mini review',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini local ai',
      'chatty-mini private ai',
      'chatty-mini offline chat',
      'gguf chat app android',
      'local ai workspace android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini is a small, independently developed Android app that runs GGUF models on-device for private, local-first chat, built by Fractal Media Infrastructure.** Its [Google Play listing](https://play.google.com/store/apps/details?id=io.instance001.chatmini) positions it as a "lightweight, portrait-first assistant" for offline creative writing, notes, and a private chat space. Beyond that store description, there is no independent documentation (developer website, changelog, or published technical specification) confirming which GGUF model families it supports, its storage footprint, or its pricing model — so this review sticks to what the listing itself states and flags everything it does not.',
    quickAnswerTop: {
      en: {
        question: 'Is Chatty-mini worth installing for private, offline AI chat on Android?',
        answer:
          'Consider Chatty-mini only if you specifically want a lightweight, portrait-first Android app that runs GGUF models locally and you are comfortable evaluating an app with no public documentation beyond its Google Play listing. If you want a local-AI app with a published privacy policy, developer website, or track record across platforms, Loci, Private LLM, or PocketPal AI are better-documented starting points.',
        bullets: [
          'Android only, per the Google Play listing — no iOS, Mac, or Windows version listed.',
          'Runs GGUF models directly on-device, per the listing description.',
          'Developer: Fractal Media Infrastructure (developer_url: [instance001.github.io](https://instance001.github.io)).',
          'Package ID: io.instance001.chatmini.',
          'No public pricing, rating count, download count, or supported-model list beyond the store page at the time of this review.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Chatty-mini Is', anchor: 'what-is-chatty-mini' },
      { label: 'What the Listing Says It Does', anchor: 'what-it-does' },
      { label: 'Android-Only: What to Expect', anchor: 'platform' },
      { label: 'What This Review Could Not Verify', anchor: 'unverified' },
      { label: 'Chatty-mini vs. Better-Documented Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Consider Chatty-mini', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Chatty-mini', anchor: 'who-should-not-use' },
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
            text: 'Chatty-mini is a small, independently developed Android app by Fractal Media Infrastructure that runs GGUF models on-device for private, local-first chat, documented only through its Google Play listing.',
          },
          {
            type: 'plain-terms',
            text: 'It is an Android app you install to chat with an AI model that runs on your own phone instead of a server — the developer describes it as private and offline-capable, but there is no separate website, changelog, or technical spec sheet beyond the app store page to check that claim against.',
          },
        ],
        items: [
          'Android app, package ID io.instance001.chatmini, developer listed as Fractal Media Infrastructure.',
          'Google Play description: "Private, local-first AI chat. Run GGUF models offline on your Android device."',
          'Positioned for offline creative writing, notes, and a private chat space, per the listing.',
          'No iOS, Mac, Windows, or Linux version is listed — Android only.',
          'No public pricing, download count, rating count, or list of supported GGUF models beyond the store page at review time.',
          'No developer website with further documentation was found beyond the developer_url field ([instance001.github.io](https://instance001.github.io)) linked from the Play Store listing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based solely on the public Google Play Store listing for Chatty-mini (io.instance001.chatmini) as of September 2026. It is a smaller, independently developed app — treat every claim below as "per the listing" unless stated otherwise, and verify current details on the [Google Play page](https://play.google.com/store/apps/details?id=io.instance001.chatmini) before installing.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'What Chatty-mini Is',
        content: [
          'Chatty-mini is an Android application published on Google Play under the title "Chatty-mini: Your Personal, Private AI Workspace" (package ID `io.instance001.chatmini`). The listing credits the developer as Fractal Media Infrastructure, with a developer URL of [instance001.github.io](https://instance001.github.io).',
          'The Google Play short description states: "Private, local-first AI chat. Run GGUF models offline on your Android device." The longer listing description adds: "Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device," aimed at "an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..." — the description was truncated at that point when this review was researched, so anything after that sentence fragment is not represented here.',
        ],
        note: 'GGUF is a file format used to package and run open-weight language models locally (via runtimes such as llama.cpp) instead of calling a cloud API. An app describing itself as "running GGUF models" means inference is designed to happen on the device, not that any specific model ships bundled with the install.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What the Listing Says It Does',
        content: [
          'Based strictly on the Google Play description, Chatty-mini positions itself around three use cases and one structural design choice:',
        ],
        items: [
          '**Local, GGUF-based inference.** The listing states the app runs "GGUF models offline on your Android device," which implies on-device model execution rather than a cloud API call for chat.',
          '**Portrait-first, lightweight interface.** The listing describes the app as "lightweight, portrait-first," suggesting a phone-oriented UI rather than a tablet- or desktop-optimized layout.',
          '**Creative writing companion.** Listed as one of three example use cases: "an offline companion for creative writing."',
          '**Notes assistant.** Listed as a second example use case: "a fast assistant for your notes."',
          '**Private chat space.** Listed as a third example use case: "a secure space for your..." — the sentence was cut off in the source listing at the point this review was researched, so the specific object of that sentence (e.g., "for your conversations," "for your thoughts") is not confirmed here.',
        ],
        note: 'This section intentionally does not add capabilities beyond what the listing states. It does not confirm which specific GGUF model families are bundled or downloadable, whether inference runs fully offline after first launch or requires an initial download, or what device requirements apply — none of that is published in the excerpt of the listing available at review time.',
      },
      platform: {
        id: 'platform',
        title: 'Android-Only: What to Expect',
        itemHeadings: true,
        columns: ['Platform', 'What the listing confirms', 'What is not confirmed'],
        rows: [
          {
            'Platform': 'Android',
            'What the listing confirms': 'Available on [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) under package ID io.instance001.chatmini. Runs GGUF models on-device, per the description.',
            'What is not confirmed': 'Minimum Android OS version, minimum RAM/storage, chipset requirements, or whether a model is bundled at install versus downloaded separately.',
          },
          {
            'Platform': 'iOS / iPad',
            'What the listing confirms': 'No iOS or iPadOS listing was found for Chatty-mini at review time.',
            'What is not confirmed': 'Whether an iOS version is planned. Treat this as Android-only until an official iOS listing appears.',
          },
          {
            'Platform': 'Mac / Windows / Linux',
            'What the listing confirms': 'No desktop listing (Mac App Store, Microsoft Store, or standalone installer) was found for Chatty-mini at review time.',
            'What is not confirmed': 'Whether desktop support exists or is planned. Treat this as Android-only until an official desktop release appears.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'What This Review Could Not Verify',
        content: [
          'A responsible review discloses its own gaps as clearly as its findings. The following items are standard checks for a local-LLM app review that could not be completed for Chatty-mini because the information is not published anywhere this review could locate — only on the Google Play listing itself, which does not cover them:',
        ],
        items: [
          '**Pricing.** No price, subscription tier, or in-app purchase information is quoted here because none was visible in the researched listing excerpt. Check the current [Google Play listing](https://play.google.com/store/apps/details?id=io.instance001.chatmini) directly for the current price before installing.',
          '**Supported model list.** The listing says the app runs "GGUF models" generically; it does not name specific model families (for example, Llama, Qwen, Gemma, or Phi), so this review does not claim compatibility with any named model.',
          '**Download and rating counts.** Not quoted here — these change continuously and should be checked live on the store page rather than relied on from a review snapshot.',
          '**Privacy policy detail.** The short description calls the app "private, local-first," but this review did not have access to a full, standalone privacy policy document to verify what data, if any, the app collects (analytics, crash reporting, or account data). Check the Play Store\'s "Data safety" section on the listing before assuming zero data collection.',
          '**Storage footprint and device requirements.** App size, model file sizes, and minimum RAM are not published in the listing excerpt available for this review.',
          '**Independent user feedback.** This review does not cite user reviews, since a small sample of Play Store reviews is not a reliable substitute for hands-on testing, and no PromptQuorum hands-on testing of Chatty-mini has been conducted for this article.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini vs. Better-Documented Alternatives',
        itemHeadings: true,
        columns: ['App', 'Documentation level', 'Platforms', 'Model flexibility'],
        rows: [
          {
            'App': 'Chatty-mini',
            'Documentation level': 'Google Play listing only; no independent developer site, changelog, or spec sheet found',
            'Platforms': 'Android only, per its Play Store listing',
            'Model flexibility': 'Runs GGUF models per the listing; specific supported models not named',
          },
          {
            'App': 'Loci',
            'Documentation level': 'Developer website, App Store and Play Store privacy nutrition labels, active support pages',
            'Platforms': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Model flexibility': 'Curated library (~10 models: Gemma, Qwen, Llama, Phi); cannot import custom GGUF files',
          },
          {
            'App': 'Private LLM',
            'Documentation level': 'Developer website with published model library and pricing',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Model flexibility': '140+ models, OmniQuant and GPTQ quantization formats',
          },
          {
            'App': 'PocketPal AI',
            'Documentation level': 'Open-source repository on GitHub; code and issues publicly viewable',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Consider Chatty-mini',
        items: [
          '**Android users specifically curious about a lightweight, portrait-first GGUF chat app.** If the app description matches exactly what you want — a small, phone-first interface for local GGUF chat — it may be worth a low-risk trial install, given the app appears to be free to download from the listing (no price was quoted in the researched excerpt; confirm before installing).',
          '**Users comfortable evaluating a small, independently developed app on its own.** Chatty-mini does not have the documentation depth of Loci, Private LLM, or PocketPal AI. If you are fine reading the in-app settings and Play Store "Data safety" section yourself rather than relying on a developer website, this is a smaller-risk category of user.',
          '**Users who already understand GGUF and want a minimal note-taking or creative-writing companion.** The listing\'s stated use cases (creative writing, notes, private chat) suggest a casual, single-purpose tool rather than a full model-management platform.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Chatty-mini',
        items: [
          '**Users who need iOS, Mac, or Windows support.** No listing for those platforms was found; Chatty-mini appears to be Android-only.',
          '**Users who need a verified, documented privacy policy before trusting an app with private conversations.** This review could not verify a full privacy policy beyond the "private, local-first" claim in the short description — check the Play Store "Data safety" section yourself before using it for sensitive content.',
          '**Users who want control over which specific model runs their chats.** The listing does not name supported model families, so users who care about running a specific model (for example, a particular Llama or Qwen variant) should choose an app like PocketPal AI or Private LLM that documents this.',
          '**Users who want a track record.** Because no independent reviews, changelog, or long-term usage data were located for this review, users who prefer an app with an established public history should look at Loci, Private LLM, or PocketPal AI instead.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Chatty-mini?',
            a: 'Chatty-mini is an Android app published on Google Play (package ID io.instance001.chatmini) by developer Fractal Media Infrastructure. Its listing describes it as "private, local-first AI chat" that runs GGUF models offline on the device.',
          },
          {
            q: 'Is Chatty-mini free?',
            a: 'This review could not confirm the current price from the researched listing excerpt. Check the [Google Play listing](https://play.google.com/store/apps/details?id=io.instance001.chatmini) directly, since pricing and in-app purchases can change and are not reliably quoted from a static review.',
          },
          {
            q: 'Does Chatty-mini work fully offline?',
            a: 'The Google Play description states the app runs "GGUF models offline on your Android device," which implies on-device inference is the design goal. This review has not independently tested offline behavior (for example, in airplane mode), so treat "offline-capable" as the developer\'s claim, not an independently verified result.',
          },
          {
            q: 'Which AI models does Chatty-mini support?',
            a: 'The listing states the app runs "GGUF models" generically but does not name specific supported model families in the description excerpt available for this review. If you need a specific named model, verify compatibility inside the app before relying on it, or choose an app like PocketPal AI or Private LLM that publishes its supported model list.',
          },
          {
            q: 'Is Chatty-mini available on iPhone or iPad?',
            a: 'No iOS or iPadOS listing for Chatty-mini was found at review time. It appears to be Android-only, based on the available Google Play listing.',
          },
          {
            q: 'Who develops Chatty-mini?',
            a: 'The Google Play listing credits the developer as Fractal Media Infrastructure, with a developer URL of [instance001.github.io](https://instance001.github.io). Beyond this listing attribution, this review did not find a separate company website or public track record for the developer.',
          },
          {
            q: 'Is Chatty-mini safe to use for private conversations?',
            a: 'The short description calls the app "private, local-first," but this review did not have access to a full, standalone privacy policy to verify what data, if any, is collected. Before trusting the app with sensitive content, check the "Data safety" section on its Google Play listing and read the in-app privacy policy, since these can differ from the marketing description.',
          },
          {
            q: 'How does Chatty-mini compare to Loci or Private LLM?',
            a: 'Loci and Private LLM both publish developer websites, model libraries, and (for Loci) an App Store privacy nutrition label — Chatty-mini does not have equivalent public documentation available at review time. Loci also supports five platforms (iPhone, iPad, Android, Mac, Windows) versus Chatty-mini\'s Android-only listing. If documentation depth and cross-platform support matter to you, Loci or Private LLM are the better-verified starting points; see the comparison table above.',
          },
          {
            q: 'Does Chatty-mini require a model download after installing?',
            a: 'This is not confirmed in the listing excerpt available for this review. Apps that run GGUF models generally either bundle a small model or require a first-time download; Chatty-mini\'s listing does not specify which approach it uses. Check the in-app onboarding flow after installing to confirm.',
          },
          {
            q: 'Why does this review hedge so much on Chatty-mini compared to other app reviews on this site?',
            a: 'Because the available source material is thinner. Chatty-mini is a smaller, independently developed app with a Google Play listing as its only public documentation at review time — no developer website with technical specifications, no published changelog, and no independently verified hands-on testing by PromptQuorum. This review reports only what the listing states and is explicit about what remains unverified, rather than filling gaps with assumptions.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Chatty-mini is a small, independently developed Android app that positions itself around a clear, narrow idea: run GGUF models on-device for private, local-first chat, in a lightweight, portrait-first interface aimed at creative writing, notes, and a private chat space. That idea is credible and consistent with how GGUF-based local inference works on other Android apps. What separates this review from a full endorsement is documentation, not the concept: at review time, the only public source for Chatty-mini is its Google Play listing, with no independent developer website, published model list, privacy policy detail, or pricing confirmed beyond that page. Users who want to try a small, Android-only, GGUF-based chat app on its own terms — and who are comfortable checking the Play Store\'s "Data safety" section and in-app settings themselves — may find Chatty-mini worth a low-risk trial. Users who need cross-platform support, a documented model library, verified pricing, or an established track record should start with Loci, Private LLM, or PocketPal AI instead, all of which publish considerably more public documentation.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Chatty-mini on Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — the sole public listing used for this review: title, short and long description text, and developer attribution.',
          '[Loci on the App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — referenced for comparison; privacy nutrition label and platform availability.',
          '[Private LLM official site](https://privatellm.app/en) — referenced for comparison; pricing, model library, and platform support.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a better-documented cross-platform alternative with a published privacy nutrition label.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the Android app roundup, including MLC Chat, Maid, Layla, Ollama via Termux, and PocketPal AI.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — the model-layer companion piece explaining which GGUF-compatible models actually fit on a phone.',
          '[Run a Local LLM on Your Tablet: iPad and Android](/power-local-llm/run-ai-on-tablet-ipad-android) — device-focused guide for on-device and remote inference on tablets.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory-2026) — a broader directory of local-LLM tools across platforms, including smaller and lesser-documented apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini Review (2026): Private, Local-First GGUF Chat on Android',
      description:
        'Chatty-mini review: a portrait-first Android app that runs GGUF models locally for private, offline chat. What the Google Play listing confirms, what it does not, and who it fits.',
      url: 'https://promptquorum.com/power-local-llm/chatty-mini-review',
      inLanguage: 'en',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating local, GGUF-based AI chat apps' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini Review (2026)', item: 'https://promptquorum.com/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-de.webp',
    title: 'Chatty-mini im Test (2026): Privater, lokaler GGUF-Chat für Android',
    seoTitle: 'Chatty-mini Test 2026: Lokaler GGUF-Chat für Android',
    intro:
      'Chatty-mini, entwickelt von Fractal Media Infrastructure, ist bei Google Play als „Chatty-mini: Your Personal, Private AI Workspace" gelistet — eine im Hochformat ausgelegte Android-App, die GGUF-Modelle direkt auf dem Gerät ausführt. Der [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=io.instance001.chatmini) beschreibt sie als „private, lokale KI-Chat-App" für Offline-Kreativschreiben, Notizen und einen privaten Chat-Bereich, ohne einen Cloud-Fallback zu nennen. Dieser Test beschränkt sich auf das, was der öffentliche Play-Store-Eintrag tatsächlich dokumentiert — Chatty-mini ist ein kleines, unabhängig entwickeltes Projekt, und vieles, was ein vollständiger Test normalerweise prüfen würde (konkrete unterstützte Modellfamilien, Speicherbedarf, Preise und Nutzerfeedback zur Zuverlässigkeit), ist nirgends veröffentlicht außer auf der Store-Seite selbst.',
    metaDescription:
      'Chatty-mini im Test: eine App im Hochformat, die GGUF-Modelle lokal auf Android ausführt. Was der Google-Play-Eintrag bestätigt, was nicht, und für wen sich die App eignet.',
    twitterDescription:
      'Chatty-mini im Test 2026: eine Android-App, die GGUF-Modelle lokal auf dem Gerät ausführt. Basierend ausschließlich auf dem, was der Google-Play-Eintrag dokumentiert.',
    audience:
      'Android-Nutzer, die eine kleine, unabhängig entwickelte lokale KI-Chat-App mit besser dokumentierten Alternativen wie Loci, Private LLM oder PocketPal AI vergleichen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Chatty-mini Test',
    targetKeywords: [
      'chatty-mini test',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini lokale ki',
      'chatty-mini privat',
      'chatty-mini offline chat',
      'gguf chat app android',
      'lokaler ki workspace android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini ist eine kleine, unabhängig entwickelte Android-App von Fractal Media Infrastructure, die GGUF-Modelle für privaten, lokalen Chat auf dem Gerät ausführt.** Der [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=io.instance001.chatmini) positioniert die App als „schlanken, hochformatorientierten Assistenten" für Offline-Kreativschreiben, Notizen und einen privaten Chat-Bereich. Über diese Store-Beschreibung hinaus gibt es keine unabhängige Dokumentation (Entwickler-Website, Änderungsprotokoll oder veröffentlichte technische Spezifikation), die bestätigt, welche GGUF-Modellfamilien unterstützt werden, wie groß der Speicherbedarf ist oder welches Preismodell gilt — dieser Test hält sich daher an das, was der Eintrag selbst aussagt, und markiert alles, was er nicht aussagt.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Chatty-mini für privaten, lokalen KI-Chat auf Android?',
        answer:
          'Chatty-mini kommt nur infrage, wenn Sie gezielt eine schlanke, hochformatorientierte Android-App suchen, die GGUF-Modelle lokal ausführt, und bereit sind, eine App ohne öffentliche Dokumentation jenseits des Google-Play-Eintrags selbst zu bewerten. Wer eine lokale KI-App mit veröffentlichter Datenschutzerklärung, Entwickler-Website oder plattformübergreifender Erfolgsbilanz möchte, ist bei Loci, Private LLM oder PocketPal AI besser aufgehoben.',
        bullets: [
          'Nur Android, laut Google-Play-Eintrag — keine iOS-, Mac- oder Windows-Version gelistet.',
          'Führt laut Beschreibung GGUF-Modelle direkt auf dem Gerät aus.',
          'Entwickler: Fractal Media Infrastructure (developer_url: [instance001.github.io](https://instance001.github.io)).',
          'Paket-ID: io.instance001.chatmini.',
          'Zum Zeitpunkt dieses Tests keine öffentlichen Angaben zu Preis, Bewertungsanzahl, Downloadzahl oder unterstützter Modellliste über die Store-Seite hinaus.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Chatty-mini ist', anchor: 'what-is-chatty-mini' },
      { label: 'Was der Eintrag über die Funktionen sagt', anchor: 'what-it-does' },
      { label: 'Nur Android: Was Sie erwarten können', anchor: 'platform' },
      { label: 'Was dieser Test nicht überprüfen konnte', anchor: 'unverified' },
      { label: 'Chatty-mini vs. besser dokumentierte Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Chatty-mini infrage kommt', anchor: 'who-should-use' },
      { label: 'Für wen Chatty-mini nicht infrage kommt', anchor: 'who-should-not-use' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini ist eine kleine, unabhängig entwickelte Android-App von Fractal Media Infrastructure, die GGUF-Modelle lokal auf dem Gerät für privaten Chat ausführt und ausschließlich über ihren Google-Play-Eintrag dokumentiert ist.',
          },
          {
            type: 'plain-terms',
            text: 'Es handelt sich um eine Android-App, mit der Sie mit einer KI chatten, die auf Ihrem eigenen Handy läuft statt auf einem Server — der Entwickler beschreibt sie als privat und offlinefähig, aber es gibt außer der Store-Seite keine eigene Website, kein Änderungsprotokoll und kein technisches Datenblatt, um diese Aussage zu überprüfen.',
          },
        ],
        items: [
          'Android-App, Paket-ID io.instance001.chatmini, Entwickler laut Eintrag Fractal Media Infrastructure.',
          'Google-Play-Beschreibung: „Private, local-first AI chat. Run GGUF models offline on your Android device."',
          'Laut Eintrag positioniert für Offline-Kreativschreiben, Notizen und einen privaten Chat-Bereich.',
          'Keine iOS-, Mac-, Windows- oder Linux-Version gelistet — nur Android.',
          'Zum Zeitpunkt des Tests keine öffentlichen Angaben zu Preis, Downloadzahl, Bewertungsanzahl oder Liste unterstützter GGUF-Modelle über die Store-Seite hinaus.',
          'Keine eigenständige Entwickler-Website mit weiterer Dokumentation gefunden, abgesehen vom im Play-Store-Eintrag verlinkten developer_url-Feld ([instance001.github.io](https://instance001.github.io)).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert ausschließlich auf dem öffentlichen Google-Play-Eintrag zu Chatty-mini (io.instance001.chatmini), Stand September 2026. Es handelt sich um eine kleinere, unabhängig entwickelte App — behandeln Sie jede Aussage unten als „laut Eintrag", sofern nicht anders angegeben, und prüfen Sie aktuelle Details vor der Installation auf der [Google-Play-Seite](https://play.google.com/store/apps/details?id=io.instance001.chatmini).',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Was Chatty-mini ist',
        content: [
          'Chatty-mini ist eine Android-Anwendung, die bei Google Play unter dem Titel „Chatty-mini: Your Personal, Private AI Workspace" veröffentlicht ist (Paket-ID `io.instance001.chatmini`). Der Eintrag nennt Fractal Media Infrastructure als Entwickler, mit der Entwickler-URL [instance001.github.io](https://instance001.github.io).',
          'Die kurze Google-Play-Beschreibung lautet: „Private, local-first AI chat. Run GGUF models offline on your Android device." Die längere Beschreibung ergänzt: „Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device", ausgerichtet auf „an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..." — die Beschreibung wurde an dieser Stelle abgeschnitten, als dieser Test recherchiert wurde, sodass alles nach diesem Satzfragment hier nicht wiedergegeben wird.',
        ],
        note: 'GGUF ist ein Dateiformat zum Verpacken und lokalen Ausführen offener Sprachmodelle (über Laufzeitumgebungen wie llama.cpp) statt über einen Cloud-API-Aufruf. Wenn eine App angibt, „GGUF-Modelle auszuführen", bedeutet das, dass die Inferenz auf dem Gerät stattfinden soll — nicht, dass ein bestimmtes Modell bereits in der Installation enthalten ist.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was der Eintrag über die Funktionen sagt',
        content: [
          'Ausschließlich basierend auf der Google-Play-Beschreibung positioniert sich Chatty-mini um drei Anwendungsfälle und eine strukturelle Designentscheidung:',
        ],
        items: [
          '**Lokale, GGUF-basierte Inferenz.** Der Eintrag besagt, dass die App „GGUF models offline on your Android device" ausführt, was auf eine Modellausführung auf dem Gerät statt eines Cloud-API-Aufrufs für den Chat hindeutet.',
          '**Schlanke Oberfläche im Hochformat.** Der Eintrag beschreibt die App als „lightweight, portrait-first", was auf eine für Smartphones statt für Tablets oder Desktops optimierte Oberfläche hindeutet.',
          '**Begleiter für Kreativschreiben.** Als einer von drei Beispiel-Anwendungsfällen genannt: „an offline companion for creative writing".',
          '**Notizassistent.** Als zweiter Beispiel-Anwendungsfall genannt: „a fast assistant for your notes".',
          '**Privater Chat-Bereich.** Als dritter Beispiel-Anwendungsfall genannt: „a secure space for your..." — der Satz wurde in der Quelle an dieser Stelle abgeschnitten, sodass das konkrete Objekt dieses Satzes (z. B. „für Ihre Gespräche", „für Ihre Gedanken") hier nicht bestätigt werden kann.',
        ],
        note: 'Dieser Abschnitt ergänzt bewusst keine Funktionen über die Eintragsbeschreibung hinaus. Er bestätigt weder, welche konkreten GGUF-Modellfamilien gebündelt oder herunterladbar sind, noch ob die Inferenz nach dem ersten Start vollständig offline läuft oder einen ersten Download erfordert, noch welche Geräteanforderungen gelten — nichts davon ist im zum Testzeitpunkt verfügbaren Auszug der Beschreibung veröffentlicht.',
      },
      platform: {
        id: 'platform',
        title: 'Nur Android: Was Sie erwarten können',
        itemHeadings: true,
        columns: ['Plattform', 'Was der Eintrag bestätigt', 'Was nicht bestätigt ist'],
        rows: [
          {
            'Plattform': 'Android',
            'Was der Eintrag bestätigt': 'Verfügbar bei [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) unter der Paket-ID io.instance001.chatmini. Führt laut Beschreibung GGUF-Modelle auf dem Gerät aus.',
            'Was nicht bestätigt ist': 'Mindest-Android-Version, Mindestanforderungen an RAM/Speicher, Chipsatz-Voraussetzungen oder ob ein Modell bei der Installation gebündelt oder separat heruntergeladen wird.',
          },
          {
            'Plattform': 'iOS / iPad',
            'Was der Eintrag bestätigt': 'Zum Testzeitpunkt wurde kein iOS- oder iPadOS-Eintrag für Chatty-mini gefunden.',
            'Was nicht bestätigt ist': 'Ob eine iOS-Version geplant ist. Bis zu einem offiziellen iOS-Eintrag als reine Android-App behandeln.',
          },
          {
            'Plattform': 'Mac / Windows / Linux',
            'Was der Eintrag bestätigt': 'Zum Testzeitpunkt wurde kein Desktop-Eintrag (Mac App Store, Microsoft Store oder eigenständiges Installationsprogramm) für Chatty-mini gefunden.',
            'Was nicht bestätigt ist': 'Ob Desktop-Unterstützung existiert oder geplant ist. Bis zu einer offiziellen Desktop-Version als reine Android-App behandeln.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'Was dieser Test nicht überprüfen konnte',
        content: [
          'Ein verantwortungsvoller Test legt seine eigenen Lücken ebenso klar offen wie seine Ergebnisse. Folgende Punkte sind Standardprüfungen für einen Test lokaler KI-Apps, die für Chatty-mini nicht abgeschlossen werden konnten, weil die Informationen nirgends veröffentlicht sind, die dieser Test finden konnte — nur im Google-Play-Eintrag selbst, der sie nicht abdeckt:',
        ],
        items: [
          '**Preis.** Hier wird kein Preis, Abo-Modell oder In-App-Kauf genannt, da im recherchierten Auszug des Eintrags keiner sichtbar war. Prüfen Sie den aktuellen Preis direkt im [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=io.instance001.chatmini), bevor Sie installieren.',
          '**Liste unterstützter Modelle.** Der Eintrag spricht allgemein von „GGUF models"; er nennt keine konkreten Modellfamilien (zum Beispiel Llama, Qwen, Gemma oder Phi), daher wird hier keine Kompatibilität mit einem benannten Modell behauptet.',
          '**Download- und Bewertungszahlen.** Hier nicht genannt — diese ändern sich fortlaufend und sollten live auf der Store-Seite geprüft werden statt aus einer Testmomentaufnahme übernommen zu werden.',
          '**Details zur Datenschutzerklärung.** Die Kurzbeschreibung nennt die App „private, local-first", doch dieser Test hatte keinen Zugriff auf eine vollständige, eigenständige Datenschutzerklärung, um zu prüfen, welche Daten die App gegebenenfalls erhebt (Analyse, Absturzberichte oder Kontodaten). Prüfen Sie vor der Installation den Bereich „Datensicherheit" im Play Store, statt von null Datenerhebung auszugehen.',
          '**Speicherbedarf und Geräteanforderungen.** App-Größe, Modelldateigrößen und Mindest-RAM sind im für diesen Test verfügbaren Auszug des Eintrags nicht veröffentlicht.',
          '**Unabhängiges Nutzerfeedback.** Dieser Test zitiert keine Nutzerbewertungen, da eine kleine Stichprobe von Play-Store-Bewertungen kein verlässlicher Ersatz für einen praktischen Test ist, und PromptQuorum hat für diesen Artikel keinen praktischen Test von Chatty-mini durchgeführt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini vs. besser dokumentierte Alternativen',
        itemHeadings: true,
        columns: ['App', 'Dokumentationsgrad', 'Plattformen', 'Modellflexibilität'],
        rows: [
          {
            'App': 'Chatty-mini',
            'Dokumentationsgrad': 'Nur Google-Play-Eintrag; keine eigenständige Entwickler-Website, kein Änderungsprotokoll, kein Datenblatt gefunden',
            'Plattformen': 'Laut Play-Store-Eintrag nur Android',
            'Modellflexibilität': 'Führt laut Eintrag GGUF-Modelle aus; konkrete unterstützte Modelle nicht genannt',
          },
          {
            'App': 'Loci',
            'Dokumentationsgrad': 'Entwickler-Website, App-Store- und Play-Store-Datenschutz-Kennzeichnung, aktive Support-Seiten',
            'Plattformen': 'iPhone/iPad/Android/Mac/Windows (5 Plattformen)',
            'Modellflexibilität': 'Kuratierte Bibliothek (~10 Modelle: Gemma, Qwen, Llama, Phi); kein Import eigener GGUF-Dateien',
          },
          {
            'App': 'Private LLM',
            'Dokumentationsgrad': 'Entwickler-Website mit veröffentlichter Modellbibliothek und Preisen',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Modellflexibilität': '140+ Modelle, OmniQuant- und GPTQ-Quantisierungsformate',
          },
          {
            'App': 'PocketPal AI',
            'Dokumentationsgrad': 'Open-Source-Repository auf GitHub; Code und Issues öffentlich einsehbar',
            'Plattformen': 'iPhone/iPad, teilweise Android-Unterstützung',
            'Modellflexibilität': 'Beliebige GGUF-Datei aus Hugging Face oder anderen Quellen',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Chatty-mini infrage kommt',
        items: [
          '**Android-Nutzer mit gezieltem Interesse an einer schlanken, hochformatorientierten GGUF-Chat-App.** Wenn die Beschreibung genau dem entspricht, was Sie suchen — eine kleine, smartphonezentrierte Oberfläche für lokalen GGUF-Chat —, kann sich ein risikoarmer Testinstall lohnen, da die App laut Eintrag offenbar kostenlos herunterladbar ist (im recherchierten Auszug wurde kein Preis genannt; vor der Installation prüfen).',
          '**Nutzer, die bereit sind, eine kleine, unabhängig entwickelte App eigenständig zu bewerten.** Chatty-mini hat nicht die Dokumentationstiefe von Loci, Private LLM oder PocketPal AI. Wer bereit ist, die In-App-Einstellungen und den Bereich „Datensicherheit" im Play Store selbst zu lesen, statt sich auf eine Entwickler-Website zu verlassen, gehört zu einer risikoärmeren Nutzergruppe.',
          '**Nutzer, die GGUF bereits verstehen und einen minimalistischen Notiz- oder Kreativschreib-Begleiter suchen.** Die im Eintrag genannten Anwendungsfälle (Kreativschreiben, Notizen, privater Chat) deuten auf ein lässiges Einzweck-Werkzeug hin, nicht auf eine vollständige Modellverwaltungsplattform.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Chatty-mini nicht infrage kommt',
        items: [
          '**Nutzer, die iOS-, Mac- oder Windows-Unterstützung benötigen.** Für diese Plattformen wurde kein Eintrag gefunden; Chatty-mini scheint reine Android-Software zu sein.',
          '**Nutzer, die vor dem Vertrauen privater Gespräche eine geprüfte, dokumentierte Datenschutzerklärung benötigen.** Dieser Test konnte über die Aussage „private, local-first" in der Kurzbeschreibung hinaus keine vollständige Datenschutzerklärung verifizieren — prüfen Sie vor der Nutzung für sensible Inhalte selbst den Bereich „Datensicherheit" im Play Store.',
          '**Nutzer, die Kontrolle darüber wollen, welches konkrete Modell ihre Chats bearbeitet.** Der Eintrag nennt keine unterstützten Modellfamilien; wer Wert auf ein bestimmtes Modell legt (etwa eine bestimmte Llama- oder Qwen-Variante), sollte eine App wie PocketPal AI oder Private LLM wählen, die dies dokumentiert.',
          '**Nutzer, die eine Erfolgsbilanz wünschen.** Da für diesen Test keine unabhängigen Bewertungen, kein Änderungsprotokoll und keine Langzeitnutzungsdaten gefunden wurden, sollten Nutzer, die eine App mit etablierter öffentlicher Historie bevorzugen, stattdessen Loci, Private LLM oder PocketPal AI in Betracht ziehen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Chatty-mini?',
            a: 'Chatty-mini ist eine Android-App bei Google Play (Paket-ID io.instance001.chatmini) des Entwicklers Fractal Media Infrastructure. Der Eintrag beschreibt sie als „private, local-first AI chat", die GGUF-Modelle offline auf dem Gerät ausführt.',
          },
          {
            q: 'Ist Chatty-mini kostenlos?',
            a: 'Dieser Test konnte den aktuellen Preis aus dem recherchierten Auszug des Eintrags nicht bestätigen. Prüfen Sie den [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=io.instance001.chatmini) direkt, da sich Preise und In-App-Käufe ändern können und aus einem statischen Test nicht verlässlich zitiert werden können.',
          },
          {
            q: 'Funktioniert Chatty-mini vollständig offline?',
            a: 'Die Google-Play-Beschreibung besagt, dass die App „GGUF models offline on your Android device" ausführt, was darauf hindeutet, dass Inferenz auf dem Gerät das Designziel ist. Dieser Test hat das Offline-Verhalten (etwa im Flugmodus) nicht unabhängig getestet — behandeln Sie „offlinefähig" als Aussage des Entwicklers, nicht als unabhängig verifiziertes Ergebnis.',
          },
          {
            q: 'Welche KI-Modelle unterstützt Chatty-mini?',
            a: 'Der Eintrag spricht allgemein von „GGUF models", nennt aber im für diesen Test verfügbaren Beschreibungsauszug keine konkreten unterstützten Modellfamilien. Benötigen Sie ein bestimmtes Modell, prüfen Sie die Kompatibilität in der App selbst oder wählen Sie eine App wie PocketPal AI oder Private LLM, die ihre unterstützte Modellliste veröffentlicht.',
          },
          {
            q: 'Ist Chatty-mini für iPhone oder iPad verfügbar?',
            a: 'Zum Testzeitpunkt wurde kein iOS- oder iPadOS-Eintrag für Chatty-mini gefunden. Die App scheint laut verfügbarem Google-Play-Eintrag reine Android-Software zu sein.',
          },
          {
            q: 'Wer entwickelt Chatty-mini?',
            a: 'Der Google-Play-Eintrag nennt Fractal Media Infrastructure als Entwickler, mit der Entwickler-URL [instance001.github.io](https://instance001.github.io). Über diese Angabe im Eintrag hinaus fand dieser Test keine eigenständige Unternehmens-Website oder öffentliche Erfolgsbilanz des Entwicklers.',
          },
          {
            q: 'Ist Chatty-mini sicher für private Gespräche?',
            a: 'Die Kurzbeschreibung nennt die App „private, local-first", doch dieser Test hatte keinen Zugriff auf eine vollständige, eigenständige Datenschutzerklärung, um zu prüfen, welche Daten die App gegebenenfalls erhebt. Prüfen Sie vor dem Anvertrauen sensibler Inhalte den Bereich „Datensicherheit" im Google-Play-Eintrag und die Datenschutzerklärung in der App, da diese von der Marketingbeschreibung abweichen können.',
          },
          {
            q: 'Erfordert Chatty-mini nach der Installation einen Modell-Download?',
            a: 'Das wird im für diesen Test verfügbaren Auszug des Eintrags nicht bestätigt. Apps, die GGUF-Modelle ausführen, bündeln in der Regel entweder ein kleines Modell oder erfordern einen ersten Download; der Eintrag von Chatty-mini spezifiziert nicht, welchen Ansatz die App verfolgt. Prüfen Sie den Einrichtungsprozess in der App nach der Installation, um dies zu klären.',
          },
          {
            q: 'Warum ist dieser Test bei Chatty-mini zurückhaltender als andere App-Tests auf dieser Website?',
            a: 'Weil das verfügbare Quellenmaterial dünner ist. Chatty-mini ist eine kleinere, unabhängig entwickelte App, deren einzige öffentliche Dokumentation zum Testzeitpunkt der Google-Play-Eintrag ist — keine Entwickler-Website mit technischen Spezifikationen, kein veröffentlichtes Änderungsprotokoll und kein von PromptQuorum unabhängig durchgeführter praktischer Test. Dieser Test gibt nur das wieder, was der Eintrag aussagt, und benennt offen, was ungeklärt bleibt, statt Lücken mit Annahmen zu füllen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Chatty-mini ist eine kleine, unabhängig entwickelte Android-App mit einer klaren, engen Idee: GGUF-Modelle für privaten, lokalen Chat auf dem Gerät ausführen, in einer schlanken Oberfläche im Hochformat für Kreativschreiben, Notizen und einen privaten Chat-Bereich. Diese Idee ist glaubwürdig und passt zu der Art, wie GGUF-basierte lokale Inferenz auf anderen Android-Apps funktioniert. Was diesen Test von einer uneingeschränkten Empfehlung unterscheidet, ist die Dokumentation, nicht das Konzept: Zum Testzeitpunkt ist der Google-Play-Eintrag die einzige öffentliche Quelle für Chatty-mini, ohne eigenständige Entwickler-Website, veröffentlichte Modellliste, Datenschutzdetails oder bestätigte Preise über diese Seite hinaus. Nutzer, die eine kleine, reine Android-App auf GGUF-Basis auf eigene Faust ausprobieren möchten — und bereit sind, den Bereich „Datensicherheit" im Play Store und die App-Einstellungen selbst zu prüfen —, könnten Chatty-mini einen risikoarmen Test wert finden. Nutzer, die plattformübergreifende Unterstützung, eine dokumentierte Modellbibliothek, geprüfte Preise oder eine etablierte Erfolgsbilanz benötigen, sollten stattdessen mit Loci, Private LLM oder PocketPal AI beginnen, die alle deutlich mehr öffentliche Dokumentation bereitstellen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Chatty-mini bei Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — die einzige öffentliche Quelle für diesen Test: Titel, Kurz- und Langbeschreibung sowie Entwicklerangabe.',
          '[Loci im App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — zum Vergleich herangezogen; Datenschutz-Kennzeichnung und Plattformverfügbarkeit.',
          '[Private LLM offizielle Website](https://privatellm.app/en) — zum Vergleich herangezogen; Preise, Modellbibliothek und Plattformunterstützung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Loci AI Test: Offline-KI für iPhone, Android, iPad, Mac und Windows](/power-local-llm/loci-ai-review-offline-local-ai) — eine besser dokumentierte plattformübergreifende Alternative mit veröffentlichter Datenschutz-Kennzeichnung.',
          '[Die besten lokalen KI-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026) — die Android-App-Übersicht, u. a. MLC Chat, Maid, Layla, Ollama über Termux und PocketPal AI.',
          '[Die besten mobilen KI-Modelle 2026: Phi-4 Mini vs. Gemma 4 vs. SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — der Modell-Begleitartikel dazu, welche GGUF-kompatiblen Modelle wirklich auf ein Smartphone passen.',
          '[Ein lokales LLM auf dem Tablet ausführen: iPad und Android](/power-local-llm/run-ai-on-tablet-ipad-android) — geräteorientierter Leitfaden für lokale und entfernte Inferenz auf Tablets.',
          '[Das vollständige Local-LLM-Software-Verzeichnis](/power-local-llm/local-llm-software-directory-2026) — ein umfassenderes Verzeichnis lokaler KI-Werkzeuge über alle Plattformen hinweg, einschließlich kleinerer, weniger dokumentierter Apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini im Test (2026): Privater, lokaler GGUF-Chat für Android',
      description:
        'Chatty-mini im Test: eine App im Hochformat, die GGUF-Modelle lokal auf Android ausführt. Was der Google-Play-Eintrag bestätigt, was nicht, und für wen sich die App eignet.',
      url: 'https://promptquorum.com/de/power-local-llm/chatty-mini-review',
      inLanguage: 'de',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android-Nutzer, die lokale, GGUF-basierte KI-Chat-Apps bewerten' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-fr.webp',
    title: 'Chatty-mini : test (2026) — chat GGUF privé et local sur Android',
    seoTitle: 'Chatty-mini : test 2026 du chat GGUF local sur Android',
    intro:
      'Chatty-mini, développée par Fractal Media Infrastructure, est référencée sur Google Play sous le nom « Chatty-mini: Your Personal, Private AI Workspace » — une application Android pensée pour le mode portrait, conçue pour exécuter des modèles GGUF directement sur l\'appareil. La [fiche Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) la décrit comme un « chat IA privé et local » pour l\'écriture créative hors ligne, la prise de notes et un espace de discussion privé, sans mentionner de repli vers le cloud. Ce test se limite à ce que la fiche publique documente réellement — Chatty-mini est un petit projet développé de façon indépendante, et une grande partie de ce qu\'un test complet vérifierait normalement (familles de modèles précisément prises en charge, encombrement de stockage, prix, retours d\'utilisateurs sur la fiabilité) n\'est publiée nulle part ailleurs que sur cette page du store.',
    metaDescription:
      'Test de Chatty-mini : une application Android en mode portrait qui exécute des modèles GGUF localement pour un chat privé et hors ligne. Ce que la fiche Google Play confirme, ce qu\'elle ne confirme pas, et pour qui elle convient.',
    twitterDescription:
      'Chatty-mini, test 2026 : une application Android qui exécute des modèles GGUF sur l\'appareil pour un chat privé et local. Basé uniquement sur ce que documente sa fiche Google Play.',
    audience:
      'Utilisateurs Android évaluant une petite application de chat IA locale, développée de façon indépendante, face à des alternatives mieux documentées comme Loci, Private LLM ou PocketPal AI.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Test de Chatty-mini',
    targetKeywords: [
      'chatty-mini test',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini ia locale',
      'chatty-mini ia privée',
      'chatty-mini chat hors ligne',
      'application chat gguf android',
      'espace de travail ia local android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini est une petite application Android développée de façon indépendante par Fractal Media Infrastructure, qui exécute des modèles GGUF sur l\'appareil pour un chat privé et local.** Sa [fiche Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) la positionne comme un « assistant léger, pensé pour le mode portrait » destiné à l\'écriture créative hors ligne, à la prise de notes et à un espace de discussion privé. Au-delà de cette description du store, aucune documentation indépendante (site web du développeur, journal des modifications ou spécification technique publiée) ne confirme quelles familles de modèles GGUF sont prises en charge, quel est l\'encombrement de stockage, ni quel est le modèle tarifaire — ce test s\'en tient donc à ce que la fiche indique elle-même et signale tout ce qu\'elle n\'indique pas.',
    quickAnswerTop: {
      fr: {
        question: 'Chatty-mini vaut-elle le coup pour un chat IA privé et hors ligne sur Android ?',
        answer:
          'Envisagez Chatty-mini uniquement si vous recherchez spécifiquement une application Android légère, pensée pour le mode portrait, qui exécute des modèles GGUF localement, et que vous êtes à l\'aise pour évaluer vous-même une application sans documentation publique au-delà de sa fiche Google Play. Si vous voulez une application d\'IA locale avec une politique de confidentialité publiée, un site web de développeur ou un historique éprouvé sur plusieurs plateformes, Loci, Private LLM ou PocketPal AI sont des points de départ mieux documentés.',
        bullets: [
          'Android uniquement, selon la fiche Google Play — aucune version iOS, Mac ou Windows référencée.',
          'Exécute les modèles GGUF directement sur l\'appareil, selon la description de la fiche.',
          'Développeur : Fractal Media Infrastructure (developer_url : [instance001.github.io](https://instance001.github.io)).',
          'ID de paquet : io.instance001.chatmini.',
          'Aucune information publique sur le prix, le nombre d\'avis, le nombre de téléchargements ou la liste des modèles pris en charge au-delà de la page du store, au moment de ce test.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Chatty-mini', anchor: 'what-is-chatty-mini' },
      { label: 'Ce que la fiche dit sur ses fonctionnalités', anchor: 'what-it-does' },
      { label: 'Android uniquement : à quoi s\'attendre', anchor: 'platform' },
      { label: 'Ce que ce test n\'a pas pu vérifier', anchor: 'unverified' },
      { label: 'Chatty-mini face à des alternatives mieux documentées', anchor: 'vs-alternatives' },
      { label: 'Pour qui Chatty-mini est pertinente', anchor: 'who-should-use' },
      { label: 'Pour qui Chatty-mini n\'est pas adaptée', anchor: 'who-should-not-use' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini est une petite application Android développée de façon indépendante par Fractal Media Infrastructure, qui exécute des modèles GGUF sur l\'appareil pour un chat privé et local, documentée uniquement via sa fiche Google Play.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une application Android qui permet de discuter avec une IA fonctionnant sur votre propre téléphone plutôt que sur un serveur — le développeur la décrit comme privée et capable de fonctionner hors ligne, mais il n\'existe, en dehors de la page du store, ni site web propre, ni journal des modifications, ni fiche technique pour vérifier cette affirmation.',
          },
        ],
        items: [
          'Application Android, ID de paquet io.instance001.chatmini, développeur indiqué : Fractal Media Infrastructure.',
          'Description Google Play : « Private, local-first AI chat. Run GGUF models offline on your Android device. »',
          'Positionnée, selon la fiche, pour l\'écriture créative hors ligne, la prise de notes et un espace de chat privé.',
          'Aucune version iOS, Mac, Windows ou Linux référencée — Android uniquement.',
          'Aucune information publique sur le prix, le nombre de téléchargements, le nombre d\'avis ou la liste des modèles GGUF pris en charge au-delà de la page du store, au moment du test.',
          'Aucun site web de développeur avec documentation supplémentaire trouvé, en dehors du champ developer_url ([instance001.github.io](https://instance001.github.io)) lié depuis la fiche Play Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose uniquement sur la fiche publique Google Play de Chatty-mini (io.instance001.chatmini), au mois de septembre 2026. Il s\'agit d\'une application plus modeste, développée de façon indépendante — considérez chaque affirmation ci-dessous comme « selon la fiche », sauf mention contraire, et vérifiez les détails actuels sur la [page Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) avant d\'installer.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Ce qu\'est Chatty-mini',
        content: [
          'Chatty-mini est une application Android publiée sur Google Play sous le titre « Chatty-mini: Your Personal, Private AI Workspace » (ID de paquet `io.instance001.chatmini`). La fiche crédite Fractal Media Infrastructure comme développeur, avec une URL de développeur [instance001.github.io](https://instance001.github.io).',
          'La courte description Google Play indique : « Private, local-first AI chat. Run GGUF models offline on your Android device. » La description longue ajoute : « Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device », destinée à « an offline companion for creative writing, a fast assistant for your notes, or a secure space for your... » — la description était tronquée à ce point lors de la recherche pour ce test, donc tout ce qui suit ce fragment de phrase n\'est pas repris ici.',
        ],
        note: 'GGUF est un format de fichier utilisé pour empaqueter et exécuter localement des modèles de langage à poids ouverts (via des moteurs d\'exécution comme llama.cpp) plutôt que d\'appeler une API dans le cloud. Une application qui se décrit comme « exécutant des modèles GGUF » signifie que l\'inférence est conçue pour se dérouler sur l\'appareil, pas qu\'un modèle précis est fourni avec l\'installation.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que la fiche dit sur ses fonctionnalités',
        content: [
          'En se basant strictement sur la description Google Play, Chatty-mini se positionne autour de trois cas d\'usage et d\'un choix de conception structurel :',
        ],
        items: [
          '**Inférence locale, basée sur GGUF.** La fiche indique que l\'application exécute des « GGUF models offline on your Android device », ce qui laisse entendre une exécution du modèle sur l\'appareil plutôt qu\'un appel à une API dans le cloud pour le chat.',
          '**Interface légère, pensée pour le mode portrait.** La fiche décrit l\'application comme « lightweight, portrait-first », suggérant une interface orientée smartphone plutôt qu\'optimisée pour tablette ou ordinateur de bureau.',
          '**Compagnon d\'écriture créative.** Cité comme l\'un des trois cas d\'usage : « an offline companion for creative writing ».',
          '**Assistant de prise de notes.** Cité comme deuxième cas d\'usage : « a fast assistant for your notes ».',
          '**Espace de chat privé.** Cité comme troisième cas d\'usage : « a secure space for your... » — la phrase était coupée à cet endroit dans la fiche source, donc l\'objet précis de cette phrase (par exemple « pour vos conversations », « pour vos pensées ») n\'est pas confirmé ici.',
        ],
        note: 'Cette section n\'ajoute volontairement aucune fonctionnalité au-delà de ce que la fiche indique. Elle ne confirme ni quelles familles de modèles GGUF précises sont intégrées ou téléchargeables, ni si l\'inférence se déroule entièrement hors ligne après le premier lancement ou nécessite un téléchargement initial, ni quelles sont les exigences matérielles — rien de tout cela n\'est publié dans l\'extrait de la fiche disponible au moment du test.',
      },
      platform: {
        id: 'platform',
        title: 'Android uniquement : à quoi s\'attendre',
        itemHeadings: true,
        columns: ['Plateforme', 'Ce que la fiche confirme', 'Ce qui n\'est pas confirmé'],
        rows: [
          {
            'Plateforme': 'Android',
            'Ce que la fiche confirme': 'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) sous l\'ID de paquet io.instance001.chatmini. Exécute des modèles GGUF sur l\'appareil, selon la description.',
            'Ce qui n\'est pas confirmé': 'Version minimale d\'Android, RAM/stockage minimum, exigences de puce, ou si un modèle est intégré à l\'installation ou téléchargé séparément.',
          },
          {
            'Plateforme': 'iOS / iPad',
            'Ce que la fiche confirme': 'Aucune fiche iOS ou iPadOS n\'a été trouvée pour Chatty-mini au moment du test.',
            'Ce qui n\'est pas confirmé': 'Si une version iOS est prévue. À considérer comme Android uniquement tant qu\'aucune fiche iOS officielle n\'apparaît.',
          },
          {
            'Plateforme': 'Mac / Windows / Linux',
            'Ce que la fiche confirme': 'Aucune fiche de bureau (Mac App Store, Microsoft Store ou installeur autonome) n\'a été trouvée pour Chatty-mini au moment du test.',
            'Ce qui n\'est pas confirmé': 'Si une prise en charge de bureau existe ou est prévue. À considérer comme Android uniquement tant qu\'aucune version de bureau officielle n\'apparaît.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'Ce que ce test n\'a pas pu vérifier',
        content: [
          'Un test responsable expose ses propres lacunes aussi clairement que ses conclusions. Les points suivants sont des vérifications standard pour un test d\'application d\'IA locale qui n\'ont pas pu être réalisées pour Chatty-mini, car l\'information n\'est publiée nulle part ailleurs que ce test ait pu trouver — uniquement sur la fiche Google Play elle-même, qui ne les couvre pas :',
        ],
        items: [
          '**Prix.** Aucun prix, aucun palier d\'abonnement ni information sur un achat intégré n\'est cité ici, car aucun n\'était visible dans l\'extrait de fiche examiné. Vérifiez le prix actuel directement sur la [fiche Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) avant d\'installer.',
          '**Liste des modèles pris en charge.** La fiche parle de « GGUF models » de façon générique ; elle ne nomme aucune famille de modèles précise (par exemple Llama, Qwen, Gemma ou Phi), donc ce test n\'affirme aucune compatibilité avec un modèle nommé.',
          '**Nombre de téléchargements et d\'avis.** Non cités ici — ces chiffres changent en continu et devraient être vérifiés en direct sur la page du store plutôt que d\'être repris d\'un instantané de test.',
          '**Détails de la politique de confidentialité.** La courte description qualifie l\'application de « private, local-first », mais ce test n\'a pas eu accès à une politique de confidentialité complète et autonome pour vérifier quelles données, le cas échéant, l\'application collecte (analytique, rapports de plantage ou données de compte). Vérifiez la section « Sécurité des données » de la fiche Play Store avant de présumer une absence totale de collecte.',
          '**Encombrement de stockage et exigences matérielles.** La taille de l\'application, la taille des fichiers de modèle et la RAM minimale ne sont pas publiées dans l\'extrait de fiche disponible pour ce test.',
          '**Retours d\'utilisateurs indépendants.** Ce test ne cite aucun avis d\'utilisateur, car un petit échantillon d\'avis Play Store ne constitue pas un substitut fiable à un test pratique, et PromptQuorum n\'a mené aucun test pratique de Chatty-mini pour cet article.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini face à des alternatives mieux documentées',
        itemHeadings: true,
        columns: ['Application', 'Niveau de documentation', 'Plateformes', 'Flexibilité de modèle'],
        rows: [
          {
            'Application': 'Chatty-mini',
            'Niveau de documentation': 'Fiche Google Play uniquement ; aucun site de développeur indépendant, journal des modifications ou fiche technique trouvé',
            'Plateformes': 'Android uniquement, selon sa fiche Play Store',
            'Flexibilité de modèle': 'Exécute des modèles GGUF selon la fiche ; modèles précis pris en charge non nommés',
          },
          {
            'Application': 'Loci',
            'Niveau de documentation': 'Site web du développeur, étiquettes de confidentialité App Store et Play Store, pages de support actives',
            'Plateformes': 'iPhone/iPad/Android/Mac/Windows (5 plateformes)',
            'Flexibilité de modèle': 'Bibliothèque organisée (~10 modèles : Gemma, Qwen, Llama, Phi) ; pas d\'import de fichiers GGUF personnalisés',
          },
          {
            'Application': 'Private LLM',
            'Niveau de documentation': 'Site web du développeur avec bibliothèque de modèles et tarifs publiés',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité de modèle': '140+ modèles, formats de quantification OmniQuant et GPTQ',
          },
          {
            'Application': 'PocketPal AI',
            'Niveau de documentation': 'Dépôt open source sur GitHub ; code et tickets consultables publiquement',
            'Plateformes': 'iPhone/iPad, avec un support Android partiel',
            'Flexibilité de modèle': 'N\'importe quel fichier GGUF que l\'utilisateur importe depuis Hugging Face ou ailleurs',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Chatty-mini est pertinente',
        items: [
          '**Utilisateurs Android spécifiquement curieux d\'une application de chat GGUF légère et pensée pour le mode portrait.** Si la description correspond exactement à ce que vous recherchez — une interface petite, orientée smartphone, pour un chat GGUF local — un essai à faible risque peut valoir le coup, l\'application semblant gratuite au téléchargement selon la fiche (aucun prix n\'était cité dans l\'extrait examiné ; à confirmer avant l\'installation).',
          '**Utilisateurs à l\'aise pour évaluer eux-mêmes une petite application développée de façon indépendante.** Chatty-mini n\'a pas la profondeur de documentation de Loci, Private LLM ou PocketPal AI. Si vous êtes prêt à lire vous-même les paramètres in-app et la section « Sécurité des données » du Play Store plutôt que de vous appuyer sur un site de développeur, vous appartenez à une catégorie d\'utilisateurs à moindre risque.',
          '**Utilisateurs qui comprennent déjà GGUF et veulent un compagnon minimaliste pour la prise de notes ou l\'écriture créative.** Les cas d\'usage indiqués dans la fiche (écriture créative, notes, chat privé) suggèrent un outil occasionnel et à usage unique plutôt qu\'une plateforme complète de gestion de modèles.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Chatty-mini n\'est pas adaptée',
        items: [
          '**Utilisateurs ayant besoin d\'une prise en charge iOS, Mac ou Windows.** Aucune fiche n\'a été trouvée pour ces plateformes ; Chatty-mini semble être Android uniquement.',
          '**Utilisateurs ayant besoin d\'une politique de confidentialité vérifiée et documentée avant de confier des conversations privées à une application.** Ce test n\'a pas pu vérifier de politique de confidentialité complète au-delà de l\'affirmation « private, local-first » dans la courte description — vérifiez vous-même la section « Sécurité des données » du Play Store avant d\'utiliser l\'application pour du contenu sensible.',
          '**Utilisateurs qui veulent contrôler précisément quel modèle traite leurs conversations.** La fiche ne nomme aucune famille de modèles prise en charge ; les utilisateurs attachés à un modèle précis (par exemple une variante particulière de Llama ou Qwen) devraient choisir une application comme PocketPal AI ou Private LLM, qui documente ce point.',
          '**Utilisateurs qui veulent un historique éprouvé.** Comme aucun avis indépendant, journal des modifications ou donnée d\'usage à long terme n\'a été trouvé pour ce test, les utilisateurs qui préfèrent une application avec un historique public établi devraient plutôt se tourner vers Loci, Private LLM ou PocketPal AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que Chatty-mini ?',
            a: 'Chatty-mini est une application Android publiée sur Google Play (ID de paquet io.instance001.chatmini) par le développeur Fractal Media Infrastructure. Sa fiche la décrit comme un « private, local-first AI chat » qui exécute des modèles GGUF hors ligne sur l\'appareil.',
          },
          {
            q: 'Chatty-mini est-elle gratuite ?',
            a: 'Ce test n\'a pas pu confirmer le prix actuel à partir de l\'extrait de fiche examiné. Vérifiez directement la [fiche Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini), car les prix et les achats intégrés peuvent changer et ne peuvent pas être cités de façon fiable à partir d\'un test statique.',
          },
          {
            q: 'Chatty-mini fonctionne-t-elle entièrement hors ligne ?',
            a: 'La description Google Play indique que l\'application exécute des « GGUF models offline on your Android device », ce qui laisse entendre que l\'inférence sur l\'appareil est l\'objectif de conception. Ce test n\'a pas testé de façon indépendante le comportement hors ligne (par exemple en mode avion) — considérez la capacité « hors ligne » comme une affirmation du développeur, pas comme un résultat vérifié de façon indépendante.',
          },
          {
            q: 'Quels modèles d\'IA Chatty-mini prend-elle en charge ?',
            a: 'La fiche parle de « GGUF models » de façon générique mais ne nomme aucune famille de modèles précise dans l\'extrait de description disponible pour ce test. Si vous avez besoin d\'un modèle précis, vérifiez la compatibilité dans l\'application elle-même, ou choisissez une application comme PocketPal AI ou Private LLM qui publie sa liste de modèles pris en charge.',
          },
          {
            q: 'Chatty-mini est-elle disponible sur iPhone ou iPad ?',
            a: 'Aucune fiche iOS ou iPadOS pour Chatty-mini n\'a été trouvée au moment du test. Elle semble être Android uniquement, selon la fiche Google Play disponible.',
          },
          {
            q: 'Qui développe Chatty-mini ?',
            a: 'La fiche Google Play crédite Fractal Media Infrastructure comme développeur, avec une URL de développeur [instance001.github.io](https://instance001.github.io). Au-delà de cette attribution sur la fiche, ce test n\'a trouvé ni site web d\'entreprise distinct, ni historique public pour le développeur.',
          },
          {
            q: 'Chatty-mini est-elle sûre pour des conversations privées ?',
            a: 'La courte description qualifie l\'application de « private, local-first », mais ce test n\'a pas eu accès à une politique de confidentialité complète et autonome pour vérifier quelles données, le cas échéant, sont collectées. Avant de confier du contenu sensible à l\'application, vérifiez la section « Sécurité des données » de sa fiche Google Play et lisez la politique de confidentialité dans l\'application, car elles peuvent différer de la description marketing.',
          },
          {
            q: 'Comment Chatty-mini se compare-t-elle à Loci ou Private LLM ?',
            a: 'Loci et Private LLM publient toutes deux un site web de développeur, une bibliothèque de modèles et (pour Loci) une étiquette de confidentialité App Store — Chatty-mini ne dispose pas d\'une documentation publique équivalente au moment du test. Loci prend également en charge cinq plateformes (iPhone, iPad, Android, Mac, Windows) contre Android uniquement pour la fiche de Chatty-mini. Si la profondeur de documentation et le support multiplateforme comptent pour vous, Loci ou Private LLM sont les points de départ mieux vérifiés ; voir le tableau comparatif ci-dessus.',
          },
          {
            q: 'Chatty-mini nécessite-t-elle un téléchargement de modèle après l\'installation ?',
            a: 'Ce point n\'est pas confirmé dans l\'extrait de fiche disponible pour ce test. Les applications qui exécutent des modèles GGUF intègrent généralement un petit modèle ou nécessitent un premier téléchargement ; la fiche de Chatty-mini ne précise pas laquelle de ces approches elle utilise. Vérifiez le parcours d\'intégration dans l\'application après l\'installation pour le confirmer.',
          },
          {
            q: 'Pourquoi ce test est-il aussi nuancé sur Chatty-mini par rapport aux autres tests d\'applications de ce site ?',
            a: 'Parce que la matière source disponible est plus mince. Chatty-mini est une application plus modeste, développée de façon indépendante, dont la seule documentation publique au moment du test est sa fiche Google Play — aucun site web de développeur avec spécifications techniques, aucun journal des modifications publié, et aucun test pratique mené de façon indépendante par PromptQuorum. Ce test ne rapporte que ce que la fiche indique et précise explicitement ce qui reste non vérifié, plutôt que de combler les lacunes par des suppositions.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Chatty-mini est une petite application Android développée de façon indépendante, qui se positionne autour d\'une idée claire et restreinte : exécuter des modèles GGUF sur l\'appareil pour un chat privé et local, dans une interface légère pensée pour le mode portrait, destinée à l\'écriture créative, à la prise de notes et à un espace de chat privé. Cette idée est crédible et cohérente avec la façon dont l\'inférence locale basée sur GGUF fonctionne sur d\'autres applications Android. Ce qui distingue ce test d\'une approbation totale, ce n\'est pas le concept, mais la documentation : au moment du test, la seule source publique pour Chatty-mini est sa fiche Google Play, sans site web de développeur indépendant, liste de modèles publiée, détails de politique de confidentialité ou prix confirmés au-delà de cette page. Les utilisateurs qui veulent essayer, à leurs propres conditions, une petite application de chat Android basée sur GGUF — et qui sont prêts à vérifier eux-mêmes la section « Sécurité des données » du Play Store et les paramètres in-app — pourraient trouver Chatty-mini digne d\'un essai à faible risque. Les utilisateurs qui ont besoin d\'un support multiplateforme, d\'une bibliothèque de modèles documentée, de prix vérifiés ou d\'un historique établi devraient plutôt commencer avec Loci, Private LLM ou PocketPal AI, qui publient tous une documentation publique nettement plus fournie.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Chatty-mini sur Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — l\'unique fiche publique utilisée pour ce test : titre, texte des descriptions courte et longue, et attribution du développeur.',
          '[Loci sur l\'App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — référencé à titre de comparaison ; étiquette de confidentialité et disponibilité par plateforme.',
          '[Site officiel de Private LLM](https://privatellm.app/en) — référencé à titre de comparaison ; prix, bibliothèque de modèles et support des plateformes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Loci, notre test : IA hors ligne pour iPhone, Android, iPad, Mac et Windows](/power-local-llm/loci-ai-review-offline-local-ai) — une alternative multiplateforme mieux documentée, avec une étiquette de confidentialité publiée.',
          '[Les meilleures applications de LLM local pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — le panorama des applications Android, dont MLC Chat, Maid, Layla, Ollama via Termux et PocketPal AI.',
          '[Les meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — l\'article compagnon consacré aux modèles, expliquant quels modèles compatibles GGUF tiennent réellement sur un smartphone.',
          '[Exécuter un LLM local sur votre tablette : iPad et Android](/power-local-llm/run-ai-on-tablet-ipad-android) — guide orienté appareils pour l\'inférence locale et distante sur tablette.',
          '[L\'annuaire complet des logiciels de LLM local](/power-local-llm/local-llm-software-directory-2026) — un annuaire plus large d\'outils de LLM local sur toutes les plateformes, y compris des applications plus modestes et moins documentées.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini : test (2026) — chat GGUF privé et local sur Android',
      description:
        'Test de Chatty-mini : une application Android en mode portrait qui exécute des modèles GGUF localement pour un chat privé et hors ligne. Ce que la fiche Google Play confirme, ce qu\'elle ne confirme pas, et pour qui elle convient.',
      url: 'https://promptquorum.com/fr/power-local-llm/chatty-mini-review',
      inLanguage: 'fr',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs Android évaluant des applications de chat IA locales basées sur GGUF' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini : test (2026)', item: 'https://promptquorum.com/fr/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-ja.webp',
    title: 'Chatty-mini レビュー(2026年):Android向けプライベート・ローカルGGUFチャット',
    seoTitle: 'Chatty-mini レビュー2026:AndroidのローカルGGUFチャット',
    intro:
      'Chatty-miniは、Fractal Media Infrastructureが開発し、Google Playに「Chatty-mini: Your Personal, Private AI Workspace」として掲載されているAndroidアプリです。縦向き表示を前提に設計されており、GGUFモデルを端末上で直接実行します。[Google Playの掲載情報](https://play.google.com/store/apps/details?id=io.instance001.chatmini)では「private, local-first AI chat」と説明されており、オフラインでの創作活動、メモ作成、プライベートなチャット空間向けとされていますが、クラウドへのフォールバックについては言及がありません。このレビューは、公開されている掲載情報が実際に示している内容にのみ基づいています。Chatty-miniは小規模で独立開発されたプロジェクトであり、通常のレビューであれば確認するはずの項目(具体的な対応モデルファミリー、ストレージ使用量、価格、信頼性に関するユーザーの声など)は、ストアページ以外どこにも公開されていません。',
    metaDescription:
      'Chatty-miniレビュー:GGUFモデルを端末上でローカル実行し、プライベートでオフラインのチャットを可能にする縦向き対応Androidアプリ。Google Playの掲載情報が確認していること、していないこと、向いているユーザーを解説。',
    twitterDescription:
      'Chatty-miniレビュー2026:GGUFモデルを端末上で実行し、プライベートかつローカルなチャットを行うAndroidアプリ。Google Playの掲載情報のみに基づいた内容です。',
    audience:
      'Loci、Private LLM、PocketPal AIといったドキュメントの充実した代替アプリと比較しながら、小規模で独立開発されたローカルAIチャットアプリを検討しているAndroidユーザー。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Chatty-mini レビュー',
    targetKeywords: [
      'chatty-mini レビュー',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini ローカルai',
      'chatty-mini プライベートai',
      'chatty-mini オフラインチャット',
      'gguf チャットアプリ android',
      'ローカルai ワークスペース android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-miniは、Fractal Media Infrastructureが開発した小規模なAndroidアプリで、GGUFモデルを端末上で実行し、プライベートでローカル完結型のチャットを提供します。**[Google Playの掲載情報](https://play.google.com/store/apps/details?id=io.instance001.chatmini)では、オフラインでの創作活動、メモ作成、プライベートなチャット空間向けの「軽量で縦向き表示を前提としたアシスタント」と位置付けられています。このストア説明文以外には、対応するGGUFモデルファミリー、ストレージ使用量、料金体系を確認できる独立したドキュメント(開発者ウェブサイト、更新履歴、公開された技術仕様書など)は存在しません。そのため本レビューは、掲載情報が実際に述べている内容のみを扱い、述べていない点についてはすべて明示します。',
    quickAnswerTop: {
      ja: {
        question: 'Chatty-miniは、Android向けのプライベートなオフラインAIチャットとして導入する価値があるか?',
        answer:
          'Chatty-miniを検討する価値があるのは、GGUFモデルをローカルで実行する、軽量で縦向き表示を前提としたAndroidアプリを明確に求めており、かつGoogle Playの掲載情報以外に公開ドキュメントがないアプリを自ら評価することに抵抗がない場合に限られます。公開されたプライバシーポリシー、開発者ウェブサイト、複数プラットフォームでの実績があるローカルAIアプリを求めるのであれば、Loci、Private LLM、PocketPal AIの方がドキュメントが充実した選択肢です。',
        bullets: [
          'Google Playの掲載情報によれば、Androidのみ対応 — iOS、Mac、Windows版は掲載されていません。',
          '掲載情報の説明によれば、GGUFモデルを端末上で直接実行します。',
          '開発者:Fractal Media Infrastructure(developer_url:[instance001.github.io](https://instance001.github.io))。',
          'パッケージID:io.instance001.chatmini。',
          'このレビュー時点で、ストアページ以外に価格、評価件数、ダウンロード件数、対応モデル一覧の公開情報はありません。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Chatty-miniとは', anchor: 'what-is-chatty-mini' },
      { label: '掲載情報が示す機能', anchor: 'what-it-does' },
      { label: 'Android専用アプリとして期待できること', anchor: 'platform' },
      { label: 'このレビューで確認できなかった点', anchor: 'unverified' },
      { label: 'Chatty-miniとドキュメントの充実した代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Chatty-miniを検討すべきユーザー', anchor: 'who-should-use' },
      { label: 'Chatty-miniを避けるべきユーザー', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-miniは、Fractal Media Infrastructureが開発した小規模で独立開発のAndroidアプリで、GGUFモデルを端末上で実行してプライベートかつローカル完結のチャットを行い、Google Playの掲載情報のみを情報源としています。',
          },
          {
            type: 'plain-terms',
            text: 'サーバーではなく自分のスマートフォン上で動作するAIモデルとチャットできるAndroidアプリです。開発者はプライベートかつオフライン対応だと説明していますが、ストアページ以外に専用サイト、更新履歴、技術仕様書がなく、その主張を裏付ける手段がありません。',
          },
        ],
        items: [
          'Androidアプリ、パッケージID io.instance001.chatmini、開発者は掲載情報によればFractal Media Infrastructure。',
          'Google Playの説明文:「Private, local-first AI chat. Run GGUF models offline on your Android device.」',
          '掲載情報によれば、オフラインでの創作活動、メモ作成、プライベートなチャット空間向けと位置付けられています。',
          'iOS、Mac、Windows、Linux版は掲載されていません — Androidのみ対応。',
          'レビュー時点で、ストアページ以外に価格、ダウンロード件数、評価件数、対応GGUFモデル一覧の公開情報はありません。',
          'Play Storeの掲載情報にリンクされているdeveloper_urlフィールド([instance001.github.io](https://instance001.github.io))以外に、詳細を示す開発者ウェブサイトは見つかりませんでした。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年9月時点のChatty-mini(io.instance001.chatmini)のGoogle Play公開掲載情報のみに基づいています。小規模で独立開発されたアプリであるため、以下の記載は特に断りがない限りすべて「掲載情報によれば」という前提で扱ってください。インストール前に[Google Playページ](https://play.google.com/store/apps/details?id=io.instance001.chatmini)で最新情報を確認してください。',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Chatty-miniとは',
        content: [
          'Chatty-miniは、Google Playに「Chatty-mini: Your Personal, Private AI Workspace」というタイトルで公開されているAndroidアプリです(パッケージID `io.instance001.chatmini`)。掲載情報では開発者としてFractal Media Infrastructureが記載されており、開発者URLは[instance001.github.io](https://instance001.github.io)です。',
          'Google Playの短い説明文には「Private, local-first AI chat. Run GGUF models offline on your Android device.」とあります。長い説明文にはさらに「Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device」とあり、「an offline companion for creative writing, a fast assistant for your notes, or a secure space for your...」という用途を想定しています — このレビューの調査時点で説明文はこの部分で途切れていたため、この文の続きはここには記載していません。',
        ],
        note: 'GGUFは、クラウドAPIを呼び出す代わりに、オープンウェイトの言語モデルをパッケージ化し(llama.cppなどのランタイムを使って)ローカルで実行するためのファイル形式です。「GGUFモデルを実行する」と説明するアプリは、推論が端末上で行われるよう設計されていることを意味しますが、特定のモデルがインストール時に同梱されているという意味ではありません。',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: '掲載情報が示す機能',
        content: [
          'Google Playの説明文のみに基づくと、Chatty-miniは3つの利用シーンと1つの構造的な設計方針を中心に位置付けられています。',
        ],
        items: [
          '**ローカルでのGGUFベース推論。** 掲載情報には、アプリが端末上で「GGUF models offline on your Android device」を実行すると記載されており、チャットのためにクラウドAPIを呼び出すのではなく、端末上でモデルを実行することを示唆しています。',
          '**軽量で縦向き表示を前提としたインターフェース。** 掲載情報ではアプリを「lightweight, portrait-first」と説明しており、タブレットやデスクトップ向けではなく、スマートフォン向けに最適化されたUIであることを示唆しています。',
          '**創作活動のパートナー。** 3つの利用例の1つとして「an offline companion for creative writing」が挙げられています。',
          '**メモ作成アシスタント。** 2つ目の利用例として「a fast assistant for your notes」が挙げられています。',
          '**プライベートなチャット空間。** 3つ目の利用例として「a secure space for your...」が挙げられていますが、このレビューの調査時点で文がこの部分で途切れていたため、具体的な対象(例:「あなたの会話のための」「あなたの考えのための」など)はここでは確認できません。',
        ],
        note: 'このセクションでは、掲載情報が述べる範囲を超えて機能を補足していません。具体的にどのGGUFモデルファミリーが同梱または追加ダウンロード可能なのか、初回起動後は完全にオフラインで動作するのか初回ダウンロードが必要なのか、どのような端末要件があるのかについては、レビュー時点で入手できた掲載情報の抜粋には記載がなく、確認できていません。',
      },
      platform: {
        id: 'platform',
        title: 'Android専用アプリとして期待できること',
        itemHeadings: true,
        columns: ['プラットフォーム', '掲載情報が確認していること', '確認できていないこと'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '掲載情報が確認していること': '[Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini)でパッケージID io.instance001.chatminiとして提供。説明文によれば、GGUFモデルを端末上で実行します。',
            '確認できていないこと': '最低対応Androidバージョン、必要なRAM/ストレージの最小値、チップセット要件、またモデルがインストール時に同梱されるのか別途ダウンロードされるのか。',
          },
          {
            'プラットフォーム': 'iOS / iPad',
            '掲載情報が確認していること': 'レビュー時点でChatty-miniのiOSまたはiPadOS向け掲載情報は見つかりませんでした。',
            '確認できていないこと': 'iOS版が計画されているかどうか。公式なiOS版掲載情報が現れるまでは、Android専用として扱ってください。',
          },
          {
            'プラットフォーム': 'Mac / Windows / Linux',
            '掲載情報が確認していること': 'レビュー時点でChatty-miniのデスクトップ向け掲載情報(Mac App Store、Microsoft Store、単体インストーラーなど)は見つかりませんでした。',
            '確認できていないこと': 'デスクトップ対応が存在するか計画されているかどうか。公式なデスクトップ版が現れるまでは、Android専用として扱ってください。',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'このレビューで確認できなかった点',
        content: [
          '責任あるレビューは、結果と同じくらい明確に自らの限界を開示すべきです。以下は、ローカルLLMアプリのレビューで通常確認する標準的な項目ですが、Chatty-miniについてはこのレビューが確認できる範囲で情報が公開されておらず、確認できませんでした。存在するのはGoogle Playの掲載情報のみで、これらの項目はカバーされていません。',
        ],
        items: [
          '**価格。** 調査した掲載情報の抜粋には価格、サブスクリプション階層、アプリ内課金に関する情報が見当たらなかったため、ここでは記載していません。インストール前に[Google Playの掲載情報](https://play.google.com/store/apps/details?id=io.instance001.chatmini)で現在の価格を直接確認してください。',
          '**対応モデル一覧。** 掲載情報は「GGUF models」と一般的に述べるのみで、具体的なモデルファミリー(例:Llama、Qwen、Gemma、Phi)は挙げられていません。そのため、このレビューでは特定のモデルとの互換性について主張していません。',
          '**ダウンロード数・評価件数。** ここでは記載していません。これらは常に変動するため、レビュー時点のスナップショットに頼るのではなく、ストアページで直接確認すべきです。',
          '**プライバシーポリシーの詳細。** 短い説明文ではアプリを「private, local-first」と呼んでいますが、このレビューでは、アプリが収集するデータ(あれば、分析情報、クラッシュレポート、アカウント情報など)を検証できる完全で独立したプライバシーポリシー文書にアクセスできませんでした。データ収集がゼロだと決めつける前に、Play Storeの掲載情報にある「データセーフティ」セクションを確認してください。',
          '**ストレージ使用量と端末要件。** アプリのサイズ、モデルファイルのサイズ、最小RAM要件は、このレビューで入手できた掲載情報の抜粋には公開されていません。',
          '**独立したユーザーの声。** このレビューではユーザーレビューを引用していません。少数のPlay Storeレビューは実機テストの信頼できる代替にはならず、また本記事のためにPromptQuorumがChatty-miniの実機テストを実施していないためです。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-miniとドキュメントの充実した代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'ドキュメントの充実度', '対応プラットフォーム', 'モデルの柔軟性'],
        rows: [
          {
            'アプリ': 'Chatty-mini',
            'ドキュメントの充実度': 'Google Playの掲載情報のみ。独立した開発者サイト、更新履歴、仕様書は見つかりませんでした',
            '対応プラットフォーム': 'Play Storeの掲載情報によればAndroidのみ',
            'モデルの柔軟性': '掲載情報によればGGUFモデルを実行。具体的な対応モデルは未記載',
          },
          {
            'アプリ': 'Loci',
            'ドキュメントの充実度': '開発者ウェブサイト、App StoreとPlay Storeのプライバシー表示、稼働中のサポートページ',
            '対応プラットフォーム': 'iPhone/iPad/Android/Mac/Windows(5プラットフォーム)',
            'モデルの柔軟性': '厳選されたライブラリ(約10モデル:Gemma、Qwen、Llama、Phi)。カスタムGGUFファイルのインポートは不可',
          },
          {
            'アプリ': 'Private LLM',
            'ドキュメントの充実度': '公開されたモデルライブラリと価格を掲載する開発者ウェブサイト',
            '対応プラットフォーム': 'iPhone/iPad/Mac(Apple製品のみ)',
            'モデルの柔軟性': '140以上のモデル、OmniQuantおよびGPTQ量子化形式に対応',
          },
          {
            'アプリ': 'PocketPal AI',
            'ドキュメントの充実度': 'GitHub上のオープンソースリポジトリ。コードとissueを公開閲覧可能',
            '対応プラットフォーム': 'iPhone/iPad、一部Androidにも対応',
            'モデルの柔軟性': 'Hugging Faceなどからユーザーが入手した任意のGGUFファイルに対応',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Chatty-miniを検討すべきユーザー',
        items: [
          '**軽量で縦向き表示を前提としたGGUFチャットアプリに特に興味があるAndroidユーザー。** アプリの説明が求めているものと正確に一致する場合 — つまりローカルGGUFチャット向けの小規模でスマートフォン中心のインターフェース — であれば、低リスクの試験導入をしてみる価値があるかもしれません。掲載情報からは無料でダウンロードできるように見えますが(調査した抜粋には価格の記載がなく、インストール前に確認が必要です)。',
          '**小規模で独立開発されたアプリを自分自身で評価することに抵抗がないユーザー。** Chatty-miniは、Loci、Private LLM、PocketPal AIほどのドキュメントの充実度はありません。開発者ウェブサイトに頼るのではなく、アプリ内設定やPlay Storeの「データセーフティ」セクションを自ら読むことに抵抗がなければ、比較的リスクの低いユーザー層に該当します。',
          '**すでにGGUFを理解しており、シンプルなメモ作成や創作活動のパートナーを求めているユーザー。** 掲載情報に記載された利用シーン(創作活動、メモ作成、プライベートなチャット)は、フル機能のモデル管理プラットフォームというより、カジュアルで単一目的のツールであることを示唆しています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Chatty-miniを避けるべきユーザー',
        items: [
          '**iOS、Mac、Windowsへの対応が必要なユーザー。** それらのプラットフォーム向けの掲載情報は見つかっておらず、Chatty-miniはAndroid専用と見られます。',
          '**プライベートな会話をアプリに預ける前に、検証済みで文書化されたプライバシーポリシーが必要なユーザー。** このレビューでは、短い説明文にある「private, local-first」という主張以上の、完全なプライバシーポリシーを検証できませんでした。機密性の高い内容に使用する前に、Play Storeの「データセーフティ」セクションを自ら確認してください。',
          '**チャットを処理する具体的なモデルを自分で選びたいユーザー。** 掲載情報には対応モデルファミリーの記載がないため、特定のモデル(例:特定のLlamaやQwenのバリエーション)を重視するユーザーは、その情報を公開しているPocketPal AIやPrivate LLMのようなアプリを選ぶべきです。',
          '**実績を重視するユーザー。** このレビューでは独立したレビュー、更新履歴、長期的な利用データが見つからなかったため、確立された公開の実績があるアプリを好むユーザーは、代わりにLoci、Private LLM、PocketPal AIを検討すべきです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Chatty-miniとは何ですか?',
            a: 'Chatty-miniは、開発者Fractal Media InfrastructureによってGoogle Playに公開されているAndroidアプリです(パッケージID io.instance001.chatmini)。掲載情報では、GGUFモデルを端末上でオフライン実行する「private, local-first AI chat」と説明されています。',
          },
          {
            q: 'Chatty-miniは無料ですか?',
            a: 'このレビューでは、調査した掲載情報の抜粋から現在の価格を確認できませんでした。価格やアプリ内課金は変動する可能性があり、静的なレビューから確実に引用できないため、[Google Playの掲載情報](https://play.google.com/store/apps/details?id=io.instance001.chatmini)を直接確認してください。',
          },
          {
            q: 'Chatty-miniは完全にオフラインで動作しますか?',
            a: 'Google Playの説明文には、アプリが端末上で「GGUF models offline on your Android device」を実行すると記載されており、端末上での推論が設計上の目標であることを示唆しています。このレビューでは(機内モードなどでの)オフライン動作を独自にテストしていないため、「オフライン対応」は開発者の主張として扱い、独立して検証された結果ではないと理解してください。',
          },
          {
            q: 'Chatty-miniはどのAIモデルに対応していますか?',
            a: '掲載情報は「GGUF models」と一般的に述べていますが、このレビューで入手できた説明文の抜粋には具体的な対応モデルファミリーの記載がありません。特定のモデルが必要な場合は、アプリ内で互換性を確認するか、対応モデル一覧を公開しているPocketPal AIやPrivate LLMのようなアプリを選択してください。',
          },
          {
            q: 'Chatty-miniはiPhoneやiPadで利用できますか?',
            a: 'レビュー時点で、Chatty-miniのiOSまたはiPadOS向け掲載情報は見つかりませんでした。入手できたGoogle Playの掲載情報によれば、Android専用と見られます。',
          },
          {
            q: 'Chatty-miniの開発元はどこですか?',
            a: 'Google Playの掲載情報では、開発者としてFractal Media Infrastructureが記載されており、開発者URLは[instance001.github.io](https://instance001.github.io)です。この掲載情報上の記載以外に、独立した企業ウェブサイトや開発者の公開された実績はこのレビューでは見つかりませんでした。',
          },
          {
            q: 'Chatty-miniはプライベートな会話に使用しても安全ですか?',
            a: '短い説明文ではアプリを「private, local-first」と呼んでいますが、このレビューでは、アプリが収集するデータ(あれば)を検証できる完全で独立したプライバシーポリシーにアクセスできませんでした。機密性の高い内容を預ける前に、Google Playの掲載情報にある「データセーフティ」セクションと、アプリ内のプライバシーポリシーを確認してください。これらはマーケティング上の説明と異なる場合があります。',
          },
          {
            q: 'Chatty-miniはLociやPrivate LLMと比べてどうですか?',
            a: 'LociとPrivate LLMはいずれも、開発者ウェブサイト、モデルライブラリ、(Lociの場合)App Storeのプライバシー表示を公開していますが、Chatty-miniにはレビュー時点でこれに相当する公開ドキュメントがありません。またLociは5つのプラットフォーム(iPhone、iPad、Android、Mac、Windows)に対応していますが、Chatty-miniの掲載情報ではAndroidのみです。ドキュメントの充実度やクロスプラットフォーム対応を重視するなら、LociやPrivate LLMの方がより検証済みの選択肢です。上記の比較表もあわせてご覧ください。',
          },
          {
            q: 'Chatty-miniはインストール後にモデルのダウンロードが必要ですか?',
            a: 'このレビューで入手できた掲載情報の抜粋では確認できていません。GGUFモデルを実行するアプリは、一般的に小さなモデルを同梱するか、初回ダウンロードを必要とするかのいずれかですが、Chatty-miniの掲載情報にはどちらの方式かの記載がありません。インストール後、アプリ内のオンボーディング画面で確認してください。',
          },
          {
            q: 'このサイトの他のアプリレビューと比べて、なぜChatty-miniのレビューはこれほど慎重な表現が多いのですか?',
            a: '入手できる情報源が薄いためです。Chatty-miniは小規模で独立開発されたアプリであり、レビュー時点で公開されているドキュメントはGoogle Playの掲載情報のみです。技術仕様を示す開発者ウェブサイトも、公開された更新履歴も、PromptQuorumによる独立した実機テストもありません。このレビューは掲載情報が述べている内容のみを報告し、推測で空白を埋めるのではなく、確認できていない点を明確に示しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Chatty-miniは、明確で限定的なアイデアを軸にした、小規模で独立開発のAndroidアプリです。すなわち、GGUFモデルを端末上で実行し、プライベートでローカル完結型のチャットを、創作活動、メモ作成、プライベートなチャット空間向けの軽量で縦向き表示を前提としたインターフェースで提供するというものです。このアイデア自体は説得力があり、他のAndroidアプリにおけるGGUFベースのローカル推論の仕組みとも整合しています。このレビューが全面的な推薦とならない理由は、コンセプトではなくドキュメントの少なさにあります。レビュー時点で、Chatty-miniに関する唯一の公開情報源はGoogle Playの掲載情報であり、それを超える独立した開発者ウェブサイト、公開されたモデル一覧、プライバシーポリシーの詳細、確認済みの価格は存在しません。小規模でAndroid専用の、GGUFベースのチャットアプリを自己責任で試してみたいユーザーで、Play Storeの「データセーフティ」セクションやアプリ内設定を自ら確認することに抵抗がなければ、Chatty-miniは低リスクの試用に値するかもしれません。クロスプラットフォーム対応、文書化されたモデルライブラリ、検証済みの価格、確立された実績が必要なユーザーは、代わりにLoci、Private LLM、PocketPal AIから始めるべきです。これらはいずれも、はるかに充実した公開ドキュメントを提供しています。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのChatty-mini](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — このレビューで使用した唯一の公開情報源:タイトル、短文・長文の説明テキスト、開発者情報。',
          '[App StoreのLoci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — 比較対象として参照。プライバシー表示と対応プラットフォーム情報。',
          '[Private LLM公式サイト](https://privatellm.app/en) — 比較対象として参照。価格、モデルライブラリ、対応プラットフォーム情報。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Loci AIレビュー:iPhone、Android、iPad、Mac、Windows向けオフラインAI](/power-local-llm/loci-ai-review-offline-local-ai) — プライバシー表示を公開している、よりドキュメントの充実したクロスプラットフォームの代替アプリ。',
          '[2026年版 Android向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-android-2026) — MLC Chat、Maid、Layla、Termux経由のOllama、PocketPal AIなどを含むAndroidアプリまとめ。',
          '[2026年版 モバイル向けベストLLMモデル:Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — スマートフォンに実際に収まるGGUF互換モデルを解説する、モデル層の関連記事。',
          '[タブレットでローカルLLMを実行する:iPadとAndroid](/power-local-llm/run-ai-on-tablet-ipad-android) — タブレット上でのオンデバイス推論とリモート推論に焦点を当てたガイド。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/power-local-llm/local-llm-software-directory-2026) — 小規模であまり文書化されていないアプリも含む、全プラットフォームのローカルLLMツールを網羅した、より広範なディレクトリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini レビュー(2026年):Android向けプライベート・ローカルGGUFチャット',
      description:
        'Chatty-miniレビュー:GGUFモデルを端末上でローカル実行し、プライベートでオフラインのチャットを可能にする縦向き対応Androidアプリ。Google Playの掲載情報が確認していること、していないこと、向いているユーザーを解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/chatty-mini-review',
      inLanguage: 'ja',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルでGGUFベースのAIチャットアプリを評価しているAndroidユーザー' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini レビュー(2026年)', item: 'https://promptquorum.com/ja/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-zh.webp',
    title: 'Chatty-mini 评测(2026):Android 上的私密本地 GGUF 聊天应用',
    seoTitle: 'Chatty-mini 评测 2026:Android 本地 GGUF 聊天应用',
    intro:
      'Chatty-mini 由 Fractal Media Infrastructure 开发,在 Google Play 上以「Chatty-mini: Your Personal, Private AI Workspace」上架,是一款以竖屏为主、专为在设备上直接运行 GGUF 模型而设计的 Android 应用。[Google Play 页面](https://play.google.com/store/apps/details?id=io.instance001.chatmini)将其描述为「私密、本地优先的 AI 聊天」,面向离线创意写作、笔记记录和私密聊天空间,但没有提及云端回退方案。本评测仅基于该公开页面实际记录的信息 —— Chatty-mini 是一个规模较小、独立开发的项目,而一份完整评测通常会核实的很多内容(具体支持的模型系列、存储占用、价格、用户对可靠性的反馈)在商店页面之外并无任何公开渠道可查。',
    metaDescription:
      'Chatty-mini 评测:一款以竖屏为主的 Android 应用,可在本地运行 GGUF 模型实现私密离线聊天。Google Play 页面确认了什么、未确认什么,以及适合哪些用户。',
    twitterDescription:
      'Chatty-mini 2026 评测:一款在设备上运行 GGUF 模型的 Android 应用,主打本地优先的私密聊天。评测内容仅基于其 Google Play 页面所记录的信息。',
    audience:
      '正在将一款规模较小、独立开发的本地 AI 聊天应用,与 Loci、Private LLM、PocketPal AI 等文档更完善的替代方案进行比较的 Android 用户。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Chatty-mini 评测',
    targetKeywords: [
      'chatty-mini 评测',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini 本地ai',
      'chatty-mini 私密ai',
      'chatty-mini 离线聊天',
      'gguf 聊天应用 android',
      '本地ai工作台 android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini 是一款由 Fractal Media Infrastructure 开发的小型独立 Android 应用,可在设备上运行 GGUF 模型,实现私密、本地优先的聊天。**其 [Google Play 页面](https://play.google.com/store/apps/details?id=io.instance001.chatmini)将其定位为面向离线创意写作、笔记记录和私密聊天空间的「轻量级、竖屏优先助手」。除了这段商店描述之外,没有独立文档(开发者网站、更新日志或已发布的技术规格)可以确认它支持哪些 GGUF 模型系列、存储占用有多大,或采用何种定价模式 —— 因此本评测只呈现页面本身所述的内容,并明确指出页面未涉及的部分。',
    quickAnswerTop: {
      zh: {
        question: 'Chatty-mini 值得安装,用于在 Android 上进行私密离线 AI 聊天吗?',
        answer:
          '只有在你明确想要一款轻量级、竖屏优先、可在本地运行 GGUF 模型的 Android 应用,并且愿意评估一款除 Google Play 页面外没有任何公开文档的应用时,才值得考虑 Chatty-mini。如果你想要一款拥有已发布隐私政策、开发者网站或跨平台使用记录的本地 AI 应用,Loci、Private LLM 或 PocketPal AI 是文档更完善的起点。',
        bullets: [
          '根据 Google Play 页面,仅支持 Android —— 未列出 iOS、Mac 或 Windows 版本。',
          '根据页面描述,可直接在设备上运行 GGUF 模型。',
          '开发者:Fractal Media Infrastructure(developer_url:[instance001.github.io](https://instance001.github.io))。',
          '包名:io.instance001.chatmini。',
          '截至本次评测时,除商店页面外没有关于价格、评分数量、下载量或支持模型列表的公开信息。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Chatty-mini 是什么', anchor: 'what-is-chatty-mini' },
      { label: '页面所述的功能', anchor: 'what-it-does' },
      { label: '仅支持 Android:能期待什么', anchor: 'platform' },
      { label: '本评测未能核实的内容', anchor: 'unverified' },
      { label: 'Chatty-mini 与文档更完善的替代方案对比', anchor: 'vs-alternatives' },
      { label: '哪些人适合考虑 Chatty-mini', anchor: 'who-should-use' },
      { label: '哪些人不适合使用 Chatty-mini', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini 是由 Fractal Media Infrastructure 开发的一款小型独立 Android 应用,可在设备上运行 GGUF 模型实现私密、本地优先的聊天,目前唯一的公开文档是其 Google Play 页面。',
          },
          {
            type: 'plain-terms',
            text: '这是一款 Android 应用,让你与运行在自己手机上而非服务器上的 AI 模型对话 —— 开发者称其为私密且支持离线使用,但除了应用商店页面之外,没有独立网站、更新日志或技术规格文档可以核实这一说法。',
          },
        ],
        items: [
          'Android 应用,包名 io.instance001.chatmini,页面显示开发者为 Fractal Media Infrastructure。',
          'Google Play 描述:「Private, local-first AI chat. Run GGUF models offline on your Android device.」',
          '根据页面信息,定位为离线创意写作、笔记记录和私密聊天空间。',
          '未列出 iOS、Mac、Windows 或 Linux 版本 —— 仅支持 Android。',
          '截至评测时,除商店页面外没有关于价格、下载量、评分数量或支持 GGUF 模型列表的公开信息。',
          '除了 Play 商店页面中链接的 developer_url 字段([instance001.github.io](https://instance001.github.io))外,未发现提供更多文档的开发者网站。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测完全基于 Chatty-mini(io.instance001.chatmini)截至 2026 年 9 月的公开 Google Play 页面。这是一款规模较小、独立开发的应用 —— 除非另有说明,请将以下所有内容视为「页面所述」,并在安装前于 [Google Play 页面](https://play.google.com/store/apps/details?id=io.instance001.chatmini)核实最新详情。',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Chatty-mini 是什么',
        content: [
          'Chatty-mini 是在 Google Play 上以「Chatty-mini: Your Personal, Private AI Workspace」为标题发布的 Android 应用(包名 `io.instance001.chatmini`)。页面标注的开发者为 Fractal Media Infrastructure,开发者 URL 为 [instance001.github.io](https://instance001.github.io)。',
          'Google Play 的简短描述写道:「Private, local-first AI chat. Run GGUF models offline on your Android device.」较长的描述补充道:「Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device」,面向「an offline companion for creative writing, a fast assistant for your notes, or a secure space for your...」—— 在本次评测调研时,页面描述在这一处被截断,因此该句片段之后的内容此处未予呈现。',
        ],
        note: 'GGUF 是一种文件格式,用于打包开放权重语言模型并(通过 llama.cpp 等运行环境)在本地运行,而不是调用云端 API。一款应用自称「运行 GGUF 模型」,意味着推理被设计为在设备上进行,而不代表安装包中已捆绑了某个具体模型。',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: '页面所述的功能',
        content: [
          '严格根据 Google Play 的描述,Chatty-mini 围绕三个使用场景和一项结构性设计选择进行定位:',
        ],
        items: [
          '**本地、基于 GGUF 的推理。** 页面称该应用在设备上「offline」运行「GGUF models」,意味着模型执行发生在设备端,而不是通过云端 API 调用来完成聊天。',
          '**轻量级、竖屏优先的界面。** 页面将应用描述为「lightweight, portrait-first」,暗示这是一个面向手机而非针对平板或桌面优化的界面。',
          '**创意写作伴侣。** 作为三个示例使用场景之一列出:「an offline companion for creative writing」。',
          '**笔记助手。** 作为第二个示例使用场景列出:「a fast assistant for your notes」。',
          '**私密聊天空间。** 作为第三个示例使用场景列出:「a secure space for your...」—— 在本次评测调研时,该句在此处被截断,因此该句的具体对象(例如「为你的对话」「为你的想法」)此处无法确认。',
        ],
        note: '本节有意不在页面所述范围之外添加任何功能。它并未确认具体捆绑或可下载哪些 GGUF 模型系列、首次启动后是否完全离线运行或需要初始下载,也未说明设备要求 —— 在本次评测可获取的页面摘录中,这些信息均未公开。',
      },
      platform: {
        id: 'platform',
        title: '仅支持 Android:能期待什么',
        itemHeadings: true,
        columns: ['平台', '页面确认的内容', '未确认的内容'],
        rows: [
          {
            '平台': 'Android',
            '页面确认的内容': '可在 [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) 上获取,包名为 io.instance001.chatmini。根据描述,可在设备上运行 GGUF 模型。',
            '未确认的内容': '最低 Android 系统版本、最低 RAM/存储要求、芯片组要求,以及模型是安装时捆绑还是单独下载。',
          },
          {
            '平台': 'iOS / iPad',
            '页面确认的内容': '截至评测时,未发现 Chatty-mini 的 iOS 或 iPadOS 页面。',
            '未确认的内容': '是否计划推出 iOS 版本。在出现官方 iOS 页面之前,应视其为仅支持 Android。',
          },
          {
            '平台': 'Mac / Windows / Linux',
            '页面确认的内容': '截至评测时,未发现 Chatty-mini 的桌面端页面(Mac App Store、Microsoft Store 或独立安装程序)。',
            '未确认的内容': '是否存在或计划推出桌面端支持。在出现官方桌面版之前,应视其为仅支持 Android。',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: '本评测未能核实的内容',
        content: [
          '一份负责任的评测应当像展示结论一样清晰地披露自身的局限。以下是本地 LLM 应用评测中的标准核查项,但由于本评测能找到的信息仅限于 Google Play 页面本身,而该页面并未涵盖这些内容,因此以下各项无法针对 Chatty-mini 完成核实:',
        ],
        items: [
          '**价格。** 由于在所调研的页面摘录中未见任何价格、订阅档位或应用内购买信息,此处不予引用。请在安装前直接在 [Google Play 页面](https://play.google.com/store/apps/details?id=io.instance001.chatmini)查看当前价格。',
          '**支持的模型列表。** 页面仅笼统地提到「GGUF models」,并未指明具体的模型系列(例如 Llama、Qwen、Gemma 或 Phi),因此本评测不对任何指定模型的兼容性做出断言。',
          '**下载量和评分数量。** 此处不予引用 —— 这些数据持续变化,应在商店页面实时查看,而非依赖评测时的快照。',
          '**隐私政策细节。** 简短描述称该应用「private, local-first」,但本评测无法获取完整、独立的隐私政策文件,以核实应用是否收集数据(例如分析数据、崩溃报告或账户数据)。在假定应用完全不收集数据之前,请先查看 Play 商店页面中的「数据安全」部分。',
          '**存储占用与设备要求。** 应用体积、模型文件大小和最低 RAM 要求,在本评测可获取的页面摘录中均未公开。',
          '**独立用户反馈。** 本评测不引用用户评价,因为少量 Play 商店评价并不能可靠替代实机测试,而且 PromptQuorum 并未为本文对 Chatty-mini 进行实机测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini 与文档更完善的替代方案对比',
        itemHeadings: true,
        columns: ['应用', '文档完善程度', '支持平台', '模型灵活性'],
        rows: [
          {
            '应用': 'Chatty-mini',
            '文档完善程度': '仅有 Google Play 页面;未发现独立的开发者网站、更新日志或规格文档',
            '支持平台': '根据其 Play 商店页面,仅支持 Android',
            '模型灵活性': '根据页面信息可运行 GGUF 模型;未指明具体支持的模型',
          },
          {
            '应用': 'Loci',
            '文档完善程度': '开发者网站、App Store 和 Play Store 隐私标签、活跃的支持页面',
            '支持平台': 'iPhone/iPad/Android/Mac/Windows(5 个平台)',
            '模型灵活性': '精选库(约 10 个模型:Gemma、Qwen、Llama、Phi);无法导入自定义 GGUF 文件',
          },
          {
            '应用': 'Private LLM',
            '文档完善程度': '开发者网站,公开了模型库和价格',
            '支持平台': 'iPhone/iPad/Mac(仅限 Apple 设备)',
            '模型灵活性': '140+ 个模型,支持 OmniQuant 和 GPTQ 量化格式',
          },
          {
            '应用': 'PocketPal AI',
            '文档完善程度': 'GitHub 上的开源仓库;代码和 issue 均可公开查看',
            '支持平台': 'iPhone/iPad,部分支持 Android',
            '模型灵活性': '支持用户从 Hugging Face 或其他来源获取的任意 GGUF 文件',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '哪些人适合考虑 Chatty-mini',
        items: [
          '**特别想要一款轻量级、竖屏优先的 GGUF 聊天应用的 Android 用户。** 如果应用描述正好符合你的需求 —— 一个用于本地 GGUF 聊天的小型、手机优先界面 —— 那么低风险试用可能是值得的,因为根据页面信息该应用似乎可免费下载(所调研的摘录中未标明价格,请在安装前确认)。',
          '**愿意自行评估一款小型独立开发应用的用户。** Chatty-mini 没有 Loci、Private LLM 或 PocketPal AI 那样深入的文档。如果你愿意自己查看应用内设置和 Play 商店的「数据安全」部分,而不是依赖开发者网站,那么你属于风险相对较低的用户群体。',
          '**已经了解 GGUF、只想要一个简单的笔记或创意写作伴侣的用户。** 页面所述的使用场景(创意写作、笔记记录、私密聊天)表明这是一款休闲的单一用途工具,而非完整的模型管理平台。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '哪些人不适合使用 Chatty-mini',
        items: [
          '**需要 iOS、Mac 或 Windows 支持的用户。** 未发现这些平台的页面;Chatty-mini 似乎仅支持 Android。',
          '**在信任应用处理私密对话之前,需要经过验证、有文档记录的隐私政策的用户。** 本评测除了简短描述中「private, local-first」这一说法外,无法核实完整的隐私政策 —— 在将其用于敏感内容前,请自行查看 Play 商店的「数据安全」部分。',
          '**希望控制处理聊天的具体模型的用户。** 页面未指明支持的模型系列,因此在意运行特定模型(例如某个特定的 Llama 或 Qwen 变体)的用户,应选择 PocketPal AI 或 Private LLM 这类会记录该信息的应用。',
          '**希望应用有可查证使用记录的用户。** 由于本评测未能找到关于该应用的独立评价、更新日志或长期使用数据,偏好选择有既定公开历史的应用的用户,应改为考虑 Loci、Private LLM 或 PocketPal AI。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Chatty-mini 是什么?',
            a: 'Chatty-mini 是由开发者 Fractal Media Infrastructure 在 Google Play 上发布的 Android 应用(包名 io.instance001.chatmini)。页面将其描述为在设备上离线运行 GGUF 模型的「private, local-first AI chat」。',
          },
          {
            q: 'Chatty-mini 免费吗?',
            a: '本评测无法从所调研的页面摘录中确认当前价格。请直接查看 [Google Play 页面](https://play.google.com/store/apps/details?id=io.instance001.chatmini),因为价格和应用内购买可能发生变化,静态评测无法可靠地予以引用。',
          },
          {
            q: 'Chatty-mini 可以完全离线使用吗?',
            a: 'Google Play 描述称该应用在设备上「offline」运行「GGUF models」,这表明设备端推理是其设计目标。本评测未独立测试离线行为(例如在飞行模式下),因此请将「支持离线」视为开发者的说法,而非独立验证过的结果。',
          },
          {
            q: 'Chatty-mini 支持哪些 AI 模型?',
            a: '页面笼统地提到「GGUF models」,但在本评测可获取的描述摘录中并未指明具体支持的模型系列。如果你需要某个特定模型,请在应用内自行验证兼容性,或选择 PocketPal AI 或 Private LLM 等公开了支持模型列表的应用。',
          },
          {
            q: 'Chatty-mini 支持 iPhone 或 iPad 吗?',
            a: '截至评测时,未发现 Chatty-mini 的 iOS 或 iPadOS 页面。根据现有的 Google Play 页面,它似乎仅支持 Android。',
          },
          {
            q: 'Chatty-mini 的开发者是谁?',
            a: 'Google Play 页面标注开发者为 Fractal Media Infrastructure,开发者 URL 为 [instance001.github.io](https://instance001.github.io)。除了页面上的这一署名信息外,本评测未发现该开发者有独立的公司网站或公开的过往记录。',
          },
          {
            q: 'Chatty-mini 用于私密对话安全吗?',
            a: '简短描述称该应用「private, local-first」,但本评测无法获取完整、独立的隐私政策,以核实应用是否收集数据(如果有的话)。在信任该应用处理敏感内容之前,请查看其 Google Play 页面中的「数据安全」部分,并阅读应用内的隐私政策,因为这些内容可能与营销描述不同。',
          },
          {
            q: 'Chatty-mini 与 Loci 或 Private LLM 相比如何?',
            a: 'Loci 和 Private LLM 都公开了开发者网站、模型库,Loci 还有 App Store 隐私标签 —— 而截至评测时,Chatty-mini 没有与之相当的公开文档。此外,Loci 支持五个平台(iPhone、iPad、Android、Mac、Windows),而 Chatty-mini 的页面显示仅支持 Android。如果文档完善程度和跨平台支持对你很重要,Loci 或 Private LLM 是经过更充分验证的起点;可参见上文的对比表。',
          },
          {
            q: 'Chatty-mini 安装后需要下载模型吗?',
            a: '本评测可获取的页面摘录中未对此予以确认。运行 GGUF 模型的应用通常要么捆绑一个小模型,要么需要首次下载;Chatty-mini 的页面并未说明采用哪种方式。请在安装后查看应用内的引导流程以确认。',
          },
          {
            q: '相较于本站的其他应用评测,为什么这篇 Chatty-mini 评测在措辞上如此谨慎?',
            a: '因为可获取的信源较为有限。Chatty-mini 是一款规模较小、独立开发的应用,截至评测时其唯一的公开文档就是 Google Play 页面 —— 没有提供技术规格的开发者网站,没有已发布的更新日志,也没有 PromptQuorum 独立进行的实机测试。本评测仅呈现页面所述的内容,并明确指出哪些内容仍未核实,而不是用推测填补空白。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Chatty-mini 是一款规模较小、独立开发的 Android 应用,其定位围绕一个清晰而明确的想法:在设备上运行 GGUF 模型,以轻量级、竖屏优先的界面,提供面向创意写作、笔记记录和私密聊天空间的私密、本地优先聊天体验。这个想法是可信的,也符合其他 Android 应用中基于 GGUF 的本地推理的运作方式。让本评测无法给出全面推荐的原因不是概念本身,而是文档的缺失:截至评测时,Chatty-mini 唯一的公开信息来源就是其 Google Play 页面,除此之外没有独立的开发者网站、已发布的模型列表、隐私政策细节,也没有经过确认的价格。想要按其本来面目试用这款小型、仅支持 Android、基于 GGUF 的聊天应用,并且愿意自行查看 Play 商店「数据安全」部分和应用内设置的用户,可能会认为 Chatty-mini 值得低风险一试。需要跨平台支持、有文档记录的模型库、经过验证的价格或既定使用记录的用户,则应改为从 Loci、Private LLM 或 PocketPal AI 入手,它们都提供了远为完善的公开文档。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 Chatty-mini](https://play.google.com/store/apps/details?id=io.instance001.chatmini) —— 本评测使用的唯一公开页面:标题、简短及详细描述文本,以及开发者信息。',
          '[App Store 上的 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) —— 作为对比参考;隐私标签及平台可用性。',
          '[Private LLM 官方网站](https://privatellm.app/en) —— 作为对比参考;价格、模型库及平台支持情况。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Loci AI 评测:适用于 iPhone、Android、iPad、Mac 和 Windows 的离线 AI](/power-local-llm/loci-ai-review-offline-local-ai) —— 一款文档更完善的跨平台替代方案,已公开隐私标签。',
          '[2026 年 Android 最佳本地 LLM 应用](/power-local-llm/best-local-llm-apps-android-2026) —— Android 应用汇总,包括 MLC Chat、Maid、Layla、通过 Termux 运行的 Ollama,以及 PocketPal AI。',
          '[2026 年最佳移动端 LLM 模型:Phi-4 Mini 对比 Gemma 4 对比 SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —— 模型层面的配套文章,解释哪些 GGUF 兼容模型真正适合手机运行。',
          '[在平板电脑上运行本地 LLM:iPad 与 Android](/power-local-llm/run-ai-on-tablet-ipad-android) —— 面向设备端的指南,涵盖平板上的本地及远程推理。',
          '[完整的本地 LLM 软件目录](/power-local-llm/local-llm-software-directory-2026) —— 一份涵盖各平台本地 LLM 工具的更全面目录,包括规模较小、文档较少的应用。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini 评测(2026):Android 上的私密本地 GGUF 聊天应用',
      description:
        'Chatty-mini 评测:一款以竖屏为主的 Android 应用,可在本地运行 GGUF 模型实现私密离线聊天。Google Play 页面确认了什么、未确认什么,以及适合哪些用户。',
      url: 'https://promptquorum.com/zh/power-local-llm/chatty-mini-review',
      inLanguage: 'zh',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地、基于 GGUF 的 AI 聊天应用的 Android 用户' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini 评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-es.webp',
    title: 'Chatty-mini: reseña (2026) — chat GGUF privado y local en Android',
    seoTitle: 'Chatty-mini: reseña 2026 del chat GGUF local en Android',
    intro:
      'Chatty-mini, desarrollada por Fractal Media Infrastructure, aparece en Google Play como "Chatty-mini: Your Personal, Private AI Workspace" — una app de Android pensada para modo vertical que ejecuta modelos GGUF directamente en el dispositivo. La [ficha de Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) la describe como "chat de IA privado y local" para escritura creativa sin conexión, notas y un espacio de chat privado, sin mencionar ningún respaldo en la nube. Esta reseña se limita a lo que la ficha pública realmente documenta — Chatty-mini es un proyecto pequeño y desarrollado de forma independiente, y buena parte de lo que una reseña completa normalmente verificaría (familias de modelos concretas compatibles, espacio de almacenamiento, precio y comentarios de usuarios sobre su fiabilidad) no está publicado en ningún otro lugar más allá de esa página de la tienda.',
    metaDescription:
      'Reseña de Chatty-mini: una app de Android en modo vertical que ejecuta modelos GGUF de forma local para chat privado y sin conexión. Qué confirma la ficha de Google Play, qué no, y para quién es adecuada.',
    twitterDescription:
      'Reseña de Chatty-mini 2026: una app de Android que ejecuta modelos GGUF en el dispositivo para un chat privado y local. Basada únicamente en lo que documenta su ficha de Google Play.',
    audience:
      'Usuarios de Android que evalúan una app pequeña y desarrollada de forma independiente de chat con IA local frente a alternativas mejor documentadas como Loci, Private LLM o PocketPal AI.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Reseña de Chatty-mini',
    targetKeywords: [
      'chatty-mini reseña',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini ia local',
      'chatty-mini ia privada',
      'chatty-mini chat sin conexión',
      'app de chat gguf android',
      'espacio de trabajo ia local android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini es una app de Android pequeña, desarrollada de forma independiente por Fractal Media Infrastructure, que ejecuta modelos GGUF en el dispositivo para un chat privado y local.** Su [ficha de Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) la posiciona como un "asistente ligero, pensado para modo vertical" para escritura creativa sin conexión, notas y un espacio de chat privado. Más allá de esa descripción de la tienda, no existe documentación independiente (sitio web del desarrollador, registro de cambios o especificación técnica publicada) que confirme qué familias de modelos GGUF admite, cuál es su espacio de almacenamiento o cuál es su modelo de precios — así que esta reseña se limita a lo que la ficha realmente indica y señala todo lo que no indica.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Chatty-mini para un chat de IA privado y sin conexión en Android?',
        answer:
          'Considera Chatty-mini solo si buscas específicamente una app de Android ligera y pensada para modo vertical que ejecute modelos GGUF localmente, y te sientes cómodo evaluando una app sin documentación pública más allá de su ficha de Google Play. Si buscas una app de IA local con una política de privacidad publicada, sitio web del desarrollador o trayectoria comprobada en varias plataformas, Loci, Private LLM o PocketPal AI son puntos de partida mejor documentados.',
        bullets: [
          'Solo Android, según la ficha de Google Play — no aparece versión para iOS, Mac ni Windows.',
          'Ejecuta modelos GGUF directamente en el dispositivo, según la descripción de la ficha.',
          'Desarrollador: Fractal Media Infrastructure (developer_url: [instance001.github.io](https://instance001.github.io)).',
          'ID del paquete: io.instance001.chatmini.',
          'Al momento de esta reseña, no hay información pública sobre precio, número de reseñas, número de descargas ni lista de modelos compatibles más allá de la página de la tienda.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Chatty-mini', anchor: 'what-is-chatty-mini' },
      { label: 'Qué dice la ficha que hace', anchor: 'what-it-does' },
      { label: 'Solo Android: qué esperar', anchor: 'platform' },
      { label: 'Qué no pudo verificar esta reseña', anchor: 'unverified' },
      { label: 'Chatty-mini frente a alternativas mejor documentadas', anchor: 'vs-alternatives' },
      { label: 'Quién debería considerar Chatty-mini', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Chatty-mini', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini es una app de Android pequeña y desarrollada de forma independiente por Fractal Media Infrastructure que ejecuta modelos GGUF en el dispositivo para un chat privado y local, documentada únicamente a través de su ficha de Google Play.',
          },
          {
            type: 'plain-terms',
            text: 'Es una app de Android que instalas para chatear con un modelo de IA que se ejecuta en tu propio teléfono en lugar de en un servidor — el desarrollador la describe como privada y capaz de funcionar sin conexión, pero fuera de la página de la tienda no hay sitio web propio, registro de cambios ni ficha técnica con la que contrastar esa afirmación.',
          },
        ],
        items: [
          'App de Android, ID de paquete io.instance001.chatmini, desarrollador indicado: Fractal Media Infrastructure.',
          'Descripción de Google Play: "Private, local-first AI chat. Run GGUF models offline on your Android device."',
          'Según la ficha, orientada a escritura creativa sin conexión, notas y un espacio de chat privado.',
          'No aparece versión para iOS, Mac, Windows ni Linux — solo Android.',
          'Al momento de la reseña, no hay información pública sobre precio, descargas, número de reseñas ni lista de modelos GGUF compatibles más allá de la página de la tienda.',
          'No se encontró un sitio web del desarrollador con documentación adicional, más allá del campo developer_url ([instance001.github.io](https://instance001.github.io)) enlazado desde la ficha de Play Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa únicamente en la ficha pública de Google Play de Chatty-mini (io.instance001.chatmini) a septiembre de 2026. Es una app más pequeña, desarrollada de forma independiente — trata cada afirmación de abajo como "según la ficha" salvo que se indique lo contrario, y verifica los detalles actuales en la [página de Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) antes de instalar.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Qué es Chatty-mini',
        content: [
          'Chatty-mini es una aplicación de Android publicada en Google Play bajo el título "Chatty-mini: Your Personal, Private AI Workspace" (ID de paquete `io.instance001.chatmini`). La ficha atribuye el desarrollo a Fractal Media Infrastructure, con una URL de desarrollador [instance001.github.io](https://instance001.github.io).',
          'La descripción corta de Google Play indica: "Private, local-first AI chat. Run GGUF models offline on your Android device." La descripción más larga añade: "Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device", pensada para "an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..." — la descripción estaba cortada en ese punto cuando se investigó esta reseña, así que lo que sigue a ese fragmento de frase no se reproduce aquí.',
        ],
        note: 'GGUF es un formato de archivo utilizado para empaquetar y ejecutar localmente modelos de lenguaje de peso abierto (mediante entornos de ejecución como llama.cpp) en lugar de llamar a una API en la nube. Que una app se describa como "que ejecuta modelos GGUF" significa que la inferencia está diseñada para ocurrir en el dispositivo, no que un modelo específico venga incluido con la instalación.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué dice la ficha que hace',
        content: [
          'Basándose estrictamente en la descripción de Google Play, Chatty-mini se posiciona en torno a tres casos de uso y una decisión de diseño estructural:',
        ],
        items: [
          '**Inferencia local basada en GGUF.** La ficha indica que la app ejecuta "GGUF models offline on your Android device", lo que implica ejecución del modelo en el dispositivo en lugar de una llamada a una API en la nube para el chat.',
          '**Interfaz ligera, pensada para modo vertical.** La ficha describe la app como "lightweight, portrait-first", lo que sugiere una interfaz orientada al teléfono en lugar de estar optimizada para tablet o escritorio.',
          '**Compañera de escritura creativa.** Aparece como uno de los tres casos de uso de ejemplo: "an offline companion for creative writing".',
          '**Asistente de notas.** Aparece como segundo caso de uso de ejemplo: "a fast assistant for your notes".',
          '**Espacio de chat privado.** Aparece como tercer caso de uso de ejemplo: "a secure space for your..." — la frase quedó cortada en la ficha original en ese punto, así que el objeto concreto de esa frase (por ejemplo, "para tus conversaciones", "para tus pensamientos") no se confirma aquí.',
        ],
        note: 'Esta sección no añade intencionadamente capacidades más allá de lo que indica la ficha. No confirma qué familias de modelos GGUF concretas están incluidas o son descargables, si la inferencia se ejecuta completamente sin conexión tras el primer inicio o requiere una descarga inicial, ni qué requisitos de dispositivo aplican — nada de eso está publicado en el extracto de la ficha disponible al momento de la reseña.',
      },
      platform: {
        id: 'platform',
        title: 'Solo Android: qué esperar',
        itemHeadings: true,
        columns: ['Plataforma', 'Qué confirma la ficha', 'Qué no está confirmado'],
        rows: [
          {
            'Plataforma': 'Android',
            'Qué confirma la ficha': 'Disponible en [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) con el ID de paquete io.instance001.chatmini. Ejecuta modelos GGUF en el dispositivo, según la descripción.',
            'Qué no está confirmado': 'Versión mínima de Android, RAM/almacenamiento mínimos, requisitos de chipset, o si un modelo viene incluido en la instalación o se descarga por separado.',
          },
          {
            'Plataforma': 'iOS / iPad',
            'Qué confirma la ficha': 'No se encontró ficha para iOS ni iPadOS de Chatty-mini al momento de la reseña.',
            'Qué no está confirmado': 'Si está prevista una versión para iOS. Trátese como exclusiva de Android hasta que aparezca una ficha oficial para iOS.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'Qué confirma la ficha': 'No se encontró ficha de escritorio (Mac App Store, Microsoft Store o instalador independiente) para Chatty-mini al momento de la reseña.',
            'Qué no está confirmado': 'Si existe o está prevista compatibilidad con escritorio. Trátese como exclusiva de Android hasta que aparezca una versión oficial de escritorio.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'Qué no pudo verificar esta reseña',
        content: [
          'Una reseña responsable revela sus propias lagunas con la misma claridad que sus hallazgos. Los siguientes puntos son verificaciones estándar para una reseña de app de LLM local que no se pudieron completar para Chatty-mini porque la información no está publicada en ningún lugar que esta reseña haya podido localizar — solo en la propia ficha de Google Play, que no las cubre:',
        ],
        items: [
          '**Precio.** No se cita aquí ningún precio, nivel de suscripción o información de compra dentro de la app porque no se veía ninguno en el extracto de ficha investigado. Consulta directamente la [ficha de Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) para conocer el precio actual antes de instalar.',
          '**Lista de modelos compatibles.** La ficha habla de "GGUF models" de forma genérica; no nombra familias de modelos específicas (por ejemplo, Llama, Qwen, Gemma o Phi), así que esta reseña no afirma compatibilidad con ningún modelo concreto.',
          '**Número de descargas y reseñas.** No se citan aquí — cambian continuamente y deberían consultarse en directo en la página de la tienda en lugar de basarse en una instantánea de la reseña.',
          '**Detalles de la política de privacidad.** La descripción corta llama a la app "private, local-first", pero esta reseña no tuvo acceso a una política de privacidad completa e independiente para verificar qué datos, si los hay, recopila la app (analítica, informes de fallos o datos de cuenta). Comprueba la sección "Seguridad de los datos" de la ficha en Play Store antes de asumir que no se recopila ningún dato.',
          '**Espacio de almacenamiento y requisitos del dispositivo.** El tamaño de la app, el tamaño de los archivos de modelo y la RAM mínima no están publicados en el extracto de ficha disponible para esta reseña.',
          '**Opiniones independientes de usuarios.** Esta reseña no cita reseñas de usuarios, ya que una pequeña muestra de reseñas de Play Store no sustituye de forma fiable a una prueba práctica, y PromptQuorum no ha realizado ninguna prueba práctica de Chatty-mini para este artículo.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini frente a alternativas mejor documentadas',
        itemHeadings: true,
        columns: ['App', 'Nivel de documentación', 'Plataformas', 'Flexibilidad de modelos'],
        rows: [
          {
            'App': 'Chatty-mini',
            'Nivel de documentación': 'Solo ficha de Google Play; no se encontró sitio web de desarrollador independiente, registro de cambios ni ficha técnica',
            'Plataformas': 'Solo Android, según su ficha de Play Store',
            'Flexibilidad de modelos': 'Ejecuta modelos GGUF según la ficha; no se nombran modelos concretos compatibles',
          },
          {
            'App': 'Loci',
            'Nivel de documentación': 'Sitio web del desarrollador, etiquetas de privacidad de App Store y Play Store, páginas de soporte activas',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidad de modelos': 'Biblioteca curada (~10 modelos: Gemma, Qwen, Llama, Phi); no permite importar archivos GGUF personalizados',
          },
          {
            'App': 'Private LLM',
            'Nivel de documentación': 'Sitio web del desarrollador con biblioteca de modelos y precios publicados',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': 'Más de 140 modelos, formatos de cuantización OmniQuant y GPTQ',
          },
          {
            'App': 'PocketPal AI',
            'Nivel de documentación': 'Repositorio de código abierto en GitHub; código e incidencias visibles públicamente',
            'Plataformas': 'iPhone/iPad, con cierto soporte para Android',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario obtenga de Hugging Face u otras fuentes',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería considerar Chatty-mini',
        items: [
          '**Usuarios de Android con curiosidad específica por una app de chat GGUF ligera y pensada para modo vertical.** Si la descripción de la app coincide exactamente con lo que buscas — una interfaz pequeña, orientada al teléfono, para chat GGUF local — puede valer la pena una instalación de prueba de bajo riesgo, dado que la app parece descargable de forma gratuita según la ficha (no se citaba ningún precio en el extracto investigado; confírmalo antes de instalar).',
          '**Usuarios que se sienten cómodos evaluando por sí mismos una app pequeña y desarrollada de forma independiente.** Chatty-mini no tiene la profundidad de documentación de Loci, Private LLM o PocketPal AI. Si te parece bien leer tú mismo la configuración de la app y la sección "Seguridad de los datos" de Play Store en lugar de depender de un sitio web del desarrollador, perteneces a una categoría de usuario de menor riesgo.',
          '**Usuarios que ya entienden GGUF y quieren un compañero mínimo de notas o escritura creativa.** Los casos de uso indicados en la ficha (escritura creativa, notas, chat privado) sugieren una herramienta casual y de propósito único, en lugar de una plataforma completa de gestión de modelos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Chatty-mini',
        items: [
          '**Usuarios que necesitan soporte para iOS, Mac o Windows.** No se encontró ficha para esas plataformas; Chatty-mini parece ser exclusiva de Android.',
          '**Usuarios que necesitan una política de privacidad verificada y documentada antes de confiar conversaciones privadas a una app.** Esta reseña no pudo verificar una política de privacidad completa más allá de la afirmación "private, local-first" en la descripción corta — comprueba tú mismo la sección "Seguridad de los datos" de Play Store antes de usarla para contenido sensible.',
          '**Usuarios que quieren controlar qué modelo específico procesa sus chats.** La ficha no nombra familias de modelos compatibles, así que los usuarios interesados en ejecutar un modelo concreto (por ejemplo, una variante específica de Llama o Qwen) deberían elegir una app como PocketPal AI o Private LLM que documenta esto.',
          '**Usuarios que buscan una trayectoria comprobada.** Como no se localizaron reseñas independientes, registro de cambios ni datos de uso a largo plazo para esta reseña, los usuarios que prefieren una app con un historial público establecido deberían considerar en su lugar Loci, Private LLM o PocketPal AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Chatty-mini?',
            a: 'Chatty-mini es una app de Android publicada en Google Play (ID de paquete io.instance001.chatmini) por el desarrollador Fractal Media Infrastructure. Su ficha la describe como un "private, local-first AI chat" que ejecuta modelos GGUF sin conexión en el dispositivo.',
          },
          {
            q: '¿Es gratis Chatty-mini?',
            a: 'Esta reseña no pudo confirmar el precio actual a partir del extracto de ficha investigado. Consulta directamente la [ficha de Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini), ya que el precio y las compras dentro de la app pueden cambiar y no se pueden citar de forma fiable desde una reseña estática.',
          },
          {
            q: '¿Funciona Chatty-mini completamente sin conexión?',
            a: 'La descripción de Google Play indica que la app ejecuta "GGUF models offline on your Android device", lo que implica que la inferencia en el dispositivo es el objetivo de diseño. Esta reseña no ha probado de forma independiente el comportamiento sin conexión (por ejemplo, en modo avión), así que trata la capacidad "sin conexión" como una afirmación del desarrollador, no como un resultado verificado de forma independiente.',
          },
          {
            q: '¿Qué modelos de IA admite Chatty-mini?',
            a: 'La ficha habla de "GGUF models" de forma genérica pero no nombra familias de modelos compatibles concretas en el extracto de descripción disponible para esta reseña. Si necesitas un modelo específico, verifica la compatibilidad dentro de la app antes de confiar en ella, o elige una app como PocketPal AI o Private LLM que publique su lista de modelos compatibles.',
          },
          {
            q: '¿Está disponible Chatty-mini en iPhone o iPad?',
            a: 'No se encontró ficha para iOS ni iPadOS de Chatty-mini al momento de la reseña. Parece ser exclusiva de Android, según la ficha de Google Play disponible.',
          },
          {
            q: '¿Quién desarrolla Chatty-mini?',
            a: 'La ficha de Google Play atribuye el desarrollo a Fractal Media Infrastructure, con una URL de desarrollador [instance001.github.io](https://instance001.github.io). Más allá de esta atribución en la ficha, esta reseña no encontró un sitio web de empresa independiente ni una trayectoria pública del desarrollador.',
          },
          {
            q: '¿Es segura Chatty-mini para conversaciones privadas?',
            a: 'La descripción corta llama a la app "private, local-first", pero esta reseña no tuvo acceso a una política de privacidad completa e independiente para verificar qué datos, si los hay, se recopilan. Antes de confiarle contenido sensible a la app, comprueba la sección "Seguridad de los datos" en su ficha de Google Play y lee la política de privacidad dentro de la app, ya que pueden diferir de la descripción de marketing.',
          },
          {
            q: '¿Cómo se compara Chatty-mini con Loci o Private LLM?',
            a: 'Tanto Loci como Private LLM publican sitios web de desarrollador, bibliotecas de modelos y (en el caso de Loci) una etiqueta de privacidad de App Store — Chatty-mini no cuenta con documentación pública equivalente disponible al momento de la reseña. Loci también admite cinco plataformas (iPhone, iPad, Android, Mac, Windows) frente a la ficha de Chatty-mini, exclusiva de Android. Si la profundidad de la documentación y el soporte multiplataforma te importan, Loci o Private LLM son los puntos de partida mejor verificados; consulta la tabla comparativa anterior.',
          },
          {
            q: '¿Chatty-mini requiere descargar un modelo tras la instalación?',
            a: 'Esto no está confirmado en el extracto de ficha disponible para esta reseña. Las apps que ejecutan modelos GGUF generalmente incluyen un modelo pequeño o requieren una primera descarga; la ficha de Chatty-mini no especifica cuál de estos enfoques utiliza. Comprueba el flujo de incorporación dentro de la app después de instalarla para confirmarlo.',
          },
          {
            q: '¿Por qué esta reseña matiza tanto sus afirmaciones sobre Chatty-mini en comparación con otras reseñas de apps de este sitio?',
            a: 'Porque el material fuente disponible es más escaso. Chatty-mini es una app más pequeña, desarrollada de forma independiente, cuya única documentación pública al momento de la reseña es su ficha de Google Play — sin sitio web del desarrollador con especificaciones técnicas, sin registro de cambios publicado y sin pruebas prácticas verificadas de forma independiente por PromptQuorum. Esta reseña reporta únicamente lo que indica la ficha y es explícita sobre lo que sigue sin verificar, en lugar de llenar los vacíos con suposiciones.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Chatty-mini es una app de Android pequeña y desarrollada de forma independiente que se posiciona en torno a una idea clara y acotada: ejecutar modelos GGUF en el dispositivo para un chat privado y local, en una interfaz ligera y pensada para modo vertical orientada a escritura creativa, notas y un espacio de chat privado. Esa idea es creíble y coherente con cómo funciona la inferencia local basada en GGUF en otras apps de Android. Lo que separa esta reseña de un respaldo total no es el concepto, sino la documentación: al momento de la reseña, la única fuente pública para Chatty-mini es su ficha de Google Play, sin sitio web de desarrollador independiente, lista de modelos publicada, detalles de política de privacidad ni precio confirmado más allá de esa página. Los usuarios que quieran probar por su cuenta una app de chat pequeña, exclusiva de Android y basada en GGUF — y que se sientan cómodos comprobando ellos mismos la sección "Seguridad de los datos" de Play Store y la configuración dentro de la app — pueden considerar que Chatty-mini merece una prueba de bajo riesgo. Los usuarios que necesiten soporte multiplataforma, una biblioteca de modelos documentada, precios verificados o una trayectoria establecida deberían empezar en cambio con Loci, Private LLM o PocketPal AI, todas las cuales publican una documentación pública considerablemente más completa.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Chatty-mini en Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — la única ficha pública utilizada para esta reseña: título, texto de descripción corta y larga, y atribución del desarrollador.',
          '[Loci en App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — referenciado a modo de comparación; etiqueta de privacidad y disponibilidad por plataforma.',
          '[Sitio oficial de Private LLM](https://privatellm.app/en) — referenciado a modo de comparación; precios, biblioteca de modelos y soporte de plataformas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Loci AI: IA sin conexión para iPhone, Android, iPad, Mac y Windows](/power-local-llm/loci-ai-review-offline-local-ai) — una alternativa multiplataforma mejor documentada, con una etiqueta de privacidad publicada.',
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el resumen de apps de Android, incluyendo MLC Chat, Maid, Layla, Ollama vía Termux y PocketPal AI.',
          '[Los mejores modelos LLM móviles en 2026: Phi-4 Mini frente a Gemma 4 frente a SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — el artículo complementario sobre modelos, que explica qué modelos compatibles con GGUF realmente caben en un teléfono.',
          '[Ejecuta un LLM local en tu tablet: iPad y Android](/power-local-llm/run-ai-on-tablet-ipad-android) — guía centrada en dispositivos para inferencia local y remota en tablets.',
          '[El directorio completo de software de LLM local](/power-local-llm/local-llm-software-directory-2026) — un directorio más amplio de herramientas de LLM local en todas las plataformas, incluyendo apps más pequeñas y menos documentadas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini: reseña (2026) — chat GGUF privado y local en Android',
      description:
        'Reseña de Chatty-mini: una app de Android en modo vertical que ejecuta modelos GGUF de forma local para chat privado y sin conexión. Qué confirma la ficha de Google Play, qué no, y para quién es adecuada.',
      url: 'https://promptquorum.com/es/power-local-llm/chatty-mini-review',
      inLanguage: 'es',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de Android que evalúan apps de chat con IA local basadas en GGUF' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini: reseña (2026)', item: 'https://promptquorum.com/es/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-pt.webp',
    title: 'Chatty-mini: análise (2026) — chat GGUF privado e local no Android',
    seoTitle: 'Chatty-mini: análise 2026 do chat GGUF local no Android',
    intro:
      'O Chatty-mini, desenvolvido pela Fractal Media Infrastructure, está listado na Google Play como "Chatty-mini: Your Personal, Private AI Workspace" — um app Android voltado para o modo retrato, criado para executar modelos GGUF diretamente no aparelho. A [ficha da Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) o descreve como um "chat de IA privado e local" para escrita criativa offline, anotações e um espaço de chat privado, sem mencionar nenhum fallback na nuvem. Esta análise se limita ao que a ficha pública realmente documenta — o Chatty-mini é um projeto pequeno, desenvolvido de forma independente, e boa parte do que uma análise completa normalmente verificaria (famílias de modelos específicas suportadas, espaço de armazenamento ocupado, preço e feedback de usuários sobre confiabilidade) não está publicada em nenhum outro lugar além dessa própria página da loja.',
    metaDescription:
      'Análise do Chatty-mini: um app Android voltado para o modo retrato que executa modelos GGUF localmente para chat privado e offline. O que a ficha da Google Play confirma, o que não confirma, e para quem ele é indicado.',
    twitterDescription:
      'Análise do Chatty-mini 2026: um app Android que executa modelos GGUF no aparelho para chat privado e local. Baseada apenas no que a ficha da Google Play documenta.',
    audience:
      'Usuários de Android avaliando um app pequeno e desenvolvido de forma independente de chat com IA local frente a alternativas mais bem documentadas como Loci, Private LLM ou PocketPal AI.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Análise do Chatty-mini',
    targetKeywords: [
      'chatty-mini análise',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini ia local',
      'chatty-mini ia privada',
      'chatty-mini chat offline',
      'app de chat gguf android',
      'espaço de trabalho ia local android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Chatty-mini é um app Android pequeno, desenvolvido de forma independente pela Fractal Media Infrastructure, que executa modelos GGUF no aparelho para um chat privado e local.** Sua [ficha na Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) o posiciona como um "assistente leve, voltado para o modo retrato" para escrita criativa offline, anotações e um espaço de chat privado. Além dessa descrição da loja, não existe documentação independente (site do desenvolvedor, changelog ou especificação técnica publicada) confirmando quais famílias de modelos GGUF são suportadas, qual é o espaço de armazenamento ocupado, ou qual é o modelo de preços — por isso, esta análise se atém ao que a ficha realmente afirma e sinaliza tudo o que ela não afirma.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Chatty-mini para chat de IA privado e offline no Android?',
        answer:
          'Considere o Chatty-mini apenas se você quer especificamente um app Android leve, voltado para o modo retrato, que execute modelos GGUF localmente, e se sente confortável avaliando um app sem documentação pública além de sua ficha na Google Play. Se você quer um app de IA local com política de privacidade publicada, site do desenvolvedor ou histórico comprovado em várias plataformas, Loci, Private LLM ou PocketPal AI são pontos de partida mais bem documentados.',
        bullets: [
          'Somente Android, segundo a ficha da Google Play — nenhuma versão para iOS, Mac ou Windows listada.',
          'Executa modelos GGUF diretamente no aparelho, segundo a descrição da ficha.',
          'Desenvolvedor: Fractal Media Infrastructure (developer_url: [instance001.github.io](https://instance001.github.io)).',
          'ID do pacote: io.instance001.chatmini.',
          'No momento desta análise, não há informação pública sobre preço, número de avaliações, número de downloads ou lista de modelos suportados além da página da loja.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Chatty-mini', anchor: 'what-is-chatty-mini' },
      { label: 'O que a ficha diz que ele faz', anchor: 'what-it-does' },
      { label: 'Somente Android: o que esperar', anchor: 'platform' },
      { label: 'O que esta análise não conseguiu verificar', anchor: 'unverified' },
      { label: 'Chatty-mini vs. alternativas mais bem documentadas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria considerar o Chatty-mini', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Chatty-mini', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Chatty-mini é um app Android pequeno, desenvolvido de forma independente pela Fractal Media Infrastructure, que executa modelos GGUF no aparelho para chat privado e local, documentado apenas por meio de sua ficha na Google Play.',
          },
          {
            type: 'plain-terms',
            text: 'É um app Android que você instala para conversar com um modelo de IA que roda no seu próprio celular em vez de em um servidor — o desenvolvedor o descreve como privado e capaz de funcionar offline, mas, além da página da loja, não existe site próprio, changelog ou ficha técnica para verificar essa afirmação.',
          },
        ],
        items: [
          'App Android, ID do pacote io.instance001.chatmini, desenvolvedor listado: Fractal Media Infrastructure.',
          'Descrição da Google Play: "Private, local-first AI chat. Run GGUF models offline on your Android device."',
          'Posicionado, segundo a ficha, para escrita criativa offline, anotações e um espaço de chat privado.',
          'Nenhuma versão para iOS, Mac, Windows ou Linux listada — somente Android.',
          'No momento da análise, não há informação pública sobre preço, número de downloads, número de avaliações ou lista de modelos GGUF suportados além da página da loja.',
          'Nenhum site do desenvolvedor com documentação adicional foi encontrado, além do campo developer_url ([instance001.github.io](https://instance001.github.io)) vinculado na ficha da Play Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia unicamente na ficha pública da Google Play do Chatty-mini (io.instance001.chatmini), em setembro de 2026. É um app menor, desenvolvido de forma independente — trate cada afirmação abaixo como "segundo a ficha", salvo indicação contrária, e verifique os detalhes atuais na [página da Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) antes de instalar.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'O que é o Chatty-mini',
        content: [
          'O Chatty-mini é um aplicativo Android publicado na Google Play com o título "Chatty-mini: Your Personal, Private AI Workspace" (ID do pacote `io.instance001.chatmini`). A ficha credita o desenvolvimento à Fractal Media Infrastructure, com uma URL de desenvolvedor [instance001.github.io](https://instance001.github.io).',
          'A descrição curta da Google Play afirma: "Private, local-first AI chat. Run GGUF models offline on your Android device." A descrição mais longa acrescenta: "Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device", voltado para "an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..." — a descrição estava truncada nesse ponto quando esta análise foi pesquisada, então o que vem depois desse fragmento de frase não é reproduzido aqui.',
        ],
        note: 'GGUF é um formato de arquivo usado para empacotar e executar localmente modelos de linguagem de peso aberto (por meio de runtimes como o llama.cpp) em vez de chamar uma API na nuvem. Um app que se descreve como "executando modelos GGUF" significa que a inferência foi projetada para acontecer no aparelho, não que um modelo específico venha incluído na instalação.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que a ficha diz que ele faz',
        content: [
          'Com base estritamente na descrição da Google Play, o Chatty-mini se posiciona em torno de três casos de uso e uma decisão estrutural de design:',
        ],
        items: [
          '**Inferência local baseada em GGUF.** A ficha afirma que o app executa "GGUF models offline on your Android device", o que sugere execução do modelo no aparelho em vez de uma chamada de API na nuvem para o chat.',
          '**Interface leve, voltada para o modo retrato.** A ficha descreve o app como "lightweight, portrait-first", sugerindo uma interface orientada para smartphone em vez de otimizada para tablet ou desktop.',
          '**Companheiro de escrita criativa.** Listado como um dos três casos de uso de exemplo: "an offline companion for creative writing".',
          '**Assistente de anotações.** Listado como o segundo caso de uso de exemplo: "a fast assistant for your notes".',
          '**Espaço de chat privado.** Listado como terceiro caso de uso de exemplo: "a secure space for your..." — a frase foi cortada nesse ponto na ficha original, então o objeto específico dessa frase (por exemplo, "para suas conversas", "para seus pensamentos") não é confirmado aqui.',
        ],
        note: 'Esta seção intencionalmente não adiciona recursos além do que a ficha afirma. Ela não confirma quais famílias de modelos GGUF específicas estão incluídas ou disponíveis para download, se a inferência roda totalmente offline após o primeiro uso ou exige um download inicial, nem quais requisitos de aparelho se aplicam — nada disso está publicado no trecho da ficha disponível no momento da análise.',
      },
      platform: {
        id: 'platform',
        title: 'Somente Android: o que esperar',
        itemHeadings: true,
        columns: ['Plataforma', 'O que a ficha confirma', 'O que não está confirmado'],
        rows: [
          {
            'Plataforma': 'Android',
            'O que a ficha confirma': 'Disponível na [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) com o ID de pacote io.instance001.chatmini. Executa modelos GGUF no aparelho, segundo a descrição.',
            'O que não está confirmado': 'Versão mínima do Android, RAM/armazenamento mínimos, requisitos de chipset, ou se um modelo já vem incluído na instalação ou é baixado separadamente.',
          },
          {
            'Plataforma': 'iOS / iPad',
            'O que a ficha confirma': 'Nenhuma ficha para iOS ou iPadOS do Chatty-mini foi encontrada no momento da análise.',
            'O que não está confirmado': 'Se uma versão para iOS está planejada. Trate como exclusivo para Android até que uma ficha oficial para iOS apareça.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'O que a ficha confirma': 'Nenhuma ficha para desktop (Mac App Store, Microsoft Store ou instalador independente) foi encontrada para o Chatty-mini no momento da análise.',
            'O que não está confirmado': 'Se existe ou está planejado suporte para desktop. Trate como exclusivo para Android até que uma versão oficial para desktop apareça.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'O que esta análise não conseguiu verificar',
        content: [
          'Uma análise responsável revela suas próprias lacunas com a mesma clareza de suas conclusões. Os itens a seguir são verificações padrão para uma análise de app de LLM local que não puderam ser concluídas para o Chatty-mini porque a informação não está publicada em nenhum lugar que esta análise conseguiu localizar — apenas na própria ficha da Google Play, que não as cobre:',
        ],
        items: [
          '**Preço.** Nenhum preço, nível de assinatura ou informação de compra dentro do app é citado aqui, pois nenhum estava visível no trecho da ficha pesquisado. Confira o preço atual diretamente na [ficha da Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) antes de instalar.',
          '**Lista de modelos suportados.** A ficha fala de "GGUF models" de forma genérica; ela não nomeia famílias de modelos específicas (por exemplo, Llama, Qwen, Gemma ou Phi), então esta análise não afirma compatibilidade com nenhum modelo nomeado.',
          '**Números de download e avaliações.** Não citados aqui — esses números mudam continuamente e devem ser verificados ao vivo na página da loja, e não com base em um instantâneo da análise.',
          '**Detalhes da política de privacidade.** A descrição curta chama o app de "private, local-first", mas esta análise não teve acesso a uma política de privacidade completa e independente para verificar quais dados, se houver, o app coleta (análise de uso, relatórios de falhas ou dados de conta). Confira a seção "Segurança dos dados" da ficha na Play Store antes de assumir que não há coleta de dados.',
          '**Espaço de armazenamento e requisitos de aparelho.** O tamanho do app, o tamanho dos arquivos de modelo e a RAM mínima não estão publicados no trecho da ficha disponível para esta análise.',
          '**Feedback independente de usuários.** Esta análise não cita avaliações de usuários, já que uma pequena amostra de avaliações da Play Store não é um substituto confiável para testes práticos, e a PromptQuorum não realizou nenhum teste prático do Chatty-mini para este artigo.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini vs. alternativas mais bem documentadas',
        itemHeadings: true,
        columns: ['App', 'Nível de documentação', 'Plataformas', 'Flexibilidade de modelo'],
        rows: [
          {
            'App': 'Chatty-mini',
            'Nível de documentação': 'Apenas ficha da Google Play; nenhum site de desenvolvedor independente, changelog ou ficha técnica encontrados',
            'Plataformas': 'Somente Android, segundo sua ficha na Play Store',
            'Flexibilidade de modelo': 'Executa modelos GGUF segundo a ficha; modelos específicos suportados não são nomeados',
          },
          {
            'App': 'Loci',
            'Nível de documentação': 'Site do desenvolvedor, selos de privacidade da App Store e Play Store, páginas de suporte ativas',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidade de modelo': 'Biblioteca curada (~10 modelos: Gemma, Qwen, Llama, Phi); não permite importar arquivos GGUF personalizados',
          },
          {
            'App': 'Private LLM',
            'Nível de documentação': 'Site do desenvolvedor com biblioteca de modelos e preços publicados',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Flexibilidade de modelo': 'Mais de 140 modelos, formatos de quantização OmniQuant e GPTQ',
          },
          {
            'App': 'PocketPal AI',
            'Nível de documentação': 'Repositório open source no GitHub; código e issues visíveis publicamente',
            'Plataformas': 'iPhone/iPad, com algum suporte a Android',
            'Flexibilidade de modelo': 'Qualquer arquivo GGUF que o usuário obtenha no Hugging Face ou em outro lugar',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria considerar o Chatty-mini',
        items: [
          '**Usuários de Android especificamente curiosos sobre um app de chat GGUF leve e voltado para o modo retrato.** Se a descrição do app corresponder exatamente ao que você procura — uma interface pequena, voltada para smartphone, para chat GGUF local — pode valer a pena uma instalação de teste de baixo risco, já que o app parece ser gratuito para download segundo a ficha (nenhum preço foi citado no trecho pesquisado; confirme antes de instalar).',
          '**Usuários confortáveis em avaliar por conta própria um app pequeno e desenvolvido de forma independente.** O Chatty-mini não tem a profundidade de documentação de Loci, Private LLM ou PocketPal AI. Se você não se importa em ler você mesmo as configurações do app e a seção "Segurança dos dados" da Play Store, em vez de depender de um site do desenvolvedor, você se encaixa em uma categoria de usuário de menor risco.',
          '**Usuários que já entendem GGUF e querem um companheiro mínimo para anotações ou escrita criativa.** Os casos de uso indicados na ficha (escrita criativa, anotações, chat privado) sugerem uma ferramenta casual e de propósito único, em vez de uma plataforma completa de gerenciamento de modelos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Chatty-mini',
        items: [
          '**Usuários que precisam de suporte a iOS, Mac ou Windows.** Nenhuma ficha foi encontrada para essas plataformas; o Chatty-mini parece ser exclusivo para Android.',
          '**Usuários que precisam de uma política de privacidade verificada e documentada antes de confiar conversas privadas a um app.** Esta análise não conseguiu verificar uma política de privacidade completa além da afirmação "private, local-first" na descrição curta — confira você mesmo a seção "Segurança dos dados" da Play Store antes de usá-lo para conteúdo sensível.',
          '**Usuários que querem controlar qual modelo específico processa seus chats.** A ficha não nomeia famílias de modelos suportadas, então usuários que se importam em rodar um modelo específico (por exemplo, uma variante particular de Llama ou Qwen) deveriam escolher um app como PocketPal AI ou Private LLM, que documenta isso.',
          '**Usuários que querem um histórico comprovado.** Como nenhuma avaliação independente, changelog ou dado de uso de longo prazo foi encontrado para esta análise, usuários que preferem um app com um histórico público estabelecido deveriam considerar Loci, Private LLM ou PocketPal AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o Chatty-mini?',
            a: 'O Chatty-mini é um app Android publicado na Google Play (ID do pacote io.instance001.chatmini) pelo desenvolvedor Fractal Media Infrastructure. Sua ficha o descreve como um "private, local-first AI chat" que executa modelos GGUF offline no aparelho.',
          },
          {
            q: 'O Chatty-mini é gratuito?',
            a: 'Esta análise não conseguiu confirmar o preço atual a partir do trecho de ficha pesquisado. Confira diretamente a [ficha da Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini), já que preços e compras dentro do app podem mudar e não podem ser citados com confiabilidade a partir de uma análise estática.',
          },
          {
            q: 'O Chatty-mini funciona totalmente offline?',
            a: 'A descrição da Google Play afirma que o app executa "GGUF models offline on your Android device", o que sugere que a inferência no aparelho é o objetivo do design. Esta análise não testou de forma independente o comportamento offline (por exemplo, em modo avião) — trate a capacidade "offline" como uma afirmação do desenvolvedor, não como um resultado verificado de forma independente.',
          },
          {
            q: 'Quais modelos de IA o Chatty-mini suporta?',
            a: 'A ficha fala de "GGUF models" de forma genérica, mas não nomeia famílias de modelos específicas suportadas no trecho de descrição disponível para esta análise. Se você precisa de um modelo específico, verifique a compatibilidade dentro do app antes de confiar nele, ou escolha um app como PocketPal AI ou Private LLM que publique sua lista de modelos suportados.',
          },
          {
            q: 'O Chatty-mini está disponível para iPhone ou iPad?',
            a: 'Nenhuma ficha para iOS ou iPadOS do Chatty-mini foi encontrada no momento da análise. Ele parece ser exclusivo para Android, com base na ficha disponível na Google Play.',
          },
          {
            q: 'Quem desenvolve o Chatty-mini?',
            a: 'A ficha da Google Play credita o desenvolvimento à Fractal Media Infrastructure, com uma URL de desenvolvedor [instance001.github.io](https://instance001.github.io). Além dessa atribuição na ficha, esta análise não encontrou um site de empresa independente nem um histórico público do desenvolvedor.',
          },
          {
            q: 'O Chatty-mini é seguro para conversas privadas?',
            a: 'A descrição curta chama o app de "private, local-first", mas esta análise não teve acesso a uma política de privacidade completa e independente para verificar quais dados, se houver, são coletados. Antes de confiar conteúdo sensível ao app, confira a seção "Segurança dos dados" em sua ficha na Google Play e leia a política de privacidade dentro do app, já que elas podem diferir da descrição de marketing.',
          },
          {
            q: 'Como o Chatty-mini se compara ao Loci ou ao Private LLM?',
            a: 'Tanto o Loci quanto o Private LLM publicam sites de desenvolvedor, bibliotecas de modelos e (no caso do Loci) um selo de privacidade da App Store — o Chatty-mini não tem documentação pública equivalente disponível no momento da análise. O Loci também suporta cinco plataformas (iPhone, iPad, Android, Mac, Windows) contra a ficha do Chatty-mini, exclusiva para Android. Se profundidade de documentação e suporte multiplataforma importam para você, Loci ou Private LLM são os pontos de partida mais bem verificados; veja a tabela comparativa acima.',
          },
          {
            q: 'O Chatty-mini exige o download de um modelo após a instalação?',
            a: 'Isso não é confirmado no trecho de ficha disponível para esta análise. Apps que executam modelos GGUF geralmente incluem um modelo pequeno ou exigem um download inicial; a ficha do Chatty-mini não especifica qual dessas abordagens ele usa. Confira o fluxo de integração dentro do app após a instalação para confirmar.',
          },
          {
            q: 'Por que esta análise faz tantas ressalvas sobre o Chatty-mini em comparação com outras análises de apps deste site?',
            a: 'Porque o material-fonte disponível é mais escasso. O Chatty-mini é um app menor, desenvolvido de forma independente, cuja única documentação pública no momento da análise é sua ficha na Google Play — sem site de desenvolvedor com especificações técnicas, sem changelog publicado e sem teste prático verificado de forma independente pela PromptQuorum. Esta análise relata apenas o que a ficha afirma e é explícita sobre o que permanece não verificado, em vez de preencher lacunas com suposições.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Chatty-mini é um app Android pequeno, desenvolvido de forma independente, que se posiciona em torno de uma ideia clara e restrita: executar modelos GGUF no aparelho para chat privado e local, em uma interface leve e voltada para o modo retrato, direcionada à escrita criativa, anotações e um espaço de chat privado. Essa ideia é crível e coerente com o funcionamento da inferência local baseada em GGUF em outros apps Android. O que separa esta análise de um endosso total não é o conceito, mas a documentação: no momento da análise, a única fonte pública para o Chatty-mini é sua ficha na Google Play, sem site de desenvolvedor independente, lista de modelos publicada, detalhes de política de privacidade ou preço confirmado além dessa página. Usuários que querem experimentar, por conta própria, um app de chat pequeno, exclusivo para Android e baseado em GGUF — e que se sentem à vontade para conferir eles mesmos a seção "Segurança dos dados" da Play Store e as configurações dentro do app — podem achar que o Chatty-mini vale um teste de baixo risco. Usuários que precisam de suporte multiplataforma, uma biblioteca de modelos documentada, preços verificados ou um histórico estabelecido deveriam começar em vez disso com Loci, Private LLM ou PocketPal AI, todos os quais publicam uma documentação pública consideravelmente mais completa.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Chatty-mini na Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — a única ficha pública usada nesta análise: título, texto das descrições curta e longa, e atribuição do desenvolvedor.',
          '[Loci na App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — referenciado para comparação; selo de privacidade e disponibilidade por plataforma.',
          '[Site oficial do Private LLM](https://privatellm.app/en) — referenciado para comparação; preços, biblioteca de modelos e suporte a plataformas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Loci AI: IA offline para iPhone, Android, iPad, Mac e Windows](/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa multiplataforma mais bem documentada, com selo de privacidade publicado.',
          '[Os melhores apps de LLM local para Android em 2026](/power-local-llm/best-local-llm-apps-android-2026) — o panorama de apps Android, incluindo MLC Chat, Maid, Layla, Ollama via Termux e PocketPal AI.',
          '[Os melhores modelos LLM móveis em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — o artigo complementar sobre modelos, explicando quais modelos compatíveis com GGUF realmente cabem em um celular.',
          '[Execute um LLM local no seu tablet: iPad e Android](/power-local-llm/run-ai-on-tablet-ipad-android) — guia focado em dispositivos para inferência local e remota em tablets.',
          '[O diretório completo de software de LLM local](/power-local-llm/local-llm-software-directory-2026) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas, incluindo apps menores e menos documentados.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini: análise (2026) — chat GGUF privado e local no Android',
      description:
        'Análise do Chatty-mini: um app Android voltado para o modo retrato que executa modelos GGUF localmente para chat privado e offline. O que a ficha da Google Play confirma, o que não confirma, e para quem ele é indicado.',
      url: 'https://promptquorum.com/pt/power-local-llm/chatty-mini-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários de Android avaliando apps de chat com IA local baseados em GGUF' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini: análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-ar.webp',
    title: 'مراجعة Chatty-mini (2026): محادثة GGUF خاصة ومحلية على Android',
    seoTitle: 'مراجعة Chatty-mini 2026: محادثة GGUF محلية على Android',
    intro:
      'تطبيق Chatty-mini، الذي طورته شركة Fractal Media Infrastructure، مُدرَج على Google Play باسم "Chatty-mini: Your Personal, Private AI Workspace" — وهو تطبيق Android مصمم أساسًا للعرض العمودي، ومُعَد لتشغيل نماذج GGUF مباشرة على الجهاز. تصف [صفحة Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) التطبيق بأنه "محادثة ذكاء اصطناعي خاصة ومحلية أولًا" للكتابة الإبداعية دون اتصال بالإنترنت، وتدوين الملاحظات، ومساحة محادثة خاصة، دون ذكر أي خيار احتياطي يعتمد على السحابة. تقتصر هذه المراجعة على ما توثقه الصفحة العامة فعليًا — فتطبيق Chatty-mini مشروع صغير طُوِّر بشكل مستقل، والكثير مما تتحقق منه مراجعة كاملة عادةً (عائلات النماذج المدعومة تحديدًا، حجم التخزين، السعر، وآراء المستخدمين حول الموثوقية) غير منشور في أي مكان آخر سوى صفحة المتجر نفسها.',
    metaDescription:
      'مراجعة Chatty-mini: تطبيق Android مصمم للعرض العمودي يشغّل نماذج GGUF محليًا لمحادثة خاصة دون اتصال بالإنترنت. ما تؤكده صفحة Google Play، وما لا تؤكده، ولمن يناسب هذا التطبيق.',
    twitterDescription:
      'مراجعة Chatty-mini 2026: تطبيق Android يشغّل نماذج GGUF على الجهاز لمحادثة خاصة ومحلية. استنادًا فقط إلى ما توثقه صفحته على Google Play.',
    audience:
      'مستخدمو Android الذين يقيّمون تطبيق محادثة ذكاء اصطناعي محلي صغير وطُوِّر بشكل مستقل، مقارنةً ببدائل موثقة بشكل أفضل مثل Loci وPrivate LLM وPocketPal AI.',
    readTime: '٧ دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة Chatty-mini',
    targetKeywords: [
      'مراجعة chatty-mini',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini ذكاء اصطناعي محلي',
      'chatty-mini خصوصية',
      'chatty-mini محادثة دون اتصال',
      'تطبيق محادثة gguf android',
      'مساحة عمل ذكاء اصطناعي محلي android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini تطبيق Android صغير طُوِّر بشكل مستقل من قِبل Fractal Media Infrastructure، يشغّل نماذج GGUF على الجهاز لتوفير محادثة خاصة ومحلية أولًا.** تضعه [صفحة Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) في موضع "مساعد خفيف مصمم للعرض العمودي" للكتابة الإبداعية دون اتصال، وتدوين الملاحظات، ومساحة محادثة خاصة. وبخلاف وصف المتجر هذا، لا توجد وثائق مستقلة (موقع إلكتروني للمطور، سجل تغييرات، أو مواصفات تقنية منشورة) تؤكد عائلات نماذج GGUF المدعومة، أو حجم التخزين، أو نموذج التسعير — لذا تلتزم هذه المراجعة بما تذكره الصفحة فعليًا، وتشير إلى كل ما لا تذكره.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق تطبيق Chatty-mini التثبيت لمحادثة ذكاء اصطناعي خاصة وغير متصلة على Android؟',
        answer:
          'فكّر في Chatty-mini فقط إذا كنت تريد تحديدًا تطبيق Android خفيفًا مصممًا للعرض العمودي يشغّل نماذج GGUF محليًا، وكنت مرتاحًا لتقييم تطبيق لا يملك وثائق عامة سوى صفحته على Google Play. أما إذا كنت تريد تطبيق ذكاء اصطناعي محلي بسياسة خصوصية منشورة، أو موقع إلكتروني للمطور، أو سجل حافل عبر عدة منصات، فإن Loci وPrivate LLM وPocketPal AI نقاط انطلاق موثقة بشكل أفضل.',
        bullets: [
          'Android فقط، وفقًا لصفحة Google Play — لا توجد نسخة مُدرَجة لـ iOS أو Mac أو Windows.',
          'يشغّل نماذج GGUF مباشرة على الجهاز، وفقًا لوصف الصفحة.',
          'المطوّر: Fractal Media Infrastructure (developer_url: [instance001.github.io](https://instance001.github.io)).',
          'معرّف الحزمة: io.instance001.chatmini.',
          'لا توجد معلومات عامة عن السعر أو عدد التقييمات أو عدد التنزيلات أو قائمة النماذج المدعومة بخلاف صفحة المتجر، وقت إعداد هذه المراجعة.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Chatty-mini', anchor: 'what-is-chatty-mini' },
      { label: 'ما تقوله الصفحة عن وظائفه', anchor: 'what-it-does' },
      { label: 'Android فقط: ما الذي يمكن توقعه', anchor: 'platform' },
      { label: 'ما لم تتمكن هذه المراجعة من التحقق منه', anchor: 'unverified' },
      { label: 'Chatty-mini مقابل بدائل موثقة بشكل أفضل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب تطبيق Chatty-mini', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب تطبيق Chatty-mini', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini تطبيق Android صغير طُوِّر بشكل مستقل من قِبل Fractal Media Infrastructure، يشغّل نماذج GGUF على الجهاز لمحادثة خاصة ومحلية، وموثّق فقط عبر صفحته على Google Play.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق Android تُثبّته للمحادثة مع نموذج ذكاء اصطناعي يعمل على هاتفك نفسه بدلًا من خادم — يصفه المطوّر بأنه خاص وقادر على العمل دون اتصال بالإنترنت، لكن لا يوجد، بخلاف صفحة المتجر، موقع إلكتروني منفصل أو سجل تغييرات أو مواصفات تقنية للتحقق من هذا الادعاء.',
          },
        ],
        items: [
          'تطبيق Android، معرّف الحزمة io.instance001.chatmini، والمطوّر المذكور هو Fractal Media Infrastructure.',
          'وصف Google Play: "Private, local-first AI chat. Run GGUF models offline on your Android device."',
          'موضّح، بحسب الصفحة، للكتابة الإبداعية دون اتصال، وتدوين الملاحظات، ومساحة محادثة خاصة.',
          'لا توجد نسخة مُدرَجة لـ iOS أو Mac أو Windows أو Linux — Android فقط.',
          'لا توجد معلومات عامة عن السعر أو عدد التنزيلات أو عدد التقييمات أو قائمة نماذج GGUF المدعومة بخلاف صفحة المتجر، وقت إعداد المراجعة.',
          'لم يُعثر على موقع إلكتروني للمطوّر يحتوي على وثائق إضافية، باستثناء حقل developer_url ([instance001.github.io](https://instance001.github.io)) المرتبط من صفحة Play Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة فقط إلى صفحة Chatty-mini العامة على Google Play (io.instance001.chatmini) حتى سبتمبر 2026. إنه تطبيق أصغر حجمًا طُوِّر بشكل مستقل — عامل كل ادعاء أدناه على أنه "بحسب الصفحة" ما لم يُذكر خلاف ذلك، وتحقق من التفاصيل الحالية على [صفحة Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) قبل التثبيت.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'ما هو Chatty-mini',
        content: [
          'Chatty-mini تطبيق Android منشور على Google Play بعنوان "Chatty-mini: Your Personal, Private AI Workspace" (معرّف الحزمة `io.instance001.chatmini`). تنسب الصفحة تطويره إلى Fractal Media Infrastructure، مع رابط مطوّر [instance001.github.io](https://instance001.github.io).',
          'يذكر الوصف القصير على Google Play: "Private, local-first AI chat. Run GGUF models offline on your Android device." ويضيف الوصف الأطول: "Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device"، موجّهًا لـ"an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..." — كان الوصف مقتطعًا عند هذه النقطة أثناء إعداد هذه المراجعة، لذا فإن ما يلي هذا الجزء من الجملة غير مُدرَج هنا.',
        ],
        note: 'GGUF صيغة ملفات تُستخدم لتعبئة وتشغيل نماذج لغوية مفتوحة الأوزان محليًا (عبر بيئات تشغيل مثل llama.cpp) بدلًا من استدعاء واجهة برمجة تطبيقات سحابية. وصف تطبيق لنفسه بأنه "يشغّل نماذج GGUF" يعني أن الاستدلال مصمم ليحدث على الجهاز، وليس أن نموذجًا محددًا مرفق مع التثبيت.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما تقوله الصفحة عن وظائفه',
        content: [
          'استنادًا بدقة إلى وصف Google Play، يتمحور Chatty-mini حول ثلاث حالات استخدام وقرار تصميم هيكلي واحد:',
        ],
        items: [
          '**استدلال محلي قائم على GGUF.** تذكر الصفحة أن التطبيق يشغّل "GGUF models offline on your Android device"، ما يعني تنفيذ النموذج على الجهاز بدلًا من استدعاء واجهة برمجة تطبيقات سحابية للمحادثة.',
          '**واجهة خفيفة مصممة للعرض العمودي.** تصف الصفحة التطبيق بأنه "lightweight, portrait-first"، ما يوحي بواجهة موجّهة للهاتف بدلًا من كونها مُحسَّنة للجهاز اللوحي أو سطح المكتب.',
          '**رفيق للكتابة الإبداعية.** مذكور كأحد ثلاث حالات استخدام نموذجية: "an offline companion for creative writing".',
          '**مساعد لتدوين الملاحظات.** مذكور كحالة استخدام ثانية: "a fast assistant for your notes".',
          '**مساحة محادثة خاصة.** مذكورة كحالة استخدام ثالثة: "a secure space for your..." — كانت الجملة مقتطعة عند هذه النقطة في الصفحة المصدرية، لذا فإن الكائن المحدد لهذه الجملة (مثل "لمحادثاتك" أو "لأفكارك") غير مؤكد هنا.',
        ],
        note: 'لا تضيف هذه القسم عمدًا أي قدرات تتجاوز ما تذكره الصفحة. فهي لا تؤكد عائلات نماذج GGUF المحددة المرفقة أو القابلة للتنزيل، ولا ما إذا كان الاستدلال يعمل دون اتصال بالكامل بعد التشغيل الأول أو يتطلب تنزيلًا أوليًا، ولا متطلبات الجهاز — لا شيء من ذلك منشور في المقتطف المتاح من الصفحة وقت إعداد المراجعة.',
      },
      platform: {
        id: 'platform',
        title: 'Android فقط: ما الذي يمكن توقعه',
        itemHeadings: true,
        columns: ['المنصة', 'ما تؤكده الصفحة', 'ما لم يتم تأكيده'],
        rows: [
          {
            'المنصة': 'Android',
            'ما تؤكده الصفحة': 'متاح على [Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) بمعرّف الحزمة io.instance001.chatmini. يشغّل نماذج GGUF على الجهاز، وفقًا للوصف.',
            'ما لم يتم تأكيده': 'أدنى إصدار من Android، أدنى مساحة RAM/تخزين، متطلبات معالج الرقاقة، أو ما إذا كان النموذج مرفقًا عند التثبيت أم يُنزَّل بشكل منفصل.',
          },
          {
            'المنصة': 'iOS / iPad',
            'ما تؤكده الصفحة': 'لم يُعثر على صفحة لنظام iOS أو iPadOS لتطبيق Chatty-mini وقت إعداد المراجعة.',
            'ما لم يتم تأكيده': 'ما إذا كانت نسخة iOS مخططًا لها. عامله على أنه حصري لـ Android إلى أن تظهر صفحة iOS رسمية.',
          },
          {
            'المنصة': 'Mac / Windows / Linux',
            'ما تؤكده الصفحة': 'لم يُعثر على صفحة لأنظمة سطح المكتب (Mac App Store أو Microsoft Store أو مثبِّت مستقل) لتطبيق Chatty-mini وقت إعداد المراجعة.',
            'ما لم يتم تأكيده': 'ما إذا كان دعم سطح المكتب موجودًا أو مخططًا له. عامله على أنه حصري لـ Android إلى أن يظهر إصدار رسمي لسطح المكتب.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: 'ما لم تتمكن هذه المراجعة من التحقق منه',
        content: [
          'تكشف المراجعة المسؤولة عن ثغراتها بوضوح مماثل لوضوح نتائجها. النقاط التالية هي فحوصات معيارية لمراجعة تطبيق نموذج لغوي محلي، لم يتسنَّ إتمامها بالنسبة لتطبيق Chatty-mini لأن المعلومات غير منشورة في أي مكان استطاعت هذه المراجعة الوصول إليه — سوى صفحة Google Play نفسها، التي لا تغطيها:',
        ],
        items: [
          '**السعر.** لا يُذكر هنا أي سعر أو مستوى اشتراك أو معلومات عن شراء داخل التطبيق، لأن شيئًا من ذلك لم يكن ظاهرًا في المقتطف المدروس من الصفحة. تحقق من السعر الحالي مباشرة على [صفحة Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) قبل التثبيت.',
          '**قائمة النماذج المدعومة.** تتحدث الصفحة عن "GGUF models" بشكل عام؛ ولا تسمّي عائلات نماذج محددة (مثل Llama أو Qwen أو Gemma أو Phi)، لذا لا تدّعي هذه المراجعة توافقًا مع أي نموذج مُسمّى.',
          '**أعداد التنزيلات والتقييمات.** غير مذكورة هنا — فهذه الأرقام تتغير باستمرار وينبغي التحقق منها مباشرة على صفحة المتجر بدلًا من الاعتماد على لقطة زمنية من المراجعة.',
          '**تفاصيل سياسة الخصوصية.** يصف الوصف القصير التطبيق بأنه "private, local-first"، لكن هذه المراجعة لم تتمكن من الوصول إلى سياسة خصوصية كاملة ومستقلة للتحقق من البيانات التي قد يجمعها التطبيق (كتحليلات الاستخدام أو تقارير الأعطال أو بيانات الحساب). تحقق من قسم "أمان البيانات" في صفحة Play Store قبل افتراض عدم وجود أي جمع للبيانات.',
          '**حجم التخزين ومتطلبات الجهاز.** حجم التطبيق، وحجم ملفات النموذج، وأدنى مساحة RAM غير منشورة في المقتطف المتاح من الصفحة لهذه المراجعة.',
          '**آراء المستخدمين المستقلة.** لا تستشهد هذه المراجعة بتقييمات المستخدمين، إذ إن عينة صغيرة من تقييمات Play Store ليست بديلًا موثوقًا عن الاختبار العملي، ولم تُجرِ PromptQuorum أي اختبار عملي لتطبيق Chatty-mini لهذا المقال.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini مقابل بدائل موثقة بشكل أفضل',
        itemHeadings: true,
        columns: ['التطبيق', 'مستوى التوثيق', 'المنصات', 'مرونة النماذج'],
        rows: [
          {
            'التطبيق': 'Chatty-mini',
            'مستوى التوثيق': 'صفحة Google Play فقط؛ لم يُعثر على موقع إلكتروني مستقل للمطوّر، ولا سجل تغييرات، ولا مواصفات تقنية',
            'المنصات': 'Android فقط، وفقًا لصفحته على Play Store',
            'مرونة النماذج': 'يشغّل نماذج GGUF وفقًا للصفحة؛ النماذج المدعومة تحديدًا غير مذكورة',
          },
          {
            'التطبيق': 'Loci',
            'مستوى التوثيق': 'موقع إلكتروني للمطوّر، وملصقات خصوصية على App Store وPlay Store، وصفحات دعم نشطة',
            'المنصات': 'iPhone/iPad/Android/Mac/Windows (5 منصات)',
            'مرونة النماذج': 'مكتبة مُنسَّقة (~10 نماذج: Gemma وQwen وLlama وPhi)؛ لا يمكن استيراد ملفات GGUF مخصصة',
          },
          {
            'التطبيق': 'Private LLM',
            'مستوى التوثيق': 'موقع إلكتروني للمطوّر مع مكتبة نماذج وأسعار منشورة',
            'المنصات': 'iPhone/iPad/Mac (منتجات Apple فقط)',
            'مرونة النماذج': 'أكثر من 140 نموذجًا، وصيغتا التكميم OmniQuant وGPTQ',
          },
          {
            'التطبيق': 'PocketPal AI',
            'مستوى التوثيق': 'مستودع مفتوح المصدر على GitHub؛ الكود والمشكلات (issues) مرئية للعامة',
            'المنصات': 'iPhone/iPad، مع دعم جزئي لـ Android',
            'مرونة النماذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو مصادر أخرى',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب تطبيق Chatty-mini',
        items: [
          '**مستخدمو Android الفضوليون تحديدًا حول تطبيق محادثة GGUF خفيف ومصمم للعرض العمودي.** إذا كان وصف التطبيق يطابق تمامًا ما تريده — واجهة صغيرة موجّهة للهاتف لمحادثة GGUF محلية — فقد يستحق الأمر تجربة تثبيت منخفضة المخاطر، إذ يبدو التطبيق مجانيًا للتنزيل بحسب الصفحة (لم يُذكر سعر في المقتطف المدروس؛ تأكد قبل التثبيت).',
          '**المستخدمون المرتاحون لتقييم تطبيق صغير طُوِّر بشكل مستقل بأنفسهم.** لا يملك Chatty-mini عمق توثيق مماثلًا لـ Loci وPrivate LLM وPocketPal AI. إذا كنت لا تمانع في قراءة إعدادات التطبيق وقسم "أمان البيانات" في Play Store بنفسك بدلًا من الاعتماد على موقع إلكتروني للمطوّر، فأنت تنتمي إلى فئة مستخدمين أقل مخاطرة.',
          '**المستخدمون الذين يفهمون GGUF مسبقًا ويريدون رفيقًا بسيطًا لتدوين الملاحظات أو الكتابة الإبداعية.** حالات الاستخدام المذكورة في الصفحة (الكتابة الإبداعية، الملاحظات، المحادثة الخاصة) توحي بأداة عرضية أحادية الغرض بدلًا من منصة كاملة لإدارة النماذج.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب تطبيق Chatty-mini',
        items: [
          '**المستخدمون الذين يحتاجون إلى دعم iOS أو Mac أو Windows.** لم يُعثر على صفحة لهذه المنصات؛ يبدو Chatty-mini حصريًا لـ Android.',
          '**المستخدمون الذين يحتاجون إلى سياسة خصوصية موثّقة ومُتحقَّق منها قبل الوثوق بمحادثات خاصة لتطبيق ما.** لم تتمكن هذه المراجعة من التحقق من سياسة خصوصية كاملة تتجاوز ادعاء "private, local-first" في الوصف القصير — تحقق بنفسك من قسم "أمان البيانات" في Play Store قبل استخدامه لمحتوى حساس.',
          '**المستخدمون الذين يريدون التحكم في النموذج المحدد الذي يعالج محادثاتهم.** لا تسمّي الصفحة عائلات النماذج المدعومة، لذا ينبغي على المستخدمين المهتمين بتشغيل نموذج معين (مثل نسخة محددة من Llama أو Qwen) اختيار تطبيق مثل PocketPal AI أو Private LLM يوثّق هذا الأمر.',
          '**المستخدمون الذين يريدون سجلًا حافلًا موثوقًا.** بما أنه لم يُعثر على تقييمات مستقلة أو سجل تغييرات أو بيانات استخدام طويلة الأمد لهذه المراجعة، فإن المستخدمين الذين يفضلون تطبيقًا ذا تاريخ عام راسخ ينبغي أن ينظروا بدلًا من ذلك إلى Loci أو Private LLM أو PocketPal AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Chatty-mini؟',
            a: 'Chatty-mini تطبيق Android منشور على Google Play (معرّف الحزمة io.instance001.chatmini) من قِبل المطوّر Fractal Media Infrastructure. تصفه صفحته بأنه "private, local-first AI chat" يشغّل نماذج GGUF دون اتصال بالإنترنت على الجهاز.',
          },
          {
            q: 'هل Chatty-mini مجاني؟',
            a: 'لم تتمكن هذه المراجعة من تأكيد السعر الحالي من المقتطف المدروس من الصفحة. تحقق مباشرة من [صفحة Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini)، إذ يمكن أن يتغير السعر والمشتريات داخل التطبيق ولا يمكن الاستشهاد بها بشكل موثوق من مراجعة ثابتة.',
          },
          {
            q: 'هل يعمل Chatty-mini دون اتصال بالإنترنت بالكامل؟',
            a: 'يذكر وصف Google Play أن التطبيق يشغّل "GGUF models offline on your Android device"، ما يعني أن الاستدلال على الجهاز هو الهدف التصميمي. لم تختبر هذه المراجعة السلوك دون اتصال بشكل مستقل (مثلًا في وضع الطيران)، لذا عامل قدرة "العمل دون اتصال" على أنها ادعاء من المطوّر، وليست نتيجة مُتحقَّقة بشكل مستقل.',
          },
          {
            q: 'ما هي نماذج الذكاء الاصطناعي التي يدعمها Chatty-mini؟',
            a: 'تتحدث الصفحة عن "GGUF models" بشكل عام لكنها لا تسمّي عائلات نماذج مدعومة محددة في مقتطف الوصف المتاح لهذه المراجعة. إذا كنت بحاجة إلى نموذج محدد، تحقق من التوافق داخل التطبيق نفسه، أو اختر تطبيقًا مثل PocketPal AI أو Private LLM ينشر قائمة النماذج المدعومة لديه.',
          },
          {
            q: 'هل Chatty-mini متاح على iPhone أو iPad؟',
            a: 'لم يُعثر على صفحة لنظام iOS أو iPadOS لتطبيق Chatty-mini وقت إعداد المراجعة. يبدو حصريًا لـ Android، استنادًا إلى صفحة Google Play المتاحة.',
          },
          {
            q: 'من يطوّر Chatty-mini؟',
            a: 'تنسب صفحة Google Play تطوير التطبيق إلى Fractal Media Infrastructure، مع رابط مطوّر [instance001.github.io](https://instance001.github.io). وبخلاف هذه النسبة المذكورة في الصفحة، لم تعثر هذه المراجعة على موقع إلكتروني منفصل للشركة أو سجل عام للمطوّر.',
          },
          {
            q: 'هل Chatty-mini آمن للمحادثات الخاصة؟',
            a: 'يصف الوصف القصير التطبيق بأنه "private, local-first"، لكن هذه المراجعة لم تتمكن من الوصول إلى سياسة خصوصية كاملة ومستقلة للتحقق من البيانات التي تُجمَع، إن وُجدت. قبل أن تعهد للتطبيق بمحتوى حساس، تحقق من قسم "أمان البيانات" في صفحته على Google Play، واقرأ سياسة الخصوصية داخل التطبيق، فقد تختلف عن الوصف التسويقي.',
          },
          {
            q: 'كيف يقارن Chatty-mini بتطبيقي Loci أو Private LLM؟',
            a: 'ينشر كل من Loci وPrivate LLM موقعًا إلكترونيًا للمطوّر ومكتبة نماذج، ويضيف Loci ملصق خصوصية App Store — بينما لا يملك Chatty-mini توثيقًا عامًا مماثلًا متاحًا وقت إعداد المراجعة. كما يدعم Loci خمس منصات (iPhone وiPad وAndroid وMac وWindows) مقابل حصر صفحة Chatty-mini في Android فقط. إذا كان عمق التوثيق والدعم عبر منصات متعددة يهمك، فإن Loci أو Private LLM نقطتا انطلاق موثقتان بشكل أفضل؛ راجع جدول المقارنة أعلاه.',
          },
          {
            q: 'هل يتطلب Chatty-mini تنزيل نموذج بعد التثبيت؟',
            a: 'هذا الأمر غير مؤكد في مقتطف الصفحة المتاح لهذه المراجعة. عادةً ما تُرفق التطبيقات التي تشغّل نماذج GGUF نموذجًا صغيرًا أو تتطلب تنزيلًا أوليًا؛ ولا تحدد صفحة Chatty-mini أيًّا من هذين النهجين يتبعه. تحقق من مسار الإعداد الأولي داخل التطبيق بعد التثبيت للتأكد.',
          },
          {
            q: 'لماذا تتحفظ هذه المراجعة كثيرًا بشأن Chatty-mini مقارنةً بمراجعات تطبيقات أخرى على هذا الموقع؟',
            a: 'لأن المادة المصدرية المتاحة أقل ثراءً. Chatty-mini تطبيق أصغر حجمًا طُوِّر بشكل مستقل، ووثيقته العامة الوحيدة وقت إعداد المراجعة هي صفحته على Google Play — لا يوجد موقع إلكتروني للمطوّر يتضمن مواصفات تقنية، ولا سجل تغييرات منشور، ولا اختبار عملي مستقل أجرته PromptQuorum. تنقل هذه المراجعة فقط ما تذكره الصفحة، وتوضح بصراحة ما يظل غير مؤكد، بدلًا من ملء الفجوات بافتراضات.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Chatty-mini تطبيق Android صغير طُوِّر بشكل مستقل، يتمحور حول فكرة واضحة ومحدودة: تشغيل نماذج GGUF على الجهاز لمحادثة خاصة ومحلية أولًا، في واجهة خفيفة مصممة للعرض العمودي وموجّهة للكتابة الإبداعية وتدوين الملاحظات ومساحة محادثة خاصة. هذه الفكرة قابلة للتصديق ومتسقة مع طريقة عمل الاستدلال المحلي القائم على GGUF في تطبيقات Android أخرى. ما يفصل هذه المراجعة عن التأييد الكامل ليس الفكرة، بل التوثيق: فوقت إعداد المراجعة، المصدر العام الوحيد لتطبيق Chatty-mini هو صفحته على Google Play، دون موقع إلكتروني مستقل للمطوّر، أو قائمة نماذج منشورة، أو تفاصيل سياسة خصوصية، أو سعر مؤكد يتجاوز تلك الصفحة. قد يجد المستخدمون الراغبون في تجربة تطبيق محادثة صغير قائم على GGUF وحصري لـ Android بشروطه الخاصة — والمرتاحون للتحقق بأنفسهم من قسم "أمان البيانات" في Play Store وإعدادات التطبيق — أن Chatty-mini يستحق تجربة منخفضة المخاطر. أما المستخدمون الذين يحتاجون إلى دعم عبر منصات متعددة، أو مكتبة نماذج موثقة، أو أسعار مُتحقَّق منها، أو سجل حافل راسخ، فينبغي أن يبدأوا بدلًا من ذلك مع Loci أو Private LLM أو PocketPal AI، التي تنشر جميعها توثيقًا عامًا أكثر شمولًا بكثير.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Chatty-mini على Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — الصفحة العامة الوحيدة المستخدمة لهذه المراجعة: العنوان، ونص الوصفين القصير والطويل، ونسبة التطوير.',
          '[Loci على App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — مُشار إليه للمقارنة؛ ملصق الخصوصية وتوفر المنصات.',
          '[الموقع الرسمي لـ Private LLM](https://privatellm.app/en) — مُشار إليه للمقارنة؛ الأسعار ومكتبة النماذج ودعم المنصات.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Loci AI: ذكاء اصطناعي دون اتصال لـ iPhone وAndroid وiPad وMac وWindows](/power-local-llm/loci-ai-review-offline-local-ai) — بديل موثق بشكل أفضل عبر منصات متعددة، مع ملصق خصوصية منشور.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لأندرويد في 2026](/power-local-llm/best-local-llm-apps-android-2026) — قائمة بتطبيقات Android، تشمل MLC Chat وMaid وLayla وOllama عبر Termux وPocketPal AI.',
          '[أفضل نماذج LLM للأجهزة المحمولة في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — المقال المكمّل على مستوى النماذج، الذي يوضح أي النماذج المتوافقة مع GGUF تناسب فعليًا الهاتف.',
          '[تشغيل نموذج لغوي محلي على جهازك اللوحي: iPad وAndroid](/power-local-llm/run-ai-on-tablet-ipad-android) — دليل مركّز على الأجهزة للاستدلال المحلي والبعيد على الأجهزة اللوحية.',
          '[الدليل الكامل لبرمجيات النماذج اللغوية المحلية](/power-local-llm/local-llm-software-directory-2026) — دليل أوسع لأدوات النماذج اللغوية المحلية عبر جميع المنصات، بما في ذلك تطبيقات أصغر وأقل توثيقًا.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Chatty-mini (2026): محادثة GGUF خاصة ومحلية على Android',
      description:
        'مراجعة Chatty-mini: تطبيق Android مصمم للعرض العمودي يشغّل نماذج GGUF محليًا لمحادثة خاصة دون اتصال بالإنترنت. ما تؤكده صفحة Google Play، وما لا تؤكده، ولمن يناسب هذا التطبيق.',
      url: 'https://promptquorum.com/ar/power-local-llm/chatty-mini-review',
      inLanguage: 'ar',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو Android الذين يقيّمون تطبيقات محادثة ذكاء اصطناعي محلية قائمة على GGUF' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة Chatty-mini (2026)', item: 'https://promptquorum.com/ar/power-local-llm/chatty-mini-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chatty-mini-review-hero-ko.webp',
    title: 'Chatty-mini 리뷰(2026): Android용 프라이빗 로컬 GGUF 채팅',
    seoTitle: 'Chatty-mini 리뷰 2026: Android 로컬 GGUF 채팅 앱',
    intro:
      'Fractal Media Infrastructure가 개발한 Chatty-mini는 Google Play에 "Chatty-mini: Your Personal, Private AI Workspace"라는 이름으로 등록된 앱으로, 세로 화면 중심으로 설계되어 GGUF 모델을 기기에서 직접 실행합니다. [Google Play 등록 정보](https://play.google.com/store/apps/details?id=io.instance001.chatmini)는 이 앱을 오프라인 창작 글쓰기, 메모 작성, 프라이빗 채팅 공간을 위한 "프라이빗하고 로컬 우선인 AI 채팅"으로 설명하며, 클라우드 폴백에 대한 언급은 없습니다. 본 리뷰는 공개된 등록 정보가 실제로 문서화한 내용만을 다룹니다 — Chatty-mini는 소규모의 독립 개발 프로젝트이며, 일반적인 리뷰라면 확인했을 많은 항목(구체적으로 지원되는 모델 계열, 저장 공간 사용량, 가격, 신뢰성에 대한 사용자 피드백 등)이 스토어 페이지 외에는 어디에도 공개되어 있지 않습니다.',
    metaDescription:
      'Chatty-mini 리뷰: GGUF 모델을 기기에서 로컬로 실행해 프라이빗하고 오프라인 채팅을 제공하는 세로 화면 중심 Android 앱. Google Play 등록 정보가 확인해 주는 것, 확인해 주지 않는 것, 그리고 어떤 사용자에게 적합한지 살펴봅니다.',
    twitterDescription:
      'Chatty-mini 2026 리뷰: GGUF 모델을 기기에서 실행해 프라이빗하고 로컬 중심의 채팅을 제공하는 Android 앱. Google Play 등록 정보에 근거해서만 작성했습니다.',
    audience:
      'Loci, Private LLM, PocketPal AI처럼 문서화가 잘 되어 있는 대안과 비교하며, 소규모 독립 개발 로컬 AI 채팅 앱을 검토 중인 Android 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Chatty-mini 리뷰',
    targetKeywords: [
      'chatty-mini 리뷰',
      'chatty-mini android',
      'chatty-mini gguf',
      'chatty-mini 로컬 ai',
      'chatty-mini 프라이빗 ai',
      'chatty-mini 오프라인 채팅',
      'gguf 채팅 앱 android',
      '로컬 ai 워크스페이스 android',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Chatty-mini는 Fractal Media Infrastructure가 개발한 소규모 독립 Android 앱으로, GGUF 모델을 기기에서 실행하여 프라이빗하고 로컬 우선인 채팅을 제공합니다.** [Google Play 등록 정보](https://play.google.com/store/apps/details?id=io.instance001.chatmini)는 이 앱을 오프라인 창작 글쓰기, 메모 작성, 프라이빗 채팅 공간을 위한 "가볍고 세로 화면 중심의 어시스턴트"로 소개합니다. 이 스토어 설명 외에는 어떤 GGUF 모델 계열을 지원하는지, 저장 공간 사용량이 얼마나 되는지, 어떤 가격 모델을 채택하고 있는지를 확인할 수 있는 독립적인 문서(개발자 웹사이트, 변경 이력, 공개된 기술 사양 등)가 존재하지 않습니다. 따라서 본 리뷰는 등록 정보가 실제로 언급하는 내용만을 다루며, 언급하지 않은 부분은 모두 명시합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Android에서 프라이빗한 오프라인 AI 채팅을 위해 Chatty-mini를 설치할 가치가 있는가?',
        answer:
          'GGUF 모델을 로컬에서 실행하는 가볍고 세로 화면 중심의 Android 앱을 특별히 원하고, Google Play 등록 정보 외에 공개 문서가 없는 앱을 직접 평가하는 데 거부감이 없다면 Chatty-mini를 고려해 볼 만합니다. 공개된 개인정보처리방침, 개발자 웹사이트, 여러 플랫폼에 걸친 실적을 갖춘 로컬 AI 앱을 원한다면 Loci, Private LLM, PocketPal AI가 더 잘 문서화된 출발점입니다.',
        bullets: [
          'Google Play 등록 정보에 따르면 Android 전용이며 — iOS, Mac, Windows 버전은 등록되어 있지 않습니다.',
          '등록 정보 설명에 따르면 GGUF 모델을 기기에서 직접 실행합니다.',
          '개발자: Fractal Media Infrastructure(developer_url: [instance001.github.io](https://instance001.github.io)).',
          '패키지 ID: io.instance001.chatmini.',
          '본 리뷰 시점 기준으로, 스토어 페이지 외에는 가격, 평점 수, 다운로드 수, 지원 모델 목록에 대한 공개 정보가 없습니다.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Chatty-mini란 무엇인가', anchor: 'what-is-chatty-mini' },
      { label: '등록 정보가 설명하는 기능', anchor: 'what-it-does' },
      { label: 'Android 전용: 무엇을 기대할 수 있는가', anchor: 'platform' },
      { label: '본 리뷰가 확인하지 못한 내용', anchor: 'unverified' },
      { label: 'Chatty-mini와 더 잘 문서화된 대안의 비교', anchor: 'vs-alternatives' },
      { label: 'Chatty-mini를 고려해야 할 사용자', anchor: 'who-should-use' },
      { label: 'Chatty-mini를 사용하지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chatty-mini는 Fractal Media Infrastructure가 개발한 소규모 독립 Android 앱으로, GGUF 모델을 기기에서 실행하여 프라이빗하고 로컬 중심의 채팅을 제공하며, Google Play 등록 정보만으로 문서화되어 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '서버가 아닌 자신의 휴대폰에서 실행되는 AI 모델과 대화할 수 있게 해 주는 Android 앱입니다. 개발자는 이 앱을 프라이빗하고 오프라인에서도 사용 가능하다고 설명하지만, 스토어 페이지 외에는 별도의 웹사이트나 변경 이력, 기술 사양 문서가 없어 이 주장을 확인할 방법이 없습니다.',
          },
        ],
        items: [
          'Android 앱, 패키지 ID io.instance001.chatmini, 등록 정보에 따른 개발자는 Fractal Media Infrastructure입니다.',
          'Google Play 설명: "Private, local-first AI chat. Run GGUF models offline on your Android device."',
          '등록 정보에 따르면 오프라인 창작 글쓰기, 메모 작성, 프라이빗 채팅 공간을 위해 포지셔닝되어 있습니다.',
          'iOS, Mac, Windows, Linux 버전은 등록되어 있지 않습니다 — Android 전용입니다.',
          '리뷰 시점 기준으로, 스토어 페이지 외에는 가격, 다운로드 수, 평점 수, 지원 GGUF 모델 목록에 대한 공개 정보가 없습니다.',
          'Play 스토어 등록 정보에 연결된 developer_url 필드([instance001.github.io](https://instance001.github.io)) 외에는 추가 문서를 제공하는 개발자 웹사이트를 찾지 못했습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '본 리뷰는 2026년 9월 기준 Chatty-mini(io.instance001.chatmini)의 공개 Google Play 등록 정보에만 근거합니다. 소규모의 독립 개발 앱이므로, 별도로 명시하지 않는 한 아래의 모든 내용을 "등록 정보에 따르면"으로 간주하시고, 설치 전 [Google Play 페이지](https://play.google.com/store/apps/details?id=io.instance001.chatmini)에서 최신 정보를 확인하시기 바랍니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-chatty-mini',
        title: 'Chatty-mini란 무엇인가',
        content: [
          'Chatty-mini는 Google Play에 "Chatty-mini: Your Personal, Private AI Workspace"라는 제목으로 게시된 Android 앱입니다(패키지 ID `io.instance001.chatmini`). 등록 정보는 개발자로 Fractal Media Infrastructure를 명시하며, 개발자 URL은 [instance001.github.io](https://instance001.github.io)입니다.',
          'Google Play의 짧은 설명은 다음과 같습니다: "Private, local-first AI chat. Run GGUF models offline on your Android device." 긴 설명은 여기에 다음을 추가합니다: "Chatty-mini is a lightweight, portrait-first assistant designed to run GGUF models directly on your device", 그리고 "an offline companion for creative writing, a fast assistant for your notes, or a secure space for your..."를 목적으로 한다고 밝힙니다 — 본 리뷰 조사 시점에 설명이 이 지점에서 잘려 있었기 때문에, 이 문장 조각 이후의 내용은 여기에 반영되지 않았습니다.',
        ],
        note: 'GGUF는 클라우드 API를 호출하는 대신 오픈 웨이트 언어 모델을 패키징하여(llama.cpp와 같은 런타임을 통해) 로컬에서 실행하는 데 사용되는 파일 형식입니다. "GGUF 모델을 실행한다"고 설명하는 앱은 추론이 기기에서 이루어지도록 설계되었다는 의미이며, 특정 모델이 설치 시 함께 제공된다는 의미는 아닙니다.',
      },
      whatItDoes: {
        id: 'what-it-does',
        title: '등록 정보가 설명하는 기능',
        content: [
          'Google Play 설명에만 엄격히 근거할 때, Chatty-mini는 세 가지 사용 사례와 하나의 구조적 설계 선택을 중심으로 포지셔닝되어 있습니다.',
        ],
        items: [
          '**로컬, GGUF 기반 추론.** 등록 정보는 앱이 기기에서 "GGUF models offline on your Android device"를 실행한다고 명시하며, 이는 채팅을 위해 클라우드 API를 호출하는 대신 기기에서 모델을 실행함을 시사합니다.',
          '**가볍고 세로 화면 중심의 인터페이스.** 등록 정보는 앱을 "lightweight, portrait-first"로 설명하며, 태블릿이나 데스크톱에 최적화된 레이아웃이 아니라 스마트폰 중심의 UI임을 시사합니다.',
          '**창작 글쓰기 파트너.** 세 가지 예시 사용 사례 중 하나로 "an offline companion for creative writing"이 언급됩니다.',
          '**메모 어시스턴트.** 두 번째 예시 사용 사례로 "a fast assistant for your notes"가 언급됩니다.',
          '**프라이빗 채팅 공간.** 세 번째 예시 사용 사례로 "a secure space for your..."가 언급되지만, 본 리뷰 조사 시점에 이 문장이 이 지점에서 잘려 있었기 때문에, 이 문장의 구체적인 목적어(예: "당신의 대화를 위한", "당신의 생각을 위한" 등)는 여기서 확인할 수 없습니다.',
        ],
        note: '본 섹션은 등록 정보가 명시하는 범위를 넘어서는 기능을 의도적으로 추가하지 않습니다. 구체적으로 어떤 GGUF 모델 계열이 번들되어 있거나 다운로드 가능한지, 최초 실행 이후 완전히 오프라인으로 동작하는지 아니면 초기 다운로드가 필요한지, 어떤 기기 요구 사항이 적용되는지는 본 리뷰 시점에 확인 가능한 등록 정보 발췌 내용에 공개되어 있지 않습니다.',
      },
      platform: {
        id: 'platform',
        title: 'Android 전용: 무엇을 기대할 수 있는가',
        itemHeadings: true,
        columns: ['플랫폼', '등록 정보가 확인해 주는 내용', '확인되지 않은 내용'],
        rows: [
          {
            '플랫폼': 'Android',
            '등록 정보가 확인해 주는 내용': '[Google Play](https://play.google.com/store/apps/details?id=io.instance001.chatmini)에서 패키지 ID io.instance001.chatmini로 제공됩니다. 설명에 따르면 GGUF 모델을 기기에서 실행합니다.',
            '확인되지 않은 내용': '최소 Android OS 버전, 최소 RAM/저장 공간, 칩셋 요구 사항, 그리고 모델이 설치 시 번들되는지 별도로 다운로드되는지 여부.',
          },
          {
            '플랫폼': 'iOS / iPad',
            '등록 정보가 확인해 주는 내용': '리뷰 시점 기준으로 Chatty-mini의 iOS 또는 iPadOS 등록 정보는 발견되지 않았습니다.',
            '확인되지 않은 내용': 'iOS 버전이 계획되어 있는지 여부. 공식 iOS 등록 정보가 나타나기 전까지는 Android 전용으로 간주해야 합니다.',
          },
          {
            '플랫폼': 'Mac / Windows / Linux',
            '등록 정보가 확인해 주는 내용': '리뷰 시점 기준으로 Chatty-mini의 데스크톱 등록 정보(Mac App Store, Microsoft Store, 독립 설치 프로그램 등)는 발견되지 않았습니다.',
            '확인되지 않은 내용': '데스크톱 지원이 존재하는지 또는 계획되어 있는지 여부. 공식 데스크톱 버전이 나타나기 전까지는 Android 전용으로 간주해야 합니다.',
          },
        ],
      },
      unverified: {
        id: 'unverified',
        title: '본 리뷰가 확인하지 못한 내용',
        content: [
          '책임 있는 리뷰는 결과만큼이나 자신의 한계도 명확히 밝혀야 합니다. 다음 항목들은 로컬 LLM 앱 리뷰에서 일반적으로 확인하는 표준 항목이지만, 본 리뷰가 찾을 수 있는 범위 내에서는 정보가 어디에도 공개되어 있지 않아 Chatty-mini에 대해서는 확인할 수 없었습니다 — 유일하게 존재하는 Google Play 등록 정보 자체도 이를 다루지 않습니다.',
        ],
        items: [
          '**가격.** 조사한 등록 정보 발췌 내용에 가격, 구독 등급, 앱 내 구매 정보가 보이지 않았기 때문에 여기서는 인용하지 않았습니다. 설치 전 [Google Play 등록 정보](https://play.google.com/store/apps/details?id=io.instance001.chatmini)에서 현재 가격을 직접 확인하시기 바랍니다.',
          '**지원 모델 목록.** 등록 정보는 "GGUF models"를 일반적으로 언급할 뿐, 구체적인 모델 계열(예: Llama, Qwen, Gemma, Phi)을 명시하지 않습니다. 따라서 본 리뷰는 특정 모델과의 호환성을 주장하지 않습니다.',
          '**다운로드 수 및 평점 수.** 여기서는 인용하지 않습니다 — 이 수치들은 지속적으로 변동하므로 리뷰 시점의 스냅샷에 의존하기보다는 스토어 페이지에서 실시간으로 확인해야 합니다.',
          '**개인정보처리방침 세부 내용.** 짧은 설명은 이 앱을 "private, local-first"라고 부르지만, 본 리뷰는 앱이 수집할 수 있는 데이터(분석 데이터, 충돌 보고서, 계정 데이터 등)를 확인할 수 있는 완전하고 독립적인 개인정보처리방침 문서에 접근할 수 없었습니다. 데이터 수집이 전혀 없다고 가정하기 전에 Play 스토어 등록 정보의 "데이터 안전" 섹션을 확인하시기 바랍니다.',
          '**저장 공간 사용량 및 기기 요구 사항.** 앱 용량, 모델 파일 크기, 최소 RAM은 본 리뷰에서 확인 가능한 등록 정보 발췌 내용에 공개되어 있지 않습니다.',
          '**독립적인 사용자 피드백.** 소수의 Play 스토어 리뷰는 실제 사용 테스트를 신뢰할 수 있게 대체할 수 없으며, PromptQuorum은 본 기사를 위해 Chatty-mini에 대한 실제 사용 테스트를 진행하지 않았으므로 본 리뷰는 사용자 리뷰를 인용하지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Chatty-mini와 더 잘 문서화된 대안의 비교',
        itemHeadings: true,
        columns: ['앱', '문서화 수준', '지원 플랫폼', '모델 유연성'],
        rows: [
          {
            '앱': 'Chatty-mini',
            '문서화 수준': 'Google Play 등록 정보만 존재; 독립적인 개발자 사이트, 변경 이력, 사양 문서는 발견되지 않음',
            '지원 플랫폼': 'Play 스토어 등록 정보에 따르면 Android 전용',
            '모델 유연성': '등록 정보에 따르면 GGUF 모델을 실행; 구체적으로 지원되는 모델은 명시되지 않음',
          },
          {
            '앱': 'Loci',
            '문서화 수준': '개발자 웹사이트, App Store 및 Play Store 개인정보 보호 라벨, 활발히 운영되는 지원 페이지',
            '지원 플랫폼': 'iPhone/iPad/Android/Mac/Windows(5개 플랫폼)',
            '모델 유연성': '엄선된 라이브러리(약 10개 모델: Gemma, Qwen, Llama, Phi); 사용자 지정 GGUF 파일 가져오기 불가',
          },
          {
            '앱': 'Private LLM',
            '문서화 수준': '모델 라이브러리와 가격이 공개된 개발자 웹사이트',
            '지원 플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': '140개 이상의 모델, OmniQuant 및 GPTQ 양자화 형식 지원',
          },
          {
            '앱': 'PocketPal AI',
            '문서화 수준': 'GitHub의 오픈소스 저장소; 코드와 이슈를 공개적으로 확인 가능',
            '지원 플랫폼': 'iPhone/iPad, 일부 Android 지원',
            '모델 유연성': '사용자가 Hugging Face 등에서 확보한 모든 GGUF 파일 지원',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Chatty-mini를 고려해야 할 사용자',
        items: [
          '**가볍고 세로 화면 중심의 GGUF 채팅 앱에 특별히 관심이 있는 Android 사용자.** 앱 설명이 원하는 바와 정확히 일치한다면 — 로컬 GGUF 채팅을 위한 소규모의 스마트폰 중심 인터페이스 — 등록 정보에 따르면 무료로 다운로드할 수 있는 것으로 보이므로(조사한 발췌 내용에는 가격이 명시되어 있지 않아 설치 전 확인 필요) 저위험 시범 설치를 고려해 볼 만합니다.',
          '**소규모의 독립 개발 앱을 스스로 평가하는 데 거부감이 없는 사용자.** Chatty-mini는 Loci, Private LLM, PocketPal AI만큼의 문서화 깊이를 갖추고 있지 않습니다. 개발자 웹사이트에 의존하기보다 앱 내 설정과 Play 스토어의 "데이터 안전" 섹션을 직접 읽는 데 거부감이 없다면 상대적으로 위험이 낮은 사용자 유형에 해당합니다.',
          '**이미 GGUF를 이해하고 있으며 최소한의 메모 작성 또는 창작 글쓰기 파트너를 원하는 사용자.** 등록 정보에 명시된 사용 사례(창작 글쓰기, 메모 작성, 프라이빗 채팅)는 완전한 모델 관리 플랫폼이라기보다 캐주얼하고 단일 목적의 도구임을 시사합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Chatty-mini를 사용하지 말아야 할 사용자',
        items: [
          '**iOS, Mac, Windows 지원이 필요한 사용자.** 해당 플랫폼에 대한 등록 정보는 발견되지 않았으며, Chatty-mini는 Android 전용으로 보입니다.',
          '**프라이빗한 대화를 앱에 맡기기 전에 검증되고 문서화된 개인정보처리방침이 필요한 사용자.** 본 리뷰는 짧은 설명에 담긴 "private, local-first"라는 주장 이상의 완전한 개인정보처리방침을 확인할 수 없었습니다 — 민감한 콘텐츠에 사용하기 전에 Play 스토어의 "데이터 안전" 섹션을 직접 확인하시기 바랍니다.',
          '**채팅을 처리하는 특정 모델을 직접 제어하고 싶은 사용자.** 등록 정보에는 지원되는 모델 계열이 명시되어 있지 않으므로, 특정 모델(예: 특정 Llama 또는 Qwen 변형)을 실행하는 것을 중요하게 여기는 사용자는 이를 문서화하는 PocketPal AI나 Private LLM 같은 앱을 선택해야 합니다.',
          '**검증된 실적을 원하는 사용자.** 본 리뷰에서는 독립적인 리뷰, 변경 이력, 장기 사용 데이터를 찾을 수 없었으므로, 확립된 공개 이력을 갖춘 앱을 선호하는 사용자는 대신 Loci, Private LLM, PocketPal AI를 고려해야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Chatty-mini란 무엇인가요?',
            a: 'Chatty-mini는 개발자 Fractal Media Infrastructure가 Google Play에 게시한 Android 앱입니다(패키지 ID io.instance001.chatmini). 등록 정보는 이 앱을 기기에서 오프라인으로 GGUF 모델을 실행하는 "private, local-first AI chat"으로 설명합니다.',
          },
          {
            q: 'Chatty-mini는 무료인가요?',
            a: '본 리뷰는 조사한 등록 정보 발췌 내용으로부터 현재 가격을 확인할 수 없었습니다. 가격과 앱 내 구매는 변경될 수 있으며 정적인 리뷰에서 신뢰성 있게 인용할 수 없으므로 [Google Play 등록 정보](https://play.google.com/store/apps/details?id=io.instance001.chatmini)를 직접 확인하시기 바랍니다.',
          },
          {
            q: 'Chatty-mini는 완전히 오프라인으로 작동하나요?',
            a: 'Google Play 설명은 앱이 기기에서 "GGUF models offline on your Android device"를 실행한다고 명시하며, 이는 기기 내 추론이 설계 목표임을 시사합니다. 본 리뷰는 (예: 비행기 모드에서의) 오프라인 동작을 독립적으로 테스트하지 않았으므로, "오프라인 지원"은 독립적으로 검증된 결과가 아니라 개발자의 주장으로 받아들여야 합니다.',
          },
          {
            q: 'Chatty-mini는 어떤 AI 모델을 지원하나요?',
            a: '등록 정보는 "GGUF models"를 일반적으로 언급할 뿐, 본 리뷰에서 확인 가능한 설명 발췌 내용에는 구체적으로 지원되는 모델 계열이 명시되어 있지 않습니다. 특정 모델이 필요하다면 앱 내에서 직접 호환성을 확인하거나, 지원 모델 목록을 공개하는 PocketPal AI나 Private LLM 같은 앱을 선택하시기 바랍니다.',
          },
          {
            q: 'Chatty-mini는 iPhone이나 iPad에서 사용할 수 있나요?',
            a: '리뷰 시점 기준으로 Chatty-mini의 iOS 또는 iPadOS 등록 정보는 발견되지 않았습니다. 확인 가능한 Google Play 등록 정보에 따르면 Android 전용으로 보입니다.',
          },
          {
            q: 'Chatty-mini는 누가 개발하나요?',
            a: 'Google Play 등록 정보는 개발자로 Fractal Media Infrastructure를 명시하며, 개발자 URL은 [instance001.github.io](https://instance001.github.io)입니다. 이 등록 정보상의 표기 외에는 별도의 회사 웹사이트나 개발자의 공개된 실적을 본 리뷰에서 찾을 수 없었습니다.',
          },
          {
            q: 'Chatty-mini는 프라이빗한 대화에 사용해도 안전한가요?',
            a: '짧은 설명은 이 앱을 "private, local-first"라고 부르지만, 본 리뷰는 앱이 어떤 데이터를(있다면) 수집하는지 확인할 수 있는 완전하고 독립적인 개인정보처리방침에 접근할 수 없었습니다. 민감한 콘텐츠를 앱에 맡기기 전에 Google Play 등록 정보의 "데이터 안전" 섹션을 확인하고 앱 내 개인정보처리방침을 읽으시기 바랍니다. 이는 마케팅 설명과 다를 수 있습니다.',
          },
          {
            q: 'Chatty-mini는 Loci나 Private LLM과 비교하면 어떤가요?',
            a: 'Loci와 Private LLM 모두 개발자 웹사이트, 모델 라이브러리를 공개하며, Loci는 App Store 개인정보 보호 라벨도 갖추고 있습니다 — 반면 Chatty-mini는 리뷰 시점 기준으로 이에 상응하는 공개 문서를 갖추고 있지 않습니다. 또한 Loci는 다섯 개 플랫폼(iPhone, iPad, Android, Mac, Windows)을 지원하는 반면, Chatty-mini의 등록 정보는 Android 전용입니다. 문서화 깊이와 크로스 플랫폼 지원이 중요하다면 Loci나 Private LLM이 더 잘 검증된 출발점입니다. 위의 비교표를 참고하시기 바랍니다.',
          },
          {
            q: 'Chatty-mini는 설치 후 모델 다운로드가 필요한가요?',
            a: '본 리뷰에서 확인 가능한 등록 정보 발췌 내용에는 이에 대한 확인이 없습니다. GGUF 모델을 실행하는 앱은 일반적으로 작은 모델을 번들하거나 최초 다운로드를 요구하는데, Chatty-mini의 등록 정보는 어떤 방식을 사용하는지 명시하지 않습니다. 설치 후 앱 내 온보딩 과정을 확인하여 확인하시기 바랍니다.',
          },
          {
            q: '이 사이트의 다른 앱 리뷰에 비해 왜 이 리뷰는 Chatty-mini에 대해 이렇게 신중한 표현을 많이 사용하나요?',
            a: '확보할 수 있는 소스 자료가 더 적기 때문입니다. Chatty-mini는 소규모의 독립 개발 앱으로, 리뷰 시점 기준 유일한 공개 문서는 Google Play 등록 정보뿐입니다 — 기술 사양을 담은 개발자 웹사이트도, 공개된 변경 이력도, PromptQuorum이 독립적으로 진행한 실제 사용 테스트도 없습니다. 본 리뷰는 추측으로 공백을 채우는 대신, 등록 정보가 명시하는 내용만을 보고하고 확인되지 않은 부분을 명확히 밝힙니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Chatty-mini는 명확하고 한정된 아이디어를 중심으로 포지셔닝된 소규모의 독립 개발 Android 앱입니다. 즉, GGUF 모델을 기기에서 실행하여 프라이빗하고 로컬 우선인 채팅을, 창작 글쓰기와 메모 작성, 프라이빗 채팅 공간을 겨냥한 가볍고 세로 화면 중심의 인터페이스로 제공하는 것입니다. 이 아이디어 자체는 신뢰할 만하며, 다른 Android 앱에서 GGUF 기반 로컬 추론이 작동하는 방식과도 일치합니다. 본 리뷰가 전면적인 추천으로 이어지지 않는 이유는 콘셉트가 아니라 문서화의 부족 때문입니다: 리뷰 시점 기준으로 Chatty-mini에 대한 유일한 공개 소스는 Google Play 등록 정보뿐이며, 그 페이지를 넘어서는 독립적인 개발자 웹사이트, 공개된 모델 목록, 개인정보처리방침 세부 내용, 확인된 가격은 존재하지 않습니다. 소규모의 Android 전용 GGUF 기반 채팅 앱을 자기 책임하에 시험해 보고 싶고, Play 스토어의 "데이터 안전" 섹션과 앱 내 설정을 직접 확인하는 데 거부감이 없는 사용자라면 Chatty-mini가 저위험 시범 사용의 가치가 있다고 판단할 수 있습니다. 크로스 플랫폼 지원, 문서화된 모델 라이브러리, 검증된 가격, 확립된 실적이 필요한 사용자는 대신 Loci, Private LLM, PocketPal AI로 시작해야 하며, 이들은 모두 훨씬 더 충실한 공개 문서를 제공합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Chatty-mini](https://play.google.com/store/apps/details?id=io.instance001.chatmini) — 본 리뷰에 사용된 유일한 공개 등록 정보: 제목, 짧은 설명 및 긴 설명 텍스트, 개발자 표기.',
          '[App Store의 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — 비교를 위해 참조; 개인정보 보호 라벨 및 플랫폼 지원 현황.',
          '[Private LLM 공식 사이트](https://privatellm.app/en) — 비교를 위해 참조; 가격, 모델 라이브러리, 플랫폼 지원 현황.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Loci AI 리뷰: iPhone, Android, iPad, Mac, Windows용 오프라인 AI](/power-local-llm/loci-ai-review-offline-local-ai) — 개인정보 보호 라벨이 공개된, 더 잘 문서화된 크로스 플랫폼 대안.',
          '[2026년 Android 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-android-2026) — MLC Chat, Maid, Layla, Termux를 통한 Ollama, PocketPal AI를 포함한 Android 앱 총정리.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini 대 Gemma 4 대 SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 어떤 GGUF 호환 모델이 실제로 휴대폰에 적합한지 설명하는 모델 계층 관련 글.',
          '[태블릿에서 로컬 LLM 실행하기: iPad와 Android](/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿에서의 온디바이스 및 원격 추론에 초점을 맞춘 기기별 가이드.',
          '[로컬 LLM 소프트웨어 완전 디렉터리](/power-local-llm/local-llm-software-directory-2026) — 규모가 작고 문서화가 덜 된 앱을 포함해 여러 플랫폼의 로컬 LLM 도구를 폭넓게 다루는 디렉터리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chatty-mini 리뷰(2026): Android용 프라이빗 로컬 GGUF 채팅',
      description:
        'Chatty-mini 리뷰: GGUF 모델을 기기에서 로컬로 실행해 프라이빗하고 오프라인 채팅을 제공하는 세로 화면 중심 Android 앱. Google Play 등록 정보가 확인해 주는 것, 확인해 주지 않는 것, 그리고 어떤 사용자에게 적합한지 살펴봅니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/chatty-mini-review',
      inLanguage: 'ko',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 GGUF 기반 AI 채팅 앱을 평가 중인 Android 사용자' },
      about: [
        { '@type': 'Thing', name: 'Chatty-mini' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/chatty-mini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Chatty-mini 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/chatty-mini-review' },
      ],
    },
  },
}
