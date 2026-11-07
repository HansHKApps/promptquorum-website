// Meetini Review: Meeting and Interview Assistant for Apple Silicon Macs
// Slug: meetini-review
// Companion to: anarlog-review, meetily-review, perfect-memory-review, local-llm-voice-audio-compared
// Sources: meetini.net (home, /pricing, /privacy effective 2026-10-21, /terms effective 2026-10-12, /app/downloads logged-out page) read on 2026-11-07 and the
// maker's outreach email of the same day (Moonveil AI Inc.; launch planned 2026-11-09) — no hands-on testing. Prices are the maker's USD figures, never converted.
// The email and the privacy notice disagree on where speech-to-text runs; both are stated and attributed, not resolved.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-en.webp',
    title: 'Meetini Review: Meeting and Interview Assistant for Mac',
    seoTitle: 'Meetini Review: Mac Meeting and Interview Assistant',
    intro:
      'Meetini is a paid meeting and interview assistant for Apple Silicon Macs from [Moonveil AI Inc.](https://meetini.net) that shows live captions, keeps transcripts and notes, and offers interview preparation. The maker describes live captions and speech-to-text as running locally; its own privacy notice says live meeting audio is sent through its server to OpenAI. This review is based on the maker\'s website and an outreach email, checked on 7 November 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Meetini review: paid Mac app for live captions, meeting notes and interview prep. The maker says captions run locally; its privacy notice says audio goes to OpenAI.',
    twitterDescription:
      'Meetini review: meeting and interview assistant for Apple Silicon Macs. Plans, data flow and where the maker\'s local claim and its privacy notice differ.',
    audience:
      'Mac users comparing meeting-notes and interview tools who need to know which parts run on the device, which reach a cloud service and what the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Meetini review',
    targetKeywords: [
      'meetini review',
      'meetini.net',
      'meeting assistant mac apple silicon',
      'ai interview preparation app mac',
      'live captions meeting mac',
      'bot-free meeting notes mac',
      'meetini privacy openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini is a paid Mac app for Apple Silicon that captures meeting audio, shows live captions and writes notes without a bot joining the call, with optional interview-answer features.** It is not a fully local tool: the privacy notice says live audio is processed by OpenAI.',
    quickAnswerTop: {
      en: {
        question: 'Is Meetini a local LLM app?',
        answer:
          'Not by its own privacy notice. The maker\'s email says live captions and transcription run locally, but the notice says microphone audio, and system audio if you allow it, is sent through Meetini\'s server to OpenAI for live processing.',
        bullets: [
          'Captions and transcripts are made live while a meeting runs.',
          'Notes and meeting history are generated and synced to your account.',
          'Career features prepare answers, keywords and follow-up questions.',
          'An AI mock interview lets you rehearse for a role and company.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Meetini?', anchor: 'what-is-meetini' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Local vs. Cloud: Data Flow and Privacy', anchor: 'privacy' },
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
            text: 'Meetini is a closed-source, paid Mac app that turns meetings and interviews into live captions, notes and AI-prepared answers.',
          },
          {
            type: 'plain-terms',
            text: 'It listens to your meeting on your Mac without a bot in the call, then helps you review it or practise an interview; what stays on the Mac and what goes to the cloud is where its own documents differ.',
          },
        ],
        items: [
          'Maintenance: no version number or release date is published, so the app\'s last update could not be dated and no stale-project warning applies.',
          'Cost: two paid plans, no free plan or trial found, billed in US dollars.',
          'Platforms: Apple Silicon Macs on macOS 14.2 or later; no Windows, Linux or mobile version listed.',
          'Maker: Moonveil AI Inc. in California, with no published source code.',
          'Launch: the maker\'s email says public launch is planned for 9 November 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the maker\'s website and email, checked on 7 November 2026. PromptQuorum has not installed or benchmarked the app, so caption accuracy, answer quality and language support are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'What Is Meetini?',
        content: [
          '**Meetini helps you follow live meetings and interviews, produce transcripts and notes, and review them afterwards.** That is how its terms of use describe it; the homepage adds that it captures the conversation directly on your Mac, without a bot joining the call, and that it works with Zoom, Google Meet, Teams and in-person talks. The operator is Moonveil AI Inc.; the maker\'s email names Zhiyuan Zhang as founder, a detail not found on the pages read.',
          'The product has two sides. The note-taking side covers captions, transcripts, summaries and a synced meeting history. The career side adds keywords from what is being said, automatic answers to interview questions, follow-up questions and an AI mock interview; the terms also describe an Interviewer mode for the recruiting side that the pricing page does not list.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Meetini is a DMG download for Apple Silicon Macs, available after signing in; there is no Windows, Linux, mobile or web version listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'macOS', 'How to get it': '[Downloads page](https://meetini.net/app/downloads) (sign-in needed); Apple silicon, macOS 14.2 or later' },
          { 'Option': 'Plans', 'How to get it': 'Notes $20/month; Career $95/month; $15 and $80 a month billed quarterly' },
          { 'Option': 'Website', 'How to get it': '[meetini.net](https://meetini.net)' },
          { 'Option': 'Privacy policy', 'How to get it': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'Option': 'Source code', 'How to get it': 'Not published' },
        ],
        note: 'Version reviewed: none, because no page read states a version number or release date; the maker\'s email says public launch is planned for 9 November 2026. Prices are the maker\'s USD figures from the pricing page and are not converted; the terms of use describe a different plan structure, see the data-flow section. No free plan or trial was found.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps are inferred from the downloads page and the terms of use; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Create an account and download',
            whyItMatters: 'Sign in on the website, then download the DMG from the downloads page and move the app into Applications.',
          },
          {
            title: 'Allow audio capture',
            whyItMatters: 'The terms say Meetini captures your microphone and, if you allow it, your computer\'s system audio, which can include other people\'s voices.',
          },
          {
            title: 'Tell the other participants',
            whyItMatters: 'The terms ask you to inform participants and obtain consent where the law requires it before you use Meetini in a meeting.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s website or terms; none has been independently tested.**',
        ],
        items: [
          '**Live captions and transcripts.** Captions appear while the meeting runs and the transcript can be reopened later.',
          '**Notes and history.** Notes cover decisions and next steps, and meeting history is synced to your account.',
          '**Interview preparation.** You set a role and company and rehearse answers and follow-up questions in an AI mock interview.',
          '**Live interview help.** On the Career plan the app can detect a new question and prepare an answer, including coding help from a window or screen you select.',
        ],
        note: 'The pricing page names keywords, auto answers and follow-up questions as Career features; they use AI minutes, which pause when the allowance runs out while captions and notes keep working.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local vs. Cloud: Data Flow and Privacy',
        content: [
          '**The maker\'s email and its privacy notice describe different audio paths.** The email says live captions and speech-to-text run locally and that the Career features use cloud AI. The privacy notice, effective 21 October 2026, says audio from your microphone and, if allowed, system audio is sent through Meetini\'s server to OpenAI for live processing, and that no full-meeting recording is uploaded to your cloud history. It names no on-device speech-to-text.',
          '**Text is kept in the cloud by default.** After sign-in, new transcripts and notes sync to your account and stay until you delete them; deleted text may remain recoverable for up to 30 days. The notice says you can turn cloud sync off in the account settings. It lists OpenAI, Cloudflare (synced text and account records), Clerk, Stripe and PostHog (limited usage events) as processors, and says it does not sell personal information. The notice adds that settings, locally kept notes and optional voice samples stay on the device and that recognition of saved speakers runs there.',
          'Account self-deletion is not available yet; the notice asks you to email the maker. OpenAI handles live audio under its own retention practices, which the notice does not detail.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results, and no source code is published. PromptQuorum has not inspected the app\'s network traffic. Recording meetings can capture other people\'s voices, and rules for using assistance in interviews vary by employer and country, so check consent and the interview rules that apply to you; this is not legal advice.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac users on Apple Silicon** who want captions and notes without a bot in the call.',
          '**Job candidates** who want a mock interview for a specific role and company.',
          '**People comfortable with cloud processing** who accept OpenAI handling live audio.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Where speech-to-text runs.** The email and the privacy notice differ, and PromptQuorum could not observe the traffic; no page read names a speech model or supported languages.',
          '**Plan contents.** The pricing page lists 600 AI minutes for Career and unlimited notes, while the terms describe 300 meeting minutes in the base plan, separate Career and Interviewer add-ons and different pack prices; the pricing page names PayPal and the terms name Stripe.',
          '**Version and release date.** None is published, and the downloads page needs a sign-in, so the installer was not checked.',
          '**Quality and fit.** Caption accuracy, answer quality, latency and battery use are untested, and the terms contain no explicit rule on interview assistance.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Anarlog](/power-local-llm/anarlog-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free plan / MIT', 'Key difference': 'Open-source, bot-free meeting notepad; on-device transcription on Apple Silicon, local or cloud AI' },
          { 'App': '[Meetily](/power-local-llm/meetily-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Free Community Edition / MIT', 'Key difference': 'Self-hosted meeting notetaker; local transcription, summaries via Ollama' },
          { 'App': '[Perfect Memory AI](/power-local-llm/perfect-memory-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Free plan / closed source', 'Key difference': 'Searchable screen and meeting memory; local AI only with Ollama, LM Studio or Jan' },
        ],
        note: 'These reviewed tools do not describe interview practice; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Meetini work offline?',
            a: 'No source read says it does, and the privacy notice describes live audio going through Meetini\'s server to OpenAI, so an internet connection looks required for live processing.',
          },
          {
            q: 'Can I delete my meeting data?',
            a: 'You can delete cloud meeting text yourself, but it may stay recoverable for up to 30 days. Deleting the account itself currently means emailing the maker.',
          },
          {
            q: 'Is there a free trial?',
            a: 'None was found on the pricing page or in the terms, which describe only paid plans and minute packs.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Meetini is a new, paid Mac option that combines bot-free meeting notes with interview practice, which the other reviewed meeting-notes apps do not describe. Against that, the maker\'s local claim differs from its privacy notice, the pricing page and terms disagree, no version or release date is published, there is no free trial and the code is closed. It suits Apple Silicon users who accept cloud processing by OpenAI and check the pricing terms before paying; anyone who needs audio to stay on the device should ask the maker to clarify first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Meetini website](https://meetini.net) — product description and features, read 7 November 2026.',
          '[Pricing](https://meetini.net/pricing) — plans, minute allowance and packs, read 7 November 2026.',
          '[Privacy notice](https://meetini.net/privacy) — audio path, processors and retention, effective 21 October 2026.',
          '[Terms of use](https://meetini.net/terms) — plan structure, consent and acceptable use, effective 12 October 2026.',
          '[Downloads page](https://meetini.net/app/downloads) — platform and macOS requirement, read 7 November 2026.',
          'Maker\'s outreach email of 7 November 2026 — local-processing statement, company, founder and planned launch date (not independently verified).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Anarlog Review](/power-local-llm/anarlog-review) — an open-source meeting notepad with a local or cloud AI choice.',
          '[Meetily Review](/power-local-llm/meetily-review) — a self-hosted meeting notetaker with local summaries.',
          '[Perfect Memory AI Review](/power-local-llm/perfect-memory-review) — searchable screen and meeting memory.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison for transcription tools.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meetini Review: Meeting and Interview Assistant for Mac',
      description:
        'Meetini review: a paid meeting and interview assistant for Apple Silicon Macs. Plans, requirements, data flow and where the maker\'s local-processing claim and its privacy notice differ.',
      url: 'https://www.promptquorum.com/power-local-llm/meetini-review',
      inLanguage: 'en',
      datePublished: '2026-11-07',
      dateModified: '2026-11-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Mac users evaluating a meeting and interview assistant' },
      about: [
        { '@type': 'Thing', name: 'Meetini' },
        { '@type': 'Thing', name: 'Meeting transcription' },
        { '@type': 'Thing', name: 'Interview preparation' },
        { '@type': 'Thing', name: 'Live captions' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/meetini-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Meetini Review', item: 'https://www.promptquorum.com/power-local-llm/meetini-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-de.webp',
    title: 'Meetini im Test: Meeting- und Interview-Assistent für den Mac',
    seoTitle: 'Meetini im Test: Meeting- und Interview-Assistent',
    intro:
      'Meetini ist ein kostenpflichtiger Meeting- und Interview-Assistent für Macs mit Apple Silicon von [Moonveil AI Inc.](https://meetini.net), der Live-Untertitel anzeigt, Transkripte und Notizen speichert und Interviewvorbereitung anbietet. Der Hersteller beschreibt Live-Untertitel und Spracherkennung als lokal laufend; laut seiner eigenen Datenschutzerklärung wird Live-Meeting-Audio über seinen Server an OpenAI gesendet. Diese Rezension stützt sich auf die Website des Herstellers und eine Kontakt-E-Mail, geprüft am 7. November 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Meetini im Test: kostenpflichtige Mac-App für Live-Untertitel, Notizen und Interview-Training. Laut Hersteller lokal, laut Datenschutzerklärung OpenAI.',
    twitterDescription:
      'Meetini im Test: Meeting- und Interview-Assistent für Macs mit Apple Silicon. Tarife, Datenfluss und die Abweichung zwischen Lokal-Anspruch und Datenschutzerklärung.',
    audience:
      'Mac-Nutzer, die Meeting-Notiz- und Interview-Werkzeuge vergleichen und wissen müssen, was auf dem Gerät läuft, was einen Cloud-Dienst erreicht und was die Quellen offenlassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Meetini Test',
    targetKeywords: [
      'meetini test',
      'meetini.net',
      'meeting assistent mac apple silicon',
      'ki interviewvorbereitung app mac',
      'live untertitel meeting mac',
      'meeting notizen ohne bot mac',
      'meetini datenschutz openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini ist eine kostenpflichtige Mac-App für Apple Silicon, die Meeting-Audio erfasst, Live-Untertitel anzeigt und Notizen schreibt, ohne dass ein Bot dem Gespräch beitritt, mit optionalen Funktionen für Interviewantworten.** Sie ist kein rein lokales Werkzeug: Laut Datenschutzerklärung wird Live-Audio von OpenAI verarbeitet.',
    quickAnswerTop: {
      de: {
        question: 'Ist Meetini eine App mit lokalem LLM?',
        answer:
          'Nach der eigenen Datenschutzerklärung nicht. Die E-Mail des Herstellers sagt, Live-Untertitel und Transkription liefen lokal, doch die Erklärung sagt, Mikrofon-Audio und, wenn Sie es erlauben, System-Audio werde über den Server von Meetini zur Live-Verarbeitung an OpenAI gesendet.',
        bullets: [
          'Untertitel und Transkripte entstehen live, während ein Meeting läuft.',
          'Notizen und Meeting-Verlauf werden erzeugt und mit Ihrem Konto synchronisiert.',
          'Career-Funktionen bereiten Antworten, Stichwörter und Rückfragen vor.',
          'Ein KI-Probeinterview lässt Sie für eine Rolle und ein Unternehmen üben.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Meetini?', anchor: 'what-is-meetini' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Lokal oder Cloud: Datenfluss und Datenschutz', anchor: 'privacy' },
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
            text: 'Meetini ist eine kostenpflichtige Closed-Source-Mac-App, die Meetings und Interviews in Live-Untertitel, Notizen und KI-vorbereitete Antworten verwandelt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie hört Ihr Meeting auf dem Mac mit, ohne dass ein Bot im Gespräch ist, und hilft Ihnen dann beim Nachbereiten oder beim Üben eines Interviews; was auf dem Mac bleibt und was in die Cloud geht, ist die Stelle, an der sich ihre eigenen Dokumente unterscheiden.',
          },
        ],
        items: [
          'Pflege: Es sind weder Versionsnummer noch Veröffentlichungsdatum angegeben, daher ließ sich das letzte Update der App nicht datieren und eine Warnung vor einem eingeschlafenen Projekt entfällt.',
          'Kosten: zwei Bezahltarife, kein kostenloser Tarif und keine Testphase gefunden, Abrechnung in US-Dollar.',
          'Plattformen: Macs mit Apple Silicon ab macOS 14.2; keine Version für Windows, Linux oder Mobilgeräte aufgeführt.',
          'Hersteller: Moonveil AI Inc. in Kalifornien, ohne veröffentlichten Quellcode.',
          'Start: Laut E-Mail des Herstellers ist der öffentliche Start für den 9. November 2026 geplant.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website und E-Mail des Herstellers, geprüft am 7. November 2026. PromptQuorum hat die App weder installiert noch gemessen; Untertitelgenauigkeit, Antwortqualität und Sprachunterstützung sind daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'Was ist Meetini?',
        content: [
          '**Meetini hilft Ihnen, Live-Meetings und Interviews zu verfolgen, Transkripte und Notizen zu erstellen und sie anschließend durchzusehen.** So beschreiben es die Nutzungsbedingungen; die Startseite ergänzt, dass die App das Gespräch direkt auf Ihrem Mac erfasst, ohne dass ein Bot dem Gespräch beitritt, und mit Zoom, Google Meet, Teams und Gesprächen vor Ort funktioniert. Betreiber ist Moonveil AI Inc.; die E-Mail des Herstellers nennt Zhiyuan Zhang als Gründer, eine Angabe, die auf den gelesenen Seiten nicht zu finden war.',
          'Das Produkt hat zwei Seiten. Die Notizseite umfasst Untertitel, Transkripte, Zusammenfassungen und einen synchronisierten Meeting-Verlauf. Die Karriereseite ergänzt Stichwörter aus dem Gesagten, automatische Antworten auf Interviewfragen, Rückfragen und ein KI-Probeinterview; die Bedingungen beschreiben außerdem einen Interviewer-Modus für die Recruiting-Seite, den die Preisseite nicht aufführt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Meetini ist ein DMG-Download für Macs mit Apple Silicon, verfügbar nach der Anmeldung; eine Version für Windows, Linux, Mobilgeräte oder den Browser ist nicht aufgeführt.**',
        ],
        columns: ['Option', 'So erhalten Sie sie'],
        rows: [
          { 'Option': 'macOS', 'So erhalten Sie sie': '[Download-Seite](https://meetini.net/app/downloads) (Anmeldung nötig); Apple Silicon, macOS 14.2 oder neuer' },
          { 'Option': 'Tarife', 'So erhalten Sie sie': 'Notes 20 $/Monat; Career 95 $/Monat; 15 $ und 80 $ pro Monat bei vierteljährlicher Zahlung' },
          { 'Option': 'Website', 'So erhalten Sie sie': '[meetini.net](https://meetini.net)' },
          { 'Option': 'Datenschutzerklärung', 'So erhalten Sie sie': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'Option': 'Quellcode', 'So erhalten Sie sie': 'Nicht veröffentlicht' },
        ],
        note: 'Geprüfte Version: keine, weil keine gelesene Seite eine Versionsnummer oder ein Veröffentlichungsdatum nennt; laut E-Mail des Herstellers ist der öffentliche Start für den 9. November 2026 geplant. Die Preise sind die US-Dollar-Angaben der Preisseite des Herstellers und nicht umgerechnet; die Nutzungsbedingungen beschreiben eine andere Tarifstruktur, siehe den Abschnitt zum Datenfluss. Ein kostenloser Tarif oder eine Testphase wurde nicht gefunden.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte sind aus der Download-Seite und den Nutzungsbedingungen abgeleitet; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Konto erstellen und herunterladen',
            whyItMatters: 'Melden Sie sich auf der Website an, laden Sie dann das DMG von der Download-Seite herunter und verschieben Sie die App in den Ordner „Programme“.',
          },
          {
            title: 'Audioaufnahme erlauben',
            whyItMatters: 'Laut Nutzungsbedingungen erfasst Meetini Ihr Mikrofon und, wenn Sie es erlauben, das System-Audio Ihres Computers, das auch die Stimmen anderer Personen enthalten kann.',
          },
          {
            title: 'Die anderen Teilnehmer informieren',
            whyItMatters: 'Die Bedingungen bitten Sie, vor der Nutzung von Meetini in einem Meeting die Teilnehmer zu informieren und, wo das Recht es verlangt, deren Einwilligung einzuholen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website oder den Bedingungen des Herstellers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Live-Untertitel und Transkripte.** Untertitel erscheinen, während das Meeting läuft, und das Transkript lässt sich später wieder öffnen.',
          '**Notizen und Verlauf.** Notizen halten Entscheidungen und nächste Schritte fest, und der Meeting-Verlauf wird mit Ihrem Konto synchronisiert.',
          '**Interviewvorbereitung.** Sie legen eine Rolle und ein Unternehmen fest und üben Antworten und Rückfragen in einem KI-Probeinterview.',
          '**Live-Hilfe im Interview.** Im Career-Tarif kann die App eine neue Frage erkennen und eine Antwort vorbereiten, einschließlich Coding-Hilfe aus einem von Ihnen gewählten Fenster oder Bildschirm.',
        ],
        note: 'Die Preisseite nennt Stichwörter, automatische Antworten und Rückfragen als Career-Funktionen; sie verbrauchen KI-Minuten, die pausieren, wenn das Kontingent aufgebraucht ist, während Untertitel und Notizen weiterlaufen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Lokal oder Cloud: Datenfluss und Datenschutz',
        content: [
          '**Die E-Mail des Herstellers und seine Datenschutzerklärung beschreiben unterschiedliche Audiowege.** Die E-Mail sagt, Live-Untertitel und Spracherkennung liefen lokal und die Career-Funktionen nutzten Cloud-KI. Die Datenschutzerklärung, gültig ab 21. Oktober 2026, sagt, Audio von Ihrem Mikrofon und, falls erlaubt, System-Audio werde über den Server von Meetini zur Live-Verarbeitung an OpenAI gesendet, und dass keine Aufnahme des gesamten Meetings in Ihren Cloud-Verlauf hochgeladen werde. Eine Spracherkennung auf dem Gerät nennt sie nicht.',
          '**Text wird standardmäßig in der Cloud gehalten.** Nach der Anmeldung werden neue Transkripte und Notizen mit Ihrem Konto synchronisiert und bleiben, bis Sie sie löschen; gelöschter Text kann bis zu 30 Tage wiederherstellbar bleiben. Laut Erklärung lässt sich die Cloud-Synchronisierung in den Kontoeinstellungen ausschalten. Sie nennt OpenAI, Cloudflare (synchronisierter Text und Kontodaten), Clerk, Stripe und PostHog (begrenzte Nutzungsereignisse) als Auftragsverarbeiter und sagt, sie verkaufe keine personenbezogenen Daten. Laut Erklärung bleiben Einstellungen, lokal gespeicherte Notizen und optionale Stimmproben auf dem Gerät, und die Erkennung gespeicherter Sprecher läuft dort.',
          'Eine Selbstlöschung des Kontos ist noch nicht möglich; die Erklärung bittet darum, den Hersteller per E-Mail zu kontaktieren. OpenAI verarbeitet Live-Audio nach eigenen Aufbewahrungsregeln, die die Erklärung nicht näher beschreibt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Herstellers, keine Prüfergebnisse, und Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Wer Meetings aufzeichnet, erfasst möglicherweise die Stimmen anderer Personen, und die Regeln für Unterstützung in Interviews unterscheiden sich je nach Arbeitgeber und Land; prüfen Sie daher Einwilligung und die für Sie geltenden Interviewregeln. Das ist keine Rechtsberatung.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Mac-Nutzer mit Apple Silicon**, die Untertitel und Notizen ohne Bot im Gespräch möchten.',
          '**Bewerber**, die ein Probeinterview für eine bestimmte Rolle und ein bestimmtes Unternehmen wollen.',
          '**Menschen, die mit Cloud-Verarbeitung leben können** und akzeptieren, dass OpenAI Live-Audio verarbeitet.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Wo die Spracherkennung läuft.** E-Mail und Datenschutzerklärung unterscheiden sich, und PromptQuorum konnte den Datenverkehr nicht beobachten; keine gelesene Seite nennt ein Sprachmodell oder unterstützte Sprachen.',
          '**Tarifinhalte.** Die Preisseite nennt 600 KI-Minuten für Career und unbegrenzte Notizen, während die Bedingungen 300 Meeting-Minuten im Basistarif, getrennte Career- und Interviewer-Zusatzpakete und andere Paketpreise beschreiben; die Preisseite nennt PayPal, die Bedingungen nennen Stripe.',
          '**Version und Veröffentlichungsdatum.** Keines von beiden ist angegeben, und die Download-Seite verlangt eine Anmeldung, daher wurde der Installer nicht geprüft.',
          '**Qualität und Eignung.** Untertitelgenauigkeit, Antwortqualität, Latenz und Akkuverbrauch sind ungetestet, und die Bedingungen enthalten keine ausdrückliche Regel zur Unterstützung in Interviews.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          { 'App': '[Anarlog](/de/power-local-llm/anarlog-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Gratis-Tarif / MIT', 'Wesentlicher Unterschied': 'Quelloffenes Meeting-Notizbuch ohne Bot; Transkription auf dem Gerät mit Apple Silicon, lokale oder Cloud-KI' },
          { 'App': '[Meetily](/de/power-local-llm/meetily-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Kostenlose Community Edition / MIT', 'Wesentlicher Unterschied': 'Selbst gehosteter Meeting-Notizer; lokale Transkription, Zusammenfassungen über Ollama' },
          { 'App': '[Perfect Memory AI](/de/power-local-llm/perfect-memory-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Gratis-Tarif / Closed Source', 'Wesentlicher Unterschied': 'Durchsuchbares Bildschirm- und Meeting-Gedächtnis; lokale KI nur mit Ollama, LM Studio oder Jan' },
        ],
        note: 'Diese rezensierten Werkzeuge beschreiben kein Interviewtraining; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Meetini offline?',
            a: 'Keine gelesene Quelle sagt das, und die Datenschutzerklärung beschreibt, wie Live-Audio über den Server von Meetini zu OpenAI läuft; für die Live-Verarbeitung scheint daher eine Internetverbindung nötig zu sein.',
          },
          {
            q: 'Kann ich meine Meeting-Daten löschen?',
            a: 'Cloud-Meeting-Text können Sie selbst löschen, er kann aber bis zu 30 Tage wiederherstellbar bleiben. Das Konto selbst zu löschen bedeutet derzeit, dem Hersteller eine E-Mail zu schreiben.',
          },
          {
            q: 'Gibt es eine kostenlose Testphase?',
            a: 'Auf der Preisseite und in den Bedingungen wurde keine gefunden; beide beschreiben nur Bezahltarife und Minutenpakete.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Meetini ist eine neue, kostenpflichtige Mac-Option, die Meeting-Notizen ohne Bot mit Interviewtraining verbindet, was die anderen rezensierten Meeting-Notiz-Apps nicht beschreiben. Dagegen weicht der Lokal-Anspruch des Herstellers von seiner Datenschutzerklärung ab, Preisseite und Bedingungen weichen voneinander ab, es sind weder Version noch Veröffentlichungsdatum angegeben, es gibt keine kostenlose Testphase, und der Code ist geschlossen. Die App eignet sich für Nutzer mit Apple Silicon, die Cloud-Verarbeitung durch OpenAI akzeptieren und die Preisbedingungen vor dem Bezahlen prüfen; wer Audio auf dem Gerät halten muss, sollte den Hersteller zuerst um Klärung bitten.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Meetini](https://meetini.net) — Produktbeschreibung und Funktionen, gelesen am 7. November 2026.',
          '[Preise](https://meetini.net/pricing) — Tarife, Minutenkontingent und Pakete, gelesen am 7. November 2026.',
          '[Datenschutzerklärung](https://meetini.net/privacy) — Audioweg, Auftragsverarbeiter und Aufbewahrung, gültig ab 21. Oktober 2026.',
          '[Nutzungsbedingungen](https://meetini.net/terms) — Tarifstruktur, Einwilligung und zulässige Nutzung, gültig ab 12. Oktober 2026.',
          '[Download-Seite](https://meetini.net/app/downloads) — Plattform und macOS-Voraussetzung, gelesen am 7. November 2026.',
          'Kontakt-E-Mail des Herstellers vom 7. November 2026 — Aussage zur lokalen Verarbeitung, Unternehmen, Gründer und geplantes Startdatum (nicht unabhängig überprüft).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Anarlog-Rezension](/de/power-local-llm/anarlog-review) — ein quelloffenes Meeting-Notizbuch mit lokaler oder Cloud-KI zur Wahl.',
          '[Meetily-Rezension](/de/power-local-llm/meetily-review) — ein selbst gehosteter Meeting-Notizer mit lokalen Zusammenfassungen.',
          '[Perfect Memory AI-Rezension](/de/power-local-llm/perfect-memory-review) — durchsuchbares Bildschirm- und Meeting-Gedächtnis.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich für Transkriptionswerkzeuge.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-es.webp',
    title: 'Reseña de Meetini: asistente de reuniones y entrevistas para Mac',
    seoTitle: 'Reseña de Meetini: reuniones y entrevistas en Mac',
    intro:
      'Meetini es un asistente de pago para reuniones y entrevistas en Mac con Apple Silicon, de [Moonveil AI Inc.](https://meetini.net), que muestra subtítulos en directo, guarda transcripciones y notas y ofrece preparación de entrevistas. El fabricante describe los subtítulos en directo y el reconocimiento de voz como locales; su propio aviso de privacidad dice que el audio en directo se envía a OpenAI a través de su servidor. Esta reseña se basa en el sitio web del fabricante y en un correo de contacto, revisados el 7 de noviembre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Reseña de Meetini: app de pago para Mac con subtítulos en directo y notas. El fabricante dice que es local; su aviso, que el audio va a OpenAI.',
    twitterDescription:
      'Reseña de Meetini: asistente de reuniones y entrevistas para Mac con Apple Silicon. Planes, flujo de datos y dónde difieren la afirmación local del fabricante y su aviso de privacidad.',
    audience:
      'Usuarios de Mac que comparan herramientas de notas de reuniones y de entrevistas y necesitan saber qué se ejecuta en el dispositivo, qué llega a un servicio en la nube y qué dejan sin confirmar las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Meetini',
    targetKeywords: [
      'reseña meetini',
      'meetini.net',
      'asistente de reuniones mac apple silicon',
      'app preparación entrevistas ia mac',
      'subtítulos en directo reuniones mac',
      'notas de reuniones sin bot mac',
      'meetini privacidad openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini es una app de pago para Mac con Apple Silicon que captura el audio de las reuniones, muestra subtítulos en directo y redacta notas sin que un bot se una a la llamada, con funciones opcionales de respuestas para entrevistas.** No es una herramienta totalmente local: el aviso de privacidad dice que OpenAI procesa el audio en directo.',
    quickAnswerTop: {
      es: {
        question: '¿Es Meetini una app de LLM local?',
        answer:
          'No según su propio aviso de privacidad. El correo del fabricante dice que los subtítulos en directo y la transcripción se ejecutan en local, pero el aviso indica que el audio del micrófono, y el del sistema si lo permites, se envía a OpenAI a través del servidor de Meetini para su procesamiento en directo.',
        bullets: [
          'Los subtítulos y las transcripciones se generan en directo mientras dura la reunión.',
          'Las notas y el historial de reuniones se generan y se sincronizan con tu cuenta.',
          'Las funciones Career preparan respuestas, palabras clave y preguntas de seguimiento.',
          'Una entrevista simulada con IA te permite ensayar para un puesto y una empresa.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Meetini?', anchor: 'what-is-meetini' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Primeros pasos', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Local o nube: flujo de datos y privacidad', anchor: 'privacy' },
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
            text: 'Meetini es una app de pago y código cerrado para Mac que convierte reuniones y entrevistas en subtítulos en directo, notas y respuestas preparadas con IA.',
          },
          {
            type: 'plain-terms',
            text: 'Escucha tu reunión en el Mac sin un bot en la llamada y luego te ayuda a revisarla o a practicar una entrevista; qué se queda en el Mac y qué va a la nube es donde sus propios documentos difieren.',
          },
        ],
        items: [
          'Mantenimiento: no se publica número de versión ni fecha de lanzamiento, así que no se pudo fechar la última actualización de la app y no se aplica ningún aviso de proyecto inactivo.',
          'Coste: dos planes de pago, sin plan gratuito ni prueba, con cobro en dólares estadounidenses.',
          'Plataformas: Mac con Apple Silicon y macOS 14.2 o posterior; no hay versión para Windows, Linux ni móvil.',
          'Fabricante: Moonveil AI Inc., en California, sin código fuente publicado.',
          'Lanzamiento: el correo del fabricante indica que el lanzamiento público está previsto para el 9 de noviembre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web y el correo del fabricante, revisados el 7 de noviembre de 2026. PromptQuorum no ha instalado ni medido la app, así que no se evalúan la precisión de los subtítulos, la calidad de las respuestas ni los idiomas admitidos.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: '¿Qué es Meetini?',
        content: [
          '**Meetini te ayuda a seguir reuniones y entrevistas en directo, generar transcripciones y notas y revisarlas después.** Así lo describen sus condiciones de uso; la página de inicio añade que captura la conversación directamente en tu Mac, sin un bot que se una a la llamada, y que funciona con Zoom, Google Meet, Teams y conversaciones presenciales. El operador es Moonveil AI Inc.; el correo del fabricante nombra a Zhiyuan Zhang como fundador, un dato que no aparece en las páginas consultadas.',
          'El producto tiene dos vertientes. La de notas incluye subtítulos, transcripciones, resúmenes y un historial de reuniones sincronizado. La de carrera añade palabras clave a partir de lo que se dice, respuestas automáticas a preguntas de entrevista, preguntas de seguimiento y una entrevista simulada con IA; las condiciones describen además un modo Interviewer para el lado de selección de personal que la página de precios no menciona.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Meetini es una descarga DMG para Mac con Apple Silicon, disponible tras iniciar sesión; no figura ninguna versión para Windows, Linux, móvil ni web.**',
        ],
        columns: ['Opción', 'Cómo conseguirla'],
        rows: [
          { 'Opción': 'macOS', 'Cómo conseguirla': '[Página de descargas](https://meetini.net/app/downloads) (requiere iniciar sesión); Apple Silicon, macOS 14.2 o posterior' },
          { 'Opción': 'Planes', 'Cómo conseguirla': 'Notes $20/mes; Career $95/mes; $15 y $80 al mes con cobro trimestral' },
          { 'Opción': 'Sitio web', 'Cómo conseguirla': '[meetini.net](https://meetini.net)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirla': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirla': 'No publicado' },
        ],
        note: 'Versión revisada: ninguna, porque ninguna página consultada indica número de versión ni fecha de lanzamiento; el correo del fabricante dice que el lanzamiento público está previsto para el 9 de noviembre de 2026. Los precios son las cifras en USD de la página de precios del fabricante, que solo lista dólares estadounidenses, y no se convierten; las condiciones de uso describen una estructura de planes distinta, véase la sección de flujo de datos. No se encontró plan gratuito ni prueba.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeros pasos',
        content: [
          '**Estos pasos se deducen de la página de descargas y de las condiciones de uso; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Crea una cuenta y descarga',
            whyItMatters: 'Inicia sesión en el sitio web, descarga el DMG desde la página de descargas y mueve la app a Aplicaciones.',
          },
          {
            title: 'Permite la captura de audio',
            whyItMatters: 'Las condiciones indican que Meetini captura el micrófono y, si lo permites, el audio del sistema de tu equipo, que puede incluir las voces de otras personas.',
          },
          {
            title: 'Avisa a los demás participantes',
            whyItMatters: 'Las condiciones piden informar a los participantes y obtener su consentimiento donde la ley lo exija antes de usar Meetini en una reunión.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que figura a continuación procede del sitio web o de las condiciones del fabricante; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Subtítulos y transcripciones en directo.** Los subtítulos aparecen mientras dura la reunión y la transcripción puede reabrirse más tarde.',
          '**Notas e historial.** Las notas recogen decisiones y próximos pasos, y el historial de reuniones se sincroniza con tu cuenta.',
          '**Preparación de entrevistas.** Indicas un puesto y una empresa y ensayas respuestas y preguntas de seguimiento en una entrevista simulada con IA.',
          '**Ayuda en entrevistas en directo.** En el plan Career la app puede detectar una pregunta nueva y preparar una respuesta, incluida ayuda de programación a partir de una ventana o pantalla que selecciones.',
        ],
        note: 'La página de precios nombra las palabras clave, las respuestas automáticas y las preguntas de seguimiento como funciones de Career; consumen minutos de IA, que se pausan cuando se agota la asignación, mientras los subtítulos y las notas siguen funcionando.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local o nube: flujo de datos y privacidad',
        content: [
          '**El correo del fabricante y su aviso de privacidad describen recorridos de audio distintos.** El correo dice que los subtítulos en directo y el reconocimiento de voz se ejecutan en local y que las funciones Career usan IA en la nube. El aviso de privacidad, en vigor desde el 21 de octubre de 2026, dice que el audio del micrófono y, si se permite, el del sistema se envía a OpenAI a través del servidor de Meetini para su procesamiento en directo, y que no se sube a tu historial en la nube ninguna grabación completa de la reunión. No nombra ningún reconocimiento de voz en el dispositivo.',
          '**El texto se conserva en la nube por defecto.** Tras iniciar sesión, las nuevas transcripciones y notas se sincronizan con tu cuenta y permanecen hasta que las borres; el texto borrado puede seguir siendo recuperable hasta 30 días. Según el aviso, puedes desactivar la sincronización en la nube en los ajustes de la cuenta. Enumera a OpenAI, Cloudflare (texto sincronizado y registros de cuenta), Clerk, Stripe y PostHog (eventos de uso limitados) como encargados del tratamiento, y dice que no vende información personal. Según el aviso, los ajustes, las notas guardadas en local y las muestras de voz opcionales se quedan en el dispositivo, y el reconocimiento de los hablantes guardados se ejecuta allí.',
          'La eliminación de la cuenta por cuenta propia aún no está disponible; el aviso pide que escribas por correo al fabricante. OpenAI trata el audio en directo según sus propias prácticas de conservación, que el aviso no detalla.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas son declaraciones del fabricante, no resultados de una auditoría, y no se publica código fuente. PromptQuorum no ha inspeccionado el tráfico de red de la app. Grabar reuniones puede captar las voces de otras personas, y las reglas sobre usar ayuda en entrevistas varían según el empleador y el país, así que comprueba el consentimiento y las normas de entrevista que te apliquen; esto no es asesoramiento jurídico.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Mac con Apple Silicon** que quieren subtítulos y notas sin un bot en la llamada.',
          '**Candidatos a un empleo** que quieren una entrevista simulada para un puesto y una empresa concretos.',
          '**Personas cómodas con el procesamiento en la nube** que aceptan que OpenAI trate el audio en directo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Dónde se ejecuta el reconocimiento de voz.** El correo y el aviso de privacidad difieren y PromptQuorum no pudo observar el tráfico; ninguna página consultada nombra un modelo de voz ni los idiomas admitidos.',
          '**Contenido de los planes.** La página de precios indica 600 minutos de IA para Career y notas ilimitadas, mientras que las condiciones describen 300 minutos de reunión en el plan base, complementos Career e Interviewer por separado y otros precios de paquetes; la página de precios nombra PayPal y las condiciones nombran Stripe.',
          '**Versión y fecha de lanzamiento.** No se publica ninguna, y la página de descargas exige iniciar sesión, así que no se comprobó el instalador.',
          '**Calidad e idoneidad.** La precisión de los subtítulos, la calidad de las respuestas, la latencia y el consumo de batería no se han probado, y las condiciones no contienen ninguna regla explícita sobre la ayuda en entrevistas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia principal'],
        rows: [
          { 'App': '[Anarlog](/es/power-local-llm/anarlog-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Plan gratuito / MIT', 'Diferencia principal': 'Bloc de notas de reuniones de código abierto y sin bot; transcripción en el dispositivo con Apple Silicon, IA local o en la nube' },
          { 'App': '[Meetily](/es/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Community Edition gratuita / MIT', 'Diferencia principal': 'Tomador de notas de reuniones autoalojado; transcripción local, resúmenes con Ollama' },
          { 'App': '[Perfect Memory AI](/es/power-local-llm/perfect-memory-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Plan gratuito / código cerrado', 'Diferencia principal': 'Memoria de pantalla y reuniones con búsqueda; IA local solo con Ollama, LM Studio o Jan' },
        ],
        note: 'Estas herramientas reseñadas no describen práctica de entrevistas; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Meetini funciona sin conexión?',
            a: 'Ninguna fuente consultada lo dice, y el aviso de privacidad describe el audio en directo pasando por el servidor de Meetini hasta OpenAI, así que parece necesaria una conexión a internet para el procesamiento en directo.',
          },
          {
            q: '¿Puedo borrar los datos de mis reuniones?',
            a: 'Puedes borrar tú mismo el texto de las reuniones en la nube, pero puede seguir siendo recuperable hasta 30 días. Eliminar la cuenta en sí requiere, por ahora, escribir por correo al fabricante.',
          },
          {
            q: '¿Hay una prueba gratuita?',
            a: 'No se encontró ninguna en la página de precios ni en las condiciones, que describen solo planes de pago y paquetes de minutos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Meetini es una opción nueva y de pago para Mac que combina notas de reuniones sin bot con práctica de entrevistas, algo que las otras apps de notas de reuniones reseñadas no describen. En contra, la afirmación local del fabricante difiere de su aviso de privacidad, la página de precios y las condiciones no concuerdan, no se publica versión ni fecha de lanzamiento, no hay prueba gratuita y el código es cerrado. Encaja con usuarios de Apple Silicon que aceptan el procesamiento en la nube por OpenAI y revisan las condiciones de precio antes de pagar; quien necesite que el audio no salga del dispositivo debería pedir primero una aclaración al fabricante.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Meetini](https://meetini.net) — descripción del producto y funciones, consultado el 7 de noviembre de 2026.',
          '[Precios](https://meetini.net/pricing) — planes, minutos incluidos y paquetes, consultado el 7 de noviembre de 2026.',
          '[Aviso de privacidad](https://meetini.net/privacy) — recorrido del audio, encargados del tratamiento y conservación, en vigor desde el 21 de octubre de 2026.',
          '[Condiciones de uso](https://meetini.net/terms) — estructura de planes, consentimiento y uso aceptable, en vigor desde el 12 de octubre de 2026.',
          '[Página de descargas](https://meetini.net/app/downloads) — plataforma y requisito de macOS, consultada el 7 de noviembre de 2026.',
          'Correo de contacto del fabricante del 7 de noviembre de 2026 — afirmación de procesamiento local, empresa, fundador y fecha de lanzamiento prevista (no verificado de forma independiente).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Anarlog](/es/power-local-llm/anarlog-review) — un bloc de notas de reuniones de código abierto con IA local o en la nube a elección.',
          '[Reseña de Meetily](/es/power-local-llm/meetily-review) — un tomador de notas de reuniones autoalojado con resúmenes locales.',
          '[Reseña de Perfect Memory AI](/es/power-local-llm/perfect-memory-review) — memoria de pantalla y reuniones con búsqueda.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparación de categoría para herramientas de transcripción.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-fr.webp',
    title: 'Test de Meetini : assistant de réunions et d\'entretiens pour Mac',
    seoTitle: 'Test de Meetini : assistant réunions et entretiens Mac',
    intro:
      'Meetini est un assistant payant de réunions et d\'entretiens pour Mac Apple Silicon, édité par [Moonveil AI Inc.](https://meetini.net), qui affiche des sous-titres en direct, conserve transcriptions et notes et propose une préparation aux entretiens. L\'éditeur décrit les sous-titres en direct et la reconnaissance vocale comme fonctionnant en local ; sa propre politique de confidentialité indique que l\'audio des réunions en direct transite par son serveur vers OpenAI. Ce test s\'appuie sur le site de l\'éditeur et un e-mail de prise de contact, consultés le 7 novembre 2026 ; PromptQuorum n\'a pas testé l\'application lui-même.',
    metaDescription:
      'Test de Meetini : app Mac payante de sous-titres en direct, notes de réunion et entretiens. Local selon l\'éditeur, OpenAI selon sa politique.',
    twitterDescription:
      'Test de Meetini : assistant de réunions et d\'entretiens pour Mac Apple Silicon. Offres, flux de données et écart entre affirmation locale et confidentialité.',
    audience:
      'Les utilisateurs de Mac qui comparent des outils de notes de réunion et d\'entretien et doivent savoir ce qui reste sur l\'appareil, ce qui atteint un service cloud et ce que les sources laissent ouvert.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Meetini',
    targetKeywords: [
      'test meetini',
      'meetini.net',
      'assistant de réunion mac apple silicon',
      'application préparation entretien ia mac',
      'sous-titres en direct réunion mac',
      'notes de réunion sans robot mac',
      'meetini confidentialité openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini est une application Mac payante pour Apple Silicon qui capte l\'audio des réunions, affiche des sous-titres en direct et rédige des notes sans robot qui rejoint l\'appel, avec des fonctions facultatives de réponses en entretien.** Ce n\'est pas un outil entièrement local : selon la politique de confidentialité, l\'audio en direct est traité par OpenAI.',
    quickAnswerTop: {
      fr: {
        question: 'Meetini est-elle une application de LLM local ?',
        answer:
          'Pas selon sa propre politique de confidentialité. L\'e-mail de l\'éditeur dit que les sous-titres en direct et la transcription tournent en local, mais la politique indique que l\'audio du micro, et celui du système si vous l\'autorisez, est envoyé via le serveur de Meetini à OpenAI pour un traitement en direct.',
        bullets: [
          'Les sous-titres et transcriptions sont produits en direct pendant la réunion.',
          'Les notes et l\'historique des réunions sont générés et synchronisés avec votre compte.',
          'Les fonctions Career préparent des réponses, des mots-clés et des questions de relance.',
          'Un faux entretien animé par l\'IA permet de s\'entraîner pour un poste et une entreprise.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Meetini ?', anchor: 'what-is-meetini' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Local ou cloud : flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-elle ?', anchor: 'who-should-use' },
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
            text: 'Meetini est une application Mac payante à code fermé qui transforme réunions et entretiens en sous-titres en direct, notes et réponses préparées par l\'IA.',
          },
          {
            type: 'plain-terms',
            text: 'Elle écoute votre réunion sur votre Mac sans robot dans l\'appel, puis vous aide à la relire ou à vous entraîner pour un entretien ; ce qui reste sur le Mac et ce qui part dans le cloud est précisément là où ses propres documents divergent.',
          },
        ],
        items: [
          'Maintenance : aucun numéro de version ni date de sortie n\'est publié, donc la dernière mise à jour de l\'application n\'a pas pu être datée et aucun avertissement de projet abandonné ne s\'applique.',
          'Coût : deux offres payantes, aucune offre gratuite ni période d\'essai trouvée, facturation en dollars américains.',
          'Plateformes : Mac Apple Silicon sous macOS 14.2 ou plus récent ; aucune version Windows, Linux ou mobile indiquée.',
          'Éditeur : Moonveil AI Inc., en Californie, sans code source publié.',
          'Lancement : l\'e-mail de l\'éditeur indique un lancement public prévu le 9 novembre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le site et l\'e-mail de l\'éditeur, consultés le 7 novembre 2026. PromptQuorum n\'a ni installé ni mesuré l\'application ; la précision des sous-titres, la qualité des réponses et la prise en charge des langues ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'Qu\'est-ce que Meetini ?',
        content: [
          '**Meetini vous aide à suivre des réunions et des entretiens en direct, à produire des transcriptions et des notes, puis à les relire ensuite.** C\'est ainsi que ses conditions d\'utilisation la décrivent ; la page d\'accueil ajoute qu\'elle capte la conversation directement sur votre Mac, sans robot qui rejoint l\'appel, et qu\'elle fonctionne avec Zoom, Google Meet, Teams et les échanges en présentiel. L\'exploitant est Moonveil AI Inc. ; l\'e-mail de l\'éditeur nomme Zhiyuan Zhang comme fondateur, un détail introuvable sur les pages lues.',
          'Le produit a deux versants. Le versant notes couvre sous-titres, transcriptions, synthèses et un historique de réunions synchronisé. Le versant carrière ajoute des mots-clés tirés de ce qui se dit, des réponses automatiques aux questions d\'entretien, des questions de relance et un faux entretien animé par l\'IA ; les conditions décrivent aussi un mode Interviewer pour le côté recrutement, que la page des tarifs ne mentionne pas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Meetini est un téléchargement DMG pour Mac Apple Silicon, disponible après connexion ; aucune version Windows, Linux, mobile ou web n\'est indiquée.**',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { 'Option': 'macOS', 'Comment l\'obtenir': '[Page de téléchargement](https://meetini.net/app/downloads) (connexion requise) ; Apple Silicon, macOS 14.2 ou plus récent' },
          { 'Option': 'Offres', 'Comment l\'obtenir': 'Notes 20 $/mois ; Career 95 $/mois ; 15 $ et 80 $ par mois facturés au trimestre' },
          { 'Option': 'Site web', 'Comment l\'obtenir': '[meetini.net](https://meetini.net)' },
          { 'Option': 'Politique de confidentialité', 'Comment l\'obtenir': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'Option': 'Code source', 'Comment l\'obtenir': 'Non publié' },
        ],
        note: 'Version examinée : aucune, car aucune page lue n\'indique de numéro de version ni de date de sortie ; l\'e-mail de l\'éditeur indique un lancement public prévu le 9 novembre 2026. Les prix sont les montants en dollars américains de la page des tarifs de l\'éditeur, sans conversion ; les conditions d\'utilisation décrivent une autre structure d\'offres, voir la section sur le flux de données. Aucune offre gratuite ni période d\'essai n\'a été trouvée.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes sont déduites de la page de téléchargement et des conditions d\'utilisation ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Créer un compte et télécharger',
            whyItMatters: 'Connectez-vous sur le site, téléchargez ensuite le DMG depuis la page de téléchargement et déplacez l\'application dans Applications.',
          },
          {
            title: 'Autoriser la capture audio',
            whyItMatters: 'Selon les conditions, Meetini capte votre micro et, si vous l\'autorisez, l\'audio système de votre ordinateur, qui peut contenir la voix d\'autres personnes.',
          },
          {
            title: 'Informer les autres participants',
            whyItMatters: 'Les conditions vous demandent d\'informer les participants et d\'obtenir leur consentement là où la loi l\'exige avant d\'utiliser Meetini en réunion.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site ou des conditions de l\'éditeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Sous-titres en direct et transcriptions.** Les sous-titres apparaissent pendant la réunion et la transcription peut être rouverte plus tard.',
          '**Notes et historique.** Les notes couvrent décisions et prochaines étapes, et l\'historique des réunions est synchronisé avec votre compte.',
          '**Préparation aux entretiens.** Vous indiquez un poste et une entreprise et vous vous entraînez à répondre et à relancer dans un faux entretien animé par l\'IA.',
          '**Aide en direct en entretien.** Avec l\'offre Career, l\'application peut détecter une nouvelle question et préparer une réponse, y compris une aide au code à partir d\'une fenêtre ou d\'un écran que vous sélectionnez.',
        ],
        note: 'La page des tarifs range mots-clés, réponses automatiques et questions de relance parmi les fonctions Career ; elles consomment des minutes d\'IA, qui se mettent en pause quand le quota est épuisé, tandis que sous-titres et notes continuent de fonctionner.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou cloud : flux de données et confidentialité',
        content: [
          '**L\'e-mail de l\'éditeur et sa politique de confidentialité décrivent des chemins audio différents.** L\'e-mail indique que les sous-titres en direct et la reconnaissance vocale tournent en local et que les fonctions Career utilisent l\'IA cloud. La politique de confidentialité, en vigueur depuis le 21 octobre 2026, indique que l\'audio de votre micro et, s\'il est autorisé, l\'audio système sont envoyés via le serveur de Meetini à OpenAI pour un traitement en direct, et qu\'aucun enregistrement complet de la réunion n\'est téléversé dans votre historique cloud. Elle ne mentionne aucune reconnaissance vocale sur l\'appareil.',
          '**Le texte est conservé dans le cloud par défaut.** Après connexion, les nouvelles transcriptions et notes se synchronisent avec votre compte et y restent jusqu\'à leur suppression ; le texte supprimé peut rester récupérable jusqu\'à 30 jours. Selon la politique, la synchronisation cloud peut être désactivée dans les réglages du compte. Elle cite OpenAI, Cloudflare (texte synchronisé et données de compte), Clerk, Stripe et PostHog (événements d\'usage limités) comme sous-traitants et affirme ne pas vendre de données personnelles. Selon la politique, les réglages, les notes conservées localement et les échantillons de voix facultatifs restent sur l\'appareil, et la reconnaissance des locuteurs enregistrés s\'y exécute.',
          'La suppression du compte par l\'utilisateur n\'est pas encore possible ; la politique demande d\'écrire à l\'éditeur par e-mail. OpenAI traite l\'audio en direct selon ses propres pratiques de conservation, que la politique ne détaille pas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur, non des résultats d\'audit, et aucun code source n\'est publié. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. Enregistrer des réunions peut capter la voix d\'autres personnes, et les règles sur l\'aide en entretien varient selon l\'employeur et le pays ; vérifiez donc le consentement et les règles d\'entretien qui s\'appliquent à vous. Ceci n\'est pas un conseil juridique.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle ?',
        items: [
          '**Les utilisateurs de Mac Apple Silicon** qui veulent sous-titres et notes sans robot dans l\'appel.',
          '**Les candidats** qui veulent un faux entretien pour un poste et une entreprise précis.',
          '**Les personnes à l\'aise avec le traitement cloud** et qui acceptent qu\'OpenAI traite l\'audio en direct.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Où tourne la reconnaissance vocale.** L\'e-mail et la politique de confidentialité divergent, et PromptQuorum n\'a pas pu observer le trafic ; aucune page lue ne nomme de modèle vocal ni de langues prises en charge.',
          '**Contenu des offres.** La page des tarifs indique 600 minutes d\'IA pour Career et des notes illimitées, alors que les conditions décrivent 300 minutes de réunion dans l\'offre de base, des modules Career et Interviewer distincts et d\'autres prix de packs ; la page des tarifs cite PayPal et les conditions citent Stripe.',
          '**Version et date de sortie.** Aucune n\'est publiée, et la page de téléchargement exige une connexion, donc l\'installeur n\'a pas été vérifié.',
          '**Qualité et adéquation.** La précision des sous-titres, la qualité des réponses, la latence et la consommation de batterie n\'ont pas été testées, et les conditions ne contiennent aucune règle explicite sur l\'aide en entretien.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence principale'],
        rows: [
          { 'Application': '[Anarlog](/fr/power-local-llm/anarlog-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Offre gratuite / MIT', 'Différence principale': 'Bloc-notes de réunion open source, sans robot ; transcription sur l\'appareil avec Apple Silicon, IA locale ou cloud' },
          { 'Application': '[Meetily](/fr/power-local-llm/meetily-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Édition communautaire gratuite / MIT', 'Différence principale': 'Preneur de notes de réunion auto-hébergé ; transcription locale, résumés via Ollama' },
          { 'Application': '[Perfect Memory AI](/fr/power-local-llm/perfect-memory-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Offre gratuite / code fermé', 'Différence principale': 'Mémoire d\'écran et de réunions consultable ; IA locale seulement avec Ollama, LM Studio ou Jan' },
        ],
        note: 'Ces outils déjà passés en revue ne décrivent pas d\'entraînement aux entretiens ; vérifiez le prix, la licence et les plateformes de chaque application sur sa fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Meetini fonctionne-t-elle hors ligne ?',
            a: 'Aucune source lue ne l\'affirme, et la politique de confidentialité décrit un audio en direct qui passe par le serveur de Meetini vers OpenAI ; une connexion internet semble donc nécessaire pour le traitement en direct.',
          },
          {
            q: 'Puis-je supprimer mes données de réunion ?',
            a: 'Vous pouvez supprimer vous-même le texte des réunions dans le cloud, mais il peut rester récupérable jusqu\'à 30 jours. Supprimer le compte lui-même suppose actuellement d\'écrire à l\'éditeur par e-mail.',
          },
          {
            q: 'Existe-t-il un essai gratuit ?',
            a: 'Aucun n\'a été trouvé sur la page des tarifs ni dans les conditions, qui ne décrivent que des offres payantes et des packs de minutes.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Meetini est une nouvelle option Mac payante qui associe notes de réunion sans robot et entraînement aux entretiens, ce que les autres applications de notes de réunion passées en revue ne décrivent pas. En revanche, l\'affirmation locale de l\'éditeur diffère de sa politique de confidentialité, la page des tarifs et les conditions diffèrent, aucune version ni date de sortie n\'est publiée, il n\'y a pas d\'essai gratuit et le code est fermé. Elle convient aux utilisateurs d\'Apple Silicon qui acceptent un traitement cloud par OpenAI et vérifient les conditions tarifaires avant de payer ; qui doit garder l\'audio sur l\'appareil devrait d\'abord demander des précisions à l\'éditeur.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Meetini](https://meetini.net) — description du produit et fonctions, consulté le 7 novembre 2026.',
          '[Tarifs](https://meetini.net/pricing) — offres, quota de minutes et packs, consultés le 7 novembre 2026.',
          '[Politique de confidentialité](https://meetini.net/privacy) — chemin audio, sous-traitants et conservation, en vigueur depuis le 21 octobre 2026.',
          '[Conditions d\'utilisation](https://meetini.net/terms) — structure des offres, consentement et usage acceptable, en vigueur depuis le 12 octobre 2026.',
          '[Page de téléchargement](https://meetini.net/app/downloads) — plateforme et prérequis macOS, consultée le 7 novembre 2026.',
          'E-mail de prise de contact de l\'éditeur du 7 novembre 2026 — affirmation de traitement local, société, fondateur et date de lancement prévue (non vérifiés de façon indépendante).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'Anarlog](/fr/power-local-llm/anarlog-review) — un bloc-notes de réunion open source avec IA locale ou cloud au choix.',
          '[Test de Meetily](/fr/power-local-llm/meetily-review) — un preneur de notes de réunion auto-hébergé avec résumés locaux.',
          '[Test de Perfect Memory AI](/fr/power-local-llm/perfect-memory-review) — mémoire d\'écran et de réunions consultable.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie pour les outils de transcription.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-ja.webp',
    title: 'Meetini レビュー：Mac向け会議・面接アシスタント',
    seoTitle: 'Meetini レビュー：Mac向け会議・面接アシスタント',
    intro:
      'Meetiniは、[Moonveil AI Inc.](https://meetini.net)が提供するApple Silicon搭載Mac向けの有料の会議・面接アシスタントです。ライブ字幕を表示し、文字起こしとメモを保存し、面接の準備機能も備えています。提供元はライブ字幕と音声認識をローカルで動作すると説明していますが、自社のプライバシー通知にはライブの会議音声がサーバー経由でOpenAIに送られると書かれています。このレビューは、提供元のWebサイトと案内メールを2026年11月7日に確認した内容に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Meetiniのレビュー。ライブ字幕・会議メモ・面接対策のMac向け有料アプリです。提供元は字幕がローカルと説明しますが、プライバシー通知では音声がOpenAIに送られます。',
    twitterDescription:
      'Meetiniのレビュー：Apple Silicon Mac向けの会議・面接アシスタント。料金、データの流れ、提供元のローカル説明とプライバシー通知の食い違いを確認します。',
    audience:
      '会議メモや面接対策のツールを比較しているMacユーザーで、どこがデバイス上で動き、どこがクラウドに送られ、情報源が何を確認していないのかを知りたい方向けの記事です。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Meetini レビュー',
    targetKeywords: [
      'meetini レビュー',
      'meetini.net',
      '会議 アシスタント mac apple silicon',
      'ai 面接対策 アプリ mac',
      'ライブ字幕 会議 mac',
      'ボットなし 議事録 mac',
      'meetini プライバシー openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetiniは、会議の音声を取り込んでライブ字幕を表示し、ボットを通話に参加させずにメモを作成する、Apple Silicon向けの有料Macアプリです。面接の回答を支援する機能も任意で使えます。** 完全なローカルツールではなく、プライバシー通知にはライブ音声がOpenAIで処理されると記載されています。',
    quickAnswerTop: {
      ja: {
        question: 'MeetiniはローカルLLMアプリですか？',
        answer:
          '自社のプライバシー通知によれば、そうではありません。提供元のメールではライブ字幕と文字起こしがローカルで動作するとされていますが、通知にはマイク音声（許可した場合はシステム音声も）がMeetiniのサーバー経由でOpenAIに送られ、ライブ処理されると書かれています。',
        bullets: [
          '会議の進行中に字幕と文字起こしがライブで作られます。',
          'メモと会議履歴が生成され、アカウントに同期されます。',
          'Career機能は回答、キーワード、フォローアップの質問を用意します。',
          'AI模擬面接で、職種と企業を指定して練習できます。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Meetiniとは', anchor: 'what-is-meetini' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '使い始める手順', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'ローカルかクラウドか：データの流れとプライバシー', anchor: 'privacy' },
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
            text: 'Meetiniは、会議や面接をライブ字幕、メモ、AIが用意する回答に変える、クローズドソースの有料Macアプリです。',
          },
          {
            type: 'plain-terms',
            text: '通話にボットを入れずにMacで会議を聞き取り、後から見直したり面接の練習をしたりできます。Mac内にとどまる部分とクラウドに送られる部分は、提供元自身の文書の間で記述が異なります。',
          },
        ],
        items: [
          'メンテナンス：バージョン番号も公開日も公表されていないため、アプリの最終更新日を特定できず、放置プロジェクトの警告は該当しません。',
          '料金：有料プランが2つあり、無料プランも無料トライアルも見つかりませんでした。請求は米ドルです。',
          '対応プラットフォーム：macOS 14.2以降のApple Silicon搭載Macです。Windows、Linux、モバイル版は掲載されていません。',
          '提供元：米カリフォルニア州のMoonveil AI Inc.で、ソースコードは公開されていません。',
          '公開時期：提供元のメールによれば、一般公開は2026年11月9日の予定です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、提供元のWebサイトとメールを2026年11月7日に確認した内容に基づいています。PromptQuorumはアプリをインストールも計測もしていないため、字幕の精度、回答の品質、対応言語は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'Meetiniとは',
        content: [
          '**Meetiniは、ライブの会議や面接を追いかけ、文字起こしとメモを作り、後から見直せるようにするアプリです。** 利用規約にはこのように説明されています。トップページには、通話にボットを参加させずにMac上で会話を直接取り込むこと、Zoom、Google Meet、Teams、対面の会話で使えることが加えて書かれています。運営はMoonveil AI Inc.です。提供元のメールは創業者としてZhiyuan Zhang氏の名前を挙げていますが、確認したページにはこの記載は見つかりませんでした。',
          '製品には2つの側面があります。メモ側は、字幕、文字起こし、要約、同期される会議履歴を扱います。キャリア側では、話している内容からのキーワード、面接の質問への自動回答、フォローアップの質問、AI模擬面接が加わります。利用規約には採用担当者側向けのInterviewerモードの記載もありますが、料金ページには載っていません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**MeetiniはApple Silicon搭載Mac向けのDMGダウンロードで、サインイン後に入手できます。Windows、Linux、モバイル、Web版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'macOS', '入手方法': '[ダウンロードページ](https://meetini.net/app/downloads)（サインインが必要）。Apple Silicon、macOS 14.2以降' },
          { '項目': 'プラン', '入手方法': 'Notes 月額$20、Career 月額$95、四半期払いは月額$15と$80' },
          { '項目': '公式サイト', '入手方法': '[meetini.net](https://meetini.net)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { '項目': 'ソースコード', '入手方法': '非公開' },
        ],
        note: '確認したバージョン：なし。確認したどのページにもバージョン番号や公開日の記載がないためです。提供元のメールによれば、一般公開は2026年11月9日の予定です。価格は料金ページに掲載された提供元の米ドル表示のままで、換算していません。利用規約は異なるプラン構成を説明しており、詳しくはデータの流れのセクションをご覧ください。無料プランも無料トライアルも見つかりませんでした。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: [
          '**手順はダウンロードページと利用規約から推測したもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アカウントを作成してダウンロードする',
            whyItMatters: 'Webサイトでサインインし、ダウンロードページからDMGを入手して、アプリを「アプリケーション」フォルダへ移動します。',
          },
          {
            title: '音声の取り込みを許可する',
            whyItMatters: '利用規約によれば、Meetiniはマイクの音声と、許可した場合はコンピューターのシステム音声を取り込みます。これには他の人の声が含まれることがあります。',
          },
          {
            title: '他の参加者に伝える',
            whyItMatters: '利用規約は、会議でMeetiniを使う前に、法律で必要な場合は参加者に知らせて同意を得るよう求めています。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて提供元のWebサイトまたは利用規約に基づくもので、独自の検証は行っていません。**',
        ],
        items: [
          '**ライブ字幕と文字起こし。** 会議の進行中に字幕が表示され、文字起こしは後から開き直せます。',
          '**メモと履歴。** メモは決定事項と次のステップをまとめ、会議履歴はアカウントに同期されます。',
          '**面接の準備。** 職種と企業を設定し、AI模擬面接で回答とフォローアップの質問を練習します。',
          '**ライブの面接支援。** Careerプランでは、アプリが新しい質問を検出して回答を用意でき、選択したウィンドウや画面を読み取るコーディング支援も含まれます。',
        ],
        note: '料金ページは、キーワード、自動回答、フォローアップの質問をCareer機能として挙げています。これらはAI分数を消費し、上限に達するとAI機能は一時停止しますが、字幕とメモは引き続き動作します。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルかクラウドか：データの流れとプライバシー',
        content: [
          '**提供元のメールとプライバシー通知は、異なる音声の経路を説明しています。** メールでは、ライブ字幕と音声認識はローカルで動作し、Career機能はクラウドAIを使うとされています。2026年10月21日施行のプライバシー通知には、マイク音声と、許可した場合はシステム音声がMeetiniのサーバー経由でOpenAIに送られ、ライブ処理されること、また会議全体の録音はクラウド履歴にアップロードされないことが書かれています。デバイス上の音声認識については記載がありません。',
          '**テキストは初期設定でクラウドに保存されます。** サインイン後、新しい文字起こしとメモがアカウントに同期され、削除するまで残ります。削除したテキストは最長30日間、復元可能な状態で残ることがあります。通知によると、クラウド同期はアカウント設定でオフにできます。通知は、OpenAI、Cloudflare（同期テキストとアカウント記録）、Clerk、Stripe、PostHog（限定的な利用イベント）を処理事業者として挙げ、個人情報を販売しないとしています。通知によると、設定、ローカルに保存したメモ、任意の音声サンプルはデバイス上に残り、登録済みの話者の認識もデバイス上で行われます。',
          'アカウントの自己削除はまだできず、通知は提供元へのメールを求めています。OpenAIはライブ音声を自社の保持方針に従って扱いますが、通知はその詳細を示していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の表明であり、監査結果ではありません。ソースコードも公開されておらず、PromptQuorumはアプリの通信を調べていません。会議の録音には他の人の声が含まれることがあり、面接での支援の利用に関するルールは雇用主や国によって異なります。ご自身に適用される同意と面接のルールを確認してください。これは法的助言ではありません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**Apple Silicon搭載Macのユーザー**で、通話にボットを入れずに字幕とメモが欲しい人。',
          '**求職者**で、特定の職種と企業向けの模擬面接を行いたい人。',
          '**クラウド処理を許容できる人**で、OpenAIによるライブ音声の処理を受け入れられる人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**音声認識がどこで動くか。** メールとプライバシー通知で記述が異なり、PromptQuorumは通信を観察できませんでした。確認したページには音声認識モデル名も対応言語も記載がありません。',
          '**プランの内容。** 料金ページはCareerに600分のAI分数とNotesの無制限を掲載していますが、利用規約は基本プランの会議300分、別々のCareerとInterviewerのアドオン、異なるパック価格を説明しています。決済は料金ページがPayPal、利用規約がStripeと記載しています。',
          '**バージョンと公開日。** どちらも公表されておらず、ダウンロードページはサインインが必要なため、インストーラーは確認していません。',
          '**品質と適合性。** 字幕の精度、回答の品質、遅延、バッテリー消費は検証しておらず、利用規約には面接での支援に関する明示的なルールがありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Anarlog](/ja/power-local-llm/anarlog-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料プラン／MIT', '主な違い': 'ボットなしのオープンソースの議事メモアプリ。Apple Siliconではデバイス上で文字起こしでき、ローカルAIもクラウドAIも選べる' },
          { 'アプリ': '[Meetily](/ja/power-local-llm/meetily-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '無料のCommunity Edition／MIT', '主な違い': 'セルフホスト型の議事録ツール。文字起こしはローカル、要約はOllama経由' },
          { 'アプリ': '[Perfect Memory AI](/ja/power-local-llm/perfect-memory-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '無料プラン／クローズドソース', '主な違い': '画面と会議を検索できる記憶アプリ。AIがローカルになるのはOllama、LM Studio、Jan利用時のみ' },
        ],
        note: 'レビュー済みのこれらのツールでは、面接の練習機能は説明されていません。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれのページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Meetiniはオフラインで使えますか？',
            a: '確認した情報源にはオフラインで使えるという記載がなく、プライバシー通知はライブ音声がMeetiniのサーバー経由でOpenAIに送られると説明しているため、ライブ処理にはインターネット接続が必要と見られます。',
          },
          {
            q: '会議のデータを削除できますか？',
            a: 'クラウド上の会議テキストはご自身で削除できますが、最長30日間は復元可能な状態で残ることがあります。アカウント自体の削除は、現時点では提供元へのメールが必要です。',
          },
          {
            q: '無料トライアルはありますか？',
            a: '料金ページにも利用規約にも見つかりませんでした。利用規約が説明しているのは有料プランと分数パックのみです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Meetiniは、ボットなしの会議メモと面接練習を1つにまとめた、新しい有料のMac向けの選択肢です。レビュー済みの他の会議メモアプリでは、面接練習の機能は説明されていません。一方で、提供元のローカル処理の説明はプライバシー通知と異なり、料金ページと利用規約は食い違い、バージョンも公開日も公表されておらず、無料トライアルはなく、コードは非公開です。OpenAIによるクラウド処理を受け入れ、支払い前に料金の条件を確認できるApple Siliconユーザーに向いています。音声をデバイスにとどめる必要がある人は、まず提供元に説明を求めてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Meetiniの公式サイト](https://meetini.net) — 製品説明と機能。2026年11月7日参照。',
          '[料金](https://meetini.net/pricing) — プラン、AI分数、パック。2026年11月7日参照。',
          '[プライバシー通知](https://meetini.net/privacy) — 音声の経路、処理事業者、保持。2026年10月21日施行。',
          '[利用規約](https://meetini.net/terms) — プラン構成、同意、許容される利用。2026年10月12日施行。',
          '[ダウンロードページ](https://meetini.net/app/downloads) — 対応プラットフォームとmacOSの要件。2026年11月7日参照。',
          '提供元の2026年11月7日付の案内メール — ローカル処理に関する説明、会社、創業者、公開予定日（独自には未検証）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Anarlogレビュー](/ja/power-local-llm/anarlog-review) — ローカルAIとクラウドAIを選べるオープンソースの議事メモアプリ。',
          '[Meetilyレビュー](/ja/power-local-llm/meetily-review) — ローカル要約に対応するセルフホスト型の議事録ツール。',
          '[Perfect Memory AIレビュー](/ja/power-local-llm/perfect-memory-review) — 画面と会議を検索できる記憶アプリ。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 文字起こしツールのカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-pt.webp',
    title: 'Análise do Meetini: assistente de reuniões e entrevistas para Mac',
    seoTitle: 'Análise do Meetini: reuniões e entrevistas no Mac',
    intro:
      'O Meetini é um assistente pago de reuniões e entrevistas para Macs com Apple Silicon, da [Moonveil AI Inc.](https://meetini.net), que mostra legendas ao vivo, guarda transcrições e notas e oferece preparação para entrevistas. O fabricante descreve as legendas ao vivo e o reconhecimento de fala como locais; o próprio aviso de privacidade diz que o áudio ao vivo é enviado à OpenAI por meio do servidor dele. Esta análise se baseia no site do fabricante e em um e-mail de contato, consultados em 7 de novembro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Meetini: app pago para Mac com legendas ao vivo e notas. O fabricante diz que é local; o aviso de privacidade diz que o áudio vai à OpenAI.',
    twitterDescription:
      'Análise do Meetini: assistente de reuniões e entrevistas para Macs com Apple Silicon. Planos, fluxo de dados e onde a afirmação local do fabricante e o aviso de privacidade divergem.',
    audience:
      'Usuários de Mac que comparam ferramentas de notas de reuniões e de entrevistas e precisam saber o que roda no dispositivo, o que chega a um serviço na nuvem e o que as fontes deixam sem confirmação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Meetini',
    targetKeywords: [
      'análise meetini',
      'meetini.net',
      'assistente de reuniões mac apple silicon',
      'app preparação entrevistas ia mac',
      'legendas ao vivo reuniões mac',
      'notas de reuniões sem bot mac',
      'meetini privacidade openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**O Meetini é um app pago para Mac com Apple Silicon que captura o áudio das reuniões, mostra legendas ao vivo e escreve notas sem que um bot entre na chamada, com recursos opcionais de respostas para entrevistas.** Não é uma ferramenta totalmente local: o aviso de privacidade diz que a OpenAI processa o áudio ao vivo.',
    quickAnswerTop: {
      pt: {
        question: 'O Meetini é um app com LLM local?',
        answer:
          'Não segundo o próprio aviso de privacidade. O e-mail do fabricante diz que as legendas ao vivo e a transcrição rodam localmente, mas o aviso informa que o áudio do microfone, e o do sistema se você permitir, é enviado à OpenAI por meio do servidor do Meetini para processamento ao vivo.',
        bullets: [
          'Legendas e transcrições são geradas ao vivo enquanto a reunião acontece.',
          'As notas e o histórico de reuniões são gerados e sincronizados com a sua conta.',
          'Os recursos Career preparam respostas, palavras-chave e perguntas de acompanhamento.',
          'Uma entrevista simulada com IA permite ensaiar para um cargo e uma empresa.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Meetini?', anchor: 'what-is-meetini' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Primeiros passos', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Local ou nuvem: fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
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
            text: 'O Meetini é um app pago e de código fechado para Mac que transforma reuniões e entrevistas em legendas ao vivo, notas e respostas preparadas com IA.',
          },
          {
            type: 'plain-terms',
            text: 'Ele escuta sua reunião no Mac sem um bot na chamada e depois ajuda você a revisá-la ou a treinar uma entrevista; o que fica no Mac e o que vai para a nuvem é justamente onde os documentos dele divergem.',
          },
        ],
        items: [
          'Manutenção: não há número de versão nem data de lançamento publicados, então não foi possível datar a última atualização do app e nenhum aviso de projeto parado se aplica.',
          'Custo: dois planos pagos, sem plano gratuito nem teste, cobrados em dólares americanos.',
          'Plataformas: Macs com Apple Silicon e macOS 14.2 ou posterior; não há versão para Windows, Linux nem celular.',
          'Fabricante: Moonveil AI Inc., na Califórnia, sem código-fonte publicado.',
          'Lançamento: o e-mail do fabricante diz que o lançamento público está previsto para 9 de novembro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site e no e-mail do fabricante, consultados em 7 de novembro de 2026. A PromptQuorum não instalou nem mediu o app, então a precisão das legendas, a qualidade das respostas e os idiomas compatíveis não são avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'O que é o Meetini?',
        content: [
          '**O Meetini ajuda você a acompanhar reuniões e entrevistas ao vivo, gerar transcrições e notas e revisá-las depois.** É assim que os termos de uso o descrevem; a página inicial acrescenta que ele captura a conversa diretamente no seu Mac, sem um bot entrando na chamada, e que funciona com Zoom, Google Meet, Teams e conversas presenciais. A operadora é a Moonveil AI Inc.; o e-mail do fabricante cita Zhiyuan Zhang como fundador, um dado que não aparece nas páginas consultadas.',
          'O produto tem dois lados. O de notas inclui legendas, transcrições, resumos e um histórico de reuniões sincronizado. O de carreira acrescenta palavras-chave a partir do que é dito, respostas automáticas a perguntas de entrevista, perguntas de acompanhamento e uma entrevista simulada com IA; os termos descrevem ainda um modo Interviewer para o lado do recrutamento que a página de preços não lista.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Meetini é um download em DMG para Macs com Apple Silicon, disponível após o login; não há versão listada para Windows, Linux, celular nem web.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': 'macOS', 'Como obter': '[Página de downloads](https://meetini.net/app/downloads) (exige login); Apple Silicon, macOS 14.2 ou posterior' },
          { 'Opção': 'Planos', 'Como obter': 'Notes $20/mês; Career $95/mês; $15 e $80 por mês com cobrança trimestral' },
          { 'Opção': 'Site', 'Como obter': '[meetini.net](https://meetini.net)' },
          { 'Opção': 'Política de privacidade', 'Como obter': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'Opção': 'Código-fonte', 'Como obter': 'Não publicado' },
        ],
        note: 'Versão analisada: nenhuma, porque nenhuma página consultada informa número de versão nem data de lançamento; o e-mail do fabricante diz que o lançamento público está previsto para 9 de novembro de 2026. Os preços são os valores em USD da página de preços do fabricante, que lista apenas dólares americanos, e não são convertidos; os termos de uso descrevem uma estrutura de planos diferente, veja a seção de fluxo de dados. Não foi encontrado plano gratuito nem teste.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeiros passos',
        content: [
          '**Estes passos são deduzidos da página de downloads e dos termos de uso; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Crie uma conta e baixe',
            whyItMatters: 'Faça login no site, baixe o DMG na página de downloads e mova o app para a pasta Aplicativos.',
          },
          {
            title: 'Permita a captura de áudio',
            whyItMatters: 'Os termos dizem que o Meetini captura o microfone e, se você permitir, o áudio do sistema do seu computador, que pode incluir a voz de outras pessoas.',
          },
          {
            title: 'Avise os outros participantes',
            whyItMatters: 'Os termos pedem que você informe os participantes e obtenha o consentimento onde a lei exigir antes de usar o Meetini em uma reunião.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que aparece abaixo vem do site ou dos termos do fabricante; nada foi testado de forma independente.**',
        ],
        items: [
          '**Legendas e transcrições ao vivo.** As legendas aparecem enquanto a reunião acontece e a transcrição pode ser reaberta depois.',
          '**Notas e histórico.** As notas cobrem decisões e próximos passos, e o histórico de reuniões é sincronizado com a sua conta.',
          '**Preparação para entrevistas.** Você informa um cargo e uma empresa e ensaia respostas e perguntas de acompanhamento em uma entrevista simulada com IA.',
          '**Ajuda em entrevistas ao vivo.** No plano Career o app pode detectar uma pergunta nova e preparar uma resposta, incluindo ajuda de programação a partir de uma janela ou tela que você selecionar.',
        ],
        note: 'A página de preços cita palavras-chave, respostas automáticas e perguntas de acompanhamento como recursos do Career; eles consomem minutos de IA, que são pausados quando a franquia acaba, enquanto legendas e notas continuam funcionando.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou nuvem: fluxo de dados e privacidade',
        content: [
          '**O e-mail do fabricante e o aviso de privacidade descrevem caminhos de áudio diferentes.** O e-mail diz que as legendas ao vivo e o reconhecimento de fala rodam localmente e que os recursos Career usam IA na nuvem. O aviso de privacidade, em vigor desde 21 de outubro de 2026, diz que o áudio do microfone e, se permitido, o do sistema é enviado à OpenAI por meio do servidor do Meetini para processamento ao vivo, e que nenhuma gravação completa da reunião é enviada ao seu histórico na nuvem. Ele não cita nenhum reconhecimento de fala no dispositivo.',
          '**O texto é mantido na nuvem por padrão.** Depois do login, novas transcrições e notas são sincronizadas com a sua conta e ficam até você apagá-las; o texto apagado pode continuar recuperável por até 30 dias. Segundo o aviso, a sincronização na nuvem pode ser desativada nas configurações da conta. Ele lista OpenAI, Cloudflare (texto sincronizado e registros da conta), Clerk, Stripe e PostHog (eventos de uso limitados) como operadores, e diz que não vende informações pessoais. Segundo o aviso, configurações, notas mantidas localmente e amostras de voz opcionais ficam no dispositivo, e o reconhecimento de falantes salvos roda lá.',
          'A exclusão da conta pelo próprio usuário ainda não está disponível; o aviso pede que você escreva por e-mail ao fabricante. A OpenAI trata o áudio ao vivo conforme as próprias práticas de retenção, que o aviso não detalha.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do fabricante, não resultados de auditoria, e não há código-fonte publicado. A PromptQuorum não inspecionou o tráfego de rede do app. Gravar reuniões pode captar a voz de outras pessoas, e as regras sobre usar ajuda em entrevistas variam conforme o empregador e o país; por isso, confira o consentimento e as regras de entrevista que se aplicam a você; isto não é aconselhamento jurídico.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Usuários de Mac com Apple Silicon** que querem legendas e notas sem um bot na chamada.',
          '**Candidatos a uma vaga** que querem uma entrevista simulada para um cargo e uma empresa específicos.',
          '**Pessoas à vontade com processamento na nuvem** que aceitam que a OpenAI trate o áudio ao vivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Onde o reconhecimento de fala roda.** O e-mail e o aviso de privacidade divergem e a PromptQuorum não pôde observar o tráfego; nenhuma página consultada cita um modelo de fala nem os idiomas compatíveis.',
          '**Conteúdo dos planos.** A página de preços lista 600 minutos de IA para o Career e notas ilimitadas, enquanto os termos descrevem 300 minutos de reunião no plano base, complementos Career e Interviewer separados e outros preços de pacotes; a página de preços cita o PayPal e os termos citam o Stripe.',
          '**Versão e data de lançamento.** Nenhuma é publicada, e a página de downloads exige login, então o instalador não foi verificado.',
          '**Qualidade e adequação.** A precisão das legendas, a qualidade das respostas, a latência e o consumo de bateria não foram testados, e os termos não trazem nenhuma regra explícita sobre ajuda em entrevistas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Anarlog](/pt/power-local-llm/anarlog-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Plano gratuito / MIT', 'Diferença principal': 'Bloco de notas de reuniões de código aberto e sem bot; transcrição no dispositivo com Apple Silicon, IA local ou na nuvem' },
          { 'App': '[Meetily](/pt/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Community Edition gratuita / MIT', 'Diferença principal': 'Anotador de reuniões auto-hospedado; transcrição local, resumos com Ollama' },
          { 'App': '[Perfect Memory AI](/pt/power-local-llm/perfect-memory-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Plano gratuito / código fechado', 'Diferença principal': 'Memória de tela e reuniões com busca; IA local só com Ollama, LM Studio ou Jan' },
        ],
        note: 'Essas ferramentas analisadas não descrevem treino de entrevistas; confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Meetini funciona offline?',
            a: 'Nenhuma fonte consultada diz isso, e o aviso de privacidade descreve o áudio ao vivo passando pelo servidor do Meetini até a OpenAI, então uma conexão com a internet parece necessária para o processamento ao vivo.',
          },
          {
            q: 'Posso apagar os dados das minhas reuniões?',
            a: 'Você mesmo pode apagar o texto das reuniões na nuvem, mas ele pode continuar recuperável por até 30 dias. Excluir a própria conta exige, por enquanto, escrever por e-mail ao fabricante.',
          },
          {
            q: 'Existe um teste gratuito?',
            a: 'Nenhum foi encontrado na página de preços nem nos termos, que descrevem apenas planos pagos e pacotes de minutos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Meetini é uma opção nova e paga para Mac que combina notas de reuniões sem bot com treino de entrevistas, algo que os outros apps de notas de reuniões analisados não descrevem. Em contrapartida, a afirmação local do fabricante difere do aviso de privacidade, a página de preços e os termos não batem, não há versão nem data de lançamento publicadas, não há teste gratuito e o código é fechado. Serve para usuários de Apple Silicon que aceitam o processamento na nuvem pela OpenAI e conferem os termos de preço antes de pagar; quem precisa que o áudio não saia do dispositivo deve pedir antes um esclarecimento ao fabricante.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Meetini](https://meetini.net) — descrição do produto e recursos, consultado em 7 de novembro de 2026.',
          '[Preços](https://meetini.net/pricing) — planos, minutos incluídos e pacotes, consultado em 7 de novembro de 2026.',
          '[Aviso de privacidade](https://meetini.net/privacy) — caminho do áudio, operadores e retenção, em vigor desde 21 de outubro de 2026.',
          '[Termos de uso](https://meetini.net/terms) — estrutura de planos, consentimento e uso aceitável, em vigor desde 12 de outubro de 2026.',
          '[Página de downloads](https://meetini.net/app/downloads) — plataforma e requisito de macOS, consultada em 7 de novembro de 2026.',
          'E-mail de contato do fabricante de 7 de novembro de 2026 — afirmação de processamento local, empresa, fundador e data de lançamento prevista (não verificado de forma independente).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Anarlog](/pt/power-local-llm/anarlog-review) — um bloco de notas de reuniões de código aberto com IA local ou na nuvem à escolha.',
          '[Análise do Meetily](/pt/power-local-llm/meetily-review) — um anotador de reuniões auto-hospedado com resumos locais.',
          '[Análise do Perfect Memory AI](/pt/power-local-llm/perfect-memory-review) — memória de tela e reuniões com busca.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação da categoria de ferramentas de transcrição.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-ar.webp',
    title: 'مراجعة Meetini: مساعد اجتماعات ومقابلات لأجهزة Mac',
    seoTitle: 'مراجعة Meetini: مساعد الاجتماعات والمقابلات على Mac',
    intro:
      'Meetini مساعد مدفوع للاجتماعات والمقابلات على أجهزة Mac بمعالج Apple Silicon من [Moonveil AI Inc.](https://meetini.net)، يعرض تسميات توضيحية مباشرة للكلام ويحفظ التفريغ النصي والملاحظات ويقدّم أدوات للتحضير للمقابلات. تصف الشركة التسميات التوضيحية المباشرة والتفريغ الصوتي بأنهما يعملان محليًا، بينما يذكر إشعار الخصوصية الخاص بها أن صوت الاجتماع المباشر يُرسل عبر خادمها إلى OpenAI. تستند هذه المراجعة إلى موقع الشركة ورسالة بريد إلكتروني منها، وقد روجعت في 7 نوفمبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Meetini: تطبيق Mac مدفوع للتسميات التوضيحية المباشرة وملاحظات الاجتماعات والمقابلات. تقول الشركة إنه محلي، ويذكر إشعار الخصوصية إرسال الصوت إلى OpenAI.',
    twitterDescription:
      'مراجعة Meetini: مساعد اجتماعات ومقابلات لأجهزة Apple Silicon. الخطط وتدفق البيانات وموضع الاختلاف بين ادعاء الشركة المحلي وإشعار الخصوصية.',
    audience:
      'مستخدمو Mac الذين يقارنون أدوات ملاحظات الاجتماعات والمقابلات ويحتاجون إلى معرفة ما يعمل على الجهاز وما يصل إلى خدمة سحابية وما تتركه المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Meetini',
    targetKeywords: [
      'مراجعة meetini',
      'meetini.net',
      'مساعد اجتماعات mac apple silicon',
      'تطبيق تحضير مقابلات بالذكاء الاصطناعي mac',
      'تسميات توضيحية مباشرة للاجتماعات mac',
      'ملاحظات اجتماعات دون بوت mac',
      'meetini الخصوصية openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini تطبيق Mac مدفوع لمعالجات Apple Silicon يلتقط صوت الاجتماعات ويعرض تسميات توضيحية مباشرة ويكتب ملاحظات دون أن ينضم بوت إلى المكالمة، مع ميزات اختيارية للإجابة في المقابلات.** وهو ليس أداة محلية بالكامل: فإشعار الخصوصية يذكر أن OpenAI تعالج الصوت المباشر.',
    quickAnswerTop: {
      ar: {
        question: 'هل Meetini تطبيق بنموذج لغوي محلي؟',
        answer:
          'ليس بحسب إشعار الخصوصية الخاص به. تقول رسالة الشركة إن التسميات التوضيحية المباشرة والتفريغ يعملان محليًا، لكن الإشعار يذكر أن صوت الميكروفون، وصوت النظام إن سمحت به، يُرسل عبر خادم Meetini إلى OpenAI للمعالجة المباشرة.',
        bullets: [
          'تُنتج التسميات التوضيحية المباشرة والتفريغ النصي أثناء سير الاجتماع.',
          'تُولَّد الملاحظات وسجل الاجتماعات وتُزامَن مع حسابك.',
          'تجهّز ميزات Career إجابات وكلمات مفتاحية وأسئلة متابعة.',
          'تتيح مقابلة تجريبية بالذكاء الاصطناعي التدرب على دور وشركة محددين.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Meetini؟', anchor: 'what-is-meetini' },
      { label: 'طريقة الحصول عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات المؤكدة من المصادر', anchor: 'key-features' },
      { label: 'محلي أم سحابي: تدفق البيانات والخصوصية', anchor: 'privacy' },
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
            text: 'Meetini تطبيق Mac مدفوع ومغلق المصدر يحوّل الاجتماعات والمقابلات إلى تسميات توضيحية مباشرة وملاحظات وإجابات يجهّزها الذكاء الاصطناعي.',
          },
          {
            type: 'plain-terms',
            text: 'يستمع إلى اجتماعك على جهاز Mac دون بوت في المكالمة، ثم يساعدك على مراجعته أو التدرب على مقابلة؛ أما ما يبقى على الجهاز وما يذهب إلى السحابة فهو موضع اختلاف وثائقه نفسها.',
          },
        ],
        items: [
          'الصيانة: لا يُنشر رقم إصدار ولا تاريخ إصدار، لذا تعذّر تحديد تاريخ آخر تحديث للتطبيق ولا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: خطتان مدفوعتان، ولم نجد خطة مجانية ولا تجربة، والفوترة بالدولار الأمريكي.',
          'المنصات: أجهزة Mac بمعالج Apple Silicon مع macOS 14.2 أو أحدث؛ ولا تُذكر نسخة لـ Windows أو Linux أو الهاتف.',
          'الشركة المطورة: Moonveil AI Inc. في كاليفورنيا، دون شيفرة مصدرية منشورة.',
          'الإطلاق: تذكر رسالة الشركة أن الإطلاق العام مقرر في 9 نوفمبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع الشركة ورسالتها الإلكترونية، وقد روجعت في 7 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تقِسه، لذا لم تُقيَّم دقة التسميات التوضيحية المباشرة وجودة الإجابات ودعم اللغات.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'ما هو Meetini؟',
        content: [
          '**يساعدك Meetini على متابعة الاجتماعات والمقابلات المباشرة وإنتاج التفريغ النصي والملاحظات ومراجعتها لاحقًا.** هكذا تصفه شروط الاستخدام؛ وتضيف الصفحة الرئيسية أنه يلتقط المحادثة مباشرة على جهاز Mac دون أن ينضم بوت إلى المكالمة، وأنه يعمل مع Zoom وGoogle Meet وTeams والحوارات الحضورية. الجهة المشغّلة هي Moonveil AI Inc.؛ وتذكر رسالة الشركة Zhiyuan Zhang مؤسسًا لها، وهي معلومة لم نجدها في الصفحات التي قُرئت.',
          'للمنتج جانبان. جانب تدوين الملاحظات يشمل التسميات التوضيحية المباشرة والتفريغ النصي والملخصات وسجل اجتماعات متزامنًا. أما جانب المسار المهني فيضيف كلمات مفتاحية مما يُقال، وإجابات تلقائية عن أسئلة المقابلة، وأسئلة متابعة، ومقابلة تجريبية بالذكاء الاصطناعي؛ كما تصف الشروط وضع Interviewer لجهة التوظيف لا تدرجه صفحة الأسعار.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'طريقة الحصول عليه',
        content: [
          '**يُنزَّل Meetini بملف DMG لأجهزة Mac بمعالج Apple Silicon بعد تسجيل الدخول، ولا تُذكر نسخة لـ Windows أو Linux أو الهاتف أو الويب.**',
        ],
        columns: ['الخيار', 'طريقة الحصول عليه'],
        rows: [
          { 'الخيار': 'macOS', 'طريقة الحصول عليه': '[صفحة التنزيلات](https://meetini.net/app/downloads) (تتطلب تسجيل الدخول)؛ Apple Silicon، macOS 14.2 أو أحدث' },
          { 'الخيار': 'الخطط', 'طريقة الحصول عليه': 'Notes بـ 20 دولارًا شهريًا؛ Career بـ 95 دولارًا شهريًا؛ و15 و80 دولارًا شهريًا عند الدفع ربع السنوي' },
          { 'الخيار': 'الموقع', 'طريقة الحصول عليه': '[meetini.net](https://meetini.net)' },
          { 'الخيار': 'سياسة الخصوصية', 'طريقة الحصول عليه': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'طريقة الحصول عليه': 'غير منشورة' },
        ],
        note: 'الإصدار الذي رُوجع: لا يوجد، لأن أي صفحة قُرئت لا تذكر رقم إصدار ولا تاريخ إصدار؛ وتذكر رسالة الشركة أن الإطلاق العام مقرر في 9 نوفمبر 2026. الأسعار هي أرقام الشركة بالدولار الأمريكي من صفحة الأسعار دون تحويل؛ وتصف شروط الاستخدام بنية خطط مختلفة، انظر قسم تدفق البيانات. لم نجد خطة مجانية ولا تجربة.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**استُنتجت هذه الخطوات من صفحة التنزيلات وشروط الاستخدام؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'أنشئ حسابًا ونزّل التطبيق',
            whyItMatters: 'سجّل الدخول في الموقع، ثم نزّل ملف DMG من صفحة التنزيلات وانقل التطبيق إلى مجلد التطبيقات.',
          },
          {
            title: 'اسمح بالتقاط الصوت',
            whyItMatters: 'تذكر الشروط أن Meetini يلتقط صوت الميكروفون، وصوت حاسوبك إن سمحت بذلك، وقد يتضمن أصوات أشخاص آخرين.',
          },
          {
            title: 'أخبر بقية المشاركين',
            whyItMatters: 'تطلب الشروط منك إبلاغ المشاركين والحصول على موافقتهم حيث يقتضي القانون ذلك قبل استخدام Meetini في اجتماع.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات المؤكدة من المصادر',
        content: [
          '**كل بند أدناه مصدره موقع الشركة أو شروطها؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**التسميات التوضيحية المباشرة والتفريغ النصي.** تظهر التسميات التوضيحية أثناء سير الاجتماع ويمكن إعادة فتح التفريغ لاحقًا.',
          '**الملاحظات والسجل.** تغطي الملاحظات القرارات والخطوات التالية، ويُزامَن سجل الاجتماعات مع حسابك.',
          '**التحضير للمقابلات.** تحدد دورًا وشركة وتتدرب على الإجابات وأسئلة المتابعة في مقابلة تجريبية بالذكاء الاصطناعي.',
          '**مساعدة مباشرة في المقابلة.** في خطة Career يمكن للتطبيق اكتشاف سؤال جديد وتجهيز إجابة، بما في ذلك مساعدة برمجية من نافذة أو شاشة تحددها.',
        ],
        note: 'تذكر صفحة الأسعار أن الكلمات المفتاحية والإجابات التلقائية وأسئلة المتابعة من ميزات Career؛ وهي تستهلك دقائق الذكاء الاصطناعي التي تتوقف عند نفادها بينما تستمر التسميات التوضيحية المباشرة والملاحظات.',
      },
      privacy: {
        id: 'privacy',
        title: 'محلي أم سحابي: تدفق البيانات والخصوصية',
        content: [
          '**تصف رسالة الشركة وإشعار الخصوصية الخاص بها مسارين مختلفين للصوت.** تقول الرسالة إن التسميات التوضيحية المباشرة والتفريغ الصوتي يعملان محليًا وإن ميزات Career تستخدم الذكاء الاصطناعي السحابي. أما إشعار الخصوصية، النافذ في 21 أكتوبر 2026، فيذكر أن صوت الميكروفون، وصوت النظام إن سُمح به، يُرسل عبر خادم Meetini إلى OpenAI للمعالجة المباشرة، وأنه لا يُرفع تسجيل كامل للاجتماع إلى سجلك السحابي. ولا يسمّي أي تفريغ صوتي على الجهاز.',
          '**يُحتفظ بالنص في السحابة افتراضيًا.** بعد تسجيل الدخول، تُزامَن التفريغات والملاحظات الجديدة مع حسابك وتبقى إلى أن تحذفها؛ وقد يبقى النص المحذوف قابلًا للاسترداد حتى 30 يومًا. ويذكر الإشعار أنه يمكن إيقاف المزامنة السحابية من إعدادات الحساب. ويسرد الإشعار OpenAI وCloudflare (النص المتزامن وسجلات الحساب) وClerk وStripe وPostHog (أحداث استخدام محدودة) جهاتِ معالجة، ويقول إنه لا يبيع المعلومات الشخصية. ويضيف الإشعار أن الإعدادات والملاحظات المحفوظة محليًا والعينات الصوتية الاختيارية تبقى على الجهاز، وأن التعرف على المتحدثين المحفوظين يجري عليه.',
          'حذف الحساب ذاتيًا غير متاح بعد؛ ويطلب الإشعار مراسلة الشركة بالبريد الإلكتروني. وتعالج OpenAI الصوت المباشر وفق ممارساتها الخاصة في الاحتفاظ بالبيانات، ولا يفصّلها الإشعار.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الشركة لا نتائج تدقيق، ولا توجد شيفرة مصدرية منشورة. لم تفحص PromptQuorum حركة شبكة التطبيق. قد يلتقط تسجيل الاجتماعات أصوات أشخاص آخرين، وتختلف قواعد الاستعانة بالمساعدة في المقابلات بحسب جهة العمل والبلد، فتحقق من قواعد الموافقة والمقابلة التي تنطبق عليك؛ وهذا ليس استشارة قانونية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Mac بمعالج Apple Silicon** الذين يريدون تسميات توضيحية مباشرة وملاحظات دون بوت في المكالمة.',
          '**المتقدمون للوظائف** الذين يريدون مقابلة تجريبية لدور وشركة محددين.',
          '**من لا يمانعون المعالجة السحابية** ويقبلون أن تعالج OpenAI الصوت المباشر.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**مكان تشغيل التفريغ الصوتي.** تختلف الرسالة وإشعار الخصوصية، ولم تستطع PromptQuorum مراقبة حركة الشبكة؛ ولا تسمّي أي صفحة قُرئت نموذج كلام ولا اللغات المدعومة.',
          '**محتوى الخطط.** تذكر صفحة الأسعار 600 دقيقة ذكاء اصطناعي لـ Career وملاحظات غير محدودة، بينما تصف الشروط 300 دقيقة اجتماع في الخطة الأساسية وإضافتين منفصلتين لـ Career وInterviewer وأسعار حزم مختلفة؛ وتذكر صفحة الأسعار PayPal وتذكر الشروط Stripe.',
          '**الإصدار وتاريخه.** لا يُنشر أي منهما، وصفحة التنزيلات تتطلب تسجيل الدخول، لذا لم يُفحص المثبّت.',
          '**الجودة والملاءمة.** لم تُختبر دقة التسميات التوضيحية المباشرة وجودة الإجابات وزمن الاستجابة واستهلاك البطارية، ولا تتضمن الشروط قاعدة صريحة بشأن المساعدة في المقابلات.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[Anarlog](/ar/power-local-llm/anarlog-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الترخيص': 'خطة مجانية / MIT', 'الفرق الرئيسي': 'دفتر ملاحظات اجتماعات مفتوح المصدر دون بوت؛ تفريغ نصي على الجهاز في Apple Silicon، وذكاء اصطناعي محلي أو سحابي' },
          { 'التطبيق': '[Meetily](/ar/power-local-llm/meetily-review)', 'المنصات': 'Windows وmacOS', 'السعر / الترخيص': 'نسخة مجتمعية مجانية / MIT', 'الفرق الرئيسي': 'مدوّن اجتماعات ذاتي الاستضافة؛ تفريغ نصي محلي وملخصات عبر Ollama' },
          { 'التطبيق': '[Perfect Memory AI](/ar/power-local-llm/perfect-memory-review)', 'المنصات': 'Windows وmacOS', 'السعر / الترخيص': 'خطة مجانية / مغلق المصدر', 'الفرق الرئيسي': 'ذاكرة قابلة للبحث للشاشة والاجتماعات؛ ذكاء اصطناعي محلي فقط مع Ollama أو LM Studio أو Jan' },
        ],
        note: 'هذه الأدوات التي سبقت مراجعتها لا تذكر التدرب على المقابلات؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Meetini دون اتصال بالإنترنت؟',
            a: 'لا يذكر أي مصدر مقروء ذلك، ويصف إشعار الخصوصية مرور الصوت المباشر عبر خادم Meetini إلى OpenAI، لذا يبدو أن المعالجة المباشرة تتطلب اتصالًا بالإنترنت.',
          },
          {
            q: 'هل يمكنني حذف بيانات اجتماعاتي؟',
            a: 'يمكنك حذف نص الاجتماعات السحابي بنفسك، لكنه قد يبقى قابلًا للاسترداد حتى 30 يومًا. أما حذف الحساب نفسه فيعني حاليًا مراسلة الشركة بالبريد الإلكتروني.',
          },
          {
            q: 'هل توجد تجربة مجانية؟',
            a: 'لم نجد أيًّا منها في صفحة الأسعار ولا في الشروط، وهما تصفان خططًا مدفوعة وحزم دقائق فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Meetini خيار جديد ومدفوع على Mac يجمع بين ملاحظات الاجتماعات دون بوت والتدرب على المقابلات، وهو ما لا تذكره تطبيقات ملاحظات الاجتماعات الأخرى التي سبقت مراجعتها. في المقابل، يختلف ادعاء الشركة المحلي عن إشعار الخصوصية الخاص بها، وتختلف صفحة الأسعار عن الشروط، ولا يُنشر رقم إصدار ولا تاريخ إصدار، ولا توجد تجربة مجانية، والشيفرة مغلقة. يناسب مستخدمي Apple Silicon الذين يقبلون أن تعالج OpenAI الصوت سحابيًا ويراجعون شروط الأسعار قبل الدفع؛ ومن يحتاج إلى بقاء الصوت على الجهاز فعليه أن يطلب من الشركة التوضيح أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Meetini](https://meetini.net) — وصف المنتج والميزات، قُرئ في 7 نوفمبر 2026.',
          '[الأسعار](https://meetini.net/pricing) — الخطط ودقائق الاستخدام والحزم، قُرئت في 7 نوفمبر 2026.',
          '[إشعار الخصوصية](https://meetini.net/privacy) — مسار الصوت وجهات المعالجة والاحتفاظ بالبيانات، نافذ في 21 أكتوبر 2026.',
          '[شروط الاستخدام](https://meetini.net/terms) — بنية الخطط والموافقة والاستخدام المقبول، نافذة في 12 أكتوبر 2026.',
          '[صفحة التنزيلات](https://meetini.net/app/downloads) — المنصة ومتطلب macOS، قُرئت في 7 نوفمبر 2026.',
          'رسالة الشركة الإلكترونية بتاريخ 7 نوفمبر 2026 — بيان المعالجة المحلية والشركة والمؤسس وموعد الإطلاق المقرر (لم يُتحقق منها بشكل مستقل).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Anarlog](/ar/power-local-llm/anarlog-review) — دفتر ملاحظات اجتماعات مفتوح المصدر مع خيار الذكاء الاصطناعي المحلي أو السحابي.',
          '[مراجعة Meetily](/ar/power-local-llm/meetily-review) — مدوّن اجتماعات ذاتي الاستضافة بملخصات محلية.',
          '[مراجعة Perfect Memory AI](/ar/power-local-llm/perfect-memory-review) — ذاكرة قابلة للبحث للشاشة والاجتماعات.',
          '[أدوات الصوت والتسجيلات الصوتية: مقارنة](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة لأدوات التفريغ النصي.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-zh.webp',
    title: 'Meetini 评测：Mac 会议与面试助手',
    seoTitle: 'Meetini 评测：Mac 会议与面试助手的方案与数据流向',
    intro:
      'Meetini 是 [Moonveil AI Inc.](https://meetini.net) 推出的面向 Apple Silicon Mac 的付费会议与面试助手，可显示实时字幕、保存转写和笔记，并提供面试准备功能。厂商称实时字幕和语音转文字在本地运行，但其自己的隐私声明称实时会议音频会经其服务器发送给 OpenAI。本评测基于厂商网站和一封联系邮件，核查日期为 2026 年 11 月 7 日；PromptQuorum 没有亲自实测该应用。',
    metaDescription:
      'Meetini 评测：用于实时字幕、会议笔记和面试准备的 Mac 付费应用。厂商称字幕在本地运行，但其隐私声明称音频会发送给 OpenAI。未经实测。',
    twitterDescription:
      'Meetini 评测：面向 Apple Silicon Mac 的会议与面试助手。看方案、数据流向，以及厂商的本地说法与隐私声明的出入。',
    audience:
      '正在比较会议笔记和面试工具的 Mac 用户，需要弄清哪些部分在设备上运行、哪些会进入云端服务、哪些内容来源并未确认。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Meetini 评测',
    targetKeywords: [
      'meetini 评测',
      'meetini.net',
      '会议助手 mac apple silicon',
      'ai 面试准备 应用 mac',
      '实时字幕 会议 mac',
      '无机器人 会议笔记 mac',
      'meetini 隐私 openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini 是一款面向 Apple Silicon 的付费 Mac 应用，可采集会议音频、显示实时字幕并生成笔记，无需机器人加入通话，还提供可选的面试答题功能。** 它不是完全本地的工具：隐私声明称实时音频由 OpenAI 处理。',
    quickAnswerTop: {
      zh: {
        question: 'Meetini 是本地 LLM 应用吗？',
        answer:
          '按其自己的隐私声明，不是。厂商的邮件称实时字幕和转写在本地运行，但声明称麦克风音频（若你允许则包括系统音频）会经 Meetini 的服务器发送给 OpenAI 进行实时处理。',
        bullets: [
          '会议进行时实时生成字幕和转写。',
          '笔记和会议历史会生成并同步到你的账户。',
          'Career 功能会准备回答、关键词和追问问题。',
          'AI 模拟面试可让你针对某个职位和公司进行练习。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Meetini 是什么？', anchor: 'what-is-meetini' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '本地还是云端：数据流向与隐私', anchor: 'privacy' },
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
            text: 'Meetini 是一款闭源的付费 Mac 应用，把会议和面试变成实时字幕、笔记和 AI 准备的回答。',
          },
          {
            type: 'plain-terms',
            text: '它在你的 Mac 上听取会议，通话中无需机器人，之后可帮你回顾会议或练习面试；哪些内容留在 Mac 上、哪些发往云端，正是它自己的文件之间说法不一的地方。',
          },
        ],
        items: [
          '维护情况：未公布版本号或发布日期，因此无法确定该应用的最近更新日期，不适用停止维护警告。',
          '费用：两个付费方案，未发现免费方案或试用，以美元计费。',
          '平台：macOS 14.2 或更高版本的 Apple Silicon Mac；未列出 Windows、Linux 或移动端版本。',
          '厂商：位于美国加利福尼亚州的 Moonveil AI Inc.，未公开源代码。',
          '上线：厂商的邮件称公开发布计划在 2026 年 11 月 9 日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于厂商网站和邮件，核查日期为 2026 年 11 月 7 日。PromptQuorum 没有安装或测量该应用，因此字幕准确度、回答质量和语言支持均未评估。',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'Meetini 是什么？',
        content: [
          '**Meetini 帮助你跟进实时会议和面试，生成转写和笔记，并在事后回顾。** 其使用条款是这样描述的；首页补充说，它直接在你的 Mac 上采集对话，无需机器人加入通话，并可用于 Zoom、Google Meet、Teams 和线下交谈。运营方是 Moonveil AI Inc.；厂商的邮件称 Zhiyuan Zhang 为创始人，这一信息在已阅读的页面上未找到。',
          '产品有两个方面。笔记方面包括字幕、转写、摘要和同步的会议历史。职业方面增加了根据谈话内容提取的关键词、对面试问题的自动回答、追问问题和 AI 模拟面试；使用条款还描述了面向招聘方的 Interviewer 模式，而定价页并未列出。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Meetini 是面向 Apple Silicon Mac 的 DMG 下载，需登录后获取；未列出 Windows、Linux、移动端或网页版。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'macOS', '获取方式': '[下载页面](https://meetini.net/app/downloads)（需登录）；Apple Silicon，macOS 14.2 或更高' },
          { '选项': '方案', '获取方式': 'Notes 每月 $20；Career 每月 $95；按季度计费为每月 $15 和 $80' },
          { '选项': '官方网站', '获取方式': '[meetini.net](https://meetini.net)' },
          { '选项': '隐私政策', '获取方式': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { '选项': '源代码', '获取方式': '未公开' },
        ],
        note: '核查的版本：无，因为已阅读的页面都没有给出版本号或发布日期；厂商的邮件称公开发布计划在 2026 年 11 月 9 日。价格为定价页上厂商给出的美元金额，未作换算；使用条款描述了不同的方案结构，详见数据流向部分。未发现免费方案或试用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**这些步骤是根据下载页和使用条款推断的，PromptQuorum 没有实际运行。**',
        ],
        numberedItems: [
          {
            title: '创建账户并下载',
            whyItMatters: '在网站上登录，然后从下载页下载 DMG，并把应用移入“应用程序”文件夹。',
          },
          {
            title: '允许音频采集',
            whyItMatters: '使用条款称，Meetini 会采集你的麦克风音频，以及在你允许时采集电脑的系统音频，其中可能包含他人的声音。',
          },
          {
            title: '告知其他参与者',
            whyItMatters: '使用条款要求你在会议中使用 Meetini 之前，按法律要求告知参与者并取得同意。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自厂商网站或使用条款，均未经独立测试。**',
        ],
        items: [
          '**实时字幕与转写。** 会议进行时显示字幕，转写内容事后可重新打开。',
          '**笔记与历史。** 笔记涵盖决定和后续步骤，会议历史同步到你的账户。',
          '**面试准备。** 你设定职位和公司，并在 AI 模拟面试中练习回答和追问问题。',
          '**实时面试辅助。** 在 Career 方案中，应用可检测新问题并准备回答，包括根据你选定的窗口或屏幕提供编程辅助。',
        ],
        note: '定价页将关键词、自动回答和追问问题列为 Career 功能；它们会消耗 AI 分钟数，额度用完后 AI 功能会暂停，而字幕和笔记继续可用。',
      },
      privacy: {
        id: 'privacy',
        title: '本地还是云端：数据流向与隐私',
        content: [
          '**厂商的邮件和隐私声明描述了不同的音频路径。** 邮件称实时字幕和语音转文字在本地运行，Career 功能使用云端 AI。2026 年 10 月 21 日生效的隐私声明称，麦克风音频以及（若你允许）系统音频会经 Meetini 的服务器发送给 OpenAI 进行实时处理，并且不会把完整的会议录音上传到你的云端历史记录。声明没有提到设备端的语音转文字。',
          '**文本默认保存在云端。** 登录后，新的转写和笔记会同步到你的账户，并保留到你删除为止；已删除的文本最长可能在 30 天内仍可恢复。声明称可以在账户设置中关闭云端同步。声明列出 OpenAI、Cloudflare（同步文本和账户记录）、Clerk、Stripe 和 PostHog（有限的使用事件）为处理方，并称不出售个人信息。声明还称，设置、本地保存的笔记和可选的语音样本留在设备上，对已保存说话人的识别也在设备上运行。',
          '账户自助删除尚不可用，声明要求你给厂商发邮件。OpenAI 按自己的保留做法处理实时音频，声明没有详述。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是厂商的声明，不是审计结果，也没有公开源代码。PromptQuorum 没有检查该应用的网络流量。录制会议可能会采集他人的声音，而面试中使用辅助工具的规则因雇主和国家而异，请核对适用于你的同意规定和面试规则；这不构成法律建议。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**使用 Apple Silicon 的 Mac 用户**，想要字幕和笔记，又不希望通话中有机器人。',
          '**求职者**，想针对特定职位和公司进行模拟面试。',
          '**能接受云端处理的人**，接受由 OpenAI 处理实时音频。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**语音转文字在哪里运行。** 邮件和隐私声明说法不一，PromptQuorum 无法观察流量；已阅读的页面都没有给出语音模型名称或支持的语言。',
          '**方案内容。** 定价页列出 Career 含 600 AI 分钟、Notes 不限量，而使用条款描述的是基础方案含 300 会议分钟、独立的 Career 和 Interviewer 附加包以及不同的分钟包价格；定价页写的是 PayPal，使用条款写的是 Stripe。',
          '**版本和发布日期。** 均未公布，且下载页需要登录，因此没有核查安装包。',
          '**质量与适用性。** 字幕准确度、回答质量、延迟和耗电量均未测试，使用条款中也没有关于面试辅助的明确规定。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格／许可证', '主要区别'],
        rows: [
          { '应用': '[Anarlog](/zh/power-local-llm/anarlog-review)', '平台': 'macOS、Windows、Linux', '价格／许可证': '免费方案／MIT', '主要区别': '开源、无机器人的会议记事本；Apple Silicon 上可在设备端转写，本地或云端 AI 均可' },
          { '应用': '[Meetily](/zh/power-local-llm/meetily-review)', '平台': 'Windows、macOS', '价格／许可证': '免费社区版／MIT', '主要区别': '自托管的会议记录工具；本地转写，摘要通过 Ollama' },
          { '应用': '[Perfect Memory AI](/zh/power-local-llm/perfect-memory-review)', '平台': 'Windows、macOS', '价格／许可证': '免费方案／闭源', '主要区别': '可搜索的屏幕与会议记忆；仅在使用 Ollama、LM Studio 或 Jan 时 AI 才在本地' },
        ],
        note: '这些已评测的工具均未提及面试练习；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Meetini 可以离线使用吗？',
            a: '已阅读的来源都没有说可以，而隐私声明称实时音频经 Meetini 的服务器发送给 OpenAI，因此实时处理看起来需要联网。',
          },
          {
            q: '我可以删除自己的会议数据吗？',
            a: '云端的会议文本你可以自行删除，但最长可能在 30 天内仍可恢复。删除账户本身目前需要给厂商发邮件。',
          },
          {
            q: '有免费试用吗？',
            a: '在定价页和使用条款中都没有发现，使用条款只描述了付费方案和分钟包。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Meetini 是一款新的付费 Mac 选项，把无机器人的会议笔记与面试练习结合在一起，而其他已评测的会议笔记应用并未提及面试练习功能。但另一方面，厂商的本地说法与其隐私声明不同，定价页和使用条款的说法不一致，未公布版本号或发布日期，没有免费试用，代码也不公开。它适合能接受 OpenAI 云端处理、并在付款前核对定价条款的 Apple Silicon 用户；需要音频留在设备上的人，应先请厂商说明清楚。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Meetini 官方网站](https://meetini.net) — 产品介绍和功能，2026 年 11 月 7 日查阅。',
          '[定价](https://meetini.net/pricing) — 方案、AI 分钟额度和分钟包，2026 年 11 月 7 日查阅。',
          '[隐私声明](https://meetini.net/privacy) — 音频路径、处理方和保留期，2026 年 10 月 21 日生效。',
          '[使用条款](https://meetini.net/terms) — 方案结构、同意和可接受的使用，2026 年 10 月 12 日生效。',
          '[下载页面](https://meetini.net/app/downloads) — 平台和 macOS 要求，2026 年 11 月 7 日查阅。',
          '厂商 2026 年 11 月 7 日的联系邮件 — 本地处理的说法、公司、创始人和计划上线日期（未经独立核实）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Anarlog 评测](/zh/power-local-llm/anarlog-review) — 可选本地或云端 AI 的开源会议记事本。',
          '[Meetily 评测](/zh/power-local-llm/meetily-review) — 支持本地摘要的自托管会议记录工具。',
          '[Perfect Memory AI 评测](/zh/power-local-llm/perfect-memory-review) — 可搜索的屏幕与会议记忆。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 转写工具的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-07',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-07',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/meetini-review-hero-ko.webp',
    title: 'Meetini 리뷰: Mac용 회의·면접 어시스턴트',
    seoTitle: 'Meetini 리뷰: Mac용 회의·면접 어시스턴트',
    intro:
      'Meetini는 [Moonveil AI Inc.](https://meetini.net)가 만든 Apple Silicon Mac용 유료 회의·면접 어시스턴트로, 실시간 자막을 보여 주고 전사본과 노트를 보관하며 면접 준비 기능을 제공합니다. 제작사는 실시간 자막과 음성 인식이 로컬에서 실행된다고 설명하지만, 제작사 자체의 개인정보 처리 안내문에는 실시간 회의 오디오가 제작사 서버를 거쳐 OpenAI로 전송된다고 적혀 있습니다. 이 리뷰는 제작사의 웹사이트와 안내 이메일을 2026년 11월 7일에 확인한 내용에 근거하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Meetini 리뷰: 실시간 자막, 회의 노트, 면접 준비를 제공하는 유료 Mac 앱입니다. 제작사는 자막이 로컬이라 하나 안내문에는 오디오가 OpenAI로 전송된다고 되어 있습니다.',
    twitterDescription:
      'Meetini 리뷰: Apple Silicon Mac용 회의·면접 어시스턴트. 요금제, 데이터 흐름, 제작사의 로컬 주장과 개인정보 안내문이 다른 부분을 정리했습니다.',
    audience:
      '회의 노트와 면접 도구를 비교하는 Mac 사용자 중, 어떤 부분이 기기에서 실행되고 어떤 부분이 클라우드 서비스로 가는지, 출처가 무엇을 확인하지 못했는지 알고 싶은 분들을 위한 글입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Meetini 리뷰',
    targetKeywords: [
      'meetini 리뷰',
      'meetini.net',
      'mac apple silicon 회의 어시스턴트',
      'ai 면접 준비 앱 mac',
      'mac 회의 실시간 자막',
      '봇 없는 회의 노트 mac',
      'meetini 개인정보 openai',
    ],
    current_models_mentioned: ['OpenAI'],
    current_hardware_mentioned: ['Apple silicon', 'macOS 14.2'],
    leadAnswerBlock:
      '**Meetini는 Apple Silicon용 유료 Mac 앱으로, 회의 오디오를 캡처해 실시간 자막을 보여 주고 통화에 봇이 참여하지 않은 채 노트를 작성하며, 선택 사항으로 면접 답변 기능을 제공합니다.** 완전한 로컬 도구는 아니며, 개인정보 안내문에는 실시간 오디오를 OpenAI가 처리한다고 되어 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Meetini는 로컬 LLM 앱인가요?',
        answer:
          '자체 개인정보 안내문에 따르면 그렇지 않습니다. 제작사 이메일은 실시간 자막과 전사가 로컬에서 실행된다고 하지만, 안내문에는 마이크 오디오와 허용한 경우 시스템 오디오가 Meetini 서버를 거쳐 실시간 처리를 위해 OpenAI로 전송된다고 되어 있습니다.',
        bullets: [
          '자막과 전사본은 회의가 진행되는 동안 실시간으로 만들어집니다.',
          '노트와 회의 기록은 생성되어 계정에 동기화됩니다.',
          'Career 기능은 답변, 키워드, 후속 질문을 준비합니다.',
          'AI 모의 면접으로 지원하는 직무와 회사에 맞춰 연습할 수 있습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Meetini란?', anchor: 'what-is-meetini' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '로컬과 클라우드: 데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
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
            text: 'Meetini는 회의와 면접을 실시간 자막, 노트, AI가 준비한 답변으로 바꿔 주는, 소스가 공개되지 않은 유료 Mac 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '통화에 봇 없이 Mac에서 회의를 듣고, 이후 검토하거나 면접을 연습하도록 돕습니다. 무엇이 Mac에 남고 무엇이 클라우드로 가는지는 제작사 자신의 문서가 서로 다른 부분입니다.',
          },
        ],
        items: [
          '유지 관리: 버전 번호도 공개일도 게시되어 있지 않아 앱의 마지막 업데이트 시점을 확인할 수 없었으므로, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '비용: 유료 요금제 두 가지이며 무료 요금제나 체험판은 찾지 못했고, 결제는 미국 달러로 표시됩니다.',
          '플랫폼: macOS 14.2 이상의 Apple Silicon Mac이며, Windows, Linux, 모바일 버전은 표시되어 있지 않습니다.',
          '제작사: 캘리포니아의 Moonveil AI Inc.이며, 소스 코드는 공개되어 있지 않습니다.',
          '출시: 제작사 이메일에 따르면 정식 공개는 2026년 11월 9일로 예정되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 제작사의 웹사이트와 이메일을 2026년 11월 7일에 확인한 내용에 근거합니다. PromptQuorum은 앱을 설치하거나 측정하지 않았으므로 자막 정확도, 답변 품질, 지원 언어는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-meetini',
        title: 'Meetini란?',
        content: [
          '**Meetini는 진행 중인 회의와 면접을 따라가고, 전사본과 노트를 만들고, 나중에 검토하도록 돕습니다.** 이용 약관이 이렇게 설명하며, 홈페이지는 통화에 봇이 참여하지 않고 Mac에서 직접 대화를 캡처하며 Zoom, Google Meet, Teams, 대면 대화에서 작동한다고 덧붙입니다. 운영 주체는 Moonveil AI Inc.이며, 제작사 이메일은 Zhiyuan Zhang을 창업자로 밝히고 있으나 이는 확인한 페이지에서는 찾지 못한 내용입니다.',
          '제품은 두 부분으로 나뉩니다. 노트 부분은 자막, 전사본, 요약, 동기화되는 회의 기록을 다룹니다. 커리어 부분은 대화에서 나온 키워드, 면접 질문에 대한 자동 답변, 후속 질문, AI 모의 면접을 더하며, 약관에는 가격 페이지에 나오지 않는 채용 담당자용 Interviewer 모드도 설명되어 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Meetini는 로그인 후 받을 수 있는 Apple Silicon Mac용 DMG 다운로드이며, Windows, Linux, 모바일, 웹 버전은 표시되어 있지 않습니다.**',
        ],
        columns: ['항목', '받는 방법'],
        rows: [
          { '항목': 'macOS', '받는 방법': '[다운로드 페이지](https://meetini.net/app/downloads)(로그인 필요), Apple Silicon, macOS 14.2 이상' },
          { '항목': '요금제', '받는 방법': 'Notes 월 $20, Career 월 $95, 분기 결제 시 월 $15와 월 $80' },
          { '항목': '웹사이트', '받는 방법': '[meetini.net](https://meetini.net)' },
          { '항목': '개인정보 처리방침', '받는 방법': '[meetini.net/privacy](https://meetini.net/privacy)' },
          { '항목': '소스 코드', '받는 방법': '공개되지 않음' },
        ],
        note: '확인한 버전: 없음. 확인한 어느 페이지에도 버전 번호나 공개일이 나와 있지 않기 때문이며, 제작사 이메일에 따르면 정식 공개는 2026년 11월 9일로 예정되어 있습니다. 가격은 가격 페이지에 제작사가 표시한 미국 달러 금액이며 환산하지 않았습니다. 이용 약관은 다른 요금제 구조를 설명하므로 데이터 흐름 섹션을 참고하십시오. 무료 요금제나 체험판은 찾지 못했습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**이 단계는 다운로드 페이지와 이용 약관에서 추정한 것이며, PromptQuorum이 직접 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '계정 만들기와 다운로드',
            whyItMatters: '웹사이트에서 로그인한 뒤 다운로드 페이지에서 DMG를 받아 앱을 응용 프로그램 폴더로 옮깁니다.',
          },
          {
            title: '오디오 캡처 허용',
            whyItMatters: '약관에 따르면 Meetini는 마이크 오디오와, 허용한 경우 컴퓨터의 시스템 오디오를 캡처하며, 여기에는 다른 사람의 목소리가 포함될 수 있습니다.',
          },
          {
            title: '다른 참석자에게 알리기',
            whyItMatters: '약관은 회의에서 Meetini를 사용하기 전에 참석자에게 알리고, 법에서 요구하는 경우 동의를 받도록 요구합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 제작사의 웹사이트나 약관에서 가져온 것이며, 독립적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**실시간 자막과 전사본.** 자막은 회의가 진행되는 동안 표시되며 전사본은 나중에 다시 열어 볼 수 있습니다.',
          '**노트와 기록.** 노트는 결정 사항과 다음 단계를 다루며, 회의 기록은 계정에 동기화됩니다.',
          '**면접 준비.** 직무와 회사를 설정하고 AI 모의 면접에서 답변과 후속 질문을 연습합니다.',
          '**실시간 면접 지원.** Career 요금제에서는 앱이 새 질문을 감지해 답변을 준비할 수 있으며, 선택한 창이나 화면을 바탕으로 한 코딩 지원도 포함됩니다.',
        ],
        note: '가격 페이지는 키워드, 자동 답변, 후속 질문을 Career 기능으로 꼽습니다. 이 기능은 AI 분을 소비하며, 한도가 다 되면 멈추지만 자막과 노트는 계속 작동합니다.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬과 클라우드: 데이터 흐름과 개인정보',
        content: [
          '**제작사의 이메일과 개인정보 안내문은 서로 다른 오디오 경로를 설명합니다.** 이메일은 실시간 자막과 음성 인식이 로컬에서 실행되며 Career 기능은 클라우드 AI를 쓴다고 합니다. 2026년 10월 21일 시행된 개인정보 안내문은 마이크 오디오와 허용한 경우 시스템 오디오가 Meetini 서버를 거쳐 실시간 처리를 위해 OpenAI로 전송되며, 회의 전체 녹음은 클라우드 기록에 업로드되지 않는다고 밝힙니다. 기기에서 실행되는 음성 인식은 언급하지 않습니다.',
          '**텍스트는 기본적으로 클라우드에 보관됩니다.** 로그인하면 새 전사본과 노트가 계정에 동기화되어 삭제할 때까지 남으며, 삭제한 텍스트는 최대 30일간 복구 가능한 상태로 남을 수 있습니다. 안내문에 따르면 계정 설정에서 클라우드 동기화를 끌 수 있습니다. 안내문은 OpenAI, Cloudflare(동기화된 텍스트와 계정 기록), Clerk, Stripe, PostHog(제한된 사용 이벤트)를 처리 업체로 나열하며 개인정보를 판매하지 않는다고 밝힙니다. 안내문에 따르면 설정, 로컬에 보관한 노트, 선택 사항인 음성 샘플은 기기에 남으며, 저장된 화자의 인식은 기기에서 이루어집니다.',
          '계정 직접 삭제는 아직 제공되지 않으며, 안내문은 제작사에 이메일을 보내 요청하도록 안내합니다. 실시간 오디오는 OpenAI가 자체 보관 방침에 따라 처리하며, 안내문은 이를 자세히 밝히지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 제작사의 표명이지 감사 결과가 아니며 소스 코드도 공개되어 있지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 회의를 녹음하면 다른 사람의 목소리가 담길 수 있고 면접에서의 보조 사용에 관한 규칙은 고용주와 국가에 따라 다르므로, 본인에게 적용되는 동의 규정과 면접 규정을 확인하십시오. 이는 법률 자문이 아닙니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Apple Silicon Mac 사용자**로, 통화에 봇 없이 자막과 노트를 원하는 경우.',
          '**구직자**로, 특정 직무와 회사에 맞춘 모의 면접을 원하는 경우.',
          '**클라우드 처리에 거부감이 없는 분**으로, OpenAI가 실시간 오디오를 처리하는 것을 받아들이는 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**음성 인식이 실행되는 위치.** 이메일과 개인정보 안내문이 다르며 PromptQuorum은 트래픽을 관찰할 수 없었습니다. 확인한 어느 페이지에도 음성 모델이나 지원 언어는 나와 있지 않습니다.',
          '**요금제 구성.** 가격 페이지는 Career에 AI 600분과 무제한 노트를 기재하지만, 약관은 기본 요금제에 회의 300분, 별도의 Career와 Interviewer 추가 요금제, 다른 팩 가격을 설명합니다. 가격 페이지는 PayPal을, 약관은 Stripe를 언급합니다.',
          '**버전과 공개일.** 어느 쪽도 게시되어 있지 않고 다운로드 페이지는 로그인이 필요해 설치 파일을 확인하지 못했습니다.',
          '**품질과 적합성.** 자막 정확도, 답변 품질, 지연 시간, 배터리 사용량은 테스트하지 않았으며, 약관에는 면접 보조에 관한 명시적 규정이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격／라이선스', '주요 차이점'],
        rows: [
          { '앱': '[Anarlog](/ko/power-local-llm/anarlog-review)', '플랫폼': 'macOS, Windows, Linux', '가격／라이선스': '무료 요금제／MIT', '주요 차이점': '봇 없는 오픈소스 회의 노트 앱으로, Apple Silicon에서 기기 내 전사, 로컬 또는 클라우드 AI 선택 가능' },
          { '앱': '[Meetily](/ko/power-local-llm/meetily-review)', '플랫폼': 'Windows, macOS', '가격／라이선스': '무료 Community Edition／MIT', '주요 차이점': '자체 호스팅 회의록 도구로, 전사는 로컬, 요약은 Ollama 사용' },
          { '앱': '[Perfect Memory AI](/ko/power-local-llm/perfect-memory-review)', '플랫폼': 'Windows, macOS', '가격／라이선스': '무료 요금제／비공개 소스', '주요 차이점': '검색 가능한 화면·회의 기억 앱으로, Ollama, LM Studio, Jan 사용 시에만 AI가 로컬' },
        ],
        note: '리뷰가 있는 이들 도구에는 면접 연습 기능이 언급되어 있지 않습니다. 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Meetini는 오프라인에서 작동하나요?',
            a: '확인한 어느 출처도 그렇다고 하지 않으며, 개인정보 안내문은 실시간 오디오가 Meetini 서버를 거쳐 OpenAI로 간다고 설명하므로 실시간 처리에는 인터넷 연결이 필요한 것으로 보입니다.',
          },
          {
            q: '회의 데이터를 삭제할 수 있나요?',
            a: '클라우드에 있는 회의 텍스트는 직접 삭제할 수 있지만 최대 30일간 복구 가능한 상태로 남을 수 있습니다. 계정 자체를 삭제하려면 현재는 제작사에 이메일을 보내야 합니다.',
          },
          {
            q: '무료 체험판이 있나요?',
            a: '가격 페이지와 약관에서 찾지 못했으며, 두 문서는 유료 요금제와 분 단위 팩만 설명합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Meetini는 봇 없는 회의 노트와 면접 연습을 결합한 새로운 유료 Mac 선택지로, 리뷰가 있는 다른 회의 노트 앱에는 면접 연습 기능이 언급되어 있지 않습니다. 반면 제작사의 로컬 주장은 개인정보 안내문과 다르고, 가격 페이지와 약관이 서로 다르며, 버전이나 공개일이 게시되어 있지 않고, 무료 체험판이 없으며, 코드는 비공개입니다. OpenAI의 클라우드 처리를 받아들이고 결제 전에 요금 조건을 확인하는 Apple Silicon 사용자에게 적합합니다. 오디오가 기기에 머물러야 하는 분은 먼저 제작사에 확인을 요청하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Meetini 웹사이트](https://meetini.net) — 제품 설명과 기능. 2026년 11월 7일 확인.',
          '[요금](https://meetini.net/pricing) — 요금제, 분 단위 한도, 팩. 2026년 11월 7일 확인.',
          '[개인정보 안내문](https://meetini.net/privacy) — 오디오 경로, 처리 업체, 보관. 2026년 10월 21일 시행.',
          '[이용 약관](https://meetini.net/terms) — 요금제 구조, 동의, 허용되는 사용. 2026년 10월 12일 시행.',
          '[다운로드 페이지](https://meetini.net/app/downloads) — 플랫폼과 macOS 요구 사항. 2026년 11월 7일 확인.',
          '제작사의 2026년 11월 7일 안내 이메일 — 로컬 처리에 관한 설명, 회사, 창업자, 예정된 출시일(독립적으로 확인하지 않음).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Anarlog 리뷰](/ko/power-local-llm/anarlog-review) — 로컬 또는 클라우드 AI를 고를 수 있는 오픈소스 회의 노트 앱.',
          '[Meetily 리뷰](/ko/power-local-llm/meetily-review) — 로컬 요약을 지원하는 자체 호스팅 회의록 도구.',
          '[Perfect Memory AI 리뷰](/ko/power-local-llm/perfect-memory-review) — 검색 가능한 화면·회의 기억 앱.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 전사 도구의 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
