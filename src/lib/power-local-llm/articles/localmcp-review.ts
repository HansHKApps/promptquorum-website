// LocalMCP Review: A Local MCP Server for Your Mac Data
// Slug: localmcp-review
// Companion to: jarvis-mac-review, nanobot-review, odysseus-review, atomic-bot-review
// Sources: the Mac App Store listing id6811374818 (US storefront plus DE/ES/FR/JP/KR/BR price lookups, App Privacy label "Data Not Collected"),
// the developer's product page www.mobilebox-consulting.de/weitere-anwendungen/localmcp/ and its company-wide privacy policy, all checked 2026-10-24
// — no hands-on testing. Official website: the developer page above (linked in the Get It table); the site named in the store listing
// (godmodeai2025.github.io/AppleMCP) returned 404 on 2026-10-24 and no source repository exists. Prices: read per storefront, never converted
// (DE/ES/FR 4,99 €, JA ¥600, KO ₩6,600, PT R$ 24,90; EN/ZH/AR use the US price $3.99).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-en.webp',
    title: 'LocalMCP Review: A Local MCP Server for Your Mac Data',
    seoTitle: 'LocalMCP Review: A Local MCP Server for Your Mac',
    intro:
      'LocalMCP is a paid Mac App Store app that runs a local MCP server, so an AI client you connect can search your Mail, Calendar, Contacts, Reminders and Notes, limited to the sources you approve. This review reflects the App Store listing and the developer\'s product page as checked on 24 October 2026; PromptQuorum has not tested the app.',
    metaDescription:
      'LocalMCP review: a Mac App Store app with a local MCP server for Mail, Calendar and Notes. Price, requirements, privacy and what we could not verify.',
    twitterDescription:
      'LocalMCP review: a $3.99 Mac app that lets your MCP client search Mail, Calendar and Notes with per-source approval. Setup, privacy, open questions.',
    audience:
      'Mac users who run an MCP-capable AI client and want to know what LocalMCP exposes to it, what it costs, how privacy works and which claims remain unconfirmed before buying.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMCP review',
    targetKeywords: [
      'localmcp review',
      'localmcp mac app',
      'mcp server for mac',
      'mcp apple mail calendar notes',
      'local mcp server macos',
      'localmcp privacy',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP (version 1.5.1, updated 22 October 2026) is a $3.99 Mac App Store app that runs a local MCP server and hands your AI client only the Mac data sources you approve; it is a connector, not an assistant or a model.** Every statement here comes from the listing and the developer; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What does LocalMCP do?',
        answer:
          'It starts an MCP server on your Mac. A compatible AI client, such as Claude Code or a client running a local model, can then search the Apple apps and folders you authorise. You still need your own MCP client.',
        bullets: [
          'Searches Mail, Calendar, Contacts, Reminders and Notes, per the App Store description.',
          'Reads photo metadata and works with local voice recordings from a folder you select.',
          'Changes to reminders, calendar and Shortcuts are optional and need separate switches.',
          'Runs text tools such as summaries with Apple\'s local language model on supported Macs.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LocalMCP?', anchor: 'what-is-localmcp' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'What You Need', anchor: 'requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'What It Exposes to Your Client', anchor: 'data-access' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP is a Mac App Store app that runs a local MCP server so an AI client can search your Mail, Calendar, Contacts, Reminders and Notes.' },
          { type: 'plain-terms', text: 'You buy it once, approve each data source in macOS, then paste its connection token into the AI client you already use.' },
        ],
        items: [
          'Maintenance: the App Store shows version 1.5.1 released on 22 October 2026, four days after the first release, so no stale-project warning applies.',
          'License: proprietary and closed source; no source repository was found.',
          'Cost: one-time purchase, $3.99 on the US store; the AI client you connect is separate.',
          'Maturity: first released on 18 October 2026 and no user ratings yet.',
          'Basis: the App Store listing and the developer\'s page, read on 24 October 2026, with no hands-on testing.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum has not installed, tested or audited LocalMCP. Statements about access control and privacy below are the developer\'s own.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'What Is LocalMCP?',
        content: [
          '**LocalMCP is a Mac app from Mobile Box - App Consulting UG (haftungsbeschränkt) that runs a local server speaking the Model Context Protocol (MCP), the open standard AI clients use to connect to tools and data.** The [developer\'s product page](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) describes it as a bridge between your Mac and a compatible client of your choice, exposing only the sources you release.',
          'It is not a chat app and it ships no model for chatting. The AI work happens in the client you connect, for example Claude Code or a client with a local model. LocalMCP\'s own text tools, such as summaries or bullet points, use Apple\'s on-device language model on supported Macs.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LocalMCP is sold only through the Mac App Store; there is no separate download, trial or source code.**',
        ],
        columns: ['Option', 'Link'],
        rows: [
          { 'Option': 'macOS 15.0 or later (Mac App Store)', 'Link': '[LocalMCP on the Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'Option': 'Website', 'Link': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'Option': 'Privacy policy', 'Link': '[Mobile Box privacy policy](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'Option': 'Source code', 'Link': 'None found' },
        ],
        note: 'Version reviewed: 1.5.1, released on 22 October 2026 per the App Store, which is the latest upstream update at the time of checking. The website named in the App Store listing (a github.io address) returned a 404 page on 24 October 2026, so the table links the developer\'s own product page instead. The privacy policy is the developer\'s company-wide page; this review found no section naming LocalMCP.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**LocalMCP needs macOS 15.0 or later and a separate MCP-capable AI client.** Apple\'s local language model features need more.',
        ],
        columns: ['Item', 'Per the listing'],
        rows: [
          { 'Item': 'macOS', 'Per the listing': '15.0 or later' },
          { 'Item': 'AI client', 'Per the listing': 'A compatible MCP client is required' },
          { 'Item': 'Local text tools', 'Per the listing': 'macOS 26 or later, supported hardware, Apple Intelligence on' },
          { 'Item': 'Download size', 'Per the listing': 'About 4 MB' },
          { 'Item': 'Languages', 'Per the listing': 'English and German' },
          { 'Item': 'Account', 'Per the listing': 'No extra login' },
        ],
        note: 'The developer says features depend on macOS version, language, model availability and the permissions you grant. No memory or processor minimum is stated.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**LocalMCP costs $3.99 as a one-time purchase on the US Mac App Store, per the listing and the developer\'s page.**',
        ],
        columns: ['Item', 'Cost (USD)'],
        rows: [
          { 'Item': 'LocalMCP (one-time purchase)', 'Cost (USD)': '$3.99 (US store)' },
          { 'Item': 'AI client you connect', 'Cost (USD)': 'Priced separately' },
        ],
        note: 'Read from the US listing on 24 October 2026. The German, French, Spanish and Austrian stores show 4,99 €. The sources list no subscription; check the store page for current terms.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the developer\'s description of its setup assistant; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Check your Mac and client',
            whyItMatters: 'You need macOS 15.0 or later and an MCP-capable client; Apple\'s local text tools also need macOS 26.',
          },
          {
            title: 'Buy and open the app',
            whyItMatters: 'Install LocalMCP from the Mac App Store and start the setup assistant.',
          },
          {
            title: 'Release your data sources',
            whyItMatters: 'Select mailboxes from Apple Mail and approve each source in the macOS permission dialog; unavailable sources can be skipped.',
          },
          {
            title: 'Connect your client',
            whyItMatters: 'Copy the MCP token and matching configuration from the connection page into your AI client; built-in checks help confirm local access.',
          },
          {
            title: 'Review the write permissions',
            whyItMatters: 'Reminder changes, calendar changes and your own Shortcuts are separate switches, and each change to reminders needs your confirmation in the app.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'What It Exposes to Your Client',
        content: [
          '**Per the App Store description, a connected client can search eight kinds of Mac data, and every write is opt-in.**',
        ],
        columns: ['Source', 'Access per the listing'],
        rows: [
          { 'Source': 'Mail', 'Access per the listing': 'Search selected mailboxes; messages are never changed or sent' },
          { 'Source': 'Calendar', 'Access per the listing': 'Search; changes optional, off by default' },
          { 'Source': 'Contacts', 'Access per the listing': 'Search' },
          { 'Source': 'Reminders', 'Access per the listing': 'Search; create, update, complete only if enabled and confirmed' },
          { 'Source': 'Notes', 'Access per the listing': 'Search' },
          { 'Source': 'Photos', 'Access per the listing': 'Metadata only' },
          { 'Source': 'Voice recordings', 'Access per the listing': 'Local Voice Memos folder you select' },
          { 'Source': 'Shortcuts', 'Access per the listing': 'Your own Shortcuts; optional, off by default' },
        ],
        note: 'Voice Memos needs an already accessible local folder, and iCloud files must be available locally. Availability depends on your permissions.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description or the developer\'s page.**',
        ],
        items: [
          '**Selective access.** macOS permission dialogs and settings in LocalMCP decide which sources a client can reach.',
          '**Bounded Mail search.** Selected mailboxes are read and searched with bounded requests, read-only.',
          '**Confirmed writes.** When the main window is closed, a dedicated confirmation window opens; declined or timed-out requests return a reason to the client.',
          '**Local text tools.** Summarise, shorten, bullet points or tasks, in the app or through the client, using Apple\'s local model.',
          '**Status view.** The developer\'s page shows server status, available tools and your permissions in one window.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The listing says LocalMCP needs no extra login, uses sources already set up on your Mac and does not send content to a developer backend; its App Store privacy label reads "Data Not Collected".**',
          'The data still leaves LocalMCP: it passes content to the MCP client you connect, which, in the developer\'s words, may process it locally or send it to its own services. Your privacy therefore depends on the client. The listing adds that on macOS 27 an optional Apple cloud image dialog exists whose processing is not exclusively local.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum has not audited the code or the network traffic. Check the privacy terms of the client you connect.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac users with an MCP client** who want an AI agent to search their own Mail, Calendar and Notes.',
          '**People running a local model client** who want Mac data available without a cloud connector.',
          '**Cautious users** who want per-source approval and a confirmation step before any change.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Real behaviour.** PromptQuorum did not run LocalMCP, so search quality, speed and stability are unconfirmed.',
          '**Client compatibility.** The developer says support and setup differ per client; no client was tested here.',
          '**Longevity and code.** The app is closed source, was first released on 18 October 2026 and has no ratings yet.',
          '**Documentation.** The setup page linked from the developer\'s site points to the github.io address that returned a 404 on 24 October 2026.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Jarvis](/power-local-llm/jarvis-mac-review)', 'Platforms': 'macOS', 'Price / license': 'Free / open source', 'Key difference': 'Offline-first voice assistant for macOS' },
          { 'App': '[nanobot](/power-local-llm/nanobot-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Self-hosted agent with memory and MCP tools' },
          { 'App': '[Odysseus](/power-local-llm/odysseus-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / AGPL-3.0', 'Key difference': 'Self-hosted workspace for chat, agents and documents' },
          { 'App': '[Atomic Bot](/power-local-llm/atomic-bot-review)', 'Platforms': 'Desktop and mobile', 'Price / license': 'Freemium / MIT', 'Key difference': 'AI coworker packaging the OpenClaw agent stack' },
        ],
        note: 'LocalMCP supplies data to a client rather than being an assistant itself, so these are neighbours, not drop-in replacements. Confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does LocalMCP keep my data on my Mac?',
            a: 'LocalMCP itself sends nothing to a developer backend, per the listing. But it hands search results to the MCP client you connect, and that client may use a cloud service. Choose the client accordingly.',
          },
          {
            q: 'Can the AI client change my data?',
            a: 'Only if you allow it. Mail is read-only. Reminder changes need a separate switch plus confirmation in the app, and calendar changes and Shortcuts are off by default.',
          },
          {
            q: 'Which AI clients work with it?',
            a: 'The developer names MCP-capable apps such as Claude Code and local clients with local models, and says support differs per client. PromptQuorum tested none of them.',
          },
          {
            q: 'Is LocalMCP open source?',
            a: 'No source repository was found, so it is treated as proprietary. The only places to get it are the Mac App Store listing and the developer\'s page.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMCP is a $3.99 Mac App Store app, version 1.5.1 updated on 22 October 2026, that exposes Mail, Calendar, Contacts, Reminders, Notes and more to an MCP client you choose, with opt-in writes and no developer backend according to its listing. Against that, it is closed source, days old and unrated, it needs a separate MCP client whose privacy you must judge yourself, and nothing here was tested by PromptQuorum.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMCP on the Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — version, price, requirements, description and privacy label, checked 24 October 2026.',
          '[LocalMCP product page](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — the developer\'s description, MCP explanation and requirements.',
          '[Mobile Box privacy policy](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — the developer\'s company-wide policy.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Jarvis Review](/power-local-llm/jarvis-mac-review) — an offline-first macOS voice assistant.',
          '[nanobot Review](/power-local-llm/nanobot-review) — a self-hosted personal agent with MCP tools.',
          '[Odysseus Review](/power-local-llm/odysseus-review) — a local-first workspace for chat, agents and documents.',
          '[Atomic Bot Review](/power-local-llm/atomic-bot-review) — a desktop AI coworker built on the OpenClaw agent stack.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LocalMCP Review: A Local MCP Server for Your Mac Data',
      description:
        'LocalMCP review: a $3.99 Mac App Store app with a local MCP server for Mail, Calendar and Notes. Price, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/localmcp-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Mac users evaluating a local MCP server for their AI client' },
      about: [
        { '@type': 'Thing', name: 'LocalMCP' },
        { '@type': 'Thing', name: 'Model Context Protocol' },
        { '@type': 'Thing', name: 'macOS' },
        { '@type': 'Thing', name: 'Personal AI assistants' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/localmcp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LocalMCP Review', item: 'https://promptquorum.com/power-local-llm/localmcp-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-de.webp',
    title: 'LocalMCP-Rezension: Ein lokaler MCP-Server für Ihre Mac-Daten',
    seoTitle: 'LocalMCP-Rezension: Lokaler MCP-Server für den Mac',
    intro:
      'LocalMCP ist eine kostenpflichtige App aus dem Mac App Store, die einen lokalen MCP-Server startet, damit ein angebundener KI-Client Ihre Mail, Ihren Kalender, Ihre Kontakte, Erinnerungen und Notizen durchsuchen kann, begrenzt auf die Quellen, die Sie freigeben. Diese Rezension gibt den App-Store-Eintrag und die Produktseite des Entwicklers wieder, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht getestet.',
    metaDescription:
      'LocalMCP-Rezension: Mac-App mit lokalem MCP-Server für Mail, Kalender und Notizen. Preis, Voraussetzungen, Datenschutz und unbestätigte Punkte.',
    twitterDescription:
      'LocalMCP-Rezension: eine Mac-App für 4,99 €, mit der Ihr MCP-Client Mail, Kalender und Notizen durchsucht, mit Freigabe je Quelle. Einrichtung, Datenschutz, offene Fragen.',
    audience:
      'Mac-Nutzerinnen und -Nutzer mit einem MCP-fähigen KI-Client, die vor dem Kauf wissen möchten, was LocalMCP dem Client bereitstellt, was es kostet, wie der Datenschutz funktioniert und welche Aussagen unbestätigt bleiben.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMCP Rezension',
    targetKeywords: [
      'localmcp rezension',
      'localmcp mac app',
      'mcp server für mac',
      'mcp apple mail kalender notizen',
      'lokaler mcp server macos',
      'localmcp datenschutz',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP (Version 1.5.1, aktualisiert am 22. Oktober 2026) ist eine Mac-App aus dem Mac App Store für 4,99 €, die einen lokalen MCP-Server startet und Ihrem KI-Client nur die Mac-Datenquellen bereitstellt, die Sie freigeben; sie ist ein Konnektor, kein Assistent und kein Modell.** Jede Aussage stammt aus dem Eintrag und vom Entwickler; PromptQuorum hat die App weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was macht LocalMCP?',
        answer:
          'Es startet einen MCP-Server auf Ihrem Mac. Ein kompatibler KI-Client, etwa Claude Code oder ein Client mit lokalem Modell, kann dann die Apple-Apps und Ordner durchsuchen, die Sie freigeben. Einen eigenen MCP-Client brauchen Sie trotzdem.',
        bullets: [
          'Durchsucht laut App-Store-Beschreibung Mail, Kalender, Kontakte, Erinnerungen und Notizen.',
          'Liest Foto-Metadaten und arbeitet mit lokalen Sprachmemos aus einem von Ihnen gewählten Ordner.',
          'Änderungen an Erinnerungen, Kalender und Kurzbefehlen sind optional und brauchen eigene Schalter.',
          'Führt Textwerkzeuge wie Zusammenfassungen auf unterstützten Macs mit Apples lokalem Sprachmodell aus.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LocalMCP?', anchor: 'what-is-localmcp' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Das brauchen Sie', anchor: 'requirements' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Was Ihr Client sehen kann', anchor: 'data-access' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP ist eine Mac-App aus dem Mac App Store, die einen lokalen MCP-Server startet, damit ein KI-Client Ihre Mail, Ihren Kalender, Ihre Kontakte, Erinnerungen und Notizen durchsuchen kann.' },
          { type: 'plain-terms', text: 'Sie kaufen sie einmal, geben jede Datenquelle in macOS frei und tragen das Verbindungstoken in den KI-Client ein, den Sie ohnehin nutzen.' },
        ],
        items: [
          'Pflege: Der App Store zeigt Version 1.5.1 vom 22. Oktober 2026, vier Tage nach der Erstveröffentlichung, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Lizenz: proprietär und nicht quelloffen; ein Quellcode-Repository wurde nicht gefunden.',
          'Kosten: einmaliger Kauf, 4,99 € im deutschen Store; der angebundene KI-Client kommt separat hinzu.',
          'Reife: erstmals am 18. Oktober 2026 veröffentlicht, noch keine Nutzerbewertungen.',
          'Grundlage: der App-Store-Eintrag und die Seite des Entwicklers, gelesen am 24. Oktober 2026, ohne eigenen Praxistest.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum hat LocalMCP weder installiert noch getestet oder geprüft. Aussagen zu Zugriffskontrolle und Datenschutz unten sind die des Entwicklers.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'Was ist LocalMCP?',
        content: [
          '**LocalMCP ist eine Mac-App von Mobile Box - App Consulting UG (haftungsbeschränkt), die einen lokalen Server startet, der das Model Context Protocol (MCP) spricht, den offenen Standard, über den KI-Clients Werkzeuge und Daten anbinden.** Die [Produktseite des Entwicklers](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) beschreibt die App als Brücke zwischen Ihrem Mac und einem kompatiblen Client Ihrer Wahl, die nur die von Ihnen freigegebenen Quellen bereitstellt.',
          'Es ist keine Chat-App und enthält kein Modell zum Chatten. Die KI-Arbeit findet im angebundenen Client statt, zum Beispiel in Claude Code oder einem Client mit lokalem Modell. Die eigenen Textwerkzeuge von LocalMCP, etwa Zusammenfassungen oder Stichpunkte, nutzen auf unterstützten Macs Apples Sprachmodell auf dem Gerät.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LocalMCP wird nur über den Mac App Store verkauft; es gibt weder einen separaten Download noch eine Testversion oder Quellcode.**',
        ],
        columns: ['Option', 'Link'],
        rows: [
          { 'Option': 'macOS 15.0 oder neuer (Mac App Store)', 'Link': '[LocalMCP im Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'Option': 'Website', 'Link': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'Option': 'Datenschutzerklärung', 'Link': '[Datenschutzerklärung von Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'Option': 'Quellcode', 'Link': 'Nicht gefunden' },
        ],
        note: 'Geprüfte Version: 1.5.1, laut App Store am 22. Oktober 2026 veröffentlicht, also das letzte Upstream-Update zum Zeitpunkt der Prüfung. Die im App-Store-Eintrag genannte Website (eine github.io-Adresse) lieferte am 24. Oktober 2026 eine 404-Seite, deshalb verlinkt die Tabelle die eigene Produktseite des Entwicklers. Die Datenschutzerklärung ist die firmenweite Seite des Entwicklers; ein Abschnitt, der LocalMCP nennt, wurde in dieser Rezension nicht gefunden.',
      },
      requirements: {
        id: 'requirements',
        title: 'Das brauchen Sie',
        content: [
          '**LocalMCP braucht macOS 15.0 oder neuer und einen separaten MCP-fähigen KI-Client.** Die Funktionen mit Apples lokalem Sprachmodell setzen mehr voraus.',
        ],
        columns: ['Posten', 'Laut Eintrag'],
        rows: [
          { 'Posten': 'macOS', 'Laut Eintrag': '15.0 oder neuer' },
          { 'Posten': 'KI-Client', 'Laut Eintrag': 'Ein kompatibler MCP-Client ist erforderlich' },
          { 'Posten': 'Lokale Textwerkzeuge', 'Laut Eintrag': 'macOS 26 oder neuer, unterstützte Hardware, Apple Intelligence aktiviert' },
          { 'Posten': 'Downloadgröße', 'Laut Eintrag': 'Etwa 4 MB' },
          { 'Posten': 'Sprachen', 'Laut Eintrag': 'Englisch und Deutsch' },
          { 'Posten': 'Konto', 'Laut Eintrag': 'Kein zusätzlicher Login' },
        ],
        note: 'Laut Entwickler hängt der Funktionsumfang von macOS-Version, Sprache, Modellverfügbarkeit und den erteilten Freigaben ab. Ein Mindestwert für Arbeitsspeicher oder Prozessor wird nicht genannt.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**LocalMCP kostet laut Eintrag und Entwicklerseite 4,99 € als Einmalkauf im deutschen Mac App Store.**',
        ],
        columns: ['Posten', 'Kosten (EUR)'],
        rows: [
          { 'Posten': 'LocalMCP (Einmalkauf)', 'Kosten (EUR)': '4,99 € (deutscher Store)' },
          { 'Posten': 'Angebundener KI-Client', 'Kosten (EUR)': 'Wird separat berechnet' },
        ],
        note: 'Am 24. Oktober 2026 im deutschen Eintrag gelesen. Die Quellen nennen kein Abonnement; aktuelle Bedingungen stehen auf der Store-Seite.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Beschreibung des Einrichtungsassistenten durch den Entwickler; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Mac und Client prüfen',
            whyItMatters: 'Sie brauchen macOS 15.0 oder neuer und einen MCP-fähigen Client; Apples lokale Textwerkzeuge setzen außerdem macOS 26 voraus.',
          },
          {
            title: 'App kaufen und öffnen',
            whyItMatters: 'Installieren Sie LocalMCP aus dem Mac App Store und starten Sie den Einrichtungsassistenten.',
          },
          {
            title: 'Datenquellen freigeben',
            whyItMatters: 'Wählen Sie Postfächer direkt aus Apple Mail und bestätigen Sie jede Quelle im macOS-Berechtigungsdialog; nicht verfügbare Quellen lassen sich überspringen.',
          },
          {
            title: 'Client verbinden',
            whyItMatters: 'Kopieren Sie das MCP-Token und die passende Konfiguration von der Verbindungsseite in Ihren KI-Client; integrierte Prüfungen helfen, den lokalen Zugriff zu bestätigen.',
          },
          {
            title: 'Schreibrechte prüfen',
            whyItMatters: 'Änderungen an Erinnerungen und Kalender sowie eigene Kurzbefehle sind getrennte Schalter, und jede Änderung an Erinnerungen braucht Ihre Bestätigung in der App.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'Was Ihr Client sehen kann',
        content: [
          '**Laut App-Store-Beschreibung kann ein angebundener Client acht Arten von Mac-Daten durchsuchen, und jeder Schreibzugriff ist optional.**',
        ],
        columns: ['Quelle', 'Zugriff laut Eintrag'],
        rows: [
          { 'Quelle': 'Mail', 'Zugriff laut Eintrag': 'Ausgewählte Postfächer durchsuchen; Nachrichten werden nie geändert oder gesendet' },
          { 'Quelle': 'Kalender', 'Zugriff laut Eintrag': 'Suche; Änderungen optional, standardmäßig aus' },
          { 'Quelle': 'Kontakte', 'Zugriff laut Eintrag': 'Suche' },
          { 'Quelle': 'Erinnerungen', 'Zugriff laut Eintrag': 'Suche; Anlegen, Ändern, Abhaken nur bei Freigabe und Bestätigung' },
          { 'Quelle': 'Notizen', 'Zugriff laut Eintrag': 'Suche' },
          { 'Quelle': 'Fotos', 'Zugriff laut Eintrag': 'Nur Metadaten' },
          { 'Quelle': 'Sprachaufnahmen', 'Zugriff laut Eintrag': 'Von Ihnen gewählter lokaler Sprachmemo-Ordner' },
          { 'Quelle': 'Kurzbefehle', 'Zugriff laut Eintrag': 'Eigene Kurzbefehle; optional, standardmäßig aus' },
        ],
        note: 'Sprachmemos brauchen einen bereits zugänglichen lokalen Ordner, und iCloud-Dateien müssen lokal verfügbar sein. Die Verfügbarkeit hängt von Ihren Freigaben ab.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der App-Store-Beschreibung oder der Seite des Entwicklers.**',
        ],
        items: [
          '**Gezielter Zugriff.** macOS-Berechtigungsdialoge und Einstellungen in LocalMCP bestimmen, welche Quellen ein Client erreicht.',
          '**Begrenzte Mail-Suche.** Ausgewählte Postfächer werden mit begrenzten Anfragen und nur lesend durchsucht.',
          '**Bestätigte Schreibzugriffe.** Bei geschlossenem Hauptfenster öffnet sich ein eigenes Bestätigungsfenster; abgelehnte oder abgelaufene Anfragen liefern dem Client eine Begründung.',
          '**Lokale Textwerkzeuge.** Zusammenfassen, Kürzen, Stichpunkte oder Aufgaben, in der App oder über den Client, mit Apples lokalem Modell.',
          '**Statusansicht.** Die Seite des Entwicklers zeigt Serverstatus, verfügbare Werkzeuge und Ihre Freigaben in einem Fenster.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Eintrag braucht LocalMCP keinen zusätzlichen Login, nutzt auf dem Mac bereits eingerichtete Quellen und sendet keine Inhalte an ein Entwickler-Backend; das App-Store-Datenschutzlabel lautet „Daten werden nicht erfasst“.**',
          'Die Daten verlassen LocalMCP dennoch: Die App gibt Inhalte an den angebundenen MCP-Client weiter, der sie nach Angaben des Entwicklers lokal verarbeiten oder an eigene Dienste senden kann. Ihr Datenschutz hängt daher vom Client ab. Der Eintrag nennt außerdem für macOS 27 einen optionalen Apple-Cloud-Bilddialog, dessen Verarbeitung nicht ausschließlich lokal erfolgt.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft. Lesen Sie die Datenschutzbedingungen des Clients, den Sie anbinden.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Mac-Nutzer mit MCP-Client**, die einen KI-Agenten ihre eigene Mail, ihren Kalender und ihre Notizen durchsuchen lassen möchten.',
          '**Nutzer eines Clients mit lokalem Modell**, die Mac-Daten ohne Cloud-Konnektor verfügbar machen wollen.',
          '**Vorsichtige Nutzer**, die eine Freigabe je Quelle und eine Bestätigung vor jeder Änderung wünschen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Tatsächliches Verhalten.** PromptQuorum hat LocalMCP nicht ausgeführt; Suchqualität, Geschwindigkeit und Stabilität sind unbestätigt.',
          '**Client-Kompatibilität.** Laut Entwickler unterscheiden sich Unterstützung und Einrichtung je Client; hier wurde kein Client getestet.',
          '**Langlebigkeit und Code.** Die App ist nicht quelloffen, wurde erstmals am 18. Oktober 2026 veröffentlicht und hat noch keine Bewertungen.',
          '**Dokumentation.** Die auf der Entwicklerseite verlinkte Einrichtungsseite führt zur github.io-Adresse, die am 24. Oktober 2026 eine 404-Seite lieferte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Jarvis](/de/power-local-llm/jarvis-mac-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Kostenlos / Open Source', 'Hauptunterschied': 'Offline-orientierter Sprachassistent für macOS' },
          { 'App': '[nanobot](/de/power-local-llm/nanobot-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Selbst gehosteter Agent mit Gedächtnis und MCP-Werkzeugen' },
          { 'App': '[Odysseus](/de/power-local-llm/odysseus-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / AGPL-3.0', 'Hauptunterschied': 'Selbst gehosteter Arbeitsbereich für Chat, Agenten und Dokumente' },
          { 'App': '[Atomic Bot](/de/power-local-llm/atomic-bot-review)', 'Plattformen': 'Desktop und mobil', 'Preis / Lizenz': 'Freemium / MIT', 'Hauptunterschied': 'KI-Kollege auf Basis des OpenClaw-Agenten-Stacks' },
        ],
        note: 'LocalMCP liefert Daten an einen Client und ist selbst kein Assistent; die Apps sind also Nachbarn, keine Ersatzlösungen. Prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Bleiben meine Daten auf meinem Mac?',
            a: 'LocalMCP selbst sendet laut Eintrag nichts an ein Entwickler-Backend. Die App gibt Suchergebnisse aber an den angebundenen MCP-Client weiter, und dieser kann einen Cloud-Dienst nutzen. Wählen Sie den Client entsprechend.',
          },
          {
            q: 'Kann der KI-Client meine Daten ändern?',
            a: 'Nur wenn Sie es erlauben. Mail ist nur lesbar. Änderungen an Erinnerungen brauchen einen eigenen Schalter plus Bestätigung in der App, Kalenderänderungen und Kurzbefehle sind standardmäßig aus.',
          },
          {
            q: 'Mit welchen KI-Clients funktioniert es?',
            a: 'Der Entwickler nennt MCP-fähige Apps wie Claude Code und lokale Clients mit lokalen Modellen und sagt, die Unterstützung unterscheide sich je Client. PromptQuorum hat keinen davon getestet.',
          },
          {
            q: 'Ist LocalMCP Open Source?',
            a: 'Ein Quellcode-Repository wurde nicht gefunden, daher gilt die App als proprietär. Bezugsquellen sind nur der Mac-App-Store-Eintrag und die Seite des Entwicklers.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LocalMCP ist eine Mac-App aus dem Mac App Store für 4,99 €, Version 1.5.1 vom 22. Oktober 2026, die Mail, Kalender, Kontakte, Erinnerungen, Notizen und mehr für einen frei gewählten MCP-Client bereitstellt, laut Eintrag mit optionalen Schreibzugriffen und ohne Entwickler-Backend. Dagegen steht: nicht quelloffen, erst wenige Tage alt und unbewertet, ein separater MCP-Client nötig, dessen Datenschutz Sie selbst beurteilen müssen, und PromptQuorum hat nichts davon getestet.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LocalMCP im Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — Version, Preis, Voraussetzungen, Beschreibung und Datenschutzlabel, geprüft am 24. Oktober 2026.',
          '[LocalMCP-Produktseite](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — Beschreibung des Entwicklers, MCP-Erklärung und Voraussetzungen.',
          '[Datenschutzerklärung von Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — die firmenweite Erklärung des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Jarvis-Rezension](/de/power-local-llm/jarvis-mac-review) — ein offline-orientierter Sprachassistent für macOS.',
          '[nanobot-Rezension](/de/power-local-llm/nanobot-review) — ein selbst gehosteter persönlicher Agent mit MCP-Werkzeugen.',
          '[Odysseus-Rezension](/de/power-local-llm/odysseus-review) — ein Local-First-Arbeitsbereich für Chat, Agenten und Dokumente.',
          '[Atomic-Bot-Rezension](/de/power-local-llm/atomic-bot-review) — ein KI-Kollege für den Desktop auf Basis des OpenClaw-Agenten-Stacks.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-es.webp',
    title: 'Reseña de LocalMCP: un servidor MCP local para los datos de tu Mac',
    seoTitle: 'Reseña de LocalMCP: servidor MCP local para tu Mac',
    intro:
      'LocalMCP es una app de pago de la Mac App Store que ejecuta un servidor MCP local, para que un cliente de IA conectado pueda buscar en tu Mail, Calendario, Contactos, Recordatorios y Notas, solo en las fuentes que apruebes. Esta reseña refleja la ficha de la App Store y la página del producto del desarrollador, consultadas el 24 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription:
      'Reseña de LocalMCP: app de Mac con servidor MCP local para Mail, Calendario y Notas. Precio, requisitos, privacidad y lo que no pudimos verificar.',
    twitterDescription:
      'Reseña de LocalMCP: una app de Mac de 4,99 € que deja a tu cliente MCP buscar en Mail, Calendario y Notas con permiso por fuente. Instalación, privacidad, dudas abiertas.',
    audience:
      'Usuarios de Mac con un cliente de IA compatible con MCP que quieren saber antes de comprar qué expone LocalMCP a ese cliente, cuánto cuesta, cómo funciona la privacidad y qué afirmaciones siguen sin confirmar.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña LocalMCP',
    targetKeywords: [
      'reseña localmcp',
      'localmcp app mac',
      'servidor mcp para mac',
      'mcp apple mail calendario notas',
      'servidor mcp local macos',
      'localmcp privacidad',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP (versión 1.5.1, actualizada el 22 de octubre de 2026) es una app de la Mac App Store de 4,99 € que ejecuta un servidor MCP local y entrega a tu cliente de IA solo las fuentes de datos del Mac que apruebes; es un conector, no un asistente ni un modelo.** Cada afirmación procede de la ficha y del desarrollador; PromptQuorum no la ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué hace LocalMCP?',
        answer:
          'Inicia un servidor MCP en tu Mac. Un cliente de IA compatible, como Claude Code o un cliente con un modelo local, puede entonces buscar en las apps y carpetas de Apple que autorices. Aun así necesitas tu propio cliente MCP.',
        bullets: [
          'Busca en Mail, Calendario, Contactos, Recordatorios y Notas, según la descripción de la App Store.',
          'Lee metadatos de fotos y trabaja con grabaciones de voz locales de una carpeta que elijas.',
          'Los cambios en recordatorios, calendario y Atajos son opcionales y requieren interruptores separados.',
          'Ejecuta herramientas de texto, como resúmenes, con el modelo de lenguaje local de Apple en Mac compatibles.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LocalMCP?', anchor: 'what-is-localmcp' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Qué necesitas', anchor: 'requirements' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Qué ve tu cliente', anchor: 'data-access' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP es una app de la Mac App Store que ejecuta un servidor MCP local para que un cliente de IA busque en tu Mail, Calendario, Contactos, Recordatorios y Notas.' },
          { type: 'plain-terms', text: 'La compras una vez, apruebas cada fuente de datos en macOS y pegas su token de conexión en el cliente de IA que ya usas.' },
        ],
        items: [
          'Mantenimiento: la App Store muestra la versión 1.5.1 publicada el 22 de octubre de 2026, cuatro días después del primer lanzamiento, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: propietaria y de código cerrado; no se encontró ningún repositorio de código.',
          'Coste: compra única, 4,99 € en la tienda española; el cliente de IA que conectes va aparte.',
          'Madurez: lanzada el 18 de octubre de 2026 y aún sin valoraciones de usuarios.',
          'Base: la ficha de la App Store y la página del desarrollador, leídas el 24 de octubre de 2026, sin pruebas prácticas.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum no ha instalado, probado ni auditado LocalMCP. Las afirmaciones siguientes sobre control de acceso y privacidad son del desarrollador.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: '¿Qué es LocalMCP?',
        content: [
          '**LocalMCP es una app de Mac de Mobile Box - App Consulting UG (haftungsbeschränkt) que ejecuta un servidor local que habla el Model Context Protocol (MCP), el estándar abierto con el que los clientes de IA se conectan a herramientas y datos.** La [página del producto del desarrollador](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) la describe como un puente entre tu Mac y un cliente compatible de tu elección, que expone solo las fuentes que liberas.',
          'No es una app de chat ni incluye un modelo para conversar. El trabajo de IA ocurre en el cliente que conectas, por ejemplo Claude Code o un cliente con un modelo local. Las herramientas de texto propias de LocalMCP, como resúmenes o viñetas, usan el modelo de lenguaje de Apple en el dispositivo en los Mac compatibles.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**LocalMCP se vende solo en la Mac App Store; no hay descarga aparte, versión de prueba ni código fuente.**',
        ],
        columns: ['Opción', 'Enlace'],
        rows: [
          { 'Opción': 'macOS 15.0 o posterior (Mac App Store)', 'Enlace': '[LocalMCP en la Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'Opción': 'Sitio web', 'Enlace': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'Opción': 'Política de privacidad', 'Enlace': '[Política de privacidad de Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'Opción': 'Código fuente', 'Enlace': 'No encontrado' },
        ],
        note: 'Versión revisada: 1.5.1, publicada el 22 de octubre de 2026 según la App Store, la última actualización del proyecto en el momento de la comprobación. El sitio web que cita la ficha de la App Store (una dirección github.io) devolvió una página 404 el 24 de octubre de 2026, por lo que la tabla enlaza la página del producto del propio desarrollador. La política de privacidad es la página general de la empresa; esta reseña no encontró ninguna sección que nombre LocalMCP.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**LocalMCP requiere macOS 15.0 o posterior y un cliente de IA compatible con MCP aparte.** Las funciones del modelo de lenguaje local de Apple exigen más.',
        ],
        columns: ['Elemento', 'Según la ficha'],
        rows: [
          { 'Elemento': 'macOS', 'Según la ficha': '15.0 o posterior' },
          { 'Elemento': 'Cliente de IA', 'Según la ficha': 'Se requiere un cliente MCP compatible' },
          { 'Elemento': 'Herramientas de texto locales', 'Según la ficha': 'macOS 26 o posterior, hardware compatible, Apple Intelligence activada' },
          { 'Elemento': 'Tamaño de descarga', 'Según la ficha': 'Unos 4 MB' },
          { 'Elemento': 'Idiomas', 'Según la ficha': 'Inglés y alemán' },
          { 'Elemento': 'Cuenta', 'Según la ficha': 'Sin inicio de sesión adicional' },
        ],
        note: 'Según el desarrollador, las funciones dependen de la versión de macOS, el idioma, la disponibilidad del modelo y los permisos que concedas. No se indica un mínimo de memoria ni de procesador.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**LocalMCP cuesta 4,99 € como compra única en la Mac App Store española, según la ficha y la página del desarrollador.**',
        ],
        columns: ['Elemento', 'Coste (EUR)'],
        rows: [
          { 'Elemento': 'LocalMCP (compra única)', 'Coste (EUR)': '4,99 € (tienda española)' },
          { 'Elemento': 'Cliente de IA que conectes', 'Coste (EUR)': 'Se paga aparte' },
        ],
        note: 'Leído en la ficha española el 24 de octubre de 2026. Las fuentes no mencionan ninguna suscripción; consulta la página de la tienda para las condiciones actuales.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la descripción del asistente de configuración que da el desarrollador; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Comprueba tu Mac y el cliente',
            whyItMatters: 'Necesitas macOS 15.0 o posterior y un cliente compatible con MCP; las herramientas de texto locales de Apple requieren además macOS 26.',
          },
          {
            title: 'Compra y abre la app',
            whyItMatters: 'Instala LocalMCP desde la Mac App Store y arranca el asistente de configuración.',
          },
          {
            title: 'Libera tus fuentes de datos',
            whyItMatters: 'Selecciona buzones directamente desde Apple Mail y aprueba cada fuente en el diálogo de permisos de macOS; las fuentes no disponibles se pueden omitir.',
          },
          {
            title: 'Conecta tu cliente',
            whyItMatters: 'Copia el token MCP y la configuración correspondiente de la página de conexión a tu cliente de IA; las comprobaciones integradas ayudan a confirmar el acceso local.',
          },
          {
            title: 'Revisa los permisos de escritura',
            whyItMatters: 'Los cambios en recordatorios y calendario y tus propios Atajos son interruptores separados, y cada cambio en recordatorios requiere tu confirmación en la app.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'Qué ve tu cliente',
        content: [
          '**Según la descripción de la App Store, un cliente conectado puede buscar en ocho tipos de datos del Mac, y toda escritura es opcional.**',
        ],
        columns: ['Fuente', 'Acceso según la ficha'],
        rows: [
          { 'Fuente': 'Mail', 'Acceso según la ficha': 'Busca en buzones elegidos; los mensajes nunca se modifican ni se envían' },
          { 'Fuente': 'Calendario', 'Acceso según la ficha': 'Búsqueda; cambios opcionales, desactivados por defecto' },
          { 'Fuente': 'Contactos', 'Acceso según la ficha': 'Búsqueda' },
          { 'Fuente': 'Recordatorios', 'Acceso según la ficha': 'Búsqueda; crear, editar y completar solo si se activa y se confirma' },
          { 'Fuente': 'Notas', 'Acceso según la ficha': 'Búsqueda' },
          { 'Fuente': 'Fotos', 'Acceso según la ficha': 'Solo metadatos' },
          { 'Fuente': 'Grabaciones de voz', 'Acceso según la ficha': 'Carpeta local de Notas de voz que elijas' },
          { 'Fuente': 'Atajos', 'Acceso según la ficha': 'Tus propios Atajos; opcional, desactivado por defecto' },
        ],
        note: 'Las notas de voz requieren una carpeta local ya accesible, y los archivos de iCloud deben estar disponibles en local. La disponibilidad depende de tus permisos.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede de la descripción de la App Store o de la página del desarrollador.**',
        ],
        items: [
          '**Acceso selectivo.** Los diálogos de permisos de macOS y los ajustes de LocalMCP deciden a qué fuentes llega un cliente.',
          '**Búsqueda acotada en Mail.** Los buzones elegidos se leen y buscan con solicitudes acotadas, solo en lectura.',
          '**Escrituras confirmadas.** Con la ventana principal cerrada se abre una ventana de confirmación propia; las solicitudes rechazadas o caducadas devuelven un motivo al cliente.',
          '**Herramientas de texto locales.** Resumir, acortar, viñetas o tareas, en la app o mediante el cliente, con el modelo local de Apple.',
          '**Vista de estado.** La página del desarrollador muestra el estado del servidor, las herramientas disponibles y tus permisos en una sola ventana.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según la ficha, LocalMCP no necesita un inicio de sesión adicional, usa las fuentes ya configuradas en tu Mac y no envía contenido a un servidor del desarrollador; su etiqueta de privacidad de la App Store dice «Datos no recopilados».**',
          'Aun así, los datos salen de LocalMCP: la app pasa el contenido al cliente MCP que conectas, que, según el desarrollador, puede procesarlo en local o enviarlo a sus propios servicios. Tu privacidad depende, por tanto, del cliente. La ficha añade que en macOS 27 existe un diálogo opcional de imágenes en la nube de Apple cuyo procesamiento no es exclusivamente local.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum no ha auditado el código ni el tráfico de red. Revisa las condiciones de privacidad del cliente que conectes.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Mac con un cliente MCP** que quieren que un agente de IA busque en su propio Mail, Calendario y Notas.',
          '**Quienes usan un cliente con modelo local** y quieren tener los datos del Mac disponibles sin un conector en la nube.',
          '**Usuarios prudentes** que quieren permiso por fuente y un paso de confirmación antes de cualquier cambio.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Comportamiento real.** PromptQuorum no ejecutó LocalMCP, así que la calidad de búsqueda, la velocidad y la estabilidad no están confirmadas.',
          '**Compatibilidad de clientes.** Según el desarrollador, el soporte y la configuración varían según el cliente; aquí no se probó ninguno.',
          '**Longevidad y código.** La app es de código cerrado, se lanzó el 18 de octubre de 2026 y aún no tiene valoraciones.',
          '**Documentación.** La página de configuración enlazada desde el sitio del desarrollador apunta a la dirección github.io que devolvió una página 404 el 24 de octubre de 2026.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Jarvis](/es/power-local-llm/jarvis-mac-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Gratis / código abierto', 'Diferencia clave': 'Asistente de voz para macOS orientado al uso sin conexión' },
          { 'App': '[nanobot](/es/power-local-llm/nanobot-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente autoalojado con memoria y herramientas MCP' },
          { 'App': '[Odysseus](/es/power-local-llm/odysseus-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / AGPL-3.0', 'Diferencia clave': 'Espacio autoalojado para chat, agentes y documentos' },
          { 'App': '[Atomic Bot](/es/power-local-llm/atomic-bot-review)', 'Plataformas': 'Escritorio y móvil', 'Precio / licencia': 'Freemium / MIT', 'Diferencia clave': 'Compañero de IA basado en el stack de agentes OpenClaw' },
        ],
        note: 'LocalMCP suministra datos a un cliente en lugar de ser un asistente; estas apps son vecinas, no sustitutos directos. Confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Mis datos se quedan en mi Mac?',
            a: 'Según la ficha, LocalMCP en sí no envía nada a un servidor del desarrollador. Pero pasa los resultados de búsqueda al cliente MCP que conectas, y ese cliente puede usar un servicio en la nube. Elige el cliente en consecuencia.',
          },
          {
            q: '¿Puede el cliente de IA cambiar mis datos?',
            a: 'Solo si lo permites. Mail es de solo lectura. Los cambios en recordatorios requieren un interruptor aparte y confirmación en la app; los cambios de calendario y los Atajos están desactivados por defecto.',
          },
          {
            q: '¿Con qué clientes de IA funciona?',
            a: 'El desarrollador menciona apps compatibles con MCP como Claude Code y clientes locales con modelos locales, y dice que el soporte varía según el cliente. PromptQuorum no probó ninguno.',
          },
          {
            q: '¿LocalMCP es de código abierto?',
            a: 'No se encontró ningún repositorio de código, por lo que se trata como propietaria. Los únicos sitios para obtenerla son la ficha de la Mac App Store y la página del desarrollador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LocalMCP es una app de la Mac App Store de 4,99 €, versión 1.5.1 actualizada el 22 de octubre de 2026, que expone Mail, Calendario, Contactos, Recordatorios, Notas y más a un cliente MCP que elijas, con escrituras opcionales y sin servidor del desarrollador según su ficha. En contra: es de código cerrado, tiene pocos días y ninguna valoración, necesita un cliente MCP aparte cuya privacidad debes juzgar tú, y PromptQuorum no probó nada.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LocalMCP en la Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — versión, precio, requisitos, descripción y etiqueta de privacidad, consultados el 24 de octubre de 2026.',
          '[Página del producto LocalMCP](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — descripción del desarrollador, explicación de MCP y requisitos.',
          '[Política de privacidad de Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — la política general del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Jarvis](/es/power-local-llm/jarvis-mac-review) — un asistente de voz para macOS orientado al uso sin conexión.',
          '[Reseña de nanobot](/es/power-local-llm/nanobot-review) — un agente personal autoalojado con herramientas MCP.',
          '[Reseña de Odysseus](/es/power-local-llm/odysseus-review) — un espacio de trabajo local para chat, agentes y documentos.',
          '[Reseña de Atomic Bot](/es/power-local-llm/atomic-bot-review) — un compañero de IA de escritorio basado en el stack de agentes OpenClaw.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-fr.webp',
    title: 'Test de LocalMCP : un serveur MCP local pour les données de votre Mac',
    seoTitle: 'Test de LocalMCP : serveur MCP local pour votre Mac',
    intro:
      'LocalMCP est une application payante du Mac App Store qui exécute un serveur MCP local, afin qu\'un client IA connecté puisse rechercher dans votre Mail, votre Calendrier, vos Contacts, Rappels et Notes, uniquement dans les sources que vous autorisez. Ce test reflète la fiche de l\'App Store et la page produit du développeur, consultées le 24 octobre 2026 ; PromptQuorum n\'a pas testé l\'application.',
    metaDescription:
      'Test de LocalMCP : app Mac avec serveur MCP local pour Mail, Calendrier et Notes. Prix de 4,99 €, prérequis, confidentialité et points non vérifiés.',
    twitterDescription:
      'Test de LocalMCP : une app Mac à 4,99 € qui laisse votre client MCP chercher dans Mail, Calendrier et Notes, avec autorisation par source. Installation, confidentialité, questions ouvertes.',
    audience:
      'Utilisateurs de Mac disposant d\'un client IA compatible MCP, qui veulent savoir avant l\'achat ce que LocalMCP expose à ce client, combien il coûte, comment fonctionne la confidentialité et quelles affirmations restent non confirmées.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test LocalMCP',
    targetKeywords: [
      'test localmcp',
      'localmcp app mac',
      'serveur mcp pour mac',
      'mcp apple mail calendrier notes',
      'serveur mcp local macos',
      'localmcp confidentialité',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP (version 1.5.1, mise à jour le 22 octobre 2026) est une app du Mac App Store à 4,99 € qui exécute un serveur MCP local et ne donne à votre client IA que les sources de données du Mac que vous autorisez ; c\'est un connecteur, pas un assistant ni un modèle.** Chaque affirmation provient de la fiche et du développeur ; PromptQuorum n\'a ni installé ni testé l\'application.',
    quickAnswerTop: {
      fr: {
        question: 'Que fait LocalMCP ?',
        answer:
          'Il lance un serveur MCP sur votre Mac. Un client IA compatible, comme Claude Code ou un client avec un modèle local, peut alors rechercher dans les apps et dossiers Apple que vous autorisez. Il vous faut tout de même votre propre client MCP.',
        bullets: [
          'Recherche dans Mail, Calendrier, Contacts, Rappels et Notes, selon la description de l\'App Store.',
          'Lit les métadonnées de photos et traite des enregistrements vocaux locaux d\'un dossier que vous choisissez.',
          'Les modifications des rappels, du calendrier et des Raccourcis sont facultatives et exigent des réglages distincts.',
          'Exécute des outils de texte comme les résumés avec le modèle de langage local d\'Apple sur les Mac compatibles.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que LocalMCP ?', anchor: 'what-is-localmcp' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Ce qu’il vous faut', anchor: 'requirements' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Ce que voit votre client', anchor: 'data-access' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP est une app du Mac App Store qui exécute un serveur MCP local pour qu\'un client IA puisse rechercher dans votre Mail, Calendrier, Contacts, Rappels et Notes.' },
          { type: 'plain-terms', text: 'Vous l\'achetez une fois, autorisez chaque source dans macOS, puis collez son jeton de connexion dans le client IA que vous utilisez déjà.' },
        ],
        items: [
          'Maintenance : l\'App Store affiche la version 1.5.1 publiée le 22 octobre 2026, quatre jours après la première version ; aucun avertissement de projet abandonné ne s\'applique.',
          'Licence : propriétaire et non open source ; aucun dépôt de code source n\'a été trouvé.',
          'Coût : achat unique, 4,99 € sur le store français ; le client IA connecté est à part.',
          'Maturité : première version le 18 octobre 2026, pas encore de notes d\'utilisateurs.',
          'Base : la fiche de l\'App Store et la page du développeur, lues le 24 octobre 2026, sans test pratique.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum n\'a ni installé, ni testé, ni audité LocalMCP. Les affirmations ci-dessous sur le contrôle d\'accès et la confidentialité sont celles du développeur.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'Qu’est-ce que LocalMCP ?',
        content: [
          '**LocalMCP est une app Mac de Mobile Box - App Consulting UG (haftungsbeschränkt) qui exécute un serveur local parlant le Model Context Protocol (MCP), le standard ouvert par lequel les clients IA se connectent à des outils et à des données.** La [page produit du développeur](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) la décrit comme un pont entre votre Mac et un client compatible de votre choix, qui n\'expose que les sources que vous libérez.',
          'Ce n\'est pas une app de chat et elle n\'embarque aucun modèle pour discuter. Le travail d\'IA se fait dans le client connecté, par exemple Claude Code ou un client avec un modèle local. Les outils de texte propres à LocalMCP, comme les résumés ou les listes à puces, utilisent le modèle de langage d\'Apple sur l\'appareil, sur les Mac compatibles.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**LocalMCP n\'est vendu que sur le Mac App Store ; il n\'existe ni téléchargement séparé, ni version d\'essai, ni code source.**',
        ],
        columns: ['Option', 'Lien'],
        rows: [
          { 'Option': 'macOS 15.0 ou ultérieur (Mac App Store)', 'Lien': '[LocalMCP sur le Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'Option': 'Site web', 'Lien': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'Option': 'Politique de confidentialité', 'Lien': '[Politique de confidentialité de Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'Option': 'Code source', 'Lien': 'Introuvable' },
        ],
        note: 'Version examinée : 1.5.1, publiée le 22 octobre 2026 selon l\'App Store, soit la dernière mise à jour en amont au moment de la vérification. Le site indiqué dans la fiche de l\'App Store (une adresse github.io) renvoyait une page 404 le 24 octobre 2026 ; le tableau renvoie donc vers la page produit du développeur. La politique de confidentialité est la page générale de l\'entreprise ; ce test n\'y a trouvé aucune section nommant LocalMCP.',
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**LocalMCP exige macOS 15.0 ou ultérieur et un client IA distinct compatible MCP.** Les fonctions du modèle de langage local d\'Apple demandent davantage.',
        ],
        columns: ['Élément', 'Selon la fiche'],
        rows: [
          { 'Élément': 'macOS', 'Selon la fiche': '15.0 ou ultérieur' },
          { 'Élément': 'Client IA', 'Selon la fiche': 'Un client MCP compatible est requis' },
          { 'Élément': 'Outils de texte locaux', 'Selon la fiche': 'macOS 26 ou ultérieur, matériel compatible, Apple Intelligence activée' },
          { 'Élément': 'Taille du téléchargement', 'Selon la fiche': 'Environ 4 Mo' },
          { 'Élément': 'Langues', 'Selon la fiche': 'Anglais et allemand' },
          { 'Élément': 'Compte', 'Selon la fiche': 'Aucune connexion supplémentaire' },
        ],
        note: 'Selon le développeur, l\'étendue des fonctions dépend de la version de macOS, de la langue, de la disponibilité du modèle et des autorisations accordées. Aucun minimum de mémoire ou de processeur n\'est indiqué.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**LocalMCP coûte 4,99 € en achat unique sur le Mac App Store français, selon la fiche et la page du développeur.**',
        ],
        columns: ['Élément', 'Coût (EUR)'],
        rows: [
          { 'Élément': 'LocalMCP (achat unique)', 'Coût (EUR)': '4,99 € (store français)' },
          { 'Élément': 'Client IA connecté', 'Coût (EUR)': 'Facturé séparément' },
        ],
        note: 'Lu sur la fiche française le 24 octobre 2026. Les sources ne mentionnent aucun abonnement ; consultez la page du store pour les conditions actuelles.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent la description de l\'assistant d\'installation par le développeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Vérifier le Mac et le client',
            whyItMatters: 'Il faut macOS 15.0 ou ultérieur et un client compatible MCP ; les outils de texte locaux d\'Apple exigent en plus macOS 26.',
          },
          {
            title: 'Acheter et ouvrir l\'app',
            whyItMatters: 'Installez LocalMCP depuis le Mac App Store et lancez l\'assistant d\'installation.',
          },
          {
            title: 'Libérer les sources de données',
            whyItMatters: 'Sélectionnez des boîtes aux lettres directement dans Apple Mail et autorisez chaque source dans la boîte de dialogue de macOS ; les sources indisponibles peuvent être ignorées.',
          },
          {
            title: 'Connecter le client',
            whyItMatters: 'Copiez le jeton MCP et la configuration correspondante depuis la page de connexion vers votre client IA ; des vérifications intégrées aident à confirmer l\'accès local.',
          },
          {
            title: 'Revoir les droits d\'écriture',
            whyItMatters: 'Les modifications des rappels et du calendrier ainsi que vos propres Raccourcis sont des réglages distincts, et chaque modification de rappel demande votre confirmation dans l\'app.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'Ce que voit votre client',
        content: [
          '**Selon la description de l\'App Store, un client connecté peut rechercher dans huit types de données du Mac, et toute écriture est facultative.**',
        ],
        columns: ['Source', 'Accès selon la fiche'],
        rows: [
          { 'Source': 'Mail', 'Accès selon la fiche': 'Recherche dans les boîtes choisies ; les messages ne sont jamais modifiés ni envoyés' },
          { 'Source': 'Calendrier', 'Accès selon la fiche': 'Recherche ; modifications facultatives, désactivées par défaut' },
          { 'Source': 'Contacts', 'Accès selon la fiche': 'Recherche' },
          { 'Source': 'Rappels', 'Accès selon la fiche': 'Recherche ; créer, modifier, terminer seulement si activé et confirmé' },
          { 'Source': 'Notes', 'Accès selon la fiche': 'Recherche' },
          { 'Source': 'Photos', 'Accès selon la fiche': 'Métadonnées uniquement' },
          { 'Source': 'Enregistrements vocaux', 'Accès selon la fiche': 'Dossier local de Dictaphone que vous choisissez' },
          { 'Source': 'Raccourcis', 'Accès selon la fiche': 'Vos propres Raccourcis ; facultatif, désactivé par défaut' },
        ],
        note: 'Les mémos vocaux demandent un dossier local déjà accessible, et les fichiers iCloud doivent être disponibles en local. La disponibilité dépend de vos autorisations.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la description de l\'App Store ou de la page du développeur.**',
        ],
        items: [
          '**Accès sélectif.** Les boîtes de dialogue d\'autorisation de macOS et les réglages de LocalMCP déterminent les sources qu\'un client peut atteindre.',
          '**Recherche Mail bornée.** Les boîtes choisies sont lues et interrogées par requêtes bornées, en lecture seule.',
          '**Écritures confirmées.** Quand la fenêtre principale est fermée, une fenêtre de confirmation dédiée s\'ouvre ; les requêtes refusées ou expirées renvoient un motif au client.',
          '**Outils de texte locaux.** Résumer, raccourcir, puces ou tâches, dans l\'app ou via le client, avec le modèle local d\'Apple.',
          '**Vue d\'état.** La page du développeur montre l\'état du serveur, les outils disponibles et vos autorisations dans une seule fenêtre.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon la fiche, LocalMCP n\'exige aucune connexion supplémentaire, utilise les sources déjà configurées sur votre Mac et n\'envoie aucun contenu à un serveur du développeur ; son étiquette de confidentialité de l\'App Store indique « Données non collectées ».**',
          'Les données quittent tout de même LocalMCP : l\'app transmet le contenu au client MCP que vous connectez, qui, selon le développeur, peut le traiter localement ou l\'envoyer à ses propres services. Votre confidentialité dépend donc du client. La fiche ajoute que sous macOS 27 existe une boîte de dialogue facultative d\'images dans le cloud d\'Apple, dont le traitement n\'est pas exclusivement local.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum n\'a audité ni le code ni le trafic réseau. Consultez les conditions de confidentialité du client que vous connectez.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les utilisateurs de Mac avec un client MCP** qui veulent qu\'un agent IA recherche dans leur propre Mail, Calendrier et Notes.',
          '**Les utilisateurs d\'un client avec modèle local** qui veulent rendre les données du Mac disponibles sans connecteur cloud.',
          '**Les utilisateurs prudents** qui veulent une autorisation par source et une confirmation avant toute modification.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Comportement réel.** PromptQuorum n\'a pas exécuté LocalMCP ; la qualité de recherche, la vitesse et la stabilité ne sont pas confirmées.',
          '**Compatibilité des clients.** Selon le développeur, la prise en charge et l\'installation varient selon le client ; aucun client n\'a été testé ici.',
          '**Pérennité et code.** L\'app n\'est pas open source, est sortie le 18 octobre 2026 et n\'a pas encore de notes.',
          '**Documentation.** La page d\'installation liée depuis le site du développeur pointe vers l\'adresse github.io qui renvoyait une page 404 le 24 octobre 2026.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Jarvis](/fr/power-local-llm/jarvis-mac-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Gratuit / open source', 'Différence clé': 'Assistant vocal macOS orienté hors ligne' },
          { 'Application': '[nanobot](/fr/power-local-llm/nanobot-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent auto-hébergé avec mémoire et outils MCP' },
          { 'Application': '[Odysseus](/fr/power-local-llm/odysseus-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / AGPL-3.0', 'Différence clé': 'Espace de travail auto-hébergé : chat, agents, documents' },
          { 'Application': '[Atomic Bot](/fr/power-local-llm/atomic-bot-review)', 'Plateformes': 'Bureau et mobile', 'Prix / licence': 'Freemium / MIT', 'Différence clé': 'Collègue IA basé sur la pile d\'agents OpenClaw' },
        ],
        note: 'LocalMCP fournit des données à un client sans être lui-même un assistant ; ces apps sont donc des voisines, pas des remplaçantes directes. Vérifiez prix, licence et plateformes de chaque app sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Mes données restent-elles sur mon Mac ?',
            a: 'Selon la fiche, LocalMCP lui-même n\'envoie rien à un serveur du développeur. Mais il transmet les résultats de recherche au client MCP connecté, et ce client peut utiliser un service cloud. Choisissez le client en conséquence.',
          },
          {
            q: 'Le client IA peut-il modifier mes données ?',
            a: 'Seulement si vous l\'autorisez. Mail est en lecture seule. Les modifications de rappels demandent un réglage distinct et une confirmation dans l\'app ; les modifications du calendrier et les Raccourcis sont désactivés par défaut.',
          },
          {
            q: 'Avec quels clients IA fonctionne-t-il ?',
            a: 'Le développeur cite des apps compatibles MCP comme Claude Code et des clients locaux avec modèles locaux, et précise que la prise en charge varie selon le client. PromptQuorum n\'en a testé aucun.',
          },
          {
            q: 'LocalMCP est-il open source ?',
            a: 'Aucun dépôt de code source n\'a été trouvé ; l\'app est donc considérée comme propriétaire. Les seuls points d\'accès sont la fiche du Mac App Store et la page du développeur.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMCP est une app du Mac App Store à 4,99 €, version 1.5.1 du 22 octobre 2026, qui expose Mail, Calendrier, Contacts, Rappels, Notes et plus encore à un client MCP de votre choix, avec écritures facultatives et sans serveur du développeur selon sa fiche. En contrepartie : non open source, vieille de quelques jours et sans notes, elle exige un client MCP distinct dont vous devez juger vous-même la confidentialité, et PromptQuorum n\'a rien testé.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMCP sur le Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — version, prix, prérequis, description et étiquette de confidentialité, consultés le 24 octobre 2026.',
          '[Page produit LocalMCP](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — description du développeur, explication de MCP et prérequis.',
          '[Politique de confidentialité de Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — la politique générale du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Jarvis](/fr/power-local-llm/jarvis-mac-review) — un assistant vocal macOS orienté hors ligne.',
          '[Test de nanobot](/fr/power-local-llm/nanobot-review) — un agent personnel auto-hébergé avec outils MCP.',
          '[Test d\'Odysseus](/fr/power-local-llm/odysseus-review) — un espace de travail local pour le chat, les agents et les documents.',
          '[Test d\'Atomic Bot](/fr/power-local-llm/atomic-bot-review) — un collègue IA de bureau basé sur la pile d\'agents OpenClaw.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-ja.webp',
    title: 'LocalMCPレビュー：Macのデータ向けローカルMCPサーバー',
    seoTitle: 'LocalMCPレビュー：Mac向けローカルMCPサーバー',
    intro:
      'LocalMCPは、ローカルのMCPサーバーを動かすMac App Storeの有料アプリです。接続したAIクライアントが、許可したソースに限ってメール・カレンダー・連絡先・リマインダー・メモを検索できます。このレビューは2026年10月24日時点のApp Store掲載情報と開発元の製品ページに基づいており、PromptQuorumはアプリを検証していません。',
    metaDescription:
      'LocalMCPレビュー：メール・カレンダー・メモ用のローカルMCPサーバーを備えたMacアプリ。価格、要件、プライバシー、未確認事項を整理します。',
    twitterDescription:
      'LocalMCPレビュー：¥600のMacアプリ。MCPクライアントがソースごとの許可でメール・カレンダー・メモを検索できます。設定、プライバシー、未確認事項。',
    audience:
      'MCP対応のAIクライアントを使うMacユーザーで、購入前にLocalMCPがクライアントへ何を公開するか、価格、プライバシーの仕組み、未確認の主張を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMCP レビュー',
    targetKeywords: [
      'localmcp レビュー',
      'localmcp mac アプリ',
      'mac mcp サーバー',
      'mcp apple メール カレンダー メモ',
      'ローカル mcp サーバー macos',
      'localmcp プライバシー',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP（バージョン1.5.1、2026年10月22日更新）は、ローカルMCPサーバーを動かすMac App Storeの¥600のアプリで、許可したMacのデータソースだけをAIクライアントに渡します。アシスタントでもモデルでもなく、接続役です。** 記載内容はすべて掲載情報と開発元によるもので、PromptQuorumはインストールも検証もしていません。',
    quickAnswerTop: {
      ja: {
        question: 'LocalMCPは何をするアプリですか？',
        answer:
          'Mac上でMCPサーバーを起動します。Claude Codeやローカルモデルを使うクライアントなど、対応するAIクライアントが、許可したAppleのアプリやフォルダを検索できます。MCPクライアントは別途必要です。',
        bullets: [
          'App Storeの説明によると、メール、カレンダー、連絡先、リマインダー、メモを検索します。',
          '写真のメタデータを読み取り、選んだフォルダのローカルな音声録音を扱います。',
          'リマインダー・カレンダー・ショートカットの変更は任意で、個別にオンにする必要があります。',
          '対応Macでは、Appleのローカル言語モデルで要約などのテキストツールを実行します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LocalMCPとは', anchor: 'what-is-localmcp' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要な環境', anchor: 'requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: '始め方', anchor: 'getting-started' },
      { label: 'クライアントに公開される内容', anchor: 'data-access' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCPは、ローカルのMCPサーバーを動かし、AIクライアントがメール・カレンダー・連絡先・リマインダー・メモを検索できるようにするMac App Storeのアプリです。' },
          { type: 'plain-terms', text: '一度購入し、macOSで各データソースを許可して、普段使っているAIクライアントに接続トークンを貼り付けます。' },
        ],
        items: [
          'メンテナンス：App Storeには初回リリースの4日後にあたる2026年10月22日公開のバージョン1.5.1が表示されており、更新停止の警告は該当しません。',
          'ライセンス：プロプライエタリのクローズドソースで、ソースコードのリポジトリは見つかりませんでした。',
          '費用：買い切りで、日本のストアでは¥600です。接続するAIクライアントは別料金です。',
          '成熟度：2026年10月18日に初公開されたばかりで、ユーザー評価はまだありません。',
          '根拠：2026年10月24日に確認したApp Storeの掲載情報と開発元のページで、実機での検証はありません。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorumはLocalMCPをインストール・検証・監査していません。以下のアクセス制御とプライバシーに関する記述は開発元の説明です。' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'LocalMCPとは',
        content: [
          '**LocalMCPは、Mobile Box - App Consulting UG (haftungsbeschränkt)が提供するMacアプリで、Model Context Protocol（MCP）を話すローカルサーバーを動かします。MCPはAIクライアントがツールやデータにつながるためのオープンな標準です。** [開発元の製品ページ](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)は、Macと好みの対応クライアントをつなぐ橋渡しで、公開したソースだけを提供すると説明しています。',
          'チャットアプリではなく、会話用のモデルも含みません。AIの処理は接続したクライアント（たとえばClaude Codeやローカルモデルのクライアント）で行われます。LocalMCP自身の要約や箇条書きなどのテキストツールは、対応Macでデバイス上のAppleの言語モデルを使います。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LocalMCPはMac App Storeでのみ販売されており、別途ダウンロードや試用版、ソースコードはありません。**',
        ],
        columns: ['項目', 'リンク'],
        rows: [
          { '項目': 'macOS 15.0以降（Mac App Store）', 'リンク': '[Mac App StoreのLocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { '項目': 'ウェブサイト', 'リンク': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { '項目': 'プライバシーポリシー', 'リンク': '[Mobile Boxのプライバシーポリシー](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { '項目': 'ソースコード', 'リンク': '見つかりませんでした' },
        ],
        note: '確認したバージョン：1.5.1。App Storeによると2026年10月22日公開で、確認時点での最新の上流アップデートです。App Storeの掲載情報に記載のウェブサイト（github.ioのアドレス）は2026年10月24日に404ページを返したため、表には開発元自身の製品ページをリンクしています。プライバシーポリシーは開発元の会社全体のページで、本レビューではLocalMCPに言及する項目は見つかりませんでした。',
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**LocalMCPにはmacOS 15.0以降と、別途MCP対応のAIクライアントが必要です。** Appleのローカル言語モデルの機能には、さらに条件があります。',
        ],
        columns: ['項目', '掲載情報の記載'],
        rows: [
          { '項目': 'macOS', '掲載情報の記載': '15.0以降' },
          { '項目': 'AIクライアント', '掲載情報の記載': '対応するMCPクライアントが必要' },
          { '項目': 'ローカルのテキストツール', '掲載情報の記載': 'macOS 26以降、対応ハードウェア、Apple Intelligenceがオン' },
          { '項目': 'ダウンロードサイズ', '掲載情報の記載': '約4 MB' },
          { '項目': '言語', '掲載情報の記載': '英語とドイツ語' },
          { '項目': 'アカウント', '掲載情報の記載': '追加のログインは不要' },
        ],
        note: '開発元によると、機能の範囲はmacOSのバージョン、言語、モデルの利用可否、付与した許可によって変わります。メモリやプロセッサの最小要件は記載されていません。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**LocalMCPは、掲載情報と開発元のページによると、日本のMac App Storeで買い切り¥600です。**',
        ],
        columns: ['項目', '費用（JPY）'],
        rows: [
          { '項目': 'LocalMCP（買い切り）', '費用（JPY）': '¥600（日本のストア）' },
          { '項目': '接続するAIクライアント', '費用（JPY）': '別料金' },
        ],
        note: '2026年10月24日に日本の掲載ページで確認しました。情報源にサブスクリプションの記載はありません。最新の条件はストアのページでご確認ください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順は開発元によるセットアップアシスタントの説明に沿っています。PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'Macとクライアントを確認',
            whyItMatters: 'macOS 15.0以降とMCP対応クライアントが必要です。AppleのローカルテキストツールにはさらにmacOS 26が必要です。',
          },
          {
            title: 'アプリを購入して開く',
            whyItMatters: 'Mac App StoreからLocalMCPをインストールし、セットアップアシスタントを起動します。',
          },
          {
            title: 'データソースを許可',
            whyItMatters: 'Apple Mailからメールボックスを直接選び、macOSの許可ダイアログで各ソースを承認します。利用できないソースはスキップできます。',
          },
          {
            title: 'クライアントを接続',
            whyItMatters: '接続ページのMCPトークンと対応する設定をAIクライアントにコピーします。内蔵のチェックでローカルアクセスを確認できます。',
          },
          {
            title: '書き込み権限を確認',
            whyItMatters: 'リマインダーとカレンダーの変更、自分のショートカットは個別のスイッチで、リマインダーの変更ごとにアプリでの確認が必要です。',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'クライアントに公開される内容',
        content: [
          '**App Storeの説明によると、接続したクライアントは8種類のMacデータを検索でき、書き込みはすべて任意です。**',
        ],
        columns: ['ソース', '掲載情報のアクセス内容'],
        rows: [
          { 'ソース': 'メール', '掲載情報のアクセス内容': '選んだメールボックスを検索。メッセージの変更・送信はなし' },
          { 'ソース': 'カレンダー', '掲載情報のアクセス内容': '検索。変更は任意でデフォルトはオフ' },
          { 'ソース': '連絡先', '掲載情報のアクセス内容': '検索' },
          { 'ソース': 'リマインダー', '掲載情報のアクセス内容': '検索。作成・更新・完了は有効化と確認が必要' },
          { 'ソース': 'メモ', '掲載情報のアクセス内容': '検索' },
          { 'ソース': '写真', '掲載情報のアクセス内容': 'メタデータのみ' },
          { 'ソース': '音声録音', '掲載情報のアクセス内容': '選んだボイスメモのローカルフォルダ' },
          { 'ソース': 'ショートカット', '掲載情報のアクセス内容': '自分のショートカット。任意でデフォルトはオフ' },
        ],
        note: 'ボイスメモにはすでにアクセス可能なローカルフォルダが必要で、iCloudのファイルはローカルで利用できる状態である必要があります。利用可否は許可の内容によって変わります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてApp Storeの説明または開発元のページに基づきます。**',
        ],
        items: [
          '**選択的なアクセス。** macOSの許可ダイアログとLocalMCPの設定が、クライアントが到達できるソースを決めます。',
          '**範囲を限定したメール検索。** 選んだメールボックスを、読み取り専用で範囲を限定したリクエストにより検索します。',
          '**確認付きの書き込み。** メインウィンドウを閉じていると専用の確認ウィンドウが開き、拒否やタイムアウトの場合は理由がクライアントに返ります。',
          '**ローカルのテキストツール。** 要約、短縮、箇条書き、タスク化を、アプリ内またはクライアント経由でAppleのローカルモデルが行います。',
          '**状態の表示。** 開発元のページでは、サーバーの状態、利用可能なツール、許可の内容を1つのウィンドウで確認できます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**掲載情報によると、LocalMCPは追加のログインが不要で、Macにすでに設定されたソースを使い、開発元のバックエンドにはコンテンツを送りません。App Storeのプライバシー表示は「データの収集なし」です。**',
          'ただし、データはLocalMCPの外に出ます。アプリは接続したMCPクライアントにコンテンツを渡し、開発元の説明ではクライアントがそれをローカルで処理することも、自社のサービスに送ることもあります。そのためプライバシーはクライアント次第です。掲載情報には、macOS 27向けにAppleのクラウドを使う任意の画像ダイアログがあり、その処理は完全にローカルではないとも記載されています。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorumはコードもネットワーク通信も監査していません。接続するクライアントのプライバシー条件をご確認ください。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**MCPクライアントを使うMacユーザー**で、AIエージェントに自分のメール・カレンダー・メモを検索させたい方。',
          '**ローカルモデルのクライアントを使う方**で、クラウドのコネクタなしでMacのデータを利用したい方。',
          '**慎重なユーザー**で、ソースごとの許可と、変更前の確認ステップを求める方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の動作。** PromptQuorumはLocalMCPを動かしていないため、検索の品質、速度、安定性は未確認です。',
          '**クライアントとの互換性。** 開発元によると、対応状況と設定はクライアントごとに異なります。ここではどのクライアントも検証していません。',
          '**継続性とコード。** クローズドソースで、2026年10月18日に初公開されたばかりで、評価もまだありません。',
          '**ドキュメント。** 開発元のサイトからリンクされている設定ページは、2026年10月24日に404を返したgithub.ioのアドレスを指しています。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Jarvis](/ja/power-local-llm/jarvis-mac-review)', '対応プラットフォーム': 'macOS', '価格／ライセンス': '無料／オープンソース', '主な違い': 'オフライン重視のmacOS向け音声アシスタント' },
          { 'アプリ': '[nanobot](/ja/power-local-llm/nanobot-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '記憶とMCPツールを備えたセルフホスト型エージェント' },
          { 'アプリ': '[Odysseus](/ja/power-local-llm/odysseus-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／AGPL-3.0', '主な違い': 'チャット・エージェント・文書のセルフホスト型ワークスペース' },
          { 'アプリ': '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)', '対応プラットフォーム': 'デスクトップとモバイル', '価格／ライセンス': 'フリーミアム／MIT', '主な違い': 'OpenClawエージェント基盤のAI同僚' },
        ],
        note: 'LocalMCPはアシスタントではなくクライアントにデータを渡す役割なので、これらは隣接する製品であり、そのまま置き換えられるものではありません。各アプリの最新の価格、ライセンス、対応プラットフォームはそれぞれの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'データはMacの中にとどまりますか？',
            a: '掲載情報によると、LocalMCP自体は開発元のバックエンドに何も送りません。ただし検索結果は接続したMCPクライアントに渡り、そのクライアントがクラウドサービスを使う場合があります。クライアントはそれを踏まえて選んでください。',
          },
          {
            q: 'AIクライアントはデータを変更できますか？',
            a: '許可した場合のみです。メールは読み取り専用です。リマインダーの変更は個別のスイッチとアプリでの確認が必要で、カレンダーの変更とショートカットはデフォルトでオフです。',
          },
          {
            q: 'どのAIクライアントで使えますか？',
            a: '開発元はClaude CodeなどのMCP対応アプリや、ローカルモデルを使うローカルクライアントを挙げ、対応状況はクライアントごとに異なると述べています。PromptQuorumはどれも検証していません。',
          },
          {
            q: 'LocalMCPはオープンソースですか？',
            a: 'ソースコードのリポジトリは見つからなかったため、プロプライエタリとして扱っています。入手先はMac App Storeの掲載ページと開発元のページだけです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'LocalMCPは、2026年10月22日更新のバージョン1.5.1がある¥600のMac App Storeアプリで、掲載情報によれば、任意の書き込みと開発元バックエンドなしで、メール・カレンダー・連絡先・リマインダー・メモなどを選んだMCPクライアントに公開します。一方で、クローズドソースで公開から数日、評価もなく、プライバシーを自分で判断すべき別のMCPクライアントが必要で、PromptQuorumは何も検証していません。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Mac App StoreのLocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — バージョン、価格、要件、説明、プライバシー表示。2026年10月24日に確認。',
          '[LocalMCP製品ページ](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — 開発元による説明、MCPの解説、要件。',
          '[Mobile Boxのプライバシーポリシー](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — 開発元の会社全体のポリシー。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Jarvisレビュー](/ja/power-local-llm/jarvis-mac-review) — オフライン重視のmacOS向け音声アシスタント。',
          '[nanobotレビュー](/ja/power-local-llm/nanobot-review) — MCPツールを備えたセルフホスト型のパーソナルエージェント。',
          '[Odysseusレビュー](/ja/power-local-llm/odysseus-review) — チャット・エージェント・文書のためのローカルファーストなワークスペース。',
          '[Atomic Botレビュー](/ja/power-local-llm/atomic-bot-review) — OpenClawエージェント基盤によるデスクトップAI同僚。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-pt.webp',
    title: 'Análise do LocalMCP: um servidor MCP local para os dados do seu Mac',
    seoTitle: 'Análise do LocalMCP: servidor MCP local para Mac',
    intro:
      'O LocalMCP é um app pago da Mac App Store que executa um servidor MCP local, para que um cliente de IA conectado possa pesquisar seu Mail, Calendário, Contatos, Lembretes e Notas, apenas nas fontes que você aprovar. Esta análise reflete a página da App Store e a página do produto do desenvolvedor, consultadas em 24 de outubro de 2026; a PromptQuorum não testou o app.',
    metaDescription:
      'Análise do LocalMCP: app de Mac com servidor MCP local para Mail, Calendário e Notas. Preço, requisitos, privacidade e o que não conseguimos verificar.',
    twitterDescription:
      'Análise do LocalMCP: um app de Mac de R$ 24,90 que deixa seu cliente MCP pesquisar Mail, Calendário e Notas com aprovação por fonte. Configuração, privacidade, dúvidas.',
    audience:
      'Usuários de Mac com um cliente de IA compatível com MCP que querem saber, antes de comprar, o que o LocalMCP expõe a esse cliente, quanto custa, como funciona a privacidade e quais afirmações seguem sem confirmação.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise LocalMCP',
    targetKeywords: [
      'análise localmcp',
      'localmcp app mac',
      'servidor mcp para mac',
      'mcp apple mail calendário notas',
      'servidor mcp local macos',
      'localmcp privacidade',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**O LocalMCP (versão 1.5.1, atualizada em 22 de outubro de 2026) é um app da Mac App Store de R$ 24,90 que executa um servidor MCP local e entrega ao seu cliente de IA apenas as fontes de dados do Mac que você aprovar; é um conector, não um assistente nem um modelo.** Cada afirmação vem da página do app e do desenvolvedor; a PromptQuorum não instalou nem testou o app.',
    quickAnswerTop: {
      pt: {
        question: 'O que o LocalMCP faz?',
        answer:
          'Ele inicia um servidor MCP no seu Mac. Um cliente de IA compatível, como o Claude Code ou um cliente com modelo local, pode então pesquisar os apps e as pastas da Apple que você autorizar. Você ainda precisa do seu próprio cliente MCP.',
        bullets: [
          'Pesquisa Mail, Calendário, Contatos, Lembretes e Notas, segundo a descrição da App Store.',
          'Lê metadados de fotos e trabalha com gravações de voz locais de uma pasta que você escolher.',
          'Alterações em lembretes, calendário e Atalhos são opcionais e exigem chaves separadas.',
          'Executa ferramentas de texto, como resumos, com o modelo de linguagem local da Apple em Macs compatíveis.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LocalMCP?', anchor: 'what-is-localmcp' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'O que você precisa', anchor: 'requirements' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'O que seu cliente enxerga', anchor: 'data-access' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'O LocalMCP é um app da Mac App Store que executa um servidor MCP local para que um cliente de IA pesquise seu Mail, Calendário, Contatos, Lembretes e Notas.' },
          { type: 'plain-terms', text: 'Você compra uma vez, aprova cada fonte de dados no macOS e cola o token de conexão no cliente de IA que já usa.' },
        ],
        items: [
          'Manutenção: a App Store mostra a versão 1.5.1 publicada em 22 de outubro de 2026, quatro dias após o primeiro lançamento, então nenhum aviso de projeto abandonado se aplica.',
          'Licença: proprietária e de código fechado; nenhum repositório de código-fonte foi encontrado.',
          'Custo: compra única, R$ 24,90 na loja brasileira; o cliente de IA conectado é à parte.',
          'Maturidade: lançado em 18 de outubro de 2026 e ainda sem avaliações de usuários.',
          'Base: a página da App Store e a página do desenvolvedor, lidas em 24 de outubro de 2026, sem teste prático.',
        ],
        callouts: [
          { type: 'note', text: 'A PromptQuorum não instalou, testou nem auditou o LocalMCP. As afirmações abaixo sobre controle de acesso e privacidade são do próprio desenvolvedor.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'O que é o LocalMCP?',
        content: [
          '**O LocalMCP é um app de Mac da Mobile Box - App Consulting UG (haftungsbeschränkt) que executa um servidor local que fala o Model Context Protocol (MCP), o padrão aberto pelo qual clientes de IA se conectam a ferramentas e dados.** A [página do produto do desenvolvedor](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) o descreve como uma ponte entre seu Mac e um cliente compatível de sua escolha, expondo apenas as fontes que você liberar.',
          'Não é um app de chat e não traz um modelo para conversar. O trabalho de IA acontece no cliente que você conecta, por exemplo o Claude Code ou um cliente com modelo local. As ferramentas de texto do próprio LocalMCP, como resumos ou tópicos, usam o modelo de linguagem da Apple no dispositivo em Macs compatíveis.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O LocalMCP é vendido apenas pela Mac App Store; não há download separado, versão de teste nem código-fonte.**',
        ],
        columns: ['Opção', 'Link'],
        rows: [
          { 'Opção': 'macOS 15.0 ou posterior (Mac App Store)', 'Link': '[LocalMCP na Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'Opção': 'Site', 'Link': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'Opção': 'Política de privacidade', 'Link': '[Política de privacidade da Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'Opção': 'Código-fonte', 'Link': 'Não encontrado' },
        ],
        note: 'Versão analisada: 1.5.1, publicada em 22 de outubro de 2026 segundo a App Store, a última atualização do projeto no momento da verificação. O site citado na página da App Store (um endereço github.io) devolveu uma página 404 em 24 de outubro de 2026, por isso a tabela aponta para a página do produto do próprio desenvolvedor. A política de privacidade é a página geral da empresa; esta análise não encontrou nela uma seção que cite o LocalMCP.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O LocalMCP exige macOS 15.0 ou posterior e um cliente de IA compatível com MCP, à parte.** Os recursos do modelo de linguagem local da Apple exigem mais.',
        ],
        columns: ['Item', 'Segundo a página do app'],
        rows: [
          { 'Item': 'macOS', 'Segundo a página do app': '15.0 ou posterior' },
          { 'Item': 'Cliente de IA', 'Segundo a página do app': 'É necessário um cliente MCP compatível' },
          { 'Item': 'Ferramentas de texto locais', 'Segundo a página do app': 'macOS 26 ou posterior, hardware compatível, Apple Intelligence ativada' },
          { 'Item': 'Tamanho do download', 'Segundo a página do app': 'Cerca de 4 MB' },
          { 'Item': 'Idiomas', 'Segundo a página do app': 'Inglês e alemão' },
          { 'Item': 'Conta', 'Segundo a página do app': 'Sem login adicional' },
        ],
        note: 'Segundo o desenvolvedor, os recursos dependem da versão do macOS, do idioma, da disponibilidade do modelo e das permissões que você conceder. Nenhum mínimo de memória ou de processador é informado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O LocalMCP custa R$ 24,90 em compra única na Mac App Store brasileira, segundo a página do app e a do desenvolvedor.**',
        ],
        columns: ['Item', 'Custo (BRL)'],
        rows: [
          { 'Item': 'LocalMCP (compra única)', 'Custo (BRL)': 'R$ 24,90 (loja brasileira)' },
          { 'Item': 'Cliente de IA conectado', 'Custo (BRL)': 'Cobrado à parte' },
        ],
        note: 'Lido na página brasileira em 24 de outubro de 2026. As fontes não citam assinatura; consulte a página da loja para as condições atuais.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a descrição que o desenvolvedor faz do assistente de configuração; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Verifique seu Mac e o cliente',
            whyItMatters: 'Você precisa de macOS 15.0 ou posterior e de um cliente compatível com MCP; as ferramentas de texto locais da Apple exigem ainda o macOS 26.',
          },
          {
            title: 'Compre e abra o app',
            whyItMatters: 'Instale o LocalMCP pela Mac App Store e inicie o assistente de configuração.',
          },
          {
            title: 'Libere as fontes de dados',
            whyItMatters: 'Selecione caixas de correio direto no Apple Mail e aprove cada fonte na caixa de diálogo de permissão do macOS; fontes indisponíveis podem ser puladas.',
          },
          {
            title: 'Conecte o cliente',
            whyItMatters: 'Copie o token MCP e a configuração correspondente da página de conexão para o seu cliente de IA; verificações integradas ajudam a confirmar o acesso local.',
          },
          {
            title: 'Revise as permissões de escrita',
            whyItMatters: 'Alterações em lembretes e calendário e os seus próprios Atalhos são chaves separadas, e cada alteração em lembretes precisa da sua confirmação no app.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'O que seu cliente enxerga',
        content: [
          '**Segundo a descrição da App Store, um cliente conectado pode pesquisar oito tipos de dados do Mac, e toda escrita é opcional.**',
        ],
        columns: ['Fonte', 'Acesso segundo a página'],
        rows: [
          { 'Fonte': 'Mail', 'Acesso segundo a página': 'Pesquisa em caixas escolhidas; mensagens nunca são alteradas nem enviadas' },
          { 'Fonte': 'Calendário', 'Acesso segundo a página': 'Pesquisa; alterações opcionais, desativadas por padrão' },
          { 'Fonte': 'Contatos', 'Acesso segundo a página': 'Pesquisa' },
          { 'Fonte': 'Lembretes', 'Acesso segundo a página': 'Pesquisa; criar, editar e concluir só se ativado e confirmado' },
          { 'Fonte': 'Notas', 'Acesso segundo a página': 'Pesquisa' },
          { 'Fonte': 'Fotos', 'Acesso segundo a página': 'Somente metadados' },
          { 'Fonte': 'Gravações de voz', 'Acesso segundo a página': 'Pasta local de Gravador de Voz que você escolher' },
          { 'Fonte': 'Atalhos', 'Acesso segundo a página': 'Seus próprios Atalhos; opcional, desativado por padrão' },
        ],
        note: 'Os memorandos de voz exigem uma pasta local já acessível, e os arquivos do iCloud precisam estar disponíveis localmente. A disponibilidade depende das suas permissões.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição da App Store ou da página do desenvolvedor.**',
        ],
        items: [
          '**Acesso seletivo.** As caixas de permissão do macOS e as configurações do LocalMCP decidem quais fontes um cliente alcança.',
          '**Pesquisa limitada no Mail.** As caixas escolhidas são lidas e pesquisadas com solicitações limitadas, somente leitura.',
          '**Escritas confirmadas.** Com a janela principal fechada, abre-se uma janela de confirmação própria; solicitações recusadas ou expiradas devolvem um motivo ao cliente.',
          '**Ferramentas de texto locais.** Resumir, encurtar, tópicos ou tarefas, no app ou pelo cliente, com o modelo local da Apple.',
          '**Visão de status.** A página do desenvolvedor mostra o status do servidor, as ferramentas disponíveis e suas permissões em uma só janela.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo a página do app, o LocalMCP não exige login adicional, usa fontes já configuradas no seu Mac e não envia conteúdo a um servidor do desenvolvedor; o rótulo de privacidade da App Store diz “Dados não coletados”.**',
          'Mesmo assim, os dados saem do LocalMCP: o app repassa o conteúdo ao cliente MCP que você conecta, que, nas palavras do desenvolvedor, pode processá-lo localmente ou enviá-lo a seus próprios serviços. Sua privacidade depende, portanto, do cliente. A página acrescenta que no macOS 27 existe uma caixa de diálogo opcional de imagens na nuvem da Apple, cujo processamento não é exclusivamente local.',
        ],
        callouts: [
          { type: 'note', text: 'A PromptQuorum não auditou o código nem o tráfego de rede. Confira os termos de privacidade do cliente que você conectar.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Mac com um cliente MCP** que querem que um agente de IA pesquise o próprio Mail, Calendário e Notas.',
          '**Quem usa um cliente com modelo local** e quer os dados do Mac disponíveis sem um conector na nuvem.',
          '**Usuários cautelosos** que querem aprovação por fonte e uma etapa de confirmação antes de qualquer alteração.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Comportamento real.** A PromptQuorum não executou o LocalMCP, então qualidade de busca, velocidade e estabilidade não estão confirmadas.',
          '**Compatibilidade de clientes.** Segundo o desenvolvedor, suporte e configuração variam por cliente; nenhum foi testado aqui.',
          '**Longevidade e código.** O app é de código fechado, foi lançado em 18 de outubro de 2026 e ainda não tem avaliações.',
          '**Documentação.** A página de configuração linkada no site do desenvolvedor aponta para o endereço github.io que devolveu uma página 404 em 24 de outubro de 2026.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Jarvis](/pt/power-local-llm/jarvis-mac-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Grátis / código aberto', 'Diferença principal': 'Assistente de voz para macOS voltado ao uso offline' },
          { 'App': '[nanobot](/pt/power-local-llm/nanobot-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Agente auto-hospedado com memória e ferramentas MCP' },
          { 'App': '[Odysseus](/pt/power-local-llm/odysseus-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / AGPL-3.0', 'Diferença principal': 'Espaço auto-hospedado para chat, agentes e documentos' },
          { 'App': '[Atomic Bot](/pt/power-local-llm/atomic-bot-review)', 'Plataformas': 'Desktop e celular', 'Preço / licença': 'Freemium / MIT', 'Diferença principal': 'Colega de IA baseado na stack de agentes OpenClaw' },
        ],
        note: 'O LocalMCP fornece dados a um cliente em vez de ser um assistente; esses apps são vizinhos, não substitutos diretos. Confirme preço, licença e plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Meus dados ficam no meu Mac?',
            a: 'Segundo a página do app, o próprio LocalMCP não envia nada a um servidor do desenvolvedor. Mas ele repassa os resultados de busca ao cliente MCP que você conecta, e esse cliente pode usar um serviço na nuvem. Escolha o cliente de acordo.',
          },
          {
            q: 'O cliente de IA pode alterar meus dados?',
            a: 'Somente se você permitir. O Mail é somente leitura. Alterações em lembretes exigem uma chave separada e confirmação no app; alterações no calendário e Atalhos ficam desativados por padrão.',
          },
          {
            q: 'Com quais clientes de IA funciona?',
            a: 'O desenvolvedor cita apps compatíveis com MCP, como o Claude Code, e clientes locais com modelos locais, e diz que o suporte varia por cliente. A PromptQuorum não testou nenhum.',
          },
          {
            q: 'O LocalMCP é de código aberto?',
            a: 'Nenhum repositório de código-fonte foi encontrado, então ele é tratado como proprietário. Os únicos lugares para obtê-lo são a página da Mac App Store e a do desenvolvedor.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O LocalMCP é um app da Mac App Store de R$ 24,90, versão 1.5.1 atualizada em 22 de outubro de 2026, que expõe Mail, Calendário, Contatos, Lembretes, Notas e mais a um cliente MCP de sua escolha, com escritas opcionais e sem servidor do desenvolvedor segundo a página do app. Em contrapartida: é de código fechado, tem poucos dias e nenhuma avaliação, exige um cliente MCP à parte cuja privacidade você mesmo deve avaliar, e a PromptQuorum não testou nada.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LocalMCP na Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — versão, preço, requisitos, descrição e rótulo de privacidade, consultados em 24 de outubro de 2026.',
          '[Página do produto LocalMCP](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — descrição do desenvolvedor, explicação do MCP e requisitos.',
          '[Política de privacidade da Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — a política geral do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Jarvis](/pt/power-local-llm/jarvis-mac-review) — um assistente de voz para macOS voltado ao uso offline.',
          '[Análise do nanobot](/pt/power-local-llm/nanobot-review) — um agente pessoal auto-hospedado com ferramentas MCP.',
          '[Análise do Odysseus](/pt/power-local-llm/odysseus-review) — um espaço de trabalho local para chat, agentes e documentos.',
          '[Análise do Atomic Bot](/pt/power-local-llm/atomic-bot-review) — um colega de IA para desktop baseado na stack de agentes OpenClaw.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-ar.webp',
    title: 'مراجعة LocalMCP: خادم MCP محلي لبيانات جهاز Mac',
    seoTitle: 'مراجعة LocalMCP: خادم MCP محلي لبيانات أجهزة Mac',
    intro:
      'LocalMCP تطبيق مدفوع من Mac App Store يشغّل خادم MCP محليًا، فيتمكن عميل الذكاء الاصطناعي الذي تربطه من البحث في Mail والتقويم وجهات الاتصال والتذكيرات والملاحظات، في المصادر التي توافق عليها فقط. تعكس هذه المراجعة صفحة App Store وصفحة المنتج لدى المطوّر كما فُحصتا في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق.',
    metaDescription:
      'مراجعة LocalMCP: تطبيق Mac بخادم MCP محلي للبحث في Mail والتقويم والملاحظات. السعر والمتطلبات والخصوصية وما لم نتمكن من التحقق منه بعد، قبل أن تشتري.',
    twitterDescription:
      'مراجعة LocalMCP: تطبيق Mac بسعر 3.99 دولارًا يتيح لعميل MCP البحث في Mail والتقويم والملاحظات بموافقة لكل مصدر. الإعداد والخصوصية وأسئلة مفتوحة.',
    audience:
      'مستخدمو Mac الذين يشغّلون عميل ذكاء اصطناعي يدعم MCP ويريدون قبل الشراء معرفة ما يتيحه LocalMCP لهذا العميل وتكلفته وآلية الخصوصية والادعاءات التي لا تزال غير مؤكدة.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LocalMCP',
    targetKeywords: [
      'مراجعة localmcp',
      'تطبيق localmcp لـ mac',
      'خادم mcp لـ mac',
      'mcp بريد apple تقويم ملاحظات',
      'خادم mcp محلي macos',
      'خصوصية localmcp',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP (الإصدار 1.5.1، حُدّث في 22 أكتوبر 2026) تطبيق من Mac App Store بسعر 3.99 دولارًا يشغّل خادم MCP محليًا ويمنح عميل الذكاء الاصطناعي لديك مصادر بيانات Mac التي توافق عليها فقط؛ وهو موصّل وليس مساعدًا ولا نموذجًا.** كل عبارة هنا مصدرها صفحة التطبيق والمطوّر؛ ولم تثبّت PromptQuorum التطبيق ولم تختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا يفعل LocalMCP؟',
        answer:
          'يشغّل خادم MCP على جهاز Mac. ثم يستطيع عميل ذكاء اصطناعي متوافق، مثل Claude Code أو عميل يعمل بنموذج محلي، البحث في تطبيقات Apple والمجلدات التي تسمح بها. وما زلت بحاجة إلى عميل MCP خاص بك.',
        bullets: [
          'يبحث في Mail والتقويم وجهات الاتصال والتذكيرات والملاحظات بحسب وصف App Store.',
          'يقرأ البيانات الوصفية للصور ويتعامل مع التسجيلات الصوتية المحلية من مجلد تختاره.',
          'التغييرات على التذكيرات والتقويم والاختصارات اختيارية وتتطلب مفاتيح منفصلة.',
          'يشغّل أدوات نصية مثل التلخيص بنموذج Apple اللغوي المحلي على أجهزة Mac المدعومة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LocalMCP؟', anchor: 'what-is-localmcp' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'ما تحتاجه', anchor: 'requirements' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ما يراه عميلك', anchor: 'data-access' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP تطبيق من Mac App Store يشغّل خادم MCP محليًا ليبحث عميل الذكاء الاصطناعي في Mail والتقويم وجهات الاتصال والتذكيرات والملاحظات.' },
          { type: 'plain-terms', text: 'تشتريه مرة واحدة، وتوافق على كل مصدر بيانات في macOS، ثم تلصق رمز الاتصال في عميل الذكاء الاصطناعي الذي تستخدمه أصلًا.' },
        ],
        items: [
          'الصيانة: يعرض App Store الإصدار 1.5.1 الصادر في 22 أكتوبر 2026، بعد أربعة أيام من الإصدار الأول، فلا ينطبق تحذير المشروع المتوقف.',
          'الترخيص: مملوك ومغلق المصدر؛ ولم يُعثر على مستودع للشيفرة المصدرية.',
          'التكلفة: شراء لمرة واحدة، 3.99 دولارًا في المتجر الأمريكي؛ وعميل الذكاء الاصطناعي المربوط يُحتسب بشكل منفصل.',
          'النضج: صدر لأول مرة في 18 أكتوبر 2026 ولا توجد تقييمات للمستخدمين بعد.',
          'الأساس: صفحة App Store وصفحة المطوّر كما قُرئتا في 24 أكتوبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          { type: 'note', text: 'لم تثبّت PromptQuorum تطبيق LocalMCP ولم تختبره ولم تدققه. والعبارات أدناه عن التحكم في الوصول والخصوصية هي عبارات المطوّر نفسه.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'ما هو LocalMCP؟',
        content: [
          '**LocalMCP تطبيق Mac من Mobile Box - App Consulting UG (haftungsbeschränkt) يشغّل خادمًا محليًا يتحدث بروتوكول Model Context Protocol (MCP)، وهو المعيار المفتوح الذي تستخدمه عملاء الذكاء الاصطناعي للاتصال بالأدوات والبيانات.** تصفه [صفحة المنتج لدى المطوّر](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) بأنه جسر بين جهاز Mac وعميل متوافق من اختيارك، يتيح المصادر التي تطلقها فقط.',
          'ليس تطبيق دردشة ولا يتضمن نموذجًا للمحادثة. يحدث عمل الذكاء الاصطناعي في العميل الذي تربطه، مثل Claude Code أو عميل بنموذج محلي. أما أدوات النص الخاصة بـ LocalMCP، مثل التلخيص والنقاط، فتستخدم نموذج Apple اللغوي على الجهاز في أجهزة Mac المدعومة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُباع LocalMCP عبر Mac App Store فقط؛ ولا يوجد تنزيل منفصل ولا نسخة تجريبية ولا شيفرة مصدرية.**',
        ],
        columns: ['الخيار', 'الرابط'],
        rows: [
          { 'الخيار': 'macOS 15.0 أو أحدث (Mac App Store)', 'الرابط': '[LocalMCP على Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { 'الخيار': 'الموقع', 'الرابط': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { 'الخيار': 'سياسة الخصوصية', 'الرابط': '[سياسة الخصوصية لدى Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { 'الخيار': 'الشيفرة المصدرية', 'الرابط': 'لم يُعثر عليها' },
        ],
        note: 'الإصدار الذي روجع: 1.5.1، صدر في 22 أكتوبر 2026 بحسب App Store، وهو آخر تحديث للمشروع وقت الفحص. الموقع المذكور في صفحة App Store (عنوان github.io) أعاد صفحة 404 في 24 أكتوبر 2026، لذلك يربط الجدول بصفحة المنتج الخاصة بالمطوّر. سياسة الخصوصية هي صفحة الشركة العامة لدى المطوّر؛ ولم تجد هذه المراجعة فيها قسمًا يذكر LocalMCP.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج LocalMCP إلى macOS 15.0 أو أحدث وعميل ذكاء اصطناعي منفصل يدعم MCP.** أما ميزات نموذج Apple اللغوي المحلي فتتطلب أكثر من ذلك.',
        ],
        columns: ['البند', 'بحسب صفحة التطبيق'],
        rows: [
          { 'البند': 'macOS', 'بحسب صفحة التطبيق': '15.0 أو أحدث' },
          { 'البند': 'عميل الذكاء الاصطناعي', 'بحسب صفحة التطبيق': 'مطلوب عميل MCP متوافق' },
          { 'البند': 'أدوات النص المحلية', 'بحسب صفحة التطبيق': 'macOS 26 أو أحدث، عتاد مدعوم، تفعيل Apple Intelligence' },
          { 'البند': 'حجم التنزيل', 'بحسب صفحة التطبيق': 'نحو 4 MB' },
          { 'البند': 'اللغات', 'بحسب صفحة التطبيق': 'الإنجليزية والألمانية' },
          { 'البند': 'الحساب', 'بحسب صفحة التطبيق': 'لا حاجة لتسجيل دخول إضافي' },
        ],
        note: 'يقول المطوّر إن الميزات تعتمد على إصدار macOS واللغة وتوفر النموذج والأذونات التي تمنحها. ولم يُذكر حد أدنى للذاكرة أو المعالج.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**يكلّف LocalMCP مبلغ 3.99 دولارًا كشراء لمرة واحدة في Mac App Store الأمريكي، بحسب صفحة التطبيق وصفحة المطوّر.**',
        ],
        columns: ['البند', 'التكلفة (USD)'],
        rows: [
          { 'البند': 'LocalMCP (شراء لمرة واحدة)', 'التكلفة (USD)': '3.99 دولارًا (المتجر الأمريكي)' },
          { 'البند': 'عميل الذكاء الاصطناعي المربوط', 'التكلفة (USD)': 'يُحتسب بشكل منفصل' },
        ],
        note: 'قُرئ من الصفحة الأمريكية في 24 أكتوبر 2026. تعرض المتاجر الألمانية والفرنسية والإسبانية والنمساوية 4,99 €. لا تذكر المصادر اشتراكًا؛ راجع صفحة المتجر للشروط الحالية.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات وصف المطوّر لمساعد الإعداد؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'تحقق من جهازك والعميل',
            whyItMatters: 'تحتاج إلى macOS 15.0 أو أحدث وعميل يدعم MCP؛ وتتطلب أدوات النص المحلية من Apple macOS 26 أيضًا.',
          },
          {
            title: 'اشترِ التطبيق وافتحه',
            whyItMatters: 'ثبّت LocalMCP من Mac App Store وشغّل مساعد الإعداد.',
          },
          {
            title: 'أطلق مصادر البيانات',
            whyItMatters: 'اختر صناديق البريد مباشرة من Apple Mail ووافق على كل مصدر في مربع حوار الأذونات في macOS؛ ويمكن تخطي المصادر غير المتاحة.',
          },
          {
            title: 'اربط العميل',
            whyItMatters: 'انسخ رمز MCP والإعداد المطابق من صفحة الاتصال إلى عميل الذكاء الاصطناعي؛ وتساعد الفحوص المدمجة على التأكد من الوصول المحلي.',
          },
          {
            title: 'راجع أذونات الكتابة',
            whyItMatters: 'تغييرات التذكيرات والتقويم واختصاراتك الخاصة مفاتيح منفصلة، وكل تغيير في التذكيرات يحتاج إلى تأكيدك داخل التطبيق.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: 'ما يراه عميلك',
        content: [
          '**بحسب وصف App Store، يستطيع العميل المربوط البحث في ثمانية أنواع من بيانات Mac، وكل عملية كتابة اختيارية.**',
        ],
        columns: ['المصدر', 'الوصول بحسب صفحة التطبيق'],
        rows: [
          { 'المصدر': 'Mail', 'الوصول بحسب صفحة التطبيق': 'البحث في صناديق بريد مختارة؛ لا تُعدَّل الرسائل ولا تُرسل أبدًا' },
          { 'المصدر': 'التقويم', 'الوصول بحسب صفحة التطبيق': 'بحث؛ التغييرات اختيارية ومعطلة افتراضيًا' },
          { 'المصدر': 'جهات الاتصال', 'الوصول بحسب صفحة التطبيق': 'بحث' },
          { 'المصدر': 'التذكيرات', 'الوصول بحسب صفحة التطبيق': 'بحث؛ الإنشاء والتحديث والإكمال عند التفعيل والتأكيد فقط' },
          { 'المصدر': 'الملاحظات', 'الوصول بحسب صفحة التطبيق': 'بحث' },
          { 'المصدر': 'الصور', 'الوصول بحسب صفحة التطبيق': 'البيانات الوصفية فقط' },
          { 'المصدر': 'التسجيلات الصوتية', 'الوصول بحسب صفحة التطبيق': 'مجلد المذكرات الصوتية المحلي الذي تختاره' },
          { 'المصدر': 'الاختصارات', 'الوصول بحسب صفحة التطبيق': 'اختصاراتك الخاصة؛ اختياري ومعطل افتراضيًا' },
        ],
        note: 'تحتاج المذكرات الصوتية إلى مجلد محلي يمكن الوصول إليه أصلًا، ويجب أن تكون ملفات iCloud متاحة محليًا. ويعتمد التوفر على أذوناتك.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف App Store أو صفحة المطوّر.**',
        ],
        items: [
          '**وصول انتقائي.** تحدد مربعات أذونات macOS وإعدادات LocalMCP المصادر التي يصل إليها العميل.',
          '**بحث محدود في Mail.** تُقرأ صناديق البريد المختارة وتُبحث بطلبات محدودة وللقراءة فقط.',
          '**كتابة بتأكيد.** عند إغلاق النافذة الرئيسية تُفتح نافذة تأكيد مخصصة؛ والطلبات المرفوضة أو المنتهية المهلة تعيد سببًا إلى العميل.',
          '**أدوات نص محلية.** تلخيص أو اختصار أو نقاط أو مهام، داخل التطبيق أو عبر العميل، بنموذج Apple المحلي.',
          '**عرض الحالة.** تعرض صفحة المطوّر حالة الخادم والأدوات المتاحة وأذوناتك في نافذة واحدة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب صفحة التطبيق، لا يحتاج LocalMCP إلى تسجيل دخول إضافي، ويستخدم المصادر المعدّة أصلًا على جهاز Mac، ولا يرسل المحتوى إلى خادم لدى المطوّر؛ وتقول بطاقة الخصوصية في App Store «لا يتم جمع البيانات».**',
          'ومع ذلك تغادر البيانات LocalMCP: فالتطبيق يمرّر المحتوى إلى عميل MCP الذي تربطه، والذي قد يعالجه محليًا أو يرسله إلى خدماته الخاصة بحسب كلام المطوّر. وعليه تعتمد خصوصيتك على العميل. وتضيف الصفحة أنه في macOS 27 يوجد مربع حوار اختياري لصور سحابة Apple لا تتم معالجته محليًا بالكامل.',
        ],
        callouts: [
          { type: 'note', text: 'لم تدقق PromptQuorum الشيفرة ولا حركة الشبكة. راجع شروط الخصوصية لدى العميل الذي تربطه.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Mac الذين لديهم عميل MCP** ويريدون أن يبحث وكيل ذكاء اصطناعي في بريدهم وتقويمهم وملاحظاتهم.',
          '**مستخدمو عميل بنموذج محلي** الذين يريدون إتاحة بيانات Mac دون موصّل سحابي.',
          '**المستخدمون الحذرون** الذين يريدون موافقة لكل مصدر وخطوة تأكيد قبل أي تغيير.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**السلوك الفعلي.** لم تشغّل PromptQuorum تطبيق LocalMCP، لذا فجودة البحث والسرعة والاستقرار غير مؤكدة.',
          '**توافق العملاء.** يقول المطوّر إن الدعم والإعداد يختلفان من عميل إلى آخر؛ ولم يُختبر أي عميل هنا.',
          '**الاستمرارية والشيفرة.** التطبيق مغلق المصدر، وصدر لأول مرة في 18 أكتوبر 2026، ولا توجد له تقييمات بعد.',
          '**التوثيق.** صفحة الإعداد المرتبطة من موقع المطوّر تشير إلى عنوان github.io الذي أعاد صفحة 404 في 24 أكتوبر 2026.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Jarvis](/ar/power-local-llm/jarvis-mac-review)', 'المنصات': 'macOS', 'السعر / الرخصة': 'مجاني / مفتوح المصدر', 'الفرق الأبرز': 'مساعد صوتي لـ macOS يركّز على العمل دون اتصال' },
          { 'التطبيق': '[nanobot](/ar/power-local-llm/nanobot-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'وكيل مستضاف ذاتيًا بذاكرة وأدوات MCP' },
          { 'التطبيق': '[Odysseus](/ar/power-local-llm/odysseus-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / AGPL-3.0', 'الفرق الأبرز': 'مساحة عمل مستضافة ذاتيًا للدردشة والوكلاء والمستندات' },
          { 'التطبيق': '[Atomic Bot](/ar/power-local-llm/atomic-bot-review)', 'المنصات': 'سطح المكتب والجوال', 'السعر / الرخصة': 'مجاني جزئيًا / MIT', 'الفرق الأبرز': 'زميل ذكاء اصطناعي مبني على حزمة وكلاء OpenClaw' },
        ],
        note: 'يزوّد LocalMCP العميل بالبيانات ولا يعمل كمساعد بنفسه، لذا فهذه التطبيقات جيران وليست بدائل مباشرة. تأكد من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل تبقى بياناتي على جهاز Mac؟',
            a: 'بحسب صفحة التطبيق، لا يرسل LocalMCP نفسه أي شيء إلى خادم لدى المطوّر. لكنه يمرّر نتائج البحث إلى عميل MCP الذي تربطه، وقد يستخدم هذا العميل خدمة سحابية. اختر العميل بناءً على ذلك.',
          },
          {
            q: 'هل يستطيع عميل الذكاء الاصطناعي تغيير بياناتي؟',
            a: 'فقط إذا سمحت بذلك. Mail للقراءة فقط. وتغييرات التذكيرات تحتاج إلى مفتاح منفصل مع تأكيد داخل التطبيق، أما تغييرات التقويم والاختصارات فمعطلة افتراضيًا.',
          },
          {
            q: 'مع أي عملاء ذكاء اصطناعي يعمل؟',
            a: 'يذكر المطوّر تطبيقات تدعم MCP مثل Claude Code وعملاء محليين بنماذج محلية، ويقول إن الدعم يختلف من عميل إلى آخر. ولم تختبر PromptQuorum أيًّا منها.',
          },
          {
            q: 'هل LocalMCP مفتوح المصدر؟',
            a: 'لم يُعثر على مستودع للشيفرة المصدرية، لذا يُعامل على أنه مملوك. والمكانان الوحيدان للحصول عليه هما صفحة Mac App Store وصفحة المطوّر.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'LocalMCP تطبيق من Mac App Store بسعر 3.99 دولارًا، إصداره 1.5.1 المحدَّث في 22 أكتوبر 2026، يتيح Mail والتقويم وجهات الاتصال والتذكيرات والملاحظات وغيرها لعميل MCP من اختيارك، مع كتابة اختيارية ودون خادم لدى المطوّر بحسب صفحة التطبيق. في المقابل هو مغلق المصدر وعمره أيام وبلا تقييمات، ويحتاج إلى عميل MCP منفصل عليك أن تقيّم خصوصيته بنفسك، ولم تختبر PromptQuorum شيئًا من ذلك.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LocalMCP على Mac App Store](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — الإصدار والسعر والمتطلبات والوصف وبطاقة الخصوصية، فُحصت في 24 أكتوبر 2026.',
          '[صفحة منتج LocalMCP](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — وصف المطوّر وشرح MCP والمتطلبات.',
          '[سياسة الخصوصية لدى Mobile Box](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — السياسة العامة للشركة لدى المطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Jarvis](/ar/power-local-llm/jarvis-mac-review) — مساعد صوتي لـ macOS يركّز على العمل دون اتصال.',
          '[مراجعة nanobot](/ar/power-local-llm/nanobot-review) — وكيل شخصي مستضاف ذاتيًا بأدوات MCP.',
          '[مراجعة Odysseus](/ar/power-local-llm/odysseus-review) — مساحة عمل محلية أولًا للدردشة والوكلاء والمستندات.',
          '[مراجعة Atomic Bot](/ar/power-local-llm/atomic-bot-review) — زميل ذكاء اصطناعي لسطح المكتب مبني على حزمة وكلاء OpenClaw.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-zh.webp',
    title: 'LocalMCP 评测：为 Mac 数据而生的本地 MCP 服务器',
    seoTitle: 'LocalMCP 评测：适用于 Mac 数据的本地 MCP 服务器',
    intro:
      'LocalMCP 是一款付费的 Mac App Store 应用，运行本地 MCP 服务器，让你连接的 AI 客户端只在你批准的来源中搜索邮件、日历、通讯录、提醒事项和备忘录。本评测基于 2026 年 10 月 24 日查阅的 App Store 页面和开发者产品页；PromptQuorum 没有测试过该应用。',
    metaDescription:
      'LocalMCP 评测：自带本地 MCP 服务器、可搜索邮件、日历和备忘录的 Mac 应用。价格、要求、隐私以及我们未能核实的内容，购买前必读。',
    twitterDescription:
      'LocalMCP 评测：售价 $3.99 的 Mac 应用，让 MCP 客户端按来源授权搜索邮件、日历和备忘录。设置、隐私与未解答的问题。',
    audience:
      '使用支持 MCP 的 AI 客户端的 Mac 用户，希望在购买前了解 LocalMCP 向客户端开放什么、价格如何、隐私如何运作，以及哪些说法尚未得到证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMCP 评测',
    targetKeywords: [
      'localmcp 评测',
      'localmcp mac 应用',
      'mac mcp 服务器',
      'mcp apple 邮件 日历 备忘录',
      '本地 mcp 服务器 macos',
      'localmcp 隐私',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP（版本 1.5.1，2026 年 10 月 22 日更新）是一款售价 $3.99 的 Mac App Store 应用，运行本地 MCP 服务器，只把你批准的 Mac 数据来源交给 AI 客户端；它是连接器，不是助手，也不是模型。** 这里的每项说法都来自商店页面和开发者；PromptQuorum 没有安装或测试过它。',
    quickAnswerTop: {
      zh: {
        question: 'LocalMCP 是做什么的？',
        answer:
          '它在你的 Mac 上启动一个 MCP 服务器。兼容的 AI 客户端（如 Claude Code 或使用本地模型的客户端）就能搜索你授权的 Apple 应用和文件夹。你仍然需要自己的 MCP 客户端。',
        bullets: [
          '据 App Store 描述，可搜索邮件、日历、通讯录、提醒事项和备忘录。',
          '读取照片元数据，并处理你所选文件夹中的本地语音录音。',
          '对提醒事项、日历和快捷指令的更改是可选的，需要分别开启。',
          '在受支持的 Mac 上，用 Apple 的本地语言模型运行摘要等文本工具。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'LocalMCP 是什么？', anchor: 'what-is-localmcp' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '配置要求', anchor: 'requirements' },
      { label: '定价', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '向客户端开放的内容', anchor: 'data-access' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP 是一款 Mac App Store 应用，运行本地 MCP 服务器，让 AI 客户端搜索你的邮件、日历、通讯录、提醒事项和备忘录。' },
          { type: 'plain-terms', text: '一次性购买，在 macOS 中逐个批准数据来源，再把连接令牌粘贴到你已在使用的 AI 客户端中。' },
        ],
        items: [
          '维护情况：App Store 显示版本 1.5.1 发布于 2026 年 10 月 22 日，距首次发布仅四天，因此不适用停止维护的警告。',
          '许可证：专有闭源；未找到源代码仓库。',
          '费用：一次性购买，美国商店售价 $3.99；所连接的 AI 客户端另计。',
          '成熟度：2026 年 10 月 18 日首次发布，暂无用户评分。',
          '依据：2026 年 10 月 24 日查阅的 App Store 页面和开发者页面，未做实际测试。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum 没有安装、测试或审计 LocalMCP。下文关于访问控制和隐私的说法均来自开发者。' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'LocalMCP 是什么？',
        content: [
          '**LocalMCP 是 Mobile Box - App Consulting UG (haftungsbeschränkt) 推出的 Mac 应用，运行一个使用 Model Context Protocol（MCP）的本地服务器；MCP 是 AI 客户端连接工具和数据所用的开放标准。** [开发者的产品页](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)把它描述为 Mac 与你所选兼容客户端之间的桥梁，只开放你放行的来源。',
          '它不是聊天应用，也不附带用于对话的模型。AI 的工作发生在你连接的客户端中，例如 Claude Code 或使用本地模型的客户端。LocalMCP 自带的文本工具（如摘要、要点）在受支持的 Mac 上使用 Apple 的设备端语言模型。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LocalMCP 只在 Mac App Store 销售；没有单独下载、试用版或源代码。**',
        ],
        columns: ['选项', '链接'],
        rows: [
          { '选项': 'macOS 15.0 或更高版本（Mac App Store）', '链接': '[Mac App Store 上的 LocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { '选项': '网站', '链接': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { '选项': '隐私政策', '链接': '[Mobile Box 隐私政策](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { '选项': '源代码', '链接': '未找到' },
        ],
        note: '评测版本：1.5.1，据 App Store 发布于 2026 年 10 月 22 日，是核查时的最新上游更新。App Store 页面所列网站（一个 github.io 地址）在 2026 年 10 月 24 日返回 404 页面，因此表中链接的是开发者自己的产品页。隐私政策是开发者的公司通用页面；本评测未在其中找到提及 LocalMCP 的章节。',
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**LocalMCP 需要 macOS 15.0 或更高版本，以及另行准备的支持 MCP 的 AI 客户端。** Apple 本地语言模型的功能要求更高。',
        ],
        columns: ['项目', '据商店页面'],
        rows: [
          { '项目': 'macOS', '据商店页面': '15.0 或更高' },
          { '项目': 'AI 客户端', '据商店页面': '需要兼容的 MCP 客户端' },
          { '项目': '本地文本工具', '据商店页面': 'macOS 26 或更高、受支持的硬件、已开启 Apple Intelligence' },
          { '项目': '下载大小', '据商店页面': '约 4 MB' },
          { '项目': '语言', '据商店页面': '英语和德语' },
          { '项目': '账户', '据商店页面': '无需额外登录' },
        ],
        note: '开发者称，功能取决于 macOS 版本、语言、模型可用性以及你授予的权限。页面未给出内存或处理器的最低要求。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**据商店页面和开发者页面，LocalMCP 在美国 Mac App Store 一次性购买价为 $3.99。**',
        ],
        columns: ['项目', '费用（USD）'],
        rows: [
          { '项目': 'LocalMCP（一次性购买）', '费用（USD）': '$3.99（美国商店）' },
          { '项目': '所连接的 AI 客户端', '费用（USD）': '另行计费' },
        ],
        note: '2026 年 10 月 24 日读取自美国商店页面。德国、法国、西班牙和奥地利商店显示 4,99 €。来源未提及订阅；当前条款请以商店页面为准。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据开发者对设置助手的描述；PromptQuorum 没有执行过。**',
        ],
        numberedItems: [
          {
            title: '检查 Mac 和客户端',
            whyItMatters: '需要 macOS 15.0 或更高版本和支持 MCP 的客户端；Apple 的本地文本工具还需要 macOS 26。',
          },
          {
            title: '购买并打开应用',
            whyItMatters: '从 Mac App Store 安装 LocalMCP，并启动设置助手。',
          },
          {
            title: '放行数据来源',
            whyItMatters: '直接从 Apple 邮件中选择邮箱，并在 macOS 权限对话框中批准每个来源；不可用的来源可以跳过。',
          },
          {
            title: '连接客户端',
            whyItMatters: '把连接页中的 MCP 令牌和对应配置复制到你的 AI 客户端；内置检查有助于确认本地访问。',
          },
          {
            title: '检查写入权限',
            whyItMatters: '提醒事项和日历的更改以及你自己的快捷指令是分开的开关，每次更改提醒事项都需要你在应用中确认。',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: '向客户端开放的内容',
        content: [
          '**据 App Store 描述，已连接的客户端可以搜索八类 Mac 数据，所有写入操作均为可选。**',
        ],
        columns: ['来源', '据商店页面的访问方式'],
        rows: [
          { '来源': '邮件', '据商店页面的访问方式': '搜索所选邮箱；邮件绝不会被更改或发送' },
          { '来源': '日历', '据商店页面的访问方式': '搜索；更改为可选，默认关闭' },
          { '来源': '通讯录', '据商店页面的访问方式': '搜索' },
          { '来源': '提醒事项', '据商店页面的访问方式': '搜索；创建、更新、完成需开启并确认' },
          { '来源': '备忘录', '据商店页面的访问方式': '搜索' },
          { '来源': '照片', '据商店页面的访问方式': '仅元数据' },
          { '来源': '语音录音', '据商店页面的访问方式': '你所选的本地语音备忘录文件夹' },
          { '来源': '快捷指令', '据商店页面的访问方式': '你自己的快捷指令；可选，默认关闭' },
        ],
        note: '语音备忘录需要一个已可访问的本地文件夹，iCloud 文件必须已下载到本地。可用性取决于你的权限。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自 App Store 描述或开发者页面。**',
        ],
        items: [
          '**选择性访问。** macOS 权限对话框和 LocalMCP 中的设置决定客户端能访问哪些来源。',
          '**受限的邮件搜索。** 所选邮箱以受限请求、只读方式读取和搜索。',
          '**需确认的写入。** 主窗口关闭时会打开专用的确认窗口；被拒绝或超时的请求会向客户端返回原因。',
          '**本地文本工具。** 摘要、缩短、要点或生成任务，可在应用内或通过客户端使用 Apple 的本地模型完成。',
          '**状态视图。** 开发者页面展示服务器状态、可用工具和你的权限，集中在同一个窗口。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据商店页面，LocalMCP 无需额外登录，使用 Mac 上已设置的来源，并且不会把内容发送到开发者的后端；其 App Store 隐私标签为“未收集数据”。**',
          '数据仍会离开 LocalMCP：应用会把内容交给你连接的 MCP 客户端，按开发者的说法，该客户端可能在本地处理，也可能发送到自己的服务。因此你的隐私取决于所用客户端。商店页面还提到，在 macOS 27 上有一个可选的 Apple 云端图像对话框，其处理并非完全在本地进行。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum 没有审计代码或网络流量。请查看你所连接客户端的隐私条款。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**使用 MCP 客户端的 Mac 用户**，希望让 AI 智能体搜索自己的邮件、日历和备忘录。',
          '**使用本地模型客户端的用户**，希望不借助云端连接器就能使用 Mac 数据。',
          '**谨慎的用户**，需要按来源授权，并要求任何更改前都有确认步骤。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际表现。** PromptQuorum 没有运行 LocalMCP，因此搜索质量、速度和稳定性均未证实。',
          '**客户端兼容性。** 开发者称各客户端的支持和设置不同；这里没有测试任何客户端。',
          '**长期维护与代码。** 应用闭源，2026 年 10 月 18 日才首次发布，尚无评分。',
          '**文档。** 开发者网站所链接的设置页指向的 github.io 地址，在 2026 年 10 月 24 日返回 404。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Jarvis](/zh/power-local-llm/jarvis-mac-review)', '平台': 'macOS', '价格 / 许可证': '免费 / 开源', '主要区别': '以离线为主的 macOS 语音助手' },
          { '应用': '[nanobot](/zh/power-local-llm/nanobot-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '带记忆和 MCP 工具的自托管智能体' },
          { '应用': '[Odysseus](/zh/power-local-llm/odysseus-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / AGPL-3.0', '主要区别': '用于聊天、智能体和文档的自托管工作区' },
          { '应用': '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)', '平台': '桌面和移动端', '价格 / 许可证': '免费增值 / MIT', '主要区别': '基于 OpenClaw 智能体栈的 AI 同事' },
        ],
        note: 'LocalMCP 是为客户端提供数据，本身不是助手，所以这些应用是相邻产品，而非直接替代品。请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我的数据会留在 Mac 上吗？',
            a: '据商店页面，LocalMCP 本身不会向开发者的后端发送任何内容。但它会把搜索结果交给你连接的 MCP 客户端，而该客户端可能使用云服务。请据此选择客户端。',
          },
          {
            q: 'AI 客户端能修改我的数据吗？',
            a: '只有在你允许时才可以。邮件是只读的。更改提醒事项需要单独的开关加上应用内确认，日历更改和快捷指令默认关闭。',
          },
          {
            q: '它支持哪些 AI 客户端？',
            a: '开发者提到支持 MCP 的应用（如 Claude Code）以及使用本地模型的本地客户端，并表示各客户端的支持情况不同。PromptQuorum 没有测试其中任何一个。',
          },
          {
            q: 'LocalMCP 是开源的吗？',
            a: '未找到源代码仓库，因此按专有软件对待。获取渠道只有 Mac App Store 页面和开发者页面。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LocalMCP 是一款售价 $3.99 的 Mac App Store 应用，版本 1.5.1 于 2026 年 10 月 22 日更新；据商店页面，它把邮件、日历、通讯录、提醒事项、备忘录等开放给你选定的 MCP 客户端，写入为可选，且没有开发者后端。但它闭源、上线才几天、尚无评分，还需要另配 MCP 客户端，而该客户端的隐私要由你自己判断，PromptQuorum 也没有做任何测试。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Mac App Store 上的 LocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — 版本、价格、要求、描述和隐私标签，2026 年 10 月 24 日查阅。',
          '[LocalMCP 产品页](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — 开发者的描述、MCP 说明和要求。',
          '[Mobile Box 隐私政策](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — 开发者的公司通用政策。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Jarvis 评测](/zh/power-local-llm/jarvis-mac-review) — 以离线为主的 macOS 语音助手。',
          '[nanobot 评测](/zh/power-local-llm/nanobot-review) — 带 MCP 工具的自托管个人智能体。',
          '[Odysseus 评测](/zh/power-local-llm/odysseus-review) — 面向聊天、智能体和文档的本地优先工作区。',
          '[Atomic Bot 评测](/zh/power-local-llm/atomic-bot-review) — 基于 OpenClaw 智能体栈的桌面 AI 同事。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/localmcp-review-hero-ko.webp',
    title: 'LocalMCP 리뷰: Mac 데이터를 위한 로컬 MCP 서버',
    seoTitle: 'LocalMCP 리뷰: Mac용 로컬 MCP 서버 한눈에 보기',
    intro:
      'LocalMCP는 로컬 MCP 서버를 실행하는 유료 Mac App Store 앱으로, 연결한 AI 클라이언트가 승인한 소스에 한해 메일, 캘린더, 연락처, 미리 알림, 메모를 검색할 수 있게 합니다. 이 리뷰는 2026년 10월 24일에 확인한 App Store 정보와 개발사의 제품 페이지를 바탕으로 하며, PromptQuorum은 앱을 테스트하지 않았습니다.',
    metaDescription:
      'LocalMCP 리뷰: 메일·캘린더·메모용 로컬 MCP 서버를 갖춘 Mac 앱. 가격, 요구 사항, 개인정보 보호, 확인하지 못한 사항.',
    twitterDescription:
      'LocalMCP 리뷰: ₩6,600 Mac 앱으로 MCP 클라이언트가 소스별 승인으로 메일·캘린더·메모를 검색합니다. 설정, 개인정보, 남은 의문.',
    audience:
      'MCP를 지원하는 AI 클라이언트를 쓰는 Mac 사용자 가운데, 구매 전에 LocalMCP가 클라이언트에 무엇을 공개하는지, 가격과 개인정보 보호 방식, 아직 확인되지 않은 주장을 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMCP 리뷰',
    targetKeywords: [
      'localmcp 리뷰',
      'localmcp mac 앱',
      'mac mcp 서버',
      'mcp 애플 메일 캘린더 메모',
      '로컬 mcp 서버 macos',
      'localmcp 개인정보',
    ],
    current_models_mentioned: ['Apple Intelligence'],
    current_hardware_mentioned: ['Mac'],
    leadAnswerBlock:
      '**LocalMCP(버전 1.5.1, 2026년 10월 22일 업데이트)는 로컬 MCP 서버를 실행하고 승인한 Mac 데이터 소스만 AI 클라이언트에 전달하는 ₩6,600짜리 Mac App Store 앱이며, 어시스턴트나 모델이 아니라 연결 도구입니다.** 여기의 모든 내용은 스토어 정보와 개발사에서 나온 것이며, PromptQuorum은 앱을 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'LocalMCP는 무엇을 하나요?',
        answer:
          'Mac에서 MCP 서버를 실행합니다. Claude Code나 로컬 모델을 쓰는 클라이언트 같은 호환 AI 클라이언트가 허용한 Apple 앱과 폴더를 검색할 수 있습니다. 별도의 MCP 클라이언트는 여전히 필요합니다.',
        bullets: [
          'App Store 설명에 따르면 메일, 캘린더, 연락처, 미리 알림, 메모를 검색합니다.',
          '사진 메타데이터를 읽고, 선택한 폴더의 로컬 음성 녹음을 다룹니다.',
          '미리 알림, 캘린더, 단축어 변경은 선택 사항이며 각각 따로 켜야 합니다.',
          '지원되는 Mac에서는 Apple의 로컬 언어 모델로 요약 같은 텍스트 도구를 실행합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LocalMCP란?', anchor: 'what-is-localmcp' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '필요한 사양', anchor: 'requirements' },
      { label: '요금', anchor: 'pricing' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '클라이언트에 공개되는 내용', anchor: 'data-access' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'LocalMCP는 로컬 MCP 서버를 실행해 AI 클라이언트가 메일, 캘린더, 연락처, 미리 알림, 메모를 검색할 수 있게 하는 Mac App Store 앱입니다.' },
          { type: 'plain-terms', text: '한 번 구매한 뒤 macOS에서 각 데이터 소스를 승인하고, 이미 쓰는 AI 클라이언트에 연결 토큰을 붙여 넣으면 됩니다.' },
        ],
        items: [
          '유지 관리: App Store에는 최초 출시 나흘 뒤인 2026년 10월 22일에 공개된 버전 1.5.1이 표시되어 있어 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: 독점 라이선스의 비공개 소스이며, 소스 코드 저장소는 찾지 못했습니다.',
          '비용: 일회성 구매이며 한국 스토어 가격은 ₩6,600입니다. 연결하는 AI 클라이언트는 별도입니다.',
          '성숙도: 2026년 10월 18일에 처음 출시되었고 아직 사용자 평점이 없습니다.',
          '근거: 2026년 10월 24일에 읽은 App Store 정보와 개발사 페이지이며, 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum은 LocalMCP를 설치, 테스트, 감사하지 않았습니다. 아래의 접근 제어와 개인정보 보호에 관한 서술은 개발사의 설명입니다.' },
        ],
      },
      overview: {
        id: 'what-is-localmcp',
        title: 'LocalMCP란?',
        content: [
          '**LocalMCP는 Mobile Box - App Consulting UG (haftungsbeschränkt)가 만든 Mac 앱으로, AI 클라이언트가 도구와 데이터에 연결할 때 쓰는 개방형 표준인 Model Context Protocol(MCP)을 사용하는 로컬 서버를 실행합니다.** [개발사의 제품 페이지](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)는 이를 Mac과 사용자가 고른 호환 클라이언트를 잇는 다리로 설명하며, 사용자가 공개한 소스만 제공한다고 밝힙니다.',
          '채팅 앱이 아니며 대화용 모델도 포함하지 않습니다. AI 작업은 연결한 클라이언트(예: Claude Code나 로컬 모델 클라이언트)에서 이루어집니다. 요약이나 글머리 기호 같은 LocalMCP 자체의 텍스트 도구는 지원되는 Mac에서 기기 내 Apple 언어 모델을 사용합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**LocalMCP는 Mac App Store에서만 판매되며, 별도 다운로드나 체험판, 소스 코드는 없습니다.**',
        ],
        columns: ['옵션', '링크'],
        rows: [
          { '옵션': 'macOS 15.0 이상 (Mac App Store)', '링크': '[Mac App Store의 LocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12)' },
          { '옵션': '웹사이트', '링크': '[mobilebox-consulting.de/weitere-anwendungen/localmcp](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/)' },
          { '옵션': '개인정보 처리방침', '링크': '[Mobile Box 개인정보 처리방침](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/)' },
          { '옵션': '소스 코드', '링크': '찾지 못함' },
        ],
        note: '확인한 버전: 1.5.1. App Store 기준 2026년 10월 22일에 공개되었으며, 확인 시점의 최신 업스트림 업데이트입니다. App Store 정보에 적힌 웹사이트(github.io 주소)는 2026년 10월 24일에 404 페이지를 반환해, 표에는 개발사 자체의 제품 페이지를 연결했습니다. 개인정보 처리방침은 개발사의 회사 공통 페이지이며, 이 리뷰에서는 LocalMCP를 언급한 항목을 찾지 못했습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**LocalMCP에는 macOS 15.0 이상과 별도의 MCP 지원 AI 클라이언트가 필요합니다.** Apple 로컬 언어 모델 기능은 조건이 더 많습니다.',
        ],
        columns: ['항목', '스토어 정보 기준'],
        rows: [
          { '항목': 'macOS', '스토어 정보 기준': '15.0 이상' },
          { '항목': 'AI 클라이언트', '스토어 정보 기준': '호환되는 MCP 클라이언트 필요' },
          { '항목': '로컬 텍스트 도구', '스토어 정보 기준': 'macOS 26 이상, 지원 하드웨어, Apple Intelligence 켜기' },
          { '항목': '다운로드 크기', '스토어 정보 기준': '약 4 MB' },
          { '항목': '언어', '스토어 정보 기준': '영어와 독일어' },
          { '항목': '계정', '스토어 정보 기준': '추가 로그인 불필요' },
        ],
        note: '개발사에 따르면 기능은 macOS 버전, 언어, 모델 사용 가능 여부, 부여한 권한에 따라 달라집니다. 메모리나 프로세서 최소 사양은 명시되어 있지 않습니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**스토어 정보와 개발사 페이지에 따르면 LocalMCP는 한국 Mac App Store에서 일회성 구매 ₩6,600입니다.**',
        ],
        columns: ['항목', '비용(KRW)'],
        rows: [
          { '항목': 'LocalMCP (일회성 구매)', '비용(KRW)': '₩6,600 (한국 스토어)' },
          { '항목': '연결하는 AI 클라이언트', '비용(KRW)': '별도 요금' },
        ],
        note: '2026년 10월 24일에 한국 스토어 페이지에서 확인했습니다. 출처에는 구독이 언급되어 있지 않으며, 최신 조건은 스토어 페이지에서 확인하세요.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 개발사가 설명한 설정 도우미를 따른 것이며, PromptQuorum은 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: 'Mac과 클라이언트 확인',
            whyItMatters: 'macOS 15.0 이상과 MCP 지원 클라이언트가 필요하며, Apple의 로컬 텍스트 도구에는 macOS 26도 필요합니다.',
          },
          {
            title: '앱 구매 후 열기',
            whyItMatters: 'Mac App Store에서 LocalMCP를 설치하고 설정 도우미를 시작합니다.',
          },
          {
            title: '데이터 소스 공개',
            whyItMatters: 'Apple 메일에서 사서함을 직접 선택하고 macOS 권한 대화상자에서 각 소스를 승인합니다. 사용할 수 없는 소스는 건너뛸 수 있습니다.',
          },
          {
            title: '클라이언트 연결',
            whyItMatters: '연결 페이지의 MCP 토큰과 맞는 설정을 AI 클라이언트에 복사합니다. 내장 점검으로 로컬 접근을 확인할 수 있습니다.',
          },
          {
            title: '쓰기 권한 검토',
            whyItMatters: '미리 알림과 캘린더 변경, 본인의 단축어는 각각 별도 스위치이며, 미리 알림을 바꿀 때마다 앱에서 확인해야 합니다.',
          },
        ],
      },
      dataAccess: {
        id: 'data-access',
        title: '클라이언트에 공개되는 내용',
        content: [
          '**App Store 설명에 따르면 연결된 클라이언트는 여덟 종류의 Mac 데이터를 검색할 수 있으며, 모든 쓰기는 선택 사항입니다.**',
        ],
        columns: ['소스', '스토어 정보상 접근'],
        rows: [
          { '소스': '메일', '스토어 정보상 접근': '선택한 사서함 검색. 메시지는 변경하거나 보내지 않음' },
          { '소스': '캘린더', '스토어 정보상 접근': '검색. 변경은 선택 사항이며 기본값은 꺼짐' },
          { '소스': '연락처', '스토어 정보상 접근': '검색' },
          { '소스': '미리 알림', '스토어 정보상 접근': '검색. 생성·수정·완료는 활성화와 확인이 있을 때만' },
          { '소스': '메모', '스토어 정보상 접근': '검색' },
          { '소스': '사진', '스토어 정보상 접근': '메타데이터만' },
          { '소스': '음성 녹음', '스토어 정보상 접근': '선택한 로컬 음성 메모 폴더' },
          { '소스': '단축어', '스토어 정보상 접근': '본인의 단축어. 선택 사항이며 기본값은 꺼짐' },
        ],
        note: '음성 메모에는 이미 접근 가능한 로컬 폴더가 필요하며, iCloud 파일은 로컬에서 사용할 수 있어야 합니다. 사용 가능 여부는 부여한 권한에 따라 달라집니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 설명 또는 개발사 페이지에서 나왔습니다.**',
        ],
        items: [
          '**선택적 접근.** macOS 권한 대화상자와 LocalMCP 설정이 클라이언트가 닿을 수 있는 소스를 결정합니다.',
          '**범위가 제한된 메일 검색.** 선택한 사서함을 읽기 전용으로, 범위가 제한된 요청으로 읽고 검색합니다.',
          '**확인이 필요한 쓰기.** 메인 창이 닫혀 있으면 전용 확인 창이 열리고, 거절되거나 시간 초과된 요청은 사유를 클라이언트에 돌려줍니다.',
          '**로컬 텍스트 도구.** 요약, 축약, 글머리 기호, 작업 만들기를 앱 안이나 클라이언트를 통해 Apple 로컬 모델로 처리합니다.',
          '**상태 보기.** 개발사 페이지에는 서버 상태, 사용 가능한 도구, 권한이 한 창에 표시됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**스토어 정보에 따르면 LocalMCP는 추가 로그인이 필요 없고, Mac에 이미 설정된 소스를 사용하며, 개발사 백엔드로 콘텐츠를 보내지 않습니다. App Store 개인정보 보호 표시는 “데이터 수집 안 함”입니다.**',
          '그래도 데이터는 LocalMCP 밖으로 나갑니다. 앱은 연결한 MCP 클라이언트에 콘텐츠를 전달하며, 개발사의 설명대로 이 클라이언트는 로컬에서 처리하거나 자체 서비스로 보낼 수 있습니다. 따라서 개인정보 보호 수준은 클라이언트에 달려 있습니다. 스토어 정보에는 macOS 27에서 Apple 클라우드를 쓰는 선택적 이미지 대화상자가 있고 그 처리는 전적으로 로컬이 아니라는 설명도 있습니다.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다. 연결하는 클라이언트의 개인정보 약관을 확인하세요.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**MCP 클라이언트를 쓰는 Mac 사용자**로, AI 에이전트가 자신의 메일, 캘린더, 메모를 검색하게 하려는 분.',
          '**로컬 모델 클라이언트를 쓰는 분**으로, 클라우드 커넥터 없이 Mac 데이터를 활용하려는 분.',
          '**신중한 사용자**로, 소스별 승인과 변경 전 확인 단계를 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 동작.** PromptQuorum은 LocalMCP를 실행하지 않았으므로 검색 품질, 속도, 안정성은 확인되지 않았습니다.',
          '**클라이언트 호환성.** 개발사에 따르면 지원과 설정은 클라이언트마다 다르며, 여기서는 어떤 클라이언트도 테스트하지 않았습니다.',
          '**지속성과 코드.** 앱은 비공개 소스이고 2026년 10월 18일에 처음 출시되었으며 아직 평점이 없습니다.',
          '**문서.** 개발사 사이트에서 링크된 설정 페이지는 2026년 10월 24일에 404를 반환한 github.io 주소를 가리킵니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Jarvis](/ko/power-local-llm/jarvis-mac-review)', '플랫폼': 'macOS', '가격 / 라이선스': '무료 / 오픈소스', '핵심 차이': '오프라인 중심의 macOS 음성 어시스턴트' },
          { '앱': '[nanobot](/ko/power-local-llm/nanobot-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '메모리와 MCP 도구를 갖춘 셀프호스팅 에이전트' },
          { '앱': '[Odysseus](/ko/power-local-llm/odysseus-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / AGPL-3.0', '핵심 차이': '채팅·에이전트·문서용 셀프호스팅 워크스페이스' },
          { '앱': '[Atomic Bot](/ko/power-local-llm/atomic-bot-review)', '플랫폼': '데스크톱과 모바일', '가격 / 라이선스': '프리미엄 / MIT', '핵심 차이': 'OpenClaw 에이전트 스택 기반 AI 동료' },
        ],
        note: 'LocalMCP는 어시스턴트가 아니라 클라이언트에 데이터를 공급하는 도구이므로, 이 앱들은 인접한 제품이지 그대로 대체할 수 있는 제품이 아닙니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '내 데이터는 Mac에 머무르나요?',
            a: '스토어 정보에 따르면 LocalMCP 자체는 개발사 백엔드로 아무것도 보내지 않습니다. 다만 검색 결과를 연결한 MCP 클라이언트에 전달하고, 그 클라이언트는 클라우드 서비스를 쓸 수 있습니다. 그에 맞춰 클라이언트를 고르세요.',
          },
          {
            q: 'AI 클라이언트가 내 데이터를 바꿀 수 있나요?',
            a: '허용한 경우에만 가능합니다. 메일은 읽기 전용입니다. 미리 알림 변경에는 별도 스위치와 앱 안의 확인이 필요하고, 캘린더 변경과 단축어는 기본값이 꺼짐입니다.',
          },
          {
            q: '어떤 AI 클라이언트와 함께 쓸 수 있나요?',
            a: '개발사는 Claude Code 같은 MCP 지원 앱과 로컬 모델을 쓰는 로컬 클라이언트를 언급하며, 지원은 클라이언트마다 다르다고 밝힙니다. PromptQuorum은 그중 어느 것도 테스트하지 않았습니다.',
          },
          {
            q: 'LocalMCP는 오픈소스인가요?',
            a: '소스 코드 저장소를 찾지 못해 독점 소프트웨어로 취급합니다. 입수할 수 있는 곳은 Mac App Store 페이지와 개발사 페이지뿐입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LocalMCP는 2026년 10월 22일에 업데이트된 버전 1.5.1의 ₩6,600짜리 Mac App Store 앱으로, 스토어 정보에 따르면 선택적 쓰기와 개발사 백엔드 없이 메일, 캘린더, 연락처, 미리 알림, 메모 등을 선택한 MCP 클라이언트에 공개합니다. 반면 비공개 소스이고 출시된 지 며칠밖에 되지 않았으며 평점이 없고, 개인정보 보호 수준을 직접 판단해야 하는 별도 MCP 클라이언트가 필요하며, PromptQuorum은 아무것도 테스트하지 않았습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Mac App Store의 LocalMCP](https://apps.apple.com/us/app/localmcp/id6811374818?mt=12) — 버전, 가격, 요구 사항, 설명, 개인정보 보호 표시. 2026년 10월 24일 확인.',
          '[LocalMCP 제품 페이지](https://www.mobilebox-consulting.de/weitere-anwendungen/localmcp/) — 개발사의 설명, MCP 소개, 요구 사항.',
          '[Mobile Box 개인정보 처리방침](https://www.mobilebox-consulting.de/datenschutzerkl%C3%A4rung-privacy-policy/) — 개발사의 회사 공통 방침.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Jarvis 리뷰](/ko/power-local-llm/jarvis-mac-review) — 오프라인 중심의 macOS 음성 어시스턴트.',
          '[nanobot 리뷰](/ko/power-local-llm/nanobot-review) — MCP 도구를 갖춘 셀프호스팅 개인 에이전트.',
          '[Odysseus 리뷰](/ko/power-local-llm/odysseus-review) — 채팅, 에이전트, 문서를 위한 로컬 우선 워크스페이스.',
          '[Atomic Bot 리뷰](/ko/power-local-llm/atomic-bot-review) — OpenClaw 에이전트 스택 기반의 데스크톱 AI 동료.',
        ],
      },
    },
  },
}
