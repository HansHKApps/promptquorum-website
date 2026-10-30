// ACDSee Photo Studio Ultimate 2027 Review: Windows Photo Editor and Manager with Local and Cloud AI
// Slug: acdsee-photo-studio-ultimate-review
// Companion to: excire-foto-review, facet-review, photoprism-review
// Sources (all read 2026-10-30, no hands-on testing): acdsee.com AI page (/en/photo-studio/AI), Photo Studio Ultimate product page, buy page (US, DE, FR), free-trials page and trial thank-you page,
// release notes (acuw20en), privacy policy (dated 19 January 2026) and the Fstoppers launch article of 2026-09-21. The request came from the site owner (link from localhosted.com), not from
// ACD Systems: no maker comment exists and there is no founder-review badge.
// Last upstream update 2026-09-16 (build 20.0.0.4660, release notes) = 44 days before 2026-10-30 => stale warning OFF; it would switch on after 2026-12-15 without a newer build.
// Prices: $179.99 from the English store; EUR 209.99 incl. VAT from the German and French stores. The Japanese and Spanish storefronts showed only the 2026 edition, so JA/ES/PT/KO/ZH/AR
// keep the USD figure with a note (geo-translation currency rules; no invented local prices).
// Not verified and NOT claimed: offline use after activation, the AI models, speed and quality, the software's interface languages, credit costs, and whether generative data is "never stored"
// (AI page) or "deleted after a week" (Fstoppers). No affiliate links.

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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-en.webp',
    title: 'ACDSee Photo Studio Ultimate 2027 Review: Photo Editor With Local and Cloud AI',
    seoTitle: 'ACDSee Ultimate 2027 Review: Local AI, Cloud Generative',
    intro:
      'ACDSee Photo Studio Ultimate 2027 is a closed-source photo manager and RAW editor for Windows. According to ACDSee, its core AI features (face recognition, keywording, masking, upscaling) run on your own PC, while four generative tools send your images to ACDSee\'s cloud. It is sold as a perpetual licence and needs an email address and internet connection to activate. This review reflects ACDSee\'s website, release notes and privacy policy as checked on 30 October 2026; the current release is build 20.0.0.4660 of 16 September 2026.',
    metaDescription:
      'ACDSee Photo Studio Ultimate 2027 review: Windows photo manager and RAW editor whose core AI runs locally, per ACDSee, while generative tools use the cloud.',
    twitterDescription:
      'ACDSee Photo Studio Ultimate 2027 review: a Windows photo editor with perpetual licence. Which AI features run on your PC, which four go to the cloud, what activation and credits involve.',
    audience:
      'Windows photographers who want one program for cataloguing and RAW editing with AI tools, and who need to know which of those AI features keep images on their own PC and which send them to a cloud service.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'ACDSee Photo Studio Ultimate 2027 review',
    targetKeywords: [
      'acdsee photo studio ultimate 2027 review',
      'acdsee ai local or cloud',
      'photo editor with offline ai',
      'lightroom alternative perpetual license',
      'acdsee generative fill credits',
      'windows photo manager face recognition',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 is a closed-source Windows photo manager and RAW editor whose AI is split in two: according to ACDSee, face recognition, keywording, similarity search, masking, denoising and upscaling run on your PC, while AI Image Generation, Generative Fill, Generative Edit and AI Remove use ACDSee\'s cloud.** The newest build, 20.0.0.4660, was released on 16 September 2026, so no stale-project warning applies.',
    quickAnswerTop: {
      en: {
        question: 'Does ACDSee Photo Studio Ultimate 2027 keep your photos on your own PC?',
        answer:
          'Mostly, per ACDSee: its AI page says the core AI features operate locally and that facial recognition does not use cloud AI processing. The four generative tools are the exception and route prompts and images through ACDSee\'s servers. Activation needs an email address and an internet connection, and ACDSee does not say whether the program works offline afterwards. PromptQuorum has not inspected network traffic.',
        bullets: [
          'Closed source, perpetual licence for one device, with a 15-day trial; a subscription plan exists separately.',
          'Windows 10 (64-bit) and Windows 11 only; there is no Mac version of this product.',
          'Local AI, per ACDSee: keywording, face recognition, similarity grouping, upscaling, denoising, sky replacement, face edit and masking.',
          'Cloud AI: image generation, Generative Fill, Generative Edit and AI Remove, which use AI credits.',
          'Latest build 20.0.0.4660 dated 16 September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is ACDSee Photo Studio Ultimate 2027?', anchor: 'what-is-acdsee' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 is a paid, closed-source Windows program for organising and editing photos that, per ACDSee, runs most of its AI on your PC and sends only its four generative tools to a cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'You install it on a Windows PC, catalogue and edit your photos there, and use AI for tagging, faces and masks locally; if you use Generative Fill or image generation, that image goes to ACDSee\'s servers and spends credits.',
          },
        ],
        items: [
          'Maintenance: build 20.0.0.4660 carries a release-notes date of 16 September 2026, which is 44 days before this review, so no stale warning applies.',
          'Maker: ACD Systems International Inc. of Victoria, Canada, according to its privacy policy.',
          'Scope: photo management, RAW development, layers and AI tools; it is not a chat or language-model assistant.',
          'Platform: Windows only; ACDSee sells a separate product for Mac.',
          'Cloud: generative tools need an internet connection and AI credits, and ACDSee\'s statements about how long those images are kept differ between sources.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on ACDSee\'s website, release notes and privacy policy, checked on 30 October 2026, plus one press article. PromptQuorum has not installed the program, so AI quality, speed and the real network behaviour are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'What Is ACDSee Photo Studio Ultimate 2027?',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 is the top edition of ACDSee\'s Windows photo suite: a digital asset manager, a non-destructive RAW editor and a layered editor in one program.** ACDSee lists support for more than 750 camera models, stacking, AI reverse image search and grouping by visual similarity on the management side, and Color and Tone Wheels, Light EQ and AI Develop Presets on the editing side. A separate ACDSee Mobile Sync feature transfers photos and videos from iPhone and Android over Wi-Fi.',
          'The publisher is ACD Systems International Inc. in Victoria, British Columbia, according to the ACDSee privacy policy. The same family also includes Professional and Home editions and a Gemstone Photo Editor; this review covers Ultimate, the only edition that lists every AI feature below.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 is a Windows installer download; you buy a perpetual licence or start the 15-day trial, and activation needs an email address and an internet connection.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Website', 'How to get it': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { 'Option': 'Free trial', 'How to get it': '[15-day trial](https://www.acdsee.com/en/free-trials/) for Windows' },
          { 'Option': 'Buy', 'How to get it': '[ACDSee store](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/): perpetual licence, $179.99, one device' },
          { 'Option': 'Windows', 'How to get it': 'Installer .exe, 778 MB, build 20.0.0.4660' },
          { 'Option': 'Mac', 'How to get it': 'Not supported; ACDSee sells Photo Studio for Mac separately' },
          { 'Option': 'Release notes', 'How to get it': '[Build 20.0.0.4660, 16 September 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'Option': 'Privacy policy', 'How to get it': '[ACDSee privacy policy](https://www.acdsee.com/en/privacy-policy/)' },
          { 'Option': 'Source code', 'How to get it': 'None: proprietary software' },
        ],
        note: 'Version reviewed: Photo Studio Ultimate 2027, build 20.0.0.4660, last updated 16 September 2026. Confirm the current price at checkout, and note that ACDSee lists a 30-day money-back guarantee on purchases.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**ACDSee lists Windows 10 (64-bit) or Windows 11, 8 GB of RAM (16 GB recommended) and a DirectX 12 graphics adapter with at least 2 GB of video memory.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'Windows 10 (64-bit only) or Windows 11; Mac is not supported' },
          { 'Item': 'Processor', 'What the sources say': '64-bit Intel or AMD; Intel i5 or better recommended' },
          { 'Item': 'Memory', 'What the sources say': '8 GB minimum, 16 GB or more recommended' },
          { 'Item': 'Graphics', 'What the sources say': 'DirectX 12 adapter (feature level 12_0 or later), 2 GB VRAM minimum, 4 GB recommended' },
          { 'Item': 'Disk space', 'What the sources say': '5 GB free; the installer is 778 MB' },
          { 'Item': 'Display', 'What the sources say': '1920 x 1080 or higher recommended' },
          { 'Item': 'Activation', 'What the sources say': 'A valid email address and an internet connection' },
        ],
        note: 'These figures come from ACDSee\'s product page; PromptQuorum did not measure speed or memory use on any hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from ACDSee\'s product page and release notes; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Management.** Auto-Stack and custom stacking, AI reverse image search, grouping by AI image similarity, a Reject tag, face detection and recognition, and a background Activity Manager.',
          '**RAW editing.** Non-destructive development for more than 750 camera models, Color and Tone Wheels, Light EQ, the Clone tool and AI Develop Presets.',
          '**Layers.** Layer masks, blend modes, text, shapes, AI selection tools and AI filters such as Sky Replacement and Face Edit.',
          '**Generative tools.** Text-to-image generation, Generative Fill, Generative Edit and AI Remove.',
          '**Latest build.** The 16 September 2026 release notes add six RAW camera models, JPEG XL support inside DNG files, new Develop preset categories and more lens profiles, and fix crashes.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'AI Features and Where They Run',
        content: [
          '**ACDSee\'s AI page states that the core AI-driven features operate locally and that generative AI features use cloud processing.** The AI is image-based; no chat assistant or language model is described.',
        ],
        columns: ['AI feature', 'Where it runs, per ACDSee'],
        rows: [
          { 'AI feature': 'AI Keywords', 'Where it runs, per ACDSee': 'Local, on your PC' },
          { 'AI feature': 'Face detection and recognition', 'Where it runs, per ACDSee': 'Local; the page says it does not use cloud-based AI processing' },
          { 'AI feature': 'AI Image Similarity', 'Where it runs, per ACDSee': 'Local' },
          { 'AI feature': 'AI Super-Resolution and AI Denoise', 'Where it runs, per ACDSee': 'Local' },
          { 'AI feature': 'AI Sky Replacement, Face Edit and AI Actions', 'Where it runs, per ACDSee': 'Local' },
          { 'AI feature': 'AI masking and selection tools', 'Where it runs, per ACDSee': 'Local' },
          { 'AI feature': 'AI Image Generation', 'Where it runs, per ACDSee': 'Cloud' },
          { 'AI feature': 'Generative Fill and Generative Edit', 'Where it runs, per ACDSee': 'Cloud' },
          { 'AI feature': 'AI Remove', 'Where it runs, per ACDSee': 'Cloud' },
        ],
        note: 'These are ACDSee\'s own statements. ACDSee does not name the models, and PromptQuorum did not test quality, speed or network traffic.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**For the generative tools, ACDSee\'s AI page says prompts and images are encrypted before being routed through ACDSee\'s servers and are not stored; the Fstoppers launch article instead reports that the requests are deleted a week later.** These two statements differ, so check the current terms before sending sensitive images.',
          'Other data flows in the sources: activation needs a valid email address, and the program\'s connection to ACDSee\'s licence and update services sends connection time, IP address, an application ID, product version, install date and licence number, according to the privacy policy. Crash data may be collected and is kept for up to 30 days. The privacy policy is dated 19 January 2026 and does not say whether photos are uploaded; for local features that statement rests on the AI page.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the vendor\'s declarations, not audit results. ACDSee does not state whether the program works offline after activation, and PromptQuorum has not inspected network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows photographers** who want cataloguing, RAW development and layers in one program with a perpetual licence.',
          '**Privacy-minded users** who want AI tagging, face recognition and masks on their own PC and will avoid the four generative tools.',
          '**Users who like generative fill** and accept that those images go to a cloud service and use credits.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Offline use.** Activation needs the internet; whether everything else works without a connection afterwards is not stated.',
          '**Credits.** The trial thank-you page mentions 2,000 AI credits and the Fstoppers launch article says the purchase includes 20,000, while the store page lists none and a third-party price tracker reports the bonus ended with the presale; what a generative edit costs is not published in the sources read.',
          '**Retention.** "Not stored" (ACDSee AI page) versus "deleted a week later" (Fstoppers) for cloud images.',
          '**AI quality.** Keywording accuracy, face grouping, masking and upscaling quality were not tested.',
          '**Languages.** The software\'s interface languages are not listed in the sources read.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'These three reviewed photo tools are the nearest alternatives in the directory; none of them is a full RAW editor with layers.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Excire Foto](/power-local-llm/excire-foto-review)', 'Platforms': 'Windows, Mac', 'Price / license': 'One-time purchase / closed source', 'Key difference': 'Photo manager whose AI search and culling run locally per its maker; no editor' },
          { 'App': '[Facet](/power-local-llm/facet-review)', 'Platforms': 'Self-hosted (Docker or Python), browser', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source scoring and culling gallery with local face recognition; terminal setup' },
          { 'App': '[PhotoPrism](/power-local-llm/photoprism-review)', 'Platforms': 'Server (Docker), browser', 'Price / license': 'Free Community / AGPL-3.0', 'Key difference': 'Self-hosted web library with AI labels; not a desktop editor' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is ACDSee Photo Studio Ultimate 2027 a local LLM?',
            a: 'No. The sources describe image AI for tagging, faces, masks, upscaling and generation, and they name no chat feature or language model.',
          },
          {
            q: 'Which AI features need the cloud?',
            a: 'Four: AI Image Generation, Generative Fill, Generative Edit and AI Remove. ACDSee says every other AI feature runs locally.',
          },
          {
            q: 'What else does it cost besides the licence?',
            a: 'The German and French stores list €209.99 including VAT, and the separate ACDSee 365 Complete subscription is $9.99 a month or $99.99 a year for up to five devices. Generative tools use AI credits whose price per edit is not published in the sources read.',
          },
          {
            q: 'Does it run on a Mac?',
            a: 'No. Ultimate 2027 is Windows only; ACDSee sells a separate Photo Studio for Mac product, which this review does not cover.',
          },
          {
            q: 'Can I try it first?',
            a: 'Yes, ACDSee offers a 15-day free trial, and the trial thank-you page mentions 2,000 AI credits. The trial page does not list feature limits.',
          },
          {
            q: 'Is it still maintained?',
            a: 'Yes, by the evidence read: the release notes list build 20.0.0.4660 on 16 September 2026. They contain only that one entry, so release cadence cannot be judged.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'ACDSee Photo Studio Ultimate 2027 combines cataloguing, RAW editing and layers with AI keywording, face recognition, masking and upscaling that ACDSee says run on your PC, under a perpetual licence with a 15-day trial. Against that, it is closed source and Windows only, activation needs an email address and internet, the four generative tools send images to ACDSee\'s cloud and use credits, and ACDSee\'s retention statements differ between sources. It suits Windows photographers who want one subscription-free program and will use the local AI tools; anyone who needs everything offline, open source or on a Mac should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[ACDSee AI page](https://www.acdsee.com/en/photo-studio/AI) — local versus cloud AI features and privacy statements, checked 30 October 2026.',
          '[ACDSee Photo Studio Ultimate product page](https://www.acdsee.com/en/products/photo-studio-ultimate/) — features, system requirements, build and download size, checked 30 October 2026.',
          '[ACDSee buy page](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — licence type, price and subscription plan, checked 30 October 2026.',
          '[ACDSee free trials](https://www.acdsee.com/en/free-trials/) — 15-day trial, checked 30 October 2026.',
          '[ACDSee release notes](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — build 20.0.0.4660, 16 September 2026.',
          '[ACDSee privacy policy](https://www.acdsee.com/en/privacy-policy/) — data collected, licence connections, crash data, dated 19 January 2026.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — launch article of 21 September 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Excire Foto Review](/power-local-llm/excire-foto-review) — a Windows and Mac photo manager with local AI search and culling.',
          '[Facet Review](/power-local-llm/facet-review) — an open-source photo scoring and culling gallery with local face recognition.',
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — a self-hosted photo library with built-in AI labels.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ACDSee Photo Studio Ultimate 2027 Review: Photo Editor With Local and Cloud AI',
      description:
        'ACDSee Photo Studio Ultimate 2027 review: a closed-source Windows photo manager and RAW editor whose core AI runs locally per ACDSee, with four cloud generative tools. Requirements, licence, privacy and credits.',
      url: 'https://www.promptquorum.com/power-local-llm/acdsee-photo-studio-ultimate-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Windows photographers evaluating a photo editor with local and cloud AI' },
      about: [
        { '@type': 'Thing', name: 'ACDSee Photo Studio Ultimate' },
        { '@type': 'Thing', name: 'Photo management software' },
        { '@type': 'Thing', name: 'RAW photo editing' },
        { '@type': 'Thing', name: 'Generative AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/acdsee-photo-studio-ultimate-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'ACDSee Photo Studio Ultimate 2027 Review', item: 'https://www.promptquorum.com/power-local-llm/acdsee-photo-studio-ultimate-review' },
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-de.webp',
    title: 'ACDSee Photo Studio Ultimate 2027 Rezension: Fotoeditor mit lokaler und Cloud-KI',
    seoTitle: 'ACDSee Ultimate 2027 Rezension: Lokale KI, Cloud-Generativ',
    intro:
      'ACDSee Photo Studio Ultimate 2027 ist ein nicht quelloffener Foto-Manager und RAW-Editor für Windows. Laut ACDSee laufen die zentralen KI-Funktionen (Gesichtserkennung, Verschlagwortung, Masken, Hochskalierung) auf Ihrem eigenen PC, während vier generative Werkzeuge Ihre Bilder an die Cloud von ACDSee senden. Verkauft wird er als Dauerlizenz, und für die Aktivierung braucht er eine E-Mail-Adresse und eine Internetverbindung. Diese Rezension gibt Website, Release Notes und Datenschutzerklärung von ACDSee so wieder, wie sie am 30. Oktober 2026 geprüft wurden; aktuell ist Build 20.0.0.4660 vom 16. September 2026.',
    metaDescription:
      'ACDSee-Photo-Studio-Ultimate-2027-Rezension: Foto-Manager und RAW-Editor für Windows, dessen zentrale KI laut ACDSee lokal läuft; generative Werkzeuge nutzen die Cloud.',
    twitterDescription:
      'ACDSee-Photo-Studio-Ultimate-2027-Rezension: ein Windows-Fotoeditor mit Dauerlizenz. Welche KI-Funktionen auf Ihrem PC laufen, welche vier in die Cloud gehen und was Aktivierung und Credits bedeuten.',
    audience:
      'Fotografinnen und Fotografen unter Windows, die ein Programm für Katalogisierung und RAW-Bearbeitung mit KI-Werkzeugen suchen und wissen müssen, welche dieser KI-Funktionen Bilder auf dem eigenen PC lassen und welche sie an einen Cloud-Dienst senden.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'ACDSee Photo Studio Ultimate 2027 Rezension',
    targetKeywords: [
      'acdsee photo studio ultimate 2027 rezension',
      'acdsee ki lokal oder cloud',
      'fotoeditor mit offline ki',
      'lightroom alternative dauerlizenz',
      'acdsee generative füllung credits',
      'windows foto manager gesichtserkennung',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 ist ein nicht quelloffener Foto-Manager und RAW-Editor für Windows, dessen KI zweigeteilt ist: Laut ACDSee laufen Gesichtserkennung, Verschlagwortung, Ähnlichkeitssuche, Masken, Entrauschen und Hochskalierung auf Ihrem PC, während AI Image Generation, Generative Fill, Generative Edit und AI Remove die Cloud von ACDSee nutzen.** Der neueste Build 20.0.0.4660 erschien am 16. September 2026; eine Veraltet-Warnung gilt daher nicht.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Fotos bei ACDSee Photo Studio Ultimate 2027 auf Ihrem eigenen PC?',
        answer:
          'Überwiegend, laut ACDSee: Die KI-Seite sagt, dass die zentralen KI-Funktionen lokal arbeiten und die Gesichtserkennung keine Cloud-KI nutzt. Die vier generativen Werkzeuge sind die Ausnahme und leiten Prompts und Bilder über die Server von ACDSee. Die Aktivierung braucht eine E-Mail-Adresse und Internet, und ACDSee sagt nicht, ob das Programm danach offline funktioniert. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
        bullets: [
          'Nicht quelloffen, Dauerlizenz für ein Gerät mit 15 Tagen Testzeit; ein Abo-Tarif existiert getrennt davon.',
          'Nur Windows 10 (64-Bit) und Windows 11; für Mac gibt es von diesem Produkt keine Version.',
          'Lokale KI laut ACDSee: Verschlagwortung, Gesichtserkennung, Ähnlichkeitsgruppen, Hochskalierung, Entrauschen, Himmelstausch, Gesichtsbearbeitung und Masken.',
          'Cloud-KI: Bildgenerierung, Generative Fill, Generative Edit und AI Remove, die KI-Credits verbrauchen.',
          'Neuester Build 20.0.0.4660 vom 16. September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist ACDSee Photo Studio Ultimate 2027?', anchor: 'what-is-acdsee' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 ist ein kostenpflichtiges, nicht quelloffenes Windows-Programm zum Ordnen und Bearbeiten von Fotos, das laut ACDSee den größten Teil seiner KI auf Ihrem PC ausführt und nur die vier generativen Werkzeuge an einen Cloud-Dienst schickt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren es auf einem Windows-PC, katalogisieren und bearbeiten dort Ihre Fotos und nutzen KI für Schlagwörter, Gesichter und Masken lokal; wenn Sie Generative Fill oder die Bildgenerierung verwenden, geht das Bild an die Server von ACDSee und verbraucht Credits.',
          },
        ],
        items: [
          'Pflege: Build 20.0.0.4660 trägt in den Release Notes das Datum 16. September 2026, also 44 Tage vor dieser Rezension; eine Veraltet-Warnung gilt daher nicht.',
          'Hersteller: ACD Systems International Inc. in Victoria, Kanada, laut Datenschutzerklärung.',
          'Umfang: Fotoverwaltung, RAW-Entwicklung, Ebenen und KI-Werkzeuge; kein Chat- oder Sprachmodell-Assistent.',
          'Plattform: nur Windows; für den Mac verkauft ACDSee ein eigenes Produkt.',
          'Cloud: Die generativen Werkzeuge brauchen Internet und KI-Credits, und die Angaben von ACDSee zur Aufbewahrungsdauer dieser Bilder unterscheiden sich je nach Quelle.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf Website, Release Notes und Datenschutzerklärung von ACDSee, geprüft am 30. Oktober 2026, sowie einem Presseartikel. PromptQuorum hat das Programm nicht installiert; KI-Qualität, Geschwindigkeit und tatsächliches Netzwerkverhalten wurden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'Was ist ACDSee Photo Studio Ultimate 2027?',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 ist die Top-Edition der Windows-Fotosuite von ACDSee: ein Digital-Asset-Manager, ein nicht destruktiver RAW-Editor und ein Ebenen-Editor in einem Programm.** ACDSee nennt auf der Verwaltungsseite Unterstützung für mehr als 750 Kameramodelle, Stapel, KI-Rückwärtssuche nach Bildern und Gruppierung nach visueller Ähnlichkeit, auf der Bearbeitungsseite Color und Tone Wheels, Light EQ und AI Develop Presets. Die Funktion ACDSee Mobile Sync überträgt Fotos und Videos von iPhone und Android per WLAN.',
          'Herausgeber ist laut Datenschutzerklärung von ACDSee die ACD Systems International Inc. in Victoria, British Columbia. Zur Familie gehören außerdem die Editionen Professional und Home sowie ein Gemstone Photo Editor; diese Rezension behandelt Ultimate, die einzige Edition, die alle unten genannten KI-Funktionen aufführt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 ist ein Installer-Download für Windows; Sie kaufen eine Dauerlizenz oder starten die 15-Tage-Testversion, und die Aktivierung braucht eine E-Mail-Adresse und eine Internetverbindung.**',
        ],
        columns: ['Option', 'So erhalten Sie es'],
        rows: [
          { 'Option': 'Website', 'So erhalten Sie es': '[acdsee.com](https://www.acdsee.com/de/products/photo-studio-ultimate/)' },
          { 'Option': 'Kostenlose Testversion', 'So erhalten Sie es': '[15-Tage-Test](https://www.acdsee.com/en/free-trials/) für Windows' },
          { 'Option': 'Kaufen', 'So erhalten Sie es': '[ACDSee-Shop](https://www.acdsee.com/de/products/photo-studio-ultimate/buy/): Dauerlizenz, 209,99 € inkl. MwSt. (deutscher Shop), ein Gerät' },
          { 'Option': 'Windows', 'So erhalten Sie es': 'Installer (.exe), 778 MB, Build 20.0.0.4660' },
          { 'Option': 'Mac', 'So erhalten Sie es': 'Nicht unterstützt; Photo Studio für Mac verkauft ACDSee getrennt' },
          { 'Option': 'Release Notes', 'So erhalten Sie es': '[Build 20.0.0.4660, 16. September 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'Option': 'Datenschutzerklärung', 'So erhalten Sie es': '[Datenschutzerklärung von ACDSee](https://www.acdsee.com/en/privacy-policy/)' },
          { 'Option': 'Quellcode', 'So erhalten Sie es': 'Keiner: proprietäre Software' },
        ],
        note: 'Geprüfte Version: Photo Studio Ultimate 2027, Build 20.0.0.4660, zuletzt aktualisiert am 16. September 2026. Prüfen Sie den aktuellen Preis an der Kasse; ACDSee nennt für Käufe eine 30-Tage-Geld-zurück-Garantie.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**ACDSee nennt Windows 10 (64-Bit) oder Windows 11, 8 GB RAM (empfohlen 16 GB) und eine DirectX-12-Grafikkarte mit mindestens 2 GB Videospeicher.**',
        ],
        columns: ['Punkt', 'Was die Quellen sagen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Was die Quellen sagen': 'Windows 10 (nur 64-Bit) oder Windows 11; Mac wird nicht unterstützt' },
          { 'Punkt': 'Prozessor', 'Was die Quellen sagen': '64-Bit-Intel oder -AMD; empfohlen Intel i5 oder besser' },
          { 'Punkt': 'Arbeitsspeicher', 'Was die Quellen sagen': 'Mindestens 8 GB, empfohlen 16 GB oder mehr' },
          { 'Punkt': 'Grafik', 'Was die Quellen sagen': 'DirectX-12-Karte (Feature Level 12_0 oder höher), mindestens 2 GB VRAM, empfohlen 4 GB' },
          { 'Punkt': 'Speicherplatz', 'Was die Quellen sagen': '5 GB frei; der Installer ist 778 MB groß' },
          { 'Punkt': 'Bildschirm', 'Was die Quellen sagen': '1920 x 1080 oder höher empfohlen' },
          { 'Punkt': 'Aktivierung', 'Was die Quellen sagen': 'Eine gültige E-Mail-Adresse und eine Internetverbindung' },
        ],
        note: 'Diese Angaben stammen von der Produktseite von ACDSee; PromptQuorum hat Geschwindigkeit und Speicherverbrauch auf keiner Hardware gemessen.',
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alle folgenden Punkte stammen von der Produktseite und den Release Notes von ACDSee; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Verwaltung.** Auto-Stack und eigene Stapel, KI-Rückwärtssuche nach Bildern, Gruppierung nach KI-Bildähnlichkeit, ein Reject-Tag, Gesichtserkennung und ein Activity Manager im Hintergrund.',
          '**RAW-Bearbeitung.** Nicht destruktive Entwicklung für mehr als 750 Kameramodelle, Color und Tone Wheels, Light EQ, das Klonwerkzeug und AI Develop Presets.',
          '**Ebenen.** Ebenenmasken, Mischmodi, Text, Formen, KI-Auswahlwerkzeuge und KI-Filter wie Sky Replacement und Face Edit.',
          '**Generative Werkzeuge.** Text-zu-Bild-Generierung, Generative Fill, Generative Edit und AI Remove.',
          '**Neuester Build.** Die Release Notes vom 16. September 2026 ergänzen sechs RAW-Kameramodelle, JPEG-XL-Unterstützung in DNG-Dateien, neue Develop-Preset-Kategorien und weitere Objektivprofile und beheben Abstürze.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die KI-Seite von ACDSee nennt die zentralen KI-Funktionen lokal und sagt, dass generative KI-Funktionen Cloud-Verarbeitung nutzen.** Die KI ist bildbasiert; ein Chat-Assistent oder Sprachmodell wird nicht beschrieben.',
        ],
        columns: ['KI-Funktion', 'Wo sie laufen, laut ACDSee'],
        rows: [
          { 'KI-Funktion': 'AI Keywords', 'Wo sie laufen, laut ACDSee': 'Lokal, auf Ihrem PC' },
          { 'KI-Funktion': 'Gesichtserkennung', 'Wo sie laufen, laut ACDSee': 'Lokal; laut Seite ohne Cloud-KI-Verarbeitung' },
          { 'KI-Funktion': 'AI Image Similarity', 'Wo sie laufen, laut ACDSee': 'Lokal' },
          { 'KI-Funktion': 'AI Super-Resolution und AI Denoise', 'Wo sie laufen, laut ACDSee': 'Lokal' },
          { 'KI-Funktion': 'AI Sky Replacement, Face Edit und AI Actions', 'Wo sie laufen, laut ACDSee': 'Lokal' },
          { 'KI-Funktion': 'KI-Masken und Auswahlwerkzeuge', 'Wo sie laufen, laut ACDSee': 'Lokal' },
          { 'KI-Funktion': 'AI Image Generation', 'Wo sie laufen, laut ACDSee': 'Cloud' },
          { 'KI-Funktion': 'Generative Fill und Generative Edit', 'Wo sie laufen, laut ACDSee': 'Cloud' },
          { 'KI-Funktion': 'AI Remove', 'Wo sie laufen, laut ACDSee': 'Cloud' },
        ],
        note: 'Das sind die eigenen Aussagen von ACDSee. ACDSee nennt die Modelle nicht, und PromptQuorum hat weder Qualität noch Geschwindigkeit noch Netzwerkverkehr geprüft.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Für die generativen Werkzeuge sagt die KI-Seite von ACDSee, dass Prompts und Bilder verschlüsselt über die Server von ACDSee geleitet und nicht gespeichert werden; der Launch-Artikel von Fstoppers berichtet dagegen, dass die Anfragen eine Woche später gelöscht werden.** Diese beiden Angaben unterscheiden sich; prüfen Sie die aktuellen Bedingungen, bevor Sie sensible Bilder senden.',
          'Weitere Datenflüsse in den Quellen: Die Aktivierung braucht eine gültige E-Mail-Adresse, und die Verbindung des Programms zu den Lizenz- und Update-Diensten von ACDSee übermittelt laut Datenschutzerklärung Verbindungszeit, IP-Adresse, eine Anwendungs-ID, Produktversion, Installationsdatum und Lizenznummer. Absturzdaten können erhoben und bis zu 30 Tage gespeichert werden. Die Datenschutzerklärung trägt das Datum 19. Januar 2026 und sagt nicht, ob Fotos hochgeladen werden; für lokale Funktionen stützt sich diese Aussage auf die KI-Seite.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Herstellerangaben, keine Prüfergebnisse. ACDSee sagt nicht, ob das Programm nach der Aktivierung offline funktioniert, und PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Fotografen unter Windows**, die Katalogisierung, RAW-Entwicklung und Ebenen in einem Programm mit Dauerlizenz wollen.',
          '**Datenschutzbewusste Nutzer**, die KI-Verschlagwortung, Gesichtserkennung und Masken auf dem eigenen PC wollen und die vier generativen Werkzeuge meiden.',
          '**Nutzer, die Generative Fill mögen** und akzeptieren, dass diese Bilder an einen Cloud-Dienst gehen und Credits verbrauchen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Offline-Nutzung.** Die Aktivierung braucht Internet; ob alles Weitere danach ohne Verbindung funktioniert, wird nicht angegeben.',
          '**Credits.** Die Danke-Seite der Testversion erwähnt 2.000 KI-Credits, und der Launch-Artikel von Fstoppers sagt, der Kauf enthalte 20.000; die Shop-Seite nennt keine, und ein Preisbeobachter eines Dritten meldet, der Bonus sei mit dem Vorverkauf ausgelaufen. Was eine generative Bearbeitung kostet, steht in den gelesenen Quellen nicht.',
          '**Aufbewahrung.** „Nicht gespeichert“ (KI-Seite von ACDSee) gegenüber „eine Woche später gelöscht“ (Fstoppers) bei Cloud-Bildern.',
          '**KI-Qualität.** Genauigkeit der Verschlagwortung, Gesichtsgruppierung, Masken und Hochskalierung wurden nicht getestet.',
          '**Sprachen.** Die Oberflächensprachen der Software werden in den gelesenen Quellen nicht genannt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Konkurrenz',
        content: [
          'Diese drei getesteten Foto-Werkzeuge sind die nächsten Alternativen im Verzeichnis; keines davon ist ein vollwertiger RAW-Editor mit Ebenen.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Excire Foto](/de/power-local-llm/excire-foto-review)', 'Plattformen': 'Windows, Mac', 'Preis / Lizenz': 'Einmalkauf / nicht quelloffen', 'Hauptunterschied': 'Foto-Manager, dessen KI-Suche und Bildauswahl laut Hersteller lokal laufen; kein Editor' },
          { 'App': '[Facet](/de/power-local-llm/facet-review)', 'Plattformen': 'Selbst gehostet (Docker oder Python), Browser', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Quelloffene Galerie mit Bewertung und Bildauswahl und lokaler Gesichtserkennung; Einrichtung im Terminal' },
          { 'App': '[PhotoPrism](/de/power-local-llm/photoprism-review)', 'Plattformen': 'Server (Docker), Browser', 'Preis / Lizenz': 'Kostenlos (Community) / AGPL-3.0', 'Hauptunterschied': 'Selbst gehostete Web-Bibliothek mit KI-Labels; kein Desktop-Editor' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Ist ACDSee Photo Studio Ultimate 2027 ein lokales LLM?',
            a: 'Nein. Die Quellen beschreiben Bild-KI für Verschlagwortung, Gesichter, Masken, Hochskalierung und Generierung und nennen weder eine Chat-Funktion noch ein Sprachmodell.',
          },
          {
            q: 'Welche KI-Funktionen brauchen die Cloud?',
            a: 'Vier: AI Image Generation, Generative Fill, Generative Edit und AI Remove. Alle anderen KI-Funktionen laufen laut ACDSee lokal.',
          },
          {
            q: 'Was kostet es außer der Lizenz noch?',
            a: 'Der US-Shop nennt 179,99 US-Dollar für die Dauerlizenz, und das getrennte Abo ACDSee 365 Complete kostet im deutschen Shop 10,99 € im Monat oder 109,99 € im Jahr. Die generativen Werkzeuge verbrauchen KI-Credits, deren Preis pro Bearbeitung in den gelesenen Quellen nicht steht.',
          },
          {
            q: 'Läuft es auf dem Mac?',
            a: 'Nein. Ultimate 2027 gibt es nur für Windows; ACDSee verkauft ein eigenes Produkt Photo Studio für Mac, das diese Rezension nicht behandelt.',
          },
          {
            q: 'Kann ich es vorher testen?',
            a: 'Ja, ACDSee bietet eine 15-Tage-Testversion, und die Danke-Seite der Testversion erwähnt 2.000 KI-Credits. Die Testseite nennt keine Funktionseinschränkungen.',
          },
          {
            q: 'Wird es noch gepflegt?',
            a: 'Ja, nach den gelesenen Belegen: Die Release Notes führen Build 20.0.0.4660 vom 16. September 2026 auf. Sie enthalten nur diesen einen Eintrag, daher lässt sich der Veröffentlichungsrhythmus nicht beurteilen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'ACDSee Photo Studio Ultimate 2027 verbindet Katalogisierung, RAW-Bearbeitung und Ebenen mit KI-Verschlagwortung, Gesichtserkennung, Masken und Hochskalierung, die laut ACDSee auf Ihrem PC laufen, als Dauerlizenz mit 15 Tagen Testzeit. Dagegen steht: nicht quelloffen und nur für Windows, die Aktivierung braucht eine E-Mail-Adresse und Internet, die vier generativen Werkzeuge senden Bilder an die Cloud von ACDSee und verbrauchen Credits, und die Angaben von ACDSee zur Aufbewahrung unterscheiden sich je nach Quelle. Geeignet für Fotografen unter Windows, die ein Programm ohne Abo wollen und die lokalen KI-Werkzeuge nutzen; wer alles offline, quelloffen oder auf dem Mac braucht, sollte sich anderswo umsehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[KI-Seite von ACDSee](https://www.acdsee.com/en/photo-studio/AI) — lokale gegenüber Cloud-KI-Funktionen und Datenschutzaussagen, geprüft am 30. Oktober 2026.',
          '[Produktseite von ACDSee Photo Studio Ultimate](https://www.acdsee.com/en/products/photo-studio-ultimate/) — Funktionen, Systemanforderungen, Build und Downloadgröße, geprüft am 30. Oktober 2026.',
          '[Kaufseite von ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — Lizenzart, Preis und Abo-Tarif, geprüft am 30. Oktober 2026.',
          '[Testversionen von ACDSee](https://www.acdsee.com/en/free-trials/) — 15-Tage-Testversion, geprüft am 30. Oktober 2026.',
          '[Release Notes von ACDSee](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — Build 20.0.0.4660, 16. September 2026.',
          '[Datenschutzerklärung von ACDSee](https://www.acdsee.com/en/privacy-policy/) — erhobene Daten, Lizenzverbindungen, Absturzdaten, datiert 19. Januar 2026.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — Launch-Artikel vom 21. September 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Excire-Foto-Rezension](/de/power-local-llm/excire-foto-review) — ein Foto-Manager für Windows und Mac mit lokaler KI-Suche und Bildauswahl.',
          '[Facet-Rezension](/de/power-local-llm/facet-review) — eine quelloffene Galerie mit Bildbewertung und Bildauswahl und lokaler Gesichtserkennung.',
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine selbst gehostete Fotobibliothek mit integrierten KI-Labels.',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-es.webp',
    title: 'Reseña de ACDSee Photo Studio Ultimate 2027: editor de fotos con IA local y en la nube',
    seoTitle: 'Reseña ACDSee Ultimate 2027: IA local y generativa en nube',
    intro:
      'ACDSee Photo Studio Ultimate 2027 es un gestor de fotos y editor RAW de código cerrado para Windows. Según ACDSee, sus funciones de IA principales (reconocimiento de caras, palabras clave, máscaras, escalado) se ejecutan en tu propio PC, mientras que cuatro herramientas generativas envían tus imágenes a la nube de ACDSee. Se vende con licencia perpetua y necesita una dirección de correo y conexión a internet para activarse. Esta reseña recoge el sitio web, las notas de versión y la política de privacidad de ACDSee tal como se consultaron el 30 de octubre de 2026; la versión actual es la compilación 20.0.0.4660 del 16 de septiembre de 2026.',
    metaDescription:
      'Reseña de ACDSee Photo Studio Ultimate 2027: gestor de fotos y editor RAW para Windows cuya IA principal es local, según ACDSee; las herramientas generativas usan la nube.',
    twitterDescription:
      'Reseña de ACDSee Photo Studio Ultimate 2027: un editor de fotos para Windows con licencia perpetua. Qué funciones de IA se ejecutan en tu PC, cuáles cuatro van a la nube y qué implican la activación y los créditos.',
    audience:
      'Fotógrafos con Windows que quieren un solo programa para catalogar y editar en RAW con herramientas de IA, y que necesitan saber cuáles de esas funciones mantienen las imágenes en su PC y cuáles las envían a un servicio en la nube.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña ACDSee Photo Studio Ultimate 2027',
    targetKeywords: [
      'reseña acdsee photo studio ultimate 2027',
      'acdsee ia local o nube',
      'editor de fotos con ia sin conexión',
      'alternativa a lightroom licencia perpetua',
      'acdsee relleno generativo créditos',
      'gestor de fotos windows reconocimiento facial',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 es un gestor de fotos y editor RAW de código cerrado para Windows cuya IA se divide en dos: según ACDSee, el reconocimiento de caras, las palabras clave, la búsqueda por similitud, las máscaras, la reducción de ruido y el escalado se ejecutan en tu PC, mientras que AI Image Generation, Generative Fill, Generative Edit y AI Remove usan la nube de ACDSee.** La compilación más reciente, 20.0.0.4660, se publicó el 16 de septiembre de 2026, así que no se aplica ninguna advertencia de obsolescencia.',
    quickAnswerTop: {
      es: {
        question: '¿ACDSee Photo Studio Ultimate 2027 mantiene tus fotos en tu propio PC?',
        answer:
          'En su mayoría, según ACDSee: su página de IA dice que las funciones de IA principales funcionan en local y que el reconocimiento facial no usa procesamiento de IA en la nube. Las cuatro herramientas generativas son la excepción y envían prompts e imágenes por los servidores de ACDSee. La activación necesita una dirección de correo e internet, y ACDSee no indica si el programa funciona sin conexión después. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Código cerrado, licencia perpetua para un dispositivo con prueba de 15 días; existe un plan de suscripción aparte.',
          'Solo Windows 10 (64 bits) y Windows 11; este producto no tiene versión para Mac.',
          'IA local según ACDSee: palabras clave, reconocimiento de caras, agrupación por similitud, escalado, reducción de ruido, cambio de cielo, edición de caras y máscaras.',
          'IA en la nube: generación de imágenes, Generative Fill, Generative Edit y AI Remove, que consumen créditos de IA.',
          'Última compilación 20.0.0.4660, con fecha del 16 de septiembre de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es ACDSee Photo Studio Ultimate 2027?', anchor: 'what-is-acdsee' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 es un programa de Windows de pago y código cerrado para organizar y editar fotos que, según ACDSee, ejecuta la mayor parte de su IA en tu PC y envía solo sus cuatro herramientas generativas a un servicio en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Lo instalas en un PC con Windows, catalogas y editas allí tus fotos y usas la IA en local para palabras clave, caras y máscaras; si usas Generative Fill o la generación de imágenes, la imagen va a los servidores de ACDSee y gasta créditos.',
          },
        ],
        items: [
          'Mantenimiento: la compilación 20.0.0.4660 lleva en las notas de versión la fecha del 16 de septiembre de 2026, 44 días antes de esta reseña, por lo que no se aplica advertencia de obsolescencia.',
          'Editor: ACD Systems International Inc., de Victoria (Canadá), según su política de privacidad.',
          'Alcance: gestión de fotos, revelado RAW, capas y herramientas de IA; no es un asistente de chat ni un modelo de lenguaje.',
          'Plataforma: solo Windows; ACDSee vende un producto aparte para Mac.',
          'Nube: las herramientas generativas necesitan internet y créditos de IA, y las declaraciones de ACDSee sobre cuánto tiempo se conservan esas imágenes difieren según la fuente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, las notas de versión y la política de privacidad de ACDSee, consultados el 30 de octubre de 2026, y en un artículo de prensa. PromptQuorum no ha instalado el programa, así que no se evalúan la calidad de la IA, la velocidad ni el comportamiento real de red.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: '¿Qué es ACDSee Photo Studio Ultimate 2027?',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 es la edición superior de la suite fotográfica de ACDSee para Windows: un gestor de activos digitales, un editor RAW no destructivo y un editor de capas en un solo programa.** En la parte de gestión, ACDSee cita compatibilidad con más de 750 modelos de cámara, pilas, búsqueda inversa de imágenes con IA y agrupación por similitud visual; en la edición, Color y Tone Wheels, Light EQ y AI Develop Presets. La función ACDSee Mobile Sync transfiere fotos y vídeos desde iPhone y Android por Wi-Fi.',
          'El editor es ACD Systems International Inc., en Victoria (Columbia Británica), según la política de privacidad de ACDSee. La familia incluye además las ediciones Professional y Home y un Gemstone Photo Editor; esta reseña cubre Ultimate, la única edición que lista todas las funciones de IA de abajo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 se descarga como instalador para Windows; compras una licencia perpetua o inicias la prueba de 15 días, y la activación necesita una dirección de correo y conexión a internet.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { 'Opción': 'Prueba gratuita', 'Cómo conseguirlo': '[Prueba de 15 días](https://www.acdsee.com/en/free-trials/) para Windows' },
          { 'Opción': 'Comprar', 'Cómo conseguirlo': '[Tienda de ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/): licencia perpetua, $179.99 (tienda de EE. UU.), un dispositivo' },
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'Instalador .exe, 778 MB, compilación 20.0.0.4660' },
          { 'Opción': 'Mac', 'Cómo conseguirlo': 'No compatible; ACDSee vende Photo Studio para Mac por separado' },
          { 'Opción': 'Notas de versión', 'Cómo conseguirlo': '[Compilación 20.0.0.4660, 16 de septiembre de 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[Política de privacidad de ACDSee](https://www.acdsee.com/en/privacy-policy/)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'Ninguno: software propietario' },
        ],
        note: 'Versión revisada: Photo Studio Ultimate 2027, compilación 20.0.0.4660, última actualización el 16 de septiembre de 2026. El precio en dólares procede de la tienda de EE. UU.; la página en español mostraba solo la edición 2026, así que no se cita un precio en euros y los precios en tu país pueden variar. Confirma el precio actual al pagar; ACDSee indica una garantía de devolución de 30 días en las compras.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**ACDSee indica Windows 10 (64 bits) o Windows 11, 8 GB de RAM (16 GB recomendados) y una tarjeta gráfica DirectX 12 con al menos 2 GB de memoria de vídeo.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'Windows 10 (solo 64 bits) o Windows 11; Mac no es compatible' },
          { 'Elemento': 'Procesador', 'Qué dicen las fuentes': 'Intel o AMD de 64 bits; se recomienda Intel i5 o superior' },
          { 'Elemento': 'Memoria', 'Qué dicen las fuentes': '8 GB mínimo, 16 GB o más recomendados' },
          { 'Elemento': 'Gráficos', 'Qué dicen las fuentes': 'Tarjeta DirectX 12 (nivel de funciones 12_0 o superior), 2 GB de VRAM mínimo, 4 GB recomendados' },
          { 'Elemento': 'Espacio en disco', 'Qué dicen las fuentes': '5 GB libres; el instalador pesa 778 MB' },
          { 'Elemento': 'Pantalla', 'Qué dicen las fuentes': 'Se recomienda 1920 x 1080 o más' },
          { 'Elemento': 'Activación', 'Qué dicen las fuentes': 'Una dirección de correo válida y conexión a internet' },
        ],
        note: 'Estas cifras proceden de la página de producto de ACDSee; PromptQuorum no midió la velocidad ni el uso de memoria en ningún equipo.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede de la página de producto y de las notas de versión de ACDSee; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Gestión.** Auto-Stack y pilas personalizadas, búsqueda inversa de imágenes con IA, agrupación por similitud de imagen con IA, una etiqueta Reject, detección y reconocimiento de caras y un Activity Manager en segundo plano.',
          '**Edición RAW.** Revelado no destructivo para más de 750 modelos de cámara, Color y Tone Wheels, Light EQ, la herramienta Clonar y AI Develop Presets.',
          '**Capas.** Máscaras de capa, modos de fusión, texto, formas, herramientas de selección con IA y filtros de IA como Sky Replacement y Face Edit.',
          '**Herramientas generativas.** Generación de imágenes a partir de texto, Generative Fill, Generative Edit y AI Remove.',
          '**Última compilación.** Las notas de versión del 16 de septiembre de 2026 añaden seis modelos de cámara RAW, compatibilidad con JPEG XL dentro de archivos DNG, nuevas categorías de ajustes preestablecidos Develop y más perfiles de objetivo, y corrigen cierres inesperados.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**La página de IA de ACDSee afirma que las funciones de IA principales funcionan en local y que las funciones de IA generativa usan procesamiento en la nube.** La IA es de imagen; no se describe ningún asistente de chat ni modelo de lenguaje.',
        ],
        columns: ['Función de IA', 'Dónde se ejecuta, según ACDSee'],
        rows: [
          { 'Función de IA': 'AI Keywords', 'Dónde se ejecuta, según ACDSee': 'En local, en tu PC' },
          { 'Función de IA': 'Detección y reconocimiento de caras', 'Dónde se ejecuta, según ACDSee': 'En local; la página dice que no usa IA en la nube' },
          { 'Función de IA': 'AI Image Similarity', 'Dónde se ejecuta, según ACDSee': 'En local' },
          { 'Función de IA': 'AI Super-Resolution y AI Denoise', 'Dónde se ejecuta, según ACDSee': 'En local' },
          { 'Función de IA': 'AI Sky Replacement, Face Edit y AI Actions', 'Dónde se ejecuta, según ACDSee': 'En local' },
          { 'Función de IA': 'Máscaras y herramientas de selección con IA', 'Dónde se ejecuta, según ACDSee': 'En local' },
          { 'Función de IA': 'AI Image Generation', 'Dónde se ejecuta, según ACDSee': 'Nube' },
          { 'Función de IA': 'Generative Fill y Generative Edit', 'Dónde se ejecuta, según ACDSee': 'Nube' },
          { 'Función de IA': 'AI Remove', 'Dónde se ejecuta, según ACDSee': 'Nube' },
        ],
        note: 'Son afirmaciones de la propia ACDSee. ACDSee no nombra los modelos, y PromptQuorum no probó la calidad, la velocidad ni el tráfico de red.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Para las herramientas generativas, la página de IA de ACDSee dice que los prompts y las imágenes se cifran antes de pasar por los servidores de ACDSee y no se almacenan; el artículo de lanzamiento de Fstoppers informa, en cambio, de que las solicitudes se borran una semana después.** Las dos afirmaciones difieren; revisa las condiciones vigentes antes de enviar imágenes sensibles.',
          'Otros flujos de datos en las fuentes: la activación necesita una dirección de correo válida, y la conexión del programa con los servicios de licencia y actualización de ACDSee envía, según la política de privacidad, la hora de conexión, la dirección IP, un identificador de aplicación, la versión del producto, la fecha de instalación y el número de licencia. Pueden recogerse datos de fallos, que se conservan hasta 30 días. La política de privacidad lleva fecha del 19 de enero de 2026 y no dice si se suben fotos; para las funciones locales, esa afirmación se apoya en la página de IA.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. ACDSee no indica si el programa funciona sin conexión tras la activación, y PromptQuorum no ha inspeccionado el tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Fotógrafos con Windows** que quieren catalogación, revelado RAW y capas en un solo programa con licencia perpetua.',
          '**Usuarios atentos a la privacidad** que quieren palabras clave con IA, reconocimiento de caras y máscaras en su propio PC y evitarán las cuatro herramientas generativas.',
          '**Quienes disfrutan del relleno generativo** y aceptan que esas imágenes van a un servicio en la nube y consumen créditos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Uso sin conexión.** La activación necesita internet; no se indica si el resto funciona sin conexión después.',
          '**Créditos.** La página de agradecimiento de la prueba menciona 2000 créditos de IA y el artículo de lanzamiento de Fstoppers dice que la compra incluye 20 000, mientras que la página de la tienda no cita ninguno y un seguidor de precios de terceros informa de que la bonificación terminó con la preventa; el coste de una edición generativa no figura en las fuentes leídas.',
          '**Conservación.** «No se almacena» (página de IA de ACDSee) frente a «se borra una semana después» (Fstoppers) para las imágenes enviadas a la nube.',
          '**Calidad de la IA.** No se probó la precisión de las palabras clave, la agrupación de caras, las máscaras ni el escalado.',
          '**Idiomas.** Los idiomas de la interfaz del software no se indican en las fuentes leídas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'Estas tres herramientas de fotos con reseña son las alternativas más cercanas del directorio; ninguna es un editor RAW completo con capas.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Excire Foto](/es/power-local-llm/excire-foto-review)', 'Plataformas': 'Windows, Mac', 'Precio / licencia': 'Pago único / código cerrado', 'Diferencia clave': 'Gestor de fotos cuya búsqueda por IA y selección se ejecutan en local según su fabricante; sin editor' },
          { 'App': '[Facet](/es/power-local-llm/facet-review)', 'Plataformas': 'Autoalojado (Docker o Python), navegador', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Galería de código abierto para puntuar y seleccionar con reconocimiento facial local; instalación por terminal' },
          { 'App': '[PhotoPrism](/es/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Precio / licencia': 'Gratis (Community) / AGPL-3.0', 'Diferencia clave': 'Biblioteca web autoalojada con etiquetas de IA; no es un editor de escritorio' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿ACDSee Photo Studio Ultimate 2027 es un LLM local?',
            a: 'No. Las fuentes describen una IA de imagen para palabras clave, caras, máscaras, escalado y generación, y no citan ninguna función de chat ni modelo de lenguaje.',
          },
          {
            q: '¿Qué funciones de IA necesitan la nube?',
            a: 'Cuatro: AI Image Generation, Generative Fill, Generative Edit y AI Remove. Según ACDSee, el resto de las funciones de IA se ejecutan en local.',
          },
          {
            q: '¿Cuánto cuesta además de la licencia?',
            a: 'La suscripción aparte ACDSee 365 Complete cuesta $9.99 al mes o $99.99 al año para hasta cinco dispositivos (tienda de EE. UU.). Las herramientas generativas consumen créditos de IA cuyo precio por edición no figura en las fuentes leídas.',
          },
          {
            q: '¿Funciona en Mac?',
            a: 'No. Ultimate 2027 es solo para Windows; ACDSee vende un producto aparte, Photo Studio para Mac, que esta reseña no cubre.',
          },
          {
            q: '¿Puedo probarlo antes?',
            a: 'Sí, ACDSee ofrece una prueba gratuita de 15 días, y la página de agradecimiento de la prueba menciona 2000 créditos de IA. La página de la prueba no lista límites de funciones.',
          },
          {
            q: '¿Sigue recibiendo mantenimiento?',
            a: 'Sí, según las pruebas leídas: las notas de versión incluyen la compilación 20.0.0.4660 del 16 de septiembre de 2026. Solo contienen esa entrada, por lo que no se puede juzgar el ritmo de publicación.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'ACDSee Photo Studio Ultimate 2027 combina catalogación, edición RAW y capas con palabras clave por IA, reconocimiento de caras, máscaras y escalado que, según ACDSee, se ejecutan en tu PC, con licencia perpetua y prueba de 15 días. En contra: es de código cerrado y solo para Windows, la activación necesita una dirección de correo e internet, las cuatro herramientas generativas envían imágenes a la nube de ACDSee y consumen créditos, y las declaraciones de ACDSee sobre la conservación difieren según la fuente. Encaja con fotógrafos con Windows que quieren un programa sin suscripción y usarán las herramientas de IA locales; quien necesite todo sin conexión, de código abierto o en Mac debería buscar en otra parte.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de IA de ACDSee](https://www.acdsee.com/en/photo-studio/AI) — funciones de IA locales frente a la nube y declaraciones de privacidad, consultada el 30 de octubre de 2026.',
          '[Página de producto de ACDSee Photo Studio Ultimate](https://www.acdsee.com/en/products/photo-studio-ultimate/) — funciones, requisitos del sistema, compilación y tamaño de descarga, consultada el 30 de octubre de 2026.',
          '[Página de compra de ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — tipo de licencia, precio y plan de suscripción, consultada el 30 de octubre de 2026.',
          '[Pruebas gratuitas de ACDSee](https://www.acdsee.com/en/free-trials/) — prueba de 15 días, consultada el 30 de octubre de 2026.',
          '[Notas de versión de ACDSee](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — compilación 20.0.0.4660, 16 de septiembre de 2026.',
          '[Política de privacidad de ACDSee](https://www.acdsee.com/en/privacy-policy/) — datos recogidos, conexiones de licencia, datos de fallos, con fecha del 19 de enero de 2026.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — artículo de lanzamiento del 21 de septiembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Excire Foto](/es/power-local-llm/excire-foto-review) — un gestor de fotos para Windows y Mac con búsqueda y selección por IA en local.',
          '[Reseña de Facet](/es/power-local-llm/facet-review) — una galería de código abierto para puntuar y seleccionar fotos con reconocimiento facial local.',
          '[Reseña de PhotoPrism](/es/power-local-llm/photoprism-review) — una biblioteca de fotos autoalojada con etiquetas de IA integradas.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-fr.webp',
    title: 'Test d’ACDSee Photo Studio Ultimate 2027 : éditeur photo avec IA locale et cloud',
    seoTitle: 'Test ACDSee Ultimate 2027 : IA locale, génératif cloud',
    intro:
      'ACDSee Photo Studio Ultimate 2027 est un gestionnaire de photos et éditeur RAW pour Windows, à code fermé. Selon ACDSee, ses fonctions d’IA principales (reconnaissance des visages, mots-clés, masques, agrandissement) s’exécutent sur votre propre PC, tandis que quatre outils génératifs envoient vos images au cloud d’ACDSee. Il est vendu en licence perpétuelle et exige une adresse e-mail et une connexion internet pour l’activation. Ce test reprend le site, les notes de version et la politique de confidentialité d’ACDSee tels qu’ils ont été consultés le 30 octobre 2026 ; la version actuelle est le build 20.0.0.4660 du 16 septembre 2026.',
    metaDescription:
      'Test d’ACDSee Photo Studio Ultimate 2027 : gestionnaire de photos et éditeur RAW pour Windows dont l’IA principale est locale selon ACDSee ; les outils génératifs passent par le cloud.',
    twitterDescription:
      'Test d’ACDSee Photo Studio Ultimate 2027 : un éditeur photo Windows en licence perpétuelle. Quelles fonctions d’IA tournent sur votre PC, lesquelles passent par le cloud, et ce qu’impliquent l’activation et les crédits.',
    audience:
      'Photographes sous Windows qui veulent un seul programme pour cataloguer et retoucher en RAW avec des outils d’IA, et qui doivent savoir lesquelles de ces fonctions gardent les images sur leur PC et lesquelles les envoient à un service cloud.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test ACDSee Photo Studio Ultimate 2027',
    targetKeywords: [
      'test acdsee photo studio ultimate 2027',
      'acdsee ia locale ou cloud',
      'éditeur photo avec ia hors ligne',
      'alternative lightroom licence perpétuelle',
      'acdsee remplissage génératif crédits',
      'gestionnaire photo windows reconnaissance faciale',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 est un gestionnaire de photos et éditeur RAW pour Windows, à code fermé, dont l’IA se répartit en deux : selon ACDSee, la reconnaissance des visages, les mots-clés, la recherche par similarité, les masques, la réduction du bruit et l’agrandissement s’exécutent sur votre PC, tandis qu’AI Image Generation, Generative Fill, Generative Edit et AI Remove utilisent le cloud d’ACDSee.** Le build le plus récent, 20.0.0.4660, date du 16 septembre 2026 : aucun avertissement d’obsolescence ne s’applique.',
    quickAnswerTop: {
      fr: {
        question: 'ACDSee Photo Studio Ultimate 2027 garde-t-il vos photos sur votre propre PC ?',
        answer:
          'En grande partie, selon ACDSee : sa page sur l’IA indique que les fonctions d’IA principales fonctionnent en local et que la reconnaissance faciale n’utilise pas de traitement IA dans le cloud. Les quatre outils génératifs font exception et font passer prompts et images par les serveurs d’ACDSee. L’activation exige une adresse e-mail et internet, et ACDSee ne précise pas si le programme fonctionne hors ligne ensuite. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Code fermé, licence perpétuelle pour un appareil avec essai de 15 jours ; un abonnement existe séparément.',
          'Windows 10 (64 bits) et Windows 11 uniquement ; ce produit n’a pas de version Mac.',
          'IA locale selon ACDSee : mots-clés, reconnaissance des visages, regroupement par similarité, agrandissement, réduction du bruit, remplacement du ciel, retouche du visage et masques.',
          'IA dans le cloud : génération d’images, Generative Fill, Generative Edit et AI Remove, qui consomment des crédits d’IA.',
          'Dernier build 20.0.0.4660 daté du 16 septembre 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’ACDSee Photo Studio Ultimate 2027 ?', anchor: 'what-is-acdsee' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 est un programme Windows payant et à code fermé pour organiser et retoucher des photos qui, selon ACDSee, exécute l’essentiel de son IA sur votre PC et n’envoie que ses quatre outils génératifs à un service cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez sur un PC Windows, y cataloguez et retouchez vos photos, et utilisez l’IA en local pour les mots-clés, les visages et les masques ; si vous employez Generative Fill ou la génération d’images, l’image part vers les serveurs d’ACDSee et consomme des crédits.',
          },
        ],
        items: [
          'Maintenance : le build 20.0.0.4660 porte la date du 16 septembre 2026 dans les notes de version, soit 44 jours avant ce test ; aucun avertissement d’obsolescence ne s’applique.',
          'Éditeur : ACD Systems International Inc. à Victoria (Canada), selon sa politique de confidentialité.',
          'Périmètre : gestion de photos, développement RAW, calques et outils d’IA ; ce n’est pas un assistant de chat ni un modèle de langage.',
          'Plateforme : Windows uniquement ; ACDSee vend un produit distinct pour Mac.',
          'Cloud : les outils génératifs exigent internet et des crédits d’IA, et les déclarations d’ACDSee sur la durée de conservation de ces images diffèrent selon les sources.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, les notes de version et la politique de confidentialité d’ACDSee, consultés le 30 octobre 2026, ainsi que sur un article de presse. PromptQuorum n’a pas installé le programme : la qualité de l’IA, la vitesse et le comportement réseau réel ne sont donc pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'Qu’est-ce qu’ACDSee Photo Studio Ultimate 2027 ?',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 est l’édition haut de gamme de la suite photo Windows d’ACDSee : un gestionnaire de ressources numériques, un éditeur RAW non destructif et un éditeur à calques réunis dans un seul programme.** Côté gestion, ACDSee mentionne la prise en charge de plus de 750 modèles d’appareils, les piles, la recherche d’images inversée par IA et le regroupement par similarité visuelle ; côté retouche, les Color et Tone Wheels, Light EQ et les AI Develop Presets. La fonction ACDSee Mobile Sync transfère photos et vidéos depuis un iPhone ou un Android via le Wi-Fi.',
          'L’éditeur est ACD Systems International Inc. à Victoria (Colombie-Britannique), selon la politique de confidentialité d’ACDSee. La gamme comprend aussi les éditions Professional et Home ainsi qu’un Gemstone Photo Editor ; ce test porte sur Ultimate, la seule édition qui liste toutes les fonctions d’IA ci-dessous.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 se télécharge sous forme d’installateur Windows ; vous achetez une licence perpétuelle ou lancez l’essai de 15 jours, et l’activation exige une adresse e-mail et une connexion internet.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Site web', 'Comment l’obtenir': '[acdsee.com](https://www.acdsee.com/fr/products/photo-studio-ultimate/)' },
          { 'Option': 'Essai gratuit', 'Comment l’obtenir': '[Essai de 15 jours](https://www.acdsee.com/en/free-trials/) pour Windows' },
          { 'Option': 'Acheter', 'Comment l’obtenir': '[Boutique ACDSee](https://www.acdsee.com/fr/products/photo-studio-ultimate/buy/) : licence perpétuelle, 209,99 € TTC (boutique française), un appareil' },
          { 'Option': 'Windows', 'Comment l’obtenir': 'Installateur .exe, 778 Mo, build 20.0.0.4660' },
          { 'Option': 'Mac', 'Comment l’obtenir': 'Non pris en charge ; ACDSee vend Photo Studio pour Mac séparément' },
          { 'Option': 'Notes de version', 'Comment l’obtenir': '[Build 20.0.0.4660, 16 septembre 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[Politique de confidentialité d’ACDSee](https://www.acdsee.com/en/privacy-policy/)' },
          { 'Option': 'Code source', 'Comment l’obtenir': 'Aucun : logiciel propriétaire' },
        ],
        note: 'Version testée : Photo Studio Ultimate 2027, build 20.0.0.4660, dernière mise à jour le 16 septembre 2026. Confirmez le prix actuel au moment du paiement ; ACDSee indique une garantie de remboursement de 30 jours sur les achats.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**ACDSee indique Windows 10 (64 bits) ou Windows 11, 8 Go de RAM (16 Go recommandés) et une carte graphique DirectX 12 avec au moins 2 Go de mémoire vidéo.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système d’exploitation', 'Ce que disent les sources': 'Windows 10 (64 bits uniquement) ou Windows 11 ; Mac non pris en charge' },
          { 'Élément': 'Processeur', 'Ce que disent les sources': 'Intel ou AMD 64 bits ; Intel i5 ou mieux recommandé' },
          { 'Élément': 'Mémoire', 'Ce que disent les sources': '8 Go minimum, 16 Go ou plus recommandés' },
          { 'Élément': 'Graphisme', 'Ce que disent les sources': 'Carte DirectX 12 (niveau de fonctionnalités 12_0 ou plus), 2 Go de VRAM minimum, 4 Go recommandés' },
          { 'Élément': 'Espace disque', 'Ce que disent les sources': '5 Go libres ; l’installateur pèse 778 Mo' },
          { 'Élément': 'Écran', 'Ce que disent les sources': '1920 x 1080 ou plus recommandé' },
          { 'Élément': 'Activation', 'Ce que disent les sources': 'Une adresse e-mail valide et une connexion internet' },
        ],
        note: 'Ces valeurs proviennent de la page produit d’ACDSee ; PromptQuorum n’a mesuré ni la vitesse ni l’utilisation de la mémoire sur aucun matériel.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tous les éléments ci-dessous proviennent de la page produit et des notes de version d’ACDSee ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Gestion.** Auto-Stack et piles personnalisées, recherche d’images inversée par IA, regroupement par similarité d’image IA, une étiquette Reject, détection et reconnaissance des visages et un Activity Manager en arrière-plan.',
          '**Retouche RAW.** Développement non destructif pour plus de 750 modèles d’appareils, Color et Tone Wheels, Light EQ, l’outil Clone et les AI Develop Presets.',
          '**Calques.** Masques de calque, modes de fusion, texte, formes, outils de sélection par IA et filtres IA comme Sky Replacement et Face Edit.',
          '**Outils génératifs.** Génération d’images à partir de texte, Generative Fill, Generative Edit et AI Remove.',
          '**Dernier build.** Les notes de version du 16 septembre 2026 ajoutent six modèles d’appareils RAW, la prise en charge de JPEG XL dans les fichiers DNG, de nouvelles catégories de presets Develop et davantage de profils d’objectifs, et corrigent des plantages.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**La page IA d’ACDSee indique que les fonctions d’IA principales fonctionnent en local et que les fonctions d’IA générative utilisent un traitement dans le cloud.** L’IA porte sur les images ; aucun assistant de chat ni modèle de langage n’est décrit.',
        ],
        columns: ['Fonction d’IA', 'Où elle s’exécute, selon ACDSee'],
        rows: [
          { 'Fonction d’IA': 'AI Keywords', 'Où elle s’exécute, selon ACDSee': 'En local, sur votre PC' },
          { 'Fonction d’IA': 'Détection et reconnaissance des visages', 'Où elle s’exécute, selon ACDSee': 'En local ; la page exclut un traitement IA dans le cloud' },
          { 'Fonction d’IA': 'AI Image Similarity', 'Où elle s’exécute, selon ACDSee': 'En local' },
          { 'Fonction d’IA': 'AI Super-Resolution et AI Denoise', 'Où elle s’exécute, selon ACDSee': 'En local' },
          { 'Fonction d’IA': 'AI Sky Replacement, Face Edit et AI Actions', 'Où elle s’exécute, selon ACDSee': 'En local' },
          { 'Fonction d’IA': 'Masques et outils de sélection par IA', 'Où elle s’exécute, selon ACDSee': 'En local' },
          { 'Fonction d’IA': 'AI Image Generation', 'Où elle s’exécute, selon ACDSee': 'Cloud' },
          { 'Fonction d’IA': 'Generative Fill et Generative Edit', 'Où elle s’exécute, selon ACDSee': 'Cloud' },
          { 'Fonction d’IA': 'AI Remove', 'Où elle s’exécute, selon ACDSee': 'Cloud' },
        ],
        note: 'Il s’agit des déclarations d’ACDSee elle-même. ACDSee ne nomme pas les modèles, et PromptQuorum n’a testé ni la qualité, ni la vitesse, ni le trafic réseau.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Pour les outils génératifs, la page IA d’ACDSee indique que les prompts et les images sont chiffrés avant de passer par les serveurs d’ACDSee et ne sont pas conservés ; l’article de lancement de Fstoppers rapporte au contraire que les requêtes sont supprimées une semaine plus tard.** Ces deux déclarations diffèrent ; vérifiez les conditions actuelles avant d’envoyer des images sensibles.',
          'Autres flux de données dans les sources : l’activation exige une adresse e-mail valide, et la connexion du programme aux services de licence et de mise à jour d’ACDSee transmet, selon la politique de confidentialité, l’heure de connexion, l’adresse IP, un identifiant d’application, la version du produit, la date d’installation et le numéro de licence. Des données de plantage peuvent être collectées et sont conservées jusqu’à 30 jours. La politique de confidentialité est datée du 19 janvier 2026 et ne dit pas si des photos sont téléversées ; pour les fonctions locales, cette affirmation repose sur la page IA.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. ACDSee ne précise pas si le programme fonctionne hors ligne après l’activation, et PromptQuorum n’a pas inspecté le trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les photographes sous Windows** qui veulent catalogage, développement RAW et calques dans un seul programme avec licence perpétuelle.',
          '**Les utilisateurs attentifs à la confidentialité** qui veulent mots-clés par IA, reconnaissance des visages et masques sur leur propre PC, et éviteront les quatre outils génératifs.',
          '**Ceux qui apprécient le remplissage génératif** et acceptent que ces images partent vers un service cloud et consomment des crédits.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Usage hors ligne.** L’activation exige internet ; la page ne dit pas si le reste fonctionne sans connexion ensuite.',
          '**Crédits.** La page de remerciement de l’essai mentionne 2 000 crédits d’IA et l’article de lancement de Fstoppers affirme que l’achat en inclut 20 000, alors que la page de la boutique n’en cite aucun et qu’un suivi de prix tiers indique que ce bonus a pris fin avec la prévente ; le coût d’une retouche générative ne figure pas dans les sources lues.',
          '**Conservation.** « Non conservé » (page IA d’ACDSee) contre « supprimé une semaine plus tard » (Fstoppers) pour les images envoyées au cloud.',
          '**Qualité de l’IA.** La précision des mots-clés, du regroupement des visages, des masques et de l’agrandissement n’a pas été testée.',
          '**Langues.** Les langues d’interface du logiciel ne sont pas indiquées dans les sources lues.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Ces trois outils photo testés sont les alternatives les plus proches dans l’annuaire ; aucun n’est un éditeur RAW complet avec calques.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Excire Foto](/fr/power-local-llm/excire-foto-review)', 'Plateformes': 'Windows, Mac', 'Prix / licence': 'Achat unique / code fermé', 'Différence clé': 'Gestionnaire de photos dont la recherche par IA et le tri s’exécutent en local selon l’éditeur ; pas d’éditeur' },
          { 'Application': '[Facet](/fr/power-local-llm/facet-review)', 'Plateformes': 'Auto-hébergé (Docker ou Python), navigateur', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Galerie open source de notation et de tri avec reconnaissance faciale locale ; installation en terminal' },
          { 'Application': '[PhotoPrism](/fr/power-local-llm/photoprism-review)', 'Plateformes': 'Serveur (Docker), navigateur', 'Prix / licence': 'Gratuit (Community) / AGPL-3.0', 'Différence clé': 'Bibliothèque web auto-hébergée avec étiquettes IA ; pas un éditeur de bureau' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'ACDSee Photo Studio Ultimate 2027 est-il un LLM local ?',
            a: 'Non. Les sources décrivent une IA d’image pour les mots-clés, les visages, les masques, l’agrandissement et la génération, et ne citent ni fonction de chat ni modèle de langage.',
          },
          {
            q: 'Quelles fonctions d’IA ont besoin du cloud ?',
            a: 'Quatre : AI Image Generation, Generative Fill, Generative Edit et AI Remove. Selon ACDSee, toutes les autres fonctions d’IA s’exécutent en local.',
          },
          {
            q: 'Que coûte-t-il en plus de la licence ?',
            a: 'La boutique américaine indique 179,99 $ pour la licence perpétuelle, et l’abonnement distinct ACDSee 365 Complete coûte 9,99 $ par mois ou 99,99 $ par an. Les outils génératifs consomment des crédits d’IA dont le prix par retouche ne figure pas dans les sources lues.',
          },
          {
            q: 'Fonctionne-t-il sur Mac ?',
            a: 'Non. Ultimate 2027 n’existe que pour Windows ; ACDSee vend un produit distinct, Photo Studio pour Mac, que ce test ne couvre pas.',
          },
          {
            q: 'Puis-je l’essayer avant d’acheter ?',
            a: 'Oui, ACDSee propose un essai gratuit de 15 jours, et la page de remerciement de l’essai mentionne 2 000 crédits d’IA. La page de l’essai ne liste pas de limites de fonctions.',
          },
          {
            q: 'Est-il toujours maintenu ?',
            a: 'Oui, d’après les éléments lus : les notes de version listent le build 20.0.0.4660 du 16 septembre 2026. Elles ne contiennent que cette entrée, le rythme des publications ne peut donc pas être jugé.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'ACDSee Photo Studio Ultimate 2027 réunit catalogage, retouche RAW et calques avec des mots-clés par IA, la reconnaissance des visages, les masques et l’agrandissement qui, selon ACDSee, s’exécutent sur votre PC, en licence perpétuelle avec essai de 15 jours. En contrepartie : code fermé et Windows uniquement, l’activation exige une adresse e-mail et internet, les quatre outils génératifs envoient des images au cloud d’ACDSee et consomment des crédits, et les déclarations d’ACDSee sur la conservation diffèrent selon les sources. Il convient aux photographes sous Windows qui veulent un programme sans abonnement et utiliseront les outils d’IA locaux ; ceux qui ont besoin de tout hors ligne, en open source ou sur Mac chercheront ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page IA d’ACDSee](https://www.acdsee.com/en/photo-studio/AI) — fonctions d’IA locales et cloud et déclarations de confidentialité, consultée le 30 octobre 2026.',
          '[Page produit d’ACDSee Photo Studio Ultimate](https://www.acdsee.com/en/products/photo-studio-ultimate/) — fonctions, configuration requise, build et taille du téléchargement, consultée le 30 octobre 2026.',
          '[Page d’achat d’ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — type de licence, prix et abonnement, consultée le 30 octobre 2026.',
          '[Essais gratuits d’ACDSee](https://www.acdsee.com/en/free-trials/) — essai de 15 jours, consultée le 30 octobre 2026.',
          '[Notes de version d’ACDSee](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — build 20.0.0.4660, 16 septembre 2026.',
          '[Politique de confidentialité d’ACDSee](https://www.acdsee.com/en/privacy-policy/) — données collectées, connexions de licence, données de plantage, datée du 19 janvier 2026.',
          '[Fstoppers : ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — article de lancement du 21 septembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Excire Foto](/fr/power-local-llm/excire-foto-review) — un gestionnaire de photos pour Windows et Mac avec recherche et tri par IA en local.',
          '[Test de Facet](/fr/power-local-llm/facet-review) — une galerie open source de notation et de tri avec reconnaissance faciale locale.',
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une bibliothèque de photos auto-hébergée avec étiquettes IA intégrées.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-ja.webp',
    title: 'ACDSee Photo Studio Ultimate 2027レビュー：ローカルAIとクラウドAIを備えた写真編集ソフト',
    seoTitle: 'ACDSee Ultimate 2027レビュー：ローカルAIとクラウド生成',
    intro:
      'ACDSee Photo Studio Ultimate 2027は、Windows向けのクローズドソースの写真管理・RAW編集ソフトです。ACDSeeによると、顔認識、キーワード付け、マスク、拡大といった中心的なAI機能はお使いのPC上で動作し、生成AIの4機能は画像をACDSeeのクラウドに送ります。永続ライセンスで販売されており、認証にはメールアドレスとインターネット接続が必要です。このレビューは、2026年10月30日に確認したACDSeeのウェブサイト、リリースノート、プライバシーポリシーに基づいており、現行版は2026年9月16日のビルド20.0.0.4660です。',
    metaDescription:
      'ACDSee Photo Studio Ultimate 2027のレビュー。ACDSeeによると中心のAIはローカルで動作するWindows向け写真管理・RAW編集ソフトで、生成AIはクラウドを使います。',
    twitterDescription:
      'ACDSee Photo Studio Ultimate 2027のレビュー。永続ライセンスのWindows向け写真編集ソフトで、PC上で動くAI機能、クラウドに送られる4機能、認証とクレジットの内容を解説します。',
    audience:
      'RAW現像とカタログ管理をAIツール付きで1本にまとめたいWindowsユーザーの写真家のうち、どのAI機能が画像を自分のPCにとどめ、どれがクラウドサービスに送るのかを知る必要がある方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'ACDSee Photo Studio Ultimate 2027 レビュー',
    targetKeywords: [
      'acdsee photo studio ultimate 2027 レビュー',
      'acdsee ai ローカル クラウド',
      'オフライン ai 写真編集ソフト',
      'lightroom 代替 永続ライセンス',
      'acdsee 生成塗りつぶし クレジット',
      'windows 写真管理 顔認識',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027は、AIが2つに分かれたWindows向けのクローズドソースの写真管理・RAW編集ソフトです。ACDSeeによると、顔認識、キーワード付け、類似画像検索、マスク、ノイズ除去、拡大はPC上で動作し、AI Image Generation、Generative Fill、Generative Edit、AI RemoveはACDSeeのクラウドを使います。**最新ビルド20.0.0.4660は2026年9月16日に公開されているため、更新停滞の警告は該当しません。',
    quickAnswerTop: {
      ja: {
        question: 'ACDSee Photo Studio Ultimate 2027は写真を自分のPCの中にとどめますか？',
        answer:
          'ACDSeeによれば、ほぼそのとおりです。AIのページには、中心的なAI機能はローカルで動作し、顔認識はクラウドAI処理を使わないと書かれています。例外は4つの生成ツールで、プロンプトと画像がACDSeeのサーバーを経由します。認証にはメールアドレスとインターネットが必要で、認証後にオフラインで動くかどうかはACDSeeに記載がありません。PromptQuorumはネットワーク通信を検査していません。',
        bullets: [
          'クローズドソースで、1台用の永続ライセンスに15日間の試用版があり、サブスクリプションのプランは別にあります。',
          'Windows 10（64ビット）とWindows 11のみで、この製品にMac版はありません。',
          'ACDSeeによるローカルAI：キーワード付け、顔認識、類似画像のグループ化、拡大、ノイズ除去、空の置き換え、顔の編集、マスク。',
          'クラウドAI：画像生成、Generative Fill、Generative Edit、AI Remove（AIクレジットを消費）。',
          '最新ビルドは2026年9月16日付の20.0.0.4660です。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'ACDSee Photo Studio Ultimate 2027とは', anchor: 'what-is-acdsee' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027は、写真の整理と編集に使う有料のクローズドソースのWindowsソフトで、ACDSeeによればAIの大部分をPC上で動かし、4つの生成ツールだけをクラウドサービスに送ります。',
          },
          {
            type: 'plain-terms',
            text: 'WindowsのPCにインストールして写真を管理・編集し、キーワード付け・顔・マスクのAIはローカルで使えます。Generative Fillや画像生成を使うと、その画像はACDSeeのサーバーに送られ、クレジットを消費します。',
          },
        ],
        items: [
          'メンテナンス：ビルド20.0.0.4660のリリースノートの日付は2026年9月16日で、このレビューの44日前のため、更新停滞の警告は該当しません。',
          '提供元：プライバシーポリシーによると、カナダ・ビクトリアのACD Systems International Inc.です。',
          '対象範囲：写真管理、RAW現像、レイヤー、AIツール。チャット型や言語モデルのアシスタントではありません。',
          'プラットフォーム：Windowsのみ。MacにはACDSeeが別製品を販売しています。',
          'クラウド：生成ツールにはインターネットとAIクレジットが必要で、画像の保持期間についてのACDSeeの説明は情報源によって異なります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月30日に確認したACDSeeのウェブサイト、リリースノート、プライバシーポリシーと、報道記事1本に基づいています。PromptQuorumはソフトをインストールしていないため、AIの品質、速度、実際の通信の挙動は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'ACDSee Photo Studio Ultimate 2027とは',
        content: [
          '**ACDSee Photo Studio Ultimate 2027は、ACDSeeのWindows向け写真スイートの最上位エディションで、デジタル資産管理、非破壊のRAWエディター、レイヤーエディターを1本にまとめたソフトです。**管理面では750機種を超えるカメラへの対応、スタック、AIによる画像の逆引き検索、見た目の類似度によるグループ化が挙げられ、編集面ではColor・Tone Wheels、Light EQ、AI Develop Presetsが挙げられています。ACDSee Mobile Syncという機能で、iPhoneとAndroidの写真・動画をWi-Fi経由で転送できます。',
          'ACDSeeのプライバシーポリシーによると、発行元はブリティッシュコロンビア州ビクトリアのACD Systems International Inc.です。同じ製品群にProfessionalとHomeのエディション、Gemstone Photo Editorもありますが、このレビューは、下記のAI機能をすべて掲載している唯一のエディションであるUltimateを対象にしています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**ACDSee Photo Studio Ultimate 2027はWindows用インストーラーをダウンロードする形式で、永続ライセンスを購入するか15日間の試用版を開始します。認証にはメールアドレスとインターネット接続が必要です。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': '公式サイト', '入手方法': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { '項目': '無料試用版', '入手方法': 'Windows用の[15日間試用版](https://www.acdsee.com/en/free-trials/)' },
          { '項目': '購入', '入手方法': '[ACDSeeストア](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/)：永続ライセンス、179.99ドル（米国ストア）、1台' },
          { '項目': 'Windows', '入手方法': '.exeインストーラー、778 MB、ビルド20.0.0.4660' },
          { '項目': 'Mac', '入手方法': '非対応。ACDSeeはPhoto Studio for Macを別に販売' },
          { '項目': 'リリースノート', '入手方法': '[ビルド20.0.0.4660、2026年9月16日](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[ACDSeeのプライバシーポリシー](https://www.acdsee.com/en/privacy-policy/)' },
          { '項目': 'ソースコード', '入手方法': 'なし：プロプライエタリソフトウェア' },
        ],
        note: '確認したバージョン：Photo Studio Ultimate 2027、ビルド20.0.0.4660、最終更新2026年9月16日。価格は米ドルのままで、米国ストアの表示です。日本語ストアには2026年版のみが掲載されていたため、日本の価格は示しておらず、日本での価格は異なる場合があります。現在の価格は決済時に確認してください。ACDSeeは購入に30日間の返金保証を掲げています。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ACDSeeが示す要件は、Windows 10（64ビット）またはWindows 11、RAM 8 GB（推奨16 GB）、ビデオメモリ2 GB以上のDirectX 12対応グラフィックスです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'Windows 10（64ビットのみ）またはWindows 11。Macは非対応' },
          { '項目': 'プロセッサー', '情報源の記載': '64ビットのIntelまたはAMD。Intel i5以上を推奨' },
          { '項目': 'メモリ', '情報源の記載': '最小8 GB、推奨16 GB以上' },
          { '項目': 'グラフィックス', '情報源の記載': 'DirectX 12対応（機能レベル12_0以上）、VRAM最小2 GB、推奨4 GB' },
          { '項目': 'ディスク容量', '情報源の記載': '空き5 GB。インストーラーは778 MB' },
          { '項目': 'ディスプレイ', '情報源の記載': '1920 x 1080以上を推奨' },
          { '項目': '認証', '情報源の記載': '有効なメールアドレスとインターネット接続' },
        ],
        note: 'これらの数値はACDSeeの製品ページによるものです。PromptQuorumは、どのハードウェアでも速度やメモリ使用量を測定していません。',
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてACDSeeの製品ページとリリースノートの記載で、PromptQuorumはどれも検証していません。**',
        ],
        items: [
          '**管理。**Auto-Stackとカスタムスタック、AIによる画像の逆引き検索、AI画像類似度によるグループ化、Rejectタグ、顔の検出と認識、バックグラウンドのActivity Manager。',
          '**RAW編集。**750機種を超えるカメラに対応する非破壊現像、Color・Tone Wheels、Light EQ、クローンツール、AI Develop Presets。',
          '**レイヤー。**レイヤーマスク、描画モード、テキスト、図形、AI選択ツール、Sky ReplacementやFace EditなどのAIフィルター。',
          '**生成ツール。**テキストからの画像生成、Generative Fill、Generative Edit、AI Remove。',
          '**最新ビルド。**2026年9月16日のリリースノートでは、RAW対応カメラ6機種、DNGファイル内のJPEG XL対応、新しいDevelopプリセットのカテゴリー、レンズプロファイルの追加が加わり、クラッシュが修正されています。',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'AI機能と実行場所',
        content: [
          '**ACDSeeのAIページは、中心的なAI機能はローカルで動作し、生成AI機能はクラウド処理を使うと述べています。**AIは画像向けで、チャットアシスタントや言語モデルは説明されていません。',
        ],
        columns: ['AI機能', 'ACDSeeによる実行場所'],
        rows: [
          { 'AI機能': 'AI Keywords', 'ACDSeeによる実行場所': 'ローカル（お使いのPC上）' },
          { 'AI機能': '顔の検出と認識', 'ACDSeeによる実行場所': 'ローカル。クラウドAI処理は使わないと明記' },
          { 'AI機能': 'AI Image Similarity', 'ACDSeeによる実行場所': 'ローカル' },
          { 'AI機能': 'AI Super-ResolutionとAI Denoise', 'ACDSeeによる実行場所': 'ローカル' },
          { 'AI機能': 'AI Sky Replacement、Face Edit、AI Actions', 'ACDSeeによる実行場所': 'ローカル' },
          { 'AI機能': 'AIマスクと選択ツール', 'ACDSeeによる実行場所': 'ローカル' },
          { 'AI機能': 'AI Image Generation', 'ACDSeeによる実行場所': 'クラウド' },
          { 'AI機能': 'Generative FillとGenerative Edit', 'ACDSeeによる実行場所': 'クラウド' },
          { 'AI機能': 'AI Remove', 'ACDSeeによる実行場所': 'クラウド' },
        ],
        note: 'これらはACDSee自身の説明です。ACDSeeはモデル名を示しておらず、PromptQuorumは品質、速度、ネットワーク通信を検証していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**生成ツールについて、ACDSeeのAIページは、プロンプトと画像は暗号化されてACDSeeのサーバーを経由し、保存されないと説明しています。一方、Fstoppersの発表記事は、リクエストが1週間後に削除されると伝えています。**両者の説明は異なるため、機微な画像を送る前に最新の規約を確認してください。',
          '情報源にあるその他のデータの流れ：認証には有効なメールアドレスが必要で、プライバシーポリシーによると、プログラムがACDSeeのライセンス・更新サービスに接続する際、接続時刻、IPアドレス、アプリケーションID、製品バージョン、インストール日、ライセンス番号が送信されます。クラッシュデータが収集されることがあり、最長30日間保管されます。プライバシーポリシーの日付は2026年1月19日で、写真がアップロードされるかどうかには触れていません。ローカル機能については、AIページの説明が根拠です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはベンダー側の説明であり、監査結果ではありません。ACDSeeは認証後にオフラインで動作するかどうかを明記しておらず、PromptQuorumはネットワーク通信を検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**Windowsの写真家**で、カタログ管理、RAW現像、レイヤーを永続ライセンスの1本で使いたい方。',
          '**プライバシーを重視する方**で、AIのキーワード付け、顔認識、マスクを自分のPCで使い、4つの生成ツールは避ける方。',
          '**生成塗りつぶしを使いたい方**で、その画像がクラウドサービスに送られ、クレジットを消費することを受け入れられる方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**オフライン利用。**認証にはインターネットが必要で、認証後にそれ以外の機能が接続なしで動くかどうかは記載がありません。',
          '**クレジット。**試用版のサンクスページには2,000 AIクレジットの記載があり、Fstoppersの発表記事は購入に20,000が含まれると述べていますが、ストアのページには記載がなく、第三者の価格追跡サービスは予約販売の終了とともに特典がなくなったと伝えています。生成編集1回の消費量は、読んだ情報源にありません。',
          '**保持。**クラウドに送った画像について、「保存されない」（ACDSeeのAIページ）と「1週間後に削除」（Fstoppers）で説明が異なります。',
          '**AIの品質。**キーワード付け、顔のグループ化、マスク、拡大の精度は検証していません。',
          '**言語。**ソフトのインターフェース言語は、読んだ情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'レビュー済みのこの3つの写真ツールがディレクトリ内で最も近い代替ですが、レイヤー付きの本格的なRAWエディターはありません。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Excire Foto](/ja/power-local-llm/excire-foto-review)', '対応プラットフォーム': 'Windows、Mac', '価格／ライセンス': '買い切り／クローズドソース', '主な違い': '提供元によればAI検索と選別がローカルで動く写真管理ソフトで、編集機能はなし' },
          { 'アプリ': '[Facet](/ja/power-local-llm/facet-review)', '対応プラットフォーム': 'セルフホスト（DockerまたはPython）、ブラウザー', '価格／ライセンス': '無料／MIT', '主な違い': 'ローカル顔認識つきのオープンソースのスコアリング・選別ギャラリー。ターミナルでの設定が必要' },
          { 'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)', '対応プラットフォーム': 'サーバー（Docker）、ブラウザー', '価格／ライセンス': '無料（Community）／AGPL-3.0', '主な違い': 'AIラベル付きのセルフホスト型Webライブラリで、デスクトップ編集ソフトではない' },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ACDSee Photo Studio Ultimate 2027はローカルLLMですか？',
            a: 'いいえ。情報源が述べているのはキーワード付け、顔、マスク、拡大、生成のための画像AIで、チャット機能や言語モデルは挙げられていません。',
          },
          {
            q: 'クラウドが必要なAI機能はどれですか？',
            a: '4つです：AI Image Generation、Generative Fill、Generative Edit、AI Remove。ACDSeeによれば、それ以外のAI機能はすべてローカルで動作します。',
          },
          {
            q: 'ライセンス以外にかかる費用はありますか？',
            a: '別売のサブスクリプションACDSee 365 Completeは、最大5台で月額9.99ドルまたは年額99.99ドルです（米国ストア）。生成ツールはAIクレジットを消費しますが、1回あたりの料金は読んだ情報源に記載がありません。',
          },
          {
            q: 'Macで動きますか？',
            a: 'いいえ。Ultimate 2027はWindows専用です。ACDSeeはPhoto Studio for Macという別製品を販売していますが、このレビューの対象外です。',
          },
          {
            q: '購入前に試せますか？',
            a: 'はい。ACDSeeは15日間の無料試用版を提供しており、試用版のサンクスページには2,000 AIクレジットの記載があります。試用版のページには機能制限の一覧がありません。',
          },
          {
            q: 'まだメンテナンスされていますか？',
            a: '読んだ根拠ではされています。リリースノートに2026年9月16日のビルド20.0.0.4660が掲載されています。掲載はこの1件のみのため、リリースの頻度は判断できません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'ACDSee Photo Studio Ultimate 2027は、カタログ管理、RAW編集、レイヤーに、ACDSeeによればPC上で動作するAIのキーワード付け、顔認識、マスク、拡大を組み合わせ、永続ライセンスと15日間の試用版で提供されます。一方で、クローズドソースでWindows専用であること、認証にメールアドレスとインターネットが必要なこと、4つの生成ツールが画像をACDSeeのクラウドに送ってクレジットを消費すること、保持に関するACDSeeの説明が情報源によって異なることが挙げられます。サブスクリプション不要の1本を求め、ローカルのAIツールを使うWindowsの写真家に向いています。すべてをオフラインで、オープンソースで、またはMacで使いたい方は、別の選択肢を探してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[ACDSeeのAIページ](https://www.acdsee.com/en/photo-studio/AI) — ローカルとクラウドのAI機能およびプライバシーに関する記載。2026年10月30日確認。',
          '[ACDSee Photo Studio Ultimate製品ページ](https://www.acdsee.com/en/products/photo-studio-ultimate/) — 機能、システム要件、ビルド、ダウンロードサイズ。2026年10月30日確認。',
          '[ACDSeeの購入ページ](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — ライセンスの種類、価格、サブスクリプションプラン。2026年10月30日確認。',
          '[ACDSeeの無料試用版](https://www.acdsee.com/en/free-trials/) — 15日間の試用版。2026年10月30日確認。',
          '[ACDSeeのリリースノート](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — ビルド20.0.0.4660、2026年9月16日。',
          '[ACDSeeのプライバシーポリシー](https://www.acdsee.com/en/privacy-policy/) — 収集されるデータ、ライセンス接続、クラッシュデータ。2026年1月19日付。',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — 2026年9月21日の発表記事。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Excire Fotoレビュー](/ja/power-local-llm/excire-foto-review) — ローカルのAI検索と選別を備えたWindows・Mac向け写真管理ソフト。',
          '[Facetレビュー](/ja/power-local-llm/facet-review) — ローカル顔認識を備えたオープンソースの写真スコアリング・選別ギャラリー。',
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIラベルを内蔵したセルフホスト型の写真ライブラリ。',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-pt.webp',
    title: 'Análise do ACDSee Photo Studio Ultimate 2027: editor de fotos com IA local e na nuvem',
    seoTitle: 'Análise ACDSee Ultimate 2027: IA local e generativa na nuvem',
    intro:
      'O ACDSee Photo Studio Ultimate 2027 é um gerenciador de fotos e editor RAW de código fechado para Windows. Segundo a ACDSee, seus recursos de IA principais (reconhecimento de rostos, palavras-chave, máscaras, ampliação) rodam no seu próprio PC, enquanto quatro ferramentas generativas enviam suas imagens para a nuvem da ACDSee. É vendido com licença perpétua e precisa de um endereço de e-mail e de conexão com a internet para ativar. Esta análise reflete o site, as notas de versão e a política de privacidade da ACDSee conforme consultados em 30 de outubro de 2026; a versão atual é a build 20.0.0.4660, de 16 de setembro de 2026.',
    metaDescription:
      'Análise do ACDSee Photo Studio Ultimate 2027: gerenciador de fotos e editor RAW para Windows cuja IA principal roda localmente, segundo a ACDSee; as ferramentas generativas usam a nuvem.',
    twitterDescription:
      'Análise do ACDSee Photo Studio Ultimate 2027: um editor de fotos para Windows com licença perpétua. Quais recursos de IA rodam no seu PC, quais quatro vão para a nuvem e o que a ativação e os créditos envolvem.',
    audience:
      'Fotógrafos no Windows que querem um único programa para catalogar e editar em RAW com ferramentas de IA, e que precisam saber quais desses recursos mantêm as imagens no próprio PC e quais as enviam a um serviço na nuvem.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise ACDSee Photo Studio Ultimate 2027',
    targetKeywords: [
      'análise acdsee photo studio ultimate 2027',
      'acdsee ia local ou nuvem',
      'editor de fotos com ia offline',
      'alternativa ao lightroom licença perpétua',
      'acdsee preenchimento generativo créditos',
      'gerenciador de fotos windows reconhecimento facial',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O ACDSee Photo Studio Ultimate 2027 é um gerenciador de fotos e editor RAW de código fechado para Windows cuja IA se divide em duas partes: segundo a ACDSee, reconhecimento de rostos, palavras-chave, busca por similaridade, máscaras, redução de ruído e ampliação rodam no seu PC, enquanto AI Image Generation, Generative Fill, Generative Edit e AI Remove usam a nuvem da ACDSee.** A build mais recente, 20.0.0.4660, saiu em 16 de setembro de 2026, então nenhum aviso de projeto desatualizado se aplica.',
    quickAnswerTop: {
      pt: {
        question: 'O ACDSee Photo Studio Ultimate 2027 mantém suas fotos no seu próprio PC?',
        answer:
          'Na maior parte, segundo a ACDSee: a página de IA diz que os recursos de IA principais funcionam localmente e que o reconhecimento facial não usa processamento de IA na nuvem. As quatro ferramentas generativas são a exceção e encaminham prompts e imagens pelos servidores da ACDSee. A ativação precisa de um e-mail e de internet, e a ACDSee não diz se o programa funciona offline depois. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Código fechado, licença perpétua para um dispositivo com teste de 15 dias; existe um plano de assinatura separado.',
          'Somente Windows 10 (64 bits) e Windows 11; este produto não tem versão para Mac.',
          'IA local segundo a ACDSee: palavras-chave, reconhecimento de rostos, agrupamento por similaridade, ampliação, redução de ruído, troca de céu, edição de rosto e máscaras.',
          'IA na nuvem: geração de imagens, Generative Fill, Generative Edit e AI Remove, que consomem créditos de IA.',
          'Última build 20.0.0.4660, de 16 de setembro de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o ACDSee Photo Studio Ultimate 2027?', anchor: 'what-is-acdsee' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
            text: 'O ACDSee Photo Studio Ultimate 2027 é um programa pago de código fechado para Windows, usado para organizar e editar fotos, que, segundo a ACDSee, roda a maior parte da IA no seu PC e envia apenas as quatro ferramentas generativas a um serviço na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala em um PC com Windows, cataloga e edita as fotos ali e usa a IA localmente para palavras-chave, rostos e máscaras; se usar o Generative Fill ou a geração de imagens, a imagem vai para os servidores da ACDSee e gasta créditos.',
          },
        ],
        items: [
          'Manutenção: a build 20.0.0.4660 traz nas notas de versão a data de 16 de setembro de 2026, 44 dias antes desta análise, então nenhum aviso de projeto desatualizado se aplica.',
          'Fabricante: ACD Systems International Inc., de Victoria, Canadá, segundo sua política de privacidade.',
          'Escopo: gerenciamento de fotos, revelação RAW, camadas e ferramentas de IA; não é um assistente de chat nem um modelo de linguagem.',
          'Plataforma: somente Windows; a ACDSee vende um produto separado para Mac.',
          'Nuvem: as ferramentas generativas exigem internet e créditos de IA, e as declarações da ACDSee sobre por quanto tempo essas imagens são mantidas diferem conforme a fonte.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, nas notas de versão e na política de privacidade da ACDSee, consultados em 30 de outubro de 2026, além de um artigo da imprensa. A PromptQuorum não instalou o programa, então qualidade da IA, velocidade e comportamento real de rede não foram avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'O que é o ACDSee Photo Studio Ultimate 2027?',
        content: [
          '**O ACDSee Photo Studio Ultimate 2027 é a edição de topo da suíte fotográfica da ACDSee para Windows: um gerenciador de ativos digitais, um editor RAW não destrutivo e um editor de camadas em um só programa.** Na parte de gerenciamento, a ACDSee cita suporte a mais de 750 modelos de câmera, pilhas, busca reversa de imagens por IA e agrupamento por similaridade visual; na edição, Color e Tone Wheels, Light EQ e AI Develop Presets. O recurso ACDSee Mobile Sync transfere fotos e vídeos do iPhone e do Android por Wi-Fi.',
          'A publicadora é a ACD Systems International Inc., em Victoria, Colúmbia Britânica, segundo a política de privacidade da ACDSee. A família inclui ainda as edições Professional e Home e um Gemstone Photo Editor; esta análise cobre a Ultimate, a única edição que lista todos os recursos de IA abaixo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O ACDSee Photo Studio Ultimate 2027 é baixado como instalador para Windows; você compra uma licença perpétua ou inicia o teste de 15 dias, e a ativação exige um e-mail e uma conexão com a internet.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Site', 'Onde obter': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { 'Opção': 'Teste gratuito', 'Onde obter': '[Teste de 15 dias](https://www.acdsee.com/en/free-trials/) para Windows' },
          { 'Opção': 'Comprar', 'Onde obter': '[Loja da ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/): licença perpétua, US$ 179,99 (loja dos EUA), um dispositivo' },
          { 'Opção': 'Windows', 'Onde obter': 'Instalador .exe, 778 MB, build 20.0.0.4660' },
          { 'Opção': 'Mac', 'Onde obter': 'Sem suporte; a ACDSee vende o Photo Studio para Mac separadamente' },
          { 'Opção': 'Notas de versão', 'Onde obter': '[Build 20.0.0.4660, 16 de setembro de 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[Política de privacidade da ACDSee](https://www.acdsee.com/en/privacy-policy/)' },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Nenhum: software proprietário' },
        ],
        note: 'Versão analisada: Photo Studio Ultimate 2027, build 20.0.0.4660, última atualização em 16 de setembro de 2026. O preço em dólares vem da loja dos EUA; não foi encontrado preço em reais para a edição 2027, e os preços no Brasil podem variar bastante devido a impostos de importação. Confirme o preço atual no pagamento; a ACDSee informa garantia de reembolso de 30 dias nas compras.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A ACDSee lista Windows 10 (64 bits) ou Windows 11, 8 GB de RAM (16 GB recomendados) e uma placa de vídeo DirectX 12 com pelo menos 2 GB de memória de vídeo.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'Windows 10 (somente 64 bits) ou Windows 11; Mac não é suportado' },
          { 'Item': 'Processador', 'O que dizem as fontes': 'Intel ou AMD de 64 bits; recomendado Intel i5 ou melhor' },
          { 'Item': 'Memória', 'O que dizem as fontes': 'Mínimo de 8 GB, recomendados 16 GB ou mais' },
          { 'Item': 'Gráficos', 'O que dizem as fontes': 'Placa DirectX 12 (nível de recursos 12_0 ou superior), mínimo de 2 GB de VRAM, recomendados 4 GB' },
          { 'Item': 'Espaço em disco', 'O que dizem as fontes': '5 GB livres; o instalador tem 778 MB' },
          { 'Item': 'Tela', 'O que dizem as fontes': 'Recomendado 1920 x 1080 ou maior' },
          { 'Item': 'Ativação', 'O que dizem as fontes': 'Um e-mail válido e uma conexão com a internet' },
        ],
        note: 'Esses valores vêm da página do produto da ACDSee; a PromptQuorum não mediu velocidade nem uso de memória em nenhum hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo abaixo vem da página do produto e das notas de versão da ACDSee; a PromptQuorum não testou nenhum item.**',
        ],
        items: [
          '**Gerenciamento.** Auto-Stack e pilhas personalizadas, busca reversa de imagens por IA, agrupamento por similaridade de imagem com IA, uma etiqueta Reject, detecção e reconhecimento de rostos e um Activity Manager em segundo plano.',
          '**Edição RAW.** Revelação não destrutiva para mais de 750 modelos de câmera, Color e Tone Wheels, Light EQ, a ferramenta Clonar e AI Develop Presets.',
          '**Camadas.** Máscaras de camada, modos de mesclagem, texto, formas, ferramentas de seleção por IA e filtros de IA como Sky Replacement e Face Edit.',
          '**Ferramentas generativas.** Geração de imagens a partir de texto, Generative Fill, Generative Edit e AI Remove.',
          '**Build mais recente.** As notas de versão de 16 de setembro de 2026 acrescentam seis modelos de câmera RAW, suporte a JPEG XL em arquivos DNG, novas categorias de predefinições Develop e mais perfis de lente, e corrigem travamentos.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**A página de IA da ACDSee afirma que os recursos de IA principais funcionam localmente e que os recursos de IA generativa usam processamento na nuvem.** A IA é de imagem; nenhum assistente de chat nem modelo de linguagem é descrito.',
        ],
        columns: ['Recurso de IA', 'Onde roda, segundo a ACDSee'],
        rows: [
          { 'Recurso de IA': 'AI Keywords', 'Onde roda, segundo a ACDSee': 'Local, no seu PC' },
          { 'Recurso de IA': 'Detecção e reconhecimento de rostos', 'Onde roda, segundo a ACDSee': 'Local; a página diz que não usa IA na nuvem' },
          { 'Recurso de IA': 'AI Image Similarity', 'Onde roda, segundo a ACDSee': 'Local' },
          { 'Recurso de IA': 'AI Super-Resolution e AI Denoise', 'Onde roda, segundo a ACDSee': 'Local' },
          { 'Recurso de IA': 'AI Sky Replacement, Face Edit e AI Actions', 'Onde roda, segundo a ACDSee': 'Local' },
          { 'Recurso de IA': 'Máscaras e ferramentas de seleção por IA', 'Onde roda, segundo a ACDSee': 'Local' },
          { 'Recurso de IA': 'AI Image Generation', 'Onde roda, segundo a ACDSee': 'Nuvem' },
          { 'Recurso de IA': 'Generative Fill e Generative Edit', 'Onde roda, segundo a ACDSee': 'Nuvem' },
          { 'Recurso de IA': 'AI Remove', 'Onde roda, segundo a ACDSee': 'Nuvem' },
        ],
        note: 'São declarações da própria ACDSee. A ACDSee não nomeia os modelos, e a PromptQuorum não testou qualidade, velocidade nem tráfego de rede.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Para as ferramentas generativas, a página de IA da ACDSee diz que prompts e imagens são criptografados antes de passar pelos servidores da ACDSee e não são armazenados; o artigo de lançamento da Fstoppers relata, ao contrário, que as solicitações são apagadas uma semana depois.** As duas declarações diferem; confira os termos atuais antes de enviar imagens sensíveis.',
          'Outros fluxos de dados nas fontes: a ativação exige um e-mail válido, e a conexão do programa com os serviços de licença e atualização da ACDSee envia, segundo a política de privacidade, horário da conexão, endereço IP, um identificador de aplicativo, versão do produto, data de instalação e número da licença. Dados de falhas podem ser coletados e ficam guardados por até 30 dias. A política de privacidade é datada de 19 de janeiro de 2026 e não diz se fotos são enviadas; para os recursos locais, essa afirmação se apoia na página de IA.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria. A ACDSee não informa se o programa funciona offline após a ativação, e a PromptQuorum não inspecionou o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Fotógrafos no Windows** que querem catalogação, revelação RAW e camadas em um só programa com licença perpétua.',
          '**Usuários atentos à privacidade** que querem palavras-chave por IA, reconhecimento de rostos e máscaras no próprio PC e evitarão as quatro ferramentas generativas.',
          '**Quem gosta de preenchimento generativo** e aceita que essas imagens vão para um serviço na nuvem e consomem créditos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Uso offline.** A ativação exige internet; não se informa se o restante funciona sem conexão depois.',
          '**Créditos.** A página de agradecimento do teste menciona 2.000 créditos de IA e o artigo de lançamento da Fstoppers diz que a compra inclui 20.000, enquanto a página da loja não cita nenhum e um monitor de preços de terceiros relata que o bônus acabou com a pré-venda; o custo de uma edição generativa não consta nas fontes lidas.',
          '**Retenção.** "Não armazenado" (página de IA da ACDSee) versus "apagado uma semana depois" (Fstoppers) para imagens enviadas à nuvem.',
          '**Qualidade da IA.** Precisão das palavras-chave, do agrupamento de rostos, das máscaras e da ampliação não foi testada.',
          '**Idiomas.** Os idiomas da interface do software não são listados nas fontes lidas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'Estas três ferramentas de fotos com análise são as alternativas mais próximas no diretório; nenhuma é um editor RAW completo com camadas.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Excire Foto](/pt/power-local-llm/excire-foto-review)', 'Plataformas': 'Windows, Mac', 'Preço / licença': 'Compra única / código fechado', 'Diferença principal': 'Gerenciador de fotos cuja busca por IA e seleção rodam localmente segundo o fabricante; sem editor' },
          { 'App': '[Facet](/pt/power-local-llm/facet-review)', 'Plataformas': 'Auto-hospedado (Docker ou Python), navegador', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Galeria de código aberto para pontuar e selecionar com reconhecimento facial local; instalação por terminal' },
          { 'App': '[PhotoPrism](/pt/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Preço / licença': 'Grátis (Community) / AGPL-3.0', 'Diferença principal': 'Biblioteca web auto-hospedada com rótulos de IA; não é um editor de desktop' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O ACDSee Photo Studio Ultimate 2027 é um LLM local?',
            a: 'Não. As fontes descrevem IA de imagem para palavras-chave, rostos, máscaras, ampliação e geração, e não citam nenhum recurso de chat nem modelo de linguagem.',
          },
          {
            q: 'Quais recursos de IA precisam da nuvem?',
            a: 'Quatro: AI Image Generation, Generative Fill, Generative Edit e AI Remove. Segundo a ACDSee, todos os outros recursos de IA rodam localmente.',
          },
          {
            q: 'Quanto custa além da licença?',
            a: 'A assinatura separada ACDSee 365 Complete custa US$ 9,99 por mês ou US$ 99,99 por ano para até cinco dispositivos (loja dos EUA). As ferramentas generativas consomem créditos de IA cujo preço por edição não consta nas fontes lidas.',
          },
          {
            q: 'Roda no Mac?',
            a: 'Não. O Ultimate 2027 é somente para Windows; a ACDSee vende um produto separado, o Photo Studio para Mac, que esta análise não cobre.',
          },
          {
            q: 'Posso testar antes?',
            a: 'Sim, a ACDSee oferece um teste gratuito de 15 dias, e a página de agradecimento do teste menciona 2.000 créditos de IA. A página do teste não lista limites de recursos.',
          },
          {
            q: 'Ainda recebe manutenção?',
            a: 'Sim, pelas evidências lidas: as notas de versão listam a build 20.0.0.4660 de 16 de setembro de 2026. Elas contêm apenas essa entrada, então o ritmo de lançamentos não pode ser avaliado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O ACDSee Photo Studio Ultimate 2027 combina catalogação, edição RAW e camadas com palavras-chave por IA, reconhecimento de rostos, máscaras e ampliação que, segundo a ACDSee, rodam no seu PC, com licença perpétua e teste de 15 dias. Em contrapartida: código fechado e somente Windows, a ativação exige um e-mail e internet, as quatro ferramentas generativas enviam imagens à nuvem da ACDSee e consomem créditos, e as declarações da ACDSee sobre retenção diferem conforme a fonte. Serve a fotógrafos no Windows que querem um programa sem assinatura e usarão as ferramentas de IA locais; quem precisa de tudo offline, em código aberto ou no Mac deve procurar outra opção.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página de IA da ACDSee](https://www.acdsee.com/en/photo-studio/AI) — recursos de IA locais versus na nuvem e declarações de privacidade, consultada em 30 de outubro de 2026.',
          '[Página do produto ACDSee Photo Studio Ultimate](https://www.acdsee.com/en/products/photo-studio-ultimate/) — recursos, requisitos de sistema, build e tamanho do download, consultada em 30 de outubro de 2026.',
          '[Página de compra da ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — tipo de licença, preço e plano de assinatura, consultada em 30 de outubro de 2026.',
          '[Testes gratuitos da ACDSee](https://www.acdsee.com/en/free-trials/) — teste de 15 dias, consultada em 30 de outubro de 2026.',
          '[Notas de versão da ACDSee](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — build 20.0.0.4660, 16 de setembro de 2026.',
          '[Política de privacidade da ACDSee](https://www.acdsee.com/en/privacy-policy/) — dados coletados, conexões de licença, dados de falhas, datada de 19 de janeiro de 2026.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — artigo de lançamento de 21 de setembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Excire Foto](/pt/power-local-llm/excire-foto-review) — um gerenciador de fotos para Windows e Mac com busca e seleção por IA locais.',
          '[Análise do Facet](/pt/power-local-llm/facet-review) — uma galeria de código aberto para pontuar e selecionar fotos com reconhecimento facial local.',
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — uma biblioteca de fotos auto-hospedada com rótulos de IA integrados.',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-ar.webp',
    title: 'مراجعة ACDSee Photo Studio Ultimate 2027: محرر صور بذكاء اصطناعي محلي وسحابي',
    seoTitle: 'مراجعة ACDSee Ultimate 2027: ذكاء محلي وتوليد سحابي',
    intro:
      'ACDSee Photo Studio Ultimate 2027 برنامج مغلق المصدر لإدارة الصور وتحرير ملفات RAW على Windows. بحسب ACDSee، تعمل ميزات الذكاء الاصطناعي الأساسية فيه (التعرف على الوجوه والكلمات المفتاحية والأقنعة والتكبير) على حاسوبك الخاص، بينما ترسل أربع أدوات توليدية صورك إلى سحابة ACDSee. يُباع بترخيص دائم ويحتاج إلى بريد إلكتروني واتصال بالإنترنت للتفعيل. تعكس هذه المراجعة موقع ACDSee وملاحظات الإصدار وسياسة الخصوصية كما روجعت في 30 أكتوبر 2026؛ والإصدار الحالي هو البناء 20.0.0.4660 الصادر في 16 سبتمبر 2026.',
    metaDescription:
      'مراجعة ACDSee Photo Studio Ultimate 2027: برنامج لإدارة الصور وتحرير RAW على Windows يعمل ذكاؤه الأساسي محليًا بحسب ACDSee، وتستخدم أدواته التوليدية السحابة.',
    twitterDescription:
      'مراجعة ACDSee Photo Studio Ultimate 2027: محرر صور لـ Windows بترخيص دائم. أي ميزات ذكاء اصطناعي تعمل على حاسوبك، وأي أربع منها تذهب إلى السحابة، وماذا تعني الأرصدة والتفعيل.',
    audience:
      'المصورون على Windows الذين يريدون برنامجًا واحدًا لفهرسة الصور وتحرير RAW مع أدوات ذكاء اصطناعي، ويحتاجون إلى معرفة أي هذه الميزات تُبقي الصور على حاسوبهم وأيها يرسلها إلى خدمة سحابية.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة ACDSee Photo Studio Ultimate 2027',
    targetKeywords: [
      'مراجعة acdsee photo studio ultimate 2027',
      'acdsee ذكاء اصطناعي محلي أم سحابي',
      'محرر صور بذكاء اصطناعي دون اتصال',
      'بديل lightroom ترخيص دائم',
      'acdsee التعبئة التوليدية الأرصدة',
      'مدير صور windows التعرف على الوجوه',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 برنامج مغلق المصدر لإدارة الصور وتحرير RAW على Windows، ويتوزع ذكاؤه الاصطناعي على قسمين: بحسب ACDSee، يعمل التعرف على الوجوه والكلمات المفتاحية والبحث بالتشابه والأقنعة وإزالة الضوضاء والتكبير على حاسوبك، بينما تستخدم AI Image Generation وGenerative Fill وGenerative Edit وAI Remove سحابة ACDSee.** صدر أحدث بناء 20.0.0.4660 في 16 سبتمبر 2026، لذا لا ينطبق تحذير التوقف عن التحديث.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي ACDSee Photo Studio Ultimate 2027 صورك على حاسوبك الخاص؟',
        answer:
          'في معظمها، بحسب ACDSee: تقول صفحة الذكاء الاصطناعي إن الميزات الأساسية تعمل محليًا وإن التعرف على الوجوه لا يستخدم معالجة ذكاء اصطناعي سحابية. الأدوات التوليدية الأربع هي الاستثناء، إذ تمر المطالبات والصور عبر خوادم ACDSee. يحتاج التفعيل إلى بريد إلكتروني وإنترنت، ولا تذكر ACDSee ما إذا كان البرنامج يعمل دون اتصال بعد ذلك. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مغلق المصدر، وترخيص دائم لجهاز واحد مع تجربة 15 يومًا؛ وتوجد خطة اشتراك منفصلة.',
          'يعمل على Windows 10 (64 بت) وWindows 11 فقط؛ ولا يوجد إصدار Mac لهذا المنتج.',
          'ذكاء اصطناعي محلي بحسب ACDSee: الكلمات المفتاحية والتعرف على الوجوه والتجميع بالتشابه والتكبير وإزالة الضوضاء واستبدال السماء وتحرير الوجه والأقنعة.',
          'ذكاء اصطناعي سحابي: توليد الصور وGenerative Fill وGenerative Edit وAI Remove، وهي تستهلك أرصدة الذكاء الاصطناعي.',
          'أحدث بناء 20.0.0.4660 بتاريخ 16 سبتمبر 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو ACDSee Photo Studio Ultimate 2027؟', anchor: 'what-is-acdsee' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 برنامج Windows مدفوع ومغلق المصدر لتنظيم الصور وتحريرها، يشغّل معظم ذكائه الاصطناعي على حاسوبك بحسب ACDSee، ولا يرسل إلى خدمة سحابية سوى أدواته التوليدية الأربع.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته على حاسوب Windows وتفهرس صورك وتحررها هناك، وتستخدم الذكاء الاصطناعي محليًا للكلمات المفتاحية والوجوه والأقنعة؛ وإذا استخدمت Generative Fill أو توليد الصور فستذهب الصورة إلى خوادم ACDSee وتستهلك أرصدة.',
          },
        ],
        items: [
          'الصيانة: يحمل البناء 20.0.0.4660 في ملاحظات الإصدار تاريخ 16 سبتمبر 2026، أي قبل هذه المراجعة بـ 44 يومًا، لذا لا ينطبق تحذير التوقف عن التحديث.',
          'الجهة المصنِّعة: ACD Systems International Inc. في فيكتوريا بكندا، بحسب سياسة الخصوصية.',
          'النطاق: إدارة الصور ومعالجة RAW والطبقات وأدوات الذكاء الاصطناعي؛ وليس مساعد دردشة أو نموذجًا لغويًا.',
          'المنصة: Windows فقط؛ وتبيع ACDSee منتجًا منفصلًا لنظام Mac.',
          'السحابة: تحتاج الأدوات التوليدية إلى الإنترنت وأرصدة الذكاء الاصطناعي، وتختلف تصريحات ACDSee عن مدة الاحتفاظ بتلك الصور بحسب المصدر.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع ACDSee وملاحظات الإصدار وسياسة الخصوصية كما روجعت في 30 أكتوبر 2026، إضافة إلى مقال صحفي واحد. لم تثبّت PromptQuorum البرنامج، لذا لم تُقيَّم جودة الذكاء الاصطناعي ولا السرعة ولا سلوك الشبكة الفعلي.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'ما هو ACDSee Photo Studio Ultimate 2027؟',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 هو الإصدار الأعلى من مجموعة ACDSee للصور على Windows: مدير أصول رقمية ومحرر RAW غير مدمّر ومحرر طبقات في برنامج واحد.** تذكر ACDSee في جانب الإدارة دعم أكثر من 750 طراز كاميرا والتكديس والبحث العكسي عن الصور بالذكاء الاصطناعي والتجميع حسب التشابه البصري، وفي جانب التحرير Color وTone Wheels وLight EQ وAI Develop Presets. وتنقل ميزة ACDSee Mobile Sync الصور ومقاطع الفيديو من iPhone وAndroid عبر Wi-Fi.',
          'الناشر هو ACD Systems International Inc. في فيكتوريا بكولومبيا البريطانية، بحسب سياسة خصوصية ACDSee. وتضم العائلة أيضًا إصداري Professional وHome ومحرر Gemstone Photo Editor؛ وتغطي هذه المراجعة إصدار Ultimate، وهو الإصدار الوحيد الذي يسرد كل ميزات الذكاء الاصطناعي أدناه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُنزَّل ACDSee Photo Studio Ultimate 2027 كمثبّت لنظام Windows؛ تشتري ترخيصًا دائمًا أو تبدأ تجربة 15 يومًا، ويحتاج التفعيل إلى بريد إلكتروني واتصال بالإنترنت.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { 'الخيار': 'تجربة مجانية', 'مصدر الحصول عليه': '[تجربة 15 يومًا](https://www.acdsee.com/en/free-trials/) لنظام Windows' },
          { 'الخيار': 'الشراء', 'مصدر الحصول عليه': '[متجر ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/): ترخيص دائم، $179.99 (المتجر الأمريكي)، جهاز واحد' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'مثبّت .exe بحجم 778 MB، البناء 20.0.0.4660' },
          { 'الخيار': 'Mac', 'مصدر الحصول عليه': 'غير مدعوم؛ تبيع ACDSee منتج Photo Studio for Mac منفصلًا' },
          { 'الخيار': 'ملاحظات الإصدار', 'مصدر الحصول عليه': '[البناء 20.0.0.4660، 16 سبتمبر 2026](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[سياسة خصوصية ACDSee](https://www.acdsee.com/en/privacy-policy/)' },
          { 'الخيار': 'الشفرة المصدرية', 'مصدر الحصول عليه': 'لا توجد: برنامج احتكاري' },
        ],
        note: 'الإصدار الذي رُوجع: Photo Studio Ultimate 2027، البناء 20.0.0.4660، آخر تحديث 16 سبتمبر 2026. السعر بالدولار من المتجر الأمريكي، وقد تختلف الأسعار في بلدك. تأكد من السعر الحالي عند الدفع؛ وتذكر ACDSee ضمان استرداد خلال 30 يومًا على المشتريات.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تذكر ACDSee نظام Windows 10 (64 بت) أو Windows 11، وذاكرة 8 GB (يوصى بـ 16 GB)، وبطاقة رسوميات تدعم DirectX 12 بذاكرة فيديو لا تقل عن 2 GB.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'Windows 10 (64 بت فقط) أو Windows 11؛ ولا يُدعم Mac' },
          { 'البند': 'المعالج', 'ما تقوله المصادر': 'Intel أو AMD بنظام 64 بت؛ ويوصى بـ Intel i5 أو أفضل' },
          { 'البند': 'الذاكرة', 'ما تقوله المصادر': 'الحد الأدنى 8 GB ويوصى بـ 16 GB أو أكثر' },
          { 'البند': 'الرسوميات', 'ما تقوله المصادر': 'بطاقة DirectX 12 (مستوى الميزات 12_0 أو أحدث)، وذاكرة VRAM لا تقل عن 2 GB ويوصى بـ 4 GB' },
          { 'البند': 'مساحة القرص', 'ما تقوله المصادر': '5 GB فارغة؛ وحجم المثبّت 778 MB' },
          { 'البند': 'الشاشة', 'ما تقوله المصادر': 'يوصى بدقة 1920 x 1080 أو أعلى' },
          { 'البند': 'التفعيل', 'ما تقوله المصادر': 'بريد إلكتروني صالح واتصال بالإنترنت' },
        ],
        note: 'هذه الأرقام من صفحة منتج ACDSee؛ ولم تقِس PromptQuorum السرعة أو استهلاك الذاكرة على أي جهاز.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل ما يلي مأخوذ من صفحة منتج ACDSee وملاحظات الإصدار؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**الإدارة.** Auto-Stack والتكديس المخصص، والبحث العكسي عن الصور بالذكاء الاصطناعي، والتجميع حسب تشابه الصور بالذكاء الاصطناعي، ووسم Reject، واكتشاف الوجوه والتعرف عليها، ومدير Activity Manager في الخلفية.',
          '**تحرير RAW.** معالجة غير مدمّرة لأكثر من 750 طراز كاميرا، وColor وTone Wheels، وLight EQ، وأداة النسخ، وAI Develop Presets.',
          '**الطبقات.** أقنعة الطبقات وأنماط المزج والنصوص والأشكال وأدوات التحديد بالذكاء الاصطناعي ومرشحات ذكاء اصطناعي مثل Sky Replacement وFace Edit.',
          '**الأدوات التوليدية.** توليد الصور من النص وGenerative Fill وGenerative Edit وAI Remove.',
          '**أحدث بناء.** تضيف ملاحظات الإصدار الصادرة في 16 سبتمبر 2026 ستة طرازات كاميرا RAW ودعم JPEG XL داخل ملفات DNG وفئات جديدة من إعدادات Develop المسبقة وملفات تعريف عدسات إضافية، وتصلح حالات انهيار.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**تذكر صفحة الذكاء الاصطناعي لدى ACDSee أن الميزات الأساسية تعمل محليًا وأن ميزات الذكاء الاصطناعي التوليدي تستخدم المعالجة السحابية.** الذكاء الاصطناعي هنا خاص بالصور؛ ولا يُوصف أي مساعد دردشة أو نموذج لغوي.',
        ],
        columns: ['ميزة الذكاء الاصطناعي', 'أين تعمل بحسب ACDSee'],
        rows: [
          { 'ميزة الذكاء الاصطناعي': 'AI Keywords', 'أين تعمل بحسب ACDSee': 'محليًا على حاسوبك' },
          { 'ميزة الذكاء الاصطناعي': 'اكتشاف الوجوه والتعرف عليها', 'أين تعمل بحسب ACDSee': 'محليًا؛ وتقول الصفحة إنها لا تستخدم معالجة ذكاء اصطناعي سحابية' },
          { 'ميزة الذكاء الاصطناعي': 'AI Image Similarity', 'أين تعمل بحسب ACDSee': 'محليًا' },
          { 'ميزة الذكاء الاصطناعي': 'AI Super-Resolution وAI Denoise', 'أين تعمل بحسب ACDSee': 'محليًا' },
          { 'ميزة الذكاء الاصطناعي': 'AI Sky Replacement وFace Edit وAI Actions', 'أين تعمل بحسب ACDSee': 'محليًا' },
          { 'ميزة الذكاء الاصطناعي': 'أقنعة وأدوات تحديد بالذكاء الاصطناعي', 'أين تعمل بحسب ACDSee': 'محليًا' },
          { 'ميزة الذكاء الاصطناعي': 'AI Image Generation', 'أين تعمل بحسب ACDSee': 'السحابة' },
          { 'ميزة الذكاء الاصطناعي': 'Generative Fill وGenerative Edit', 'أين تعمل بحسب ACDSee': 'السحابة' },
          { 'ميزة الذكاء الاصطناعي': 'AI Remove', 'أين تعمل بحسب ACDSee': 'السحابة' },
        ],
        note: 'هذه أقوال ACDSee نفسها. لا تذكر ACDSee النماذج المستخدمة، ولم تختبر PromptQuorum الجودة ولا السرعة ولا حركة الشبكة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**بالنسبة للأدوات التوليدية، تقول صفحة الذكاء الاصطناعي لدى ACDSee إن المطالبات والصور تُشفَّر قبل مرورها عبر خوادم ACDSee ولا تُخزَّن؛ أما مقال الإطلاق في Fstoppers فيفيد بأن الطلبات تُحذف بعد أسبوع.** يختلف التصريحان، فراجع الشروط الحالية قبل إرسال صور حساسة.',
          'تدفقات بيانات أخرى في المصادر: يحتاج التفعيل إلى بريد إلكتروني صالح، ويرسل اتصال البرنامج بخدمات الترخيص والتحديث لدى ACDSee، بحسب سياسة الخصوصية، وقت الاتصال وعنوان IP ومعرّف التطبيق وإصدار المنتج وتاريخ التثبيت ورقم الترخيص. وقد تُجمع بيانات الانهيار وتُحفظ حتى 30 يومًا. تحمل سياسة الخصوصية تاريخ 19 يناير 2026 ولا تذكر ما إذا كانت الصور تُرفع؛ وبالنسبة للميزات المحلية يستند هذا القول إلى صفحة الذكاء الاصطناعي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الجهة المصنِّعة وليست نتائج تدقيق. لا تذكر ACDSee ما إذا كان البرنامج يعمل دون اتصال بعد التفعيل، ولم تفحص PromptQuorum حركة الشبكة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المصورون على Windows** الذين يريدون الفهرسة ومعالجة RAW والطبقات في برنامج واحد بترخيص دائم.',
          '**المستخدمون المهتمون بالخصوصية** الذين يريدون الكلمات المفتاحية بالذكاء الاصطناعي والتعرف على الوجوه والأقنعة على حاسوبهم ويتجنبون الأدوات التوليدية الأربع.',
          '**من يحبون التعبئة التوليدية** ويقبلون أن تذهب تلك الصور إلى خدمة سحابية وتستهلك أرصدة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الاستخدام دون اتصال.** يحتاج التفعيل إلى الإنترنت؛ ولا يُذكر ما إذا كان باقي البرنامج يعمل دون اتصال بعد ذلك.',
          '**الأرصدة.** تذكر صفحة الشكر الخاصة بالتجربة 2,000 رصيد ذكاء اصطناعي، ويقول مقال الإطلاق في Fstoppers إن الشراء يتضمن 20,000، بينما لا تذكر صفحة المتجر أي رصيد، ويفيد متتبع أسعار تابع لجهة خارجية بأن هذه المكافأة انتهت مع البيع المسبق؛ وتكلفة التعديل التوليدي الواحد غير مذكورة في المصادر المقروءة.',
          '**الاحتفاظ.** «لا تُخزَّن» (صفحة الذكاء الاصطناعي لدى ACDSee) مقابل «تُحذف بعد أسبوع» (Fstoppers) بالنسبة للصور المرسلة إلى السحابة.',
          '**جودة الذكاء الاصطناعي.** لم تُختبر دقة الكلمات المفتاحية وتجميع الوجوه والأقنعة والتكبير.',
          '**اللغات.** لا تُذكر لغات واجهة البرنامج في المصادر المقروءة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'هذه الأدوات الثلاث التي لها مراجعة هي أقرب البدائل في الدليل؛ وليس أي منها محرر RAW كاملًا بالطبقات.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Excire Foto](/ar/power-local-llm/excire-foto-review)', 'المنصات': 'Windows وMac', 'السعر / الرخصة': 'شراء لمرة واحدة / مغلق المصدر', 'الفرق الأبرز': 'مدير صور يعمل بحثه بالذكاء الاصطناعي واختياره للصور محليًا بحسب الشركة المصنِّعة؛ بلا محرر' },
          { 'التطبيق': '[Facet](/ar/power-local-llm/facet-review)', 'المنصات': 'استضافة ذاتية (Docker أو Python)، متصفح', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'معرض مفتوح المصدر لتقييم الصور وانتقائها مع تعرف محلي على الوجوه؛ ويحتاج إعدادًا عبر الطرفية' },
          { 'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)', 'المنصات': 'خادم (Docker)، متصفح', 'السعر / الرخصة': 'مجاني (Community) / AGPL-3.0', 'الفرق الأبرز': 'مكتبة ويب مستضافة ذاتيًا بوسوم ذكاء اصطناعي؛ وليس محررًا مكتبيًا' },
        ],
        note: 'تأكد من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ACDSee Photo Studio Ultimate 2027 نموذج لغوي محلي (LLM)؟',
            a: 'لا. تصف المصادر ذكاءً اصطناعيًا للصور من أجل الكلمات المفتاحية والوجوه والأقنعة والتكبير والتوليد، ولا تذكر ميزة دردشة ولا نموذجًا لغويًا.',
          },
          {
            q: 'أي ميزات ذكاء اصطناعي تحتاج إلى السحابة؟',
            a: 'أربع: AI Image Generation وGenerative Fill وGenerative Edit وAI Remove. وبحسب ACDSee تعمل جميع ميزات الذكاء الاصطناعي الأخرى محليًا.',
          },
          {
            q: 'ماذا يكلف إضافة إلى الترخيص؟',
            a: 'اشتراك ACDSee 365 Complete المنفصل يكلف $9.99 شهريًا أو $99.99 سنويًا لما يصل إلى خمسة أجهزة (المتجر الأمريكي). وتستهلك الأدوات التوليدية أرصدة ذكاء اصطناعي لا يظهر سعرها لكل تعديل في المصادر المقروءة.',
          },
          {
            q: 'هل يعمل على Mac؟',
            a: 'لا. إصدار Ultimate 2027 لنظام Windows فقط؛ وتبيع ACDSee منتجًا منفصلًا هو Photo Studio for Mac لا تغطيه هذه المراجعة.',
          },
          {
            q: 'هل يمكنني تجربته أولًا؟',
            a: 'نعم، تقدم ACDSee تجربة مجانية لمدة 15 يومًا، وتذكر صفحة الشكر الخاصة بالتجربة 2,000 رصيد ذكاء اصطناعي. ولا تسرد صفحة التجربة قيودًا على الميزات.',
          },
          {
            q: 'هل ما زال يُصان؟',
            a: 'نعم بحسب الأدلة المقروءة: تسرد ملاحظات الإصدار البناء 20.0.0.4660 الصادر في 16 سبتمبر 2026. وهي لا تحتوي إلا على هذا البند، لذا لا يمكن الحكم على وتيرة الإصدارات.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يجمع ACDSee Photo Studio Ultimate 2027 بين الفهرسة وتحرير RAW والطبقات مع كلمات مفتاحية بالذكاء الاصطناعي وتعرف على الوجوه وأقنعة وتكبير تعمل على حاسوبك بحسب ACDSee، بترخيص دائم وتجربة 15 يومًا. في المقابل هو مغلق المصدر ولنظام Windows فقط، ويحتاج التفعيل إلى بريد إلكتروني وإنترنت، وترسل أدواته التوليدية الأربع الصور إلى سحابة ACDSee وتستهلك أرصدة، وتختلف تصريحات ACDSee عن الاحتفاظ بحسب المصدر. يناسب المصورين على Windows الذين يريدون برنامجًا دون اشتراك وسيستخدمون أدوات الذكاء الاصطناعي المحلية؛ ومن يحتاج كل شيء دون اتصال أو مفتوح المصدر أو على Mac فعليه البحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة الذكاء الاصطناعي لدى ACDSee](https://www.acdsee.com/en/photo-studio/AI) — ميزات الذكاء الاصطناعي المحلية مقابل السحابية وتصريحات الخصوصية، روجعت في 30 أكتوبر 2026.',
          '[صفحة منتج ACDSee Photo Studio Ultimate](https://www.acdsee.com/en/products/photo-studio-ultimate/) — الميزات ومتطلبات النظام والبناء وحجم التنزيل، روجعت في 30 أكتوبر 2026.',
          '[صفحة الشراء لدى ACDSee](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — نوع الترخيص والسعر وخطة الاشتراك، روجعت في 30 أكتوبر 2026.',
          '[التجارب المجانية لدى ACDSee](https://www.acdsee.com/en/free-trials/) — تجربة 15 يومًا، روجعت في 30 أكتوبر 2026.',
          '[ملاحظات إصدار ACDSee](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — البناء 20.0.0.4660، 16 سبتمبر 2026.',
          '[سياسة خصوصية ACDSee](https://www.acdsee.com/en/privacy-policy/) — البيانات المجموعة واتصالات الترخيص وبيانات الانهيار، بتاريخ 19 يناير 2026.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — مقال الإطلاق بتاريخ 21 سبتمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Excire Foto](/ar/power-local-llm/excire-foto-review) — مدير صور لـ Windows وMac ببحث وانتقاء محليين بالذكاء الاصطناعي.',
          '[مراجعة Facet](/ar/power-local-llm/facet-review) — معرض مفتوح المصدر لتقييم الصور وانتقائها مع تعرف محلي على الوجوه.',
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور مستضافة ذاتيًا بوسوم ذكاء اصطناعي مدمجة.',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-zh.webp',
    title: 'ACDSee Photo Studio Ultimate 2027 评测：兼具本地与云端 AI 的照片编辑软件',
    seoTitle: 'ACDSee Ultimate 2027 评测：本地 AI 与云端生成',
    intro:
      'ACDSee Photo Studio Ultimate 2027 是一款面向 Windows 的闭源照片管理与 RAW 编辑软件。据 ACDSee 称，人脸识别、关键词、蒙版、放大等核心 AI 功能在你自己的电脑上运行，而四项生成式工具会把图像发送到 ACDSee 的云端。它以永久许可销售，激活需要电子邮箱和网络连接。本评测反映 2026 年 10 月 30 日查阅的 ACDSee 网站、版本说明和隐私政策；当前版本为 2026 年 9 月 16 日发布的构建 20.0.0.4660。',
    metaDescription:
      'ACDSee Photo Studio Ultimate 2027 评测：面向 Windows 的照片管理与 RAW 编辑软件，据 ACDSee 称核心 AI 在本地运行，生成式工具使用云端。',
    twitterDescription:
      'ACDSee Photo Studio Ultimate 2027 评测：永久许可的 Windows 照片编辑软件。哪些 AI 功能在你的电脑上运行，哪四项走云端，以及激活和积分意味着什么。',
    audience:
      '想用一款软件完成图库管理与 RAW 编辑并使用 AI 工具的 Windows 摄影师，他们需要知道哪些 AI 功能让图像留在自己的电脑上，哪些会把图像发送到云服务。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'ACDSee Photo Studio Ultimate 2027 评测',
    targetKeywords: [
      'acdsee photo studio ultimate 2027 评测',
      'acdsee ai 本地 还是 云端',
      '离线 ai 照片编辑软件',
      'lightroom 替代 永久许可',
      'acdsee 生成式填充 积分',
      'windows 照片管理 人脸识别',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027 是一款面向 Windows 的闭源照片管理与 RAW 编辑软件，其 AI 分为两部分：据 ACDSee 称，人脸识别、关键词、相似度搜索、蒙版、降噪和放大在你的电脑上运行，而 AI Image Generation、Generative Fill、Generative Edit 和 AI Remove 使用 ACDSee 的云端。**最新构建 20.0.0.4660 发布于 2026 年 9 月 16 日，因此不适用长期未更新警告。',
    quickAnswerTop: {
      zh: {
        question: 'ACDSee Photo Studio Ultimate 2027 会把照片保留在你自己的电脑上吗？',
        answer:
          '据 ACDSee 称，大部分会：其 AI 页面说核心 AI 功能在本地运行，人脸识别不使用云端 AI 处理。四项生成式工具是例外，提示词和图像会经过 ACDSee 的服务器。激活需要电子邮箱和网络，而激活后程序能否离线运行，ACDSee 没有说明。PromptQuorum 没有检查网络流量。',
        bullets: [
          '闭源，单设备永久许可，提供 15 天试用；订阅方案另行提供。',
          '仅支持 Windows 10（64 位）和 Windows 11；该产品没有 Mac 版。',
          '据 ACDSee 称的本地 AI：关键词、人脸识别、相似度分组、放大、降噪、天空替换、人脸编辑和蒙版。',
          '云端 AI：图像生成、Generative Fill、Generative Edit 和 AI Remove，会消耗 AI 积分。',
          '最新构建 20.0.0.4660，日期为 2026 年 9 月 16 日。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'ACDSee Photo Studio Ultimate 2027 是什么？', anchor: 'what-is-acdsee' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027 是一款付费闭源的 Windows 照片整理与编辑软件，据 ACDSee 称，其大部分 AI 在你的电脑上运行，只有四项生成式工具会发送到云服务。',
          },
          {
            type: 'plain-terms',
            text: '你把它装在 Windows 电脑上，在本地整理和编辑照片，并在本地使用 AI 做关键词、人脸和蒙版；如果使用 Generative Fill 或图像生成，该图像会发送到 ACDSee 的服务器并消耗积分。',
          },
        ],
        items: [
          '维护情况：构建 20.0.0.4660 的版本说明日期为 2026 年 9 月 16 日，比本评测早 44 天，因此不适用长期未更新警告。',
          '发行方：据其隐私政策，为加拿大维多利亚的 ACD Systems International Inc.。',
          '范围：照片管理、RAW 处理、图层和 AI 工具；它不是聊天或语言模型助手。',
          '平台：仅限 Windows；ACDSee 为 Mac 另售一款产品。',
          '云端：生成式工具需要联网和 AI 积分，而 ACDSee 对这些图像保留多久的说法因来源而异。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 30 日查阅的 ACDSee 网站、版本说明和隐私政策，以及一篇媒体报道。PromptQuorum 没有安装该程序，因此未评估 AI 质量、速度和实际网络行为。',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'ACDSee Photo Studio Ultimate 2027 是什么？',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 是 ACDSee Windows 照片套件的最高版本：把数字资产管理、非破坏性 RAW 编辑和图层编辑整合在一个程序里。**管理方面，ACDSee 列出支持 750 多种相机型号、堆叠、AI 以图搜图和按视觉相似度分组；编辑方面列出 Color 和 Tone Wheels、Light EQ 以及 AI Develop Presets。ACDSee Mobile Sync 功能可通过 Wi-Fi 传输 iPhone 和 Android 上的照片和视频。',
          '据 ACDSee 隐私政策，发行方是位于不列颠哥伦比亚省维多利亚的 ACD Systems International Inc.。该系列还有 Professional 和 Home 版本以及 Gemstone Photo Editor；本评测针对 Ultimate，它是唯一列出下列全部 AI 功能的版本。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**ACDSee Photo Studio Ultimate 2027 以 Windows 安装程序下载提供；你可以购买永久许可或开始 15 天试用，激活需要电子邮箱和网络连接。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '官方网站', '获取方式': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { '选项': '免费试用', '获取方式': 'Windows 版[15 天试用](https://www.acdsee.com/en/free-trials/)' },
          { '选项': '购买', '获取方式': '[ACDSee 商店](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/)：永久许可，$179.99（美国商店），单设备' },
          { '选项': 'Windows', '获取方式': '.exe 安装程序，778 MB，构建 20.0.0.4660' },
          { '选项': 'Mac', '获取方式': '不支持；ACDSee 另售 Photo Studio for Mac' },
          { '选项': '版本说明', '获取方式': '[构建 20.0.0.4660，2026 年 9 月 16 日](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { '选项': '隐私政策', '获取方式': '[ACDSee 隐私政策](https://www.acdsee.com/en/privacy-policy/)' },
          { '选项': '源代码', '获取方式': '无：专有软件' },
        ],
        note: '评测版本：Photo Studio Ultimate 2027，构建 20.0.0.4660，最近更新于 2026 年 9 月 16 日。价格保持美元，来自美国商店，当地商店价格可能不同。请在结账时确认当前价格；ACDSee 标明购买享有 30 天退款保证。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**ACDSee 列出的要求是 Windows 10（64 位）或 Windows 11、8 GB 内存（建议 16 GB），以及至少 2 GB 显存的 DirectX 12 显卡。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': 'Windows 10（仅 64 位）或 Windows 11；不支持 Mac' },
          { '项目': '处理器', '来源说明': '64 位 Intel 或 AMD；建议 Intel i5 或更好' },
          { '项目': '内存', '来源说明': '最低 8 GB，建议 16 GB 或更多' },
          { '项目': '显卡', '来源说明': 'DirectX 12 显卡（功能级别 12_0 或更高），显存最低 2 GB，建议 4 GB' },
          { '项目': '磁盘空间', '来源说明': '5 GB 可用空间；安装程序为 778 MB' },
          { '项目': '显示器', '来源说明': '建议 1920 x 1080 或更高' },
          { '项目': '激活', '来源说明': '有效的电子邮箱和网络连接' },
        ],
        note: '这些数值来自 ACDSee 的产品页面；PromptQuorum 未在任何硬件上测量速度或内存占用。',
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自 ACDSee 的产品页面和版本说明；PromptQuorum 未测试其中任何一项。**',
        ],
        items: [
          '**管理。**Auto-Stack 和自定义堆叠、AI 以图搜图、按 AI 图像相似度分组、Reject 标记、人脸检测与识别，以及后台的 Activity Manager。',
          '**RAW 编辑。**支持 750 多种相机型号的非破坏性处理、Color 和 Tone Wheels、Light EQ、克隆工具和 AI Develop Presets。',
          '**图层。**图层蒙版、混合模式、文字、形状、AI 选择工具，以及 Sky Replacement 和 Face Edit 等 AI 滤镜。',
          '**生成式工具。**文字生成图像、Generative Fill、Generative Edit 和 AI Remove。',
          '**最新构建。**2026 年 9 月 16 日的版本说明新增六款 RAW 相机型号、DNG 文件内的 JPEG XL 支持、新的 Develop 预设类别和更多镜头配置文件，并修复了崩溃问题。',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'AI 功能及运行位置',
        content: [
          '**ACDSee 的 AI 页面称核心 AI 功能在本地运行，生成式 AI 功能使用云端处理。**这些 AI 面向图像；没有描述聊天助手或语言模型。',
        ],
        columns: ['AI 功能', '据 ACDSee 的运行位置'],
        rows: [
          { 'AI 功能': 'AI Keywords', '据 ACDSee 的运行位置': '本地，在你的电脑上' },
          { 'AI 功能': '人脸检测与识别', '据 ACDSee 的运行位置': '本地；页面称不使用云端 AI 处理' },
          { 'AI 功能': 'AI Image Similarity', '据 ACDSee 的运行位置': '本地' },
          { 'AI 功能': 'AI Super-Resolution 和 AI Denoise', '据 ACDSee 的运行位置': '本地' },
          { 'AI 功能': 'AI Sky Replacement、Face Edit 和 AI Actions', '据 ACDSee 的运行位置': '本地' },
          { 'AI 功能': 'AI 蒙版和选择工具', '据 ACDSee 的运行位置': '本地' },
          { 'AI 功能': 'AI Image Generation', '据 ACDSee 的运行位置': '云端' },
          { 'AI 功能': 'Generative Fill 和 Generative Edit', '据 ACDSee 的运行位置': '云端' },
          { 'AI 功能': 'AI Remove', '据 ACDSee 的运行位置': '云端' },
        ],
        note: '以上是 ACDSee 自己的说法。ACDSee 没有说明所用模型，PromptQuorum 也未测试质量、速度或网络流量。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**对于生成式工具，ACDSee 的 AI 页面称提示词和图像在经过 ACDSee 服务器前会被加密且不会被存储；Fstoppers 的发布报道则称这些请求会在一周后删除。**两种说法不一致，发送敏感图像前请先查看当前条款。',
          '来源中的其他数据流向：激活需要有效的电子邮箱；据隐私政策，程序连接 ACDSee 的授权和更新服务时会发送连接时间、IP 地址、应用程序 ID、产品版本、安装日期和许可证编号。可能会收集崩溃数据，并最长保存 30 天。隐私政策的日期为 2026 年 1 月 19 日，没有说明是否上传照片；对本地功能而言，这一说法依据的是 AI 页面。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是厂商的声明，不是审计结果。ACDSee 没有说明激活后程序能否离线运行，PromptQuorum 也没有检查网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**Windows 摄影师**：想用一个永久许可的程序完成图库管理、RAW 处理和图层编辑。',
          '**注重隐私的用户**：希望在自己的电脑上使用 AI 关键词、人脸识别和蒙版，并避开四项生成式工具。',
          '**喜欢生成式填充的用户**：能接受这些图像发送到云服务并消耗积分。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**离线使用。**激活需要联网；激活后其余功能能否在无网络时运行，没有说明。',
          '**积分。**试用版感谢页提到 2,000 AI 积分，Fstoppers 的发布报道称购买包含 20,000，但商店页面没有列出，第三方价格追踪服务则称该赠送随预售结束而取消；一次生成式编辑消耗多少，所读来源中没有。',
          '**保留期限。**对发送到云端的图像，「不存储」（ACDSee AI 页面）与「一周后删除」（Fstoppers）说法不同。',
          '**AI 质量。**关键词、人脸分组、蒙版和放大的准确度均未测试。',
          '**语言。**所读来源没有列出软件的界面语言。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '这三款已评测的照片工具是目录中最接近的替代品；它们都不是带图层的完整 RAW 编辑器。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Excire Foto](/zh/power-local-llm/excire-foto-review)', '平台': 'Windows、Mac', '价格 / 许可证': '一次性购买 / 闭源', '主要区别': '据其厂商称 AI 搜索和选片在本地运行的照片管理软件；没有编辑器' },
          { '应用': '[Facet](/zh/power-local-llm/facet-review)', '平台': '自托管（Docker 或 Python），浏览器', '价格 / 许可证': '免费 / MIT', '主要区别': '带本地人脸识别的开源评分与选片图库；需在终端中设置' },
          { '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)', '平台': '服务器（Docker），浏览器', '价格 / 许可证': '免费（Community）/ AGPL-3.0', '主要区别': '带 AI 标签的自托管网页图库；不是桌面编辑器' },
        ],
        note: '请在各应用自己的页面确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'ACDSee Photo Studio Ultimate 2027 是本地 LLM 吗？',
            a: '不是。来源描述的是用于关键词、人脸、蒙版、放大和生成的图像 AI，没有提到聊天功能或语言模型。',
          },
          {
            q: '哪些 AI 功能需要云端？',
            a: '四项：AI Image Generation、Generative Fill、Generative Edit 和 AI Remove。据 ACDSee 称，其余 AI 功能都在本地运行。',
          },
          {
            q: '除了许可证还有什么费用？',
            a: '另售的订阅方案 ACDSee 365 Complete 最多支持五台设备，每月 $9.99 或每年 $99.99（美国商店）。生成式工具会消耗 AI 积分，每次编辑的价格在所读来源中没有。',
          },
          {
            q: '能在 Mac 上运行吗？',
            a: '不能。Ultimate 2027 仅限 Windows；ACDSee 另售 Photo Studio for Mac，本评测不涉及。',
          },
          {
            q: '购买前能先试用吗？',
            a: '可以，ACDSee 提供 15 天免费试用，试用版感谢页提到 2,000 AI 积分。试用页面没有列出功能限制。',
          },
          {
            q: '它还在维护吗？',
            a: '据所读证据是的：版本说明列出了 2026 年 9 月 16 日的构建 20.0.0.4660。其中只有这一条记录，因此无法判断发布节奏。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'ACDSee Photo Studio Ultimate 2027 把图库管理、RAW 编辑和图层，与据 ACDSee 称在你的电脑上运行的 AI 关键词、人脸识别、蒙版和放大结合起来，以永久许可和 15 天试用的方式提供。代价是：闭源且仅限 Windows，激活需要电子邮箱和网络，四项生成式工具会把图像发送到 ACDSee 的云端并消耗积分，而 ACDSee 对保留期限的说法因来源而异。它适合想要免订阅程序并会使用本地 AI 工具的 Windows 摄影师；需要全部离线、开源或使用 Mac 的人应另选方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[ACDSee AI 页面](https://www.acdsee.com/en/photo-studio/AI) — 本地与云端 AI 功能及隐私说明，2026 年 10 月 30 日查阅。',
          '[ACDSee Photo Studio Ultimate 产品页面](https://www.acdsee.com/en/products/photo-studio-ultimate/) — 功能、系统要求、构建和下载大小，2026 年 10 月 30 日查阅。',
          '[ACDSee 购买页面](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — 许可类型、价格和订阅方案，2026 年 10 月 30 日查阅。',
          '[ACDSee 免费试用](https://www.acdsee.com/en/free-trials/) — 15 天试用，2026 年 10 月 30 日查阅。',
          '[ACDSee 版本说明](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — 构建 20.0.0.4660，2026 年 9 月 16 日。',
          '[ACDSee 隐私政策](https://www.acdsee.com/en/privacy-policy/) — 收集的数据、授权连接、崩溃数据，日期为 2026 年 1 月 19 日。',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — 2026 年 9 月 21 日的发布报道。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Excire Foto 评测](/zh/power-local-llm/excire-foto-review) — 带本地 AI 搜索和选片的 Windows 与 Mac 照片管理软件。',
          '[Facet 评测](/zh/power-local-llm/facet-review) — 带本地人脸识别的开源照片评分与选片图库。',
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 内置 AI 标签的自托管照片库。',
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
    heroImage: '/images/acdsee-photo-studio-ultimate-review-hero-ko.webp',
    title: 'ACDSee Photo Studio Ultimate 2027 리뷰: 로컬 AI와 클라우드 AI를 갖춘 사진 편집기',
    seoTitle: 'ACDSee Ultimate 2027 리뷰: 로컬 AI와 클라우드 생성',
    intro:
      'ACDSee Photo Studio Ultimate 2027은 Windows용 비공개 소스 사진 관리·RAW 편집 소프트웨어입니다. ACDSee에 따르면 얼굴 인식, 키워드, 마스크, 확대 같은 핵심 AI 기능은 내 PC에서 실행되고, 생성형 도구 4가지는 이미지를 ACDSee 클라우드로 보냅니다. 영구 라이선스로 판매되며 활성화에는 이메일 주소와 인터넷 연결이 필요합니다. 이 리뷰는 2026년 10월 30일에 확인한 ACDSee 웹사이트, 릴리스 노트, 개인정보 처리방침을 반영하며, 현재 버전은 2026년 9월 16일의 빌드 20.0.0.4660입니다.',
    metaDescription:
      'ACDSee Photo Studio Ultimate 2027 리뷰: ACDSee에 따르면 핵심 AI가 로컬에서 실행되는 Windows용 사진 관리·RAW 편집기이며, 생성형 도구는 클라우드를 사용합니다.',
    twitterDescription:
      'ACDSee Photo Studio Ultimate 2027 리뷰: 영구 라이선스의 Windows 사진 편집기. 내 PC에서 실행되는 AI 기능, 클라우드로 가는 4가지, 활성화와 크레딧의 의미를 정리했습니다.',
    audience:
      'AI 도구가 있는 사진 정리·RAW 편집 프로그램 하나를 찾는 Windows 사진가로, 어떤 AI 기능이 이미지를 내 PC에 두고 어떤 기능이 클라우드 서비스로 보내는지 알아야 하는 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'ACDSee Photo Studio Ultimate 2027 리뷰',
    targetKeywords: [
      'acdsee photo studio ultimate 2027 리뷰',
      'acdsee ai 로컬 클라우드',
      '오프라인 ai 사진 편집 프로그램',
      'lightroom 대안 영구 라이선스',
      'acdsee 생성형 채우기 크레딧',
      'windows 사진 관리 얼굴 인식',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**ACDSee Photo Studio Ultimate 2027은 AI가 두 갈래로 나뉜 Windows용 비공개 소스 사진 관리·RAW 편집 소프트웨어입니다. ACDSee에 따르면 얼굴 인식, 키워드, 유사도 검색, 마스크, 노이즈 제거, 확대는 내 PC에서 실행되고, AI Image Generation, Generative Fill, Generative Edit, AI Remove는 ACDSee 클라우드를 사용합니다.** 최신 빌드 20.0.0.4660은 2026년 9월 16일에 공개되었으므로 업데이트 중단 경고는 해당하지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'ACDSee Photo Studio Ultimate 2027은 사진을 내 PC 안에만 보관합니까?',
        answer:
          'ACDSee에 따르면 대부분 그렇습니다. AI 페이지에는 핵심 AI 기능이 로컬에서 작동하고 얼굴 인식은 클라우드 AI 처리를 사용하지 않는다고 적혀 있습니다. 예외는 생성형 도구 4가지로, 프롬프트와 이미지가 ACDSee 서버를 거칩니다. 활성화에는 이메일 주소와 인터넷이 필요하며, 활성화 후 오프라인에서 작동하는지는 ACDSee가 밝히지 않았습니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '비공개 소스이며 기기 1대용 영구 라이선스에 15일 체험판이 있고, 구독 요금제는 별도로 있습니다.',
          'Windows 10(64비트)과 Windows 11만 지원하며, 이 제품에는 Mac 버전이 없습니다.',
          'ACDSee에 따른 로컬 AI: 키워드, 얼굴 인식, 유사도 그룹화, 확대, 노이즈 제거, 하늘 교체, 얼굴 편집, 마스크.',
          '클라우드 AI: 이미지 생성, Generative Fill, Generative Edit, AI Remove로, AI 크레딧을 사용합니다.',
          '최신 빌드는 2026년 9월 16일자 20.0.0.4660입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'ACDSee Photo Studio Ultimate 2027이란?', anchor: 'what-is-acdsee' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
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
            text: 'ACDSee Photo Studio Ultimate 2027은 사진을 정리하고 편집하는 유료 비공개 소스 Windows 프로그램으로, ACDSee에 따르면 AI 대부분을 내 PC에서 실행하고 생성형 도구 4가지만 클라우드 서비스로 보냅니다.',
          },
          {
            type: 'plain-terms',
            text: 'Windows PC에 설치해 사진을 정리·편집하고, 키워드·얼굴·마스크용 AI는 로컬에서 씁니다. Generative Fill이나 이미지 생성을 쓰면 그 이미지는 ACDSee 서버로 가고 크레딧이 차감됩니다.',
          },
        ],
        items: [
          '유지 관리: 빌드 20.0.0.4660의 릴리스 노트 날짜는 2026년 9월 16일로 이 리뷰보다 44일 앞서므로 업데이트 중단 경고는 해당하지 않습니다.',
          '제작사: 개인정보 처리방침에 따르면 캐나다 빅토리아의 ACD Systems International Inc.입니다.',
          '범위: 사진 관리, RAW 현상, 레이어, AI 도구이며 채팅이나 언어 모델 어시스턴트가 아닙니다.',
          '플랫폼: Windows 전용이며, Mac용은 ACDSee가 별도 제품으로 판매합니다.',
          '클라우드: 생성형 도구에는 인터넷과 AI 크레딧이 필요하고, 해당 이미지의 보관 기간에 대한 ACDSee의 설명은 출처마다 다릅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 30일에 확인한 ACDSee 웹사이트, 릴리스 노트, 개인정보 처리방침과 언론 기사 1건에 근거합니다. PromptQuorum은 프로그램을 설치하지 않았으므로 AI 품질, 속도, 실제 네트워크 동작은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-acdsee',
        title: 'ACDSee Photo Studio Ultimate 2027이란?',
        content: [
          '**ACDSee Photo Studio Ultimate 2027은 ACDSee의 Windows 사진 제품군 최상위 에디션으로, 디지털 자산 관리, 비파괴 RAW 편집기, 레이어 편집기를 한 프로그램에 담았습니다.** 관리 쪽으로는 750종 이상의 카메라 지원, 스택, AI 이미지 역검색, 시각적 유사도 그룹화를 내세우고, 편집 쪽으로는 Color·Tone Wheels, Light EQ, AI Develop Presets를 내세웁니다. ACDSee Mobile Sync 기능은 iPhone과 Android의 사진·동영상을 Wi-Fi로 전송합니다.',
          'ACDSee 개인정보 처리방침에 따르면 발행처는 브리티시컬럼비아주 빅토리아의 ACD Systems International Inc.입니다. 같은 제품군에는 Professional·Home 에디션과 Gemstone Photo Editor도 있으며, 이 리뷰는 아래 AI 기능을 모두 나열하는 유일한 에디션인 Ultimate를 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**ACDSee Photo Studio Ultimate 2027은 Windows용 설치 프로그램을 내려받는 방식이며, 영구 라이선스를 구매하거나 15일 체험판을 시작합니다. 활성화에는 이메일 주소와 인터넷 연결이 필요합니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '웹사이트', '입수 방법': '[acdsee.com](https://www.acdsee.com/en/products/photo-studio-ultimate/)' },
          { '옵션': '무료 체험판', '입수 방법': 'Windows용 [15일 체험판](https://www.acdsee.com/en/free-trials/)' },
          { '옵션': '구매', '입수 방법': '[ACDSee 스토어](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/): 영구 라이선스, $179.99(미국 스토어), 기기 1대' },
          { '옵션': 'Windows', '입수 방법': '.exe 설치 프로그램, 778 MB, 빌드 20.0.0.4660' },
          { '옵션': 'Mac', '입수 방법': '미지원, ACDSee가 Photo Studio for Mac을 별도로 판매' },
          { '옵션': '릴리스 노트', '입수 방법': '[빌드 20.0.0.4660, 2026년 9월 16일](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[ACDSee 개인정보 처리방침](https://www.acdsee.com/en/privacy-policy/)' },
          { '옵션': '소스 코드', '입수 방법': '없음: 독점 소프트웨어' },
        ],
        note: '확인한 버전: Photo Studio Ultimate 2027, 빌드 20.0.0.4660, 마지막 업데이트 2026년 9월 16일. 가격은 미국 스토어의 달러 기준 그대로이며 한국에서의 가격은 다를 수 있습니다. 결제 시 현재 가격을 확인하십시오. ACDSee는 구매에 30일 환불 보장을 명시합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**ACDSee가 제시하는 요구 사항은 Windows 10(64비트) 또는 Windows 11, RAM 8 GB(권장 16 GB), 비디오 메모리 2 GB 이상의 DirectX 12 그래픽입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영체제', '출처의 설명': 'Windows 10(64비트만) 또는 Windows 11, Mac은 미지원' },
          { '항목': '프로세서', '출처의 설명': '64비트 Intel 또는 AMD, Intel i5 이상 권장' },
          { '항목': '메모리', '출처의 설명': '최소 8 GB, 16 GB 이상 권장' },
          { '항목': '그래픽', '출처의 설명': 'DirectX 12 어댑터(기능 수준 12_0 이상), VRAM 최소 2 GB, 4 GB 권장' },
          { '항목': '디스크 공간', '출처의 설명': '여유 공간 5 GB, 설치 프로그램은 778 MB' },
          { '항목': '디스플레이', '출처의 설명': '1920 x 1080 이상 권장' },
          { '항목': '활성화', '출처의 설명': '유효한 이메일 주소와 인터넷 연결' },
        ],
        note: '이 수치는 ACDSee의 제품 페이지에서 가져왔으며, PromptQuorum은 어떤 하드웨어에서도 속도나 메모리 사용량을 측정하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 ACDSee의 제품 페이지와 릴리스 노트에서 가져왔으며, PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**관리.** Auto-Stack과 사용자 지정 스택, AI 이미지 역검색, AI 이미지 유사도 그룹화, Reject 태그, 얼굴 감지·인식, 백그라운드 Activity Manager.',
          '**RAW 편집.** 750종 이상의 카메라를 지원하는 비파괴 현상, Color·Tone Wheels, Light EQ, 복제 도구, AI Develop Presets.',
          '**레이어.** 레이어 마스크, 혼합 모드, 텍스트, 도형, AI 선택 도구, Sky Replacement·Face Edit 같은 AI 필터.',
          '**생성형 도구.** 텍스트로 이미지 생성, Generative Fill, Generative Edit, AI Remove.',
          '**최신 빌드.** 2026년 9월 16일 릴리스 노트에는 RAW 카메라 6종, DNG 파일 내 JPEG XL 지원, 새 Develop 프리셋 범주, 렌즈 프로필 추가가 담겼고 충돌 문제가 수정되었습니다.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        itemHeadings: true,
        title: 'AI 기능과 실행 위치',
        content: [
          '**ACDSee의 AI 페이지는 핵심 AI 기능이 로컬에서 작동하고 생성형 AI 기능은 클라우드 처리를 사용한다고 밝힙니다.** AI는 이미지용이며 채팅 어시스턴트나 언어 모델은 설명되어 있지 않습니다.',
        ],
        columns: ['AI 기능', 'ACDSee 기준 실행 위치'],
        rows: [
          { 'AI 기능': 'AI Keywords', 'ACDSee 기준 실행 위치': '로컬, 내 PC에서' },
          { 'AI 기능': '얼굴 감지·인식', 'ACDSee 기준 실행 위치': '로컬, 클라우드 AI 처리를 쓰지 않는다고 명시' },
          { 'AI 기능': 'AI Image Similarity', 'ACDSee 기준 실행 위치': '로컬' },
          { 'AI 기능': 'AI Super-Resolution, AI Denoise', 'ACDSee 기준 실행 위치': '로컬' },
          { 'AI 기능': 'AI Sky Replacement, Face Edit, AI Actions', 'ACDSee 기준 실행 위치': '로컬' },
          { 'AI 기능': 'AI 마스크와 선택 도구', 'ACDSee 기준 실행 위치': '로컬' },
          { 'AI 기능': 'AI Image Generation', 'ACDSee 기준 실행 위치': '클라우드' },
          { 'AI 기능': 'Generative Fill, Generative Edit', 'ACDSee 기준 실행 위치': '클라우드' },
          { 'AI 기능': 'AI Remove', 'ACDSee 기준 실행 위치': '클라우드' },
        ],
        note: '이는 ACDSee 자체의 설명입니다. ACDSee는 사용하는 모델을 밝히지 않았으며, PromptQuorum은 품질, 속도, 네트워크 트래픽을 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**생성형 도구에 대해 ACDSee의 AI 페이지는 프롬프트와 이미지가 암호화되어 ACDSee 서버를 거치며 저장되지 않는다고 설명하지만, Fstoppers의 출시 기사는 요청이 일주일 뒤 삭제된다고 전합니다.** 두 설명이 다르므로 민감한 이미지를 보내기 전에 현재 약관을 확인하십시오.',
          '출처에 나타난 그 밖의 데이터 흐름: 활성화에는 유효한 이메일 주소가 필요하며, 개인정보 처리방침에 따르면 프로그램이 ACDSee의 라이선스·업데이트 서비스에 연결할 때 연결 시간, IP 주소, 애플리케이션 ID, 제품 버전, 설치 날짜, 라이선스 번호가 전송됩니다. 충돌 데이터가 수집될 수 있으며 최대 30일간 보관됩니다. 개인정보 처리방침의 날짜는 2026년 1월 19일이며 사진이 업로드되는지는 밝히지 않습니다. 로컬 기능에 대한 설명은 AI 페이지에 근거합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 공급업체의 선언이며 감사 결과가 아닙니다. ACDSee는 활성화 후 오프라인에서 작동하는지 밝히지 않았고, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Windows 사진가**로, 정리·RAW 현상·레이어를 영구 라이선스 프로그램 하나로 쓰고 싶은 분.',
          '**개인정보를 중시하는 사용자**로, AI 키워드·얼굴 인식·마스크를 내 PC에서 쓰고 생성형 도구 4가지는 피할 분.',
          '**생성형 채우기를 쓰고 싶은 사용자**로, 그 이미지가 클라우드 서비스로 가고 크레딧이 차감되는 것을 받아들일 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**오프라인 사용.** 활성화에는 인터넷이 필요하며, 이후 나머지 기능이 연결 없이 작동하는지는 밝혀져 있지 않습니다.',
          '**크레딧.** 체험판 감사 페이지에는 AI 크레딧 2,000이 언급되고 Fstoppers 출시 기사는 구매에 20,000이 포함된다고 하지만, 스토어 페이지에는 기재가 없고 제3자 가격 추적 서비스는 사전 판매 종료와 함께 혜택이 사라졌다고 전합니다. 생성형 편집 1회의 비용은 읽은 출처에 없습니다.',
          '**보관.** 클라우드로 보낸 이미지에 대해 「저장되지 않음」(ACDSee AI 페이지)과 「일주일 뒤 삭제」(Fstoppers)로 설명이 다릅니다.',
          '**AI 품질.** 키워드, 얼굴 그룹화, 마스크, 확대의 정확도는 테스트하지 않았습니다.',
          '**언어.** 소프트웨어의 인터페이스 언어는 읽은 출처에 나와 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '리뷰가 있는 이 세 가지 사진 도구가 디렉터리에서 가장 가까운 대안이며, 레이어를 갖춘 본격적인 RAW 편집기는 없습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Excire Foto](/ko/power-local-llm/excire-foto-review)', '플랫폼': 'Windows, Mac', '가격 / 라이선스': '일회성 구매 / 비공개 소스', '핵심 차이점': '제작사에 따르면 AI 검색과 선별이 로컬에서 실행되는 사진 관리 프로그램이며 편집기는 없음' },
          { '앱': '[Facet](/ko/power-local-llm/facet-review)', '플랫폼': '셀프 호스팅(Docker 또는 Python), 브라우저', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '로컬 얼굴 인식을 갖춘 오픈소스 점수화·선별 갤러리이며 터미널 설정이 필요함' },
          { '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)', '플랫폼': '서버(Docker), 브라우저', '가격 / 라이선스': '무료(Community) / AGPL-3.0', '핵심 차이점': 'AI 라벨이 있는 셀프 호스팅 웹 라이브러리이며 데스크톱 편집기가 아님' },
        ],
        note: '각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'ACDSee Photo Studio Ultimate 2027은 로컬 LLM입니까?',
            a: '아닙니다. 출처가 설명하는 것은 키워드, 얼굴, 마스크, 확대, 생성을 위한 이미지 AI이며, 채팅 기능이나 언어 모델은 언급하지 않습니다.',
          },
          {
            q: '어떤 AI 기능이 클라우드를 필요로 합니까?',
            a: '4가지입니다: AI Image Generation, Generative Fill, Generative Edit, AI Remove. ACDSee에 따르면 나머지 AI 기능은 모두 로컬에서 실행됩니다.',
          },
          {
            q: '라이선스 외에 드는 비용이 있습니까?',
            a: '별도 구독인 ACDSee 365 Complete는 최대 5대 기기에 월 $9.99 또는 연 $99.99입니다(미국 스토어). 생성형 도구는 AI 크레딧을 사용하지만 편집 1회당 가격은 읽은 출처에 나와 있지 않습니다.',
          },
          {
            q: 'Mac에서 실행됩니까?',
            a: '아닙니다. Ultimate 2027은 Windows 전용이며, ACDSee는 Photo Studio for Mac이라는 별도 제품을 판매하는데 이 리뷰는 다루지 않습니다.',
          },
          {
            q: '구매 전에 써볼 수 있습니까?',
            a: '예. ACDSee는 15일 무료 체험판을 제공하며, 체험판 감사 페이지에는 AI 크레딧 2,000이 언급됩니다. 체험판 페이지에는 기능 제한 목록이 없습니다.',
          },
          {
            q: '아직 유지 관리되고 있습니까?',
            a: '읽은 근거로는 그렇습니다. 릴리스 노트에 2026년 9월 16일의 빌드 20.0.0.4660이 올라 있습니다. 항목이 이것 하나뿐이어서 릴리스 주기는 판단할 수 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'ACDSee Photo Studio Ultimate 2027은 정리, RAW 편집, 레이어에 ACDSee에 따르면 PC에서 실행되는 AI 키워드, 얼굴 인식, 마스크, 확대를 결합하고 영구 라이선스와 15일 체험판으로 제공됩니다. 반면 비공개 소스에 Windows 전용이며, 활성화에는 이메일 주소와 인터넷이 필요하고, 생성형 도구 4가지는 이미지를 ACDSee 클라우드로 보내 크레딧을 사용하며, 보관에 대한 ACDSee의 설명은 출처마다 다릅니다. 구독 없는 프로그램 하나를 원하고 로컬 AI 도구를 쓸 Windows 사진가에게 적합하며, 모든 것을 오프라인·오픈소스·Mac에서 쓰려는 분은 다른 곳을 찾아보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[ACDSee AI 페이지](https://www.acdsee.com/en/photo-studio/AI) — 로컬 대 클라우드 AI 기능과 개인정보 관련 설명, 2026년 10월 30일 확인.',
          '[ACDSee Photo Studio Ultimate 제품 페이지](https://www.acdsee.com/en/products/photo-studio-ultimate/) — 기능, 시스템 요구 사항, 빌드와 다운로드 크기, 2026년 10월 30일 확인.',
          '[ACDSee 구매 페이지](https://www.acdsee.com/en/products/photo-studio-ultimate/buy/) — 라이선스 유형, 가격, 구독 요금제, 2026년 10월 30일 확인.',
          '[ACDSee 무료 체험판](https://www.acdsee.com/en/free-trials/) — 15일 체험판, 2026년 10월 30일 확인.',
          '[ACDSee 릴리스 노트](https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/) — 빌드 20.0.0.4660, 2026년 9월 16일.',
          '[ACDSee 개인정보 처리방침](https://www.acdsee.com/en/privacy-policy/) — 수집 데이터, 라이선스 연결, 충돌 데이터, 2026년 1월 19일자.',
          '[Fstoppers: ACDSee Photo Studio Ultimate 2027 keeps most of its AI on your own machine](https://fstoppers.com/news/acdsee-photo-studio-ultimate-2027-keeps-most-its-ai-your-own-machine-904733) — 2026년 9월 21일 출시 기사.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Excire Foto 리뷰](/ko/power-local-llm/excire-foto-review) — 로컬 AI 검색과 선별을 갖춘 Windows·Mac용 사진 관리 프로그램.',
          '[Facet 리뷰](/ko/power-local-llm/facet-review) — 로컬 얼굴 인식을 갖춘 오픈소스 사진 점수화·선별 갤러리.',
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — AI 라벨을 내장한 셀프 호스팅 사진 라이브러리.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
