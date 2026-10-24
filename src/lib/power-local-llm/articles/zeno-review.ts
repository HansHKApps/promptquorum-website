// Zeno Review: Free Private AI Workspace for Mac (Icosa Computing)
// Slug: zeno-review
// Companion to: atomic-bot-review, msty-go-review, localghost-review, opencode-review
// Sources (all read 2026-10-24, no hands-on testing): icosa.co/zeno (product page + manifesto), icosa.co/terms (effective 2026-08-18),
// icosa.co home FAQ (release date 2026-08-19, macOS-only), icosa.co/llms.txt, and the HTTP response headers of the installer on the
// download server (Last-Modified 2026-10-22, ~376 MB). localwork.ai 307-redirects to icosa.co/zeno. No version number is published
// (tile lastUpstreamUpdate = installer Last-Modified, a weak signal, stated as such). No separate privacy-policy page (icosa.co/privacy 404);
// privacy is section 5 of the Terms. Free everywhere: no storefront prices, so no currency localisation needed. No founder badge.

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
    heroImage: '/images/zeno-review-hero-en.webp',
    title: 'Zeno Review: Free Private AI Workspace for Mac',
    seoTitle: 'Zeno Review: Free Private AI Workspace for Mac by Icosa',
    intro:
      'Zeno is a free macOS app from [Icosa Computing](https://icosa.co/zeno), a New York company. It bundles a 35-billion-parameter language model and, according to Icosa, reads your files, edits documents and runs agent tasks entirely on your Mac. Icosa released it on 19 August 2026. This review is based on the official Zeno page, its Terms of Use and the download server, checked on 24 October 2026; PromptQuorum has not installed or tested Zeno.',
    metaDescription:
      'Zeno review: free macOS AI workspace from Icosa Computing with a bundled 35B model that works on your files offline. Requirements and open questions.',
    twitterDescription:
      'Zeno review: a free Mac app that bundles a 35B model and says it works on your files offline. What it needs, what its Terms say and what is unverified.',
    audience:
      'Mac owners who want to know what Zeno needs, what it costs, what its Terms of Use allow it to do on their machine and which of its privacy, speed and quality claims the sources leave unconfirmed.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zeno review',
    targetKeywords: [
      'zeno review',
      'zeno icosa mac',
      'icosa zeno local ai',
      'private ai workspace mac',
      'offline ai assistant for mac',
      'local 35b model macbook',
      'zeno by icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno is a free AI workspace for Apple Silicon Macs with 16 GB of RAM or more, made by Icosa Computing.** **Its Terms of Use say it can read, change and delete files and run commands when you allow it, so the permission prompts matter as much as the privacy claim.**',
    quickAnswerTop: {
      en: {
        question: 'Does Zeno really run offline on a Mac?',
        answer:
          'According to Icosa, yes: the model ships with the app and Zeno keeps working with the network off. The Terms of Use add that the app connects to the internet only to check for updates, to download a model or tool you request, and when you ask it to fetch something from the web.',
        bullets: [
          'Needs an Apple Silicon Mac with 16 GB of RAM or more.',
          'Free to use: Icosa lists $0 per token and no rate limits.',
          'Icosa quotes 20 to 50 tokens per second, depending on the Mac.',
          'Per Icosa, Zeno adapts to how your team works once you point it at your files.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Zeno?', anchor: 'what-is-zeno' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
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
            text: 'Zeno is a free macOS app that ships an AI model inside the download and works on your documents and code on the Mac itself.',
          },
          {
            type: 'plain-terms',
            text: 'You install one app, point it at your files, and an assistant reads, drafts and edits them without sending them to a cloud service, according to its maker.',
          },
        ],
        items: [
          'Maintenance: Icosa released Zeno on 19 August 2026 and the installer on its download server was last modified on 22 October 2026; no version number is published, so no stale-project warning applies.',
          'Model: an unnamed 35-billion-parameter model that Icosa pruned and tuned; the Terms say Zeno runs Qwen-family models.',
          'Actions: when you allow it, Zeno can read, create, change and delete files and run commands.',
          'Source: no public source repository was found; the Terms credit the open-source opencode project.',
          'Maker: Icosa Computing, New York.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Zeno page, its Terms of Use and the download server, checked on 24 October 2026. PromptQuorum has not installed, run or benchmarked Zeno, so answer quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'What Is Zeno?',
        content: [
          '**Zeno is a macOS desktop application that runs an AI model on your Mac and uses it to read documents, draft and edit text, refactor code and carry long agent tasks.** Icosa Computing, a New York company, calls it "the free, private AI workspace"; its FAQ gives 19 August 2026 as the release date, and the domain localwork.ai redirects to the Zeno page.',
          'The page says a 35-billion-parameter model ships inside the download, "pruned and tuned by Icosa", and does not name it. The Terms of Use state that Zeno runs models from the Qwen family by Alibaba Cloud under the Apache License 2.0 and is built on the open-source opencode project under the MIT License. Icosa also runs [LMShop](https://lmshop.com), a separate web platform for training custom models that, per Icosa, can be run in Zeno.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Zeno is a free download for Mac from the Icosa website; no Windows, Linux, iOS or Android build is listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Mac', 'How to get it': '[Download Zeno for Mac](https://icosa.co/zeno), free, Apple Silicon only' },
          { 'Option': 'Price', 'How to get it': '$0 per token, no rate limits, no paid plan listed' },
          { 'Option': 'Website', 'How to get it': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'Option': 'Terms of Use', 'How to get it': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'Option': 'Privacy policy', 'How to get it': 'No separate page found; section 5 of the Terms of Use covers privacy' },
          { 'Option': 'Source code', 'How to get it': 'No public repository found' },
        ],
        note: 'No version number is published. The installer behind the download button was last modified on 22 October 2026 per the download server and is about 376 MB, while the page states an 18 GB download that includes the model; PromptQuorum did not download it, so how the model arrives is unverified.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Zeno needs an Apple Silicon Mac with 16 GB of RAM or more and a large amount of free disk space.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Chip and memory', 'What the sources say': 'Apple Silicon, 16 GB of RAM or more' },
          { 'Item': 'Download', 'What the sources say': '18 GB, including the AI model' },
          { 'Item': 'Disk space', 'What the sources say': 'About 45 GB free during setup, about 25 GB afterwards' },
          { 'Item': 'macOS version', 'What the sources say': 'Not stated on the page' },
          { 'Item': 'Internet', 'What the sources say': 'Needed for the download; the page says Zeno works with the network off' },
          { 'Item': 'Speed', 'What the sources say': 'Typically 20 to 50 tokens per second, depending on memory and open apps' },
        ],
        note: 'The page does not say which Mac models reach that speed, and the manifesto admits that Zeno "might feel slow at first" because a 35B model is fitted onto a regular MacBook.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Zeno page or the Terms of Use; none has been tested.**',
        ],
        items: [
          '**File work.** Zeno reads your files and drafts and edits documents with you; the page names contracts, spreadsheets and code as examples.',
          '**Long agent tasks.** Agent tasks can run "as long as the work requires", with no cloud service in the loop.',
          '**Permission prompts.** The Terms say you decide what Zeno may do through permission prompts, and that some modes reduce how often it asks.',
          '**Learning from your files.** Icosa says Zeno adapts once you point it at your files, and the manifesto says the model weights change as you use it; no mechanism is documented.',
          '**No model picker.** The page says there is no model to pick; how a custom LMShop model or a requested model download fits in is not documented.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The Terms of Use, effective 18 August 2026, say Zeno processes your files and chats on your computer and that by default they never leave your machine.** The app connects to the internet only to check for updates (sharing the app version and nothing else), to download a model or tool you request, and when you ask it to fetch something from the web. The Terms add that the Icosa website uses standard analytics while the app contains none.',
          'The Terms also describe what Zeno can do locally: when you allow it, the AI can read, create, change and delete files and run commands on your machine. They tell users to review important outputs, keep backups and be careful with modes that reduce how often Zeno asks before acting, and they disclaim warranties and liability for data loss.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are Icosa\'s declarations, not audit results. No source code is published and PromptQuorum has not inspected the app\'s network traffic. The manifesto\'s statement that Icosa "physically can\'t" look at your data is the company\'s own claim, and no separate privacy-policy page was found.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac owners with 16 GB or more** who want a private assistant for documents and code and accept a very large download.',
          '**People who prefer processing on their own machine** and are willing to read the permission settings before letting an agent change files.',
          '**Users tired of per-token billing** who want a free local alternative and can accept an early-stage product.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Output quality.** Icosa says a pruned 35B model works "the way you expect a frontier one to"; PromptQuorum ran no tasks, and the page publishes no benchmark.',
          '**Speed.** The 20 to 50 tokens per second figure is Icosa\'s and depends on the Mac; it is untested here.',
          '**Offline use.** PromptQuorum did not test Zeno with the network off or inspect its traffic.',
          '**Self-learning.** How the model learns from your files, and how to reset it, is not documented anywhere PromptQuorum found.',
          '**Version, licence and source.** No version number, no software licence beyond the Terms of Use and no source repository were found.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Atomic Bot](/power-local-llm/atomic-bot-review)', 'Platforms': 'Mac, Windows, Linux, iOS, Android', 'Price / license': 'Free app (MIT) / paid cloud option', 'Key difference': 'Packages the OpenClaw agent stack; runs locally or in the cloud and can use API models' },
          { 'App': '[Msty Go](/power-local-llm/msty-go-review)', 'Platforms': 'Mac, Windows, Linux', 'Price / license': 'Freemium / closed source', 'Key difference': 'Multi-step task agent that works with local or cloud models' },
          { 'App': '[LocalGhost](/power-local-llm/localghost-review)', 'Platforms': 'Linux server, Android app', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source personal AI server you host on a Debian machine' },
        ],
        note: 'Compare current price, license and platforms on each app\'s own page before choosing; none of these was tested against Zeno.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use Zeno at work or for confidential files?',
            a: 'The Terms of Use put responsibility for what Zeno does on the user, ask that it be used only with content you have the right to process, and disclaim liability for data loss. Check your employer\'s rules and keep backups; PromptQuorum has not assessed Zeno against any compliance regime.',
          },
          {
            q: 'Does Zeno run on Windows, Linux or an Intel Mac?',
            a: 'The sources list only a Mac download and name an Apple Silicon Mac as the requirement; no other platform and no Intel support is mentioned.',
          },
          {
            q: 'Who makes Zeno?',
            a: 'Icosa Computing, a New York company; its CEO Mert Esencan signs the Icosa Manifesto on the Zeno page. Icosa also publishes research on Combinatorial Reasoning, which it says it uses when training and selecting models.',
          },
          {
            q: 'How do I report a bug or reach the team?',
            a: 'The Zeno page lists a [community Discord](https://discord.gg/f2DEU8frU), a feedback address ([info@icosacomputing.com](mailto:info@icosacomputing.com)) and a demo-booking link.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Zeno is a recent, free attempt to package a large local model and a file-working agent into one Mac download, with clear hardware demands and a plain Terms of Use that describes what the agent may do on your machine. Against that, PromptQuorum found no source repository, Icosa publishes no version number, the product dates from August 2026, and none of its speed, quality, offline or learning claims was tested here. It suits Apple Silicon owners with 16 GB or more who want to try a private assistant and will read the permission settings and keep backups; anyone who needs documented compliance or a verified build should wait for independent testing.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Zeno page](https://icosa.co/zeno) — product description, requirements, figures and manifesto, checked 24 October 2026.',
          '[Zeno Terms of Use](https://icosa.co/terms) — effective 18 August 2026; privacy, permissions and open-source notices.',
          '[Icosa Computing](https://icosa.co/) — FAQ with the release date of 19 August 2026, checked 24 October 2026.',
          'Download server response headers — installer size and last-modified date (22 October 2026), checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Atomic Bot Review](/power-local-llm/atomic-bot-review) — a desktop and cloud AI coworker built on the OpenClaw stack.',
          '[Msty Go Review](/power-local-llm/msty-go-review) — a multi-step task agent for local or cloud models.',
          '[LocalGhost Review](/power-local-llm/localghost-review) — a personal AI server you host yourself.',
          '[opencode Review](/power-local-llm/opencode-review) — the open-source coding agent that Zeno\'s Terms credit.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Zeno Review: Free Private AI Workspace for Mac',
      description:
        'Zeno review: a free macOS AI workspace from Icosa Computing that bundles a 35B model. Requirements, Terms of Use, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/zeno-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Mac owners evaluating a local AI workspace' },
      about: [
        { '@type': 'Thing', name: 'Zeno' },
        { '@type': 'Thing', name: 'Local AI workspace' },
        { '@type': 'Thing', name: 'macOS' },
        { '@type': 'Thing', name: 'Icosa Computing' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/zeno-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Zeno Review', item: 'https://www.promptquorum.com/power-local-llm/zeno-review' },
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
    heroImage: '/images/zeno-review-hero-de.webp',
    title: 'Zeno-Rezension: Kostenloser privater KI-Arbeitsplatz für den Mac',
    seoTitle: 'Zeno-Rezension: Privater KI-Arbeitsplatz für den Mac',
    intro:
      'Zeno ist eine kostenlose macOS-App von [Icosa Computing](https://icosa.co/zeno), einem Unternehmen aus New York. Sie enthält ein Sprachmodell mit 35 Milliarden Parametern und liest laut Icosa Ihre Dateien, bearbeitet Dokumente und führt Agentenaufgaben vollständig auf Ihrem Mac aus. Icosa hat die App am 19. August 2026 veröffentlicht. Diese Rezension stützt sich auf die offizielle Zeno-Seite, die Nutzungsbedingungen und den Download-Server, geprüft am 24. Oktober 2026; PromptQuorum hat Zeno weder installiert noch getestet.',
    metaDescription:
      'Zeno-Rezension: kostenloser macOS-KI-Arbeitsplatz von Icosa Computing mit 35B-Modell, das offline mit Ihren Dateien arbeitet. Anforderungen, offene Fragen.',
    twitterDescription:
      'Zeno-Rezension: kostenlose Mac-App mit eingebautem 35B-Modell, die offline mit Ihren Dateien arbeiten soll. Anforderungen, Bedingungen und Ungeprüftes.',
    audience:
      'Mac-Besitzer, die wissen möchten, was Zeno braucht, was es kostet, was die Nutzungsbedingungen der App auf ihrem Rechner erlauben und welche Aussagen zu Datenschutz, Tempo und Qualität die Quellen offenlassen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zeno Rezension',
    targetKeywords: [
      'zeno rezension',
      'zeno icosa mac',
      'icosa zeno lokale ki',
      'privater ki arbeitsplatz mac',
      'offline ki assistent für mac',
      'lokales 35b modell macbook',
      'zeno von icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno ist ein kostenloser KI-Arbeitsplatz für Apple-Silicon-Macs mit mindestens 16 GB RAM von Icosa Computing.** **Laut Nutzungsbedingungen kann die App Dateien lesen, ändern und löschen sowie Befehle ausführen, wenn Sie es erlauben; die Berechtigungsabfragen sind daher ebenso wichtig wie das Datenschutzversprechen.**',
    quickAnswerTop: {
      de: {
        question: 'Läuft Zeno auf dem Mac wirklich offline?',
        answer:
          'Laut Icosa ja: Das Modell wird mit der App geliefert, und Zeno arbeitet auch ohne Netzwerk weiter. Die Nutzungsbedingungen ergänzen, dass die App nur ins Internet geht, um Updates zu prüfen, ein von Ihnen angefordertes Modell oder Werkzeug herunterzuladen und wenn Sie etwas aus dem Web abrufen lassen.',
        bullets: [
          'Benötigt einen Apple-Silicon-Mac mit mindestens 16 GB RAM.',
          'Kostenlos nutzbar: Icosa nennt 0 $ pro Token und keine Ratenbegrenzung.',
          'Icosa gibt 20 bis 50 Token pro Sekunde an, je nach Mac.',
          'Laut Icosa passt sich Zeno an die Arbeitsweise Ihres Teams an, sobald Sie es auf Ihre Dateien verweisen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Zeno?', anchor: 'what-is-zeno' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
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
            text: 'Zeno ist eine kostenlose macOS-App, die ein KI-Modell im Download mitbringt und direkt auf dem Mac mit Ihren Dokumenten und Ihrem Code arbeitet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren eine App und verweisen sie auf Ihre Dateien; ein Assistent liest, entwirft und bearbeitet sie laut Hersteller, ohne sie an einen Cloud-Dienst zu senden.',
          },
        ],
        items: [
          'Pflege: Icosa hat Zeno am 19. August 2026 veröffentlicht, und der Installer auf dem Download-Server wurde zuletzt am 22. Oktober 2026 geändert; eine Versionsnummer wird nicht genannt, ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Modell: ein nicht benanntes Modell mit 35 Milliarden Parametern, das Icosa beschnitten und angepasst hat; laut Nutzungsbedingungen läuft Zeno mit Modellen der Qwen-Familie.',
          'Aktionen: Wenn Sie es erlauben, kann Zeno Dateien lesen, erstellen, ändern und löschen sowie Befehle ausführen.',
          'Quellcode: Es wurde kein öffentliches Repository gefunden; die Nutzungsbedingungen nennen das Open-Source-Projekt opencode.',
          'Hersteller: Icosa Computing, New York.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Zeno-Seite, die Nutzungsbedingungen und den Download-Server, geprüft am 24. Oktober 2026. PromptQuorum hat Zeno weder installiert noch ausgeführt oder gemessen; Antwortqualität und Tempo werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'Was ist Zeno?',
        content: [
          '**Zeno ist eine macOS-Desktop-Anwendung, die ein KI-Modell auf Ihrem Mac ausführt und damit Dokumente liest, Texte entwirft und bearbeitet, Code überarbeitet und lange Agentenaufgaben erledigt.** Icosa Computing, ein Unternehmen aus New York, nennt sie „the free, private AI workspace“; die FAQ nennt den 19. August 2026 als Veröffentlichungsdatum, und die Domain localwork.ai leitet auf die Zeno-Seite weiter.',
          'Laut der Seite steckt im Download ein Modell mit 35 Milliarden Parametern, „pruned and tuned by Icosa“; einen Namen nennt sie nicht. Die Nutzungsbedingungen geben an, dass Zeno Modelle der Qwen-Familie von Alibaba Cloud unter der Apache License 2.0 ausführt und auf dem Open-Source-Projekt opencode unter der MIT-Lizenz aufbaut. Icosa betreibt außerdem [LMShop](https://lmshop.com), eine separate Web-Plattform zum Trainieren eigener Modelle, die sich laut Icosa in Zeno ausführen lassen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Zeno ist ein kostenloser Download für den Mac auf der Icosa-Website; eine Version für Windows, Linux, iOS oder Android ist nicht gelistet.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Mac', 'Bezug': '[Zeno für den Mac herunterladen](https://icosa.co/zeno), kostenlos, nur Apple Silicon' },
          { 'Option': 'Preis', 'Bezug': '0 $ pro Token, keine Ratenbegrenzung, kein Bezahlplan gelistet' },
          { 'Option': 'Website', 'Bezug': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'Option': 'Nutzungsbedingungen', 'Bezug': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': 'Keine eigene Seite gefunden; Abschnitt 5 der Nutzungsbedingungen behandelt den Datenschutz' },
          { 'Option': 'Quellcode', 'Bezug': 'Kein öffentliches Repository gefunden' },
        ],
        note: 'Eine Versionsnummer wird nicht genannt. Der Installer hinter dem Download-Button wurde laut Download-Server zuletzt am 22. Oktober 2026 geändert und ist etwa 376 MB groß, während die Seite einen Download von 18 GB einschließlich Modell nennt; PromptQuorum hat ihn nicht heruntergeladen, wie das Modell auf den Rechner gelangt, ist daher ungeprüft.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Zeno braucht einen Apple-Silicon-Mac mit mindestens 16 GB RAM und viel freien Speicherplatz.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Chip und Speicher', 'Angaben der Quellen': 'Apple Silicon, mindestens 16 GB RAM' },
          { 'Punkt': 'Download', 'Angaben der Quellen': '18 GB, einschließlich des KI-Modells' },
          { 'Punkt': 'Speicherplatz', 'Angaben der Quellen': 'Etwa 45 GB frei während der Einrichtung, danach etwa 25 GB' },
          { 'Punkt': 'macOS-Version', 'Angaben der Quellen': 'Auf der Seite nicht angegeben' },
          { 'Punkt': 'Internet', 'Angaben der Quellen': 'Für den Download nötig; laut Seite arbeitet Zeno ohne Netzwerk weiter' },
          { 'Punkt': 'Tempo', 'Angaben der Quellen': 'Typisch 20 bis 50 Token pro Sekunde, je nach Speicher und geöffneten Apps' },
        ],
        note: 'Die Seite sagt nicht, welche Mac-Modelle dieses Tempo erreichen, und das Manifest räumt ein, dass Zeno sich „zunächst langsam anfühlen könnte“ („might feel slow at first“), weil ein 35B-Modell auf einem gewöhnlichen MacBook läuft.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Zeno-Seite oder aus den Nutzungsbedingungen; keiner wurde getestet.**',
        ],
        items: [
          '**Arbeit mit Dateien.** Zeno liest Ihre Dateien und entwirft und bearbeitet Dokumente gemeinsam mit Ihnen; die Seite nennt Verträge, Tabellen und Code als Beispiele.',
          '**Lange Agentenaufgaben.** Agentenaufgaben können laufen, „as long as the work requires“, ohne dass ein Cloud-Dienst beteiligt ist.',
          '**Berechtigungsabfragen.** Laut Nutzungsbedingungen legen Sie über Berechtigungsabfragen fest, was Zeno tun darf; manche Modi verringern, wie oft die App nachfragt.',
          '**Lernen aus Ihren Dateien.** Icosa sagt, Zeno passe sich an, sobald Sie es auf Ihre Dateien verweisen, und laut Manifest verändern sich die Modellgewichte bei der Nutzung; ein Mechanismus ist nicht dokumentiert.',
          '**Keine Modellauswahl.** Laut Seite gibt es kein Modell zum Auswählen; wie sich ein eigenes LMShop-Modell oder ein angefordertes Modell-Download einfügt, ist nicht dokumentiert.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut Nutzungsbedingungen, gültig ab dem 18. August 2026, verarbeitet Zeno Ihre Dateien und Chats auf Ihrem Computer, und standardmäßig verlassen sie Ihren Rechner nicht.** Die App geht nur ins Internet, um Updates zu prüfen (dabei wird nur die App-Version übermittelt), um ein von Ihnen angefordertes Modell oder Werkzeug herunterzuladen und wenn Sie etwas aus dem Web abrufen lassen. Die Bedingungen ergänzen, dass die Icosa-Website übliche Analysen nutzt, die App aber keine enthält.',
          'Die Bedingungen beschreiben auch, was Zeno lokal tun kann: Wenn Sie es erlauben, kann die KI Dateien auf Ihrem Rechner lesen, erstellen, ändern und löschen sowie Befehle ausführen. Nutzer sollen wichtige Ergebnisse prüfen, Sicherungen anlegen und bei Modi vorsichtig sein, die das Nachfragen vor Aktionen verringern; Gewährleistung und Haftung für Datenverlust werden ausgeschlossen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben von Icosa, keine Prüfergebnisse. Der Quellcode ist nicht veröffentlicht, und PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Die Aussage des Manifests, Icosa könne Ihre Daten physisch nicht einsehen („physically can\'t“), ist die Behauptung des Unternehmens selbst, und eine eigene Datenschutzseite wurde nicht gefunden.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Mac-Besitzer mit mindestens 16 GB**, die einen privaten Assistenten für Dokumente und Code wünschen und einen sehr großen Download akzeptieren.',
          '**Menschen, die die Verarbeitung auf dem eigenen Rechner bevorzugen** und bereit sind, die Berechtigungseinstellungen zu lesen, bevor ein Agent Dateien ändert.',
          '**Nutzer, die der Abrechnung pro Token überdrüssig sind**, eine kostenlose lokale Alternative suchen und ein Produkt in früher Phase akzeptieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Ausgabequalität.** Icosa sagt, ein beschnittenes 35B-Modell arbeite so, „wie man es von einem Frontier-Modell erwartet“ („the way you expect a frontier one to“); PromptQuorum hat keine Aufgaben ausgeführt, und die Seite veröffentlicht keinen Benchmark.',
          '**Tempo.** Die Angabe von 20 bis 50 Token pro Sekunde stammt von Icosa und hängt vom Mac ab; sie wurde hier nicht getestet.',
          '**Offline-Betrieb.** PromptQuorum hat Zeno nicht ohne Netzwerk getestet und den Datenverkehr nicht untersucht.',
          '**Selbstlernen.** Wie das Modell aus Ihren Dateien lernt und wie man es zurücksetzt, ist in keiner von PromptQuorum gefundenen Quelle dokumentiert.',
          '**Version, Lizenz und Quellcode.** Es wurden keine Versionsnummer, keine Softwarelizenz außer den Nutzungsbedingungen und kein Quellcode-Repository gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Atomic Bot](/de/power-local-llm/atomic-bot-review)', 'Plattformen': 'Mac, Windows, Linux, iOS, Android', 'Preis / Lizenz': 'Kostenlose App (MIT) / Cloud kostenpflichtig', 'Wichtigster Unterschied': 'Bündelt den OpenClaw-Agenten-Stack; läuft lokal oder in der Cloud und kann API-Modelle nutzen' },
          { 'App': '[Msty Go](/de/power-local-llm/msty-go-review)', 'Plattformen': 'Mac, Windows, Linux', 'Preis / Lizenz': 'Freemium / Closed Source', 'Wichtigster Unterschied': 'Agent für mehrstufige Aufgaben mit lokalen oder Cloud-Modellen' },
          { 'App': '[LocalGhost](/de/power-local-llm/localghost-review)', 'Plattformen': 'Linux-Server, Android-App', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Quelloffener persönlicher KI-Server, den Sie auf einem Debian-Rechner selbst betreiben' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der Seite jeder App, bevor Sie sich entscheiden; keine dieser Apps wurde im Vergleich zu Zeno getestet.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Darf ich Zeno bei der Arbeit oder für vertrauliche Dateien nutzen?',
            a: 'Die Nutzungsbedingungen legen die Verantwortung für das Handeln von Zeno beim Nutzer, verlangen, dass es nur mit Inhalten verwendet wird, die Sie verarbeiten dürfen, und schließen die Haftung für Datenverlust aus. Prüfen Sie die Regeln Ihres Arbeitgebers und legen Sie Sicherungen an; PromptQuorum hat Zeno nicht an einem Compliance-Rahmen gemessen.',
          },
          {
            q: 'Läuft Zeno unter Windows, Linux oder auf einem Intel-Mac?',
            a: 'Die Quellen nennen nur einen Mac-Download und als Voraussetzung einen Apple-Silicon-Mac; andere Plattformen oder Intel-Unterstützung werden nicht erwähnt.',
          },
          {
            q: 'Wer stellt Zeno her?',
            a: 'Icosa Computing, ein Unternehmen aus New York; CEO Mert Esencan unterzeichnet das Icosa-Manifest auf der Zeno-Seite. Icosa veröffentlicht außerdem Forschung zu Combinatorial Reasoning, die laut Icosa beim Training und bei der Auswahl von Modellen zum Einsatz kommt.',
          },
          {
            q: 'Wie melde ich einen Fehler oder erreiche das Team?',
            a: 'Die Zeno-Seite nennt einen [Community-Discord](https://discord.gg/f2DEU8frU), eine Feedback-Adresse ([info@icosacomputing.com](mailto:info@icosacomputing.com)) und einen Link zur Demo-Buchung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Zeno ist ein junger, kostenloser Versuch, ein großes lokales Modell und einen Agenten für Dateiarbeit in einem Mac-Download zu bündeln, mit klaren Hardware-Anforderungen und schlichten Nutzungsbedingungen, die beschreiben, was der Agent auf Ihrem Rechner tun darf. Dem stehen gegenüber: PromptQuorum fand kein Quellcode-Repository, Icosa nennt keine Versionsnummer, das Produkt stammt vom August 2026, und keine Aussage zu Tempo, Qualität, Offline-Betrieb oder Lernen wurde hier getestet. Zeno eignet sich für Besitzer von Apple-Silicon-Macs mit mindestens 16 GB, die einen privaten Assistenten ausprobieren, die Berechtigungseinstellungen lesen und Sicherungen anlegen; wer dokumentierte Compliance oder einen geprüften Build braucht, sollte unabhängige Tests abwarten.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Zeno-Seite](https://icosa.co/zeno) — Produktbeschreibung, Anforderungen, Kennzahlen und Manifest, geprüft am 24. Oktober 2026.',
          '[Nutzungsbedingungen von Zeno](https://icosa.co/terms) — gültig ab dem 18. August 2026; Datenschutz, Berechtigungen und Open-Source-Hinweise.',
          '[Icosa Computing](https://icosa.co/) — FAQ mit dem Veröffentlichungsdatum 19. August 2026, geprüft am 24. Oktober 2026.',
          'Antwort-Header des Download-Servers — Größe des Installers und Datum der letzten Änderung (22. Oktober 2026), geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Atomic-Bot-Rezension](/de/power-local-llm/atomic-bot-review) — ein KI-Kollege für Desktop und Cloud auf Basis des OpenClaw-Stacks.',
          '[Msty-Go-Rezension](/de/power-local-llm/msty-go-review) — ein Agent für mehrstufige Aufgaben mit lokalen oder Cloud-Modellen.',
          '[LocalGhost-Rezension](/de/power-local-llm/localghost-review) — ein persönlicher KI-Server zum Selbsthosten.',
          '[opencode-Rezension](/de/power-local-llm/opencode-review) — der quelloffene Coding-Agent, den die Nutzungsbedingungen von Zeno nennen.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/zeno-review-hero-es.webp',
    title: 'Reseña de Zeno: espacio de trabajo de IA privado y gratuito para Mac',
    seoTitle: 'Reseña de Zeno: espacio de trabajo de IA privado para Mac',
    intro:
      'Zeno es una app gratuita para macOS de [Icosa Computing](https://icosa.co/zeno), una empresa de Nueva York. Incluye un modelo de lenguaje de 35 000 millones de parámetros y, según Icosa, lee tus archivos, edita documentos y ejecuta tareas de agente por completo en tu Mac. Icosa la lanzó el 19 de agosto de 2026. Esta reseña se basa en la página oficial de Zeno, sus condiciones de uso y el servidor de descargas, consultados el 24 de octubre de 2026; PromptQuorum no ha instalado ni probado Zeno.',
    metaDescription:
      'Reseña de Zeno: espacio de IA gratuito para macOS de Icosa Computing con modelo 35B que trabaja sin conexión con tus archivos. Requisitos y dudas abiertas.',
    twitterDescription:
      'Reseña de Zeno: app gratuita para Mac que incluye un modelo 35B y dice trabajar sin conexión con tus archivos. Requisitos, condiciones y puntos sin verificar.',
    audience:
      'Usuarios de Mac que quieren saber qué necesita Zeno, cuánto cuesta, qué le permiten hacer en su equipo sus condiciones de uso y qué afirmaciones sobre privacidad, velocidad y calidad dejan sin confirmar las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Zeno',
    targetKeywords: [
      'reseña zeno',
      'zeno icosa mac',
      'icosa zeno ia local',
      'espacio de trabajo ia privado mac',
      'asistente ia sin conexión mac',
      'modelo 35b local macbook',
      'zeno de icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno es un espacio de trabajo de IA gratuito para Mac con Apple Silicon y 16 GB de RAM o más, creado por Icosa Computing.** **Según sus condiciones de uso, puede leer, modificar y borrar archivos y ejecutar comandos cuando tú lo permites, así que los avisos de permiso importan tanto como la promesa de privacidad.**',
    quickAnswerTop: {
      es: {
        question: '¿Funciona Zeno realmente sin conexión en un Mac?',
        answer:
          'Según Icosa, sí: el modelo viene con la app y Zeno sigue funcionando sin red. Las condiciones de uso añaden que la app solo se conecta a internet para buscar actualizaciones, para descargar un modelo o herramienta que tú pidas y cuando le pides obtener algo de la web.',
        bullets: [
          'Requiere un Mac con Apple Silicon y 16 GB de RAM o más.',
          'Es gratuito: Icosa indica 0 $ por token y sin límites de uso.',
          'Icosa cita de 20 a 50 tokens por segundo, según el Mac.',
          'Según Icosa, Zeno se adapta a cómo trabaja tu equipo cuando lo apuntas a tus archivos.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Zeno?', anchor: 'what-is-zeno' },
      { label: 'Cómo obtenerlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
            text: 'Zeno es una app gratuita para macOS que incluye un modelo de IA en la descarga y trabaja con tus documentos y tu código en el propio Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas una app y la apuntas a tus archivos; según su fabricante, un asistente los lee, redacta y edita sin enviarlos a un servicio en la nube.',
          },
        ],
        items: [
          'Mantenimiento: Icosa lanzó Zeno el 19 de agosto de 2026 y el instalador del servidor de descargas se modificó por última vez el 22 de octubre de 2026; no se publica número de versión, así que no se aplica aviso de proyecto inactivo.',
          'Modelo: un modelo sin nombre de 35 000 millones de parámetros que Icosa podó y ajustó; según las condiciones, Zeno ejecuta modelos de la familia Qwen.',
          'Acciones: si tú lo permites, Zeno puede leer, crear, modificar y borrar archivos y ejecutar comandos.',
          'Código: no se encontró ningún repositorio público; las condiciones citan el proyecto de código abierto opencode.',
          'Fabricante: Icosa Computing, Nueva York.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la página de Zeno, sus condiciones de uso y el servidor de descargas, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado, ejecutado ni medido Zeno, así que no se evalúan la calidad de las respuestas ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: '¿Qué es Zeno?',
        content: [
          '**Zeno es una aplicación de escritorio para macOS que ejecuta un modelo de IA en tu Mac y lo usa para leer documentos, redactar y editar textos, refactorizar código y llevar tareas de agente largas.** Icosa Computing, una empresa de Nueva York, la llama «the free, private AI workspace»; su FAQ da el 19 de agosto de 2026 como fecha de lanzamiento, y el dominio localwork.ai redirige a la página de Zeno.',
          'La página dice que en la descarga viene un modelo de 35 000 millones de parámetros, «pruned and tuned by Icosa», y no lo nombra. Las condiciones de uso indican que Zeno ejecuta modelos de la familia Qwen de Alibaba Cloud con licencia Apache 2.0 y se basa en el proyecto de código abierto opencode con licencia MIT. Icosa también gestiona [LMShop](https://lmshop.com), una plataforma web aparte para entrenar modelos personalizados que, según Icosa, se pueden ejecutar en Zeno.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerlo',
        content: [
          '**Zeno se descarga gratis para Mac desde el sitio de Icosa; no figura ninguna versión para Windows, Linux, iOS ni Android.**',
        ],
        columns: ['Opción', 'Cómo obtenerlo'],
        rows: [
          { 'Opción': 'Mac', 'Cómo obtenerlo': '[Descargar Zeno para Mac](https://icosa.co/zeno), gratis, solo Apple Silicon' },
          { 'Opción': 'Precio', 'Cómo obtenerlo': '0 $ por token, sin límites de uso, sin plan de pago listado' },
          { 'Opción': 'Sitio web', 'Cómo obtenerlo': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'Opción': 'Condiciones de uso', 'Cómo obtenerlo': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'Opción': 'Política de privacidad', 'Cómo obtenerlo': 'No se encontró una página aparte; la sección 5 de las condiciones de uso trata la privacidad' },
          { 'Opción': 'Código fuente', 'Cómo obtenerlo': 'No se encontró repositorio público' },
        ],
        note: 'No se publica número de versión. El instalador del botón de descarga se modificó por última vez el 22 de octubre de 2026 según el servidor y pesa unos 376 MB, mientras que la página indica una descarga de 18 GB que incluye el modelo; PromptQuorum no lo descargó, así que no se ha verificado cómo llega el modelo.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Zeno necesita un Mac con Apple Silicon y 16 GB de RAM o más, además de mucho espacio libre en disco.**',
        ],
        columns: ['Elemento', 'Lo que dicen las fuentes'],
        rows: [
          { 'Elemento': 'Chip y memoria', 'Lo que dicen las fuentes': 'Apple Silicon, 16 GB de RAM o más' },
          { 'Elemento': 'Descarga', 'Lo que dicen las fuentes': '18 GB, con el modelo de IA incluido' },
          { 'Elemento': 'Espacio en disco', 'Lo que dicen las fuentes': 'Unos 45 GB libres durante la instalación, unos 25 GB después' },
          { 'Elemento': 'Versión de macOS', 'Lo que dicen las fuentes': 'No figura en la página' },
          { 'Elemento': 'Internet', 'Lo que dicen las fuentes': 'Necesario para la descarga; según la página, Zeno funciona sin red' },
          { 'Elemento': 'Velocidad', 'Lo que dicen las fuentes': 'Normalmente de 20 a 50 tokens por segundo, según la memoria y las apps abiertas' },
        ],
        note: 'La página no dice qué modelos de Mac alcanzan esa velocidad, y el manifiesto admite que Zeno «podría parecer lento al principio» («might feel slow at first») porque un modelo de 35B se ajusta a un MacBook normal.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la página de Zeno o de sus condiciones de uso; ninguno se ha probado.**',
        ],
        items: [
          '**Trabajo con archivos.** Zeno lee tus archivos y redacta y edita documentos contigo; la página cita contratos, hojas de cálculo y código como ejemplos.',
          '**Tareas de agente largas.** Las tareas de agente pueden durar «as long as the work requires», sin ningún servicio en la nube en el circuito.',
          '**Avisos de permiso.** Según las condiciones, tú decides qué puede hacer Zeno mediante avisos de permiso, y algunos modos reducen la frecuencia con que pregunta.',
          '**Aprender de tus archivos.** Icosa dice que Zeno se adapta cuando lo apuntas a tus archivos, y el manifiesto afirma que los pesos del modelo cambian con el uso; no se documenta ningún mecanismo.',
          '**Sin selector de modelo.** La página dice que no hay modelo que elegir; no se documenta cómo encaja un modelo personalizado de LMShop o una descarga de modelo solicitada.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Las condiciones de uso, vigentes desde el 18 de agosto de 2026, dicen que Zeno procesa tus archivos y chats en tu ordenador y que, por defecto, nunca salen de tu equipo.** La app solo se conecta a internet para buscar actualizaciones (compartiendo únicamente la versión de la app), para descargar un modelo o herramienta que pidas y cuando le pides obtener algo de la web. Las condiciones añaden que el sitio de Icosa usa analítica estándar, mientras que la app no incluye ninguna.',
          'Las condiciones también describen lo que Zeno puede hacer en local: si lo permites, la IA puede leer, crear, modificar y borrar archivos y ejecutar comandos en tu equipo. Piden revisar los resultados importantes, hacer copias de seguridad y tener cuidado con los modos que reducen las confirmaciones antes de actuar, y excluyen garantías y responsabilidad por pérdida de datos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones de Icosa, no resultados de una auditoría. No se publica el código fuente y PromptQuorum no ha inspeccionado el tráfico de red de la app. La frase del manifiesto según la cual Icosa «physically can\'t» ver tus datos es una afirmación de la propia empresa, y no se encontró una página de política de privacidad aparte.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Propietarios de Mac con 16 GB o más** que quieren un asistente privado para documentos y código y aceptan una descarga muy grande.',
          '**Personas que prefieren procesar en su propio equipo** y están dispuestas a leer los ajustes de permisos antes de dejar que un agente modifique archivos.',
          '**Usuarios cansados de pagar por token** que buscan una alternativa local gratuita y aceptan un producto en fase temprana.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de las respuestas.** Icosa dice que un modelo de 35B podado funciona «como esperas de uno de frontera» («the way you expect a frontier one to»); PromptQuorum no ejecutó ninguna tarea y la página no publica ningún benchmark.',
          '**Velocidad.** La cifra de 20 a 50 tokens por segundo es de Icosa y depende del Mac; aquí no se ha probado.',
          '**Uso sin conexión.** PromptQuorum no probó Zeno sin red ni inspeccionó su tráfico.',
          '**Autoaprendizaje.** Cómo aprende el modelo de tus archivos y cómo reiniciarlo no está documentado en ninguna fuente que PromptQuorum haya encontrado.',
          '**Versión, licencia y código.** No se encontró número de versión, ni licencia de software aparte de las condiciones de uso, ni repositorio de código fuente.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Atomic Bot](/es/power-local-llm/atomic-bot-review)', 'Plataformas': 'Mac, Windows, Linux, iOS, Android', 'Precio / licencia': 'App gratuita (MIT) / nube de pago', 'Diferencia clave': 'Empaqueta la pila de agentes OpenClaw; funciona en local o en la nube y puede usar modelos por API' },
          { 'App': '[Msty Go](/es/power-local-llm/msty-go-review)', 'Plataformas': 'Mac, Windows, Linux', 'Precio / licencia': 'Freemium / código cerrado', 'Diferencia clave': 'Agente de tareas de varios pasos con modelos locales o en la nube' },
          { 'App': '[LocalGhost](/es/power-local-llm/localghost-review)', 'Plataformas': 'Servidor Linux, app Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Servidor de IA personal de código abierto que alojas en un equipo Debian' },
        ],
        note: 'Compara el precio, la licencia y las plataformas actuales en la página de cada app antes de elegir; ninguna se ha probado frente a Zeno.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar Zeno en el trabajo o con archivos confidenciales?',
            a: 'Las condiciones de uso atribuyen al usuario la responsabilidad de lo que hace Zeno, piden usarlo solo con contenido que tengas derecho a procesar y excluyen la responsabilidad por pérdida de datos. Consulta las normas de tu empresa y haz copias de seguridad; PromptQuorum no ha evaluado Zeno frente a ningún marco de cumplimiento.',
          },
          {
            q: '¿Funciona Zeno en Windows, Linux o en un Mac con Intel?',
            a: 'Las fuentes solo listan una descarga para Mac y piden un Mac con Apple Silicon; no se menciona ninguna otra plataforma ni compatibilidad con Intel.',
          },
          {
            q: '¿Quién hace Zeno?',
            a: 'Icosa Computing, una empresa de Nueva York; su CEO, Mert Esencan, firma el manifiesto de Icosa en la página de Zeno. Icosa también publica investigación sobre Combinatorial Reasoning, que dice usar al entrenar y seleccionar modelos.',
          },
          {
            q: '¿Cómo informo de un error o contacto con el equipo?',
            a: 'La página de Zeno indica un [Discord de la comunidad](https://discord.gg/f2DEU8frU), una dirección para comentarios ([info@icosacomputing.com](mailto:info@icosacomputing.com)) y un enlace para reservar una demostración.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Zeno es un intento reciente y gratuito de reunir en una sola descarga para Mac un modelo local grande y un agente que trabaja con archivos, con requisitos de hardware claros y unas condiciones de uso sencillas que describen lo que el agente puede hacer en tu equipo. En contra, PromptQuorum no encontró repositorio de código fuente, Icosa no publica número de versión, el producto es de agosto de 2026 y ninguna afirmación sobre velocidad, calidad, uso sin conexión o aprendizaje se probó aquí. Encaja con propietarios de Mac con Apple Silicon y 16 GB o más que quieran probar un asistente privado, lean los ajustes de permisos y hagan copias de seguridad; quien necesite cumplimiento documentado o una versión verificada debería esperar a pruebas independientes.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de Zeno](https://icosa.co/zeno) — descripción del producto, requisitos, cifras y manifiesto, consultada el 24 de octubre de 2026.',
          '[Condiciones de uso de Zeno](https://icosa.co/terms) — vigentes desde el 18 de agosto de 2026; privacidad, permisos y avisos de código abierto.',
          '[Icosa Computing](https://icosa.co/) — FAQ con la fecha de lanzamiento del 19 de agosto de 2026, consultada el 24 de octubre de 2026.',
          'Cabeceras de respuesta del servidor de descargas — tamaño del instalador y fecha de última modificación (22 de octubre de 2026), consultadas el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Atomic Bot](/es/power-local-llm/atomic-bot-review) — un compañero de IA de escritorio y nube basado en la pila OpenClaw.',
          '[Reseña de Msty Go](/es/power-local-llm/msty-go-review) — un agente de tareas de varios pasos para modelos locales o en la nube.',
          '[Reseña de LocalGhost](/es/power-local-llm/localghost-review) — un servidor de IA personal que alojas tú mismo.',
          '[Reseña de opencode](/es/power-local-llm/opencode-review) — el agente de programación de código abierto que citan las condiciones de Zeno.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/zeno-review-hero-fr.webp',
    title: 'Test de Zeno : espace de travail IA privé et gratuit pour Mac',
    seoTitle: 'Test de Zeno : espace de travail IA privé pour Mac',
    intro:
      'Zeno est une application macOS gratuite d\'[Icosa Computing](https://icosa.co/zeno), une entreprise new-yorkaise. Elle embarque un modèle de langage de 35 milliards de paramètres et, selon Icosa, lit vos fichiers, modifie des documents et exécute des tâches d\'agent entièrement sur votre Mac. Icosa l\'a publiée le 19 août 2026. Ce test s\'appuie sur la page officielle de Zeno, ses conditions d\'utilisation et le serveur de téléchargement, consultés le 24 octobre 2026 ; PromptQuorum n\'a ni installé ni testé Zeno.',
    metaDescription:
      'Test de Zeno : espace IA gratuit pour macOS d\'Icosa Computing, modèle 35B intégré qui travaille hors ligne sur vos fichiers. Prérequis et limites.',
    twitterDescription:
      'Test de Zeno : une application Mac gratuite qui embarque un modèle 35B et dit travailler hors ligne sur vos fichiers. Prérequis, conditions et points non vérifiés.',
    audience:
      'Les utilisateurs de Mac qui veulent savoir ce que Zeno exige, ce qu\'il coûte, ce que ses conditions d\'utilisation lui permettent de faire sur leur machine et quelles affirmations sur la confidentialité, la vitesse et la qualité les sources laissent non confirmées.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Zeno',
    targetKeywords: [
      'test zeno',
      'zeno icosa mac',
      'icosa zeno ia locale',
      'espace de travail ia privé mac',
      'assistant ia hors ligne mac',
      'modèle 35b local macbook',
      'zeno d\'icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno est un espace de travail IA gratuit pour les Mac Apple Silicon dotés d\'au moins 16 Go de RAM, développé par Icosa Computing.** **Selon ses conditions d\'utilisation, il peut lire, modifier et supprimer des fichiers et exécuter des commandes lorsque vous l\'autorisez ; les demandes d\'autorisation comptent donc autant que la promesse de confidentialité.**',
    quickAnswerTop: {
      fr: {
        question: 'Zeno fonctionne-t-il vraiment hors ligne sur un Mac ?',
        answer:
          'Selon Icosa, oui : le modèle est livré avec l\'application et Zeno continue de fonctionner sans réseau. Les conditions d\'utilisation précisent que l\'application ne se connecte à Internet que pour vérifier les mises à jour, télécharger un modèle ou un outil que vous demandez, et lorsque vous lui demandez de récupérer un contenu sur le web.',
        bullets: [
          'Nécessite un Mac Apple Silicon avec au moins 16 Go de RAM.',
          'Gratuit : Icosa indique 0 $ par jeton et aucune limite de débit.',
          'Icosa annonce 20 à 50 jetons par seconde, selon le Mac.',
          'Selon Icosa, Zeno s\'adapte à la façon de travailler de votre équipe dès que vous le dirigez vers vos fichiers.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Zeno ?', anchor: 'what-is-zeno' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-il', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Zeno est une application macOS gratuite qui embarque un modèle d\'IA dans son téléchargement et travaille sur vos documents et votre code directement sur le Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez une application et la dirigez vers vos fichiers ; selon son éditeur, un assistant les lit, les rédige et les modifie sans les envoyer à un service cloud.',
          },
        ],
        items: [
          'Maintenance : Icosa a publié Zeno le 19 août 2026 et l\'installeur du serveur de téléchargement a été modifié pour la dernière fois le 22 octobre 2026 ; aucun numéro de version n\'est publié, aucun avertissement de projet inactif ne s\'applique donc.',
          'Modèle : un modèle de 35 milliards de paramètres non nommé, élagué et ajusté par Icosa ; selon les conditions, Zeno exécute des modèles de la famille Qwen.',
          'Actions : si vous l\'autorisez, Zeno peut lire, créer, modifier et supprimer des fichiers et exécuter des commandes.',
          'Code source : aucun dépôt public n\'a été trouvé ; les conditions citent le projet open source opencode.',
          'Éditeur : Icosa Computing, New York.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur la page de Zeno, ses conditions d\'utilisation et le serveur de téléchargement, consultés le 24 octobre 2026. PromptQuorum n\'a ni installé, ni exécuté, ni mesuré Zeno : la qualité des réponses et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'Qu\'est-ce que Zeno ?',
        content: [
          '**Zeno est une application de bureau macOS qui exécute un modèle d\'IA sur votre Mac pour lire des documents, rédiger et modifier des textes, refactoriser du code et mener de longues tâches d\'agent.** Icosa Computing, une entreprise new-yorkaise, la présente comme « the free, private AI workspace » ; sa FAQ donne le 19 août 2026 comme date de sortie, et le domaine localwork.ai redirige vers la page de Zeno.',
          'Selon la page, un modèle de 35 milliards de paramètres est inclus dans le téléchargement, « pruned and tuned by Icosa », sans être nommé. Les conditions d\'utilisation indiquent que Zeno exécute des modèles de la famille Qwen d\'Alibaba Cloud sous licence Apache 2.0 et repose sur le projet open source opencode sous licence MIT. Icosa exploite aussi [LMShop](https://lmshop.com), une plateforme web distincte pour entraîner des modèles personnalisés qui, selon Icosa, peuvent être exécutés dans Zeno.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Zeno se télécharge gratuitement pour Mac depuis le site d\'Icosa ; aucune version Windows, Linux, iOS ou Android n\'est listée.**',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { 'Option': 'Mac', 'Comment l\'obtenir': '[Télécharger Zeno pour Mac](https://icosa.co/zeno), gratuit, Apple Silicon uniquement' },
          { 'Option': 'Prix', 'Comment l\'obtenir': '0 $ par jeton, pas de limite de débit, aucune offre payante listée' },
          { 'Option': 'Site web', 'Comment l\'obtenir': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'Option': 'Conditions d\'utilisation', 'Comment l\'obtenir': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'Option': 'Politique de confidentialité', 'Comment l\'obtenir': 'Aucune page distincte trouvée ; la section 5 des conditions d\'utilisation traite de la confidentialité' },
          { 'Option': 'Code source', 'Comment l\'obtenir': 'Aucun dépôt public trouvé' },
        ],
        note: 'Aucun numéro de version n\'est publié. L\'installeur derrière le bouton de téléchargement a été modifié pour la dernière fois le 22 octobre 2026 selon le serveur et pèse environ 376 Mo, alors que la page annonce un téléchargement de 18 Go incluant le modèle ; PromptQuorum ne l\'a pas téléchargé, la manière dont le modèle arrive reste donc non vérifiée.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Zeno exige un Mac Apple Silicon avec au moins 16 Go de RAM et beaucoup d\'espace disque libre.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Puce et mémoire', 'Ce que disent les sources': 'Apple Silicon, au moins 16 Go de RAM' },
          { 'Élément': 'Téléchargement', 'Ce que disent les sources': '18 Go, modèle d\'IA inclus' },
          { 'Élément': 'Espace disque', 'Ce que disent les sources': 'Environ 45 Go libres pendant l\'installation, environ 25 Go ensuite' },
          { 'Élément': 'Version de macOS', 'Ce que disent les sources': 'Non indiquée sur la page' },
          { 'Élément': 'Internet', 'Ce que disent les sources': 'Nécessaire pour le téléchargement ; selon la page, Zeno fonctionne sans réseau' },
          { 'Élément': 'Vitesse', 'Ce que disent les sources': 'Typiquement 20 à 50 jetons par seconde, selon la mémoire et les applications ouvertes' },
        ],
        note: 'La page ne précise pas quels Mac atteignent cette vitesse, et le manifeste admet que Zeno « pourrait sembler lent au début » (« might feel slow at first ») car un modèle 35B est installé sur un MacBook ordinaire.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la page de Zeno ou de ses conditions d\'utilisation ; aucun n\'a été testé.**',
        ],
        items: [
          '**Travail sur les fichiers.** Zeno lit vos fichiers et rédige et modifie des documents avec vous ; la page cite des contrats, des tableurs et du code en exemples.',
          '**Longues tâches d\'agent.** Les tâches d\'agent peuvent durer « as long as the work requires », sans service cloud dans la boucle.',
          '**Demandes d\'autorisation.** Selon les conditions, vous décidez de ce que Zeno peut faire via des demandes d\'autorisation, et certains modes réduisent la fréquence de ces demandes.',
          '**Apprentissage à partir de vos fichiers.** Icosa affirme que Zeno s\'adapte dès que vous le dirigez vers vos fichiers, et le manifeste dit que les poids du modèle évoluent à l\'usage ; aucun mécanisme n\'est documenté.',
          '**Pas de choix de modèle.** La page indique qu\'il n\'y a pas de modèle à choisir ; la place d\'un modèle LMShop personnalisé ou d\'un modèle demandé au téléchargement n\'est pas documentée.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Les conditions d\'utilisation, en vigueur depuis le 18 août 2026, indiquent que Zeno traite vos fichiers et vos conversations sur votre ordinateur et que, par défaut, ils ne quittent jamais votre machine.** L\'application ne se connecte à Internet que pour vérifier les mises à jour (en ne partageant que la version de l\'application), télécharger un modèle ou un outil que vous demandez, et lorsque vous lui demandez de récupérer un contenu sur le web. Les conditions ajoutent que le site d\'Icosa utilise des outils d\'analyse standard, alors que l\'application n\'en contient aucun.',
          'Les conditions décrivent aussi ce que Zeno peut faire en local : si vous l\'autorisez, l\'IA peut lire, créer, modifier et supprimer des fichiers et exécuter des commandes sur votre machine. Elles invitent à vérifier les résultats importants, à conserver des sauvegardes et à se méfier des modes qui réduisent les demandes de confirmation avant action, et elles excluent garanties et responsabilité en cas de perte de données.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations d\'Icosa, non des résultats d\'audit. Aucun code source n\'est publié et PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. L\'affirmation du manifeste selon laquelle Icosa « physically can\'t » consulter vos données est celle de l\'entreprise elle-même, et aucune page de politique de confidentialité distincte n\'a été trouvée.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-il',
        items: [
          '**Les propriétaires de Mac avec au moins 16 Go** qui veulent un assistant privé pour leurs documents et leur code et acceptent un très gros téléchargement.',
          '**Les personnes qui préfèrent un traitement sur leur propre machine** et sont prêtes à lire les réglages d\'autorisation avant de laisser un agent modifier des fichiers.',
          '**Les utilisateurs lassés de la facturation au jeton** qui cherchent une alternative locale gratuite et acceptent un produit à un stade précoce.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité des réponses.** Icosa affirme qu\'un modèle 35B élagué fonctionne « comme on l\'attend d\'un modèle de pointe » (« the way you expect a frontier one to ») ; PromptQuorum n\'a exécuté aucune tâche et la page ne publie aucun benchmark.',
          '**Vitesse.** Le chiffre de 20 à 50 jetons par seconde vient d\'Icosa et dépend du Mac ; il n\'a pas été testé ici.',
          '**Usage hors ligne.** PromptQuorum n\'a pas testé Zeno sans réseau ni inspecté son trafic.',
          '**Auto-apprentissage.** La façon dont le modèle apprend de vos fichiers, et la manière de le réinitialiser, ne sont documentées dans aucune source trouvée par PromptQuorum.',
          '**Version, licence et code source.** Aucun numéro de version, aucune licence logicielle hors conditions d\'utilisation et aucun dépôt de code source n\'ont été trouvés.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence principale'],
        rows: [
          { 'Application': '[Atomic Bot](/fr/power-local-llm/atomic-bot-review)', 'Plateformes': 'Mac, Windows, Linux, iOS, Android', 'Prix / licence': 'App gratuite (MIT) / cloud payant', 'Différence principale': 'Regroupe la pile d\'agents OpenClaw ; fonctionne en local ou dans le cloud et peut utiliser des modèles via API' },
          { 'Application': '[Msty Go](/fr/power-local-llm/msty-go-review)', 'Plateformes': 'Mac, Windows, Linux', 'Prix / licence': 'Freemium / code fermé', 'Différence principale': 'Agent de tâches en plusieurs étapes avec des modèles locaux ou cloud' },
          { 'Application': '[LocalGhost](/fr/power-local-llm/localghost-review)', 'Plateformes': 'Serveur Linux, app Android', 'Prix / licence': 'Gratuit / MIT', 'Différence principale': 'Serveur d\'IA personnel open source à héberger sur une machine Debian' },
        ],
        note: 'Comparez le prix, la licence et les plateformes actuels sur la page de chaque application avant de choisir ; aucune n\'a été testée face à Zeno.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser Zeno au travail ou pour des fichiers confidentiels ?',
            a: 'Les conditions d\'utilisation font porter sur l\'utilisateur la responsabilité de ce que fait Zeno, demandent de ne l\'employer qu\'avec des contenus que vous avez le droit de traiter et excluent toute responsabilité en cas de perte de données. Vérifiez les règles de votre employeur et faites des sauvegardes ; PromptQuorum n\'a évalué Zeno au regard d\'aucun cadre de conformité.',
          },
          {
            q: 'Zeno fonctionne-t-il sous Windows, Linux ou sur un Mac Intel ?',
            a: 'Les sources ne listent qu\'un téléchargement pour Mac et exigent un Mac Apple Silicon ; aucune autre plateforme et aucune prise en charge d\'Intel ne sont mentionnées.',
          },
          {
            q: 'Qui développe Zeno ?',
            a: 'Icosa Computing, une entreprise new-yorkaise ; son PDG Mert Esencan signe le manifeste d\'Icosa sur la page de Zeno. Icosa publie aussi des recherches sur le Combinatorial Reasoning, qu\'elle dit utiliser pour entraîner et sélectionner ses modèles.',
          },
          {
            q: 'Comment signaler un bug ou joindre l\'équipe ?',
            a: 'La page de Zeno indique un [Discord communautaire](https://discord.gg/f2DEU8frU), une adresse de retour d\'expérience ([info@icosacomputing.com](mailto:info@icosacomputing.com)) et un lien de réservation de démo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Zeno est une tentative récente et gratuite de regrouper un grand modèle local et un agent de travail sur fichiers dans un seul téléchargement Mac, avec des exigences matérielles claires et des conditions d\'utilisation simples qui décrivent ce que l\'agent peut faire sur votre machine. En face, PromptQuorum n\'a trouvé aucun dépôt de code source, Icosa ne publie aucun numéro de version, le produit date d\'août 2026 et aucune affirmation sur la vitesse, la qualité, l\'usage hors ligne ou l\'apprentissage n\'a été testée ici. Il convient aux propriétaires de Mac Apple Silicon avec au moins 16 Go qui veulent essayer un assistant privé, liront les réglages d\'autorisation et feront des sauvegardes ; qui a besoin d\'une conformité documentée ou d\'une version vérifiée devrait attendre des tests indépendants.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page de Zeno](https://icosa.co/zeno) — description du produit, prérequis, chiffres et manifeste, consultée le 24 octobre 2026.',
          '[Conditions d\'utilisation de Zeno](https://icosa.co/terms) — en vigueur depuis le 18 août 2026 ; confidentialité, autorisations et mentions open source.',
          '[Icosa Computing](https://icosa.co/) — FAQ indiquant la date de sortie du 19 août 2026, consultée le 24 octobre 2026.',
          'En-têtes de réponse du serveur de téléchargement — taille de l\'installeur et date de dernière modification (22 octobre 2026), consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'Atomic Bot](/fr/power-local-llm/atomic-bot-review) — un collègue IA de bureau et cloud fondé sur la pile OpenClaw.',
          '[Test de Msty Go](/fr/power-local-llm/msty-go-review) — un agent de tâches en plusieurs étapes pour modèles locaux ou cloud.',
          '[Test de LocalGhost](/fr/power-local-llm/localghost-review) — un serveur d\'IA personnel à héberger soi-même.',
          '[Test d\'opencode](/fr/power-local-llm/opencode-review) — l\'agent de code open source cité par les conditions d\'utilisation de Zeno.',
          '[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
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
    heroImage: '/images/zeno-review-hero-ja.webp',
    title: 'Zenoレビュー：Mac向け無料のプライベートAIワークスペース',
    seoTitle: 'Zenoレビュー：Mac向け無料のプライベートAIワークスペース',
    intro:
      'Zenoは、ニューヨークの企業[Icosa Computing](https://icosa.co/zeno)が提供する無料のmacOSアプリです。350億パラメータの言語モデルを同梱し、Icosaによると、ファイルの読み取り、文書の編集、エージェントタスクの実行をすべてMac上で行います。Icosaは2026年8月19日に公開しました。このレビューは、2026年10月24日に確認した公式Zenoページ、利用規約、ダウンロードサーバーに基づいており、PromptQuorumはZenoをインストールも検証もしていません。',
    metaDescription:
      'Zenoレビュー：Icosa Computing製の無料macOS向けAIワークスペース。350億パラメータのモデルを同梱し、ファイルをオフラインで扱うとされます。必要環境、利用規約、未確認事項を整理。',
    twitterDescription:
      'Zenoレビュー：350億パラメータのモデルを同梱し、ファイルをオフラインで扱うとされる無料のMacアプリ。必要環境、規約、未確認の点を紹介。',
    audience:
      'Zenoに何が必要で、いくらかかり、利用規約上Mac上で何ができるのか、そしてプライバシー・速度・品質に関するどの主張が情報源で確認できないのかを知りたいMacユーザー向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zenoレビュー',
    targetKeywords: [
      'zeno レビュー',
      'zeno icosa mac',
      'icosa zeno ローカルAI',
      'mac プライベート AI ワークスペース',
      'mac オフライン AI アシスタント',
      'macbook ローカル 35b モデル',
      'icosa computing zeno',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**ZenoはIcosa Computingが提供する、RAM 16GB以上のApple Silicon Mac向け無料AIワークスペースです。** **利用規約によれば、許可するとファイルの読み取り・変更・削除やコマンド実行ができるため、プライバシーの主張と同じくらい許可確認の設定が重要です。**',
    quickAnswerTop: {
      ja: {
        question: 'ZenoはMac上で本当にオフラインで動くのですか？',
        answer:
          'Icosaによれば、はい。モデルはアプリに同梱され、ネットワークがなくてもZenoは動作し続けます。利用規約には、アプリがインターネットに接続するのは、更新の確認、ユーザーが求めたモデルやツールのダウンロード、ユーザーがWeb上の情報の取得を求めたときだけだと記されています。',
        bullets: [
          'RAM 16GB以上のApple Silicon Macが必要です。',
          '無料：Icosaはトークンあたり0ドル、レート制限なしと記載しています。',
          'Icosaは毎秒20〜50トークンと案内しており、Macにより異なります。',
          'Icosaによれば、ファイルを指定するとチームの仕事の進め方に合わせて適応します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '簡易回答', anchor: 'quick-answer' },
      { label: 'Zenoとは', anchor: 'what-is-zeno' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要環境', anchor: 'requirements' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: 'こんな人向け', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
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
            text: 'ZenoはAIモデルをダウンロードに同梱した無料のmacOSアプリで、文書やコードをMac上で扱います。',
          },
          {
            type: 'plain-terms',
            text: 'アプリを入れてファイルを指定すると、提供元によれば、クラウドに送らずにアシスタントが読み取り・下書き・編集を行います。',
          },
        ],
        items: [
          'メンテナンス：Icosaは2026年8月19日に公開し、ダウンロードサーバー上のインストーラーは2026年10月22日に最終更新されています。バージョン番号は公開されておらず、更新停止の警告は該当しません。',
          'モデル：名称非公開の350億パラメータのモデルをIcosaが軽量化・調整したものです。規約によればQwenファミリーのモデルを実行します。',
          '操作：許可すると、Zenoはファイルの読み取り・作成・変更・削除とコマンド実行ができます。',
          'ソース：公開リポジトリは見つかりませんでした。規約はオープンソースのopencodeを明記しています。',
          '提供元：Icosa Computing（ニューヨーク）。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したZenoのページ、利用規約、ダウンロードサーバーに基づきます。PromptQuorumはZenoをインストール・実行・計測しておらず、回答品質と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'Zenoとは',
        content: [
          '**ZenoはMac上でAIモデルを動かし、文書の読み取り、文章の下書きと編集、コードのリファクタリング、長時間のエージェントタスクを行うmacOSデスクトップアプリです。** ニューヨークのIcosa Computingは「the free, private AI workspace」と呼んでおり、FAQでは2026年8月19日が公開日とされ、ドメインlocalwork.aiはZenoのページへ転送されます。',
          'ページによれば、ダウンロードには350億パラメータのモデルが「pruned and tuned by Icosa」として含まれますが、名称は示されていません。利用規約には、ZenoがAlibaba CloudのQwenファミリーのモデルをApache License 2.0で実行し、オープンソースのopencodeをMITライセンスで利用して構築されていると記されています。Icosaはカスタムモデルを学習させる別のWebサービス[LMShop](https://lmshop.com)も運営しており、Icosaによれば、そのモデルはZenoで実行できます。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**ZenoはIcosaのウェブサイトからMac向けに無料でダウンロードできます。Windows、Linux、iOS、Android版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Mac', '入手方法': '[Mac版Zenoをダウンロード](https://icosa.co/zeno)、無料、Apple Siliconのみ' },
          { '項目': '価格', '入手方法': 'トークンあたり0ドル、レート制限なし、有料プランの記載なし' },
          { '項目': 'ウェブサイト', '入手方法': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { '項目': '利用規約', '入手方法': '[icosa.co/terms](https://icosa.co/terms)' },
          { '項目': 'プライバシーポリシー', '入手方法': '独立したページは見つからず、利用規約の第5項でプライバシーを扱っています' },
          { '項目': 'ソースコード', '入手方法': '公開リポジトリは見つかりませんでした' },
        ],
        note: 'バージョン番号は公開されていません。ダウンロードボタンの先のインストーラーは、サーバー情報によれば2026年10月22日に最終更新され、約376MBです。一方、ページはモデルを含む18GBのダウンロードと記載しており、PromptQuorumはダウンロードしていないため、モデルがどう届くかは未確認です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '必要環境',
        content: [
          '**ZenoにはRAM 16GB以上のApple Silicon Macと、大きな空きディスク容量が必要です。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'チップとメモリ', '情報源の記載': 'Apple Silicon、RAM 16GB以上' },
          { '項目': 'ダウンロード', '情報源の記載': '18GB（AIモデルを含む）' },
          { '項目': 'ディスク容量', '情報源の記載': 'セットアップ中は約45GB、完了後は約25GBの空きが必要' },
          { '項目': 'macOSのバージョン', '情報源の記載': 'ページに記載なし' },
          { '項目': 'インターネット', '情報源の記載': 'ダウンロードに必要。ページによればその後はネットワークなしで動作' },
          { '項目': '速度', '情報源の記載': '通常は毎秒20〜50トークン。メモリや起動中のアプリにより変動' },
        ],
        note: 'ページはどのMacでこの速度が出るかを示しておらず、マニフェストは、通常のMacBookに350億パラメータのモデルを載せているため、最初は遅く感じるかもしれない（"might feel slow at first"）と認めています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はZenoのページまたは利用規約に基づくもので、いずれも検証していません。**',
        ],
        items: [
          '**ファイル作業。** Zenoはファイルを読み取り、文書の下書きと編集を一緒に行います。ページは例として契約書、表計算、コードを挙げています。',
          '**長時間のエージェントタスク。** エージェントタスクは「as long as the work requires」実行でき、クラウドサービスは介在しません。',
          '**許可確認。** 規約によれば、Zenoに何を許すかは許可確認で決め、確認の頻度を下げるモードもあります。',
          '**ファイルからの学習。** Icosaはファイルを指定するとZenoが適応すると述べ、マニフェストは使うほどモデルの重みが変わると述べていますが、仕組みは文書化されていません。',
          '**モデル選択なし。** ページによれば選ぶモデルはありません。LMShopのカスタムモデルや要求したモデルのダウンロードがどう組み込まれるかは文書化されていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年8月18日施行の利用規約によれば、Zenoはファイルとチャットをお使いのコンピューター上で処理し、デフォルトではマシンの外に出ません。** アプリがインターネットに接続するのは、更新の確認（送るのはアプリのバージョンのみ）、ユーザーが求めたモデルやツールのダウンロード、ユーザーがWebからの取得を求めたときだけです。規約には、Icosaのウェブサイトは標準的な解析を使うが、アプリには解析機能がないとも記されています。',
          '規約はZenoがローカルで行えることも説明しています。許可すると、AIはマシン上のファイルを読み取り・作成・変更・削除し、コマンドを実行できます。重要な出力を確認し、バックアップを取り、確認頻度を下げるモードに注意するよう求めており、データ損失に関する保証と責任は除外されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはIcosaの申告であり、監査結果ではありません。ソースコードは公開されておらず、PromptQuorumはアプリの通信を調べていません。マニフェストの「physically can\'t」（データを見ることは物理的にできない）という主張は同社自身のものであり、独立したプライバシーポリシーのページは見つかりませんでした。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'こんな人向け',
        items: [
          '**RAM 16GB以上のMacユーザー**で、文書やコード向けのプライベートなアシスタントを求め、非常に大きなダウンロードを許容できる人。',
          '**処理を自分のマシンで行いたい人**で、エージェントにファイルを変更させる前に許可設定を読む意思がある人。',
          '**トークン課金に疲れた人**で、無料のローカルな代替を探し、初期段階の製品を受け入れられる人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**出力品質。** Icosaは軽量化した350億パラメータのモデルが「フロンティアモデルのように」（"the way you expect a frontier one to"）動くと述べますが、PromptQuorumはタスクを実行しておらず、ページにベンチマークもありません。',
          '**速度。** 毎秒20〜50トークンはIcosaの数値でMacにより変わり、ここでは未検証です。',
          '**オフライン動作。** PromptQuorumはネットワークなしでの動作確認も通信の調査も行っていません。',
          '**自己学習。** モデルがファイルからどう学習し、どうリセットするかは、PromptQuorumが見つけた情報源のどこにも文書化されていません。',
          '**バージョン・ライセンス・ソース。** バージョン番号、利用規約以外のソフトウェアライセンス、ソースリポジトリは見つかりませんでした。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)', '対応': 'Mac、Windows、Linux、iOS、Android', '価格／ライセンス': '無料アプリ(MIT)／クラウドは有料', '主な違い': 'OpenClawのエージェント基盤をパッケージ化。ローカルでもクラウドでも動き、APIモデルも使用可能' },
          { 'アプリ': '[Msty Go](/ja/power-local-llm/msty-go-review)', '対応': 'Mac、Windows、Linux', '価格／ライセンス': 'フリーミアム／クローズドソース', '主な違い': 'ローカルまたはクラウドのモデルで複数ステップのタスクを実行するエージェント' },
          { 'アプリ': '[LocalGhost](/ja/power-local-llm/localghost-review)', '対応': 'Linuxサーバー、Androidアプリ', '価格／ライセンス': '無料／MIT', '主な違い': 'Debianマシンで自前運用するオープンソースの個人用AIサーバー' },
        ],
        note: '選ぶ前に、各アプリの公式ページで最新の価格・ライセンス・対応環境を確認してください。いずれもZenoとの比較検証は行っていません。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '仕事や機密ファイルにZenoを使えますか？',
            a: '利用規約は、Zenoの動作に対する責任を利用者に負わせ、処理する権利のあるコンテンツにのみ使うよう求め、データ損失の責任を除外しています。勤務先のルールを確認しバックアップを取ってください。PromptQuorumはZenoをいかなるコンプライアンス基準でも評価していません。',
          },
          {
            q: 'ZenoはWindows、Linux、Intel Macで動きますか？',
            a: '情報源にはMac向けダウンロードしかなく、要件はApple Silicon Macと記されています。他のプラットフォームやIntelへの対応は記載されていません。',
          },
          {
            q: 'Zenoを作っているのは誰ですか？',
            a: 'ニューヨークの企業Icosa Computingです。CEOのMert Esencan氏がZenoのページでIcosaマニフェストに署名しています。Icosaは、モデルの学習と選定に使うとするCombinatorial Reasoningの研究も公開しています。',
          },
          {
            q: '不具合の報告やチームへの連絡はどうすればよいですか？',
            a: 'Zenoのページには、[コミュニティDiscord](https://discord.gg/f2DEU8frU)、フィードバック用アドレス（[info@icosacomputing.com](mailto:info@icosacomputing.com)）、デモ予約リンクが記載されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Zenoは、大きなローカルモデルとファイル作業用エージェントを1つのMac向けダウンロードにまとめた、新しい無料の試みで、ハードウェア要件は明確で、エージェントがマシン上で何をしてよいかを平易な利用規約で説明しています。一方、PromptQuorumはソースリポジトリを見つけられず、Icosaはバージョン番号を公開しておらず、製品は2026年8月公開で、速度・品質・オフライン動作・学習に関する主張はここでは検証していません。RAM 16GB以上のApple Silicon Macで、許可設定を読みバックアップを取りながらプライベートなアシスタントを試したい人に向きます。文書化されたコンプライアンスや検証済みビルドが必要な場合は、独立した検証を待つのが適切です。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Zenoのページ](https://icosa.co/zeno) — 製品説明、必要環境、数値、マニフェスト。2026年10月24日確認。',
          '[Zenoの利用規約](https://icosa.co/terms) — 2026年8月18日施行。プライバシー、権限、オープンソース表記。',
          '[Icosa Computing](https://icosa.co/) — 公開日2026年8月19日を記載したFAQ。2026年10月24日確認。',
          'ダウンロードサーバーの応答ヘッダー — インストーラーのサイズと最終更新日（2026年10月22日）。2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Atomic Botレビュー](/ja/power-local-llm/atomic-bot-review) — OpenClaw基盤を使ったデスクトップ／クラウド対応のAIコワーカー。',
          '[Msty Goレビュー](/ja/power-local-llm/msty-go-review) — ローカルまたはクラウドのモデルで複数ステップのタスクを実行するエージェント。',
          '[LocalGhostレビュー](/ja/power-local-llm/localghost-review) — 自前でホストする個人用AIサーバー。',
          '[opencodeレビュー](/ja/power-local-llm/opencode-review) — Zenoの利用規約が明記するオープンソースのコーディングエージェント。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの総合カタログ。',
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
    heroImage: '/images/zeno-review-hero-pt.webp',
    title: 'Análise do Zeno: espaço de trabalho de IA privado e gratuito para Mac',
    seoTitle: 'Análise do Zeno: espaço de trabalho de IA privado para Mac',
    intro:
      'O Zeno é um app gratuito para macOS da [Icosa Computing](https://icosa.co/zeno), empresa de Nova York. Ele traz um modelo de linguagem de 35 bilhões de parâmetros e, segundo a Icosa, lê seus arquivos, edita documentos e executa tarefas de agente inteiramente no seu Mac. A Icosa o lançou em 19 de agosto de 2026. Esta análise se baseia na página oficial do Zeno, nos termos de uso e no servidor de download, consultados em 24 de outubro de 2026; a PromptQuorum não instalou nem testou o Zeno.',
    metaDescription:
      'Análise do Zeno: espaço de IA gratuito para macOS da Icosa Computing, com modelo 35B que trabalha offline com seus arquivos. Requisitos e pontos em aberto.',
    twitterDescription:
      'Análise do Zeno: app gratuito para Mac que traz um modelo 35B e diz trabalhar offline com seus arquivos. Requisitos, termos e o que não foi verificado.',
    audience:
      'Usuários de Mac que querem saber o que o Zeno exige, quanto custa, o que seus termos de uso permitem que ele faça no computador e quais afirmações sobre privacidade, velocidade e qualidade as fontes deixam sem confirmação.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Zeno',
    targetKeywords: [
      'análise zeno',
      'zeno icosa mac',
      'icosa zeno ia local',
      'espaço de trabalho ia privado mac',
      'assistente de ia offline mac',
      'modelo 35b local macbook',
      'zeno da icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**O Zeno é um espaço de trabalho de IA gratuito para Macs com Apple Silicon e 16 GB de RAM ou mais, criado pela Icosa Computing.** **Segundo os termos de uso, ele pode ler, alterar e apagar arquivos e executar comandos quando você permite; por isso os pedidos de permissão importam tanto quanto a promessa de privacidade.**',
    quickAnswerTop: {
      pt: {
        question: 'O Zeno realmente roda offline no Mac?',
        answer:
          'Segundo a Icosa, sim: o modelo acompanha o app e o Zeno continua funcionando sem rede. Os termos de uso acrescentam que o app só se conecta à internet para verificar atualizações, baixar um modelo ou ferramenta que você pedir e quando você manda buscar algo na web.',
        bullets: [
          'Exige um Mac com Apple Silicon e 16 GB de RAM ou mais.',
          'Uso gratuito: a Icosa informa US$ 0 por token e nenhum limite de uso.',
          'A Icosa cita de 20 a 50 tokens por segundo, conforme o Mac.',
          'Segundo a Icosa, o Zeno se adapta ao jeito de trabalhar da sua equipe quando você o aponta para seus arquivos.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Zeno?', anchor: 'what-is-zeno' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
            text: 'O Zeno é um app gratuito para macOS que traz um modelo de IA no download e trabalha com seus documentos e seu código no próprio Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala um app e o aponta para seus arquivos; segundo o fabricante, um assistente os lê, redige e edita sem enviá-los a um serviço na nuvem.',
          },
        ],
        items: [
          'Manutenção: a Icosa lançou o Zeno em 19 de agosto de 2026 e o instalador do servidor de download foi modificado pela última vez em 22 de outubro de 2026; nenhum número de versão é publicado, então não há aviso de projeto parado.',
          'Modelo: um modelo sem nome de 35 bilhões de parâmetros que a Icosa podou e ajustou; segundo os termos, o Zeno executa modelos da família Qwen.',
          'Ações: quando você permite, o Zeno pode ler, criar, alterar e apagar arquivos e executar comandos.',
          'Código: nenhum repositório público foi encontrado; os termos citam o projeto de código aberto opencode.',
          'Fabricante: Icosa Computing, Nova York.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página do Zeno, nos termos de uso e no servidor de download, consultados em 24 de outubro de 2026. A PromptQuorum não instalou, executou nem mediu o Zeno, portanto a qualidade das respostas e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'O que é o Zeno?',
        content: [
          '**O Zeno é um aplicativo de desktop para macOS que executa um modelo de IA no seu Mac e o usa para ler documentos, redigir e editar textos, refatorar código e conduzir tarefas de agente longas.** A Icosa Computing, empresa de Nova York, o chama de «the free, private AI workspace»; o FAQ dela dá 19 de agosto de 2026 como data de lançamento, e o domínio localwork.ai redireciona para a página do Zeno.',
          'A página diz que um modelo de 35 bilhões de parâmetros vem dentro do download, «pruned and tuned by Icosa», e não o nomeia. Os termos de uso afirmam que o Zeno executa modelos da família Qwen, da Alibaba Cloud, sob a Apache License 2.0 e é construído sobre o projeto de código aberto opencode, sob a licença MIT. A Icosa também mantém o [LMShop](https://lmshop.com), uma plataforma web separada para treinar modelos personalizados que, segundo a Icosa, podem ser executados no Zeno.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Zeno é um download gratuito para Mac no site da Icosa; nenhuma versão para Windows, Linux, iOS ou Android está listada.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': 'Mac', 'Como obter': '[Baixar o Zeno para Mac](https://icosa.co/zeno), gratuito, somente Apple Silicon' },
          { 'Opção': 'Preço', 'Como obter': 'US$ 0 por token, sem limite de uso, nenhum plano pago listado' },
          { 'Opção': 'Site', 'Como obter': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'Opção': 'Termos de uso', 'Como obter': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'Opção': 'Política de privacidade', 'Como obter': 'Nenhuma página separada encontrada; a seção 5 dos termos de uso trata da privacidade' },
          { 'Opção': 'Código-fonte', 'Como obter': 'Nenhum repositório público encontrado' },
        ],
        note: 'Nenhum número de versão é publicado. O instalador do botão de download foi modificado pela última vez em 22 de outubro de 2026, segundo o servidor, e tem cerca de 376 MB, enquanto a página informa um download de 18 GB que inclui o modelo; a PromptQuorum não o baixou, então não foi verificado como o modelo chega.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O Zeno exige um Mac com Apple Silicon e 16 GB de RAM ou mais, além de muito espaço livre em disco.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Chip e memória', 'O que dizem as fontes': 'Apple Silicon, 16 GB de RAM ou mais' },
          { 'Item': 'Download', 'O que dizem as fontes': '18 GB, incluindo o modelo de IA' },
          { 'Item': 'Espaço em disco', 'O que dizem as fontes': 'Cerca de 45 GB livres durante a instalação, cerca de 25 GB depois' },
          { 'Item': 'Versão do macOS', 'O que dizem as fontes': 'Não informada na página' },
          { 'Item': 'Internet', 'O que dizem as fontes': 'Necessária para o download; segundo a página, o Zeno funciona sem rede' },
          { 'Item': 'Velocidade', 'O que dizem as fontes': 'Tipicamente de 20 a 50 tokens por segundo, conforme a memória e os apps abertos' },
        ],
        note: 'A página não diz quais modelos de Mac atingem essa velocidade, e o manifesto admite que o Zeno «pode parecer lento no início» («might feel slow at first») porque um modelo de 35B foi encaixado em um MacBook comum.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página do Zeno ou dos termos de uso; nenhum foi testado.**',
        ],
        items: [
          '**Trabalho com arquivos.** O Zeno lê seus arquivos e redige e edita documentos com você; a página cita contratos, planilhas e código como exemplos.',
          '**Tarefas de agente longas.** As tarefas de agente podem rodar «as long as the work requires», sem serviço na nuvem no caminho.',
          '**Pedidos de permissão.** Segundo os termos, você decide o que o Zeno pode fazer por meio de pedidos de permissão, e alguns modos reduzem a frequência com que ele pergunta.',
          '**Aprender com seus arquivos.** A Icosa diz que o Zeno se adapta quando você o aponta para seus arquivos, e o manifesto afirma que os pesos do modelo mudam com o uso; nenhum mecanismo é documentado.',
          '**Sem seletor de modelo.** A página diz que não há modelo para escolher; não está documentado como um modelo personalizado do LMShop ou um download de modelo solicitado se encaixa.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Os termos de uso, em vigor desde 18 de agosto de 2026, dizem que o Zeno processa seus arquivos e conversas no seu computador e que, por padrão, eles nunca saem da sua máquina.** O app só se conecta à internet para verificar atualizações (compartilhando apenas a versão do app), baixar um modelo ou ferramenta que você pedir e quando você manda buscar algo na web. Os termos acrescentam que o site da Icosa usa análises padrão, enquanto o app não contém nenhuma.',
          'Os termos também descrevem o que o Zeno pode fazer localmente: quando você permite, a IA pode ler, criar, alterar e apagar arquivos e executar comandos no seu computador. Eles orientam revisar resultados importantes, manter backups e ter cuidado com modos que reduzem os pedidos de confirmação antes de agir, e excluem garantias e responsabilidade por perda de dados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações da Icosa, não resultados de auditoria. O código-fonte não é publicado e a PromptQuorum não inspecionou o tráfego de rede do app. A frase do manifesto de que a Icosa «physically can\'t» ver seus dados é uma afirmação da própria empresa, e nenhuma página separada de política de privacidade foi encontrada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Donos de Mac com 16 GB ou mais** que querem um assistente privado para documentos e código e aceitam um download muito grande.',
          '**Pessoas que preferem processar no próprio computador** e estão dispostas a ler as configurações de permissão antes de deixar um agente alterar arquivos.',
          '**Usuários cansados da cobrança por token** que buscam uma alternativa local gratuita e aceitam um produto em fase inicial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade das respostas.** A Icosa diz que um modelo de 35B podado funciona «como você espera de um de ponta» («the way you expect a frontier one to»); a PromptQuorum não executou nenhuma tarefa e a página não publica benchmark.',
          '**Velocidade.** O número de 20 a 50 tokens por segundo é da Icosa e depende do Mac; não foi testado aqui.',
          '**Uso offline.** A PromptQuorum não testou o Zeno sem rede nem inspecionou seu tráfego.',
          '**Autoaprendizado.** Como o modelo aprende com seus arquivos e como redefini-lo não está documentado em nenhuma fonte encontrada pela PromptQuorum.',
          '**Versão, licença e código.** Não foram encontrados número de versão, licença de software além dos termos de uso nem repositório de código-fonte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Principal diferença'],
        rows: [
          { 'App': '[Atomic Bot](/pt/power-local-llm/atomic-bot-review)', 'Plataformas': 'Mac, Windows, Linux, iOS, Android', 'Preço / licença': 'App gratuito (MIT) / nuvem paga', 'Principal diferença': 'Reúne a pilha de agentes OpenClaw; roda localmente ou na nuvem e pode usar modelos via API' },
          { 'App': '[Msty Go](/pt/power-local-llm/msty-go-review)', 'Plataformas': 'Mac, Windows, Linux', 'Preço / licença': 'Freemium / código fechado', 'Principal diferença': 'Agente de tarefas em várias etapas com modelos locais ou na nuvem' },
          { 'App': '[LocalGhost](/pt/power-local-llm/localghost-review)', 'Plataformas': 'Servidor Linux, app Android', 'Preço / licença': 'Grátis / MIT', 'Principal diferença': 'Servidor de IA pessoal de código aberto que você hospeda em uma máquina Debian' },
        ],
        note: 'Compare preço, licença e plataformas atuais na página de cada app antes de escolher; nenhum deles foi testado frente ao Zeno.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o Zeno no trabalho ou com arquivos confidenciais?',
            a: 'Os termos de uso colocam no usuário a responsabilidade pelo que o Zeno faz, pedem que ele seja usado apenas com conteúdo que você tem direito de processar e excluem a responsabilidade por perda de dados. Consulte as regras do seu empregador e mantenha backups; a PromptQuorum não avaliou o Zeno frente a nenhum regime de conformidade.',
          },
          {
            q: 'O Zeno roda em Windows, Linux ou em um Mac com Intel?',
            a: 'As fontes listam apenas um download para Mac e exigem um Mac com Apple Silicon; nenhuma outra plataforma nem suporte a Intel é mencionado.',
          },
          {
            q: 'Quem faz o Zeno?',
            a: 'A Icosa Computing, empresa de Nova York; o CEO Mert Esencan assina o manifesto da Icosa na página do Zeno. A Icosa também publica pesquisa sobre Combinatorial Reasoning, que diz usar no treinamento e na seleção de modelos.',
          },
          {
            q: 'Como reporto um bug ou falo com a equipe?',
            a: 'A página do Zeno lista um [Discord da comunidade](https://discord.gg/f2DEU8frU), um endereço para feedback ([info@icosacomputing.com](mailto:info@icosacomputing.com)) e um link para agendar uma demonstração.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Zeno é uma tentativa recente e gratuita de reunir em um único download para Mac um grande modelo local e um agente que trabalha com arquivos, com requisitos de hardware claros e termos de uso simples que descrevem o que o agente pode fazer no seu computador. Em contrapartida, a PromptQuorum não encontrou repositório de código-fonte, a Icosa não publica número de versão, o produto é de agosto de 2026 e nenhuma afirmação sobre velocidade, qualidade, uso offline ou aprendizado foi testada aqui. Serve para donos de Mac com Apple Silicon e 16 GB ou mais que queiram experimentar um assistente privado, leiam as configurações de permissão e mantenham backups; quem precisa de conformidade documentada ou de uma versão verificada deve esperar testes independentes.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página do Zeno](https://icosa.co/zeno) — descrição do produto, requisitos, números e manifesto, consultada em 24 de outubro de 2026.',
          '[Termos de uso do Zeno](https://icosa.co/terms) — em vigor desde 18 de agosto de 2026; privacidade, permissões e avisos de código aberto.',
          '[Icosa Computing](https://icosa.co/) — FAQ com a data de lançamento de 19 de agosto de 2026, consultada em 24 de outubro de 2026.',
          'Cabeçalhos de resposta do servidor de download — tamanho do instalador e data da última modificação (22 de outubro de 2026), consultados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Atomic Bot](/pt/power-local-llm/atomic-bot-review) — um colega de IA para desktop e nuvem baseado na pilha OpenClaw.',
          '[Análise do Msty Go](/pt/power-local-llm/msty-go-review) — um agente de tarefas em várias etapas para modelos locais ou na nuvem.',
          '[Análise do LocalGhost](/pt/power-local-llm/localghost-review) — um servidor de IA pessoal que você hospeda por conta própria.',
          '[Análise do opencode](/pt/power-local-llm/opencode-review) — o agente de programação de código aberto citado nos termos do Zeno.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/zeno-review-hero-ar.webp',
    title: 'مراجعة Zeno: مساحة عمل ذكاء اصطناعي خاصة ومجانية لجهاز Mac',
    seoTitle: 'مراجعة Zeno: مساحة عمل ذكاء اصطناعي خاصة لجهاز Mac',
    intro:
      'Zeno تطبيق مجاني لنظام macOS من شركة [Icosa Computing](https://icosa.co/zeno) ومقرها نيويورك. يضم نموذجًا لغويًا بحجم 35 مليار معامل، وبحسب Icosa فهو يقرأ ملفاتك ويحرّر المستندات وينفّذ مهام الوكيل بالكامل على جهاز Mac لديك. أطلقته Icosa في 19 أغسطس 2026. تستند هذه المراجعة إلى صفحة Zeno الرسمية وشروط الاستخدام وخادم التنزيل، وقد جرى الاطلاع عليها في 24 أكتوبر 2026؛ ولم تقم PromptQuorum بتثبيت Zeno أو اختباره.',
    metaDescription:
      'مراجعة Zeno: مساحة عمل ذكاء اصطناعي مجانية لنظام macOS من Icosa Computing بنموذج 35B مدمج يعمل على ملفاتك دون اتصال. المتطلبات والنقاط غير المؤكدة.',
    twitterDescription:
      'مراجعة Zeno: تطبيق Mac مجاني بنموذج 35B مدمج يعمل على ملفاتك دون اتصال بحسب مطوّره. المتطلبات والشروط وما لم يُتحقق منه.',
    audience:
      'مستخدمو Mac الذين يريدون معرفة ما يحتاجه Zeno وكم يكلّف وما تتيحه له شروط الاستخدام على جهازهم، وأي ادعاءات بشأن الخصوصية والسرعة والجودة تتركها المصادر دون تأكيد.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Zeno',
    targetKeywords: [
      'مراجعة zeno',
      'zeno icosa mac',
      'icosa zeno ذكاء اصطناعي محلي',
      'مساحة عمل ذكاء اصطناعي خاصة mac',
      'مساعد ذكاء اصطناعي دون اتصال mac',
      'نموذج 35b محلي macbook',
      'zeno من icosa computing',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno مساحة عمل ذكاء اصطناعي مجانية لأجهزة Mac بمعالج Apple Silicon وذاكرة 16 GB أو أكثر، من تطوير Icosa Computing.** **تقول شروط الاستخدام إنه يستطيع قراءة الملفات وتعديلها وحذفها وتنفيذ الأوامر عندما تسمح له، لذا فإن طلبات الإذن لا تقل أهمية عن وعد الخصوصية.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Zeno فعلًا دون اتصال على جهاز Mac؟',
        answer:
          'بحسب Icosa، نعم: النموذج يأتي مع التطبيق ويواصل Zeno العمل حين تُفصل الشبكة. وتضيف شروط الاستخدام أن التطبيق لا يتصل بالإنترنت إلا للتحقق من التحديثات، وتنزيل نموذج أو أداة تطلبها، وعندما تطلب منه جلب شيء من الويب.',
        bullets: [
          'يتطلب جهاز Mac بمعالج Apple Silicon وذاكرة 16 GB أو أكثر.',
          'مجاني الاستخدام: تذكر Icosa تكلفة 0 دولار لكل رمز (token) ودون حدود للمعدل.',
          'تذكر Icosa سرعة من 20 إلى 50 رمزًا في الثانية بحسب الجهاز.',
          'بحسب Icosa، يتكيّف Zeno مع طريقة عمل فريقك بمجرد توجيهه إلى ملفاتك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Zeno؟', anchor: 'what-is-zeno' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
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
            text: 'Zeno تطبيق macOS مجاني يضم نموذج ذكاء اصطناعي داخل التنزيل ويعمل على مستنداتك وشيفرتك على جهاز Mac نفسه.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت تطبيقًا واحدًا وتوجّهه إلى ملفاتك، فيقرأها مساعد ويصيغها ويحرّرها بحسب الشركة المطوّرة دون إرسالها إلى خدمة سحابية.',
          },
        ],
        items: [
          'الصيانة: أطلقت Icosa تطبيق Zeno في 19 أغسطس 2026، وعُدّل ملف التثبيت على خادم التنزيل آخر مرة في 22 أكتوبر 2026؛ ولا يُنشر رقم إصدار، لذا لا ينطبق تحذير المشروع المتوقف.',
          'النموذج: نموذج غير مسمّى بحجم 35 مليار معامل قامت Icosa بتقليمه وضبطه؛ وبحسب الشروط يشغّل Zeno نماذج من عائلة Qwen.',
          'الإجراءات: عندما تسمح له، يستطيع Zeno قراءة الملفات وإنشاءها وتعديلها وحذفها وتنفيذ الأوامر.',
          'الشيفرة المصدرية: لم يُعثر على مستودع عام؛ وتذكر الشروط مشروع opencode مفتوح المصدر.',
          'المطوّر: Icosa Computing، نيويورك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Zeno وشروط الاستخدام وخادم التنزيل، وقد جرى الاطلاع عليها في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Zeno ولم تشغّله ولم تقِسه، لذا لم يُقيَّم مستوى الإجابات ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'ما هو Zeno؟',
        content: [
          '**Zeno تطبيق سطح مكتب لنظام macOS يشغّل نموذج ذكاء اصطناعي على جهاز Mac لديك ويستخدمه لقراءة المستندات وصياغة النصوص وتحريرها وإعادة هيكلة الشيفرة وتنفيذ مهام وكيل طويلة.** تصفه شركة Icosa Computing النيويوركية بأنه «the free, private AI workspace»؛ وتذكر الأسئلة الشائعة لديها 19 أغسطس 2026 تاريخًا للإطلاق، ويعيد النطاق localwork.ai التوجيه إلى صفحة Zeno.',
          'تقول الصفحة إن نموذجًا بحجم 35 مليار معامل يأتي داخل التنزيل، «pruned and tuned by Icosa»، ولا تذكر اسمه. وتنص شروط الاستخدام على أن Zeno يشغّل نماذج من عائلة Qwen التابعة لـ Alibaba Cloud بموجب Apache License 2.0، ويستند إلى مشروع opencode مفتوح المصدر بموجب رخصة MIT. وتدير Icosa أيضًا [LMShop](https://lmshop.com)، وهي منصة ويب منفصلة لتدريب نماذج مخصصة يمكن تشغيلها في Zeno بحسب Icosa.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**Zeno تنزيل مجاني لأجهزة Mac من موقع Icosa؛ ولا توجد نسخة مدرجة لأنظمة Windows أو Linux أو iOS أو Android.**',
        ],
        columns: ['الخيار', 'كيفية الحصول عليه'],
        rows: [
          { 'الخيار': 'Mac', 'كيفية الحصول عليه': '[نزّل Zeno لجهاز Mac](https://icosa.co/zeno)، مجاني، لمعالجات Apple Silicon فقط' },
          { 'الخيار': 'السعر', 'كيفية الحصول عليه': '0 دولار لكل رمز، دون حدود للمعدل، ولا توجد خطة مدفوعة مدرجة' },
          { 'الخيار': 'الموقع', 'كيفية الحصول عليه': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { 'الخيار': 'شروط الاستخدام', 'كيفية الحصول عليه': '[icosa.co/terms](https://icosa.co/terms)' },
          { 'الخيار': 'سياسة الخصوصية', 'كيفية الحصول عليه': 'لم يُعثر على صفحة منفصلة؛ يتناول البند 5 من شروط الاستخدام موضوع الخصوصية' },
          { 'الخيار': 'الشيفرة المصدرية', 'كيفية الحصول عليه': 'لم يُعثر على مستودع عام' },
        ],
        note: 'لا يُنشر رقم إصدار. عُدّل ملف التثبيت خلف زر التنزيل آخر مرة في 22 أكتوبر 2026 بحسب خادم التنزيل، وحجمه نحو 376 MB، بينما تذكر الصفحة تنزيلًا بحجم 18 GB يشمل النموذج؛ ولم تنزّله PromptQuorum، لذا لم يُتحقق من كيفية وصول النموذج.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يحتاج Zeno إلى جهاز Mac بمعالج Apple Silicon وذاكرة 16 GB أو أكثر ومساحة قرص حرة كبيرة.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'المعالج والذاكرة', 'ما تقوله المصادر': 'Apple Silicon، ذاكرة 16 GB أو أكثر' },
          { 'البند': 'التنزيل', 'ما تقوله المصادر': '18 GB، يشمل نموذج الذكاء الاصطناعي' },
          { 'البند': 'مساحة القرص', 'ما تقوله المصادر': 'نحو 45 GB حرة أثناء الإعداد، ونحو 25 GB بعده' },
          { 'البند': 'إصدار macOS', 'ما تقوله المصادر': 'غير مذكور في الصفحة' },
          { 'البند': 'الإنترنت', 'ما تقوله المصادر': 'مطلوب للتنزيل؛ وتقول الصفحة إن Zeno يعمل دون شبكة' },
          { 'البند': 'السرعة', 'ما تقوله المصادر': 'عادةً من 20 إلى 50 رمزًا في الثانية بحسب الذاكرة والتطبيقات المفتوحة' },
        ],
        note: 'لا تذكر الصفحة أي طرازات Mac تبلغ هذه السرعة، ويقرّ البيان بأن Zeno «قد يبدو بطيئًا في البداية» («might feel slow at first») لأن نموذجًا بحجم 35B رُكّب على جهاز MacBook عادي.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره صفحة Zeno أو شروط الاستخدام؛ ولم يُختبر أي منها.**',
        ],
        items: [
          '**العمل على الملفات.** يقرأ Zeno ملفاتك ويصوغ المستندات ويحرّرها معك؛ وتذكر الصفحة العقود وجداول البيانات والشيفرة أمثلة.',
          '**مهام الوكيل الطويلة.** يمكن أن تستمر مهام الوكيل «as long as the work requires» دون وجود خدمة سحابية في المسار.',
          '**طلبات الإذن.** بحسب الشروط، أنت تقرر ما يسمح لـ Zeno بفعله عبر طلبات الإذن، وبعض الأوضاع تقلل عدد مرات السؤال.',
          '**التعلّم من ملفاتك.** تقول Icosa إن Zeno يتكيّف حين توجّهه إلى ملفاتك، ويقول البيان إن أوزان النموذج تتغير مع الاستخدام؛ ولا توجد آلية موثّقة.',
          '**لا اختيار للنموذج.** تقول الصفحة إنه لا يوجد نموذج لاختياره؛ ولم يُوثَّق كيف يندرج نموذج مخصص من LMShop أو نموذج مطلوب تنزيله.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول شروط الاستخدام السارية منذ 18 أغسطس 2026 إن Zeno يعالج ملفاتك ومحادثاتك على حاسوبك، وإنها لا تغادر جهازك افتراضيًا.** لا يتصل التطبيق بالإنترنت إلا للتحقق من التحديثات (مع مشاركة إصدار التطبيق فقط)، وتنزيل نموذج أو أداة تطلبها، وعندما تطلب منه جلب شيء من الويب. وتضيف الشروط أن موقع Icosa يستخدم تحليلات قياسية بينما لا يحتوي التطبيق على أي تحليلات.',
          'وتصف الشروط أيضًا ما يستطيع Zeno فعله محليًا: عندما تسمح له، يمكن للذكاء الاصطناعي قراءة الملفات على جهازك وإنشاءها وتعديلها وحذفها وتنفيذ الأوامر. وتطلب من المستخدمين مراجعة المخرجات المهمة والاحتفاظ بنسخ احتياطية والحذر من الأوضاع التي تقلل طلب التأكيد قبل التنفيذ، وتستثني الضمانات والمسؤولية عن فقدان البيانات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من Icosa وليست نتائج تدقيق. الشيفرة المصدرية غير منشورة، ولم تفحص PromptQuorum حركة الشبكة للتطبيق. أما قول البيان إن Icosa «physically can\'t» (لا تستطيع فعليًا) الاطلاع على بياناتك فهو ادعاء الشركة نفسها، ولم يُعثر على صفحة منفصلة لسياسة الخصوصية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مالكو أجهزة Mac بذاكرة 16 GB أو أكثر** الذين يريدون مساعدًا خاصًا للمستندات والشيفرة ويقبلون تنزيلًا كبيرًا جدًا.',
          '**من يفضّلون المعالجة على جهازهم** وهم مستعدون لقراءة إعدادات الأذونات قبل السماح لوكيل بتعديل الملفات.',
          '**المستخدمون الذين سئموا الفوترة لكل رمز** ويبحثون عن بديل محلي مجاني ويقبلون منتجًا في مرحلة مبكرة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة المخرجات.** تقول Icosa إن نموذج 35B المقلَّم يعمل «كما تتوقع من نموذج رائد» («the way you expect a frontier one to»)؛ ولم تنفّذ PromptQuorum أي مهمة، ولا تنشر الصفحة أي اختبار أداء.',
          '**السرعة.** رقم 20 إلى 50 رمزًا في الثانية من Icosa ويتوقف على الجهاز؛ ولم يُختبر هنا.',
          '**العمل دون اتصال.** لم تختبر PromptQuorum تطبيق Zeno دون شبكة ولم تفحص حركة بياناته.',
          '**التعلّم الذاتي.** كيف يتعلم النموذج من ملفاتك وكيفية إعادة ضبطه غير موثّقين في أي مصدر عثرت عليه PromptQuorum.',
          '**الإصدار والترخيص والمصدر.** لم يُعثر على رقم إصدار ولا على ترخيص برمجي غير شروط الاستخدام ولا على مستودع للشيفرة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Atomic Bot](/ar/power-local-llm/atomic-bot-review)', 'المنصات': 'Mac وWindows وLinux وiOS وAndroid', 'السعر / الترخيص': 'تطبيق مجاني (MIT) / سحابة مدفوعة', 'الفرق الأبرز': 'يجمع حزمة وكلاء OpenClaw؛ يعمل محليًا أو في السحابة ويمكنه استخدام نماذج عبر API' },
          { 'التطبيق': '[Msty Go](/ar/power-local-llm/msty-go-review)', 'المنصات': 'Mac وWindows وLinux', 'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر', 'الفرق الأبرز': 'وكيل لمهام متعددة الخطوات مع نماذج محلية أو سحابية' },
          { 'التطبيق': '[LocalGhost](/ar/power-local-llm/localghost-review)', 'المنصات': 'خادم Linux وتطبيق Android', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الأبرز': 'خادم ذكاء اصطناعي شخصي مفتوح المصدر تستضيفه على جهاز Debian' },
        ],
        note: 'قارن السعر والترخيص والمنصات الحالية في صفحة كل تطبيق قبل الاختيار؛ ولم يُختبر أي منها مقابل Zeno.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام Zeno في العمل أو مع ملفات سرية؟',
            a: 'تُحمّل شروط الاستخدام المستخدمَ مسؤولية ما يفعله Zeno، وتطلب استخدامه فقط مع محتوى يحق لك معالجته، وتستثني المسؤولية عن فقدان البيانات. راجع قواعد جهة عملك واحتفظ بنسخ احتياطية؛ ولم تقيّم PromptQuorum تطبيق Zeno وفق أي إطار امتثال.',
          },
          {
            q: 'هل يعمل Zeno على Windows أو Linux أو Mac بمعالج Intel؟',
            a: 'تذكر المصادر تنزيلًا لجهاز Mac فقط وتشترط جهاز Mac بمعالج Apple Silicon؛ ولا يُذكر أي نظام آخر ولا دعم لمعالجات Intel.',
          },
          {
            q: 'من يصنع Zeno؟',
            a: 'Icosa Computing، شركة من نيويورك؛ ويوقّع المدير التنفيذي Mert Esencan بيان Icosa على صفحة Zeno. وتنشر Icosa أيضًا أبحاثًا عن Combinatorial Reasoning تقول إنها تستخدمها في تدريب النماذج واختيارها.',
          },
          {
            q: 'كيف أبلّغ عن خطأ أو أتواصل مع الفريق؟',
            a: 'تذكر صفحة Zeno [خادم Discord للمجتمع](https://discord.gg/f2DEU8frU) وعنوانًا لإرسال الملاحظات ([info@icosacomputing.com](mailto:info@icosacomputing.com)) ورابطًا لحجز عرض توضيحي.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Zeno محاولة حديثة ومجانية لجمع نموذج محلي كبير ووكيل يعمل على الملفات في تنزيل واحد لجهاز Mac، بمتطلبات عتادية واضحة وشروط استخدام بسيطة تصف ما يجوز للوكيل فعله على جهازك. في المقابل، لم تعثر PromptQuorum على مستودع للشيفرة المصدرية، ولا تنشر Icosa رقم إصدار، والمنتج صدر في أغسطس 2026، ولم يُختبر هنا أي ادعاء بشأن السرعة أو الجودة أو العمل دون اتصال أو التعلّم. يناسب مالكي أجهزة Mac بمعالج Apple Silicon وذاكرة 16 GB أو أكثر ممن يريدون تجربة مساعد خاص مع قراءة إعدادات الأذونات والاحتفاظ بنسخ احتياطية؛ ومن يحتاج إلى امتثال موثّق أو نسخة مُتحقَّق منها فعليه انتظار اختبارات مستقلة.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة Zeno](https://icosa.co/zeno) — وصف المنتج والمتطلبات والأرقام والبيان، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[شروط استخدام Zeno](https://icosa.co/terms) — سارية منذ 18 أغسطس 2026؛ الخصوصية والأذونات وإشعارات المصادر المفتوحة.',
          '[Icosa Computing](https://icosa.co/) — الأسئلة الشائعة وفيها تاريخ الإطلاق 19 أغسطس 2026، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          'ترويسات استجابة خادم التنزيل — حجم ملف التثبيت وتاريخ آخر تعديل (22 أكتوبر 2026)، جرى الاطلاع عليها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Atomic Bot](/ar/power-local-llm/atomic-bot-review) — زميل عمل بالذكاء الاصطناعي لسطح المكتب والسحابة مبني على حزمة OpenClaw.',
          '[مراجعة Msty Go](/ar/power-local-llm/msty-go-review) — وكيل لمهام متعددة الخطوات مع نماذج محلية أو سحابية.',
          '[مراجعة LocalGhost](/ar/power-local-llm/localghost-review) — خادم ذكاء اصطناعي شخصي تستضيفه بنفسك.',
          '[مراجعة opencode](/ar/power-local-llm/opencode-review) — وكيل البرمجة مفتوح المصدر الذي تذكره شروط Zeno.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    heroImage: '/images/zeno-review-hero-zh.webp',
    title: 'Zeno 评测：适用于 Mac 的免费私有 AI 工作区',
    seoTitle: 'Zeno 评测：Mac 免费私有 AI 工作区，内置 35B 模型',
    intro:
      'Zeno 是纽约公司 [Icosa Computing](https://icosa.co/zeno) 推出的免费 macOS 应用。它内置一个 350 亿参数的语言模型，据 Icosa 称，读取文件、编辑文档和运行智能体任务都完全在你的 Mac 上进行。Icosa 于 2026 年 8 月 19 日发布该应用。本评测依据 2026 年 10 月 24 日查阅的 Zeno 官方页面、使用条款和下载服务器；PromptQuorum 没有安装或测试过 Zeno。',
    metaDescription:
      'Zeno 评测：Icosa Computing 推出的免费 macOS AI 工作区，内置 350 亿参数模型，据称可离线处理文件。运行要求、隐私条款与未经证实的部分。',
    twitterDescription:
      'Zeno 评测：内置 350 亿参数模型、据称可离线处理文件的免费 Mac 应用。运行要求、使用条款与未经验证的内容。',
    audience:
      '想了解 Zeno 需要什么配置、费用如何、使用条款允许它在自己电脑上做什么，以及哪些隐私、速度和质量说法在资料中无法确认的 Mac 用户。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zeno 评测',
    targetKeywords: [
      'zeno 评测',
      'zeno icosa mac',
      'icosa zeno 本地 AI',
      'mac 私有 AI 工作区',
      'mac 离线 AI 助手',
      'macbook 本地 35b 模型',
      'icosa computing zeno',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno 是 Icosa Computing 推出的免费 AI 工作区，适用于 16 GB 及以上内存的 Apple Silicon Mac。** **据其使用条款，在你允许时它可以读取、修改和删除文件并运行命令，因此权限提示与隐私承诺同样重要。**',
    quickAnswerTop: {
      zh: {
        question: 'Zeno 真的能在 Mac 上离线运行吗？',
        answer:
          '据 Icosa 称可以：模型随应用一同提供，断网时 Zeno 仍可工作。使用条款补充说，应用只会在检查更新、下载你要求的模型或工具、以及你要求它从网上获取内容时联网。',
        bullets: [
          '需要 16 GB 及以上内存的 Apple Silicon Mac。',
          '免费使用：Icosa 列出每个 token 0 美元、无速率限制。',
          'Icosa 给出的速度为每秒 20 至 50 个 token，因 Mac 而异。',
          '据 Icosa 称，你把文件交给 Zeno 后，它会适应团队的工作方式。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Zeno 是什么？', anchor: 'what-is-zeno' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '资料确认的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
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
            text: 'Zeno 是一款免费的 macOS 应用，下载包内附带 AI 模型，直接在 Mac 上处理你的文档和代码。',
          },
          {
            type: 'plain-terms',
            text: '安装应用并指向你的文件后，据厂商称，助手会读取、起草和编辑这些文件，而无需把它们发送到云服务。',
          },
        ],
        items: [
          '维护情况：Icosa 于 2026 年 8 月 19 日发布 Zeno，下载服务器上的安装包最后修改于 2026 年 10 月 22 日；未公布版本号，因此不适用停止维护警告。',
          '模型：一个未公开名称的 350 亿参数模型，由 Icosa 剪枝并调优；据使用条款，Zeno 运行 Qwen 系列模型。',
          '操作：在你允许时，Zeno 可以读取、创建、修改和删除文件并运行命令。',
          '源代码：未找到公开代码仓库；使用条款注明采用开源项目 opencode。',
          '厂商：Icosa Computing，纽约。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 2026 年 10 月 24 日查阅的 Zeno 页面、使用条款和下载服务器。PromptQuorum 没有安装、运行或测试 Zeno，因此未评估回答质量与速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'Zeno 是什么？',
        content: [
          '**Zeno 是一款 macOS 桌面应用，在你的 Mac 上运行 AI 模型，用来读取文档、起草和编辑文本、重构代码并完成长时间的智能体任务。** 纽约公司 Icosa Computing 称其为“the free, private AI workspace”；其常见问题页给出的发布日期是 2026 年 8 月 19 日，域名 localwork.ai 会跳转到 Zeno 页面。',
          '页面称下载包内含一个 350 亿参数的模型，“pruned and tuned by Icosa”，但没有给出模型名称。使用条款说明，Zeno 运行阿里云的 Qwen 系列模型（Apache License 2.0），并基于开源项目 opencode（MIT 许可证）构建。Icosa 还运营 [LMShop](https://lmshop.com)，这是一个用于训练自定义模型的独立网络平台，据 Icosa 称这些模型可在 Zeno 中运行。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Zeno 可从 Icosa 官网免费下载 Mac 版；未列出 Windows、Linux、iOS 或 Android 版本。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Mac', '获取方式': '[下载 Mac 版 Zeno](https://icosa.co/zeno)，免费，仅限 Apple Silicon' },
          { '选项': '价格', '获取方式': '每个 token 0 美元，无速率限制，未列出付费方案' },
          { '选项': '官网', '获取方式': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { '选项': '使用条款', '获取方式': '[icosa.co/terms](https://icosa.co/terms)' },
          { '选项': '隐私政策', '获取方式': '未找到独立页面；使用条款第 5 节涉及隐私' },
          { '选项': '源代码', '获取方式': '未找到公开代码仓库' },
        ],
        note: '未公布版本号。据下载服务器，下载按钮背后的安装包最后修改于 2026 年 10 月 22 日，大小约 376 MB，而页面写明含模型的下载为 18 GB；PromptQuorum 没有下载它，因此模型如何到达尚未核实。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**Zeno 需要 16 GB 及以上内存的 Apple Silicon Mac，以及大量可用磁盘空间。**',
        ],
        columns: ['项目', '资料所述'],
        rows: [
          { '项目': '芯片与内存', '资料所述': 'Apple Silicon，16 GB 及以上内存' },
          { '项目': '下载', '资料所述': '18 GB，含 AI 模型' },
          { '项目': '磁盘空间', '资料所述': '安装期间约需 45 GB 可用空间，之后约 25 GB' },
          { '项目': 'macOS 版本', '资料所述': '页面未说明' },
          { '项目': '网络', '资料所述': '下载时需要；据页面，之后断网也可运行' },
          { '项目': '速度', '资料所述': '通常每秒 20 至 50 个 token，取决于内存和已打开的应用' },
        ],
        note: '页面没有说明哪些 Mac 型号能达到该速度，其宣言也承认，由于把 350 亿参数模型装进了普通 MacBook，Zeno 一开始可能会觉得慢（“might feel slow at first”）。',
      },
      features: {
        id: 'key-features',
        title: '资料确认的功能',
        content: [
          '**以下各项均来自 Zeno 页面或使用条款，均未经测试。**',
        ],
        items: [
          '**处理文件。** Zeno 读取你的文件，并与你一起起草和编辑文档；页面以合同、电子表格和代码为例。',
          '**长时间智能体任务。** 智能体任务可以“as long as the work requires”地运行，流程中没有云服务。',
          '**权限提示。** 据使用条款，你通过权限提示决定 Zeno 可以做什么，部分模式会减少提示频率。',
          '**从文件中学习。** Icosa 称你把文件交给 Zeno 后它会适应，宣言还说使用越多模型权重越会变化；其机制没有文档说明。',
          '**无需选择模型。** 页面称没有需要选择的模型；LMShop 自定义模型或你要求下载的模型如何接入，没有文档说明。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**自 2026 年 8 月 18 日起生效的使用条款称，Zeno 在你的电脑上处理文件和聊天内容，默认不会离开你的设备。** 应用只会在检查更新（只共享应用版本）、下载你要求的模型或工具、以及你要求它从网上获取内容时联网。条款还说明，Icosa 网站使用标准分析工具，而应用本身不含分析功能。',
          '条款也说明了 Zeno 在本地能做什么：在你允许时，AI 可以读取、创建、修改和删除你电脑上的文件并运行命令。条款提醒用户检查重要输出、做好备份，并谨慎使用会减少操作前确认的模式，同时排除了担保以及对数据丢失的责任。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是 Icosa 的声明，不是审计结果。源代码未公开，PromptQuorum 也没有检查该应用的网络流量。宣言中“physically can\'t”（物理上无法查看你的数据）的说法是公司自己的主张，且未找到独立的隐私政策页面。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**16 GB 及以上内存的 Mac 用户**：想要一个处理文档和代码的私有助手，并能接受很大的下载量。',
          '**更愿意在自己设备上处理数据的人**：愿意在让智能体修改文件之前先看清权限设置。',
          '**厌倦按 token 计费的用户**：想要免费的本地替代方案，并能接受处于早期阶段的产品。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**输出质量。** Icosa 称剪枝后的 350 亿参数模型“像你期望的前沿模型那样”工作（“the way you expect a frontier one to”）；PromptQuorum 没有运行任何任务，页面也没有公布基准测试。',
          '**速度。** 每秒 20 至 50 个 token 是 Icosa 的数字，因 Mac 而异，此处未测试。',
          '**离线使用。** PromptQuorum 没有在断网状态下测试 Zeno，也没有检查其网络流量。',
          '**自我学习。** 模型如何从你的文件中学习、如何重置，PromptQuorum 找到的资料中均无文档说明。',
          '**版本、许可证与源代码。** 未找到版本号、除使用条款之外的软件许可证，也未找到源代码仓库。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)', '平台': 'Mac、Windows、Linux、iOS、Android', '价格 / 许可证': '应用免费 (MIT) / 云端付费', '主要区别': '打包 OpenClaw 智能体栈；可本地或云端运行，也可使用 API 模型' },
          { '应用': '[Msty Go](/zh/power-local-llm/msty-go-review)', '平台': 'Mac、Windows、Linux', '价格 / 许可证': '免费增值 / 闭源', '主要区别': '可搭配本地或云端模型执行多步骤任务的智能体' },
          { '应用': '[LocalGhost](/zh/power-local-llm/localghost-review)', '平台': 'Linux 服务器、Android 应用', '价格 / 许可证': '免费 / MIT', '主要区别': '可自行部署在 Debian 机器上的开源个人 AI 服务器' },
        ],
        note: '选择前请在各应用自己的页面核对当前的价格、许可证和平台；这些应用均未与 Zeno 对比测试。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以在工作中或处理机密文件时使用 Zeno 吗？',
            a: '使用条款把 Zeno 所作所为的责任交给用户，要求仅用于你有权处理的内容，并排除对数据丢失的责任。请查看雇主的规定并做好备份；PromptQuorum 没有依据任何合规框架评估过 Zeno。',
          },
          {
            q: 'Zeno 能在 Windows、Linux 或 Intel Mac 上运行吗？',
            a: '资料只列出 Mac 下载，并要求使用 Apple Silicon Mac；未提及其他平台或对 Intel 的支持。',
          },
          {
            q: '谁开发了 Zeno？',
            a: '纽约公司 Icosa Computing；CEO Mert Esencan 在 Zeno 页面上署名了 Icosa 宣言。Icosa 还发布了 Combinatorial Reasoning 的研究，称其用于训练和筛选模型。',
          },
          {
            q: '如何反馈问题或联系团队？',
            a: 'Zeno 页面列出了[社区 Discord](https://discord.gg/f2DEU8frU)、反馈邮箱（[info@icosacomputing.com](mailto:info@icosacomputing.com)）和演示预约链接。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Zeno 是一次较新的免费尝试，把大型本地模型和处理文件的智能体打包进一个 Mac 下载包，硬件要求明确，使用条款也用平实的语言说明了智能体可以在你的电脑上做什么。另一方面，PromptQuorum 没有找到源代码仓库，Icosa 没有公布版本号，产品发布于 2026 年 8 月，而关于速度、质量、离线使用和学习的说法这里均未测试。它适合拥有 16 GB 及以上内存的 Apple Silicon Mac 用户，愿意先阅读权限设置并做好备份，再试用私有助手；需要有文档可查的合规性或经过验证的版本的人，应等待独立测试。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Zeno 页面](https://icosa.co/zeno) — 产品说明、运行要求、数字与宣言，2026 年 10 月 24 日查阅。',
          '[Zeno 使用条款](https://icosa.co/terms) — 2026 年 8 月 18 日生效；隐私、权限与开源声明。',
          '[Icosa Computing](https://icosa.co/) — 注明 2026 年 8 月 19 日发布日期的常见问题，2026 年 10 月 24 日查阅。',
          '下载服务器响应头 — 安装包大小与最后修改日期（2026 年 10 月 22 日），2026 年 10 月 24 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Atomic Bot 评测](/zh/power-local-llm/atomic-bot-review) — 基于 OpenClaw 栈的桌面与云端 AI 同事。',
          '[Msty Go 评测](/zh/power-local-llm/msty-go-review) — 可搭配本地或云端模型的多步骤任务智能体。',
          '[LocalGhost 评测](/zh/power-local-llm/localghost-review) — 可自行托管的个人 AI 服务器。',
          '[opencode 评测](/zh/power-local-llm/opencode-review) — Zeno 使用条款中注明的开源编程智能体。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
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
    heroImage: '/images/zeno-review-hero-ko.webp',
    title: 'Zeno 리뷰: Mac용 무료 프라이빗 AI 워크스페이스',
    seoTitle: 'Zeno 리뷰: Mac용 무료 프라이빗 AI 워크스페이스',
    intro:
      'Zeno는 뉴욕 기업 [Icosa Computing](https://icosa.co/zeno)의 무료 macOS 앱입니다. 350억 파라미터 언어 모델을 함께 제공하며, Icosa에 따르면 파일 읽기, 문서 편집, 에이전트 작업을 모두 Mac 안에서 처리합니다. Icosa는 2026년 8월 19일에 출시했습니다. 이 리뷰는 2026년 10월 24일에 확인한 공식 Zeno 페이지, 이용약관, 다운로드 서버를 바탕으로 하며, PromptQuorum은 Zeno를 설치하거나 테스트하지 않았습니다.',
    metaDescription:
      'Zeno 리뷰: Icosa Computing의 무료 macOS AI 워크스페이스로, 350억 파라미터 모델을 내장해 파일을 오프라인으로 처리한다고 합니다. 요구 사항과 미확인 사항.',
    twitterDescription:
      'Zeno 리뷰: 350억 파라미터 모델을 내장하고 파일을 오프라인으로 처리한다는 무료 Mac 앱. 요구 사항, 약관, 확인되지 않은 내용.',
    audience:
      'Zeno에 무엇이 필요하고, 비용이 얼마이며, 이용약관상 내 컴퓨터에서 무엇을 할 수 있는지, 그리고 개인정보·속도·품질에 관한 어떤 주장이 자료로 확인되지 않는지 알고 싶은 Mac 사용자를 위한 글입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zeno 리뷰',
    targetKeywords: [
      'zeno 리뷰',
      'zeno icosa mac',
      'icosa zeno 로컬 AI',
      'mac 프라이빗 AI 워크스페이스',
      'mac 오프라인 AI 어시스턴트',
      '맥북 로컬 35b 모델',
      'icosa computing zeno',
    ],
    current_models_mentioned: ['Qwen'],
    current_hardware_mentioned: ['Apple Silicon', 'MacBook', 'Mac'],
    leadAnswerBlock:
      '**Zeno는 Icosa Computing이 만든, RAM 16GB 이상 Apple Silicon Mac용 무료 AI 워크스페이스입니다.** **이용약관에 따르면 허용할 경우 파일을 읽고 바꾸고 삭제하며 명령을 실행할 수 있으므로, 권한 확인 창은 개인정보 보호 약속만큼 중요합니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Zeno는 Mac에서 정말 오프라인으로 동작합니까?',
        answer:
          'Icosa에 따르면 그렇습니다. 모델이 앱과 함께 제공되며 네트워크가 꺼져 있어도 Zeno는 계속 동작합니다. 이용약관은 앱이 업데이트 확인, 사용자가 요청한 모델이나 도구 다운로드, 사용자가 웹에서 무언가를 가져오라고 요청할 때만 인터넷에 연결된다고 덧붙입니다.',
        bullets: [
          'RAM 16GB 이상의 Apple Silicon Mac이 필요합니다.',
          '무료입니다. Icosa는 토큰당 0달러, 사용 제한 없음이라고 안내합니다.',
          'Icosa가 제시하는 속도는 초당 20~50토큰이며 Mac에 따라 다릅니다.',
          'Icosa에 따르면 파일을 지정하면 팀의 업무 방식에 맞춰 적응합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Zeno란 무엇인가', anchor: 'what-is-zeno' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '자료로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
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
            text: 'Zeno는 AI 모델을 다운로드에 포함한 무료 macOS 앱으로, 문서와 코드를 Mac 안에서 직접 처리합니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 파일을 지정하면, 제작사에 따르면 클라우드 서비스로 보내지 않고 어시스턴트가 파일을 읽고 초안을 쓰고 편집합니다.',
          },
        ],
        items: [
          '유지 관리: Icosa는 2026년 8월 19일에 Zeno를 출시했고 다운로드 서버의 설치 파일은 2026년 10월 22일에 마지막으로 수정되었습니다. 버전 번호는 공개되지 않아 방치 프로젝트 경고는 해당하지 않습니다.',
          '모델: 이름이 공개되지 않은 350억 파라미터 모델을 Icosa가 가지치기와 튜닝으로 다듬었으며, 약관에 따르면 Zeno는 Qwen 계열 모델을 실행합니다.',
          '동작: 허용하면 Zeno는 파일을 읽고, 만들고, 바꾸고, 삭제하며 명령을 실행할 수 있습니다.',
          '소스: 공개 저장소는 찾지 못했으며, 약관은 오픈소스 프로젝트 opencode를 명시합니다.',
          '제작사: Icosa Computing(뉴욕).',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 Zeno 페이지, 이용약관, 다운로드 서버를 바탕으로 합니다. PromptQuorum은 Zeno를 설치, 실행, 측정하지 않았으므로 답변 품질과 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-zeno',
        title: 'Zeno란 무엇인가',
        content: [
          '**Zeno는 Mac에서 AI 모델을 실행해 문서 읽기, 글 초안 작성과 편집, 코드 리팩터링, 장시간 에이전트 작업을 수행하는 macOS 데스크톱 앱입니다.** 뉴욕 기업 Icosa Computing은 이를 “the free, private AI workspace”라고 부르며, FAQ는 출시일을 2026년 8월 19일로 밝히고, 도메인 localwork.ai는 Zeno 페이지로 연결됩니다.',
          '페이지에 따르면 다운로드에는 350억 파라미터 모델이 “pruned and tuned by Icosa” 상태로 포함되지만 이름은 밝히지 않습니다. 이용약관은 Zeno가 Alibaba Cloud의 Qwen 계열 모델을 Apache License 2.0으로 실행하고, 오픈소스 프로젝트 opencode를 MIT 라이선스로 사용해 만들어졌다고 밝힙니다. Icosa는 맞춤 모델을 학습시키는 별도의 웹 플랫폼 [LMShop](https://lmshop.com)도 운영하며, Icosa에 따르면 그 모델은 Zeno에서 실행할 수 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Zeno는 Icosa 웹사이트에서 Mac용으로 무료 다운로드할 수 있으며, Windows·Linux·iOS·Android 버전은 목록에 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Mac', '입수 방법': '[Mac용 Zeno 다운로드](https://icosa.co/zeno), 무료, Apple Silicon 전용' },
          { '옵션': '가격', '입수 방법': '토큰당 0달러, 사용 제한 없음, 유료 요금제 기재 없음' },
          { '옵션': '웹사이트', '입수 방법': '[icosa.co/zeno](https://icosa.co/zeno)' },
          { '옵션': '이용약관', '입수 방법': '[icosa.co/terms](https://icosa.co/terms)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '별도 페이지는 찾지 못했으며, 이용약관 5항이 개인정보를 다룹니다' },
          { '옵션': '소스 코드', '입수 방법': '공개 저장소를 찾지 못했습니다' },
        ],
        note: '버전 번호는 공개되지 않습니다. 다운로드 버튼 뒤의 설치 파일은 서버 정보상 2026년 10월 22일에 마지막으로 수정되었고 크기는 약 376MB인 반면, 페이지는 모델을 포함해 18GB를 내려받는다고 안내합니다. PromptQuorum은 내려받지 않았으므로 모델이 어떻게 전달되는지는 확인되지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**Zeno에는 RAM 16GB 이상의 Apple Silicon Mac과 넉넉한 디스크 여유 공간이 필요합니다.**',
        ],
        columns: ['항목', '자료의 설명'],
        rows: [
          { '항목': '칩과 메모리', '자료의 설명': 'Apple Silicon, RAM 16GB 이상' },
          { '항목': '다운로드', '자료의 설명': '18GB(AI 모델 포함)' },
          { '항목': '디스크 공간', '자료의 설명': '설정 중 약 45GB, 이후 약 25GB의 여유 공간 필요' },
          { '항목': 'macOS 버전', '자료의 설명': '페이지에 명시되지 않음' },
          { '항목': '인터넷', '자료의 설명': '다운로드에 필요하며, 페이지에 따르면 이후에는 네트워크 없이 동작' },
          { '항목': '속도', '자료의 설명': '일반적으로 초당 20~50토큰이며 메모리와 실행 중인 앱에 따라 달라짐' },
        ],
        note: '페이지는 어떤 Mac에서 이 속도가 나오는지 밝히지 않으며, 선언문은 일반 MacBook에 350억 파라미터 모델을 올렸기 때문에 처음에는 느리게 느껴질 수 있다고(“might feel slow at first”) 인정합니다.',
      },
      features: {
        id: 'key-features',
        title: '자료로 확인된 기능',
        content: [
          '**아래 항목은 모두 Zeno 페이지 또는 이용약관에서 가져온 것이며, 어느 것도 직접 테스트하지 않았습니다.**',
        ],
        items: [
          '**파일 작업.** Zeno는 파일을 읽고 문서의 초안을 쓰고 함께 편집하며, 페이지는 계약서, 스프레드시트, 코드를 예로 듭니다.',
          '**장시간 에이전트 작업.** 에이전트 작업은 “as long as the work requires” 실행될 수 있으며, 중간에 클라우드 서비스가 끼지 않습니다.',
          '**권한 확인.** 약관에 따르면 Zeno가 할 수 있는 일은 권한 확인 창으로 사용자가 정하며, 확인 빈도를 줄이는 모드도 있습니다.',
          '**파일에서 학습.** Icosa는 파일을 지정하면 Zeno가 적응한다고 하고, 선언문은 사용할수록 모델 가중치가 바뀐다고 하지만 그 방식은 문서화되어 있지 않습니다.',
          '**모델 선택 없음.** 페이지는 고를 모델이 없다고 합니다. LMShop 맞춤 모델이나 요청한 모델 다운로드가 어떻게 연결되는지는 문서화되어 있지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 8월 18일부터 적용되는 이용약관에 따르면 Zeno는 파일과 대화를 사용자의 컴퓨터에서 처리하며, 기본적으로 기기를 벗어나지 않습니다.** 앱은 업데이트 확인(앱 버전만 공유), 사용자가 요청한 모델이나 도구 다운로드, 사용자가 웹에서 가져오기를 요청할 때만 인터넷에 연결됩니다. 약관은 Icosa 웹사이트는 표준 분석 도구를 쓰지만 앱에는 분석 기능이 없다고 덧붙입니다.',
          '약관은 Zeno가 로컬에서 할 수 있는 일도 설명합니다. 허용하면 AI가 컴퓨터의 파일을 읽고, 만들고, 바꾸고, 삭제하며 명령을 실행할 수 있습니다. 중요한 결과물을 검토하고, 백업을 두고, 실행 전 확인을 줄이는 모드를 조심하라고 안내하며, 보증과 데이터 손실에 대한 책임은 배제합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 Icosa의 주장이지 감사 결과가 아닙니다. 소스 코드는 공개되어 있지 않고 PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 선언문의 “physically can\'t”(물리적으로 데이터를 볼 수 없다)는 문장은 회사 자체의 주장이며, 별도의 개인정보 처리방침 페이지는 찾지 못했습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합',
        items: [
          '**RAM 16GB 이상 Mac 사용자**로, 문서와 코드를 다루는 프라이빗 어시스턴트를 원하며 매우 큰 다운로드를 감수할 수 있는 분.',
          '**처리를 자기 기기에서 하길 선호하는 분**으로, 에이전트가 파일을 바꾸기 전에 권한 설정을 읽어 볼 의향이 있는 분.',
          '**토큰 과금에 지친 분**으로, 무료 로컬 대안을 찾고 초기 단계 제품을 받아들일 수 있는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**출력 품질.** Icosa는 가지치기한 350억 파라미터 모델이 “프런티어 모델에게 기대하는 방식으로”(“the way you expect a frontier one to”) 동작한다고 하지만, PromptQuorum은 작업을 실행하지 않았고 페이지에도 벤치마크가 없습니다.',
          '**속도.** 초당 20~50토큰은 Icosa의 수치이며 Mac에 따라 다르고, 여기서는 테스트하지 않았습니다.',
          '**오프라인 사용.** PromptQuorum은 네트워크를 끈 상태에서 테스트하거나 트래픽을 검사하지 않았습니다.',
          '**자체 학습.** 모델이 파일에서 어떻게 학습하고 어떻게 초기화하는지는 PromptQuorum이 찾은 어떤 자료에도 문서화되어 있지 않습니다.',
          '**버전, 라이선스, 소스.** 버전 번호, 이용약관 외의 소프트웨어 라이선스, 소스 저장소를 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          { '앱': '[Atomic Bot](/ko/power-local-llm/atomic-bot-review)', '플랫폼': 'Mac, Windows, Linux, iOS, Android', '가격 / 라이선스': '무료 앱(MIT) / 클라우드 유료', '주요 차이': 'OpenClaw 에이전트 스택을 패키징하며, 로컬과 클라우드에서 실행되고 API 모델도 사용 가능' },
          { '앱': '[Msty Go](/ko/power-local-llm/msty-go-review)', '플랫폼': 'Mac, Windows, Linux', '가격 / 라이선스': '프리미엄 / 비공개 소스', '주요 차이': '로컬 또는 클라우드 모델로 여러 단계의 작업을 수행하는 에이전트' },
          { '앱': '[LocalGhost](/ko/power-local-llm/localghost-review)', '플랫폼': 'Linux 서버, Android 앱', '가격 / 라이선스': '무료 / MIT', '주요 차이': 'Debian 기기에 직접 호스팅하는 오픈소스 개인용 AI 서버' },
        ],
        note: '선택하기 전에 각 앱의 공식 페이지에서 현재 가격, 라이선스, 플랫폼을 확인하십시오. 어느 것도 Zeno와 비교 테스트하지 않았습니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '업무나 기밀 파일에 Zeno를 써도 됩니까?',
            a: '이용약관은 Zeno가 하는 일에 대한 책임을 사용자에게 두고, 처리할 권리가 있는 콘텐츠에만 사용하라고 요구하며, 데이터 손실에 대한 책임을 배제합니다. 회사의 규정을 확인하고 백업을 두십시오. PromptQuorum은 어떤 규정 준수 체계로도 Zeno를 평가하지 않았습니다.',
          },
          {
            q: 'Zeno는 Windows, Linux, Intel Mac에서 동작합니까?',
            a: '자료에는 Mac용 다운로드만 있고 요건으로 Apple Silicon Mac이 명시되어 있으며, 다른 플랫폼이나 Intel 지원은 언급되지 않습니다.',
          },
          {
            q: 'Zeno는 누가 만듭니까?',
            a: '뉴욕 기업 Icosa Computing이며, CEO Mert Esencan이 Zeno 페이지의 Icosa 선언문에 서명했습니다. Icosa는 모델 학습과 선별에 쓴다고 밝히는 Combinatorial Reasoning 연구도 공개합니다.',
          },
          {
            q: '버그는 어떻게 신고하고 팀에 어떻게 연락합니까?',
            a: 'Zeno 페이지에는 [커뮤니티 Discord](https://discord.gg/f2DEU8frU), 피드백 주소([info@icosacomputing.com](mailto:info@icosacomputing.com)), 데모 예약 링크가 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Zeno는 큰 로컬 모델과 파일 작업용 에이전트를 하나의 Mac 다운로드로 묶은 최근의 무료 시도로, 하드웨어 요건이 분명하고 에이전트가 기기에서 무엇을 할 수 있는지 평이하게 설명하는 이용약관을 갖추고 있습니다. 반면 PromptQuorum은 소스 저장소를 찾지 못했고, Icosa는 버전 번호를 공개하지 않으며, 제품은 2026년 8월에 출시되었고, 속도·품질·오프라인 사용·학습에 관한 주장은 여기서 테스트하지 않았습니다. RAM 16GB 이상의 Apple Silicon Mac 사용자가 권한 설정을 읽고 백업을 둔 채 프라이빗 어시스턴트를 시험해 보기에 적합하며, 문서화된 규정 준수나 검증된 빌드가 필요하다면 독립적인 테스트를 기다리는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Zeno 페이지](https://icosa.co/zeno) — 제품 설명, 요구 사항, 수치, 선언문. 2026년 10월 24일 확인.',
          '[Zeno 이용약관](https://icosa.co/terms) — 2026년 8월 18일 시행. 개인정보, 권한, 오픈소스 고지.',
          '[Icosa Computing](https://icosa.co/) — 출시일 2026년 8월 19일이 적힌 FAQ. 2026년 10월 24일 확인.',
          '다운로드 서버 응답 헤더 — 설치 파일 크기와 마지막 수정일(2026년 10월 22일). 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Atomic Bot 리뷰](/ko/power-local-llm/atomic-bot-review) — OpenClaw 스택 기반의 데스크톱·클라우드 AI 동료.',
          '[Msty Go 리뷰](/ko/power-local-llm/msty-go-review) — 로컬 또는 클라우드 모델용 다단계 작업 에이전트.',
          '[LocalGhost 리뷰](/ko/power-local-llm/localghost-review) — 직접 호스팅하는 개인용 AI 서버.',
          '[opencode 리뷰](/ko/power-local-llm/opencode-review) — Zeno 약관이 명시한 오픈소스 코딩 에이전트.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
