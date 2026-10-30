// Tonfotos Review: Local Face Recognition Photo and Video Archive Manager
// Slug: tonfotos-review
// Companion to: excire-foto-review, facet-review, photoprism-review
// Sources (all read 2026-10-30, no hands-on testing): tonfotos.com home page, FAQ, download page, privacy policy (published 11 September 2024), docs index and supported-formats reference,
// plus the installers themselves: macOS Intel tonfotos.dmg Info.plist = 1.17.1 (HTTP Last-Modified 28 Oct 2026), Linux tonfotos.deb control file = 1.17.0 (Last-Modified 21 Oct 2026); the Windows
// exe (Last-Modified 25 Sep 2026) and the Apple silicon dmg (15 Sep 2026) were not opened. The website shows the placeholder "Version 0.0.0" and publishes no changelog. The request came from the
// site owner (link from localhosted.com), not from the maker: no maker comment exists and there is no founder-review badge.
// Last upstream update 2026-10-28 (2 days before 2026-10-30) => stale warning OFF in all 9 locales.
// Prices: $59 Personal / $159 Family from the official home page (USD, perpetual); kept in USD in every locale, no local prices invented (checkout currency not checked). A third-party review page
// showed older $39/$99 figures and was ignored.
// Not stated by Tonfotos and NOT claimed: the free tier's people limit, system requirements, the face model, offline use after activation, whether crash reports contain photo or face data. No affiliate links.

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
    heroImage: '/images/tonfotos-review-hero-en.webp',
    title: 'Tonfotos Review: Local Face Recognition Photo Manager',
    seoTitle: 'Tonfotos Review: Photo Manager with Local Face Recognition',
    intro:
      'Tonfotos is a closed-source photo and video archive manager for Windows, macOS and Linux whose face recognition, according to its maker, runs on your own computer. It has a free tier and perpetual paid licences. This review reflects the Tonfotos website, documentation and privacy policy as checked on 30 October 2026, plus the installers themselves; the version reviewed is 1.17.1.',
    metaDescription:
      'Tonfotos review: photo manager for Windows, Mac and Linux with face recognition that, per its maker, runs locally. Free tier, perpetual licences.',
    twitterDescription:
      'Tonfotos review: a photo and video archive manager for Windows, macOS and Linux with duplicate removal, family trees and face recognition that runs locally, per its maker. Licences, privacy and open questions.',
    audience:
      'Families and hobbyists with large photo archives on Windows, macOS or Linux who want people tagged and duplicates removed without a cloud service, and who need to know what the sources confirm about data flow and licensing.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tonfotos review',
    targetKeywords: [
      'tonfotos review',
      'tonfotos face recognition',
      'photo manager with face recognition offline',
      'family photo archive software',
      'picasa alternative face recognition',
      'remove duplicate photos software',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos is a closed-source photo and video archive manager for Windows, macOS and Linux that, according to its maker, recognises faces with AI running locally on your computer.** It adds duplicate removal and a family tree, and it has a free tier plus perpetual paid licences instead of a subscription.',
    quickAnswerTop: {
      en: {
        question: 'Does Tonfotos keep your photos and face data on your own computer?',
        answer:
          'Per Tonfotos, yes for the photos: its FAQ says it "processes your photos right where they are and never sends them anywhere", and face recognition runs locally. The app still contacts the developer\'s server for update and license checks. PromptQuorum has not inspected network traffic.',
        bullets: [
          'Closed source, with no public repository; no subscription.',
          'Windows 10 and 11, macOS 10.15 or later (Intel and Apple silicon) and Linux (.deb and .rpm).',
          'Face workflow: faces are detected once per photo, then matched; you confirm every suggestion.',
          'Also: duplicate search, events and locations, albums and tags, and a family tree.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Tonfotos?', anchor: 'what-is-tonfotos' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Key Features', anchor: 'key-features' },
      { label: 'Where the AI Runs and Data Flow', anchor: 'privacy' },
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
            text: 'Tonfotos is a desktop photo and video archive manager that, per its maker, finds and groups faces on your own computer so you can tag people, remove duplicates and build a family tree.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, point it at your photo folders and tag a few faces; it then suggests the same people in other photos and you confirm each suggestion.',
          },
        ],
        items: [
          'Maker: Andrey Isaev, a private entrepreneur registered in Yerevan, Armenia, according to the privacy policy.',
          'Cost: a Free licence with no time limit but a cap on tagged people, plus two perpetual paid licences.',
          'Setup: ordinary installers for each operating system; no terminal is needed.',
          'Scope: photo and video archive management with face recognition; no chat assistant or language model is described.',
          'Maintenance: installers date from October 2026, but the website shows no version number or changelog.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Tonfotos website, documentation and privacy policy plus the installers, checked on 30 October 2026. PromptQuorum has not used Tonfotos on a real photo library, so recognition accuracy and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'What Is Tonfotos?',
        content: [
          '**Tonfotos is a photo and video archive manager for Windows, macOS and Linux that organises large family collections, removes duplicates, recognises faces and builds family trees.** The website says your files stay under your control, with no mandatory cloud storage. The version reviewed is 1.17.1, read from the macOS Intel installer.',
          'The software is published by Andrey Isaev, a private entrepreneur registered in Yerevan, Armenia, per the privacy policy; the site\'s copyright notice runs from 2021. A separate phone app, TonfotosSync, imports photos from iOS and Android; this review does not cover it.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Get It',
        content: [
          '**Tonfotos is a double-click installer for Windows, macOS and Linux, and the Free licence needs no payment.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Website', 'How to get it': '[tonfotos.com](https://tonfotos.com/)' },
          { 'Option': 'Windows', 'How to get it': 'tonfotos.exe for Windows 10 and 11 (x64), from the [download page](https://tonfotos.com/download.html)' },
          { 'Option': 'Mac', 'How to get it': 'tonfotos.dmg, with separate Intel and Apple silicon builds, for macOS 10.15 or later' },
          { 'Option': 'Linux', 'How to get it': '.deb (Debian, Ubuntu) or .rpm (Red Hat, Fedora, SUSE) for x64; updates come through the Tonfotos apt or yum repository' },
          { 'Option': 'Free licence', 'How to get it': '$0, no time limit, full functionality, limited number of tagged people, anonymous usage statistics' },
          { 'Option': 'Personal licence', 'How to get it': '$59, perpetual, one user or device, unlimited tagged people, statistics can be disabled' },
          { 'Option': 'Family licence', 'How to get it': '$159, perpetual, up to five users or devices, person information synced between users' },
          { 'Option': 'Phone import', 'How to get it': 'TonfotosSync for [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) and [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'Option': 'Privacy policy', 'How to get it': '[Tonfotos privacy policy](https://tonfotos.com/legal/privacy-policy/), published 11 September 2024' },
          { 'Option': 'Source code', 'How to get it': 'None: proprietary software' },
        ],
        note: 'Version reviewed: 1.17.1 (macOS Intel installer, file dated 28 October 2026); the download page itself shows the placeholder "Version 0.0.0". Prices are in US dollars as listed on the home page, and PromptQuorum did not check which currency checkout shows. On Windows, GPU face recognition needs a CUDA-capable graphics card and a separate plugin installer (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the Tonfotos documentation; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**People.** Faces are detected once per photo and then matched; the program learns from the faces you tag, you confirm every suggestion, and rejecting wrong ones refines later suggestions. Faces it misses can be added by hand.',
          '**Family tree.** Relationships between people can be added to build a family tree, and face data can be stored in file metadata.',
          '**Duplicates.** A duplicate search; the documentation advises removing duplicates before tagging or editing metadata.',
          '**Library.** Events and locations, albums and tags, filters and search, metadata editing and migration from Picasa.',
          '**Formats.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF (macOS and Windows only), many RAW formats and common video formats such as MP4, MOV and MKV; some unusual video codecs may not preview.',
          '**Extras.** An image and video viewer, a JPG converter that compresses images, a slideshow and a Telegram downloader.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Where the AI Runs and Data Flow',
        content: [
          '**Tonfotos says face recognition is "powered by artificial intelligence running locally on your machine" and that it "processes your photos right where they are and never sends them anywhere".** The FAQ adds that the developers cannot access your photos. The model is not named.',
          'Three things reach outside according to the sources. The app regularly connects to the developer\'s server to check for updates and manage the license. Anonymous usage statistics may be collected with your permission; the home page lists them as part of the Free licence, and paid licences can switch off statistics and automatic updates in Preferences > Advanced. The privacy policy also says crash reports can include the names of tagged people, file and folder names, tags and albums, and that photos leave the device only if you send them for support.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the vendor\'s declarations, not audit results, and PromptQuorum has not inspected network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Family archivists** with large collections who want people tagged and a family tree.',
          '**Mixed-platform households** that want one app on Windows, macOS and Linux.',
          '**People who dislike subscriptions** and accept a perpetual licence.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Version and maintenance.** The website shows "Version 0.0.0" and no changelog. PromptQuorum read 1.17.1 from the macOS Intel installer and 1.17.0 from the Linux package, and did not open the Windows installer (file dated 25 September 2026) or the Apple silicon one (15 September 2026).',
          '**Recognition quality.** Accuracy, speed and any GPU benefit were not tested.',
          '**Free-tier limit.** The number of people the Free licence allows is not stated.',
          '**Requirements.** No minimum RAM, disk space or processor is published.',
          '**Offline use.** Update and license checks go through the developer\'s server; whether the app works fully offline is not stated.',
          '**Crash reports.** The policy lists tagged names and file names but does not say whether photo content or face data is included.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has three reviewed tools that manage or score a local photo library; none is a drop-in match.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Excire Foto](/power-local-llm/excire-foto-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Paid one-time / closed source', 'Key difference': 'Adds AI content search and text recognition; requires an Excire account' },
          { 'App': '[Facet](/power-local-llm/facet-review)', 'Platforms': 'Docker or script, browser', 'Price / license': 'Free / MIT', 'Key difference': 'Scores and culls photos and groups faces; developer-style setup, no installer' },
          { 'App': '[PhotoPrism](/power-local-llm/photoprism-review)', 'Platforms': 'Server (Docker), browser', 'Price / license': 'Free Community / AGPL-3.0', 'Key difference': 'Self-hosted web library with built-in AI labels, not a desktop program' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Tonfotos a local LLM?',
            a: 'No. The sources describe face recognition and photo organisation, and they name no chat feature or language model.',
          },
          {
            q: 'Can I move my faces over from Picasa?',
            a: 'The documentation has a Picasa migration section, so import is a documented path; PromptQuorum did not test it.',
          },
          {
            q: 'Does it run on Apple silicon Macs?',
            a: 'Yes: the download page offers a separate Apple silicon build next to the Intel one.',
          },
          {
            q: 'Does the Family licence share my photos?',
            a: 'The home page says the Family licence syncs person information between users; it does not say photos are shared.',
          },
          {
            q: 'How do photos get from my phone?',
            a: 'Through the TonfotosSync phone app, or over a USB cable on Windows, according to the documentation.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Tonfotos offers face recognition, duplicate removal and a family tree for large photo archives on Windows, macOS and Linux, with a free tier and perpetual licences, and its maker says the recognition runs locally. Against that, it is closed source, the Free licence caps the number of tagged people, the app contacts the developer\'s server for update and license checks, crash reports can include tagged names, and the website shows no real version number, changelog or system requirements. It suits people who want a local family-photo archive without a subscription and will start with the Free licence; anyone who needs open source or audited data flow should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Tonfotos home page](https://tonfotos.com/) — features, licences and prices, checked 30 October 2026.',
          '[Tonfotos FAQ](https://tonfotos.com/docs/faq/) — local processing and network statements, checked 30 October 2026.',
          '[Tonfotos download page](https://tonfotos.com/download.html) — installers, platforms and CUDA plugin, checked 30 October 2026.',
          '[Tonfotos privacy policy](https://tonfotos.com/legal/privacy-policy/) — data collected, crash reports and controller, published 11 September 2024.',
          '[Tonfotos documentation](https://tonfotos.com/docs/) — features and supported formats, checked 30 October 2026.',
          '[macOS Intel installer](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — version 1.17.1 read from the app bundle, file dated 28 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Excire Foto Review](/power-local-llm/excire-foto-review) — a paid Windows and Mac photo manager with local AI search.',
          '[Facet Review](/power-local-llm/facet-review) — a free, self-hosted photo scoring and culling tool.',
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — a self-hosted photo library with built-in AI labels.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Tonfotos Review: Local Face Recognition Photo Manager',
      description:
        'Tonfotos review: a closed-source photo and video archive manager for Windows, macOS and Linux with local face recognition, duplicate removal and family trees. Licences, privacy and open questions.',
      url: 'https://www.promptquorum.com/power-local-llm/tonfotos-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Families and hobbyists evaluating a photo archive manager with local face recognition' },
      about: [
        { '@type': 'Thing', name: 'Tonfotos' },
        { '@type': 'Thing', name: 'Photo management software' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Duplicate photo removal' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/tonfotos-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Tonfotos Review', item: 'https://www.promptquorum.com/power-local-llm/tonfotos-review' },
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
    heroImage: '/images/tonfotos-review-hero-de.webp',
    title: 'Tonfotos-Rezension: Fotomanager mit lokaler Gesichtserkennung',
    seoTitle: 'Tonfotos-Rezension: Fotomanager, lokale Gesichtserkennung',
    intro:
      'Tonfotos ist ein nicht quelloffener Foto- und Video-Archivmanager für Windows, macOS und Linux, dessen Gesichtserkennung laut Hersteller auf Ihrem eigenen Computer läuft. Es gibt eine kostenlose Version und unbefristete Bezahllizenzen. Diese Rezension gibt Website, Dokumentation und Datenschutzerklärung von Tonfotos so wieder, wie sie am 30. Oktober 2026 geprüft wurden, dazu die Installationsdateien selbst; geprüft wurde Version 1.17.1.',
    metaDescription:
      'Tonfotos-Rezension: Fotomanager für Windows, Mac und Linux, dessen Gesichtserkennung laut Hersteller lokal läuft. Gratis-Version, unbefristete Lizenzen.',
    twitterDescription:
      'Tonfotos-Rezension: ein Foto- und Video-Archivmanager für Windows, macOS und Linux mit Duplikatentfernung, Stammbaum und Gesichtserkennung, die laut Hersteller lokal läuft. Lizenzen, Datenschutz und offene Fragen.',
    audience:
      'Familien und Hobbyfotografen mit großen Fotoarchiven unter Windows, macOS oder Linux, die Personen taggen und Duplikate entfernen wollen, ohne einen Cloud-Dienst zu nutzen, und die wissen müssen, was die Quellen zu Datenfluss und Lizenzierung bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tonfotos Rezension',
    targetKeywords: [
      'tonfotos rezension',
      'tonfotos gesichtserkennung',
      'fotomanager mit gesichtserkennung offline',
      'familienarchiv fotos software',
      'picasa alternative gesichtserkennung',
      'doppelte fotos entfernen software',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos ist ein nicht quelloffener Foto- und Video-Archivmanager für Windows, macOS und Linux, der Gesichter laut Hersteller mit KI erkennt, die lokal auf Ihrem Computer läuft.** Er ergänzt Duplikatentfernung und einen Stammbaum und bietet eine kostenlose Version sowie unbefristete Bezahllizenzen statt eines Abos.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Fotos und Gesichtsdaten bei Tonfotos auf Ihrem eigenen Computer?',
        answer:
          'Laut Tonfotos gilt das für die Fotos: Die FAQ sagt, es „processes your photos right where they are and never sends them anywhere“, und die Gesichtserkennung läuft lokal. Die App kontaktiert dennoch den Server des Entwicklers für Update- und Lizenzprüfungen. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
        bullets: [
          'Nicht quelloffen, ohne öffentliches Repository; kein Abo.',
          'Windows 10 und 11, macOS 10.15 oder neuer (Intel und Apple Silicon) sowie Linux (.deb und .rpm).',
          'Ablauf bei Gesichtern: Gesichter werden einmal pro Foto erkannt und dann zugeordnet; Sie bestätigen jeden Vorschlag.',
          'Dazu: Duplikatsuche, Ereignisse und Orte, Alben und Tags sowie ein Stammbaum.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Tonfotos?', anchor: 'what-is-tonfotos' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Wichtige Funktionen', anchor: 'key-features' },
      { label: 'Wo die KI läuft und Datenfluss', anchor: 'privacy' },
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
            text: 'Tonfotos ist ein Desktop-Archivmanager für Fotos und Videos, der Gesichter laut Hersteller auf Ihrem eigenen Computer findet und gruppiert, damit Sie Personen taggen, Duplikate entfernen und einen Stammbaum anlegen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren das Programm, verweisen es auf Ihre Fotoordner und taggen einige Gesichter; danach schlägt es dieselben Personen in weiteren Fotos vor, und Sie bestätigen jeden Vorschlag.',
          },
        ],
        items: [
          'Hersteller: Andrey Isaev, laut Datenschutzerklärung als Einzelunternehmer in Eriwan, Armenien, registriert.',
          'Kosten: eine kostenlose Lizenz ohne Zeitlimit, aber mit Obergrenze für getaggte Personen, dazu zwei unbefristete Bezahllizenzen.',
          'Einrichtung: gewöhnliche Installationsprogramme für jedes Betriebssystem; ein Terminal ist nicht nötig.',
          'Umfang: Verwaltung von Foto- und Videoarchiven mit Gesichtserkennung; ein Chat-Assistent oder Sprachmodell wird nicht beschrieben.',
          'Pflege: Die Installationsdateien stammen vom Oktober 2026, die Website nennt aber weder Versionsnummer noch Änderungsprotokoll.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf Website, Dokumentation und Datenschutzerklärung von Tonfotos sowie den Installationsdateien, geprüft am 30. Oktober 2026. PromptQuorum hat Tonfotos nicht an einer echten Fotobibliothek eingesetzt; Erkennungsgenauigkeit und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'Was ist Tonfotos?',
        content: [
          '**Tonfotos ist ein Archivmanager für Fotos und Videos unter Windows, macOS und Linux, der große Familiensammlungen ordnet, Duplikate entfernt, Gesichter erkennt und Stammbäume erstellt.** Laut Website bleiben Ihre Dateien unter Ihrer Kontrolle, ohne verpflichtenden Cloud-Speicher. Geprüft wurde Version 1.17.1, ausgelesen aus dem macOS-Intel-Installationsprogramm.',
          'Veröffentlicht wird die Software von Andrey Isaev, laut Datenschutzerklärung Einzelunternehmer mit Sitz in Eriwan, Armenien; der Copyright-Vermerk der Website beginnt 2021. Eine separate Handy-App, TonfotosSync, importiert Fotos von iOS und Android; diese Rezension behandelt sie nicht.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Bezugsquelle',
        content: [
          '**Tonfotos ist ein Installationsprogramm für Windows, macOS und Linux, und die kostenlose Lizenz erfordert keine Zahlung.**',
        ],
        columns: ['Option', 'So erhalten Sie es'],
        rows: [
          { 'Option': 'Website', 'So erhalten Sie es': '[tonfotos.com](https://tonfotos.com/)' },
          { 'Option': 'Windows', 'So erhalten Sie es': 'tonfotos.exe für Windows 10 und 11 (x64), von der [Download-Seite](https://tonfotos.com/download.html)' },
          { 'Option': 'Mac', 'So erhalten Sie es': 'tonfotos.dmg, mit getrennten Builds für Intel und Apple Silicon, für macOS 10.15 oder neuer' },
          { 'Option': 'Linux', 'So erhalten Sie es': '.deb (Debian, Ubuntu) oder .rpm (Red Hat, Fedora, SUSE) für x64; Updates laufen über das apt- oder yum-Repository von Tonfotos' },
          { 'Option': 'Kostenlose Lizenz', 'So erhalten Sie es': '0 US-Dollar, kein Zeitlimit, voller Funktionsumfang, begrenzte Zahl getaggter Personen, anonyme Nutzungsstatistik' },
          { 'Option': 'Personal-Lizenz', 'So erhalten Sie es': '59 US-Dollar, unbefristet, ein Nutzer oder Gerät, unbegrenzt viele getaggte Personen, Statistik abschaltbar' },
          { 'Option': 'Family-Lizenz', 'So erhalten Sie es': '159 US-Dollar, unbefristet, bis zu fünf Nutzer oder Geräte, Personendaten werden zwischen Nutzern synchronisiert' },
          { 'Option': 'Handy-Import', 'So erhalten Sie es': 'TonfotosSync für [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) und [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'Option': 'Datenschutzerklärung', 'So erhalten Sie es': '[Datenschutzerklärung von Tonfotos](https://tonfotos.com/legal/privacy-policy/), veröffentlicht am 11. September 2024' },
          { 'Option': 'Quellcode', 'So erhalten Sie es': 'Keiner: proprietäre Software' },
        ],
        note: 'Geprüfte Version: 1.17.1 (macOS-Intel-Installationsprogramm, Datei vom 28. Oktober 2026); die Download-Seite selbst zeigt den Platzhalter „Version 0.0.0“. Die Preise stehen auf der Startseite in US-Dollar, und PromptQuorum hat nicht geprüft, welche Währung die Kasse anzeigt. Unter Windows braucht die GPU-Gesichtserkennung eine CUDA-fähige Grafikkarte und ein separates Plugin-Installationsprogramm (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Tonfotos-Dokumentation; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Personen.** Gesichter werden einmal pro Foto erkannt und dann zugeordnet; das Programm lernt aus den Gesichtern, die Sie taggen, Sie bestätigen jeden Vorschlag, und das Ablehnen falscher Vorschläge verfeinert spätere. Übersehene Gesichter lassen sich von Hand ergänzen.',
          '**Stammbaum.** Beziehungen zwischen Personen lassen sich hinzufügen, um einen Stammbaum aufzubauen; Gesichtsdaten können in den Dateimetadaten gespeichert werden.',
          '**Duplikate.** Eine Duplikatsuche; die Dokumentation rät, Duplikate vor dem Taggen oder Bearbeiten der Metadaten zu entfernen.',
          '**Bibliothek.** Ereignisse und Orte, Alben und Tags, Filter und Suche, Metadatenbearbeitung und Migration aus Picasa.',
          '**Formate.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF (nur macOS und Windows), viele RAW-Formate und gängige Videoformate wie MP4, MOV und MKV; manche ungewöhnlichen Video-Codecs lassen sich möglicherweise nicht in der Vorschau anzeigen.',
          '**Extras.** Ein Bild- und Videobetrachter, ein JPG-Konverter, der Bilder komprimiert, eine Diashow und ein Telegram-Downloader.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Wo die KI läuft und Datenfluss',
        content: [
          '**Tonfotos sagt, die Gesichtserkennung sei „powered by artificial intelligence running locally on your machine“ und das Programm „processes your photos right where they are and never sends them anywhere“.** Die FAQ ergänzt, dass die Entwickler nicht auf Ihre Fotos zugreifen können. Das Modell wird nicht genannt.',
          'Nach den Quellen gelangen drei Dinge nach außen. Die App verbindet sich regelmäßig mit dem Server des Entwicklers, um Updates zu prüfen und die Lizenz zu verwalten. Anonyme Nutzungsstatistiken können mit Ihrer Erlaubnis erhoben werden; die Startseite führt sie als Teil der kostenlosen Lizenz auf, und Bezahllizenzen können Statistik und automatische Updates unter Einstellungen > Erweitert abschalten. Die Datenschutzerklärung sagt außerdem, dass Absturzberichte die Namen getaggter Personen, Datei- und Ordnernamen, Tags und Alben enthalten können und dass Fotos das Gerät nur verlassen, wenn Sie sie für den Support senden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Herstellers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Familienarchivare** mit großen Sammlungen, die Personen taggen und einen Stammbaum wollen.',
          '**Haushalte mit gemischten Systemen**, die eine App für Windows, macOS und Linux wollen.',
          '**Menschen ohne Abo-Neigung**, die eine unbefristete Lizenz akzeptieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Version und Pflege.** Die Website zeigt „Version 0.0.0“ und kein Änderungsprotokoll. PromptQuorum hat 1.17.1 aus dem macOS-Intel-Installationsprogramm und 1.17.0 aus dem Linux-Paket ausgelesen und das Windows-Installationsprogramm (Datei vom 25. September 2026) sowie das für Apple Silicon (15. September 2026) nicht geöffnet.',
          '**Erkennungsqualität.** Genauigkeit, Geschwindigkeit und ein möglicher GPU-Vorteil wurden nicht getestet.',
          '**Grenze der kostenlosen Lizenz.** Wie viele Personen die kostenlose Lizenz erlaubt, wird nicht genannt.',
          '**Anforderungen.** Weder Mindest-RAM noch Speicherplatz oder Prozessor sind veröffentlicht.',
          '**Offline-Nutzung.** Update- und Lizenzprüfungen laufen über den Server des Entwicklers; ob die App vollständig offline funktioniert, wird nicht gesagt.',
          '**Absturzberichte.** Die Erklärung nennt getaggte Namen und Dateinamen, sagt aber nicht, ob Fotoinhalte oder Gesichtsdaten enthalten sind.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Konkurrenz',
        content: [
          'Das Verzeichnis enthält drei getestete Werkzeuge, die eine lokale Fotobibliothek verwalten oder bewerten; keines ist ein direkter Ersatz.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Excire Foto](/de/power-local-llm/excire-foto-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Einmalkauf / nicht quelloffen', 'Hauptunterschied': 'Ergänzt KI-Inhaltssuche und Texterkennung; erfordert ein Excire-Konto' },
          { 'App': '[Facet](/de/power-local-llm/facet-review)', 'Plattformen': 'Docker oder Skript, Browser', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Bewertet und sortiert Fotos und gruppiert Gesichter; Einrichtung für Entwickler, kein Installationsprogramm' },
          { 'App': '[PhotoPrism](/de/power-local-llm/photoprism-review)', 'Plattformen': 'Server (Docker), Browser', 'Preis / Lizenz': 'Kostenlose Community-Version / AGPL-3.0', 'Hauptunterschied': 'Selbst gehostete Web-Bibliothek mit integrierten KI-Labels, kein Desktop-Programm' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Ist Tonfotos ein lokales LLM?',
            a: 'Nein. Die Quellen beschreiben Gesichtserkennung und Fotoverwaltung und nennen weder eine Chat-Funktion noch ein Sprachmodell.',
          },
          {
            q: 'Kann ich meine Gesichter aus Picasa übernehmen?',
            a: 'Die Dokumentation hat einen Abschnitt zur Picasa-Migration, der Import ist also ein dokumentierter Weg; PromptQuorum hat ihn nicht getestet.',
          },
          {
            q: 'Läuft es auf Macs mit Apple Silicon?',
            a: 'Ja: Die Download-Seite bietet neben dem Intel-Build einen eigenen Build für Apple Silicon.',
          },
          {
            q: 'Teilt die Family-Lizenz meine Fotos?',
            a: 'Die Startseite sagt, die Family-Lizenz synchronisiere Personendaten zwischen Nutzern; dass Fotos geteilt werden, steht dort nicht.',
          },
          {
            q: 'Wie kommen Fotos von meinem Handy auf den Computer?',
            a: 'Laut Dokumentation über die Handy-App TonfotosSync oder unter Windows über ein USB-Kabel.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Tonfotos bietet Gesichtserkennung, Duplikatentfernung und einen Stammbaum für große Fotoarchive unter Windows, macOS und Linux, mit kostenloser Version und unbefristeten Lizenzen, und der Hersteller sagt, die Erkennung laufe lokal. Dagegen ist es nicht quelloffen, die kostenlose Lizenz begrenzt die Zahl getaggter Personen, die App kontaktiert für Update- und Lizenzprüfungen den Server des Entwicklers, Absturzberichte können getaggte Namen enthalten, und die Website nennt keine echte Versionsnummer, kein Änderungsprotokoll und keine Systemanforderungen. Es eignet sich für Menschen, die ein lokales Familienfoto-Archiv ohne Abo wollen und mit der kostenlosen Lizenz beginnen; wer Open Source oder einen geprüften Datenfluss braucht, sollte sich anderweitig umsehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Tonfotos-Startseite](https://tonfotos.com/) — Funktionen, Lizenzen und Preise, geprüft am 30. Oktober 2026.',
          '[Tonfotos-FAQ](https://tonfotos.com/docs/faq/) — Aussagen zu lokaler Verarbeitung und Netzwerk, geprüft am 30. Oktober 2026.',
          '[Tonfotos-Download-Seite](https://tonfotos.com/download.html) — Installationsprogramme, Plattformen und CUDA-Plugin, geprüft am 30. Oktober 2026.',
          '[Tonfotos-Datenschutzerklärung](https://tonfotos.com/legal/privacy-policy/) — erhobene Daten, Absturzberichte und Verantwortlicher, veröffentlicht am 11. September 2024.',
          '[Tonfotos-Dokumentation](https://tonfotos.com/docs/) — Funktionen und unterstützte Formate, geprüft am 30. Oktober 2026.',
          '[macOS-Intel-Installationsprogramm](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — Version 1.17.1 aus dem App-Paket ausgelesen, Datei vom 28. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Excire-Foto-Rezension](/de/power-local-llm/excire-foto-review) — ein kostenpflichtiger Foto-Manager für Windows und Mac mit lokaler KI-Suche.',
          '[Facet-Rezension](/de/power-local-llm/facet-review) — ein kostenloses, selbst gehostetes Werkzeug zum Bewerten und Aussortieren von Fotos.',
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine selbst gehostete Fotobibliothek mit integrierten KI-Labels.',
          '[Verzeichnis lokaler KI-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    heroImage: '/images/tonfotos-review-hero-es.webp',
    title: 'Reseña de Tonfotos: gestor de fotos con reconocimiento facial local',
    seoTitle: 'Reseña de Tonfotos: fotos con reconocimiento facial local',
    intro:
      'Tonfotos es un gestor de archivo de fotos y vídeos de código cerrado para Windows, macOS y Linux cuyo reconocimiento facial, según su fabricante, se ejecuta en tu propio ordenador. Tiene una versión gratuita y licencias de pago perpetuas. Esta reseña refleja el sitio web, la documentación y la política de privacidad de Tonfotos tal como se comprobaron el 30 de octubre de 2026, además de los propios instaladores; la versión revisada es la 1.17.1.',
    metaDescription:
      'Reseña de Tonfotos: gestor de fotos para Windows, Mac y Linux con reconocimiento facial local, según su fabricante. Versión gratuita y licencias perpetuas.',
    twitterDescription:
      'Reseña de Tonfotos: un gestor de archivo de fotos y vídeos para Windows, macOS y Linux con eliminación de duplicados, árbol genealógico y reconocimiento facial local, según su fabricante. Licencias, privacidad y dudas abiertas.',
    audience:
      'Familias y aficionados con grandes archivos de fotos en Windows, macOS o Linux que quieren etiquetar personas y eliminar duplicados sin un servicio en la nube, y que necesitan saber qué confirman las fuentes sobre el flujo de datos y las licencias.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Tonfotos',
    targetKeywords: [
      'reseña tonfotos',
      'tonfotos reconocimiento facial',
      'gestor de fotos con reconocimiento facial sin conexión',
      'software archivo de fotos familiar',
      'alternativa a picasa reconocimiento facial',
      'eliminar fotos duplicadas software',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos es un gestor de archivo de fotos y vídeos de código cerrado para Windows, macOS y Linux que, según su fabricante, reconoce caras con una IA que se ejecuta en local en tu ordenador.** Añade eliminación de duplicados y un árbol genealógico, y ofrece una versión gratuita y licencias de pago perpetuas en lugar de una suscripción.',
    quickAnswerTop: {
      es: {
        question: '¿Tonfotos mantiene tus fotos y los datos faciales en tu propio ordenador?',
        answer:
          'Según Tonfotos, sí en el caso de las fotos: su FAQ dice que "processes your photos right where they are and never sends them anywhere", y el reconocimiento facial se ejecuta en local. Aun así, la app contacta con el servidor del desarrollador para comprobar actualizaciones y licencia. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Código cerrado y sin repositorio público; sin suscripción.',
          'Windows 10 y 11, macOS 10.15 o posterior (Intel y Apple silicon) y Linux (.deb y .rpm).',
          'Flujo con caras: las caras se detectan una vez por foto y luego se emparejan; tú confirmas cada sugerencia.',
          'Además: búsqueda de duplicados, eventos y ubicaciones, álbumes y etiquetas, y un árbol genealógico.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Tonfotos?', anchor: 'what-is-tonfotos' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Funciones principales', anchor: 'key-features' },
      { label: 'Dónde se ejecuta la IA y flujo de datos', anchor: 'privacy' },
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
            text: 'Tonfotos es un gestor de archivo de fotos y vídeos de escritorio que, según su fabricante, encuentra y agrupa caras en tu propio ordenador para que puedas etiquetar personas, eliminar duplicados y crear un árbol genealógico.',
          },
          {
            type: 'plain-terms',
            text: 'Lo instalas, lo apuntas a tus carpetas de fotos y etiquetas unas cuantas caras; después sugiere a las mismas personas en otras fotos y tú confirmas cada sugerencia.',
          },
        ],
        items: [
          'Fabricante: Andrey Isaev, empresario individual registrado en Ereván, Armenia, según la política de privacidad.',
          'Coste: una licencia gratuita sin límite de tiempo pero con tope de personas etiquetadas, más dos licencias de pago perpetuas.',
          'Instalación: instaladores normales para cada sistema operativo; no hace falta terminal.',
          'Alcance: gestión de archivos de fotos y vídeos con reconocimiento facial; no se describe ningún asistente de chat ni modelo de lenguaje.',
          'Mantenimiento: los instaladores son de octubre de 2026, pero el sitio web no muestra número de versión ni registro de cambios.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la documentación y la política de privacidad de Tonfotos y en los instaladores, comprobados el 30 de octubre de 2026. PromptQuorum no ha usado Tonfotos con una biblioteca de fotos real, así que no se evalúan la precisión del reconocimiento ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: '¿Qué es Tonfotos?',
        content: [
          '**Tonfotos es un gestor de archivo de fotos y vídeos para Windows, macOS y Linux que organiza grandes colecciones familiares, elimina duplicados, reconoce caras y crea árboles genealógicos.** El sitio web dice que tus archivos siguen bajo tu control, sin almacenamiento en la nube obligatorio. La versión revisada es la 1.17.1, leída en el instalador de macOS para Intel.',
          'El software lo publica Andrey Isaev, empresario individual registrado en Ereván, Armenia, según la política de privacidad; el aviso de copyright del sitio arranca en 2021. Una app móvil aparte, TonfotosSync, importa fotos desde iOS y Android; esta reseña no la cubre.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Dónde conseguirlo',
        content: [
          '**Tonfotos es un instalador de doble clic para Windows, macOS y Linux, y la licencia gratuita no requiere pago.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[tonfotos.com](https://tonfotos.com/)' },
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'tonfotos.exe para Windows 10 y 11 (x64), desde la [página de descarga](https://tonfotos.com/download.html)' },
          { 'Opción': 'Mac', 'Cómo conseguirlo': 'tonfotos.dmg, con compilaciones separadas para Intel y Apple silicon, para macOS 10.15 o posterior' },
          { 'Opción': 'Linux', 'Cómo conseguirlo': '.deb (Debian, Ubuntu) o .rpm (Red Hat, Fedora, SUSE) para x64; las actualizaciones llegan por el repositorio apt o yum de Tonfotos' },
          { 'Opción': 'Licencia gratuita', 'Cómo conseguirlo': '0 USD, sin límite de tiempo, funcionalidad completa, número limitado de personas etiquetadas, estadísticas de uso anónimas' },
          { 'Opción': 'Licencia Personal', 'Cómo conseguirlo': '59 USD, perpetua, un usuario o dispositivo, personas etiquetadas ilimitadas, estadísticas desactivables' },
          { 'Opción': 'Licencia Family', 'Cómo conseguirlo': '159 USD, perpetua, hasta cinco usuarios o dispositivos, datos de personas sincronizados entre usuarios' },
          { 'Opción': 'Importar desde el móvil', 'Cómo conseguirlo': 'TonfotosSync para [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) y [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[Política de privacidad de Tonfotos](https://tonfotos.com/legal/privacy-policy/), publicada el 11 de septiembre de 2024' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'Ninguno: software propietario' },
        ],
        note: 'Versión revisada: 1.17.1 (instalador de macOS para Intel, archivo del 28 de octubre de 2026); la propia página de descarga muestra el marcador "Version 0.0.0". Los precios aparecen en dólares estadounidenses en la página de inicio, y PromptQuorum no comprobó qué moneda muestra el pago. En Windows, el reconocimiento facial por GPU requiere una tarjeta gráfica compatible con CUDA y un instalador de plugin aparte (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede de la documentación de Tonfotos; PromptQuorum no ha probado nada de ello.**',
        ],
        items: [
          '**Personas.** Las caras se detectan una vez por foto y luego se emparejan; el programa aprende de las caras que etiquetas, tú confirmas cada sugerencia y rechazar las erróneas afina las siguientes. Las caras que no detecta se pueden añadir a mano.',
          '**Árbol genealógico.** Se pueden añadir relaciones entre personas para crear un árbol genealógico, y los datos faciales pueden guardarse en los metadatos del archivo.',
          '**Duplicados.** Una búsqueda de duplicados; la documentación aconseja eliminarlos antes de etiquetar o editar metadatos.',
          '**Biblioteca.** Eventos y ubicaciones, álbumes y etiquetas, filtros y búsqueda, edición de metadatos y migración desde Picasa.',
          '**Formatos.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF (solo macOS y Windows), muchos formatos RAW y formatos de vídeo habituales como MP4, MOV y MKV; algunos códecs de vídeo poco comunes pueden no mostrar vista previa.',
          '**Extras.** Un visor de imágenes y vídeos, un conversor a JPG que comprime imágenes, una presentación de diapositivas y un descargador de Telegram.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Dónde se ejecuta la IA y flujo de datos',
        content: [
          '**Tonfotos dice que el reconocimiento facial está "powered by artificial intelligence running locally on your machine" y que "processes your photos right where they are and never sends them anywhere".** La FAQ añade que los desarrolladores no pueden acceder a tus fotos. El modelo no se nombra.',
          'Según las fuentes, tres cosas salen al exterior. La app se conecta con regularidad al servidor del desarrollador para comprobar actualizaciones y gestionar la licencia. Pueden recopilarse estadísticas de uso anónimas con tu permiso; la página de inicio las incluye en la licencia gratuita, y las licencias de pago pueden desactivar las estadísticas y las actualizaciones automáticas en Preferencias > Avanzado. La política de privacidad añade que los informes de fallos pueden incluir los nombres de las personas etiquetadas, nombres de archivos y carpetas, etiquetas y álbumes, y que las fotos solo salen del dispositivo si las envías para soporte.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Archivistas familiares** con grandes colecciones que quieren etiquetar personas y tener un árbol genealógico.',
          '**Hogares con sistemas mixtos** que quieren una sola app para Windows, macOS y Linux.',
          '**Quienes no quieren suscripciones** y aceptan una licencia perpetua.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Versión y mantenimiento.** El sitio web muestra "Version 0.0.0" y ningún registro de cambios. PromptQuorum leyó la 1.17.1 en el instalador de macOS para Intel y la 1.17.0 en el paquete de Linux, y no abrió el instalador de Windows (archivo del 25 de septiembre de 2026) ni el de Apple silicon (15 de septiembre de 2026).',
          '**Calidad del reconocimiento.** No se probaron la precisión, la velocidad ni un posible beneficio de la GPU.',
          '**Límite de la licencia gratuita.** No se indica cuántas personas permite la licencia gratuita.',
          '**Requisitos.** No se publica una cifra mínima de RAM, espacio en disco ni procesador.',
          '**Uso sin conexión.** Las comprobaciones de actualización y licencia pasan por el servidor del desarrollador; no se dice si la app funciona del todo sin conexión.',
          '**Informes de fallos.** La política enumera nombres etiquetados y nombres de archivo, pero no dice si incluyen contenido de fotos o datos faciales.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio tiene tres herramientas con reseña que gestionan o puntúan una biblioteca local de fotos; ninguna es un sustituto directo.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Excire Foto](/es/power-local-llm/excire-foto-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Pago único / código cerrado', 'Diferencia clave': 'Añade búsqueda de contenido con IA y reconocimiento de texto; requiere una cuenta de Excire' },
          { 'App': '[Facet](/es/power-local-llm/facet-review)', 'Plataformas': 'Docker o script, navegador', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Puntúa y selecciona fotos y agrupa caras; instalación para desarrolladores, sin instalador' },
          { 'App': '[PhotoPrism](/es/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Precio / licencia': 'Community gratis / AGPL-3.0', 'Diferencia clave': 'Biblioteca web autoalojada con etiquetas de IA integradas, no un programa de escritorio' },
        ],
        note: 'Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Tonfotos es un LLM local?',
            a: 'No. Las fuentes describen reconocimiento facial y organización de fotos, y no mencionan ninguna función de chat ni modelo de lenguaje.',
          },
          {
            q: '¿Puedo traer mis caras desde Picasa?',
            a: 'La documentación tiene una sección sobre la migración desde Picasa, así que la importación es una vía documentada; PromptQuorum no la probó.',
          },
          {
            q: '¿Funciona en Mac con Apple silicon?',
            a: 'Sí: la página de descarga ofrece una compilación para Apple silicon junto a la de Intel.',
          },
          {
            q: '¿La licencia Family comparte mis fotos?',
            a: 'La página de inicio dice que la licencia Family sincroniza los datos de personas entre usuarios; no dice que se compartan las fotos.',
          },
          {
            q: '¿Cómo llegan las fotos desde mi móvil?',
            a: 'Según la documentación, mediante la app móvil TonfotosSync o, en Windows, con un cable USB.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Tonfotos ofrece reconocimiento facial, eliminación de duplicados y un árbol genealógico para grandes archivos de fotos en Windows, macOS y Linux, con versión gratuita y licencias perpetuas, y su fabricante dice que el reconocimiento se ejecuta en local. En contra, es de código cerrado, la licencia gratuita limita las personas etiquetadas, la app contacta con el servidor del desarrollador para comprobar actualizaciones y licencia, los informes de fallos pueden incluir nombres etiquetados y el sitio web no muestra un número de versión real, ni registro de cambios ni requisitos del sistema. Encaja con quienes quieren un archivo familiar de fotos en local sin suscripción y empezarán con la licencia gratuita; quien necesite código abierto o un flujo de datos auditado debería buscar otra opción.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de inicio de Tonfotos](https://tonfotos.com/) — funciones, licencias y precios, comprobado el 30 de octubre de 2026.',
          '[FAQ de Tonfotos](https://tonfotos.com/docs/faq/) — declaraciones sobre procesamiento local y red, comprobado el 30 de octubre de 2026.',
          '[Página de descarga de Tonfotos](https://tonfotos.com/download.html) — instaladores, plataformas y plugin CUDA, comprobado el 30 de octubre de 2026.',
          '[Política de privacidad de Tonfotos](https://tonfotos.com/legal/privacy-policy/) — datos recopilados, informes de fallos y responsable, publicada el 11 de septiembre de 2024.',
          '[Documentación de Tonfotos](https://tonfotos.com/docs/) — funciones y formatos compatibles, comprobado el 30 de octubre de 2026.',
          '[Instalador de macOS para Intel](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — versión 1.17.1 leída en el paquete de la app, archivo del 28 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Excire Foto](/es/power-local-llm/excire-foto-review) — un gestor de fotos de pago para Windows y Mac con búsqueda local por IA.',
          '[Reseña de Facet](/es/power-local-llm/facet-review) — una herramienta gratuita y autoalojada para puntuar y seleccionar fotos.',
          '[Reseña de PhotoPrism](/es/power-local-llm/photoprism-review) — una biblioteca de fotos autoalojada con etiquetas de IA integradas.',
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
    heroImage: '/images/tonfotos-review-hero-fr.webp',
    title: 'Test de Tonfotos : gestionnaire de photos à reconnaissance faciale locale',
    seoTitle: 'Test de Tonfotos : photos et reconnaissance faciale locale',
    intro:
      'Tonfotos est un gestionnaire d’archives photo et vidéo à code fermé pour Windows, macOS et Linux dont la reconnaissance faciale, selon son éditeur, s’exécute sur votre propre ordinateur. Il propose une version gratuite et des licences payantes perpétuelles. Ce test reflète le site, la documentation et la politique de confidentialité de Tonfotos tels que vérifiés le 30 octobre 2026, ainsi que les installateurs eux-mêmes ; la version testée est la 1.17.1.',
    metaDescription:
      'Test de Tonfotos : gestionnaire photo pour Windows, Mac et Linux, reconnaissance faciale locale selon l’éditeur. Version gratuite, licences perpétuelles.',
    twitterDescription:
      'Test de Tonfotos : un gestionnaire d’archives photo et vidéo pour Windows, macOS et Linux avec suppression des doublons, arbre généalogique et reconnaissance faciale locale, selon l’éditeur. Licences, confidentialité et questions ouvertes.',
    audience:
      'Familles et amateurs ayant de grandes archives de photos sous Windows, macOS ou Linux qui veulent identifier les personnes et supprimer les doublons sans service cloud, et qui doivent savoir ce que les sources confirment sur le flux de données et les licences.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Tonfotos',
    targetKeywords: [
      'test tonfotos',
      'tonfotos reconnaissance faciale',
      'gestionnaire de photos reconnaissance faciale hors ligne',
      'logiciel archives photos famille',
      'alternative à picasa reconnaissance faciale',
      'supprimer photos en double logiciel',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos est un gestionnaire d’archives photo et vidéo à code fermé pour Windows, macOS et Linux qui, selon son éditeur, reconnaît les visages grâce à une IA exécutée localement sur votre ordinateur.** Il ajoute la suppression des doublons et un arbre généalogique, avec une version gratuite et des licences payantes perpétuelles plutôt qu’un abonnement.',
    quickAnswerTop: {
      fr: {
        question: 'Tonfotos garde-t-il vos photos et vos données faciales sur votre propre ordinateur ?',
        answer:
          'Selon Tonfotos, oui pour les photos : sa FAQ indique qu’il "processes your photos right where they are and never sends them anywhere", et la reconnaissance faciale s’exécute en local. L’application contacte toutefois le serveur du développeur pour les contrôles de mise à jour et de licence. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Code fermé, sans dépôt public ; pas d’abonnement.',
          'Windows 10 et 11, macOS 10.15 ou ultérieur (Intel et Apple silicon) et Linux (.deb et .rpm).',
          'Déroulement pour les visages : les visages sont détectés une fois par photo, puis associés ; vous confirmez chaque suggestion.',
          'Aussi : recherche de doublons, événements et lieux, albums et étiquettes, et un arbre généalogique.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Tonfotos ?', anchor: 'what-is-tonfotos' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Fonctions principales', anchor: 'key-features' },
      { label: 'Où s’exécute l’IA et flux de données', anchor: 'privacy' },
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
            text: 'Tonfotos est un gestionnaire d’archives photo et vidéo de bureau qui, selon son éditeur, trouve et regroupe les visages sur votre propre ordinateur pour que vous puissiez identifier les personnes, supprimer les doublons et créer un arbre généalogique.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez, l’orientez vers vos dossiers de photos et identifiez quelques visages ; il suggère ensuite les mêmes personnes dans d’autres photos et vous confirmez chaque suggestion.',
          },
        ],
        items: [
          'Éditeur : Andrey Isaev, entrepreneur individuel enregistré à Erevan, en Arménie, d’après la politique de confidentialité.',
          'Coût : une licence gratuite sans limite de durée mais plafonnée en personnes identifiées, plus deux licences payantes perpétuelles.',
          'Installation : des installateurs ordinaires pour chaque système d’exploitation ; aucun terminal n’est nécessaire.',
          'Périmètre : gestion d’archives photo et vidéo avec reconnaissance faciale ; aucun assistant de chat ni modèle de langage n’est décrit.',
          'Maintenance : les installateurs datent d’octobre 2026, mais le site n’affiche ni numéro de version ni journal des modifications.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la documentation et la politique de confidentialité de Tonfotos ainsi que sur les installateurs, vérifiés le 30 octobre 2026. PromptQuorum n’a pas utilisé Tonfotos sur une vraie photothèque ; la précision de la reconnaissance et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'Qu’est-ce que Tonfotos ?',
        content: [
          '**Tonfotos est un gestionnaire d’archives photo et vidéo pour Windows, macOS et Linux qui organise de grandes collections familiales, supprime les doublons, reconnaît les visages et construit des arbres généalogiques.** Le site indique que vos fichiers restent sous votre contrôle, sans stockage cloud obligatoire. La version testée est la 1.17.1, lue dans l’installateur macOS Intel.',
          'Le logiciel est publié par Andrey Isaev, entrepreneur individuel enregistré à Erevan, en Arménie, selon la politique de confidentialité ; la mention de copyright du site commence en 2021. Une application mobile distincte, TonfotosSync, importe des photos depuis iOS et Android ; ce test ne la couvre pas.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Où l’obtenir',
        content: [
          '**Tonfotos est un installateur à double-clic pour Windows, macOS et Linux, et la licence gratuite ne demande aucun paiement.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Site web', 'Comment l’obtenir': '[tonfotos.com](https://tonfotos.com/)' },
          { 'Option': 'Windows', 'Comment l’obtenir': 'tonfotos.exe pour Windows 10 et 11 (x64), depuis la [page de téléchargement](https://tonfotos.com/download.html)' },
          { 'Option': 'Mac', 'Comment l’obtenir': 'tonfotos.dmg, avec des versions distinctes Intel et Apple silicon, pour macOS 10.15 ou ultérieur' },
          { 'Option': 'Linux', 'Comment l’obtenir': '.deb (Debian, Ubuntu) ou .rpm (Red Hat, Fedora, SUSE) pour x64 ; les mises à jour passent par le dépôt apt ou yum de Tonfotos' },
          { 'Option': 'Licence gratuite', 'Comment l’obtenir': '0 $US, sans limite de durée, fonctionnalités complètes, nombre limité de personnes identifiées, statistiques d’usage anonymes' },
          { 'Option': 'Licence Personal', 'Comment l’obtenir': '59 $US, perpétuelle, un utilisateur ou appareil, personnes identifiées illimitées, statistiques désactivables' },
          { 'Option': 'Licence Family', 'Comment l’obtenir': '159 $US, perpétuelle, jusqu’à cinq utilisateurs ou appareils, informations sur les personnes synchronisées entre utilisateurs' },
          { 'Option': 'Import depuis le téléphone', 'Comment l’obtenir': 'TonfotosSync pour [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) et [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[Politique de confidentialité de Tonfotos](https://tonfotos.com/legal/privacy-policy/), publiée le 11 septembre 2024' },
          { 'Option': 'Code source', 'Comment l’obtenir': 'Aucun : logiciel propriétaire' },
        ],
        note: 'Version testée : 1.17.1 (installateur macOS Intel, fichier daté du 28 octobre 2026) ; la page de téléchargement elle-même affiche le marqueur "Version 0.0.0". Les prix sont en dollars américains sur la page d’accueil, et PromptQuorum n’a pas vérifié quelle devise affiche la caisse. Sous Windows, la reconnaissance faciale par GPU exige une carte graphique compatible CUDA et un installateur de plugin distinct (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient de la documentation de Tonfotos ; PromptQuorum n’en a rien testé.**',
        ],
        items: [
          '**Personnes.** Les visages sont détectés une fois par photo, puis associés ; le programme apprend des visages que vous identifiez, vous confirmez chaque suggestion, et rejeter les mauvaises affine les suivantes. Les visages manqués peuvent être ajoutés à la main.',
          '**Arbre généalogique.** On peut ajouter des liens entre personnes pour construire un arbre généalogique, et les données de visage peuvent être stockées dans les métadonnées des fichiers.',
          '**Doublons.** Une recherche de doublons ; la documentation conseille de les supprimer avant d’identifier les personnes ou de modifier les métadonnées.',
          '**Photothèque.** Événements et lieux, albums et étiquettes, filtres et recherche, édition des métadonnées et migration depuis Picasa.',
          '**Formats.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF (macOS et Windows uniquement), de nombreux formats RAW et des formats vidéo courants comme MP4, MOV et MKV ; certains codecs vidéo inhabituels peuvent ne pas s’afficher en aperçu.',
          '**Extras.** Une visionneuse d’images et de vidéos, un convertisseur JPG qui compresse les images, un diaporama et un téléchargeur Telegram.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Où s’exécute l’IA et flux de données',
        content: [
          '**Tonfotos affirme que la reconnaissance faciale est "powered by artificial intelligence running locally on your machine" et qu’il "processes your photos right where they are and never sends them anywhere".** La FAQ ajoute que les développeurs ne peuvent pas accéder à vos photos. Le modèle n’est pas nommé.',
          'D’après les sources, trois éléments sortent de l’ordinateur. L’application se connecte régulièrement au serveur du développeur pour vérifier les mises à jour et gérer la licence. Des statistiques d’usage anonymes peuvent être collectées avec votre autorisation ; la page d’accueil les range dans la licence gratuite, et les licences payantes peuvent désactiver les statistiques et les mises à jour automatiques dans Préférences > Avancé. La politique de confidentialité précise aussi que les rapports de plantage peuvent contenir les noms des personnes identifiées, des noms de fichiers et de dossiers, des étiquettes et des albums, et que les photos ne quittent l’appareil que si vous les envoyez au support.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Archivistes familiaux** avec de grandes collections qui veulent identifier les personnes et avoir un arbre généalogique.',
          '**Foyers multi-systèmes** qui veulent une seule application sous Windows, macOS et Linux.',
          '**Ceux qui n’aiment pas les abonnements** et acceptent une licence perpétuelle.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Version et maintenance.** Le site affiche "Version 0.0.0" et aucun journal des modifications. PromptQuorum a lu la 1.17.1 dans l’installateur macOS Intel et la 1.17.0 dans le paquet Linux, et n’a pas ouvert l’installateur Windows (fichier du 25 septembre 2026) ni celui pour Apple silicon (15 septembre 2026).',
          '**Qualité de la reconnaissance.** La précision, la vitesse et un éventuel gain du GPU n’ont pas été testés.',
          '**Limite de la licence gratuite.** Le nombre de personnes autorisées par la licence gratuite n’est pas indiqué.',
          '**Prérequis.** Aucun minimum de RAM, d’espace disque ni de processeur n’est publié.',
          '**Usage hors ligne.** Les contrôles de mise à jour et de licence passent par le serveur du développeur ; il n’est pas dit si l’application fonctionne entièrement hors ligne.',
          '**Rapports de plantage.** La politique cite les noms identifiés et les noms de fichiers, mais ne dit pas si le contenu des photos ou les données faciales y figurent.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'L’annuaire compte trois outils testés qui gèrent ou notent une photothèque locale ; aucun n’est un remplaçant direct.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Excire Foto](/fr/power-local-llm/excire-foto-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Achat unique / code fermé', 'Différence clé': 'Ajoute la recherche de contenu par IA et la reconnaissance de texte ; exige un compte Excire' },
          { 'Application': '[Facet](/fr/power-local-llm/facet-review)', 'Plateformes': 'Docker ou script, navigateur', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Note et trie les photos et regroupe les visages ; installation de type développeur, sans installateur' },
          { 'Application': '[PhotoPrism](/fr/power-local-llm/photoprism-review)', 'Plateformes': 'Serveur (Docker), navigateur', 'Prix / licence': 'Community gratuite / AGPL-3.0', 'Différence clé': 'Photothèque web auto-hébergée avec étiquettes IA intégrées, pas un programme de bureau' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Tonfotos est-il un LLM local ?',
            a: 'Non. Les sources décrivent la reconnaissance faciale et l’organisation de photos, et ne nomment aucune fonction de chat ni modèle de langage.',
          },
          {
            q: 'Puis-je reprendre mes visages depuis Picasa ?',
            a: 'La documentation comporte une section sur la migration depuis Picasa ; l’import est donc une voie documentée, que PromptQuorum n’a pas testée.',
          },
          {
            q: 'Fonctionne-t-il sur les Mac Apple silicon ?',
            a: 'Oui : la page de téléchargement propose une version Apple silicon à côté de la version Intel.',
          },
          {
            q: 'La licence Family partage-t-elle mes photos ?',
            a: 'La page d’accueil dit que la licence Family synchronise les informations sur les personnes entre utilisateurs ; elle ne dit pas que les photos sont partagées.',
          },
          {
            q: 'Comment les photos arrivent-elles depuis mon téléphone ?',
            a: 'Selon la documentation, via l’application mobile TonfotosSync ou, sous Windows, par câble USB.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Tonfotos propose reconnaissance faciale, suppression des doublons et arbre généalogique pour de grandes archives de photos sous Windows, macOS et Linux, avec une version gratuite et des licences perpétuelles, et son éditeur affirme que la reconnaissance s’exécute en local. En contrepartie, il est à code fermé, la licence gratuite plafonne les personnes identifiées, l’application contacte le serveur du développeur pour les contrôles de mise à jour et de licence, les rapports de plantage peuvent contenir des noms identifiés, et le site n’affiche ni vrai numéro de version, ni journal des modifications, ni configuration requise. Il convient à ceux qui veulent des archives photo familiales en local sans abonnement et commenceront par la licence gratuite ; ceux qui exigent l’open source ou un flux de données audité doivent chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page d’accueil de Tonfotos](https://tonfotos.com/) — fonctions, licences et prix, vérifié le 30 octobre 2026.',
          '[FAQ de Tonfotos](https://tonfotos.com/docs/faq/) — déclarations sur le traitement local et le réseau, vérifié le 30 octobre 2026.',
          '[Page de téléchargement de Tonfotos](https://tonfotos.com/download.html) — installateurs, plateformes et plugin CUDA, vérifié le 30 octobre 2026.',
          '[Politique de confidentialité de Tonfotos](https://tonfotos.com/legal/privacy-policy/) — données collectées, rapports de plantage et responsable de traitement, publiée le 11 septembre 2024.',
          '[Documentation de Tonfotos](https://tonfotos.com/docs/) — fonctions et formats pris en charge, vérifié le 30 octobre 2026.',
          '[Installateur macOS Intel](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — version 1.17.1 lue dans le paquet de l’application, fichier daté du 28 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Excire Foto](/fr/power-local-llm/excire-foto-review) — un gestionnaire de photos payant pour Windows et Mac avec recherche IA locale.',
          '[Test de Facet](/fr/power-local-llm/facet-review) — un outil gratuit et auto-hébergé pour noter et trier les photos.',
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une photothèque auto-hébergée avec étiquettes IA intégrées.',
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
    heroImage: '/images/tonfotos-review-hero-ja.webp',
    title: 'Tonfotosレビュー：ローカル顔認識の写真管理ソフト',
    seoTitle: 'Tonfotosレビュー：ローカル顔認識の写真管理ソフト',
    intro:
      'Tonfotosは、Windows・macOS・Linux向けのクローズドソースの写真・動画アーカイブ管理ソフトです。顔認識は、開発元によれば自分のコンピューター上で動作します。無料版と買い切り型の有料ライセンスがあります。このレビューは、2026年10月30日に確認したTonfotosの公式サイト、ドキュメント、プライバシーポリシーとインストーラー本体に基づいており、対象バージョンは1.17.1です。',
    metaDescription:
      'Tonfotosレビュー：Windows・Mac・Linux向け写真管理ソフト。開発元によれば顔認識はローカルで動作。無料版と買い切りライセンスあり。',
    twitterDescription:
      'Tonfotosレビュー：重複削除、家系図、開発元によればローカルで動作する顔認識を備えた、Windows・macOS・Linux向けの写真・動画アーカイブ管理ソフト。ライセンス、プライバシー、未確認事項。',
    audience:
      'Windows・macOS・Linuxで大量の写真アーカイブを持ち、クラウドサービスを使わずに人物タグ付けと重複削除をしたい家族や趣味の方で、データの流れとライセンスについて情報源が何を確認しているかを知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tonfotosレビュー',
    targetKeywords: [
      'tonfotos レビュー',
      'tonfotos 顔認識',
      '顔認識 写真管理 オフライン',
      '家族 写真 アーカイブ ソフト',
      'picasa 代替 顔認識',
      '重複写真 削除 ソフト',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotosは、Windows・macOS・Linux向けのクローズドソースの写真・動画アーカイブ管理ソフトで、開発元によれば、顔認識のAIはお使いのコンピューター上でローカルに動作します。** 重複削除と家系図の機能があり、サブスクリプションではなく無料版と買い切り型の有料ライセンスで提供されています。',
    quickAnswerTop: {
      ja: {
        question: 'Tonfotosは写真や顔のデータを自分のコンピューター内にとどめますか？',
        answer:
          'Tonfotosによれば、写真についてはそのとおりです。FAQには「processes your photos right where they are and never sends them anywhere」とあり、顔認識はローカルで動作します。ただしアプリは、更新とライセンスの確認のために開発者のサーバーに接続します。PromptQuorumはネットワーク通信を検査していません。',
        bullets: [
          'クローズドソースで公開リポジトリはなく、サブスクリプションではありません。',
          'Windows 10・11、macOS 10.15以降（IntelとApple silicon）、Linux（.debと.rpm）に対応します。',
          '顔の流れ：顔は写真ごとに一度検出されてから照合され、提案はすべて自分で確認します。',
          'ほかに、重複検索、イベントと場所、アルバムとタグ、家系図があります。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Tonfotosとは', anchor: 'what-is-tonfotos' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '主な機能', anchor: 'key-features' },
      { label: 'AIの実行場所とデータの流れ', anchor: 'privacy' },
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
            text: 'Tonfotosはデスクトップ向けの写真・動画アーカイブ管理ソフトで、開発元によれば自分のコンピューター上で顔を見つけてグループ化し、人物のタグ付け、重複削除、家系図の作成ができます。',
          },
          {
            type: 'plain-terms',
            text: 'インストールして写真フォルダーを指定し、いくつかの顔にタグを付けると、ほかの写真から同じ人物を提案してくれるので、提案ごとに自分で確認します。',
          },
        ],
        items: [
          '開発者：Andrey Isaev氏。プライバシーポリシーによれば、アルメニアのエレバンに登録された個人事業主です。',
          '費用：期間無制限だがタグ付けできる人数に上限がある無料ライセンスと、買い切り型の有料ライセンス2種類があります。',
          '導入：各OS向けの通常のインストーラーで、ターミナルは不要です。',
          '対象範囲：顔認識を備えた写真・動画アーカイブ管理で、チャットアシスタントや言語モデルの記載はありません。',
          '保守：インストーラーは2026年10月の日付ですが、サイトにはバージョン番号も変更履歴もありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月30日に確認したTonfotosの公式サイト、ドキュメント、プライバシーポリシーとインストーラーに基づいています。PromptQuorumは実際の写真ライブラリでTonfotosを使っていないため、認識精度と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'Tonfotosとは',
        content: [
          '**Tonfotosは、Windows・macOS・Linux向けの写真・動画アーカイブ管理ソフトで、大量の家族写真の整理、重複削除、顔認識、家系図の作成ができます。** 公式サイトによれば、ファイルは自分の管理下にあり、クラウドストレージは必須ではありません。対象バージョンは1.17.1で、macOS Intel版インストーラーから読み取りました。',
          'ソフトウェアを公開しているのは、プライバシーポリシーによればアルメニアのエレバンに登録された個人事業主のAndrey Isaev氏で、サイトの著作権表示は2021年からです。別のスマホアプリTonfotosSyncがiOSとAndroidから写真を取り込みますが、このレビューでは扱いません。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '入手方法',
        content: [
          '**Tonfotosは、Windows・macOS・Linux向けのダブルクリックで入れられるインストーラーで、無料ライセンスなら支払いは不要です。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': '公式サイト', '入手方法': '[tonfotos.com](https://tonfotos.com/)' },
          { '項目': 'Windows', '入手方法': 'Windows 10・11（x64）向けのtonfotos.exe。[ダウンロードページ](https://tonfotos.com/download.html)から入手' },
          { '項目': 'Mac', '入手方法': 'tonfotos.dmg。IntelとApple siliconは別ビルドで、macOS 10.15以降が対象' },
          { '項目': 'Linux', '入手方法': 'x64向けの.deb（Debian、Ubuntu）または.rpm（Red Hat、Fedora、SUSE）。更新はTonfotosのaptまたはyumリポジトリ経由' },
          { '項目': '無料ライセンス', '入手方法': '0ドル、期間無制限、全機能、タグ付けできる人数に上限あり、匿名の利用統計を収集' },
          { '項目': 'Personalライセンス', '入手方法': '59ドル、買い切り、1ユーザーまたは1台、タグ付け人数は無制限、統計の収集を無効化可能' },
          { '項目': 'Familyライセンス', '入手方法': '159ドル、買い切り、最大5ユーザーまたは5台、人物情報をユーザー間で同期' },
          { '項目': 'スマホから取り込み', '入手方法': 'TonfotosSync（[iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014)、[Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)）' },
          { '項目': 'プライバシーポリシー', '入手方法': '[Tonfotosのプライバシーポリシー](https://tonfotos.com/legal/privacy-policy/)（2024年9月11日公開）' },
          { '項目': 'ソースコード', '入手方法': 'なし：プロプライエタリソフトウェア' },
        ],
        note: '対象バージョン：1.17.1（macOS Intel版インストーラー、ファイルの日付は2026年10月28日）。ダウンロードページ自体は仮の表示「Version 0.0.0」のままです。価格はトップページに米ドルで記載されており、チェックアウトでどの通貨が表示されるかはPromptQuorumでは確認していません。Windowsでは、GPUによる顔認識にCUDA対応のグラフィックスカードと別のプラグインインストーラー（TonfotosCudaPlugin.msi）が必要です。',
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてTonfotosのドキュメントに基づく内容で、PromptQuorumは一つも検証していません。**',
        ],
        items: [
          '**人物。** 顔は写真ごとに一度検出されてから照合されます。タグを付けた顔から学習し、提案はすべて自分で確認します。誤った提案を却下すると、以降の提案が改善されます。検出されなかった顔は手動で追加できます。',
          '**家系図。** 人物どうしの関係を追加して家系図を作れます。顔のデータはファイルのメタデータに保存できます。',
          '**重複。** 重複検索があります。ドキュメントでは、人物のタグ付けやメタデータの編集より前に重複を削除するよう勧めています。',
          '**ライブラリ。** イベントと場所、アルバムとタグ、フィルターと検索、メタデータの編集、Picasaからの移行に対応します。',
          '**形式。** JPEG、PNG、GIF、TIFF、AVIF、WebP、HEIC/HEIF（macOSとWindowsのみ）、多数のRAW形式、MP4・MOV・MKVなど一般的な動画形式に対応します。特殊な動画コーデックはプレビューできない場合があります。',
          '**その他。** 画像・動画ビューアー、画像を圧縮するJPGコンバーター、スライドショー、Telegramダウンローダーがあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'AIの実行場所とデータの流れ',
        content: [
          '**Tonfotosは、顔認識は「powered by artificial intelligence running locally on your machine」であり、「processes your photos right where they are and never sends them anywhere」だと述べています。** FAQには、開発者は写真にアクセスできないとも書かれています。モデル名は明かされていません。',
          '情報源によれば、外部に出るものが3つあります。1つ目は、アプリが更新の確認とライセンスの管理のために開発者のサーバーへ定期的に接続することです。2つ目は匿名の利用統計で、許可がある場合に収集されることがあります。トップページでは無料ライセンスの条件として挙げられており、有料ライセンスでは設定 > 詳細設定で統計と自動更新を無効にできます。3つ目はクラッシュレポートで、プライバシーポリシーによれば、タグ付けされた人物の名前、ファイル名とフォルダー名、タグ、アルバムが含まれることがあります。写真は、サポートに送った場合にのみ端末の外に出ます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**家族の写真を整理する人**：大量の写真に人物タグと家系図を付けたい方。',
          '**複数のOSを使う家庭**：Windows・macOS・Linuxで同じアプリを使いたい方。',
          '**サブスクが苦手な人**：買い切りライセンスで構わない方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**バージョンと保守。** サイトには「Version 0.0.0」と表示され、変更履歴もありません。PromptQuorumはmacOS Intel版インストーラーから1.17.1、Linuxパッケージから1.17.0を読み取りましたが、Windows版（ファイルの日付は2026年9月25日）とApple silicon版（2026年9月15日）は開いていません。',
          '**認識の品質。** 精度、速度、GPUによる効果は検証していません。',
          '**無料ライセンスの上限。** 無料ライセンスで何人までタグ付けできるかは記載されていません。',
          '**動作要件。** 最小RAM、ディスク容量、プロセッサーは公開されていません。',
          '**オフライン利用。** 更新とライセンスの確認は開発者のサーバー経由で行われ、完全にオフラインで動作するかは記載されていません。',
          '**クラッシュレポート。** ポリシーにはタグ付けされた名前とファイル名が挙げられていますが、写真の内容や顔のデータが含まれるかは書かれていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、ローカルの写真ライブラリを管理またはスコア付けするレビュー済みのツールが3つありますが、どれも完全な代わりにはなりません。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Excire Foto](/ja/power-local-llm/excire-foto-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '買い切り／クローズドソース', '主な違い': 'AIによる内容検索と文字認識を備える。Excireアカウントが必要' },
          { 'アプリ': '[Facet](/ja/power-local-llm/facet-review)', '対応プラットフォーム': 'Dockerまたはスクリプト、ブラウザ', '価格／ライセンス': '無料／MIT', '主な違い': '写真のスコア付けと選別、顔のグループ化。開発者向けの導入で、インストーラーはない' },
          { 'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)', '対応プラットフォーム': 'サーバー（Docker）、ブラウザ', '価格／ライセンス': 'Community版は無料／AGPL-3.0', '主な違い': 'AIラベルを内蔵するセルフホスト型のウェブライブラリで、デスクトップソフトではない' },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Tonfotosはローカルで動くLLMですか？',
            a: 'いいえ。情報源が説明しているのは顔認識と写真の整理で、チャット機能や言語モデルの記載はありません。',
          },
          {
            q: 'Picasaの顔データを移せますか？',
            a: 'ドキュメントにPicasaからの移行の項目があるため、取り込みは文書化された手順です。PromptQuorumは試していません。',
          },
          {
            q: 'Apple siliconのMacで動きますか？',
            a: 'はい。ダウンロードページには、Intel版とは別にApple silicon向けのビルドが用意されています。',
          },
          {
            q: 'Familyライセンスで写真は共有されますか？',
            a: 'トップページには、Familyライセンスはユーザー間で人物情報を同期するとあります。写真が共有されるとは書かれていません。',
          },
          {
            q: 'スマホの写真はどうやって取り込みますか？',
            a: 'ドキュメントによれば、スマホアプリのTonfotosSyncを使うか、Windowsの場合はUSBケーブルで取り込みます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Tonfotosは、Windows・macOS・Linuxの大量の写真アーカイブ向けに、顔認識、重複削除、家系図を無料版と買い切りライセンスで提供し、開発元は認識がローカルで動作すると述べています。一方で、クローズドソースであること、無料ライセンスではタグ付けできる人数に上限があること、アプリが更新とライセンスの確認のために開発者のサーバーへ接続すること、クラッシュレポートにタグ付けされた名前が含まれうること、サイトに実際のバージョン番号、変更履歴、動作要件がないことが挙げられます。サブスクなしでローカルの家族写真アーカイブを使いたく、まず無料ライセンスで試す方に向いています。オープンソースや監査済みのデータの流れが必要な方は、ほかを検討してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Tonfotosのトップページ](https://tonfotos.com/) — 機能、ライセンス、価格。2026年10月30日確認。',
          '[TonfotosのFAQ](https://tonfotos.com/docs/faq/) — ローカル処理とネットワークに関する記述。2026年10月30日確認。',
          '[Tonfotosのダウンロードページ](https://tonfotos.com/download.html) — インストーラー、対応プラットフォーム、CUDAプラグイン。2026年10月30日確認。',
          '[Tonfotosのプライバシーポリシー](https://tonfotos.com/legal/privacy-policy/) — 収集データ、クラッシュレポート、管理者。2024年9月11日公開。',
          '[Tonfotosのドキュメント](https://tonfotos.com/docs/) — 機能と対応形式。2026年10月30日確認。',
          '[macOS Intel版インストーラー](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — アプリ本体からバージョン1.17.1を読み取り。ファイルの日付は2026年10月28日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Excire Fotoレビュー](/ja/power-local-llm/excire-foto-review) — ローカルAI検索を備えた、WindowsとMac向けの有料写真管理ソフト。',
          '[Facetレビュー](/ja/power-local-llm/facet-review) — 写真のスコア付けと選別ができる、無料のセルフホスト型ツール。',
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIラベルを内蔵するセルフホスト型の写真ライブラリ。',
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
    heroImage: '/images/tonfotos-review-hero-pt.webp',
    title: 'Análise do Tonfotos: gerenciador de fotos com reconhecimento facial local',
    seoTitle: 'Análise do Tonfotos: fotos com reconhecimento facial local',
    intro:
      'O Tonfotos é um gerenciador de arquivo de fotos e vídeos de código fechado para Windows, macOS e Linux cujo reconhecimento facial, segundo o fabricante, roda no seu próprio computador. Ele tem uma versão gratuita e licenças pagas perpétuas. Esta análise reflete o site, a documentação e a política de privacidade do Tonfotos como verificados em 30 de outubro de 2026, além dos próprios instaladores; a versão analisada é a 1.17.1.',
    metaDescription:
      'Análise do Tonfotos: fotos em Windows, Mac e Linux com reconhecimento facial local, segundo o fabricante. Versão grátis e licenças perpétuas.',
    twitterDescription:
      'Análise do Tonfotos: um gerenciador de arquivo de fotos e vídeos para Windows, macOS e Linux com remoção de duplicatas, árvore genealógica e reconhecimento facial local, segundo o fabricante. Licenças, privacidade e dúvidas em aberto.',
    audience:
      'Famílias e entusiastas com grandes arquivos de fotos em Windows, macOS ou Linux que querem marcar pessoas e remover duplicatas sem um serviço em nuvem, e que precisam saber o que as fontes confirmam sobre o fluxo de dados e as licenças.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Tonfotos',
    targetKeywords: [
      'análise tonfotos',
      'tonfotos reconhecimento facial',
      'gerenciador de fotos com reconhecimento facial offline',
      'software de arquivo de fotos da família',
      'alternativa ao picasa reconhecimento facial',
      'remover fotos duplicadas software',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**O Tonfotos é um gerenciador de arquivo de fotos e vídeos de código fechado para Windows, macOS e Linux que, segundo o fabricante, reconhece rostos com uma IA que roda localmente no seu computador.** Ele acrescenta remoção de duplicatas e uma árvore genealógica, e oferece uma versão gratuita e licenças pagas perpétuas em vez de assinatura.',
    quickAnswerTop: {
      pt: {
        question: 'O Tonfotos mantém suas fotos e os dados faciais no seu próprio computador?',
        answer:
          'Segundo o Tonfotos, sim para as fotos: o FAQ diz que ele "processes your photos right where they are and never sends them anywhere", e o reconhecimento facial roda localmente. Mesmo assim, o app contata o servidor do desenvolvedor para verificar atualizações e licença. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Código fechado e sem repositório público; sem assinatura.',
          'Windows 10 e 11, macOS 10.15 ou posterior (Intel e Apple silicon) e Linux (.deb e .rpm).',
          'Fluxo com rostos: os rostos são detectados uma vez por foto e depois associados; você confirma cada sugestão.',
          'Também: busca de duplicatas, eventos e locais, álbuns e tags, e uma árvore genealógica.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Tonfotos?', anchor: 'what-is-tonfotos' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Principais recursos', anchor: 'key-features' },
      { label: 'Onde a IA roda e fluxo de dados', anchor: 'privacy' },
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
            text: 'O Tonfotos é um gerenciador de arquivo de fotos e vídeos para desktop que, segundo o fabricante, encontra e agrupa rostos no seu próprio computador para que você marque pessoas, remova duplicatas e monte uma árvore genealógica.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o programa, aponta para suas pastas de fotos e marca alguns rostos; depois ele sugere as mesmas pessoas em outras fotos e você confirma cada sugestão.',
          },
        ],
        items: [
          'Fabricante: Andrey Isaev, empreendedor individual registrado em Erevan, na Armênia, segundo a política de privacidade.',
          'Custo: uma licença gratuita sem limite de tempo, mas com teto de pessoas marcadas, mais duas licenças pagas perpétuas.',
          'Instalação: instaladores comuns para cada sistema operacional; não é preciso terminal.',
          'Escopo: gerenciamento de arquivos de fotos e vídeos com reconhecimento facial; nenhum assistente de chat nem modelo de linguagem é descrito.',
          'Manutenção: os instaladores são de outubro de 2026, mas o site não mostra número de versão nem registro de alterações.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na documentação e na política de privacidade do Tonfotos e nos instaladores, verificados em 30 de outubro de 2026. A PromptQuorum não usou o Tonfotos em uma biblioteca de fotos real, então a precisão do reconhecimento e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'O que é o Tonfotos?',
        content: [
          '**O Tonfotos é um gerenciador de arquivo de fotos e vídeos para Windows, macOS e Linux que organiza grandes coleções familiares, remove duplicatas, reconhece rostos e cria árvores genealógicas.** O site diz que seus arquivos continuam sob seu controle, sem armazenamento em nuvem obrigatório. A versão analisada é a 1.17.1, lida no instalador do macOS para Intel.',
          'O software é publicado por Andrey Isaev, empreendedor individual registrado em Erevan, na Armênia, segundo a política de privacidade; o aviso de direitos autorais do site começa em 2021. Um app de celular separado, o TonfotosSync, importa fotos de iOS e Android; esta análise não o cobre.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Onde obter',
        content: [
          '**O Tonfotos é um instalador de clique duplo para Windows, macOS e Linux, e a licença gratuita não exige pagamento.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Site', 'Onde obter': '[tonfotos.com](https://tonfotos.com/)' },
          { 'Opção': 'Windows', 'Onde obter': 'tonfotos.exe para Windows 10 e 11 (x64), na [página de download](https://tonfotos.com/download.html)' },
          { 'Opção': 'Mac', 'Onde obter': 'tonfotos.dmg, com versões separadas para Intel e Apple silicon, para macOS 10.15 ou posterior' },
          { 'Opção': 'Linux', 'Onde obter': '.deb (Debian, Ubuntu) ou .rpm (Red Hat, Fedora, SUSE) para x64; as atualizações vêm pelo repositório apt ou yum do Tonfotos' },
          { 'Opção': 'Licença gratuita', 'Onde obter': 'US$ 0, sem limite de tempo, funcionalidade completa, número limitado de pessoas marcadas, estatísticas de uso anônimas' },
          { 'Opção': 'Licença Personal', 'Onde obter': 'US$ 59, perpétua, um usuário ou dispositivo, pessoas marcadas ilimitadas, estatísticas desativáveis' },
          { 'Opção': 'Licença Family', 'Onde obter': 'US$ 159, perpétua, até cinco usuários ou dispositivos, informações de pessoas sincronizadas entre usuários' },
          { 'Opção': 'Importar do celular', 'Onde obter': 'TonfotosSync para [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) e [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[Política de privacidade do Tonfotos](https://tonfotos.com/legal/privacy-policy/), publicada em 11 de setembro de 2024' },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Nenhum: software proprietário' },
        ],
        note: 'Versão analisada: 1.17.1 (instalador do macOS para Intel, arquivo de 28 de outubro de 2026); a própria página de download mostra o marcador "Version 0.0.0". Os preços aparecem em dólares americanos na página inicial, e a PromptQuorum não verificou qual moeda o checkout exibe. No Windows, o reconhecimento facial por GPU exige uma placa de vídeo compatível com CUDA e um instalador de plugin separado (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo o que segue vem da documentação do Tonfotos; a PromptQuorum não testou nada disso.**',
        ],
        items: [
          '**Pessoas.** Os rostos são detectados uma vez por foto e depois associados; o programa aprende com os rostos que você marca, você confirma cada sugestão, e rejeitar as erradas refina as seguintes. Rostos que ele não detecta podem ser adicionados manualmente.',
          '**Árvore genealógica.** É possível adicionar relações entre pessoas para montar uma árvore genealógica, e os dados faciais podem ser gravados nos metadados do arquivo.',
          '**Duplicatas.** Uma busca de duplicatas; a documentação recomenda removê-las antes de marcar pessoas ou editar metadados.',
          '**Biblioteca.** Eventos e locais, álbuns e tags, filtros e busca, edição de metadados e migração do Picasa.',
          '**Formatos.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF (somente macOS e Windows), muitos formatos RAW e formatos de vídeo comuns como MP4, MOV e MKV; alguns codecs de vídeo incomuns podem não gerar pré-visualização.',
          '**Extras.** Um visualizador de imagens e vídeos, um conversor de JPG que comprime imagens, uma apresentação de slides e um baixador do Telegram.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Onde a IA roda e fluxo de dados',
        content: [
          '**O Tonfotos diz que o reconhecimento facial é "powered by artificial intelligence running locally on your machine" e que ele "processes your photos right where they are and never sends them anywhere".** O FAQ acrescenta que os desenvolvedores não conseguem acessar suas fotos. O modelo não é nomeado.',
          'Segundo as fontes, três coisas saem do computador. O app se conecta regularmente ao servidor do desenvolvedor para verificar atualizações e gerenciar a licença. Estatísticas de uso anônimas podem ser coletadas com a sua permissão; a página inicial as lista como parte da licença gratuita, e as licenças pagas podem desativar as estatísticas e as atualizações automáticas em Preferências > Avançado. A política de privacidade também diz que relatórios de falha podem incluir nomes de pessoas marcadas, nomes de arquivos e pastas, tags e álbuns, e que as fotos só saem do dispositivo se você as enviar ao suporte.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Arquivistas de família** com grandes coleções que querem marcar pessoas e ter uma árvore genealógica.',
          '**Casas com sistemas mistos** que querem um só app para Windows, macOS e Linux.',
          '**Quem não gosta de assinaturas** e aceita uma licença perpétua.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Versão e manutenção.** O site mostra "Version 0.0.0" e nenhum registro de alterações. A PromptQuorum leu a 1.17.1 no instalador do macOS para Intel e a 1.17.0 no pacote do Linux, e não abriu o instalador do Windows (arquivo de 25 de setembro de 2026) nem o do Apple silicon (15 de setembro de 2026).',
          '**Qualidade do reconhecimento.** Precisão, velocidade e qualquer ganho com GPU não foram testados.',
          '**Limite da licença gratuita.** Não é informado quantas pessoas a licença gratuita permite.',
          '**Requisitos.** Nenhum mínimo de RAM, espaço em disco ou processador é publicado.',
          '**Uso offline.** As verificações de atualização e licença passam pelo servidor do desenvolvedor; não se diz se o app funciona totalmente offline.',
          '**Relatórios de falha.** A política lista nomes marcados e nomes de arquivos, mas não diz se incluem conteúdo de fotos ou dados faciais.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem três ferramentas analisadas que gerenciam ou pontuam uma biblioteca local de fotos; nenhuma é um substituto direto.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Excire Foto](/pt/power-local-llm/excire-foto-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Compra única / código fechado', 'Diferença principal': 'Acrescenta busca de conteúdo por IA e reconhecimento de texto; exige uma conta Excire' },
          { 'App': '[Facet](/pt/power-local-llm/facet-review)', 'Plataformas': 'Docker ou script, navegador', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Pontua e seleciona fotos e agrupa rostos; instalação de desenvolvedor, sem instalador' },
          { 'App': '[PhotoPrism](/pt/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Preço / licença': 'Community grátis / AGPL-3.0', 'Diferença principal': 'Biblioteca web auto-hospedada com rótulos de IA integrados, não um programa de desktop' },
        ],
        note: 'Confira o preço, a licença e as plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Tonfotos é um LLM local?',
            a: 'Não. As fontes descrevem reconhecimento facial e organização de fotos, e não citam nenhum recurso de chat nem modelo de linguagem.',
          },
          {
            q: 'Posso trazer meus rostos do Picasa?',
            a: 'A documentação tem uma seção sobre migração do Picasa, então a importação é um caminho documentado; a PromptQuorum não o testou.',
          },
          {
            q: 'Ele roda em Macs com Apple silicon?',
            a: 'Sim: a página de download oferece uma versão para Apple silicon ao lado da de Intel.',
          },
          {
            q: 'A licença Family compartilha minhas fotos?',
            a: 'A página inicial diz que a licença Family sincroniza as informações de pessoas entre usuários; não diz que as fotos são compartilhadas.',
          },
          {
            q: 'Como as fotos chegam do meu celular?',
            a: 'Segundo a documentação, pelo app de celular TonfotosSync ou, no Windows, por um cabo USB.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Tonfotos oferece reconhecimento facial, remoção de duplicatas e uma árvore genealógica para grandes arquivos de fotos em Windows, macOS e Linux, com versão gratuita e licenças perpétuas, e o fabricante diz que o reconhecimento roda localmente. Em contrapartida, é de código fechado, a licença gratuita limita as pessoas marcadas, o app contata o servidor do desenvolvedor para verificar atualizações e licença, os relatórios de falha podem incluir nomes marcados, e o site não mostra número de versão real, registro de alterações nem requisitos do sistema. Serve para quem quer um arquivo familiar de fotos local sem assinatura e vai começar pela licença gratuita; quem precisa de código aberto ou de um fluxo de dados auditado deve procurar outra opção.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página inicial do Tonfotos](https://tonfotos.com/) — recursos, licenças e preços, verificado em 30 de outubro de 2026.',
          '[FAQ do Tonfotos](https://tonfotos.com/docs/faq/) — declarações sobre processamento local e rede, verificado em 30 de outubro de 2026.',
          '[Página de download do Tonfotos](https://tonfotos.com/download.html) — instaladores, plataformas e plugin CUDA, verificado em 30 de outubro de 2026.',
          '[Política de privacidade do Tonfotos](https://tonfotos.com/legal/privacy-policy/) — dados coletados, relatórios de falha e controlador, publicada em 11 de setembro de 2024.',
          '[Documentação do Tonfotos](https://tonfotos.com/docs/) — recursos e formatos compatíveis, verificado em 30 de outubro de 2026.',
          '[Instalador do macOS para Intel](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — versão 1.17.1 lida no pacote do app, arquivo de 28 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Excire Foto](/pt/power-local-llm/excire-foto-review) — um gerenciador de fotos pago para Windows e Mac com busca local por IA.',
          '[Análise do Facet](/pt/power-local-llm/facet-review) — uma ferramenta gratuita e auto-hospedada para pontuar e selecionar fotos.',
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
    heroImage: '/images/tonfotos-review-hero-ar.webp',
    title: 'مراجعة Tonfotos: مدير صور بتعرّف محلي على الوجوه',
    seoTitle: 'مراجعة Tonfotos: مدير صور بتعرّف محلي على الوجوه',
    intro:
      'Tonfotos برنامج مغلق المصدر لإدارة أرشيف الصور والفيديو على Windows وmacOS وLinux، ويعمل التعرف على الوجوه فيه على حاسوبك الخاص بحسب الشركة المطوّرة. يتوفر بنسخة مجانية وتراخيص مدفوعة دائمة. تعكس هذه المراجعة موقع Tonfotos ووثائقه وسياسة الخصوصية فيه كما جرى التحقق منها في 30 أكتوبر 2026، إضافةً إلى ملفات التثبيت نفسها؛ والإصدار الذي راجعناه هو 1.17.1.',
    metaDescription:
      'مراجعة Tonfotos: مدير صور لأنظمة Windows وMac وLinux يعمل التعرف على الوجوه فيه محليًا بحسب مطوّره. نسخة مجانية وتراخيص دائمة، وأسئلة مفتوحة عن الخصوصية.',
    twitterDescription:
      'مراجعة Tonfotos: برنامج لإدارة أرشيف الصور والفيديو على Windows وmacOS وLinux مع إزالة المكررات وشجرة العائلة وتعرّف على الوجوه يعمل محليًا بحسب مطوّره. التراخيص والخصوصية والأسئلة المفتوحة.',
    audience:
      'العائلات والهواة الذين لديهم أرشيفات صور كبيرة على Windows أو macOS أو Linux ويريدون وسم الأشخاص وحذف الصور المكررة دون خدمة سحابية، ويحتاجون إلى معرفة ما تؤكده المصادر عن تدفق البيانات والترخيص.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Tonfotos',
    targetKeywords: [
      'مراجعة tonfotos',
      'tonfotos التعرف على الوجوه',
      'مدير صور بتعرف على الوجوه دون اتصال',
      'برنامج أرشيف صور العائلة',
      'بديل picasa التعرف على الوجوه',
      'برنامج حذف الصور المكررة',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos برنامج مغلق المصدر لإدارة أرشيف الصور والفيديو على Windows وmacOS وLinux، ويتعرف على الوجوه بحسب الشركة المطوّرة بذكاء اصطناعي يعمل محليًا على حاسوبك.** يضيف إزالة المكررات وشجرة العائلة، ويتوفر بنسخة مجانية وتراخيص مدفوعة دائمة بدلًا من الاشتراك.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Tonfotos صورك وبيانات الوجوه على حاسوبك الخاص؟',
        answer:
          'بحسب Tonfotos، نعم بالنسبة إلى الصور: تقول الأسئلة الشائعة إنه "processes your photos right where they are and never sends them anywhere"، ويعمل التعرف على الوجوه محليًا. ومع ذلك يتصل التطبيق بخادم المطوّر للتحقق من التحديثات والترخيص. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مغلق المصدر وبلا مستودع عام؛ ولا يعتمد على الاشتراك.',
          'يدعم Windows 10 و11 وmacOS 10.15 أو أحدث (Intel وApple silicon) وLinux (‏.deb و.rpm).',
          'سير العمل مع الوجوه: تُكتشف الوجوه مرة واحدة لكل صورة ثم تُطابَق، وتؤكد أنت كل اقتراح.',
          'وتتوفر أيضًا ميزة البحث عن المكررات، والأحداث والمواقع، والألبومات والوسوم، وشجرة العائلة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Tonfotos؟', anchor: 'what-is-tonfotos' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات الرئيسية', anchor: 'key-features' },
      { label: 'أين يعمل الذكاء الاصطناعي وتدفق البيانات', anchor: 'privacy' },
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
            text: 'Tonfotos برنامج مكتبي لإدارة أرشيف الصور والفيديو يجد الوجوه ويجمّعها على حاسوبك الخاص بحسب الشركة المطوّرة، لتتمكن من وسم الأشخاص وحذف المكررات وبناء شجرة عائلة.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت البرنامج وتوجّهه إلى مجلدات صورك وتضع وسومًا على بعض الوجوه؛ ثم يقترح الأشخاص أنفسهم في صور أخرى، وتؤكد أنت كل اقتراح.',
          },
        ],
        items: [
          'المطوّر: Andrey Isaev، وهو بحسب سياسة الخصوصية رائد أعمال فردي مسجّل في يريفان بأرمينيا.',
          'التكلفة: ترخيص مجاني بلا حد زمني لكن بسقف لعدد الأشخاص الموسومين، إضافةً إلى ترخيصين مدفوعين دائمين.',
          'الإعداد: برامج تثبيت عادية لكل نظام تشغيل؛ ولا حاجة إلى الطرفية.',
          'النطاق: إدارة أرشيف الصور والفيديو مع التعرف على الوجوه؛ ولا يوصف أي مساعد محادثة أو نموذج لغوي.',
          'الصيانة: ملفات التثبيت مؤرخة بأكتوبر 2026، لكن الموقع لا يعرض رقم إصدار ولا سجل تغييرات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع Tonfotos ووثائقه وسياسة الخصوصية فيه وإلى ملفات التثبيت، وقد جرى التحقق منها في 30 أكتوبر 2026. لم تستخدم PromptQuorum برنامج Tonfotos على مكتبة صور حقيقية، لذلك لا نقيّم دقة التعرف ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'ما هو Tonfotos؟',
        content: [
          '**Tonfotos برنامج لإدارة أرشيف الصور والفيديو على Windows وmacOS وLinux، ينظّم مجموعات العائلة الكبيرة ويزيل المكررات ويتعرف على الوجوه ويبني أشجار العائلة.** يقول الموقع إن ملفاتك تبقى تحت سيطرتك دون تخزين سحابي إلزامي. الإصدار الذي راجعناه هو 1.17.1، وقد قُرئ من ملف تثبيت macOS لمعالجات Intel.',
          'ينشر البرنامج Andrey Isaev، وهو بحسب سياسة الخصوصية رائد أعمال فردي مسجّل في يريفان بأرمينيا؛ ويبدأ إشعار حقوق النشر في الموقع من عام 2021. وهناك تطبيق هاتف منفصل هو TonfotosSync يستورد الصور من iOS وAndroid؛ ولا تغطيه هذه المراجعة.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'كيف تحصل عليه',
        content: [
          '**Tonfotos برنامج تثبيت بنقرتين لأنظمة Windows وmacOS وLinux، ولا يتطلب الترخيص المجاني أي دفع.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[tonfotos.com](https://tonfotos.com/)' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'ملف tonfotos.exe لنظامي Windows 10 و11 (x64)، من [صفحة التنزيل](https://tonfotos.com/download.html)' },
          { 'الخيار': 'Mac', 'مصدر الحصول عليه': 'ملف tonfotos.dmg، مع إصدارين منفصلين لـ Intel وApple silicon، لنظام macOS 10.15 أو أحدث' },
          { 'الخيار': 'Linux', 'مصدر الحصول عليه': 'حزمة .deb (‏Debian وUbuntu) أو .rpm (‏Red Hat وFedora وSUSE) لمعمارية x64؛ وتأتي التحديثات عبر مستودع apt أو yum الخاص بـ Tonfotos' },
          { 'الخيار': 'الترخيص المجاني', 'مصدر الحصول عليه': '0 دولار، بلا حد زمني، وظائف كاملة، عدد محدود من الأشخاص الموسومين، إحصاءات استخدام مجهولة' },
          { 'الخيار': 'ترخيص Personal', 'مصدر الحصول عليه': '59 دولارًا، دائم، مستخدم أو جهاز واحد، عدد غير محدود من الأشخاص الموسومين، ويمكن تعطيل الإحصاءات' },
          { 'الخيار': 'ترخيص Family', 'مصدر الحصول عليه': '159 دولارًا، دائم، حتى خمسة مستخدمين أو أجهزة، ومزامنة معلومات الأشخاص بين المستخدمين' },
          { 'الخيار': 'الاستيراد من الهاتف', 'مصدر الحصول عليه': 'تطبيق TonfotosSync لنظامي [iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014) و[Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[سياسة الخصوصية في Tonfotos](https://tonfotos.com/legal/privacy-policy/)، نُشرت في 11 سبتمبر 2024' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': 'لا توجد: برنامج مملوك' },
        ],
        note: 'الإصدار الذي راجعناه: 1.17.1 (ملف تثبيت macOS لمعالجات Intel، بتاريخ 28 أكتوبر 2026)؛ أما صفحة التنزيل نفسها فتعرض القيمة المؤقتة "Version 0.0.0". الأسعار مذكورة بالدولار الأمريكي في الصفحة الرئيسية، ولم تتحقق PromptQuorum من العملة التي تظهر عند الدفع. وفي Windows يتطلب التعرف على الوجوه بوحدة GPU بطاقة رسوميات تدعم CUDA وبرنامج تثبيت إضافة منفصلًا (TonfotosCudaPlugin.msi).',
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل بند أدناه مأخوذ من وثائق Tonfotos؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**الأشخاص.** تُكتشف الوجوه مرة واحدة لكل صورة ثم تُطابَق؛ ويتعلم البرنامج من الوجوه التي توسمها، وتؤكد أنت كل اقتراح، ورفض الاقتراحات الخاطئة يحسّن ما يليها. ويمكن إضافة الوجوه التي لم يكتشفها يدويًا.',
          '**شجرة العائلة.** يمكن إضافة العلاقات بين الأشخاص لبناء شجرة عائلة، ويمكن حفظ بيانات الوجوه في البيانات الوصفية للملف.',
          '**المكررات.** يتوفر بحث عن المكررات؛ وتنصح الوثائق بحذف المكررات قبل وسم الأشخاص أو تحرير البيانات الوصفية.',
          '**المكتبة.** الأحداث والمواقع، والألبومات والوسوم، والمرشحات والبحث، وتحرير البيانات الوصفية، والانتقال من Picasa.',
          '**الصيغ.** JPEG وPNG وGIF وTIFF وAVIF وWebP وHEIC/HEIF (على macOS وWindows فقط)، وصيغ RAW كثيرة، وصيغ فيديو شائعة مثل MP4 وMOV وMKV؛ وقد لا تُعرض معاينة بعض ترميزات الفيديو غير المعتادة.',
          '**إضافات.** عارض للصور والفيديو، ومحوّل JPG يضغط الصور، وعرض شرائح، ومنزّل من Telegram.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'أين يعمل الذكاء الاصطناعي وتدفق البيانات',
        content: [
          '**يقول Tonfotos إن التعرف على الوجوه "powered by artificial intelligence running locally on your machine" وإنه "processes your photos right where they are and never sends them anywhere".** وتضيف الأسئلة الشائعة أن المطوّرين لا يستطيعون الوصول إلى صورك. ولم يُذكر اسم النموذج.',
          'بحسب المصادر، تخرج ثلاثة أشياء إلى الخارج. أولًا، يتصل التطبيق بانتظام بخادم المطوّر للتحقق من التحديثات وإدارة الترخيص. ثانيًا، قد تُجمع إحصاءات استخدام مجهولة بإذنك؛ وتدرجها الصفحة الرئيسية ضمن الترخيص المجاني، ويمكن للتراخيص المدفوعة إيقاف الإحصاءات والتحديثات التلقائية من التفضيلات > متقدم. ثالثًا، تقول سياسة الخصوصية إن تقارير الأعطال قد تتضمن أسماء الأشخاص الموسومين وأسماء الملفات والمجلدات والوسوم والألبومات، وإن الصور لا تغادر الجهاز إلا إذا أرسلتها إلى الدعم.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يؤرشفون صور العائلة** ولديهم مجموعات كبيرة ويريدون وسم الأشخاص وشجرة عائلة.',
          '**البيوت متعددة الأنظمة** التي تريد تطبيقًا واحدًا على Windows وmacOS وLinux.',
          '**من لا يحبون الاشتراكات** ويقبلون ترخيصًا دائمًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الإصدار والصيانة.** يعرض الموقع "Version 0.0.0" ولا يوجد سجل تغييرات. قرأت PromptQuorum الإصدار 1.17.1 من ملف تثبيت macOS لمعالجات Intel والإصدار 1.17.0 من حزمة Linux، ولم تفتح ملف تثبيت Windows (بتاريخ 25 سبتمبر 2026) ولا ملف Apple silicon (بتاريخ 15 سبتمبر 2026).',
          '**جودة التعرف.** لم نختبر الدقة ولا السرعة ولا أي فائدة من وحدة GPU.',
          '**حد الترخيص المجاني.** لا يُذكر عدد الأشخاص الذي يسمح به الترخيص المجاني.',
          '**المتطلبات.** لم يُنشر حد أدنى لذاكرة RAM أو مساحة القرص أو المعالج.',
          '**الاستخدام دون اتصال.** تمر عمليات التحقق من التحديثات والترخيص عبر خادم المطوّر؛ ولا يُذكر ما إذا كان التطبيق يعمل دون اتصال بالكامل.',
          '**تقارير الأعطال.** تذكر السياسة الأسماء الموسومة وأسماء الملفات، لكنها لا تقول إن كانت تتضمن محتوى الصور أو بيانات الوجوه.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل ثلاث أدوات لها مراجعات تدير مكتبة صور محلية أو تقيّمها؛ ولا تُعدّ أي منها بديلًا مباشرًا.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Excire Foto](/ar/power-local-llm/excire-foto-review)', 'المنصات': 'Windows وmacOS', 'السعر / الرخصة': 'شراء لمرة واحدة / مغلق المصدر', 'الفرق الأبرز': 'يضيف بحثًا بالذكاء الاصطناعي في المحتوى وتعرفًا على النص؛ ويتطلب حساب Excire' },
          { 'التطبيق': '[Facet](/ar/power-local-llm/facet-review)', 'المنصات': 'Docker أو برنامج نصي ومتصفح', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'يقيّم الصور ويفرزها ويجمّع الوجوه؛ إعداده للمطورين وبلا برنامج تثبيت' },
          { 'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)', 'المنصات': 'خادم (Docker) ومتصفح', 'السعر / الرخصة': 'Community مجاني / AGPL-3.0', 'الفرق الأبرز': 'مكتبة ويب ذاتية الاستضافة بتسميات ذكاء اصطناعي مدمجة، وليست برنامج سطح مكتب' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Tonfotos نموذج لغوي محلي (LLM)؟',
            a: 'لا. تصف المصادر التعرف على الوجوه وتنظيم الصور، ولا تذكر أي ميزة محادثة أو نموذجًا لغويًا.',
          },
          {
            q: 'هل يمكنني نقل الوجوه من Picasa؟',
            a: 'تتضمن الوثائق قسمًا عن الانتقال من Picasa، فالاستيراد مسار موثّق؛ ولم تختبره PromptQuorum.',
          },
          {
            q: 'هل يعمل على أجهزة Mac بمعالج Apple silicon؟',
            a: 'نعم: تقدم صفحة التنزيل إصدارًا لمعالجات Apple silicon إلى جانب إصدار Intel.',
          },
          {
            q: 'هل يشارك ترخيص Family صوري؟',
            a: 'تقول الصفحة الرئيسية إن ترخيص Family يزامن معلومات الأشخاص بين المستخدمين؛ ولا تقول إن الصور تُشارَك.',
          },
          {
            q: 'كيف تصل الصور من هاتفي؟',
            a: 'بحسب الوثائق، عبر تطبيق الهاتف TonfotosSync أو عبر كبل USB على Windows.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يوفّر Tonfotos التعرف على الوجوه وإزالة المكررات وشجرة العائلة لأرشيفات الصور الكبيرة على Windows وmacOS وLinux، بنسخة مجانية وتراخيص دائمة، وتقول الشركة المطوّرة إن التعرف يعمل محليًا. وفي المقابل هو مغلق المصدر، ويحدّ الترخيص المجاني من عدد الأشخاص الموسومين، ويتصل التطبيق بخادم المطوّر للتحقق من التحديثات والترخيص، وقد تتضمن تقارير الأعطال أسماء موسومة، ولا يعرض الموقع رقم إصدار حقيقيًا ولا سجل تغييرات ولا متطلبات النظام. يناسب من يريدون أرشيف صور عائلية محليًا دون اشتراك ويبدؤون بالترخيص المجاني؛ أما من يحتاجون إلى مصدر مفتوح أو تدفق بيانات مدقَّق فعليهم البحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الصفحة الرئيسية لـ Tonfotos](https://tonfotos.com/) — الميزات والتراخيص والأسعار، جرى التحقق منها في 30 أكتوبر 2026.',
          '[الأسئلة الشائعة في Tonfotos](https://tonfotos.com/docs/faq/) — إفادات عن المعالجة المحلية والشبكة، جرى التحقق منها في 30 أكتوبر 2026.',
          '[صفحة تنزيل Tonfotos](https://tonfotos.com/download.html) — برامج التثبيت والمنصات وإضافة CUDA، جرى التحقق منها في 30 أكتوبر 2026.',
          '[سياسة الخصوصية في Tonfotos](https://tonfotos.com/legal/privacy-policy/) — البيانات المجموعة وتقارير الأعطال والمسؤول عن المعالجة، نُشرت في 11 سبتمبر 2024.',
          '[وثائق Tonfotos](https://tonfotos.com/docs/) — الميزات والصيغ المدعومة، جرى التحقق منها في 30 أكتوبر 2026.',
          '[ملف تثبيت macOS لمعالجات Intel](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — قُرئ الإصدار 1.17.1 من حزمة التطبيق، والملف بتاريخ 28 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Excire Foto](/ar/power-local-llm/excire-foto-review) — مدير صور مدفوع لنظامي Windows وMac مع بحث محلي بالذكاء الاصطناعي.',
          '[مراجعة Facet](/ar/power-local-llm/facet-review) — أداة مجانية ذاتية الاستضافة لتقييم الصور وفرزها.',
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور ذاتية الاستضافة بتسميات ذكاء اصطناعي مدمجة.',
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
    heroImage: '/images/tonfotos-review-hero-zh.webp',
    title: 'Tonfotos 评测：本地人脸识别的照片管理软件',
    seoTitle: 'Tonfotos 评测：本地人脸识别的照片与视频归档管理软件',
    intro:
      'Tonfotos 是一款适用于 Windows、macOS 和 Linux 的闭源照片与视频归档管理软件，据开发者称，其人脸识别在你自己的电脑上运行。它提供免费版和一次性购买的永久付费授权。本评测依据 2026 年 10 月 30 日核对的 Tonfotos 官网、文档、隐私政策以及安装程序本身；评测版本为 1.17.1。',
    metaDescription:
      'Tonfotos 评测：适用于 Windows、Mac 和 Linux 的照片管理软件，据开发者称人脸识别在本地运行。提供免费版和永久授权。',
    twitterDescription:
      'Tonfotos 评测：适用于 Windows、macOS 和 Linux 的照片与视频归档管理软件，支持去重、家谱和据开发者称在本地运行的人脸识别。授权、隐私与待核实事项。',
    audience:
      '在 Windows、macOS 或 Linux 上拥有大量照片档案、想在不使用云服务的情况下标注人物并清理重复照片的家庭和爱好者，他们需要了解资料对数据流向和授权方式的确认情况。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tonfotos 评测',
    targetKeywords: [
      'tonfotos 评测',
      'tonfotos 人脸识别',
      '离线人脸识别照片管理软件',
      '家庭照片归档软件',
      'picasa 替代 人脸识别',
      '删除重复照片软件',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos 是一款适用于 Windows、macOS 和 Linux 的闭源照片与视频归档管理软件，据开发者称，它使用在你电脑本地运行的 AI 识别人脸。** 它还提供去重和家谱功能，采用免费版加永久付费授权的方式，而不是订阅。',
    quickAnswerTop: {
      zh: {
        question: 'Tonfotos 会把你的照片和人脸数据留在自己的电脑上吗？',
        answer:
          '据 Tonfotos 称，照片是这样：其 FAQ 写道它 "processes your photos right where they are and never sends them anywhere"，人脸识别也在本地运行。不过该应用会连接开发者的服务器来检查更新和授权。PromptQuorum 没有检查网络流量。',
        bullets: [
          '闭源，没有公开代码仓库；不是订阅制。',
          '支持 Windows 10 和 11、macOS 10.15 及更高版本（Intel 和 Apple silicon）以及 Linux（.deb 和 .rpm）。',
          '人脸流程：每张照片只检测一次人脸，然后进行匹配；每条建议都由你确认。',
          '此外还有重复项搜索、事件与地点、相册与标签，以及家谱。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Tonfotos 是什么？', anchor: 'what-is-tonfotos' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '主要功能', anchor: 'key-features' },
      { label: 'AI 运行位置与数据流向', anchor: 'privacy' },
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
            text: 'Tonfotos 是一款桌面照片与视频归档管理软件，据开发者称，它在你自己的电脑上查找并归类人脸，方便你标注人物、清理重复照片并制作家谱。',
          },
          {
            type: 'plain-terms',
            text: '安装后指定照片文件夹并标注几张人脸，它就会在其他照片中推荐同一个人，每条建议都由你确认。',
          },
        ],
        items: [
          '开发者：Andrey Isaev，据隐私政策，是在亚美尼亚埃里温登记的个体经营者。',
          '费用：一个没有时间限制但限制标注人数的免费授权，另有两种永久付费授权。',
          '安装：各操作系统都有普通安装程序，不需要终端。',
          '范围：带人脸识别的照片与视频归档管理；资料中没有提到聊天助手或语言模型。',
          '维护：安装程序的日期在 2026 年 10 月，但官网没有显示版本号或更新日志。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 2026 年 10 月 30 日核对的 Tonfotos 官网、文档、隐私政策以及安装程序。PromptQuorum 没有在真实照片库上使用过 Tonfotos，因此识别准确度和速度未做评估。',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'Tonfotos 是什么？',
        content: [
          '**Tonfotos 是一款适用于 Windows、macOS 和 Linux 的照片与视频归档管理软件，可整理大型家庭影像集、清理重复项、识别人脸并制作家谱。** 官网称你的文件由你自己掌控，不强制使用云存储。评测版本为 1.17.1，读取自 macOS Intel 安装程序。',
          '该软件由 Andrey Isaev 发布，据隐私政策，他是在亚美尼亚埃里温登记的个体经营者；官网的版权声明从 2021 年起。另有一款独立的手机应用 TonfotosSync，可从 iOS 和 Android 导入照片，本评测不涉及。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '获取方式',
        content: [
          '**Tonfotos 是适用于 Windows、macOS 和 Linux 的双击安装程序，免费授权无需付款。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '官网', '获取方式': '[tonfotos.com](https://tonfotos.com/)' },
          { '选项': 'Windows', '获取方式': '适用于 Windows 10 和 11（x64）的 tonfotos.exe，从[下载页面](https://tonfotos.com/download.html)获取' },
          { '选项': 'Mac', '获取方式': 'tonfotos.dmg，Intel 和 Apple silicon 为不同构建，要求 macOS 10.15 或更高版本' },
          { '选项': 'Linux', '获取方式': '适用于 x64 的 .deb（Debian、Ubuntu）或 .rpm（Red Hat、Fedora、SUSE）；更新通过 Tonfotos 的 apt 或 yum 软件源提供' },
          { '选项': '免费授权', '获取方式': '$0，无时间限制，功能完整，可标注的人数有限，收集匿名使用统计' },
          { '选项': 'Personal 授权', '获取方式': '$59，永久，1 个用户或设备，标注人数不限，可关闭统计' },
          { '选项': 'Family 授权', '获取方式': '$159，永久，最多 5 个用户或设备，人物信息在用户之间同步' },
          { '选项': '手机导入', '获取方式': 'TonfotosSync（[iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014)、[Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync)）' },
          { '选项': '隐私政策', '获取方式': '[Tonfotos 隐私政策](https://tonfotos.com/legal/privacy-policy/)，2024 年 9 月 11 日发布' },
          { '选项': '源代码', '获取方式': '无：专有软件' },
        ],
        note: '评测版本：1.17.1（macOS Intel 安装程序，文件日期为 2026 年 10 月 28 日）；下载页面本身显示占位符 "Version 0.0.0"。价格以美元列在首页，PromptQuorum 没有核实结账页显示哪种货币。在 Windows 上，GPU 人脸识别需要支持 CUDA 的显卡和单独的插件安装程序（TonfotosCudaPlugin.msi）。',
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自 Tonfotos 文档；PromptQuorum 未测试其中任何一项。**',
        ],
        items: [
          '**人物。** 每张照片只检测一次人脸，然后进行匹配；程序会从你标注的人脸中学习，每条建议都由你确认，拒绝错误建议会让之后的建议更准确。漏检的人脸可以手动添加。',
          '**家谱。** 可以添加人物之间的关系来建立家谱，人脸数据可保存在文件元数据中。',
          '**重复项。** 提供重复项搜索；文档建议在标注人物或编辑元数据之前先删除重复项。',
          '**照片库。** 事件与地点、相册与标签、筛选与搜索、元数据编辑，以及从 Picasa 迁移。',
          '**格式。** JPEG、PNG、GIF、TIFF、AVIF、WebP、HEIC/HEIF（仅 macOS 和 Windows）、多种 RAW 格式，以及 MP4、MOV、MKV 等常见视频格式；个别少见的视频编码可能无法预览。',
          '**其他。** 图片与视频查看器、可压缩图片的 JPG 转换器、幻灯片放映和 Telegram 下载器。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'AI 运行位置与数据流向',
        content: [
          '**Tonfotos 称人脸识别 "powered by artificial intelligence running locally on your machine"，并称它 "processes your photos right where they are and never sends them anywhere"。** FAQ 还补充说，开发者无法访问你的照片。模型名称没有公布。',
          '据资料，有三类内容会离开你的电脑。第一，应用会定期连接开发者的服务器来检查更新和管理授权。第二，在你许可的情况下可能收集匿名使用统计；首页把它列为免费授权的一部分，付费授权可在 偏好设置 > 高级 中关闭统计和自动更新。第三，隐私政策称崩溃报告可能包含已标注人物的姓名、文件和文件夹名称、标签和相册，并称只有你主动发给技术支持时，照片才会离开设备。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，不是审计结果，PromptQuorum 没有检查网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**家庭影像整理者**：照片很多，想标注人物并制作家谱。',
          '**多系统家庭**：希望 Windows、macOS 和 Linux 用同一款应用。',
          '**不喜欢订阅的人**：能接受永久授权。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**版本与维护。** 官网显示 "Version 0.0.0"，也没有更新日志。PromptQuorum 从 macOS Intel 安装程序读到 1.17.1，从 Linux 软件包读到 1.17.0，没有打开 Windows 安装程序（文件日期为 2026 年 9 月 25 日）和 Apple silicon 安装程序（2026 年 9 月 15 日）。',
          '**识别质量。** 准确度、速度以及 GPU 带来的提升均未测试。',
          '**免费授权的上限。** 没有说明免费授权最多允许标注多少人。',
          '**运行要求。** 没有公布最低内存、磁盘空间或处理器要求。',
          '**离线使用。** 更新和授权检查经由开发者的服务器进行；没有说明应用能否完全离线运行。',
          '**崩溃报告。** 政策列出了已标注的姓名和文件名，但没有说明是否包含照片内容或人脸数据。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中有三款已评测的工具可以管理或评分本地照片库，但没有一款能完全替代它。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Excire Foto](/zh/power-local-llm/excire-foto-review)', '平台': 'Windows、macOS', '价格 / 许可证': '一次性购买 / 闭源', '主要区别': '增加 AI 内容搜索和文字识别；需要 Excire 账户' },
          { '应用': '[Facet](/zh/power-local-llm/facet-review)', '平台': 'Docker 或脚本、浏览器', '价格 / 许可证': '免费 / MIT', '主要区别': '为照片评分、筛选并归类人脸；面向开发者的部署方式，没有安装程序' },
          { '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)', '平台': '服务器（Docker）、浏览器', '价格 / 许可证': 'Community 版免费 / AGPL-3.0', '主要区别': '内置 AI 标签的自托管网页照片库，不是桌面程序' },
        ],
        note: '请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Tonfotos 是本地 LLM 吗？',
            a: '不是。资料描述的是人脸识别和照片整理，没有提到聊天功能或语言模型。',
          },
          {
            q: '能把 Picasa 里的人脸迁移过来吗？',
            a: '文档中有 Picasa 迁移的章节，所以导入是有文档说明的途径；PromptQuorum 没有测试。',
          },
          {
            q: '能在 Apple silicon 的 Mac 上运行吗？',
            a: '可以：下载页面在 Intel 构建之外还提供单独的 Apple silicon 构建。',
          },
          {
            q: 'Family 授权会共享我的照片吗？',
            a: '首页称 Family 授权会在用户之间同步人物信息；没有说照片会被共享。',
          },
          {
            q: '手机里的照片怎么导入？',
            a: '据文档，可通过手机应用 TonfotosSync 导入，在 Windows 上也可用 USB 数据线。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Tonfotos 为 Windows、macOS 和 Linux 上的大型照片档案提供人脸识别、去重和家谱功能，有免费版和永久授权，开发者称识别在本地运行。另一方面，它是闭源软件，免费授权限制标注人数，应用会连接开发者的服务器检查更新和授权，崩溃报告可能包含已标注的姓名，官网也没有真实的版本号、更新日志或系统要求。它适合想要不订阅的本地家庭照片档案、并先用免费授权试用的人；需要开源或经过审计的数据流向的用户应另寻他选。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Tonfotos 首页](https://tonfotos.com/) — 功能、授权和价格，2026 年 10 月 30 日核对。',
          '[Tonfotos FAQ](https://tonfotos.com/docs/faq/) — 本地处理和网络方面的说明，2026 年 10 月 30 日核对。',
          '[Tonfotos 下载页面](https://tonfotos.com/download.html) — 安装程序、平台和 CUDA 插件，2026 年 10 月 30 日核对。',
          '[Tonfotos 隐私政策](https://tonfotos.com/legal/privacy-policy/) — 收集的数据、崩溃报告和控制者，2024 年 9 月 11 日发布。',
          '[Tonfotos 文档](https://tonfotos.com/docs/) — 功能和支持的格式，2026 年 10 月 30 日核对。',
          '[macOS Intel 安装程序](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — 从应用包中读取版本 1.17.1，文件日期为 2026 年 10 月 28 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Excire Foto 评测](/zh/power-local-llm/excire-foto-review) — 适用于 Windows 和 Mac、带本地 AI 搜索的付费照片管理软件。',
          '[Facet 评测](/zh/power-local-llm/facet-review) — 免费的自托管照片评分与筛选工具。',
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
    heroImage: '/images/tonfotos-review-hero-ko.webp',
    title: 'Tonfotos 리뷰: 로컬 얼굴 인식 사진 관리 프로그램',
    seoTitle: 'Tonfotos 리뷰: 로컬 얼굴 인식 사진 관리 프로그램',
    intro:
      'Tonfotos는 Windows, macOS, Linux용 비공개 소스 사진·동영상 아카이브 관리 프로그램으로, 개발사에 따르면 얼굴 인식이 내 컴퓨터에서 실행됩니다. 무료 버전과 일회성 구매 유료 라이선스가 있습니다. 이 리뷰는 2026년 10월 30일에 확인한 Tonfotos 웹사이트, 문서, 개인정보 처리방침과 설치 파일 자체를 바탕으로 하며, 확인한 버전은 1.17.1입니다.',
    metaDescription:
      'Tonfotos 리뷰: Windows·Mac·Linux용 사진 관리 프로그램. 개발사에 따르면 얼굴 인식이 로컬에서 실행됩니다. 무료 버전과 영구 라이선스 제공.',
    twitterDescription:
      'Tonfotos 리뷰: 중복 제거, 가계도, 개발사에 따르면 로컬에서 실행되는 얼굴 인식을 갖춘 Windows·macOS·Linux용 사진·동영상 아카이브 관리 프로그램. 라이선스, 개인정보, 미확인 사항.',
    audience:
      'Windows, macOS 또는 Linux에서 대규모 사진 아카이브를 보유하고 클라우드 서비스 없이 인물 태그와 중복 사진 정리를 하려는 가족과 애호가로, 데이터 흐름과 라이선스에 대해 출처가 무엇을 확인해 주는지 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tonfotos 리뷰',
    targetKeywords: [
      'tonfotos 리뷰',
      'tonfotos 얼굴 인식',
      '오프라인 얼굴 인식 사진 관리 프로그램',
      '가족 사진 아카이브 소프트웨어',
      'picasa 대안 얼굴 인식',
      '중복 사진 삭제 프로그램',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA CUDA'],
    leadAnswerBlock:
      '**Tonfotos는 Windows, macOS, Linux용 비공개 소스 사진·동영상 아카이브 관리 프로그램으로, 개발사에 따르면 내 컴퓨터에서 로컬로 실행되는 AI로 얼굴을 인식합니다.** 중복 제거와 가계도 기능이 있으며, 구독 대신 무료 버전과 영구 유료 라이선스로 제공됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'Tonfotos는 사진과 얼굴 데이터를 내 컴퓨터 안에만 보관합니까?',
        answer:
          'Tonfotos에 따르면 사진은 그렇습니다. FAQ에는 "processes your photos right where they are and never sends them anywhere"라고 되어 있으며, 얼굴 인식은 로컬에서 실행됩니다. 다만 앱은 업데이트와 라이선스 확인을 위해 개발자의 서버에 접속합니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '비공개 소스이며 공개 저장소가 없고, 구독제가 아닙니다.',
          'Windows 10·11, macOS 10.15 이상(Intel 및 Apple silicon), Linux(.deb 및 .rpm)를 지원합니다.',
          '얼굴 흐름: 얼굴은 사진마다 한 번 감지된 뒤 대조되며, 모든 제안을 직접 확인합니다.',
          '그 밖에 중복 검색, 이벤트와 위치, 앨범과 태그, 가계도가 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Tonfotos란?', anchor: 'what-is-tonfotos' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '주요 기능', anchor: 'key-features' },
      { label: 'AI 실행 위치와 데이터 흐름', anchor: 'privacy' },
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
            text: 'Tonfotos는 데스크톱 사진·동영상 아카이브 관리 프로그램으로, 개발사에 따르면 내 컴퓨터에서 얼굴을 찾아 묶어 주므로 인물 태그, 중복 제거, 가계도 만들기를 할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '설치한 뒤 사진 폴더를 지정하고 몇 개의 얼굴에 태그를 달면, 다른 사진에서 같은 인물을 제안해 주며 제안마다 직접 확인합니다.',
          },
        ],
        items: [
          '개발자: Andrey Isaev. 개인정보 처리방침에 따르면 아르메니아 예레반에 등록된 개인 사업자입니다.',
          '비용: 기간 제한은 없지만 태그할 수 있는 인물 수에 상한이 있는 무료 라이선스와 영구 유료 라이선스 두 가지가 있습니다.',
          '설치: 운영 체제별 일반 설치 프로그램이며 터미널이 필요 없습니다.',
          '범위: 얼굴 인식을 갖춘 사진·동영상 아카이브 관리이며, 채팅 어시스턴트나 언어 모델은 설명되어 있지 않습니다.',
          '유지 관리: 설치 파일은 2026년 10월 날짜이지만 웹사이트에는 버전 번호도 변경 내역도 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 30일에 확인한 Tonfotos 웹사이트, 문서, 개인정보 처리방침과 설치 파일을 바탕으로 합니다. PromptQuorum은 실제 사진 라이브러리에서 Tonfotos를 사용해 보지 않았으므로 인식 정확도와 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-tonfotos',
        title: 'Tonfotos란?',
        content: [
          '**Tonfotos는 Windows, macOS, Linux용 사진·동영상 아카이브 관리 프로그램으로, 대규모 가족 사진 모음을 정리하고 중복을 제거하며 얼굴을 인식하고 가계도를 만들 수 있습니다.** 웹사이트에 따르면 파일은 사용자가 직접 관리하며 클라우드 저장소는 필수가 아닙니다. 확인한 버전은 1.17.1이며 macOS Intel용 설치 파일에서 읽었습니다.',
          '이 소프트웨어는 개인정보 처리방침에 따르면 아르메니아 예레반에 등록된 개인 사업자 Andrey Isaev가 배포하며, 사이트의 저작권 표기는 2021년부터입니다. 별도의 휴대폰 앱 TonfotosSync가 iOS와 Android에서 사진을 가져오지만, 이 리뷰에서는 다루지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '입수 방법',
        content: [
          '**Tonfotos는 Windows, macOS, Linux용 더블클릭 설치 프로그램이며, 무료 라이선스는 결제가 필요 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '웹사이트', '입수 방법': '[tonfotos.com](https://tonfotos.com/)' },
          { '옵션': 'Windows', '입수 방법': 'Windows 10·11(x64)용 tonfotos.exe, [다운로드 페이지](https://tonfotos.com/download.html)에서 받습니다' },
          { '옵션': 'Mac', '입수 방법': 'tonfotos.dmg. Intel과 Apple silicon은 빌드가 따로 있으며 macOS 10.15 이상이 필요합니다' },
          { '옵션': 'Linux', '입수 방법': 'x64용 .deb(Debian, Ubuntu) 또는 .rpm(Red Hat, Fedora, SUSE). 업데이트는 Tonfotos의 apt 또는 yum 저장소로 제공됩니다' },
          { '옵션': '무료 라이선스', '입수 방법': '0달러, 기간 제한 없음, 전체 기능, 태그할 수 있는 인물 수 제한, 익명 사용 통계 수집' },
          { '옵션': 'Personal 라이선스', '입수 방법': '59달러, 영구, 사용자 또는 기기 1개, 태그 인물 수 무제한, 통계 수집 해제 가능' },
          { '옵션': 'Family 라이선스', '입수 방법': '159달러, 영구, 사용자 또는 기기 최대 5개, 사용자 간 인물 정보 동기화' },
          { '옵션': '휴대폰에서 가져오기', '입수 방법': 'TonfotosSync([iOS](https://apps.apple.com/us/app/tonfotossync/id6761839014), [Android](https://play.google.com/store/apps/details?id=com.tonfotos.tonfotossync))' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[Tonfotos 개인정보 처리방침](https://tonfotos.com/legal/privacy-policy/), 2024년 9월 11일 게시' },
          { '옵션': '소스 코드', '입수 방법': '없음: 독점 소프트웨어' },
        ],
        note: '확인한 버전: 1.17.1(macOS Intel용 설치 파일, 파일 날짜 2026년 10월 28일). 다운로드 페이지 자체에는 임시 표기인 "Version 0.0.0"이 표시됩니다. 가격은 홈페이지에 미국 달러로 표시되어 있으며, 결제 화면에 어떤 통화가 나오는지는 PromptQuorum이 확인하지 않았습니다. Windows에서 GPU 얼굴 인식을 쓰려면 CUDA를 지원하는 그래픽 카드와 별도의 플러그인 설치 파일(TonfotosCudaPlugin.msi)이 필요합니다.',
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 Tonfotos 문서에서 가져온 것이며, PromptQuorum이 직접 테스트한 것은 없습니다.**',
        ],
        items: [
          '**인물.** 얼굴은 사진마다 한 번 감지된 뒤 대조됩니다. 프로그램은 사용자가 태그한 얼굴에서 학습하고, 모든 제안을 직접 확인하며, 잘못된 제안을 거부하면 이후 제안이 개선됩니다. 감지하지 못한 얼굴은 수동으로 추가할 수 있습니다.',
          '**가계도.** 인물 간 관계를 추가해 가계도를 만들 수 있고, 얼굴 데이터는 파일 메타데이터에 저장할 수 있습니다.',
          '**중복.** 중복 검색이 있으며, 문서는 인물 태그나 메타데이터 편집 전에 중복을 먼저 제거하라고 권합니다.',
          '**라이브러리.** 이벤트와 위치, 앨범과 태그, 필터와 검색, 메타데이터 편집, Picasa에서의 이전을 지원합니다.',
          '**형식.** JPEG, PNG, GIF, TIFF, AVIF, WebP, HEIC/HEIF(macOS와 Windows만), 다수의 RAW 형식과 MP4, MOV, MKV 같은 일반적인 동영상 형식을 지원합니다. 일부 특이한 동영상 코덱은 미리 보기가 되지 않을 수 있습니다.',
          '**부가 기능.** 이미지·동영상 뷰어, 이미지를 압축하는 JPG 변환기, 슬라이드쇼, Telegram 다운로더가 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'AI 실행 위치와 데이터 흐름',
        content: [
          '**Tonfotos는 얼굴 인식이 "powered by artificial intelligence running locally on your machine"이며 "processes your photos right where they are and never sends them anywhere"라고 밝힙니다.** FAQ에는 개발자가 사진에 접근할 수 없다는 설명도 있습니다. 모델 이름은 공개되어 있지 않습니다.',
          '출처에 따르면 외부로 나가는 것은 세 가지입니다. 첫째, 앱은 업데이트 확인과 라이선스 관리를 위해 개발자의 서버에 정기적으로 접속합니다. 둘째, 허락이 있을 때 익명 사용 통계가 수집될 수 있으며, 홈페이지는 이를 무료 라이선스의 조건으로 나열하고 유료 라이선스는 환경설정 > 고급에서 통계와 자동 업데이트를 끌 수 있습니다. 셋째, 개인정보 처리방침에 따르면 충돌 보고서에 태그된 인물의 이름, 파일과 폴더 이름, 태그, 앨범이 포함될 수 있으며, 사진은 사용자가 지원을 위해 보낼 때만 기기를 떠납니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 주장이며 감사 결과가 아니고, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**가족 사진 정리자**: 방대한 사진에 인물 태그와 가계도를 만들고 싶은 분.',
          '**여러 운영 체제를 쓰는 가정**: Windows, macOS, Linux에서 같은 앱을 쓰고 싶은 분.',
          '**구독이 싫은 분**: 영구 라이선스를 받아들일 수 있는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**버전과 유지 관리.** 웹사이트에는 "Version 0.0.0"이 표시되고 변경 내역이 없습니다. PromptQuorum은 macOS Intel용 설치 파일에서 1.17.1을, Linux 패키지에서 1.17.0을 읽었으며, Windows 설치 파일(파일 날짜 2026년 9월 25일)과 Apple silicon용(2026년 9월 15일)은 열어 보지 않았습니다.',
          '**인식 품질.** 정확도, 속도, GPU 효과는 테스트하지 않았습니다.',
          '**무료 라이선스의 한도.** 무료 라이선스로 몇 명까지 태그할 수 있는지는 명시되어 있지 않습니다.',
          '**요구 사항.** 최소 RAM, 디스크 공간, 프로세서는 공개되어 있지 않습니다.',
          '**오프라인 사용.** 업데이트와 라이선스 확인은 개발자의 서버를 거치며, 앱이 완전히 오프라인으로 동작하는지는 명시되어 있지 않습니다.',
          '**충돌 보고서.** 방침에는 태그된 이름과 파일 이름이 나열되어 있지만 사진 내용이나 얼굴 데이터가 포함되는지는 나와 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 로컬 사진 라이브러리를 관리하거나 점수를 매기는 리뷰 대상 도구가 세 가지 있지만, 어느 것도 그대로 대체하지는 못합니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Excire Foto](/ko/power-local-llm/excire-foto-review)', '플랫폼': 'Windows, macOS', '가격 / 라이선스': '일회성 구매 / 비공개 소스', '핵심 차이점': 'AI 콘텐츠 검색과 텍스트 인식을 추가하며 Excire 계정이 필요함' },
          { '앱': '[Facet](/ko/power-local-llm/facet-review)', '플랫폼': 'Docker 또는 스크립트, 브라우저', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '사진 점수화와 선별, 얼굴 묶기. 개발자용 설치 방식이며 설치 프로그램은 없음' },
          { '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)', '플랫폼': '서버(Docker), 브라우저', '가격 / 라이선스': 'Community 무료 / AGPL-3.0', '핵심 차이점': 'AI 라벨을 내장한 셀프 호스팅 웹 라이브러리이며 데스크톱 프로그램이 아님' },
        ],
        note: '각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Tonfotos는 로컬 LLM입니까?',
            a: '아닙니다. 출처는 얼굴 인식과 사진 정리를 설명하며, 채팅 기능이나 언어 모델은 언급하지 않습니다.',
          },
          {
            q: 'Picasa의 얼굴 데이터를 가져올 수 있습니까?',
            a: '문서에 Picasa 이전 항목이 있으므로 가져오기는 문서화된 방법입니다. PromptQuorum은 테스트하지 않았습니다.',
          },
          {
            q: 'Apple silicon Mac에서 실행됩니까?',
            a: '예. 다운로드 페이지에서 Intel용과 별도로 Apple silicon용 빌드를 제공합니다.',
          },
          {
            q: 'Family 라이선스는 내 사진을 공유합니까?',
            a: '홈페이지는 Family 라이선스가 사용자 간 인물 정보를 동기화한다고 하며, 사진이 공유된다고는 쓰지 않았습니다.',
          },
          {
            q: '휴대폰의 사진은 어떻게 가져옵니까?',
            a: '문서에 따르면 휴대폰 앱 TonfotosSync를 쓰거나, Windows에서는 USB 케이블을 사용합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Tonfotos는 Windows, macOS, Linux의 대규모 사진 아카이브를 위해 얼굴 인식, 중복 제거, 가계도를 무료 버전과 영구 라이선스로 제공하며, 개발사는 인식이 로컬에서 실행된다고 밝힙니다. 반면 비공개 소스이고, 무료 라이선스는 태그할 수 있는 인물 수를 제한하며, 앱이 업데이트와 라이선스 확인을 위해 개발자의 서버에 접속하고, 충돌 보고서에 태그된 이름이 포함될 수 있으며, 웹사이트에는 실제 버전 번호, 변경 내역, 시스템 요구 사항이 없습니다. 구독 없이 로컬 가족 사진 아카이브를 원하고 무료 라이선스로 먼저 시작할 분께 맞으며, 오픈 소스나 감사된 데이터 흐름이 필요한 분은 다른 선택지를 찾아보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Tonfotos 홈페이지](https://tonfotos.com/) — 기능, 라이선스, 가격. 2026년 10월 30일 확인.',
          '[Tonfotos FAQ](https://tonfotos.com/docs/faq/) — 로컬 처리와 네트워크에 관한 설명. 2026년 10월 30일 확인.',
          '[Tonfotos 다운로드 페이지](https://tonfotos.com/download.html) — 설치 파일, 플랫폼, CUDA 플러그인. 2026년 10월 30일 확인.',
          '[Tonfotos 개인정보 처리방침](https://tonfotos.com/legal/privacy-policy/) — 수집 데이터, 충돌 보고서, 관리 주체. 2024년 9월 11일 게시.',
          '[Tonfotos 문서](https://tonfotos.com/docs/) — 기능과 지원 형식. 2026년 10월 30일 확인.',
          '[macOS Intel용 설치 파일](https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg) — 앱 번들에서 버전 1.17.1을 읽음, 파일 날짜 2026년 10월 28일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Excire Foto 리뷰](/ko/power-local-llm/excire-foto-review) — 로컬 AI 검색을 갖춘 Windows·Mac용 유료 사진 관리 프로그램.',
          '[Facet 리뷰](/ko/power-local-llm/facet-review) — 사진 점수화와 선별을 하는 무료 셀프 호스팅 도구.',
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — AI 라벨을 내장한 셀프 호스팅 사진 라이브러리.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
