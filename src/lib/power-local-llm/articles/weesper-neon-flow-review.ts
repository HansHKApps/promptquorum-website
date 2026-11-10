// Weesper Neon Flow Review: offline push-to-talk dictation for Mac and Windows
// Slug: weesper-neon-flow-review
// Companion to: handy-review, macwhisper-review, fluidvoice-review, openwhispr-review, local-llm-voice-audio-compared
// Facts verified 2026-11-06 against weesperneonflow.ai (home, download, changelog, privacy, terms) and GitHub Releases direct-v1.8.12 (2026-10-28).
// Not hands-on tested. Stale-project warning is OFF (9 days since the last update on 2026-11-06).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-en.webp',
    title: 'Weesper Neon Flow Review: Offline Dictation for Mac and Windows',
    seoTitle: 'Weesper Neon Flow Review: Offline Dictation App',
    intro: "Weesper Neon Flow is a paid, closed-source dictation app for Mac and Windows: you hold a shortcut, speak, and it types the cleaned-up text into whatever app has the cursor, running OpenAI's Whisper model on your own computer. This review covers what the maker's website, changelog and privacy policy document, where those pages disagree, and how it compares with other dictation tools in the directory.",
    metaDescription: 'Weesper Neon Flow review: Whisper dictation for Mac and Windows that, per its maker, runs on your PC. 15-day trial, then 5 EUR a month. Not tested.',
    twitterDescription: 'Weesper Neon Flow review: push-to-talk dictation for Mac and Windows with Whisper on your own computer. Price, privacy, limits and alternatives.',
    audience: 'Mac and Windows users who want to dictate into any app without sending their voice to a cloud service — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'weesper neon flow review',
      'weesper neon flow',
      'offline dictation app mac windows',
      'local whisper dictation',
      'voice dictation without cloud',
      'private speech to text desktop',
      'whisper dictation app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Weesper Neon Flow is a closed-source dictation app for Mac and Windows that runs OpenAI's Whisper model on your own computer, and its maker says audio and dictated text never leave the machine.** It costs 5 EUR a month, 45 EUR a year or 99 EUR once after a 15-day free trial. The newest release is version 1.8.12 from 28 October 2026. This review rests on the maker's public website, changelog and privacy policy and on its GitHub release page, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Weesper Neon Flow a local dictation app?',
        answer: 'According to its maker, yes: speech recognition runs on your Mac or Windows PC with Whisper, and audio, transcripts and dictated text are not sent to the maker\'s servers. The internet is still used for downloading the app and speech models, license checks, billing, updates and optional diagnostics. The code is closed, and PromptQuorum did not inspect network traffic, so the claim is the maker\'s own.',
        bullets: [
          'Hold a shortcut, speak, release: the cleaned-up text appears at the cursor in apps such as Gmail, Slack, Notion or Word.',
          'Pricing: 15-day free trial with all features, then 5 EUR a month, 45 EUR a year or 99 EUR once.',
          'Four speech profiles from Minimal (about 75 MB) to Large (3.2 GB); Small (512 MB) is the default.',
          'Mac (macOS 13 or newer) and Windows 10 or 11 only; no Linux, iPhone or Android version.',
          "The maker's pages disagree on whether the internet is required and on what the free plan after the trial includes.",
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Weesper Neon Flow', anchor: 'get-it' },
      { label: 'Weesper Neon Flow at a Glance', anchor: 'at-a-glance' },
      { label: 'What Weesper Neon Flow Is', anchor: 'what-is-weesper' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Weesper Neon Flow', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Weesper Neon Flow', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flow is a paid dictation app for Mac and Windows that, per its maker, runs Whisper on your own computer instead of a cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a microphone key that types for you: hold the shortcut, talk, let go, and your computer turns the speech into text without sending the audio to the maker.',
          },
        ],
        items: [
          'Local claim: speech recognition runs on the device with Whisper; downloads, license checks, billing, updates and optional diagnostics still use the internet.',
          'License and maker: proprietary, published by THE BLUE HOUSE (SASU) in Paris; the linked GitHub repository only hosts release installers.',
          'Price: 15-day free trial, then 5 EUR a month, 45 EUR a year or 99 EUR once, with a 7-day money-back guarantee.',
          'Maintenance: version 1.8.12 was released on 28 October 2026, so the project is actively updated.',
          'Gaps: no Linux or mobile version, and the maker\'s own pages contradict each other on the free plan and on needing internet.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Get Weesper Neon Flow',
        content: [
          '**Weesper Neon Flow installs like any desktop app, so no terminal is needed.** Download the installer for your system from the official site; the speech models are fetched inside the app.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 or newer, Apple Silicon or Intel with AVX2',
          },
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 build 19041 or newer or Windows 11, x64 with AVX2',
          },
          {
            Platform: 'Free trial (15 days)',
            'Get It': '[Start the trial](https://weesperneonflow.ai/en/#pricing) — all features, no credit card',
          },
          {
            Platform: 'Release notes',
            'Get It': '[Changelog](https://weesperneonflow.ai/en/changelog/) and [GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            Platform: 'Website',
            'Get It': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Weesper Neon Flow privacy policy](https://weesperneonflow.ai/en/privacy)',
          },
          {
            Platform: 'Source code',
            'Get It': 'Closed source; the GitHub repository hosts release installers only',
          },
        ],
        note: 'The download page lists macOS and Windows only; no Linux, iOS or Android build is offered.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow at a Glance',
        columns: ['Attribute', 'Weesper Neon Flow'],
        rows: [
          { Attribute: 'Platform', 'Weesper Neon Flow': 'macOS 13+ and Windows 10/11' },
          { Attribute: 'Price', 'Weesper Neon Flow': '15-day trial, then 5 EUR/month, 45 EUR/year or 99 EUR once' },
          { Attribute: 'License', 'Weesper Neon Flow': 'Proprietary, closed source' },
          { Attribute: 'Runs', 'Weesper Neon Flow': 'On your computer with Whisper (whisper.cpp); internet for downloads and license checks' },
          { Attribute: 'Languages', 'Weesper Neon Flow': '50+ with automatic detection (the download page says 55+)' },
          { Attribute: 'Speaker labels', 'Weesper Neon Flow': 'Yes, in Meeting mode (changelog 1.7.5)' },
          { Attribute: 'Real-time transcription', 'Weesper Neon Flow': 'Not stated; text is inserted when you release the shortcut' },
          { Attribute: 'Usable on CPU only', 'Weesper Neon Flow': 'Not stated; a modern multi-core CPU is the recommended baseline' },
          { Attribute: 'Local API server', 'Weesper Neon Flow': 'Not stated' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'What Weesper Neon Flow Is',
        content: [
          '**Weesper Neon Flow is a push-to-talk dictation app, not a transcription editor.** You hold a keyboard shortcut, speak, and release; the app runs Whisper on the computer and inserts cleaned-up text at the cursor, for example in Gmail, Slack, Notion or Word.',
          'The maker is THE BLUE HOUSE (SASU), based in Paris, and the About page says the product was founded in 2024. It also sells a separate product, Weesper Transcribe, for audio and video files; this review covers only the dictation app.',
          'This review draws on the website, changelog, privacy policy, terms and the GitHub release page. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a shortcut.** The steps follow the website and its changelog.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the .dmg for Mac or the .msi for Windows from the [download page](https://weesperneonflow.ai/en/download/) and start the 15-day trial; no credit card is needed.',
          },
          {
            title: 'Pick a speech profile',
            whyItMatters: 'The default Small profile is 512 MB. The changelog says dictation works on a bundled model while the recommended one downloads.',
          },
          {
            title: 'Hold, speak, release',
            whyItMatters: 'Click into any text field, hold the dictation shortcut, speak, and let go. A press-to-toggle mode was added in version 1.7.6.',
          },
          {
            title: 'Tune the output',
            whyItMatters: 'Add words to the custom dictionary, set text shortcuts, and try the contextual and custom prompts the site lists.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on fast, private dictation into any app.** Everything below comes from the website and changelog.',
        ],
        items: [
          '**Dictation anywhere.** Text is inserted at the cursor in any app that accepts typing.',
          '**Clean-up.** Automatic removal of filler words, plus smart punctuation and capitalization.',
          '**Languages.** More than 50 languages with automatic detection, and speaking in one language to get text in another.',
          '**Meeting mode.** Speaker diarization was added in version 1.7.5.',
          '**Personalization.** A custom dictionary, text shortcuts, contextual prompts, custom prompts and a dictation history.',
          '**Microphone standby.** Since version 1.7.10 the app no longer keeps the microphone open between dictations.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**The app runs Whisper through whisper.cpp, with four speech profiles.** The FAQ and changelog name Minimal (about 75 MB), Small (512 MB, the default), Medium (1.5 GB) and Large (3.2 GB), plus a Precision profile that was formerly called Turbo.',
          'The download page lists a minimum of 4 GB RAM and 8 GB or more as recommended. On the Mac, an Apple Silicon M1 or newer with Metal is recommended; on Windows, a modern multi-core CPU or a supported Vulkan GPU. Both platforms need a processor with AVX2. The FAQ cites about 600 MB of disk space with the Small model. No speed or accuracy figures were reproduced here.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says speech recognition runs locally and that audio, transcripts, dictated text and clipboard contents are not sent to Weesper servers for transcription.** The policy was last updated on 23 July 2026. The terms add that the application operates 100% locally.',
          'The internet is still involved elsewhere: downloads of the app and speech models, license activation and checks through a licensing service hosted on Cloudflare, billing through Stripe, update metadata from GitHub, and optional product analytics (PostHog) and crash diagnostics (Sentry). The policy says analytics events do not include audio, transcripts or dictated text. The code is closed and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'It is a paid, proprietary product: a 15-day free trial, then 5 EUR a month, 45 EUR a year or 99 EUR once, with a 7-day money-back guarantee. A personal license covers up to three of your own computers. The site does not say clearly whether prices include VAT, so check at checkout. The free plan after the trial is described two ways: 1,500 words a week in the FAQ and short clips of up to 60 seconds in the changelog.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Whisper on your computer',
            'What it means in real use': 'Dictation is processed on the machine, with no audio upload for transcription.',
            'Limitation / caveat': 'Closed source, so the claim cannot be checked; internet is still used for licensing and downloads.',
          },
          {
            Benefit: 'Dictate into any app',
            'What it means in real use': 'One shortcut works in email, chat, notes and documents.',
            'Limitation / caveat': 'Mac and Windows only; no Linux, iPhone or Android version.',
          },
          {
            Benefit: 'Lifetime option',
            'What it means in real use': 'A 99 EUR one-time purchase avoids a subscription.',
            'Limitation / caveat': 'Monthly and annual plans are the default; a free plan after the trial is described inconsistently.',
          },
          {
            Benefit: 'Four speech profiles',
            'What it means in real use': 'Small and light models for older machines, larger ones for accuracy.',
            'Limitation / caveat': 'Large needs 3.2 GB of disk and more RAM; no speed figures are published.',
          },
          {
            Benefit: 'Meeting mode with speakers',
            'What it means in real use': 'Speaker diarization is documented in the changelog.',
            'Limitation / caveat': 'Not tested here; the site gives no accuracy details.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 1.8.12 shipped on 28 October 2026.',
            'Limitation / caveat': 'Some pages, such as About, still carry older wording.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow vs. Alternatives',
        content: [
          'These are the closest dictation tools in the directory: a free open-source app for three desktop systems, a Mac transcription app with dictation, a free Mac-only dictation app and a hybrid open-source app.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Weesper Neon Flow',
            Platforms: 'Mac, Windows',
            'Price and license': 'Trial, then 5 EUR/month or 99 EUR once, proprietary',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Whisper on the device; paid and closed source',
          },
          {
            App: '[Handy](/power-local-llm/handy-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Open source and free; adds Linux',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac transcription app',
            'Key difference': 'Built for files and meetings first; Mac only',
          },
          {
            App: '[FluidVoice](/power-local-llm/fluidvoice-review)',
            Platforms: 'Mac',
            'Price and license': 'Free, GPL-3.0',
            Role: 'Mac dictation app',
            'Key difference': 'Free and open source; Mac only',
          },
          {
            App: '[OpenWhispr](/power-local-llm/openwhispr-review)',
            Platforms: 'Mac, Windows, Linux, iOS',
            'Price and license': 'Freemium, MIT',
            Role: 'Dictation with local or cloud modes',
            'Key difference': 'You choose local models, your own API key or its cloud',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Weesper Neon Flow',
        items: [
          '**Writers and office workers on Mac or Windows.** One shortcut dictates into email, chat and documents.',
          '**People who avoid cloud dictation.** Speech recognition stays on the computer, per the maker.',
          '**Multilingual users.** More than 50 languages with automatic detection.',
          '**Buyers who prefer paying once.** A 99 EUR lifetime license exists next to the subscriptions.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Weesper Neon Flow',
        items: [
          '**Linux, iPhone and Android users.** Only Mac and Windows builds are offered.',
          '**Anyone who needs auditable software.** The code is closed and the privacy claims cannot be inspected.',
          '**Anyone who wants fully free software.** Beyond the trial and a limited free plan, use is paid; Handy is free and open source.',
          '**Anyone who must work with no internet at all.** Licensing and model downloads need a connection.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Weesper Neon Flow work offline?',
            a: 'The maker says dictation works 100% offline once the app and a speech model are installed. The internet is needed to download them, to activate the trial or license and for occasional license checks. The About page says no connection is required, which conflicts with this. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is my voice sent to the cloud?',
            a: 'The privacy policy says audio, transcripts, dictated text and clipboard contents are not sent to Weesper servers for transcription. The code is closed and PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'How much does it cost?',
            a: 'After a 15-day free trial, 5 EUR a month, 45 EUR a year or 99 EUR once, with a 7-day money-back guarantee. Check at checkout whether VAT is included.',
          },
          {
            q: 'Which models does it use?',
            a: 'OpenAI Whisper through whisper.cpp, in four speech profiles from Minimal (about 75 MB) to Large (3.2 GB).',
          },
          {
            q: 'Who makes Weesper Neon Flow?',
            a: 'THE BLUE HOUSE (SASU), a company based in Paris, France.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Weesper Neon Flow is a good fit if you want push-to-talk dictation on a Mac or Windows PC where, per the maker, Whisper runs on your own computer, and you accept paying for closed-source software. It has a free 15-day trial, a lifetime option and a recent release.',
          'The caveats are scope and verifiability: no Linux or mobile version, closed code, privacy claims that PromptQuorum could not check, and maker pages that disagree on the free plan and on needing internet. Use the trial before you buy.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Weesper Neon Flow website](https://weesperneonflow.ai/en/) — features, pricing and FAQ.',
          '[Download page](https://weesperneonflow.ai/en/download/) — platforms and system requirements.',
          '[Changelog](https://weesperneonflow.ai/en/changelog/) — version history and feature additions.',
          '[Privacy policy](https://weesperneonflow.ai/en/privacy) — data handling, last updated 23 July 2026.',
          '[Terms of use](https://weesperneonflow.ai/en/terms/) — operator and local-operation statement.',
          '[GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — installer assets and release date of version 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Handy Review](/power-local-llm/handy-review) — a free open-source dictation app for Mac, Windows and Linux.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac transcription app with dictation.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
          '[Sprich Review: German-Made Mac Dictation App for Apple Silicon](/power-local-llm/sprich-review) — another Mac dictation app, German-first, with a free plan and Apple Silicon only.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-de.webp',
    title: 'Weesper Neon Flow Rezension: Offline-Diktat für Mac und Windows',
    seoTitle: 'Weesper Neon Flow Rezension: Offline-Diktier-App',
    intro: 'Weesper Neon Flow ist eine kostenpflichtige, nicht quelloffene Diktier-App für Mac und Windows: Sie halten ein Tastenkürzel gedrückt, sprechen, und die App tippt den bereinigten Text in die App, in der gerade der Cursor steht. Dabei läuft OpenAIs Whisper-Modell auf Ihrem eigenen Computer. Diese Rezension fasst zusammen, was Website, Änderungsprotokoll und Datenschutzerklärung des Herstellers dokumentieren, wo sich diese Seiten widersprechen und wie die App im Vergleich zu anderen Diktier-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Weesper Neon Flow Rezension: Whisper-Diktat für Mac und Windows, laut Hersteller lokal. 15 Tage testen, dann 5 €/Monat oder 99 € einmalig. Nicht getestet.',
    twitterDescription: 'Weesper Neon Flow Rezension: Diktat per Tastenkürzel für Mac und Windows mit Whisper auf dem eigenen Rechner. Preis, Datenschutz, Grenzen und Alternativen.',
    audience: 'Mac- und Windows-Nutzer, die in jede App diktieren möchten, ohne ihre Stimme an einen Cloud-Dienst zu senden — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'weesper neon flow rezension',
      'weesper neon flow',
      'offline diktier-app mac windows',
      'lokales whisper diktat',
      'spracheingabe ohne cloud',
      'private spracherkennung desktop',
      'whisper diktier-app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flow ist eine nicht quelloffene Diktier-App für Mac und Windows, die OpenAIs Whisper-Modell auf Ihrem eigenen Computer ausführt; laut Hersteller verlassen Audio und diktierter Text den Rechner nie.** Nach einer 15-tägigen kostenlosen Testphase kostet sie 5 € im Monat, 45 € im Jahr oder einmalig 99 €. Die neueste Version ist 1.8.12 vom 28. Oktober 2026. Diese Rezension stützt sich auf Website, Änderungsprotokoll und Datenschutzerklärung des Herstellers sowie auf seine GitHub-Release-Seite, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Weesper Neon Flow eine lokale Diktier-App?',
        answer: 'Laut Hersteller ja: Die Spracherkennung läuft mit Whisper auf Ihrem Mac oder Windows-PC, und Audio, Transkripte und diktierter Text werden nicht an die Server des Herstellers gesendet. Das Internet wird dennoch für den Download von App und Sprachmodellen, Lizenzprüfungen, Abrechnung, Updates und optionale Diagnosedaten genutzt. Der Code ist nicht offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; die Aussage stammt also vom Hersteller selbst.',
        bullets: [
          'Kürzel halten, sprechen, loslassen: Der bereinigte Text erscheint am Cursor, etwa in Gmail, Slack, Notion oder Word.',
          'Preise: 15 Tage kostenlos testen mit allen Funktionen, danach 5 € im Monat, 45 € im Jahr oder einmalig 99 €.',
          'Vier Sprachprofile von Minimal (etwa 75 MB) bis Large (3,2 GB); Small (512 MB) ist die Voreinstellung.',
          'Nur Mac (macOS 13 oder neuer) und Windows 10 oder 11; keine Version für Linux, iPhone oder Android.',
          'Die Seiten des Herstellers widersprechen sich dabei, ob Internet nötig ist und was der kostenlose Tarif nach der Testphase enthält.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Weesper Neon Flow herunterladen', anchor: 'get-it' },
      { label: 'Weesper Neon Flow im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Weesper Neon Flow ist', anchor: 'what-is-weesper' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Weesper Neon Flow geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Weesper Neon Flow nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flow ist eine kostenpflichtige Diktier-App für Mac und Windows, die laut Hersteller Whisper auf Ihrem eigenen Computer statt in einem Cloud-Dienst ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Mikrofontaste vor, die für Sie tippt: Kürzel halten, sprechen, loslassen, und Ihr Computer macht aus der Sprache Text, ohne das Audio an den Hersteller zu senden.',
          },
        ],
        items: [
          'Lokale Aussage: Die Spracherkennung läuft mit Whisper auf dem Gerät; Downloads, Lizenzprüfungen, Abrechnung, Updates und optionale Diagnosedaten nutzen weiterhin das Internet.',
          'Lizenz und Hersteller: proprietär, veröffentlicht von THE BLUE HOUSE (SASU) in Paris; das verlinkte GitHub-Repository enthält nur Installationsdateien der Releases.',
          'Preis: 15 Tage kostenlos testen, danach 5 € im Monat, 45 € im Jahr oder einmalig 99 €, mit 7 Tagen Geld-zurück-Garantie.',
          'Pflege: Version 1.8.12 erschien am 28. Oktober 2026, das Projekt wird also aktiv aktualisiert.',
          'Lücken: keine Version für Linux oder Mobilgeräte, und die eigenen Seiten des Herstellers widersprechen sich beim kostenlosen Tarif und bei der Frage, ob Internet nötig ist.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Weesper Neon Flow herunterladen',
        content: [
          '**Weesper Neon Flow wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Installationsprogramm für Ihr System von der offiziellen Website herunter; die Sprachmodelle werden in der App nachgeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 oder neuer, Apple Silicon oder Intel mit AVX2',
          },
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 ab Build 19041 oder Windows 11, x64 mit AVX2',
          },
          {
            Plattform: 'Kostenlose Testphase (15 Tage)',
            Bezugsquelle: '[Testphase starten](https://weesperneonflow.ai/en/#pricing) — alle Funktionen, keine Kreditkarte',
          },
          {
            Plattform: 'Versionshinweise',
            Bezugsquelle: '[Änderungsprotokoll](https://weesperneonflow.ai/en/changelog/) und [GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Weesper Neon Flow](https://weesperneonflow.ai/en/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht quelloffen; das GitHub-Repository enthält nur Installationsdateien der Releases',
          },
        ],
        note: 'Die Download-Seite nennt nur macOS und Windows; ein Build für Linux, iOS oder Android wird nicht angeboten.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow im Überblick',
        columns: ['Merkmal', 'Weesper Neon Flow'],
        rows: [
          { Merkmal: 'Plattform', 'Weesper Neon Flow': 'macOS 13+ und Windows 10/11' },
          { Merkmal: 'Preis', 'Weesper Neon Flow': '15 Tage testen, danach 5 €/Monat, 45 €/Jahr oder 99 € einmalig' },
          { Merkmal: 'Lizenz', 'Weesper Neon Flow': 'Proprietär, nicht quelloffen' },
          { Merkmal: 'Ausführung', 'Weesper Neon Flow': 'Auf Ihrem Computer mit Whisper (whisper.cpp); Internet für Downloads und Lizenzprüfung' },
          { Merkmal: 'Sprachen', 'Weesper Neon Flow': '50+ mit automatischer Erkennung (die Download-Seite nennt 55+)' },
          { Merkmal: 'Sprecherzuordnung', 'Weesper Neon Flow': 'Ja, im Meeting-Modus (Änderungsprotokoll 1.7.5)' },
          { Merkmal: 'Echtzeit-Transkription', 'Weesper Neon Flow': 'Nicht angegeben; Text wird beim Loslassen des Kürzels eingefügt' },
          { Merkmal: 'Nur mit CPU nutzbar', 'Weesper Neon Flow': 'Nicht angegeben; empfohlen wird eine moderne Mehrkern-CPU' },
          { Merkmal: 'Lokaler API-Server', 'Weesper Neon Flow': 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'Was Weesper Neon Flow ist',
        content: [
          '**Weesper Neon Flow ist eine Diktier-App mit Tastenkürzel, kein Transkriptions-Editor.** Sie halten ein Tastenkürzel gedrückt, sprechen und lassen los; die App führt Whisper auf dem Computer aus und fügt den bereinigten Text am Cursor ein, zum Beispiel in Gmail, Slack, Notion oder Word.',
          'Hersteller ist THE BLUE HOUSE (SASU) mit Sitz in Paris, und laut Über-uns-Seite wurde das Produkt 2024 gegründet. Außerdem verkauft das Unternehmen mit Weesper Transcribe ein separates Produkt für Audio- und Videodateien; diese Rezension behandelt nur die Diktier-App.',
          'Diese Rezension stützt sich auf Website, Änderungsprotokoll, Datenschutzerklärung, Nutzungsbedingungen und die GitHub-Release-Seite. Es gab keinen eigenen Praxistest, daher werden Genauigkeit, Geschwindigkeit und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download und Tastenkürzel.** Die Schritte folgen der Website und ihrem Änderungsprotokoll.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie auf der [Download-Seite](https://weesperneonflow.ai/en/download/) die .dmg für Mac oder die .msi für Windows herunter und starten Sie die 15-tägige Testphase; eine Kreditkarte ist nicht nötig.',
          },
          {
            title: 'Sprachprofil wählen',
            whyItMatters: 'Das voreingestellte Profil Small ist 512 MB groß. Laut Änderungsprotokoll funktioniert das Diktat mit einem mitgelieferten Modell, während das empfohlene heruntergeladen wird.',
          },
          {
            title: 'Halten, sprechen, loslassen',
            whyItMatters: 'Klicken Sie in ein beliebiges Textfeld, halten Sie das Diktier-Kürzel gedrückt, sprechen Sie und lassen Sie los. Ein Umschaltmodus per Tastendruck kam mit Version 1.7.6 hinzu.',
          },
          {
            title: 'Ausgabe anpassen',
            whyItMatters: 'Ergänzen Sie Wörter im eigenen Wörterbuch, legen Sie Textkürzel fest und probieren Sie die kontextbezogenen und eigenen Prompts, die die Website nennt.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf schnelles, privates Diktat in jede App.** Alles Folgende stammt von der Website und aus dem Änderungsprotokoll.',
        ],
        items: [
          '**Diktat überall.** Text wird am Cursor in jeder App eingefügt, die Eingaben annimmt.',
          '**Bereinigung.** Automatisches Entfernen von Füllwörtern sowie intelligente Zeichensetzung und Großschreibung.',
          '**Sprachen.** Mehr als 50 Sprachen mit automatischer Erkennung, und Sprechen in einer Sprache, um Text in einer anderen zu erhalten.',
          '**Meeting-Modus.** Die Sprecherzuordnung (Diarisierung) kam mit Version 1.7.5 hinzu.',
          '**Anpassung.** Ein eigenes Wörterbuch, Textkürzel, kontextbezogene Prompts, eigene Prompts und ein Diktierverlauf.',
          '**Mikrofon-Standby.** Seit Version 1.7.10 hält die App das Mikrofon zwischen zwei Diktaten nicht mehr offen.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Die App führt Whisper über whisper.cpp aus, mit vier Sprachprofilen.** FAQ und Änderungsprotokoll nennen Minimal (etwa 75 MB), Small (512 MB, die Voreinstellung), Medium (1,5 GB) und Large (3,2 GB) sowie ein Profil Precision, das früher Turbo hieß.',
          'Die Download-Seite nennt mindestens 4 GB RAM und empfiehlt 8 GB oder mehr. Auf dem Mac wird ein Apple-Silicon-Chip ab M1 mit Metal empfohlen, unter Windows eine moderne Mehrkern-CPU oder eine unterstützte Vulkan-GPU. Beide Plattformen brauchen einen Prozessor mit AVX2. Die FAQ nennt mit dem Modell Small etwa 600 MB Speicherplatz. Geschwindigkeits- oder Genauigkeitswerte wurden hier nicht nachgestellt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, die Spracherkennung laufe lokal und Audio, Transkripte, diktierter Text und Inhalte der Zwischenablage würden für die Transkription nicht an Weesper-Server gesendet.** Die Erklärung wurde zuletzt am 23. Juli 2026 aktualisiert. Die Nutzungsbedingungen ergänzen, dass die Anwendung zu 100 % lokal arbeitet.',
          'Das Internet ist dennoch an anderer Stelle beteiligt: Downloads von App und Sprachmodellen, Lizenzaktivierung und -prüfung über einen bei Cloudflare gehosteten Lizenzdienst, Abrechnung über Stripe, Update-Metadaten von GitHub sowie optionale Produktanalyse (PostHog) und Absturzdiagnose (Sentry). Laut Erklärung enthalten Analyseereignisse weder Audio noch Transkripte noch diktierten Text. Der Code ist nicht offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller selbst.',
          'Es ist ein kostenpflichtiges, proprietäres Produkt: 15 Tage kostenlos testen, danach 5 € im Monat, 45 € im Jahr oder einmalig 99 €, mit 7 Tagen Geld-zurück-Garantie. Eine persönliche Lizenz gilt für bis zu drei eigene Computer. Die Website sagt nicht eindeutig, ob die Preise die Mehrwertsteuer enthalten; prüfen Sie das an der Kasse. Der kostenlose Tarif nach der Testphase wird auf zwei Arten beschrieben: 1.500 Wörter pro Woche in der FAQ und kurze Clips von bis zu 60 Sekunden im Änderungsprotokoll.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Whisper auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Das Diktat wird auf dem Rechner verarbeitet, ohne Audio-Upload für die Transkription.',
            'Einschränkung / Hinweis': 'Nicht quelloffen, die Aussage lässt sich nicht prüfen; für Lizenz und Downloads wird weiterhin das Internet genutzt.',
          },
          {
            Vorteil: 'Diktat in jede App',
            'Was das im Alltag bedeutet': 'Ein Kürzel funktioniert in E-Mail, Chat, Notizen und Dokumenten.',
            'Einschränkung / Hinweis': 'Nur Mac und Windows; keine Version für Linux, iPhone oder Android.',
          },
          {
            Vorteil: 'Lifetime-Option',
            'Was das im Alltag bedeutet': 'Ein Einmalkauf für 99 € erspart ein Abo.',
            'Einschränkung / Hinweis': 'Monats- und Jahrestarif sind der Standard; ein kostenloser Tarif nach der Testphase wird widersprüchlich beschrieben.',
          },
          {
            Vorteil: 'Vier Sprachprofile',
            'Was das im Alltag bedeutet': 'Kleine, leichte Modelle für ältere Rechner, größere für mehr Genauigkeit.',
            'Einschränkung / Hinweis': 'Large braucht 3,2 GB Speicherplatz und mehr RAM; Geschwindigkeitswerte werden nicht veröffentlicht.',
          },
          {
            Vorteil: 'Meeting-Modus mit Sprechern',
            'Was das im Alltag bedeutet': 'Die Sprecherzuordnung ist im Änderungsprotokoll dokumentiert.',
            'Einschränkung / Hinweis': 'Hier nicht getestet; die Website nennt keine Genauigkeitsdetails.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 1.8.12 erschien am 28. Oktober 2026.',
            'Einschränkung / Hinweis': 'Manche Seiten, etwa Über uns, tragen noch ältere Formulierungen.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Diktier-Werkzeuge im Verzeichnis: eine kostenlose Open-Source-App für drei Desktop-Systeme, eine Mac-Transkriptions-App mit Diktat, eine kostenlose reine Mac-Diktier-App und eine hybride Open-Source-App.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Weesper Neon Flow',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Testphase, dann 5 €/Monat oder 99 € einmalig, proprietär',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Whisper auf dem Gerät; kostenpflichtig und nicht quelloffen',
          },
          {
            App: '[Handy](/de/power-local-llm/handy-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Quelloffen und kostenlos; zusätzlich Linux',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Zuerst für Dateien und Meetings gedacht; nur Mac',
          },
          {
            App: '[FluidVoice](/de/power-local-llm/fluidvoice-review)',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            Rolle: 'Mac-Diktier-App',
            'Wichtigster Unterschied': 'Kostenlos und quelloffen; nur Mac',
          },
          {
            App: '[OpenWhispr](/de/power-local-llm/openwhispr-review)',
            Plattformen: 'Mac, Windows, Linux, iOS',
            'Preis und Lizenz': 'Freemium, MIT',
            Rolle: 'Diktat mit lokalem oder Cloud-Modus',
            'Wichtigster Unterschied': 'Sie wählen lokale Modelle, eigenen API-Schlüssel oder die eigene Cloud',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Weesper Neon Flow geeignet ist',
        items: [
          '**Schreibende und Büroangestellte unter Mac oder Windows.** Ein Kürzel diktiert in E-Mails, Chats und Dokumente.',
          '**Menschen, die Cloud-Diktat meiden.** Die Spracherkennung bleibt laut Hersteller auf dem Computer.',
          '**Mehrsprachige Nutzer.** Mehr als 50 Sprachen mit automatischer Erkennung.',
          '**Käufer, die lieber einmal zahlen.** Neben den Abos gibt es eine Lifetime-Lizenz für 99 €.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Weesper Neon Flow nicht geeignet ist',
        items: [
          '**Nutzer von Linux, iPhone und Android.** Es gibt nur Builds für Mac und Windows.',
          '**Alle, die prüfbare Software brauchen.** Der Code ist nicht offen, und die Datenschutzaussagen lassen sich nicht einsehen.',
          '**Alle, die vollständig kostenlose Software wollen.** Über Testphase und einen begrenzten kostenlosen Tarif hinaus ist die Nutzung kostenpflichtig; Handy ist kostenlos und quelloffen.',
          '**Alle, die völlig ohne Internet arbeiten müssen.** Lizenzierung und Modell-Downloads brauchen eine Verbindung.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Weesper Neon Flow offline?',
            a: 'Laut Hersteller funktioniert das Diktat zu 100 % offline, sobald die App und ein Sprachmodell installiert sind. Das Internet wird für deren Download, für die Aktivierung der Testphase oder Lizenz und für gelegentliche Lizenzprüfungen gebraucht. Die Über-uns-Seite sagt, keine Verbindung sei nötig, was dem widerspricht. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Wird meine Stimme in die Cloud gesendet?',
            a: 'Laut Datenschutzerklärung werden Audio, Transkripte, diktierter Text und Inhalte der Zwischenablage für die Transkription nicht an Weesper-Server gesendet. Der Code ist nicht offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Was kostet es?',
            a: 'Nach 15 Tagen kostenloser Testphase 5 € im Monat, 45 € im Jahr oder einmalig 99 €, mit 7 Tagen Geld-zurück-Garantie. Prüfen Sie an der Kasse, ob die Mehrwertsteuer enthalten ist.',
          },
          {
            q: 'Welche Modelle nutzt es?',
            a: 'OpenAI Whisper über whisper.cpp, in vier Sprachprofilen von Minimal (etwa 75 MB) bis Large (3,2 GB).',
          },
          {
            q: 'Wer entwickelt Weesper Neon Flow?',
            a: 'THE BLUE HOUSE (SASU), ein Unternehmen mit Sitz in Paris, Frankreich.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Weesper Neon Flow passt, wenn Sie auf einem Mac oder Windows-PC per Tastenkürzel diktieren möchten, wobei laut Hersteller Whisper auf Ihrem eigenen Computer läuft, und wenn Sie bereit sind, für nicht quelloffene Software zu zahlen. Es gibt eine kostenlose 15-tägige Testphase, eine Lifetime-Option und ein aktuelles Release.',
          'Die Einschränkungen betreffen Umfang und Überprüfbarkeit: keine Version für Linux oder Mobilgeräte, nicht offener Code, Datenschutzaussagen, die PromptQuorum nicht prüfen konnte, und Herstellerseiten, die sich beim kostenlosen Tarif und beim Internetbedarf widersprechen. Nutzen Sie die Testphase vor dem Kauf.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Weesper Neon Flow](https://weesperneonflow.ai/en/) — Funktionen, Preise und FAQ.',
          '[Download-Seite](https://weesperneonflow.ai/en/download/) — Plattformen und Systemanforderungen.',
          '[Änderungsprotokoll](https://weesperneonflow.ai/en/changelog/) — Versionsverlauf und neue Funktionen.',
          '[Datenschutzerklärung](https://weesperneonflow.ai/en/privacy) — Umgang mit Daten, zuletzt aktualisiert am 23. Juli 2026.',
          '[Nutzungsbedingungen](https://weesperneonflow.ai/en/terms/) — Betreiber und Aussage zum lokalen Betrieb.',
          '[GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — Installationsdateien und Veröffentlichungsdatum von Version 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[Handy Rezension](/de/power-local-llm/handy-review) — eine kostenlose Open-Source-Diktier-App für Mac, Windows und Linux.',
          '[MacWhisper Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-Transkriptions-App mit Diktat.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
          '[Sprich Rezension: Diktier-App aus Deutschland für den Apple-Silicon-Mac](/de/power-local-llm/sprich-review) — eine weitere Diktier-App für den Mac, auf Deutsch ausgerichtet, mit Gratis-Tarif und nur für Apple Silicon.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-fr.webp',
    title: 'Test de Weesper Neon Flow : dictée hors ligne pour Mac et Windows',
    seoTitle: 'Test de Weesper Neon Flow : dictée hors ligne Mac/PC',
    intro: "Weesper Neon Flow est une application de dictée payante et propriétaire pour Mac et Windows : vous maintenez un raccourci, vous parlez, et elle saisit le texte nettoyé dans l'application où se trouve le curseur, en exécutant le modèle Whisper d'OpenAI sur votre propre ordinateur. Ce test résume ce que documentent le site de l'éditeur, son journal des modifications et sa politique de confidentialité, les points où ces pages se contredisent, et comment l'application se compare aux autres outils de dictée du répertoire.",
    metaDescription: "Test de Weesper Neon Flow : dictée Whisper pour Mac et Windows, locale selon l'éditeur. Essai de 15 jours, puis 5 €/mois. Non testée.",
    twitterDescription: "Test de Weesper Neon Flow : dictée par raccourci pour Mac et Windows avec Whisper sur votre propre ordinateur. Prix, confidentialité, limites et alternatives.",
    audience: "Utilisateurs de Mac et de Windows qui veulent dicter dans n'importe quelle application sans envoyer leur voix à un service cloud — couvre le prix, l'installation, les modèles, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'test weesper neon flow',
      'weesper neon flow',
      'application de dictée hors ligne mac windows',
      'dictée whisper locale',
      'dictée vocale sans cloud',
      'reconnaissance vocale privée bureau',
      'application de dictée whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Weesper Neon Flow est une application de dictée propriétaire pour Mac et Windows qui exécute le modèle Whisper d'OpenAI sur votre propre ordinateur ; selon son éditeur, l'audio et le texte dicté ne quittent jamais la machine.** Elle coûte 5 € par mois, 45 € par an ou 99 € en achat unique après un essai gratuit de 15 jours. La version la plus récente est la 1.8.12, du 28 octobre 2026. Ce test s'appuie sur le site public de l'éditeur, son journal des modifications, sa politique de confidentialité et sa page de versions GitHub, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: 'Weesper Neon Flow est-elle une application de dictée locale ?',
        answer: "Selon son éditeur, oui : la reconnaissance vocale s'exécute sur votre Mac ou votre PC Windows avec Whisper, et l'audio, les transcriptions et le texte dicté ne sont pas envoyés aux serveurs de l'éditeur. Internet reste utilisé pour télécharger l'application et les modèles vocaux, vérifier la licence, facturer, mettre à jour et, en option, envoyer des diagnostics. Le code est fermé et PromptQuorum n'a pas inspecté le trafic réseau : l'affirmation est celle de l'éditeur.",
        bullets: [
          "Maintenez un raccourci, parlez, relâchez : le texte nettoyé apparaît au curseur dans des applications comme Gmail, Slack, Notion ou Word.",
          "Tarifs : essai gratuit de 15 jours avec toutes les fonctions, puis 5 € par mois, 45 € par an ou 99 € en achat unique.",
          "Quatre profils vocaux, de Minimal (environ 75 Mo) à Large (3,2 Go) ; Small (512 Mo) est le profil par défaut.",
          "Mac (macOS 13 ou ultérieur) et Windows 10 ou 11 uniquement ; pas de version Linux, iPhone ni Android.",
          "Les pages de l'éditeur se contredisent sur la nécessité d'une connexion Internet et sur le contenu de l'offre gratuite après l'essai.",
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Weesper Neon Flow', anchor: 'get-it' },
      { label: "Weesper Neon Flow en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Weesper Neon Flow", anchor: 'what-is-weesper' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Weesper Neon Flow est adaptée', anchor: 'who-should-use' },
      { label: "Pour qui Weesper Neon Flow n'est pas adaptée", anchor: 'who-should-not-use' },
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
            text: "Weesper Neon Flow est une application de dictée payante pour Mac et Windows qui, selon son éditeur, exécute Whisper sur votre propre ordinateur plutôt que dans un service cloud.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez une touche de micro qui tape à votre place : vous maintenez le raccourci, vous parlez, vous relâchez, et votre ordinateur transforme la voix en texte sans envoyer l'audio à l'éditeur.",
          },
        ],
        items: [
          "Affirmation locale : la reconnaissance vocale s'exécute sur l'appareil avec Whisper ; les téléchargements, la vérification de licence, la facturation, les mises à jour et les diagnostics optionnels utilisent tout de même Internet.",
          "Licence et éditeur : propriétaire, publiée par THE BLUE HOUSE (SASU) à Paris ; le dépôt GitHub lié ne contient que les installateurs des versions.",
          "Prix : essai gratuit de 15 jours, puis 5 € par mois, 45 € par an ou 99 € en achat unique, avec une garantie de remboursement de 7 jours.",
          "Maintenance : la version 1.8.12 est sortie le 28 octobre 2026, le projet est donc mis à jour activement.",
          "Lacunes : pas de version Linux ni mobile, et les pages de l'éditeur se contredisent sur l'offre gratuite et sur le besoin d'une connexion Internet.",
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Obtenir Weesper Neon Flow',
        content: [
          "**Weesper Neon Flow s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** Téléchargez l'installateur de votre système sur le site officiel ; les modèles vocaux sont récupérés depuis l'application.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 ou ultérieur, Apple Silicon ou Intel avec AVX2',
          },
          {
            Plateforme: 'Windows',
            'Où la trouver': '[Télécharger pour Windows](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 build 19041 ou ultérieur, ou Windows 11, x64 avec AVX2',
          },
          {
            Plateforme: 'Essai gratuit (15 jours)',
            'Où la trouver': "[Démarrer l'essai](https://weesperneonflow.ai/en/#pricing) — toutes les fonctions, sans carte bancaire",
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[Journal des modifications](https://weesperneonflow.ai/en/changelog/) et [versions GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de Weesper Neon Flow](https://weesperneonflow.ai/en/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': "Code fermé ; le dépôt GitHub ne contient que les installateurs des versions",
          },
        ],
        note: "La page de téléchargement ne cite que macOS et Windows ; aucune version Linux, iOS ni Android n'est proposée.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Weesper Neon Flow en un coup d'œil",
        columns: ['Attribut', 'Weesper Neon Flow'],
        rows: [
          { Attribut: 'Plateforme', 'Weesper Neon Flow': 'macOS 13+ et Windows 10/11' },
          { Attribut: 'Prix', 'Weesper Neon Flow': 'Essai 15 jours, puis 5 €/mois, 45 €/an ou 99 € une fois' },
          { Attribut: 'Licence', 'Weesper Neon Flow': 'Propriétaire, code fermé' },
          { Attribut: 'Exécution', 'Weesper Neon Flow': 'Sur votre ordinateur avec Whisper (whisper.cpp) ; Internet pour les téléchargements et la licence' },
          { Attribut: 'Langues', 'Weesper Neon Flow': "Plus de 50 avec détection automatique (la page de téléchargement dit 55+)" },
          { Attribut: 'Étiquettes de locuteurs', 'Weesper Neon Flow': 'Oui, en mode Réunion (journal 1.7.5)' },
          { Attribut: 'Transcription en temps réel', 'Weesper Neon Flow': "Non précisé ; le texte est inséré au relâchement du raccourci" },
          { Attribut: 'Utilisable sur CPU seul', 'Weesper Neon Flow': 'Non précisé ; un processeur multicœur récent est la base recommandée' },
          { Attribut: 'Serveur API local', 'Weesper Neon Flow': 'Non précisé' },
        ],
        note: "Les attributs suivent la comparaison de reconnaissance vocale utilisée dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: "Ce qu'est Weesper Neon Flow",
        content: [
          "**Weesper Neon Flow est une application de dictée par raccourci, pas un éditeur de transcriptions.** Vous maintenez un raccourci clavier, vous parlez et vous relâchez ; l'application exécute Whisper sur l'ordinateur et insère le texte nettoyé au curseur, par exemple dans Gmail, Slack, Notion ou Word.",
          "L'éditeur est THE BLUE HOUSE (SASU), basée à Paris, et la page À propos indique que le produit a été fondé en 2024. Elle vend aussi un produit distinct, Weesper Transcribe, pour les fichiers audio et vidéo ; ce test ne couvre que l'application de dictée.",
          "Ce test s'appuie sur le site, le journal des modifications, la politique de confidentialité, les conditions d'utilisation et la page de versions GitHub. Il n'a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement de modèle et un raccourci.** Les étapes suivent le site et son journal des modifications.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez le .dmg pour Mac ou le .msi pour Windows depuis la [page de téléchargement](https://weesperneonflow.ai/en/download/) et lancez l'essai de 15 jours ; aucune carte bancaire n'est demandée.",
          },
          {
            title: 'Choisir un profil vocal',
            whyItMatters: "Le profil Small par défaut pèse 512 Mo. Le journal des modifications indique que la dictée fonctionne avec un modèle intégré pendant le téléchargement du modèle recommandé.",
          },
          {
            title: 'Maintenir, parler, relâcher',
            whyItMatters: "Cliquez dans n'importe quel champ de texte, maintenez le raccourci de dictée, parlez, puis relâchez. Un mode appui-pour-basculer a été ajouté dans la version 1.7.6.",
          },
          {
            title: 'Ajuster le résultat',
            whyItMatters: "Ajoutez des mots au dictionnaire personnalisé, définissez des raccourcis de texte et essayez les prompts contextuels et personnalisés que le site mentionne.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur une dictée rapide et privée dans n'importe quelle application.** Tout ce qui suit provient du site et du journal des modifications.",
        ],
        items: [
          "**Dictée partout.** Le texte est inséré au curseur dans toute application qui accepte la saisie.",
          "**Nettoyage.** Suppression automatique des mots de remplissage, avec ponctuation et majuscules intelligentes.",
          "**Langues.** Plus de 50 langues avec détection automatique, et possibilité de parler dans une langue pour obtenir du texte dans une autre.",
          "**Mode Réunion.** La séparation des locuteurs a été ajoutée dans la version 1.7.5.",
          "**Personnalisation.** Un dictionnaire personnalisé, des raccourcis de texte, des prompts contextuels, des prompts personnalisés et un historique de dictée.",
          "**Veille du micro.** Depuis la version 1.7.10, l'application ne garde plus le micro ouvert entre deux dictées.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**L'application exécute Whisper via whisper.cpp, avec quatre profils vocaux.** La FAQ et le journal des modifications citent Minimal (environ 75 Mo), Small (512 Mo, par défaut), Medium (1,5 Go) et Large (3,2 Go), plus un profil Precision anciennement appelé Turbo.",
          "La page de téléchargement indique un minimum de 4 Go de RAM et 8 Go ou plus recommandés. Sur Mac, un Apple Silicon M1 ou plus récent avec Metal est recommandé ; sous Windows, un processeur multicœur récent ou un GPU Vulkan pris en charge. Les deux plateformes exigent un processeur compatible AVX2. La FAQ cite environ 600 Mo d'espace disque avec le modèle Small. Aucune mesure de vitesse ou de précision n'a été reproduite ici.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que la reconnaissance vocale s'exécute localement et que l'audio, les transcriptions, le texte dicté et le contenu du presse-papiers ne sont pas envoyés aux serveurs de Weesper pour la transcription.** La politique a été mise à jour pour la dernière fois le 23 juillet 2026. Les conditions d'utilisation ajoutent que l'application fonctionne à 100 % en local.",
          "Internet intervient tout de même ailleurs : téléchargement de l'application et des modèles vocaux, activation et vérification de la licence via un service de licences hébergé sur Cloudflare, facturation via Stripe, métadonnées de mise à jour depuis GitHub, et, en option, analyses d'usage (PostHog) et diagnostics de plantage (Sentry). La politique précise que les événements d'analyse n'incluent ni audio, ni transcriptions, ni texte dicté. Le code est fermé et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "C'est un produit payant et propriétaire : essai gratuit de 15 jours, puis 5 € par mois, 45 € par an ou 99 € en achat unique, avec une garantie de remboursement de 7 jours. Une licence personnelle couvre jusqu'à trois de vos propres ordinateurs. Le site n'indique pas clairement si les prix incluent la TVA : vérifiez au moment du paiement. L'offre gratuite après l'essai est décrite de deux façons : 1 500 mots par semaine dans la FAQ, et de courts extraits de 60 secondes maximum dans le journal des modifications.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Whisper sur votre ordinateur',
            "Ce que cela donne à l'usage": "La dictée est traitée sur la machine, sans envoi d'audio pour la transcription.",
            'Limite / réserve': "Code fermé, l'affirmation ne peut pas être vérifiée ; Internet sert tout de même à la licence et aux téléchargements.",
          },
          {
            Avantage: "Dicter dans n'importe quelle application",
            "Ce que cela donne à l'usage": 'Un seul raccourci fonctionne dans les e-mails, les messageries, les notes et les documents.',
            'Limite / réserve': 'Mac et Windows uniquement ; pas de version Linux, iPhone ni Android.',
          },
          {
            Avantage: 'Option à vie',
            "Ce que cela donne à l'usage": 'Un achat unique à 99 € évite un abonnement.',
            'Limite / réserve': "Les formules mensuelle et annuelle sont la norme ; l'offre gratuite après l'essai est décrite de façon contradictoire.",
          },
          {
            Avantage: 'Quatre profils vocaux',
            "Ce que cela donne à l'usage": 'Des modèles petits et légers pour les machines anciennes, plus grands pour la précision.',
            'Limite / réserve': 'Large exige 3,2 Go de disque et plus de RAM ; aucune mesure de vitesse publiée.',
          },
          {
            Avantage: 'Mode Réunion avec locuteurs',
            "Ce que cela donne à l'usage": 'La séparation des locuteurs est documentée dans le journal des modifications.',
            'Limite / réserve': 'Non testé ici ; le site ne donne aucun détail sur la précision.',
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'La version 1.8.12 est sortie le 28 octobre 2026.',
            'Limite / réserve': "Certaines pages, comme À propos, conservent une formulation plus ancienne.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow face aux alternatives',
        content: [
          "Voici les outils de dictée les plus proches du répertoire : une application libre et gratuite pour trois systèmes de bureau, une application de transcription pour Mac avec dictée, une application de dictée gratuite réservée au Mac et une application libre hybride.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Weesper Neon Flow',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Essai, puis 5 €/mois ou 99 € une fois, propriétaire',
            Rôle: 'Dictée par raccourci',
            'Différence clé': "Whisper sur l'appareil ; payante et à code fermé",
          },
          {
            Application: '[Handy](/fr/power-local-llm/handy-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Dictée par raccourci',
            'Différence clé': 'Libre et gratuite ; ajoute Linux',
          },
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Application de transcription pour Mac',
            'Différence clé': "Conçue d'abord pour les fichiers et les réunions ; Mac uniquement",
          },
          {
            Application: '[FluidVoice](/fr/power-local-llm/fluidvoice-review)',
            Plateformes: 'Mac',
            'Prix et licence': 'Gratuit, GPL-3.0',
            Rôle: 'Application de dictée pour Mac',
            'Différence clé': 'Gratuite et libre ; Mac uniquement',
          },
          {
            Application: '[OpenWhispr](/fr/power-local-llm/openwhispr-review)',
            Plateformes: 'Mac, Windows, Linux, iOS',
            'Prix et licence': 'Freemium, MIT',
            Rôle: 'Dictée en mode local ou cloud',
            'Différence clé': 'Vous choisissez des modèles locaux, votre propre clé API ou son cloud',
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Weesper Neon Flow est adaptée',
        items: [
          "**Rédacteurs et employés de bureau sous Mac ou Windows.** Un seul raccourci dicte dans les e-mails, les messageries et les documents.",
          "**Personnes qui évitent la dictée cloud.** La reconnaissance vocale reste sur l'ordinateur, selon l'éditeur.",
          "**Utilisateurs multilingues.** Plus de 50 langues avec détection automatique.",
          "**Acheteurs qui préfèrent payer une seule fois.** Une licence à vie à 99 € existe à côté des abonnements.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Weesper Neon Flow n'est pas adaptée",
        items: [
          "**Utilisateurs de Linux, d'iPhone et d'Android.** Seules des versions Mac et Windows sont proposées.",
          "**Quiconque a besoin d'un logiciel auditable.** Le code est fermé et les affirmations de confidentialité ne peuvent pas être inspectées.",
          "**Quiconque veut un logiciel entièrement gratuit.** Hors essai et offre gratuite limitée, l'usage est payant ; Handy est gratuit et libre.",
          "**Quiconque doit travailler sans aucune connexion Internet.** La licence et le téléchargement des modèles exigent une connexion.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Weesper Neon Flow fonctionne-t-elle hors ligne ?',
            a: "L'éditeur affirme que la dictée fonctionne à 100 % hors ligne une fois l'application et un modèle vocal installés. Internet est nécessaire pour les télécharger, pour activer l'essai ou la licence et pour des vérifications occasionnelles de licence. La page À propos indique qu'aucune connexion n'est requise, ce qui contredit ces informations. PromptQuorum ne l'a pas testée hors ligne.",
          },
          {
            q: 'Ma voix est-elle envoyée dans le cloud ?',
            a: "La politique de confidentialité indique que l'audio, les transcriptions, le texte dicté et le contenu du presse-papiers ne sont pas envoyés aux serveurs de Weesper pour la transcription. Le code est fermé et PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            q: 'Combien coûte-t-elle ?',
            a: "Après un essai gratuit de 15 jours : 5 € par mois, 45 € par an ou 99 € en achat unique, avec une garantie de remboursement de 7 jours. Vérifiez au moment du paiement si la TVA est incluse.",
          },
          {
            q: 'Quels modèles utilise-t-elle ?',
            a: 'OpenAI Whisper via whisper.cpp, en quatre profils vocaux, de Minimal (environ 75 Mo) à Large (3,2 Go).',
          },
          {
            q: 'Qui édite Weesper Neon Flow ?',
            a: 'THE BLUE HOUSE (SASU), société basée à Paris, en France.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Weesper Neon Flow convient si vous voulez une dictée par raccourci sur un Mac ou un PC Windows où, selon l'éditeur, Whisper s'exécute sur votre propre ordinateur, et si vous acceptez de payer pour un logiciel à code fermé. Elle propose un essai gratuit de 15 jours, une option à vie et une version récente.",
          "Les réserves tiennent à la portée et à la vérifiabilité : pas de version Linux ni mobile, code fermé, affirmations de confidentialité que PromptQuorum n'a pas pu vérifier, et pages de l'éditeur qui se contredisent sur l'offre gratuite et sur le besoin d'Internet. Utilisez l'essai avant d'acheter.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Weesper Neon Flow](https://weesperneonflow.ai/en/) — fonctions, tarifs et FAQ.',
          '[Page de téléchargement](https://weesperneonflow.ai/en/download/) — plateformes et configuration requise.',
          '[Journal des modifications](https://weesperneonflow.ai/en/changelog/) — historique des versions et ajouts de fonctions.',
          '[Politique de confidentialité](https://weesperneonflow.ai/en/privacy) — traitement des données, dernière mise à jour le 23 juillet 2026.',
          "[Conditions d'utilisation](https://weesperneonflow.ai/en/terms/) — exploitant et mention du fonctionnement local.",
          '[Versions GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — fichiers d\'installation et date de publication de la version 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de Handy](/fr/power-local-llm/handy-review) — une application de dictée libre et gratuite pour Mac, Windows et Linux.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une application de transcription pour Mac avec dictée.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses applications Whisper locales.',
          '[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d\'IA locale, toutes plateformes.',
          '[Test de Sprich : application de dictée allemande pour Mac Apple Silicon](/fr/power-local-llm/sprich-review) — une autre application de dictée pour Mac, pensée d’abord pour l’allemand, avec offre gratuite et réservée à Apple Silicon.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-ja.webp',
    title: 'Weesper Neon Flow レビュー：Mac・Windows向けオフライン音声入力アプリ',
    seoTitle: 'Weesper Neon Flow レビュー：オフライン音声入力アプリ',
    intro: 'Weesper Neon Flowは、Mac・Windows向けの有料のクローズドソース音声入力アプリです。ショートカットを押したまま話して離すと、お使いのコンピューター上でOpenAIのWhisperモデルを実行し、整えたテキストをカーソルのあるアプリに入力します。このレビューでは、開発元の公式サイト、変更履歴、プライバシーポリシーが示している点、ページ同士で食い違っている点、ディレクトリ内の他の音声入力ツールとの比較をまとめます。',
    metaDescription: 'Weesper Neon Flowのレビュー：Mac・Windows向け、開発元によるとお使いのPC上で動くWhisper音声入力アプリ。15日間の無料体験後は月5ユーロまたは99ユーロの買い切り。実機検証なし。',
    twitterDescription: 'Weesper Neon Flowのレビュー：Mac・WindowsでWhisperを自分のPC上で動かすプッシュトゥトーク音声入力アプリ。価格、プライバシー、制限、代替ツールを解説します。',
    audience: '音声をクラウドサービスに送らずに、あらゆるアプリへ音声入力したいMac・Windowsユーザー向け。価格、インストール、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'weesper neon flow レビュー',
      'weesper neon flow',
      'オフライン 音声入力 mac windows',
      'whisper ローカル 音声入力',
      'クラウドなし 音声入力',
      'プライベート 音声認識 デスクトップ',
      'whisper 音声入力アプリ',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flowは、Mac・Windows向けのクローズドソースの音声入力アプリで、OpenAIのWhisperモデルをお使いのコンピューター上で実行します。開発元によると、音声と入力したテキストがマシンの外に出ることはありません。** 15日間の無料体験後は、月5ユーロ、年45ユーロ、または99ユーロの買い切りです。最新リリースは2026年10月28日のバージョン1.8.12です。このレビューは、開発元の公式サイト、変更履歴、プライバシーポリシー、GitHubのリリースページに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Weesper Neon Flowはローカルで動く音声入力アプリですか？',
        answer: '開発元によると、はい。音声認識はMacまたはWindows PC上でWhisperにより実行され、音声、文字起こし結果、入力したテキストは開発元のサーバーに送信されません。ただし、アプリと音声認識モデルのダウンロード、ライセンス確認、課金、アップデート、任意の診断情報の送信にはインターネットが使われます。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、この主張は開発元自身によるものです。',
        bullets: [
          'ショートカットを押したまま話して離すと、整えたテキストがGmail、Slack、Notion、Wordなどのカーソル位置に入力されます。',
          '価格：全機能が使える15日間の無料体験のあと、月5ユーロ、年45ユーロ、または99ユーロの買い切りです。',
          '音声認識プロファイルはMinimal（約75MB）からLarge（3.2GB）まで4種類で、既定はSmall（512MB）です。',
          '対応はMac（macOS 13以降）とWindows 10・11のみで、Linux、iPhone、Android版はありません。',
          '開発元のページ同士で、インターネットが必要かどうかと、体験後の無料プランの内容について記述が食い違っています。',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Weesper Neon Flowの入手方法', anchor: 'get-it' },
      { label: 'Weesper Neon Flowの概要', anchor: 'at-a-glance' },
      { label: 'Weesper Neon Flowとは', anchor: 'what-is-weesper' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flowと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Weesper Neon Flowが向いている人', anchor: 'who-should-use' },
      { label: 'Weesper Neon Flowが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flowは、開発元によると、クラウドサービスではなくお使いのコンピューター上でWhisperを実行する、Mac・Windows向けの有料音声入力アプリです。',
          },
          {
            type: 'plain-terms',
            text: '代わりに入力してくれるマイクキーだと考えてください。ショートカットを押したまま話して離すと、音声を開発元に送らずにコンピューターが音声をテキストに変換します。',
          },
        ],
        items: [
          'ローカルの主張：音声認識はWhisperにより端末内で実行されます。ダウンロード、ライセンス確認、課金、アップデート、任意の診断情報にはインターネットが使われます。',
          'ライセンスと開発元：プロプライエタリで、パリのTHE BLUE HOUSE（SASU）が公開しています。リンクされているGitHubリポジトリはリリース用インストーラーを置いているだけです。',
          '価格：15日間の無料体験のあと、月5ユーロ、年45ユーロ、または99ユーロの買い切りで、7日間の返金保証があります。',
          'メンテナンス：バージョン1.8.12が2026年10月28日にリリースされており、継続的に更新されています。',
          '不足点：Linux版とモバイル版はなく、開発元自身のページ同士で、無料プランとインターネットの要否について記述が食い違っています。',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Weesper Neon Flowの入手方法',
        content: [
          '**Weesper Neon Flowはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** 公式サイトからお使いのシステム用のインストーラーをダウンロードします。音声認識モデルはアプリ内で取得されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://weesperneonflow.ai/en/download/) — .dmg、macOS 13以降、Apple SiliconまたはAVX2対応Intel',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://weesperneonflow.ai/en/download/) — .msi、Windows 10（ビルド19041以降）またはWindows 11、AVX2対応x64',
          },
          {
            'プラットフォーム': '無料体験（15日間）',
            '入手先': '[体験を始める](https://weesperneonflow.ai/en/#pricing) — 全機能、クレジットカード不要',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[変更履歴](https://weesperneonflow.ai/en/changelog/)と[GitHubリリース](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Weesper Neon Flowのプライバシーポリシー](https://weesperneonflow.ai/en/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': 'クローズドソース。GitHubリポジトリはリリース用インストーラーのみ',
          },
        ],
        note: 'ダウンロードページが挙げているのはmacOSとWindowsだけで、Linux、iOS、Androidのビルドは提供されていません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flowの概要',
        columns: [
          '項目',
          'Weesper Neon Flow',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'Weesper Neon Flow': 'macOS 13以降、Windows 10・11' },
          { '項目': '価格', 'Weesper Neon Flow': '15日間体験後、月5ユーロ・年45ユーロ・99ユーロ買い切り' },
          { '項目': 'ライセンス', 'Weesper Neon Flow': 'プロプライエタリ、クローズドソース' },
          { '項目': '実行場所', 'Weesper Neon Flow': 'お使いのPC上でWhisper（whisper.cpp）。ダウンロードとライセンス確認にはインターネット' },
          { '項目': '対応言語', 'Weesper Neon Flow': '50以上、自動検出（ダウンロードページでは55以上）' },
          { '項目': '話者ラベル', 'Weesper Neon Flow': 'あり。会議モード（変更履歴1.7.5）' },
          { '項目': 'リアルタイム文字起こし', 'Weesper Neon Flow': '記載なし。ショートカットを離すとテキストが入力される' },
          { '項目': 'CPUのみで利用可能', 'Weesper Neon Flow': '記載なし。推奨は最新のマルチコアCPU' },
          { '項目': 'ローカルAPIサーバー', 'Weesper Neon Flow': '記載なし' },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'Weesper Neon Flowとは',
        content: [
          '**Weesper Neon Flowは、文字起こしの編集ツールではなく、プッシュトゥトーク方式の音声入力アプリです。** キーボードショートカットを押したまま話して離すと、アプリがコンピューター上でWhisperを実行し、整えたテキストをカーソル位置、たとえばGmail、Slack、Notion、Wordなどに入力します。',
          '開発元はパリに拠点を置くTHE BLUE HOUSE（SASU）で、Aboutページによると製品は2024年に立ち上げられました。音声・動画ファイル向けに別製品のWeesper Transcribeも販売していますが、このレビューが扱うのは音声入力アプリだけです。',
          'このレビューは、公式サイト、変更履歴、プライバシーポリシー、利用規約、GitHubのリリースページに基づいています。実機での検証は行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルのダウンロード、ショートカットの設定の3ステップです。** 手順は公式サイトと変更履歴に沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[ダウンロードページ](https://weesperneonflow.ai/en/download/)からMac用の.dmgまたはWindows用の.msiを入手し、15日間の無料体験を始めます。クレジットカードは不要です。',
          },
          {
            title: '音声認識プロファイルを選ぶ',
            whyItMatters: '既定のSmallプロファイルは512MBです。変更履歴によると、推奨モデルのダウンロード中も、同梱モデルで音声入力が使えます。',
          },
          {
            title: '押して、話して、離す',
            whyItMatters: '任意のテキスト欄をクリックし、音声入力ショートカットを押したまま話して離します。バージョン1.7.6でトグル方式（押して切り替え）のモードが追加されました。',
          },
          {
            title: '出力を調整する',
            whyItMatters: 'カスタム辞書に単語を追加し、テキストショートカットを設定し、サイトが挙げているコンテキストプロンプトやカスタムプロンプトを試します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、あらゆるアプリへの高速でプライベートな音声入力です。** 以下はすべて公式サイトと変更履歴によります。',
        ],
        items: [
          '**どこでも音声入力。** 文字入力を受け付けるアプリなら、カーソル位置にテキストが入力されます。',
          '**整形。** フィラー（言いよどみ）の自動削除に加え、句読点と大文字小文字の自動調整があります。',
          '**言語。** 50以上の言語を自動検出で扱え、ある言語で話して別の言語のテキストを得ることもできます。',
          '**会議モード。** 話者分離（ダイアライゼーション）はバージョン1.7.5で追加されました。',
          '**カスタマイズ。** カスタム辞書、テキストショートカット、コンテキストプロンプト、カスタムプロンプト、音声入力の履歴があります。',
          '**マイクのスタンバイ。** バージョン1.7.10以降、音声入力の合間にマイクを開いたままにしません。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**アプリはwhisper.cpp経由でWhisperを実行し、音声認識プロファイルは4種類です。** FAQと変更履歴には、Minimal（約75MB）、Small（512MB、既定）、Medium（1.5GB）、Large（3.2GB）、そして以前はTurboと呼ばれていたPrecisionプロファイルが挙げられています。',
          'ダウンロードページの最低要件は4GBのRAMで、8GB以上が推奨です。Macでは、Metal対応のApple Silicon M1以降が推奨され、Windowsでは、最新のマルチコアCPUまたは対応するVulkan GPUが推奨されています。どちらのプラットフォームもAVX2対応のプロセッサが必要です。FAQでは、Smallモデルの場合のディスク使用量を約600MBとしています。速度や精度の数値は、ここでは再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、音声認識はローカルで実行され、音声、文字起こし結果、入力したテキスト、クリップボードの内容は、文字起こしのためにWeesperのサーバーへ送信されないと記載されています。** ポリシーの最終更新は2026年7月23日です。利用規約には、アプリケーションが100%ローカルで動作すると追記されています。',
          'それ以外の場面ではインターネットが使われます。アプリと音声認識モデルのダウンロード、Cloudflare上のライセンスサービスによるライセンスの有効化と確認、Stripeによる課金、GitHubからのアップデート情報、任意の利用状況分析（PostHog）とクラッシュ診断（Sentry）です。ポリシーによると、分析イベントに音声、文字起こし結果、入力したテキストは含まれません。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          '有料のプロプライエタリ製品で、15日間の無料体験のあと、月5ユーロ、年45ユーロ、または99ユーロの買い切りです。7日間の返金保証があり、個人ライセンスはご自身のコンピューター最大3台に使えます。価格にVAT（付加価値税）が含まれるかはサイトに明記されていないため、購入時にご確認ください。体験後の無料プランの説明は2通りあり、FAQでは週1,500語まで、変更履歴では最長60秒の短いクリップまでとなっています。',
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
            'メリット': 'お使いのPC上のWhisper',
            '実際の使い勝手': '音声入力はマシン上で処理され、文字起こしのための音声アップロードはありません。',
            '制限・注意点': 'クローズドソースのため主張は検証できません。ライセンスとダウンロードにはインターネットが使われます。',
          },
          {
            'メリット': 'あらゆるアプリに音声入力',
            '実際の使い勝手': '1つのショートカットで、メール、チャット、ノート、文書に使えます。',
            '制限・注意点': 'MacとWindowsのみで、Linux、iPhone、Android版はありません。',
          },
          {
            'メリット': '買い切りの選択肢',
            '実際の使い勝手': '99ユーロの買い切りでサブスクリプションを避けられます。',
            '制限・注意点': '標準は月額・年額プランで、体験後の無料プランの説明は一貫していません。',
          },
          {
            'メリット': '4種類の音声認識プロファイル',
            '実際の使い勝手': '古いマシン向けの小型軽量モデルと、精度重視の大型モデルを選べます。',
            '制限・注意点': 'Largeは3.2GBのディスクと多めのRAMが必要で、速度の数値は公開されていません。',
          },
          {
            'メリット': '話者付きの会議モード',
            '実際の使い勝手': '話者分離は変更履歴に記載されています。',
            '制限・注意点': 'ここでは未検証で、サイトに精度の詳細はありません。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン1.8.12が2026年10月28日に公開されました。',
            '制限・注意点': 'Aboutなど一部のページには、古い記述が残っています。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flowと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声入力ツールは、3つのデスクトップOSに対応する無料のオープンソースアプリ、音声入力機能を持つMac向け文字起こしアプリ、Mac専用の無料音声入力アプリ、そしてハイブリッド型のオープンソースアプリです。',
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
            'アプリ': 'Weesper Neon Flow',
            '対応': 'Mac、Windows',
            '価格とライセンス': '体験後、月5ユーロまたは99ユーロ買い切り、プロプライエタリ',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': '端末内でWhisper。有料でクローズドソース',
          },
          {
            'アプリ': '[Handy](/ja/power-local-llm/handy-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': 'オープンソースで無料。Linuxにも対応',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'ファイルと会議が中心。Mac専用',
          },
          {
            'アプリ': '[FluidVoice](/ja/power-local-llm/fluidvoice-review)',
            '対応': 'Mac',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'Mac向け音声入力アプリ',
            '主な違い': '無料のオープンソース。Mac専用',
          },
          {
            'アプリ': '[OpenWhispr](/ja/power-local-llm/openwhispr-review)',
            '対応': 'Mac、Windows、Linux、iOS',
            '価格とライセンス': 'フリーミアム、MIT',
            '役割': 'ローカルまたはクラウドで使える音声入力',
            '主な違い': 'ローカルモデル、自分のAPIキー、同社クラウドから選べる',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Weesper Neon Flowが向いている人',
        items: [
          '**MacまたはWindowsで作業する書き手やオフィスワーカー。** 1つのショートカットで、メール、チャット、文書に音声入力できます。',
          '**クラウドの音声入力を避けたい人。** 開発元によると、音声認識はコンピューター上にとどまります。',
          '**多言語で作業する人。** 50以上の言語を自動検出で扱えます。',
          '**1回払いを好む人。** サブスクリプションとは別に、99ユーロの買い切りライセンスがあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Weesper Neon Flowが向いていない人',
        items: [
          '**Linux、iPhone、Androidのユーザー。** 提供されているのはMacとWindows版だけです。',
          '**監査可能なソフトウェアが必要な人。** コードは非公開で、プライバシーの主張は検証できません。',
          '**完全に無料のソフトウェアを求める人。** 体験と限定的な無料プランを除き有料です。Handyは無料のオープンソースです。',
          '**インターネットなしで作業しなければならない人。** ライセンス確認とモデルのダウンロードには接続が必要です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Weesper Neon Flowはオフラインで使えますか？',
            a: '開発元によると、アプリと音声認識モデルをインストールしたあとは、音声入力は100%オフラインで動作します。ダウンロード、体験版やライセンスの有効化、時々のライセンス確認にはインターネットが必要です。Aboutページには接続不要とあり、これと食い違っています。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: '音声はクラウドに送信されますか？',
            a: 'プライバシーポリシーには、音声、文字起こし結果、入力したテキスト、クリップボードの内容は、文字起こしのためにWeesperのサーバーへ送信されないと記載されています。コードは非公開で、PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: '料金はいくらですか？',
            a: '15日間の無料体験のあと、月5ユーロ、年45ユーロ、または99ユーロの買い切りで、7日間の返金保証があります。VATが含まれるかは購入時にご確認ください。',
          },
          {
            q: 'どのモデルを使っていますか？',
            a: 'whisper.cpp経由のOpenAI Whisperで、Minimal（約75MB）からLarge（3.2GB）まで4種類の音声認識プロファイルがあります。',
          },
          {
            q: 'Weesper Neon Flowは誰が作っていますか？',
            a: 'フランス・パリに拠点を置くTHE BLUE HOUSE（SASU）です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'MacまたはWindows PCで、開発元によるとWhisperが自分のコンピューター上で動くプッシュトゥトーク音声入力を使いたく、クローズドソースのソフトに支払うことを受け入れられる方にWeesper Neon Flowは向いています。15日間の無料体験、買い切りの選択肢、最近のリリースがあります。',
          '注意点は対応範囲と検証可能性です。Linux版とモバイル版がなく、コードは非公開で、プライバシーの主張はPromptQuorumでは確認できず、開発元のページ同士で無料プランとインターネットの要否について記述が食い違っています。購入前に体験版をお試しください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Weesper Neon Flow公式サイト](https://weesperneonflow.ai/en/) — 機能、価格、FAQ。',
          '[ダウンロードページ](https://weesperneonflow.ai/en/download/) — 対応プラットフォームとシステム要件。',
          '[変更履歴](https://weesperneonflow.ai/en/changelog/) — バージョン履歴と機能追加。',
          '[プライバシーポリシー](https://weesperneonflow.ai/en/privacy) — データの取り扱い。最終更新は2026年7月23日。',
          '[利用規約](https://weesperneonflow.ai/en/terms/) — 運営者とローカル動作に関する記述。',
          '[GitHubリリース](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — インストーラーのアセットとバージョン1.8.12のリリース日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Handyレビュー](/ja/power-local-llm/handy-review) — Mac、Windows、Linux向けの無料オープンソース音声入力アプリ。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — 音声入力機能を持つMac向け文字起こしアプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
          '[Sprichレビュー：Apple Silicon搭載Mac向けドイツ製音声入力アプリ](/ja/power-local-llm/sprich-review) — ドイツ語優先のもう一つのMac用音声入力アプリ。無料プランがあり、Apple Siliconのみ対応。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-zh.webp',
    title: 'Weesper Neon Flow评测：适用于Mac和Windows的离线听写应用',
    seoTitle: 'Weesper Neon Flow评测：Mac和Windows离线听写应用',
    intro: 'Weesper Neon Flow是一款适用于Mac和Windows的付费闭源听写应用：按住快捷键说话，它就把整理后的文字输入到光标所在的任意应用中，并在你自己的电脑上运行OpenAI的Whisper模型。本评测梳理其官网、更新日志和隐私政策记载的内容、这些页面之间互相矛盾之处，以及它与目录中其他听写工具的对比。',
    metaDescription: 'Weesper Neon Flow评测：适用于Mac和Windows的付费Whisper听写应用，据开发者称在你的电脑上运行。15天试用，之后每月5欧元或一次性99欧元，未经实测。',
    twitterDescription: 'Weesper Neon Flow评测：适用于Mac和Windows的按键听写工具，Whisper在你自己的电脑上运行。价格、隐私、限制与替代方案。',
    audience: '希望在任意应用中听写、又不想把语音发送到云服务的Mac和Windows用户——涵盖价格、安装、模型、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'weesper neon flow 评测',
      'weesper neon flow',
      'mac windows 离线听写应用',
      '本地 whisper 听写',
      '无需云端的语音听写',
      '桌面端私密语音转文字',
      'whisper 听写应用',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flow是一款适用于Mac和Windows的闭源听写应用，在你自己的电脑上运行OpenAI的Whisper模型，其开发者称音频和听写文字不会离开这台机器。** 15天免费试用之后，每月5欧元、每年45欧元，或一次性99欧元。最新版本为2026年10月28日发布的1.8.12。本评测依据开发者公开的官网、更新日志、隐私政策和GitHub发布页面，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Weesper Neon Flow是本地听写应用吗？',
        answer: '据其开发者称，是：语音识别在你的Mac或Windows电脑上用Whisper运行，音频、转写结果和听写文字不会发送到开发者的服务器。不过下载应用和语音模型、许可证检查、计费、更新以及可选的诊断仍会使用互联网。代码为闭源，PromptQuorum也没有检查网络流量，因此这一说法出自开发者自己。',
        bullets: [
          '按住快捷键、说话、松开：整理后的文字出现在Gmail、Slack、Notion或Word等应用的光标处。',
          '价格：15天免费试用（含全部功能），之后每月5欧元、每年45欧元，或一次性99欧元。',
          '四种语音配置，从Minimal（约75 MB）到Large（3.2 GB）；默认为Small（512 MB）。',
          '仅支持Mac（macOS 13或更高版本）以及Windows 10或11；没有Linux、iPhone或Android版本。',
          '开发者的各个页面对是否需要联网，以及试用期后的免费方案包含什么，说法不一致。',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Weesper Neon Flow', anchor: 'get-it' },
      { label: 'Weesper Neon Flow概览', anchor: 'at-a-glance' },
      { label: 'Weesper Neon Flow是什么', anchor: 'what-is-weesper' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Weesper Neon Flow的人', anchor: 'who-should-use' },
      { label: '不适合使用Weesper Neon Flow的人', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flow是一款适用于Mac和Windows的付费听写应用，据其开发者称，它在你自己的电脑上运行Whisper，而不是使用云服务。',
          },
          {
            type: 'plain-terms',
            text: '把它想成一个会替你打字的麦克风键：按住快捷键、说话、松开，你的电脑就把语音转成文字，而不会把音频发给开发者。',
          },
        ],
        items: [
          '本地说法：语音识别在设备上用Whisper运行；下载、许可证检查、计费、更新和可选的诊断仍会使用互联网。',
          '许可与开发者：专有软件，由巴黎的THE BLUE HOUSE (SASU)发布；所链接的GitHub仓库只托管发布安装包。',
          '价格：15天免费试用，之后每月5欧元、每年45欧元或一次性99欧元，并提供7天退款保证。',
          '维护状态：版本1.8.12于2026年10月28日发布，说明项目仍在积极更新。',
          '不足：没有Linux或移动版本，开发者自己的页面在免费方案和是否需要联网上互相矛盾。',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: '获取Weesper Neon Flow',
        content: [
          '**Weesper Neon Flow的安装方式与其他桌面应用相同，无需使用终端。** 从官网下载适合你系统的安装包；语音模型在应用内下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://weesperneonflow.ai/en/download/) — .dmg，macOS 13或更高版本，Apple Silicon或支持AVX2的Intel',
          },
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://weesperneonflow.ai/en/download/) — .msi，Windows 10 build 19041或更高版本，或Windows 11，支持AVX2的x64',
          },
          {
            '平台': '免费试用（15天）',
            '获取方式': '[开始试用](https://weesperneonflow.ai/en/#pricing) — 全部功能，无需信用卡',
          },
          {
            '平台': '发布说明',
            '获取方式': '[更新日志](https://weesperneonflow.ai/en/changelog/)和[GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            '平台': '官网',
            '获取方式': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Weesper Neon Flow隐私政策](https://weesperneonflow.ai/en/privacy)',
          },
          {
            '平台': '源代码',
            '获取方式': '闭源；GitHub仓库只托管发布安装包',
          },
        ],
        note: '下载页面只列出macOS和Windows；没有提供Linux、iOS或Android版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow概览',
        columns: ['属性', 'Weesper Neon Flow'],
        rows: [
          { '属性': '平台', 'Weesper Neon Flow': 'macOS 13+和Windows 10/11' },
          { '属性': '价格', 'Weesper Neon Flow': '15天试用，之后每月5欧元、每年45欧元或一次性99欧元' },
          { '属性': '许可', 'Weesper Neon Flow': '专有，闭源' },
          { '属性': '运行方式', 'Weesper Neon Flow': '在你的电脑上用Whisper（whisper.cpp）运行；下载和许可证检查需要联网' },
          { '属性': '语言', 'Weesper Neon Flow': '50多种，自动检测（下载页面称55多种）' },
          { '属性': '说话人标注', 'Weesper Neon Flow': '有，在会议模式中（更新日志1.7.5）' },
          { '属性': '实时转录', 'Weesper Neon Flow': '未说明；松开快捷键后插入文字' },
          { '属性': '仅用CPU可用', 'Weesper Neon Flow': '未说明；推荐的基准配置是较新的多核CPU' },
          { '属性': '本地API服务器', 'Weesper Neon Flow': '未说明' },
        ],
        note: '各属性沿用Local LLM Software Directory中语音转文字对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'Weesper Neon Flow是什么',
        content: [
          '**Weesper Neon Flow是一款按键说话式的听写应用，而不是转录编辑器。** 你按住键盘快捷键、说话、松开；应用在电脑上运行Whisper，并把整理后的文字插入光标处，例如Gmail、Slack、Notion或Word中。',
          '开发者是位于巴黎的THE BLUE HOUSE (SASU)，“关于”页面称该产品创立于2024年。它还销售另一款用于音频和视频文件的产品Weesper Transcribe；本评测只涵盖听写应用。',
          '本评测依据官网、更新日志、隐私政策、条款和GitHub发布页面，没有进行实际上手测试，因此这里不对准确度、速度和稳定性做评级。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、下载模型和设定快捷键。** 以下步骤依据官网及其更新日志。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[下载页面](https://weesperneonflow.ai/en/download/)下载Mac版的.dmg或Windows版的.msi，并开始15天试用；无需信用卡。',
          },
          {
            title: '选择语音配置',
            whyItMatters: '默认的Small配置为512 MB。更新日志称，在推荐模型下载期间，听写可使用内置模型。',
          },
          {
            title: '按住、说话、松开',
            whyItMatters: '点进任意文本框，按住听写快捷键，说话，然后松开。版本1.7.6新增了点按切换模式。',
          },
          {
            title: '调整输出',
            whyItMatters: '把词语加入自定义词典，设置文本快捷方式，并试用官网列出的上下文提示和自定义提示。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在向任意应用快速、私密地听写。** 以下内容均来自官网和更新日志。',
        ],
        items: [
          '**随处听写。** 文字会插入到任何可输入文字的应用的光标处。',
          '**整理文字。** 自动去除口头禅，并提供智能标点和大小写。',
          '**语言。** 支持50多种语言并自动检测，也可以用一种语言说话、得到另一种语言的文字。',
          '**会议模式。** 说话人区分功能在版本1.7.5中加入。',
          '**个性化。** 自定义词典、文本快捷方式、上下文提示、自定义提示和听写历史。',
          '**麦克风待机。** 自版本1.7.10起，应用在两次听写之间不再保持麦克风打开。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**应用通过whisper.cpp运行Whisper，提供四种语音配置。** 常见问题和更新日志列出了Minimal（约75 MB）、Small（512 MB，默认）、Medium（1.5 GB）和Large（3.2 GB），另有一个原名Turbo的Precision配置。',
          '下载页面列出最低4 GB内存，推荐8 GB或更多。Mac上推荐配备Metal的Apple Silicon M1或更新的芯片；Windows上推荐较新的多核CPU或受支持的Vulkan GPU。两个平台都需要支持AVX2的处理器。常见问题提到使用Small模型时约占用600 MB磁盘空间。这里没有复现任何速度或准确度数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，语音识别在本地运行，音频、转写结果、听写文字和剪贴板内容不会为转录而发送到Weesper服务器。** 该政策最后更新于2026年7月23日。条款补充说，该应用100%在本地运行。',
          '互联网在其他方面仍会用到：下载应用和语音模型，通过托管在Cloudflare上的许可服务激活和检查许可证，通过Stripe计费，从GitHub获取更新元数据，以及可选的产品分析（PostHog）和崩溃诊断（Sentry）。政策称分析事件不包含音频、转写结果或听写文字。代码为闭源，PromptQuorum也没有检查网络流量，因此这些说法出自开发者自己。',
          '这是付费的专有产品：15天免费试用，之后每月5欧元、每年45欧元或一次性99欧元，并提供7天退款保证。个人许可证最多可用于你自己的三台电脑。官网没有明确说明价格是否含增值税，请在结账时确认。试用期后的免费方案有两种说法：常见问题称每周1,500词，更新日志称最长60秒的短片段。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': 'Whisper在你的电脑上运行',
            '实际使用中的意义': '听写在本机处理，转录时不上传音频。',
            '局限 / 注意事项': '闭源，因此该说法无法核实；许可证和下载仍会使用互联网。',
          },
          {
            '优势': '可在任意应用中听写',
            '实际使用中的意义': '一个快捷键可用于邮件、聊天、笔记和文档。',
            '局限 / 注意事项': '仅限Mac和Windows；没有Linux、iPhone或Android版本。',
          },
          {
            '优势': '终身买断选项',
            '实际使用中的意义': '一次性支付99欧元即可避免订阅。',
            '局限 / 注意事项': '默认方案是月付和年付；试用期后的免费方案说法不一致。',
          },
          {
            '优势': '四种语音配置',
            '实际使用中的意义': '较小较轻的模型适合旧电脑，较大的模型提高准确度。',
            '局限 / 注意事项': 'Large需要3.2 GB磁盘空间和更多内存；没有公布速度数据。',
          },
          {
            '优势': '带说话人的会议模式',
            '实际使用中的意义': '更新日志记载了说话人区分功能。',
            '局限 / 注意事项': '这里未经测试；官网没有给出准确度细节。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '版本1.8.12于2026年10月28日发布。',
            '局限 / 注意事项': '部分页面（如“关于”）仍保留较旧的表述。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow与替代方案对比',
        content: [
          '目录中最接近的听写工具包括：一款支持三种桌面系统的免费开源应用、一款带听写功能的Mac转录应用、一款免费的仅限Mac的听写应用，以及一款混合模式的开源应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Weesper Neon Flow',
            '平台': 'Mac、Windows',
            '价格与许可': '试用后每月5欧元或一次性99欧元，专有',
            '定位': '按键听写',
            '主要区别': 'Whisper在设备上运行；付费且闭源',
          },
          {
            '应用': '[Handy](/zh/power-local-llm/handy-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '按键听写',
            '主要区别': '开源且免费；支持Linux',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac转录应用',
            '主要区别': '首先面向文件和会议；仅限Mac',
          },
          {
            '应用': '[FluidVoice](/zh/power-local-llm/fluidvoice-review)',
            '平台': 'Mac',
            '价格与许可': '免费，GPL-3.0',
            '定位': 'Mac听写应用',
            '主要区别': '免费且开源；仅限Mac',
          },
          {
            '应用': '[OpenWhispr](/zh/power-local-llm/openwhispr-review)',
            '平台': 'Mac、Windows、Linux、iOS',
            '价格与许可': '免费增值，MIT',
            '定位': '本地或云端模式的听写',
            '主要区别': '可选择本地模型、自己的API密钥或其云服务',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Weesper Neon Flow的人',
        items: [
          '**Mac或Windows上的写作者和办公人员。** 一个快捷键即可在邮件、聊天和文档中听写。',
          '**回避云端听写的人。** 据开发者称，语音识别保留在电脑上。',
          '**使用多种语言的用户。** 支持50多种语言并自动检测。',
          '**偏好一次性付费的买家。** 除订阅外还有99欧元的终身许可证。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Weesper Neon Flow的人',
        items: [
          '**Linux、iPhone和Android用户。** 只提供Mac和Windows版本。',
          '**需要可审计软件的人。** 代码为闭源，隐私说法无法检验。',
          '**想要完全免费软件的人。** 除试用和有限的免费方案外，使用需要付费；Handy免费且开源。',
          '**必须完全不联网工作的人。** 许可证和模型下载需要网络连接。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Weesper Neon Flow可以离线使用吗？',
            a: '开发者称，应用和语音模型安装之后，听写可完全离线运行。下载它们、激活试用或许可证以及偶尔的许可证检查需要联网。“关于”页面称无需网络连接，与此矛盾。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我的声音会被发送到云端吗？',
            a: '隐私政策称，音频、转写结果、听写文字和剪贴板内容不会为转录而发送到Weesper服务器。代码为闭源，PromptQuorum也没有检查网络流量。',
          },
          {
            q: '价格是多少？',
            a: '15天免费试用之后，每月5欧元、每年45欧元或一次性99欧元，并提供7天退款保证。请在结账时确认是否含增值税。',
          },
          {
            q: '它使用哪些模型？',
            a: '通过whisper.cpp运行OpenAI Whisper，有四种语音配置，从Minimal（约75 MB）到Large（3.2 GB）。',
          },
          {
            q: '谁开发了Weesper Neon Flow？',
            a: 'THE BLUE HOUSE (SASU)，一家位于法国巴黎的公司。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想在Mac或Windows电脑上使用按键听写，并且据开发者称Whisper在你自己的电脑上运行，同时你接受为闭源软件付费，Weesper Neon Flow是个合适的选择。它提供15天免费试用、终身买断选项和较新的版本。',
          '需要注意的是适用范围和可验证性：没有Linux或移动版本、代码闭源、PromptQuorum无法核实隐私说法，而且开发者的页面在免费方案和是否需要联网上说法不一。购买前请先使用试用版。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Weesper Neon Flow官网](https://weesperneonflow.ai/en/) — 功能、价格和常见问题。',
          '[下载页面](https://weesperneonflow.ai/en/download/) — 平台和系统要求。',
          '[更新日志](https://weesperneonflow.ai/en/changelog/) — 版本历史和新增功能。',
          '[隐私政策](https://weesperneonflow.ai/en/privacy) — 数据处理，最后更新于2026年7月23日。',
          '[使用条款](https://weesperneonflow.ai/en/terms/) — 运营方和本地运行声明。',
          '[GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — 安装包文件和版本1.8.12的发布日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[Handy评测](/zh/power-local-llm/handy-review) — 适用于Mac、Windows和Linux的免费开源听写应用。',
          '[MacWhisper评测](/zh/power-local-llm/macwhisper-review) — 带听写功能的Mac转录应用。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
          '[Sprich评测：适用于 Apple Silicon Mac 的德国听写应用](/zh/power-local-llm/sprich-review) — 另一款以德语为先的 Mac 听写应用，有免费套餐，仅支持 Apple Silicon。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-es.webp',
    title: 'Reseña de Weesper Neon Flow: dictado sin conexión para Mac y Windows',
    seoTitle: 'Reseña de Weesper Neon Flow: dictado sin conexión',
    intro: 'Weesper Neon Flow es una app de dictado de pago y de código cerrado para Mac y Windows: mantienes pulsado un atajo, hablas y la app escribe el texto limpio en la aplicación que tenga el cursor, con el modelo Whisper de OpenAI ejecutándose en tu propio ordenador. Esta reseña resume lo que documentan la web, el registro de cambios y la política de privacidad del fabricante, dónde se contradicen esas páginas y cómo se compara con otras herramientas de dictado del directorio.',
    metaDescription: 'Reseña de Weesper Neon Flow: dictado con Whisper para Mac y Windows, local según su fabricante. Prueba de 15 días, luego 5 €/mes. No probada.',
    twitterDescription: 'Reseña de Weesper Neon Flow: dictado por atajo para Mac y Windows con Whisper en tu propio ordenador. Precio, privacidad, límites y alternativas.',
    audience: 'Usuarios de Mac y Windows que quieren dictar en cualquier app sin enviar su voz a un servicio en la nube — cubre precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'reseña weesper neon flow',
      'weesper neon flow',
      'app de dictado sin conexión mac windows',
      'dictado local con whisper',
      'dictado por voz sin nube',
      'voz a texto privado en el escritorio',
      'app de dictado whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flow es una app de dictado de código cerrado para Mac y Windows que ejecuta el modelo Whisper de OpenAI en tu propio ordenador, y su fabricante afirma que el audio y el texto dictado nunca salen del equipo.** Cuesta 5 € al mes, 45 € al año o 99 € de pago único tras una prueba gratuita de 15 días. La versión más reciente es la 1.8.12, del 28 de octubre de 2026. Esta reseña se basa en la web pública, el registro de cambios y la política de privacidad del fabricante, y en su página de versiones de GitHub, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es Weesper Neon Flow una app de dictado local?',
        answer: 'Según su fabricante, sí: el reconocimiento de voz se ejecuta en tu Mac o PC con Windows mediante Whisper, y el audio, las transcripciones y el texto dictado no se envían a los servidores del fabricante. Internet se sigue usando para descargar la app y los modelos de voz, comprobar la licencia, cobrar, actualizar y, de forma opcional, enviar diagnósticos. El código es cerrado y PromptQuorum no inspeccionó el tráfico de red, así que la afirmación es del propio fabricante.',
        bullets: [
          'Mantén pulsado un atajo, habla y suéltalo: el texto limpio aparece en el cursor en apps como Gmail, Slack, Notion o Word.',
          'Precio: prueba gratuita de 15 días con todas las funciones, luego 5 € al mes, 45 € al año o 99 € de pago único.',
          'Cuatro perfiles de voz, de Minimal (unos 75 MB) a Large (3,2 GB); Small (512 MB) es el predeterminado.',
          'Solo Mac (macOS 13 o posterior) y Windows 10 u 11; no hay versión para Linux, iPhone ni Android.',
          'Las páginas del fabricante se contradicen sobre si hace falta internet y sobre qué incluye el plan gratuito tras la prueba.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Weesper Neon Flow', anchor: 'get-it' },
      { label: 'Weesper Neon Flow de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Weesper Neon Flow', anchor: 'what-is-weesper' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Weesper Neon Flow', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Weesper Neon Flow', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flow es una app de dictado de pago para Mac y Windows que, según su fabricante, ejecuta Whisper en tu propio ordenador en lugar de en un servicio en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una tecla de micrófono que escribe por ti: mantienes el atajo, hablas, lo sueltas y tu ordenador convierte la voz en texto sin enviar el audio al fabricante.',
          },
        ],
        items: [
          'Afirmación de uso local: el reconocimiento de voz se ejecuta en el dispositivo con Whisper; las descargas, las comprobaciones de licencia, el cobro, las actualizaciones y los diagnósticos opcionales siguen usando internet.',
          'Licencia y fabricante: propietaria, publicada por THE BLUE HOUSE (SASU) en París; el repositorio de GitHub enlazado solo aloja instaladores de las versiones.',
          'Precio: prueba gratuita de 15 días, luego 5 € al mes, 45 € al año o 99 € de pago único, con garantía de devolución de 7 días.',
          'Mantenimiento: la versión 1.8.12 salió el 28 de octubre de 2026, así que el proyecto se actualiza de forma activa.',
          'Carencias: sin versión para Linux ni móvil, y las propias páginas del fabricante se contradicen sobre el plan gratuito y sobre la necesidad de internet.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Conseguir Weesper Neon Flow',
        content: [
          '**Weesper Neon Flow se instala como cualquier app de escritorio, no hace falta terminal.** Descarga el instalador para tu sistema desde la web oficial; los modelos de voz se descargan dentro de la app.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 o posterior, Apple Silicon o Intel con AVX2',
          },
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 compilación 19041 o posterior o Windows 11, x64 con AVX2',
          },
          {
            Plataforma: 'Prueba gratuita (15 días)',
            'Dónde conseguirla': '[Empezar la prueba](https://weesperneonflow.ai/en/#pricing) — todas las funciones, sin tarjeta de crédito',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[Registro de cambios](https://weesperneonflow.ai/en/changelog/) y [versiones de GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Weesper Neon Flow](https://weesperneonflow.ai/en/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'Código cerrado; el repositorio de GitHub solo aloja instaladores',
          },
        ],
        note: 'La página de descarga solo lista macOS y Windows; no se ofrece ninguna compilación para Linux, iOS ni Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow de un vistazo',
        columns: ['Atributo', 'Weesper Neon Flow'],
        rows: [
          { Atributo: 'Plataforma', 'Weesper Neon Flow': 'macOS 13+ y Windows 10/11' },
          { Atributo: 'Precio', 'Weesper Neon Flow': 'Prueba de 15 días, luego 5 €/mes, 45 €/año o 99 € único' },
          { Atributo: 'Licencia', 'Weesper Neon Flow': 'Propietaria, código cerrado' },
          { Atributo: 'Ejecución', 'Weesper Neon Flow': 'En tu ordenador con Whisper (whisper.cpp); internet para descargas y licencia' },
          { Atributo: 'Idiomas', 'Weesper Neon Flow': 'Más de 50 con detección automática (la página de descarga dice más de 55)' },
          { Atributo: 'Etiquetas de hablante', 'Weesper Neon Flow': 'Sí, en el modo Reunión (registro de cambios 1.7.5)' },
          { Atributo: 'Transcripción en tiempo real', 'Weesper Neon Flow': 'No indicado; el texto se inserta al soltar el atajo' },
          { Atributo: 'Usable solo con CPU', 'Weesper Neon Flow': 'No indicado; se recomienda una CPU multinúcleo moderna' },
          { Atributo: 'Servidor de API local', 'Weesper Neon Flow': 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'Qué es Weesper Neon Flow',
        content: [
          '**Weesper Neon Flow es una app de dictado por atajo, no un editor de transcripciones.** Mantienes pulsado un atajo de teclado, hablas y lo sueltas; la app ejecuta Whisper en el ordenador e inserta el texto limpio en el cursor, por ejemplo en Gmail, Slack, Notion o Word.',
          'El fabricante es THE BLUE HOUSE (SASU), con sede en París, y la página Acerca de dice que el producto se fundó en 2024. También vende otro producto, Weesper Transcribe, para archivos de audio y vídeo; esta reseña cubre solo la app de dictado.',
          'Esta reseña se basa en la web, el registro de cambios, la política de privacidad, las condiciones y la página de versiones de GitHub. No hubo prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, una descarga de modelo y un atajo.** Los pasos siguen la web y su registro de cambios.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el .dmg para Mac o el .msi para Windows desde la [página de descarga](https://weesperneonflow.ai/en/download/) y empieza la prueba de 15 días; no hace falta tarjeta de crédito.',
          },
          {
            title: 'Elige un perfil de voz',
            whyItMatters: 'El perfil Small predeterminado ocupa 512 MB. El registro de cambios dice que el dictado funciona con un modelo incluido mientras se descarga el recomendado.',
          },
          {
            title: 'Mantén, habla, suelta',
            whyItMatters: 'Haz clic en cualquier campo de texto, mantén pulsado el atajo de dictado, habla y suéltalo. En la versión 1.7.6 se añadió un modo de pulsar para alternar.',
          },
          {
            title: 'Ajusta el resultado',
            whyItMatters: 'Añade palabras al diccionario personalizado, define atajos de texto y prueba los prompts contextuales y personalizados que cita la web.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en un dictado rápido y privado en cualquier app.** Todo lo siguiente procede de la web y del registro de cambios.',
        ],
        items: [
          '**Dictado en cualquier sitio.** El texto se inserta en el cursor de cualquier app que acepte escritura.',
          '**Limpieza.** Eliminación automática de muletillas, además de puntuación y mayúsculas inteligentes.',
          '**Idiomas.** Más de 50 idiomas con detección automática, y la posibilidad de hablar en un idioma para obtener el texto en otro.',
          '**Modo Reunión.** La identificación de hablantes se añadió en la versión 1.7.5.',
          '**Personalización.** Un diccionario personalizado, atajos de texto, prompts contextuales, prompts personalizados y un historial de dictados.',
          '**Micrófono en espera.** Desde la versión 1.7.10 la app ya no mantiene el micrófono abierto entre dictados.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**La app ejecuta Whisper mediante whisper.cpp, con cuatro perfiles de voz.** Las preguntas frecuentes y el registro de cambios citan Minimal (unos 75 MB), Small (512 MB, el predeterminado), Medium (1,5 GB) y Large (3,2 GB), además de un perfil Precision que antes se llamaba Turbo.',
          'La página de descarga indica un mínimo de 4 GB de RAM y recomienda 8 GB o más. En Mac se recomienda un Apple Silicon M1 o posterior con Metal; en Windows, una CPU multinúcleo moderna o una GPU Vulkan compatible. Ambas plataformas necesitan un procesador con AVX2. Las preguntas frecuentes citan unos 600 MB de disco con el modelo Small. Aquí no se reprodujo ninguna cifra de velocidad ni de precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que el reconocimiento de voz se ejecuta en local y que el audio, las transcripciones, el texto dictado y el contenido del portapapeles no se envían a los servidores de Weesper para transcribir.** La política se actualizó por última vez el 23 de julio de 2026. Las condiciones añaden que la aplicación funciona al 100 % en local.',
          'Internet interviene igualmente en otros puntos: descargas de la app y de los modelos de voz, activación y comprobación de la licencia mediante un servicio de licencias alojado en Cloudflare, cobro a través de Stripe, metadatos de actualización de GitHub y, de forma opcional, analítica de producto (PostHog) y diagnósticos de fallos (Sentry). La política dice que los eventos de analítica no incluyen audio, transcripciones ni texto dictado. El código es cerrado y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'Es un producto de pago y propietario: prueba gratuita de 15 días, luego 5 € al mes, 45 € al año o 99 € de pago único, con garantía de devolución de 7 días. Una licencia personal cubre hasta tres de tus propios ordenadores. La web no aclara si los precios incluyen IVA, así que compruébalo al pagar. El plan gratuito tras la prueba se describe de dos formas: 1.500 palabras por semana en las preguntas frecuentes y clips cortos de hasta 60 segundos en el registro de cambios.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Whisper en tu ordenador',
            'Qué significa en el uso real': 'El dictado se procesa en el equipo, sin subir audio para transcribirlo.',
            'Limitación / advertencia': 'Código cerrado, así que la afirmación no se puede comprobar; internet se sigue usando para licencia y descargas.',
          },
          {
            Ventaja: 'Dictado en cualquier app',
            'Qué significa en el uso real': 'Un solo atajo funciona en correo, chat, notas y documentos.',
            'Limitación / advertencia': 'Solo Mac y Windows; sin versión para Linux, iPhone ni Android.',
          },
          {
            Ventaja: 'Opción vitalicia',
            'Qué significa en el uso real': 'Una compra única de 99 € evita la suscripción.',
            'Limitación / advertencia': 'Los planes mensual y anual son los predeterminados; el plan gratuito tras la prueba se describe de forma incoherente.',
          },
          {
            Ventaja: 'Cuatro perfiles de voz',
            'Qué significa en el uso real': 'Modelos pequeños y ligeros para equipos antiguos, mayores para más precisión.',
            'Limitación / advertencia': 'Large necesita 3,2 GB de disco y más RAM; no se publican cifras de velocidad.',
          },
          {
            Ventaja: 'Modo Reunión con hablantes',
            'Qué significa en el uso real': 'La identificación de hablantes figura en el registro de cambios.',
            'Limitación / advertencia': 'No probada aquí; la web no da detalles de precisión.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 1.8.12 salió el 28 de octubre de 2026.',
            'Limitación / advertencia': 'Algunas páginas, como Acerca de, conservan redacciones más antiguas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow frente a alternativas',
        content: [
          'Estas son las herramientas de dictado más cercanas del directorio: una app gratuita de código abierto para tres sistemas de escritorio, una app de transcripción para Mac con dictado, una app de dictado gratuita solo para Mac y una app de código abierto híbrida.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Weesper Neon Flow',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Prueba, luego 5 €/mes o 99 € único, propietaria',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Whisper en el dispositivo; de pago y código cerrado',
          },
          {
            App: '[Handy](/es/power-local-llm/handy-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Código abierto y gratuita; añade Linux',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'App de transcripción para Mac',
            'Diferencia clave': 'Pensada primero para archivos y reuniones; solo Mac',
          },
          {
            App: '[FluidVoice](/es/power-local-llm/fluidvoice-review)',
            Plataformas: 'Mac',
            'Precio y licencia': 'Gratis, GPL-3.0',
            Papel: 'App de dictado para Mac',
            'Diferencia clave': 'Gratuita y de código abierto; solo Mac',
          },
          {
            App: '[OpenWhispr](/es/power-local-llm/openwhispr-review)',
            Plataformas: 'Mac, Windows, Linux, iOS',
            'Precio y licencia': 'Freemium, MIT',
            Papel: 'Dictado con modos local o en la nube',
            'Diferencia clave': 'Eliges modelos locales, tu propia clave de API o su nube',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Weesper Neon Flow',
        items: [
          '**Redactores y personal de oficina en Mac o Windows.** Un solo atajo dicta en correo, chat y documentos.',
          '**Personas que evitan el dictado en la nube.** El reconocimiento de voz se queda en el ordenador, según el fabricante.',
          '**Usuarios multilingües.** Más de 50 idiomas con detección automática.',
          '**Compradores que prefieren pagar una vez.** Existe una licencia vitalicia de 99 € junto a las suscripciones.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Weesper Neon Flow',
        items: [
          '**Usuarios de Linux, iPhone y Android.** Solo se ofrecen compilaciones para Mac y Windows.',
          '**Quien necesite software auditable.** El código es cerrado y las afirmaciones de privacidad no se pueden inspeccionar.',
          '**Quien quiera software totalmente gratuito.** Más allá de la prueba y de un plan gratuito limitado, el uso es de pago; Handy es gratuita y de código abierto.',
          '**Quien deba trabajar sin ninguna conexión a internet.** La licencia y la descarga de modelos necesitan conexión.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Weesper Neon Flow sin conexión?',
            a: 'El fabricante dice que el dictado funciona al 100 % sin conexión una vez instalados la app y un modelo de voz. Hace falta internet para descargarlos, activar la prueba o la licencia y para comprobaciones de licencia ocasionales. La página Acerca de dice que no se necesita conexión, lo que contradice lo anterior. PromptQuorum no la probó sin conexión.',
          },
          {
            q: '¿Se envía mi voz a la nube?',
            a: 'La política de privacidad dice que el audio, las transcripciones, el texto dictado y el contenido del portapapeles no se envían a los servidores de Weesper para transcribir. El código es cerrado y PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Cuánto cuesta?',
            a: 'Tras una prueba gratuita de 15 días, 5 € al mes, 45 € al año o 99 € de pago único, con garantía de devolución de 7 días. Comprueba al pagar si el IVA está incluido.',
          },
          {
            q: '¿Qué modelos usa?',
            a: 'OpenAI Whisper mediante whisper.cpp, en cuatro perfiles de voz, de Minimal (unos 75 MB) a Large (3,2 GB).',
          },
          {
            q: '¿Quién hace Weesper Neon Flow?',
            a: 'THE BLUE HOUSE (SASU), una empresa con sede en París, Francia.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Weesper Neon Flow encaja si quieres dictado por atajo en un Mac o PC con Windows donde, según el fabricante, Whisper se ejecuta en tu propio ordenador, y aceptas pagar por software de código cerrado. Tiene una prueba gratuita de 15 días, una opción vitalicia y una versión reciente.',
          'Las advertencias son el alcance y la verificabilidad: sin versión para Linux ni móvil, código cerrado, afirmaciones de privacidad que PromptQuorum no pudo comprobar y páginas del fabricante que se contradicen sobre el plan gratuito y sobre la necesidad de internet. Usa la prueba antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Weesper Neon Flow](https://weesperneonflow.ai/en/) — funciones, precios y preguntas frecuentes.',
          '[Página de descarga](https://weesperneonflow.ai/en/download/) — plataformas y requisitos del sistema.',
          '[Registro de cambios](https://weesperneonflow.ai/en/changelog/) — historial de versiones y funciones añadidas.',
          '[Política de privacidad](https://weesperneonflow.ai/en/privacy) — tratamiento de datos, actualizada por última vez el 23 de julio de 2026.',
          '[Condiciones de uso](https://weesperneonflow.ai/en/terms/) — operador y declaración de funcionamiento local.',
          '[Versiones de GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — archivos del instalador y fecha de lanzamiento de la versión 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de Handy](/es/power-local-llm/handy-review) — una app de dictado gratuita y de código abierto para Mac, Windows y Linux.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app de transcripción para Mac con dictado.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps locales de Whisper.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
          '[Reseña de Sprich: app de dictado alemana para Mac con Apple Silicon](/es/power-local-llm/sprich-review) — otra app de dictado para Mac, orientada primero al alemán, con plan gratuito y solo para Apple Silicon.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-pt.webp',
    title: 'Análise do Weesper Neon Flow: ditado offline para Mac e Windows',
    seoTitle: 'Análise do Weesper Neon Flow: ditado offline no Mac e PC',
    intro: 'O Weesper Neon Flow é um app de ditado pago e de código fechado para Mac e Windows: você segura um atalho, fala, e ele digita o texto já limpo no app em que estiver o cursor, executando o modelo Whisper da OpenAI no seu próprio computador. Esta análise resume o que o site, o changelog e a política de privacidade do fabricante documentam, onde essas páginas se contradizem e como o app se compara a outras ferramentas de ditado do diretório.',
    metaDescription: 'Análise do Weesper Neon Flow: ditado com Whisper para Mac e Windows, local segundo o fabricante. Teste grátis de 15 dias, depois 5 EUR/mês. Não testado.',
    twitterDescription: 'Análise do Weesper Neon Flow: ditado por atalho para Mac e Windows com Whisper no seu próprio computador. Preço, privacidade, limites e alternativas.',
    audience: 'Usuários de Mac e Windows que querem ditar em qualquer app sem enviar a voz para um serviço na nuvem — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'análise weesper neon flow',
      'weesper neon flow',
      'app de ditado offline mac windows',
      'ditado local com whisper',
      'ditado por voz sem nuvem',
      'voz para texto privado desktop',
      'app de ditado whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**O Weesper Neon Flow é um app de ditado de código fechado para Mac e Windows que executa o modelo Whisper da OpenAI no seu próprio computador, e o fabricante afirma que o áudio e o texto ditado nunca saem da máquina.** Custa 5 EUR por mês, 45 EUR por ano ou 99 EUR únicos após um teste grátis de 15 dias. A versão mais recente é a 1.8.12, de 28 de outubro de 2026. Esta análise se baseia no site público, no changelog e na política de privacidade do fabricante e na página de versões no GitHub, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O Weesper Neon Flow é um app de ditado local?',
        answer: 'Segundo o fabricante, sim: o reconhecimento de fala roda no seu Mac ou PC com Windows usando o Whisper, e áudio, transcrições e texto ditado não são enviados aos servidores do fabricante. A internet ainda é usada para baixar o app e os modelos de fala, verificar a licença, cobrança, atualizações e diagnósticos opcionais. O código é fechado e o PromptQuorum não inspecionou o tráfego de rede, então a afirmação é do próprio fabricante.',
        bullets: [
          'Segure um atalho, fale, solte: o texto limpo aparece no cursor em apps como Gmail, Slack, Notion ou Word.',
          'Preço: teste grátis de 15 dias com todos os recursos, depois 5 EUR por mês, 45 EUR por ano ou 99 EUR únicos.',
          'Quatro perfis de fala, do Minimal (cerca de 75 MB) ao Large (3.2 GB); o Small (512 MB) é o padrão.',
          'Apenas Mac (macOS 13 ou mais recente) e Windows 10 ou 11; sem versão para Linux, iPhone ou Android.',
          'As páginas do fabricante divergem sobre a internet ser necessária e sobre o que o plano grátis após o teste inclui.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Weesper Neon Flow', anchor: 'get-it' },
      { label: 'Weesper Neon Flow em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Weesper Neon Flow', anchor: 'what-is-weesper' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Weesper Neon Flow serve', anchor: 'who-should-use' },
      { label: 'Para quem o Weesper Neon Flow não serve', anchor: 'who-should-not-use' },
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
            text: 'O Weesper Neon Flow é um app pago de ditado para Mac e Windows que, segundo o fabricante, executa o Whisper no seu próprio computador em vez de um serviço na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma tecla de microfone que digita por você: segure o atalho, fale, solte, e o seu computador transforma a fala em texto sem enviar o áudio ao fabricante.',
          },
        ],
        items: [
          'Afirmação de uso local: o reconhecimento de fala roda no aparelho com o Whisper; downloads, verificação de licença, cobrança, atualizações e diagnósticos opcionais ainda usam a internet.',
          'Licença e fabricante: proprietário, publicado pela THE BLUE HOUSE (SASU), em Paris; o repositório do GitHub vinculado hospeda apenas instaladores de versões.',
          'Preço: teste grátis de 15 dias, depois 5 EUR por mês, 45 EUR por ano ou 99 EUR únicos, com garantia de reembolso de 7 dias.',
          'Manutenção: a versão 1.8.12 saiu em 28 de outubro de 2026, então o projeto recebe atualizações ativamente.',
          'Lacunas: sem versão para Linux ou celular, e as próprias páginas do fabricante se contradizem sobre o plano grátis e sobre a necessidade de internet.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Obter o Weesper Neon Flow',
        content: [
          '**O Weesper Neon Flow é instalado como qualquer app de desktop, sem precisar de terminal.** Baixe o instalador do seu sistema no site oficial; os modelos de fala são baixados dentro do app.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 ou mais recente, Apple Silicon ou Intel com AVX2',
          },
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 build 19041 ou mais recente ou Windows 11, x64 com AVX2',
          },
          {
            Plataforma: 'Teste grátis (15 dias)',
            'Onde obter': '[Iniciar o teste](https://weesperneonflow.ai/en/#pricing) — todos os recursos, sem cartão de crédito',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[Changelog](https://weesperneonflow.ai/en/changelog/) e [versões no GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Weesper Neon Flow](https://weesperneonflow.ai/en/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Código fechado; o repositório do GitHub hospeda apenas instaladores de versões',
          },
        ],
        note: 'A página de download lista apenas macOS e Windows; não há versão para Linux, iOS ou Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow em resumo',
        columns: ['Atributo', 'Weesper Neon Flow'],
        rows: [
          { Atributo: 'Plataforma', 'Weesper Neon Flow': 'macOS 13+ e Windows 10/11' },
          { Atributo: 'Preço', 'Weesper Neon Flow': 'Teste de 15 dias, depois 5 EUR/mês, 45 EUR/ano ou 99 EUR únicos' },
          { Atributo: 'Licença', 'Weesper Neon Flow': 'Proprietária, código fechado' },
          { Atributo: 'Execução', 'Weesper Neon Flow': 'No seu computador com Whisper (whisper.cpp); internet para downloads e licença' },
          { Atributo: 'Idiomas', 'Weesper Neon Flow': '50+ com detecção automática (a página de download diz 55+)' },
          { Atributo: 'Identificação de falantes', 'Weesper Neon Flow': 'Sim, no modo Reunião (changelog 1.7.5)' },
          { Atributo: 'Transcrição em tempo real', 'Weesper Neon Flow': 'Não informado; o texto é inserido ao soltar o atalho' },
          { Atributo: 'Roda só na CPU', 'Weesper Neon Flow': 'Não informado; uma CPU multinúcleo moderna é a base recomendada' },
          { Atributo: 'Servidor de API local', 'Weesper Neon Flow': 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'O que é o Weesper Neon Flow',
        content: [
          '**O Weesper Neon Flow é um app de ditado por atalho, não um editor de transcrições.** Você segura um atalho de teclado, fala e solta; o app executa o Whisper no computador e insere o texto limpo no cursor, por exemplo no Gmail, Slack, Notion ou Word.',
          'O fabricante é a THE BLUE HOUSE (SASU), sediada em Paris, e a página Sobre diz que o produto foi fundado em 2024. Ele também vende um produto separado, o Weesper Transcribe, para arquivos de áudio e vídeo; esta análise cobre apenas o app de ditado.',
          'Esta análise se baseia no site, no changelog, na política de privacidade, nos termos e na página de versões no GitHub. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, o download de um modelo e um atalho.** Os passos seguem o site e o changelog.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o .dmg para Mac ou o .msi para Windows na [página de download](https://weesperneonflow.ai/en/download/) e inicie o teste de 15 dias; não é preciso cartão de crédito.',
          },
          {
            title: 'Escolha um perfil de fala',
            whyItMatters: 'O perfil Small padrão tem 512 MB. O changelog diz que o ditado funciona com um modelo incluído enquanto o recomendado é baixado.',
          },
          {
            title: 'Segure, fale, solte',
            whyItMatters: 'Clique em qualquer campo de texto, segure o atalho de ditado, fale e solte. Um modo de pressionar para alternar foi adicionado na versão 1.7.6.',
          },
          {
            title: 'Ajuste o resultado',
            whyItMatters: 'Adicione palavras ao dicionário personalizado, defina atalhos de texto e experimente os prompts contextuais e personalizados que o site lista.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de um ditado rápido e privado em qualquer app.** Tudo abaixo vem do site e do changelog.',
        ],
        items: [
          '**Ditado em qualquer lugar.** O texto é inserido no cursor em qualquer app que aceite digitação.',
          '**Limpeza.** Remoção automática de palavras de preenchimento, além de pontuação e capitalização inteligentes.',
          '**Idiomas.** Mais de 50 idiomas com detecção automática, e a possibilidade de falar em um idioma para obter o texto em outro.',
          '**Modo Reunião.** A identificação de falantes (diarização) foi adicionada na versão 1.7.5.',
          '**Personalização.** Dicionário personalizado, atalhos de texto, prompts contextuais, prompts personalizados e histórico de ditados.',
          '**Microfone em espera.** Desde a versão 1.7.10, o app não mantém mais o microfone aberto entre os ditados.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O app executa o Whisper pelo whisper.cpp, com quatro perfis de fala.** O FAQ e o changelog citam Minimal (cerca de 75 MB), Small (512 MB, o padrão), Medium (1.5 GB) e Large (3.2 GB), além de um perfil Precision que antes se chamava Turbo.',
          'A página de download lista um mínimo de 4 GB de RAM e 8 GB ou mais como recomendado. No Mac, recomenda-se um Apple Silicon M1 ou mais recente com Metal; no Windows, uma CPU multinúcleo moderna ou uma GPU Vulkan compatível. Ambas as plataformas exigem um processador com AVX2. O FAQ cita cerca de 600 MB de espaço em disco com o modelo Small. Nenhum número de velocidade ou precisão foi reproduzido aqui.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o reconhecimento de fala roda localmente e que áudio, transcrições, texto ditado e conteúdo da área de transferência não são enviados aos servidores da Weesper para transcrição.** A política foi atualizada pela última vez em 23 de julho de 2026. Os termos acrescentam que o aplicativo opera 100% localmente.',
          'A internet ainda entra em outros pontos: downloads do app e dos modelos de fala, ativação e verificação da licença por um serviço de licenciamento hospedado na Cloudflare, cobrança pela Stripe, metadados de atualização do GitHub e análises de produto opcionais (PostHog) e diagnósticos de falhas (Sentry). A política diz que os eventos de análise não incluem áudio, transcrições nem texto ditado. O código é fechado e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'É um produto pago e proprietário: teste grátis de 15 dias, depois 5 EUR por mês, 45 EUR por ano ou 99 EUR únicos, com garantia de reembolso de 7 dias. Uma licença pessoal cobre até três computadores seus. O site não deixa claro se os preços incluem impostos, então confira no checkout. O plano grátis após o teste é descrito de duas formas: 1.500 palavras por semana no FAQ e clipes curtos de até 60 segundos no changelog.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Whisper no seu computador',
            'O que significa na prática': 'O ditado é processado na máquina, sem envio de áudio para transcrição.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada; a internet ainda é usada para licença e downloads.',
          },
          {
            Vantagem: 'Ditar em qualquer app',
            'O que significa na prática': 'Um único atalho funciona em e-mail, chat, notas e documentos.',
            'Limitação / ressalva': 'Apenas Mac e Windows; sem versão para Linux, iPhone ou Android.',
          },
          {
            Vantagem: 'Opção vitalícia',
            'O que significa na prática': 'Uma compra única de 99 EUR evita a assinatura.',
            'Limitação / ressalva': 'Os planos mensal e anual são o padrão; o plano grátis após o teste é descrito de forma inconsistente.',
          },
          {
            Vantagem: 'Quatro perfis de fala',
            'O que significa na prática': 'Modelos pequenos e leves para máquinas mais antigas, maiores para mais precisão.',
            'Limitação / ressalva': 'O Large exige 3.2 GB de disco e mais RAM; não há números de velocidade publicados.',
          },
          {
            Vantagem: 'Modo Reunião com falantes',
            'O que significa na prática': 'A diarização de falantes está documentada no changelog.',
            'Limitação / ressalva': 'Não testado aqui; o site não dá detalhes de precisão.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 1.8.12 foi lançada em 28 de outubro de 2026.',
            'Limitação / ressalva': 'Algumas páginas, como Sobre, ainda trazem textos mais antigos.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow e as alternativas',
        content: [
          'Estas são as ferramentas de ditado mais próximas do diretório: um app gratuito de código aberto para três sistemas de desktop, um app de transcrição para Mac com ditado, um app de ditado gratuito só para Mac e um app híbrido de código aberto.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Weesper Neon Flow',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Teste, depois 5 EUR/mês ou 99 EUR únicos, proprietário',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Whisper no aparelho; pago e de código fechado',
          },
          {
            App: '[Handy](/pt/power-local-llm/handy-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Código aberto e gratuito; inclui Linux',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço e licença': 'Freemium, proprietário',
            Função: 'App de transcrição para Mac',
            'Diferença principal': 'Feito primeiro para arquivos e reuniões; só Mac',
          },
          {
            App: '[FluidVoice](/pt/power-local-llm/fluidvoice-review)',
            Plataformas: 'Mac',
            'Preço e licença': 'Grátis, GPL-3.0',
            Função: 'App de ditado para Mac',
            'Diferença principal': 'Gratuito e de código aberto; só Mac',
          },
          {
            App: '[OpenWhispr](/pt/power-local-llm/openwhispr-review)',
            Plataformas: 'Mac, Windows, Linux, iOS',
            'Preço e licença': 'Freemium, MIT',
            Função: 'Ditado com modos local ou nuvem',
            'Diferença principal': 'Você escolhe modelos locais, sua própria chave de API ou a nuvem dele',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Weesper Neon Flow serve',
        items: [
          '**Quem escreve e trabalha em escritório com Mac ou Windows.** Um único atalho dita em e-mail, chat e documentos.',
          '**Quem evita o ditado na nuvem.** O reconhecimento de fala fica no computador, segundo o fabricante.',
          '**Usuários multilíngues.** Mais de 50 idiomas com detecção automática.',
          '**Quem prefere pagar uma vez.** Existe uma licença vitalícia de 99 EUR ao lado das assinaturas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Weesper Neon Flow não serve',
        items: [
          '**Usuários de Linux, iPhone e Android.** Só há versões para Mac e Windows.',
          '**Quem precisa de software auditável.** O código é fechado e as afirmações de privacidade não podem ser inspecionadas.',
          '**Quem quer software totalmente gratuito.** Além do teste e de um plano grátis limitado, o uso é pago; o Handy é gratuito e de código aberto.',
          '**Quem precisa trabalhar sem nenhuma internet.** A licença e os downloads de modelos exigem conexão.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Weesper Neon Flow funciona offline?',
            a: 'O fabricante diz que o ditado funciona 100% offline depois que o app e um modelo de fala estão instalados. A internet é necessária para baixá-los, para ativar o teste ou a licença e para verificações ocasionais da licença. A página Sobre diz que nenhuma conexão é necessária, o que contradiz isso. O PromptQuorum não testou o app offline.',
          },
          {
            q: 'Minha voz é enviada para a nuvem?',
            a: 'A política de privacidade diz que áudio, transcrições, texto ditado e conteúdo da área de transferência não são enviados aos servidores da Weesper para transcrição. O código é fechado e o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'Quanto custa?',
            a: 'Após um teste grátis de 15 dias, 5 EUR por mês, 45 EUR por ano ou 99 EUR únicos, com garantia de reembolso de 7 dias. Confira no checkout se os impostos estão incluídos.',
          },
          {
            q: 'Quais modelos ele usa?',
            a: 'O OpenAI Whisper pelo whisper.cpp, em quatro perfis de fala, do Minimal (cerca de 75 MB) ao Large (3.2 GB).',
          },
          {
            q: 'Quem faz o Weesper Neon Flow?',
            a: 'A THE BLUE HOUSE (SASU), uma empresa sediada em Paris, na França.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Weesper Neon Flow serve bem se você quer ditado por atalho em um Mac ou PC com Windows em que, segundo o fabricante, o Whisper roda no seu próprio computador, e aceita pagar por um software de código fechado. Ele tem teste grátis de 15 dias, uma opção vitalícia e uma versão recente.',
          'As ressalvas são o alcance e a verificabilidade: sem versão para Linux ou celular, código fechado, afirmações de privacidade que o PromptQuorum não pôde verificar e páginas do fabricante que divergem sobre o plano grátis e sobre a necessidade de internet. Use o teste antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Weesper Neon Flow](https://weesperneonflow.ai/en/) — recursos, preços e FAQ.',
          '[Página de download](https://weesperneonflow.ai/en/download/) — plataformas e requisitos do sistema.',
          '[Changelog](https://weesperneonflow.ai/en/changelog/) — histórico de versões e novos recursos.',
          '[Política de privacidade](https://weesperneonflow.ai/en/privacy) — tratamento de dados, atualizada em 23 de julho de 2026.',
          '[Termos de uso](https://weesperneonflow.ai/en/terms/) — operador e declaração de operação local.',
          '[Versões no GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — arquivos do instalador e data de lançamento da versão 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do Handy](/pt/power-local-llm/handy-review) — um app de ditado gratuito e de código aberto para Mac, Windows e Linux.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de transcrição para Mac com ditado.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitos apps de Whisper local.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
          '[Análise do Sprich: app de ditado alemão para Mac com Apple Silicon](/pt/power-local-llm/sprich-review) — outro app de ditado para Mac, voltado primeiro ao alemão, com plano gratuito e só para Apple Silicon.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-ar.webp',
    title: 'مراجعة Weesper Neon Flow: إملاء صوتي دون اتصال لأجهزة Mac وWindows',
    seoTitle: 'مراجعة Weesper Neon Flow: تطبيق إملاء دون اتصال',
    intro: 'Weesper Neon Flow تطبيق إملاء مدفوع ومغلق المصدر لأجهزة Mac وWindows: تضغط على اختصار وتتحدث، فيكتب النص المنقّح في أي تطبيق يوجد فيه المؤشر، مشغّلًا نموذج Whisper من OpenAI على حاسوبك. تلخّص هذه المراجعة ما يوثّقه موقع المطوّر وسجل التغييرات وسياسة الخصوصية، وأين تتعارض هذه الصفحات، وكيف يقارن بأدوات الإملاء الأخرى في الدليل.',
    metaDescription: 'مراجعة Weesper Neon Flow: تطبيق إملاء مدفوع بنموذج Whisper لأجهزة Mac وWindows يعمل على حاسوبك بحسب مطوّره. تجربة 15 يومًا ثم 5 EUR شهريًا أو 99 EUR لمرة واحدة. لم يُختبر.',
    twitterDescription: 'مراجعة Weesper Neon Flow: إملاء بالضغط والتحدث لأجهزة Mac وWindows مع Whisper على حاسوبك. السعر والخصوصية والحدود والبدائل.',
    audience: 'مستخدمو Mac وWindows الذين يريدون الإملاء في أي تطبيق دون إرسال أصواتهم إلى خدمة سحابية — يغطي السعر والتثبيت والنماذج والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'مراجعة weesper neon flow',
      'weesper neon flow',
      'تطبيق إملاء دون اتصال mac windows',
      'إملاء whisper محلي',
      'إملاء صوتي دون سحابة',
      'تحويل الكلام إلى نص بخصوصية على سطح المكتب',
      'تطبيق إملاء whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flow تطبيق إملاء مغلق المصدر لأجهزة Mac وWindows يشغّل نموذج Whisper من OpenAI على حاسوبك، ويقول مطوّره إن الصوت والنص المُملى لا يغادران الجهاز.** يكلّف 5 EUR شهريًا أو 45 EUR سنويًا أو 99 EUR لمرة واحدة بعد تجربة مجانية لمدة 15 يومًا. وأحدث إصدار هو 1.8.12 الصادر في 28 أكتوبر 2026. تعتمد هذه المراجعة على الموقع العام للمطوّر وسجل التغييرات وسياسة الخصوصية وصفحة الإصدارات على GitHub، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Weesper Neon Flow تطبيق إملاء محلي؟',
        answer: 'بحسب مطوّره نعم: يعمل التعرف على الكلام على جهاز Mac أو Windows لديك بنموذج Whisper، ولا تُرسل الأصوات والنصوص المحوّلة والنص المُملى إلى خوادم المطوّر. ويُستخدم الإنترنت مع ذلك لتنزيل التطبيق ونماذج الكلام ولفحوص الترخيص والفوترة والتحديثات والتشخيصات الاختيارية. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فالادعاء من المطوّر نفسه.',
        bullets: [
          'اضغط على الاختصار وتحدث ثم اتركه: يظهر النص المنقّح عند المؤشر في تطبيقات مثل Gmail وSlack وNotion وWord.',
          'الأسعار: تجربة مجانية لمدة 15 يومًا بكل الميزات، ثم 5 EUR شهريًا أو 45 EUR سنويًا أو 99 EUR لمرة واحدة.',
          'أربعة ملفات كلام من Minimal (نحو 75 MB) إلى Large (3.2 GB)؛ والافتراضي Small (512 MB).',
          'Mac (macOS 13 أو أحدث) وWindows 10 أو 11 فقط؛ لا نسخة لنظام Linux أو iPhone أو Android.',
          'تتعارض صفحات المطوّر بشأن ضرورة الاتصال بالإنترنت وبشأن ما تتضمنه الخطة المجانية بعد التجربة.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Weesper Neon Flow',
        anchor: 'get-it',
      },
      {
        label: 'Weesper Neon Flow في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Weesper Neon Flow',
        anchor: 'what-is-weesper',
      },
      {
        label: 'البدء',
        anchor: 'how-to-get-started',
      },
      {
        label: 'الميزات',
        anchor: 'features',
      },
      {
        label: 'النماذج والعتاد',
        anchor: 'models-hardware',
      },
      {
        label: 'الخصوصية والترخيص والتكلفة',
        anchor: 'privacy',
      },
      {
        label: 'المزايا والقيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'Weesper Neon Flow مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'لمن يناسب Weesper Neon Flow',
        anchor: 'who-should-use',
      },
      {
        label: 'لمن لا يناسب Weesper Neon Flow',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Weesper Neon Flow تطبيق إملاء مدفوع لأجهزة Mac وWindows يشغّل Whisper على حاسوبك بدل خدمة سحابية، بحسب مطوّره.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كمفتاح ميكروفون يكتب عنك: تضغط على الاختصار وتتحدث ثم تتركه، فيحوّل حاسوبك الكلام إلى نص دون إرسال الصوت إلى المطوّر.',
          },
        ],
        items: [
          'الادعاء المحلي: يعمل التعرف على الكلام على الجهاز بنموذج Whisper؛ ويظل الإنترنت مستخدمًا في التنزيلات وفحوص الترخيص والفوترة والتحديثات والتشخيصات الاختيارية.',
          'الترخيص والمطوّر: مملوك، وتنشره THE BLUE HOUSE (SASU) في باريس؛ ومستودع GitHub المرتبط يستضيف مثبّتات الإصدارات فقط.',
          'السعر: تجربة مجانية لمدة 15 يومًا، ثم 5 EUR شهريًا أو 45 EUR سنويًا أو 99 EUR لمرة واحدة، مع ضمان استرداد الأموال خلال 7 أيام.',
          'الصيانة: صدر الإصدار 1.8.12 في 28 أكتوبر 2026، فالمشروع يُحدَّث بنشاط.',
          'الثغرات: لا نسخة لنظام Linux أو للجوال، وتتناقض صفحات المطوّر نفسها بشأن الخطة المجانية وضرورة الإنترنت.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'الحصول على Weesper Neon Flow',
        content: [
          '**يُثبَّت Weesper Neon Flow مثل أي تطبيق مكتبي، ولا حاجة إلى الطرفية.** نزّل المثبّت المناسب لنظامك من الموقع الرسمي؛ وتُجلب نماذج الكلام من داخل التطبيق.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://weesperneonflow.ai/en/download/) — ملف .dmg، macOS 13 أو أحدث، Apple Silicon أو Intel مع AVX2',
          },
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://weesperneonflow.ai/en/download/) — ملف .msi، Windows 10 الإصدار 19041 أو أحدث أو Windows 11، معالج x64 مع AVX2',
          },
          {
            'المنصة': 'تجربة مجانية (15 يومًا)',
            'مصدر الحصول': '[ابدأ التجربة](https://weesperneonflow.ai/en/#pricing) — كل الميزات، دون بطاقة ائتمان',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[سجل التغييرات](https://weesperneonflow.ai/en/changelog/) و[إصدارات GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Weesper Neon Flow](https://weesperneonflow.ai/en/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': 'مغلق المصدر؛ ومستودع GitHub يستضيف مثبّتات الإصدارات فقط',
          },
        ],
        note: 'تعرض صفحة التنزيل macOS وWindows فقط؛ ولا تتوفر نسخة لنظام Linux أو iOS أو Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow في لمحة',
        columns: [
          'الخاصية',
          'Weesper Neon Flow',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            'Weesper Neon Flow': 'macOS 13+ وWindows 10/11',
          },
          {
            'الخاصية': 'السعر',
            'Weesper Neon Flow': 'تجربة 15 يومًا، ثم 5 EUR/شهريًا أو 45 EUR/سنويًا أو 99 EUR لمرة واحدة',
          },
          {
            'الخاصية': 'الترخيص',
            'Weesper Neon Flow': 'مملوك، مغلق المصدر',
          },
          {
            'الخاصية': 'مكان التشغيل',
            'Weesper Neon Flow': 'على حاسوبك بنموذج Whisper (whisper.cpp)؛ إنترنت للتنزيلات وفحوص الترخيص',
          },
          {
            'الخاصية': 'اللغات',
            'Weesper Neon Flow': 'أكثر من 50 مع كشف تلقائي (وتذكر صفحة التنزيل أكثر من 55)',
          },
          {
            'الخاصية': 'تمييز المتحدثين',
            'Weesper Neon Flow': 'نعم، في وضع الاجتماعات (سجل التغييرات 1.7.5)',
          },
          {
            'الخاصية': 'التحويل الفوري',
            'Weesper Neon Flow': 'غير مذكور؛ يُدرج النص عند ترك الاختصار',
          },
          {
            'الخاصية': 'يعمل بالمعالج المركزي فقط',
            'Weesper Neon Flow': 'غير مذكور؛ ويُوصى بمعالج حديث متعدد الأنوية كحد أساسي',
          },
          {
            'الخاصية': 'خادم API محلي',
            'Weesper Neon Flow': 'غير مذكور',
          },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'ما هو Weesper Neon Flow',
        content: [
          '**Weesper Neon Flow تطبيق إملاء بالضغط والتحدث، وليس محرّر تفريغ نصي.** تضغط على اختصار لوحة المفاتيح وتتحدث ثم تتركه؛ فيشغّل التطبيق Whisper على الحاسوب ويُدرج نصًا منقّحًا عند المؤشر، مثلًا في Gmail أو Slack أو Notion أو Word.',
          'المطوّر هو THE BLUE HOUSE (SASU) ومقرها باريس، وتقول صفحة «من نحن» إن المنتج تأسس عام 2024. ويبيع أيضًا منتجًا منفصلًا هو Weesper Transcribe لملفات الصوت والفيديو؛ وتغطي هذه المراجعة تطبيق الإملاء فقط.',
          'تعتمد هذه المراجعة على الموقع وسجل التغييرات وسياسة الخصوصية والشروط وصفحة الإصدارات على GitHub. ولم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا الدقة والسرعة والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل نموذج وتحديد اختصار.** تتبع الخطوات الموقع وسجل تغييراته.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل ملف .dmg لـ Mac أو ملف .msi لـ Windows من [صفحة التنزيل](https://weesperneonflow.ai/en/download/) وابدأ التجربة لمدة 15 يومًا؛ ولا حاجة إلى بطاقة ائتمان.',
          },
          {
            title: 'اختر ملف الكلام',
            whyItMatters: 'ملف Small الافتراضي حجمه 512 MB. ويقول سجل التغييرات إن الإملاء يعمل بنموذج مضمّن أثناء تنزيل النموذج الموصى به.',
          },
          {
            title: 'اضغط وتحدث ثم اترك',
            whyItMatters: 'انقر داخل أي حقل نصي، واضغط على اختصار الإملاء، وتحدث، ثم اتركه. وأُضيف وضع التبديل بالضغطة الواحدة في الإصدار 1.7.6.',
          },
          {
            title: 'اضبط المخرجات',
            whyItMatters: 'أضف كلمات إلى القاموس المخصص، وحدّد اختصارات نصية، وجرّب الموجّهات السياقية والمخصصة التي يذكرها الموقع.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول إملاء سريع وخاص في أي تطبيق.** كل ما يلي مصدره الموقع وسجل التغييرات.',
        ],
        items: [
          '**الإملاء في أي مكان.** يُدرج النص عند المؤشر في أي تطبيق يقبل الكتابة.',
          '**التنقيح.** إزالة تلقائية لكلمات الحشو، مع ترقيم ذكي وضبط للأحرف الكبيرة.',
          '**اللغات.** أكثر من 50 لغة مع كشف تلقائي، وإمكانية التحدث بلغة والحصول على النص بلغة أخرى.',
          '**وضع الاجتماعات.** أُضيف تمييز المتحدثين في الإصدار 1.7.5.',
          '**التخصيص.** قاموس مخصص واختصارات نصية وموجّهات سياقية وموجّهات مخصصة وسجل للإملاء.',
          '**وضع الاستعداد للميكروفون.** منذ الإصدار 1.7.10 لم يعد التطبيق يُبقي الميكروفون مفتوحًا بين عمليات الإملاء.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يشغّل التطبيق Whisper عبر whisper.cpp مع أربعة ملفات كلام.** تذكر الأسئلة الشائعة وسجل التغييرات Minimal (نحو 75 MB) وSmall (512 MB، الافتراضي) وMedium (1.5 GB) وLarge (3.2 GB)، إضافة إلى ملف Precision الذي كان يسمى سابقًا Turbo.',
          'تذكر صفحة التنزيل حدًا أدنى هو 4 GB من الذاكرة، وتوصي بـ 8 GB أو أكثر. وعلى Mac يُوصى بمعالج Apple Silicon من M1 فأحدث مع Metal؛ وعلى Windows بمعالج حديث متعدد الأنوية أو بطاقة رسوميات مدعومة تعمل بـ Vulkan. وتتطلب المنصتان معالجًا يدعم AVX2. وتذكر الأسئلة الشائعة نحو 600 MB من مساحة القرص مع نموذج Small. ولم يُعَد إنتاج أي أرقام للسرعة أو الدقة هنا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن التعرف على الكلام يعمل محليًا، وإن الصوت والنصوص المحوّلة والنص المُملى ومحتويات الحافظة لا تُرسل إلى خوادم Weesper من أجل التحويل.** وكان آخر تحديث للسياسة في 23 يوليو 2026. وتضيف الشروط أن التطبيق يعمل محليًا بنسبة 100%.',
          'ويظل الإنترنت مستخدمًا في جوانب أخرى: تنزيل التطبيق ونماذج الكلام، وتفعيل الترخيص وفحصه عبر خدمة ترخيص مستضافة على Cloudflare، والفوترة عبر Stripe، وبيانات التحديث من GitHub، وتحليلات المنتج الاختيارية (PostHog) وتشخيصات الأعطال (Sentry). وتقول السياسة إن أحداث التحليلات لا تتضمن الصوت ولا النصوص المحوّلة ولا النص المُملى. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'هو منتج مدفوع ومملوك: تجربة مجانية لمدة 15 يومًا، ثم 5 EUR شهريًا أو 45 EUR سنويًا أو 99 EUR لمرة واحدة، مع ضمان استرداد الأموال خلال 7 أيام. ويغطي الترخيص الشخصي ما يصل إلى ثلاثة من حواسيبك. ولا يوضح الموقع بجلاء ما إذا كانت الأسعار تشمل ضريبة القيمة المضافة، لذا تحقق عند الدفع. وتُوصف الخطة المجانية بعد التجربة بطريقتين: 1,500 كلمة أسبوعيًا في الأسئلة الشائعة، ومقاطع قصيرة حتى 60 ثانية في سجل التغييرات.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: [
          'الميزة',
          'ما تعنيه في الاستخدام الفعلي',
          'القيد / تنبيه',
        ],
        rows: [
          {
            'الميزة': 'Whisper على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'يُعالَج الإملاء على الجهاز دون رفع الصوت من أجل التحويل.',
            'القيد / تنبيه': 'مغلق المصدر، لذا لا يمكن التحقق من الادعاء؛ ويظل الإنترنت مستخدمًا للترخيص والتنزيلات.',
          },
          {
            'الميزة': 'الإملاء في أي تطبيق',
            'ما تعنيه في الاستخدام الفعلي': 'اختصار واحد يعمل في البريد والدردشة والملاحظات والمستندات.',
            'القيد / تنبيه': 'Mac وWindows فقط؛ لا نسخة لنظام Linux أو iPhone أو Android.',
          },
          {
            'الميزة': 'خيار الترخيص الدائم',
            'ما تعنيه في الاستخدام الفعلي': 'شراء لمرة واحدة بسعر 99 EUR يغني عن الاشتراك.',
            'القيد / تنبيه': 'الخطتان الشهرية والسنوية هما الأساس؛ وتُوصف الخطة المجانية بعد التجربة بشكل متناقض.',
          },
          {
            'الميزة': 'أربعة ملفات كلام',
            'ما تعنيه في الاستخدام الفعلي': 'نماذج صغيرة وخفيفة للأجهزة الأقدم وأكبر منها للدقة.',
            'القيد / تنبيه': 'يحتاج Large إلى 3.2 GB من القرص وذاكرة أكبر؛ ولا تُنشر أرقام للسرعة.',
          },
          {
            'الميزة': 'وضع الاجتماعات مع المتحدثين',
            'ما تعنيه في الاستخدام الفعلي': 'تمييز المتحدثين موثّق في سجل التغييرات.',
            'القيد / تنبيه': 'لم يُختبر هنا؛ ولا يقدّم الموقع تفاصيل عن الدقة.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 1.8.12 في 28 أكتوبر 2026.',
            'القيد / تنبيه': 'ما زالت بعض الصفحات، مثل «من نحن»، تحمل صياغة أقدم.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow مقابل البدائل',
        content: [
          'هذه أقرب أدوات الإملاء في الدليل: تطبيق مجاني مفتوح المصدر لثلاثة أنظمة مكتبية، وتطبيق تفريغ لأجهزة Mac مع إملاء، وتطبيق إملاء مجاني لأجهزة Mac فقط، وتطبيق مفتوح المصدر هجين.',
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
            'التطبيق': 'Weesper Neon Flow',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'تجربة ثم 5 EUR/شهريًا أو 99 EUR لمرة واحدة، مملوك',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'Whisper على الجهاز؛ مدفوع ومغلق المصدر',
          },
          {
            'التطبيق': '[Handy](/ar/power-local-llm/handy-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'مفتوح المصدر ومجاني؛ ويضيف Linux',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق تحويل لأجهزة Mac',
            'الفرق الرئيسي': 'مصمم أولًا للملفات والاجتماعات؛ لأجهزة Mac فقط',
          },
          {
            'التطبيق': '[FluidVoice](/ar/power-local-llm/fluidvoice-review)',
            'المنصات': 'Mac',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'تطبيق إملاء لأجهزة Mac',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ لأجهزة Mac فقط',
          },
          {
            'التطبيق': '[OpenWhispr](/ar/power-local-llm/openwhispr-review)',
            'المنصات': 'Mac وWindows وLinux وiOS',
            'السعر والترخيص': 'مجاني جزئيًا، MIT',
            'الدور': 'إملاء بوضع محلي أو سحابي',
            'الفرق الرئيسي': 'تختار نماذج محلية أو مفتاح API الخاص بك أو سحابته',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Weesper Neon Flow',
        items: [
          '**الكتّاب وموظفو المكاتب على Mac أو Windows.** اختصار واحد يملي في البريد والدردشة والمستندات.',
          '**من يتجنبون الإملاء السحابي.** يبقى التعرف على الكلام على الحاسوب، بحسب المطوّر.',
          '**المستخدمون متعددو اللغات.** أكثر من 50 لغة مع كشف تلقائي.',
          '**من يفضّلون الدفع مرة واحدة.** يوجد ترخيص دائم بسعر 99 EUR إلى جانب الاشتراكات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Weesper Neon Flow',
        items: [
          '**مستخدمو Linux وiPhone وAndroid.** لا تتوفر سوى نسختي Mac وWindows.',
          '**من يحتاجون إلى برنامج قابل للتدقيق.** الشيفرة مغلقة ولا يمكن فحص ادعاءات الخصوصية.',
          '**من يريدون برنامجًا مجانيًا بالكامل.** بعد التجربة والخطة المجانية المحدودة يصبح الاستخدام مدفوعًا؛ أما Handy فمجاني ومفتوح المصدر.',
          '**من يجب أن يعملوا دون أي إنترنت إطلاقًا.** يحتاج الترخيص وتنزيل النماذج إلى اتصال.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Weesper Neon Flow دون اتصال بالإنترنت؟',
            a: 'يقول المطوّر إن الإملاء يعمل دون اتصال بنسبة 100% بعد تثبيت التطبيق ونموذج الكلام. ويلزم الإنترنت لتنزيلهما ولتفعيل التجربة أو الترخيص ولفحوص الترخيص العرضية. وتقول صفحة «من نحن» إنه لا حاجة إلى اتصال، وهذا يتعارض مع ما سبق. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يُرسل صوتي إلى السحابة؟',
            a: 'تقول سياسة الخصوصية إن الصوت والنصوص المحوّلة والنص المُملى ومحتويات الحافظة لا تُرسل إلى خوادم Weesper من أجل التحويل. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'كم يكلّف؟',
            a: 'بعد تجربة مجانية لمدة 15 يومًا: 5 EUR شهريًا أو 45 EUR سنويًا أو 99 EUR لمرة واحدة، مع ضمان استرداد الأموال خلال 7 أيام. تحقق عند الدفع مما إذا كانت ضريبة القيمة المضافة مشمولة.',
          },
          {
            q: 'ما النماذج التي يستخدمها؟',
            a: 'OpenAI Whisper عبر whisper.cpp، في أربعة ملفات كلام من Minimal (نحو 75 MB) إلى Large (3.2 GB).',
          },
          {
            q: 'من يصنع Weesper Neon Flow؟',
            a: 'THE BLUE HOUSE (SASU)، وهي شركة مقرها باريس في فرنسا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Weesper Neon Flow من يريد إملاءً بالضغط والتحدث على Mac أو Windows يعمل فيه Whisper على حاسوبه، بحسب المطوّر، ويقبل دفع ثمن برنامج مغلق المصدر. وله تجربة مجانية لمدة 15 يومًا وخيار ترخيص دائم وإصدار حديث.',
          'التحفظات تخص النطاق وإمكانية التحقق: لا نسخة لنظام Linux أو للجوال، وشيفرة مغلقة، وادعاءات خصوصية لم تتمكن PromptQuorum من فحصها، وصفحات للمطوّر تتعارض بشأن الخطة المجانية وضرورة الإنترنت. استخدم التجربة قبل الشراء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Weesper Neon Flow](https://weesperneonflow.ai/en/) — الميزات والأسعار والأسئلة الشائعة.',
          '[صفحة التنزيل](https://weesperneonflow.ai/en/download/) — المنصات ومتطلبات النظام.',
          '[سجل التغييرات](https://weesperneonflow.ai/en/changelog/) — تاريخ الإصدارات والميزات المضافة.',
          '[سياسة الخصوصية](https://weesperneonflow.ai/en/privacy) — التعامل مع البيانات، آخر تحديث في 23 يوليو 2026.',
          '[شروط الاستخدام](https://weesperneonflow.ai/en/terms/) — الجهة المشغّلة وبيان التشغيل المحلي.',
          '[إصدارات GitHub](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — ملفات المثبّت وتاريخ إصدار النسخة 1.8.12.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Handy](/ar/power-local-llm/handy-review) — تطبيق إملاء مجاني ومفتوح المصدر لأجهزة Mac وWindows وLinux.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق تحويل لأجهزة Mac مع إملاء.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح خلف كثير من تطبيقات Whisper المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
          '[مراجعة Sprich: تطبيق إملاء ألماني لأجهزة Mac بمعالج Apple Silicon](/ar/power-local-llm/sprich-review) — تطبيق إملاء آخر لأجهزة Mac يركّز أولًا على الألمانية، بخطة مجانية ويعمل على Apple Silicon فقط.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/weesper-neon-flow-review-hero-ko.webp',
    title: 'Weesper Neon Flow 리뷰: Mac·Windows용 오프라인 받아쓰기 앱',
    seoTitle: 'Weesper Neon Flow 리뷰: 오프라인 받아쓰기 앱',
    intro: 'Weesper Neon Flow는 Mac과 Windows용 유료 비공개 소스 받아쓰기 앱입니다. 단축키를 누른 채 말하면 커서가 있는 앱에 정리된 텍스트를 입력해 주며, OpenAI의 Whisper 모델을 사용자의 컴퓨터에서 실행합니다. 이 리뷰는 개발사의 웹사이트, 변경 내역, 개인정보 처리방침이 밝히는 내용과 페이지들이 서로 어긋나는 부분, 그리고 디렉터리의 다른 받아쓰기 도구와의 비교를 정리합니다.',
    metaDescription: 'Weesper Neon Flow 리뷰: 개발사에 따르면 컴퓨터에서 실행되는 Mac·Windows용 유료 Whisper 받아쓰기 앱. 15일 체험 후 월 5 EUR 또는 99 EUR 일회성. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Weesper Neon Flow 리뷰: 내 컴퓨터에서 Whisper를 실행하는 Mac·Windows용 단축키 받아쓰기 앱. 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '음성을 클라우드 서비스로 보내지 않고 어떤 앱에든 받아쓰기를 하려는 Mac·Windows 사용자를 위한 글입니다. 가격, 설치, 모델, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Weesper Neon Flow review',
    targetKeywords: [
      'weesper neon flow 리뷰',
      'weesper neon flow',
      '오프라인 받아쓰기 앱 mac windows',
      '로컬 whisper 받아쓰기',
      '클라우드 없는 음성 받아쓰기',
      '비공개 음성 인식 데스크톱',
      'whisper 받아쓰기 앱',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Weesper Neon Flow는 OpenAI의 Whisper 모델을 사용자의 컴퓨터에서 실행하는 Mac·Windows용 비공개 소스 받아쓰기 앱이며, 개발사는 오디오와 받아쓴 텍스트가 기기 밖으로 나가지 않는다고 밝힙니다.** 15일 무료 체험 이후 월 5 EUR, 연 45 EUR, 또는 99 EUR 일회성 결제입니다. 최신 릴리스는 2026년 10월 28일의 버전 1.8.12입니다. 이 리뷰는 개발사의 공개 웹사이트, 변경 내역, 개인정보 처리방침과 GitHub 릴리스 페이지에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Weesper Neon Flow는 로컬 받아쓰기 앱입니까?',
        answer: '개발사에 따르면 그렇습니다. 음성 인식은 Mac 또는 Windows PC에서 Whisper로 실행되며, 오디오, 전사본, 받아쓴 텍스트는 개발사 서버로 전송되지 않습니다. 다만 앱과 음성 모델 다운로드, 라이선스 확인, 결제, 업데이트, 선택형 진단에는 여전히 인터넷이 사용됩니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로, 이 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '단축키를 누른 채 말하고 놓으면, 정리된 텍스트가 Gmail, Slack, Notion, Word 같은 앱의 커서 위치에 나타납니다.',
          '가격: 전체 기능을 쓰는 15일 무료 체험 이후 월 5 EUR, 연 45 EUR, 또는 99 EUR 일회성입니다.',
          '음성 프로필은 Minimal(약 75 MB)부터 Large(3.2 GB)까지 4종이며, 기본값은 Small(512 MB)입니다.',
          'Mac(macOS 13 이상)과 Windows 10·11 전용이며 Linux, iPhone, Android 버전은 없습니다.',
          '개발사의 페이지들은 인터넷이 필요한지 여부와 체험 이후 무료 플랜의 내용에 대해 서로 다르게 설명합니다.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Weesper Neon Flow 받기', anchor: 'get-it' },
      { label: 'Weesper Neon Flow 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Weesper Neon Flow란', anchor: 'what-is-weesper' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Weesper Neon Flow와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Weesper Neon Flow를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Weesper Neon Flow를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
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
            text: 'Weesper Neon Flow는 개발사에 따르면 클라우드 서비스 대신 사용자의 컴퓨터에서 Whisper를 실행하는 Mac·Windows용 유료 받아쓰기 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '대신 타자를 쳐 주는 마이크 키라고 생각하면 됩니다. 단축키를 누른 채 말하고 놓으면, 컴퓨터가 오디오를 개발사로 보내지 않고 음성을 텍스트로 바꿉니다.',
          },
        ],
        items: [
          '로컬 주장: 음성 인식은 기기에서 Whisper로 실행되며, 다운로드, 라이선스 확인, 결제, 업데이트, 선택형 진단에는 여전히 인터넷이 사용됩니다.',
          '라이선스와 개발사: 독점 소프트웨어이며 파리의 THE BLUE HOUSE (SASU)가 배포합니다. 연결된 GitHub 저장소는 릴리스 설치 파일만 호스팅합니다.',
          '가격: 15일 무료 체험 이후 월 5 EUR, 연 45 EUR, 또는 99 EUR 일회성이며, 7일 환불 보장이 있습니다.',
          '유지보수: 버전 1.8.12가 2026년 10월 28일에 출시되어 프로젝트가 활발히 업데이트되고 있습니다.',
          '공백: Linux나 모바일 버전이 없고, 개발사의 페이지들이 무료 플랜과 인터넷 필요 여부에 대해 서로 모순됩니다.',
        ],
      },
      getItWeesper: {
        id: 'get-it',
        title: 'Weesper Neon Flow 받기',
        content: [
          '**Weesper Neon Flow는 다른 데스크톱 앱처럼 설치하며 터미널이 필요 없습니다.** 공식 사이트에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, 음성 모델은 앱 안에서 받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://weesperneonflow.ai/en/download/) — .dmg, macOS 13 이상, Apple Silicon 또는 AVX2를 지원하는 Intel',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://weesperneonflow.ai/en/download/) — .msi, Windows 10 빌드 19041 이상 또는 Windows 11, AVX2를 지원하는 x64',
          },
          {
            '플랫폼': '무료 체험(15일)',
            '받는 곳': '[체험 시작](https://weesperneonflow.ai/en/#pricing) — 전체 기능, 신용카드 불필요',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[변경 내역](https://weesperneonflow.ai/en/changelog/) 및 [GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[weesperneonflow.ai](https://weesperneonflow.ai/en/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Weesper Neon Flow 개인정보 처리방침](https://weesperneonflow.ai/en/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '비공개 소스이며, GitHub 저장소는 릴리스 설치 파일만 호스팅합니다',
          },
        ],
        note: '다운로드 페이지에는 macOS와 Windows만 나와 있으며, Linux, iOS, Android 빌드는 제공되지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Weesper Neon Flow 한눈에 보기',
        columns: ['항목', 'Weesper Neon Flow'],
        rows: [
          { '항목': '플랫폼', 'Weesper Neon Flow': 'macOS 13 이상 및 Windows 10/11' },
          { '항목': '가격', 'Weesper Neon Flow': '15일 체험 후 월 5 EUR, 연 45 EUR 또는 99 EUR 일회성' },
          { '항목': '라이선스', 'Weesper Neon Flow': '독점, 비공개 소스' },
          { '항목': '실행 위치', 'Weesper Neon Flow': '컴퓨터에서 Whisper(whisper.cpp)로 실행, 다운로드와 라이선스 확인에는 인터넷 사용' },
          { '항목': '언어', 'Weesper Neon Flow': '자동 감지를 포함해 50개 이상(다운로드 페이지에는 55개 이상)' },
          { '항목': '화자 구분', 'Weesper Neon Flow': '예, 회의 모드에서 지원(변경 내역 1.7.5)' },
          { '항목': '실시간 전사', 'Weesper Neon Flow': '명시되지 않음, 단축키를 놓을 때 텍스트가 입력됨' },
          { '항목': 'CPU만으로 사용 가능', 'Weesper Neon Flow': '명시되지 않음, 최신 멀티코어 CPU가 권장 기준' },
          { '항목': '로컬 API 서버', 'Weesper Neon Flow': '명시되지 않음' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsWeesper: {
        id: 'what-is-weesper',
        title: 'Weesper Neon Flow란',
        content: [
          '**Weesper Neon Flow는 전사 편집기가 아니라 단축키 방식의 받아쓰기 앱입니다.** 키보드 단축키를 누른 채 말하고 놓으면, 앱이 컴퓨터에서 Whisper를 실행해 정리된 텍스트를 커서 위치에 입력합니다. 예를 들어 Gmail, Slack, Notion, Word에서 쓸 수 있습니다.',
          '개발사는 파리에 있는 THE BLUE HOUSE (SASU)이며, 소개 페이지에는 제품이 2024년에 설립되었다고 적혀 있습니다. 오디오·동영상 파일용 별도 제품인 Weesper Transcribe도 판매하지만, 이 리뷰는 받아쓰기 앱만 다룹니다.',
          '이 리뷰는 공식 사이트, 변경 내역, 개인정보 처리방침, 이용 약관, GitHub 릴리스 페이지에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 정확도, 속도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 다운로드, 단축키 지정으로 이루어집니다.** 단계는 공식 사이트와 변경 내역을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[다운로드 페이지](https://weesperneonflow.ai/en/download/)에서 Mac용 .dmg 또는 Windows용 .msi를 내려받고 15일 체험을 시작합니다. 신용카드는 필요하지 않습니다.',
          },
          {
            title: '음성 프로필 선택',
            whyItMatters: '기본 Small 프로필은 512 MB입니다. 변경 내역에 따르면 권장 모델을 내려받는 동안에는 내장 모델로 받아쓰기가 작동합니다.',
          },
          {
            title: '누르고, 말하고, 놓기',
            whyItMatters: '아무 텍스트 입력란을 클릭하고, 받아쓰기 단축키를 누른 채 말한 뒤 놓습니다. 누를 때마다 켜고 끄는 토글 방식은 버전 1.7.6에서 추가되었습니다.',
          },
          {
            title: '출력 다듬기',
            whyItMatters: '사용자 사전에 단어를 추가하고, 텍스트 단축 입력을 설정하고, 사이트가 안내하는 맥락 프롬프트와 사용자 지정 프롬프트를 써 봅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 어떤 앱에서든 빠르고 비공개로 받아쓰는 데 집중되어 있습니다.** 아래 내용은 모두 공식 사이트와 변경 내역에서 가져왔습니다.',
        ],
        items: [
          '**어디서나 받아쓰기.** 타이핑을 받는 모든 앱의 커서 위치에 텍스트가 입력됩니다.',
          '**정리.** 군더더기 말을 자동으로 제거하고, 문장 부호와 대소문자를 알아서 처리합니다.',
          '**언어.** 자동 감지를 포함해 50개 이상의 언어를 지원하며, 한 언어로 말하고 다른 언어의 텍스트를 얻을 수도 있습니다.',
          '**회의 모드.** 화자 구분(diarization)은 버전 1.7.5에서 추가되었습니다.',
          '**개인화.** 사용자 사전, 텍스트 단축 입력, 맥락 프롬프트, 사용자 지정 프롬프트, 받아쓰기 기록을 제공합니다.',
          '**마이크 대기 모드.** 버전 1.7.10부터 받아쓰기 사이에 마이크를 계속 열어 두지 않습니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**앱은 whisper.cpp를 통해 Whisper를 실행하며 음성 프로필은 4종입니다.** FAQ와 변경 내역에는 Minimal(약 75 MB), Small(512 MB, 기본값), Medium(1.5 GB), Large(3.2 GB)와, 이전에 Turbo라 불리던 Precision 프로필이 나옵니다.',
          '다운로드 페이지는 최소 RAM 4 GB, 권장 8 GB 이상으로 안내합니다. Mac에서는 Metal을 지원하는 Apple Silicon M1 이상이, Windows에서는 최신 멀티코어 CPU 또는 지원되는 Vulkan GPU가 권장됩니다. 두 플랫폼 모두 AVX2를 지원하는 프로세서가 필요합니다. FAQ에는 Small 모델 기준 디스크 약 600 MB가 적혀 있습니다. 속도나 정확도 수치는 여기서 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 음성 인식은 로컬에서 실행되며, 오디오, 전사본, 받아쓴 텍스트, 클립보드 내용은 전사를 위해 Weesper 서버로 전송되지 않습니다.** 방침의 최종 갱신일은 2026년 7월 23일입니다. 이용 약관에는 애플리케이션이 100% 로컬로 작동한다고 덧붙어 있습니다.',
          '다른 부분에서는 여전히 인터넷이 관여합니다. 앱과 음성 모델 다운로드, Cloudflare에 호스팅된 라이선스 서비스를 통한 라이선스 활성화와 확인, Stripe를 통한 결제, GitHub의 업데이트 메타데이터, 선택형 제품 분석(PostHog)과 충돌 진단(Sentry)이 그렇습니다. 방침에 따르면 분석 이벤트에는 오디오, 전사본, 받아쓴 텍스트가 포함되지 않습니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '유료 독점 제품입니다. 15일 무료 체험 이후 월 5 EUR, 연 45 EUR, 또는 99 EUR 일회성이며 7일 환불 보장이 있습니다. 개인 라이선스는 본인 소유 컴퓨터 최대 3대를 포함합니다. 사이트에는 가격에 VAT가 포함되는지 명확히 나와 있지 않으므로 결제 단계에서 확인하십시오. 체험 이후 무료 플랜은 두 가지로 설명됩니다. FAQ에는 주당 1,500단어, 변경 내역에는 최대 60초 분량의 짧은 클립이라고 되어 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 컴퓨터에서 실행되는 Whisper',
            '실제 사용에서의 의미': '받아쓰기가 기기에서 처리되며 전사를 위한 오디오 업로드가 없습니다.',
            '한계 / 주의점': '비공개 소스라 이 주장은 검증할 수 없고, 라이선스와 다운로드에는 여전히 인터넷이 사용됩니다.',
          },
          {
            '장점': '어떤 앱에서든 받아쓰기',
            '실제 사용에서의 의미': '단축키 하나로 이메일, 채팅, 메모, 문서에서 쓸 수 있습니다.',
            '한계 / 주의점': 'Mac과 Windows 전용이며 Linux, iPhone, Android 버전은 없습니다.',
          },
          {
            '장점': '평생 라이선스 옵션',
            '실제 사용에서의 의미': '99 EUR 일회성 결제로 구독을 피할 수 있습니다.',
            '한계 / 주의점': '기본은 월간·연간 플랜이며, 체험 이후 무료 플랜은 일관되지 않게 설명됩니다.',
          },
          {
            '장점': '4종의 음성 프로필',
            '실제 사용에서의 의미': '오래된 컴퓨터에는 작고 가벼운 모델, 정확도가 필요하면 더 큰 모델을 쓸 수 있습니다.',
            '한계 / 주의점': 'Large는 디스크 3.2 GB와 더 많은 RAM이 필요하며, 속도 수치는 공개되어 있지 않습니다.',
          },
          {
            '장점': '화자 구분이 있는 회의 모드',
            '실제 사용에서의 의미': '화자 구분(diarization)이 변경 내역에 명시되어 있습니다.',
            '한계 / 주의점': '여기서는 테스트하지 않았으며, 사이트는 정확도 세부 정보를 제공하지 않습니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 1.8.12가 2026년 10월 28일에 출시되었습니다.',
            '한계 / 주의점': '소개 페이지 같은 일부 페이지에는 아직 이전 표현이 남아 있습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Weesper Neon Flow와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 받아쓰기 도구는 세 가지 데스크톱 시스템용 무료 오픈 소스 앱, 받아쓰기를 갖춘 Mac 전사 앱, 무료 Mac 전용 받아쓰기 앱, 하이브리드 오픈 소스 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Weesper Neon Flow',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '체험 후 월 5 EUR 또는 99 EUR 일회성, 독점',
            '역할': '단축키 받아쓰기',
            '주요 차이': '기기에서 Whisper 실행, 유료이며 비공개 소스',
          },
          {
            '앱': '[Handy](/ko/power-local-llm/handy-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '단축키 받아쓰기',
            '주요 차이': '오픈 소스이며 무료, Linux 추가 지원',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac 전사 앱',
            '주요 차이': '파일과 회의가 우선, Mac 전용',
          },
          {
            '앱': '[FluidVoice](/ko/power-local-llm/fluidvoice-review)',
            '플랫폼': 'Mac',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': 'Mac 받아쓰기 앱',
            '주요 차이': '무료 오픈 소스, Mac 전용',
          },
          {
            '앱': '[OpenWhispr](/ko/power-local-llm/openwhispr-review)',
            '플랫폼': 'Mac, Windows, Linux, iOS',
            '가격과 라이선스': '프리미엄, MIT',
            '역할': '로컬 또는 클라우드 모드를 갖춘 받아쓰기',
            '주요 차이': '로컬 모델, 자신의 API 키, 자체 클라우드 중에서 선택',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Weesper Neon Flow를 쓰면 좋은 사용자',
        items: [
          '**Mac이나 Windows를 쓰는 작성자와 사무직 종사자.** 단축키 하나로 이메일, 채팅, 문서에 받아쓸 수 있습니다.',
          '**클라우드 받아쓰기를 피하려는 사람.** 개발사에 따르면 음성 인식은 컴퓨터 안에서 이루어집니다.',
          '**여러 언어를 쓰는 사용자.** 자동 감지를 포함해 50개 이상의 언어를 지원합니다.',
          '**한 번만 결제하고 싶은 구매자.** 구독과 함께 99 EUR 평생 라이선스가 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Weesper Neon Flow를 쓰지 말아야 할 사용자',
        items: [
          '**Linux, iPhone, Android 사용자.** Mac과 Windows 빌드만 제공됩니다.',
          '**검증 가능한 소프트웨어가 필요한 사람.** 코드가 비공개라 개인정보 보호 주장을 직접 확인할 수 없습니다.',
          '**완전 무료 소프트웨어를 원하는 사람.** 체험판과 제한된 무료 플랜 이후에는 유료이며, Handy는 무료 오픈 소스입니다.',
          '**인터넷 없이 완전히 작업해야 하는 사람.** 라이선스와 모델 다운로드에는 연결이 필요합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Weesper Neon Flow는 오프라인에서 작동합니까?',
            a: '개발사는 앱과 음성 모델을 설치하고 나면 받아쓰기가 100% 오프라인으로 작동한다고 밝힙니다. 인터넷은 이를 내려받을 때, 체험판이나 라이선스를 활성화할 때, 그리고 가끔 하는 라이선스 확인에 필요합니다. 소개 페이지는 연결이 필요 없다고 적고 있어 이와 어긋납니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '내 음성이 클라우드로 전송됩니까?',
            a: '개인정보 처리방침에 따르면 오디오, 전사본, 받아쓴 텍스트, 클립보드 내용은 전사를 위해 Weesper 서버로 전송되지 않습니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            q: '비용은 얼마입니까?',
            a: '15일 무료 체험 이후 월 5 EUR, 연 45 EUR, 또는 99 EUR 일회성이며 7일 환불 보장이 있습니다. VAT 포함 여부는 결제 단계에서 확인하십시오.',
          },
          {
            q: '어떤 모델을 사용합니까?',
            a: 'whisper.cpp를 통한 OpenAI Whisper이며, Minimal(약 75 MB)부터 Large(3.2 GB)까지 음성 프로필 4종이 있습니다.',
          },
          {
            q: 'Weesper Neon Flow는 누가 만듭니까?',
            a: '프랑스 파리에 있는 회사 THE BLUE HOUSE (SASU)입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Mac이나 Windows PC에서 개발사에 따르면 Whisper가 사용자의 컴퓨터에서 실행되는 단축키 받아쓰기를 원하고, 비공개 소스 소프트웨어에 비용을 낼 의향이 있다면 Weesper Neon Flow가 잘 맞습니다. 15일 무료 체험, 평생 라이선스 옵션, 최근 릴리스가 있습니다.',
          '주의할 점은 범위와 검증 가능성입니다. Linux나 모바일 버전이 없고, 코드가 비공개이며, PromptQuorum이 확인하지 못한 개인정보 보호 주장이 있고, 개발사의 페이지들이 무료 플랜과 인터넷 필요 여부에 대해 서로 어긋납니다. 구매 전에 체험판을 사용하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Weesper Neon Flow 공식 사이트](https://weesperneonflow.ai/en/) — 기능, 가격, FAQ.',
          '[다운로드 페이지](https://weesperneonflow.ai/en/download/) — 플랫폼과 시스템 요구 사항.',
          '[변경 내역](https://weesperneonflow.ai/en/changelog/) — 버전 기록과 기능 추가.',
          '[개인정보 처리방침](https://weesperneonflow.ai/en/privacy) — 데이터 처리, 최종 갱신일 2026년 7월 23일.',
          '[이용 약관](https://weesperneonflow.ai/en/terms/) — 운영 주체와 로컬 작동에 관한 진술.',
          '[GitHub Releases](https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases) — 설치 파일과 버전 1.8.12의 출시일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Handy 리뷰](/ko/power-local-llm/handy-review) — Mac, Windows, Linux용 무료 오픈 소스 받아쓰기 앱.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — 받아쓰기 기능이 있는 Mac 전사 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 기반이 되는 오픈 엔진.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
          '[Sprich 리뷰: Apple Silicon Mac용 독일산 받아쓰기 앱](/ko/power-local-llm/sprich-review) — 독일어 우선의 또 다른 Mac 받아쓰기 앱으로, 무료 요금제가 있으며 Apple Silicon 전용입니다.',
        ],
      },
    },
  },
}
