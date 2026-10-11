// Local AI Mail: On-Device Email Review: Brand-New Android Email Client with an On-Device AI
// Slug: local-ai-mail-review
// Companion to: agentic-inbox-review, aori-ai-personal-agent-review, atomic-bot-review,
// local-llm-email-and-calendar-automation, best-local-llm-apps-android-2026
// Sources: the Google Play listing and the developer's privacy policy, checked 2026-10-11 — no hands-on testing.
// Very early release (0+ downloads, v1.0.2, solo developer): the warning callout in the TL;DR is intentional, keep it.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-en.webp',
    title: 'Local AI Mail Review: Brand-New Android Email Client with an On-Device AI',
    seoTitle: 'Local AI Mail Review: On-Device AI Email (Android)',
    intro: 'Local AI Mail: On-Device Email is an Android email client published on Google Play by an individual developer, [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), that adds AI summaries, translation and reply drafts using a model running on the phone, and can optionally switch to Google Gemini with your own API key. It is a very early release at version 1.0.2. This review is based on the Google Play listing and the developer\'s privacy policy, checked on 11 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Local AI Mail review: a very early Android email client that summarizes, translates and drafts replies with on-device AI. 0+ downloads, untested.',
    twitterDescription: 'Local AI Mail review: very early Android email client with on-device AI summaries, translation and reply drafts. Paid app, source not published, not yet tested.',
    audience: 'Android users who are curious about an email client with on-device AI and want to know what the sources confirm, what the developer only claims, and how early the app is.',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Mail review',
    targetKeywords: [
      'local ai mail review',
      'local ai mail android',
      'on-device email app android',
      'offline ai email client',
      'email summarizer offline android',
      'local llm email app',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email is a very early Android email client that runs an AI model on the phone to summarize, translate and draft replies, with optional Gemini cloud AI on your own API key.** It is a paid app from one individual developer, and its Google Play listing shows 0+ downloads, so there is no user track record yet. The source code is not published and the model is not named.',
    quickAnswerTop: {
      en: {
        question: 'Is Local AI Mail free, and does its AI run offline?',
        answer: 'It is a paid app that was free to install during a launch offer when checked on 11 October 2026. Per the developer, the default AI runs on the phone without an internet connection; cloud AI is an optional switch that needs your own Gemini API key.',
        bullets: [
          'Summarizes emails, translates them between seven languages and drafts replies in several tones, on any IMAP/SMTP account.',
          'Android only, through [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai); no iPhone, desktop or web version is listed.',
          'The Data safety section declares no data collected or shared, and the privacy policy says the app contains no advertising or tracking SDKs.',
          'Version 1.0.2, last updated on 10 October 2026 (state of the listing on 11 October 2026).',
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
        label: 'What Is Local AI Mail?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Privacy and Cloud AI',
        anchor: 'privacy',
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
            text: 'Local AI Mail is a paid Android email client with no published source code, made by an individual developer, that uses an on-device AI model to summarize, translate and draft replies for IMAP/SMTP mailboxes.',
          },
          {
            type: 'plain-terms',
            text: 'You add your existing email account, and an AI on the phone shortens long messages, translates them and suggests replies, so the text stays on the device unless you switch to cloud AI yourself.',
          },
        ],
        items: [
          'Publisher: listed as コーヒー坊主 (CoffeeBozu), an individual developer in Yokohama, Japan; no company, product website or source repository was found.',
          'AI: an on-device model with GPU (Vulkan) acceleration, plus an optional Gemini switch; the model and inference engine are not named.',
          'Mail: IMAP and SMTP for Gmail, Outlook, Yahoo and custom-domain servers, with threading, sender grouping and a settings backup.',
          'Permissions: the privacy policy names microphone access for voice prompts and contacts access for address autocompletion.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Very early release: there are no user reviews, no long-term stability record and no security track record yet. Everything here is the developer\'s own description, and PromptQuorum has not tested the app. Treat it as an interesting idea to watch, not a proven email client, and think twice before connecting a primary mailbox.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'What Is Local AI Mail?',
        content: [
          '**Local AI Mail: On-Device Email is an Android email client with built-in AI assistance that, by default, runs on the phone itself.** According to its [Google Play listing](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), it handles standard IMAP and SMTP accounts and adds summaries, translation, reply drafting, calendar-event extraction and voice-dictated prompts.',
          'The app has three names: the Play title is "Local AI Mail: On-Device Email", the Japanese store lists it as "PrivaMail: ローカルAIメール", and the Japanese text of its privacy policy calls it "LocalMail". All three refer to the same package, jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The app is available only on Android through Google Play; no iPhone, desktop or web version is listed.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            Platform: 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            Platform: 'Price',
            'Where to get it': '$12.99 (US storefront); 100% off launch offer',
          },
          {
            Platform: 'Developer blog',
            'Where to get it': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            Platform: 'Privacy policy',
            'Where to get it': '[Privacy policy (JA/EN)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            Platform: 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'No dedicated product website was found; the Play listing links only the privacy policy on the developer\'s personal blog. Version as verified on 11 October 2026: 1.0.2, last updated on 10 October 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or the developer\'s privacy policy; none has been independently tested.**',
        ],
        items: [
          '**Summaries and action items.** One-tap summaries with key takeaways and bullet points, plus extraction of action items from long emails.',
          '**Translation.** Incoming messages can be translated between English, Japanese, Spanish, French, German, Chinese and Korean.',
          '**Reply drafting.** Replies are written in the sender\'s language in three tones: polite and standard, accept and agree, or polite decline.',
          '**Calendar and voice.** Dates, times and agendas are detected and can be added to the calendar in one tap; prompts for the assistant can be dictated by voice.',
          '**Mail client.** IMAP and SMTP accounts such as Gmail, Outlook, Yahoo and custom domains, pull-to-refresh, threading with sender grouping, and backup and restore of account settings.',
        ],
        note: 'The listing says the on-device AI uses GPU acceleration (Vulkan), but it does not name the model or inference engine, so model size, quality and device requirements could not be confirmed.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Cloud AI',
        content: [
          '**Google Play\'s Data safety section declares "No data collected" and "No data shared with third parties".** The developer\'s privacy policy, dated 27 September 2026, adds that account credentials are kept in encrypted local storage and sent only to the mail server you configure, that nothing goes to a developer server, and that the app contains no third-party advertising or tracking SDKs.',
          '**The on-device AI makes no network requests, according to the policy; the cloud option is the exception.** If you enter a Gemini API key and run an AI action, the email text is sent from the phone directly to Google\'s Gemini API over HTTPS, where Google\'s terms apply. The policy also names microphone access for voice prompts, handled by Android\'s system speech recognition, and contacts access for address autocompletion.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. PromptQuorum has not inspected the app\'s network traffic. The policy does not say whether the Android speech service used for voice prompts processes audio on the device or on Google\'s servers; that depends on the phone.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Source code and license.** No public repository or license text was found, so the privacy claims cannot be checked against code.',
          '**Hands-on quality and speed.** PromptQuorum did not run the app, so summary quality, translation accuracy, speed and battery use are unknown; the model, engine and device requirements are not stated.',
          '**Long emails.** The v1.0.2 notes describe a one-tap switch to cloud AI for long emails, which suggests the on-device model has a length limit; the sources do not say what it is.',
          '**Sign-in for Gmail and Outlook.** The policy describes email address and password authentication over IMAP/SMTP; how accounts that require app passwords or OAuth are handled is not described.',
          '**Independent feedback.** No third-party reviews, ratings or discussion of the app were found.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Agentic Inbox](/power-local-llm/agentic-inbox-review)',
            Platforms: 'Web (self-hosted)',
            'Price / license': 'Free / Apache-2.0',
            'Key difference': 'Open-source email client with an AI agent in your own Cloudflare account',
          },
          {
            App: '[Aori](/power-local-llm/aori-ai-personal-agent-review)',
            Platforms: 'Windows, macOS, Linux, Android',
            'Price / license': 'Free (beta)',
            'Key difference': 'Local-first personal agent using Ollama; not an email client',
          },
          {
            App: '[Atomic Bot](/power-local-llm/atomic-bot-review)',
            Platforms: 'Windows, macOS, Linux, iOS, Android',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'AI coworker on the OpenClaw agent stack, local or cloud',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does the launch offer end?',
            a: 'The Play page listed the 100% off offer as ending on 18 October 2026 at 1:59 AM (time zone not shown); after that the regular price applies, and prices and offers can differ by country.',
          },
          {
            q: 'Does it work offline?',
            a: 'Per the developer, summaries, translation and drafting run on the device without an internet connection; syncing mail and the optional Gemini cloud AI need a network. The sources do not say whether a model is downloaded on first launch.',
          },
          {
            q: 'Is it affiliated with Google, Microsoft or Yahoo?',
            a: 'No. The listing\'s disclaimer states that the app is independently developed and not affiliated with, endorsed by or sponsored by Google, Microsoft or Yahoo; Gmail, Gemini and Outlook are named only as compatible services.',
          },
          {
            q: 'How does it compare with Agentic Inbox?',
            a: 'Agentic Inbox is an open-source web email client you host in your own Cloudflare account, so its AI runs in your cloud account, whereas Local AI Mail is an Android app with unpublished source code whose default AI runs on the phone.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Local AI Mail: On-Device Email is an appealing idea: an Android email client whose summaries, translations and reply drafts run on the phone, with cloud AI only when you add your own key. It is also an unproven product: version 1.0.2, one individual developer, no published source, and a model and engine that are not named. It suits curious Android users who are happy to experiment with a secondary mailbox; anyone who needs a proven, auditable email setup should compare [Agentic Inbox](/power-local-llm/agentic-inbox-review) first and revisit this app once it has an install base and independent feedback.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Mail: On-Device Email on Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — description, release notes, Data safety section, price and offer, checked 11 October 2026.',
          '[Privacy policy (Japanese and English)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — permissions, data flow and cloud AI statements, dated 27 September 2026.',
          '[コーヒー坊主 developer blog](https://co-hi-boy.blogspot.com/) — the developer\'s personal blog, checked 11 October 2026; no product website was found.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Agentic Inbox Review](/power-local-llm/agentic-inbox-review) — an open-source, self-hosted email client with an AI agent.',
          '[Aori Review](/power-local-llm/aori-ai-personal-agent-review) — a local-first personal agent that also runs on Android.',
          '[Local LLM Email and Calendar Automation](/power-local-llm/local-llm-email-and-calendar-automation) — building email and calendar workflows with local models.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI Mail Review: Brand-New Android Email Client with an On-Device AI',
      description: 'Local AI Mail review: a very early Android email client that summarizes, translates and drafts replies with an on-device AI, with optional Gemini cloud AI. Privacy declarations, price, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/local-ai-mail-review',
      inLanguage: 'en',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
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
        audienceType: 'Android users evaluating an email client with on-device AI',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Local AI Mail',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Email client',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/local-ai-mail-review',
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
          name: 'Local AI Mail Review',
          item: 'https://promptquorum.com/power-local-llm/local-ai-mail-review',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-de.webp',
    title: 'Local AI Mail im Test: brandneue Android-E-Mail-App mit KI auf dem Gerät',
    seoTitle: 'Local AI Mail im Test: E-Mail-App mit KI auf dem Gerät',
    intro: 'Local AI Mail: On-Device Email ist eine Android-E-Mail-App, die bei Google Play von einem Einzelentwickler, [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), veröffentlicht wird. Sie fasst Nachrichten zusammen, übersetzt sie und entwirft Antworten mit einem KI-Modell auf dem Smartphone und kann optional mit eigenem API-Schlüssel auf Google Gemini umschalten. Es ist eine sehr frühe Version (1.0.2). Dieser Test beruht auf dem Google-Play-Eintrag und der Datenschutzerklärung des Entwicklers, geprüft am 11. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Local AI Mail im Test: sehr frühe Android-E-Mail-App mit KI auf dem Gerät für Zusammenfassungen, Übersetzung und Antworten. 0+ Downloads, ungetestet.',
    twitterDescription: 'Local AI Mail im Test: sehr frühe Android-E-Mail-App mit KI-Zusammenfassungen, Übersetzung und Antwortentwürfen auf dem Gerät. Kostenpflichtig, Quellcode nicht veröffentlicht, noch nicht getestet.',
    audience: 'Android-Nutzer, die sich für eine E-Mail-App mit KI auf dem Gerät interessieren und wissen möchten, was die Quellen bestätigen, was der Entwickler nur behauptet und wie früh das Projekt ist.',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Mail Test',
    targetKeywords: [
      'local ai mail test',
      'local ai mail android',
      'on-device e-mail app android',
      'offline ki e-mail client',
      'e-mails offline zusammenfassen android',
      'local llm e-mail app',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email ist eine sehr frühe Android-E-Mail-App, die ein KI-Modell auf dem Smartphone ausführt, um Nachrichten zusammenzufassen, zu übersetzen und Antworten zu entwerfen; optional gibt es Gemini-Cloud-KI mit eigenem API-Schlüssel.** Sie ist kostenpflichtig und stammt von einem einzelnen Entwickler; der Google-Play-Eintrag zeigt 0+ Downloads, es gibt also noch keine Erfahrungswerte von Nutzern. Der Quellcode ist nicht veröffentlicht, das Modell wird nicht genannt.',
    quickAnswerTop: {
      de: {
        question: 'Ist Local AI Mail kostenlos, und läuft die KI offline?',
        answer: 'Die App ist kostenpflichtig, ließ sich bei der Prüfung am 11. Oktober 2026 aber im Rahmen eines Einführungsangebots kostenlos installieren. Laut Entwickler läuft die Standard-KI ohne Internetverbindung auf dem Smartphone; die Cloud-KI ist ein optionaler Schalter und braucht einen eigenen Gemini-API-Schlüssel.',
        bullets: [
          'Fasst E-Mails zusammen, übersetzt sie zwischen sieben Sprachen und entwirft Antworten in mehreren Tonlagen, für jedes IMAP/SMTP-Konto.',
          'Nur für Android über [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai); eine Version für iPhone, Desktop oder Web ist nicht aufgeführt.',
          'Der Abschnitt „Datensicherheit“ erklärt, dass keine Daten erhoben oder weitergegeben werden, und die Datenschutzerklärung nennt keine Werbe- oder Tracking-SDKs.',
          'Version 1.0.2, zuletzt am 10. Oktober 2026 aktualisiert (Stand des Eintrags am 11. Oktober 2026).',
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
        label: 'Was ist Local AI Mail?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenschutz und Cloud-KI',
        anchor: 'privacy',
      },
      {
        label: 'Was sich nicht überprüfen ließ',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Konkurrenten und Alternativen',
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
            text: 'Local AI Mail ist eine kostenpflichtige Android-E-Mail-App eines Einzelentwicklers ohne veröffentlichten Quellcode, die mit einem KI-Modell auf dem Gerät Nachrichten für IMAP/SMTP-Postfächer zusammenfasst, übersetzt und beantwortet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie fügen Ihr bestehendes E-Mail-Konto hinzu, und eine KI auf dem Smartphone kürzt lange Nachrichten, übersetzt sie und schlägt Antworten vor, sodass der Text auf dem Gerät bleibt, solange Sie nicht selbst auf Cloud-KI umschalten.',
          },
        ],
        items: [
          'Herausgeber: bei Google Play als コーヒー坊主 (CoffeeBozu) geführt, ein Einzelentwickler in Yokohama, Japan; ein Unternehmen, eine Produktwebsite oder ein Quellcode-Repository wurde nicht gefunden.',
          'KI: ein Modell auf dem Gerät mit GPU-Beschleunigung (Vulkan) und ein optionaler Gemini-Schalter; Modell und Inferenz-Engine werden nicht genannt.',
          'Mail: IMAP und SMTP für Gmail, Outlook, Yahoo und Server eigener Domains, mit Konversationsansicht, Gruppierung nach Absendern und Sicherung der Einstellungen.',
          'Berechtigungen: Die Datenschutzerklärung nennt Mikrofonzugriff für Spracheingaben und Kontaktzugriff für die Adressvervollständigung.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sehr frühe Version: Es gibt noch keine Nutzerbewertungen, keine Langzeit-Stabilitätserfahrung und keine Sicherheitsbilanz. Alle Angaben stammen aus der Beschreibung des Entwicklers, und PromptQuorum hat die App nicht getestet. Betrachten Sie sie als interessante Idee zum Beobachten, nicht als bewährten E-Mail-Client, und überlegen Sie es sich gut, bevor Sie ein Hauptpostfach verbinden.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'Was ist Local AI Mail?',
        content: [
          '**Local AI Mail: On-Device Email ist eine Android-E-Mail-App mit integrierter KI-Unterstützung, die standardmäßig auf dem Smartphone selbst läuft.** Laut [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) verwaltet sie Standard-IMAP- und SMTP-Konten und ergänzt Zusammenfassungen, Übersetzung, Antwortentwürfe, das Erkennen von Terminen und per Sprache diktierte Anweisungen.',
          'Die App trägt drei Namen: Der Play-Titel lautet „Local AI Mail: On-Device Email“, im japanischen Store heißt sie „PrivaMail: ローカルAIメール“, und im japanischen Text der Datenschutzerklärung „LocalMail“. Alle drei gehören zum selben Paket, jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Die App gibt es nur für Android über Google Play; eine Version für iPhone, Desktop oder Web ist nicht aufgeführt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Android',
            Bezugsquelle: '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            Plattform: 'Preis',
            Bezugsquelle: '12,99 € (deutscher Store); Einführungsangebot −100 %',
          },
          {
            Plattform: 'Blog des Entwicklers',
            Bezugsquelle: '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung (JA/EN)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Eine eigene Produktwebsite wurde nicht gefunden; der Play-Eintrag verlinkt nur die Datenschutzerklärung im persönlichen Blog des Entwicklers. Geprüfte Version am 11. Oktober 2026: 1.0.2, zuletzt am 10. Oktober 2026 aktualisiert.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Google-Play-Beschreibung oder der Datenschutzerklärung des Entwicklers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Zusammenfassungen und Aufgaben.** Zusammenfassungen mit einem Tipp samt Kernaussagen und Stichpunkten sowie das Herausziehen von Aufgaben aus langen E-Mails.',
          '**Übersetzung.** Eingehende Nachrichten lassen sich zwischen Englisch, Japanisch, Spanisch, Französisch, Deutsch, Chinesisch und Koreanisch übersetzen.',
          '**Antwortentwürfe.** Antworten werden in der Sprache des Absenders in drei Tonlagen verfasst: höflich und neutral, zustimmend oder höfliche Absage.',
          '**Kalender und Sprache.** Daten, Uhrzeiten und Tagesordnungen werden erkannt und lassen sich mit einem Tipp in den Kalender übernehmen; Anweisungen an den Assistenten können per Sprache diktiert werden.',
          '**E-Mail-Client.** IMAP- und SMTP-Konten wie Gmail, Outlook, Yahoo und eigene Domains, Aktualisieren per Wischgeste, Konversationsansicht mit Gruppierung nach Absendern sowie Sicherung und Wiederherstellung der Kontoeinstellungen.',
        ],
        note: 'Laut Eintrag nutzt die KI auf dem Gerät GPU-Beschleunigung (Vulkan), nennt aber weder Modell noch Inferenz-Engine; Modellgröße, Qualität und Geräteanforderungen ließen sich daher nicht bestätigen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Cloud-KI',
        content: [
          '**Der Abschnitt „Datensicherheit“ bei Google Play erklärt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“.** Die Datenschutzerklärung des Entwicklers vom 27. September 2026 ergänzt, dass Zugangsdaten verschlüsselt lokal gespeichert und nur an den von Ihnen eingerichteten Mailserver gesendet werden, dass nichts an einen Server des Entwicklers geht und dass die App keine Werbe- oder Tracking-SDKs von Drittanbietern enthält.',
          '**Die KI auf dem Gerät stellt laut Erklärung keine Netzwerkanfragen; die Cloud-Option ist die Ausnahme.** Wenn Sie einen Gemini-API-Schlüssel eintragen und eine KI-Aktion ausführen, wird der E-Mail-Text direkt vom Smartphone per HTTPS an die Gemini-API von Google gesendet, dort gelten die Bedingungen von Google. Außerdem nennt die Erklärung Mikrofonzugriff für Spracheingaben über die Android-Spracherkennung sowie Kontaktzugriff für die Adressvervollständigung.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Entwicklers, keine Auditergebnisse, und der Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht geprüft. Die Erklärung sagt nicht, ob der für Spracheingaben genutzte Android-Spracherkennungsdienst Audio auf dem Gerät oder auf Servern von Google verarbeitet; das hängt vom Smartphone ab.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was sich nicht überprüfen ließ',
        items: [
          '**Quellcode und Lizenz.** Es wurden weder ein öffentliches Repository noch ein Lizenztext gefunden, die Datenschutzangaben lassen sich also nicht am Code prüfen.',
          '**Qualität und Geschwindigkeit in der Praxis.** PromptQuorum hat die App nicht ausgeführt; Qualität der Zusammenfassungen, Übersetzungsgenauigkeit, Tempo und Akkuverbrauch sind unbekannt, und Modell, Engine und Geräteanforderungen werden nicht genannt.',
          '**Lange E-Mails.** Die Hinweise zu v1.0.2 beschreiben einen Ein-Tipp-Wechsel zur Cloud-KI bei langen E-Mails, was auf eine Längengrenze des Modells auf dem Gerät hindeutet; die Quellen nennen sie nicht.',
          '**Anmeldung bei Gmail und Outlook.** Die Erklärung beschreibt die Anmeldung mit E-Mail-Adresse und Passwort über IMAP/SMTP; wie Konten mit App-Passwörtern oder OAuth behandelt werden, ist nicht beschrieben.',
          '**Unabhängige Rückmeldungen.** Es wurden keine Bewertungen, Testberichte oder Diskussionen Dritter zur App gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            App: '[Agentic Inbox](/de/power-local-llm/agentic-inbox-review)',
            Plattformen: 'Web (selbst gehostet)',
            'Preis / Lizenz': 'Kostenlos / Apache-2.0',
            'Wesentlicher Unterschied': 'Quelloffener E-Mail-Client mit KI-Agent im eigenen Cloudflare-Konto',
          },
          {
            App: '[Aori](/de/power-local-llm/aori-ai-personal-agent-review)',
            Plattformen: 'Windows, macOS, Linux, Android',
            'Preis / Lizenz': 'Kostenlos (Beta)',
            'Wesentlicher Unterschied': 'Persönlicher Agent mit Local-first-Ansatz über Ollama; kein E-Mail-Client',
          },
          {
            App: '[Atomic Bot](/de/power-local-llm/atomic-bot-review)',
            Plattformen: 'Windows, macOS, Linux, iOS, Android',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wesentlicher Unterschied': 'KI-Kollege auf dem OpenClaw-Agenten-Stack, lokal oder in der Cloud',
          },
        ],
        note: 'Angaben zu Konkurrenten ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Endet das Einführungsangebot?',
            a: 'Die Play-Seite nannte das Angebot mit 100 % Rabatt bis zum 18. Oktober 2026, 1:59 Uhr (Zeitzone nicht angegeben); danach gilt der reguläre Preis, und Preise und Angebote können je nach Land abweichen.',
          },
          {
            q: 'Funktioniert sie offline?',
            a: 'Laut Entwickler laufen Zusammenfassung, Übersetzung und Entwürfe ohne Internetverbindung auf dem Gerät; das Abrufen von E-Mails und die optionale Gemini-Cloud-KI brauchen ein Netzwerk. Ob beim ersten Start ein Modell heruntergeladen wird, sagen die Quellen nicht.',
          },
          {
            q: 'Gehört sie zu Google, Microsoft oder Yahoo?',
            a: 'Nein. Der Haftungshinweis im Eintrag erklärt, dass die App unabhängig entwickelt wird und nicht mit Google, Microsoft oder Yahoo verbunden ist und von ihnen weder unterstützt noch gesponsert wird; Gmail, Gemini und Outlook werden nur als kompatible Dienste genannt.',
          },
          {
            q: 'Wie steht sie im Vergleich zu Agentic Inbox da?',
            a: 'Agentic Inbox ist ein quelloffener Web-E-Mail-Client, den Sie im eigenen Cloudflare-Konto betreiben, die KI läuft dort also in Ihrem Cloud-Konto; Local AI Mail ist dagegen eine Android-App ohne veröffentlichten Quellcode, deren Standard-KI auf dem Smartphone läuft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Local AI Mail: On-Device Email ist eine reizvolle Idee: eine Android-E-Mail-App, deren Zusammenfassungen, Übersetzungen und Antwortentwürfe auf dem Smartphone laufen, mit Cloud-KI nur, wenn Sie einen eigenen Schlüssel eintragen. Zugleich ist sie ein unerprobtes Produkt: Version 1.0.2, ein einzelner Entwickler, kein veröffentlichter Quellcode und ein nicht genanntes Modell samt Engine. Sie eignet sich für neugierige Android-Nutzer, die gern mit einem Zweitpostfach experimentieren; wer ein erprobtes, nachprüfbares E-Mail-Setup braucht, sollte zuerst [Agentic Inbox](/de/power-local-llm/agentic-inbox-review) vergleichen und diese App erneut ansehen, sobald es eine Nutzerbasis und unabhängige Rückmeldungen gibt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Local AI Mail: On-Device Email bei Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — Beschreibung, Versionshinweise, Abschnitt „Datensicherheit“, Preis und Angebot, geprüft am 11. Oktober 2026.',
          '[Datenschutzerklärung (Japanisch und Englisch)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — Berechtigungen, Datenfluss und Aussagen zur Cloud-KI, datiert 27. September 2026.',
          '[Blog von コーヒー坊主](https://co-hi-boy.blogspot.com/) — persönlicher Blog des Entwicklers, geprüft am 11. Oktober 2026; eine Produktwebsite wurde nicht gefunden.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Agentic Inbox im Test](/de/power-local-llm/agentic-inbox-review) — ein quelloffener, selbst gehosteter E-Mail-Client mit KI-Agent.',
          '[Aori im Test](/de/power-local-llm/aori-ai-personal-agent-review) — ein persönlicher Agent mit Local-first-Ansatz, der auch unter Android läuft.',
          '[E-Mail- und Kalenderautomatisierung mit lokalen LLMs](/de/power-local-llm/local-llm-email-and-calendar-automation) — E-Mail- und Kalender-Workflows mit lokalen Modellen aufbauen.',
          '[Die besten lokalen LLM-Apps für Android](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-es.webp',
    title: 'Análisis de Local AI Mail: un cliente de correo para Android recién salido con IA en el dispositivo',
    seoTitle: 'Local AI Mail: análisis de correo con IA en el dispositivo',
    intro: 'Local AI Mail: On-Device Email es un cliente de correo para Android publicado en Google Play por un desarrollador individual, [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai). Resume, traduce y redacta respuestas con un modelo de IA que se ejecuta en el teléfono y, como opción, puede cambiar a Google Gemini con tu propia clave de API. Es una versión muy temprana (1.0.2). Este análisis se basa en la ficha de Google Play y en la política de privacidad del desarrollador, consultadas el 11 de octubre de 2026; PromptQuorum no ha probado la aplicación.',
    metaDescription: 'Análisis de Local AI Mail: cliente de correo para Android muy temprano que resume, traduce y redacta respuestas con IA en el dispositivo. 0+ descargas.',
    twitterDescription: 'Análisis de Local AI Mail: cliente de correo para Android muy temprano con resúmenes, traducción y borradores de respuesta con IA en el dispositivo. De pago, código fuente no publicado, sin probar.',
    audience: 'Usuarios de Android curiosos por un cliente de correo con IA en el dispositivo que quieren saber qué confirman las fuentes, qué solo afirma el desarrollador y lo temprana que es la aplicación.',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Local AI Mail',
    targetKeywords: [
      'análisis local ai mail',
      'local ai mail android',
      'app de correo con ia en el dispositivo android',
      'cliente de correo con ia sin conexión',
      'resumir correos sin conexión android',
      'app de correo con llm local',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email es un cliente de correo para Android muy temprano que ejecuta un modelo de IA en el teléfono para resumir, traducir y redactar respuestas, con IA en la nube de Gemini opcional con tu propia clave de API.** Es una aplicación de pago de un único desarrollador individual y su ficha de Google Play muestra 0+ descargas, así que todavía no hay historial de usuarios. El código fuente no está publicado y el modelo no se nombra.',
    quickAnswerTop: {
      es: {
        question: '¿Local AI Mail es gratis y su IA funciona sin conexión?',
        answer: 'Es una aplicación de pago que se podía instalar gratis durante una oferta de lanzamiento al comprobarlo el 11 de octubre de 2026. Según el desarrollador, la IA predeterminada se ejecuta en el teléfono sin conexión a internet; la IA en la nube es un interruptor opcional que requiere tu propia clave de API de Gemini.',
        bullets: [
          'Resume correos, los traduce entre siete idiomas y redacta respuestas en varios tonos, para cualquier cuenta IMAP/SMTP.',
          'Solo Android, a través de [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai); no figura ninguna versión para iPhone, escritorio o web.',
          'La sección «Seguridad de los datos» declara que no se recopilan ni comparten datos, y la política de privacidad dice que la aplicación no contiene SDK de publicidad ni de seguimiento.',
          'Versión 1.0.2, actualizada el 10 de octubre de 2026 (estado de la ficha el 11 de octubre de 2026).',
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
        label: '¿Qué es Local AI Mail?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'Dónde conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidad e IA en la nube',
        anchor: 'privacy',
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
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Mail es un cliente de correo para Android de pago y sin código fuente publicado, de un desarrollador individual, que usa un modelo de IA en el dispositivo para resumir, traducir y redactar respuestas en buzones IMAP/SMTP.',
          },
          {
            type: 'plain-terms',
            text: 'Añades tu cuenta de correo existente y una IA en el teléfono acorta los mensajes largos, los traduce y sugiere respuestas, de modo que el texto permanece en el dispositivo salvo que cambies tú mismo a la IA en la nube.',
          },
        ],
        items: [
          'Editor: figura como コーヒー坊主 (CoffeeBozu), un desarrollador individual de Yokohama, Japón; no se encontró empresa, sitio web del producto ni repositorio de código fuente.',
          'IA: un modelo en el dispositivo con aceleración por GPU (Vulkan) y un interruptor opcional de Gemini; el modelo y el motor de inferencia no se nombran.',
          'Correo: IMAP y SMTP para Gmail, Outlook, Yahoo y servidores de dominios propios, con conversaciones, agrupación por remitente y copia de seguridad de los ajustes.',
          'Permisos: la política de privacidad menciona el acceso al micrófono para las indicaciones por voz y a los contactos para autocompletar direcciones.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Versión muy temprana: todavía no hay opiniones de usuarios, ni historial de estabilidad a largo plazo, ni historial de seguridad. Todo lo que sigue es la descripción del propio desarrollador y PromptQuorum no ha probado la aplicación. Considérala una idea interesante que seguir, no un cliente de correo probado, y piénsalo bien antes de conectar un buzón principal.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: '¿Qué es Local AI Mail?',
        content: [
          '**Local AI Mail: On-Device Email es un cliente de correo para Android con asistencia de IA integrada que, por defecto, se ejecuta en el propio teléfono.** Según su [ficha de Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), gestiona cuentas IMAP y SMTP estándar y añade resúmenes, traducción, redacción de respuestas, extracción de eventos del calendario e indicaciones dictadas por voz.',
          'La aplicación tiene tres nombres: el título en Play es «Local AI Mail: On-Device Email», la tienda japonesa la muestra como «PrivaMail: ローカルAIメール» y el texto japonés de su política de privacidad la llama «LocalMail». Los tres se refieren al mismo paquete, jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**La aplicación solo está disponible en Android a través de Google Play; no figura ninguna versión para iPhone, escritorio o web.**',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Android',
            'Dónde conseguirla': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            Plataforma: 'Precio',
            'Dónde conseguirla': '12,99 € (tienda española); oferta de lanzamiento −100 %',
          },
          {
            Plataforma: 'Blog del desarrollador',
            'Dónde conseguirla': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad (JA/EN)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No publicado',
          },
        ],
        note: 'No se encontró un sitio web propio del producto; la ficha de Play solo enlaza la política de privacidad alojada en el blog personal del desarrollador. Versión verificada el 11 de octubre de 2026: 1.0.2, actualizada el 10 de octubre de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede de la descripción de Google Play o de la política de privacidad del desarrollador; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Resúmenes y tareas.** Resúmenes con un toque, con puntos clave y viñetas, y extracción de tareas pendientes de correos largos.',
          '**Traducción.** Los mensajes recibidos se pueden traducir entre inglés, japonés, español, francés, alemán, chino y coreano.',
          '**Redacción de respuestas.** Las respuestas se escriben en el idioma del remitente con tres tonos: cortés y estándar, aceptar y estar de acuerdo, o rechazo cortés.',
          '**Calendario y voz.** Se detectan fechas, horas y órdenes del día y pueden añadirse al calendario con un toque; las indicaciones al asistente pueden dictarse por voz.',
          '**Cliente de correo.** Cuentas IMAP y SMTP como Gmail, Outlook, Yahoo y dominios propios, deslizar para actualizar, conversaciones con agrupación por remitente, y copia de seguridad y restauración de los ajustes de la cuenta.',
        ],
        note: 'La ficha indica que la IA en el dispositivo usa aceleración por GPU (Vulkan), pero no nombra el modelo ni el motor de inferencia, así que no se pudo confirmar el tamaño del modelo, su calidad ni los requisitos del dispositivo.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad e IA en la nube',
        content: [
          '**La sección «Seguridad de los datos» de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros».** La política de privacidad del desarrollador, fechada el 27 de septiembre de 2026, añade que las credenciales de la cuenta se guardan en un almacenamiento local cifrado y solo se envían al servidor de correo que configures, que nada va a un servidor del desarrollador y que la aplicación no contiene SDK de publicidad ni de seguimiento de terceros.',
          '**Según la política, la IA en el dispositivo no hace peticiones de red; la opción en la nube es la excepción.** Si introduces una clave de API de Gemini y ejecutas una acción de IA, el texto del correo se envía directamente desde el teléfono a la API de Gemini de Google por HTTPS, donde se aplican las condiciones de Google. La política también menciona el acceso al micrófono para las indicaciones por voz, gestionado por el reconocimiento de voz del sistema Android, y el acceso a contactos para autocompletar direcciones.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. PromptQuorum no ha inspeccionado el tráfico de red de la aplicación. La política no aclara si el servicio de voz de Android usado para las indicaciones por voz procesa el audio en el dispositivo o en servidores de Google; depende del teléfono.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Código fuente y licencia.** No se encontró ningún repositorio público ni texto de licencia, así que las afirmaciones de privacidad no pueden contrastarse con el código.',
          '**Calidad y velocidad en uso real.** PromptQuorum no ejecutó la aplicación; se desconocen la calidad de los resúmenes, la precisión de las traducciones, la velocidad y el consumo de batería, y no se indican el modelo, el motor ni los requisitos del dispositivo.',
          '**Correos largos.** Las notas de la v1.0.2 describen un cambio con un toque a la IA en la nube para correos largos, lo que sugiere que el modelo del dispositivo tiene un límite de longitud; las fuentes no dicen cuál.',
          '**Inicio de sesión en Gmail y Outlook.** La política describe la autenticación con dirección y contraseña por IMAP/SMTP; no se describe cómo se gestionan las cuentas que exigen contraseñas de aplicación u OAuth.',
          '**Opiniones independientes.** No se encontraron reseñas, valoraciones ni debates de terceros sobre la aplicación.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['Aplicación', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'Aplicación': '[Agentic Inbox](/es/power-local-llm/agentic-inbox-review)',
            Plataformas: 'Web (autoalojado)',
            'Precio / licencia': 'Gratis / Apache-2.0',
            'Diferencia clave': 'Cliente de correo de código abierto con agente de IA en tu cuenta de Cloudflare',
          },
          {
            'Aplicación': '[Aori](/es/power-local-llm/aori-ai-personal-agent-review)',
            Plataformas: 'Windows, macOS, Linux, Android',
            'Precio / licencia': 'Gratis (beta)',
            'Diferencia clave': 'Agente personal local primero con Ollama; no es un cliente de correo',
          },
          {
            'Aplicación': '[Atomic Bot](/es/power-local-llm/atomic-bot-review)',
            Plataformas: 'Windows, macOS, Linux, iOS, Android',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Compañero de IA sobre la pila de agentes OpenClaw, local o en la nube',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada aplicación.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Termina la oferta de lanzamiento?',
            a: 'La página de Play indicaba que la oferta del 100 % de descuento terminaba el 18 de octubre de 2026 a la 1:59 (zona horaria no indicada); después se aplica el precio normal, y los precios y ofertas pueden variar según el país.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Según el desarrollador, los resúmenes, la traducción y los borradores se ejecutan en el dispositivo sin conexión a internet; sincronizar el correo y la IA en la nube opcional de Gemini requieren red. Las fuentes no dicen si se descarga un modelo en el primer arranque.',
          },
          {
            q: '¿Está afiliada a Google, Microsoft o Yahoo?',
            a: 'No. El aviso de la ficha indica que la aplicación es independiente y no está afiliada, respaldada ni patrocinada por Google, Microsoft o Yahoo; Gmail, Gemini y Outlook solo se nombran como servicios compatibles.',
          },
          {
            q: '¿Cómo se compara con Agentic Inbox?',
            a: 'Agentic Inbox es un cliente de correo web de código abierto que alojas en tu propia cuenta de Cloudflare, por lo que su IA se ejecuta en tu cuenta en la nube, mientras que Local AI Mail es una aplicación Android sin código fuente publicado cuya IA predeterminada se ejecuta en el teléfono.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Local AI Mail: On-Device Email es una idea atractiva: un cliente de correo para Android cuyos resúmenes, traducciones y borradores de respuesta se ejecutan en el teléfono, con IA en la nube solo cuando añades tu propia clave. También es un producto sin probar: versión 1.0.2, un único desarrollador individual, sin código fuente publicado y con un modelo y un motor que no se nombran. Encaja con usuarios de Android curiosos que quieran experimentar con un buzón secundario; quien necesite una configuración de correo probada y auditable debería comparar primero [Agentic Inbox](/es/power-local-llm/agentic-inbox-review) y volver a mirar esta aplicación cuando tenga una base de usuarios y opiniones independientes.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Local AI Mail: On-Device Email en Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — descripción, notas de la versión, sección «Seguridad de los datos», precio y oferta, consultados el 11 de octubre de 2026.',
          '[Política de privacidad (japonés e inglés)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — permisos, flujo de datos y declaraciones sobre la IA en la nube, fechada el 27 de septiembre de 2026.',
          '[Blog de コーヒー坊主](https://co-hi-boy.blogspot.com/) — blog personal del desarrollador, consultado el 11 de octubre de 2026; no se encontró un sitio web del producto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Agentic Inbox](/es/power-local-llm/agentic-inbox-review) — un cliente de correo de código abierto y autoalojado con agente de IA.',
          '[Análisis de Aori](/es/power-local-llm/aori-ai-personal-agent-review) — un agente personal local primero que también funciona en Android.',
          '[Automatización de correo y calendario con LLM locales](/es/power-local-llm/local-llm-email-and-calendar-automation) — cómo montar flujos de correo y calendario con modelos locales.',
          '[Las mejores apps de LLM local para Android](/es/power-local-llm/best-local-llm-apps-android-2026) — la guía más amplia para Android.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-fr.webp',
    title: 'Avis Local AI Mail : un client e-mail Android tout récent avec une IA sur l\'appareil',
    seoTitle: 'Avis Local AI Mail : e-mail avec IA sur l\'appareil',
    intro: 'Local AI Mail: On-Device Email est un client e-mail Android publié sur Google Play par un développeur indépendant, [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai). Il résume, traduit et rédige des réponses avec un modèle d\'IA exécuté sur le téléphone, et peut passer en option à Google Gemini avec votre propre clé d\'API. Il s\'agit d\'une version très précoce (1.0.2). Cet avis s\'appuie sur la fiche Google Play et la politique de confidentialité du développeur, consultées le 11 octobre 2026 ; PromptQuorum n\'a pas testé l\'application.',
    metaDescription: 'Avis Local AI Mail : client e-mail Android très récent qui résume, traduit et rédige des réponses avec une IA sur l\'appareil. 0+ téléchargements.',
    twitterDescription: 'Avis Local AI Mail : client e-mail Android très récent avec résumés, traduction et brouillons de réponse par IA sur l\'appareil. Payant, code source non publié, non testé.',
    audience: 'Utilisateurs Android curieux d\'un client e-mail avec IA sur l\'appareil, qui veulent savoir ce que les sources confirment, ce que le développeur affirme seulement et à quel point l\'application est récente.',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Local AI Mail',
    targetKeywords: [
      'avis local ai mail',
      'local ai mail android',
      'application e-mail ia sur l\'appareil android',
      'client e-mail ia hors ligne',
      'résumé d\'e-mails hors ligne android',
      'application e-mail llm local',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email est un client e-mail Android très récent qui exécute un modèle d\'IA sur le téléphone pour résumer, traduire et rédiger des réponses, avec en option l\'IA cloud Gemini via votre propre clé d\'API.** C\'est une application payante d\'un seul développeur indépendant, et sa fiche Google Play affiche 0+ téléchargements : aucun retour d\'utilisateurs n\'existe encore. Le code source n\'est pas publié et le modèle n\'est pas nommé.',
    quickAnswerTop: {
      fr: {
        question: 'Local AI Mail est-elle gratuite, et son IA fonctionne-t-elle hors ligne ?',
        answer: 'C\'est une application payante, installable gratuitement grâce à une offre de lancement lors de la vérification du 11 octobre 2026. Selon le développeur, l\'IA par défaut s\'exécute sur le téléphone sans connexion internet ; l\'IA cloud est un interrupteur optionnel qui demande votre propre clé d\'API Gemini.',
        bullets: [
          'Résume les e-mails, les traduit entre sept langues et rédige des réponses sur plusieurs tons, pour tout compte IMAP/SMTP.',
          'Android uniquement, via [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) ; aucune version iPhone, ordinateur ou web n\'est indiquée.',
          'La section « Sécurité des données » déclare qu\'aucune donnée n\'est collectée ni partagée, et la politique de confidentialité indique que l\'application ne contient ni SDK publicitaire ni SDK de suivi.',
          'Version 1.0.2, mise à jour le 10 octobre 2026 (état de la fiche au 11 octobre 2026).',
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
        label: 'Qu\'est-ce que Local AI Mail ?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Confidentialité et IA cloud',
        anchor: 'privacy',
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
        label: 'Pour aller plus loin',
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
            text: 'Local AI Mail est un client e-mail Android payant et sans code source publié, d\'un développeur indépendant, qui utilise un modèle d\'IA sur l\'appareil pour résumer, traduire et rédiger des réponses pour des boîtes IMAP/SMTP.',
          },
          {
            type: 'plain-terms',
            text: 'Vous ajoutez votre compte e-mail existant, et une IA sur le téléphone raccourcit les longs messages, les traduit et suggère des réponses, de sorte que le texte reste sur l\'appareil tant que vous n\'activez pas vous-même l\'IA cloud.',
          },
        ],
        items: [
          'Éditeur : listé comme コーヒー坊主 (CoffeeBozu), développeur indépendant à Yokohama, au Japon ; aucune entreprise, site de produit ni dépôt de code source n\'a été trouvé.',
          'IA : un modèle sur l\'appareil avec accélération GPU (Vulkan), plus un interrupteur Gemini optionnel ; le modèle et le moteur d\'inférence ne sont pas nommés.',
          'Messagerie : IMAP et SMTP pour Gmail, Outlook, Yahoo et les serveurs de domaines personnalisés, avec conversations, regroupement par expéditeur et sauvegarde des réglages.',
          'Autorisations : la politique de confidentialité mentionne l\'accès au microphone pour les consignes vocales et l\'accès aux contacts pour la saisie semi-automatique des adresses.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Version très précoce : il n\'existe encore ni avis d\'utilisateurs, ni historique de stabilité à long terme, ni bilan de sécurité. Tout ce qui suit provient de la description du développeur, et PromptQuorum n\'a pas testé l\'application. Voyez-y une idée intéressante à suivre, pas un client e-mail éprouvé, et réfléchissez bien avant d\'y connecter une boîte principale.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'Qu\'est-ce que Local AI Mail ?',
        content: [
          '**Local AI Mail: On-Device Email est un client e-mail Android doté d\'une assistance IA intégrée qui, par défaut, s\'exécute sur le téléphone lui-même.** D\'après sa [fiche Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), il gère les comptes IMAP et SMTP standard et ajoute résumés, traduction, rédaction de réponses, extraction d\'événements du calendrier et consignes dictées à la voix.',
          'L\'application porte trois noms : le titre Play est « Local AI Mail: On-Device Email », la boutique japonaise l\'affiche sous « PrivaMail: ローカルAIメール », et le texte japonais de la politique de confidentialité l\'appelle « LocalMail ». Les trois désignent le même paquet, jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**L\'application n\'est disponible que sur Android via Google Play ; aucune version iPhone, ordinateur ou web n\'est indiquée.**',
        ],
        columns: ['Plateforme', 'Où l\'obtenir'],
        rows: [
          {
            Plateforme: 'Android',
            'Où l\'obtenir': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            Plateforme: 'Prix',
            'Où l\'obtenir': '12,99 € (boutiques allemande/espagnole) ; offre −100 %',
          },
          {
            Plateforme: 'Blog du développeur',
            'Où l\'obtenir': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où l\'obtenir': '[Politique de confidentialité (JA/EN)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            Plateforme: 'Code source',
            'Où l\'obtenir': 'Non publié',
          },
        ],
        note: 'Aucun site de produit dédié n\'a été trouvé ; la fiche Play ne renvoie qu\'à la politique de confidentialité hébergée sur le blog personnel du développeur. Version vérifiée le 11 octobre 2026 : 1.0.2, mise à jour le 10 octobre 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ou de la politique de confidentialité du développeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Résumés et actions à mener.** Résumés en un geste avec points clés et listes à puces, plus extraction des actions à mener dans les longs e-mails.',
          '**Traduction.** Les messages reçus peuvent être traduits entre l\'anglais, le japonais, l\'espagnol, le français, l\'allemand, le chinois et le coréen.',
          '**Rédaction de réponses.** Les réponses sont écrites dans la langue de l\'expéditeur sur trois tons : poli et standard, accepter, ou refus poli.',
          '**Calendrier et voix.** Les dates, heures et ordres du jour sont détectés et peuvent être ajoutés au calendrier en un geste ; les consignes à l\'assistant peuvent être dictées à la voix.',
          '**Client e-mail.** Comptes IMAP et SMTP tels que Gmail, Outlook, Yahoo et domaines personnalisés, actualisation par glissement, conversations avec regroupement par expéditeur, sauvegarde et restauration des réglages de compte.',
        ],
        note: 'La fiche indique que l\'IA sur l\'appareil utilise l\'accélération GPU (Vulkan), mais ne nomme ni le modèle ni le moteur d\'inférence ; la taille du modèle, sa qualité et la configuration requise n\'ont donc pas pu être confirmées.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et IA cloud',
        content: [
          '**La section « Sécurité des données » de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers ».** La politique de confidentialité du développeur, datée du 27 septembre 2026, ajoute que les identifiants du compte sont conservés dans un stockage local chiffré et envoyés uniquement au serveur de messagerie que vous configurez, que rien n\'est transmis à un serveur du développeur et que l\'application ne contient aucun SDK publicitaire ou de suivi tiers.',
          '**Selon la politique, l\'IA sur l\'appareil n\'effectue aucune requête réseau ; l\'option cloud fait exception.** Si vous saisissez une clé d\'API Gemini et lancez une action d\'IA, le texte de l\'e-mail est envoyé directement du téléphone à l\'API Gemini de Google en HTTPS, où s\'appliquent les conditions de Google. La politique mentionne aussi l\'accès au microphone pour les consignes vocales, traitées par la reconnaissance vocale du système Android, et l\'accès aux contacts pour la saisie semi-automatique des adresses.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur, pas des résultats d\'audit, et le code source n\'est pas publié. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. La politique ne précise pas si le service de reconnaissance vocale d\'Android utilisé pour les consignes vocales traite l\'audio sur l\'appareil ou sur les serveurs de Google ; cela dépend du téléphone.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Code source et licence.** Aucun dépôt public ni texte de licence n\'a été trouvé : les affirmations de confidentialité ne peuvent pas être comparées au code.',
          '**Qualité et vitesse en pratique.** PromptQuorum n\'a pas exécuté l\'application ; la qualité des résumés, la précision des traductions, la vitesse et la consommation de batterie sont inconnues, et le modèle, le moteur et la configuration requise ne sont pas indiqués.',
          '**E-mails longs.** Les notes de la v1.0.2 décrivent un passage en un geste à l\'IA cloud pour les longs e-mails, ce qui suggère que le modèle sur l\'appareil a une limite de longueur ; les sources ne la précisent pas.',
          '**Connexion à Gmail et Outlook.** La politique décrit une authentification par adresse e-mail et mot de passe via IMAP/SMTP ; la prise en charge des comptes exigeant des mots de passe d\'application ou OAuth n\'est pas décrite.',
          '**Retours indépendants.** Aucun avis, note ni discussion de tiers au sujet de l\'application n\'a été trouvé.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Agentic Inbox](/fr/power-local-llm/agentic-inbox-review)',
            Plateformes: 'Web (auto-hébergé)',
            'Prix / licence': 'Gratuit / Apache-2.0',
            'Différence clé': 'Client e-mail open source avec agent IA dans votre compte Cloudflare',
          },
          {
            Application: '[Aori](/fr/power-local-llm/aori-ai-personal-agent-review)',
            Plateformes: 'Windows, macOS, Linux, Android',
            'Prix / licence': 'Gratuit (bêta)',
            'Différence clé': 'Agent personnel local d\'abord via Ollama ; pas un client e-mail',
          },
          {
            Application: '[Atomic Bot](/fr/power-local-llm/atomic-bot-review)',
            Plateformes: 'Windows, macOS, Linux, iOS, Android',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Collègue IA sur la pile d\'agents OpenClaw, en local ou dans le cloud',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'L\'offre de lancement se termine-t-elle ?',
            a: 'La page Play indiquait que l\'offre à −100 % prenait fin le 18 octobre 2026 à 1 h 59 (fuseau horaire non précisé) ; ensuite, le prix normal s\'applique, et les prix et offres peuvent varier selon les pays.',
          },
          {
            q: 'Fonctionne-t-elle hors ligne ?',
            a: 'Selon le développeur, résumés, traduction et brouillons s\'exécutent sur l\'appareil sans connexion internet ; la synchronisation du courrier et l\'IA cloud Gemini optionnelle demandent un réseau. Les sources n\'indiquent pas si un modèle est téléchargé au premier lancement.',
          },
          {
            q: 'Est-elle affiliée à Google, Microsoft ou Yahoo ?',
            a: 'Non. L\'avertissement de la fiche indique que l\'application est développée de façon indépendante et n\'est ni affiliée, ni approuvée, ni sponsorisée par Google, Microsoft ou Yahoo ; Gmail, Gemini et Outlook ne sont cités que comme services compatibles.',
          },
          {
            q: 'Comment se compare-t-elle à Agentic Inbox ?',
            a: 'Agentic Inbox est un client e-mail web open source que vous hébergez dans votre propre compte Cloudflare, de sorte que son IA tourne dans votre compte cloud, alors que Local AI Mail est une application Android sans code source publié dont l\'IA par défaut s\'exécute sur le téléphone.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Local AI Mail: On-Device Email est une idée séduisante : un client e-mail Android dont les résumés, traductions et brouillons de réponse s\'exécutent sur le téléphone, avec l\'IA cloud seulement si vous ajoutez votre propre clé. C\'est aussi un produit non éprouvé : version 1.0.2, un seul développeur indépendant, aucun code source publié, et un modèle et un moteur non nommés. Elle convient aux utilisateurs Android curieux qui acceptent d\'expérimenter avec une boîte secondaire ; qui veut une configuration e-mail éprouvée et vérifiable devrait d\'abord comparer [Agentic Inbox](/fr/power-local-llm/agentic-inbox-review) et revoir cette application quand elle aura une base d\'utilisateurs et des retours indépendants.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Mail: On-Device Email sur Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — description, notes de version, section « Sécurité des données », prix et offre, consultés le 11 octobre 2026.',
          '[Politique de confidentialité (japonais et anglais)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — autorisations, flux de données et déclarations sur l\'IA cloud, datée du 27 septembre 2026.',
          '[Blog de コーヒー坊主](https://co-hi-boy.blogspot.com/) — blog personnel du développeur, consulté le 11 octobre 2026 ; aucun site de produit n\'a été trouvé.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Avis Agentic Inbox](/fr/power-local-llm/agentic-inbox-review) — un client e-mail open source auto-hébergé avec agent IA.',
          '[Avis Aori](/fr/power-local-llm/aori-ai-personal-agent-review) — un agent personnel local d\'abord qui fonctionne aussi sous Android.',
          '[Automatisation des e-mails et du calendrier avec des LLM locaux](/fr/power-local-llm/local-llm-email-and-calendar-automation) — créer des flux e-mail et calendrier avec des modèles locaux.',
          '[Les meilleures applications LLM locales pour Android](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama Android plus large.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-ja.webp',
    title: 'Local AI Mail レビュー：端末内AIを搭載した公開直後のAndroidメールアプリ',
    seoTitle: 'Local AI Mail レビュー：端末内AIメール（Android）',
    intro: 'Local AI Mail: On-Device Email は、個人開発者の[コーヒー坊主（CoffeeBozu）](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)がGoogle Playで公開しているAndroid用メールアプリです。スマートフォン上で動くAIモデルでメールの要約・翻訳・返信下書きを行い、自分のAPIキーを使ってGoogle Geminiに切り替えることもできます。バージョン1.0.2の、ごく初期のリリースです。このレビューは2026年10月11日時点のGoogle Playの掲載情報と開発者のプライバシーポリシーに基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'Local AI Mail レビュー：端末内AIでメールを要約・翻訳し返信を下書きする、公開直後のAndroidメールアプリ。ダウンロード数0+、ソース非公開、未検証。',
    twitterDescription: 'Local AI Mail レビュー：端末内AIによる要約・翻訳・返信下書きを備えた、ごく初期のAndroidメールアプリ。有料、ソース非公開、未検証。',
    audience: '端末内AIを備えたメールアプリに関心があり、情報源が裏付けている点、開発者の主張にとどまる点、そしてアプリがどれほど初期段階かを知りたいAndroidユーザー。',
    readTime: '5分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Mail レビュー',
    targetKeywords: [
      'local ai mail レビュー',
      'local ai mail android',
      '端末内ai メールアプリ android',
      'オフライン ai メールクライアント',
      'メール要約 オフライン android',
      'ローカルllm メールアプリ',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email は、スマートフォン上でAIモデルを動かしてメールの要約・翻訳・返信下書きを行う、ごく初期のAndroidメールアプリで、自分のAPIキーによるGeminiクラウドAIも任意で使えます。** 個人開発者による有料アプリで、Google Playの掲載ではダウンロード数が0+のため、利用者の実績はまだありません。ソースコードは公開されておらず、モデル名も明示されていません。',
    quickAnswerTop: {
      ja: {
        question: 'Local AI Mailは無料で、AIはオフラインで動きますか？',
        answer: '有料アプリですが、2026年10月11日の確認時点では公開記念オファーにより無料でインストールできました。開発者によれば、標準のAIはインターネット接続なしで端末上で動作し、クラウドAIは自分のGemini APIキーが必要な任意の切り替えです。',
        bullets: [
          'メールの要約、7言語間の翻訳、複数のトーンでの返信下書きに対応。IMAP/SMTPアカウントならどれでも利用可能。',
          'Androidのみで、[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)から入手します。iPhone、デスクトップ、Web版は掲載されていません。',
          '「データ セーフティ」ではデータの収集・共有なしと宣言され、プライバシーポリシーには広告・トラッキングSDKを含まないと記載されています。',
          'バージョン1.0.2、2026年10月10日更新（2026年10月11日時点の掲載状況）。',
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
        label: 'Local AI Mailとは',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プライバシーとクラウドAI',
        anchor: 'privacy',
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
        label: '総評',
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
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Mailは、個人開発者による有料・ソースコード非公開のAndroidメールアプリで、端末内のAIモデルを使ってIMAP/SMTPメールボックスの要約・翻訳・返信下書きを行います。',
          },
          {
            type: 'plain-terms',
            text: '既存のメールアカウントを追加すると、スマートフォン上のAIが長いメールを短くまとめ、翻訳し、返信案を提案します。自分でクラウドAIに切り替えない限り、本文は端末内にとどまります。',
          },
        ],
        items: [
          '提供元：コーヒー坊主（CoffeeBozu）名義の、横浜市の個人開発者。企業、製品サイト、ソースコードのリポジトリは見つかりませんでした。',
          'AI：GPU（Vulkan）による高速化に対応した端末内モデルと、任意のGemini切り替え。モデルと推論エンジンは明示されていません。',
          'メール：Gmail、Outlook、Yahoo、独自ドメインのサーバー向けのIMAPとSMTP。スレッド表示、送信者グループ化、設定のバックアップを備えます。',
          '権限：プライバシーポリシーには、音声指示のためのマイクと、宛先の自動補完のための連絡先へのアクセスが記載されています。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ごく初期のリリースです。利用者レビュー、長期的な安定性の実績、セキュリティ面の実績はまだありません。ここに書かれていることはすべて開発者自身の説明で、PromptQuorumはアプリを試していません。実績のあるメールクライアントではなく、注目しておきたい面白いアイデアとして捉え、メインのメールボックスを接続する前によく考えてください。',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'Local AI Mailとは',
        content: [
          '**Local AI Mail: On-Device Email は、既定ではスマートフォン上で動くAIアシスタント機能を内蔵したAndroidメールアプリです。** [Google Playの掲載情報](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)によると、標準的なIMAP/SMTPアカウントに対応し、要約、翻訳、返信の下書き、予定の抽出、音声による指示を追加します。',
          'アプリには3つの名前があります。Playでの名称は「Local AI Mail: On-Device Email」、日本のストアでは「PrivaMail: ローカルAIメール」と表示され、プライバシーポリシーの日本語部分では「LocalMail」と呼ばれています。いずれも同じパッケージ jp.coffeebozu.mailerai を指します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: ['**アプリはAndroid向けにGoogle Playでのみ提供されており、iPhone、デスクトップ、Web版は掲載されていません。**'],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            'プラットフォーム': '価格',
            '入手先': '¥1,980（日本のストア）、100%オフの公開記念オファー',
          },
          {
            'プラットフォーム': '開発者ブログ',
            '入手先': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー（日英）](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: '製品専用のサイトは見つかりませんでした。Playの掲載情報がリンクしているのは、開発者の個人ブログに置かれたプライバシーポリシーのみです。2026年10月11日に確認したバージョン：1.0.2（2026年10月10日更新）。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下の項目はすべてGoogle Playの説明文または開発者のプライバシーポリシーに基づくもので、独自の検証は行っていません。**'],
        items: [
          '**要約とアクション項目。** ワンタップで要点や箇条書きを要約し、長いメールからやるべきことを抽出します。',
          '**翻訳。** 受信メールを英語、日本語、スペイン語、フランス語、ドイツ語、中国語、韓国語の間で翻訳できます。',
          '**返信の下書き。** 送信者の言語で、丁寧・標準、承諾・同意、丁寧に断る、の3つのトーンから返信を作成します。',
          '**カレンダーと音声。** 日付・時刻・議題を検出してワンタップでカレンダーに追加でき、アシスタントへの指示は音声で入力できます。',
          '**メールクライアント。** Gmail、Outlook、Yahoo、独自ドメインなどのIMAP/SMTPアカウント、プルして更新、送信者グループ化付きのスレッド表示、アカウント設定のバックアップと復元に対応します。',
        ],
        note: '掲載情報では端末内AIがGPU高速化（Vulkan）を使うとされていますが、モデルや推論エンジンは明示されていないため、モデルの規模、品質、必要な端末スペックは確認できませんでした。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとクラウドAI',
        content: [
          '**Google Playの「データ セーフティ」では「収集されるデータなし」「第三者と共有されるデータなし」と宣言されています。** 2026年9月27日付の開発者のプライバシーポリシーには、アカウント情報は暗号化された端末内ストレージに保存され、利用者が設定したメールサーバーにのみ送信されること、開発者のサーバーには何も送られないこと、第三者の広告・トラッキングSDKを含まないことが追記されています。',
          '**ポリシーによれば端末内AIはネットワーク通信を行わず、例外はクラウドオプションです。** Gemini APIキーを入力してAI機能を実行すると、メール本文はスマートフォンからHTTPSでGoogleのGemini APIに直接送信され、Googleの規約が適用されます。ポリシーにはほかに、音声指示のためのマイク（Androidのシステム音声認識で処理）と、宛先の自動補完のための連絡先へのアクセスも記載されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者による申告であり、監査結果ではなく、ソースコードも公開されていません。PromptQuorumはアプリの通信内容を調べていません。音声指示に使われるAndroidの音声認識サービスが音声を端末上で処理するのかGoogleのサーバーで処理するのかはポリシーに記載がなく、端末の設定によって異なります。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ソースコードとライセンス。** 公開リポジトリもライセンス文も見つからなかったため、プライバシーに関する主張をコードで確かめることはできません。',
          '**実際の品質と速度。** PromptQuorumはアプリを実行していないため、要約の品質、翻訳の精度、速度、バッテリー消費は不明で、モデル、エンジン、必要な端末要件も示されていません。',
          '**長いメール。** v1.0.2のリリースノートには、長いメールをワンタップでクラウドAIに切り替える機能が記されており、端末内モデルに長さの上限があることがうかがえますが、情報源は上限を示していません。',
          '**GmailやOutlookへのログイン。** ポリシーはIMAP/SMTPでのメールアドレスとパスワードによる認証を説明していますが、アプリパスワードやOAuthが必要なアカウントの扱いは説明されていません。',
          '**第三者の評価。** アプリに関する第三者のレビュー、評価、議論は見つかりませんでした。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', '対応環境', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Agentic Inbox](/ja/power-local-llm/agentic-inbox-review)',
            '対応環境': 'Web（セルフホスト）',
            '価格／ライセンス': '無料／Apache-2.0',
            '主な違い': '自分のCloudflareアカウント上でAIエージェントが動くオープンソースのメールクライアント',
          },
          {
            'アプリ': '[Aori](/ja/power-local-llm/aori-ai-personal-agent-review)',
            '対応環境': 'Windows、macOS、Linux、Android',
            '価格／ライセンス': '無料（ベータ）',
            '主な違い': 'Ollamaを使うローカル優先の個人エージェント。メールクライアントではない',
          },
          {
            'アプリ': '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)',
            '対応環境': 'Windows、macOS、Linux、iOS、Android',
            '価格／ライセンス': 'フリーミアム／MIT',
            '主な違い': 'OpenClawエージェント基盤上のAIコワーカー。ローカルでもクラウドでも動作',
          },
        ],
        note: '競合アプリの情報は頻繁に変わります。価格、ライセンス、対応環境は各アプリの掲載ページで最新の情報をご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '公開記念オファーはいつ終わりますか？',
            a: 'Playのページでは、100%オフのオファーは2026年10月18日の午前1:59に終了すると表示されていました（タイムゾーンは不明）。終了後は通常価格となり、価格やオファーは国によって異なる場合があります。',
          },
          {
            q: 'オフラインで使えますか？',
            a: '開発者によれば、要約・翻訳・下書きはインターネット接続なしで端末上で動作します。メールの同期と任意のGeminiクラウドAIにはネットワークが必要です。初回起動時にモデルをダウンロードするかどうかは、情報源に記載がありません。',
          },
          {
            q: 'Google、Microsoft、Yahooとは関係がありますか？',
            a: 'ありません。掲載情報の免責事項には、アプリは独立して開発されたものであり、Google、Microsoft、Yahooとの提携・承認・後援はないと記載されています。Gmail、Gemini、Outlookは対応サービスとして挙げられているだけです。',
          },
          {
            q: 'Agentic Inboxとの違いは何ですか？',
            a: 'Agentic Inboxは自分のCloudflareアカウントにホストするオープンソースのWebメールクライアントで、AIはクラウドアカウント内で動作します。一方、Local AI Mailはソースコード非公開のAndroidアプリで、標準のAIはスマートフォン上で動作します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Local AI Mail: On-Device Email は魅力的なアイデアです。要約・翻訳・返信の下書きがスマートフォン上で動き、クラウドAIは自分のキーを追加したときだけ使われます。一方で、バージョン1.0.2、個人開発者1人、ソースコード非公開、モデルとエンジンが不明という、実績のない製品でもあります。サブのメールボックスで試してみたい好奇心のあるAndroidユーザーには向いています。実績があり検証可能なメール環境が必要な方は、まず[Agentic Inbox](/ja/power-local-llm/agentic-inbox-review)を比較し、このアプリはユーザー基盤と第三者の評価が出てきてから改めて確認するとよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Google Playの Local AI Mail: On-Device Email](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — 説明文、リリースノート、データ セーフティ、価格とオファー（2026年10月11日確認）。',
          '[プライバシーポリシー（日本語・英語）](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — 権限、データの流れ、クラウドAIに関する記載（2026年9月27日付）。',
          '[コーヒー坊主の開発者ブログ](https://co-hi-boy.blogspot.com/) — 開発者の個人ブログ（2026年10月11日確認）。製品サイトは見つかりませんでした。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Agentic Inbox レビュー](/ja/power-local-llm/agentic-inbox-review) — AIエージェントを備えたオープンソースのセルフホスト型メールクライアント。',
          '[Aori レビュー](/ja/power-local-llm/aori-ai-personal-agent-review) — Androidでも動くローカル優先の個人エージェント。',
          '[ローカルLLMによるメールとカレンダーの自動化](/ja/power-local-llm/local-llm-email-and-calendar-automation) — ローカルモデルでメールとカレンダーのワークフローを構築する方法。',
          '[Android向けローカルLLMアプリのおすすめ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより広い比較ガイド。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-pt.webp',
    title: 'Análise do Local AI Mail: cliente de e-mail para Android recém-lançado com IA no aparelho',
    seoTitle: 'Análise do Local AI Mail: e-mail com IA no aparelho',
    intro: 'O Local AI Mail: On-Device Email é um cliente de e-mail para Android publicado no Google Play por um desenvolvedor individual, [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai). Ele resume, traduz e redige respostas com um modelo de IA executado no celular e pode, opcionalmente, mudar para o Google Gemini com a sua própria chave de API. É uma versão muito inicial (1.0.2). Esta análise se baseia na página do Google Play e na política de privacidade do desenvolvedor, consultadas em 11 de outubro de 2026; a PromptQuorum não testou o aplicativo.',
    metaDescription: 'Análise do Local AI Mail: cliente de e-mail para Android muito inicial que resume, traduz e redige respostas com IA no aparelho. 0+ downloads.',
    twitterDescription: 'Análise do Local AI Mail: cliente de e-mail para Android muito inicial com resumos, tradução e rascunhos de resposta por IA no aparelho. Pago, código-fonte não publicado, não testado.',
    audience: 'Usuários de Android curiosos sobre um cliente de e-mail com IA no aparelho que querem saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e quão inicial é o aplicativo.',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Local AI Mail',
    targetKeywords: [
      'análise local ai mail',
      'local ai mail android',
      'app de e-mail com ia no aparelho android',
      'cliente de e-mail com ia offline',
      'resumir e-mails offline android',
      'app de e-mail com llm local',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**O Local AI Mail: On-Device Email é um cliente de e-mail para Android muito inicial que executa um modelo de IA no celular para resumir, traduzir e redigir respostas, com IA na nuvem do Gemini opcional usando a sua própria chave de API.** É um aplicativo pago de um único desenvolvedor individual, e a página dele no Google Play mostra 0+ downloads, então ainda não há histórico de uso. O código-fonte não é publicado e o modelo não é identificado.',
    quickAnswerTop: {
      pt: {
        question: 'O Local AI Mail é gratuito e a IA funciona offline?',
        answer: 'É um aplicativo pago que podia ser instalado de graça durante uma oferta de lançamento na verificação de 11 de outubro de 2026. Segundo o desenvolvedor, a IA padrão roda no celular sem conexão com a internet; a IA na nuvem é uma chave opcional que exige a sua própria chave de API do Gemini.',
        bullets: [
          'Resume e-mails, traduz entre sete idiomas e redige respostas em vários tons, para qualquer conta IMAP/SMTP.',
          'Somente Android, pelo [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai); não há versão listada para iPhone, desktop ou web.',
          'A seção “Segurança dos dados” declara que nenhum dado é coletado ou compartilhado, e a política de privacidade diz que o app não contém SDKs de publicidade nem de rastreamento.',
          'Versão 1.0.2, atualizada em 10 de outubro de 2026 (estado da página em 11 de outubro de 2026).',
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
        label: 'O que é o Local AI Mail?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidade e IA na nuvem',
        anchor: 'privacy',
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
            text: 'O Local AI Mail é um cliente de e-mail para Android pago e sem código-fonte publicado, de um desenvolvedor individual, que usa um modelo de IA no aparelho para resumir, traduzir e redigir respostas em caixas IMAP/SMTP.',
          },
          {
            type: 'plain-terms',
            text: 'Você adiciona sua conta de e-mail existente e uma IA no celular encurta mensagens longas, traduz e sugere respostas, de modo que o texto fica no aparelho, a menos que você mesmo mude para a IA na nuvem.',
          },
        ],
        items: [
          'Publicador: listado como コーヒー坊主 (CoffeeBozu), desenvolvedor individual em Yokohama, no Japão; não foram encontrados empresa, site do produto nem repositório de código-fonte.',
          'IA: um modelo no aparelho com aceleração por GPU (Vulkan) e uma chave opcional do Gemini; o modelo e o mecanismo de inferência não são identificados.',
          'E-mail: IMAP e SMTP para Gmail, Outlook, Yahoo e servidores de domínios próprios, com conversas, agrupamento por remetente e backup das configurações.',
          'Permissões: a política de privacidade cita acesso ao microfone para comandos de voz e acesso aos contatos para autocompletar endereços.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Versão muito inicial: ainda não há avaliações de usuários, histórico de estabilidade a longo prazo nem histórico de segurança. Tudo aqui é a descrição do próprio desenvolvedor, e a PromptQuorum não testou o aplicativo. Trate-o como uma ideia interessante para acompanhar, não como um cliente de e-mail comprovado, e pense bem antes de conectar uma caixa principal.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'O que é o Local AI Mail?',
        content: [
          '**O Local AI Mail: On-Device Email é um cliente de e-mail para Android com assistência de IA integrada que, por padrão, roda no próprio celular.** Segundo a [página do Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai), ele lida com contas IMAP e SMTP padrão e acrescenta resumos, tradução, redação de respostas, extração de eventos para o calendário e comandos ditados por voz.',
          'O app tem três nomes: o título no Play é “Local AI Mail: On-Device Email”, a loja japonesa o exibe como “PrivaMail: ローカルAIメール” e o texto em japonês da política de privacidade o chama de “LocalMail”. Os três se referem ao mesmo pacote, jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O aplicativo está disponível apenas para Android pelo Google Play; não há versão listada para iPhone, desktop ou web.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            Plataforma: 'Preço',
            'Onde obter': 'R$ 64,99 (loja brasileira); oferta de lançamento −100 %',
          },
          {
            Plataforma: 'Blog do desenvolvedor',
            'Onde obter': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade (JA/EN)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Não foi encontrado um site próprio do produto; a página do Play só aponta para a política de privacidade hospedada no blog pessoal do desenvolvedor. Versão verificada em 11 de outubro de 2026: 1.0.2, atualizada em 10 de outubro de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição do Google Play ou da política de privacidade do desenvolvedor; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Resumos e tarefas.** Resumos com um toque, com pontos principais e tópicos, além da extração de tarefas de e-mails longos.',
          '**Tradução.** As mensagens recebidas podem ser traduzidas entre inglês, japonês, espanhol, francês, alemão, chinês e coreano.',
          '**Redação de respostas.** As respostas são escritas no idioma do remetente em três tons: educado e padrão, aceitar e concordar, ou recusa educada.',
          '**Calendário e voz.** Datas, horários e pautas são detectados e podem ser adicionados ao calendário com um toque; os comandos ao assistente podem ser ditados por voz.',
          '**Cliente de e-mail.** Contas IMAP e SMTP como Gmail, Outlook, Yahoo e domínios próprios, puxar para atualizar, conversas com agrupamento por remetente, e backup e restauração das configurações da conta.',
        ],
        note: 'A página informa que a IA no aparelho usa aceleração por GPU (Vulkan), mas não identifica o modelo nem o mecanismo de inferência, então não foi possível confirmar o tamanho do modelo, a qualidade nem os requisitos do aparelho.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e IA na nuvem',
        content: [
          '**A seção “Segurança dos dados” do Google Play declara “Nenhum dado coletado” e “Nenhum dado compartilhado com terceiros”.** A política de privacidade do desenvolvedor, datada de 27 de setembro de 2026, acrescenta que as credenciais da conta ficam em armazenamento local criptografado e são enviadas somente ao servidor de e-mail que você configura, que nada vai para um servidor do desenvolvedor e que o app não contém SDKs de publicidade ou rastreamento de terceiros.',
          '**Segundo a política, a IA no aparelho não faz requisições de rede; a opção de nuvem é a exceção.** Se você informar uma chave de API do Gemini e executar uma ação de IA, o texto do e-mail é enviado diretamente do celular à API Gemini do Google por HTTPS, onde valem os termos do Google. A política também cita o acesso ao microfone para comandos de voz, tratados pelo reconhecimento de fala do sistema Android, e o acesso aos contatos para autocompletar endereços.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A PromptQuorum não inspecionou o tráfego de rede do app. A política não diz se o serviço de fala do Android usado nos comandos de voz processa o áudio no aparelho ou nos servidores do Google; isso depende do celular.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Código-fonte e licença.** Não foram encontrados repositório público nem texto de licença, então as alegações de privacidade não podem ser conferidas no código.',
          '**Qualidade e velocidade no uso real.** A PromptQuorum não executou o app; qualidade dos resumos, precisão das traduções, velocidade e consumo de bateria são desconhecidos, e modelo, mecanismo e requisitos do aparelho não são informados.',
          '**E-mails longos.** As notas da v1.0.2 descrevem uma troca com um toque para a IA na nuvem em e-mails longos, o que sugere que o modelo do aparelho tem um limite de tamanho; as fontes não dizem qual.',
          '**Login no Gmail e no Outlook.** A política descreve autenticação com endereço e senha via IMAP/SMTP; não é descrito como contas que exigem senhas de aplicativo ou OAuth são tratadas.',
          '**Opiniões independentes.** Não foram encontradas resenhas, avaliações nem discussões de terceiros sobre o app.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Agentic Inbox](/pt/power-local-llm/agentic-inbox-review)',
            Plataformas: 'Web (hospedagem própria)',
            'Preço / licença': 'Grátis / Apache-2.0',
            'Diferença principal': 'Cliente de e-mail de código aberto com agente de IA na sua conta Cloudflare',
          },
          {
            App: '[Aori](/pt/power-local-llm/aori-ai-personal-agent-review)',
            Plataformas: 'Windows, macOS, Linux, Android',
            'Preço / licença': 'Grátis (beta)',
            'Diferença principal': 'Agente pessoal local primeiro com Ollama; não é cliente de e-mail',
          },
          {
            App: '[Atomic Bot](/pt/power-local-llm/atomic-bot-review)',
            Plataformas: 'Windows, macOS, Linux, iOS, Android',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Colega de IA na pilha de agentes OpenClaw, local ou na nuvem',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A oferta de lançamento termina?',
            a: 'A página do Play mostrava a oferta de 100 % de desconto terminando em 18 de outubro de 2026, à 1h59 (fuso horário não informado); depois disso vale o preço normal, e preços e ofertas podem variar por país.',
          },
          {
            q: 'Funciona offline?',
            a: 'Segundo o desenvolvedor, resumos, tradução e rascunhos rodam no aparelho sem conexão com a internet; sincronizar e-mails e a IA na nuvem opcional do Gemini precisam de rede. As fontes não dizem se um modelo é baixado na primeira abertura.',
          },
          {
            q: 'É afiliado ao Google, à Microsoft ou ao Yahoo?',
            a: 'Não. O aviso da página informa que o app é desenvolvido de forma independente e não é afiliado, endossado nem patrocinado por Google, Microsoft ou Yahoo; Gmail, Gemini e Outlook aparecem apenas como serviços compatíveis.',
          },
          {
            q: 'Como ele se compara ao Agentic Inbox?',
            a: 'O Agentic Inbox é um cliente de e-mail web de código aberto que você hospeda na sua própria conta Cloudflare, então a IA roda na sua conta de nuvem, enquanto o Local AI Mail é um app Android sem código-fonte publicado cuja IA padrão roda no celular.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Local AI Mail: On-Device Email é uma ideia atraente: um cliente de e-mail para Android cujos resumos, traduções e rascunhos de resposta rodam no celular, com IA na nuvem somente quando você adiciona a sua própria chave. É também um produto não comprovado: versão 1.0.2, um único desenvolvedor individual, sem código-fonte publicado e com modelo e mecanismo não identificados. Serve para usuários de Android curiosos que aceitam experimentar com uma caixa secundária; quem precisa de uma configuração de e-mail comprovada e auditável deve comparar primeiro o [Agentic Inbox](/pt/power-local-llm/agentic-inbox-review) e rever este app quando houver base de usuários e opiniões independentes.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Local AI Mail: On-Device Email no Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — descrição, notas da versão, seção “Segurança dos dados”, preço e oferta, consultados em 11 de outubro de 2026.',
          '[Política de privacidade (japonês e inglês)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — permissões, fluxo de dados e declarações sobre a IA na nuvem, datada de 27 de setembro de 2026.',
          '[Blog de コーヒー坊主](https://co-hi-boy.blogspot.com/) — blog pessoal do desenvolvedor, consultado em 11 de outubro de 2026; não foi encontrado site do produto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Agentic Inbox](/pt/power-local-llm/agentic-inbox-review) — um cliente de e-mail de código aberto e hospedagem própria com agente de IA.',
          '[Análise do Aori](/pt/power-local-llm/aori-ai-personal-agent-review) — um agente pessoal local primeiro que também roda no Android.',
          '[Automação de e-mail e calendário com LLMs locais](/pt/power-local-llm/local-llm-email-and-calendar-automation) — como montar fluxos de e-mail e calendário com modelos locais.',
          '[Melhores apps de LLM local para Android](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-ar.webp',
    title: 'مراجعة Local AI Mail: تطبيق بريد إلكتروني جديد كليًا لنظام Android بذكاء اصطناعي على الجهاز',
    seoTitle: 'مراجعة Local AI Mail: بريد بذكاء اصطناعي على الجهاز',
    intro: 'Local AI Mail: On-Device Email هو تطبيق بريد إلكتروني لنظام Android ينشره مطوّر فردي هو [コーヒー坊主 (CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) على Google Play. يلخّص الرسائل ويترجمها ويصيغ الردود بنموذج ذكاء اصطناعي يعمل على الهاتف، ويمكنه اختياريًا التحويل إلى Google Gemini بمفتاح API خاص بك. إنه إصدار مبكر جدًا (الإصدار 1.0.2). تستند هذه المراجعة إلى صفحة التطبيق على Google Play وسياسة الخصوصية الخاصة بالمطوّر، اللتين جرى الاطلاع عليهما في 11 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Local AI Mail: تطبيق بريد مبكر جدًا لنظام Android يلخّص الرسائل ويترجمها ويصيغ الردود بذكاء اصطناعي على الجهاز. 0+ تنزيل.',
    twitterDescription: 'مراجعة Local AI Mail: تطبيق بريد مبكر جدًا لنظام Android بتلخيص وترجمة ومسودات ردود بذكاء اصطناعي على الجهاز. مدفوع، شيفرته غير منشورة، لم يُختبر بعد.',
    audience: 'مستخدمو Android المهتمون بتطبيق بريد بذكاء اصطناعي على الجهاز، ويريدون معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط ومدى حداثة التطبيق.',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Local AI Mail',
    targetKeywords: [
      'مراجعة local ai mail',
      'local ai mail android',
      'تطبيق بريد بذكاء اصطناعي على الجهاز android',
      'عميل بريد ذكاء اصطناعي دون اتصال',
      'تلخيص البريد دون اتصال android',
      'تطبيق بريد llm محلي',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email هو تطبيق بريد إلكتروني مبكر جدًا لنظام Android يشغّل نموذج ذكاء اصطناعي على الهاتف لتلخيص الرسائل وترجمتها وصياغة الردود، مع ذكاء Gemini السحابي اختياريًا بمفتاح API خاص بك.** هو تطبيق مدفوع من مطوّر فردي واحد، وتُظهر صفحته على Google Play عدد تنزيلات 0+، أي أنه لا يوجد بعد سجل استخدام. شيفرته المصدرية غير منشورة، ولا يُذكر اسم النموذج.',
    quickAnswerTop: {
      ar: {
        question: 'هل Local AI Mail مجاني، وهل يعمل ذكاؤه الاصطناعي دون اتصال؟',
        answer: 'هو تطبيق مدفوع كان تثبيته مجانيًا خلال عرض إطلاق عند الاطلاع عليه في 11 أكتوبر 2026. بحسب المطوّر، يعمل الذكاء الاصطناعي الافتراضي على الهاتف دون اتصال بالإنترنت؛ أما الذكاء السحابي فهو مفتاح تبديل اختياري يتطلب مفتاح Gemini API الخاص بك.',
        bullets: [
          'يلخّص الرسائل ويترجمها بين سبع لغات ويصيغ الردود بنبرات متعددة، لأي حساب IMAP/SMTP.',
          'لنظام Android فقط عبر [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)؛ ولا يُذكر إصدار لـ iPhone أو سطح المكتب أو الويب.',
          'يعلن قسم «أمان البيانات» عدم جمع أي بيانات أو مشاركتها، وتذكر سياسة الخصوصية أن التطبيق لا يحتوي على حزم SDK للإعلانات أو التتبع.',
          'الإصدار 1.0.2، وآخر تحديث في 10 أكتوبر 2026 (حالة الصفحة في 11 أكتوبر 2026).',
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
        label: 'ما هو Local AI Mail؟',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: 'كيفية الحصول عليه',
        anchor: 'get-it',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخصوصية والذكاء الاصطناعي السحابي',
        anchor: 'privacy',
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
            text: 'Local AI Mail تطبيق بريد إلكتروني مدفوع وغير منشور المصدر لنظام Android من مطوّر فردي، يستخدم نموذج ذكاء اصطناعي على الجهاز لتلخيص الرسائل وترجمتها وصياغة الردود لصناديق بريد IMAP/SMTP.',
          },
          {
            type: 'plain-terms',
            text: 'تضيف حساب بريدك الحالي، فيقوم ذكاء اصطناعي على الهاتف باختصار الرسائل الطويلة وترجمتها واقتراح الردود، فيبقى النص على الجهاز ما لم تُحوّل أنت إلى الذكاء السحابي.',
          },
        ],
        items: [
          'الناشر: مُدرج باسم コーヒー坊主 (CoffeeBozu)، مطوّر فردي في يوكوهاما باليابان؛ ولم يُعثر على شركة أو موقع للمنتج أو مستودع للشيفرة المصدرية.',
          'الذكاء الاصطناعي: نموذج على الجهاز مع تسريع بوحدة GPU (Vulkan)، ومفتاح تبديل اختياري إلى Gemini؛ ولا يُذكر النموذج ولا محرك الاستدلال.',
          'البريد: IMAP وSMTP لحسابات Gmail وOutlook وYahoo وخوادم النطاقات المخصصة، مع عرض المحادثات والتجميع حسب المُرسِل ونسخ احتياطي للإعدادات.',
          'الأذونات: تذكر سياسة الخصوصية الوصول إلى الميكروفون للأوامر الصوتية والوصول إلى جهات الاتصال لإكمال العناوين تلقائيًا.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'إصدار مبكر جدًا: لا توجد بعد تقييمات من المستخدمين ولا سجل استقرار طويل الأمد ولا سجل أمني. كل ما هنا هو وصف المطوّر نفسه، ولم تختبر PromptQuorum التطبيق. تعامل معه كفكرة مثيرة للمتابعة لا كعميل بريد مجرَّب، وفكّر جيدًا قبل ربط صندوق بريدك الرئيسي به.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'ما هو Local AI Mail؟',
        content: [
          '**Local AI Mail: On-Device Email هو تطبيق بريد إلكتروني لنظام Android مزوّد بمساعدة ذكاء اصطناعي مدمجة تعمل افتراضيًا على الهاتف نفسه.** بحسب [صفحته على Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)، يتعامل مع حسابات IMAP وSMTP القياسية ويضيف التلخيص والترجمة وصياغة الردود واستخراج المواعيد والأوامر المُملاة صوتيًا.',
          'للتطبيق ثلاثة أسماء: العنوان على Play هو «Local AI Mail: On-Device Email»، ويظهر في المتجر الياباني باسم «PrivaMail: ローカルAIメール»، ويسميه النص الياباني في سياسة الخصوصية «LocalMail». وجميعها تشير إلى الحزمة نفسها jp.coffeebozu.mailerai.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**التطبيق متاح لنظام Android فقط عبر Google Play؛ ولا يُذكر إصدار لـ iPhone أو سطح المكتب أو الويب.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            'المنصة': 'السعر',
            'مكان الحصول عليه': '12.99 دولارًا (المتجر الأمريكي)؛ عرض إطلاق بخصم 100%',
          },
          {
            'المنصة': 'مدونة المطوّر',
            'مكان الحصول عليه': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية (ياباني/إنجليزي)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': 'غير منشورة',
          },
        ],
        note: 'لم يُعثر على موقع مخصص للمنتج؛ وتكتفي صفحة Play بربط سياسة الخصوصية المنشورة في مدونة المطوّر الشخصية. الإصدار الذي جرى التحقق منه في 11 أكتوبر 2026: 1.0.2، وآخر تحديث في 10 أكتوبر 2026.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف Google Play أو سياسة الخصوصية الخاصة بالمطوّر؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**التلخيص والمهام.** ملخصات بلمسة واحدة بالنقاط الرئيسية والقوائم، مع استخراج المهام من الرسائل الطويلة.',
          '**الترجمة.** يمكن ترجمة الرسائل الواردة بين الإنجليزية واليابانية والإسبانية والفرنسية والألمانية والصينية والكورية.',
          '**صياغة الردود.** تُكتب الردود بلغة المُرسِل بثلاث نبرات: مهذبة قياسية، أو قبول وموافقة، أو اعتذار مهذب.',
          '**التقويم والصوت.** تُكتشف التواريخ والأوقات وجداول الأعمال ويمكن إضافتها إلى التقويم بلمسة واحدة؛ ويمكن إملاء الأوامر للمساعد صوتيًا.',
          '**عميل البريد.** حسابات IMAP وSMTP مثل Gmail وOutlook وYahoo والنطاقات المخصصة، والسحب للتحديث، وعرض المحادثات مع التجميع حسب المُرسِل، والنسخ الاحتياطي لإعدادات الحساب واستعادتها.',
        ],
        note: 'تذكر الصفحة أن الذكاء الاصطناعي على الجهاز يستخدم تسريع GPU (Vulkan)، لكنها لا تسمّي النموذج ولا محرك الاستدلال، ولذلك تعذّر التأكد من حجم النموذج وجودته ومتطلبات الجهاز.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والذكاء الاصطناعي السحابي',
        content: [
          '**يعلن قسم «أمان البيانات» في Google Play «لم يتم جمع أي بيانات» و«لا تتم مشاركة أي بيانات مع جهات خارجية».** وتضيف سياسة خصوصية المطوّر، المؤرخة في 27 سبتمبر 2026، أن بيانات اعتماد الحساب تُحفظ في تخزين محلي مشفّر وتُرسل فقط إلى خادم البريد الذي تهيئه، وأنه لا يُرسل شيء إلى خادم المطوّر، وأن التطبيق لا يحتوي على حزم SDK للإعلانات أو التتبع من جهات خارجية.',
          '**بحسب السياسة، لا يُجري الذكاء الاصطناعي على الجهاز أي طلبات شبكة؛ والخيار السحابي هو الاستثناء.** إذا أدخلت مفتاح Gemini API ونفّذت إجراءً بالذكاء الاصطناعي، يُرسل نص البريد مباشرة من الهاتف إلى Gemini API التابعة لـ Google عبر HTTPS، وتسري هناك شروط Google. وتذكر السياسة أيضًا الوصول إلى الميكروفون للأوامر الصوتية، وتعالجه خدمة التعرف على الكلام في نظام Android، والوصول إلى جهات الاتصال لإكمال العناوين تلقائيًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. لم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق. ولا تحدد السياسة ما إذا كانت خدمة التعرف على الكلام في Android المستخدمة للأوامر الصوتية تعالج الصوت على الجهاز أم على خوادم Google؛ فهذا يعتمد على الهاتف.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الشيفرة المصدرية والترخيص.** لم يُعثر على مستودع عام ولا على نص ترخيص، لذلك لا يمكن مطابقة ادعاءات الخصوصية مع الشيفرة.',
          '**الجودة والسرعة في الاستخدام الفعلي.** لم تشغّل PromptQuorum التطبيق، فجودة التلخيص ودقة الترجمة والسرعة واستهلاك البطارية غير معروفة، ولا يُذكر النموذج ولا المحرك ولا متطلبات الجهاز.',
          '**الرسائل الطويلة.** تصف ملاحظات الإصدار 1.0.2 تبديلًا بلمسة واحدة إلى الذكاء السحابي للرسائل الطويلة، مما يوحي بأن للنموذج على الجهاز حدًا للطول؛ ولا تذكر المصادر هذا الحد.',
          '**تسجيل الدخول إلى Gmail وOutlook.** تصف السياسة المصادقة بعنوان البريد وكلمة المرور عبر IMAP/SMTP؛ ولا يُوصف كيفية التعامل مع الحسابات التي تتطلب كلمات مرور التطبيقات أو OAuth.',
          '**الآراء المستقلة.** لم يُعثر على مراجعات أو تقييمات أو نقاشات من أطراف خارجية حول التطبيق.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الجوهري'],
        rows: [
          {
            'التطبيق': '[Agentic Inbox](/ar/power-local-llm/agentic-inbox-review)',
            'المنصات': 'ويب (استضافة ذاتية)',
            'السعر / الترخيص': 'مجاني / Apache-2.0',
            'الفرق الجوهري': 'عميل بريد مفتوح المصدر بوكيل ذكاء اصطناعي في حساب Cloudflare الخاص بك',
          },
          {
            'التطبيق': '[Aori](/ar/power-local-llm/aori-ai-personal-agent-review)',
            'المنصات': 'Windows وmacOS وLinux وAndroid',
            'السعر / الترخيص': 'مجاني (تجريبي)',
            'الفرق الجوهري': 'وكيل شخصي محلي أولًا عبر Ollama؛ وليس عميل بريد',
          },
          {
            'التطبيق': '[Atomic Bot](/ar/power-local-llm/atomic-bot-review)',
            'المنصات': 'Windows وmacOS وLinux وiOS وAndroid',
            'السعر / الترخيص': 'مجاني جزئيًا / MIT',
            'الفرق الجوهري': 'زميل ذكاء اصطناعي على حزمة وكلاء OpenClaw، محليًا أو سحابيًا',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ينتهي عرض الإطلاق؟',
            a: 'أظهرت صفحة Play أن عرض الخصم 100% ينتهي في 18 أكتوبر 2026 الساعة 1:59 صباحًا (المنطقة الزمنية غير معروضة)؛ وبعد ذلك يسري السعر العادي، وقد تختلف الأسعار والعروض من بلد إلى آخر.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'بحسب المطوّر، يعمل التلخيص والترجمة والمسودات على الجهاز دون اتصال بالإنترنت؛ أما مزامنة البريد والذكاء السحابي الاختياري من Gemini فيتطلبان شبكة. ولا تذكر المصادر ما إذا كان يجري تنزيل نموذج عند أول تشغيل.',
          },
          {
            q: 'هل هو تابع لـ Google أو Microsoft أو Yahoo؟',
            a: 'لا. يذكر إخلاء المسؤولية في الصفحة أن التطبيق مطوَّر باستقلالية وغير تابع لـ Google أو Microsoft أو Yahoo ولا معتمد منها ولا مدعوم من قِبلها؛ وتُذكر Gmail وGemini وOutlook فقط كخدمات متوافقة.',
          },
          {
            q: 'كيف يقارن بـ Agentic Inbox؟',
            a: 'Agentic Inbox عميل بريد ويب مفتوح المصدر تستضيفه في حساب Cloudflare الخاص بك، فيعمل ذكاؤه الاصطناعي في حسابك السحابي، أما Local AI Mail فتطبيق Android غير منشور الشيفرة المصدرية يعمل ذكاؤه الافتراضي على الهاتف.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Local AI Mail: On-Device Email فكرة جذابة: تطبيق بريد لنظام Android تُنفَّذ ملخصاته وترجماته ومسودات ردوده على الهاتف، ولا يُستخدم الذكاء السحابي إلا عندما تضيف مفتاحك الخاص. لكنه أيضًا منتج لم يُجرَّب بعد: الإصدار 1.0.2، ومطوّر فردي واحد، وشيفرة غير منشورة، ونموذج ومحرك غير مذكورين. يناسب مستخدمي Android الفضوليين الراغبين في التجربة بصندوق بريد ثانوي؛ ومن يحتاج إلى إعداد بريد مجرَّب وقابل للتدقيق فعليه أن يقارن أولًا [Agentic Inbox](/ar/power-local-llm/agentic-inbox-review) ثم يعود إلى هذا التطبيق عندما تتوافر له قاعدة مستخدمين وآراء مستقلة.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Local AI Mail: On-Device Email على Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — الوصف وملاحظات الإصدار وقسم أمان البيانات والسعر والعرض، جرى الاطلاع عليها في 11 أكتوبر 2026.',
          '[سياسة الخصوصية (باليابانية والإنجليزية)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — الأذونات وتدفق البيانات وتصريحات الذكاء السحابي، بتاريخ 27 سبتمبر 2026.',
          '[مدونة コーヒー坊主](https://co-hi-boy.blogspot.com/) — المدونة الشخصية للمطوّر، جرى الاطلاع عليها في 11 أكتوبر 2026؛ ولم يُعثر على موقع للمنتج.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Agentic Inbox](/ar/power-local-llm/agentic-inbox-review) — عميل بريد مفتوح المصدر ذاتي الاستضافة بوكيل ذكاء اصطناعي.',
          '[مراجعة Aori](/ar/power-local-llm/aori-ai-personal-agent-review) — وكيل شخصي محلي أولًا يعمل أيضًا على Android.',
          '[أتمتة البريد والتقويم بنماذج LLM محلية](/ar/power-local-llm/local-llm-email-and-calendar-automation) — بناء سير عمل للبريد والتقويم بنماذج محلية.',
          '[أفضل تطبيقات LLM المحلية لنظام Android](/ar/power-local-llm/best-local-llm-apps-android-2026) — الدليل الأوسع لتطبيقات Android.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-zh.webp',
    title: 'Local AI Mail 评测：刚刚上线、内置设备端 AI 的 Android 邮件应用',
    seoTitle: 'Local AI Mail 评测：设备端 AI 邮件应用（Android）',
    intro: 'Local AI Mail: On-Device Email 是由个人开发者[コーヒー坊主（CoffeeBozu）](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)发布在 Google Play 上的 Android 邮件应用，使用在手机上运行的 AI 模型来总结、翻译邮件并起草回复，也可以选择用自己的 API 密钥切换到 Google Gemini。它是版本号为 1.0.2 的非常早期的版本。本评测基于 2026 年 10 月 11 日查阅的 Google Play 页面和开发者的隐私政策；PromptQuorum 没有亲自测试这款应用。',
    metaDescription: 'Local AI Mail 评测：刚上线的 Android 邮件应用，用设备端 AI 总结、翻译邮件并起草回复。下载量 0+，未公开源码，未经测试。',
    twitterDescription: 'Local AI Mail 评测：非常早期的 Android 邮件应用，提供设备端 AI 总结、翻译和回复草稿。付费应用，未公开源码，尚未测试。',
    audience: '对带有设备端 AI 的邮件应用感兴趣的 Android 用户，想了解哪些内容有来源佐证、哪些只是开发者的说法，以及这款应用有多早期。',
    readTime: '阅读约5分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Mail 评测',
    targetKeywords: [
      'local ai mail 评测',
      'local ai mail android',
      '设备端 ai 邮件应用 android',
      '离线 ai 邮件客户端',
      '离线邮件总结 android',
      '本地 llm 邮件应用',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email 是一款非常早期的 Android 邮件应用，在手机上运行 AI 模型来总结、翻译邮件并起草回复，还可选择用自己的 API 密钥接入 Gemini 云端 AI。** 它是个人开发者的付费应用，Google Play 页面显示下载量为 0+，因此尚无用户使用记录。源代码未公开，也没有说明所用模型。',
    quickAnswerTop: {
      zh: {
        question: 'Local AI Mail 免费吗？它的 AI 能离线运行吗？',
        answer: '这是一款付费应用，但在 2026 年 10 月 11 日查看时，凭上线优惠可免费安装。据开发者介绍，默认的 AI 在手机上运行，无需联网；云端 AI 是可选开关，需要你自己的 Gemini API 密钥。',
        bullets: [
          '可总结邮件、在七种语言之间翻译，并以多种语气起草回复，适用于任何 IMAP/SMTP 账户。',
          '仅支持 Android，通过 [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) 获取；未列出 iPhone、桌面或网页版本。',
          '“数据安全”部分声明不收集、不共享数据，隐私政策称应用不含广告或跟踪 SDK。',
          '版本 1.0.2，2026 年 10 月 10 日更新（2026 年 10 月 11 日时的页面状态）。',
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
        label: 'Local AI Mail 是什么？',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '来源已确认的功能',
        anchor: 'key-features',
      },
      {
        label: '隐私与云端 AI',
        anchor: 'privacy',
      },
      {
        label: '我们无法核实的内容',
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
        label: '来源',
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
            text: 'Local AI Mail 是一款由个人开发者制作的付费且未公开源代码的 Android 邮件应用，使用设备端 AI 模型为 IMAP/SMTP 邮箱总结、翻译邮件并起草回复。',
          },
          {
            type: 'plain-terms',
            text: '你添加已有的邮箱账户后，手机上的 AI 会缩短长邮件、翻译并建议回复，除非你自己切换到云端 AI，否则文本不会离开设备。',
          },
        ],
        items: [
          '发布者：以 コーヒー坊主（CoffeeBozu）之名列出，是日本横滨的个人开发者；未发现公司、产品网站或源代码仓库。',
          'AI：支持 GPU（Vulkan）加速的设备端模型，外加可选的 Gemini 切换；模型和推理引擎均未说明。',
          '邮件：支持 Gmail、Outlook、Yahoo 和自定义域名服务器的 IMAP 与 SMTP，带会话视图、按发件人分组和设置备份。',
          '权限：隐私政策提到语音指令所需的麦克风权限，以及用于地址自动补全的通讯录权限。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '非常早期的版本：目前没有用户评价，没有长期稳定性记录，也没有安全方面的历史表现。这里的一切都是开发者自己的描述，PromptQuorum 没有测试过这款应用。请把它当作值得关注的有趣想法，而不是久经考验的邮件客户端，并在连接主要邮箱之前三思。',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'Local AI Mail 是什么？',
        content: [
          '**Local AI Mail: On-Device Email 是一款内置 AI 辅助功能的 Android 邮件应用，默认情况下 AI 在手机本机上运行。** 根据其 [Google Play 页面](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)，它支持标准的 IMAP 和 SMTP 账户，并提供总结、翻译、回复起草、日程提取和语音输入指令等功能。',
          '这款应用有三个名字：Play 上的标题是“Local AI Mail: On-Device Email”，日本商店中显示为“PrivaMail: ローカルAIメール”，隐私政策的日文部分称它为“LocalMail”。三者指的是同一个包 jp.coffeebozu.mailerai。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**该应用仅通过 Google Play 提供 Android 版本；未列出 iPhone、桌面或网页版本。**'],
        columns: ['平台', '获取渠道'],
        rows: [
          {
            '平台': 'Android',
            '获取渠道': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            '平台': '价格',
            '获取渠道': '$12.99（美国商店）；上线优惠 100% 折扣',
          },
          {
            '平台': '开发者博客',
            '获取渠道': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            '平台': '隐私政策',
            '获取渠道': '[隐私政策（日/英）](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            '平台': '源代码',
            '获取渠道': '未公开',
          },
        ],
        note: '未发现专门的产品网站；Play 页面只链接了开发者个人博客上的隐私政策。2026 年 10 月 11 日核实的版本：1.0.2，2026 年 10 月 10 日更新。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: ['**以下各项均来自 Google Play 的说明或开发者的隐私政策，均未经独立测试。**'],
        items: [
          '**总结与待办事项。** 一键生成含要点和列表的摘要，并从长邮件中提取待办事项。',
          '**翻译。** 收到的邮件可在英语、日语、西班牙语、法语、德语、中文和韩语之间翻译。',
          '**回复起草。** 以发件人的语言撰写回复，有三种语气：礼貌标准、接受同意、礼貌拒绝。',
          '**日历与语音。** 自动识别日期、时间和议程，可一键加入日历；给助手的指令可用语音口述。',
          '**邮件客户端。** 支持 Gmail、Outlook、Yahoo 和自定义域名等 IMAP/SMTP 账户，下拉刷新，按发件人分组的会话视图，以及账户设置的备份与恢复。',
        ],
        note: '页面称设备端 AI 使用 GPU 加速（Vulkan），但没有说明模型和推理引擎，因此无法确认模型规模、质量和设备要求。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与云端 AI',
        content: [
          '**Google Play 的“数据安全”部分声明“未收集任何数据”和“未与第三方共享数据”。** 开发者 2026 年 9 月 27 日的隐私政策补充说，账户凭据保存在加密的本地存储中，仅发送到你配置的邮件服务器，不会发送到开发者的服务器，并且应用不含第三方广告或跟踪 SDK。',
          '**按政策所述，设备端 AI 不发出网络请求；云端选项是例外。** 如果你填入 Gemini API 密钥并执行 AI 操作，邮件文本会通过 HTTPS 从手机直接发送到 Google 的 Gemini API，适用 Google 的条款。政策还提到语音指令需要麦克风权限（由 Android 系统语音识别处理），以及用于地址自动补全的通讯录权限。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，而不是审计结果，且源代码未公开。PromptQuorum 没有检查应用的网络流量。政策没有说明用于语音指令的 Android 语音识别服务是在设备上还是在 Google 服务器上处理音频；这取决于手机。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**源代码与许可证。** 未找到公开仓库或许可证文本，因此无法用代码验证其隐私声明。',
          '**实际质量与速度。** PromptQuorum 没有运行该应用，因此摘要质量、翻译准确度、速度和耗电情况均未知，模型、引擎和设备要求也未说明。',
          '**长邮件。** v1.0.2 的更新说明提到针对长邮件可一键切换到云端 AI，这暗示设备端模型有长度上限；来源没有说明上限是多少。',
          '**Gmail 和 Outlook 的登录。** 政策描述的是通过 IMAP/SMTP 使用邮箱地址和密码认证；对于需要应用专用密码或 OAuth 的账户如何处理，没有说明。',
          '**独立反馈。** 未找到关于该应用的第三方评测、评分或讨论。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格／许可证', '主要区别'],
        rows: [
          {
            '应用': '[Agentic Inbox](/zh/power-local-llm/agentic-inbox-review)',
            '平台': '网页（自托管）',
            '价格／许可证': '免费／Apache-2.0',
            '主要区别': '开源邮件客户端，AI 智能体运行在你自己的 Cloudflare 账户中',
          },
          {
            '应用': '[Aori](/zh/power-local-llm/aori-ai-personal-agent-review)',
            '平台': 'Windows、macOS、Linux、Android',
            '价格／许可证': '免费（测试版）',
            '主要区别': '通过 Ollama 实现本地优先的个人智能体；不是邮件客户端',
          },
          {
            '应用': '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)',
            '平台': 'Windows、macOS、Linux、iOS、Android',
            '价格／许可证': '免费增值／MIT',
            '主要区别': '基于 OpenClaw 智能体栈的 AI 同事，可本地或云端运行',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '上线优惠会结束吗？',
            a: 'Play 页面显示 100% 折扣的优惠将于 2026 年 10 月 18 日凌晨 1:59 结束（未标明时区）；之后恢复原价，各国的价格和优惠可能不同。',
          },
          {
            q: '可以离线使用吗？',
            a: '据开发者介绍，总结、翻译和草稿在设备上运行，无需联网；同步邮件和可选的 Gemini 云端 AI 需要网络。来源没有说明首次启动时是否会下载模型。',
          },
          {
            q: '它与 Google、Microsoft 或 Yahoo 有关联吗？',
            a: '没有。页面的免责声明称，该应用为独立开发，与 Google、Microsoft 或 Yahoo 没有关联，也未获得其认可或赞助；Gmail、Gemini 和 Outlook 只是作为兼容服务被提及。',
          },
          {
            q: '它与 Agentic Inbox 相比如何？',
            a: 'Agentic Inbox 是开源的网页邮件客户端，由你托管在自己的 Cloudflare 账户中，AI 因此运行在你的云账户里；而 Local AI Mail 是未公开源代码的 Android 应用，默认的 AI 在手机上运行。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Local AI Mail: On-Device Email 是个吸引人的想法：一款 Android 邮件应用，总结、翻译和回复草稿都在手机上完成，只有在你添加自己的密钥后才使用云端 AI。但它也是一款未经检验的产品：版本 1.0.2，只有一位个人开发者，源代码未公开，模型和引擎也未说明。它适合愿意用副邮箱尝鲜的好奇的 Android 用户；需要久经考验、可审计的邮件方案的人，应先比较 [Agentic Inbox](/zh/power-local-llm/agentic-inbox-review)，等这款应用有了用户基础和独立反馈后再回头看。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Local AI Mail: On-Device Email](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — 说明、更新说明、数据安全部分、价格和优惠，2026 年 10 月 11 日查阅。',
          '[隐私政策（日文和英文）](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — 权限、数据流向和云端 AI 的相关声明，日期为 2026 年 9 月 27 日。',
          '[コーヒー坊主的开发者博客](https://co-hi-boy.blogspot.com/) — 开发者的个人博客，2026 年 10 月 11 日查阅；未发现产品网站。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Agentic Inbox 评测](/zh/power-local-llm/agentic-inbox-review) — 带 AI 智能体的开源自托管邮件客户端。',
          '[Aori 评测](/zh/power-local-llm/aori-ai-personal-agent-review) — 同样可在 Android 上运行的本地优先个人智能体。',
          '[用本地 LLM 实现邮件与日历自动化](/zh/power-local-llm/local-llm-email-and-calendar-automation) — 用本地模型搭建邮件和日历工作流。',
          '[Android 上最好的本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-11',
    dateModified: '2026-10-11',
    next_refresh_due: '2027-04-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-mail-review-hero-ko.webp',
    title: 'Local AI Mail 리뷰: 기기 내 AI를 갖춘 출시 직후의 Android 메일 앱',
    seoTitle: 'Local AI Mail 리뷰: 기기 내 AI 메일 앱',
    intro: 'Local AI Mail: On-Device Email은 개인 개발자 [コーヒー坊主(CoffeeBozu)](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)가 Google Play에 공개한 Android 메일 앱입니다. 휴대폰에서 실행되는 AI 모델로 메일을 요약·번역하고 답장 초안을 작성하며, 본인의 API 키로 Google Gemini로 전환할 수도 있습니다. 버전 1.0.2의 매우 초기 릴리스입니다. 이 리뷰는 2026년 10월 11일에 확인한 Google Play 등록 정보와 개발자의 개인정보처리방침을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Local AI Mail 리뷰: 기기 내 AI로 메일을 요약·번역하고 답장 초안을 쓰는 출시 직후의 Android 메일 앱. 다운로드 0+, 소스 미공개, 미검증.',
    twitterDescription: 'Local AI Mail 리뷰: 기기 내 AI 요약, 번역, 답장 초안을 제공하는 매우 초기 단계의 Android 메일 앱. 유료, 소스 미공개, 아직 테스트 전.',
    audience: '기기 내 AI를 갖춘 메일 앱에 관심이 있고, 출처가 확인해 주는 내용과 개발자의 주장일 뿐인 내용, 그리고 앱이 얼마나 초기 단계인지 알고 싶은 Android 사용자.',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Mail 리뷰',
    targetKeywords: [
      'local ai mail 리뷰',
      'local ai mail android',
      '기기 내 ai 메일 앱 android',
      '오프라인 ai 메일 클라이언트',
      '오프라인 메일 요약 android',
      '로컬 llm 메일 앱',
      'jp.coffeebozu.mailerai',
    ],
    current_models_mentioned: ['Google Gemini'],
    current_hardware_mentioned: ['Android', 'GPU', 'Vulkan'],
    leadAnswerBlock: '**Local AI Mail: On-Device Email은 휴대폰에서 AI 모델을 실행해 메일을 요약·번역하고 답장 초안을 작성하는 매우 초기 단계의 Android 메일 앱이며, 본인의 API 키로 Gemini 클라우드 AI를 선택적으로 쓸 수 있습니다.** 개인 개발자가 만든 유료 앱이고 Google Play 등록 정보의 다운로드 수는 0+이므로 아직 사용자 실적이 없습니다. 소스 코드는 공개되어 있지 않고 모델도 명시되어 있지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Local AI Mail은 무료이고 AI는 오프라인으로 작동하나요?',
        answer: '유료 앱이지만 2026년 10월 11일 확인 시점에는 출시 기념 할인으로 무료 설치가 가능했습니다. 개발자에 따르면 기본 AI는 인터넷 연결 없이 휴대폰에서 실행되며, 클라우드 AI는 본인의 Gemini API 키가 필요한 선택형 전환입니다.',
        bullets: [
          '메일을 요약하고, 7개 언어 사이에서 번역하며, 여러 어조로 답장 초안을 작성합니다. 모든 IMAP/SMTP 계정에서 사용할 수 있습니다.',
          'Android 전용이며 [Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)에서 받을 수 있습니다. iPhone, 데스크톱, 웹 버전은 확인되지 않습니다.',
          '‘데이터 보안’ 항목은 수집·공유하는 데이터가 없다고 밝히고, 개인정보처리방침은 광고나 추적 SDK가 없다고 설명합니다.',
          '버전 1.0.2, 2026년 10월 10일 업데이트(2026년 10월 11일 기준 등록 정보).',
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
        label: 'Local AI Mail이란?',
        anchor: 'what-is-local-ai-mail',
      },
      {
        label: '구하는 방법',
        anchor: 'get-it',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '개인정보 보호와 클라우드 AI',
        anchor: 'privacy',
      },
      {
        label: '확인하지 못한 내용',
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
        label: '총평',
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
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Mail은 개인 개발자가 만든 소스 코드 미공개 유료 Android 메일 앱으로, 기기 내 AI 모델을 사용해 IMAP/SMTP 메일함의 메일을 요약·번역하고 답장 초안을 작성합니다.',
          },
          {
            type: 'plain-terms',
            text: '기존 메일 계정을 추가하면 휴대폰의 AI가 긴 메일을 줄이고, 번역하고, 답장을 제안합니다. 직접 클라우드 AI로 전환하지 않는 한 본문은 기기 안에 머뭅니다.',
          },
        ],
        items: [
          '게시자: コーヒー坊主(CoffeeBozu)라는 이름으로 등록된 일본 요코하마의 개인 개발자이며, 회사, 제품 웹사이트, 소스 코드 저장소는 확인되지 않았습니다.',
          'AI: GPU(Vulkan) 가속을 지원하는 기기 내 모델과 선택형 Gemini 전환. 모델과 추론 엔진은 명시되어 있지 않습니다.',
          '메일: Gmail, Outlook, Yahoo, 사용자 도메인 서버용 IMAP과 SMTP. 스레드 보기, 발신자별 그룹화, 설정 백업을 제공합니다.',
          '권한: 개인정보처리방침에는 음성 지시를 위한 마이크 접근과 주소 자동 완성을 위한 연락처 접근이 명시되어 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '매우 초기 단계의 릴리스입니다. 사용자 리뷰도, 장기적인 안정성 기록도, 보안 이력도 아직 없습니다. 여기 적힌 모든 내용은 개발자 본인의 설명이며 PromptQuorum은 앱을 테스트하지 않았습니다. 검증된 메일 클라이언트가 아니라 지켜볼 만한 흥미로운 아이디어로 보시고, 주 메일함을 연결하기 전에 신중히 생각하세요.',
          },
        ],
      },
      overview: {
        id: 'what-is-local-ai-mail',
        title: 'Local AI Mail이란?',
        content: [
          '**Local AI Mail: On-Device Email은 AI 지원 기능을 내장한 Android 메일 앱이며, 기본적으로 AI가 휴대폰 자체에서 실행됩니다.** [Google Play 등록 정보](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)에 따르면 표준 IMAP·SMTP 계정을 지원하고 요약, 번역, 답장 초안 작성, 일정 추출, 음성 지시 입력 기능을 더합니다.',
          '이 앱에는 세 가지 이름이 있습니다. Play 제목은 “Local AI Mail: On-Device Email”이고, 일본 스토어에서는 “PrivaMail: ローカルAIメール”로 표시되며, 개인정보처리방침의 일본어 부분에서는 “LocalMail”이라고 부릅니다. 셋 모두 같은 패키지 jp.coffeebozu.mailerai를 가리킵니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**이 앱은 Android용으로 Google Play에서만 제공되며, iPhone, 데스크톱, 웹 버전은 확인되지 않습니다.**',
        ],
        columns: ['플랫폼', '구하는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '구하는 곳': '[Google Play](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai)',
          },
          {
            '플랫폼': '가격',
            '구하는 곳': '₩19,000(한국 스토어), 출시 기념 100% 할인',
          },
          {
            '플랫폼': '개발자 블로그',
            '구하는 곳': '[co-hi-boy.blogspot.com](https://co-hi-boy.blogspot.com/)',
          },
          {
            '플랫폼': '개인정보처리방침',
            '구하는 곳': '[개인정보처리방침(일/영)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html)',
          },
          {
            '플랫폼': '소스 코드',
            '구하는 곳': '비공개',
          },
        ],
        note: '제품 전용 웹사이트는 찾지 못했습니다. Play 등록 정보는 개발자의 개인 블로그에 있는 개인정보처리방침만 링크합니다. 2026년 10월 11일 확인한 버전: 1.0.2(2026년 10월 10일 업데이트).',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 개발자의 개인정보처리방침에서 가져온 것이며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**요약과 할 일 추출.** 한 번의 터치로 핵심 내용과 글머리 기호 요약을 만들고, 긴 메일에서 할 일을 추출합니다.',
          '**번역.** 받은 메일을 영어, 일본어, 스페인어, 프랑스어, 독일어, 중국어, 한국어 사이에서 번역할 수 있습니다.',
          '**답장 초안.** 발신자의 언어로 세 가지 어조(정중한 표준, 수락·동의, 정중한 거절)의 답장을 작성합니다.',
          '**캘린더와 음성.** 날짜, 시간, 안건을 감지해 한 번의 터치로 캘린더에 추가할 수 있고, 어시스턴트에게 내리는 지시는 음성으로 입력할 수 있습니다.',
          '**메일 클라이언트.** Gmail, Outlook, Yahoo, 사용자 도메인 같은 IMAP/SMTP 계정, 당겨서 새로고침, 발신자별 그룹화가 있는 스레드 보기, 계정 설정 백업 및 복원을 지원합니다.',
        ],
        note: '등록 정보에는 기기 내 AI가 GPU 가속(Vulkan)을 사용한다고 되어 있지만 모델과 추론 엔진은 밝히지 않아, 모델 크기, 품질, 기기 요구 사항은 확인하지 못했습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 클라우드 AI',
        content: [
          '**Google Play의 ‘데이터 보안’ 항목은 “수집된 데이터 없음”과 “제3자와 공유되는 데이터 없음”을 명시합니다.** 2026년 9월 27일자 개발자의 개인정보처리방침은 계정 자격 증명이 암호화된 로컬 저장소에 보관되어 사용자가 설정한 메일 서버로만 전송되고, 개발자 서버로는 아무것도 전송되지 않으며, 제3자 광고나 추적 SDK가 포함되어 있지 않다고 덧붙입니다.',
          '**방침에 따르면 기기 내 AI는 네트워크 요청을 하지 않으며, 클라우드 옵션이 예외입니다.** Gemini API 키를 입력하고 AI 작업을 실행하면 메일 본문이 휴대폰에서 HTTPS로 Google의 Gemini API로 직접 전송되며 Google의 약관이 적용됩니다. 방침에는 Android 시스템 음성 인식으로 처리되는 음성 지시용 마이크 접근과 주소 자동 완성용 연락처 접근도 명시되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언일 뿐 감사 결과가 아니며 소스 코드도 공개되어 있지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 음성 지시에 쓰이는 Android 음성 인식 서비스가 오디오를 기기에서 처리하는지 Google 서버에서 처리하는지는 방침에 나와 있지 않으며, 휴대폰에 따라 다릅니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**소스 코드와 라이선스.** 공개 저장소나 라이선스 문서를 찾지 못해, 개인정보 보호 관련 주장을 코드로 확인할 수 없습니다.',
          '**실제 품질과 속도.** PromptQuorum은 앱을 실행하지 않았으므로 요약 품질, 번역 정확도, 속도, 배터리 소모는 알 수 없고, 모델, 엔진, 기기 요구 사항도 명시되어 있지 않습니다.',
          '**긴 메일.** v1.0.2 업데이트 내용에는 긴 메일에서 한 번의 터치로 클라우드 AI로 전환하는 기능이 있어, 기기 내 모델에 길이 한계가 있음을 짐작할 수 있지만 출처는 그 한계를 밝히지 않습니다.',
          '**Gmail과 Outlook 로그인.** 방침은 IMAP/SMTP를 통한 이메일 주소와 비밀번호 인증을 설명하지만, 앱 비밀번호나 OAuth가 필요한 계정을 어떻게 처리하는지는 설명하지 않습니다.',
          '**독립적인 평가.** 앱에 대한 제3자의 리뷰, 평점, 논의는 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Agentic Inbox](/ko/power-local-llm/agentic-inbox-review)',
            '플랫폼': '웹(자체 호스팅)',
            '가격 / 라이선스': '무료 / Apache-2.0',
            '핵심 차이': '본인 Cloudflare 계정에서 AI 에이전트가 동작하는 오픈소스 메일 클라이언트',
          },
          {
            '앱': '[Aori](/ko/power-local-llm/aori-ai-personal-agent-review)',
            '플랫폼': 'Windows, macOS, Linux, Android',
            '가격 / 라이선스': '무료(베타)',
            '핵심 차이': 'Ollama를 쓰는 로컬 우선 개인 에이전트이며 메일 클라이언트는 아님',
          },
          {
            '앱': '[Atomic Bot](/ko/power-local-llm/atomic-bot-review)',
            '플랫폼': 'Windows, macOS, Linux, iOS, Android',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이': 'OpenClaw 에이전트 스택 기반 AI 동료, 로컬 또는 클라우드 실행',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 등록 페이지에서 현재 가격, 라이선스, 플랫폼을 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '출시 기념 할인은 끝나나요?',
            a: 'Play 페이지에는 100% 할인이 2026년 10월 18일 오전 1:59에 종료된다고 표시되어 있었습니다(시간대는 표시되지 않음). 이후에는 정가가 적용되며 가격과 할인은 국가별로 다를 수 있습니다.',
          },
          {
            q: '오프라인에서 작동하나요?',
            a: '개발자에 따르면 요약, 번역, 초안 작성은 인터넷 연결 없이 기기에서 실행되며, 메일 동기화와 선택형 Gemini 클라우드 AI에는 네트워크가 필요합니다. 첫 실행 때 모델을 내려받는지는 출처에 나와 있지 않습니다.',
          },
          {
            q: 'Google, Microsoft, Yahoo와 관련이 있나요?',
            a: '아니요. 등록 정보의 면책 문구는 이 앱이 독립적으로 개발되었으며 Google, Microsoft, Yahoo와 제휴·승인·후원 관계가 없다고 밝힙니다. Gmail, Gemini, Outlook은 호환 서비스로만 언급됩니다.',
          },
          {
            q: 'Agentic Inbox와는 어떻게 다른가요?',
            a: 'Agentic Inbox는 본인의 Cloudflare 계정에 호스팅하는 오픈소스 웹 메일 클라이언트라 AI가 본인의 클라우드 계정에서 실행되는 반면, Local AI Mail은 기본 AI가 휴대폰에서 실행되는 소스 코드 미공개 Android 앱입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Local AI Mail: On-Device Email은 매력적인 아이디어입니다. 요약, 번역, 답장 초안이 휴대폰에서 실행되고, 클라우드 AI는 본인의 키를 추가했을 때만 사용됩니다. 동시에 검증되지 않은 제품이기도 합니다. 버전 1.0.2, 개인 개발자 한 명, 소스 코드 비공개, 명시되지 않은 모델과 엔진이 그 이유입니다. 보조 메일함으로 실험해 보고 싶은 호기심 많은 Android 사용자에게 어울립니다. 검증되고 감사 가능한 메일 환경이 필요하다면 먼저 [Agentic Inbox](/ko/power-local-llm/agentic-inbox-review)를 비교하고, 이 앱은 사용자 기반과 독립적인 평가가 생긴 뒤 다시 살펴보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Local AI Mail: On-Device Email](https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai) — 설명, 릴리스 노트, 데이터 보안 항목, 가격과 할인, 2026년 10월 11일 확인.',
          '[개인정보처리방침(일본어·영어)](https://co-hi-boy.blogspot.com/2026/09/privacy-policy-localmail.html) — 권한, 데이터 흐름, 클라우드 AI 관련 설명, 2026년 9월 27일자.',
          '[コーヒー坊主 개발자 블로그](https://co-hi-boy.blogspot.com/) — 개발자의 개인 블로그, 2026년 10월 11일 확인. 제품 웹사이트는 찾지 못했습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Agentic Inbox 리뷰](/ko/power-local-llm/agentic-inbox-review) — AI 에이전트를 갖춘 오픈소스 자체 호스팅 메일 클라이언트.',
          '[Aori 리뷰](/ko/power-local-llm/aori-ai-personal-agent-review) — Android에서도 실행되는 로컬 우선 개인 에이전트.',
          '[로컬 LLM으로 메일과 캘린더 자동화하기](/ko/power-local-llm/local-llm-email-and-calendar-automation) — 로컬 모델로 메일·캘린더 워크플로 구성하기.',
          '[Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 넓은 Android 앱 비교 가이드.',
        ],
      },
    },
  },
}
