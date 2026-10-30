// Mylio Photos Review: Multi-Device Photo Library with On-Device AI Search
// Slug: mylio-photos-review
// Companion to: excire-foto-review, ente-photos-review, immich-review, photoprism-review
// Sources (all read 2026-10-30, no hands-on testing): mylio.com (home, download, sign-up pages), support.mylio.com (change log and release notes, version 24 release notes),
// the Mylio privacy policy (mylio.com/privacy, "last revised on, and effective as of, 14 May 2018"), the US/DE/ES/FR/JP/KR/BR App Store listings (id908787435), the 2023 version 24 launch release
// (news.mylio.com) and the 2024 price announcement (inspire.mylio.com). The request came from the site owner (link from localhosted.com), not from Mylio: no maker comment, no founder-review badge.
// Last upstream update 2026-10-08 (Windows and Android build 7905; macOS/iOS 7904 on 2026-10-06) = 22 days before 2026-10-30 => stale warning OFF.
// Prices: App Store "Mylio Premium" per storefront, never converted: US $25.00 / $239.99, DE/ES/FR 29,00 EUR / 249,99 EUR, JP 4,000 / 40,000 yen, KR 33,000 / 349,000 won, BR R$ 129,90 / R$ 1.199,90.
// EN/ZH/AR use the US storefront (USD). Mylio's sign-up page prices ($25/$240 Individual, $40/$384 Duo, $50/$480 Family) name no currency and appear only in EN.
// Locality is NOT verified: "every one of our AI tools runs exclusively on your local devices" (App Store) and "run AI locally, no internet needed" (home page) are vendor statements;
// the Learn Panel "GPT-powered chat" (v24.0 notes) has no stated location; a third-party claim that search is "powered by Gemini" was not found on any Mylio page and is NOT used.
// Not read: the Google Play listing (WebFetch cannot load it), so Android prices and the Play data-safety label are not covered. No affiliate links.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-en.webp',
    title: 'Mylio Photos Review: Multi-Device Photo Library with On-Device AI Search',
    seoTitle: 'Mylio Photos Review: Multi-Device Photo App, AI Search',
    intro: 'Mylio Photos is a closed-source photo, video and document library for Windows, macOS, iOS and Android that syncs your files between your own devices and, according to Mylio, runs its AI tools (SmartTag search, face recognition and text recognition) on those devices. It is free to download and sold as a subscription, with optional encrypted cloud storage. This review reflects Mylio\'s website, release notes, App Store listing and privacy policy as checked on 30 October 2026; the current release is version 24.8.',
    metaDescription: 'Mylio Photos review: closed-source photo library for Windows, Mac, iPhone and Android. Mylio says its AI search and face scanning run on your devices.',
    twitterDescription: 'Mylio Photos review: a multi-device photo library whose AI search, face and text recognition run on your devices, per Mylio. Plans, data flow, and what could not be verified.',
    audience: 'People with photos spread across phones, computers and drives who want one synced library with AI search, and who need to know what the sources confirm about where the AI runs, what the plans cost and what leaves the device.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'mylio photos review',
    targetKeywords: [
      'mylio photos review',
      'mylio photos 24.8',
      'photo library app with offline ai search',
      'photo manager face recognition on device',
      'sync photos between devices without cloud',
      'google photos alternative private',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos is a closed-source photo library for Windows, macOS, iOS and Android that, according to Mylio, runs its AI tools (SmartTag search, face recognition and text recognition) on your own devices.** Version 24.8 was last updated on 8 October 2026. It is free to download and sold as a subscription, and Mylio does not say where its in-app help chatbot runs.',
    quickAnswerTop: {
      en: {
        question: 'Does Mylio Photos run its AI on your own devices?',
        answer: 'Per Mylio, yes: its App Store listing says "every one of our AI tools runs exclusively on your local devices", and its release notes say faces are "privately scanned on your own devices". Mylio does not say where the Learn Panel help chat runs, its privacy policy dates from 2018 and does not mention AI, and optional Mylio Drive+ storage and Shared Albums use Mylio\'s servers. PromptQuorum has not inspected network traffic.',
        bullets: [
          'Closed source; free to download, with Mylio Premium at $25.00 a month or $239.99 a year on the US App Store.',
          'Windows (x64 and ARM64), macOS, iOS, iPadOS and Android; the Windows and Mac installers are direct downloads from mylio.com.',
          'Features: one synced library, Dynamic Search over keywords, SmartTags and recognised text, face tagging, albums, sharing and basic editing.',
          'Version 24.8: Windows and Android build 7905 on 8 October 2026, macOS and iOS build 7904 on 6 October 2026.',
          'Not tested by PromptQuorum: search quality, face accuracy and OCR results are unassessed.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Mylio Photos?', anchor: 'what-is-mylio-photos' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Key Features', anchor: 'key-features' },
      { label: 'AI Features and Where They Run', anchor: 'ai-features' },
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
            text: 'Mylio Photos is a closed-source photo, video and document library for Windows, macOS, iOS and Android that syncs your files between your devices and, per its maker, tags, searches and groups them with AI that runs on those devices.',
          },
          {
            type: 'plain-terms',
            text: 'You install it on each device, sign in so they can sync, and let it scan your photos once; Mylio says nothing is sent to its servers for AI, though cloud storage and shared albums are optional features that do use them.',
          },
        ],
        items: [
          'Maintenance: version 24.8 has had four builds since 28 July 2026, the newest on 8 October 2026, so no stale-project warning applies.',
          'Maker: Mylio; the App Store lists the seller as MyLo Development, LLC.',
          'Setup: an MSIX installer for Windows, a .dmg for macOS, and store apps for iOS and Android, all linked from Mylio\'s download page.',
          'Cost: free to download, with paid Individual, Duo and Family plans and a free trial; storefront prices are in the Get It note.',
          'Scope: a photo library with image AI; the only chat feature found is a help chatbot in the Learn Panel, not a photo assistant.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on Mylio\'s website, release notes, App Store listing and privacy policy, checked on 30 October 2026. PromptQuorum has not installed Mylio Photos, so search quality, speed and face accuracy are not assessed.',
          },
          {
            type: 'note',
            text: 'The on-device AI statement is Mylio\'s own marketing and release-note wording, not an audit. Mylio\'s privacy policy, last revised on 14 May 2018, does not describe AI processing.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'What Is Mylio Photos?',
        content: [
          '**Mylio Photos is a media library app that brings photos, videos and documents from phones, computers and drives into one library and syncs them between your own devices.** According to Mylio, the AI features (Dynamic Search over SmartTags that identify over 1,000 activities, objects and properties, face recognition and text recognition) run on those devices rather than on Mylio\'s servers. Mylio\'s site lists macOS, Windows, iOS and Android.',
          'The maker is Mylio; the App Store lists MyLo Development, LLC as seller. Dynamic Search and SmartTags arrived with version 24, announced on 30 August 2023, and the 24.7 notes (build 7878, 17 December 2025) report a refactored face-recognition pipeline and new OCR models on all operating systems. Mylio also sells Business plans and optional cloud storage (Mylio Drive+, powered by Backblaze, and SecureCloud); this review covers the personal product.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Mylio Photos is a double-click install on Windows and macOS and a store app on iPhone, iPad and Android; you then sign in so your devices can sync.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'Website',
            'How to get it': '[mylio.com](https://mylio.com/): product overview, plans and downloads',
          },
          {
            Option: 'Windows',
            'How to get it': 'MSIX installer for x64 and a separate one for ARM64, linked from the [download page](https://mylio.com/download/)',
          },
          {
            Option: 'Mac',
            'How to get it': '.dmg disk image from the [download page](https://mylio.com/download/)',
          },
          {
            Option: 'iPhone and iPad',
            'How to get it': '[Mylio Photos on the App Store](https://apps.apple.com/us/app/mylio-photos/id908787435): free with in-app purchases',
          },
          {
            Option: 'Android',
            'How to get it': '[Mylio Photos on Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio), linked from the download page',
          },
          {
            Option: 'Plans',
            'How to get it': '[Sign-up page](https://mylio.com/signup-personal/): Individual, Duo and Family plans with a free trial',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[Mylio privacy policy](https://mylio.com/privacy/): last revised on 14 May 2018',
          },
          { Option: 'Source code', 'How to get it': 'None: proprietary software' },
        ],
        note: 'Version reviewed: Mylio Photos 24.8 (macOS and iOS build 7904, Windows and Android build 7905). The US App Store lists Mylio Premium at $25.00 a month or $239.99 a year. Mylio\'s sign-up page shows Individual at $25 a month or $240 a year, Duo at $40 or $384 and Family at $50 or $480, without naming the currency; an older Mylio announcement (2024) lists Mylio Photos+ at $119.99 a year, so confirm the current price at checkout.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Mylio publishes no hardware minimums; the sources give operating-system support and the iOS requirement only.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating systems',
            'What the sources say': 'Windows (x64 and ARM64), macOS, iOS and iPadOS 13.0 or later, visionOS 1.0 or later, Android',
          },
          {
            Item: 'Minimum versions',
            'What the sources say': 'The download page lists no minimum Windows, macOS or Android version',
          },
          { Item: 'App size', 'What the sources say': 'The iOS app is 202.8 MB (US App Store listing)' },
          {
            Item: 'Account',
            'What the sources say': 'Devices sync through a Mylio account ("devices signed into your account", release notes)',
          },
          {
            Item: 'Memory, GPU, disk',
            'What the sources say': 'No RAM, GPU or disk requirement is published in the sources read',
          },
          { Item: 'Languages', 'What the sources say': 'The App Store listing shows English only' },
        ],
        note: 'These details come from Mylio\'s download page and the US App Store listing; PromptQuorum did not measure indexing time or memory use.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow Mylio\'s download page and release notes; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Download the app',
            whyItMatters: 'Take the Windows MSIX or the Mac .dmg from Mylio\'s download page, or install the iOS or Android app from its store, then sign in or create an account.',
          },
          {
            title: 'Add your sources',
            whyItMatters: 'The Guided Import panel adds folders, drives and cameras and, since version 24.0, an option to sync with other devices; Mylio says each imported image is scanned for people on your device.',
          },
          {
            title: 'Tag people',
            whyItMatters: 'Review the face proposals and name people; the 24.7 notes mention batch face tagging and a Rescan Faces command.',
          },
          {
            title: 'Search',
            whyItMatters: 'Type in Dynamic Search to find photos by keyword, SmartTag or recognised text; SmartTags can be switched off in the search menu.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from Mylio\'s website or release notes; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Library.** One library for photos, videos and documents across Windows, macOS, iOS and Android, with device-to-device sync.',
          '**Search.** Dynamic Search over keywords, SmartTags and recognised text, with results grouped by location, people, events and albums.',
          '**People.** Face recognition with proposals and batch tagging.',
          '**Organising.** Albums, ratings, categories, Spaces and workflows; the release notes say Family, Work and Custom Spaces need a paid plan or trial.',
          '**Editing and cameras.** Basic editing tools such as AutoTone and Levels, plus RAW and DNG support; version 24.8 added Sony camera support.',
          '**Sharing.** Shared Albums and shareable links.',
        ],
        note: 'Release notes list the Mylio Drive+ and SecureCloud storage options separately from the AI features; they are paid extras.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**Mylio\'s AI is image-based: it tags what is in a photo, finds faces and reads text so you can search; the only chat feature found is a help chatbot.**',
        ],
        items: [
          '**SmartTags and Dynamic Search.** Mylio says machine learning tags over 1,000 activities, objects and properties, and that search results usually appear in under two seconds (App Store listing).',
          '**Faces.** Mylio says each image is "privately scanned on your own devices for recognizable people"; version 24.7 refactored the pipeline for speed and accuracy.',
          '**Text in images.** The 24.7 notes report new OCR models on all operating systems, and Dynamic Search results include OCR data.',
          '**Learn Panel chat.** The version 24 notes describe a "GPT-powered chat within the Learn Panel" that searches Mylio\'s help resources; Mylio does not say where it runs or what it sends.',
          '**Where it runs.** Besides the App Store statement, Mylio\'s home page says to "organize media and run AI locally, no internet needed", and the 2023 launch release says the search index is built on the user\'s device.',
        ],
        note: 'These are Mylio\'s own statements. PromptQuorum did not test search relevance, face accuracy, OCR languages or speed, and Mylio does not name the models.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**According to the sources, three things reach Mylio\'s servers or other parties, and none of them is AI processing.** Devices sync through a Mylio account. Mylio Drive+, an optional paid feature, stores optimised copies of your files on servers powered by Backblaze, encrypted so that only devices signed in to your account can read them (version 24.4 notes). Shared Albums and shareable links publish the photos you pick on web pages that Mylio hosts (2023 launch release).',
          'The privacy policy says it was last revised on 14 May 2018. It lists account details, your content and its metadata, usage data and device identifiers, says information may be stored and processed in the United States or other countries, and does not mention AI, face recognition or on-device processing. The US App Store privacy label lists name, device ID, user ID and crash data as linked to you, for analytics and app functionality.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are vendor statements and policy text, not audit results. PromptQuorum has not inspected network traffic, so whether face scanning or search ever contacts a server is not verified.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People with photos spread over phones, computers and drives** who want one synced library without putting everything in a cloud photo service.',
          '**Users who want face, object and text search** that Mylio says runs on their own devices.',
          '**Households with several users:** the Duo and Family plans cover two and five people.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI location.** Every on-device statement is Mylio\'s own; where the Learn Panel chatbot runs and what it sends is not stated, and the privacy policy does not cover AI.',
          '**AI quality.** Search relevance, face accuracy and text recognition were not tested.',
          '**Free plan.** The release notes refer to a free plan, but the current sign-up page lists paid plans with a free trial and does not say what stays free.',
          '**Price.** The sign-up page does not name its currency, storefront prices differ, and older Mylio posts list lower figures.',
          '**Minimums.** No minimum operating-system version for Windows, macOS or Android, and no RAM or storage requirement, is published in the sources read.',
          '**Google Play.** The Play listing could not be read, so its data-safety label and Android prices are not covered.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has four other photo-library reviews; they differ mainly in whether you run a server, pay once, or use encrypted cloud storage.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Excire Foto](/power-local-llm/excire-foto-review)',
            Platforms: 'Windows, Mac',
            'Price / license': 'One-time purchase / Closed source',
            'Key difference': 'Desktop manager with local AI search, per Excire; Windows and Mac only',
          },
          {
            App: '[Ente Photos](/power-local-llm/ente-photos-review)',
            Platforms: 'iOS, Android, desktop, web',
            'Price / license': 'Free 10 GB, paid plans / AGPL-3.0',
            'Key difference': 'Encrypted cloud storage with on-device AI; open source',
          },
          {
            App: '[Immich](/power-local-llm/immich-review)',
            Platforms: 'Server (Docker), phone apps, browser',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Self-hosted server with phone backup; setup needs Docker',
          },
          {
            App: '[PhotoPrism](/power-local-llm/photoprism-review)',
            Platforms: 'Server (Docker), browser',
            'Price / license': 'Free Community / AGPL-3.0',
            'Key difference': 'Self-hosted web app with built-in AI labels',
          },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Mylio Photos a local LLM?',
            a: 'No. The sources describe image tagging, face and text recognition, and a help chatbot in the Learn Panel; none describes a local language model.',
          },
          {
            q: 'Does Mylio Photos work offline?',
            a: 'Mylio\'s home page says you can "run AI locally, no internet needed" and search "even offline"; it lists no exceptions, and sign-in, sync and the help chat naturally need a connection.',
          },
          {
            q: 'How much does Mylio Photos cost?',
            a: 'It is free to download and the paid plans are subscriptions; see the Get It note for storefront prices. Mylio\'s sign-up page also shows a 30-day money-back guarantee.',
          },
          {
            q: 'Can I try it before paying?',
            a: 'Yes: the sign-up page offers a "Free Trial + Gift" and says you will not be charged today. The length of the trial is not stated.',
          },
          {
            q: 'Does Mylio send my photos to the cloud?',
            a: 'Not for AI, per Mylio. Optional Mylio Drive+ storage and Shared Albums do store or publish files on servers, as described under Data Flow and Privacy.',
          },
          {
            q: 'Is the project still maintained?',
            a: 'On the evidence available, yes: Mylio\'s release notes list version 24.8 builds on 28 July, 11 August, 6 October and 8 October 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Mylio Photos is a closed-source multi-device photo library whose maker says its SmartTag search, face recognition and text recognition run on your own devices, with a free download and subscriptions for the paid plans. Against that: the claim is the vendor\'s own, the help chatbot\'s location is not stated, the privacy policy dates from 2018 and does not cover AI, optional cloud storage and shared albums use Mylio\'s servers, the free tier\'s scope is unclear, and PromptQuorum did not test the app. It suits people with photos on several devices who want one synced library and accept the vendor\'s statement; anyone who needs verified offline processing or open source should look at the self-hosted alternatives.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Mylio Photos home page](https://mylio.com/) — platforms, plans and AI feature descriptions, checked 30 October 2026.',
          '[Mylio download page](https://mylio.com/download/) — installers and store links, checked 30 October 2026.',
          '[Mylio sign-up page](https://mylio.com/signup-personal/) — plans and prices, checked 30 October 2026.',
          '[Mylio change log and release notes](https://support.mylio.com/change-log-and-release-notes) — versions 24.7 and 24.8 with build dates, checked 30 October 2026.',
          '[Mylio version 24 release notes](https://support.mylio.com/version-24-release-notes) — Dynamic Search, face scanning, Learn Panel chat and Mylio Drive+, checked 30 October 2026.',
          '[Mylio privacy policy](https://mylio.com/privacy/) — data collected and processing locations, revised 14 May 2018.',
          '[Mylio Photos on the US App Store](https://apps.apple.com/us/app/mylio-photos/id908787435) — version 24.8.7904, in-app purchases, AI statement and privacy label, checked 30 October 2026.',
          '[Mylio version 24 launch release](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags, local search index and Shared Albums, published 30 August 2023.',
          '[Mylio price announcement](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — 2024 Mylio Photos+ prices.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Excire Foto Review](/power-local-llm/excire-foto-review) — a closed-source desktop photo manager with local AI search.',
          '[Ente Photos Review](/power-local-llm/ente-photos-review) — encrypted photo backup with on-device face and natural-language search.',
          '[Immich Review](/power-local-llm/immich-review) — a self-hosted photo library with phone backup and smart search.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mylio Photos Review: Multi-Device Photo Library with On-Device AI Search',
      description: 'Mylio Photos review: a closed-source multi-device photo library with AI search, face and text recognition that Mylio says run on your devices. Plans, data flow and what could not be verified.',
      url: 'https://www.promptquorum.com/power-local-llm/mylio-photos-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'People evaluating a multi-device photo library with on-device AI search',
      },
      about: [
        { '@type': 'Thing', name: 'Mylio Photos' },
        { '@type': 'Thing', name: 'Photo management software' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Optical character recognition' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/mylio-photos-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mylio Photos Review',
          item: 'https://www.promptquorum.com/power-local-llm/mylio-photos-review',
        },
      ],
    },
  },

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-de.webp',
    title: 'Mylio-Photos-Rezension: Foto-Bibliothek für mehrere Geräte mit KI-Suche auf dem Gerät',
    seoTitle: 'Mylio-Photos-Rezension: Foto-App für mehrere Geräte, KI',
    intro: 'Mylio Photos ist eine nicht quelloffene Bibliothek für Fotos, Videos und Dokumente auf Windows, macOS, iOS und Android, die Ihre Dateien zwischen Ihren eigenen Geräten synchronisiert und ihre KI-Werkzeuge (SmartTag-Suche, Gesichtserkennung und Texterkennung) laut Mylio auf diesen Geräten ausführt. Der Download ist kostenlos, bezahlte Tarife laufen als Abonnement, dazu gibt es optionalen verschlüsselten Cloud-Speicher. Diese Rezension gibt Website, Versionshinweise, App-Store-Eintrag und Datenschutzerklärung von Mylio so wieder, wie sie am 30. Oktober 2026 geprüft wurden; aktuell ist Version 24.8.',
    metaDescription: 'Mylio-Photos-Rezension: Foto-Bibliothek für Windows, Mac, iPhone und Android. Laut Mylio laufen KI-Suche und Gesichtserkennung auf Ihren Geräten.',
    twitterDescription: 'Mylio-Photos-Rezension: eine Foto-Bibliothek für mehrere Geräte, deren KI-Suche, Gesichts- und Texterkennung laut Mylio auf Ihren Geräten laufen. Tarife, Datenfluss und was sich nicht prüfen ließ.',
    audience: 'Menschen mit Fotos auf Handys, Computern und Laufwerken, die eine synchronisierte Bibliothek mit KI-Suche wollen und wissen müssen, was die Quellen dazu bestätigen, wo die KI läuft, was die Tarife kosten und was das Gerät verlässt.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'mylio photos rezension',
    targetKeywords: [
      'mylio photos rezension',
      'mylio photos 24.8',
      'foto bibliothek app ki suche offline',
      'fotos verwalten gesichtserkennung auf dem gerät',
      'fotos zwischen geräten synchronisieren ohne cloud',
      'google fotos alternative privat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos ist eine nicht quelloffene Foto-Bibliothek für Windows, macOS, iOS und Android, die ihre KI-Werkzeuge (SmartTag-Suche, Gesichtserkennung und Texterkennung) laut Mylio auf Ihren eigenen Geräten ausführt.** Version 24.8 wurde zuletzt am 8. Oktober 2026 aktualisiert. Der Download ist kostenlos, bezahlte Tarife laufen als Abonnement, und Mylio sagt nicht, wo der Hilfe-Chatbot in der App läuft.',
    quickAnswerTop: {
      de: {
        question: 'Führt Mylio Photos seine KI auf Ihren eigenen Geräten aus?',
        answer: 'Laut Mylio ja: Der App-Store-Eintrag sagt „every one of our AI tools runs exclusively on your local devices“, und die Versionshinweise sagen, Gesichter würden „privately scanned on your own devices“. Mylio sagt nicht, wo der Hilfe-Chat im Learn Panel läuft, die Datenschutzerklärung stammt von 2018 und erwähnt keine KI, und der optionale Speicher Mylio Drive+ sowie Shared Albums nutzen Server von Mylio. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
        bullets: [
          'Nicht quelloffen; kostenloser Download, Mylio Premium kostet im deutschen App Store 29,00 € im Monat oder 249,99 € im Jahr.',
          'Windows (x64 und ARM64), macOS, iOS, iPadOS und Android; die Installer für Windows und Mac sind direkte Downloads von mylio.com.',
          'Funktionen: eine synchronisierte Bibliothek, Dynamic Search über Stichwörter, SmartTags und erkannten Text, Gesichtsmarkierung, Alben, Teilen und einfache Bearbeitung.',
          'Version 24.8: Build 7905 für Windows und Android am 8. Oktober 2026, Build 7904 für macOS und iOS am 6. Oktober 2026.',
          'Von PromptQuorum nicht getestet: Suchqualität, Gesichtsgenauigkeit und Texterkennung sind nicht bewertet.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Mylio Photos?', anchor: 'what-is-mylio-photos' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So starten Sie', anchor: 'getting-started' },
      { label: 'Wichtige Funktionen', anchor: 'key-features' },
      { label: 'KI-Funktionen und wo sie laufen', anchor: 'ai-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen und Konkurrenz', anchor: 'vs-alternatives' },
      { label: 'Häufige Fragen', anchor: 'faq' },
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
            text: 'Mylio Photos ist eine nicht quelloffene Bibliothek für Fotos, Videos und Dokumente auf Windows, macOS, iOS und Android, die Ihre Dateien zwischen Ihren Geräten synchronisiert und sie laut Hersteller mit KI taggt, durchsucht und gruppiert, die auf diesen Geräten läuft.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App auf jedem Gerät, melden sich an, damit die Geräte synchronisieren, und lassen Ihre Fotos einmal scannen; laut Mylio wird dafür nichts an seine Server gesendet, Cloud-Speicher und geteilte Alben sind aber optionale Funktionen, die Server nutzen.',
          },
        ],
        items: [
          'Pflege: Version 24.8 hat seit dem 28. Juli 2026 vier Builds erhalten, der neueste vom 8. Oktober 2026; eine Veraltet-Warnung gilt daher nicht.',
          'Hersteller: Mylio; der App Store nennt als Verkäufer MyLo Development, LLC.',
          'Einrichtung: ein MSIX-Installer für Windows, eine .dmg für macOS und Store-Apps für iOS und Android, alle über Mylios Download-Seite verlinkt.',
          'Kosten: kostenloser Download, bezahlte Tarife Individual, Duo und Family sowie eine Testphase; Preise je Store stehen in der Anmerkung unter „Bezugsquelle“.',
          'Umfang: eine Foto-Bibliothek mit Bild-KI; die einzige gefundene Chat-Funktion ist ein Hilfe-Chatbot im Learn Panel, kein Foto-Assistent.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf Website, Versionshinweisen, App-Store-Eintrag und Datenschutzerklärung von Mylio, geprüft am 30. Oktober 2026. PromptQuorum hat Mylio Photos nicht installiert; Suchqualität, Geschwindigkeit und Gesichtsgenauigkeit sind daher nicht bewertet.',
          },
          {
            type: 'note',
            text: 'Die Aussage zur KI auf dem Gerät stammt aus Mylios eigenen Werbe- und Versionstexten und ist kein Prüfergebnis. Mylios Datenschutzerklärung, zuletzt am 14. Mai 2018 überarbeitet, beschreibt keine KI-Verarbeitung.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'Was ist Mylio Photos?',
        content: [
          '**Mylio Photos ist eine Medienbibliothek, die Fotos, Videos und Dokumente von Handys, Computern und Laufwerken in einer Bibliothek bündelt und zwischen Ihren eigenen Geräten synchronisiert.** Laut Mylio laufen die KI-Funktionen (Dynamic Search über SmartTags, die über 1.000 Aktivitäten, Objekte und Eigenschaften erkennen, Gesichtserkennung und Texterkennung) auf diesen Geräten und nicht auf Mylios Servern. Mylios Website nennt macOS, Windows, iOS und Android.',
          'Hersteller ist Mylio; der App Store nennt MyLo Development, LLC als Verkäufer. Dynamic Search und SmartTags kamen mit Version 24, angekündigt am 30. August 2023, und die Hinweise zu 24.7 (Build 7878, 17. Dezember 2025) nennen eine überarbeitete Gesichtserkennung und neue OCR-Modelle auf allen Betriebssystemen. Mylio verkauft außerdem Business-Tarife und optionalen Cloud-Speicher (Mylio Drive+ auf Basis von Backblaze und SecureCloud); diese Rezension behandelt das Produkt für Privatpersonen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Mylio Photos wird unter Windows und macOS per Doppelklick installiert und auf iPhone, iPad und Android als Store-App; danach melden Sie sich an, damit Ihre Geräte synchronisieren.**',
        ],
        columns: ['Option', 'So erhalten Sie es'],
        rows: [
          {
            Option: 'Website',
            'So erhalten Sie es': '[mylio.com](https://mylio.com/): Produktüberblick, Tarife und Downloads',
          },
          {
            Option: 'Windows',
            'So erhalten Sie es': 'MSIX-Installer für x64 und ein separater für ARM64, verlinkt auf der [Download-Seite](https://mylio.com/download/)',
          },
          {
            Option: 'Mac',
            'So erhalten Sie es': '.dmg-Datei auf der [Download-Seite](https://mylio.com/download/)',
          },
          {
            Option: 'iPhone und iPad',
            'So erhalten Sie es': '[Mylio Photos im App Store](https://apps.apple.com/us/app/mylio-photos/id908787435): kostenlos mit In-App-Käufen',
          },
          {
            Option: 'Android',
            'So erhalten Sie es': '[Mylio Photos bei Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio), verlinkt von der Download-Seite',
          },
          {
            Option: 'Tarife',
            'So erhalten Sie es': '[Anmeldeseite](https://mylio.com/signup-personal/): Tarife Individual, Duo und Family mit Testphase',
          },
          {
            Option: 'Datenschutzerklärung',
            'So erhalten Sie es': '[Mylio-Datenschutzerklärung](https://mylio.com/privacy/): zuletzt am 14. Mai 2018 überarbeitet',
          },
          { Option: 'Quellcode', 'So erhalten Sie es': 'Keiner: proprietäre Software' },
        ],
        note: 'Geprüfte Version: Mylio Photos 24.8 (Build 7904 für macOS und iOS, Build 7905 für Windows und Android). Der deutsche App Store nennt Mylio Premium mit 29,00 € im Monat oder 249,99 € im Jahr. Mylios Anmeldeseite nennt Preise in Dollar, ohne die Währung zu bezeichnen, und eine ältere Mylio-Ankündigung (2024) nennt Mylio Photos+ für 119,99 $ im Jahr; prüfen Sie den aktuellen Preis daher an der Kasse.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Mylio veröffentlicht keine Hardware-Mindestanforderungen; die Quellen nennen nur die unterstützten Betriebssysteme und die iOS-Voraussetzung.**',
        ],
        columns: ['Punkt', 'Was die Quellen sagen'],
        rows: [
          {
            Punkt: 'Betriebssysteme',
            'Was die Quellen sagen': 'Windows (x64 und ARM64), macOS, iOS und iPadOS 13.0 oder neuer, visionOS 1.0 oder neuer, Android',
          },
          {
            Punkt: 'Mindestversionen',
            'Was die Quellen sagen': 'Die Download-Seite nennt keine Mindestversion für Windows, macOS oder Android',
          },
          { Punkt: 'App-Größe', 'Was die Quellen sagen': 'Die iOS-App ist 202,8 MB groß (US-App-Store-Eintrag)' },
          {
            Punkt: 'Konto',
            'Was die Quellen sagen': 'Geräte synchronisieren über ein Mylio-Konto („devices signed into your account“, Versionshinweise)',
          },
          {
            Punkt: 'Speicher, GPU, Festplatte',
            'Was die Quellen sagen': 'Die gelesenen Quellen nennen keine Anforderung an RAM, GPU oder Speicherplatz',
          },
          { Punkt: 'Sprachen', 'Was die Quellen sagen': 'Der App-Store-Eintrag zeigt nur Englisch' },
        ],
        note: 'Diese Angaben stammen von Mylios Download-Seite und dem US-App-Store-Eintrag; PromptQuorum hat weder Indexierungszeit noch Speicherverbrauch gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Diese Schritte folgen Mylios Download-Seite und den Versionshinweisen; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App herunterladen',
            whyItMatters: 'Nehmen Sie das MSIX für Windows oder die .dmg für den Mac von Mylios Download-Seite oder installieren Sie die iOS- oder Android-App aus dem jeweiligen Store, und melden Sie sich an oder legen Sie ein Konto an.',
          },
          {
            title: 'Quellen hinzufügen',
            whyItMatters: 'Das Panel „Guided Import“ fügt Ordner, Laufwerke und Kameras hinzu und seit Version 24.0 auch die Option, mit anderen Geräten zu synchronisieren; laut Mylio wird jedes importierte Bild auf Ihrem Gerät auf Personen gescannt.',
          },
          {
            title: 'Personen markieren',
            whyItMatters: 'Prüfen Sie die Gesichtsvorschläge und benennen Sie Personen; die Hinweise zu 24.7 erwähnen die Stapelmarkierung von Gesichtern und einen Befehl „Rescan Faces“.',
          },
          {
            title: 'Suchen',
            whyItMatters: 'Geben Sie in Dynamic Search ein Stichwort ein, um Fotos nach Stichwort, SmartTag oder erkanntem Text zu finden; SmartTags lassen sich im Suchmenü ausschalten.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von Mylios Website oder den Versionshinweisen; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Bibliothek.** Eine Bibliothek für Fotos, Videos und Dokumente über Windows, macOS, iOS und Android hinweg, mit Geräte-zu-Gerät-Synchronisierung.',
          '**Suche.** Dynamic Search über Stichwörter, SmartTags und erkannten Text, mit Ergebnissen gruppiert nach Ort, Personen, Ereignissen und Alben.',
          '**Personen.** Gesichtserkennung mit Vorschlägen und Stapelmarkierung.',
          '**Ordnen.** Alben, Bewertungen, Kategorien, Spaces und Workflows; laut Versionshinweisen brauchen Family-, Work- und Custom-Spaces einen bezahlten Tarif oder die Testphase.',
          '**Bearbeiten und Kameras.** Einfache Bearbeitungswerkzeuge wie AutoTone und Levels sowie RAW- und DNG-Unterstützung; Version 24.8 ergänzte Sony-Kameras.',
          '**Teilen.** Shared Albums und teilbare Links.',
        ],
        note: 'Die Versionshinweise führen die Speicheroptionen Mylio Drive+ und SecureCloud getrennt von den KI-Funktionen auf; sie sind kostenpflichtige Extras.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Mylios KI ist bildbasiert: Sie kennzeichnet, was auf einem Foto zu sehen ist, findet Gesichter und liest Text, damit Sie suchen können; die einzige gefundene Chat-Funktion ist ein Hilfe-Chatbot.**',
        ],
        items: [
          '**SmartTags und Dynamic Search.** Laut Mylio kennzeichnet maschinelles Lernen über 1.000 Aktivitäten, Objekte und Eigenschaften, und Suchergebnisse erscheinen in der Regel in unter zwei Sekunden (App-Store-Eintrag).',
          '**Gesichter.** Laut Mylio wird jedes Bild „privately scanned on your own devices for recognizable people“; Version 24.7 überarbeitete die Pipeline für mehr Tempo und Genauigkeit.',
          '**Text in Bildern.** Die Hinweise zu 24.7 nennen neue OCR-Modelle auf allen Betriebssystemen, und die Ergebnisse von Dynamic Search enthalten OCR-Daten.',
          '**Chat im Learn Panel.** Die Hinweise zu Version 24 beschreiben einen „GPT-powered chat within the Learn Panel“, der Mylios Hilfeinhalte durchsucht; Mylio sagt nicht, wo er läuft und was er sendet.',
          '**Wo es läuft.** Neben der Aussage im App Store sagt Mylios Startseite „organize media and run AI locally, no internet needed“, und die Mitteilung zum Start von Version 24 aus dem Jahr 2023 sagt, der Suchindex werde auf dem Gerät der Nutzer aufgebaut.',
        ],
        note: 'Das sind Mylios eigene Aussagen. PromptQuorum hat Suchrelevanz, Gesichtsgenauigkeit, OCR-Sprachen und Geschwindigkeit nicht getestet, und Mylio nennt die Modelle nicht.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut den Quellen erreichen drei Dinge Mylios Server oder Dritte, und keines davon ist KI-Verarbeitung.** Geräte synchronisieren über ein Mylio-Konto. Mylio Drive+, eine optionale kostenpflichtige Funktion, speichert optimierte Kopien Ihrer Dateien auf Servern auf Basis von Backblaze, verschlüsselt, sodass nur in Ihrem Konto angemeldete Geräte sie lesen können (Hinweise zu 24.4). Shared Albums und teilbare Links veröffentlichen die von Ihnen gewählten Fotos auf Webseiten, die Mylio hostet (Mitteilung zum Start 2023).',
          'Die Datenschutzerklärung nennt als letzte Überarbeitung den 14. Mai 2018. Sie führt Kontodaten, Ihre Inhalte samt Metadaten, Nutzungsdaten und Gerätekennungen auf, sagt, Daten dürften in den USA oder anderen Ländern gespeichert und verarbeitet werden, und erwähnt weder KI noch Gesichtserkennung noch Verarbeitung auf dem Gerät. Das Datenschutzlabel im US-App-Store führt Name, Geräte-ID, Nutzer-ID und Absturzdaten als mit Ihnen verknüpft auf, für Analyse und App-Funktionen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Herstellerangaben und Richtlinientext, keine Prüfergebnisse. PromptQuorum hat den Netzwerkverkehr nicht geprüft; ob die Gesichtserkennung oder die Suche je einen Server kontaktiert, ist daher nicht verifiziert.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Menschen mit Fotos auf Handys, Computern und Laufwerken**, die eine synchronisierte Bibliothek wollen, ohne alles in einen Cloud-Fotodienst zu legen.',
          '**Nutzer, die Gesichts-, Objekt- und Textsuche wollen**, die laut Mylio auf ihren eigenen Geräten läuft.',
          '**Haushalte mit mehreren Nutzern:** Die Tarife Duo und Family decken zwei und fünf Personen ab.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Ort der KI.** Jede Aussage zur Verarbeitung auf dem Gerät stammt von Mylio selbst; wo der Chatbot im Learn Panel läuft und was er sendet, ist nicht angegeben, und die Datenschutzerklärung deckt KI nicht ab.',
          '**KI-Qualität.** Suchrelevanz, Gesichtsgenauigkeit und Texterkennung wurden nicht getestet.',
          '**Kostenloser Tarif.** Die Versionshinweise erwähnen einen kostenlosen Tarif, die aktuelle Anmeldeseite listet aber bezahlte Tarife mit Testphase und sagt nicht, was kostenlos bleibt.',
          '**Preis.** Die Anmeldeseite nennt ihre Währung nicht, die Preise unterscheiden sich je Store, und ältere Mylio-Beiträge nennen niedrigere Beträge.',
          '**Mindestanforderungen.** Weder eine Mindestversion von Windows, macOS oder Android noch eine Anforderung an RAM oder Speicher ist in den gelesenen Quellen angegeben.',
          '**Google Play.** Der Play-Eintrag ließ sich nicht lesen; sein Datensicherheitslabel und die Android-Preise sind daher nicht abgedeckt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Konkurrenz',
        content: [
          'Das Verzeichnis enthält vier weitere Rezensionen von Foto-Bibliotheken; sie unterscheiden sich vor allem darin, ob Sie einen Server betreiben, einmalig zahlen oder verschlüsselten Cloud-Speicher nutzen.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          {
            App: '[Excire Foto](/de/power-local-llm/excire-foto-review)',
            Plattformen: 'Windows, Mac',
            'Preis / Lizenz': 'Einmalkauf / Nicht quelloffen',
            Hauptunterschied: 'Desktop-Manager mit lokaler KI-Suche laut Excire; nur Windows und Mac',
          },
          {
            App: '[Ente Photos](/de/power-local-llm/ente-photos-review)',
            Plattformen: 'iOS, Android, Desktop, Web',
            'Preis / Lizenz': 'Gratis 10 GB, Bezahltarife / AGPL-3.0',
            Hauptunterschied: 'Verschlüsselter Cloud-Speicher mit KI auf dem Gerät; quelloffen',
          },
          {
            App: '[Immich](/de/power-local-llm/immich-review)',
            Plattformen: 'Server (Docker), Handy-Apps, Browser',
            'Preis / Lizenz': 'Gratis / AGPL-3.0',
            Hauptunterschied: 'Selbst gehosteter Server mit Handy-Backup; Einrichtung braucht Docker',
          },
          {
            App: '[PhotoPrism](/de/power-local-llm/photoprism-review)',
            Plattformen: 'Server (Docker), Browser',
            'Preis / Lizenz': 'Gratis Community / AGPL-3.0',
            Hauptunterschied: 'Selbst gehostete Web-App mit eingebauten KI-Labels',
          },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Ist Mylio Photos ein lokales LLM?',
            a: 'Nein. Die Quellen beschreiben Bildkennzeichnung, Gesichts- und Texterkennung sowie einen Hilfe-Chatbot im Learn Panel; keine beschreibt ein lokales Sprachmodell.',
          },
          {
            q: 'Funktioniert Mylio Photos offline?',
            a: 'Mylios Startseite sagt, Sie könnten „run AI locally, no internet needed“ und „even offline“ suchen; Ausnahmen nennt sie nicht, und Anmeldung, Synchronisierung und der Hilfe-Chat brauchen naturgemäß eine Verbindung.',
          },
          {
            q: 'Was kostet Mylio Photos?',
            a: 'Der Download ist kostenlos, die bezahlten Tarife sind Abonnements; die Preise je Store stehen in der Anmerkung unter „Bezugsquelle“. Mylios Anmeldeseite nennt zudem eine 30-Tage-Geld-zurück-Garantie.',
          },
          {
            q: 'Kann ich es vor dem Bezahlen testen?',
            a: 'Ja: Die Anmeldeseite bietet „Free Trial + Gift“ und sagt, dass heute nichts berechnet wird. Die Dauer der Testphase ist nicht angegeben.',
          },
          {
            q: 'Sendet Mylio meine Fotos in die Cloud?',
            a: 'Laut Mylio nicht für die KI. Der optionale Speicher Mylio Drive+ und Shared Albums speichern oder veröffentlichen Dateien dagegen auf Servern, wie unter „Datenfluss und Datenschutz“ beschrieben.',
          },
          {
            q: 'Wird das Projekt noch gepflegt?',
            a: 'Nach der Beleglage ja: Mylios Versionshinweise nennen Builds von Version 24.8 am 28. Juli, 11. August, 6. Oktober und 8. Oktober 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Mylio Photos ist eine nicht quelloffene Foto-Bibliothek für mehrere Geräte, deren Hersteller sagt, dass SmartTag-Suche, Gesichtserkennung und Texterkennung auf Ihren eigenen Geräten laufen, mit kostenlosem Download und Abonnements für die bezahlten Tarife. Dagegen stehen: Die Aussage stammt vom Hersteller selbst, der Ort des Hilfe-Chatbots ist nicht angegeben, die Datenschutzerklärung stammt von 2018 und deckt KI nicht ab, optionaler Cloud-Speicher und geteilte Alben nutzen Mylios Server, der Umfang des kostenlosen Tarifs ist unklar, und PromptQuorum hat die App nicht getestet. Geeignet für Menschen mit Fotos auf mehreren Geräten, die eine synchronisierte Bibliothek wollen und die Herstellerangabe akzeptieren; wer verifizierte Offline-Verarbeitung oder Open Source braucht, sollte sich die selbst gehosteten Alternativen ansehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Mylio-Photos-Startseite](https://mylio.com/) — Plattformen, Tarife und Beschreibung der KI-Funktionen, geprüft am 30. Oktober 2026.',
          '[Mylio-Download-Seite](https://mylio.com/download/) — Installer und Store-Links, geprüft am 30. Oktober 2026.',
          '[Mylio-Anmeldeseite](https://mylio.com/signup-personal/) — Tarife und Preise, geprüft am 30. Oktober 2026.',
          '[Mylio-Änderungsprotokoll und Versionshinweise](https://support.mylio.com/change-log-and-release-notes) — Versionen 24.7 und 24.8 mit Build-Daten, geprüft am 30. Oktober 2026.',
          '[Mylio-Versionshinweise zu Version 24](https://support.mylio.com/version-24-release-notes) — Dynamic Search, Gesichts-Scan, Chat im Learn Panel und Mylio Drive+, geprüft am 30. Oktober 2026.',
          '[Mylio-Datenschutzerklärung](https://mylio.com/privacy/) — erhobene Daten und Verarbeitungsorte, überarbeitet am 14. Mai 2018.',
          '[Mylio Photos im US-App-Store](https://apps.apple.com/us/app/mylio-photos/id908787435) — Version 24.8.7904, In-App-Käufe, KI-Aussage und Datenschutzlabel, geprüft am 30. Oktober 2026.',
          '[Mitteilung zum Start von Mylio Version 24](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags, lokaler Suchindex und Shared Albums, veröffentlicht am 30. August 2023.',
          '[Mylio-Preisankündigung](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — Preise von Mylio Photos+ im Jahr 2024.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Excire-Foto-Rezension](/de/power-local-llm/excire-foto-review) — ein nicht quelloffener Desktop-Fotomanager mit lokaler KI-Suche.',
          '[Ente-Photos-Rezension](/de/power-local-llm/ente-photos-review) — verschlüsselte Foto-Sicherung mit Gesichtserkennung und Suche in natürlicher Sprache auf dem Gerät.',
          '[Immich-Rezension](/de/power-local-llm/immich-review) — eine selbst gehostete Fotobibliothek mit Handy-Backup und Smart Search.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-es.webp',
    title: 'Reseña de Mylio Photos: biblioteca de fotos multidispositivo con búsqueda por IA en el dispositivo',
    seoTitle: 'Reseña de Mylio Photos: app de fotos multidispositivo y IA',
    intro: 'Mylio Photos es una biblioteca de fotos, vídeos y documentos de código cerrado para Windows, macOS, iOS y Android que sincroniza tus archivos entre tus propios dispositivos y que, según Mylio, ejecuta sus herramientas de IA (búsqueda con SmartTags, reconocimiento facial y reconocimiento de texto) en esos dispositivos. La descarga es gratuita y los planes de pago son suscripciones, con almacenamiento en la nube cifrado como opción. Esta reseña recoge el sitio web, las notas de versión, la ficha de la App Store y la política de privacidad de Mylio tal como se revisaron el 30 de octubre de 2026; la versión actual es la 24.8.',
    metaDescription: 'Reseña de Mylio Photos: biblioteca de fotos para Windows, Mac, iPhone y Android. Según Mylio, su IA de búsqueda y caras corre en tus dispositivos.',
    twitterDescription: 'Reseña de Mylio Photos: una biblioteca de fotos multidispositivo cuya búsqueda con IA y reconocimiento de caras y texto se ejecutan en tus dispositivos, según Mylio. Planes, flujo de datos y lo que no se pudo verificar.',
    audience: 'Personas con fotos repartidas entre móviles, ordenadores y discos que quieren una biblioteca sincronizada con búsqueda por IA y necesitan saber qué confirman las fuentes sobre dónde se ejecuta la IA, cuánto cuestan los planes y qué sale del dispositivo.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña mylio photos',
    targetKeywords: [
      'reseña mylio photos',
      'mylio photos 24.8',
      'app biblioteca de fotos con búsqueda ia sin conexión',
      'gestor de fotos con reconocimiento facial en el dispositivo',
      'sincronizar fotos entre dispositivos sin nube',
      'alternativa privada a google fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos es una biblioteca de fotos de código cerrado para Windows, macOS, iOS y Android que, según Mylio, ejecuta sus herramientas de IA (búsqueda con SmartTags, reconocimiento facial y reconocimiento de texto) en tus propios dispositivos.** La versión 24.8 se actualizó por última vez el 8 de octubre de 2026. La descarga es gratuita, los planes de pago son suscripciones y Mylio no indica dónde se ejecuta el chatbot de ayuda de la app.',
    quickAnswerTop: {
      es: {
        question: '¿Mylio Photos ejecuta su IA en tus propios dispositivos?',
        answer: 'Según Mylio, sí: la ficha de la App Store dice «every one of our AI tools runs exclusively on your local devices» y las notas de versión dicen que las caras se escanean «privately scanned on your own devices». Mylio no indica dónde se ejecuta el chat de ayuda del Learn Panel, su política de privacidad es de 2018 y no menciona la IA, y el almacenamiento opcional Mylio Drive+ y los Shared Albums usan servidores de Mylio. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Código cerrado; descarga gratuita, con Mylio Premium a €29.00 al mes o €249.99 al año en la App Store de España.',
          'Windows (x64 y ARM64), macOS, iOS, iPadOS y Android; los instaladores de Windows y Mac son descargas directas desde mylio.com.',
          'Funciones: una biblioteca sincronizada, Dynamic Search sobre palabras clave, SmartTags y texto reconocido, etiquetado de caras, álbumes, uso compartido y edición básica.',
          'Versión 24.8: compilación 7905 para Windows y Android el 8 de octubre de 2026, y 7904 para macOS e iOS el 6 de octubre de 2026.',
          'PromptQuorum no la ha probado: la calidad de la búsqueda, la precisión facial y el OCR no están evaluados.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Mylio Photos?', anchor: 'what-is-mylio-photos' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones principales', anchor: 'key-features' },
      { label: 'Funciones de IA y dónde se ejecutan', anchor: 'ai-features' },
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
            text: 'Mylio Photos es una biblioteca de fotos, vídeos y documentos de código cerrado para Windows, macOS, iOS y Android que sincroniza tus archivos entre tus dispositivos y, según su creador, los etiqueta, busca y agrupa con una IA que se ejecuta en esos dispositivos.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas en cada dispositivo, inicias sesión para que se sincronicen y dejas que escanee tus fotos una vez; según Mylio no se envía nada a sus servidores para la IA, aunque el almacenamiento en la nube y los álbumes compartidos son funciones opcionales que sí usan servidores.',
          },
        ],
        items: [
          'Mantenimiento: la versión 24.8 ha recibido cuatro compilaciones desde el 28 de julio de 2026, la más reciente el 8 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto obsoleto.',
          'Creador: Mylio; la App Store indica como vendedor a MyLo Development, LLC.',
          'Instalación: un instalador MSIX para Windows, un .dmg para macOS y apps de tienda para iOS y Android, todo enlazado desde la página de descargas de Mylio.',
          'Coste: descarga gratuita, con planes de pago Individual, Duo y Family y una prueba gratuita; los precios por tienda están en la nota de «Dónde conseguirlo».',
          'Alcance: una biblioteca de fotos con IA de imagen; el único chat que se encontró es un chatbot de ayuda en el Learn Panel, no un asistente de fotos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, las notas de versión, la ficha de la App Store y la política de privacidad de Mylio, revisados el 30 de octubre de 2026. PromptQuorum no ha instalado Mylio Photos, así que la calidad de la búsqueda, la velocidad y la precisión facial no están evaluadas.',
          },
          {
            type: 'note',
            text: 'La afirmación sobre la IA en el dispositivo procede de los textos de marketing y de las notas de versión de Mylio, no de una auditoría. La política de privacidad de Mylio, revisada por última vez el 14 de mayo de 2018, no describe ningún procesamiento de IA.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: '¿Qué es Mylio Photos?',
        content: [
          '**Mylio Photos es una app de biblioteca multimedia que reúne en una sola biblioteca las fotos, vídeos y documentos de móviles, ordenadores y discos y los sincroniza entre tus propios dispositivos.** Según Mylio, las funciones de IA (Dynamic Search sobre SmartTags que identifican más de 1000 actividades, objetos y propiedades, reconocimiento facial y reconocimiento de texto) se ejecutan en esos dispositivos y no en los servidores de Mylio. El sitio de Mylio indica macOS, Windows, iOS y Android.',
          'El creador es Mylio; la App Store indica a MyLo Development, LLC como vendedor. Dynamic Search y los SmartTags llegaron con la versión 24, anunciada el 30 de agosto de 2023, y las notas de la 24.7 (compilación 7878, 17 de diciembre de 2025) describen un canal de reconocimiento facial reescrito y nuevos modelos de OCR en todos los sistemas operativos. Mylio también vende planes Business y almacenamiento en la nube opcional (Mylio Drive+, con tecnología de Backblaze, y SecureCloud); esta reseña cubre el producto personal.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Mylio Photos se instala con doble clic en Windows y macOS y como app de tienda en iPhone, iPad y Android; después inicias sesión para que tus dispositivos se sincronicen.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[mylio.com](https://mylio.com/): presentación del producto, planes y descargas',
          },
          {
            'Opción': 'Windows',
            'Cómo conseguirlo': 'Instalador MSIX para x64 y otro distinto para ARM64, enlazados desde la [página de descargas](https://mylio.com/download/)',
          },
          {
            'Opción': 'Mac',
            'Cómo conseguirlo': 'Imagen de disco .dmg en la [página de descargas](https://mylio.com/download/)',
          },
          {
            'Opción': 'iPhone y iPad',
            'Cómo conseguirlo': '[Mylio Photos en la App Store](https://apps.apple.com/us/app/mylio-photos/id908787435): gratis con compras dentro de la app',
          },
          {
            'Opción': 'Android',
            'Cómo conseguirlo': '[Mylio Photos en Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio), enlazado desde la página de descargas',
          },
          {
            'Opción': 'Planes',
            'Cómo conseguirlo': '[Página de registro](https://mylio.com/signup-personal/): planes Individual, Duo y Family con prueba gratuita',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[Política de privacidad de Mylio](https://mylio.com/privacy/): revisada por última vez el 14 de mayo de 2018',
          },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'Ninguno: software propietario' },
        ],
        note: 'Versión revisada: Mylio Photos 24.8 (compilación 7904 para macOS e iOS, 7905 para Windows y Android). La App Store de España indica Mylio Premium a €29.00 al mes o €249.99 al año. La página de registro de Mylio muestra precios en dólares sin nombrar la moneda y un anuncio anterior de Mylio (2024) indica Mylio Photos+ a $119.99 al año, así que confirma el precio actual al pagar.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Mylio no publica requisitos mínimos de hardware; las fuentes solo indican los sistemas operativos compatibles y el requisito de iOS.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistemas operativos',
            'Qué dicen las fuentes': 'Windows (x64 y ARM64), macOS, iOS y iPadOS 13.0 o posterior, visionOS 1.0 o posterior, Android',
          },
          {
            Elemento: 'Versiones mínimas',
            'Qué dicen las fuentes': 'La página de descargas no indica una versión mínima de Windows, macOS ni Android',
          },
          {
            Elemento: 'Tamaño de la app',
            'Qué dicen las fuentes': 'La app de iOS ocupa 202.8 MB (ficha de la App Store de EE. UU.)',
          },
          {
            Elemento: 'Cuenta',
            'Qué dicen las fuentes': 'Los dispositivos se sincronizan mediante una cuenta de Mylio («devices signed into your account», notas de versión)',
          },
          {
            Elemento: 'Memoria, GPU, disco',
            'Qué dicen las fuentes': 'Las fuentes consultadas no publican requisitos de RAM, GPU ni espacio en disco',
          },
          { Elemento: 'Idiomas', 'Qué dicen las fuentes': 'La ficha de la App Store muestra solo inglés' },
        ],
        note: 'Estos datos proceden de la página de descargas de Mylio y de la ficha de la App Store de EE. UU.; PromptQuorum no midió el tiempo de indexación ni el uso de memoria.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la página de descargas y las notas de versión de Mylio; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Descarga la app',
            whyItMatters: 'Toma el MSIX para Windows o el .dmg para Mac de la página de descargas de Mylio, o instala la app de iOS o Android desde su tienda, y luego inicia sesión o crea una cuenta.',
          },
          {
            title: 'Añade tus orígenes',
            whyItMatters: 'El panel Guided Import añade carpetas, discos y cámaras y, desde la versión 24.0, una opción para sincronizar con otros dispositivos; según Mylio, cada imagen importada se escanea en tu dispositivo para detectar personas.',
          },
          {
            title: 'Etiqueta personas',
            whyItMatters: 'Revisa las propuestas de caras y pon nombre a las personas; las notas de la 24.7 mencionan el etiquetado de caras por lotes y un comando Rescan Faces.',
          },
          {
            title: 'Busca',
            whyItMatters: 'Escribe en Dynamic Search para encontrar fotos por palabra clave, SmartTag o texto reconocido; los SmartTags se pueden desactivar en el menú de búsqueda.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede del sitio web o de las notas de versión de Mylio; PromptQuorum no ha probado nada de ello.**',
        ],
        items: [
          '**Biblioteca.** Una biblioteca para fotos, vídeos y documentos en Windows, macOS, iOS y Android, con sincronización entre dispositivos.',
          '**Búsqueda.** Dynamic Search sobre palabras clave, SmartTags y texto reconocido, con resultados agrupados por lugar, personas, eventos y álbumes.',
          '**Personas.** Reconocimiento facial con propuestas y etiquetado por lotes.',
          '**Organización.** Álbumes, valoraciones, categorías, Spaces y flujos de trabajo; según las notas de versión, los Spaces Family, Work y Custom requieren un plan de pago o la prueba.',
          '**Edición y cámaras.** Herramientas de edición básicas como AutoTone y Levels, además de compatibilidad con RAW y DNG; la versión 24.8 añadió cámaras Sony.',
          '**Compartir.** Shared Albums y enlaces para compartir.',
        ],
        note: 'Las notas de versión listan las opciones de almacenamiento Mylio Drive+ y SecureCloud aparte de las funciones de IA; son extras de pago.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**La IA de Mylio es de imagen: etiqueta lo que hay en una foto, encuentra caras y lee texto para que puedas buscar; el único chat que se encontró es un chatbot de ayuda.**',
        ],
        items: [
          '**SmartTags y Dynamic Search.** Según Mylio, el aprendizaje automático etiqueta más de 1000 actividades, objetos y propiedades, y los resultados de búsqueda suelen aparecer en menos de dos segundos (ficha de la App Store).',
          '**Caras.** Según Mylio, cada imagen se «privately scanned on your own devices for recognizable people»; la versión 24.7 reescribió el canal para ganar velocidad y precisión.',
          '**Texto en imágenes.** Las notas de la 24.7 indican nuevos modelos de OCR en todos los sistemas operativos, y los resultados de Dynamic Search incluyen datos de OCR.',
          '**Chat del Learn Panel.** Las notas de la versión 24 describen un «GPT-powered chat within the Learn Panel» que busca en los recursos de ayuda de Mylio; Mylio no dice dónde se ejecuta ni qué envía.',
          '**Dónde se ejecuta.** Además de la afirmación de la App Store, la página de inicio de Mylio dice «organize media and run AI locally, no internet needed», y el comunicado de lanzamiento de 2023 dice que el índice de búsqueda se construye en el dispositivo del usuario.',
        ],
        note: 'Son declaraciones del propio Mylio. PromptQuorum no probó la relevancia de la búsqueda, la precisión facial, los idiomas del OCR ni la velocidad, y Mylio no nombra los modelos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Según las fuentes, tres cosas llegan a los servidores de Mylio o a terceros, y ninguna es procesamiento de IA.** Los dispositivos se sincronizan mediante una cuenta de Mylio. Mylio Drive+, una función de pago opcional, guarda copias optimizadas de tus archivos en servidores con tecnología de Backblaze, cifradas para que solo las lean los dispositivos con sesión iniciada en tu cuenta (notas de la 24.4). Los Shared Albums y los enlaces para compartir publican las fotos que elijas en páginas web alojadas por Mylio (comunicado de lanzamiento de 2023).',
          'La política de privacidad indica que se revisó por última vez el 14 de mayo de 2018. Enumera datos de cuenta, tu contenido y sus metadatos, datos de uso e identificadores de dispositivo, dice que la información puede almacenarse y procesarse en Estados Unidos u otros países, y no menciona la IA, el reconocimiento facial ni el procesamiento en el dispositivo. La etiqueta de privacidad de la App Store de EE. UU. enumera nombre, ID de dispositivo, ID de usuario y datos de fallos como vinculados a ti, para análisis y funcionamiento de la app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante y texto de una política, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red, así que no está verificado si el escaneo de caras o la búsqueda contactan alguna vez con un servidor.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas con fotos repartidas entre móviles, ordenadores y discos** que quieren una biblioteca sincronizada sin meterlo todo en un servicio de fotos en la nube.',
          '**Usuarios que quieren búsqueda de caras, objetos y texto** que, según Mylio, se ejecuta en sus propios dispositivos.',
          '**Hogares con varios usuarios:** los planes Duo y Family cubren a dos y a cinco personas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Dónde se ejecuta la IA.** Todas las afirmaciones sobre el dispositivo son del propio Mylio; no se indica dónde se ejecuta el chatbot del Learn Panel ni qué envía, y la política de privacidad no cubre la IA.',
          '**Calidad de la IA.** No se probaron la relevancia de la búsqueda, la precisión facial ni el reconocimiento de texto.',
          '**Plan gratuito.** Las notas de versión mencionan un plan gratuito, pero la página de registro actual lista planes de pago con prueba gratuita y no dice qué sigue siendo gratis.',
          '**Precio.** La página de registro no nombra su moneda, los precios difieren según la tienda y publicaciones anteriores de Mylio indican cifras más bajas.',
          '**Mínimos.** Las fuentes consultadas no publican una versión mínima de Windows, macOS ni Android, ni requisitos de RAM o almacenamiento.',
          '**Google Play.** No se pudo leer la ficha de Play, así que su etiqueta de seguridad de datos y los precios en Android no están cubiertos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio tiene otras cuatro reseñas de bibliotecas de fotos; se diferencian sobre todo en si ejecutas un servidor, pagas una sola vez o usas almacenamiento en la nube cifrado.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Excire Foto](/es/power-local-llm/excire-foto-review)',
            Plataformas: 'Windows, Mac',
            'Precio / licencia': 'Pago único / Código cerrado',
            'Diferencia clave': 'Gestor de escritorio con búsqueda por IA local, según Excire; solo Windows y Mac',
          },
          {
            App: '[Ente Photos](/es/power-local-llm/ente-photos-review)',
            Plataformas: 'iOS, Android, escritorio, web',
            'Precio / licencia': 'Gratis 10 GB, planes de pago / AGPL-3.0',
            'Diferencia clave': 'Almacenamiento en la nube cifrado con IA en el dispositivo; código abierto',
          },
          {
            App: '[Immich](/es/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), apps móviles, navegador',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Servidor autoalojado con copia de seguridad del móvil; requiere Docker',
          },
          {
            App: '[PhotoPrism](/es/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Precio / licencia': 'Gratis Community / AGPL-3.0',
            'Diferencia clave': 'App web autoalojada con etiquetas de IA integradas',
          },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Mylio Photos es un LLM local?',
            a: 'No. Las fuentes describen etiquetado de imágenes, reconocimiento de caras y de texto, y un chatbot de ayuda en el Learn Panel; ninguna describe un modelo de lenguaje local.',
          },
          {
            q: '¿Mylio Photos funciona sin conexión?',
            a: 'La página de inicio de Mylio dice que puedes «run AI locally, no internet needed» y buscar «even offline»; no indica excepciones, y el inicio de sesión, la sincronización y el chat de ayuda necesitan lógicamente conexión.',
          },
          {
            q: '¿Cuánto cuesta Mylio Photos?',
            a: 'La descarga es gratuita y los planes de pago son suscripciones; los precios por tienda están en la nota de «Dónde conseguirlo». La página de registro de Mylio también muestra una garantía de devolución de 30 días.',
          },
          {
            q: '¿Puedo probarlo antes de pagar?',
            a: 'Sí: la página de registro ofrece «Free Trial + Gift» y dice que hoy no se te cobrará. No se indica la duración de la prueba.',
          },
          {
            q: '¿Mylio envía mis fotos a la nube?',
            a: 'Según Mylio, no para la IA. El almacenamiento opcional Mylio Drive+ y los Shared Albums sí guardan o publican archivos en servidores, como se describe en «Flujo de datos y privacidad».',
          },
          {
            q: '¿Se sigue manteniendo el proyecto?',
            a: 'Con las pruebas disponibles, sí: las notas de versión de Mylio listan compilaciones de la 24.8 el 28 de julio, el 11 de agosto, el 6 de octubre y el 8 de octubre de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Mylio Photos es una biblioteca de fotos multidispositivo de código cerrado cuyo creador afirma que la búsqueda con SmartTags, el reconocimiento facial y el reconocimiento de texto se ejecutan en tus propios dispositivos, con descarga gratuita y suscripciones para los planes de pago. En contra: la afirmación es del propio fabricante, no se indica dónde se ejecuta el chatbot de ayuda, la política de privacidad es de 2018 y no cubre la IA, el almacenamiento en la nube opcional y los álbumes compartidos usan servidores de Mylio, el alcance del plan gratuito no está claro y PromptQuorum no probó la app. Encaja con personas que tienen fotos en varios dispositivos, quieren una biblioteca sincronizada y aceptan lo que dice el fabricante; quien necesite un procesamiento sin conexión verificado o código abierto debería mirar las alternativas autoalojadas.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de inicio de Mylio Photos](https://mylio.com/) — plataformas, planes y descripción de las funciones de IA, revisada el 30 de octubre de 2026.',
          '[Página de descargas de Mylio](https://mylio.com/download/) — instaladores y enlaces de tienda, revisada el 30 de octubre de 2026.',
          '[Página de registro de Mylio](https://mylio.com/signup-personal/) — planes y precios, revisada el 30 de octubre de 2026.',
          '[Registro de cambios y notas de versión de Mylio](https://support.mylio.com/change-log-and-release-notes) — versiones 24.7 y 24.8 con fechas de compilación, revisado el 30 de octubre de 2026.',
          '[Notas de versión de Mylio para la versión 24](https://support.mylio.com/version-24-release-notes) — Dynamic Search, escaneo de caras, chat del Learn Panel y Mylio Drive+, revisadas el 30 de octubre de 2026.',
          '[Política de privacidad de Mylio](https://mylio.com/privacy/) — datos recopilados y lugares de procesamiento, revisada el 14 de mayo de 2018.',
          '[Mylio Photos en la App Store de EE. UU.](https://apps.apple.com/us/app/mylio-photos/id908787435) — versión 24.8.7904, compras dentro de la app, afirmación sobre la IA y etiqueta de privacidad, revisada el 30 de octubre de 2026.',
          '[Comunicado de lanzamiento de la versión 24 de Mylio](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags, índice de búsqueda local y Shared Albums, publicado el 30 de agosto de 2023.',
          '[Anuncio de precios de Mylio](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — precios de Mylio Photos+ en 2024.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Excire Foto](/es/power-local-llm/excire-foto-review) — un gestor de fotos de escritorio de código cerrado con búsqueda por IA local.',
          '[Reseña de Ente Photos](/es/power-local-llm/ente-photos-review) — copia de seguridad de fotos cifrada con búsqueda de caras y en lenguaje natural en el dispositivo.',
          '[Reseña de Immich](/es/power-local-llm/immich-review) — una biblioteca de fotos autoalojada con copia de seguridad del móvil y búsqueda inteligente.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-fr.webp',
    title: 'Test de Mylio Photos : bibliothèque de photos multi-appareils avec recherche IA sur l’appareil',
    seoTitle: 'Test de Mylio Photos : app photo multi-appareils, IA',
    intro: 'Mylio Photos est une bibliothèque de photos, de vidéos et de documents à code fermé pour Windows, macOS, iOS et Android, qui synchronise vos fichiers entre vos propres appareils et dont les outils d’IA (recherche par SmartTags, reconnaissance des visages et reconnaissance de texte) s’exécutent, selon Mylio, sur ces appareils. Le téléchargement est gratuit, les offres payantes sont des abonnements, et un stockage cloud chiffré est proposé en option. Ce test reprend le site web, les notes de version, la fiche App Store et la politique de confidentialité de Mylio tels qu’ils ont été vérifiés le 30 octobre 2026 ; la version actuelle est la 24.8.',
    metaDescription: 'Test de Mylio Photos : photothèque pour Windows, Mac, iPhone et Android. Selon Mylio, la recherche IA et l’analyse des visages tournent sur vos appareils.',
    twitterDescription: 'Test de Mylio Photos : une bibliothèque de photos multi-appareils dont la recherche IA et la reconnaissance des visages et du texte s’exécutent sur vos appareils, selon Mylio. Offres, flux de données et points non vérifiés.',
    audience: 'Les personnes dont les photos sont réparties entre téléphones, ordinateurs et disques, qui veulent une bibliothèque synchronisée avec recherche par IA et doivent savoir ce que les sources confirment sur l’endroit où l’IA s’exécute, le prix des offres et ce qui quitte l’appareil.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test mylio photos',
    targetKeywords: [
      'test mylio photos',
      'mylio photos 24.8',
      'application bibliothèque photo recherche ia hors ligne',
      'gestionnaire de photos reconnaissance faciale sur l’appareil',
      'synchroniser des photos entre appareils sans cloud',
      'alternative privée à google photos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos est une bibliothèque de photos à code fermé pour Windows, macOS, iOS et Android dont les outils d’IA (recherche par SmartTags, reconnaissance des visages et reconnaissance de texte) s’exécutent, selon Mylio, sur vos propres appareils.** La version 24.8 a été mise à jour pour la dernière fois le 8 octobre 2026. Le téléchargement est gratuit, les offres payantes sont des abonnements, et Mylio n’indique pas où s’exécute le chatbot d’aide de l’application.',
    quickAnswerTop: {
      fr: {
        question: 'Mylio Photos exécute-t-il son IA sur vos propres appareils ?',
        answer: 'Selon Mylio, oui : sa fiche App Store indique « every one of our AI tools runs exclusively on your local devices » et ses notes de version indiquent que les visages sont « privately scanned on your own devices ». Mylio n’indique pas où s’exécute le chat d’aide du Learn Panel, sa politique de confidentialité date de 2018 et ne mentionne pas l’IA, et le stockage optionnel Mylio Drive+ ainsi que les Shared Albums utilisent des serveurs de Mylio. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Code fermé ; téléchargement gratuit, avec Mylio Premium à 29,00 € par mois ou 249,99 € par an sur l’App Store français.',
          'Windows (x64 et ARM64), macOS, iOS, iPadOS et Android ; les installateurs Windows et Mac sont des téléchargements directs depuis mylio.com.',
          'Fonctions : une bibliothèque synchronisée, Dynamic Search sur mots-clés, SmartTags et texte reconnu, identification des visages, albums, partage et retouche de base.',
          'Version 24.8 : build 7905 pour Windows et Android le 8 octobre 2026, build 7904 pour macOS et iOS le 6 octobre 2026.',
          'Non testé par PromptQuorum : la qualité de la recherche, la précision faciale et l’OCR ne sont pas évaluées.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’Mylio Photos ?', anchor: 'what-is-mylio-photos' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions principales', anchor: 'key-features' },
      { label: 'Fonctions d’IA et où elles s’exécutent', anchor: 'ai-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui il s’adresse', anchor: 'who-should-use' },
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
            text: 'Mylio Photos est une bibliothèque de photos, de vidéos et de documents à code fermé pour Windows, macOS, iOS et Android qui synchronise vos fichiers entre vos appareils et, selon son éditeur, les étiquette, les recherche et les regroupe grâce à une IA exécutée sur ces appareils.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez sur chaque appareil, vous vous connectez pour qu’ils se synchronisent et vous laissez analyser vos photos une fois ; selon Mylio, rien n’est envoyé à ses serveurs pour l’IA, mais le stockage cloud et les albums partagés sont des fonctions optionnelles qui utilisent bien des serveurs.',
          },
        ],
        items: [
          'Maintenance : la version 24.8 a reçu quatre builds depuis le 28 juillet 2026, le plus récent le 8 octobre 2026 ; aucun avertissement de projet obsolète ne s’applique donc.',
          'Éditeur : Mylio ; l’App Store indique MyLo Development, LLC comme vendeur.',
          'Installation : un installateur MSIX pour Windows, un .dmg pour macOS et des applications de store pour iOS et Android, tous liés depuis la page de téléchargement de Mylio.',
          'Coût : téléchargement gratuit, avec des offres payantes Individual, Duo et Family et un essai gratuit ; les prix par store figurent dans la note de « Où l’obtenir ».',
          'Périmètre : une bibliothèque de photos avec IA d’image ; le seul chat trouvé est un chatbot d’aide dans le Learn Panel, pas un assistant photo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur le site web, les notes de version, la fiche App Store et la politique de confidentialité de Mylio, vérifiés le 30 octobre 2026. PromptQuorum n’a pas installé Mylio Photos : la qualité de la recherche, la vitesse et la précision faciale ne sont donc pas évaluées.',
          },
          {
            type: 'note',
            text: 'L’affirmation sur l’IA exécutée sur l’appareil provient des textes marketing et des notes de version de Mylio, pas d’un audit. La politique de confidentialité de Mylio, révisée pour la dernière fois le 14 mai 2018, ne décrit aucun traitement par IA.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'Qu’est-ce qu’Mylio Photos ?',
        content: [
          '**Mylio Photos est une application de bibliothèque multimédia qui réunit dans une seule bibliothèque les photos, vidéos et documents de téléphones, d’ordinateurs et de disques et les synchronise entre vos propres appareils.** Selon Mylio, les fonctions d’IA (Dynamic Search sur des SmartTags qui identifient plus de 1 000 activités, objets et propriétés, reconnaissance des visages et reconnaissance de texte) s’exécutent sur ces appareils et non sur les serveurs de Mylio. Le site de Mylio indique macOS, Windows, iOS et Android.',
          'L’éditeur est Mylio ; l’App Store indique MyLo Development, LLC comme vendeur. Dynamic Search et les SmartTags sont arrivés avec la version 24, annoncée le 30 août 2023, et les notes de la 24.7 (build 7878, 17 décembre 2025) mentionnent un pipeline de reconnaissance des visages remanié et de nouveaux modèles d’OCR sur tous les systèmes d’exploitation. Mylio vend aussi des offres Business et un stockage cloud optionnel (Mylio Drive+, propulsé par Backblaze, et SecureCloud) ; ce test porte sur le produit personnel.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Mylio Photos s’installe d’un double-clic sous Windows et macOS et comme application de store sur iPhone, iPad et Android ; vous vous connectez ensuite pour que vos appareils se synchronisent.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'Site web',
            'Comment l’obtenir': '[mylio.com](https://mylio.com/) : présentation du produit, offres et téléchargements',
          },
          {
            Option: 'Windows',
            'Comment l’obtenir': 'Installateur MSIX pour x64 et un autre pour ARM64, liés depuis la [page de téléchargement](https://mylio.com/download/)',
          },
          {
            Option: 'Mac',
            'Comment l’obtenir': 'Image disque .dmg sur la [page de téléchargement](https://mylio.com/download/)',
          },
          {
            Option: 'iPhone et iPad',
            'Comment l’obtenir': '[Mylio Photos sur l’App Store](https://apps.apple.com/us/app/mylio-photos/id908787435) : gratuit avec achats intégrés',
          },
          {
            Option: 'Android',
            'Comment l’obtenir': '[Mylio Photos sur Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio), lié depuis la page de téléchargement',
          },
          {
            Option: 'Offres',
            'Comment l’obtenir': '[Page d’inscription](https://mylio.com/signup-personal/) : offres Individual, Duo et Family avec essai gratuit',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[Politique de confidentialité de Mylio](https://mylio.com/privacy/) : révisée pour la dernière fois le 14 mai 2018',
          },
          { Option: 'Code source', 'Comment l’obtenir': 'Aucun : logiciel propriétaire' },
        ],
        note: 'Version testée : Mylio Photos 24.8 (build 7904 pour macOS et iOS, build 7905 pour Windows et Android). L’App Store français indique Mylio Premium à 29,00 € par mois ou 249,99 € par an. La page d’inscription de Mylio affiche des prix en dollars sans nommer la devise, et une annonce plus ancienne de Mylio (2024) indique Mylio Photos+ à 119,99 $ par an ; confirmez donc le prix actuel au moment du paiement.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Mylio ne publie aucune configuration minimale ; les sources n’indiquent que les systèmes d’exploitation pris en charge et la condition requise pour iOS.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Systèmes d’exploitation',
            'Ce que disent les sources': 'Windows (x64 et ARM64), macOS, iOS et iPadOS 13.0 ou ultérieur, visionOS 1.0 ou ultérieur, Android',
          },
          {
            'Élément': 'Versions minimales',
            'Ce que disent les sources': 'La page de téléchargement n’indique aucune version minimale de Windows, macOS ou Android',
          },
          {
            'Élément': 'Taille de l’app',
            'Ce que disent les sources': 'L’application iOS pèse 202.8 Mo (fiche App Store américaine)',
          },
          {
            'Élément': 'Compte',
            'Ce que disent les sources': 'Les appareils se synchronisent via un compte Mylio (« devices signed into your account », notes de version)',
          },
          {
            'Élément': 'Mémoire, GPU, disque',
            'Ce que disent les sources': 'Aucune exigence de RAM, de GPU ou d’espace disque n’est publiée dans les sources lues',
          },
          { 'Élément': 'Langues', 'Ce que disent les sources': 'La fiche App Store n’indique que l’anglais' },
        ],
        note: 'Ces informations proviennent de la page de téléchargement de Mylio et de la fiche App Store américaine ; PromptQuorum n’a mesuré ni le temps d’indexation ni l’utilisation de la mémoire.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent la page de téléchargement et les notes de version de Mylio ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger l’application',
            whyItMatters: 'Prenez le MSIX pour Windows ou le .dmg pour Mac sur la page de téléchargement de Mylio, ou installez l’application iOS ou Android depuis son store, puis connectez-vous ou créez un compte.',
          },
          {
            title: 'Ajouter vos sources',
            whyItMatters: 'Le panneau Guided Import ajoute des dossiers, des disques et des appareils photo et, depuis la version 24.0, une option de synchronisation avec d’autres appareils ; selon Mylio, chaque image importée est analysée sur votre appareil pour y repérer des personnes.',
          },
          {
            title: 'Identifier les personnes',
            whyItMatters: 'Examinez les suggestions de visages et nommez les personnes ; les notes de la 24.7 mentionnent l’identification de visages par lots et une commande Rescan Faces.',
          },
          {
            title: 'Rechercher',
            whyItMatters: 'Saisissez votre requête dans Dynamic Search pour trouver des photos par mot-clé, SmartTag ou texte reconnu ; les SmartTags peuvent être désactivés dans le menu de recherche.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Chaque élément ci-dessous provient du site web ou des notes de version de Mylio ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Bibliothèque.** Une bibliothèque pour photos, vidéos et documents sous Windows, macOS, iOS et Android, avec synchronisation d’appareil à appareil.',
          '**Recherche.** Dynamic Search sur mots-clés, SmartTags et texte reconnu, avec des résultats regroupés par lieu, personnes, événements et albums.',
          '**Personnes.** Reconnaissance des visages avec suggestions et identification par lots.',
          '**Organisation.** Albums, notes, catégories, Spaces et flux de travail ; selon les notes de version, les Spaces Family, Work et Custom exigent une offre payante ou l’essai.',
          '**Retouche et appareils photo.** Outils de retouche de base comme AutoTone et Levels, ainsi que la prise en charge des formats RAW et DNG ; la version 24.8 a ajouté des appareils Sony.',
          '**Partage.** Shared Albums et liens de partage.',
        ],
        note: 'Les notes de version présentent les options de stockage Mylio Drive+ et SecureCloud séparément des fonctions d’IA ; ce sont des extras payants.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**L’IA de Mylio travaille sur l’image : elle étiquette le contenu d’une photo, repère les visages et lit le texte pour que vous puissiez chercher ; le seul chat trouvé est un chatbot d’aide.**',
        ],
        items: [
          '**SmartTags et Dynamic Search.** Selon Mylio, l’apprentissage automatique étiquette plus de 1 000 activités, objets et propriétés, et les résultats de recherche apparaissent en général en moins de deux secondes (fiche App Store).',
          '**Visages.** Selon Mylio, chaque image est « privately scanned on your own devices for recognizable people » ; la version 24.7 a remanié le pipeline pour gagner en vitesse et en précision.',
          '**Texte dans les images.** Les notes de la 24.7 indiquent de nouveaux modèles d’OCR sur tous les systèmes d’exploitation, et les résultats de Dynamic Search incluent des données d’OCR.',
          '**Chat du Learn Panel.** Les notes de la version 24 décrivent un « GPT-powered chat within the Learn Panel » qui parcourt les ressources d’aide de Mylio ; Mylio n’indique ni où il s’exécute ni ce qu’il envoie.',
          '**Où elle s’exécute.** Outre l’affirmation de l’App Store, la page d’accueil de Mylio dit « organize media and run AI locally, no internet needed », et le communiqué de lancement de 2023 indique que l’index de recherche est construit sur l’appareil de l’utilisateur.',
        ],
        note: 'Ce sont des déclarations de Mylio lui-même. PromptQuorum n’a pas testé la pertinence de la recherche, la précision faciale, les langues de l’OCR ni la vitesse, et Mylio ne nomme pas les modèles.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**D’après les sources, trois éléments atteignent les serveurs de Mylio ou des tiers, et aucun n’est un traitement par IA.** Les appareils se synchronisent via un compte Mylio. Mylio Drive+, une fonction payante optionnelle, stocke des copies optimisées de vos fichiers sur des serveurs propulsés par Backblaze, chiffrées de sorte que seuls les appareils connectés à votre compte puissent les lire (notes de la 24.4). Les Shared Albums et les liens de partage publient les photos que vous choisissez sur des pages web hébergées par Mylio (communiqué de lancement de 2023).',
          'La politique de confidentialité indique avoir été révisée pour la dernière fois le 14 mai 2018. Elle énumère les données de compte, votre contenu et ses métadonnées, les données d’usage et les identifiants d’appareil, précise que les informations peuvent être stockées et traitées aux États-Unis ou dans d’autres pays, et ne mentionne ni l’IA, ni la reconnaissance des visages, ni le traitement sur l’appareil. L’étiquette de confidentialité de l’App Store américain classe le nom, l’identifiant d’appareil, l’identifiant utilisateur et les données de plantage comme liés à vous, pour l’analyse et le fonctionnement de l’application.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur et le texte d’une politique, pas des résultats d’audit. PromptQuorum n’a pas inspecté le trafic réseau : on ne sait donc pas si l’analyse des visages ou la recherche contactent un jour un serveur.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les personnes dont les photos sont réparties entre téléphones, ordinateurs et disques** et qui veulent une bibliothèque synchronisée sans tout confier à un service de photos en ligne.',
          '**Les utilisateurs qui veulent une recherche par visages, objets et texte** qui, selon Mylio, s’exécute sur leurs propres appareils.',
          '**Les foyers à plusieurs utilisateurs :** les offres Duo et Family couvrent deux et cinq personnes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Lieu d’exécution de l’IA.** Toute affirmation sur l’exécution sur l’appareil vient de Mylio lui-même ; l’endroit où s’exécute le chatbot du Learn Panel et ce qu’il envoie ne sont pas indiqués, et la politique de confidentialité ne couvre pas l’IA.',
          '**Qualité de l’IA.** La pertinence de la recherche, la précision faciale et la reconnaissance de texte n’ont pas été testées.',
          '**Offre gratuite.** Les notes de version évoquent une offre gratuite, mais la page d’inscription actuelle liste des offres payantes avec essai gratuit et n’indique pas ce qui reste gratuit.',
          '**Prix.** La page d’inscription ne nomme pas sa devise, les prix diffèrent selon le store et d’anciens billets de Mylio indiquent des montants plus bas.',
          '**Minimums.** Aucune version minimale de Windows, macOS ou Android, ni aucune exigence de RAM ou de stockage, n’est publiée dans les sources lues.',
          '**Google Play.** La fiche Play n’a pas pu être lue : son étiquette de sécurité des données et les prix sur Android ne sont donc pas couverts.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'L’annuaire compte quatre autres tests de bibliothèques de photos ; ils diffèrent surtout selon que vous gérez un serveur, payez une seule fois ou utilisez un stockage cloud chiffré.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Excire Foto](/fr/power-local-llm/excire-foto-review)',
            Plateformes: 'Windows, Mac',
            'Prix / licence': 'Achat unique / Code fermé',
            'Différence clé': 'Gestionnaire de bureau avec recherche IA locale, selon Excire ; Windows et Mac uniquement',
          },
          {
            Application: '[Ente Photos](/fr/power-local-llm/ente-photos-review)',
            Plateformes: 'iOS, Android, bureau, web',
            'Prix / licence': 'Gratuit 10 Go, offres payantes / AGPL-3.0',
            'Différence clé': 'Stockage cloud chiffré avec IA sur l’appareil ; open source',
          },
          {
            Application: '[Immich](/fr/power-local-llm/immich-review)',
            Plateformes: 'Serveur (Docker), apps mobiles, navigateur',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Serveur auto-hébergé avec sauvegarde du téléphone ; installation via Docker',
          },
          {
            Application: '[PhotoPrism](/fr/power-local-llm/photoprism-review)',
            Plateformes: 'Serveur (Docker), navigateur',
            'Prix / licence': 'Gratuit Community / AGPL-3.0',
            'Différence clé': 'Application web auto-hébergée avec étiquettes IA intégrées',
          },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Mylio Photos est-il un LLM local ?',
            a: 'Non. Les sources décrivent l’étiquetage d’images, la reconnaissance des visages et du texte, et un chatbot d’aide dans le Learn Panel ; aucune ne décrit un modèle de langage local.',
          },
          {
            q: 'Mylio Photos fonctionne-t-il hors ligne ?',
            a: 'La page d’accueil de Mylio dit que l’on peut « run AI locally, no internet needed » et chercher « even offline » ; elle n’indique aucune exception, et la connexion, la synchronisation et le chat d’aide exigent naturellement une connexion.',
          },
          {
            q: 'Combien coûte Mylio Photos ?',
            a: 'Le téléchargement est gratuit et les offres payantes sont des abonnements ; les prix par store figurent dans la note de « Où l’obtenir ». La page d’inscription de Mylio affiche aussi une garantie de remboursement de 30 jours.',
          },
          {
            q: 'Puis-je l’essayer avant de payer ?',
            a: 'Oui : la page d’inscription propose « Free Trial + Gift » et indique que rien ne sera débité aujourd’hui. La durée de l’essai n’est pas précisée.',
          },
          {
            q: 'Mylio envoie-t-il mes photos dans le cloud ?',
            a: 'Pas pour l’IA, selon Mylio. Le stockage optionnel Mylio Drive+ et les Shared Albums stockent ou publient en revanche des fichiers sur des serveurs, comme décrit dans « Flux de données et confidentialité ».',
          },
          {
            q: 'Le projet est-il toujours maintenu ?',
            a: 'D’après les éléments disponibles, oui : les notes de version de Mylio listent des builds de la 24.8 les 28 juillet, 11 août, 6 octobre et 8 octobre 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Mylio Photos est une bibliothèque de photos multi-appareils à code fermé dont l’éditeur affirme que la recherche par SmartTags, la reconnaissance des visages et la reconnaissance de texte s’exécutent sur vos propres appareils, avec un téléchargement gratuit et des abonnements pour les offres payantes. En face : l’affirmation vient de l’éditeur lui-même, l’endroit où s’exécute le chatbot d’aide n’est pas indiqué, la politique de confidentialité date de 2018 et ne couvre pas l’IA, le stockage cloud optionnel et les albums partagés utilisent les serveurs de Mylio, l’étendue de l’offre gratuite est floue et PromptQuorum n’a pas testé l’application. Elle convient aux personnes dont les photos sont sur plusieurs appareils, qui veulent une bibliothèque synchronisée et acceptent la déclaration de l’éditeur ; qui a besoin d’un traitement hors ligne vérifié ou d’un logiciel open source devrait regarder les alternatives auto-hébergées.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page d’accueil de Mylio Photos](https://mylio.com/) — plateformes, offres et description des fonctions d’IA, vérifiée le 30 octobre 2026.',
          '[Page de téléchargement de Mylio](https://mylio.com/download/) — installateurs et liens de store, vérifiée le 30 octobre 2026.',
          '[Page d’inscription de Mylio](https://mylio.com/signup-personal/) — offres et prix, vérifiée le 30 octobre 2026.',
          '[Journal des modifications et notes de version de Mylio](https://support.mylio.com/change-log-and-release-notes) — versions 24.7 et 24.8 avec dates de build, vérifié le 30 octobre 2026.',
          '[Notes de version de Mylio pour la version 24](https://support.mylio.com/version-24-release-notes) — Dynamic Search, analyse des visages, chat du Learn Panel et Mylio Drive+, vérifiées le 30 octobre 2026.',
          '[Politique de confidentialité de Mylio](https://mylio.com/privacy/) — données collectées et lieux de traitement, révisée le 14 mai 2018.',
          '[Mylio Photos sur l’App Store américain](https://apps.apple.com/us/app/mylio-photos/id908787435) — version 24.8.7904, achats intégrés, affirmation sur l’IA et étiquette de confidentialité, vérifiés le 30 octobre 2026.',
          '[Communiqué de lancement de la version 24 de Mylio](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags, index de recherche local et Shared Albums, publié le 30 août 2023.',
          '[Annonce de prix de Mylio](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — prix de Mylio Photos+ en 2024.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Excire Foto](/fr/power-local-llm/excire-foto-review) — un gestionnaire de photos de bureau à code fermé avec recherche IA locale.',
          '[Test d’Ente Photos](/fr/power-local-llm/ente-photos-review) — sauvegarde de photos chiffrée avec recherche de visages et en langage naturel sur l’appareil.',
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une bibliothèque de photos auto-hébergée avec sauvegarde du téléphone et recherche intelligente.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-ja.webp',
    title: 'Mylio Photosレビュー：端末内AI検索に対応したマルチデバイス写真ライブラリ',
    seoTitle: 'Mylio Photosレビュー：複数端末の写真管理とAI検索',
    intro: 'Mylio Photosは、Windows・macOS・iOS・Android向けのクローズドソースの写真・動画・書類ライブラリで、自分の端末同士でファイルを同期します。Mylioによると、AIツール（SmartTag検索、顔認識、文字認識）はそれらの端末上で動作します。ダウンロードは無料で、有料プランはサブスクリプション制です。暗号化されたクラウドストレージもオプションで利用できます。このレビューは、2026年10月30日に確認したMylioのウェブサイト、リリースノート、App Storeの掲載情報、プライバシーポリシーに基づいており、現在のリリースはバージョン24.8です。',
    metaDescription: 'Mylio Photosのレビュー。Windows・Mac・iPhone・Android向けのクローズドソース写真ライブラリで、Mylioによれば、AI検索と顔スキャンは端末上で動作します。',
    twitterDescription: 'Mylio Photosのレビュー：AI検索、顔認識、文字認識が端末上で動作するとMylioが説明する、マルチデバイス対応の写真ライブラリ。プラン、データの流れ、確認できなかった点。',
    audience: '写真がスマートフォン、パソコン、外付けドライブに散らばっていて、AI検索付きの同期ライブラリを探している方。AIがどこで動くのか、プランの料金、端末の外に出るデータは何かについて、情報源が何を確認しているかを知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'mylio photos レビュー',
    targetKeywords: ['mylio photos レビュー', 'mylio photos 24.8', '写真ライブラリ アプリ オフライン AI検索', '写真管理 顔認識 端末内', 'クラウドなし 写真 端末間同期', 'google フォト 代替 プライバシー'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photosは、Windows・macOS・iOS・Android向けのクローズドソースの写真ライブラリで、Mylioによれば、AIツール（SmartTag検索、顔認識、文字認識）はお使いの端末上で動作します。** バージョン24.8の最終更新は2026年10月8日です。ダウンロードは無料で、有料プランはサブスクリプション制です。アプリ内のヘルプ用チャットボットがどこで動くかについては、Mylioは明記していません。',
    quickAnswerTop: {
      ja: {
        question: 'Mylio PhotosはAIをお使いの端末上で実行しますか？',
        answer: 'Mylioによれば、はい。App Storeの掲載には「every one of our AI tools runs exclusively on your local devices」とあり、リリースノートには顔が「privately scanned on your own devices」と書かれています。一方、Learn PanelのGPT搭載ヘルプチャットがどこで動くかはMylioから示されておらず、プライバシーポリシーは2018年のもので、AIには触れていません。また、オプションのMylio Drive+ストレージとShared AlbumsはMylioのサーバーを使います。PromptQuorumはネットワーク通信を検査していません。',
        bullets: [
          'クローズドソースで、ダウンロードは無料です。日本のApp StoreではMylio Premiumが月額¥4,000、年額¥40,000です。',
          'Windows（x64とARM64）、macOS、iOS、iPadOS、Android。WindowsとMac用インストーラーはmylio.comから直接ダウンロードできます。',
          '主な機能：同期される1つのライブラリ、キーワード・SmartTag・認識した文字を対象にしたDynamic Search、顔のタグ付け、アルバム、共有、基本的な編集。',
          'バージョン24.8：WindowsとAndroidはビルド7905（2026年10月8日）、macOSとiOSはビルド7904（2026年10月6日）。',
          'PromptQuorumは未検証：検索品質、顔認識の精度、OCRの結果は評価していません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Mylio Photosとは', anchor: 'what-is-mylio-photos' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '主な機能', anchor: 'key-features' },
      { label: 'AI機能と実行場所', anchor: 'ai-features' },
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
            text: 'Mylio Photosは、Windows・macOS・iOS・Android向けのクローズドソースの写真・動画・書類ライブラリで、端末間でファイルを同期し、開発元によれば、それらの端末上で動くAIでタグ付け・検索・グループ化を行います。',
          },
          {
            type: 'plain-terms',
            text: '各端末にインストールしてサインインすると同期され、写真は最初に一度スキャンされます。MylioはAI処理のために自社サーバーへ何も送らないと説明していますが、クラウドストレージと共有アルバムはサーバーを使うオプション機能です。',
          },
        ],
        items: [
          'メンテナンス：バージョン24.8は2026年7月28日以降に4回のビルドがあり、最新は2026年10月8日のため、更新停止の警告は該当しません。',
          '開発元：Mylio。App Storeの販売元はMyLo Development, LLCと表示されています。',
          'セットアップ：Windows用はMSIXインストーラー、macOS用は.dmg、iOSとAndroidはストアアプリで、いずれもMylioのダウンロードページからリンクされています。',
          '費用：ダウンロードは無料。有料のIndividual・Duo・Familyプランと無料トライアルがあり、ストアごとの価格は「入手方法」の注記にあります。',
          '範囲：画像AIを備えた写真ライブラリです。見つかったチャット機能はLearn Panelのヘルプ用チャットボットだけで、写真アシスタントではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月30日に確認したMylioのウェブサイト、リリースノート、App Storeの掲載情報、プライバシーポリシーに基づいています。PromptQuorumはMylio Photosをインストールしていないため、検索品質、速度、顔認識の精度は評価していません。',
          },
          {
            type: 'note',
            text: '端末内AIに関する記述は、Mylio自身のマーケティング文とリリースノートの文言であり、監査結果ではありません。2018年5月14日に最終改訂されたMylioのプライバシーポリシーには、AI処理の説明がありません。',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'Mylio Photosとは',
        content: [
          '**Mylio Photosは、スマートフォン、パソコン、ドライブにある写真・動画・書類を1つのライブラリにまとめ、自分の端末同士で同期するメディアライブラリアプリです。** Mylioによると、AI機能（1,000以上のアクティビティ・物体・属性を識別するSmartTagに基づくDynamic Search、顔認識、文字認識）はMylioのサーバーではなく、それらの端末上で動作します。Mylioのサイトに記載されている対応OSはmacOS、Windows、iOS、Androidです。',
          '開発元はMylioで、App Storeの販売元はMyLo Development, LLCです。Dynamic SearchとSmartTagは2023年8月30日に発表されたバージョン24で登場しました。24.7のリリースノート（ビルド7878、2025年12月17日）には、顔認識パイプラインの刷新と、全OS向けの新しいOCRモデルが記載されています。Mylioはビジネス向けプランやオプションのクラウドストレージ（Backblazeを基盤とするMylio Drive+とSecureCloud）も販売していますが、このレビューは個人向け製品を対象にしています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Mylio PhotosはWindowsとmacOSではダブルクリックでインストールでき、iPhone・iPad・Androidではストアアプリとして入手します。その後サインインすると端末同士が同期されます。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'ウェブサイト', '入手方法': '[mylio.com](https://mylio.com/)：製品概要、プラン、ダウンロード' },
          {
            '項目': 'Windows',
            '入手方法': 'x64用とARM64用の別々のMSIXインストーラー。[ダウンロードページ](https://mylio.com/download/)からリンクされています',
          },
          { '項目': 'Mac', '入手方法': '[ダウンロードページ](https://mylio.com/download/)の.dmgディスクイメージ' },
          {
            '項目': 'iPhone・iPad',
            '入手方法': '[App StoreのMylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435)：無料、アプリ内課金あり',
          },
          {
            '項目': 'Android',
            '入手方法': '[Google PlayのMylio Photos](https://play.google.com/store/apps/details?id=com.myliollc.mylio)。ダウンロードページからリンクされています',
          },
          {
            '項目': 'プラン',
            '入手方法': '[登録ページ](https://mylio.com/signup-personal/)：Individual・Duo・Familyプランと無料トライアル',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[Mylioのプライバシーポリシー](https://mylio.com/privacy/)：最終改訂は2018年5月14日',
          },
          { '項目': 'ソースコード', '入手方法': 'なし：プロプライエタリソフトウェア' },
        ],
        note: '確認したバージョン：Mylio Photos 24.8（macOSとiOSはビルド7904、WindowsとAndroidはビルド7905）。日本のApp StoreではMylio Premiumが月額¥4,000、年額¥40,000と表示されています。Mylioの登録ページは通貨名を示さずにドル建ての価格を表示しており、以前のMylioの告知（2024年）ではMylio Photos+が年額$119.99とされていたため、現在の価格は購入時にご確認ください。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**Mylioはハードウェアの最小要件を公開しておらず、情報源にあるのは対応OSとiOSの要件だけです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': '対応OS',
            '情報源の記載': 'Windows（x64とARM64）、macOS、iOS・iPadOS 13.0以降、visionOS 1.0以降、Android',
          },
          { '項目': '最小バージョン', '情報源の記載': 'ダウンロードページにはWindows・macOS・Androidの最小バージョンの記載がありません' },
          { '項目': 'アプリサイズ', '情報源の記載': 'iOSアプリは202.8 MB（米国App Storeの掲載情報）' },
          {
            '項目': 'アカウント',
            '情報源の記載': '端末はMylioアカウントを通じて同期されます（リリースノートの「devices signed into your account」）',
          },
          { '項目': 'メモリ・GPU・ディスク', '情報源の記載': '確認した情報源には、RAM・GPU・ディスク容量の要件の記載がありません' },
          { '項目': '言語', '情報源の記載': 'App Storeの掲載情報では英語のみ' },
        ],
        note: 'これらの情報はMylioのダウンロードページと米国App Storeの掲載情報によるもので、PromptQuorumはインデックス作成にかかる時間やメモリ使用量を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はMylioのダウンロードページとリリースノートに基づくもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをダウンロードする',
            whyItMatters: 'Mylioのダウンロードページから、Windows用のMSIXまたはMac用の.dmgを入手するか、iOS・Androidアプリをそれぞれのストアからインストールし、サインインするかアカウントを作成します。',
          },
          {
            title: '取り込み元を追加する',
            whyItMatters: 'Guided Importパネルでフォルダー、ドライブ、カメラを追加できます。バージョン24.0以降は他の端末と同期するオプションもあります。Mylioによると、取り込まれた画像は端末上で人物の有無がスキャンされます。',
          },
          {
            title: '人物にタグを付ける',
            whyItMatters: '顔の候補を確認して人物に名前を付けます。24.7のリリースノートには、顔のまとめてタグ付けとRescan Facesコマンドの記載があります。',
          },
          {
            title: '検索する',
            whyItMatters: 'Dynamic Searchに入力すると、キーワード、SmartTag、認識された文字で写真を探せます。SmartTagは検索メニューでオフにできます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下の項目はすべてMylioのウェブサイトまたはリリースノートによるもので、PromptQuorumはどれも検証していません。**',
        ],
        items: [
          '**ライブラリ。** Windows・macOS・iOS・Androidをまたいで、写真・動画・書類を1つのライブラリで管理し、端末間で同期します。',
          '**検索。** キーワード、SmartTag、認識した文字を対象にしたDynamic Searchで、結果は場所・人物・イベント・アルバムごとにグループ表示されます。',
          '**人物。** 顔認識で候補を提示し、まとめてタグ付けできます。',
          '**整理。** アルバム、評価、カテゴリ、Spaces、ワークフロー。リリースノートによると、Family・Work・Custom Spacesには有料プランまたはトライアルが必要です。',
          '**編集とカメラ。** AutoToneやLevelsなどの基本的な編集ツールのほか、RAWとDNGに対応しています。バージョン24.8ではSonyのカメラが追加されました。',
          '**共有。** Shared Albumsと共有リンク。',
        ],
        note: 'リリースノートでは、Mylio Drive+とSecureCloudのストレージオプションはAI機能とは別に記載されており、有料の追加機能です。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**MylioのAIは画像を対象にしたものです。写真に写っているものにタグを付け、顔を見つけ、文字を読み取って検索できるようにします。見つかったチャット機能はヘルプ用チャットボットだけです。**',
        ],
        items: [
          '**SmartTagとDynamic Search。** Mylioによると、機械学習が1,000以上のアクティビティ・物体・属性にタグを付け、検索結果は通常2秒以内に表示されます（App Storeの掲載情報）。',
          '**顔。** Mylioによると、各画像は「privately scanned on your own devices for recognizable people」とされています。バージョン24.7では、速度と精度の向上のためパイプラインが刷新されました。',
          '**画像内の文字。** 24.7のリリースノートには全OS向けの新しいOCRモデルが記載されており、Dynamic Searchの結果にはOCRデータが含まれます。',
          '**Learn Panelのチャット。** バージョン24のリリースノートには、Mylioのヘルプ資料を検索する「GPT-powered chat within the Learn Panel」が記載されています。どこで動き、何を送信するかはMylioから示されていません。',
          '**どこで動くか。** App Storeの記述のほか、Mylioのトップページには「organize media and run AI locally, no internet needed」とあり、2023年の発表資料には、検索インデックスはユーザーの端末上で作られると書かれています。',
        ],
        note: 'これらはMylio自身の説明です。PromptQuorumは検索の関連性、顔認識の精度、OCRの対応言語、速度を検証しておらず、Mylioは使用モデルも公表していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**情報源によると、Mylioのサーバーや第三者に届くものは3つあり、いずれもAI処理ではありません。** 端末はMylioアカウントを通じて同期されます。オプションの有料機能Mylio Drive+は、ファイルの最適化されたコピーをBackblazeを基盤とするサーバーに保存し、アカウントにサインインした端末だけが読めるよう暗号化します（24.4のリリースノート）。Shared Albumsと共有リンクは、選んだ写真をMylioがホストするウェブページに公開します（2023年の発表資料）。',
          'プライバシーポリシーの最終改訂日は2018年5月14日と記載されています。アカウント情報、コンテンツとそのメタデータ、利用データ、デバイス識別子が挙げられ、情報は米国またはその他の国で保存・処理される場合があるとされていますが、AI、顔認識、端末内処理には触れていません。米国App Storeのプライバシー表示では、氏名、デバイスID、ユーザーID、クラッシュデータが、分析とアプリ機能のために「ユーザーに紐づく」データとして挙げられています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の説明とポリシーの文面であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していないため、顔スキャンや検索がサーバーに接続することがあるかどうかは確認できていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**写真がスマートフォン、パソコン、ドライブに散らばっている方**で、すべてをクラウドの写真サービスに預けずに、同期されたライブラリを使いたい方。',
          '**顔・物体・文字の検索を使いたい方**。Mylioによると、これらは自分の端末上で動作します。',
          '**複数人で使う世帯：** DuoとFamilyプランは、それぞれ2人と5人に対応します。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIが動く場所。** 端末内で動作するという記述はすべてMylio自身のものです。Learn Panelのチャットボットがどこで動き何を送るかは示されておらず、プライバシーポリシーはAIをカバーしていません。',
          '**AIの品質。** 検索の関連性、顔認識の精度、文字認識は検証していません。',
          '**無料プラン。** リリースノートには無料プランへの言及がありますが、現在の登録ページは無料トライアル付きの有料プランを掲載しており、何が無料のまま残るかは書かれていません。',
          '**価格。** 登録ページは通貨名を示しておらず、ストアごとに価格が異なり、以前のMylioの投稿にはより低い金額が記載されています。',
          '**最小要件。** 確認した情報源には、Windows・macOS・Androidの最小OSバージョンも、RAMやストレージの要件も記載がありません。',
          '**Google Play。** Playの掲載情報を読み取れなかったため、データセーフティのラベルとAndroidでの価格は対象外です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、ほかに4つの写真ライブラリのレビューがあります。主な違いは、サーバーを自分で運用するか、買い切りか、暗号化クラウドストレージを使うかです。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Excire Foto](/ja/power-local-llm/excire-foto-review)',
            '対応プラットフォーム': 'Windows、Mac',
            '価格／ライセンス': '買い切り／クローズドソース',
            '主な違い': 'Excireによればローカルで動くAI検索を備えたデスクトップ管理ソフト。WindowsとMacのみ',
          },
          {
            'アプリ': '[Ente Photos](/ja/power-local-llm/ente-photos-review)',
            '対応プラットフォーム': 'iOS、Android、デスクトップ、Web',
            '価格／ライセンス': '無料10 GB、有料プラン／AGPL-3.0',
            '主な違い': '端末内AIを備えた暗号化クラウドストレージ。オープンソース',
          },
          {
            'アプリ': '[Immich](/ja/power-local-llm/immich-review)',
            '対応プラットフォーム': 'サーバー（Docker）、スマホアプリ、ブラウザ',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'スマホのバックアップに対応するセルフホスト型サーバー。導入にはDockerが必要',
          },
          {
            'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)',
            '対応プラットフォーム': 'サーバー（Docker）、ブラウザ',
            '価格／ライセンス': '無料Community／AGPL-3.0',
            '主な違い': 'AIラベルを内蔵したセルフホスト型ウェブアプリ',
          },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Mylio Photosはローカルで動くLLMですか？',
            a: 'いいえ。情報源が説明しているのは、画像のタグ付け、顔認識と文字認識、Learn Panelのヘルプ用チャットボットで、ローカルの言語モデルについての記述はありません。',
          },
          {
            q: 'Mylio Photosはオフラインで使えますか？',
            a: 'Mylioのトップページには「run AI locally, no internet needed」とあり、「even offline」で検索できると書かれています。例外は挙げられていませんが、サインイン、同期、ヘルプチャットには当然ながら接続が必要です。',
          },
          {
            q: 'Mylio Photosの料金はいくらですか？',
            a: 'ダウンロードは無料で、有料プランはサブスクリプションです。ストアごとの価格は「入手方法」の注記をご覧ください。Mylioの登録ページには30日間の返金保証も表示されています。',
          },
          {
            q: '支払う前に試せますか？',
            a: 'はい。登録ページでは「Free Trial + Gift」が提供され、今日は請求されないと書かれています。トライアルの期間は明記されていません。',
          },
          {
            q: 'Mylioは写真をクラウドに送りますか？',
            a: 'Mylioによれば、AIのためには送りません。ただし、オプションのMylio Drive+ストレージとShared Albumsは、「データの流れとプライバシー」で述べたとおり、ファイルをサーバーに保存または公開します。',
          },
          {
            q: 'このプロジェクトはまだメンテナンスされていますか？',
            a: '入手できる情報では、はい。Mylioのリリースノートには、バージョン24.8のビルドが2026年7月28日、8月11日、10月6日、10月8日に記載されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Mylio Photosは、SmartTag検索、顔認識、文字認識が自分の端末上で動作すると開発元が説明する、クローズドソースのマルチデバイス写真ライブラリです。ダウンロードは無料で、有料プランはサブスクリプションです。一方で、この説明は開発元自身のものであり、ヘルプ用チャットボットが動く場所は示されておらず、プライバシーポリシーは2018年のものでAIをカバーしていません。オプションのクラウドストレージと共有アルバムはMylioのサーバーを使い、無料プランの範囲は不明で、PromptQuorumはアプリを検証していません。複数の端末に写真があり、同期されたライブラリを使いたくて、開発元の説明を受け入れられる方に向いています。検証済みのオフライン処理やオープンソースが必要な場合は、セルフホスト型の代替ツールを検討してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Mylio Photosトップページ](https://mylio.com/) — 対応プラットフォーム、プラン、AI機能の説明。2026年10月30日確認。',
          '[Mylioダウンロードページ](https://mylio.com/download/) — インストーラーとストアのリンク。2026年10月30日確認。',
          '[Mylio登録ページ](https://mylio.com/signup-personal/) — プランと価格。2026年10月30日確認。',
          '[Mylioの変更履歴とリリースノート](https://support.mylio.com/change-log-and-release-notes) — 24.7と24.8のバージョンとビルド日。2026年10月30日確認。',
          '[Mylioのバージョン24リリースノート](https://support.mylio.com/version-24-release-notes) — Dynamic Search、顔スキャン、Learn Panelのチャット、Mylio Drive+。2026年10月30日確認。',
          '[Mylioのプライバシーポリシー](https://mylio.com/privacy/) — 収集するデータと処理場所。2018年5月14日改訂。',
          '[米国App StoreのMylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435) — バージョン24.8.7904、アプリ内課金、AIに関する記述、プライバシー表示。2026年10月30日確認。',
          '[Mylioのバージョン24発表資料](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTag、ローカルの検索インデックス、Shared Albums。2023年8月30日公開。',
          '[Mylioの価格改定のお知らせ](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — 2024年のMylio Photos+の価格。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Excire Fotoレビュー](/ja/power-local-llm/excire-foto-review) — ローカルのAI検索を備えたクローズドソースのデスクトップ写真管理ソフト。',
          '[Ente Photosレビュー](/ja/power-local-llm/ente-photos-review) — 端末内で顔検索と自然言語検索ができる暗号化フォトバックアップ。',
          '[Immichレビュー](/ja/power-local-llm/immich-review) — スマホのバックアップとスマート検索を備えたセルフホスト型フォトライブラリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },

  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-pt.webp',
    title: 'Análise do Mylio Photos: biblioteca de fotos multidispositivo com busca por IA no dispositivo',
    seoTitle: 'Análise do Mylio Photos: app de fotos multidispositivo, IA',
    intro: 'O Mylio Photos é uma biblioteca de fotos, vídeos e documentos de código fechado para Windows, macOS, iOS e Android que sincroniza seus arquivos entre os seus próprios dispositivos e, segundo a Mylio, executa suas ferramentas de IA (busca com SmartTags, reconhecimento facial e reconhecimento de texto) nesses dispositivos. O download é gratuito e os planos pagos são assinaturas, com armazenamento em nuvem criptografado como opção. Esta análise reflete o site, as notas de versão, a página da App Store e a política de privacidade da Mylio conforme verificados em 30 de outubro de 2026; a versão atual é a 24.8.',
    metaDescription: 'Análise do Mylio Photos: fotos para Windows, Mac, iPhone e Android. Segundo a Mylio, busca por IA e leitura de rostos rodam nos seus dispositivos.',
    twitterDescription: 'Análise do Mylio Photos: uma biblioteca de fotos multidispositivo cuja busca por IA e reconhecimento de rostos e de texto rodam nos seus dispositivos, segundo a Mylio. Planos, fluxo de dados e o que não foi possível verificar.',
    audience: 'Pessoas com fotos espalhadas entre celulares, computadores e discos que querem uma biblioteca sincronizada com busca por IA e precisam saber o que as fontes confirmam sobre onde a IA roda, quanto custam os planos e o que sai do dispositivo.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise mylio photos',
    targetKeywords: [
      'análise mylio photos',
      'mylio photos 24.8',
      'app biblioteca de fotos com busca por ia offline',
      'gerenciador de fotos com reconhecimento facial no dispositivo',
      'sincronizar fotos entre dispositivos sem nuvem',
      'alternativa privada ao google fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O Mylio Photos é uma biblioteca de fotos de código fechado para Windows, macOS, iOS e Android que, segundo a Mylio, executa suas ferramentas de IA (busca com SmartTags, reconhecimento facial e reconhecimento de texto) nos seus próprios dispositivos.** A versão 24.8 foi atualizada pela última vez em 8 de outubro de 2026. O download é gratuito, os planos pagos são assinaturas e a Mylio não informa onde roda o chatbot de ajuda do app.',
    quickAnswerTop: {
      pt: {
        question: 'O Mylio Photos executa sua IA nos seus próprios dispositivos?',
        answer: 'Segundo a Mylio, sim: a página da App Store diz «every one of our AI tools runs exclusively on your local devices» e as notas de versão dizem que os rostos são «privately scanned on your own devices». A Mylio não informa onde roda o chat de ajuda do Learn Panel, a política de privacidade é de 2018 e não menciona IA, e o armazenamento opcional Mylio Drive+ e os Shared Albums usam servidores da Mylio. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Código fechado; download gratuito, com o Mylio Premium a R$ 129,90 por mês ou R$ 1.199,90 por ano na App Store brasileira.',
          'Windows (x64 e ARM64), macOS, iOS, iPadOS e Android; os instaladores de Windows e Mac são downloads diretos em mylio.com.',
          'Recursos: uma biblioteca sincronizada, Dynamic Search por palavras-chave, SmartTags e texto reconhecido, marcação de rostos, álbuns, compartilhamento e edição básica.',
          'Versão 24.8: build 7905 para Windows e Android em 8 de outubro de 2026, build 7904 para macOS e iOS em 6 de outubro de 2026.',
          'Não testado pela PromptQuorum: qualidade da busca, precisão facial e resultados de OCR não foram avaliados.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Mylio Photos?', anchor: 'what-is-mylio-photos' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Principais recursos', anchor: 'key-features' },
      { label: 'Recursos de IA e onde eles rodam', anchor: 'ai-features' },
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
            text: 'O Mylio Photos é uma biblioteca de fotos, vídeos e documentos de código fechado para Windows, macOS, iOS e Android que sincroniza seus arquivos entre seus dispositivos e, segundo a desenvolvedora, os marca, pesquisa e agrupa com uma IA que roda nesses dispositivos.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala em cada dispositivo, entra na conta para que eles sincronizem e deixa o app escanear suas fotos uma vez; segundo a Mylio, nada é enviado aos servidores dela para a IA, mas o armazenamento em nuvem e os álbuns compartilhados são recursos opcionais que usam servidores.',
          },
        ],
        items: [
          'Manutenção: a versão 24.8 teve quatro builds desde 28 de julho de 2026, o mais recente em 8 de outubro de 2026, então nenhum aviso de projeto desatualizado se aplica.',
          'Desenvolvedora: Mylio; a App Store lista como vendedor a MyLo Development, LLC.',
          'Instalação: um instalador MSIX para Windows, um .dmg para macOS e apps de loja para iOS e Android, todos com link na página de download da Mylio.',
          'Custo: download gratuito, com planos pagos Individual, Duo e Family e um teste gratuito; os preços por loja estão na nota de «Onde obter».',
          'Escopo: uma biblioteca de fotos com IA de imagem; o único chat encontrado é um chatbot de ajuda no Learn Panel, não um assistente de fotos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, nas notas de versão, na página da App Store e na política de privacidade da Mylio, verificados em 30 de outubro de 2026. A PromptQuorum não instalou o Mylio Photos, então qualidade da busca, velocidade e precisão facial não foram avaliadas.',
          },
          {
            type: 'note',
            text: 'A afirmação sobre IA no dispositivo vem dos textos de marketing e das notas de versão da própria Mylio, não de uma auditoria. A política de privacidade da Mylio, revisada pela última vez em 14 de maio de 2018, não descreve processamento por IA.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'O que é o Mylio Photos?',
        content: [
          '**O Mylio Photos é um app de biblioteca de mídia que reúne em uma única biblioteca as fotos, vídeos e documentos de celulares, computadores e discos e os sincroniza entre os seus próprios dispositivos.** Segundo a Mylio, os recursos de IA (Dynamic Search sobre SmartTags que identificam mais de 1.000 atividades, objetos e propriedades, reconhecimento facial e reconhecimento de texto) rodam nesses dispositivos, e não nos servidores da Mylio. O site da Mylio lista macOS, Windows, iOS e Android.',
          'A desenvolvedora é a Mylio; a App Store lista a MyLo Development, LLC como vendedora. O Dynamic Search e os SmartTags chegaram com a versão 24, anunciada em 30 de agosto de 2023, e as notas da 24.7 (build 7878, 17 de dezembro de 2025) descrevem um pipeline de reconhecimento facial reformulado e novos modelos de OCR em todos os sistemas operacionais. A Mylio também vende planos Business e armazenamento em nuvem opcional (Mylio Drive+, baseado na Backblaze, e SecureCloud); esta análise cobre o produto pessoal.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Mylio Photos se instala com um duplo clique no Windows e no macOS e como app de loja no iPhone, iPad e Android; depois você entra na conta para que seus dispositivos sincronizem.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'Site',
            'Onde obter': '[mylio.com](https://mylio.com/): visão geral do produto, planos e downloads',
          },
          {
            'Opção': 'Windows',
            'Onde obter': 'Instalador MSIX para x64 e outro separado para ARM64, com link na [página de download](https://mylio.com/download/)',
          },
          {
            'Opção': 'Mac',
            'Onde obter': 'Imagem de disco .dmg na [página de download](https://mylio.com/download/)',
          },
          {
            'Opção': 'iPhone e iPad',
            'Onde obter': '[Mylio Photos na App Store](https://apps.apple.com/us/app/mylio-photos/id908787435): grátis com compras no app',
          },
          {
            'Opção': 'Android',
            'Onde obter': '[Mylio Photos no Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio), com link na página de download',
          },
          {
            'Opção': 'Planos',
            'Onde obter': '[Página de cadastro](https://mylio.com/signup-personal/): planos Individual, Duo e Family com teste gratuito',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[Política de privacidade da Mylio](https://mylio.com/privacy/): revisada pela última vez em 14 de maio de 2018',
          },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Nenhum: software proprietário' },
        ],
        note: 'Versão analisada: Mylio Photos 24.8 (build 7904 para macOS e iOS, build 7905 para Windows e Android). A App Store brasileira lista o Mylio Premium a R$ 129,90 por mês ou R$ 1.199,90 por ano. A página de cadastro da Mylio mostra preços em dólares sem nomear a moeda, e um anúncio anterior da Mylio (2024) lista o Mylio Photos+ a US$ 119,99 por ano; confirme o preço atual no momento da compra.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A Mylio não publica requisitos mínimos de hardware; as fontes trazem apenas os sistemas operacionais compatíveis e o requisito do iOS.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          {
            Item: 'Sistemas operacionais',
            'O que dizem as fontes': 'Windows (x64 e ARM64), macOS, iOS e iPadOS 13.0 ou posterior, visionOS 1.0 ou posterior, Android',
          },
          {
            Item: 'Versões mínimas',
            'O que dizem as fontes': 'A página de download não indica versão mínima de Windows, macOS ou Android',
          },
          { Item: 'Tamanho do app', 'O que dizem as fontes': 'O app para iOS tem 202.8 MB (página da App Store dos EUA)' },
          {
            Item: 'Conta',
            'O que dizem as fontes': 'Os dispositivos sincronizam por meio de uma conta Mylio («devices signed into your account», notas de versão)',
          },
          {
            Item: 'Memória, GPU, disco',
            'O que dizem as fontes': 'As fontes lidas não publicam requisito de RAM, GPU ou espaço em disco',
          },
          { Item: 'Idiomas', 'O que dizem as fontes': 'A página da App Store mostra apenas inglês' },
        ],
        note: 'Esses dados vêm da página de download da Mylio e da página da App Store dos EUA; a PromptQuorum não mediu o tempo de indexação nem o uso de memória.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem a página de download e as notas de versão da Mylio; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o app',
            whyItMatters: 'Pegue o MSIX para Windows ou o .dmg para Mac na página de download da Mylio, ou instale o app de iOS ou Android pela loja, e depois entre na conta ou crie uma.',
          },
          {
            title: 'Adicione suas fontes',
            whyItMatters: 'O painel Guided Import adiciona pastas, discos e câmeras e, desde a versão 24.0, uma opção para sincronizar com outros dispositivos; segundo a Mylio, cada imagem importada é escaneada no seu dispositivo em busca de pessoas.',
          },
          {
            title: 'Marque as pessoas',
            whyItMatters: 'Revise as sugestões de rostos e dê nome às pessoas; as notas da 24.7 mencionam a marcação de rostos em lote e um comando Rescan Faces.',
          },
          {
            title: 'Pesquise',
            whyItMatters: 'Digite no Dynamic Search para achar fotos por palavra-chave, SmartTag ou texto reconhecido; os SmartTags podem ser desativados no menu de busca.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo o que segue vem do site ou das notas de versão da Mylio; a PromptQuorum não testou nada disso.**',
        ],
        items: [
          '**Biblioteca.** Uma biblioteca para fotos, vídeos e documentos em Windows, macOS, iOS e Android, com sincronização entre dispositivos.',
          '**Busca.** Dynamic Search por palavras-chave, SmartTags e texto reconhecido, com resultados agrupados por local, pessoas, eventos e álbuns.',
          '**Pessoas.** Reconhecimento facial com sugestões e marcação em lote.',
          '**Organização.** Álbuns, avaliações, categorias, Spaces e fluxos de trabalho; segundo as notas de versão, os Spaces Family, Work e Custom exigem um plano pago ou o teste.',
          '**Edição e câmeras.** Ferramentas básicas de edição como AutoTone e Levels, além de suporte a RAW e DNG; a versão 24.8 adicionou câmeras Sony.',
          '**Compartilhamento.** Shared Albums e links compartilháveis.',
        ],
        note: 'As notas de versão listam as opções de armazenamento Mylio Drive+ e SecureCloud separadas dos recursos de IA; são extras pagos.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**A IA da Mylio trabalha com imagens: ela marca o que há em uma foto, encontra rostos e lê texto para que você possa pesquisar; o único chat encontrado é um chatbot de ajuda.**',
        ],
        items: [
          '**SmartTags e Dynamic Search.** Segundo a Mylio, o aprendizado de máquina marca mais de 1.000 atividades, objetos e propriedades, e os resultados da busca costumam aparecer em menos de dois segundos (página da App Store).',
          '**Rostos.** Segundo a Mylio, cada imagem é «privately scanned on your own devices for recognizable people»; a versão 24.7 reformulou o pipeline para ganhar velocidade e precisão.',
          '**Texto em imagens.** As notas da 24.7 citam novos modelos de OCR em todos os sistemas operacionais, e os resultados do Dynamic Search incluem dados de OCR.',
          '**Chat do Learn Panel.** As notas da versão 24 descrevem um «GPT-powered chat within the Learn Panel» que pesquisa os recursos de ajuda da Mylio; a Mylio não diz onde ele roda nem o que envia.',
          '**Onde roda.** Além da afirmação da App Store, a página inicial da Mylio diz «organize media and run AI locally, no internet needed», e o comunicado de lançamento de 2023 diz que o índice de busca é construído no dispositivo do usuário.',
        ],
        note: 'Estas são declarações da própria Mylio. A PromptQuorum não testou relevância da busca, precisão facial, idiomas do OCR nem velocidade, e a Mylio não nomeia os modelos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Segundo as fontes, três coisas chegam aos servidores da Mylio ou a terceiros, e nenhuma delas é processamento de IA.** Os dispositivos sincronizam por meio de uma conta Mylio. O Mylio Drive+, um recurso pago opcional, guarda cópias otimizadas dos seus arquivos em servidores baseados na Backblaze, criptografadas para que só os dispositivos conectados à sua conta possam lê-las (notas da 24.4). Os Shared Albums e os links compartilháveis publicam as fotos que você escolher em páginas da web hospedadas pela Mylio (comunicado de lançamento de 2023).',
          'A política de privacidade informa que foi revisada pela última vez em 14 de maio de 2018. Ela lista dados da conta, seu conteúdo e metadados, dados de uso e identificadores de dispositivo, diz que as informações podem ser armazenadas e processadas nos Estados Unidos ou em outros países, e não menciona IA, reconhecimento facial nem processamento no dispositivo. O rótulo de privacidade da App Store dos EUA lista nome, ID do dispositivo, ID do usuário e dados de falhas como vinculados a você, para análise e funcionamento do app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do fabricante e texto de política, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede, então não está verificado se a leitura de rostos ou a busca chegam a contatar algum servidor.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Pessoas com fotos espalhadas entre celulares, computadores e discos** que querem uma biblioteca sincronizada sem colocar tudo em um serviço de fotos na nuvem.',
          '**Usuários que querem busca por rostos, objetos e texto** que, segundo a Mylio, roda nos seus próprios dispositivos.',
          '**Casas com vários usuários:** os planos Duo e Family cobrem duas e cinco pessoas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Onde a IA roda.** Toda afirmação sobre o dispositivo vem da própria Mylio; onde o chatbot do Learn Panel roda e o que ele envia não é informado, e a política de privacidade não cobre IA.',
          '**Qualidade da IA.** Relevância da busca, precisão facial e reconhecimento de texto não foram testados.',
          '**Plano gratuito.** As notas de versão mencionam um plano gratuito, mas a página de cadastro atual lista planos pagos com teste gratuito e não diz o que continua grátis.',
          '**Preço.** A página de cadastro não nomeia a moeda, os preços variam por loja e publicações antigas da Mylio trazem valores menores.',
          '**Mínimos.** As fontes lidas não publicam versão mínima de Windows, macOS ou Android, nem requisito de RAM ou armazenamento.',
          '**Google Play.** A página do Play não pôde ser lida, então o rótulo de segurança de dados e os preços no Android não estão cobertos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outras quatro análises de bibliotecas de fotos; elas diferem principalmente em você operar um servidor, pagar uma vez ou usar armazenamento em nuvem criptografado.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Excire Foto](/pt/power-local-llm/excire-foto-review)',
            Plataformas: 'Windows, Mac',
            'Preço / licença': 'Compra única / Código fechado',
            'Diferença principal': 'Gerenciador de desktop com busca por IA local, segundo a Excire; só Windows e Mac',
          },
          {
            App: '[Ente Photos](/pt/power-local-llm/ente-photos-review)',
            Plataformas: 'iOS, Android, desktop, web',
            'Preço / licença': 'Grátis 10 GB, planos pagos / AGPL-3.0',
            'Diferença principal': 'Armazenamento em nuvem criptografado com IA no dispositivo; código aberto',
          },
          {
            App: '[Immich](/pt/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), apps de celular, navegador',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Servidor auto-hospedado com backup do celular; a instalação exige Docker',
          },
          {
            App: '[PhotoPrism](/pt/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Preço / licença': 'Grátis Community / AGPL-3.0',
            'Diferença principal': 'App web auto-hospedado com rótulos de IA integrados',
          },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na página própria dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Mylio Photos é um LLM local?',
            a: 'Não. As fontes descrevem marcação de imagens, reconhecimento de rostos e de texto e um chatbot de ajuda no Learn Panel; nenhuma descreve um modelo de linguagem local.',
          },
          {
            q: 'O Mylio Photos funciona offline?',
            a: 'A página inicial da Mylio diz que você pode «run AI locally, no internet needed» e pesquisar «even offline»; ela não lista exceções, e login, sincronização e o chat de ajuda naturalmente precisam de conexão.',
          },
          {
            q: 'Quanto custa o Mylio Photos?',
            a: 'O download é gratuito e os planos pagos são assinaturas; os preços por loja estão na nota de «Onde obter». A página de cadastro da Mylio também mostra uma garantia de devolução de 30 dias.',
          },
          {
            q: 'Posso testar antes de pagar?',
            a: 'Sim: a página de cadastro oferece «Free Trial + Gift» e diz que você não será cobrado hoje. A duração do teste não é informada.',
          },
          {
            q: 'A Mylio envia minhas fotos para a nuvem?',
            a: 'Não para a IA, segundo a Mylio. O armazenamento opcional Mylio Drive+ e os Shared Albums guardam ou publicam arquivos em servidores, como descrito em «Fluxo de dados e privacidade».',
          },
          {
            q: 'O projeto ainda é mantido?',
            a: 'Pelas evidências disponíveis, sim: as notas de versão da Mylio listam builds da 24.8 em 28 de julho, 11 de agosto, 6 de outubro e 8 de outubro de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Mylio Photos é uma biblioteca de fotos multidispositivo de código fechado cuja desenvolvedora diz que a busca com SmartTags, o reconhecimento facial e o reconhecimento de texto rodam nos seus próprios dispositivos, com download gratuito e assinaturas para os planos pagos. Em contrapartida: a afirmação é da própria fabricante, o local do chatbot de ajuda não é informado, a política de privacidade é de 2018 e não cobre IA, o armazenamento em nuvem opcional e os álbuns compartilhados usam servidores da Mylio, o alcance do plano gratuito é incerto e a PromptQuorum não testou o app. Serve para quem tem fotos em vários dispositivos, quer uma biblioteca sincronizada e aceita a declaração da fabricante; quem precisa de processamento offline verificado ou de código aberto deve olhar as alternativas auto-hospedadas.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página inicial do Mylio Photos](https://mylio.com/) — plataformas, planos e descrição dos recursos de IA, verificada em 30 de outubro de 2026.',
          '[Página de download da Mylio](https://mylio.com/download/) — instaladores e links das lojas, verificada em 30 de outubro de 2026.',
          '[Página de cadastro da Mylio](https://mylio.com/signup-personal/) — planos e preços, verificada em 30 de outubro de 2026.',
          '[Registro de alterações e notas de versão da Mylio](https://support.mylio.com/change-log-and-release-notes) — versões 24.7 e 24.8 com datas de build, verificado em 30 de outubro de 2026.',
          '[Notas de versão da Mylio para a versão 24](https://support.mylio.com/version-24-release-notes) — Dynamic Search, leitura de rostos, chat do Learn Panel e Mylio Drive+, verificadas em 30 de outubro de 2026.',
          '[Política de privacidade da Mylio](https://mylio.com/privacy/) — dados coletados e locais de processamento, revisada em 14 de maio de 2018.',
          '[Mylio Photos na App Store dos EUA](https://apps.apple.com/us/app/mylio-photos/id908787435) — versão 24.8.7904, compras no app, afirmação sobre IA e rótulo de privacidade, verificados em 30 de outubro de 2026.',
          '[Comunicado de lançamento da versão 24 da Mylio](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags, índice de busca local e Shared Albums, publicado em 30 de agosto de 2023.',
          '[Anúncio de preços da Mylio](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — preços do Mylio Photos+ em 2024.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Excire Foto](/pt/power-local-llm/excire-foto-review) — um gerenciador de fotos para desktop de código fechado com busca por IA local.',
          '[Análise do Ente Photos](/pt/power-local-llm/ente-photos-review) — backup de fotos criptografado com busca de rostos e em linguagem natural no dispositivo.',
          '[Análise do Immich](/pt/power-local-llm/immich-review) — uma biblioteca de fotos auto-hospedada com backup do celular e busca inteligente.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-ar.webp',
    title: 'مراجعة Mylio Photos: مكتبة صور متعددة الأجهزة مع بحث بالذكاء الاصطناعي على الجهاز',
    seoTitle: 'مراجعة Mylio Photos: تطبيق صور متعدد الأجهزة وبحث ذكي',
    intro: 'Mylio Photos مكتبة مغلقة المصدر للصور ومقاطع الفيديو والمستندات على Windows وmacOS وiOS وAndroid، تزامن ملفاتك بين أجهزتك أنت، وتقول Mylio إنها تشغّل أدوات الذكاء الاصطناعي فيها (بحث SmartTag والتعرف على الوجوه والتعرف على النص) على هذه الأجهزة. التنزيل مجاني والخطط المدفوعة اشتراكات، مع تخزين سحابي مشفّر اختياري. تعكس هذه المراجعة موقع Mylio وملاحظات الإصدار وصفحة App Store وسياسة الخصوصية كما جرى التحقق منها في 30 أكتوبر 2026؛ والإصدار الحالي هو 24.8.',
    metaDescription: 'مراجعة Mylio Photos: مكتبة صور مغلقة المصدر لأجهزة Windows وMac وiPhone وAndroid. تقول Mylio إن البحث بالذكاء الاصطناعي ومسح الوجوه يعملان على أجهزتك.',
    twitterDescription: 'مراجعة Mylio Photos: مكتبة صور متعددة الأجهزة يعمل فيها البحث بالذكاء الاصطناعي والتعرف على الوجوه والنص على أجهزتك بحسب Mylio. الخطط وتدفق البيانات وما تعذّر التحقق منه.',
    audience: 'أصحاب الصور المتفرقة بين الهواتف والحواسيب والأقراص الذين يريدون مكتبة متزامنة مع بحث بالذكاء الاصطناعي، ويحتاجون إلى معرفة ما تؤكده المصادر عن مكان تشغيل الذكاء الاصطناعي وتكلفة الخطط وما يغادر الجهاز.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة mylio photos',
    targetKeywords: [
      'مراجعة mylio photos',
      'mylio photos 24.8',
      'تطبيق مكتبة صور مع بحث بالذكاء الاصطناعي دون اتصال',
      'مدير صور مع التعرف على الوجوه على الجهاز',
      'مزامنة الصور بين الأجهزة دون سحابة',
      'بديل خاص لصور جوجل',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos مكتبة صور مغلقة المصدر لأجهزة Windows وmacOS وiOS وAndroid، وتقول Mylio إنها تشغّل أدوات الذكاء الاصطناعي فيها (بحث SmartTag والتعرف على الوجوه والتعرف على النص) على أجهزتك أنت.** آخر تحديث للإصدار 24.8 كان في 8 أكتوبر 2026. التنزيل مجاني والخطط المدفوعة اشتراكات، ولا تذكر Mylio أين يعمل روبوت المساعدة داخل التطبيق.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل Mylio Photos الذكاء الاصطناعي على أجهزتك أنت؟',
        answer: 'بحسب Mylio نعم: تقول صفحة App Store «every one of our AI tools runs exclusively on your local devices»، وتقول ملاحظات الإصدار إن الوجوه «privately scanned on your own devices». لكن Mylio لا تذكر أين تعمل دردشة المساعدة في Learn Panel، وسياسة الخصوصية تعود إلى 2018 ولا تذكر الذكاء الاصطناعي، كما أن تخزين Mylio Drive+ الاختياري وShared Albums يستخدمان خوادم Mylio. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مغلق المصدر؛ التنزيل مجاني، وتبلغ تكلفة Mylio Premium في App Store الأمريكي $25.00 شهريًا أو $239.99 سنويًا.',
          'Windows (x64 وARM64) وmacOS وiOS وiPadOS وAndroid؛ ومثبّتا Windows وMac تنزيلان مباشران من mylio.com.',
          'الميزات: مكتبة واحدة متزامنة، وDynamic Search في الكلمات المفتاحية وSmartTags والنص المُتعرَّف عليه، ووسم الوجوه، والألبومات، والمشاركة، والتحرير الأساسي.',
          'الإصدار 24.8: البناء 7905 لـ Windows وAndroid في 8 أكتوبر 2026، والبناء 7904 لـ macOS وiOS في 6 أكتوبر 2026.',
          'لم تختبره PromptQuorum: جودة البحث ودقة الوجوه ونتائج OCR غير مقيَّمة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Mylio Photos؟', anchor: 'what-is-mylio-photos' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات الرئيسية', anchor: 'key-features' },
      { label: 'ميزات الذكاء الاصطناعي وأين تعمل', anchor: 'ai-features' },
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
            text: 'Mylio Photos مكتبة مغلقة المصدر للصور والفيديو والمستندات على Windows وmacOS وiOS وAndroid، تزامن ملفاتك بين أجهزتك وتصنّفها وتبحث فيها وتجمّعها، بحسب الشركة، بذكاء اصطناعي يعمل على هذه الأجهزة.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته على كل جهاز وتسجّل الدخول ليتزامن، ثم يمسح صورك مرة واحدة؛ وتقول Mylio إنه لا يُرسل شيء إلى خوادمها من أجل الذكاء الاصطناعي، لكن التخزين السحابي والألبومات المشتركة ميزتان اختياريتان تستخدمان الخوادم.',
          },
        ],
        items: [
          'الصيانة: حصل الإصدار 24.8 على أربعة إصدارات بناء منذ 28 يوليو 2026، وأحدثها في 8 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتقادم.',
          'الجهة المطوِّرة: Mylio؛ وتذكر App Store البائع MyLo Development, LLC.',
          'الإعداد: مثبّت MSIX لـ Windows، وملف .dmg لـ macOS، وتطبيقان من المتجر لـ iOS وAndroid، وكلها مرتبطة من صفحة التنزيل لدى Mylio.',
          'التكلفة: التنزيل مجاني، مع خطط مدفوعة Individual وDuo وFamily وفترة تجريبية مجانية؛ وأسعار المتاجر في ملاحظة «كيف تحصل عليه».',
          'النطاق: مكتبة صور بذكاء اصطناعي للصور؛ والدردشة الوحيدة التي وجدناها روبوت مساعدة في Learn Panel، وليست مساعد صور.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع Mylio وملاحظات الإصدار وصفحة App Store وسياسة الخصوصية، وقد جرى التحقق منها في 30 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Mylio Photos، لذا لم تُقيَّم جودة البحث والسرعة ودقة الوجوه.',
          },
          {
            type: 'note',
            text: 'العبارة عن الذكاء الاصطناعي على الجهاز مأخوذة من نصوص Mylio التسويقية وملاحظات إصداراتها، وليست نتيجة تدقيق. وسياسة الخصوصية لدى Mylio، التي نُقحت آخر مرة في 14 مايو 2018، لا تصف أي معالجة بالذكاء الاصطناعي.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'ما هو Mylio Photos؟',
        content: [
          '**Mylio Photos تطبيق مكتبة وسائط يجمع الصور والفيديو والمستندات من الهواتف والحواسيب والأقراص في مكتبة واحدة ويزامنها بين أجهزتك أنت.** وبحسب Mylio، تعمل ميزات الذكاء الاصطناعي (Dynamic Search المعتمد على SmartTags التي تحدد أكثر من 1000 نشاط وكائن وخاصية، والتعرف على الوجوه، والتعرف على النص) على هذه الأجهزة لا على خوادم Mylio. ويذكر موقع Mylio أنظمة macOS وWindows وiOS وAndroid.',
          'الجهة المطوِّرة هي Mylio، وتذكر App Store الشركة MyLo Development, LLC بائعًا. وصل Dynamic Search وSmartTags مع الإصدار 24 الذي أُعلن عنه في 30 أغسطس 2023، وتذكر ملاحظات الإصدار 24.7 (البناء 7878، 17 ديسمبر 2025) إعادة بناء مسار التعرف على الوجوه ونماذج OCR جديدة على جميع أنظمة التشغيل. وتبيع Mylio أيضًا خطط Business وتخزينًا سحابيًا اختياريًا (Mylio Drive+ المعتمد على Backblaze وSecureCloud)؛ وتغطي هذه المراجعة المنتج الشخصي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Mylio Photos بنقرة مزدوجة على Windows وmacOS، وكتطبيق من المتجر على iPhone وiPad وAndroid؛ ثم تسجّل الدخول لتتزامن أجهزتك.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[mylio.com](https://mylio.com/): نظرة عامة على المنتج والخطط والتنزيلات',
          },
          {
            'الخيار': 'Windows',
            'مصدر الحصول عليه': 'مثبّت MSIX لـ x64 وآخر منفصل لـ ARM64، مرتبطان من [صفحة التنزيل](https://mylio.com/download/)',
          },
          {
            'الخيار': 'Mac',
            'مصدر الحصول عليه': 'صورة قرص .dmg من [صفحة التنزيل](https://mylio.com/download/)',
          },
          {
            'الخيار': 'iPhone وiPad',
            'مصدر الحصول عليه': '[Mylio Photos على App Store](https://apps.apple.com/us/app/mylio-photos/id908787435): مجاني مع عمليات شراء داخل التطبيق',
          },
          {
            'الخيار': 'Android',
            'مصدر الحصول عليه': '[Mylio Photos على Google Play](https://play.google.com/store/apps/details?id=com.myliollc.mylio)، مرتبط من صفحة التنزيل',
          },
          {
            'الخيار': 'الخطط',
            'مصدر الحصول عليه': '[صفحة التسجيل](https://mylio.com/signup-personal/): خطط Individual وDuo وFamily مع فترة تجريبية مجانية',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[سياسة الخصوصية لدى Mylio](https://mylio.com/privacy/): نُقحت آخر مرة في 14 مايو 2018',
          },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': 'لا توجد: برنامج مملوك' },
        ],
        note: 'الإصدار الذي روجع: Mylio Photos 24.8 (البناء 7904 لـ macOS وiOS، والبناء 7905 لـ Windows وAndroid). يعرض App Store الأمريكي Mylio Premium بسعر $25.00 شهريًا أو $239.99 سنويًا. وتعرض صفحة التسجيل لدى Mylio الفردي بسعر $25 شهريًا أو $240 سنويًا، وDuo بسعر $40 أو $384، وFamily بسعر $50 أو $480، دون تسمية العملة؛ وتذكر إعلانات أقدم لـ Mylio (2024) أن Mylio Photos+ بسعر $119.99 سنويًا، فتأكد من السعر الحالي عند الدفع.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا تنشر Mylio حدًّا أدنى للعتاد؛ وتذكر المصادر أنظمة التشغيل المدعومة ومتطلب iOS فقط.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'أنظمة التشغيل',
            'ما تقوله المصادر': 'Windows (x64 وARM64) وmacOS وiOS وiPadOS الإصدار 13.0 أو أحدث وvisionOS الإصدار 1.0 أو أحدث وAndroid',
          },
          {
            'البند': 'الحد الأدنى للإصدارات',
            'ما تقوله المصادر': 'لا تذكر صفحة التنزيل حدًّا أدنى لإصدار Windows أو macOS أو Android',
          },
          { 'البند': 'حجم التطبيق', 'ما تقوله المصادر': 'حجم تطبيق iOS هو 202.8 MB (صفحة App Store الأمريكي)' },
          {
            'البند': 'الحساب',
            'ما تقوله المصادر': 'تتزامن الأجهزة عبر حساب Mylio («devices signed into your account»، ملاحظات الإصدار)',
          },
          {
            'البند': 'الذاكرة وGPU والقرص',
            'ما تقوله المصادر': 'لا تنشر المصادر التي قُرئت أي متطلبات للذاكرة أو GPU أو مساحة القرص',
          },
          { 'البند': 'اللغات', 'ما تقوله المصادر': 'تُظهر صفحة App Store الإنجليزية فقط' },
        ],
        note: 'تأتي هذه التفاصيل من صفحة التنزيل لدى Mylio وصفحة App Store الأمريكي؛ ولم تقِس PromptQuorum زمن الفهرسة ولا استخدام الذاكرة.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات صفحة التنزيل وملاحظات الإصدار لدى Mylio؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'نزّل التطبيق',
            whyItMatters: 'خذ ملف MSIX لـ Windows أو ملف .dmg لـ Mac من صفحة التنزيل لدى Mylio، أو ثبّت تطبيق iOS أو Android من متجره، ثم سجّل الدخول أو أنشئ حسابًا.',
          },
          {
            title: 'أضف مصادرك',
            whyItMatters: 'تضيف لوحة Guided Import المجلدات والأقراص والكاميرات، ومنذ الإصدار 24.0 خيارًا للمزامنة مع أجهزة أخرى؛ وبحسب Mylio تُفحص كل صورة مستوردة على جهازك بحثًا عن الأشخاص.',
          },
          {
            title: 'صنّف الأشخاص',
            whyItMatters: 'راجع اقتراحات الوجوه وسمِّ الأشخاص؛ وتذكر ملاحظات 24.7 الوسم الدفعي للوجوه وأمر Rescan Faces.',
          },
          {
            title: 'ابحث',
            whyItMatters: 'اكتب في Dynamic Search لتجد الصور بالكلمة المفتاحية أو SmartTag أو النص المُتعرَّف عليه؛ ويمكن إيقاف SmartTags من قائمة البحث.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل بند أدناه مأخوذ من موقع Mylio أو ملاحظات إصداراتها؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**المكتبة.** مكتبة واحدة للصور والفيديو والمستندات عبر Windows وmacOS وiOS وAndroid، مع مزامنة بين الأجهزة.',
          '**البحث.** Dynamic Search في الكلمات المفتاحية وSmartTags والنص المُتعرَّف عليه، مع نتائج مجمّعة حسب المكان والأشخاص والأحداث والألبومات.',
          '**الأشخاص.** تعرّف على الوجوه مع اقتراحات ووسم دفعي.',
          '**التنظيم.** ألبومات وتقييمات وفئات وSpaces وسير عمل؛ وتقول ملاحظات الإصدار إن Spaces من نوع Family وWork وCustom تتطلب خطة مدفوعة أو الفترة التجريبية.',
          '**التحرير والكاميرات.** أدوات تحرير أساسية مثل AutoTone وLevels، ودعم لـ RAW وDNG؛ وأضاف الإصدار 24.8 دعم كاميرات Sony.',
          '**المشاركة.** Shared Albums وروابط المشاركة.',
        ],
        note: 'تسرد ملاحظات الإصدار خياري التخزين Mylio Drive+ وSecureCloud منفصلين عن ميزات الذكاء الاصطناعي؛ وهما إضافتان مدفوعتان.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**الذكاء الاصطناعي لدى Mylio قائم على الصور: يصنّف ما في الصورة ويجد الوجوه ويقرأ النص لتتمكن من البحث؛ والدردشة الوحيدة التي وجدناها روبوت مساعدة.**',
        ],
        items: [
          '**SmartTags وDynamic Search.** تقول Mylio إن التعلم الآلي يصنّف أكثر من 1000 نشاط وكائن وخاصية، وإن نتائج البحث تظهر عادةً في أقل من ثانيتين (صفحة App Store).',
          '**الوجوه.** تقول Mylio إن كل صورة «privately scanned on your own devices for recognizable people»؛ وأعاد الإصدار 24.7 بناء المسار لتحسين السرعة والدقة.',
          '**النص داخل الصور.** تذكر ملاحظات 24.7 نماذج OCR جديدة على جميع أنظمة التشغيل، وتتضمن نتائج Dynamic Search بيانات OCR.',
          '**دردشة Learn Panel.** تصف ملاحظات الإصدار 24 «GPT-powered chat within the Learn Panel» يبحث في موارد المساعدة لدى Mylio؛ ولا تذكر Mylio أين يعمل ولا ما يرسله.',
          '**أين يعمل.** إلى جانب عبارة App Store، تقول الصفحة الرئيسية لدى Mylio «organize media and run AI locally, no internet needed»، ويقول إعلان إطلاق الإصدار 24 عام 2023 إن فهرس البحث يُبنى على جهاز المستخدم.',
        ],
        note: 'هذه تصريحات Mylio نفسها. لم تختبر PromptQuorum صلة نتائج البحث ولا دقة الوجوه ولا لغات OCR ولا السرعة، ولا تسمّي Mylio النماذج المستخدمة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**بحسب المصادر، تصل ثلاثة أشياء إلى خوادم Mylio أو أطراف أخرى، وليس أيٌّ منها معالجة بالذكاء الاصطناعي.** تتزامن الأجهزة عبر حساب Mylio. ويخزّن Mylio Drive+، وهو ميزة مدفوعة اختيارية، نسخًا محسّنة من ملفاتك على خوادم قائمة على Backblaze، مشفّرة بحيث لا تقرؤها سوى الأجهزة المسجَّل دخولها إلى حسابك (ملاحظات 24.4). وتنشر Shared Albums وروابط المشاركة الصور التي تختارها على صفحات ويب تستضيفها Mylio (إعلان الإطلاق عام 2023).',
          'تذكر سياسة الخصوصية أنها نُقحت آخر مرة في 14 مايو 2018. وهي تسرد بيانات الحساب ومحتواك وبياناته الوصفية وبيانات الاستخدام ومعرّفات الأجهزة، وتقول إن المعلومات قد تُخزَّن وتُعالَج في الولايات المتحدة أو بلدان أخرى، ولا تذكر الذكاء الاصطناعي ولا التعرف على الوجوه ولا المعالجة على الجهاز. وتسرد بطاقة الخصوصية في App Store الأمريكي الاسم ومعرّف الجهاز ومعرّف المستخدم وبيانات الأعطال بوصفها مرتبطة بك، لأغراض التحليلات ووظائف التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الجهة المطوِّرة ونص سياسة، وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة، لذا لم يُتحقق مما إذا كان مسح الوجوه أو البحث يتصل بأي خادم.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب الصور المتفرقة بين الهواتف والحواسيب والأقراص** الذين يريدون مكتبة متزامنة دون وضع كل شيء في خدمة صور سحابية.',
          '**المستخدمون الذين يريدون بحثًا بالوجوه والكائنات والنص** تقول Mylio إنه يعمل على أجهزتهم هم.',
          '**الأسر متعددة المستخدمين:** تغطي خطتا Duo وFamily شخصين وخمسة أشخاص.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**مكان تشغيل الذكاء الاصطناعي.** كل عبارة عن المعالجة على الجهاز هي من Mylio نفسها؛ ولم يُذكر أين يعمل روبوت Learn Panel وما يرسله، ولا تغطي سياسة الخصوصية الذكاء الاصطناعي.',
          '**جودة الذكاء الاصطناعي.** لم تُختبر صلة نتائج البحث ودقة الوجوه والتعرف على النص.',
          '**الخطة المجانية.** تشير ملاحظات الإصدار إلى خطة مجانية، لكن صفحة التسجيل الحالية تسرد خططًا مدفوعة مع فترة تجريبية ولا تقول ما الذي يبقى مجانيًا.',
          '**السعر.** لا تسمّي صفحة التسجيل عملتها، وتختلف الأسعار بحسب المتجر، وتذكر منشورات أقدم لـ Mylio أرقامًا أقل.',
          '**الحد الأدنى.** لا تذكر المصادر التي قُرئت حدًّا أدنى لإصدار Windows أو macOS أو Android، ولا متطلبات للذاكرة أو التخزين.',
          '**Google Play.** تعذّرت قراءة صفحة Play، لذا لا تشمل المراجعة بطاقة أمان البيانات فيها ولا أسعار Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل أربع مراجعات أخرى لمكتبات الصور؛ وتختلف أساسًا في ما إذا كنت تشغّل خادمًا أو تدفع مرة واحدة أو تستخدم تخزينًا سحابيًا مشفّرًا.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Excire Foto](/ar/power-local-llm/excire-foto-review)',
            'المنصات': 'Windows وMac',
            'السعر / الرخصة': 'شراء لمرة واحدة / مغلق المصدر',
            'الفرق الأبرز': 'مدير لسطح المكتب مع بحث بالذكاء الاصطناعي محلي بحسب Excire؛ Windows وMac فقط',
          },
          {
            'التطبيق': '[Ente Photos](/ar/power-local-llm/ente-photos-review)',
            'المنصات': 'iOS وAndroid وسطح المكتب والويب',
            'السعر / الرخصة': 'مجاني 10 GB وخطط مدفوعة / AGPL-3.0',
            'الفرق الأبرز': 'تخزين سحابي مشفّر مع ذكاء اصطناعي على الجهاز؛ مفتوح المصدر',
          },
          {
            'التطبيق': '[Immich](/ar/power-local-llm/immich-review)',
            'المنصات': 'خادم (Docker) وتطبيقات الهاتف والمتصفح',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'خادم مستضاف ذاتيًا مع نسخ احتياطي للهاتف؛ يتطلب الإعداد Docker',
          },
          {
            'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)',
            'المنصات': 'خادم (Docker) والمتصفح',
            'السعر / الرخصة': 'Community مجاني / AGPL-3.0',
            'الفرق الأبرز': 'تطبيق ويب مستضاف ذاتيًا مع تصنيفات ذكاء اصطناعي مدمجة',
          },
        ],
        note: 'تأكد من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Mylio Photos نموذج لغوي كبير محلي؟',
            a: 'لا. تصف المصادر وسم الصور والتعرف على الوجوه والنص وروبوت مساعدة في Learn Panel؛ ولا تصف أيٌّ منها نموذجًا لغويًا محليًا.',
          },
          {
            q: 'هل يعمل Mylio Photos دون اتصال؟',
            a: 'تقول الصفحة الرئيسية لدى Mylio إنك تستطيع «run AI locally, no internet needed» والبحث «even offline»؛ ولا تذكر استثناءات، وتحتاج عمليات تسجيل الدخول والمزامنة ودردشة المساعدة إلى اتصال بطبيعتها.',
          },
          {
            q: 'كم يكلّف Mylio Photos؟',
            a: 'التنزيل مجاني والخطط المدفوعة اشتراكات؛ وأسعار المتاجر في ملاحظة «كيف تحصل عليه». وتعرض صفحة التسجيل لدى Mylio أيضًا ضمان استرداد لمدة 30 يومًا.',
          },
          {
            q: 'هل يمكنني تجربته قبل الدفع؟',
            a: 'نعم: تعرض صفحة التسجيل «Free Trial + Gift» وتقول إنك لن تُحاسَب اليوم. ولم تُذكر مدة الفترة التجريبية.',
          },
          {
            q: 'هل ترسل Mylio صوري إلى السحابة؟',
            a: 'ليس من أجل الذكاء الاصطناعي، بحسب Mylio. أما تخزين Mylio Drive+ الاختياري وShared Albums فيخزّنان الملفات أو ينشرانها على الخوادم، كما هو موضح في «تدفق البيانات والخصوصية».',
          },
          {
            q: 'هل ما زال المشروع يُصان؟',
            a: 'بحسب الأدلة المتاحة، نعم: تسرد ملاحظات إصدارات Mylio إصدارات بناء من 24.8 في 28 يوليو و11 أغسطس و6 أكتوبر و8 أكتوبر 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Mylio Photos مكتبة صور مغلقة المصدر متعددة الأجهزة تقول الجهة المطوِّرة إن بحث SmartTag والتعرف على الوجوه والتعرف على النص فيها تعمل على أجهزتك أنت، مع تنزيل مجاني واشتراكات للخطط المدفوعة. في المقابل: الادعاء صادر عن الشركة نفسها، ومكان روبوت المساعدة غير مذكور، وسياسة الخصوصية تعود إلى 2018 ولا تغطي الذكاء الاصطناعي، والتخزين السحابي الاختياري والألبومات المشتركة تستخدم خوادم Mylio، ونطاق الخطة المجانية غير واضح، ولم تختبر PromptQuorum التطبيق. يناسب أصحاب الصور على عدة أجهزة ممن يريدون مكتبة متزامنة ويقبلون تصريح الشركة؛ ومن يحتاج إلى معالجة دون اتصال مُتحقَّق منها أو إلى مصدر مفتوح فعليه النظر في البدائل المستضافة ذاتيًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الصفحة الرئيسية لـ Mylio Photos](https://mylio.com/) — المنصات والخطط ووصف ميزات الذكاء الاصطناعي، روجعت في 30 أكتوبر 2026.',
          '[صفحة التنزيل لدى Mylio](https://mylio.com/download/) — المثبّتات وروابط المتاجر، روجعت في 30 أكتوبر 2026.',
          '[صفحة التسجيل لدى Mylio](https://mylio.com/signup-personal/) — الخطط والأسعار، روجعت في 30 أكتوبر 2026.',
          '[سجل التغييرات وملاحظات الإصدار لدى Mylio](https://support.mylio.com/change-log-and-release-notes) — الإصداران 24.7 و24.8 مع تواريخ البناء، روجع في 30 أكتوبر 2026.',
          '[ملاحظات إصدار Mylio للإصدار 24](https://support.mylio.com/version-24-release-notes) — Dynamic Search ومسح الوجوه ودردشة Learn Panel وMylio Drive+، روجعت في 30 أكتوبر 2026.',
          '[سياسة الخصوصية لدى Mylio](https://mylio.com/privacy/) — البيانات المجمَّعة وأماكن المعالجة، نُقحت في 14 مايو 2018.',
          '[Mylio Photos على App Store الأمريكي](https://apps.apple.com/us/app/mylio-photos/id908787435) — الإصدار 24.8.7904 وعمليات الشراء داخل التطبيق وعبارة الذكاء الاصطناعي وبطاقة الخصوصية، روجعت في 30 أكتوبر 2026.',
          '[إعلان إطلاق الإصدار 24 من Mylio](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTags وفهرس البحث المحلي وShared Albums، نُشر في 30 أغسطس 2023.',
          '[إعلان أسعار Mylio](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — أسعار Mylio Photos+ عام 2024.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Excire Foto](/ar/power-local-llm/excire-foto-review) — مدير صور مغلق المصدر لسطح المكتب مع بحث بالذكاء الاصطناعي محلي.',
          '[مراجعة Ente Photos](/ar/power-local-llm/ente-photos-review) — نسخ احتياطي مشفّر للصور مع بحث عن الوجوه وبحث بلغة طبيعية على الجهاز.',
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — مكتبة صور مستضافة ذاتيًا مع نسخ احتياطي للهاتف وبحث ذكي.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },

  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-zh.webp',
    title: 'Mylio Photos 评测：支持设备端 AI 搜索的多设备照片库',
    seoTitle: 'Mylio Photos 评测：多设备照片库与 AI 搜索',
    intro: 'Mylio Photos 是适用于 Windows、macOS、iOS 和 Android 的闭源照片、视频和文档库，可在你自己的设备之间同步文件；据 Mylio 称，其 AI 工具（SmartTag 搜索、人脸识别和文字识别）在这些设备上运行。下载免费，付费方案为订阅制，另有可选的加密云存储。本评测依据 2026 年 10 月 30 日核查的 Mylio 官网、版本说明、App Store 页面和隐私政策；当前版本为 24.8。',
    metaDescription: 'Mylio Photos 评测：适用于 Windows、Mac、iPhone 和 Android 的闭源照片库。据 Mylio 称，AI 搜索和人脸扫描在你的设备上运行。',
    twitterDescription: 'Mylio Photos 评测：据 Mylio 称，其 AI 搜索、人脸和文字识别在你的设备上运行的多设备照片库。方案、数据流向，以及未能核实的内容。',
    audience: '照片分散在手机、电脑和硬盘中、想要带 AI 搜索的同步照片库的用户，需要了解资料对 AI 运行位置、方案价格以及哪些数据会离开设备分别确认了什么。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'mylio photos 评测',
    targetKeywords: ['mylio photos 评测', 'mylio photos 24.8', '离线 AI 搜索 照片库应用', '设备端人脸识别 照片管理', '无需云端 多设备同步照片', 'google 相册 私密替代'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos 是适用于 Windows、macOS、iOS 和 Android 的闭源照片库，据 Mylio 称，其 AI 工具（SmartTag 搜索、人脸识别和文字识别）在你自己的设备上运行。** 24.8 版最近一次更新是 2026 年 10 月 8 日。下载免费，付费方案为订阅制，Mylio 没有说明应用内帮助聊天机器人在哪里运行。',
    quickAnswerTop: {
      zh: {
        question: 'Mylio Photos 的 AI 是否在你自己的设备上运行？',
        answer: '据 Mylio 称，是的：其 App Store 页面写着“every one of our AI tools runs exclusively on your local devices”，版本说明则称人脸“privately scanned on your own devices”。但 Mylio 没有说明 Learn Panel 的帮助聊天在哪里运行，其隐私政策写于 2018 年且未提及 AI，可选的 Mylio Drive+ 存储和 Shared Albums 则会使用 Mylio 的服务器。PromptQuorum 没有检查网络流量。',
        bullets: [
          '闭源；下载免费，美国 App Store 中 Mylio Premium 为每月 $25.00 或每年 $239.99。',
          '支持 Windows（x64 和 ARM64）、macOS、iOS、iPadOS 和 Android；Windows 和 Mac 安装包可直接从 mylio.com 下载。',
          '功能：一个同步的照片库、覆盖关键词、SmartTag 和识别出文字的 Dynamic Search、人脸标记、相册、分享和基础编辑。',
          '24.8 版：Windows 和 Android 为 2026 年 10 月 8 日的 7905 构建，macOS 和 iOS 为 2026 年 10 月 6 日的 7904 构建。',
          'PromptQuorum 未测试：搜索质量、人脸识别准确度和 OCR 结果均未评估。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Mylio Photos 是什么？', anchor: 'what-is-mylio-photos' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '主要功能', anchor: 'key-features' },
      { label: 'AI 功能及运行位置', anchor: 'ai-features' },
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
            text: 'Mylio Photos 是适用于 Windows、macOS、iOS 和 Android 的闭源照片、视频和文档库，在你的设备之间同步文件，并且据开发商称，用在这些设备上运行的 AI 对其打标签、搜索和分组。',
          },
          {
            type: 'plain-terms',
            text: '你在每台设备上安装并登录，让它们互相同步，然后让应用扫描一次照片；Mylio 称 AI 处理不会向其服务器发送任何内容，但云存储和共享相册是会使用服务器的可选功能。',
          },
        ],
        items: [
          '维护情况：24.8 版自 2026 年 7 月 28 日以来发布了四个构建，最新的是 2026 年 10 月 8 日，因此不适用项目停更警告。',
          '开发商：Mylio；App Store 将卖家列为 MyLo Development, LLC。',
          '安装：Windows 为 MSIX 安装包，macOS 为 .dmg，iOS 和 Android 为商店应用，均可从 Mylio 的下载页面访问。',
          '费用：下载免费，付费方案有 Individual、Duo 和 Family，并提供免费试用；各商店价格见“获取方式”的备注。',
          '范围：带图像 AI 的照片库；找到的唯一聊天功能是 Learn Panel 中的帮助聊天机器人，而不是照片助手。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 2026 年 10 月 30 日核查的 Mylio 官网、版本说明、App Store 页面和隐私政策。PromptQuorum 没有安装 Mylio Photos，因此搜索质量、速度和人脸识别准确度均未评估。',
          },
          {
            type: 'note',
            text: '关于设备端 AI 的说法来自 Mylio 自己的宣传文字和版本说明，不是审计结果。Mylio 的隐私政策最后修订于 2018 年 5 月 14 日，没有描述 AI 处理。',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'Mylio Photos 是什么？',
        content: [
          '**Mylio Photos 是一款媒体库应用，把手机、电脑和硬盘中的照片、视频和文档汇集到一个照片库，并在你自己的设备之间同步。** 据 Mylio 称，AI 功能（基于可识别 1000 多种活动、物体和属性的 SmartTag 的 Dynamic Search、人脸识别和文字识别）在这些设备上运行，而不是在 Mylio 的服务器上。Mylio 网站列出的平台为 macOS、Windows、iOS 和 Android。',
          '开发商是 Mylio；App Store 将 MyLo Development, LLC 列为卖家。Dynamic Search 和 SmartTag 随 2023 年 8 月 30 日发布的版本 24 推出；24.7 版说明（构建 7878，2025 年 12 月 17 日）提到重构了人脸识别流程，并在所有操作系统上采用了新的 OCR 模型。Mylio 还销售 Business 方案和可选云存储（基于 Backblaze 的 Mylio Drive+ 以及 SecureCloud）；本评测针对个人版产品。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Mylio Photos 在 Windows 和 macOS 上双击即可安装，在 iPhone、iPad 和 Android 上则是商店应用；之后登录，你的设备即可同步。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '官网', '获取方式': '[mylio.com](https://mylio.com/)：产品概览、方案和下载' },
          {
            '选项': 'Windows',
            '获取方式': 'x64 版和 ARM64 版各有独立的 MSIX 安装包，可从[下载页面](https://mylio.com/download/)访问',
          },
          { '选项': 'Mac', '获取方式': '[下载页面](https://mylio.com/download/)提供 .dmg 磁盘映像' },
          {
            '选项': 'iPhone 和 iPad',
            '获取方式': '[App Store 上的 Mylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435)：免费，含应用内购买',
          },
          {
            '选项': 'Android',
            '获取方式': '[Google Play 上的 Mylio Photos](https://play.google.com/store/apps/details?id=com.myliollc.mylio)，可从下载页面访问',
          },
          {
            '选项': '方案',
            '获取方式': '[注册页面](https://mylio.com/signup-personal/)：Individual、Duo 和 Family 方案，含免费试用',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[Mylio 隐私政策](https://mylio.com/privacy/)：最后修订于 2018 年 5 月 14 日',
          },
          { '选项': '源代码', '获取方式': '无：专有软件' },
        ],
        note: '评测版本：Mylio Photos 24.8（macOS 和 iOS 为构建 7904，Windows 和 Android 为构建 7905）。美国 App Store 列出的 Mylio Premium 为每月 $25.00 或每年 $239.99。Mylio 注册页面显示 Individual 为每月 $25 或每年 $240，Duo 为 $40 或 $384，Family 为 $50 或 $480，但未标明货币；Mylio 较早的公告（2024 年）把 Mylio Photos+ 列为每年 $119.99，因此请在结账时确认当前价格。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**Mylio 没有公布硬件最低要求；资料中只有支持的操作系统和 iOS 的要求。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': 'Windows（x64 和 ARM64）、macOS、iOS 和 iPadOS 13.0 或更高版本、visionOS 1.0 或更高版本、Android',
          },
          { '项目': '最低版本', '来源说明': '下载页面未列出 Windows、macOS 或 Android 的最低版本' },
          { '项目': '应用大小', '来源说明': 'iOS 应用为 202.8 MB（美国 App Store 页面）' },
          { '项目': '账户', '来源说明': '设备通过 Mylio 账户同步（版本说明中的“devices signed into your account”）' },
          { '项目': '内存、GPU、磁盘', '来源说明': '所读资料均未公布 RAM、GPU 或磁盘空间要求' },
          { '项目': '语言', '来源说明': 'App Store 页面仅显示英语' },
        ],
        note: '这些信息来自 Mylio 的下载页面和美国 App Store 页面；PromptQuorum 没有测量索引耗时或内存占用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据 Mylio 的下载页面和版本说明；PromptQuorum 没有实际运行过。**',
        ],
        numberedItems: [
          {
            title: '下载应用',
            whyItMatters: '从 Mylio 下载页面获取 Windows 的 MSIX 或 Mac 的 .dmg，或从对应商店安装 iOS 或 Android 应用，然后登录或创建账户。',
          },
          {
            title: '添加来源',
            whyItMatters: 'Guided Import 面板可添加文件夹、硬盘和相机，自 24.0 版起还可选择与其他设备同步；据 Mylio 称，每张导入的图片都会在你的设备上扫描是否有人物。',
          },
          { title: '标记人物', whyItMatters: '查看人脸建议并为人物命名；24.7 版说明提到批量人脸标记和 Rescan Faces 命令。' },
          {
            title: '搜索',
            whyItMatters: '在 Dynamic Search 中输入内容，可按关键词、SmartTag 或识别出的文字查找照片；SmartTag 可在搜索菜单中关闭。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自 Mylio 官网或版本说明；PromptQuorum 没有测试其中任何一项。**',
        ],
        items: [
          '**照片库。** 在 Windows、macOS、iOS 和 Android 上统一管理照片、视频和文档，并在设备之间同步。',
          '**搜索。** 覆盖关键词、SmartTag 和识别出文字的 Dynamic Search，结果按地点、人物、事件和相册分组。',
          '**人物。** 人脸识别，提供建议并支持批量标记。',
          '**整理。** 相册、评分、类别、Spaces 和工作流；版本说明称 Family、Work 和 Custom Spaces 需要付费方案或试用。',
          '**编辑与相机。** AutoTone 和 Levels 等基础编辑工具，以及 RAW 和 DNG 支持；24.8 版新增了 Sony 相机支持。',
          '**分享。** Shared Albums 和分享链接。',
        ],
        note: '版本说明把 Mylio Drive+ 和 SecureCloud 两种存储选项与 AI 功能分开列出；它们是付费附加项。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**Mylio 的 AI 面向图像：给照片中的内容打标签、找出人脸、读取文字以便搜索；找到的唯一聊天功能是帮助聊天机器人。**',
        ],
        items: [
          '**SmartTag 和 Dynamic Search。** 据 Mylio 称，机器学习可为 1000 多种活动、物体和属性打标签，搜索结果通常在两秒内出现（App Store 页面）。',
          '**人脸。** 据 Mylio 称，每张图片都会“privately scanned on your own devices for recognizable people”；24.7 版重构了流程，以提升速度和准确度。',
          '**图像中的文字。** 24.7 版说明提到所有操作系统上采用新的 OCR 模型，Dynamic Search 的结果包含 OCR 数据。',
          '**Learn Panel 聊天。** 版本 24 的说明描述了一个会检索 Mylio 帮助资源的“GPT-powered chat within the Learn Panel”；Mylio 没有说明它在哪里运行，也没有说明会发送什么。',
          '**在哪里运行。** 除 App Store 的说法外，Mylio 首页写着“organize media and run AI locally, no internet needed”，2023 年的发布公告称搜索索引在用户设备上构建。',
        ],
        note: '这些都是 Mylio 自己的说法。PromptQuorum 没有测试搜索相关性、人脸识别准确度、OCR 支持的语言或速度，Mylio 也没有公布所用模型。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**根据资料，有三类内容会到达 Mylio 的服务器或其他方，且都不是 AI 处理。** 设备通过 Mylio 账户同步。可选的付费功能 Mylio Drive+ 会把文件的优化副本存放在基于 Backblaze 的服务器上，并加密，使只有登录你账户的设备才能读取（24.4 版说明）。Shared Albums 和分享链接会把你选定的照片发布到由 Mylio 托管的网页上（2023 年发布公告）。',
          '隐私政策称其最后修订于 2018 年 5 月 14 日。它列出账户信息、你的内容及其元数据、使用数据和设备标识符，称信息可能在美国或其他国家存储和处理，并且没有提到 AI、人脸识别或设备端处理。美国 App Store 的隐私标签把姓名、设备 ID、用户 ID 和崩溃数据列为与你关联的数据，用于分析和应用功能。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是提供方的声明和政策文本，不是审计结果。PromptQuorum 没有检查网络流量，因此人脸扫描或搜索是否会连接服务器尚未核实。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**照片分散在手机、电脑和硬盘中的用户**，想要同步的照片库，又不想把所有内容放进云照片服务。',
          '**想要人脸、物体和文字搜索的用户**，据 Mylio 称，这些功能在他们自己的设备上运行。',
          '**多人使用的家庭：** Duo 和 Family 方案分别覆盖两人和五人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 的运行位置。** 所有关于设备端运行的说法都来自 Mylio 自己；Learn Panel 聊天机器人在哪里运行、会发送什么均未说明，隐私政策也不涵盖 AI。',
          '**AI 质量。** 搜索相关性、人脸识别准确度和文字识别均未测试。',
          '**免费方案。** 版本说明提到免费方案，但当前注册页面列出的是带免费试用的付费方案，没有说明哪些功能仍然免费。',
          '**价格。** 注册页面没有标明货币，各商店价格不同，Mylio 较早的文章列出的金额更低。',
          '**最低要求。** 所读资料中没有公布 Windows、macOS 或 Android 的最低系统版本，也没有 RAM 或存储要求。',
          '**Google Play。** 无法读取 Play 页面，因此其数据安全标签和 Android 价格不在本评测范围内。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中另有四篇照片库评测；它们的区别主要在于你是否要运行服务器、是一次性付费，还是使用加密云存储。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Excire Foto](/zh/power-local-llm/excire-foto-review)',
            '平台': 'Windows、Mac',
            '价格 / 许可证': '一次性购买 / 闭源',
            '主要区别': '据 Excire 称带本地 AI 搜索的桌面管理器；仅限 Windows 和 Mac',
          },
          {
            '应用': '[Ente Photos](/zh/power-local-llm/ente-photos-review)',
            '平台': 'iOS、Android、桌面、网页',
            '价格 / 许可证': '免费 10 GB，付费方案 / AGPL-3.0',
            '主要区别': '带设备端 AI 的加密云存储；开源',
          },
          {
            '应用': '[Immich](/zh/power-local-llm/immich-review)',
            '平台': '服务器（Docker）、手机应用、浏览器',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '支持手机备份的自托管服务器；部署需要 Docker',
          },
          {
            '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)',
            '平台': '服务器（Docker）、浏览器',
            '价格 / 许可证': '免费 Community / AGPL-3.0',
            '主要区别': '内置 AI 标签的自托管网页应用',
          },
        ],
        note: '请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Mylio Photos 是本地大语言模型吗？',
            a: '不是。资料描述的是图像打标签、人脸和文字识别，以及 Learn Panel 中的帮助聊天机器人；没有任何资料描述本地语言模型。',
          },
          {
            q: 'Mylio Photos 可以离线使用吗？',
            a: 'Mylio 首页称你可以“run AI locally, no internet needed”并“even offline”搜索；页面没有列出例外，而登录、同步和帮助聊天自然需要联网。',
          },
          { q: 'Mylio Photos 要多少钱？', a: '下载免费，付费方案为订阅制；各商店价格见“获取方式”的备注。Mylio 注册页面还显示 30 天退款保证。' },
          { q: '付费前可以试用吗？', a: '可以：注册页面提供“Free Trial + Gift”，并称今天不会扣费。试用期时长没有说明。' },
          {
            q: 'Mylio 会把我的照片发送到云端吗？',
            a: '据 Mylio 称，AI 处理不会。可选的 Mylio Drive+ 存储和 Shared Albums 则会在服务器上存储或发布文件，详见“数据流向与隐私”。',
          },
          {
            q: '这个项目还在维护吗？',
            a: '就现有证据而言，是的：Mylio 的版本说明列出了 24.8 版在 2026 年 7 月 28 日、8 月 11 日、10 月 6 日和 10 月 8 日的构建。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Mylio Photos 是一款闭源的多设备照片库，开发商称其 SmartTag 搜索、人脸识别和文字识别在你自己的设备上运行，下载免费，付费方案为订阅制。不利的一面是：这一说法出自开发商自己，帮助聊天机器人的运行位置未说明，隐私政策写于 2018 年且不涵盖 AI，可选云存储和共享相册会使用 Mylio 的服务器，免费方案的范围不明确，PromptQuorum 也没有测试该应用。它适合在多台设备上有照片、想要同步照片库并接受开发商说法的用户；需要经核实的离线处理或开源软件的用户，应考虑自托管的替代方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Mylio Photos 首页](https://mylio.com/) — 平台、方案和 AI 功能说明，2026 年 10 月 30 日核查。',
          '[Mylio 下载页面](https://mylio.com/download/) — 安装包和商店链接，2026 年 10 月 30 日核查。',
          '[Mylio 注册页面](https://mylio.com/signup-personal/) — 方案和价格，2026 年 10 月 30 日核查。',
          '[Mylio 更新日志与版本说明](https://support.mylio.com/change-log-and-release-notes) — 24.7 和 24.8 版及构建日期，2026 年 10 月 30 日核查。',
          '[Mylio 版本 24 版本说明](https://support.mylio.com/version-24-release-notes) — Dynamic Search、人脸扫描、Learn Panel 聊天和 Mylio Drive+，2026 年 10 月 30 日核查。',
          '[Mylio 隐私政策](https://mylio.com/privacy/) — 收集的数据和处理地点，2018 年 5 月 14 日修订。',
          '[美国 App Store 上的 Mylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435) — 24.8.7904 版、应用内购买、AI 说法和隐私标签，2026 年 10 月 30 日核查。',
          '[Mylio 版本 24 发布公告](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTag、本地搜索索引和 Shared Albums，2023 年 8 月 30 日发布。',
          '[Mylio 价格公告](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — 2024 年 Mylio Photos+ 的价格。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Excire Foto 评测](/zh/power-local-llm/excire-foto-review) — 带本地 AI 搜索的闭源桌面照片管理器。',
          '[Ente Photos 评测](/zh/power-local-llm/ente-photos-review) — 在设备端提供人脸和自然语言搜索的加密照片备份。',
          '[Immich 评测](/zh/power-local-llm/immich-review) — 支持手机备份和智能搜索的自托管照片库。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },

  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/mylio-photos-review-hero-ko.webp',
    title: 'Mylio Photos 리뷰: 기기 내 AI 검색을 지원하는 멀티 디바이스 사진 라이브러리',
    seoTitle: 'Mylio Photos 리뷰: 멀티 디바이스 사진과 AI 검색',
    intro: 'Mylio Photos는 Windows, macOS, iOS, Android용 비공개 소스 사진·동영상·문서 라이브러리로, 사용자의 기기 사이에서 파일을 동기화합니다. Mylio에 따르면 AI 도구(SmartTag 검색, 얼굴 인식, 텍스트 인식)는 그 기기에서 실행됩니다. 다운로드는 무료이며 유료 요금제는 구독 방식이고, 암호화된 클라우드 저장소를 선택적으로 이용할 수 있습니다. 이 리뷰는 2026년 10월 30일에 확인한 Mylio의 웹사이트, 릴리스 노트, App Store 페이지, 개인정보 처리방침을 바탕으로 하며, 현재 릴리스는 버전 24.8입니다.',
    metaDescription: 'Mylio Photos 리뷰: Windows, Mac, iPhone, Android용 비공개 소스 사진 라이브러리입니다. Mylio에 따르면 AI 검색과 얼굴 스캔은 내 기기에서 실행됩니다.',
    twitterDescription: 'Mylio Photos 리뷰: Mylio에 따르면 AI 검색과 얼굴·텍스트 인식이 내 기기에서 실행되는 멀티 디바이스 사진 라이브러리. 요금제, 데이터 흐름, 확인하지 못한 사항.',
    audience: '사진이 휴대폰, 컴퓨터, 드라이브에 흩어져 있어 AI 검색이 되는 동기화 라이브러리를 원하는 분들로, AI가 어디에서 실행되는지, 요금제 가격이 얼마인지, 기기 밖으로 무엇이 나가는지에 대해 자료가 무엇을 확인해 주는지 알아야 하는 분들입니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'mylio photos 리뷰',
    targetKeywords: ['mylio photos 리뷰', 'mylio photos 24.8', '오프라인 ai 검색 사진 라이브러리 앱', '기기 내 얼굴 인식 사진 관리', '클라우드 없이 기기 간 사진 동기화', '구글 포토 대안 개인정보 보호'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Mylio Photos는 Windows, macOS, iOS, Android용 비공개 소스 사진 라이브러리로, Mylio에 따르면 AI 도구(SmartTag 검색, 얼굴 인식, 텍스트 인식)는 사용자의 기기에서 실행됩니다.** 버전 24.8의 마지막 업데이트는 2026년 10월 8일입니다. 다운로드는 무료이고 유료 요금제는 구독 방식이며, 앱 안의 도움말 챗봇이 어디에서 실행되는지는 Mylio가 밝히지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Mylio Photos는 AI를 사용자의 기기에서 실행합니까?',
        answer: 'Mylio에 따르면 그렇습니다. App Store 페이지에는 “every one of our AI tools runs exclusively on your local devices”라고 적혀 있고, 릴리스 노트에는 얼굴이 “privately scanned on your own devices”라고 되어 있습니다. 다만 Learn Panel의 도움말 채팅이 어디에서 실행되는지는 밝히지 않았고, 개인정보 처리방침은 2018년 것으로 AI를 언급하지 않으며, 선택 사항인 Mylio Drive+ 저장소와 Shared Albums는 Mylio의 서버를 사용합니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '비공개 소스이며 다운로드는 무료입니다. 한국 App Store에서 Mylio Premium은 월 ₩33,000 또는 연 ₩349,000입니다.',
          'Windows(x64 및 ARM64), macOS, iOS, iPadOS, Android를 지원하며, Windows와 Mac 설치 파일은 mylio.com에서 바로 내려받을 수 있습니다.',
          '기능: 동기화되는 하나의 라이브러리, 키워드·SmartTag·인식된 텍스트를 대상으로 한 Dynamic Search, 얼굴 태그, 앨범, 공유, 기본 편집.',
          '버전 24.8: Windows와 Android는 2026년 10월 8일 빌드 7905, macOS와 iOS는 2026년 10월 6일 빌드 7904.',
          'PromptQuorum은 테스트하지 않았습니다. 검색 품질, 얼굴 인식 정확도, OCR 결과는 평가하지 않았습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Mylio Photos란?', anchor: 'what-is-mylio-photos' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '주요 기능', anchor: 'key-features' },
      { label: 'AI 기능과 실행 위치', anchor: 'ai-features' },
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
            text: 'Mylio Photos는 Windows, macOS, iOS, Android용 비공개 소스 사진·동영상·문서 라이브러리로, 기기 사이에서 파일을 동기화하고 개발사에 따르면 그 기기에서 실행되는 AI로 태그를 붙이고 검색하고 묶어 줍니다.',
          },
          {
            type: 'plain-terms',
            text: '각 기기에 설치하고 로그인하면 동기화되며 사진은 처음에 한 번 스캔됩니다. Mylio는 AI 처리를 위해 자사 서버로 아무것도 보내지 않는다고 설명하지만, 클라우드 저장소와 공유 앨범은 서버를 사용하는 선택 기능입니다.',
          },
        ],
        items: [
          '유지보수: 버전 24.8은 2026년 7월 28일 이후 네 차례 빌드가 나왔고 가장 최근은 2026년 10월 8일이므로, 업데이트 중단 경고는 해당되지 않습니다.',
          '개발사: Mylio. App Store의 판매자는 MyLo Development, LLC로 표시됩니다.',
          '설치: Windows는 MSIX 설치 파일, macOS는 .dmg, iOS와 Android는 스토어 앱이며, 모두 Mylio의 다운로드 페이지에서 연결됩니다.',
          '비용: 다운로드는 무료이고, 유료 요금제 Individual, Duo, Family와 무료 체험이 있습니다. 스토어별 가격은 “입수 방법”의 주석에 있습니다.',
          '범위: 이미지 AI를 갖춘 사진 라이브러리입니다. 확인된 채팅 기능은 Learn Panel의 도움말 챗봇뿐이며 사진 어시스턴트가 아닙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 30일에 확인한 Mylio의 웹사이트, 릴리스 노트, App Store 페이지, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 Mylio Photos를 설치하지 않았으므로 검색 품질, 속도, 얼굴 인식 정확도는 평가하지 않았습니다.',
          },
          {
            type: 'note',
            text: '기기 내 AI에 관한 설명은 Mylio 자체의 홍보 문구와 릴리스 노트 표현이며 감사 결과가 아닙니다. 2018년 5월 14일에 마지막으로 개정된 Mylio의 개인정보 처리방침에는 AI 처리에 대한 설명이 없습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-mylio-photos',
        title: 'Mylio Photos란?',
        content: [
          '**Mylio Photos는 휴대폰, 컴퓨터, 드라이브에 있는 사진·동영상·문서를 하나의 라이브러리로 모으고 사용자의 기기 사이에서 동기화하는 미디어 라이브러리 앱입니다.** Mylio에 따르면 AI 기능(1,000개가 넘는 활동·사물·속성을 식별하는 SmartTag 기반 Dynamic Search, 얼굴 인식, 텍스트 인식)은 Mylio의 서버가 아니라 그 기기에서 실행됩니다. Mylio 사이트에는 macOS, Windows, iOS, Android가 표시되어 있습니다.',
          '개발사는 Mylio이며 App Store는 MyLo Development, LLC를 판매자로 표시합니다. Dynamic Search와 SmartTag는 2023년 8월 30일에 발표된 버전 24에서 등장했고, 24.7 릴리스 노트(빌드 7878, 2025년 12월 17일)에는 얼굴 인식 파이프라인 재구성과 모든 운영체제의 새 OCR 모델이 기재되어 있습니다. Mylio는 Business 요금제와 선택형 클라우드 저장소(Backblaze 기반 Mylio Drive+ 및 SecureCloud)도 판매하며, 이 리뷰는 개인용 제품을 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Mylio Photos는 Windows와 macOS에서는 더블클릭으로 설치하고, iPhone, iPad, Android에서는 스토어 앱으로 받습니다. 이후 로그인하면 기기들이 동기화됩니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '웹사이트', '입수 방법': '[mylio.com](https://mylio.com/): 제품 개요, 요금제, 다운로드' },
          {
            '옵션': 'Windows',
            '입수 방법': 'x64용과 ARM64용 MSIX 설치 파일이 따로 있으며 [다운로드 페이지](https://mylio.com/download/)에서 연결됩니다',
          },
          { '옵션': 'Mac', '입수 방법': '[다운로드 페이지](https://mylio.com/download/)의 .dmg 디스크 이미지' },
          {
            '옵션': 'iPhone 및 iPad',
            '입수 방법': '[App Store의 Mylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435): 무료, 인앱 구입 포함',
          },
          {
            '옵션': 'Android',
            '입수 방법': '[Google Play의 Mylio Photos](https://play.google.com/store/apps/details?id=com.myliollc.mylio), 다운로드 페이지에서 연결',
          },
          {
            '옵션': '요금제',
            '입수 방법': '[가입 페이지](https://mylio.com/signup-personal/): Individual, Duo, Family 요금제와 무료 체험',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[Mylio 개인정보 처리방침](https://mylio.com/privacy/): 마지막 개정일 2018년 5월 14일',
          },
          { '옵션': '소스 코드', '입수 방법': '없음: 독점 소프트웨어' },
        ],
        note: '확인한 버전: Mylio Photos 24.8(macOS와 iOS는 빌드 7904, Windows와 Android는 빌드 7905). 한국 App Store에는 Mylio Premium이 월 ₩33,000, 연 ₩349,000으로 표시됩니다. Mylio의 가입 페이지는 통화를 밝히지 않은 채 달러로 가격을 표시하고, 이전 Mylio 공지(2024년)는 Mylio Photos+를 연 $119.99로 안내했으므로 결제 시 현재 가격을 확인하십시오.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**Mylio는 하드웨어 최소 사양을 공개하지 않으며, 자료에는 지원 운영체제와 iOS 요구 사항만 있습니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'Windows(x64 및 ARM64), macOS, iOS 및 iPadOS 13.0 이상, visionOS 1.0 이상, Android',
          },
          { '항목': '최소 버전', '출처의 설명': '다운로드 페이지에는 Windows, macOS, Android의 최소 버전이 나와 있지 않습니다' },
          { '항목': '앱 크기', '출처의 설명': 'iOS 앱은 202.8 MB입니다(미국 App Store 페이지)' },
          {
            '항목': '계정',
            '출처의 설명': '기기는 Mylio 계정으로 동기화됩니다(릴리스 노트의 “devices signed into your account”)',
          },
          { '항목': '메모리, GPU, 디스크', '출처의 설명': '확인한 자료에는 RAM, GPU, 디스크 공간 요구 사항이 공개되어 있지 않습니다' },
          { '항목': '언어', '출처의 설명': 'App Store 페이지에는 영어만 표시됩니다' },
        ],
        note: '이 정보는 Mylio의 다운로드 페이지와 미국 App Store 페이지에서 가져왔으며, PromptQuorum은 인덱싱 시간이나 메모리 사용량을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**다음 단계는 Mylio의 다운로드 페이지와 릴리스 노트를 따른 것이며, PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 내려받기',
            whyItMatters: 'Mylio 다운로드 페이지에서 Windows용 MSIX 또는 Mac용 .dmg를 받거나 각 스토어에서 iOS·Android 앱을 설치한 뒤, 로그인하거나 계정을 만듭니다.',
          },
          {
            title: '가져올 위치 추가',
            whyItMatters: 'Guided Import 패널에서 폴더, 드라이브, 카메라를 추가할 수 있고, 버전 24.0부터는 다른 기기와 동기화하는 옵션도 있습니다. Mylio에 따르면 가져온 각 이미지는 기기에서 인물이 있는지 스캔됩니다.',
          },
          {
            title: '인물 태그',
            whyItMatters: '얼굴 제안을 검토하고 인물에 이름을 붙입니다. 24.7 릴리스 노트에는 얼굴 일괄 태그와 Rescan Faces 명령이 언급되어 있습니다.',
          },
          {
            title: '검색',
            whyItMatters: 'Dynamic Search에 입력하면 키워드, SmartTag, 인식된 텍스트로 사진을 찾을 수 있습니다. SmartTag는 검색 메뉴에서 끌 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 Mylio의 웹사이트 또는 릴리스 노트에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**라이브러리.** Windows, macOS, iOS, Android 전반에서 사진, 동영상, 문서를 하나의 라이브러리로 관리하며 기기 간 동기화를 지원합니다.',
          '**검색.** 키워드, SmartTag, 인식된 텍스트를 대상으로 하는 Dynamic Search이며, 결과는 장소, 인물, 이벤트, 앨범별로 묶여 표시됩니다.',
          '**인물.** 얼굴 인식으로 제안을 보여 주고 일괄 태그를 지원합니다.',
          '**정리.** 앨범, 평점, 카테고리, Spaces, 워크플로. 릴리스 노트에 따르면 Family, Work, Custom Spaces에는 유료 요금제 또는 체험이 필요합니다.',
          '**편집 및 카메라.** AutoTone, Levels 같은 기본 편집 도구와 RAW, DNG 지원이 있으며, 버전 24.8에서 Sony 카메라가 추가되었습니다.',
          '**공유.** Shared Albums와 공유 링크.',
        ],
        note: '릴리스 노트는 Mylio Drive+와 SecureCloud 저장소 옵션을 AI 기능과 별도로 나열하며, 이들은 유료 부가 기능입니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**Mylio의 AI는 이미지 중심입니다. 사진에 무엇이 있는지 태그를 붙이고, 얼굴을 찾고, 텍스트를 읽어 검색할 수 있게 하며, 확인된 채팅 기능은 도움말 챗봇뿐입니다.**',
        ],
        items: [
          '**SmartTag와 Dynamic Search.** Mylio에 따르면 머신러닝이 1,000개가 넘는 활동, 사물, 속성에 태그를 붙이며 검색 결과는 보통 2초 안에 표시됩니다(App Store 페이지).',
          '**얼굴.** Mylio에 따르면 각 이미지는 “privately scanned on your own devices for recognizable people”입니다. 버전 24.7은 속도와 정확도를 높이려고 파이프라인을 재구성했습니다.',
          '**이미지 속 텍스트.** 24.7 릴리스 노트에는 모든 운영체제의 새 OCR 모델이 기재되어 있고, Dynamic Search 결과에는 OCR 데이터가 포함됩니다.',
          '**Learn Panel 채팅.** 버전 24 릴리스 노트는 Mylio의 도움말 자료를 검색하는 “GPT-powered chat within the Learn Panel”을 설명합니다. 어디에서 실행되고 무엇을 전송하는지는 Mylio가 밝히지 않았습니다.',
          '**실행 위치.** App Store의 설명 외에도 Mylio 홈페이지에는 “organize media and run AI locally, no internet needed”라고 적혀 있으며, 2023년 출시 안내문에는 검색 인덱스가 사용자 기기에서 만들어진다고 되어 있습니다.',
        ],
        note: '이것은 Mylio 자체의 설명입니다. PromptQuorum은 검색 관련성, 얼굴 인식 정확도, OCR 지원 언어, 속도를 테스트하지 않았으며, Mylio는 사용 모델을 밝히지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**자료에 따르면 Mylio의 서버나 제3자에 도달하는 것은 세 가지이며, 그중 AI 처리는 없습니다.** 기기는 Mylio 계정으로 동기화됩니다. 선택형 유료 기능인 Mylio Drive+는 파일의 최적화된 사본을 Backblaze 기반 서버에 저장하며, 계정에 로그인한 기기만 읽을 수 있도록 암호화합니다(24.4 릴리스 노트). Shared Albums와 공유 링크는 사용자가 고른 사진을 Mylio가 호스팅하는 웹 페이지에 게시합니다(2023년 출시 안내문).',
          '개인정보 처리방침에는 마지막 개정일이 2018년 5월 14일로 적혀 있습니다. 계정 정보, 사용자의 콘텐츠와 메타데이터, 사용 데이터, 기기 식별자가 나열되어 있고, 정보가 미국 또는 다른 국가에서 저장·처리될 수 있다고 하지만 AI, 얼굴 인식, 기기 내 처리는 언급하지 않습니다. 미국 App Store의 개인정보 라벨에는 이름, 기기 ID, 사용자 ID, 충돌 데이터가 분석과 앱 기능을 위해 사용자에게 연결되는 데이터로 표시되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이것은 제공사의 설명과 정책 문구이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았으므로, 얼굴 스캔이나 검색이 서버에 접속하는 경우가 있는지는 확인되지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**사진이 휴대폰, 컴퓨터, 드라이브에 흩어져 있는 분**으로, 모든 것을 클라우드 사진 서비스에 올리지 않고 동기화된 라이브러리를 쓰고 싶은 분.',
          '**얼굴, 사물, 텍스트 검색을 원하는 분**으로, Mylio에 따르면 이 검색은 자신의 기기에서 실행됩니다.',
          '**여러 명이 쓰는 가정:** Duo와 Family 요금제는 각각 2명과 5명을 지원합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 실행 위치.** 기기 내 처리에 관한 설명은 모두 Mylio 자체의 것입니다. Learn Panel 챗봇이 어디에서 실행되고 무엇을 전송하는지는 밝혀지지 않았고, 개인정보 처리방침은 AI를 다루지 않습니다.',
          '**AI 품질.** 검색 관련성, 얼굴 인식 정확도, 텍스트 인식은 테스트하지 않았습니다.',
          '**무료 요금제.** 릴리스 노트에는 무료 요금제가 언급되지만 현재 가입 페이지는 무료 체험이 있는 유료 요금제를 나열할 뿐 무엇이 계속 무료인지는 밝히지 않습니다.',
          '**가격.** 가입 페이지는 통화를 밝히지 않고, 스토어마다 가격이 다르며, 이전 Mylio 게시물에는 더 낮은 금액이 적혀 있습니다.',
          '**최소 사양.** 확인한 자료에는 Windows, macOS, Android의 최소 운영체제 버전도, RAM이나 저장 공간 요구 사항도 공개되어 있지 않습니다.',
          '**Google Play.** Play 페이지를 읽을 수 없었으므로 데이터 보안 라벨과 Android 가격은 다루지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 사진 라이브러리 리뷰가 네 개 더 있으며, 서버를 직접 운영하는지, 한 번만 결제하는지, 암호화된 클라우드 저장소를 쓰는지가 주된 차이입니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[Excire Foto](/ko/power-local-llm/excire-foto-review)',
            '플랫폼': 'Windows, Mac',
            '가격 / 라이선스': '일회성 구매 / 비공개 소스',
            '핵심 차이점': 'Excire에 따르면 로컬 AI 검색을 갖춘 데스크톱 관리 프로그램. Windows와 Mac 전용',
          },
          {
            '앱': '[Ente Photos](/ko/power-local-llm/ente-photos-review)',
            '플랫폼': 'iOS, Android, 데스크톱, 웹',
            '가격 / 라이선스': '무료 10 GB, 유료 요금제 / AGPL-3.0',
            '핵심 차이점': '기기 내 AI를 갖춘 암호화 클라우드 저장소. 오픈 소스',
          },
          {
            '앱': '[Immich](/ko/power-local-llm/immich-review)',
            '플랫폼': '서버(Docker), 휴대폰 앱, 브라우저',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이점': '휴대폰 백업을 지원하는 셀프 호스팅 서버. 설치에 Docker 필요',
          },
          {
            '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)',
            '플랫폼': '서버(Docker), 브라우저',
            '가격 / 라이선스': '무료 Community / AGPL-3.0',
            '핵심 차이점': 'AI 라벨이 내장된 셀프 호스팅 웹 앱',
          },
        ],
        note: '각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Mylio Photos는 로컬 LLM입니까?',
            a: '아닙니다. 자료에는 이미지 태그, 얼굴·텍스트 인식, Learn Panel의 도움말 챗봇이 설명되어 있을 뿐, 로컬 언어 모델에 대한 설명은 없습니다.',
          },
          {
            q: 'Mylio Photos는 오프라인에서 작동합니까?',
            a: 'Mylio 홈페이지는 “run AI locally, no internet needed”라고 하고 “even offline” 검색이 가능하다고 합니다. 예외는 나열하지 않았으며, 로그인, 동기화, 도움말 채팅에는 당연히 연결이 필요합니다.',
          },
          {
            q: 'Mylio Photos의 가격은 얼마입니까?',
            a: '다운로드는 무료이고 유료 요금제는 구독입니다. 스토어별 가격은 “입수 방법”의 주석을 참고하십시오. Mylio의 가입 페이지에는 30일 환불 보장도 표시됩니다.',
          },
          {
            q: '결제 전에 써 볼 수 있습니까?',
            a: '네. 가입 페이지는 “Free Trial + Gift”를 제공하며 오늘은 결제되지 않는다고 안내합니다. 체험 기간은 명시되어 있지 않습니다.',
          },
          {
            q: 'Mylio는 내 사진을 클라우드로 보냅니까?',
            a: 'Mylio에 따르면 AI를 위해서는 보내지 않습니다. 다만 선택 사항인 Mylio Drive+ 저장소와 Shared Albums는 “데이터 흐름과 개인정보”에서 설명한 대로 서버에 파일을 저장하거나 게시합니다.',
          },
          {
            q: '이 프로젝트는 아직 유지보수되고 있습니까?',
            a: '확인된 근거로는 그렇습니다. Mylio의 릴리스 노트에는 버전 24.8 빌드가 2026년 7월 28일, 8월 11일, 10월 6일, 10월 8일에 올라와 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Mylio Photos는 개발사가 SmartTag 검색, 얼굴 인식, 텍스트 인식이 사용자 기기에서 실행된다고 설명하는 비공개 소스 멀티 디바이스 사진 라이브러리이며, 다운로드는 무료이고 유료 요금제는 구독입니다. 반면 이 설명은 개발사 자신의 것이고, 도움말 챗봇의 실행 위치는 밝혀지지 않았으며, 개인정보 처리방침은 2018년 것으로 AI를 다루지 않고, 선택형 클라우드 저장소와 공유 앨범은 Mylio의 서버를 사용하며, 무료 요금제의 범위가 불분명하고, PromptQuorum은 앱을 테스트하지 않았습니다. 여러 기기에 사진이 있고 동기화된 라이브러리를 원하며 개발사의 설명을 받아들일 수 있는 분께 적합합니다. 검증된 오프라인 처리나 오픈 소스가 필요하다면 셀프 호스팅 대안을 살펴보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Mylio Photos 홈페이지](https://mylio.com/) — 플랫폼, 요금제, AI 기능 설명. 2026년 10월 30일 확인.',
          '[Mylio 다운로드 페이지](https://mylio.com/download/) — 설치 파일과 스토어 링크. 2026년 10월 30일 확인.',
          '[Mylio 가입 페이지](https://mylio.com/signup-personal/) — 요금제와 가격. 2026년 10월 30일 확인.',
          '[Mylio 변경 기록 및 릴리스 노트](https://support.mylio.com/change-log-and-release-notes) — 24.7 및 24.8 버전과 빌드 날짜. 2026년 10월 30일 확인.',
          '[Mylio 버전 24 릴리스 노트](https://support.mylio.com/version-24-release-notes) — Dynamic Search, 얼굴 스캔, Learn Panel 채팅, Mylio Drive+. 2026년 10월 30일 확인.',
          '[Mylio 개인정보 처리방침](https://mylio.com/privacy/) — 수집 데이터와 처리 위치. 2018년 5월 14일 개정.',
          '[미국 App Store의 Mylio Photos](https://apps.apple.com/us/app/mylio-photos/id908787435) — 버전 24.8.7904, 인앱 구입, AI 설명, 개인정보 라벨. 2026년 10월 30일 확인.',
          '[Mylio 버전 24 출시 안내문](https://news.mylio.com/mylio-photos-new-version-to-solve-digital-clutter-privacy-concerns/) — SmartTag, 로컬 검색 인덱스, Shared Albums. 2023년 8월 30일 게시.',
          '[Mylio 가격 공지](https://inspire.mylio.com/important-announcement-mylio-photos-price-increase/) — 2024년 Mylio Photos+ 가격.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Excire Foto 리뷰](/ko/power-local-llm/excire-foto-review) — 로컬 AI 검색을 갖춘 비공개 소스 데스크톱 사진 관리 프로그램.',
          '[Ente Photos 리뷰](/ko/power-local-llm/ente-photos-review) — 기기에서 얼굴 검색과 자연어 검색을 지원하는 암호화 사진 백업.',
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — 휴대폰 백업과 스마트 검색을 갖춘 셀프 호스팅 사진 라이브러리.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
