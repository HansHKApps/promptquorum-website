// PixaFind Review: desktop semantic search for files and photos with AI models that run on your own PC
// Slug: pixafind-review
// Companion to: stratosort-review, hyperlink-nexa-review, pixlstash-review
// Facts verified 2026-11-21 against pixafind.com (home, pricing, FAQ, downloads, privacy policy last updated 19 Nov 2026, contact) and GitHub Releases of Ishannaik/pixafind-releases (v0.7.40, 2026-11-21).
// No hands-on test by PromptQuorum. Stale-project warning is OFF (release published 2026-11-21). HQ country not stated by the maker.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-en.webp',
    title: 'PixaFind Review: Local AI Search for Your Files and Photos',
    seoTitle: 'PixaFind Review: Search Files and Photos by Meaning',
    intro: "PixaFind is a desktop app that finds documents, photos and code by what they mean instead of what they are called, using AI models that, per its website, run on your own computer. You type something like \"sunset at the beach\" or \"the contract with the 90-day notice clause\" and it returns matching files. This review covers the Windows, Mac and Linux builds, pricing, privacy, limits and alternatives; PromptQuorum read the maker's pages and release page but did not test the app.",
    metaDescription: 'PixaFind review: AI file and photo search by meaning for Windows, Mac and Linux, models on your PC per the maker. Free tier, pricing, privacy, limits.',
    twitterDescription: 'PixaFind review: find files and photos by describing them. Local AI search for Windows, Mac and Linux. Free tier, pricing, privacy, limits and alternatives.',
    audience: 'People with large folders of documents, photos and code who want to find files by describing them, without uploading them to a cloud service — covers install, pricing, privacy, limits and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind review',
      'pixafind ai file search',
      'semantic file search windows',
      'local ai photo search',
      'search files by meaning offline',
      'ai desktop search windows mac linux',
      'private file search app',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: "**PixaFind is a desktop app for Windows, Mac and Linux that finds documents, photos and code by meaning, with AI models that, per the maker, run on your computer and keep your files and index on it.** It has a free tier of 1 folder and 2,000 files and paid Pro, Team and Lifetime plans. The first launch downloads the models, the maker lists analytics and crash reports as on by default but switchable, and PromptQuorum did not test the app.",
    quickAnswerTop: {
      en: {
        question: 'Is PixaFind a local AI file search app?',
        answer: "According to the maker, yes: the website says the AI models run on your hardware and that your files and searches never leave your machine, and the privacy policy says the index is stored on the computer. The models are downloaded once from Hugging Face. The policy also lists usage counts, masked session recordings and crash reports that are on by default and can be switched off in Settings.",
        bullets: [
          'It searches by meaning across 76+ file formats, including PDF, Word, PowerPoint, Excel, EPUB, source code, emails and images.',
          'Free: 1 folder and 2,000 files, no account. Per the maker\'s pricing page, Pro is $12 a month ($8 a month billed yearly) and Lifetime is $249 once.',
          'Windows 10 or later, Apple Silicon Mac (not yet notarized by Apple, per the maker\'s download note) and Linux builds exist; the stated need is 4 GB of RAM and about 2 GB of disk.',
          'The desktop app is closed source, so the privacy claims cannot be checked in code.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get PixaFind', anchor: 'get-it' },
      { label: 'PixaFind at a Glance', anchor: 'at-a-glance' },
      { label: 'What PixaFind Is', anchor: 'what-is-pixafind' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'PixaFind vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use PixaFind', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PixaFind', anchor: 'who-should-not-use' },
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
            text: 'PixaFind is a desktop app that indexes the folders you choose and then finds documents, photos and code from a plain-language description, with AI models that run on your own computer, per the maker.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a search box that understands what you mean, so "photos of the beach at sunset" finds the pictures even if they are called IMG_4821.',
          },
        ],
        items: [
          'Local claim: the models and the index stay on the computer; the model download, update checks, licence sign-in and, unless switched off, analytics and crash reports use the internet.',
          'Maker: PixaLabs; no company address or country is stated on the pages PromptQuorum read.',
          'Maintenance: version 0.7.40 was released on 21 November 2026, which shows recent development, but it is still a 0.x version.',
          'Cost: free for 1 folder and 2,000 files; per the maker, Pro, Team and a $249 Lifetime plan lift the limits.',
          'Gaps: closed source, no hands-on test by PromptQuorum, a Mac build that is not notarized and no mobile app.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'Get PixaFind',
        content: [
          '**PixaFind installs like any desktop app, so no terminal is needed on Windows or Linux.** Download the installer for your system from the official site; the AI models are downloaded inside the app on first launch.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://pixafind.com/download/win/) — Windows 10 or later, installer',
          },
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 or newer); not notarized, see the site note',
          },
          {
            Platform: 'Linux',
            'Get It': '[Download the AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) or the [.deb package](https://pixafind.com/download/linux_deb/) for Ubuntu and Debian',
          },
          {
            Platform: 'Release page',
            'Get It': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — installers, release dates and the update manifest',
          },
          {
            Platform: 'Website',
            'Get It': '[pixafind.com](https://pixafind.com/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[PixaFind privacy policy](https://pixafind.com/privacy/)',
          },
        ],
        note: 'The GitHub repository only hosts the release installers; the desktop app is closed source, per the website.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind at a Glance',
        columns: ['Attribute', 'PixaFind'],
        rows: [
          { Attribute: 'Platform', PixaFind: 'Windows 10+, Apple Silicon Mac, Linux desktop' },
          { Attribute: 'Price', PixaFind: 'Free tier; Pro from $8 a month; $249 Lifetime' },
          { Attribute: 'License', PixaFind: 'Proprietary, closed source' },
          { Attribute: 'Runs', PixaFind: 'On your computer, per the maker; model download needs internet' },
          { Attribute: 'Memory', PixaFind: '4 GB RAM and about 2 GB disk; GPU optional on Windows' },
          { Attribute: 'Input types', PixaFind: '76+ formats: documents, code, emails, images' },
          { Attribute: 'Free limit', PixaFind: '1 folder and 2,000 files, no account' },
          { Attribute: 'Maker', PixaFind: 'PixaLabs' },
        ],
        note: 'A missing statement on the maker\'s site means unknown, not unsupported. Prices are the maker\'s list prices in US dollars; check its pricing page before buying.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'What PixaFind Is',
        content: [
          '**PixaFind is a search app that reads what is inside your files, not just their names.** You choose the folders to index, the app builds an index in the background at low priority, and a search box then returns documents, photos and code that match what you describe. Clicking an image can also find similar images.',
          'It does not chat with your files or reorganize them: it is a finder. If you want a folder sorted and renamed, or a chat over your documents, see the alternatives below.',
          'This review draws on the website, the privacy policy and the GitHub release page. PromptQuorum did not install or test PixaFind, so search quality, speed and the claim of results in under 100 milliseconds once indexed are the maker\'s statements.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a folder choice.** The steps follow the website and the privacy policy.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the installer for your system from the Get PixaFind table above; on a Mac, follow the one-time step the site describes because the build is not notarized. An unnotarized app has not passed Apple\'s automated malware check, so install it only if you trust the source.',
          },
          {
            title: 'Let the models download',
            whyItMatters: 'On first launch the app downloads its AI models from Hugging Face, about 2 GB of disk space, which needs internet once.',
          },
          {
            title: 'Choose folders to index',
            whyItMatters: 'Pick only the folders you want searchable; the free tier covers 1 folder and 2,000 files.',
          },
          {
            title: 'Search in plain language',
            whyItMatters: 'Describe the file or photo you want and open the result; check Settings under Data and Privacy to review the optional analytics and crash reports.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on finding files by meaning.** Everything below comes from the maker\'s website and privacy policy.',
        ],
        items: [
          '**Semantic text search.** It reads inside 76+ formats, including PDF, Word, PowerPoint, Excel, EPUB, source code and emails, and matches meaning, not only keywords.',
          '**Image search.** Typing a description such as "sunset at the beach" finds matching photos, and a click on an image finds similar ones.',
          '**Background indexing.** Indexing runs at low priority; a GPU is optional on Windows. Per the maker, searches return in under 100 milliseconds once the index is built.',
          '**Folder control.** You choose which folders are indexed; the index is stored in the app data folder on your computer.',
          '**Several PCs.** Pro covers up to 3 PCs and Lifetime up to 2; Team adds seats with one bill.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**PixaFind ships its own AI models, downloaded from Hugging Face on first launch.** The website does not name them, so which models are used and how well they search are not documented here.',
          'The stated needs are 4 GB of RAM and about 2 GB of disk space, with the models running on the CPU or, optionally on Windows, the GPU. No speed or accuracy figures were reproduced by PromptQuorum.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says PixaFind searches your files on your own computer and never uploads your files, photos or what is inside them.** The index stays in the app data folder. The website adds that no API key is needed.',
          'The policy also lists connections the app can make: the one-time model download from Hugging Face, an update check on GitHub (GitHub sees your IP address), and licence activation or sign-in, which sends the licence key, a one-way hash of the machine ID and the operating system. Usage counts (PostHog), masked session recordings (PostHog) and crash reports (Sentry) are on by default, can be switched off under Settings, Data and Privacy, and per the policy contain no search text or file contents. The policy version PromptQuorum read is dated 19 November 2026.',
          'The desktop app is closed source, so none of this can be checked in code, and PromptQuorum did not inspect network traffic. Free covers 1 folder and 2,000 files with no account. Per the maker, Pro costs $12 a month or $8 a month billed yearly; Team is $15 per seat a month or $12 billed yearly with 3 seats minimum; Lifetime is $249 once for one person on up to 2 PCs.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Models on your computer',
            'What it means in real use': 'Searching can run without internet once the models are downloaded, per the maker.',
            'Limitation / caveat': 'The first download needs internet; PromptQuorum did not inspect network traffic.',
          },
          {
            Benefit: 'Search by meaning',
            'What it means in real use': 'Describe a file or photo instead of remembering its name.',
            'Limitation / caveat': 'Search quality was not tested here and the models are not named.',
          },
          {
            Benefit: 'Free tier',
            'What it means in real use': 'Try it on 1 folder and 2,000 files with no account.',
            'Limitation / caveat': 'Bigger libraries need Pro, Team or Lifetime.',
          },
          {
            Benefit: 'Three desktop systems',
            'What it means in real use': 'Builds exist for Windows, Apple Silicon Mac and Linux.',
            'Limitation / caveat': 'The Mac build is not notarized; no Intel Mac and no mobile app.',
          },
          {
            Benefit: 'Switchable analytics',
            'What it means in real use': 'Usage counts and crash reports can be turned off in Settings.',
            'Limitation / caveat': 'They are on by default, and the model download and update check are not described as switchable.',
          },
          {
            Benefit: 'Recent releases',
            'What it means in real use': 'Version 0.7.40 shipped on 21 November 2026.',
            'Limitation / caveat': 'Closed source and still a 0.x version, so the track record is short.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind vs. Alternatives',
        content: [
          'These are the closest tools in the directory: one that sorts files and also searches them, one that searches and chats over local files, and one photo library with local AI search.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'PixaFind',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free tier, proprietary',
            Role: 'Search files and photos by meaning',
            'Key difference': 'Finder only; free tier limited to 1 folder',
          },
          {
            App: '[StratoSort](/power-local-llm/stratosort-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free noncommercial, PolyForm NC',
            Role: 'File sorting, search and chat',
            'Key difference': 'Also renames and sorts; source-available',
          },
          {
            App: '[Hyperlink (Nexa AI)](/power-local-llm/hyperlink-nexa-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Free, proprietary',
            Role: 'Local file search and chat',
            'Key difference': 'Answers questions from files; closed source',
          },
          {
            App: '[PixlStash](/power-local-llm/pixlstash-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free, GPL-3.0',
            Role: 'Image library with local AI search',
            'Key difference': 'Photos only; tagging and face search',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PixaFind',
        items: [
          '**People who cannot find files by name.** Describe a document or photo instead.',
          '**Privacy-minded desktop users.** The models and index stay on the computer, per the maker, with a free tier to try.',
          '**Windows users first.** The GPU option and the repository description focus on Windows.',
          '**People with mixed folders.** Documents, photos and code are searched in one place.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PixaFind',
        items: [
          '**Anyone who needs open-source code.** The desktop app is closed source.',
          '**People who want a chat or a file sorter.** PixaFind finds files; it does not chat or reorganize.',
          '**Intel Mac and phone users.** Only Apple Silicon Macs and desktops are covered.',
          '**Anyone who needs zero network use.** Analytics and crash reports are on by default and need to be switched off.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does PixaFind work offline?',
            a: 'The website says yes once the AI models have downloaded. The first launch needs internet for the download, and update checks and licence sign-in also use the network. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is PixaFind free?',
            a: 'There is a free tier for 1 folder and 2,000 files with no account. Per the maker\'s pricing page, Pro costs $12 a month or $8 a month billed yearly, and a $249 Lifetime licence is a one-time payment.',
          },
          {
            q: 'Does PixaFind send my files to the cloud?',
            a: 'The privacy policy says it never uploads your files, photos or what is inside them. It lists default-on usage counts, masked session recordings and crash reports that can be switched off in Settings. The app is closed source, so PromptQuorum could not verify this.',
          },
          {
            q: 'Does it run on Mac and Linux?',
            a: 'Yes: an Apple Silicon Mac build (not yet notarized by Apple, per the maker\'s download note) and Linux AppImage and .deb builds exist, next to the Windows installer.',
          },
          {
            q: 'Who makes PixaFind?',
            a: 'The website says it is built by PixaLabs. The pages PromptQuorum read give no company address or country.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PixaFind is a good fit if you want to find documents, photos and code on a Windows, Mac or Linux computer by describing them, with models that, per the maker, run on the machine, and a free tier to try it. It shipped a release on 21 November 2026.',
          'The caveats are closed source, default-on analytics that need switching off, a Mac build that is not notarized, a young 0.x version and claims PromptQuorum could not check. Try the free tier on one folder before indexing your archive.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PixaFind website](https://pixafind.com/) — features, platforms, pricing and FAQ.',
          '[Privacy policy](https://pixafind.com/privacy/) — data handling, version dated 19 November 2026.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — installer assets and release date of version 0.7.40.',
          '[Contact page](https://pixafind.com/contact/) — maker contact details.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[StratoSort Review](/power-local-llm/stratosort-review) — an app that sorts files by content and adds search and chat.',
          '[Hyperlink (Nexa AI) Review](/power-local-llm/hyperlink-nexa-review) — local file search and chat for Mac and Windows.',
          '[PixlStash Review](/power-local-llm/pixlstash-review) — an image library with local AI search.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-de.webp',
    title: 'PixaFind Rezension: Lokale KI-Suche für Ihre Dateien und Fotos',
    seoTitle: 'PixaFind Rezension: Dateien und Fotos nach Bedeutung suchen',
    intro: 'PixaFind ist eine Desktop-App, die Dokumente, Fotos und Code nach ihrer Bedeutung statt nach ihrem Namen findet, mit KI-Modellen, die laut Website auf Ihrem eigenen Computer laufen. Sie tippen etwa „Sonnenuntergang am Strand“ oder „der Vertrag mit der 90-tägigen Kündigungsfrist“ und erhalten passende Dateien. Diese Rezension behandelt die Builds für Windows, Mac und Linux, Preise, Datenschutz, Grenzen und Alternativen; PromptQuorum hat die Seiten des Herstellers und die Release-Seite gelesen, die App aber nicht getestet.',
    metaDescription: 'PixaFind Rezension: KI-Suche nach Bedeutung für Dateien und Fotos auf Windows, Mac, Linux, laut Hersteller lokal. Gratis-Tarif, Preise, Datenschutz, Grenzen.',
    twitterDescription: 'PixaFind Rezension: Dateien und Fotos per Beschreibung finden. Lokale KI-Suche für Windows, Mac und Linux. Gratis-Tarif, Preise, Datenschutz, Grenzen und Alternativen.',
    audience: 'Menschen mit großen Ordnern voller Dokumente, Fotos und Code, die Dateien per Beschreibung finden möchten, ohne sie an einen Cloud-Dienst hochzuladen — behandelt Installation, Preise, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind rezension',
      'pixafind ki dateisuche',
      'semantische dateisuche windows',
      'lokale ki fotosuche',
      'dateien nach bedeutung suchen offline',
      'ki desktop-suche windows mac linux',
      'private dateisuche app',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFind ist eine Desktop-App für Windows, Mac und Linux, die Dokumente, Fotos und Code nach Bedeutung findet, mit KI-Modellen, die laut Hersteller auf Ihrem Computer laufen und Ihre Dateien und den Index dort belassen.** Es gibt einen Gratis-Tarif mit 1 Ordner und 2.000 Dateien sowie die kostenpflichtigen Tarife Pro, Team und Lifetime. Beim ersten Start werden die Modelle heruntergeladen, Analysen und Absturzberichte nennt der Hersteller als standardmäßig aktiv, aber abschaltbar, und PromptQuorum hat die App nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Ist PixaFind eine lokale KI-Dateisuche?',
        answer: 'Laut Hersteller ja: Die Website sagt, die KI-Modelle laufen auf Ihrer Hardware, und Ihre Dateien und Suchanfragen verlassen Ihren Rechner nie; die Datenschutzerklärung sagt, der Index werde auf dem Computer gespeichert. Die Modelle werden einmalig von Hugging Face heruntergeladen. Die Erklärung nennt außerdem Nutzungszähler, maskierte Sitzungsaufzeichnungen und Absturzberichte, die standardmäßig aktiv sind und sich in den Einstellungen ausschalten lassen.',
        bullets: [
          'Die App sucht nach Bedeutung in mehr als 76 Dateiformaten, darunter PDF, Word, PowerPoint, Excel, EPUB, Quellcode, E-Mails und Bilder.',
          'Gratis: 1 Ordner und 2.000 Dateien, ohne Konto. Laut Preisseite des Herstellers kostet Pro 12 $ im Monat (8 $ im Monat bei jährlicher Zahlung); Lifetime kostet einmalig 249 $.',
          'Es gibt Builds für Windows 10 oder neuer, Apple-Silicon-Macs (laut Download-Hinweis des Herstellers von Apple noch nicht notarisiert) und Linux; angegeben sind 4 GB RAM und etwa 2 GB Speicherplatz.',
          'Die Desktop-App ist Closed Source, die Datenschutzaussagen lassen sich daher nicht im Code prüfen.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'PixaFind herunterladen', anchor: 'get-it' },
      { label: 'PixaFind im Überblick', anchor: 'at-a-glance' },
      { label: 'Was PixaFind ist', anchor: 'what-is-pixafind' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'PixaFind im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen PixaFind geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen PixaFind nicht geeignet ist', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFind ist eine Desktop-App, die die von Ihnen gewählten Ordner indexiert und Dokumente, Fotos und Code anschließend anhand einer Beschreibung in einfacher Sprache findet, laut Hersteller mit KI-Modellen, die auf Ihrem eigenen Computer laufen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Suchfeld vor, das versteht, was Sie meinen: „Fotos vom Strand bei Sonnenuntergang“ findet die Bilder auch dann, wenn sie IMG_4821 heißen.',
          },
        ],
        items: [
          'Lokal-Aussage: Modelle und Index bleiben auf dem Computer; Modell-Download, Update-Prüfungen, Lizenz-Anmeldung und, sofern nicht abgeschaltet, Analysen und Absturzberichte nutzen das Internet.',
          'Hersteller: PixaLabs; auf den von PromptQuorum gelesenen Seiten sind weder Firmenanschrift noch Land angegeben.',
          'Pflege: Version 0.7.40 erschien am 21. November 2026, was auf aktuelle Entwicklung hindeutet, ist aber noch eine 0.x-Version.',
          'Kosten: gratis für 1 Ordner und 2.000 Dateien; laut Hersteller heben Pro, Team und ein Lifetime-Tarif für 249 $ die Grenzen auf.',
          'Lücken: Closed Source, kein Praxistest durch PromptQuorum, ein nicht notarisierter Mac-Build und keine mobile App.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'PixaFind herunterladen',
        content: [
          '**PixaFind wird wie jede Desktop-App installiert, unter Windows und Linux ist kein Terminal nötig.** Laden Sie das Installationsprogramm für Ihr System von der offiziellen Website herunter; die KI-Modelle werden beim ersten Start in der App geladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://pixafind.com/download/win/) — Windows 10 oder neuer, Installer',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 oder neuer); nicht notarisiert, siehe Hinweis der Website',
          },
          {
            Plattform: 'Linux',
            Bezugsquelle: '[AppImage herunterladen](https://pixafind.com/download/linux_appimage/) (x86_64) oder das [.deb-Paket](https://pixafind.com/download/linux_deb/) für Ubuntu und Debian',
          },
          {
            Plattform: 'Release-Seite',
            Bezugsquelle: '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — Installer, Release-Daten und Update-Manifest',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[pixafind.com](https://pixafind.com/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[PixaFind-Datenschutzerklärung](https://pixafind.com/privacy/)',
          },
        ],
        note: 'Das GitHub-Repository enthält laut Website nur die Release-Installer; die Desktop-App ist Closed Source.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind im Überblick',
        columns: ['Merkmal', 'PixaFind'],
        rows: [
          { Merkmal: 'Plattform', PixaFind: 'Windows 10+, Apple-Silicon-Mac, Linux-Desktop' },
          { Merkmal: 'Preis', PixaFind: 'Gratis-Tarif; Pro ab 8 $ im Monat; Lifetime 249 $' },
          { Merkmal: 'Lizenz', PixaFind: 'Proprietär, Closed Source' },
          { Merkmal: 'Ausführung', PixaFind: 'Laut Hersteller auf Ihrem Computer; Modell-Download braucht Internet' },
          { Merkmal: 'Speicher', PixaFind: '4 GB RAM und etwa 2 GB Speicherplatz; GPU unter Windows optional' },
          { Merkmal: 'Eingabetypen', PixaFind: 'Über 76 Formate: Dokumente, Code, E-Mails, Bilder' },
          { Merkmal: 'Gratis-Grenze', PixaFind: '1 Ordner und 2.000 Dateien, ohne Konto' },
          { Merkmal: 'Hersteller', PixaFind: 'PixaLabs' },
        ],
        note: 'Eine fehlende Angabe auf der Website des Herstellers bedeutet unbekannt, nicht nicht unterstützt. Die Preise sind die Listenpreise des Herstellers in US-Dollar; prüfen Sie vor dem Kauf dessen Preisseite.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'Was PixaFind ist',
        content: [
          '**PixaFind ist eine Such-App, die liest, was in Ihren Dateien steckt, nicht nur deren Namen.** Sie wählen die zu indexierenden Ordner, die App baut den Index mit niedriger Priorität im Hintergrund auf, und ein Suchfeld liefert dann Dokumente, Fotos und Code, die zu Ihrer Beschreibung passen. Ein Klick auf ein Bild kann zudem ähnliche Bilder finden.',
          'Die App chattet nicht mit Ihren Dateien und ordnet sie auch nicht neu: Sie ist ein Finder. Wenn Sie einen Ordner sortieren und umbenennen oder mit Ihren Dokumenten chatten möchten, sehen Sie sich die Alternativen unten an.',
          'Diese Rezension stützt sich auf die Website, die Datenschutzerklärung und die GitHub-Release-Seite. PromptQuorum hat PixaFind weder installiert noch getestet; Suchqualität, Geschwindigkeit und die Angabe von Ergebnissen in unter 100 Millisekunden nach der Indexierung sind daher Aussagen des Herstellers.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download und Ordnerauswahl.** Die Schritte folgen der Website und der Datenschutzerklärung.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie das Installationsprogramm für Ihr System aus der Tabelle „PixaFind herunterladen“ oben herunter; auf dem Mac folgen Sie dem einmaligen Schritt, den die Website beschreibt, weil der Build nicht notarisiert ist. Eine nicht notarisierte App hat die automatische Malware-Prüfung von Apple nicht durchlaufen; installieren Sie sie nur, wenn Sie der Quelle vertrauen.',
          },
          {
            title: 'Modelle herunterladen lassen',
            whyItMatters: 'Beim ersten Start lädt die App ihre KI-Modelle von Hugging Face herunter, etwa 2 GB Speicherplatz; dafür ist einmalig Internet nötig.',
          },
          {
            title: 'Zu indexierende Ordner wählen',
            whyItMatters: 'Wählen Sie nur die Ordner, die durchsuchbar sein sollen; der Gratis-Tarif deckt 1 Ordner und 2.000 Dateien ab.',
          },
          {
            title: 'In einfacher Sprache suchen',
            whyItMatters: 'Beschreiben Sie die gewünschte Datei oder das Foto und öffnen Sie das Ergebnis; prüfen Sie unter Einstellungen, Daten und Datenschutz, die optionalen Analysen und Absturzberichte.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang dreht sich darum, Dateien nach Bedeutung zu finden.** Alles Folgende stammt von der Website und der Datenschutzerklärung des Herstellers.',
        ],
        items: [
          '**Semantische Textsuche.** Die App liest in mehr als 76 Formaten, darunter PDF, Word, PowerPoint, Excel, EPUB, Quellcode und E-Mails, und findet nach Bedeutung, nicht nur nach Stichwörtern.',
          '**Bildsuche.** Eine Beschreibung wie „Sonnenuntergang am Strand“ findet passende Fotos, und ein Klick auf ein Bild findet ähnliche.',
          '**Indexierung im Hintergrund.** Die Indexierung läuft mit niedriger Priorität; unter Windows ist eine GPU optional. Laut Hersteller liefert die Suche nach dem Indexaufbau Ergebnisse in unter 100 Millisekunden.',
          '**Ordnerkontrolle.** Sie bestimmen, welche Ordner indexiert werden; der Index liegt im App-Datenordner auf Ihrem Computer.',
          '**Mehrere PCs.** Pro deckt bis zu 3 PCs ab, Lifetime bis zu 2; Team ergänzt Plätze mit einer Rechnung.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**PixaFind bringt eigene KI-Modelle mit, die beim ersten Start von Hugging Face geladen werden.** Die Website nennt sie nicht, daher sind hier weder die verwendeten Modelle noch ihre Suchqualität dokumentiert.',
          'Angegeben sind 4 GB RAM und etwa 2 GB Speicherplatz; die Modelle laufen auf der CPU oder, unter Windows optional, auf der GPU. PromptQuorum hat keine Geschwindigkeits- oder Genauigkeitswerte nachgemessen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, PixaFind durchsucht Ihre Dateien auf Ihrem eigenen Computer und lädt Ihre Dateien, Fotos oder deren Inhalte nie hoch.** Der Index bleibt im App-Datenordner. Die Website ergänzt, dass kein API-Schlüssel nötig ist.',
          'Die Erklärung nennt zudem Verbindungen, die die App aufbauen kann: den einmaligen Modell-Download von Hugging Face, eine Update-Prüfung bei GitHub (GitHub sieht Ihre IP-Adresse) sowie Lizenzaktivierung oder Anmeldung, bei der der Lizenzschlüssel, ein Einweg-Hash der Geräte-ID und das Betriebssystem übermittelt werden. Nutzungszähler (PostHog), maskierte Sitzungsaufzeichnungen (PostHog) und Absturzberichte (Sentry) sind standardmäßig aktiv, lassen sich unter Einstellungen, Daten und Datenschutz ausschalten und enthalten laut Erklärung weder Suchtexte noch Dateiinhalte. Die Erklärung wurde zuletzt am 19. November 2026 aktualisiert.',
          'Die Desktop-App ist Closed Source, nichts davon lässt sich also im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Gratis deckt 1 Ordner und 2.000 Dateien ohne Konto ab. Laut Hersteller kostet Pro 12 $ im Monat oder 8 $ im Monat bei jährlicher Zahlung; Team kostet 15 $ pro Platz und Monat oder 12 $ bei jährlicher Zahlung, mindestens 3 Plätze; Lifetime kostet einmalig 249 $ für eine Person auf bis zu 2 PCs.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Modelle auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Die Suche kann laut Hersteller ohne Internet laufen, sobald die Modelle geladen sind.',
            'Einschränkung / Hinweis': 'Der erste Download braucht Internet; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            Vorteil: 'Suche nach Bedeutung',
            'Was das im Alltag bedeutet': 'Beschreiben Sie eine Datei oder ein Foto, statt sich den Namen zu merken.',
            'Einschränkung / Hinweis': 'Die Suchqualität wurde hier nicht getestet, und die Modelle werden nicht genannt.',
          },
          {
            Vorteil: 'Gratis-Tarif',
            'Was das im Alltag bedeutet': 'Probieren Sie es mit 1 Ordner und 2.000 Dateien ohne Konto aus.',
            'Einschränkung / Hinweis': 'Größere Bestände brauchen Pro, Team oder Lifetime.',
          },
          {
            Vorteil: 'Drei Desktop-Systeme',
            'Was das im Alltag bedeutet': 'Es gibt Builds für Windows, Apple-Silicon-Macs und Linux.',
            'Einschränkung / Hinweis': 'Der Mac-Build ist nicht notarisiert; kein Intel-Mac, keine mobile App.',
          },
          {
            Vorteil: 'Abschaltbare Analysen',
            'Was das im Alltag bedeutet': 'Nutzungszähler und Absturzberichte lassen sich in den Einstellungen ausschalten.',
            'Einschränkung / Hinweis': 'Sie sind standardmäßig aktiv; Modell-Download und Update-Prüfung gelten nicht als abschaltbar.',
          },
          {
            Vorteil: 'Aktuelle Veröffentlichungen',
            'Was das im Alltag bedeutet': 'Version 0.7.40 erschien am 21. November 2026.',
            'Einschränkung / Hinweis': 'Closed Source und noch eine 0.x-Version, die Erfolgsbilanz ist also kurz.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind im Vergleich zu Alternativen',
        content: [
          'Das sind die nächstliegenden Werkzeuge im Verzeichnis: eines, das Dateien sortiert und auch durchsucht, eines, das lokale Dateien durchsucht und mit ihnen chattet, und eine Fotobibliothek mit lokaler KI-Suche.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'PixaFind',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Gratis-Tarif, proprietär',
            Rolle: 'Dateien und Fotos nach Bedeutung suchen',
            'Wichtigster Unterschied': 'Nur Finder; Gratis-Tarif auf 1 Ordner begrenzt',
          },
          {
            App: '[StratoSort](/de/power-local-llm/stratosort-review)',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Kostenlos nichtkommerziell, PolyForm NC',
            Rolle: 'Dateien sortieren, suchen und chatten',
            'Wichtigster Unterschied': 'Benennt und sortiert auch; Source-available',
          },
          {
            App: '[Hyperlink (Nexa AI)](/de/power-local-llm/hyperlink-nexa-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Kostenlos, proprietär',
            Rolle: 'Lokale Dateisuche und Chat',
            'Wichtigster Unterschied': 'Beantwortet Fragen aus Dateien; geschlossener Code',
          },
          {
            App: '[PixlStash](/de/power-local-llm/pixlstash-review)',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            Rolle: 'Bildbibliothek mit lokaler KI-Suche',
            'Wichtigster Unterschied': 'Nur Fotos; Tagging und Gesichtssuche',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Apps von Drittanbietern ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen PixaFind geeignet ist',
        items: [
          '**Menschen, die Dateien nicht über den Namen finden.** Beschreiben Sie stattdessen ein Dokument oder Foto.',
          '**Datenschutzbewusste Desktop-Nutzer.** Modelle und Index bleiben laut Hersteller auf dem Computer, mit einem Gratis-Tarif zum Ausprobieren.',
          '**Zuerst Windows-Nutzer.** Die GPU-Option und die Repository-Beschreibung konzentrieren sich auf Windows.',
          '**Menschen mit gemischten Ordnern.** Dokumente, Fotos und Code werden an einem Ort durchsucht.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen PixaFind nicht geeignet ist',
        items: [
          '**Alle, die Open-Source-Code brauchen.** Die Desktop-App ist Closed Source.',
          '**Menschen, die einen Chat oder einen Dateisortierer wollen.** PixaFind findet Dateien; es chattet nicht und ordnet nicht neu.',
          '**Intel-Mac- und Smartphone-Nutzer.** Abgedeckt sind nur Apple-Silicon-Macs und Desktops.',
          '**Alle, die keinerlei Netzwerknutzung wollen.** Analysen und Absturzberichte sind standardmäßig aktiv und müssen ausgeschaltet werden.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert PixaFind offline?',
            a: 'Die Website sagt ja, sobald die KI-Modelle geladen sind. Der erste Start braucht Internet für den Download, und auch Update-Prüfungen und Lizenz-Anmeldung nutzen das Netzwerk. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Ist PixaFind kostenlos?',
            a: 'Es gibt einen Gratis-Tarif für 1 Ordner und 2.000 Dateien ohne Konto. Laut Preisseite des Herstellers kostet Pro 12 $ im Monat oder 8 $ im Monat bei jährlicher Zahlung, und eine Lifetime-Lizenz für 249 $ ist eine Einmalzahlung.',
          },
          {
            q: 'Sendet PixaFind meine Dateien in die Cloud?',
            a: 'Die Datenschutzerklärung sagt, dass Ihre Dateien, Fotos oder deren Inhalte nie hochgeladen werden. Sie nennt standardmäßig aktive Nutzungszähler, maskierte Sitzungsaufzeichnungen und Absturzberichte, die sich in den Einstellungen ausschalten lassen. Die App ist Closed Source, PromptQuorum konnte das daher nicht überprüfen.',
          },
          {
            q: 'Läuft es auf Mac und Linux?',
            a: 'Ja: Neben dem Windows-Installer gibt es einen Build für Apple-Silicon-Macs (laut Download-Hinweis des Herstellers von Apple noch nicht notarisiert) sowie Linux-Builds als AppImage und .deb.',
          },
          {
            q: 'Wer macht PixaFind?',
            a: 'Laut Website wird es von PixaLabs entwickelt. Die von PromptQuorum gelesenen Seiten nennen weder Firmenanschrift noch Land.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'PixaFind passt, wenn Sie auf einem Windows-, Mac- oder Linux-Computer Dokumente, Fotos und Code per Beschreibung finden möchten, mit Modellen, die laut Hersteller auf dem Rechner laufen, und einem Gratis-Tarif zum Ausprobieren. Am 21. November 2026 erschien ein Release.',
          'Die Vorbehalte sind Closed Source, standardmäßig aktive Analysen, die abgeschaltet werden müssen, ein nicht notarisierter Mac-Build, eine junge 0.x-Version und Aussagen, die PromptQuorum nicht prüfen konnte. Probieren Sie den Gratis-Tarif an einem Ordner aus, bevor Sie Ihr Archiv indexieren.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PixaFind-Website](https://pixafind.com/) — Funktionen, Plattformen, Preise und FAQ.',
          '[Datenschutzerklärung](https://pixafind.com/privacy/) — Datenverarbeitung, zuletzt aktualisiert am 19. November 2026.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — Installer-Dateien und Release-Datum der Version 0.7.40.',
          '[Kontaktseite](https://pixafind.com/contact/) — Kontaktdaten des Herstellers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[StratoSort Rezension](/de/power-local-llm/stratosort-review) — eine App, die Dateien nach Inhalt sortiert und Suche und Chat ergänzt.',
          '[Hyperlink (Nexa AI) Rezension](/de/power-local-llm/hyperlink-nexa-review) — lokale Dateisuche und Chat für Mac und Windows.',
          '[PixlStash Rezension](/de/power-local-llm/pixlstash-review) — eine Bildbibliothek mit lokaler KI-Suche.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-fr.webp',
    title: 'Test de PixaFind : recherche IA locale pour vos fichiers et photos',
    seoTitle: 'Test de PixaFind : chercher fichiers et photos par le sens',
    intro: "PixaFind est une application de bureau qui retrouve des documents, des photos et du code d'après ce qu'ils signifient plutôt que d'après leur nom, grâce à des modèles d'IA qui, selon son site, s'exécutent sur votre propre ordinateur. Vous tapez par exemple « coucher de soleil à la plage » ou « le contrat avec la clause de préavis de 90 jours » et elle renvoie les fichiers correspondants. Ce test couvre les versions Windows, Mac et Linux, les tarifs, la confidentialité, les limites et les alternatives ; PromptQuorum a lu les pages de l'éditeur et la page des versions, mais n'a pas testé l'application.",
    metaDescription: "Test de PixaFind : recherche IA de fichiers et photos par le sens pour Windows, Mac, Linux, modèles sur votre PC selon l'éditeur. Offre gratuite, tarifs, limites.",
    twitterDescription: "Test de PixaFind : retrouvez fichiers et photos en les décrivant. Recherche IA locale pour Windows, Mac et Linux. Offre gratuite, tarifs, confidentialité, limites et alternatives.",
    audience: "Personnes avec de gros dossiers de documents, de photos et de code qui veulent retrouver leurs fichiers en les décrivant, sans les envoyer à un service cloud — couvre l'installation, les tarifs, la confidentialité, les limites et les alternatives.",
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'test pixafind',
      'pixafind recherche de fichiers ia',
      'recherche sémantique de fichiers windows',
      'recherche de photos ia locale',
      'chercher des fichiers par le sens hors ligne',
      'recherche de bureau ia windows mac linux',
      'application de recherche de fichiers privée',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: "**PixaFind est une application de bureau pour Windows, Mac et Linux qui retrouve documents, photos et code par le sens, avec des modèles d'IA qui, selon l'éditeur, s'exécutent sur votre ordinateur et y gardent vos fichiers et l'index.** Elle propose une offre gratuite limitée à 1 dossier et 2 000 fichiers, et des formules payantes Pro, Team et Lifetime. Le premier lancement télécharge les modèles, l'éditeur indique que l'analytique et les rapports de plantage sont activés par défaut mais désactivables, et PromptQuorum n'a pas testé l'application.",
    quickAnswerTop: {
      fr: {
        question: 'PixaFind est-elle une application locale de recherche de fichiers par IA ?',
        answer: "Selon l'éditeur, oui : le site indique que les modèles d'IA s'exécutent sur votre matériel et que vos fichiers et vos recherches ne quittent jamais votre machine, et la politique de confidentialité précise que l'index est stocké sur l'ordinateur. Les modèles sont téléchargés une seule fois depuis Hugging Face. La politique mentionne aussi des compteurs d'usage, des enregistrements de session masqués et des rapports de plantage activés par défaut, désactivables dans les Paramètres.",
        bullets: [
          "Elle cherche par le sens dans plus de 76 formats de fichiers, dont PDF, Word, PowerPoint, Excel, EPUB, code source, e-mails et images.",
          "Gratuit : 1 dossier et 2 000 fichiers, sans compte. Selon la page tarifs de l'éditeur, Pro coûte 12 $ par mois (8 $ par mois en facturation annuelle) ; Lifetime coûte 249 $ en une fois.",
          "Des versions existent pour Windows 10 ou ultérieur, pour Mac Apple Silicon (selon la note de la page de téléchargement de l'éditeur, pas encore notariée par Apple) et pour Linux ; les besoins indiqués sont 4 GB de RAM et environ 2 GB de disque.",
          "L'application de bureau est à code fermé : les affirmations sur la confidentialité ne peuvent pas être vérifiées dans le code.",
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir PixaFind', anchor: 'get-it' },
      { label: "PixaFind en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est PixaFind", anchor: 'what-is-pixafind' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'PixaFind face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui PixaFind est adapté', anchor: 'who-should-use' },
      { label: "Pour qui PixaFind n'est pas adapté", anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "PixaFind est une application de bureau qui indexe les dossiers de votre choix, puis retrouve documents, photos et code à partir d'une description en langage courant, avec des modèles d'IA qui s'exécutent sur votre propre ordinateur, selon l'éditeur.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez une barre de recherche qui comprend ce que vous voulez dire : « photos de la plage au coucher du soleil » retrouve les images même si elles s'appellent IMG_4821.",
          },
        ],
        items: [
          "Affirmation locale : les modèles et l'index restent sur l'ordinateur ; le téléchargement des modèles, les vérifications de mises à jour, la connexion à la licence et, sauf désactivation, l'analytique et les rapports de plantage utilisent Internet.",
          "Éditeur : PixaLabs ; aucune adresse d'entreprise ni aucun pays n'est indiqué sur les pages lues par PromptQuorum.",
          "Maintenance : la version 0.7.40 est sortie le 21 novembre 2026, ce qui indique un développement récent, mais il s'agit encore d'une version 0.x.",
          "Coût : gratuit pour 1 dossier et 2 000 fichiers ; selon l'éditeur, Pro, Team et une formule Lifetime à 249 $ lèvent les limites.",
          "Lacunes : code fermé, pas de test pratique par PromptQuorum, une version Mac non notariée et pas d'application mobile.",
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'Obtenir PixaFind',
        content: [
          "**PixaFind s'installe comme n'importe quelle application de bureau, aucun terminal n'est donc nécessaire sous Windows ou Linux.** Téléchargez l'installateur de votre système sur le site officiel ; les modèles d'IA sont téléchargés depuis l'application au premier lancement.",
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            Plateforme: 'Windows',
            'Où le trouver': '[Télécharger pour Windows](https://pixafind.com/download/win/) — Windows 10 ou ultérieur, installateur',
          },
          {
            Plateforme: 'Mac',
            'Où le trouver': "[Télécharger pour Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 ou plus récent) ; non notariée, voir la note du site",
          },
          {
            Plateforme: 'Linux',
            'Où le trouver': "[Télécharger l'AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) ou le [paquet .deb](https://pixafind.com/download/linux_deb/) pour Ubuntu et Debian",
          },
          {
            Plateforme: 'Page des versions',
            'Où le trouver': "[Versions GitHub](https://github.com/Ishannaik/pixafind-releases/releases) — installateurs, dates de publication et manifeste de mise à jour",
          },
          {
            Plateforme: 'Site web',
            'Où le trouver': '[pixafind.com](https://pixafind.com/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où le trouver': '[Politique de confidentialité de PixaFind](https://pixafind.com/privacy/)',
          },
        ],
        note: "Le dépôt GitHub n'héberge que les installateurs des versions ; l'application de bureau est à code fermé, selon le site.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "PixaFind en un coup d'œil",
        columns: ['Attribut', 'PixaFind'],
        rows: [
          { Attribut: 'Plateforme', PixaFind: 'Windows 10+, Mac Apple Silicon, bureau Linux' },
          { Attribut: 'Prix', PixaFind: 'Offre gratuite ; Pro dès 8 $ par mois ; Lifetime 249 $' },
          { Attribut: 'Licence', PixaFind: 'Propriétaire, code fermé' },
          { Attribut: 'Exécution', PixaFind: "Sur votre ordinateur, selon l'éditeur ; téléchargement des modèles via Internet" },
          { Attribut: 'Mémoire', PixaFind: '4 GB de RAM et environ 2 GB de disque ; GPU optionnel sous Windows' },
          { Attribut: 'Types de fichiers', PixaFind: 'Plus de 76 formats : documents, code, e-mails, images' },
          { Attribut: 'Limite gratuite', PixaFind: '1 dossier et 2 000 fichiers, sans compte' },
          { Attribut: 'Éditeur', PixaFind: 'PixaLabs' },
        ],
        note: "Une absence de mention sur le site de l'éditeur signifie « inconnu », pas « non pris en charge ». Les prix sont les tarifs publics de l'éditeur, en dollars américains ; consultez sa page tarifs avant d'acheter.",
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: "Ce qu'est PixaFind",
        content: [
          "**PixaFind est une application de recherche qui lit ce que contiennent vos fichiers, pas seulement leurs noms.** Vous choisissez les dossiers à indexer, l'application construit un index en arrière-plan à faible priorité, puis une barre de recherche renvoie les documents, photos et morceaux de code correspondant à votre description. Un clic sur une image peut aussi retrouver des images similaires.",
          "Elle ne discute pas avec vos fichiers et ne les réorganise pas : c'est un outil de recherche. Pour trier et renommer un dossier, ou discuter avec vos documents, voyez les alternatives ci-dessous.",
          "Ce test s'appuie sur le site, la politique de confidentialité et la page des versions GitHub. PromptQuorum n'a ni installé ni testé PixaFind : la qualité de recherche, la vitesse et l'affirmation de résultats en moins de 100 millisecondes une fois l'index construit sont donc des déclarations de l'éditeur.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement de modèles et le choix de dossiers.** Les étapes suivent le site et la politique de confidentialité.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez l'installateur de votre système depuis le tableau « Obtenir PixaFind » ci-dessus ; sur Mac, suivez l'étape ponctuelle décrite par le site, car la version n'est pas notariée. Une application non notariée n'a pas passé le contrôle antimalware automatique d'Apple ; ne l'installez que si vous faites confiance à la source.",
          },
          {
            title: 'Laisser les modèles se télécharger',
            whyItMatters: "Au premier lancement, l'application télécharge ses modèles d'IA depuis Hugging Face, soit environ 2 GB d'espace disque, ce qui exige Internet une seule fois.",
          },
          {
            title: 'Choisir les dossiers à indexer',
            whyItMatters: "Ne choisissez que les dossiers que vous voulez rendre consultables ; l'offre gratuite couvre 1 dossier et 2 000 fichiers.",
          },
          {
            title: 'Chercher en langage courant',
            whyItMatters: "Décrivez le fichier ou la photo voulus et ouvrez le résultat ; consultez les Paramètres, sous Données et confidentialité, pour examiner l'analytique et les rapports de plantage facultatifs.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur la recherche de fichiers par le sens.** Tout ce qui suit provient du site et de la politique de confidentialité de l'éditeur.",
        ],
        items: [
          "**Recherche sémantique de texte.** Elle lit l'intérieur de plus de 76 formats, dont PDF, Word, PowerPoint, Excel, EPUB, code source et e-mails, et retrouve le sens, pas seulement les mots-clés.",
          "**Recherche d'images.** Une description comme « coucher de soleil à la plage » retrouve les photos correspondantes, et un clic sur une image retrouve des images similaires.",
          "**Indexation en arrière-plan.** L'indexation s'exécute à faible priorité ; un GPU est optionnel sous Windows. Selon l'éditeur, les recherches répondent en moins de 100 millisecondes une fois l'index construit.",
          "**Contrôle des dossiers.** Vous choisissez les dossiers indexés ; l'index est stocké dans le dossier de données de l'application sur votre ordinateur.",
          "**Plusieurs PC.** Pro couvre jusqu'à 3 PC et Lifetime jusqu'à 2 ; Team ajoute des postes avec une seule facture.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**PixaFind fournit ses propres modèles d'IA, téléchargés depuis Hugging Face au premier lancement.** Le site ne les nomme pas : les modèles utilisés et la qualité de leur recherche ne sont donc pas documentés ici.",
          "Les besoins indiqués sont 4 GB de RAM et environ 2 GB d'espace disque, les modèles s'exécutant sur le CPU ou, en option sous Windows, sur le GPU. PromptQuorum n'a reproduit aucune mesure de vitesse ou de précision.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que PixaFind cherche dans vos fichiers sur votre propre ordinateur et n'envoie jamais vos fichiers, vos photos ni leur contenu.** L'index reste dans le dossier de données de l'application. Le site ajoute qu'aucune clé d'API n'est nécessaire.",
          "La politique énumère aussi les connexions que l'application peut établir : le téléchargement ponctuel des modèles depuis Hugging Face, une vérification des mises à jour sur GitHub (GitHub voit votre adresse IP), et l'activation ou la connexion de la licence, qui envoie la clé de licence, un hachage irréversible de l'identifiant de la machine et le système d'exploitation. Les compteurs d'usage (PostHog), les enregistrements de session masqués (PostHog) et les rapports de plantage (Sentry) sont activés par défaut, peuvent être désactivés dans les Paramètres, sous Données et confidentialité, et ne contiennent, selon la politique, ni texte de recherche ni contenu de fichiers. La politique a été mise à jour pour la dernière fois le 19 novembre 2026.",
          "L'application de bureau est à code fermé : rien de tout cela ne peut être vérifié dans le code, et PromptQuorum n'a pas inspecté le trafic réseau. L'offre gratuite couvre 1 dossier et 2 000 fichiers, sans compte. Pro coûte 12 $ par mois ou 8 $ par mois en facturation annuelle ; Team coûte 15 $ par poste et par mois, ou 12 $ en facturation annuelle, avec 3 postes minimum ; Lifetime coûte 249 $ en une fois pour une personne sur 2 PC au plus (prix en dollars américains, tels qu'indiqués par l'éditeur).",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Modèles sur votre ordinateur',
            "Ce que cela donne à l'usage": "La recherche peut fonctionner sans Internet une fois les modèles téléchargés, selon l'éditeur.",
            'Limite / réserve': "Le premier téléchargement exige Internet ; PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            Avantage: 'Recherche par le sens',
            "Ce que cela donne à l'usage": "Décrivez un fichier ou une photo au lieu de retenir son nom.",
            'Limite / réserve': "La qualité de recherche n'a pas été testée ici et les modèles ne sont pas nommés.",
          },
          {
            Avantage: 'Offre gratuite',
            "Ce que cela donne à l'usage": "Essayez-la sur 1 dossier et 2 000 fichiers, sans compte.",
            'Limite / réserve': 'Les grandes bibliothèques exigent Pro, Team ou Lifetime.',
          },
          {
            Avantage: 'Trois systèmes de bureau',
            "Ce que cela donne à l'usage": 'Des versions existent pour Windows, Mac Apple Silicon et Linux.',
            'Limite / réserve': "Version Mac non notariée ; pas de Mac Intel ni d'application mobile.",
          },
          {
            Avantage: 'Analytique désactivable',
            "Ce que cela donne à l'usage": "Les compteurs d'usage et les rapports de plantage peuvent être coupés dans les Paramètres.",
            'Limite / réserve': "Ils sont activés par défaut, et le téléchargement des modèles et la vérification des mises à jour ne sont pas décrits comme désactivables.",
          },
          {
            Avantage: 'Versions récentes',
            "Ce que cela donne à l'usage": 'La version 0.7.40 est sortie le 21 novembre 2026.',
            'Limite / réserve': "Code fermé et encore une version 0.x : l'historique est court.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind face aux alternatives',
        content: [
          "Voici les outils les plus proches du répertoire : un qui trie les fichiers et les recherche aussi, un qui recherche et discute avec des fichiers locaux, et une photothèque avec recherche IA locale.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'PixaFind',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Offre gratuite, propriétaire',
            Rôle: 'Recherche de fichiers et photos par le sens',
            'Différence clé': 'Recherche seulement ; gratuit limité à 1 dossier',
          },
          {
            Application: '[StratoSort](/fr/power-local-llm/stratosort-review)',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit non commercial, PolyForm NC',
            Rôle: 'Tri, recherche et chat sur les fichiers',
            'Différence clé': 'Renomme et trie aussi ; code accessible',
          },
          {
            Application: '[Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Gratuit, propriétaire',
            Rôle: 'Recherche et chat sur les fichiers locaux',
            'Différence clé': 'Répond aux questions sur les fichiers ; code fermé',
          },
          {
            Application: '[PixlStash](/fr/power-local-llm/pixlstash-review)',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            Rôle: 'Photothèque avec recherche IA locale',
            'Différence clé': 'Photos seulement ; étiquetage et recherche de visages',
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui PixaFind est adapté',
        items: [
          "**Personnes qui ne retrouvent pas leurs fichiers par leur nom.** Décrivez plutôt un document ou une photo.",
          "**Utilisateurs de bureau soucieux de confidentialité.** Les modèles et l'index restent sur l'ordinateur, selon l'éditeur, avec une offre gratuite pour essayer.",
          "**Utilisateurs de Windows d'abord.** L'option GPU et la description du dépôt visent surtout Windows.",
          "**Personnes aux dossiers mélangés.** Documents, photos et code sont recherchés au même endroit.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui PixaFind n'est pas adapté",
        items: [
          "**Quiconque a besoin d'un code open source.** L'application de bureau est à code fermé.",
          "**Personnes qui veulent un chat ou un trieur de fichiers.** PixaFind retrouve des fichiers ; il ne discute pas et ne réorganise pas.",
          "**Utilisateurs de Mac Intel et de téléphones.** Seuls les Mac Apple Silicon et les ordinateurs de bureau sont couverts.",
          "**Quiconque exige zéro utilisation du réseau.** L'analytique et les rapports de plantage sont activés par défaut et doivent être désactivés.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'PixaFind fonctionne-t-il hors ligne ?',
            a: "Le site répond oui une fois les modèles d'IA téléchargés. Le premier lancement exige Internet pour le téléchargement, et les vérifications de mises à jour et la connexion à la licence utilisent aussi le réseau. PromptQuorum ne l'a pas testé hors ligne.",
          },
          {
            q: 'PixaFind est-il gratuit ?',
            a: "Il existe une offre gratuite pour 1 dossier et 2 000 fichiers, sans compte. Selon la page tarifs de l'éditeur, Pro coûte 12 $ par mois ou 8 $ par mois en facturation annuelle, et une licence Lifetime à 249 $ est un paiement unique.",
          },
          {
            q: 'PixaFind envoie-t-il mes fichiers dans le cloud ?',
            a: "La politique de confidentialité indique qu'il n'envoie jamais vos fichiers, vos photos ni leur contenu. Elle mentionne des compteurs d'usage, des enregistrements de session masqués et des rapports de plantage activés par défaut, désactivables dans les Paramètres. L'application est à code fermé : PromptQuorum n'a pas pu le vérifier.",
          },
          {
            q: 'Fonctionne-t-il sur Mac et Linux ?',
            a: "Oui : une version Mac Apple Silicon (selon la note de la page de téléchargement de l'éditeur, pas encore notariée par Apple) et des versions Linux AppImage et .deb existent, à côté de l'installateur Windows.",
          },
          {
            q: 'Qui édite PixaFind ?',
            a: "Le site indique qu'il est créé par PixaLabs. Les pages lues par PromptQuorum ne donnent ni adresse d'entreprise ni pays.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "PixaFind convient si vous voulez retrouver documents, photos et code sur un ordinateur Windows, Mac ou Linux en les décrivant, avec des modèles qui, selon l'éditeur, s'exécutent sur la machine, et une offre gratuite pour l'essayer. Une version est sortie le 21 novembre 2026.",
          "Les réserves tiennent au code fermé, à une analytique activée par défaut qu'il faut désactiver, à une version Mac non notariée, à une version 0.x récente et à des affirmations que PromptQuorum n'a pas pu vérifier. Essayez l'offre gratuite sur un seul dossier avant d'indexer vos archives.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de PixaFind](https://pixafind.com/) — fonctions, plateformes, tarifs et FAQ.',
          '[Politique de confidentialité](https://pixafind.com/privacy/) — traitement des données, dernière mise à jour le 19 novembre 2026.',
          "[Versions GitHub](https://github.com/Ishannaik/pixafind-releases/releases) — fichiers d'installation et date de publication de la version 0.7.40.",
          "[Page de contact](https://pixafind.com/contact/) — coordonnées de l'éditeur.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test de StratoSort](/fr/power-local-llm/stratosort-review) — une application qui trie les fichiers selon leur contenu et ajoute recherche et chat.",
          '[Test de Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review) — recherche et chat sur les fichiers locaux pour Mac et Windows.',
          "[Test de PixlStash](/fr/power-local-llm/pixlstash-review) — une photothèque avec recherche IA locale.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-ja.webp',
    title: 'PixaFind レビュー：ファイルと写真を探すローカルAI検索アプリ',
    seoTitle: 'PixaFind レビュー：意味でファイルと写真を検索',
    intro: 'PixaFindは、ファイル名ではなく意味でドキュメント、写真、コードを探すデスクトップアプリで、公式サイトによると、AIモデルはお使いのコンピューター上で動作します。「ビーチの夕日」や「解約予告期間が90日の契約書」のように入力すると、一致するファイルが表示されます。このレビューでは、Windows・Mac・Linux版、料金、プライバシー、制限、代替ツールをまとめます。PromptQuorumは開発元のページとリリースページを読みましたが、アプリ自体は試していません。',
    metaDescription: 'PixaFindのレビュー：Windows・Mac・Linux向けの、意味でファイルと写真を探すAI検索。開発元によるとモデルはPC上で動作。無料枠、料金、プライバシー、制限を解説。',
    twitterDescription: 'PixaFindのレビュー：説明するだけでファイルや写真を探せるローカルAI検索。Windows・Mac・Linux対応。無料枠、料金、プライバシー、制限、代替ツールを解説します。',
    audience: 'ドキュメント、写真、コードの大きなフォルダーを持ち、クラウドにアップロードせずに説明するだけでファイルを探したい方向け。インストール、料金、プライバシー、制限、代替ツールを扱います。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind レビュー',
      'pixafind ai ファイル検索',
      'セマンティック ファイル検索 windows',
      'ローカル ai 写真検索',
      '意味でファイル検索 オフライン',
      'ai デスクトップ検索 windows mac linux',
      'プライベート ファイル検索アプリ',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFindは、Windows・Mac・Linux向けのデスクトップアプリで、ドキュメント、写真、コードを意味で探します。開発元によると、AIモデルはお使いのコンピューター上で動作し、ファイルとインデックスもそこにとどまります。** 1フォルダー・2,000ファイルまでの無料枠と、有料のPro、Team、Lifetimeプランがあります。初回起動時にモデルをダウンロードし、開発元はアナリティクスとクラッシュレポートを既定でオン（切り替え可能）としており、PromptQuorumはアプリを試していません。',
    quickAnswerTop: {
      ja: {
        question: 'PixaFindはローカルで動くAIファイル検索アプリですか？',
        answer: '開発元によると、そうです。公式サイトにはAIモデルがお使いのハードウェア上で動作し、ファイルや検索がマシンの外に出ないと書かれており、プライバシーポリシーにはインデックスがコンピューター内に保存されると記載されています。モデルはHugging Faceから1回だけダウンロードされます。ポリシーには、利用状況の集計、マスクされたセッション録画、クラッシュレポートが既定でオンで、設定からオフにできるとも記載されています。',
        bullets: [
          'PDF、Word、PowerPoint、Excel、EPUB、ソースコード、メール、画像を含む76種類以上の形式を、意味で検索します。',
          '無料：1フォルダー、2,000ファイル、アカウント不要。開発元の料金ページによると、Proは月額12ドル（年払いなら月額8ドル）、Lifetimeは249ドルの買い切りです。',
          'Windows 10以降、Apple Silicon Mac（開発元のダウンロード案内によると、Appleの公証はまだ受けていません）、Linux版があり、必要な環境はRAM 4GBとディスク約2GBと記載されています。',
          'デスクトップアプリはクローズドソースのため、プライバシーに関する主張はコードで確認できません。',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PixaFindの入手方法', anchor: 'get-it' },
      { label: 'PixaFindの概要', anchor: 'at-a-glance' },
      { label: 'PixaFindとは', anchor: 'what-is-pixafind' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'PixaFindと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'PixaFindが向いている人', anchor: 'who-should-use' },
      { label: 'PixaFindが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFindは、選んだフォルダーをインデックス化し、普通の言葉の説明からドキュメント、写真、コードを探すデスクトップアプリで、開発元によると、AIモデルはお使いのコンピューター上で動作します。',
          },
          {
            type: 'plain-terms',
            text: '意味を理解してくれる検索ボックスだと考えてください。「夕暮れのビーチの写真」と入力すれば、IMG_4821という名前の写真でも見つかります。',
          },
        ],
        items: [
          'ローカルの主張：モデルとインデックスはコンピューター内にとどまります。モデルのダウンロード、更新の確認、ライセンスのサインイン、そしてオフにしない限りアナリティクスとクラッシュレポートでインターネットが使われます。',
          '開発元：PixaLabs。PromptQuorumが読んだページには、会社の住所も国も記載がありません。',
          'メンテナンス：バージョン0.7.40が2026年11月21日にリリースされ、最近も開発が行われていることがわかりますが、まだ0.xのバージョンです。',
          '費用：1フォルダー・2,000ファイルまでは無料。開発元によると、Pro、Team、249ドルのLifetimeプランで上限がなくなります。',
          '不足点：クローズドソースであること、PromptQuorumによる実機テストがないこと、公証を受けていないMac版、モバイルアプリがないことです。',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'PixaFindの入手方法',
        content: [
          '**PixaFindはほかのデスクトップアプリと同じようにインストールでき、WindowsとLinuxではターミナルは不要です。** 公式サイトからお使いのシステム用のインストーラーをダウンロードします。AIモデルは、初回起動時にアプリ内でダウンロードします。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://pixafind.com/download/win/) — Windows 10以降、インストーラー',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://pixafind.com/download/mac/) — Apple Silicon（M1以降）。公証なし、サイトの注記を参照',
          },
          {
            'プラットフォーム': 'Linux',
            '入手先': '[AppImageをダウンロード](https://pixafind.com/download/linux_appimage/)（x86_64）、またはUbuntu・Debian向けの[.debパッケージ](https://pixafind.com/download/linux_deb/)',
          },
          {
            'プラットフォーム': 'リリースページ',
            '入手先': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — インストーラー、リリース日、更新マニフェスト',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[pixafind.com](https://pixafind.com/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[PixaFindのプライバシーポリシー](https://pixafind.com/privacy/)',
          },
        ],
        note: '公式サイトによると、GitHubリポジトリにはリリース用のインストーラーだけがあり、デスクトップアプリはクローズドソースです。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFindの概要',
        columns: ['項目', 'PixaFind'],
        rows: [
          { '項目': 'プラットフォーム', 'PixaFind': 'Windows 10以降、Apple Silicon Mac、Linuxのデスクトップ' },
          { '項目': '価格', 'PixaFind': '無料枠あり。Proは月額8ドルから。Lifetimeは249ドル' },
          { '項目': 'ライセンス', 'PixaFind': 'プロプライエタリ、クローズドソース' },
          { '項目': '実行場所', 'PixaFind': '開発元によるとお使いのPC上。モデルのダウンロードにはインターネットが必要' },
          { '項目': 'メモリ', 'PixaFind': 'RAM 4GBとディスク約2GB。WindowsではGPUは任意' },
          { '項目': '入力の種類', 'PixaFind': '76種類以上の形式：ドキュメント、コード、メール、画像' },
          { '項目': '無料枠の上限', 'PixaFind': '1フォルダーと2,000ファイル、アカウント不要' },
          { '項目': '開発元', 'PixaFind': 'PixaLabs' },
        ],
        note: '開発元のサイトに記載がない項目は、未対応ではなく不明という意味です。価格は開発元が示す米ドルの定価です。購入前に開発元の料金ページをご確認ください。',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'PixaFindとは',
        content: [
          '**PixaFindは、ファイル名だけでなく中身を読み取る検索アプリです。** インデックス化するフォルダーを選ぶと、アプリが低い優先度でバックグラウンドでインデックスを作成し、検索ボックスに説明を入力すれば一致するドキュメント、写真、コードが表示されます。画像をクリックして、似た画像を探すこともできます。',
          'ファイルとチャットしたり、整理し直したりはしません。あくまで検索ツールです。フォルダーの整理や名前の付け直し、ドキュメントとのチャットが必要な場合は、下の代替ツールをご覧ください。',
          'このレビューは、公式サイト、プライバシーポリシー、GitHubのリリースページに基づいています。PromptQuorumはPixaFindをインストールも試用もしていないため、検索の質、速度、インデックス作成後は100ミリ秒未満で結果が返るという主張は、開発元の説明です。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルのダウンロード、フォルダーの選択の3段階です。** 手順は公式サイトとプライバシーポリシーに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '上の「PixaFindの入手方法」の表からお使いのシステム用のインストーラーをダウンロードします。Macでは、公証を受けていないため、サイトに書かれている1回限りの手順に従います。公証を受けていないアプリはAppleの自動マルウェアチェックを通過していないため、提供元を信頼できる場合にのみインストールしてください。',
          },
          {
            title: 'モデルのダウンロードを待つ',
            whyItMatters: '初回起動時に、アプリがHugging FaceからAIモデルをダウンロードします。ディスク容量は約2GBで、1回だけインターネットが必要です。',
          },
          {
            title: '検索対象のフォルダーを選ぶ',
            whyItMatters: '検索できるようにしたいフォルダーだけを選びます。無料枠は1フォルダー、2,000ファイルまでです。',
          },
          {
            title: '普通の言葉で検索する',
            whyItMatters: '探したいファイルや写真を説明して結果を開きます。設定の「データとプライバシー」で、任意のアナリティクスとクラッシュレポートを確認してください。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、意味でファイルを探すことです。** 以下はすべて、開発元の公式サイトとプライバシーポリシーに基づいています。',
        ],
        items: [
          '**セマンティックなテキスト検索。** PDF、Word、PowerPoint、Excel、EPUB、ソースコード、メールなど76種類以上の形式の中身を読み取り、キーワードだけでなく意味で一致させます。',
          '**画像検索。** 「ビーチの夕日」のように説明を入力すると一致する写真が見つかり、画像をクリックすると似た画像が見つかります。',
          '**バックグラウンドでのインデックス作成。** インデックス作成は低い優先度で実行され、WindowsではGPUは任意です。開発元によると、インデックス作成後は100ミリ秒未満で検索結果が返ります。',
          '**フォルダーの管理。** インデックス化するフォルダーを選べます。インデックスはお使いのコンピューターのアプリデータフォルダーに保存されます。',
          '**複数のPC。** Proは最大3台、Lifetimeは最大2台のPCに対応し、Teamは席を追加でき、請求は1本にまとまります。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**PixaFindは独自のAIモデルを備えており、初回起動時にHugging Faceからダウンロードされます。** 公式サイトにはモデル名が書かれていないため、どのモデルを使っているか、検索の精度がどの程度かは、ここでは記載できません。',
          '必要な環境は、RAM 4GBとディスク約2GBと記載されており、モデルはCPU、またはWindowsでは任意でGPUで動作します。速度や精度の数値は、PromptQuorumは再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、PixaFindはお使いのコンピューター上でファイルを検索し、ファイル、写真、その中身を決してアップロードしないと記載されています。** インデックスはアプリデータフォルダーにとどまります。公式サイトでは、APIキーは不要だとも説明されています。',
          'ポリシーには、アプリが行える接続も挙げられています。Hugging Faceからの1回限りのモデルのダウンロード、GitHubでの更新の確認（GitHubにはIPアドレスが見えます）、そしてライセンスの認証またはサインインで、これにはライセンスキー、マシンIDの一方向ハッシュ、オペレーティングシステムが送信されます。利用状況の集計（PostHog）、マスクされたセッション録画（PostHog）、クラッシュレポート（Sentry）は既定でオンで、設定の「データとプライバシー」からオフにでき、ポリシーによると検索テキストやファイルの内容は含まれません。ポリシーの最終更新日は2026年11月19日です。',
          'デスクトップアプリはクローズドソースのため、これらをコードで確認することはできず、PromptQuorumはネットワーク通信も調べていません。無料枠は、アカウント不要で1フォルダー、2,000ファイルまでです。開発元によると、Proは月額12ドル、年払いなら月額8ドルです。Teamは1席あたり月額15ドル、年払いなら月額12ドルで、最小3席です。Lifetimeは1人・最大2台のPCで249ドルの買い切りです。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: [
          'メリット',
          '実際の使い勝手',
          '制限・注意点',
        ],
        rows: [
          {
            'メリット': 'モデルがお使いのコンピューター上で動作',
            '実際の使い勝手': '開発元によると、モデルのダウンロード後はインターネットなしで検索できます。',
            '制限・注意点': '初回のダウンロードにはインターネットが必要です。PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            'メリット': '意味での検索',
            '実際の使い勝手': 'ファイル名を覚えていなくても、ファイルや写真を説明して探せます。',
            '制限・注意点': '検索の質はここでは試しておらず、モデルも公表されていません。',
          },
          {
            'メリット': '無料枠',
            '実際の使い勝手': 'アカウントなしで、1フォルダー、2,000ファイルまで試せます。',
            '制限・注意点': 'それより大きなライブラリにはPro、Team、Lifetimeが必要です。',
          },
          {
            'メリット': '3つのデスクトップシステム',
            '実際の使い勝手': 'Windows、Apple Silicon Mac、Linux向けのビルドがあります。',
            '制限・注意点': 'Mac版は公証を受けておらず、Intel Macとモバイルアプリには対応していません。',
          },
          {
            'メリット': '切り替え可能なアナリティクス',
            '実際の使い勝手': '利用状況の集計とクラッシュレポートは設定でオフにできます。',
            '制限・注意点': '既定でオンです。モデルのダウンロードと更新の確認は切り替え可能とは説明されていません。',
          },
          {
            'メリット': '最近のリリース',
            '実際の使い勝手': 'バージョン0.7.40が2026年11月21日に公開されました。',
            '制限・注意点': 'クローズドソースで、まだ0.xのバージョンのため、実績は短いです。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFindと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近いツールは、ファイルを整理して検索もできるもの、ローカルのファイルを検索してチャットできるもの、そしてローカルAI検索を備えたフォトライブラリです。',
        ],
        columns: [
          'アプリ',
          '対応',
          '価格とライセンス',
          '役割',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': 'PixaFind',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料枠あり、プロプライエタリ',
            '役割': '意味でファイルと写真を検索',
            '主な違い': '検索のみ。無料枠は1フォルダーまで',
          },
          {
            'アプリ': '[StratoSort](/ja/power-local-llm/stratosort-review)',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '非商用は無料、PolyForm NC',
            '役割': 'ファイル整理、検索、チャット',
            '主な違い': '名前変更と整理もできる。ソース公開型',
          },
          {
            'アプリ': '[Hyperlink (Nexa AI)](/ja/power-local-llm/hyperlink-nexa-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': '無料、プロプライエタリ',
            '役割': 'ローカルのファイル検索とチャット',
            '主な違い': 'ファイルの内容から質問に回答。クローズドソース',
          },
          {
            'アプリ': '[PixlStash](/ja/power-local-llm/pixlstash-review)',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'ローカルAI検索を備えた画像ライブラリ',
            '主な違い': '写真のみ。タグ付けと顔検索',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PixaFindが向いている人',
        items: [
          '**ファイル名からファイルを探せない人。** 代わりにドキュメントや写真を説明して探せます。',
          '**プライバシーを重視するデスクトップユーザー。** 開発元によると、モデルとインデックスはコンピューター内にとどまり、試せる無料枠もあります。',
          '**まずWindowsユーザー。** GPUの選択肢やリポジトリの説明は、Windowsを中心にしています。',
          '**種類の混ざったフォルダーを持つ人。** ドキュメント、写真、コードを1か所で検索できます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PixaFindが向いていない人',
        items: [
          '**オープンソースのコードが必要な人。** デスクトップアプリはクローズドソースです。',
          '**チャットやファイル整理ツールがほしい人。** PixaFindはファイルを探すだけで、チャットも整理し直しもしません。',
          '**Intel Macやスマートフォンのユーザー。** 対応しているのはApple Silicon Macとデスクトップだけです。',
          '**ネットワーク通信をまったく使いたくない人。** アナリティクスとクラッシュレポートは既定でオンのため、自分でオフにする必要があります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PixaFindはオフラインで動作しますか？',
            a: '公式サイトには、AIモデルのダウンロード後は動作すると書かれています。初回起動時はダウンロードのためにインターネットが必要で、更新の確認とライセンスのサインインもネットワークを使います。PromptQuorumはオフラインでは試していません。',
          },
          {
            q: 'PixaFindは無料ですか？',
            a: 'アカウント不要で、1フォルダー、2,000ファイルまでの無料枠があります。開発元の料金ページによると、Proは月額12ドル、年払いなら月額8ドルで、249ドルのLifetimeライセンスは1回払いです。',
          },
          {
            q: 'PixaFindはファイルをクラウドに送りますか？',
            a: 'プライバシーポリシーには、ファイル、写真、その中身を決してアップロードしないと記載されています。既定でオンの利用状況の集計、マスクされたセッション録画、クラッシュレポートも挙げられており、設定からオフにできます。アプリはクローズドソースのため、PromptQuorumはこれを確認できませんでした。',
          },
          {
            q: 'MacとLinuxでも動きますか？',
            a: 'はい。Windows版のインストーラーのほかに、Apple Silicon Mac版（開発元のダウンロード案内によると、Appleの公証はまだ受けていません）と、LinuxのAppImage版および.deb版があります。',
          },
          {
            q: 'PixaFindは誰が作っていますか？',
            a: '公式サイトには、PixaLabsが開発したと書かれています。PromptQuorumが読んだページには、会社の住所も国も記載がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'PixaFindは、Windows・Mac・Linuxのコンピューターで、ドキュメント、写真、コードを説明するだけで探したい方に向いています。開発元によると、モデルはマシン上で動作し、試せる無料枠もあります。2026年11月21日にリリースが公開されました。',
          '注意点は、クローズドソースであること、オフにする必要がある既定オンのアナリティクス、公証を受けていないMac版、まだ新しい0.xのバージョン、そしてPromptQuorumが確認できなかった主張です。アーカイブ全体をインデックス化する前に、まず1つのフォルダーで無料枠を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[PixaFind公式サイト](https://pixafind.com/) — 機能、対応プラットフォーム、料金、FAQ。',
          '[プライバシーポリシー](https://pixafind.com/privacy/) — データの扱い。最終更新は2026年11月19日。',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — インストーラーとバージョン0.7.40のリリース日。',
          '[お問い合わせページ](https://pixafind.com/contact/) — 開発元の連絡先。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[StratoSortレビュー](/ja/power-local-llm/stratosort-review) — 内容でファイルを整理し、検索とチャットも備えたアプリ。',
          '[Hyperlink (Nexa AI)レビュー](/ja/power-local-llm/hyperlink-nexa-review) — Mac・Windows向けのローカルファイル検索とチャット。',
          '[PixlStashレビュー](/ja/power-local-llm/pixlstash-review) — ローカルAI検索を備えた画像ライブラリ。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-zh.webp',
    title: 'PixaFind评测：按含义搜索文件和照片的本地AI工具',
    seoTitle: 'PixaFind评测：按含义搜索文件与照片的本地AI',
    intro: 'PixaFind是一款桌面应用，按含义而不是文件名来查找文档、照片和代码，据其官网称，所用的AI模型在你自己的电脑上运行。你可以输入“海滩上的日落”或“带有90天通知条款的合同”之类的描述，它会返回匹配的文件。本评测涵盖Windows、Mac和Linux版本、价格、隐私、限制和替代方案；PromptQuorum阅读了开发者的网页和发布页面，但没有测试这款应用。',
    metaDescription: 'PixaFind评测：适用于Windows、Mac和Linux的AI文件与照片语义搜索，据开发者称模型在本机运行。免费版、价格、隐私与限制。',
    twitterDescription: 'PixaFind评测：用描述来查找文件和照片，适用于Windows、Mac和Linux的本地AI搜索。免费版、价格、隐私、限制与替代方案。',
    audience: '拥有大量文档、照片和代码文件夹、希望通过描述来查找文件、又不想把文件上传到云服务的用户——涵盖安装、价格、隐私、限制和替代方案。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind 评测',
      'pixafind ai 文件搜索',
      'windows 语义文件搜索',
      '本地 ai 照片搜索',
      '离线按含义搜索文件',
      'ai 桌面搜索 windows mac linux',
      '私密文件搜索应用',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFind是一款适用于Windows、Mac和Linux的桌面应用，按含义查找文档、照片和代码，据开发者称，AI模型在你的电脑上运行，文件和索引也留在本机。** 它提供可处理1个文件夹和2,000个文件的免费版，以及付费的Pro、Team和Lifetime方案。首次启动会下载模型；开发者列出的分析和崩溃报告默认开启，但可以关闭；PromptQuorum没有测试这款应用。',
    quickAnswerTop: {
      zh: {
        question: 'PixaFind是本地AI文件搜索应用吗？',
        answer: '据开发者称是：官网说AI模型在你的硬件上运行，你的文件和搜索不会离开你的电脑，隐私政策则说索引保存在本机。模型只需从Hugging Face下载一次。政策还列出了默认开启的使用计数、经过遮蔽的会话录制和崩溃报告，可以在设置中关闭。',
        bullets: [
          '它按含义搜索76种以上的文件格式，包括PDF、Word、PowerPoint、Excel、EPUB、源代码、电子邮件和图片。',
          '免费版：1个文件夹和2,000个文件，无需账号。据开发者的价格页面，Pro每月12美元（按年付费每月8美元）；Lifetime一次性249美元。',
          '提供Windows 10或更高版本、Apple Silicon Mac（据开发者下载页说明，尚未通过Apple公证）和Linux版本；官方标明的需求是4 GB内存和约2 GB磁盘空间。',
          '桌面应用是闭源的，因此隐私说法无法通过代码核实。',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取PixaFind', anchor: 'get-it' },
      { label: 'PixaFind概览', anchor: 'at-a-glance' },
      { label: 'PixaFind是什么', anchor: 'what-is-pixafind' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'PixaFind与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用PixaFind的人', anchor: 'who-should-use' },
      { label: '不适合使用PixaFind的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFind是一款桌面应用，据开发者称，它先为你选定的文件夹建立索引，然后根据日常语言的描述查找文档、照片和代码，所用的AI模型在你自己的电脑上运行。',
          },
          {
            type: 'plain-terms',
            text: '把它想成一个能听懂你意思的搜索框，所以输入“日落时的海滩照片”，即使照片叫IMG_4821也能找到。',
          },
        ],
        items: [
          '本地说法：模型和索引留在电脑上；模型下载、更新检查、许可证登录，以及未关闭时的分析和崩溃报告会使用互联网。',
          '开发者：PixaLabs；PromptQuorum阅读的页面没有给出公司地址或所在国家。',
          '维护状态：版本0.7.40于2026年11月21日发布，表明近期仍有开发，但仍是0.x版本。',
          '费用：1个文件夹和2,000个文件以内免费；据开发者称，Pro、Team和249美元的Lifetime方案可解除限制。',
          '不足：闭源，PromptQuorum没有实测，Mac版本未经公证，没有移动应用。',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: '获取PixaFind',
        content: [
          '**PixaFind的安装方式与其他桌面应用相同，在Windows和Linux上无需使用终端。** 从官网下载适合你系统的安装包；AI模型在首次启动时于应用内下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://pixafind.com/download/win/) — Windows 10或更高版本，安装包',
          },
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://pixafind.com/download/mac/) — Apple Silicon（M1或更新）；未经公证，见官网说明',
          },
          {
            '平台': 'Linux',
            '获取方式': '[下载AppImage](https://pixafind.com/download/linux_appimage/)（x86_64）或适用于Ubuntu和Debian的[.deb安装包](https://pixafind.com/download/linux_deb/)',
          },
          {
            '平台': '发布页面',
            '获取方式': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — 安装包、发布日期和更新清单',
          },
          {
            '平台': '官网',
            '获取方式': '[pixafind.com](https://pixafind.com/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[PixaFind隐私政策](https://pixafind.com/privacy/)',
          },
        ],
        note: '据官网称，GitHub仓库只托管发布的安装包；桌面应用是闭源的。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind概览',
        columns: ['属性', 'PixaFind'],
        rows: [
          { '属性': '平台', 'PixaFind': 'Windows 10+、Apple Silicon Mac、Linux桌面版' },
          { '属性': '价格', 'PixaFind': '免费版；Pro每月8美元起；Lifetime 249美元' },
          { '属性': '许可', 'PixaFind': '专有，闭源' },
          { '属性': '运行方式', 'PixaFind': '据开发者称在你的电脑上运行；下载模型需要联网' },
          { '属性': '内存', 'PixaFind': '4 GB内存和约2 GB磁盘；Windows上GPU可选' },
          { '属性': '输入类型', 'PixaFind': '76种以上格式：文档、代码、邮件、图片' },
          { '属性': '免费额度', 'PixaFind': '1个文件夹和2,000个文件，无需账号' },
          { '属性': '开发者', 'PixaFind': 'PixaLabs' },
        ],
        note: '开发者网站未提及，表示未知，而不是不支持。价格为开发者公布的美元标价；购买前请查看其价格页面。',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'PixaFind是什么',
        content: [
          '**PixaFind是一款读取文件内部内容、而不只是文件名的搜索应用。** 你选择要建立索引的文件夹，应用会在后台以低优先级建立索引，之后在搜索框里描述想找的内容，就会返回匹配的文档、照片和代码。点击一张图片，还可以查找相似图片。',
          '它不会与你的文件对话，也不会重新整理文件：它只是一个查找工具。如果你想整理并重命名文件夹，或与文档对话，请参阅下方的替代方案。',
          '本评测依据官网、隐私政策和GitHub发布页面。PromptQuorum没有安装或测试PixaFind，因此搜索质量、速度，以及建立索引后结果在100毫秒内返回的说法，均出自开发者自己。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、下载模型和选择文件夹。** 以下步骤依据官网和隐私政策。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从上方“获取PixaFind”表格中下载适合你系统的安装包；在Mac上，由于该版本未经公证，请按官网描述的一次性步骤操作。未经公证的应用没有通过Apple的自动恶意软件检查，请仅在信任来源时安装。',
          },
          {
            title: '等待模型下载',
            whyItMatters: '首次启动时，应用会从Hugging Face下载AI模型，占用约2 GB磁盘空间，需要联网一次。',
          },
          {
            title: '选择要建立索引的文件夹',
            whyItMatters: '只选你希望可被搜索的文件夹；免费版涵盖1个文件夹和2,000个文件。',
          },
          {
            title: '用日常语言搜索',
            whyItMatters: '描述你想要的文件或照片并打开结果；请在“设置”的“数据与隐私”中查看可选的分析和崩溃报告。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在按含义查找文件。** 以下内容均来自开发者的官网和隐私政策。',
        ],
        items: [
          '**语义文本搜索。** 它读取76种以上格式的内部内容，包括PDF、Word、PowerPoint、Excel、EPUB、源代码和电子邮件，不只匹配关键词，也匹配含义。',
          '**图片搜索。** 输入“海滩上的日落”之类的描述即可找到匹配的照片，点击一张图片则可找到相似的图片。',
          '**后台索引。** 索引以低优先级运行；Windows上GPU可选。据开发者称，索引建好后搜索结果在100毫秒内返回。',
          '**文件夹控制。** 由你选择为哪些文件夹建立索引；索引保存在你电脑上的应用数据文件夹中。',
          '**多台电脑。** Pro最多支持3台电脑，Lifetime最多2台；Team可增加席位并统一结算。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**PixaFind自带AI模型，首次启动时从Hugging Face下载。** 官网没有说明具体模型名称，因此这里无法记载使用了哪些模型以及搜索效果如何。',
          '官方标明的需求是4 GB内存和约2 GB磁盘空间，模型在CPU上运行，Windows上还可以选择使用GPU。PromptQuorum没有复现任何速度或准确度数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，PixaFind在你自己的电脑上搜索文件，绝不会上传你的文件、照片或其中的内容。** 索引保存在应用数据文件夹中。官网另外提到，无需API密钥。',
          '政策还列出了应用可能发起的连接：从Hugging Face一次性下载模型、在GitHub上检查更新（GitHub会看到你的IP地址），以及许可证激活或登录，这会发送许可证密钥、机器ID的单向哈希和操作系统信息。使用计数（PostHog）、经过遮蔽的会话录制（PostHog）和崩溃报告（Sentry）默认开启，可以在“设置”的“数据与隐私”中关闭，据政策称其中不包含搜索文本或文件内容。该政策最近更新于2026年11月19日。',
          '桌面应用是闭源的，因此以上说法都无法通过代码核实，PromptQuorum也没有检查网络流量。免费版涵盖1个文件夹和2,000个文件，无需账号。据开发者称，Pro每月12美元，按年付费则每月8美元；Team每席位每月15美元，按年付费为12美元，至少3个席位；Lifetime一次性249美元，供一人在最多2台电脑上使用。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '模型在你的电脑上运行',
            '实际使用中的意义': '据开发者称，模型下载完成后，搜索无需联网即可运行。',
            '局限 / 注意事项': '首次下载需要联网；PromptQuorum没有检查网络流量。',
          },
          {
            '优势': '按含义搜索',
            '实际使用中的意义': '描述文件或照片，而不必记住它的名字。',
            '局限 / 注意事项': '这里没有测试搜索质量，模型名称也未公开。',
          },
          {
            '优势': '免费版',
            '实际使用中的意义': '在1个文件夹和2,000个文件上免费试用，无需账号。',
            '局限 / 注意事项': '更大的资料库需要Pro、Team或Lifetime。',
          },
          {
            '优势': '三种桌面系统',
            '实际使用中的意义': '提供Windows、Apple Silicon Mac和Linux版本。',
            '局限 / 注意事项': 'Mac版本未经公证；不支持Intel Mac，也没有移动应用。',
          },
          {
            '优势': '可关闭的分析',
            '实际使用中的意义': '使用计数和崩溃报告可以在设置中关闭。',
            '局限 / 注意事项': '它们默认开启，模型下载和更新检查也没有说明可以关闭。',
          },
          {
            '优势': '近期发布',
            '实际使用中的意义': '版本0.7.40于2026年11月21日发布。',
            '局限 / 注意事项': '闭源且仍是0.x版本，长期记录较短。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind与替代方案对比',
        content: [
          '目录中最接近的工具包括：一款既整理文件又能搜索的工具、一款搜索本地文件并与之对话的工具，以及一款带本地AI搜索的照片库。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'PixaFind',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '免费版，专有',
            '定位': '按含义搜索文件和照片',
            '主要区别': '仅查找；免费版限1个文件夹',
          },
          {
            '应用': '[StratoSort](/zh/power-local-llm/stratosort-review)',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '非商业免费，PolyForm NC',
            '定位': '文件整理、搜索和问答',
            '主要区别': '还能重命名和整理；源代码可见',
          },
          {
            '应用': '[Hyperlink (Nexa AI)](/zh/power-local-llm/hyperlink-nexa-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '免费，专有',
            '定位': '本地文件搜索和问答',
            '主要区别': '根据文件回答问题；闭源',
          },
          {
            '应用': '[PixlStash](/zh/power-local-llm/pixlstash-review)',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '免费，GPL-3.0',
            '定位': '带本地AI搜索的图片库',
            '主要区别': '仅限照片；支持标签和人脸搜索',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用PixaFind的人',
        items: [
          '**记不住文件名、找不到文件的人。** 直接描述文档或照片即可。',
          '**注重隐私的桌面用户。** 据开发者称，模型和索引留在电脑上，并且有免费版可以试用。',
          '**优先考虑Windows用户。** GPU选项和仓库说明都以Windows为重点。',
          '**文件夹内容混杂的人。** 文档、照片和代码可以在同一处搜索。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用PixaFind的人',
        items: [
          '**需要开源代码的人。** 桌面应用是闭源的。',
          '**想要对话功能或文件整理工具的人。** PixaFind只负责查找文件，不对话，也不重新整理。',
          '**Intel Mac和手机用户。** 仅支持Apple Silicon Mac和桌面电脑。',
          '**需要完全不使用网络的人。** 分析和崩溃报告默认开启，需要你自行关闭。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PixaFind可以离线使用吗？',
            a: '官网称AI模型下载完成后可以。首次启动需要联网下载模型，更新检查和许可证登录也会使用网络。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: 'PixaFind免费吗？',
            a: '有免费版，可处理1个文件夹和2,000个文件，无需账号。据开发者的价格页面，Pro每月12美元，按年付费每月8美元，249美元的Lifetime许可是一次性付款。',
          },
          {
            q: 'PixaFind会把我的文件发送到云端吗？',
            a: '隐私政策称它绝不会上传你的文件、照片或其中的内容。政策列出了默认开启的使用计数、经过遮蔽的会话录制和崩溃报告，可以在设置中关闭。该应用是闭源的，因此PromptQuorum无法核实。',
          },
          {
            q: '它能在Mac和Linux上运行吗？',
            a: '可以：除Windows安装包外，还有Apple Silicon Mac版本（据开发者下载页说明，尚未通过Apple公证）以及Linux的AppImage和.deb版本。',
          },
          {
            q: '谁开发了PixaFind？',
            a: '官网称其由PixaLabs开发。PromptQuorum阅读的页面没有给出公司地址或所在国家。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想在Windows、Mac或Linux电脑上通过描述来查找文档、照片和代码，并且据开发者称模型在本机运行、还有免费版可以试用，PixaFind是个合适的选择。它在2026年11月21日发布了新版本。',
          '需要注意的是闭源、需要手动关闭的默认开启分析、未经公证的Mac版本、较年轻的0.x版本，以及PromptQuorum无法核实的说法。在为你的整个档案建立索引之前，请先用免费版在一个文件夹上试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[PixaFind官网](https://pixafind.com/) — 功能、平台、价格和常见问题。',
          '[隐私政策](https://pixafind.com/privacy/) — 数据处理，最近更新于2026年11月19日。',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — 安装包文件和版本0.7.40的发布日期。',
          '[联系页面](https://pixafind.com/contact/) — 开发者联系方式。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[StratoSort评测](/zh/power-local-llm/stratosort-review) — 一款按内容整理文件并提供搜索和问答的应用。',
          '[Hyperlink (Nexa AI)评测](/zh/power-local-llm/hyperlink-nexa-review) — 适用于Mac和Windows的本地文件搜索和问答。',
          '[PixlStash评测](/zh/power-local-llm/pixlstash-review) — 带本地AI搜索的图片库。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-es.webp',
    title: 'Reseña de PixaFind: búsqueda con IA local para tus archivos y fotos',
    seoTitle: 'Reseña de PixaFind: busca archivos y fotos por significado',
    intro: 'PixaFind es una app de escritorio que encuentra documentos, fotos y código por lo que significan y no por cómo se llaman, con modelos de IA que, según su web, se ejecutan en tu propio ordenador. Escribes algo como "atardecer en la playa" o "el contrato con la cláusula de preaviso de 90 días" y te devuelve los archivos que coinciden. Esta reseña cubre las versiones para Windows, Mac y Linux, los precios, la privacidad, los límites y las alternativas; PromptQuorum leyó las páginas del fabricante y la página de versiones, pero no probó la app.',
    metaDescription: 'Reseña de PixaFind: búsqueda de archivos y fotos por significado con IA para Windows, Mac y Linux, modelos en tu PC según el fabricante. Plan gratis, precios, privacidad.',
    twitterDescription: 'Reseña de PixaFind: encuentra archivos y fotos describiéndolos. Búsqueda con IA local para Windows, Mac y Linux. Plan gratis, precios, privacidad, límites y alternativas.',
    audience: 'Personas con muchas carpetas de documentos, fotos y código que quieren encontrar archivos describiéndolos, sin subirlos a un servicio en la nube — cubre instalación, precios, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'reseña pixafind',
      'pixafind búsqueda de archivos con ia',
      'búsqueda semántica de archivos windows',
      'búsqueda de fotos con ia local',
      'buscar archivos por significado sin conexión',
      'búsqueda de escritorio con ia windows mac linux',
      'app privada para buscar archivos',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFind es una app de escritorio para Windows, Mac y Linux que encuentra documentos, fotos y código por significado, con modelos de IA que, según el fabricante, se ejecutan en tu ordenador y mantienen en él tus archivos y el índice.** Tiene un plan gratis de 1 carpeta y 2000 archivos, y planes de pago Pro, Team y Lifetime. El primer inicio descarga los modelos, el fabricante indica que las analíticas y los informes de fallos vienen activados por defecto pero se pueden desactivar, y PromptQuorum no probó la app.',
    quickAnswerTop: {
      es: {
        question: '¿Es PixaFind una app de búsqueda de archivos con IA local?',
        answer: 'Según el fabricante, sí: la web dice que los modelos de IA se ejecutan en tu hardware y que tus archivos y búsquedas nunca salen de tu equipo, y la política de privacidad dice que el índice se guarda en el ordenador. Los modelos se descargan una vez desde Hugging Face. La política también menciona recuentos de uso, grabaciones de sesión enmascaradas e informes de fallos que vienen activados por defecto y se pueden desactivar en Ajustes.',
        bullets: [
          'Busca por significado en más de 76 formatos de archivo, entre ellos PDF, Word, PowerPoint, Excel, EPUB, código fuente, correos e imágenes.',
          'Gratis: 1 carpeta y 2000 archivos, sin cuenta. Según la página de precios del fabricante, Pro cuesta 12 USD al mes (8 USD al mes con pago anual); Lifetime cuesta 249 USD una sola vez.',
          'Existen versiones para Windows 10 o posterior, Mac con Apple Silicon (según la nota de descarga del fabricante, aún sin notarizar por Apple) y Linux; se indican 4 GB de RAM y unos 2 GB de disco.',
          'La app de escritorio es de código cerrado, así que las afirmaciones sobre privacidad no se pueden comprobar en el código.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir PixaFind', anchor: 'get-it' },
      { label: 'PixaFind de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es PixaFind', anchor: 'what-is-pixafind' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'PixaFind frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar PixaFind', anchor: 'who-should-use' },
      { label: 'Quién no debería usar PixaFind', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFind es una app de escritorio que indexa las carpetas que eliges y luego encuentra documentos, fotos y código a partir de una descripción en lenguaje natural, con modelos de IA que se ejecutan en tu propio ordenador, según el fabricante.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un cuadro de búsqueda que entiende lo que quieres decir, de modo que "fotos de la playa al atardecer" encuentra las imágenes aunque se llamen IMG_4821.',
          },
        ],
        items: [
          'Afirmación de uso local: los modelos y el índice permanecen en el ordenador; la descarga de modelos, las comprobaciones de actualizaciones, el inicio de sesión de la licencia y, si no se desactivan, las analíticas y los informes de fallos usan internet.',
          'Fabricante: PixaLabs; las páginas que leyó PromptQuorum no indican dirección de la empresa ni país.',
          'Mantenimiento: la versión 0.7.40 salió el 21 de noviembre de 2026, lo que indica desarrollo reciente, aunque sigue siendo una versión 0.x.',
          'Coste: gratis para 1 carpeta y 2000 archivos; según el fabricante, Pro, Team y un plan Lifetime de 249 USD eliminan los límites.',
          'Carencias: código cerrado, sin prueba práctica de PromptQuorum, una versión para Mac sin notarizar y ninguna app móvil.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'Conseguir PixaFind',
        content: [
          '**PixaFind se instala como cualquier app de escritorio, así que no hace falta terminal en Windows ni en Linux.** Descarga el instalador para tu sistema desde el sitio oficial; los modelos de IA se descargan dentro de la app en el primer inicio.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://pixafind.com/download/win/) — Windows 10 o posterior, instalador',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 o posterior); sin notarizar, ver la nota del sitio',
          },
          {
            Plataforma: 'Linux',
            'Dónde conseguirla': '[Descargar el AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) o el [paquete .deb](https://pixafind.com/download/linux_deb/) para Ubuntu y Debian',
          },
          {
            Plataforma: 'Página de versiones',
            'Dónde conseguirla': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — instaladores y fechas de versión',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[pixafind.com](https://pixafind.com/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de PixaFind](https://pixafind.com/privacy/)',
          },
        ],
        note: 'El repositorio de GitHub solo aloja los instaladores de cada versión; la app de escritorio es de código cerrado, según la web.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind de un vistazo',
        columns: ['Atributo', 'PixaFind'],
        rows: [
          { Atributo: 'Plataforma', PixaFind: 'Escritorio: Windows 10+, Mac con Apple Silicon, Linux' },
          { Atributo: 'Precio', PixaFind: 'Plan gratis; Pro desde 8 USD al mes; Lifetime 249 USD' },
          { Atributo: 'Licencia', PixaFind: 'Propietaria, código cerrado' },
          { Atributo: 'Ejecución', PixaFind: 'En tu ordenador, según el fabricante; la descarga de modelos necesita internet' },
          { Atributo: 'Memoria', PixaFind: '4 GB de RAM y unos 2 GB de disco; GPU opcional en Windows' },
          { Atributo: 'Tipos de entrada', PixaFind: 'Más de 76 formatos: documentos, código, correos, imágenes' },
          { Atributo: 'Límite gratuito', PixaFind: '1 carpeta y 2000 archivos, sin cuenta' },
          { Atributo: 'Fabricante', PixaFind: 'PixaLabs' },
        ],
        note: 'Que falte una afirmación en el sitio del fabricante significa desconocido, no no compatible. Los precios son los de lista del fabricante, en dólares estadounidenses; consulta su página de precios antes de comprar.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'Qué es PixaFind',
        content: [
          '**PixaFind es una app de búsqueda que lee el contenido de tus archivos, no solo sus nombres.** Eliges las carpetas que indexar, la app construye un índice en segundo plano con prioridad baja y un cuadro de búsqueda devuelve después los documentos, fotos y código que coinciden con lo que describes. Al hacer clic en una imagen también puede encontrar imágenes similares.',
          'No chatea con tus archivos ni los reorganiza: es un buscador. Si quieres ordenar y renombrar una carpeta, o chatear con tus documentos, consulta las alternativas más abajo.',
          'Esta reseña se basa en el sitio web, la política de privacidad y la página de versiones de GitHub. PromptQuorum no instaló ni probó PixaFind, así que la calidad de la búsqueda, la velocidad y la afirmación de resultados en menos de 100 milisegundos una vez indexado son declaraciones del fabricante.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La configuración consiste en instalar, descargar los modelos y elegir carpetas.** Los pasos siguen el sitio web y la política de privacidad.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el instalador para tu sistema desde la tabla Conseguir PixaFind de arriba; en un Mac, sigue el paso único que describe el sitio porque la versión no está notarizada. Una app sin notarizar no ha pasado la comprobación automática de malware de Apple, así que instálala solo si confías en la fuente.',
          },
          {
            title: 'Deja que se descarguen los modelos',
            whyItMatters: 'En el primer inicio la app descarga sus modelos de IA desde Hugging Face, unos 2 GB de espacio en disco, lo que requiere internet una vez.',
          },
          {
            title: 'Elige las carpetas que indexar',
            whyItMatters: 'Elige solo las carpetas que quieres poder buscar; el plan gratis cubre 1 carpeta y 2000 archivos.',
          },
          {
            title: 'Busca en lenguaje natural',
            whyItMatters: 'Describe el archivo o la foto que quieres y abre el resultado; revisa en Ajustes, en Datos y privacidad, las analíticas y los informes de fallos opcionales.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en encontrar archivos por significado.** Todo lo siguiente procede del sitio web y de la política de privacidad del fabricante.',
        ],
        items: [
          '**Búsqueda semántica de texto.** Lee el interior de más de 76 formatos, entre ellos PDF, Word, PowerPoint, Excel, EPUB, código fuente y correos, y busca por significado, no solo por palabras clave.',
          '**Búsqueda de imágenes.** Al escribir una descripción como "atardecer en la playa" encuentra fotos que coinciden, y un clic en una imagen encuentra otras parecidas.',
          '**Indexación en segundo plano.** La indexación se ejecuta con prioridad baja; la GPU es opcional en Windows. Según el fabricante, las búsquedas responden en menos de 100 milisegundos una vez creado el índice.',
          '**Control de carpetas.** Tú eliges qué carpetas se indexan; el índice se guarda en la carpeta de datos de la app de tu ordenador.',
          '**Varios PC.** Pro cubre hasta 3 PC y Lifetime hasta 2; Team añade puestos con una sola factura.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**PixaFind incluye sus propios modelos de IA, que se descargan desde Hugging Face en el primer inicio.** La web no los nombra, así que aquí no se documenta qué modelos se usan ni lo bien que buscan.',
          'Los requisitos indicados son 4 GB de RAM y unos 2 GB de espacio en disco, con los modelos ejecutándose en la CPU o, de forma opcional en Windows, en la GPU. PromptQuorum no reprodujo cifras de velocidad ni de precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que PixaFind busca en tus archivos en tu propio ordenador y que nunca sube tus archivos, tus fotos ni lo que contienen.** El índice permanece en la carpeta de datos de la app. La web añade que no se necesita ninguna clave de API.',
          'La política también enumera las conexiones que puede hacer la app: la descarga única de modelos desde Hugging Face, una comprobación de actualizaciones en GitHub (GitHub ve tu dirección IP) y la activación de la licencia o el inicio de sesión, que envía la clave de licencia, un hash unidireccional del identificador de la máquina y el sistema operativo. Los recuentos de uso (PostHog), las grabaciones de sesión enmascaradas (PostHog) y los informes de fallos (Sentry) vienen activados por defecto, se pueden desactivar en Ajustes, Datos y privacidad, y según la política no contienen texto de búsqueda ni contenido de archivos. La política se actualizó por última vez el 19 de noviembre de 2026.',
          'La app de escritorio es de código cerrado, así que nada de esto se puede comprobar en el código, y PromptQuorum no inspeccionó el tráfico de red. El plan gratis cubre 1 carpeta y 2000 archivos sin cuenta. Según el fabricante, Pro cuesta 12 USD al mes u 8 USD al mes con pago anual; Team cuesta 15 USD por puesto al mes o 12 USD con pago anual, con un mínimo de 3 puestos; Lifetime cuesta 249 USD una sola vez para una persona en hasta 2 PC.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Modelos en tu ordenador',
            'Qué significa en el uso real': 'La búsqueda puede funcionar sin internet una vez descargados los modelos, según el fabricante.',
            'Limitación / advertencia': 'La primera descarga necesita internet; PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            Ventaja: 'Búsqueda por significado',
            'Qué significa en el uso real': 'Describes un archivo o una foto en lugar de recordar su nombre.',
            'Limitación / advertencia': 'La calidad de la búsqueda no se probó aquí y los modelos no se nombran.',
          },
          {
            Ventaja: 'Plan gratis',
            'Qué significa en el uso real': 'Pruébalo con 1 carpeta y 2000 archivos, sin cuenta.',
            'Limitación / advertencia': 'Las bibliotecas más grandes necesitan Pro, Team o Lifetime.',
          },
          {
            Ventaja: 'Tres sistemas de escritorio',
            'Qué significa en el uso real': 'Hay versiones para Windows, Mac con Apple Silicon y Linux.',
            'Limitación / advertencia': 'La versión de Mac no está notarizada; sin Mac Intel y sin app móvil.',
          },
          {
            Ventaja: 'Analíticas desactivables',
            'Qué significa en el uso real': 'Los recuentos de uso y los informes de fallos se pueden desactivar en Ajustes.',
            'Limitación / advertencia': 'Activados por defecto; descarga de modelos y actualizaciones no se describen como desactivables.',
          },
          {
            Ventaja: 'Versiones recientes',
            'Qué significa en el uso real': 'La versión 0.7.40 salió el 21 de noviembre de 2026.',
            'Limitación / advertencia': 'Código cerrado y aún una versión 0.x, así que el historial es corto.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind frente a alternativas',
        content: [
          'Estas son las herramientas más cercanas del directorio: una que ordena archivos y también los busca, una que busca y chatea sobre archivos locales y una biblioteca de fotos con búsqueda local con IA.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'PixaFind',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Plan gratis, propietaria',
            Papel: 'Busca archivos y fotos por significado',
            'Diferencia clave': 'Solo buscador; plan gratis limitado a 1 carpeta',
          },
          {
            App: '[StratoSort](/es/power-local-llm/stratosort-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis no comercial, PolyForm NC',
            Papel: 'Ordena, busca y chatea con archivos',
            'Diferencia clave': 'También renombra y ordena; código disponible',
          },
          {
            App: '[Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Gratis, propietaria',
            Papel: 'Búsqueda y chat con archivos locales',
            'Diferencia clave': 'Responde preguntas desde archivos; código cerrado',
          },
          {
            App: '[PixlStash](/es/power-local-llm/pixlstash-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            Papel: 'Biblioteca de imágenes con búsqueda local con IA',
            'Diferencia clave': 'Solo fotos; etiquetado y búsqueda de caras',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar PixaFind',
        items: [
          '**Quien no encuentra archivos por su nombre.** Describe un documento o una foto en su lugar.',
          '**Usuarios de escritorio atentos a la privacidad.** Los modelos y el índice permanecen en el ordenador, según el fabricante, y hay un plan gratis para probar.',
          '**Usuarios de Windows en primer lugar.** La opción de GPU y la descripción del repositorio se centran en Windows.',
          '**Quien tiene carpetas mezcladas.** Documentos, fotos y código se buscan en un solo lugar.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar PixaFind',
        items: [
          '**Quien necesite código abierto.** La app de escritorio es de código cerrado.',
          '**Quien quiera un chat o un organizador de archivos.** PixaFind encuentra archivos; no chatea ni reorganiza.',
          '**Usuarios de Mac Intel y de móvil.** Solo cubre Mac con Apple Silicon y ordenadores de escritorio.',
          '**Quien necesite cero uso de red.** Las analíticas y los informes de fallos vienen activados por defecto y hay que desactivarlos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona PixaFind sin conexión?',
            a: 'La web dice que sí una vez descargados los modelos de IA. El primer inicio necesita internet para la descarga, y las comprobaciones de actualizaciones y el inicio de sesión de la licencia también usan la red. PromptQuorum no lo probó sin conexión.',
          },
          {
            q: '¿Es gratis PixaFind?',
            a: 'Hay un plan gratis para 1 carpeta y 2000 archivos sin cuenta. Según la página de precios del fabricante, Pro cuesta 12 USD al mes u 8 USD al mes con pago anual, y una licencia Lifetime de 249 USD es un pago único.',
          },
          {
            q: '¿Envía PixaFind mis archivos a la nube?',
            a: 'La política de privacidad dice que nunca sube tus archivos, tus fotos ni lo que contienen. Menciona recuentos de uso, grabaciones de sesión enmascaradas e informes de fallos activados por defecto que se pueden desactivar en Ajustes. La app es de código cerrado, así que PromptQuorum no pudo verificarlo.',
          },
          {
            q: '¿Funciona en Mac y Linux?',
            a: 'Sí: existen una versión para Mac con Apple Silicon (según la nota de descarga del fabricante, aún sin notarizar por Apple) y versiones AppImage y .deb para Linux, junto al instalador de Windows.',
          },
          {
            q: '¿Quién hace PixaFind?',
            a: 'La web dice que lo crea PixaLabs. Las páginas que leyó PromptQuorum no indican dirección de la empresa ni país.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'PixaFind encaja bien si quieres encontrar documentos, fotos y código en un ordenador con Windows, Mac o Linux describiéndolos, con modelos que, según el fabricante, se ejecutan en el equipo, y un plan gratis para probarlo. Publicó una versión el 21 de noviembre de 2026.',
          'Las salvedades son el código cerrado, unas analíticas activadas por defecto que hay que desactivar, una versión de Mac sin notarizar, una versión 0.x joven y afirmaciones que PromptQuorum no pudo comprobar. Prueba el plan gratis con una carpeta antes de indexar tu archivo completo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de PixaFind](https://pixafind.com/) — funciones, plataformas, precios y preguntas frecuentes.',
          '[Política de privacidad](https://pixafind.com/privacy/) — tratamiento de datos, actualizada por última vez el 19 de noviembre de 2026.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — archivos de instalación y fecha de la versión 0.7.40.',
          '[Página de contacto](https://pixafind.com/contact/) — datos de contacto del fabricante.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de StratoSort](/es/power-local-llm/stratosort-review) — una app que ordena archivos por contenido y añade búsqueda y chat.',
          '[Reseña de Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review) — búsqueda y chat con archivos locales para Mac y Windows.',
          '[Reseña de PixlStash](/es/power-local-llm/pixlstash-review) — una biblioteca de imágenes con búsqueda local con IA.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-pt.webp',
    title: 'Análise do PixaFind: busca com IA local para seus arquivos e fotos',
    seoTitle: 'Análise do PixaFind: busque arquivos e fotos pelo significado',
    intro: 'O PixaFind é um app de desktop que encontra documentos, fotos e código pelo que significam, e não pelo nome, usando modelos de IA que, segundo o site, rodam no seu próprio computador. Você digita algo como "pôr do sol na praia" ou "o contrato com a cláusula de aviso prévio de 90 dias" e ele devolve os arquivos correspondentes. Esta análise cobre as versões para Windows, Mac e Linux, preços, privacidade, limites e alternativas; o PromptQuorum leu as páginas do fabricante e a página de versões, mas não testou o app.',
    metaDescription: 'Análise do PixaFind: busca de arquivos e fotos pelo significado para Windows, Mac e Linux, com modelos no seu PC segundo o fabricante. Plano grátis, preços, privacidade.',
    twitterDescription: 'Análise do PixaFind: encontre arquivos e fotos descrevendo-os. Busca com IA local para Windows, Mac e Linux. Plano grátis, preços, privacidade, limites e alternativas.',
    audience: 'Pessoas com muitas pastas de documentos, fotos e código que querem encontrar arquivos descrevendo-os, sem enviá-los a um serviço na nuvem — cobre instalação, preços, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'análise pixafind',
      'pixafind busca de arquivos com ia',
      'busca semântica de arquivos windows',
      'busca de fotos com ia local',
      'buscar arquivos pelo significado offline',
      'busca desktop com ia windows mac linux',
      'app de busca de arquivos privado',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**O PixaFind é um app de desktop para Windows, Mac e Linux que encontra documentos, fotos e código pelo significado, com modelos de IA que, segundo o fabricante, rodam no seu computador e mantêm seus arquivos e o índice nele.** Ele tem um plano grátis de 1 pasta e 2.000 arquivos e planos pagos Pro, Team e Lifetime. A primeira abertura baixa os modelos, o fabricante lista análises de uso e relatórios de falhas como ativados por padrão, mas desativáveis, e o PromptQuorum não testou o app.',
    quickAnswerTop: {
      pt: {
        question: 'O PixaFind é um app de busca de arquivos com IA local?',
        answer: 'Segundo o fabricante, sim: o site diz que os modelos de IA rodam no seu hardware e que seus arquivos e buscas nunca saem da sua máquina, e a política de privacidade diz que o índice fica armazenado no computador. Os modelos são baixados uma vez do Hugging Face. A política também lista contagens de uso, gravações de sessão mascaradas e relatórios de falhas que vêm ativados por padrão e podem ser desativados em Configurações.',
        bullets: [
          'Ele busca pelo significado em mais de 76 formatos de arquivo, incluindo PDF, Word, PowerPoint, Excel, EPUB, código-fonte, e-mails e imagens.',
          'Grátis: 1 pasta e 2.000 arquivos, sem conta. Segundo a página de preços do fabricante, o Pro custa US$ 12 por mês (US$ 8 por mês no plano anual); o Lifetime custa US$ 249 uma única vez.',
          'Há versões para Windows 10 ou superior, Mac com Apple Silicon (segundo a nota de download do fabricante, ainda sem notarização da Apple) e Linux; o requisito informado é 4 GB de RAM e cerca de 2 GB de disco.',
          'O app de desktop é de código fechado, então as alegações de privacidade não podem ser verificadas no código.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o PixaFind', anchor: 'get-it' },
      { label: 'PixaFind em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o PixaFind', anchor: 'what-is-pixafind' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'PixaFind e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o PixaFind serve', anchor: 'who-should-use' },
      { label: 'Para quem o PixaFind não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O PixaFind é um app de desktop que indexa as pastas que você escolhe e depois encontra documentos, fotos e código a partir de uma descrição em linguagem natural, com modelos de IA que rodam no seu próprio computador, segundo o fabricante.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma caixa de busca que entende o que você quer dizer: "fotos da praia ao pôr do sol" encontra as imagens mesmo que se chamem IMG_4821.',
          },
        ],
        items: [
          'Alegação de execução local: os modelos e o índice ficam no computador; o download dos modelos, as verificações de atualização, o login da licença e, a menos que sejam desativados, as análises de uso e os relatórios de falhas usam a internet.',
          'Fabricante: PixaLabs; nenhum endereço de empresa nem país é informado nas páginas que o PromptQuorum leu.',
          'Manutenção: a versão 0.7.40 foi lançada em 21 de novembro de 2026, o que indica desenvolvimento recente, mas ainda é uma versão 0.x.',
          'Custo: grátis para 1 pasta e 2.000 arquivos; segundo o fabricante, Pro, Team e um plano Lifetime de US$ 249 eliminam os limites.',
          'Lacunas: código fechado, nenhum teste prático do PromptQuorum, uma versão para Mac sem notarização e nenhum app para celular.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'Obter o PixaFind',
        content: [
          '**O PixaFind se instala como qualquer app de desktop, então não é preciso usar o terminal no Windows nem no Linux.** Baixe o instalador do seu sistema no site oficial; os modelos de IA são baixados dentro do app na primeira abertura.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://pixafind.com/download/win/) — Windows 10 ou superior, instalador',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 ou mais novo); sem notarização, veja a nota do site',
          },
          {
            Plataforma: 'Linux',
            'Onde obter': '[Baixar o AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) ou o [pacote .deb](https://pixafind.com/download/linux_deb/) para Ubuntu e Debian',
          },
          {
            Plataforma: 'Página de versões',
            'Onde obter': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — instaladores, datas de lançamento e o manifesto de atualização',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[pixafind.com](https://pixafind.com/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do PixaFind](https://pixafind.com/privacy/)',
          },
        ],
        note: 'O repositório do GitHub hospeda apenas os instaladores das versões; segundo o site, o app de desktop é de código fechado.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind em resumo',
        columns: ['Atributo', 'PixaFind'],
        rows: [
          { Atributo: 'Plataforma', PixaFind: 'Windows 10+, Mac com Apple Silicon, desktop Linux' },
          { Atributo: 'Preço', PixaFind: 'Plano grátis; Pro a partir de US$ 8 por mês; Lifetime US$ 249' },
          { Atributo: 'Licença', PixaFind: 'Proprietária, código fechado' },
          { Atributo: 'Execução', PixaFind: 'No seu computador, segundo o fabricante; o download dos modelos exige internet' },
          { Atributo: 'Memória', PixaFind: '4 GB de RAM e cerca de 2 GB de disco; GPU opcional no Windows' },
          { Atributo: 'Tipos de entrada', PixaFind: 'Mais de 76 formatos: documentos, código, e-mails, imagens' },
          { Atributo: 'Limite grátis', PixaFind: '1 pasta e 2.000 arquivos, sem conta' },
          { Atributo: 'Fabricante', PixaFind: 'PixaLabs' },
        ],
        note: 'Uma informação ausente no site do fabricante significa desconhecido, não sem suporte. Os preços são os de tabela do fabricante, em dólares americanos; confira a página de preços dele antes de comprar.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'O que é o PixaFind',
        content: [
          '**O PixaFind é um app de busca que lê o que há dentro dos seus arquivos, e não apenas os nomes.** Você escolhe as pastas a indexar, o app monta um índice em segundo plano com baixa prioridade, e uma caixa de busca devolve documentos, fotos e código que correspondem ao que você descreve. Clicar em uma imagem também pode encontrar imagens semelhantes.',
          'Ele não conversa com seus arquivos nem os reorganiza: é um localizador. Se você quer uma pasta organizada e renomeada, ou um chat sobre seus documentos, veja as alternativas abaixo.',
          'Esta análise se baseia no site, na política de privacidade e na página de versões do GitHub. O PromptQuorum não instalou nem testou o PixaFind, então a qualidade da busca, a velocidade e a alegação de resultados em menos de 100 milissegundos depois da indexação são declarações do fabricante.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração consiste em instalar, baixar os modelos e escolher as pastas.** Os passos seguem o site e a política de privacidade.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o instalador do seu sistema na tabela Obter o PixaFind acima; no Mac, siga o passo único descrito no site, porque a versão não tem notarização. Um app sem notarização não passou na verificação automática de malware da Apple, então instale-o apenas se confiar na fonte.',
          },
          {
            title: 'Deixe os modelos baixarem',
            whyItMatters: 'Na primeira abertura, o app baixa seus modelos de IA do Hugging Face, cerca de 2 GB de espaço em disco, o que exige internet uma vez.',
          },
          {
            title: 'Escolha as pastas a indexar',
            whyItMatters: 'Selecione apenas as pastas que você quer pesquisáveis; o plano grátis cobre 1 pasta e 2.000 arquivos.',
          },
          {
            title: 'Pesquise em linguagem natural',
            whyItMatters: 'Descreva o arquivo ou a foto que você quer e abra o resultado; confira em Configurações, em Dados e privacidade, as análises de uso e os relatórios de falhas opcionais.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de encontrar arquivos pelo significado.** Tudo abaixo vem do site e da política de privacidade do fabricante.',
        ],
        items: [
          '**Busca semântica de texto.** Ele lê dentro de mais de 76 formatos, incluindo PDF, Word, PowerPoint, Excel, EPUB, código-fonte e e-mails, e encontra pelo significado, não só por palavras-chave.',
          '**Busca de imagens.** Digitar uma descrição como "pôr do sol na praia" encontra fotos correspondentes, e um clique em uma imagem encontra imagens semelhantes.',
          '**Indexação em segundo plano.** A indexação roda com baixa prioridade; uma GPU é opcional no Windows. Segundo o fabricante, as buscas respondem em menos de 100 milissegundos depois que o índice é criado.',
          '**Controle das pastas.** Você escolhe quais pastas são indexadas; o índice fica armazenado na pasta de dados do app no seu computador.',
          '**Vários PCs.** O Pro cobre até 3 PCs e o Lifetime até 2; o Team adiciona usuários com uma única fatura.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O PixaFind traz seus próprios modelos de IA, baixados do Hugging Face na primeira abertura.** O site não os nomeia, então quais modelos são usados e a qualidade da busca não estão documentados aqui.',
          'Os requisitos informados são 4 GB de RAM e cerca de 2 GB de espaço em disco, com os modelos rodando na CPU ou, opcionalmente no Windows, na GPU. O PromptQuorum não reproduziu números de velocidade nem de precisão.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o PixaFind pesquisa seus arquivos no seu próprio computador e nunca envia seus arquivos, fotos nem o que há dentro deles.** O índice fica na pasta de dados do app. O site acrescenta que nenhuma chave de API é necessária.',
          'A política também lista as conexões que o app pode fazer: o download único dos modelos do Hugging Face, uma verificação de atualização no GitHub (o GitHub vê o seu endereço IP) e a ativação da licença ou o login, que envia a chave da licença, um hash unidirecional do ID da máquina e o sistema operacional. Contagens de uso (PostHog), gravações de sessão mascaradas (PostHog) e relatórios de falhas (Sentry) vêm ativados por padrão, podem ser desativados em Configurações, em Dados e privacidade, e, segundo a política, não contêm texto de busca nem conteúdo de arquivos. A política foi atualizada pela última vez em 19 de novembro de 2026.',
          'O app de desktop é de código fechado, então nada disso pode ser verificado no código, e o PromptQuorum não inspecionou o tráfego de rede. O plano grátis cobre 1 pasta e 2.000 arquivos, sem conta. Segundo o fabricante, o Pro custa US$ 12 por mês ou US$ 8 por mês no plano anual; o Team custa US$ 15 por usuário por mês ou US$ 12 no plano anual, com mínimo de 3 usuários; o Lifetime custa US$ 249 uma única vez para uma pessoa em até 2 PCs.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Modelos no seu computador',
            'O que significa na prática': 'A busca pode rodar sem internet depois que os modelos são baixados, segundo o fabricante.',
            'Limitação / ressalva': 'O primeiro download exige internet; o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            Vantagem: 'Busca pelo significado',
            'O que significa na prática': 'Descreva um arquivo ou uma foto em vez de lembrar o nome.',
            'Limitação / ressalva': 'A qualidade da busca não foi testada aqui e os modelos não são nomeados.',
          },
          {
            Vantagem: 'Plano grátis',
            'O que significa na prática': 'Experimente com 1 pasta e 2.000 arquivos, sem conta.',
            'Limitação / ressalva': 'Bibliotecas maiores exigem Pro, Team ou Lifetime.',
          },
          {
            Vantagem: 'Três sistemas de desktop',
            'O que significa na prática': 'Há versões para Windows, Mac com Apple Silicon e Linux.',
            'Limitação / ressalva': 'A versão para Mac não tem notarização; sem Mac Intel e sem app para celular.',
          },
          {
            Vantagem: 'Análises desativáveis',
            'O que significa na prática': 'As contagens de uso e os relatórios de falhas podem ser desativados em Configurações.',
            'Limitação / ressalva': 'Ativados por padrão; download dos modelos e verificação de atualização não são descritos como desativáveis.',
          },
          {
            Vantagem: 'Lançamentos recentes',
            'O que significa na prática': 'A versão 0.7.40 foi lançada em 21 de novembro de 2026.',
            'Limitação / ressalva': 'Código fechado e ainda uma versão 0.x, então o histórico é curto.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind e as alternativas',
        content: [
          'Estas são as ferramentas mais próximas do diretório: uma que organiza arquivos e também os pesquisa, uma que pesquisa e conversa sobre arquivos locais e uma biblioteca de fotos com busca por IA local.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'PixaFind',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Plano grátis, proprietário',
            Função: 'Busca arquivos e fotos pelo significado',
            'Diferença principal': 'Só localiza; plano grátis limitado a 1 pasta',
          },
          {
            App: '[StratoSort](/pt/power-local-llm/stratosort-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis não comercial, PolyForm NC',
            Função: 'Organização, busca e chat de arquivos',
            'Diferença principal': 'Também renomeia e organiza; código disponível',
          },
          {
            App: '[Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Grátis, proprietário',
            Função: 'Busca e chat com arquivos locais',
            'Diferença principal': 'Responde perguntas a partir dos arquivos; código fechado',
          },
          {
            App: '[PixlStash](/pt/power-local-llm/pixlstash-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            Função: 'Biblioteca de imagens com busca por IA local',
            'Diferença principal': 'Só fotos; marcação e busca por rostos',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o PixaFind serve',
        items: [
          '**Quem não consegue achar arquivos pelo nome.** Descreva um documento ou uma foto em vez disso.',
          '**Usuários de desktop atentos à privacidade.** Os modelos e o índice ficam no computador, segundo o fabricante, com um plano grátis para experimentar.',
          '**Usuários de Windows em primeiro lugar.** A opção de GPU e a descrição do repositório têm foco no Windows.',
          '**Quem tem pastas variadas.** Documentos, fotos e código são pesquisados em um só lugar.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o PixaFind não serve',
        items: [
          '**Quem precisa de código aberto.** O app de desktop é de código fechado.',
          '**Quem quer um chat ou um organizador de arquivos.** O PixaFind encontra arquivos; não conversa nem reorganiza.',
          '**Usuários de Mac Intel e de celular.** Só há suporte para Macs com Apple Silicon e computadores de mesa.',
          '**Quem precisa de zero uso de rede.** As análises de uso e os relatórios de falhas vêm ativados por padrão e precisam ser desativados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PixaFind funciona offline?',
            a: 'O site diz que sim, depois que os modelos de IA forem baixados. A primeira abertura exige internet para o download, e as verificações de atualização e o login da licença também usam a rede. O PromptQuorum não testou offline.',
          },
          {
            q: 'O PixaFind é grátis?',
            a: 'Há um plano grátis para 1 pasta e 2.000 arquivos, sem conta. Segundo a página de preços do fabricante, o Pro custa US$ 12 por mês ou US$ 8 por mês no plano anual, e a licença Lifetime de US$ 249 é um pagamento único.',
          },
          {
            q: 'O PixaFind envia meus arquivos para a nuvem?',
            a: 'A política de privacidade diz que ele nunca envia seus arquivos, fotos nem o que há dentro deles. Ela lista contagens de uso, gravações de sessão mascaradas e relatórios de falhas ativados por padrão que podem ser desativados em Configurações. O app é de código fechado, então o PromptQuorum não pôde verificar isso.',
          },
          {
            q: 'Ele roda no Mac e no Linux?',
            a: 'Sim: há uma versão para Mac com Apple Silicon (segundo a nota de download do fabricante, ainda sem notarização da Apple) e versões AppImage e .deb para Linux, ao lado do instalador para Windows.',
          },
          {
            q: 'Quem faz o PixaFind?',
            a: 'O site diz que ele é feito pela PixaLabs. As páginas que o PromptQuorum leu não informam endereço da empresa nem país.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O PixaFind é uma boa opção se você quer encontrar documentos, fotos e código em um computador com Windows, Mac ou Linux descrevendo-os, com modelos que, segundo o fabricante, rodam na máquina, e um plano grátis para experimentar. Ele lançou uma versão em 21 de novembro de 2026.',
          'As ressalvas são o código fechado, as análises de uso ativadas por padrão que precisam ser desativadas, uma versão para Mac sem notarização, uma versão 0.x ainda jovem e alegações que o PromptQuorum não pôde verificar. Teste o plano grátis em uma pasta antes de indexar o seu arquivo inteiro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do PixaFind](https://pixafind.com/) — recursos, plataformas, preços e perguntas frequentes.',
          '[Política de privacidade](https://pixafind.com/privacy/) — tratamento de dados, atualizada pela última vez em 19 de novembro de 2026.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — arquivos de instalação e data de lançamento da versão 0.7.40.',
          '[Página de contato](https://pixafind.com/contact/) — dados de contato do fabricante.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do StratoSort](/pt/power-local-llm/stratosort-review) — um app que organiza arquivos pelo conteúdo e acrescenta busca e chat.',
          '[Análise do Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review) — busca e chat com arquivos locais para Mac e Windows.',
          '[Análise do PixlStash](/pt/power-local-llm/pixlstash-review) — uma biblioteca de imagens com busca por IA local.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-ar.webp',
    title: 'مراجعة PixaFind: بحث بالذكاء الاصطناعي المحلي في ملفاتك وصورك',
    seoTitle: 'مراجعة PixaFind: ابحث في الملفات والصور بحسب المعنى',
    intro: 'PixaFind تطبيق مكتبي يعثر على المستندات والصور والشيفرة بحسب معناها لا بحسب أسمائها، مستخدمًا نماذج ذكاء اصطناعي تعمل بحسب موقعه على حاسوبك. تكتب عبارة مثل «غروب الشمس على الشاطئ» أو «العقد الذي فيه بند الإخطار لمدة 90 يومًا» فيعيد لك الملفات المطابقة. تغطي هذه المراجعة نسخ Windows وMac وLinux والأسعار والخصوصية والقيود والبدائل؛ وقد قرأت PromptQuorum صفحات المطوّر وصفحة الإصدارات لكنها لم تختبر التطبيق.',
    metaDescription: 'مراجعة PixaFind: بحث بالذكاء الاصطناعي في الملفات والصور بحسب المعنى لأنظمة Windows وMac وLinux، والنماذج على حاسوبك بحسب المطوّر. نسخة مجانية والأسعار والخصوصية.',
    twitterDescription: 'مراجعة PixaFind: اعثر على الملفات والصور بوصفها. بحث محلي بالذكاء الاصطناعي لأنظمة Windows وMac وLinux. نسخة مجانية والأسعار والخصوصية والقيود والبدائل.',
    audience: 'أصحاب المجلدات الكبيرة من المستندات والصور والشيفرة الذين يريدون العثور على الملفات بوصفها دون رفعها إلى خدمة سحابية — يغطي التثبيت والأسعار والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'مراجعة pixafind',
      'pixafind بحث ملفات بالذكاء الاصطناعي',
      'بحث دلالي في الملفات windows',
      'بحث محلي في الصور بالذكاء الاصطناعي',
      'البحث في الملفات بحسب المعنى دون اتصال',
      'بحث مكتبي بالذكاء الاصطناعي windows mac linux',
      'تطبيق بحث خاص في الملفات',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFind تطبيق مكتبي لأنظمة Windows وMac وLinux يعثر على المستندات والصور والشيفرة بحسب المعنى، بنماذج ذكاء اصطناعي تعمل بحسب المطوّر على حاسوبك وتُبقي ملفاتك وفهرسها عليه.** فيه نسخة مجانية لمجلد واحد و2,000 ملف، وخطط مدفوعة هي Pro وTeam وLifetime. ينزّل أول تشغيل النماذج، ويذكر المطوّر أن التحليلات وتقارير الأعطال مفعّلة افتراضيًا لكن يمكن إيقافها، ولم تختبر PromptQuorum التطبيق.',
    quickAnswerTop: {
      ar: {
        question: 'هل PixaFind تطبيق بحث في الملفات بالذكاء الاصطناعي المحلي؟',
        answer: 'بحسب المطوّر نعم: يقول الموقع إن نماذج الذكاء الاصطناعي تعمل على عتادك وإن ملفاتك وعمليات بحثك لا تغادر جهازك، وتقول سياسة الخصوصية إن الفهرس مخزَّن على الحاسوب. تُنزَّل النماذج مرة واحدة من Hugging Face. وتسرد السياسة أيضًا عدّادات استخدام وتسجيلات جلسات مموّهة وتقارير أعطال مفعّلة افتراضيًا ويمكن إيقافها من الإعدادات.',
        bullets: [
          'يبحث بحسب المعنى في أكثر من 76 صيغة ملف، منها PDF وWord وPowerPoint وExcel وEPUB والشيفرة المصدرية ورسائل البريد والصور.',
          'مجاني: مجلد واحد و2,000 ملف دون حساب. بحسب صفحة الأسعار لدى المطوّر، اشتراك Pro بسعر 12 دولارًا شهريًا (8 دولارات شهريًا عند الدفع سنويًا)؛ وLifetime بسعر 249 دولارًا مرة واحدة.',
          'تتوفر نسخ لنظام Windows 10 أو أحدث ولأجهزة Mac بمعالج Apple Silicon (بحسب ملاحظة صفحة التنزيل لدى المطوّر، غير موثّقة بعد من Apple) ولنظام Linux؛ والمتطلبات المعلنة 4 GB من الذاكرة RAM ونحو 2 GB من القرص.',
          'التطبيق المكتبي مغلق المصدر، فلا يمكن التحقق من ادعاءات الخصوصية في الشيفرة.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على PixaFind', anchor: 'get-it' },
      { label: 'PixaFind في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو PixaFind', anchor: 'what-is-pixafind' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'PixaFind مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب PixaFind', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب PixaFind', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFind تطبيق مكتبي يفهرس المجلدات التي تختارها ثم يعثر على المستندات والصور والشيفرة انطلاقًا من وصف بلغة عادية، بنماذج ذكاء اصطناعي تعمل على حاسوبك بحسب المطوّر.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل مربع بحث يفهم ما تقصده، فيجد عبارة «صور الشاطئ عند الغروب» الصورَ حتى لو كان اسمها IMG_4821.',
          },
        ],
        items: [
          'الادعاء المحلي: تبقى النماذج والفهرس على الحاسوب؛ أما تنزيل النماذج وفحص التحديثات وتسجيل دخول الترخيص، والتحليلات وتقارير الأعطال ما لم تُوقف، فتستخدم الإنترنت.',
          'المطوّر: PixaLabs؛ ولا يذكر أي عنوان شركة أو دولة في الصفحات التي قرأتها PromptQuorum.',
          'الصيانة: صدر الإصدار 0.7.40 في 21 نوفمبر 2026، ما يدل على تطوير حديث، لكنه ما زال إصدارًا من سلسلة 0.x.',
          'التكلفة: مجاني لمجلد واحد و2,000 ملف؛ وبحسب المطوّر تزيل خطط Pro وTeam وLifetime (249 دولارًا) هذه الحدود.',
          'الثغرات: مغلق المصدر، ولا اختبار عملي من PromptQuorum، ونسخة Mac غير موثّقة، ولا تطبيق للجوال.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'الحصول على PixaFind',
        content: [
          '**يُثبَّت PixaFind مثل أي تطبيق مكتبي، فلا حاجة إلى الطرفية على Windows أو Linux.** نزّل المثبّت المناسب لنظامك من الموقع الرسمي؛ وتُنزَّل نماذج الذكاء الاصطناعي داخل التطبيق عند أول تشغيل.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://pixafind.com/download/win/) — Windows 10 أو أحدث، مثبّت',
          },
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://pixafind.com/download/mac/) — Apple Silicon (M1 أو أحدث)؛ غير موثّق، راجع ملاحظة الموقع',
          },
          {
            'المنصة': 'Linux',
            'مصدر الحصول': '[تنزيل AppImage](https://pixafind.com/download/linux_appimage/) (x86_64) أو [حزمة .deb](https://pixafind.com/download/linux_deb/) لنظامي Ubuntu وDebian',
          },
          {
            'المنصة': 'صفحة الإصدارات',
            'مصدر الحصول': '[إصدارات GitHub](https://github.com/Ishannaik/pixafind-releases/releases) — المثبّتات وتواريخ الإصدار وملف التحديث',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[pixafind.com](https://pixafind.com/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية PixaFind](https://pixafind.com/privacy/)',
          },
        ],
        note: 'يستضيف مستودع GitHub مثبّتات الإصدارات فقط؛ والتطبيق المكتبي مغلق المصدر بحسب الموقع.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind في لمحة',
        columns: ['الخاصية', 'PixaFind'],
        rows: [
          { 'الخاصية': 'المنصة', 'PixaFind': 'سطح مكتب Windows 10+ وMac بمعالج Apple Silicon وLinux' },
          { 'الخاصية': 'السعر', 'PixaFind': 'نسخة مجانية؛ Pro من 8 دولارات شهريًا؛ Lifetime بـ 249 دولارًا' },
          { 'الخاصية': 'الرخصة', 'PixaFind': 'مملوك، مغلق المصدر' },
          { 'الخاصية': 'التشغيل', 'PixaFind': 'على حاسوبك بحسب المطوّر؛ تنزيل النماذج يحتاج إنترنت' },
          { 'الخاصية': 'الذاكرة', 'PixaFind': '4 GB RAM ونحو 2 GB قرص؛ وحدة GPU اختيارية على Windows' },
          { 'الخاصية': 'أنواع المدخلات', 'PixaFind': 'أكثر من 76 صيغة: مستندات وشيفرة ورسائل وصور' },
          { 'الخاصية': 'حد النسخة المجانية', 'PixaFind': 'مجلد واحد و2,000 ملف دون حساب' },
          { 'الخاصية': 'المطوّر', 'PixaFind': 'PixaLabs' },
        ],
        note: 'غياب الذكر في موقع المطوّر يعني غير معروف، لا غير مدعوم. الأسعار هي أسعار القائمة لدى المطوّر بالدولار الأمريكي؛ تحقق من صفحة أسعاره قبل الشراء.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'ما هو PixaFind',
        content: [
          '**PixaFind تطبيق بحث يقرأ ما بداخل ملفاتك، لا أسماءها فقط.** تختار المجلدات التي تُفهرس، فيبني التطبيق الفهرس في الخلفية بأولوية منخفضة، ثم يعيد مربع البحث المستندات والصور والشيفرة المطابقة لما تصفه. والنقر على صورة يمكنه أيضًا إيجاد صور مشابهة.',
          'لا يحاور ملفاتك ولا يعيد ترتيبها: إنه أداة بحث فقط. وإن أردت ترتيب مجلد وإعادة تسمية ملفاته، أو محادثة مع مستنداتك، فراجع البدائل أدناه.',
          'تعتمد هذه المراجعة على الموقع وسياسة الخصوصية وصفحة الإصدارات على GitHub. ولم تثبّت PromptQuorum تطبيق PixaFind ولم تختبره، لذا فجودة البحث والسرعة والادعاء بنتائج في أقل من 100 ميلي ثانية بعد الفهرسة هي أقوال المطوّر.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل نماذج واختيار مجلدات.** تتبع الخطوات الموقع وسياسة الخصوصية.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل المثبّت المناسب لنظامك من جدول «الحصول على PixaFind» أعلاه؛ وعلى Mac اتبع الخطوة الوحيدة التي يصفها الموقع لأن النسخة غير موثّقة. التطبيق غير الموثّق لم يجتز فحص البرمجيات الخبيثة الآلي من Apple، لذا لا تثبّته إلا إذا كنت تثق بالمصدر.',
          },
          {
            title: 'دع النماذج تُنزَّل',
            whyItMatters: 'عند أول تشغيل ينزّل التطبيق نماذج الذكاء الاصطناعي من Hugging Face، بنحو 2 GB من مساحة القرص، وهذا يحتاج إنترنت مرة واحدة.',
          },
          {
            title: 'اختر المجلدات التي تُفهرس',
            whyItMatters: 'اختر فقط المجلدات التي تريدها قابلة للبحث؛ وتغطي النسخة المجانية مجلدًا واحدًا و2,000 ملف.',
          },
          {
            title: 'ابحث بلغة عادية',
            whyItMatters: 'صف الملف أو الصورة التي تريدها وافتح النتيجة؛ وراجع الإعدادات ضمن «البيانات والخصوصية» لمعاينة التحليلات وتقارير الأعطال الاختيارية.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول العثور على الملفات بحسب المعنى.** كل ما يلي مصدره موقع المطوّر وسياسة الخصوصية.',
        ],
        items: [
          '**بحث دلالي في النصوص.** يقرأ داخل أكثر من 76 صيغة، منها PDF وWord وPowerPoint وExcel وEPUB والشيفرة المصدرية ورسائل البريد، ويطابق المعنى لا الكلمات المفتاحية فقط.',
          '**بحث في الصور.** كتابة وصف مثل «غروب الشمس على الشاطئ» تعثر على الصور المطابقة، والنقر على صورة يعثر على صور مشابهة.',
          '**فهرسة في الخلفية.** تعمل الفهرسة بأولوية منخفضة؛ ووحدة GPU اختيارية على Windows. وبحسب المطوّر تعود نتائج البحث في أقل من 100 ميلي ثانية بعد بناء الفهرس.',
          '**التحكم في المجلدات.** أنت تختار المجلدات التي تُفهرس؛ ويُخزَّن الفهرس في مجلد بيانات التطبيق على حاسوبك.',
          '**عدة حواسيب.** تغطي Pro حتى 3 حواسيب وLifetime حتى حاسوبين؛ وتضيف Team مقاعد بفاتورة واحدة.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يأتي PixaFind بنماذج ذكاء اصطناعي خاصة به تُنزَّل من Hugging Face عند أول تشغيل.** لا يسمّيها الموقع، لذا لا يوثّق هنا أي النماذج تُستخدم ومدى جودة بحثها.',
          'المتطلبات المعلنة 4 GB من الذاكرة RAM ونحو 2 GB من مساحة القرص، وتعمل النماذج على المعالج CPU أو، اختياريًا على Windows، على وحدة GPU. ولم تعِد PromptQuorum إنتاج أي أرقام للسرعة أو الدقة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن PixaFind يبحث في ملفاتك على حاسوبك ولا يرفع ملفاتك أو صورك أو ما بداخلها أبدًا.** ويبقى الفهرس في مجلد بيانات التطبيق. ويضيف الموقع أنه لا حاجة إلى مفتاح API.',
          'وتسرد السياسة أيضًا الاتصالات التي يمكن للتطبيق إجراؤها: تنزيل النماذج لمرة واحدة من Hugging Face، وفحص التحديثات على GitHub (ويرى GitHub عنوان IP الخاص بك)، وتفعيل الترخيص أو تسجيل الدخول الذي يرسل مفتاح الترخيص وبصمة أحادية الاتجاه لمعرّف الجهاز ونظام التشغيل. أما عدّادات الاستخدام (PostHog) وتسجيلات الجلسات المموّهة (PostHog) وتقارير الأعطال (Sentry) فمفعّلة افتراضيًا ويمكن إيقافها من الإعدادات ثم «البيانات والخصوصية»، وبحسب السياسة لا تتضمن نص البحث ولا محتوى الملفات. وآخر تحديث للسياسة في 19 نوفمبر 2026.',
          'التطبيق المكتبي مغلق المصدر، فلا يمكن التحقق من أي من ذلك في الشيفرة، ولم تفحص PromptQuorum حركة الشبكة. النسخة المجانية تغطي مجلدًا واحدًا و2,000 ملف دون حساب. بحسب المطوّر، تكلفة Pro هي 12 دولارًا شهريًا أو 8 دولارات شهريًا عند الدفع سنويًا؛ وTeam بسعر 15 دولارًا للمقعد شهريًا أو 12 دولارًا عند الدفع سنويًا بحد أدنى 3 مقاعد؛ وLifetime بسعر 249 دولارًا مرة واحدة لشخص واحد على حاسوبين كحد أقصى.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: [
          'الميزة',
          'ما تعنيه في الاستخدام الفعلي',
          'القيد / التنبيه',
        ],
        rows: [
          {
            'الميزة': 'نماذج على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن أن يعمل البحث دون إنترنت بعد تنزيل النماذج، بحسب المطوّر.',
            'القيد / التنبيه': 'التنزيل الأول يحتاج إنترنت؛ ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            'الميزة': 'بحث بحسب المعنى',
            'ما تعنيه في الاستخدام الفعلي': 'صف ملفًا أو صورة بدل أن تتذكر اسمه.',
            'القيد / التنبيه': 'لم تُختبر جودة البحث هنا، والنماذج غير مسمّاة.',
          },
          {
            'الميزة': 'نسخة مجانية',
            'ما تعنيه في الاستخدام الفعلي': 'جرّبه على مجلد واحد و2,000 ملف دون حساب.',
            'القيد / التنبيه': 'المكتبات الأكبر تحتاج Pro أو Team أو Lifetime.',
          },
          {
            'الميزة': 'ثلاثة أنظمة مكتبية',
            'ما تعنيه في الاستخدام الفعلي': 'تتوفر نسخ لأنظمة Windows وMac بمعالج Apple Silicon وLinux.',
            'القيد / التنبيه': 'نسخة Mac غير موثّقة؛ ولا Mac بمعالج Intel ولا تطبيق للجوال.',
          },
          {
            'الميزة': 'تحليلات قابلة للإيقاف',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن إيقاف عدّادات الاستخدام وتقارير الأعطال من الإعدادات.',
            'القيد / التنبيه': 'هي مفعّلة افتراضيًا، ولا يُذكر أن تنزيل النماذج وفحص التحديثات قابلان للإيقاف.',
          },
          {
            'الميزة': 'إصدارات حديثة',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 0.7.40 في 21 نوفمبر 2026.',
            'القيد / التنبيه': 'مغلق المصدر وما زال من سلسلة 0.x، فسجله قصير.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind مقابل البدائل',
        content: [
          'هذه أقرب الأدوات في الدليل: أداة ترتّب الملفات وتبحث فيها أيضًا، وأداة تبحث وتتحاور مع الملفات المحلية، ومكتبة صور بها بحث محلي بالذكاء الاصطناعي.',
        ],
        columns: [
          'التطبيق',
          'المنصات',
          'السعر والترخيص',
          'الدور',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': 'PixaFind',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'نسخة مجانية، مملوك',
            'الدور': 'بحث في الملفات والصور بحسب المعنى',
            'الفرق الرئيسي': 'أداة بحث فقط؛ المجانية لمجلد واحد',
          },
          {
            'التطبيق': '[StratoSort](/ar/power-local-llm/stratosort-review)',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني غير تجاري، PolyForm NC',
            'الدور': 'ترتيب الملفات والبحث والمحادثة',
            'الفرق الرئيسي': 'يعيد التسمية والترتيب أيضًا؛ متاح المصدر',
          },
          {
            'التطبيق': '[Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'مجاني، مملوك',
            'الدور': 'بحث ومحادثة مع الملفات المحلية',
            'الفرق الرئيسي': 'يجيب عن الأسئلة من الملفات؛ مغلق المصدر',
          },
          {
            'التطبيق': '[PixlStash](/ar/power-local-llm/pixlstash-review)',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'مكتبة صور ببحث محلي بالذكاء الاصطناعي',
            'الفرق الرئيسي': 'الصور فقط؛ وسوم وبحث بالوجوه',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب PixaFind',
        items: [
          '**من لا يجدون ملفاتهم بالاسم.** صف المستند أو الصورة بدل ذلك.',
          '**مستخدمو سطح المكتب المهتمون بالخصوصية.** تبقى النماذج والفهرس على الحاسوب بحسب المطوّر، مع نسخة مجانية للتجربة.',
          '**مستخدمو Windows أولًا.** خيار وحدة GPU ووصف المستودع يركّزان على Windows.',
          '**أصحاب المجلدات المختلطة.** تُبحث المستندات والصور والشيفرة في مكان واحد.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب PixaFind',
        items: [
          '**من يحتاجون إلى شيفرة مفتوحة المصدر.** التطبيق المكتبي مغلق المصدر.',
          '**من يريدون محادثة أو أداة ترتيب ملفات.** PixaFind يعثر على الملفات؛ ولا يحاور ولا يعيد الترتيب.',
          '**مستخدمو Mac بمعالج Intel والجوال.** المغطى فقط أجهزة Mac بمعالج Apple Silicon وأجهزة سطح المكتب.',
          '**من يحتاجون إلى استخدام صفري للشبكة.** التحليلات وتقارير الأعطال مفعّلة افتراضيًا وتحتاج إلى إيقاف.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل PixaFind دون اتصال بالإنترنت؟',
            a: 'يقول الموقع نعم بعد تنزيل نماذج الذكاء الاصطناعي. يحتاج أول تشغيل إلى الإنترنت للتنزيل، كما أن فحص التحديثات وتسجيل دخول الترخيص يستخدمان الشبكة. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل PixaFind مجاني؟',
            a: 'توجد نسخة مجانية لمجلد واحد و2,000 ملف دون حساب. بحسب صفحة الأسعار لدى المطوّر، تكلفة Pro هي 12 دولارًا شهريًا أو 8 دولارات شهريًا عند الدفع سنويًا، وترخيص Lifetime بسعر 249 دولارًا دفعة واحدة.',
          },
          {
            q: 'هل يرسل PixaFind ملفاتي إلى السحابة؟',
            a: 'تقول سياسة الخصوصية إنه لا يرفع ملفاتك أو صورك أو ما بداخلها أبدًا. وتسرد عدّادات استخدام وتسجيلات جلسات مموّهة وتقارير أعطال مفعّلة افتراضيًا ويمكن إيقافها من الإعدادات. والتطبيق مغلق المصدر، لذا لم تتمكن PromptQuorum من التحقق من ذلك.',
          },
          {
            q: 'هل يعمل على Mac وLinux؟',
            a: 'نعم: توجد نسخة لأجهزة Mac بمعالج Apple Silicon (بحسب ملاحظة صفحة التنزيل لدى المطوّر، غير موثّقة بعد من Apple) ونسختا AppImage و.deb لنظام Linux، إلى جانب مثبّت Windows.',
          },
          {
            q: 'من يصنع PixaFind؟',
            a: 'يقول الموقع إنه من بناء PixaLabs. ولا تذكر الصفحات التي قرأتها PromptQuorum أي عنوان شركة أو دولة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'PixaFind خيار جيد إن أردت العثور على المستندات والصور والشيفرة على حاسوب Windows أو Mac أو Linux بوصفها، بنماذج تعمل بحسب المطوّر على الجهاز، ومع نسخة مجانية للتجربة. وقد صدر له إصدار في 21 نوفمبر 2026.',
          'التنبيهات هي: مغلق المصدر، وتحليلات مفعّلة افتراضيًا تحتاج إلى إيقاف، ونسخة Mac غير موثّقة، وإصدار 0.x حديث، وادعاءات لم تستطع PromptQuorum التحقق منها. جرّب النسخة المجانية على مجلد واحد قبل فهرسة أرشيفك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع PixaFind](https://pixafind.com/) — الميزات والمنصات والأسعار والأسئلة الشائعة.',
          '[سياسة الخصوصية](https://pixafind.com/privacy/) — التعامل مع البيانات، آخر تحديث في 19 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/Ishannaik/pixafind-releases/releases) — ملفات المثبّت وتاريخ إصدار النسخة 0.7.40.',
          '[صفحة التواصل](https://pixafind.com/contact/) — بيانات التواصل مع المطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة StratoSort](/ar/power-local-llm/stratosort-review) — تطبيق يرتّب الملفات بحسب المحتوى ويضيف البحث والمحادثة.',
          '[مراجعة Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review) — بحث ومحادثة مع الملفات المحلية لأجهزة Mac وWindows.',
          '[مراجعة PixlStash](/ar/power-local-llm/pixlstash-review) — مكتبة صور ببحث محلي بالذكاء الاصطناعي.',
          '[دليل برمجيات النماذج اللغوية المحلية الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/pixafind-review-hero-ko.webp',
    title: 'PixaFind 리뷰: 파일과 사진을 위한 로컬 AI 검색',
    seoTitle: 'PixaFind 리뷰: 의미로 파일과 사진 검색',
    intro: 'PixaFind는 이름이 아니라 의미를 기준으로 문서, 사진, 코드를 찾아 주는 데스크톱 앱이며, 웹사이트에 따르면 AI 모델이 사용자의 컴퓨터에서 실행됩니다. "해변의 석양"이나 "해지 통보 90일 조항이 있는 계약서"처럼 입력하면 일치하는 파일을 보여 줍니다. 이 리뷰는 Windows, Mac, Linux 빌드, 가격, 개인정보 보호, 한계, 대안을 다룹니다. PromptQuorum은 개발사의 페이지와 릴리스 페이지를 읽었지만 앱을 직접 테스트하지는 않았습니다.',
    metaDescription: 'PixaFind 리뷰: Windows, Mac, Linux용 의미 기반 AI 파일·사진 검색, 개발사에 따르면 모델은 내 PC에서 실행. 무료 플랜, 가격, 개인정보, 한계.',
    twitterDescription: 'PixaFind 리뷰: 설명만으로 파일과 사진을 찾는 로컬 AI 검색. Windows, Mac, Linux 지원. 무료 플랜, 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '문서, 사진, 코드 폴더가 많아 클라우드 서비스에 올리지 않고 설명만으로 파일을 찾으려는 사용자를 위한 글입니다. 설치, 가격, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PixaFind review',
    targetKeywords: [
      'pixafind 리뷰',
      'pixafind ai 파일 검색',
      'windows 의미 기반 파일 검색',
      '로컬 ai 사진 검색',
      '오프라인 의미 기반 파일 검색',
      'ai 데스크톱 검색 windows mac linux',
      '비공개 파일 검색 앱',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Apple Silicon Mac',
      'Linux PC',
    ],
    leadAnswerBlock: '**PixaFind는 Windows, Mac, Linux용 데스크톱 앱으로, 의미를 기준으로 문서, 사진, 코드를 찾으며, 개발사에 따르면 AI 모델이 사용자의 컴퓨터에서 실행되고 파일과 색인도 컴퓨터에 남습니다.** 폴더 1개와 파일 2,000개까지 쓸 수 있는 무료 플랜과 유료 Pro, Team, Lifetime 플랜이 있습니다. 첫 실행 때 모델을 내려받고, 개발사는 분석 데이터와 충돌 보고서가 기본적으로 켜져 있지만 끌 수 있다고 밝히며, PromptQuorum은 앱을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'PixaFind는 로컬 AI 파일 검색 앱입니까?',
        answer: '개발사에 따르면 그렇습니다. 웹사이트는 AI 모델이 사용자의 하드웨어에서 실행되며 파일과 검색어가 기기를 떠나지 않는다고 밝히고, 개인정보 처리방침은 색인이 컴퓨터에 저장된다고 설명합니다. 모델은 Hugging Face에서 한 번 내려받습니다. 방침에는 사용 횟수, 가려진 세션 녹화, 충돌 보고서가 기본적으로 켜져 있으며 설정에서 끌 수 있다는 내용도 있습니다.',
        bullets: [
          'PDF, Word, PowerPoint, Excel, EPUB, 소스 코드, 이메일, 이미지를 포함한 76개 이상의 파일 형식에서 의미로 검색합니다.',
          '무료: 폴더 1개와 파일 2,000개, 계정 불필요. 개발사의 가격 페이지에 따르면 Pro는 월 12달러(연 결제 시 월 8달러), Lifetime은 한 번에 249달러입니다.',
          'Windows 10 이상, Apple Silicon Mac(개발사의 다운로드 안내에 따르면 아직 Apple 공증 없음), Linux 빌드가 있으며, 명시된 요구 사양은 RAM 4 GB와 디스크 약 2 GB입니다.',
          '데스크톱 앱은 비공개 소스이므로 개인정보 보호 주장을 코드로 확인할 수 없습니다.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PixaFind 받기', anchor: 'get-it' },
      { label: 'PixaFind 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'PixaFind란', anchor: 'what-is-pixafind' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'PixaFind와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'PixaFind를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'PixaFind를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixaFind는 사용자가 고른 폴더를 색인한 뒤 일상적인 말로 한 설명만으로 문서, 사진, 코드를 찾아 주는 데스크톱 앱이며, 개발사에 따르면 AI 모델은 사용자의 컴퓨터에서 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: '뜻을 이해하는 검색창이라고 생각하면 됩니다. "해 질 녘 해변 사진"이라고 입력하면 파일 이름이 IMG_4821이어도 그 사진을 찾아 줍니다.',
          },
        ],
        items: [
          '로컬 주장: 모델과 색인은 컴퓨터에 남으며, 모델 다운로드, 업데이트 확인, 라이선스 로그인, 그리고 끄지 않은 경우 분석 데이터와 충돌 보고서에는 인터넷이 사용됩니다.',
          '개발사: PixaLabs이며, PromptQuorum이 읽은 페이지에는 회사 주소나 국가가 나와 있지 않습니다.',
          '유지보수: 버전 0.7.40이 2026년 11월 21일에 출시되어 최근에도 개발이 이어졌음을 보여 주지만, 아직 0.x 버전입니다.',
          '비용: 폴더 1개와 파일 2,000개까지는 무료이며, 개발사에 따르면 Pro, Team, 249달러 Lifetime 플랜은 제한을 풉니다.',
          '공백: 비공개 소스, PromptQuorum의 직접 테스트 없음, 공증되지 않은 Mac 빌드, 모바일 앱 없음.',
        ],
      },
      getItPixafind: {
        id: 'get-it',
        title: 'PixaFind 받기',
        content: [
          '**PixaFind는 다른 데스크톱 앱처럼 설치하므로 Windows와 Linux에서는 터미널이 필요 없습니다.** 공식 사이트에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, AI 모델은 첫 실행 때 앱 안에서 내려받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://pixafind.com/download/win/) — Windows 10 이상, 설치 파일',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://pixafind.com/download/mac/) — Apple Silicon(M1 이상), 공증 없음, 사이트 안내 참조',
          },
          {
            '플랫폼': 'Linux',
            '받는 곳': '[AppImage 다운로드](https://pixafind.com/download/linux_appimage/)(x86_64) 또는 Ubuntu·Debian용 [.deb 패키지](https://pixafind.com/download/linux_deb/)',
          },
          {
            '플랫폼': '릴리스 페이지',
            '받는 곳': '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — 설치 파일, 릴리스 날짜, 업데이트 매니페스트',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[pixafind.com](https://pixafind.com/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[PixaFind 개인정보 처리방침](https://pixafind.com/privacy/)',
          },
        ],
        note: '웹사이트에 따르면 GitHub 저장소는 릴리스 설치 파일만 호스팅하며, 데스크톱 앱은 비공개 소스입니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixaFind 한눈에 보기',
        columns: ['항목', 'PixaFind'],
        rows: [
          { '항목': '플랫폼', 'PixaFind': 'Windows 10 이상, Apple Silicon Mac, Linux 데스크톱' },
          { '항목': '가격', 'PixaFind': '무료 플랜, Pro는 월 8달러부터, Lifetime 249달러' },
          { '항목': '라이선스', 'PixaFind': '독점, 비공개 소스' },
          { '항목': '실행 위치', 'PixaFind': '개발사에 따르면 컴퓨터에서 실행, 모델 다운로드에는 인터넷 필요' },
          { '항목': '메모리', 'PixaFind': 'RAM 4 GB와 디스크 약 2 GB, Windows에서는 GPU 선택 사항' },
          { '항목': '입력 유형', 'PixaFind': '76개 이상 형식: 문서, 코드, 이메일, 이미지' },
          { '항목': '무료 한도', 'PixaFind': '폴더 1개와 파일 2,000개, 계정 불필요' },
          { '항목': '개발사', 'PixaFind': 'PixaLabs' },
        ],
        note: '개발사 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다. 가격은 개발사가 공시한 미국 달러 정가이므로, 구매 전에 개발사의 가격 페이지를 확인하십시오.',
      },
      whatIsPixafind: {
        id: 'what-is-pixafind',
        title: 'PixaFind란',
        content: [
          '**PixaFind는 파일 이름만이 아니라 파일 안의 내용을 읽는 검색 앱입니다.** 색인할 폴더를 고르면 앱이 낮은 우선순위로 백그라운드에서 색인을 만들고, 검색창은 설명에 맞는 문서, 사진, 코드를 보여 줍니다. 이미지를 클릭하면 비슷한 이미지도 찾을 수 있습니다.',
          '파일과 대화하거나 파일을 재정리하지는 않습니다. 찾아 주는 도구입니다. 폴더를 분류하고 이름을 바꾸거나 문서와 대화하려면 아래 대안을 참고하십시오.',
          '이 리뷰는 웹사이트, 개인정보 처리방침, GitHub 릴리스 페이지에 근거합니다. PromptQuorum은 PixaFind를 설치하거나 테스트하지 않았으므로, 검색 품질과 속도, 색인이 끝나면 100밀리초 안에 결과가 나온다는 주장은 개발사의 설명입니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 다운로드, 폴더 선택으로 이루어집니다.** 단계는 웹사이트와 개인정보 처리방침을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '위의 PixaFind 받기 표에서 사용 중인 시스템용 설치 파일을 내려받습니다. Mac은 빌드가 공증되지 않았으므로 사이트가 안내하는 일회성 단계를 따릅니다. 공증되지 않은 앱은 Apple의 자동 악성 코드 검사를 통과하지 않았으므로, 출처를 신뢰할 때만 설치하십시오.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '첫 실행 때 앱이 Hugging Face에서 AI 모델을 내려받으며 디스크 공간이 약 2 GB 필요하고, 이때 한 번 인터넷이 필요합니다.',
          },
          {
            title: '색인할 폴더 고르기',
            whyItMatters: '검색 대상으로 삼을 폴더만 고르십시오. 무료 플랜은 폴더 1개와 파일 2,000개까지입니다.',
          },
          {
            title: '일상적인 말로 검색하기',
            whyItMatters: '찾고 싶은 파일이나 사진을 설명하고 결과를 엽니다. 설정의 데이터 및 개인정보 항목에서 선택형 분석 데이터와 충돌 보고서를 확인하십시오.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 의미로 파일을 찾는 데 집중되어 있습니다.** 아래 내용은 모두 개발사의 웹사이트와 개인정보 처리방침에서 가져왔습니다.',
        ],
        items: [
          '**의미 기반 텍스트 검색.** PDF, Word, PowerPoint, Excel, EPUB, 소스 코드, 이메일 등 76개 이상 형식의 내용을 읽고, 키워드뿐 아니라 의미로도 찾습니다.',
          '**이미지 검색.** "해변의 석양" 같은 설명을 입력하면 일치하는 사진을 찾고, 이미지를 클릭하면 비슷한 사진을 찾습니다.',
          '**백그라운드 색인.** 색인은 낮은 우선순위로 실행되며 Windows에서는 GPU가 선택 사항입니다. 개발사에 따르면 색인이 만들어지면 검색은 100밀리초 안에 결과를 돌려줍니다.',
          '**폴더 제어.** 색인할 폴더를 직접 고르며, 색인은 컴퓨터의 앱 데이터 폴더에 저장됩니다.',
          '**여러 대의 PC.** Pro는 최대 3대, Lifetime은 최대 2대의 PC를 지원하고, Team은 하나의 청구서로 좌석을 추가합니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**PixaFind는 자체 AI 모델을 포함하며, 첫 실행 때 Hugging Face에서 내려받습니다.** 웹사이트는 모델 이름을 밝히지 않으므로, 어떤 모델을 쓰는지와 검색 성능은 여기에 문서화되어 있지 않습니다.',
          '명시된 요구 사양은 RAM 4 GB와 디스크 약 2 GB이며, 모델은 CPU에서, Windows에서는 선택적으로 GPU에서 실행됩니다. PromptQuorum은 속도나 정확도 수치를 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 PixaFind는 사용자의 컴퓨터에서 파일을 검색하며 파일, 사진, 그 안의 내용을 업로드하지 않습니다.** 색인은 앱 데이터 폴더에 남습니다. 웹사이트는 API 키가 필요 없다고 덧붙입니다.',
          '방침에는 앱이 만들 수 있는 연결도 나열되어 있습니다. Hugging Face에서 한 번 받는 모델 다운로드, GitHub의 업데이트 확인(GitHub는 IP 주소를 봅니다), 라이선스 키, 기기 ID의 일방향 해시, 운영체제를 보내는 라이선스 활성화 또는 로그인입니다. 사용 횟수(PostHog), 가려진 세션 녹화(PostHog), 충돌 보고서(Sentry)는 기본적으로 켜져 있고, 설정의 데이터 및 개인정보에서 끌 수 있으며, 방침에 따르면 검색어나 파일 내용은 포함하지 않습니다. 방침의 최종 업데이트는 2026년 11월 19일입니다.',
          '데스크톱 앱은 비공개 소스이므로 이 중 어느 것도 코드로 확인할 수 없고, PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다. 무료 플랜은 계정 없이 폴더 1개와 파일 2,000개를 지원합니다. 개발사에 따르면 Pro는 월 12달러 또는 연 결제 시 월 8달러이고, Team은 좌석당 월 15달러 또는 연 결제 시 월 12달러(최소 3좌석)이며, Lifetime은 최대 2대의 PC에서 1인이 쓰는 조건으로 한 번에 249달러입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 컴퓨터에서 실행되는 모델',
            '실제 사용에서의 의미': '개발사에 따르면 모델을 내려받은 뒤에는 인터넷 없이 검색할 수 있습니다.',
            '한계 / 주의점': '첫 다운로드에는 인터넷이 필요하며, PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          },
          {
            '장점': '의미 기반 검색',
            '실제 사용에서의 의미': '파일 이름을 기억할 필요 없이 파일이나 사진을 설명하면 됩니다.',
            '한계 / 주의점': '검색 품질은 여기서 테스트하지 않았고 모델 이름도 공개되지 않았습니다.',
          },
          {
            '장점': '무료 플랜',
            '실제 사용에서의 의미': '계정 없이 폴더 1개와 파일 2,000개로 써 볼 수 있습니다.',
            '한계 / 주의점': '더 큰 라이브러리에는 Pro, Team, Lifetime이 필요합니다.',
          },
          {
            '장점': '세 가지 데스크톱 시스템',
            '실제 사용에서의 의미': 'Windows, Apple Silicon Mac, Linux용 빌드가 있습니다.',
            '한계 / 주의점': 'Mac 빌드는 공증되지 않았고, Intel Mac과 모바일 앱은 없습니다.',
          },
          {
            '장점': '끌 수 있는 분석 데이터',
            '실제 사용에서의 의미': '사용 횟수와 충돌 보고서는 설정에서 끌 수 있습니다.',
            '한계 / 주의점': '기본적으로 켜져 있으며, 모델 다운로드와 업데이트 확인은 끌 수 있다고 설명되어 있지 않습니다.',
          },
          {
            '장점': '최근 릴리스',
            '실제 사용에서의 의미': '버전 0.7.40이 2026년 11월 21일에 출시되었습니다.',
            '한계 / 주의점': '비공개 소스이며 아직 0.x 버전이라 실적이 짧습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixaFind와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 도구들입니다. 파일을 정리하면서 검색도 하는 도구, 로컬 파일을 검색하고 대화하는 도구, 로컬 AI 검색을 갖춘 사진 라이브러리입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'PixaFind',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료 플랜, 독점',
            '역할': '의미로 파일과 사진 검색',
            '주요 차이': '검색 전용, 무료 플랜은 폴더 1개',
          },
          {
            '앱': '[StratoSort](/ko/power-local-llm/stratosort-review)',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '비상업적 무료, PolyForm NC',
            '역할': '파일 정리, 검색, 대화',
            '주요 차이': '이름 변경과 분류도 수행, 소스 공개',
          },
          {
            '앱': '[Hyperlink (Nexa AI)](/ko/power-local-llm/hyperlink-nexa-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '무료, 독점',
            '역할': '로컬 파일 검색과 대화',
            '주요 차이': '파일로 질문에 답함, 비공개 소스',
          },
          {
            '앱': '[PixlStash](/ko/power-local-llm/pixlstash-review)',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '로컬 AI 검색을 갖춘 이미지 라이브러리',
            '주요 차이': '사진 전용, 태그와 얼굴 검색',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PixaFind를 쓰면 좋은 사용자',
        items: [
          '**파일 이름으로는 파일을 찾지 못하는 사용자.** 문서나 사진을 설명하기만 하면 됩니다.',
          '**개인정보를 중시하는 데스크톱 사용자.** 개발사에 따르면 모델과 색인이 컴퓨터에 남고, 써 볼 수 있는 무료 플랜이 있습니다.',
          '**우선 Windows 사용자.** GPU 옵션과 저장소 설명이 Windows에 초점을 맞추고 있습니다.',
          '**여러 종류의 폴더를 가진 사용자.** 문서, 사진, 코드를 한곳에서 검색합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PixaFind를 쓰지 말아야 할 사용자',
        items: [
          '**오픈 소스 코드가 필요한 사용자.** 데스크톱 앱은 비공개 소스입니다.',
          '**대화나 파일 정리 기능을 원하는 사용자.** PixaFind는 파일을 찾을 뿐 대화하거나 재정리하지 않습니다.',
          '**Intel Mac과 스마트폰 사용자.** Apple Silicon Mac과 데스크톱만 지원합니다.',
          '**네트워크 사용이 전혀 없어야 하는 사용자.** 분석 데이터와 충돌 보고서가 기본적으로 켜져 있어 직접 꺼야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PixaFind는 오프라인에서 작동합니까?',
            a: '웹사이트는 AI 모델을 내려받은 뒤에는 그렇다고 밝힙니다. 첫 실행에는 다운로드를 위해 인터넷이 필요하고, 업데이트 확인과 라이선스 로그인에도 네트워크가 쓰입니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: 'PixaFind는 무료입니까?',
            a: '계정 없이 폴더 1개와 파일 2,000개까지 쓰는 무료 플랜이 있습니다. 개발사의 가격 페이지에 따르면 Pro는 월 12달러 또는 연 결제 시 월 8달러이고, 249달러 Lifetime 라이선스는 일시불입니다.',
          },
          {
            q: 'PixaFind는 내 파일을 클라우드로 보냅니까?',
            a: '개인정보 처리방침에 따르면 파일, 사진, 그 안의 내용을 업로드하지 않습니다. 기본적으로 켜진 사용 횟수, 가려진 세션 녹화, 충돌 보고서가 있으며 설정에서 끌 수 있다고 나열되어 있습니다. 앱이 비공개 소스여서 PromptQuorum은 이를 확인할 수 없었습니다.',
          },
          {
            q: 'Mac과 Linux에서도 실행됩니까?',
            a: '네. Windows 설치 파일 외에 Apple Silicon Mac 빌드(개발사의 다운로드 안내에 따르면 아직 Apple 공증 없음)와 Linux AppImage 및 .deb 빌드가 있습니다.',
          },
          {
            q: 'PixaFind는 누가 만듭니까?',
            a: '웹사이트는 PixaLabs가 만들었다고 밝힙니다. PromptQuorum이 읽은 페이지에는 회사 주소나 국가가 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'PixaFind는 Windows, Mac, Linux 컴퓨터에서 문서, 사진, 코드를 설명만으로 찾고 싶고, 개발사에 따르면 모델이 기기에서 실행되며 써 볼 무료 플랜이 있다는 점이 마음에 든다면 잘 맞습니다. 2026년 11월 21일에 릴리스가 나왔습니다.',
          '주의할 점은 비공개 소스, 직접 꺼야 하는 기본 활성 분석 데이터, 공증되지 않은 Mac 빌드, 아직 어린 0.x 버전, 그리고 PromptQuorum이 확인하지 못한 주장입니다. 아카이브 전체를 색인하기 전에 폴더 하나로 무료 플랜을 먼저 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[PixaFind 웹사이트](https://pixafind.com/) — 기능, 플랫폼, 가격, FAQ.',
          '[개인정보 처리방침](https://pixafind.com/privacy/) — 데이터 처리, 최종 업데이트 2026년 11월 19일.',
          '[GitHub Releases](https://github.com/Ishannaik/pixafind-releases/releases) — 설치 파일과 버전 0.7.40의 릴리스 날짜.',
          '[문의 페이지](https://pixafind.com/contact/) — 개발사 연락처.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[StratoSort 리뷰](/ko/power-local-llm/stratosort-review) — 내용으로 파일을 정리하고 검색과 대화를 더한 앱.',
          '[Hyperlink (Nexa AI) 리뷰](/ko/power-local-llm/hyperlink-nexa-review) — Mac과 Windows용 로컬 파일 검색 및 대화.',
          '[PixlStash 리뷰](/ko/power-local-llm/pixlstash-review) — 로컬 AI 검색을 갖춘 이미지 라이브러리.',
          '[로컬 LLM 소프트웨어 종합 디렉터리](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 폭넓게 모은 디렉터리.',
        ],
      },
    },
  },
}
