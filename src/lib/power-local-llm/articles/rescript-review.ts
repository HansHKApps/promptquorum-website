// Rescript Review: Edit Video and Audio by Editing the Transcript, on Your Own Computer
// Slug: rescript-review
// Companion to: funclip-review, subtitle-edit-review, aiko-review
// Sources (all read 2026-11-18, no hands-on testing): official website (home page, /privacy and /terms dated 8 August 2026, /acceptable-use, /regenerate-speech),
// GitHub repository wassgha/rescript (API metadata, README, LICENSE header, releases v1.2.3 to v1.2.5 with asset lists, v1.2.5 release notes, commits, owner profile).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-05 (last commit on main; latest release v1.2.5 on 2026-10-29) => no stale warning.
// Theme: 'Voice, Speech & Multimodal' (as aiko-review). HQ flag: US (Terms of Use name California law and courts; set per the owner's standing HQ-flag rule).
// Licence: PolyForm Noncommercial 1.0.0 (the maker calls the project open source; commercial use needs a paid licence, no price published) => described as source-available.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-en.webp',
    title: 'Rescript Review: Edit Video and Audio by Editing the Transcript',
    seoTitle: 'Rescript Review: Edit Video by Editing Its Transcript',
    intro:
      'Rescript 1.2.5 is a browser and desktop editor that transcribes video or audio with Whisper, lets you cut the footage by deleting words, and can respeak a line in the original speaker’s voice. According to its website and README, transcription, editing and export run on your own device and nothing is uploaded. The licence is PolyForm Noncommercial 1.0.0, so commercial use needs a paid licence. This review is based on the official website, the GitHub repository with its releases, and the privacy, terms and acceptable-use pages, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Rescript is a source-available editor that cuts video and audio by deleting words in a Whisper transcript. Free for noncommercial use. What is confirmed.',
    twitterDescription:
      'Rescript: a source-available video and audio editor that cuts footage as you delete words from a Whisper transcript, with speaker labels and optional voice-cloned line fixes. What is confirmed.',
    audience:
      'Podcasters, interviewers and video makers who cut speech-driven recordings for noncommercial use, people with sensitive recordings who want the editing to stay on their own computer, and editors who want a text-based rough cut',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rescript review',
    targetKeywords: [
      'Rescript review',
      'edit video by editing text',
      'transcript-based video editor',
      'local Whisper video editor',
      'remove filler words from video',
      'offline video transcription editor',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript is a source-available editor, free for noncommercial use, that transcribes video and audio with Whisper on your own device, according to the maker, and cuts the footage as you delete words from the transcript.** It runs in a browser and as desktop apps for macOS, Windows and Linux, can respeak a line in the speaker’s voice, and exports video, audio, captions or timelines for other editors. Commercial use needs a paid licence, and PromptQuorum has not tested the app.',
    quickAnswerTop: {
      en: {
        question: 'What is Rescript and who is it for?',
        answer:
          'Rescript is a transcript-based editor for speech-driven video and audio, developed in the open on GitHub. It suits people who cut interviews, podcasts and talking-head videos and want the editing to stay on their own computer.',
        bullets: [
          'Licensed under PolyForm Noncommercial 1.0.0: free for noncommercial use, and commercial use needs a paid licence.',
          'According to the maker, Whisper transcription with word timestamps and speaker labels runs on your device, in the browser or in desktop apps for macOS, Windows and Linux.',
          'Delete words to cut the footage; one click removes "um", "uh" and silences of 0.3 seconds or more; export video, audio, transcript, subtitles or timelines for other editors.',
          'Regenerate respeaks a line in the speaker’s own cloned voice in six languages; the maker’s acceptable use policy requires the speaker’s consent.',
          'Repository created in July 2026; version 1.2.5 was released on 29 October 2026 and the last commit on the main branch was on 5 November 2026.',
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
            text: 'Rescript is a source-available editor that, according to the maker, transcribes video and audio on your computer and cuts the footage as you delete words from the transcript.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a word processor for a recording: the transcript is the timeline. Delete a sentence and the matching footage is cut; type a replacement and, if you choose, Rescript speaks it in that person’s voice.',
          },
        ],
        items: [
          'Use it in a browser or download a desktop app from the GitHub releases page: DMG for macOS, setup EXE for Windows, AppImage or DEB for Linux.',
          'According to the maker, transcription with Whisper, speaker labels and export run on your device; the models are downloaded once from Hugging Face and then cached.',
          'Free for noncommercial use; commercial use needs a paid licence, and the maker says optional paid features that run on its servers may come later.',
          'Telemetry and crash reports are on by default and can be switched off in Settings; the maker lists what they contain.',
          'PromptQuorum has not tested the app, so transcription accuracy, cut quality and voice quality are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The website says the editor needs no account and no upload, and the privacy page says media, transcripts and cloned voices never leave the device. PromptQuorum did not inspect network traffic, so it cannot confirm this beyond what the maker writes.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Rescript is a transcript-based editor for video and audio, released as a web app and as desktop apps for macOS, Windows and Linux under the PolyForm Noncommercial 1.0.0 licence.**',
          'It is developed in the open at [github.com/wassgha/rescript](https://github.com/wassgha/rescript), where the licence file credits Wassim Gharbi and contributors. The repository was created in July 2026; version 1.2.5 appeared on 29 October 2026 and the last commit on the main branch was on 5 November 2026, so development is active and no stale-project warning applies. The maker calls the project open source; because the licence bars commercial use, PromptQuorum describes it as source-available. The website and the privacy page say "we" and name no company, address or imprint, but the terms of use are governed by the laws of the State of California, United States.',
          'According to the maker, you drop in a video or audio file, Whisper transcribes it on your device with word-level timestamps and speaker labels, and deleting words in the transcript cuts the matching footage. A timeline shows the waveform, a word bar and the cut regions, and you can import your own SRT, VTT or JSON captions instead of transcribing. The Regenerate feature rewrites a selected line and speaks it in that speaker’s voice, cloned on your machine from about ten seconds of that speaker’s audio already in the file.',
          'PromptQuorum has not run the app and has not checked transcription accuracy, cut quality, export fidelity or the quality of regenerated speech.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can use Rescript in a browser without installing anything, or download a desktop app from the packages on its GitHub releases page, which the website links for each platform.**',
          'The v1.2.5 release lists a DMG for macOS on Apple Silicon and on Intel, a setup EXE for Windows, and an AppImage and a DEB package for Linux. The README says desktop builds update themselves from GitHub Releases and that the macOS builds are signed and notarized.',
        ],
        columns: ['Platform', 'Package'],
        rows: [
          { 'Platform': 'macOS (Apple Silicon)', 'Package': 'DMG' },
          { 'Platform': 'macOS (Intel)', 'Package': 'DMG (x64)' },
          { 'Platform': 'Windows', 'Package': 'Setup EXE' },
          { 'Platform': 'Linux', 'Package': 'AppImage or DEB' },
          { 'Platform': '[Web app](https://app.getrescript.com)', 'Package': 'Browser, no install (Chromium recommended)' },
          { 'Platform': '[Source](https://github.com/wassgha/rescript)', 'Package': 'Build from source (see the README)' },
        ],
        note: 'Download from the [GitHub releases page](https://github.com/wassgha/rescript/releases/latest) or open the [web app](https://app.getrescript.com). PromptQuorum did not run the installers and did not check whether they are code-signed or notarized by the operating system; the README states that the macOS builds are.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Rescript needs a recent macOS, Windows or Linux computer, or a Chromium-based browser; the maker publishes no memory or GPU minimum.**',
          'The list comes from the README and the website. The web app needs SharedArrayBuffer and uses WebGPU for transcription when it is available, falling back to WASM. Regenerate downloads one voice bundle per language: about 140 MB for the faster models and about 360 MB for the higher-quality ones, according to the maker. PromptQuorum did not measure memory use or speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Desktop', 'Stated figure': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { 'Item': 'Browser', 'Stated figure': 'Chromium-based recommended' },
          { 'Item': 'Transcription', 'Stated figure': 'Whisper Base or Small' },
          { 'Item': 'Speaker labels', 'Stated figure': 'pyannote-segmentation-3.0' },
          { 'Item': 'Voice bundle', 'Stated figure': '~140 MB or ~360 MB per language' },
          { 'Item': 'Memory and GPU', 'Stated figure': 'Not published' },
        ],
        note: 'The Whisper and speaker models are downloaded once from Hugging Face and then cached; after that the editor works without a network connection, according to the maker.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Rescript is first a transcript editor; the timeline, filler removal, speaker labels and voice regeneration sit around it.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Word-level editing: select words in the transcript and press delete; playback skips every cut in real time, and the cut follows the spoken words.',
          'Cleanup: one click removes "um", "uh" and similar fillers, and another removes silences of 0.3 seconds or more across the whole file.',
          'Transcription: Whisper Base or Whisper Small with word timestamps, or import an existing SRT, VTT or JSON caption file instead.',
          'Speakers: automatic speaker labels group the transcript by who is talking, and speakers can be renamed.',
          'Timeline: waveform, a word bar with draggable timing handles, split, cut regions, zoom and pan, so cuts can be refined beyond word boundaries.',
          'Regenerate: rewrite a selected line and have it spoken in that speaker’s voice in English, Spanish, French, German, Italian or Portuguese; a fit meter warns before generating if the new line will not fit the gap.',
          'Export: MP4 or WebM up to 4K; M4A, MP3 or WAV audio; transcripts as TXT, Markdown, DOCX or PDF; captions as SRT, VTT or JSON; and timelines for DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude or Blender.',
          'Interface languages: German, English, Spanish, French, Italian, Japanese, Korean, Portuguese and Chinese (Simplified and Traditional), according to the v1.2.5 release notes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, video, audio, transcripts, projects, exports and cloned voices stay on your device; PromptQuorum did not inspect network traffic and cannot confirm this.**',
          'The privacy page, dated 8 August 2026, says there is no upload step, the editor needs no account, and projects are saved in your browser storage or on disk. It also lists what does use the network: a one-time download of the speech, speaker and voice models from Hugging Face, update checks against GitHub Releases for the desktop apps, an optional email sign-up on the website, and anonymous telemetry and crash reports.',
          'The README says anonymous usage stats and crash reports are on by default and can be turned off in Settings under Privacy. The privacy page says telemetry carries a random install ID, one of four event names and coarse properties such as the app version, the operating system family and the model or export format used; it says IP addresses are not recorded and that crash reports go to Sentry with media file names removed. The website itself uses Vercel Web Analytics and may use Google Analytics.',
          'The maker states that cloned voices are created in memory on your machine and that no voice profile is stored on a server. The acceptable use policy requires the informed consent of the person whose voice is regenerated and says laws on synthetic voices vary by country; Regenerate is meant for fixing your own recordings, and using it lawfully is your responsibility. PromptQuorum does not give legal advice.',
          'The source code is public on GitHub, so the data flow can be audited.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Rescript fits people who cut speech-driven recordings for noncommercial use and want the work to stay on their own computer.**',
        ],
        items: [
          'Podcasters, interviewers and hobby video makers who want to remove fillers and rework takes by editing text.',
          'People with sensitive recordings, such as interviews or unreleased footage, who prefer a tool that says it never uploads media.',
          'Editors who want a rough cut by text and then export a timeline to DaVinci Resolve, Premiere, Final Cut or Reaper.',
          'Readers who prefer a project whose code is public to read.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Rescript is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: commercial work. The licence covers personal projects, study, research and evaluation; the maker says commercial use needs a separate paid licence requested by email, and PromptQuorum found no published price.',
          'Not a fit: anyone who needs a mature product today. The repository was created in July 2026, and the maker’s own terms say transcription and synthesized speech both get things wrong.',
          'Unverified: transcription accuracy, cut quality, export fidelity and the quality of regenerated voices. PromptQuorum has not run the app.',
          'Unverified: the claim that nothing leaves the device, next to the default-on telemetry, crash reports and update checks; PromptQuorum did not inspect network traffic.',
          'Unverified: whether the macOS, Windows and Linux installers are signed or notarized; the README only says the macOS builds are, and the README states no Windows or Linux signing.',
          'Unverified: memory and speed needs, since no minimum is published, and which Whisper model suits which computer.',
          'Unverified: who operates the project and how many people use it. No company name or imprint was found, and PromptQuorum did not look for independent reviews.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript vs Alternatives',
        itemHeadings: true,
        content: [
          '**Rescript overlaps with other tools that transcribe and cut speech media; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Rescript', 'Noted in sources': 'PolyForm NC; Mac/Windows/Linux/web; edit video by transcript' },
          { 'Tool': '[FunClip](/power-local-llm/funclip-review)', 'Noted in sources': 'MIT; local web UI; clips video using speech-recognition text' },
          { 'Tool': '[Subtitle Edit](/power-local-llm/subtitle-edit-review)', 'Noted in sources': 'MIT; Windows/macOS/Linux; subtitle editor with Whisper' },
          { 'Tool': '[Aiko](/power-local-llm/aiko-review)', 'Noted in sources': 'Closed source; iPhone/iPad/Mac; on-device Whisper transcripts' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Do I need an account to use Rescript?',
            a: 'No, according to the maker. The editor needs no account. Following an emailed sign-in link only signs you in on the website, and the email sign-up is optional.',
          },
          {
            q: 'Is Rescript free for commercial use?',
            a: 'No. It is licensed under PolyForm Noncommercial 1.0.0, which covers personal projects, study, research and evaluation. The maker says commercial use needs a separate paid licence that you request by email, and PromptQuorum found no published price.',
          },
          {
            q: 'Does my media leave my computer?',
            a: 'According to the maker, no: transcription, editing, voice regeneration and export run on your device, and the only downloads are the one-time model files and update checks. Telemetry and crash reports are on by default and can be turned off in Settings. PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'Can Rescript change what someone said?',
            a: 'Yes, with Regenerate, which speaks a rewritten line in that speaker’s cloned voice in six languages. The acceptable use policy requires the speaker’s informed consent, and laws on synthetic voices vary by country, so check what applies to you. PromptQuorum did not test the voice quality.',
          },
          {
            q: 'How often does Rescript update?',
            a: 'GitHub lists version 1.2.3 on 3 October 2026, 1.2.4 on 5 October 2026 and 1.2.5 on 29 October 2026, with commits on the main branch as recently as 5 November 2026. The desktop apps check GitHub Releases for updates.',
          },
          {
            q: 'Which platforms does Rescript run on?',
            a: 'According to the maker, in a browser (Chromium-based recommended) and as desktop apps for macOS (Apple Silicon and Intel), Windows and Linux. The v1.2.5 release lists a DMG, a setup EXE, an AppImage and a DEB package.',
          },
          {
            q: 'Is Rescript open source?',
            a: 'The maker calls the project open source, but the licence is PolyForm Noncommercial 1.0.0, which bars commercial use, so PromptQuorum describes it as source-available. The code is public on GitHub and free for noncommercial use; commercial use needs a paid licence.',
          },
          {
            q: 'Does Rescript work without an internet connection?',
            a: 'According to the maker, the Whisper and speaker models are downloaded once from Hugging Face and then cached, and after that the editor works without a network connection. The desktop apps check GitHub Releases for updates. PromptQuorum did not test offline use.',
          },
          {
            q: 'Which formats can Rescript export?',
            a: 'According to the maker: MP4 or WebM video up to 4K; M4A, MP3 or WAV audio; transcripts as TXT, Markdown, DOCX or PDF; captions as SRT, VTT or JSON; and timelines for DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude or Blender. PromptQuorum did not check export fidelity.',
          },
          {
            q: 'Can Rescript remove filler words and silences?',
            a: 'According to the website, one click removes "um", "uh" and similar fillers, and another removes silences of 0.3 seconds or more across the whole file. PromptQuorum did not test how accurately it detects them.',
          },
          {
            q: 'Does Rescript label who is speaking?',
            a: 'According to the maker, automatic speaker labels group the transcript by who is talking, and speakers can be renamed; the README lists pyannote-segmentation-3.0 for this. PromptQuorum did not test the labels.',
          },
          {
            q: 'What does Rescript’s telemetry collect, and can I turn it off?',
            a: 'The README says anonymous usage stats and crash reports are on by default and can be turned off in Settings under Privacy. According to the privacy page, telemetry carries a random install ID, one of four event names and coarse properties such as the app version, the operating system family and the model or export format; IP addresses are not recorded, and crash reports go to Sentry with media file names removed. PromptQuorum did not inspect network traffic.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Rescript is worth a look if you cut interviews, podcasts or talking-head videos for noncommercial use and want transcript-based editing that, according to the maker, runs on your own computer.**',
          'On paper it covers a lot: word-level cuts, filler and silence removal, speaker labels, voice regeneration and exports for other editors. Development is active, with three releases between 3 October and 29 October 2026 and a commit on 5 November 2026.',
          'The trade-offs are real: commercial use needs a paid licence with no published price, the project is only a few months old, the maker’s own terms say transcription and synthesized speech get things wrong, and PromptQuorum has not tested anything. Try it on a copy of a recording and check the transcript and the cuts before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Rescript website](https://getrescript.com) — features, FAQ and downloads, checked 18 November 2026.',
          '[Privacy Policy](https://www.getrescript.com/privacy) — what stays on the device and what is collected, dated 8 August 2026, checked 18 November 2026.',
          '[Terms of Use](https://www.getrescript.com/terms) — licence, governing law and contact, dated 8 August 2026, checked 18 November 2026.',
          '[Acceptable Use Policy](https://www.getrescript.com/acceptable-use) — consent rules for Regenerate and licence limits, checked 18 November 2026.',
          '[Regenerate page](https://www.getrescript.com/regenerate-speech) — languages, voice model and bundle sizes, checked 18 November 2026.',
          '[GitHub repository](https://github.com/wassgha/rescript) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — features, stack, telemetry and licence, checked 18 November 2026.',
          '[GitHub releases](https://github.com/wassgha/rescript/releases) — release dates, packages and the v1.2.5 notes, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[FunClip Review](/power-local-llm/funclip-review) — clipping video by speech-recognition text in a local web UI.',
          '[Subtitle Edit Review](/power-local-llm/subtitle-edit-review) — a subtitle editor with local Whisper-family transcription.',
          '[Aiko Review](/power-local-llm/aiko-review) — on-device Whisper transcription for Apple devices.',
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
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-de.webp',
    title: 'Rescript-Rezension: Video und Audio über das Transkript schneiden',
    seoTitle: 'Rescript-Rezension: Video über das Transkript schneiden',
    intro:
      'Rescript 1.2.5 ist ein Editor für Browser und Desktop, der Video oder Audio mit Whisper transkribiert, das Material beim Löschen von Wörtern schneidet und eine Zeile mit der Stimme des ursprünglichen Sprechers neu sprechen kann. Laut Website und README laufen Transkription, Bearbeitung und Export auf Ihrem eigenen Gerät, und nichts wird hochgeladen. Die Lizenz ist PolyForm Noncommercial 1.0.0, für die kommerzielle Nutzung ist daher eine kostenpflichtige Lizenz nötig. Diese Rezension beruht auf der offiziellen Website, dem GitHub-Repository mit seinen Releases sowie den Seiten zu Datenschutz, Nutzungsbedingungen und zulässiger Nutzung, geprüft am 18. November 2026. PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'Rescript schneidet Video und Audio durch Löschen von Wörtern im Whisper-Transkript. Kostenlos für nicht kommerzielle Nutzung. Das ist belegt.',
    twitterDescription:
      'Rescript: Video- und Audio-Editor mit einsehbarem Quellcode, der beim Löschen von Wörtern aus einem Whisper-Transkript das Material schneidet. Das ist belegt.',
    audience:
      'Podcaster, Interviewer und Videomacher, die sprachbasierte Aufnahmen für nicht kommerzielle Zwecke schneiden, Personen mit sensiblen Aufnahmen, die die Bearbeitung auf dem eigenen Rechner halten möchten, und Editoren, die einen textbasierten Rohschnitt wollen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rescript Rezension',
    targetKeywords: [
      'Rescript Rezension',
      'Video über Text schneiden',
      'transkriptbasierter Videoeditor',
      'lokaler Whisper-Videoeditor',
      'Füllwörter aus Video entfernen',
      'Offline-Editor mit Transkription',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript ist ein Editor mit einsehbarem Quellcode (source-available), für nicht kommerzielle Nutzung kostenlos, der Video und Audio laut Hersteller mit Whisper auf Ihrem eigenen Gerät transkribiert und das Material beim Löschen von Wörtern aus dem Transkript schneidet.** Er läuft im Browser und als Desktop-App für macOS, Windows und Linux, kann eine Zeile mit der Stimme des Sprechers neu sprechen und exportiert Video, Audio, Untertitel oder Zeitleisten für andere Editoren. Kommerzielle Nutzung erfordert eine kostenpflichtige Lizenz, und PromptQuorum hat die App nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Rescript, und für wen ist es gedacht?',
        answer:
          'Rescript ist ein transkriptbasierter Editor für sprachlastige Video- und Audioaufnahmen, der offen auf GitHub entwickelt wird. Er eignet sich für Personen, die Interviews, Podcasts und Talking-Head-Videos schneiden und die Bearbeitung auf dem eigenen Rechner behalten möchten.',
        bullets: [
          'Lizenziert unter PolyForm Noncommercial 1.0.0: kostenlos für nicht kommerzielle Nutzung, für kommerzielle Nutzung ist eine kostenpflichtige Lizenz nötig.',
          'Laut Hersteller läuft die Whisper-Transkription mit Wortzeitmarken und Sprecherlabels auf Ihrem Gerät, im Browser oder in Desktop-Apps für macOS, Windows und Linux.',
          'Wörter löschen, um das Material zu schneiden; ein Klick entfernt „um“, „uh“ und Pausen ab 0,3 Sekunden; Export von Video, Audio, Transkript, Untertiteln oder Zeitleisten für andere Editoren.',
          'Regenerate spricht eine Zeile mit der geklonten Stimme des Sprechers in sechs Sprachen neu; die Richtlinie des Herstellers zur zulässigen Nutzung verlangt die Einwilligung des Sprechers.',
          'Repository im Juli 2026 angelegt; Version 1.2.5 erschien am 29. Oktober 2026, der letzte Commit auf dem Hauptzweig stammt vom 5. November 2026.',
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
            text: 'Rescript ist ein Editor mit einsehbarem Quellcode, der laut Hersteller Video und Audio auf Ihrem Rechner transkribiert und das Material beim Löschen von Wörtern aus dem Transkript schneidet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Textverarbeitung für eine Aufnahme vor: Das Transkript ist die Zeitleiste. Löschen Sie einen Satz, wird das passende Material geschnitten; tippen Sie einen Ersatz ein, spricht Rescript ihn auf Wunsch mit der Stimme der Person.',
          },
        ],
        items: [
          'Nutzung im Browser oder Download einer Desktop-App von der GitHub-Release-Seite: DMG für macOS, Setup-EXE für Windows, AppImage oder DEB für Linux.',
          'Laut Hersteller laufen Transkription mit Whisper, Sprecherlabels und Export auf Ihrem Gerät; die Modelle werden einmal von Hugging Face geladen und dann zwischengespeichert.',
          'Kostenlos für nicht kommerzielle Nutzung; kommerzielle Nutzung erfordert eine kostenpflichtige Lizenz, und der Hersteller sagt, dass später optionale kostenpflichtige Funktionen auf seinen Servern hinzukommen können.',
          'Telemetrie und Absturzberichte sind standardmäßig aktiv und lassen sich in den Einstellungen abschalten; der Hersteller listet, was sie enthalten.',
          'PromptQuorum hat die App nicht getestet, daher sind Transkriptionsgenauigkeit, Schnittqualität und Stimmqualität nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Website sagt, der Editor brauche kein Konto und keinen Upload, und die Datenschutzseite sagt, Medien, Transkripte und geklonte Stimmen verließen das Gerät nie. PromptQuorum hat den Netzwerkverkehr nicht geprüft und kann dies daher nicht über die Angaben des Herstellers hinaus bestätigen.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Rescript ist ein transkriptbasierter Editor für Video und Audio, veröffentlicht als Web-App und als Desktop-App für macOS, Windows und Linux unter der Lizenz PolyForm Noncommercial 1.0.0.**',
          'Er wird offen unter [github.com/wassgha/rescript](https://github.com/wassgha/rescript) entwickelt, wo die Lizenzdatei Wassim Gharbi und Mitwirkende nennt. Das Repository wurde im Juli 2026 angelegt; Version 1.2.5 erschien am 29. Oktober 2026, und der letzte Commit auf dem Hauptzweig stammt vom 5. November 2026. Die Entwicklung ist also aktiv, eine Warnung vor einem veralteten Projekt entfällt. Der Hersteller nennt das Projekt Open Source; da die Lizenz kommerzielle Nutzung ausschließt, beschreibt PromptQuorum es als Projekt mit einsehbarem Quellcode (source-available). Website und Datenschutzseite sprechen von „we“ und nennen weder Firma noch Anschrift noch Impressum, die Nutzungsbedingungen unterliegen aber dem Recht des Bundesstaats Kalifornien, USA.',
          'Laut Hersteller ziehen Sie eine Video- oder Audiodatei hinein, Whisper transkribiert sie auf Ihrem Gerät mit Zeitmarken pro Wort und Sprecherlabels, und das Löschen von Wörtern im Transkript schneidet das passende Material. Eine Zeitleiste zeigt Wellenform, Wortleiste und Schnittbereiche, und statt zu transkribieren können Sie eigene SRT-, VTT- oder JSON-Untertitel importieren. Die Funktion Regenerate schreibt eine markierte Zeile um und spricht sie mit der Stimme des Sprechers, die auf Ihrem Rechner aus etwa zehn Sekunden seines bereits in der Datei vorhandenen Tons geklont wird.',
          'PromptQuorum hat die App nicht ausgeführt und weder Transkriptionsgenauigkeit, Schnittqualität, Exporttreue noch die Qualität der neu gesprochenen Stimme geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können Rescript im Browser ohne Installation nutzen oder eine Desktop-App aus den Paketen auf der GitHub-Release-Seite laden, die die Website für jede Plattform verlinkt.**',
          'Die Version v1.2.5 listet ein DMG für macOS auf Apple Silicon und Intel, eine Setup-EXE für Windows sowie ein AppImage und ein DEB-Paket für Linux. Laut README aktualisieren sich die Desktop-Builds über GitHub Releases selbst, und die macOS-Builds sind signiert und notarisiert.',
        ],
        columns: ['Plattform', 'Paket'],
        rows: [
          { 'Plattform': 'macOS (Apple Silicon)', 'Paket': 'DMG' },
          { 'Plattform': 'macOS (Intel)', 'Paket': 'DMG (x64)' },
          { 'Plattform': 'Windows', 'Paket': 'Setup-EXE' },
          { 'Plattform': 'Linux', 'Paket': 'AppImage oder DEB' },
          { 'Plattform': '[Web-App](https://app.getrescript.com)', 'Paket': 'Browser, ohne Installation (Chromium empfohlen)' },
          { 'Plattform': '[Quellcode](https://github.com/wassgha/rescript)', 'Paket': 'Aus dem Quellcode bauen (siehe README)' },
        ],
        note: 'Download über die [GitHub-Release-Seite](https://github.com/wassgha/rescript/releases/latest) oder die [Web-App](https://app.getrescript.com). PromptQuorum hat die Installer nicht ausgeführt und nicht geprüft, ob sie vom Betriebssystem als signiert oder notarisiert gelten; laut README sind es die macOS-Builds.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Rescript braucht einen aktuellen Mac-, Windows- oder Linux-Rechner oder einen Chromium-basierten Browser; Mindestwerte für Arbeitsspeicher oder GPU nennt der Hersteller nicht.**',
          'Die Liste stammt aus README und Website. Die Web-App benötigt SharedArrayBuffer und nutzt für die Transkription WebGPU, sofern verfügbar, sonst WASM. Regenerate lädt pro Sprache ein Stimmpaket: laut Hersteller etwa 140 MB für die schnelleren und etwa 360 MB für die hochwertigeren Modelle. PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Desktop', 'Angegebener Wert': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { 'Punkt': 'Browser', 'Angegebener Wert': 'Chromium-basiert empfohlen' },
          { 'Punkt': 'Transkription', 'Angegebener Wert': 'Whisper Base oder Small' },
          { 'Punkt': 'Sprecherlabels', 'Angegebener Wert': 'pyannote-segmentation-3.0' },
          { 'Punkt': 'Stimmpaket', 'Angegebener Wert': '~140 MB oder ~360 MB je Sprache' },
          { 'Punkt': 'Speicher und GPU', 'Angegebener Wert': 'Nicht veröffentlicht' },
        ],
        note: 'Die Whisper- und Sprechermodelle werden einmal von Hugging Face geladen und dann zwischengespeichert; danach arbeitet der Editor laut Hersteller ohne Netzwerkverbindung.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Rescript ist zuerst ein Transkript-Editor; Zeitleiste, Füllwort-Entfernung, Sprecherlabels und Stimmregeneration ergänzen ihn.** Alle folgenden Punkte sind Herstellerangaben aus Website und README.',
        ],
        items: [
          'Wortgenaues Bearbeiten: Wörter im Transkript markieren und löschen; die Wiedergabe überspringt jeden Schnitt in Echtzeit, und der Schnitt folgt den gesprochenen Wörtern.',
          'Bereinigung: Ein Klick entfernt „um“, „uh“ und ähnliche Füllwörter, ein weiterer entfernt Pausen ab 0,3 Sekunden in der ganzen Datei.',
          'Transkription: Whisper Base oder Whisper Small mit Wortzeitmarken, oder stattdessen eine vorhandene SRT-, VTT- oder JSON-Untertiteldatei importieren.',
          'Sprecher: Automatische Sprecherlabels gruppieren das Transkript danach, wer spricht, und Sprecher lassen sich umbenennen.',
          'Zeitleiste: Wellenform, Wortleiste mit ziehbaren Zeit-Griffen, Teilen, Schnittbereiche, Zoom und Verschieben, sodass sich Schnitte über Wortgrenzen hinaus verfeinern lassen.',
          'Regenerate: eine markierte Zeile umschreiben und mit der Stimme des Sprechers auf Englisch, Spanisch, Französisch, Deutsch, Italienisch oder Portugiesisch sprechen lassen; ein Passungsanzeiger warnt vor dem Erzeugen, wenn die neue Zeile nicht in die Lücke passt.',
          'Export: MP4 oder WebM bis 4K; Audio als M4A, MP3 oder WAV; Transkripte als TXT, Markdown, DOCX oder PDF; Untertitel als SRT, VTT oder JSON; Zeitleisten für DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude oder Blender.',
          'Oberflächensprachen: Deutsch, Englisch, Spanisch, Französisch, Italienisch, Japanisch, Koreanisch, Portugiesisch und Chinesisch (vereinfacht und traditionell), laut den Release-Notes zu v1.2.5.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Hersteller bleiben Video, Audio, Transkripte, Projekte, Exporte und geklonte Stimmen auf Ihrem Gerät; PromptQuorum hat den Netzwerkverkehr nicht geprüft und kann dies nicht bestätigen.**',
          'Die Datenschutzseite vom 8. August 2026 sagt, es gebe keinen Upload-Schritt, der Editor brauche kein Konto, und Projekte würden im Browser-Speicher oder auf der Festplatte gesichert. Sie nennt auch, was das Netzwerk nutzt: einen einmaligen Download der Sprach-, Sprecher- und Stimmmodelle von Hugging Face, Update-Prüfungen gegen GitHub Releases bei den Desktop-Apps, eine optionale E-Mail-Anmeldung auf der Website sowie anonyme Telemetrie und Absturzberichte.',
          'Laut README sind anonyme Nutzungsstatistiken und Absturzberichte standardmäßig aktiv und lassen sich in den Einstellungen unter „Privacy“ abschalten. Die Datenschutzseite sagt, die Telemetrie enthalte eine zufällige Installations-ID, einen von vier Ereignisnamen und grobe Eigenschaften wie App-Version, Betriebssystemfamilie sowie genutztes Modell oder Exportformat; IP-Adressen würden nicht gespeichert, und Absturzberichte gingen ohne Mediendateinamen an Sentry. Die Website selbst nutzt Vercel Web Analytics und möglicherweise Google Analytics.',
          'Der Hersteller gibt an, geklonte Stimmen würden im Arbeitsspeicher Ihres Rechners erzeugt und kein Stimmprofil auf einem Server gespeichert. Die Richtlinie zur zulässigen Nutzung verlangt die informierte Einwilligung der Person, deren Stimme neu erzeugt wird, und weist darauf hin, dass die Rechtslage zu synthetischen Stimmen je nach Land unterschiedlich ist; Regenerate ist zum Korrigieren eigener Aufnahmen gedacht, und die rechtmäßige Nutzung liegt in Ihrer Verantwortung. PromptQuorum gibt keine Rechtsberatung.',
          'Der Quellcode ist auf GitHub öffentlich, sodass sich der Datenfluss prüfen lässt.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Rescript passt zu Personen, die sprachlastige Aufnahmen für nicht kommerzielle Zwecke schneiden und die Arbeit auf dem eigenen Rechner behalten möchten.**',
        ],
        items: [
          'Podcaster, Interviewer und Hobby-Videomacher, die Füllwörter entfernen und Takes durch Textbearbeitung überarbeiten möchten.',
          'Personen mit sensiblen Aufnahmen, etwa Interviews oder unveröffentlichtem Material, die ein Werkzeug bevorzugen, das nach eigener Aussage nie Medien hochlädt.',
          'Editoren, die einen Rohschnitt per Text wollen und anschließend eine Zeitleiste nach DaVinci Resolve, Premiere, Final Cut oder Reaper exportieren.',
          'Leserinnen und Leser, die ein Projekt mit öffentlich einsehbarem Quellcode bevorzugen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Rescript passt in manchen Situationen schlecht, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: kommerzielle Arbeit. Die Lizenz deckt private Projekte, Studium, Forschung und Evaluation ab; laut Hersteller braucht kommerzielle Nutzung eine separate kostenpflichtige Lizenz, die per E-Mail angefragt wird, und PromptQuorum fand keinen veröffentlichten Preis.',
          'Nicht geeignet: wer heute ein ausgereiftes Produkt braucht. Das Repository entstand im Juli 2026, und die eigenen Bedingungen des Herstellers sagen, dass Transkription und synthetisierte Sprache Fehler machen.',
          'Nicht überprüft: Transkriptionsgenauigkeit, Schnittqualität, Exporttreue und die Qualität neu erzeugter Stimmen. PromptQuorum hat die App nicht ausgeführt.',
          'Nicht überprüft: die Aussage, dass nichts das Gerät verlässt, neben standardmäßig aktiver Telemetrie, Absturzberichten und Update-Prüfungen; PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
          'Nicht überprüft: ob die Installer für macOS, Windows und Linux signiert oder notarisiert sind; laut README sind es nur die macOS-Builds, und für Windows oder Linux nennt das README keine Signatur.',
          'Nicht überprüft: Speicher- und Geschwindigkeitsbedarf, da kein Minimum veröffentlicht ist, und welches Whisper-Modell zu welchem Rechner passt.',
          'Nicht überprüft: wer das Projekt betreibt und wie viele Menschen es nutzen. Es wurde weder Firmenname noch Impressum gefunden, und PromptQuorum suchte nicht nach unabhängigen Tests.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Rescript überschneidet sich mit anderen Werkzeugen, die Sprachmedien transkribieren und schneiden; PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'Rescript', 'In Quellen genannt': 'PolyForm NC; Mac/Windows/Linux/Web; Video per Transkript schneiden' },
          { 'Werkzeug': '[FunClip](/de/power-local-llm/funclip-review)', 'In Quellen genannt': 'MIT; lokale Web-Oberfläche; schneidet Video per Spracherkennungstext' },
          { 'Werkzeug': '[Subtitle Edit](/de/power-local-llm/subtitle-edit-review)', 'In Quellen genannt': 'MIT; Windows/macOS/Linux; Untertiteleditor mit Whisper' },
          { 'Werkzeug': '[Aiko](/de/power-local-llm/aiko-review)', 'In Quellen genannt': 'Closed Source; iPhone/iPad/Mac; Whisper-Transkripte auf dem Gerät' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Brauche ich ein Konto, um Rescript zu nutzen?',
            a: 'Nein, laut Hersteller. Der Editor braucht kein Konto. Ein per E-Mail zugesandter Anmeldelink meldet Sie nur auf der Website an, und die E-Mail-Anmeldung ist optional.',
          },
          {
            q: 'Ist Rescript kostenlos für kommerzielle Nutzung?',
            a: 'Nein. Es steht unter PolyForm Noncommercial 1.0.0, das private Projekte, Studium, Forschung und Evaluation abdeckt. Laut Hersteller braucht kommerzielle Nutzung eine separate kostenpflichtige Lizenz, die per E-Mail angefragt wird, und PromptQuorum fand keinen veröffentlichten Preis.',
          },
          {
            q: 'Verlassen meine Medien meinen Rechner?',
            a: 'Laut Hersteller nein: Transkription, Bearbeitung, Stimmregeneration und Export laufen auf Ihrem Gerät, und heruntergeladen werden nur die einmaligen Modelldateien sowie Update-Prüfungen. Telemetrie und Absturzberichte sind standardmäßig aktiv und lassen sich in den Einstellungen abschalten. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
          },
          {
            q: 'Kann Rescript ändern, was jemand gesagt hat?',
            a: 'Ja, mit Regenerate, das eine umgeschriebene Zeile mit der geklonten Stimme des Sprechers in sechs Sprachen spricht. Die Richtlinie zur zulässigen Nutzung verlangt die informierte Einwilligung des Sprechers, und die Rechtslage zu synthetischen Stimmen unterscheidet sich je nach Land; prüfen Sie daher, was für Sie gilt. PromptQuorum hat die Stimmqualität nicht getestet.',
          },
          {
            q: 'Wie oft wird Rescript aktualisiert?',
            a: 'GitHub listet Version 1.2.3 am 3. Oktober 2026, 1.2.4 am 5. Oktober 2026 und 1.2.5 am 29. Oktober 2026, mit Commits auf dem Hauptzweig zuletzt am 5. November 2026. Die Desktop-Apps prüfen GitHub Releases auf Updates.',
          },
          {
            q: 'Auf welchen Plattformen läuft Rescript?',
            a: 'Laut Hersteller im Browser (Chromium-basiert empfohlen) und als Desktop-App für macOS (Apple Silicon und Intel), Windows und Linux. Die Version 1.2.5 listet ein DMG, eine Setup-EXE, ein AppImage und ein DEB-Paket.',
          },
          {
            q: 'Ist Rescript Open Source?',
            a: 'Der Hersteller nennt das Projekt Open Source, doch die Lizenz ist PolyForm Noncommercial 1.0.0, die kommerzielle Nutzung ausschließt; PromptQuorum beschreibt es daher als Quellcode-einsehbar (source-available). Der Code ist auf GitHub öffentlich und für nicht kommerzielle Nutzung kostenlos; kommerzielle Nutzung braucht eine kostenpflichtige Lizenz.',
          },
          {
            q: 'Funktioniert Rescript ohne Internetverbindung?',
            a: 'Laut Hersteller werden die Whisper- und Sprechermodelle einmal von Hugging Face heruntergeladen und dann zwischengespeichert; danach funktioniert der Editor ohne Netzwerkverbindung. Die Desktop-Apps prüfen GitHub Releases auf Updates. PromptQuorum hat die Offline-Nutzung nicht getestet.',
          },
          {
            q: 'Welche Formate kann Rescript exportieren?',
            a: 'Laut Hersteller: MP4- oder WebM-Video bis 4K; Audio als M4A, MP3 oder WAV; Transkripte als TXT, Markdown, DOCX oder PDF; Untertitel als SRT, VTT oder JSON; und Zeitleisten für DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude oder Blender. PromptQuorum hat die Exportqualität nicht geprüft.',
          },
          {
            q: 'Kann Rescript Füllwörter und Pausen entfernen?',
            a: 'Laut Website entfernt ein Klick „um“, „uh“ und ähnliche Füllwörter, ein weiterer entfernt Pausen ab 0,3 Sekunden in der ganzen Datei. PromptQuorum hat nicht getestet, wie genau sie erkannt werden.',
          },
          {
            q: 'Kennzeichnet Rescript, wer spricht?',
            a: 'Laut Hersteller gruppieren automatische Sprecherlabels das Transkript danach, wer spricht, und Sprecher lassen sich umbenennen; die README nennt dafür pyannote-segmentation-3.0. PromptQuorum hat die Labels nicht getestet.',
          },
          {
            q: 'Was erfasst die Telemetrie von Rescript, und kann ich sie abschalten?',
            a: 'Laut README sind anonyme Nutzungsstatistiken und Absturzberichte standardmäßig aktiv und lassen sich in den Einstellungen unter „Privacy“ abschalten. Laut Datenschutzseite enthält die Telemetrie eine zufällige Installations-ID, einen von vier Ereignisnamen und grobe Angaben wie App-Version, Betriebssystemfamilie und verwendetes Modell oder Exportformat; IP-Adressen werden nicht erfasst, und Absturzberichte gehen ohne Mediendateinamen an Sentry. PromptQuorum hat den Netzwerkverkehr nicht geprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Rescript ist einen Blick wert, wenn Sie Interviews, Podcasts oder Talking-Head-Videos für nicht kommerzielle Zwecke schneiden und transkriptbasiertes Bearbeiten wollen, das laut Hersteller auf dem eigenen Rechner läuft.**',
          'Auf dem Papier deckt es viel ab: wortgenaue Schnitte, Entfernung von Füllwörtern und Pausen, Sprecherlabels, Stimmregeneration und Exporte für andere Editoren. Die Entwicklung ist aktiv, mit drei Releases zwischen dem 3. und 29. Oktober 2026 und einem Commit am 5. November 2026.',
          'Die Nachteile sind real: Kommerzielle Nutzung braucht eine kostenpflichtige Lizenz ohne veröffentlichten Preis, das Projekt ist erst wenige Monate alt, die eigenen Bedingungen des Herstellers sagen, dass Transkription und synthetisierte Sprache Fehler machen, und PromptQuorum hat nichts getestet. Probieren Sie es an einer Kopie einer Aufnahme aus und prüfen Sie Transkript und Schnitte, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Rescript-Website](https://getrescript.com) — Funktionen, FAQ und Downloads, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://www.getrescript.com/privacy) — was auf dem Gerät bleibt und was erhoben wird, Stand 8. August 2026, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://www.getrescript.com/terms) — Lizenz, anwendbares Recht und Kontakt, Stand 8. August 2026, geprüft am 18. November 2026.',
          '[Richtlinie zur zulässigen Nutzung](https://www.getrescript.com/acceptable-use) — Einwilligungsregeln für Regenerate und Lizenzgrenzen, geprüft am 18. November 2026.',
          '[Regenerate-Seite](https://www.getrescript.com/regenerate-speech) — Sprachen, Stimmmodell und Paketgrößen, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/wassgha/rescript) — Lizenz, Erstellungsdatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — Funktionen, Technik, Telemetrie und Lizenz, geprüft am 18. November 2026.',
          '[GitHub Releases](https://github.com/wassgha/rescript/releases) — Release-Daten, Pakete und die Notes zu v1.2.5, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[FunClip-Rezension](/de/power-local-llm/funclip-review) — Video per Spracherkennungstext schneiden, in einer lokalen Web-Oberfläche.',
          '[Subtitle-Edit-Rezension](/de/power-local-llm/subtitle-edit-review) — ein Untertiteleditor mit lokaler Transkription der Whisper-Familie.',
          '[Aiko-Rezension](/de/power-local-llm/aiko-review) — Whisper-Transkription auf dem Gerät für Apple-Geräte.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-fr.webp',
    title: 'Avis sur Rescript : monter vidéo et audio en modifiant la transcription',
    seoTitle: 'Avis sur Rescript : monter une vidéo via sa transcription',
    intro:
      'Rescript 1.2.5 est un éditeur pour navigateur et bureau qui transcrit une vidéo ou un audio avec Whisper, coupe les images quand vous supprimez des mots et peut redire une phrase avec la voix du locuteur d’origine. Selon son site et son README, la transcription, le montage et l’export s’exécutent sur votre appareil et rien n’est envoyé en ligne. La licence est PolyForm Noncommercial 1.0.0 : un usage commercial exige donc une licence payante. Cet avis s’appuie sur le site officiel, le dépôt GitHub avec ses versions, ainsi que les pages de confidentialité, de conditions d’utilisation et d’usage acceptable, consultés le 18 novembre 2026. PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Rescript, éditeur à code source disponible, coupe vidéo et audio en supprimant des mots d’une transcription Whisper. Gratuit hors usage commercial.',
    twitterDescription:
      'Rescript : éditeur vidéo et audio à code source disponible qui coupe les images quand vous supprimez des mots d’une transcription Whisper. Ce qui est confirmé.',
    audience:
      'Podcasteurs, intervieweurs et vidéastes qui montent des enregistrements parlés pour un usage non commercial, personnes aux enregistrements sensibles qui veulent garder le montage sur leur ordinateur, et monteurs qui souhaitent un premier montage par le texte',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis sur Rescript',
    targetKeywords: [
      'avis Rescript',
      'monter une vidéo par le texte',
      'éditeur vidéo basé sur la transcription',
      'éditeur vidéo Whisper local',
      'supprimer les mots de remplissage d’une vidéo',
      'éditeur avec transcription hors ligne',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript est un éditeur à code source disponible, gratuit hors usage commercial, qui transcrit vidéo et audio avec Whisper sur votre appareil, selon le fabricant, et coupe les images quand vous supprimez des mots de la transcription.** Il fonctionne dans un navigateur et en application de bureau pour macOS, Windows et Linux, peut redire une phrase avec la voix du locuteur et exporte vidéo, audio, sous-titres ou timelines pour d’autres logiciels de montage. Un usage commercial exige une licence payante, et PromptQuorum n’a pas testé l’application.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce que Rescript et à qui s’adresse-t-il ?',
        answer:
          'Rescript est un éditeur basé sur la transcription, pour la vidéo et l’audio centrés sur la parole, développé en ouvert sur GitHub. Il convient à ceux qui montent des interviews, des podcasts et des vidéos face caméra et veulent garder le montage sur leur ordinateur.',
        bullets: [
          'Licence PolyForm Noncommercial 1.0.0 : gratuit hors usage commercial, et un usage commercial exige une licence payante.',
          'Selon le fabricant, la transcription Whisper avec horodatage par mot et étiquettes de locuteurs s’exécute sur votre appareil, dans le navigateur ou en application de bureau pour macOS, Windows et Linux.',
          'Supprimez des mots pour couper les images ; un clic retire « um », « uh » et les silences de 0,3 seconde ou plus ; export de la vidéo, de l’audio, de la transcription, des sous-titres ou de timelines pour d’autres logiciels.',
          'Regenerate redit une phrase avec la voix clonée du locuteur dans six langues ; la politique d’usage acceptable du fabricant exige le consentement du locuteur.',
          'Dépôt créé en juillet 2026 ; la version 1.2.5 est sortie le 29 octobre 2026 et le dernier commit sur la branche principale date du 5 novembre 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Rescript est un éditeur à code source disponible qui, selon le fabricant, transcrit vidéo et audio sur votre ordinateur et coupe les images quand vous supprimez des mots de la transcription.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme un traitement de texte pour un enregistrement : la transcription sert de timeline. Supprimez une phrase et les images correspondantes sont coupées ; saisissez un remplacement et, si vous le souhaitez, Rescript le prononce avec la voix de la personne.',
          },
        ],
        items: [
          'Utilisation dans un navigateur, ou téléchargement d’une application de bureau depuis la page des versions GitHub : DMG pour macOS, EXE d’installation pour Windows, AppImage ou DEB pour Linux.',
          'Selon le fabricant, la transcription Whisper, les étiquettes de locuteurs et l’export s’exécutent sur votre appareil ; les modèles sont téléchargés une fois depuis Hugging Face puis mis en cache.',
          'Gratuit hors usage commercial ; un usage commercial exige une licence payante, et le fabricant indique que des fonctions payantes facultatives sur ses serveurs pourraient arriver plus tard.',
          'La télémétrie et les rapports de plantage sont actifs par défaut et se désactivent dans les réglages ; le fabricant détaille leur contenu.',
          'PromptQuorum n’a pas testé l’application : la précision de la transcription, la qualité des coupes et celle de la voix ne sont donc pas vérifiées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le site indique que l’éditeur n’exige ni compte ni envoi de fichiers, et la page de confidentialité affirme que médias, transcriptions et voix clonées ne quittent jamais l’appareil. PromptQuorum n’a pas inspecté le trafic réseau et ne peut donc pas le confirmer au-delà des déclarations du fabricant.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Rescript est un éditeur basé sur la transcription pour la vidéo et l’audio, publié comme application web et comme application de bureau pour macOS, Windows et Linux sous la licence PolyForm Noncommercial 1.0.0.**',
          'Il est développé en ouvert sur [github.com/wassgha/rescript](https://github.com/wassgha/rescript), où le fichier de licence cite Wassim Gharbi et les contributeurs. Le dépôt a été créé en juillet 2026 ; la version 1.2.5 est sortie le 29 octobre 2026 et le dernier commit sur la branche principale date du 5 novembre 2026 : le développement est actif et aucun avertissement de projet délaissé ne s’applique. Le fabricant qualifie le projet d’open source ; comme la licence interdit l’usage commercial, PromptQuorum le décrit comme à code source disponible. Le site et la page de confidentialité disent « we » et ne nomment ni société, ni adresse, ni mentions légales, mais les conditions d’utilisation relèvent du droit de l’État de Californie, aux États-Unis.',
          'Selon le fabricant, vous déposez un fichier vidéo ou audio, Whisper le transcrit sur votre appareil avec un horodatage par mot et des étiquettes de locuteurs, et la suppression de mots dans la transcription coupe les images correspondantes. Une timeline affiche la forme d’onde, une barre de mots et les zones coupées, et vous pouvez importer vos propres sous-titres SRT, VTT ou JSON au lieu de transcrire. La fonction Regenerate réécrit une phrase sélectionnée et la prononce avec la voix du locuteur, clonée sur votre machine à partir d’environ dix secondes de son audio déjà présent dans le fichier.',
          'PromptQuorum n’a pas exécuté l’application et n’a vérifié ni la précision de la transcription, ni la qualité des coupes, ni la fidélité de l’export, ni la qualité de la voix régénérée.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous pouvez utiliser Rescript dans un navigateur sans rien installer, ou télécharger une application de bureau parmi les paquets de sa page des versions GitHub, que le site relie pour chaque plateforme.**',
          'La version v1.2.5 propose un DMG pour macOS sur Apple Silicon et Intel, un EXE d’installation pour Windows, ainsi qu’un AppImage et un paquet DEB pour Linux. Selon le README, les builds de bureau se mettent à jour via GitHub Releases et les builds macOS sont signés et notarisés.',
        ],
        columns: ['Plateforme', 'Paquet'],
        rows: [
          { 'Plateforme': 'macOS (Apple Silicon)', 'Paquet': 'DMG' },
          { 'Plateforme': 'macOS (Intel)', 'Paquet': 'DMG (x64)' },
          { 'Plateforme': 'Windows', 'Paquet': 'EXE d’installation' },
          { 'Plateforme': 'Linux', 'Paquet': 'AppImage ou DEB' },
          { 'Plateforme': '[Application web](https://app.getrescript.com)', 'Paquet': 'Navigateur, sans installation (Chromium conseillé)' },
          { 'Plateforme': '[Code source](https://github.com/wassgha/rescript)', 'Paquet': 'Compilation depuis les sources (voir le README)' },
        ],
        note: 'Téléchargez depuis la [page des versions GitHub](https://github.com/wassgha/rescript/releases/latest) ou ouvrez l’[application web](https://app.getrescript.com). PromptQuorum n’a pas exécuté les installateurs et n’a pas vérifié s’ils sont signés ou notarisés par le système d’exploitation ; le README l’indique pour les builds macOS.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Rescript demande un ordinateur récent sous macOS, Windows ou Linux, ou un navigateur basé sur Chromium ; le fabricant ne publie aucun minimum de mémoire ou de GPU.**',
          'La liste vient du README et du site. L’application web exige SharedArrayBuffer et utilise WebGPU pour la transcription quand il est disponible, avec repli sur WASM. Regenerate télécharge un pack de voix par langue : environ 140 Mo pour les modèles rapides et environ 360 Mo pour les modèles de meilleure qualité, selon le fabricant. PromptQuorum n’a mesuré ni la mémoire utilisée ni la vitesse.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Bureau', 'Valeur indiquée': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { 'Élément': 'Navigateur', 'Valeur indiquée': 'Chromium conseillé' },
          { 'Élément': 'Transcription', 'Valeur indiquée': 'Whisper Base ou Small' },
          { 'Élément': 'Étiquettes de locuteurs', 'Valeur indiquée': 'pyannote-segmentation-3.0' },
          { 'Élément': 'Pack de voix', 'Valeur indiquée': '~140 Mo ou ~360 Mo par langue' },
          { 'Élément': 'Mémoire et GPU', 'Valeur indiquée': 'Non publié' },
        ],
        note: 'Les modèles Whisper et de locuteurs sont téléchargés une fois depuis Hugging Face puis mis en cache ; ensuite, l’éditeur fonctionne sans connexion réseau, selon le fabricant.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Rescript est d’abord un éditeur de transcription ; la timeline, le retrait des mots parasites, les étiquettes de locuteurs et la régénération de voix s’y ajoutent.** Tous les points ci-dessous sont des déclarations du fabricant, tirées du site et du README.',
        ],
        items: [
          'Montage au mot près : sélectionnez des mots dans la transcription et supprimez-les ; la lecture saute chaque coupe en temps réel et la coupe suit les mots prononcés.',
          'Nettoyage : un clic retire « um », « uh » et les mots parasites similaires, un autre retire les silences de 0,3 seconde ou plus dans tout le fichier.',
          'Transcription : Whisper Base ou Whisper Small avec horodatage par mot, ou import d’un fichier de sous-titres SRT, VTT ou JSON existant.',
          'Locuteurs : des étiquettes automatiques regroupent la transcription selon qui parle, et les locuteurs peuvent être renommés.',
          'Timeline : forme d’onde, barre de mots avec poignées de minutage déplaçables, découpe, zones coupées, zoom et défilement, pour affiner les coupes au-delà des limites de mots.',
          'Regenerate : réécrivez une phrase sélectionnée et faites-la prononcer avec la voix du locuteur en anglais, espagnol, français, allemand, italien ou portugais ; un indicateur d’ajustement prévient avant la génération si la nouvelle phrase ne tient pas dans l’espace disponible.',
          'Export : MP4 ou WebM jusqu’en 4K ; audio M4A, MP3 ou WAV ; transcriptions en TXT, Markdown, DOCX ou PDF ; sous-titres en SRT, VTT ou JSON ; timelines pour DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude ou Blender.',
          'Langues de l’interface : allemand, anglais, espagnol, français, italien, japonais, coréen, portugais et chinois (simplifié et traditionnel), selon les notes de version de la v1.2.5.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon le fabricant, vidéo, audio, transcriptions, projets, exports et voix clonées restent sur votre appareil ; PromptQuorum n’a pas inspecté le trafic réseau et ne peut pas le confirmer.**',
          'La page de confidentialité, datée du 8 août 2026, indique qu’il n’y a pas d’étape d’envoi, que l’éditeur n’exige aucun compte et que les projets sont enregistrés dans le stockage du navigateur ou sur disque. Elle énumère aussi ce qui utilise le réseau : un téléchargement unique des modèles de parole, de locuteurs et de voix depuis Hugging Face, la vérification des mises à jour auprès de GitHub Releases pour les applications de bureau, une inscription facultative par e-mail sur le site, ainsi que la télémétrie anonyme et les rapports de plantage.',
          'Selon le README, les statistiques d’usage anonymes et les rapports de plantage sont actifs par défaut et se désactivent dans les réglages, sous Privacy. La page de confidentialité indique que la télémétrie contient un identifiant d’installation aléatoire, l’un de quatre noms d’événement et des propriétés générales comme la version de l’application, la famille de système d’exploitation et le modèle ou le format d’export utilisé ; les adresses IP ne seraient pas enregistrées et les rapports de plantage partiraient vers Sentry sans noms de fichiers médias. Le site lui-même utilise Vercel Web Analytics et peut utiliser Google Analytics.',
          'Le fabricant affirme que les voix clonées sont créées en mémoire sur votre machine et qu’aucun profil vocal n’est stocké sur un serveur. La politique d’usage acceptable exige le consentement éclairé de la personne dont la voix est régénérée et précise que les lois sur les voix synthétiques varient selon les pays ; Regenerate sert à corriger vos propres enregistrements, et l’utiliser légalement relève de votre responsabilité. PromptQuorum ne donne pas de conseil juridique.',
          'Le code source est public sur GitHub : le flux de données peut donc être vérifié.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Rescript convient à ceux qui montent des enregistrements parlés pour un usage non commercial et veulent garder le travail sur leur ordinateur.**',
        ],
        items: [
          'Podcasteurs, intervieweurs et vidéastes amateurs qui veulent retirer les mots parasites et retravailler des prises en éditant du texte.',
          'Personnes aux enregistrements sensibles, comme des interviews ou des images inédites, qui préfèrent un outil dont le fabricant dit qu’il n’envoie jamais de médias.',
          'Monteurs qui veulent un premier montage par le texte, puis un export de timeline vers DaVinci Resolve, Premiere, Final Cut ou Reaper.',
          'Lecteurs qui préfèrent un projet dont le code est public.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        content: [
          '**Rescript convient mal dans certaines situations, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : le travail commercial. La licence couvre les projets personnels, l’étude, la recherche et l’évaluation ; selon le fabricant, un usage commercial exige une licence payante distincte, demandée par e-mail, et PromptQuorum n’a trouvé aucun prix publié.',
          'Ne convient pas : qui a besoin d’un produit mature dès aujourd’hui. Le dépôt a été créé en juillet 2026, et les conditions du fabricant précisent que la transcription et la parole synthétisée font des erreurs.',
          'Non vérifié : précision de la transcription, qualité des coupes, fidélité de l’export et qualité des voix régénérées. PromptQuorum n’a pas exécuté l’application.',
          'Non vérifié : l’affirmation que rien ne quitte l’appareil, à côté d’une télémétrie, de rapports de plantage et d’une vérification des mises à jour actifs par défaut ; PromptQuorum n’a pas inspecté le trafic réseau.',
          'Non vérifié : si les installateurs macOS, Windows et Linux sont signés ou notarisés ; le README ne l’indique que pour les builds macOS et ne mentionne aucune signature pour Windows ou Linux.',
          'Non vérifié : besoins en mémoire et en vitesse, faute de minimum publié, et quel modèle Whisper convient à quel ordinateur.',
          'Non vérifié : qui exploite le projet et combien de personnes l’utilisent. Aucun nom de société ni mentions légales n’ont été trouvés, et PromptQuorum n’a pas cherché d’avis indépendants.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript face aux alternatives',
        itemHeadings: true,
        content: [
          '**Rescript recoupe d’autres outils qui transcrivent et coupent des médias parlés ; PromptQuorum ne l’a pas comparé à eux en conditions réelles.** Les outils ci-dessous figurent dans l’annuaire et sont décrits d’après leurs avis respectifs.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Rescript', 'Selon les sources': 'PolyForm NC ; Mac/Windows/Linux/web ; montage vidéo par transcription' },
          { 'Outil': '[FunClip](/fr/power-local-llm/funclip-review)', 'Selon les sources': 'MIT ; interface web locale ; coupe la vidéo via le texte de reconnaissance vocale' },
          { 'Outil': '[Subtitle Edit](/fr/power-local-llm/subtitle-edit-review)', 'Selon les sources': 'MIT ; Windows/macOS/Linux ; éditeur de sous-titres avec Whisper' },
          { 'Outil': '[Aiko](/fr/power-local-llm/aiko-review)', 'Selon les sources': 'Code fermé ; iPhone/iPad/Mac ; transcriptions Whisper sur l’appareil' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Faut-il un compte pour utiliser Rescript ?',
            a: 'Non, selon le fabricant. L’éditeur n’exige aucun compte. Un lien de connexion reçu par e-mail ne vous connecte que sur le site, et l’inscription par e-mail est facultative.',
          },
          {
            q: 'Rescript est-il gratuit pour un usage commercial ?',
            a: 'Non. Il est sous licence PolyForm Noncommercial 1.0.0, qui couvre les projets personnels, l’étude, la recherche et l’évaluation. Selon le fabricant, un usage commercial exige une licence payante distincte, demandée par e-mail, et PromptQuorum n’a trouvé aucun prix publié.',
          },
          {
            q: 'Mes médias quittent-ils mon ordinateur ?',
            a: 'Selon le fabricant, non : la transcription, le montage, la régénération de voix et l’export s’exécutent sur votre appareil, et seuls les fichiers de modèles (une fois) et les vérifications de mises à jour sont téléchargés. La télémétrie et les rapports de plantage sont actifs par défaut et se désactivent dans les réglages. PromptQuorum n’a pas inspecté le trafic réseau.',
          },
          {
            q: 'Rescript peut-il modifier ce que quelqu’un a dit ?',
            a: 'Oui, avec Regenerate, qui prononce une phrase réécrite avec la voix clonée du locuteur dans six langues. La politique d’usage acceptable exige le consentement éclairé du locuteur, et les lois sur les voix synthétiques varient selon les pays : vérifiez ce qui s’applique à vous. PromptQuorum n’a pas testé la qualité de la voix.',
          },
          {
            q: 'À quelle fréquence Rescript est-il mis à jour ?',
            a: 'GitHub liste la version 1.2.3 le 3 octobre 2026, la 1.2.4 le 5 octobre 2026 et la 1.2.5 le 29 octobre 2026, avec des commits sur la branche principale jusqu’au 5 novembre 2026. Les applications de bureau vérifient les mises à jour sur GitHub Releases.',
          },
          {
            q: 'Sur quelles plateformes Rescript fonctionne-t-il ?',
            a: 'Selon le fabricant, dans un navigateur (basé sur Chromium recommandé) et en application de bureau pour macOS (Apple Silicon et Intel), Windows et Linux. La version 1.2.5 propose un DMG, un EXE d’installation, un AppImage et un paquet DEB.',
          },
          {
            q: 'Rescript est-il open source ?',
            a: 'Le fabricant qualifie le projet d’open source, mais la licence est PolyForm Noncommercial 1.0.0, qui interdit l’usage commercial ; PromptQuorum le décrit donc comme à code source disponible. Le code est public sur GitHub et gratuit pour un usage non commercial ; l’usage commercial exige une licence payante.',
          },
          {
            q: 'Rescript fonctionne-t-il sans connexion Internet ?',
            a: 'Selon le fabricant, les modèles Whisper et de locuteurs sont téléchargés une fois depuis Hugging Face puis mis en cache, et l’éditeur fonctionne ensuite sans connexion réseau. Les applications de bureau vérifient les mises à jour sur GitHub Releases. PromptQuorum n’a pas testé l’usage hors ligne.',
          },
          {
            q: 'Quels formats Rescript peut-il exporter ?',
            a: 'Selon le fabricant : vidéo MP4 ou WebM jusqu’en 4K ; audio M4A, MP3 ou WAV ; transcriptions en TXT, Markdown, DOCX ou PDF ; sous-titres en SRT, VTT ou JSON ; et timelines pour DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude ou Blender. PromptQuorum n’a pas vérifié la fidélité de l’export.',
          },
          {
            q: 'Rescript peut-il supprimer les mots parasites et les silences ?',
            a: 'Selon le site, un clic retire « um », « uh » et les mots parasites similaires, et un autre retire les silences de 0,3 seconde ou plus dans tout le fichier. PromptQuorum n’a pas testé la précision de leur détection.',
          },
          {
            q: 'Rescript indique-t-il qui parle ?',
            a: 'Selon le fabricant, des étiquettes de locuteurs automatiques regroupent la transcription selon la personne qui parle, et les locuteurs peuvent être renommés ; le README cite pyannote-segmentation-3.0 pour cela. PromptQuorum n’a pas testé les étiquettes.',
          },
          {
            q: 'Que collecte la télémétrie de Rescript, et puis-je la désactiver ?',
            a: 'Le README indique que les statistiques d’usage anonymes et les rapports de plantage sont actifs par défaut et se désactivent dans les réglages, sous « Privacy ». Selon la page de confidentialité, la télémétrie comprend un identifiant d’installation aléatoire, l’un de quatre noms d’événements et des propriétés générales comme la version de l’application, la famille du système d’exploitation et le modèle ou le format d’export utilisé ; les adresses IP ne sont pas enregistrées, et les rapports de plantage vont à Sentry sans les noms de fichiers multimédias. PromptQuorum n’a pas inspecté le trafic réseau.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Rescript mérite un coup d’œil si vous montez des interviews, des podcasts ou des vidéos face caméra pour un usage non commercial et voulez un montage par la transcription qui, selon le fabricant, s’exécute sur votre ordinateur.**',
          'Sur le papier, il couvre beaucoup : coupes au mot près, retrait des mots parasites et des silences, étiquettes de locuteurs, régénération de voix et exports pour d’autres logiciels de montage. Le développement est actif, avec trois versions entre le 3 et le 29 octobre 2026 et un commit le 5 novembre 2026.',
          'Les compromis sont réels : l’usage commercial exige une licence payante sans prix publié, le projet n’a que quelques mois, les conditions du fabricant précisent que la transcription et la parole synthétisée font des erreurs, et PromptQuorum n’a rien testé. Essayez-le sur une copie d’un enregistrement et vérifiez la transcription et les coupes avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Rescript](https://getrescript.com) — fonctionnalités, FAQ et téléchargements, consulté le 18 novembre 2026.',
          '[Politique de confidentialité](https://www.getrescript.com/privacy) — ce qui reste sur l’appareil et ce qui est collecté, datée du 8 août 2026, consultée le 18 novembre 2026.',
          '[Conditions d’utilisation](https://www.getrescript.com/terms) — licence, droit applicable et contact, datées du 8 août 2026, consultées le 18 novembre 2026.',
          '[Politique d’usage acceptable](https://www.getrescript.com/acceptable-use) — règles de consentement pour Regenerate et limites de licence, consultée le 18 novembre 2026.',
          '[Page Regenerate](https://www.getrescript.com/regenerate-speech) — langues, modèle de voix et tailles des packs, consultée le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/wassgha/rescript) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — fonctionnalités, technologies, télémétrie et licence, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/wassgha/rescript/releases) — dates de versions, paquets et notes de la v1.2.5, consultées le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur FunClip](/fr/power-local-llm/funclip-review) — couper une vidéo via le texte de reconnaissance vocale, dans une interface web locale.',
          '[Avis sur Subtitle Edit](/fr/power-local-llm/subtitle-edit-review) — un éditeur de sous-titres avec transcription locale de la famille Whisper.',
          '[Avis sur Aiko](/fr/power-local-llm/aiko-review) — transcription Whisper sur l’appareil pour les appareils Apple.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-es.webp',
    title: 'Reseña de Rescript: edita vídeo y audio editando la transcripción',
    seoTitle: 'Reseña de Rescript: edita vídeo con su transcripción',
    intro:
      'Rescript 1.2.5 es un editor para navegador y escritorio que transcribe vídeo o audio con Whisper, corta el material cuando borras palabras y puede volver a decir una frase con la voz del hablante original. Según su sitio web y su README, la transcripción, la edición y la exportación se ejecutan en tu propio dispositivo y no se sube nada. La licencia es PolyForm Noncommercial 1.0.0, así que el uso comercial requiere una licencia de pago. Esta reseña se basa en el sitio oficial, el repositorio de GitHub con sus versiones y las páginas de privacidad, términos y uso aceptable, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'Rescript es un editor con código fuente disponible que corta vídeo y audio borrando palabras de una transcripción de Whisper. Gratis para uso no comercial.',
    twitterDescription:
      'Rescript: editor de vídeo y audio con el código fuente disponible que corta el material al borrar palabras de una transcripción de Whisper. Lo confirmado.',
    audience:
      'Podcasters, entrevistadores y creadores de vídeo que cortan grabaciones habladas para uso no comercial, personas con grabaciones sensibles que quieren que la edición se quede en su equipo, y editores que quieren un primer montaje a partir del texto',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Rescript',
    targetKeywords: [
      'reseña de Rescript',
      'editar vídeo editando texto',
      'editor de vídeo basado en transcripción',
      'editor de vídeo con Whisper local',
      'quitar muletillas de un vídeo',
      'editor con transcripción sin conexión',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript es un editor con el código fuente disponible, gratuito para uso no comercial, que transcribe vídeo y audio con Whisper en tu propio dispositivo, según el fabricante, y corta el material cuando borras palabras de la transcripción.** Funciona en el navegador y como app de escritorio para macOS, Windows y Linux, puede volver a decir una frase con la voz del hablante y exporta vídeo, audio, subtítulos o líneas de tiempo para otros editores. El uso comercial requiere una licencia de pago, y PromptQuorum no ha probado la aplicación.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Rescript y para quién es?',
        answer:
          'Rescript es un editor basado en la transcripción para vídeo y audio centrados en la voz, desarrollado en abierto en GitHub. Encaja con quien corta entrevistas, podcasts y vídeos de una persona hablando a cámara y quiere que la edición se quede en su propio equipo.',
        bullets: [
          'Licencia PolyForm Noncommercial 1.0.0: gratis para uso no comercial, y el uso comercial requiere una licencia de pago.',
          'Según el fabricante, la transcripción con Whisper, con marcas de tiempo por palabra y etiquetas de hablantes, se ejecuta en tu dispositivo, en el navegador o en apps de escritorio para macOS, Windows y Linux.',
          'Borra palabras para cortar el material; un clic quita "um", "uh" y silencios de 0,3 segundos o más; exporta vídeo, audio, transcripción, subtítulos o líneas de tiempo para otros editores.',
          'Regenerate vuelve a decir una frase con la voz clonada del hablante en seis idiomas; la política de uso aceptable del fabricante exige el consentimiento del hablante.',
          'Repositorio creado en julio de 2026; la versión 1.2.5 salió el 29 de octubre de 2026 y el último commit en la rama principal fue el 5 de noviembre de 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
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
            text: 'Rescript es un editor con el código fuente disponible que, según el fabricante, transcribe vídeo y audio en tu equipo y corta el material cuando borras palabras de la transcripción.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un procesador de textos para una grabación: la transcripción es la línea de tiempo. Borra una frase y se corta el material correspondiente; escribe un reemplazo y, si quieres, Rescript lo dice con la voz de esa persona.',
          },
        ],
        items: [
          'Úsalo en el navegador o descarga una app de escritorio desde la página de versiones de GitHub: DMG para macOS, EXE de instalación para Windows, AppImage o DEB para Linux.',
          'Según el fabricante, la transcripción con Whisper, las etiquetas de hablantes y la exportación se ejecutan en tu dispositivo; los modelos se descargan una vez desde Hugging Face y después se guardan en caché.',
          'Gratis para uso no comercial; el uso comercial requiere una licencia de pago, y el fabricante dice que más adelante podrían llegar funciones de pago opcionales que se ejecutan en sus servidores.',
          'La telemetría y los informes de fallos están activados por defecto y se pueden desactivar en los ajustes; el fabricante detalla qué contienen.',
          'PromptQuorum no ha probado la aplicación, así que la precisión de la transcripción, la calidad de los cortes y la calidad de la voz no están verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El sitio web dice que el editor no necesita cuenta ni subida de archivos, y la página de privacidad dice que los medios, las transcripciones y las voces clonadas nunca salen del dispositivo. PromptQuorum no inspeccionó el tráfico de red, así que no puede confirmarlo más allá de lo que escribe el fabricante.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Rescript es un editor basado en la transcripción para vídeo y audio, publicado como aplicación web y como apps de escritorio para macOS, Windows y Linux con la licencia PolyForm Noncommercial 1.0.0.**',
          'Se desarrolla en abierto en [github.com/wassgha/rescript](https://github.com/wassgha/rescript), donde el archivo de licencia cita a Wassim Gharbi y a los colaboradores. El repositorio se creó en julio de 2026; la versión 1.2.5 apareció el 29 de octubre de 2026 y el último commit en la rama principal fue el 5 de noviembre de 2026, así que el desarrollo está activo y no se aplica ningún aviso de proyecto abandonado. El fabricante llama al proyecto de código abierto; como la licencia prohíbe el uso comercial, PromptQuorum lo describe como un proyecto con el código fuente disponible. El sitio web y la página de privacidad dicen "we" y no nombran empresa, dirección ni aviso legal, pero los términos de uso se rigen por las leyes del Estado de California, Estados Unidos.',
          'Según el fabricante, arrastras un archivo de vídeo o audio, Whisper lo transcribe en tu dispositivo con marcas de tiempo por palabra y etiquetas de hablantes, y al borrar palabras de la transcripción se corta el material correspondiente. Una línea de tiempo muestra la forma de onda, una barra de palabras y las zonas cortadas, y puedes importar tus propios subtítulos SRT, VTT o JSON en lugar de transcribir. La función Regenerate reescribe una frase seleccionada y la dice con la voz de ese hablante, clonada en tu equipo a partir de unos diez segundos de su audio que ya están en el archivo.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la precisión de la transcripción, la calidad de los cortes, la fidelidad de la exportación ni la calidad del habla regenerada.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Puedes usar Rescript en el navegador sin instalar nada, o descargar una app de escritorio desde los paquetes de su página de versiones de GitHub, que el sitio enlaza para cada plataforma.**',
          'La versión v1.2.5 incluye un DMG para macOS en Apple Silicon e Intel, un EXE de instalación para Windows y un AppImage y un paquete DEB para Linux. Según el README, las compilaciones de escritorio se actualizan solas desde GitHub Releases y las de macOS están firmadas y notarizadas.',
        ],
        columns: ['Plataforma', 'Paquete'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Paquete': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Paquete': 'DMG (x64)' },
          { 'Plataforma': 'Windows', 'Paquete': 'EXE de instalación' },
          { 'Plataforma': 'Linux', 'Paquete': 'AppImage o DEB' },
          { 'Plataforma': '[App web](https://app.getrescript.com)', 'Paquete': 'Navegador, sin instalar (Chromium recomendado)' },
          { 'Plataforma': '[Código fuente](https://github.com/wassgha/rescript)', 'Paquete': 'Compilar desde el código (ver el README)' },
        ],
        note: 'Descarga desde la [página de versiones de GitHub](https://github.com/wassgha/rescript/releases/latest) o abre la [app web](https://app.getrescript.com). PromptQuorum no ejecutó los instaladores y no comprobó si están firmados o notarizados por el sistema operativo; el README afirma que las compilaciones de macOS lo están.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Rescript necesita un equipo reciente con macOS, Windows o Linux, o un navegador basado en Chromium; el fabricante no publica un mínimo de memoria ni de GPU.**',
          'La lista procede del README y del sitio web. La app web necesita SharedArrayBuffer y usa WebGPU para la transcripción cuando está disponible, con WASM como alternativa. Regenerate descarga un paquete de voz por idioma: unos 140 MB para los modelos más rápidos y unos 360 MB para los de mayor calidad, según el fabricante. PromptQuorum no midió el uso de memoria ni la velocidad.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Escritorio', 'Dato indicado': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { 'Elemento': 'Navegador', 'Dato indicado': 'Basado en Chromium recomendado' },
          { 'Elemento': 'Transcripción', 'Dato indicado': 'Whisper Base o Small' },
          { 'Elemento': 'Etiquetas de hablantes', 'Dato indicado': 'pyannote-segmentation-3.0' },
          { 'Elemento': 'Paquete de voz', 'Dato indicado': '~140 MB o ~360 MB por idioma' },
          { 'Elemento': 'Memoria y GPU', 'Dato indicado': 'No publicado' },
        ],
        note: 'Los modelos de Whisper y de hablantes se descargan una vez desde Hugging Face y después se guardan en caché; a partir de ahí el editor funciona sin conexión de red, según el fabricante.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Rescript es ante todo un editor de transcripciones; la línea de tiempo, la eliminación de muletillas, las etiquetas de hablantes y la regeneración de voz giran a su alrededor.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del sitio web y del README.',
        ],
        items: [
          'Edición palabra a palabra: selecciona palabras en la transcripción y bórralas; la reproducción salta cada corte en tiempo real y el corte sigue a las palabras habladas.',
          'Limpieza: un clic quita "um", "uh" y muletillas parecidas, y otro quita los silencios de 0,3 segundos o más en todo el archivo.',
          'Transcripción: Whisper Base o Whisper Small con marcas de tiempo por palabra, o importa en su lugar un archivo de subtítulos SRT, VTT o JSON existente.',
          'Hablantes: las etiquetas automáticas agrupan la transcripción según quién habla, y los hablantes se pueden renombrar.',
          'Línea de tiempo: forma de onda, barra de palabras con tiradores de tiempo que se arrastran, dividir, zonas de corte, zoom y desplazamiento, para afinar los cortes más allá de los límites de las palabras.',
          'Regenerate: reescribe una frase seleccionada y haz que la diga la voz de ese hablante en inglés, español, francés, alemán, italiano o portugués; un medidor de ajuste avisa antes de generar si la frase nueva no cabe en el hueco.',
          'Exportación: MP4 o WebM hasta 4K; audio en M4A, MP3 o WAV; transcripciones en TXT, Markdown, DOCX o PDF; subtítulos en SRT, VTT o JSON; y líneas de tiempo para DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude o Blender.',
          'Idiomas de la interfaz: alemán, inglés, español, francés, italiano, japonés, coreano, portugués y chino (simplificado y tradicional), según las notas de la versión v1.2.5.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el fabricante, el vídeo, el audio, las transcripciones, los proyectos, las exportaciones y las voces clonadas se quedan en tu dispositivo; PromptQuorum no inspeccionó el tráfico de red y no puede confirmarlo.**',
          'La página de privacidad, con fecha del 8 de agosto de 2026, dice que no hay un paso de subida, que el editor no necesita cuenta y que los proyectos se guardan en el almacenamiento del navegador o en disco. También enumera lo que sí usa la red: una descarga única de los modelos de voz, de hablantes y de síntesis desde Hugging Face, las comprobaciones de actualización contra GitHub Releases en las apps de escritorio, un registro opcional por correo en el sitio web y la telemetría anónima y los informes de fallos.',
          'El README dice que las estadísticas de uso anónimas y los informes de fallos están activados por defecto y se pueden desactivar en los ajustes, en Privacy. La página de privacidad dice que la telemetría lleva un ID de instalación aleatorio, uno de cuatro nombres de evento y propiedades generales como la versión de la app, la familia del sistema operativo y el modelo o formato de exportación usado; afirma que no se registran direcciones IP y que los informes de fallos van a Sentry sin nombres de archivos multimedia. El propio sitio web usa Vercel Web Analytics y puede usar Google Analytics.',
          'El fabricante afirma que las voces clonadas se crean en la memoria de tu equipo y que no se guarda ningún perfil de voz en un servidor. La política de uso aceptable exige el consentimiento informado de la persona cuya voz se regenera y señala que las leyes sobre voces sintéticas varían según el país; Regenerate está pensado para corregir tus propias grabaciones, y usarlo de forma legal es responsabilidad tuya. PromptQuorum no ofrece asesoramiento jurídico.',
          'El código fuente es público en GitHub, así que el flujo de datos se puede auditar.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Rescript encaja con quien corta grabaciones habladas para uso no comercial y quiere que el trabajo se quede en su propio equipo.**',
        ],
        items: [
          'Podcasters, entrevistadores y aficionados al vídeo que quieren quitar muletillas y rehacer tomas editando texto.',
          'Personas con grabaciones sensibles, como entrevistas o material inédito, que prefieren una herramienta que dice no subir nunca los archivos.',
          'Editores que quieren un primer montaje a partir del texto y después exportar una línea de tiempo a DaVinci Resolve, Premiere, Final Cut o Reaper.',
          'Quien prefiere un proyecto cuyo código es público.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Rescript no encaja bien en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: el trabajo comercial. La licencia cubre proyectos personales, estudio, investigación y evaluación; según el fabricante, el uso comercial requiere una licencia de pago aparte que se solicita por correo, y PromptQuorum no encontró ningún precio publicado.',
          'No encaja: quien necesite hoy un producto maduro. El repositorio se creó en julio de 2026, y los propios términos del fabricante dicen que la transcripción y el habla sintetizada cometen errores.',
          'Sin verificar: la precisión de la transcripción, la calidad de los cortes, la fidelidad de la exportación y la calidad de las voces regeneradas. PromptQuorum no ha ejecutado la aplicación.',
          'Sin verificar: la afirmación de que nada sale del dispositivo, junto con la telemetría, los informes de fallos y las comprobaciones de actualización activados por defecto; PromptQuorum no inspeccionó el tráfico de red.',
          'Sin verificar: si los instaladores de macOS, Windows y Linux están firmados o notarizados; el README solo dice que lo están las compilaciones de macOS y no menciona firma para Windows ni Linux.',
          'Sin verificar: las necesidades de memoria y velocidad, porque no se publica un mínimo, y qué modelo de Whisper va bien con qué equipo.',
          'Sin verificar: quién gestiona el proyecto y cuánta gente lo usa. No se encontró nombre de empresa ni aviso legal, y PromptQuorum no buscó reseñas independientes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Rescript coincide en parte con otras herramientas que transcriben y cortan medios hablados; PromptQuorum no lo ha comparado con ellas en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Rescript', 'Según las fuentes': 'PolyForm NC; Mac/Windows/Linux/web; edita vídeo por transcripción' },
          { 'Herramienta': '[FunClip](/es/power-local-llm/funclip-review)', 'Según las fuentes': 'MIT; interfaz web local; recorta vídeo con texto de reconocimiento de voz' },
          { 'Herramienta': '[Subtitle Edit](/es/power-local-llm/subtitle-edit-review)', 'Según las fuentes': 'MIT; Windows/macOS/Linux; editor de subtítulos con Whisper' },
          { 'Herramienta': '[Aiko](/es/power-local-llm/aiko-review)', 'Según las fuentes': 'Código cerrado; iPhone/iPad/Mac; transcripciones Whisper en el dispositivo' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta para usar Rescript?',
            a: 'No, según el fabricante. El editor no necesita cuenta. Un enlace de acceso enviado por correo solo te inicia sesión en el sitio web, y el registro por correo es opcional.',
          },
          {
            q: '¿Es Rescript gratis para uso comercial?',
            a: 'No. Tiene licencia PolyForm Noncommercial 1.0.0, que cubre proyectos personales, estudio, investigación y evaluación. Según el fabricante, el uso comercial requiere una licencia de pago aparte que se solicita por correo, y PromptQuorum no encontró ningún precio publicado.',
          },
          {
            q: '¿Salen mis archivos multimedia de mi equipo?',
            a: 'Según el fabricante, no: la transcripción, la edición, la regeneración de voz y la exportación se ejecutan en tu dispositivo, y las únicas descargas son los archivos de modelos (una vez) y las comprobaciones de actualización. La telemetría y los informes de fallos están activados por defecto y se pueden desactivar en los ajustes. PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Puede Rescript cambiar lo que dijo alguien?',
            a: 'Sí, con Regenerate, que dice una frase reescrita con la voz clonada del hablante en seis idiomas. La política de uso aceptable exige el consentimiento informado del hablante, y las leyes sobre voces sintéticas varían según el país, así que comprueba qué se aplica en tu caso. PromptQuorum no probó la calidad de la voz.',
          },
          {
            q: '¿Con qué frecuencia se actualiza Rescript?',
            a: 'GitHub lista la versión 1.2.3 el 3 de octubre de 2026, la 1.2.4 el 5 de octubre de 2026 y la 1.2.5 el 29 de octubre de 2026, con commits en la rama principal hasta el 5 de noviembre de 2026. Las apps de escritorio comprueban las actualizaciones en GitHub Releases.',
          },
          {
            q: '¿En qué plataformas funciona Rescript?',
            a: 'Según el fabricante, en un navegador (se recomienda uno basado en Chromium) y como aplicación de escritorio para macOS (Apple Silicon e Intel), Windows y Linux. La versión 1.2.5 lista un DMG, un EXE de instalación, un AppImage y un paquete DEB.',
          },
          {
            q: '¿Rescript es de código abierto?',
            a: 'El fabricante llama al proyecto de código abierto, pero la licencia es PolyForm Noncommercial 1.0.0, que prohíbe el uso comercial, así que PromptQuorum lo describe como de código fuente disponible. El código es público en GitHub y gratuito para uso no comercial; el uso comercial requiere una licencia de pago.',
          },
          {
            q: '¿Rescript funciona sin conexión a internet?',
            a: 'Según el fabricante, los modelos de Whisper y de hablantes se descargan una vez desde Hugging Face y luego se guardan en caché, y después el editor funciona sin conexión de red. Las aplicaciones de escritorio comprueban las actualizaciones en GitHub Releases. PromptQuorum no probó el uso sin conexión.',
          },
          {
            q: '¿Qué formatos puede exportar Rescript?',
            a: 'Según el fabricante: vídeo MP4 o WebM de hasta 4K; audio M4A, MP3 o WAV; transcripciones en TXT, Markdown, DOCX o PDF; subtítulos en SRT, VTT o JSON; y líneas de tiempo para DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude o Blender. PromptQuorum no comprobó la fidelidad de la exportación.',
          },
          {
            q: '¿Puede Rescript quitar muletillas y silencios?',
            a: 'Según el sitio web, un clic quita "um", "uh" y muletillas parecidas, y otro quita los silencios de 0,3 segundos o más en todo el archivo. PromptQuorum no probó con qué precisión los detecta.',
          },
          {
            q: '¿Rescript etiqueta quién está hablando?',
            a: 'Según el fabricante, las etiquetas automáticas de hablante agrupan la transcripción según quién habla, y los hablantes se pueden renombrar; el README menciona pyannote-segmentation-3.0 para ello. PromptQuorum no probó las etiquetas.',
          },
          {
            q: '¿Qué recopila la telemetría de Rescript y puedo desactivarla?',
            a: 'El README dice que las estadísticas de uso anónimas y los informes de fallos están activados por defecto y se pueden desactivar en los ajustes, en «Privacy». Según la página de privacidad, la telemetría incluye un identificador de instalación aleatorio, uno de cuatro nombres de evento y propiedades generales como la versión de la aplicación, la familia del sistema operativo y el modelo o formato de exportación usado; no se registran las direcciones IP, y los informes de fallos van a Sentry sin los nombres de los archivos multimedia. PromptQuorum no inspeccionó el tráfico de red.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Rescript merece una mirada si cortas entrevistas, podcasts o vídeos de una persona hablando a cámara para uso no comercial y quieres una edición basada en la transcripción que, según el fabricante, se ejecuta en tu propio equipo.**',
          'Sobre el papel cubre mucho: cortes palabra a palabra, eliminación de muletillas y silencios, etiquetas de hablantes, regeneración de voz y exportaciones para otros editores. El desarrollo está activo, con tres versiones entre el 3 y el 29 de octubre de 2026 y un commit el 5 de noviembre de 2026.',
          'Las contrapartidas son reales: el uso comercial requiere una licencia de pago sin precio publicado, el proyecto tiene solo unos meses, los propios términos del fabricante dicen que la transcripción y el habla sintetizada cometen errores, y PromptQuorum no ha probado nada. Pruébalo con una copia de una grabación y revisa la transcripción y los cortes antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Rescript](https://getrescript.com) — funciones, preguntas frecuentes y descargas, consultado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://www.getrescript.com/privacy) — qué se queda en el dispositivo y qué se recopila, con fecha del 8 de agosto de 2026, consultada el 18 de noviembre de 2026.',
          '[Términos de uso](https://www.getrescript.com/terms) — licencia, ley aplicable y contacto, con fecha del 8 de agosto de 2026, consultados el 18 de noviembre de 2026.',
          '[Política de uso aceptable](https://www.getrescript.com/acceptable-use) — reglas de consentimiento para Regenerate y límites de la licencia, consultada el 18 de noviembre de 2026.',
          '[Página de Regenerate](https://www.getrescript.com/regenerate-speech) — idiomas, modelo de voz y tamaños de los paquetes, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/wassgha/rescript) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — funciones, tecnología, telemetría y licencia, consultado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/wassgha/rescript/releases) — fechas de versiones, paquetes y las notas de la v1.2.5, consultadas el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de FunClip](/es/power-local-llm/funclip-review) — recortar vídeo con texto de reconocimiento de voz en una interfaz web local.',
          '[Reseña de Subtitle Edit](/es/power-local-llm/subtitle-edit-review) — un editor de subtítulos con transcripción local de la familia Whisper.',
          '[Reseña de Aiko](/es/power-local-llm/aiko-review) — transcripción Whisper en el dispositivo para equipos Apple.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-pt.webp',
    title: 'Análise do Rescript: edite vídeo e áudio editando a transcrição',
    seoTitle: 'Análise do Rescript: edite vídeo pela transcrição',
    intro:
      'O Rescript 1.2.5 é um editor para navegador e desktop que transcreve vídeo ou áudio com o Whisper, corta o material quando você apaga palavras e pode refazer uma fala com a voz do falante original. Segundo o site e o README, a transcrição, a edição e a exportação rodam no seu próprio dispositivo e nada é enviado. A licença é a PolyForm Noncommercial 1.0.0, então o uso comercial exige uma licença paga. Esta análise se baseia no site oficial, no repositório do GitHub com suas versões e nas páginas de privacidade, termos e uso aceitável, consultados em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O Rescript é um editor com código-fonte disponível que corta vídeo e áudio ao apagar palavras de uma transcrição do Whisper. Grátis para uso não comercial.',
    twitterDescription:
      'Rescript: editor de vídeo e áudio com código-fonte disponível que corta o material ao apagar palavras de uma transcrição do Whisper. O que está confirmado.',
    audience:
      'Podcasters, entrevistadores e criadores de vídeo que cortam gravações faladas para uso não comercial, pessoas com gravações sensíveis que querem manter a edição no próprio computador e editores que querem um primeiro corte a partir do texto',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Rescript',
    targetKeywords: [
      'análise do Rescript',
      'editar vídeo editando texto',
      'editor de vídeo baseado em transcrição',
      'editor de vídeo com Whisper local',
      'remover vícios de linguagem de vídeo',
      'editor com transcrição offline',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Rescript é um editor com código-fonte disponível, gratuito para uso não comercial, que transcreve vídeo e áudio com o Whisper no seu próprio dispositivo, segundo o fabricante, e corta o material quando você apaga palavras da transcrição.** Ele roda no navegador e como app desktop para macOS, Windows e Linux, pode refazer uma fala com a voz do falante e exporta vídeo, áudio, legendas ou linhas do tempo para outros editores. O uso comercial exige uma licença paga, e a PromptQuorum não testou o app.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Rescript e para quem ele serve?',
        answer:
          'O Rescript é um editor baseado em transcrição para vídeo e áudio centrados na fala, desenvolvido abertamente no GitHub. Serve para quem corta entrevistas, podcasts e vídeos de uma pessoa falando para a câmera e quer manter a edição no próprio computador.',
        bullets: [
          'Licença PolyForm Noncommercial 1.0.0: grátis para uso não comercial, e o uso comercial exige uma licença paga.',
          'Segundo o fabricante, a transcrição com Whisper, com marcas de tempo por palavra e rótulos de falantes, roda no seu dispositivo, no navegador ou em apps desktop para macOS, Windows e Linux.',
          'Apague palavras para cortar o material; um clique remove "um", "uh" e silêncios de 0,3 segundo ou mais; exporte vídeo, áudio, transcrição, legendas ou linhas do tempo para outros editores.',
          'O Regenerate refaz uma fala com a voz clonada do falante em seis idiomas; a política de uso aceitável do fabricante exige o consentimento do falante.',
          'Repositório criado em julho de 2026; a versão 1.2.5 saiu em 29 de outubro de 2026 e o último commit no ramo principal foi em 5 de novembro de 2026.',
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
            text: 'O Rescript é um editor com código-fonte disponível que, segundo o fabricante, transcreve vídeo e áudio no seu computador e corta o material quando você apaga palavras da transcrição.',
          },
          {
            type: 'plain-terms',
            text: 'Pense num processador de texto para uma gravação: a transcrição é a linha do tempo. Apague uma frase e o material correspondente é cortado; digite uma substituição e, se quiser, o Rescript a fala com a voz da pessoa.',
          },
        ],
        items: [
          'Use no navegador ou baixe um app desktop na página de versões do GitHub: DMG para macOS, EXE de instalação para Windows, AppImage ou DEB para Linux.',
          'Segundo o fabricante, a transcrição com Whisper, os rótulos de falantes e a exportação rodam no seu dispositivo; os modelos são baixados uma vez do Hugging Face e depois ficam em cache.',
          'Grátis para uso não comercial; o uso comercial exige uma licença paga, e o fabricante diz que recursos pagos opcionais, executados em seus servidores, podem chegar depois.',
          'Telemetria e relatórios de falhas vêm ativados por padrão e podem ser desligados nas configurações; o fabricante lista o que eles contêm.',
          'A PromptQuorum não testou o app, então a precisão da transcrição, a qualidade dos cortes e a qualidade da voz não estão verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O site diz que o editor não precisa de conta nem de envio de arquivos, e a página de privacidade diz que mídia, transcrições e vozes clonadas nunca saem do dispositivo. A PromptQuorum não inspecionou o tráfego de rede, então não pode confirmar isso além do que o fabricante escreve.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Rescript é um editor baseado em transcrição para vídeo e áudio, lançado como app web e como apps desktop para macOS, Windows e Linux sob a licença PolyForm Noncommercial 1.0.0.**',
          'Ele é desenvolvido abertamente em [github.com/wassgha/rescript](https://github.com/wassgha/rescript), onde o arquivo de licença cita Wassim Gharbi e colaboradores. O repositório foi criado em julho de 2026; a versão 1.2.5 apareceu em 29 de outubro de 2026 e o último commit no ramo principal foi em 5 de novembro de 2026, então o desenvolvimento está ativo e nenhum aviso de projeto abandonado se aplica. O fabricante chama o projeto de código aberto; como a licença proíbe o uso comercial, a PromptQuorum o descreve como um projeto com código-fonte disponível. O site e a página de privacidade dizem "we" e não nomeiam empresa, endereço nem aviso legal, mas os termos de uso são regidos pelas leis do Estado da Califórnia, nos Estados Unidos.',
          'Segundo o fabricante, você arrasta um arquivo de vídeo ou áudio, o Whisper o transcreve no seu dispositivo com marcas de tempo por palavra e rótulos de falantes, e apagar palavras na transcrição corta o material correspondente. Uma linha do tempo mostra a forma de onda, uma barra de palavras e as áreas cortadas, e você pode importar suas próprias legendas SRT, VTT ou JSON em vez de transcrever. O recurso Regenerate reescreve uma fala selecionada e a diz com a voz desse falante, clonada no seu computador a partir de cerca de dez segundos do áudio dele que já está no arquivo.',
          'A PromptQuorum não executou o app e não verificou a precisão da transcrição, a qualidade dos cortes, a fidelidade da exportação nem a qualidade da fala regenerada.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode usar o Rescript no navegador sem instalar nada, ou baixar um app desktop dos pacotes da página de versões do GitHub, que o site vincula para cada plataforma.**',
          'A versão v1.2.5 lista um DMG para macOS em Apple Silicon e Intel, um EXE de instalação para Windows e um AppImage e um pacote DEB para Linux. Segundo o README, os builds desktop se atualizam sozinhos pelo GitHub Releases e os builds para macOS são assinados e notarizados.',
        ],
        columns: ['Plataforma', 'Pacote'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Pacote': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Pacote': 'DMG (x64)' },
          { 'Plataforma': 'Windows', 'Pacote': 'EXE de instalação' },
          { 'Plataforma': 'Linux', 'Pacote': 'AppImage ou DEB' },
          { 'Plataforma': '[App web](https://app.getrescript.com)', 'Pacote': 'Navegador, sem instalar (Chromium recomendado)' },
          { 'Plataforma': '[Código-fonte](https://github.com/wassgha/rescript)', 'Pacote': 'Compilar a partir do código (ver o README)' },
        ],
        note: 'Baixe pela [página de versões do GitHub](https://github.com/wassgha/rescript/releases/latest) ou abra o [app web](https://app.getrescript.com). A PromptQuorum não executou os instaladores e não verificou se eles são assinados ou notarizados pelo sistema operacional; o README afirma que os builds para macOS são.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Rescript precisa de um computador recente com macOS, Windows ou Linux, ou de um navegador baseado em Chromium; o fabricante não publica mínimo de memória nem de GPU.**',
          'A lista vem do README e do site. O app web precisa de SharedArrayBuffer e usa WebGPU na transcrição quando disponível, com WASM como alternativa. O Regenerate baixa um pacote de voz por idioma: cerca de 140 MB para os modelos mais rápidos e cerca de 360 MB para os de maior qualidade, segundo o fabricante. A PromptQuorum não mediu o uso de memória nem a velocidade.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Desktop', 'Valor informado': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { 'Item': 'Navegador', 'Valor informado': 'Baseado em Chromium recomendado' },
          { 'Item': 'Transcrição', 'Valor informado': 'Whisper Base ou Small' },
          { 'Item': 'Rótulos de falantes', 'Valor informado': 'pyannote-segmentation-3.0' },
          { 'Item': 'Pacote de voz', 'Valor informado': '~140 MB ou ~360 MB por idioma' },
          { 'Item': 'Memória e GPU', 'Valor informado': 'Não publicado' },
        ],
        note: 'Os modelos de Whisper e de falantes são baixados uma vez do Hugging Face e depois ficam em cache; a partir daí o editor funciona sem conexão de rede, segundo o fabricante.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Rescript é antes de tudo um editor de transcrições; a linha do tempo, a remoção de vícios de linguagem, os rótulos de falantes e a regeneração de voz ficam ao redor dele.** Todos os itens abaixo são afirmações do fabricante, tiradas do site e do README.',
        ],
        items: [
          'Edição palavra por palavra: selecione palavras na transcrição e apague; a reprodução pula cada corte em tempo real e o corte acompanha as palavras faladas.',
          'Limpeza: um clique remove "um", "uh" e vícios parecidos, e outro remove silêncios de 0,3 segundo ou mais no arquivo inteiro.',
          'Transcrição: Whisper Base ou Whisper Small com marcas de tempo por palavra, ou importe um arquivo de legendas SRT, VTT ou JSON já existente.',
          'Falantes: rótulos automáticos agrupam a transcrição por quem está falando, e os falantes podem ser renomeados.',
          'Linha do tempo: forma de onda, barra de palavras com alças de tempo arrastáveis, divisão, áreas de corte, zoom e rolagem, para refinar cortes além dos limites das palavras.',
          'Regenerate: reescreva uma fala selecionada e faça-a ser dita com a voz do falante em inglês, espanhol, francês, alemão, italiano ou português; um medidor de encaixe avisa antes de gerar se a nova fala não couber no espaço.',
          'Exportação: MP4 ou WebM até 4K; áudio em M4A, MP3 ou WAV; transcrições em TXT, Markdown, DOCX ou PDF; legendas em SRT, VTT ou JSON; e linhas do tempo para DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude ou Blender.',
          'Idiomas da interface: alemão, inglês, espanhol, francês, italiano, japonês, coreano, português e chinês (simplificado e tradicional), segundo as notas da versão v1.2.5.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o fabricante, vídeo, áudio, transcrições, projetos, exportações e vozes clonadas ficam no seu dispositivo; a PromptQuorum não inspecionou o tráfego de rede e não pode confirmar isso.**',
          'A página de privacidade, datada de 8 de agosto de 2026, diz que não há etapa de envio, que o editor não precisa de conta e que os projetos são salvos no armazenamento do navegador ou no disco. Ela também lista o que usa a rede: um download único dos modelos de fala, de falantes e de voz do Hugging Face, verificações de atualização no GitHub Releases nos apps desktop, um cadastro opcional por e-mail no site e a telemetria anônima e os relatórios de falhas.',
          'O README diz que as estatísticas de uso anônimas e os relatórios de falhas vêm ativados por padrão e podem ser desligados nas configurações, em Privacy. A página de privacidade diz que a telemetria leva um ID de instalação aleatório, um de quatro nomes de evento e propriedades gerais como a versão do app, a família do sistema operacional e o modelo ou formato de exportação usado; afirma que endereços IP não são registrados e que os relatórios de falhas vão para o Sentry sem nomes de arquivos de mídia. O próprio site usa o Vercel Web Analytics e pode usar o Google Analytics.',
          'O fabricante afirma que as vozes clonadas são criadas na memória do seu computador e que nenhum perfil de voz é guardado em servidor. A política de uso aceitável exige o consentimento informado da pessoa cuja voz é regenerada e diz que as leis sobre vozes sintéticas variam conforme o país; o Regenerate serve para corrigir suas próprias gravações, e usá-lo de forma legal é responsabilidade sua. A PromptQuorum não dá aconselhamento jurídico.',
          'O código-fonte é público no GitHub, então o fluxo de dados pode ser auditado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Rescript serve para quem corta gravações faladas para uso não comercial e quer manter o trabalho no próprio computador.**',
        ],
        items: [
          'Podcasters, entrevistadores e criadores de vídeo amadores que querem remover vícios de linguagem e refazer takes editando texto.',
          'Pessoas com gravações sensíveis, como entrevistas ou material inédito, que preferem uma ferramenta que diz nunca enviar mídia.',
          'Editores que querem um primeiro corte a partir do texto e depois exportar uma linha do tempo para DaVinci Resolve, Premiere, Final Cut ou Reaper.',
          'Quem prefere um projeto cujo código é público.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Rescript não serve bem em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: trabalho comercial. A licença cobre projetos pessoais, estudo, pesquisa e avaliação; segundo o fabricante, o uso comercial exige uma licença paga separada, pedida por e-mail, e a PromptQuorum não encontrou preço publicado.',
          'Não serve: quem precisa hoje de um produto maduro. O repositório foi criado em julho de 2026, e os próprios termos do fabricante dizem que a transcrição e a fala sintetizada cometem erros.',
          'Não verificado: precisão da transcrição, qualidade dos cortes, fidelidade da exportação e qualidade das vozes regeneradas. A PromptQuorum não executou o app.',
          'Não verificado: a afirmação de que nada sai do dispositivo, ao lado de telemetria, relatórios de falhas e verificações de atualização ativados por padrão; a PromptQuorum não inspecionou o tráfego de rede.',
          'Não verificado: se os instaladores para macOS, Windows e Linux são assinados ou notarizados; o README só diz que os builds para macOS são e não menciona assinatura para Windows ou Linux.',
          'Não verificado: necessidades de memória e velocidade, já que nenhum mínimo é publicado, e qual modelo do Whisper combina com qual computador.',
          'Não verificado: quem opera o projeto e quantas pessoas o usam. Nenhum nome de empresa nem aviso legal foi encontrado, e a PromptQuorum não procurou análises independentes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript versus alternativas',
        itemHeadings: true,
        content: [
          '**O Rescript se sobrepõe a outras ferramentas que transcrevem e cortam mídia falada; a PromptQuorum não o comparou com elas na prática.** As ferramentas abaixo estão no diretório e são descritas a partir de suas próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Rescript', 'Segundo as fontes': 'PolyForm NC; Mac/Windows/Linux/web; edita vídeo por transcrição' },
          { 'Ferramenta': '[FunClip](/pt/power-local-llm/funclip-review)', 'Segundo as fontes': 'MIT; interface web local; recorta vídeo com texto de reconhecimento de voz' },
          { 'Ferramenta': '[Subtitle Edit](/pt/power-local-llm/subtitle-edit-review)', 'Segundo as fontes': 'MIT; Windows/macOS/Linux; editor de legendas com Whisper' },
          { 'Ferramenta': '[Aiko](/pt/power-local-llm/aiko-review)', 'Segundo as fontes': 'Código fechado; iPhone/iPad/Mac; transcrições Whisper no dispositivo' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta para usar o Rescript?',
            a: 'Não, segundo o fabricante. O editor não precisa de conta. Um link de acesso enviado por e-mail só conecta você ao site, e o cadastro por e-mail é opcional.',
          },
          {
            q: 'O Rescript é grátis para uso comercial?',
            a: 'Não. Ele tem licença PolyForm Noncommercial 1.0.0, que cobre projetos pessoais, estudo, pesquisa e avaliação. Segundo o fabricante, o uso comercial exige uma licença paga separada, pedida por e-mail, e a PromptQuorum não encontrou preço publicado.',
          },
          {
            q: 'Minha mídia sai do meu computador?',
            a: 'Segundo o fabricante, não: a transcrição, a edição, a regeneração de voz e a exportação rodam no seu dispositivo, e os únicos downloads são os arquivos de modelos (uma vez) e as verificações de atualização. Telemetria e relatórios de falhas vêm ativados por padrão e podem ser desligados nas configurações. A PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'O Rescript pode mudar o que alguém disse?',
            a: 'Sim, com o Regenerate, que fala uma frase reescrita com a voz clonada do falante em seis idiomas. A política de uso aceitável exige o consentimento informado do falante, e as leis sobre vozes sintéticas variam conforme o país, então verifique o que vale no seu caso. A PromptQuorum não testou a qualidade da voz.',
          },
          {
            q: 'Com que frequência o Rescript é atualizado?',
            a: 'O GitHub lista a versão 1.2.3 em 3 de outubro de 2026, a 1.2.4 em 5 de outubro de 2026 e a 1.2.5 em 29 de outubro de 2026, com commits no ramo principal até 5 de novembro de 2026. Os apps desktop verificam atualizações no GitHub Releases.',
          },
          {
            q: 'Em quais plataformas o Rescript funciona?',
            a: 'Segundo o fabricante, em um navegador (recomenda-se um baseado em Chromium) e como aplicativo de desktop para macOS (Apple Silicon e Intel), Windows e Linux. A versão 1.2.5 lista um DMG, um EXE de instalação, um AppImage e um pacote DEB.',
          },
          {
            q: 'O Rescript é de código aberto?',
            a: 'O fabricante chama o projeto de código aberto, mas a licença é a PolyForm Noncommercial 1.0.0, que proíbe o uso comercial, então a PromptQuorum o descreve como de código-fonte disponível. O código é público no GitHub e gratuito para uso não comercial; o uso comercial exige uma licença paga.',
          },
          {
            q: 'O Rescript funciona sem conexão com a internet?',
            a: 'Segundo o fabricante, os modelos do Whisper e de falantes são baixados uma vez do Hugging Face e depois ficam em cache, e a partir daí o editor funciona sem conexão de rede. Os aplicativos de desktop verificam atualizações no GitHub Releases. A PromptQuorum não testou o uso offline.',
          },
          {
            q: 'Quais formatos o Rescript pode exportar?',
            a: 'Segundo o fabricante: vídeo MP4 ou WebM de até 4K; áudio M4A, MP3 ou WAV; transcrições em TXT, Markdown, DOCX ou PDF; legendas em SRT, VTT ou JSON; e linhas do tempo para DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude ou Blender. A PromptQuorum não verificou a fidelidade da exportação.',
          },
          {
            q: 'O Rescript consegue remover vícios de linguagem e silêncios?',
            a: 'Segundo o site, um clique remove "um", "uh" e vícios parecidos, e outro remove silêncios de 0,3 segundo ou mais no arquivo inteiro. A PromptQuorum não testou a precisão com que eles são detectados.',
          },
          {
            q: 'O Rescript identifica quem está falando?',
            a: 'Segundo o fabricante, rótulos automáticos de falante agrupam a transcrição por quem está falando, e os falantes podem ser renomeados; o README cita o pyannote-segmentation-3.0 para isso. A PromptQuorum não testou os rótulos.',
          },
          {
            q: 'O que a telemetria do Rescript coleta, e posso desligá-la?',
            a: 'O README diz que estatísticas de uso anônimas e relatórios de falhas vêm ativados por padrão e podem ser desligados nas configurações, em «Privacy». Segundo a página de privacidade, a telemetria inclui um ID de instalação aleatório, um de quatro nomes de evento e propriedades gerais como a versão do aplicativo, a família do sistema operacional e o modelo ou formato de exportação usado; endereços IP não são registrados, e os relatórios de falhas vão para o Sentry sem os nomes dos arquivos de mídia. A PromptQuorum não inspecionou o tráfego de rede.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Rescript vale uma olhada se você corta entrevistas, podcasts ou vídeos de uma pessoa falando para a câmera para uso não comercial e quer uma edição baseada em transcrição que, segundo o fabricante, roda no seu próprio computador.**',
          'No papel ele cobre muita coisa: cortes palavra por palavra, remoção de vícios de linguagem e silêncios, rótulos de falantes, regeneração de voz e exportações para outros editores. O desenvolvimento está ativo, com três versões entre 3 e 29 de outubro de 2026 e um commit em 5 de novembro de 2026.',
          'As contrapartidas são reais: o uso comercial exige uma licença paga sem preço publicado, o projeto tem só alguns meses, os próprios termos do fabricante dizem que a transcrição e a fala sintetizada cometem erros, e a PromptQuorum não testou nada. Experimente numa cópia de uma gravação e confira a transcrição e os cortes antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Rescript](https://getrescript.com) — recursos, perguntas frequentes e downloads, consultado em 18 de novembro de 2026.',
          '[Política de privacidade](https://www.getrescript.com/privacy) — o que fica no dispositivo e o que é coletado, datada de 8 de agosto de 2026, consultada em 18 de novembro de 2026.',
          '[Termos de uso](https://www.getrescript.com/terms) — licença, lei aplicável e contato, datados de 8 de agosto de 2026, consultados em 18 de novembro de 2026.',
          '[Política de uso aceitável](https://www.getrescript.com/acceptable-use) — regras de consentimento para o Regenerate e limites da licença, consultada em 18 de novembro de 2026.',
          '[Página do Regenerate](https://www.getrescript.com/regenerate-speech) — idiomas, modelo de voz e tamanhos dos pacotes, consultada em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/wassgha/rescript) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — recursos, tecnologia, telemetria e licença, consultado em 18 de novembro de 2026.',
          '[Versões do GitHub](https://github.com/wassgha/rescript/releases) — datas de versões, pacotes e as notas da v1.2.5, consultadas em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do FunClip](/pt/power-local-llm/funclip-review) — recortar vídeo com texto de reconhecimento de voz numa interface web local.',
          '[Análise do Subtitle Edit](/pt/power-local-llm/subtitle-edit-review) — um editor de legendas com transcrição local da família Whisper.',
          '[Análise do Aiko](/pt/power-local-llm/aiko-review) — transcrição Whisper no dispositivo para aparelhos Apple.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-ja.webp',
    title: 'Rescriptレビュー：動画・音声をテキストで編集',
    seoTitle: 'Rescriptレビュー：文字起こしで動画を編集するツール',
    intro:
      'Rescript 1.2.5は、Whisperで動画や音声を文字起こしし、単語を削除するだけで映像をカットでき、元の話者の声でセリフを言い直すこともできる、ブラウザ／デスクトップ向けのエディターです。公式サイトとREADMEによると、文字起こし・編集・書き出しはすべて手元のデバイス上で行われ、何もアップロードされません。ライセンスはPolyForm Noncommercial 1.0.0のため、商用利用には有償ライセンスが必要です。本レビューは公式サイト、リリース情報を含むGitHubリポジトリ、プライバシー・利用規約・許容される利用のページに基づき、2026年11月18日に確認しました。PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Rescriptは、Whisperの文字起こしから単語を削除して動画・音声をカットできるソース公開型エディターです。非商用は無料。確認できた内容を整理しました。',
    twitterDescription:
      'Rescript：Whisperの文字起こしから単語を削除して映像をカットできるソース公開型の動画・音声エディター。話者ラベルと声のクローンによるセリフ修正に対応。確認できた内容。',
    audience:
      '非商用でトーク中心の録画・録音を編集するポッドキャスターやインタビュアー、動画制作者、機密性のある録音を自分のパソコン内で編集したい人、テキストでラフカットを作りたい編集者',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rescriptレビュー',
    targetKeywords: [
      'Rescript レビュー',
      'テキストで動画編集',
      '文字起こしベースの動画編集',
      'Whisper ローカル 動画編集',
      '動画 フィラー削除',
      'オフライン 文字起こし エディター',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescriptは、非商用は無料のソース公開型エディターで、メーカーによると手元のデバイス上でWhisperにより動画・音声を文字起こしし、文字起こしから単語を削除すると映像をカットします。** ブラウザおよびmacOS・Windows・Linux向けデスクトップアプリで動作し、話者の声でセリフを言い直すことができ、動画・音声・字幕・他の編集ソフト向けタイムラインを書き出せます。商用利用には有償ライセンスが必要で、PromptQuorumは実機で検証していません。',
    quickAnswerTop: {
      ja: {
        question: 'Rescriptとは何で、誰に向いていますか？',
        answer:
          'Rescriptは、トーク中心の動画・音声向けの文字起こしベースのエディターで、GitHub上で公開開発されています。インタビュー、ポッドキャスト、話者が正面を向く動画を編集し、作業を自分のパソコン内に留めたい人に向いています。',
        bullets: [
          'ライセンスはPolyForm Noncommercial 1.0.0：非商用は無料で、商用利用には有償ライセンスが必要です。',
          'メーカーによると、単語単位のタイムスタンプと話者ラベル付きのWhisper文字起こしは、デバイス上（ブラウザ、またはmacOS・Windows・Linux向けデスクトップアプリ）で動作します。',
          '単語を削除すると映像がカットされます。ワンクリックで「um」「uh」と0.3秒以上の無音を除去でき、動画・音声・文字起こし・字幕・他ソフト向けタイムラインを書き出せます。',
          'Regenerateは、話者のクローン音声でセリフを6言語で言い直します。メーカーの許容される利用ポリシーは、話者の同意を求めています。',
          'リポジトリは2026年7月に作成され、バージョン1.2.5は2026年10月29日に公開、メインブランチの最終コミットは2026年11月5日です。',
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
            text: 'Rescriptは、メーカーによると手元のパソコンで動画・音声を文字起こしし、文字起こしから単語を削除すると映像をカットするソース公開型エディターです。',
          },
          {
            type: 'plain-terms',
            text: '録画・録音のためのワープロだと考えてください。文字起こしがそのままタイムラインになります。一文を消せば対応する映像が切れ、差し替えの文を入力すれば、希望に応じてRescriptがその人の声で読み上げます。',
          },
        ],
        items: [
          'ブラウザで使うか、GitHubのリリースページからデスクトップアプリを入手します：macOSはDMG、WindowsはセットアップEXE、LinuxはAppImageまたはDEB。',
          'メーカーによると、Whisperによる文字起こし、話者ラベル、書き出しはデバイス上で動作します。モデルはHugging Faceから一度だけダウンロードされ、その後はキャッシュされます。',
          '非商用は無料です。商用利用には有償ライセンスが必要で、メーカーは、自社サーバーで動くオプションの有料機能を後から追加する可能性があるとしています。',
          'テレメトリーとクラッシュレポートは初期状態で有効ですが、設定で無効にできます。メーカーは送信内容を公開しています。',
          'PromptQuorumはアプリを検証していないため、文字起こしの精度、カットの品質、音声の品質は未確認です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '公式サイトはアカウント不要・アップロードなしとし、プライバシーページは動画・音声、文字起こし、クローン音声がデバイスの外に出ないと述べています。PromptQuorumはネットワーク通信を調べていないため、メーカーの記述以上のことは確認できません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Rescriptは、動画・音声向けの文字起こしベースのエディターで、PolyForm Noncommercial 1.0.0ライセンスのもと、Webアプリおよび macOS・Windows・Linux向けデスクトップアプリとして公開されています。**',
          '[github.com/wassgha/rescript](https://github.com/wassgha/rescript)で公開開発されており、ライセンスファイルにはWassim Gharbi氏と貢献者の名前が記されています。リポジトリは2026年7月に作成され、バージョン1.2.5は2026年10月29日に公開、メインブランチの最終コミットは2026年11月5日です。開発は活発で、放置プロジェクトの警告は該当しません。メーカーはこのプロジェクトをオープンソースと呼んでいますが、ライセンスが商用利用を禁じているため、PromptQuorumはソース公開型と表記します。公式サイトとプライバシーページは主語を「we」とし、会社名・住所・運営者情報は示していませんが、利用規約は米国カリフォルニア州法に準拠するとされています。',
          'メーカーによると、動画や音声ファイルを取り込むと、Whisperがデバイス上で単語単位のタイムスタンプと話者ラベル付きで文字起こしし、文字起こしの単語を削除すると対応する映像がカットされます。タイムラインには波形、単語バー、カット範囲が表示され、文字起こしの代わりに手持ちのSRT・VTT・JSON字幕を読み込むこともできます。Regenerate機能は、選択したセリフを書き直し、ファイル内にある約10秒分の話者の音声からパソコン上でクローンした声で読み上げます。',
          'PromptQuorumはアプリを実行しておらず、文字起こしの精度、カットの品質、書き出しの忠実度、再生成された音声の品質は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Rescriptは、何もインストールせずブラウザで使えるほか、公式サイトがプラットフォームごとにリンクしているGitHubのリリースページのパッケージからデスクトップアプリを入手できます。**',
          'v1.2.5のリリースには、Apple SiliconとIntel向けのmacOS用DMG、Windows用セットアップEXE、Linux用のAppImageとDEBパッケージが並んでいます。READMEによると、デスクトップ版はGitHub Releasesから自動更新され、macOS版は署名・公証済みです。',
        ],
        columns: ['プラットフォーム', 'パッケージ'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple Silicon）', 'パッケージ': 'DMG' },
          { 'プラットフォーム': 'macOS（Intel）', 'パッケージ': 'DMG（x64）' },
          { 'プラットフォーム': 'Windows', 'パッケージ': 'セットアップEXE' },
          { 'プラットフォーム': 'Linux', 'パッケージ': 'AppImageまたはDEB' },
          { 'プラットフォーム': '[Webアプリ](https://app.getrescript.com)', 'パッケージ': 'ブラウザ、インストール不要（Chromium推奨）' },
          { 'プラットフォーム': '[ソースコード](https://github.com/wassgha/rescript)', 'パッケージ': 'ソースからビルド（READMEを参照）' },
        ],
        note: '[GitHubのリリースページ](https://github.com/wassgha/rescript/releases/latest)からダウンロードするか、[Webアプリ](https://app.getrescript.com)を開いてください。PromptQuorumはインストーラーを実行しておらず、OSによる署名や公証の有無も確認していません。READMEはmacOS版が署名・公証済みだと記しています。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Rescriptには、比較的新しいmacOS・Windows・Linuxのパソコン、またはChromiumベースのブラウザが必要です。メモリやGPUの最低要件はメーカーから公開されていません。**',
          '一覧はREADMEと公式サイトに基づきます。Webアプリは SharedArrayBuffer を必要とし、利用可能ならWebGPUで文字起こしを行い、なければWASMにフォールバックします。Regenerateは言語ごとに音声バンドルをダウンロードし、メーカーによると高速モデルは約140 MB、高品質モデルは約360 MBです。PromptQuorumはメモリ使用量や速度を測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'デスクトップ', '記載されている内容': 'macOS（Apple Silicon、Intel）、Windows、Linux' },
          { '項目': 'ブラウザ', '記載されている内容': 'Chromiumベースを推奨' },
          { '項目': '文字起こし', '記載されている内容': 'Whisper BaseまたはSmall' },
          { '項目': '話者ラベル', '記載されている内容': 'pyannote-segmentation-3.0' },
          { '項目': '音声バンドル', '記載されている内容': '言語ごとに約140 MBまたは約360 MB' },
          { '項目': 'メモリとGPU', '記載されている内容': '未公開' },
        ],
        note: 'Whisperモデルと話者モデルはHugging Faceから一度だけダウンロードされてキャッシュされ、その後はメーカーによるとネットワーク接続なしでエディターが動作します。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Rescriptはまず文字起こしエディターであり、タイムライン、フィラー除去、話者ラベル、音声の再生成がその周りに加わります。** 以下はすべて、公式サイトとREADMEに基づくメーカーの主張です。',
        ],
        items: [
          '単語単位の編集：文字起こしの単語を選んで削除すると、再生時にすべてのカットがリアルタイムでスキップされ、カットは話された単語に追従します。',
          'クリーンアップ：ワンクリックで「um」「uh」などのフィラーを除去し、別のワンクリックでファイル全体の0.3秒以上の無音を除去します。',
          '文字起こし：単語タイムスタンプ付きのWhisper BaseまたはWhisper Small。既存のSRT・VTT・JSON字幕ファイルを読み込むこともできます。',
          '話者：自動の話者ラベルが文字起こしを話している人ごとにまとめ、話者名の変更もできます。',
          'タイムライン：波形、ドラッグ可能なタイミングハンドル付きの単語バー、分割、カット範囲、ズームとスクロールで、単語の境界を越えてカットを微調整できます。',
          'Regenerate：選択したセリフを書き直し、その話者の声で英語・スペイン語・フランス語・ドイツ語・イタリア語・ポルトガル語のいずれかで読み上げます。新しいセリフが空き時間に収まらない場合は、生成前にフィットメーターが警告します。',
          '書き出し：4KまでのMP4またはWebM、M4A・MP3・WAVの音声、TXT・Markdown・DOCX・PDFの文字起こし、SRT・VTT・JSONの字幕、DaVinci Resolve・Premiere・Final Cut・Pro Tools・Logic・Reaper・Samplitude・Blender向けのタイムライン。',
          'インターフェース言語：ドイツ語、英語、スペイン語、フランス語、イタリア語、日本語、韓国語、ポルトガル語、中国語（簡体字・繁体字）。v1.2.5のリリースノートによります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**メーカーによると、動画・音声、文字起こし、プロジェクト、書き出しファイル、クローン音声はデバイス上に留まります。PromptQuorumはネットワーク通信を調べておらず、これを確認できません。**',
          '2026年8月8日付のプライバシーページは、アップロードの手順は存在せず、エディターにアカウントは不要で、プロジェクトはブラウザのストレージまたはディスクに保存されると述べています。ネットワークを使う項目も挙げており、Hugging Faceからの音声認識・話者・音声モデルの一度きりのダウンロード、デスクトップアプリのGitHub Releasesでの更新確認、公式サイト上の任意のメール登録、匿名のテレメトリーとクラッシュレポートです。',
          'READMEによると、匿名の利用統計とクラッシュレポートは初期状態で有効で、設定のPrivacyから無効にできます。プライバシーページは、テレメトリーにはランダムなインストールID、4種類のイベント名のいずれか、アプリのバージョン・OSの種類・使用したモデルや書き出し形式といった大まかな属性が含まれ、IPアドレスは記録されず、クラッシュレポートはメディアのファイル名を除いてSentryに送られると述べています。公式サイト自体はVercel Web Analyticsを使い、Google Analyticsを使う場合があります。',
          'メーカーは、クローン音声はパソコンのメモリ上で作られ、音声プロファイルがサーバーに保存されることはないとしています。許容される利用ポリシーは、声を再生成される本人の十分な説明に基づく同意を求め、合成音声に関する法律は国によって異なると述べています。Regenerateは自分の録音の修正向けで、適法に使う責任は利用者にあります。PromptQuorumは法的助言を行いません。',
          'ソースコードはGitHubで公開されているため、データの流れを検証できます。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Rescriptは、非商用でトーク中心の録画・録音を編集し、作業を自分のパソコン内に留めたい人に向いています。**',
        ],
        items: [
          'フィラーを取り除き、テキスト編集でテイクを作り直したいポッドキャスター、インタビュアー、趣味の動画制作者。',
          'インタビューや未公開映像など機密性のある録音を扱い、メディアをアップロードしないとするツールを好む人。',
          'テキストでラフカットを作り、その後タイムラインをDaVinci Resolve、Premiere、Final Cut、Reaperへ書き出したい編集者。',
          'コードが公開されているプロジェクトを好む人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Rescriptは向かない場面もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない人：商用の仕事。ライセンスは個人プロジェクト、学習、研究、評価を対象とし、メーカーによると商用利用にはメールで依頼する別の有償ライセンスが必要です。PromptQuorumは公開価格を見つけられませんでした。',
          '向かない人：今すぐ成熟した製品が必要な人。リポジトリは2026年7月の作成で、メーカー自身の利用規約も、文字起こしと合成音声は誤りを含むと述べています。',
          '未確認：文字起こしの精度、カットの品質、書き出しの忠実度、再生成された声の品質。PromptQuorumはアプリを実行していません。',
          '未確認：初期状態で有効なテレメトリー、クラッシュレポート、更新確認がある中での「何もデバイスの外に出ない」という主張。PromptQuorumはネットワーク通信を調べていません。',
          '未確認：macOS・Windows・Linuxのインストーラーが署名・公証されているか。READMEが署名済みと述べるのはmacOS版のみで、WindowsとLinuxの署名には触れていません。',
          '未確認：メモリや速度の要件（最低要件が公開されていないため）と、どのWhisperモデルがどのパソコンに合うか。',
          '未確認：誰がプロジェクトを運営し、何人が使っているか。会社名や運営者情報は見つからず、PromptQuorumは第三者のレビューも探していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescriptと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Rescriptは、話し言葉のメディアを文字起こしして切る他のツールと一部重なります。PromptQuorumは実機で比較していません。** 以下のツールはディレクトリに掲載されており、それぞれのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Rescript', '情報源での記載': 'PolyForm NC、Mac/Windows/Linux/Web、文字起こしで動画編集' },
          { 'ツール': '[FunClip](/ja/power-local-llm/funclip-review)', '情報源での記載': 'MIT、ローカルWeb UI、音声認識テキストで動画を切り出し' },
          { 'ツール': '[Subtitle Edit](/ja/power-local-llm/subtitle-edit-review)', '情報源での記載': 'MIT、Windows/macOS/Linux、Whisper対応の字幕エディター' },
          { 'ツール': '[Aiko](/ja/power-local-llm/aiko-review)', '情報源での記載': 'クローズドソース、iPhone/iPad/Mac、端末内Whisper文字起こし' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Rescriptを使うのにアカウントは必要ですか？',
            a: 'メーカーによると不要です。エディターにアカウントは要りません。メールで届くサインインリンクは公式サイトへのサインインにだけ使われ、メール登録は任意です。',
          },
          {
            q: 'Rescriptは商用利用でも無料ですか？',
            a: 'いいえ。PolyForm Noncommercial 1.0.0のもとで提供され、個人プロジェクト、学習、研究、評価が対象です。メーカーによると商用利用にはメールで依頼する別の有償ライセンスが必要で、PromptQuorumは公開価格を見つけられませんでした。',
          },
          {
            q: 'メディアファイルはパソコンの外に出ますか？',
            a: 'メーカーによると出ません。文字起こし、編集、音声の再生成、書き出しはデバイス上で動作し、ダウンロードされるのは一度きりのモデルファイルと更新確認だけです。テレメトリーとクラッシュレポートは初期状態で有効で、設定で無効にできます。PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: 'Rescriptで誰かの発言内容を変えられますか？',
            a: 'はい。Regenerateで、書き直したセリフをその話者のクローン音声で6言語のいずれかで読み上げられます。許容される利用ポリシーは話者の十分な説明に基づく同意を求め、合成音声に関する法律は国によって異なるため、ご自身に適用される内容を確認してください。PromptQuorumは声の品質を検証していません。',
          },
          {
            q: 'Rescriptはどのくらいの頻度で更新されますか？',
            a: 'GitHubには、バージョン1.2.3が2026年10月3日、1.2.4が2026年10月5日、1.2.5が2026年10月29日と記載され、メインブランチのコミットは2026年11月5日まであります。デスクトップアプリはGitHub Releasesで更新を確認します。',
          },
          {
            q: 'Rescriptはどのプラットフォームで動きますか？',
            a: 'メーカーによると、ブラウザ（Chromiumベース推奨）と、macOS（Apple SiliconおよびIntel）・Windows・Linux向けのデスクトップアプリで動作します。v1.2.5のリリースにはDMG、セットアップEXE、AppImage、DEBパッケージが掲載されています。',
          },
          {
            q: 'Rescriptはオープンソースですか？',
            a: 'メーカーはオープンソースと呼んでいますが、ライセンスは商用利用を禁じるPolyForm Noncommercial 1.0.0であるため、PromptQuorumはソース公開型と表現しています。コードはGitHubで公開され、非商用利用は無料です。商用利用には有償ライセンスが必要です。',
          },
          {
            q: 'Rescriptはインターネット接続なしで動きますか？',
            a: 'メーカーによると、Whisperと話者のモデルはHugging Faceから一度だけダウンロードされてキャッシュされ、その後はネットワーク接続なしでエディターが動作します。デスクトップアプリはGitHub Releasesで更新を確認します。PromptQuorumはオフライン利用をテストしていません。',
          },
          {
            q: 'Rescriptはどんな形式で書き出せますか？',
            a: 'メーカーによると、最大4KのMP4またはWebM動画、M4A・MP3・WAV音声、TXT・Markdown・DOCX・PDFの文字起こし、SRT・VTT・JSONの字幕、そしてDaVinci Resolve、Premiere、Final Cut、Pro Tools、Logic、Reaper、Samplitude、Blender向けのタイムラインです。PromptQuorumは書き出しの忠実度を確認していません。',
          },
          {
            q: 'Rescriptはフィラーや無音を除去できますか？',
            a: 'ウェブサイトによると、ワンクリックで「um」「uh」などのフィラーを除去し、別のワンクリックでファイル全体の0.3秒以上の無音を除去します。PromptQuorumは検出の精度をテストしていません。',
          },
          {
            q: 'Rescriptは誰が話しているかを区別しますか？',
            a: 'メーカーによると、自動の話者ラベルが文字起こしを話者ごとにまとめ、話者名は変更できます。READMEにはこのためにpyannote-segmentation-3.0が挙げられています。PromptQuorumはラベルをテストしていません。',
          },
          {
            q: 'Rescriptのテレメトリーは何を収集し、無効にできますか？',
            a: 'READMEによると、匿名の利用統計とクラッシュレポートは初期状態で有効で、設定の「Privacy」で無効にできます。プライバシーページによると、テレメトリーにはランダムなインストールID、4種類のイベント名のいずれか、アプリのバージョン、OSの種類、使用したモデルや書き出し形式といった大まかな情報が含まれます。IPアドレスは記録されず、クラッシュレポートはメディアのファイル名を除いてSentryに送られます。PromptQuorumはネットワーク通信を調べていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Rescriptは、インタビュー、ポッドキャスト、話者が正面を向く動画を非商用で編集し、メーカーによると自分のパソコン上で動く文字起こしベースの編集を求める人なら、試す価値があります。**',
          '仕様の上では、単語単位のカット、フィラーと無音の除去、話者ラベル、音声の再生成、他の編集ソフト向け書き出しと、幅広くカバーしています。開発は活発で、2026年10月3日から29日の間に3回のリリースがあり、2026年11月5日にもコミットがあります。',
          'トレードオフも現実的です。商用利用には価格が公開されていない有償ライセンスが必要で、プロジェクトはまだ数か月で、メーカー自身の利用規約も文字起こしと合成音声は誤りを含むと述べており、PromptQuorumは何も検証していません。録音のコピーで試し、文字起こしとカットを確認してから頼ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Rescript公式サイト](https://getrescript.com) — 機能、FAQ、ダウンロード。2026年11月18日に確認。',
          '[プライバシーポリシー](https://www.getrescript.com/privacy) — デバイスに留まるものと収集されるもの。2026年8月8日付、2026年11月18日に確認。',
          '[利用規約](https://www.getrescript.com/terms) — ライセンス、準拠法、連絡先。2026年8月8日付、2026年11月18日に確認。',
          '[許容される利用ポリシー](https://www.getrescript.com/acceptable-use) — Regenerateの同意ルールとライセンスの制限。2026年11月18日に確認。',
          '[Regenerateのページ](https://www.getrescript.com/regenerate-speech) — 対応言語、音声モデル、バンドルサイズ。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/wassgha/rescript) — ライセンス、作成日、最終コミット。2026年11月18日に確認。',
          '[README](https://github.com/wassgha/rescript#readme) — 機能、技術構成、テレメトリー、ライセンス。2026年11月18日に確認。',
          '[GitHubリリース](https://github.com/wassgha/rescript/releases) — リリース日、パッケージ、v1.2.5のリリースノート。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[FunClipレビュー](/ja/power-local-llm/funclip-review) — ローカルWeb UIで音声認識テキストから動画を切り出すツール。',
          '[Subtitle Editレビュー](/ja/power-local-llm/subtitle-edit-review) — ローカルのWhisper系文字起こしに対応した字幕エディター。',
          '[Aikoレビュー](/ja/power-local-llm/aiko-review) — Apple製品向けの端末内Whisper文字起こしアプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-zh.webp',
    title: 'Rescript 点评：编辑转写文本即可剪辑视频和音频',
    seoTitle: 'Rescript 点评：通过转写文本剪辑视频和音频',
    intro:
      'Rescript 1.2.5 是一款浏览器和桌面编辑器，用 Whisper 转写视频或音频，删除文字即可剪掉对应画面，还能用原说话人的声音重说一句台词。根据其官网和 README，转写、编辑和导出都在你自己的设备上完成，不会上传任何内容。许可证为 PolyForm Noncommercial 1.0.0，商业使用需要付费许可。本点评基于官网、含发布记录的 GitHub 仓库，以及隐私、条款和可接受使用页面，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过该应用。',
    metaDescription:
      'Rescript 是一款源码可见的编辑器，在 Whisper 转写文本中删除词语即可剪辑视频和音频，非商业使用免费。以下整理了已确认的信息和未核实的部分。',
    twitterDescription:
      'Rescript：源码可见的视频和音频编辑器，在 Whisper 转写文本中删除词语即可剪掉画面，带说话人标签和克隆声音的台词修正。已确认的信息。',
    audience:
      '为非商业用途剪辑口语类录音录像的播客主、访谈者和视频创作者，希望剪辑留在自己电脑上的敏感录音持有者，以及想用文字做粗剪的剪辑师',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rescript 点评',
    targetKeywords: [
      'Rescript 点评',
      '通过文字剪辑视频',
      '基于转写文本的视频编辑器',
      '本地 Whisper 视频编辑',
      '视频去除口头禅',
      '离线转写编辑器',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript 是一款源码可见、非商业使用免费的编辑器，据厂商称用 Whisper 在你自己的设备上转写视频和音频，在转写文本中删除词语即可剪掉对应画面。** 它可在浏览器中运行，也有适用于 macOS、Windows 和 Linux 的桌面应用，能用说话人的声音重说一句台词，并导出视频、音频、字幕或供其他剪辑软件使用的时间线。商业使用需要付费许可，PromptQuorum 没有测试过该应用。',
    quickAnswerTop: {
      zh: {
        question: 'Rescript 是什么，适合谁用？',
        answer:
          'Rescript 是面向口语类视频和音频的、基于转写文本的编辑器，在 GitHub 上公开开发。适合剪辑访谈、播客和真人出镜视频，并希望剪辑过程留在自己电脑上的人。',
        bullets: [
          '许可证为 PolyForm Noncommercial 1.0.0：非商业使用免费，商业使用需要付费许可。',
          '据厂商称，带逐词时间戳和说话人标签的 Whisper 转写在你的设备上运行，可在浏览器中使用，也有 macOS、Windows 和 Linux 桌面应用。',
          '删除词语即可剪掉画面；一键去除 "um"、"uh" 以及 0.3 秒以上的静音；可导出视频、音频、转写文本、字幕或供其他软件使用的时间线。',
          'Regenerate 用说话人克隆的声音重说一句台词，支持六种语言；厂商的可接受使用政策要求取得说话人同意。',
          '仓库创建于 2026 年 7 月；1.2.5 版本发布于 2026 年 10 月 29 日，主分支最后一次提交在 2026 年 11 月 5 日。',
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
            text: 'Rescript 是一款源码可见的编辑器，据厂商称会在你的电脑上转写视频和音频，在转写文本中删除词语即可剪掉对应画面。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成录音录像的文字处理器：转写文本就是时间线。删掉一句话，对应的画面就被剪掉；输入替换内容，还可以让 Rescript 用那个人的声音念出来。',
          },
        ],
        items: [
          '可在浏览器中使用，也可从 GitHub 发布页下载桌面应用：macOS 为 DMG，Windows 为安装程序 EXE，Linux 为 AppImage 或 DEB。',
          '据厂商称，Whisper 转写、说话人标签和导出都在你的设备上运行；模型只从 Hugging Face 下载一次，之后会缓存。',
          '非商业使用免费；商业使用需要付费许可，厂商表示以后可能推出在其服务器上运行的可选付费功能。',
          '遥测和崩溃报告默认开启，可在设置中关闭；厂商列出了它们包含的内容。',
          'PromptQuorum 没有测试过该应用，因此转写准确度、剪辑质量和语音质量均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '官网称编辑器无需账号、无需上传，隐私页面称媒体文件、转写文本和克隆声音不会离开设备。PromptQuorum 没有检查网络流量，因此除厂商的说法外无法确认。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Rescript 是面向视频和音频的、基于转写文本的编辑器，以 Web 应用以及适用于 macOS、Windows 和 Linux 的桌面应用发布，许可证为 PolyForm Noncommercial 1.0.0。**',
          '它在 [github.com/wassgha/rescript](https://github.com/wassgha/rescript) 公开开发，许可证文件署名为 Wassim Gharbi 和贡献者。仓库创建于 2026 年 7 月；1.2.5 版本发布于 2026 年 10 月 29 日，主分支最后一次提交在 2026 年 11 月 5 日，因此开发活跃，不适用停滞项目警告。厂商称该项目为开源；由于许可证禁止商业使用，PromptQuorum 将其描述为源码可见。官网和隐私页面以 "we" 自称，没有写明公司名称、地址或运营者信息，但条款受美国加利福尼亚州法律管辖。',
          '据厂商介绍，你导入视频或音频文件后，Whisper 会在你的设备上转写，带逐词时间戳和说话人标签，删除转写文本中的词语就会剪掉对应画面。时间线显示波形、词语条和被剪掉的区域，你也可以导入自己的 SRT、VTT 或 JSON 字幕来代替转写。Regenerate 功能会改写所选台词，并用该说话人的声音念出来，声音由你的电脑根据文件中已有的约十秒该说话人音频克隆而成。',
          'PromptQuorum 没有运行过该应用，也没有核实转写准确度、剪辑质量、导出保真度或重新生成语音的质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**你可以在浏览器中直接使用 Rescript，无需安装；也可以从 GitHub 发布页的安装包下载桌面应用，官网为每个平台都提供了链接。**',
          'v1.2.5 版本提供适用于 Apple Silicon 和 Intel 的 macOS DMG、Windows 安装程序 EXE，以及 Linux 的 AppImage 和 DEB 包。README 称桌面版会通过 GitHub Releases 自动更新，macOS 版已签名并经过公证。',
        ],
        columns: ['途径', '获取方式'],
        rows: [
          { '途径': 'macOS（Apple Silicon）', '获取方式': 'DMG' },
          { '途径': 'macOS（Intel）', '获取方式': 'DMG（x64）' },
          { '途径': 'Windows', '获取方式': '安装程序 EXE' },
          { '途径': 'Linux', '获取方式': 'AppImage 或 DEB' },
          { '途径': '[Web 应用](https://app.getrescript.com)', '获取方式': '浏览器，无需安装（推荐 Chromium）' },
          { '途径': '[源码](https://github.com/wassgha/rescript)', '获取方式': '从源码构建（见 README）' },
        ],
        note: '请从 [GitHub 发布页](https://github.com/wassgha/rescript/releases/latest)下载，或打开 [Web 应用](https://app.getrescript.com)。PromptQuorum 没有运行安装程序，也没有核实它们是否经过操作系统层面的签名或公证；README 称 macOS 版已签名并公证。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Rescript 需要较新的 macOS、Windows 或 Linux 电脑，或基于 Chromium 的浏览器；厂商没有公布内存或 GPU 的最低要求。**',
          '以下清单来自 README 和官网。Web 应用需要 SharedArrayBuffer，转写时在可用时使用 WebGPU，否则回退到 WASM。Regenerate 会为每种语言下载一个语音包：据厂商称，较快的模型约 140 MB，质量更高的模型约 360 MB。PromptQuorum 没有测量内存占用或速度。',
        ],
        columns: ['项目', '官方标注的数据'],
        rows: [
          { '项目': '桌面端', '官方标注的数据': 'macOS（Apple Silicon、Intel）、Windows、Linux' },
          { '项目': '浏览器', '官方标注的数据': '推荐基于 Chromium 的浏览器' },
          { '项目': '转写', '官方标注的数据': 'Whisper Base 或 Small' },
          { '项目': '说话人标签', '官方标注的数据': 'pyannote-segmentation-3.0' },
          { '项目': '语音包', '官方标注的数据': '每种语言约 140 MB 或约 360 MB' },
          { '项目': '内存和 GPU', '官方标注的数据': '未公布' },
        ],
        note: 'Whisper 和说话人模型只从 Hugging Face 下载一次并缓存；据厂商称，此后编辑器无需网络连接即可工作。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Rescript 首先是一款转写文本编辑器；时间线、口头禅清理、说话人标签和语音重新生成都围绕它展开。** 以下各项均为厂商在官网和 README 中的说法。',
        ],
        items: [
          '逐词编辑：在转写文本中选中词语并删除；播放时实时跳过每一处剪切，剪切位置跟随所说的词语。',
          '清理：一键去除 "um"、"uh" 等口头禅，另一键去除整个文件中 0.3 秒以上的静音。',
          '转写：带逐词时间戳的 Whisper Base 或 Whisper Small，也可改为导入现有的 SRT、VTT 或 JSON 字幕文件。',
          '说话人：自动说话人标签按发言人对转写文本分组，说话人可以重命名。',
          '时间线：波形、带可拖动时间手柄的词语条、拆分、剪切区域、缩放和平移，可在词语边界之外微调剪切点。',
          'Regenerate：改写所选台词，并用该说话人的声音以英语、西班牙语、法语、德语、意大利语或葡萄牙语念出来；如果新台词放不进空档，生成前会有适配度提示。',
          '导出：最高 4K 的 MP4 或 WebM；M4A、MP3 或 WAV 音频；TXT、Markdown、DOCX 或 PDF 转写文本；SRT、VTT 或 JSON 字幕；以及供 DaVinci Resolve、Premiere、Final Cut、Pro Tools、Logic、Reaper、Samplitude 或 Blender 使用的时间线。',
          '界面语言：德语、英语、西班牙语、法语、意大利语、日语、韩语、葡萄牙语和中文（简体和繁体），依据 v1.2.5 发布说明。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据厂商称，视频、音频、转写文本、项目、导出文件和克隆声音都留在你的设备上；PromptQuorum 没有检查网络流量，无法确认这一点。**',
          '隐私页面（日期为 2026 年 8 月 8 日）称没有上传环节，编辑器无需账号，项目保存在浏览器存储或磁盘上。页面还列出了会用到网络的内容：一次性从 Hugging Face 下载语音识别、说话人和语音模型，桌面应用向 GitHub Releases 检查更新，官网上可选的邮箱订阅，以及匿名遥测和崩溃报告。',
          'README 称匿名使用统计和崩溃报告默认开启，可在设置的 Privacy 中关闭。隐私页面称遥测包含随机生成的安装 ID、四种事件名称之一，以及应用版本、操作系统类别、所用模型或导出格式等粗略属性；称不记录 IP 地址，崩溃报告发送到 Sentry 时已去除媒体文件名。官网本身使用 Vercel Web Analytics，并可能使用 Google Analytics。',
          '厂商称克隆声音在你电脑的内存中生成，不会在服务器上保存任何声音档案。可接受使用政策要求取得被重新生成声音者的知情同意，并指出各国对合成声音的法律规定不同；Regenerate 用于修正你自己的录音，合法使用是你自己的责任。PromptQuorum 不提供法律建议。',
          '源代码在 GitHub 上公开，因此数据流向可以核查。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Rescript 适合为非商业用途剪辑口语类录音录像、并希望工作留在自己电脑上的人。**',
        ],
        items: [
          '想去除口头禅、通过编辑文字重做片段的播客主、访谈者和业余视频创作者。',
          '手头有访谈或未发布素材等敏感录音，更倾向于声称从不上传媒体文件的工具的人。',
          '想用文字做粗剪，再把时间线导出到 DaVinci Resolve、Premiere、Final Cut 或 Reaper 的剪辑师。',
          '更看重项目代码公开可查的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Rescript 在某些情况下并不合适，也有若干细节无法核实。**',
        ],
        items: [
          '不适合：商业工作。许可证涵盖个人项目、学习、研究和评估；据厂商称，商业使用需要另行通过邮件申请付费许可，PromptQuorum 没有找到公开价格。',
          '不适合：现在就需要成熟产品的人。仓库创建于 2026 年 7 月，厂商自己的条款也称转写和合成语音都会出错。',
          '未核实：转写准确度、剪辑质量、导出保真度和重新生成声音的质量。PromptQuorum 没有运行过该应用。',
          '未核实：在默认开启遥测、崩溃报告和更新检查的情况下，"没有任何内容离开设备"的说法；PromptQuorum 没有检查网络流量。',
          '未核实：macOS、Windows 和 Linux 安装程序是否经过签名或公证；README 只称 macOS 版已签名，未提及 Windows 或 Linux 的签名。',
          '未核实：内存和速度需求（未公布最低要求），以及哪种 Whisper 模型适合哪种电脑。',
          '未核实：谁在运营该项目、有多少人在使用。没有找到公司名称或运营者信息，PromptQuorum 也没有查找独立评测。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Rescript 与其他转写并剪辑口语媒体的工具有部分重叠；PromptQuorum 没有实际对比过它们。** 下列工具已收录在目录中，描述均来自它们各自的点评。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Rescript', '来源中的记载': 'PolyForm NC；Mac/Windows/Linux/Web；按转写文本剪视频' },
          { '工具': '[FunClip](/zh/power-local-llm/funclip-review)', '来源中的记载': 'MIT；本地 Web 界面；按语音识别文本裁剪视频' },
          { '工具': '[Subtitle Edit](/zh/power-local-llm/subtitle-edit-review)', '来源中的记载': 'MIT；Windows/macOS/Linux；带 Whisper 的字幕编辑器' },
          { '工具': '[Aiko](/zh/power-local-llm/aiko-review)', '来源中的记载': '闭源；iPhone/iPad/Mac；设备端 Whisper 转写' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用 Rescript 需要账号吗？',
            a: '据厂商称不需要。编辑器无需账号。邮件中的登录链接只用于登录官网，邮箱订阅是可选的。',
          },
          {
            q: 'Rescript 商业使用也免费吗？',
            a: '不免费。它采用 PolyForm Noncommercial 1.0.0 许可证，涵盖个人项目、学习、研究和评估。据厂商称，商业使用需要另行通过邮件申请付费许可，PromptQuorum 没有找到公开价格。',
          },
          {
            q: '我的媒体文件会离开电脑吗？',
            a: '据厂商称不会：转写、编辑、语音重新生成和导出都在你的设备上运行，下载的只有一次性的模型文件和更新检查。遥测和崩溃报告默认开启，可在设置中关闭。PromptQuorum 没有检查网络流量。',
          },
          {
            q: 'Rescript 能改变别人说过的话吗？',
            a: '可以，通过 Regenerate，它用说话人克隆的声音以六种语言念出改写后的台词。可接受使用政策要求取得说话人的知情同意，各国对合成声音的法律规定不同，请确认适用于你的规定。PromptQuorum 没有测试语音质量。',
          },
          {
            q: 'Rescript 多久更新一次？',
            a: 'GitHub 显示 1.2.3 版本发布于 2026 年 10 月 3 日，1.2.4 于 2026 年 10 月 5 日，1.2.5 于 2026 年 10 月 29 日，主分支最近一次提交在 2026 年 11 月 5 日。桌面应用会向 GitHub Releases 检查更新。',
          },
          {
            q: 'Rescript 可在哪些平台上运行？',
            a: '据厂商称，可在浏览器中运行（推荐基于 Chromium 的浏览器），也有适用于 macOS（Apple Silicon 和 Intel）、Windows 和 Linux 的桌面应用。v1.2.5 版本列出了 DMG、安装 EXE、AppImage 和 DEB 包。',
          },
          {
            q: 'Rescript 是开源的吗？',
            a: '厂商称该项目是开源的，但其许可证是禁止商业使用的 PolyForm Noncommercial 1.0.0，因此 PromptQuorum 将其描述为源码可见（source-available）。代码在 GitHub 上公开，非商业使用免费；商业使用需要付费许可。',
          },
          {
            q: 'Rescript 可以离线使用吗？',
            a: '据厂商称，Whisper 和说话人模型会从 Hugging Face 下载一次并缓存，此后编辑器无需网络连接即可使用。桌面应用会通过 GitHub Releases 检查更新。PromptQuorum 没有测试离线使用。',
          },
          {
            q: 'Rescript 可以导出哪些格式？',
            a: '据厂商称：最高 4K 的 MP4 或 WebM 视频；M4A、MP3 或 WAV 音频；TXT、Markdown、DOCX 或 PDF 转写文本；SRT、VTT 或 JSON 字幕；以及供 DaVinci Resolve、Premiere、Final Cut、Pro Tools、Logic、Reaper、Samplitude 或 Blender 使用的时间线。PromptQuorum 没有检查导出的保真度。',
          },
          {
            q: 'Rescript 能去除口头禅和静音吗？',
            a: '据网站介绍，一键可去除 "um"、"uh" 等口头禅，另一键可去除整个文件中 0.3 秒以上的静音。PromptQuorum 没有测试其检测的准确程度。',
          },
          {
            q: 'Rescript 会标注谁在说话吗？',
            a: '据厂商称，自动说话人标签会按说话者对转写文本分组，说话人可以重命名；README 为此列出了 pyannote-segmentation-3.0。PromptQuorum 没有测试这些标签。',
          },
          {
            q: 'Rescript 的遥测会收集什么？可以关闭吗？',
            a: 'README 称匿名使用统计和崩溃报告默认开启，可在设置的“Privacy”中关闭。据隐私页面，遥测包含一个随机安装 ID、四种事件名称之一，以及应用版本、操作系统类别、所用模型或导出格式等粗略属性；不记录 IP 地址，崩溃报告会去掉媒体文件名后发送到 Sentry。PromptQuorum 没有检查网络流量。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你为非商业用途剪辑访谈、播客或真人出镜视频，并想要据厂商称在自己电脑上运行的、基于转写文本的剪辑方式，Rescript 值得一试。**',
          '从纸面上看，它覆盖面很广：逐词剪切、口头禅和静音清理、说话人标签、语音重新生成，以及面向其他剪辑软件的导出。开发活跃，2026 年 10 月 3 日至 29 日之间发布了三个版本，2026 年 11 月 5 日仍有提交。',
          '代价也是实在的：商业使用需要付费许可且没有公开价格，项目只有几个月，厂商自己的条款称转写和合成语音都会出错，而 PromptQuorum 没有测试任何内容。请先在录音副本上试用，核对转写文本和剪切点后再依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Rescript 官网](https://getrescript.com) — 功能、常见问题和下载，核查于 2026 年 11 月 18 日。',
          '[隐私政策](https://www.getrescript.com/privacy) — 哪些内容留在设备上、收集哪些数据，日期为 2026 年 8 月 8 日，核查于 2026 年 11 月 18 日。',
          '[使用条款](https://www.getrescript.com/terms) — 许可证、适用法律和联系方式，日期为 2026 年 8 月 8 日，核查于 2026 年 11 月 18 日。',
          '[可接受使用政策](https://www.getrescript.com/acceptable-use) — Regenerate 的同意规则和许可证限制，核查于 2026 年 11 月 18 日。',
          '[Regenerate 页面](https://www.getrescript.com/regenerate-speech) — 语言、语音模型和语音包大小，核查于 2026 年 11 月 18 日。',
          '[GitHub 仓库](https://github.com/wassgha/rescript) — 许可证、创建日期和最后一次提交，核查于 2026 年 11 月 18 日。',
          '[README](https://github.com/wassgha/rescript#readme) — 功能、技术栈、遥测和许可证，核查于 2026 年 11 月 18 日。',
          '[GitHub 发布页](https://github.com/wassgha/rescript/releases) — 发布日期、安装包和 v1.2.5 发布说明，核查于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[FunClip 点评](/zh/power-local-llm/funclip-review) — 在本地 Web 界面中按语音识别文本裁剪视频。',
          '[Subtitle Edit 点评](/zh/power-local-llm/subtitle-edit-review) — 支持本地 Whisper 系列转写的字幕编辑器。',
          '[Aiko 点评](/zh/power-local-llm/aiko-review) — 面向苹果设备的设备端 Whisper 转写。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-ko.webp',
    title: 'Rescript 리뷰: 전사 텍스트를 편집해 영상과 오디오를 자르는 도구',
    seoTitle: 'Rescript 리뷰: 전사 텍스트로 영상 편집',
    intro:
      'Rescript 1.2.5는 Whisper로 영상이나 오디오를 전사하고, 단어를 지우면 해당 장면이 잘리며, 원래 화자의 목소리로 문장을 다시 말하게 할 수도 있는 브라우저·데스크톱 편집기입니다. 공식 웹사이트와 README에 따르면 전사, 편집, 내보내기가 모두 사용자의 기기에서 실행되며 아무것도 업로드되지 않습니다. 라이선스는 PolyForm Noncommercial 1.0.0이므로 상업적 이용에는 유료 라이선스가 필요합니다. 이 리뷰는 공식 웹사이트, 릴리스가 포함된 GitHub 저장소, 개인정보·이용 약관·허용 가능한 사용 페이지를 바탕으로 2026년 11월 18일에 확인한 내용입니다. PromptQuorum은 앱을 직접 사용해 테스트하지 않았습니다.',
    metaDescription:
      'Rescript는 Whisper 전사 텍스트에서 단어를 지우면 영상과 오디오가 잘리는 소스 공개형 편집기입니다. 비상업적 이용은 무료입니다. 확인된 내용을 정리했습니다.',
    twitterDescription:
      'Rescript: Whisper 전사 텍스트에서 단어를 지우면 장면이 잘리는 소스 공개형 영상·오디오 편집기로, 화자 구분과 복제 음성 문장 수정을 지원합니다. 확인된 내용.',
    audience:
      '비상업적 용도로 말 중심의 녹화·녹음을 편집하는 팟캐스터, 인터뷰어, 영상 제작자와 민감한 녹음을 자신의 컴퓨터 안에서 편집하고 싶은 사람, 텍스트로 러프 컷을 만들고 싶은 편집자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rescript 리뷰',
    targetKeywords: [
      'Rescript 리뷰',
      '텍스트로 영상 편집',
      '전사 기반 영상 편집기',
      '로컬 Whisper 영상 편집',
      '영상 군말 제거',
      '오프라인 전사 편집기',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript는 비상업적 이용은 무료인 소스 공개형 편집기로, 제조사에 따르면 사용자의 기기에서 Whisper로 영상과 오디오를 전사하고 전사 텍스트에서 단어를 지우면 해당 장면을 자릅니다.** 브라우저와 macOS·Windows·Linux용 데스크톱 앱에서 실행되며, 화자의 목소리로 문장을 다시 말하게 할 수 있고, 영상·오디오·자막·다른 편집 소프트웨어용 타임라인을 내보냅니다. 상업적 이용에는 유료 라이선스가 필요하며 PromptQuorum은 앱을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Rescript는 무엇이며 누구에게 적합합니까?',
        answer:
          'Rescript는 말 중심의 영상·오디오를 위한 전사 기반 편집기로, GitHub에서 공개적으로 개발됩니다. 인터뷰, 팟캐스트, 화자가 정면을 보는 영상을 편집하면서 작업을 자신의 컴퓨터 안에 두고 싶은 분께 적합합니다.',
        bullets: [
          '라이선스는 PolyForm Noncommercial 1.0.0입니다. 비상업적 이용은 무료이며 상업적 이용에는 유료 라이선스가 필요합니다.',
          '제조사에 따르면 단어별 타임스탬프와 화자 구분이 포함된 Whisper 전사는 사용자의 기기, 브라우저 또는 macOS·Windows·Linux용 데스크톱 앱에서 실행됩니다.',
          '단어를 지워 장면을 자릅니다. 한 번의 클릭으로 "um", "uh"와 0.3초 이상의 무음을 제거하며, 영상·오디오·전사 텍스트·자막·다른 소프트웨어용 타임라인을 내보낼 수 있습니다.',
          'Regenerate는 화자의 복제 음성으로 문장을 6개 언어로 다시 말합니다. 제조사의 허용 가능한 사용 정책은 화자의 동의를 요구합니다.',
          '저장소는 2026년 7월에 만들어졌고, 버전 1.2.5는 2026년 10월 29일에 나왔으며, 메인 브랜치의 마지막 커밋은 2026년 11월 5일입니다.',
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
            text: 'Rescript는 제조사에 따르면 내 컴퓨터에서 영상과 오디오를 전사하고, 전사 텍스트에서 단어를 지우면 해당 장면을 자르는 소스 공개형 편집기입니다.',
          },
          {
            type: 'plain-terms',
            text: '녹화·녹음용 워드프로세서라고 생각하면 됩니다. 전사 텍스트가 곧 타임라인입니다. 문장을 지우면 해당 장면이 잘리고, 대체 문장을 입력하면 원하는 경우 Rescript가 그 사람의 목소리로 읽어 줍니다.',
          },
        ],
        items: [
          '브라우저에서 사용하거나 GitHub 릴리스 페이지에서 데스크톱 앱을 받습니다. macOS는 DMG, Windows는 설치 EXE, Linux는 AppImage 또는 DEB입니다.',
          '제조사에 따르면 Whisper 전사, 화자 구분, 내보내기는 사용자의 기기에서 실행되며, 모델은 Hugging Face에서 한 번 내려받은 뒤 캐시됩니다.',
          '비상업적 이용은 무료입니다. 상업적 이용에는 유료 라이선스가 필요하며, 제조사는 자사 서버에서 실행되는 선택형 유료 기능이 나중에 추가될 수 있다고 밝혔습니다.',
          '원격 측정과 충돌 보고서는 기본적으로 켜져 있으며 설정에서 끌 수 있습니다. 제조사는 포함되는 내용을 공개합니다.',
          'PromptQuorum은 앱을 테스트하지 않았으므로 전사 정확도, 편집 품질, 음성 품질은 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '공식 웹사이트는 편집기에 계정도 업로드도 필요 없다고 밝히고, 개인정보 페이지는 미디어, 전사 텍스트, 복제 음성이 기기를 떠나지 않는다고 설명합니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 제조사의 설명 이상으로는 확인할 수 없습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Rescript는 영상과 오디오를 위한 전사 기반 편집기로, PolyForm Noncommercial 1.0.0 라이선스에 따라 웹 앱과 macOS·Windows·Linux용 데스크톱 앱으로 배포됩니다.**',
          '[github.com/wassgha/rescript](https://github.com/wassgha/rescript)에서 공개적으로 개발되며, 라이선스 파일에는 Wassim Gharbi와 기여자가 명시되어 있습니다. 저장소는 2026년 7월에 만들어졌고 버전 1.2.5는 2026년 10월 29일에 나왔으며 메인 브랜치의 마지막 커밋은 2026년 11월 5일이므로, 개발은 활발하고 방치된 프로젝트 경고는 적용되지 않습니다. 제조사는 이 프로젝트를 오픈 소스라고 부르지만 라이선스가 상업적 이용을 금지하므로 PromptQuorum은 소스 공개형으로 설명합니다. 웹사이트와 개인정보 페이지는 "we"라고만 하고 회사명, 주소, 운영자 정보는 밝히지 않지만, 이용 약관은 미국 캘리포니아주 법을 준거법으로 합니다.',
          '제조사에 따르면 영상이나 오디오 파일을 불러오면 Whisper가 기기에서 단어별 타임스탬프와 화자 구분을 포함해 전사하고, 전사 텍스트에서 단어를 지우면 해당 장면이 잘립니다. 타임라인에는 파형, 단어 막대, 잘린 구간이 표시되며, 전사 대신 직접 가진 SRT, VTT, JSON 자막을 불러올 수도 있습니다. Regenerate 기능은 선택한 문장을 고쳐 쓴 뒤, 파일에 이미 있는 약 10초 분량의 화자 오디오로 컴퓨터에서 복제한 목소리로 읽어 줍니다.',
          'PromptQuorum은 앱을 실행하지 않았으며 전사 정확도, 편집 품질, 내보내기 충실도, 다시 생성된 음성의 품질을 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Rescript는 설치 없이 브라우저에서 쓸 수 있고, 공식 웹사이트가 플랫폼별로 연결한 GitHub 릴리스 페이지의 패키지로 데스크톱 앱을 내려받을 수도 있습니다.**',
          'v1.2.5 릴리스에는 Apple Silicon과 Intel용 macOS DMG, Windows용 설치 EXE, Linux용 AppImage와 DEB 패키지가 있습니다. README에 따르면 데스크톱 빌드는 GitHub Releases에서 자동으로 업데이트되며 macOS 빌드는 서명 및 공증되었습니다.',
        ],
        columns: ['방법', '설치 방법'],
        rows: [
          { '방법': 'macOS (Apple Silicon)', '설치 방법': 'DMG' },
          { '방법': 'macOS (Intel)', '설치 방법': 'DMG (x64)' },
          { '방법': 'Windows', '설치 방법': '설치 EXE' },
          { '방법': 'Linux', '설치 방법': 'AppImage 또는 DEB' },
          { '방법': '[웹 앱](https://app.getrescript.com)', '설치 방법': '브라우저, 설치 불필요 (Chromium 권장)' },
          { '방법': '[소스 코드](https://github.com/wassgha/rescript)', '설치 방법': '소스에서 빌드 (README 참고)' },
        ],
        note: '[GitHub 릴리스 페이지](https://github.com/wassgha/rescript/releases/latest)에서 내려받거나 [웹 앱](https://app.getrescript.com)을 여십시오. PromptQuorum은 설치 파일을 실행하지 않았고 운영 체제 수준의 서명이나 공증 여부도 확인하지 않았습니다. README는 macOS 빌드가 서명 및 공증되었다고 밝힙니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Rescript에는 비교적 최신인 macOS, Windows, Linux 컴퓨터 또는 Chromium 기반 브라우저가 필요하며, 제조사는 메모리나 GPU 최소 사양을 공개하지 않습니다.**',
          '이 목록은 README와 웹사이트에서 가져왔습니다. 웹 앱은 SharedArrayBuffer가 필요하고 가능하면 WebGPU로 전사하며 그렇지 않으면 WASM으로 대체합니다. Regenerate는 언어마다 음성 번들을 내려받으며, 제조사에 따르면 빠른 모델은 약 140 MB, 고품질 모델은 약 360 MB입니다. PromptQuorum은 메모리 사용량이나 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': '데스크톱', '명시된 내용': 'macOS (Apple Silicon, Intel), Windows, Linux' },
          { '항목': '브라우저', '명시된 내용': 'Chromium 기반 권장' },
          { '항목': '전사', '명시된 내용': 'Whisper Base 또는 Small' },
          { '항목': '화자 구분', '명시된 내용': 'pyannote-segmentation-3.0' },
          { '항목': '음성 번들', '명시된 내용': '언어당 약 140 MB 또는 약 360 MB' },
          { '항목': '메모리와 GPU', '명시된 내용': '공개되지 않음' },
        ],
        note: 'Whisper 모델과 화자 모델은 Hugging Face에서 한 번 내려받아 캐시되며, 제조사에 따르면 그 이후 편집기는 네트워크 연결 없이 동작합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Rescript는 먼저 전사 텍스트 편집기이며, 타임라인, 군말 제거, 화자 구분, 음성 재생성이 그 주변에 있습니다.** 아래 항목은 모두 웹사이트와 README에 나온 제조사의 주장입니다.',
        ],
        items: [
          '단어 단위 편집: 전사 텍스트에서 단어를 선택해 지우면 재생 시 모든 컷을 실시간으로 건너뛰며, 컷은 말한 단어를 따라갑니다.',
          '정리: 한 번의 클릭으로 "um", "uh" 같은 군말을 제거하고, 다른 한 번의 클릭으로 파일 전체의 0.3초 이상 무음을 제거합니다.',
          '전사: 단어별 타임스탬프가 있는 Whisper Base 또는 Whisper Small을 쓰거나, 기존 SRT, VTT, JSON 자막 파일을 대신 불러옵니다.',
          '화자: 자동 화자 구분이 전사 텍스트를 말하는 사람별로 묶으며 화자 이름을 바꿀 수 있습니다.',
          '타임라인: 파형, 드래그할 수 있는 타이밍 핸들이 있는 단어 막대, 분할, 컷 구간, 확대·축소와 이동으로 단어 경계 너머까지 컷을 다듬을 수 있습니다.',
          'Regenerate: 선택한 문장을 고쳐 쓰고 그 화자의 목소리로 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어로 읽게 합니다. 새 문장이 빈 구간에 들어가지 않으면 생성 전에 맞춤 표시기가 경고합니다.',
          '내보내기: 최대 4K의 MP4 또는 WebM, M4A·MP3·WAV 오디오, TXT·Markdown·DOCX·PDF 전사 텍스트, SRT·VTT·JSON 자막, DaVinci Resolve·Premiere·Final Cut·Pro Tools·Logic·Reaper·Samplitude·Blender용 타임라인.',
          '인터페이스 언어: 독일어, 영어, 스페인어, 프랑스어, 이탈리아어, 일본어, 한국어, 포르투갈어, 중국어(간체·번체). v1.2.5 릴리스 노트 기준입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**제조사에 따르면 영상, 오디오, 전사 텍스트, 프로젝트, 내보낸 파일, 복제 음성은 사용자의 기기에 남습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않아 이를 확인할 수 없습니다.**',
          '2026년 8월 8일자 개인정보 페이지는 업로드 단계가 없고, 편집기에 계정이 필요 없으며, 프로젝트는 브라우저 저장소나 디스크에 저장된다고 설명합니다. 네트워크를 쓰는 항목도 나열하는데, Hugging Face에서 음성 인식·화자·음성 모델을 한 번 내려받는 것, 데스크톱 앱이 GitHub Releases에서 업데이트를 확인하는 것, 웹사이트의 선택형 이메일 가입, 익명 원격 측정과 충돌 보고서입니다.',
          'README에 따르면 익명 사용 통계와 충돌 보고서는 기본적으로 켜져 있으며 설정의 Privacy에서 끌 수 있습니다. 개인정보 페이지는 원격 측정에 무작위 설치 ID, 네 가지 이벤트 이름 중 하나, 앱 버전·운영 체제 계열·사용한 모델이나 내보내기 형식 같은 대략적인 속성이 담기며, IP 주소는 기록되지 않고 충돌 보고서는 미디어 파일 이름을 제거한 채 Sentry로 전송된다고 설명합니다. 웹사이트 자체는 Vercel Web Analytics를 사용하며 Google Analytics를 쓸 수도 있습니다.',
          '제조사는 복제 음성이 컴퓨터의 메모리에서 만들어지며 음성 프로필이 서버에 저장되지 않는다고 밝힙니다. 허용 가능한 사용 정책은 음성을 다시 생성하는 대상의 충분한 설명에 따른 동의를 요구하고, 합성 음성에 관한 법률이 국가마다 다르다고 설명합니다. Regenerate는 본인의 녹음을 고치는 용도이며, 합법적으로 사용할 책임은 사용자에게 있습니다. PromptQuorum은 법률 자문을 제공하지 않습니다.',
          '소스 코드가 GitHub에 공개되어 있으므로 데이터 흐름을 점검할 수 있습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Rescript는 비상업적 용도로 말 중심의 녹화·녹음을 편집하면서 작업을 자신의 컴퓨터 안에 두고 싶은 분께 적합합니다.**',
        ],
        items: [
          '군말을 제거하고 텍스트 편집으로 테이크를 다시 다듬고 싶은 팟캐스터, 인터뷰어, 취미 영상 제작자.',
          '인터뷰나 미공개 영상처럼 민감한 녹음이 있고, 미디어를 업로드하지 않는다고 밝히는 도구를 선호하는 분.',
          '텍스트로 러프 컷을 만든 뒤 타임라인을 DaVinci Resolve, Premiere, Final Cut, Reaper로 내보내려는 편집자.',
          '코드가 공개된 프로젝트를 선호하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Rescript가 맞지 않는 상황도 있으며, 확인하지 못한 세부 사항이 여러 가지 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: 상업적 작업. 라이선스는 개인 프로젝트, 학습, 연구, 평가를 대상으로 하며, 제조사에 따르면 상업적 이용에는 이메일로 요청하는 별도의 유료 라이선스가 필요합니다. PromptQuorum은 공개된 가격을 찾지 못했습니다.',
          '적합하지 않음: 지금 당장 성숙한 제품이 필요한 분. 저장소는 2026년 7월에 만들어졌고, 제조사의 이용 약관도 전사와 합성 음성이 틀릴 수 있다고 밝힙니다.',
          '확인되지 않음: 전사 정확도, 편집 품질, 내보내기 충실도, 다시 생성된 음성의 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인되지 않음: 기본적으로 켜진 원격 측정, 충돌 보고서, 업데이트 확인이 있는 상황에서 아무것도 기기를 떠나지 않는다는 주장. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          '확인되지 않음: macOS, Windows, Linux 설치 파일의 서명 또는 공증 여부. README는 macOS 빌드만 서명되었다고 밝히며 Windows나 Linux 서명은 언급하지 않습니다.',
          '확인되지 않음: 최소 사양이 공개되지 않아 알 수 없는 메모리와 속도 요구, 어떤 Whisper 모델이 어떤 컴퓨터에 맞는지.',
          '확인되지 않음: 누가 프로젝트를 운영하는지, 얼마나 많은 사람이 쓰는지. 회사명이나 운영자 정보를 찾지 못했으며 PromptQuorum은 독립적인 리뷰도 찾아보지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript와 대안 비교',
        itemHeadings: true,
        content: [
          '**Rescript는 말하는 미디어를 전사하고 자르는 다른 도구와 일부 겹칩니다. PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각각의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Rescript', '출처에 기재된 내용': 'PolyForm NC, Mac/Windows/Linux/웹, 전사로 영상 편집' },
          { '도구': '[FunClip](/ko/power-local-llm/funclip-review)', '출처에 기재된 내용': 'MIT, 로컬 웹 UI, 음성 인식 텍스트로 영상 클립' },
          { '도구': '[Subtitle Edit](/ko/power-local-llm/subtitle-edit-review)', '출처에 기재된 내용': 'MIT, Windows/macOS/Linux, Whisper 지원 자막 편집기' },
          { '도구': '[Aiko](/ko/power-local-llm/aiko-review)', '출처에 기재된 내용': '비공개 소스, iPhone/iPad/Mac, 기기 내 Whisper 전사' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Rescript를 쓰려면 계정이 필요합니까?',
            a: '제조사에 따르면 필요 없습니다. 편집기에는 계정이 필요 없습니다. 이메일로 받은 로그인 링크는 웹사이트에만 로그인하며, 이메일 가입은 선택 사항입니다.',
          },
          {
            q: 'Rescript는 상업적 이용도 무료입니까?',
            a: '아닙니다. PolyForm Noncommercial 1.0.0 라이선스로 제공되며 개인 프로젝트, 학습, 연구, 평가를 대상으로 합니다. 제조사에 따르면 상업적 이용에는 이메일로 요청하는 별도의 유료 라이선스가 필요하며, PromptQuorum은 공개된 가격을 찾지 못했습니다.',
          },
          {
            q: '내 미디어 파일이 컴퓨터 밖으로 나갑니까?',
            a: '제조사에 따르면 나가지 않습니다. 전사, 편집, 음성 재생성, 내보내기는 사용자의 기기에서 실행되며, 내려받는 것은 한 번 받는 모델 파일과 업데이트 확인뿐입니다. 원격 측정과 충돌 보고서는 기본적으로 켜져 있으며 설정에서 끌 수 있습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          },
          {
            q: 'Rescript로 누군가가 한 말을 바꿀 수 있습니까?',
            a: '네, Regenerate로 고쳐 쓴 문장을 화자의 복제 음성으로 6개 언어로 읽게 할 수 있습니다. 허용 가능한 사용 정책은 화자의 충분한 설명에 따른 동의를 요구하며, 합성 음성에 관한 법률은 국가마다 다르므로 본인에게 적용되는 내용을 확인하십시오. PromptQuorum은 음성 품질을 테스트하지 않았습니다.',
          },
          {
            q: 'Rescript는 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 버전 1.2.3이 2026년 10월 3일, 1.2.4가 2026년 10월 5일, 1.2.5가 2026년 10월 29일로 기재되어 있고, 메인 브랜치 커밋은 2026년 11월 5일까지 있습니다. 데스크톱 앱은 GitHub Releases에서 업데이트를 확인합니다.',
          },
          {
            q: 'Rescript는 어떤 플랫폼에서 실행되나요?',
            a: '제조사에 따르면 브라우저(Chromium 기반 권장)와 macOS(Apple Silicon 및 Intel), Windows, Linux용 데스크톱 앱에서 실행됩니다. v1.2.5 릴리스에는 DMG, 설치용 EXE, AppImage, DEB 패키지가 올라와 있습니다.',
          },
          {
            q: 'Rescript는 오픈소스입니까?',
            a: '제조사는 이 프로젝트를 오픈소스라고 부르지만, 라이선스는 상업적 이용을 금지하는 PolyForm Noncommercial 1.0.0이므로 PromptQuorum은 이를 소스 공개형(source-available)으로 설명합니다. 코드는 GitHub에 공개되어 있으며 비상업적 이용은 무료이고, 상업적 이용에는 유료 라이선스가 필요합니다.',
          },
          {
            q: 'Rescript는 인터넷 연결 없이 작동합니까?',
            a: '제조사에 따르면 Whisper와 화자 모델은 Hugging Face에서 한 번 내려받아 캐시된 뒤, 그다음부터는 네트워크 연결 없이 편집기가 작동합니다. 데스크톱 앱은 GitHub Releases에서 업데이트를 확인합니다. PromptQuorum은 오프라인 사용을 테스트하지 않았습니다.',
          },
          {
            q: 'Rescript는 어떤 형식으로 내보낼 수 있습니까?',
            a: '제조사에 따르면 최대 4K의 MP4 또는 WebM 영상, M4A·MP3·WAV 오디오, TXT·Markdown·DOCX·PDF 전사 텍스트, SRT·VTT·JSON 자막, 그리고 DaVinci Resolve, Premiere, Final Cut, Pro Tools, Logic, Reaper, Samplitude, Blender용 타임라인입니다. PromptQuorum은 내보내기 충실도를 확인하지 않았습니다.',
          },
          {
            q: 'Rescript는 군말과 무음을 제거할 수 있습니까?',
            a: '웹사이트에 따르면 한 번의 클릭으로 "um", "uh" 같은 군말을 제거하고, 다른 한 번의 클릭으로 파일 전체의 0.3초 이상 무음을 제거합니다. PromptQuorum은 검출 정확도를 테스트하지 않았습니다.',
          },
          {
            q: 'Rescript는 누가 말하는지 구분합니까?',
            a: '제조사에 따르면 자동 화자 라벨이 전사 텍스트를 말하는 사람별로 묶어 주며 화자 이름은 바꿀 수 있습니다. README에는 이를 위해 pyannote-segmentation-3.0이 명시되어 있습니다. PromptQuorum은 라벨을 테스트하지 않았습니다.',
          },
          {
            q: 'Rescript의 원격 측정은 무엇을 수집하며 끌 수 있습니까?',
            a: 'README에 따르면 익명 사용 통계와 충돌 보고서는 기본적으로 켜져 있으며 설정의 "Privacy"에서 끌 수 있습니다. 개인정보 페이지에 따르면 원격 측정에는 무작위 설치 ID, 네 가지 이벤트 이름 중 하나, 앱 버전·운영체제 계열·사용한 모델이나 내보내기 형식 같은 대략적인 속성이 포함되며, IP 주소는 기록되지 않고 충돌 보고서는 미디어 파일 이름이 제거된 채 Sentry로 전송됩니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**비상업적 용도로 인터뷰, 팟캐스트, 화자가 정면을 보는 영상을 편집하면서 제조사에 따르면 자신의 컴퓨터에서 실행되는 전사 기반 편집을 원한다면 Rescript는 살펴볼 만합니다.**',
          '문서상으로는 단어 단위 컷, 군말과 무음 제거, 화자 구분, 음성 재생성, 다른 편집 소프트웨어용 내보내기까지 폭넓게 다룹니다. 개발은 활발해서 2026년 10월 3일부터 29일 사이에 세 번의 릴리스가 있었고 2026년 11월 5일에도 커밋이 있었습니다.',
          '단점도 분명합니다. 상업적 이용에는 가격이 공개되지 않은 유료 라이선스가 필요하고, 프로젝트는 아직 몇 달밖에 되지 않았으며, 제조사의 이용 약관도 전사와 합성 음성이 틀릴 수 있다고 밝히고, PromptQuorum은 아무것도 테스트하지 않았습니다. 녹음 사본으로 먼저 시험해 보고 전사 텍스트와 컷을 확인한 뒤 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Rescript 웹사이트](https://getrescript.com) — 기능, FAQ, 다운로드. 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://www.getrescript.com/privacy) — 기기에 남는 데이터와 수집되는 데이터. 2026년 8월 8일자, 2026년 11월 18일 확인.',
          '[이용 약관](https://www.getrescript.com/terms) — 라이선스, 준거법, 연락처. 2026년 8월 8일자, 2026년 11월 18일 확인.',
          '[허용 가능한 사용 정책](https://www.getrescript.com/acceptable-use) — Regenerate의 동의 규칙과 라이선스 제한. 2026년 11월 18일 확인.',
          '[Regenerate 페이지](https://www.getrescript.com/regenerate-speech) — 지원 언어, 음성 모델, 번들 크기. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/wassgha/rescript) — 라이선스, 생성일, 마지막 커밋. 2026년 11월 18일 확인.',
          '[README](https://github.com/wassgha/rescript#readme) — 기능, 기술 구성, 원격 측정, 라이선스. 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/wassgha/rescript/releases) — 릴리스 날짜, 패키지, v1.2.5 노트. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[FunClip 리뷰](/ko/power-local-llm/funclip-review) — 로컬 웹 UI에서 음성 인식 텍스트로 영상을 잘라 내는 도구.',
          '[Subtitle Edit 리뷰](/ko/power-local-llm/subtitle-edit-review) — 로컬 Whisper 계열 전사를 지원하는 자막 편집기.',
          '[Aiko 리뷰](/ko/power-local-llm/aiko-review) — Apple 기기용 기기 내 Whisper 전사 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/rescript-review-hero-ar.webp',
    title: 'مراجعة Rescript: تحرير الفيديو والصوت بتعديل النص المفرَّغ',
    seoTitle: 'مراجعة Rescript: تحرير الفيديو والصوت عبر نصه المفرَّغ',
    intro:
      'Rescript 1.2.5 محرر للمتصفح وسطح المكتب يفرّغ الفيديو أو الصوت بنموذج Whisper، ويقصّ المقطع عند حذف الكلمات من النص، ويمكنه إعادة نطق جملة بصوت المتحدث الأصلي. وبحسب موقعه الرسمي وملف README، تتم عمليات التفريغ والتحرير والتصدير على جهازك ولا يُرفع أي شيء. الترخيص هو PolyForm Noncommercial 1.0.0، لذا يتطلب الاستخدام التجاري ترخيصًا مدفوعًا. تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub مع إصداراته وصفحات الخصوصية والشروط والاستخدام المقبول، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Rescript محرر متاح الشيفرة المصدرية يقصّ الفيديو والصوت بحذف كلمات من نص Whisper المفرَّغ. مجاني للاستخدام غير التجاري وبترخيص PolyForm. ما تم تأكيده.',
    twitterDescription:
      'Rescript: محرر فيديو وصوت متاح الشيفرة المصدرية يقصّ المقطع عند حذف كلمات من نص Whisper المفرَّغ، مع تمييز المتحدثين وتصحيح الجمل بصوت مستنسَخ. ما تم تأكيده.',
    audience:
      'مقدمو البودكاست والمحاورون وصنّاع الفيديو الذين يقصّون تسجيلات الكلام لأغراض غير تجارية، ومن لديهم تسجيلات حساسة ويريدون إبقاء التحرير على أجهزتهم، والمحررون الذين يريدون مونتاجًا أوليًا انطلاقًا من النص',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Rescript',
    targetKeywords: [
      'مراجعة Rescript',
      'تحرير الفيديو عبر النص',
      'محرر فيديو قائم على التفريغ النصي',
      'محرر فيديو بـ Whisper محلي',
      'حذف كلمات الحشو من الفيديو',
      'محرر تفريغ نصي دون اتصال',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Rescript محرر متاح الشيفرة المصدرية، مجاني للاستخدام غير التجاري، يفرّغ الفيديو والصوت بنموذج Whisper على جهازك، بحسب الشركة المصنِّعة، ويقصّ المقطع عند حذف الكلمات من النص المفرَّغ.** يعمل في المتصفح وكتطبيقات لسطح المكتب على macOS وWindows وLinux، ويمكنه إعادة نطق جملة بصوت المتحدث، ويصدّر الفيديو والصوت والترجمات النصية أو خطوطًا زمنية لبرامج مونتاج أخرى. يتطلب الاستخدام التجاري ترخيصًا مدفوعًا، ولم تختبر PromptQuorum التطبيق.',
    quickAnswerTop: {
      ar: {
        question: 'ما Rescript ولمن هو مناسب؟',
        answer:
          'Rescript محرر قائم على التفريغ النصي لمقاطع الفيديو والصوت التي يغلب عليها الكلام، ويُطوَّر علنًا على GitHub. يناسب من يقصّون المقابلات والبودكاست ومقاطع المتحدث أمام الكاميرا ويريدون إبقاء التحرير على جهازهم.',
        bullets: [
          'الترخيص PolyForm Noncommercial 1.0.0: مجاني للاستخدام غير التجاري، ويتطلب الاستخدام التجاري ترخيصًا مدفوعًا.',
          'بحسب الشركة المصنِّعة، يعمل تفريغ Whisper مع الطوابع الزمنية لكل كلمة وتمييز المتحدثين على جهازك، في المتصفح أو في تطبيقات سطح المكتب لأنظمة macOS وWindows وLinux.',
          'احذف الكلمات لقصّ المقطع؛ نقرة واحدة تزيل "um" و"uh" والصمت الذي يبلغ 0.3 ثانية أو أكثر؛ وصدّر الفيديو أو الصوت أو النص أو الترجمات أو خطوطًا زمنية لبرامج أخرى.',
          'تعيد ميزة Regenerate نطق جملة بصوت المتحدث المستنسَخ بست لغات؛ وتشترط سياسة الاستخدام المقبول لدى الشركة المصنِّعة موافقة المتحدث.',
          'أُنشئ المستودع في يوليو 2026؛ وصدر الإصدار 1.2.5 في 29 أكتوبر 2026، وكان آخر تعديل على الفرع الرئيسي في 5 نوفمبر 2026.',
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
            text: 'Rescript محرر متاح الشيفرة المصدرية يفرّغ الفيديو والصوت على حاسوبك، بحسب الشركة المصنِّعة، ويقصّ المقطع عند حذف الكلمات من النص المفرَّغ.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله معالج نصوص للتسجيل: النص المفرَّغ هو الخط الزمني. احذف جملة فيُقصّ المقطع المقابل لها؛ واكتب بديلًا فينطقه Rescript بصوت صاحبه إن شئت.',
          },
        ],
        items: [
          'استخدمه في المتصفح أو نزّل تطبيق سطح المكتب من صفحة إصدارات GitHub: DMG لنظام macOS، وملف EXE للتثبيت على Windows، وAppImage أو DEB على Linux.',
          'بحسب الشركة المصنِّعة، يعمل تفريغ Whisper وتمييز المتحدثين والتصدير على جهازك؛ وتُنزَّل النماذج مرة واحدة من Hugging Face ثم تُحفظ مؤقتًا.',
          'مجاني للاستخدام غير التجاري؛ ويتطلب الاستخدام التجاري ترخيصًا مدفوعًا، وتقول الشركة المصنِّعة إن ميزات مدفوعة اختيارية تعمل على خوادمها قد تُضاف لاحقًا.',
          'القياس عن بُعد وتقارير الأعطال مفعّلان افتراضيًا ويمكن إيقافهما من الإعدادات؛ وتذكر الشركة المصنِّعة ما تتضمنه.',
          'لم تختبر PromptQuorum التطبيق، لذا فإن دقة التفريغ وجودة القص وجودة الصوت غير متحقق منها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يقول الموقع إن المحرر لا يحتاج إلى حساب ولا إلى رفع ملفات، وتقول صفحة الخصوصية إن الوسائط والنصوص المفرَّغة والأصوات المستنسَخة لا تغادر الجهاز. لم تفحص PromptQuorum حركة الشبكة، لذا لا تستطيع تأكيد ذلك إلا بقدر ما تكتبه الشركة المصنِّعة.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Rescript محرر قائم على التفريغ النصي للفيديو والصوت، يصدر كتطبيق ويب وكتطبيقات لسطح المكتب على macOS وWindows وLinux بترخيص PolyForm Noncommercial 1.0.0.**',
          'يُطوَّر علنًا على [github.com/wassgha/rescript](https://github.com/wassgha/rescript)، حيث يذكر ملف الترخيص Wassim Gharbi والمساهمين. أُنشئ المستودع في يوليو 2026؛ وظهر الإصدار 1.2.5 في 29 أكتوبر 2026، وكان آخر تعديل على الفرع الرئيسي في 5 نوفمبر 2026، فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف. تصف الشركة المصنِّعة المشروع بأنه مفتوح المصدر؛ ولأن الترخيص يمنع الاستخدام التجاري، تصفه PromptQuorum بأنه متاح الشيفرة المصدرية. يتحدث الموقع وصفحة الخصوصية بصيغة "we" ولا يذكران اسم شركة ولا عنوانًا ولا بيانات قانونية، لكن شروط الاستخدام تخضع لقوانين ولاية كاليفورنيا في الولايات المتحدة.',
          'بحسب الشركة المصنِّعة، تُسقط ملف فيديو أو صوت فيفرّغه Whisper على جهازك مع طوابع زمنية لكل كلمة وتمييز للمتحدثين، ويؤدي حذف الكلمات من النص المفرَّغ إلى قص المقطع المقابل. ويعرض الخط الزمني الموجة الصوتية وشريط الكلمات والمناطق المقصوصة، ويمكنك استيراد ترجمات SRT أو VTT أو JSON الخاصة بك بدل التفريغ. وتعيد ميزة Regenerate كتابة جملة محددة وتنطقها بصوت ذلك المتحدث، المستنسَخ على حاسوبك من نحو عشر ثوانٍ من صوته الموجود أصلًا في الملف.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من دقة التفريغ ولا من جودة القص ولا من دقة التصدير ولا من جودة الكلام المعاد توليده.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكنك استخدام Rescript في المتصفح دون تثبيت أي شيء، أو تنزيل تطبيق سطح المكتب من الحزم الموجودة في صفحة إصدارات GitHub التي يربطها الموقع لكل منصة.**',
          'يعرض الإصدار v1.2.5 ملف DMG لنظام macOS على Apple Silicon وIntel، وملف EXE للتثبيت على Windows، وحزمتي AppImage وDEB لنظام Linux. وبحسب README تتحدّث نسخ سطح المكتب ذاتيًا عبر GitHub Releases، ونسخ macOS موقَّعة وموثَّقة (notarized).',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': 'macOS (Apple Silicon)', 'كيف تحصل عليه': 'DMG' },
          { 'الطريقة': 'macOS (Intel)', 'كيف تحصل عليه': 'DMG (x64)' },
          { 'الطريقة': 'Windows', 'كيف تحصل عليه': 'ملف EXE للتثبيت' },
          { 'الطريقة': 'Linux', 'كيف تحصل عليه': 'AppImage أو DEB' },
          { 'الطريقة': '[تطبيق الويب](https://app.getrescript.com)', 'كيف تحصل عليه': 'المتصفح دون تثبيت (يُفضَّل Chromium)' },
          { 'الطريقة': '[الشيفرة المصدرية](https://github.com/wassgha/rescript)', 'كيف تحصل عليه': 'البناء من المصدر (راجع README)' },
        ],
        note: 'نزّله من [صفحة إصدارات GitHub](https://github.com/wassgha/rescript/releases/latest) أو افتح [تطبيق الويب](https://app.getrescript.com). لم تشغّل PromptQuorum برامج التثبيت ولم تتحقق مما إذا كانت موقَّعة أو موثَّقة على مستوى نظام التشغيل؛ ويذكر README أن نسخ macOS كذلك.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Rescript إلى حاسوب حديث بنظام macOS أو Windows أو Linux، أو إلى متصفح مبني على Chromium؛ ولا تنشر الشركة المصنِّعة حدًّا أدنى للذاكرة أو لوحدة GPU.**',
          'القائمة مأخوذة من README والموقع. يحتاج تطبيق الويب إلى SharedArrayBuffer ويستخدم WebGPU في التفريغ عند توفره، مع الرجوع إلى WASM. وتنزّل Regenerate حزمة صوت لكل لغة: نحو 140 MB للنماذج الأسرع ونحو 360 MB للنماذج الأعلى جودة، بحسب الشركة المصنِّعة. لم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'سطح المكتب', 'القيمة المعلنة': 'macOS (Apple Silicon وIntel) وWindows وLinux' },
          { 'البند': 'المتصفح', 'القيمة المعلنة': 'يُفضَّل المبني على Chromium' },
          { 'البند': 'التفريغ', 'القيمة المعلنة': 'Whisper Base أو Small' },
          { 'البند': 'تمييز المتحدثين', 'القيمة المعلنة': 'pyannote-segmentation-3.0' },
          { 'البند': 'حزمة الصوت', 'القيمة المعلنة': 'نحو 140 MB أو 360 MB لكل لغة' },
          { 'البند': 'الذاكرة وGPU', 'القيمة المعلنة': 'غير منشورة' },
        ],
        note: 'تُنزَّل نماذج Whisper والمتحدثين مرة واحدة من Hugging Face ثم تُحفظ مؤقتًا؛ وبعد ذلك يعمل المحرر دون اتصال بالشبكة، بحسب الشركة المصنِّعة.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**Rescript محرر نص مفرَّغ في المقام الأول؛ أما الخط الزمني وإزالة كلمات الحشو وتمييز المتحدثين وإعادة توليد الصوت فتحيط به.** كل ما يلي ادعاءات من الشركة المصنِّعة مأخوذة من الموقع وREADME.',
        ],
        items: [
          'التحرير كلمةً كلمة: حدّد كلمات في النص المفرَّغ واحذفها؛ يتخطى التشغيل كل قصّ فوريًا، ويتبع القصّ الكلمات المنطوقة.',
          'التنظيف: نقرة واحدة تزيل "um" و"uh" وكلمات الحشو المشابهة، وأخرى تزيل الصمت الذي يبلغ 0.3 ثانية أو أكثر في الملف كله.',
          'التفريغ: Whisper Base أو Whisper Small مع طوابع زمنية لكل كلمة، أو استيراد ملف ترجمة SRT أو VTT أو JSON موجود بدلًا من ذلك.',
          'المتحدثون: يجمّع تمييز المتحدثين التلقائي النص حسب من يتكلم، ويمكن إعادة تسمية المتحدثين.',
          'الخط الزمني: الموجة الصوتية وشريط كلمات بمقابض توقيت قابلة للسحب والتقسيم ومناطق القص والتكبير والتحريك، لضبط القصّ بدقة تتجاوز حدود الكلمات.',
          'Regenerate: أعد كتابة جملة محددة واجعلها تُنطق بصوت المتحدث بالإنجليزية أو الإسبانية أو الفرنسية أو الألمانية أو الإيطالية أو البرتغالية؛ ويحذّر مؤشر الملاءمة قبل التوليد إذا لم تتسع الجملة الجديدة للفراغ.',
          'التصدير: MP4 أو WebM حتى 4K؛ وصوت بصيغة M4A أو MP3 أو WAV؛ ونصوص مفرَّغة بصيغة TXT أو Markdown أو DOCX أو PDF؛ وترجمات بصيغة SRT أو VTT أو JSON؛ وخطوط زمنية لبرامج DaVinci Resolve وPremiere وFinal Cut وPro Tools وLogic وReaper وSamplitude وBlender.',
          'لغات الواجهة: الألمانية والإنجليزية والإسبانية والفرنسية والإيطالية واليابانية والكورية والبرتغالية والصينية (المبسطة والتقليدية)، بحسب ملاحظات الإصدار v1.2.5.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب الشركة المصنِّعة، تبقى مقاطع الفيديو والصوت والنصوص المفرَّغة والمشاريع والملفات المصدَّرة والأصوات المستنسَخة على جهازك؛ ولم تفحص PromptQuorum حركة الشبكة ولا تستطيع تأكيد ذلك.**',
          'تقول صفحة الخصوصية، المؤرخة في 8 أغسطس 2026، إنه لا توجد خطوة رفع، وإن المحرر لا يحتاج إلى حساب، وإن المشاريع تُحفظ في تخزين المتصفح أو على القرص. وتسرد كذلك ما يستخدم الشبكة: تنزيلًا لمرة واحدة لنماذج الكلام والمتحدثين والصوت من Hugging Face، وفحص التحديثات عبر GitHub Releases لتطبيقات سطح المكتب، وتسجيلًا اختياريًا بالبريد الإلكتروني على الموقع، والقياس عن بُعد المجهول وتقارير الأعطال.',
          'يقول README إن إحصاءات الاستخدام المجهولة وتقارير الأعطال مفعّلة افتراضيًا ويمكن إيقافها من الإعدادات ضمن Privacy. وتقول صفحة الخصوصية إن القياس عن بُعد يحمل معرّف تثبيت عشوائيًا، واسم حدث واحدًا من أربعة، وخصائص عامة مثل إصدار التطبيق وعائلة نظام التشغيل والنموذج أو صيغة التصدير المستخدمة؛ وإن عناوين IP لا تُسجَّل، وإن تقارير الأعطال تُرسل إلى Sentry بعد إزالة أسماء ملفات الوسائط. ويستخدم الموقع نفسه Vercel Web Analytics وقد يستخدم Google Analytics.',
          'تذكر الشركة المصنِّعة أن الأصوات المستنسَخة تُنشأ في ذاكرة حاسوبك وأنه لا يُحفظ أي ملف صوتي شخصي على خادم. وتشترط سياسة الاستخدام المقبول الموافقة المستنيرة لصاحب الصوت الذي يُعاد توليده، وتقول إن القوانين المتعلقة بالأصوات الاصطناعية تختلف من بلد إلى آخر؛ وRegenerate مخصصة لتصحيح تسجيلاتك أنت، واستخدامها بصورة قانونية مسؤوليتك. لا تقدم PromptQuorum استشارات قانونية.',
          'الشيفرة المصدرية عامة على GitHub، لذا يمكن تدقيق تدفق البيانات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Rescript من يقصّون تسجيلات الكلام لأغراض غير تجارية ويريدون إبقاء العمل على حاسوبهم.**',
        ],
        items: [
          'مقدمو البودكاست والمحاورون وهواة صناعة الفيديو الذين يريدون إزالة كلمات الحشو وإعادة صياغة اللقطات بتعديل النص.',
          'أصحاب التسجيلات الحساسة، مثل المقابلات أو اللقطات غير المنشورة، ممن يفضّلون أداة تقول إنها لا ترفع الوسائط أبدًا.',
          'المحررون الذين يريدون مونتاجًا أوليًا عبر النص ثم تصدير خط زمني إلى DaVinci Resolve أو Premiere أو Final Cut أو Reaper.',
          'من يفضّلون مشروعًا شيفرته المصدرية عامة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Rescript بعض الحالات، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'غير مناسب: العمل التجاري. يغطي الترخيص المشاريع الشخصية والدراسة والبحث والتقييم؛ وبحسب الشركة المصنِّعة يتطلب الاستخدام التجاري ترخيصًا مدفوعًا منفصلًا يُطلب بالبريد الإلكتروني، ولم تجد PromptQuorum سعرًا منشورًا.',
          'غير مناسب: من يحتاج إلى منتج ناضج اليوم. أُنشئ المستودع في يوليو 2026، وتقول شروط الشركة المصنِّعة نفسها إن التفريغ والكلام المُصطنع يخطئان.',
          'غير متحقق منه: دقة التفريغ وجودة القص ودقة التصدير وجودة الأصوات المعاد توليدها. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقق منه: الادعاء بأن شيئًا لا يغادر الجهاز، إلى جانب القياس عن بُعد وتقارير الأعطال وفحص التحديثات المفعّلة افتراضيًا؛ ولم تفحص PromptQuorum حركة الشبكة.',
          'غير متحقق منه: ما إذا كانت برامج التثبيت لأنظمة macOS وWindows وLinux موقَّعة أو موثَّقة؛ فـ README يذكر ذلك لنسخ macOS فقط ولا يذكر توقيعًا لنسخ Windows أو Linux.',
          'غير متحقق منه: احتياجات الذاكرة والسرعة لأنه لا يُنشر حد أدنى، وأي نموذج Whisper يناسب أي حاسوب.',
          'غير متحقق منه: من يشغّل المشروع وكم شخصًا يستخدمه. لم يُعثر على اسم شركة ولا بيانات قانونية، ولم تبحث PromptQuorum عن مراجعات مستقلة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Rescript مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يتداخل Rescript مع أدوات أخرى تفرّغ وسائط الكلام وتقصّها؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل ويُوصَف كل منها استنادًا إلى مراجعته الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Rescript', 'المذكور في المصادر': 'PolyForm NC؛ Mac/Windows/Linux/ويب؛ تحرير الفيديو عبر النص المفرَّغ' },
          { 'الأداة': '[FunClip](/ar/power-local-llm/funclip-review)', 'المذكور في المصادر': 'MIT؛ واجهة ويب محلية؛ يقتطع الفيديو بنص التعرف على الكلام' },
          { 'الأداة': '[Subtitle Edit](/ar/power-local-llm/subtitle-edit-review)', 'المذكور في المصادر': 'MIT؛ Windows/macOS/Linux؛ محرر ترجمات مع Whisper' },
          { 'الأداة': '[Aiko](/ar/power-local-llm/aiko-review)', 'المذكور في المصادر': 'مغلق المصدر؛ iPhone/iPad/Mac؛ تفريغ Whisper على الجهاز' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب لاستخدام Rescript؟',
            a: 'لا، بحسب الشركة المصنِّعة. المحرر لا يحتاج إلى حساب. أما رابط تسجيل الدخول المرسل بالبريد فيسجّل دخولك إلى الموقع فقط، والتسجيل بالبريد الإلكتروني اختياري.',
          },
          {
            q: 'هل Rescript مجاني للاستخدام التجاري؟',
            a: 'لا. ترخيصه PolyForm Noncommercial 1.0.0 الذي يغطي المشاريع الشخصية والدراسة والبحث والتقييم. وبحسب الشركة المصنِّعة يتطلب الاستخدام التجاري ترخيصًا مدفوعًا منفصلًا يُطلب بالبريد الإلكتروني، ولم تجد PromptQuorum سعرًا منشورًا.',
          },
          {
            q: 'هل تغادر ملفات الوسائط حاسوبي؟',
            a: 'بحسب الشركة المصنِّعة، لا: يعمل التفريغ والتحرير وإعادة توليد الصوت والتصدير على جهازك، ولا يُنزَّل سوى ملفات النماذج مرة واحدة وفحوص التحديث. القياس عن بُعد وتقارير الأعطال مفعّلان افتراضيًا ويمكن إيقافهما من الإعدادات. لم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'هل يستطيع Rescript تغيير ما قاله شخص ما؟',
            a: 'نعم، عبر Regenerate التي تنطق جملة معاد كتابتها بصوت المتحدث المستنسَخ بست لغات. وتشترط سياسة الاستخدام المقبول الموافقة المستنيرة للمتحدث، وتختلف القوانين المتعلقة بالأصوات الاصطناعية من بلد إلى آخر، فتحقق مما ينطبق عليك. لم تختبر PromptQuorum جودة الصوت.',
          },
          {
            q: 'كم مرة يُحدَّث Rescript؟',
            a: 'يعرض GitHub الإصدار 1.2.3 في 3 أكتوبر 2026 والإصدار 1.2.4 في 5 أكتوبر 2026 والإصدار 1.2.5 في 29 أكتوبر 2026، مع تعديلات على الفرع الرئيسي حتى 5 نوفمبر 2026. وتفحص تطبيقات سطح المكتب التحديثات عبر GitHub Releases.',
          },
          {
            q: 'على أي منصات يعمل Rescript؟',
            a: 'بحسب الشركة المصنِّعة، يعمل في المتصفح (يُنصح بمتصفح مبني على Chromium) وكتطبيق سطح مكتب لنظام macOS (Apple Silicon وIntel) وWindows وLinux. يسرد إصدار v1.2.5 ملف DMG وملف EXE للتثبيت وAppImage وحزمة DEB.',
          },
          {
            q: 'هل Rescript مفتوح المصدر؟',
            a: 'تصف الشركة المصنِّعة المشروع بأنه مفتوح المصدر، لكن ترخيصه PolyForm Noncommercial 1.0.0 الذي يمنع الاستخدام التجاري، ولذلك تصفه PromptQuorum بأنه متاح المصدر (source-available). الشيفرة علنية على GitHub والاستخدام غير التجاري مجاني، أما الاستخدام التجاري فيتطلب ترخيصًا مدفوعًا.',
          },
          {
            q: 'هل يعمل Rescript دون اتصال بالإنترنت؟',
            a: 'بحسب الشركة المصنِّعة، تُنزَّل نماذج Whisper والمتحدثين مرة واحدة من Hugging Face ثم تُخزَّن مؤقتًا، وبعد ذلك يعمل المحرر دون اتصال بالشبكة. وتفحص تطبيقات سطح المكتب التحديثات عبر GitHub Releases. لم تختبر PromptQuorum الاستخدام دون اتصال.',
          },
          {
            q: 'ما الصيغ التي يستطيع Rescript تصديرها؟',
            a: 'بحسب الشركة المصنِّعة: فيديو MP4 أو WebM بدقة تصل إلى 4K؛ وصوت M4A أو MP3 أو WAV؛ ونصوص مفرَّغة بصيغة TXT أو Markdown أو DOCX أو PDF؛ وترجمات بصيغة SRT أو VTT أو JSON؛ وخطوط زمنية لبرامج DaVinci Resolve وPremiere وFinal Cut وPro Tools وLogic وReaper وSamplitude وBlender. لم تتحقق PromptQuorum من دقة التصدير.',
          },
          {
            q: 'هل يستطيع Rescript إزالة كلمات الحشو والصمت؟',
            a: 'بحسب الموقع، نقرة واحدة تزيل "um" و"uh" وكلمات الحشو المشابهة، وأخرى تزيل الصمت الذي يبلغ 0.3 ثانية أو أكثر في الملف كله. لم تختبر PromptQuorum مدى دقة اكتشافها.',
          },
          {
            q: 'هل يحدد Rescript من يتحدث؟',
            a: 'بحسب الشركة المصنِّعة، تجمّع تسميات المتحدثين التلقائية النص المفرَّغ بحسب من يتحدث، ويمكن إعادة تسمية المتحدثين؛ ويذكر README النموذج pyannote-segmentation-3.0 لهذا الغرض. لم تختبر PromptQuorum هذه التسميات.',
          },
          {
            q: 'ما الذي يجمعه القياس عن بُعد في Rescript، وهل يمكنني إيقافه؟',
            a: 'يذكر README أن إحصاءات الاستخدام المجهولة وتقارير الأعطال مفعّلة افتراضيًا ويمكن إيقافها من الإعدادات ضمن «Privacy». وبحسب صفحة الخصوصية، يتضمن القياس عن بُعد معرّف تثبيت عشوائيًا وأحد أربعة أسماء أحداث وخصائص عامة مثل إصدار التطبيق وعائلة نظام التشغيل والنموذج أو صيغة التصدير المستخدمة؛ ولا تُسجَّل عناوين IP، وتُرسل تقارير الأعطال إلى Sentry بعد حذف أسماء ملفات الوسائط. لم تفحص PromptQuorum حركة الشبكة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Rescript نظرة إن كنت تقصّ مقابلات أو بودكاست أو مقاطع متحدث أمام الكاميرا لأغراض غير تجارية وتريد تحريرًا قائمًا على النص المفرَّغ يعمل، بحسب الشركة المصنِّعة، على حاسوبك.**',
          'على الورق يغطي الكثير: قصّ كلمةً كلمة، وإزالة كلمات الحشو والصمت، وتمييز المتحدثين، وإعادة توليد الصوت، وتصديرًا لبرامج مونتاج أخرى. والتطوير نشط، مع ثلاثة إصدارات بين 3 و29 أكتوبر 2026 وتعديل في 5 نوفمبر 2026.',
          'والمقايضات حقيقية: الاستخدام التجاري يتطلب ترخيصًا مدفوعًا دون سعر منشور، والمشروع عمره بضعة أشهر فقط، وتقول شروط الشركة المصنِّعة نفسها إن التفريغ والكلام المُصطنع يخطئان، ولم تختبر PromptQuorum شيئًا. جرّبه على نسخة من تسجيل وراجع النص المفرَّغ ومواضع القص قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Rescript](https://getrescript.com) — الميزات والأسئلة الشائعة والتنزيلات، روجع في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://www.getrescript.com/privacy) — ما يبقى على الجهاز وما يُجمع، مؤرخة في 8 أغسطس 2026، روجعت في 18 نوفمبر 2026.',
          '[شروط الاستخدام](https://www.getrescript.com/terms) — الترخيص والقانون الحاكم وجهة الاتصال، مؤرخة في 8 أغسطس 2026، روجعت في 18 نوفمبر 2026.',
          '[سياسة الاستخدام المقبول](https://www.getrescript.com/acceptable-use) — قواعد الموافقة لميزة Regenerate وحدود الترخيص، روجعت في 18 نوفمبر 2026.',
          '[صفحة Regenerate](https://www.getrescript.com/regenerate-speech) — اللغات ونموذج الصوت وأحجام الحزم، روجعت في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/wassgha/rescript) — الترخيص وتاريخ الإنشاء وآخر تعديل، روجع في 18 نوفمبر 2026.',
          '[README](https://github.com/wassgha/rescript#readme) — الميزات والتقنيات والقياس عن بُعد والترخيص، روجع في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/wassgha/rescript/releases) — تواريخ الإصدارات والحزم وملاحظات v1.2.5، روجعت في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة FunClip](/ar/power-local-llm/funclip-review) — اقتطاع الفيديو بنص التعرف على الكلام في واجهة ويب محلية.',
          '[مراجعة Subtitle Edit](/ar/power-local-llm/subtitle-edit-review) — محرر ترجمات مع تفريغ محلي من عائلة Whisper.',
          '[مراجعة Aiko](/ar/power-local-llm/aiko-review) — تفريغ Whisper على الجهاز لأجهزة Apple.',
          '[دليل برامج LLM المحلية](/ar/directory) — الكتالوج الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}
