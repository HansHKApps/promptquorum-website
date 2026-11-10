// StratoSort Review: desktop AI file organizer with local llama.cpp models, semantic search and document chat
// Slug: stratosort-review
// Companion to: ai-file-sorter-review, hyperlink-nexa-review, anythingllm-review
// Facts verified 2026-11-10 against stratosort.com (home, privacy, docs, config, network transparency) and GitHub iLevyTate/StratoSortStack (API, LICENSE, Releases v5.1.2 of 2026-11-01).
// Not hands-on tested. Stale-project warning is OFF (last push 2026-11-10).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-en.webp',
    title: 'StratoSort Review: Local AI File Organizer for Mac, Windows and Linux',
    seoTitle: 'StratoSort Review: Local AI File Organizer',
    intro: "StratoSort is a desktop app that sorts files by what is inside them and doubles as a private search, chat and knowledge-graph tool over your documents, using language models that run on your own computer through llama.cpp. Per its documentation, it moves files only after you approve. This review covers what the maker's website, documentation and GitHub repository say, where the local path ends, how the licence limits commercial use, and how StratoSort compares with similar tools in the directory.",
    metaDescription: 'StratoSort review: desktop AI file organizer for Mac, Windows and Linux with local llama.cpp models that work offline after install. Licence, privacy, limits. Not tested.',
    twitterDescription: 'StratoSort review: local AI that renames, sorts and searches your files on Mac, Windows and Linux. Free for personal use. Privacy, licence, limits and alternatives.',
    audience: 'People with cluttered document, scan, image and audio folders who want AI-suggested names and folders without uploading files to a cloud service — covers install, models, privacy, licence, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'stratosort review',
      'stratosort ai file organizer',
      'local ai file organizer',
      'offline ai file sorting',
      'ai file renamer mac windows linux',
      'semantic file search local',
      'chat with your documents offline',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: "**StratoSort is a desktop AI file organizer for Mac, Windows and Linux whose language models run on your own computer through llama.cpp and, per its documentation, work without internet once installed.** It is free for personal and other noncommercial use under the PolyForm Noncommercial licence; commercial use needs a paid licence. The newest release is version 5.1.2 from 1 November 2026. This review rests on the maker's website, documentation and GitHub repository, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is StratoSort a local AI file organizer?',
        answer: "By default, yes: the documentation says the models run in the app through llama.cpp, that file content, paths, embeddings and search queries stay on the machine, and that the app runs without internet once the models are installed. Cloud AI is an option you switch on by adding your own API key. PromptQuorum did not inspect network traffic or the source code, so the privacy claims remain the maker's own.",
        bullets: [
          'It reads documents, spreadsheets, images, scans, audio and video, suggests names and folders; per the website, every move can be reviewed and undone.',
          'The first launch downloads models of about 7 GB (Base profile) or about 10 GB (Better Quality profile) unless you skip them.',
          'Installers exist for Windows, macOS and Linux; 8 GB of RAM is the stated minimum.',
          'A check for new releases on GitHub is on by default and can be switched off in Settings.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get StratoSort', anchor: 'get-it' },
      { label: 'StratoSort at a Glance', anchor: 'at-a-glance' },
      { label: 'What StratoSort Is', anchor: 'what-is-stratosort' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'StratoSort vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use StratoSort', anchor: 'who-should-use' },
      { label: 'Who Should Not Use StratoSort', anchor: 'who-should-not-use' },
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
            text: 'StratoSort is a desktop app that reads what is inside your files and moves them into folders you describe in plain language, renaming them in a consistent format or keeping the original names, with models that run on your own computer, per the maker.',
          },
          {
            type: 'plain-terms',
            text: 'Think of an assistant that opens each file, works out what it is, proposes where it belongs and what to call it, and waits for your yes before moving anything.',
          },
        ],
        items: [
          'Local claim: the models run on the device; model downloads, update checks and any cloud provider you add use the internet.',
          'Maker: Kennedy Applied Sciences, Inc., with the code public on GitHub under iLevyTate.',
          'Maintenance: version 5.1.2 was released on 1 November 2026 and the repository was updated on 10 November 2026, so the project is actively developed.',
          'Knowledge OS: the maker says the search, chat and graph side is about half of what the app does, and that search matches exact terms such as invoice numbers as well as meaning.',
          'Gaps: no hands-on testing here, a young public project, and models that need a large first download.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'Get StratoSort',
        content: [
          '**StratoSort installs like any desktop app, so no terminal is needed.** Download the installer for your system from the GitHub release page; the AI models are downloaded inside the app after the first launch.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .exe installer for x64 or arm64, or a .zip',
          },
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .dmg for Apple Silicon or Intel',
          },
          {
            Platform: 'Linux',
            'Get It': '[Download for Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage or .deb for x64 or arm64',
          },
          {
            Platform: 'Documentation',
            'Get It': '[StratoSort docs](https://stratosort.com/docs/) and [GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            Platform: 'Website',
            'Get It': '[stratosort.com](https://stratosort.com/)',
          },
          {
            Platform: 'Demo video',
            'Get It': '[StratoSort demo video](https://stratosort.com/assets/strato-ad.mp4) — short mp4 from the maker',
          },
          {
            Platform: 'Air-gapped install',
            'Get It': '[Install Guide: offline and air-gapped install](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — for machines that never go online',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[StratoSort privacy policy](https://stratosort.com/privacy.html)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'The installer files are large (the Linux .deb is about 534 MB), and each release lists SHA-256 checksum files. The maker says Windows installers are signed by Kennedy Applied Sciences, Inc., and that Mac builds have been notarized since version 4.0.0.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort at a Glance',
        columns: ['Attribute', 'StratoSort'],
        rows: [
          { Attribute: 'Platform', StratoSort: 'Windows, macOS and Linux desktop' },
          { Attribute: 'Price', StratoSort: 'Free for noncommercial use; paid for commercial' },
          { Attribute: 'License', StratoSort: 'Source-available, PolyForm Noncommercial 1.0.0' },
          { Attribute: 'Runs', StratoSort: 'On your computer with llama.cpp; cloud only with your key' },
          { Attribute: 'Memory', StratoSort: '8 GB RAM minimum; GPU optional' },
          { Attribute: 'Input types', StratoSort: 'Documents, spreadsheets, images, scans, audio, video' },
          { Attribute: 'Undo', StratoSort: 'Per the maker: every suggested move can be reviewed and undone' },
          { Attribute: 'Maker', StratoSort: 'Kennedy Applied Sciences, Inc.' },
        ],
        note: 'A missing statement on the maker\'s site means unknown, not unsupported.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'What StratoSort Is',
        content: [
          '**StratoSort is a file organizer that reads content, not just file names.** It looks inside documents, spreadsheets, images, scans, audio and video, suggests a name and a folder, and moves files into "Smart Folders" that you describe in plain language.',
          'The repository is named StratoSortStack and describes itself as the successor of the original StratoSort; the website and this review use the name StratoSort. Beyond sorting, the app has a search, chat and graph side that the maker calls Knowledge OS and describes as about half of what it does, plus an opt-in local MCP server.',
          'This review draws on the website, documentation, privacy policy and GitHub repository. It involved no hands-on testing, so how well the app names and sorts files, and how fast it runs, is not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a folder choice.** The steps follow the release notes and documentation.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the installer for your system from the Get StratoSort table above and open it.',
          },
          {
            title: 'Download the models',
            whyItMatters: 'Use Download Base Models after install to enable the AI features; the Better Quality profile is a larger alternative, and "Continue with limited AI" skips the download.',
          },
          {
            title: 'Describe your Smart Folders',
            whyItMatters: 'Name the destinations you want, such as invoices or travel photos, in plain language so the app knows where files belong.',
          },
          {
            title: 'Review and approve',
            whyItMatters: 'Check each suggested name and move before it happens; every move can be undone afterwards.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on organizing and finding files.** Everything below comes from the website, documentation, release notes and the maker\'s comments of 10 November 2026.',
        ],
        items: [
          '**Content-based sorting.** Folders are chosen from what the file contains, including scans and images through a vision model and OCR. Renaming is optional: files can be renamed in a consistent format or moved with their original names through a keep-original naming option.',
          '**Folder watching.** Per the maker, the app can watch Downloads and your Smart Folders and suggest where new files belong.',
          '**Review and undo.** Suggested moves wait for your approval and can be reversed.',
          '**Search and chat.** Search matches exact terms such as invoice numbers as well as meaning, and chat answers cite their source files.',
          '**Audio and video.** Speech is transcribed with Whisper, and transcripts are indexed alongside your documents.',
          '**Knowledge graph.** Three views: Relate (clusters and similarity links), Atlas (a map of the vector embeddings where you can lasso files to move, tag or turn into a Smart Folder) and Timeline.',
          '**MCP server.** An opt-in local server, read-only and bound to 127.0.0.1, lets tools such as Claude Desktop, Cursor and Zed query your files; per the maker, connected clients get summaries and citations, never the raw files.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**StratoSort ships two model profiles, both as GGUF files.** The Base profile uses Llama-3.2-3B-Instruct for text, llava-v1.6-mistral-7b for vision and all-MiniLM-L6-v2 for embeddings, about 7 GB in total. The Better Quality profile swaps in Qwen2.5-7B-Instruct and nomic-embed-text-v1.5, about 10 GB in total.',
          'The documentation states 8 GB of RAM as the minimum and suggests 16 GB of RAM and an 8 GB GPU for Better Quality. A GPU is optional: the app can use NVIDIA CUDA, Apple Metal or Vulkan and falls back to the CPU. The Whisper speech model (about 150 MB) is downloaded only when you install it. No speed or accuracy figures were reproduced here.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says the app runs on your machine and that document content, file paths, embeddings and search queries do not leave it in the standard configuration.** It also says the app includes no analytics, telemetry, crash reporters or feature-flag services that phone home, and the website has no account or sync service.',
          'The network documentation lists the connections the app can make: model downloads from huggingface.co, a check for new releases on GitHub, and a one-off download of the speech model. The maker says the vision runtime and OCR language data ship with the installers and are downloaded only as a fallback if a bundled file is missing, so in normal use the speech model is the only one-off download of those extras, and only when you choose to install it. The release check is on by default in installed builds and can be switched off in Settings. Cloud AI stays off unless you add your own Anthropic or OpenAI-compatible key, and then the text you send goes to that provider under its own terms. The code is public and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'The licence is PolyForm Noncommercial 1.0.0, which is source-available rather than open source. Personal and other noncommercial use is free with every feature; commercial use needs a paid per-seat licence from Kennedy Applied Sciences, Inc., quoted by email with no published price.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'The maker of StratoSort sent corrections and the note below on 10 November 2026. It is presented as the maker\'s own words, not as PromptQuorum\'s independent editorial assessment, and PromptQuorum could not verify it in code or by testing:',
          '"I built StratoSort for people whose files are too private to upload to a cloud AI service. After the models download, sorting, search, chat and transcription all run on your machine. There\'s no account and no telemetry, and with update checks off and no cloud key it makes no outbound requests. I\'ve built it solo over about 17 months of part-time work. If anything behaves differently from what the docs say, open an issue on GitHub and I\'ll look at it."',
        ],
        note: '— The maker of StratoSort',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Models on your computer',
            'What it means in real use': 'Sorting and search can run offline once the models are installed, with no account.',
            'Limitation / caveat': 'The first download is about 7 GB or more; PromptQuorum did not inspect network traffic.',
          },
          {
            Benefit: 'Free for personal use',
            'What it means in real use': 'Every feature is included at no cost for noncommercial use.',
            'Limitation / caveat': 'Commercial use needs a paid licence with no published price.',
          },
          {
            Benefit: 'Reads file content',
            'What it means in real use': 'Names and folders come from what is inside documents, scans and images.',
            'Limitation / caveat': 'Accuracy was not tested here.',
          },
          {
            Benefit: 'Review and undo',
            'What it means in real use': 'Per the maker, nothing moves until you approve it, and moves can be reversed.',
            'Limitation / caveat': 'Reviewing a large backlog still takes your time.',
          },
          {
            Benefit: 'Three desktop systems',
            'What it means in real use': 'Installers exist for Windows, macOS and Linux.',
            'Limitation / caveat': 'No mobile app; installers are several hundred MB.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 5.1.2 shipped on 1 November 2026.',
            'Limitation / caveat': 'The first public release is recent, so long-term track record is short.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort vs. Alternatives',
        content: [
          'These are the closest tools in the directory: one that also proposes folders and file names, one that searches and chats over local files, and one general document-chat workspace.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'StratoSort',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free noncommercial, PolyForm NC',
            Role: 'File sorting, search and chat',
            'Key difference': 'Sorts by content; local llama.cpp; review and undo',
          },
          {
            App: '[AI File Sorter](/power-local-llm/ai-file-sorter-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Folder and file-name proposals',
            'Key difference': 'Open source; dry-run before changes',
          },
          {
            App: '[Hyperlink (Nexa AI)](/power-local-llm/hyperlink-nexa-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Free, proprietary',
            Role: 'Local file search and chat',
            'Key difference': 'Searches and answers; closed source',
          },
          {
            App: '[AnythingLLM](/power-local-llm/anythingllm-review)',
            Platforms: 'Windows, Mac, Linux, web',
            'Price and license': 'Free, MIT',
            Role: 'Document chat workspace',
            'Key difference': 'Chat and agents; does not sort files',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use StratoSort',
        items: [
          '**People with messy folders.** Downloads, scans and screenshots get names and folders you can review.',
          '**Privacy-minded home users.** The models run on the computer, per the documentation, and the use is free.',
          '**Linux users.** Installers exist for Linux as well as Windows and Mac.',
          '**People who want search too.** Semantic search and document chat sit in the same app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use StratoSort',
        items: [
          '**Businesses without a licence.** Commercial use needs a paid licence under PolyForm Noncommercial.',
          '**Anyone who needs open-source code.** The licence is source-available, not OSI open source.',
          '**Computers with under 8 GB of RAM.** That is the stated minimum.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does StratoSort work offline?',
            a: 'The documentation says yes once the models are installed, and suggests an airplane-mode test. The first launch needs internet to download them unless you continue with limited AI, and the Install Guide documents an air-gapped install for machines that never go online (see Get StratoSort). PromptQuorum did not test it offline.',
          },
          {
            q: 'Can I use it at work?',
            a: 'Only with a commercial licence. The PolyForm Noncommercial licence covers personal and other noncommercial use; the maker quotes commercial per-seat licences by email.',
          },
          {
            q: 'Can I use a cloud model instead?',
            a: 'Yes, optionally: add your own Anthropic or OpenAI-compatible key, which can also point to a local Ollama or LM Studio server. Embeddings and search stay local, per the maker.',
          },
          {
            q: 'Can I undo a move?',
            a: 'The website says every suggested move can be reviewed and undone. PromptQuorum did not test the undo, so keep a backup of important folders.',
          },
          {
            q: 'Who makes StratoSort?',
            a: 'Kennedy Applied Sciences, Inc. publishes it, and the code sits in the GitHub account iLevyTate.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'StratoSort is a good fit if you want AI to suggest names and folders for a messy pile of documents, scans and images on a Mac, Windows or Linux computer, with models that, per the documentation, run on the machine and ask for your approval first. It is free for personal use and shipped a release this month.',
          'The caveats are the licence, the large first download, a project that went public recently and claims PromptQuorum could not check. Try it on a copy of one folder before pointing it at your archive.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[StratoSort website](https://stratosort.com/) — features, platforms and pricing.',
          '[Documentation](https://stratosort.com/docs/) — configuration, model profiles and network transparency.',
          '[Privacy policy](https://stratosort.com/privacy.html) — data handling, last updated 29 October 2026.',
          '[GitHub repository](https://github.com/iLevyTate/StratoSortStack) — README, licence and source code.',
          '[GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases) — installer assets and release date of version 5.1.2.',
          '[Install Guide](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — installers and the offline and air-gapped install.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AI File Sorter Review](/power-local-llm/ai-file-sorter-review) — an open-source app that proposes folders and file names.',
          '[Hyperlink (Nexa AI) Review](/power-local-llm/hyperlink-nexa-review) — local file search and chat for Mac and Windows.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — a document-chat workspace with local or cloud models.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-de.webp',
    title: 'StratoSort Rezension: Lokaler KI-Dateiorganizer für Mac, Windows und Linux',
    seoTitle: 'StratoSort Rezension: Lokaler KI-Dateiorganizer-App',
    intro: 'StratoSort ist eine Desktop-App, die liest, was in Ihren Dateien steckt, Namen und Ordner vorschlägt und Dateien laut Dokumentation erst nach Ihrer Freigabe verschiebt. Dafür nutzt sie Sprachmodelle, die über llama.cpp auf Ihrem eigenen Computer laufen. Außerdem bietet sie semantische Suche, Chat mit Ihren Dokumenten und einen Wissensgraphen. Diese Rezension fasst zusammen, was Website, Dokumentation und GitHub-Repository des Herstellers sagen, wo der lokale Weg endet, wie die Lizenz die kommerzielle Nutzung einschränkt und wie StratoSort im Vergleich zu ähnlichen Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'StratoSort Rezension: KI-Dateiorganizer für Mac, Windows, Linux mit lokalen llama.cpp-Modellen, offline nach Installation. Lizenz, Grenzen. Nicht getestet.',
    twitterDescription: 'StratoSort Rezension: lokale KI, die Ihre Dateien auf Mac, Windows und Linux umbenennt, sortiert und durchsucht. Kostenlos für private Nutzung. Datenschutz, Lizenz, Grenzen und Alternativen.',
    audience: 'Menschen mit unaufgeräumten Ordnern voller Dokumente, Scans, Bilder und Audiodateien, die sich von KI Namen und Ordner vorschlagen lassen möchten, ohne Dateien an einen Cloud-Dienst hochzuladen — behandelt Installation, Modelle, Datenschutz, Lizenz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'stratosort rezension',
      'stratosort ki dateiorganizer',
      'lokaler ki dateiorganizer',
      'offline ki dateien sortieren',
      'ki dateien umbenennen mac windows linux',
      'semantische dateisuche lokal',
      'offline mit dokumenten chatten',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSort ist ein KI-Dateiorganizer für Mac, Windows und Linux, dessen Sprachmodelle über llama.cpp auf Ihrem eigenen Computer laufen und laut Dokumentation nach der Installation ohne Internet funktionieren.** Die App ist für private und andere nichtkommerzielle Nutzung unter der PolyForm-Noncommercial-Lizenz kostenlos; für kommerzielle Nutzung ist eine kostenpflichtige Lizenz nötig. Die neueste Version ist 5.1.2 vom 1. November 2026. Diese Rezension stützt sich auf Website, Dokumentation und GitHub-Repository des Herstellers, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist StratoSort ein lokaler KI-Dateiorganizer?',
        answer: 'Standardmäßig ja: Laut Dokumentation laufen die Modelle in der App über llama.cpp, Dateiinhalte, Pfade, Embeddings und Suchanfragen bleiben auf dem Rechner, und die App läuft ohne Internet, sobald die Modelle installiert sind. Cloud-KI ist eine Option, die Sie einschalten, indem Sie Ihren eigenen API-Schlüssel hinzufügen. PromptQuorum hat weder den Netzwerkverkehr noch den Quellcode untersucht; die Datenschutzaussagen stammen also vom Hersteller selbst.',
        bullets: [
          'Die App liest Dokumente, Tabellen, Bilder, Scans, Audio und Video, schlägt Namen und Ordner vor; laut Website lässt sich jede Verschiebung prüfen und rückgängig machen.',
          'Beim ersten Start werden Modelle von etwa 7 GB (Profil Base) oder etwa 10 GB (Profil Better Quality) heruntergeladen, sofern Sie das nicht überspringen.',
          'Es gibt Installationsprogramme für Windows, macOS und Linux; 8 GB RAM sind das angegebene Minimum.',
          'Die Prüfung auf neue Versionen bei GitHub ist standardmäßig aktiv und lässt sich in den Einstellungen ausschalten.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'StratoSort herunterladen', anchor: 'get-it' },
      { label: 'StratoSort im Überblick', anchor: 'at-a-glance' },
      { label: 'Was StratoSort ist', anchor: 'what-is-stratosort' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'StratoSort im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen StratoSort geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen StratoSort nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'StratoSort ist eine Desktop-App, die laut Dokumentation lokale llama.cpp-Modelle nutzt, um Namen und Ordner für Ihre Dateien vorzuschlagen, und nach einem Modell-Download offline funktioniert.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Assistentin vor, die jede Datei öffnet, herausfindet, worum es geht, vorschlägt, wohin sie gehört und wie sie heißen sollte, und auf Ihr Ja wartet, bevor sie etwas verschiebt.',
          },
        ],
        items: [
          'Lokale Aussage: Die Modelle laufen auf dem Gerät; Modell-Downloads, Prüfungen auf neue Versionen und jeder von Ihnen hinzugefügte Cloud-Anbieter nutzen das Internet.',
          'Hersteller: Kennedy Applied Sciences, Inc., mit öffentlichem Code auf GitHub unter iLevyTate.',
          'Pflege: Version 5.1.2 erschien am 1. November 2026 und das Repository wurde am 10. November 2026 aktualisiert, das Projekt wird also aktiv entwickelt.',
          'Lücken: kein eigener Praxistest hier, ein junges öffentliches Projekt und Modelle, die einen großen ersten Download erfordern.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'StratoSort herunterladen',
        content: [
          '**StratoSort wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Installationsprogramm für Ihr System von der GitHub-Release-Seite herunter; die KI-Modelle werden nach dem ersten Start in der App heruntergeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .exe-Installer für x64 oder arm64 oder eine .zip-Datei',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .dmg für Apple Silicon oder Intel',
          },
          {
            Plattform: 'Linux',
            Bezugsquelle: '[Download für Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage oder .deb für x64 oder arm64',
          },
          {
            Plattform: 'Dokumentation',
            Bezugsquelle: '[StratoSort-Dokumentation](https://stratosort.com/docs/) und [GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[stratosort.com](https://stratosort.com/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von StratoSort](https://stratosort.com/privacy.html)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'Die Installationsdateien sind groß (das Linux-.deb hat etwa 534 MB), und jede Version listet SHA-256-Prüfsummendateien auf.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort im Überblick',
        columns: ['Merkmal', 'StratoSort'],
        rows: [
          { Merkmal: 'Plattform', StratoSort: 'Desktop für Windows, macOS und Linux' },
          { Merkmal: 'Preis', StratoSort: 'Kostenlos für nichtkommerzielle Nutzung; kommerziell kostenpflichtig' },
          { Merkmal: 'Lizenz', StratoSort: 'Source-available, PolyForm Noncommercial 1.0.0' },
          { Merkmal: 'Ausführung', StratoSort: 'Auf Ihrem Computer mit llama.cpp; Cloud nur mit Ihrem Schlüssel' },
          { Merkmal: 'Speicher', StratoSort: 'Mindestens 8 GB RAM; GPU optional' },
          { Merkmal: 'Eingabetypen', StratoSort: 'Dokumente, Tabellen, Bilder, Scans, Audio, Video' },
          { Merkmal: 'Rückgängig', StratoSort: 'Laut Hersteller lässt sich jede vorgeschlagene Verschiebung prüfen und rückgängig machen' },
          { Merkmal: 'Hersteller', StratoSort: 'Kennedy Applied Sciences, Inc.' },
        ],
        note: 'Eine fehlende Angabe auf der Website des Herstellers bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'Was StratoSort ist',
        content: [
          '**StratoSort ist ein Dateiorganizer, der Inhalte liest, nicht nur Dateinamen.** Die App schaut in Dokumente, Tabellen, Bilder, Scans, Audio und Video, schlägt einen Namen und einen Ordner vor und verschiebt Dateien in „Smart Folders“, die Sie in einfacher Sprache beschreiben.',
          'Das Repository heißt StratoSortStack und bezeichnet sich als Nachfolger des ursprünglichen StratoSort; Website und diese Rezension verwenden den Namen StratoSort. Über das Sortieren hinaus bietet die App semantische Suche, Chat mit Ihren Dokumenten samt Quellenangaben, einen Wissensgraphen und einen optionalen lokalen MCP-Server für Werkzeuge wie Claude Desktop, Cursor und Zed.',
          'Diese Rezension stützt sich auf Website, Dokumentation, Datenschutzerklärung und GitHub-Repository. Einen Praxistest gab es nicht; wie gut die App Dateien benennt und sortiert und wie schnell sie läuft, wird hier daher nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download und Ordnerauswahl.** Die Schritte folgen den Versionshinweisen und der Dokumentation.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie das Installationsprogramm für Ihr System von der [GitHub-Release-Seite](https://github.com/iLevyTate/StratoSortStack/releases/latest) herunter und öffnen Sie es.',
          },
          {
            title: 'Modelle herunterladen',
            whyItMatters: 'Aktivieren Sie die KI-Funktionen nach der Installation über „Download Base Models“; das Profil Better Quality ist eine größere Alternative, und „Continue with limited AI“ überspringt den Download.',
          },
          {
            title: 'Smart Folders beschreiben',
            whyItMatters: 'Benennen Sie die gewünschten Ziele, etwa Rechnungen oder Reisefotos, in einfacher Sprache, damit die App weiß, wohin Dateien gehören.',
          },
          {
            title: 'Prüfen und freigeben',
            whyItMatters: 'Kontrollieren Sie jeden vorgeschlagenen Namen und jede Verschiebung, bevor sie stattfindet; jede Verschiebung lässt sich danach rückgängig machen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf das Ordnen und Wiederfinden von Dateien.** Alles Folgende stammt von Website, Dokumentation und Versionshinweisen.',
        ],
        items: [
          '**Sortieren nach Inhalt.** Dateinamen und Ordner werden aus dem vorgeschlagen, was die Datei enthält, einschließlich Scans und Bilder über ein Bildmodell und OCR.',
          '**Prüfen und rückgängig machen.** Vorgeschlagene Verschiebungen warten auf Ihre Freigabe und lassen sich umkehren.',
          '**Semantische Suche und Chat.** Suchen Sie nach Bedeutung und stellen Sie Fragen zu Ihren Dokumenten, wobei die Quellen angezeigt werden.',
          '**Audio und Video.** Sprache wird mit Whisper transkribiert, und die Transkripte werden zusammen mit Ihren Dokumenten indexiert.',
          '**Wissensgraph.** Die Ansichten Relate und Atlas zeigen, wie Dokumente zusammenhängen.',
          '**MCP-Server.** Ein optionaler lokaler Server lässt Werkzeuge wie Claude Desktop, Cursor und Zed Ihre Dateien abfragen.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**StratoSort liefert zwei Modellprofile, beide als GGUF-Dateien.** Das Profil Base nutzt Llama-3.2-3B-Instruct für Text, llava-v1.6-mistral-7b für Bilder und all-MiniLM-L6-v2 für Embeddings, insgesamt etwa 7 GB. Das Profil Better Quality tauscht stattdessen Qwen2.5-7B-Instruct und nomic-embed-text-v1.5 ein, insgesamt etwa 10 GB.',
          'Die Dokumentation nennt 8 GB RAM als Minimum und empfiehlt für Better Quality 16 GB RAM und eine GPU mit 8 GB. Eine GPU ist optional: Die App kann NVIDIA CUDA, Apple Metal oder Vulkan nutzen und weicht auf die CPU aus. Das Whisper-Sprachmodell (etwa 150 MB) wird nur heruntergeladen, wenn Sie es installieren. Messwerte zu Geschwindigkeit oder Genauigkeit wurden hier nicht nachgestellt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Datenschutzerklärung läuft die App auf Ihrem Rechner, und Dokumentinhalte, Dateipfade, Embeddings und Suchanfragen verlassen ihn in der Standardkonfiguration nicht.** Außerdem heißt es dort, die App enthalte keine Analyse-, Telemetrie-, Absturzberichts- oder Feature-Flag-Dienste, die nach Hause melden, und die Website kenne weder Konto noch Synchronisierungsdienst.',
          'Die Netzwerkdokumentation listet die Verbindungen auf, die die App aufbauen kann: Modell-Downloads von huggingface.co, eine Prüfung auf neue Versionen bei GitHub sowie einmalige Downloads des Sprachmodells, eines Bild-Hilfsmodells und von OCR-Sprachdaten. Die Versionsprüfung ist in installierten Builds standardmäßig aktiv und lässt sich in den Einstellungen ausschalten. Cloud-KI bleibt aus, solange Sie keinen eigenen Schlüssel von Anthropic oder einem OpenAI-kompatiblen Anbieter hinzufügen; danach geht der von Ihnen gesendete Text an diesen Anbieter, und dessen eigene Bedingungen gelten. Der Code ist öffentlich, und PromptQuorum hat den Netzwerkverkehr nicht untersucht, daher sind diese Aussagen die des Herstellers selbst.',
          'Die Lizenz ist PolyForm Noncommercial 1.0.0, die quelloffen einsehbar (source-available), aber nicht Open Source ist. Private und andere nichtkommerzielle Nutzung ist mit allen Funktionen kostenlos; kommerzielle Nutzung erfordert eine kostenpflichtige Lizenz pro Arbeitsplatz von Kennedy Applied Sciences, Inc., die per E-Mail angefragt wird, ohne veröffentlichten Preis.',
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
            'Was das im Alltag bedeutet': 'Sortieren und Suchen können nach der Modellinstallation offline laufen, ohne Konto.',
            'Einschränkung / Hinweis': 'Der erste Download umfasst etwa 7 GB oder mehr; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            Vorteil: 'Kostenlos für private Nutzung',
            'Was das im Alltag bedeutet': 'Alle Funktionen sind für nichtkommerzielle Nutzung ohne Kosten enthalten.',
            'Einschränkung / Hinweis': 'Kommerzielle Nutzung erfordert eine kostenpflichtige Lizenz ohne veröffentlichten Preis.',
          },
          {
            Vorteil: 'Liest Dateiinhalte',
            'Was das im Alltag bedeutet': 'Namen und Ordner entstehen aus dem Inhalt von Dokumenten, Scans und Bildern.',
            'Einschränkung / Hinweis': 'Die Genauigkeit wurde hier nicht getestet.',
          },
          {
            Vorteil: 'Prüfen und rückgängig machen',
            'Was das im Alltag bedeutet': 'Laut Hersteller wird nichts verschoben, bevor Sie es freigeben, und Verschiebungen lassen sich umkehren.',
            'Einschränkung / Hinweis': 'Einen großen Rückstau durchzusehen kostet weiterhin Ihre Zeit.',
          },
          {
            Vorteil: 'Drei Desktop-Systeme',
            'Was das im Alltag bedeutet': 'Es gibt Installationsprogramme für Windows, macOS und Linux.',
            'Einschränkung / Hinweis': 'Keine mobile App; die Installationsdateien haben mehrere hundert MB.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 5.1.2 erschien am 1. November 2026.',
            'Einschränkung / Hinweis': 'Die erste öffentliche Version ist jung, die langfristige Erfolgsbilanz daher kurz.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Werkzeuge im Verzeichnis: eines, das ebenfalls Ordner und Dateinamen vorschlägt, eines, das lokale Dateien durchsucht und mit ihnen chattet, und ein allgemeiner Arbeitsbereich für Dokument-Chat.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'StratoSort',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Kostenlos nichtkommerziell, PolyForm NC',
            Rolle: 'Dateien sortieren, suchen und chatten',
            'Wichtigster Unterschied': 'Sortiert nach Inhalt; lokales llama.cpp; Prüfen und Rückgängig',
          },
          {
            App: '[AI File Sorter](/de/power-local-llm/ai-file-sorter-review)',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            Rolle: 'Vorschläge für Ordner und Dateinamen',
            'Wichtigster Unterschied': 'Open Source; Probelauf vor Änderungen',
          },
          {
            App: '[Hyperlink (Nexa AI)](/de/power-local-llm/hyperlink-nexa-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Kostenlos, proprietär',
            Rolle: 'Lokale Dateisuche und Chat',
            'Wichtigster Unterschied': 'Sucht und antwortet; geschlossener Code',
          },
          {
            App: '[AnythingLLM](/de/power-local-llm/anythingllm-review)',
            Plattformen: 'Windows, Mac, Linux, Web',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Arbeitsbereich für Dokument-Chat',
            'Wichtigster Unterschied': 'Chat und Agenten; sortiert keine Dateien',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen StratoSort geeignet ist',
        items: [
          '**Menschen mit unordentlichen Ordnern.** Downloads, Scans und Screenshots bekommen Namen und Ordner, die Sie prüfen können.',
          '**Datenschutzbewusste Privatnutzer.** Die Modelle laufen laut Dokumentation auf dem Computer, und die Nutzung ist kostenlos.',
          '**Linux-Nutzer.** Es gibt Installationsprogramme für Linux ebenso wie für Windows und Mac.',
          '**Menschen, die auch suchen möchten.** Semantische Suche und Dokument-Chat stecken in derselben App.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen StratoSort nicht geeignet ist',
        items: [
          '**Unternehmen ohne Lizenz.** Kommerzielle Nutzung erfordert eine kostenpflichtige Lizenz unter PolyForm Noncommercial.',
          '**Alle, die Open-Source-Code brauchen.** Die Lizenz ist source-available, nicht Open Source im Sinne der OSI.',
          '**Computer mit weniger als 8 GB RAM.** Das ist das angegebene Minimum.',
          '**Alle, die keinen automatischen Netzwerkverkehr wünschen.** Die Versionsprüfung ist standardmäßig aktiv und muss ausgeschaltet werden.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert StratoSort offline?',
            a: 'Laut Dokumentation ja, sobald die Modelle installiert sind, und sie empfiehlt einen Test im Flugmodus. Der erste Start braucht Internet, um sie herunterzuladen, es sei denn, Sie fahren mit eingeschränkter KI fort. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Kann ich es bei der Arbeit nutzen?',
            a: 'Nur mit einer kommerziellen Lizenz. Die Lizenz PolyForm Noncommercial deckt private und andere nichtkommerzielle Nutzung ab; der Hersteller nennt kommerzielle Lizenzen pro Arbeitsplatz per E-Mail.',
          },
          {
            q: 'Kann ich stattdessen ein Cloud-Modell nutzen?',
            a: 'Ja, optional: Fügen Sie Ihren eigenen Schlüssel von Anthropic oder einem OpenAI-kompatiblen Anbieter hinzu; er kann auch auf einen lokalen Ollama- oder LM-Studio-Server zeigen. Embeddings und Suche bleiben laut Hersteller lokal.',
          },
          {
            q: 'Kann ich eine Verschiebung rückgängig machen?',
            a: 'Laut Website lässt sich jede vorgeschlagene Verschiebung prüfen und rückgängig machen. PromptQuorum hat die Rückgängig-Funktion nicht getestet, legen Sie daher von wichtigen Ordnern eine Sicherung an.',
          },
          {
            q: 'Wer entwickelt StratoSort?',
            a: 'Kennedy Applied Sciences, Inc. veröffentlicht es, und der Code liegt im GitHub-Konto iLevyTate.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'StratoSort passt gut, wenn Sie sich von KI Namen und Ordner für einen unordentlichen Haufen aus Dokumenten, Scans und Bildern auf einem Mac-, Windows- oder Linux-Computer vorschlagen lassen möchten, mit Modellen, die laut Dokumentation auf dem Rechner laufen und zuerst um Ihre Freigabe bitten. Die App ist für private Nutzung kostenlos und hat in diesem Monat eine Version veröffentlicht.',
          'Die Vorbehalte sind die Lizenz, der große erste Download, ein Projekt, das erst vor Kurzem öffentlich wurde, und Aussagen, die PromptQuorum nicht prüfen konnte. Probieren Sie es an der Kopie eines Ordners aus, bevor Sie es auf Ihr Archiv loslassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von StratoSort](https://stratosort.com/) — Funktionen, Plattformen und Preise.',
          '[Dokumentation](https://stratosort.com/docs/) — Konfiguration, Modellprofile und Netzwerktransparenz.',
          '[Datenschutzerklärung](https://stratosort.com/privacy.html) — Umgang mit Daten, zuletzt aktualisiert am 29. Oktober 2026.',
          '[GitHub-Repository](https://github.com/iLevyTate/StratoSortStack) — README, Lizenz und Quellcode.',
          '[GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases) — Installationsdateien und Veröffentlichungsdatum von Version 5.1.2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[AI File Sorter Rezension](/de/power-local-llm/ai-file-sorter-review) — eine Open-Source-App, die Ordner und Dateinamen vorschlägt.',
          '[Hyperlink (Nexa AI) Rezension](/de/power-local-llm/hyperlink-nexa-review) — lokale Dateisuche und Chat für Mac und Windows.',
          '[AnythingLLM Rezension](/de/power-local-llm/anythingllm-review) — ein Arbeitsbereich für Dokument-Chat mit lokalen oder Cloud-Modellen.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-fr.webp',
    title: 'Test de StratoSort : organiseur de fichiers IA local pour Mac, Windows et Linux',
    seoTitle: 'Test de StratoSort : organiseur de fichiers IA local',
    intro: "StratoSort est une application de bureau qui trie les fichiers d'après leur contenu et sert aussi d'outil privé de recherche, de chat et de graphe de connaissances sur vos documents, grâce à des modèles de langage exécutés sur votre propre ordinateur via llama.cpp. Selon sa documentation, elle ne déplace les fichiers qu'après votre accord. Ce test résume ce que disent le site de l'éditeur, sa documentation et son dépôt GitHub, le point où s'arrête le traitement local, la façon dont la licence limite l'usage commercial, et comment StratoSort se compare aux outils similaires du répertoire.",
    metaDescription: "Test de StratoSort : organiseur de fichiers IA pour Mac, Windows, Linux, modèles llama.cpp locaux, hors ligne après installation. Limites. Non testé.",
    twitterDescription: "Test de StratoSort : une IA locale qui renomme, trie et recherche vos fichiers sur Mac, Windows et Linux. Gratuite à usage personnel. Confidentialité, licence, limites et alternatives.",
    audience: "Personnes dont les dossiers de documents, de scans, d'images et d'audio sont en désordre et qui veulent des noms et des dossiers suggérés par l'IA sans envoyer leurs fichiers à un service cloud — couvre l'installation, les modèles, la confidentialité, la licence, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'test stratosort',
      'stratosort organiseur de fichiers ia',
      'organiseur de fichiers ia local',
      'tri de fichiers ia hors ligne',
      'renommer fichiers ia mac windows linux',
      'recherche sémantique de fichiers locale',
      'discuter avec ses documents hors ligne',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: "**StratoSort est un organiseur de fichiers IA de bureau pour Mac, Windows et Linux dont les modèles de langage s'exécutent sur votre propre ordinateur via llama.cpp et, selon sa documentation, fonctionnent sans Internet une fois installés.** Il est gratuit pour un usage personnel et tout autre usage non commercial sous la licence PolyForm Noncommercial ; l'usage commercial exige une licence payante. La version la plus récente est la 5.1.2, du 1er novembre 2026. Ce test s'appuie sur le site de l'éditeur, sa documentation et son dépôt GitHub, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: 'StratoSort est-il un organiseur de fichiers IA local ?',
        answer: "Par défaut, oui : la documentation indique que les modèles s'exécutent dans l'application via llama.cpp, que le contenu des fichiers, les chemins, les embeddings et les requêtes de recherche restent sur la machine, et que l'application fonctionne sans Internet une fois les modèles installés. L'IA cloud est une option que vous activez en ajoutant votre propre clé API. PromptQuorum n'a inspecté ni le trafic réseau ni le code source : les affirmations de confidentialité restent celles de l'éditeur.",
        bullets: [
          "Il lit les documents, tableurs, images, scans, fichiers audio et vidéo, propose des noms et des dossiers ; selon le site, chaque déplacement peut être examiné et annulé.",
          "Le premier lancement télécharge des modèles d'environ 7 GB (profil Base) ou d'environ 10 GB (profil Better Quality), sauf si vous passez cette étape.",
          "Des installateurs existent pour Windows, macOS et Linux ; 8 GB de RAM est le minimum indiqué.",
          "Une vérification des nouvelles versions sur GitHub est activée par défaut et peut être désactivée dans les Paramètres.",
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir StratoSort', anchor: 'get-it' },
      { label: "StratoSort en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est StratoSort", anchor: 'what-is-stratosort' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: "Le mot de l'éditeur", anchor: 'from-the-maker' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'StratoSort face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui StratoSort est adapté', anchor: 'who-should-use' },
      { label: "Pour qui StratoSort n'est pas adapté", anchor: 'who-should-not-use' },
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
            text: "StratoSort est une application de bureau qui lit le contenu de vos fichiers et les range dans des dossiers que vous décrivez en langage courant, en les renommant selon un format cohérent ou en conservant leurs noms d'origine, avec des modèles qui s'exécutent sur votre propre ordinateur, selon l'éditeur.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez un assistant qui ouvre chaque fichier, comprend de quoi il s'agit, propose où le ranger et comment le nommer, puis attend votre accord avant de déplacer quoi que ce soit.",
          },
        ],
        items: [
          "Affirmation locale : les modèles s'exécutent sur l'appareil ; les téléchargements de modèles, les vérifications de mises à jour et tout fournisseur cloud que vous ajoutez utilisent Internet.",
          "Éditeur : Kennedy Applied Sciences, Inc., avec le code public sur GitHub sous iLevyTate.",
          "Maintenance : la version 5.1.2 est sortie le 1er novembre 2026 et le dépôt a été mis à jour le 10 novembre 2026, le projet est donc développé activement.",
          "Knowledge OS : selon l'éditeur, la partie recherche, chat et graphe représente environ la moitié de ce que fait l'application, et la recherche retrouve les termes exacts, comme les numéros de facture, aussi bien que le sens.",
          "Lacunes : aucun essai pratique ici, un projet public récent et des modèles qui exigent un gros premier téléchargement.",
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'Obtenir StratoSort',
        content: [
          "**StratoSort s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** Téléchargez l'installateur de votre système sur la page des versions GitHub ; les modèles d'IA sont téléchargés depuis l'application après le premier lancement.",
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            Plateforme: 'Windows',
            'Où le trouver': '[Télécharger pour Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — installateur .exe pour x64 ou arm64, ou archive .zip',
          },
          {
            Plateforme: 'Mac',
            'Où le trouver': '[Télécharger pour Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .dmg pour Apple Silicon ou Intel',
          },
          {
            Plateforme: 'Linux',
            'Où le trouver': '[Télécharger pour Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage ou .deb pour x64 ou arm64',
          },
          {
            Plateforme: 'Documentation',
            'Où le trouver': '[Documentation de StratoSort](https://stratosort.com/docs/) et [versions GitHub](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            Plateforme: 'Site web',
            'Où le trouver': '[stratosort.com](https://stratosort.com/)',
          },
          {
            Plateforme: 'Vidéo de démonstration',
            'Où le trouver': '[Vidéo de démonstration de StratoSort](https://stratosort.com/assets/strato-ad.mp4) — courte vidéo mp4 de l\'éditeur',
          },
          {
            Plateforme: 'Installation hors réseau',
            'Où le trouver': '[Guide d\'installation hors ligne](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — pour les machines jamais connectées',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où le trouver': '[Politique de confidentialité de StratoSort](https://stratosort.com/privacy.html)',
          },
          {
            Plateforme: 'Code source',
            'Où le trouver': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: "Les fichiers d'installation sont volumineux (le .deb pour Linux fait environ 534 MB), et chaque version fournit des fichiers de sommes de contrôle SHA-256. L'éditeur indique que les installateurs Windows sont signés par Kennedy Applied Sciences, Inc., et que les versions Mac sont notariées depuis la version 4.0.0.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "StratoSort en un coup d'œil",
        columns: ['Attribut', 'StratoSort'],
        rows: [
          { Attribut: 'Plateforme', StratoSort: 'Bureau Windows, macOS et Linux' },
          { Attribut: 'Prix', StratoSort: 'Gratuit non commercial ; payant en commercial' },
          { Attribut: 'Licence', StratoSort: 'Code accessible, PolyForm Noncommercial 1.0.0' },
          { Attribut: 'Exécution', StratoSort: 'Sur votre PC avec llama.cpp ; cloud avec votre clé seulement' },
          { Attribut: 'Mémoire', StratoSort: '8 GB de RAM minimum ; GPU optionnel' },
          { Attribut: 'Types de fichiers', StratoSort: 'Documents, tableurs, images, scans, audio, vidéo' },
          { Attribut: 'Annulation', StratoSort: 'Selon le site, chaque déplacement proposé peut être examiné et annulé' },
          { Attribut: 'Éditeur', StratoSort: 'Kennedy Applied Sciences, Inc.' },
        ],
        note: "Une absence de mention sur le site de l'éditeur signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: "Ce qu'est StratoSort",
        content: [
          "**StratoSort est un organiseur de fichiers qui lit le contenu, pas seulement les noms de fichiers.** Il examine les documents, tableurs, images, scans, fichiers audio et vidéo, propose un nom et un dossier, et range les fichiers dans des « Smart Folders » que vous décrivez en langage courant.",
          "Le dépôt s'appelle StratoSortStack et se présente comme le successeur du StratoSort d'origine ; le site et ce test utilisent le nom StratoSort. Au-delà du tri, l'application a une partie recherche, chat et graphe que l'éditeur appelle Knowledge OS et décrit comme environ la moitié de ce qu'elle fait, ainsi qu'un serveur MCP local optionnel.",
          "Ce test s'appuie sur le site, la documentation, la politique de confidentialité et le dépôt GitHub. Il n'a donné lieu à aucun essai pratique : la qualité des noms et du tri, ainsi que la vitesse, ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement de modèles et le choix d'un dossier.** Les étapes suivent les notes de version et la documentation.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez l'installateur de votre système depuis le tableau « Obtenir StratoSort » ci-dessus et ouvrez-le.",
          },
          {
            title: 'Télécharger les modèles',
            whyItMatters: "Après l'installation, utilisez Download Base Models pour activer les fonctions d'IA ; le profil Better Quality est une alternative plus volumineuse, et « Continue with limited AI » passe le téléchargement.",
          },
          {
            title: 'Décrire vos Smart Folders',
            whyItMatters: "Nommez en langage courant les destinations voulues, par exemple les factures ou les photos de voyage, pour que l'application sache où ranger les fichiers.",
          },
          {
            title: 'Examiner et approuver',
            whyItMatters: "Vérifiez chaque nom et chaque déplacement proposé avant qu'il n'ait lieu ; chaque déplacement peut ensuite être annulé.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur le rangement et la recherche de fichiers.** Tout ce qui suit provient du site, de la documentation, des notes de version et des commentaires de l'éditeur du 10 novembre 2026.",
        ],
        items: [
          "**Tri selon le contenu.** Les dossiers sont choisis d'après ce que contient le fichier, y compris les scans et les images grâce à un modèle de vision et à l'OCR. Le renommage est optionnel : les fichiers peuvent être renommés selon un format cohérent ou déplacés en gardant leur nom d'origine grâce à une option de conservation des noms.",
          "**Surveillance des dossiers.** Selon l'éditeur, l'application peut surveiller Téléchargements et vos Smart Folders et suggérer où ranger les nouveaux fichiers.",
          "**Examen et annulation.** Les déplacements proposés attendent votre accord et peuvent être annulés.",
          "**Recherche et chat.** La recherche retrouve les termes exacts, comme les numéros de facture, aussi bien que le sens, et les réponses du chat citent leurs fichiers sources.",
          "**Audio et vidéo.** La parole est transcrite avec Whisper, et les transcriptions sont indexées avec vos documents.",
          "**Graphe de connaissances.** Trois vues : Relate (groupes et liens de similarité), Atlas (une carte des embeddings vectoriels où l'on peut sélectionner des fichiers au lasso pour les déplacer, les étiqueter ou en faire un Smart Folder) et Timeline.",
          "**Serveur MCP.** Un serveur local optionnel, en lecture seule et lié à 127.0.0.1, permet à des outils comme Claude Desktop, Cursor et Zed d'interroger vos fichiers ; selon l'éditeur, les clients connectés reçoivent des résumés et des citations, jamais les fichiers bruts.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**StratoSort fournit deux profils de modèles, tous deux sous forme de fichiers GGUF.** Le profil Base utilise Llama-3.2-3B-Instruct pour le texte, llava-v1.6-mistral-7b pour la vision et all-MiniLM-L6-v2 pour les embeddings, soit environ 7 GB au total. Le profil Better Quality le remplace par Qwen2.5-7B-Instruct et nomic-embed-text-v1.5, soit environ 10 GB au total.",
          "La documentation indique 8 GB de RAM comme minimum et suggère 16 GB de RAM et un GPU de 8 GB pour Better Quality. Un GPU est optionnel : l'application peut utiliser NVIDIA CUDA, Apple Metal ou Vulkan, et se rabat sur le CPU. Le modèle vocal Whisper (environ 150 MB) n'est téléchargé que si vous l'installez. Aucune mesure de vitesse ou de précision n'a été reproduite ici.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que l'application s'exécute sur votre machine et que le contenu des documents, les chemins de fichiers, les embeddings et les requêtes de recherche ne la quittent pas dans la configuration standard.** Elle précise aussi que l'application n'inclut ni analytique, ni télémétrie, ni rapporteur de plantages, ni service de drapeaux de fonctionnalités qui communique avec l'extérieur, et que le site n'a ni compte ni service de synchronisation.",
          "La documentation sur le réseau énumère les connexions que l'application peut établir : téléchargements de modèles depuis huggingface.co, vérification des nouvelles versions sur GitHub, et un téléchargement ponctuel du modèle vocal. L'éditeur indique que l'environnement d'exécution de vision et les données de langue pour l'OCR sont fournis avec les installateurs et ne sont téléchargés qu'en solution de secours si un fichier intégré manque ; en usage normal, le modèle vocal est donc le seul téléchargement ponctuel de ces extras, et seulement si vous choisissez de l'installer. La vérification des versions est activée par défaut dans les versions installées et peut être désactivée dans les Paramètres. L'IA cloud reste désactivée tant que vous n'ajoutez pas votre propre clé Anthropic ou compatible OpenAI ; le texte que vous envoyez va alors à ce fournisseur, selon ses propres conditions. Le code est public et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "La licence est PolyForm Noncommercial 1.0.0, c'est-à-dire à code accessible et non open source. L'usage personnel et tout autre usage non commercial sont gratuits avec toutes les fonctions ; l'usage commercial exige une licence payante par poste auprès de Kennedy Applied Sciences, Inc., communiquée par e-mail, sans prix publié.",
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "Le mot de l'éditeur",
        content: [
          "L'éditeur de StratoSort a envoyé des corrections et la note ci-dessous le 10 novembre 2026. Elle est présentée comme les propres mots de l'éditeur, et non comme une évaluation éditoriale indépendante de PromptQuorum ; PromptQuorum n'a pu la vérifier ni dans le code ni par des tests :",
          "« J'ai créé StratoSort pour les personnes dont les fichiers sont trop privés pour être envoyés à un service d'IA dans le cloud. Une fois les modèles téléchargés, le tri, la recherche, le chat et la transcription fonctionnent tous sur votre machine. Il n'y a ni compte ni télémétrie, et, avec les vérifications de mises à jour désactivées et sans clé cloud, l'application n'effectue aucune requête sortante. Je l'ai développée seul, en environ 17 mois de travail à temps partiel. Si quelque chose se comporte autrement que ce qu'indique la documentation, ouvrez un ticket sur GitHub et je regarderai. »",
        ],
        note: "— L'éditeur de StratoSort",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Modèles sur votre ordinateur',
            "Ce que cela donne à l'usage": 'Le tri et la recherche peuvent fonctionner hors ligne une fois les modèles installés, sans compte.',
            'Limite / réserve': "Le premier téléchargement fait environ 7 GB ou plus ; PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            Avantage: 'Gratuit à usage personnel',
            "Ce que cela donne à l'usage": 'Toutes les fonctions sont incluses sans frais pour un usage non commercial.',
            'Limite / réserve': "L'usage commercial exige une licence payante sans prix publié.",
          },
          {
            Avantage: 'Lit le contenu des fichiers',
            "Ce que cela donne à l'usage": "Les noms et les dossiers viennent de ce que contiennent les documents, scans et images.",
            'Limite / réserve': "La précision n'a pas été testée ici.",
          },
          {
            Avantage: 'Examen et annulation',
            "Ce que cela donne à l'usage": "Selon le site, rien ne bouge avant votre accord, et les déplacements peuvent être annulés.",
            'Limite / réserve': "Examiner un gros arriéré demande tout de même du temps.",
          },
          {
            Avantage: 'Trois systèmes de bureau',
            "Ce que cela donne à l'usage": 'Des installateurs existent pour Windows, macOS et Linux.',
            'Limite / réserve': "Pas d'application mobile ; les installateurs pèsent plusieurs centaines de MB.",
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'La version 5.1.2 est sortie le 1er novembre 2026.',
            'Limite / réserve': "La première version publique est récente : l'historique à long terme est court.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort face aux alternatives',
        content: [
          "Voici les outils les plus proches du répertoire : un qui propose aussi des dossiers et des noms de fichiers, un qui recherche et discute avec des fichiers locaux, et un espace généraliste de chat avec des documents.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'StratoSort',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit non commercial, PolyForm NC',
            Rôle: 'Tri, recherche et chat sur les fichiers',
            'Différence clé': 'Trie selon le contenu ; llama.cpp local ; examen et annulation',
          },
          {
            Application: '[AI File Sorter](/fr/power-local-llm/ai-file-sorter-review)',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            Rôle: 'Propositions de dossiers et de noms de fichiers',
            'Différence clé': 'Open source ; simulation avant modification',
          },
          {
            Application: '[Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Gratuit, propriétaire',
            Rôle: 'Recherche et chat sur les fichiers locaux',
            'Différence clé': 'Recherche et répond ; code fermé',
          },
          {
            Application: '[AnythingLLM](/fr/power-local-llm/anythingllm-review)',
            Plateformes: 'Windows, Mac, Linux, web',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Espace de chat avec des documents',
            'Différence clé': 'Chat et agents ; ne trie pas les fichiers',
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui StratoSort est adapté',
        items: [
          "**Personnes aux dossiers en désordre.** Les téléchargements, scans et captures d'écran reçoivent des noms et des dossiers que vous pouvez examiner.",
          "**Particuliers soucieux de confidentialité.** Les modèles s'exécutent sur l'ordinateur, selon la documentation, et l'usage est gratuit.",
          "**Utilisateurs de Linux.** Des installateurs existent pour Linux comme pour Windows et Mac.",
          "**Personnes qui veulent aussi la recherche.** La recherche sémantique et le chat avec les documents sont dans la même application.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui StratoSort n'est pas adapté",
        items: [
          "**Entreprises sans licence.** L'usage commercial exige une licence payante sous PolyForm Noncommercial.",
          "**Quiconque a besoin d'un code open source.** La licence est à code accessible, pas open source au sens de l'OSI.",
          "**Ordinateurs de moins de 8 GB de RAM.** C'est le minimum indiqué.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'StratoSort fonctionne-t-il hors ligne ?',
            a: "La documentation répond oui une fois les modèles installés, et suggère un test en mode avion. Le premier lancement exige Internet pour les télécharger, sauf si vous continuez avec une IA limitée, et le guide d'installation documente une installation en environnement isolé pour les machines qui ne se connectent jamais à Internet (voir « Obtenir StratoSort »). PromptQuorum ne l'a pas testé hors ligne.",
          },
          {
            q: 'Puis-je l\'utiliser au travail ?',
            a: "Seulement avec une licence commerciale. La licence PolyForm Noncommercial couvre l'usage personnel et tout autre usage non commercial ; l'éditeur communique par e-mail les licences commerciales par poste.",
          },
          {
            q: 'Puis-je utiliser un modèle cloud à la place ?',
            a: "Oui, en option : ajoutez votre propre clé Anthropic ou compatible OpenAI, qui peut aussi pointer vers un serveur Ollama ou LM Studio local. Les embeddings et la recherche restent locaux, selon l'éditeur.",
          },
          {
            q: 'Puis-je annuler un déplacement ?',
            a: "Le site indique que chaque déplacement proposé peut être examiné et annulé. PromptQuorum n'a pas testé l'annulation : conservez donc une sauvegarde des dossiers importants.",
          },
          {
            q: 'Qui édite StratoSort ?',
            a: "Kennedy Applied Sciences, Inc. le publie, et le code se trouve dans le compte GitHub iLevyTate.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "StratoSort convient si vous voulez que l'IA propose des noms et des dossiers pour un tas désordonné de documents, de scans et d'images sur un ordinateur Mac, Windows ou Linux, avec des modèles qui, selon la documentation, s'exécutent sur la machine et demandent d'abord votre accord. Il est gratuit à usage personnel et a publié une version ce mois-ci.",
          "Les réserves tiennent à la licence, au gros premier téléchargement, à un projet devenu public récemment et à des affirmations que PromptQuorum n'a pas pu vérifier. Essayez-le sur une copie d'un seul dossier avant de le lancer sur vos archives.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de StratoSort](https://stratosort.com/) — fonctions, plateformes et tarifs.',
          '[Documentation](https://stratosort.com/docs/) — configuration, profils de modèles et transparence réseau.',
          '[Politique de confidentialité](https://stratosort.com/privacy.html) — traitement des données, dernière mise à jour le 29 octobre 2026.',
          '[Dépôt GitHub](https://github.com/iLevyTate/StratoSortStack) — README, licence et code source.',
          "[Versions GitHub](https://github.com/iLevyTate/StratoSortStack/releases) — fichiers d'installation et date de publication de la version 5.1.2.",
          '[Guide d\'installation](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — installateurs et installation hors ligne et en environnement isolé.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test d'AI File Sorter](/fr/power-local-llm/ai-file-sorter-review) — une application open source qui propose des dossiers et des noms de fichiers.",
          '[Test de Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review) — recherche et chat sur les fichiers locaux pour Mac et Windows.',
          "[Test d'AnythingLLM](/fr/power-local-llm/anythingllm-review) — un espace de chat avec des documents, avec modèles locaux ou cloud.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-ja.webp',
    title: 'StratoSort レビュー：Mac・Windows・Linux向けのローカルAIファイル整理アプリ',
    seoTitle: 'StratoSort レビュー：ローカルAIファイル整理アプリ',
    intro: 'StratoSortは、ファイルの中身で整理するデスクトップアプリで、ドキュメントを対象にしたプライベートな検索、チャット、ナレッジグラフのツールとしても使えます。使う言語モデルは、llama.cppを通じてお使いのコンピューター上で動作します。ドキュメントによると、ファイルの移動は承認したあとにだけ行われます。このレビューでは、開発元の公式サイト、ドキュメント、GitHubリポジトリが示している点、ローカル処理が終わる境界、ライセンスによる商用利用の制限、ディレクトリ内の類似ツールとの比較をまとめます。',
    metaDescription: 'StratoSortのレビュー：Mac・Windows・Linux向けのAIファイル整理アプリ。PC上でllama.cppを実行し、導入後はオフライン対応。ライセンスと制限を解説。実機検証なし。',
    twitterDescription: 'StratoSortのレビュー：Mac・Windows・Linuxでファイルの名前変更、整理、検索を行うローカルAI。個人利用は無料。プライバシー、ライセンス、制限、代替ツールを解説します。',
    audience: 'ドキュメント、スキャン、画像、音声のフォルダーが散らかっていて、ファイルをクラウドにアップロードせずにAIで名前とフォルダーを提案してほしい方向け。インストール、モデル、プライバシー、ライセンス、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'stratosort レビュー',
      'stratosort ai ファイル整理',
      'ローカル ai ファイル整理',
      'オフライン ai ファイル仕分け',
      'ai ファイル名変更 mac windows linux',
      'ローカル セマンティック検索 ファイル',
      'ドキュメントとチャット オフライン',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSortは、Mac・Windows・Linux向けのデスクトップAIファイル整理アプリで、言語モデルはllama.cppを通じてお使いのコンピューター上で動作します。ドキュメントによると、インストール後はインターネットなしで動作します。** 個人利用などの非商用利用はPolyForm Noncommercialライセンスのもとで無料で、商用利用には有料ライセンスが必要です。最新リリースは2026年11月1日のバージョン5.1.2です。このレビューは、開発元の公式サイト、ドキュメント、GitHubリポジトリに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'StratoSortはローカルで動くAIファイル整理アプリですか？',
        answer: '既定では、そうです。ドキュメントによると、モデルはllama.cppによりアプリ内で動作し、ファイルの内容、パス、埋め込み、検索クエリはマシン内にとどまり、モデルをインストールしたあとはインターネットなしで動作します。クラウドAIは、自分のAPIキーを追加して有効にするオプションです。PromptQuorumはネットワーク通信もソースコードも調べていないため、プライバシーに関する主張は開発元自身によるものです。',
        bullets: [
          'ドキュメント、スプレッドシート、画像、スキャン、音声、動画を読み取って名前とフォルダーを提案します。公式サイトによると、すべての移動を確認して元に戻せます。',
          '初回起動時に、約7GB（Baseプロファイル）または約10GB（Better Qualityプロファイル）のモデルをダウンロードします。スキップもできます。',
          'インストーラーはWindows、macOS、Linux向けにあり、最小RAMは8GBと記載されています。',
          '新しいリリースをGitHubで確認する機能は既定でオンで、設定からオフにできます。',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'StratoSortの入手方法', anchor: 'get-it' },
      { label: 'StratoSortの概要', anchor: 'at-a-glance' },
      { label: 'StratoSortとは', anchor: 'what-is-stratosort' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: '開発元より', anchor: 'from-the-maker' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'StratoSortと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'StratoSortが向いている人', anchor: 'who-should-use' },
      { label: 'StratoSortが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'StratoSortは、開発元によると、ファイルの中身を読み取り、普通の言葉で説明したフォルダーに移動するデスクトップアプリで、一貫した形式で名前を付け直すことも、元の名前のままにすることもでき、使うモデルはお使いのコンピューター上で動作します。',
          },
          {
            type: 'plain-terms',
            text: '各ファイルを開いて中身を判断し、置き場所と名前を提案して、あなたの承認を待ってから移動するアシスタントだと考えてください。',
          },
        ],
        items: [
          'ローカルの主張：モデルは端末内で動作します。モデルのダウンロード、更新の確認、追加したクラウドプロバイダーにはインターネットが使われます。',
          '開発元：Kennedy Applied Sciences, Inc.で、コードはGitHubのiLevyTateで公開されています。',
          'メンテナンス：バージョン5.1.2が2026年11月1日にリリースされ、リポジトリは2026年11月10日に更新されており、プロジェクトは活発に開発されています。',
          'Knowledge OS：開発元によると、検索、チャット、グラフの部分がアプリの機能のおよそ半分を占めており、検索は意味だけでなく、請求書番号のような完全一致の語句にも対応します。',
          '不足点：ここでは実機検証をしていないこと、公開されて日が浅いプロジェクトであること、初回に大容量のモデルのダウンロードが必要なことです。',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'StratoSortの入手方法',
        content: [
          '**StratoSortはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** GitHubのリリースページからお使いのシステム用のインストーラーをダウンロードします。AIモデルは、初回起動後にアプリ内でダウンロードします。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://github.com/iLevyTate/StratoSortStack/releases/latest) — x64・arm64用の.exeインストーラー、または.zip',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://github.com/iLevyTate/StratoSortStack/releases/latest) — Apple Silicon・Intel用の.dmg',
          },
          {
            'プラットフォーム': 'Linux',
            '入手先': '[Linux版をダウンロード](https://github.com/iLevyTate/StratoSortStack/releases/latest) — x64・arm64用のAppImageまたは.deb',
          },
          {
            'プラットフォーム': 'ドキュメント',
            '入手先': '[StratoSortのドキュメント](https://stratosort.com/docs/)と[GitHubリリース](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[stratosort.com](https://stratosort.com/)',
          },
          {
            'プラットフォーム': 'デモ動画',
            '入手先': '[StratoSortのデモ動画](https://stratosort.com/assets/strato-ad.mp4) — 開発元による短いmp4',
          },
          {
            'プラットフォーム': 'エアギャップ環境へのインストール',
            '入手先': '[インストールガイド：オフライン・エアギャップ環境へのインストール](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — インターネットに接続しないマシン向け',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[StratoSortのプライバシーポリシー](https://stratosort.com/privacy.html)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'インストーラーのファイルは大きく（Linuxの.debは約534MB）、各リリースにはSHA-256のチェックサムファイルが掲載されています。開発元によると、WindowsのインストーラーはKennedy Applied Sciences, Inc.の署名付きで、Mac版はバージョン4.0.0以降、公証（notarization）を受けています。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSortの概要',
        columns: [
          '項目',
          'StratoSort',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'StratoSort': 'Windows、macOS、Linuxのデスクトップ' },
          { '項目': '価格', 'StratoSort': '非商用は無料。商用は有料' },
          { '項目': 'ライセンス', 'StratoSort': 'ソース公開型、PolyForm Noncommercial 1.0.0' },
          { '項目': '実行場所', 'StratoSort': 'お使いのPC上でllama.cpp。クラウドは自分のキーを使う場合のみ' },
          { '項目': 'メモリ', 'StratoSort': '最小RAM 8GB。GPUは任意' },
          { '項目': '入力の種類', 'StratoSort': 'ドキュメント、スプレッドシート、画像、スキャン、音声、動画' },
          { '項目': '元に戻す', 'StratoSort': '開発元によると、提案されたすべての移動を確認して元に戻せる' },
          { '項目': '開発元', 'StratoSort': 'Kennedy Applied Sciences, Inc.' },
        ],
        note: '開発元のサイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'StratoSortとは',
        content: [
          '**StratoSortは、ファイル名だけでなく中身を読み取るファイル整理アプリです。** ドキュメント、スプレッドシート、画像、スキャン、音声、動画の中を調べて名前とフォルダーを提案し、普通の言葉で説明した「Smart Folders」にファイルを移動します。',
          'リポジトリの名前はStratoSortStackで、元のStratoSortの後継と説明されています。公式サイトとこのレビューではStratoSortという名前を使います。整理のほかに、検索、チャット、グラフの部分があり、開発元はこれをKnowledge OSと呼んで、アプリの機能のおよそ半分を占めると説明しています。さらに、オプトインで有効にするローカルMCPサーバーも備えています。',
          'このレビューは、公式サイト、ドキュメント、プライバシーポリシー、GitHubリポジトリに基づいています。実機での検証は行っていないため、名前の付け方や整理の精度、速度は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルのダウンロード、フォルダーの設定です。** 手順はリリースノートとドキュメントに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '上の「StratoSortの入手方法」の表からお使いのシステム用のインストーラーをダウンロードして開きます。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: 'インストール後にDownload Base Modelsを選ぶとAI機能が有効になります。Better Qualityプロファイルはより大きな選択肢で、「Continue with limited AI」を選ぶとダウンロードをスキップできます。',
          },
          {
            title: 'Smart Foldersを設定する',
            whyItMatters: '請求書や旅行写真など、作りたい保存先を普通の言葉で名付けておくと、アプリがファイルの置き場所を判断できます。',
          },
          {
            title: '確認して承認する',
            whyItMatters: '提案された名前と移動を実行前に1件ずつ確認します。すべての移動は、あとから元に戻せます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、ファイルの整理と検索です。** 以下はすべて公式サイト、ドキュメント、リリースノート、および2026年11月10日付の開発元のコメントによります。',
        ],
        items: [
          '**内容に基づく整理。** フォルダーは、ファイルの中身から選ばれます。スキャンや画像はビジョンモデルとOCRを通じて扱います。名前の変更は任意で、一貫した形式で付け直すことも、元の名前を保つ命名オプションで名前を変えずに移動することもできます。',
          '**フォルダーの監視。** 開発元によると、アプリはダウンロードフォルダーとSmart Foldersを監視し、新しいファイルの置き場所を提案できます。',
          '**確認と取り消し。** 提案された移動はあなたの承認を待ち、元に戻すことができます。',
          '**検索とチャット。** 検索は、意味だけでなく、請求書番号のような完全一致の語句にも対応します。チャットの回答には、根拠となったファイルが引用されます。',
          '**音声と動画。** 音声はWhisperで文字起こしされ、文字起こし結果はドキュメントと一緒にインデックスされます。',
          '**ナレッジグラフ。** 3つのビューがあります。Relate（クラスターと類似性のリンク）、Atlas（ベクトル埋め込みのマップで、ファイルを囲んで選択し、移動、タグ付け、Smart Foldersへの変換ができます）、そしてTimelineです。',
          '**MCPサーバー。** オプトインで有効にするローカルサーバーは読み取り専用で、127.0.0.1にバインドされており、Claude Desktop、Cursor、Zedなどのツールからファイルに問い合わせられます。開発元によると、接続したクライアントに渡されるのは要約と引用であり、元のファイルが渡されることはありません。'
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**StratoSortには2つのモデルプロファイルがあり、どちらもGGUFファイルです。** Baseプロファイルは、テキストにLlama-3.2-3B-Instruct、ビジョンにllava-v1.6-mistral-7b、埋め込みにall-MiniLM-L6-v2を使い、合計で約7GBです。Better Qualityプロファイルは、Qwen2.5-7B-Instructとnomic-embed-text-v1.5に入れ替わり、合計で約10GBです。',
          'ドキュメントには、最小RAMは8GBと記載されており、Better Qualityには16GBのRAMと8GBのGPUが推奨されています。GPUは任意で、アプリはNVIDIA CUDA、Apple Metal、Vulkanを使え、CPUにも切り替わります。Whisperの音声モデル（約150MB）は、インストールしたときだけダウンロードされます。速度や精度の数値は、ここでは再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、アプリはお使いのマシン上で動作し、標準設定ではドキュメントの内容、ファイルパス、埋め込み、検索クエリがマシンの外に出ないと記載されています。** また、外部に通信するアナリティクス、テレメトリー、クラッシュレポーター、フィーチャーフラグのサービスは含まれておらず、公式サイトにはアカウントも同期サービスもないとしています。',
          'ネットワークに関するドキュメントには、アプリが行える接続が挙げられています。huggingface.coからのモデルのダウンロード、GitHubでの新しいリリースの確認、そして音声モデルの単発のダウンロードです。開発元によると、ビジョンのランタイムとOCRの言語データはインストーラーに同梱されており、同梱ファイルが見つからない場合の代替としてのみダウンロードされます。そのため通常の使用では、これらの追加機能のうち単発のダウンロードになるのは音声モデルだけで、それもあなたがインストールを選んだときだけです。リリースの確認はインストール版では既定でオンで、設定からオフにできます。クラウドAIは、自分のAnthropicまたはOpenAI互換のキーを追加しない限りオフのままで、追加した場合は送信したテキストがそのプロバイダーの規約のもとでプロバイダーに送られます。コードは公開されており、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          'ライセンスはPolyForm Noncommercial 1.0.0で、オープンソースではなくソース公開型です。個人利用などの非商用利用は全機能が無料です。商用利用には、Kennedy Applied Sciences, Inc.の有料の1席あたりのライセンスが必要で、価格は公開されておらずメールで見積もられます。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発元より',
        content: [
          'StratoSortの開発元は、2026年11月10日に訂正と以下のメッセージを送ってくれました。これは開発元自身の言葉であり、PromptQuorumの独立した編集上の評価ではありません。PromptQuorumはコードの確認や検証ではこの内容を確かめられていません。',
          '「StratoSortは、ファイルがあまりにプライベートで、クラウドのAIサービスにアップロードできない人のために作りました。モデルをダウンロードしたあとは、整理、検索、チャット、文字起こしのすべてがお使いのマシン上で動作します。アカウントもテレメトリーもなく、更新の確認をオフにしてクラウドのキーも設定しなければ、外部へのリクエストは一切行いません。私は約17か月、パートタイムで一人で開発してきました。ドキュメントと動作が違う点があれば、GitHubでissueを立ててください。確認します。」',
        ],
        note: '— StratoSortの開発元',
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
            'メリット': 'お使いのPC上のモデル',
            '実際の使い勝手': 'モデルのインストール後は、アカウントなしでオフラインのまま整理と検索ができます。',
            '制限・注意点': '最初のダウンロードは約7GB以上です。PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            'メリット': '個人利用は無料',
            '実際の使い勝手': '非商用利用なら、すべての機能を無料で使えます。',
            '制限・注意点': '商用利用には有料ライセンスが必要で、価格は公開されていません。',
          },
          {
            'メリット': 'ファイルの中身を読む',
            '実際の使い勝手': '名前とフォルダーは、ドキュメント、スキャン、画像の中身から付けられます。',
            '制限・注意点': '精度はここでは検証していません。',
          },
          {
            'メリット': '確認と取り消し',
            '実際の使い勝手': '開発元によると、承認するまで何も移動せず、移動は元に戻せます。',
            '制限・注意点': '大量の未整理ファイルを確認するには、やはり時間がかかります。',
          },
          {
            'メリット': '3つのデスクトップOS',
            '実際の使い勝手': 'Windows、macOS、Linux向けのインストーラーがあります。',
            '制限・注意点': 'モバイルアプリはなく、インストーラーは数百MBあります。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン5.1.2が2026年11月1日に公開されました。',
            '制限・注意点': '最初の公開リリースは最近のため、長期的な実績はまだ短いです。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSortと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近いツールは、同じようにフォルダーとファイル名を提案するもの、ローカルのファイルを検索してチャットできるもの、そして汎用のドキュメントチャット用ワークスペースです。',
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
            'アプリ': 'StratoSort',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '非商用は無料、PolyForm NC',
            '役割': 'ファイル整理、検索、チャット',
            '主な違い': '内容で整理。ローカルのllama.cpp。確認と取り消し',
          },
          {
            'アプリ': '[AI File Sorter](/ja/power-local-llm/ai-file-sorter-review)',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': 'フォルダーとファイル名の提案',
            '主な違い': 'オープンソース。変更前にドライラン',
          },
          {
            'アプリ': '[Hyperlink (Nexa AI)](/ja/power-local-llm/hyperlink-nexa-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': '無料、プロプライエタリ',
            '役割': 'ローカルファイルの検索とチャット',
            '主な違い': '検索と回答。クローズドソース',
          },
          {
            'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)',
            '対応': 'Windows、Mac、Linux、Web',
            '価格とライセンス': '無料、MIT',
            '役割': 'ドキュメントチャット用ワークスペース',
            '主な違い': 'チャットとエージェント。ファイルの整理はしない',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'StratoSortが向いている人',
        items: [
          '**フォルダーが散らかっている人。** ダウンロード、スキャン、スクリーンショットに、確認できる名前とフォルダーが付きます。',
          '**プライバシーを重視する家庭のユーザー。** ドキュメントによると、モデルはコンピューター上で動作し、利用は無料です。',
          '**Linuxユーザー。** WindowsとMacに加えて、Linux向けのインストーラーもあります。',
          '**検索もしたい人。** セマンティック検索とドキュメントとのチャットが同じアプリにあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'StratoSortが向いていない人',
        items: [
          '**ライセンスを持たない企業。** 商用利用には、PolyForm Noncommercialのもとで有料ライセンスが必要です。',
          '**オープンソースのコードが必要な人。** ライセンスはソース公開型で、OSI認定のオープンソースではありません。',
          '**RAMが8GB未満のコンピューター。** それが記載されている最小要件です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'StratoSortはオフラインで使えますか？',
            a: 'ドキュメントによると、モデルをインストールしたあとは使え、機内モードでのテストも勧められています。初回起動時はモデルのダウンロードにインターネットが必要です。ただし「limited AI」で続ける場合は不要です。また、インターネットに接続しないマシン向けのエアギャップ環境へのインストールが、インストールガイドに記載されています（「StratoSortの入手方法」を参照）。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: '仕事で使えますか？',
            a: '商用ライセンスがある場合のみです。PolyForm Noncommercialライセンスが対象とするのは個人利用などの非商用利用で、開発元は商用の1席あたりのライセンスをメールで見積もっています。',
          },
          {
            q: 'クラウドモデルを代わりに使えますか？',
            a: 'はい、オプションとして使えます。自分のAnthropicまたはOpenAI互換のキーを追加します。ローカルのOllamaやLM Studioのサーバーを指すこともできます。開発元によると、埋め込みと検索はローカルのままです。',
          },
          {
            q: '移動を元に戻せますか？',
            a: '公式サイトには、提案されたすべての移動を確認して元に戻せるとあります。PromptQuorumは取り消しを検証していないため、大切なフォルダーはバックアップを取っておいてください。',
          },
          {
            q: 'StratoSortは誰が作っていますか？',
            a: 'Kennedy Applied Sciences, Inc.が公開しており、コードはGitHubのアカウントiLevyTateにあります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Mac、Windows、Linuxのコンピューターで、散らかったドキュメント、スキャン、画像の山にAIで名前とフォルダーを提案してほしい方に、StratoSortは向いています。ドキュメントによるとモデルはマシン上で動作し、まず承認を求めます。個人利用は無料で、今月リリースがありました。',
          '注意点は、ライセンス、初回の大容量ダウンロード、公開されて日が浅いプロジェクトであること、そしてPromptQuorumでは確認できなかった主張です。アーカイブ全体に使う前に、1つのフォルダーのコピーで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[StratoSort公式サイト](https://stratosort.com/) — 機能、プラットフォーム、価格。',
          '[ドキュメント](https://stratosort.com/docs/) — 設定、モデルプロファイル、ネットワークの透明性。',
          '[プライバシーポリシー](https://stratosort.com/privacy.html) — データの取り扱い。最終更新は2026年10月29日。',
          '[GitHubリポジトリ](https://github.com/iLevyTate/StratoSortStack) — README、ライセンス、ソースコード。',
          '[GitHubリリース](https://github.com/iLevyTate/StratoSortStack/releases) — インストーラーのアセットとバージョン5.1.2のリリース日。',
          '[インストールガイド](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — インストーラーと、オフライン・エアギャップ環境へのインストール。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AI File Sorterレビュー](/ja/power-local-llm/ai-file-sorter-review) — フォルダーとファイル名を提案するオープンソースアプリ。',
          '[Hyperlink (Nexa AI)レビュー](/ja/power-local-llm/hyperlink-nexa-review) — Mac・Windows向けのローカルファイル検索とチャット。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — ローカルまたはクラウドのモデルを使えるドキュメントチャット用ワークスペース。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-zh.webp',
    title: 'StratoSort评测：适用于Mac、Windows和Linux的本地AI文件整理工具',
    seoTitle: 'StratoSort评测：Mac、Windows、Linux本地AI文件整理',
    intro: 'StratoSort是一款桌面应用：它读取文件的内容，建议文件名和文件夹，并且据其文档称只有在你批准后才移动文件，所用的语言模型通过llama.cpp在你自己的电脑上运行。它还提供语义搜索、文档问答和知识图谱。本评测梳理其官网、文档和GitHub仓库记载的内容、本地运行的界线、许可证如何限制商业使用，以及它与目录中同类工具的对比。',
    metaDescription: 'StratoSort评测：适用于Mac、Windows和Linux的AI文件整理应用，本地运行llama.cpp模型，安装后可离线使用。许可、隐私与限制，未经实测。',
    twitterDescription: 'StratoSort评测：在Mac、Windows和Linux上本地重命名、整理和搜索文件的AI工具。个人使用免费。隐私、许可、限制与替代方案。',
    audience: '文档、扫描件、图片和音频文件夹杂乱、希望由AI建议文件名和文件夹、又不想把文件上传到云服务的用户——涵盖安装、模型、隐私、许可、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'stratosort 评测',
      'stratosort ai 文件整理',
      '本地 ai 文件整理工具',
      '离线 ai 文件分类',
      'mac windows linux ai 文件重命名',
      '本地语义文件搜索',
      '离线与文档对话',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSort是一款适用于Mac、Windows和Linux的桌面AI文件整理工具，其语言模型通过llama.cpp在你自己的电脑上运行，据其文档称，安装后无需联网即可使用。** 个人及其他非商业用途在PolyForm Noncommercial许可证下免费；商业使用需要付费许可。最新版本为2026年11月1日发布的5.1.2。本评测依据开发者公开的官网、文档和GitHub仓库，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'StratoSort是本地AI文件整理工具吗？',
        answer: '默认是：文档称模型通过llama.cpp在应用内运行，文件内容、路径、嵌入向量和搜索查询都留在本机，安装模型后应用无需联网即可运行。云端AI是可选项，需要你添加自己的API密钥后才会启用。PromptQuorum没有检查网络流量或源代码，因此隐私说法仍出自开发者自己。',
        bullets: [
          '它读取文档、电子表格、图片、扫描件、音频和视频，建议文件名和文件夹；据官网称，每次移动都可以复核并撤销。',
          '首次启动会下载约7 GB（Base配置）或约10 GB（Better Quality配置）的模型，也可以跳过。',
          '提供Windows、macOS和Linux安装包；官方标明的最低内存为8 GB。',
          '默认开启检查GitHub上新版本的功能，可在设置中关闭。',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取StratoSort', anchor: 'get-it' },
      { label: 'StratoSort概览', anchor: 'at-a-glance' },
      { label: 'StratoSort是什么', anchor: 'what-is-stratosort' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'StratoSort与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用StratoSort的人', anchor: 'who-should-use' },
      { label: '不适合使用StratoSort的人', anchor: 'who-should-not-use' },
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
            text: 'StratoSort是一款桌面应用，据其文档称，它使用本地llama.cpp模型为你的文件建议名称和文件夹，下载模型后可离线使用。',
          },
          {
            type: 'plain-terms',
            text: '把它想成一位助手：它打开每个文件，判断这是什么，提议它该放在哪里、叫什么名字，并在你点头之后才移动任何文件。',
          },
        ],
        items: [
          '本地说法：模型在设备上运行；模型下载、更新检查以及你添加的任何云端服务商会使用互联网。',
          '开发者：Kennedy Applied Sciences, Inc.，代码公开在GitHub的iLevyTate账号下。',
          '维护状态：版本5.1.2于2026年11月1日发布，仓库于2026年11月10日更新，说明项目仍在积极开发。',
          '不足：这里没有上手测试，公开项目还很年轻，模型首次下载体积大。',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: '获取StratoSort',
        content: [
          '**StratoSort的安装方式与其他桌面应用相同，无需使用终端。** 从GitHub发布页面下载适合你系统的安装包；AI模型在首次启动后于应用内下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://github.com/iLevyTate/StratoSortStack/releases/latest) — 适用于x64或arm64的.exe安装包，或.zip',
          },
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://github.com/iLevyTate/StratoSortStack/releases/latest) — 适用于Apple Silicon或Intel的.dmg',
          },
          {
            '平台': 'Linux',
            '获取方式': '[下载Linux版](https://github.com/iLevyTate/StratoSortStack/releases/latest) — 适用于x64或arm64的AppImage或.deb',
          },
          {
            '平台': '文档',
            '获取方式': '[StratoSort文档](https://stratosort.com/docs/)和[GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            '平台': '官网',
            '获取方式': '[stratosort.com](https://stratosort.com/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[StratoSort隐私政策](https://stratosort.com/privacy.html)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: '安装包体积较大（Linux的.deb约534 MB），每个版本都附有SHA-256校验文件。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort概览',
        columns: ['属性', 'StratoSort'],
        rows: [
          { '属性': '平台', 'StratoSort': 'Windows、macOS和Linux桌面版' },
          { '属性': '价格', 'StratoSort': '非商业使用免费；商业使用付费' },
          { '属性': '许可', 'StratoSort': '源代码可见，PolyForm Noncommercial 1.0.0' },
          { '属性': '运行方式', 'StratoSort': '在你的电脑上用llama.cpp运行；仅在你提供密钥时使用云端' },
          { '属性': '内存', 'StratoSort': '最低8 GB内存；GPU可选' },
          { '属性': '输入类型', 'StratoSort': '文档、电子表格、图片、扫描件、音频、视频' },
          { '属性': '撤销', 'StratoSort': '据开发者称，每次建议的移动都可以复核并撤销' },
          { '属性': '开发者', 'StratoSort': 'Kennedy Applied Sciences, Inc.' },
        ],
        note: '开发者网站未提及，表示未知，而不是不支持。',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'StratoSort是什么',
        content: [
          '**StratoSort是一款读取内容、而不只是文件名的文件整理工具。** 它查看文档、电子表格、图片、扫描件、音频和视频的内部，建议名称和文件夹，并把文件移入你用日常语言描述的“Smart Folders”。',
          '仓库名为StratoSortStack，并自称是原版StratoSort的继任者；官网和本评测使用StratoSort这个名称。除整理之外，应用还提供语义搜索、带来源的文档问答、知识图谱，以及供Claude Desktop、Cursor和Zed等工具使用的可选本地MCP服务器。',
          '本评测依据官网、文档、隐私政策和GitHub仓库，没有进行实际上手测试，因此这里不对应用命名和整理文件的效果以及运行速度做评级。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、下载模型和选择文件夹。** 以下步骤依据发布说明和文档。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[GitHub发布页面](https://github.com/iLevyTate/StratoSortStack/releases/latest)下载适合你系统的安装包并打开。',
          },
          {
            title: '下载模型',
            whyItMatters: '安装后使用Download Base Models启用AI功能；Better Quality配置是体积更大的替代选择，而“Continue with limited AI”会跳过下载。',
          },
          {
            title: '描述你的Smart Folders',
            whyItMatters: '用日常语言写出你想要的目标位置，例如发票或旅行照片，让应用知道文件该放在哪里。',
          },
          {
            title: '复核并批准',
            whyItMatters: '在移动发生之前检查每个建议的名称和移动；之后每次移动都可以撤销。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在整理和查找文件。** 以下内容均来自官网、文档和发布说明。',
        ],
        items: [
          '**基于内容的整理。** 根据文件包含的内容建议文件名和文件夹，扫描件和图片则通过视觉模型和OCR处理。',
          '**复核与撤销。** 建议的移动会等待你的批准，并且可以撤回。',
          '**语义搜索与问答。** 按含义搜索，并就你的文档提问，同时显示来源。',
          '**音频和视频。** 语音由Whisper转写，转写文字与你的文档一起建立索引。',
          '**知识图谱。** Relate和Atlas视图展示文档之间的关联。',
          '**MCP服务器。** 可选的本地服务器让Claude Desktop、Cursor和Zed等工具查询你的文件。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**StratoSort提供两种模型配置，均为GGUF文件。** Base配置使用Llama-3.2-3B-Instruct处理文本、llava-v1.6-mistral-7b处理视觉、all-MiniLM-L6-v2生成嵌入向量，合计约7 GB。Better Quality配置换用Qwen2.5-7B-Instruct和nomic-embed-text-v1.5，合计约10 GB。',
          '文档标明最低内存为8 GB，并建议Better Quality使用16 GB内存和8 GB显存的GPU。GPU是可选的：应用可使用NVIDIA CUDA、Apple Metal或Vulkan，否则回退到CPU。Whisper语音模型（约150 MB）只在你安装时才下载。这里没有复现任何速度或准确度数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，应用在你的电脑上运行，在标准配置下文档内容、文件路径、嵌入向量和搜索查询不会离开电脑。** 它还称应用不包含会回传数据的分析、遥测、崩溃报告或功能开关服务，网站也没有账号或同步服务。',
          '网络文档列出了应用可能发起的连接：从huggingface.co下载模型、在GitHub上检查新版本，以及一次性下载语音模型、视觉辅助组件和OCR语言数据。在已安装的版本中，版本检查默认开启，可在设置中关闭。除非你添加自己的Anthropic或兼容OpenAI的密钥，否则云端AI保持关闭；添加后，你发送的文本会按该服务商自己的条款交给它。代码是公开的，PromptQuorum没有检查网络流量，因此这些说法出自开发者自己。',
          '许可证为PolyForm Noncommercial 1.0.0，属于源代码可见，而不是开源。个人及其他非商业使用免费，包含全部功能；商业使用需要向Kennedy Applied Sciences, Inc.购买按席位计费的付费许可，通过电子邮件报价，没有公布价格。',
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
            '实际使用中的意义': '安装模型后，整理和搜索可离线运行，无需账号。',
            '局限 / 注意事项': '首次下载约7 GB或更多；PromptQuorum没有检查网络流量。',
          },
          {
            '优势': '个人使用免费',
            '实际使用中的意义': '非商业使用包含全部功能，无需付费。',
            '局限 / 注意事项': '商业使用需要付费许可，没有公布价格。',
          },
          {
            '优势': '读取文件内容',
            '实际使用中的意义': '名称和文件夹来自文档、扫描件和图片的内部内容。',
            '局限 / 注意事项': '这里没有测试准确度。',
          },
          {
            '优势': '复核与撤销',
            '实际使用中的意义': '据开发者称，批准之前什么都不会移动，移动之后也可以撤回。',
            '局限 / 注意事项': '复核大量积压文件仍然需要你花时间。',
          },
          {
            '优势': '三种桌面系统',
            '实际使用中的意义': '提供Windows、macOS和Linux安装包。',
            '局限 / 注意事项': '没有移动应用；安装包有几百MB。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '版本5.1.2于2026年11月1日发布。',
            '局限 / 注意事项': '首个公开版本发布不久，长期记录较短。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort与替代方案对比',
        content: [
          '目录中最接近的工具包括：一款同样提议文件夹和文件名的工具、一款搜索本地文件并与之对话的工具，以及一款通用的文档问答工作区。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'StratoSort',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '非商业免费，PolyForm NC',
            '定位': '文件整理、搜索和问答',
            '主要区别': '按内容整理；本地llama.cpp；可复核并撤销',
          },
          {
            '应用': '[AI File Sorter](/zh/power-local-llm/ai-file-sorter-review)',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '文件夹和文件名建议',
            '主要区别': '开源；更改前可先试运行',
          },
          {
            '应用': '[Hyperlink (Nexa AI)](/zh/power-local-llm/hyperlink-nexa-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '免费，专有',
            '定位': '本地文件搜索和问答',
            '主要区别': '搜索并回答；闭源',
          },
          {
            '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)',
            '平台': 'Windows、Mac、Linux、网页',
            '价格与许可': '免费，MIT',
            '定位': '文档问答工作区',
            '主要区别': '问答和智能体；不整理文件',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用StratoSort的人',
        items: [
          '**文件夹杂乱的人。** 下载内容、扫描件和截图会得到可供你复核的名称和文件夹。',
          '**注重隐私的家庭用户。** 据文档称，模型在电脑上运行，而且使用免费。',
          '**Linux用户。** 除Windows和Mac外，也提供Linux安装包。',
          '**同时需要搜索的人。** 语义搜索和文档问答都在同一个应用里。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用StratoSort的人',
        items: [
          '**没有许可的企业。** 在PolyForm Noncommercial下，商业使用需要付费许可。',
          '**需要开源代码的人。** 该许可证是源代码可见，不属于OSI认可的开源。',
          '**内存不足8 GB的电脑。** 这是官方标明的最低要求。',
          '**不希望有任何自动网络流量的人。** 版本检查默认开启，需要手动关闭。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'StratoSort可以离线使用吗？',
            a: '文档称安装模型后可以，并建议用飞行模式测试。首次启动需要联网下载模型，除非你选择以有限AI功能继续。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我可以在工作中使用吗？',
            a: '只有获得商业许可才可以。PolyForm Noncommercial许可证涵盖个人及其他非商业使用；开发者通过电子邮件为商业用途按席位报价。',
          },
          {
            q: '我可以改用云端模型吗？',
            a: '可以，作为可选项：添加你自己的Anthropic或兼容OpenAI的密钥，它也可以指向本地的Ollama或LM Studio服务器。据开发者称，嵌入向量和搜索仍留在本地。',
          },
          {
            q: '我可以撤销一次移动吗？',
            a: '官网称，每次建议的移动都可以复核并撤销。PromptQuorum没有测试撤销功能，因此请为重要文件夹保留备份。',
          },
          {
            q: '谁开发了StratoSort？',
            a: '由Kennedy Applied Sciences, Inc.发布，代码位于GitHub账号iLevyTate下。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想让AI为Mac、Windows或Linux电脑上一堆杂乱的文档、扫描件和图片建议名称和文件夹，并且据文档称模型在本机运行、先征得你的批准，StratoSort是个合适的选择。个人使用免费，本月刚有新版本发布。',
          '需要注意的是许可证、首次下载体积大、项目公开不久，以及PromptQuorum无法核实的说法。在用它处理你的档案之前，请先在某个文件夹的副本上试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[StratoSort官网](https://stratosort.com/) — 功能、平台和价格。',
          '[文档](https://stratosort.com/docs/) — 配置、模型配置和网络透明度。',
          '[隐私政策](https://stratosort.com/privacy.html) — 数据处理，最近更新于2026年10月29日。',
          '[GitHub仓库](https://github.com/iLevyTate/StratoSortStack) — README、许可证和源代码。',
          '[GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases) — 安装包文件和版本5.1.2的发布日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AI File Sorter评测](/zh/power-local-llm/ai-file-sorter-review) — 一款提议文件夹和文件名的开源应用。',
          '[Hyperlink (Nexa AI)评测](/zh/power-local-llm/hyperlink-nexa-review) — 适用于Mac和Windows的本地文件搜索和问答。',
          '[AnythingLLM评测](/zh/power-local-llm/anythingllm-review) — 可搭配本地或云端模型的文档问答工作区。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-es.webp',
    title: 'Reseña de StratoSort: organizador de archivos con IA local para Mac, Windows y Linux',
    seoTitle: 'Reseña de StratoSort: organizador de archivos con IA local',
    intro: 'StratoSort es una app de escritorio que ordena los archivos según lo que contienen y que sirve además como herramienta privada de búsqueda, chat y grafo de conocimiento sobre tus documentos, con modelos de lenguaje que se ejecutan en tu propio ordenador mediante llama.cpp. Según su documentación, solo mueve los archivos después de que lo apruebes. Esta reseña resume lo que dicen la web, la documentación y el repositorio de GitHub del fabricante, dónde termina la ruta local, cómo limita la licencia el uso comercial y cómo se compara StratoSort con herramientas similares del directorio.',
    metaDescription: 'Reseña de StratoSort: organizador de archivos con IA para Mac, Windows y Linux con modelos llama.cpp locales, sin conexión tras instalar. No probada.',
    twitterDescription: 'Reseña de StratoSort: IA local que renombra, ordena y busca tus archivos en Mac, Windows y Linux. Gratis para uso personal. Privacidad, licencia, límites y alternativas.',
    audience: 'Personas con carpetas desordenadas de documentos, escaneos, imágenes y audio que quieren nombres y carpetas sugeridos por IA sin subir archivos a un servicio en la nube — cubre instalación, modelos, privacidad, licencia, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'reseña stratosort',
      'stratosort organizador de archivos con ia',
      'organizador de archivos con ia local',
      'ordenar archivos con ia sin conexión',
      'renombrar archivos con ia mac windows linux',
      'búsqueda semántica de archivos local',
      'chatear con tus documentos sin conexión',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSort es un organizador de archivos con IA para Mac, Windows y Linux cuyos modelos de lenguaje se ejecutan en tu propio ordenador mediante llama.cpp y que, según su documentación, funciona sin internet una vez instalado.** Es gratis para uso personal y otros usos no comerciales con la licencia PolyForm Noncommercial; el uso comercial requiere una licencia de pago. La versión más reciente es la 5.1.2, del 1 de noviembre de 2026. Esta reseña se basa en la web, la documentación y el repositorio de GitHub del fabricante, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es StratoSort un organizador de archivos con IA local?',
        answer: 'Por defecto, sí: la documentación dice que los modelos se ejecutan en la app mediante llama.cpp, que el contenido de los archivos, las rutas, los embeddings y las consultas de búsqueda se quedan en el equipo y que la app funciona sin internet una vez instalados los modelos. La IA en la nube es una opción que activas añadiendo tu propia clave de API. PromptQuorum no inspeccionó el tráfico de red ni el código fuente, así que las afirmaciones de privacidad son del propio fabricante.',
        bullets: [
          'Lee documentos, hojas de cálculo, imágenes, escaneos, audio y vídeo, sugiere nombres y carpetas; según la web, cada movimiento se puede revisar y deshacer.',
          'El primer inicio descarga modelos de unos 7 GB (perfil Base) o unos 10 GB (perfil Better Quality), salvo que los omitas.',
          'Hay instaladores para Windows, macOS y Linux; 8 GB de RAM es el mínimo indicado.',
          'La comprobación de nuevas versiones en GitHub está activada por defecto y se puede desactivar en Ajustes.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir StratoSort', anchor: 'get-it' },
      { label: 'StratoSort de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es StratoSort', anchor: 'what-is-stratosort' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Del desarrollador', anchor: 'from-the-maker' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'StratoSort frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar StratoSort', anchor: 'who-should-use' },
      { label: 'Quién no debería usar StratoSort', anchor: 'who-should-not-use' },
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
            text: 'StratoSort es una app de escritorio que lee el contenido de tus archivos y los mueve a carpetas que describes en lenguaje natural, renombrándolos con un formato coherente o conservando los nombres originales, con modelos que se ejecutan en tu propio ordenador, según el desarrollador.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un asistente que abre cada archivo, averigua qué es, propone dónde debe ir y cómo llamarlo, y espera tu visto bueno antes de mover nada.',
          },
        ],
        items: [
          'Afirmación de uso local: los modelos se ejecutan en el dispositivo; las descargas de modelos, las comprobaciones de actualizaciones y cualquier proveedor en la nube que añadas usan internet.',
          'Fabricante: Kennedy Applied Sciences, Inc., con el código público en GitHub bajo iLevyTate.',
          'Mantenimiento: la versión 5.1.2 salió el 1 de noviembre de 2026 y el repositorio se actualizó el 10 de noviembre de 2026, así que el proyecto se desarrolla de forma activa.',
          'Knowledge OS: el desarrollador dice que la parte de búsqueda, chat y grafo supone cerca de la mitad de lo que hace la app, y que la búsqueda encuentra términos exactos, como números de factura, además de coincidencias por significado.',
          'Carencias: aquí no hubo prueba práctica, es un proyecto público joven y los modelos requieren una primera descarga grande.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'Conseguir StratoSort',
        content: [
          '**StratoSort se instala como cualquier app de escritorio, no hace falta terminal.** Descarga el instalador para tu sistema desde la página de versiones de GitHub; los modelos de IA se descargan dentro de la app tras el primer inicio.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — instalador .exe para x64 o arm64, o un .zip',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .dmg para Apple Silicon o Intel',
          },
          {
            Plataforma: 'Linux',
            'Dónde conseguirla': '[Descargar para Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage o .deb para x64 o arm64',
          },
          {
            Plataforma: 'Documentación',
            'Dónde conseguirla': '[Documentación de StratoSort](https://stratosort.com/docs/) y [versiones de GitHub](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[stratosort.com](https://stratosort.com/)',
          },
          {
            Plataforma: 'Vídeo de demostración',
            'Dónde conseguirla': '[Vídeo de demostración de StratoSort](https://stratosort.com/assets/strato-ad.mp4) — mp4 breve del desarrollador',
          },
          {
            Plataforma: 'Instalación aislada de la red',
            'Dónde conseguirla': '[Guía de instalación: instalación aislada de la red](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — para equipos que nunca se conectan a internet',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de StratoSort](https://stratosort.com/privacy.html)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'Los archivos del instalador son grandes (el .deb de Linux ocupa unos 534 MB) y cada versión incluye archivos de suma de comprobación SHA-256. El desarrollador dice que los instaladores de Windows están firmados por Kennedy Applied Sciences, Inc. y que las compilaciones de Mac están notarizadas desde la versión 4.0.0.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort de un vistazo',
        columns: ['Atributo', 'StratoSort'],
        rows: [
          { Atributo: 'Plataforma', StratoSort: 'Escritorio Windows, macOS y Linux' },
          { Atributo: 'Precio', StratoSort: 'Gratis para uso no comercial; de pago para comercial' },
          { Atributo: 'Licencia', StratoSort: 'Código disponible, PolyForm Noncommercial 1.0.0' },
          { Atributo: 'Ejecución', StratoSort: 'En tu ordenador con llama.cpp; nube solo con tu clave' },
          { Atributo: 'Memoria', StratoSort: 'Mínimo 8 GB de RAM; GPU opcional' },
          { Atributo: 'Tipos de entrada', StratoSort: 'Documentos, hojas de cálculo, imágenes, escaneos, audio, vídeo' },
          { Atributo: 'Deshacer', StratoSort: 'Según el fabricante, cada movimiento sugerido se puede revisar y deshacer' },
          { Atributo: 'Fabricante', StratoSort: 'Kennedy Applied Sciences, Inc.' },
        ],
        note: 'Que la web del fabricante no mencione algo significa desconocido, no no compatible.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'Qué es StratoSort',
        content: [
          '**StratoSort es un organizador de archivos que lee el contenido, no solo los nombres.** Mira dentro de documentos, hojas de cálculo, imágenes, escaneos, audio y vídeo, sugiere un nombre y una carpeta, y mueve los archivos a «Smart Folders» que describes en lenguaje natural.',
          'El repositorio se llama StratoSortStack y se describe como el sucesor del StratoSort original; la web y esta reseña usan el nombre StratoSort. Además de ordenar, la app tiene una parte de búsqueda, chat y grafo que el desarrollador llama Knowledge OS y describe como cerca de la mitad de lo que hace, y un servidor MCP local opcional.',
          'Esta reseña se basa en la web, la documentación, la política de privacidad y el repositorio de GitHub. No hubo prueba práctica, así que aquí no se valoran lo bien que la app nombra y ordena los archivos ni lo rápido que funciona.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, una descarga de modelos y la elección de una carpeta.** Los pasos siguen las notas de versión y la documentación.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el instalador para tu sistema desde la tabla «Conseguir StratoSort» de arriba y ábrelo.',
          },
          {
            title: 'Descarga los modelos',
            whyItMatters: 'Usa Download Base Models tras la instalación para activar las funciones de IA; el perfil Better Quality es una alternativa más grande, y «Continue with limited AI» omite la descarga.',
          },
          {
            title: 'Describe tus Smart Folders',
            whyItMatters: 'Nombra en lenguaje natural los destinos que quieres, como facturas o fotos de viajes, para que la app sepa dónde van los archivos.',
          },
          {
            title: 'Revisa y aprueba',
            whyItMatters: 'Comprueba cada nombre y movimiento sugerido antes de que se haga; cada movimiento se puede deshacer después.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en organizar y encontrar archivos.** Todo lo siguiente procede de la web, la documentación, las notas de versión y los comentarios del desarrollador del 10 de noviembre de 2026.',
        ],
        items: [
          '**Ordenación según el contenido.** Las carpetas se eligen a partir de lo que contiene el archivo, incluidos escaneos e imágenes mediante un modelo de visión y OCR. Renombrar es opcional: los archivos se pueden renombrar con un formato coherente o moverse con sus nombres originales mediante una opción de conservar el nombre.',
          '**Vigilancia de carpetas.** Según el desarrollador, la app puede vigilar Descargas y tus Smart Folders y sugerir dónde encajan los archivos nuevos.',
          '**Revisar y deshacer.** Los movimientos sugeridos esperan tu aprobación y se pueden revertir.',
          '**Búsqueda y chat.** La búsqueda encuentra términos exactos, como números de factura, además de coincidencias por significado, y las respuestas del chat citan sus archivos de origen.',
          '**Audio y vídeo.** El habla se transcribe con Whisper y las transcripciones se indexan junto con tus documentos.',
          '**Grafo de conocimiento.** Tres vistas: Relate (agrupaciones y enlaces de similitud), Atlas (un mapa de los embeddings vectoriales donde puedes seleccionar archivos con el lazo para moverlos, etiquetarlos o convertirlos en una Smart Folder) y Timeline.',
          '**Servidor MCP.** Un servidor local opcional, de solo lectura y limitado a 127.0.0.1, permite que herramientas como Claude Desktop, Cursor y Zed consulten tus archivos; según el desarrollador, los clientes conectados reciben resúmenes y citas, nunca los archivos originales.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**StratoSort incluye dos perfiles de modelos, ambos como archivos GGUF.** El perfil Base usa Llama-3.2-3B-Instruct para texto, llava-v1.6-mistral-7b para visión y all-MiniLM-L6-v2 para embeddings, unos 7 GB en total. El perfil Better Quality los sustituye por Qwen2.5-7B-Instruct y nomic-embed-text-v1.5, unos 10 GB en total.',
          'La documentación indica 8 GB de RAM como mínimo y sugiere 16 GB de RAM y una GPU de 8 GB para Better Quality. La GPU es opcional: la app puede usar NVIDIA CUDA, Apple Metal o Vulkan y recurre a la CPU si no hay GPU. El modelo de voz Whisper (unos 150 MB) solo se descarga cuando lo instalas. Aquí no se reprodujo ninguna cifra de velocidad ni de precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que la app se ejecuta en tu equipo y que el contenido de los documentos, las rutas de archivo, los embeddings y las consultas de búsqueda no salen de él en la configuración estándar.** También dice que la app no incluye analítica, telemetría, informes de fallos ni servicios de feature flags que se comuniquen con el exterior, y que la web no tiene cuentas ni servicio de sincronización.',
          'La documentación de red enumera las conexiones que puede hacer la app: descargas de modelos desde huggingface.co, una comprobación de nuevas versiones en GitHub y una descarga puntual del modelo de voz. El desarrollador dice que el entorno de visión y los datos de idioma para OCR vienen incluidos en los instaladores y solo se descargan como alternativa si falta un archivo incluido, así que en el uso normal el modelo de voz es la única descarga puntual de esos extras, y solo cuando decides instalarlo. La comprobación de versiones está activada por defecto en las compilaciones instaladas y se puede desactivar en Ajustes. La IA en la nube permanece desactivada salvo que añadas tu propia clave de Anthropic o compatible con OpenAI; entonces el texto que envías va a ese proveedor bajo sus propias condiciones. El código es público y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'La licencia es PolyForm Noncommercial 1.0.0, que es de código disponible y no de código abierto. El uso personal y otros usos no comerciales son gratuitos con todas las funciones; el uso comercial requiere una licencia de pago por puesto de Kennedy Applied Sciences, Inc., que se presupuesta por correo electrónico sin precio publicado.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Del desarrollador',
        content: [
          'El desarrollador de StratoSort envió correcciones y la nota que sigue el 10 de noviembre de 2026. Se presenta como palabras propias del desarrollador, no como una valoración editorial independiente de PromptQuorum, y PromptQuorum no pudo verificarla ni en el código ni con pruebas:',
          '“Creé StratoSort para personas cuyos archivos son demasiado privados para subirlos a un servicio de IA en la nube. Una vez descargados los modelos, la ordenación, la búsqueda, el chat y la transcripción se ejecutan en tu equipo. No hay cuenta ni telemetría, y con las comprobaciones de actualizaciones desactivadas y sin clave de la nube no hace ninguna solicitud saliente. Lo he construido yo solo a lo largo de unos 17 meses de trabajo a tiempo parcial. Si algo se comporta de forma distinta a lo que dice la documentación, abre una incidencia en GitHub y le echaré un vistazo.”',
        ],
        note: '— El desarrollador de StratoSort',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Modelos en tu ordenador',
            'Qué significa en el uso real': 'La ordenación y la búsqueda pueden funcionar sin conexión una vez instalados los modelos, sin cuenta.',
            'Limitación / advertencia': 'La primera descarga es de unos 7 GB o más; PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            Ventaja: 'Gratis para uso personal',
            'Qué significa en el uso real': 'Todas las funciones están incluidas sin coste para uso no comercial.',
            'Limitación / advertencia': 'El uso comercial requiere una licencia de pago sin precio publicado.',
          },
          {
            Ventaja: 'Lee el contenido de los archivos',
            'Qué significa en el uso real': 'Los nombres y las carpetas salen de lo que hay dentro de documentos, escaneos e imágenes.',
            'Limitación / advertencia': 'Aquí no se probó la precisión.',
          },
          {
            Ventaja: 'Revisar y deshacer',
            'Qué significa en el uso real': 'Según el fabricante, nada se mueve hasta que lo apruebas, y los movimientos se pueden revertir.',
            'Limitación / advertencia': 'Revisar una gran acumulación de archivos sigue requiriendo tu tiempo.',
          },
          {
            Ventaja: 'Tres sistemas de escritorio',
            'Qué significa en el uso real': 'Hay instaladores para Windows, macOS y Linux.',
            'Limitación / advertencia': 'Sin app móvil; los instaladores ocupan varios cientos de MB.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 5.1.2 salió el 1 de noviembre de 2026.',
            'Limitación / advertencia': 'La primera versión pública es reciente, así que el historial a largo plazo es corto.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort frente a alternativas',
        content: [
          'Estas son las herramientas más cercanas del directorio: una que también propone carpetas y nombres de archivo, una que busca y conversa sobre archivos locales y un espacio de trabajo general de chat con documentos.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'StratoSort',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis no comercial, PolyForm NC',
            Papel: 'Ordenar, buscar y chatear',
            'Diferencia clave': 'Ordena por contenido; llama.cpp local; revisar y deshacer',
          },
          {
            App: '[AI File Sorter](/es/power-local-llm/ai-file-sorter-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Propuestas de carpetas y nombres',
            'Diferencia clave': 'Código abierto; simulación antes de los cambios',
          },
          {
            App: '[Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Gratis, propietaria',
            Papel: 'Búsqueda y chat de archivos locales',
            'Diferencia clave': 'Busca y responde; código cerrado',
          },
          {
            App: '[AnythingLLM](/es/power-local-llm/anythingllm-review)',
            Plataformas: 'Windows, Mac, Linux, web',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Espacio de chat con documentos',
            'Diferencia clave': 'Chat y agentes; no ordena archivos',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar StratoSort',
        items: [
          '**Personas con carpetas desordenadas.** Las descargas, los escaneos y las capturas reciben nombres y carpetas que puedes revisar.',
          '**Usuarios domésticos que cuidan su privacidad.** Los modelos se ejecutan en el ordenador, según la documentación, y el uso es gratuito.',
          '**Usuarios de Linux.** Hay instaladores para Linux además de Windows y Mac.',
          '**Personas que también quieren búsqueda.** La búsqueda semántica y el chat con documentos están en la misma app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar StratoSort',
        items: [
          '**Empresas sin licencia.** El uso comercial requiere una licencia de pago bajo PolyForm Noncommercial.',
          '**Quien necesite código abierto.** La licencia es de código disponible, no de código abierto según la OSI.',
          '**Ordenadores con menos de 8 GB de RAM.** Ese es el mínimo indicado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona StratoSort sin conexión?',
            a: 'La documentación dice que sí una vez instalados los modelos, y sugiere una prueba en modo avión. El primer inicio necesita internet para descargarlos, salvo que continúes con IA limitada, y la guía de instalación documenta una instalación aislada de la red para equipos que nunca se conectan a internet (consulta «Conseguir StratoSort»). PromptQuorum no lo probó sin conexión.',
          },
          {
            q: '¿Puedo usarlo en el trabajo?',
            a: 'Solo con una licencia comercial. La licencia PolyForm Noncommercial cubre el uso personal y otros usos no comerciales; el fabricante presupuesta por correo electrónico licencias comerciales por puesto.',
          },
          {
            q: '¿Puedo usar un modelo en la nube en su lugar?',
            a: 'Sí, de forma opcional: añade tu propia clave de Anthropic o compatible con OpenAI, que también puede apuntar a un servidor local de Ollama o LM Studio. Los embeddings y la búsqueda permanecen en local, según el fabricante.',
          },
          {
            q: '¿Puedo deshacer un movimiento?',
            a: 'La web dice que cada movimiento sugerido se puede revisar y deshacer. PromptQuorum no probó la función de deshacer, así que conserva una copia de seguridad de las carpetas importantes.',
          },
          {
            q: '¿Quién hace StratoSort?',
            a: 'Lo publica Kennedy Applied Sciences, Inc., y el código está en la cuenta de GitHub iLevyTate.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'StratoSort encaja si quieres que la IA sugiera nombres y carpetas para un montón desordenado de documentos, escaneos e imágenes en un ordenador Mac, Windows o Linux, con modelos que, según la documentación, se ejecutan en el equipo y piden tu aprobación antes. Es gratis para uso personal y publicó una versión este mes.',
          'Las advertencias son la licencia, la gran primera descarga, un proyecto que se hizo público hace poco y afirmaciones que PromptQuorum no pudo comprobar. Pruébalo con una copia de una carpeta antes de apuntarlo a tu archivo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de StratoSort](https://stratosort.com/) — funciones, plataformas y precios.',
          '[Documentación](https://stratosort.com/docs/) — configuración, perfiles de modelos y transparencia de red.',
          '[Política de privacidad](https://stratosort.com/privacy.html) — tratamiento de datos, última actualización el 29 de octubre de 2026.',
          '[Repositorio de GitHub](https://github.com/iLevyTate/StratoSortStack) — README, licencia y código fuente.',
          '[Versiones de GitHub](https://github.com/iLevyTate/StratoSortStack/releases) — archivos del instalador y fecha de lanzamiento de la versión 5.1.2.',
          '[Guía de instalación](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — instaladores e instalación sin conexión y aislada de la red.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de AI File Sorter](/es/power-local-llm/ai-file-sorter-review) — una app de código abierto que propone carpetas y nombres de archivo.',
          '[Reseña de Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review) — búsqueda y chat de archivos locales para Mac y Windows.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — un espacio de chat con documentos con modelos locales o en la nube.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-pt.webp',
    title: 'Análise do StratoSort: organizador de arquivos com IA local para Mac, Windows e Linux',
    seoTitle: 'Análise do StratoSort: organizador de arquivos com IA',
    intro: 'O StratoSort é um app de desktop que organiza arquivos pelo que há dentro deles e funciona também como uma ferramenta privada de busca, chat e grafo de conhecimento sobre os seus documentos, usando modelos de linguagem que rodam no seu próprio computador por meio do llama.cpp. Segundo a documentação, ele só move arquivos depois que você aprova. Esta análise resume o que o site, a documentação e o repositório do GitHub do fabricante dizem, onde termina o caminho local, como a licença limita o uso comercial e como o StratoSort se compara a ferramentas semelhantes do diretório.',
    metaDescription: 'Análise do StratoSort: organizador de arquivos com IA para Mac, Windows e Linux, com modelos llama.cpp locais que funcionam offline. Não testado.',
    twitterDescription: 'Análise do StratoSort: IA local que renomeia, organiza e pesquisa seus arquivos no Mac, Windows e Linux. Grátis para uso pessoal. Privacidade, licença, limites e alternativas.',
    audience: 'Pessoas com pastas bagunçadas de documentos, digitalizações, imagens e áudios que querem nomes e pastas sugeridos por IA sem enviar arquivos a um serviço na nuvem — cobre instalação, modelos, privacidade, licença, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'análise stratosort',
      'stratosort organizador de arquivos com ia',
      'organizador de arquivos com ia local',
      'organizar arquivos com ia offline',
      'renomear arquivos com ia mac windows linux',
      'busca semântica de arquivos local',
      'conversar com seus documentos offline',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**O StratoSort é um organizador de arquivos com IA para Mac, Windows e Linux cujos modelos de linguagem rodam no seu próprio computador por meio do llama.cpp e, segundo a documentação, funcionam sem internet depois de instalados.** Ele é gratuito para uso pessoal e outros usos não comerciais sob a licença PolyForm Noncommercial; o uso comercial exige uma licença paga. A versão mais recente é a 5.1.2, de 1 de novembro de 2026. Esta análise se baseia no site, na documentação e no repositório do GitHub do fabricante, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O StratoSort é um organizador de arquivos com IA local?',
        answer: 'Por padrão, sim: a documentação diz que os modelos rodam no app por meio do llama.cpp, que o conteúdo dos arquivos, os caminhos, os embeddings e as consultas de busca ficam na máquina e que o app funciona sem internet depois que os modelos são instalados. A IA na nuvem é uma opção que você ativa ao adicionar a sua própria chave de API. O PromptQuorum não inspecionou o tráfego de rede nem o código-fonte, então as afirmações de privacidade continuam sendo do próprio fabricante.',
        bullets: [
          'Ele lê documentos, planilhas, imagens, digitalizações, áudio e vídeo, sugere nomes e pastas; segundo o site, cada movimentação pode ser revisada e desfeita.',
          'A primeira abertura baixa modelos de cerca de 7 GB (perfil Base) ou cerca de 10 GB (perfil Better Quality), a menos que você pule o download.',
          'Há instaladores para Windows, macOS e Linux; 8 GB de RAM é o mínimo informado.',
          'A verificação de novas versões no GitHub vem ativada por padrão e pode ser desativada em Configurações.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o StratoSort', anchor: 'get-it' },
      { label: 'StratoSort em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o StratoSort', anchor: 'what-is-stratosort' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Do desenvolvedor', anchor: 'from-the-maker' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'StratoSort e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o StratoSort serve', anchor: 'who-should-use' },
      { label: 'Para quem o StratoSort não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O StratoSort é um app de desktop que lê o que há dentro dos seus arquivos e os move para pastas que você descreve em linguagem simples, renomeando-os em um formato consistente ou mantendo os nomes originais, com modelos que rodam no seu próprio computador, segundo o fabricante.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um assistente que abre cada arquivo, descobre o que ele é, propõe onde ele deve ficar e como deve se chamar, e espera o seu sim antes de mover qualquer coisa.',
          },
        ],
        items: [
          'Afirmação de uso local: os modelos rodam no aparelho; downloads de modelos, verificações de atualização e qualquer provedor de nuvem que você adicionar usam a internet.',
          'Fabricante: Kennedy Applied Sciences, Inc., com o código público no GitHub sob iLevyTate.',
          'Manutenção: a versão 5.1.2 foi lançada em 1 de novembro de 2026 e o repositório foi atualizado em 10 de novembro de 2026, então o projeto recebe desenvolvimento ativo.',
          'Knowledge OS: o fabricante diz que o lado de busca, chat e grafo corresponde a cerca de metade do que o app faz e que a busca encontra termos exatos, como números de fatura, além do significado.',
          'Lacunas: sem teste prático aqui, um projeto público ainda jovem e modelos que exigem um primeiro download grande.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'Obter o StratoSort',
        content: [
          '**O StratoSort é instalado como qualquer app de desktop, sem precisar de terminal.** Baixe o instalador do seu sistema na página de versões do GitHub; os modelos de IA são baixados dentro do app depois da primeira abertura.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — instalador .exe para x64 ou arm64, ou um .zip',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — .dmg para Apple Silicon ou Intel',
          },
          {
            Plataforma: 'Linux',
            'Onde obter': '[Baixar para Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage ou .deb para x64 ou arm64',
          },
          {
            Plataforma: 'Documentação',
            'Onde obter': '[Documentação do StratoSort](https://stratosort.com/docs/) e [versões no GitHub](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[stratosort.com](https://stratosort.com/)',
          },
          {
            Plataforma: 'Vídeo de demonstração',
            'Onde obter': '[Vídeo de demonstração do StratoSort](https://stratosort.com/assets/strato-ad.mp4) — mp4 curto do fabricante',
          },
          {
            Plataforma: 'Instalação air-gapped',
            'Onde obter': '[Install Guide: instalação offline e air-gapped](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — para máquinas que nunca ficam online',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do StratoSort](https://stratosort.com/privacy.html)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'Os arquivos de instalação são grandes (o .deb para Linux tem cerca de 534 MB), e cada versão lista arquivos de checksum SHA-256. O fabricante diz que os instaladores do Windows são assinados pela Kennedy Applied Sciences, Inc. e que as versões para Mac são notarizadas desde a versão 4.0.0.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort em resumo',
        columns: ['Atributo', 'StratoSort'],
        rows: [
          { Atributo: 'Plataforma', StratoSort: 'Desktop Windows, macOS e Linux' },
          { Atributo: 'Preço', StratoSort: 'Grátis para uso não comercial; pago para comercial' },
          { Atributo: 'Licença', StratoSort: 'Código disponível, PolyForm Noncommercial 1.0.0' },
          { Atributo: 'Execução', StratoSort: 'No seu computador com llama.cpp; nuvem só com a sua chave' },
          { Atributo: 'Memória', StratoSort: 'Mínimo de 8 GB de RAM; GPU opcional' },
          { Atributo: 'Tipos de entrada', StratoSort: 'Documentos, planilhas, imagens, digitalizações, áudio, vídeo' },
          { Atributo: 'Desfazer', StratoSort: 'Segundo o fabricante, cada movimentação sugerida pode ser revisada e desfeita' },
          { Atributo: 'Fabricante', StratoSort: 'Kennedy Applied Sciences, Inc.' },
        ],
        note: 'Uma informação ausente no site do fabricante significa desconhecido, não sem suporte.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'O que é o StratoSort',
        content: [
          '**O StratoSort é um organizador de arquivos que lê o conteúdo, não apenas os nomes.** Ele olha dentro de documentos, planilhas, imagens, digitalizações, áudio e vídeo, sugere um nome e uma pasta e move os arquivos para "Smart Folders" que você descreve em linguagem simples.',
          'O repositório se chama StratoSortStack e se descreve como o sucessor do StratoSort original; o site e esta análise usam o nome StratoSort. Além de organizar, o app tem um lado de busca, chat e grafo que o fabricante chama de Knowledge OS e descreve como cerca de metade do que ele faz, além de um servidor MCP local, opcional.',
          'Esta análise se baseia no site, na documentação, na política de privacidade e no repositório do GitHub. Não houve teste prático, então a qualidade com que o app nomeia e organiza arquivos e a sua velocidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, um download de modelos e a escolha de uma pasta.** Os passos seguem as notas de versão e a documentação.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o instalador do seu sistema na tabela Obter o StratoSort acima e abra-o.',
          },
          {
            title: 'Baixe os modelos',
            whyItMatters: 'Use Download Base Models depois da instalação para ativar os recursos de IA; o perfil Better Quality é uma alternativa maior, e "Continue with limited AI" pula o download.',
          },
          {
            title: 'Descreva as suas Smart Folders',
            whyItMatters: 'Dê nome aos destinos que você quer, como faturas ou fotos de viagem, em linguagem simples para que o app saiba onde cada arquivo deve ficar.',
          },
          {
            title: 'Revise e aprove',
            whyItMatters: 'Confira cada nome e movimentação sugeridos antes que aconteçam; toda movimentação pode ser desfeita depois.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de organizar e encontrar arquivos.** Tudo o que está abaixo vem do site, da documentação, das notas de versão e dos comentários do fabricante de 10 de novembro de 2026.',
        ],
        items: [
          '**Organização por conteúdo.** As pastas são escolhidas com base no que o arquivo contém, inclusive digitalizações e imagens, por meio de um modelo de visão e OCR. Renomear é opcional: os arquivos podem ser renomeados em um formato consistente ou movidos com os nomes originais por meio de uma opção de manter o nome original.',
          '**Monitoramento de pastas.** Segundo o fabricante, o app pode monitorar Downloads e as suas Smart Folders e sugerir onde os novos arquivos devem ficar.',
          '**Revisão e desfazer.** As movimentações sugeridas esperam a sua aprovação e podem ser revertidas.',
          '**Busca e chat.** A busca encontra termos exatos, como números de fatura, além do significado, e as respostas do chat citam os arquivos de origem.',
          '**Áudio e vídeo.** A fala é transcrita com o Whisper, e as transcrições são indexadas junto com os seus documentos.',
          '**Grafo de conhecimento.** Três visualizações: Relate (clusters e links de similaridade), Atlas (um mapa dos embeddings vetoriais em que você pode selecionar arquivos com o laço para movê-los, marcá-los ou transformá-los em uma Smart Folder) e Timeline.',
          '**Servidor MCP.** Um servidor local, opcional, somente leitura e vinculado a 127.0.0.1, permite que ferramentas como Claude Desktop, Cursor e Zed consultem os seus arquivos; segundo o fabricante, os clientes conectados recebem resumos e citações, nunca os arquivos originais.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O StratoSort traz dois perfis de modelos, ambos em arquivos GGUF.** O perfil Base usa o Llama-3.2-3B-Instruct para texto, o llava-v1.6-mistral-7b para visão e o all-MiniLM-L6-v2 para embeddings, cerca de 7 GB no total. O perfil Better Quality troca por Qwen2.5-7B-Instruct e nomic-embed-text-v1.5, cerca de 10 GB no total.',
          'A documentação informa 8 GB de RAM como mínimo e sugere 16 GB de RAM e uma GPU de 8 GB para o Better Quality. A GPU é opcional: o app pode usar NVIDIA CUDA, Apple Metal ou Vulkan e recorre à CPU quando necessário. O modelo de fala Whisper (cerca de 150 MB) só é baixado quando você o instala. Nenhum número de velocidade ou precisão foi reproduzido aqui.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o app roda na sua máquina e que o conteúdo dos documentos, os caminhos dos arquivos, os embeddings e as consultas de busca não saem dela na configuração padrão.** Ela também diz que o app não inclui análises, telemetria, relatores de falhas nem serviços de feature flags que se comuniquem com servidores externos, e que o site não tem conta nem serviço de sincronização.',
          'A documentação de rede lista as conexões que o app pode fazer: downloads de modelos em huggingface.co, uma verificação de novas versões no GitHub e um download pontual do modelo de fala. O fabricante diz que o ambiente de execução de visão e os dados de idioma do OCR vêm junto com os instaladores e só são baixados como alternativa se um arquivo incluído estiver faltando; assim, no uso normal, o modelo de fala é o único download pontual desses extras, e só quando você escolhe instalá-lo. A verificação de versões vem ativada por padrão nas versões instaladas e pode ser desativada em Configurações. A IA na nuvem permanece desativada, a menos que você adicione a sua própria chave da Anthropic ou compatível com a OpenAI, e então o texto que você envia vai para esse provedor, sob os termos dele. O código é público e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'A licença é a PolyForm Noncommercial 1.0.0, que é de código disponível, e não de código aberto. O uso pessoal e outros usos não comerciais são gratuitos, com todos os recursos; o uso comercial exige uma licença paga por usuário da Kennedy Applied Sciences, Inc., cotada por e-mail, sem preço publicado.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Do desenvolvedor',
        content: [
          'O desenvolvedor do StratoSort enviou correções e a nota abaixo em 10 de novembro de 2026. Ela é apresentada como palavras do próprio desenvolvedor, não como avaliação editorial independente da PromptQuorum, e a PromptQuorum não pôde verificá-la nem no código nem em testes:',
          '“Criei o StratoSort para pessoas cujos arquivos são particulares demais para enviar a um serviço de IA na nuvem. Depois que os modelos são baixados, organização, busca, chat e transcrição rodam todos na sua máquina. Não há conta nem telemetria, e com as verificações de atualização desativadas e sem chave de nuvem ele não faz nenhuma requisição de saída. Desenvolvi o app sozinho ao longo de cerca de 17 meses de trabalho em meio período. Se algo se comportar de forma diferente do que a documentação diz, abra uma issue no GitHub que eu vou analisar.”',
        ],
        note: '— O desenvolvedor do StratoSort',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Modelos no seu computador',
            'O que significa na prática': 'A organização e a busca podem rodar offline depois que os modelos são instalados, sem conta.',
            'Limitação / ressalva': 'O primeiro download tem cerca de 7 GB ou mais; o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            Vantagem: 'Grátis para uso pessoal',
            'O que significa na prática': 'Todos os recursos estão incluídos, sem custo, para uso não comercial.',
            'Limitação / ressalva': 'O uso comercial exige uma licença paga, sem preço publicado.',
          },
          {
            Vantagem: 'Lê o conteúdo dos arquivos',
            'O que significa na prática': 'Nomes e pastas vêm do que há dentro de documentos, digitalizações e imagens.',
            'Limitação / ressalva': 'A precisão não foi testada aqui.',
          },
          {
            Vantagem: 'Revisão e desfazer',
            'O que significa na prática': 'Segundo o fabricante, nada se move até você aprovar, e as movimentações podem ser revertidas.',
            'Limitação / ressalva': 'Revisar um grande acúmulo de arquivos ainda toma o seu tempo.',
          },
          {
            Vantagem: 'Três sistemas de desktop',
            'O que significa na prática': 'Há instaladores para Windows, macOS e Linux.',
            'Limitação / ressalva': 'Sem app para celular; os instaladores têm várias centenas de MB.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 5.1.2 foi lançada em 1 de novembro de 2026.',
            'Limitação / ressalva': 'A primeira versão pública é recente, então o histórico de longo prazo é curto.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort e as alternativas',
        content: [
          'Estas são as ferramentas mais próximas do diretório: uma que também propõe pastas e nomes de arquivos, uma que pesquisa e conversa sobre arquivos locais e um espaço de trabalho geral de chat com documentos.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'StratoSort',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis não comercial, PolyForm NC',
            Função: 'Organização, busca e chat de arquivos',
            'Diferença principal': 'Organiza pelo conteúdo; llama.cpp local; revisão e desfazer',
          },
          {
            App: '[AI File Sorter](/pt/power-local-llm/ai-file-sorter-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis, AGPL-3.0',
            Função: 'Propostas de pastas e nomes de arquivos',
            'Diferença principal': 'Código aberto; simulação antes das alterações',
          },
          {
            App: '[Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Grátis, proprietário',
            Função: 'Busca e chat com arquivos locais',
            'Diferença principal': 'Pesquisa e responde; código fechado',
          },
          {
            App: '[AnythingLLM](/pt/power-local-llm/anythingllm-review)',
            Plataformas: 'Windows, Mac, Linux, web',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Espaço de trabalho de chat com documentos',
            'Diferença principal': 'Chat e agentes; não organiza arquivos',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o StratoSort serve',
        items: [
          '**Pessoas com pastas bagunçadas.** Downloads, digitalizações e capturas de tela ganham nomes e pastas que você pode revisar.',
          '**Usuários domésticos preocupados com privacidade.** Os modelos rodam no computador, segundo a documentação, e o uso é gratuito.',
          '**Usuários de Linux.** Há instaladores para Linux, além de Windows e Mac.',
          '**Quem também quer busca.** A busca semântica e o chat com documentos ficam no mesmo app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o StratoSort não serve',
        items: [
          '**Empresas sem licença.** O uso comercial exige uma licença paga sob a PolyForm Noncommercial.',
          '**Quem precisa de código aberto.** A licença é de código disponível, não de código aberto segundo a OSI.',
          '**Computadores com menos de 8 GB de RAM.** Esse é o mínimo informado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O StratoSort funciona offline?',
            a: 'A documentação diz que sim, depois que os modelos são instalados, e sugere um teste em modo avião. A primeira abertura precisa de internet para baixá-los, a menos que você continue com IA limitada, e o Install Guide documenta uma instalação air-gapped para máquinas que nunca ficam online (veja Obter o StratoSort). O PromptQuorum não testou o app offline.',
          },
          {
            q: 'Posso usá-lo no trabalho?',
            a: 'Somente com uma licença comercial. A licença PolyForm Noncommercial cobre o uso pessoal e outros usos não comerciais; o fabricante cota licenças comerciais por usuário por e-mail.',
          },
          {
            q: 'Posso usar um modelo na nuvem em vez disso?',
            a: 'Sim, como opção: adicione a sua própria chave da Anthropic ou compatível com a OpenAI, que também pode apontar para um servidor local do Ollama ou do LM Studio. Embeddings e busca continuam locais, segundo o fabricante.',
          },
          {
            q: 'Posso desfazer uma movimentação?',
            a: 'O site diz que cada movimentação sugerida pode ser revisada e desfeita. O PromptQuorum não testou o recurso de desfazer, então mantenha um backup das pastas importantes.',
          },
          {
            q: 'Quem faz o StratoSort?',
            a: 'A Kennedy Applied Sciences, Inc. o publica, e o código fica na conta do GitHub iLevyTate.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O StratoSort é uma boa opção se você quer que a IA sugira nomes e pastas para uma pilha bagunçada de documentos, digitalizações e imagens em um computador Mac, Windows ou Linux, com modelos que, segundo a documentação, rodam na máquina e pedem a sua aprovação antes. Ele é gratuito para uso pessoal e lançou uma versão neste mês.',
          'As ressalvas são a licença, o primeiro download grande, um projeto que se tornou público há pouco tempo e afirmações que o PromptQuorum não pôde verificar. Teste em uma cópia de uma pasta antes de apontá-lo para o seu arquivo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do StratoSort](https://stratosort.com/) — recursos, plataformas e preços.',
          '[Documentação](https://stratosort.com/docs/) — configuração, perfis de modelos e transparência de rede.',
          '[Política de privacidade](https://stratosort.com/privacy.html) — tratamento de dados, atualizada pela última vez em 29 de outubro de 2026.',
          '[Repositório do GitHub](https://github.com/iLevyTate/StratoSortStack) — README, licença e código-fonte.',
          '[Versões no GitHub](https://github.com/iLevyTate/StratoSortStack/releases) — arquivos de instalação e data de lançamento da versão 5.1.2.',
          '[Install Guide](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — instaladores e a instalação offline e air-gapped.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do AI File Sorter](/pt/power-local-llm/ai-file-sorter-review) — um app de código aberto que propõe pastas e nomes de arquivos.',
          '[Análise do Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review) — busca e chat com arquivos locais para Mac e Windows.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um espaço de trabalho de chat com documentos, com modelos locais ou na nuvem.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-ar.webp',
    title: 'مراجعة StratoSort: منظّم ملفات بالذكاء الاصطناعي المحلي لأجهزة Mac وWindows وLinux',
    seoTitle: 'مراجعة StratoSort: منظّم ملفات بالذكاء الاصطناعي المحلي',
    intro: 'StratoSort تطبيق مكتبي يرتّب الملفات بحسب ما بداخلها، ويعمل أيضًا أداةً خاصة للبحث والمحادثة والرسم المعرفي فوق مستنداتك، مستخدمًا نماذج لغوية تعمل على حاسوبك عبر llama.cpp. ولا ينقل الملفات بحسب وثائقه إلا بعد موافقتك. تلخّص هذه المراجعة ما يذكره موقع المطوّر ووثائقه ومستودع GitHub، وأين ينتهي المسار المحلي، وكيف تقيّد الرخصة الاستخدام التجاري، وكيف يقارن StratoSort بالأدوات المشابهة في الدليل.',
    metaDescription: 'مراجعة StratoSort: منظّم ملفات بالذكاء الاصطناعي لـ Mac وWindows وLinux بنماذج llama.cpp محلية تعمل دون اتصال بعد التثبيت. الرخصة والخصوصية. لم يُختبر.',
    twitterDescription: 'مراجعة StratoSort: ذكاء اصطناعي محلي يعيد تسمية ملفاتك ويرتبها ويبحث فيها على Mac وWindows وLinux. مجاني للاستخدام الشخصي. الخصوصية والرخصة والحدود والبدائل.',
    audience: 'أصحاب مجلدات المستندات والمسوحات الضوئية والصور والتسجيلات الصوتية المبعثرة الذين يريدون أسماءً ومجلدات يقترحها الذكاء الاصطناعي دون رفع الملفات إلى خدمة سحابية — يغطي التثبيت والنماذج والخصوصية والرخصة والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'مراجعة stratosort',
      'stratosort منظم ملفات بالذكاء الاصطناعي',
      'منظم ملفات بالذكاء الاصطناعي محلي',
      'ترتيب الملفات بالذكاء الاصطناعي دون اتصال',
      'إعادة تسمية الملفات بالذكاء الاصطناعي mac windows linux',
      'بحث دلالي في الملفات محليًا',
      'محادثة مع مستنداتك دون اتصال',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSort منظّم ملفات بالذكاء الاصطناعي لأجهزة Mac وWindows وLinux تعمل نماذجه اللغوية على حاسوبك عبر llama.cpp، وتعمل بحسب وثائقه دون إنترنت بعد التثبيت.** وهو مجاني للاستخدام الشخصي وغير التجاري الآخر برخصة PolyForm Noncommercial؛ أما الاستخدام التجاري فيتطلب رخصة مدفوعة. وأحدث إصدار هو 5.1.2 الصادر في 1 نوفمبر 2026. تعتمد هذه المراجعة على موقع المطوّر ووثائقه ومستودع GitHub، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل StratoSort منظّم ملفات بالذكاء الاصطناعي المحلي؟',
        answer: 'افتراضيًا نعم: تقول الوثائق إن النماذج تعمل داخل التطبيق عبر llama.cpp، وإن محتوى الملفات ومساراتها والتضمينات (embeddings) واستعلامات البحث تبقى على الجهاز، وإن التطبيق يعمل دون إنترنت بعد تثبيت النماذج. والذكاء الاصطناعي السحابي خيار تفعّله بإضافة مفتاح API الخاص بك. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة المصدرية، لذا تبقى ادعاءات الخصوصية من المطوّر نفسه.',
        bullets: [
          'يقرأ المستندات وجداول البيانات والصور والمسوحات الضوئية والصوت والفيديو، ويقترح أسماءً ومجلدات؛ وبحسب الموقع يمكن مراجعة كل نقل والتراجع عنه.',
          'يُنزّل أول تشغيل نماذج بحجم نحو 7 GB (ملف Base) أو نحو 10 GB (ملف Better Quality) ما لم تتخطَّ التنزيل.',
          'تتوفر مثبّتات لأنظمة Windows وmacOS وLinux؛ و8 GB من الذاكرة RAM هي الحد الأدنى المعلن.',
          'فحص الإصدارات الجديدة على GitHub مفعّل افتراضيًا ويمكن إيقافه من الإعدادات.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على StratoSort', anchor: 'get-it' },
      { label: 'StratoSort في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو StratoSort', anchor: 'what-is-stratosort' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'من المطوّر', anchor: 'from-the-maker' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'StratoSort مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب StratoSort', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب StratoSort', anchor: 'who-should-not-use' },
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
            text: 'StratoSort تطبيق مكتبي يقرأ ما بداخل ملفاتك وينقلها إلى مجلدات تصفها بلغة عادية، مع إعادة تسميتها بصيغة موحّدة أو الإبقاء على أسمائها الأصلية، بنماذج تعمل على حاسوبك، بحسب المطوّر.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كمساعد يفتح كل ملف، ويعرف ما هو، ويقترح مكانه واسمه، وينتظر موافقتك قبل أن ينقل أي شيء.',
          },
        ],
        items: [
          'الادعاء المحلي: تعمل النماذج على الجهاز؛ أما تنزيل النماذج وفحص التحديثات وأي مزوّد سحابي تضيفه فتستخدم الإنترنت.',
          'المطوّر: Kennedy Applied Sciences, Inc.، والشيفرة عامة على GitHub تحت الحساب iLevyTate.',
          'الصيانة: صدر الإصدار 5.1.2 في 1 نوفمبر 2026 وحُدّث المستودع في 10 نوفمبر 2026، فالمشروع يُطوَّر بنشاط.',
          'Knowledge OS: يقول المطوّر إن جانب البحث والمحادثة والرسم يمثّل نحو نصف ما يفعله التطبيق، وإن البحث يطابق المصطلحات الدقيقة مثل أرقام الفواتير كما يطابق المعنى.',
          'الثغرات: لا اختبار عملي هنا، ومشروع عام حديث، ونماذج تتطلب تنزيلًا أول كبيرًا.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'الحصول على StratoSort',
        content: [
          '**يُثبَّت StratoSort مثل أي تطبيق مكتبي، ولا حاجة إلى الطرفية.** نزّل المثبّت المناسب لنظامك من صفحة الإصدارات على GitHub؛ وتُنزَّل نماذج الذكاء الاصطناعي من داخل التطبيق بعد أول تشغيل.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://github.com/iLevyTate/StratoSortStack/releases/latest) — مثبّت .exe لمعالج x64 أو arm64، أو ملف .zip',
          },
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://github.com/iLevyTate/StratoSortStack/releases/latest) — ملف .dmg لـ Apple Silicon أو Intel',
          },
          {
            'المنصة': 'Linux',
            'مصدر الحصول': '[التنزيل لـ Linux](https://github.com/iLevyTate/StratoSortStack/releases/latest) — AppImage أو .deb لمعالج x64 أو arm64',
          },
          {
            'المنصة': 'الوثائق',
            'مصدر الحصول': '[وثائق StratoSort](https://stratosort.com/docs/) و[إصدارات GitHub](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[stratosort.com](https://stratosort.com/)',
          },
          {
            'المنصة': 'فيديو توضيحي',
            'مصدر الحصول': '[فيديو StratoSort التوضيحي](https://stratosort.com/assets/strato-ad.mp4) — مقطع mp4 قصير من المطوّر',
          },
          {
            'المنصة': 'التثبيت المعزول عن الإنترنت',
            'مصدر الحصول': '[Install Guide: offline and air-gapped install](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — للأجهزة التي لا تتصل بالإنترنت أبدًا',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية StratoSort](https://stratosort.com/privacy.html)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: 'ملفات المثبّت كبيرة (حجم ملف .deb لنظام Linux نحو 534 MB)، وتسرد كل نسخة ملفات المجموع الاختباري SHA-256. ويقول المطوّر إن مثبّتات Windows موقّعة من Kennedy Applied Sciences, Inc.، وإن نسخ Mac موثَّقة (notarized) منذ الإصدار 4.0.0.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort في لمحة',
        columns: [
          'الخاصية',
          'StratoSort',
        ],
        rows: [
          { 'الخاصية': 'المنصة', 'StratoSort': 'سطح مكتب Windows وmacOS وLinux' },
          { 'الخاصية': 'السعر', 'StratoSort': 'مجاني للاستخدام غير التجاري؛ مدفوع للتجاري' },
          { 'الخاصية': 'الرخصة', 'StratoSort': 'متاح المصدر، PolyForm Noncommercial 1.0.0' },
          { 'الخاصية': 'التشغيل', 'StratoSort': 'على حاسوبك عبر llama.cpp؛ السحابة بمفتاحك فقط' },
          { 'الخاصية': 'الذاكرة', 'StratoSort': '8 GB RAM كحد أدنى؛ وحدة GPU اختيارية' },
          { 'الخاصية': 'أنواع المدخلات', 'StratoSort': 'مستندات، جداول بيانات، صور، مسوحات، صوت، فيديو' },
          { 'الخاصية': 'التراجع', 'StratoSort': 'بحسب المطوّر يمكن مراجعة كل نقل مقترح والتراجع عنه' },
          { 'الخاصية': 'المطوّر', 'StratoSort': 'Kennedy Applied Sciences, Inc.' },
        ],
        note: 'غياب الذكر في موقع المطوّر يعني غير معروف، لا غير مدعوم.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'ما هو StratoSort',
        content: [
          '**StratoSort منظّم ملفات يقرأ المحتوى، لا أسماء الملفات فقط.** ينظر داخل المستندات وجداول البيانات والصور والمسوحات الضوئية والصوت والفيديو، ويقترح اسمًا ومجلدًا، وينقل الملفات إلى "مجلدات ذكية" (Smart Folders) تصفها بلغة عادية.',
          'اسم المستودع StratoSortStack ويصف نفسه بأنه خليفة StratoSort الأصلي؛ ويستخدم الموقع وهذه المراجعة الاسم StratoSort. وإلى جانب الترتيب، للتطبيق جانب للبحث والمحادثة والرسم يسمّيه المطوّر Knowledge OS ويصفه بأنه نحو نصف ما يفعله، إضافةً إلى خادم MCP محلي اختياري.',
          'تعتمد هذه المراجعة على الموقع والوثائق وسياسة الخصوصية ومستودع GitHub. ولم يجرِ أي اختبار عملي، لذلك لا نقيّم هنا جودة تسمية التطبيق للملفات وترتيبه لها ولا سرعة عمله.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل نماذج واختيار مجلد.** تتبع الخطوات ملاحظات الإصدار والوثائق.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل المثبّت المناسب لنظامك من جدول «الحصول على StratoSort» أعلاه ثم افتحه.',
          },
          {
            title: 'نزّل النماذج',
            whyItMatters: 'استخدم Download Base Models بعد التثبيت لتفعيل ميزات الذكاء الاصطناعي؛ وملف Better Quality بديل أكبر، أما "Continue with limited AI" فيتخطى التنزيل.',
          },
          {
            title: 'صف مجلداتك الذكية',
            whyItMatters: 'سمِّ الوجهات التي تريدها، مثل الفواتير أو صور السفر، بلغة عادية ليعرف التطبيق أين تنتمي الملفات.',
          },
          {
            title: 'راجع ووافق',
            whyItMatters: 'تحقق من كل اسم ونقل مقترح قبل أن يحدث؛ ويمكن التراجع عن كل نقل بعد ذلك.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول ترتيب الملفات والعثور عليها.** كل ما يلي مصدره الموقع والوثائق وملاحظات الإصدار وتعليقات المطوّر في 10 نوفمبر 2026.',
        ],
        items: [
          '**ترتيب مبني على المحتوى.** تُختار المجلدات بناءً على ما يحتويه الملف، بما في ذلك المسوحات والصور عبر نموذج رؤية وOCR. إعادة التسمية اختيارية: يمكن إعادة تسمية الملفات بصيغة موحّدة أو نقلها بأسمائها الأصلية عبر خيار الإبقاء على الاسم الأصلي (keep-original).',
          '**مراقبة المجلدات.** بحسب المطوّر، يمكن للتطبيق مراقبة مجلد Downloads ومجلداتك الذكية (Smart Folders) واقتراح المكان المناسب للملفات الجديدة.',
          '**المراجعة والتراجع.** تنتظر عمليات النقل المقترحة موافقتك ويمكن عكسها.',
          '**البحث والمحادثة.** يطابق البحث المصطلحات الدقيقة مثل أرقام الفواتير كما يطابق المعنى، وتستشهد إجابات المحادثة بملفاتها المصدرية.',
          '**الصوت والفيديو.** يُحوَّل الكلام إلى نص بنموذج Whisper، وتُفهرَس النصوص مع مستنداتك.',
          '**الرسم المعرفي.** ثلاث واجهات: Relate (تجمّعات وروابط تشابه) وAtlas (خريطة لتضمينات المتجهات يمكنك فيها تحديد ملفات بالحبل لنقلها أو وسمها أو تحويلها إلى مجلد ذكي) وTimeline.',
          '**خادم MCP.** خادم محلي اختياري، للقراءة فقط ومرتبط بالعنوان 127.0.0.1، يتيح لأدوات مثل Claude Desktop وCursor وZed الاستعلام عن ملفاتك؛ وبحسب المطوّر تتلقى التطبيقات العميلة المتصلة ملخصات واقتباسات، لا الملفات الخام.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يأتي StratoSort بملفَّي نماذج، وكلاهما بصيغة GGUF.** يستخدم ملف Base نموذج Llama-3.2-3B-Instruct للنصوص وllava-v1.6-mistral-7b للرؤية وall-MiniLM-L6-v2 للتضمينات، بنحو 7 GB إجمالًا. ويستبدل ملف Better Quality بها Qwen2.5-7B-Instruct وnomic-embed-text-v1.5، بنحو 10 GB إجمالًا.',
          'تذكر الوثائق 8 GB من الذاكرة RAM كحد أدنى، وتقترح 16 GB من الذاكرة RAM ووحدة GPU بسعة 8 GB لملف Better Quality. وحدة GPU اختيارية: يمكن للتطبيق استخدام NVIDIA CUDA أو Apple Metal أو Vulkan، ويرجع إلى المعالج المركزي عند غيابها. ولا يُنزَّل نموذج الكلام Whisper (نحو 150 MB) إلا عند تثبيته. ولم نعِد إنتاج أي أرقام للسرعة أو الدقة هنا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن التطبيق يعمل على جهازك وإن محتوى المستندات ومسارات الملفات والتضمينات واستعلامات البحث لا تغادره في الإعداد القياسي.** وتقول أيضًا إن التطبيق لا يتضمن أدوات تحليلات ولا قياسًا عن بُعد (telemetry) ولا مبلّغي أعطال ولا خدمات أعلام ميزات تتصل بالخارج، وإن الموقع لا يوفّر حسابًا ولا خدمة مزامنة.',
          'تسرد وثائق الشبكة الاتصالات التي يمكن للتطبيق إجراؤها: تنزيل النماذج من huggingface.co، وفحص الإصدارات الجديدة على GitHub، وتنزيلًا لمرة واحدة لنموذج الكلام. ويقول المطوّر إن بيئة تشغيل الرؤية وبيانات لغات OCR تأتي مع المثبّتات وتُنزَّل فقط كحل احتياطي إذا فُقد ملف مضمَّن، وبذلك يكون نموذج الكلام في الاستخدام العادي هو التنزيل الوحيد لمرة واحدة من هذه الإضافات، ولا يُنزَّل إلا عندما تختار تثبيته. فحص الإصدارات مفعّل افتراضيًا في النسخ المثبّتة ويمكن إيقافه من الإعدادات. ويبقى الذكاء الاصطناعي السحابي متوقفًا ما لم تضف مفتاح Anthropic أو مفتاحًا متوافقًا مع OpenAI، وعندها يذهب النص الذي ترسله إلى ذلك المزوّد بموجب شروطه. الشيفرة عامة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'الرخصة هي PolyForm Noncommercial 1.0.0، وهي متاحة المصدر لا مفتوحة المصدر. الاستخدام الشخصي وغير التجاري الآخر مجاني بكل الميزات؛ أما الاستخدام التجاري فيتطلب رخصة مدفوعة لكل مقعد من Kennedy Applied Sciences, Inc.، يُرسَل سعرها عبر البريد الإلكتروني دون سعر منشور.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من المطوّر',
        content: [
          'أرسل مطوّر StratoSort تصحيحات والملاحظة التالية في 10 نوفمبر 2026. تُعرض بوصفها كلام المطوّر نفسه لا تقييمًا تحريريًا مستقلًا من PromptQuorum، ولم تتمكن PromptQuorum من التحقق منها في الشيفرة أو بالاختبار:',
          '«بنيت StratoSort لأصحاب الملفات الخاصة جدًا بحيث لا يمكن رفعها إلى خدمة ذكاء اصطناعي سحابية. فبعد تنزيل النماذج، تعمل عمليات الترتيب والبحث والمحادثة والتفريغ الصوتي كلها على جهازك. لا يوجد حساب ولا قياس عن بُعد (telemetry)، ومع إيقاف فحص التحديثات وعدم وجود مفتاح سحابي لا يجري أي طلبات صادرة. بنيته بمفردي خلال نحو 17 شهرًا من العمل بدوام جزئي. وإذا تصرّف أي شيء بخلاف ما تقوله الوثائق، فافتح بلاغًا (issue) على GitHub وسأنظر فيه.»',
        ],
        note: '— مطوّر StratoSort',
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
            'ما تعنيه في الاستخدام الفعلي': 'يمكن أن يعمل الترتيب والبحث دون اتصال بعد تثبيت النماذج، دون حساب.',
            'القيد / التنبيه': 'التنزيل الأول نحو 7 GB أو أكثر؛ ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            'الميزة': 'مجاني للاستخدام الشخصي',
            'ما تعنيه في الاستخدام الفعلي': 'كل الميزات متضمنة دون تكلفة للاستخدام غير التجاري.',
            'القيد / التنبيه': 'الاستخدام التجاري يتطلب رخصة مدفوعة دون سعر منشور.',
          },
          {
            'الميزة': 'يقرأ محتوى الملفات',
            'ما تعنيه في الاستخدام الفعلي': 'تأتي الأسماء والمجلدات من محتوى المستندات والمسوحات والصور.',
            'القيد / التنبيه': 'لم تُختبر الدقة هنا.',
          },
          {
            'الميزة': 'المراجعة والتراجع',
            'ما تعنيه في الاستخدام الفعلي': 'بحسب المطوّر لا ينتقل شيء قبل موافقتك، ويمكن عكس عمليات النقل.',
            'القيد / التنبيه': 'مراجعة كمّ كبير متراكم تستغرق وقتك أيضًا.',
          },
          {
            'الميزة': 'ثلاثة أنظمة مكتبية',
            'ما تعنيه في الاستخدام الفعلي': 'تتوفر مثبّتات لأنظمة Windows وmacOS وLinux.',
            'القيد / التنبيه': 'لا تطبيق للجوال؛ وحجم المثبّتات عدة مئات من MB.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 5.1.2 في 1 نوفمبر 2026.',
            'القيد / التنبيه': 'الإصدار العام الأول حديث، فسجله الطويل قصير.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort مقابل البدائل',
        content: [
          'هذه أقرب الأدوات في الدليل: أداة تقترح أيضًا مجلدات وأسماء ملفات، وأداة تبحث وتتحاور مع الملفات المحلية، ومساحة عمل عامة للدردشة مع المستندات.',
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
            'التطبيق': 'StratoSort',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني غير تجاري، PolyForm NC',
            'الدور': 'ترتيب الملفات والبحث والمحادثة',
            'الفرق الرئيسي': 'يرتّب بحسب المحتوى؛ llama.cpp محلي؛ مراجعة وتراجع',
          },
          {
            'التطبيق': '[AI File Sorter](/ar/power-local-llm/ai-file-sorter-review)',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'اقتراح المجلدات وأسماء الملفات',
            'الفرق الرئيسي': 'مفتوح المصدر؛ تشغيل تجريبي قبل التغييرات',
          },
          {
            'التطبيق': '[Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'مجاني، مملوك',
            'الدور': 'بحث ومحادثة مع الملفات المحلية',
            'الفرق الرئيسي': 'يبحث ويجيب؛ مغلق المصدر',
          },
          {
            'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)',
            'المنصات': 'Windows وMac وLinux وويب',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'مساحة عمل لمحادثة المستندات',
            'الفرق الرئيسي': 'محادثة ووكلاء؛ لا يرتّب الملفات',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب StratoSort',
        items: [
          '**أصحاب المجلدات الفوضوية.** تحصل التنزيلات والمسوحات ولقطات الشاشة على أسماء ومجلدات يمكنك مراجعتها.',
          '**المستخدمون المنزليون المهتمون بالخصوصية.** تعمل النماذج على الحاسوب بحسب الوثائق، والاستخدام مجاني.',
          '**مستخدمو Linux.** تتوفر مثبّتات لـ Linux إلى جانب Windows وMac.',
          '**من يريدون البحث أيضًا.** البحث الدلالي ومحادثة المستندات في التطبيق نفسه.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب StratoSort',
        items: [
          '**الشركات دون رخصة.** الاستخدام التجاري يتطلب رخصة مدفوعة بموجب PolyForm Noncommercial.',
          '**من يحتاجون إلى شيفرة مفتوحة المصدر.** الرخصة متاحة المصدر، وليست مفتوحة المصدر بحسب OSI.',
          '**الحواسيب ذات الذاكرة الأقل من 8 GB.** وهذا هو الحد الأدنى المعلن.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل StratoSort دون اتصال بالإنترنت؟',
            a: 'تقول الوثائق نعم بعد تثبيت النماذج، وتقترح اختبارًا بوضع الطيران. ويحتاج أول تشغيل إلى الإنترنت لتنزيلها ما لم تتابع بذكاء اصطناعي محدود، ويوثّق دليل التثبيت (Install Guide) تثبيتًا معزولًا عن الإنترنت للأجهزة التي لا تتصل به أبدًا (انظر «الحصول على StratoSort»). ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يمكنني استخدامه في العمل؟',
            a: 'فقط برخصة تجارية. تغطي رخصة PolyForm Noncommercial الاستخدام الشخصي وغير التجاري الآخر؛ ويرسل المطوّر سعر الرخص التجارية لكل مقعد عبر البريد الإلكتروني.',
          },
          {
            q: 'هل يمكنني استخدام نموذج سحابي بدلًا من ذلك؟',
            a: 'نعم، اختياريًا: أضف مفتاح Anthropic أو مفتاحًا متوافقًا مع OpenAI الخاص بك، ويمكنه أيضًا أن يشير إلى خادم Ollama أو LM Studio محلي. وتبقى التضمينات والبحث محليين بحسب المطوّر.',
          },
          {
            q: 'هل يمكنني التراجع عن عملية نقل؟',
            a: 'يقول الموقع إن كل نقل مقترح يمكن مراجعته والتراجع عنه. ولم تختبر PromptQuorum التراجع، فاحتفظ بنسخة احتياطية من المجلدات المهمة.',
          },
          {
            q: 'من يصنع StratoSort؟',
            a: 'تنشره Kennedy Applied Sciences, Inc.، وتوجد الشيفرة في حساب GitHub باسم iLevyTate.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسبك StratoSort إذا أردت أن يقترح الذكاء الاصطناعي أسماءً ومجلدات لكومة فوضوية من المستندات والمسوحات والصور على حاسوب Mac أو Windows أو Linux، بنماذج تعمل على الجهاز بحسب الوثائق وتطلب موافقتك أولًا. وهو مجاني للاستخدام الشخصي وأصدر نسخة هذا الشهر.',
          'أما التحفظات فهي الرخصة والتنزيل الأول الكبير ومشروع صار عامًا حديثًا وادعاءات لم تتمكن PromptQuorum من التحقق منها. جرّبه على نسخة من مجلد واحد قبل أن توجّهه إلى أرشيفك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع StratoSort](https://stratosort.com/) — الميزات والمنصات والأسعار.',
          '[الوثائق](https://stratosort.com/docs/) — الإعدادات وملفات النماذج وشفافية الشبكة.',
          '[سياسة الخصوصية](https://stratosort.com/privacy.html) — التعامل مع البيانات، آخر تحديث في 29 أكتوبر 2026.',
          '[مستودع GitHub](https://github.com/iLevyTate/StratoSortStack) — ملف README والرخصة والشيفرة المصدرية.',
          '[إصدارات GitHub](https://github.com/iLevyTate/StratoSortStack/releases) — ملفات المثبّت وتاريخ إصدار النسخة 5.1.2.',
          '[Install Guide](https://stratosort.com/docs/INSTALL_GUIDE.html#offline-and-air-gapped-install) — المثبّتات والتثبيت دون اتصال والمعزول عن الإنترنت.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة AI File Sorter](/ar/power-local-llm/ai-file-sorter-review) — تطبيق مفتوح المصدر يقترح مجلدات وأسماء ملفات.',
          '[مراجعة Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review) — بحث ومحادثة مع الملفات المحلية لأجهزة Mac وWindows.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — مساحة عمل لمحادثة المستندات بنماذج محلية أو سحابية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-10',
    dateModified: '2026-11-10',
    next_refresh_due: '2027-05-10',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/stratosort-review-hero-ko.webp',
    title: 'StratoSort 리뷰: Mac·Windows·Linux용 로컬 AI 파일 정리 앱',
    seoTitle: 'StratoSort 리뷰: 로컬 AI 파일 정리 앱',
    intro: 'StratoSort는 파일 안의 내용을 읽고 이름과 폴더를 제안하며, 문서에 따르면 사용자가 승인한 뒤에만 파일을 옮기는 데스크톱 앱입니다. 언어 모델은 llama.cpp를 통해 사용자의 컴퓨터에서 실행됩니다. 의미 기반 검색, 문서 대화, 지식 그래프도 제공합니다. 이 리뷰는 개발사의 웹사이트, 문서, GitHub 저장소가 밝히는 내용, 로컬 방식이 끝나는 지점, 라이선스가 상업적 사용을 제한하는 방식, 그리고 디렉터리의 비슷한 도구와의 비교를 정리합니다.',
    metaDescription: 'StratoSort 리뷰: llama.cpp 로컬 모델로 파일을 정리하는 Mac·Windows·Linux용 AI 앱. 설치 후 오프라인 작동. 라이선스, 한계. 테스트 안 함.',
    twitterDescription: 'StratoSort 리뷰: Mac·Windows·Linux에서 파일 이름 변경, 분류, 검색을 하는 로컬 AI. 개인용 무료. 개인정보 보호, 라이선스, 한계, 대안을 정리했습니다.',
    audience: '문서, 스캔, 이미지, 오디오 폴더가 어수선하여 파일을 클라우드 서비스에 올리지 않고 AI가 제안하는 이름과 폴더를 쓰려는 사용자를 위한 글입니다. 설치, 모델, 개인정보 보호, 라이선스, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'StratoSort review',
    targetKeywords: [
      'stratosort 리뷰',
      'stratosort ai 파일 정리',
      '로컬 ai 파일 정리 앱',
      '오프라인 ai 파일 분류',
      'ai 파일 이름 변경 mac windows linux',
      '로컬 의미 기반 파일 검색',
      '오프라인 문서 대화',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**StratoSort는 Mac, Windows, Linux용 데스크톱 AI 파일 정리 앱이며, 언어 모델이 llama.cpp를 통해 사용자의 컴퓨터에서 실행되고 문서에 따르면 설치 후에는 인터넷 없이 작동합니다.** 개인용 및 기타 비상업적 용도로는 PolyForm Noncommercial 라이선스에 따라 무료이고, 상업적 사용에는 유료 라이선스가 필요합니다. 최신 릴리스는 2026년 11월 1일의 버전 5.1.2입니다. 이 리뷰는 개발사의 웹사이트, 문서, GitHub 저장소에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'StratoSort는 로컬 AI 파일 정리 앱입니까?',
        answer: '기본적으로 그렇습니다. 문서에 따르면 모델은 llama.cpp를 통해 앱 안에서 실행되고, 파일 내용, 경로, 임베딩, 검색어는 기기에 머물며, 모델을 설치하고 나면 인터넷 없이 실행됩니다. 클라우드 AI는 자신의 API 키를 추가해야 켜지는 선택 사항입니다. PromptQuorum은 네트워크 트래픽이나 소스 코드를 확인하지 않았으므로, 개인정보 보호 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '문서, 스프레드시트, 이미지, 스캔, 오디오, 동영상을 읽고 이름과 폴더를 제안하며, 웹사이트에 따르면 모든 이동은 검토하고 되돌릴 수 있습니다.',
          '모델을 건너뛰지 않으면 첫 실행 시 Base 프로필은 약 7 GB, Better Quality 프로필은 약 10 GB의 모델을 내려받습니다.',
          'Windows, macOS, Linux용 설치 파일이 있으며, 명시된 최소 사양은 RAM 8 GB입니다.',
          'GitHub에서 새 릴리스를 확인하는 기능은 기본적으로 켜져 있으며 설정에서 끌 수 있습니다.',
        ],
        updatedDate: '2026-11-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'StratoSort 받기', anchor: 'get-it' },
      { label: 'StratoSort 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'StratoSort란', anchor: 'what-is-stratosort' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'StratoSort와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'StratoSort를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'StratoSort를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
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
            text: 'StratoSort는 문서에 따르면 로컬 llama.cpp 모델로 파일의 이름과 폴더를 제안하며, 모델을 내려받은 뒤에는 오프라인으로 작동하는 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '파일을 하나씩 열어 무엇인지 파악하고, 어디에 두어야 하며 어떤 이름이 좋을지 제안한 뒤, 사용자가 승인해야 옮기는 도우미라고 생각하면 됩니다.',
          },
        ],
        items: [
          '로컬 주장: 모델은 기기에서 실행되며, 모델 다운로드, 업데이트 확인, 사용자가 추가한 클라우드 제공자에는 인터넷이 사용됩니다.',
          '개발사: Kennedy Applied Sciences, Inc.이며, 코드는 iLevyTate 계정 아래 GitHub에 공개되어 있습니다.',
          '유지보수: 버전 5.1.2가 2026년 11월 1일에 출시되었고 저장소는 2026년 11월 10일에 업데이트되어 프로젝트가 활발히 개발되고 있습니다.',
          '공백: 여기서는 직접 테스트하지 않았고, 공개된 지 얼마 되지 않은 프로젝트이며, 모델은 처음에 용량이 큰 다운로드가 필요합니다.',
        ],
      },
      getItStratosort: {
        id: 'get-it',
        title: 'StratoSort 받기',
        content: [
          '**StratoSort는 다른 데스크톱 앱처럼 설치하므로 터미널이 필요 없습니다.** GitHub 릴리스 페이지에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, AI 모델은 첫 실행 후 앱 안에서 내려받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://github.com/iLevyTate/StratoSortStack/releases/latest) — x64 또는 arm64용 .exe 설치 파일, 또는 .zip',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://github.com/iLevyTate/StratoSortStack/releases/latest) — Apple Silicon 또는 Intel용 .dmg',
          },
          {
            '플랫폼': 'Linux',
            '받는 곳': '[Linux용 다운로드](https://github.com/iLevyTate/StratoSortStack/releases/latest) — x64 또는 arm64용 AppImage 또는 .deb',
          },
          {
            '플랫폼': '문서',
            '받는 곳': '[StratoSort 문서](https://stratosort.com/docs/) 및 [GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[stratosort.com](https://stratosort.com/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[StratoSort 개인정보 처리방침](https://stratosort.com/privacy.html)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/iLevyTate/StratoSortStack](https://github.com/iLevyTate/StratoSortStack) — PolyForm Noncommercial 1.0.0',
          },
        ],
        note: '설치 파일의 용량이 크며(Linux .deb는 약 534 MB), 각 릴리스에는 SHA-256 체크섬 파일이 나열되어 있습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'StratoSort 한눈에 보기',
        columns: ['항목', 'StratoSort'],
        rows: [
          { '항목': '플랫폼', 'StratoSort': 'Windows, macOS, Linux 데스크톱' },
          { '항목': '가격', 'StratoSort': '비상업적 용도는 무료, 상업적 용도는 유료' },
          { '항목': '라이선스', 'StratoSort': '소스 공개, PolyForm Noncommercial 1.0.0' },
          { '항목': '실행 위치', 'StratoSort': '컴퓨터에서 llama.cpp로 실행, 클라우드는 자신의 키로만' },
          { '항목': '메모리', 'StratoSort': '최소 RAM 8 GB, GPU는 선택 사항' },
          { '항목': '입력 유형', 'StratoSort': '문서, 스프레드시트, 이미지, 스캔, 오디오, 동영상' },
          { '항목': '되돌리기', 'StratoSort': '개발사에 따르면 제안된 모든 이동을 검토하고 되돌릴 수 있음' },
          { '항목': '개발사', 'StratoSort': 'Kennedy Applied Sciences, Inc.' },
        ],
        note: '개발사 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsStratosort: {
        id: 'what-is-stratosort',
        title: 'StratoSort란',
        content: [
          '**StratoSort는 파일 이름만이 아니라 내용을 읽는 파일 정리 앱입니다.** 문서, 스프레드시트, 이미지, 스캔, 오디오, 동영상 안을 살펴 이름과 폴더를 제안하고, 사용자가 일상적인 말로 설명한 "Smart Folders"로 파일을 옮깁니다.',
          '저장소 이름은 StratoSortStack이며 원래 StratoSort의 후속 버전이라고 스스로 소개합니다. 웹사이트와 이 리뷰는 StratoSort라는 이름을 씁니다. 정리 외에도 의미 기반 검색, 출처를 보여 주는 문서 대화, 지식 그래프, 그리고 Claude Desktop, Cursor, Zed 같은 도구를 위한 선택형 로컬 MCP 서버를 제공합니다.',
          '이 리뷰는 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 앱이 파일 이름을 짓고 분류하는 정확도와 실행 속도는 여기서 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 다운로드, 폴더 선택으로 이루어집니다.** 단계는 릴리스 노트와 문서를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[GitHub 릴리스 페이지](https://github.com/iLevyTate/StratoSortStack/releases/latest)에서 사용 중인 시스템용 설치 파일을 내려받아 실행합니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '설치 후 Download Base Models를 눌러 AI 기능을 켭니다. Better Quality 프로필은 용량이 더 큰 대안이며, "Continue with limited AI"를 고르면 다운로드를 건너뜁니다.',
          },
          {
            title: 'Smart Folders 설명하기',
            whyItMatters: '청구서나 여행 사진처럼 원하는 폴더를 일상적인 말로 적어, 앱이 파일을 어디에 두어야 하는지 알게 합니다.',
          },
          {
            title: '검토하고 승인하기',
            whyItMatters: '제안된 이름과 이동을 실행 전에 하나씩 확인합니다. 모든 이동은 나중에 되돌릴 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 파일을 정리하고 찾는 데 집중되어 있습니다.** 아래 내용은 모두 웹사이트, 문서, 릴리스 노트에서 가져왔습니다.',
        ],
        items: [
          '**내용 기반 정리.** 비전 모델과 OCR을 통한 스캔과 이미지를 포함해, 파일에 담긴 내용을 바탕으로 파일 이름과 폴더를 제안합니다.',
          '**검토와 되돌리기.** 제안된 이동은 사용자의 승인을 기다리며 되돌릴 수 있습니다.',
          '**의미 기반 검색과 대화.** 의미로 검색하고, 출처가 표시되는 상태로 문서에 대해 질문할 수 있습니다.',
          '**오디오와 동영상.** 음성은 Whisper로 전사되고, 전사본은 문서와 함께 색인됩니다.',
          '**지식 그래프.** Relate와 Atlas 보기에서 문서들이 어떻게 연결되는지 보여 줍니다.',
          '**MCP 서버.** 선택형 로컬 서버를 통해 Claude Desktop, Cursor, Zed 같은 도구가 파일을 조회할 수 있습니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**StratoSort는 두 가지 모델 프로필을 제공하며, 둘 다 GGUF 파일입니다.** Base 프로필은 텍스트용 Llama-3.2-3B-Instruct, 비전용 llava-v1.6-mistral-7b, 임베딩용 all-MiniLM-L6-v2를 쓰며 합계 약 7 GB입니다. Better Quality 프로필은 Qwen2.5-7B-Instruct와 nomic-embed-text-v1.5로 바꿔 합계 약 10 GB입니다.',
          '문서에는 최소 사양으로 RAM 8 GB가 명시되어 있으며, Better Quality에는 RAM 16 GB와 GPU 8 GB를 권장합니다. GPU는 선택 사항이며, 앱은 NVIDIA CUDA, Apple Metal, Vulkan을 쓸 수 있고 CPU로도 대체 실행됩니다. Whisper 음성 모델(약 150 MB)은 설치할 때만 내려받습니다. 속도나 정확도 수치는 여기서 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 앱은 사용자의 컴퓨터에서 실행되며, 표준 구성에서는 문서 내용, 파일 경로, 임베딩, 검색어가 컴퓨터 밖으로 나가지 않습니다.** 또한 외부로 신호를 보내는 분석, 원격 측정, 충돌 보고기, 기능 플래그 서비스가 앱에 포함되어 있지 않으며, 웹사이트에는 계정이나 동기화 서비스가 없다고 밝힙니다.',
          '네트워크 문서에는 앱이 맺을 수 있는 연결이 나열되어 있습니다. huggingface.co에서의 모델 다운로드, GitHub에서의 새 릴리스 확인, 그리고 음성 모델, 비전 보조 모델, OCR 언어 데이터의 일회성 다운로드입니다. 릴리스 확인은 설치된 빌드에서 기본적으로 켜져 있으며 설정에서 끌 수 있습니다. 클라우드 AI는 자신의 Anthropic 또는 OpenAI 호환 키를 추가하지 않는 한 꺼져 있으며, 키를 추가하면 보내는 텍스트가 해당 제공자의 약관에 따라 그 제공자에게 전달됩니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '라이선스는 PolyForm Noncommercial 1.0.0이며, 오픈 소스가 아니라 소스 공개(source-available) 방식입니다. 개인용 및 기타 비상업적 용도로는 모든 기능이 무료이고, 상업적 사용에는 Kennedy Applied Sciences, Inc.의 유료 사용자당 라이선스가 필요하며 공개된 가격 없이 이메일로 견적을 받습니다.',
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
            '실제 사용에서의 의미': '모델을 설치하고 나면 계정 없이 오프라인으로 정리와 검색을 실행할 수 있습니다.',
            '한계 / 주의점': '첫 다운로드가 약 7 GB 이상이며, PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            '장점': '개인용은 무료',
            '실제 사용에서의 의미': '비상업적 용도로는 모든 기능이 무료로 포함됩니다.',
            '한계 / 주의점': '상업적 사용에는 가격이 공개되지 않은 유료 라이선스가 필요합니다.',
          },
          {
            '장점': '파일 내용을 읽음',
            '실제 사용에서의 의미': '문서, 스캔, 이미지에 담긴 내용에서 이름과 폴더가 나옵니다.',
            '한계 / 주의점': '정확도는 여기서 테스트하지 않았습니다.',
          },
          {
            '장점': '검토와 되돌리기',
            '실제 사용에서의 의미': '개발사에 따르면 승인하기 전에는 아무것도 옮겨지지 않으며, 이동을 되돌릴 수 있습니다.',
            '한계 / 주의점': '쌓인 파일이 많으면 검토에 여전히 시간이 듭니다.',
          },
          {
            '장점': '세 가지 데스크톱 시스템',
            '실제 사용에서의 의미': 'Windows, macOS, Linux용 설치 파일이 있습니다.',
            '한계 / 주의점': '모바일 앱은 없으며, 설치 파일은 수백 MB입니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 5.1.2가 2026년 11월 1일에 출시되었습니다.',
            '한계 / 주의점': '첫 공개 릴리스가 최근이라 장기적인 실적은 짧습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'StratoSort와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 도구는 폴더와 파일 이름도 제안하는 도구 하나, 로컬 파일을 검색하고 대화하는 도구 하나, 그리고 범용 문서 대화 작업 공간 하나입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'StratoSort',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '비상업적 무료, PolyForm NC',
            '역할': '파일 정리, 검색, 대화',
            '주요 차이': '내용으로 정리, 로컬 llama.cpp, 검토와 되돌리기',
          },
          {
            '앱': '[AI File Sorter](/ko/power-local-llm/ai-file-sorter-review)',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '폴더와 파일 이름 제안',
            '주요 차이': '오픈 소스, 변경 전 드라이 런',
          },
          {
            '앱': '[Hyperlink (Nexa AI)](/ko/power-local-llm/hyperlink-nexa-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '무료, 독점',
            '역할': '로컬 파일 검색과 대화',
            '주요 차이': '검색하고 답변, 비공개 소스',
          },
          {
            '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)',
            '플랫폼': 'Windows, Mac, Linux, 웹',
            '가격과 라이선스': '무료, MIT',
            '역할': '문서 대화 작업 공간',
            '주요 차이': '대화와 에이전트, 파일 정리는 하지 않음',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'StratoSort를 쓰면 좋은 사용자',
        items: [
          '**폴더가 어수선한 사용자.** 다운로드, 스캔, 스크린샷에 검토할 수 있는 이름과 폴더가 붙습니다.',
          '**개인정보 보호를 중시하는 가정 사용자.** 문서에 따르면 모델이 컴퓨터에서 실행되며 사용은 무료입니다.',
          '**Linux 사용자.** Windows와 Mac뿐 아니라 Linux용 설치 파일도 있습니다.',
          '**검색도 원하는 사용자.** 의미 기반 검색과 문서 대화가 같은 앱 안에 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'StratoSort를 쓰지 말아야 할 사용자',
        items: [
          '**라이선스가 없는 기업.** 상업적 사용에는 PolyForm Noncommercial에 따른 유료 라이선스가 필요합니다.',
          '**오픈 소스 코드가 필요한 사용자.** 라이선스는 OSI 오픈 소스가 아니라 소스 공개 방식입니다.',
          '**RAM이 8 GB 미만인 컴퓨터.** 이것이 명시된 최소 사양입니다.',
          '**자동 네트워크 트래픽을 원하지 않는 사용자.** 릴리스 확인이 기본적으로 켜져 있어 직접 꺼야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'StratoSort는 오프라인에서 작동합니까?',
            a: '문서에는 모델을 설치하고 나면 그렇다고 적혀 있으며, 비행기 모드 테스트를 권합니다. 첫 실행에서는 모델을 내려받기 위해 인터넷이 필요하며, 제한된 AI로 계속하면 건너뛸 수 있습니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '직장에서 써도 됩니까?',
            a: '상업용 라이선스가 있어야 합니다. PolyForm Noncommercial 라이선스는 개인용 및 기타 비상업적 용도를 다루며, 개발사는 상업용 사용자당 라이선스를 이메일로 견적합니다.',
          },
          {
            q: '대신 클라우드 모델을 쓸 수 있습니까?',
            a: '선택 사항으로 가능합니다. 자신의 Anthropic 또는 OpenAI 호환 키를 추가하면 되며, 로컬 Ollama나 LM Studio 서버를 가리키게 할 수도 있습니다. 개발사에 따르면 임베딩과 검색은 로컬에 머뭅니다.',
          },
          {
            q: '이동을 되돌릴 수 있습니까?',
            a: '웹사이트에는 제안된 모든 이동을 검토하고 되돌릴 수 있다고 적혀 있습니다. PromptQuorum은 되돌리기를 테스트하지 않았으므로, 중요한 폴더는 백업해 두십시오.',
          },
          {
            q: 'StratoSort는 누가 만듭니까?',
            a: 'Kennedy Applied Sciences, Inc.가 배포하며, 코드는 GitHub 계정 iLevyTate에 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Mac, Windows, Linux 컴퓨터에서 어수선한 문서, 스캔, 이미지 더미에 AI가 이름과 폴더를 제안해 주기를 원하고, 문서에 따르면 모델이 기기에서 실행되며 먼저 승인을 요청한다는 점이 마음에 든다면 StratoSort가 잘 맞습니다. 개인용은 무료이며 이번 달에 릴리스가 나왔습니다.',
          '주의할 점은 라이선스, 용량이 큰 첫 다운로드, 최근에 공개된 프로젝트라는 점, 그리고 PromptQuorum이 확인하지 못한 주장입니다. 보관 중인 파일 전체에 적용하기 전에 폴더 하나의 사본으로 먼저 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[StratoSort 공식 사이트](https://stratosort.com/) — 기능, 플랫폼, 가격.',
          '[문서](https://stratosort.com/docs/) — 구성, 모델 프로필, 네트워크 투명성.',
          '[개인정보 처리방침](https://stratosort.com/privacy.html) — 데이터 처리, 최종 업데이트 2026년 10월 29일.',
          '[GitHub 저장소](https://github.com/iLevyTate/StratoSortStack) — README, 라이선스, 소스 코드.',
          '[GitHub Releases](https://github.com/iLevyTate/StratoSortStack/releases) — 설치 파일과 버전 5.1.2의 출시일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[AI File Sorter 리뷰](/ko/power-local-llm/ai-file-sorter-review) — 폴더와 파일 이름을 제안하는 오픈 소스 앱.',
          '[Hyperlink (Nexa AI) 리뷰](/ko/power-local-llm/hyperlink-nexa-review) — Mac과 Windows용 로컬 파일 검색 및 대화 앱.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 로컬 또는 클라우드 모델을 쓰는 문서 대화 작업 공간.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
