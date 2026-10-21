// SurfSense Review: Open-Source Desktop NotebookLM Alternative
// Slug: surfsense-review
// Companion to: anythingllm-review, privategpt-review, khoj-ai-second-brain-review, hilbertraum-review
// Sources: surfsense.com (home, downloads, pricing, privacy policy, cloud-sunset page), the MODSetter/SurfSense GitHub
// repository and its v2.2.2 release page, all checked 2026-10-21 — no hands-on testing. The pricing page lists USD only,
// so non-EN blocks keep the USD figures with a note (no FX conversion).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-en.webp',
    title: 'SurfSense Review: Open-Source Desktop NotebookLM Alternative',
    seoTitle: 'SurfSense Review: Open-Source NotebookLM Alternative',
    intro:
      'SurfSense is an open-source desktop app that the project describes as a privacy-focused, NotebookLM-style AI agent for your own documents. It grew out of a hosted web service that the project has shut down. This review reflects its website, privacy policy and GitHub release page as checked on 21 October 2026.',
    metaDescription:
      'SurfSense review: free, open-source desktop AI agent for your documents, with local-model support. Pricing, privacy claims and what we could not verify.',
    twitterDescription:
      'SurfSense review: an Apache-2.0 desktop app where an AI agent works through your files locally. Plugin pricing, privacy claims and open questions.',
    audience:
      'People who want to chat with their own documents without a cloud upload, and who need to know what SurfSense costs, what leaves the computer and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SurfSense review',
    targetKeywords: [
      'surfsense review',
      'open source notebooklm alternative',
      'private document chat desktop app',
      'local ai research agent',
      'surfsense pricing',
      'chat with documents offline',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense (version 2.2.2, released 16 October 2026) is a free, open-source desktop app that, per its own site, lets an AI agent research, transform and edit your documents on your machine, with no account and the index kept on disk.** You choose the model yourself, and documents leave the computer only if you pick a remote one. Every privacy claim comes from the project; PromptQuorum has not tested the app or its network traffic.',
    quickAnswerTop: {
      en: {
        question: 'Is SurfSense really free and private?',
        answer:
          'The app and its updates are free with no usage cap, and the privacy policy says the desktop app has no account, telemetry or crash reporting. A remote model provider would still see your prompts and document excerpts, and the project\'s own web plugins need a paid license.',
        bullets: [
          'Reads PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML and images (OCR), plus audio recordings.',
          'Can merge, split and extract PDFs, and generate podcasts, mind maps, flashcards and quizzes.',
          'Works with any OpenAI-compatible API or a local model.',
          'Edits copies of your files rather than the originals.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is SurfSense?', anchor: 'what-is-surfsense' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'If You Used the Hosted Version', anchor: 'cloud-migration' },
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
            text: 'SurfSense is an Apache-2.0 desktop app that searches, cites and edits your own files with a model you pick.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, point it at files or folders and a model, and ask questions; the project says the index and your documents stay on your disk.',
          },
        ],
        items: [
          'Maintenance: v2.2.0, v2.2.1 and v2.2.2 were published on 9, 14 and 16 October 2026, so no stale-project warning applies.',
          'License: Apache-2.0, with the full source on GitHub.',
          'Cost: the app is free; only the project\'s own web plugins and an Enterprise tier are paid.',
          'Hosted version: the earlier cloud service was scheduled for data deletion on 18 October 2026, so the desktop app is the only route.',
          'Gate: the download form asks for an email address before it hands over the installer.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the SurfSense website, privacy policy, sunset page and GitHub release page, checked on 21 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'What Is SurfSense?',
        content: [
          '**SurfSense is a desktop app in which you add files or folders as sources and ask an AI agent to find, cite, extract, transform or edit what is in them.** The project calls it a privacy-focused, NotebookLM-style agent and positions it against Google\'s hosted NotebookLM.',
          'It replaces SurfSense\'s earlier hosted web app: the project moved to a local desktop app and, according to its sunset page, ended the cloud service. The repository is [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) on GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**SurfSense is installed from the downloads page on its website; the page lists no mobile, web or Intel Mac build.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          { 'Platform': 'Windows (x64)', 'Where to get it': 'Installer SurfSense-Setup.exe from the [downloads page](https://www.surfsense.com/downloads)' },
          { 'Platform': 'macOS (Apple Silicon)', 'Where to get it': 'Disk image SurfSense-arm64.dmg (1.26 GB per the release page)' },
          { 'Platform': 'Linux (x64)', 'Where to get it': 'SurfSense.AppImage or SurfSense.deb from the [downloads page](https://www.surfsense.com/downloads)' },
          { 'Platform': 'Website', 'Where to get it': '[surfsense.com](https://www.surfsense.com)' },
          { 'Platform': 'Source code', 'Where to get it': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'Platform': 'Privacy policy', 'Where to get it': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (updated 18 September 2026)' },
        ],
        note: 'Version reviewed: v2.2.2, published on 16 October 2026 per the GitHub release page, which is the app\'s latest upstream update at the time of checking. The downloads page lists no system requirements. Known issues in the release notes: the first start needs free disk space roughly the size of the database file, and rolling back to 2.2.1 means restoring a database backup by hand.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**The app itself costs nothing; a paid Individual plan adds the project\'s own web plugins.**',
        ],
        columns: ['Plan', 'What it includes', 'Price (USD)'],
        rows: [
          { 'Plan': 'Free', 'What it includes': 'App and all updates, no account or usage cap, plus a 30-day plugin license for an email address', 'Price (USD)': '$0' },
          { 'Plan': 'Individual', 'What it includes': 'Plugins for Google, YouTube, TikTok, Maps, Amazon, Walmart, Indeed, web crawler, priority support', 'Price (USD)': '$60 first year, then $120/year' },
          { 'Plan': 'Enterprise', 'What it includes': 'Self-hosted deployment inside your network, central controls, audit logging, named support', 'Price (USD)': 'Custom, invoiced annually' },
        ],
        note: 'Prices are from the [pricing page](https://www.surfsense.com/pricing), read on 21 October 2026. Third-party plugins and MCP servers need no license, and the license does not lock any of the app\'s own features.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the order on the project\'s site; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Download the installer',
            whyItMatters: 'Choose the Windows, macOS or Linux file on the [downloads page](https://www.surfsense.com/downloads).',
          },
          {
            title: 'Complete the onboarding and add a model',
            whyItMatters: 'Connect any OpenAI-compatible API or a local model. Image features need an image model, and none is selected by default.',
          },
          {
            title: 'Add sources',
            whyItMatters: 'Drop files or folders into the sources panel.',
          },
          {
            title: 'Ask the agent',
            whyItMatters: 'Ask it to search, extract, transform or edit what is in your sources.',
          },
          {
            title: 'Optionally add plugins',
            whyItMatters: 'Open Settings › Plugins to add web plugins or MCP servers.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the project\'s website, release notes or privacy policy.**',
        ],
        items: [
          '**Cited research.** Answers draw on your sources and cite them; since 2.2.2, PDFs with a text layer and Word files are ready in seconds because they no longer wait on Docling.',
          '**Audio.** Recordings can be added as sources and are transcribed with on-device speech recognition; the chat box has a microphone for voice input.',
          '**Plugins.** Under Settings › Plugins, web and platform plugins (search, crawling, video and shopping sites) extend the agent; they need internet access and the license described under Pricing.',
          '**MCP.** Third-party MCP servers (the site names DeepWiki and Notion) can be added from the plugin registry or by URL and stay off until enabled.',
          '**Tool permissions.** Each tool can be set to Always allowed, Needs approval or Blocked.',
          '**Office files and podcasts.** Office support through LibreOffice is optional and switched on in Settings; podcasts are saved as MP3.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The privacy policy says the desktop app has no account or sign-in, keeps documents, chats, search index and settings as local files on your computer, and never sends them to SurfSense.** It adds that the app has no analytics, usage tracking or crash reporting.',
          'The policy names two other outbound connections, update checks to GitHub and model downloads from Hugging Face, both off until you enable them; license checks run offline. If you configure a remote model provider, your prompts and the relevant document excerpts go to that provider under its own policy. The website is different: it uses PostHog analytics by default with no consent banner and does not honour Do Not Track or Global Privacy Control signals, and Stripe handles payments.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The project presents the app as able to run offline and air-gapped, but PromptQuorum has not audited the code or the network traffic, so these are the project\'s claims. Its own web plugins always need internet access.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'If You Used the Hosted Version',
        content: [
          '**The project\'s sunset page said the earlier cloud service would delete all data on 18 October 2026 and that the desktop app replaces it.** Anyone holding an export can bring it across as follows.',
        ],
        items: [
          '**Export contents.** The ZIP holds ready documents as Markdown, the folder structure and chat threads; it does not include original uploads, generated artifacts, tool calls, agent steps or live citation links.',
          '**Import.** In the desktop app, open the gear icon at the bottom of the left rail, go to General, find "Import from SurfSense cloud", click Upload and pick the ZIP; a fresh install also shows an Upload button on its empty workspace screen.',
          '**After the import.** Workspaces, folders and chat threads appear, and the app indexes the documents on your machine.',
          '**Deadline passed.** PromptQuorum could not confirm whether exporting is still possible; check the [sunset page](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want NotebookLM-style research without uploading files.** Per the project, documents stay on disk unless you choose a remote model.',
          '**Users who already run a local or OpenAI-compatible model** and want an agent front end for it.',
          '**Tinkerers who want to read or build the code** from the GitHub repository.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so answer quality, citation accuracy, speed and the agent\'s file edits are not assessed.',
          '**Offline and telemetry claims.** The air-gapped and no-telemetry statements were not checked against the code or network traffic.',
          '**Hardware needs.** The sources state no minimum RAM, disk or GPU.',
          '**Self-hosting.** The repository has a docker folder, but the pages checked give no self-hosting steps, so the desktop app is the only documented free route.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[AnythingLLM](/power-local-llm/anythingllm-review)', 'Platforms': 'Windows, macOS, Linux, web', 'Price / license': 'Free / MIT', 'Key difference': 'Document-chat workspace with a built-in vector store and many model backends' },
          { 'App': '[PrivateGPT](/power-local-llm/privategpt-review)', 'Platforms': 'Windows, macOS, Linux (web UI, CLI)', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'Offline-by-design RAG aimed at air-gapped setups, run from a terminal' },
          { 'App': '[Khoj](/power-local-llm/khoj-ai-second-brain-review)', 'Platforms': 'Windows, macOS, Linux, web', 'Price / license': 'Free / AGPL 3.0', 'Key difference': 'Personal AI second brain that syncs with Obsidian and Notion' },
          { 'App': '[HilbertRaum](/power-local-llm/hilbertraum-review)', 'Platforms': 'Windows, macOS (Apple Silicon), Linux', 'Price / license': 'Free / GPL-3.0-or-later', 'Key difference': 'Portable no-install desktop workspace for offline chat and document Q&A' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does SurfSense need an account?',
            a: 'No. There is no sign-in; the only personal detail the policy names is the email address used for the download form and the trial license.',
          },
          {
            q: 'Can I run it fully offline?',
            a: 'Per the project, yes once a local model is set up. The web plugins cannot work offline because they read public pages. PromptQuorum has not tested this.',
          },
          {
            q: 'Does it work with ChatGPT or other providers?',
            a: 'The project names any OpenAI-compatible API, and release 2.2.2 adds sign-in with a ChatGPT Plus or Pro plan. No other provider is named in the sources checked.',
          },
          {
            q: 'How is it different from NotebookLM?',
            a: 'The project\'s own comparison table says NotebookLM supports only Gemini, while SurfSense accepts any OpenAI-compatible API or a local model and can run offline. PromptQuorum has not checked NotebookLM\'s current features.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'SurfSense is a free, Apache-2.0 desktop app that, per the project, keeps a document agent on your own machine with a model of your choice, and it is actively updated, with three releases in the week before this check. Against that, its privacy and offline claims are unverified here, it has no Intel Mac or mobile build, the plugins that read websites cost money and the hosted version it grew out of is gone. It suits people who want a private, NotebookLM-style workflow and are comfortable connecting their own model; readers who prefer a longer-established tool can compare [AnythingLLM](/power-local-llm/anythingllm-review) or [PrivateGPT](/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[SurfSense website](https://www.surfsense.com) — features, comparison table and install steps, checked 21 October 2026.',
          '[SurfSense pricing](https://www.surfsense.com/pricing) and [downloads](https://www.surfsense.com/downloads) — plans, plugin licensing and installer files.',
          '[SurfSense privacy policy](https://www.surfsense.com/privacy) and [sunset page](https://www.surfsense.com/sunset) — data handling, outbound connections, export and import.',
          '[SurfSense on GitHub](https://github.com/MODSetter/SurfSense) and its [v2.2.2 release](https://github.com/MODSetter/SurfSense/releases) — source, license and release notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — a document-chat and RAG workspace with a built-in vector store.',
          '[PrivateGPT Review](/power-local-llm/privategpt-review) — an offline-by-design RAG project for air-gapped setups.',
          '[Khoj Review](/power-local-llm/khoj-ai-second-brain-review) — a personal AI second brain that syncs with Obsidian and Notion.',
          '[HilbertRaum Review](/power-local-llm/hilbertraum-review) — a portable desktop workspace for offline chat and document Q&A.',
          '[Local LLM Knowledge Retrieval Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — the category comparison for document and knowledge tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SurfSense Review: Open-Source Desktop NotebookLM Alternative',
      description:
        'SurfSense review: a free, open-source desktop app for cited research over your own files. Pricing, privacy claims and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/surfsense-review',
      inLanguage: 'en',
      datePublished: '2026-10-21',
      dateModified: '2026-10-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a private, open-source desktop app for chatting with their own documents' },
      about: [
        { '@type': 'Thing', name: 'SurfSense' },
        { '@type': 'Thing', name: 'Document chat' },
        { '@type': 'Thing', name: 'NotebookLM alternative' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/surfsense-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'SurfSense Review', item: 'https://promptquorum.com/power-local-llm/surfsense-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-de.webp',
    title: 'SurfSense-Rezension: Quelloffene Desktop-Alternative zu NotebookLM',
    seoTitle: 'SurfSense-Rezension: Quelloffene NotebookLM-Alternative',
    intro:
      'SurfSense ist eine quelloffene Desktop-App, die das Projekt als datenschutzorientierten KI-Agenten im Stil von NotebookLM für die eigenen Dokumente beschreibt. Sie ging aus einem gehosteten Webdienst hervor, den das Projekt eingestellt hat. Diese Rezension gibt Website, Datenschutzerklärung und GitHub-Release-Seite wieder, wie am 21. Oktober 2026 geprüft.',
    metaDescription:
      'SurfSense-Rezension: kostenloser, quelloffener Desktop-KI-Agent für Ihre Dokumente mit lokalen Modellen. Preise, Datenschutzangaben und offene Punkte.',
    twitterDescription:
      'SurfSense-Rezension: Desktop-App unter Apache-2.0, in der ein KI-Agent Ihre Dateien lokal durcharbeitet. Plugin-Preise, Datenschutzangaben und offene Fragen.',
    audience:
      'Menschen, die mit eigenen Dokumenten chatten möchten, ohne sie in die Cloud hochzuladen, und wissen müssen, was SurfSense kostet, was den Rechner verlässt und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SurfSense Rezension',
    targetKeywords: [
      'surfsense rezension',
      'open source notebooklm alternative',
      'private dokumenten chat desktop app',
      'lokaler ki recherche agent',
      'surfsense preise',
      'offline mit dokumenten chatten',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense (Version 2.2.2, veröffentlicht am 16. Oktober 2026) ist eine kostenlose, quelloffene Desktop-App, in der laut eigener Website ein KI-Agent Ihre Dokumente auf Ihrem Rechner recherchiert, umwandelt und bearbeitet, ohne Konto und mit auf der Festplatte gehaltenem Index.** Das Modell wählen Sie selbst, und Dokumente verlassen den Rechner nur, wenn Sie ein Remote-Modell nutzen. Jede Datenschutzangabe stammt vom Projekt; PromptQuorum hat weder die App noch ihren Netzwerkverkehr getestet.',
    quickAnswerTop: {
      de: {
        question: 'Ist SurfSense wirklich kostenlos und privat?',
        answer:
          'Die App und ihre Updates sind ohne Nutzungslimit kostenlos, und laut Datenschutzerklärung hat die Desktop-App kein Konto, keine Telemetrie und keine Absturzberichte. Ein Remote-Modellanbieter sähe dennoch Ihre Prompts und Dokumentauszüge, und die eigenen Web-Plugins des Projekts erfordern eine kostenpflichtige Lizenz.',
        bullets: [
          'Liest PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML und Bilder (OCR) sowie Audioaufnahmen.',
          'Kann PDFs zusammenführen, teilen und extrahieren sowie Podcasts, Mindmaps, Karteikarten und Quizze erzeugen.',
          'Funktioniert mit jeder OpenAI-kompatiblen API oder einem lokalen Modell.',
          'Bearbeitet Kopien Ihrer Dateien statt der Originale.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist SurfSense?', anchor: 'what-is-surfsense' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Falls Sie die gehostete Version genutzt haben', anchor: 'cloud-migration' },
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
            text: 'SurfSense ist eine Desktop-App unter Apache-2.0, die Ihre eigenen Dateien mit einem Modell Ihrer Wahl durchsucht, zitiert und bearbeitet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie, verweisen auf Dateien oder Ordner und ein Modell und stellen Fragen; laut Projekt bleiben Index und Dokumente auf Ihrer Festplatte.',
          },
        ],
        items: [
          'Pflege: v2.2.0, v2.2.1 und v2.2.2 erschienen am 9., 14. und 16. Oktober 2026, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Lizenz: Apache-2.0, der vollständige Quellcode liegt auf GitHub.',
          'Kosten: Die App ist kostenlos; kostenpflichtig sind nur die eigenen Web-Plugins des Projekts und eine Enterprise-Stufe.',
          'Gehostete Version: Für den früheren Cloud-Dienst war die Datenlöschung für den 18. Oktober 2026 angesetzt, die Desktop-App ist daher der einzige Weg.',
          'Hürde: Das Download-Formular verlangt eine E-Mail-Adresse, bevor es den Installer herausgibt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, Datenschutzerklärung, Abschaltungsseite und GitHub-Release-Seite von SurfSense, geprüft am 21. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder gemessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'Was ist SurfSense?',
        content: [
          '**SurfSense ist eine Desktop-App, in der Sie Dateien oder Ordner als Quellen hinzufügen und einen KI-Agenten bitten, deren Inhalt zu finden, zu zitieren, zu extrahieren, umzuwandeln oder zu bearbeiten.** Das Projekt nennt sie einen datenschutzorientierten Agenten im Stil von NotebookLM und stellt sie dem gehosteten NotebookLM von Google gegenüber.',
          'Sie ersetzt die frühere gehostete Web-App von SurfSense: Laut Abschaltungsseite ist das Projekt auf eine lokale Desktop-App umgestiegen und hat den Cloud-Dienst beendet. Das Repository ist [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) auf GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**SurfSense wird über die Download-Seite der Website installiert; die Seite nennt keinen mobilen Build, keinen Web-Build und keinen Build für Intel-Macs.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          { 'Plattform': 'Windows (x64)', 'Bezugsquelle': 'Installer SurfSense-Setup.exe von der [Download-Seite](https://www.surfsense.com/downloads)' },
          { 'Plattform': 'macOS (Apple Silicon)', 'Bezugsquelle': 'Disk-Image SurfSense-arm64.dmg (laut Release-Seite 1,26 GB)' },
          { 'Plattform': 'Linux (x64)', 'Bezugsquelle': 'SurfSense.AppImage oder SurfSense.deb von der [Download-Seite](https://www.surfsense.com/downloads)' },
          { 'Plattform': 'Website', 'Bezugsquelle': '[surfsense.com](https://www.surfsense.com)' },
          { 'Plattform': 'Quellcode', 'Bezugsquelle': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'Plattform': 'Datenschutzerklärung', 'Bezugsquelle': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (Stand 18. September 2026)' },
        ],
        note: 'Geprüfte Version: v2.2.2, laut GitHub-Release-Seite am 16. Oktober 2026 veröffentlicht; das ist das neueste Upstream-Update der App zum Zeitpunkt der Prüfung. Die Download-Seite nennt keine Systemanforderungen. Bekannte Probleme laut Release Notes: Der erste Start braucht freien Speicherplatz in etwa der Größe der Datenbankdatei, und ein Rollback auf 2.2.1 erfordert das manuelle Wiederherstellen einer Datenbanksicherung.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Die App und ihre Updates sind kostenlos; ein kostenpflichtiger Individual-Tarif ergänzt die eigenen Web-Plugins des Projekts.**',
        ],
        columns: ['Tarif', 'Enthalten', 'Preis (USD)'],
        rows: [
          { 'Tarif': 'Kostenlos', 'Enthalten': 'App und alle Updates, kein Konto und kein Nutzungslimit, dazu eine 30-Tage-Plugin-Lizenz gegen E-Mail-Adresse', 'Preis (USD)': '0 $' },
          { 'Tarif': 'Individual', 'Enthalten': 'Plugins für Google, YouTube, TikTok, Maps, Amazon, Walmart, Indeed, Web-Crawler, bevorzugter Support', 'Preis (USD)': '60 $ im ersten Jahr, danach 120 $/Jahr' },
          { 'Tarif': 'Enterprise', 'Enthalten': 'Selbst gehostet im eigenen Netzwerk, zentrale Steuerung, Audit-Protokoll, benannter Support', 'Preis (USD)': 'Individuell, jährliche Rechnung' },
        ],
        note: 'Die Preise stammen von der [Preisseite](https://www.surfsense.com/pricing), abgerufen am 21. Oktober 2026; die Seite nennt nur US-Dollar, daher wurde nichts umgerechnet. Plugins und MCP-Server von Drittanbietern brauchen keine Lizenz, und die Lizenz sperrt keine App-eigenen Funktionen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Reihenfolge auf der Website des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installer herunterladen',
            whyItMatters: 'Wählen Sie auf der [Download-Seite](https://www.surfsense.com/downloads) die Datei für Windows, macOS oder Linux.',
          },
          {
            title: 'Onboarding abschließen und ein Modell hinzufügen',
            whyItMatters: 'Verbinden Sie eine beliebige OpenAI-kompatible API oder ein lokales Modell. Bildfunktionen brauchen ein Bildmodell, und standardmäßig ist keines ausgewählt.',
          },
          {
            title: 'Quellen hinzufügen',
            whyItMatters: 'Ziehen Sie Dateien oder Ordner in den Quellenbereich.',
          },
          {
            title: 'Den Agenten fragen',
            whyItMatters: 'Bitten Sie ihn, den Inhalt Ihrer Quellen zu durchsuchen, zu extrahieren, umzuwandeln oder zu bearbeiten.',
          },
          {
            title: 'Optional Plugins hinzufügen',
            whyItMatters: 'Öffnen Sie Einstellungen › Plugins, um Web-Plugins oder MCP-Server hinzuzufügen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von der Website, aus den Release Notes oder der Datenschutzerklärung des Projekts.**',
        ],
        items: [
          '**Zitierte Recherche.** Antworten stützen sich auf Ihre Quellen und zitieren sie; seit 2.2.2 sind PDFs mit Textebene und Word-Dateien in Sekunden bereit, weil sie nicht mehr auf Docling warten.',
          '**Audio.** Aufnahmen lassen sich als Quellen hinzufügen und werden mit Spracherkennung auf dem Gerät transkribiert; das Chatfeld hat ein Mikrofon für Spracheingabe.',
          '**Plugins.** Unter Einstellungen › Plugins erweitern Web- und Plattform-Plugins (Suche, Crawling, Video- und Shopping-Seiten) den Agenten; sie brauchen Internetzugang und die unter Preise beschriebene Lizenz.',
          '**MCP.** MCP-Server von Drittanbietern (die Website nennt DeepWiki und Notion) lassen sich aus dem Plugin-Verzeichnis oder per URL hinzufügen und bleiben bis zur Aktivierung aus.',
          '**Tool-Berechtigungen.** Jedes Tool lässt sich auf „Immer erlaubt“, „Genehmigung nötig“ oder „Blockiert“ setzen.',
          '**Office-Dateien und Podcasts.** Die Office-Unterstützung über LibreOffice ist optional und wird in den Einstellungen aktiviert; Podcasts werden als MP3 gespeichert.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung hat die Desktop-App weder Konto noch Anmeldung, speichert Dokumente, Chats, Suchindex und Einstellungen als lokale Dateien auf Ihrem Rechner und sendet sie nie an SurfSense.** Sie ergänzt, die App habe keine Analysen, keine Nutzungserfassung und keine Absturzberichte.',
          'Die Erklärung nennt zwei weitere ausgehende Verbindungen, Update-Prüfungen bei GitHub und Modell-Downloads von Hugging Face, beide bis zur Aktivierung aus; Lizenzprüfungen laufen offline. Wenn Sie einen Remote-Modellanbieter konfigurieren, gehen Ihre Prompts und die relevanten Dokumentauszüge nach dessen eigener Richtlinie an diesen Anbieter. Die Website ist anders: Sie nutzt standardmäßig PostHog-Analysen ohne Einwilligungsbanner und beachtet weder Do-Not-Track- noch Global-Privacy-Control-Signale, und Stripe wickelt Zahlungen ab.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das Projekt stellt die App als offline und Air-Gap-fähig dar, doch PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft; es sind also Angaben des Projekts. Die eigenen Web-Plugins brauchen immer Internetzugang.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'Falls Sie die gehostete Version genutzt haben',
        content: [
          '**Die Abschaltungsseite des Projekts nannte den 18. Oktober 2026 als Tag, an dem der frühere Cloud-Dienst alle Daten löscht, und sagte, die Desktop-App ersetze ihn.** Wer einen Export besitzt, kann ihn wie folgt übernehmen.',
        ],
        items: [
          '**Inhalt des Exports.** Die ZIP-Datei enthält fertige Dokumente als Markdown, die Ordnerstruktur und Chat-Verläufe; originale Uploads, erzeugte Artefakte, Tool-Aufrufe, Agentenschritte und aktive Zitierlinks fehlen.',
          '**Import.** Öffnen Sie in der Desktop-App das Zahnrad unten in der linken Leiste, gehen Sie zu „Allgemein“, suchen Sie „Import from SurfSense cloud“, klicken Sie auf Upload und wählen Sie die ZIP-Datei; eine frische Installation zeigt auch auf dem leeren Arbeitsbereich eine Upload-Schaltfläche.',
          '**Nach dem Import.** Arbeitsbereiche, Ordner und Chat-Verläufe erscheinen, und die App indexiert die Dokumente auf Ihrem Rechner.',
          '**Frist verstrichen.** PromptQuorum konnte nicht bestätigen, ob ein Export noch möglich ist; prüfen Sie die [Abschaltungsseite](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die Recherche im Stil von NotebookLM ohne Datei-Upload wollen.** Laut Projekt bleiben Dokumente auf der Festplatte, sofern Sie kein Remote-Modell wählen.',
          '**Nutzer, die bereits ein lokales oder OpenAI-kompatibles Modell betreiben** und dafür eine Agenten-Oberfläche wünschen.',
          '**Tüftler, die den Code lesen oder bauen möchten** und ihn aus dem GitHub-Repository beziehen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxistest.** PromptQuorum hat die App nicht ausgeführt; Antwortqualität, Zitiergenauigkeit, Geschwindigkeit und die Dateibearbeitung durch den Agenten sind nicht bewertet.',
          '**Offline- und Telemetrie-Angaben.** Die Aussagen zu Air-Gap und fehlender Telemetrie wurden nicht anhand von Code oder Netzwerkverkehr geprüft.',
          '**Hardwarebedarf.** Die Quellen nennen kein Minimum an RAM, Speicherplatz oder GPU.',
          '**Selbst-Hosting.** Das Repository enthält einen Docker-Ordner, doch die geprüften Seiten nennen keine Schritte zum Selbst-Hosting; die Desktop-App ist daher der einzige dokumentierte kostenlose Weg.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[AnythingLLM](/de/power-local-llm/anythingllm-review)', 'Plattformen': 'Windows, macOS, Linux, Web', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Arbeitsbereich für Dokumenten-Chat mit eingebauter Vektordatenbank und vielen Modell-Backends' },
          { 'App': '[PrivateGPT](/de/power-local-llm/privategpt-review)', 'Plattformen': 'Windows, macOS, Linux (Web-UI, CLI)', 'Preis / Lizenz': 'Kostenlos / Apache 2.0', 'Hauptunterschied': 'Auf Offline-Betrieb ausgelegtes RAG für Air-Gap-Umgebungen, bedient im Terminal' },
          { 'App': '[Khoj](/de/power-local-llm/khoj-ai-second-brain-review)', 'Plattformen': 'Windows, macOS, Linux, Web', 'Preis / Lizenz': 'Kostenlos / AGPL 3.0', 'Hauptunterschied': 'Persönliches KI-„Second Brain“, das mit Obsidian und Notion synchronisiert' },
          { 'App': '[HilbertRaum](/de/power-local-llm/hilbertraum-review)', 'Plattformen': 'Windows, macOS (Apple Silicon), Linux', 'Preis / Lizenz': 'Kostenlos / GPL-3.0-or-later', 'Hauptunterschied': 'Portabler Desktop-Arbeitsbereich ohne Installation für Offline-Chat und Dokumenten-Q&A' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht SurfSense ein Konto?',
            a: 'Nein. Laut Erklärung hat die Desktop-App kein Konto und keine Anmeldung; als einziges persönliches Merkmal nennt sie die E-Mail-Adresse für das Download-Formular und die Testlizenz.',
          },
          {
            q: 'Kann ich es komplett offline betreiben?',
            a: 'Laut Projekt ja, sobald ein lokales Modell eingerichtet ist. Die Web-Plugins können offline nicht funktionieren, weil sie öffentliche Seiten lesen. PromptQuorum hat das nicht getestet.',
          },
          {
            q: 'Funktioniert es mit ChatGPT oder anderen Anbietern?',
            a: 'Das Projekt nennt jede OpenAI-kompatible API, und Version 2.2.2 ergänzt die Anmeldung mit einem ChatGPT-Plus- oder -Pro-Tarif. Weitere Anbieter werden in den geprüften Quellen nicht genannt.',
          },
          {
            q: 'Wie unterscheidet es sich von NotebookLM?',
            a: 'Laut Vergleichstabelle des Projekts unterstützt NotebookLM nur Gemini, während SurfSense jede OpenAI-kompatible API oder ein lokales Modell akzeptiert und offline laufen kann. PromptQuorum hat die aktuellen Funktionen von NotebookLM nicht geprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'SurfSense ist eine kostenlose Desktop-App unter Apache-2.0, die laut Projekt einen Dokumenten-Agenten auf dem eigenen Rechner mit einem Modell Ihrer Wahl betreibt, und sie wird aktiv gepflegt, mit drei Veröffentlichungen in der Woche vor dieser Prüfung. Dagegen stehen: Die Datenschutz- und Offline-Angaben sind hier nicht überprüft, es gibt keinen Build für Intel-Macs oder Mobilgeräte, die Plugins, die Webseiten lesen, kosten Geld, und die gehostete Version, aus der die App hervorging, ist weg. Sie eignet sich für Menschen, die einen privaten Arbeitsablauf im Stil von NotebookLM wollen und ein eigenes Modell anbinden mögen; wer ein länger etabliertes Werkzeug bevorzugt, kann [AnythingLLM](/de/power-local-llm/anythingllm-review) oder [PrivateGPT](/de/power-local-llm/privategpt-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[SurfSense-Website](https://www.surfsense.com) — Funktionen, Vergleichstabelle und Installationsschritte, geprüft am 21. Oktober 2026.',
          '[SurfSense-Preise](https://www.surfsense.com/pricing) und [Downloads](https://www.surfsense.com/downloads) — Tarife, Plugin-Lizenzierung und Installationsdateien.',
          '[SurfSense-Datenschutzerklärung](https://www.surfsense.com/privacy) und [Abschaltungsseite](https://www.surfsense.com/sunset) — Datenverarbeitung, ausgehende Verbindungen, Export und Import.',
          '[SurfSense auf GitHub](https://github.com/MODSetter/SurfSense) und das [Release v2.2.2](https://github.com/MODSetter/SurfSense/releases) — Quellcode, Lizenz und Release Notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — ein Arbeitsbereich für Dokumenten-Chat und RAG mit eingebauter Vektordatenbank.',
          '[PrivateGPT-Rezension](/de/power-local-llm/privategpt-review) — ein auf Offline-Betrieb ausgelegtes RAG-Projekt für Air-Gap-Umgebungen.',
          '[Khoj-Rezension](/de/power-local-llm/khoj-ai-second-brain-review) — ein persönliches KI-„Second Brain“, das mit Obsidian und Notion synchronisiert.',
          '[HilbertRaum-Rezension](/de/power-local-llm/hilbertraum-review) — ein portabler Desktop-Arbeitsbereich für Offline-Chat und Dokumenten-Q&A.',
          '[Lokale LLM-Wissensabruf-Tools im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) — der Kategorievergleich für Dokumenten- und Wissenswerkzeuge.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-es.webp',
    title: 'Reseña de SurfSense: alternativa de escritorio y código abierto a NotebookLM',
    seoTitle: 'Reseña de SurfSense: alternativa abierta a NotebookLM',
    intro:
      'SurfSense es una aplicación de escritorio de código abierto que el proyecto describe como un agente de IA centrado en la privacidad, al estilo de NotebookLM, para tus propios documentos. Surgió de un servicio web alojado que el proyecto ha cerrado. Esta reseña refleja su sitio web, su política de privacidad y su página de versiones en GitHub, según se comprobaron el 21 de octubre de 2026.',
    metaDescription:
      'Reseña de SurfSense: agente de IA de escritorio gratuito y abierto para tus documentos y modelos locales. Precios, privacidad y puntos sin verificar.',
    twitterDescription:
      'Reseña de SurfSense: app de escritorio con licencia Apache-2.0 en la que un agente de IA trabaja con tus archivos en local. Precios de plugins, privacidad y dudas abiertas.',
    audience:
      'Personas que quieren conversar con sus propios documentos sin subirlos a la nube y que necesitan saber qué cuesta SurfSense, qué sale del equipo y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de SurfSense',
    targetKeywords: [
      'reseña surfsense',
      'alternativa open source a notebooklm',
      'chat con documentos privado escritorio',
      'agente de investigación con ia local',
      'precios surfsense',
      'chatear con documentos sin conexión',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense (versión 2.2.2, publicada el 16 de octubre de 2026) es una aplicación de escritorio gratuita y de código abierto en la que, según su propio sitio, un agente de IA investiga, transforma y edita tus documentos en tu equipo, sin cuenta y con el índice guardado en el disco.** El modelo lo eliges tú, y los documentos solo salen del equipo si eliges uno remoto. Toda afirmación de privacidad procede del proyecto; PromptQuorum no ha probado la aplicación ni su tráfico de red.',
    quickAnswerTop: {
      es: {
        question: '¿Es SurfSense realmente gratuita y privada?',
        answer:
          'La aplicación y sus actualizaciones son gratuitas y sin límite de uso, y la política de privacidad dice que la app de escritorio no tiene cuenta, telemetría ni informes de fallos. Un proveedor de modelos remoto sí vería tus prompts y fragmentos de documentos, y los plugins web propios del proyecto requieren una licencia de pago.',
        bullets: [
          'Lee PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML e imágenes (OCR), además de grabaciones de audio.',
          'Puede unir, dividir y extraer PDF, y generar pódcasts, mapas mentales, tarjetas de estudio y cuestionarios.',
          'Funciona con cualquier API compatible con OpenAI o con un modelo local.',
          'Edita copias de tus archivos en lugar de los originales.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es SurfSense?', anchor: 'what-is-surfsense' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
      { label: 'Si usabas la versión alojada', anchor: 'cloud-migration' },
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
            text: 'SurfSense es una aplicación de escritorio con licencia Apache-2.0 que busca, cita y edita tus propios archivos con el modelo que elijas.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, la apuntas a archivos o carpetas y a un modelo, y haces preguntas; según el proyecto, el índice y tus documentos permanecen en tu disco.',
          },
        ],
        items: [
          'Mantenimiento: v2.2.0, v2.2.1 y v2.2.2 se publicaron el 9, el 14 y el 16 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: Apache-2.0, con todo el código fuente en GitHub.',
          'Coste: la aplicación es gratuita; solo son de pago los plugins web propios del proyecto y un nivel Enterprise.',
          'Versión alojada: el servicio en la nube anterior tenía prevista la eliminación de datos el 18 de octubre de 2026, de modo que la app de escritorio es la única vía.',
          'Requisito: el formulario de descarga pide una dirección de correo antes de entregar el instalador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la política de privacidad, la página de cierre y la página de versiones en GitHub de SurfSense, comprobados el 21 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la aplicación.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: '¿Qué es SurfSense?',
        content: [
          '**SurfSense es una aplicación de escritorio en la que añades archivos o carpetas como fuentes y le pides a un agente de IA que encuentre, cite, extraiga, transforme o edite su contenido.** El proyecto la describe como un agente centrado en la privacidad al estilo de NotebookLM y la contrapone al NotebookLM alojado de Google.',
          'Sustituye a la aplicación web alojada anterior de SurfSense: según su página de cierre, el proyecto pasó a una app de escritorio local y puso fin al servicio en la nube. El repositorio es [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) en GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**SurfSense se instala desde la página de descargas de su sitio web; la página no indica ninguna versión móvil, web ni para Mac Intel.**',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          { 'Plataforma': 'Windows (x64)', 'Dónde conseguirla': 'Instalador SurfSense-Setup.exe en la [página de descargas](https://www.surfsense.com/downloads)' },
          { 'Plataforma': 'macOS (Apple Silicon)', 'Dónde conseguirla': 'Imagen de disco SurfSense-arm64.dmg (1,26 GB según la página de versiones)' },
          { 'Plataforma': 'Linux (x64)', 'Dónde conseguirla': 'SurfSense.AppImage o SurfSense.deb en la [página de descargas](https://www.surfsense.com/downloads)' },
          { 'Plataforma': 'Sitio web', 'Dónde conseguirla': '[surfsense.com](https://www.surfsense.com)' },
          { 'Plataforma': 'Código fuente', 'Dónde conseguirla': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'Plataforma': 'Política de privacidad', 'Dónde conseguirla': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (actualizada el 18 de septiembre de 2026)' },
        ],
        note: 'Versión revisada: v2.2.2, publicada el 16 de octubre de 2026 según la página de versiones de GitHub, que es la última actualización de la app en el momento de la comprobación. La página de descargas no indica requisitos del sistema. Problemas conocidos según las notas de la versión: el primer inicio necesita espacio libre en disco de aproximadamente el tamaño del archivo de la base de datos, y volver a la 2.2.1 exige restaurar a mano una copia de seguridad de la base de datos.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**La aplicación y sus actualizaciones son gratuitas; un plan Individual de pago añade los plugins web propios del proyecto.**',
        ],
        columns: ['Plan', 'Qué incluye', 'Precio (USD)'],
        rows: [
          { 'Plan': 'Gratis', 'Qué incluye': 'App y actualizaciones, sin cuenta ni límite, más licencia de plugins de 30 días (correo)', 'Precio (USD)': '$0' },
          { 'Plan': 'Individual', 'Qué incluye': 'Plugins de Google, YouTube, TikTok, Maps, Amazon, Walmart, Indeed, rastreador web, soporte prioritario', 'Precio (USD)': '$60 el primer año, después $120/año' },
          { 'Plan': 'Enterprise', 'Qué incluye': 'Autoalojado en tu red, controles centrales, registro de auditoría, soporte con nombre asignado', 'Precio (USD)': 'A medida, facturación anual' },
        ],
        note: 'Los precios proceden de la [página de precios](https://www.surfsense.com/pricing), consultada el 21 de octubre de 2026; la página solo indica dólares estadounidenses, así que no se ha convertido nada. Los plugins y servidores MCP de terceros no necesitan licencia, y la licencia no bloquea ninguna función propia de la app.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el orden del sitio del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Descarga el instalador',
            whyItMatters: 'Elige el archivo para Windows, macOS o Linux en la [página de descargas](https://www.surfsense.com/downloads).',
          },
          {
            title: 'Completa la configuración inicial y añade un modelo',
            whyItMatters: 'Conecta cualquier API compatible con OpenAI o un modelo local. Las funciones de imagen necesitan un modelo de imagen y no hay ninguno seleccionado por defecto.',
          },
          {
            title: 'Añade fuentes',
            whyItMatters: 'Arrastra archivos o carpetas al panel de fuentes.',
          },
          {
            title: 'Pregunta al agente',
            whyItMatters: 'Pídele que busque, extraiga, transforme o edite lo que hay en tus fuentes.',
          },
          {
            title: 'Añade plugins si quieres',
            whyItMatters: 'Abre Ajustes › Plugins para añadir plugins web o servidores MCP.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede del sitio web del proyecto, de las notas de versión o de la política de privacidad.**',
        ],
        items: [
          '**Investigación con citas.** Las respuestas se apoyan en tus fuentes y las citan; desde la 2.2.2, los PDF con capa de texto y los archivos de Word están listos en segundos porque ya no esperan a Docling.',
          '**Audio.** Las grabaciones se pueden añadir como fuentes y se transcriben con reconocimiento de voz en el dispositivo; el cuadro de chat tiene un micrófono para la entrada de voz.',
          '**Plugins.** En Ajustes › Plugins, plugins web y de plataformas (búsqueda, rastreo, vídeo y tiendas) amplían el agente; necesitan acceso a internet y la licencia descrita en Precios.',
          '**MCP.** Se pueden añadir servidores MCP de terceros (el sitio menciona DeepWiki y Notion) desde el registro de plugins o por URL, y permanecen desactivados hasta que los activas.',
          '**Permisos de herramientas.** Cada herramienta puede ajustarse a Siempre permitida, Requiere aprobación o Bloqueada.',
          '**Archivos de Office y pódcasts.** La compatibilidad con Office mediante LibreOffice es opcional y se activa en Ajustes; los pódcasts se guardan como MP3.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**La política de privacidad dice que la app de escritorio no tiene cuenta ni inicio de sesión, guarda documentos, chats, índice de búsqueda y ajustes como archivos locales en tu equipo y nunca los envía a SurfSense.** Añade que la app no tiene analítica, seguimiento de uso ni informes de fallos.',
          'La política menciona otras dos conexiones salientes, las comprobaciones de actualizaciones en GitHub y las descargas de modelos desde Hugging Face, ambas desactivadas hasta que las actives; las comprobaciones de licencia se hacen sin conexión. Si configuras un proveedor de modelos remoto, tus prompts y los fragmentos relevantes de documentos van a ese proveedor según su propia política. El sitio web es distinto: usa analítica de PostHog por defecto, sin banner de consentimiento, y no respeta las señales Do Not Track ni Global Privacy Control; Stripe gestiona los pagos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El proyecto presenta la app como capaz de funcionar sin conexión y aislada de la red, pero PromptQuorum no ha auditado el código ni el tráfico de red, así que son afirmaciones del proyecto. Sus plugins web propios siempre necesitan acceso a internet.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'Si usabas la versión alojada',
        content: [
          '**La página de cierre del proyecto decía que el servicio en la nube anterior eliminaría todos los datos el 18 de octubre de 2026 y que la app de escritorio lo sustituye.** Quien conserve una exportación puede traerla así.',
        ],
        items: [
          '**Contenido de la exportación.** El ZIP contiene documentos listos en Markdown, la estructura de carpetas y los hilos de chat; no incluye las cargas originales, los artefactos generados, las llamadas a herramientas, los pasos del agente ni los enlaces de citas activos.',
          '**Importación.** En la app de escritorio, abre el icono del engranaje en la parte inferior de la barra izquierda, ve a General, busca «Import from SurfSense cloud», pulsa Upload y elige el ZIP; una instalación nueva también muestra un botón Upload en la pantalla de espacio de trabajo vacío.',
          '**Después de importar.** Aparecen los espacios de trabajo, las carpetas y los hilos de chat, y la app indexa los documentos en tu equipo.',
          '**Plazo vencido.** PromptQuorum no pudo confirmar si todavía es posible exportar; consulta la [página de cierre](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren investigar al estilo de NotebookLM sin subir archivos.** Según el proyecto, los documentos permanecen en el disco salvo que elijas un modelo remoto.',
          '**Usuarios que ya ejecutan un modelo local o compatible con OpenAI** y quieren una interfaz de agente para él.',
          '**Aficionados que quieren leer o compilar el código** desde el repositorio de GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de las respuestas, la precisión de las citas, la velocidad ni las ediciones de archivos del agente.',
          '**Afirmaciones sin conexión y de telemetría.** Las afirmaciones de aislamiento de red y de ausencia de telemetría no se contrastaron con el código ni con el tráfico de red.',
          '**Requisitos de hardware.** Las fuentes no indican un mínimo de RAM, disco ni GPU.',
          '**Autoalojamiento.** El repositorio tiene una carpeta docker, pero las páginas revisadas no dan pasos de autoalojamiento, por lo que la app de escritorio es la única vía gratuita documentada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[AnythingLLM](/es/power-local-llm/anythingllm-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Espacio de trabajo de chat con documentos, con base de datos vectorial integrada y muchos backends de modelos' },
          { 'App': '[PrivateGPT](/es/power-local-llm/privategpt-review)', 'Plataformas': 'Windows, macOS, Linux (interfaz web, CLI)', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'RAG pensado para funcionar sin conexión en entornos aislados, que se maneja desde la terminal' },
          { 'App': '[Khoj](/es/power-local-llm/khoj-ai-second-brain-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Precio / licencia': 'Gratis / AGPL 3.0', 'Diferencia clave': 'Segundo cerebro de IA personal que se sincroniza con Obsidian y Notion' },
          { 'App': '[HilbertRaum](/es/power-local-llm/hilbertraum-review)', 'Plataformas': 'Windows, macOS (Apple Silicon), Linux', 'Precio / licencia': 'Gratis / GPL-3.0-or-later', 'Diferencia clave': 'Espacio de trabajo de escritorio portátil, sin instalación, para chat sin conexión y preguntas sobre documentos' },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesita SurfSense una cuenta?',
            a: 'No. Según la política, la app de escritorio no tiene cuenta ni inicio de sesión; el único dato personal que menciona es el correo usado en el formulario de descarga y para la licencia de prueba.',
          },
          {
            q: '¿Puedo usarla totalmente sin conexión?',
            a: 'Según el proyecto, sí una vez configurado un modelo local. Los plugins web no pueden funcionar sin conexión porque leen páginas públicas. PromptQuorum no lo ha probado.',
          },
          {
            q: '¿Funciona con ChatGPT u otros proveedores?',
            a: 'El proyecto menciona cualquier API compatible con OpenAI, y la versión 2.2.2 añade el inicio de sesión con un plan ChatGPT Plus o Pro. Las fuentes revisadas no mencionan otros proveedores.',
          },
          {
            q: '¿En qué se diferencia de NotebookLM?',
            a: 'Según la tabla comparativa del propio proyecto, NotebookLM solo admite Gemini, mientras que SurfSense acepta cualquier API compatible con OpenAI o un modelo local y puede funcionar sin conexión. PromptQuorum no ha comprobado las funciones actuales de NotebookLM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'SurfSense es una app de escritorio gratuita (Apache-2.0) que, según el proyecto, mantiene un agente de documentos en tu propio equipo con el modelo que elijas, y se mantiene activamente, con tres versiones en la semana previa a esta comprobación. En contra, sus afirmaciones de privacidad y de funcionamiento sin conexión no están verificadas aquí, no hay versión para Mac Intel ni para móvil, los plugins que leen sitios web cuestan dinero y la versión alojada de la que surgió ya no existe. Encaja con quien quiere un flujo de trabajo privado al estilo de NotebookLM y no le importa conectar su propio modelo; quien prefiera una herramienta más consolidada puede comparar [AnythingLLM](/es/power-local-llm/anythingllm-review) o [PrivateGPT](/es/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de SurfSense](https://www.surfsense.com) — funciones, tabla comparativa y pasos de instalación, comprobados el 21 de octubre de 2026.',
          '[Precios de SurfSense](https://www.surfsense.com/pricing) y [descargas](https://www.surfsense.com/downloads) — planes, licencias de plugins y archivos de instalación.',
          '[Política de privacidad de SurfSense](https://www.surfsense.com/privacy) y [página de cierre](https://www.surfsense.com/sunset) — tratamiento de datos, conexiones salientes, exportación e importación.',
          '[SurfSense en GitHub](https://github.com/MODSetter/SurfSense) y su [versión v2.2.2](https://github.com/MODSetter/SurfSense/releases) — código fuente, licencia y notas de la versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — un espacio de trabajo de chat con documentos y RAG con base de datos vectorial integrada.',
          '[Reseña de PrivateGPT](/es/power-local-llm/privategpt-review) — un proyecto RAG pensado para funcionar sin conexión en entornos aislados.',
          '[Reseña de Khoj](/es/power-local-llm/khoj-ai-second-brain-review) — un segundo cerebro de IA personal que se sincroniza con Obsidian y Notion.',
          '[Reseña de HilbertRaum](/es/power-local-llm/hilbertraum-review) — un espacio de trabajo de escritorio portátil para chat sin conexión y preguntas sobre documentos.',
          '[Herramientas locales de recuperación de conocimiento comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparativa de la categoría de herramientas de documentos y conocimiento.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-fr.webp',
    title: 'Test de SurfSense : alternative open source à NotebookLM sur ordinateur',
    seoTitle: 'Test de SurfSense : alternative open source à NotebookLM',
    intro:
      'SurfSense est une application de bureau open source que le projet décrit comme un agent IA axé sur la confidentialité, dans le style de NotebookLM, pour vos propres documents. Elle est issue d’un service web hébergé que le projet a fermé. Ce test reflète son site, sa politique de confidentialité et sa page de versions GitHub, consultés le 21 octobre 2026.',
    metaDescription:
      'Test de SurfSense : agent IA de bureau gratuit et open source pour vos documents, avec modèles locaux. Tarifs, confidentialité et points non vérifiés.',
    twitterDescription:
      'Test de SurfSense : application de bureau sous licence Apache-2.0 où un agent IA travaille localement sur vos fichiers. Tarifs des plugins, confidentialité et zones d’ombre.',
    audience:
      'Les personnes qui veulent dialoguer avec leurs propres documents sans les envoyer dans le cloud et qui doivent savoir ce que coûte SurfSense, ce qui quitte l’ordinateur et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test SurfSense',
    targetKeywords: [
      'test surfsense',
      'alternative open source à notebooklm',
      'chat avec documents privé application de bureau',
      'agent de recherche ia local',
      'tarifs surfsense',
      'discuter avec ses documents hors ligne',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense (version 2.2.2, publiée le 16 octobre 2026) est une application de bureau gratuite et open source où, selon son propre site, un agent IA analyse, transforme et modifie vos documents sur votre machine, sans compte et avec l’index conservé sur le disque.** Vous choisissez vous-même le modèle, et les documents ne quittent l’ordinateur que si vous retenez un modèle distant. Toutes les déclarations de confidentialité viennent du projet ; PromptQuorum n’a testé ni l’application ni son trafic réseau.',
    quickAnswerTop: {
      fr: {
        question: 'SurfSense est-elle vraiment gratuite et privée ?',
        answer:
          'L’application et ses mises à jour sont gratuites, sans plafond d’usage, et la politique de confidentialité indique que l’application de bureau n’a ni compte, ni télémétrie, ni rapports de plantage. Un fournisseur de modèle distant verrait tout de même vos requêtes et des extraits de documents, et les plugins web du projet exigent une licence payante.',
        bullets: [
          'Lit PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML et images (OCR), ainsi que des enregistrements audio.',
          'Peut fusionner, scinder et extraire des PDF, et générer podcasts, cartes mentales, fiches et quiz.',
          'Fonctionne avec toute API compatible OpenAI ou un modèle local.',
          'Modifie des copies de vos fichiers, pas les originaux.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que SurfSense ?', anchor: 'what-is-surfsense' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'Si vous utilisiez la version hébergée', anchor: 'cloud-migration' },
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
            text: 'SurfSense est une application de bureau sous licence Apache-2.0 qui cherche, cite et modifie vos propres fichiers avec le modèle de votre choix.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez, l’orientez vers des fichiers ou dossiers et un modèle, puis posez vos questions ; selon le projet, l’index et vos documents restent sur votre disque.',
          },
        ],
        items: [
          'Maintenance : les versions 2.2.0, 2.2.1 et 2.2.2 sont sorties les 9, 14 et 16 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Licence : Apache-2.0, avec l’intégralité du code source sur GitHub.',
          'Coût : l’application est gratuite ; seuls les plugins web du projet et un niveau Enterprise sont payants.',
          'Version hébergée : l’ancien service cloud devait supprimer ses données le 18 octobre 2026, l’application de bureau est donc la seule voie.',
          'Condition : le formulaire de téléchargement demande une adresse e-mail avant de fournir l’installeur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la politique de confidentialité, la page de fermeture et la page de versions GitHub de SurfSense, consultés le 21 octobre 2026. PromptQuorum n’a ni installé, ni testé, ni mesuré l’application.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'Qu’est-ce que SurfSense ?',
        content: [
          '**SurfSense est une application de bureau où vous ajoutez des fichiers ou dossiers comme sources et demandez à un agent IA d’en trouver, citer, extraire, transformer ou modifier le contenu.** Le projet la présente comme un agent axé sur la confidentialité, dans le style de NotebookLM, et la positionne face au NotebookLM hébergé de Google.',
          'Elle remplace l’ancienne application web hébergée de SurfSense : selon sa page de fermeture, le projet est passé à une application de bureau locale et a mis fin au service cloud. Le dépôt est [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) sur GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**SurfSense s’installe depuis la page de téléchargement de son site ; la page ne mentionne aucune version mobile, web ni pour Mac Intel.**',
        ],
        columns: ['Plateforme', 'Où l’obtenir'],
        rows: [
          { 'Plateforme': 'Windows (x64)', 'Où l’obtenir': 'Installeur SurfSense-Setup.exe sur la [page de téléchargement](https://www.surfsense.com/downloads)' },
          { 'Plateforme': 'macOS (Apple Silicon)', 'Où l’obtenir': 'Image disque SurfSense-arm64.dmg (1,26 Go selon la page de versions)' },
          { 'Plateforme': 'Linux (x64)', 'Où l’obtenir': 'SurfSense.AppImage ou SurfSense.deb sur la [page de téléchargement](https://www.surfsense.com/downloads)' },
          { 'Plateforme': 'Site web', 'Où l’obtenir': '[surfsense.com](https://www.surfsense.com)' },
          { 'Plateforme': 'Code source', 'Où l’obtenir': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'Plateforme': 'Politique de confidentialité', 'Où l’obtenir': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (mise à jour le 18 septembre 2026)' },
        ],
        note: 'Version testée : v2.2.2, publiée le 16 octobre 2026 selon la page de versions GitHub, soit la dernière mise à jour de l’application au moment de la vérification. La page de téléchargement n’indique aucune configuration requise. Problèmes connus d’après les notes de version : le premier démarrage exige un espace disque libre à peu près égal à la taille du fichier de base de données, et revenir à la 2.2.1 oblige à restaurer manuellement une sauvegarde de la base.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**L’application et ses mises à jour sont gratuites ; un forfait Individual payant ajoute les plugins web du projet.**',
        ],
        columns: ['Forfait', 'Contenu', 'Prix (USD)'],
        rows: [
          { 'Forfait': 'Gratuit', 'Contenu': 'App et mises à jour, sans compte ni plafond, plus licence plugins de 30 jours (e-mail)', 'Prix (USD)': '0 $' },
          { 'Forfait': 'Individual', 'Contenu': 'Plugins Google, YouTube, TikTok, Maps, Amazon, Walmart, Indeed, crawler web, support prioritaire', 'Prix (USD)': '60 $ la première année, puis 120 $/an' },
          { 'Forfait': 'Enterprise', 'Contenu': 'Déploiement auto-hébergé dans votre réseau, contrôles centralisés, journal d’audit, support nominatif', 'Prix (USD)': 'Sur mesure, facturation annuelle' },
        ],
        note: 'Les prix viennent de la [page des tarifs](https://www.surfsense.com/pricing), consultée le 21 octobre 2026 ; elle n’indique que des dollars américains, rien n’a donc été converti. Les plugins et serveurs MCP tiers n’exigent aucune licence, et la licence ne verrouille aucune fonction propre à l’application.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent l’ordre du site du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger l’installeur',
            whyItMatters: 'Choisissez le fichier pour Windows, macOS ou Linux sur la [page de téléchargement](https://www.surfsense.com/downloads).',
          },
          {
            title: 'Terminer l’intégration et ajouter un modèle',
            whyItMatters: 'Connectez une API compatible OpenAI ou un modèle local. Les fonctions d’image exigent un modèle d’image, et aucun n’est sélectionné par défaut.',
          },
          {
            title: 'Ajouter des sources',
            whyItMatters: 'Glissez des fichiers ou dossiers dans le panneau des sources.',
          },
          {
            title: 'Interroger l’agent',
            whyItMatters: 'Demandez-lui de chercher, extraire, transformer ou modifier le contenu de vos sources.',
          },
          {
            title: 'Ajouter des plugins (facultatif)',
            whyItMatters: 'Ouvrez Paramètres › Plugins pour ajouter des plugins web ou des serveurs MCP.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous vient du site du projet, de ses notes de version ou de sa politique de confidentialité.**',
        ],
        items: [
          '**Recherche avec citations.** Les réponses s’appuient sur vos sources et les citent ; depuis la 2.2.2, les PDF avec couche texte et les fichiers Word sont prêts en quelques secondes, car ils n’attendent plus Docling.',
          '**Audio.** Les enregistrements peuvent être ajoutés comme sources et sont transcrits par reconnaissance vocale sur l’appareil ; la zone de discussion offre un micro pour la saisie vocale.',
          '**Plugins.** Sous Paramètres › Plugins, des plugins web et de plateformes (recherche, exploration, sites vidéo et marchands) étendent l’agent ; ils exigent un accès internet et la licence décrite dans Tarifs.',
          '**MCP.** Des serveurs MCP tiers (le site cite DeepWiki et Notion) peuvent être ajoutés depuis le registre de plugins ou par URL et restent désactivés tant que vous ne les activez pas.',
          '**Autorisations des outils.** Chaque outil peut être réglé sur Toujours autorisé, Approbation requise ou Bloqué.',
          '**Fichiers Office et podcasts.** La prise en charge d’Office via LibreOffice est facultative et s’active dans les paramètres ; les podcasts sont enregistrés en MP3.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**La politique de confidentialité indique que l’application de bureau n’a ni compte ni connexion, conserve documents, discussions, index de recherche et paramètres sous forme de fichiers locaux et ne les envoie jamais à SurfSense.** Elle ajoute que l’application n’a ni analyses, ni suivi d’usage, ni rapports de plantage.',
          'La politique cite deux autres connexions sortantes, les vérifications de mises à jour auprès de GitHub et les téléchargements de modèles depuis Hugging Face, toutes deux désactivées tant que vous ne les activez pas ; les vérifications de licence se font hors ligne. Si vous configurez un fournisseur de modèle distant, vos requêtes et les extraits pertinents de documents lui sont transmis selon sa propre politique. Le site web est différent : il utilise PostHog par défaut, sans bannière de consentement, et ne respecte ni Do Not Track ni Global Privacy Control ; Stripe gère les paiements.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le projet présente l’application comme capable de fonctionner hors ligne et en environnement isolé, mais PromptQuorum n’a audité ni le code ni le trafic réseau ; ce sont donc des déclarations du projet. Ses plugins web exigent toujours un accès internet.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'Si vous utilisiez la version hébergée',
        content: [
          '**La page de fermeture du projet indiquait que l’ancien service cloud supprimerait toutes les données le 18 octobre 2026 et que l’application de bureau le remplace.** Quiconque détient un export peut le reprendre ainsi.',
        ],
        items: [
          '**Contenu de l’export.** Le ZIP contient des documents prêts en Markdown, l’arborescence des dossiers et les fils de discussion ; il n’inclut ni les fichiers d’origine, ni les artefacts générés, ni les appels d’outils, ni les étapes de l’agent, ni les liens de citation actifs.',
          '**Importation.** Dans l’application de bureau, ouvrez l’icône d’engrenage en bas de la barre de gauche, allez dans Général, repérez « Import from SurfSense cloud », cliquez sur Upload et choisissez le ZIP ; une installation neuve affiche aussi un bouton Upload sur l’écran d’espace de travail vide.',
          '**Après l’importation.** Espaces de travail, dossiers et fils de discussion apparaissent, et l’application indexe les documents sur votre machine.',
          '**Échéance dépassée.** PromptQuorum n’a pas pu confirmer si l’export est encore possible ; consultez la [page de fermeture](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Ceux qui veulent une recherche à la NotebookLM sans envoyer de fichiers.** Selon le projet, les documents restent sur le disque, sauf si vous choisissez un modèle distant.',
          '**Les utilisateurs qui exécutent déjà un modèle local ou compatible OpenAI** et veulent une interface d’agent pour celui-ci.',
          '**Les bricoleurs qui veulent lire ou compiler le code** depuis le dépôt GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité à l’usage.** PromptQuorum n’a pas exécuté l’application ; qualité des réponses, exactitude des citations, vitesse et modifications de fichiers par l’agent ne sont donc pas évaluées.',
          '**Déclarations hors ligne et télémétrie.** Les affirmations d’isolement réseau et d’absence de télémétrie n’ont pas été confrontées au code ni au trafic réseau.',
          '**Besoins matériels.** Les sources n’indiquent aucun minimum de RAM, de disque ou de GPU.',
          '**Auto-hébergement.** Le dépôt contient un dossier docker, mais les pages consultées ne donnent aucune étape d’auto-hébergement ; l’application de bureau est donc la seule voie gratuite documentée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[AnythingLLM](/fr/power-local-llm/anythingllm-review)', 'Plateformes': 'Windows, macOS, Linux, web', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Espace de travail de discussion avec documents, base vectorielle intégrée et nombreux moteurs de modèles' },
          { 'Application': '[PrivateGPT](/fr/power-local-llm/privategpt-review)', 'Plateformes': 'Windows, macOS, Linux (interface web, CLI)', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'RAG conçu pour le hors ligne et les environnements isolés, utilisé depuis un terminal' },
          { 'Application': '[Khoj](/fr/power-local-llm/khoj-ai-second-brain-review)', 'Plateformes': 'Windows, macOS, Linux, web', 'Prix / licence': 'Gratuit / AGPL 3.0', 'Différence clé': 'Second cerveau IA personnel synchronisé avec Obsidian et Notion' },
          { 'Application': '[HilbertRaum](/fr/power-local-llm/hilbertraum-review)', 'Plateformes': 'Windows, macOS (Apple Silicon), Linux', 'Prix / licence': 'Gratuit / GPL-3.0-or-later', 'Différence clé': 'Espace de travail de bureau portable, sans installation, pour discuter hors ligne et interroger des documents' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'SurfSense exige-t-elle un compte ?',
            a: 'Non. Selon la politique, l’application de bureau n’a ni compte ni connexion ; la seule donnée personnelle citée est l’adresse e-mail utilisée pour le formulaire de téléchargement et la licence d’essai.',
          },
          {
            q: 'Peut-on l’utiliser entièrement hors ligne ?',
            a: 'Selon le projet, oui une fois un modèle local configuré. Les plugins web ne peuvent pas fonctionner hors ligne puisqu’ils lisent des pages publiques. PromptQuorum ne l’a pas testé.',
          },
          {
            q: 'Fonctionne-t-elle avec ChatGPT ou d’autres fournisseurs ?',
            a: 'Le projet cite toute API compatible OpenAI, et la version 2.2.2 ajoute la connexion avec un abonnement ChatGPT Plus ou Pro. Les sources consultées ne citent aucun autre fournisseur.',
          },
          {
            q: 'En quoi diffère-t-elle de NotebookLM ?',
            a: 'D’après le tableau comparatif du projet, NotebookLM ne prend en charge que Gemini, alors que SurfSense accepte toute API compatible OpenAI ou un modèle local et peut fonctionner hors ligne. PromptQuorum n’a pas vérifié les fonctions actuelles de NotebookLM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'SurfSense est une application de bureau gratuite sous licence Apache-2.0 qui, selon le projet, garde un agent documentaire sur votre propre machine avec le modèle de votre choix ; elle est activement maintenue, avec trois versions la semaine précédant cette vérification. En contrepartie, ses déclarations de confidentialité et de fonctionnement hors ligne ne sont pas vérifiées ici, il n’existe ni version pour Mac Intel ni version mobile, les plugins qui lisent le web sont payants et la version hébergée dont elle est issue a disparu. Elle convient à ceux qui veulent un flux de travail privé à la NotebookLM et connecter leur propre modèle ; ceux qui préfèrent un outil plus établi peuvent comparer [AnythingLLM](/fr/power-local-llm/anythingllm-review) ou [PrivateGPT](/fr/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de SurfSense](https://www.surfsense.com) — fonctions, tableau comparatif et étapes d’installation, consultés le 21 octobre 2026.',
          '[Tarifs de SurfSense](https://www.surfsense.com/pricing) et [téléchargements](https://www.surfsense.com/downloads) — forfaits, licences de plugins et fichiers d’installation.',
          '[Politique de confidentialité de SurfSense](https://www.surfsense.com/privacy) et [page de fermeture](https://www.surfsense.com/sunset) — traitement des données, connexions sortantes, export et import.',
          '[SurfSense sur GitHub](https://github.com/MODSetter/SurfSense) et sa [version v2.2.2](https://github.com/MODSetter/SurfSense/releases) — code source, licence et notes de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’AnythingLLM](/fr/power-local-llm/anythingllm-review) — un espace de travail de discussion avec documents et RAG, doté d’une base vectorielle intégrée.',
          '[Test de PrivateGPT](/fr/power-local-llm/privategpt-review) — un projet RAG conçu pour le hors ligne et les environnements isolés.',
          '[Test de Khoj](/fr/power-local-llm/khoj-ai-second-brain-review) — un second cerveau IA personnel synchronisé avec Obsidian et Notion.',
          '[Test de HilbertRaum](/fr/power-local-llm/hilbertraum-review) — un espace de travail de bureau portable pour discuter hors ligne et interroger des documents.',
          '[Outils locaux de recherche de connaissances comparés](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — le comparatif de la catégorie des outils de documents et de connaissances.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-ja.webp',
    title: 'SurfSenseレビュー：オープンソースのデスクトップ版NotebookLM代替',
    seoTitle: 'SurfSenseレビュー：OSSのNotebookLM代替',
    intro:
      'SurfSenseは、自分の文書を扱うプライバシー重視のNotebookLM型AIエージェントとして、プロジェクトが紹介しているオープンソースのデスクトップアプリです。プロジェクトが終了したホスト型Webサービスから発展しました。本レビューは、2026年10月21日に確認した公式サイト、プライバシーポリシー、GitHubのリリースページに基づきます。',
    metaDescription:
      'SurfSenseのレビュー：自分の文書を扱える無料のオープンソース・デスクトップAIエージェント。ローカルモデル対応。料金、プライバシーの主張、未確認の点を解説します。',
    twitterDescription:
      'SurfSenseのレビュー：AIエージェントが自分のPC上で文書を調査・編集する、Apache-2.0のデスクトップアプリ。プラグイン料金、プライバシーの主張、未確認の点を解説します。',
    audience:
      '文書をクラウドへアップロードせずにAIと対話したい方のうち、SurfSenseの費用、PCから外へ出るデータ、情報源で確認できない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SurfSense レビュー',
    targetKeywords: [
      'surfsense レビュー',
      'notebooklm 代替 オープンソース',
      '文書チャット デスクトップ プライベート',
      'ローカル AI リサーチ エージェント',
      'surfsense 料金',
      'オフライン 文書 チャット',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense（バージョン2.2.2、2026年10月16日公開）は、公式サイトによれば、AIエージェントが自分のPC上で文書の調査・変換・編集を行う、無料のオープンソース・デスクトップアプリです。アカウントは不要で、インデックスはディスクに保存されます。** モデルは自分で選べ、リモートモデルを選んだ場合にのみ文書がPCの外へ出ます。プライバシーに関する主張はすべてプロジェクト側のものであり、PromptQuorumはアプリもネットワーク通信も検証していません。',
    quickAnswerTop: {
      ja: {
        question: 'SurfSenseは本当に無料でプライベートですか？',
        answer:
          'アプリと更新は使用量の上限なしで無料で、プライバシーポリシーによればデスクトップアプリにはアカウント、テレメトリ、クラッシュレポートがありません。ただしリモートのモデル提供元にはプロンプトと文書の抜粋が渡り、プロジェクト独自のWebプラグインには有料ライセンスが必要です。',
        bullets: [
          'PDF、Word、Excel、PowerPoint、CSV、Markdown、HTML、画像（OCR）、音声録音を読み込めます。',
          'PDFの結合・分割・抽出のほか、ポッドキャスト、マインドマップ、フラッシュカード、クイズを生成できます。',
          'OpenAI互換のAPIまたはローカルモデルで動作します。',
          '元のファイルではなく、そのコピーを編集します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'SurfSenseとは', anchor: 'what-is-surfsense' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金', anchor: 'pricing' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: 'ホスト版を使っていた方へ', anchor: 'cloud-migration' },
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
            text: 'SurfSenseは、AIエージェントが自分の文書を、選んだモデルで検索・引用・編集する、Apache-2.0の無料デスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'インストールし、ファイルやフォルダとモデルを指定して質問します。プロジェクトによれば、インデックスと文書はディスクに残ります。',
          },
        ],
        items: [
          '保守状況：v2.2.0、v2.2.1、v2.2.2が2026年10月9日、14日、16日に公開されており、放置プロジェクトの警告は該当しません。',
          'ライセンス：Apache-2.0で、ソースコードはGitHubで全公開されています。',
          '費用：アプリは無料で、有料なのはプロジェクト独自のWebプラグインとEnterpriseプランのみです。',
          'ホスト版：以前のクラウドサービスは2026年10月18日にデータ削除の予定で、デスクトップアプリが唯一の手段です。',
          '入手条件：ダウンロードフォームは、インストーラーを渡す前にメールアドレスの入力を求めます。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月21日に確認したSurfSenseの公式サイト、プライバシーポリシー、終了案内ページ、GitHubリリースページに基づきます。PromptQuorumはアプリのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'SurfSenseとは',
        content: [
          '**SurfSenseは、ファイルやフォルダをソースとして追加し、AIエージェントにその内容の検索、引用、抽出、変換、編集を依頼するデスクトップアプリです。** プロジェクトはこれをプライバシー重視のNotebookLM型エージェントと位置づけ、Googleのホスト型NotebookLMと対比しています。',
          '以前のホスト型Webアプリの後継で、終了案内ページによれば、プロジェクトはローカルのデスクトップアプリへ移行し、クラウドサービスを終了しました。リポジトリはGitHubの[MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**SurfSenseは公式サイトのダウンロードページからインストールします。同ページにモバイル版、Web版、Intel Mac版の記載はありません。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'Windows（x64）', '入手先': '[ダウンロードページ](https://www.surfsense.com/downloads)のインストーラー SurfSense-Setup.exe' },
          { 'プラットフォーム': 'macOS（Apple Silicon）', '入手先': 'ディスクイメージ SurfSense-arm64.dmg（リリースページによれば1.26 GB）' },
          { 'プラットフォーム': 'Linux（x64）', '入手先': '[ダウンロードページ](https://www.surfsense.com/downloads)の SurfSense.AppImage または SurfSense.deb' },
          { 'プラットフォーム': '公式サイト', '入手先': '[surfsense.com](https://www.surfsense.com)' },
          { 'プラットフォーム': 'ソースコード', '入手先': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[surfsense.com/privacy](https://www.surfsense.com/privacy)（2026年9月18日更新）' },
        ],
        note: '確認したバージョン：v2.2.2。GitHubのリリースページによれば2026年10月16日公開で、確認時点でのアプリの最新アップデートです。ダウンロードページにシステム要件の記載はありません。リリースノートの既知の問題：初回起動にはデータベースファイルと同程度の空きディスク容量が必要で、2.2.1へ戻すにはデータベースのバックアップを手動で復元する必要があります。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**アプリと更新は無料で、有料のIndividualプランがプロジェクト独自のWebプラグインを追加します。**',
        ],
        columns: ['プラン', '内容', '価格（USD）'],
        rows: [
          { 'プラン': '無料', '内容': 'アプリとすべての更新（アカウント・使用量の上限なし）と、メールアドレスで得られる30日間のプラグインライセンス', '価格（USD）': '$0' },
          { 'プラン': 'Individual', '内容': 'Google Search、YouTube、TikTok、Google Maps、Amazon、Walmart、Indeed用プラグイン、Webクローラー、優先サポート', '価格（USD）': '初年度$60、以降は年$120' },
          { 'プラン': 'Enterprise', '内容': 'ネットワーク内でのセルフホスト導入、集中管理、監査ログ、担当者指名のサポート', '価格（USD）': '個別見積もり、年次請求' },
        ],
        note: '価格は[料金ページ](https://www.surfsense.com/pricing)で2026年10月21日に確認したものです。同ページは米ドル表記のみのため、換算はしていません。サードパーティ製プラグインとMCPサーバーにライセンスは不要で、ライセンスがアプリ自体の機能を制限することもありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのサイトの順序に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストーラーをダウンロードする',
            whyItMatters: '[ダウンロードページ](https://www.surfsense.com/downloads)でWindows、macOS、Linux用のファイルを選びます。',
          },
          {
            title: '初期設定を終えてモデルを追加する',
            whyItMatters: 'OpenAI互換のAPIまたはローカルモデルを接続します。画像機能には画像モデルが必要で、初期状態では何も選択されていません。',
          },
          {
            title: 'ソースを追加する',
            whyItMatters: 'ファイルやフォルダをソースパネルにドロップします。',
          },
          {
            title: 'エージェントに質問する',
            whyItMatters: 'ソースの内容について、検索、抽出、変換、編集を依頼します。',
          },
          {
            title: '必要に応じてプラグインを追加する',
            whyItMatters: '「設定 › プラグイン」でWebプラグインやMCPサーバーを追加します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、プロジェクトの公式サイト、リリースノート、プライバシーポリシーに基づきます。**',
        ],
        items: [
          '**引用付きのリサーチ。** 回答はソースに基づき引用されます。2.2.2以降、テキスト層のあるPDFとWordファイルはDoclingを待たずに数秒で使える状態になります。',
          '**音声。** 録音をソースとして追加でき、端末上の音声認識で文字起こしされます。チャット欄にはマイクによる音声入力もあります。',
          '**プラグイン。** 「設定 › プラグイン」で、Web・プラットフォーム向けプラグイン（検索、クロール、動画・ショッピングサイト）によりエージェントを拡張できます。インターネット接続と、料金の項で説明したライセンスが必要です。',
          '**MCP。** サードパーティ製MCPサーバー（サイトではDeepWikiとNotionを例示）をプラグインレジストリまたはURLで追加でき、有効にするまでオフのままです。',
          '**ツールの権限。** 各ツールを「常に許可」「承認が必要」「ブロック」から選べます。',
          '**Officeファイルとポッドキャスト。** LibreOfficeによるOffice対応は任意で、設定でオンにします。ポッドキャストはMP3で保存されます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プライバシーポリシーによれば、デスクトップアプリにはアカウントやサインインがなく、文書、チャット、検索インデックス、設定はPC上のローカルファイルとして保存され、SurfSenseには一切送信されません。** また、分析、利用状況の追跡、クラッシュレポートもないとされています。',
          'ポリシーが挙げるその他の外部通信は、GitHubへの更新確認とHugging Faceからのモデルダウンロードで、どちらも有効にするまでオフです。ライセンス確認はオフラインで行われます。リモートのモデル提供元を設定した場合、プロンプトと関連する文書の抜粋は、その提供元のポリシーのもとで送信されます。公式サイトは別で、既定でPostHogの分析を使い、同意バナーはなく、Do Not TrackとGlobal Privacy Controlの信号にも対応していません。決済はStripeが処理します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プロジェクトはアプリがオフライン・エアギャップ環境で動作すると説明していますが、PromptQuorumはコードもネットワーク通信も監査していないため、これらはプロジェクト側の主張です。独自のWebプラグインは常にインターネット接続が必要です。',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'ホスト版を使っていた方へ',
        content: [
          '**プロジェクトの終了案内ページは、以前のクラウドサービスが2026年10月18日にすべてのデータを削除し、デスクトップアプリがそれに代わると説明していました。** エクスポートを持っている場合は、次の手順で移行できます。',
        ],
        items: [
          '**エクスポートの内容。** ZIPには、完成した文書（Markdown）、フォルダ構成、チャットスレッドが含まれます。元のアップロードファイル、生成物、ツール呼び出し、エージェントの手順、有効な引用リンクは含まれません。',
          '**インポート。** デスクトップアプリの左レール下部にある歯車アイコンを開き、「一般」で「Import from SurfSense cloud」を探し、Uploadをクリックしてzipを選びます。新規インストールでは、空のワークスペース画面にもUploadボタンが表示されます。',
          '**インポート後。** ワークスペース、フォルダ、チャットスレッドが表示され、アプリがPC上で文書をインデックス化します。',
          '**期限は経過済み。** エクスポートがまだ可能かどうかはPromptQuorumでは確認できませんでした。[終了案内ページ](https://www.surfsense.com/sunset)でご確認ください。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ファイルをアップロードせずにNotebookLM型のリサーチをしたい人。** プロジェクトによると、リモートモデルを選ばない限り、文書はディスクに残ります。',
          '**すでにローカルまたはOpenAI互換のモデルを動かしていて、そのエージェント用フロントエンドが欲しい人。**',
          '**GitHubのリポジトリからコードを読んだりビルドしたりしたい人。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。** PromptQuorumはアプリを実行していないため、回答の質、引用の正確さ、速度、エージェントによるファイル編集は評価していません。',
          '**オフラインとテレメトリの主張。** エアギャップ対応とテレメトリなしという説明は、コードやネットワーク通信と照合していません。',
          '**必要なハードウェア。** 情報源には、RAM、ディスク、GPUの最低要件の記載がありません。',
          '**セルフホスト。** リポジトリにはdockerフォルダがありますが、確認したページにセルフホストの手順はなく、文書化された無料の手段はデスクトップアプリのみです。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)', '対応プラットフォーム': 'Windows、macOS、Linux、Web', '価格／ライセンス': '無料／MIT', '主な違い': 'ベクトルストア内蔵で多くのモデルバックエンドに対応した、文書チャット用ワークスペース' },
          { 'アプリ': '[PrivateGPT](/ja/power-local-llm/privategpt-review)', '対応プラットフォーム': 'Windows、macOS、Linux（Web UI、CLI）', '価格／ライセンス': '無料／Apache 2.0', '主な違い': 'エアギャップ環境を想定したオフライン前提のRAGで、ターミナルから操作' },
          { 'アプリ': '[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)', '対応プラットフォーム': 'Windows、macOS、Linux、Web', '価格／ライセンス': '無料／AGPL 3.0', '主な違い': 'ObsidianやNotionと同期するパーソナルAIセカンドブレイン' },
          { 'アプリ': '[HilbertRaum](/ja/power-local-llm/hilbertraum-review)', '対応プラットフォーム': 'Windows、macOS（Apple Silicon）、Linux', '価格／ライセンス': '無料／GPL-3.0-or-later', '主な違い': 'インストール不要で持ち運べる、オフラインチャットと文書Q&A用のデスクトップ作業環境' },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'SurfSenseにアカウントは必要ですか？',
            a: 'いいえ。ポリシーによればデスクトップアプリにアカウントやサインインはなく、挙げられている個人情報は、ダウンロードフォームと試用ライセンスに使うメールアドレスのみです。',
          },
          {
            q: '完全にオフラインで使えますか？',
            a: 'プロジェクトによれば、ローカルモデルを設定すれば可能です。Webプラグインは公開ページを読み込むため、オフラインでは動作しません。PromptQuorumは検証していません。',
          },
          {
            q: 'ChatGPTなど他の提供元でも使えますか？',
            a: 'プロジェクトはOpenAI互換のAPIに対応するとしており、2.2.2ではChatGPT PlusまたはProのプランでのサインインが加わりました。確認した情報源に、他の提供元の記載はありません。',
          },
          {
            q: 'NotebookLMとの違いは何ですか？',
            a: 'プロジェクト自身の比較表によれば、NotebookLMはGeminiのみに対応するのに対し、SurfSenseはOpenAI互換のAPIまたはローカルモデルを使え、オフラインでも動作します。NotebookLMの現在の機能はPromptQuorumでは確認していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'SurfSenseは、プロジェクトによれば、AIエージェントが自分のPC上で、選んだモデルを使って文書を調査・編集できる、Apache-2.0の無料デスクトップアプリです。今回の確認の前の1週間に3回リリースされており、活発に更新されています。一方で、プライバシーとオフラインの主張は本レビューでは未検証で、Intel Mac版とモバイル版はなく、Webプラグインは有料ライセンスが必要で、前身のホスト版はすでにありません。プライベートなNotebookLM型のワークフローを望み、自分でモデルを接続することに抵抗がない人に向きます。実績の長いツールを好む場合は、[AnythingLLM](/ja/power-local-llm/anythingllm-review)や[PrivateGPT](/ja/power-local-llm/privategpt-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[SurfSense公式サイト](https://www.surfsense.com)：機能、比較表、インストール手順。2026年10月21日確認。',
          '[SurfSenseの料金](https://www.surfsense.com/pricing)と[ダウンロード](https://www.surfsense.com/downloads)：プラン、プラグインのライセンス、インストーラーのファイル。',
          '[SurfSenseのプライバシーポリシー](https://www.surfsense.com/privacy)と[終了案内ページ](https://www.surfsense.com/sunset)：データの扱い、外部通信、エクスポートとインポート。',
          '[GitHubのSurfSense](https://github.com/MODSetter/SurfSense)と[v2.2.2リリース](https://github.com/MODSetter/SurfSense/releases)：ソースコード、ライセンス、リリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review)：ベクトルストア内蔵の文書チャット／RAGワークスペース。',
          '[PrivateGPTレビュー](/ja/power-local-llm/privategpt-review)：エアギャップ環境を想定した、オフライン前提のRAGプロジェクト。',
          '[Khojレビュー](/ja/power-local-llm/khoj-ai-second-brain-review)：ObsidianやNotionと同期するパーソナルAIセカンドブレイン。',
          '[HilbertRaumレビュー](/ja/power-local-llm/hilbertraum-review)：オフラインチャットと文書Q&A用の、持ち運べるデスクトップ作業環境。',
          '[ローカルLLMの知識検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared)：文書・ナレッジ系ツールのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-pt.webp',
    title: 'Análise do SurfSense: alternativa de código aberto ao NotebookLM para desktop',
    seoTitle: 'Análise do SurfSense: alternativa aberta ao NotebookLM',
    intro:
      'O SurfSense é um aplicativo de desktop de código aberto que o projeto descreve como um agente de IA voltado à privacidade, no estilo do NotebookLM, para os seus próprios documentos. Ele surgiu de um serviço web hospedado que o projeto encerrou. Esta análise reflete o site, a política de privacidade e a página de versões do GitHub, conforme verificados em 21 de outubro de 2026.',
    metaDescription:
      'Análise do SurfSense: agente de IA de desktop gratuito e aberto para seus documentos, com modelos locais. Preços, privacidade e o que não verificamos.',
    twitterDescription:
      'Análise do SurfSense: app de desktop com licença Apache-2.0 em que um agente de IA trabalha com seus arquivos localmente. Preços de plugins, privacidade e dúvidas em aberto.',
    audience:
      'Pessoas que querem conversar com os próprios documentos sem enviá-los para a nuvem e que precisam saber quanto o SurfSense custa, o que sai do computador e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do SurfSense',
    targetKeywords: [
      'análise surfsense',
      'alternativa open source ao notebooklm',
      'chat com documentos privado desktop',
      'agente de pesquisa com ia local',
      'preços surfsense',
      'conversar com documentos offline',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**O SurfSense (versão 2.2.2, lançada em 16 de outubro de 2026) é um aplicativo de desktop gratuito e de código aberto em que, segundo o próprio site, um agente de IA pesquisa, transforma e edita seus documentos no seu computador, sem conta e com o índice guardado no disco.** Você escolhe o modelo, e os documentos só saem do computador se você optar por um remoto. Toda afirmação de privacidade vem do projeto; a PromptQuorum não testou o aplicativo nem o tráfego de rede.',
    quickAnswerTop: {
      pt: {
        question: 'O SurfSense é mesmo gratuito e privado?',
        answer:
          'O aplicativo e as atualizações são gratuitos, sem limite de uso, e a política de privacidade diz que o app de desktop não tem conta, telemetria nem relatórios de falhas. Um provedor de modelo remoto ainda veria seus prompts e trechos de documentos, e os plugins web do próprio projeto exigem uma licença paga.',
        bullets: [
          'Lê PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML e imagens (OCR), além de gravações de áudio.',
          'Pode mesclar, dividir e extrair PDFs e gerar podcasts, mapas mentais, flashcards e questionários.',
          'Funciona com qualquer API compatível com a OpenAI ou com um modelo local.',
          'Edita cópias dos seus arquivos, não os originais.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o SurfSense?', anchor: 'what-is-surfsense' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
      { label: 'Se você usava a versão hospedada', anchor: 'cloud-migration' },
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
            text: 'O SurfSense é um aplicativo de desktop com licença Apache-2.0 que pesquisa, cita e edita seus próprios arquivos com o modelo que você escolher.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala, aponta para arquivos ou pastas e para um modelo, e faz perguntas; segundo o projeto, o índice e seus documentos ficam no seu disco.',
          },
        ],
        items: [
          'Manutenção: as versões 2.2.0, 2.2.1 e 2.2.2 foram publicadas em 9, 14 e 16 de outubro de 2026, então não se aplica aviso de projeto abandonado.',
          'Licença: Apache-2.0, com todo o código-fonte no GitHub.',
          'Custo: o aplicativo é gratuito; só os plugins web do projeto e um nível Enterprise são pagos.',
          'Versão hospedada: o serviço em nuvem anterior tinha a exclusão de dados prevista para 18 de outubro de 2026, então o app de desktop é o único caminho.',
          'Exigência: o formulário de download pede um endereço de e-mail antes de entregar o instalador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na política de privacidade, na página de encerramento e na página de versões do GitHub do SurfSense, verificados em 21 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o aplicativo.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'O que é o SurfSense?',
        content: [
          '**O SurfSense é um aplicativo de desktop em que você adiciona arquivos ou pastas como fontes e pede a um agente de IA que encontre, cite, extraia, transforme ou edite o que há neles.** O projeto o descreve como um agente voltado à privacidade, no estilo do NotebookLM, e o contrapõe ao NotebookLM hospedado do Google.',
          'Ele substitui o aplicativo web hospedado anterior do SurfSense: segundo a página de encerramento, o projeto migrou para um app de desktop local e encerrou o serviço em nuvem. O repositório é [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) no GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O SurfSense é instalado a partir da página de downloads do site; a página não lista versão para celular, web ou Mac Intel.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          { 'Plataforma': 'Windows (x64)', 'Onde obter': 'Instalador SurfSense-Setup.exe na [página de downloads](https://www.surfsense.com/downloads)' },
          { 'Plataforma': 'macOS (Apple Silicon)', 'Onde obter': 'Imagem de disco SurfSense-arm64.dmg (1,26 GB segundo a página de versões)' },
          { 'Plataforma': 'Linux (x64)', 'Onde obter': 'SurfSense.AppImage ou SurfSense.deb na [página de downloads](https://www.surfsense.com/downloads)' },
          { 'Plataforma': 'Site', 'Onde obter': '[surfsense.com](https://www.surfsense.com)' },
          { 'Plataforma': 'Código-fonte', 'Onde obter': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'Plataforma': 'Política de privacidade', 'Onde obter': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (atualizada em 18 de setembro de 2026)' },
        ],
        note: 'Versão analisada: v2.2.2, publicada em 16 de outubro de 2026 segundo a página de versões do GitHub, que é a atualização mais recente do app no momento da verificação. A página de downloads não lista requisitos de sistema. Problemas conhecidos nas notas da versão: a primeira inicialização precisa de espaço livre em disco aproximadamente do tamanho do arquivo do banco de dados, e voltar para a 2.2.1 exige restaurar manualmente um backup do banco de dados.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O aplicativo e as atualizações são gratuitos; um plano Individual pago acrescenta os plugins web do projeto.**',
        ],
        columns: ['Plano', 'O que inclui', 'Preço (USD)'],
        rows: [
          { 'Plano': 'Grátis', 'O que inclui': 'App e atualizações, sem conta nem limite, mais licença de plugins de 30 dias (e-mail)', 'Preço (USD)': '$0' },
          { 'Plano': 'Individual', 'O que inclui': 'Plugins Google, YouTube, TikTok, Maps, Amazon, Walmart, Indeed, rastreador web, suporte prioritário', 'Preço (USD)': '$60 no primeiro ano, depois $120/ano' },
          { 'Plano': 'Enterprise', 'O que inclui': 'Auto-hospedado na sua rede, controles centrais, registro de auditoria, suporte nomeado', 'Preço (USD)': 'Sob medida, cobrança anual' },
        ],
        note: 'Os preços vêm da [página de preços](https://www.surfsense.com/pricing), consultada em 21 de outubro de 2026; a página informa apenas dólares americanos, então nada foi convertido. Plugins e servidores MCP de terceiros não exigem licença, e a licença não bloqueia nenhum recurso do próprio app.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a ordem do site do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o instalador',
            whyItMatters: 'Escolha o arquivo para Windows, macOS ou Linux na [página de downloads](https://www.surfsense.com/downloads).',
          },
          {
            title: 'Conclua a configuração inicial e adicione um modelo',
            whyItMatters: 'Conecte qualquer API compatível com a OpenAI ou um modelo local. Os recursos de imagem exigem um modelo de imagem, e nenhum vem selecionado por padrão.',
          },
          {
            title: 'Adicione fontes',
            whyItMatters: 'Arraste arquivos ou pastas para o painel de fontes.',
          },
          {
            title: 'Pergunte ao agente',
            whyItMatters: 'Peça que ele pesquise, extraia, transforme ou edite o que há nas suas fontes.',
          },
          {
            title: 'Adicione plugins, se quiser',
            whyItMatters: 'Abra Configurações › Plugins para adicionar plugins web ou servidores MCP.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site do projeto, das notas de versão ou da política de privacidade.**',
        ],
        items: [
          '**Pesquisa com citações.** As respostas se baseiam nas suas fontes e as citam; desde a 2.2.2, PDFs com camada de texto e arquivos do Word ficam prontos em segundos porque não esperam mais pelo Docling.',
          '**Áudio.** Gravações podem ser adicionadas como fontes e são transcritas com reconhecimento de fala no dispositivo; a caixa de chat tem um microfone para entrada por voz.',
          '**Plugins.** Em Configurações › Plugins, plugins web e de plataformas (busca, rastreamento, sites de vídeo e de compras) ampliam o agente; eles precisam de acesso à internet e da licença descrita em Preços.',
          '**MCP.** Servidores MCP de terceiros (o site cita DeepWiki e Notion) podem ser adicionados pelo registro de plugins ou por URL e ficam desligados até você ativá-los.',
          '**Permissões de ferramentas.** Cada ferramenta pode ser definida como Sempre permitida, Requer aprovação ou Bloqueada.',
          '**Arquivos do Office e podcasts.** O suporte ao Office via LibreOffice é opcional e ativado em Configurações; os podcasts são salvos como MP3.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**A política de privacidade diz que o app de desktop não tem conta nem login, guarda documentos, chats, índice de busca e configurações como arquivos locais no seu computador e nunca os envia ao SurfSense.** Acrescenta que o app não tem análise, rastreamento de uso nem relatórios de falhas.',
          'A política cita outras duas conexões de saída, verificações de atualização no GitHub e downloads de modelos do Hugging Face, ambas desligadas até você ativá-las; as verificações de licença são feitas offline. Se você configurar um provedor de modelo remoto, seus prompts e os trechos relevantes dos documentos vão para esse provedor, conforme a política dele. O site é diferente: usa análise do PostHog por padrão, sem banner de consentimento, e não respeita os sinais Do Not Track nem Global Privacy Control; a Stripe cuida dos pagamentos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O projeto apresenta o app como capaz de funcionar offline e isolado da rede, mas a PromptQuorum não auditou o código nem o tráfego de rede, então são afirmações do projeto. Os plugins web próprios sempre precisam de acesso à internet.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'Se você usava a versão hospedada',
        content: [
          '**A página de encerramento do projeto dizia que o serviço em nuvem anterior excluiria todos os dados em 18 de outubro de 2026 e que o app de desktop o substitui.** Quem tem uma exportação pode trazê-la assim.',
        ],
        items: [
          '**Conteúdo da exportação.** O ZIP traz documentos prontos em Markdown, a estrutura de pastas e os tópicos de chat; não inclui uploads originais, artefatos gerados, chamadas de ferramentas, etapas do agente nem links de citação ativos.',
          '**Importação.** No app de desktop, abra o ícone de engrenagem na parte inferior da barra esquerda, vá em Geral, encontre «Import from SurfSense cloud», clique em Upload e escolha o ZIP; uma instalação nova também mostra um botão Upload na tela de espaço de trabalho vazio.',
          '**Depois da importação.** Espaços de trabalho, pastas e tópicos de chat aparecem, e o app indexa os documentos no seu computador.',
          '**Prazo encerrado.** A PromptQuorum não conseguiu confirmar se ainda é possível exportar; consulte a [página de encerramento](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem quer pesquisa no estilo do NotebookLM sem enviar arquivos.** Segundo o projeto, os documentos ficam no disco, a menos que você escolha um modelo remoto.',
          '**Usuários que já executam um modelo local ou compatível com a OpenAI** e querem uma interface de agente para ele.',
          '**Entusiastas que querem ler ou compilar o código** a partir do repositório do GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade na prática.** A PromptQuorum não executou o app, então qualidade das respostas, precisão das citações, velocidade e edições de arquivos pelo agente não foram avaliadas.',
          '**Afirmações de uso offline e telemetria.** As afirmações de isolamento de rede e de ausência de telemetria não foram conferidas com o código nem com o tráfego de rede.',
          '**Requisitos de hardware.** As fontes não indicam mínimo de RAM, disco ou GPU.',
          '**Auto-hospedagem.** O repositório tem uma pasta docker, mas as páginas consultadas não trazem passos de auto-hospedagem, então o app de desktop é o único caminho gratuito documentado.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[AnythingLLM](/pt/power-local-llm/anythingllm-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Espaço de trabalho de chat com documentos, com banco vetorial integrado e vários backends de modelos' },
          { 'App': '[PrivateGPT](/pt/power-local-llm/privategpt-review)', 'Plataformas': 'Windows, macOS, Linux (interface web, CLI)', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'RAG pensado para uso offline em ambientes isolados, operado pelo terminal' },
          { 'App': '[Khoj](/pt/power-local-llm/khoj-ai-second-brain-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Preço / licença': 'Grátis / AGPL 3.0', 'Diferença principal': 'Segundo cérebro de IA pessoal que sincroniza com Obsidian e Notion' },
          { 'App': '[HilbertRaum](/pt/power-local-llm/hilbertraum-review)', 'Plataformas': 'Windows, macOS (Apple Silicon), Linux', 'Preço / licença': 'Grátis / GPL-3.0-or-later', 'Diferença principal': 'Espaço de trabalho de desktop portátil, sem instalação, para chat offline e perguntas sobre documentos' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O SurfSense exige uma conta?',
            a: 'Não. Segundo a política, o app de desktop não tem conta nem login; o único dado pessoal citado é o e-mail usado no formulário de download e na licença de teste.',
          },
          {
            q: 'Posso usá-lo totalmente offline?',
            a: 'Segundo o projeto, sim, depois de configurar um modelo local. Os plugins web não funcionam offline, pois leem páginas públicas. A PromptQuorum não testou isso.',
          },
          {
            q: 'Funciona com o ChatGPT ou outros provedores?',
            a: 'O projeto cita qualquer API compatível com a OpenAI, e a versão 2.2.2 acrescenta o login com um plano ChatGPT Plus ou Pro. As fontes consultadas não citam outros provedores.',
          },
          {
            q: 'Como ele difere do NotebookLM?',
            a: 'Segundo a tabela comparativa do próprio projeto, o NotebookLM aceita apenas o Gemini, enquanto o SurfSense aceita qualquer API compatível com a OpenAI ou um modelo local e pode funcionar offline. A PromptQuorum não verificou os recursos atuais do NotebookLM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O SurfSense é um aplicativo de desktop gratuito (Apache-2.0) que, segundo o projeto, mantém um agente de documentos no seu próprio computador com o modelo que você escolher, e é mantido ativamente, com três versões na semana anterior a esta verificação. Em contrapartida, as afirmações de privacidade e de uso offline não foram verificadas aqui, não há versão para Mac Intel nem para celular, os plugins que leem sites custam dinheiro e a versão hospedada de que ele surgiu acabou. Serve a quem quer um fluxo de trabalho privado no estilo do NotebookLM e não se importa em conectar o próprio modelo; quem prefere uma ferramenta mais consolidada pode comparar [AnythingLLM](/pt/power-local-llm/anythingllm-review) ou [PrivateGPT](/pt/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do SurfSense](https://www.surfsense.com) — recursos, tabela comparativa e passos de instalação, verificados em 21 de outubro de 2026.',
          '[Preços do SurfSense](https://www.surfsense.com/pricing) e [downloads](https://www.surfsense.com/downloads) — planos, licenciamento de plugins e arquivos de instalação.',
          '[Política de privacidade do SurfSense](https://www.surfsense.com/privacy) e [página de encerramento](https://www.surfsense.com/sunset) — tratamento de dados, conexões de saída, exportação e importação.',
          '[SurfSense no GitHub](https://github.com/MODSetter/SurfSense) e sua [versão v2.2.2](https://github.com/MODSetter/SurfSense/releases) — código-fonte, licença e notas da versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um espaço de trabalho de chat com documentos e RAG, com banco vetorial integrado.',
          '[Análise do PrivateGPT](/pt/power-local-llm/privategpt-review) — um projeto de RAG pensado para uso offline em ambientes isolados.',
          '[Análise do Khoj](/pt/power-local-llm/khoj-ai-second-brain-review) — um segundo cérebro de IA pessoal que sincroniza com Obsidian e Notion.',
          '[Análise do HilbertRaum](/pt/power-local-llm/hilbertraum-review) — um espaço de trabalho de desktop portátil para chat offline e perguntas sobre documentos.',
          '[Ferramentas locais de recuperação de conhecimento comparadas](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — a comparação da categoria de ferramentas de documentos e conhecimento.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-ar.webp',
    title: 'مراجعة SurfSense: بديل مفتوح المصدر لـ NotebookLM لسطح المكتب',
    seoTitle: 'مراجعة SurfSense: بديل مفتوح المصدر لـ NotebookLM',
    intro:
      'SurfSense تطبيق مفتوح المصدر لسطح المكتب يصفه المشروع بأنه وكيل ذكاء اصطناعي يركّز على الخصوصية على غرار NotebookLM لمستنداتك الخاصة. نشأ من خدمة ويب مستضافة أوقفها المشروع. تعكس هذه المراجعة موقعه وسياسة الخصوصية وصفحة الإصدارات على GitHub كما جرى التحقق منها في 21 أكتوبر 2026.',
    metaDescription:
      'مراجعة SurfSense: وكيل ذكاء اصطناعي مجاني ومفتوح المصدر لسطح المكتب لمستنداتك مع دعم النماذج المحلية. الأسعار وادعاءات الخصوصية وما لم نتمكن من التحقق منه.',
    twitterDescription:
      'مراجعة SurfSense: تطبيق سطح مكتب برخصة Apache-2.0 يبحث فيه وكيل ذكاء اصطناعي في مستنداتك ويحرّرها على جهازك. أسعار الإضافات وادعاءات الخصوصية والأسئلة المفتوحة.',
    audience:
      'من يريدون الدردشة مع مستنداتهم دون رفعها إلى السحابة، ويحتاجون إلى معرفة تكلفة SurfSense وما يغادر الجهاز وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة SurfSense',
    targetKeywords: [
      'مراجعة surfsense',
      'بديل notebooklm مفتوح المصدر',
      'دردشة خاصة مع المستندات لسطح المكتب',
      'وكيل بحث بالذكاء الاصطناعي محلي',
      'أسعار surfsense',
      'الدردشة مع المستندات دون اتصال',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense (الإصدار 2.2.2، صدر في 16 أكتوبر 2026) تطبيق مجاني ومفتوح المصدر لسطح المكتب يتيح، بحسب موقعه الرسمي، لوكيل ذكاء اصطناعي أن يبحث في مستنداتك ويحوّلها ويحرّرها على جهازك، دون حساب ومع بقاء الفهرس على القرص.** تختار النموذج بنفسك، ولا تغادر المستندات الجهاز إلا إذا اخترت نموذجًا بعيدًا. كل ادعاءات الخصوصية مصدرها المشروع؛ ولم تختبر PromptQuorum التطبيق ولا حركة الشبكة.',
    quickAnswerTop: {
      ar: {
        question: 'هل SurfSense مجاني وخاص فعلًا؟',
        answer:
          'التطبيق وتحديثاته مجانيان دون حد للاستخدام، وتقول سياسة الخصوصية إن تطبيق سطح المكتب لا يملك حسابًا ولا قياسًا عن بُعد ولا تقارير أعطال. ومع ذلك سيرى مزوّد النموذج البعيد مطالباتك ومقتطفات من مستنداتك، وتتطلب إضافات الويب الخاصة بالمشروع رخصة مدفوعة.',
        bullets: [
          'يقرأ ملفات PDF وWord وExcel وPowerPoint وCSV وMarkdown وHTML والصور (OCR) إضافة إلى التسجيلات الصوتية.',
          'يمكنه دمج ملفات PDF وتقسيمها واستخراج أجزاء منها، وإنشاء بودكاست وخرائط ذهنية وبطاقات تعليمية واختبارات.',
          'يعمل مع أي واجهة API متوافقة مع OpenAI أو مع نموذج محلي.',
          'يحرّر نسخًا من ملفاتك لا الأصول.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو SurfSense؟', anchor: 'what-is-surfsense' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'إذا كنت تستخدم النسخة المستضافة', anchor: 'cloud-migration' },
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
            text: 'SurfSense تطبيق مجاني لسطح المكتب برخصة Apache-2.0 يبحث فيه وكيل ذكاء اصطناعي في مستنداتك ويقتبس منها ويحرّرها بالنموذج الذي تختاره.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتحدّد له ملفات أو مجلدات ونموذجًا ثم تطرح أسئلتك؛ وبحسب المشروع يبقى الفهرس ومستنداتك على قرصك.',
          },
        ],
        items: [
          'الصيانة: صدرت الإصدارات 2.2.0 و2.2.1 و2.2.2 في 9 و14 و16 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المهجور.',
          'الرخصة: Apache-2.0، والشيفرة المصدرية كاملة على GitHub.',
          'التكلفة: التطبيق مجاني؛ المدفوع فقط إضافات الويب الخاصة بالمشروع ومستوى Enterprise.',
          'النسخة المستضافة: كان من المقرر حذف بيانات خدمة السحابة السابقة في 18 أكتوبر 2026، لذا فإن تطبيق سطح المكتب هو السبيل الوحيد.',
          'الشرط: يطلب نموذج التنزيل عنوان بريد إلكتروني قبل تسليم المثبّت.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع SurfSense وسياسة الخصوصية وصفحة الإيقاف وصفحة الإصدارات على GitHub، وقد جرى التحقق منها في 21 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'ما هو SurfSense؟',
        content: [
          '**SurfSense تطبيق لسطح المكتب تضيف فيه ملفات أو مجلدات كمصادر ثم تطلب من وكيل ذكاء اصطناعي أن يجد محتواها ويقتبس منه ويستخرجه ويحوّله أو يحرّره.** يصفه المشروع بأنه وكيل يركّز على الخصوصية على غرار NotebookLM، ويقارنه بخدمة NotebookLM المستضافة من Google.',
          'وهو يحل محل تطبيق الويب المستضاف السابق لـ SurfSense: فبحسب صفحة الإيقاف انتقل المشروع إلى تطبيق محلي لسطح المكتب وأنهى خدمة السحابة. المستودع هو [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) على GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت SurfSense من صفحة التنزيلات في موقعه؛ ولا تذكر الصفحة نسخة للجوال أو للويب أو لأجهزة Mac بمعالج Intel.**',
        ],
        columns: ['المنصة', 'مصدر الحصول عليه'],
        rows: [
          { 'المنصة': 'Windows (x64)', 'مصدر الحصول عليه': 'المثبّت SurfSense-Setup.exe من [صفحة التنزيلات](https://www.surfsense.com/downloads)' },
          { 'المنصة': 'macOS (Apple Silicon)', 'مصدر الحصول عليه': 'صورة القرص SurfSense-arm64.dmg (1.26 GB بحسب صفحة الإصدارات)' },
          { 'المنصة': 'Linux (x64)', 'مصدر الحصول عليه': 'SurfSense.AppImage أو SurfSense.deb من [صفحة التنزيلات](https://www.surfsense.com/downloads)' },
          { 'المنصة': 'الموقع', 'مصدر الحصول عليه': '[surfsense.com](https://www.surfsense.com)' },
          { 'المنصة': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { 'المنصة': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[surfsense.com/privacy](https://www.surfsense.com/privacy) (حُدّثت في 18 سبتمبر 2026)' },
        ],
        note: 'الإصدار الذي روجع: v2.2.2، نُشر في 16 أكتوبر 2026 بحسب صفحة الإصدارات على GitHub، وهو أحدث تحديث للتطبيق وقت التحقق. لا تذكر صفحة التنزيلات متطلبات النظام. المشكلات المعروفة في ملاحظات الإصدار: يحتاج التشغيل الأول إلى مساحة قرص خالية بحجم ملف قاعدة البيانات تقريبًا، والرجوع إلى 2.2.1 يتطلب استعادة نسخة احتياطية من قاعدة البيانات يدويًا.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**التطبيق وتحديثاته مجانيان؛ وتضيف خطة Individual المدفوعة إضافات الويب الخاصة بالمشروع.**',
        ],
        columns: ['الخطة', 'ما تشمله', 'السعر (USD)'],
        rows: [
          { 'الخطة': 'مجانية', 'ما تشمله': 'التطبيق وكل التحديثات، دون حساب أو حد للاستخدام، مع رخصة إضافات لمدة 30 يومًا مقابل عنوان بريد إلكتروني', 'السعر (USD)': '$0' },
          { 'الخطة': 'Individual', 'ما تشمله': 'إضافات Google Search وYouTube وTikTok وGoogle Maps وAmazon وWalmart وIndeed، وزاحف الويب، ودعم ذو أولوية', 'السعر (USD)': '$60 في السنة الأولى ثم $120 سنويًا' },
          { 'الخطة': 'Enterprise', 'ما تشمله': 'نشر مستضاف ذاتيًا داخل شبكتك، وضوابط مركزية، وسجل تدقيق، ودعم باسم مسؤول محدد', 'السعر (USD)': 'حسب الاتفاق، فوترة سنوية' },
        ],
        note: 'الأسعار من [صفحة الأسعار](https://www.surfsense.com/pricing) التي اطُّلع عليها في 21 أكتوبر 2026؛ وتذكر الصفحة الدولار الأمريكي فقط، لذا لم يُجرَ أي تحويل. لا تتطلب إضافات الطرف الثالث وخوادم MCP رخصة، ولا تقفل الرخصة أي ميزة من ميزات التطبيق نفسه.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات ترتيب موقع المشروع؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'نزّل المثبّت',
            whyItMatters: 'اختر الملف المناسب لـ Windows أو macOS أو Linux من [صفحة التنزيلات](https://www.surfsense.com/downloads).',
          },
          {
            title: 'أكمل الإعداد الأولي وأضف نموذجًا',
            whyItMatters: 'اربط أي واجهة API متوافقة مع OpenAI أو نموذجًا محليًا. تحتاج ميزات الصور إلى نموذج صور، ولا يوجد أي نموذج محدد افتراضيًا.',
          },
          {
            title: 'أضف المصادر',
            whyItMatters: 'اسحب الملفات أو المجلدات إلى لوحة المصادر.',
          },
          {
            title: 'اسأل الوكيل',
            whyItMatters: 'اطلب منه البحث في محتوى مصادرك أو استخراجه أو تحويله أو تحريره.',
          },
          {
            title: 'أضف الإضافات إن أردت',
            whyItMatters: 'افتح الإعدادات › الإضافات لإضافة إضافات الويب أو خوادم MCP.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره موقع المشروع أو ملاحظات الإصدار أو سياسة الخصوصية.**',
        ],
        items: [
          '**بحث مع اقتباسات.** تعتمد الإجابات على مصادرك وتقتبس منها؛ ومنذ الإصدار 2.2.2 تصبح ملفات PDF ذات الطبقة النصية وملفات Word جاهزة في ثوانٍ لأنها لم تعد تنتظر Docling.',
          '**الصوت.** يمكن إضافة التسجيلات كمصادر وتُفرَّغ نصيًا بالتعرف على الكلام على الجهاز نفسه؛ ويضم مربع الدردشة ميكروفونًا للإدخال الصوتي.',
          '**الإضافات.** ضمن الإعدادات › الإضافات توسّع إضافات الويب والمنصات (البحث والزحف ومواقع الفيديو والتسوق) قدرات الوكيل؛ وهي تحتاج إلى اتصال بالإنترنت وإلى الرخصة الموضحة في قسم الأسعار.',
          '**MCP.** يمكن إضافة خوادم MCP من أطراف ثالثة (يذكر الموقع DeepWiki وNotion) من سجل الإضافات أو عبر عنوان URL، وتبقى معطّلة حتى تفعّلها.',
          '**أذونات الأدوات.** يمكن ضبط كل أداة على «مسموح دائمًا» أو «تتطلب موافقة» أو «محظورة».',
          '**ملفات Office والبودكاست.** دعم Office عبر LibreOffice اختياري ويُفعَّل من الإعدادات؛ وتُحفظ البودكاست بصيغة MP3.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تقول سياسة الخصوصية إن تطبيق سطح المكتب لا يملك حسابًا ولا تسجيل دخول، ويحتفظ بالمستندات والمحادثات وفهرس البحث والإعدادات كملفات محلية على جهازك، ولا يرسلها إلى SurfSense أبدًا.** وتضيف أنه لا يتضمن تحليلات ولا تتبعًا للاستخدام ولا تقارير أعطال.',
          'تذكر السياسة اتصالين صادرين آخرين، هما التحقق من التحديثات عبر GitHub وتنزيل النماذج من Hugging Face، وكلاهما معطّل حتى تفعّله؛ ويجري التحقق من الرخصة دون اتصال. وإذا هيّأت مزوّد نموذج بعيدًا فإن مطالباتك ومقتطفات المستندات ذات الصلة تُرسل إلى ذلك المزوّد وفق سياسته الخاصة. أما الموقع فمختلف: يستخدم تحليلات PostHog افتراضيًا دون شريط موافقة، ولا يحترم إشارتي Do Not Track وGlobal Privacy Control، وتتولى Stripe المدفوعات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يقدّم المشروع التطبيق على أنه قادر على العمل دون اتصال وفي بيئة معزولة، لكن PromptQuorum لم تدقق الشيفرة ولا حركة الشبكة، فهذه ادعاءات المشروع. أما إضافات الويب الخاصة به فتحتاج دائمًا إلى الإنترنت.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: 'إذا كنت تستخدم النسخة المستضافة',
        content: [
          '**ذكرت صفحة الإيقاف في المشروع أن خدمة السحابة السابقة ستحذف كل البيانات في 18 أكتوبر 2026 وأن تطبيق سطح المكتب يحل محلها.** ومن لديه ملف تصدير يمكنه نقله كما يلي.',
        ],
        items: [
          '**محتوى التصدير.** يضم ملف ZIP مستندات جاهزة بصيغة Markdown وبنية المجلدات وسلاسل المحادثة؛ ولا يشمل الملفات الأصلية المرفوعة ولا النواتج المولّدة ولا استدعاءات الأدوات ولا خطوات الوكيل ولا روابط الاقتباس الحية.',
          '**الاستيراد.** في تطبيق سطح المكتب افتح أيقونة الترس أسفل الشريط الأيسر، وانتقل إلى «عام»، وابحث عن «Import from SurfSense cloud»، وانقر Upload واختر ملف ZIP؛ كما تعرض النسخة المثبّتة حديثًا زر Upload في شاشة مساحة العمل الفارغة.',
          '**بعد الاستيراد.** تظهر مساحات العمل والمجلدات وسلاسل المحادثة، ويفهرس التطبيق المستندات على جهازك.',
          '**انتهت المهلة.** لم تتمكن PromptQuorum من التأكد مما إذا كان التصدير لا يزال ممكنًا؛ راجع [صفحة الإيقاف](https://www.surfsense.com/sunset).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريدون بحثًا على غرار NotebookLM دون رفع الملفات.** وفقًا للمشروع، تبقى المستندات على القرص ما لم تختر نموذجًا بعيدًا.',
          '**مستخدمون يشغّلون بالفعل نموذجًا محليًا أو متوافقًا مع OpenAI** ويريدون واجهة وكيل له.',
          '**هواة يريدون قراءة الشيفرة أو بناءها** من مستودع GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عند الاستخدام الفعلي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم جودة الإجابات ودقة الاقتباسات والسرعة وتعديلات الوكيل على الملفات.',
          '**ادعاءات العمل دون اتصال والقياس عن بُعد.** لم تُقارن ادعاءات العزل عن الشبكة وغياب القياس عن بُعد بالشيفرة أو بحركة الشبكة.',
          '**متطلبات العتاد.** لا تذكر المصادر حدًا أدنى من الذاكرة أو القرص أو وحدة المعالجة الرسومية.',
          '**الاستضافة الذاتية.** يضم المستودع مجلد docker، لكن الصفحات التي روجعت لا تقدم خطوات للاستضافة الذاتية، فتطبيق سطح المكتب هو السبيل المجاني الوحيد الموثَّق.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)', 'المنصات': 'Windows وmacOS وLinux والويب', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'مساحة عمل للدردشة مع المستندات مع قاعدة متجهات مدمجة ودعم لكثير من واجهات النماذج' },
          { 'التطبيق': '[PrivateGPT](/ar/power-local-llm/privategpt-review)', 'المنصات': 'Windows وmacOS وLinux (واجهة ويب، CLI)', 'السعر / الرخصة': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'RAG مصمم للعمل دون اتصال في البيئات المعزولة، يُشغَّل من الطرفية' },
          { 'التطبيق': '[Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)', 'المنصات': 'Windows وmacOS وLinux والويب', 'السعر / الرخصة': 'مجاني / AGPL 3.0', 'الفرق الأبرز': '«دماغ ثانٍ» شخصي بالذكاء الاصطناعي يتزامن مع Obsidian وNotion' },
          { 'التطبيق': '[HilbertRaum](/ar/power-local-llm/hilbertraum-review)', 'المنصات': 'Windows وmacOS (Apple Silicon) وLinux', 'السعر / الرخصة': 'مجاني / GPL-3.0-or-later', 'الفرق الأبرز': 'مساحة عمل محمولة لسطح المكتب دون تثبيت للدردشة دون اتصال والأسئلة عن المستندات' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج SurfSense إلى حساب؟',
            a: 'لا. بحسب السياسة لا يملك تطبيق سطح المكتب حسابًا ولا تسجيل دخول؛ والبيانات الشخصية الوحيدة المذكورة هي البريد الإلكتروني المستخدم في نموذج التنزيل ورخصة التجربة.',
          },
          {
            q: 'هل يمكن تشغيله دون اتصال بالكامل؟',
            a: 'بحسب المشروع نعم، بعد إعداد نموذج محلي. أما إضافات الويب فلا تعمل دون اتصال لأنها تقرأ صفحات عامة. لم تختبر PromptQuorum ذلك.',
          },
          {
            q: 'هل يعمل مع ChatGPT أو مزوّدين آخرين؟',
            a: 'يذكر المشروع أي واجهة API متوافقة مع OpenAI، ويضيف الإصدار 2.2.2 تسجيل الدخول بخطة ChatGPT Plus أو Pro. ولا تذكر المصادر التي روجعت مزوّدين آخرين.',
          },
          {
            q: 'كيف يختلف عن NotebookLM؟',
            a: 'بحسب جدول المقارنة الخاص بالمشروع يدعم NotebookLM نموذج Gemini فقط، بينما يقبل SurfSense أي واجهة API متوافقة مع OpenAI أو نموذجًا محليًا ويمكنه العمل دون اتصال. لم تتحقق PromptQuorum من ميزات NotebookLM الحالية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'SurfSense تطبيق مجاني لسطح المكتب برخصة Apache-2.0 يتيح، بحسب المشروع، لوكيل ذكاء اصطناعي أن يبحث في مستنداتك ويحرّرها على جهازك بالنموذج الذي تختاره، وهو يُحدَّث بنشاط مع ثلاثة إصدارات في الأسبوع السابق لهذا التحقق. في المقابل، لم تُتحقق هنا ادعاءات الخصوصية والعمل دون اتصال، ولا توجد نسخة لأجهزة Mac بمعالج Intel أو للجوال، وتتطلب إضافات الويب رخصة مدفوعة، وقد اختفت النسخة المستضافة التي نشأ منها. يناسب من يريد سير عمل خاصًا على غرار NotebookLM ولا يمانع ربط نموذجه الخاص؛ ومن يفضّل أداة أقدم حضورًا يمكنه مقارنة [AnythingLLM](/ar/power-local-llm/anythingllm-review) أو [PrivateGPT](/ar/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع SurfSense](https://www.surfsense.com) — الميزات وجدول المقارنة وخطوات التثبيت، جرى التحقق منها في 21 أكتوبر 2026.',
          '[أسعار SurfSense](https://www.surfsense.com/pricing) و[التنزيلات](https://www.surfsense.com/downloads) — الخطط وترخيص الإضافات وملفات التثبيت.',
          '[سياسة خصوصية SurfSense](https://www.surfsense.com/privacy) و[صفحة الإيقاف](https://www.surfsense.com/sunset) — معالجة البيانات والاتصالات الصادرة والتصدير والاستيراد.',
          '[SurfSense على GitHub](https://github.com/MODSetter/SurfSense) و[الإصدار v2.2.2](https://github.com/MODSetter/SurfSense/releases) — الشيفرة المصدرية والرخصة وملاحظات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — مساحة عمل للدردشة مع المستندات وRAG مع قاعدة متجهات مدمجة.',
          '[مراجعة PrivateGPT](/ar/power-local-llm/privategpt-review) — مشروع RAG مصمم للعمل دون اتصال في البيئات المعزولة.',
          '[مراجعة Khoj](/ar/power-local-llm/khoj-ai-second-brain-review) — «دماغ ثانٍ» شخصي بالذكاء الاصطناعي يتزامن مع Obsidian وNotion.',
          '[مراجعة HilbertRaum](/ar/power-local-llm/hilbertraum-review) — مساحة عمل محمولة لسطح المكتب للدردشة دون اتصال والأسئلة عن المستندات.',
          '[مقارنة أدوات استرجاع المعرفة المحلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — مقارنة فئة أدوات المستندات والمعرفة.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-zh.webp',
    title: 'SurfSense 评测：开源桌面版 NotebookLM 替代品',
    seoTitle: 'SurfSense 评测：开源 NotebookLM 替代品',
    intro:
      'SurfSense 是一款开源桌面应用，项目方将其描述为注重隐私、类似 NotebookLM 的个人文档 AI 智能体。它源自一项已被项目方关停的托管网页服务。本评测依据 2026 年 10 月 21 日核对的官网、隐私政策和 GitHub 发布页面。',
    metaDescription:
      'SurfSense 评测：免费开源的桌面 AI 智能体，可处理你自己的文档并支持本地模型。涵盖 Apache-2.0 许可、定价、隐私说明以及我们未能核实的内容。',
    twitterDescription:
      'SurfSense 评测：采用 Apache-2.0 许可的桌面应用，AI 智能体在你自己的电脑上研究和编辑文档。插件定价、隐私说明与未解问题。',
    audience:
      '希望在不上传云端的情况下与自己的文档对话，并想了解 SurfSense 费用、哪些数据会离开电脑以及哪些内容来源未能证实的读者。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SurfSense 评测',
    targetKeywords: [
      'surfsense 评测',
      'notebooklm 开源替代',
      '私密文档聊天 桌面应用',
      '本地 ai 研究智能体',
      'surfsense 定价',
      '离线文档聊天',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense（2.2.2 版，2026 年 10 月 16 日发布）是一款免费的开源桌面应用，据其官网介绍，AI 智能体可在你的电脑上研究、转换和编辑文档，无需账号，索引保存在本地磁盘。** 模型由你自行选择，只有选用远程模型时文档才会离开电脑。所有隐私说明均来自项目方；PromptQuorum 未测试该应用及其网络流量。',
    quickAnswerTop: {
      zh: {
        question: 'SurfSense 真的免费且私密吗？',
        answer:
          '应用及其更新免费且无使用上限，隐私政策称桌面应用没有账号、遥测或崩溃报告。不过远程模型提供商仍会看到你的提示词和文档摘录，而项目自有的网页插件需要付费许可证。',
        bullets: [
          '可读取 PDF、Word、Excel、PowerPoint、CSV、Markdown、HTML 和图片（OCR），以及音频录音。',
          '可合并、拆分和提取 PDF，并生成播客、思维导图、闪卡和测验。',
          '支持任何兼容 OpenAI 的 API 或本地模型。',
          '编辑的是文件副本，而非原件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'SurfSense 是什么？', anchor: 'what-is-surfsense' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '定价', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '如果你用过托管版', anchor: 'cloud-migration' },
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
            text: 'SurfSense 是一款采用 Apache-2.0 许可的免费桌面应用，AI 智能体用你选择的模型检索、引用并编辑你自己的文档。',
          },
          {
            type: 'plain-terms',
            text: '安装后，指定文件或文件夹以及模型，然后提问即可；据项目方称，索引和文档都保留在你的磁盘上。',
          },
        ],
        items: [
          '维护情况：v2.2.0、v2.2.1 和 v2.2.2 分别于 2026 年 10 月 9 日、14 日和 16 日发布，因此不适用停止维护警告。',
          '许可证：Apache-2.0，完整源码在 GitHub 上。',
          '费用：应用免费；只有项目自有的网页插件和 Enterprise 档位收费。',
          '托管版：此前的云服务计划于 2026 年 10 月 18 日删除数据，因此桌面应用是唯一途径。',
          '门槛：下载表单要求先填写电子邮件地址，才提供安装程序。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 21 日核对的 SurfSense 官网、隐私政策、停服页面和 GitHub 发布页面。PromptQuorum 未安装、测试或评测该应用。',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'SurfSense 是什么？',
        content: [
          '**SurfSense 是一款桌面应用：你把文件或文件夹添加为来源，然后让 AI 智能体查找、引用、提取、转换或编辑其中的内容。** 项目方称其为注重隐私、类似 NotebookLM 的智能体，并与谷歌的托管版 NotebookLM 对比。',
          '它取代了 SurfSense 此前的托管网页应用：据其停服页面，项目已转向本地桌面应用，并终止了云服务。代码仓库为 GitHub 上的 [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**SurfSense 通过官网的下载页面安装；该页面未列出移动端、网页版或 Intel Mac 版本。**',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'Windows（x64）', '获取方式': '[下载页面](https://www.surfsense.com/downloads)上的安装程序 SurfSense-Setup.exe' },
          { '平台': 'macOS（Apple Silicon）', '获取方式': '磁盘映像 SurfSense-arm64.dmg（发布页面显示 1.26 GB）' },
          { '平台': 'Linux（x64）', '获取方式': '[下载页面](https://www.surfsense.com/downloads)上的 SurfSense.AppImage 或 SurfSense.deb' },
          { '平台': '官网', '获取方式': '[surfsense.com](https://www.surfsense.com)' },
          { '平台': '源代码', '获取方式': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { '平台': '隐私政策', '获取方式': '[surfsense.com/privacy](https://www.surfsense.com/privacy)（2026 年 9 月 18 日更新）' },
        ],
        note: '评测版本：v2.2.2，据 GitHub 发布页面于 2026 年 10 月 16 日发布，是核对时该应用的最新上游更新。下载页面未列出系统要求。发布说明中的已知问题：首次启动需要与数据库文件大小相当的可用磁盘空间，回退到 2.2.1 需要手动恢复数据库备份。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**应用及其更新免费；付费的 Individual 方案提供项目自有的网页插件。**',
        ],
        columns: ['方案', '包含内容', '价格（USD）'],
        rows: [
          { '方案': '免费', '包含内容': '应用及所有更新，无需账号、无使用上限，另可凭电子邮件获得 30 天插件许可证', '价格（USD）': '$0' },
          { '方案': 'Individual', '包含内容': 'Google Search、YouTube、TikTok、Google Maps、Amazon、Walmart 和 Indeed 插件、网页爬虫及优先支持', '价格（USD）': '首年 $60，之后 $120/年' },
          { '方案': 'Enterprise', '包含内容': '在你的网络内自托管部署、集中管控、审计日志、指定专人支持', '价格（USD）': '定制，按年开票' },
        ],
        note: '价格来自[定价页面](https://www.surfsense.com/pricing)，查看于 2026 年 10 月 21 日；该页面仅标注美元，因此未做换算。第三方插件和 MCP 服务器无需许可证，许可证也不会锁定应用自身的任何功能。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤按项目官网的顺序列出；PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '下载安装程序',
            whyItMatters: '在[下载页面](https://www.surfsense.com/downloads)选择适用于 Windows、macOS 或 Linux 的文件。',
          },
          {
            title: '完成初始设置并添加模型',
            whyItMatters: '连接任何兼容 OpenAI 的 API 或本地模型。图像功能需要图像模型，默认未选择任何模型。',
          },
          {
            title: '添加来源',
            whyItMatters: '把文件或文件夹拖入来源面板。',
          },
          {
            title: '向智能体提问',
            whyItMatters: '让它搜索、提取、转换或编辑来源中的内容。',
          },
          {
            title: '可选：添加插件',
            whyItMatters: '打开“设置 › 插件”，添加网页插件或 MCP 服务器。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自项目官网、发布说明或隐私政策。**',
        ],
        items: [
          '**带引用的研究。** 回答基于你的来源并附上引用；自 2.2.2 起，带文本层的 PDF 和 Word 文件几秒内即可就绪，不再等待 Docling。',
          '**音频。** 录音可作为来源添加，并通过设备端语音识别转写；聊天框带有麦克风，可语音输入。',
          '**插件。** 在“设置 › 插件”中，网页和平台插件（搜索、爬取、视频和购物网站）可扩展智能体；它们需要联网以及“定价”一节所述的许可证。',
          '**MCP。** 可从插件注册表或通过 URL 添加第三方 MCP 服务器（官网提到 DeepWiki 和 Notion），启用前保持关闭。',
          '**工具权限。** 每个工具可设为“始终允许”“需要批准”或“已阻止”。',
          '**Office 文件与播客。** 通过 LibreOffice 支持 Office 文件为可选项，在设置中开启；播客保存为 MP3。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**隐私政策称，桌面应用没有账号或登录，文档、聊天、搜索索引和设置都以本地文件形式保存在你的电脑上，绝不会发送给 SurfSense。** 政策还称应用没有分析、使用追踪或崩溃报告。',
          '政策提到的另外两项对外连接是向 GitHub 检查更新和从 Hugging Face 下载模型，二者在启用前都处于关闭状态；许可证校验离线进行。如果你配置了远程模型提供商，你的提示词和相关文档摘录会按其自身政策发送给该提供商。官网则不同：默认使用 PostHog 分析且没有同意横幅，也不遵从 Do Not Track 和 Global Privacy Control 信号；付款由 Stripe 处理。',
        ],
        callouts: [
          {
            type: 'note',
            text: '项目方称该应用可离线、物理隔离运行，但 PromptQuorum 未审计代码或网络流量，因此这些都是项目方的说法。其自有网页插件始终需要联网。',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: '如果你用过托管版',
        content: [
          '**项目的停服页面称，此前的云服务将在 2026 年 10 月 18 日删除所有数据，桌面应用取而代之。** 持有导出文件的用户可按以下方式迁入。',
        ],
        items: [
          '**导出内容。** ZIP 包含 Markdown 格式的成品文档、文件夹结构和聊天线程；不含原始上传文件、生成的产物、工具调用、智能体步骤和有效的引用链接。',
          '**导入。** 在桌面应用中点击左侧栏底部的齿轮图标，进入“常规”，找到“Import from SurfSense cloud”，点击 Upload 并选择该 ZIP；全新安装时，空白工作区界面也会显示 Upload 按钮。',
          '**导入之后。** 工作区、文件夹和聊天线程会出现，应用随后在你的电脑上为文档建立索引。',
          '**期限已过。** PromptQuorum 无法确认现在是否仍可导出；请查看[停服页面](https://www.surfsense.com/sunset)。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**想要 NotebookLM 式研究、又不想上传文件的人。** 据项目方称，除非选用远程模型，文档都保留在磁盘上。',
          '**已在运行本地或兼容 OpenAI 模型的用户**，想要一个智能体前端。',
          '**想从 GitHub 仓库阅读或自行构建代码的爱好者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际表现。** PromptQuorum 未运行该应用，因此回答质量、引用准确性、速度以及智能体的文件编辑均未评估。',
          '**离线与遥测说法。** 物理隔离和无遥测的说法未与代码或网络流量对照核实。',
          '**硬件需求。** 来源未给出内存、磁盘或 GPU 的最低要求。',
          '**自托管。** 仓库里有 docker 文件夹，但所查页面没有给出自托管步骤，因此有文档可查的免费途径只有桌面应用。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)', '平台': 'Windows、macOS、Linux、网页', '价格 / 许可证': '免费 / MIT', '主要区别': '内置向量库、支持多种模型后端的文档聊天工作区' },
          { '应用': '[PrivateGPT](/zh/power-local-llm/privategpt-review)', '平台': 'Windows、macOS、Linux（网页界面、CLI）', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '面向离线设计、适用于物理隔离环境的 RAG，通过终端使用' },
          { '应用': '[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)', '平台': 'Windows、macOS、Linux、网页', '价格 / 许可证': '免费 / AGPL 3.0', '主要区别': '可与 Obsidian 和 Notion 同步的个人 AI“第二大脑”' },
          { '应用': '[HilbertRaum](/zh/power-local-llm/hilbertraum-review)', '平台': 'Windows、macOS（Apple Silicon）、Linux', '价格 / 许可证': '免费 / GPL-3.0-or-later', '主要区别': '免安装、可随身携带的桌面工作区，用于离线聊天和文档问答' },
        ],
        note: '竞品信息变化较快；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'SurfSense 需要账号吗？',
            a: '不需要。据政策，桌面应用没有账号或登录；它提到的唯一个人信息，是用于下载表单和试用许可证的电子邮件地址。',
          },
          {
            q: '可以完全离线使用吗？',
            a: '据项目方称，配置好本地模型后可以。网页插件要读取公开网页，无法离线工作。PromptQuorum 未测试。',
          },
          {
            q: '能配合 ChatGPT 或其他提供商使用吗？',
            a: '项目方称支持任何兼容 OpenAI 的 API，2.2.2 版还新增了用 ChatGPT Plus 或 Pro 方案登录。所查来源未提及其他提供商。',
          },
          {
            q: '它与 NotebookLM 有何不同？',
            a: '据项目自己的对比表，NotebookLM 只支持 Gemini，而 SurfSense 接受任何兼容 OpenAI 的 API 或本地模型，并可离线运行。PromptQuorum 未核实 NotebookLM 当前的功能。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '据项目方称，SurfSense 是一款采用 Apache-2.0 许可的免费桌面应用，AI 智能体可用你选择的模型在你自己的电脑上研究和编辑文档，且更新活跃，本次核对前一周内发布了三个版本。不足之处是：其隐私和离线说法在此未经核实，没有 Intel Mac 版或移动版，网页插件需要付费许可证，而它所源自的托管版已经消失。它适合想要私密的 NotebookLM 式工作流、并愿意自行接入模型的人；更看重成熟工具的读者可对比 [AnythingLLM](/zh/power-local-llm/anythingllm-review) 或 [PrivateGPT](/zh/power-local-llm/privategpt-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[SurfSense 官网](https://www.surfsense.com)：功能、对比表和安装步骤，核对于 2026 年 10 月 21 日。',
          '[SurfSense 定价](https://www.surfsense.com/pricing)和[下载页面](https://www.surfsense.com/downloads)：方案、插件许可和安装文件。',
          '[SurfSense 隐私政策](https://www.surfsense.com/privacy)和[停服页面](https://www.surfsense.com/sunset)：数据处理、对外连接、导出与导入。',
          '[GitHub 上的 SurfSense](https://github.com/MODSetter/SurfSense)及其 [v2.2.2 版本](https://github.com/MODSetter/SurfSense/releases)：源代码、许可证和发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review)：内置向量库的文档聊天与 RAG 工作区。',
          '[PrivateGPT 评测](/zh/power-local-llm/privategpt-review)：面向离线设计、适用于物理隔离环境的 RAG 项目。',
          '[Khoj 评测](/zh/power-local-llm/khoj-ai-second-brain-review)：可与 Obsidian 和 Notion 同步的个人 AI“第二大脑”。',
          '[HilbertRaum 评测](/zh/power-local-llm/hilbertraum-review)：用于离线聊天和文档问答的便携桌面工作区。',
          '[本地 LLM 知识检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)：文档与知识类工具的分类对比。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-21',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-21',
    theme: 'RAG & Document Chat',
    heroImage: '/images/surfsense-review-hero-ko.webp',
    title: 'SurfSense 리뷰: 오픈소스 데스크톱 NotebookLM 대안',
    seoTitle: 'SurfSense 리뷰: 오픈소스 NotebookLM 대안',
    intro:
      'SurfSense는 프로젝트 측이 개인 문서를 위한 개인정보 보호 중심의 NotebookLM 방식 AI 에이전트라고 설명하는 오픈소스 데스크톱 앱입니다. 프로젝트가 종료한 호스팅형 웹 서비스에서 출발했습니다. 이 리뷰는 2026년 10월 21일에 확인한 공식 사이트, 개인정보 처리방침, GitHub 릴리스 페이지를 기준으로 합니다.',
    metaDescription:
      'SurfSense 리뷰: 내 문서를 다루는 무료 오픈소스 데스크톱 AI 에이전트, 로컬 모델 지원. 요금, 개인정보 보호 주장, 확인하지 못한 사항을 정리했습니다.',
    twitterDescription:
      'SurfSense 리뷰: AI 에이전트가 내 컴퓨터에서 문서를 조사하고 편집하는 Apache-2.0 데스크톱 앱. 플러그인 요금, 개인정보 보호 주장, 남은 의문점을 정리했습니다.',
    audience:
      '문서를 클라우드에 올리지 않고 대화하고 싶으면서, SurfSense의 비용과 컴퓨터 밖으로 나가는 데이터, 출처로 확인되지 않는 사항을 알고 싶은 독자.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SurfSense 리뷰',
    targetKeywords: [
      'surfsense 리뷰',
      'notebooklm 오픈소스 대안',
      '문서 채팅 데스크톱 앱 프라이빗',
      '로컬 ai 리서치 에이전트',
      'surfsense 요금',
      '오프라인 문서 채팅',
    ],
    current_hardware_mentioned: ['Windows PC', 'Mac with Apple Silicon', 'Linux PC'],
    leadAnswerBlock:
      '**SurfSense(2.2.2 버전, 2026년 10월 16일 출시)는 공식 사이트에 따르면 AI 에이전트가 내 컴퓨터에서 문서를 조사·변환·편집하는 무료 오픈소스 데스크톱 앱으로, 계정이 필요 없고 인덱스는 디스크에 보관됩니다.** 모델은 직접 고르며, 원격 모델을 선택할 때만 문서가 컴퓨터 밖으로 나갑니다. 개인정보 보호에 관한 모든 주장은 프로젝트 측에서 나온 것이며, PromptQuorum은 앱과 네트워크 트래픽을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'SurfSense는 정말 무료이고 프라이빗한가요?',
        answer:
          '앱과 업데이트는 사용 한도 없이 무료이며, 개인정보 처리방침에 따르면 데스크톱 앱에는 계정, 원격 측정, 충돌 보고가 없습니다. 다만 원격 모델 제공업체는 프롬프트와 문서 발췌를 보게 되고, 프로젝트 자체 웹 플러그인에는 유료 라이선스가 필요합니다.',
        bullets: [
          'PDF, Word, Excel, PowerPoint, CSV, Markdown, HTML, 이미지(OCR)와 오디오 녹음을 읽습니다.',
          'PDF를 병합·분할·추출할 수 있고 팟캐스트, 마인드맵, 플래시카드, 퀴즈를 생성할 수 있습니다.',
          'OpenAI 호환 API 또는 로컬 모델과 함께 작동합니다.',
          '원본이 아니라 파일의 사본을 편집합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'SurfSense란?', anchor: 'what-is-surfsense' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요금', anchor: 'pricing' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보 보호와 네트워크 사용', anchor: 'privacy' },
      { label: '호스팅 버전을 쓰셨다면', anchor: 'cloud-migration' },
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
            text: 'SurfSense는 AI 에이전트가 내 문서를 원하는 모델로 검색·인용·편집하는 Apache-2.0 라이선스의 무료 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '설치한 뒤 파일이나 폴더와 모델을 지정하고 질문하면 됩니다. 프로젝트에 따르면 인덱스와 문서는 디스크에 남습니다.',
          },
        ],
        items: [
          '유지보수: v2.2.0, v2.2.1, v2.2.2가 2026년 10월 9일, 14일, 16일에 공개되어 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: Apache-2.0이며 전체 소스 코드가 GitHub에 있습니다.',
          '비용: 앱은 무료이고, 프로젝트 자체 웹 플러그인과 Enterprise 요금제만 유료입니다.',
          '호스팅 버전: 이전 클라우드 서비스는 2026년 10월 18일에 데이터를 삭제할 예정이어서 데스크톱 앱이 유일한 방법입니다.',
          '조건: 다운로드 양식은 설치 프로그램을 내려주기 전에 이메일 주소를 요구합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 21일에 확인한 SurfSense 공식 사이트, 개인정보 처리방침, 서비스 종료 안내 페이지, GitHub 릴리스 페이지를 기준으로 합니다. PromptQuorum은 앱을 설치·테스트·벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-surfsense',
        title: 'SurfSense란?',
        content: [
          '**SurfSense는 파일이나 폴더를 소스로 추가하고 AI 에이전트에게 그 내용을 찾고, 인용하고, 추출하고, 변환하고, 편집하도록 요청하는 데스크톱 앱입니다.** 프로젝트는 이를 개인정보 보호 중심의 NotebookLM 방식 에이전트로 소개하며, Google의 호스팅형 NotebookLM과 비교합니다.',
          '이전 호스팅형 웹 앱을 대체합니다. 서비스 종료 안내 페이지에 따르면 프로젝트는 로컬 데스크톱 앱으로 옮겨 가며 클라우드 서비스를 종료했습니다. 저장소는 GitHub의 [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**SurfSense는 공식 사이트의 다운로드 페이지에서 설치하며, 이 페이지에는 모바일, 웹, Intel Mac 버전이 나와 있지 않습니다.**',
        ],
        columns: ['플랫폼', '입수처'],
        rows: [
          { '플랫폼': 'Windows(x64)', '입수처': '[다운로드 페이지](https://www.surfsense.com/downloads)의 설치 프로그램 SurfSense-Setup.exe' },
          { '플랫폼': 'macOS(Apple Silicon)', '입수처': '디스크 이미지 SurfSense-arm64.dmg(릴리스 페이지 기준 1.26 GB)' },
          { '플랫폼': 'Linux(x64)', '입수처': '[다운로드 페이지](https://www.surfsense.com/downloads)의 SurfSense.AppImage 또는 SurfSense.deb' },
          { '플랫폼': '공식 사이트', '입수처': '[surfsense.com](https://www.surfsense.com)' },
          { '플랫폼': '소스 코드', '입수처': '[github.com/MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)' },
          { '플랫폼': '개인정보 처리방침', '입수처': '[surfsense.com/privacy](https://www.surfsense.com/privacy)(2026년 9월 18일 업데이트)' },
        ],
        note: '검토한 버전: v2.2.2. GitHub 릴리스 페이지에 따르면 2026년 10월 16일에 공개되었으며, 확인 시점의 앱 최신 업스트림 업데이트입니다. 다운로드 페이지에는 시스템 요구 사항이 나와 있지 않습니다. 릴리스 노트의 알려진 문제: 첫 실행에는 데이터베이스 파일 크기에 가까운 여유 디스크 공간이 필요하고, 2.2.1로 되돌리려면 데이터베이스 백업을 수동으로 복원해야 합니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**앱과 업데이트는 무료이며, 유료 Individual 요금제는 프로젝트 자체 웹 플러그인을 추가합니다.**',
        ],
        columns: ['요금제', '포함 내용', '가격(USD)'],
        rows: [
          { '요금제': '무료', '포함 내용': '앱과 모든 업데이트(계정·사용 한도 없음), 이메일 주소로 받는 30일 플러그인 라이선스', '가격(USD)': '$0' },
          { '요금제': 'Individual', '포함 내용': 'Google Search, YouTube, TikTok, Google Maps, Amazon, Walmart, Indeed 플러그인, 웹 크롤러, 우선 지원', '가격(USD)': '첫해 $60, 이후 연 $120' },
          { '요금제': 'Enterprise', '포함 내용': '내부 네트워크 안의 자체 호스팅 배포, 중앙 관리, 감사 로그, 담당자 지정 지원', '가격(USD)': '별도 협의, 연간 청구' },
        ],
        note: '가격은 [요금 페이지](https://www.surfsense.com/pricing)에서 2026년 10월 21일에 확인한 값입니다. 이 페이지는 미국 달러만 표기하므로 환산하지 않았습니다. 서드파티 플러그인과 MCP 서버에는 라이선스가 필요 없으며, 라이선스가 앱 자체 기능을 잠그지도 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트 사이트의 순서를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치 프로그램 다운로드',
            whyItMatters: '[다운로드 페이지](https://www.surfsense.com/downloads)에서 Windows, macOS, Linux용 파일을 고릅니다.',
          },
          {
            title: '초기 설정을 마치고 모델 추가',
            whyItMatters: 'OpenAI 호환 API 또는 로컬 모델을 연결합니다. 이미지 기능에는 이미지 모델이 필요하며 기본으로 선택된 모델은 없습니다.',
          },
          {
            title: '소스 추가',
            whyItMatters: '파일이나 폴더를 소스 패널에 끌어다 놓습니다.',
          },
          {
            title: '에이전트에게 질문',
            whyItMatters: '소스에 담긴 내용을 검색, 추출, 변환, 편집하도록 요청합니다.',
          },
          {
            title: '필요하면 플러그인 추가',
            whyItMatters: '설정 › 플러그인에서 웹 플러그인이나 MCP 서버를 추가합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 공식 사이트, 릴리스 노트, 개인정보 처리방침에서 확인한 내용입니다.**',
        ],
        items: [
          '**인용이 달린 리서치.** 답변은 내 소스를 바탕으로 하며 출처를 인용합니다. 2.2.2부터 텍스트 레이어가 있는 PDF와 Word 파일은 Docling을 기다리지 않아 몇 초 만에 준비됩니다.',
          '**오디오.** 녹음을 소스로 추가하면 기기 내 음성 인식으로 받아쓰기가 되며, 채팅 입력창에는 음성 입력용 마이크가 있습니다.',
          '**플러그인.** 설정 › 플러그인에서 웹·플랫폼 플러그인(검색, 크롤링, 동영상·쇼핑 사이트)으로 에이전트를 확장할 수 있으며, 인터넷 연결과 요금 항목에서 설명한 라이선스가 필요합니다.',
          '**MCP.** 서드파티 MCP 서버(사이트에서는 DeepWiki와 Notion을 예로 듦)를 플러그인 레지스트리나 URL로 추가할 수 있고, 켜기 전에는 꺼진 상태로 유지됩니다.',
          '**도구 권한.** 각 도구를 항상 허용, 승인 필요, 차단 중에서 설정할 수 있습니다.',
          '**Office 파일과 팟캐스트.** LibreOffice를 통한 Office 지원은 선택 사항이며 설정에서 켭니다. 팟캐스트는 MP3로 저장됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**개인정보 처리방침에 따르면 데스크톱 앱에는 계정이나 로그인이 없고, 문서, 채팅, 검색 인덱스, 설정을 컴퓨터의 로컬 파일로 보관하며 SurfSense로는 전혀 보내지 않습니다.** 또한 분석, 사용 추적, 충돌 보고도 없다고 밝힙니다.',
          '방침이 언급하는 다른 외부 연결은 GitHub의 업데이트 확인과 Hugging Face의 모델 다운로드이며, 둘 다 켜기 전에는 꺼져 있습니다. 라이선스 확인은 오프라인으로 이루어집니다. 원격 모델 제공업체를 설정하면 프롬프트와 관련 문서 발췌가 해당 업체의 정책에 따라 그곳으로 전송됩니다. 웹사이트는 다릅니다. 기본적으로 PostHog 분석을 사용하고 동의 배너가 없으며 Do Not Track과 Global Privacy Control 신호를 따르지 않고, 결제는 Stripe가 처리합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '프로젝트는 이 앱이 오프라인·에어갭 환경에서 작동한다고 소개하지만 PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았으므로 이는 프로젝트 측 주장입니다. 자체 웹 플러그인은 항상 인터넷 연결이 필요합니다.',
          },
        ],
      },
      cloudMigration: {
        id: 'cloud-migration',
        title: '호스팅 버전을 쓰셨다면',
        content: [
          '**프로젝트의 서비스 종료 안내 페이지는 이전 클라우드 서비스가 2026년 10월 18일에 모든 데이터를 삭제하며 데스크톱 앱이 이를 대체한다고 밝혔습니다.** 내보내기 파일을 갖고 있다면 다음과 같이 가져올 수 있습니다.',
        ],
        items: [
          '**내보내기 내용.** ZIP에는 Markdown 형식의 완성된 문서, 폴더 구조, 채팅 스레드가 들어 있으며, 원본 업로드 파일, 생성된 산출물, 도구 호출, 에이전트 단계, 유효한 인용 링크는 포함되지 않습니다.',
          '**가져오기.** 데스크톱 앱 왼쪽 레일 하단의 톱니바퀴 아이콘을 열고 일반에서 「Import from SurfSense cloud」를 찾아 Upload를 눌러 ZIP을 선택합니다. 새로 설치한 경우 빈 워크스페이스 화면에도 Upload 버튼이 표시됩니다.',
          '**가져온 뒤.** 워크스페이스, 폴더, 채팅 스레드가 나타나고 앱이 컴퓨터에서 문서를 인덱싱합니다.',
          '**기한 경과.** PromptQuorum은 지금도 내보내기가 가능한지 확인하지 못했습니다. [서비스 종료 안내 페이지](https://www.surfsense.com/sunset)를 확인하십시오.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**파일을 올리지 않고 NotebookLM 방식의 리서치를 하고 싶은 분.** 프로젝트에 따르면 원격 모델을 고르지 않는 한 문서는 디스크에 남습니다.',
          '**이미 로컬 또는 OpenAI 호환 모델을 운영하며 에이전트 프런트엔드가 필요한 분.**',
          '**GitHub 저장소에서 코드를 읽거나 직접 빌드하고 싶은 분.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실사용 품질.** PromptQuorum은 앱을 실행하지 않았으므로 답변 품질, 인용 정확도, 속도, 에이전트의 파일 편집은 평가하지 않았습니다.',
          '**오프라인 및 원격 측정 주장.** 에어갭 및 원격 측정 없음이라는 설명은 코드나 네트워크 트래픽과 대조하지 않았습니다.',
          '**하드웨어 요구 사항.** 출처에는 RAM, 디스크, GPU의 최소 사양이 나와 있지 않습니다.',
          '**자체 호스팅.** 저장소에는 docker 폴더가 있으나 확인한 페이지에는 자체 호스팅 절차가 없어, 문서화된 무료 경로는 데스크톱 앱뿐입니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)', '플랫폼': 'Windows, macOS, Linux, 웹', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '벡터 저장소를 내장하고 다양한 모델 백엔드를 지원하는 문서 채팅 워크스페이스' },
          { '앱': '[PrivateGPT](/ko/power-local-llm/privategpt-review)', '플랫폼': 'Windows, macOS, Linux(웹 UI, CLI)', '가격 / 라이선스': '무료 / Apache 2.0', '핵심 차이': '에어갭 환경을 겨냥한 오프라인 중심 RAG로, 터미널에서 실행' },
          { '앱': '[Khoj](/ko/power-local-llm/khoj-ai-second-brain-review)', '플랫폼': 'Windows, macOS, Linux, 웹', '가격 / 라이선스': '무료 / AGPL 3.0', '핵심 차이': 'Obsidian, Notion과 동기화되는 개인용 AI 세컨드 브레인' },
          { '앱': '[HilbertRaum](/ko/power-local-llm/hilbertraum-review)', '플랫폼': 'Windows, macOS(Apple Silicon), Linux', '가격 / 라이선스': '무료 / GPL-3.0-or-later', '핵심 차이': '설치 없이 들고 다니는 데스크톱 워크스페이스로 오프라인 채팅과 문서 Q&A 지원' },
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'SurfSense에 계정이 필요한가요?',
            a: '아니요. 방침에 따르면 데스크톱 앱에는 계정이나 로그인이 없으며, 언급된 개인 정보는 다운로드 양식과 체험 라이선스에 쓰이는 이메일 주소뿐입니다.',
          },
          {
            q: '완전히 오프라인으로 쓸 수 있나요?',
            a: '프로젝트에 따르면 로컬 모델을 설정하면 가능합니다. 웹 플러그인은 공개 페이지를 읽으므로 오프라인에서는 작동할 수 없습니다. PromptQuorum은 이를 테스트하지 않았습니다.',
          },
          {
            q: 'ChatGPT 등 다른 제공업체와도 작동하나요?',
            a: '프로젝트는 모든 OpenAI 호환 API를 지원한다고 밝히며, 2.2.2에서는 ChatGPT Plus 또는 Pro 요금제로 로그인하는 기능이 추가되었습니다. 확인한 출처에는 다른 제공업체가 언급되지 않습니다.',
          },
          {
            q: 'NotebookLM과는 어떻게 다른가요?',
            a: '프로젝트 자체 비교표에 따르면 NotebookLM은 Gemini만 지원하는 반면 SurfSense는 모든 OpenAI 호환 API나 로컬 모델을 받아들이고 오프라인에서도 작동합니다. PromptQuorum은 NotebookLM의 현재 기능을 확인하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'SurfSense는 프로젝트에 따르면 AI 에이전트가 내 컴퓨터에서 원하는 모델로 문서를 조사하고 편집하는 Apache-2.0 라이선스의 무료 데스크톱 앱이며, 이번 확인 직전 한 주에 세 번 릴리스되는 등 활발하게 업데이트됩니다. 반면 개인정보 보호와 오프라인 주장은 여기서 검증되지 않았고, Intel Mac이나 모바일 버전이 없으며, 웹 플러그인에는 유료 라이선스가 필요하고, 출발점이었던 호스팅 버전은 사라졌습니다. 프라이빗한 NotebookLM 방식의 작업 흐름을 원하고 직접 모델을 연결하는 데 부담이 없는 분께 적합합니다. 더 오래 자리 잡은 도구를 선호한다면 [AnythingLLM](/ko/power-local-llm/anythingllm-review)이나 [PrivateGPT](/ko/power-local-llm/privategpt-review)와 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[SurfSense 공식 사이트](https://www.surfsense.com) — 기능, 비교표, 설치 단계. 2026년 10월 21일 확인.',
          '[SurfSense 요금](https://www.surfsense.com/pricing) 및 [다운로드](https://www.surfsense.com/downloads) — 요금제, 플러그인 라이선스, 설치 파일.',
          '[SurfSense 개인정보 처리방침](https://www.surfsense.com/privacy) 및 [서비스 종료 안내 페이지](https://www.surfsense.com/sunset) — 데이터 처리, 외부 연결, 내보내기와 가져오기.',
          '[GitHub의 SurfSense](https://github.com/MODSetter/SurfSense)와 [v2.2.2 릴리스](https://github.com/MODSetter/SurfSense/releases) — 소스 코드, 라이선스, 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 벡터 저장소를 내장한 문서 채팅·RAG 워크스페이스.',
          '[PrivateGPT 리뷰](/ko/power-local-llm/privategpt-review) — 에어갭 환경을 겨냥한 오프라인 중심 RAG 프로젝트.',
          '[Khoj 리뷰](/ko/power-local-llm/khoj-ai-second-brain-review) — Obsidian, Notion과 동기화되는 개인용 AI 세컨드 브레인.',
          '[HilbertRaum 리뷰](/ko/power-local-llm/hilbertraum-review) — 오프라인 채팅과 문서 Q&A를 위한 휴대용 데스크톱 워크스페이스.',
          '[로컬 LLM 지식 검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 문서·지식 도구 카테고리 비교.',
        ],
      },
    },
  },
}
