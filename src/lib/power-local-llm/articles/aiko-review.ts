// Aiko Review: on-device Whisper transcription for Mac, iPhone and Vision Pro
// Slug: aiko-review
// Companion to: macwhisper-review, whisper-notes-review, buzz-captions-review, local-llm-voice-audio-compared
// Facts verified 2026-10-30 against sindresorhus.com/aiko, its privacy policy and the App Store listing id1672085276 (v1.11.0, released 2026-06-27).
// Not hands-on tested. Stale-project warning is ON (125 days since the last update on 2026-10-30).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-en.webp',
    title: 'Aiko Review: On-Device Whisper Transcription for Mac and iPhone',
    seoTitle: 'Aiko Review: On-Device Transcription for Mac, iPhone',
    intro: "Aiko is a paid, closed-source transcription app by Sindre Sorhus that turns recordings into text on your Mac, iPhone, iPad or Vision Pro with OpenAI's Whisper model, for a one-time price instead of a subscription. This review covers what its website and App Store listing document, what they leave out, and how it compares with other speech-to-text tools in the directory.",
    metaDescription: 'Aiko review: $24 one-time Whisper transcription app for Mac, iPhone and Vision Pro that runs on the device. No update in over three months. Not tested.',
    twitterDescription: 'Aiko review: a one-time-purchase app that transcribes recordings on your Mac or iPhone with Whisper. Price, privacy, limits, maintenance and alternatives.',
    audience: 'Apple users who want accurate, private transcription of recordings, meetings and lectures without a subscription — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'aiko review',
      'aiko transcription app',
      'sindre sorhus aiko',
      'on-device whisper mac',
      'offline transcription iphone',
      'one-time purchase transcription app',
      'whisper transcription app mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: "**Warning: Aiko has had no update since 27 June 2026 (version 1.11.0), so it may be unmaintained — check that it still works for you before relying on it.** **Aiko is a closed-source transcription app for Mac, iPhone, iPad and visionOS that runs OpenAI's Whisper model on the device, so audio is never uploaded, and it costs $24 once on the App Store.** Its privacy policy says no data is collected. This review covers version 1.11.0 and rests on the public website, privacy policy and App Store listing, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Aiko worth buying for private transcription on a Mac or iPhone?',
        answer: 'Probably, if you own a recent Apple device and want accurate transcripts of recordings without a subscription or an upload. Check four things first: it has had no update for over three months, the iPhone app needs iOS 26, it does not transcribe live, and it does not label speakers.',
        bullets: [
          'One $24 App Store purchase covers Mac, iPhone, iPad and visionOS; a 14-day TestFlight trial of the full app is free.',
          'Whisper large v2 runs on the Mac, and the medium or small model on iPhone, depending on memory.',
          'About 100 languages, translation to English, and export as text, JSON, CSV or SRT subtitles.',
          'Shortcuts cover batch transcription, a Finder Quick Action and recording from the iPhone Action Button.',
          'No live transcription, no speaker labels and no editing in the app; the iPhone app must stay open while it works.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'Get Aiko',
        anchor: 'get-it',
      },
      {
        label: 'Aiko at a Glance',
        anchor: 'at-a-glance',
      },
      {
        label: 'What Aiko Is',
        anchor: 'what-is-aiko',
      },
      {
        label: 'How to Get Started',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Features',
        anchor: 'features',
      },
      {
        label: 'Models and Hardware',
        anchor: 'models-hardware',
      },
      {
        label: 'Privacy, License and Cost',
        anchor: 'privacy',
      },
      {
        label: 'Trade-Offs: Benefits vs. Limitations',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko vs. Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Who Should Use Aiko',
        anchor: 'who-should-use',
      },
      {
        label: 'Who Should Not Use Aiko',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aiko is a paid Apple-only app that transcribes recordings on the device with OpenAI Whisper, and its newest update is more than three months old.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a transcriber that never phones home: you pay once, drop in a recording, wait while Whisper works on your own Mac or iPhone, and export the text.',
          },
        ],
        items: [
          'Maintenance: the newest update is over three months old, so the stale-project warning applies until a newer release is verified.',
          'License and maker: proprietary, with no source repository linked; Sindre Sorhus is both the author of the website and the App Store seller.',
          'Size and requirements: about 1.8 GB, and the 1.11.0 release notes say the app now requires iOS 26.',
          'Privacy: the policy is only two sentences long, and the code cannot be inspected.',
          'Maturity: on sale since March 2023, rated 4.7 from 329 App Store ratings.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No update since 27 June 2026. Aiko may be unmaintained: confirm it runs on your Mac or iPhone, and use the free trial before you pay.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Get Aiko',
        content: [
          '**Aiko installs like any Apple app, so no terminal is needed.** One App Store purchase covers every platform, and a free trial runs through TestFlight.',
        ],
        columns: [
          'Platform',
          'Get It',
        ],
        rows: [
          {
            Platform: 'iPhone and iPad',
            'Get It': '[Aiko on the App Store](https://apps.apple.com/app/id1672085276) — $24 once (US store)',
          },
          {
            Platform: 'Mac',
            'Get It': '[Aiko on the App Store](https://apps.apple.com/app/id1672085276) — the same purchase',
          },
          {
            Platform: 'Free trial (14 days)',
            'Get It': '[TestFlight trial](https://testflight.apple.com/join/P1qnhHCC) — the full app, no automatic charge',
          },
          {
            Platform: 'Older free builds',
            'Get It': '[Free builds](https://sindresorhus.com/aiko) 1.10.1, 1.8.2, 1.5.3 for macOS 15, 14, 13; no updates',
          },
          {
            Platform: 'Website',
            'Get It': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Aiko privacy policy](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            Platform: 'Source code',
            'Get It': 'No repository is linked',
          },
        ],
        note: 'The website states no minimum macOS version for the current build; the App Store listing shows 26.0 as the minimum OS. The site lists macOS, iOS and visionOS only, with no Windows or Android version.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko at a Glance',
        columns: [
          'Attribute',
          'Aiko',
        ],
        rows: [
          {
            Attribute: 'Platform',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            Attribute: 'Price',
            Aiko: '$24 once, all platforms',
          },
          {
            Attribute: 'License',
            Aiko: 'Proprietary, no source repository',
          },
          {
            Attribute: 'Runs',
            Aiko: 'On the device; no upload',
          },
          {
            Attribute: 'Languages',
            Aiko: 'About 100',
          },
          {
            Attribute: 'Real-time transcription',
            Aiko: 'No; no live transcription while recording',
          },
          {
            Attribute: 'Speaker labels',
            Aiko: 'No; no speaker detection yet',
          },
          {
            Attribute: 'Usable on CPU only',
            Aiko: 'Not stated',
          },
          {
            Attribute: 'Local API server',
            Aiko: 'Not stated; Shortcuts actions instead',
          },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'What Aiko Is',
        content: [
          "**Aiko is a native transcription app, not a cloud service.** The website says it runs OpenAI's Whisper model locally, and the App Store description credits Whisper and whisper.cpp for making the app possible. The FAQ says it is built with Swift and SwiftUI.",
          'It transcribes audio and video files and recordings, translates speech to English, and exports text, JSON, CSV or SRT subtitles. Sindre Sorhus has sold it since March 2023. The site quotes a Lifehacker article that praises its speed, a quote the developer chose.',
          'This review draws on the website, privacy policy and App Store listing. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a settings check and a recording.** The steps follow the website FAQ and the App Store listing.',
        ],
        numberedItems: [
          {
            title: 'Install Aiko',
            whyItMatters: 'Buy it on the [App Store](https://apps.apple.com/app/id1672085276), or start the free 14-day [TestFlight trial](https://testflight.apple.com/join/P1qnhHCC) and buy afterwards.',
          },
          {
            title: 'Check the settings',
            whyItMatters: 'Set the language or leave detection on. If the text repeats itself, the FAQ suggests "Skip silent parts" and "Reduce repetitions".',
          },
          {
            title: 'Add audio',
            whyItMatters: 'Record in the app, import audio or video files, or share a file to Aiko. Sharing from Voice Memos on iOS 26 is broken by a system bug, and the FAQ links a shortcut as a workaround.',
          },
          {
            title: 'Wait, then export',
            whyItMatters: 'Keep the iPhone app open while it transcribes, then copy the text or export it as text, JSON, CSV or subtitles.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on accurate, private transcription of recordings.** Everything below comes from the website and App Store listing.',
        ],
        items: [
          '**Accuracy first.** The listing says Aiko favors accuracy over speed.',
          '**Translation.** Speech can be translated to English, as a separate run from the original-language transcript.',
          '**Export.** Text, JSON, CSV and SRT subtitles, plus a word-replacement list that fixes common mistakes automatically.',
          '**Shortcuts.** Batch transcription, a Finder Quick Action on the Mac, and recording from the iPhone Action Button or the macOS menu bar, using shortcuts the developer links.',
          '**Housekeeping.** Optional auto-delete of recordings older than 7 days; recordings are kept in an "Aiko" folder in Files.',
          '**Whisper controls.** "Skip silent parts", "Reduce repetitions" and a "Prompt" setting help with Whisper habits such as repeated sentences or missing punctuation.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**The Mac app uses Whisper large v2; the iPhone app uses the medium or small model, depending on available memory.** The developer says Whisper large v3 was worse than v2 in too many cases, so he reverted it, and that no iPhone is powerful enough for the large model.',
          'The site gives no RAM figure and no minimum macOS version, and says available memory affects speed. The App Store listing shows 1.83 GB and 26.0 as the minimum OS. Its FAQ admits transcription can be slow because the app favors accuracy, while the Lifehacker quote on the site reports half an hour of audio in a few minutes. Neither was reproduced here.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says: "No data or personal information is collected by this app."** The website adds that audio is transcribed on the device and never uploaded. The policy is two sentences, carries no date and says nothing about analytics, crash reports or network access.',
          'The code is not open, so these statements cannot be inspected, and this review did not examine network traffic. The site also suggests pasting text into ChatGPT to add paragraphs or punctuation; that is your own choice and falls outside the promise.',
          'It is a paid, proprietary product: $24 once in the US App Store for all platforms. The site and listing describe no subscription, and the 14-day trial is free.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: [
          'Benefit',
          'What it means in real use',
          'Limitation / caveat',
        ],
        rows: [
          {
            Benefit: 'On-device Whisper',
            'What it means in real use': 'Recordings are transcribed without an upload.',
            'Limitation / caveat': 'Closed source, so the claim cannot be checked.',
          },
          {
            Benefit: 'One-time price',
            'What it means in real use': 'One purchase covers Mac, iPhone and more.',
            'Limitation / caveat': 'The free trial runs through TestFlight, not the App Store.',
          },
          {
            Benefit: 'About 100 languages',
            'What it means in real use': 'Many languages, plus translation to English.',
            'Limitation / caveat': 'Quality varies by language, and mixed-language audio is unreliable.',
          },
          {
            Benefit: 'Shortcuts and Finder actions',
            'What it means in real use': 'Batch jobs and one-tap recording are possible.',
            'Limitation / caveat': 'There is no built-in batch mode and no URL scheme.',
          },
          {
            Benefit: 'Accuracy first',
            'What it means in real use': 'The developer prefers quality over speed.',
            'Limitation / caveat': 'Transcription can be slow, and the iPhone app must stay open.',
          },
          {
            Benefit: 'Focused workflow',
            'What it means in real use': 'Import, transcribe, export.',
            'Limitation / caveat': 'No live transcription, speaker labels or in-app editing.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko vs. Alternatives',
        content: [
          'These are the closest speech-to-text tools in the directory: a Mac-only rival, an iPhone-and-Mac app with speaker labels, and a free open-source desktop app.',
        ],
        columns: [
          'App',
          'Platforms',
          'Price and license',
          'Role',
          'Key difference',
        ],
        rows: [
          {
            App: 'Aiko',
            Platforms: 'Mac, iPhone, iPad, visionOS',
            'Price and license': '$24 once, proprietary',
            Role: 'Whisper transcription app',
            'Key difference': 'Whisper large v2 on the Mac; no speaker labels',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac transcription app',
            'Key difference': 'Adds speaker recognition and dictation in Pro; Mac only',
          },
          {
            App: '[Whisper Notes](/power-local-llm/whisper-notes-review)',
            Platforms: 'iPhone, iPad, Mac',
            'Price and license': '$7.99 once, proprietary',
            Role: 'Offline transcription app',
            'Key difference': 'Adds speaker labels and costs less',
          },
          {
            App: '[Buzz Captions](/power-local-llm/buzz-captions-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Open-source desktop app',
            'Key difference': 'Open source; desktop only',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Aiko',
        items: [
          '**Apple users who transcribe recordings.** Interviews, lectures and voice memos that must not be uploaded suit an on-device app.',
          '**Subscription-averse buyers.** A single purchase replaces monthly transcription fees.',
          '**People who work in many languages.** About 100 languages and translation to English.',
          '**Shortcuts users.** Batch jobs and one-tap recording work through the linked shortcuts.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Aiko',
        items: [
          '**Anyone who needs live captions.** Aiko does not transcribe while you record.',
          '**Teams that need speaker names.** The app has no speaker detection.',
          '**Windows and Android users.** The site lists only macOS, iOS and visionOS.',
          '**iPhones that cannot run iOS 26.** The current version requires it.',
          '**Anyone who relies on frequent fixes.** The newest update is over three months old.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Aiko work offline?',
            a: 'The site says transcription runs on the device and audio is never uploaded, so it should work without a connection. This review did not test it in airplane mode.',
          },
          {
            q: 'Can I edit the transcript in Aiko?',
            a: 'No. The developer does not plan to add editing; export the text and edit it in another app.',
          },
          {
            q: 'Can it transcribe a Zoom call or a YouTube video?',
            a: "Not directly. The FAQ says to record the call and import the file, and to download a video's audio with a separate tool first.",
          },
          {
            q: 'Is there a free version?',
            a: 'Not on the App Store, but the full app has a free 14-day TestFlight trial. Older builds for macOS 13 to 15 are free but no longer updated and will not run on newer macOS versions.',
          },
          {
            q: 'Who makes Aiko?',
            a: 'Sindre Sorhus, who is named as the App Store seller and publishes the app on his own website.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Aiko is a good fit if you want accurate, private transcription of recordings on an Apple device for a single payment: it installs like any app, runs Whisper on the device and offers a free 14-day trial.',
          'The caveats are maintenance and scope: no update for more than three months, closed source with a two-sentence privacy policy, no live transcription, no speaker labels and no editing. Use the trial before you buy and check that it runs on your system.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Aiko website](https://sindresorhus.com/aiko) — features, trial, FAQ, older versions and supported languages.',
          '[Aiko privacy policy](https://sindresorhus.com/aiko/privacy-policy) — data handling statement.',
          '[Aiko on the App Store](https://apps.apple.com/us/app/id1672085276) — price, version, release date, size and description.',
          '[Lifehacker on Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — the press quote shown on the website.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — the closest Mac-only transcription app.',
          '[Whisper Notes Review](/power-local-llm/whisper-notes-review) — an iPhone and Mac alternative with speaker labels.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-de.webp',
    title: 'Aiko Rezension: Whisper-Transkription auf dem Gerät für Mac und iPhone',
    seoTitle: 'Aiko Rezension: Transkription auf dem Gerät für Mac',
    intro: 'Aiko ist eine kostenpflichtige, nicht quelloffene Transkriptions-App von Sindre Sorhus, die Aufnahmen mit OpenAIs Whisper-Modell auf Ihrem Mac, iPhone, iPad oder Vision Pro in Text umwandelt, zu einem Einmalpreis statt im Abo. Diese Rezension fasst zusammen, was Website und App-Store-Eintrag dokumentieren, was sie auslassen und wie die App im Vergleich zu anderen Spracherkennungs-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Aiko Rezension: Whisper-Transkription auf dem Gerät für Mac, iPhone und Vision Pro, einmalig 29 €. Seit über drei Monaten ohne Update; nicht getestet.',
    twitterDescription: 'Aiko Rezension: eine Einmalkauf-App, die Aufnahmen mit Whisper auf Mac oder iPhone transkribiert. Preis, Datenschutz, Grenzen, Pflege und Alternativen.',
    audience: 'Apple-Nutzer, die Aufnahmen, Besprechungen und Vorlesungen genau und privat ohne Abo transkribieren möchten — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'aiko rezension',
      'aiko transkriptions-app',
      'sindre sorhus aiko',
      'whisper auf dem gerät mac',
      'offline transkription iphone',
      'transkriptions-app einmalkauf',
      'whisper transkription app mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**Warnung: Aiko hat seit dem 27. Juni 2026 kein Update erhalten (Version 1.11.0) und wird möglicherweise nicht mehr gepflegt — prüfen Sie, ob die App bei Ihnen noch funktioniert, bevor Sie sich darauf verlassen.** **Aiko ist eine nicht quelloffene Transkriptions-App für Mac, iPhone, iPad und visionOS, die OpenAIs Whisper-Modell auf dem Gerät ausführt, sodass Audio nie hochgeladen wird, und im deutschen App Store einmalig 29 € kostet.** Laut Datenschutzerklärung werden keine Daten erhoben. Diese Rezension bezieht sich auf Version 1.11.0 und stützt sich auf Website, Datenschutzerklärung und App-Store-Eintrag, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Aiko für private Transkription auf Mac oder iPhone?',
        answer: 'Wahrscheinlich, wenn Sie ein aktuelles Apple-Gerät besitzen und genaue Transkripte von Aufnahmen ohne Abo und ohne Upload wünschen. Prüfen Sie vorher vier Dinge: Die App hat seit über drei Monaten kein Update erhalten, die iPhone-App benötigt iOS 26, sie transkribiert nicht live und sie ordnet keine Sprecher zu.',
        bullets: [
          'Ein App-Store-Kauf für 29 € (deutscher Store) deckt Mac, iPhone, iPad und visionOS ab; eine 14-tägige TestFlight-Testphase der Vollversion ist kostenlos.',
          'Auf dem Mac läuft Whisper large v2, auf dem iPhone je nach Speicher das Modell medium oder small.',
          'Etwa 100 Sprachen, Übersetzung ins Englische und Export als Text, JSON, CSV oder SRT-Untertitel.',
          'Kurzbefehle ermöglichen Stapelverarbeitung, eine Finder-Schnellaktion und Aufnahmen über die Action-Taste des iPhone.',
          'Keine Live-Transkription, keine Sprecherzuordnung und keine Bearbeitung in der App; die iPhone-App muss während der Arbeit geöffnet bleiben.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Aiko herunterladen',
        anchor: 'get-it',
      },
      {
        label: 'Aiko im Überblick',
        anchor: 'at-a-glance',
      },
      {
        label: 'Was Aiko ist',
        anchor: 'what-is-aiko',
      },
      {
        label: 'Erste Schritte',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funktionen',
        anchor: 'features',
      },
      {
        label: 'Modelle und Hardware',
        anchor: 'models-hardware',
      },
      {
        label: 'Datenschutz, Lizenz und Kosten',
        anchor: 'privacy',
      },
      {
        label: 'Abwägungen: Vorteile und Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko im Vergleich zu Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Für wen Aiko geeignet ist',
        anchor: 'who-should-use',
      },
      {
        label: 'Für wen Aiko nicht geeignet ist',
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aiko ist eine kostenpflichtige App nur für Apple-Geräte, die Aufnahmen mit OpenAI Whisper auf dem Gerät transkribiert, und ihr letztes Update liegt mehr als drei Monate zurück.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen Transkribierer vor, der nie nach Hause telefoniert: Sie zahlen einmal, laden eine Aufnahme hinein, warten, während Whisper auf Ihrem eigenen Mac oder iPhone arbeitet, und exportieren den Text.',
          },
        ],
        items: [
          'Pflege: Das letzte Update ist über drei Monate alt, daher gilt die Warnung für inaktive Projekte, bis eine neuere Version bestätigt ist.',
          'Lizenz und Hersteller: proprietär, kein Quellcode-Repository verlinkt; Sindre Sorhus ist zugleich Autor der Website und Verkäufer im App Store.',
          'Größe und Voraussetzungen: etwa 1,8 GB, und laut Versionshinweisen von 1.11.0 benötigt die App jetzt iOS 26.',
          'Datenschutz: Die Erklärung besteht nur aus zwei Sätzen, und der Code lässt sich nicht prüfen.',
          'Reife: seit März 2023 im Verkauf, bewertet mit 4,7 aus 329 App-Store-Bewertungen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Kein Update seit dem 27. Juni 2026. Aiko wird möglicherweise nicht mehr gepflegt: Prüfen Sie, ob die App auf Ihrem Mac oder iPhone läuft, und nutzen Sie die kostenlose Testphase, bevor Sie zahlen.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Aiko herunterladen',
        content: [
          '**Aiko wird wie jede Apple-App installiert, ein Terminal ist nicht nötig.** Ein App-Store-Kauf deckt alle Plattformen ab, und eine kostenlose Testphase läuft über TestFlight.',
        ],
        columns: [
          'Plattform',
          'Bezugsquelle',
        ],
        rows: [
          {
            Plattform: 'iPhone und iPad',
            Bezugsquelle: '[Aiko im App Store](https://apps.apple.com/app/id1672085276) — einmalig 29 € (deutscher Store)',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Aiko im App Store](https://apps.apple.com/app/id1672085276) — derselbe Kauf',
          },
          {
            Plattform: 'Kostenlose Testphase (14 Tage)',
            Bezugsquelle: '[TestFlight-Testphase](https://testflight.apple.com/join/P1qnhHCC) — die Vollversion, ohne automatische Abbuchung',
          },
          {
            Plattform: 'Ältere kostenlose Versionen',
            Bezugsquelle: '[Kostenlose Builds](https://sindresorhus.com/aiko) 1.10.1, 1.8.2, 1.5.3 für macOS 15, 14, 13; ohne Updates',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Aiko](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Kein Repository verlinkt',
          },
        ],
        note: 'Die Website nennt keine Mindestversion von macOS für die aktuelle Version; der App-Store-Eintrag zeigt 26.0 als Mindest-Betriebssystem. Die Website nennt nur macOS, iOS und visionOS, keine Windows- oder Android-Version.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko im Überblick',
        columns: [
          'Merkmal',
          'Aiko',
        ],
        rows: [
          {
            Merkmal: 'Plattform',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            Merkmal: 'Preis',
            Aiko: 'Einmalig 29 € (deutscher Store), alle Plattformen',
          },
          {
            Merkmal: 'Lizenz',
            Aiko: 'Proprietär, kein Quellcode-Repository',
          },
          {
            Merkmal: 'Ausführung',
            Aiko: 'Auf dem Gerät; kein Upload',
          },
          {
            Merkmal: 'Sprachen',
            Aiko: 'Etwa 100',
          },
          {
            Merkmal: 'Echtzeit-Transkription',
            Aiko: 'Nein; keine Live-Transkription während der Aufnahme',
          },
          {
            Merkmal: 'Sprecherzuordnung',
            Aiko: 'Nein; noch keine Sprechererkennung',
          },
          {
            Merkmal: 'Nur mit CPU nutzbar',
            Aiko: 'Nicht angegeben',
          },
          {
            Merkmal: 'Lokaler API-Server',
            Aiko: 'Nicht angegeben; stattdessen Kurzbefehle-Aktionen',
          },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'Was Aiko ist',
        content: [
          '**Aiko ist eine native Transkriptions-App, kein Cloud-Dienst.** Laut Website läuft OpenAIs Whisper-Modell lokal, und die App-Store-Beschreibung nennt Whisper und whisper.cpp als Grundlage der App. Die FAQ sagt, sie sei mit Swift und SwiftUI entwickelt.',
          'Sie transkribiert Audio- und Videodateien sowie Aufnahmen, übersetzt Sprache ins Englische und exportiert Text, JSON, CSV oder SRT-Untertitel. Sindre Sorhus verkauft sie seit März 2023. Die Website zitiert einen Lifehacker-Artikel, der die Geschwindigkeit lobt, ein vom Entwickler gewähltes Zitat.',
          'Diese Rezension stützt sich auf Website, Datenschutzerklärung und App-Store-Eintrag. Es gab keinen eigenen Praxistest, daher werden Genauigkeit, Geschwindigkeit und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, einem Blick in die Einstellungen und einer Aufnahme.** Die Schritte folgen der FAQ der Website und dem App-Store-Eintrag.',
        ],
        numberedItems: [
          {
            title: 'Aiko installieren',
            whyItMatters: 'Kaufen Sie die App im [App Store](https://apps.apple.com/app/id1672085276) oder starten Sie die kostenlose 14-tägige [TestFlight-Testphase](https://testflight.apple.com/join/P1qnhHCC) und kaufen Sie danach.',
          },
          {
            title: 'Einstellungen prüfen',
            whyItMatters: 'Stellen Sie die Sprache ein oder lassen Sie die Erkennung aktiv. Wiederholt sich der Text, empfiehlt die FAQ „Skip silent parts" und „Reduce repetitions".',
          },
          {
            title: 'Audio hinzufügen',
            whyItMatters: 'Nehmen Sie in der App auf, importieren Sie Audio- oder Videodateien oder teilen Sie eine Datei mit Aiko. Das Teilen aus Sprachmemos unter iOS 26 ist durch einen Systemfehler gestört, die FAQ verlinkt einen Kurzbefehl als Umgehung.',
          },
          {
            title: 'Warten und exportieren',
            whyItMatters: 'Lassen Sie die iPhone-App während der Transkription geöffnet und kopieren Sie danach den Text oder exportieren Sie ihn als Text, JSON, CSV oder Untertitel.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf genaue, private Transkription von Aufnahmen.** Alles Folgende stammt von der Website und aus dem App-Store-Eintrag.',
        ],
        items: [
          '**Genauigkeit zuerst.** Laut Eintrag bevorzugt Aiko Genauigkeit gegenüber Geschwindigkeit.',
          '**Übersetzung.** Sprache lässt sich ins Englische übersetzen, als eigener Durchlauf neben der Transkription in der Originalsprache.',
          '**Export.** Text, JSON, CSV und SRT-Untertitel sowie eine Wortersetzungsliste, die häufige Fehler automatisch korrigiert.',
          '**Kurzbefehle.** Stapeltranskription, eine Finder-Schnellaktion auf dem Mac und Aufnahmen über die Action-Taste des iPhone oder die macOS-Menüleiste, mit Kurzbefehlen, die der Entwickler verlinkt.',
          '**Aufräumen.** Optionales automatisches Löschen von Aufnahmen, die älter als 7 Tage sind; Aufnahmen liegen in einem Ordner „Aiko" in der Dateien-App.',
          '**Whisper-Steuerung.** „Skip silent parts", „Reduce repetitions" und die Einstellung „Prompt" helfen bei Whisper-typischen Problemen wie wiederholten Sätzen oder fehlender Zeichensetzung.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Die Mac-App nutzt Whisper large v2; die iPhone-App nutzt je nach verfügbarem Speicher das Modell medium oder small.** Der Entwickler sagt, Whisper large v3 sei in zu vielen Fällen schlechter als v2 gewesen, daher habe er es zurückgenommen, und kein iPhone sei leistungsstark genug für das große Modell.',
          'Die Website nennt weder einen RAM-Wert noch eine Mindestversion von macOS und sagt, der verfügbare Speicher beeinflusse die Geschwindigkeit. Der App-Store-Eintrag zeigt 1,83 GB und 26.0 als Mindest-Betriebssystem. Seine FAQ räumt ein, dass die Transkription langsam sein kann, weil die App Genauigkeit bevorzugt, während das Lifehacker-Zitat auf der Website eine halbe Stunde Audio in wenigen Minuten nennt. Beides wurde hier nicht nachgestellt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt: „No data or personal information is collected by this app."** Die Website ergänzt, dass Audio auf dem Gerät transkribiert und nie hochgeladen wird. Die Erklärung besteht aus zwei Sätzen, trägt kein Datum und sagt nichts zu Analysen, Absturzberichten oder Netzwerkzugriff.',
          'Der Code ist nicht offen, daher lassen sich diese Aussagen nicht prüfen, und diese Rezension hat den Netzwerkverkehr nicht untersucht. Die Website schlägt außerdem vor, Text in ChatGPT einzufügen, um Absätze oder Zeichensetzung zu ergänzen; das liegt in Ihrer Entscheidung und fällt nicht unter das Versprechen.',
          'Es ist ein kostenpflichtiges, proprietäres Produkt: einmalig 29 € im deutschen App Store für alle Plattformen. Website und Eintrag beschreiben kein Abo, und die 14-tägige Testphase ist kostenlos.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: [
          'Vorteil',
          'Was das im Alltag bedeutet',
          'Einschränkung / Hinweis',
        ],
        rows: [
          {
            Vorteil: 'Whisper auf dem Gerät',
            'Was das im Alltag bedeutet': 'Aufnahmen werden ohne Upload transkribiert.',
            'Einschränkung / Hinweis': 'Nicht quelloffen, die Aussage lässt sich nicht prüfen.',
          },
          {
            Vorteil: 'Einmalpreis',
            'Was das im Alltag bedeutet': 'Ein Kauf deckt Mac, iPhone und mehr ab.',
            'Einschränkung / Hinweis': 'Die Testphase läuft über TestFlight, nicht über den App Store.',
          },
          {
            Vorteil: 'Etwa 100 Sprachen',
            'Was das im Alltag bedeutet': 'Viele Sprachen und Übersetzung ins Englische.',
            'Einschränkung / Hinweis': 'Die Qualität schwankt je nach Sprache, gemischtsprachiges Audio ist unzuverlässig.',
          },
          {
            Vorteil: 'Kurzbefehle und Finder-Aktionen',
            'Was das im Alltag bedeutet': 'Stapelaufträge und Aufnahme per Fingertipp sind möglich.',
            'Einschränkung / Hinweis': 'Es gibt keinen eingebauten Stapelmodus und kein URL-Schema.',
          },
          {
            Vorteil: 'Genauigkeit zuerst',
            'Was das im Alltag bedeutet': 'Der Entwickler bevorzugt Qualität vor Tempo.',
            'Einschränkung / Hinweis': 'Die Transkription kann langsam sein, und die iPhone-App muss geöffnet bleiben.',
          },
          {
            Vorteil: 'Schlanker Ablauf',
            'Was das im Alltag bedeutet': 'Importieren, transkribieren, exportieren.',
            'Einschränkung / Hinweis': 'Keine Live-Transkription, Sprecherzuordnung oder Bearbeitung in der App.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Spracherkennungs-Werkzeuge im Verzeichnis: ein reines Mac-Gegenstück, eine iPhone-und-Mac-App mit Sprecherzuordnung und eine kostenlose Open-Source-Desktop-App.',
        ],
        columns: [
          'App',
          'Plattformen',
          'Preis und Lizenz',
          'Rolle',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: 'Aiko',
            Plattformen: 'Mac, iPhone, iPad, visionOS',
            'Preis und Lizenz': '29 € einmalig, proprietär',
            Rolle: 'Whisper-Transkriptions-App',
            'Wichtigster Unterschied': 'Whisper large v2 auf dem Mac; keine Sprecherzuordnung',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Ergänzt in Pro Sprechererkennung und Diktat; nur Mac',
          },
          {
            App: '[Whisper Notes](/de/power-local-llm/whisper-notes-review)',
            Plattformen: 'iPhone, iPad, Mac',
            'Preis und Lizenz': '8,99 € einmalig, proprietär',
            Rolle: 'Offline-Transkriptions-App',
            'Wichtigster Unterschied': 'Ergänzt Sprecherzuordnung und kostet weniger',
          },
          {
            App: '[Buzz Captions](/de/power-local-llm/buzz-captions-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Open-Source-Desktop-App',
            'Wichtigster Unterschied': 'Quelloffen; nur Desktop',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Aiko geeignet ist',
        items: [
          '**Apple-Nutzer, die Aufnahmen transkribieren.** Interviews, Vorlesungen und Sprachmemos, die nicht hochgeladen werden dürfen, passen zu einer App auf dem Gerät.',
          '**Käufer ohne Lust auf Abos.** Ein einziger Kauf ersetzt monatliche Transkriptionsgebühren.',
          '**Menschen, die in vielen Sprachen arbeiten.** Etwa 100 Sprachen und Übersetzung ins Englische.',
          '**Kurzbefehle-Nutzer.** Stapelaufträge und Aufnahme per Fingertipp funktionieren über die verlinkten Kurzbefehle.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Aiko nicht geeignet ist',
        items: [
          '**Alle, die Live-Untertitel brauchen.** Aiko transkribiert nicht, während Sie aufnehmen.',
          '**Teams, die Sprechernamen brauchen.** Die App hat keine Sprechererkennung.',
          '**Windows- und Android-Nutzer.** Die Website nennt nur macOS, iOS und visionOS.',
          '**iPhones, die iOS 26 nicht ausführen können.** Die aktuelle Version setzt es voraus.',
          '**Alle, die auf häufige Fehlerkorrekturen angewiesen sind.** Das letzte Update ist über drei Monate alt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Aiko offline?',
            a: 'Laut Website läuft die Transkription auf dem Gerät und Audio wird nie hochgeladen, daher sollte sie ohne Verbindung funktionieren. Diese Rezension hat sie nicht im Flugmodus getestet.',
          },
          {
            q: 'Kann ich das Transkript in Aiko bearbeiten?',
            a: 'Nein. Der Entwickler plant keine Bearbeitung; exportieren Sie den Text und bearbeiten Sie ihn in einer anderen App.',
          },
          {
            q: 'Kann Aiko einen Zoom-Anruf oder ein YouTube-Video transkribieren?',
            a: 'Nicht direkt. Die FAQ rät, den Anruf aufzuzeichnen und die Datei zu importieren und die Tonspur eines Videos zuvor mit einem separaten Werkzeug herunterzuladen.',
          },
          {
            q: 'Gibt es eine kostenlose Version?',
            a: 'Nicht im App Store, aber die Vollversion hat eine kostenlose 14-tägige TestFlight-Testphase. Ältere Versionen für macOS 13 bis 15 sind kostenlos, werden aber nicht mehr aktualisiert und laufen nicht unter neueren macOS-Versionen.',
          },
          {
            q: 'Wer entwickelt Aiko?',
            a: 'Sindre Sorhus, der als Verkäufer im App Store genannt wird und die App auf seiner eigenen Website veröffentlicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Aiko passt, wenn Sie Aufnahmen auf einem Apple-Gerät genau und privat gegen eine einmalige Zahlung transkribieren möchten: Die App wird wie jede andere installiert, führt Whisper auf dem Gerät aus und bietet eine kostenlose 14-tägige Testphase.',
          'Die Einschränkungen betreffen Pflege und Umfang: seit über drei Monaten kein Update, nicht quelloffen mit einer zweisätzigen Datenschutzerklärung, keine Live-Transkription, keine Sprecherzuordnung und keine Bearbeitung. Nutzen Sie die Testphase vor dem Kauf und prüfen Sie, ob die App auf Ihrem System läuft.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Aiko-Website](https://sindresorhus.com/aiko) — Funktionen, Testphase, FAQ, ältere Versionen und unterstützte Sprachen.',
          '[Datenschutzerklärung von Aiko](https://sindresorhus.com/aiko/privacy-policy) — Aussage zum Umgang mit Daten.',
          '[Aiko im App Store](https://apps.apple.com/us/app/id1672085276) — Preis, Version, Veröffentlichungsdatum, Größe und Beschreibung.',
          '[Lifehacker über Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — das Presse-Zitat auf der Website.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[MacWhisper Rezension](/de/power-local-llm/macwhisper-review) — die nächste reine Mac-Transkriptions-App.',
          '[Whisper Notes Rezension](/de/power-local-llm/whisper-notes-review) — eine Alternative für iPhone und Mac mit Sprecherzuordnung.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-fr.webp',
    title: "Test d'Aiko : transcription Whisper sur l'appareil pour Mac et iPhone",
    seoTitle: "Test d'Aiko : transcription locale pour Mac et iPhone",
    intro: "Aiko est une application de transcription payante et propriétaire de Sindre Sorhus qui convertit des enregistrements en texte sur votre Mac, iPhone, iPad ou Vision Pro avec le modèle Whisper d'OpenAI, pour un prix unique plutôt qu'un abonnement. Ce test résume ce que documentent son site et sa fiche App Store, ce qu'ils omettent, et comment l'application se compare aux autres outils de reconnaissance vocale du répertoire.",
    metaDescription: "Test d'Aiko : transcription Whisper sur l'appareil pour Mac et iPhone, 29 € en achat unique. Sans mise à jour depuis plus de trois mois ; non testée.",
    twitterDescription: "Test d'Aiko : une app à achat unique qui transcrit vos enregistrements avec Whisper sur Mac ou iPhone. Prix, confidentialité, limites, maintenance et alternatives.",
    audience: "Utilisateurs Apple qui veulent transcrire avec précision et en privé des enregistrements, réunions et cours sans abonnement — couvre le prix, l'installation, les modèles, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'test aiko',
      'aiko application de transcription',
      'sindre sorhus aiko',
      'whisper sur appareil mac',
      'transcription hors ligne iphone',
      'application de transcription achat unique',
      'application transcription whisper mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: "**Avertissement : Aiko n'a reçu aucune mise à jour depuis le 27 juin 2026 (version 1.11.0) et n'est peut-être plus maintenue — vérifiez qu'elle fonctionne encore chez vous avant de vous y fier.** **Aiko est une application de transcription propriétaire pour Mac, iPhone, iPad et visionOS qui exécute le modèle Whisper d'OpenAI sur l'appareil, de sorte que l'audio n'est jamais envoyé, et elle coûte 29 € en achat unique sur l'App Store français.** Sa politique de confidentialité indique qu'aucune donnée n'est collectée. Ce test porte sur la version 1.11.0 et s'appuie sur le site public, la politique de confidentialité et la fiche App Store, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: "Aiko vaut-elle l'achat pour une transcription privée sur Mac ou iPhone ?",
        answer: "Probablement, si vous possédez un appareil Apple récent et voulez des transcriptions précises d'enregistrements sans abonnement ni envoi de fichiers. Vérifiez d'abord quatre points : aucune mise à jour depuis plus de trois mois, l'app iPhone exige iOS 26, elle ne transcrit pas en direct et n'identifie pas les locuteurs.",
        bullets: [
          "Un achat unique à 29 € (App Store français) couvre Mac, iPhone, iPad et visionOS ; un essai TestFlight de 14 jours de l'app complète est gratuit.",
          'Whisper large v2 tourne sur le Mac, et le modèle medium ou small sur iPhone, selon la mémoire.',
          "Environ 100 langues, traduction vers l'anglais et export en texte, JSON, CSV ou sous-titres SRT.",
          "Raccourcis pour la transcription par lots, une action rapide dans le Finder et l'enregistrement depuis le bouton Action de l'iPhone.",
          "Pas de transcription en direct, pas d'étiquettes de locuteurs et pas d'édition dans l'app ; l'app iPhone doit rester ouverte pendant le travail.",
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Obtenir Aiko',
        anchor: 'get-it',
      },
      {
        label: "Aiko en un coup d'œil",
        anchor: 'at-a-glance',
      },
      {
        label: "Ce qu'est Aiko",
        anchor: 'what-is-aiko',
      },
      {
        label: 'Premiers pas',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Fonctionnalités',
        anchor: 'features',
      },
      {
        label: 'Modèles et matériel',
        anchor: 'models-hardware',
      },
      {
        label: 'Confidentialité, licence et coût',
        anchor: 'privacy',
      },
      {
        label: 'Compromis : avantages et limites',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko face aux alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Pour qui Aiko est adaptée',
        anchor: 'who-should-use',
      },
      {
        label: "Pour qui Aiko n'est pas adaptée",
        anchor: 'who-should-not-use',
      },
      {
        label: 'FAQ',
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
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Aiko est une app payante réservée à Apple qui transcrit des enregistrements sur l'appareil avec OpenAI Whisper, et sa dernière mise à jour date de plus de trois mois.",
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un transcripteur qui ne contacte jamais de serveur : vous payez une fois, déposez un enregistrement, attendez que Whisper travaille sur votre propre Mac ou iPhone, puis exportez le texte.',
          },
        ],
        items: [
          "Maintenance : la dernière mise à jour a plus de trois mois, l'avertissement de projet inactif s'applique donc jusqu'à la vérification d'une version plus récente.",
          "Licence et éditeur : propriétaire, aucun dépôt de code source lié ; Sindre Sorhus est à la fois l'auteur du site et le vendeur sur l'App Store.",
          "Taille et prérequis : environ 1,8 Go, et les notes de version de la 1.11.0 indiquent que l'app exige désormais iOS 26.",
          "Confidentialité : la politique ne tient qu'en deux phrases, et le code ne peut pas être inspecté.",
          "Maturité : en vente depuis mars 2023, notée 4,7 sur 329 évaluations sur l'App Store.",
        ],
        callouts: [
          {
            type: 'warning',
            text: "Aucune mise à jour depuis le 27 juin 2026. Aiko n'est peut-être plus maintenue : vérifiez qu'elle fonctionne sur votre Mac ou iPhone, et utilisez l'essai gratuit avant de payer.",
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Obtenir Aiko',
        content: [
          "**Aiko s'installe comme n'importe quelle app Apple, aucun terminal n'est nécessaire.** Un seul achat sur l'App Store couvre toutes les plateformes, et un essai gratuit passe par TestFlight.",
        ],
        columns: [
          'Plateforme',
          'Où la trouver',
        ],
        rows: [
          {
            Plateforme: 'iPhone et iPad',
            'Où la trouver': "[Aiko sur l'App Store](https://apps.apple.com/app/id1672085276) — 29 € en achat unique (App Store français)",
          },
          {
            Plateforme: 'Mac',
            'Où la trouver': "[Aiko sur l'App Store](https://apps.apple.com/app/id1672085276) — le même achat",
          },
          {
            Plateforme: 'Essai gratuit (14 jours)',
            'Où la trouver': "[Essai TestFlight](https://testflight.apple.com/join/P1qnhHCC) — l'app complète, sans prélèvement automatique",
          },
          {
            Plateforme: 'Anciennes versions gratuites',
            'Où la trouver': '[Builds gratuits](https://sindresorhus.com/aiko) 1.10.1, 1.8.2, 1.5.3 pour macOS 15, 14, 13 ; sans mises à jour',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': "[Politique de confidentialité d'Aiko](https://sindresorhus.com/aiko/privacy-policy)",
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': 'Aucun dépôt lié',
          },
        ],
        note: "Le site n'indique aucune version minimale de macOS pour la version actuelle ; la fiche App Store affiche 26.0 comme système minimal. Le site ne cite que macOS, iOS et visionOS, sans version Windows ni Android.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Aiko en un coup d'œil",
        columns: [
          'Attribut',
          'Aiko',
        ],
        rows: [
          {
            Attribut: 'Plateforme',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            Attribut: 'Prix',
            Aiko: '29 € en achat unique (App Store français), toutes plateformes',
          },
          {
            Attribut: 'Licence',
            Aiko: 'Propriétaire, aucun dépôt de code source',
          },
          {
            Attribut: 'Exécution',
            Aiko: "Sur l'appareil ; aucun envoi",
          },
          {
            Attribut: 'Langues',
            Aiko: 'Environ 100',
          },
          {
            Attribut: 'Transcription en temps réel',
            Aiko: "Non ; pas de transcription en direct pendant l'enregistrement",
          },
          {
            Attribut: 'Étiquettes de locuteurs',
            Aiko: 'Non ; pas encore de détection des locuteurs',
          },
          {
            Attribut: 'Utilisable avec le seul CPU',
            Aiko: 'Non précisé',
          },
          {
            Attribut: 'Serveur API local',
            Aiko: 'Non précisé ; actions Raccourcis à la place',
          },
        ],
        note: 'Les attributs suivent la comparaison de reconnaissance vocale utilisée dans le Local LLM Software Directory. Une mention absente du site signifie inconnu, pas non pris en charge.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: "Ce qu'est Aiko",
        content: [
          "**Aiko est une application de transcription native, pas un service cloud.** Selon le site, elle exécute le modèle Whisper d'OpenAI en local, et la description sur l'App Store cite Whisper et whisper.cpp comme base de l'application. La FAQ indique qu'elle est développée avec Swift et SwiftUI.",
          "Elle transcrit des fichiers audio et vidéo ainsi que des enregistrements, traduit la parole vers l'anglais et exporte du texte, du JSON, du CSV ou des sous-titres SRT. Sindre Sorhus la vend depuis mars 2023. Le site cite un article de Lifehacker qui salue sa rapidité, une citation choisie par le développeur.",
          "Ce test s'appuie sur le site, la politique de confidentialité et la fiche App Store. Il n'y a pas eu d'essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un coup d'œil aux réglages et un enregistrement.** Les étapes suivent la FAQ du site et la fiche App Store.",
        ],
        numberedItems: [
          {
            title: 'Installer Aiko',
            whyItMatters: "Achetez l'app sur l'[App Store](https://apps.apple.com/app/id1672085276), ou démarrez l'[essai TestFlight](https://testflight.apple.com/join/P1qnhHCC) gratuit de 14 jours et achetez ensuite.",
          },
          {
            title: 'Vérifier les réglages',
            whyItMatters: 'Choisissez la langue ou laissez la détection active. Si le texte se répète, la FAQ suggère « Skip silent parts » et « Reduce repetitions ».',
          },
          {
            title: "Ajouter de l'audio",
            whyItMatters: "Enregistrez dans l'app, importez des fichiers audio ou vidéo, ou partagez un fichier vers Aiko. Le partage depuis Dictaphone sous iOS 26 est perturbé par un bug système, et la FAQ lie un raccourci comme contournement.",
          },
          {
            title: 'Attendre, puis exporter',
            whyItMatters: "Laissez l'app iPhone ouverte pendant la transcription, puis copiez le texte ou exportez-le en texte, JSON, CSV ou sous-titres.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble de fonctions se concentre sur la transcription précise et privée d'enregistrements.** Tout ce qui suit provient du site et de la fiche App Store.",
        ],
        items: [
          "**La précision d'abord.** Selon la fiche, Aiko privilégie la précision à la vitesse.",
          "**Traduction.** La parole peut être traduite vers l'anglais, lors d'un passage distinct de la transcription dans la langue d'origine.",
          '**Export.** Texte, JSON, CSV et sous-titres SRT, plus une liste de remplacement de mots qui corrige automatiquement les erreurs courantes.',
          "**Raccourcis.** Transcription par lots, une action rapide dans le Finder sur Mac, et enregistrement depuis le bouton Action de l'iPhone ou la barre des menus de macOS, avec des raccourcis que le développeur met en lien.",
          "**Entretien.** Suppression automatique facultative des enregistrements de plus de 7 jours ; les enregistrements sont conservés dans un dossier « Aiko » de l'app Fichiers.",
          '**Contrôles Whisper.** « Skip silent parts », « Reduce repetitions » et un réglage « Prompt » aident face aux travers de Whisper, comme les phrases répétées ou la ponctuation manquante.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**L'app Mac utilise Whisper large v2 ; l'app iPhone utilise le modèle medium ou small, selon la mémoire disponible.** Le développeur dit que Whisper large v3 était moins bon que la v2 dans trop de cas, qu'il l'a donc retiré, et qu'aucun iPhone n'est assez puissant pour le grand modèle.",
          "Le site ne donne ni chiffre de RAM ni version minimale de macOS, et précise que la mémoire disponible influe sur la vitesse. La fiche App Store affiche 1,83 Go et 26.0 comme système minimal. Sa FAQ admet que la transcription peut être lente parce que l'app privilégie la précision, tandis que la citation de Lifehacker sur le site évoque une demi-heure d'audio en quelques minutes. Ni l'un ni l'autre n'a été reproduit ici.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique : « No data or personal information is collected by this app. »** Le site ajoute que l'audio est transcrit sur l'appareil et jamais envoyé. La politique tient en deux phrases, ne porte aucune date et ne dit rien sur les statistiques d'usage, les rapports de plantage ou l'accès au réseau.",
          "Le code n'est pas ouvert, ces déclarations ne peuvent donc pas être inspectées, et ce test n'a pas examiné le trafic réseau. Le site suggère aussi de coller du texte dans ChatGPT pour ajouter des paragraphes ou la ponctuation ; c'est votre choix et cela sort de la promesse.",
          "C'est un produit payant et propriétaire : 29 € en achat unique sur l'App Store français pour toutes les plateformes. Le site et la fiche ne décrivent aucun abonnement, et l'essai de 14 jours est gratuit.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: [
          'Avantage',
          "Ce que cela donne à l'usage",
          'Limite / réserve',
        ],
        rows: [
          {
            Avantage: "Whisper sur l'appareil",
            "Ce que cela donne à l'usage": 'Les enregistrements sont transcrits sans envoi.',
            'Limite / réserve': "Code fermé : l'affirmation ne peut pas être vérifiée.",
          },
          {
            Avantage: 'Prix unique',
            "Ce que cela donne à l'usage": 'Un seul achat couvre Mac, iPhone et plus.',
            'Limite / réserve': "L'essai gratuit passe par TestFlight, pas par l'App Store.",
          },
          {
            Avantage: 'Environ 100 langues',
            "Ce que cela donne à l'usage": "De nombreuses langues, plus la traduction vers l'anglais.",
            'Limite / réserve': "La qualité varie selon la langue, et l'audio multilingue est peu fiable.",
          },
          {
            Avantage: 'Raccourcis et actions Finder',
            "Ce que cela donne à l'usage": 'Les tâches par lots et un enregistrement en un geste sont possibles.',
            'Limite / réserve': "Il n'y a ni mode lots intégré ni schéma d'URL.",
          },
          {
            Avantage: "La précision d'abord",
            "Ce que cela donne à l'usage": 'Le développeur préfère la qualité à la rapidité.',
            'Limite / réserve': "La transcription peut être lente, et l'app iPhone doit rester ouverte.",
          },
          {
            Avantage: 'Parcours ciblé',
            "Ce que cela donne à l'usage": 'Importer, transcrire, exporter.',
            'Limite / réserve': "Pas de transcription en direct, d'étiquettes de locuteurs ni d'édition dans l'app.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko face aux alternatives',
        content: [
          'Ce sont les outils de reconnaissance vocale les plus proches du répertoire : un concurrent réservé au Mac, une app iPhone et Mac avec étiquettes de locuteurs, et une app de bureau open source gratuite.',
        ],
        columns: [
          'App',
          'Plateformes',
          'Prix et licence',
          'Rôle',
          'Différence principale',
        ],
        rows: [
          {
            App: 'Aiko',
            Plateformes: 'Mac, iPhone, iPad, visionOS',
            'Prix et licence': '29 € en achat unique, propriétaire',
            'Rôle': 'App de transcription Whisper',
            'Différence principale': "Whisper large v2 sur Mac ; pas d'étiquettes de locuteurs",
          },
          {
            App: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            'Rôle': 'App de transcription Mac',
            'Différence principale': 'Ajoute reconnaissance des locuteurs et dictée dans Pro ; Mac uniquement',
          },
          {
            App: '[Whisper Notes](/fr/power-local-llm/whisper-notes-review)',
            Plateformes: 'iPhone, iPad, Mac',
            'Prix et licence': '8,99 € en achat unique, propriétaire',
            'Rôle': 'App de transcription hors ligne',
            'Différence principale': 'Ajoute des étiquettes de locuteurs et coûte moins cher',
          },
          {
            App: '[Buzz Captions](/fr/power-local-llm/buzz-captions-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'App de bureau open source',
            'Différence principale': 'Open source ; bureau uniquement',
          },
        ],
        note: 'Les plateformes, prix et fonctions des applications tierces changent souvent. Vérifiez les détails actuels sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Aiko est adaptée',
        items: [
          '**Les utilisateurs Apple qui transcrivent des enregistrements.** Les entretiens, cours et mémos vocaux qui ne doivent pas être envoyés conviennent à une app locale.',
          '**Les acheteurs allergiques aux abonnements.** Un achat unique remplace des frais de transcription mensuels.',
          "**Les personnes qui travaillent en plusieurs langues.** Environ 100 langues et traduction vers l'anglais.",
          "**Les utilisateurs de Raccourcis.** Les tâches par lots et l'enregistrement en un geste passent par les raccourcis liés.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Aiko n'est pas adaptée",
        items: [
          '**Quiconque a besoin de sous-titres en direct.** Aiko ne transcrit pas pendant que vous enregistrez.',
          "**Les équipes qui ont besoin de noms de locuteurs.** L'app n'a pas de détection des locuteurs.",
          "**Les utilisateurs de Windows et d'Android.** Le site ne cite que macOS, iOS et visionOS.",
          "**Les iPhone qui ne peuvent pas exécuter iOS 26.** La version actuelle l'exige.",
          '**Quiconque compte sur des correctifs fréquents.** La dernière mise à jour a plus de trois mois.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Aiko fonctionne-t-elle hors ligne ?',
            a: "Selon le site, la transcription s'exécute sur l'appareil et l'audio n'est jamais envoyé, elle devrait donc fonctionner sans connexion. Ce test ne l'a pas essayée en mode avion.",
          },
          {
            q: 'Puis-je modifier la transcription dans Aiko ?',
            a: "Non. Le développeur ne prévoit pas d'ajouter l'édition ; exportez le texte et modifiez-le dans une autre app.",
          },
          {
            q: 'Peut-elle transcrire un appel Zoom ou une vidéo YouTube ?',
            a: "Pas directement. La FAQ indique d'enregistrer l'appel puis d'importer le fichier, et de télécharger d'abord la piste audio d'une vidéo avec un outil séparé.",
          },
          {
            q: 'Existe-t-il une version gratuite ?',
            a: "Pas sur l'App Store, mais l'app complète dispose d'un essai TestFlight gratuit de 14 jours. Les anciennes versions pour macOS 13 à 15 sont gratuites mais ne sont plus mises à jour et ne fonctionnent pas sur les macOS plus récents.",
          },
          {
            q: 'Qui développe Aiko ?',
            a: "Sindre Sorhus, nommé comme vendeur sur l'App Store, qui publie l'app sur son propre site.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Aiko convient si vous voulez transcrire avec précision et en privé des enregistrements sur un appareil Apple contre un paiement unique : elle s'installe comme n'importe quelle app, exécute Whisper sur l'appareil et propose un essai gratuit de 14 jours.",
          "Les réserves concernent la maintenance et le périmètre : aucune mise à jour depuis plus de trois mois, code fermé avec une politique de confidentialité en deux phrases, pas de transcription en direct, pas d'étiquettes de locuteurs et pas d'édition. Utilisez l'essai avant d'acheter et vérifiez qu'elle fonctionne sur votre système.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site d'Aiko](https://sindresorhus.com/aiko) — fonctions, essai, FAQ, anciennes versions et langues prises en charge.",
          "[Politique de confidentialité d'Aiko](https://sindresorhus.com/aiko/privacy-policy) — déclaration sur le traitement des données.",
          "[Aiko sur l'App Store](https://apps.apple.com/us/app/id1672085276) — prix, version, date de sortie, taille et description.",
          '[Lifehacker sur Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — la citation de presse affichée sur le site.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux et audio locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          "[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — l'app de transcription réservée au Mac la plus proche.",
          '[Test de Whisper Notes](/fr/power-local-llm/whisper-notes-review) — une alternative iPhone et Mac avec étiquettes de locuteurs.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses apps Whisper locales.',
          "[Le Local LLM Software Directory complet](/fr/directory) — un répertoire plus large d'outils d'IA locale sur toutes les plateformes.",
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-ja.webp',
    title: 'Aikoレビュー：Mac・iPhone向けの端末内Whisper文字起こしアプリ',
    seoTitle: 'Aikoレビュー：端末内で動くWhisper文字起こしアプリ',
    intro: 'Aikoは、Sindre Sorhus氏が開発した有料のクローズドソースの文字起こしアプリです。OpenAIのWhisperモデルを使い、Mac・iPhone・iPad・Vision Pro上で録音をテキストに変換します。サブスクリプションではなく買い切り価格で提供されています。このレビューでは、公式サイトとApp Storeの掲載内容が示している点、示していない点、ディレクトリ内の他の音声認識ツールとの比較をまとめます。',
    metaDescription: 'Aikoのレビュー：Mac・iPhone・Vision Pro向け、端末内で動くWhisper文字起こしアプリ。日本のストアで4,000円の買い切り。3か月以上更新なし。',
    twitterDescription: 'Aikoのレビュー：MacやiPhoneでWhisperにより録音を文字起こしする買い切りアプリ。価格、プライバシー、制限、メンテナンス状況、代替ツールを解説します。',
    audience: '録音・会議・講義をサブスクなしで、正確かつプライベートに文字起こししたいAppleユーザー向け。価格、インストール、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'aiko レビュー',
      'aiko 文字起こしアプリ',
      'sindre sorhus aiko',
      'whisper 端末内 mac',
      'iphone オフライン 文字起こし',
      '買い切り 文字起こしアプリ',
      'whisper 文字起こし mac アプリ',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**警告：Aikoは2026年6月27日（バージョン1.11.0）以降、更新されていません。メンテナンスされていない可能性があるため、利用前にお使いの環境で動作するかご確認ください。** **Aikoは、Mac・iPhone・iPad・visionOS向けのクローズドソースの文字起こしアプリで、OpenAIのWhisperモデルを端末内で実行するため音声がアップロードされることはなく、日本のApp Storeでは4,000円の買い切りです。** プライバシーポリシーには、データは収集されないと記載されています。このレビューはバージョン1.11.0が対象で、公式サイト、プライバシーポリシー、App Storeの掲載内容に基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'MacやiPhoneでプライベートに文字起こしするなら、Aikoは買う価値がありますか？',
        answer: '最近のAppleデバイスをお持ちで、サブスクやアップロードなしに録音を正確に文字起こししたい方には、おそらく向いています。購入前に4点を確認してください。3か月以上更新されていないこと、iPhone版はiOS 26が必要なこと、ライブ文字起こしには非対応なこと、話者ラベルがないことです。',
        bullets: [
          'App Storeの1回の購入（日本のストアで4,000円）でMac・iPhone・iPad・visionOSに対応し、完全版を14日間試せるTestFlight体験版は無料です。',
          'MacではWhisper large v2、iPhoneでは搭載メモリに応じてmediumまたはsmallモデルが動作します。',
          '約100言語に対応し、英語への翻訳と、テキスト・JSON・CSV・SRT字幕での書き出しができます。',
          'ショートカットで一括文字起こし、Finderのクイックアクション、iPhoneのアクションボタンからの録音が使えます。',
          'ライブ文字起こし、話者ラベル、アプリ内編集はなく、iPhone版は処理中アプリを開いたままにする必要があります。',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Aikoの入手方法',
        anchor: 'get-it',
      },
      {
        label: 'Aikoの概要',
        anchor: 'at-a-glance',
      },
      {
        label: 'Aikoとは',
        anchor: 'what-is-aiko',
      },
      {
        label: 'はじめ方',
        anchor: 'how-to-get-started',
      },
      {
        label: '機能',
        anchor: 'features',
      },
      {
        label: 'モデルとハードウェア',
        anchor: 'models-hardware',
      },
      {
        label: 'プライバシー・ライセンス・費用',
        anchor: 'privacy',
      },
      {
        label: 'メリットと制限',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aikoと代替ツールの比較',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Aikoが向いている人',
        anchor: 'who-should-use',
      },
      {
        label: 'Aikoが向いていない人',
        anchor: 'who-should-not-use',
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
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aikoは、OpenAIのWhisperで録音を端末内で文字起こしするApple専用の有料アプリで、最新の更新は3か月以上前です。',
          },
          {
            type: 'plain-terms',
            text: '外部に通信しない文字起こしツールだと考えてください。一度だけ支払い、録音を読み込み、お使いのMacやiPhoneでWhisperが処理するのを待って、テキストを書き出します。',
          },
        ],
        items: [
          'メンテナンス：最新の更新は3か月以上前のため、新しいリリースが確認されるまで更新停止の警告が適用されます。',
          'ライセンスと開発者：プロプライエタリで、ソースコードのリポジトリへのリンクはありません。Sindre Sorhus氏がサイトの著者であり、App Storeの販売元でもあります。',
          'サイズと要件：約1.8GBで、1.11.0のリリースノートにはアプリがiOS 26を必要とすると書かれています。',
          'プライバシー：ポリシーは2文だけで、コードは検証できません。',
          '成熟度：2023年3月から販売されており、App Storeの329件の評価で平均4.7です。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年6月27日以降、更新がありません。Aikoはメンテナンスされていない可能性があります。お使いのMacやiPhoneで動作するか確認し、支払う前に無料体験版をお試しください。',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Aikoの入手方法',
        content: [
          '**AikoはほかのAppleアプリと同じようにインストールでき、ターミナルは不要です。** App Storeの1回の購入で全プラットフォームに対応し、無料体験版はTestFlightで提供されています。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'iPhoneとiPad',
            '入手先': '[App StoreのAiko](https://apps.apple.com/app/id1672085276) — 4,000円の買い切り（日本のストア）',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[App StoreのAiko](https://apps.apple.com/app/id1672085276) — 同じ購入で利用できます',
          },
          {
            'プラットフォーム': '無料体験版（14日間）',
            '入手先': '[TestFlight体験版](https://testflight.apple.com/join/P1qnhHCC) — 完全版で、自動課金はありません',
          },
          {
            'プラットフォーム': '旧バージョン（無料）',
            '入手先': '[無料の旧版](https://sindresorhus.com/aiko)：macOS 15・14・13向け1.10.1、1.8.2、1.5.3。更新なし',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Aikoのプライバシーポリシー](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': 'リポジトリへのリンクなし',
          },
        ],
        note: '公式サイトには現行版の最低macOSバージョンの記載がなく、App Storeの掲載情報では最低OSが26.0と表示されています。サイトが挙げているのはmacOS、iOS、visionOSのみで、WindowsやAndroid版はありません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aikoの概要',
        columns: [
          '項目',
          'Aiko',
        ],
        rows: [
          {
            '項目': 'プラットフォーム',
            Aiko: 'Mac、iPhone、iPad、visionOS',
          },
          {
            '項目': '価格',
            Aiko: '4,000円の買い切り（日本のストア）、全プラットフォーム共通',
          },
          {
            '項目': 'ライセンス',
            Aiko: 'プロプライエタリ、ソースコードのリポジトリなし',
          },
          {
            '項目': '実行場所',
            Aiko: '端末内。アップロードなし',
          },
          {
            '項目': '対応言語',
            Aiko: '約100言語',
          },
          {
            '項目': 'リアルタイム文字起こし',
            Aiko: '非対応。録音中のライブ文字起こしなし',
          },
          {
            '項目': '話者ラベル',
            Aiko: '非対応。話者検出は未対応',
          },
          {
            '項目': 'CPUのみで利用可能',
            Aiko: '記載なし',
          },
          {
            '項目': 'ローカルAPIサーバー',
            Aiko: '記載なし。代わりにショートカットのアクションを提供',
          },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'Aikoとは',
        content: [
          '**Aikoはクラウドサービスではなく、ネイティブの文字起こしアプリです。** 公式サイトによると、OpenAIのWhisperモデルをローカルで実行します。App Storeの説明では、Whisperとwhisper.cppへの謝辞が書かれています。FAQによると、SwiftとSwiftUIで作られています。',
          '音声ファイル、動画ファイル、録音を文字起こしし、音声を英語に翻訳し、テキスト、JSON、CSV、SRT字幕として書き出せます。Sindre Sorhus氏が2023年3月から販売しています。サイトにはLifehackerの記事が引用されており、速度を評価していますが、これは開発者が選んだ引用です。',
          'このレビューは、公式サイト、プライバシーポリシー、App Storeの掲載内容に基づいています。実機での検証は行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、設定の確認、録音の3ステップです。** 手順は公式サイトのFAQとApp Storeの掲載内容に沿っています。',
        ],
        numberedItems: [
          {
            title: 'Aikoをインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/app/id1672085276)で購入するか、14日間無料の[TestFlight体験版](https://testflight.apple.com/join/P1qnhHCC)を始めて、あとで購入します。',
          },
          {
            title: '設定を確認する',
            whyItMatters: '言語を選ぶか、自動検出のままにします。テキストが繰り返される場合、FAQでは「Skip silent parts」と「Reduce repetitions」が提案されています。',
          },
          {
            title: '音声を追加する',
            whyItMatters: 'アプリ内で録音するか、音声・動画ファイルを読み込むか、ファイルをAikoに共有します。iOS 26ではボイスメモからの共有がシステムのバグで動作せず、FAQは回避策としてショートカットを紹介しています。',
          },
          {
            title: '待ってから書き出す',
            whyItMatters: '文字起こし中はiPhone版を開いたままにし、完了後にテキストをコピーするか、テキスト・JSON・CSV・字幕として書き出します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、録音を正確かつプライベートに文字起こしすることです。** 以下はすべて公式サイトとApp Storeの掲載内容によります。',
        ],
        items: [
          '**精度優先。** 掲載内容によると、Aikoは速度より精度を重視しています。',
          '**翻訳。** 音声を英語に翻訳できます。元の言語での文字起こしとは別の実行になります。',
          '**書き出し。** テキスト、JSON、CSV、SRT字幕に加え、よくある誤りを自動で直す単語置換リストがあります。',
          '**ショートカット。** 一括文字起こし、MacのFinderのクイックアクション、iPhoneのアクションボタンやmacOSのメニューバーからの録音を、開発者が紹介するショートカットで利用できます。',
          '**データ整理。** 7日より古い録音を自動削除するオプションがあり、録音は「ファイル」アプリの「Aiko」フォルダに保存されます。',
          '**Whisperの調整機能。** 「Skip silent parts」「Reduce repetitions」「Prompt」の設定で、文の繰り返しや句読点の欠落といったWhisper特有の癖に対処できます。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**Mac版はWhisper large v2、iPhone版は利用可能なメモリに応じてmediumまたはsmallモデルを使います。** 開発者は、Whisper large v3は多くの場合v2より劣っていたため元に戻したこと、また大型モデルを動かせるほど高性能なiPhoneは存在しないことを述べています。',
          'サイトにはRAM容量も最低macOSバージョンも記載がなく、利用可能なメモリが速度に影響するとだけあります。App Storeの掲載情報では1.83GB、最低OSは26.0です。FAQでは、精度を優先するため文字起こしが遅くなることがあると認めていますが、サイトに引用されたLifehackerは30分の音声が数分で処理できたと伝えています。どちらもここでは再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには「No data or personal information is collected by this app.」とあります。** サイトでは、音声は端末内で文字起こしされ、アップロードされることはないとも説明しています。ポリシーは2文で、日付はなく、分析、クラッシュレポート、ネットワークアクセスについての記載もありません。',
          'コードは公開されていないため、これらの記述は検証できず、このレビューではネットワーク通信も調べていません。サイトは、段落や句読点を補うためにテキストをChatGPTに貼り付ける方法も紹介していますが、それは利用者自身の判断であり、上記の約束の範囲外です。',
          '有料のプロプライエタリ製品で、日本のApp Storeでは全プラットフォーム共通で4,000円の買い切りです。サイトと掲載内容にはサブスクリプションの記載はなく、14日間の体験版は無料です。',
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
            'メリット': '端末内のWhisper',
            '実際の使い勝手': '録音をアップロードせずに文字起こしできます。',
            '制限・注意点': 'クローズドソースのため、この主張は検証できません。',
          },
          {
            'メリット': '買い切り価格',
            '実際の使い勝手': '1回の購入でMac、iPhoneなどに対応します。',
            '制限・注意点': '体験版はApp StoreではなくTestFlightで提供されます。',
          },
          {
            'メリット': '約100言語',
            '実際の使い勝手': '多くの言語に対応し、英語への翻訳もできます。',
            '制限・注意点': '言語によって品質が異なり、複数言語が混在する音声は不安定です。',
          },
          {
            'メリット': 'ショートカットとFinder操作',
            '実際の使い勝手': '一括処理やワンタップ録音が可能です。',
            '制限・注意点': '一括処理機能はアプリ内になく、URLスキームもありません。',
          },
          {
            'メリット': '精度優先',
            '実際の使い勝手': '開発者は速度より品質を優先しています。',
            '制限・注意点': '文字起こしが遅いことがあり、iPhone版は開いたままにする必要があります。',
          },
          {
            'メリット': '絞り込まれた機能',
            '実際の使い勝手': '読み込み、文字起こし、書き出しだけです。',
            '制限・注意点': 'ライブ文字起こし、話者ラベル、アプリ内編集はありません。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aikoと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声認識ツールは、Mac専用の競合アプリ、話者ラベル付きのiPhone・Mac向けアプリ、無料のオープンソースのデスクトップアプリです。',
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
            'アプリ': 'Aiko',
            '対応': 'Mac、iPhone、iPad、visionOS',
            '価格とライセンス': '4,000円の買い切り、プロプライエタリ',
            '役割': 'Whisper文字起こしアプリ',
            '主な違い': 'MacではWhisper large v2。話者ラベルなし',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'Proで話者認識とディクテーションを追加。Mac専用',
          },
          {
            'アプリ': '[Whisper Notes](/ja/power-local-llm/whisper-notes-review)',
            '対応': 'iPhone、iPad、Mac',
            '価格とライセンス': '800円の買い切り、プロプライエタリ',
            '役割': 'オフライン文字起こしアプリ',
            '主な違い': '話者ラベルがあり、価格も低め',
          },
          {
            'アプリ': '[Buzz Captions](/ja/power-local-llm/buzz-captions-review)',
            '対応': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'オープンソースのデスクトップアプリ',
            '主な違い': 'オープンソース。デスクトップのみ',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Aikoが向いている人',
        items: [
          '**録音を文字起こしするAppleユーザー。** アップロードできないインタビュー、講義、ボイスメモには端末内のアプリが適しています。',
          '**サブスクリプションを避けたい人。** 1回払いで、月額の文字起こし料金が不要になります。',
          '**多言語で作業する人。** 約100言語に対応し、英語への翻訳もできます。',
          '**ショートカットを使う人。** 一括処理やワンタップ録音は、紹介されているショートカットで利用できます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Aikoが向いていない人',
        items: [
          '**ライブ字幕が必要な人。** Aikoは録音中には文字起こししません。',
          '**話者名が必要なチーム。** アプリには話者検出がありません。',
          '**WindowsやAndroidのユーザー。** サイトが挙げているのはmacOS、iOS、visionOSだけです。',
          '**iOS 26を実行できないiPhone。** 現行版はiOS 26を必要とします。',
          '**頻繁な修正に頼りたい人。** 最新の更新は3か月以上前です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Aikoはオフラインで使えますか？',
            a: 'サイトによると、文字起こしは端末内で実行され、音声がアップロードされることはないため、接続なしで動作するはずです。このレビューでは機内モードでの動作は確認していません。',
          },
          {
            q: 'Aiko内で文字起こしを編集できますか？',
            a: 'できません。開発者は編集機能を追加する予定はなく、テキストを書き出して別のアプリで編集するよう案内しています。',
          },
          {
            q: 'Zoomの通話やYouTube動画を文字起こしできますか？',
            a: '直接はできません。FAQでは、通話を録音してファイルを読み込むこと、動画は先に別のツールで音声をダウンロードすることを案内しています。',
          },
          {
            q: '無料版はありますか？',
            a: 'App Storeにはありませんが、完全版を14日間試せる無料のTestFlight体験版があります。macOS 13〜15向けの旧バージョンは無料ですが、更新は終了しており、新しいmacOSでは動作しません。',
          },
          {
            q: 'Aikoは誰が作っていますか？',
            a: 'Sindre Sorhus氏です。App Storeの販売元として表示され、自身のサイトでアプリを公開しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Appleデバイスで、録音を一度の支払いで正確かつプライベートに文字起こししたい方にAikoは向いています。ほかのアプリと同じようにインストールでき、Whisperを端末内で実行し、14日間の無料体験版もあります。',
          '注意点はメンテナンスと機能の範囲です。3か月以上更新がなく、クローズドソースで2文だけのプライバシーポリシー、ライブ文字起こし・話者ラベル・編集がありません。購入前に体験版を使い、お使いの環境で動作するか確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Aiko公式サイト](https://sindresorhus.com/aiko) — 機能、体験版、FAQ、旧バージョン、対応言語。',
          '[Aikoのプライバシーポリシー](https://sindresorhus.com/aiko/privacy-policy) — データの取り扱いに関する記述。',
          '[App StoreのAiko](https://apps.apple.com/us/app/id1672085276) — 価格、バージョン、リリース日、サイズ、説明。',
          '[LifehackerのAiko記事](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — サイトに掲載されているメディアの引用。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — 最も近いMac専用の文字起こしアプリ。',
          '[Whisper Notesレビュー](/ja/power-local-llm/whisper-notes-review) — 話者ラベル付きのiPhone・Mac向け代替アプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-zh.webp',
    title: 'Aiko评测：适用于Mac和iPhone的设备端Whisper转录应用',
    seoTitle: 'Aiko评测：Mac和iPhone上设备端运行的Whisper转录应用',
    intro: 'Aiko是Sindre Sorhus开发的付费闭源转录应用，使用OpenAI的Whisper模型，在你的Mac、iPhone、iPad或Vision Pro上把录音转成文字，采用一次性买断而非订阅。本评测梳理其官网和App Store页面记载的内容、遗漏的内容，以及它与目录中其他语音转文字工具的对比。',
    metaDescription: 'Aiko评测：适用于Mac、iPhone和Vision Pro的设备端Whisper转录应用，一次性24美元，已超过三个月未更新，未经实测。',
    twitterDescription: 'Aiko评测：一次性买断的应用，在Mac或iPhone上用Whisper转录录音。价格、隐私、限制、维护状态与替代方案。',
    audience: '希望无需订阅、准确且私密地转录录音、会议和讲座的Apple用户——涵盖价格、安装、模型、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'aiko 评测',
      'aiko 转录应用',
      'sindre sorhus aiko',
      'mac 设备端 whisper',
      'iphone 离线转录',
      '买断制转录应用',
      'whisper 转录应用 mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**警告：Aiko自2026年6月27日（版本1.11.0）以来没有任何更新，可能已无人维护——使用前请先确认它在你的设备上仍能正常运行。** **Aiko是一款适用于Mac、iPhone、iPad和visionOS的闭源转录应用，在设备上运行OpenAI的Whisper模型，音频不会上传，在App Store一次性售价24美元。** 其隐私政策称不收集任何数据。本评测针对版本1.11.0，依据公开官网、隐私政策和App Store页面，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Aiko值得购买，用于Mac或iPhone上的私密转录吗？',
        answer: '如果你有较新的Apple设备，想要无需订阅、无需上传且准确的录音转录，那么很可能值得。购买前请先确认四点：已超过三个月未更新、iPhone版需要iOS 26、不支持实时转录、也不区分说话人。',
        bullets: [
          'App Store一次性购买24美元即可覆盖Mac、iPhone、iPad和visionOS；完整版的14天TestFlight试用免费。',
          'Mac上运行Whisper large v2，iPhone上根据内存运行medium或small模型。',
          '支持约100种语言，可翻译为英语，并导出为文本、JSON、CSV或SRT字幕。',
          '快捷指令支持批量转录、访达快速操作，以及从iPhone操作按钮开始录音。',
          '没有实时转录、说话人标注和应用内编辑；iPhone版在转录期间必须保持打开。',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: '获取Aiko',
        anchor: 'get-it',
      },
      {
        label: 'Aiko概览',
        anchor: 'at-a-glance',
      },
      {
        label: 'Aiko是什么',
        anchor: 'what-is-aiko',
      },
      {
        label: '入门步骤',
        anchor: 'how-to-get-started',
      },
      {
        label: '功能',
        anchor: 'features',
      },
      {
        label: '模型与硬件',
        anchor: 'models-hardware',
      },
      {
        label: '隐私、许可与费用',
        anchor: 'privacy',
      },
      {
        label: '优势与局限',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko与替代方案对比',
        anchor: 'vs-alternatives',
      },
      {
        label: '适合使用Aiko的人',
        anchor: 'who-should-use',
      },
      {
        label: '不适合使用Aiko的人',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aiko是一款仅限Apple设备的付费应用，用OpenAI Whisper在设备上转录录音，其最近一次更新已超过三个月。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个从不联网上传的转录工具：付费一次，导入录音，等Whisper在你自己的Mac或iPhone上处理完，再导出文字。',
          },
        ],
        items: [
          '维护状态：最近一次更新已超过三个月，因此在确认有更新版本之前，适用“项目停更”警告。',
          '许可与开发者：专有软件，未链接源代码仓库；Sindre Sorhus既是网站作者，也是App Store上的销售方。',
          '体积与要求：约1.8 GB，1.11.0的更新说明称应用现在需要iOS 26。',
          '隐私：政策只有两句话，代码无法检查。',
          '成熟度：自2023年3月起销售，App Store上329条评分平均4.7。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自2026年6月27日起没有更新。Aiko可能已无人维护：请确认它能在你的Mac或iPhone上运行，并在付费前先使用免费试用。',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: '获取Aiko',
        content: [
          '**Aiko的安装方式与其他Apple应用相同，无需使用终端。** 一次App Store购买即可覆盖所有平台，免费试用通过TestFlight提供。',
        ],
        columns: [
          '平台',
          '获取方式',
        ],
        rows: [
          {
            '平台': 'iPhone和iPad',
            '获取方式': '[App Store上的Aiko](https://apps.apple.com/app/id1672085276) — 一次性24美元（美国商店）',
          },
          {
            '平台': 'Mac',
            '获取方式': '[App Store上的Aiko](https://apps.apple.com/app/id1672085276) — 同一次购买',
          },
          {
            '平台': '免费试用（14天）',
            '获取方式': '[TestFlight试用](https://testflight.apple.com/join/P1qnhHCC) — 完整应用，不会自动扣费',
          },
          {
            '平台': '旧版免费版本',
            '获取方式': '[免费旧版](https://sindresorhus.com/aiko)：适用于macOS 15、14、13的1.10.1、1.8.2、1.5.3；不再更新',
          },
          {
            '平台': '官网',
            '获取方式': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Aiko隐私政策](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            '平台': '源代码',
            '获取方式': '未链接任何仓库',
          },
        ],
        note: '官网没有说明当前版本所需的最低macOS版本；App Store页面显示最低系统为26.0。官网只列出macOS、iOS和visionOS，没有Windows或Android版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko概览',
        columns: [
          '属性',
          'Aiko',
        ],
        rows: [
          {
            '属性': '平台',
            Aiko: 'Mac、iPhone、iPad、visionOS',
          },
          {
            '属性': '价格',
            Aiko: '一次性24美元，全平台通用',
          },
          {
            '属性': '许可证',
            Aiko: '专有，无源代码仓库',
          },
          {
            '属性': '运行位置',
            Aiko: '在设备上；无上传',
          },
          {
            '属性': '语言',
            Aiko: '约100种',
          },
          {
            '属性': '实时转录',
            Aiko: '不支持；录音时无实时转录',
          },
          {
            '属性': '说话人标注',
            Aiko: '不支持；暂无说话人检测',
          },
          {
            '属性': '仅用CPU可用',
            Aiko: '未说明',
          },
          {
            '属性': '本地API服务器',
            Aiko: '未说明；提供快捷指令操作',
          },
        ],
        note: '各属性依据Local LLM Software Directory中使用的语音转文字对比。官网未提及的项目表示未知，而不是不支持。',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'Aiko是什么',
        content: [
          '**Aiko是原生转录应用，而不是云服务。** 官网称它在本地运行OpenAI的Whisper模型，App Store说明中也致谢了Whisper和whisper.cpp。常见问题称它使用Swift和SwiftUI构建。',
          '它可以转录音频文件、视频文件和录音，把语音翻译成英语，并导出文本、JSON、CSV或SRT字幕。Sindre Sorhus自2023年3月起销售该应用。官网引用了一篇称赞其速度的Lifehacker文章，这段引文由开发者挑选。',
          '本评测依据官网、隐私政策和App Store页面，没有实际上手测试，因此这里不评估准确度、速度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置过程就是安装、检查设置和录音。** 这些步骤依据官网常见问题和App Store页面。',
        ],
        numberedItems: [
          {
            title: '安装Aiko',
            whyItMatters: '在[App Store](https://apps.apple.com/app/id1672085276)购买，或先开始免费的14天[TestFlight试用](https://testflight.apple.com/join/P1qnhHCC)，之后再购买。',
          },
          {
            title: '检查设置',
            whyItMatters: '选择语言，或保持自动检测。如果文字出现重复，常见问题建议开启“Skip silent parts”和“Reduce repetitions”。',
          },
          {
            title: '添加音频',
            whyItMatters: '在应用内录音、导入音频或视频文件，或把文件共享给Aiko。iOS 26上从语音备忘录共享因系统错误而失效，常见问题提供了一个快捷指令作为替代办法。',
          },
          {
            title: '等待后导出',
            whyItMatters: '转录期间保持iPhone版打开，完成后复制文字，或导出为文本、JSON、CSV或字幕。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在对录音进行准确、私密的转录。** 以下内容均来自官网和App Store页面。',
        ],
        items: [
          '**准确度优先。** 页面称Aiko更看重准确度而非速度。',
          '**翻译。** 语音可以翻译成英语，作为与原语言转录分开的另一次运行。',
          '**导出。** 支持文本、JSON、CSV和SRT字幕，另有可自动纠正常见错误的词语替换列表。',
          '**快捷指令。** 通过开发者提供的快捷指令，可批量转录、在Mac访达中使用快速操作，以及从iPhone操作按钮或macOS菜单栏开始录音。',
          '**自动清理。** 可选择自动删除7天前的录音；录音保存在“文件”应用的“Aiko”文件夹中。',
          '**Whisper控制项。** “Skip silent parts”“Reduce repetitions”和“Prompt”设置可应对Whisper常见的重复句子或缺少标点等问题。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**Mac版使用Whisper large v2；iPhone版根据可用内存使用medium或small模型。** 开发者表示Whisper large v3在太多情况下比v2更差，所以改了回去，并称目前没有iPhone性能强到能运行大模型。',
          '官网没有给出内存容量，也没有给出最低macOS版本，只说可用内存会影响速度。App Store页面显示体积为1.83 GB，最低系统为26.0。其常见问题承认，由于应用优先考虑准确度，转录可能较慢；而官网引用的Lifehacker称半小时音频几分钟就能处理完。两者在此均未复现。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策写道：“No data or personal information is collected by this app.”** 官网补充说，音频在设备上转录，绝不会上传。该政策只有两句话，没有日期，也没有提到数据分析、崩溃报告或网络访问。',
          '代码不开源，因此这些说法无法检查，本评测也没有检查网络流量。官网还建议把文字粘贴到ChatGPT中补充分段或标点；那是你自己的选择，不在上述承诺范围内。',
          '这是付费的专有产品：在美国App Store一次性24美元，全平台通用。官网和页面均未描述订阅，14天试用免费。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: [
          '优势',
          '实际使用中的意义',
          '局限 / 注意事项',
        ],
        rows: [
          {
            '优势': '设备端Whisper',
            '实际使用中的意义': '录音无需上传即可转录。',
            '局限 / 注意事项': '闭源，因此该说法无法验证。',
          },
          {
            '优势': '一次性价格',
            '实际使用中的意义': '一次购买即可覆盖Mac、iPhone等。',
            '局限 / 注意事项': '免费试用通过TestFlight，而非App Store。',
          },
          {
            '优势': '约100种语言',
            '实际使用中的意义': '支持多种语言，并可翻译成英语。',
            '局限 / 注意事项': '各语言质量不一，多语言混杂的音频不可靠。',
          },
          {
            '优势': '快捷指令和访达操作',
            '实际使用中的意义': '可以批量处理，并一键开始录音。',
            '局限 / 注意事项': '没有内置批量模式，也没有URL scheme。',
          },
          {
            '优势': '准确度优先',
            '实际使用中的意义': '开发者更重视质量而不是速度。',
            '局限 / 注意事项': '转录可能较慢，iPhone版必须保持打开。',
          },
          {
            '优势': '流程精简',
            '实际使用中的意义': '导入、转录、导出。',
            '局限 / 注意事项': '没有实时转录、说话人标注或应用内编辑。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko与替代方案对比',
        content: [
          '目录中最接近的语音转文字工具包括：一款仅限Mac的竞品、一款带说话人标注的iPhone和Mac应用，以及一款免费的开源桌面应用。',
        ],
        columns: [
          '应用',
          '平台',
          '价格与许可',
          '定位',
          '主要区别',
        ],
        rows: [
          {
            '应用': 'Aiko',
            '平台': 'Mac、iPhone、iPad、visionOS',
            '价格与许可': '一次性24美元，专有',
            '定位': 'Whisper转录应用',
            '主要区别': 'Mac上用Whisper large v2；无说话人标注',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac转录应用',
            '主要区别': 'Pro版增加说话人识别和听写；仅限Mac',
          },
          {
            '应用': '[Whisper Notes](/zh/power-local-llm/whisper-notes-review)',
            '平台': 'iPhone、iPad、Mac',
            '价格与许可': '一次性7.99美元，专有',
            '定位': '离线转录应用',
            '主要区别': '带说话人标注，价格更低',
          },
          {
            '应用': '[Buzz Captions](/zh/power-local-llm/buzz-captions-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可': '免费，MIT',
            '定位': '开源桌面应用',
            '主要区别': '开源；仅限桌面',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Aiko的人',
        items: [
          '**需要转录录音的Apple用户。** 不能上传的访谈、讲座和语音备忘录适合使用设备端应用。',
          '**不喜欢订阅的买家。** 一次性付费取代按月收取的转录费用。',
          '**使用多种语言工作的人。** 约100种语言，并可翻译成英语。',
          '**快捷指令用户。** 批量任务和一键录音可通过所链接的快捷指令完成。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Aiko的人',
        items: [
          '**需要实时字幕的人。** Aiko不会在你录音的同时转录。',
          '**需要说话人姓名的团队。** 应用没有说话人检测。',
          '**Windows和Android用户。** 官网只列出macOS、iOS和visionOS。',
          '**无法运行iOS 26的iPhone。** 当前版本要求iOS 26。',
          '**依赖频繁修复的人。** 最近一次更新已超过三个月。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Aiko可以离线使用吗？',
            a: '官网称转录在设备上运行，音频不会上传，因此应当可以在没有网络的情况下使用。本评测没有在飞行模式下测试。',
          },
          {
            q: '可以在Aiko中编辑转录文字吗？',
            a: '不可以。开发者不打算加入编辑功能；请导出文字，在其他应用中编辑。',
          },
          {
            q: '它能转录Zoom通话或YouTube视频吗？',
            a: '不能直接转录。常见问题建议先录下通话再导入文件，视频则先用单独的工具下载音频。',
          },
          {
            q: '有免费版本吗？',
            a: 'App Store上没有，但完整应用提供免费的14天TestFlight试用。适用于macOS 13至15的旧版本免费，但已不再更新，无法在更新的macOS上运行。',
          },
          {
            q: '谁开发了Aiko？',
            a: 'Sindre Sorhus，他是App Store上的销售方，并在自己的网站上发布该应用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想在Apple设备上，用一次付费准确、私密地转录录音，Aiko是个合适的选择：它像普通应用一样安装，在设备上运行Whisper，并提供免费的14天试用。',
          '需要注意的是维护状态和功能范围：已超过三个月未更新、闭源且隐私政策只有两句话，没有实时转录、说话人标注和编辑。购买前请先用试用版，并确认它能在你的系统上运行。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Aiko官网](https://sindresorhus.com/aiko) — 功能、试用、常见问题、旧版本和支持的语言。',
          '[Aiko隐私政策](https://sindresorhus.com/aiko/privacy-policy) — 数据处理声明。',
          '[App Store上的Aiko](https://apps.apple.com/us/app/id1672085276) — 价格、版本、发布日期、体积和说明。',
          '[Lifehacker关于Aiko的报道](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — 官网上展示的媒体引文。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[MacWhisper评测](/zh/power-local-llm/macwhisper-review) — 最接近的仅限Mac的转录应用。',
          '[Whisper Notes评测](/zh/power-local-llm/whisper-notes-review) — 带说话人标注的iPhone和Mac替代方案。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-es.webp',
    title: 'Reseña de Aiko: transcripción Whisper en el dispositivo para Mac y iPhone',
    seoTitle: 'Reseña de Aiko: transcripción en el dispositivo para Mac',
    intro: 'Aiko es una app de transcripción de pago y de código cerrado de Sindre Sorhus que convierte grabaciones en texto en tu Mac, iPhone, iPad o Vision Pro con el modelo Whisper de OpenAI, por un precio único en lugar de una suscripción. Esta reseña resume lo que documentan su web y su ficha de App Store, lo que omiten y cómo se compara con otras herramientas de voz a texto del directorio.',
    metaDescription: 'Reseña de Aiko: transcripción Whisper en el dispositivo para Mac, iPhone y Vision Pro, 29 € de pago único. Sin actualizar en más de tres meses; no probada.',
    twitterDescription: 'Reseña de Aiko: una app de pago único que transcribe grabaciones con Whisper en tu Mac o iPhone. Precio, privacidad, límites, mantenimiento y alternativas.',
    audience: 'Usuarios de Apple que quieren transcribir con precisión y en privado grabaciones, reuniones y clases sin suscripción — cubre precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'reseña aiko',
      'aiko app de transcripción',
      'sindre sorhus aiko',
      'whisper en el dispositivo mac',
      'transcripción sin conexión iphone',
      'app de transcripción pago único',
      'app transcripción whisper mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**Aviso: Aiko no ha recibido ninguna actualización desde el 27 de junio de 2026 (versión 1.11.0), así que puede estar sin mantenimiento — comprueba que sigue funcionando en tu equipo antes de depender de ella.** **Aiko es una app de transcripción de código cerrado para Mac, iPhone, iPad y visionOS que ejecuta el modelo Whisper de OpenAI en el dispositivo, de modo que el audio nunca se sube, y cuesta 29 € de pago único en la App Store de España.** Su política de privacidad dice que no se recopilan datos. Esta reseña se basa en la versión 1.11.0 y en la web pública, la política de privacidad y la ficha de App Store, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena comprar Aiko para transcribir en privado en un Mac o iPhone?',
        answer: 'Probablemente, si tienes un dispositivo Apple reciente y quieres transcripciones precisas de grabaciones sin suscripción ni subida de archivos. Comprueba antes cuatro cosas: lleva más de tres meses sin actualizarse, la app de iPhone necesita iOS 26, no transcribe en directo y no identifica a los hablantes.',
        bullets: [
          'Una compra de 29 € en la App Store de España cubre Mac, iPhone, iPad y visionOS; la prueba de 14 días de la app completa en TestFlight es gratuita.',
          'Whisper large v2 funciona en el Mac, y el modelo medium o small en el iPhone, según la memoria.',
          'Unos 100 idiomas, traducción al inglés y exportación como texto, JSON, CSV o subtítulos SRT.',
          'Atajos para transcripción por lotes, una acción rápida en el Finder y grabación desde el botón de acción del iPhone.',
          'Sin transcripción en directo, sin etiquetas de hablante y sin edición en la app; la app de iPhone debe seguir abierta mientras trabaja.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Conseguir Aiko',
        anchor: 'get-it',
      },
      {
        label: 'Aiko de un vistazo',
        anchor: 'at-a-glance',
      },
      {
        label: 'Qué es Aiko',
        anchor: 'what-is-aiko',
      },
      {
        label: 'Primeros pasos',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Funciones',
        anchor: 'features',
      },
      {
        label: 'Modelos y hardware',
        anchor: 'models-hardware',
      },
      {
        label: 'Privacidad, licencia y coste',
        anchor: 'privacy',
      },
      {
        label: 'Equilibrio: ventajas y limitaciones',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko frente a alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Quién debería usar Aiko',
        anchor: 'who-should-use',
      },
      {
        label: 'Quién no debería usar Aiko',
        anchor: 'who-should-not-use',
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
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aiko es una app de pago solo para Apple que transcribe grabaciones en el dispositivo con OpenAI Whisper, y su última actualización tiene más de tres meses.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como un transcriptor que nunca llama a casa: pagas una vez, sueltas una grabación, esperas mientras Whisper trabaja en tu propio Mac o iPhone y exportas el texto.',
          },
        ],
        items: [
          'Mantenimiento: la última actualización tiene más de tres meses, así que se aplica el aviso de proyecto inactivo hasta que se verifique una versión más reciente.',
          'Licencia y autor: propietaria, sin repositorio de código enlazado; Sindre Sorhus es a la vez autor de la web y vendedor en la App Store.',
          'Tamaño y requisitos: unos 1,8 GB, y las notas de la versión 1.11.0 dicen que la app ahora requiere iOS 26.',
          'Privacidad: la política solo tiene dos frases, y el código no se puede inspeccionar.',
          'Madurez: a la venta desde marzo de 2023, con una valoración de 4,7 sobre 329 valoraciones en la App Store.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sin actualizaciones desde el 27 de junio de 2026. Puede que Aiko no tenga mantenimiento: comprueba que funciona en tu Mac o iPhone y usa la prueba gratuita antes de pagar.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Conseguir Aiko',
        content: [
          '**Aiko se instala como cualquier app de Apple, no hace falta terminal.** Una sola compra en la App Store cubre todas las plataformas, y hay una prueba gratuita a través de TestFlight.',
        ],
        columns: [
          'Plataforma',
          'Dónde conseguirla',
        ],
        rows: [
          {
            Plataforma: 'iPhone y iPad',
            'Dónde conseguirla': '[Aiko en la App Store](https://apps.apple.com/app/id1672085276) — 29 € de pago único (App Store de España)',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Aiko en la App Store](https://apps.apple.com/app/id1672085276) — la misma compra',
          },
          {
            Plataforma: 'Prueba gratuita (14 días)',
            'Dónde conseguirla': '[Prueba en TestFlight](https://testflight.apple.com/join/P1qnhHCC) — la app completa, sin cargo automático',
          },
          {
            Plataforma: 'Versiones antiguas gratuitas',
            'Dónde conseguirla': '[Versiones gratuitas](https://sindresorhus.com/aiko) 1.10.1, 1.8.2, 1.5.3 para macOS 15, 14, 13; sin actualizaciones',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Aiko](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'Sin repositorio enlazado',
          },
        ],
        note: 'La web no indica una versión mínima de macOS para la versión actual; la ficha de App Store muestra 26.0 como sistema mínimo. La web solo cita macOS, iOS y visionOS, sin versión para Windows ni Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko de un vistazo',
        columns: [
          'Atributo',
          'Aiko',
        ],
        rows: [
          {
            Atributo: 'Plataforma',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            Atributo: 'Precio',
            Aiko: '29 € de pago único (App Store de España), todas las plataformas',
          },
          {
            Atributo: 'Licencia',
            Aiko: 'Propietaria, sin repositorio de código',
          },
          {
            Atributo: 'Ejecución',
            Aiko: 'En el dispositivo; sin subida',
          },
          {
            Atributo: 'Idiomas',
            Aiko: 'Unos 100',
          },
          {
            Atributo: 'Transcripción en tiempo real',
            Aiko: 'No; sin transcripción en directo mientras se graba',
          },
          {
            Atributo: 'Etiquetas de hablante',
            Aiko: 'No; aún sin detección de hablantes',
          },
          {
            Atributo: 'Usable solo con CPU',
            Aiko: 'No indicado',
          },
          {
            Atributo: 'Servidor de API local',
            Aiko: 'No indicado; acciones de Atajos en su lugar',
          },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'Qué es Aiko',
        content: [
          '**Aiko es una app de transcripción nativa, no un servicio en la nube.** Según la web, ejecuta el modelo Whisper de OpenAI en local, y la descripción de la App Store menciona a Whisper y whisper.cpp como base de la app. Las preguntas frecuentes dicen que está hecha con Swift y SwiftUI.',
          'Transcribe archivos de audio y vídeo y grabaciones, traduce el habla al inglés y exporta texto, JSON, CSV o subtítulos SRT. Sindre Sorhus la vende desde marzo de 2023. La web cita un artículo de Lifehacker que elogia su velocidad, una cita elegida por el desarrollador.',
          'Esta reseña se basa en la web, la política de privacidad y la ficha de App Store. No hubo prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, un repaso de ajustes y una grabación.** Los pasos siguen las preguntas frecuentes de la web y la ficha de App Store.',
        ],
        numberedItems: [
          {
            title: 'Instala Aiko',
            whyItMatters: 'Cómprala en la [App Store](https://apps.apple.com/app/id1672085276) o empieza la [prueba gratuita de 14 días en TestFlight](https://testflight.apple.com/join/P1qnhHCC) y compra después.',
          },
          {
            title: 'Revisa los ajustes',
            whyItMatters: 'Elige el idioma o deja la detección activada. Si el texto se repite, las preguntas frecuentes sugieren «Skip silent parts» y «Reduce repetitions».',
          },
          {
            title: 'Añade audio',
            whyItMatters: 'Graba en la app, importa archivos de audio o vídeo o comparte un archivo con Aiko. Compartir desde Notas de voz en iOS 26 falla por un error del sistema, y las preguntas frecuentes enlazan un atajo como solución provisional.',
          },
          {
            title: 'Espera y exporta',
            whyItMatters: 'Mantén abierta la app de iPhone mientras transcribe y luego copia el texto o expórtalo como texto, JSON, CSV o subtítulos.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en la transcripción precisa y privada de grabaciones.** Todo lo siguiente procede de la web y de la ficha de App Store.',
        ],
        items: [
          '**Precisión primero.** Según la ficha, Aiko prioriza la precisión sobre la velocidad.',
          '**Traducción.** El habla se puede traducir al inglés, en una pasada aparte de la transcripción en el idioma original.',
          '**Exportación.** Texto, JSON, CSV y subtítulos SRT, además de una lista de sustitución de palabras que corrige errores comunes automáticamente.',
          '**Atajos.** Transcripción por lotes, una acción rápida en el Finder del Mac y grabación desde el botón de acción del iPhone o la barra de menús de macOS, con atajos que enlaza el desarrollador.',
          '**Limpieza.** Borrado automático opcional de grabaciones de más de 7 días; las grabaciones se guardan en una carpeta «Aiko» de la app Archivos.',
          '**Controles de Whisper.** «Skip silent parts», «Reduce repetitions» y un ajuste «Prompt» ayudan con las manías de Whisper, como frases repetidas o falta de puntuación.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**La app de Mac usa Whisper large v2; la de iPhone usa el modelo medium o small, según la memoria disponible.** El desarrollador dice que Whisper large v3 era peor que v2 en demasiados casos, por lo que lo retiró, y que ningún iPhone es lo bastante potente para el modelo grande.',
          'La web no da una cifra de RAM ni una versión mínima de macOS, y dice que la memoria disponible afecta a la velocidad. La ficha de App Store muestra 1,83 GB y 26.0 como sistema mínimo. Sus preguntas frecuentes admiten que la transcripción puede ser lenta porque la app prioriza la precisión, mientras que la cita de Lifehacker en la web habla de media hora de audio en pocos minutos. Ninguna de las dos cosas se reprodujo aquí.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice: «No data or personal information is collected by this app».** La web añade que el audio se transcribe en el dispositivo y nunca se sube. La política tiene dos frases, no lleva fecha y no dice nada sobre analíticas, informes de fallos ni acceso a la red.',
          'El código no es abierto, así que estas afirmaciones no se pueden inspeccionar, y esta reseña no examinó el tráfico de red. La web también sugiere pegar texto en ChatGPT para añadir párrafos o puntuación; eso es decisión tuya y queda fuera de la promesa.',
          'Es un producto de pago y propietario: 29 € de pago único en la App Store de España para todas las plataformas. La web y la ficha no describen ninguna suscripción, y la prueba de 14 días es gratuita.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: [
          'Ventaja',
          'Qué significa en el uso real',
          'Limitación / advertencia',
        ],
        rows: [
          {
            Ventaja: 'Whisper en el dispositivo',
            'Qué significa en el uso real': 'Las grabaciones se transcriben sin subirlas.',
            'Limitación / advertencia': 'Código cerrado, así que la afirmación no se puede comprobar.',
          },
          {
            Ventaja: 'Precio único',
            'Qué significa en el uso real': 'Una sola compra cubre Mac, iPhone y más.',
            'Limitación / advertencia': 'La prueba gratuita va por TestFlight, no por la App Store.',
          },
          {
            Ventaja: 'Unos 100 idiomas',
            'Qué significa en el uso real': 'Muchos idiomas, además de traducción al inglés.',
            'Limitación / advertencia': 'La calidad varía según el idioma y el audio con varios idiomas es poco fiable.',
          },
          {
            Ventaja: 'Atajos y acciones del Finder',
            'Qué significa en el uso real': 'Son posibles trabajos por lotes y grabación con un toque.',
            'Limitación / advertencia': 'No hay modo por lotes integrado ni esquema de URL.',
          },
          {
            Ventaja: 'Precisión primero',
            'Qué significa en el uso real': 'El desarrollador prefiere calidad a rapidez.',
            'Limitación / advertencia': 'La transcripción puede ser lenta y la app de iPhone debe seguir abierta.',
          },
          {
            Ventaja: 'Flujo sencillo',
            'Qué significa en el uso real': 'Importar, transcribir, exportar.',
            'Limitación / advertencia': 'Sin transcripción en directo, etiquetas de hablante ni edición en la app.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko frente a alternativas',
        content: [
          'Estas son las herramientas de voz a texto más cercanas del directorio: una rival solo para Mac, una app para iPhone y Mac con etiquetas de hablante y una app de escritorio gratuita de código abierto.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Precio y licencia',
          'Papel',
          'Diferencia clave',
        ],
        rows: [
          {
            App: 'Aiko',
            Plataformas: 'Mac, iPhone, iPad, visionOS',
            'Precio y licencia': '29 € de pago único, propietaria',
            Papel: 'App de transcripción Whisper',
            'Diferencia clave': 'Whisper large v2 en el Mac; sin etiquetas de hablante',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'App de transcripción para Mac',
            'Diferencia clave': 'Añade reconocimiento de hablantes y dictado en Pro; solo Mac',
          },
          {
            App: '[Whisper Notes](/es/power-local-llm/whisper-notes-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Precio y licencia': '8,99 € de pago único, propietaria',
            Papel: 'App de transcripción sin conexión',
            'Diferencia clave': 'Añade etiquetas de hablante y cuesta menos',
          },
          {
            App: '[Buzz Captions](/es/power-local-llm/buzz-captions-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'App de escritorio de código abierto',
            'Diferencia clave': 'Código abierto; solo escritorio',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Aiko',
        items: [
          '**Usuarios de Apple que transcriben grabaciones.** Entrevistas, clases y notas de voz que no deben subirse encajan con una app en el dispositivo.',
          '**Compradores a los que no les gustan las suscripciones.** Una única compra sustituye cuotas mensuales de transcripción.',
          '**Personas que trabajan en muchos idiomas.** Unos 100 idiomas y traducción al inglés.',
          '**Usuarios de Atajos.** Los trabajos por lotes y la grabación con un toque funcionan con los atajos enlazados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Aiko',
        items: [
          '**Quien necesite subtítulos en directo.** Aiko no transcribe mientras grabas.',
          '**Equipos que necesiten nombres de hablante.** La app no tiene detección de hablantes.',
          '**Usuarios de Windows y Android.** La web solo cita macOS, iOS y visionOS.',
          '**iPhone que no pueden ejecutar iOS 26.** La versión actual lo exige.',
          '**Quien dependa de correcciones frecuentes.** La última actualización tiene más de tres meses.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Aiko sin conexión?',
            a: 'Según la web, la transcripción se ejecuta en el dispositivo y el audio nunca se sube, así que debería funcionar sin conexión. Esta reseña no la probó en modo avión.',
          },
          {
            q: '¿Puedo editar la transcripción en Aiko?',
            a: 'No. El desarrollador no planea añadir edición; exporta el texto y edítalo en otra app.',
          },
          {
            q: '¿Puede transcribir una llamada de Zoom o un vídeo de YouTube?',
            a: 'No directamente. Las preguntas frecuentes indican grabar la llamada e importar el archivo, y descargar antes el audio de un vídeo con otra herramienta.',
          },
          {
            q: '¿Hay una versión gratuita?',
            a: 'No en la App Store, pero la app completa tiene una prueba gratuita de 14 días en TestFlight. Las versiones antiguas para macOS 13 a 15 son gratuitas, pero ya no se actualizan y no funcionan en versiones más nuevas de macOS.',
          },
          {
            q: '¿Quién hace Aiko?',
            a: 'Sindre Sorhus, que figura como vendedor en la App Store y publica la app en su propia web.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Aiko encaja si quieres transcribir grabaciones con precisión y en privado en un dispositivo Apple por un único pago: se instala como cualquier app, ejecuta Whisper en el dispositivo y ofrece una prueba gratuita de 14 días.',
          'Las advertencias son el mantenimiento y el alcance: más de tres meses sin actualizaciones, código cerrado con una política de privacidad de dos frases, sin transcripción en directo, sin etiquetas de hablante y sin edición. Usa la prueba antes de comprar y comprueba que funciona en tu sistema.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Aiko](https://sindresorhus.com/aiko) — funciones, prueba, preguntas frecuentes, versiones antiguas e idiomas compatibles.',
          '[Política de privacidad de Aiko](https://sindresorhus.com/aiko/privacy-policy) — declaración sobre el tratamiento de datos.',
          '[Aiko en la App Store](https://apps.apple.com/us/app/id1672085276) — precio, versión, fecha de lanzamiento, tamaño y descripción.',
          '[Lifehacker sobre Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — la cita de prensa que muestra la web.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — la app de transcripción solo para Mac más cercana.',
          '[Reseña de Whisper Notes](/es/power-local-llm/whisper-notes-review) — una alternativa para iPhone y Mac con etiquetas de hablante.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps locales de Whisper.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-pt.webp',
    title: 'Análise do Aiko: transcrição Whisper no aparelho para Mac e iPhone',
    seoTitle: 'Análise do Aiko: transcrição no aparelho para Mac e iPhone',
    intro: 'O Aiko é um app de transcrição pago e de código fechado, de Sindre Sorhus, que converte gravações em texto no seu Mac, iPhone, iPad ou Vision Pro com o modelo Whisper da OpenAI, por um preço único em vez de uma assinatura. Esta análise resume o que o site e a página da App Store documentam, o que deixam de fora e como o app se compara a outras ferramentas de voz para texto do diretório.',
    metaDescription: 'Análise do Aiko: transcrição Whisper no aparelho para Mac e iPhone, R$ 149,90 em compra única. Sem atualização há mais de três meses; não testado.',
    twitterDescription: 'Análise do Aiko: um app de compra única que transcreve gravações com Whisper no Mac ou iPhone. Preço, privacidade, limites, manutenção e alternativas.',
    audience: 'Usuários da Apple que querem transcrever com precisão e em privado gravações, reuniões e aulas sem assinatura — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'análise aiko',
      'aiko app de transcrição',
      'sindre sorhus aiko',
      'whisper no aparelho mac',
      'transcrição offline iphone',
      'app de transcrição compra única',
      'app transcrição whisper mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**Aviso: o Aiko não recebe nenhuma atualização desde 27 de junho de 2026 (versão 1.11.0) e pode estar sem manutenção — confirme se ele ainda funciona para você antes de depender dele.** **O Aiko é um app de transcrição de código fechado para Mac, iPhone, iPad e visionOS que executa o modelo Whisper da OpenAI no aparelho, de modo que o áudio nunca é enviado, e custa R$ 149,90 em compra única na App Store do Brasil.** A política de privacidade diz que nenhum dado é coletado. Esta análise cobre a versão 1.11.0 e se baseia no site público, na política de privacidade e na página da App Store, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena comprar o Aiko para transcrição privada no Mac ou iPhone?',
        answer: 'Provavelmente, se você tem um aparelho Apple recente e quer transcrições precisas de gravações sem assinatura nem envio de arquivos. Verifique antes quatro pontos: ele está há mais de três meses sem atualização, o app de iPhone exige iOS 26, não transcreve ao vivo e não identifica os falantes.',
        bullets: [
          'Uma compra de R$ 149,90 (App Store do Brasil) cobre Mac, iPhone, iPad e visionOS; o teste de 14 dias do app completo pelo TestFlight é grátis.',
          'O Whisper large v2 roda no Mac, e o modelo medium ou small no iPhone, conforme a memória.',
          'Cerca de 100 idiomas, tradução para o inglês e exportação como texto, JSON, CSV ou legendas SRT.',
          'Atalhos cobrem transcrição em lote, uma ação rápida no Finder e gravação pelo botão de ação do iPhone.',
          'Sem transcrição ao vivo, sem identificação de falantes e sem edição no app; o app de iPhone precisa ficar aberto enquanto trabalha.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Obter o Aiko',
        anchor: 'get-it',
      },
      {
        label: 'Aiko em resumo',
        anchor: 'at-a-glance',
      },
      {
        label: 'O que é o Aiko',
        anchor: 'what-is-aiko',
      },
      {
        label: 'Primeiros passos',
        anchor: 'how-to-get-started',
      },
      {
        label: 'Recursos',
        anchor: 'features',
      },
      {
        label: 'Modelos e hardware',
        anchor: 'models-hardware',
      },
      {
        label: 'Privacidade, licença e custo',
        anchor: 'privacy',
      },
      {
        label: 'Prós e contras',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko e as alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Para quem o Aiko serve',
        anchor: 'who-should-use',
      },
      {
        label: 'Para quem o Aiko não serve',
        anchor: 'who-should-not-use',
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
        label: 'Leitura relacionada',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Aiko é um app pago só para Apple que transcreve gravações no aparelho com o OpenAI Whisper, e a atualização mais recente tem mais de três meses.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um transcritor que nunca liga para casa: você paga uma vez, joga uma gravação nele, espera o Whisper trabalhar no seu próprio Mac ou iPhone e exporta o texto.',
          },
        ],
        items: [
          'Manutenção: a atualização mais recente tem mais de três meses, então vale o aviso de projeto parado até que uma versão mais nova seja confirmada.',
          'Licença e autor: proprietário, sem repositório de código vinculado; Sindre Sorhus é ao mesmo tempo o autor do site e o vendedor na App Store.',
          'Tamanho e requisitos: cerca de 1,8 GB, e as notas da versão 1.11.0 dizem que o app agora exige iOS 26.',
          'Privacidade: a política tem apenas duas frases, e o código não pode ser inspecionado.',
          'Maturidade: à venda desde março de 2023, com nota 4,7 em 329 avaliações na App Store.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sem atualização desde 27 de junho de 2026. O Aiko pode estar sem manutenção: confirme se ele roda no seu Mac ou iPhone e use o teste grátis antes de pagar.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Obter o Aiko',
        content: [
          '**O Aiko é instalado como qualquer app da Apple, sem precisar de terminal.** Uma única compra na App Store cobre todas as plataformas, e há um teste grátis pelo TestFlight.',
        ],
        columns: [
          'Plataforma',
          'Onde obter',
        ],
        rows: [
          {
            Plataforma: 'iPhone e iPad',
            'Onde obter': '[Aiko na App Store](https://apps.apple.com/app/id1672085276) — R$ 149,90 em compra única (App Store do Brasil)',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': '[Aiko na App Store](https://apps.apple.com/app/id1672085276) — a mesma compra',
          },
          {
            Plataforma: 'Teste grátis (14 dias)',
            'Onde obter': '[Teste no TestFlight](https://testflight.apple.com/join/P1qnhHCC) — o app completo, sem cobrança automática',
          },
          {
            Plataforma: 'Versões antigas grátis',
            'Onde obter': '[Versões grátis](https://sindresorhus.com/aiko) 1.10.1, 1.8.2, 1.5.3 para macOS 15, 14, 13; sem atualizações',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Aiko](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Nenhum repositório vinculado',
          },
        ],
        note: 'O site não informa uma versão mínima do macOS para a versão atual; a página da App Store mostra 26.0 como sistema mínimo. O site cita apenas macOS, iOS e visionOS, sem versão para Windows ou Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko em resumo',
        columns: [
          'Atributo',
          'Aiko',
        ],
        rows: [
          {
            Atributo: 'Plataforma',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            Atributo: 'Preço',
            Aiko: 'R$ 149,90 em compra única (App Store do Brasil), todas as plataformas',
          },
          {
            Atributo: 'Licença',
            Aiko: 'Proprietária, sem repositório de código',
          },
          {
            Atributo: 'Execução',
            Aiko: 'No aparelho; sem envio',
          },
          {
            Atributo: 'Idiomas',
            Aiko: 'Cerca de 100',
          },
          {
            Atributo: 'Transcrição em tempo real',
            Aiko: 'Não; sem transcrição ao vivo durante a gravação',
          },
          {
            Atributo: 'Identificação de falantes',
            Aiko: 'Não; ainda sem detecção de falantes',
          },
          {
            Atributo: 'Usável só com CPU',
            Aiko: 'Não informado',
          },
          {
            Atributo: 'Servidor de API local',
            Aiko: 'Não informado; ações de Atalhos no lugar',
          },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no Local LLM Software Directory. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'O que é o Aiko',
        content: [
          '**O Aiko é um app de transcrição nativo, não um serviço em nuvem.** Segundo o site, ele executa o modelo Whisper da OpenAI localmente, e a descrição na App Store cita Whisper e whisper.cpp como base do app. As perguntas frequentes dizem que ele é feito com Swift e SwiftUI.',
          'Ele transcreve arquivos de áudio e vídeo e gravações, traduz a fala para o inglês e exporta texto, JSON, CSV ou legendas SRT. Sindre Sorhus o vende desde março de 2023. O site cita um artigo do Lifehacker que elogia sua velocidade, uma citação escolhida pelo desenvolvedor.',
          'Esta análise se baseia no site, na política de privacidade e na página da App Store. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, uma olhada nos ajustes e uma gravação.** Os passos seguem as perguntas frequentes do site e a página da App Store.',
        ],
        numberedItems: [
          {
            title: 'Instale o Aiko',
            whyItMatters: 'Compre-o na [App Store](https://apps.apple.com/app/id1672085276) ou comece o [teste grátis de 14 dias no TestFlight](https://testflight.apple.com/join/P1qnhHCC) e compre depois.',
          },
          {
            title: 'Confira os ajustes',
            whyItMatters: 'Defina o idioma ou deixe a detecção ligada. Se o texto se repetir, as perguntas frequentes sugerem "Skip silent parts" e "Reduce repetitions".',
          },
          {
            title: 'Adicione áudio',
            whyItMatters: 'Grave no app, importe arquivos de áudio ou vídeo ou compartilhe um arquivo com o Aiko. Compartilhar a partir do Gravador de Voz no iOS 26 falha por um bug do sistema, e as perguntas frequentes indicam um atalho como solução provisória.',
          },
          {
            title: 'Aguarde e exporte',
            whyItMatters: 'Mantenha o app de iPhone aberto durante a transcrição e depois copie o texto ou exporte-o como texto, JSON, CSV ou legendas.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno da transcrição precisa e privada de gravações.** Tudo abaixo vem do site e da página da App Store.',
        ],
        items: [
          '**Precisão em primeiro lugar.** Segundo a página, o Aiko prioriza a precisão em vez da velocidade.',
          '**Tradução.** A fala pode ser traduzida para o inglês, em uma execução separada da transcrição no idioma original.',
          '**Exportação.** Texto, JSON, CSV e legendas SRT, além de uma lista de substituição de palavras que corrige erros comuns automaticamente.',
          '**Atalhos.** Transcrição em lote, uma ação rápida no Finder do Mac e gravação pelo botão de ação do iPhone ou pela barra de menus do macOS, com atalhos que o desenvolvedor disponibiliza.',
          '**Organização.** Exclusão automática opcional de gravações com mais de 7 dias; as gravações ficam em uma pasta "Aiko" no app Arquivos.',
          '**Controles do Whisper.** "Skip silent parts", "Reduce repetitions" e um ajuste "Prompt" ajudam com manias do Whisper, como frases repetidas ou pontuação ausente.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O app de Mac usa o Whisper large v2; o de iPhone usa o modelo medium ou small, conforme a memória disponível.** O desenvolvedor diz que o Whisper large v3 era pior que o v2 em casos demais, por isso o retirou, e que nenhum iPhone é potente o bastante para o modelo grande.',
          'O site não informa quantidade de RAM nem versão mínima do macOS, e diz que a memória disponível afeta a velocidade. A página da App Store mostra 1,83 GB e 26.0 como sistema mínimo. As perguntas frequentes admitem que a transcrição pode ser lenta porque o app prioriza a precisão, enquanto a citação do Lifehacker no site fala em meia hora de áudio em poucos minutos. Nenhuma das duas foi reproduzida aqui.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz: "No data or personal information is collected by this app."** O site acrescenta que o áudio é transcrito no aparelho e nunca é enviado. A política tem duas frases, não traz data e não diz nada sobre análises, relatórios de falhas ou acesso à rede.',
          'O código não é aberto, então essas afirmações não podem ser inspecionadas, e esta análise não examinou o tráfego de rede. O site também sugere colar texto no ChatGPT para adicionar parágrafos ou pontuação; isso é decisão sua e fica fora da promessa.',
          'É um produto pago e proprietário: R$ 149,90 em compra única na App Store do Brasil, para todas as plataformas. O site e a página não descrevem assinatura, e o teste de 14 dias é grátis.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: [
          'Vantagem',
          'O que significa no uso real',
          'Limitação / ressalva',
        ],
        rows: [
          {
            Vantagem: 'Whisper no aparelho',
            'O que significa no uso real': 'As gravações são transcritas sem envio.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada.',
          },
          {
            Vantagem: 'Preço único',
            'O que significa no uso real': 'Uma única compra cobre Mac, iPhone e mais.',
            'Limitação / ressalva': 'O teste grátis é pelo TestFlight, não pela App Store.',
          },
          {
            Vantagem: 'Cerca de 100 idiomas',
            'O que significa no uso real': 'Muitos idiomas, mais tradução para o inglês.',
            'Limitação / ressalva': 'A qualidade varia por idioma, e áudio com vários idiomas não é confiável.',
          },
          {
            Vantagem: 'Atalhos e ações do Finder',
            'O que significa no uso real': 'Tarefas em lote e gravação com um toque são possíveis.',
            'Limitação / ressalva': 'Não há modo em lote integrado nem esquema de URL.',
          },
          {
            Vantagem: 'Precisão em primeiro lugar',
            'O que significa no uso real': 'O desenvolvedor prefere qualidade a rapidez.',
            'Limitação / ressalva': 'A transcrição pode ser lenta, e o app de iPhone precisa ficar aberto.',
          },
          {
            Vantagem: 'Fluxo enxuto',
            'O que significa no uso real': 'Importar, transcrever, exportar.',
            'Limitação / ressalva': 'Sem transcrição ao vivo, identificação de falantes ou edição no app.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko e as alternativas',
        content: [
          'Estas são as ferramentas de voz para texto mais próximas do diretório: uma concorrente só para Mac, um app para iPhone e Mac com identificação de falantes e um app de desktop gratuito e de código aberto.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Preço e licença',
          'Papel',
          'Principal diferença',
        ],
        rows: [
          {
            App: 'Aiko',
            Plataformas: 'Mac, iPhone, iPad, visionOS',
            'Preço e licença': 'R$ 149,90 uma vez, proprietário',
            Papel: 'App de transcrição Whisper',
            'Principal diferença': 'Whisper large v2 no Mac; sem identificação de falantes',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço e licença': 'Freemium, proprietário',
            Papel: 'App de transcrição para Mac',
            'Principal diferença': 'Acrescenta reconhecimento de falantes e ditado no Pro; só Mac',
          },
          {
            App: '[Whisper Notes](/pt/power-local-llm/whisper-notes-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Preço e licença': 'R$ 19,90 uma vez, proprietário',
            Papel: 'App de transcrição offline',
            'Principal diferença': 'Acrescenta identificação de falantes e custa menos',
          },
          {
            App: '[Buzz Captions](/pt/power-local-llm/buzz-captions-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            Papel: 'App de desktop de código aberto',
            'Principal diferença': 'Código aberto; só desktop',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confirme os detalhes atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Aiko serve',
        items: [
          '**Usuários da Apple que transcrevem gravações.** Entrevistas, aulas e memorandos de voz que não podem ser enviados combinam com um app no aparelho.',
          '**Compradores avessos a assinaturas.** Uma única compra substitui mensalidades de transcrição.',
          '**Quem trabalha em vários idiomas.** Cerca de 100 idiomas e tradução para o inglês.',
          '**Usuários de Atalhos.** Tarefas em lote e gravação com um toque funcionam pelos atalhos vinculados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Aiko não serve',
        items: [
          '**Quem precisa de legendas ao vivo.** O Aiko não transcreve enquanto você grava.',
          '**Equipes que precisam de nomes de falantes.** O app não tem detecção de falantes.',
          '**Usuários de Windows e Android.** O site cita apenas macOS, iOS e visionOS.',
          '**iPhones que não rodam o iOS 26.** A versão atual o exige.',
          '**Quem depende de correções frequentes.** A atualização mais recente tem mais de três meses.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Aiko funciona offline?',
            a: 'Segundo o site, a transcrição roda no aparelho e o áudio nunca é enviado, então ele deve funcionar sem conexão. Esta análise não o testou no modo avião.',
          },
          {
            q: 'Posso editar a transcrição no Aiko?',
            a: 'Não. O desenvolvedor não pretende adicionar edição; exporte o texto e edite-o em outro app.',
          },
          {
            q: 'Ele transcreve uma chamada do Zoom ou um vídeo do YouTube?',
            a: 'Não diretamente. As perguntas frequentes orientam gravar a chamada e importar o arquivo, e baixar antes o áudio de um vídeo com outra ferramenta.',
          },
          {
            q: 'Existe uma versão gratuita?',
            a: 'Não na App Store, mas o app completo tem um teste grátis de 14 dias no TestFlight. As versões antigas para macOS 13 a 15 são grátis, mas não são mais atualizadas e não rodam em versões mais novas do macOS.',
          },
          {
            q: 'Quem faz o Aiko?',
            a: 'Sindre Sorhus, que consta como vendedor na App Store e publica o app em seu próprio site.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Aiko serve se você quer transcrever gravações com precisão e em privado em um aparelho Apple por um único pagamento: ele é instalado como qualquer app, executa o Whisper no aparelho e oferece um teste grátis de 14 dias.',
          'As ressalvas são manutenção e escopo: mais de três meses sem atualização, código fechado com uma política de privacidade de duas frases, sem transcrição ao vivo, sem identificação de falantes e sem edição. Use o teste antes de comprar e confirme se ele roda no seu sistema.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Aiko](https://sindresorhus.com/aiko) — recursos, teste, perguntas frequentes, versões antigas e idiomas compatíveis.',
          '[Política de privacidade do Aiko](https://sindresorhus.com/aiko/privacy-policy) — declaração sobre o tratamento de dados.',
          '[Aiko na App Store](https://apps.apple.com/us/app/id1672085276) — preço, versão, data de lançamento, tamanho e descrição.',
          '[Lifehacker sobre o Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — a citação de imprensa exibida no site.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — o app de transcrição só para Mac mais próximo.',
          '[Análise do Whisper Notes](/pt/power-local-llm/whisper-notes-review) — uma alternativa para iPhone e Mac com identificação de falantes.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o mecanismo aberto por trás de muitos apps Whisper locais.',
          '[O Local LLM Software Directory completo](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-ar.webp',
    title: 'مراجعة Aiko: تحويل الكلام إلى نص بنموذج Whisper على جهاز Mac وiPhone',
    seoTitle: 'مراجعة Aiko: تحويل الكلام إلى نص على الجهاز لأجهزة Mac',
    intro: 'Aiko تطبيق مدفوع ومغلق المصدر لتحويل التسجيلات إلى نص، من تطوير Sindre Sorhus، ويعمل على جهاز Mac أو iPhone أو iPad أو Vision Pro باستخدام نموذج Whisper من OpenAI، بسعر لمرة واحدة بدلًا من الاشتراك. تلخّص هذه المراجعة ما يوثّقه موقعه وصفحته في App Store وما يغفلانه، وكيف يقارن بأدوات تحويل الكلام إلى نص الأخرى في الدليل.',
    metaDescription: 'مراجعة Aiko: تطبيق Whisper لتحويل الكلام إلى نص على الجهاز لأجهزة Mac وiPhone بسعر 24 دولارًا لمرة واحدة، دون تحديث منذ ثلاثة أشهر ولم يُختبر عمليًا.',
    twitterDescription: 'مراجعة Aiko: تطبيق بشراء لمرة واحدة يحوّل التسجيلات إلى نص بنموذج Whisper على Mac أو iPhone. السعر والخصوصية والحدود وحالة الصيانة والبدائل.',
    audience: 'مستخدمو Apple الذين يريدون تحويل التسجيلات والاجتماعات والمحاضرات إلى نص بدقة وخصوصية ودون اشتراك — يغطي السعر والتثبيت والنماذج والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'مراجعة aiko',
      'تطبيق aiko لتحويل الكلام إلى نص',
      'sindre sorhus aiko',
      'whisper على الجهاز mac',
      'تحويل الكلام إلى نص دون اتصال iphone',
      'تطبيق تحويل كلام إلى نص بشراء لمرة واحدة',
      'تطبيق whisper لتحويل الكلام إلى نص mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**تحذير: لم يتلقَّ Aiko أي تحديث منذ 27 يونيو 2026 (الإصدار 1.11.0)، وقد يكون متوقف الصيانة — تأكد من أنه ما زال يعمل لديك قبل الاعتماد عليه.** **Aiko تطبيق مغلق المصدر لتحويل الكلام إلى نص على أجهزة Mac وiPhone وiPad وvisionOS، ويشغّل نموذج Whisper من OpenAI على الجهاز فلا يُرفع الصوت أبدًا، ويكلّف 24 دولارًا لمرة واحدة في App Store.** وتقول سياسة الخصوصية إنه لا تُجمع أي بيانات. تغطي هذه المراجعة الإصدار 1.11.0 وتعتمد على الموقع العام وسياسة الخصوصية وصفحة App Store، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Aiko الشراء لتحويل الكلام إلى نص بخصوصية على Mac أو iPhone؟',
        answer: 'على الأرجح نعم، إذا كان لديك جهاز Apple حديث وتريد نصوصًا دقيقة للتسجيلات دون اشتراك أو رفع للملفات. تحقق أولًا من أربعة أمور: مضى أكثر من ثلاثة أشهر دون تحديث، وتطبيق iPhone يتطلب iOS 26، ولا يحوّل الكلام مباشرة أثناء التسجيل، ولا يميّز المتحدثين.',
        bullets: [
          'شراء واحد بسعر 24 دولارًا في App Store يغطي Mac وiPhone وiPad وvisionOS؛ وتجربة TestFlight لمدة 14 يومًا للتطبيق الكامل مجانية.',
          'يعمل Whisper large v2 على Mac، ويعمل النموذج medium أو small على iPhone بحسب الذاكرة.',
          'نحو 100 لغة، وترجمة إلى الإنجليزية، وتصدير بصيغة نص أو JSON أو CSV أو ترجمات SRT.',
          'تتيح الاختصارات التحويل الدفعي وإجراءً سريعًا في Finder والتسجيل من زر الإجراء في iPhone.',
          'لا تحويل مباشر ولا تمييز للمتحدثين ولا تحرير داخل التطبيق؛ ويجب إبقاء تطبيق iPhone مفتوحًا أثناء العمل.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Aiko',
        anchor: 'get-it',
      },
      {
        label: 'Aiko في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Aiko',
        anchor: 'what-is-aiko',
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
        label: 'Aiko مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'لمن يناسب Aiko',
        anchor: 'who-should-use',
      },
      {
        label: 'لمن لا يناسب Aiko',
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
            text: 'Aiko تطبيق مدفوع لأجهزة Apple فقط يحوّل التسجيلات إلى نص على الجهاز باستخدام OpenAI Whisper، وقد مضى على آخر تحديث له أكثر من ثلاثة أشهر.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كأداة لا تتصل بأحد: تدفع مرة واحدة، وتضيف تسجيلًا، وتنتظر بينما يعمل Whisper على جهاز Mac أو iPhone الخاص بك، ثم تصدّر النص.',
          },
        ],
        items: [
          'الصيانة: مضى على آخر تحديث أكثر من ثلاثة أشهر، لذا يسري تحذير المشروع المتوقف إلى أن يُتحقق من إصدار أحدث.',
          'الترخيص والمطوّر: مملوك، دون مستودع شيفرة مرتبط؛ وSindre Sorhus هو مؤلف الموقع وبائع التطبيق في App Store.',
          'الحجم والمتطلبات: نحو 1.8 GB، وتقول ملاحظات الإصدار 1.11.0 إن التطبيق يتطلب الآن iOS 26.',
          'الخصوصية: السياسة لا تتجاوز جملتين، ولا يمكن فحص الشيفرة.',
          'النضج: يُباع منذ مارس 2023، بتقييم 4.7 من 329 تقييمًا في App Store.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تحديث منذ 27 يونيو 2026. قد يكون Aiko متوقف الصيانة: تأكد من أنه يعمل على جهاز Mac أو iPhone لديك، واستخدم التجربة المجانية قبل الدفع.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'الحصول على Aiko',
        content: [
          '**يُثبَّت Aiko مثل أي تطبيق من Apple، ولا حاجة إلى الطرفية.** شراء واحد من App Store يغطي كل المنصات، وتتوفر تجربة مجانية عبر TestFlight.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'iPhone وiPad',
            'مصدر الحصول': '[Aiko في App Store](https://apps.apple.com/app/id1672085276) — 24 دولارًا لمرة واحدة (المتجر الأمريكي)',
          },
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[Aiko في App Store](https://apps.apple.com/app/id1672085276) — الشراء نفسه',
          },
          {
            'المنصة': 'تجربة مجانية (14 يومًا)',
            'مصدر الحصول': '[تجربة TestFlight](https://testflight.apple.com/join/P1qnhHCC) — التطبيق الكامل دون خصم تلقائي',
          },
          {
            'المنصة': 'إصدارات قديمة مجانية',
            'مصدر الحصول': '[إصدارات مجانية](https://sindresorhus.com/aiko) 1.10.1 و1.8.2 و1.5.3 لـ macOS 15 و14 و13؛ دون تحديثات',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Aiko](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': 'لا يوجد مستودع مرتبط',
          },
        ],
        note: 'لا يذكر الموقع حدًا أدنى لإصدار macOS للنسخة الحالية؛ وتعرض صفحة App Store الإصدار 26.0 حدًا أدنى لنظام التشغيل. ولا يذكر الموقع سوى macOS وiOS وvisionOS، دون نسخة لنظام Windows أو Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko في لمحة',
        columns: [
          'الخاصية',
          'Aiko',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            Aiko: 'Mac وiPhone وiPad وvisionOS',
          },
          {
            'الخاصية': 'السعر',
            Aiko: '24 دولارًا لمرة واحدة لكل المنصات',
          },
          {
            'الخاصية': 'الترخيص',
            Aiko: 'مملوك، دون مستودع شيفرة',
          },
          {
            'الخاصية': 'مكان التشغيل',
            Aiko: 'على الجهاز؛ دون رفع',
          },
          {
            'الخاصية': 'اللغات',
            Aiko: 'نحو 100',
          },
          {
            'الخاصية': 'التحويل الفوري',
            Aiko: 'لا؛ لا تحويل مباشر أثناء التسجيل',
          },
          {
            'الخاصية': 'تمييز المتحدثين',
            Aiko: 'لا؛ لا كشف للمتحدثين حتى الآن',
          },
          {
            'الخاصية': 'يعمل بالمعالج المركزي فقط',
            Aiko: 'غير مذكور',
          },
          {
            'الخاصية': 'خادم API محلي',
            Aiko: 'غير مذكور؛ توفر بدلًا منه إجراءات الاختصارات',
          },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'ما هو Aiko',
        content: [
          '**Aiko تطبيق أصلي لتحويل الكلام إلى نص، وليس خدمة سحابية.** يقول الموقع إنه يشغّل نموذج Whisper من OpenAI محليًا، وتشكر صفحة App Store كلًّا من Whisper وwhisper.cpp على جعل التطبيق ممكنًا. وتقول الأسئلة الشائعة إنه مبني بلغة Swift وإطار SwiftUI.',
          'يحوّل ملفات الصوت والفيديو والتسجيلات إلى نص، ويترجم الكلام إلى الإنجليزية، ويصدّر نصًا أو JSON أو CSV أو ترجمات SRT. يبيعه Sindre Sorhus منذ مارس 2023. ويقتبس الموقع مقالًا من Lifehacker يمتدح سرعته، وهو اقتباس اختاره المطوّر.',
          'تعتمد هذه المراجعة على الموقع وسياسة الخصوصية وصفحة App Store. ولم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا الدقة والسرعة والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت ومراجعة للإعدادات وتسجيل.** تتبع الخطوات الأسئلة الشائعة في الموقع وصفحة App Store.',
        ],
        numberedItems: [
          {
            title: 'ثبّت Aiko',
            whyItMatters: 'اشتره من [App Store](https://apps.apple.com/app/id1672085276)، أو ابدأ [تجربة TestFlight](https://testflight.apple.com/join/P1qnhHCC) المجانية لمدة 14 يومًا ثم اشترِ لاحقًا.',
          },
          {
            title: 'راجع الإعدادات',
            whyItMatters: 'حدّد اللغة أو اترك الكشف التلقائي. وإذا تكرر النص فتقترح الأسئلة الشائعة تفعيل "Skip silent parts" و"Reduce repetitions".',
          },
          {
            title: 'أضف الصوت',
            whyItMatters: 'سجّل داخل التطبيق، أو استورد ملفات صوت أو فيديو، أو شارك ملفًا مع Aiko. المشاركة من Voice Memos في iOS 26 معطّلة بسبب خلل في النظام، وتربط الأسئلة الشائعة باختصار كحل بديل.',
          },
          {
            title: 'انتظر ثم صدّر',
            whyItMatters: 'أبقِ تطبيق iPhone مفتوحًا أثناء التحويل، ثم انسخ النص أو صدّره بصيغة نص أو JSON أو CSV أو ترجمات.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول تحويل التسجيلات إلى نص بدقة وخصوصية.** كل ما يلي مصدره الموقع وصفحة App Store.',
        ],
        items: [
          '**الدقة أولًا.** تقول الصفحة إن Aiko يفضّل الدقة على السرعة.',
          '**الترجمة.** يمكن ترجمة الكلام إلى الإنجليزية، في تشغيل منفصل عن التحويل باللغة الأصلية.',
          '**التصدير.** نص وJSON وCSV وترجمات SRT، مع قائمة استبدال كلمات تصحح الأخطاء الشائعة تلقائيًا.',
          '**الاختصارات.** تحويل دفعي، وإجراء سريع في Finder على Mac، وتسجيل من زر الإجراء في iPhone أو من شريط قوائم macOS، باستخدام اختصارات يربط بها المطوّر.',
          '**الترتيب.** حذف تلقائي اختياري للتسجيلات الأقدم من 7 أيام؛ وتُحفظ التسجيلات في مجلد "Aiko" داخل تطبيق الملفات.',
          '**ضوابط Whisper.** تساعد "Skip silent parts" و"Reduce repetitions" وإعداد "Prompt" في معالجة عادات Whisper مثل تكرار الجمل أو غياب علامات الترقيم.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يستخدم تطبيق Mac النموذج Whisper large v2، ويستخدم تطبيق iPhone النموذج medium أو small بحسب الذاكرة المتاحة.** يقول المطوّر إن Whisper large v3 كان أسوأ من v2 في حالات كثيرة فأعاده إلى v2، وإنه لا يوجد iPhone قوي بما يكفي لتشغيل النموذج الكبير.',
          'لا يذكر الموقع حجم الذاكرة ولا حدًا أدنى لإصدار macOS، ويقول إن الذاكرة المتاحة تؤثر في السرعة. وتعرض صفحة App Store حجم 1.83 GB وحدًا أدنى للنظام هو 26.0. وتقرّ أسئلته الشائعة بأن التحويل قد يكون بطيئًا لأن التطبيق يفضّل الدقة، بينما يذكر اقتباس Lifehacker في الموقع أن نصف ساعة من الصوت عولجت في دقائق. ولم يُعَد إنتاج أي من الأمرين هنا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية: "No data or personal information is collected by this app."** ويضيف الموقع أن الصوت يُحوَّل إلى نص على الجهاز ولا يُرفع أبدًا. والسياسة جملتان، وبلا تاريخ، ولا تذكر شيئًا عن التحليلات أو تقارير الأعطال أو الوصول إلى الشبكة.',
          'الشيفرة غير مفتوحة، لذا لا يمكن فحص هذه الأقوال، ولم تفحص هذه المراجعة حركة الشبكة. ويقترح الموقع أيضًا لصق النص في ChatGPT لإضافة فقرات أو علامات ترقيم؛ وهذا قرارك أنت ويقع خارج الوعد المذكور.',
          'هو منتج مدفوع ومملوك: 24 دولارًا لمرة واحدة في App Store الأمريكي لكل المنصات. ولا يصف الموقع ولا الصفحة أي اشتراك، والتجربة لمدة 14 يومًا مجانية.',
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
            'الميزة': 'Whisper على الجهاز',
            'ما تعنيه في الاستخدام الفعلي': 'تُحوَّل التسجيلات إلى نص دون رفع.',
            'القيد / تنبيه': 'مغلق المصدر، لذا لا يمكن التحقق من هذا الادعاء.',
          },
          {
            'الميزة': 'سعر لمرة واحدة',
            'ما تعنيه في الاستخدام الفعلي': 'شراء واحد يغطي Mac وiPhone وغيرهما.',
            'القيد / تنبيه': 'التجربة المجانية عبر TestFlight وليس App Store.',
          },
          {
            'الميزة': 'نحو 100 لغة',
            'ما تعنيه في الاستخدام الفعلي': 'لغات كثيرة مع ترجمة إلى الإنجليزية.',
            'القيد / تنبيه': 'تختلف الجودة باللغة، والصوت متعدد اللغات غير موثوق.',
          },
          {
            'الميزة': 'الاختصارات وإجراءات Finder',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن تنفيذ مهام دفعية والتسجيل بلمسة واحدة.',
            'القيد / تنبيه': 'لا يوجد وضع دفعي مدمج ولا مخطط URL.',
          },
          {
            'الميزة': 'الدقة أولًا',
            'ما تعنيه في الاستخدام الفعلي': 'يفضّل المطوّر الجودة على السرعة.',
            'القيد / تنبيه': 'قد يكون التحويل بطيئًا، ويجب إبقاء تطبيق iPhone مفتوحًا.',
          },
          {
            'الميزة': 'سير عمل مركّز',
            'ما تعنيه في الاستخدام الفعلي': 'استيراد ثم تحويل ثم تصدير.',
            'القيد / تنبيه': 'لا تحويل مباشر ولا تمييز للمتحدثين ولا تحرير داخل التطبيق.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko مقابل البدائل',
        content: [
          'هذه أقرب أدوات تحويل الكلام إلى نص في الدليل: منافس لأجهزة Mac فقط، وتطبيق لـ iPhone وMac مع تمييز المتحدثين، وتطبيق مكتبي مجاني مفتوح المصدر.',
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
            'التطبيق': 'Aiko',
            'المنصات': 'Mac وiPhone وiPad وvisionOS',
            'السعر والترخيص': '24 دولارًا لمرة واحدة، مملوك',
            'الدور': 'تطبيق تحويل بنموذج Whisper',
            'الفرق الرئيسي': 'Whisper large v2 على Mac؛ دون تمييز المتحدثين',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق تحويل لأجهزة Mac',
            'الفرق الرئيسي': 'يضيف في Pro تمييز المتحدثين والإملاء؛ لأجهزة Mac فقط',
          },
          {
            'التطبيق': '[Whisper Notes](/ar/power-local-llm/whisper-notes-review)',
            'المنصات': 'iPhone وiPad وMac',
            'السعر والترخيص': '7.99 دولارًا لمرة واحدة، مملوك',
            'الدور': 'تطبيق تحويل دون اتصال',
            'الفرق الرئيسي': 'يضيف تمييز المتحدثين وسعره أقل',
          },
          {
            'التطبيق': '[Buzz Captions](/ar/power-local-llm/buzz-captions-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'تطبيق مكتبي مفتوح المصدر',
            'الفرق الرئيسي': 'مفتوح المصدر؛ للحاسوب المكتبي فقط',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Aiko',
        items: [
          '**مستخدمو Apple الذين يحوّلون التسجيلات إلى نص.** المقابلات والمحاضرات والمذكرات الصوتية التي لا يجوز رفعها تناسب تطبيقًا يعمل على الجهاز.',
          '**من يتجنب الاشتراكات.** شراء واحد يغني عن رسوم التحويل الشهرية.',
          '**من يعملون بلغات كثيرة.** نحو 100 لغة وترجمة إلى الإنجليزية.',
          '**مستخدمو الاختصارات.** تعمل المهام الدفعية والتسجيل بلمسة واحدة عبر الاختصارات المرتبطة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Aiko',
        items: [
          '**من يحتاج إلى ترجمات مباشرة.** لا يحوّل Aiko الكلام إلى نص أثناء التسجيل.',
          '**الفرق التي تحتاج إلى أسماء المتحدثين.** لا يملك التطبيق كشفًا للمتحدثين.',
          '**مستخدمو Windows وAndroid.** لا يذكر الموقع سوى macOS وiOS وvisionOS.',
          '**أجهزة iPhone التي لا تشغّل iOS 26.** النسخة الحالية تتطلبه.',
          '**من يعتمد على إصلاحات متكررة.** مضى على آخر تحديث أكثر من ثلاثة أشهر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Aiko دون اتصال بالإنترنت؟',
            a: 'يقول الموقع إن التحويل يجري على الجهاز ولا يُرفع الصوت أبدًا، لذا ينبغي أن يعمل دون اتصال. ولم تختبره هذه المراجعة في وضع الطيران.',
          },
          {
            q: 'هل يمكنني تحرير النص داخل Aiko؟',
            a: 'لا. لا ينوي المطوّر إضافة التحرير؛ صدّر النص وحرّره في تطبيق آخر.',
          },
          {
            q: 'هل يستطيع تحويل مكالمة Zoom أو فيديو YouTube إلى نص؟',
            a: 'ليس مباشرة. تنصح الأسئلة الشائعة بتسجيل المكالمة واستيراد الملف، وبتنزيل صوت الفيديو أولًا بأداة منفصلة.',
          },
          {
            q: 'هل توجد نسخة مجانية؟',
            a: 'ليس في App Store، لكن للتطبيق الكامل تجربة مجانية لمدة 14 يومًا عبر TestFlight. والإصدارات القديمة لأنظمة macOS 13 إلى 15 مجانية لكنها لم تعد تُحدَّث ولا تعمل على إصدارات macOS الأحدث.',
          },
          {
            q: 'من يصنع Aiko؟',
            a: 'Sindre Sorhus، المذكور بائعًا في App Store، والذي ينشر التطبيق على موقعه الخاص.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Aiko من يريد تحويل التسجيلات إلى نص بدقة وخصوصية على جهاز Apple بدفعة واحدة: يُثبَّت مثل أي تطبيق، ويشغّل Whisper على الجهاز، ويقدّم تجربة مجانية لمدة 14 يومًا.',
          'التحفظات تخص الصيانة والنطاق: أكثر من ثلاثة أشهر دون تحديث، ومصدر مغلق مع سياسة خصوصية من جملتين، ولا تحويل مباشر ولا تمييز للمتحدثين ولا تحرير. استخدم التجربة قبل الشراء وتأكد من أنه يعمل على نظامك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Aiko](https://sindresorhus.com/aiko) — الميزات والتجربة والأسئلة الشائعة والإصدارات القديمة واللغات المدعومة.',
          '[سياسة خصوصية Aiko](https://sindresorhus.com/aiko/privacy-policy) — بيان التعامل مع البيانات.',
          '[Aiko في App Store](https://apps.apple.com/us/app/id1672085276) — السعر والإصدار وتاريخ الإطلاق والحجم والوصف.',
          '[Lifehacker عن Aiko](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — الاقتباس الصحفي المعروض في الموقع.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — أقرب تطبيق تحويل لأجهزة Mac فقط.',
          '[مراجعة Whisper Notes](/ar/power-local-llm/whisper-notes-review) — بديل لـ iPhone وMac مع تمييز المتحدثين.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح خلف كثير من تطبيقات Whisper المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/aiko-review-hero-ko.webp',
    title: 'Aiko 리뷰: Mac·iPhone용 기기 내 Whisper 음성 전사 앱',
    seoTitle: 'Aiko 리뷰: 기기 내에서 실행되는 Whisper 전사 앱',
    intro: 'Aiko는 Sindre Sorhus가 만든 유료 비공개 소스 전사 앱으로, OpenAI의 Whisper 모델을 사용해 Mac, iPhone, iPad, Vision Pro에서 녹음을 텍스트로 변환하며 구독 대신 일회성 가격으로 판매됩니다. 이 리뷰는 공식 사이트와 App Store 페이지가 밝히는 내용과 빠뜨린 내용, 그리고 디렉터리의 다른 음성 인식 도구와의 비교를 정리합니다.',
    metaDescription: 'Aiko 리뷰: Mac·iPhone·Vision Pro용 기기 내 Whisper 전사 앱. 한국 스토어 39,000원 일회성 결제, 3개월 넘게 업데이트 없음. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Aiko 리뷰: Mac이나 iPhone에서 Whisper로 녹음을 전사하는 일회성 결제 앱. 가격, 개인정보 보호, 한계, 유지보수 상태, 대안을 정리했습니다.',
    audience: '구독 없이 녹음, 회의, 강의를 정확하고 비공개로 전사하려는 Apple 사용자를 위한 글입니다. 가격, 설치, 모델, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Aiko review',
    targetKeywords: [
      'aiko 리뷰',
      'aiko 전사 앱',
      'sindre sorhus aiko',
      'mac 기기 내 whisper',
      'iphone 오프라인 음성 전사',
      '일회성 결제 전사 앱',
      'whisper 전사 앱 mac',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Apple Vision Pro',
    ],
    leadAnswerBlock: '**경고: Aiko는 2026년 6월 27일(버전 1.11.0) 이후 업데이트가 없어 유지보수가 중단되었을 수 있습니다. 의존하기 전에 사용 중인 기기에서 여전히 작동하는지 확인하십시오.** **Aiko는 Mac, iPhone, iPad, visionOS용 비공개 소스 전사 앱으로, OpenAI의 Whisper 모델을 기기에서 실행하므로 오디오가 업로드되지 않으며, 한국 App Store에서 39,000원에 한 번 결제하면 됩니다.** 개인정보 처리방침에는 데이터를 수집하지 않는다고 적혀 있습니다. 이 리뷰는 버전 1.11.0을 다루며, 공개 사이트, 개인정보 처리방침, App Store 페이지에 근거하고 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Mac이나 iPhone에서 비공개로 전사하려면 Aiko를 구매할 가치가 있습니까?',
        answer: '최신 Apple 기기를 갖고 있고 구독이나 업로드 없이 녹음을 정확하게 전사하고 싶다면 그럴 가능성이 큽니다. 구매 전에 네 가지를 확인하십시오. 3개월 넘게 업데이트가 없다는 점, iPhone 앱에 iOS 26이 필요하다는 점, 실시간 전사를 하지 않는다는 점, 화자를 구분하지 않는다는 점입니다.',
        bullets: [
          'App Store에서 한 번 결제(한국 스토어 39,000원)하면 Mac, iPhone, iPad, visionOS에서 쓸 수 있으며, 전체 기능을 14일간 써 보는 TestFlight 체험판은 무료입니다.',
          'Mac에서는 Whisper large v2가, iPhone에서는 메모리에 따라 medium 또는 small 모델이 실행됩니다.',
          '약 100개 언어를 지원하고, 영어 번역과 텍스트, JSON, CSV, SRT 자막 내보내기가 가능합니다.',
          '단축어로 일괄 전사, Finder 빠른 동작, iPhone 동작 버튼을 통한 녹음을 쓸 수 있습니다.',
          '실시간 전사, 화자 구분, 앱 내 편집은 없으며, iPhone 앱은 작업 중 계속 열어 두어야 합니다.',
        ],
        updatedDate: '2026-10-30',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Aiko 받기',
        anchor: 'get-it',
      },
      {
        label: 'Aiko 한눈에 보기',
        anchor: 'at-a-glance',
      },
      {
        label: 'Aiko란',
        anchor: 'what-is-aiko',
      },
      {
        label: '시작하는 방법',
        anchor: 'how-to-get-started',
      },
      {
        label: '기능',
        anchor: 'features',
      },
      {
        label: '모델과 하드웨어',
        anchor: 'models-hardware',
      },
      {
        label: '개인정보 보호, 라이선스, 비용',
        anchor: 'privacy',
      },
      {
        label: '장점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: 'Aiko와 대안 비교',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Aiko를 쓰면 좋은 사용자',
        anchor: 'who-should-use',
      },
      {
        label: 'Aiko를 쓰지 말아야 할 사용자',
        anchor: 'who-should-not-use',
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
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Aiko는 OpenAI Whisper로 녹음을 기기 안에서 전사하는 Apple 전용 유료 앱이며, 가장 최근 업데이트는 3개월이 넘었습니다.',
          },
          {
            type: 'plain-terms',
            text: '외부로 연락하지 않는 전사 도구라고 생각하면 됩니다. 한 번 결제하고 녹음을 넣은 뒤 Mac이나 iPhone에서 Whisper가 처리하는 동안 기다렸다가 텍스트를 내보냅니다.',
          },
        ],
        items: [
          '유지보수: 가장 최근 업데이트가 3개월이 넘었으므로, 더 새로운 릴리스가 확인될 때까지 업데이트 중단 경고가 적용됩니다.',
          '라이선스와 개발자: 독점 소프트웨어이며 소스 코드 저장소 링크가 없습니다. Sindre Sorhus가 사이트의 저자이자 App Store 판매자입니다.',
          '용량과 요구 사항: 약 1.8GB이며, 1.11.0 릴리스 노트에는 앱이 이제 iOS 26을 요구한다고 적혀 있습니다.',
          '개인정보 보호: 방침은 두 문장뿐이며, 코드는 검증할 수 없습니다.',
          '성숙도: 2023년 3월부터 판매되었고 App Store 평점 329개에서 평균 4.7입니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 6월 27일 이후 업데이트가 없습니다. Aiko는 유지보수가 중단되었을 수 있으니, 사용하는 Mac이나 iPhone에서 작동하는지 확인하고 결제하기 전에 무료 체험판을 사용하십시오.',
          },
        ],
      },
      getItAiko: {
        id: 'get-it',
        title: 'Aiko 받기',
        content: [
          '**Aiko는 다른 Apple 앱처럼 설치하며 터미널이 필요 없습니다.** App Store에서 한 번 구매하면 모든 플랫폼에서 쓸 수 있고, 무료 체험판은 TestFlight로 제공됩니다.',
        ],
        columns: [
          '플랫폼',
          '받는 곳',
        ],
        rows: [
          {
            '플랫폼': 'iPhone과 iPad',
            '받는 곳': '[App Store의 Aiko](https://apps.apple.com/app/id1672085276) — 39,000원 일회성 결제(한국 스토어)',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[App Store의 Aiko](https://apps.apple.com/app/id1672085276) — 같은 구매',
          },
          {
            '플랫폼': '무료 체험판(14일)',
            '받는 곳': '[TestFlight 체험판](https://testflight.apple.com/join/P1qnhHCC) — 전체 기능, 자동 결제 없음',
          },
          {
            '플랫폼': '이전 무료 버전',
            '받는 곳': '[무료 이전 버전](https://sindresorhus.com/aiko) macOS 15·14·13용 1.10.1, 1.8.2, 1.5.3, 업데이트 없음',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[sindresorhus.com/aiko](https://sindresorhus.com/aiko)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Aiko 개인정보 처리방침](https://sindresorhus.com/aiko/privacy-policy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '연결된 저장소 없음',
          },
        ],
        note: '사이트에는 현재 버전의 최소 macOS 버전이 적혀 있지 않으며, App Store 페이지에는 최소 OS가 26.0으로 표시됩니다. 사이트에는 macOS, iOS, visionOS만 나와 있고 Windows나 Android 버전은 없습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Aiko 한눈에 보기',
        columns: [
          '항목',
          'Aiko',
        ],
        rows: [
          {
            '항목': '플랫폼',
            Aiko: 'Mac, iPhone, iPad, visionOS',
          },
          {
            '항목': '가격',
            Aiko: '39,000원 일회성(한국 스토어), 전 플랫폼 공통',
          },
          {
            '항목': '라이선스',
            Aiko: '독점, 소스 코드 저장소 없음',
          },
          {
            '항목': '실행 위치',
            Aiko: '기기 내부, 업로드 없음',
          },
          {
            '항목': '언어',
            Aiko: '약 100개',
          },
          {
            '항목': '실시간 전사',
            Aiko: '아니요, 녹음 중 실시간 전사 없음',
          },
          {
            '항목': '화자 구분',
            Aiko: '아니요, 아직 화자 감지 없음',
          },
          {
            '항목': 'CPU만으로 사용 가능',
            Aiko: '명시되지 않음',
          },
          {
            '항목': '로컬 API 서버',
            Aiko: '명시되지 않음, 대신 단축어 동작 제공',
          },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsAiko: {
        id: 'what-is-aiko',
        title: 'Aiko란',
        content: [
          '**Aiko는 클라우드 서비스가 아니라 네이티브 전사 앱입니다.** 사이트에 따르면 OpenAI의 Whisper 모델을 로컬에서 실행하며, App Store 설명은 Whisper와 whisper.cpp 덕분에 앱이 가능했다고 밝힙니다. FAQ에 따르면 Swift와 SwiftUI로 만들어졌습니다.',
          '오디오 파일, 동영상 파일, 녹음을 전사하고, 음성을 영어로 번역하며, 텍스트, JSON, CSV, SRT 자막으로 내보냅니다. Sindre Sorhus가 2023년 3월부터 판매해 왔습니다. 사이트는 속도를 칭찬하는 Lifehacker 기사를 인용하는데, 이는 개발자가 고른 인용입니다.',
          '이 리뷰는 공식 사이트, 개인정보 처리방침, App Store 페이지에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 정확도, 속도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 설정 확인, 녹음으로 이루어집니다.** 단계는 사이트의 FAQ와 App Store 페이지를 따릅니다.',
        ],
        numberedItems: [
          {
            title: 'Aiko 설치',
            whyItMatters: '[App Store](https://apps.apple.com/app/id1672085276)에서 구매하거나, 14일 무료 [TestFlight 체험판](https://testflight.apple.com/join/P1qnhHCC)을 시작한 뒤 나중에 구매합니다.',
          },
          {
            title: '설정 확인',
            whyItMatters: '언어를 선택하거나 자동 감지를 켜 둡니다. 텍스트가 반복되면 FAQ는 "Skip silent parts"와 "Reduce repetitions"를 제안합니다.',
          },
          {
            title: '오디오 추가',
            whyItMatters: '앱에서 녹음하거나, 오디오·동영상 파일을 가져오거나, 파일을 Aiko로 공유합니다. iOS 26에서 음성 메모에서의 공유는 시스템 버그로 작동하지 않으며, FAQ는 우회 방법으로 단축어를 링크합니다.',
          },
          {
            title: '기다린 뒤 내보내기',
            whyItMatters: '전사하는 동안 iPhone 앱을 열어 두고, 끝나면 텍스트를 복사하거나 텍스트, JSON, CSV, 자막으로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 녹음을 정확하고 비공개로 전사하는 데 집중되어 있습니다.** 아래 내용은 모두 사이트와 App Store 페이지에서 가져왔습니다.',
        ],
        items: [
          '**정확도 우선.** 페이지에 따르면 Aiko는 속도보다 정확도를 우선합니다.',
          '**번역.** 음성을 영어로 번역할 수 있으며, 원래 언어 전사와는 별도의 실행입니다.',
          '**내보내기.** 텍스트, JSON, CSV, SRT 자막을 지원하며, 흔한 오류를 자동으로 고치는 단어 치환 목록이 있습니다.',
          '**단축어.** 개발자가 링크한 단축어로 일괄 전사, Mac의 Finder 빠른 동작, iPhone 동작 버튼이나 macOS 메뉴 막대에서의 녹음을 쓸 수 있습니다.',
          '**정리.** 7일이 지난 녹음을 자동으로 삭제하는 옵션이 있으며, 녹음은 파일 앱의 "Aiko" 폴더에 저장됩니다.',
          '**Whisper 조절 기능.** "Skip silent parts", "Reduce repetitions", "Prompt" 설정은 문장 반복이나 문장 부호 누락 같은 Whisper의 습성을 다루는 데 도움이 됩니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**Mac 앱은 Whisper large v2를, iPhone 앱은 사용 가능한 메모리에 따라 medium 또는 small 모델을 사용합니다.** 개발자는 Whisper large v3가 너무 많은 경우에서 v2보다 나빠 되돌렸고, 큰 모델을 실행할 만큼 강력한 iPhone은 없다고 말합니다.',
          '사이트에는 RAM 용량도 최소 macOS 버전도 없으며, 사용 가능한 메모리가 속도에 영향을 준다고만 되어 있습니다. App Store 페이지에는 용량 1.83GB, 최소 OS 26.0으로 표시됩니다. FAQ는 앱이 정확도를 우선해 전사가 느릴 수 있다고 인정하는 반면, 사이트에 인용된 Lifehacker는 30분 분량의 오디오를 몇 분 만에 처리했다고 전합니다. 둘 다 여기서는 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에는 "No data or personal information is collected by this app."이라고 적혀 있습니다.** 사이트는 오디오가 기기에서 전사되며 업로드되지 않는다고 덧붙입니다. 방침은 두 문장이고 날짜가 없으며, 분석, 충돌 보고서, 네트워크 접속에 대해서는 언급하지 않습니다.',
          '코드가 공개되어 있지 않아 이런 진술은 검증할 수 없고, 이 리뷰는 네트워크 트래픽을 조사하지 않았습니다. 사이트는 문단이나 문장 부호를 추가하려면 텍스트를 ChatGPT에 붙여 넣으라고도 제안하는데, 이는 사용자의 선택이며 위의 약속 범위 밖입니다.',
          '유료 독점 제품으로, 한국 App Store에서 전 플랫폼 공통 39,000원에 한 번 결제합니다. 사이트와 페이지에는 구독 관련 설명이 없고, 14일 체험판은 무료입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: [
          '장점',
          '실제 사용에서의 의미',
          '한계 / 주의점',
        ],
        rows: [
          {
            '장점': '기기 내 Whisper',
            '실제 사용에서의 의미': '업로드 없이 녹음을 전사합니다.',
            '한계 / 주의점': '비공개 소스라 이 주장은 검증할 수 없습니다.',
          },
          {
            '장점': '일회성 가격',
            '실제 사용에서의 의미': '한 번 구매로 Mac, iPhone 등에서 쓸 수 있습니다.',
            '한계 / 주의점': '체험판은 App Store가 아니라 TestFlight로 제공됩니다.',
          },
          {
            '장점': '약 100개 언어',
            '실제 사용에서의 의미': '많은 언어와 영어 번역을 지원합니다.',
            '한계 / 주의점': '언어별로 품질이 다르고, 여러 언어가 섞인 오디오는 신뢰하기 어렵습니다.',
          },
          {
            '장점': '단축어와 Finder 동작',
            '실제 사용에서의 의미': '일괄 작업과 한 번에 녹음 시작이 가능합니다.',
            '한계 / 주의점': '내장 일괄 모드와 URL 스킴은 없습니다.',
          },
          {
            '장점': '정확도 우선',
            '실제 사용에서의 의미': '개발자는 속도보다 품질을 우선합니다.',
            '한계 / 주의점': '전사가 느릴 수 있고 iPhone 앱은 열어 두어야 합니다.',
          },
          {
            '장점': '단순한 작업 흐름',
            '실제 사용에서의 의미': '가져오기, 전사, 내보내기만 합니다.',
            '한계 / 주의점': '실시간 전사, 화자 구분, 앱 내 편집이 없습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Aiko와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 음성 인식 도구는 Mac 전용 경쟁 앱, 화자 구분이 있는 iPhone·Mac 앱, 무료 오픈 소스 데스크톱 앱입니다.',
        ],
        columns: [
          '앱',
          '플랫폼',
          '가격과 라이선스',
          '역할',
          '주요 차이',
        ],
        rows: [
          {
            '앱': 'Aiko',
            '플랫폼': 'Mac, iPhone, iPad, visionOS',
            '가격과 라이선스': '39,000원 일회성, 독점',
            '역할': 'Whisper 전사 앱',
            '주요 차이': 'Mac에서 Whisper large v2, 화자 구분 없음',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac 전사 앱',
            '주요 차이': 'Pro에서 화자 인식과 받아쓰기 추가, Mac 전용',
          },
          {
            '앱': '[Whisper Notes](/ko/power-local-llm/whisper-notes-review)',
            '플랫폼': 'iPhone, iPad, Mac',
            '가격과 라이선스': '6,000원 일회성, 독점',
            '역할': '오프라인 전사 앱',
            '주요 차이': '화자 구분이 있고 가격이 더 낮음',
          },
          {
            '앱': '[Buzz Captions](/ko/power-local-llm/buzz-captions-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '오픈 소스 데스크톱 앱',
            '주요 차이': '오픈 소스, 데스크톱 전용',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Aiko를 쓰면 좋은 사용자',
        items: [
          '**녹음을 전사하는 Apple 사용자.** 업로드해서는 안 되는 인터뷰, 강의, 음성 메모에는 기기 내 앱이 적합합니다.',
          '**구독을 피하려는 구매자.** 한 번 결제로 월 전사 요금을 대신할 수 있습니다.',
          '**여러 언어로 작업하는 사람.** 약 100개 언어와 영어 번역을 지원합니다.',
          '**단축어 사용자.** 일괄 작업과 한 번에 녹음 시작은 링크된 단축어로 가능합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Aiko를 쓰지 말아야 할 사용자',
        items: [
          '**실시간 자막이 필요한 사람.** Aiko는 녹음하는 동안 전사하지 않습니다.',
          '**화자 이름이 필요한 팀.** 앱에는 화자 감지가 없습니다.',
          '**Windows와 Android 사용자.** 사이트에는 macOS, iOS, visionOS만 나와 있습니다.',
          '**iOS 26을 실행할 수 없는 iPhone.** 현재 버전은 이를 요구합니다.',
          '**잦은 수정에 의존하는 사람.** 가장 최근 업데이트는 3개월이 넘었습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Aiko는 오프라인에서 작동합니까?',
            a: '사이트에 따르면 전사는 기기에서 실행되고 오디오는 업로드되지 않으므로 연결 없이도 작동해야 합니다. 이 리뷰는 비행기 모드에서 테스트하지 않았습니다.',
          },
          {
            q: 'Aiko에서 전사본을 편집할 수 있습니까?',
            a: '아니요. 개발자는 편집 기능을 추가할 계획이 없으며, 텍스트를 내보내 다른 앱에서 편집하라고 안내합니다.',
          },
          {
            q: 'Zoom 통화나 YouTube 영상을 전사할 수 있습니까?',
            a: '직접은 불가능합니다. FAQ는 통화를 녹음해 파일을 가져오고, 영상은 먼저 별도 도구로 오디오를 내려받으라고 안내합니다.',
          },
          {
            q: '무료 버전이 있습니까?',
            a: 'App Store에는 없지만 전체 기능을 14일간 써 보는 무료 TestFlight 체험판이 있습니다. macOS 13~15용 이전 버전은 무료이지만 더 이상 업데이트되지 않으며 최신 macOS에서는 실행되지 않습니다.',
          },
          {
            q: 'Aiko는 누가 만듭니까?',
            a: 'App Store 판매자로 표시되고 자신의 사이트에서 앱을 공개하는 Sindre Sorhus입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Apple 기기에서 한 번의 결제로 녹음을 정확하고 비공개로 전사하고 싶다면 Aiko가 잘 맞습니다. 다른 앱처럼 설치되고, Whisper를 기기에서 실행하며, 14일 무료 체험판을 제공합니다.',
          '주의할 점은 유지보수와 범위입니다. 3개월 넘게 업데이트가 없고, 비공개 소스이며 개인정보 처리방침이 두 문장뿐이고, 실시간 전사, 화자 구분, 편집이 없습니다. 구매 전에 체험판을 사용하고 사용 중인 시스템에서 작동하는지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Aiko 공식 사이트](https://sindresorhus.com/aiko) — 기능, 체험판, FAQ, 이전 버전, 지원 언어.',
          '[Aiko 개인정보 처리방침](https://sindresorhus.com/aiko/privacy-policy) — 데이터 처리에 관한 진술.',
          '[App Store의 Aiko](https://apps.apple.com/us/app/id1672085276) — 가격, 버전, 출시일, 용량, 설명.',
          '[Aiko에 관한 Lifehacker 기사](https://lifehacker.com/tech/aiko-free-ai-transcription-app) — 사이트에 실린 언론 인용.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — 가장 가까운 Mac 전용 전사 앱.',
          '[Whisper Notes 리뷰](/ko/power-local-llm/whisper-notes-review) — 화자 구분이 있는 iPhone·Mac 대안.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 기반이 되는 오픈 엔진.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
