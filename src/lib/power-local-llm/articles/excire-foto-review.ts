// Excire Foto Review: Local AI Photo and Video Manager for Windows and Mac
// Slug: excire-foto-review
// Companion to: immich-review, photoprism-review, ente-photos-review
// Sources (all read 2026-10-28, no hands-on testing): excire.com product page, shop page, trial page, the 2027 launch post (published 15 June 2026, available from 16 June 2026) and news page,
// support.excire.com (download article for version 5.0.2, version comparison), the Excire website privacy statement (excire.com/en/datenschutzerklaerung/, covers the website, not in-app
// behaviour) and HTTP headers of the three 5.0.2 installers on excire.com (Last-Modified 15 July 2026). The request came from the site owner (link from localhosted.com), not from Excire:
// no maker comment exists and there is no founder-review badge.
// Last upstream update 2026-07-15 (105 days before 2026-10-28) => stale warning ON in all 9 locales (leadAnswerBlock + callout); crosses 180 days on 2027-01-11.
// Prices: the shop page shows none. $249 (EUR 229) list and the limited-time introductory $219 (EUR 199) come from Excire's own launch post (June 2026) and are attributed as such;
// DE/FR/ES use Excire's own EUR figure, JA/ZH/PT/AR/KO keep the USD figure with a note (geo-translation currency rules; no invented local prices).
// Not stated by Excire and NOT claimed: offline use after activation, GPU needs, the AI models used, in-app interface languages. No affiliate links.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-en.webp',
    title: 'Excire Foto Review: Local AI Photo Manager for Windows and Mac',
    seoTitle: 'Excire Foto Review: Local AI Photo Manager, Win and Mac',
    intro:
      'Excire Foto is a closed-source photo and video manager for Windows and macOS whose AI search, people search, text recognition and culling run on your own computer, according to its maker in Germany. It is sold as a one-time purchase and needs an Excire account and an activation code. This review reflects Excire\'s website, shop, trial page, support articles and privacy statement as checked on 28 October 2026; the current release is Excire Foto 2027, version 5.0.2.',
    metaDescription:
      'Excire Foto review: Windows and Mac photo manager that, per its maker, runs AI search and text recognition locally. One-time purchase, 14-day trial.',
    twitterDescription:
      'Excire Foto review: a one-time-purchase photo manager for Windows and Mac whose AI search and culling run locally, per its maker. Requirements, activation, privacy, and why it carries a stale warning.',
    audience:
      'Photographers on Windows or Mac who want AI search and culling without uploading their library to a cloud service, and who need to know what the sources confirm, what activation involves and whether the product is still being updated.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Excire Foto review',
    targetKeywords: [
      'excire foto review',
      'excire foto 2027',
      'local ai photo manager',
      'photo organizer with face recognition offline',
      'ai photo culling software',
      'lightroom alternative photo search',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**Warning: the newest Excire Foto 2027 installers (version 5.0.2) date from 15 July 2026, and Excire publishes no changelog, so the product has shown no update for more than three months and may be unmaintained — check before relying on it.** **Excire Foto is a closed-source photo and video manager for Windows 11 and macOS 12 or later that, according to Excire, analyses your library locally with AI search, people search, text recognition and culling.** It is a one-time purchase with a 14-day trial, and it needs an Excire account and activation code.',
    quickAnswerTop: {
      en: {
        question: 'Does Excire Foto keep your photos on your own computer?',
        answer:
          'Per Excire, yes: its product page says "Everything runs locally, your photos stay on your computer" and that no data is sent to external parties. Activation needs an Excire account and a code, optional cloud sharing is separate, and Excire does not say whether the app works offline after activation. PromptQuorum has not inspected network traffic.',
        bullets: [
          'Closed source, one-time purchase with no subscription; the shop page shows no price, and Excire\'s launch post gives a $249 (€229) list price.',
          'Windows 11 (x86, 64-bit) and macOS 12 or later, Apple silicon and Intel; 8 GB RAM minimum, 16 GB recommended.',
          'Features: free-text search, people search, scene and object recognition, text recognition, auto-keywording, duplicate search and culling.',
          '14-day trial that needs no payment method; a major version is a paid upgrade at a discount.',
          'Newest installers date from 15 July 2026: stale warning applies.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Excire Foto?', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto is a paid, closed-source desktop app for Windows and Mac that, per its maker, searches photos by content, groups people, reads text in images and ranks shots, all on your own computer.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, point it at your photo folders, let it analyse them once, and then search by typing what is in the picture; Excire says nothing is uploaded, though activation needs an Excire account.',
          },
        ],
        items: [
          'Maintenance: the version 5.0.2 installers on excire.com were last modified on 15 July 2026 and no changelog is published, so a stale-project warning applies.',
          'Maker: Pattern Recognition Company GmbH in Lübeck, Germany, which trades as Excire; the product launched as Excire Foto 2027 on 16 June 2026.',
          'Setup: a normal installer for Windows or macOS, then activation with an Excire account and an activation code, or the 14-day trial.',
          'Cost: one-time purchase; Excire\'s launch post lists $249 (€229), and major versions are paid upgrades with a discount.',
          'Scope: photo and video management with AI search and culling; there is no chat or language-model assistant.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Stale-project warning: the version 5.0.2 installers date from 15 July 2026 and Excire publishes no release notes, so the app has shown no update for more than three months. It may be unmaintained; confirm it runs on your operating system before you buy.',
          },
          {
            type: 'note',
            text: 'This review is based on Excire\'s website, shop, trial page, support articles and privacy statement, checked on 28 October 2026. PromptQuorum has not installed Excire Foto, so search quality, speed and accuracy are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'What Is Excire Foto?',
        content: [
          '**Excire Foto is a standalone photo and video management program for Windows and macOS that adds AI search and selection tools to a local photo library.** Excire states that everything runs on your computer and that the program does not send data to external parties. Excire Foto 2027 was announced on 15 June 2026 and became available on 16 June 2026.',
          'The maker is Pattern Recognition Company GmbH in Lübeck, Germany. Excire also sells Excire Search, a separate plugin for Adobe Lightroom Classic, and an Excire Foto Office Edition for Windows 11 on a subscription; this review covers the consumer product Excire Foto 2027. Excire\'s news page lists a TIPA World Award entry dated 17 April 2026 and an EISA award entry dated 18 September 2026; PromptQuorum did not check those awards with the award bodies.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Excire Foto is a double-click installer for Windows and macOS; you then sign in with an Excire account and activate it with a code or start the 14-day trial.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Product page', 'How to get it': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'Option': 'Free trial', 'How to get it': '[14-day trial](https://excire.com/en/trial/), no payment method required' },
          { 'Option': 'Buy', 'How to get it': '[Excire shop](https://excire.com/en/shop/): one-time purchase; the shop page shows no price' },
          { 'Option': 'Windows', 'How to get it': 'Installer .exe for Windows 11, linked from the [download article](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'Option': 'Mac', 'How to get it': 'Separate Apple silicon and Intel .dmg downloads, same download article' },
          { 'Option': 'Privacy statement', 'How to get it': '[Excire privacy statement](https://excire.com/en/datenschutzerklaerung/): covers the website, not in-app behaviour' },
          { 'Option': 'Source code', 'How to get it': 'None: proprietary software' },
        ],
        note: 'Version reviewed: Excire Foto 2027, version 5.0.2. The launch post lists a regular price of $249 (€229) and a limited-time introductory price of $219 (€199) for new customers; the shop page shows no price, so confirm the current price at checkout. Excire Foto 2025 and older versions are still listed in the shop.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Excire lists Windows 11 or macOS 12 or later, a 64-bit processor with AVX support, and at least 8 GB of RAM, with 16 GB or more recommended.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'macOS 12 or later, or Windows 11 (x86, 64-bit); the shop page says it is not optimized for Snapdragon/ARM Windows' },
          { 'Item': 'Mac processors', 'What the sources say': 'Separate downloads for Apple silicon and Intel Macs' },
          { 'Item': 'Processor', 'What the sources say': 'Multi-core 64-bit CPU with AVX; older AMD Phenom II/Athlon II and Intel Core 2 Duo are not supported' },
          { 'Item': 'Memory', 'What the sources say': '8 GB minimum, 16 GB or more recommended' },
          { 'Item': 'Disk space', 'What the sources say': 'About 900 MB per 100,000 photos for databases, and about 25 GB for previews at the highest quality with RAW files' },
          { 'Item': 'GPU', 'What the sources say': 'No GPU requirement is listed' },
          { 'Item': 'Windows HEIC', 'What the sources say': 'HEIC files need the Microsoft HEIF and HEVC extensions to display' },
        ],
        note: 'These minimums come from Excire\'s shop and product pages; PromptQuorum did not measure analysis time or memory use on any hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow Excire\'s product, trial and download pages; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Download the installer',
            whyItMatters: 'Take the Windows .exe or the Apple silicon or Intel .dmg from Excire\'s download article, then run the installer or mount the disk image.',
          },
          {
            title: 'Create an account and activate',
            whyItMatters: 'Excire says an Excire user account is required and the software must be activated once with an activation code; the trial runs for 14 days without a payment method.',
          },
          {
            title: 'Back up, then add your folders',
            whyItMatters: 'Excire advises backing up an existing database first, because a database migrated to version 5.x cannot be opened by older versions.',
          },
          {
            title: 'Let the analysis finish',
            whyItMatters: 'Photos must be analysed before content search works; Excire says existing photos need re-analysis to use the new text search.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from Excire\'s product page, launch post or version comparison; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Search.** Free-text content search, similar-image search, people search, scene and object recognition, and a combined search and filter bar.',
          '**Text recognition.** Excire Foto 2027 reads text in images, such as signs and documents, and highlights matches in the preview.',
          '**Keywords and duplicates.** Automatic keywording for photos and videos, and a duplicate search.',
          '**Culling.** Sharpness checks, a smart selection, a survey view for comparing images, a 3×3 grid and focus peaking.',
          '**Library.** Collections, ratings, colour labels, flags, metadata editing, a world map view, a timeline graph and RAW support.',
          '**Sharing.** Collection sharing through Dropbox, Google Drive, Microsoft OneDrive and Nextcloud.',
        ],
        note: 'Excire\'s version comparison lists text recognition, the map view and the timeline graph as new in Excire Foto 2027 and absent from the 2025 and 2024 versions.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**The AI is image-based: it recognises content, faces and text in your photos so you can search and select them; no chat assistant or language model is described.**',
        ],
        items: [
          '**Content search.** You type what is in the picture and the program finds matching photos; Excire does not name the models behind it.',
          '**People.** Faces are found and grouped so you can search for and name people, and write person names to files when saving metadata.',
          '**Text in images.** New in 2027; existing photos must be analysed again before their text can be searched.',
          '**Where it runs.** Excire says all processing happens locally on your computer with no cloud dependency and that photos are not uploaded for analysis.',
        ],
        note: 'These are Excire\'s own statements. PromptQuorum did not test search relevance, face-grouping accuracy, text recognition in other languages or speed.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**Excire\'s product page says "Everything runs locally, your photos stay on your computer" and "Excire Foto does not send any data to external parties".** In the product FAQ, Excire answers "No" to whether photos are uploaded for analysis and says it does not use a cloud solution.',
          'Three things reach outside according to the sources. Activation needs an Excire user account and an activation code; the website privacy statement says activation codes are generated by the provider 10Duke and that registration stores name, email address, password, a hardware identifier, the product name and a timestamp. Checkout runs through FastSpring. Cloud sharing through Dropbox, Google Drive, OneDrive or Nextcloud sends the shared photos to those services when you use it. The privacy statement covers the website, and it does not describe update checks, crash reports or what the program does on a network after activation.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the vendor\'s declarations, not audit results. Excire does not state whether the program works fully offline after activation, and PromptQuorum has not inspected network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Photographers with large local libraries** who want search by content, people and text without uploading to a cloud service.',
          '**People who dislike subscriptions** and prefer a one-time purchase, accepting paid major upgrades.',
          '**Users who cull many similar shots** and want sharpness checks and a comparison view.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Maintenance.** The 5.0.2 installers date from 15 July 2026 and no changelog exists, so it is unclear whether further updates are planned.',
          '**AI quality.** Search relevance, face grouping, text recognition and speed were not tested.',
          '**Offline use.** Excire\'s [activation article](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) says the code is entered only once and that afterwards logging in to (and staying logged in to) your Excire account activates the software; it does not say whether this works without an internet connection.',
          '**Price.** The shop page shows no price; the figures come from Excire\'s launch post and may have changed.',
          '**Languages and GPU.** The app\'s interface languages and any GPU benefit are not listed in the sources read.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has three photo-library tools with a review; all three list an AGPL-3.0 licence, unlike the closed-source Excire Foto.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Immich](/power-local-llm/immich-review)', 'Platforms': 'Server (Docker), phone apps, browser', 'Price / license': 'Free / AGPL-3.0', 'Key difference': 'Self-hosted server with phone backup; setup needs Docker, and it is open source' },
          { 'App': '[PhotoPrism](/power-local-llm/photoprism-review)', 'Platforms': 'Server (Docker), browser', 'Price / license': 'Free Community / AGPL-3.0', 'Key difference': 'Self-hosted web app with built-in AI labels, not a desktop program' },
          { 'App': '[Ente Photos](/power-local-llm/ente-photos-review)', 'Platforms': 'iOS, Android, desktop, web', 'Price / license': 'Free 10 GB, paid plans / AGPL-3.0', 'Key difference': 'Encrypted cloud storage with on-device AI; no local library manager' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Excire Foto a local LLM?',
            a: 'No. The sources describe image, face and text recognition for photo search, and they name no chat feature or language model.',
          },
          {
            q: 'Does Excire Foto work offline?',
            a: 'Excire says processing runs locally on your computer, but it also says an Excire account and an activation code are required to activate the software; whether it runs without internet after activation is not stated.',
          },
          {
            q: 'How much does Excire Foto cost?',
            a: 'The shop page shows no price. Excire\'s June 2026 launch post lists a regular price of $249 (€229) and a limited-time introductory price of $219 (€199); a trial is free for 14 days.',
          },
          {
            q: 'Do I have to pay for updates?',
            a: 'Excire says bug fixes and minor improvements are free, while upgrades with major improvements are paid, with a substantial discount for existing customers.',
          },
          {
            q: 'Can I try it before buying?',
            a: 'Yes: Excire offers a 14-day trial for Windows or Mac and says no payment method is required. The trial page does not list feature limits.',
          },
          {
            q: 'Is the project still maintained?',
            a: 'Unclear. The installers for version 5.0.2 were last modified on 15 July 2026 and Excire publishes no changelog, so treat it as possibly unmaintained and check the support site before buying.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Excire Foto offers AI search, people search, text recognition and culling that run on your own computer, for a one-time purchase with a 14-day trial, according to its maker. Against that, it is closed source, it requires an Excire account and activation code, its offline behaviour after activation is not stated, major versions are paid upgrades, the shop page shows no price, and the newest installers date from 15 July 2026, which triggers a stale-project warning. It suits Windows 11 and macOS photographers who value a local, subscription-free tool and will run the trial first; anyone who needs a maintained, open-source or self-hosted solution should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Excire Foto product page](https://excire.com/en/excire-foto/) — features, local-processing statements, activation and upgrade policy, checked 28 October 2026.',
          '[Excire shop](https://excire.com/en/shop/) — system requirements and purchase models, checked 28 October 2026.',
          '[Excire trial page](https://excire.com/en/trial/) — 14-day trial terms, checked 28 October 2026.',
          '[Excire Foto 2027 launch post](https://excire.com/en/excire-foto-2027-is-here/) — release date, new features and list price, published 15 June 2026.',
          '[Excire news](https://excire.com/en/news/) — award entries, checked 28 October 2026.',
          '[Excire support download article](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — version 5.0.2 and installers, checked 28 October 2026.',
          '[Excire privacy statement](https://excire.com/en/datenschutzerklaerung/) — website data processing, activation provider and checkout, checked 28 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Immich Review](/power-local-llm/immich-review) — a self-hosted photo library with phone backup and smart search.',
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — another self-hosted photo library with built-in AI labels.',
          '[Ente Photos Review](/power-local-llm/ente-photos-review) — encrypted photo backup with on-device face and natural-language search.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Excire Foto Review: Local AI Photo Manager for Windows and Mac',
      description:
        'Excire Foto review: a closed-source Windows and Mac photo manager with local AI search, people search, text recognition and culling. Requirements, activation, privacy and a stale-project warning.',
      url: 'https://www.promptquorum.com/power-local-llm/excire-foto-review',
      inLanguage: 'en',
      datePublished: '2026-10-28',
      dateModified: '2026-10-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Photographers evaluating a local AI photo manager for Windows or Mac' },
      about: [
        { '@type': 'Thing', name: 'Excire Foto' },
        { '@type': 'Thing', name: 'Photo management software' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Photo culling' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/excire-foto-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Excire Foto Review', item: 'https://www.promptquorum.com/power-local-llm/excire-foto-review' },
      ],
    },
  },

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-de.webp',
    title: 'Excire-Foto-Rezension: lokaler KI-Fotomanager für Windows und Mac',
    seoTitle: 'Excire-Foto-Rezension: lokaler KI-Fotomanager, Win und Mac',
    intro:
      'Excire Foto ist ein nicht quelloffener Foto- und Video-Manager für Windows und macOS, dessen KI-Suche, Personensuche, Texterkennung und Bildauswahl laut dem deutschen Hersteller auf Ihrem eigenen Computer laufen. Verkauft wird er als Einmalkauf, und er benötigt ein Excire-Konto sowie einen Aktivierungscode. Diese Rezension gibt Website, Shop, Testseite, Support-Artikel und Datenschutzerklärung von Excire so wieder, wie sie am 28. Oktober 2026 geprüft wurden; aktuell ist Excire Foto 2027, Version 5.0.2.',
    metaDescription:
      'Excire-Foto-Rezension: Foto-Manager für Windows und Mac, dessen KI-Suche und Texterkennung laut Hersteller lokal laufen. Einmalkauf, 14 Tage testen.',
    twitterDescription:
      'Excire-Foto-Rezension: ein Foto-Manager im Einmalkauf für Windows und Mac, dessen KI-Suche und Bildauswahl laut Hersteller lokal laufen. Anforderungen, Aktivierung, Datenschutz und warum eine Veraltet-Warnung gilt.',
    audience:
      'Fotografinnen und Fotografen unter Windows oder Mac, die KI-Suche und Bildauswahl wollen, ohne ihre Bibliothek bei einem Cloud-Dienst hochzuladen, und die wissen müssen, was die Quellen bestätigen, was die Aktivierung bedeutet und ob das Produkt noch aktualisiert wird.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Excire Foto Rezension',
    targetKeywords: [
      'excire foto rezension',
      'excire foto 2027',
      'lokaler ki fotomanager',
      'fotos verwalten gesichtserkennung offline',
      'ki bildauswahl software',
      'lightroom alternative fotosuche',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**Warnung: Die neuesten Installationsdateien von Excire Foto 2027 (Version 5.0.2) stammen vom 15. Juli 2026, und Excire veröffentlicht kein Änderungsprotokoll; das Produkt wurde also seit mehr als drei Monaten nicht erkennbar aktualisiert und wird möglicherweise nicht mehr gepflegt — prüfen Sie das, bevor Sie sich darauf verlassen.** **Excire Foto ist ein nicht quelloffener Foto- und Video-Manager für Windows 11 und macOS 12 oder neuer, der Ihre Bibliothek laut Excire lokal mit KI-Suche, Personensuche, Texterkennung und Bildauswahl analysiert.** Er wird einmalig bezahlt, bietet 14 Tage Testzeit und benötigt ein Excire-Konto und einen Aktivierungscode.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Fotos bei Excire Foto auf Ihrem eigenen Computer?',
        answer:
          'Laut Excire ja: Die Produktseite sagt „Everything runs locally, your photos stay on your computer“ und dass keine Daten an Dritte gesendet werden. Die Aktivierung braucht ein Excire-Konto und einen Code, das Teilen über die Cloud ist optional und getrennt, und Excire sagt nicht, ob die App nach der Aktivierung offline funktioniert. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
        bullets: [
          'Nicht quelloffen, Einmalkauf ohne Abo; die Shop-Seite nennt keinen Preis, Excires Launch-Beitrag nennt 249 US-Dollar (229 €) Listenpreis.',
          'Windows 11 (x86, 64-Bit) und macOS 12 oder neuer, Apple Silicon und Intel; mindestens 8 GB RAM, empfohlen 16 GB.',
          'Funktionen: Freitextsuche, Personensuche, Szenen- und Objekterkennung, Texterkennung, automatische Verschlagwortung, Duplikatsuche und Bildauswahl.',
          '14 Tage Testversion ohne Zahlungsmittel; eine neue Hauptversion ist ein kostenpflichtiges Upgrade mit Rabatt.',
          'Die neuesten Installationsdateien stammen vom 15. Juli 2026: Es gilt eine Veraltet-Warnung.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Excire Foto?', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto ist eine kostenpflichtige, nicht quelloffene Desktop-App für Windows und Mac, die laut Hersteller Fotos nach Inhalt durchsucht, Personen gruppiert, Text in Bildern liest und Aufnahmen bewertet, alles auf Ihrem eigenen Computer.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie, wählen Ihre Foto-Ordner, lassen sie einmal analysieren und suchen dann, indem Sie eintippen, was auf dem Bild zu sehen ist; laut Excire wird nichts hochgeladen, die Aktivierung braucht aber ein Excire-Konto.',
          },
        ],
        items: [
          'Pflege: Die Installationsdateien der Version 5.0.2 auf excire.com wurden zuletzt am 15. Juli 2026 geändert, ein Änderungsprotokoll gibt es nicht; daher gilt eine Veraltet-Warnung.',
          'Hersteller: Pattern Recognition Company GmbH in Lübeck, die unter dem Namen Excire auftritt; das Produkt erschien am 16. Juni 2026 als Excire Foto 2027.',
          'Einrichtung: ein normales Installationsprogramm für Windows oder macOS, danach Aktivierung mit Excire-Konto und Aktivierungscode oder die 14-Tage-Testversion.',
          'Kosten: Einmalkauf; Excires Launch-Beitrag nennt 249 US-Dollar (229 €), neue Hauptversionen sind kostenpflichtige Upgrades mit Rabatt.',
          'Umfang: Foto- und Videoverwaltung mit KI-Suche und Bildauswahl; einen Chat oder Sprachmodell-Assistenten gibt es nicht.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Veraltet-Warnung: Die Installationsdateien der Version 5.0.2 stammen vom 15. Juli 2026, und Excire veröffentlicht keine Versionshinweise; die App wurde also seit mehr als drei Monaten nicht erkennbar aktualisiert. Möglicherweise wird sie nicht mehr gepflegt; prüfen Sie vor dem Kauf, ob sie auf Ihrem Betriebssystem läuft.',
          },
          {
            type: 'note',
            text: 'Diese Rezension beruht auf Website, Shop, Testseite, Support-Artikeln und Datenschutzerklärung von Excire, geprüft am 28. Oktober 2026. PromptQuorum hat Excire Foto nicht installiert; Suchqualität, Geschwindigkeit und Genauigkeit sind daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'Was ist Excire Foto?',
        content: [
          '**Excire Foto ist ein eigenständiges Programm zur Foto- und Videoverwaltung für Windows und macOS, das einer lokalen Fotobibliothek KI-Suche und Auswahlwerkzeuge hinzufügt.** Excire gibt an, dass alles auf Ihrem Computer läuft und das Programm keine Daten an Dritte sendet. Excire Foto 2027 wurde am 15. Juni 2026 angekündigt und ist seit dem 16. Juni 2026 erhältlich.',
          'Hersteller ist die Pattern Recognition Company GmbH in Lübeck. Excire verkauft außerdem Excire Search, ein getrenntes Plug-in für Adobe Lightroom Classic, und eine Excire Foto Office Edition für Windows 11 im Abo; diese Rezension behandelt das Verbraucherprodukt Excire Foto 2027. Die Nachrichtenseite von Excire nennt einen TIPA-World-Award-Eintrag vom 17. April 2026 und einen EISA-Award-Eintrag vom 18. September 2026; PromptQuorum hat diese Auszeichnungen nicht bei den Preisvergebern geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Excire Foto ist ein Installationsprogramm für Windows und macOS; anschließend melden Sie sich mit einem Excire-Konto an und aktivieren es mit einem Code oder starten die 14-Tage-Testversion.**',
        ],
        columns: ['Option', 'So erhalten Sie es'],
        rows: [
          { 'Option': 'Produktseite', 'So erhalten Sie es': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'Option': 'Kostenlose Testversion', 'So erhalten Sie es': '[14-Tage-Test](https://excire.com/en/trial/), kein Zahlungsmittel nötig' },
          { 'Option': 'Kaufen', 'So erhalten Sie es': '[Excire-Shop](https://excire.com/en/shop/): Einmalkauf; die Shop-Seite nennt keinen Preis' },
          { 'Option': 'Windows', 'So erhalten Sie es': 'Installer (.exe) für Windows 11, verlinkt im [Download-Artikel](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'Option': 'Mac', 'So erhalten Sie es': 'Getrennte .dmg-Downloads für Apple Silicon und Intel, im selben Download-Artikel' },
          { 'Option': 'Datenschutzerklärung', 'So erhalten Sie es': '[Datenschutzerklärung von Excire](https://excire.com/en/datenschutzerklaerung/): betrifft die Website, nicht das Verhalten der App' },
          { 'Option': 'Quellcode', 'So erhalten Sie es': 'Keiner: proprietäre Software' },
        ],
        note: 'Geprüfte Version: Excire Foto 2027, Version 5.0.2. Der Launch-Beitrag nennt einen regulären Preis von 249 US-Dollar (229 €) und einen zeitlich begrenzten Einführungspreis von 219 US-Dollar (199 €) für Neukunden; die Shop-Seite zeigt keinen Preis, prüfen Sie den aktuellen Preis daher an der Kasse. Excire Foto 2025 und ältere Versionen stehen weiterhin im Shop.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Excire nennt Windows 11 oder macOS 12 oder neuer, einen 64-Bit-Prozessor mit AVX-Unterstützung und mindestens 8 GB RAM, empfohlen sind 16 GB oder mehr.**',
        ],
        columns: ['Punkt', 'Was die Quellen sagen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Was die Quellen sagen': 'macOS 12 oder neuer oder Windows 11 (x86, 64-Bit); laut Shop-Seite nicht für Snapdragon/ARM-Windows optimiert' },
          { 'Punkt': 'Mac-Prozessoren', 'Was die Quellen sagen': 'Getrennte Downloads für Apple-Silicon- und Intel-Macs' },
          { 'Punkt': 'Prozessor', 'Was die Quellen sagen': 'Mehrkern-64-Bit-CPU mit AVX; ältere AMD Phenom II/Athlon II und Intel Core 2 Duo werden nicht unterstützt' },
          { 'Punkt': 'Arbeitsspeicher', 'Was die Quellen sagen': 'Mindestens 8 GB, empfohlen 16 GB oder mehr' },
          { 'Punkt': 'Speicherplatz', 'Was die Quellen sagen': 'Etwa 900 MB je 100.000 Fotos für Datenbanken und etwa 25 GB für Vorschauen in höchster Qualität mit RAW-Dateien' },
          { 'Punkt': 'GPU', 'Was die Quellen sagen': 'Es wird keine GPU-Anforderung genannt' },
          { 'Punkt': 'HEIC unter Windows', 'Was die Quellen sagen': 'HEIC-Dateien benötigen zur Anzeige die Microsoft-Erweiterungen HEIF und HEVC' },
        ],
        note: 'Diese Mindestanforderungen stammen aus den Shop- und Produktseiten von Excire; PromptQuorum hat weder Analysezeit noch Speicherbedarf auf einer Hardware gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Diese Schritte folgen den Produkt-, Test- und Download-Seiten von Excire; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installer herunterladen',
            whyItMatters: 'Laden Sie aus dem Download-Artikel von Excire die Windows-.exe oder die .dmg für Apple Silicon oder Intel, dann starten Sie den Installer oder öffnen das Disk-Image.',
          },
          {
            title: 'Konto anlegen und aktivieren',
            whyItMatters: 'Excire sagt, ein Excire-Benutzerkonto sei erforderlich und die Software müsse einmalig mit einem Aktivierungscode aktiviert werden; die Testversion läuft 14 Tage ohne Zahlungsmittel.',
          },
          {
            title: 'Sichern, dann Ordner hinzufügen',
            whyItMatters: 'Excire rät, eine vorhandene Datenbank vorher zu sichern, weil eine auf Version 5.x migrierte Datenbank nicht mit älteren Versionen geöffnet werden kann.',
          },
          {
            title: 'Analyse abwarten',
            whyItMatters: 'Fotos müssen analysiert sein, bevor die Inhaltssuche funktioniert; laut Excire müssen vorhandene Fotos für die neue Textsuche erneut analysiert werden.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alle folgenden Punkte stammen von Excires Produktseite, Launch-Beitrag oder Versionsvergleich; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Suche.** Freitext-Inhaltssuche, Suche nach ähnlichen Bildern, Personensuche, Szenen- und Objekterkennung sowie eine kombinierte Such- und Filterleiste.',
          '**Texterkennung.** Excire Foto 2027 liest Text in Bildern, etwa auf Schildern und Dokumenten, und hebt Treffer in der Vorschau hervor.',
          '**Schlagwörter und Duplikate.** Automatische Verschlagwortung für Fotos und Videos sowie eine Duplikatsuche.',
          '**Bildauswahl.** Schärfeprüfung, eine intelligente Auswahl, eine Übersichtsansicht zum Vergleichen, ein 3×3-Raster und Focus Peaking.',
          '**Bibliothek.** Sammlungen, Bewertungen, Farbmarkierungen, Flaggen, Metadaten-Bearbeitung, eine Weltkarte, ein Zeitleistendiagramm und RAW-Unterstützung.',
          '**Teilen.** Teilen von Sammlungen über Dropbox, Google Drive, Microsoft OneDrive und Nextcloud.',
        ],
        note: 'Excires Versionsvergleich führt Texterkennung, Kartenansicht und Zeitleistendiagramm als neu in Excire Foto 2027 und als nicht enthalten in den Versionen 2025 und 2024.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die KI arbeitet bildbasiert: Sie erkennt Inhalte, Gesichter und Text in Ihren Fotos, damit Sie suchen und auswählen können; ein Chat-Assistent oder Sprachmodell wird nicht beschrieben.**',
        ],
        items: [
          '**Inhaltssuche.** Sie tippen ein, was auf dem Bild zu sehen ist, und das Programm findet passende Fotos; welche Modelle dahinter stehen, nennt Excire nicht.',
          '**Personen.** Gesichter werden gefunden und gruppiert, sodass Sie nach Personen suchen, sie benennen und Namen beim Speichern der Metadaten in Dateien schreiben können.',
          '**Text in Bildern.** Neu in 2027; vorhandene Fotos müssen erneut analysiert werden, bevor ihr Text durchsuchbar ist.',
          '**Wo es läuft.** Excire sagt, die gesamte Verarbeitung geschehe lokal auf Ihrem Computer ohne Cloud-Abhängigkeit, und Fotos würden nicht zur Analyse hochgeladen.',
        ],
        note: 'Dies sind Excires eigene Angaben. PromptQuorum hat weder Suchrelevanz noch Genauigkeit der Gesichtsgruppierung, Texterkennung in anderen Sprachen oder Geschwindigkeit getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Excires Produktseite sagt „Everything runs locally, your photos stay on your computer“ und „Excire Foto does not send any data to external parties“.** In den Produkt-FAQ antwortet Excire mit „No“ auf die Frage, ob Fotos zur Analyse hochgeladen werden, und sagt, es nutze keine Cloud-Lösung.',
          'Drei Dinge reichen laut den Quellen nach außen. Die Aktivierung braucht ein Excire-Benutzerkonto und einen Aktivierungscode; die Datenschutzerklärung der Website sagt, Aktivierungscodes erzeuge der Anbieter 10Duke, und die Registrierung speichere Name, E-Mail-Adresse, Passwort, eine Hardware-Kennung, den Produktnamen und einen Zeitstempel. Die Kasse läuft über FastSpring. Das Teilen über Dropbox, Google Drive, OneDrive oder Nextcloud sendet die geteilten Fotos an diese Dienste, sobald Sie es nutzen. Die Datenschutzerklärung betrifft die Website; sie beschreibt weder Update-Prüfungen noch Absturzberichte noch das Netzwerkverhalten des Programms nach der Aktivierung.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Herstellers, keine Prüfergebnisse. Excire sagt nicht, ob das Programm nach der Aktivierung vollständig offline funktioniert, und PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Fotografen mit großen lokalen Bibliotheken**, die nach Inhalt, Personen und Text suchen möchten, ohne etwas bei einem Cloud-Dienst hochzuladen.',
          '**Menschen, die Abonnements meiden** und einen Einmalkauf bevorzugen und dafür kostenpflichtige Hauptversions-Upgrades akzeptieren.',
          '**Nutzer, die viele ähnliche Aufnahmen aussortieren** und Schärfeprüfung sowie eine Vergleichsansicht wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Pflege.** Die Installer der Version 5.0.2 stammen vom 15. Juli 2026, ein Änderungsprotokoll gibt es nicht; ob weitere Updates geplant sind, bleibt unklar.',
          '**KI-Qualität.** Suchrelevanz, Gesichtsgruppierung, Texterkennung und Geschwindigkeit wurden nicht getestet.',
          '**Offline-Nutzung.** Laut dem [Aktivierungsartikel](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) von Excire wird der Code nur einmal eingegeben, danach genügt die Anmeldung beim Excire-Konto (angemeldet bleiben), um die Software zu aktivieren; ob das ohne Internetverbindung funktioniert, sagt Excire nicht.',
          '**Preis.** Die Shop-Seite nennt keinen Preis; die Zahlen stammen aus Excires Launch-Beitrag und können sich geändert haben.',
          '**Sprachen und GPU.** Oberflächensprachen der App und ein möglicher GPU-Nutzen werden in den gelesenen Quellen nicht genannt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Konkurrenz',
        content: [
          'Das Verzeichnis enthält drei Foto-Bibliotheken mit Rezension; alle drei nennen eine AGPL-3.0-Lizenz, anders als das nicht quelloffene Excire Foto.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Immich](/de/power-local-llm/immich-review)', 'Plattformen': 'Server (Docker), Handy-Apps, Browser', 'Preis / Lizenz': 'Kostenlos / AGPL-3.0', 'Hauptunterschied': 'Selbst gehosteter Server mit Handy-Backup; Einrichtung per Docker, Open Source' },
          { 'App': '[PhotoPrism](/de/power-local-llm/photoprism-review)', 'Plattformen': 'Server (Docker), Browser', 'Preis / Lizenz': 'Community kostenlos / AGPL-3.0', 'Hauptunterschied': 'Selbst gehostete Web-App mit integrierten KI-Labels, kein Desktop-Programm' },
          { 'App': '[Ente Photos](/de/power-local-llm/ente-photos-review)', 'Plattformen': 'iOS, Android, Desktop, Web', 'Preis / Lizenz': '10 GB kostenlos, Bezahlpläne / AGPL-3.0', 'Hauptunterschied': 'Verschlüsselter Cloud-Speicher mit KI auf dem Gerät; kein lokaler Bibliotheksmanager' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Ist Excire Foto ein lokales LLM?',
            a: 'Nein. Die Quellen beschreiben Bild-, Gesichts- und Texterkennung für die Fotosuche und nennen weder eine Chat-Funktion noch ein Sprachmodell.',
          },
          {
            q: 'Funktioniert Excire Foto offline?',
            a: 'Excire sagt, die Verarbeitung laufe lokal auf Ihrem Computer, nennt aber ein Excire-Konto und einen Aktivierungscode als Voraussetzung für die Aktivierung; ob es nach der Aktivierung ohne Internet läuft, steht nirgends.',
          },
          {
            q: 'Was kostet Excire Foto?',
            a: 'Die Shop-Seite nennt keinen Preis. Excires Launch-Beitrag vom Juni 2026 nennt einen regulären Preis von 249 US-Dollar (229 €) und einen zeitlich begrenzten Einführungspreis von 219 US-Dollar (199 €); die Testversion ist 14 Tage kostenlos.',
          },
          {
            q: 'Muss ich für Updates bezahlen?',
            a: 'Laut Excire sind Fehlerbehebungen und kleine Verbesserungen kostenlos, Upgrades mit großen Verbesserungen kostenpflichtig, mit einem deutlichen Rabatt für Bestandskunden.',
          },
          {
            q: 'Kann ich es vor dem Kauf ausprobieren?',
            a: 'Ja: Excire bietet eine 14-Tage-Testversion für Windows oder Mac an und sagt, es sei kein Zahlungsmittel nötig. Die Testseite nennt keine Funktionsgrenzen.',
          },
          {
            q: 'Wird das Projekt noch gepflegt?',
            a: 'Unklar. Die Installer der Version 5.0.2 wurden zuletzt am 15. Juli 2026 geändert, und Excire veröffentlicht kein Änderungsprotokoll; behandeln Sie es als möglicherweise nicht mehr gepflegt und prüfen Sie vor dem Kauf die Support-Seite.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Excire Foto bietet laut Hersteller KI-Suche, Personensuche, Texterkennung und Bildauswahl auf Ihrem eigenen Computer, im Einmalkauf und mit 14 Tagen Testzeit. Dagegen steht: nicht quelloffen, Excire-Konto und Aktivierungscode sind Pflicht, das Offline-Verhalten nach der Aktivierung ist nicht angegeben, Hauptversionen sind kostenpflichtige Upgrades, die Shop-Seite nennt keinen Preis, und die neuesten Installer stammen vom 15. Juli 2026, was eine Veraltet-Warnung auslöst. Geeignet für Fotografen unter Windows 11 und macOS, die ein lokales Werkzeug ohne Abo schätzen und zuerst die Testversion nutzen; wer eine gepflegte, quelloffene oder selbst gehostete Lösung braucht, sollte sich anderswo umsehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Excire-Foto-Produktseite](https://excire.com/en/excire-foto/) — Funktionen, Aussagen zur lokalen Verarbeitung, Aktivierung und Upgrade-Regeln, geprüft am 28. Oktober 2026.',
          '[Excire-Shop](https://excire.com/en/shop/) — Systemanforderungen und Kaufmodelle, geprüft am 28. Oktober 2026.',
          '[Excire-Testseite](https://excire.com/en/trial/) — Bedingungen der 14-Tage-Testversion, geprüft am 28. Oktober 2026.',
          '[Launch-Beitrag zu Excire Foto 2027](https://excire.com/en/excire-foto-2027-is-here/) — Erscheinungsdatum, neue Funktionen und Listenpreis, veröffentlicht am 15. Juni 2026.',
          '[Excire-Neuigkeiten](https://excire.com/en/news/) — Einträge zu Auszeichnungen, geprüft am 28. Oktober 2026.',
          '[Download-Artikel im Excire-Support](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — Version 5.0.2 und Installer, geprüft am 28. Oktober 2026.',
          '[Datenschutzerklärung von Excire](https://excire.com/en/datenschutzerklaerung/) — Datenverarbeitung der Website, Aktivierungsanbieter und Kasse, geprüft am 28. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Immich-Rezension](/de/power-local-llm/immich-review) — eine selbst gehostete Fotobibliothek mit Handy-Backup und Smart Search.',
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine weitere selbst gehostete Fotobibliothek mit integrierten KI-Labels.',
          '[Ente-Photos-Rezension](/de/power-local-llm/ente-photos-review) — verschlüsselte Foto-Sicherung mit Gesichtserkennung und Suche in natürlicher Sprache auf dem Gerät.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-es.webp',
    title: 'Reseña de Excire Foto: gestor de fotos con IA local para Windows y Mac',
    seoTitle: 'Reseña de Excire Foto: gestor de fotos con IA local',
    intro:
      'Excire Foto es un gestor de fotos y vídeos de código cerrado para Windows y macOS cuya búsqueda con IA, búsqueda de personas, reconocimiento de texto y selección de imágenes se ejecutan en tu propio ordenador, según su fabricante alemán. Se vende como pago único y requiere una cuenta de Excire y un código de activación. Esta reseña recoge el sitio web, la tienda, la página de prueba, los artículos de soporte y la declaración de privacidad de Excire tal como se comprobaron el 28 de octubre de 2026; la versión actual es Excire Foto 2027, versión 5.0.2.',
    metaDescription:
      'Reseña de Excire Foto: gestor de fotos para Windows y Mac cuya búsqueda con IA y reconocimiento de texto se ejecutan en local, según su fabricante. Pago único.',
    twitterDescription:
      'Reseña de Excire Foto: un gestor de fotos de pago único para Windows y Mac cuya búsqueda con IA y selección se ejecutan en local, según su fabricante. Requisitos, activación, privacidad y por qué lleva un aviso de proyecto desactualizado.',
    audience:
      'Fotógrafos con Windows o Mac que quieren búsqueda con IA y selección de imágenes sin subir su biblioteca a un servicio en la nube, y que necesitan saber qué confirman las fuentes, qué implica la activación y si el producto sigue actualizándose.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Excire Foto',
    targetKeywords: [
      'reseña excire foto',
      'excire foto 2027',
      'gestor de fotos con ia local',
      'organizador de fotos con reconocimiento facial sin conexión',
      'software de selección de fotos con ia',
      'alternativa a lightroom búsqueda de fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**Aviso: los instaladores más recientes de Excire Foto 2027 (versión 5.0.2) son del 15 de julio de 2026 y Excire no publica registro de cambios, así que el producto lleva más de tres meses sin una actualización visible y puede estar abandonado: compruébalo antes de depender de él.** **Excire Foto es un gestor de fotos y vídeos de código cerrado para Windows 11 y macOS 12 o posterior que, según Excire, analiza tu biblioteca en local con búsqueda por IA, búsqueda de personas, reconocimiento de texto y selección de imágenes.** Es de pago único, tiene una prueba de 14 días y requiere una cuenta de Excire y un código de activación.',
    quickAnswerTop: {
      es: {
        question: '¿Excire Foto mantiene tus fotos en tu propio ordenador?',
        answer:
          'Según Excire, sí: su página de producto dice «Everything runs locally, your photos stay on your computer» y que no se envían datos a terceros. La activación requiere una cuenta de Excire y un código, compartir en la nube es una función opcional aparte, y Excire no indica si la app funciona sin conexión tras la activación. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Código cerrado y pago único sin suscripción; la página de la tienda no muestra precio y la publicación de lanzamiento de Excire indica un precio de lista de $249 (€229).',
          'Windows 11 (x86, 64 bits) y macOS 12 o posterior, Apple silicon e Intel; mínimo 8 GB de RAM, 16 GB recomendados.',
          'Funciones: búsqueda de texto libre, búsqueda de personas, reconocimiento de escenas y objetos, reconocimiento de texto, palabras clave automáticas, búsqueda de duplicados y selección de imágenes.',
          'Prueba de 14 días sin método de pago; una versión principal nueva es una actualización de pago con descuento.',
          'Los instaladores más recientes son del 15 de julio de 2026: se aplica el aviso de proyecto desactualizado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Excire Foto?', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto es una app de escritorio de pago y código cerrado para Windows y Mac que, según su fabricante, busca fotos por contenido, agrupa personas, lee texto en imágenes y puntúa tomas, todo en tu propio ordenador.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, indicas tus carpetas de fotos, dejas que las analice una vez y luego buscas escribiendo lo que aparece en la imagen; Excire dice que no se sube nada, aunque la activación requiere una cuenta de Excire.',
          },
        ],
        items: [
          'Mantenimiento: los instaladores de la versión 5.0.2 en excire.com se modificaron por última vez el 15 de julio de 2026 y no hay registro de cambios, por lo que se aplica un aviso de proyecto desactualizado.',
          'Fabricante: Pattern Recognition Company GmbH, en Lübeck (Alemania), que opera con el nombre Excire; el producto salió como Excire Foto 2027 el 16 de junio de 2026.',
          'Instalación: un instalador normal para Windows o macOS y después activación con cuenta de Excire y código de activación, o la prueba de 14 días.',
          'Coste: pago único; la publicación de lanzamiento de Excire indica $249 (€229) y las versiones principales son actualizaciones de pago con descuento.',
          'Alcance: gestión de fotos y vídeos con búsqueda por IA y selección de imágenes; no hay chat ni asistente de modelo de lenguaje.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aviso de proyecto desactualizado: los instaladores de la versión 5.0.2 son del 15 de julio de 2026 y Excire no publica notas de versión, así que la app lleva más de tres meses sin una actualización visible. Puede estar abandonada; comprueba que funciona en tu sistema operativo antes de comprar.',
          },
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la tienda, la página de prueba, los artículos de soporte y la declaración de privacidad de Excire, consultados el 28 de octubre de 2026. PromptQuorum no ha instalado Excire Foto, por lo que no se evalúan la calidad de la búsqueda, la velocidad ni la precisión.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: '¿Qué es Excire Foto?',
        content: [
          '**Excire Foto es un programa independiente de gestión de fotos y vídeos para Windows y macOS que añade búsqueda con IA y herramientas de selección a una biblioteca de fotos local.** Excire afirma que todo se ejecuta en tu ordenador y que el programa no envía datos a terceros. Excire Foto 2027 se anunció el 15 de junio de 2026 y está disponible desde el 16 de junio de 2026.',
          'El fabricante es Pattern Recognition Company GmbH, en Lübeck. Excire también vende Excire Search, un complemento aparte para Adobe Lightroom Classic, y una Excire Foto Office Edition para Windows 11 por suscripción; esta reseña trata el producto para consumidores Excire Foto 2027. La página de noticias de Excire muestra una entrada del premio TIPA World Award con fecha 17 de abril de 2026 y una del premio EISA con fecha 18 de septiembre de 2026; PromptQuorum no comprobó esos premios con los organismos que los conceden.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Excire Foto se instala con un instalador para Windows y macOS; después inicias sesión con una cuenta de Excire y lo activas con un código o empiezas la prueba de 14 días.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Página del producto', 'Cómo conseguirlo': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'Opción': 'Prueba gratuita', 'Cómo conseguirlo': '[Prueba de 14 días](https://excire.com/en/trial/), sin método de pago' },
          { 'Opción': 'Comprar', 'Cómo conseguirlo': '[Tienda de Excire](https://excire.com/en/shop/): pago único; la página no muestra precio' },
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'Instalador .exe para Windows 11, enlazado en el [artículo de descarga](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'Opción': 'Mac', 'Cómo conseguirlo': 'Descargas .dmg separadas para Apple silicon e Intel, en el mismo artículo de descarga' },
          { 'Opción': 'Declaración de privacidad', 'Cómo conseguirlo': '[Declaración de privacidad de Excire](https://excire.com/en/datenschutzerklaerung/): cubre el sitio web, no el comportamiento de la app' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'Ninguno: software propietario' },
        ],
        note: 'Versión revisada: Excire Foto 2027, versión 5.0.2. La publicación de lanzamiento indica un precio regular de $249 (€229) y un precio de lanzamiento temporal de $219 (€199) para clientes nuevos; la página de la tienda no muestra precio, así que confirma el precio actual al pagar. Excire Foto 2025 y versiones anteriores siguen en la tienda.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Excire indica Windows 11 o macOS 12 o posterior, un procesador de 64 bits con AVX y al menos 8 GB de RAM, con 16 GB o más recomendados.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'macOS 12 o posterior, o Windows 11 (x86, 64 bits); según la tienda, no está optimizado para Windows en Snapdragon/ARM' },
          { 'Elemento': 'Procesadores Mac', 'Qué dicen las fuentes': 'Descargas separadas para Mac con Apple silicon e Intel' },
          { 'Elemento': 'Procesador', 'Qué dicen las fuentes': 'CPU multinúcleo de 64 bits con AVX; no se admiten AMD Phenom II/Athlon II ni Intel Core 2 Duo antiguos' },
          { 'Elemento': 'Memoria', 'Qué dicen las fuentes': 'Mínimo 8 GB, recomendado 16 GB o más' },
          { 'Elemento': 'Espacio en disco', 'Qué dicen las fuentes': 'Unos 900 MB por cada 100.000 fotos para las bases de datos y unos 25 GB para vistas previas en máxima calidad con RAW' },
          { 'Elemento': 'GPU', 'Qué dicen las fuentes': 'No se indica ningún requisito de GPU' },
          { 'Elemento': 'HEIC en Windows', 'Qué dicen las fuentes': 'Los archivos HEIC necesitan las extensiones HEIF y HEVC de Microsoft para mostrarse' },
        ],
        note: 'Estos mínimos proceden de la tienda y de la página del producto de Excire; PromptQuorum no midió el tiempo de análisis ni el uso de memoria en ningún equipo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen las páginas de producto, prueba y descarga de Excire; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Descarga el instalador',
            whyItMatters: 'Toma el .exe de Windows o el .dmg para Apple silicon o Intel del artículo de descarga de Excire y luego ejecuta el instalador o monta la imagen de disco.',
          },
          {
            title: 'Crea una cuenta y activa',
            whyItMatters: 'Excire dice que hace falta una cuenta de usuario de Excire y que el software debe activarse una vez con un código de activación; la prueba dura 14 días sin método de pago.',
          },
          {
            title: 'Haz una copia y añade tus carpetas',
            whyItMatters: 'Excire aconseja copiar antes una base de datos existente, porque una base de datos migrada a la versión 5.x no puede abrirse con versiones anteriores.',
          },
          {
            title: 'Deja que termine el análisis',
            whyItMatters: 'Las fotos deben analizarse antes de que funcione la búsqueda por contenido; según Excire, las fotos existentes deben reanalizarse para usar la nueva búsqueda de texto.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo siguiente procede de la página de producto, la publicación de lanzamiento o la comparación de versiones de Excire; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Búsqueda.** Búsqueda de contenido en texto libre, búsqueda de imágenes similares, búsqueda de personas, reconocimiento de escenas y objetos y una barra combinada de búsqueda y filtros.',
          '**Reconocimiento de texto.** Excire Foto 2027 lee el texto de las imágenes, como carteles y documentos, y resalta las coincidencias en la vista previa.',
          '**Palabras clave y duplicados.** Palabras clave automáticas para fotos y vídeos y una búsqueda de duplicados.',
          '**Selección.** Comprobación de nitidez, una selección inteligente, una vista de comparación, una cuadrícula 3×3 y focus peaking.',
          '**Biblioteca.** Colecciones, valoraciones, etiquetas de color, banderas, edición de metadatos, un mapa mundial, un gráfico de línea de tiempo y compatibilidad con RAW.',
          '**Compartir.** Colecciones compartidas mediante Dropbox, Google Drive, Microsoft OneDrive y Nextcloud.',
        ],
        note: 'La comparación de versiones de Excire indica que el reconocimiento de texto, la vista de mapa y el gráfico de línea de tiempo son novedades de Excire Foto 2027 y no figuran en las versiones 2025 y 2024.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**La IA trabaja sobre imágenes: reconoce contenido, rostros y texto en tus fotos para que puedas buscarlas y seleccionarlas; no se describe ningún asistente de chat ni modelo de lenguaje.**',
        ],
        items: [
          '**Búsqueda por contenido.** Escribes lo que aparece en la imagen y el programa encuentra las fotos que coinciden; Excire no indica qué modelos hay detrás.',
          '**Personas.** Se detectan y agrupan los rostros para que puedas buscar y nombrar personas y escribir nombres de personas en los archivos al guardar los metadatos.',
          '**Texto en imágenes.** Novedad de 2027; las fotos existentes deben analizarse de nuevo antes de poder buscar su texto.',
          '**Dónde se ejecuta.** Excire dice que todo el procesamiento ocurre en local en tu ordenador, sin dependencia de la nube, y que las fotos no se suben para su análisis.',
        ],
        note: 'Son afirmaciones de la propia Excire. PromptQuorum no probó la relevancia de la búsqueda, la precisión de la agrupación de rostros, el reconocimiento de texto en otros idiomas ni la velocidad.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La página de producto de Excire dice «Everything runs locally, your photos stay on your computer» y «Excire Foto does not send any data to external parties».** En las preguntas frecuentes del producto, Excire responde «No» a si las fotos se suben para su análisis y dice que no usa una solución en la nube.',
          'Según las fuentes, tres cosas salen al exterior. La activación requiere una cuenta de usuario de Excire y un código de activación; la declaración de privacidad del sitio web dice que los códigos los genera el proveedor 10Duke y que el registro almacena nombre, correo electrónico, contraseña, un identificador de hardware, el nombre del producto y una marca de tiempo. El pago se procesa con FastSpring. Compartir mediante Dropbox, Google Drive, OneDrive o Nextcloud envía las fotos compartidas a esos servicios cuando lo usas. La declaración de privacidad cubre el sitio web; no describe comprobaciones de actualizaciones, informes de fallos ni el comportamiento de red del programa tras la activación.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. Excire no indica si el programa funciona totalmente sin conexión tras la activación, y PromptQuorum no ha inspeccionado el tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Fotógrafos con grandes bibliotecas locales** que quieren buscar por contenido, personas y texto sin subir nada a un servicio en la nube.',
          '**Personas que evitan las suscripciones** y prefieren un pago único, aceptando las actualizaciones principales de pago.',
          '**Usuarios que descartan muchas tomas parecidas** y quieren comprobación de nitidez y una vista de comparación.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Mantenimiento.** Los instaladores de la 5.0.2 son del 15 de julio de 2026 y no hay registro de cambios, así que no está claro si hay más actualizaciones previstas.',
          '**Calidad de la IA.** No se probaron la relevancia de la búsqueda, la agrupación de rostros, el reconocimiento de texto ni la velocidad.',
          '**Uso sin conexión.** Según el [artículo de activación](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) de Excire, el código se introduce una sola vez y después basta con iniciar sesión en tu cuenta de Excire (y mantenerla iniciada) para activar el software; no dice si eso funciona sin conexión a internet.',
          '**Precio.** La página de la tienda no muestra precio; las cifras proceden de la publicación de lanzamiento de Excire y pueden haber cambiado.',
          '**Idiomas y GPU.** Los idiomas de la interfaz y cualquier beneficio de la GPU no figuran en las fuentes leídas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio tiene tres herramientas de biblioteca de fotos con reseña; las tres indican una licencia AGPL-3.0, a diferencia de Excire Foto, de código cerrado.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Immich](/es/power-local-llm/immich-review)', 'Plataformas': 'Servidor (Docker), apps móviles, navegador', 'Precio / licencia': 'Gratis / AGPL-3.0', 'Diferencia clave': 'Servidor autoalojado con copia desde el móvil; se instala con Docker y es de código abierto' },
          { 'App': '[PhotoPrism](/es/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Precio / licencia': 'Community gratis / AGPL-3.0', 'Diferencia clave': 'Aplicación web autoalojada con etiquetas de IA integradas, no es un programa de escritorio' },
          { 'App': '[Ente Photos](/es/power-local-llm/ente-photos-review)', 'Plataformas': 'iOS, Android, escritorio, web', 'Precio / licencia': '10 GB gratis, planes de pago / AGPL-3.0', 'Diferencia clave': 'Almacenamiento cifrado en la nube con IA en el dispositivo; no es un gestor de biblioteca local' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Excire Foto es un LLM local?',
            a: 'No. Las fuentes describen reconocimiento de imágenes, rostros y texto para buscar fotos y no mencionan ninguna función de chat ni modelo de lenguaje.',
          },
          {
            q: '¿Excire Foto funciona sin conexión?',
            a: 'Excire dice que el procesamiento se ejecuta en local en tu ordenador, pero también que hacen falta una cuenta de Excire y un código de activación para activar el software; no indica si funciona sin internet tras la activación.',
          },
          {
            q: '¿Cuánto cuesta Excire Foto?',
            a: 'La página de la tienda no muestra precio. La publicación de lanzamiento de Excire de junio de 2026 indica un precio regular de $249 (€229) y un precio de lanzamiento temporal de $219 (€199); la prueba es gratuita durante 14 días.',
          },
          {
            q: '¿Tengo que pagar las actualizaciones?',
            a: 'Según Excire, las correcciones de errores y las mejoras menores son gratuitas, mientras que las actualizaciones con mejoras importantes son de pago, con un descuento sustancial para clientes existentes.',
          },
          {
            q: '¿Puedo probarlo antes de comprar?',
            a: 'Sí: Excire ofrece una prueba de 14 días para Windows o Mac y dice que no hace falta método de pago. La página de prueba no indica límites de funciones.',
          },
          {
            q: '¿El proyecto sigue mantenido?',
            a: 'No está claro. Los instaladores de la versión 5.0.2 se modificaron por última vez el 15 de julio de 2026 y Excire no publica registro de cambios; considéralo posiblemente abandonado y consulta el sitio de soporte antes de comprar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Excire Foto ofrece, según su fabricante, búsqueda con IA, búsqueda de personas, reconocimiento de texto y selección de imágenes en tu propio ordenador, con pago único y 14 días de prueba. En contra: es de código cerrado, exige una cuenta de Excire y un código de activación, no indica su comportamiento sin conexión tras la activación, las versiones principales son actualizaciones de pago, la tienda no muestra precio y los instaladores más recientes son del 15 de julio de 2026, lo que activa un aviso de proyecto desactualizado. Encaja con fotógrafos de Windows 11 y macOS que valoran una herramienta local sin suscripción y que probarán antes la versión de prueba; quien necesite una solución mantenida, de código abierto o autoalojada debería buscar en otro sitio.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de producto de Excire Foto](https://excire.com/en/excire-foto/) — funciones, afirmaciones sobre procesamiento local, activación y política de actualizaciones, consultada el 28 de octubre de 2026.',
          '[Tienda de Excire](https://excire.com/en/shop/) — requisitos del sistema y modelos de compra, consultada el 28 de octubre de 2026.',
          '[Página de prueba de Excire](https://excire.com/en/trial/) — condiciones de la prueba de 14 días, consultada el 28 de octubre de 2026.',
          '[Publicación de lanzamiento de Excire Foto 2027](https://excire.com/en/excire-foto-2027-is-here/) — fecha de lanzamiento, novedades y precio de lista, publicada el 15 de junio de 2026.',
          '[Noticias de Excire](https://excire.com/en/news/) — entradas sobre premios, consultadas el 28 de octubre de 2026.',
          '[Artículo de descarga del soporte de Excire](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — versión 5.0.2 e instaladores, consultado el 28 de octubre de 2026.',
          '[Declaración de privacidad de Excire](https://excire.com/en/datenschutzerklaerung/) — tratamiento de datos del sitio web, proveedor de activación y pago, consultada el 28 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Immich](/es/power-local-llm/immich-review) — una biblioteca de fotos autoalojada con copia desde el móvil y búsqueda inteligente.',
          '[Reseña de PhotoPrism](/es/power-local-llm/photoprism-review) — otra biblioteca de fotos autoalojada con etiquetas de IA integradas.',
          '[Reseña de Ente Photos](/es/power-local-llm/ente-photos-review) — copia de fotos cifrada con búsqueda de rostros y en lenguaje natural en el dispositivo.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-fr.webp',
    title: 'Test d’Excire Foto : gestionnaire de photos IA local pour Windows et Mac',
    seoTitle: 'Test d’Excire Foto : gestionnaire de photos IA local',
    intro:
      'Excire Foto est un gestionnaire de photos et de vidéos à code source fermé pour Windows et macOS, dont la recherche par IA, la recherche de personnes, la reconnaissance de texte et le tri des images s’exécutent sur votre propre ordinateur, selon son éditeur allemand. Il est vendu en achat unique et exige un compte Excire et un code d’activation. Ce test reflète le site web, la boutique, la page d’essai, les articles d’assistance et la déclaration de confidentialité d’Excire tels que vérifiés le 28 octobre 2026 ; la version actuelle est Excire Foto 2027, version 5.0.2.',
    metaDescription:
      'Test d’Excire Foto : gestionnaire de photos pour Windows et Mac dont la recherche IA et la reconnaissance de texte sont locales, selon l’éditeur. Achat unique.',
    twitterDescription:
      'Test d’Excire Foto : un gestionnaire de photos en achat unique pour Windows et Mac dont la recherche IA et le tri s’exécutent en local, selon son éditeur. Prérequis, activation, confidentialité et avertissement de projet inactif.',
    audience:
      'Photographes sous Windows ou Mac qui veulent une recherche IA et un tri des images sans envoyer leur photothèque vers un service cloud, et qui doivent savoir ce que confirment les sources, ce qu’implique l’activation et si le produit est encore mis à jour.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Excire Foto',
    targetKeywords: [
      'test excire foto',
      'excire foto 2027',
      'gestionnaire de photos ia local',
      'organiseur de photos reconnaissance faciale hors ligne',
      'logiciel de tri de photos par ia',
      'alternative à lightroom recherche de photos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**Avertissement : les installateurs les plus récents d’Excire Foto 2027 (version 5.0.2) datent du 15 juillet 2026 et Excire ne publie pas de journal des modifications ; le produit n’a donc montré aucune mise à jour depuis plus de trois mois et n’est peut-être plus maintenu — vérifiez avant de vous y fier.** **Excire Foto est un gestionnaire de photos et de vidéos à code source fermé pour Windows 11 et macOS 12 ou ultérieur qui, selon Excire, analyse votre photothèque en local avec recherche IA, recherche de personnes, reconnaissance de texte et tri des images.** Il s’achète une seule fois, propose un essai de 14 jours et exige un compte Excire et un code d’activation.',
    quickAnswerTop: {
      fr: {
        question: 'Excire Foto garde-t-il vos photos sur votre propre ordinateur ?',
        answer:
          'Selon Excire, oui : sa page produit indique « Everything runs locally, your photos stay on your computer » et qu’aucune donnée n’est envoyée à des tiers. L’activation exige un compte Excire et un code, le partage cloud est une fonction facultative distincte, et Excire ne dit pas si l’application fonctionne hors ligne après l’activation. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Code fermé et achat unique sans abonnement ; la page de la boutique n’affiche pas de prix et l’annonce de lancement d’Excire indique un prix catalogue de 249 $ (229 €).',
          'Windows 11 (x86, 64 bits) et macOS 12 ou ultérieur, Apple silicon et Intel ; 8 Go de RAM minimum, 16 Go recommandés.',
          'Fonctions : recherche en texte libre, recherche de personnes, reconnaissance de scènes et d’objets, reconnaissance de texte, mots-clés automatiques, recherche de doublons et tri des images.',
          'Essai de 14 jours sans moyen de paiement ; une nouvelle version majeure est une mise à niveau payante avec remise.',
          'Les installateurs les plus récents datent du 15 juillet 2026 : l’avertissement de projet inactif s’applique.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’Excire Foto ?', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto est une application de bureau payante à code fermé pour Windows et Mac qui, selon son éditeur, recherche les photos par contenu, regroupe les personnes, lit le texte des images et note les prises de vue, le tout sur votre propre ordinateur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez, indiquez vos dossiers de photos, la laissez les analyser une fois, puis cherchez en tapant ce que montre l’image ; Excire affirme que rien n’est envoyé, mais l’activation exige un compte Excire.',
          },
        ],
        items: [
          'Maintenance : les installateurs de la version 5.0.2 sur excire.com ont été modifiés pour la dernière fois le 15 juillet 2026 et aucun journal des modifications n’existe ; un avertissement de projet inactif s’applique donc.',
          'Éditeur : Pattern Recognition Company GmbH, à Lübeck (Allemagne), qui exerce sous le nom Excire ; le produit est sorti sous le nom d’Excire Foto 2027 le 16 juin 2026.',
          'Installation : un installateur classique pour Windows ou macOS, puis activation avec un compte Excire et un code d’activation, ou l’essai de 14 jours.',
          'Coût : achat unique ; l’annonce de lancement d’Excire indique 249 $ (229 €) et les versions majeures sont des mises à niveau payantes avec remise.',
          'Périmètre : gestion de photos et de vidéos avec recherche IA et tri des images ; il n’y a ni chat ni assistant à modèle de langage.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Avertissement de projet inactif : les installateurs de la version 5.0.2 datent du 15 juillet 2026 et Excire ne publie pas de notes de version ; l’application n’a donc montré aucune mise à jour depuis plus de trois mois. Elle n’est peut-être plus maintenue ; vérifiez qu’elle fonctionne sur votre système d’exploitation avant d’acheter.',
          },
          {
            type: 'note',
            text: 'Ce test repose sur le site web, la boutique, la page d’essai, les articles d’assistance et la déclaration de confidentialité d’Excire, consultés le 28 octobre 2026. PromptQuorum n’a pas installé Excire Foto ; la qualité de la recherche, la vitesse et la précision ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'Qu’est-ce qu’Excire Foto ?',
        content: [
          '**Excire Foto est un logiciel autonome de gestion de photos et de vidéos pour Windows et macOS qui ajoute recherche IA et outils de sélection à une photothèque locale.** Excire affirme que tout s’exécute sur votre ordinateur et que le logiciel n’envoie aucune donnée à des tiers. Excire Foto 2027 a été annoncé le 15 juin 2026 et est disponible depuis le 16 juin 2026.',
          'L’éditeur est Pattern Recognition Company GmbH, à Lübeck. Excire vend aussi Excire Search, un module distinct pour Adobe Lightroom Classic, et une Excire Foto Office Edition pour Windows 11 sur abonnement ; ce test porte sur le produit grand public Excire Foto 2027. La page d’actualités d’Excire mentionne une entrée du prix TIPA World Award datée du 17 avril 2026 et une entrée du prix EISA datée du 18 septembre 2026 ; PromptQuorum n’a pas vérifié ces distinctions auprès des organismes qui les décernent.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Excire Foto s’installe avec un installateur pour Windows et macOS ; vous vous connectez ensuite avec un compte Excire et l’activez avec un code, ou vous lancez l’essai de 14 jours.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Page produit', 'Comment l’obtenir': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'Option': 'Essai gratuit', 'Comment l’obtenir': '[Essai de 14 jours](https://excire.com/en/trial/), sans moyen de paiement' },
          { 'Option': 'Acheter', 'Comment l’obtenir': '[Boutique Excire](https://excire.com/en/shop/) : achat unique ; la page n’affiche pas de prix' },
          { 'Option': 'Windows', 'Comment l’obtenir': 'Installateur .exe pour Windows 11, lié dans l’[article de téléchargement](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'Option': 'Mac', 'Comment l’obtenir': 'Téléchargements .dmg distincts pour Apple silicon et Intel, dans le même article' },
          { 'Option': 'Confidentialité', 'Comment l’obtenir': '[Déclaration de confidentialité d’Excire](https://excire.com/en/datenschutzerklaerung/) : elle couvre le site web, pas le comportement de l’application' },
          { 'Option': 'Code source', 'Comment l’obtenir': 'Aucun : logiciel propriétaire' },
        ],
        note: 'Version testée : Excire Foto 2027, version 5.0.2. L’annonce de lancement indique un prix normal de 249 $ (229 €) et un prix de lancement temporaire de 219 $ (199 €) pour les nouveaux clients ; la page de la boutique n’affiche aucun prix, confirmez donc le prix actuel à la caisse. Excire Foto 2025 et les versions plus anciennes figurent toujours dans la boutique.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Excire indique Windows 11 ou macOS 12 ou ultérieur, un processeur 64 bits avec AVX et au moins 8 Go de RAM, 16 Go ou plus étant recommandés.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système d’exploitation', 'Ce que disent les sources': 'macOS 12 ou ultérieur, ou Windows 11 (x86, 64 bits) ; selon la boutique, non optimisé pour Windows sur Snapdragon/ARM' },
          { 'Élément': 'Processeurs Mac', 'Ce que disent les sources': 'Téléchargements distincts pour les Mac Apple silicon et Intel' },
          { 'Élément': 'Processeur', 'Ce que disent les sources': 'CPU 64 bits multicœur avec AVX ; les anciens AMD Phenom II/Athlon II et Intel Core 2 Duo ne sont pas pris en charge' },
          { 'Élément': 'Mémoire', 'Ce que disent les sources': '8 Go minimum, 16 Go ou plus recommandés' },
          { 'Élément': 'Espace disque', 'Ce que disent les sources': 'Environ 900 Mo pour 100 000 photos pour les bases de données et environ 25 Go pour les aperçus en qualité maximale avec RAW' },
          { 'Élément': 'GPU', 'Ce que disent les sources': 'Aucune exigence de GPU n’est indiquée' },
          { 'Élément': 'HEIC sous Windows', 'Ce que disent les sources': 'Les fichiers HEIC exigent les extensions Microsoft HEIF et HEVC pour s’afficher' },
        ],
        note: 'Ces minimums proviennent de la boutique et de la page produit d’Excire ; PromptQuorum n’a mesuré ni le temps d’analyse ni l’utilisation de la mémoire sur aucun matériel.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent les pages produit, essai et téléchargement d’Excire ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger l’installateur',
            whyItMatters: 'Prenez le .exe Windows ou le .dmg pour Apple silicon ou Intel dans l’article de téléchargement d’Excire, puis lancez l’installateur ou montez l’image disque.',
          },
          {
            title: 'Créer un compte et activer',
            whyItMatters: 'Excire indique qu’un compte utilisateur Excire est requis et que le logiciel doit être activé une fois avec un code d’activation ; l’essai dure 14 jours sans moyen de paiement.',
          },
          {
            title: 'Sauvegarder, puis ajouter vos dossiers',
            whyItMatters: 'Excire conseille de sauvegarder d’abord une base de données existante, car une base migrée vers la version 5.x ne peut pas être ouverte par les versions antérieures.',
          },
          {
            title: 'Laisser l’analyse se terminer',
            whyItMatters: 'Les photos doivent être analysées avant que la recherche par contenu fonctionne ; selon Excire, les photos existantes doivent être analysées à nouveau pour utiliser la nouvelle recherche de texte.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient de la page produit, de l’annonce de lancement ou du comparatif des versions d’Excire ; PromptQuorum n’en a testé aucun point.**',
        ],
        items: [
          '**Recherche.** Recherche de contenu en texte libre, recherche d’images similaires, recherche de personnes, reconnaissance de scènes et d’objets et barre combinée de recherche et de filtres.',
          '**Reconnaissance de texte.** Excire Foto 2027 lit le texte des images, par exemple sur des panneaux et des documents, et surligne les résultats dans l’aperçu.',
          '**Mots-clés et doublons.** Mots-clés automatiques pour les photos et les vidéos, et recherche de doublons.',
          '**Tri des images.** Contrôle de la netteté, sélection intelligente, vue de comparaison, grille 3×3 et focus peaking.',
          '**Photothèque.** Collections, notes, étiquettes de couleur, drapeaux, édition des métadonnées, carte du monde, graphique chronologique et prise en charge du RAW.',
          '**Partage.** Partage de collections via Dropbox, Google Drive, Microsoft OneDrive et Nextcloud.',
        ],
        note: 'Le comparatif des versions d’Excire présente la reconnaissance de texte, la vue carte et le graphique chronologique comme nouveautés d’Excire Foto 2027, absentes des versions 2025 et 2024.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**L’IA travaille sur les images : elle reconnaît contenus, visages et texte dans vos photos pour que vous puissiez les rechercher et les sélectionner ; aucun assistant de chat ni modèle de langage n’est décrit.**',
        ],
        items: [
          '**Recherche par contenu.** Vous tapez ce que montre l’image et le logiciel trouve les photos correspondantes ; Excire ne nomme pas les modèles utilisés.',
          '**Personnes.** Les visages sont détectés et regroupés pour que vous puissiez rechercher et nommer des personnes, et écrire leurs noms dans les fichiers lors de l’enregistrement des métadonnées.',
          '**Texte dans les images.** Nouveauté de 2027 ; les photos existantes doivent être analysées à nouveau avant que leur texte soit consultable.',
          '**Où cela s’exécute.** Excire affirme que tout le traitement a lieu en local sur votre ordinateur, sans dépendance au cloud, et que les photos ne sont pas envoyées pour analyse.',
        ],
        note: 'Il s’agit des déclarations d’Excire elle-même. PromptQuorum n’a testé ni la pertinence de la recherche, ni la précision du regroupement des visages, ni la reconnaissance de texte dans d’autres langues, ni la vitesse.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La page produit d’Excire indique « Everything runs locally, your photos stay on your computer » et « Excire Foto does not send any data to external parties ».** Dans la FAQ du produit, Excire répond « No » à la question de savoir si les photos sont envoyées pour analyse et dit ne pas utiliser de solution cloud.',
          'Selon les sources, trois éléments sortent de l’ordinateur. L’activation exige un compte utilisateur Excire et un code d’activation ; la déclaration de confidentialité du site web indique que les codes sont générés par le prestataire 10Duke et que l’inscription enregistre le nom, l’adresse e-mail, le mot de passe, un identifiant matériel, le nom du produit et un horodatage. Le paiement passe par FastSpring. Le partage via Dropbox, Google Drive, OneDrive ou Nextcloud envoie les photos partagées à ces services quand vous l’utilisez. La déclaration de confidentialité couvre le site web ; elle ne décrit ni les vérifications de mises à jour, ni les rapports de plantage, ni le comportement réseau du logiciel après l’activation.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. Excire ne dit pas si le logiciel fonctionne entièrement hors ligne après l’activation, et PromptQuorum n’a pas inspecté le trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les photographes avec de grandes photothèques locales** qui veulent chercher par contenu, personnes et texte sans rien envoyer à un service cloud.',
          '**Les personnes qui évitent les abonnements** et préfèrent un achat unique, en acceptant des mises à niveau majeures payantes.',
          '**Les utilisateurs qui trient beaucoup de prises de vue similaires** et veulent un contrôle de netteté et une vue de comparaison.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Maintenance.** Les installateurs de la 5.0.2 datent du 15 juillet 2026 et aucun journal des modifications n’existe ; on ne sait pas si d’autres mises à jour sont prévues.',
          '**Qualité de l’IA.** La pertinence de la recherche, le regroupement des visages, la reconnaissance de texte et la vitesse n’ont pas été testés.',
          '**Usage hors ligne.** Selon l’[article d’activation](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) d’Excire, le code n’est saisi qu’une fois, puis il suffit de se connecter à votre compte Excire (et d’y rester connecté) pour activer le logiciel ; Excire ne dit pas si cela fonctionne sans connexion internet.',
          '**Prix.** La page de la boutique n’affiche aucun prix ; les chiffres proviennent de l’annonce de lancement d’Excire et ont pu changer.',
          '**Langues et GPU.** Les langues de l’interface et tout avantage lié au GPU ne figurent pas dans les sources lues.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'L’annuaire compte trois outils de photothèque avec test ; tous trois indiquent une licence AGPL-3.0, contrairement à Excire Foto, à code fermé.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Immich](/fr/power-local-llm/immich-review)', 'Plateformes': 'Serveur (Docker), applis mobiles, navigateur', 'Prix / licence': 'Gratuit / AGPL-3.0', 'Différence clé': 'Serveur auto-hébergé avec sauvegarde depuis le téléphone ; installation via Docker, open source' },
          { 'Application': '[PhotoPrism](/fr/power-local-llm/photoprism-review)', 'Plateformes': 'Serveur (Docker), navigateur', 'Prix / licence': 'Community gratuite / AGPL-3.0', 'Différence clé': 'Application web auto-hébergée avec étiquettes IA intégrées, pas un logiciel de bureau' },
          { 'Application': '[Ente Photos](/fr/power-local-llm/ente-photos-review)', 'Plateformes': 'iOS, Android, bureau, web', 'Prix / licence': '10 Go gratuits, offres payantes / AGPL-3.0', 'Différence clé': 'Stockage cloud chiffré avec IA sur l’appareil ; pas de gestionnaire de photothèque local' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Excire Foto est-il un LLM local ?',
            a: 'Non. Les sources décrivent la reconnaissance d’images, de visages et de texte pour la recherche de photos et ne mentionnent ni fonction de chat ni modèle de langage.',
          },
          {
            q: 'Excire Foto fonctionne-t-il hors ligne ?',
            a: 'Excire dit que le traitement s’exécute en local sur votre ordinateur, mais aussi qu’un compte Excire et un code d’activation sont requis pour activer le logiciel ; le fonctionnement sans internet après l’activation n’est pas précisé.',
          },
          {
            q: 'Combien coûte Excire Foto ?',
            a: 'La page de la boutique n’affiche aucun prix. L’annonce de lancement d’Excire de juin 2026 indique un prix normal de 249 $ (229 €) et un prix de lancement temporaire de 219 $ (199 €) ; l’essai est gratuit pendant 14 jours.',
          },
          {
            q: 'Dois-je payer les mises à jour ?',
            a: 'Selon Excire, les corrections de bogues et les petites améliorations sont gratuites, tandis que les mises à niveau apportant des améliorations majeures sont payantes, avec une remise importante pour les clients existants.',
          },
          {
            q: 'Puis-je l’essayer avant d’acheter ?',
            a: 'Oui : Excire propose un essai de 14 jours pour Windows ou Mac et indique qu’aucun moyen de paiement n’est requis. La page d’essai ne précise pas les limites de fonctions.',
          },
          {
            q: 'Le projet est-il encore maintenu ?',
            a: 'Ce n’est pas clair. Les installateurs de la version 5.0.2 ont été modifiés pour la dernière fois le 15 juillet 2026 et Excire ne publie pas de journal des modifications ; considérez-le comme peut-être non maintenu et consultez le site d’assistance avant d’acheter.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Excire Foto propose, selon son éditeur, recherche IA, recherche de personnes, reconnaissance de texte et tri des images sur votre propre ordinateur, en achat unique avec 14 jours d’essai. En face : code fermé, compte Excire et code d’activation obligatoires, fonctionnement hors ligne après activation non précisé, versions majeures payantes, aucun prix sur la page de la boutique, et des installateurs récents datant du 15 juillet 2026, ce qui déclenche un avertissement de projet inactif. Il convient aux photographes sous Windows 11 et macOS qui apprécient un outil local sans abonnement et qui commenceront par l’essai ; qui veut une solution maintenue, open source ou auto-hébergée doit chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page produit d’Excire Foto](https://excire.com/en/excire-foto/) — fonctions, déclarations sur le traitement local, activation et politique de mises à niveau, consultée le 28 octobre 2026.',
          '[Boutique Excire](https://excire.com/en/shop/) — configuration requise et modèles d’achat, consultée le 28 octobre 2026.',
          '[Page d’essai d’Excire](https://excire.com/en/trial/) — conditions de l’essai de 14 jours, consultée le 28 octobre 2026.',
          '[Annonce de lancement d’Excire Foto 2027](https://excire.com/en/excire-foto-2027-is-here/) — date de sortie, nouveautés et prix catalogue, publiée le 15 juin 2026.',
          '[Actualités d’Excire](https://excire.com/en/news/) — entrées sur les distinctions, consultées le 28 octobre 2026.',
          '[Article de téléchargement de l’assistance Excire](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — version 5.0.2 et installateurs, consulté le 28 octobre 2026.',
          '[Déclaration de confidentialité d’Excire](https://excire.com/en/datenschutzerklaerung/) — traitement des données du site web, prestataire d’activation et paiement, consultée le 28 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une photothèque auto-hébergée avec sauvegarde depuis le téléphone et recherche intelligente.',
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une autre photothèque auto-hébergée avec étiquettes IA intégrées.',
          '[Test d’Ente Photos](/fr/power-local-llm/ente-photos-review) — sauvegarde de photos chiffrée avec recherche de visages et en langage naturel sur l’appareil.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-ja.webp',
    title: 'Excire Fotoレビュー：WindowsとMac向けのローカルAI写真管理ソフト',
    seoTitle: 'Excire Fotoレビュー：ローカルAI写真管理ソフト（Win/Mac）',
    intro:
      'Excire Fotoは、WindowsとmacOS向けのクローズドソースの写真・動画管理ソフトで、AI検索、人物検索、文字認識、ベストショット選別は、ドイツの開発元によると自分のコンピューター上で動作します。買い切り型で販売されており、Excireアカウントとアクティベーションコードが必要です。このレビューは、2026年10月28日に確認したExcireのウェブサイト、ショップ、試用ページ、サポート記事、プライバシーに関する声明を反映しています。現行版はExcire Foto 2027、バージョン5.0.2です。',
    metaDescription:
      'Excire Fotoレビュー：AI検索と文字認識がローカルで動作するとされる、Windows/Mac向けの写真管理ソフト。買い切り型、14日間の試用あり。',
    twitterDescription:
      'Excire Fotoレビュー：AI検索と選別がローカルで動作するとされる、Windows/Mac向けの買い切り型写真管理ソフト。動作要件、アクティベーション、プライバシー、更新停止の警告について。',
    audience:
      'ライブラリをクラウドにアップロードせずにAI検索や選別を使いたいWindows/Macの写真家のうち、情報源が確認している点、アクティベーションの内容、製品がまだ更新されているかを知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Excire Foto レビュー',
    targetKeywords: [
      'excire foto レビュー',
      'excire foto 2027',
      'ローカル ai 写真管理',
      '顔認識 写真整理 オフライン',
      'ai 写真 選別 ソフト',
      'lightroom 代替 写真検索',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**警告：Excire Foto 2027（バージョン5.0.2）の最新インストーラーは2026年7月15日付で、Excireは変更履歴を公開していません。3か月以上更新が確認できず、開発が止まっている可能性があります。頼る前に確認してください。** **Excire Fotoは、Windows 11とmacOS 12以降向けのクローズドソースの写真・動画管理ソフトで、Excireによると、AI検索、人物検索、文字認識、ベストショット選別でライブラリをローカルに解析します。** 買い切り型で14日間の試用があり、Excireアカウントとアクティベーションコードが必要です。',
    quickAnswerTop: {
      ja: {
        question: 'Excire Fotoは写真を自分のコンピューターの中にとどめますか？',
        answer:
          'Excireによれば、はい。製品ページには「Everything runs locally, your photos stay on your computer」とあり、第三者にデータを送らないとされています。アクティベーションにはExcireアカウントとコードが必要で、クラウド共有は別の任意機能です。アクティベーション後にオフラインで動くかどうかは、Excireは述べていません。PromptQuorumはネットワーク通信を検査していません。',
        bullets: [
          'クローズドソースの買い切り型でサブスクリプションなし。ショップページに価格表示はなく、Excireの発売告知には定価249ドルとあります。',
          'Windows 11（x86、64ビット）とmacOS 12以降（Apple siliconとIntel）。メモリは最低8GB、推奨16GBです。',
          '機能：自由文検索、人物検索、シーン・物体認識、文字認識、自動キーワード付け、重複検索、ベストショット選別。',
          '支払い方法不要の14日間試用。新しいメジャーバージョンは割引付きの有料アップグレードです。',
          '最新インストーラーは2026年7月15日付のため、更新停止の警告が当てはまります。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Excire Fotoとは', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Fotoは、WindowsとMac向けの有料クローズドソースのデスクトップアプリで、開発元によると、写真を内容で検索し、人物をまとめ、画像内の文字を読み取り、写真を評価する処理をすべて自分のコンピューター上で行います。',
          },
          {
            type: 'plain-terms',
            text: 'インストールして写真フォルダーを指定し、一度解析させたあと、写っているものを入力して探します。Excireはアップロードしないとしていますが、アクティベーションにはExcireアカウントが必要です。',
          },
        ],
        items: [
          'メンテナンス：excire.com上のバージョン5.0.2のインストーラーは2026年7月15日に最後に更新され、変更履歴はないため、更新停止の警告が当てはまります。',
          '開発元：ドイツ・リューベックのPattern Recognition Company GmbH（Excireの名称で事業展開）。製品はExcire Foto 2027として2026年6月16日に発売されました。',
          '導入：WindowsまたはmacOS向けの通常のインストーラーで、そのあとExcireアカウントとアクティベーションコードで有効化するか、14日間の試用を使います。',
          '費用：買い切り型。Excireの発売告知には249ドルとあり、メジャーバージョンは割引付きの有料アップグレードです。',
          '範囲：AI検索と選別を備えた写真・動画管理ソフトで、チャットや言語モデルのアシスタントはありません。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '更新停止の警告：バージョン5.0.2のインストーラーは2026年7月15日付で、Excireはリリースノートを公開していないため、3か月以上更新が確認できません。開発が止まっている可能性があります。購入前にお使いのOSで動作するか確認してください。',
          },
          {
            type: 'note',
            text: 'このレビューは、2026年10月28日に確認したExcireのウェブサイト、ショップ、試用ページ、サポート記事、プライバシーに関する声明に基づいています。PromptQuorumはExcire Fotoをインストールしていないため、検索品質、速度、精度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'Excire Fotoとは',
        content: [
          '**Excire Fotoは、WindowsとmacOS向けの単体の写真・動画管理ソフトで、ローカルの写真ライブラリにAI検索と選別ツールを加えます。** Excireは、すべてがコンピューター上で動作し、第三者にデータを送らないと述べています。Excire Foto 2027は2026年6月15日に発表され、2026年6月16日から入手できます。',
          '開発元はリューベックのPattern Recognition Company GmbHです。Excireは、Adobe Lightroom Classic用の別プラグインであるExcire Searchと、Windows 11向けでサブスクリプション型のExcire Foto Office Editionも販売しています。このレビューが扱うのは個人向けのExcire Foto 2027です。Excireのニュースページには、2026年4月17日付のTIPA World Awardと2026年9月18日付のEISA Awardの記載がありますが、PromptQuorumは授与団体への確認は行っていません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Excire FotoはWindowsとmacOS向けのインストーラーで導入します。そのあとExcireアカウントでサインインし、コードで有効化するか、14日間の試用を開始します。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': '製品ページ', '入手方法': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { '項目': '無料試用', '入手方法': '[14日間の試用](https://excire.com/en/trial/)、支払い方法は不要' },
          { '項目': '購入', '入手方法': '[Excireショップ](https://excire.com/en/shop/)：買い切り型。ページに価格表示なし' },
          { '項目': 'Windows', '入手方法': 'Windows 11向けの.exeインストーラー（[ダウンロード記事](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)からリンク）' },
          { '項目': 'Mac', '入手方法': 'Apple silicon用とIntel用の別々の.dmg（同じダウンロード記事）' },
          { '項目': 'プライバシー', '入手方法': '[Excireのプライバシーに関する声明](https://excire.com/en/datenschutzerklaerung/)：対象はウェブサイトで、アプリの動作ではない' },
          { '項目': 'ソースコード', '入手方法': 'なし：プロプライエタリソフトウェア' },
        ],
        note: '確認したバージョン：Excire Foto 2027、バージョン5.0.2。発売告知には、通常価格249ドルと、新規顧客向けの期間限定の導入価格219ドルが記載されています。ショップページには価格表示がないため、現在の価格は決済時に確認してください。米ドル表記のままで、日本での価格は異なる場合があります。Excire Foto 2025以前のバージョンもショップに残っています。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**Excireは、Windows 11またはmacOS 12以降、AVX対応の64ビットプロセッサー、最低8GBのメモリ（推奨は16GB以上）を挙げています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'macOS 12以降、またはWindows 11（x86、64ビット）。ショップによるとSnapdragon/ARM版Windowsには最適化されていません' },
          { '項目': 'Macのプロセッサー', '情報源の記載': 'Apple siliconとIntelのMacで別々のダウンロード' },
          { '項目': 'プロセッサー', '情報源の記載': 'AVX対応のマルチコア64ビットCPU。古いAMD Phenom II/Athlon IIとIntel Core 2 Duoは非対応' },
          { '項目': 'メモリ', '情報源の記載': '最低8GB、推奨16GB以上' },
          { '項目': 'ディスク容量', '情報源の記載': 'データベースは10万枚あたり約900MB、RAWを含む最高画質のプレビューは約25GB' },
          { '項目': 'GPU', '情報源の記載': 'GPU要件の記載なし' },
          { '項目': 'WindowsのHEIC', '情報源の記載': 'HEICファイルの表示にはMicrosoftのHEIFおよびHEVC拡張機能が必要' },
        ],
        note: 'これらの最低要件はExcireのショップと製品ページによるものです。PromptQuorumは、どのハードウェアでも解析時間やメモリ使用量を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はExcireの製品ページ、試用ページ、ダウンロードページに基づくもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストーラーをダウンロードする',
            whyItMatters: 'Excireのダウンロード記事から、Windows用.exe、またはApple silicon用かIntel用の.dmgを入手し、インストーラーを実行するかディスクイメージをマウントします。',
          },
          {
            title: 'アカウントを作成して有効化する',
            whyItMatters: 'Excireによると、Excireユーザーアカウントが必須で、ソフトウェアはアクティベーションコードで一度有効化する必要があります。試用は支払い方法なしで14日間です。',
          },
          {
            title: 'バックアップしてからフォルダーを追加する',
            whyItMatters: 'バージョン5.xに移行したデータベースは古いバージョンでは開けないため、Excireは既存のデータベースを先にバックアップするよう勧めています。',
          },
          {
            title: '解析の完了を待つ',
            whyItMatters: '内容検索が機能する前に写真を解析しておく必要があります。Excireによると、新しい文字検索を使うには既存の写真を再解析する必要があります。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてExcireの製品ページ、発売告知、バージョン比較に基づくもので、PromptQuorumが試したものはありません。**',
        ],
        items: [
          '**検索。** 自由文による内容検索、類似画像検索、人物検索、シーン・物体認識、検索とフィルターを一体にしたバー。',
          '**文字認識。** Excire Foto 2027は、看板や書類など画像内の文字を読み取り、プレビュー上で一致箇所を強調表示します。',
          '**キーワードと重複。** 写真と動画の自動キーワード付けと、重複検索。',
          '**選別。** シャープネスのチェック、スマート選択、比較用のサーベイビュー、3×3グリッド、フォーカスピーキング。',
          '**ライブラリ。** コレクション、レーティング、カラーラベル、フラグ、メタデータ編集、世界地図ビュー、タイムライングラフ、RAW対応。',
          '**共有。** Dropbox、Google Drive、Microsoft OneDrive、Nextcloudを通じたコレクションの共有。',
        ],
        note: 'Excireのバージョン比較では、文字認識、地図ビュー、タイムライングラフはExcire Foto 2027の新機能で、2025版と2024版にはないとされています。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**AIは画像ベースで、写真の内容、顔、文字を認識して検索と選別を助けます。チャットアシスタントや言語モデルについての記載はありません。**',
        ],
        items: [
          '**内容検索。** 写っているものを入力すると、一致する写真が見つかります。背後のモデル名はExcireから示されていません。',
          '**人物。** 顔が検出されてまとめられ、人物の検索や名前付けができ、メタデータ保存時に人物名をファイルに書き込めます。',
          '**画像内の文字。** 2027年版の新機能です。文字を検索するには、既存の写真を再解析する必要があります。',
          '**実行場所。** Excireは、すべての処理はクラウドに依存せずコンピューター上でローカルに行われ、写真は解析のためにアップロードされないと述べています。',
        ],
        note: 'これらはExcire自身の説明です。PromptQuorumは、検索の関連性、顔のグループ化の精度、他言語の文字認識、速度を検証していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**Excireの製品ページには「Everything runs locally, your photos stay on your computer」「Excire Foto does not send any data to external parties」とあります。** 製品のFAQでは、写真が解析のためにアップロードされるかという問いに「No」と答え、クラウドのソリューションは使っていないとしています。',
          '情報源によると、外部とやり取りするのは次の3点です。アクティベーションにはExcireユーザーアカウントとアクティベーションコードが必要で、ウェブサイトのプライバシーに関する声明は、コードを提供事業者の10Duke社が生成し、登録時に氏名、メールアドレス、パスワード、ハードウェア識別子、製品名、タイムスタンプが保存されると述べています。決済はFastSpringを通じて行われます。Dropbox、Google Drive、OneDrive、Nextcloudでの共有は、利用時に共有した写真をそれらのサービスへ送ります。このプライバシーに関する声明の対象はウェブサイトで、アップデート確認、クラッシュレポート、アクティベーション後のネットワーク動作については記載がありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。Excireは、アクティベーション後に完全オフラインで動作するかどうかを述べていません。PromptQuorumはネットワーク通信を検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**大規模なローカルライブラリを持つ写真家**：クラウドにアップロードせず、内容・人物・文字で検索したい方。',
          '**サブスクリプションを避けたい方**：買い切り型を好み、有料のメジャーアップグレードを受け入れられる方。',
          '**似た写真を大量に選別する方**：シャープネスのチェックと比較ビューが欲しい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**メンテナンス。** 5.0.2のインストーラーは2026年7月15日付で変更履歴がなく、今後の更新予定があるかは不明です。',
          '**AIの品質。** 検索の関連性、顔のグループ化、文字認識、速度は検証していません。',
          '**オフライン利用。** Excireの[アクティベーション記事](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase)によると、コードの入力は一度だけで、その後はExcireアカウントにログインし続けることでソフトウェアが有効化されます。これがインターネット接続なしで機能するかどうかは述べられていません。',
          '**価格。** ショップページに価格表示はなく、数値はExcireの発売告知によるもので、変更されている可能性があります。',
          '**言語とGPU。** アプリの表示言語とGPUによる効果は、読んだ情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、レビュー付きの写真ライブラリツールが3つあり、いずれもクローズドソースのExcire Fotoと違ってAGPL-3.0ライセンスです。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Immich](/ja/power-local-llm/immich-review)', '対応プラットフォーム': 'サーバー（Docker）、スマホアプリ、ブラウザ', '価格／ライセンス': '無料／AGPL-3.0', '主な違い': 'スマホのバックアップ付きセルフホストサーバー。Dockerでの導入が必要でオープンソース' },
          { 'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)', '対応プラットフォーム': 'サーバー（Docker）、ブラウザ', '価格／ライセンス': 'Community版は無料／AGPL-3.0', '主な違い': 'AIラベルを内蔵するセルフホスト型のウェブアプリで、デスクトップソフトではない' },
          { 'アプリ': '[Ente Photos](/ja/power-local-llm/ente-photos-review)', '対応プラットフォーム': 'iOS、Android、デスクトップ、ウェブ', '価格／ライセンス': '10GBまで無料、有料プランあり／AGPL-3.0', '主な違い': '端末上のAIを使う暗号化クラウドストレージ。ローカルのライブラリ管理ソフトではない' },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Excire FotoはローカルのLLMですか？',
            a: 'いいえ。情報源が説明しているのは写真検索のための画像・顔・文字の認識で、チャット機能や言語モデルの記載はありません。',
          },
          {
            q: 'Excire Fotoはオフラインで使えますか？',
            a: 'Excireは処理がコンピューター上でローカルに行われると述べていますが、有効化にはExcireアカウントとアクティベーションコードが必要だとも述べています。アクティベーション後にインターネットなしで動くかどうかは記載がありません。',
          },
          {
            q: 'Excire Fotoの価格はいくらですか？',
            a: 'ショップページに価格表示はありません。Excireの2026年6月の発売告知には、通常価格249ドルと期間限定の導入価格219ドルが記載されています。米ドル表記のままで、日本での価格は異なる場合があります。試用は14日間無料です。',
          },
          {
            q: 'アップデートは有料ですか？',
            a: 'Excireによると、バグ修正と軽微な改善は無料で、大きな改善を含むアップグレードは有料です。既存の顧客には大幅な割引があるとされています。',
          },
          {
            q: '購入前に試せますか？',
            a: 'はい。ExcireはWindows/Mac向けに14日間の試用を提供しており、支払い方法は不要としています。試用ページには機能の制限は記載されていません。',
          },
          {
            q: 'プロジェクトはまだメンテナンスされていますか？',
            a: '不明です。バージョン5.0.2のインストーラーは2026年7月15日に最後に更新され、Excireは変更履歴を公開していません。開発が止まっている可能性があるものとして扱い、購入前にサポートサイトを確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Excire Fotoは、開発元によると、AI検索、人物検索、文字認識、ベストショット選別を自分のコンピューター上で、買い切り型と14日間の試用で提供します。一方で、クローズドソースであること、Excireアカウントとアクティベーションコードが必須であること、アクティベーション後のオフライン動作が不明であること、メジャーバージョンが有料アップグレードであること、ショップページに価格表示がないこと、最新のインストーラーが2026年7月15日付で更新停止の警告に該当することが挙げられます。サブスクリプションなしのローカルなツールを重視し、まず試用版を試すWindows 11・macOSの写真家に向いています。メンテナンスされた、オープンソースの、またはセルフホスト型のソリューションが必要な方は、他を探すのがよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Excire Foto 製品ページ](https://excire.com/en/excire-foto/) — 機能、ローカル処理に関する説明、アクティベーションとアップグレード方針。2026年10月28日確認。',
          '[Excireショップ](https://excire.com/en/shop/) — システム要件と購入形態。2026年10月28日確認。',
          '[Excire試用ページ](https://excire.com/en/trial/) — 14日間試用の条件。2026年10月28日確認。',
          '[Excire Foto 2027 発売告知](https://excire.com/en/excire-foto-2027-is-here/) — 発売日、新機能、定価。2026年6月15日公開。',
          '[Excireニュース](https://excire.com/en/news/) — 受賞に関する記載。2026年10月28日確認。',
          '[Excireサポートのダウンロード記事](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — バージョン5.0.2とインストーラー。2026年10月28日確認。',
          '[Excireのプライバシーに関する声明](https://excire.com/en/datenschutzerklaerung/) — ウェブサイトのデータ処理、アクティベーション事業者、決済。2026年10月28日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Immichレビュー](/ja/power-local-llm/immich-review) — スマホのバックアップとスマート検索を備えたセルフホスト型の写真ライブラリ。',
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIラベルを内蔵する、もうひとつのセルフホスト型写真ライブラリ。',
          '[Ente Photosレビュー](/ja/power-local-llm/ente-photos-review) — 端末上の顔検索と自然言語検索を備えた暗号化写真バックアップ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },

  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-pt.webp',
    title: 'Análise do Excire Foto: gerenciador de fotos com IA local para Windows e Mac',
    seoTitle: 'Análise do Excire Foto: gerenciador de fotos com IA local',
    intro:
      'O Excire Foto é um gerenciador de fotos e vídeos de código fechado para Windows e macOS cuja busca com IA, busca de pessoas, reconhecimento de texto e seleção de imagens rodam no seu próprio computador, segundo o fabricante alemão. Ele é vendido como compra única e exige uma conta Excire e um código de ativação. Esta análise reflete o site, a loja, a página de teste, os artigos de suporte e a declaração de privacidade da Excire conforme verificados em 28 de outubro de 2026; a versão atual é o Excire Foto 2027, versão 5.0.2.',
    metaDescription:
      'Análise do Excire Foto: gerenciador de fotos para Windows e Mac cuja busca por IA e reconhecimento de texto rodam localmente, segundo o fabricante. Compra única.',
    twitterDescription:
      'Análise do Excire Foto: um gerenciador de fotos de compra única para Windows e Mac cuja busca com IA e seleção rodam localmente, segundo o fabricante. Requisitos, ativação, privacidade e por que há um aviso de projeto desatualizado.',
    audience:
      'Fotógrafos com Windows ou Mac que querem busca com IA e seleção de imagens sem enviar a biblioteca para um serviço na nuvem, e que precisam saber o que as fontes confirmam, o que a ativação envolve e se o produto ainda recebe atualizações.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Excire Foto',
    targetKeywords: [
      'análise excire foto',
      'excire foto 2027',
      'gerenciador de fotos com ia local',
      'organizador de fotos com reconhecimento facial offline',
      'software de seleção de fotos com ia',
      'alternativa ao lightroom busca de fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**Aviso: os instaladores mais recentes do Excire Foto 2027 (versão 5.0.2) são de 15 de julho de 2026 e a Excire não publica changelog; o produto está há mais de três meses sem atualização visível e pode estar abandonado — verifique antes de depender dele.** **O Excire Foto é um gerenciador de fotos e vídeos de código fechado para Windows 11 e macOS 12 ou posterior que, segundo a Excire, analisa sua biblioteca localmente com busca por IA, busca de pessoas, reconhecimento de texto e seleção de imagens.** A compra é única, há um teste de 14 dias e são exigidos uma conta Excire e um código de ativação.',
    quickAnswerTop: {
      pt: {
        question: 'O Excire Foto mantém suas fotos no seu próprio computador?',
        answer:
          'Segundo a Excire, sim: a página do produto diz "Everything runs locally, your photos stay on your computer" e que nenhum dado é enviado a terceiros. A ativação exige uma conta Excire e um código, o compartilhamento na nuvem é um recurso opcional separado, e a Excire não diz se o app funciona offline após a ativação. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Código fechado e compra única sem assinatura; a página da loja não mostra preço, e o anúncio de lançamento da Excire informa um preço de tabela de US$ 249.',
          'Windows 11 (x86, 64 bits) e macOS 12 ou posterior, Apple silicon e Intel; mínimo de 8 GB de RAM, 16 GB recomendados.',
          'Recursos: busca em texto livre, busca de pessoas, reconhecimento de cenas e objetos, reconhecimento de texto, palavras-chave automáticas, busca de duplicatas e seleção de imagens.',
          'Teste de 14 dias sem forma de pagamento; uma nova versão principal é uma atualização paga com desconto.',
          'Os instaladores mais recentes são de 15 de julho de 2026: aplica-se o aviso de projeto desatualizado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Excire Foto?', anchor: 'what-is-excire-foto' },
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
            text: 'O Excire Foto é um app de desktop pago e de código fechado para Windows e Mac que, segundo o fabricante, busca fotos pelo conteúdo, agrupa pessoas, lê texto em imagens e avalia as fotos, tudo no seu próprio computador.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala, indica suas pastas de fotos, deixa que ele as analise uma vez e depois pesquisa digitando o que aparece na imagem; a Excire diz que nada é enviado, mas a ativação exige uma conta Excire.',
          },
        ],
        items: [
          'Manutenção: os instaladores da versão 5.0.2 em excire.com foram modificados pela última vez em 15 de julho de 2026 e não há changelog, então vale um aviso de projeto desatualizado.',
          'Fabricante: Pattern Recognition Company GmbH, em Lübeck (Alemanha), que atua sob o nome Excire; o produto foi lançado como Excire Foto 2027 em 16 de junho de 2026.',
          'Instalação: um instalador comum para Windows ou macOS, depois ativação com conta Excire e código de ativação, ou o teste de 14 dias.',
          'Custo: compra única; o anúncio de lançamento da Excire informa US$ 249 e as versões principais são atualizações pagas com desconto.',
          'Escopo: gerenciamento de fotos e vídeos com busca por IA e seleção de imagens; não há chat nem assistente de modelo de linguagem.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aviso de projeto desatualizado: os instaladores da versão 5.0.2 são de 15 de julho de 2026 e a Excire não publica notas de versão; o app está há mais de três meses sem atualização visível. Ele pode estar abandonado; confirme que funciona no seu sistema operacional antes de comprar.',
          },
          {
            type: 'note',
            text: 'Esta análise baseia-se no site, na loja, na página de teste, nos artigos de suporte e na declaração de privacidade da Excire, consultados em 28 de outubro de 2026. A PromptQuorum não instalou o Excire Foto, portanto qualidade da busca, velocidade e precisão não foram avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'O que é o Excire Foto?',
        content: [
          '**O Excire Foto é um programa independente de gerenciamento de fotos e vídeos para Windows e macOS que acrescenta busca por IA e ferramentas de seleção a uma biblioteca local de fotos.** A Excire afirma que tudo roda no seu computador e que o programa não envia dados a terceiros. O Excire Foto 2027 foi anunciado em 15 de junho de 2026 e está disponível desde 16 de junho de 2026.',
          'O fabricante é a Pattern Recognition Company GmbH, de Lübeck. A Excire também vende o Excire Search, um plugin separado para o Adobe Lightroom Classic, e uma Excire Foto Office Edition para Windows 11 por assinatura; esta análise trata do produto para consumidores, o Excire Foto 2027. A página de notícias da Excire mostra uma entrada do prêmio TIPA World Award de 17 de abril de 2026 e uma do prêmio EISA de 18 de setembro de 2026; a PromptQuorum não verificou esses prêmios com as entidades que os concedem.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Excire Foto é instalado com um instalador para Windows e macOS; depois você entra com uma conta Excire e o ativa com um código ou inicia o teste de 14 dias.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Página do produto', 'Onde obter': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'Opção': 'Teste gratuito', 'Onde obter': '[Teste de 14 dias](https://excire.com/en/trial/), sem forma de pagamento' },
          { 'Opção': 'Comprar', 'Onde obter': '[Loja da Excire](https://excire.com/en/shop/): compra única; a página não mostra preço' },
          { 'Opção': 'Windows', 'Onde obter': 'Instalador .exe para Windows 11, linkado no [artigo de download](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'Opção': 'Mac', 'Onde obter': 'Downloads .dmg separados para Apple silicon e Intel, no mesmo artigo de download' },
          { 'Opção': 'Privacidade', 'Onde obter': '[Declaração de privacidade da Excire](https://excire.com/en/datenschutzerklaerung/): cobre o site, não o comportamento do app' },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Nenhum: software proprietário' },
        ],
        note: 'Versão analisada: Excire Foto 2027, versão 5.0.2. O anúncio de lançamento informa um preço regular de US$ 249 e um preço promocional temporário de US$ 219 para novos clientes; a página da loja não mostra preço, então confirme o preço atual no checkout. Os preços no Brasil podem variar bastante devido a impostos de importação. O Excire Foto 2025 e versões anteriores continuam na loja.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A Excire indica Windows 11 ou macOS 12 ou posterior, um processador de 64 bits com AVX e pelo menos 8 GB de RAM, com 16 GB ou mais recomendados.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'macOS 12 ou posterior, ou Windows 11 (x86, 64 bits); segundo a loja, não é otimizado para Windows em Snapdragon/ARM' },
          { 'Item': 'Processadores Mac', 'O que dizem as fontes': 'Downloads separados para Macs com Apple silicon e Intel' },
          { 'Item': 'Processador', 'O que dizem as fontes': 'CPU multinúcleo de 64 bits com AVX; AMD Phenom II/Athlon II e Intel Core 2 Duo antigos não são suportados' },
          { 'Item': 'Memória', 'O que dizem as fontes': 'Mínimo de 8 GB, recomendado 16 GB ou mais' },
          { 'Item': 'Espaço em disco', 'O que dizem as fontes': 'Cerca de 900 MB por 100.000 fotos para os bancos de dados e cerca de 25 GB para prévias em qualidade máxima com RAW' },
          { 'Item': 'GPU', 'O que dizem as fontes': 'Nenhum requisito de GPU é informado' },
          { 'Item': 'HEIC no Windows', 'O que dizem as fontes': 'Arquivos HEIC precisam das extensões HEIF e HEVC da Microsoft para serem exibidos' },
        ],
        note: 'Esses mínimos vêm da loja e da página do produto da Excire; a PromptQuorum não mediu o tempo de análise nem o uso de memória em nenhum hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem as páginas de produto, teste e download da Excire; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o instalador',
            whyItMatters: 'Pegue o .exe do Windows ou o .dmg para Apple silicon ou Intel no artigo de download da Excire e execute o instalador ou monte a imagem de disco.',
          },
          {
            title: 'Crie uma conta e ative',
            whyItMatters: 'A Excire diz que uma conta de usuário Excire é obrigatória e que o software precisa ser ativado uma vez com um código de ativação; o teste dura 14 dias sem forma de pagamento.',
          },
          {
            title: 'Faça backup e adicione suas pastas',
            whyItMatters: 'A Excire recomenda fazer backup antes de um banco de dados existente, porque um banco migrado para a versão 5.x não pode ser aberto por versões antigas.',
          },
          {
            title: 'Deixe a análise terminar',
            whyItMatters: 'As fotos precisam ser analisadas antes de a busca por conteúdo funcionar; segundo a Excire, fotos existentes precisam ser reanalisadas para usar a nova busca de texto.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo o que segue vem da página do produto, do anúncio de lançamento ou da comparação de versões da Excire; a PromptQuorum não testou nenhum item.**',
        ],
        items: [
          '**Busca.** Busca de conteúdo em texto livre, busca de imagens semelhantes, busca de pessoas, reconhecimento de cenas e objetos e uma barra combinada de busca e filtros.',
          '**Reconhecimento de texto.** O Excire Foto 2027 lê texto em imagens, como placas e documentos, e destaca os resultados na prévia.',
          '**Palavras-chave e duplicatas.** Palavras-chave automáticas para fotos e vídeos e busca de duplicatas.',
          '**Seleção.** Verificação de nitidez, seleção inteligente, visão de comparação, grade 3×3 e focus peaking.',
          '**Biblioteca.** Coleções, avaliações, rótulos de cor, bandeiras, edição de metadados, mapa-múndi, gráfico de linha do tempo e suporte a RAW.',
          '**Compartilhamento.** Compartilhamento de coleções por Dropbox, Google Drive, Microsoft OneDrive e Nextcloud.',
        ],
        note: 'A comparação de versões da Excire lista reconhecimento de texto, mapa e gráfico de linha do tempo como novidades do Excire Foto 2027, ausentes nas versões 2025 e 2024.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**A IA trabalha com imagens: reconhece conteúdo, rostos e texto nas suas fotos para que você as pesquise e selecione; nenhum assistente de chat ou modelo de linguagem é descrito.**',
        ],
        items: [
          '**Busca por conteúdo.** Você digita o que aparece na imagem e o programa encontra as fotos correspondentes; a Excire não informa quais modelos usa.',
          '**Pessoas.** Rostos são detectados e agrupados para que você pesquise e nomeie pessoas e grave nomes nos arquivos ao salvar os metadados.',
          '**Texto em imagens.** Novidade de 2027; fotos existentes precisam ser analisadas de novo antes de seu texto poder ser pesquisado.',
          '**Onde roda.** A Excire diz que todo o processamento acontece localmente no seu computador, sem dependência da nuvem, e que as fotos não são enviadas para análise.',
        ],
        note: 'Estas são declarações da própria Excire. A PromptQuorum não testou relevância da busca, precisão do agrupamento de rostos, reconhecimento de texto em outros idiomas nem velocidade.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A página do produto da Excire diz "Everything runs locally, your photos stay on your computer" e "Excire Foto does not send any data to external parties".** No FAQ do produto, a Excire responde "No" à pergunta sobre fotos serem enviadas para análise e diz que não usa uma solução na nuvem.',
          'Segundo as fontes, três coisas saem do computador. A ativação exige uma conta de usuário Excire e um código de ativação; a declaração de privacidade do site diz que os códigos são gerados pelo provedor 10Duke e que o cadastro armazena nome, e-mail, senha, um identificador de hardware, o nome do produto e um carimbo de data e hora. O checkout passa pela FastSpring. O compartilhamento via Dropbox, Google Drive, OneDrive ou Nextcloud envia as fotos compartilhadas a esses serviços quando você o usa. A declaração de privacidade cobre o site; ela não descreve verificações de atualização, relatórios de falha nem o comportamento de rede do programa após a ativação.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do fabricante, não resultados de auditoria. A Excire não diz se o programa funciona totalmente offline após a ativação, e a PromptQuorum não inspecionou o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Fotógrafos com grandes bibliotecas locais** que querem pesquisar por conteúdo, pessoas e texto sem enviar nada a um serviço na nuvem.',
          '**Pessoas que evitam assinaturas** e preferem compra única, aceitando atualizações principais pagas.',
          '**Usuários que descartam muitas fotos parecidas** e querem verificação de nitidez e uma visão de comparação.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Manutenção.** Os instaladores da 5.0.2 são de 15 de julho de 2026 e não há changelog; não está claro se há novas atualizações planejadas.',
          '**Qualidade da IA.** Relevância da busca, agrupamento de rostos, reconhecimento de texto e velocidade não foram testados.',
          '**Uso offline.** Segundo o [artigo de ativação](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) da Excire, o código é inserido apenas uma vez e depois basta entrar na sua conta Excire (e permanecer conectado) para ativar o software; a Excire não diz se isso funciona sem conexão com a internet.',
          '**Preço.** A página da loja não mostra preço; os valores vêm do anúncio de lançamento da Excire e podem ter mudado.',
          '**Idiomas e GPU.** Os idiomas da interface e qualquer ganho com GPU não constam nas fontes lidas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem três ferramentas de biblioteca de fotos com análise; as três indicam licença AGPL-3.0, ao contrário do Excire Foto, de código fechado.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Immich](/pt/power-local-llm/immich-review)', 'Plataformas': 'Servidor (Docker), apps móveis, navegador', 'Preço / licença': 'Grátis / AGPL-3.0', 'Diferença principal': 'Servidor auto-hospedado com backup do celular; instalação via Docker, código aberto' },
          { 'App': '[PhotoPrism](/pt/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Preço / licença': 'Community grátis / AGPL-3.0', 'Diferença principal': 'App web auto-hospedado com rótulos de IA integrados, não é um programa de desktop' },
          { 'App': '[Ente Photos](/pt/power-local-llm/ente-photos-review)', 'Plataformas': 'iOS, Android, desktop, web', 'Preço / licença': '10 GB grátis, planos pagos / AGPL-3.0', 'Diferença principal': 'Armazenamento criptografado na nuvem com IA no dispositivo; não é um gerenciador de biblioteca local' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Excire Foto é um LLM local?',
            a: 'Não. As fontes descrevem reconhecimento de imagens, rostos e texto para busca de fotos e não citam nenhum recurso de chat nem modelo de linguagem.',
          },
          {
            q: 'O Excire Foto funciona offline?',
            a: 'A Excire diz que o processamento roda localmente no seu computador, mas também que uma conta Excire e um código de ativação são obrigatórios para ativar o software; se ele funciona sem internet após a ativação não é informado.',
          },
          {
            q: 'Quanto custa o Excire Foto?',
            a: 'A página da loja não mostra preço. O anúncio de lançamento da Excire de junho de 2026 informa um preço regular de US$ 249 e um preço promocional temporário de US$ 219; o teste é gratuito por 14 dias. Os preços no Brasil podem variar bastante devido a impostos de importação.',
          },
          {
            q: 'Preciso pagar pelas atualizações?',
            a: 'Segundo a Excire, correções de bugs e melhorias menores são gratuitas, enquanto atualizações com melhorias importantes são pagas, com um desconto substancial para clientes existentes.',
          },
          {
            q: 'Posso testar antes de comprar?',
            a: 'Sim: a Excire oferece um teste de 14 dias para Windows ou Mac e diz que nenhuma forma de pagamento é exigida. A página de teste não lista limites de recursos.',
          },
          {
            q: 'O projeto ainda é mantido?',
            a: 'Não está claro. Os instaladores da versão 5.0.2 foram modificados pela última vez em 15 de julho de 2026 e a Excire não publica changelog; trate-o como possivelmente abandonado e consulte o site de suporte antes de comprar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Excire Foto oferece, segundo o fabricante, busca por IA, busca de pessoas, reconhecimento de texto e seleção de imagens no seu próprio computador, com compra única e 14 dias de teste. Em contrapartida: é de código fechado, exige conta Excire e código de ativação, não informa o funcionamento offline após a ativação, as versões principais são atualizações pagas, a loja não mostra preço e os instaladores mais recentes são de 15 de julho de 2026, o que aciona um aviso de projeto desatualizado. Serve para fotógrafos de Windows 11 e macOS que valorizam uma ferramenta local sem assinatura e que farão o teste primeiro; quem precisa de uma solução mantida, de código aberto ou auto-hospedada deve procurar em outro lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página do produto Excire Foto](https://excire.com/en/excire-foto/) — recursos, declarações sobre processamento local, ativação e política de atualizações, consultada em 28 de outubro de 2026.',
          '[Loja da Excire](https://excire.com/en/shop/) — requisitos de sistema e modelos de compra, consultada em 28 de outubro de 2026.',
          '[Página de teste da Excire](https://excire.com/en/trial/) — condições do teste de 14 dias, consultada em 28 de outubro de 2026.',
          '[Anúncio de lançamento do Excire Foto 2027](https://excire.com/en/excire-foto-2027-is-here/) — data de lançamento, novidades e preço de tabela, publicado em 15 de junho de 2026.',
          '[Notícias da Excire](https://excire.com/en/news/) — entradas sobre prêmios, consultadas em 28 de outubro de 2026.',
          '[Artigo de download do suporte da Excire](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — versão 5.0.2 e instaladores, consultado em 28 de outubro de 2026.',
          '[Declaração de privacidade da Excire](https://excire.com/en/datenschutzerklaerung/) — tratamento de dados do site, provedor de ativação e checkout, consultada em 28 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Immich](/pt/power-local-llm/immich-review) — uma biblioteca de fotos auto-hospedada com backup do celular e busca inteligente.',
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — outra biblioteca de fotos auto-hospedada com rótulos de IA integrados.',
          '[Análise do Ente Photos](/pt/power-local-llm/ente-photos-review) — backup de fotos criptografado com busca de rostos e em linguagem natural no dispositivo.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-ar.webp',
    title: 'مراجعة Excire Foto: مدير صور بذكاء اصطناعي محلي',
    seoTitle: 'مراجعة Excire Foto: مدير صور بذكاء اصطناعي محلي',
    intro:
      'Excire Foto برنامج مغلق المصدر لإدارة الصور والفيديو على Windows وmacOS، ويعمل بحثه بالذكاء الاصطناعي والبحث عن الأشخاص والتعرف على النص وانتقاء الصور على حاسوبك الخاص بحسب الشركة الألمانية المطوّرة. يُباع بدفعة واحدة ويتطلب حساب Excire ورمز تفعيل. تعكس هذه المراجعة موقع Excire ومتجرها وصفحة التجربة ومقالات الدعم وبيان الخصوصية كما جرى التحقق منها في 28 أكتوبر 2026؛ والإصدار الحالي هو Excire Foto 2027، الإصدار 5.0.2.',
    metaDescription:
      'مراجعة Excire Foto: برنامج لإدارة الصور على Windows وMac يعمل بحثه بالذكاء الاصطناعي وتعرفه على النص محليًا بحسب الشركة. شراء مرة واحدة وتجربة 14 يومًا.',
    twitterDescription:
      'مراجعة Excire Foto: برنامج لإدارة الصور بدفعة واحدة على Windows وMac يعمل بحثه بالذكاء الاصطناعي وانتقاء الصور محليًا بحسب الشركة. المتطلبات والتفعيل والخصوصية وسبب تحذير توقف التحديثات.',
    audience:
      'المصورون على Windows أو Mac الذين يريدون البحث بالذكاء الاصطناعي وانتقاء الصور دون رفع مكتبتهم إلى خدمة سحابية، ويحتاجون إلى معرفة ما تؤكده المصادر وما يتطلبه التفعيل وهل ما زال المنتج يُحدَّث.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Excire Foto',
    targetKeywords: [
      'مراجعة excire foto',
      'excire foto 2027',
      'مدير صور بذكاء اصطناعي محلي',
      'تنظيم الصور بالتعرف على الوجوه دون اتصال',
      'برنامج انتقاء الصور بالذكاء الاصطناعي',
      'بديل lightroom للبحث في الصور',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**تحذير: أحدث ملفات تثبيت Excire Foto 2027 (الإصدار 5.0.2) تعود إلى 15 يوليو 2026 ولا تنشر Excire سجل تغييرات، أي أن المنتج لم يُظهر تحديثًا منذ أكثر من ثلاثة أشهر وقد يكون متوقفًا عن الصيانة — تحقق قبل الاعتماد عليه.** **Excire Foto برنامج مغلق المصدر لإدارة الصور والفيديو على Windows 11 وmacOS 12 أو أحدث، وهو يحلل مكتبتك محليًا بحسب Excire عبر البحث بالذكاء الاصطناعي والبحث عن الأشخاص والتعرف على النص وانتقاء الصور.** يُشترى مرة واحدة وتتوفر له تجربة 14 يومًا، ويتطلب حساب Excire ورمز تفعيل.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Excire Foto صورك على حاسوبك الخاص؟',
        answer:
          'بحسب Excire نعم: تقول صفحة المنتج "Everything runs locally, your photos stay on your computer" وإنه لا تُرسل بيانات إلى أطراف خارجية. يتطلب التفعيل حساب Excire ورمزًا، والمشاركة السحابية ميزة اختيارية منفصلة، ولا تذكر Excire هل يعمل التطبيق دون اتصال بعد التفعيل. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مغلق المصدر وشراء مرة واحدة دون اشتراك؛ لا تعرض صفحة المتجر سعرًا، ويذكر إعلان إطلاق Excire سعرًا معلنًا قدره $249.',
          'Windows 11 (x86، 64 بت) وmacOS 12 أو أحدث، بمعالجات Apple silicon وIntel؛ الحد الأدنى 8 GB من الذاكرة والموصى به 16 GB.',
          'الميزات: بحث بنص حر، والبحث عن الأشخاص، والتعرف على المشاهد والأجسام، والتعرف على النص، وكلمات مفتاحية تلقائية، والبحث عن المكررات، وانتقاء الصور.',
          'تجربة 14 يومًا دون وسيلة دفع؛ والإصدار الرئيسي الجديد ترقية مدفوعة بخصم.',
          'أحدث ملفات التثبيت تعود إلى 15 يوليو 2026: ينطبق تحذير المشروع غير المحدَّث.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Excire Foto؟', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto تطبيق مكتبي مدفوع ومغلق المصدر لنظامي Windows وMac، وهو بحسب الشركة المطوّرة يبحث في الصور حسب المحتوى ويجمّع الأشخاص ويقرأ النص داخل الصور ويقيّم اللقطات، وكل ذلك على حاسوبك الخاص.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتحدد مجلدات صورك وتتركه يحللها مرة واحدة ثم تبحث بكتابة ما يظهر في الصورة؛ تقول Excire إنه لا يُرفع شيء، لكن التفعيل يتطلب حساب Excire.',
          },
        ],
        items: [
          'الصيانة: عُدّلت ملفات تثبيت الإصدار 5.0.2 على excire.com آخر مرة في 15 يوليو 2026 ولا يوجد سجل تغييرات، لذا ينطبق تحذير المشروع غير المحدَّث.',
          'الجهة المطوّرة: شركة Pattern Recognition Company GmbH في لوبيك بألمانيا وتعمل باسم Excire؛ وصدر المنتج باسم Excire Foto 2027 في 16 يونيو 2026.',
          'الإعداد: ملف تثبيت عادي لنظام Windows أو macOS، ثم التفعيل بحساب Excire ورمز التفعيل أو استخدام تجربة 14 يومًا.',
          'التكلفة: شراء مرة واحدة؛ يذكر إعلان إطلاق Excire مبلغ $249، والإصدارات الرئيسية ترقيات مدفوعة بخصم.',
          'النطاق: إدارة الصور والفيديو مع بحث بالذكاء الاصطناعي وانتقاء للصور؛ لا توجد محادثة ولا مساعد بنموذج لغوي.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'تحذير المشروع غير المحدَّث: ملفات تثبيت الإصدار 5.0.2 تعود إلى 15 يوليو 2026 ولا تنشر Excire ملاحظات إصدار، أي أن التطبيق لم يُظهر تحديثًا منذ أكثر من ثلاثة أشهر. قد يكون متوقفًا عن الصيانة؛ تأكد من أنه يعمل على نظام التشغيل لديك قبل الشراء.',
          },
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع Excire ومتجرها وصفحة التجربة ومقالات الدعم وبيان الخصوصية، كما جرى التحقق منها في 28 أكتوبر 2026. لم تثبّت PromptQuorum برنامج Excire Foto، لذا لم تُقيَّم جودة البحث والسرعة والدقة.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'ما هو Excire Foto؟',
        content: [
          '**Excire Foto برنامج مستقل لإدارة الصور والفيديو على Windows وmacOS يضيف بحثًا بالذكاء الاصطناعي وأدوات انتقاء إلى مكتبة صور محلية.** تقول Excire إن كل شيء يعمل على حاسوبك وإن البرنامج لا يرسل بيانات إلى أطراف خارجية. أُعلن عن Excire Foto 2027 في 15 يونيو 2026 وهو متاح منذ 16 يونيو 2026.',
          'الجهة المطوّرة هي Pattern Recognition Company GmbH في لوبيك. وتبيع Excire أيضًا Excire Search وهو إضافة منفصلة لبرنامج Adobe Lightroom Classic، ونسخة Excire Foto Office Edition لنظام Windows 11 بالاشتراك؛ وتتناول هذه المراجعة المنتج الموجّه للأفراد Excire Foto 2027. تعرض صفحة أخبار Excire مدخلًا عن جائزة TIPA World Award بتاريخ 17 أبريل 2026 ومدخلًا عن جائزة EISA بتاريخ 18 سبتمبر 2026؛ ولم تتحقق PromptQuorum من هذه الجوائز لدى الجهات المانحة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Excire Foto بملف تثبيت لنظامي Windows وmacOS؛ ثم تسجّل الدخول بحساب Excire وتفعّله برمز أو تبدأ تجربة 14 يومًا.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'صفحة المنتج', 'مصدر الحصول عليه': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { 'الخيار': 'تجربة مجانية', 'مصدر الحصول عليه': '[تجربة 14 يومًا](https://excire.com/en/trial/)، دون وسيلة دفع' },
          { 'الخيار': 'الشراء', 'مصدر الحصول عليه': '[متجر Excire](https://excire.com/en/shop/): شراء مرة واحدة؛ لا تعرض الصفحة سعرًا' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'ملف تثبيت .exe لنظام Windows 11، رابطه في [مقال التنزيل](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { 'الخيار': 'Mac', 'مصدر الحصول عليه': 'ملفا .dmg منفصلان لـ Apple silicon وIntel في مقال التنزيل نفسه' },
          { 'الخيار': 'الخصوصية', 'مصدر الحصول عليه': '[بيان خصوصية Excire](https://excire.com/en/datenschutzerklaerung/): يغطي الموقع لا سلوك التطبيق' },
          { 'الخيار': 'الشفرة المصدرية', 'مصدر الحصول عليه': 'لا توجد: برنامج احتكاري' },
        ],
        note: 'الإصدار الذي رُوجع: Excire Foto 2027، الإصدار 5.0.2. يذكر إعلان الإطلاق سعرًا اعتياديًا قدره $249 وسعر إطلاق محدود المدة قدره $219 للعملاء الجدد؛ ولا تعرض صفحة المتجر سعرًا، فتأكد من السعر الحالي عند الدفع. وقد تختلف الأسعار في بلدك حسب السوق والضرائب. ما زال Excire Foto 2025 والإصدارات الأقدم مدرجة في المتجر.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تذكر Excire نظام Windows 11 أو macOS 12 أو أحدث، ومعالجًا 64 بت يدعم AVX، وذاكرة لا تقل عن 8 GB مع التوصية بـ 16 GB أو أكثر.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'macOS 12 أو أحدث، أو Windows 11 (x86، 64 بت)؛ وتقول صفحة المتجر إنه غير محسَّن لـ Windows على Snapdragon/ARM' },
          { 'البند': 'معالجات Mac', 'ما تقوله المصادر': 'ملفات تنزيل منفصلة لأجهزة Mac بمعالج Apple silicon وIntel' },
          { 'البند': 'المعالج', 'ما تقوله المصادر': 'معالج متعدد النوى 64 بت يدعم AVX؛ ولا يُدعم AMD Phenom II/Athlon II وIntel Core 2 Duo القديمان' },
          { 'البند': 'الذاكرة', 'ما تقوله المصادر': 'الحد الأدنى 8 GB والموصى به 16 GB أو أكثر' },
          { 'البند': 'مساحة القرص', 'ما تقوله المصادر': 'نحو 900 MB لكل 100,000 صورة لقواعد البيانات، ونحو 25 GB للمعاينات بأعلى جودة مع ملفات RAW' },
          { 'البند': 'GPU', 'ما تقوله المصادر': 'لا يُذكر أي شرط لبطاقة الرسوميات' },
          { 'البند': 'HEIC على Windows', 'ما تقوله المصادر': 'تحتاج ملفات HEIC إلى امتدادي HEIF وHEVC من Microsoft لعرضها' },
        ],
        note: 'هذه الحدود الدنيا من متجر Excire وصفحة منتجها؛ ولم تقِس PromptQuorum زمن التحليل أو استهلاك الذاكرة على أي جهاز.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات صفحات المنتج والتجربة والتنزيل لدى Excire؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'نزّل ملف التثبيت',
            whyItMatters: 'خذ ملف .exe لنظام Windows أو ملف .dmg لـ Apple silicon أو Intel من مقال التنزيل لدى Excire، ثم شغّل المثبّت أو افتح صورة القرص.',
          },
          {
            title: 'أنشئ حسابًا وفعّل',
            whyItMatters: 'تقول Excire إن حساب مستخدم Excire مطلوب وإنه يجب تفعيل البرنامج مرة واحدة برمز تفعيل؛ وتستمر التجربة 14 يومًا دون وسيلة دفع.',
          },
          {
            title: 'انسخ احتياطيًا ثم أضف مجلداتك',
            whyItMatters: 'تنصح Excire بنسخ قاعدة بيانات موجودة احتياطيًا أولًا، لأن قاعدة البيانات المنقولة إلى الإصدار 5.x لا تفتحها الإصدارات الأقدم.',
          },
          {
            title: 'اترك التحليل ينتهي',
            whyItMatters: 'يجب تحليل الصور قبل أن يعمل البحث بالمحتوى؛ وتقول Excire إن الصور الموجودة تحتاج إلى إعادة تحليل لاستخدام البحث الجديد في النص.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل ما يلي من صفحة منتج Excire أو إعلان الإطلاق أو مقارنة الإصدارات؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**البحث.** بحث بنص حر في المحتوى، والبحث عن صور مشابهة، والبحث عن الأشخاص، والتعرف على المشاهد والأجسام، وشريط موحّد للبحث والتصفية.',
          '**التعرف على النص.** يقرأ Excire Foto 2027 النص داخل الصور، مثل اللافتات والمستندات، ويبرز النتائج المطابقة في المعاينة.',
          '**الكلمات المفتاحية والمكررات.** كلمات مفتاحية تلقائية للصور والفيديو، وبحث عن المكررات.',
          '**الانتقاء.** فحص الحدّة، وتحديد ذكي، وعرض مسح للمقارنة، وشبكة 3×3، وتمييز التركيز (focus peaking).',
          '**المكتبة.** مجموعات وتقييمات وتسميات لونية وأعلام وتحرير البيانات الوصفية وخريطة العالم ومخطط زمني ودعم RAW.',
          '**المشاركة.** مشاركة المجموعات عبر Dropbox وGoogle Drive وMicrosoft OneDrive وNextcloud.',
        ],
        note: 'تعدّ مقارنة الإصدارات لدى Excire التعرف على النص وعرض الخريطة والمخطط الزمني جديدةً في Excire Foto 2027 وغير موجودة في إصداري 2025 و2024.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**الذكاء الاصطناعي هنا قائم على الصور: يتعرف على المحتوى والوجوه والنص في صورك لتبحث فيها وتنتقيها؛ ولا يُوصف مساعد محادثة ولا نموذج لغوي.**',
        ],
        items: [
          '**البحث بالمحتوى.** تكتب ما يظهر في الصورة فيجد البرنامج الصور المطابقة؛ ولا تذكر Excire النماذج التي تقف وراءه.',
          '**الأشخاص.** تُكتشف الوجوه وتُجمَّع لتبحث عن الأشخاص وتسمّيهم، وتكتب أسماء الأشخاص في الملفات عند حفظ البيانات الوصفية.',
          '**النص في الصور.** جديد في 2027؛ وتحتاج الصور الموجودة إلى تحليل جديد قبل أن يصبح نصها قابلًا للبحث.',
          '**أين يعمل.** تقول Excire إن المعالجة كلها تجري محليًا على حاسوبك دون اعتماد على السحابة، وإن الصور لا تُرفع للتحليل.',
        ],
        note: 'هذه أقوال Excire نفسها. لم تختبر PromptQuorum صلة نتائج البحث ولا دقة تجميع الوجوه ولا التعرف على النص بلغات أخرى ولا السرعة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول صفحة منتج Excire "Everything runs locally, your photos stay on your computer" و"Excire Foto does not send any data to external parties".** وفي الأسئلة الشائعة للمنتج تجيب Excire بـ "No" عن سؤال رفع الصور للتحليل وتقول إنها لا تستخدم حلًا سحابيًا.',
          'بحسب المصادر، تخرج ثلاثة أشياء إلى الخارج. يتطلب التفعيل حساب مستخدم Excire ورمز تفعيل؛ ويقول بيان خصوصية الموقع إن رموز التفعيل يولّدها المزوّد 10Duke وإن التسجيل يخزّن الاسم وعنوان البريد الإلكتروني وكلمة المرور ومعرّف الجهاز واسم المنتج وطابعًا زمنيًا. ويجري الدفع عبر FastSpring. وتُرسل المشاركة عبر Dropbox أو Google Drive أو OneDrive أو Nextcloud الصور المشاركة إلى تلك الخدمات عند استخدامها. ويغطي بيان الخصوصية الموقع، ولا يصف فحوصات التحديث ولا تقارير الأعطال ولا سلوك البرنامج على الشبكة بعد التفعيل.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إقرارات من الشركة المطوّرة وليست نتائج تدقيق. لا تذكر Excire هل يعمل البرنامج دون اتصال تمامًا بعد التفعيل، ولم تفحص PromptQuorum حركة الشبكة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المصورون أصحاب المكتبات المحلية الكبيرة** الذين يريدون البحث بالمحتوى والأشخاص والنص دون رفع شيء إلى خدمة سحابية.',
          '**من يتجنبون الاشتراكات** ويفضلون الشراء مرة واحدة مع قبول الترقيات الرئيسية المدفوعة.',
          '**من ينتقون من لقطات متشابهة كثيرة** ويريدون فحص الحدّة وعرض مقارنة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الصيانة.** ملفات تثبيت 5.0.2 تعود إلى 15 يوليو 2026 ولا يوجد سجل تغييرات، ومن غير الواضح هل هناك تحديثات أخرى مخططة.',
          '**جودة الذكاء الاصطناعي.** لم تُختبر صلة نتائج البحث ولا تجميع الوجوه ولا التعرف على النص ولا السرعة.',
          '**الاستخدام دون اتصال.** بحسب [مقال التفعيل](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase) لدى Excire، يُدخَل الرمز مرة واحدة فقط ثم يكفي تسجيل الدخول إلى حساب Excire (مع البقاء مسجلًا) لتفعيل البرنامج؛ ولا تذكر Excire هل يعمل ذلك دون اتصال بالإنترنت.',
          '**السعر.** لا تعرض صفحة المتجر سعرًا؛ والأرقام من إعلان إطلاق Excire وقد تكون تغيّرت.',
          '**اللغات وبطاقة الرسوميات.** لغات واجهة التطبيق وأي فائدة من GPU غير مذكورة في المصادر التي قُرئت.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل ثلاث أدوات لمكتبات الصور لها مراجعات، وكلها تذكر ترخيص AGPL-3.0 بخلاف Excire Foto المغلق المصدر.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Immich](/ar/power-local-llm/immich-review)', 'المنصات': 'خادم (Docker) وتطبيقات هاتف ومتصفح', 'السعر / الرخصة': 'مجاني / AGPL-3.0', 'الفرق الأبرز': 'خادم ذاتي الاستضافة مع نسخ احتياطي من الهاتف؛ يتطلب Docker ومفتوح المصدر' },
          { 'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)', 'المنصات': 'خادم (Docker) ومتصفح', 'السعر / الرخصة': 'Community مجاني / AGPL-3.0', 'الفرق الأبرز': 'تطبيق ويب ذاتي الاستضافة بتسميات ذكاء اصطناعي مدمجة، وليس برنامج سطح مكتب' },
          { 'التطبيق': '[Ente Photos](/ar/power-local-llm/ente-photos-review)', 'المنصات': 'iOS وAndroid وسطح المكتب والويب', 'السعر / الرخصة': '10 GB مجانًا وخطط مدفوعة / AGPL-3.0', 'الفرق الأبرز': 'تخزين سحابي مشفّر مع ذكاء اصطناعي على الجهاز؛ وليس مدير مكتبة محلية' },
        ],
        note: 'تأكد من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Excire Foto نموذج لغوي محلي؟',
            a: 'لا. تصف المصادر التعرف على الصور والوجوه والنص للبحث في الصور، ولا تذكر ميزة محادثة ولا نموذجًا لغويًا.',
          },
          {
            q: 'هل يعمل Excire Foto دون اتصال بالإنترنت؟',
            a: 'تقول Excire إن المعالجة تجري محليًا على حاسوبك، لكنها تقول أيضًا إن حساب Excire ورمز التفعيل مطلوبان لتفعيل البرنامج؛ ولا يُذكر هل يعمل دون إنترنت بعد التفعيل.',
          },
          {
            q: 'كم يكلف Excire Foto؟',
            a: 'لا تعرض صفحة المتجر سعرًا. يذكر إعلان إطلاق Excire في يونيو 2026 سعرًا اعتياديًا قدره $249 وسعر إطلاق محدود المدة قدره $219؛ والتجربة مجانية لمدة 14 يومًا. وقد تختلف الأسعار في بلدك حسب السوق والضرائب.',
          },
          {
            q: 'هل أدفع مقابل التحديثات؟',
            a: 'بحسب Excire، إصلاحات الأخطاء والتحسينات الصغيرة مجانية، بينما الترقيات ذات التحسينات الكبرى مدفوعة مع خصم كبير للعملاء الحاليين.',
          },
          {
            q: 'هل يمكنني تجربته قبل الشراء؟',
            a: 'نعم: تقدم Excire تجربة 14 يومًا لنظام Windows أو Mac وتقول إنه لا حاجة إلى وسيلة دفع. ولا تذكر صفحة التجربة قيودًا على الميزات.',
          },
          {
            q: 'هل ما زال المشروع تحت الصيانة؟',
            a: 'غير واضح. عُدّلت ملفات تثبيت الإصدار 5.0.2 آخر مرة في 15 يوليو 2026 ولا تنشر Excire سجل تغييرات؛ فعامله على أنه قد يكون متوقفًا عن الصيانة وراجع موقع الدعم قبل الشراء.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يقدّم Excire Foto بحسب الشركة المطوّرة بحثًا بالذكاء الاصطناعي وبحثًا عن الأشخاص وتعرفًا على النص وانتقاءً للصور على حاسوبك الخاص، بشراء مرة واحدة وتجربة 14 يومًا. في المقابل: هو مغلق المصدر، ويتطلب حساب Excire ورمز تفعيل، ولم يُذكر سلوكه دون اتصال بعد التفعيل، والإصدارات الرئيسية ترقيات مدفوعة، ولا تعرض صفحة المتجر سعرًا، وأحدث ملفات التثبيت تعود إلى 15 يوليو 2026، ما يفعّل تحذير المشروع غير المحدَّث. يناسب مصوري Windows 11 وmacOS الذين يقدّرون أداة محلية بلا اشتراك وسيبدؤون بالتجربة؛ ومن يحتاج حلًا مُصانًا أو مفتوح المصدر أو ذاتي الاستضافة فعليه البحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة منتج Excire Foto](https://excire.com/en/excire-foto/) — الميزات وأقوال المعالجة المحلية والتفعيل وسياسة الترقية، تم التحقق في 28 أكتوبر 2026.',
          '[متجر Excire](https://excire.com/en/shop/) — متطلبات النظام ونماذج الشراء، تم التحقق في 28 أكتوبر 2026.',
          '[صفحة تجربة Excire](https://excire.com/en/trial/) — شروط تجربة 14 يومًا، تم التحقق في 28 أكتوبر 2026.',
          '[إعلان إطلاق Excire Foto 2027](https://excire.com/en/excire-foto-2027-is-here/) — تاريخ الإصدار والميزات الجديدة والسعر المعلن، نُشر في 15 يونيو 2026.',
          '[أخبار Excire](https://excire.com/en/news/) — مداخل الجوائز، تم التحقق في 28 أكتوبر 2026.',
          '[مقال التنزيل في دعم Excire](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — الإصدار 5.0.2 وملفات التثبيت، تم التحقق في 28 أكتوبر 2026.',
          '[بيان خصوصية Excire](https://excire.com/en/datenschutzerklaerung/) — معالجة بيانات الموقع ومزوّد التفعيل والدفع، تم التحقق في 28 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — مكتبة صور ذاتية الاستضافة مع نسخ احتياطي من الهاتف وبحث ذكي.',
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور أخرى ذاتية الاستضافة بتسميات ذكاء اصطناعي مدمجة.',
          '[مراجعة Ente Photos](/ar/power-local-llm/ente-photos-review) — نسخ احتياطي مشفّر للصور مع بحث عن الوجوه وباللغة الطبيعية على الجهاز.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },

  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-zh.webp',
    title: 'Excire Foto 评测：适用于 Windows 和 Mac 的本地 AI 照片管理软件',
    seoTitle: 'Excire Foto 评测：本地 AI 照片管理软件（Win/Mac）',
    intro:
      'Excire Foto 是适用于 Windows 和 macOS 的闭源照片与视频管理软件，据德国开发商称，其 AI 搜索、人物搜索、文字识别和选片功能都在你自己的电脑上运行。它采用一次性购买方式，需要 Excire 账户和激活码。本评测反映了 2026 年 10 月 28 日核对的 Excire 官网、商店、试用页面、支持文章和隐私声明；当前版本为 Excire Foto 2027，版本号 5.0.2。',
    metaDescription:
      'Excire Foto 评测：据开发商称，AI 搜索和文字识别在本地运行的 Windows 和 Mac 照片管理软件。一次性购买，提供 14 天试用。',
    twitterDescription:
      'Excire Foto 评测：一款据称 AI 搜索和选片在本地运行的 Windows/Mac 一次性购买照片管理软件。系统要求、激活、隐私，以及为何带有停止更新警告。',
    audience:
      '使用 Windows 或 Mac、希望在不把照片库上传到云服务的前提下使用 AI 搜索和选片的摄影师，并且需要了解资料来源确认了什么、激活涉及什么，以及产品是否仍在更新。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Excire Foto 评测',
    targetKeywords: [
      'excire foto 评测',
      'excire foto 2027',
      '本地 ai 照片管理',
      '离线人脸识别照片整理',
      'ai 选片软件',
      'lightroom 替代 照片搜索',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**警告：Excire Foto 2027（版本 5.0.2）的最新安装程序日期为 2026 年 7 月 15 日，且 Excire 未发布更新日志，该产品已超过三个月没有可见更新，可能已无人维护——依赖它之前请先核实。** **Excire Foto 是适用于 Windows 11 和 macOS 12 及更高版本的闭源照片与视频管理软件，据 Excire 称，它在本地用 AI 搜索、人物搜索、文字识别和选片功能分析你的照片库。** 它是一次性购买，提供 14 天试用，需要 Excire 账户和激活码。',
    quickAnswerTop: {
      zh: {
        question: 'Excire Foto 会把照片保留在你自己的电脑上吗？',
        answer:
          '据 Excire 称，是的：其产品页写着“Everything runs locally, your photos stay on your computer”，并称不会向第三方发送数据。激活需要 Excire 账户和激活码，云端共享是另一项可选功能，Excire 没有说明激活后应用能否离线运行。PromptQuorum 未检查网络流量。',
        bullets: [
          '闭源，一次性购买，无订阅；商店页面未显示价格，Excire 的发布文章给出的标价为 $249。',
          'Windows 11（x86，64 位）和 macOS 12 及更高版本，支持 Apple silicon 与 Intel；内存最低 8 GB，推荐 16 GB。',
          '功能：自由文本搜索、人物搜索、场景与物体识别、文字识别、自动关键词、重复项搜索和选片。',
          '14 天试用，无需支付方式；新的大版本为有折扣的付费升级。',
          '最新安装程序日期为 2026 年 7 月 15 日：适用停止更新警告。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Excire Foto 是什么？', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto 是适用于 Windows 和 Mac 的付费闭源桌面应用，据开发商称，它按内容搜索照片、归并人物、读取图片中的文字并给照片打分，全部在你自己的电脑上完成。',
          },
          {
            type: 'plain-terms',
            text: '安装后指定照片文件夹，让它分析一次，然后输入画面里有什么即可搜索；Excire 称不会上传任何内容，但激活需要 Excire 账户。',
          },
        ],
        items: [
          '维护情况：excire.com 上 5.0.2 版本的安装程序最后修改于 2026 年 7 月 15 日，且没有更新日志，因此适用停止更新警告。',
          '开发商：位于德国吕贝克的 Pattern Recognition Company GmbH，以 Excire 名义运营；产品于 2026 年 6 月 16 日以 Excire Foto 2027 发布。',
          '安装：Windows 或 macOS 的常规安装程序，然后用 Excire 账户和激活码激活，或使用 14 天试用。',
          '费用：一次性购买；Excire 的发布文章给出 $249，大版本为有折扣的付费升级。',
          '范围：带 AI 搜索和选片功能的照片与视频管理软件，没有聊天或语言模型助手。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '停止更新警告：5.0.2 版本的安装程序日期为 2026 年 7 月 15 日，Excire 未发布版本说明，该应用已超过三个月没有可见更新。它可能已无人维护；购买前请确认它能在你的操作系统上运行。',
          },
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 28 日核对的 Excire 官网、商店、试用页面、支持文章和隐私声明。PromptQuorum 未安装 Excire Foto，因此未评估搜索质量、速度和准确度。',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'Excire Foto 是什么？',
        content: [
          '**Excire Foto 是适用于 Windows 和 macOS 的独立照片与视频管理程序，为本地照片库增加 AI 搜索和选片工具。** Excire 称一切都在你的电脑上运行，程序不会向第三方发送数据。Excire Foto 2027 于 2026 年 6 月 15 日公布，自 2026 年 6 月 16 日起可用。',
          '开发商是位于吕贝克的 Pattern Recognition Company GmbH。Excire 还销售 Excire Search（Adobe Lightroom Classic 的独立插件）和面向 Windows 11 的订阅制 Excire Foto Office Edition；本评测针对面向个人用户的 Excire Foto 2027。Excire 的新闻页列有日期为 2026 年 4 月 17 日的 TIPA World Award 条目和 2026 年 9 月 18 日的 EISA 奖条目；PromptQuorum 未向颁奖机构核实这些奖项。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Excire Foto 通过适用于 Windows 和 macOS 的安装程序安装；之后用 Excire 账户登录，并用激活码激活，或开始 14 天试用。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '产品页', '获取方式': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { '选项': '免费试用', '获取方式': '[14 天试用](https://excire.com/en/trial/)，无需支付方式' },
          { '选项': '购买', '获取方式': '[Excire 商店](https://excire.com/en/shop/)：一次性购买；页面未显示价格' },
          { '选项': 'Windows', '获取方式': '适用于 Windows 11 的 .exe 安装程序，链接见[下载文章](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)' },
          { '选项': 'Mac', '获取方式': 'Apple silicon 与 Intel 各有独立的 .dmg 下载，见同一篇下载文章' },
          { '选项': '隐私声明', '获取方式': '[Excire 隐私声明](https://excire.com/en/datenschutzerklaerung/)：涵盖网站，不涵盖应用内行为' },
          { '选项': '源代码', '获取方式': '无：专有软件' },
        ],
        note: '评测版本：Excire Foto 2027，版本号 5.0.2。发布文章给出常规价格 $249，以及面向新客户的限时推出价 $219；商店页面未显示价格，请在结账时确认当前价格。Excire Foto 2025 及更早版本仍在商店中列出。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**Excire 列出 Windows 11 或 macOS 12 及更高版本、支持 AVX 的 64 位处理器，以及至少 8 GB 内存，推荐 16 GB 或更多。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': 'macOS 12 及更高版本，或 Windows 11（x86，64 位）；商店页称未针对 Snapdragon/ARM 版 Windows 优化' },
          { '项目': 'Mac 处理器', '来源说明': 'Apple silicon 与 Intel Mac 提供各自独立的下载' },
          { '项目': '处理器', '来源说明': '支持 AVX 的多核 64 位 CPU；不支持较旧的 AMD Phenom II/Athlon II 和 Intel Core 2 Duo' },
          { '项目': '内存', '来源说明': '最低 8 GB，推荐 16 GB 或更多' },
          { '项目': '磁盘空间', '来源说明': '数据库约每 10 万张照片 900 MB，含 RAW 的最高画质预览约 25 GB' },
          { '项目': 'GPU', '来源说明': '未列出 GPU 要求' },
          { '项目': 'Windows 上的 HEIC', '来源说明': 'HEIC 文件需要 Microsoft 的 HEIF 和 HEVC 扩展才能显示' },
        ],
        note: '这些最低要求来自 Excire 的商店和产品页面；PromptQuorum 未在任何硬件上测量分析时间或内存占用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据 Excire 的产品页、试用页和下载页；PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '下载安装程序',
            whyItMatters: '从 Excire 的下载文章中获取 Windows 的 .exe，或 Apple silicon 或 Intel 的 .dmg，然后运行安装程序或挂载磁盘映像。',
          },
          {
            title: '创建账户并激活',
            whyItMatters: 'Excire 称需要 Excire 用户账户，软件必须用激活码激活一次；试用为 14 天，无需支付方式。',
          },
          {
            title: '先备份，再添加文件夹',
            whyItMatters: 'Excire 建议先备份现有数据库，因为迁移到 5.x 版本的数据库无法被旧版本打开。',
          },
          {
            title: '等待分析完成',
            whyItMatters: '照片需先经过分析，内容搜索才能工作；Excire 称要使用新的文字搜索，现有照片需要重新分析。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自 Excire 的产品页、发布文章或版本对比；PromptQuorum 均未测试。**',
        ],
        items: [
          '**搜索。** 自由文本内容搜索、相似图片搜索、人物搜索、场景与物体识别，以及合并搜索与筛选的栏。',
          '**文字识别。** Excire Foto 2027 读取图片中的文字，例如招牌和文档，并在预览中高亮匹配项。',
          '**关键词与重复项。** 照片和视频的自动关键词，以及重复项搜索。',
          '**选片。** 清晰度检查、智能选择、用于比较的对比视图、3×3 网格和对焦峰值。',
          '**照片库。** 收藏集、评分、颜色标签、旗标、元数据编辑、世界地图视图、时间线图和 RAW 支持。',
          '**共享。** 通过 Dropbox、Google Drive、Microsoft OneDrive 和 Nextcloud 共享收藏集。',
        ],
        note: 'Excire 的版本对比把文字识别、地图视图和时间线图列为 Excire Foto 2027 的新功能，2025 和 2024 版本中没有。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**这里的 AI 以图像为基础：它识别照片中的内容、人脸和文字，便于搜索与挑选；资料中没有描述聊天助手或语言模型。**',
        ],
        items: [
          '**内容搜索。** 输入画面里有什么，程序就找出匹配的照片；Excire 没有说明背后使用了哪些模型。',
          '**人物。** 检测并归并人脸，便于按人物搜索和命名，并在保存元数据时把人名写入文件。',
          '**图片中的文字。** 2027 版新增；现有照片需要重新分析后，其中的文字才能被搜索。',
          '**运行位置。** Excire 称所有处理都在你的电脑上本地完成、不依赖云，照片不会为分析而上传。',
        ],
        note: '以上是 Excire 自己的说法。PromptQuorum 未测试搜索相关性、人脸归并准确度、其他语言的文字识别或速度。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**Excire 产品页写着“Everything runs locally, your photos stay on your computer”和“Excire Foto does not send any data to external parties”。** 在产品常见问题中，Excire 对“照片是否会上传分析”回答“No”，并称不使用云方案。',
          '据资料，有三项会与外部发生联系。激活需要 Excire 用户账户和激活码；网站隐私声明称激活码由服务商 10Duke 生成，注册时会保存姓名、电子邮件地址、密码、硬件标识符、产品名称和时间戳。结账通过 FastSpring 进行。通过 Dropbox、Google Drive、OneDrive 或 Nextcloud 共享时，会在你使用该功能时把共享的照片发送到这些服务。该隐私声明涵盖网站，没有描述更新检查、崩溃报告或激活后程序的联网行为。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是厂商的声明，不是审计结果。Excire 没有说明激活后程序能否完全离线运行，PromptQuorum 也未检查网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有大型本地照片库的摄影师**：想按内容、人物和文字搜索，又不想上传到云服务。',
          '**不喜欢订阅的人**：偏好一次性购买，并能接受付费的大版本升级。',
          '**需要筛选大量相似照片的用户**：想要清晰度检查和对比视图。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**维护情况。** 5.0.2 的安装程序日期为 2026 年 7 月 15 日，且没有更新日志，尚不清楚是否还有后续更新计划。',
          '**AI 质量。** 搜索相关性、人脸归并、文字识别和速度均未测试。',
          '**离线使用。** 据 Excire 的[激活文章](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase)，激活码只需输入一次，之后登录 Excire 账户（并保持登录）即可激活软件；Excire 没有说明这在没有互联网连接时能否工作。',
          '**价格。** 商店页面未显示价格；数字来自 Excire 的发布文章，可能已变动。',
          '**语言与 GPU。** 所读资料中未列出应用的界面语言和 GPU 带来的好处。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中有三款带评测的照片库工具，它们都标注 AGPL-3.0 许可证，与闭源的 Excire Foto 不同。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Immich](/zh/power-local-llm/immich-review)', '平台': '服务器（Docker）、手机应用、浏览器', '价格 / 许可证': '免费 / AGPL-3.0', '主要区别': '带手机备份的自托管服务器；需用 Docker 部署，开源' },
          { '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)', '平台': '服务器（Docker）、浏览器', '价格 / 许可证': 'Community 版免费 / AGPL-3.0', '主要区别': '内置 AI 标签的自托管网页应用，不是桌面程序' },
          { '应用': '[Ente Photos](/zh/power-local-llm/ente-photos-review)', '平台': 'iOS、Android、桌面、网页', '价格 / 许可证': '10 GB 免费，另有付费方案 / AGPL-3.0', '主要区别': '带设备端 AI 的加密云存储；不是本地照片库管理软件' },
        ],
        note: '请在各应用自己的页面确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Excire Foto 是本地大语言模型吗？',
            a: '不是。资料描述的是用于照片搜索的图像、人脸和文字识别，没有提到聊天功能或语言模型。',
          },
          {
            q: 'Excire Foto 能离线使用吗？',
            a: 'Excire 称处理在你的电脑上本地运行，但也称激活软件需要 Excire 账户和激活码；激活后能否在没有互联网的情况下运行，资料中没有说明。',
          },
          {
            q: 'Excire Foto 多少钱？',
            a: '商店页面未显示价格。Excire 2026 年 6 月的发布文章给出常规价格 $249 和限时推出价 $219；试用免费 14 天。',
          },
          {
            q: '更新需要付费吗？',
            a: '据 Excire 称，错误修复和小幅改进免费，包含重大改进的升级需要付费，现有客户可享受大幅折扣。',
          },
          {
            q: '购买前可以先试用吗？',
            a: '可以：Excire 为 Windows 或 Mac 提供 14 天试用，并称无需支付方式。试用页面没有列出功能限制。',
          },
          {
            q: '这个项目还在维护吗？',
            a: '不确定。5.0.2 版本的安装程序最后修改于 2026 年 7 月 15 日，Excire 未发布更新日志；请把它视为可能无人维护，购买前先查看支持网站。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '据开发商称，Excire Foto 在你自己的电脑上提供 AI 搜索、人物搜索、文字识别和选片功能，一次性购买并提供 14 天试用。另一方面，它是闭源的，必须有 Excire 账户和激活码，激活后的离线行为未说明，大版本为付费升级，商店页面未显示价格，最新安装程序日期为 2026 年 7 月 15 日，因此触发停止更新警告。它适合重视本地、无订阅工具并会先试用的 Windows 11 和 macOS 摄影师；需要持续维护、开源或自托管方案的人应另寻他处。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Excire Foto 产品页](https://excire.com/en/excire-foto/) — 功能、本地处理说明、激活与升级政策，2026 年 10 月 28 日核对。',
          '[Excire 商店](https://excire.com/en/shop/) — 系统要求与购买方式，2026 年 10 月 28 日核对。',
          '[Excire 试用页面](https://excire.com/en/trial/) — 14 天试用条款，2026 年 10 月 28 日核对。',
          '[Excire Foto 2027 发布文章](https://excire.com/en/excire-foto-2027-is-here/) — 发布日期、新功能和标价，发布于 2026 年 6 月 15 日。',
          '[Excire 新闻](https://excire.com/en/news/) — 奖项条目，2026 年 10 月 28 日核对。',
          '[Excire 支持下载文章](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — 5.0.2 版本与安装程序，2026 年 10 月 28 日核对。',
          '[Excire 隐私声明](https://excire.com/en/datenschutzerklaerung/) — 网站数据处理、激活服务商与结账，2026 年 10 月 28 日核对。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Immich 评测](/zh/power-local-llm/immich-review) — 带手机备份和智能搜索的自托管照片库。',
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 另一款内置 AI 标签的自托管照片库。',
          '[Ente Photos 评测](/zh/power-local-llm/ente-photos-review) — 带设备端人脸与自然语言搜索的加密照片备份。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },

  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/excire-foto-review-hero-ko.webp',
    title: 'Excire Foto 리뷰: Windows·Mac용 로컬 AI 사진 관리 프로그램',
    seoTitle: 'Excire Foto 리뷰: 로컬 AI 사진 관리 (Win/Mac)',
    intro:
      'Excire Foto는 Windows와 macOS용 비공개 소스 사진·동영상 관리 프로그램으로, 독일 개발사에 따르면 AI 검색, 인물 검색, 텍스트 인식, 사진 선별 기능이 사용자의 컴퓨터에서 실행됩니다. 일회성 구매로 판매되며 Excire 계정과 활성화 코드가 필요합니다. 이 리뷰는 2026년 10월 28일에 확인한 Excire의 웹사이트, 상점, 체험판 페이지, 지원 문서, 개인정보 처리방침을 반영하며, 현재 버전은 Excire Foto 2027(버전 5.0.2)입니다.',
    metaDescription:
      'Excire Foto 리뷰: 개발사에 따르면 AI 검색과 텍스트 인식이 로컬에서 실행되는 Windows·Mac용 사진 관리 프로그램. 일회성 구매, 14일 체험판.',
    twitterDescription:
      'Excire Foto 리뷰: AI 검색과 선별이 로컬에서 실행된다는 Windows·Mac용 일회성 구매 사진 관리 프로그램. 요구 사항, 활성화, 개인정보, 업데이트 중단 경고.',
    audience:
      '라이브러리를 클라우드에 올리지 않고 AI 검색과 사진 선별을 쓰고 싶은 Windows·Mac 사용 사진가 중, 출처가 확인한 내용과 활성화 과정, 그리고 제품이 아직 업데이트되는지를 알아야 하는 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Excire Foto 리뷰',
    targetKeywords: [
      'excire foto 리뷰',
      'excire foto 2027',
      '로컬 ai 사진 관리',
      '오프라인 얼굴 인식 사진 정리',
      'ai 사진 선별 소프트웨어',
      'lightroom 대안 사진 검색',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon'],
    leadAnswerBlock:
      '**경고: Excire Foto 2027(버전 5.0.2)의 최신 설치 파일은 2026년 7월 15일자이며 Excire는 변경 내역을 공개하지 않습니다. 3개월 넘게 업데이트가 확인되지 않아 유지보수가 중단되었을 수 있으니, 의존하기 전에 확인하십시오.** **Excire Foto는 Windows 11과 macOS 12 이상용 비공개 소스 사진·동영상 관리 프로그램으로, Excire에 따르면 AI 검색, 인물 검색, 텍스트 인식, 사진 선별로 라이브러리를 로컬에서 분석합니다.** 일회성 구매이며 14일 체험판이 있고, Excire 계정과 활성화 코드가 필요합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Excire Foto는 사진을 내 컴퓨터 안에만 보관합니까?',
        answer:
          'Excire에 따르면 그렇습니다. 제품 페이지에 "Everything runs locally, your photos stay on your computer"라고 적혀 있고 외부에 데이터를 보내지 않는다고 합니다. 활성화에는 Excire 계정과 코드가 필요하고, 클라우드 공유는 별도의 선택 기능이며, 활성화 후 오프라인으로 동작하는지는 Excire가 밝히지 않습니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '비공개 소스, 구독 없는 일회성 구매입니다. 상점 페이지에는 가격이 없고, Excire의 출시 안내에는 정가 $249가 적혀 있습니다.',
          'Windows 11(x86, 64비트)과 macOS 12 이상(Apple silicon·Intel), 메모리 최소 8 GB, 권장 16 GB입니다.',
          '기능: 자유 텍스트 검색, 인물 검색, 장면·객체 인식, 텍스트 인식, 자동 키워드, 중복 검색, 사진 선별.',
          '결제 수단 없이 14일 체험할 수 있으며, 새 메이저 버전은 할인이 적용되는 유료 업그레이드입니다.',
          '최신 설치 파일이 2026년 7월 15일자이므로 업데이트 중단 경고가 적용됩니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Excire Foto란?', anchor: 'what-is-excire-foto' },
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
            text: 'Excire Foto는 Windows와 Mac용 유료 비공개 소스 데스크톱 앱으로, 개발사에 따르면 사진을 내용으로 검색하고 인물을 묶고 이미지 속 글자를 읽고 사진을 평가하는 작업을 모두 내 컴퓨터에서 처리합니다.',
          },
          {
            type: 'plain-terms',
            text: '설치한 뒤 사진 폴더를 지정하고 한 번 분석하게 한 다음, 사진에 무엇이 있는지 입력해 검색합니다. Excire는 아무것도 업로드하지 않는다고 하지만 활성화에는 Excire 계정이 필요합니다.',
          },
        ],
        items: [
          '유지보수: excire.com의 버전 5.0.2 설치 파일은 2026년 7월 15일에 마지막으로 수정되었고 변경 내역이 없어, 업데이트 중단 경고가 적용됩니다.',
          '개발사: 독일 뤼베크의 Pattern Recognition Company GmbH이며 Excire라는 이름으로 활동합니다. 제품은 2026년 6월 16일 Excire Foto 2027로 출시되었습니다.',
          '설치: Windows 또는 macOS용 일반 설치 프로그램을 실행한 뒤 Excire 계정과 활성화 코드로 활성화하거나 14일 체험판을 사용합니다.',
          '비용: 일회성 구매입니다. Excire의 출시 안내에는 $249가 적혀 있고, 메이저 버전은 할인이 적용되는 유료 업그레이드입니다.',
          '범위: AI 검색과 사진 선별을 갖춘 사진·동영상 관리 프로그램이며 채팅이나 언어 모델 어시스턴트는 없습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '업데이트 중단 경고: 버전 5.0.2 설치 파일은 2026년 7월 15일자이고 Excire는 릴리스 노트를 공개하지 않아, 3개월 넘게 업데이트가 확인되지 않습니다. 유지보수가 중단되었을 수 있으니 구매 전에 사용하는 운영 체제에서 동작하는지 확인하십시오.',
          },
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 28일에 확인한 Excire의 웹사이트, 상점, 체험판 페이지, 지원 문서, 개인정보 처리방침에 근거합니다. PromptQuorum은 Excire Foto를 설치하지 않았으므로 검색 품질, 속도, 정확도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-excire-foto',
        title: 'Excire Foto란?',
        content: [
          '**Excire Foto는 Windows와 macOS용 독립 실행형 사진·동영상 관리 프로그램으로, 로컬 사진 라이브러리에 AI 검색과 선별 도구를 더합니다.** Excire는 모든 처리가 사용자의 컴퓨터에서 이루어지며 프로그램이 외부에 데이터를 보내지 않는다고 밝힙니다. Excire Foto 2027은 2026년 6월 15일에 발표되었고 2026년 6월 16일부터 구입할 수 있습니다.',
          '개발사는 뤼베크의 Pattern Recognition Company GmbH입니다. Excire는 Adobe Lightroom Classic용 별도 플러그인인 Excire Search와, Windows 11용 구독형 Excire Foto Office Edition도 판매합니다. 이 리뷰는 개인용 제품인 Excire Foto 2027을 다룹니다. Excire의 뉴스 페이지에는 2026년 4월 17일자 TIPA World Award 항목과 2026년 9월 18일자 EISA 어워드 항목이 있으나, PromptQuorum은 수여 기관에 이를 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Excire Foto는 Windows와 macOS용 설치 프로그램으로 설치합니다. 이후 Excire 계정으로 로그인해 코드로 활성화하거나 14일 체험판을 시작합니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '제품 페이지', '입수 방법': '[excire.com/en/excire-foto](https://excire.com/en/excire-foto/)' },
          { '옵션': '무료 체험', '입수 방법': '[14일 체험판](https://excire.com/en/trial/), 결제 수단 불필요' },
          { '옵션': '구매', '입수 방법': '[Excire 상점](https://excire.com/en/shop/): 일회성 구매, 페이지에 가격 표시 없음' },
          { '옵션': 'Windows', '입수 방법': 'Windows 11용 .exe 설치 파일, [다운로드 문서](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026)에 링크됨' },
          { '옵션': 'Mac', '입수 방법': 'Apple silicon용과 Intel용 .dmg가 따로 있으며 같은 다운로드 문서에 있음' },
          { '옵션': '개인정보', '입수 방법': '[Excire 개인정보 처리방침](https://excire.com/en/datenschutzerklaerung/): 웹사이트가 대상이며 앱 동작은 다루지 않음' },
          { '옵션': '소스 코드', '입수 방법': '없음: 독점 소프트웨어' },
        ],
        note: '확인한 버전: Excire Foto 2027, 버전 5.0.2. 출시 안내에는 정가 $249와 신규 고객 대상 기간 한정 도입가 $219가 적혀 있습니다. 상점 페이지에는 가격이 없으므로 결제 시 현재 가격을 확인하십시오. 가격은 미국 달러 기준 그대로이며 한국에서의 가격은 다를 수 있습니다. Excire Foto 2025 이전 버전도 상점에 남아 있습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**Excire는 Windows 11 또는 macOS 12 이상, AVX를 지원하는 64비트 프로세서, 최소 8 GB 메모리(권장 16 GB 이상)를 제시합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영 체제', '출처의 설명': 'macOS 12 이상 또는 Windows 11(x86, 64비트). 상점 페이지는 Snapdragon/ARM용 Windows에 최적화되지 않았다고 밝힘' },
          { '항목': 'Mac 프로세서', '출처의 설명': 'Apple silicon Mac과 Intel Mac용 다운로드가 따로 있음' },
          { '항목': '프로세서', '출처의 설명': 'AVX를 지원하는 멀티코어 64비트 CPU. 오래된 AMD Phenom II/Athlon II와 Intel Core 2 Duo는 지원되지 않음' },
          { '항목': '메모리', '출처의 설명': '최소 8 GB, 권장 16 GB 이상' },
          { '항목': '디스크 공간', '출처의 설명': '데이터베이스는 사진 10만 장당 약 900 MB, RAW 포함 최고 화질 미리보기는 약 25 GB' },
          { '항목': 'GPU', '출처의 설명': 'GPU 요구 사항은 제시되지 않음' },
          { '항목': 'Windows의 HEIC', '출처의 설명': 'HEIC 파일을 표시하려면 Microsoft HEIF·HEVC 확장이 필요함' },
        ],
        note: '이 최소 사양은 Excire의 상점과 제품 페이지에서 가져왔으며, PromptQuorum은 어떤 하드웨어에서도 분석 시간이나 메모리 사용량을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**이 단계는 Excire의 제품, 체험판, 다운로드 페이지를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치 파일 다운로드',
            whyItMatters: 'Excire의 다운로드 문서에서 Windows용 .exe 또는 Apple silicon용·Intel용 .dmg를 받아 설치 프로그램을 실행하거나 디스크 이미지를 마운트합니다.',
          },
          {
            title: '계정 만들기와 활성화',
            whyItMatters: 'Excire는 Excire 사용자 계정이 필요하고 소프트웨어를 활성화 코드로 한 번 활성화해야 한다고 밝힙니다. 체험판은 결제 수단 없이 14일 동안 사용할 수 있습니다.',
          },
          {
            title: '백업한 뒤 폴더 추가',
            whyItMatters: '버전 5.x로 이전한 데이터베이스는 이전 버전에서 열 수 없으므로, Excire는 기존 데이터베이스를 먼저 백업하라고 권합니다.',
          },
          {
            title: '분석이 끝날 때까지 기다리기',
            whyItMatters: '내용 검색이 동작하려면 사진을 먼저 분석해야 합니다. Excire에 따르면 새 텍스트 검색을 쓰려면 기존 사진을 다시 분석해야 합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 Excire의 제품 페이지, 출시 안내, 버전 비교에서 가져온 것이며 PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**검색.** 자유 텍스트 내용 검색, 유사 이미지 검색, 인물 검색, 장면·객체 인식, 검색과 필터를 합친 바.',
          '**텍스트 인식.** Excire Foto 2027은 간판이나 문서 같은 이미지 속 글자를 읽고 미리보기에서 일치하는 부분을 강조합니다.',
          '**키워드와 중복.** 사진과 동영상의 자동 키워드, 중복 검색.',
          '**선별.** 선명도 확인, 스마트 선택, 비교용 서베이 뷰, 3×3 격자, 포커스 피킹.',
          '**라이브러리.** 컬렉션, 별점, 색상 라벨, 플래그, 메타데이터 편집, 세계 지도 보기, 타임라인 그래프, RAW 지원.',
          '**공유.** Dropbox, Google Drive, Microsoft OneDrive, Nextcloud를 통한 컬렉션 공유.',
        ],
        note: 'Excire의 버전 비교는 텍스트 인식, 지도 보기, 타임라인 그래프를 Excire Foto 2027의 새 기능으로 보며 2025·2024 버전에는 없다고 표시합니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**AI는 이미지 기반입니다. 사진 속 내용, 얼굴, 글자를 인식해 검색과 선별을 돕고, 채팅 어시스턴트나 언어 모델은 설명되어 있지 않습니다.**',
        ],
        items: [
          '**내용 검색.** 사진에 무엇이 있는지 입력하면 프로그램이 일치하는 사진을 찾습니다. 어떤 모델을 쓰는지는 Excire가 밝히지 않습니다.',
          '**인물.** 얼굴을 찾아 묶어 인물을 검색하고 이름을 붙일 수 있으며, 메타데이터를 저장할 때 인물 이름을 파일에 기록할 수 있습니다.',
          '**이미지 속 글자.** 2027 버전의 새 기능이며, 글자를 검색하려면 기존 사진을 다시 분석해야 합니다.',
          '**실행 위치.** Excire는 모든 처리가 클라우드 의존 없이 컴퓨터에서 로컬로 이루어지며 사진을 분석용으로 업로드하지 않는다고 밝힙니다.',
        ],
        note: '이는 Excire 자체의 설명입니다. PromptQuorum은 검색 관련성, 얼굴 묶기 정확도, 다른 언어의 텍스트 인식, 속도를 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**Excire의 제품 페이지에는 "Everything runs locally, your photos stay on your computer"와 "Excire Foto does not send any data to external parties"라고 적혀 있습니다.** 제품 FAQ에서 Excire는 사진이 분석을 위해 업로드되느냐는 질문에 "No"라고 답하고 클라우드 솔루션을 쓰지 않는다고 밝힙니다.',
          '출처에 따르면 외부로 나가는 것은 세 가지입니다. 활성화에는 Excire 사용자 계정과 활성화 코드가 필요하며, 웹사이트 개인정보 처리방침은 활성화 코드를 제공업체 10Duke가 생성하고 가입 시 이름, 이메일 주소, 비밀번호, 하드웨어 식별자, 제품 이름, 타임스탬프가 저장된다고 밝힙니다. 결제는 FastSpring을 통해 이루어집니다. Dropbox, Google Drive, OneDrive, Nextcloud를 통한 공유는 사용할 때 공유한 사진을 해당 서비스로 보냅니다. 이 개인정보 처리방침은 웹사이트를 다루며, 업데이트 확인, 충돌 보고서, 활성화 후 프로그램의 네트워크 동작은 설명하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 표명이며 감사 결과가 아닙니다. Excire는 활성화 후 프로그램이 완전히 오프라인으로 동작하는지 밝히지 않으며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**대규모 로컬 라이브러리를 가진 사진가**: 클라우드에 올리지 않고 내용, 인물, 글자로 검색하고 싶은 분.',
          '**구독을 피하고 싶은 분**: 일회성 구매를 선호하고 유료 메이저 업그레이드를 받아들일 수 있는 분.',
          '**비슷한 사진을 많이 골라내는 분**: 선명도 확인과 비교 보기가 필요한 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**유지보수.** 5.0.2 설치 파일은 2026년 7월 15일자이고 변경 내역이 없어, 추가 업데이트 계획이 있는지 알 수 없습니다.',
          '**AI 품질.** 검색 관련성, 얼굴 묶기, 텍스트 인식, 속도는 테스트하지 않았습니다.',
          '**오프라인 사용.** Excire의 [활성화 문서](https://support.excire.com/portal/en/kb/articles/how-do-i-activate-my-excire-software-after-purchase)에 따르면 코드는 한 번만 입력하며, 이후에는 Excire 계정에 로그인(로그인 상태 유지)하면 소프트웨어가 활성화됩니다. 인터넷 연결 없이 이것이 동작하는지는 밝히지 않습니다.',
          '**가격.** 상점 페이지에는 가격이 없으며, 수치는 Excire의 출시 안내에서 가져온 것이라 바뀌었을 수 있습니다.',
          '**언어와 GPU.** 앱의 표시 언어와 GPU 이점은 읽은 출처에 나와 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 리뷰가 있는 사진 라이브러리 도구가 세 가지 있으며, 비공개 소스인 Excire Foto와 달리 모두 AGPL-3.0 라이선스를 표기합니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Immich](/ko/power-local-llm/immich-review)', '플랫폼': '서버(Docker), 모바일 앱, 브라우저', '가격 / 라이선스': '무료 / AGPL-3.0', '핵심 차이점': '휴대폰 백업이 있는 셀프 호스팅 서버. Docker로 설치하며 오픈소스' },
          { '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)', '플랫폼': '서버(Docker), 브라우저', '가격 / 라이선스': 'Community 무료 / AGPL-3.0', '핵심 차이점': 'AI 라벨을 내장한 셀프 호스팅 웹 앱이며 데스크톱 프로그램이 아님' },
          { '앱': '[Ente Photos](/ko/power-local-llm/ente-photos-review)', '플랫폼': 'iOS, Android, 데스크톱, 웹', '가격 / 라이선스': '10 GB 무료, 유료 요금제 / AGPL-3.0', '핵심 차이점': '기기 내 AI를 쓰는 암호화 클라우드 저장소이며 로컬 라이브러리 관리 프로그램이 아님' },
        ],
        note: '각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Excire Foto는 로컬 LLM입니까?',
            a: '아닙니다. 출처는 사진 검색을 위한 이미지, 얼굴, 텍스트 인식을 설명하며 채팅 기능이나 언어 모델은 언급하지 않습니다.',
          },
          {
            q: 'Excire Foto는 오프라인에서 동작합니까?',
            a: 'Excire는 처리가 컴퓨터에서 로컬로 이루어진다고 하면서, 소프트웨어를 활성화하려면 Excire 계정과 활성화 코드가 필요하다고도 밝힙니다. 활성화 후 인터넷 없이 동작하는지는 나와 있지 않습니다.',
          },
          {
            q: 'Excire Foto의 가격은 얼마입니까?',
            a: '상점 페이지에는 가격이 없습니다. Excire의 2026년 6월 출시 안내에는 정가 $249와 기간 한정 도입가 $219가 적혀 있으며, 체험판은 14일 동안 무료입니다. 가격은 미국 달러 기준 그대로이며 한국에서의 가격은 다를 수 있습니다.',
          },
          {
            q: '업데이트는 유료입니까?',
            a: 'Excire에 따르면 버그 수정과 소규모 개선은 무료이고, 큰 개선이 포함된 업그레이드는 유료이며 기존 고객에게는 상당한 할인이 적용됩니다.',
          },
          {
            q: '구매 전에 써 볼 수 있습니까?',
            a: '네. Excire는 Windows·Mac용 14일 체험판을 제공하며 결제 수단은 필요 없다고 밝힙니다. 체험판 페이지에는 기능 제한이 나와 있지 않습니다.',
          },
          {
            q: '프로젝트는 아직 유지보수되고 있습니까?',
            a: '불분명합니다. 버전 5.0.2 설치 파일은 2026년 7월 15일에 마지막으로 수정되었고 Excire는 변경 내역을 공개하지 않으므로, 유지보수가 중단되었을 수 있는 것으로 보고 구매 전에 지원 사이트를 확인하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Excire Foto는 개발사에 따르면 AI 검색, 인물 검색, 텍스트 인식, 사진 선별을 내 컴퓨터에서 일회성 구매와 14일 체험판으로 제공합니다. 반면 비공개 소스이고, Excire 계정과 활성화 코드가 필수이며, 활성화 후 오프라인 동작은 밝혀져 있지 않고, 메이저 버전은 유료 업그레이드이며, 상점 페이지에 가격이 없고, 최신 설치 파일이 2026년 7월 15일자여서 업데이트 중단 경고가 적용됩니다. 구독 없는 로컬 도구를 중시하고 먼저 체험판을 써 볼 Windows 11·macOS 사진가에게 적합하며, 꾸준히 유지보수되는 오픈소스나 셀프 호스팅 솔루션이 필요한 분은 다른 선택지를 찾아보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Excire Foto 제품 페이지](https://excire.com/en/excire-foto/) — 기능, 로컬 처리 설명, 활성화와 업그레이드 정책. 2026년 10월 28일 확인.',
          '[Excire 상점](https://excire.com/en/shop/) — 시스템 요구 사항과 구매 방식. 2026년 10월 28일 확인.',
          '[Excire 체험판 페이지](https://excire.com/en/trial/) — 14일 체험판 조건. 2026년 10월 28일 확인.',
          '[Excire Foto 2027 출시 안내](https://excire.com/en/excire-foto-2027-is-here/) — 출시일, 새 기능, 정가. 2026년 6월 15일 게시.',
          '[Excire 뉴스](https://excire.com/en/news/) — 수상 관련 항목. 2026년 10월 28일 확인.',
          '[Excire 지원 다운로드 문서](https://support.excire.com/portal/en/kb/articles/download-excire-foto-2027-16-6-2026) — 버전 5.0.2와 설치 파일. 2026년 10월 28일 확인.',
          '[Excire 개인정보 처리방침](https://excire.com/en/datenschutzerklaerung/) — 웹사이트 데이터 처리, 활성화 제공업체, 결제. 2026년 10월 28일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — 휴대폰 백업과 스마트 검색을 갖춘 셀프 호스팅 사진 라이브러리.',
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — AI 라벨을 내장한 또 다른 셀프 호스팅 사진 라이브러리.',
          '[Ente Photos 리뷰](/ko/power-local-llm/ente-photos-review) — 기기 내 얼굴 검색과 자연어 검색을 갖춘 암호화 사진 백업.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
