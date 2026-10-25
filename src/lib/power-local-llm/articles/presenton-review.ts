// Presenton Review: Open-Source AI Presentation Generator
// Slug: presenton-review
// Companion to: anythingllm-review, privategpt-review, h2ogpt-review-2026
// Sources: presenton.ai (home, /download, /pricing, /privacy-policy last updated 2026-04-17), the GitHub repo presenton/presenton (README,
// Apache-2.0 LICENSE, commits, Releases) and download.presenton.ai, all checked 2026-10-24 — no hands-on testing. No prices are stated: the
// Presenton Cloud plan prices are rendered by a billing service and were not readable; the desktop/Docker versions are free.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-en.webp',
    title: 'Presenton Review: Open-Source AI Presentation Generator',
    seoTitle: 'Presenton Review: Open-Source AI Presentation Generator',
    intro: 'Presenton is an open-source AI presentation generator from Presenton Inc. that builds editable PPTX and PDF decks from a prompt or a document, using a local or cloud model that you configure. The desktop and Docker versions are free to run under the Apache 2.0 licence, while a hosted cloud version sells slide credits. This review relies on the website, README, privacy policy and GitHub releases, checked on 24 October 2026; PromptQuorum has not tested the app.',
    metaDescription: 'Presenton review: open-source AI presentation generator for desktop and Docker. Editable PPTX and PDF, local or cloud models, Apache 2.0; untested.',
    twitterDescription: 'Presenton review: open-source AI slide generator for desktop and Docker. Editable PPTX and PDF, your choice of model, and what the sources do and do not confirm.',
    audience: 'Presenters, developers and teams considering a self-hosted AI slide generator who need to know what the sources confirm, what the project only claims and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Presenton review',
    targetKeywords: [
      'presenton review',
      'open source ai presentation generator',
      'presenton ollama',
      'self-hosted ai slide maker',
      'ai presentation generator pptx export',
      'gamma alternative open source',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton (desktop version 0.9.11-beta) is an open-source AI presentation generator that turns a prompt, a document or your own PowerPoint design into an editable PPTX or PDF deck.** It runs on your computer or server and works with a model provider you choose, so how private it is depends on that choice. Every statement here comes from the project\'s website, README and GitHub releases.',
    quickAnswerTop: {
      en: {
        question: 'Can Presenton generate slides without sending anything to the cloud?',
        answer: 'Per the project, yes, if you pair it with a local model provider such as Ollama or LM Studio; with a cloud provider, prompts and source content go to that provider. The hosted Presenton Cloud is a separate service that stores your work on the company\'s servers.',
        bullets: [
          'Decks start from a prompt, an uploaded document or a template built from your own PPTX.',
          'Slides open in a drag-and-edit editor before export.',
          'Export formats are PPTX and PDF.',
          'A built-in API and MCP server let other tools request decks.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Presenton?', anchor: 'what-is-presenton' },
      { label: 'Get It', anchor: 'get-it' },
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
            text: 'Presenton is an Apache 2.0 licensed AI slide generator that you can run as a desktop app or a Docker container, with the text and image models of your choice.',
          },
          {
            type: 'plain-terms',
            text: 'You describe a topic or upload a document, pick a template, and a model you configured writes the slides, which you then edit and export to PowerPoint or PDF.',
          },
        ],
        items: [
          'Maintenance: the newest repository commit is from 22 October 2026 and the latest desktop release, 0.9.11-beta, from 21 September 2026, so no stale-project warning applies; the project labels its releases beta.',
          'Models: local through Ollama or LM Studio, or cloud through OpenAI, Google Gemini, Anthropic and other providers, chosen in the settings.',
          'Cost: the desktop and Docker versions are free; the hosted Presenton Cloud sells monthly slide-credit plans.',
          'Install: a desktop app for macOS and Linux, or one Docker command on any system.',
          'Maker: a company, Presenton Inc., with the source code public on GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, README, privacy policy and GitHub releases, checked on 24 October 2026. PromptQuorum has not installed Presenton or generated a deck, so slide quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'What Is Presenton?',
        content: [
          '**Presenton is an open-source AI presentation maker that generates slide decks from prompts, uploaded documents or your own PowerPoint-based designs.** The code is on [GitHub](https://github.com/presenton/presenton), where the project describes itself as an alternative to Gamma, Canva and Beautiful AI.',
          'It comes in four forms, per the README: a desktop app, a self-hosted Docker container, the hosted Presenton Cloud in the browser, and a paid Enterprise edition. This review concerns the free desktop and Docker versions.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Presenton installs as a desktop app or starts from one Docker command; a hosted version also runs in the browser.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          { Option: 'macOS', 'How to get it': '[Download page](https://presenton.ai/download), .dmg installer' },
          { Option: 'Linux', 'How to get it': '[Download page](https://presenton.ai/download), .AppImage or .deb' },
          { Option: 'Windows', 'How to get it': 'Latest .exe is 0.8.7-beta; none in the 0.9.x releases' },
          { Option: 'Docker', 'How to get it': 'docker run command in the [README](https://github.com/presenton/presenton), UI at localhost:5001' },
          { Option: 'Website', 'How to get it': '[presenton.ai](https://presenton.ai), also hosts the browser-based Presenton Cloud' },
          { Option: 'Privacy policy', 'How to get it': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { Option: 'Source code', 'How to get it': '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: 'Version reviewed: 0.9.11-beta, the latest desktop release, published on 21 September 2026 with .dmg, .AppImage and .deb files. The privacy policy listed covers the Presenton Cloud service, not the desktop or Docker versions.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the README and website; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install or start it',
            whyItMatters: 'Open the desktop app, or run docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest and open [localhost:5001](http://localhost:5001) in a browser.',
          },
          {
            title: 'Choose your model providers',
            whyItMatters: 'In the settings, pick a text provider such as Ollama, LM Studio or a cloud API with your own key, and an image provider such as Pexels, Pixabay, ComfyUI or an OpenAI or Gemini image model.',
          },
          {
            title: 'Generate and edit',
            whyItMatters: 'Enter a prompt or upload a document, pick a template, then rearrange and edit the slides in the editor before exporting.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README or the project website; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Inputs and templates.** Decks start from a prompt or an uploaded document; built-in templates exist, and a custom template can be generated from an existing PowerPoint file or written in HTML and Tailwind CSS.',
          '**Editing.** A drag-and-edit canvas with chat-based slide edits, then export to PPTX or PDF.',
          '**Model providers.** Text through Ollama, LM Studio, OpenAI, Google Gemini and Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI or any OpenAI-compatible endpoint, plus a "Sign in with ChatGPT" option that needs no API key.',
          '**Automation.** A presentation-generation API and a built-in MCP server, so scripts and AI agents can request decks.',
          '**Teams.** Multi-user workspaces with an admin panel in the self-hosted version, and Docker images with GPU support for local models.',
        ],
        note: 'The hosted Presenton Cloud counts one credit per generated slide, so a 10-slide deck uses 10 credits; plan prices are shown on the [pricing page](https://presenton.ai/pricing) and are not repeated here.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**Where your content goes depends on the providers you configure.** The website says the desktop app runs on your machine and that, with local models and local media services, presentation content can stay in your environment, while a cloud text, image or search provider receives the relevant prompts, source content or requests under its own terms.',
          'The README documents two more data paths: a Community gallery of designs that is on by default and contacts a Presenton service (a setting turns it off, and the README requires that for air-gapped use), and an anonymous-telemetry setting that can be disabled. It does not say what the telemetry contains.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The [privacy policy](https://presenton.ai/privacy-policy), last updated on 17 April 2026, covers the hosted Presenton Cloud: it lists account, content and usage data, says personal information is not sold, and says specific presentation content is not used to train models without explicit consent, while aggregated, anonymized usage data may be used. These are the company\'s statements, not audit results, and PromptQuorum has not inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Developers and teams** who want to generate decks through an API or MCP server on their own infrastructure.',
          '**Privacy-minded presenters** who already run Ollama or LM Studio and want slides drafted by a local model.',
          '**People who work in PowerPoint** and need an editable .pptx file rather than a web-only deck.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Slide quality and speed.** No deck was generated, so layout quality, the accuracy of generated text and speed with local models are not assessed.',
          '**Fully offline use.** The project describes local operation with Ollama, but PromptQuorum did not confirm that every feature, including image generation and the Community gallery, works without a connection.',
          '**Hardware needs.** The sources give no RAM or GPU requirement; it depends on the model you choose.',
          '**Stability.** Every release carries a beta label, and how stable updates are between versions is untested.',
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
            Platforms: 'macOS, Windows, Linux, web',
            'Price / license': 'Free / MIT',
            'Key difference': 'Document chat and RAG workspace, not a slide generator',
          },
          {
            App: '[PrivateGPT](/power-local-llm/privategpt-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Private question answering over your documents; produces answers, not decks',
          },
          {
            App: '[h2oGPT](/power-local-llm/h2ogpt-review-2026)',
            Platforms: 'macOS, Windows, Linux, web',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Document chat interface; not built around slide output',
          },
        ],
        note: 'No other slide generator is in the PromptQuorum directory yet, so these are the nearest document-driven tools; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I open the exported file in PowerPoint or Google Slides?',
            a: 'The project\'s FAQ says exported PPTX files are fully editable in Microsoft PowerPoint, Google Slides and compatible software. PromptQuorum did not open an export.',
          },
          {
            q: 'How do I update the desktop app?',
            a: 'Per the download page, installing a newer version replaces the old one and keeps your settings and data.',
          },
          {
            q: 'Does it work with my ChatGPT subscription?',
            a: 'The README says a "Sign in with ChatGPT" option lets a free or paid ChatGPT account generate decks without a separate API key. That route uses OpenAI\'s service, not a local model.',
          },
          {
            q: 'Can several people share one installation?',
            a: 'Self-hosted installs support multi-user workspaces, each with a private workspace, and an admin panel; per the README, admins manage the shared provider keys.',
          },
          {
            q: 'What does the Enterprise edition add?',
            a: 'The README lists versioned Helm charts for Kubernetes, audit logs, a central admin console and SSO with user provisioning through OAuth, OIDC and SCIM. PromptQuorum did not review it.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Presenton is an actively developed, open-source way to generate editable PowerPoint and PDF decks with the AI models you choose, including local ones. Against that, every release is labelled beta, privacy depends entirely on the providers you configure, and nothing about slide quality or speed could be checked here. It suits self-hosters and teams who want control over models and data; anyone who needs dependable output should generate a test deck before relying on it.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Presenton website](https://presenton.ai) — product overview, download page FAQ and pricing explanation, checked 24 October 2026.',
          '[Presenton on GitHub](https://github.com/presenton/presenton) — README, Apache 2.0 licence and commit history, checked 24 October 2026.',
          '[Presenton releases](https://github.com/presenton/presenton/releases) — file names and dates of the 0.9.11-beta and earlier releases, checked 24 October 2026.',
          '[Presenton privacy policy](https://presenton.ai/privacy-policy) — data handling of the hosted service, last updated 17 April 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — a document chat workspace for desktop and Docker.',
          '[PrivateGPT Review](/power-local-llm/privategpt-review) — private question answering over your own documents.',
          '[h2oGPT Review](/power-local-llm/h2ogpt-review-2026) — a document chat interface.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Presenton Review: Open-Source AI Presentation Generator',
      description: 'Presenton review: an open-source AI presentation generator for desktop and Docker that exports editable PPTX and PDF. Models, data flow, pricing model and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/presenton-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Presenters, developers and teams evaluating a self-hosted AI presentation generator' },
      about: [
        { '@type': 'Thing', name: 'Presenton' },
        { '@type': 'Thing', name: 'AI presentation generation' },
        { '@type': 'Thing', name: 'Self-hosted AI' },
        { '@type': 'Thing', name: 'PowerPoint export' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/presenton-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Presenton Review', item: 'https://www.promptquorum.com/power-local-llm/presenton-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-de.webp',
    title: 'Presenton-Rezension: Quelloffener KI-Präsentationsgenerator',
    seoTitle: 'Presenton-Rezension: Open-Source-KI für Präsentationen',
    intro: 'Presenton ist ein quelloffener KI-Präsentationsgenerator von Presenton Inc., der aus einem Prompt oder einem Dokument bearbeitbare PPTX- und PDF-Folien erstellt und dafür ein lokales oder Cloud-Modell nutzt, das Sie selbst konfigurieren. Die Desktop- und die Docker-Version sind unter der Apache-2.0-Lizenz kostenlos nutzbar, während eine gehostete Cloud-Version Folien-Guthaben verkauft. Diese Rezension stützt sich auf Website, README, Datenschutzerklärung und GitHub-Releases, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht getestet.',
    metaDescription: 'Presenton-Rezension: quelloffener KI-Präsentationsgenerator für Desktop und Docker. Bearbeitbares PPTX und PDF, lokale oder Cloud-Modelle; ungetestet.',
    twitterDescription: 'Presenton-Rezension: quelloffener KI-Folien-Generator für Desktop und Docker. Bearbeitbares PPTX und PDF, Modell nach Wahl und was die Quellen bestätigen und was nicht.',
    audience: 'Vortragende, Entwickler und Teams, die einen selbst gehosteten KI-Folien-Generator erwägen und wissen müssen, was die Quellen bestätigen, was das Projekt nur behauptet und was es kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Presenton Rezension',
    targetKeywords: [
      'presenton rezension',
      'open source ki präsentationsgenerator',
      'presenton ollama',
      'selbst gehosteter ki folien generator',
      'ki präsentation pptx export',
      'gamma alternative open source',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton (Desktop-Version 0.9.11-beta) ist ein quelloffener KI-Präsentationsgenerator, der aus einem Prompt, einem Dokument oder Ihrem eigenen PowerPoint-Design eine bearbeitbare PPTX- oder PDF-Präsentation erstellt.** Er läuft auf Ihrem Rechner oder Server und arbeitet mit einem Modellanbieter Ihrer Wahl, sodass der Datenschutz von dieser Wahl abhängt. Jede Aussage hier stammt von der Website, aus dem README und aus den GitHub-Releases des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Kann Presenton Folien erzeugen, ohne etwas in die Cloud zu senden?',
        answer: 'Laut Projekt ja, wenn Sie einen lokalen Modellanbieter wie Ollama oder LM Studio verwenden; bei einem Cloud-Anbieter gehen Prompts und Quellinhalte an diesen Anbieter. Die gehostete Presenton Cloud ist ein eigener Dienst, der Ihre Arbeit auf den Servern des Unternehmens speichert.',
        bullets: [
          'Präsentationen entstehen aus einem Prompt, einem hochgeladenen Dokument oder einer Vorlage aus Ihrer eigenen PPTX-Datei.',
          'Die Folien öffnen sich vor dem Export in einem Editor mit Drag-and-Drop.',
          'Exportformate sind PPTX und PDF.',
          'Über eine integrierte API und einen MCP-Server können andere Werkzeuge Präsentationen anfordern.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Presenton?', anchor: 'what-is-presenton' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
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
            text: 'Presenton ist ein unter Apache 2.0 lizenzierter KI-Folien-Generator, den Sie als Desktop-App oder Docker-Container betreiben und mit Text- und Bildmodellen Ihrer Wahl nutzen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie beschreiben ein Thema oder laden ein Dokument hoch, wählen eine Vorlage, und ein von Ihnen konfiguriertes Modell schreibt die Folien, die Sie anschließend bearbeiten und als PowerPoint oder PDF exportieren.',
          },
        ],
        items: [
          'Pflege: Der neueste Commit im Repository stammt vom 22. Oktober 2026 und das aktuelle Desktop-Release 0.9.11-beta vom 21. September 2026; ein Warnhinweis für veraltete Projekte entfällt, das Projekt kennzeichnet seine Releases aber als Beta.',
          'Modelle: lokal über Ollama oder LM Studio oder in der Cloud über OpenAI, Google Gemini, Anthropic und weitere Anbieter, auswählbar in den Einstellungen.',
          'Kosten: Die Desktop- und die Docker-Version sind kostenlos; die gehostete Presenton Cloud verkauft monatliche Folien-Kontingente.',
          'Installation: eine Desktop-App für macOS und Linux oder ein einziger Docker-Befehl auf jedem System.',
          'Hersteller: ein Unternehmen, Presenton Inc., mit öffentlichem Quellcode auf GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, README, Datenschutzerklärung und GitHub-Releases des Projekts, geprüft am 24. Oktober 2026. PromptQuorum hat Presenton weder installiert noch eine Präsentation erzeugt; Folienqualität und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'Was ist Presenton?',
        content: [
          '**Presenton ist ein quelloffener KI-Präsentationsersteller, der aus Prompts, hochgeladenen Dokumenten oder eigenen PowerPoint-basierten Designs Foliensätze erzeugt.** Der Code liegt auf [GitHub](https://github.com/presenton/presenton); dort bezeichnet sich das Projekt als Alternative zu Gamma, Canva und Beautiful AI.',
          'Laut README gibt es vier Formen: eine Desktop-App, einen selbst gehosteten Docker-Container, die gehostete Presenton Cloud im Browser und eine kostenpflichtige Enterprise-Edition. Diese Rezension betrifft die kostenlose Desktop- und die Docker-Version.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Presenton lässt sich als Desktop-App installieren oder mit einem Docker-Befehl starten; zusätzlich läuft eine gehostete Version im Browser.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          { Option: 'macOS', Bezug: '[Download-Seite](https://presenton.ai/download), .dmg-Installer' },
          { Option: 'Linux', Bezug: '[Download-Seite](https://presenton.ai/download), .AppImage oder .deb' },
          { Option: 'Windows', Bezug: 'Letzte .exe ist 0.8.7-beta; keine in den 0.9.x-Releases' },
          { Option: 'Docker', Bezug: 'docker-run-Befehl im [README](https://github.com/presenton/presenton), Oberfläche unter localhost:5001' },
          { Option: 'Website', Bezug: '[presenton.ai](https://presenton.ai), dort läuft auch die browserbasierte Presenton Cloud' },
          { Option: 'Datenschutzerklärung', Bezug: '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { Option: 'Quellcode', Bezug: '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: 'Geprüfte Version: 0.9.11-beta, das aktuelle Desktop-Release, am 21. September 2026 mit .dmg-, .AppImage- und .deb-Dateien veröffentlicht. Die verlinkte Datenschutzerklärung gilt für den Dienst Presenton Cloud, nicht für die Desktop- oder Docker-Version.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen dem README und der Website; PromptQuorum hat sie nicht selbst durchgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren oder starten',
            whyItMatters: 'Öffnen Sie die Desktop-App oder führen Sie docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest aus und rufen Sie [localhost:5001](http://localhost:5001) im Browser auf.',
          },
          {
            title: 'Modellanbieter wählen',
            whyItMatters: 'Wählen Sie in den Einstellungen einen Textanbieter wie Ollama, LM Studio oder eine Cloud-API mit eigenem Schlüssel sowie einen Bildanbieter wie Pexels, Pixabay, ComfyUI oder ein OpenAI- oder Gemini-Bildmodell.',
          },
          {
            title: 'Erzeugen und bearbeiten',
            whyItMatters: 'Geben Sie einen Prompt ein oder laden Sie ein Dokument hoch, wählen Sie eine Vorlage und ordnen Sie die Folien im Editor um und bearbeiten Sie sie, bevor Sie exportieren.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus dem README oder von der Website des Projekts; keiner wurde von PromptQuorum getestet.**',
        ],
        items: [
          '**Eingaben und Vorlagen.** Präsentationen entstehen aus einem Prompt oder einem hochgeladenen Dokument; es gibt eingebaute Vorlagen, und eine eigene Vorlage lässt sich aus einer vorhandenen PowerPoint-Datei erzeugen oder in HTML und Tailwind CSS schreiben.',
          '**Bearbeitung.** Eine Arbeitsfläche mit Drag-and-Drop und Folienänderungen per Chat, danach Export als PPTX oder PDF.',
          '**Modellanbieter.** Text über Ollama, LM Studio, OpenAI, Google Gemini und Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI oder jeden OpenAI-kompatiblen Endpunkt, dazu die Option „Sign in with ChatGPT“, die keinen API-Schlüssel braucht.',
          '**Automatisierung.** Eine API zur Präsentationserstellung und ein integrierter MCP-Server, über die Skripte und KI-Agenten Präsentationen anfordern können.',
          '**Teams.** Mehrbenutzer-Arbeitsbereiche mit Admin-Bereich in der selbst gehosteten Version sowie Docker-Images mit GPU-Unterstützung für lokale Modelle.',
        ],
        note: 'Die gehostete Presenton Cloud zählt ein Guthaben pro erzeugter Folie, eine Präsentation mit 10 Folien verbraucht also 10 Guthaben; die Tarifpreise stehen auf der [Preisseite](https://presenton.ai/pricing) und werden hier nicht wiederholt.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Wohin Ihre Inhalte gelangen, hängt von den Anbietern ab, die Sie konfigurieren.** Laut Website läuft die Desktop-App auf Ihrem Rechner, und mit lokalen Modellen und lokalen Mediendiensten können die Präsentationsinhalte in Ihrer Umgebung bleiben, während ein Cloud-Anbieter für Text, Bilder oder Suche die jeweiligen Prompts, Quellinhalte oder Anfragen nach seinen eigenen Bedingungen erhält.',
          'Das README nennt zwei weitere Datenwege: eine Community-Galerie mit Designs, die standardmäßig aktiv ist und einen Presenton-Dienst kontaktiert (eine Einstellung schaltet sie ab, und das README verlangt dies für Air-Gap-Betrieb), sowie eine Einstellung für anonyme Telemetrie, die sich deaktivieren lässt. Was die Telemetrie enthält, steht dort nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die [Datenschutzerklärung](https://presenton.ai/privacy-policy), zuletzt aktualisiert am 17. April 2026, gilt für die gehostete Presenton Cloud: Sie nennt Konto-, Inhalts- und Nutzungsdaten, sagt, dass personenbezogene Daten nicht verkauft werden, und dass konkrete Präsentationsinhalte ohne ausdrückliche Einwilligung nicht zum Training von Modellen verwendet werden, während aggregierte, anonymisierte Nutzungsdaten verwendet werden dürfen. Dies sind Angaben des Unternehmens, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr der App nicht untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Entwickler und Teams**, die Präsentationen über eine API oder einen MCP-Server auf eigener Infrastruktur erzeugen möchten.',
          '**Datenschutzbewusste Vortragende**, die bereits Ollama oder LM Studio betreiben und Folien von einem lokalen Modell entwerfen lassen möchten.',
          '**Menschen, die mit PowerPoint arbeiten** und eine bearbeitbare .pptx-Datei statt einer reinen Web-Präsentation brauchen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Folienqualität und Geschwindigkeit.** Es wurde keine Präsentation erzeugt; Layoutqualität, Richtigkeit der erzeugten Texte und Geschwindigkeit mit lokalen Modellen werden daher nicht bewertet.',
          '**Rein offline.** Das Projekt beschreibt den lokalen Betrieb mit Ollama, doch PromptQuorum hat nicht bestätigt, dass jede Funktion, auch Bilderzeugung und Community-Galerie, ohne Verbindung funktioniert.',
          '**Hardwarebedarf.** Die Quellen nennen keine Anforderung an RAM oder GPU; sie hängt vom gewählten Modell ab.',
          '**Stabilität.** Jedes Release trägt ein Beta-Label, und wie stabil Updates zwischen den Versionen sind, ist ungetestet.',
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
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: '[AnythingLLM](/de/power-local-llm/anythingllm-review)',
            Plattformen: 'macOS, Windows, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Arbeitsbereich für Dokumenten-Chat und RAG, kein Folien-Generator',
          },
          {
            App: '[PrivateGPT](/de/power-local-llm/privategpt-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wichtigster Unterschied': 'Private Fragen an Ihre Dokumente; liefert Antworten, keine Präsentationen',
          },
          {
            App: '[h2oGPT](/de/power-local-llm/h2ogpt-review-2026)',
            Plattformen: 'macOS, Windows, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wichtigster Unterschied': 'Oberfläche für Dokumenten-Chat; nicht auf Folienausgabe ausgelegt',
          },
        ],
        note: 'Ein weiterer Folien-Generator ist im PromptQuorum-Verzeichnis bisher nicht enthalten; dies sind daher die nächstliegenden dokumentenbasierten Werkzeuge. Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich die exportierte Datei in PowerPoint oder Google Slides öffnen?',
            a: 'Laut FAQ des Projekts sind exportierte PPTX-Dateien in Microsoft PowerPoint, Google Slides und kompatibler Software voll bearbeitbar. PromptQuorum hat keinen Export geöffnet.',
          },
          {
            q: 'Wie aktualisiere ich die Desktop-App?',
            a: 'Laut Download-Seite ersetzt die Installation einer neueren Version die alte und behält Ihre Einstellungen und Daten.',
          },
          {
            q: 'Funktioniert es mit meinem ChatGPT-Abonnement?',
            a: 'Das README sagt, dass die Option „Sign in with ChatGPT“ mit einem kostenlosen oder bezahlten ChatGPT-Konto Präsentationen ohne eigenen API-Schlüssel erzeugt. Dieser Weg nutzt den Dienst von OpenAI, kein lokales Modell.',
          },
          {
            q: 'Können mehrere Personen eine Installation gemeinsam nutzen?',
            a: 'Selbst gehostete Installationen unterstützen Mehrbenutzer-Arbeitsbereiche, jeweils privat, und einen Admin-Bereich; laut README verwalten Admins die gemeinsamen Anbieterschlüssel.',
          },
          {
            q: 'Was bietet die Enterprise-Edition zusätzlich?',
            a: 'Das README nennt versionierte Helm-Charts für Kubernetes, Audit-Logs, eine zentrale Admin-Konsole und SSO mit Benutzerbereitstellung über OAuth, OIDC und SCIM. PromptQuorum hat sie nicht geprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Presenton ist ein aktiv entwickelter, quelloffener Weg, bearbeitbare PowerPoint- und PDF-Präsentationen mit den KI-Modellen Ihrer Wahl zu erzeugen, auch mit lokalen. Dem stehen gegenüber: Jedes Release ist als Beta gekennzeichnet, der Datenschutz hängt vollständig von den konfigurierten Anbietern ab, und zu Folienqualität und Geschwindigkeit ließ sich hier nichts prüfen. Es passt zu Selbsthostern und Teams, die Kontrolle über Modelle und Daten wollen; wer verlässliche Ergebnisse braucht, sollte vorab eine Testpräsentation erzeugen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Presenton](https://presenton.ai) — Produktübersicht, FAQ der Download-Seite und Preiserläuterung, geprüft am 24. Oktober 2026.',
          '[Presenton auf GitHub](https://github.com/presenton/presenton) — README, Apache-2.0-Lizenz und Commit-Verlauf, geprüft am 24. Oktober 2026.',
          '[Presenton-Releases](https://github.com/presenton/presenton/releases) — Dateinamen und Daten des Release 0.9.11-beta und früherer Releases, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung von Presenton](https://presenton.ai/privacy-policy) — Datenverarbeitung des gehosteten Dienstes, zuletzt aktualisiert am 17. April 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — ein Arbeitsbereich für Dokumenten-Chat auf Desktop und Docker.',
          '[PrivateGPT-Rezension](/de/power-local-llm/privategpt-review) — private Fragen an Ihre eigenen Dokumente.',
          '[h2oGPT-Rezension](/de/power-local-llm/h2ogpt-review-2026) — eine Oberfläche für Dokumenten-Chat.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-es.webp',
    title: 'Reseña de Presenton: generador de presentaciones con IA de código abierto',
    seoTitle: 'Reseña de Presenton: generador de diapositivas con IA',
    intro: 'Presenton es un generador de presentaciones con IA de código abierto, de Presenton Inc., que crea presentaciones PPTX y PDF editables a partir de un prompt o un documento, con un modelo local o en la nube que configuras tú. Las versiones de escritorio y Docker son gratuitas con la licencia Apache 2.0, mientras que una versión alojada en la nube vende créditos de diapositivas. Esta reseña se basa en el sitio web, el README, la política de privacidad y las versiones de GitHub, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription: 'Reseña de Presenton: generador de presentaciones con IA de código abierto para escritorio y Docker. PPTX y PDF editables, modelos locales o en la nube.',
    twitterDescription: 'Reseña de Presenton: generador de diapositivas con IA de código abierto para escritorio y Docker. PPTX y PDF editables, el modelo que elijas y lo que las fuentes confirman y no confirman.',
    audience: 'Quienes presentan, desarrolladores y equipos que valoran un generador de diapositivas con IA autoalojado y necesitan saber qué confirman las fuentes, qué solo afirma el proyecto y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Presenton',
    targetKeywords: [
      'reseña presenton',
      'generador de presentaciones con ia código abierto',
      'presenton ollama',
      'generador de diapositivas ia autoalojado',
      'presentación ia exportar pptx',
      'alternativa a gamma código abierto',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton (versión de escritorio 0.9.11-beta) es un generador de presentaciones con IA de código abierto que convierte un prompt, un documento o tu propio diseño de PowerPoint en una presentación PPTX o PDF editable.** Se ejecuta en tu equipo o servidor y funciona con el proveedor de modelos que elijas, así que su privacidad depende de esa elección. Todo lo que se afirma aquí procede del sitio web, el README y las versiones de GitHub del proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Presenton generar diapositivas sin enviar nada a la nube?',
        answer: 'Según el proyecto, sí, si lo combinas con un proveedor de modelos local como Ollama o LM Studio; con un proveedor en la nube, los prompts y el contenido de origen van a ese proveedor. Presenton Cloud, la versión alojada, es un servicio aparte que guarda tu trabajo en los servidores de la empresa.',
        bullets: [
          'Las presentaciones parten de un prompt, un documento subido o una plantilla creada con tu propio PPTX.',
          'Las diapositivas se abren en un editor de arrastrar y soltar antes de exportar.',
          'Los formatos de exportación son PPTX y PDF.',
          'Una API integrada y un servidor MCP permiten que otras herramientas pidan presentaciones.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Presenton?', anchor: 'what-is-presenton' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
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
            text: 'Presenton es un generador de diapositivas con IA con licencia Apache 2.0 que puedes ejecutar como app de escritorio o contenedor Docker, con los modelos de texto e imagen que elijas.',
          },
          {
            type: 'plain-terms',
            text: 'Describes un tema o subes un documento, eliges una plantilla y un modelo que has configurado escribe las diapositivas, que luego editas y exportas a PowerPoint o PDF.',
          },
        ],
        items: [
          'Mantenimiento: el último commit del repositorio es del 22 de octubre de 2026 y la última versión de escritorio, 0.9.11-beta, del 21 de septiembre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado; el proyecto etiqueta sus versiones como beta.',
          'Modelos: locales con Ollama o LM Studio, o en la nube con OpenAI, Google Gemini, Anthropic y otros proveedores, elegidos en los ajustes.',
          'Coste: las versiones de escritorio y Docker son gratuitas; Presenton Cloud, la versión alojada, vende planes mensuales de créditos de diapositivas.',
          'Instalación: una app de escritorio para macOS y Linux, o un solo comando de Docker en cualquier sistema.',
          'Desarrollador: una empresa, Presenton Inc., con el código fuente público en GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, el README, la política de privacidad y las versiones de GitHub del proyecto, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado Presenton ni ha generado una presentación, así que no se evalúan la calidad de las diapositivas ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: '¿Qué es Presenton?',
        content: [
          '**Presenton es un creador de presentaciones con IA de código abierto que genera juegos de diapositivas a partir de prompts, documentos subidos o tus propios diseños basados en PowerPoint.** El código está en [GitHub](https://github.com/presenton/presenton), donde el proyecto se describe como alternativa a Gamma, Canva y Beautiful AI.',
          'Según el README, existe en cuatro formas: una app de escritorio, un contenedor Docker autoalojado, Presenton Cloud en el navegador y una edición Enterprise de pago. Esta reseña trata las versiones gratuitas de escritorio y Docker.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Presenton se instala como app de escritorio o se inicia con un solo comando de Docker; también hay una versión alojada que funciona en el navegador.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          { 'Opción': 'macOS', 'Cómo conseguirlo': '[Página de descarga](https://presenton.ai/download), instalador .dmg' },
          { 'Opción': 'Linux', 'Cómo conseguirlo': '[Página de descarga](https://presenton.ai/download), .AppImage o .deb' },
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'El último .exe es 0.8.7-beta; ninguno en las versiones 0.9.x' },
          { 'Opción': 'Docker', 'Cómo conseguirlo': 'Comando docker run en el [README](https://github.com/presenton/presenton), interfaz en localhost:5001' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[presenton.ai](https://presenton.ai), que también aloja Presenton Cloud en el navegador' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: 'Versión revisada: 0.9.11-beta, la última de escritorio, publicada el 21 de septiembre de 2026 con archivos .dmg, .AppImage y .deb. La política de privacidad enlazada cubre el servicio Presenton Cloud, no las versiones de escritorio ni Docker.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el README y el sitio web; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o iniciar',
            whyItMatters: 'Abre la app de escritorio, o ejecuta docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest y abre [localhost:5001](http://localhost:5001) en el navegador.',
          },
          {
            title: 'Elegir los proveedores de modelos',
            whyItMatters: 'En los ajustes, elige un proveedor de texto como Ollama, LM Studio o una API en la nube con tu propia clave, y un proveedor de imágenes como Pexels, Pixabay, ComfyUI o un modelo de imágenes de OpenAI o Gemini.',
          },
          {
            title: 'Generar y editar',
            whyItMatters: 'Escribe un prompt o sube un documento, elige una plantilla y reorganiza y edita las diapositivas en el editor antes de exportar.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede del README o del sitio web del proyecto; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Entradas y plantillas.** Las presentaciones parten de un prompt o un documento subido; hay plantillas integradas, y una plantilla propia puede generarse a partir de un archivo de PowerPoint existente o escribirse en HTML y Tailwind CSS.',
          '**Edición.** Un lienzo de arrastrar y soltar con cambios de diapositivas por chat, y después exportación a PPTX o PDF.',
          '**Proveedores de modelos.** Texto con Ollama, LM Studio, OpenAI, Google Gemini y Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI o cualquier endpoint compatible con OpenAI, además de una opción «Sign in with ChatGPT» que no necesita clave de API.',
          '**Automatización.** Una API de generación de presentaciones y un servidor MCP integrado, para que scripts y agentes de IA pidan presentaciones.',
          '**Equipos.** Espacios de trabajo multiusuario con panel de administración en la versión autoalojada, e imágenes de Docker con soporte de GPU para modelos locales.',
        ],
        note: 'Presenton Cloud cuenta un crédito por diapositiva generada, así que una presentación de 10 diapositivas usa 10 créditos; los precios de los planes figuran en la [página de precios](https://presenton.ai/pricing) y no se repiten aquí.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Adónde van tus contenidos depende de los proveedores que configures.** Según el sitio web, la app de escritorio se ejecuta en tu equipo y, con modelos locales y servicios multimedia locales, el contenido de la presentación puede quedarse en tu entorno, mientras que un proveedor de texto, imágenes o búsqueda en la nube recibe los prompts, contenidos de origen o solicitudes correspondientes según sus propias condiciones.',
          'El README documenta dos vías de datos más: una galería comunitaria de diseños, activada por defecto, que contacta con un servicio de Presenton (un ajuste la desactiva y el README lo exige en despliegues aislados de la red), y un ajuste de telemetría anónima que se puede desactivar. No dice qué contiene esa telemetría.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La [política de privacidad](https://presenton.ai/privacy-policy), actualizada por última vez el 17 de abril de 2026, cubre Presenton Cloud: enumera datos de cuenta, contenido y uso, dice que la información personal no se vende y que el contenido concreto de las presentaciones no se usa para entrenar modelos sin consentimiento explícito, aunque pueden usarse datos de uso agregados y anonimizados. Son declaraciones de la empresa, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores y equipos** que quieren generar presentaciones mediante una API o un servidor MCP en su propia infraestructura.',
          '**Quienes presentan y cuidan su privacidad** y ya usan Ollama o LM Studio y quieren que un modelo local redacte las diapositivas.',
          '**Quienes trabajan en PowerPoint** y necesitan un archivo .pptx editable en lugar de una presentación solo web.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad de las diapositivas.** No se generó ninguna presentación, así que no se evalúan la calidad del diseño, la exactitud del texto generado ni la velocidad con modelos locales.',
          '**Uso totalmente sin conexión.** El proyecto describe el funcionamiento local con Ollama, pero PromptQuorum no confirmó que todas las funciones, incluidas la generación de imágenes y la galería comunitaria, funcionen sin conexión.',
          '**Requisitos de hardware.** Las fuentes no dan requisitos de RAM ni de GPU; dependen del modelo que elijas.',
          '**Estabilidad.** Todas las versiones llevan la etiqueta beta y no se ha probado lo estables que son las actualizaciones entre versiones.',
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
            Plataformas: 'macOS, Windows, Linux, web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Espacio de chat con documentos y RAG, no un generador de diapositivas',
          },
          {
            App: '[PrivateGPT](/es/power-local-llm/privategpt-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Preguntas privadas sobre tus documentos; da respuestas, no presentaciones',
          },
          {
            App: '[h2oGPT](/es/power-local-llm/h2ogpt-review-2026)',
            Plataformas: 'macOS, Windows, Linux, web',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Interfaz de chat con documentos; no está pensada para generar diapositivas',
          },
        ],
        note: 'Todavía no hay otro generador de diapositivas en el directorio de PromptQuorum, así que estas son las herramientas basadas en documentos más cercanas; comprueba el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo abrir el archivo exportado en PowerPoint o Google Slides?',
            a: 'Según las preguntas frecuentes del proyecto, los archivos PPTX exportados se pueden editar por completo en Microsoft PowerPoint, Google Slides y software compatible. PromptQuorum no abrió ninguna exportación.',
          },
          {
            q: '¿Cómo actualizo la app de escritorio?',
            a: 'Según la página de descarga, instalar una versión más reciente sustituye a la anterior y conserva tus ajustes y datos.',
          },
          {
            q: '¿Funciona con mi suscripción a ChatGPT?',
            a: 'El README dice que una opción «Sign in with ChatGPT» permite que una cuenta de ChatGPT gratuita o de pago genere presentaciones sin clave de API aparte. Esa vía usa el servicio de OpenAI, no un modelo local.',
          },
          {
            q: '¿Pueden varias personas compartir una instalación?',
            a: 'Las instalaciones autoalojadas admiten espacios de trabajo multiusuario, cada uno privado, y un panel de administración; según el README, los administradores gestionan las claves compartidas de los proveedores.',
          },
          {
            q: '¿Qué añade la edición Enterprise?',
            a: 'El README enumera charts de Helm versionados para Kubernetes, registros de auditoría, una consola de administración central y SSO con aprovisionamiento de usuarios mediante OAuth, OIDC y SCIM. PromptQuorum no la revisó.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Presenton es una vía de código abierto y con desarrollo activo para generar presentaciones PowerPoint y PDF editables con los modelos de IA que elijas, incluidos los locales. En contra, todas las versiones llevan la etiqueta beta, la privacidad depende por completo de los proveedores que configures y no se pudo comprobar nada sobre la calidad ni la velocidad de las diapositivas. Encaja con quienes se autoalojan y con equipos que quieren control sobre modelos y datos; quien necesite resultados fiables debería generar una presentación de prueba antes de depender de ella.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Presenton](https://presenton.ai) — descripción del producto, preguntas frecuentes de la página de descarga y explicación de precios, consultado el 24 de octubre de 2026.',
          '[Presenton en GitHub](https://github.com/presenton/presenton) — README, licencia Apache 2.0 e historial de commits, consultados el 24 de octubre de 2026.',
          '[Versiones de Presenton](https://github.com/presenton/presenton/releases) — nombres de archivo y fechas de la versión 0.9.11-beta y anteriores, consultados el 24 de octubre de 2026.',
          '[Política de privacidad de Presenton](https://presenton.ai/privacy-policy) — tratamiento de datos del servicio alojado, actualizada por última vez el 17 de abril de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — un espacio de chat con documentos para escritorio y Docker.',
          '[Reseña de PrivateGPT](/es/power-local-llm/privategpt-review) — preguntas privadas sobre tus propios documentos.',
          '[Reseña de h2oGPT](/es/power-local-llm/h2ogpt-review-2026) — una interfaz de chat con documentos.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-fr.webp',
    title: 'Test de Presenton : générateur de présentations IA open source',
    seoTitle: 'Test de Presenton : présentations IA open source',
    intro: 'Presenton est un générateur de présentations IA open source de Presenton Inc. qui crée des diaporamas PPTX et PDF modifiables à partir d’un prompt ou d’un document, avec un modèle local ou cloud que vous configurez. Les versions bureau et Docker sont gratuites sous licence Apache 2.0, tandis qu’une version cloud hébergée vend des crédits de diapositives. Ce test s’appuie sur le site, le README, la politique de confidentialité et les versions GitHub, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application.',
    metaDescription: 'Test de Presenton : générateur de présentations IA open source pour bureau et Docker. PPTX et PDF modifiables, modèles locaux ou cloud ; non testé.',
    twitterDescription: 'Test de Presenton : générateur de diapositives IA open source pour bureau et Docker. PPTX et PDF modifiables, modèle au choix, ce que les sources confirment ou non.',
    audience: 'Présentateurs, développeurs et équipes qui envisagent un générateur de diapositives IA auto-hébergé et doivent savoir ce que les sources confirment, ce que le projet affirme seulement et ce que cela coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Presenton',
    targetKeywords: [
      'test presenton',
      'générateur de présentations ia open source',
      'presenton ollama',
      'générateur de diapositives ia auto-hébergé',
      'présentation ia export pptx',
      'alternative à gamma open source',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton (version bureau 0.9.11-beta) est un générateur de présentations IA open source qui transforme un prompt, un document ou votre propre design PowerPoint en diaporama PPTX ou PDF modifiable.** Il s’exécute sur votre ordinateur ou votre serveur et fonctionne avec le fournisseur de modèles de votre choix ; sa confidentialité dépend donc de ce choix. Chaque affirmation ici provient du site, du README et des versions GitHub du projet.',
    quickAnswerTop: {
      fr: {
        question: 'Presenton peut-il générer des diapositives sans rien envoyer vers le cloud ?',
        answer: 'Selon le projet, oui, si vous l’associez à un fournisseur de modèles local comme Ollama ou LM Studio ; avec un fournisseur cloud, les prompts et le contenu source partent chez ce fournisseur. Presenton Cloud, la version hébergée, est un service distinct qui conserve votre travail sur les serveurs de l’entreprise.',
        bullets: [
          'Les présentations partent d’un prompt, d’un document téléversé ou d’un modèle créé à partir de votre propre PPTX.',
          'Les diapositives s’ouvrent dans un éditeur par glisser-déposer avant l’export.',
          'Les formats d’export sont PPTX et PDF.',
          'Une API intégrée et un serveur MCP permettent à d’autres outils de demander des présentations.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Presenton ?', anchor: 'what-is-presenton' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
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
            text: 'Presenton est un générateur de diapositives IA sous licence Apache 2.0 que vous pouvez exécuter comme application de bureau ou conteneur Docker, avec les modèles de texte et d’image de votre choix.',
          },
          {
            type: 'plain-terms',
            text: 'Vous décrivez un sujet ou téléversez un document, choisissez un modèle de mise en page, et un modèle que vous avez configuré rédige les diapositives, que vous modifiez puis exportez en PowerPoint ou PDF.',
          },
        ],
        items: [
          'Maintenance : le dernier commit du dépôt date du 22 octobre 2026 et la dernière version bureau, 0.9.11-beta, du 21 septembre 2026, donc aucun avertissement de projet abandonné ne s’applique ; le projet qualifie ses versions de bêta.',
          'Modèles : en local avec Ollama ou LM Studio, ou dans le cloud avec OpenAI, Google Gemini, Anthropic et d’autres fournisseurs, choisis dans les paramètres.',
          'Coût : les versions bureau et Docker sont gratuites ; Presenton Cloud, la version hébergée, vend des forfaits mensuels de crédits de diapositives.',
          'Installation : une application de bureau pour macOS et Linux, ou une seule commande Docker sur n’importe quel système.',
          'Éditeur : une société, Presenton Inc., dont le code source est public sur GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, le README, la politique de confidentialité et les versions GitHub du projet, consultés le 24 octobre 2026. PromptQuorum n’a ni installé Presenton ni généré de présentation ; la qualité des diapositives et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'Qu’est-ce que Presenton ?',
        content: [
          '**Presenton est un créateur de présentations IA open source qui génère des diaporamas à partir de prompts, de documents téléversés ou de vos propres designs basés sur PowerPoint.** Le code est sur [GitHub](https://github.com/presenton/presenton), où le projet se présente comme une alternative à Gamma, Canva et Beautiful AI.',
          'Selon le README, il existe sous quatre formes : une application de bureau, un conteneur Docker auto-hébergé, Presenton Cloud dans le navigateur et une édition Enterprise payante. Ce test porte sur les versions gratuites bureau et Docker.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Presenton s’installe comme application de bureau ou se lance avec une commande Docker ; une version hébergée fonctionne aussi dans le navigateur.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          { Option: 'macOS', 'Comment l’obtenir': '[Page de téléchargement](https://presenton.ai/download), installateur .dmg' },
          { Option: 'Linux', 'Comment l’obtenir': '[Page de téléchargement](https://presenton.ai/download), .AppImage ou .deb' },
          { Option: 'Windows', 'Comment l’obtenir': 'Dernier .exe : 0.8.7-beta ; aucun dans les versions 0.9.x' },
          { Option: 'Docker', 'Comment l’obtenir': 'Commande docker run dans le [README](https://github.com/presenton/presenton), interface sur localhost:5001' },
          { Option: 'Site web', 'Comment l’obtenir': '[presenton.ai](https://presenton.ai), qui héberge aussi Presenton Cloud dans le navigateur' },
          { Option: 'Politique de confidentialité', 'Comment l’obtenir': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { Option: 'Code source', 'Comment l’obtenir': '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: 'Version testée : 0.9.11-beta, la dernière version bureau, publiée le 21 septembre 2026 avec des fichiers .dmg, .AppImage et .deb. La politique de confidentialité indiquée couvre le service Presenton Cloud, pas les versions bureau ni Docker.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent le README et le site ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer ou lancer',
            whyItMatters: 'Ouvrez l’application de bureau, ou exécutez docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest puis ouvrez [localhost:5001](http://localhost:5001) dans un navigateur.',
          },
          {
            title: 'Choisir les fournisseurs de modèles',
            whyItMatters: 'Dans les paramètres, choisissez un fournisseur de texte comme Ollama, LM Studio ou une API cloud avec votre propre clé, et un fournisseur d’images comme Pexels, Pixabay, ComfyUI ou un modèle d’images OpenAI ou Gemini.',
          },
          {
            title: 'Générer et modifier',
            whyItMatters: 'Saisissez un prompt ou téléversez un document, choisissez un modèle de mise en page, puis réorganisez et modifiez les diapositives dans l’éditeur avant l’export.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README ou du site du projet ; aucun n’a été testé par PromptQuorum.**',
        ],
        items: [
          '**Entrées et modèles.** Les présentations partent d’un prompt ou d’un document téléversé ; des modèles intégrés existent, et un modèle personnalisé peut être généré à partir d’un fichier PowerPoint existant ou écrit en HTML et Tailwind CSS.',
          '**Édition.** Un canevas par glisser-déposer avec modification des diapositives par chat, puis export en PPTX ou PDF.',
          '**Fournisseurs de modèles.** Texte via Ollama, LM Studio, OpenAI, Google Gemini et Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI ou tout point d’accès compatible OpenAI, plus une option « Sign in with ChatGPT » qui n’exige aucune clé d’API.',
          '**Automatisation.** Une API de génération de présentations et un serveur MCP intégré, pour que des scripts et des agents IA demandent des présentations.',
          '**Équipes.** Espaces de travail multi-utilisateurs avec panneau d’administration dans la version auto-hébergée, et images Docker avec prise en charge GPU pour les modèles locaux.',
        ],
        note: 'Presenton Cloud compte un crédit par diapositive générée : une présentation de 10 diapositives utilise donc 10 crédits ; les prix des forfaits figurent sur la [page des tarifs](https://presenton.ai/pricing) et ne sont pas repris ici.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La destination de vos contenus dépend des fournisseurs que vous configurez.** Selon le site, l’application de bureau s’exécute sur votre machine et, avec des modèles et des services médias locaux, le contenu des présentations peut rester dans votre environnement, tandis qu’un fournisseur cloud de texte, d’images ou de recherche reçoit les prompts, contenus sources ou requêtes concernés selon ses propres conditions.',
          'Le README documente deux autres flux de données : une galerie communautaire de designs, activée par défaut, qui contacte un service Presenton (un paramètre la désactive, et le README l’exige pour un usage isolé du réseau), et un réglage de télémétrie anonyme qui peut être désactivé. Il n’indique pas ce que contient cette télémétrie.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La [politique de confidentialité](https://presenton.ai/privacy-policy), mise à jour le 17 avril 2026, couvre Presenton Cloud : elle énumère les données de compte, de contenu et d’usage, indique que les informations personnelles ne sont pas vendues et que le contenu précis des présentations n’est pas utilisé pour entraîner des modèles sans consentement explicite, tandis que des données d’usage agrégées et anonymisées peuvent l’être. Ce sont des déclarations de l’entreprise, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau de l’application.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les développeurs et les équipes** qui veulent générer des présentations via une API ou un serveur MCP sur leur propre infrastructure.',
          '**Les présentateurs soucieux de confidentialité** qui font déjà tourner Ollama ou LM Studio et veulent qu’un modèle local rédige les diapositives.',
          '**Les personnes qui travaillent dans PowerPoint** et ont besoin d’un fichier .pptx modifiable plutôt que d’une présentation uniquement web.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse des diapositives.** Aucune présentation n’a été générée ; la qualité de la mise en page, l’exactitude du texte généré et la vitesse avec des modèles locaux ne sont donc pas évaluées.',
          '**Usage entièrement hors ligne.** Le projet décrit un fonctionnement local avec Ollama, mais PromptQuorum n’a pas confirmé que toutes les fonctions, dont la génération d’images et la galerie communautaire, marchent sans connexion.',
          '**Besoins matériels.** Les sources ne donnent aucune exigence de RAM ni de GPU ; elle dépend du modèle choisi.',
          '**Stabilité.** Chaque version porte l’étiquette bêta, et la stabilité des mises à jour d’une version à l’autre n’a pas été testée.',
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
            Plateformes: 'macOS, Windows, Linux, web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Espace de chat avec documents et RAG, pas un générateur de diapositives',
          },
          {
            Application: '[PrivateGPT](/fr/power-local-llm/privategpt-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Questions privées sur vos documents ; produit des réponses, pas des présentations',
          },
          {
            Application: '[h2oGPT](/fr/power-local-llm/h2ogpt-review-2026)',
            Plateformes: 'macOS, Windows, Linux, web',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Interface de chat avec documents ; non conçue pour produire des diapositives',
          },
        ],
        note: 'Aucun autre générateur de diapositives ne figure encore dans l’annuaire PromptQuorum ; ce sont donc les outils les plus proches, fondés sur les documents. Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je ouvrir le fichier exporté dans PowerPoint ou Google Slides ?',
            a: 'Selon la FAQ du projet, les fichiers PPTX exportés sont entièrement modifiables dans Microsoft PowerPoint, Google Slides et les logiciels compatibles. PromptQuorum n’a ouvert aucun export.',
          },
          {
            q: 'Comment mettre à jour l’application de bureau ?',
            a: 'Selon la page de téléchargement, installer une version plus récente remplace l’ancienne et conserve vos réglages et vos données.',
          },
          {
            q: 'Fonctionne-t-il avec mon abonnement ChatGPT ?',
            a: 'Le README indique qu’une option « Sign in with ChatGPT » permet à un compte ChatGPT gratuit ou payant de générer des présentations sans clé d’API distincte. Cette voie utilise le service d’OpenAI, pas un modèle local.',
          },
          {
            q: 'Plusieurs personnes peuvent-elles partager une installation ?',
            a: 'Les installations auto-hébergées prennent en charge des espaces de travail multi-utilisateurs, chacun privé, et un panneau d’administration ; selon le README, les administrateurs gèrent les clés partagées des fournisseurs.',
          },
          {
            q: 'Qu’apporte l’édition Enterprise ?',
            a: 'Le README cite des charts Helm versionnés pour Kubernetes, des journaux d’audit, une console d’administration centrale et le SSO avec provisionnement des utilisateurs via OAuth, OIDC et SCIM. PromptQuorum ne l’a pas examinée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Presenton est un moyen open source, activement développé, de générer des présentations PowerPoint et PDF modifiables avec les modèles d’IA de votre choix, y compris locaux. En contrepartie, chaque version est étiquetée bêta, la confidentialité dépend entièrement des fournisseurs configurés, et rien n’a pu être vérifié sur la qualité ou la vitesse des diapositives. Il convient aux auto-hébergeurs et aux équipes qui veulent maîtriser modèles et données ; qui a besoin de résultats fiables devrait générer une présentation d’essai avant de s’y fier.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Presenton](https://presenton.ai) — présentation du produit, FAQ de la page de téléchargement et explication des tarifs, consultés le 24 octobre 2026.',
          '[Presenton sur GitHub](https://github.com/presenton/presenton) — README, licence Apache 2.0 et historique des commits, consultés le 24 octobre 2026.',
          '[Versions de Presenton](https://github.com/presenton/presenton/releases) — noms de fichiers et dates de la version 0.9.11-beta et des précédentes, consultés le 24 octobre 2026.',
          '[Politique de confidentialité de Presenton](https://presenton.ai/privacy-policy) — traitement des données du service hébergé, mise à jour le 17 avril 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’AnythingLLM](/fr/power-local-llm/anythingllm-review) — un espace de chat avec documents pour bureau et Docker.',
          '[Test de PrivateGPT](/fr/power-local-llm/privategpt-review) — des questions privées sur vos propres documents.',
          '[Test de h2oGPT](/fr/power-local-llm/h2ogpt-review-2026) — une interface de chat avec documents.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-ja.webp',
    title: 'Presentonレビュー：オープンソースのAIスライド生成ツール',
    seoTitle: 'Presentonレビュー：オープンソースのAIスライド生成',
    intro: 'Presentonは、Presenton Inc.が提供するオープンソースのAIプレゼン生成ツールです。プロンプトや文書から編集可能なPPTX・PDFのスライドを作成し、自分で設定したローカルまたはクラウドのモデルを使います。デスクトップ版とDocker版はApache 2.0ライセンスで無料で使え、ホスト型のクラウド版ではスライド用クレジットが販売されています。このレビューは、公式サイト、README、プライバシーポリシー、GitHubのリリースを2026年10月24日に確認した内容に基づいており、PromptQuorumはアプリを試していません。',
    metaDescription: 'Presentonのレビュー：デスクトップとDockerで使えるオープンソースのAIプレゼン生成ツール。編集可能なPPTX・PDFを出力し、ローカル/クラウドのモデルに対応。Apache 2.0、未検証。',
    twitterDescription: 'Presentonのレビュー：デスクトップとDocker向けのオープンソースAIスライド生成ツール。編集可能なPPTX・PDF、モデルは自由に選択、情報源が確認できた点とできなかった点。',
    audience: 'セルフホスト型のAIスライド生成ツールを検討している発表者・開発者・チームで、情報源が確認した事実、プロジェクト側の主張にとどまる点、費用を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Presentonレビュー',
    targetKeywords: [
      'presenton レビュー',
      'オープンソース ai プレゼン生成',
      'presenton ollama',
      'セルフホスト ai スライド作成',
      'ai プレゼン pptx 出力',
      'gamma 代替 オープンソース',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton（デスクトップ版0.9.11-beta）は、プロンプト、文書、または自分のPowerPointデザインから、編集可能なPPTXまたはPDFのスライドを作るオープンソースのAIプレゼン生成ツールです。** お使いのコンピューターやサーバー上で動作し、選んだモデル提供元と組み合わせて使うため、プライバシーの度合いはその選択に左右されます。ここでの記述はすべて、プロジェクトの公式サイト、README、GitHubのリリースに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Presentonはクラウドに何も送らずにスライドを生成できますか？',
        answer: 'プロジェクトによれば、OllamaやLM Studioなどのローカルのモデル提供元と組み合わせれば可能です。クラウドの提供元を使うと、プロンプトと元の内容がその提供元に送られます。ホスト型のPresenton Cloudは別のサービスで、作業内容は同社のサーバーに保存されます。',
        bullets: [
          'プロンプト、アップロードした文書、または自分のPPTXから作ったテンプレートからスライドを作ります。',
          '書き出す前に、ドラッグ操作で編集できるエディターでスライドを調整します。',
          '書き出し形式はPPTXとPDFです。',
          '内蔵のAPIとMCPサーバーにより、他のツールからスライド生成を依頼できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Presentonとは', anchor: 'what-is-presenton' },
      { label: '入手方法', anchor: 'get-it' },
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
          { type: 'one-sentence', text: 'Presentonは、Apache 2.0ライセンスのAIスライド生成ツールで、デスクトップアプリまたはDockerコンテナとして動かし、好きなテキスト/画像モデルを使えます。' },
          { type: 'plain-terms', text: 'テーマを入力するか文書をアップロードし、テンプレートを選ぶと、自分で設定したモデルがスライドを作成し、それを編集してPowerPointまたはPDFに書き出せます。' },
        ],
        items: [
          'メンテナンス：リポジトリの最新コミットは2026年10月22日、最新のデスクトップ版0.9.11-betaは2026年9月21日で、更新停止の警告は該当しません。ただしプロジェクトは各リリースをベータと表示しています。',
          'モデル：OllamaやLM Studioでローカルに、またはOpenAI、Google Gemini、Anthropicなどのクラウドで利用でき、設定で選びます。',
          '費用：デスクトップ版とDocker版は無料で、ホスト型のPresenton Cloudは月額のスライドクレジット制です。',
          '導入：macOSとLinux向けのデスクトップアプリ、またはどのOSでもDockerコマンド1行です。',
          '提供元：企業のPresenton Inc.で、ソースコードはGitHubで公開されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、プロジェクトの公式サイト、README、プライバシーポリシー、GitHubのリリースを2026年10月24日に確認した内容に基づきます。PromptQuorumはPresentonをインストールしておらず、スライドも生成していないため、スライドの品質や速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'Presentonとは',
        content: [
          '**Presentonは、プロンプト、アップロードした文書、またはPowerPointをもとにした独自デザインからスライド一式を生成する、オープンソースのAIプレゼン作成ツールです。** コードは[GitHub](https://github.com/presenton/presenton)にあり、プロジェクト自身はGamma、Canva、Beautiful AIの代替と説明しています。',
          'READMEによれば、提供形態はデスクトップアプリ、セルフホストのDockerコンテナ、ブラウザで使うPresenton Cloud、有料のEnterprise版の4つです。このレビューは無料のデスクトップ版とDocker版を対象とします。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Presentonはデスクトップアプリとしてインストールするか、Dockerコマンド1行で起動できます。ブラウザで使えるホスト型もあります。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          { '項目': 'macOS', '入手方法': '[ダウンロードページ](https://presenton.ai/download)、.dmgインストーラー' },
          { '項目': 'Linux', '入手方法': '[ダウンロードページ](https://presenton.ai/download)、.AppImageまたは.deb' },
          { '項目': 'Windows', '入手方法': '最新の.exeは0.8.7-beta、0.9.x系には含まれず' },
          { '項目': 'Docker', '入手方法': '[README](https://github.com/presenton/presenton)のdocker runコマンド、画面はlocalhost:5001' },
          { '項目': '公式サイト', '入手方法': '[presenton.ai](https://presenton.ai)、ブラウザ版Presenton Cloudもここで提供' },
          { '項目': 'プライバシーポリシー', '入手方法': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { '項目': 'ソースコード', '入手方法': '[github.com/presenton/presenton](https://github.com/presenton/presenton)、Apache 2.0' },
        ],
        note: '確認したバージョン：デスクトップ版の最新リリース0.9.11-beta（2026年9月21日公開、.dmg・.AppImage・.debを配布）。記載したプライバシーポリシーはPresenton Cloudというサービスを対象とし、デスクトップ版やDocker版は対象外です。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**手順はREADMEと公式サイトに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールまたは起動',
            whyItMatters: 'デスクトップアプリを開くか、docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest を実行し、ブラウザで[localhost:5001](http://localhost:5001)を開きます。',
          },
          { title: 'モデル提供元を選ぶ', whyItMatters: '設定で、Ollama、LM Studio、または自分のキーを使うクラウドAPIなどのテキスト提供元と、Pexels、Pixabay、ComfyUI、OpenAIまたはGeminiの画像モデルなどの画像提供元を選びます。' },
          { title: '生成と編集', whyItMatters: 'プロンプトを入力するか文書をアップロードし、テンプレートを選んだうえで、エディターでスライドを並べ替え・編集してから書き出します。' },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてREADMEまたは公式サイトに基づくもので、PromptQuorumは検証していません。**',
        ],
        items: [
          '**入力とテンプレート。** プロンプトまたはアップロードした文書から作成します。組み込みテンプレートがあり、独自テンプレートは既存のPowerPointファイルから生成するか、HTMLとTailwind CSSで作成できます。',
          '**編集。** ドラッグ操作のキャンバスとチャットによるスライド編集があり、PPTXまたはPDFに書き出せます。',
          '**モデル提供元。** テキストはOllama、LM Studio、OpenAI、Google GeminiとVertex AI、Azure OpenAI、Amazon Bedrock、Anthropic、Fireworks、Together AI、またはOpenAI互換のエンドポイントに対応し、APIキー不要の「Sign in with ChatGPT」も選べます。',
          '**自動化。** スライド生成API、および内蔵のMCPサーバーにより、スクリプトやAIエージェントから生成を依頼できます。',
          '**チーム利用。** セルフホスト版には管理パネル付きのマルチユーザー用ワークスペースがあり、ローカルモデル向けにGPU対応のDockerイメージも用意されています。',
        ],
        note: 'ホスト型のPresenton Cloudでは生成したスライド1枚につき1クレジットを消費するため、10枚のスライドなら10クレジットです。プランの料金は[料金ページ](https://presenton.ai/pricing)に表示されており、ここでは繰り返しません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**内容がどこへ送られるかは、設定した提供元によって決まります。** 公式サイトによれば、デスクトップアプリはお使いのマシン上で動作し、ローカルモデルとローカルのメディアサービスを使えばスライドの内容を自分の環境内にとどめられます。一方、クラウドのテキスト・画像・検索の提供元を選ぶと、該当するプロンプト、元の内容、リクエストがその提供元の規約のもとで送られます。',
          'READMEには、さらに2つのデータの流れが書かれています。1つは既定で有効なデザインのコミュニティギャラリーで、Presentonのサービスに接続します（設定で無効にでき、閉域環境では無効化が必須とされています）。もう1つは無効にできる匿名テレメトリーの設定で、その内容は記載されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '2026年4月17日に更新された[プライバシーポリシー](https://presenton.ai/privacy-policy)はPresenton Cloudを対象とし、アカウント、コンテンツ、利用状況のデータを挙げたうえで、個人情報は販売しないこと、具体的なスライド内容は明示的な同意なしにモデルの学習に使わないこと（集計・匿名化した利用データは使われる場合があること）を述べています。これは同社の表明であり監査結果ではなく、PromptQuorumはアプリの通信を調べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**開発者やチーム**：自社のインフラ上でAPIやMCPサーバー経由でスライドを生成したい方。',
          '**プライバシーを重視する発表者**：すでにOllamaやLM Studioを使っていて、ローカルモデルにスライドの下書きを任せたい方。',
          '**PowerPointで作業する方**：Web専用の資料ではなく、編集できる.pptxファイルが必要な方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**スライドの品質と速度。** スライドを生成していないため、レイアウトの質、生成文章の正確さ、ローカルモデルでの速度は評価していません。',
          '**完全オフラインでの利用。** プロジェクトはOllamaでのローカル動作を説明していますが、画像生成やコミュニティギャラリーを含むすべての機能が接続なしで動くかは確認していません。',
          '**必要なハードウェア。** 情報源にRAMやGPUの要件はなく、選ぶモデルによって変わります。',
          '**安定性。** すべてのリリースにベータの表示があり、バージョン間の更新がどれほど安定しているかは未検証です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux、Web',
            '価格／ライセンス': '無料／MIT',
            '主な違い': '文書チャットとRAGのワークスペースで、スライド生成ツールではありません',
          },
          {
            'アプリ': '[PrivateGPT](/ja/power-local-llm/privategpt-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／Apache 2.0',
            '主な違い': '自分の文書への非公開の質問応答で、出力は回答でありスライドではありません',
          },
          {
            'アプリ': '[h2oGPT](/ja/power-local-llm/h2ogpt-review-2026)',
            '対応プラットフォーム': 'macOS、Windows、Linux、Web',
            '価格／ライセンス': '無料／Apache 2.0',
            '主な違い': '文書チャット用のインターフェースで、スライド出力を想定していません',
          },
        ],
        note: 'PromptQuorumのディレクトリには他のスライド生成ツールがまだないため、ここでは最も近い文書ベースのツールを挙げています。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '書き出したファイルはPowerPointやGoogleスライドで開けますか？',
            a: 'プロジェクトのFAQによれば、書き出したPPTXファイルはMicrosoft PowerPoint、Googleスライド、互換ソフトで完全に編集できます。PromptQuorumは書き出しファイルを開いていません。',
          },
          { q: 'デスクトップアプリはどう更新しますか？', a: 'ダウンロードページによれば、新しいバージョンをインストールすると古いものが置き換えられ、設定とデータは引き継がれます。' },
          {
            q: 'ChatGPTのサブスクリプションで使えますか？',
            a: 'READMEによれば、「Sign in with ChatGPT」を選ぶと、無料または有料のChatGPTアカウントで別のAPIキーなしにスライドを生成できます。この方法はOpenAIのサービスを使い、ローカルモデルではありません。',
          },
          { q: '複数人で1つのインストールを共有できますか？', a: 'セルフホスト版は、ユーザーごとに非公開のワークスペースを持つマルチユーザーと管理パネルに対応しており、READMEによれば共有のプロバイダーキーは管理者が管理します。' },
          {
            q: 'Enterprise版では何が追加されますか？',
            a: 'READMEには、Kubernetes用のバージョン管理されたHelmチャート、監査ログ、中央の管理コンソール、OAuth・OIDC・SCIMによるSSOとユーザープロビジョニングが挙げられています。PromptQuorumは確認していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Presentonは、ローカルモデルを含む好きなAIモデルで、編集可能なPowerPointとPDFのスライドを作れる、開発が活発なオープンソースの選択肢です。一方で、すべてのリリースがベータ表示であること、プライバシーが設定した提供元に完全に左右されること、スライドの品質や速度は確認できなかったことが制約です。モデルとデータを自分で管理したいセルフホスト派やチームに向いており、確実な出力が必要な方は、頼る前にテスト用のスライドを生成してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Presentonの公式サイト](https://presenton.ai) — 製品概要、ダウンロードページのFAQ、料金の説明。2026年10月24日に確認。',
          '[GitHubのPresenton](https://github.com/presenton/presenton) — README、Apache 2.0ライセンス、コミット履歴。2026年10月24日に確認。',
          '[Presentonのリリース](https://github.com/presenton/presenton/releases) — 0.9.11-betaおよび以前のリリースのファイル名と日付。2026年10月24日に確認。',
          '[Presentonのプライバシーポリシー](https://presenton.ai/privacy-policy) — ホスト型サービスのデータの扱い。2026年4月17日更新。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — デスクトップとDockerで使える文書チャットのワークスペース。',
          '[PrivateGPTレビュー](/ja/power-local-llm/privategpt-review) — 自分の文書に対する非公開の質問応答。',
          '[h2oGPTレビュー](/ja/power-local-llm/h2ogpt-review-2026) — 文書チャット用のインターフェース。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-pt.webp',
    title: 'Análise do Presenton: gerador de apresentações com IA de código aberto',
    seoTitle: 'Análise do Presenton: slides com IA de código aberto',
    intro: 'O Presenton é um gerador de apresentações com IA de código aberto, da Presenton Inc., que cria apresentações PPTX e PDF editáveis a partir de um prompt ou de um documento, com um modelo local ou em nuvem que você mesmo configura. As versões para desktop e Docker são gratuitas sob a licença Apache 2.0, enquanto uma versão hospedada na nuvem vende créditos de slides. Esta análise se baseia no site, no README, na política de privacidade e nas versões do GitHub, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app.',
    metaDescription: 'Análise do Presenton: gerador de apresentações com IA de código aberto para desktop e Docker. PPTX e PDF editáveis, modelos locais ou em nuvem.',
    twitterDescription: 'Análise do Presenton: gerador de slides com IA de código aberto para desktop e Docker. PPTX e PDF editáveis, o modelo que você escolher e o que as fontes confirmam ou não.',
    audience: 'Apresentadores, desenvolvedores e equipes que avaliam um gerador de slides com IA hospedado por conta própria e precisam saber o que as fontes confirmam, o que o projeto apenas afirma e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Presenton',
    targetKeywords: [
      'análise presenton',
      'gerador de apresentações com ia código aberto',
      'presenton ollama',
      'gerador de slides ia auto-hospedado',
      'apresentação ia exportar pptx',
      'alternativa ao gamma código aberto',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**O Presenton (versão desktop 0.9.11-beta) é um gerador de apresentações com IA de código aberto que transforma um prompt, um documento ou o seu próprio design de PowerPoint em uma apresentação PPTX ou PDF editável.** Ele roda no seu computador ou servidor e funciona com o provedor de modelos que você escolher, então a privacidade depende dessa escolha. Todas as afirmações aqui vêm do site, do README e das versões do GitHub do projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Presenton consegue gerar slides sem enviar nada para a nuvem?',
        answer: 'Segundo o projeto, sim, se você o combinar com um provedor de modelos local, como Ollama ou LM Studio; com um provedor em nuvem, os prompts e o conteúdo de origem vão para esse provedor. O Presenton Cloud, a versão hospedada, é um serviço separado que guarda o seu trabalho nos servidores da empresa.',
        bullets: [
          'As apresentações partem de um prompt, de um documento enviado ou de um modelo criado a partir do seu próprio PPTX.',
          'Os slides abrem em um editor de arrastar e soltar antes da exportação.',
          'Os formatos de exportação são PPTX e PDF.',
          'Uma API integrada e um servidor MCP permitem que outras ferramentas peçam apresentações.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Presenton?', anchor: 'what-is-presenton' },
      { label: 'Onde obter', anchor: 'get-it' },
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
            text: 'O Presenton é um gerador de slides com IA sob licença Apache 2.0 que você pode executar como app de desktop ou contêiner Docker, com os modelos de texto e imagem que escolher.',
          },
          {
            type: 'plain-terms',
            text: 'Você descreve um tema ou envia um documento, escolhe um modelo de layout e um modelo configurado por você escreve os slides, que depois você edita e exporta para PowerPoint ou PDF.',
          },
        ],
        items: [
          'Manutenção: o commit mais recente do repositório é de 22 de outubro de 2026 e a última versão desktop, 0.9.11-beta, de 21 de setembro de 2026, então não vale o aviso de projeto abandonado; o projeto rotula suas versões como beta.',
          'Modelos: locais com Ollama ou LM Studio, ou em nuvem com OpenAI, Google Gemini, Anthropic e outros provedores, escolhidos nas configurações.',
          'Custo: as versões desktop e Docker são gratuitas; o Presenton Cloud, a versão hospedada, vende planos mensais de créditos de slides.',
          'Instalação: um app de desktop para macOS e Linux, ou um único comando Docker em qualquer sistema.',
          'Desenvolvedor: uma empresa, a Presenton Inc., com o código-fonte público no GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, no README, na política de privacidade e nas versões do GitHub do projeto, consultados em 24 de outubro de 2026. A PromptQuorum não instalou o Presenton nem gerou uma apresentação, então a qualidade dos slides e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'O que é o Presenton?',
        content: [
          '**O Presenton é um criador de apresentações com IA de código aberto que gera conjuntos de slides a partir de prompts, documentos enviados ou de designs próprios baseados em PowerPoint.** O código está no [GitHub](https://github.com/presenton/presenton), onde o projeto se descreve como alternativa ao Gamma, Canva e Beautiful AI.',
          'Segundo o README, ele existe em quatro formas: um app de desktop, um contêiner Docker auto-hospedado, o Presenton Cloud no navegador e uma edição Enterprise paga. Esta análise trata das versões gratuitas de desktop e Docker.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Presenton se instala como app de desktop ou inicia com um único comando Docker; há também uma versão hospedada que roda no navegador.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          { 'Opção': 'macOS', 'Onde obter': '[Página de download](https://presenton.ai/download), instalador .dmg' },
          { 'Opção': 'Linux', 'Onde obter': '[Página de download](https://presenton.ai/download), .AppImage ou .deb' },
          { 'Opção': 'Windows', 'Onde obter': 'O último .exe é o 0.8.7-beta; nenhum nas versões 0.9.x' },
          { 'Opção': 'Docker', 'Onde obter': 'Comando docker run no [README](https://github.com/presenton/presenton), interface em localhost:5001' },
          { 'Opção': 'Site', 'Onde obter': '[presenton.ai](https://presenton.ai), que também hospeda o Presenton Cloud no navegador' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: 'Versão analisada: 0.9.11-beta, a última versão desktop, publicada em 21 de setembro de 2026 com arquivos .dmg, .AppImage e .deb. A política de privacidade indicada cobre o serviço Presenton Cloud, não as versões desktop nem Docker.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o README e o site; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instalar ou iniciar',
            whyItMatters: 'Abra o app de desktop, ou execute docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest e abra [localhost:5001](http://localhost:5001) no navegador.',
          },
          {
            title: 'Escolher os provedores de modelos',
            whyItMatters: 'Nas configurações, escolha um provedor de texto como Ollama, LM Studio ou uma API em nuvem com a sua própria chave, e um provedor de imagens como Pexels, Pixabay, ComfyUI ou um modelo de imagens da OpenAI ou do Gemini.',
          },
          {
            title: 'Gerar e editar',
            whyItMatters: 'Digite um prompt ou envie um documento, escolha um modelo de layout e reorganize e edite os slides no editor antes de exportar.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do README ou do site do projeto; nenhum foi testado pela PromptQuorum.**',
        ],
        items: [
          '**Entradas e modelos.** As apresentações partem de um prompt ou de um documento enviado; há modelos integrados, e um modelo próprio pode ser gerado a partir de um arquivo de PowerPoint existente ou escrito em HTML e Tailwind CSS.',
          '**Edição.** Uma tela de arrastar e soltar com alterações de slides por chat, e depois exportação para PPTX ou PDF.',
          '**Provedores de modelos.** Texto via Ollama, LM Studio, OpenAI, Google Gemini e Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI ou qualquer endpoint compatível com a OpenAI, além de uma opção «Sign in with ChatGPT» que dispensa chave de API.',
          '**Automação.** Uma API de geração de apresentações e um servidor MCP integrado, para que scripts e agentes de IA peçam apresentações.',
          '**Equipes.** Espaços de trabalho multiusuário com painel de administração na versão auto-hospedada, e imagens Docker com suporte a GPU para modelos locais.',
        ],
        note: 'O Presenton Cloud conta um crédito por slide gerado, então uma apresentação de 10 slides usa 10 créditos; os preços dos planos aparecem na [página de preços](https://presenton.ai/pricing) e não são repetidos aqui.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Para onde vai o seu conteúdo depende dos provedores que você configurar.** Segundo o site, o app de desktop roda na sua máquina e, com modelos locais e serviços de mídia locais, o conteúdo da apresentação pode ficar no seu ambiente, enquanto um provedor de texto, imagens ou busca em nuvem recebe os prompts, conteúdos de origem ou solicitações correspondentes conforme os próprios termos.',
          'O README documenta mais dois caminhos de dados: uma galeria da comunidade com designs, ativada por padrão, que contata um serviço da Presenton (uma configuração a desativa, e o README exige isso em ambientes isolados da rede), e uma configuração de telemetria anônima que pode ser desativada. Ele não diz o que a telemetria contém.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A [política de privacidade](https://presenton.ai/privacy-policy), atualizada pela última vez em 17 de abril de 2026, cobre o Presenton Cloud: lista dados de conta, conteúdo e uso, diz que informações pessoais não são vendidas e que o conteúdo específico das apresentações não é usado para treinar modelos sem consentimento explícito, embora dados de uso agregados e anonimizados possam ser usados. São declarações da empresa, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Desenvolvedores e equipes** que querem gerar apresentações por uma API ou servidor MCP na própria infraestrutura.',
          '**Apresentadores preocupados com privacidade** que já usam Ollama ou LM Studio e querem que um modelo local redija os slides.',
          '**Quem trabalha no PowerPoint** e precisa de um arquivo .pptx editável em vez de uma apresentação só para a web.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade dos slides.** Nenhuma apresentação foi gerada, então a qualidade do layout, a exatidão do texto gerado e a velocidade com modelos locais não são avaliadas.',
          '**Uso totalmente offline.** O projeto descreve a operação local com Ollama, mas a PromptQuorum não confirmou que todos os recursos, incluindo geração de imagens e a galeria da comunidade, funcionem sem conexão.',
          '**Requisitos de hardware.** As fontes não dão requisito de RAM nem de GPU; ele depende do modelo escolhido.',
          '**Estabilidade.** Todas as versões trazem o rótulo beta, e não foi testado quão estáveis são as atualizações entre versões.',
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
          'Diferença principal',
        ],
        rows: [
          {
            App: '[AnythingLLM](/pt/power-local-llm/anythingllm-review)',
            Plataformas: 'macOS, Windows, Linux, web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Espaço de chat com documentos e RAG, não um gerador de slides',
          },
          {
            App: '[PrivateGPT](/pt/power-local-llm/privategpt-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Perguntas privadas sobre seus documentos; gera respostas, não apresentações',
          },
          {
            App: '[h2oGPT](/pt/power-local-llm/h2ogpt-review-2026)',
            Plataformas: 'macOS, Windows, Linux, web',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Interface de chat com documentos; não foi feita para gerar slides',
          },
        ],
        note: 'Ainda não há outro gerador de slides no diretório da PromptQuorum, então estas são as ferramentas baseadas em documentos mais próximas; confirme o preço, a licença e as plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso abrir o arquivo exportado no PowerPoint ou no Google Slides?',
            a: 'Segundo o FAQ do projeto, os arquivos PPTX exportados são totalmente editáveis no Microsoft PowerPoint, no Google Slides e em softwares compatíveis. A PromptQuorum não abriu nenhuma exportação.',
          },
          {
            q: 'Como atualizo o app de desktop?',
            a: 'Segundo a página de download, instalar uma versão mais nova substitui a anterior e mantém suas configurações e dados.',
          },
          {
            q: 'Funciona com a minha assinatura do ChatGPT?',
            a: 'O README diz que uma opção «Sign in with ChatGPT» permite que uma conta ChatGPT gratuita ou paga gere apresentações sem uma chave de API separada. Esse caminho usa o serviço da OpenAI, não um modelo local.',
          },
          {
            q: 'Várias pessoas podem compartilhar uma instalação?',
            a: 'Instalações auto-hospedadas aceitam espaços de trabalho multiusuário, cada um privado, e um painel de administração; segundo o README, os administradores gerenciam as chaves compartilhadas dos provedores.',
          },
          {
            q: 'O que a edição Enterprise acrescenta?',
            a: 'O README lista charts do Helm versionados para Kubernetes, registros de auditoria, um console de administração central e SSO com provisionamento de usuários via OAuth, OIDC e SCIM. A PromptQuorum não a analisou.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Presenton é uma forma de código aberto, em desenvolvimento ativo, de gerar apresentações PowerPoint e PDF editáveis com os modelos de IA que você escolher, inclusive locais. Em contrapartida, todas as versões trazem o rótulo beta, a privacidade depende por inteiro dos provedores configurados e nada sobre a qualidade ou a velocidade dos slides pôde ser verificado. Serve para quem hospeda por conta própria e para equipes que querem controle sobre modelos e dados; quem precisa de resultados confiáveis deve gerar uma apresentação de teste antes de depender dele.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Presenton](https://presenton.ai) — visão geral do produto, FAQ da página de download e explicação de preços, consultados em 24 de outubro de 2026.',
          '[Presenton no GitHub](https://github.com/presenton/presenton) — README, licença Apache 2.0 e histórico de commits, consultados em 24 de outubro de 2026.',
          '[Versões do Presenton](https://github.com/presenton/presenton/releases) — nomes de arquivo e datas da versão 0.9.11-beta e das anteriores, consultados em 24 de outubro de 2026.',
          '[Política de privacidade do Presenton](https://presenton.ai/privacy-policy) — tratamento de dados do serviço hospedado, atualizada pela última vez em 17 de abril de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um espaço de chat com documentos para desktop e Docker.',
          '[Análise do PrivateGPT](/pt/power-local-llm/privategpt-review) — perguntas privadas sobre seus próprios documentos.',
          '[Análise do h2oGPT](/pt/power-local-llm/h2ogpt-review-2026) — uma interface de chat com documentos.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-ar.webp',
    title: 'مراجعة Presenton: مولّد عروض تقديمية مفتوح المصدر بالذكاء الاصطناعي',
    seoTitle: 'مراجعة Presenton: مولّد عروض تقديمية مفتوح المصدر',
    intro: 'Presenton مولّد عروض تقديمية مفتوح المصدر بالذكاء الاصطناعي من شركة Presenton Inc.، ينشئ شرائح PPTX وPDF قابلة للتعديل انطلاقًا من موجّه نصي أو مستند، باستخدام نموذج محلي أو سحابي تضبطه بنفسك. نسختا سطح المكتب وDocker مجانيتان بترخيص Apache 2.0، بينما تبيع النسخة السحابية المستضافة رصيدًا للشرائح. تعتمد هذه المراجعة على الموقع الرسمي وملف README وسياسة الخصوصية وإصدارات GitHub التي فُحصت في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق.',
    metaDescription: 'مراجعة Presenton: مولّد عروض تقديمية مفتوح المصدر لسطح المكتب وDocker، ينشئ ملفات PPTX وPDF قابلة للتعديل بنماذج محلية أو سحابية؛ لم يُختبر.',
    twitterDescription: 'مراجعة Presenton: مولّد شرائح مفتوح المصدر لسطح المكتب وDocker. ملفات PPTX وPDF قابلة للتعديل، ونموذج من اختيارك، وما تؤكده المصادر وما لا تؤكده.',
    audience: 'المقدّمون والمطوّرون والفرق الذين يدرسون مولّد شرائح ذاتي الاستضافة ويحتاجون إلى معرفة ما تؤكده المصادر وما يكتفي المشروع بادعائه وكم يكلّف.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Presenton',
    targetKeywords: [
      'مراجعة presenton',
      'مولد عروض تقديمية مفتوح المصدر بالذكاء الاصطناعي',
      'presenton ollama',
      'مولد شرائح ذاتي الاستضافة',
      'عرض تقديمي بالذكاء الاصطناعي تصدير pptx',
      'بديل gamma مفتوح المصدر',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton (إصدار سطح المكتب 0.9.11-beta) مولّد عروض تقديمية مفتوح المصدر بالذكاء الاصطناعي يحوّل موجّهًا نصيًا أو مستندًا أو تصميم PowerPoint خاصًا بك إلى عرض PPTX أو PDF قابل للتعديل.** يعمل على حاسوبك أو خادمك مع مزوّد النماذج الذي تختاره، لذا تتوقف درجة الخصوصية على هذا الاختيار. كل ما يرد هنا مصدره الموقع الرسمي للمشروع وملف README وإصدارات GitHub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع Presenton إنشاء الشرائح دون إرسال أي شيء إلى السحابة؟',
        answer: 'بحسب المشروع، نعم إذا اقترن بمزوّد نماذج محلي مثل Ollama أو LM Studio؛ أما مع مزوّد سحابي فتُرسل الموجّهات والمحتوى المصدر إلى ذلك المزوّد. أما Presenton Cloud المستضاف فخدمة منفصلة تحفظ عملك على خوادم الشركة.',
        bullets: [
          'تبدأ العروض من موجّه نصي أو مستند مرفوع أو قالب مبني على ملف PPTX الخاص بك.',
          'تُفتح الشرائح في محرّر يدعم السحب والإفلات قبل التصدير.',
          'صيغتا التصدير هما PPTX وPDF.',
          'تتيح واجهة API مدمجة وخادم MCP لأدوات أخرى طلب إنشاء عروض.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Presenton؟', anchor: 'what-is-presenton' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
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
            text: 'Presenton مولّد شرائح بالذكاء الاصطناعي بترخيص Apache 2.0، يمكنك تشغيله كتطبيق لسطح المكتب أو كحاوية Docker مع نماذج النص والصور التي تختارها.',
          },
          { type: 'plain-terms', text: 'تصف موضوعًا أو ترفع مستندًا وتختار قالبًا، فيكتب نموذج ضبطتَه أنت الشرائح، ثم تعدّلها وتصدّرها إلى PowerPoint أو PDF.' },
        ],
        items: [
          'الصيانة: أحدث commit في المستودع بتاريخ 22 أكتوبر 2026 وأحدث إصدار لسطح المكتب 0.9.11-beta بتاريخ 21 سبتمبر 2026، فلا ينطبق تحذير المشروع المتوقف؛ لكن المشروع يصف إصداراته بأنها تجريبية (beta).',
          'النماذج: محلية عبر Ollama أو LM Studio، أو سحابية عبر OpenAI وGoogle Gemini وAnthropic ومزوّدين آخرين، وتُختار من الإعدادات.',
          'التكلفة: نسختا سطح المكتب وDocker مجانيتان؛ أما Presenton Cloud المستضاف فيبيع باقات شهرية من رصيد الشرائح.',
          'التثبيت: تطبيق لسطح المكتب على macOS وLinux، أو أمر Docker واحد على أي نظام.',
          'الجهة المطوّرة: شركة Presenton Inc.، وشيفرتها المصدرية متاحة للعامة على GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تعتمد هذه المراجعة على الموقع الرسمي للمشروع وملف README وسياسة الخصوصية وإصدارات GitHub التي فُحصت في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Presenton ولم تنشئ عرضًا تقديميًا، لذلك لا يُقيَّم جودة الشرائح ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'ما هو Presenton؟',
        content: [
          '**Presenton أداة مفتوحة المصدر لإنشاء العروض التقديمية بالذكاء الاصطناعي، تولّد مجموعات شرائح من موجّهات نصية أو مستندات مرفوعة أو تصاميم خاصة بك مبنية على PowerPoint.** الشيفرة على [GitHub](https://github.com/presenton/presenton)، حيث يصف المشروع نفسه بأنه بديل لـ Gamma وCanva وBeautiful AI.',
          'بحسب README، يتوفر بأربع صيغ: تطبيق لسطح المكتب، وحاوية Docker ذاتية الاستضافة، وPresenton Cloud في المتصفح، ونسخة Enterprise مدفوعة. تتناول هذه المراجعة نسختي سطح المكتب وDocker المجانيتين.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Presenton كتطبيق لسطح المكتب أو يبدأ بأمر Docker واحد؛ وتوجد أيضًا نسخة مستضافة تعمل في المتصفح.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          { 'الخيار': 'macOS', 'مصدر الحصول عليه': '[صفحة التنزيل](https://presenton.ai/download)، مثبّت .dmg' },
          { 'الخيار': 'Linux', 'مصدر الحصول عليه': '[صفحة التنزيل](https://presenton.ai/download)، ‏.AppImage أو .deb' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'آخر ملف .exe هو 0.8.7-beta، ولا يوجد في إصدارات 0.9.x' },
          { 'الخيار': 'Docker', 'مصدر الحصول عليه': 'أمر docker run في [README](https://github.com/presenton/presenton)، والواجهة على localhost:5001' },
          { 'الخيار': 'الموقع الرسمي', 'مصدر الحصول عليه': '[presenton.ai](https://presenton.ai)، وفيه أيضًا Presenton Cloud في المتصفح' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/presenton/presenton](https://github.com/presenton/presenton)، ‏Apache 2.0' },
        ],
        note: 'الإصدار الذي رُوجع: 0.9.11-beta، أحدث إصدار لسطح المكتب، نُشر في 21 سبتمبر 2026 بملفات .dmg و.AppImage و.deb. وسياسة الخصوصية المرفقة تغطي خدمة Presenton Cloud، لا نسختي سطح المكتب أو Docker.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات README والموقع الرسمي؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'التثبيت أو التشغيل',
            whyItMatters: 'افتح تطبيق سطح المكتب، أو شغّل docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest ثم افتح [localhost:5001](http://localhost:5001) في المتصفح.',
          },
          {
            title: 'اختيار مزوّدي النماذج',
            whyItMatters: 'في الإعدادات اختر مزوّد نصوص مثل Ollama أو LM Studio أو واجهة API سحابية بمفتاحك الخاص، ومزوّد صور مثل Pexels أو Pixabay أو ComfyUI أو نموذج صور من OpenAI أو Gemini.',
          },
          { title: 'الإنشاء والتعديل', whyItMatters: 'اكتب موجّهًا أو ارفع مستندًا واختر قالبًا، ثم أعد ترتيب الشرائح وعدّلها في المحرّر قبل التصدير.' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره README أو الموقع الرسمي للمشروع، ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**المدخلات والقوالب.** تبدأ العروض من موجّه نصي أو مستند مرفوع؛ وتوجد قوالب مدمجة، ويمكن إنشاء قالب مخصص من ملف PowerPoint موجود أو كتابته بـ HTML وTailwind CSS.',
          '**التحرير.** لوحة تدعم السحب والإفلات وتعديل الشرائح بالمحادثة، ثم التصدير إلى PPTX أو PDF.',
          '**مزوّدو النماذج.** نصوص عبر Ollama وLM Studio وOpenAI وGoogle Gemini وVertex AI وAzure OpenAI وAmazon Bedrock وAnthropic وFireworks وTogether AI أو أي نقطة نهاية متوافقة مع OpenAI، إضافة إلى خيار «Sign in with ChatGPT» الذي لا يحتاج مفتاح API.',
          '**الأتمتة.** واجهة API لإنشاء العروض وخادم MCP مدمج، ليطلب منهما السكربتات ووكلاء الذكاء الاصطناعي إنشاء عروض.',
          '**الفرق.** مساحات عمل متعددة المستخدمين مع لوحة إدارة في النسخة ذاتية الاستضافة، وصور Docker تدعم GPU للنماذج المحلية.',
        ],
        note: 'يحتسب Presenton Cloud المستضاف رصيدًا واحدًا لكل شريحة مُنشأة، فعرض من 10 شرائح يستهلك 10 أرصدة؛ وأسعار الباقات معروضة في [صفحة الأسعار](https://presenton.ai/pricing) ولا نكررها هنا.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**وجهة محتواك تتوقف على المزوّدين الذين تضبطهم.** يقول الموقع الرسمي إن تطبيق سطح المكتب يعمل على جهازك، وإنه مع النماذج المحلية وخدمات الوسائط المحلية يمكن أن يبقى محتوى العرض داخل بيئتك، بينما يتلقى مزوّد النصوص أو الصور أو البحث السحابي الموجّهات أو المحتوى المصدر أو الطلبات ذات الصلة وفق شروطه الخاصة.',
          'يوثّق README مسارين آخرين للبيانات: معرض مجتمعي للتصاميم مفعّل افتراضيًا ويتصل بخدمة تابعة لـ Presenton (يمكن إيقافه بإعداد، ويشترط README ذلك في البيئات المعزولة عن الشبكة)، وإعداد للقياس عن بُعد المجهول يمكن تعطيله. ولا يذكر README ما يتضمنه هذا القياس.',
        ],
        callouts: [
          {
            type: 'note',
            text: '[سياسة الخصوصية](https://presenton.ai/privacy-policy)، التي حُدّثت آخر مرة في 17 أبريل 2026، تغطي Presenton Cloud المستضاف: تسرد بيانات الحساب والمحتوى والاستخدام، وتقول إن المعلومات الشخصية لا تُباع، وإن محتوى العروض المحدد لا يُستخدم لتدريب النماذج دون موافقة صريحة، مع إمكان استخدام بيانات استخدام مجمّعة ومجهولة الهوية. وهذه أقوال الشركة وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المطوّرون والفرق** الذين يريدون إنشاء العروض عبر API أو خادم MCP على بنيتهم التحتية.',
          '**المقدّمون المهتمون بالخصوصية** الذين يشغّلون Ollama أو LM Studio بالفعل ويريدون أن يصيغ نموذج محلي مسودات الشرائح.',
          '**من يعملون في PowerPoint** ويحتاجون ملف .pptx قابلًا للتعديل بدل عرض للويب فقط.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الشرائح وسرعتها.** لم يُنشأ أي عرض، لذا لا تُقيَّم جودة التخطيط ولا دقة النص المُنشأ ولا السرعة مع النماذج المحلية.',
          '**الاستخدام دون اتصال بالكامل.** يصف المشروع التشغيل المحلي مع Ollama، لكن PromptQuorum لم تتأكد من أن كل الميزات، ومنها توليد الصور والمعرض المجتمعي، تعمل دون اتصال.',
          '**متطلبات العتاد.** لا تذكر المصادر متطلبًا للذاكرة أو GPU؛ فهو يتوقف على النموذج الذي تختاره.',
          '**الاستقرار.** يحمل كل إصدار وسم beta، ولم يُختبر مدى استقرار التحديثات بين الإصدارات.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز',
        ],
        rows: [
          {
            'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)',
            'المنصات': 'macOS وWindows وLinux وويب',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'مساحة للدردشة مع المستندات وRAG، وليست مولّد شرائح',
          },
          {
            'التطبيق': '[PrivateGPT](/ar/power-local-llm/privategpt-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / Apache 2.0',
            'الفرق الأبرز': 'أسئلة خاصة عن مستنداتك؛ ينتج إجابات لا عروضًا تقديمية',
          },
          {
            'التطبيق': '[h2oGPT](/ar/power-local-llm/h2ogpt-review-2026)',
            'المنصات': 'macOS وWindows وLinux وويب',
            'السعر / الرخصة': 'مجاني / Apache 2.0',
            'الفرق الأبرز': 'واجهة للدردشة مع المستندات؛ لم تُصمَّم لإنتاج الشرائح',
          },
        ],
        note: 'لا يوجد مولّد شرائح آخر في دليل PromptQuorum حتى الآن، لذا فهذه أقرب الأدوات القائمة على المستندات؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أستطيع فتح الملف المصدَّر في PowerPoint أو Google Slides؟',
            a: 'بحسب الأسئلة الشائعة للمشروع، ملفات PPTX المصدَّرة قابلة للتعديل بالكامل في Microsoft PowerPoint وGoogle Slides والبرامج المتوافقة. ولم تفتح PromptQuorum أي ملف مصدَّر.',
          },
          { q: 'كيف أحدّث تطبيق سطح المكتب؟', a: 'بحسب صفحة التنزيل، يحل تثبيت إصدار أحدث محل القديم مع الاحتفاظ بإعداداتك وبياناتك.' },
          {
            q: 'هل يعمل مع اشتراكي في ChatGPT؟',
            a: 'يقول README إن خيار «Sign in with ChatGPT» يتيح لحساب ChatGPT مجاني أو مدفوع إنشاء العروض دون مفتاح API منفصل. وهذا المسار يستخدم خدمة OpenAI لا نموذجًا محليًا.',
          },
          {
            q: 'هل يمكن لعدة أشخاص مشاركة تثبيت واحد؟',
            a: 'تدعم التثبيتات ذاتية الاستضافة مساحات عمل متعددة المستخدمين، لكلٍّ منها خصوصيته، ولوحة إدارة؛ وبحسب README يدير المسؤولون مفاتيح المزوّدين المشتركة.',
          },
          {
            q: 'ماذا تضيف نسخة Enterprise؟',
            a: 'يسرد README مخططات Helm مرقّمة الإصدارات لـ Kubernetes، وسجلات تدقيق، ووحدة إدارة مركزية، وSSO مع إنشاء المستخدمين عبر OAuth وOIDC وSCIM. ولم تراجعها PromptQuorum.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Presenton طريقة مفتوحة المصدر ونشطة التطوير لإنشاء عروض PowerPoint وPDF قابلة للتعديل بنماذج الذكاء الاصطناعي التي تختارها، ومنها المحلية. في المقابل يحمل كل إصدار وسم beta، وتتوقف الخصوصية بالكامل على المزوّدين الذين تضبطهم، ولم يمكن التحقق هنا من جودة الشرائح أو سرعتها. وهو يناسب من يستضيفون بأنفسهم والفرق التي تريد التحكم في النماذج والبيانات؛ ومن يحتاج نتائج موثوقة فعليه أن ينشئ عرضًا تجريبيًا قبل الاعتماد عليه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Presenton](https://presenton.ai) — نظرة عامة على المنتج والأسئلة الشائعة في صفحة التنزيل وشرح الأسعار، فُحص في 24 أكتوبر 2026.',
          '[Presenton على GitHub](https://github.com/presenton/presenton) — ملف README ورخصة Apache 2.0 وسجل الـ commits، فُحصت في 24 أكتوبر 2026.',
          '[إصدارات Presenton](https://github.com/presenton/presenton/releases) — أسماء الملفات وتواريخ الإصدار 0.9.11-beta وما قبله، فُحصت في 24 أكتوبر 2026.',
          '[سياسة خصوصية Presenton](https://presenton.ai/privacy-policy) — معالجة البيانات في الخدمة المستضافة، حُدّثت آخر مرة في 17 أبريل 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — مساحة للدردشة مع المستندات لسطح المكتب وDocker.',
          '[مراجعة PrivateGPT](/ar/power-local-llm/privategpt-review) — أسئلة خاصة عن مستنداتك الخاصة.',
          '[مراجعة h2oGPT](/ar/power-local-llm/h2ogpt-review-2026) — واجهة للدردشة مع المستندات.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-zh.webp',
    title: 'Presenton 评测：开源 AI 演示文稿生成器',
    seoTitle: 'Presenton 评测：开源 AI 演示文稿生成器，可导出 PPTX',
    intro: 'Presenton 是 Presenton Inc. 推出的开源 AI 演示文稿生成器，可根据提示词或文档生成可编辑的 PPTX 和 PDF 幻灯片，使用你自行配置的本地或云端模型。桌面版和 Docker 版以 Apache 2.0 许可证免费使用，而托管的云端版本按幻灯片额度收费。本评测基于官网、README、隐私政策和 GitHub 发布页，核查日期为 2026年10月24日；PromptQuorum 未对该应用进行测试。',
    metaDescription: 'Presenton 评测：适用于桌面和 Docker 的开源 AI 演示文稿生成器，可生成可编辑的 PPTX 和 PDF，支持本地或云端模型，采用 Apache 2.0 许可证；未经实测。',
    twitterDescription: 'Presenton 评测：面向桌面和 Docker 的开源 AI 幻灯片生成器。可编辑的 PPTX 与 PDF，模型自选，以及来源已证实和未证实的内容。',
    audience: '正在考虑自托管 AI 幻灯片生成器的演讲者、开发者和团队，他们需要了解来源证实了什么、项目只是声称了什么，以及费用如何。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Presenton 评测',
    targetKeywords: [
      'presenton 评测',
      '开源 ai 演示文稿生成器',
      'presenton ollama',
      '自托管 ai 幻灯片',
      'ai 演示文稿 导出 pptx',
      'gamma 开源替代',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton（桌面版 0.9.11-beta）是一款开源 AI 演示文稿生成器，可将提示词、文档或你自己的 PowerPoint 设计变成可编辑的 PPTX 或 PDF 演示文稿。** 它运行在你的电脑或服务器上，并搭配你选择的模型提供方，因此隐私程度取决于这一选择。本文的所有陈述均来自项目的官网、README 和 GitHub 发布页。',
    quickAnswerTop: {
      zh: {
        question: 'Presenton 能在不向云端发送任何内容的情况下生成幻灯片吗？',
        answer: '据项目介绍，如果搭配 Ollama 或 LM Studio 等本地模型提供方，可以；使用云端提供方时，提示词和源内容会发送给该提供方。托管的 Presenton Cloud 是另一项服务，会把你的作品存放在公司的服务器上。',
        bullets: [
          '可从提示词、上传的文档或用你自己的 PPTX 制作的模板开始。',
          '导出前，幻灯片会在支持拖放操作的编辑器中打开。',
          '导出格式为 PPTX 和 PDF。',
          '内置的 API 和 MCP 服务器允许其他工具请求生成演示文稿。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Presenton 是什么？', anchor: 'what-is-presenton' },
      { label: '获取方式', anchor: 'get-it' },
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
          { type: 'one-sentence', text: 'Presenton 是采用 Apache 2.0 许可证的 AI 幻灯片生成器，可作为桌面应用或 Docker 容器运行，并使用你选择的文本和图像模型。' },
          { type: 'plain-terms', text: '你描述一个主题或上传文档，选择模板，由你配置的模型撰写幻灯片，随后你可以编辑并导出为 PowerPoint 或 PDF。' },
        ],
        items: [
          '维护情况：仓库最新提交为 2026年10月22日，最新桌面版 0.9.11-beta 发布于 2026年9月21日，因此不适用停更警告；不过项目将其各版本标为测试版。',
          '模型：可通过 Ollama 或 LM Studio 在本地使用，也可通过 OpenAI、Google Gemini、Anthropic 等云端提供方使用，在设置中选择。',
          '费用：桌面版和 Docker 版免费；托管的 Presenton Cloud 按月出售幻灯片额度套餐。',
          '安装：macOS 和 Linux 上的桌面应用，或任何系统上的一条 Docker 命令。',
          '开发方：公司 Presenton Inc.，源代码公开在 GitHub 上。',
        ],
        callouts: [
          { type: 'note', text: '本评测基于项目的官网、README、隐私政策和 GitHub 发布页，核查日期为 2026年10月24日。PromptQuorum 没有安装 Presenton，也没有生成过演示文稿，因此不评估幻灯片质量和速度。' },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'Presenton 是什么？',
        content: [
          '**Presenton 是一款开源 AI 演示文稿制作工具，可根据提示词、上传的文档或基于 PowerPoint 的自有设计生成整套幻灯片。** 代码托管在 [GitHub](https://github.com/presenton/presenton)，项目在那里自称是 Gamma、Canva 和 Beautiful AI 的替代品。',
          '据 README，它有四种形态：桌面应用、自托管的 Docker 容器、浏览器中的 Presenton Cloud，以及付费的企业版。本评测针对免费的桌面版和 Docker 版。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Presenton 可作为桌面应用安装，也可用一条 Docker 命令启动；另有可在浏览器中使用的托管版本。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          { '选项': 'macOS', '获取方式': '[下载页面](https://presenton.ai/download)，.dmg 安装包' },
          { '选项': 'Linux', '获取方式': '[下载页面](https://presenton.ai/download)，.AppImage 或 .deb' },
          { '选项': 'Windows', '获取方式': '最新的 .exe 是 0.8.7-beta，0.9.x 版本中没有' },
          { '选项': 'Docker', '获取方式': '[README](https://github.com/presenton/presenton) 中的 docker run 命令，界面在 localhost:5001' },
          { '选项': '官网', '获取方式': '[presenton.ai](https://presenton.ai)，浏览器版 Presenton Cloud 也在此提供' },
          { '选项': '隐私政策', '获取方式': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { '选项': '源代码', '获取方式': '[github.com/presenton/presenton](https://github.com/presenton/presenton)，Apache 2.0' },
        ],
        note: '评测版本：0.9.11-beta，即最新的桌面版，发布于 2026年9月21日，提供 .dmg、.AppImage 和 .deb 文件。所列隐私政策适用于 Presenton Cloud 服务，不适用于桌面版或 Docker 版。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据 README 和官网整理；PromptQuorum 没有实际运行。**',
        ],
        numberedItems: [
          {
            title: '安装或启动',
            whyItMatters: '打开桌面应用，或运行 docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest，然后在浏览器中打开 [localhost:5001](http://localhost:5001)。',
          },
          { title: '选择模型提供方', whyItMatters: '在设置中选择文本提供方，如 Ollama、LM Studio 或使用你自己密钥的云端 API，再选择图像提供方，如 Pexels、Pixabay、ComfyUI 或 OpenAI、Gemini 的图像模型。' },
          { title: '生成并编辑', whyItMatters: '输入提示词或上传文档，选择模板，然后在编辑器中调整顺序并修改幻灯片，最后导出。' },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自 README 或项目官网，均未经 PromptQuorum 测试。**',
        ],
        items: [
          '**输入与模板。** 可从提示词或上传的文档开始；内置多种模板，自定义模板可由现有 PowerPoint 文件生成，也可用 HTML 和 Tailwind CSS 编写。',
          '**编辑。** 支持拖放的画布和通过对话修改幻灯片，然后导出为 PPTX 或 PDF。',
          '**模型提供方。** 文本可使用 Ollama、LM Studio、OpenAI、Google Gemini 和 Vertex AI、Azure OpenAI、Amazon Bedrock、Anthropic、Fireworks、Together AI 或任何兼容 OpenAI 的端点，另有无需 API 密钥的“Sign in with ChatGPT”选项。',
          '**自动化。** 提供演示文稿生成 API 和内置 MCP 服务器，脚本和 AI 智能体可据此请求生成演示文稿。',
          '**团队。** 自托管版本带有管理面板的多用户工作区，并提供支持 GPU 的 Docker 镜像以运行本地模型。',
        ],
        note: '托管的 Presenton Cloud 每生成一页幻灯片计 1 个额度，因此 10 页的演示文稿消耗 10 个额度；套餐价格见[定价页面](https://presenton.ai/pricing)，此处不再重复。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**你的内容流向哪里，取决于你配置的提供方。** 官网称桌面应用运行在你的电脑上，使用本地模型和本地媒体服务时，演示文稿内容可以留在你的环境中；而云端的文本、图像或搜索提供方会按其自身条款接收相应的提示词、源内容或请求。',
          'README 还记录了另外两条数据通路：一是默认开启的设计社区图库，会连接 Presenton 的服务（可通过设置关闭，README 要求在隔离网络环境中必须关闭）；二是可以禁用的匿名遥测设置，README 没有说明遥测包含哪些内容。',
        ],
        callouts: [
          {
            type: 'note',
            text: '[隐私政策](https://presenton.ai/privacy-policy)最后更新于 2026年4月17日，适用于托管的 Presenton Cloud：其中列出账户、内容和使用数据，称不会出售个人信息，未经明确同意不会用具体的演示文稿内容训练模型，但可能使用汇总、匿名化的使用数据。这些是公司的声明，而非审计结果，PromptQuorum 也没有检查该应用的网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**开发者和团队**：希望在自己的基础设施上通过 API 或 MCP 服务器生成演示文稿。',
          '**注重隐私的演讲者**：已在使用 Ollama 或 LM Studio，希望由本地模型起草幻灯片。',
          '**使用 PowerPoint 工作的人**：需要可编辑的 .pptx 文件，而不是仅限网页的演示文稿。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**幻灯片质量与速度。** 没有生成过演示文稿，因此不评估版式质量、生成文字的准确性以及本地模型下的速度。',
          '**完全离线使用。** 项目介绍了通过 Ollama 在本地运行，但 PromptQuorum 未确认包括图像生成和社区图库在内的所有功能都能在无网络时使用。',
          '**硬件需求。** 来源没有给出内存或 GPU 要求，取决于你选择的模型。',
          '**稳定性。** 每个版本都带有测试版标记，版本之间更新的稳定程度未经测试。',
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
          { '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)', '平台': 'macOS、Windows、Linux、网页', '价格 / 许可证': '免费 / MIT', '主要区别': '文档对话与 RAG 工作区，不是幻灯片生成器' },
          {
            '应用': '[PrivateGPT](/zh/power-local-llm/privategpt-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '对自有文档进行私密问答；输出的是回答，而非演示文稿',
          },
          { '应用': '[h2oGPT](/zh/power-local-llm/h2ogpt-review-2026)', '平台': 'macOS、Windows、Linux、网页', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '文档对话界面，并非围绕幻灯片输出设计' },
        ],
        note: 'PromptQuorum 目录中尚无其他幻灯片生成器，因此这里列出的是最接近的基于文档的工具；请在各应用自己的条目中确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '导出的文件能在 PowerPoint 或 Google 幻灯片中打开吗？', a: '据项目的常见问题，导出的 PPTX 文件可在 Microsoft PowerPoint、Google 幻灯片及兼容软件中完全编辑。PromptQuorum 没有打开过导出文件。' },
          { q: '如何更新桌面应用？', a: '据下载页面，安装较新的版本会替换旧版本，并保留你的设置和数据。' },
          { q: '能用我的 ChatGPT 订阅吗？', a: 'README 称，“Sign in with ChatGPT”选项允许免费或付费的 ChatGPT 账户在无需单独 API 密钥的情况下生成演示文稿。这条途径使用的是 OpenAI 的服务，而非本地模型。' },
          { q: '多人可以共用一个安装吗？', a: '自托管安装支持多用户工作区（每人私有）和管理面板；据 README，共享的提供方密钥由管理员管理。' },
          { q: '企业版多了什么？', a: 'README 列出了面向 Kubernetes 的带版本 Helm 图表、审计日志、集中管理控制台，以及通过 OAuth、OIDC 和 SCIM 实现的 SSO 与用户配置。PromptQuorum 未审阅企业版。' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Presenton 是一种开发活跃的开源方案，可用你选择的 AI 模型（包括本地模型）生成可编辑的 PowerPoint 和 PDF 演示文稿。但每个版本都标为测试版，隐私完全取决于你配置的提供方，幻灯片质量和速度也无从核实。它适合想自己掌控模型和数据的自托管用户与团队；需要可靠输出的人，在依赖它之前应先生成一份测试演示文稿。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Presenton 官网](https://presenton.ai) — 产品概览、下载页面常见问题和定价说明，核查于 2026年10月24日。',
          '[GitHub 上的 Presenton](https://github.com/presenton/presenton) — README、Apache 2.0 许可证和提交历史，核查于 2026年10月24日。',
          '[Presenton 发布页](https://github.com/presenton/presenton/releases) — 0.9.11-beta 及更早版本的文件名与日期，核查于 2026年10月24日。',
          '[Presenton 隐私政策](https://presenton.ai/privacy-policy) — 托管服务的数据处理方式，最后更新于 2026年4月17日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review) — 适用于桌面和 Docker 的文档对话工作区。',
          '[PrivateGPT 评测](/zh/power-local-llm/privategpt-review) — 对你自己的文档进行私密问答。',
          '[h2oGPT 评测](/zh/power-local-llm/h2ogpt-review-2026) — 一款文档对话界面。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/presenton-review-hero-ko.webp',
    title: 'Presenton 리뷰: 오픈소스 AI 프레젠테이션 생성기',
    seoTitle: 'Presenton 리뷰: 오픈소스 AI 프레젠테이션 생성기',
    intro: 'Presenton은 Presenton Inc.가 만든 오픈소스 AI 프레젠테이션 생성기로, 프롬프트나 문서에서 편집 가능한 PPTX·PDF 슬라이드를 만들며 직접 설정한 로컬 또는 클라우드 모델을 사용합니다. 데스크톱 버전과 Docker 버전은 Apache 2.0 라이선스로 무료이고, 호스팅되는 클라우드 버전은 슬라이드 크레딧을 판매합니다. 이 리뷰는 공식 웹사이트, README, 개인정보 처리방침, GitHub 릴리스를 2026년 10월 24일에 확인한 내용에 근거하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Presenton 리뷰: 데스크톱과 Docker에서 쓰는 오픈소스 AI 프레젠테이션 생성기. 편집 가능한 PPTX·PDF, 로컬·클라우드 모델 지원, Apache 2.0, 직접 테스트하지 않음.',
    twitterDescription: 'Presenton 리뷰: 데스크톱과 Docker용 오픈소스 AI 슬라이드 생성기. 편집 가능한 PPTX·PDF, 원하는 모델 선택, 출처로 확인된 내용과 확인되지 않은 내용.',
    audience: '셀프 호스팅 AI 슬라이드 생성기를 검토하는 발표자, 개발자, 팀으로, 출처가 확인한 사실과 프로젝트가 주장만 하는 내용, 비용을 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Presenton 리뷰',
    targetKeywords: [
      'presenton 리뷰',
      '오픈소스 ai 프레젠테이션 생성기',
      'presenton ollama',
      '셀프 호스팅 ai 슬라이드',
      'ai 프레젠테이션 pptx 내보내기',
      'gamma 대안 오픈소스',
      'presenton docker',
    ],
    current_models_mentioned: [
      'Ollama',
      'LM Studio',
      'GPT Image 2',
      'Gemini Flash',
    ],
    current_hardware_mentioned: [
      'Docker',
      'macOS',
      'Linux',
    ],
    leadAnswerBlock: '**Presenton(데스크톱 버전 0.9.11-beta)은 프롬프트, 문서 또는 직접 만든 PowerPoint 디자인을 편집 가능한 PPTX 또는 PDF 프레젠테이션으로 바꿔 주는 오픈소스 AI 프레젠테이션 생성기입니다.** 사용자의 컴퓨터나 서버에서 실행되고 선택한 모델 제공업체와 함께 동작하므로, 프라이버시 수준은 그 선택에 달려 있습니다. 여기에 적은 모든 내용은 프로젝트의 웹사이트, README, GitHub 릴리스에서 가져온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Presenton은 클라우드로 아무것도 보내지 않고 슬라이드를 만들 수 있습니까?',
        answer: '프로젝트에 따르면 Ollama나 LM Studio 같은 로컬 모델 제공업체와 함께 쓰면 가능합니다. 클라우드 제공업체를 쓰면 프롬프트와 원본 내용이 해당 제공업체로 전송됩니다. 호스팅되는 Presenton Cloud는 별도의 서비스로, 작업물이 회사 서버에 저장됩니다.',
        bullets: [
          '프롬프트, 업로드한 문서 또는 직접 만든 PPTX로 만든 템플릿에서 시작합니다.',
          '내보내기 전에 드래그로 편집하는 편집기에서 슬라이드를 열어 수정합니다.',
          '내보내기 형식은 PPTX와 PDF입니다.',
          '내장 API와 MCP 서버로 다른 도구가 프레젠테이션 생성을 요청할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Presenton란?', anchor: 'what-is-presenton' },
      { label: '입수 방법', anchor: 'get-it' },
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
          { type: 'one-sentence', text: 'Presenton은 Apache 2.0 라이선스의 AI 슬라이드 생성기로, 데스크톱 앱 또는 Docker 컨테이너로 실행하며 원하는 텍스트·이미지 모델을 쓸 수 있습니다.' },
          { type: 'plain-terms', text: '주제를 설명하거나 문서를 업로드하고 템플릿을 고르면, 사용자가 설정한 모델이 슬라이드를 작성하고, 이를 편집해 PowerPoint 또는 PDF로 내보낼 수 있습니다.' },
        ],
        items: [
          '유지 관리: 저장소의 최신 커밋은 2026년 10월 22일이고 최신 데스크톱 릴리스 0.9.11-beta는 2026년 9월 21일이므로 방치 프로젝트 경고는 해당하지 않습니다. 다만 프로젝트는 릴리스를 베타로 표시합니다.',
          '모델: Ollama나 LM Studio로 로컬에서, 또는 OpenAI, Google Gemini, Anthropic 등 클라우드 제공업체로 사용하며 설정에서 선택합니다.',
          '비용: 데스크톱 버전과 Docker 버전은 무료이고, 호스팅되는 Presenton Cloud는 월별 슬라이드 크레딧 요금제를 판매합니다.',
          '설치: macOS와 Linux용 데스크톱 앱, 또는 어느 시스템에서나 Docker 명령 한 줄입니다.',
          '개발사: 기업인 Presenton Inc.이며 소스 코드는 GitHub에 공개되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 프로젝트의 웹사이트, README, 개인정보 처리방침, GitHub 릴리스를 2026년 10월 24일에 확인한 내용에 근거합니다. PromptQuorum은 Presenton을 설치하거나 프레젠테이션을 생성하지 않았으므로 슬라이드 품질과 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-presenton',
        title: 'Presenton란?',
        content: [
          '**Presenton은 프롬프트, 업로드한 문서, 또는 PowerPoint 기반의 자체 디자인에서 슬라이드 묶음을 생성하는 오픈소스 AI 프레젠테이션 제작 도구입니다.** 코드는 [GitHub](https://github.com/presenton/presenton)에 있으며, 프로젝트는 스스로를 Gamma, Canva, Beautiful AI의 대안이라고 설명합니다.',
          'README에 따르면 데스크톱 앱, 셀프 호스팅 Docker 컨테이너, 브라우저에서 쓰는 Presenton Cloud, 유료 Enterprise 에디션의 네 가지 형태가 있습니다. 이 리뷰는 무료 데스크톱 버전과 Docker 버전을 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Presenton은 데스크톱 앱으로 설치하거나 Docker 명령 한 줄로 시작할 수 있으며, 브라우저에서 쓰는 호스팅 버전도 있습니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          { '옵션': 'macOS', '입수 방법': '[다운로드 페이지](https://presenton.ai/download), .dmg 설치 파일' },
          { '옵션': 'Linux', '입수 방법': '[다운로드 페이지](https://presenton.ai/download), .AppImage 또는 .deb' },
          { '옵션': 'Windows', '입수 방법': '최신 .exe는 0.8.7-beta이며 0.9.x 릴리스에는 없음' },
          { '옵션': 'Docker', '입수 방법': '[README](https://github.com/presenton/presenton)의 docker run 명령, 화면은 localhost:5001' },
          { '옵션': '웹사이트', '입수 방법': '[presenton.ai](https://presenton.ai), 브라우저용 Presenton Cloud도 여기서 제공' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[presenton.ai/privacy-policy](https://presenton.ai/privacy-policy)' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/presenton/presenton](https://github.com/presenton/presenton), Apache 2.0' },
        ],
        note: '확인한 버전: 최신 데스크톱 릴리스인 0.9.11-beta로, 2026년 9월 21일에 .dmg, .AppImage, .deb 파일과 함께 공개되었습니다. 안내한 개인정보 처리방침은 Presenton Cloud 서비스에 적용되며 데스크톱 버전과 Docker 버전에는 적용되지 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 README와 웹사이트를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치 또는 실행',
            whyItMatters: '데스크톱 앱을 열거나, docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest 를 실행한 뒤 브라우저에서 [localhost:5001](http://localhost:5001)을 엽니다.',
          },
          {
            title: '모델 제공업체 선택',
            whyItMatters: '설정에서 Ollama, LM Studio 또는 자신의 키를 쓰는 클라우드 API 같은 텍스트 제공업체와, Pexels, Pixabay, ComfyUI, OpenAI 또는 Gemini 이미지 모델 같은 이미지 제공업체를 고릅니다.',
          },
          { title: '생성하고 편집', whyItMatters: '프롬프트를 입력하거나 문서를 업로드하고 템플릿을 고른 다음, 편집기에서 슬라이드 순서를 바꾸고 수정한 뒤 내보냅니다.' },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 README 또는 프로젝트 웹사이트에서 가져온 것이며, PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**입력과 템플릿.** 프롬프트나 업로드한 문서에서 시작하며, 내장 템플릿이 있고 사용자 지정 템플릿은 기존 PowerPoint 파일에서 생성하거나 HTML과 Tailwind CSS로 작성할 수 있습니다.',
          '**편집.** 드래그로 편집하는 캔버스와 채팅 기반 슬라이드 수정을 제공하며, 이후 PPTX 또는 PDF로 내보냅니다.',
          '**모델 제공업체.** 텍스트는 Ollama, LM Studio, OpenAI, Google Gemini와 Vertex AI, Azure OpenAI, Amazon Bedrock, Anthropic, Fireworks, Together AI 또는 OpenAI 호환 엔드포인트를 지원하며, API 키가 필요 없는 "Sign in with ChatGPT" 옵션도 있습니다.',
          '**자동화.** 프레젠테이션 생성 API와 내장 MCP 서버로 스크립트와 AI 에이전트가 프레젠테이션을 요청할 수 있습니다.',
          '**팀.** 셀프 호스팅 버전에는 관리자 패널이 있는 다중 사용자 워크스페이스가 있고, 로컬 모델용으로 GPU를 지원하는 Docker 이미지도 제공됩니다.',
        ],
        note: '호스팅되는 Presenton Cloud는 생성한 슬라이드 한 장당 크레딧 1개를 차감하므로 10장짜리 프레젠테이션은 크레딧 10개를 사용합니다. 요금제 가격은 [요금 페이지](https://presenton.ai/pricing)에 표시되며 여기서는 반복하지 않습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**내용이 어디로 가는지는 설정한 제공업체에 달려 있습니다.** 웹사이트에 따르면 데스크톱 앱은 사용자의 컴퓨터에서 실행되며, 로컬 모델과 로컬 미디어 서비스를 쓰면 프레젠테이션 내용이 사용자 환경 안에 머물 수 있습니다. 반면 클라우드 텍스트·이미지·검색 제공업체를 쓰면 해당 프롬프트, 원본 내용 또는 요청이 그 제공업체의 약관에 따라 전달됩니다.',
          'README에는 데이터가 이동하는 경로가 두 가지 더 적혀 있습니다. 하나는 기본으로 켜져 있고 Presenton 서비스에 접속하는 디자인 커뮤니티 갤러리(설정으로 끌 수 있으며 README는 폐쇄망에서는 꺼야 한다고 명시합니다)이고, 다른 하나는 끌 수 있는 익명 텔레메트리 설정입니다. 텔레메트리의 수집 항목은 적혀 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '2026년 4월 17일에 마지막으로 갱신된 [개인정보 처리방침](https://presenton.ai/privacy-policy)은 호스팅되는 Presenton Cloud에 적용되며, 계정·콘텐츠·이용 데이터를 나열하고 개인 정보를 판매하지 않으며 구체적인 프레젠테이션 내용은 명시적 동의 없이 모델 학습에 쓰지 않는다고 밝히는 한편, 집계·익명화된 이용 데이터는 사용될 수 있다고 합니다. 이는 회사의 진술이지 감사 결과가 아니며, PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**개발자와 팀**: 자체 인프라에서 API나 MCP 서버로 프레젠테이션을 생성하려는 경우.',
          '**프라이버시를 중시하는 발표자**: 이미 Ollama나 LM Studio를 쓰고 있고 로컬 모델이 슬라이드 초안을 쓰게 하려는 경우.',
          '**PowerPoint로 작업하는 사람**: 웹 전용 프레젠테이션이 아니라 편집 가능한 .pptx 파일이 필요한 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**슬라이드 품질과 속도.** 프레젠테이션을 생성하지 않았으므로 레이아웃 품질, 생성된 문장의 정확성, 로컬 모델에서의 속도는 평가하지 않았습니다.',
          '**완전한 오프라인 사용.** 프로젝트는 Ollama를 이용한 로컬 동작을 설명하지만, 이미지 생성과 커뮤니티 갤러리를 포함한 모든 기능이 연결 없이 동작하는지는 확인하지 못했습니다.',
          '**하드웨어 요구 사항.** 출처에 RAM이나 GPU 요구 사항이 없으며, 선택한 모델에 따라 달라집니다.',
          '**안정성.** 모든 릴리스에 베타 표시가 있으며, 버전 간 업데이트가 얼마나 안정적인지는 검증하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이점',
        ],
        rows: [
          {
            '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)',
            '플랫폼': 'macOS, Windows, Linux, 웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '문서 채팅과 RAG 워크스페이스이며 슬라이드 생성기가 아닙니다',
          },
          {
            '앱': '[PrivateGPT](/ko/power-local-llm/privategpt-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이점': '자신의 문서에 대한 비공개 질의응답이며 결과물은 답변이지 프레젠테이션이 아닙니다',
          },
          {
            '앱': '[h2oGPT](/ko/power-local-llm/h2ogpt-review-2026)',
            '플랫폼': 'macOS, Windows, Linux, 웹',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이점': '문서 채팅 인터페이스이며 슬라이드 출력을 목적으로 하지 않습니다',
          },
        ],
        note: 'PromptQuorum 디렉터리에는 아직 다른 슬라이드 생성기가 없어서, 가장 가까운 문서 기반 도구를 실었습니다. 각 앱의 현재 가격, 라이선스, 지원 플랫폼은 해당 앱의 항목에서 확인하시기 바랍니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '내보낸 파일을 PowerPoint나 Google Slides에서 열 수 있습니까?',
            a: '프로젝트 FAQ에 따르면 내보낸 PPTX 파일은 Microsoft PowerPoint, Google Slides 및 호환 소프트웨어에서 완전히 편집할 수 있습니다. PromptQuorum은 내보낸 파일을 열어 보지 않았습니다.',
          },
          { q: '데스크톱 앱은 어떻게 업데이트합니까?', a: '다운로드 페이지에 따르면 더 새로운 버전을 설치하면 이전 버전을 대체하며 설정과 데이터는 유지됩니다.' },
          {
            q: '제 ChatGPT 구독으로 쓸 수 있습니까?',
            a: 'README에 따르면 "Sign in with ChatGPT" 옵션으로 무료 또는 유료 ChatGPT 계정이 별도 API 키 없이 프레젠테이션을 생성할 수 있습니다. 이 경로는 OpenAI의 서비스를 사용하며 로컬 모델이 아닙니다.',
          },
          { q: '여러 사람이 하나의 설치를 공유할 수 있습니까?', a: '셀프 호스팅 설치는 사용자마다 비공개인 다중 사용자 워크스페이스와 관리자 패널을 지원하며, README에 따르면 공유 제공업체 키는 관리자가 관리합니다.' },
          {
            q: 'Enterprise 에디션은 무엇을 더합니까?',
            a: 'README에는 Kubernetes용 버전 관리 Helm 차트, 감사 로그, 중앙 관리자 콘솔, OAuth·OIDC·SCIM을 통한 SSO와 사용자 프로비저닝이 나열되어 있습니다. PromptQuorum은 이를 검토하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Presenton은 로컬 모델을 포함해 원하는 AI 모델로 편집 가능한 PowerPoint와 PDF 프레젠테이션을 만들 수 있는, 활발히 개발되는 오픈소스 방법입니다. 반면 모든 릴리스가 베타로 표시되어 있고, 프라이버시는 전적으로 설정한 제공업체에 달려 있으며, 슬라이드 품질과 속도는 여기서 확인하지 못했습니다. 모델과 데이터를 직접 통제하려는 셀프 호스팅 사용자와 팀에 적합하며, 안정적인 결과가 필요한 분은 의존하기 전에 테스트용 프레젠테이션을 먼저 생성해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Presenton 웹사이트](https://presenton.ai) — 제품 개요, 다운로드 페이지 FAQ, 요금 설명. 2026년 10월 24일 확인.',
          '[GitHub의 Presenton](https://github.com/presenton/presenton) — README, Apache 2.0 라이선스, 커밋 기록. 2026년 10월 24일 확인.',
          '[Presenton 릴리스](https://github.com/presenton/presenton/releases) — 0.9.11-beta 및 이전 릴리스의 파일 이름과 날짜. 2026년 10월 24일 확인.',
          '[Presenton 개인정보 처리방침](https://presenton.ai/privacy-policy) — 호스팅 서비스의 데이터 처리. 2026년 4월 17일 마지막 갱신.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 데스크톱과 Docker에서 쓰는 문서 채팅 워크스페이스.',
          '[PrivateGPT 리뷰](/ko/power-local-llm/privategpt-review) — 자신의 문서에 대한 비공개 질의응답.',
          '[h2oGPT 리뷰](/ko/power-local-llm/h2ogpt-review-2026) — 문서 채팅 인터페이스.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
