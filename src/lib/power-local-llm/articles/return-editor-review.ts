// Return Editor Review: Local-First AI Contract Review for Mac and Windows
// Slug: return-editor-review
// Companion to: anythingllm-review, privategpt-review, hilbertraum-review, sidekick-review
// Sources: returneditor.ai (home, download, changelog, docs, privacy, security) checked 2026-10-10, plus a listing
// submission by the developer, who disclosed building the app — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-en.webp',
    title: 'Return Editor Review: Local-First AI Contract Review for Mac and Windows',
    seoTitle: 'Return Editor Review: Local AI Contract Review',
    intro: 'Return Editor is a desktop document editor for Mac and Windows that reviews contracts with AI: it flags risky clauses, answers questions with citations to the clause they come from, and proposes rewrites that you accept or reject. Its Free plan runs a bundled local model with no account, and a paid Pro plan adds optional cloud AI. The app is closed source. The developer submitted it to the directory and disclosed that they build it; PromptQuorum checked the details against [returneditor.ai](https://returneditor.ai/) and its changelog on 10 October 2026 and has not tested the app hands-on.',
    metaDescription: 'Return Editor review: a desktop app for Mac and Windows with contract risk flags, cited answers and a free local AI. Privacy, pricing, limits.',
    twitterDescription: 'Return Editor review: desktop AI that flags risky contract clauses and answers with citations; the free plan runs a local model on your computer.',
    audience: 'People who review contracts and other long documents on a Mac or Windows PC and want to know what stays on their own computer and what the sources do not confirm.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Return Editor review',
    targetKeywords: [
      'return editor review',
      'return editor ai',
      'local ai contract review',
      'offline contract review software',
      'ai contract review mac windows',
      'chat with contracts locally',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor (version 1.4.1 as of 10 October 2026) is a closed-source desktop app for Mac and Windows that reviews contracts with AI, and its free plan does so with a local model that, according to the developer, keeps documents on your computer.** It marks risky clauses, answers questions with clause citations, and drafts fixes that you approve one by one. Cloud AI is a paid, opt-in extra, and most claims here come from the product\'s own pages.',
    quickAnswerTop: {
      en: {
        question: 'Do my documents leave my computer when I use Return Editor?',
        answer: 'Not on the Free plan: the privacy policy says documents stay on your machine in local mode. Cloud AI is a Pro option that you switch on, and in that mode the content of each request goes through the maker\'s proxy to Anthropic.',
        bullets: [
          'Runs on Apple Silicon Macs with macOS 14 or later and on 64-bit Windows 10/11; there is no Linux build yet.',
          'Imports PDF, Word, OpenDocument, RTF and HTML files and converts them to Markdown for editing.',
          'Closed source, with a public changelog but no public repository.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Return Editor?',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Plans and Pricing',
        anchor: 'plans-pricing',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Local vs. Cloud AI',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Trade-Offs: Benefits vs. Limitations',
        anchor: 'tradeoffs',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
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
        label: 'Related Reading',
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
            text: 'Return Editor uses a local or cloud language model to flag risky contract clauses, answer questions with citations, and suggest rewrites, and its code is closed.',
          },
          {
            type: 'plain-terms',
            text: 'You open a contract, the app highlights clauses that may be risky, and you ask questions about it; on the Free plan the model runs on your own computer.',
          },
        ],
        items: [
          'Developer: a sole proprietorship registered in Kraków, Poland, according to its privacy policy; the person who submitted the listing is the developer.',
          'Workflow: Analyze flags clauses, Ask answers with citations, Fix proposes rewrites, and Returns re-runs saved checks such as key-date extraction.',
          'Local engine: a bundled llama.cpp server that runs downloadable models; the default model is a 5.3 GB download and 16 GB of memory is recommended.',
          'Plans: Free (local, no account) and Pro (adds cloud AI); a firm-oriented Counsel tier is announced but waitlist-only.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on returneditor.ai pages checked 10 October 2026, plus a listing submission from the developer. PromptQuorum has not tested the app or the accuracy of its risk flags, and AI output is not legal advice.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'What Is Return Editor?',
        content: [
          '**Return Editor is a Markdown-based document editor with a contract-review workflow built in: you import a contract, and the app analyzes it, answers questions about it and rewrites passages in place.** The developer\'s submission describes it as a Tauri and Rust desktop app that bundles a llama.cpp server for local inference.',
          'The directory lists it under Contract review and Document & PDF chat: it can answer questions about any imported document, but its main output is clause-level findings and rewrites rather than open-ended conversation.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Return Editor is a free download for Apple Silicon Macs (macOS 14 or later) and 64-bit Windows 10/11; Linux has a notification list only.**',
        ],
        columns: [
          'Item',
          'Where to get it',
        ],
        rows: [
          {
            Item: 'Mac',
            'Where to get it': '[Download page](https://returneditor.ai/download/): notarized .dmg, Apple Silicon only',
          },
          {
            Item: 'Windows',
            'Where to get it': '[Download page](https://returneditor.ai/download/): signed installer, no admin rights',
          },
          {
            Item: 'Linux',
            'Where to get it': 'Not available; email notification list',
          },
          {
            Item: 'Website',
            'Where to get it': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            Item: 'Privacy policy',
            'Where to get it': '[Privacy policy](https://returneditor.ai/privacy/)',
          },
          {
            Item: 'Terms',
            'Where to get it': '[Terms](https://returneditor.ai/terms/)',
          },
          {
            Item: 'Changelog',
            'Where to get it': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            Item: 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'Version as verified on 10 October 2026: 1.4.1, from the [changelog](https://returneditor.ai/changelog/). Windows SmartScreen may show a "Windows protected your PC" warning for the newly signed installer; the download page says to choose More info, then Run anyway.',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'Plans and Pricing',
        content: [
          '**The Free plan needs no account and has no cap on the local AI; the Pro plan adds cloud AI for a monthly or yearly fee.**',
        ],
        columns: [
          'Plan',
          'Price',
          'What it adds',
        ],
        rows: [
          {
            Plan: 'Free',
            Price: '$0',
            'What it adds': 'Local AI, local search, no account',
          },
          {
            Plan: 'Pro',
            Price: '$39/month or $390/year',
            'What it adds': 'Cloud AI, 500 actions/month',
          },
          {
            Plan: 'Counsel',
            Price: 'Not yet available',
            'What it adds': 'Waitlist; audit log, lockdown mode',
          },
        ],
        note: 'Prices as listed on [returneditor.ai](https://returneditor.ai/) at the time of checking; they may change, and the Counsel tier is announced, not released.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the product\'s own pages; none has been independently tested.**',
        ],
        items: [
          '**Analyze.** Imports PDF, DOCX, ODT, RTF and HTML, converts them to Markdown, and marks findings in traffic-light colors: red for risk, amber for items that need attention.',
          '**Ask.** Answers questions about a document with citations to the relevant clause, and runs semantic search across a whole folder of Markdown files.',
          '**Fix.** Proposes inline rewrites that you accept or reject; nothing changes until you choose.',
          '**Returns.** Saved, reusable checks, such as key-date extraction, that you run on any document; the documentation describes chaining several model passes.',
          '**Editor.** Variables and formulas inside documents, Mermaid charts, and export to PDF and HTML with charts and images carried over since version 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. Cloud AI',
        content: [
          '**In the Free plan the AI is a bundled llama.cpp engine that runs models on your own machine and works offline once a model is downloaded.** The home page lists Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B and Bielik 11B v3, a Polish-specialist model.',
          'Cloud AI is a Pro option: requests go through the maker\'s proxy, hosted by Hetzner in Germany, to Anthropic, which according to the privacy policy keeps them for up to 7 days and does not train on them.',
        ],
        items: [
          '**Hardware.** The default model is a 5.3 GB download; the site recommends 16 GB of memory.',
          '**Idle behavior.** The local model unloads after 30 minutes without a question by default; the changelog says this can be changed in settings.',
          '**Images.** The local model cannot read images yet, while cloud AI can read images in chat and in documents.',
          '**Telemetry.** The privacy policy says the desktop app has no client-side telemetry; the free app contacts the maker\'s server only for update checks (which can be disabled), crash reports you consent to, and support requests you send.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results, and the code is closed. PromptQuorum has not inspected network traffic; for confidential contracts, check the mode shown in the status bar and test with the network disconnected.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: [
          'Benefit',
          'What it means in real use',
          'Limitation / caveat',
        ],
        rows: [
          {
            Benefit: 'Local AI on the Free plan',
            'What it means in real use': 'Contracts stay on your computer; works offline.',
            'Limitation / caveat': 'Needs a multi-GB model download and enough RAM.',
          },
          {
            Benefit: 'Cited answers',
            'What it means in real use': 'Each answer points to the clause it came from.',
            'Limitation / caveat': 'Citation accuracy was not tested here.',
          },
          {
            Benefit: 'Reviewable rewrites',
            'What it means in real use': 'Fixes are proposals you accept or reject.',
            'Limitation / caveat': 'Quality depends on the model you run.',
          },
          {
            Benefit: 'Mac and Windows',
            'What it means in real use': 'One app on both, signed and notarized.',
            'Limitation / caveat': 'Apple Silicon only on Mac; no Linux build.',
          },
          {
            Benefit: 'Cloud option',
            'What it means in real use': 'A stronger model and image reading on Pro.',
            'Limitation / caveat': 'Content leaves your machine for Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who review contracts, policies or long reports and want the first pass to stay on their own computer.** The Free plan is built for this.',
          '**Small teams that want clause-level flags and cited answers without a per-seat cloud service.** Cloud AI is optional.',
          '**Polish-language readers.** The model list includes Bielik, a Polish-specialist model.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy of the risk flags.** PromptQuorum did not run the app, so which clauses it flags, misses or mis-rates is not assessed.',
          '**What the flags are tuned for.** The pages we read do not say which contract types, jurisdictions or standards the analysis is based on.',
          '**Source code and audits.** No public repository, third-party audit or certification was found, so privacy statements cannot be checked against code.',
          '**Company and install base.** The site names no team; the privacy policy identifies a sole proprietorship in Kraków, Poland, and customer numbers are not published.',
          '**Legal reliability.** AI-generated flags and rewrites are not legal advice; a qualified lawyer should check any contract you sign.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[AnythingLLM](/power-local-llm/anythingllm-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'General document chat with workspaces',
          },
          {
            App: '[PrivateGPT](/power-local-llm/privategpt-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Offline RAG over your files, developer-oriented',
          },
          {
            App: '[HilbertRaum](/power-local-llm/hilbertraum-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Portable offline workspace with document Q&A',
          },
          {
            App: '[Sidekick](/power-local-llm/sidekick-review)',
            Platforms: 'macOS',
            'Price / license': 'Free / MIT',
            'Key difference': 'Local chat over your files, Mac only',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Return Editor a replacement for a lawyer?',
            a: 'No. The app flags and rewrites with a language model, and models can miss or misread clauses; treat its output as a first pass and have a qualified lawyer review anything binding.',
          },
          {
            q: 'Is Return Editor open source?',
            a: 'No. The developer\'s submission lists it as proprietary and closed source, and no public source repository was found.',
          },
          {
            q: 'Do I need an account?',
            a: 'Not for the Free plan. Pro needs an account, because cloud requests are tied to an account for billing and rate limiting.',
          },
          {
            q: 'Does it work in languages other than English?',
            a: 'The pages we read do not list interface languages. Search uses a multilingual embedding model (bge-m3) and the model list includes the Polish-specialist Bielik, so test your own language on the Free plan first.',
          },
          {
            q: 'How often is it updated?',
            a: 'The changelog shows frequent releases: Windows support arrived in 1.3.4, and the latest release, 1.4.1, is dated 9 October 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Return Editor combines three things that are usually separate: clause-level contract review, cited document Q&A and a free on-device model, in one Mac and Windows app. Against that, it is closed source, young (Windows support dates from version 1.3.4), cloud AI sends content to Anthropic, and nothing here has been tested hands-on, including the quality of its risk flags. It suits people who want a private first pass over their own contracts; readers who need auditable code can compare [AnythingLLM](/power-local-llm/anythingllm-review) or [PrivateGPT](/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Return Editor](https://returneditor.ai/) — features, plans and local and cloud modes, checked 10 October 2026.',
          '[Download page](https://returneditor.ai/download/) — platforms, installers, version and signing notes.',
          '[Changelog](https://returneditor.ai/changelog/) — version 1.4.1, release dates and recent features.',
          '[Privacy policy](https://returneditor.ai/privacy/) and [security page](https://returneditor.ai/security/) — data flows, retention and hosting.',
          '[Documentation](https://returneditor.ai/docs/) — editor and AI feature overview.',
          'Listing submission from the developer, received by email, who disclosed building the app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — an MIT-licensed document-chat app with workspaces.',
          '[PrivateGPT Review](/power-local-llm/privategpt-review) — an Apache-2.0, offline RAG project.',
          '[HilbertRaum Review](/power-local-llm/hilbertraum-review) — a portable, no-install offline workspace.',
          '[Sidekick Review](/power-local-llm/sidekick-review) — a Mac app for local chat over your files.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Return Editor Review: Local-First AI Contract Review for Mac and Windows',
      description: 'Return Editor review: a desktop editor for Mac and Windows with clause-level contract risk flags, cited answers and a free local AI. Privacy, pricing, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/return-editor-review',
      inLanguage: 'en',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'People who review contracts and long documents on Mac or Windows and want to know what stays local',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Return Editor',
        },
        {
          '@type': 'Thing',
          name: 'Contract review',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/return-editor-review',
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
          item: 'https://promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Return Editor Review',
          item: 'https://promptquorum.com/power-local-llm/return-editor-review',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-de.webp',
    title: 'Return-Editor-Rezension: Lokale KI zur Vertragsprüfung für Mac und Windows',
    seoTitle: 'Return-Editor-Rezension: Lokale KI-Vertragsprüfung',
    intro: 'Return Editor ist ein Desktop-Dokumenteditor für Mac und Windows, der Verträge mit KI prüft: Er markiert riskante Klauseln, beantwortet Fragen mit Verweis auf die zugrunde liegende Klausel und schlägt Umformulierungen vor, die Sie annehmen oder ablehnen. Der Free-Tarif nutzt ein mitgeliefertes lokales Modell ohne Konto, ein kostenpflichtiger Pro-Tarif ergänzt optionale Cloud-KI. Die App ist Closed Source. Der Entwickler hat sie für das Verzeichnis eingereicht und offengelegt, dass er sie selbst entwickelt; PromptQuorum hat die Angaben am 10. Oktober 2026 mit [returneditor.ai](https://returneditor.ai/) und dem Changelog abgeglichen und die App nicht praktisch getestet.',
    metaDescription: 'Return-Editor-Rezension: Desktop-Vertragsprüfung für Mac und Windows mit Risikomarkierungen, zitierten Antworten und kostenloser lokaler KI. Datenschutz, Preise, Grenzen.',
    twitterDescription: 'Return-Editor-Rezension: eine Closed-Source-Desktop-App, die riskante Vertragsklauseln markiert und mit Zitaten antwortet; der Free-Tarif nutzt lokale KI auf Ihrem Rechner.',
    audience: 'Menschen, die Verträge und andere lange Dokumente auf Mac oder Windows prüfen und wissen wollen, was auf dem eigenen Rechner bleibt und was die Quellen nicht bestätigen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Return Editor Rezension',
    targetKeywords: [
      'return editor test',
      'return editor ki',
      'lokale ki vertragsprüfung',
      'offline vertragsprüfung software',
      'ki vertragsprüfung mac windows',
      'mit verträgen chatten lokal',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor (Version 1.4.1, Stand 10. Oktober 2026) ist eine Closed-Source-Desktop-App für Mac und Windows, die Verträge mit KI prüft; der kostenlose Tarif nutzt dafür ein lokales Modell, das laut Entwickler Dokumente auf Ihrem Rechner hält.** Die App markiert riskante Klauseln, beantwortet Fragen mit Klauselverweisen und entwirft Korrekturen, die Sie einzeln freigeben. Cloud-KI ist ein kostenpflichtiges, optionales Extra, und die meisten Angaben stammen von den eigenen Seiten des Produkts.',
    quickAnswerTop: {
      de: {
        question: 'Verlassen meine Dokumente meinen Rechner, wenn ich Return Editor nutze?',
        answer: 'Im Free-Tarif nicht: Laut Datenschutzerklärung bleiben Dokumente im lokalen Modus auf Ihrem Gerät. Cloud-KI ist eine Pro-Option, die Sie einschalten, und dann läuft der Inhalt jeder Anfrage über den Proxy des Herstellers zu Anthropic.',
        bullets: [
          'Läuft auf Apple-Silicon-Macs mit macOS 14 oder neuer und auf 64-Bit-Windows 10/11; eine Linux-Version gibt es noch nicht.',
          'Importiert PDF-, Word-, OpenDocument-, RTF- und HTML-Dateien und wandelt sie zur Bearbeitung in Markdown um.',
          'Closed Source, mit öffentlichem Changelog, aber ohne öffentliches Repository.',
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
        label: 'Was ist Return Editor?',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Tarife und Preise',
        anchor: 'plans-pricing',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Lokale vs. Cloud-KI',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Abwägungen: Vorteile vs. Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
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
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor ist eine Closed-Source-Desktop-App, die mit einem lokalen oder Cloud-Sprachmodell riskante Vertragsklauseln markiert, Fragen mit Zitaten beantwortet und Umformulierungen vorschlägt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie öffnen einen Vertrag, die App hebt möglicherweise riskante Klauseln hervor, und Sie stellen Fragen dazu; im Free-Tarif läuft das Modell auf Ihrem eigenen Rechner.',
          },
        ],
        items: [
          'Entwickler: laut Datenschutzerklärung ein in Krakau (Polen) eingetragenes Einzelunternehmen; die Person, die den Eintrag eingereicht hat, ist der Entwickler.',
          'Ablauf: Analyze markiert Klauseln, Ask antwortet mit Zitaten, Fix schlägt Umformulierungen vor, und Returns führt gespeicherte Prüfungen wie die Extraktion von Schlüsseldaten erneut aus.',
          'Lokale Engine: ein mitgelieferter llama.cpp-Server für herunterladbare Modelle; das Standardmodell ist ein Download von 5,3 GB, empfohlen werden 16 GB Arbeitsspeicher.',
          'Tarife: Free (lokal, ohne Konto) und Pro (ergänzt Cloud-KI); eine auf Kanzleien ausgerichtete Stufe Counsel ist angekündigt, aber nur per Warteliste verfügbar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Seiten von returneditor.ai, geprüft am 10. Oktober 2026, sowie eine Einreichung des Entwicklers. PromptQuorum hat weder die App noch die Genauigkeit ihrer Risikomarkierungen getestet; KI-Ausgaben sind keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Was ist Return Editor?',
        content: [
          '**Return Editor ist ein Markdown-basierter Dokumenteditor mit integriertem Workflow zur Vertragsprüfung: Sie importieren einen Vertrag, und die App analysiert ihn, beantwortet Fragen dazu und formuliert Passagen direkt im Text um.** Die Einreichung des Entwicklers beschreibt ihn als Desktop-App auf Basis von Tauri und Rust, die einen llama.cpp-Server für lokale Inferenz mitbringt.',
          'Das Verzeichnis führt ihn unter „Vertragsprüfung“ und „Dokument- & PDF-Chat“: Er kann Fragen zu jedem importierten Dokument beantworten, liefert aber vor allem Befunde auf Klauselebene und Umformulierungen statt offener Konversation.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Return Editor ist ein kostenloser Download für Apple-Silicon-Macs (macOS 14 oder neuer) und 64-Bit-Windows 10/11; für Linux gibt es nur eine Benachrichtigungsliste.**',
        ],
        columns: [
          'Angebot',
          'Bezugsquelle',
        ],
        rows: [
          {
            Angebot: 'Mac',
            Bezugsquelle: '[Download-Seite](https://returneditor.ai/download/): notarisierte .dmg, nur Apple Silicon',
          },
          {
            Angebot: 'Windows',
            Bezugsquelle: '[Download-Seite](https://returneditor.ai/download/): signiertes Installationsprogramm, ohne Adminrechte',
          },
          {
            Angebot: 'Linux',
            Bezugsquelle: 'Nicht verfügbar; E-Mail-Benachrichtigungsliste',
          },
          {
            Angebot: 'Website',
            Bezugsquelle: '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            Angebot: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung](https://returneditor.ai/privacy/)',
          },
          {
            Angebot: 'Nutzungsbedingungen',
            Bezugsquelle: '[Nutzungsbedingungen](https://returneditor.ai/terms/)',
          },
          {
            Angebot: 'Changelog',
            Bezugsquelle: '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            Angebot: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Version, geprüft am 10. Oktober 2026: 1.4.1, laut [Changelog](https://returneditor.ai/changelog/). Windows SmartScreen kann beim neu signierten Installationsprogramm die Warnung „Der Computer wurde durch Windows geschützt“ anzeigen; die Download-Seite empfiehlt, „Weitere Informationen“ und dann „Trotzdem ausführen“ zu wählen.',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'Tarife und Preise',
        content: [
          '**Der Free-Tarif braucht kein Konto und begrenzt die lokale KI nicht; der Pro-Tarif ergänzt Cloud-KI gegen eine monatliche oder jährliche Gebühr.**',
        ],
        columns: [
          'Tarif',
          'Preis',
          'Was er ergänzt',
        ],
        rows: [
          {
            Tarif: 'Free',
            Preis: '0 $',
            'Was er ergänzt': 'Lokale KI, lokale Suche, kein Konto',
          },
          {
            Tarif: 'Pro',
            Preis: '39 $/Monat oder 390 $/Jahr',
            'Was er ergänzt': 'Cloud-KI, 500 Aktionen/Monat',
          },
          {
            Tarif: 'Counsel',
            Preis: 'Noch nicht verfügbar',
            'Was er ergänzt': 'Warteliste; Audit-Log, Lockdown-Modus',
          },
        ],
        note: 'Preise laut [returneditor.ai](https://returneditor.ai/) am 10. Oktober 2026; sie können sich ändern. Die Stufe Counsel ist angekündigt, nicht veröffentlicht.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von den eigenen Seiten des Produkts; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Analyze.** Importiert PDF, DOCX, ODT, RTF und HTML, wandelt sie in Markdown um und kennzeichnet Befunde in Ampelfarben: Rot für Risiko, Gelb für Punkte, die Aufmerksamkeit brauchen.',
          '**Ask.** Beantwortet Fragen zu einem Dokument mit Verweis auf die relevante Klausel und durchsucht einen ganzen Ordner mit Markdown-Dateien semantisch.',
          '**Fix.** Schlägt Umformulierungen im Text vor, die Sie annehmen oder ablehnen; nichts ändert sich ohne Ihre Entscheidung.',
          '**Returns.** Gespeicherte, wiederverwendbare Prüfungen, etwa die Extraktion von Schlüsseldaten, die Sie auf jedes Dokument anwenden; die Dokumentation beschreibt das Verketten mehrerer Modelldurchläufe.',
          '**Editor.** Variablen und Formeln in Dokumenten, Mermaid-Diagramme sowie Export als PDF und HTML mit übernommenen Diagrammen und Bildern seit Version 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Lokale vs. Cloud-KI',
        content: [
          '**Im Free-Tarif ist die KI eine mitgelieferte llama.cpp-Engine, die Modelle auf Ihrem eigenen Rechner ausführt und nach dem Modell-Download offline funktioniert.** Die Startseite nennt Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B und Bielik 11B v3, ein auf Polnisch spezialisiertes Modell.',
          'Cloud-KI ist eine Pro-Option: Anfragen laufen über den Proxy des Herstellers, gehostet bei Hetzner in Deutschland, zu Anthropic, das sie laut Datenschutzerklärung bis zu 7 Tage speichert und nicht zum Training verwendet.',
        ],
        items: [
          '**Hardware.** Das Standardmodell ist ein Download von 5,3 GB; die Website empfiehlt 16 GB Arbeitsspeicher.',
          '**Leerlauf.** Das lokale Modell wird standardmäßig nach 30 Minuten ohne Frage entladen; laut Changelog lässt sich das in den Einstellungen ändern.',
          '**Bilder.** Das lokale Modell kann noch keine Bilder lesen, die Cloud-KI dagegen im Chat und in Dokumenten.',
          '**Telemetrie.** Laut Datenschutzerklärung hat die Desktop-App keine clientseitige Telemetrie; die kostenlose App kontaktiert den Server des Herstellers nur für Update-Prüfungen (abschaltbar), Absturzberichte, denen Sie zustimmen, und Support-Anfragen, die Sie senden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Herstellers, keine Audit-Ergebnisse, und der Code ist geschlossen. PromptQuorum hat den Netzwerkverkehr nicht untersucht; prüfen Sie bei vertraulichen Verträgen den in der Statusleiste angezeigten Modus und testen Sie mit getrennter Netzwerkverbindung.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: [
          'Vorteil',
          'Bedeutung in der Praxis',
          'Einschränkung / Hinweis',
        ],
        rows: [
          {
            Vorteil: 'Lokale KI im Free-Tarif',
            'Bedeutung in der Praxis': 'Verträge bleiben auf Ihrem Rechner; funktioniert offline.',
            'Einschränkung / Hinweis': 'Braucht einen Modell-Download von mehreren GB und genug RAM.',
          },
          {
            Vorteil: 'Zitierte Antworten',
            'Bedeutung in der Praxis': 'Jede Antwort verweist auf die zugehörige Klausel.',
            'Einschränkung / Hinweis': 'Die Zitiergenauigkeit wurde hier nicht getestet.',
          },
          {
            Vorteil: 'Prüfbare Umformulierungen',
            'Bedeutung in der Praxis': 'Korrekturen sind Vorschläge zum Annehmen oder Ablehnen.',
            'Einschränkung / Hinweis': 'Die Qualität hängt vom genutzten Modell ab.',
          },
          {
            Vorteil: 'Mac und Windows',
            'Bedeutung in der Praxis': 'Eine App für beide, signiert und notarisiert.',
            'Einschränkung / Hinweis': 'Auf dem Mac nur Apple Silicon; keine Linux-Version.',
          },
          {
            Vorteil: 'Cloud-Option',
            'Bedeutung in der Praxis': 'Stärkeres Modell und Bilderkennung mit Pro.',
            'Einschränkung / Hinweis': 'Inhalte verlassen Ihren Rechner Richtung Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die Verträge, Richtlinien oder lange Berichte prüfen und die erste Durchsicht auf dem eigenen Rechner behalten wollen.** Der Free-Tarif ist dafür gedacht.',
          '**Kleine Teams, die Klauselmarkierungen und zitierte Antworten ohne Cloud-Dienst pro Nutzer wollen.** Cloud-KI ist optional.',
          '**Polnischsprachige Nutzer.** Die Modellliste enthält Bielik, ein auf Polnisch spezialisiertes Modell.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit der Risikomarkierungen.** PromptQuorum hat die App nicht ausgeführt; welche Klauseln sie markiert, übersieht oder falsch einstuft, wurde nicht bewertet.',
          '**Worauf die Markierungen abgestimmt sind.** Die geprüften Seiten sagen nicht, auf welche Vertragsarten, Rechtsordnungen oder Standards sich die Analyse stützt.',
          '**Quellcode und Audits.** Es wurden weder ein öffentliches Repository noch ein Drittanbieter-Audit oder eine Zertifizierung gefunden; Datenschutzangaben lassen sich daher nicht am Code überprüfen.',
          '**Unternehmen und Nutzerbasis.** Die Website nennt kein Team; die Datenschutzerklärung nennt ein Einzelunternehmen in Krakau (Polen), und Kundenzahlen werden nicht veröffentlicht.',
          '**Rechtliche Verlässlichkeit.** KI-generierte Markierungen und Umformulierungen sind keine Rechtsberatung; jeden Vertrag, den Sie unterschreiben, sollte ein qualifizierter Jurist prüfen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[AnythingLLM](/de/power-local-llm/anythingllm-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Allgemeiner Dokumenten-Chat mit Workspaces',
          },
          {
            App: '[PrivateGPT](/de/power-local-llm/privategpt-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Offline-RAG über Ihre Dateien, entwicklerorientiert',
          },
          {
            App: '[HilbertRaum](/de/power-local-llm/hilbertraum-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / GPL-3.0',
            'Wesentlicher Unterschied': 'Portabler Offline-Arbeitsbereich mit Dokumenten-Q&A',
          },
          {
            App: '[Sidekick](/de/power-local-llm/sidekick-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Lokaler Chat über Ihre Dateien, nur Mac',
          },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ersetzt Return Editor einen Anwalt?',
            a: 'Nein. Die App markiert und formuliert mit einem Sprachmodell um, und Modelle können Klauseln übersehen oder falsch deuten; betrachten Sie die Ausgabe als erste Durchsicht und lassen Sie alles Verbindliche von einem qualifizierten Juristen prüfen.',
          },
          {
            q: 'Ist Return Editor Open Source?',
            a: 'Nein. Die Einreichung des Entwicklers nennt die App proprietär und Closed Source, und es wurde kein öffentliches Quellcode-Repository gefunden.',
          },
          {
            q: 'Brauche ich ein Konto?',
            a: 'Für den Free-Tarif nicht. Pro braucht ein Konto, weil Cloud-Anfragen für Abrechnung und Ratenbegrenzung einem Konto zugeordnet werden.',
          },
          {
            q: 'Funktioniert die App auch in anderen Sprachen als Englisch?',
            a: 'Die geprüften Seiten nennen keine Oberflächensprachen. Die Suche nutzt ein mehrsprachiges Embedding-Modell (bge-m3), und die Modellliste enthält das auf Polnisch spezialisierte Bielik; testen Sie Ihre Sprache daher zuerst im Free-Tarif.',
          },
          {
            q: 'Wie oft wird sie aktualisiert?',
            a: 'Der Changelog zeigt häufige Releases: Windows-Unterstützung kam mit 1.3.4, und das neueste Release 1.4.1 trägt das Datum 9. Oktober 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Return Editor verbindet drei Dinge, die sonst meist getrennt sind: Vertragsprüfung auf Klauselebene, Dokumenten-Q&A mit Zitaten und ein kostenloses Modell auf dem Gerät, in einer App für Mac und Windows. Dagegen stehen Closed Source, ein junges Produkt (Windows-Unterstützung seit Version 1.3.4), Cloud-KI, die Inhalte an Anthropic sendet, und die Tatsache, dass hier nichts praktisch getestet wurde, auch nicht die Qualität der Risikomarkierungen. Sie eignet sich für Menschen, die eine private erste Durchsicht eigener Verträge wollen; wer überprüfbaren Code braucht, kann [AnythingLLM](/de/power-local-llm/anythingllm-review) oder [PrivateGPT](/de/power-local-llm/privategpt-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Return Editor](https://returneditor.ai/) — Funktionen, Tarife sowie lokaler und Cloud-Modus, geprüft am 10. Oktober 2026.',
          '[Download-Seite](https://returneditor.ai/download/) — Plattformen, Installationsprogramme, Version und Hinweise zur Signierung.',
          '[Changelog](https://returneditor.ai/changelog/) — Version 1.4.1, Release-Daten und aktuelle Funktionen.',
          '[Datenschutzerklärung](https://returneditor.ai/privacy/) und [Sicherheitsseite](https://returneditor.ai/security/) — Datenflüsse, Aufbewahrung und Hosting.',
          '[Dokumentation](https://returneditor.ai/docs/) — Überblick über Editor- und KI-Funktionen.',
          'Einreichung des Entwicklers per E-Mail, der offengelegt hat, die App selbst zu entwickeln.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — eine MIT-lizenzierte Dokumenten-Chat-App mit Workspaces.',
          '[PrivateGPT-Rezension](/de/power-local-llm/privategpt-review) — ein Apache-2.0-lizenziertes Offline-RAG-Projekt.',
          '[HilbertRaum-Rezension](/de/power-local-llm/hilbertraum-review) — ein portabler Offline-Arbeitsbereich ohne Installation.',
          '[Sidekick-Rezension](/de/power-local-llm/sidekick-review) — eine Mac-App für lokalen Chat über Ihre Dateien.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-es.webp',
    title: 'Análisis de Return Editor: revisión de contratos con IA local para Mac y Windows',
    seoTitle: 'Análisis de Return Editor: revisión de contratos con IA local',
    intro: 'Return Editor es un editor de documentos de escritorio para Mac y Windows que revisa contratos con IA: señala cláusulas de riesgo, responde preguntas citando la cláusula de la que proceden y propone reescrituras que usted acepta o rechaza. Su plan Free ejecuta un modelo local incluido, sin cuenta, y el plan de pago Pro añade IA en la nube opcional. La aplicación es de código cerrado. Su desarrollador la envió al directorio y declaró que la desarrolla; PromptQuorum comprobó los datos en [returneditor.ai](https://returneditor.ai/) y su registro de cambios el 10 de octubre de 2026 y no ha probado la aplicación en la práctica.',
    metaDescription: 'Análisis de Return Editor: revisión de contratos en Mac y Windows con alertas de riesgo, respuestas citadas e IA local gratuita. Privacidad, precios y límites.',
    twitterDescription: 'Análisis de Return Editor: una app de escritorio de código cerrado que señala cláusulas de riesgo y responde con citas, con un plan gratuito que ejecuta IA local en su equipo.',
    audience: 'Personas que revisan contratos y otros documentos largos en Mac o Windows y quieren saber qué se queda en su equipo y qué no confirman las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Return Editor',
    targetKeywords: [
      'return editor análisis',
      'return editor ia',
      'revisión de contratos con ia local',
      'software de revisión de contratos sin conexión',
      'revisión de contratos ia mac windows',
      'chatear con contratos en local',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor (versión 1.4.1 a 10 de octubre de 2026) es una aplicación de escritorio de código cerrado para Mac y Windows que revisa contratos con IA, y su plan gratuito lo hace con un modelo local que, según el desarrollador, mantiene los documentos en su equipo.** Marca cláusulas de riesgo, responde preguntas con citas de cláusulas y redacta correcciones que usted aprueba una a una. La IA en la nube es un extra de pago y opcional, y la mayoría de las afirmaciones proceden de las propias páginas del producto.',
    quickAnswerTop: {
      es: {
        question: '¿Salen mis documentos de mi equipo cuando uso Return Editor?',
        answer: 'No con el plan Free: la política de privacidad indica que los documentos permanecen en su equipo en modo local. La IA en la nube es una opción de Pro que usted activa, y en ese modo el contenido de cada solicitud pasa por el proxy del desarrollador hasta Anthropic.',
        bullets: [
          'Funciona en Mac con Apple Silicon y macOS 14 o posterior, y en Windows 10/11 de 64 bits; todavía no hay versión para Linux.',
          'Importa archivos PDF, Word, OpenDocument, RTF y HTML y los convierte a Markdown para editarlos.',
          'Código cerrado, con registro de cambios público pero sin repositorio público.',
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
        label: 'Qué es Return Editor',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'Cómo obtenerla',
        anchor: 'get-it',
      },
      {
        label: 'Planes y precios',
        anchor: 'plans-pricing',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'IA local o en la nube',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Ventajas y limitaciones',
        anchor: 'tradeoffs',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
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
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor es una aplicación de escritorio de código cerrado que usa un modelo de lenguaje local o en la nube para señalar cláusulas contractuales de riesgo, responder con citas y sugerir reescrituras.',
          },
          {
            type: 'plain-terms',
            text: 'Abre un contrato, la aplicación resalta las cláusulas que pueden ser arriesgadas y usted le hace preguntas; en el plan Free el modelo se ejecuta en su propio equipo.',
          },
        ],
        items: [
          'Desarrollador: según su política de privacidad, un empresario individual registrado en Cracovia (Polonia); quien envió la ficha es el desarrollador.',
          'Flujo: Analyze marca cláusulas, Ask responde con citas, Fix propone reescrituras y Returns vuelve a ejecutar comprobaciones guardadas, como la extracción de fechas clave.',
          'Motor local: un servidor llama.cpp incluido que ejecuta modelos descargables; el modelo por defecto es una descarga de 5,3 GB y se recomiendan 16 GB de memoria.',
          'Planes: Free (local, sin cuenta) y Pro (añade IA en la nube); un nivel Counsel pensado para despachos está anunciado, pero solo con lista de espera.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en páginas de returneditor.ai consultadas el 10 de octubre de 2026 y en un envío del desarrollador. PromptQuorum no ha probado la aplicación ni la precisión de sus alertas de riesgo, y la salida de una IA no es asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Qué es Return Editor',
        content: [
          '**Return Editor es un editor de documentos basado en Markdown con un flujo de revisión de contratos integrado: usted importa un contrato y la aplicación lo analiza, responde preguntas sobre él y reescribe pasajes directamente en el texto.** El envío del desarrollador lo describe como una aplicación de escritorio Tauri y Rust que incluye un servidor llama.cpp para la inferencia local.',
          'El directorio lo clasifica en «Revisión de contratos» y «Chat de documentos y PDF»: puede responder preguntas sobre cualquier documento importado, pero su resultado principal son hallazgos por cláusula y reescrituras, no una conversación abierta.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Return Editor se descarga gratis para Mac con Apple Silicon (macOS 14 o posterior) y Windows 10/11 de 64 bits; para Linux solo hay una lista de avisos.**',
        ],
        columns: [
          'Elemento',
          'Dónde obtenerla',
        ],
        rows: [
          {
            Elemento: 'Mac',
            'Dónde obtenerla': '[Página de descarga](https://returneditor.ai/download/): .dmg notarizado, solo Apple Silicon',
          },
          {
            Elemento: 'Windows',
            'Dónde obtenerla': '[Página de descarga](https://returneditor.ai/download/): instalador firmado, sin admin',
          },
          {
            Elemento: 'Linux',
            'Dónde obtenerla': 'No disponible; lista de avisos por correo',
          },
          {
            Elemento: 'Sitio web',
            'Dónde obtenerla': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            Elemento: 'Privacidad',
            'Dónde obtenerla': '[Política de privacidad](https://returneditor.ai/privacy/)',
          },
          {
            Elemento: 'Términos',
            'Dónde obtenerla': '[Términos de uso](https://returneditor.ai/terms/)',
          },
          {
            Elemento: 'Registro de cambios',
            'Dónde obtenerla': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            Elemento: 'Código fuente',
            'Dónde obtenerla': 'No publicado',
          },
        ],
        note: 'Versión verificada el 10 de octubre de 2026: 1.4.1, según el [changelog](https://returneditor.ai/changelog/). Windows SmartScreen puede mostrar el aviso «Windows protegió su PC» para el instalador recién firmado; la página de descarga indica elegir «Más información» y después «Ejecutar de todas formas».',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'Planes y precios',
        content: [
          '**El plan Free no necesita cuenta ni limita la IA local; el plan Pro añade IA en la nube con una cuota mensual o anual.**',
        ],
        columns: [
          'Plan',
          'Precio',
          'Qué añade',
        ],
        rows: [
          {
            Plan: 'Free',
            Precio: '0 $',
            'Qué añade': 'IA local, búsqueda local, sin cuenta',
          },
          {
            Plan: 'Pro',
            Precio: '39 $/mes o 390 $/año',
            'Qué añade': 'IA en la nube, 500 acciones/mes',
          },
          {
            Plan: 'Counsel',
            Precio: 'Aún no disponible',
            'Qué añade': 'Lista de espera; registro de auditoría, modo bloqueo',
          },
        ],
        note: 'Precios según [returneditor.ai](https://returneditor.ai/) el 10 de octubre de 2026; pueden cambiar. El nivel Counsel está anunciado, no lanzado.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede de las propias páginas del producto; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Analyze.** Importa PDF, DOCX, ODT, RTF y HTML, los convierte a Markdown y marca los hallazgos con colores de semáforo: rojo para riesgo, ámbar para puntos que requieren atención.',
          '**Ask.** Responde preguntas sobre un documento citando la cláusula relevante y realiza búsqueda semántica en una carpeta entera de archivos Markdown.',
          '**Fix.** Propone reescrituras en el texto que usted acepta o rechaza; nada cambia hasta que usted lo decide.',
          '**Returns.** Comprobaciones guardadas y reutilizables, como la extracción de fechas clave, que se aplican a cualquier documento; la documentación describe el encadenado de varias pasadas del modelo.',
          '**Editor.** Variables y fórmulas dentro de los documentos, gráficos Mermaid y exportación a PDF y HTML con gráficos e imágenes conservados desde la versión 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'IA local o en la nube',
        content: [
          '**En el plan Free la IA es un motor llama.cpp incluido que ejecuta modelos en su propio equipo y funciona sin conexión una vez descargado un modelo.** La página de inicio menciona Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B y Bielik 11B v3, un modelo especializado en polaco.',
          'La IA en la nube es una opción de Pro: las solicitudes pasan por el proxy del desarrollador, alojado por Hetzner en Alemania, hasta Anthropic, que según la política de privacidad las conserva hasta 7 días y no las usa para entrenar.',
        ],
        items: [
          '**Hardware.** El modelo por defecto es una descarga de 5,3 GB; el sitio recomienda 16 GB de memoria.',
          '**Inactividad.** El modelo local se descarga de memoria tras 30 minutos sin preguntas por defecto; el changelog indica que se puede cambiar en los ajustes.',
          '**Imágenes.** El modelo local aún no puede leer imágenes, mientras que la IA en la nube sí las lee en el chat y en los documentos.',
          '**Telemetría.** La política de privacidad afirma que la aplicación de escritorio no tiene telemetría en el cliente; la aplicación gratuita solo contacta con el servidor del desarrollador para comprobar actualizaciones (se pueden desactivar), informes de fallos que usted acepta y solicitudes de soporte que usted envía.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código es cerrado. PromptQuorum no ha inspeccionado el tráfico de red; con contratos confidenciales, compruebe el modo que muestra la barra de estado y pruebe con la red desconectada.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: [
          'Ventaja',
          'En el uso real',
          'Limitación / salvedad',
        ],
        rows: [
          {
            Ventaja: 'IA local con Free',
            'En el uso real': 'Los contratos se quedan en su equipo; funciona sin conexión.',
            'Limitación / salvedad': 'Requiere un modelo de varios GB y suficiente RAM.',
          },
          {
            Ventaja: 'Respuestas citadas',
            'En el uso real': 'Cada respuesta remite a la cláusula de origen.',
            'Limitación / salvedad': 'La exactitud de las citas no se probó aquí.',
          },
          {
            Ventaja: 'Reescrituras revisables',
            'En el uso real': 'Las correcciones son propuestas que acepta o rechaza.',
            'Limitación / salvedad': 'La calidad depende del modelo que use.',
          },
          {
            Ventaja: 'Mac y Windows',
            'En el uso real': 'Una app para ambos, firmada y notarizada.',
            'Limitación / salvedad': 'En Mac solo Apple Silicon; sin versión Linux.',
          },
          {
            Ventaja: 'Opción en la nube',
            'En el uso real': 'Un modelo más potente y lectura de imágenes con Pro.',
            'Limitación / salvedad': 'El contenido sale de su equipo hacia Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que revisan contratos, políticas o informes largos y quieren que la primera lectura se quede en su propio equipo.** El plan Free está pensado para ello.',
          '**Equipos pequeños que quieren alertas por cláusula y respuestas citadas sin un servicio en la nube por usuario.** La IA en la nube es opcional.',
          '**Lectores en polaco.** La lista de modelos incluye Bielik, un modelo especializado en polaco.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión de las alertas de riesgo.** PromptQuorum no ejecutó la aplicación, así que no se evaluó qué cláusulas marca, omite o valora mal.',
          '**Para qué están ajustadas las alertas.** Las páginas consultadas no indican en qué tipos de contrato, jurisdicciones o estándares se basa el análisis.',
          '**Código fuente y auditorías.** No se encontró repositorio público, auditoría de terceros ni certificación, por lo que las declaraciones de privacidad no pueden contrastarse con el código.',
          '**Empresa y base de usuarios.** El sitio no nombra a ningún equipo; la política de privacidad identifica a un empresario individual en Cracovia (Polonia) y no se publican cifras de clientes.',
          '**Fiabilidad jurídica.** Las alertas y reescrituras generadas por IA no son asesoramiento jurídico; un abogado cualificado debería revisar cualquier contrato que firme.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: '[AnythingLLM](/es/power-local-llm/anythingllm-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat de documentos general con espacios de trabajo',
          },
          {
            App: '[PrivateGPT](/es/power-local-llm/privategpt-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'RAG sin conexión sobre sus archivos, orientado a desarrolladores',
          },
          {
            App: '[HilbertRaum](/es/power-local-llm/hilbertraum-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave': 'Espacio de trabajo portátil sin conexión con preguntas sobre documentos',
          },
          {
            App: '[Sidekick](/es/power-local-llm/sidekick-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat local sobre sus archivos, solo Mac',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirme el precio, la licencia y las plataformas de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Sustituye Return Editor a un abogado?',
            a: 'No. La aplicación señala y reescribe con un modelo de lenguaje, y los modelos pueden pasar por alto o interpretar mal cláusulas; considere su salida una primera lectura y pida a un jurista cualificado que revise todo lo vinculante.',
          },
          {
            q: '¿Es Return Editor de código abierto?',
            a: 'No. El envío del desarrollador lo describe como propietario y de código cerrado, y no se encontró ningún repositorio público de código fuente.',
          },
          {
            q: '¿Necesito una cuenta?',
            a: 'No para el plan Free. Pro requiere una cuenta, porque las solicitudes en la nube se asocian a una cuenta para la facturación y la limitación de uso.',
          },
          {
            q: '¿Funciona en otros idiomas además del inglés?',
            a: 'Las páginas consultadas no enumeran los idiomas de la interfaz. La búsqueda usa un modelo de embeddings multilingüe (bge-m3) y la lista de modelos incluye Bielik, especializado en polaco; pruebe primero su idioma con el plan Free.',
          },
          {
            q: '¿Con qué frecuencia se actualiza?',
            a: 'El changelog muestra versiones frecuentes: el soporte para Windows llegó con la 1.3.4 y la última versión, la 1.4.1, es del 9 de octubre de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Return Editor reúne tres cosas que suelen estar separadas: revisión de contratos por cláusula, preguntas y respuestas citadas sobre documentos y un modelo gratuito en el dispositivo, en una sola aplicación para Mac y Windows. En contra, es de código cerrado, es joven (Windows desde la versión 1.3.4), la IA en la nube envía contenido a Anthropic y aquí no se ha probado nada en la práctica, tampoco la calidad de sus alertas de riesgo. Encaja con quien quiere una primera lectura privada de sus propios contratos; quien necesite código auditable puede comparar [AnythingLLM](/es/power-local-llm/anythingllm-review) o [PrivateGPT](/es/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Return Editor](https://returneditor.ai/) — funciones, planes y modos local y en la nube, consultados el 10 de octubre de 2026.',
          '[Página de descarga](https://returneditor.ai/download/) — plataformas, instaladores, versión y notas sobre la firma.',
          '[Changelog](https://returneditor.ai/changelog/) — versión 1.4.1, fechas de publicación y funciones recientes.',
          '[Política de privacidad](https://returneditor.ai/privacy/) y [página de seguridad](https://returneditor.ai/security/) — flujos de datos, retención y alojamiento.',
          '[Documentación](https://returneditor.ai/docs/) — resumen de las funciones del editor y de la IA.',
          'Envío del desarrollador recibido por correo, que declaró desarrollar la aplicación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de AnythingLLM](/es/power-local-llm/anythingllm-review) — una app de chat de documentos con licencia MIT y espacios de trabajo.',
          '[Análisis de PrivateGPT](/es/power-local-llm/privategpt-review) — un proyecto RAG sin conexión con licencia Apache 2.0.',
          '[Análisis de HilbertRaum](/es/power-local-llm/hilbertraum-review) — un espacio de trabajo portátil sin instalación.',
          '[Análisis de Sidekick](/es/power-local-llm/sidekick-review) — una app de Mac para chatear en local sobre sus archivos.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-fr.webp',
    title: 'Avis Return Editor : revue de contrats par IA locale pour Mac et Windows',
    seoTitle: 'Avis Return Editor : revue de contrats par IA locale',
    intro: 'Return Editor est un éditeur de documents de bureau pour Mac et Windows qui révise les contrats avec l\'IA : il signale les clauses risquées, répond aux questions en citant la clause concernée et propose des reformulations que vous acceptez ou refusez. Son offre Free utilise un modèle local intégré, sans compte, et l\'offre payante Pro ajoute une IA cloud optionnelle. L\'application est propriétaire. Son développeur l\'a soumise à l\'annuaire en précisant qu\'il la conçoit ; PromptQuorum a vérifié les informations sur [returneditor.ai](https://returneditor.ai/) et son journal des modifications le 10 octobre 2026 et n\'a pas testé l\'application en pratique.',
    metaDescription: 'Avis Return Editor : revue de contrats sur Mac et Windows avec alertes de risque, réponses citées et IA locale gratuite. Confidentialité, prix, limites.',
    twitterDescription: 'Avis Return Editor : une application de bureau propriétaire qui signale les clauses risquées et répond avec des citations, avec une offre gratuite à IA locale sur votre ordinateur.',
    audience: 'Les personnes qui relisent des contrats et de longs documents sur Mac ou Windows et veulent savoir ce qui reste sur leur ordinateur et ce que les sources ne confirment pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Return Editor',
    targetKeywords: [
      'avis return editor',
      'return editor ia',
      'revue de contrats ia locale',
      'logiciel revue de contrats hors ligne',
      'revue de contrats ia mac windows',
      'discuter avec ses contrats en local',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor (version 1.4.1 au 10 octobre 2026) est une application de bureau propriétaire pour Mac et Windows qui révise les contrats avec l\'IA ; son offre gratuite le fait avec un modèle local qui, selon l\'éditeur, garde les documents sur votre ordinateur.** Elle signale les clauses risquées, répond aux questions avec des citations de clauses et rédige des corrections que vous validez une par une. L\'IA cloud est un supplément payant et optionnel, et la plupart des affirmations ici proviennent des pages du produit.',
    quickAnswerTop: {
      fr: {
        question: 'Mes documents quittent-ils mon ordinateur quand j\'utilise Return Editor ?',
        answer: 'Pas avec l\'offre Free : la politique de confidentialité indique que les documents restent sur votre machine en mode local. L\'IA cloud est une option Pro que vous activez ; dans ce mode, le contenu de chaque requête transite par le proxy de l\'éditeur jusqu\'à Anthropic.',
        bullets: [
          'Fonctionne sur les Mac Apple Silicon sous macOS 14 ou plus récent et sous Windows 10/11 64 bits ; il n\'existe pas encore de version Linux.',
          'Importe des fichiers PDF, Word, OpenDocument, RTF et HTML et les convertit en Markdown pour l\'édition.',
          'Propriétaire, avec un journal des modifications public mais sans dépôt public.',
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
        label: 'Qu\'est-ce que Return Editor ?',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Offres et tarifs',
        anchor: 'plans-pricing',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'IA locale ou IA cloud',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Compromis : avantages et limites',
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
        label: 'Lectures complémentaires',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor est une application de bureau propriétaire qui utilise un modèle de langage local ou cloud pour signaler les clauses contractuelles risquées, répondre avec des citations et suggérer des reformulations.',
          },
          {
            type: 'plain-terms',
            text: 'Vous ouvrez un contrat, l\'application met en évidence les clauses potentiellement risquées et vous posez vos questions ; avec l\'offre Free, le modèle tourne sur votre propre ordinateur.',
          },
        ],
        items: [
          'Éditeur : une entreprise individuelle immatriculée à Cracovie (Pologne) d\'après sa politique de confidentialité ; la personne qui a soumis la fiche est le développeur.',
          'Fonctionnement : Analyze signale les clauses, Ask répond avec des citations, Fix propose des reformulations et Returns relance des vérifications enregistrées, comme l\'extraction des dates clés.',
          'Moteur local : un serveur llama.cpp intégré qui exécute des modèles téléchargeables ; le modèle par défaut pèse 5,3 Go et 16 Go de mémoire sont recommandés.',
          'Offres : Free (local, sans compte) et Pro (ajoute l\'IA cloud) ; une offre Counsel destinée aux cabinets est annoncée mais disponible uniquement sur liste d\'attente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis repose sur des pages de returneditor.ai consultées le 10 octobre 2026 et sur une soumission du développeur. PromptQuorum n\'a testé ni l\'application ni la fiabilité de ses alertes de risque, et une sortie d\'IA ne constitue pas un conseil juridique.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Qu\'est-ce que Return Editor ?',
        content: [
          '**Return Editor est un éditeur de documents basé sur Markdown, avec un flux de revue de contrats intégré : vous importez un contrat, et l\'application l\'analyse, répond aux questions à son sujet et réécrit des passages directement dans le texte.** La soumission du développeur le décrit comme une application de bureau Tauri et Rust qui embarque un serveur llama.cpp pour l\'inférence locale.',
          'L\'annuaire le classe dans « Revue de contrats » et « Chat de documents et PDF » : il répond aux questions sur n\'importe quel document importé, mais produit surtout des constats par clause et des réécritures plutôt qu\'une conversation libre.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Return Editor se télécharge gratuitement pour les Mac Apple Silicon (macOS 14 ou plus récent) et Windows 10/11 64 bits ; pour Linux, il n\'existe qu\'une liste de notification.**',
        ],
        columns: [
          'Élément',
          'Où l\'obtenir',
        ],
        rows: [
          {
            'Élément': 'Mac',
            'Où l\'obtenir': '[Page de téléchargement](https://returneditor.ai/download/) : .dmg notarisé, Apple Silicon uniquement',
          },
          {
            'Élément': 'Windows',
            'Où l\'obtenir': '[Page de téléchargement](https://returneditor.ai/download/) : installeur signé, sans droits admin',
          },
          {
            'Élément': 'Linux',
            'Où l\'obtenir': 'Non disponible ; liste de notification par e-mail',
          },
          {
            'Élément': 'Site web',
            'Où l\'obtenir': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            'Élément': 'Confidentialité',
            'Où l\'obtenir': '[Politique de confidentialité](https://returneditor.ai/privacy/)',
          },
          {
            'Élément': 'Conditions',
            'Où l\'obtenir': '[Conditions d\'utilisation](https://returneditor.ai/terms/)',
          },
          {
            'Élément': 'Journal des modifications',
            'Où l\'obtenir': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            'Élément': 'Code source',
            'Où l\'obtenir': 'Non publié',
          },
        ],
        note: 'Version vérifiée le 10 octobre 2026 : 1.4.1, d\'après le [changelog](https://returneditor.ai/changelog/). Windows SmartScreen peut afficher l\'avertissement « Windows a protégé votre ordinateur » pour l\'installeur récemment signé ; la page de téléchargement indique de choisir « Informations complémentaires », puis « Exécuter quand même ».',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'Offres et tarifs',
        content: [
          '**L\'offre Free ne demande aucun compte et ne plafonne pas l\'IA locale ; l\'offre Pro ajoute l\'IA cloud moyennant un abonnement mensuel ou annuel.**',
        ],
        columns: [
          'Offre',
          'Prix',
          'Ce qu\'elle ajoute',
        ],
        rows: [
          {
            Offre: 'Free',
            Prix: '0 $',
            'Ce qu\'elle ajoute': 'IA locale, recherche locale, sans compte',
          },
          {
            Offre: 'Pro',
            Prix: '39 $/mois ou 390 $/an',
            'Ce qu\'elle ajoute': 'IA cloud, 500 actions/mois',
          },
          {
            Offre: 'Counsel',
            Prix: 'Pas encore disponible',
            'Ce qu\'elle ajoute': 'Liste d\'attente ; journal d\'audit, mode verrouillé',
          },
        ],
        note: 'Prix affichés sur [returneditor.ai](https://returneditor.ai/) le 10 octobre 2026, susceptibles de changer ; l\'offre Counsel est annoncée, pas publiée.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient des pages du produit ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Analyze.** Importe PDF, DOCX, ODT, RTF et HTML, les convertit en Markdown et signale les constats par couleurs de feu tricolore : rouge pour un risque, orange pour un point d\'attention.',
          '**Ask.** Répond aux questions sur un document en citant la clause concernée et lance une recherche sémantique dans tout un dossier de fichiers Markdown.',
          '**Fix.** Propose des réécritures dans le texte que vous acceptez ou refusez ; rien ne change sans votre décision.',
          '**Returns.** Des vérifications enregistrées et réutilisables, comme l\'extraction des dates clés, à appliquer à n\'importe quel document ; la documentation décrit l\'enchaînement de plusieurs passes de modèle.',
          '**Éditeur.** Variables et formules dans les documents, diagrammes Mermaid, et export PDF et HTML avec graphiques et images conservés depuis la version 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'IA locale ou IA cloud',
        content: [
          '**Avec l\'offre Free, l\'IA est un moteur llama.cpp intégré qui exécute des modèles sur votre propre machine et fonctionne hors ligne une fois un modèle téléchargé.** La page d\'accueil cite Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B et Bielik 11B v3, un modèle spécialisé en polonais.',
          'L\'IA cloud est une option Pro : les requêtes passent par le proxy de l\'éditeur, hébergé par Hetzner en Allemagne, puis par Anthropic, qui les conserve jusqu\'à 7 jours selon la politique de confidentialité et ne les utilise pas pour l\'entraînement.',
        ],
        items: [
          '**Matériel.** Le modèle par défaut est un téléchargement de 5,3 Go ; le site recommande 16 Go de mémoire.',
          '**Inactivité.** Le modèle local est déchargé après 30 minutes sans question par défaut ; le changelog indique que cela se règle dans les paramètres.',
          '**Images.** Le modèle local ne sait pas encore lire les images, alors que l\'IA cloud les lit dans le chat et dans les documents.',
          '**Télémétrie.** La politique de confidentialité indique que l\'application de bureau n\'a aucune télémétrie côté client ; l\'application gratuite ne contacte le serveur de l\'éditeur que pour les vérifications de mise à jour (désactivables), les rapports de plantage que vous acceptez et les demandes d\'assistance que vous envoyez.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur, pas des résultats d\'audit, et le code est fermé. PromptQuorum n\'a pas inspecté le trafic réseau ; pour des contrats confidentiels, vérifiez le mode affiché dans la barre d\'état et testez réseau coupé.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: [
          'Avantage',
          'En pratique',
          'Limite / réserve',
        ],
        rows: [
          {
            Avantage: 'IA locale avec Free',
            'En pratique': 'Les contrats restent sur votre ordinateur ; fonctionne hors ligne.',
            'Limite / réserve': 'Nécessite un modèle de plusieurs Go et assez de RAM.',
          },
          {
            Avantage: 'Réponses citées',
            'En pratique': 'Chaque réponse renvoie à la clause d\'origine.',
            'Limite / réserve': 'La fiabilité des citations n\'a pas été testée ici.',
          },
          {
            Avantage: 'Réécritures vérifiables',
            'En pratique': 'Les corrections sont des propositions à accepter ou refuser.',
            'Limite / réserve': 'La qualité dépend du modèle utilisé.',
          },
          {
            Avantage: 'Mac et Windows',
            'En pratique': 'Une application sur les deux, signée et notarisée.',
            'Limite / réserve': 'Apple Silicon uniquement sur Mac ; pas de version Linux.',
          },
          {
            Avantage: 'Option cloud',
            'En pratique': 'Modèle plus puissant et lecture d\'images avec Pro.',
            'Limite / réserve': 'Le contenu quitte votre machine vers Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les personnes qui relisent des contrats, des politiques ou de longs rapports et veulent garder la première lecture sur leur ordinateur.** L\'offre Free est conçue pour cela.',
          '**Les petites équipes qui veulent des alertes par clause et des réponses citées sans service cloud facturé par utilisateur.** L\'IA cloud est optionnelle.',
          '**Les lecteurs de langue polonaise.** La liste des modèles inclut Bielik, un modèle spécialisé en polonais.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Fiabilité des alertes de risque.** PromptQuorum n\'a pas exécuté l\'application ; les clauses qu\'elle signale, manque ou évalue mal n\'ont donc pas été examinées.',
          '**Sur quoi les alertes sont calibrées.** Les pages consultées n\'indiquent pas à quels types de contrats, juridictions ou référentiels l\'analyse se rapporte.',
          '**Code source et audits.** Aucun dépôt public, audit tiers ni certification n\'a été trouvé ; les déclarations de confidentialité ne peuvent donc pas être vérifiées dans le code.',
          '**Entreprise et base d\'utilisateurs.** Le site ne nomme aucune équipe ; la politique de confidentialité désigne une entreprise individuelle à Cracovie (Pologne), et le nombre de clients n\'est pas publié.',
          '**Fiabilité juridique.** Les alertes et réécritures générées par l\'IA ne constituent pas un conseil juridique ; un juriste qualifié devrait relire tout contrat que vous signez.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[AnythingLLM](/fr/power-local-llm/anythingllm-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat de documents généraliste avec espaces de travail',
          },
          {
            Application: '[PrivateGPT](/fr/power-local-llm/privategpt-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'RAG hors ligne sur vos fichiers, orienté développeurs',
          },
          {
            Application: '[HilbertRaum](/fr/power-local-llm/hilbertraum-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / GPL-3.0',
            'Différence clé': 'Espace de travail hors ligne portable avec Q&R sur documents',
          },
          {
            Application: '[Sidekick](/fr/power-local-llm/sidekick-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat local sur vos fichiers, Mac uniquement',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Return Editor remplace-t-il un avocat ?',
            a: 'Non. L\'application signale et réécrit avec un modèle de langage, et les modèles peuvent manquer ou mal interpréter des clauses ; considérez sa sortie comme une première lecture et faites relire tout engagement par un juriste qualifié.',
          },
          {
            q: 'Return Editor est-il open source ?',
            a: 'Non. La soumission du développeur le décrit comme propriétaire et à code fermé, et aucun dépôt de code source public n\'a été trouvé.',
          },
          {
            q: 'Faut-il un compte ?',
            a: 'Pas pour l\'offre Free. Pro exige un compte, car les requêtes cloud sont rattachées à un compte pour la facturation et la limitation de débit.',
          },
          {
            q: 'Fonctionne-t-il dans d\'autres langues que l\'anglais ?',
            a: 'Les pages consultées n\'indiquent pas les langues de l\'interface. La recherche utilise un modèle d\'embedding multilingue (bge-m3) et la liste des modèles inclut Bielik, spécialisé en polonais ; testez donc votre langue d\'abord avec l\'offre Free.',
          },
          {
            q: 'À quelle fréquence est-il mis à jour ?',
            a: 'Le changelog montre des versions fréquentes : la prise en charge de Windows est arrivée avec la 1.3.4, et la dernière version, la 1.4.1, date du 9 octobre 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Return Editor réunit trois choses d\'ordinaire séparées : une revue de contrats par clause, des questions-réponses citées sur les documents et un modèle gratuit sur l\'appareil, dans une seule application Mac et Windows. En face, le code est fermé, le produit est jeune (Windows depuis la version 1.3.4), l\'IA cloud envoie le contenu à Anthropic et rien n\'a été testé ici en pratique, y compris la qualité des alertes de risque. Il convient à ceux qui veulent une première lecture privée de leurs propres contrats ; ceux qui exigent un code auditable peuvent comparer [AnythingLLM](/fr/power-local-llm/anythingllm-review) ou [PrivateGPT](/fr/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Return Editor](https://returneditor.ai/) — fonctions, offres et modes local et cloud, consultés le 10 octobre 2026.',
          '[Page de téléchargement](https://returneditor.ai/download/) — plateformes, installeurs, version et notes sur la signature.',
          '[Changelog](https://returneditor.ai/changelog/) — version 1.4.1, dates de publication et fonctions récentes.',
          '[Politique de confidentialité](https://returneditor.ai/privacy/) et [page sécurité](https://returneditor.ai/security/) — flux de données, conservation et hébergement.',
          '[Documentation](https://returneditor.ai/docs/) — présentation des fonctions de l\'éditeur et de l\'IA.',
          'Soumission du développeur reçue par e-mail, qui a précisé concevoir l\'application.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis AnythingLLM](/fr/power-local-llm/anythingllm-review) — une application de chat de documents sous licence MIT avec espaces de travail.',
          '[Avis PrivateGPT](/fr/power-local-llm/privategpt-review) — un projet RAG hors ligne sous licence Apache 2.0.',
          '[Avis HilbertRaum](/fr/power-local-llm/hilbertraum-review) — un espace de travail hors ligne portable, sans installation.',
          '[Avis Sidekick](/fr/power-local-llm/sidekick-review) — une application Mac de chat local sur vos fichiers.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-ja.webp',
    title: 'Return Editorレビュー：MacとWindowsで使えるローカルAI契約書レビュー',
    seoTitle: 'Return Editorレビュー：ローカルAIの契約書レビュー',
    intro: 'Return Editorは、MacとWindows向けのデスクトップ文書エディタで、AIで契約書をレビューします。リスクのある条項に印を付け、根拠となる条項を示して質問に答え、承認または却下できる書き換え案を提示します。Freeプランは同梱のローカルモデルをアカウント不要で実行し、有料のProプランではクラウドAIを任意で追加できます。アプリはクローズドソースです。開発者自身がディレクトリに掲載を申請し、自ら開発していることを明示しています。PromptQuorumは2026年10月10日に[returneditor.ai](https://returneditor.ai/)と変更履歴で内容を確認しましたが、アプリの実機テストは行っていません。',
    metaDescription: 'Return Editorレビュー：MacとWindowsの契約書レビューアプリ。リスク表示、出典付き回答、無料のローカルAI。プライバシー、料金、制約を解説。',
    twitterDescription: 'Return Editorレビュー：リスクのある契約条項に印を付け、出典付きで回答するクローズドソースのデスクトップアプリ。Freeプランはお使いのPC上でローカルAIを実行します。',
    audience: 'MacまたはWindowsで契約書や長い文書をレビューし、何が自分のPCに残り、何が情報源で確認できていないのかを知りたい方。',
    readTime: '約7分で読めます',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Return Editor レビュー',
    targetKeywords: [
      'return editor レビュー',
      'return editor ai',
      'ローカルai 契約書レビュー',
      'オフライン 契約書レビュー ソフト',
      'ai 契約書レビュー mac windows',
      '契約書とローカルでチャット',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor（2026年10月10日時点でバージョン1.4.1）は、AIで契約書をレビューするMac・Windows向けのクローズドソースのデスクトップアプリで、無料プランでは開発元によれば文書をPC内に留めるローカルモデルで動作します。** リスクのある条項に印を付け、条項を引用して質問に答え、1件ずつ承認できる修正案を作成します。クラウドAIは有料のオプションで、ここでの記述の多くは製品自身のページに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Return Editorを使うと、文書はPCの外に出ますか？',
        answer: 'Freeプランでは出ません。プライバシーポリシーによると、ローカルモードでは文書は端末内に留まります。クラウドAIはProのオプションで、有効にした場合のみ、各リクエストの内容が開発元のプロキシを経由してAnthropicに送られます。',
        bullets: [
          'macOS 14以降のApple Silicon Macと、64ビット版Windows 10/11で動作します。Linux版はまだありません。',
          'PDF、Word、OpenDocument、RTF、HTMLを取り込み、編集用にMarkdownへ変換します。',
          'クローズドソースで、変更履歴は公開されていますが公開リポジトリはありません。',
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
        label: 'Return Editorとは',
        anchor: 'what-is-return-editor',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: 'プランと料金',
        anchor: 'plans-pricing',
      },
      {
        label: '情報源で確認できる機能',
        anchor: 'key-features',
      },
      {
        label: 'ローカルAIとクラウドAI',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'トレードオフ：利点と制約',
        anchor: 'tradeoffs',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
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
        label: '結論',
        anchor: 'verdict',
      },
      {
        label: '出典',
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
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editorは、ローカルまたはクラウドの言語モデルを使って、リスクのある契約条項に印を付け、出典付きで回答し、書き換えを提案するクローズドソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: '契約書を開くとリスクのありそうな条項が強調され、質問を投げかけられます。Freeプランではモデルがお使いのPC上で動きます。',
          },
        ],
        items: [
          '開発元：プライバシーポリシーによれば、ポーランドのクラクフに登録された個人事業です。掲載を申請した人物が開発者です。',
          'ワークフロー：Analyzeが条項に印を付け、Askが引用付きで回答し、Fixが書き換えを提案し、Returnsが重要日付の抽出などの保存済みチェックを再実行します。',
          'ローカルエンジン：同梱のllama.cppサーバーがダウンロードしたモデルを実行します。既定モデルは5.3GBで、メモリは16GBが推奨されています。',
          'プラン：Free（ローカル、アカウント不要）とPro（クラウドAIを追加）。法律事務所向けのCounselは発表済みですが、順番待ちリストのみです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月10日に確認したreturneditor.aiのページと、開発者からの掲載申請に基づきます。PromptQuorumはアプリもリスク表示の精度もテストしておらず、AIの出力は法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Return Editorとは',
        content: [
          '**Return Editorは、契約書レビューのワークフローを組み込んだMarkdownベースの文書エディタです。契約書を取り込むと、分析し、質問に答え、該当箇所をその場で書き換えます。** 開発者の申請内容によれば、TauriとRustで作られたデスクトップアプリで、ローカル推論用にllama.cppサーバーを同梱しています。',
          'ディレクトリでは「契約書レビュー」と「ドキュメント＆PDFチャット」に分類しています。取り込んだ文書について質問できますが、主な出力は自由な会話ではなく、条項単位の指摘と書き換えです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Return Editorは、Apple Silicon Mac（macOS 14以降）と64ビット版Windows 10/11向けに無料でダウンロードできます。Linuxは通知リストのみです。**',
        ],
        columns: [
          '項目',
          '入手先',
        ],
        rows: [
          {
            '項目': 'Mac',
            '入手先': '[ダウンロードページ](https://returneditor.ai/download/)：公証済み.dmg、Apple Siliconのみ',
          },
          {
            '項目': 'Windows',
            '入手先': '[ダウンロードページ](https://returneditor.ai/download/)：署名済みインストーラー、管理者権限不要',
          },
          {
            '項目': 'Linux',
            '入手先': '未対応。メール通知リストあり',
          },
          {
            '項目': '公式サイト',
            '入手先': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            '項目': 'プライバシー',
            '入手先': '[プライバシーポリシー](https://returneditor.ai/privacy/)',
          },
          {
            '項目': '利用規約',
            '入手先': '[利用規約](https://returneditor.ai/terms/)',
          },
          {
            '項目': '変更履歴',
            '入手先': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            '項目': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: '2026年10月10日に確認したバージョンは、[変更履歴](https://returneditor.ai/changelog/)による1.4.1です。新しく署名されたインストーラーでは、Windows SmartScreenが「Windows によって PC が保護されました」と表示する場合があります。ダウンロードページでは「詳細情報」から「実行」を選ぶよう案内されています。',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'プランと料金',
        content: [
          '**Freeプランはアカウント不要で、ローカルAIに利用上限はありません。Proプランは月額または年額でクラウドAIを追加します。**',
        ],
        columns: [
          'プラン',
          '料金',
          '追加される内容',
        ],
        rows: [
          {
            'プラン': 'Free',
            '料金': '0ドル',
            '追加される内容': 'ローカルAI、ローカル検索、アカウント不要',
          },
          {
            'プラン': 'Pro',
            '料金': '月39ドルまたは年390ドル',
            '追加される内容': 'クラウドAI、月500アクション',
          },
          {
            'プラン': 'Counsel',
            '料金': '未提供',
            '追加される内容': '順番待ち。監査ログ、ロックダウンモード',
          },
        ],
        note: '料金は2026年10月10日時点の[returneditor.ai](https://returneditor.ai/)の表示によるもので、変更される場合があります。Counselは発表済みですが未提供です。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下はすべて製品自身のページに基づく内容で、独立した検証は行っていません。**',
        ],
        items: [
          '**Analyze。** PDF、DOCX、ODT、RTF、HTMLを取り込んでMarkdownへ変換し、指摘を信号機の色で表示します。赤はリスク、琥珀色は要注意です。',
          '**Ask。** 文書への質問に該当条項を引用して回答し、Markdownファイルのフォルダ全体をセマンティック検索します。',
          '**Fix。** 文中に書き換え案を提示し、承認または却下できます。選ぶまで何も変更されません。',
          '**Returns。** 重要日付の抽出など、保存して再利用できるチェックを任意の文書に実行できます。ドキュメントには複数回のモデル処理を連結する仕組みが説明されています。',
          '**エディタ。** 文書内の変数と数式、Mermaid図、バージョン1.3.6以降はグラフや画像を保持したPDF・HTMLエクスポートに対応します。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルAIとクラウドAI',
        content: [
          '**Freeプランでは、同梱のllama.cppエンジンがお使いのPC上でモデルを実行し、モデルをダウンロードした後はオフラインで動作します。** ホームページにはQwen3.5 9B、Granite 4.1 8B、GPT-OSS 20B、ポーランド語に特化したBielik 11B v3が挙げられています。',
          'クラウドAIはProのオプションです。リクエストはドイツのHetznerでホストされる開発元のプロキシを経由してAnthropicに送られ、プライバシーポリシーによれば最長7日間保持され、学習には使われません。',
        ],
        items: [
          '**ハードウェア。** 既定モデルのダウンロードは5.3GBで、サイトはメモリ16GBを推奨しています。',
          '**アイドル時の動作。** ローカルモデルは、既定では質問がないまま30分経つとメモリから解放されます。変更履歴によれば、設定で変更できます。',
          '**画像。** ローカルモデルはまだ画像を読めませんが、クラウドAIはチャットと文書内の画像を読めます。',
          '**テレメトリ。** プライバシーポリシーによれば、デスクトップアプリにクライアント側のテレメトリはありません。無料アプリが開発元サーバーに接続するのは、更新確認（無効化可）、同意したクラッシュレポート、ユーザーが送信するサポート依頼の場合のみです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。コードも非公開です。PromptQuorumはネットワーク通信を検査していません。機密性の高い契約書では、ステータスバーに表示されるモードを確認し、ネットワークを切断した状態で試してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'トレードオフ：利点と制約',
        columns: [
          '利点',
          '実際の使用での意味',
          '制約・注意点',
        ],
        rows: [
          {
            '利点': 'FreeプランのローカルAI',
            '実際の使用での意味': '契約書はPC内に留まり、オフラインで動作。',
            '制約・注意点': '数GBのモデルのダウンロードと十分なRAMが必要。',
          },
          {
            '利点': '出典付きの回答',
            '実際の使用での意味': '各回答が根拠の条項を示す。',
            '制約・注意点': '引用の正確さは今回テストしていない。',
          },
          {
            '利点': '確認できる書き換え',
            '実際の使用での意味': '修正は承認・却下できる提案。',
            '制約・注意点': '品質は使うモデル次第。',
          },
          {
            '利点': 'MacとWindows',
            '実際の使用での意味': '両方に1つのアプリ、署名・公証済み。',
            '制約・注意点': 'MacはApple Siliconのみ。Linux版なし。',
          },
          {
            '利点': 'クラウドの選択肢',
            '実際の使用での意味': 'Proでより強力なモデルと画像の読み取り。',
            '制約・注意点': '内容がPCからAnthropicへ送信される。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**契約書、規程、長い報告書をレビューし、最初の確認を自分のPC内で済ませたい人。** Freeプランはこの用途のために作られています。',
          '**ユーザー数課金のクラウドサービスなしで、条項単位の指摘と出典付きの回答が欲しい小規模チーム。** クラウドAIは任意です。',
          '**ポーランド語の読者。** モデル一覧にはポーランド語特化のBielikが含まれます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**リスク表示の精度。** PromptQuorumはアプリを実行していないため、どの条項を指摘し、見落とし、誤って評価するかは評価していません。',
          '**表示の基準。** 確認したページには、分析がどの契約類型、法域、基準に基づくのかが書かれていません。',
          '**ソースコードと監査。** 公開リポジトリ、第三者監査、認証は見つからず、プライバシーに関する記述をコードで確認することはできません。',
          '**運営主体と利用者数。** サイトにチームの記載はなく、プライバシーポリシーはポーランドのクラクフの個人事業を示しています。顧客数は公表されていません。',
          '**法的な信頼性。** AIが生成した指摘や書き換えは法的助言ではありません。署名する契約書は、資格のある弁護士に確認してもらってください。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: [
          'アプリ',
          'プラットフォーム',
          '料金/ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ワークスペース付きの汎用ドキュメントチャット',
          },
          {
            'アプリ': '[PrivateGPT](/ja/power-local-llm/privategpt-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / Apache 2.0',
            '主な違い': 'ファイルに対するオフラインRAG。開発者向け',
          },
          {
            'アプリ': '[HilbertRaum](/ja/power-local-llm/hilbertraum-review)',
            'プラットフォーム': 'Windows、macOS、Linux',
            '料金/ライセンス': '無料 / GPL-3.0',
            '主な違い': '文書Q&A付きの持ち運べるオフライン作業環境',
          },
          {
            'アプリ': '[Sidekick](/ja/power-local-llm/sidekick-review)',
            'プラットフォーム': 'macOS',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ファイルに対するローカルチャット。Mac専用',
          },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Return Editorは弁護士の代わりになりますか？',
            a: 'いいえ。アプリは言語モデルで指摘と書き換えを行いますが、モデルは条項を見落としたり誤読したりすることがあります。出力は最初の確認として扱い、拘束力のある内容は資格のある弁護士に確認してもらってください。',
          },
          {
            q: 'Return Editorはオープンソースですか？',
            a: 'いいえ。開発者の申請ではプロプライエタリのクローズドソースとされており、公開されたソースリポジトリは見つかりませんでした。',
          },
          {
            q: 'アカウントは必要ですか？',
            a: 'Freeプランでは不要です。Proは、クラウドへのリクエストを課金とレート制限のためにアカウントに紐付けるため、アカウントが必要です。',
          },
          {
            q: '英語以外の言語でも使えますか？',
            a: '確認したページにはインターフェースの対応言語が載っていません。検索には多言語の埋め込みモデル（bge-m3）が使われ、モデル一覧にはポーランド語特化のBielikも含まれます。まずFreeプランでお使いの言語を試してください。',
          },
          {
            q: '更新の頻度は？',
            a: '変更履歴では頻繁にリリースされています。Windows対応は1.3.4で加わり、最新の1.4.1は2026年10月9日付けです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Return Editorは、条項単位の契約書レビュー、出典付きの文書Q&A、無料のオンデバイスモデルという、通常は別々の3つを、MacとWindows向けの1つのアプリにまとめています。一方で、クローズドソースであり、製品が新しく（Windows対応はバージョン1.3.4から）、クラウドAIでは内容がAnthropicへ送られ、ここではリスク表示の品質を含め実機テストを行っていません。自分の契約書を非公開のまま最初に確認したい人に向きます。監査可能なコードが必要な場合は、[AnythingLLM](/ja/power-local-llm/anythingllm-review)や[PrivateGPT](/ja/power-local-llm/privategpt-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Return Editor](https://returneditor.ai/) — 機能、プラン、ローカル・クラウドのモード。2026年10月10日確認。',
          '[ダウンロードページ](https://returneditor.ai/download/) — 対応プラットフォーム、インストーラー、バージョン、署名に関する注記。',
          '[変更履歴](https://returneditor.ai/changelog/) — バージョン1.4.1、リリース日、最近の機能。',
          '[プライバシーポリシー](https://returneditor.ai/privacy/)と[セキュリティページ](https://returneditor.ai/security/) — データの流れ、保持期間、ホスティング。',
          '[ドキュメント](https://returneditor.ai/docs/) — エディタとAI機能の概要。',
          '開発者からメールで届いた掲載申請（開発者本人であることを明示）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — ワークスペースを備えたMITライセンスのドキュメントチャットアプリ。',
          '[PrivateGPTレビュー](/ja/power-local-llm/privategpt-review) — Apache 2.0ライセンスのオフラインRAGプロジェクト。',
          '[HilbertRaumレビュー](/ja/power-local-llm/hilbertraum-review) — インストール不要で持ち運べるオフライン作業環境。',
          '[Sidekickレビュー](/ja/power-local-llm/sidekick-review) — ファイルに対してローカルでチャットできるMacアプリ。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-pt.webp',
    title: 'Análise do Return Editor: revisão de contratos com IA local para Mac e Windows',
    seoTitle: 'Análise do Return Editor: revisão de contratos com IA local',
    intro: 'O Return Editor é um editor de documentos para desktop, para Mac e Windows, que revisa contratos com IA: sinaliza cláusulas de risco, responde a perguntas citando a cláusula de origem e propõe reescritas que você aceita ou rejeita. O plano Free executa um modelo local incluído, sem conta, e o plano pago Pro adiciona IA na nuvem opcional. O aplicativo é de código fechado. O desenvolvedor o enviou ao diretório e declarou que o desenvolve; o PromptQuorum conferiu os dados em [returneditor.ai](https://returneditor.ai/) e no registro de alterações em 10 de outubro de 2026 e não testou o aplicativo na prática.',
    metaDescription: 'Análise do Return Editor: revisão de contratos no Mac e no Windows com alertas de risco, respostas citadas e IA local gratuita. Privacidade, preços e limites.',
    twitterDescription: 'Análise do Return Editor: um app de desktop de código fechado que sinaliza cláusulas de risco e responde com citações, com um plano gratuito que executa IA local no seu computador.',
    audience: 'Pessoas que revisam contratos e outros documentos longos no Mac ou no Windows e querem saber o que fica no próprio computador e o que as fontes não confirmam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Return Editor',
    targetKeywords: [
      'return editor análise',
      'return editor ia',
      'revisão de contratos com ia local',
      'software de revisão de contratos offline',
      'revisão de contratos ia mac windows',
      'conversar com contratos localmente',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**O Return Editor (versão 1.4.1 em 10 de outubro de 2026) é um aplicativo de desktop de código fechado para Mac e Windows que revisa contratos com IA, e o plano gratuito faz isso com um modelo local que, segundo o desenvolvedor, mantém os documentos no seu computador.** Ele marca cláusulas de risco, responde a perguntas com citações de cláusulas e redige correções que você aprova uma a uma. A IA na nuvem é um extra pago e opcional, e a maior parte das afirmações aqui vem das próprias páginas do produto.',
    quickAnswerTop: {
      pt: {
        question: 'Meus documentos saem do meu computador quando uso o Return Editor?',
        answer: 'Não no plano Free: a política de privacidade diz que os documentos permanecem na sua máquina no modo local. A IA na nuvem é uma opção do Pro que você ativa, e nesse modo o conteúdo de cada solicitação passa pelo proxy do desenvolvedor até a Anthropic.',
        bullets: [
          'Funciona em Macs com Apple Silicon e macOS 14 ou posterior e no Windows 10/11 de 64 bits; ainda não há versão para Linux.',
          'Importa arquivos PDF, Word, OpenDocument, RTF e HTML e os converte em Markdown para edição.',
          'Código fechado, com registro de alterações público, mas sem repositório público.',
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
        label: 'O que é o Return Editor',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Planos e preços',
        anchor: 'plans-pricing',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'IA local ou na nuvem',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Prós e contras: benefícios vs. limitações',
        anchor: 'tradeoffs',
      },
      {
        label: 'Para quem é indicado',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
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
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Return Editor é um aplicativo de desktop de código fechado que usa um modelo de linguagem local ou na nuvem para sinalizar cláusulas contratuais de risco, responder com citações e sugerir reescritas.',
          },
          {
            type: 'plain-terms',
            text: 'Você abre um contrato, o aplicativo destaca cláusulas possivelmente arriscadas e você faz perguntas sobre ele; no plano Free o modelo roda no seu próprio computador.',
          },
        ],
        items: [
          'Desenvolvedor: segundo a política de privacidade, uma empresa individual registrada em Cracóvia (Polônia); quem enviou o cadastro é o desenvolvedor.',
          'Fluxo: Analyze marca cláusulas, Ask responde com citações, Fix propõe reescritas e Returns executa de novo verificações salvas, como a extração de datas-chave.',
          'Motor local: um servidor llama.cpp incluído que executa modelos baixáveis; o modelo padrão é um download de 5,3 GB e 16 GB de memória são recomendados.',
          'Planos: Free (local, sem conta) e Pro (adiciona IA na nuvem); um nível Counsel voltado a escritórios foi anunciado, mas só com lista de espera.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em páginas do returneditor.ai consultadas em 10 de outubro de 2026 e em um envio do desenvolvedor. O PromptQuorum não testou o aplicativo nem a precisão dos alertas de risco, e a saída de uma IA não é aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'O que é o Return Editor',
        content: [
          '**O Return Editor é um editor de documentos baseado em Markdown com um fluxo de revisão de contratos integrado: você importa um contrato e o aplicativo o analisa, responde a perguntas sobre ele e reescreve trechos diretamente no texto.** O envio do desenvolvedor o descreve como um app de desktop em Tauri e Rust que inclui um servidor llama.cpp para inferência local.',
          'O diretório o lista em «Revisão de contratos» e «Chat de documentos e PDF»: ele responde a perguntas sobre qualquer documento importado, mas seu resultado principal são achados por cláusula e reescritas, não uma conversa aberta.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Return Editor é um download gratuito para Macs com Apple Silicon (macOS 14 ou posterior) e Windows 10/11 de 64 bits; para Linux existe apenas uma lista de avisos.**',
        ],
        columns: [
          'Item',
          'Onde obter',
        ],
        rows: [
          {
            Item: 'Mac',
            'Onde obter': '[Página de download](https://returneditor.ai/download/): .dmg notarizado, só Apple Silicon',
          },
          {
            Item: 'Windows',
            'Onde obter': '[Página de download](https://returneditor.ai/download/): instalador assinado, sem admin',
          },
          {
            Item: 'Linux',
            'Onde obter': 'Não disponível; lista de avisos por e-mail',
          },
          {
            Item: 'Site',
            'Onde obter': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            Item: 'Privacidade',
            'Onde obter': '[Política de privacidade](https://returneditor.ai/privacy/)',
          },
          {
            Item: 'Termos',
            'Onde obter': '[Termos de uso](https://returneditor.ai/terms/)',
          },
          {
            Item: 'Registro de alterações',
            'Onde obter': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            Item: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Versão verificada em 10 de outubro de 2026: 1.4.1, segundo o [changelog](https://returneditor.ai/changelog/). O Windows SmartScreen pode exibir o aviso «O Windows protegeu seu PC» para o instalador recém-assinado; a página de download orienta escolher «Mais informações» e depois «Executar assim mesmo».',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'Planos e preços',
        content: [
          '**O plano Free não exige conta nem limita a IA local; o plano Pro adiciona IA na nuvem mediante mensalidade ou anuidade.**',
        ],
        columns: [
          'Plano',
          'Preço',
          'O que adiciona',
        ],
        rows: [
          {
            Plano: 'Free',
            'Preço': 'US$ 0',
            'O que adiciona': 'IA local, busca local, sem conta',
          },
          {
            Plano: 'Pro',
            'Preço': 'US$ 39/mês ou US$ 390/ano',
            'O que adiciona': 'IA na nuvem, 500 ações/mês',
          },
          {
            Plano: 'Counsel',
            'Preço': 'Ainda não disponível',
            'O que adiciona': 'Lista de espera; log de auditoria, modo de bloqueio',
          },
        ],
        note: 'Preços conforme [returneditor.ai](https://returneditor.ai/) em 10 de outubro de 2026; podem mudar. O nível Counsel foi anunciado, não lançado.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem das páginas do próprio produto; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Analyze.** Importa PDF, DOCX, ODT, RTF e HTML, converte para Markdown e marca os achados com cores de semáforo: vermelho para risco, âmbar para pontos que exigem atenção.',
          '**Ask.** Responde a perguntas sobre um documento citando a cláusula relevante e faz busca semântica em uma pasta inteira de arquivos Markdown.',
          '**Fix.** Propõe reescritas no texto que você aceita ou rejeita; nada muda até que você decida.',
          '**Returns.** Verificações salvas e reutilizáveis, como a extração de datas-chave, que você aplica a qualquer documento; a documentação descreve o encadeamento de várias passagens do modelo.',
          '**Editor.** Variáveis e fórmulas nos documentos, diagramas Mermaid e exportação para PDF e HTML com gráficos e imagens preservados desde a versão 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'IA local ou na nuvem',
        content: [
          '**No plano Free a IA é um motor llama.cpp incluído que executa modelos na sua própria máquina e funciona offline depois que um modelo é baixado.** A página inicial cita Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B e Bielik 11B v3, um modelo especializado em polonês.',
          'A IA na nuvem é uma opção do Pro: as solicitações passam pelo proxy do desenvolvedor, hospedado pela Hetzner na Alemanha, até a Anthropic, que, segundo a política de privacidade, as retém por até 7 dias e não as usa para treinamento.',
        ],
        items: [
          '**Hardware.** O modelo padrão é um download de 5,3 GB; o site recomenda 16 GB de memória.',
          '**Inatividade.** O modelo local é descarregado após 30 minutos sem perguntas por padrão; o changelog diz que isso pode ser alterado nas configurações.',
          '**Imagens.** O modelo local ainda não lê imagens, enquanto a IA na nuvem lê imagens no chat e nos documentos.',
          '**Telemetria.** A política de privacidade afirma que o app de desktop não tem telemetria no cliente; o app gratuito só contata o servidor do desenvolvedor para verificar atualizações (que podem ser desativadas), relatórios de falha que você autoriza e pedidos de suporte que você envia.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do desenvolvedor, não resultados de auditoria, e o código é fechado. O PromptQuorum não inspecionou o tráfego de rede; para contratos confidenciais, confira o modo exibido na barra de status e teste com a rede desconectada.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: [
          'Benefício',
          'Na prática',
          'Limitação / ressalva',
        ],
        rows: [
          {
            'Benefício': 'IA local no plano Free',
            'Na prática': 'Os contratos ficam no seu computador; funciona offline.',
            'Limitação / ressalva': 'Exige download de modelo de vários GB e RAM suficiente.',
          },
          {
            'Benefício': 'Respostas citadas',
            'Na prática': 'Cada resposta aponta para a cláusula de origem.',
            'Limitação / ressalva': 'A precisão das citações não foi testada aqui.',
          },
          {
            'Benefício': 'Reescritas revisáveis',
            'Na prática': 'As correções são propostas que você aceita ou rejeita.',
            'Limitação / ressalva': 'A qualidade depende do modelo usado.',
          },
          {
            'Benefício': 'Mac e Windows',
            'Na prática': 'Um app para ambos, assinado e notarizado.',
            'Limitação / ressalva': 'No Mac só Apple Silicon; sem versão Linux.',
          },
          {
            'Benefício': 'Opção na nuvem',
            'Na prática': 'Modelo mais forte e leitura de imagens no Pro.',
            'Limitação / ressalva': 'O conteúdo sai da sua máquina para a Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Pessoas que revisam contratos, políticas ou relatórios longos e querem manter a primeira leitura no próprio computador.** O plano Free foi pensado para isso.',
          '**Equipes pequenas que querem alertas por cláusula e respostas citadas sem um serviço de nuvem por usuário.** A IA na nuvem é opcional.',
          '**Leitores de língua polonesa.** A lista de modelos inclui o Bielik, um modelo especializado em polonês.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão dos alertas de risco.** O PromptQuorum não executou o aplicativo, então não avaliou quais cláusulas ele marca, deixa passar ou classifica mal.',
          '**Para que os alertas foram ajustados.** As páginas consultadas não dizem em quais tipos de contrato, jurisdições ou padrões a análise se baseia.',
          '**Código-fonte e auditorias.** Não foram encontrados repositório público, auditoria de terceiros nem certificação, portanto as declarações de privacidade não podem ser conferidas no código.',
          '**Empresa e base de usuários.** O site não nomeia nenhuma equipe; a política de privacidade identifica uma empresa individual em Cracóvia (Polônia), e números de clientes não são divulgados.',
          '**Confiabilidade jurídica.** Alertas e reescritas geradas por IA não são aconselhamento jurídico; um advogado qualificado deve revisar qualquer contrato que você assinar.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Principal diferença',
        ],
        rows: [
          {
            App: '[AnythingLLM](/pt/power-local-llm/anythingllm-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Chat de documentos geral com workspaces',
          },
          {
            App: '[PrivateGPT](/pt/power-local-llm/privategpt-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Principal diferença': 'RAG offline sobre seus arquivos, voltado a desenvolvedores',
          },
          {
            App: '[HilbertRaum](/pt/power-local-llm/hilbertraum-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / GPL-3.0',
            'Principal diferença': 'Espaço de trabalho portátil offline com perguntas sobre documentos',
          },
          {
            App: '[Sidekick](/pt/power-local-llm/sidekick-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Chat local sobre seus arquivos, só Mac',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Return Editor substitui um advogado?',
            a: 'Não. O aplicativo sinaliza e reescreve com um modelo de linguagem, e modelos podem deixar passar ou interpretar mal cláusulas; trate a saída como uma primeira leitura e peça a um advogado qualificado que revise tudo o que for vinculante.',
          },
          {
            q: 'O Return Editor é de código aberto?',
            a: 'Não. O envio do desenvolvedor o descreve como proprietário e de código fechado, e nenhum repositório público de código-fonte foi encontrado.',
          },
          {
            q: 'Preciso de uma conta?',
            a: 'Não para o plano Free. O Pro exige conta, porque as solicitações na nuvem são vinculadas a uma conta para cobrança e limite de uso.',
          },
          {
            q: 'Funciona em outros idiomas além do inglês?',
            a: 'As páginas consultadas não listam os idiomas da interface. A busca usa um modelo de embeddings multilíngue (bge-m3) e a lista de modelos inclui o Bielik, especializado em polonês; teste primeiro o seu idioma no plano Free.',
          },
          {
            q: 'Com que frequência é atualizado?',
            a: 'O changelog mostra lançamentos frequentes: o suporte ao Windows chegou na 1.3.4 e a versão mais recente, a 1.4.1, é de 9 de outubro de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Return Editor reúne três coisas que costumam vir separadas: revisão de contratos por cláusula, perguntas e respostas citadas sobre documentos e um modelo gratuito no dispositivo, em um único app para Mac e Windows. Em contrapartida, o código é fechado, o produto é jovem (Windows desde a versão 1.3.4), a IA na nuvem envia conteúdo à Anthropic e nada aqui foi testado na prática, inclusive a qualidade dos alertas de risco. Serve a quem quer uma primeira leitura privada dos próprios contratos; quem precisa de código auditável pode comparar [AnythingLLM](/pt/power-local-llm/anythingllm-review) ou [PrivateGPT](/pt/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Return Editor](https://returneditor.ai/) — recursos, planos e modos local e na nuvem, consultados em 10 de outubro de 2026.',
          '[Página de download](https://returneditor.ai/download/) — plataformas, instaladores, versão e notas sobre assinatura.',
          '[Changelog](https://returneditor.ai/changelog/) — versão 1.4.1, datas de lançamento e recursos recentes.',
          '[Política de privacidade](https://returneditor.ai/privacy/) e [página de segurança](https://returneditor.ai/security/) — fluxos de dados, retenção e hospedagem.',
          '[Documentação](https://returneditor.ai/docs/) — visão geral dos recursos do editor e da IA.',
          'Envio do desenvolvedor recebido por e-mail, que declarou desenvolver o aplicativo.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um app de chat de documentos com licença MIT e workspaces.',
          '[Análise do PrivateGPT](/pt/power-local-llm/privategpt-review) — um projeto RAG offline com licença Apache 2.0.',
          '[Análise do HilbertRaum](/pt/power-local-llm/hilbertraum-review) — um espaço de trabalho portátil e sem instalação.',
          '[Análise do Sidekick](/pt/power-local-llm/sidekick-review) — um app de Mac para chat local sobre seus arquivos.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-ar.webp',
    title: 'مراجعة Return Editor: مراجعة العقود بالذكاء الاصطناعي المحلي لنظامي Mac وWindows',
    seoTitle: 'مراجعة Return Editor: مراجعة العقود بذكاء اصطناعي محلي',
    intro: 'Return Editor محرر مستندات لسطح المكتب يعمل على Mac وWindows ويراجع العقود بالذكاء الاصطناعي: يضع علامات على البنود الخطرة، ويجيب عن الأسئلة مع الإشارة إلى البند الذي استند إليه، ويقترح صياغات بديلة تقبلها أو ترفضها. تشغّل الخطة المجانية Free نموذجًا محليًا مرفقًا دون حساب، وتضيف الخطة المدفوعة Pro ذكاءً اصطناعيًا سحابيًا اختياريًا. التطبيق مغلق المصدر. قدّمه مطوّره إلى الدليل وأفصح عن أنه هو من يطوّره؛ وقد طابق PromptQuorum التفاصيل مع موقع [returneditor.ai](https://returneditor.ai/) وسجل التغييرات في 10 أكتوبر 2026 ولم يجرّب التطبيق عمليًا.',
    metaDescription: 'مراجعة Return Editor: مراجعة عقود لـ Mac وWindows مع تنبيهات مخاطر وإجابات موثّقة وذكاء اصطناعي محلي مجاني. الخصوصية والأسعار والحدود.',
    twitterDescription: 'مراجعة Return Editor: تطبيق سطح مكتب مغلق المصدر يضع علامات على البنود الخطرة ويجيب باستشهادات، وخطته المجانية تشغّل ذكاءً اصطناعيًا محليًا على جهازك.',
    audience: 'من يراجعون العقود والمستندات الطويلة على Mac أو Windows ويريدون معرفة ما يبقى على جهازهم وما لا تؤكده المصادر.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Return Editor',
    targetKeywords: [
      'مراجعة return editor',
      'return editor ذكاء اصطناعي',
      'مراجعة العقود بالذكاء الاصطناعي محليًا',
      'برنامج مراجعة العقود دون اتصال',
      'مراجعة العقود بالذكاء الاصطناعي ماك ويندوز',
      'الدردشة مع العقود محليًا',
      'return editor مقابل anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor (الإصدار 1.4.1 حتى 10 أكتوبر 2026) تطبيق سطح مكتب مغلق المصدر لنظامي Mac وWindows يراجع العقود بالذكاء الاصطناعي، وتؤدي خطته المجانية ذلك بنموذج محلي يُبقي المستندات، بحسب المطوّر، على جهازك.** يضع علامات على البنود الخطرة، ويجيب عن الأسئلة مع استشهادات بالبنود، ويصوغ تصحيحات توافق عليها واحدًا واحدًا. الذكاء الاصطناعي السحابي إضافة مدفوعة واختيارية، ومعظم الادعاءات هنا مصدرها صفحات المنتج نفسه.',
    quickAnswerTop: {
      ar: {
        question: 'هل تغادر مستنداتي جهازي عند استخدام Return Editor؟',
        answer: 'ليس في الخطة المجانية: تنص سياسة الخصوصية على أن المستندات تبقى على جهازك في الوضع المحلي. الذكاء الاصطناعي السحابي خيار في Pro تفعّله بنفسك، وفي هذا الوضع يمرّ محتوى كل طلب عبر وكيل (proxy) المطوّر إلى Anthropic.',
        bullets: [
          'يعمل على أجهزة Mac بمعالج Apple Silicon مع macOS 14 أو أحدث وعلى Windows 10/11 بنظام 64 بت؛ لا يوجد إصدار لنظام Linux بعد.',
          'يستورد ملفات PDF وWord وOpenDocument وRTF وHTML ويحوّلها إلى Markdown للتحرير.',
          'مغلق المصدر، مع سجل تغييرات عام لكن دون مستودع عام.',
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
        label: 'ما هو Return Editor؟',
        anchor: 'what-is-return-editor',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'الخطط والأسعار',
        anchor: 'plans-pricing',
      },
      {
        label: 'الميزات التي تؤكدها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الذكاء الاصطناعي المحلي مقابل السحابي',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'المقايضات: المزايا مقابل القيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
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
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor تطبيق سطح مكتب مغلق المصدر يستخدم نموذج لغة محليًا أو سحابيًا لوضع علامات على بنود العقود الخطرة والإجابة باستشهادات واقتراح صياغات بديلة.',
          },
          {
            type: 'plain-terms',
            text: 'تفتح عقدًا فيبرز التطبيق البنود التي قد تكون خطرة وتطرح عليه أسئلتك؛ وفي الخطة المجانية يعمل النموذج على جهازك أنت.',
          },
        ],
        items: [
          'المطوّر: وفق سياسة الخصوصية مؤسسة فردية مسجلة في كراكوف ببولندا؛ ومن قدّم الإدراج هو المطوّر نفسه.',
          'سير العمل: Analyze يعلّم البنود، وAsk يجيب باستشهادات، وFix يقترح صياغات بديلة، وReturns يعيد تشغيل فحوص محفوظة مثل استخراج التواريخ الأساسية.',
          'المحرك المحلي: خادم llama.cpp مرفق يشغّل نماذج قابلة للتنزيل؛ النموذج الافتراضي حجمه 5.3 جيجابايت ويُوصى بذاكرة 16 جيجابايت.',
          'الخطط: Free (محلية، دون حساب) وPro (تضيف الذكاء الاصطناعي السحابي)؛ وأُعلن عن مستوى Counsel الموجّه لمكاتب المحاماة لكنه متاح عبر قائمة انتظار فقط.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحات من returneditor.ai جرى الاطلاع عليها في 10 أكتوبر 2026 وإلى إدراج قدّمه المطوّر. لم يختبر PromptQuorum التطبيق ولا دقة تنبيهات المخاطر فيه، ومخرجات الذكاء الاصطناعي ليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'ما هو Return Editor؟',
        content: [
          '**Return Editor محرر مستندات قائم على Markdown ويضم سير عمل لمراجعة العقود: تستورد العقد فيحلله التطبيق ويجيب عن الأسئلة المتعلقة به ويعيد صياغة المقاطع داخل النص مباشرة.** يصفه المطوّر في إدراجه بأنه تطبيق سطح مكتب مبني على Tauri وRust ويضم خادم llama.cpp للاستدلال المحلي.',
          'يصنّفه الدليل ضمن «مراجعة العقود» و«الدردشة مع المستندات وملفات PDF»: يستطيع الإجابة عن أسئلة حول أي مستند مستورد، لكن مخرجاته الأساسية نتائج على مستوى البنود وإعادة صياغة وليست محادثة مفتوحة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يتوافر Return Editor للتنزيل مجانًا لأجهزة Mac بمعالج Apple Silicon (macOS 14 أو أحدث) ولـ Windows 10/11 بنظام 64 بت؛ أما Linux فلا توجد له سوى قائمة إشعارات.**',
        ],
        columns: [
          'العنصر',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'العنصر': 'Mac',
            'مكان الحصول عليه': '[صفحة التنزيل](https://returneditor.ai/download/): ملف .dmg موثّق، Apple Silicon فقط',
          },
          {
            'العنصر': 'Windows',
            'مكان الحصول عليه': '[صفحة التنزيل](https://returneditor.ai/download/): مثبّت موقّع، دون صلاحيات مسؤول',
          },
          {
            'العنصر': 'Linux',
            'مكان الحصول عليه': 'غير متاح؛ قائمة إشعارات بالبريد',
          },
          {
            'العنصر': 'الموقع',
            'مكان الحصول عليه': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            'العنصر': 'الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://returneditor.ai/privacy/)',
          },
          {
            'العنصر': 'الشروط',
            'مكان الحصول عليه': '[شروط الاستخدام](https://returneditor.ai/terms/)',
          },
          {
            'العنصر': 'سجل التغييرات',
            'مكان الحصول عليه': '[سجل التغييرات](https://returneditor.ai/changelog/)',
          },
          {
            'العنصر': 'الشيفرة المصدرية',
            'مكان الحصول عليه': 'غير منشورة',
          },
        ],
        note: 'الإصدار الذي جرى التحقق منه في 10 أكتوبر 2026: 1.4.1، وفق [سجل التغييرات](https://returneditor.ai/changelog/). قد يعرض Windows SmartScreen تحذير «Windows protected your PC» للمثبّت الموقّع حديثًا؛ وتنصح صفحة التنزيل باختيار More info ثم Run anyway.',
      },
      pricing: {
        id: 'plans-pricing',
        title: 'الخطط والأسعار',
        content: [
          '**لا تحتاج الخطة Free إلى حساب ولا تضع سقفًا للذكاء الاصطناعي المحلي؛ وتضيف الخطة Pro الذكاء الاصطناعي السحابي مقابل رسم شهري أو سنوي.**',
        ],
        columns: [
          'الخطة',
          'السعر',
          'ما تضيفه',
        ],
        rows: [
          {
            'الخطة': 'Free',
            'السعر': '0 دولار',
            'ما تضيفه': 'ذكاء محلي، بحث محلي، دون حساب',
          },
          {
            'الخطة': 'Pro',
            'السعر': '39 دولارًا شهريًا أو 390 سنويًا',
            'ما تضيفه': 'ذكاء سحابي، 500 إجراء شهريًا',
          },
          {
            'الخطة': 'Counsel',
            'السعر': 'غير متاحة بعد',
            'ما تضيفه': 'قائمة انتظار؛ سجل تدقيق، وضع إغلاق',
          },
        ],
        note: 'الأسعار كما وردت في [returneditor.ai](https://returneditor.ai/) بتاريخ 10 أكتوبر 2026 وقد تتغير؛ أما مستوى Counsel فمُعلن عنه ولم يُطلق.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مصدره صفحات المنتج نفسه؛ ولم يُختبر أي منها اختبارًا مستقلًا.**',
        ],
        items: [
          '**Analyze.** يستورد PDF وDOCX وODT وRTF وHTML ويحوّلها إلى Markdown ويعلّم النتائج بألوان إشارة المرور: الأحمر للمخاطر والعنبري للبنود التي تستحق الانتباه.',
          '**Ask.** يجيب عن الأسئلة حول مستند مع استشهاد بالبند المعني، ويجري بحثًا دلاليًا في مجلد كامل من ملفات Markdown.',
          '**Fix.** يقترح إعادة صياغة داخل النص تقبلها أو ترفضها؛ ولا يتغير شيء حتى تقرّر أنت.',
          '**Returns.** فحوص محفوظة قابلة لإعادة الاستخدام، مثل استخراج التواريخ الأساسية، تطبّقها على أي مستند؛ وتصف الوثائق ربط عدة مرّات تشغيل للنموذج معًا.',
          '**المحرر.** متغيرات ومعادلات داخل المستندات ومخططات Mermaid وتصدير إلى PDF وHTML مع الاحتفاظ بالمخططات والصور منذ الإصدار 1.3.6.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'الذكاء الاصطناعي المحلي مقابل السحابي',
        content: [
          '**في الخطة المجانية يكون الذكاء الاصطناعي محرك llama.cpp مرفقًا يشغّل النماذج على جهازك ويعمل دون اتصال بعد تنزيل النموذج.** تذكر الصفحة الرئيسية النماذج Qwen3.5 9B وGranite 4.1 8B وGPT-OSS 20B وBielik 11B v3، وهو نموذج متخصص في اللغة البولندية.',
          'الذكاء الاصطناعي السحابي خيار في Pro: تمرّ الطلبات عبر وكيل المطوّر المستضاف لدى Hetzner في ألمانيا إلى Anthropic، التي تحتفظ بها وفق سياسة الخصوصية حتى 7 أيام ولا تستخدمها في التدريب.',
        ],
        items: [
          '**العتاد.** النموذج الافتراضي حجم تنزيله 5.3 جيجابايت؛ ويوصي الموقع بذاكرة 16 جيجابايت.',
          '**الخمول.** يُفرَّغ النموذج المحلي من الذاكرة بعد 30 دقيقة دون أسئلة افتراضيًا؛ ويذكر سجل التغييرات أن ذلك قابل للتعديل من الإعدادات.',
          '**الصور.** لا يستطيع النموذج المحلي قراءة الصور بعد، بينما يقرؤها الذكاء الاصطناعي السحابي في المحادثة وفي المستندات.',
          '**القياس عن بُعد.** تنص سياسة الخصوصية على أن تطبيق سطح المكتب بلا قياس عن بُعد من جهة العميل؛ ولا يتصل التطبيق المجاني بخادم المطوّر إلا لفحص التحديثات (ويمكن تعطيله) وتقارير الأعطال التي توافق عليها وطلبات الدعم التي ترسلها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق، والشيفرة مغلقة. لم يفحص PromptQuorum حركة الشبكة؛ ففي العقود السرّية تحقّق من الوضع المعروض في شريط الحالة وجرّب مع فصل الشبكة.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: [
          'الميزة',
          'المعنى في الاستخدام',
          'القيد / التحفّظ',
        ],
        rows: [
          {
            'الميزة': 'ذكاء محلي في Free',
            'المعنى في الاستخدام': 'تبقى العقود على جهازك ويعمل دون اتصال.',
            'القيد / التحفّظ': 'يتطلب تنزيل نموذج بضعة جيجابايت وذاكرة كافية.',
          },
          {
            'الميزة': 'إجابات موثّقة',
            'المعنى في الاستخدام': 'تشير كل إجابة إلى البند الذي استندت إليه.',
            'القيد / التحفّظ': 'لم تُختبر دقة الاستشهادات هنا.',
          },
          {
            'الميزة': 'صياغات قابلة للمراجعة',
            'المعنى في الاستخدام': 'التصحيحات مقترحات تقبلها أو ترفضها.',
            'القيد / التحفّظ': 'تعتمد الجودة على النموذج المستخدم.',
          },
          {
            'الميزة': 'Mac وWindows',
            'المعنى في الاستخدام': 'تطبيق واحد للنظامين، موقّع وموثّق.',
            'القيد / التحفّظ': 'على Mac معالجات Apple Silicon فقط؛ بلا إصدار Linux.',
          },
          {
            'الميزة': 'خيار سحابي',
            'المعنى في الاستخدام': 'نموذج أقوى وقراءة صور مع Pro.',
            'القيد / التحفّظ': 'يغادر المحتوى جهازك إلى Anthropic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يراجعون العقود أو السياسات أو التقارير الطويلة ويريدون إبقاء المراجعة الأولى على جهازهم.** الخطة المجانية مصمَّمة لهذا.',
          '**الفرق الصغيرة التي تريد تنبيهات على مستوى البنود وإجابات موثّقة دون خدمة سحابية لكل مستخدم.** الذكاء السحابي اختياري.',
          '**القرّاء بالبولندية.** تضم قائمة النماذج Bielik، وهو نموذج متخصص في البولندية.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**دقة تنبيهات المخاطر.** لم يشغّل PromptQuorum التطبيق، لذا لم يقيّم أي البنود يعلّمها أو يغفلها أو يخطئ تقديرها.',
          '**ما الذي ضُبطت عليه التنبيهات.** لا تذكر الصفحات التي اطلعنا عليها أنواع العقود أو الولايات القضائية أو المعايير التي يستند إليها التحليل.',
          '**الشيفرة المصدرية وعمليات التدقيق.** لم نعثر على مستودع عام أو تدقيق من طرف ثالث أو شهادة اعتماد، لذا لا يمكن مطابقة تصريحات الخصوصية مع الشيفرة.',
          '**الشركة وقاعدة المستخدمين.** لا يذكر الموقع فريقًا؛ وتحدد سياسة الخصوصية مؤسسة فردية في كراكوف ببولندا، ولا تُنشر أعداد العملاء.',
          '**الموثوقية القانونية.** التنبيهات والصياغات التي يولّدها الذكاء الاصطناعي ليست استشارة قانونية؛ وينبغي أن يراجع محامٍ مؤهَّل أي عقد توقّعه.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة عامة مع المستندات ومساحات عمل',
          },
          {
            'التطبيق': '[PrivateGPT](/ar/power-local-llm/privategpt-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'RAG دون اتصال على ملفاتك، موجّه للمطورين',
          },
          {
            'التطبيق': '[HilbertRaum](/ar/power-local-llm/hilbertraum-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / GPL-3.0',
            'الفرق الرئيسي': 'مساحة عمل محمولة دون اتصال مع أسئلة وأجوبة عن المستندات',
          },
          {
            'التطبيق': '[Sidekick](/ar/power-local-llm/sidekick-review)',
            'المنصات': 'macOS',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة محلية على ملفاتك، لنظام Mac فقط',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكّد من سعر كل تطبيق وترخيصه ومنصاته في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحل Return Editor محل المحامي؟',
            a: 'لا. يضع التطبيق العلامات ويعيد الصياغة بنموذج لغوي، وقد تفوت النماذج بنودًا أو تسيء فهمها؛ فاعتبر مخرجاته مراجعة أولى واطلب من محامٍ مؤهَّل مراجعة كل ما هو ملزِم.',
          },
          {
            q: 'هل Return Editor مفتوح المصدر؟',
            a: 'لا. يصفه إدراج المطوّر بأنه مملوك ومغلق المصدر، ولم نعثر على مستودع عام للشيفرة.',
          },
          {
            q: 'هل أحتاج إلى حساب؟',
            a: 'ليس للخطة Free. تحتاج Pro إلى حساب لأن الطلبات السحابية تُربط بحساب لأغراض الفوترة وتحديد المعدل.',
          },
          {
            q: 'هل يعمل بلغات غير الإنجليزية؟',
            a: 'لا تذكر الصفحات التي اطلعنا عليها لغات الواجهة. يستخدم البحث نموذج تضمينات متعدد اللغات (bge-m3) وتضم قائمة النماذج Bielik المتخصص في البولندية؛ فجرّب لغتك أولًا في الخطة Free.',
          },
          {
            q: 'كم مرة يُحدَّث؟',
            a: 'يُظهر سجل التغييرات إصدارات متكررة: وصل دعم Windows في 1.3.4، وأحدث إصدار 1.4.1 مؤرخ في 9 أكتوبر 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'يجمع Return Editor ثلاثة أمور تأتي عادةً منفصلة: مراجعة العقود على مستوى البنود، وأسئلة وأجوبة موثّقة عن المستندات، ونموذجًا مجانيًا على الجهاز، في تطبيق واحد لـ Mac وWindows. في المقابل هو مغلق المصدر، ومنتج حديث (Windows منذ الإصدار 1.3.4)، والذكاء السحابي يرسل المحتوى إلى Anthropic، ولم يُختبر شيء هنا عمليًا، بما في ذلك جودة تنبيهات المخاطر. يناسب من يريد مراجعة أولى خاصة لعقوده؛ ومن يحتاج شيفرة قابلة للتدقيق يمكنه المقارنة مع [AnythingLLM](/ar/power-local-llm/anythingllm-review) أو [PrivateGPT](/ar/power-local-llm/privategpt-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Return Editor](https://returneditor.ai/) — الميزات والخطط والوضعان المحلي والسحابي، اطُّلع عليها في 10 أكتوبر 2026.',
          '[صفحة التنزيل](https://returneditor.ai/download/) — المنصات والمثبّتات والإصدار وملاحظات التوقيع.',
          '[سجل التغييرات](https://returneditor.ai/changelog/) — الإصدار 1.4.1 وتواريخ الإصدارات والميزات الحديثة.',
          '[سياسة الخصوصية](https://returneditor.ai/privacy/) و[صفحة الأمان](https://returneditor.ai/security/) — تدفقات البيانات والاحتفاظ بها والاستضافة.',
          '[الوثائق](https://returneditor.ai/docs/) — نظرة عامة على ميزات المحرر والذكاء الاصطناعي.',
          'إدراج قدّمه المطوّر عبر البريد الإلكتروني وأفصح فيه عن أنه يطوّر التطبيق.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — تطبيق دردشة مع المستندات بترخيص MIT ومساحات عمل.',
          '[مراجعة PrivateGPT](/ar/power-local-llm/privategpt-review) — مشروع RAG دون اتصال بترخيص Apache 2.0.',
          '[مراجعة HilbertRaum](/ar/power-local-llm/hilbertraum-review) — مساحة عمل محمولة دون اتصال ولا تحتاج تثبيتًا.',
          '[مراجعة Sidekick](/ar/power-local-llm/sidekick-review) — تطبيق Mac للدردشة المحلية على ملفاتك.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-zh.webp',
    title: 'Return Editor 评测：适用于 Mac 和 Windows 的本地 AI 合同审查',
    seoTitle: 'Return Editor 评测：本地 AI 合同审查',
    intro: 'Return Editor 是一款面向 Mac 和 Windows 的桌面文档编辑器，用 AI 审查合同：标出有风险的条款，回答问题时引用对应条款，并提出可由你接受或拒绝的改写建议。Free 方案在无需账号的情况下运行内置的本地模型，付费的 Pro 方案可选择启用云端 AI。该应用为闭源软件。开发者自行向目录提交了收录申请，并说明自己就是开发者；PromptQuorum 于 2026 年 10 月 10 日对照 [returneditor.ai](https://returneditor.ai/) 及其更新日志核实了信息，但没有实际测试该应用。',
    metaDescription: 'Return Editor 评测：适用于 Mac 和 Windows 的合同审查应用，含风险标记、带引用的回答和免费本地 AI。隐私、定价与局限。',
    twitterDescription: 'Return Editor 评测：一款闭源桌面应用，标出有风险的合同条款并带引用回答，免费方案在你的电脑上运行本地 AI。',
    audience: '在 Mac 或 Windows 上审阅合同和其他长文档，并想了解哪些内容留在自己电脑上、哪些信息来源未能确认的用户。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Return Editor 评测',
    targetKeywords: [
      'return editor 评测',
      'return editor ai',
      '本地 ai 合同审查',
      '离线合同审查软件',
      'ai 合同审查 mac windows',
      '本地与合同对话',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor（截至 2026 年 10 月 10 日为 1.4.1 版）是一款用 AI 审查合同的 Mac 和 Windows 闭源桌面应用，其免费方案使用本地模型，据开发者称文档不会离开你的电脑。** 它标出有风险的条款，回答问题时引用条款，并起草你逐条批准的修改。云端 AI 是付费的可选项，这里的大多数说法来自产品自身的页面。',
    quickAnswerTop: {
      zh: {
        question: '使用 Return Editor 时，我的文档会离开我的电脑吗？',
        answer: 'Free 方案不会：隐私政策称，在本地模式下文档保留在你的设备上。云端 AI 是需要你主动开启的 Pro 选项，开启后每次请求的内容会经开发者的代理转发给 Anthropic。',
        bullets: [
          '可在 macOS 14 或更高版本的 Apple Silicon Mac 以及 64 位 Windows 10/11 上运行；目前没有 Linux 版。',
          '可导入 PDF、Word、OpenDocument、RTF 和 HTML 文件，并转换为 Markdown 进行编辑。',
          '闭源，有公开的更新日志，但没有公开代码仓库。',
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
        label: 'Return Editor 是什么',
        anchor: 'what-is-return-editor',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '方案与定价',
        anchor: 'plans-pricing',
      },
      {
        label: '来源已确认的功能',
        anchor: 'key-features',
      },
      {
        label: '本地 AI 与云端 AI',
        anchor: 'local-vs-cloud',
      },
      {
        label: '权衡：优点与局限',
        anchor: 'tradeoffs',
      },
      {
        label: '适合谁使用',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法验证的内容',
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
        label: '资料来源',
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
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor 是一款闭源桌面应用，使用本地或云端语言模型标出有风险的合同条款、带引用地回答问题并建议改写。',
          },
          {
            type: 'plain-terms',
            text: '你打开一份合同，应用会高亮可能有风险的条款，你可以就合同提问；在 Free 方案中，模型运行在你自己的电脑上。',
          },
        ],
        items: [
          '开发方：据其隐私政策，是在波兰克拉科夫注册的个体经营者；提交收录申请的人即为开发者。',
          '工作流：Analyze 标记条款，Ask 带引用回答，Fix 提出改写建议，Returns 重新运行已保存的检查，例如提取关键日期。',
          '本地引擎：内置 llama.cpp 服务器，运行可下载的模型；默认模型需下载 5.3 GB，推荐 16 GB 内存。',
          '方案：Free（本地、无需账号）和 Pro（增加云端 AI）；面向律所的 Counsel 层级已宣布，但目前仅提供候补名单。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 10 日查阅的 returneditor.ai 页面以及开发者提交的收录申请。PromptQuorum 没有测试该应用或其风险标记的准确性，AI 输出不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Return Editor 是什么',
        content: [
          '**Return Editor 是一款基于 Markdown、内置合同审查流程的文档编辑器：你导入合同后，应用会分析合同、回答相关问题，并直接在原文中改写段落。** 开发者的提交内容称，它是用 Tauri 和 Rust 构建的桌面应用，并捆绑了用于本地推理的 llama.cpp 服务器。',
          '目录将其归入“合同审查”和“文档与 PDF 对话”：它可以回答关于任何已导入文档的问题，但主要输出是逐条款的发现和改写，而不是开放式对话。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Return Editor 可免费下载，支持 Apple Silicon Mac（macOS 14 或更高版本）和 64 位 Windows 10/11；Linux 版仅提供通知名单。**',
        ],
        columns: [
          '项目',
          '获取途径',
        ],
        rows: [
          {
            '项目': 'Mac',
            '获取途径': '[下载页面](https://returneditor.ai/download/)：已公证的 .dmg，仅限 Apple Silicon',
          },
          {
            '项目': 'Windows',
            '获取途径': '[下载页面](https://returneditor.ai/download/)：已签名安装程序，无需管理员权限',
          },
          {
            '项目': 'Linux',
            '获取途径': '暂不提供；可登记邮件通知',
          },
          {
            '项目': '官网',
            '获取途径': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            '项目': '隐私政策',
            '获取途径': '[隐私政策](https://returneditor.ai/privacy/)',
          },
          {
            '项目': '服务条款',
            '获取途径': '[服务条款](https://returneditor.ai/terms/)',
          },
          {
            '项目': '更新日志',
            '获取途径': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            '项目': '源代码',
            '获取途径': '未公开',
          },
        ],
        note: '2026 年 10 月 10 日核实的版本：1.4.1，来自[更新日志](https://returneditor.ai/changelog/)。新签名的安装程序可能触发 Windows SmartScreen 的“Windows 已保护你的电脑”提示；下载页面建议依次选择“更多信息”和“仍要运行”。',
      },
      pricing: {
        id: 'plans-pricing',
        title: '方案与定价',
        content: [
          '**Free 方案无需账号，本地 AI 没有用量上限；Pro 方案按月或按年付费，增加云端 AI。**',
        ],
        columns: [
          '方案',
          '价格',
          '新增内容',
        ],
        rows: [
          {
            '方案': 'Free',
            '价格': '0 美元',
            '新增内容': '本地 AI、本地搜索、无需账号',
          },
          {
            '方案': 'Pro',
            '价格': '每月 39 美元或每年 390 美元',
            '新增内容': '云端 AI，每月 500 次操作',
          },
          {
            '方案': 'Counsel',
            '价格': '尚未推出',
            '新增内容': '候补名单；审计日志、锁定模式',
          },
        ],
        note: '价格为 2026 年 10 月 10 日 [returneditor.ai](https://returneditor.ai/) 上的标注，可能调整；Counsel 层级已宣布，尚未发布。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项都来自产品自身的页面，均未经独立测试。**',
        ],
        items: [
          '**Analyze。** 导入 PDF、DOCX、ODT、RTF 和 HTML，转换为 Markdown，并用红绿灯颜色标记发现：红色表示风险，琥珀色表示需要注意。',
          '**Ask。** 回答关于文档的问题并引用相关条款，还可对整个 Markdown 文件夹进行语义搜索。',
          '**Fix。** 在原文中提出改写建议，由你接受或拒绝；在你做出选择之前不会有任何改动。',
          '**Returns。** 可保存并重复使用的检查，例如提取关键日期，可对任意文档运行；文档介绍了把多轮模型处理串联起来的做法。',
          '**编辑器。** 文档内的变量和公式、Mermaid 图表，自 1.3.6 版起导出 PDF 和 HTML 时保留图表与图片。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '本地 AI 与云端 AI',
        content: [
          '**在 Free 方案中，AI 是内置的 llama.cpp 引擎，在你自己的电脑上运行模型，下载模型后可离线工作。** 首页列出了 Qwen3.5 9B、Granite 4.1 8B、GPT-OSS 20B，以及专精波兰语的 Bielik 11B v3。',
          '云端 AI 是 Pro 的选项：请求经托管于德国 Hetzner 的开发者代理转发给 Anthropic，据隐私政策，Anthropic 最多保留 7 天，且不用于训练。',
        ],
        items: [
          '**硬件。** 默认模型需下载 5.3 GB；网站推荐 16 GB 内存。',
          '**空闲行为。** 本地模型默认在 30 分钟无提问后卸载；更新日志称可在设置中更改。',
          '**图像。** 本地模型目前还不能读取图像，云端 AI 则可在聊天和文档中读取图像。',
          '**遥测。** 隐私政策称桌面应用没有客户端遥测；免费应用仅在检查更新（可关闭）、你同意的崩溃报告以及你发送的支持请求时才会联系开发者的服务器。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，而非审计结果，代码也不公开。PromptQuorum 没有检查网络流量；处理机密合同时，请查看状态栏显示的模式，并在断开网络的情况下测试。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: [
          '优点',
          '实际使用中的含义',
          '局限 / 注意事项',
        ],
        rows: [
          {
            '优点': 'Free 方案的本地 AI',
            '实际使用中的含义': '合同留在你的电脑上，可离线使用。',
            '局限 / 注意事项': '需下载数 GB 的模型，并有足够内存。',
          },
          {
            '优点': '带引用的回答',
            '实际使用中的含义': '每个回答都指向其依据的条款。',
            '局限 / 注意事项': '引用的准确性未在此测试。',
          },
          {
            '优点': '可审阅的改写',
            '实际使用中的含义': '修改只是供你接受或拒绝的建议。',
            '局限 / 注意事项': '质量取决于所用模型。',
          },
          {
            '优点': 'Mac 和 Windows',
            '实际使用中的含义': '两个系统一个应用，已签名并公证。',
            '局限 / 注意事项': 'Mac 仅限 Apple Silicon；无 Linux 版。',
          },
          {
            '优点': '云端选项',
            '实际使用中的含义': 'Pro 提供更强的模型和图像读取。',
            '局限 / 注意事项': '内容会从你的电脑发送给 Anthropic。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**审阅合同、制度或长篇报告，并希望首轮审阅留在自己电脑上的人。** Free 方案正是为此设计。',
          '**想要逐条款标记和带引用回答、又不想按席位付费使用云服务的小团队。** 云端 AI 是可选项。',
          '**阅读波兰语的用户。** 模型列表包含专精波兰语的 Bielik。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**风险标记的准确性。** PromptQuorum 没有运行该应用，因此未评估它会标出、漏掉或误判哪些条款。',
          '**标记依据的标准。** 我们查阅的页面没有说明分析针对哪些合同类型、司法辖区或标准。',
          '**源代码与审计。** 未发现公开仓库、第三方审计或认证，因此无法对照代码检验隐私声明。',
          '**公司与用户规模。** 网站没有列出团队；隐私政策显示其为波兰克拉科夫的个体经营者，客户数量未公布。',
          '**法律可靠性。** AI 生成的标记和改写不构成法律意见；你签署的任何合同都应由有资质的律师审阅。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '带工作区的通用文档对话',
          },
          {
            '应用': '[PrivateGPT](/zh/power-local-llm/privategpt-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '针对你文件的离线 RAG，面向开发者',
          },
          {
            '应用': '[HilbertRaum](/zh/power-local-llm/hilbertraum-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / GPL-3.0',
            '主要区别': '便携的离线工作空间，支持文档问答',
          },
          {
            '应用': '[Sidekick](/zh/power-local-llm/sidekick-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '针对你文件的本地对话，仅限 Mac',
          },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Return Editor 能代替律师吗？',
            a: '不能。该应用用语言模型标记并改写，而模型可能漏掉或误读条款；请把输出当作初步审阅，具有约束力的内容务必请有资质的律师审阅。',
          },
          {
            q: 'Return Editor 是开源的吗？',
            a: '不是。开发者的提交内容将其列为专有闭源软件，我们也没有找到公开的源代码仓库。',
          },
          {
            q: '需要账号吗？',
            a: 'Free 方案不需要。Pro 需要账号，因为云端请求要与账号关联，用于计费和限流。',
          },
          {
            q: '支持英语以外的语言吗？',
            a: '我们查阅的页面没有列出界面语言。搜索使用多语言嵌入模型（bge-m3），模型列表中也有专精波兰语的 Bielik；请先在 Free 方案中测试你的语言。',
          },
          {
            q: '更新频率如何？',
            a: '更新日志显示发布频繁：Windows 支持在 1.3.4 中加入，最新版本 1.4.1 的日期为 2026 年 10 月 9 日。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Return Editor 把通常分开的三件事放进同一个 Mac 和 Windows 应用：逐条款合同审查、带引用的文档问答，以及免费的本地模型。另一方面，它是闭源的，产品还很年轻（Windows 支持始于 1.3.4 版），云端 AI 会把内容发送给 Anthropic，而且这里没有做任何实际测试，包括风险标记的质量。它适合想对自己的合同做私密初审的人；需要可审计代码的读者可以对比 [AnythingLLM](/zh/power-local-llm/anythingllm-review) 或 [PrivateGPT](/zh/power-local-llm/privategpt-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Return Editor](https://returneditor.ai/) — 功能、方案以及本地和云端模式，2026 年 10 月 10 日查阅。',
          '[下载页面](https://returneditor.ai/download/) — 平台、安装程序、版本及签名说明。',
          '[更新日志](https://returneditor.ai/changelog/) — 1.4.1 版本、发布日期和近期功能。',
          '[隐私政策](https://returneditor.ai/privacy/)和[安全页面](https://returneditor.ai/security/) — 数据流向、保留期限和托管。',
          '[文档](https://returneditor.ai/docs/) — 编辑器和 AI 功能概览。',
          '开发者通过电子邮件提交的收录申请，其中说明自己是该应用的开发者。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review) — 采用 MIT 许可证、带工作区的文档对话应用。',
          '[PrivateGPT 评测](/zh/power-local-llm/privategpt-review) — 采用 Apache 2.0 许可证的离线 RAG 项目。',
          '[HilbertRaum 评测](/zh/power-local-llm/hilbertraum-review) — 无需安装的便携离线工作空间。',
          '[Sidekick 评测](/zh/power-local-llm/sidekick-review) — 在本地与你的文件对话的 Mac 应用。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-10',
    dateModified: '2026-10-10',
    next_refresh_due: '2027-04-10',
    theme: 'RAG & Document Chat',
    heroImage: '/images/return-editor-review-hero-ko.webp',
    title: 'Return Editor 리뷰: Mac과 Windows용 로컬 AI 계약서 검토',
    seoTitle: 'Return Editor 리뷰: 로컬 AI 계약서 검토',
    intro: 'Return Editor는 Mac과 Windows용 데스크톱 문서 편집기로, AI로 계약서를 검토합니다. 위험한 조항에 표시를 하고, 근거가 된 조항을 인용해 질문에 답하며, 수락하거나 거부할 수 있는 수정안을 제안합니다. Free 요금제는 계정 없이 내장 로컬 모델을 실행하고, 유료 Pro 요금제는 선택적으로 클라우드 AI를 추가합니다. 앱은 비공개 소스입니다. 개발자가 직접 디렉터리에 등록을 요청했고 본인이 개발자임을 밝혔습니다. PromptQuorum은 2026년 10월 10일에 [returneditor.ai](https://returneditor.ai/)와 변경 내역으로 내용을 확인했으며, 앱을 직접 사용해 테스트하지는 않았습니다.',
    metaDescription: 'Return Editor 리뷰: Mac과 Windows용 계약서 검토 앱. 위험 표시, 출처 인용 답변, 무료 로컬 AI. 개인정보, 가격, 한계를 정리했습니다.',
    twitterDescription: 'Return Editor 리뷰: 위험한 계약 조항을 표시하고 출처를 인용해 답하는 비공개 소스 데스크톱 앱. Free 요금제는 내 컴퓨터에서 로컬 AI를 실행합니다.',
    audience: 'Mac이나 Windows에서 계약서와 긴 문서를 검토하며, 무엇이 내 컴퓨터에 남고 무엇을 출처로 확인하지 못했는지 알고 싶은 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Return Editor 리뷰',
    targetKeywords: [
      'return editor 리뷰',
      'return editor ai',
      '로컬 ai 계약서 검토',
      '오프라인 계약서 검토 소프트웨어',
      'ai 계약서 검토 mac windows',
      '계약서와 로컬 채팅',
      'return editor vs anythingllm',
    ],
    current_models_mentioned: [
      'Qwen3.5 9B',
      'Granite 4.1 8B',
      'GPT-OSS 20B',
      'Bielik 11B v3',
    ],
    current_hardware_mentioned: [
      'Apple Silicon',
      'macOS 14',
      'Windows 10/11',
    ],
    leadAnswerBlock: '**Return Editor(2026년 10월 10일 기준 버전 1.4.1)는 AI로 계약서를 검토하는 Mac·Windows용 비공개 소스 데스크톱 앱이며, 무료 요금제에서는 개발사에 따르면 문서를 내 컴퓨터에 두는 로컬 모델로 작동합니다.** 위험한 조항을 표시하고, 조항을 인용해 질문에 답하며, 하나씩 승인할 수 있는 수정안을 작성합니다. 클라우드 AI는 유료 선택 기능이며, 여기 적힌 내용 대부분은 제품 자체 페이지에서 나온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Return Editor를 쓰면 내 문서가 컴퓨터 밖으로 나가나요?',
        answer: 'Free 요금제에서는 나가지 않습니다. 개인정보 처리방침에 따르면 로컬 모드에서 문서는 내 기기에 남습니다. 클라우드 AI는 직접 켜야 하는 Pro 옵션이며, 켜면 각 요청의 내용이 개발사의 프록시를 거쳐 Anthropic으로 전달됩니다.',
        bullets: [
          'macOS 14 이상의 Apple Silicon Mac과 64비트 Windows 10/11에서 실행되며, 아직 Linux 버전은 없습니다.',
          'PDF, Word, OpenDocument, RTF, HTML 파일을 가져와 편집용 Markdown으로 변환합니다.',
          '비공개 소스이며, 변경 내역은 공개되어 있지만 공개 저장소는 없습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Return Editor란',
        anchor: 'what-is-return-editor',
      },
      {
        label: '어디서 받나요?',
        anchor: 'get-it',
      },
      {
        label: '요금제와 가격',
        anchor: 'plans-pricing',
      },
      {
        label: '출처로 확인되는 기능',
        anchor: 'key-features',
      },
      {
        label: '로컬 AI와 클라우드 AI',
        anchor: 'local-vs-cloud',
      },
      {
        label: '장단점: 이점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
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
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 읽을거리',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Return Editor는 로컬 또는 클라우드 언어 모델로 위험한 계약 조항을 표시하고, 출처를 인용해 답하며, 수정안을 제안하는 비공개 소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '계약서를 열면 위험할 수 있는 조항이 강조되고, 그에 대해 질문할 수 있습니다. Free 요금제에서는 모델이 내 컴퓨터에서 실행됩니다.',
          },
        ],
        items: [
          '개발사: 개인정보 처리방침에 따르면 폴란드 크라쿠프에 등록된 개인 사업자이며, 등록을 요청한 사람이 개발자입니다.',
          '작업 흐름: Analyze가 조항을 표시하고, Ask가 인용과 함께 답하고, Fix가 수정안을 제안하고, Returns가 핵심 날짜 추출 같은 저장된 점검을 다시 실행합니다.',
          '로컬 엔진: 내장 llama.cpp 서버가 내려받은 모델을 실행하며, 기본 모델은 5.3GB이고 메모리 16GB가 권장됩니다.',
          '요금제: Free(로컬, 계정 불필요)와 Pro(클라우드 AI 추가). 법률 사무소를 겨냥한 Counsel은 발표만 되었고 대기자 명단으로만 받습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 10일에 확인한 returneditor.ai 페이지와 개발자의 등록 요청에 근거합니다. PromptQuorum은 앱과 위험 표시의 정확도를 테스트하지 않았으며, AI 출력은 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-return-editor',
        title: 'Return Editor란',
        content: [
          '**Return Editor는 계약서 검토 작업 흐름을 내장한 Markdown 기반 문서 편집기입니다. 계약서를 가져오면 앱이 분석하고, 질문에 답하고, 해당 구절을 본문에서 바로 고쳐 씁니다.** 개발자의 제출 내용에 따르면 Tauri와 Rust로 만든 데스크톱 앱이며, 로컬 추론을 위해 llama.cpp 서버를 함께 담고 있습니다.',
          '디렉터리에서는 \'계약서 검토\'와 \'문서 및 PDF 채팅\'에 분류합니다. 가져온 어떤 문서에도 질문할 수 있지만, 주된 결과물은 자유 대화가 아니라 조항 단위의 지적과 수정안입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Return Editor는 Apple Silicon Mac(macOS 14 이상)과 64비트 Windows 10/11용으로 무료 다운로드할 수 있으며, Linux는 알림 목록만 있습니다.**',
        ],
        columns: [
          '항목',
          '받는 곳',
        ],
        rows: [
          {
            '항목': 'Mac',
            '받는 곳': '[다운로드 페이지](https://returneditor.ai/download/): 공증된 .dmg, Apple Silicon 전용',
          },
          {
            '항목': 'Windows',
            '받는 곳': '[다운로드 페이지](https://returneditor.ai/download/): 서명된 설치 프로그램, 관리자 권한 불필요',
          },
          {
            '항목': 'Linux',
            '받는 곳': '미지원, 이메일 알림 목록 있음',
          },
          {
            '항목': '웹사이트',
            '받는 곳': '[returneditor.ai](https://returneditor.ai/)',
          },
          {
            '항목': '개인정보',
            '받는 곳': '[개인정보 처리방침](https://returneditor.ai/privacy/)',
          },
          {
            '항목': '이용약관',
            '받는 곳': '[이용약관](https://returneditor.ai/terms/)',
          },
          {
            '항목': '변경 내역',
            '받는 곳': '[Changelog](https://returneditor.ai/changelog/)',
          },
          {
            '항목': '소스 코드',
            '받는 곳': '공개되지 않음',
          },
        ],
        note: '2026년 10월 10일에 확인한 버전은 [변경 내역](https://returneditor.ai/changelog/)에 따른 1.4.1입니다. 새로 서명된 설치 프로그램에서는 Windows SmartScreen이 \'Windows의 PC 보호\' 경고를 표시할 수 있으며, 다운로드 페이지는 \'추가 정보\' 후 \'실행\'을 선택하도록 안내합니다.',
      },
      pricing: {
        id: 'plans-pricing',
        title: '요금제와 가격',
        content: [
          '**Free 요금제는 계정이 필요 없고 로컬 AI 사용량에 제한이 없으며, Pro 요금제는 월간 또는 연간 요금으로 클라우드 AI를 추가합니다.**',
        ],
        columns: [
          '요금제',
          '가격',
          '추가되는 기능',
        ],
        rows: [
          {
            '요금제': 'Free',
            '가격': '0달러',
            '추가되는 기능': '로컬 AI, 로컬 검색, 계정 불필요',
          },
          {
            '요금제': 'Pro',
            '가격': '월 39달러 또는 연 390달러',
            '추가되는 기능': '클라우드 AI, 월 500회 작업',
          },
          {
            '요금제': 'Counsel',
            '가격': '아직 제공되지 않음',
            '추가되는 기능': '대기자 명단, 감사 로그, 잠금 모드',
          },
        ],
        note: '가격은 2026년 10월 10일 [returneditor.ai](https://returneditor.ai/) 표시 기준이며 바뀔 수 있습니다. Counsel은 발표만 되었고 출시되지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 제품 자체 페이지에서 나온 것이며, 독립적으로 검증하지 않았습니다.**',
        ],
        items: [
          '**Analyze.** PDF, DOCX, ODT, RTF, HTML을 가져와 Markdown으로 변환하고, 지적 사항을 신호등 색으로 표시합니다. 빨강은 위험, 호박색은 주의가 필요한 항목입니다.',
          '**Ask.** 문서에 대한 질문에 관련 조항을 인용해 답하고, Markdown 파일이 담긴 폴더 전체를 의미 기반으로 검색합니다.',
          '**Fix.** 본문에 수정안을 제안하며, 수락하거나 거부할 수 있습니다. 선택하기 전에는 아무것도 바뀌지 않습니다.',
          '**Returns.** 핵심 날짜 추출처럼 저장해 두고 어떤 문서에도 다시 실행할 수 있는 점검입니다. 문서에는 여러 모델 처리 단계를 이어 붙이는 방식이 설명되어 있습니다.',
          '**편집기.** 문서 안의 변수와 수식, Mermaid 차트를 지원하며, 버전 1.3.6부터 차트와 이미지를 유지한 채 PDF와 HTML로 내보냅니다.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '로컬 AI와 클라우드 AI',
        content: [
          '**Free 요금제의 AI는 내장 llama.cpp 엔진으로, 내 컴퓨터에서 모델을 실행하며 모델을 내려받은 뒤에는 오프라인에서 작동합니다.** 홈페이지에는 Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B, 폴란드어에 특화된 Bielik 11B v3가 나와 있습니다.',
          '클라우드 AI는 Pro 옵션입니다. 요청은 독일 Hetzner에서 호스팅되는 개발사 프록시를 거쳐 Anthropic으로 전달되며, 개인정보 처리방침에 따르면 최대 7일간 보관되고 학습에는 사용되지 않습니다.',
        ],
        items: [
          '**하드웨어.** 기본 모델은 5.3GB를 내려받아야 하며, 사이트는 메모리 16GB를 권장합니다.',
          '**유휴 동작.** 로컬 모델은 기본적으로 30분간 질문이 없으면 메모리에서 내려가며, 변경 내역에 따르면 설정에서 바꿀 수 있습니다.',
          '**이미지.** 로컬 모델은 아직 이미지를 읽지 못하지만, 클라우드 AI는 채팅과 문서 속 이미지를 읽을 수 있습니다.',
          '**텔레메트리.** 개인정보 처리방침에 따르면 데스크톱 앱에는 클라이언트 측 텔레메트리가 없으며, 무료 앱은 업데이트 확인(끌 수 있음), 동의한 충돌 보고서, 사용자가 보낸 지원 요청에 한해서만 개발사 서버와 통신합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 주장이지 감사 결과가 아니며, 코드도 공개되어 있지 않습니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 기밀 계약서라면 상태 표시줄에 나타나는 모드를 확인하고 네트워크를 끊은 상태에서 테스트하세요.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: [
          '이점',
          '실제 사용에서의 의미',
          '한계 / 유의사항',
        ],
        rows: [
          {
            '이점': 'Free의 로컬 AI',
            '실제 사용에서의 의미': '계약서가 내 컴퓨터에 남고 오프라인 작동.',
            '한계 / 유의사항': '수 GB 모델 다운로드와 충분한 RAM 필요.',
          },
          {
            '이점': '출처가 달린 답변',
            '실제 사용에서의 의미': '각 답변이 근거 조항을 가리킴.',
            '한계 / 유의사항': '인용의 정확도는 여기서 테스트하지 않음.',
          },
          {
            '이점': '검토 가능한 수정안',
            '실제 사용에서의 의미': '수정은 수락·거부할 수 있는 제안.',
            '한계 / 유의사항': '품질은 사용하는 모델에 좌우됨.',
          },
          {
            '이점': 'Mac과 Windows',
            '실제 사용에서의 의미': '두 OS 모두 하나의 앱, 서명·공증 완료.',
            '한계 / 유의사항': 'Mac은 Apple Silicon만, Linux 버전 없음.',
          },
          {
            '이점': '클라우드 옵션',
            '실제 사용에서의 의미': 'Pro에서 더 강력한 모델과 이미지 읽기.',
            '한계 / 유의사항': '내용이 내 컴퓨터에서 Anthropic으로 전송됨.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**계약서, 규정, 긴 보고서를 검토하며 첫 검토를 내 컴퓨터 안에서 끝내고 싶은 사람.** Free 요금제가 이 용도로 만들어졌습니다.',
          '**사용자당 과금되는 클라우드 서비스 없이 조항 단위 표시와 출처가 달린 답변을 원하는 소규모 팀.** 클라우드 AI는 선택 사항입니다.',
          '**폴란드어를 읽는 사용자.** 모델 목록에 폴란드어에 특화된 Bielik이 포함되어 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**위험 표시의 정확도.** PromptQuorum이 앱을 실행하지 않았으므로 어떤 조항을 표시하고, 놓치고, 잘못 평가하는지는 평가하지 않았습니다.',
          '**표시의 기준.** 확인한 페이지에는 분석이 어떤 계약 유형, 관할권, 기준에 근거하는지 나와 있지 않습니다.',
          '**소스 코드와 감사.** 공개 저장소, 제3자 감사, 인증을 찾지 못해 개인정보 관련 설명을 코드로 확인할 수 없습니다.',
          '**회사와 사용자 규모.** 사이트에는 팀이 명시되어 있지 않고, 개인정보 처리방침은 폴란드 크라쿠프의 개인 사업자를 밝히고 있으며, 고객 수는 공개되지 않았습니다.',
          '**법적 신뢰성.** AI가 생성한 표시와 수정안은 법률 자문이 아닙니다. 서명하는 계약서는 자격 있는 변호사가 검토해야 합니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '워크스페이스를 갖춘 범용 문서 채팅',
          },
          {
            '앱': '[PrivateGPT](/ko/power-local-llm/privategpt-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '내 파일 대상 오프라인 RAG, 개발자 지향',
          },
          {
            '앱': '[HilbertRaum](/ko/power-local-llm/hilbertraum-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / GPL-3.0',
            '핵심 차이': '문서 Q&A를 갖춘 휴대용 오프라인 작업 공간',
          },
          {
            '앱': '[Sidekick](/ko/power-local-llm/sidekick-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '내 파일 대상 로컬 채팅, Mac 전용',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 목록에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Return Editor가 변호사를 대신할 수 있나요?',
            a: '아니요. 앱은 언어 모델로 표시하고 고쳐 쓰는데, 모델은 조항을 놓치거나 잘못 읽을 수 있습니다. 출력은 첫 검토로만 보고, 구속력 있는 내용은 자격 있는 변호사에게 확인받으세요.',
          },
          {
            q: 'Return Editor는 오픈 소스인가요?',
            a: '아니요. 개발자의 제출 내용은 독점 비공개 소스로 되어 있고, 공개된 소스 저장소는 찾지 못했습니다.',
          },
          {
            q: '계정이 필요한가요?',
            a: 'Free 요금제에는 필요 없습니다. Pro는 클라우드 요청이 결제와 사용량 제한을 위해 계정에 연결되므로 계정이 필요합니다.',
          },
          {
            q: '영어 외의 언어에서도 작동하나요?',
            a: '확인한 페이지에는 인터페이스 언어가 나와 있지 않습니다. 검색에는 다국어 임베딩 모델(bge-m3)이 쓰이고 모델 목록에는 폴란드어 특화 Bielik도 있으니, 먼저 Free 요금제에서 사용하는 언어를 시험해 보세요.',
          },
          {
            q: '업데이트는 얼마나 자주 되나요?',
            a: '변경 내역에는 릴리스가 잦게 올라와 있습니다. Windows 지원은 1.3.4에서 추가되었고, 최신 릴리스 1.4.1은 2026년 10월 9일자입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Return Editor는 보통 따로 떨어져 있는 세 가지, 즉 조항 단위 계약서 검토, 출처가 달린 문서 Q&A, 무료 온디바이스 모델을 Mac과 Windows용 앱 하나에 담았습니다. 반면 비공개 소스이고, 제품이 젊으며(Windows 지원은 버전 1.3.4부터), 클라우드 AI는 내용을 Anthropic으로 보내고, 위험 표시의 품질을 포함해 여기서는 어떤 것도 직접 테스트하지 않았습니다. 자신의 계약서를 비공개로 먼저 훑어보고 싶은 사람에게 맞고, 감사 가능한 코드가 필요하다면 [AnythingLLM](/ko/power-local-llm/anythingllm-review)이나 [PrivateGPT](/ko/power-local-llm/privategpt-review)와 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Return Editor](https://returneditor.ai/) — 기능, 요금제, 로컬·클라우드 모드. 2026년 10월 10일 확인.',
          '[다운로드 페이지](https://returneditor.ai/download/) — 플랫폼, 설치 프로그램, 버전, 서명 관련 안내.',
          '[변경 내역](https://returneditor.ai/changelog/) — 버전 1.4.1, 릴리스 날짜, 최근 기능.',
          '[개인정보 처리방침](https://returneditor.ai/privacy/)과 [보안 페이지](https://returneditor.ai/security/) — 데이터 흐름, 보관 기간, 호스팅.',
          '[문서](https://returneditor.ai/docs/) — 편집기와 AI 기능 개요.',
          '개발자가 이메일로 보낸 등록 요청(앱을 직접 개발한다고 밝힘).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 워크스페이스를 갖춘 MIT 라이선스 문서 채팅 앱.',
          '[PrivateGPT 리뷰](/ko/power-local-llm/privategpt-review) — Apache 2.0 라이선스의 오프라인 RAG 프로젝트.',
          '[HilbertRaum 리뷰](/ko/power-local-llm/hilbertraum-review) — 설치가 필요 없는 휴대용 오프라인 작업 공간.',
          '[Sidekick 리뷰](/ko/power-local-llm/sidekick-review) — 내 파일에 로컬로 채팅하는 Mac 앱.',
        ],
      },
    },
  },
}
