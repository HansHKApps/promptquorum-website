// Ultimate Vocal Remover Review: Free Local Vocal and Stem Separation
// Slug: ultimate-vocal-remover-review
// Companion to: local-llm-voice-audio-compared, aiko-review, whisper-cpp-review (no stem-separation review exists yet; this is the first in its category)
// Sources (all read 2026-11-18, no hands-on testing): official website, GitHub repository and README (v5.6), GitHub release v5.6 and its asset list,
// the maker's development update in GitHub issue 2399 (latest update dated 2026-11-18), GitHub API (license, stars, last push), AlternativeTo alternatives page
// and a 2023 Bedroom Producers Blog review. The request came from the site owner, not from the maker.
// Last upstream update 2026-10-06 (last commit, a README revision; latest tagged release v5.6 from 2023-09-26) => no stale warning (43 days).
// Theme: 'Voice, Speech & Multimodal' (canonical theme used by the other audio reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-en.webp',
    title: 'Ultimate Vocal Remover Review: Free Local Vocal and Stem Separation',
    seoTitle: 'Ultimate Vocal Remover Review: Free Local Stem Splitter',
    intro:
      'Ultimate Vocal Remover (UVR) is a free desktop app that splits a song into vocals, instruments and other stems with neural-network models that run on your own computer. This review is based on the maker\'s website, the GitHub repository and README, the GitHub release files and the maker\'s public development update. PromptQuorum has not tested the app.',
    metaDescription:
      'Ultimate Vocal Remover splits songs into vocals and stems on your PC for free. Platforms, GPU needs, license, UVR 6 plans, privacy and unverified points.',
    twitterDescription:
      'Ultimate Vocal Remover is a free, MIT-licensed desktop app that separates vocals and stems locally. Setup, GPU needs, UVR 6 plans and open questions.',
    audience:
      'Musicians, producers, DJs and hobbyists who want to separate vocals and instruments from songs on their own computer',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'Ultimate Vocal Remover review',
      'UVR5',
      'Ultimate Vocal Remover download',
      'local vocal remover',
      'stem separation software',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover is a free, MIT-licensed desktop app for Windows, macOS and Linux that separates vocals, instruments and stems from audio files on your own computer.** Its newest tagged release is version 5.6, and the maker has announced a rebuilt UVR 6 that was not yet released when this review was written.',
    quickAnswerTop: {
      en: {
        question: 'What is Ultimate Vocal Remover and who is it for?',
        answer:
          'Ultimate Vocal Remover is a desktop app that removes vocals from songs and splits audio into stems with MDX-Net, VR and Demucs models. It suits people who want a free separation tool that runs on their own computer and are comfortable choosing between models and settings.',
        bullets: [
          'Platforms: Windows 10+, macOS Big Sur+, Linux (manual setup).',
          'Price: free; the maker accepts donations.',
          'License: MIT for the app code.',
          'GPU: an NVIDIA GTX 1060 6 GB is the stated minimum for GPU conversions.',
          'Maker: developers listed as Anjok07 and aufr33 (GitHub handles), no company named.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Ultimate Vocal Remover is a free desktop app that separates a song into vocals, instruments and other stems using neural-network models that run on your own computer.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a karaoke and remixing tool you install yourself. You load an audio file, pick a model, and the app writes separate audio files for each part. The README describes this as running on your computer.',
          },
        ],
        items: [
          'Windows and macOS users get a normal installer from the GitHub release page; Linux needs a manual Python setup in a terminal.',
          'Per the README, the core developers trained the bundled models, except the Demucs v3 and v4 4-stem models.',
          'The newest tagged release, v5.6, is from 26 September 2023; the repository\'s last commit, a README revision, is from 6 October 2026.',
          'The maker says UVR 6, a rebuild with a new interface, is planned for Windows on 11 December 2026, with macOS and Linux to follow.',
          'PromptQuorum has not tested the app, so no claim here covers separation quality or speed.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Songs and recordings are usually protected by copyright. Separating stems for private practice is different from publishing, sampling or selling the result, so check the rights before you share anything. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Ultimate Vocal Remover is a free graphical app that removes vocals from audio files and separates instruments into stems.**',
          'The README lists the core developers as Anjok07 and aufr33, both GitHub handles, and the maker\'s website is signed "Anjok07". No company is named. In a public update on GitHub, the maker says he is the only person actively developing the main UVR code. The app uses three model families: MDX-Net, the VR architecture and Demucs. The README says the core developers trained all bundled models except the Demucs v3 and v4 4-stem models, and credits ZFTurbo for the MDX23C weights.',
          'Version 5.6 is the newest tagged release and was published on 26 September 2023. The last commit to the repository was on 6 October 2026 and revised the README, so there is recent activity but the latest installer is older. The GitHub release page also carries beta installers uploaded up to January 2025, including macOS builds named "Roformer beta" and a DirectML build for Windows. The README does not describe those beta builds.',
          'The maker\'s website calls UVR 5 the current release and announces UVR 6. According to the website and the maker\'s update of 18 November 2026, UVR 6 is rebuilt with a new interface, a model download center, newer model architectures, ensembles, audio tools for aligning tracks and changing key or tempo, themes and a command-line version. The maker says Windows is planned for 11 December 2026 with macOS and Linux after it, and that he held the release back for more testing. These are announcements, not shipped features.',
          'All descriptions here are maker statements. PromptQuorum has not run the app and has not compared its output with other tools.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**Windows and macOS users install Ultimate Vocal Remover from the files on the GitHub release page; Linux needs a manual setup in a terminal.**',
          'The maker\'s website links to the GitHub release page for the download, and the README links each file directly. On the Windows installer the README says to install to the main C: drive, because installing to a secondary drive causes instability. On macOS the README says the first start can take 5 to 10 minutes, and, if macOS blocks the app, it gives Terminal commands that bypass Apple\'s notarization check and tells users to re-enable the security setting afterwards.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'How to get it': 'Installer UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'Platform': '[Windows, AMD/Intel GPU](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'How to get it': 'DirectML build; README says "you can try"' },
          { 'Platform': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'How to get it': '.dmg for Apple Silicon (arm64) or Intel (x86_64)' },
          { 'Platform': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', 'How to get it': 'Manual: Python venv, pip install, run UVR.py' },
          { 'Platform': '[Website](https://ultimatevocalremover.com)', 'How to get it': 'Official site; links the GitHub release page' },
          { 'Platform': '[Source code](https://github.com/Anjok07/ultimatevocalremovergui)', 'How to get it': 'GitHub repository (MIT)' },
        ],
        note: 'No privacy policy page was found on the website; see the unverified list below.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**The README names a GPU minimum but gives no system RAM or disk figure.**',
          'It says conversion times depend heavily on your hardware because the models are computationally intensive. For memory allocation errors it advises lowering the "Segment" or "Window" size.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Operating system', 'Stated figure': 'Windows 10+, macOS Big Sur+, 64-bit only' },
          { 'Item': 'NVIDIA GPU', 'Stated figure': 'GTX 1060 6 GB minimum; 8 GB+ VRAM recommended' },
          { 'Item': 'AMD / Intel GPU', 'Stated figure': 'Limited; DirectML build or AMD branch' },
          { 'Item': 'Apple Silicon', 'Stated figure': 'GPU (MPS) for Demucs v4 and all MDX-Net models' },
          { 'Item': 'System RAM', 'Stated figure': 'Not stated' },
          { 'Item': 'CPU-only use', 'Stated figure': 'Not stated in README; a 2023 review used it' },
          { 'Item': 'Extra tools', 'Stated figure': 'FFmpeg for non-WAV files; Rubber Band for pitch/tempo' },
        ],
        note: 'The 2023 Bedroom Producers Blog review says CPU rendering is viable. The README does not confirm it, so treat it as a third-party report.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**UVR 5 centres on separation with three model families and a few audio tools.** The items below are maker statements from the README and website.',
        ],
        items: [
          'Removes vocals, isolates instruments and separates stems with MDX-Net, VR and Demucs models.',
          'Bundled models trained by the core developers, except the Demucs v3 and v4 4-stem models.',
          'Time-stretch and pitch-shift options, which rely on the Rubber Band library.',
          'Non-WAV audio files are handled through FFmpeg.',
          'Settings are remembered when the app closes, and an Error Log button in settings helps with bug reports.',
          'Roformer beta builds appear as release file names; the README does not describe them.',
          'Announced for UVR 6 only: new interface, download center, newer architectures, ensembles, key and tempo tools, themes and a command-line version.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The README describes a program that runs on your computer, and it mentions no account, upload or telemetry.**',
          'The installers bundle the interface, Python, PyTorch and the other dependencies, and the README presents separation as something the app does locally. The README also says an update package can be downloaded from inside the app, so the app can make network requests for updates. It does not state what else the app contacts, and it gives no privacy statement. PromptQuorum did not capture network traffic.',
          'The website is a separate matter. Its cookie banner says the site uses cookies to analyze traffic. The footer links only a Contact address, so no privacy policy, terms page or imprint was found.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Ultimate Vocal Remover fits people who want free stem separation on their own machine and can handle some setup.**',
        ],
        items: [
          'Musicians and producers who want vocal-free practice tracks or stems for private use.',
          'DJs and hobbyists with an NVIDIA GPU who are happy to try several models.',
          'Windows and macOS users who prefer a downloaded installer over a hosted web service.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Ultimate Vocal Remover is a weaker fit in some cases, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: Linux users who want an installer. The README offers only manual steps.',
          'Not a fit: people who want the newest build now. The latest tagged release dates from 2023, and UVR 6 is announced, not shipped.',
          'Not a fit: machines without a supported GPU if speed matters. The README calls AMD support limited.',
          'Unverified: separation quality and speed. PromptQuorum ran no tests. The 2023 Bedroom Producers Blog review called the output usable but "probably isn\'t as clean and tidy as some other results you might get".',
          'Unverified: system RAM, disk space and CPU-only requirements.',
          'Unverified: whether the app contacts any server beyond update downloads, and whether it collects telemetry. The website has no privacy policy, terms, imprint or about page, so no policy could be read.',
          'Unverified: the maker\'s location or legal entity. The developers are listed by GitHub handles and no source names a company, so the directory shows no headquarters flag.',
          'Unverified: the status of the Roformer beta and DirectML beta builds, and any licence terms for the models beyond the README\'s MIT statement.',
          'Unverified: UVR 6 contents, price and release date. They come from the maker\'s announcements only, and the date could still change.',
          'Unverified: store listings. None were found, and the website links only to the GitHub release page.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover vs Alternatives',
        itemHeadings: true,
        content: [
          '**UVR is a local desktop app, while several alternatives run in the browser or as hosted services. PromptQuorum has not compared them hands-on.** The notes below come from the AlternativeTo listing and the UVR README.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Ultimate Vocal Remover', 'Noted in sources': 'Free, MIT, desktop app for Windows, macOS and Linux' },
          { 'Tool': 'Demucs', 'Noted in sources': 'Model family bundled in UVR; the README credits its original authors' },
          { 'Tool': 'Spleeter', 'Noted in sources': 'Open-source (MIT) Python and TensorFlow separation library (AlternativeTo)' },
          { 'Tool': 'moseca', 'Noted in sources': 'Free open-source (MIT) web app, self-hostable (AlternativeTo)' },
          { 'Tool': 'LALAL.AI', 'Noted in sources': 'Proprietary freemium separation service (AlternativeTo)' },
          { 'Tool': 'Fadr', 'Noted in sources': 'Proprietary freemium online stem and MIDI tool (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Ultimate Vocal Remover free?',
            a: 'Yes. The app is free and open source, and the website and README link a donation page for people who want to support the project. No paid tier is described in the sources.',
          },
          {
            q: 'Do I need a graphics card?',
            a: 'The README states an NVIDIA GTX 1060 6 GB as the minimum for GPU conversions and recommends 8 GB of VRAM or more. A 2023 third-party review says CPU rendering also worked, but the README does not confirm that.',
          },
          {
            q: 'What is UVR 6 and when does it arrive?',
            a: 'UVR 6 is a rebuilt version that the maker announced with a new interface and a command-line version. The maker says Windows is planned for 11 December 2026, with macOS and Linux to follow. Until then, version 5.6 is the downloadable release.',
          },
          {
            q: 'Is the MIT license enough to use the output commercially?',
            a: 'Not on its own. The README says the app code is MIT-licensed and asks third-party developers using its models to credit UVR. The rights to the songs you separate are a separate question that the README does not address.',
          },
          {
            q: 'Which download is the official one?',
            a: 'The maker\'s website links to the GitHub release page, and the README links the installers there. Other sites and apps may use a similar name, so start from the official website or the repository.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Ultimate Vocal Remover is worth trying if you want free, local stem separation and can accept a technical interface and an installer from 2023.**',
          'On paper it covers the basics well: three model families, a free MIT-licensed app, installers for Windows and macOS, and Apple Silicon GPU support for some models. The maker is still working on it, with a README revision on 6 October 2026 and a dated plan for UVR 6.',
          'The trade-offs are clear. The newest tagged release is from September 2023, Linux needs manual setup, and no privacy policy was found and no company is named behind the project. Hardware needs beyond the GPU minimum are unstated, and PromptQuorum has not tested separation quality. Try it on a few songs you have the rights to use, and re-check the official site before you rely on UVR 6.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ultimate Vocal Remover website](https://ultimatevocalremover.com) — maker\'s description, UVR 6 announcement and release plan, donation and contact links, cookie banner, checked 18 November 2026.',
          '[GitHub repository](https://github.com/Anjok07/ultimatevocalremovergui) — repository, license, last commit on 6 October 2026, checked 18 November 2026.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — developers, models, install steps, requirements, troubleshooting, license note and acknowledgements, checked 18 November 2026.',
          '[Release v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — latest tagged release date and installer file names, checked 18 November 2026.',
          '[Maker\'s development update (issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — UVR 6 plans, release date, sole-developer statement, update of 18 November 2026, checked 18 November 2026.',
          '[AlternativeTo listing](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — alternative tools and their license and platform notes, checked 18 November 2026.',
          '[Bedroom Producers Blog review](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — 2023 third-party comments on quality, CPU use and difficulty, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Aiko Review](/power-local-llm/aiko-review) — an on-device audio app for Mac and iPhone.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local speech tools.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-de.webp',
    title: 'Ultimate-Vocal-Remover-Rezension: kostenlose lokale Trennung von Gesang und Stems',
    seoTitle: 'Ultimate Vocal Remover im Test: kostenloser Stem-Trenner',
    intro:
      'Ultimate Vocal Remover (UVR) ist eine kostenlose Desktop-App, die einen Song mit neuronalen Modellen, die auf Ihrem eigenen Computer laufen, in Gesang, Instrumente und weitere Stems zerlegt. Diese Rezension stützt sich auf die Website des Herstellers, das GitHub-Repository mit README, die GitHub-Release-Dateien und das öffentliche Entwicklungs-Update des Herstellers. PromptQuorum hat die App nicht getestet.',
    metaDescription:
      'Ultimate Vocal Remover trennt Songs kostenlos am PC in Gesang und Stems. Plattformen, GPU-Bedarf, Lizenz, UVR-6-Pläne, Datenschutz und offene Punkte.',
    twitterDescription:
      'Ultimate Vocal Remover ist eine kostenlose Desktop-App unter MIT-Lizenz, die Gesang und Stems lokal trennt. Einrichtung, GPU-Bedarf, UVR-6-Pläne und offene Fragen.',
    audience:
      'Musiker, Produzenten, DJs und Hobbyanwender, die Gesang und Instrumente von Songs auf dem eigenen Computer trennen möchten',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'Ultimate Vocal Remover Rezension',
      'UVR5',
      'Ultimate Vocal Remover Download',
      'lokaler Vocal Remover',
      'Stem-Trennung Software',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover ist eine kostenlose Desktop-App unter MIT-Lizenz für Windows, macOS und Linux, die Gesang, Instrumente und Stems aus Audiodateien auf Ihrem eigenen Computer trennt.** Die neueste getaggte Version ist 5.6, und der Hersteller hat ein neu gebautes UVR 6 angekündigt, das beim Schreiben dieser Rezension noch nicht erschienen war.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Ultimate Vocal Remover, und für wen ist es gedacht?',
        answer:
          'Ultimate Vocal Remover ist eine Desktop-App, die Gesang aus Songs entfernt und Audio mit MDX-Net-, VR- und Demucs-Modellen in Stems trennt. Sie eignet sich für Menschen, die ein kostenloses Trennwerkzeug suchen, das auf dem eigenen Computer läuft, und sich mit der Wahl von Modellen und Einstellungen wohlfühlen.',
        bullets: [
          'Plattformen: Windows 10+, macOS Big Sur+, Linux (manuelle Einrichtung).',
          'Preis: kostenlos; der Hersteller nimmt Spenden an.',
          'Lizenz: MIT für den App-Code.',
          'GPU: Eine NVIDIA GTX 1060 6 GB ist das angegebene Minimum für GPU-Konvertierungen.',
          'Hersteller: die als Anjok07 und aufr33 geführten Entwickler (GitHub-Namen), keine Firma genannt.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Ultimate Vocal Remover ist eine kostenlose Desktop-App, die einen Song mit neuronalen Modellen, die auf Ihrem eigenen Computer laufen, in Gesang, Instrumente und weitere Stems trennt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Karaoke- und Remix-Werkzeug vor, das Sie selbst installieren. Sie laden eine Audiodatei, wählen ein Modell, und die App schreibt für jeden Teil eine eigene Audiodatei. Die README beschreibt das als Vorgang auf Ihrem Computer.',
          },
        ],
        items: [
          'Windows- und macOS-Nutzer erhalten einen normalen Installer von der GitHub-Release-Seite; Linux erfordert eine manuelle Python-Einrichtung im Terminal.',
          'Laut README haben die Kernentwickler die mitgelieferten Modelle trainiert, mit Ausnahme der Demucs-v3- und v4-4-Stem-Modelle.',
          'Die neueste getaggte Version 5.6 stammt vom 26. September 2023; der letzte Commit im Repository, eine Überarbeitung der README, stammt vom 6. Oktober 2026.',
          'Der Hersteller sagt, UVR 6, ein Neubau mit neuer Oberfläche, sei für Windows am 11. Dezember 2026 geplant, macOS und Linux sollen folgen.',
          'PromptQuorum hat die App nicht getestet, daher trifft dieser Text keine Aussage zu Trennqualität oder Geschwindigkeit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Songs und Aufnahmen sind meist urheberrechtlich geschützt. Stems für das private Üben zu trennen ist etwas anderes, als das Ergebnis zu veröffentlichen, zu samplen oder zu verkaufen. Klären Sie die Rechte, bevor Sie etwas teilen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Ultimate Vocal Remover ist eine kostenlose grafische App, die Gesang aus Audiodateien entfernt und Instrumente in Stems trennt.**',
          'Die README nennt Anjok07 und aufr33 als Kernentwickler, beides GitHub-Namen, und die Website des Herstellers ist mit „Anjok07“ unterzeichnet. Eine Firma wird nicht genannt. In einem öffentlichen Update auf GitHub sagt der Hersteller, er sei die einzige Person, die aktiv am Hauptcode von UVR arbeite. Die App nutzt drei Modellfamilien: MDX-Net, die VR-Architektur und Demucs. Laut README haben die Kernentwickler alle mitgelieferten Modelle trainiert, außer den Demucs-v3- und v4-4-Stem-Modellen; die MDX23C-Gewichte werden ZFTurbo zugeschrieben.',
          'Version 5.6 ist die neueste getaggte Version und wurde am 26. September 2023 veröffentlicht. Der letzte Commit im Repository vom 6. Oktober 2026 überarbeitete die README; es gibt also aktuelle Aktivität, der neueste Installer ist aber älter. Auf der GitHub-Release-Seite liegen außerdem Beta-Installer, die bis Januar 2025 hochgeladen wurden, darunter macOS-Builds mit dem Namen „Roformer beta“ und ein DirectML-Build für Windows. Die README beschreibt diese Beta-Builds nicht.',
          'Die Website des Herstellers nennt UVR 5 die aktuelle Version und kündigt UVR 6 an. Laut Website und dem Update des Herstellers vom 18. November 2026 wird UVR 6 neu gebaut, mit neuer Oberfläche, einem Download-Center für Modelle, neueren Modellarchitekturen, Ensembles, Audiowerkzeugen zum Ausrichten von Spuren und zum Ändern von Tonart oder Tempo, Designs und einer Kommandozeilenversion. Der Hersteller sagt, Windows sei für den 11. Dezember 2026 geplant, macOS und Linux sollen danach folgen, und er habe die Veröffentlichung für weitere Tests zurückgehalten. Das sind Ankündigungen, keine ausgelieferten Funktionen.',
          'Alle Beschreibungen hier sind Aussagen des Herstellers. PromptQuorum hat die App nicht ausgeführt und ihre Ergebnisse nicht mit anderen Werkzeugen verglichen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Windows- und macOS-Nutzer installieren Ultimate Vocal Remover über die Dateien auf der GitHub-Release-Seite; Linux erfordert eine manuelle Einrichtung im Terminal.**',
          'Die Website des Herstellers verlinkt für den Download auf die GitHub-Release-Seite, und die README verlinkt jede Datei direkt. Beim Windows-Installer rät die README zur Installation auf dem Hauptlaufwerk C:, weil eine Installation auf einem zweiten Laufwerk Instabilität verursache. Unter macOS kann der erste Start laut README 5 bis 10 Minuten dauern. Blockiert macOS die App, nennt die README Terminal-Befehle, die Apples Notarisierungsprüfung umgehen, und rät, die Sicherheitseinstellung danach wieder zu aktivieren.',
        ],
        columns: ['Plattform', 'So bekommen Sie die App'],
        rows: [
          { 'Plattform': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'So bekommen Sie die App': 'Installer UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'Plattform': '[Windows, AMD-/Intel-GPU](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'So bekommen Sie die App': 'DirectML-Build; README: „you can try“' },
          { 'Plattform': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'So bekommen Sie die App': '.dmg für Apple Silicon (arm64) oder Intel (x86_64)' },
          { 'Plattform': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', 'So bekommen Sie die App': 'Manuell: Python-venv, pip install, UVR.py starten' },
          { 'Plattform': '[Website](https://ultimatevocalremover.com)', 'So bekommen Sie die App': 'Offizielle Seite; verlinkt die GitHub-Release-Seite' },
          { 'Plattform': '[Quellcode](https://github.com/Anjok07/ultimatevocalremovergui)', 'So bekommen Sie die App': 'GitHub-Repository (MIT)' },
        ],
        note: 'Auf der Website wurde keine Datenschutzerklärung gefunden; siehe die Liste unbestätigter Punkte weiter unten.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Die README nennt ein GPU-Minimum, aber keine Angabe zu Arbeitsspeicher oder Speicherplatz.**',
          'Sie sagt, die Konvertierungszeiten hingen stark von Ihrer Hardware ab, weil die Modelle rechenintensiv seien. Bei Speicherzuweisungsfehlern empfiehlt sie, die Größe von „Segment“ oder „Window“ zu verringern.',
        ],
        columns: ['Element', 'Angegebener Wert'],
        rows: [
          { 'Element': 'Betriebssystem', 'Angegebener Wert': 'Windows 10+, macOS Big Sur+, nur 64-Bit' },
          { 'Element': 'NVIDIA-GPU', 'Angegebener Wert': 'GTX 1060 6 GB Minimum; 8 GB+ VRAM empfohlen' },
          { 'Element': 'AMD-/Intel-GPU', 'Angegebener Wert': 'Eingeschränkt; DirectML-Build oder AMD-Branch' },
          { 'Element': 'Apple Silicon', 'Angegebener Wert': 'GPU (MPS) für Demucs v4 und alle MDX-Net-Modelle' },
          { 'Element': 'Arbeitsspeicher', 'Angegebener Wert': 'Nicht angegeben' },
          { 'Element': 'Nur-CPU-Betrieb', 'Angegebener Wert': 'In der README nicht genannt; ein Test von 2023 nutzte ihn' },
          { 'Element': 'Zusatzwerkzeuge', 'Angegebener Wert': 'FFmpeg für Nicht-WAV-Dateien; Rubber Band für Tonhöhe/Tempo' },
        ],
        note: 'Die Rezension des Bedroom Producers Blog von 2023 sagt, CPU-Rendering sei praktikabel. Die README bestätigt das nicht; behandeln Sie es als Bericht eines Dritten.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**UVR 5 konzentriert sich auf die Trennung mit drei Modellfamilien und einigen Audiowerkzeugen.** Die folgenden Punkte sind Aussagen des Herstellers aus README und Website.',
        ],
        items: [
          'Entfernt Gesang, isoliert Instrumente und trennt Stems mit MDX-Net-, VR- und Demucs-Modellen.',
          'Mitgelieferte Modelle von den Kernentwicklern trainiert, außer den Demucs-v3- und v4-4-Stem-Modellen.',
          'Optionen für Zeitdehnung und Tonhöhenverschiebung, die auf der Bibliothek Rubber Band beruhen.',
          'Nicht-WAV-Audiodateien werden über FFmpeg verarbeitet.',
          'Einstellungen werden beim Schließen der App gespeichert, und eine Schaltfläche „Error Log“ in den Einstellungen hilft bei Fehlerberichten.',
          'Roformer-Beta-Builds erscheinen als Dateinamen der Releases; die README beschreibt sie nicht.',
          'Nur für UVR 6 angekündigt: neue Oberfläche, Download-Center, neuere Architekturen, Ensembles, Werkzeuge für Tonart und Tempo, Designs und eine Kommandozeilenversion.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Die README beschreibt ein Programm, das auf Ihrem Computer läuft, und erwähnt weder Konto noch Upload oder Telemetrie.**',
          'Die Installer bündeln die Oberfläche, Python, PyTorch und die übrigen Abhängigkeiten, und die README stellt die Trennung als etwas dar, das die App lokal erledigt. Außerdem sagt sie, ein Update-Paket könne aus der App heruntergeladen werden; die App kann also Netzwerkanfragen für Updates senden. Sie nennt nicht, was die App sonst kontaktiert, und enthält keine Datenschutzaussage. PromptQuorum hat keinen Netzwerkverkehr mitgeschnitten.',
          'Die Website ist eine andere Sache. Ihr Cookie-Banner sagt, die Seite nutze Cookies zur Analyse des Datenverkehrs. Die Fußzeile verlinkt nur eine Kontaktadresse; es wurde also weder eine Datenschutzerklärung noch Nutzungsbedingungen noch ein Impressum gefunden.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Ultimate Vocal Remover passt zu Menschen, die kostenlose Stem-Trennung auf dem eigenen Rechner wollen und mit etwas Einrichtung zurechtkommen.**',
        ],
        items: [
          'Musiker und Produzenten, die gesangsfreie Übungsspuren oder Stems für den privaten Gebrauch möchten.',
          'DJs und Hobbyanwender mit NVIDIA-GPU, die gern mehrere Modelle ausprobieren.',
          'Windows- und macOS-Nutzer, die einen heruntergeladenen Installer einem gehosteten Webdienst vorziehen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Ultimate Vocal Remover passt in manchen Fällen schlechter, und mehrere Details bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Linux-Nutzer, die einen Installer wollen. Die README bietet nur manuelle Schritte.',
          'Nicht geeignet: Menschen, die jetzt den neuesten Build wollen. Die letzte getaggte Version stammt von 2023, und UVR 6 ist angekündigt, nicht ausgeliefert.',
          'Nicht geeignet: Rechner ohne unterstützte GPU, wenn Geschwindigkeit zählt. Die README nennt die AMD-Unterstützung eingeschränkt.',
          'Ungeprüft: Trennqualität und Geschwindigkeit. PromptQuorum hat keine Tests durchgeführt. Die Rezension des Bedroom Producers Blog von 2023 nannte das Ergebnis brauchbar, aber „probably isn\'t as clean and tidy as some other results you might get“.',
          'Ungeprüft: Arbeitsspeicher, Speicherplatz und Anforderungen für den Betrieb nur mit CPU.',
          'Ungeprüft: ob die App außer für Update-Downloads einen Server kontaktiert und ob sie Telemetrie erhebt. Die Website hat keine Datenschutzerklärung, keine Nutzungsbedingungen, kein Impressum und keine Über-uns-Seite; es konnte also keine Erklärung gelesen werden.',
          'Ungeprüft: Standort oder Rechtsform des Herstellers. Die Entwickler werden unter GitHub-Namen geführt, und keine Quelle nennt eine Firma; das Verzeichnis zeigt daher keine Flagge für den Firmensitz.',
          'Ungeprüft: der Status der Roformer-Beta- und DirectML-Beta-Builds sowie Lizenzbedingungen der Modelle über die MIT-Aussage der README hinaus.',
          'Ungeprüft: Inhalt, Preis und Erscheinungsdatum von UVR 6. Sie stammen nur aus Ankündigungen des Herstellers, und das Datum kann sich noch ändern.',
          'Ungeprüft: Store-Einträge. Es wurden keine gefunden, und die Website verlinkt nur auf die GitHub-Release-Seite.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**UVR ist eine lokale Desktop-App, während mehrere Alternativen im Browser oder als gehostete Dienste laufen. PromptQuorum hat sie nicht praktisch verglichen.** Die Hinweise unten stammen aus dem AlternativeTo-Eintrag und der UVR-README.',
        ],
        columns: ['Werkzeug', 'In den Quellen vermerkt'],
        rows: [
          { 'Werkzeug': 'Ultimate Vocal Remover', 'In den Quellen vermerkt': 'Kostenlos, MIT, Desktop-App für Windows, macOS und Linux' },
          { 'Werkzeug': 'Demucs', 'In den Quellen vermerkt': 'In UVR gebündelte Modellfamilie; die README nennt die Urheber' },
          { 'Werkzeug': 'Spleeter', 'In den Quellen vermerkt': 'Quelloffene (MIT) Python-/TensorFlow-Bibliothek (AlternativeTo)' },
          { 'Werkzeug': 'moseca', 'In den Quellen vermerkt': 'Kostenlose quelloffene (MIT) Web-App, selbst hostbar (AlternativeTo)' },
          { 'Werkzeug': 'LALAL.AI', 'In den Quellen vermerkt': 'Proprietärer Freemium-Trenndienst (AlternativeTo)' },
          { 'Werkzeug': 'Fadr', 'In den Quellen vermerkt': 'Proprietäres Freemium-Online-Tool für Stems und MIDI (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Ultimate Vocal Remover kostenlos?',
            a: 'Ja. Die App ist kostenlos und quelloffen, und Website und README verlinken eine Spendenseite für alle, die das Projekt unterstützen möchten. Ein kostenpflichtiger Tarif wird in den Quellen nicht beschrieben.',
          },
          {
            q: 'Brauche ich eine Grafikkarte?',
            a: 'Die README nennt eine NVIDIA GTX 1060 6 GB als Minimum für GPU-Konvertierungen und empfiehlt 8 GB VRAM oder mehr. Eine Rezension eines Dritten von 2023 sagt, auch CPU-Rendering habe funktioniert, doch die README bestätigt das nicht.',
          },
          {
            q: 'Was ist UVR 6, und wann erscheint es?',
            a: 'UVR 6 ist eine neu gebaute Version, die der Hersteller mit neuer Oberfläche und einer Kommandozeilenversion angekündigt hat. Laut Hersteller ist Windows für den 11. Dezember 2026 geplant, macOS und Linux sollen folgen. Bis dahin ist Version 5.6 die herunterladbare Version.',
          },
          {
            q: 'Genügt die MIT-Lizenz, um die Ergebnisse kommerziell zu nutzen?',
            a: 'Nicht allein. Die README sagt, der App-Code stehe unter der MIT-Lizenz, und bittet Drittentwickler, die ihre Modelle nutzen, UVR zu nennen. Die Rechte an den getrennten Songs sind eine eigene Frage, die die README nicht behandelt.',
          },
          {
            q: 'Welcher Download ist der offizielle?',
            a: 'Die Website des Herstellers verlinkt auf die GitHub-Release-Seite, und die README verlinkt dort die Installer. Andere Seiten und Apps können einen ähnlichen Namen tragen; beginnen Sie daher bei der offiziellen Website oder beim Repository.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Ultimate Vocal Remover ist einen Versuch wert, wenn Sie kostenlose, lokale Stem-Trennung wollen und eine technische Oberfläche sowie einen älteren Installer akzeptieren.**',
          'Auf dem Papier deckt es die Grundlagen gut ab: drei Modellfamilien, eine kostenlose App unter MIT-Lizenz, Installer für Windows und macOS und GPU-Unterstützung für Apple Silicon bei einigen Modellen. Der Hersteller arbeitet weiter daran, mit einer README-Überarbeitung am 6. Oktober 2026 und einem datierten Plan für UVR 6.',
          'Die Kompromisse sind klar. Die neueste getaggte Version stammt vom September 2023, Linux erfordert manuelle Einrichtung, und es wurde weder eine Datenschutzerklärung gefunden noch eine Firma hinter dem Projekt genannt. Hardwareanforderungen jenseits des GPU-Minimums sind nicht angegeben, und PromptQuorum hat die Trennqualität nicht getestet. Probieren Sie es an einigen Songs aus, deren Nutzung Ihnen erlaubt ist, und prüfen Sie die offizielle Website erneut, bevor Sie sich auf UVR 6 verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Ultimate Vocal Remover](https://ultimatevocalremover.com) — Beschreibung des Herstellers, Ankündigung und Zeitplan von UVR 6, Spenden- und Kontaktlinks, Cookie-Banner, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/Anjok07/ultimatevocalremovergui) — Repository, Lizenz, letzter Commit am 6. Oktober 2026, geprüft am 18. November 2026.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — Entwickler, Modelle, Installationsschritte, Anforderungen, Fehlerbehebung, Lizenzhinweis und Danksagungen, geprüft am 18. November 2026.',
          '[Release v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — Datum der neuesten getaggten Version und Dateinamen der Installer, geprüft am 18. November 2026.',
          '[Entwicklungs-Update des Herstellers (Issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — Pläne für UVR 6, Erscheinungsdatum, Aussage zum Einzelentwickler, Update vom 18. November 2026, geprüft am 18. November 2026.',
          '[AlternativeTo-Eintrag](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — alternative Werkzeuge mit Hinweisen zu Lizenz und Plattform, geprüft am 18. November 2026.',
          '[Rezension des Bedroom Producers Blog](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — Anmerkungen eines Dritten von 2023 zu Qualität, CPU-Nutzung und Schwierigkeit, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audiowerkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Speech-to-Text und Sprachagenten nebeneinander.',
          '[Aiko-Rezension](/de/power-local-llm/aiko-review) — eine Audio-App auf dem Gerät für Mac und iPhone.',
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Sprachwerkzeugen.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-es.webp',
    title: 'Reseña de Ultimate Vocal Remover: separación local y gratuita de voz y stems',
    seoTitle: 'Reseña de Ultimate Vocal Remover: separa stems gratis',
    intro:
      'Ultimate Vocal Remover (UVR) es una app de escritorio gratuita que separa una canción en voz, instrumentos y otros stems con modelos de redes neuronales que se ejecutan en tu propio ordenador. Esta reseña se basa en el sitio web del fabricante, el repositorio de GitHub con su README, los archivos de las versiones en GitHub y la actualización pública de desarrollo del fabricante. PromptQuorum no ha probado la app.',
    metaDescription:
      'Ultimate Vocal Remover separa canciones en voz y stems gratis en tu PC. Plataformas, GPU, licencia, planes de UVR 6, privacidad y puntos sin verificar.',
    twitterDescription:
      'Ultimate Vocal Remover es una app de escritorio gratuita con licencia MIT que separa voz y stems en local. Instalación, GPU, planes de UVR 6 y dudas abiertas.',
    audience:
      'Músicos, productores, DJ y aficionados que quieren separar voz e instrumentos de canciones en su propio ordenador',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'reseña Ultimate Vocal Remover',
      'UVR5',
      'descargar Ultimate Vocal Remover',
      'quitar voz local',
      'software de separación de stems',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover es una app de escritorio gratuita con licencia MIT para Windows, macOS y Linux que separa voz, instrumentos y stems de archivos de audio en tu propio ordenador.** Su última versión etiquetada es la 5.6, y el fabricante ha anunciado una UVR 6 reconstruida que aún no se había publicado cuando se escribió esta reseña.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Ultimate Vocal Remover y para quién es?',
        answer:
          'Ultimate Vocal Remover es una app de escritorio que quita la voz de las canciones y separa el audio en stems con modelos MDX-Net, VR y Demucs. Es adecuada para quien quiere una herramienta de separación gratuita y que se ejecuta en tu propio ordenador, y se siente cómodo eligiendo modelos y ajustes.',
        bullets: [
          'Plataformas: Windows 10+, macOS Big Sur+, Linux (instalación manual).',
          'Precio: gratis; el fabricante acepta donaciones.',
          'Licencia: MIT para el código de la app.',
          'GPU: una NVIDIA GTX 1060 de 6 GB es el mínimo indicado para las conversiones con GPU.',
          'Fabricante: los desarrolladores indicados como Anjok07 y aufr33 (nombres de GitHub), sin empresa mencionada.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
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
            text: 'Ultimate Vocal Remover es una app de escritorio gratuita que separa una canción en voz, instrumentos y otros stems con modelos de redes neuronales que se ejecutan en tu propio ordenador.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una herramienta de karaoke y remezclas que instalas tú mismo. Cargas un archivo de audio, eliges un modelo y la app escribe un archivo de audio para cada parte, y el README lo describe como algo que ocurre en tu ordenador.',
          },
        ],
        items: [
          'Quienes usan Windows y macOS obtienen un instalador normal en la página de versiones de GitHub; Linux requiere una instalación manual con Python en una terminal.',
          'Según el README, los desarrolladores principales entrenaron los modelos incluidos, salvo los modelos de 4 stems Demucs v3 y v4.',
          'La última versión etiquetada, la 5.6, es del 26 de septiembre de 2023; el último commit del repositorio, una revisión del README, es del 6 de octubre de 2026.',
          'El fabricante dice que UVR 6, una reconstrucción con interfaz nueva, está prevista para Windows el 11 de diciembre de 2026, y que macOS y Linux llegarán después.',
          'PromptQuorum no ha probado la app, así que nada de este texto afirma nada sobre la calidad o la velocidad de la separación.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Las canciones y grabaciones suelen estar protegidas por derechos de autor. Separar stems para practicar en privado no es lo mismo que publicar, samplear o vender el resultado, así que revisa los derechos antes de compartir nada. Esto es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Ultimate Vocal Remover es una app gráfica gratuita que quita la voz de archivos de audio y separa los instrumentos en stems.**',
          'El README nombra a Anjok07 y aufr33 como desarrolladores principales, ambos nombres de GitHub, y el sitio web del fabricante está firmado como «Anjok07». No se menciona ninguna empresa. En una actualización pública en GitHub, el fabricante dice que es la única persona que desarrolla activamente el código principal de UVR. La app usa tres familias de modelos: MDX-Net, la arquitectura VR y Demucs. El README dice que los desarrolladores principales entrenaron todos los modelos incluidos salvo los modelos de 4 stems Demucs v3 y v4, y atribuye a ZFTurbo los pesos MDX23C.',
          'La versión 5.6 es la última etiquetada y se publicó el 26 de septiembre de 2023. El último commit del repositorio, del 6 de octubre de 2026, revisó el README, así que hay actividad reciente pero el instalador más nuevo es más antiguo. La página de versiones de GitHub también incluye instaladores beta subidos hasta enero de 2025, entre ellos compilaciones para macOS llamadas «Roformer beta» y una compilación DirectML para Windows. El README no describe esas compilaciones beta.',
          'El sitio web del fabricante llama a UVR 5 la versión actual y anuncia UVR 6. Según el sitio web y la actualización del fabricante del 18 de noviembre de 2026, UVR 6 se reconstruye con una interfaz nueva, un centro de descargas de modelos, arquitecturas de modelos más recientes, ensembles, herramientas de audio para alinear pistas y cambiar tono o tempo, temas y una versión de línea de comandos. El fabricante dice que Windows está previsto para el 11 de diciembre de 2026, con macOS y Linux después, y que retrasó el lanzamiento para hacer más pruebas. Son anuncios, no funciones ya entregadas.',
          'Todas las descripciones de aquí son afirmaciones del fabricante. PromptQuorum no ha ejecutado la app ni ha comparado su resultado con otras herramientas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**En Windows y macOS instalas Ultimate Vocal Remover con los archivos de la página de versiones de GitHub; Linux requiere una instalación manual en una terminal.**',
          'El sitio web del fabricante enlaza la página de versiones de GitHub para la descarga, y el README enlaza cada archivo directamente. Para el instalador de Windows, el README indica instalar en la unidad principal C:, porque instalar en una unidad secundaria causa inestabilidad. En macOS, el README dice que el primer arranque puede tardar de 5 a 10 minutos y, si macOS bloquea la app, ofrece comandos de Terminal que omiten la comprobación de notarización de Apple y aconseja volver a activar el ajuste de seguridad después.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Cómo conseguirla': 'Instalador UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'Plataforma': '[Windows, GPU AMD/Intel](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Cómo conseguirla': 'Compilación DirectML; el README dice «you can try»' },
          { 'Plataforma': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Cómo conseguirla': '.dmg para Apple Silicon (arm64) o Intel (x86_64)' },
          { 'Plataforma': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', 'Cómo conseguirla': 'Manual: venv de Python, pip install, ejecutar UVR.py' },
          { 'Plataforma': '[Sitio web](https://ultimatevocalremover.com)', 'Cómo conseguirla': 'Sitio oficial; enlaza la página de versiones de GitHub' },
          { 'Plataforma': '[Código fuente](https://github.com/Anjok07/ultimatevocalremovergui)', 'Cómo conseguirla': 'Repositorio de GitHub (MIT)' },
        ],
        note: 'No se encontró una página de política de privacidad en el sitio web; consulta la lista de puntos sin verificar más abajo.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**El README indica un mínimo de GPU, pero no da cifras de RAM del sistema ni de disco.**',
          'Dice que los tiempos de conversión dependen mucho de tu hardware porque los modelos exigen mucho cálculo. Ante errores de asignación de memoria, aconseja reducir el tamaño de «Segment» o «Window».',
        ],
        columns: ['Elemento', 'Cifra indicada'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Cifra indicada': 'Windows 10+, macOS Big Sur+, solo 64 bits' },
          { 'Elemento': 'GPU NVIDIA', 'Cifra indicada': 'GTX 1060 6 GB mínimo; se recomiendan 8 GB+ de VRAM' },
          { 'Elemento': 'GPU AMD / Intel', 'Cifra indicada': 'Limitado; compilación DirectML o rama AMD' },
          { 'Elemento': 'Apple Silicon', 'Cifra indicada': 'GPU (MPS) para Demucs v4 y todos los modelos MDX-Net' },
          { 'Elemento': 'RAM del sistema', 'Cifra indicada': 'No indicada' },
          { 'Elemento': 'Solo CPU', 'Cifra indicada': 'No consta en el README; una reseña de 2023 la usó' },
          { 'Elemento': 'Herramientas extra', 'Cifra indicada': 'FFmpeg para archivos no WAV; Rubber Band para tono/tempo' },
        ],
        note: 'La reseña de Bedroom Producers Blog de 2023 dice que renderizar con CPU es viable. El README no lo confirma, así que tómalo como un informe de terceros.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**UVR 5 se centra en la separación con tres familias de modelos y algunas herramientas de audio.** Los puntos siguientes son afirmaciones del fabricante tomadas del README y del sitio web.',
        ],
        items: [
          'Quita la voz, aísla instrumentos y separa stems con modelos MDX-Net, VR y Demucs.',
          'Modelos incluidos entrenados por los desarrolladores principales, salvo los modelos de 4 stems Demucs v3 y v4.',
          'Opciones de estiramiento temporal y cambio de tono, que dependen de la biblioteca Rubber Band.',
          'Los archivos de audio que no son WAV se procesan con FFmpeg.',
          'Los ajustes se recuerdan al cerrar la app, y un botón «Error Log» en los ajustes ayuda a informar de errores.',
          'Las compilaciones Roformer beta aparecen como nombres de archivo de las versiones; el README no las describe.',
          'Anunciado solo para UVR 6: interfaz nueva, centro de descargas, arquitecturas más recientes, ensembles, herramientas de tono y tempo, temas y una versión de línea de comandos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**El README describe un programa que se ejecuta en tu ordenador y no menciona cuenta, subida de archivos ni telemetría.**',
          'Los instaladores incluyen la interfaz, Python, PyTorch y el resto de dependencias, y el README presenta la separación como algo que la app hace en local. También dice que un paquete de actualización puede descargarse desde la propia app, así que esta puede hacer peticiones de red para actualizarse. No indica con qué más se conecta la app ni ofrece una declaración de privacidad. PromptQuorum no capturó el tráfico de red.',
          'El sitio web es otra cosa. Su aviso de cookies dice que el sitio usa cookies para analizar el tráfico. El pie de página solo enlaza una dirección de contacto, así que no se encontró política de privacidad, página de términos ni aviso legal.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Ultimate Vocal Remover encaja con quien quiere separación de stems gratuita en su propia máquina y puede con algo de configuración.**',
        ],
        items: [
          'Músicos y productores que quieren pistas de práctica sin voz o stems para uso privado.',
          'DJ y aficionados con GPU NVIDIA que no se asustan de probar varios modelos.',
          'Usuarios de Windows y macOS que prefieren un instalador descargado a un servicio web alojado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Ultimate Vocal Remover encaja peor en algunos casos, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No es para ti si usas Linux y quieres un instalador. El README solo ofrece pasos manuales.',
          'No es para ti si quieres la compilación más nueva ya. La última versión etiquetada es de 2023, y UVR 6 está anunciada, no publicada.',
          'No es para ti si tu máquina no tiene una GPU compatible y la velocidad importa. El README califica de limitada la compatibilidad con AMD.',
          'Sin verificar: calidad y velocidad de la separación. PromptQuorum no hizo pruebas. La reseña de Bedroom Producers Blog de 2023 calificó el resultado de utilizable, pero «probably isn\'t as clean and tidy as some other results you might get».',
          'Sin verificar: RAM del sistema, espacio en disco y requisitos para usar solo la CPU.',
          'Sin verificar: si la app contacta algún servidor además de las descargas de actualizaciones y si recoge telemetría. El sitio web no tiene política de privacidad, términos, aviso legal ni página «acerca de», así que no se pudo leer ninguna política.',
          'Sin verificar: ubicación o entidad legal del fabricante. Los desarrolladores figuran con nombres de GitHub y ninguna fuente nombra una empresa, por lo que el directorio no muestra bandera de sede.',
          'Sin verificar: el estado de las compilaciones Roformer beta y DirectML beta, y los términos de licencia de los modelos más allá de la declaración MIT del README.',
          'Sin verificar: contenido, precio y fecha de lanzamiento de UVR 6. Proceden solo de anuncios del fabricante, y la fecha aún puede cambiar.',
          'Sin verificar: fichas en tiendas de apps. No se encontró ninguna, y el sitio web solo enlaza la página de versiones de GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover frente a las alternativas',
        itemHeadings: true,
        content: [
          '**UVR es una app de escritorio local, mientras que varias alternativas funcionan en el navegador o como servicios alojados. PromptQuorum no las ha comparado en la práctica.** Las notas de abajo proceden de la ficha de AlternativeTo y del README de UVR.',
        ],
        columns: ['Herramienta', 'Indicado en las fuentes'],
        rows: [
          { 'Herramienta': 'Ultimate Vocal Remover', 'Indicado en las fuentes': 'Gratis, MIT, app de escritorio para Windows, macOS y Linux' },
          { 'Herramienta': 'Demucs', 'Indicado en las fuentes': 'Familia de modelos incluida en UVR; el README cita a sus autores originales' },
          { 'Herramienta': 'Spleeter', 'Indicado en las fuentes': 'Biblioteca de separación de código abierto (MIT) en Python y TensorFlow (AlternativeTo)' },
          { 'Herramienta': 'moseca', 'Indicado en las fuentes': 'App web gratuita de código abierto (MIT), autoalojable (AlternativeTo)' },
          { 'Herramienta': 'LALAL.AI', 'Indicado en las fuentes': 'Servicio de separación propietario con modelo freemium (AlternativeTo)' },
          { 'Herramienta': 'Fadr', 'Indicado en las fuentes': 'Herramienta online propietaria freemium de stems y MIDI (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Ultimate Vocal Remover es gratis?',
            a: 'Sí. La app es gratuita y de código abierto, y el sitio web y el README enlazan una página de donaciones para quien quiera apoyar el proyecto. Las fuentes no describen ningún plan de pago.',
          },
          {
            q: '¿Necesito una tarjeta gráfica?',
            a: 'El README indica una NVIDIA GTX 1060 de 6 GB como mínimo para las conversiones con GPU y recomienda 8 GB de VRAM o más. Una reseña de terceros de 2023 dice que renderizar con CPU también funcionó, pero el README no lo confirma.',
          },
          {
            q: '¿Qué es UVR 6 y cuándo llega?',
            a: 'UVR 6 es una versión reconstruida que el fabricante anunció con una interfaz nueva y una versión de línea de comandos. El fabricante dice que Windows está previsto para el 11 de diciembre de 2026, con macOS y Linux después. Hasta entonces, la versión 5.6 es la descargable.',
          },
          {
            q: '¿Basta la licencia MIT para usar el resultado con fines comerciales?',
            a: 'No por sí sola. El README dice que el código de la app tiene licencia MIT y pide a los desarrolladores externos que usen sus modelos que citen a UVR. Los derechos sobre las canciones que separas son otra cuestión que el README no aborda.',
          },
          {
            q: '¿Cuál es la descarga oficial?',
            a: 'El sitio web del fabricante enlaza la página de versiones de GitHub, y el README enlaza allí los instaladores. Otros sitios y apps pueden usar un nombre parecido, así que empieza por el sitio web oficial o por el repositorio.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Ultimate Vocal Remover merece una prueba si quieres separación de stems gratuita y local y aceptas una interfaz técnica y un instalador veterano.**',
          'Sobre el papel cubre bien lo básico: tres familias de modelos, una app gratuita con licencia MIT, instaladores para Windows y macOS y compatibilidad con la GPU de Apple Silicon en algunos modelos. El fabricante sigue trabajando en ella, con una revisión del README el 6 de octubre de 2026 y un plan con fecha para UVR 6.',
          'Los inconvenientes son claros. La última versión etiquetada es de septiembre de 2023, Linux requiere instalación manual, y no se encontró política de privacidad ni se nombra a ninguna empresa detrás del proyecto. Los requisitos de hardware más allá del mínimo de GPU no constan, y PromptQuorum no ha probado la calidad de la separación. Pruébala con algunas canciones cuyo uso te esté permitido y vuelve a consultar el sitio oficial antes de depender de UVR 6.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Ultimate Vocal Remover](https://ultimatevocalremover.com) — descripción del fabricante, anuncio y plan de lanzamiento de UVR 6, enlaces de donación y contacto, aviso de cookies, consultado el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/Anjok07/ultimatevocalremovergui) — repositorio, licencia, último commit del 6 de octubre de 2026, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — desarrolladores, modelos, pasos de instalación, requisitos, solución de problemas, nota de licencia y agradecimientos, consultado el 18 de noviembre de 2026.',
          '[Versión v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — fecha de la última versión etiquetada y nombres de los instaladores, consultado el 18 de noviembre de 2026.',
          '[Actualización de desarrollo del fabricante (issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — planes de UVR 6, fecha de lanzamiento, declaración de único desarrollador, actualización del 18 de noviembre de 2026, consultado el 18 de noviembre de 2026.',
          '[Ficha de AlternativeTo](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — herramientas alternativas y notas de licencia y plataforma, consultado el 18 de noviembre de 2026.',
          '[Reseña de Bedroom Producers Blog](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — comentarios de terceros de 2023 sobre calidad, uso de CPU y dificultad, consultado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz, lado a lado.',
          '[Reseña de Aiko](/es/power-local-llm/aiko-review) — una app de audio en el dispositivo para Mac y iPhone.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas herramientas de voz locales.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-fr.webp',
    title: 'Test d\'Ultimate Vocal Remover : séparation locale et gratuite de la voix et des stems',
    seoTitle: 'Test d\'Ultimate Vocal Remover : stems gratuits en local',
    intro:
      "Ultimate Vocal Remover (UVR) est une application de bureau gratuite qui sépare un morceau en voix, instruments et autres stems grâce à des modèles de réseaux de neurones exécutés sur votre propre ordinateur. Ce test s'appuie sur le site du fabricant, le dépôt GitHub et son README, les fichiers des versions GitHub et la mise à jour de développement publique du fabricant. PromptQuorum n'a pas testé l'application.",
    metaDescription:
      "Ultimate Vocal Remover sépare gratuitement voix et stems sur votre PC. Plateformes, GPU, licence, projets d'UVR 6, confidentialité et points non vérifiés.",
    twitterDescription:
      "Ultimate Vocal Remover est une application de bureau gratuite sous licence MIT qui sépare voix et stems en local. Installation, GPU, projets d'UVR 6 et questions ouvertes.",
    audience:
      "Musiciens, producteurs, DJ et amateurs qui veulent séparer la voix et les instruments de morceaux sur leur propre ordinateur",
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'test Ultimate Vocal Remover',
      'UVR5',
      'télécharger Ultimate Vocal Remover',
      'suppression de voix locale',
      'logiciel de séparation de stems',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      "**Ultimate Vocal Remover est une application de bureau gratuite sous licence MIT pour Windows, macOS et Linux qui sépare la voix, les instruments et les stems de fichiers audio sur votre propre ordinateur.** Sa dernière version étiquetée est la 5.6, et le fabricant a annoncé une UVR 6 reconstruite qui n'était pas encore sortie lors de la rédaction de ce test.",
    quickAnswerTop: {
      fr: {
        question: "Qu'est-ce qu'Ultimate Vocal Remover et à qui s'adresse-t-il ?",
        answer:
          "Ultimate Vocal Remover est une application de bureau qui retire la voix des morceaux et sépare l'audio en stems avec des modèles MDX-Net, VR et Demucs. Elle convient à ceux qui veulent un outil de séparation gratuit, qui s'exécute sur leur propre ordinateur, et qui sont à l'aise pour choisir des modèles et des réglages.",
        bullets: [
          'Plateformes : Windows 10+, macOS Big Sur+, Linux (installation manuelle).',
          'Prix : gratuit ; le fabricant accepte les dons.',
          "Licence : MIT pour le code de l'application.",
          'GPU : une NVIDIA GTX 1060 de 6 Go est le minimum indiqué pour les conversions sur GPU.',
          "Fabricant : les développeurs indiqués comme Anjok07 et aufr33 (noms GitHub), aucune société citée.",
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: "Comment l'obtenir", anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: "Ce que nous n'avons pas pu vérifier", anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: "Ultimate Vocal Remover est une application de bureau gratuite qui sépare un morceau en voix, instruments et autres stems grâce à des modèles de réseaux de neurones exécutés sur votre propre ordinateur.",
          },
          {
            type: 'plain-terms',
            text: "Voyez-la comme un outil de karaoké et de remix que vous installez vous-même. Vous chargez un fichier audio, choisissez un modèle, et l'application écrit un fichier audio séparé pour chaque partie, Le README décrit cela comme un traitement sur votre ordinateur.",
          },
        ],
        items: [
          "Sous Windows et macOS, un installateur classique est disponible sur la page des versions GitHub ; Linux demande une installation manuelle avec Python dans un terminal.",
          "Selon le README, les développeurs principaux ont entraîné les modèles fournis, à l'exception des modèles à 4 stems Demucs v3 et v4.",
          "La dernière version étiquetée, la 5.6, date du 26 septembre 2023 ; le dernier commit du dépôt, une révision du README, date du 6 octobre 2026.",
          "Le fabricant indique qu'UVR 6, une refonte avec une nouvelle interface, est prévue pour Windows le 11 décembre 2026, macOS et Linux devant suivre.",
          "PromptQuorum n'a pas testé l'application : aucune affirmation de ce texte ne porte sur la qualité ou la vitesse de séparation.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Les morceaux et enregistrements sont en général protégés par le droit d'auteur. Séparer des stems pour s'entraîner en privé n'est pas la même chose que publier, échantillonner ou vendre le résultat : vérifiez les droits avant de partager quoi que ce soit. Ces informations sont générales et ne constituent pas un conseil juridique.",
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          "**Ultimate Vocal Remover est une application graphique gratuite qui retire la voix de fichiers audio et sépare les instruments en stems.**",
          "Le README désigne Anjok07 et aufr33 comme développeurs principaux, deux noms d'utilisateur GitHub, et le site du fabricant est signé « Anjok07 ». Aucune société n'est citée. Dans une mise à jour publique sur GitHub, le fabricant dit être la seule personne à développer activement le code principal d'UVR. L'application utilise trois familles de modèles : MDX-Net, l'architecture VR et Demucs. Le README indique que les développeurs principaux ont entraîné tous les modèles fournis sauf les modèles à 4 stems Demucs v3 et v4, et attribue à ZFTurbo les poids MDX23C.",
          "La version 5.6 est la dernière version étiquetée et a été publiée le 26 septembre 2023. Le dernier commit du dépôt, le 6 octobre 2026, a révisé le README : il y a donc une activité récente, mais l'installateur le plus récent est plus ancien. La page des versions GitHub contient aussi des installateurs bêta mis en ligne jusqu'en janvier 2025, dont des versions macOS nommées « Roformer beta » et une version DirectML pour Windows. Le README ne décrit pas ces versions bêta.",
          "Le site du fabricant présente UVR 5 comme la version actuelle et annonce UVR 6. D'après le site et la mise à jour du fabricant du 18 novembre 2026, UVR 6 est reconstruite avec une nouvelle interface, un centre de téléchargement de modèles, des architectures de modèles plus récentes, des ensembles, des outils audio pour aligner des pistes et changer la tonalité ou le tempo, des thèmes et une version en ligne de commande. Le fabricant dit que Windows est prévu pour le 11 décembre 2026, macOS et Linux suivant, et qu'il a retenu la sortie pour davantage de tests. Ce sont des annonces, pas des fonctions livrées.",
          "Toutes les descriptions ci-dessus sont des déclarations du fabricant. PromptQuorum n'a pas exécuté l'application et n'a pas comparé ses résultats à ceux d'autres outils.",
        ],
      },
      getIt: {
        id: 'get-it',
        title: "Comment l'obtenir",
        content: [
          "**Sous Windows et macOS, on installe Ultimate Vocal Remover à partir des fichiers de la page des versions GitHub ; Linux demande une installation manuelle dans un terminal.**",
          "Le site du fabricant renvoie vers la page des versions GitHub pour le téléchargement, et le README lie chaque fichier directement. Pour l'installateur Windows, le README demande d'installer sur le disque principal C:, car une installation sur un disque secondaire provoque de l'instabilité. Sous macOS, le README dit que le premier démarrage peut prendre 5 à 10 minutes et, si macOS bloque l'application, fournit des commandes Terminal qui contournent la vérification de notarisation d'Apple, en conseillant de réactiver ensuite le réglage de sécurité.",
        ],
        columns: ['Plateforme', "Comment l'obtenir"],
        rows: [
          { 'Plateforme': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', "Comment l'obtenir": 'Installateur UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'Plateforme': '[Windows, GPU AMD/Intel](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', "Comment l'obtenir": 'Version DirectML ; le README dit « you can try »' },
          { 'Plateforme': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', "Comment l'obtenir": '.dmg pour Apple Silicon (arm64) ou Intel (x86_64)' },
          { 'Plateforme': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', "Comment l'obtenir": 'Manuel : venv Python, pip install, lancer UVR.py' },
          { 'Plateforme': '[Site web](https://ultimatevocalremover.com)', "Comment l'obtenir": 'Site officiel ; renvoie vers la page des versions GitHub' },
          { 'Plateforme': '[Code source](https://github.com/Anjok07/ultimatevocalremovergui)', "Comment l'obtenir": 'Dépôt GitHub (MIT)' },
        ],
        note: "Aucune page de politique de confidentialité n'a été trouvée sur le site web ; voir la liste des points non vérifiés plus bas.",
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          "**Le README indique un minimum pour le GPU, mais aucun chiffre de mémoire vive ni d'espace disque.**",
          "Il précise que les temps de conversion dépendent fortement de votre matériel, car les modèles demandent beaucoup de calcul. En cas d'erreur d'allocation mémoire, il conseille de réduire la taille de « Segment » ou de « Window ».",
        ],
        columns: ['Élément', 'Chiffre indiqué'],
        rows: [
          { 'Élément': "Système d'exploitation", 'Chiffre indiqué': 'Windows 10+, macOS Big Sur+, 64 bits uniquement' },
          { 'Élément': 'GPU NVIDIA', 'Chiffre indiqué': 'GTX 1060 6 Go minimum ; 8 Go+ de VRAM conseillés' },
          { 'Élément': 'GPU AMD / Intel', 'Chiffre indiqué': 'Limité ; version DirectML ou branche AMD' },
          { 'Élément': 'Apple Silicon', 'Chiffre indiqué': 'GPU (MPS) pour Demucs v4 et tous les modèles MDX-Net' },
          { 'Élément': 'Mémoire vive', 'Chiffre indiqué': 'Non indiquée' },
          { 'Élément': 'CPU seul', 'Chiffre indiqué': "Non indiqué dans le README ; un test de 2023 l'a utilisé" },
          { 'Élément': 'Outils annexes', 'Chiffre indiqué': 'FFmpeg pour les fichiers non WAV ; Rubber Band pour hauteur/tempo' },
        ],
        note: "Le test de Bedroom Producers Blog de 2023 dit que le rendu sur CPU est possible. Le README ne le confirme pas : considérez-le comme un témoignage de tiers.",
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**UVR 5 se concentre sur la séparation avec trois familles de modèles et quelques outils audio.** Les éléments ci-dessous sont des déclarations du fabricant tirées du README et du site.",
        ],
        items: [
          'Retire la voix, isole les instruments et sépare les stems avec des modèles MDX-Net, VR et Demucs.',
          'Modèles fournis entraînés par les développeurs principaux, sauf les modèles à 4 stems Demucs v3 et v4.',
          "Options d'étirement temporel et de changement de hauteur, qui reposent sur la bibliothèque Rubber Band.",
          'Les fichiers audio non WAV sont traités via FFmpeg.',
          "Les réglages sont mémorisés à la fermeture, et un bouton « Error Log » dans les réglages aide à signaler les bogues.",
          "Des versions Roformer bêta apparaissent dans les noms de fichiers des versions ; le README ne les décrit pas.",
          "Annoncé pour UVR 6 uniquement : nouvelle interface, centre de téléchargement, architectures plus récentes, ensembles, outils de tonalité et de tempo, thèmes et version en ligne de commande.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          "**Le README décrit un programme qui s'exécute sur votre ordinateur et ne mentionne ni compte, ni envoi de fichiers, ni télémétrie.**",
          "Les installateurs regroupent l'interface, Python, PyTorch et les autres dépendances, et le README présente la séparation comme un traitement local de l'application. Il indique aussi qu'un paquet de mise à jour peut être téléchargé depuis l'application, qui peut donc faire des requêtes réseau pour se mettre à jour. Il ne dit pas ce que l'application contacte d'autre et ne contient aucune déclaration de confidentialité. PromptQuorum n'a pas capturé le trafic réseau.",
          "Le site web est un autre sujet. Sa bannière de cookies dit que le site utilise des cookies pour analyser le trafic. Le pied de page ne renvoie qu'à une adresse de contact : aucune politique de confidentialité, aucune condition d'utilisation ni aucune mention légale n'a donc été trouvée.",
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          "**Ultimate Vocal Remover convient à ceux qui veulent une séparation de stems gratuite sur leur propre machine et acceptent un peu de configuration.**",
        ],
        items: [
          "Musiciens et producteurs qui veulent des pistes d'entraînement sans voix ou des stems pour un usage privé.",
          'DJ et amateurs équipés d\'un GPU NVIDIA qui aiment essayer plusieurs modèles.',
          'Utilisateurs de Windows et macOS qui préfèrent un installateur téléchargé à un service web hébergé.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Ce que nous n'avons pas pu vérifier",
        content: [
          "**Ultimate Vocal Remover convient moins bien dans certains cas, et plusieurs détails restent non vérifiés.**",
        ],
        items: [
          "Ne convient pas : les utilisateurs de Linux qui veulent un installateur. Le README ne propose que des étapes manuelles.",
          "Ne convient pas : ceux qui veulent la version la plus récente tout de suite. La dernière version étiquetée date de 2023, et UVR 6 est annoncée, pas livrée.",
          "Ne convient pas : les machines sans GPU compatible quand la vitesse compte. Le README qualifie de limitée la prise en charge d'AMD.",
          "Non vérifié : qualité et vitesse de séparation. PromptQuorum n'a effectué aucun test. Le test de Bedroom Producers Blog de 2023 jugeait le résultat utilisable, mais « probably isn't as clean and tidy as some other results you might get ».",
          "Non vérifié : mémoire vive, espace disque et exigences pour un usage sur CPU seul.",
          "Non vérifié : si l'application contacte un serveur en dehors des téléchargements de mises à jour et si elle collecte de la télémétrie. Le site n'a ni politique de confidentialité, ni conditions, ni mentions légales, ni page à propos : aucune politique n'a pu être lue.",
          "Non vérifié : lieu ou entité juridique du fabricant. Les développeurs sont indiqués par des noms GitHub et aucune source ne cite de société ; le répertoire n'affiche donc aucun drapeau de siège.",
          "Non vérifié : l'état des versions Roformer bêta et DirectML bêta, et les conditions de licence des modèles au-delà de la mention MIT du README.",
          "Non vérifié : contenu, prix et date de sortie d'UVR 6. Ils proviennent uniquement d'annonces du fabricant, et la date peut encore changer.",
          "Non vérifié : fiches de boutiques d'applications. Aucune n'a été trouvée, et le site ne renvoie que vers la page des versions GitHub.",
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover face aux alternatives',
        itemHeadings: true,
        content: [
          "**UVR est une application de bureau locale, alors que plusieurs alternatives fonctionnent dans le navigateur ou comme services hébergés. PromptQuorum ne les a pas comparées en pratique.** Les notes ci-dessous viennent de la fiche AlternativeTo et du README d'UVR.",
        ],
        columns: ['Outil', 'Noté dans les sources'],
        rows: [
          { 'Outil': 'Ultimate Vocal Remover', 'Noté dans les sources': 'Gratuit, MIT, application de bureau pour Windows, macOS et Linux' },
          { 'Outil': 'Demucs', 'Noté dans les sources': "Famille de modèles intégrée à UVR ; le README cite ses auteurs d'origine" },
          { 'Outil': 'Spleeter', 'Noté dans les sources': 'Bibliothèque de séparation open source (MIT) en Python et TensorFlow (AlternativeTo)' },
          { 'Outil': 'moseca', 'Noté dans les sources': 'Application web gratuite open source (MIT), auto-hébergeable (AlternativeTo)' },
          { 'Outil': 'LALAL.AI', 'Noté dans les sources': 'Service de séparation propriétaire freemium (AlternativeTo)' },
          { 'Outil': 'Fadr', 'Noté dans les sources': 'Outil en ligne propriétaire freemium pour stems et MIDI (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ultimate Vocal Remover est-il gratuit ?',
            a: "Oui. L'application est gratuite et open source, et le site comme le README renvoient vers une page de dons pour ceux qui veulent soutenir le projet. Aucune offre payante n'est décrite dans les sources.",
          },
          {
            q: 'Ai-je besoin d\'une carte graphique ?',
            a: "Le README indique une NVIDIA GTX 1060 de 6 Go comme minimum pour les conversions sur GPU et recommande 8 Go de VRAM ou plus. Un test de tiers de 2023 dit que le rendu sur CPU a aussi fonctionné, mais le README ne le confirme pas.",
          },
          {
            q: "Qu'est-ce qu'UVR 6 et quand arrive-t-elle ?",
            a: "UVR 6 est une version reconstruite que le fabricant a annoncée avec une nouvelle interface et une version en ligne de commande. Le fabricant dit que Windows est prévu pour le 11 décembre 2026, macOS et Linux devant suivre. D'ici là, la version 5.6 est la version téléchargeable.",
          },
          {
            q: 'La licence MIT suffit-elle pour utiliser le résultat à des fins commerciales ?',
            a: "Pas à elle seule. Le README dit que le code de l'application est sous licence MIT et demande aux développeurs tiers qui utilisent ses modèles de mentionner UVR. Les droits sur les morceaux que vous séparez sont une question distincte que le README n'aborde pas.",
          },
          {
            q: 'Quel téléchargement est le téléchargement officiel ?',
            a: "Le site du fabricant renvoie vers la page des versions GitHub, et le README y lie les installateurs. D'autres sites et applications peuvent porter un nom proche : partez donc du site officiel ou du dépôt.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "**Ultimate Vocal Remover vaut l'essai si vous voulez une séparation de stems gratuite et locale et acceptez une interface technique et un installateur de 2023.**",
          "Sur le papier, il couvre bien l'essentiel : trois familles de modèles, une application gratuite sous licence MIT, des installateurs pour Windows et macOS et la prise en charge du GPU d'Apple Silicon pour certains modèles. Le fabricant y travaille toujours, avec une révision du README le 6 octobre 2026 et un calendrier daté pour UVR 6.",
          "Les compromis sont nets. La dernière version étiquetée date de septembre 2023, Linux demande une installation manuelle, et aucune politique de confidentialité n'a été trouvée ni aucune société nommée derrière le projet. Les besoins matériels au-delà du minimum GPU ne sont pas indiqués, et PromptQuorum n'a pas testé la qualité de séparation. Essayez-le sur quelques morceaux que vous avez le droit d'utiliser, et revérifiez le site officiel avant de compter sur UVR 6.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site web d'Ultimate Vocal Remover](https://ultimatevocalremover.com) — description du fabricant, annonce et calendrier d'UVR 6, liens de don et de contact, bannière de cookies, consulté le 18 novembre 2026.",
          "[Dépôt GitHub](https://github.com/Anjok07/ultimatevocalremovergui) — dépôt, licence, dernier commit du 6 octobre 2026, consulté le 18 novembre 2026.",
          "[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — développeurs, modèles, étapes d'installation, configuration requise, dépannage, note de licence et remerciements, consulté le 18 novembre 2026.",
          "[Version v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — date de la dernière version étiquetée et noms des fichiers d'installation, consulté le 18 novembre 2026.",
          "[Mise à jour de développement du fabricant (issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — projets d'UVR 6, date de sortie, déclaration de développeur unique, mise à jour du 18 novembre 2026, consulté le 18 novembre 2026.",
          "[Fiche AlternativeTo](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — outils alternatifs avec notes de licence et de plateforme, consulté le 18 novembre 2026.",
          "[Test de Bedroom Producers Blog](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — remarques de tiers de 2023 sur la qualité, l'usage du CPU et la difficulté, consulté le 18 novembre 2026.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils locaux de voix et d\'audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          "[Test d'Aiko](/fr/power-local-llm/aiko-review) — une application audio sur l'appareil pour Mac et iPhone.",
          "[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreux outils vocaux locaux.",
          "[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d'IA locale.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-ja.webp',
    title: 'Ultimate Vocal Remover レビュー：無料でボーカルとステムをローカル分離',
    seoTitle: 'Ultimate Vocal Remover レビュー：無料のステム分離',
    intro:
      'Ultimate Vocal Remover（UVR）は、自分のPC上で動くニューラルネットワークのモデルを使い、曲をボーカル、楽器、その他のステムに分ける無料のデスクトップアプリです。このレビューは、開発者のWebサイト、GitHubリポジトリとREADME、GitHubのリリースファイル、開発者の公開開発アップデートに基づいています。PromptQuorumはこのアプリをテストしていません。',
    metaDescription:
      'Ultimate Vocal Removerは曲をボーカルとステムに無料でPC上で分離します。対応OS、GPU要件、ライセンス、UVR 6の計画、プライバシーと未確認事項をまとめました。',
    twitterDescription:
      'Ultimate Vocal RemoverはMITライセンスの無料デスクトップアプリで、ボーカルとステムをローカルで分離します。導入、GPU要件、UVR 6の計画、未確認事項。',
    audience:
      '自分のコンピューターで曲からボーカルと楽器を分離したいミュージシャン、プロデューサー、DJ、愛好家',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'Ultimate Vocal Remover レビュー',
      'UVR5',
      'Ultimate Vocal Remover ダウンロード',
      'ローカル ボーカル除去',
      'ステム分離 ソフト',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Removerは、Windows、macOS、Linux向けのMITライセンスの無料デスクトップアプリで、音声ファイルからボーカル、楽器、ステムを自分のコンピューター上で分離します。** 最新のタグ付きリリースはバージョン5.6で、開発者は作り直したUVR 6を予告していますが、このレビューの執筆時点では未公開でした。',
    quickAnswerTop: {
      ja: {
        question: 'Ultimate Vocal Removerとは何で、誰に向いていますか？',
        answer:
          'Ultimate Vocal Removerは、MDX-Net、VR、Demucsのモデルで曲からボーカルを取り除き、音声をステムに分けるデスクトップアプリです。無料で自分のコンピューター上で動く分離ツールを求め、モデルや設定を選ぶことに抵抗がない人に向いています。',
        bullets: [
          '対応OS：Windows 10以降、macOS Big Sur以降、Linux（手動セットアップ）。',
          '価格：無料。開発者は寄付を受け付けています。',
          'ライセンス：アプリのコードはMIT。',
          'GPU：GPU変換の最低要件として、NVIDIA GTX 1060 6 GBが記載されています。',
          '開発者：Anjok07とaufr33（GitHubのハンドル名）。会社名の記載はありません。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
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
            text: 'Ultimate Vocal Removerは、自分のコンピューター上で動くニューラルネットワークのモデルを使い、曲をボーカル、楽器、その他のステムに分ける無料のデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: '自分でインストールするカラオケ・リミックス用のツールだと考えてください。音声ファイルを読み込み、モデルを選ぶと、アプリが各パートごとの音声ファイルを書き出します。READMEはこれを自分のコンピューター上での処理として説明しています。',
          },
        ],
        items: [
          'WindowsとmacOSでは、GitHubのリリースページから通常のインストーラーを入手できます。LinuxはターミナルでのPythonの手動セットアップが必要です。',
          'READMEによると、同梱モデルはコア開発者が学習したもので、Demucs v3とv4の4ステムモデルのみ例外です。',
          '最新のタグ付きリリースのv5.6は2023年9月26日のものです。リポジトリの最後のコミット（READMEの改訂）は2026年10月6日です。',
          '開発者は、新しいインターフェースで作り直したUVR 6を、Windows向けに2026年12月11日に予定し、macOSとLinuxは後に続くと述べています。',
          'PromptQuorumはこのアプリをテストしていないため、分離品質や速度については何も述べていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '曲や録音は通常、著作権で保護されています。個人の練習用にステムを分離することと、結果を公開、サンプリング、販売することは別です。共有する前に権利を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Ultimate Vocal Removerは、音声ファイルからボーカルを取り除き、楽器をステムに分離する無料のグラフィカルアプリです。**',
          'READMEはコア開発者としてAnjok07とaufr33（いずれもGitHubのハンドル名）を挙げており、開発者のWebサイトには「Anjok07」と署名されています。会社名は記載されていません。開発者はGitHubの公開アップデートで、UVRのメインコードを積極的に開発しているのは自分だけだと述べています。アプリはMDX-Net、VRアーキテクチャ、Demucsの3つのモデルファミリーを使います。READMEによると、同梱モデルはDemucs v3とv4の4ステムモデルを除き、コア開発者が学習したもので、MDX23Cの重みはZFTurboによるものとされています。',
          'バージョン5.6は最新のタグ付きリリースで、2023年9月26日に公開されました。リポジトリの最後のコミットは2026年10月6日でREADMEを改訂したものなので、最近の動きはありますが、最新のインストーラーはそれより古いものです。GitHubのリリースページには、2025年1月までにアップロードされたベータ版インストーラーもあり、「Roformer beta」という名前のmacOS向けビルドやWindows向けのDirectMLビルドが含まれます。READMEはこれらのベータ版を説明していません。',
          '開発者のWebサイトはUVR 5を現行版とし、UVR 6を予告しています。Webサイトと2026年11月18日の開発者アップデートによると、UVR 6は新しいインターフェース、モデルのダウンロードセンター、新しいモデルアーキテクチャ、アンサンブル、トラックの位置合わせやキー・テンポ変更のオーディオツール、テーマ、コマンドライン版を備えて作り直されています。開発者は、Windowsを2026年12月11日に予定し、その後にmacOSとLinuxが続くと述べ、追加テストのためにリリースを見送ったとしています。これらは予告であり、提供済みの機能ではありません。',
          'ここでの説明はすべて開発者の主張です。PromptQuorumはアプリを実行しておらず、出力を他のツールと比較していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**WindowsとmacOSでは、GitHubのリリースページのファイルからUltimate Vocal Removerをインストールします。Linuxはターミナルでの手動セットアップが必要です。**',
          '開発者のWebサイトはダウンロード先としてGitHubのリリースページへリンクしており、READMEは各ファイルへ直接リンクしています。Windowsのインストーラーについて、READMEはメインのCドライブにインストールするよう述べており、別のドライブへのインストールは動作が不安定になるとしています。macOSでは、初回起動に5〜10分かかることがあるとREADMEにあり、macOSがアプリをブロックした場合は、Appleの公証チェックを回避するTerminalコマンドが示され、その後にセキュリティ設定を元に戻すよう勧められています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '入手方法': 'インストーラー UVR_v5.6.0_setup.exe（Windows 10以降）' },
          { 'プラットフォーム': '[Windows（AMD/Intel GPU）](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '入手方法': 'DirectML版。READMEは「you can try」と記載' },
          { 'プラットフォーム': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '入手方法': 'Apple Silicon（arm64）またはIntel（x86_64）用の.dmg' },
          { 'プラットフォーム': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', '入手方法': '手動：Python venv、pip install、UVR.pyを実行' },
          { 'プラットフォーム': '[Webサイト](https://ultimatevocalremover.com)', '入手方法': '公式サイト。GitHubのリリースページへリンク' },
          { 'プラットフォーム': '[ソースコード](https://github.com/Anjok07/ultimatevocalremovergui)', '入手方法': 'GitHubリポジトリ（MIT）' },
        ],
        note: 'Webサイトにプライバシーポリシーのページは見つかりませんでした。下の未確認事項の一覧を参照してください。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**READMEはGPUの最低要件を示していますが、システムRAMやディスク容量の数値は示していません。**',
          'モデルは計算負荷が高いため、変換時間はハードウェアに大きく左右されるとあります。メモリ割り当てエラーが出た場合は、「Segment」または「Window」のサイズを下げるよう案内されています。',
        ],
        columns: ['項目', '記載されている数値'],
        rows: [
          { '項目': 'OS', '記載されている数値': 'Windows 10以降、macOS Big Sur以降、64ビットのみ' },
          { '項目': 'NVIDIA GPU', '記載されている数値': 'GTX 1060 6 GBが最低、VRAM 8 GB以上を推奨' },
          { '項目': 'AMD / Intel GPU', '記載されている数値': '限定的。DirectML版またはAMD用ブランチ' },
          { '項目': 'Apple Silicon', '記載されている数値': 'Demucs v4と全MDX-NetモデルでGPU（MPS）に対応' },
          { '項目': 'システムRAM', '記載されている数値': '記載なし' },
          { '項目': 'CPUのみでの利用', '記載されている数値': 'READMEに記載なし。2023年のレビューでは使用' },
          { '項目': '追加ツール', '記載されている数値': '非WAVはFFmpeg、音程・テンポはRubber Band' },
        ],
        note: '2023年のBedroom Producers Blogのレビューは、CPUでのレンダリングも実用的だと述べています。READMEは確認していないため、第三者の報告として扱ってください。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**UVR 5は、3つのモデルファミリーによる分離といくつかのオーディオツールが中心です。** 以下はREADMEとWebサイトにある開発者の主張です。',
        ],
        items: [
          'MDX-Net、VR、Demucsのモデルでボーカルを除去し、楽器を分離し、ステムに分けます。',
          '同梱モデルはコア開発者が学習したもの（Demucs v3とv4の4ステムモデルを除く）。',
          'タイムストレッチとピッチシフトのオプション。Rubber Bandライブラリを利用します。',
          '非WAVの音声ファイルはFFmpegで処理します。',
          '設定は終了時に記憶され、設定内の「Error Log」ボタンがバグ報告に役立ちます。',
          'Roformerのベータ版ビルドがリリースのファイル名に見られますが、READMEには説明がありません。',
          'UVR 6のみで予告：新しいインターフェース、ダウンロードセンター、新しいアーキテクチャ、アンサンブル、キーとテンポのツール、テーマ、コマンドライン版。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**READMEは自分のコンピューター上で動くプログラムとして説明しており、アカウント、アップロード、テレメトリには触れていません。**',
          'インストーラーにはインターフェース、Python、PyTorchなどの依存関係が同梱され、READMEは分離をアプリがローカルで行う処理として説明しています。READMEは、アップデートパッケージをアプリ内からダウンロードできるとも述べているため、アプリは更新のためにネットワーク要求を行うことがあります。それ以外に何に接続するかは記載がなく、プライバシーに関する声明もありません。PromptQuorumはネットワーク通信を記録していません。',
          'Webサイトは別の話です。Cookieバナーには、サイトがトラフィック分析にCookieを使うとあります。フッターにはContactのアドレスしかリンクされておらず、プライバシーポリシー、利用規約、運営者情報は見つかりませんでした。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Ultimate Vocal Removerは、自分のマシンで無料のステム分離を行いたく、多少のセットアップに対応できる人に向いています。**',
        ],
        items: [
          '個人利用のためにボーカルなしの練習用トラックやステムがほしいミュージシャンやプロデューサー。',
          'NVIDIA GPUを持ち、複数のモデルを試すのが苦にならないDJや愛好家。',
          'ホスト型のWebサービスよりダウンロードしたインストーラーを好むWindowsとmacOSのユーザー。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Ultimate Vocal Removerは一部のケースには向かず、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない人：インストーラーがほしいLinuxユーザー。READMEは手動手順のみです。',
          '向かない人：今すぐ最新ビルドがほしい人。最新のタグ付きリリースは2023年のもので、UVR 6は予告段階で未提供です。',
          '向かない人：速度が重要なのに対応GPUがないマシン。READMEはAMDのサポートを限定的としています。',
          '未確認：分離の品質と速度。PromptQuorumはテストを行っていません。2023年のBedroom Producers Blogのレビューは、出力を使えるものとしつつ、「probably isn\'t as clean and tidy as some other results you might get」と述べました。',
          '未確認：システムRAM、ディスク容量、CPUのみで使う場合の要件。',
          '未確認：アプリがアップデートのダウンロード以外でサーバーに接続するか、テレメトリを収集するか。Webサイトにはプライバシーポリシー、利用規約、運営者情報、概要ページがなく、読めるポリシーはありませんでした。',
          '未確認：開発者の所在地や法人。開発者はGitHubのハンドル名で記載されており、会社名を挙げる情報源はないため、ディレクトリには本拠地の国旗を表示していません。',
          '未確認：Roformerベータ版とDirectMLベータ版ビルドの状況、およびREADMEのMITに関する記載を超えたモデルのライセンス条件。',
          '未確認：UVR 6の内容、価格、公開日。開発者の発表のみに基づいており、日付は今後変わる可能性があります。',
          '未確認：ストアの掲載。見つからず、WebサイトはGitHubのリリースページにのみリンクしています。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Removerと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**UVRはローカルのデスクトップアプリですが、代替ツールの多くはブラウザやホスト型サービスで動きます。PromptQuorumは実際に比較していません。** 以下のメモはAlternativeToの掲載情報とUVRのREADMEに基づきます。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Ultimate Vocal Remover', '情報源での記載': '無料、MIT、Windows・macOS・Linux向けデスクトップアプリ' },
          { 'ツール': 'Demucs', '情報源での記載': 'UVRに同梱のモデルファミリー。READMEが原作者を明記' },
          { 'ツール': 'Spleeter', '情報源での記載': 'オープンソース（MIT）のPython・TensorFlow用分離ライブラリ（AlternativeTo）' },
          { 'ツール': 'moseca', '情報源での記載': '無料のオープンソース（MIT）Webアプリ、自前ホスト可（AlternativeTo）' },
          { 'ツール': 'LALAL.AI', '情報源での記載': 'プロプライエタリのフリーミアム分離サービス（AlternativeTo）' },
          { 'ツール': 'Fadr', '情報源での記載': 'プロプライエタリのフリーミアム用ステム・MIDIオンラインツール（AlternativeTo）' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ultimate Vocal Removerは無料ですか？',
            a: 'はい。アプリは無料のオープンソースで、WebサイトとREADMEはプロジェクトを支援したい人向けの寄付ページへリンクしています。情報源には有料プランの記載はありません。',
          },
          {
            q: 'グラフィックカードは必要ですか？',
            a: 'READMEはGPU変換の最低要件としてNVIDIA GTX 1060 6 GBを挙げ、VRAM 8 GB以上を推奨しています。2023年の第三者のレビューはCPUレンダリングも動いたと述べていますが、READMEは確認していません。',
          },
          {
            q: 'UVR 6とは何で、いつ登場しますか？',
            a: 'UVR 6は、開発者が新しいインターフェースとコマンドライン版を予告した作り直し版です。開発者は、Windowsを2026年12月11日に予定し、macOSとLinuxが後に続くと述べています。それまでは、バージョン5.6がダウンロードできるリリースです。',
          },
          {
            q: 'MITライセンスなら出力を商用利用できますか？',
            a: 'それだけでは判断できません。READMEは、アプリのコードがMITライセンスで、モデルを使うサードパーティ開発者にはUVRのクレジットを求めるとしています。分離する曲の権利は別の問題で、READMEは触れていません。',
          },
          {
            q: '公式のダウンロード先はどこですか？',
            a: '開発者のWebサイトはGitHubのリリースページへリンクし、READMEもそこにインストーラーをリンクしています。似た名前の他のサイトやアプリがあるかもしれないため、公式Webサイトかリポジトリから始めてください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Ultimate Vocal Removerは、無料のローカルなステム分離がほしく、技術的なインターフェースと2023年のインストーラーを受け入れられるなら試す価値があります。**',
          '紙の上では基本をよくカバーしています。3つのモデルファミリー、MITライセンスの無料アプリ、WindowsとmacOS向けのインストーラー、一部モデルでのApple SiliconのGPU対応です。開発者は引き続き取り組んでおり、2026年10月6日にREADMEを改訂し、UVR 6の日付つきの計画もあります。',
          'トレードオフははっきりしています。最新のタグ付きリリースは2023年9月のもので、Linuxは手動セットアップが必要で、プライバシーポリシーは見つからず、プロジェクトの背後にある会社名も示されていません。GPUの最低要件以外のハードウェア要件は記載がなく、PromptQuorumは分離品質をテストしていません。利用権のある数曲で試し、UVR 6に頼る前に公式サイトを再確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Ultimate Vocal Removerのウェブサイト](https://ultimatevocalremover.com) — 開発者による説明、UVR 6の予告とリリース計画、寄付・連絡先リンク、Cookieバナー。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/Anjok07/ultimatevocalremovergui) — リポジトリ、ライセンス、2026年10月6日の最後のコミット。2026年11月18日に確認。',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — 開発者、モデル、インストール手順、動作要件、トラブルシューティング、ライセンスの注記、謝辞。2026年11月18日に確認。',
          '[リリースv5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — 最新のタグ付きリリースの日付とインストーラーのファイル名。2026年11月18日に確認。',
          '[開発者の開発アップデート（issue 2399）](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — UVR 6の計画、公開日、単独開発者であるとの説明、2026年11月18日のアップデート。2026年11月18日に確認。',
          '[AlternativeToの掲載ページ](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — 代替ツールとそのライセンス・プラットフォームの注記。2026年11月18日に確認。',
          '[Bedroom Producers Blogのレビュー](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — 品質、CPU使用、難易度に関する2023年の第三者のコメント。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Aikoレビュー](/ja/power-local-llm/aiko-review) — MacとiPhone向けの端末内オーディオアプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカル音声ツールの基盤となるオープンなエンジン。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-pt.webp',
    title: 'Análise do Ultimate Vocal Remover: separação local e gratuita de vocais e stems',
    seoTitle: 'Análise do Ultimate Vocal Remover: stems grátis e locais',
    intro:
      'O Ultimate Vocal Remover (UVR) é um app de desktop gratuito que separa uma música em vocais, instrumentos e outros stems com modelos de redes neurais que rodam no seu próprio computador. Esta análise se baseia no site do fabricante, no repositório do GitHub com o README, nos arquivos das versões no GitHub e na atualização pública de desenvolvimento do fabricante. A PromptQuorum não testou o app.',
    metaDescription:
      'O Ultimate Vocal Remover separa músicas em vocais e stems de graça no PC. Plataformas, GPU, licença, planos do UVR 6, privacidade e pontos não verificados.',
    twitterDescription:
      'O Ultimate Vocal Remover é um app de desktop gratuito com licença MIT que separa vocais e stems localmente. Instalação, GPU, planos do UVR 6 e dúvidas em aberto.',
    audience:
      'Músicos, produtores, DJs e entusiastas que querem separar vocais e instrumentos de músicas no próprio computador',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'análise Ultimate Vocal Remover',
      'UVR5',
      'baixar Ultimate Vocal Remover',
      'remover vocal local',
      'software de separação de stems',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Ultimate Vocal Remover é um app de desktop gratuito com licença MIT para Windows, macOS e Linux que separa vocais, instrumentos e stems de arquivos de áudio no seu próprio computador.** A versão marcada mais recente é a 5.6, e o fabricante anunciou um UVR 6 reconstruído que ainda não tinha sido lançado quando esta análise foi escrita.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Ultimate Vocal Remover e para quem ele serve?',
        answer:
          'O Ultimate Vocal Remover é um app de desktop que remove vocais de músicas e separa o áudio em stems com modelos MDX-Net, VR e Demucs. Serve para quem quer uma ferramenta de separação gratuita, que rode no próprio computador, e se sente à vontade para escolher modelos e configurações.',
        bullets: [
          'Plataformas: Windows 10+, macOS Big Sur+, Linux (instalação manual).',
          'Preço: grátis; o fabricante aceita doações.',
          'Licença: MIT para o código do app.',
          'GPU: uma NVIDIA GTX 1060 de 6 GB é o mínimo indicado para conversões com GPU.',
          'Fabricante: os desenvolvedores indicados como Anjok07 e aufr33 (nomes do GitHub), sem empresa citada.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
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
            text: 'O Ultimate Vocal Remover é um app de desktop gratuito que separa uma música em vocais, instrumentos e outros stems com modelos de redes neurais que rodam no seu próprio computador.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma ferramenta de karaokê e remix que você mesmo instala. Você carrega um arquivo de áudio, escolhe um modelo e o app grava um arquivo de áudio para cada parte, O README descreve isso como algo que acontece no seu computador.',
          },
        ],
        items: [
          'Quem usa Windows e macOS recebe um instalador comum na página de versões do GitHub; o Linux exige uma configuração manual com Python em um terminal.',
          'Segundo o README, os desenvolvedores principais treinaram os modelos incluídos, exceto os modelos de 4 stems Demucs v3 e v4.',
          'A versão marcada mais recente, a 5.6, é de 26 de setembro de 2023; o último commit do repositório, uma revisão do README, é de 6 de outubro de 2026.',
          'O fabricante diz que o UVR 6, uma reconstrução com nova interface, está previsto para o Windows em 11 de dezembro de 2026, com macOS e Linux depois.',
          'A PromptQuorum não testou o app, então nada neste texto afirma algo sobre a qualidade ou a velocidade da separação.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Músicas e gravações costumam ser protegidas por direitos autorais. Separar stems para praticar em particular é diferente de publicar, fazer sampling ou vender o resultado, então confira os direitos antes de compartilhar qualquer coisa. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Ultimate Vocal Remover é um app gráfico gratuito que remove vocais de arquivos de áudio e separa instrumentos em stems.**',
          'O README lista Anjok07 e aufr33 como desenvolvedores principais, ambos nomes do GitHub, e o site do fabricante é assinado como "Anjok07". Nenhuma empresa é citada. Em uma atualização pública no GitHub, o fabricante diz ser a única pessoa que desenvolve ativamente o código principal do UVR. O app usa três famílias de modelos: MDX-Net, a arquitetura VR e Demucs. O README diz que os desenvolvedores principais treinaram todos os modelos incluídos, exceto os modelos de 4 stems Demucs v3 e v4, e atribui a ZFTurbo os pesos MDX23C.',
          'A versão 5.6 é a mais recente marcada e foi publicada em 26 de setembro de 2023. O último commit do repositório, de 6 de outubro de 2026, revisou o README; portanto há atividade recente, mas o instalador mais novo é mais antigo. A página de versões do GitHub também traz instaladores beta enviados até janeiro de 2025, incluindo builds para macOS chamados "Roformer beta" e um build DirectML para Windows. O README não descreve esses builds beta.',
          'O site do fabricante chama o UVR 5 de versão atual e anuncia o UVR 6. Segundo o site e a atualização do fabricante de 18 de novembro de 2026, o UVR 6 é reconstruído com nova interface, uma central de download de modelos, arquiteturas de modelos mais recentes, ensembles, ferramentas de áudio para alinhar faixas e mudar tom ou andamento, temas e uma versão de linha de comando. O fabricante diz que o Windows está previsto para 11 de dezembro de 2026, com macOS e Linux em seguida, e que segurou o lançamento para testar mais. São anúncios, não recursos entregues.',
          'Todas as descrições aqui são declarações do fabricante. A PromptQuorum não executou o app e não comparou o resultado com o de outras ferramentas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**No Windows e no macOS, você instala o Ultimate Vocal Remover pelos arquivos da página de versões do GitHub; o Linux exige configuração manual em um terminal.**',
          'O site do fabricante aponta para a página de versões do GitHub para o download, e o README linka cada arquivo diretamente. Para o instalador do Windows, o README diz para instalar no disco principal C:, porque instalar em outro disco causa instabilidade. No macOS, o README diz que a primeira inicialização pode levar de 5 a 10 minutos e, se o macOS bloquear o app, traz comandos do Terminal que contornam a verificação de notarização da Apple e orienta reativar a configuração de segurança depois.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Como obter': 'Instalador UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'Plataforma': '[Windows, GPU AMD/Intel](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Como obter': 'Build DirectML; o README diz "you can try"' },
          { 'Plataforma': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'Como obter': '.dmg para Apple Silicon (arm64) ou Intel (x86_64)' },
          { 'Plataforma': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', 'Como obter': 'Manual: venv do Python, pip install, executar UVR.py' },
          { 'Plataforma': '[Site](https://ultimatevocalremover.com)', 'Como obter': 'Site oficial; aponta para a página de versões do GitHub' },
          { 'Plataforma': '[Código-fonte](https://github.com/Anjok07/ultimatevocalremovergui)', 'Como obter': 'Repositório do GitHub (MIT)' },
        ],
        note: 'Nenhuma página de política de privacidade foi encontrada no site; veja a lista de pontos não verificados mais abaixo.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O README indica um mínimo de GPU, mas não traz números de RAM do sistema nem de disco.**',
          'Ele diz que os tempos de conversão dependem muito do seu hardware, porque os modelos exigem muito processamento. Em caso de erros de alocação de memória, aconselha reduzir o tamanho de "Segment" ou "Window".',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Sistema operacional', 'Valor informado': 'Windows 10+, macOS Big Sur+, apenas 64 bits' },
          { 'Item': 'GPU NVIDIA', 'Valor informado': 'GTX 1060 6 GB mínimo; 8 GB+ de VRAM recomendados' },
          { 'Item': 'GPU AMD / Intel', 'Valor informado': 'Limitado; build DirectML ou branch AMD' },
          { 'Item': 'Apple Silicon', 'Valor informado': 'GPU (MPS) para Demucs v4 e todos os modelos MDX-Net' },
          { 'Item': 'RAM do sistema', 'Valor informado': 'Não informada' },
          { 'Item': 'Somente CPU', 'Valor informado': 'Não consta no README; uma análise de 2023 usou' },
          { 'Item': 'Ferramentas extras', 'Valor informado': 'FFmpeg para arquivos não WAV; Rubber Band para tom/andamento' },
        ],
        note: 'A análise do Bedroom Producers Blog de 2023 diz que renderizar com a CPU é viável. O README não confirma isso; trate como relato de terceiros.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O UVR 5 se concentra na separação com três famílias de modelos e algumas ferramentas de áudio.** Os itens abaixo são declarações do fabricante, tiradas do README e do site.',
        ],
        items: [
          'Remove vocais, isola instrumentos e separa stems com modelos MDX-Net, VR e Demucs.',
          'Modelos incluídos treinados pelos desenvolvedores principais, exceto os modelos de 4 stems Demucs v3 e v4.',
          'Opções de time-stretch e de mudança de tom, que dependem da biblioteca Rubber Band.',
          'Arquivos de áudio que não são WAV são processados pelo FFmpeg.',
          'As configurações são lembradas ao fechar o app, e um botão "Error Log" nas configurações ajuda a relatar erros.',
          'Builds Roformer beta aparecem como nomes de arquivo nas versões; o README não os descreve.',
          'Anunciado apenas para o UVR 6: nova interface, central de download, arquiteturas mais recentes, ensembles, ferramentas de tom e andamento, temas e uma versão de linha de comando.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O README descreve um programa que roda no seu computador e não menciona conta, envio de arquivos nem telemetria.**',
          'Os instaladores trazem a interface, o Python, o PyTorch e as demais dependências, e o README apresenta a separação como algo que o app faz localmente. Ele também diz que um pacote de atualização pode ser baixado de dentro do app, então o app pode fazer requisições de rede para atualizações. Não informa com o que mais o app se comunica e não traz nenhuma declaração de privacidade. A PromptQuorum não capturou o tráfego de rede.',
          'O site é outro assunto. O aviso de cookies diz que o site usa cookies para analisar o tráfego. O rodapé só linka um endereço de contato, então não foi encontrada política de privacidade, página de termos nem aviso legal.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Ultimate Vocal Remover serve para quem quer separação de stems gratuita na própria máquina e aceita um pouco de configuração.**',
        ],
        items: [
          'Músicos e produtores que querem faixas de estudo sem vocal ou stems para uso privado.',
          'DJs e entusiastas com GPU NVIDIA que não se importam de testar vários modelos.',
          'Usuários de Windows e macOS que preferem um instalador baixado a um serviço web hospedado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Ultimate Vocal Remover se encaixa pior em alguns casos, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: usuários de Linux que querem um instalador. O README só oferece passos manuais.',
          'Não serve: quem quer o build mais novo agora. A versão marcada mais recente é de 2023, e o UVR 6 está anunciado, não entregue.',
          'Não serve: máquinas sem GPU compatível quando a velocidade importa. O README chama de limitado o suporte a AMD.',
          'Não verificado: qualidade e velocidade da separação. A PromptQuorum não fez testes. A análise do Bedroom Producers Blog de 2023 chamou o resultado de utilizável, mas "probably isn\'t as clean and tidy as some other results you might get".',
          'Não verificado: RAM do sistema, espaço em disco e requisitos para uso somente com CPU.',
          'Não verificado: se o app contata algum servidor além dos downloads de atualização e se coleta telemetria. O site não tem política de privacidade, termos, aviso legal nem página sobre, então nenhuma política pôde ser lida.',
          'Não verificado: localização ou entidade jurídica do fabricante. Os desenvolvedores constam por nomes do GitHub e nenhuma fonte cita uma empresa, por isso o diretório não mostra bandeira de sede.',
          'Não verificado: o estado dos builds Roformer beta e DirectML beta e os termos de licença dos modelos além da declaração MIT do README.',
          'Não verificado: conteúdo, preço e data de lançamento do UVR 6. Vêm apenas de anúncios do fabricante, e a data ainda pode mudar.',
          'Não verificado: páginas em lojas de apps. Nenhuma foi encontrada, e o site só aponta para a página de versões do GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover versus alternativas',
        itemHeadings: true,
        content: [
          '**O UVR é um app de desktop local, enquanto várias alternativas rodam no navegador ou como serviços hospedados. A PromptQuorum não as comparou na prática.** As notas abaixo vêm da página do AlternativeTo e do README do UVR.',
        ],
        columns: ['Ferramenta', 'Registrado nas fontes'],
        rows: [
          { 'Ferramenta': 'Ultimate Vocal Remover', 'Registrado nas fontes': 'Grátis, MIT, app de desktop para Windows, macOS e Linux' },
          { 'Ferramenta': 'Demucs', 'Registrado nas fontes': 'Família de modelos incluída no UVR; o README cita os autores originais' },
          { 'Ferramenta': 'Spleeter', 'Registrado nas fontes': 'Biblioteca de separação de código aberto (MIT) em Python e TensorFlow (AlternativeTo)' },
          { 'Ferramenta': 'moseca', 'Registrado nas fontes': 'App web gratuito de código aberto (MIT), hospedável por conta própria (AlternativeTo)' },
          { 'Ferramenta': 'LALAL.AI', 'Registrado nas fontes': 'Serviço de separação proprietário com modelo freemium (AlternativeTo)' },
          { 'Ferramenta': 'Fadr', 'Registrado nas fontes': 'Ferramenta online proprietária freemium de stems e MIDI (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Ultimate Vocal Remover é gratuito?',
            a: 'Sim. O app é gratuito e de código aberto, e o site e o README linkam uma página de doações para quem quiser apoiar o projeto. As fontes não descrevem nenhum plano pago.',
          },
          {
            q: 'Preciso de uma placa de vídeo?',
            a: 'O README indica uma NVIDIA GTX 1060 de 6 GB como mínimo para conversões com GPU e recomenda 8 GB de VRAM ou mais. Uma análise de terceiros de 2023 diz que renderizar com a CPU também funcionou, mas o README não confirma isso.',
          },
          {
            q: 'O que é o UVR 6 e quando ele chega?',
            a: 'O UVR 6 é uma versão reconstruída que o fabricante anunciou com nova interface e uma versão de linha de comando. O fabricante diz que o Windows está previsto para 11 de dezembro de 2026, com macOS e Linux depois. Até lá, a versão 5.6 é a disponível para download.',
          },
          {
            q: 'A licença MIT basta para usar o resultado comercialmente?',
            a: 'Não por si só. O README diz que o código do app tem licença MIT e pede que desenvolvedores externos que usam seus modelos deem crédito ao UVR. Os direitos sobre as músicas que você separa são outra questão, que o README não aborda.',
          },
          {
            q: 'Qual é o download oficial?',
            a: 'O site do fabricante aponta para a página de versões do GitHub, e o README linka os instaladores lá. Outros sites e apps podem usar um nome parecido, então comece pelo site oficial ou pelo repositório.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Ultimate Vocal Remover vale o teste se você quer separação de stems gratuita e local e aceita uma interface técnica e um instalador de 2023.**',
          'No papel, ele cobre bem o básico: três famílias de modelos, um app gratuito com licença MIT, instaladores para Windows e macOS e suporte à GPU do Apple Silicon em alguns modelos. O fabricante continua trabalhando nele, com uma revisão do README em 6 de outubro de 2026 e um plano com data para o UVR 6.',
          'As contrapartidas são claras. A versão marcada mais recente é de setembro de 2023, o Linux exige configuração manual, e não foi encontrada política de privacidade nem há empresa citada por trás do projeto. Os requisitos de hardware além do mínimo de GPU não são informados, e a PromptQuorum não testou a qualidade da separação. Teste com algumas músicas que você tem direito de usar e confira o site oficial de novo antes de depender do UVR 6.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Ultimate Vocal Remover](https://ultimatevocalremover.com) — descrição do fabricante, anúncio e plano de lançamento do UVR 6, links de doação e contato, aviso de cookies, consultado em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/Anjok07/ultimatevocalremovergui) — repositório, licença, último commit de 6 de outubro de 2026, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — desenvolvedores, modelos, passos de instalação, requisitos, solução de problemas, nota de licença e agradecimentos, consultado em 18 de novembro de 2026.',
          '[Versão v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — data da versão marcada mais recente e nomes dos arquivos de instalação, consultado em 18 de novembro de 2026.',
          '[Atualização de desenvolvimento do fabricante (issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — planos do UVR 6, data de lançamento, declaração de desenvolvedor único, atualização de 18 de novembro de 2026, consultado em 18 de novembro de 2026.',
          '[Página do AlternativeTo](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — ferramentas alternativas e notas de licença e plataforma, consultado em 18 de novembro de 2026.',
          '[Análise do Bedroom Producers Blog](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — comentários de terceiros de 2023 sobre qualidade, uso de CPU e dificuldade, consultado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para fala, fala para texto e agentes de voz lado a lado.',
          '[Análise do Aiko](/pt/power-local-llm/aiko-review) — um app de áudio no dispositivo para Mac e iPhone.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitas ferramentas de voz locais.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-zh.webp',
    title: 'Ultimate Vocal Remover 评测：免费的本地人声与音轨分离',
    seoTitle: 'Ultimate Vocal Remover 评测：免费音轨分离',
    intro:
      'Ultimate Vocal Remover（UVR）是一款免费桌面应用，使用在您自己电脑上运行的神经网络模型，把一首歌分离为人声、乐器和其他音轨。本评测基于开发者的网站、GitHub 仓库与 README、GitHub 发布文件以及开发者公开的开发进展说明。PromptQuorum 没有测试过这款应用。',
    metaDescription:
      'Ultimate Vocal Remover 免费在您的电脑上把歌曲分离为人声和音轨。支持的系统、GPU 要求、许可证、UVR 6 计划、隐私情况以及未核实的内容。',
    twitterDescription:
      'Ultimate Vocal Remover 是采用 MIT 许可证的免费桌面应用，可在本地分离人声和音轨。安装方式、GPU 要求、UVR 6 计划与未决问题。',
    audience:
      '想在自己电脑上从歌曲中分离人声和乐器的音乐人、制作人、DJ 和爱好者',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'Ultimate Vocal Remover 评测',
      'UVR5',
      'Ultimate Vocal Remover 下载',
      '本地人声消除',
      '音轨分离软件',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover 是一款采用 MIT 许可证、适用于 Windows、macOS 和 Linux 的免费桌面应用，可在您自己的电脑上从音频文件中分离人声、乐器和音轨。** 它最新的带标签版本是 5.6，开发者已宣布重构的 UVR 6，但在撰写本评测时尚未发布。',
    quickAnswerTop: {
      zh: {
        question: 'Ultimate Vocal Remover 是什么，适合谁用？',
        answer:
          'Ultimate Vocal Remover 是一款桌面应用，使用 MDX-Net、VR 和 Demucs 模型从歌曲中去除人声，并把音频分离为音轨。它适合想要免费、可在自己电脑上运行的分离工具，并且愿意自己选择模型和设置的用户。',
        bullets: [
          '平台：Windows 10+、macOS Big Sur+、Linux（手动安装）。',
          '价格：免费；开发者接受捐赠。',
          '许可证：应用代码采用 MIT。',
          'GPU：GPU 转换的最低要求是 NVIDIA GTX 1060 6 GB。',
          '开发者：列为 Anjok07 和 aufr33（GitHub 用户名），未提及公司。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
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
            text: 'Ultimate Vocal Remover 是一款免费桌面应用，使用在您自己电脑上运行的神经网络模型，把一首歌分离为人声、乐器和其他音轨。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个需要自己安装的卡拉 OK 和混音工具。您载入音频文件、选择模型，应用会为每个部分输出单独的音频文件，README 把这描述为在您电脑上完成的处理。',
          },
        ],
        items: [
          'Windows 和 macOS 用户可从 GitHub 发布页获取常规安装程序；Linux 需要在终端中手动配置 Python 环境。',
          '根据 README，随附模型由核心开发者训练，Demucs v3 和 v4 的 4 音轨模型除外。',
          '最新的带标签版本 v5.6 发布于 2023 年 9 月 26 日；仓库最近一次提交（对 README 的修订）在 2026 年 10 月 6 日。',
          '开发者表示，重构后带新界面的 UVR 6 计划于 2026 年 12 月 11 日先发布 Windows 版，macOS 和 Linux 随后推出。',
          'PromptQuorum 没有测试过这款应用，因此本文对分离质量或速度不做任何说明。',
        ],
        callouts: [
          {
            type: 'note',
            text: '歌曲和录音通常受版权保护。为个人练习分离音轨，与发布、采样或出售分离结果是两回事，分享任何内容之前请先确认权利。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Ultimate Vocal Remover 是一款免费的图形界面应用，可从音频文件中去除人声，并把乐器分离为音轨。**',
          'README 把 Anjok07 和 aufr33（均为 GitHub 用户名）列为核心开发者，开发者网站署名为“Anjok07”，未提及任何公司。开发者在 GitHub 的公开更新中表示，他是唯一在积极开发 UVR 主代码的人。应用使用三类模型：MDX-Net、VR 架构和 Demucs。README 称，除 Demucs v3 和 v4 的 4 音轨模型外，所有随附模型均由核心开发者训练，并把 MDX23C 权重归功于 ZFTurbo。',
          '5.6 版是最新的带标签版本，发布于 2023 年 9 月 26 日。仓库最近一次提交在 2026 年 10 月 6 日，内容是修订 README，因此近期有活动，但最新的安装程序更早。GitHub 发布页还有截至 2025 年 1 月上传的测试版安装程序，包括名为“Roformer beta”的 macOS 构建和一个 Windows 的 DirectML 构建。README 没有介绍这些测试版构建。',
          '开发者网站把 UVR 5 称为当前版本，并预告 UVR 6。根据网站和开发者 2026 年 11 月 18 日的更新，UVR 6 经过重构，带有新界面、模型下载中心、更新的模型架构、集成（ensemble）、用于对齐音轨和更改调性或速度的音频工具、主题以及命令行版本。开发者表示，Windows 版计划于 2026 年 12 月 11 日发布，macOS 和 Linux 随后推出，并称他为了更多测试而推迟了发布。这些都是预告，并非已提供的功能。',
          '这里的所有描述均为开发者的说法。PromptQuorum 没有运行过这款应用，也没有把它的输出与其他工具比较。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**Windows 和 macOS 用户通过 GitHub 发布页上的文件安装 Ultimate Vocal Remover；Linux 需要在终端中手动配置。**',
          '开发者网站把下载链接指向 GitHub 发布页，README 则直接链接每个文件。对于 Windows 安装程序，README 要求安装到主 C: 盘，因为装到其他盘会导致不稳定。在 macOS 上，README 称首次启动可能需要 5 到 10 分钟；如果 macOS 阻止应用运行，它给出了绕过苹果公证检查的终端命令，并建议之后重新启用该安全设置。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '获取方式': '安装程序 UVR_v5.6.0_setup.exe（Windows 10+）' },
          { '平台': '[Windows，AMD/Intel GPU](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '获取方式': 'DirectML 构建；README 称“you can try”' },
          { '平台': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '获取方式': 'Apple 芯片（arm64）或 Intel（x86_64）的 .dmg' },
          { '平台': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', '获取方式': '手动：Python venv、pip install、运行 UVR.py' },
          { '平台': '[官方网站](https://ultimatevocalremover.com)', '获取方式': '官方站点；链接到 GitHub 发布页' },
          { '平台': '[源代码](https://github.com/Anjok07/ultimatevocalremovergui)', '获取方式': 'GitHub 仓库（MIT）' },
        ],
        note: '网站上没有找到隐私政策页面；请见下方未核实内容清单。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**README 给出了 GPU 的最低要求，但没有给出系统内存或磁盘空间的数字。**',
          '它说，由于模型计算量大，转换时间在很大程度上取决于您的硬件。遇到内存分配错误时，建议调低“Segment”或“Window”的大小。',
        ],
        columns: ['项目', '给出的数字'],
        rows: [
          { '项目': '操作系统', '给出的数字': 'Windows 10+、macOS Big Sur+，仅限 64 位' },
          { '项目': 'NVIDIA GPU', '给出的数字': '最低 GTX 1060 6 GB；推荐 8 GB 以上显存' },
          { '项目': 'AMD / Intel GPU', '给出的数字': '支持有限；DirectML 构建或 AMD 分支' },
          { '项目': 'Apple 芯片', '给出的数字': 'Demucs v4 和所有 MDX-Net 模型支持 GPU（MPS）' },
          { '项目': '系统内存', '给出的数字': '未说明' },
          { '项目': '仅用 CPU', '给出的数字': 'README 未说明；2023 年的评测使用过' },
          { '项目': '额外工具', '给出的数字': '非 WAV 需 FFmpeg；变调/变速需 Rubber Band' },
        ],
        note: '2023 年 Bedroom Producers Blog 的评测称用 CPU 渲染是可行的。README 并未确认这一点，请视为第三方的说法。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**UVR 5 的核心是用三类模型做分离，外加几个音频工具。** 以下均为 README 和网站中开发者的说法。',
        ],
        items: [
          '使用 MDX-Net、VR 和 Demucs 模型去除人声、分离乐器并拆分音轨。',
          '随附模型由核心开发者训练，Demucs v3 和 v4 的 4 音轨模型除外。',
          '时间拉伸和变调选项，依赖 Rubber Band 库。',
          '非 WAV 音频文件通过 FFmpeg 处理。',
          '关闭应用时会记住设置，设置中的“Error Log”按钮有助于提交错误报告。',
          'Roformer 测试版构建只在发布文件名中出现；README 没有介绍。',
          '仅为 UVR 6 预告：新界面、下载中心、更新的架构、集成、调性和速度工具、主题以及命令行版本。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**README 把它描述为在您电脑上运行的程序，没有提到账号、上传或遥测。**',
          '安装程序打包了界面、Python、PyTorch 和其他依赖，README 把分离描述为应用在本地完成的工作。README 还说可以在应用内下载更新包，因此应用可能为更新发出网络请求。它没有说明应用还会联系什么，也没有给出隐私声明。PromptQuorum 没有抓取网络流量。',
          '网站是另一回事。它的 Cookie 提示称网站使用 Cookie 分析流量。页脚只链接了一个联系地址，因此没有找到隐私政策、条款页面或公司信息页。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Ultimate Vocal Remover 适合想在自己的机器上免费分离音轨、并能应付一些配置工作的人。**',
        ],
        items: [
          '想为个人使用获得无人声练习伴奏或音轨的音乐人和制作人。',
          '拥有 NVIDIA GPU、乐于尝试多个模型的 DJ 和爱好者。',
          '更喜欢下载安装程序而不是托管网络服务的 Windows 和 macOS 用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Ultimate Vocal Remover 在某些情况下不太合适，还有若干细节尚未核实。**',
        ],
        items: [
          '不适合：想要安装程序的 Linux 用户。README 只提供手动步骤。',
          '不适合：现在就想用最新构建的人。最新的带标签版本是 2023 年的，UVR 6 只是预告，尚未发布。',
          '不适合：没有受支持 GPU、又在意速度的机器。README 称对 AMD 的支持有限。',
          '未核实：分离质量和速度。PromptQuorum 没有做测试。2023 年 Bedroom Producers Blog 的评测称输出可用，但“probably isn\'t as clean and tidy as some other results you might get”。',
          '未核实：系统内存、磁盘空间以及仅用 CPU 时的要求。',
          '未核实：除下载更新外，应用是否联系其他服务器，是否收集遥测数据。网站没有隐私政策、条款、公司信息或关于页面，因此无法阅读任何政策。',
          '未核实：开发者的所在地或法律实体。开发者以 GitHub 用户名列出，没有来源提到公司，因此目录不显示总部国旗。',
          '未核实：Roformer 测试版和 DirectML 测试版构建的状态，以及 README 的 MIT 声明之外的模型许可条款。',
          '未核实：UVR 6 的内容、价格和发布日期。这些仅来自开发者的公告，日期仍可能变动。',
          '未核实：应用商店页面。没有找到，网站只链接到 GitHub 发布页。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover 与替代方案对比',
        itemHeadings: true,
        content: [
          '**UVR 是本地桌面应用，而不少替代方案在浏览器中或作为托管服务运行。PromptQuorum 没有实际对比过它们。** 以下说明来自 AlternativeTo 的条目和 UVR 的 README。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Ultimate Vocal Remover', '来源中的记载': '免费、MIT、适用于 Windows、macOS 和 Linux 的桌面应用' },
          { '工具': 'Demucs', '来源中的记载': 'UVR 随附的模型系列；README 注明了原作者' },
          { '工具': 'Spleeter', '来源中的记载': '开源（MIT）的 Python 和 TensorFlow 分离库（AlternativeTo）' },
          { '工具': 'moseca', '来源中的记载': '免费开源（MIT）网页应用，可自行托管（AlternativeTo）' },
          { '工具': 'LALAL.AI', '来源中的记载': '专有的免费增值分离服务（AlternativeTo）' },
          { '工具': 'Fadr', '来源中的记载': '专有的免费增值在线音轨与 MIDI 工具（AlternativeTo）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ultimate Vocal Remover 免费吗？',
            a: '是的。应用免费且开源，网站和 README 都链接了捐赠页面，供想支持项目的人使用。来源中没有提到任何付费方案。',
          },
          {
            q: '需要独立显卡吗？',
            a: 'README 把 NVIDIA GTX 1060 6 GB 列为 GPU 转换的最低要求，并推荐 8 GB 或更多显存。2023 年一篇第三方评测称用 CPU 渲染也行得通，但 README 并未确认。',
          },
          {
            q: 'UVR 6 是什么，什么时候发布？',
            a: 'UVR 6 是开发者宣布的重构版本，带有新界面和命令行版本。开发者表示，Windows 版计划于 2026 年 12 月 11 日发布，macOS 和 Linux 随后推出。在此之前，可下载的是 5.6 版。',
          },
          {
            q: 'MIT 许可证足以让我把输出用于商业用途吗？',
            a: '仅凭它不够。README 称应用代码采用 MIT 许可证，并请使用其模型的第三方开发者署名 UVR。您所分离歌曲的权利是另一个问题，README 没有涉及。',
          },
          {
            q: '哪个下载才是官方的？',
            a: '开发者网站链接到 GitHub 发布页，README 也在那里链接了安装程序。其他网站和应用可能使用相似的名称，因此请从官方网站或仓库开始。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要免费的本地音轨分离，并且能接受技术味较重的界面和2023 年的安装程序，Ultimate Vocal Remover 值得一试。**',
          '从纸面上看，它把基础功能做得不错：三类模型、免费且采用 MIT 许可证的应用、Windows 和 macOS 的安装程序，以及部分模型对 Apple 芯片 GPU 的支持。开发者仍在继续开发，2026 年 10 月 6 日修订了 README，并给出了带日期的 UVR 6 计划。',
          '取舍也很明显。最新的带标签版本是 2023 年 9 月的，Linux 需要手动配置，没有找到隐私政策，项目背后也没有具名公司。除 GPU 最低要求外的硬件需求未说明，PromptQuorum 也没有测试分离质量。请先用几首您有权使用的歌曲试试，并在依赖 UVR 6 之前再次查看官方网站。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Ultimate Vocal Remover 网站](https://ultimatevocalremover.com) — 开发者的描述、UVR 6 公告与发布计划、捐赠和联系链接、Cookie 提示，2026 年 11 月 18 日查阅。',
          '[GitHub 仓库](https://github.com/Anjok07/ultimatevocalremovergui) — 仓库、许可证、2026 年 10 月 6 日的最近提交，2026 年 11 月 18 日查阅。',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — 开发者、模型、安装步骤、系统要求、故障排除、许可证说明和致谢，2026 年 11 月 18 日查阅。',
          '[发布 v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — 最新带标签版本的日期和安装程序文件名，2026 年 11 月 18 日查阅。',
          '[开发者的开发进展说明（issue 2399）](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — UVR 6 计划、发布日期、唯一开发者的说明、2026 年 11 月 18 日的更新，2026 年 11 月 18 日查阅。',
          '[AlternativeTo 条目](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — 替代工具及其许可证和平台说明，2026 年 11 月 18 日查阅。',
          '[Bedroom Producers Blog 评测](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — 2023 年第三方对质量、CPU 使用和上手难度的评论，2026 年 11 月 18 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音智能体并排对比。',
          '[Aiko 评测](/zh/power-local-llm/aiko-review) — 适用于 Mac 和 iPhone 的设备端音频应用。',
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地语音工具背后的开源引擎。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-ar.webp',
    title: 'مراجعة Ultimate Vocal Remover: فصل محلي ومجاني للصوت الغنائي والمسارات',
    seoTitle: 'مراجعة Ultimate Vocal Remover: أداة مجانية لفصل المسارات',
    intro:
      'Ultimate Vocal Remover (اختصارًا UVR) تطبيق سطح مكتب مجاني يفصل الأغنية إلى صوت غنائي وآلات ومسارات أخرى باستخدام نماذج شبكات عصبية تعمل على جهازك. تستند هذه المراجعة إلى موقع الجهة المطوّرة ومستودع GitHub وملف README وملفات الإصدارات على GitHub والتحديث التطويري العلني الذي نشره المطوّر. لم تختبر PromptQuorum التطبيق.',
    metaDescription:
      'يفصل Ultimate Vocal Remover الأغاني إلى صوت غنائي ومسارات مجانًا على حاسوبك. المنصات ومتطلبات GPU والترخيص وخطط UVR 6 والخصوصية وما لم نتحقق منه.',
    twitterDescription:
      'Ultimate Vocal Remover تطبيق سطح مكتب مجاني بترخيص MIT يفصل الصوت الغنائي والمسارات محليًا. التثبيت ومتطلبات GPU وخطط UVR 6 والأسئلة المفتوحة.',
    audience:
      'الموسيقيون والمنتجون ومشغّلو الأسطوانات (DJ) والهواة الذين يريدون فصل الصوت الغنائي والآلات عن الأغاني على حاسوبهم',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'مراجعة Ultimate Vocal Remover',
      'UVR5',
      'تنزيل Ultimate Vocal Remover',
      'إزالة الصوت الغنائي محليًا',
      'برنامج فصل المسارات',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover تطبيق سطح مكتب مجاني بترخيص MIT لأنظمة Windows وmacOS وLinux، يفصل الصوت الغنائي والآلات والمسارات عن ملفات الصوت على حاسوبك.** أحدث إصدار موسوم هو 5.6، وقد أعلن المطوّر عن UVR 6 المُعاد بناؤه، ولم يكن قد صدر عند كتابة هذه المراجعة.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Ultimate Vocal Remover ولمن هو؟',
        answer:
          'Ultimate Vocal Remover تطبيق سطح مكتب يزيل الصوت الغنائي من الأغاني ويفصل الصوت إلى مسارات بنماذج MDX-Net وVR وDemucs. يناسب من يريد أداة فصل مجانية تعمل على جهازك، ولا يمانع اختيار النماذج والإعدادات.',
        bullets: [
          'المنصات: Windows 10 فما فوق، وmacOS Big Sur فما فوق، وLinux (إعداد يدوي).',
          'السعر: مجاني؛ ويقبل المطوّر التبرعات.',
          'الترخيص: MIT لشيفرة التطبيق.',
          'GPU: بطاقة NVIDIA GTX 1060 بسعة 6 GB هي الحد الأدنى المذكور لتحويلات GPU.',
          'المطوّر: المطوّران المذكوران باسمي Anjok07 وaufr33 (اسما GitHub)، ولا تُذكر شركة.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'البدائل', anchor: 'alternatives' },
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
            text: 'Ultimate Vocal Remover تطبيق سطح مكتب مجاني يفصل الأغنية إلى صوت غنائي وآلات ومسارات أخرى باستخدام نماذج شبكات عصبية تعمل على حاسوبك.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كأداة كاريوكي وريميكس تثبّتها بنفسك. تحمّل ملف صوت وتختار نموذجًا، فيكتب التطبيق ملف صوت منفصلًا لكل جزء، ويصف README ذلك بأنه يتم على حاسوبك.',
          },
        ],
        items: [
          'يحصل مستخدمو Windows وmacOS على مثبّت عادي من صفحة الإصدارات على GitHub؛ أما Linux فيتطلب إعدادًا يدويًا لـ Python في الطرفية.',
          'بحسب README، درّب المطوّرون الرئيسيون النماذج المرفقة، باستثناء نماذج Demucs v3 وv4 ذات المسارات الأربعة.',
          'أحدث إصدار موسوم، v5.6، صدر في 26 سبتمبر 2023؛ وآخر commit في المستودع، وهو مراجعة لملف README، كان في 6 أكتوبر 2026.',
          'يقول المطوّر إن UVR 6، وهو إعادة بناء بواجهة جديدة، مخطط له على Windows في 11 ديسمبر 2026، على أن يلحق به macOS وLinux.',
          'لم تختبر PromptQuorum التطبيق، لذا لا يتضمن هذا النص أي ادعاء عن جودة الفصل أو سرعته.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الأغاني والتسجيلات محمية عادةً بحقوق النشر. فصل المسارات للتدرّب الخاص يختلف عن نشر النتيجة أو أخذ عيّنات منها أو بيعها، فتحقق من الحقوق قبل مشاركة أي شيء. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Ultimate Vocal Remover تطبيق رسومي مجاني يزيل الصوت الغنائي من ملفات الصوت ويفصل الآلات إلى مسارات.**',
          'يذكر README أن المطوّرين الرئيسيين هما Anjok07 وaufr33، وكلاهما اسم على GitHub، وموقع المطوّر موقَّع باسم «Anjok07». لا تُذكر أي شركة. وفي تحديث علني على GitHub يقول المطوّر إنه الشخص الوحيد الذي يطوّر شيفرة UVR الرئيسية بنشاط. يستخدم التطبيق ثلاث عائلات من النماذج: MDX-Net ومعمارية VR وDemucs. ويقول README إن المطوّرين الرئيسيين درّبوا جميع النماذج المرفقة عدا نماذج Demucs v3 وv4 ذات المسارات الأربعة، وينسب أوزان MDX23C إلى ZFTurbo.',
          'الإصدار 5.6 هو أحدث إصدار موسوم، وقد نُشر في 26 سبتمبر 2023. أما آخر commit في المستودع، في 6 أكتوبر 2026، فقد راجع README، لذا فهناك نشاط حديث لكن أحدث مثبّت أقدم من ذلك. وتضم صفحة الإصدارات على GitHub أيضًا مثبّتات تجريبية رُفعت حتى يناير 2025، منها نسخ macOS باسم «Roformer beta» ونسخة DirectML لنظام Windows. لا يصف README هذه النسخ التجريبية.',
          'يصف موقع المطوّر UVR 5 بأنه الإصدار الحالي ويعلن عن UVR 6. ووفق الموقع وتحديث المطوّر في 18 نوفمبر 2026، يُعاد بناء UVR 6 بواجهة جديدة ومركز لتنزيل النماذج ومعماريات نماذج أحدث ودمج النماذج (ensemble) وأدوات صوتية لمحاذاة المسارات وتغيير السلّم أو الإيقاع وسمات ونسخة بسطر الأوامر. ويقول المطوّر إن Windows مخطط له في 11 ديسمبر 2026 على أن يلحق به macOS وLinux، وإنه أخّر الإصدار لمزيد من الاختبار. هذه إعلانات وليست ميزات مُسلَّمة.',
          'جميع الأوصاف هنا هي أقوال المطوّر. لم تشغّل PromptQuorum التطبيق ولم تقارن مخرجاته بأدوات أخرى.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يثبّت مستخدمو Windows وmacOS تطبيق Ultimate Vocal Remover من الملفات الموجودة في صفحة الإصدارات على GitHub؛ أما Linux فيتطلب إعدادًا يدويًا في الطرفية.**',
          'يشير موقع المطوّر إلى صفحة الإصدارات على GitHub للتنزيل، ويربط README كل ملف مباشرة. بالنسبة إلى مثبّت Windows، يقول README بالتثبيت على القرص الرئيسي C:، لأن التثبيت على قرص ثانوي يسبب عدم استقرار. وعلى macOS يقول README إن أول تشغيل قد يستغرق من 5 إلى 10 دقائق، وإذا منع macOS التطبيق فإنه يعرض أوامر Terminal تتجاوز فحص التوثيق (notarization) من Apple، وينصح بإعادة تفعيل إعداد الأمان بعد ذلك.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'كيفية الحصول عليه': 'المثبّت UVR_v5.6.0_setup.exe (Windows 10+)' },
          { 'المنصة': '[Windows، بطاقة AMD/Intel](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'كيفية الحصول عليه': 'نسخة DirectML؛ يقول README "you can try"' },
          { 'المنصة': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', 'كيفية الحصول عليه': 'ملف .dmg لـ Apple Silicon (arm64) أو Intel (x86_64)' },
          { 'المنصة': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', 'كيفية الحصول عليه': 'يدويًا: بيئة Python venv ثم pip install وتشغيل UVR.py' },
          { 'المنصة': '[الموقع](https://ultimatevocalremover.com)', 'كيفية الحصول عليه': 'الموقع الرسمي؛ يشير إلى صفحة إصدارات GitHub' },
          { 'المنصة': '[الشيفرة المصدرية](https://github.com/Anjok07/ultimatevocalremovergui)', 'كيفية الحصول عليه': 'مستودع GitHub (MIT)' },
        ],
        note: 'لم تُعثر على صفحة سياسة خصوصية في الموقع؛ راجع قائمة ما لم يُتحقق منه أدناه.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يذكر README حدًا أدنى لبطاقة GPU، لكنه لا يذكر رقمًا لذاكرة النظام أو لمساحة القرص.**',
          'ويقول إن أزمنة التحويل تعتمد كثيرًا على عتادك لأن النماذج مكلفة حسابيًا. وعند حدوث أخطاء تخصيص الذاكرة ينصح بخفض حجم «Segment» أو «Window».',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'نظام التشغيل', 'القيمة المذكورة': 'Windows 10+ وmacOS Big Sur+، و64 بت فقط' },
          { 'البند': 'بطاقة NVIDIA', 'القيمة المذكورة': 'GTX 1060 6 GB كحد أدنى؛ يُوصى بـ 8 GB+ من VRAM' },
          { 'البند': 'بطاقة AMD / Intel', 'القيمة المذكورة': 'دعم محدود؛ نسخة DirectML أو فرع AMD' },
          { 'البند': 'Apple Silicon', 'القيمة المذكورة': 'GPU (MPS) لـ Demucs v4 وكل نماذج MDX-Net' },
          { 'البند': 'ذاكرة النظام', 'القيمة المذكورة': 'غير مذكورة' },
          { 'البند': 'الاستخدام بالمعالج فقط', 'القيمة المذكورة': 'غير مذكور في README؛ استخدمته مراجعة 2023' },
          { 'البند': 'أدوات إضافية', 'القيمة المذكورة': 'FFmpeg لملفات غير WAV؛ Rubber Band للنغمة/الإيقاع' },
        ],
        note: 'تقول مراجعة Bedroom Producers Blog لعام 2023 إن المعالجة بالـ CPU ممكنة عمليًا. لا يؤكد README ذلك، فاعتبره تقريرًا من طرف ثالث.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يتمحور UVR 5 حول الفصل بثلاث عائلات من النماذج مع بضع أدوات صوتية.** البنود التالية أقوال المطوّر من README والموقع.',
        ],
        items: [
          'يزيل الصوت الغنائي ويعزل الآلات ويفصل المسارات بنماذج MDX-Net وVR وDemucs.',
          'نماذج مرفقة دربها المطوّرون الرئيسيون، عدا نماذج Demucs v3 وv4 ذات المسارات الأربعة.',
          'خيارا تمديد الزمن وتغيير النغمة، وهما يعتمدان على مكتبة Rubber Band.',
          'تُعالَج ملفات الصوت غير WAV عبر FFmpeg.',
          'تُحفظ الإعدادات عند إغلاق التطبيق، ويساعد زر «Error Log» في الإعدادات على الإبلاغ عن الأخطاء.',
          'تظهر نسخ Roformer التجريبية كأسماء ملفات في الإصدارات؛ ولا يصفها README.',
          'معلَن لـ UVR 6 فقط: واجهة جديدة ومركز تنزيل ومعماريات أحدث ودمج النماذج وأدوات للسلّم والإيقاع وسمات ونسخة بسطر الأوامر.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يصف README برنامجًا يعمل على حاسوبك، ولا يذكر حسابًا أو رفعًا للملفات أو قياسًا عن بُعد.**',
          'تضم المثبّتات الواجهة وPython وPyTorch وبقية التبعيات، ويعرض README الفصل بوصفه عملًا يؤديه التطبيق محليًا. ويقول أيضًا إنه يمكن تنزيل حزمة تحديث من داخل التطبيق، فقد يرسل التطبيق طلبات شبكة للتحديثات. ولا يذكر ما الذي يتصل به التطبيق أيضًا، ولا يقدّم بيانًا عن الخصوصية. لم تلتقط PromptQuorum حركة الشبكة.',
          'الموقع أمر مختلف. يقول إشعار ملفات تعريف الارتباط فيه إن الموقع يستخدمها لتحليل الزيارات. ولا يربط التذييل إلا بعنوان اتصال، فلم تُعثر على سياسة خصوصية ولا صفحة شروط ولا بيانات قانونية.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Ultimate Vocal Remover من يريد فصل مسارات مجانيًا على جهازه ويستطيع التعامل مع بعض الإعداد.**',
        ],
        items: [
          'الموسيقيون والمنتجون الذين يريدون مسارات تدريب بلا صوت غنائي أو مسارات منفصلة للاستخدام الخاص.',
          'مشغّلو DJ والهواة الذين يملكون بطاقة NVIDIA ولا يمانعون تجربة عدة نماذج.',
          'مستخدمو Windows وmacOS الذين يفضّلون مثبّتًا يُنزَّل على خدمة ويب مستضافة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**Ultimate Vocal Remover أقل ملاءمة في بعض الحالات، وتبقى تفاصيل عدة غير متحقَّق منها.**',
        ],
        items: [
          'غير مناسب: مستخدمو Linux الذين يريدون مثبّتًا. لا يقدّم README سوى خطوات يدوية.',
          'غير مناسب: من يريد أحدث نسخة الآن. أحدث إصدار موسوم يعود إلى 2023، وUVR 6 معلَن وليس مُسلَّمًا.',
          'غير مناسب: الأجهزة التي بلا بطاقة GPU مدعومة حين تهمّ السرعة. يصف README دعم AMD بأنه محدود.',
          'غير متحقَّق منه: جودة الفصل وسرعته. لم تجرِ PromptQuorum أي اختبار. وصفت مراجعة Bedroom Producers Blog لعام 2023 المخرجات بأنها صالحة للاستخدام، لكنها "probably isn\'t as clean and tidy as some other results you might get".',
          'غير متحقَّق منه: ذاكرة النظام ومساحة القرص ومتطلبات الاستخدام بالمعالج فقط.',
          'غير متحقَّق منه: هل يتصل التطبيق بأي خادم غير تنزيلات التحديث، وهل يجمع قياسًا عن بُعد. لا يملك الموقع سياسة خصوصية ولا شروطًا ولا بيانات قانونية ولا صفحة تعريفية، فلم يمكن قراءة أي سياسة.',
          'غير متحقَّق منه: موقع المطوّر أو كيانه القانوني. المطوّران مذكوران باسمي حسابين على GitHub ولا يذكر أي مصدر شركة، لذا لا يعرض الدليل علمًا للمقر.',
          'غير متحقَّق منه: حالة نسختي Roformer التجريبية وDirectML التجريبية، وشروط ترخيص النماذج بما يتجاوز إشارة README إلى MIT.',
          'غير متحقَّق منه: محتوى UVR 6 وسعره وموعد صدوره. فهي من إعلانات المطوّر فقط، وقد يتغيّر الموعد.',
          'غير متحقَّق منه: صفحات المتاجر. لم يُعثر على أي منها، ولا يشير الموقع إلا إلى صفحة إصدارات GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover مقابل البدائل',
        itemHeadings: true,
        content: [
          '**UVR تطبيق سطح مكتب محلي، بينما تعمل عدة بدائل في المتصفح أو كخدمات مستضافة. لم تقارنها PromptQuorum عمليًا.** الملاحظات أدناه مأخوذة من صفحة AlternativeTo ومن README الخاص بـ UVR.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Ultimate Vocal Remover', 'المذكور في المصادر': 'مجاني، MIT، تطبيق سطح مكتب لـ Windows وmacOS وLinux' },
          { 'الأداة': 'Demucs', 'المذكور في المصادر': 'عائلة نماذج مرفقة في UVR؛ يذكر README مؤلفيها الأصليين' },
          { 'الأداة': 'Spleeter', 'المذكور في المصادر': 'مكتبة فصل مفتوحة المصدر (MIT) بـ Python وTensorFlow (AlternativeTo)' },
          { 'الأداة': 'moseca', 'المذكور في المصادر': 'تطبيق ويب مجاني مفتوح المصدر (MIT) يمكن استضافته ذاتيًا (AlternativeTo)' },
          { 'الأداة': 'LALAL.AI', 'المذكور في المصادر': 'خدمة فصل مملوكة بنموذج مجاني جزئيًا (AlternativeTo)' },
          { 'الأداة': 'Fadr', 'المذكور في المصادر': 'أداة مملوكة على الإنترنت للمسارات وMIDI بنموذج مجاني جزئيًا (AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Ultimate Vocal Remover مجاني؟',
            a: 'نعم. التطبيق مجاني ومفتوح المصدر، ويربط الموقع وREADME بصفحة تبرعات لمن يريد دعم المشروع. ولا تصف المصادر أي خطة مدفوعة.',
          },
          {
            q: 'هل أحتاج إلى بطاقة رسومات؟',
            a: 'يذكر README بطاقة NVIDIA GTX 1060 بسعة 6 GB كحد أدنى لتحويلات GPU ويوصي بـ 8 GB من VRAM أو أكثر. وتقول مراجعة من طرف ثالث لعام 2023 إن المعالجة بالـ CPU نجحت أيضًا، لكن README لا يؤكد ذلك.',
          },
          {
            q: 'ما هو UVR 6 ومتى يصدر؟',
            a: 'UVR 6 نسخة معاد بناؤها أعلن عنها المطوّر بواجهة جديدة ونسخة بسطر الأوامر. ويقول المطوّر إن Windows مخطط له في 11 ديسمبر 2026 على أن يلحق به macOS وLinux. وحتى ذلك الحين يبقى الإصدار 5.6 هو المتاح للتنزيل.',
          },
          {
            q: 'هل يكفي ترخيص MIT لاستخدام المخرجات تجاريًا؟',
            a: 'لا يكفي وحده. يقول README إن شيفرة التطبيق بترخيص MIT ويطلب من المطوّرين الخارجيين الذين يستخدمون نماذجه ذكر UVR. أما حقوق الأغاني التي تفصلها فمسألة منفصلة لا يتناولها README.',
          },
          {
            q: 'ما هو التنزيل الرسمي؟',
            a: 'يشير موقع المطوّر إلى صفحة الإصدارات على GitHub، ويربط README المثبّتات هناك. قد تستخدم مواقع وتطبيقات أخرى اسمًا مشابهًا، لذا ابدأ من الموقع الرسمي أو من المستودع.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Ultimate Vocal Remover التجربة إن كنت تريد فصل مسارات مجانيًا ومحليًا وتقبل واجهة تقنية ومثبّتًا يعود إلى 2023.**',
          'على الورق يغطي الأساسيات جيدًا: ثلاث عائلات من النماذج، وتطبيق مجاني بترخيص MIT، ومثبّتات لـ Windows وmacOS، ودعم GPU لـ Apple Silicon في بعض النماذج. ولا يزال المطوّر يعمل عليه، مع مراجعة لـ README في 6 أكتوبر 2026 وخطة مؤرَّخة لـ UVR 6.',
          'المفاضلات واضحة. أحدث إصدار موسوم يعود إلى سبتمبر 2023، وLinux يتطلب إعدادًا يدويًا، ولم تُعثر على سياسة خصوصية، ولا توجد شركة مذكورة وراء المشروع. ومتطلبات العتاد بعد الحد الأدنى لـ GPU غير مذكورة، ولم تختبر PromptQuorum جودة الفصل. جرّبه على أغانٍ يحق لك استخدامها، وأعد مراجعة الموقع الرسمي قبل أن تعتمد على UVR 6.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Ultimate Vocal Remover](https://ultimatevocalremover.com) — وصف المطوّر وإعلان UVR 6 وخطة الإصدار وروابط التبرع والاتصال وإشعار ملفات تعريف الارتباط، اطُّلع عليه في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/Anjok07/ultimatevocalremovergui) — المستودع والترخيص وآخر commit في 6 أكتوبر 2026، اطُّلع عليه في 18 نوفمبر 2026.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — المطوّرون والنماذج وخطوات التثبيت والمتطلبات واستكشاف الأخطاء وملاحظة الترخيص والشكر، اطُّلع عليه في 18 نوفمبر 2026.',
          '[الإصدار v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — تاريخ أحدث إصدار موسوم وأسماء ملفات المثبّتات، اطُّلع عليه في 18 نوفمبر 2026.',
          '[التحديث التطويري للمطوّر (issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — خطط UVR 6 وموعد الإصدار وإفادة المطوّر الوحيد وتحديث 18 نوفمبر 2026، اطُّلع عليه في 18 نوفمبر 2026.',
          '[صفحة AlternativeTo](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — الأدوات البديلة وملاحظات الترخيص والمنصات، اطُّلع عليه في 18 نوفمبر 2026.',
          '[مراجعة Bedroom Producers Blog](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — تعليقات طرف ثالث لعام 2023 عن الجودة واستخدام CPU وصعوبة الاستخدام، اطُّلع عليه في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Aiko](/ar/power-local-llm/aiko-review) — تطبيق صوتي يعمل على الجهاز لأجهزة Mac وiPhone.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح وراء كثير من أدوات الكلام المحلية.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ultimate-vocal-remover-review-hero-ko.webp',
    title: 'Ultimate Vocal Remover 리뷰: 무료 로컬 보컬·스템 분리',
    seoTitle: 'Ultimate Vocal Remover 리뷰: 무료 스템 분리',
    intro:
      'Ultimate Vocal Remover(UVR)는 사용자의 컴퓨터에서 실행되는 신경망 모델로 노래를 보컬, 악기, 기타 스템으로 나누는 무료 데스크톱 앱입니다. 이 리뷰는 제작자의 웹사이트, GitHub 저장소와 README, GitHub 릴리스 파일, 제작자의 공개 개발 업데이트를 바탕으로 합니다. PromptQuorum은 이 앱을 테스트하지 않았습니다.',
    metaDescription:
      'Ultimate Vocal Remover는 노래를 보컬과 스템으로 PC에서 무료로 분리합니다. 지원 플랫폼, GPU 요구 사항, 라이선스, UVR 6 계획, 개인정보와 미확인 사항.',
    twitterDescription:
      'Ultimate Vocal Remover는 MIT 라이선스의 무료 데스크톱 앱으로 보컬과 스템을 로컬에서 분리합니다. 설치, GPU 요구 사항, UVR 6 계획, 미확인 사항.',
    audience:
      '자신의 컴퓨터에서 노래의 보컬과 악기를 분리하고 싶은 뮤지션, 프로듀서, DJ, 애호가',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Ultimate Vocal Remover',
    targetKeywords: [
      'Ultimate Vocal Remover 리뷰',
      'UVR5',
      'Ultimate Vocal Remover 다운로드',
      '로컬 보컬 제거',
      '스템 분리 소프트웨어',
      'UVR 6',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Ultimate Vocal Remover는 Windows, macOS, Linux용 MIT 라이선스 무료 데스크톱 앱으로, 오디오 파일에서 보컬, 악기, 스템을 사용자의 컴퓨터에서 분리합니다.** 가장 최신 태그 릴리스는 5.6 버전이며, 제작자는 새로 만든 UVR 6을 예고했지만 이 리뷰를 쓸 때는 아직 출시되지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Ultimate Vocal Remover란 무엇이며 누구에게 적합합니까?',
        answer:
          'Ultimate Vocal Remover는 MDX-Net, VR, Demucs 모델로 노래에서 보컬을 제거하고 오디오를 스템으로 나누는 데스크톱 앱입니다. 무료이면서 자신의 컴퓨터에서 실행되는 분리 도구를 원하고, 모델과 설정을 직접 고르는 데 부담이 없는 분께 적합합니다.',
        bullets: [
          '플랫폼: Windows 10 이상, macOS Big Sur 이상, Linux(수동 설정).',
          '가격: 무료이며 제작자는 후원을 받습니다.',
          '라이선스: 앱 코드는 MIT입니다.',
          'GPU: GPU 변환의 최소 사양으로 NVIDIA GTX 1060 6 GB가 명시되어 있습니다.',
          '제작자: Anjok07과 aufr33(GitHub 계정 이름)이며 회사명은 나와 있지 않습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
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
            text: 'Ultimate Vocal Remover는 사용자의 컴퓨터에서 실행되는 신경망 모델로 노래를 보컬, 악기, 기타 스템으로 나누는 무료 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '직접 설치해서 쓰는 노래방·리믹스 도구라고 생각하시면 됩니다. 오디오 파일을 불러와 모델을 고르면, 앱이 각 파트별 오디오 파일을 만들어 줍니다. README는 이를 사용자의 컴퓨터에서 이루어지는 처리로 설명합니다.',
          },
        ],
        items: [
          'Windows와 macOS 사용자는 GitHub 릴리스 페이지에서 일반 설치 파일을 받을 수 있고, Linux는 터미널에서 Python을 수동으로 설정해야 합니다.',
          'README에 따르면 번들 모델은 핵심 개발자가 학습시켰으며, Demucs v3와 v4의 4스템 모델만 예외입니다.',
          '최신 태그 릴리스 v5.6은 2023년 9월 26일에 나왔고, 저장소의 마지막 커밋(README 수정)은 2026년 10월 6일입니다.',
          '제작자는 새 인터페이스로 다시 만든 UVR 6을 Windows용으로 2026년 12월 11일에 내놓을 계획이며 macOS와 Linux가 뒤따른다고 말합니다.',
          'PromptQuorum은 앱을 테스트하지 않았으므로, 이 글은 분리 품질이나 속도에 대해 어떤 주장도 하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '노래와 녹음은 대개 저작권으로 보호됩니다. 개인 연습용으로 스템을 분리하는 것과 결과물을 공개하거나 샘플링하거나 판매하는 것은 다릅니다. 무언가를 공유하기 전에 권리를 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Ultimate Vocal Remover는 오디오 파일에서 보컬을 제거하고 악기를 스템으로 분리하는 무료 그래픽 앱입니다.**',
          'README는 핵심 개발자로 Anjok07과 aufr33(둘 다 GitHub 계정 이름)을 들고 있고, 제작자의 웹사이트에는 "Anjok07"이라고 서명되어 있습니다. 회사명은 나와 있지 않습니다. 제작자는 GitHub의 공개 업데이트에서 UVR 메인 코드를 적극적으로 개발하는 사람이 자신뿐이라고 말합니다. 앱은 MDX-Net, VR 아키텍처, Demucs의 세 모델 계열을 사용합니다. README는 Demucs v3와 v4의 4스템 모델을 제외한 모든 번들 모델을 핵심 개발자가 학습시켰다고 밝히고, MDX23C 가중치는 ZFTurbo의 것이라고 적고 있습니다.',
          '5.6 버전은 가장 최신 태그 릴리스로 2023년 9월 26일에 공개되었습니다. 저장소의 마지막 커밋은 2026년 10월 6일이며 README를 수정한 것이므로, 최근 활동은 있지만 가장 최신 설치 파일은 그보다 오래되었습니다. GitHub 릴리스 페이지에는 2025년 1월까지 올라온 베타 설치 파일도 있는데, "Roformer beta"라는 이름의 macOS 빌드와 Windows용 DirectML 빌드가 포함됩니다. README는 이 베타 빌드를 설명하지 않습니다.',
          '제작자의 웹사이트는 UVR 5를 현재 릴리스로 소개하고 UVR 6을 예고합니다. 웹사이트와 2026년 11월 18일 제작자 업데이트에 따르면, UVR 6은 새 인터페이스, 모델 다운로드 센터, 더 새로운 모델 아키텍처, 앙상블, 트랙 정렬과 키·템포 변경용 오디오 도구, 테마, 명령줄 버전을 갖추어 다시 만들어지고 있습니다. 제작자는 Windows를 2026년 12월 11일로 계획하고 그 뒤에 macOS와 Linux가 이어진다고 하며, 추가 테스트를 위해 출시를 미뤘다고 말합니다. 이는 예고일 뿐 제공 중인 기능이 아닙니다.',
          '여기의 모든 설명은 제작자의 주장입니다. PromptQuorum은 앱을 실행하지 않았고 출력을 다른 도구와 비교하지도 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Windows와 macOS에서는 GitHub 릴리스 페이지의 파일로 Ultimate Vocal Remover를 설치하며, Linux는 터미널에서 수동으로 설정해야 합니다.**',
          '제작자의 웹사이트는 다운로드를 위해 GitHub 릴리스 페이지로 연결하고, README는 각 파일을 직접 링크합니다. Windows 설치 파일의 경우 README는 주 드라이브인 C:에 설치하라고 하며, 보조 드라이브에 설치하면 불안정해진다고 합니다. macOS에서는 첫 실행에 5~10분이 걸릴 수 있다고 하며, macOS가 앱을 차단하면 Apple의 공증 검사를 우회하는 Terminal 명령을 안내하고 이후 보안 설정을 다시 켜라고 권합니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[Windows](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '받는 방법': '설치 파일 UVR_v5.6.0_setup.exe (Windows 10 이상)' },
          { '플랫폼': '[Windows, AMD/Intel GPU](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '받는 방법': 'DirectML 빌드. README는 "you can try"라고 표기' },
          { '플랫폼': '[macOS](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6)', '받는 방법': 'Apple Silicon(arm64) 또는 Intel(x86_64)용 .dmg' },
          { '플랫폼': '[Linux](https://github.com/Anjok07/ultimatevocalremovergui#readme)', '받는 방법': '수동: Python venv, pip install, UVR.py 실행' },
          { '플랫폼': '[웹사이트](https://ultimatevocalremover.com)', '받는 방법': '공식 사이트. GitHub 릴리스 페이지로 연결' },
          { '플랫폼': '[소스 코드](https://github.com/Anjok07/ultimatevocalremovergui)', '받는 방법': 'GitHub 저장소(MIT)' },
        ],
        note: '웹사이트에서 개인정보 처리방침 페이지를 찾지 못했습니다. 아래 미확인 목록을 참고하십시오.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**README는 GPU 최소 사양을 밝히지만 시스템 RAM이나 디스크 용량 수치는 제시하지 않습니다.**',
          '모델이 연산량이 많아 변환 시간이 하드웨어에 크게 좌우된다고 합니다. 메모리 할당 오류가 나면 "Segment" 또는 "Window" 크기를 낮추라고 안내합니다.',
        ],
        columns: ['항목', '제시된 수치'],
        rows: [
          { '항목': '운영체제', '제시된 수치': 'Windows 10 이상, macOS Big Sur 이상, 64비트 전용' },
          { '항목': 'NVIDIA GPU', '제시된 수치': 'GTX 1060 6 GB 최소, VRAM 8 GB 이상 권장' },
          { '항목': 'AMD / Intel GPU', '제시된 수치': '제한적. DirectML 빌드 또는 AMD 브랜치' },
          { '항목': 'Apple Silicon', '제시된 수치': 'Demucs v4와 모든 MDX-Net 모델에서 GPU(MPS) 지원' },
          { '항목': '시스템 RAM', '제시된 수치': '명시되지 않음' },
          { '항목': 'CPU만 사용', '제시된 수치': 'README에 없음. 2023년 리뷰에서 사용' },
          { '항목': '추가 도구', '제시된 수치': '비WAV는 FFmpeg, 음높이·템포는 Rubber Band' },
        ],
        note: '2023년 Bedroom Producers Blog 리뷰는 CPU 렌더링도 현실적이라고 말합니다. README는 이를 확인하지 않으므로 제3자의 보고로 받아들이십시오.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**UVR 5는 세 가지 모델 계열을 이용한 분리와 몇 가지 오디오 도구가 중심입니다.** 아래 항목은 README와 웹사이트에 나온 제작자의 주장입니다.',
        ],
        items: [
          'MDX-Net, VR, Demucs 모델로 보컬을 제거하고 악기를 분리하며 스템으로 나눕니다.',
          '번들 모델은 핵심 개발자가 학습시켰습니다(Demucs v3와 v4의 4스템 모델 제외).',
          '타임 스트레치와 피치 시프트 옵션이 있으며 Rubber Band 라이브러리를 사용합니다.',
          '비WAV 오디오 파일은 FFmpeg로 처리합니다.',
          '앱을 닫을 때 설정이 기억되며, 설정의 "Error Log" 버튼이 버그 보고에 도움이 됩니다.',
          'Roformer 베타 빌드가 릴리스 파일 이름에 나타나지만 README에는 설명이 없습니다.',
          'UVR 6에 한해 예고됨: 새 인터페이스, 다운로드 센터, 더 새로운 아키텍처, 앙상블, 키·템포 도구, 테마, 명령줄 버전.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**README는 사용자의 컴퓨터에서 실행되는 프로그램으로 설명하며, 계정, 업로드, 텔레메트리는 언급하지 않습니다.**',
          '설치 파일에는 인터페이스, Python, PyTorch 등 의존성이 번들로 들어 있고, README는 분리를 앱이 로컬에서 처리하는 작업으로 소개합니다. 또한 앱 안에서 업데이트 패키지를 내려받을 수 있다고 하므로, 앱이 업데이트를 위해 네트워크 요청을 보낼 수 있습니다. 그 밖에 앱이 무엇에 접속하는지는 나와 있지 않고, 개인정보 보호에 관한 설명도 없습니다. PromptQuorum은 네트워크 트래픽을 캡처하지 않았습니다.',
          '웹사이트는 별개의 문제입니다. 쿠키 배너에는 사이트가 트래픽 분석에 쿠키를 사용한다고 되어 있습니다. 푸터에는 연락처 주소만 링크되어 있어, 개인정보 처리방침, 이용 약관, 사업자 정보를 찾지 못했습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Ultimate Vocal Remover는 자신의 컴퓨터에서 무료로 스템을 분리하고 싶고 약간의 설정을 감당할 수 있는 분께 맞습니다.**',
        ],
        items: [
          '개인 용도로 보컬 없는 연습 트랙이나 스템이 필요한 뮤지션과 프로듀서.',
          'NVIDIA GPU가 있고 여러 모델을 시험해 보는 것을 마다하지 않는 DJ와 애호가.',
          '호스팅되는 웹 서비스보다 내려받는 설치 파일을 선호하는 Windows와 macOS 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Ultimate Vocal Remover는 일부 경우에는 덜 맞으며, 여러 세부 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '적합하지 않음: 설치 파일을 원하는 Linux 사용자. README는 수동 절차만 제공합니다.',
          '적합하지 않음: 지금 당장 가장 최신 빌드를 원하는 분. 최신 태그 릴리스는 2023년 것이고 UVR 6은 예고 단계이며 제공되지 않았습니다.',
          '적합하지 않음: 속도가 중요한데 지원되는 GPU가 없는 컴퓨터. README는 AMD 지원이 제한적이라고 합니다.',
          '미확인: 분리 품질과 속도. PromptQuorum은 테스트를 하지 않았습니다. 2023년 Bedroom Producers Blog 리뷰는 결과물을 쓸 만하다고 평가하면서도 "probably isn\'t as clean and tidy as some other results you might get"라고 했습니다.',
          '미확인: 시스템 RAM, 디스크 용량, CPU만 사용할 때의 요구 사항.',
          '미확인: 앱이 업데이트 다운로드 외에 서버에 접속하는지, 텔레메트리를 수집하는지. 웹사이트에는 개인정보 처리방침, 이용 약관, 사업자 정보, 소개 페이지가 없어 읽을 수 있는 정책이 없었습니다.',
          '미확인: 제작자의 소재지나 법인. 개발자는 GitHub 계정 이름으로 기재되어 있으며 회사를 밝힌 출처가 없어, 디렉터리에는 본사 국기를 표시하지 않았습니다.',
          '미확인: Roformer 베타와 DirectML 베타 빌드의 상태, 그리고 README의 MIT 언급을 넘어선 모델 라이선스 조건.',
          '미확인: UVR 6의 내용, 가격, 출시일. 제작자의 발표에만 근거하며 날짜는 앞으로 바뀔 수 있습니다.',
          '미확인: 스토어 등록 정보. 찾지 못했으며 웹사이트는 GitHub 릴리스 페이지로만 연결됩니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Ultimate Vocal Remover와 대안 비교',
        itemHeadings: true,
        content: [
          '**UVR은 로컬 데스크톱 앱인 반면, 여러 대안은 브라우저나 호스팅 서비스로 동작합니다. PromptQuorum은 이들을 직접 비교하지 않았습니다.** 아래 메모는 AlternativeTo 목록과 UVR README에 근거합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Ultimate Vocal Remover', '출처에 기재된 내용': '무료, MIT, Windows·macOS·Linux용 데스크톱 앱' },
          { '도구': 'Demucs', '출처에 기재된 내용': 'UVR에 번들된 모델 계열. README가 원저자를 명시' },
          { '도구': 'Spleeter', '출처에 기재된 내용': '오픈 소스(MIT) Python·TensorFlow 분리 라이브러리(AlternativeTo)' },
          { '도구': 'moseca', '출처에 기재된 내용': '무료 오픈 소스(MIT) 웹 앱, 자체 호스팅 가능(AlternativeTo)' },
          { '도구': 'LALAL.AI', '출처에 기재된 내용': '독점 프리미엄(freemium) 분리 서비스(AlternativeTo)' },
          { '도구': 'Fadr', '출처에 기재된 내용': '독점 프리미엄 온라인 스템·MIDI 도구(AlternativeTo)' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ultimate Vocal Remover는 무료입니까?',
            a: '예. 앱은 무료 오픈 소스이며, 웹사이트와 README는 프로젝트를 후원하려는 분을 위한 후원 페이지를 링크합니다. 출처에는 유료 요금제가 나와 있지 않습니다.',
          },
          {
            q: '그래픽 카드가 필요합니까?',
            a: 'README는 GPU 변환의 최소 사양으로 NVIDIA GTX 1060 6 GB를 제시하고 VRAM 8 GB 이상을 권장합니다. 2023년의 제3자 리뷰는 CPU 렌더링도 동작했다고 하지만, README는 이를 확인하지 않습니다.',
          },
          {
            q: 'UVR 6이란 무엇이며 언제 나옵니까?',
            a: 'UVR 6은 제작자가 새 인터페이스와 명령줄 버전과 함께 예고한, 다시 만든 버전입니다. 제작자는 Windows를 2026년 12월 11일로 계획하고 macOS와 Linux가 뒤따른다고 말합니다. 그때까지는 5.6 버전이 내려받을 수 있는 릴리스입니다.',
          },
          {
            q: 'MIT 라이선스면 출력물을 상업적으로 써도 됩니까?',
            a: '그것만으로는 충분하지 않습니다. README는 앱 코드가 MIT 라이선스이며, 모델을 쓰는 외부 개발자에게 UVR 크레딧을 요청한다고 밝힙니다. 분리하는 노래의 권리는 별개의 문제이며 README는 다루지 않습니다.',
          },
          {
            q: '공식 다운로드는 어느 것입니까?',
            a: '제작자의 웹사이트는 GitHub 릴리스 페이지로 연결되고, README도 그곳에 설치 파일을 링크합니다. 비슷한 이름을 쓰는 다른 사이트나 앱이 있을 수 있으므로 공식 웹사이트나 저장소에서 시작하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**무료 로컬 스템 분리를 원하고 기술적인 인터페이스와 2023년의 설치 파일을 받아들일 수 있다면 Ultimate Vocal Remover는 써 볼 만합니다.**',
          '서류상으로는 기본을 잘 갖추고 있습니다. 세 가지 모델 계열, MIT 라이선스의 무료 앱, Windows와 macOS용 설치 파일, 일부 모델에서의 Apple Silicon GPU 지원이 그렇습니다. 제작자는 계속 작업 중이며, 2026년 10월 6일에 README를 수정했고 날짜가 명시된 UVR 6 계획도 있습니다.',
          '절충점은 분명합니다. 최신 태그 릴리스는 2023년 9월 것이고, Linux는 수동 설정이 필요하며, 개인정보 처리방침을 찾지 못했고, 프로젝트 뒤에 명시된 회사도 없습니다. GPU 최소 사양 이외의 하드웨어 요구 사항은 나와 있지 않고, PromptQuorum은 분리 품질을 테스트하지 않았습니다. 사용 권한이 있는 노래 몇 곡으로 시험해 보시고, UVR 6에 의존하기 전에 공식 사이트를 다시 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ultimate Vocal Remover 웹사이트](https://ultimatevocalremover.com) — 제작자의 설명, UVR 6 발표와 출시 계획, 후원·연락처 링크, 쿠키 배너. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/Anjok07/ultimatevocalremovergui) — 저장소, 라이선스, 2026년 10월 6일의 마지막 커밋. 2026년 11월 18일 확인.',
          '[README](https://github.com/Anjok07/ultimatevocalremovergui#readme) — 개발자, 모델, 설치 절차, 요구 사항, 문제 해결, 라이선스 메모, 감사의 글. 2026년 11월 18일 확인.',
          '[릴리스 v5.6](https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6) — 최신 태그 릴리스 날짜와 설치 파일 이름. 2026년 11월 18일 확인.',
          '[제작자의 개발 업데이트(issue 2399)](https://github.com/Anjok07/ultimatevocalremovergui/issues/2399) — UVR 6 계획, 출시일, 단독 개발자라는 설명, 2026년 11월 18일 업데이트. 2026년 11월 18일 확인.',
          '[AlternativeTo 목록](https://alternativeto.net/software/ultimate-vocal-remover-gui/) — 대안 도구와 라이선스·플랫폼 메모. 2026년 11월 18일 확인.',
          '[Bedroom Producers Blog 리뷰](https://bedroomproducersblog.com/2023/07/25/ultimate-vocal-remover/) — 품질, CPU 사용, 난이도에 관한 2023년 제3자의 평. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교.',
          '[Aiko 리뷰](/ko/power-local-llm/aiko-review) — Mac과 iPhone용 기기 내 오디오 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 음성 도구의 바탕이 되는 오픈 엔진.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
