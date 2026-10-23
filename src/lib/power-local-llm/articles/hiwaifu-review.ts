// HiWaifu Review: Cloud AI Character Chat for iPhone and iPad
// Slug: hiwaifu-review
// Companion to: tokforge-review, risuai-review, agnai-review, sillytavern-vs-agnai-vs-risuai-roleplay

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-en.webp',
    title: 'HiWaifu Review: Cloud AI Character Chat for iPhone and iPad',
    seoTitle: 'HiWaifu App Review 2026: iPhone, Pricing, Privacy',
    intro:
      'HiWaifu is a roleplay and chat app for iPhone and iPad, built around a community library of about 10 million AI characters. This review covers what its App Store listing and privacy notice document, what stays unclear, and how it compares with local and self-hosted roleplay tools.',
    metaDescription:
      'HiWaifu (hi waifu) is a freemium 18+ AI character chat app for iPhone and iPad. Version 3.10.1: login, web access, pricing, privacy, local alternatives.',
    twitterDescription:
      'HiWaifu review: a freemium iOS AI character chat app. Version 3.10.1, features, pricing, age rating, privacy notice, unverified points and local roleplay alternatives.',
    audience:
      'iPhone and iPad users who compare AI character chat apps and want to know whether HiWaifu is cloud or local, what it costs, and what its privacy notice does and does not say.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'HiWaifu review',
    targetKeywords: [
      'hiwaifu review',
      'hiwaifu app',
      'hi waifu',
      'hiwaifu login',
      'hiwaifu website',
      'hiwaifu ai character chat',
      'hiwaifu ios',
      'ai character chat iphone',
      'ai roleplay app iphone',
      'hiwaifu privacy',
      'hiwaifu alternatives',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu is a freemium, closed-source roleplay app for iPhone and iPad with AI characters, and it appears to be a cloud service rather than a local one.** The App Store listing does not say where the AI model runs, and it rates the app 18+. This review covers version 3.10.1 and is based on the public listing and privacy notice, not hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is HiWaifu a local AI app, and is it worth trying for character roleplay?',
        answer:
          'It is worth trying if you want a large ready-made character library on an iPhone and accept a cloud app with ads and optional paid tiers. It is not a fit if you need offline use or on-device privacy.',
        bullets: [
          'About 10 million community-made characters across anime, fantasy, romance, horror and everyday genres.',
          'Long-term memory, lorebooks, scene images and group chats of up to 10 characters.',
          'Tools to create your own characters and keep them private or share them.',
          'Fifteen interface languages, with automatic translation of chats.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get HiWaifu', anchor: 'get-it' },
      { label: 'What HiWaifu Is', anchor: 'what-is-hiwaifu' },
      { label: 'Features', anchor: 'features' },
      { label: 'Pricing, Age Rating and Privacy', anchor: 'privacy' },
      { label: 'What We Could Not Verify', anchor: 'not-verified' },
      { label: 'HiWaifu vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use HiWaifu', anchor: 'who-should-use' },
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
            text: 'HiWaifu, by the Hong Kong company Language Power Media Limited, is a freemium iPhone and iPad app for chatting and roleplaying with AI characters from a large community library.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a social app for AI characters: you pick or create a character, and the app keeps a memory of your story, with the heavy lifting apparently done on its servers.',
          },
        ],
        items: [
          'Version reviewed: 3.10.1, last updated on 2 October 2026, as shown on the [App Store listing](https://apps.apple.com/us/app/hiwaifu-ai-character-chat/id6447806780).',
          'Price: free to download, with in-app purchases for a subscription, a season pass and consumable packs.',
          'Platform: iPhone and iPad with iOS or iPadOS 15.0 or later.',
          'Openness: closed source; no public repository was found.',
          'Maintenance: at least eight releases between 26 June and 2 October 2026, so no stale-project warning applies.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'Get HiWaifu',
        content: [
          '**HiWaifu is distributed through the Apple App Store.** The download is 178 MB and free, with in-app purchases.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store',
            'Get It': '[HiWaifu: AI Character Chat on the App Store](https://apps.apple.com/us/app/hiwaifu-ai-character-chat/id6447806780)',
          },
          {
            'Channel': 'Website',
            'Get It': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'Channel': 'Privacy policy',
            'Get It': '[HiWaifu privacy notice](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'The listing covers Apple devices only. The official website answered our request with a bot check, so its content was not read; the link comes from the listing\'s developer-website field.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'What HiWaifu Is',
        content: [
          '**HiWaifu is a character chat and roleplay app that centers on a shared library of user-made AI characters.** The listing describes about 10 million characters and replies written like prose, with narration, quoted dialogue and, for adventure characters, a status display with location, stamina and quest progress.',
          'It is published by LANGUAGE POWER MEDIA LIMITED of Hong Kong. The release history starts in April 2023, and the listing calls it an AI companion and roleplay app, not a general assistant.',
          'This review draws on the App Store listing across several storefronts and the privacy notice. It includes no hands-on testing, so reply quality, speed and moderation are not rated here.',
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The listing\'s selling points are memory, world-building tools and a very large character catalog.** Everything below comes from the App Store description.',
        ],
        items: [
          '**Long-term memory.** The app remembers details you mention, so a character can ask about them days later.',
          '**Lorebooks and scenarios.** World-building entries and scenario images were added in versions 3.10.0 and 3.10.1.',
          '**Scene images.** Images are tied to the mood of the scene.',
          '**Group chats.** Up to 10 characters can share one conversation.',
          '**Character creation.** You can build characters and publish them or keep them to yourself.',
          '**Discovery.** Featured and ranking lists show what others are chatting with, and a short-video feed opens the chat of a character you like.',
          '**Languages.** The app is available in 15 languages with automatic chat translation.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing, Age Rating and Privacy',
        content: [
          '**HiWaifu is free to download, with ads and in-app purchases.** On the US App Store the monthly plan costs $12.99 and the season pass $29.99; a higher Premium+ tier, energy packs (200 for $1.99) and crystal and diamond packs are also sold. The listing says Premium removes ads and adds unlimited message energy and regeneration. Prices differ by storefront.',
          '**The App Store rates the app 18+.** In the German storefront the listing flags age verification, sexual content or nudity and frequent sexual innuendo, and says the app contains ads, messaging, user-generated content and social features. Treat it as an adult-only app.',
          '**The privacy notice is a general app notice.** It lists account data, social-login data, device and usage data, and a Pollfish survey SDK that receives advertising and device identifiers. It names Google Cloud Platform and Firebase as providers and gives a Hong Kong address. This review did not inspect network traffic, so these statements are the developer\'s own.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'What We Could Not Verify',
        content: ['**Several points that matter for a local-AI reader are not documented in any source we could read.**'],
        items: [
          'Which model it is and where it runs: neither the listing nor the privacy notice says. Server-side features such as synced memory and community characters suggest a cloud service.',
          'Whether chats are used to train models, and where they are stored: the privacy notice does not mention chat content or AI.',
          'Offline use: no offline mode is listed.',
          'An Android version, and anything the official website says: the site blocked our request.',
          'The licence and source code: no public repository was found.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Where the AI runs', 'Key difference'],
        rows: [
          {
            'App': 'HiWaifu',
            'Platforms': 'iPhone, iPad',
            'Price and license': 'Freemium, closed source',
            'Where the AI runs': 'Not stated; server features',
            'Key difference': 'Huge ready-made character library; 18+ rating',
          },
          {
            'App': '[TokForge](/power-local-llm/tokforge-review)',
            'Platforms': 'Android',
            'Price and license': 'Free, proprietary',
            'Where the AI runs': 'On the device',
            'Key difference': 'Offline roleplay characters, image generation and voice',
          },
          {
            'App': '[RisuAI](/power-local-llm/risuai-review)',
            'Platforms': 'Web, desktop, mobile',
            'Price and license': 'Free, GPL 3.0',
            'Where the AI runs': 'Your chosen backend',
            'Key difference': 'Open-source roleplay frontend with character cards',
          },
          {
            'App': '[Agnai](/power-local-llm/agnai-review)',
            'Platforms': 'Web',
            'Price and license': 'Free, AGPL-3.0',
            'Where the AI runs': 'Your chosen backend',
            'Key difference': 'Open-source web frontend with character cards',
          },
        ],
        note: 'Platform, price and feature details for third-party apps change often. Check each app\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use HiWaifu',
        items: [
          '**Adults who want characters to chat with right away.** Nothing needs setting up.',
          '**Storytellers who value memory and lorebooks.** Both are core features.',
          '**Not for offline or on-device privacy needs.** Try [TokForge](/power-local-llm/tokforge-review) on Android, or [RisuAI](/power-local-llm/risuai-review) with a local backend.',
          '**Not for anyone under 18.** The App Store rating is 18+.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a HiWaifu login, website or web version?',
            a: 'The App Store listing covers iPhone, iPad, Apple-silicon Macs and visionOS only, and links [hiwaifu.com](https://www.hiwaifu.com) as the developer website. Our request to that site hit a bot check, so we could not confirm a browser version or a login page. The privacy notice mentions account data and social-login data, so the app apparently works with an account.',
          },
          {
            q: 'Is "Hi Waifu" the same app as HiWaifu?',
            a: 'The App Store listing spells the name as one word, "HiWaifu: AI Character Chat", with the ID 6447806780. If you searched for "Hi Waifu" as two words, check that the ID in this review\'s link matches.',
          },
          {
            q: 'Does HiWaifu run on Mac, Apple Vision or Android?',
            a: 'The listing shows Apple-silicon Macs and visionOS 1.0 or later, with a note that the Mac version is not verified for macOS. We did not verify an Android app.',
          },
          {
            q: 'Can I run HiWaifu offline or with my own local model?',
            a: 'No offline mode or local-model option is listed. For local roleplay, see the open-source frontends in the comparison above.',
          },
          {
            q: 'Why does the app appear under different names?',
            a: 'The storefronts localize the title, for example "HiWaifu: KI-Charakter-Chat" in Germany and "HiWaifu: AI Character Chat" in the US. It is one app with the same App Store ID.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'HiWaifu is a good fit on paper for adults who want a large character catalog with long-term memory, lorebooks and group chats on an iPhone.',
          'It is the wrong tool for offline or on-device privacy. For those needs start with [TokForge](/power-local-llm/tokforge-review) or a self-hosted frontend such as [RisuAI](/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[HiWaifu: AI Character Chat on the App Store](https://apps.apple.com/us/app/hiwaifu-ai-character-chat/id6447806780) — version, features, pricing, requirements, age rating and version history.',
          '[HiWaifu privacy notice](https://www.hiwaifu.com/privacy.html) — data collected and providers named.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[TokForge Review](/power-local-llm/tokforge-review) — offline Android chat with roleplay characters and image generation.',
          '[RisuAI Review](/power-local-llm/risuai-review) — an open-source roleplay frontend for web, desktop and mobile.',
          '[Agnai Review](/power-local-llm/agnai-review) — an open-source web roleplay frontend with character cards.',
          '[SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — three roleplay frontends compared.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-de.webp',
    title: 'HiWaifu Rezension: KI-Charakter-Chat aus der Cloud für iPhone und iPad',
    seoTitle: 'HiWaifu App Rezension 2026: iPhone, Preise, Datenschutz',
    intro:
      'HiWaifu ist eine iPhone- und iPad-App für Rollenspiele und Chats mit KI-Charakteren, aufgebaut um eine Community-Bibliothek mit rund 10 Millionen Charakteren. Diese Rezension zeigt, was App-Store-Eintrag und Datenschutzerklärung belegen, was offen bleibt und wie die App im Vergleich zu lokalen und selbst gehosteten Rollenspiel-Tools abschneidet.',
    metaDescription:
      'HiWaifu (Hi Waifu) ist eine Freemium-KI-Charakter-Chat-App ab 18 für iPhone und iPad. Version 3.10.1: Login, Web-Zugang, Preise, Datenschutz, Alternativen.',
    twitterDescription:
      'HiWaifu Rezension: eine Freemium-KI-Charakter-Chat-App für iOS. Version 3.10.1, Funktionen, Preise, Altersfreigabe, Datenschutz, ungeprüfte Punkte und lokale Rollenspiel-Alternativen.',
    audience:
      'iPhone- und iPad-Nutzer, die KI-Charakter-Chat-Apps vergleichen und wissen möchten, ob HiWaifu Cloud oder lokal läuft, was es kostet und was die Datenschutzerklärung aussagt und was nicht.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'HiWaifu Rezension',
    targetKeywords: [
      'hiwaifu test',
      'hiwaifu app',
      'hiwaifu ki-charakter-chat',
      'hiwaifu ios',
      'ki charakter chat iphone',
      'ki rollenspiel app iphone',
      'hiwaifu datenschutz',
      'hiwaifu alternativen',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu ist eine Freemium-App mit geschlossenem Quellcode für Rollenspiele mit KI-Charakteren auf iPhone und iPad und scheint ein Cloud-Dienst statt einer lokalen Lösung zu sein.** Der App-Store-Eintrag sagt nicht, wo das KI-Modell läuft, und stuft die App ab 18 ein. Diese Rezension behandelt Version 3.10.1 und stützt sich auf den öffentlichen Eintrag und die Datenschutzerklärung, nicht auf eigene Tests.',
    quickAnswerTop: {
      de: {
        question: 'Ist HiWaifu eine lokale KI-App, und lohnt sie sich für Charakter-Rollenspiele?',
        answer:
          'Sie lohnt sich, wenn Sie eine große fertige Charakter-Bibliothek auf dem iPhone möchten und eine Cloud-App mit Werbung und optionalen Bezahlstufen akzeptieren. Nicht geeignet ist sie, wenn Sie Offline-Nutzung oder Datenschutz auf dem Gerät brauchen.',
        bullets: [
          'Rund 10 Millionen Community-Charaktere aus Anime, Fantasy, Romance, Horror und Alltag.',
          'Langzeitgedächtnis, Lorebooks, Szenenbilder und Gruppenchats mit bis zu 10 Charakteren.',
          'Werkzeuge, um eigene Charaktere zu erstellen und privat zu halten oder zu teilen.',
          'Fünfzehn Oberflächensprachen mit automatischer Übersetzung der Chats.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'HiWaifu herunterladen', anchor: 'get-it' },
      { label: 'Was HiWaifu ist', anchor: 'what-is-hiwaifu' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Preise, Altersfreigabe und Datenschutz', anchor: 'privacy' },
      { label: 'Was wir nicht prüfen konnten', anchor: 'not-verified' },
      { label: 'HiWaifu im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen HiWaifu geeignet ist', anchor: 'who-should-use' },
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
            text: 'HiWaifu des Hongkonger Unternehmens Language Power Media Limited ist eine Freemium-App für iPhone und iPad, mit der Sie mit KI-Charakteren aus einer großen Community-Bibliothek chatten und Rollenspiele spielen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als soziale App für KI-Charaktere vor: Sie wählen oder erstellen einen Charakter, die App merkt sich Ihre Geschichte, und die Rechenarbeit erledigen offenbar die Server.',
          },
        ],
        items: [
          'Geprüfte Version: 3.10.1, zuletzt aktualisiert am 2. Oktober 2026, laut [App-Store-Eintrag](https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780).',
          'Preis: kostenloser Download mit In-App-Käufen für ein Abo, einen Saisonpass und Verbrauchspakete.',
          'Plattform: iPhone und iPad mit iOS oder iPadOS 15.0 oder neuer.',
          'Offenheit: Quellcode geschlossen; ein öffentliches Repository wurde nicht gefunden.',
          'Pflege: mindestens acht Veröffentlichungen zwischen dem 26. Juni und dem 2. Oktober 2026, daher gilt keine Warnung vor einem eingeschlafenen Projekt.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'HiWaifu herunterladen',
        content: [
          '**HiWaifu wird über den Apple App Store vertrieben.** Der Download ist 178 MB groß und kostenlos, mit In-App-Käufen.',
        ],
        columns: ['Kanal', 'Bezugsquelle'],
        rows: [
          {
            'Kanal': 'Apple App Store',
            'Bezugsquelle': '[HiWaifu: KI-Charakter-Chat im App Store](https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780)',
          },
          {
            'Kanal': 'Website',
            'Bezugsquelle': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'Kanal': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung von HiWaifu](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'Der Eintrag deckt nur Apple-Geräte ab. Die offizielle Website beantwortete unsere Anfrage mit einer Bot-Prüfung, ihr Inhalt wurde daher nicht gelesen; der Link stammt aus dem Feld „Entwickler-Website“ des Eintrags.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'Was HiWaifu ist',
        content: [
          '**HiWaifu ist eine Charakter-Chat- und Rollenspiel-App rund um eine gemeinsame Bibliothek von Nutzern erstellter KI-Charaktere.** Der Eintrag nennt rund 10 Millionen Charaktere und Antworten, die wie Prosa geschrieben sind, mit Erzähltext, wörtlicher Rede und bei Abenteuer-Charakteren einer Statusanzeige für Ort, Ausdauer und Questfortschritt.',
          'Veröffentlicht wird sie von LANGUAGE POWER MEDIA LIMITED aus Hongkong. Die Veröffentlichungshistorie beginnt im April 2023, und der Eintrag beschreibt sie als KI-Begleiter- und Rollenspiel-App, nicht als allgemeinen Assistenten.',
          'Diese Rezension stützt sich auf den App-Store-Eintrag in mehreren Länderstores und auf die Datenschutzerklärung. Eigene Tests gab es nicht, daher werden Antwortqualität, Tempo und Moderation hier nicht bewertet.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Die Verkaufsargumente des Eintrags sind Gedächtnis, Werkzeuge zum Weltenbau und ein sehr großer Charakterkatalog.** Alles Folgende stammt aus der App-Store-Beschreibung.',
        ],
        items: [
          '**Langzeitgedächtnis.** Die App merkt sich Details, die Sie erwähnen, sodass ein Charakter Tage später danach fragen kann.',
          '**Lorebooks und Szenarien.** Einträge zum Weltenbau und Szenenbilder kamen mit den Versionen 3.10.0 und 3.10.1 hinzu.',
          '**Szenenbilder.** Die Bilder richten sich nach der Stimmung der Szene.',
          '**Gruppenchats.** Bis zu 10 Charaktere können an einer Unterhaltung teilnehmen.',
          '**Charaktererstellung.** Sie können Charaktere bauen und veröffentlichen oder für sich behalten.',
          '**Entdecken.** Listen mit Empfehlungen und Ranglisten zeigen, mit wem andere gerade chatten, und ein Kurzvideo-Feed öffnet den Chat eines Charakters, der Ihnen gefällt.',
          '**Sprachen.** Die App ist in 15 Sprachen verfügbar, mit automatischer Übersetzung der Chats.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise, Altersfreigabe und Datenschutz',
        content: [
          '**HiWaifu lässt sich kostenlos laden, mit Werbung und In-App-Käufen.** Im deutschen App Store kostet das Monatsabo 14,99 € und der Saisonpass 34,99 €; außerdem gibt es eine höhere Stufe Premium+, Energiepakete (200 für 1,99 €) sowie Kristall- und Diamantpakete. Laut Eintrag entfernt Premium die Werbung und bietet unbegrenzte Nachrichtenenergie und Neugenerierung. Die Preise unterscheiden sich je nach Store.',
          '**Der App Store stuft die App ab 18 ein.** Im deutschen Store nennt der Eintrag Altersprüfung, sexuelle Inhalte oder Nacktheit sowie häufige sexuelle Anspielungen und weist darauf hin, dass die App Werbung, Nachrichten, nutzergenerierte Inhalte und soziale Funktionen enthält. Behandeln Sie sie als App nur für Erwachsene.',
          '**Die Datenschutzerklärung ist eine allgemeine App-Erklärung.** Sie nennt Kontodaten, Daten aus Social-Logins, Geräte- und Nutzungsdaten sowie ein Pollfish-Umfrage-SDK, das Werbe- und Geräte-IDs erhält. Als Anbieter werden Google Cloud Platform und Firebase genannt, dazu eine Adresse in Hongkong. Diese Rezension hat den Netzwerkverkehr nicht untersucht, die Aussagen stammen also vom Entwickler selbst.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'Was wir nicht prüfen konnten',
        content: ['**Mehrere Punkte, die für Leser lokaler KI wichtig sind, sind in keiner von uns lesbaren Quelle dokumentiert.**'],
        items: [
          'Wo das KI-Modell läuft und welches Modell es ist: Weder Eintrag noch Datenschutzerklärung sagen es. Serverseitige Funktionen wie synchronisiertes Gedächtnis und Community-Charaktere deuten auf einen Cloud-Dienst hin.',
          'Ob Chats zum Training von Modellen genutzt werden und wo sie gespeichert sind: Die Datenschutzerklärung erwähnt weder Chat-Inhalte noch KI.',
          'Offline-Nutzung: Ein Offline-Modus ist nicht aufgeführt.',
          'Eine Android-Version und alles, was die offizielle Website sagt: Die Seite blockierte unsere Anfrage.',
          'Lizenz und Quellcode: Ein öffentliches Repository wurde nicht gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu im Vergleich zu Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Wo die KI läuft', 'Hauptunterschied'],
        rows: [
          {
            'App': 'HiWaifu',
            'Plattformen': 'iPhone, iPad',
            'Preis und Lizenz': 'Freemium, Quellcode geschlossen',
            'Wo die KI läuft': 'Nicht angegeben; Serverfunktionen',
            'Hauptunterschied': 'Riesige fertige Charakter-Bibliothek; ab 18',
          },
          {
            'App': '[TokForge](/de/power-local-llm/tokforge-review)',
            'Plattformen': 'Android',
            'Preis und Lizenz': 'Kostenlos, proprietär',
            'Wo die KI läuft': 'Auf dem Gerät',
            'Hauptunterschied': 'Offline-Rollenspiel-Charaktere, Bilderzeugung und Sprache',
          },
          {
            'App': '[RisuAI](/de/power-local-llm/risuai-review)',
            'Plattformen': 'Web, Desktop, Mobil',
            'Preis und Lizenz': 'Kostenlos, GPL 3.0',
            'Wo die KI läuft': 'Ihr gewähltes Backend',
            'Hauptunterschied': 'Quelloffenes Rollenspiel-Frontend mit Charakterkarten',
          },
          {
            'App': '[Agnai](/de/power-local-llm/agnai-review)',
            'Plattformen': 'Web',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            'Wo die KI läuft': 'Ihr gewähltes Backend',
            'Hauptunterschied': 'Quelloffenes Web-Frontend mit Charakterkarten',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Apps von Drittanbietern ändern sich häufig. Prüfen Sie vor der Entscheidung die jeweilige Seite der App.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen HiWaifu geeignet ist',
        items: [
          '**Erwachsene, die sofort mit Charakteren chatten möchten.** Es muss nichts eingerichtet werden.',
          '**Geschichtenerzähler, denen Gedächtnis und Lorebooks wichtig sind.** Beides sind Kernfunktionen.',
          '**Nicht für Offline-Nutzung oder Datenschutz auf dem Gerät.** Probieren Sie [TokForge](/de/power-local-llm/tokforge-review) unter Android oder [RisuAI](/de/power-local-llm/risuai-review) mit lokalem Backend.',
          '**Nicht für Personen unter 18.** Die Einstufung im App Store ist ab 18.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es ein HiWaifu-Login, eine Website oder eine Web-Version?',
            a: 'Der App-Store-Eintrag nennt nur iPhone, iPad, Macs mit Apple-Chip und visionOS und verlinkt [hiwaifu.com](https://www.hiwaifu.com) als Entwickler-Website. Unsere Anfrage an diese Seite landete bei einer Bot-Prüfung, daher konnten wir weder eine Browser-Version noch eine Login-Seite bestätigen. Die Datenschutzerklärung erwähnt Kontodaten und Daten aus Social-Logins, die App arbeitet also offenbar mit einem Konto.',
          },
          {
            q: 'Ist „Hi Waifu“ dieselbe App wie HiWaifu?',
            a: 'Der App-Store-Eintrag schreibt den Namen zusammen, „HiWaifu: AI Character Chat“, mit der ID 6447806780. Wer „Hi Waifu“ getrennt gesucht hat, sollte prüfen, ob die ID im Link dieser Rezension übereinstimmt.',
          },
          {
            q: 'Läuft HiWaifu auf Mac, Apple Vision oder Android?',
            a: 'Der Eintrag nennt Macs mit Apple-Chip und visionOS 1.0 oder neuer, mit dem Hinweis, dass die Mac-Version nicht für macOS geprüft ist. Eine Android-App haben wir nicht verifiziert.',
          },
          {
            q: 'Kann ich HiWaifu offline oder mit einem eigenen lokalen Modell nutzen?',
            a: 'Ein Offline-Modus oder eine Option für lokale Modelle ist nicht aufgeführt. Für lokale Rollenspiele sehen Sie sich die quelloffenen Frontends im Vergleich oben an.',
          },
          {
            q: 'Warum erscheint die App unter verschiedenen Namen?',
            a: 'Die Stores lokalisieren den Titel, etwa „HiWaifu: KI-Charakter-Chat“ in Deutschland und „HiWaifu: AI Character Chat“ in den USA. Es ist dieselbe App mit derselben App-Store-ID.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'HiWaifu passt auf dem Papier zu Erwachsenen, die auf dem iPhone einen großen Charakterkatalog mit Langzeitgedächtnis, Lorebooks und Gruppenchats wünschen.',
          'Für Offline-Nutzung oder Datenschutz auf dem Gerät ist sie das falsche Werkzeug. Beginnen Sie dafür mit [TokForge](/de/power-local-llm/tokforge-review) oder einem selbst gehosteten Frontend wie [RisuAI](/de/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[HiWaifu: KI-Charakter-Chat im App Store](https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780) — Version, Funktionen, Preise, Anforderungen, Altersfreigabe und Versionsverlauf.',
          '[Datenschutzerklärung von HiWaifu](https://www.hiwaifu.com/privacy.html) — erhobene Daten und genannte Anbieter.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[TokForge Rezension](/de/power-local-llm/tokforge-review) — Offline-Chat für Android mit Rollenspiel-Charakteren und Bilderzeugung.',
          '[RisuAI Rezension](/de/power-local-llm/risuai-review) — ein quelloffenes Rollenspiel-Frontend für Web, Desktop und Mobilgeräte.',
          '[Agnai Rezension](/de/power-local-llm/agnai-review) — ein quelloffenes Web-Rollenspiel-Frontend mit Charakterkarten.',
          '[SillyTavern, Agnai und RisuAI im Vergleich](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — drei Rollenspiel-Frontends im Vergleich.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-fr.webp',
    title: 'Avis HiWaifu : chat avec personnages IA dans le cloud pour iPhone et iPad',
    seoTitle: 'Avis HiWaifu 2026 : appli iPhone, prix, confidentialité',
    intro:
      'HiWaifu est une application iPhone et iPad de jeu de rôle et de discussion avec des personnages IA, construite autour d\'une bibliothèque communautaire d\'environ 10 millions de personnages. Cet avis couvre ce que la fiche App Store et la politique de confidentialité documentent, ce qui reste flou et comment l\'appli se compare aux outils de jeu de rôle locaux et auto-hébergés.',
    metaDescription:
      'HiWaifu (Hi Waifu) : appli freemium 18+ de chat avec personnages IA sur iPhone. Version 3.10.1 : connexion, accès web, prix, confidentialité, alternatives.',
    twitterDescription:
      'Avis HiWaifu : une appli iOS freemium de chat avec personnages IA. Version 3.10.1, fonctions, prix, âge minimal, confidentialité, points non vérifiés et alternatives locales de jeu de rôle.',
    audience:
      'Utilisateurs d\'iPhone et d\'iPad qui comparent les applis de chat avec personnages IA et veulent savoir si HiWaifu fonctionne dans le cloud ou en local, ce qu\'elle coûte et ce que sa politique de confidentialité dit ou ne dit pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis HiWaifu',
    targetKeywords: [
      'avis hiwaifu',
      'hiwaifu appli',
      'hiwaifu chat personnages ia',
      'hiwaifu ios',
      'chat personnage ia iphone',
      'appli jeu de rôle ia iphone',
      'hiwaifu confidentialité',
      'alternatives à hiwaifu',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu est une appli freemium à code fermé pour jouer des rôles avec des personnages IA sur iPhone et iPad, et elle semble être un service cloud plutôt que local.** La fiche App Store n\'indique pas où tourne le modèle d\'IA et classe l\'appli 18+. Cet avis porte sur la version 3.10.1 et repose sur la fiche publique et la politique de confidentialité, pas sur des tests pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'HiWaifu est-elle une appli d\'IA locale, et vaut-elle le coup pour le jeu de rôle avec personnages ?',
        answer:
          'Elle vaut le coup si vous voulez une grande bibliothèque de personnages prête à l\'emploi sur iPhone et acceptez une appli cloud avec publicités et offres payantes facultatives. Elle ne convient pas si vous avez besoin d\'un usage hors ligne ou de confidentialité sur l\'appareil.',
        bullets: [
          'Environ 10 millions de personnages créés par la communauté : anime, fantasy, romance, horreur et vie quotidienne.',
          'Mémoire longue, lorebooks, images de scène et discussions de groupe jusqu\'à 10 personnages.',
          'Outils pour créer vos propres personnages et les garder privés ou les partager.',
          'Quinze langues d\'interface, avec traduction automatique des discussions.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir HiWaifu', anchor: 'get-it' },
      { label: 'Ce qu\'est HiWaifu', anchor: 'what-is-hiwaifu' },
      { label: 'Fonctions', anchor: 'features' },
      { label: 'Prix, âge minimal et confidentialité', anchor: 'privacy' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'not-verified' },
      { label: 'HiWaifu face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'À qui s\'adresse HiWaifu', anchor: 'who-should-use' },
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
            text: 'HiWaifu, de la société hongkongaise Language Power Media Limited, est une appli freemium pour iPhone et iPad qui permet de discuter et de jouer des rôles avec des personnages IA issus d\'une grande bibliothèque communautaire.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un réseau social de personnages IA : vous choisissez ou créez un personnage, l\'appli garde la mémoire de votre histoire, et le gros du calcul semble fait sur ses serveurs.',
          },
        ],
        items: [
          'Version testée : 3.10.1, mise à jour le 2 octobre 2026, d\'après la [fiche App Store](https://apps.apple.com/fr/app/id6447806780).',
          'Prix : téléchargement gratuit, avec achats intégrés pour un abonnement, un pass de saison et des packs consommables.',
          'Plateforme : iPhone et iPad sous iOS ou iPadOS 15.0 ou ultérieur.',
          'Ouverture : code fermé ; aucun dépôt public trouvé.',
          'Maintenance : au moins huit versions entre le 26 juin et le 2 octobre 2026, donc aucun avertissement de projet délaissé.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'Obtenir HiWaifu',
        content: [
          '**HiWaifu est distribuée via l\'Apple App Store.** Le téléchargement pèse 178 Mo et est gratuit, avec achats intégrés.',
        ],
        columns: ['Canal', 'Où l\'obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Où l\'obtenir': '[HiWaifu sur l\'App Store](https://apps.apple.com/fr/app/id6447806780)',
          },
          {
            'Canal': 'Site web',
            'Où l\'obtenir': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'Canal': 'Politique de confidentialité',
            'Où l\'obtenir': '[Politique de confidentialité de HiWaifu](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'La fiche ne couvre que les appareils Apple. Le site officiel a répondu à notre requête par un contrôle anti-bot ; son contenu n\'a donc pas été lu et le lien vient du champ « site web du développeur » de la fiche.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'Ce qu\'est HiWaifu',
        content: [
          '**HiWaifu est une appli de chat de personnages et de jeu de rôle centrée sur une bibliothèque partagée de personnages IA créés par les utilisateurs.** La fiche évoque environ 10 millions de personnages et des réponses écrites comme de la prose, avec narration, dialogues entre guillemets et, pour les personnages d\'aventure, un affichage d\'état (lieu, endurance, progression de quête).',
          'Elle est publiée par LANGUAGE POWER MEDIA LIMITED, à Hong Kong. L\'historique des versions commence en avril 2023, et la fiche la présente comme une appli de compagnon IA et de jeu de rôle, pas comme un assistant généraliste.',
          'Cet avis s\'appuie sur la fiche App Store de plusieurs pays et sur la politique de confidentialité. Il n\'inclut aucun test pratique : qualité des réponses, vitesse et modération ne sont donc pas évaluées ici.',
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctions',
        content: [
          '**Les arguments de la fiche sont la mémoire, les outils de création de mondes et un très grand catalogue de personnages.** Tout ce qui suit vient de la description App Store.',
        ],
        items: [
          '**Mémoire longue.** L\'appli retient les détails que vous mentionnez, si bien qu\'un personnage peut les évoquer des jours plus tard.',
          '**Lorebooks et scénarios.** Les entrées de création de monde et les images de scénario ont été ajoutées dans les versions 3.10.0 et 3.10.1.',
          '**Images de scène.** Les images suivent l\'ambiance de la scène.',
          '**Discussions de groupe.** Jusqu\'à 10 personnages peuvent partager une conversation.',
          '**Création de personnages.** Vous pouvez en construire et les publier ou les garder pour vous.',
          '**Découverte.** Des listes de sélection et de classement montrent avec qui les autres discutent, et un flux de courtes vidéos ouvre la discussion d\'un personnage qui vous plaît.',
          '**Langues.** L\'appli est disponible en 15 langues, avec traduction automatique des discussions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Prix, âge minimal et confidentialité',
        content: [
          '**HiWaifu se télécharge gratuitement, avec publicités et achats intégrés.** Sur l\'App Store français, l\'abonnement mensuel coûte 14,99 € et le pass de saison 34,99 € ; un niveau Premium+ supérieur, des packs d\'énergie (200 pour 1,99 €) et des packs de cristaux et de diamants sont aussi vendus. Selon la fiche, Premium supprime les publicités et ajoute l\'énergie de messages illimitée et la régénération. Les prix varient selon le pays.',
          '**L\'App Store classe l\'appli 18+.** Dans la boutique allemande, la fiche signale une vérification de l\'âge, du contenu sexuel ou de la nudité et de fréquentes allusions sexuelles, et précise que l\'appli contient des publicités, de la messagerie, du contenu généré par les utilisateurs et des fonctions sociales. Considérez-la comme réservée aux adultes.',
          '**La politique de confidentialité est une notice d\'appli générale.** Elle énumère les données de compte, les données de connexion sociale, les données d\'appareil et d\'usage, ainsi qu\'un SDK d\'enquête Pollfish qui reçoit des identifiants publicitaires et d\'appareil. Elle nomme Google Cloud Platform et Firebase comme prestataires et donne une adresse à Hong Kong. Cet avis n\'a pas inspecté le trafic réseau : ces déclarations sont celles du développeur.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: ['**Plusieurs points importants pour un lecteur d\'IA locale ne sont documentés dans aucune source que nous avons pu lire.**'],
        items: [
          'Où tourne le modèle d\'IA et de quel modèle il s\'agit : ni la fiche ni la politique de confidentialité ne le disent. Des fonctions côté serveur comme la mémoire synchronisée et les personnages communautaires laissent penser à un service cloud.',
          'Si les discussions servent à entraîner des modèles et où elles sont stockées : la politique de confidentialité ne mentionne ni le contenu des discussions ni l\'IA.',
          'L\'usage hors ligne : aucun mode hors ligne n\'est indiqué.',
          'Une version Android et tout ce que dit le site officiel : le site a bloqué notre requête.',
          'La licence et le code source : aucun dépôt public n\'a été trouvé.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu face aux alternatives',
        columns: ['Appli', 'Plateformes', 'Prix et licence', 'Où tourne l\'IA', 'Différence clé'],
        rows: [
          {
            'Appli': 'HiWaifu',
            'Plateformes': 'iPhone, iPad',
            'Prix et licence': 'Freemium, code fermé',
            'Où tourne l\'IA': 'Non indiqué ; fonctions serveur',
            'Différence clé': 'Immense bibliothèque de personnages ; 18+',
          },
          {
            'Appli': '[TokForge](/fr/power-local-llm/tokforge-review)',
            'Plateformes': 'Android',
            'Prix et licence': 'Gratuit, propriétaire',
            'Où tourne l\'IA': 'Sur l\'appareil',
            'Différence clé': 'Personnages de jeu de rôle hors ligne, images et voix',
          },
          {
            'Appli': '[RisuAI](/fr/power-local-llm/risuai-review)',
            'Plateformes': 'Web, bureau, mobile',
            'Prix et licence': 'Gratuit, GPL 3.0',
            'Où tourne l\'IA': 'Le backend de votre choix',
            'Différence clé': 'Interface de jeu de rôle open source avec cartes de personnage',
          },
          {
            'Appli': '[Agnai](/fr/power-local-llm/agnai-review)',
            'Plateformes': 'Web',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Où tourne l\'IA': 'Le backend de votre choix',
            'Différence clé': 'Interface web open source avec cartes de personnage',
          },
        ],
        note: 'Les plateformes, prix et fonctions des applis tierces changent souvent. Vérifiez la page de chaque appli avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse HiWaifu',
        items: [
          '**Les adultes qui veulent discuter tout de suite avec des personnages.** Rien à configurer.',
          '**Les conteurs qui tiennent à la mémoire et aux lorebooks.** Les deux sont des fonctions centrales.',
          '**Pas pour un usage hors ligne ou la confidentialité sur l\'appareil.** Essayez [TokForge](/fr/power-local-llm/tokforge-review) sous Android ou [RisuAI](/fr/power-local-llm/risuai-review) avec un backend local.',
          '**Pas pour les moins de 18 ans.** La classification App Store est 18+.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il une connexion, un site web ou une version web de HiWaifu ?',
            a: 'La fiche App Store ne couvre que l\'iPhone, l\'iPad, les Mac Apple silicon et visionOS, et renvoie vers [hiwaifu.com](https://www.hiwaifu.com) comme site du développeur. Notre requête vers ce site a rencontré une vérification anti-bot : nous n\'avons donc pu confirmer ni version navigateur ni page de connexion. La politique de confidentialité mentionne des données de compte et de connexion sociale, l\'appli fonctionne donc apparemment avec un compte.',
          },
          {
            q: '« Hi Waifu » est-il la même appli que HiWaifu ?',
            a: 'La fiche App Store écrit le nom en un mot, « HiWaifu : AI Character Chat », avec l\'identifiant 6447806780. Si vous avez cherché « Hi Waifu » en deux mots, vérifiez que l\'identifiant du lien de cet avis correspond.',
          },
          {
            q: 'HiWaifu fonctionne-t-elle sur Mac, Apple Vision ou Android ?',
            a: 'La fiche mentionne les Mac à puce Apple et visionOS 1.0 ou ultérieur, avec une note indiquant que la version Mac n\'est pas vérifiée pour macOS. Nous n\'avons pas vérifié d\'appli Android.',
          },
          {
            q: 'Puis-je utiliser HiWaifu hors ligne ou avec mon propre modèle local ?',
            a: 'Aucun mode hors ligne ni option de modèle local n\'est indiqué. Pour du jeu de rôle local, consultez les interfaces open source du comparatif ci-dessus.',
          },
          {
            q: 'Pourquoi l\'appli apparaît-elle sous des noms différents ?',
            a: 'Les boutiques localisent le titre, par exemple « HiWaifu: KI-Charakter-Chat » en Allemagne et « HiWaifu: AI Character Chat » aux États-Unis. C\'est une seule appli, avec le même identifiant App Store.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, HiWaifu convient aux adultes qui veulent sur iPhone un grand catalogue de personnages avec mémoire longue, lorebooks et discussions de groupe,.',
          'Ce n\'est pas le bon outil pour un usage hors ligne ou la confidentialité sur l\'appareil. Pour cela, commencez par [TokForge](/fr/power-local-llm/tokforge-review) ou une interface auto-hébergée comme [RisuAI](/fr/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[HiWaifu sur l\'App Store](https://apps.apple.com/fr/app/id6447806780) — version, fonctions, prix, prérequis, classification d\'âge et historique des versions.',
          '[Politique de confidentialité de HiWaifu](https://www.hiwaifu.com/privacy.html) — données collectées et prestataires nommés.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis TokForge](/fr/power-local-llm/tokforge-review) — chat Android hors ligne avec personnages de jeu de rôle et génération d\'images.',
          '[Avis RisuAI](/fr/power-local-llm/risuai-review) — une interface de jeu de rôle open source pour web, bureau et mobile.',
          '[Avis Agnai](/fr/power-local-llm/agnai-review) — une interface web de jeu de rôle open source avec cartes de personnage.',
          '[SillyTavern, Agnai et RisuAI comparés](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — trois interfaces de jeu de rôle comparées.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-ja.webp',
    title: 'HiWaifuレビュー:iPhoneとiPad向けクラウド型AIキャラクターチャット',
    seoTitle: 'HiWaifuレビュー2026:iPhone版の料金と個人情報',
    intro:
      'HiWaifuは、約1,000万体のコミュニティ製キャラクターを軸にしたiPhone・iPad向けのAIキャラクターチャット／ロールプレイアプリです。このレビューでは、App Storeの掲載情報とプライバシー通知から確認できること、不明な点、ローカル／セルフホスト型ロールプレイツールとの違いを整理します。',
    metaDescription:
      'HiWaifu(Hi Waifu)はiPhone/iPad向け18歳以上のフリーミアムAIキャラチャットアプリ。バージョン3.10.1のログイン、ウェブ版、料金、プライバシー、ローカル代替を解説。',
    twitterDescription:
      'HiWaifuレビュー:フリーミアムのiOS向けAIキャラクターチャットアプリ。バージョン3.10.1、機能、料金、年齢区分、プライバシー、未確認点、ローカル代替を紹介。',
    audience:
      'AIキャラクターチャットアプリを比較し、HiWaifuがクラウド型かローカル型か、費用はいくらか、プライバシー通知が何を述べ何を述べていないかを知りたいiPhone・iPadユーザー向け。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'HiWaifuレビュー',
    targetKeywords: [
      'hiwaifu レビュー',
      'hiwaifu アプリ',
      'hiwaifu aiキャラクターチャット',
      'hiwaifu ios',
      'aiキャラチャット iphone',
      'aiロールプレイ アプリ iphone',
      'hiwaifu プライバシー',
      'hiwaifu 代替',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifuは、iPhone・iPadでAIキャラクターとロールプレイを楽しむクローズドソースのフリーミアムアプリで、ローカル型ではなくクラウドサービスとみられます。** App Storeの掲載情報にはAIモデルがどこで動くかの記載がなく、年齢区分は18歳以上です。このレビューはバージョン3.10.1が対象で、実機テストではなく公開されている掲載情報とプライバシー通知に基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'HiWaifuはローカルAIアプリですか。キャラクターとのロールプレイに向いていますか。',
        answer:
          '広告や任意の有料プランがあるクラウドアプリを受け入れられ、iPhoneで大規模な既製キャラクターライブラリを使いたい人には試す価値があります。オフライン利用や端末内のプライバシーが必要な人には向きません。',
        bullets: [
          'アニメ、ファンタジー、ロマンス、ホラー、日常など、約1,000万体のコミュニティ製キャラクター。',
          '長期記憶、ロアブック、シーン画像、最大10体のグループチャット。',
          '自分のキャラクターを作成し、非公開にも共有にもできるツール。',
          '15の表示言語に対応し、チャットの自動翻訳も可能。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'HiWaifuを入手する', anchor: 'get-it' },
      { label: 'HiWaifuとは', anchor: 'what-is-hiwaifu' },
      { label: '機能', anchor: 'features' },
      { label: '料金・年齢区分・プライバシー', anchor: 'privacy' },
      { label: '確認できなかった点', anchor: 'not-verified' },
      { label: 'HiWaifuと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'HiWaifuが向いている人', anchor: 'who-should-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
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
            text: '香港のLanguage Power Media Limitedが提供するHiWaifuは、大規模なコミュニティライブラリのAIキャラクターとチャットやロールプレイができる、iPhone・iPad向けのフリーミアムアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'AIキャラクター版のソーシャルアプリと考えてください。キャラクターを選ぶか作ると、アプリが物語を記憶し、重い処理はサーバー側で行われているようです。',
          },
        ],
        items: [
          '確認バージョン:3.10.1、最終更新は2026年10月2日([App Storeの掲載情報](https://apps.apple.com/jp/app/id6447806780)による)。',
          '料金:ダウンロードは無料で、サブスクリプション、シーズンパス、消費型パックのアプリ内課金あり。',
          '対応環境:iOS／iPadOS 15.0以降のiPhoneとiPad。',
          'オープン性:クローズドソースで、公開リポジトリは見つかりませんでした。',
          'メンテナンス:2026年6月26日から10月2日までに少なくとも8回リリースされており、放置プロジェクトの警告は該当しません。',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'HiWaifuを入手する',
        content: [
          '**HiWaifuはApple App Store経由で配布されています。** ダウンロードサイズは178 MBで、無料(アプリ内課金あり)です。',
        ],
        columns: ['入手経路', '入手先'],
        rows: [
          {
            '入手経路': 'Apple App Store',
            '入手先': '[App StoreのHiWaifu](https://apps.apple.com/jp/app/id6447806780)',
          },
          {
            '入手経路': 'ウェブサイト',
            '入手先': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            '入手経路': 'プライバシーポリシー',
            '入手先': '[HiWaifuのプライバシー通知](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: '掲載情報の対象はAppleデバイスのみです。公式サイトはこちらのリクエストにボット確認で応答したため内容は読めておらず、リンクは掲載情報の開発元サイト欄に基づきます。',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'HiWaifuとは',
        content: [
          '**HiWaifuは、ユーザーが作ったAIキャラクターの共有ライブラリを中心にしたキャラクターチャット／ロールプレイアプリです。** 掲載情報には約1,000万体のキャラクターが挙げられ、返信は地の文、かぎ括弧の会話、冒険系キャラクターでは場所・スタミナ・クエスト進行を示すステータス表示を備えた散文のように書かれます。',
          '提供元は香港のLANGUAGE POWER MEDIA LIMITEDです。リリース履歴は2023年4月に始まり、掲載情報では汎用アシスタントではなくAIコンパニオン兼ロールプレイアプリと説明されています。',
          'このレビューは、複数の国のApp Storeの掲載情報とプライバシー通知に基づきます。実機テストは含まないため、返信の質、速度、モデレーションは評価していません。',
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**掲載情報のセールスポイントは、記憶、世界観づくりのツール、非常に大きなキャラクターカタログです。** 以下はすべてApp Storeの説明文に基づきます。',
        ],
        items: [
          '**長期記憶。** 話した内容をアプリが覚えており、数日後にキャラクターがそれについて尋ねることがあります。',
          '**ロアブックとシナリオ。** 世界観のエントリーとシナリオ画像は、バージョン3.10.0と3.10.1で追加されました。',
          '**シーン画像。** 画像は場面の雰囲気に合わせて作られます。',
          '**グループチャット。** 最大10体のキャラクターが1つの会話に参加できます。',
          '**キャラクター作成。** キャラクターを作り、公開することも自分だけで使うこともできます。',
          '**発見機能。** おすすめやランキングで他のユーザーが話している相手が分かり、ショート動画フィードから気に入ったキャラクターのチャットを開けます。',
          '**言語。** アプリは15言語で利用でき、チャットを自動翻訳します。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金・年齢区分・プライバシー',
        content: [
          '**HiWaifuはダウンロード無料で、広告とアプリ内課金があります。** 日本のApp Storeでは月額プランが¥2,000、シーズンパスが¥4,500で、上位のPremium+、エナジーパック(200個で¥300)、クリスタルやダイヤのパックも販売されています。掲載情報によると、Premiumは広告を消し、メッセージエナジーと再生成が無制限になります。価格はストアごとに異なります。',
          '**App Storeでの年齢区分は18歳以上です。** ドイツのストアの掲載情報では、年齢確認、性的な内容やヌード、頻繁な性的なほのめかしが挙げられ、広告、メッセージ、ユーザー生成コンテンツ、ソーシャル機能を含むと記されています。成人向けアプリとして扱ってください。',
          '**プライバシー通知は一般的なアプリ向けの内容です。** アカウント情報、ソーシャルログインのデータ、端末・利用データ、広告IDや端末IDを受け取るPollfishのアンケートSDKが記載されています。提供者としてGoogle Cloud PlatformとFirebaseが挙げられ、香港の住所が示されています。このレビューではネットワーク通信を調べていないため、これらは開発元自身の記述です。',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: '確認できなかった点',
        content: ['**ローカルAIの読者にとって重要な点のいくつかは、読めた範囲のどの情報源にも記載がありません。**'],
        items: [
          'AIモデルがどこで動くか、どのモデルか:掲載情報にもプライバシー通知にも記載がありません。同期される記憶やコミュニティキャラクターなどサーバー側の機能から、クラウドサービスとみられます。',
          'チャットがモデルの学習に使われるか、どこに保存されるか:プライバシー通知はチャット内容にもAIにも触れていません。',
          'オフライン利用:オフラインモードの記載はありません。',
          'Android版と公式サイトの記載内容:サイトがこちらのリクエストをブロックしました。',
          'ライセンスとソースコード:公開リポジトリは見つかりませんでした。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifuと代替アプリの比較',
        columns: ['アプリ', '対応環境', '価格とライセンス', 'AIの動作場所', '主な違い'],
        rows: [
          {
            'アプリ': 'HiWaifu',
            '対応環境': 'iPhone、iPad',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'AIの動作場所': '記載なし(サーバー機能あり)',
            '主な違い': '大規模な既製キャラクターライブラリ、18歳以上',
          },
          {
            'アプリ': '[TokForge](/ja/power-local-llm/tokforge-review)',
            '対応環境': 'Android',
            '価格とライセンス': '無料、プロプライエタリ',
            'AIの動作場所': '端末上',
            '主な違い': 'オフラインのロールプレイキャラクター、画像生成、音声',
          },
          {
            'アプリ': '[RisuAI](/ja/power-local-llm/risuai-review)',
            '対応環境': 'ウェブ、デスクトップ、モバイル',
            '価格とライセンス': '無料、GPL 3.0',
            'AIの動作場所': '選んだバックエンド',
            '主な違い': 'キャラクターカード対応のオープンソースのロールプレイ用フロントエンド',
          },
          {
            'アプリ': '[Agnai](/ja/power-local-llm/agnai-review)',
            '対応環境': 'ウェブ',
            '価格とライセンス': '無料、AGPL-3.0',
            'AIの動作場所': '選んだバックエンド',
            '主な違い': 'キャラクターカード対応のオープンソースのウェブ用フロントエンド',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各アプリの公式ページで確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'HiWaifuが向いている人',
        items: [
          '**すぐにキャラクターとチャットを始めたい成人。** 設定は不要です。',
          '**記憶とロアブックを重視するストーリーテラー。** どちらも中核機能です。',
          '**オフライン利用や端末内のプライバシーが必要な人には不向き。** Androidなら[TokForge](/ja/power-local-llm/tokforge-review)、ローカルバックエンドと組み合わせるなら[RisuAI](/ja/power-local-llm/risuai-review)を試してください。',
          '**18歳未満の方には不向き。** App Storeの年齢区分は18歳以上です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'HiWaifuにログインやウェブサイト、ブラウザ版はありますか?',
            a: 'App Storeの掲載情報はiPhone、iPad、Apple silicon搭載Mac、visionOSのみで、開発元サイトとして[hiwaifu.com](https://www.hiwaifu.com)がリンクされています。このサイトへのリクエストはボット確認で止まったため、ブラウザ版やログインページは確認できていません。プライバシー通知にはアカウント情報とソーシャルログイン情報が記載されており、アカウントでサインインするアプリと考えられます。',
          },
          {
            q: '「Hi Waifu」とHiWaifuは同じアプリですか?',
            a: 'App Storeの掲載名はスペースなしの「HiWaifu: AI Character Chat」で、IDは6447806780です。「Hi Waifu」と分けて検索した場合は、本レビューのリンク先のIDが一致するか確認してください。',
          },
          {
            q: 'HiWaifuはMac、Apple Vision、Androidで動きますか?',
            a: '掲載情報にはAppleシリコン搭載MacとvisionOS 1.0以降が記載され、Mac版はmacOS向けに検証されていないという注記があります。Androidアプリは確認できていません。',
          },
          {
            q: 'HiWaifuをオフラインや自前のローカルモデルで使えますか?',
            a: 'オフラインモードもローカルモデルの選択肢も記載されていません。ローカルでロールプレイするなら、上の比較にあるオープンソースのフロントエンドを参照してください。',
          },
          {
            q: 'なぜアプリが異なる名前で表示されるのですか?',
            a: '各ストアがタイトルをローカライズしているためで、たとえばドイツでは「HiWaifu: KI-Charakter-Chat」、米国では「HiWaifu: AI Character Chat」です。同じApp Store IDの1つのアプリです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'HiWaifuは、iPhoneで長期記憶・ロアブック・グループチャット付きの大規模キャラクターカタログを使いたい成人には、紙の上では適しています。',
          'オフライン利用や端末内のプライバシーには不向きです。その場合は[TokForge](/ja/power-local-llm/tokforge-review)か、[RisuAI](/ja/power-local-llm/risuai-review)のようなセルフホスト型フロントエンドから始めてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのHiWaifu](https://apps.apple.com/jp/app/id6447806780) — バージョン、機能、料金、動作要件、年齢区分、バージョン履歴。',
          '[HiWaifuのプライバシー通知](https://www.hiwaifu.com/privacy.html) — 収集されるデータと記載された提供事業者。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[TokForgeレビュー](/ja/power-local-llm/tokforge-review) — ロールプレイキャラクターと画像生成を備えたオフラインのAndroidチャット。',
          '[RisuAIレビュー](/ja/power-local-llm/risuai-review) — ウェブ、デスクトップ、モバイル向けのオープンソースのロールプレイ用フロントエンド。',
          '[Agnaiレビュー](/ja/power-local-llm/agnai-review) — キャラクターカード対応のオープンソースのウェブ用ロールプレイフロントエンド。',
          '[SillyTavern・Agnai・RisuAI比較](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 3つのロールプレイ用フロントエンドを比較。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-zh.webp',
    title: 'HiWaifu评测：适用于iPhone和iPad的云端AI角色聊天',
    seoTitle: 'HiWaifu评测2026：iPhone应用、定价与隐私',
    intro:
      'HiWaifu是一款面向iPhone和iPad的AI角色聊天与角色扮演应用，围绕约1000万个社区创建的角色构建。本评测说明其App Store页面和隐私声明能证实什么、哪些仍不清楚，以及它与本地和自托管角色扮演工具的区别。',
    metaDescription:
      'HiWaifu（Hi Waifu）是面向iPhone/iPad的18+免费增值AI角色聊天应用。版本3.10.1：登录与网页版、定价、隐私声明、本地替代方案。',
    twitterDescription:
      'HiWaifu评测：免费增值的iOS AI角色聊天应用。版本3.10.1、功能、定价、年龄分级、隐私声明、未核实事项与本地角色扮演替代方案。',
    audience:
      '正在比较AI角色聊天应用的iPhone和iPad用户——想了解HiWaifu是云端还是本地运行、价格如何，以及其隐私声明说了什么、没说什么。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'HiWaifu评测',
    targetKeywords: [
      'hiwaifu评测',
      'hiwaifu应用',
      'hiwaifu ai角色聊天',
      'hiwaifu ios',
      'iphone ai角色聊天',
      'iphone ai角色扮演应用',
      'hiwaifu隐私',
      'hiwaifu替代品',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu是一款闭源的免费增值iPhone和iPad应用，用于与AI角色进行角色扮演，看起来是云服务而非本地应用。** App Store页面没有说明AI模型在哪里运行，并将应用分级为18+。本评测对应版本3.10.1，依据公开的页面信息和隐私声明，而非亲自实测。',
    quickAnswerTop: {
      zh: {
        question: 'HiWaifu是本地AI应用吗？值得用来进行角色扮演吗？',
        answer:
          '如果你想在iPhone上使用大型现成角色库，并能接受带广告和可选付费档位的云端应用，值得一试。如果你需要离线使用或设备端隐私，则不合适。',
        bullets: [
          '约1000万个社区创建的角色，涵盖动漫、奇幻、恋爱、恐怖和日常题材。',
          '长期记忆、Lorebook、场景图片，以及最多10个角色的群聊。',
          '可创建自己的角色，并选择保持私密或公开分享。',
          '支持15种界面语言，并可自动翻译聊天内容。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取HiWaifu', anchor: 'get-it' },
      { label: 'HiWaifu是什么', anchor: 'what-is-hiwaifu' },
      { label: '功能', anchor: 'features' },
      { label: '定价、年龄分级与隐私', anchor: 'privacy' },
      { label: '我们无法核实的事项', anchor: 'not-verified' },
      { label: 'HiWaifu与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用HiWaifu的人', anchor: 'who-should-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
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
            text: 'HiWaifu由香港公司Language Power Media Limited提供，是一款免费增值的iPhone和iPad应用，可与大型社区角色库中的AI角色聊天并进行角色扮演。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作AI角色的社交应用：选择或创建角色，应用会记住你的故事，繁重的计算似乎在其服务器上完成。',
          },
        ],
        items: [
          '评测版本：3.10.1，最近更新于2026年10月2日，依据[App Store页面](https://apps.apple.com/us/app/id6447806780)。',
          '价格：免费下载，应用内购买包括订阅、赛季通行证和消耗型礼包。',
          '平台：iPhone和iPad，需iOS或iPadOS 15.0或更高版本。',
          '开放性：闭源；未找到公开代码仓库。',
          '维护：2026年6月26日至10月2日至少发布了八个版本，因此不适用项目停更警告。',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: '获取HiWaifu',
        content: [
          '**HiWaifu通过Apple App Store分发。** 下载大小为178 MB，免费下载，含应用内购买。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store',
            '获取方式': '[App Store上的HiWaifu](https://apps.apple.com/us/app/id6447806780)',
          },
          {
            '渠道': '网站',
            '获取方式': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            '渠道': '隐私政策',
            '获取方式': '[HiWaifu隐私声明](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: '页面仅覆盖Apple设备。官方网站对我们的请求返回了机器人验证，因此未能读取其内容；链接来自页面的开发者网站字段。',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'HiWaifu是什么',
        content: [
          '**HiWaifu是一款围绕用户创建的AI角色共享库而构建的角色聊天与角色扮演应用。** 页面提到约1000万个角色，回复以散文形式书写，包含叙述、引号内的对话，冒险类角色还带有显示地点、体力和任务进度的状态栏。',
          '它由香港的LANGUAGE POWER MEDIA LIMITED发布。版本历史始于2023年4月，页面将其描述为AI陪伴与角色扮演应用，而非通用助手。',
          '本评测依据多个国家和地区App Store的页面信息以及隐私声明，不含实际使用测试，因此回复质量、速度和内容审核不在评分范围内。',
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**页面的卖点是记忆、世界观构建工具和规模很大的角色目录。** 以下内容均来自App Store的描述。',
        ],
        items: [
          '**长期记忆。** 应用会记住你提到的细节，角色可以在几天后重新问起。',
          '**Lorebook与场景。** 世界观条目和场景图片在3.10.0和3.10.1版本中加入。',
          '**场景图片。** 图片与场景氛围相关联。',
          '**群聊。** 最多10个角色可参与同一场对话。',
          '**角色创建。** 你可以创建角色，选择发布或仅自己使用。',
          '**发现。** 推荐和排行榜列表显示其他人正在与谁聊天，短视频信息流可直接打开你喜欢的角色的聊天。',
          '**语言。** 应用提供15种语言，并可自动翻译聊天。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '定价、年龄分级与隐私',
        content: [
          '**HiWaifu可免费下载，含广告和应用内购买。** 在美国App Store，月度订阅为$12.99，赛季通行证为$29.99；还销售更高档的Premium+、能量包（200个$1.99）以及水晶和钻石礼包。页面称Premium会移除广告，并提供无限的消息能量和重新生成。各地区商店价格不同。',
          '**App Store将该应用分级为18+。** 在德国商店，页面标注了年龄验证、性内容或裸露以及频繁的性暗示，并说明应用包含广告、消息、用户生成内容和社交功能。请将其视为仅限成年人的应用。',
          '**隐私声明是一份通用的应用声明。** 其中列出账户数据、社交登录数据、设备与使用数据，以及接收广告标识符和设备标识符的Pollfish问卷SDK。它点名Google Cloud Platform和Firebase为服务提供方，并给出香港地址。本评测未检查网络流量，因此这些说法均出自开发者本人。',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: '我们无法核实的事项',
        content: ['**对关注本地AI的读者很重要的若干事项，在我们能读取的任何来源中都没有记载。**'],
        items: [
          'AI模型在哪里运行、是哪个模型：页面和隐私声明均未说明。同步记忆和社区角色等服务器端功能表明这是云服务。',
          '聊天内容是否用于训练模型、存储在何处：隐私声明未提及聊天内容或AI。',
          '离线使用：未列出离线模式。',
          'Android版本以及官方网站所述内容：网站拦截了我们的请求。',
          '许可证与源代码：未找到公开代码仓库。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', 'AI运行位置', '主要区别'],
        rows: [
          {
            '应用': 'HiWaifu',
            '平台': 'iPhone、iPad',
            '价格与许可证': '免费增值，闭源',
            'AI运行位置': '未说明；有服务器端功能',
            '主要区别': '规模庞大的现成角色库；18+',
          },
          {
            '应用': '[TokForge](/zh/power-local-llm/tokforge-review)',
            '平台': 'Android',
            '价格与许可证': '免费，专有',
            'AI运行位置': '设备端',
            '主要区别': '离线角色扮演角色、图像生成和语音',
          },
          {
            '应用': '[RisuAI](/zh/power-local-llm/risuai-review)',
            '平台': '网页、桌面、移动',
            '价格与许可证': '免费，GPL 3.0',
            'AI运行位置': '你选择的后端',
            '主要区别': '支持角色卡的开源角色扮演前端',
          },
          {
            '应用': '[Agnai](/zh/power-local-llm/agnai-review)',
            '平台': '网页',
            '价格与许可证': '免费，AGPL-3.0',
            'AI运行位置': '你选择的后端',
            '主要区别': '支持角色卡的开源网页前端',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定前请查看各应用自己的页面。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用HiWaifu的人',
        items: [
          '**想立刻与角色聊天的成年人。** 无需任何设置。',
          '**看重记忆和Lorebook的故事创作者。** 两者都是核心功能。',
          '**不适合需要离线使用或设备端隐私的人。** 可在Android上试用[TokForge](/zh/power-local-llm/tokforge-review)，或搭配本地后端使用[RisuAI](/zh/power-local-llm/risuai-review)。',
          '**不适合18岁以下的人。** App Store分级为18+。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'HiWaifu有登录页面、网站或网页版吗？',
            a: 'App Store页面仅列出iPhone、iPad、Apple silicon Mac和visionOS，并把[hiwaifu.com](https://www.hiwaifu.com)作为开发者网站链接。我们对该网站的请求遇到了机器人验证，因此无法确认是否有浏览器版或登录页面。隐私声明提到账号数据和社交登录数据，所以该应用似乎使用账号登录。',
          },
          {
            q: '“Hi Waifu”和HiWaifu是同一个应用吗？',
            a: 'App Store页面把名称写作一个词“HiWaifu: AI Character Chat”，ID为6447806780。如果你把“Hi Waifu”分开搜索，请确认本评测链接中的ID与之一致。',
          },
          {
            q: 'HiWaifu能在Mac、Apple Vision或Android上运行吗？',
            a: '页面列出搭载Apple芯片的Mac和visionOS 1.0或更高版本，并注明Mac版本未针对macOS验证。我们未核实Android应用。',
          },
          {
            q: '可以离线使用HiWaifu，或接入自己的本地模型吗？',
            a: '页面未列出离线模式或本地模型选项。如需本地角色扮演，请参阅上方对比中的开源前端。',
          },
          {
            q: '为什么该应用在不同地区名称不同？',
            a: '各地区商店会本地化标题，例如德国为“HiWaifu: KI-Charakter-Chat”，美国为“HiWaifu: AI Character Chat”。它是同一个应用，App Store ID相同。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从文档来看，HiWaifu适合想在iPhone上使用带长期记忆、Lorebook和群聊的大型角色目录的成年人。',
          '对于离线使用或设备端隐私，它不是合适的工具。此类需求请先试用[TokForge](/zh/power-local-llm/tokforge-review)，或[RisuAI](/zh/power-local-llm/risuai-review)这类自托管前端。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的HiWaifu](https://apps.apple.com/us/app/id6447806780) — 版本、功能、定价、系统要求、年龄分级和版本历史。',
          '[HiWaifu隐私声明](https://www.hiwaifu.com/privacy.html) — 收集的数据和点名的服务提供方。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[TokForge评测](/zh/power-local-llm/tokforge-review) — 带角色扮演角色和图像生成的离线Android聊天应用。',
          '[RisuAI评测](/zh/power-local-llm/risuai-review) — 适用于网页、桌面和移动端的开源角色扮演前端。',
          '[Agnai评测](/zh/power-local-llm/agnai-review) — 支持角色卡的开源网页角色扮演前端。',
          '[SillyTavern、Agnai与RisuAI对比](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 三款角色扮演前端的对比。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-es.webp',
    title: 'Reseña de HiWaifu: chat de personajes con IA en la nube para iPhone y iPad',
    seoTitle: 'Reseña de HiWaifu 2026: app iPhone, precios, privacidad',
    intro:
      'HiWaifu es una app para iPhone y iPad de rol y chat con personajes de IA, construida en torno a una biblioteca comunitaria de unos 10 millones de personajes. Esta reseña recoge lo que documentan su ficha de la App Store y su aviso de privacidad, lo que sigue sin estar claro y cómo se compara con las herramientas de rol locales y autoalojadas.',
    metaDescription:
      'HiWaifu (Hi Waifu) es una app freemium 18+ de chat con personajes de IA para iPhone. Versión 3.10.1: acceso, versión web, precios, privacidad y alternativas.',
    twitterDescription:
      'Reseña de HiWaifu: app iOS freemium de chat con personajes de IA. Versión 3.10.1, funciones, precios, edad mínima, privacidad, puntos sin verificar y alternativas locales de rol.',
    audience:
      'Usuarios de iPhone y iPad que comparan apps de chat con personajes de IA y quieren saber si HiWaifu funciona en la nube o en local, cuánto cuesta y qué dice y qué no dice su aviso de privacidad.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de HiWaifu',
    targetKeywords: [
      'reseña hiwaifu',
      'hiwaifu app',
      'hiwaifu chat de personajes ia',
      'hiwaifu ios',
      'chat de personajes ia iphone',
      'app de rol con ia iphone',
      'hiwaifu privacidad',
      'alternativas a hiwaifu',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu es una app freemium de código cerrado para hacer rol con personajes de IA en iPhone y iPad, y parece un servicio en la nube y no una app local.** La ficha de la App Store no indica dónde se ejecuta el modelo de IA y la clasifica como 18+. Esta reseña cubre la versión 3.10.1 y se basa en la ficha pública y el aviso de privacidad, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Es HiWaifu una app de IA local y merece la pena para el rol con personajes?',
        answer:
          'Merece la pena si quieres una gran biblioteca de personajes ya hechos en el iPhone y aceptas una app en la nube con anuncios y planes de pago opcionales. No encaja si necesitas uso sin conexión o privacidad en el dispositivo.',
        bullets: [
          'Unos 10 millones de personajes creados por la comunidad: anime, fantasía, romance, terror y vida cotidiana.',
          'Memoria a largo plazo, lorebooks, imágenes de escena y chats grupales de hasta 10 personajes.',
          'Herramientas para crear tus propios personajes y mantenerlos privados o compartirlos.',
          'Quince idiomas de interfaz, con traducción automática de los chats.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo obtener HiWaifu', anchor: 'get-it' },
      { label: 'Qué es HiWaifu', anchor: 'what-is-hiwaifu' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Precios, edad mínima y privacidad', anchor: 'privacy' },
      { label: 'Lo que no pudimos verificar', anchor: 'not-verified' },
      { label: 'HiWaifu frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es HiWaifu', anchor: 'who-should-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'HiWaifu, de la empresa hongkonesa Language Power Media Limited, es una app freemium para iPhone y iPad con la que chateas y haces rol con personajes de IA de una gran biblioteca comunitaria.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como una red social de personajes de IA: eliges o creas un personaje, la app guarda memoria de tu historia y el trabajo pesado parece hacerse en sus servidores.',
          },
        ],
        items: [
          'Versión analizada: 3.10.1, actualizada por última vez el 2 de octubre de 2026, según la [ficha de la App Store](https://apps.apple.com/es/app/id6447806780).',
          'Precio: descarga gratuita, con compras dentro de la app de una suscripción, un pase de temporada y paquetes consumibles.',
          'Plataforma: iPhone y iPad con iOS o iPadOS 15.0 o posterior.',
          'Apertura: código cerrado; no se encontró ningún repositorio público.',
          'Mantenimiento: al menos ocho versiones entre el 26 de junio y el 2 de octubre de 2026, así que no se aplica la advertencia de proyecto abandonado.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'Cómo obtener HiWaifu',
        content: [
          '**HiWaifu se distribuye a través de la Apple App Store.** La descarga pesa 178 MB y es gratuita, con compras dentro de la app.',
        ],
        columns: ['Canal', 'Dónde conseguirla'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Dónde conseguirla': '[HiWaifu en la App Store](https://apps.apple.com/es/app/id6447806780)',
          },
          {
            'Canal': 'Sitio web',
            'Dónde conseguirla': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'Canal': 'Política de privacidad',
            'Dónde conseguirla': '[Aviso de privacidad de HiWaifu](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'La ficha solo cubre dispositivos Apple. El sitio oficial respondió a nuestra petición con una verificación anti-bots, así que no se leyó su contenido; el enlace procede del campo de sitio web del desarrollador de la ficha.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'Qué es HiWaifu',
        content: [
          '**HiWaifu es una app de chat de personajes y rol centrada en una biblioteca compartida de personajes de IA creados por los usuarios.** La ficha habla de unos 10 millones de personajes y de respuestas escritas como prosa, con narración, diálogos entre comillas y, en los personajes de aventura, un indicador de estado con lugar, resistencia y progreso de misión.',
          'La publica LANGUAGE POWER MEDIA LIMITED, de Hong Kong. El historial de versiones empieza en abril de 2023 y la ficha la describe como app de compañía con IA y de rol, no como asistente general.',
          'Esta reseña se basa en la ficha de la App Store de varios países y en el aviso de privacidad. No incluye pruebas prácticas, así que la calidad de las respuestas, la velocidad y la moderación no se valoran aquí.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Los puntos fuertes de la ficha son la memoria, las herramientas de creación de mundos y un catálogo de personajes muy grande.** Todo lo siguiente procede de la descripción de la App Store.',
        ],
        items: [
          '**Memoria a largo plazo.** La app recuerda los detalles que mencionas, de modo que un personaje puede preguntar por ellos días después.',
          '**Lorebooks y escenarios.** Las entradas de creación de mundos y las imágenes de escenario se añadieron en las versiones 3.10.0 y 3.10.1.',
          '**Imágenes de escena.** Las imágenes están ligadas al ambiente de la escena.',
          '**Chats grupales.** Hasta 10 personajes pueden compartir una conversación.',
          '**Creación de personajes.** Puedes crear personajes y publicarlos o quedártelos para ti.',
          '**Descubrimiento.** Las listas de destacados y clasificaciones muestran con quién chatean otros, y un feed de vídeos cortos abre el chat de un personaje que te guste.',
          '**Idiomas.** La app está disponible en 15 idiomas, con traducción automática de los chats.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios, edad mínima y privacidad',
        content: [
          '**HiWaifu se descarga gratis, con anuncios y compras dentro de la app.** En la App Store de España el plan mensual cuesta 14,99 € y el pase de temporada 34,99 €; también se venden un nivel superior Premium+, paquetes de energía (200 por 1,99 €) y paquetes de cristales y diamantes. Según la ficha, Premium quita los anuncios y añade energía de mensajes ilimitada y regeneración. Los precios varían según la tienda.',
          '**La App Store clasifica la app como 18+.** En la tienda alemana la ficha señala verificación de edad, contenido sexual o desnudos y frecuentes insinuaciones sexuales, e indica que la app incluye anuncios, mensajería, contenido generado por usuarios y funciones sociales. Trátala como una app solo para adultos.',
          '**El aviso de privacidad es un aviso general de app.** Enumera datos de cuenta, datos de inicio de sesión social, datos de dispositivo y uso, y un SDK de encuestas de Pollfish que recibe identificadores publicitarios y de dispositivo. Nombra a Google Cloud Platform y Firebase como proveedores y da una dirección en Hong Kong. Esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son del propio desarrollador.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'Lo que no pudimos verificar',
        content: ['**Varios puntos importantes para quien busca IA local no están documentados en ninguna fuente que pudimos leer.**'],
        items: [
          'Dónde se ejecuta el modelo de IA y de qué modelo se trata: ni la ficha ni el aviso de privacidad lo dicen. Las funciones del lado del servidor, como la memoria sincronizada y los personajes de la comunidad, apuntan a un servicio en la nube.',
          'Si los chats se usan para entrenar modelos y dónde se almacenan: el aviso de privacidad no menciona el contenido de los chats ni la IA.',
          'Uso sin conexión: no se indica ningún modo sin conexión.',
          'Una versión para Android y lo que diga el sitio oficial: el sitio bloqueó nuestra petición.',
          'La licencia y el código fuente: no se encontró ningún repositorio público.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu frente a las alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Dónde corre la IA', 'Diferencia clave'],
        rows: [
          {
            'App': 'HiWaifu',
            'Plataformas': 'iPhone, iPad',
            'Precio y licencia': 'Freemium, código cerrado',
            'Dónde corre la IA': 'No se indica; funciones de servidor',
            'Diferencia clave': 'Enorme biblioteca de personajes hechos; 18+',
          },
          {
            'App': '[TokForge](/es/power-local-llm/tokforge-review)',
            'Plataformas': 'Android',
            'Precio y licencia': 'Gratis, propietaria',
            'Dónde corre la IA': 'En el dispositivo',
            'Diferencia clave': 'Personajes de rol sin conexión, imágenes y voz',
          },
          {
            'App': '[RisuAI](/es/power-local-llm/risuai-review)',
            'Plataformas': 'Web, escritorio, móvil',
            'Precio y licencia': 'Gratis, GPL 3.0',
            'Dónde corre la IA': 'El backend que elijas',
            'Diferencia clave': 'Interfaz de rol de código abierto con tarjetas de personaje',
          },
          {
            'App': '[Agnai](/es/power-local-llm/agnai-review)',
            'Plataformas': 'Web',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            'Dónde corre la IA': 'El backend que elijas',
            'Diferencia clave': 'Interfaz web de código abierto con tarjetas de personaje',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de las apps de terceros cambian con frecuencia. Consulta la página de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es HiWaifu',
        items: [
          '**Adultos que quieren chatear con personajes de inmediato.** No hay que configurar nada.',
          '**Narradores que valoran la memoria y los lorebooks.** Ambos son funciones centrales.',
          '**No es para quien necesite uso sin conexión o privacidad en el dispositivo.** Prueba [TokForge](/es/power-local-llm/tokforge-review) en Android o [RisuAI](/es/power-local-llm/risuai-review) con un backend local.',
          '**No es para menores de 18 años.** La clasificación de la App Store es 18+.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Hay inicio de sesión, sitio web o versión web de HiWaifu?',
            a: 'La ficha de App Store solo cubre iPhone, iPad, Mac con Apple silicon y visionOS, y enlaza [hiwaifu.com](https://www.hiwaifu.com) como sitio del desarrollador. Nuestra solicitud a ese sitio se topó con una verificación antibots, así que no pudimos confirmar una versión de navegador ni una página de acceso. El aviso de privacidad menciona datos de cuenta y de inicio de sesión social, por lo que la app parece funcionar con una cuenta.',
          },
          {
            q: '¿«Hi Waifu» es la misma app que HiWaifu?',
            a: 'La ficha de App Store escribe el nombre en una palabra, «HiWaifu: AI Character Chat», con el ID 6447806780. Si buscaste «Hi Waifu» por separado, comprueba que el ID del enlace de esta reseña coincida.',
          },
          {
            q: '¿Funciona HiWaifu en Mac, Apple Vision o Android?',
            a: 'La ficha muestra Mac con chip Apple y visionOS 1.0 o posterior, con una nota de que la versión para Mac no está verificada para macOS. No verificamos ninguna app para Android.',
          },
          {
            q: '¿Puedo usar HiWaifu sin conexión o con mi propio modelo local?',
            a: 'No se indica ningún modo sin conexión ni opción de modelo local. Para rol en local, consulta las interfaces de código abierto de la comparativa anterior.',
          },
          {
            q: '¿Por qué la app aparece con nombres distintos?',
            a: 'Las tiendas localizan el título, por ejemplo «HiWaifu: KI-Charakter-Chat» en Alemania y «HiWaifu: AI Character Chat» en EE. UU. Es una sola app con el mismo ID de la App Store.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Sobre el papel, HiWaifu encaja con adultos que quieren en el iPhone un gran catálogo de personajes con memoria a largo plazo, lorebooks y chats grupales.',
          'No es la herramienta adecuada para el uso sin conexión o la privacidad en el dispositivo. Para eso, empieza por [TokForge](/es/power-local-llm/tokforge-review) o por una interfaz autoalojada como [RisuAI](/es/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[HiWaifu en la App Store](https://apps.apple.com/es/app/id6447806780) — versión, funciones, precios, requisitos, clasificación por edad e historial de versiones.',
          '[Aviso de privacidad de HiWaifu](https://www.hiwaifu.com/privacy.html) — datos recopilados y proveedores nombrados.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de TokForge](/es/power-local-llm/tokforge-review) — chat sin conexión para Android con personajes de rol y generación de imágenes.',
          '[Reseña de RisuAI](/es/power-local-llm/risuai-review) — una interfaz de rol de código abierto para web, escritorio y móvil.',
          '[Reseña de Agnai](/es/power-local-llm/agnai-review) — una interfaz web de rol de código abierto con tarjetas de personaje.',
          '[SillyTavern, Agnai y RisuAI comparados](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — tres interfaces de rol comparadas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-pt.webp',
    title: 'Análise do HiWaifu: chat de personagens com IA na nuvem para iPhone e iPad',
    seoTitle: 'Análise do HiWaifu 2026: app iPhone, preços, privacidade',
    intro:
      'O HiWaifu é um app para iPhone e iPad de roleplay e chat com personagens de IA, construído em torno de uma biblioteca da comunidade com cerca de 10 milhões de personagens. Esta análise mostra o que a página da App Store e o aviso de privacidade documentam, o que continua incerto e como o app se compara a ferramentas de roleplay locais e auto-hospedadas.',
    metaDescription:
      'HiWaifu (Hi Waifu) é um app freemium 18+ de chat com personagens de IA para iPhone. Versão 3.10.1: login, versão web, preços, privacidade, alternativas.',
    twitterDescription:
      'Análise do HiWaifu: app iOS freemium de chat com personagens de IA. Versão 3.10.1, recursos, preços, faixa etária, privacidade, pontos não verificados e alternativas locais de roleplay.',
    audience:
      'Usuários de iPhone e iPad que comparam apps de chat com personagens de IA e querem saber se o HiWaifu roda na nuvem ou localmente, quanto custa e o que o aviso de privacidade diz e não diz.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do HiWaifu',
    targetKeywords: [
      'hiwaifu análise',
      'hiwaifu app',
      'hiwaifu chat de personagens ia',
      'hiwaifu ios',
      'chat de personagens ia iphone',
      'app de roleplay com ia iphone',
      'hiwaifu privacidade',
      'alternativas ao hiwaifu',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**O HiWaifu é um app freemium de código fechado para fazer roleplay com personagens de IA no iPhone e no iPad, e parece ser um serviço na nuvem, não local.** A página da App Store não diz onde o modelo de IA roda e classifica o app como 18+. Esta análise cobre a versão 3.10.1 e se baseia na página pública e no aviso de privacidade, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'O HiWaifu é um app de IA local e vale a pena para roleplay com personagens?',
        answer:
          'Vale a pena se você quer uma grande biblioteca de personagens prontos no iPhone e aceita um app na nuvem com anúncios e planos pagos opcionais. Não serve se você precisa de uso offline ou de privacidade no aparelho.',
        bullets: [
          'Cerca de 10 milhões de personagens criados pela comunidade: anime, fantasia, romance, terror e cotidiano.',
          'Memória de longo prazo, lorebooks, imagens de cena e chats em grupo com até 10 personagens.',
          'Ferramentas para criar seus próprios personagens e mantê-los privados ou compartilhá-los.',
          'Quinze idiomas de interface, com tradução automática dos chats.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o HiWaifu', anchor: 'get-it' },
      { label: 'O que é o HiWaifu', anchor: 'what-is-hiwaifu' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Preços, faixa etária e privacidade', anchor: 'privacy' },
      { label: 'O que não conseguimos verificar', anchor: 'not-verified' },
      { label: 'HiWaifu x alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem é o HiWaifu', anchor: 'who-should-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O HiWaifu, da empresa de Hong Kong Language Power Media Limited, é um app freemium para iPhone e iPad em que você conversa e faz roleplay com personagens de IA de uma grande biblioteca da comunidade.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma rede social de personagens de IA: você escolhe ou cria um personagem, o app guarda a memória da sua história e o trabalho pesado parece ser feito em seus servidores.',
          },
        ],
        items: [
          'Versão analisada: 3.10.1, atualizada pela última vez em 2 de outubro de 2026, conforme a [página da App Store](https://apps.apple.com/br/app/id6447806780).',
          'Preço: download gratuito, com compras no app de uma assinatura, um passe de temporada e pacotes consumíveis.',
          'Plataforma: iPhone e iPad com iOS ou iPadOS 15.0 ou posterior.',
          'Abertura: código fechado; nenhum repositório público foi encontrado.',
          'Manutenção: pelo menos oito versões entre 26 de junho e 2 de outubro de 2026, então não se aplica o alerta de projeto abandonado.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'Como obter o HiWaifu',
        content: [
          '**O HiWaifu é distribuído pela Apple App Store.** O download tem 178 MB e é gratuito, com compras no app.',
        ],
        columns: ['Canal', 'Onde obter'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Onde obter': '[HiWaifu na App Store](https://apps.apple.com/br/app/id6447806780)',
          },
          {
            'Canal': 'Site',
            'Onde obter': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'Canal': 'Política de privacidade',
            'Onde obter': '[Aviso de privacidade do HiWaifu](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'A página cobre apenas dispositivos Apple. O site oficial respondeu à nossa requisição com uma verificação anti-bot, então seu conteúdo não foi lido; o link vem do campo de site do desenvolvedor da página.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'O que é o HiWaifu',
        content: [
          '**O HiWaifu é um app de chat de personagens e roleplay centrado em uma biblioteca compartilhada de personagens de IA criados por usuários.** A página cita cerca de 10 milhões de personagens e respostas escritas como prosa, com narração, diálogos entre aspas e, nos personagens de aventura, um painel de status com local, vigor e progresso de missão.',
          'Ele é publicado pela LANGUAGE POWER MEDIA LIMITED, de Hong Kong. O histórico de versões começa em abril de 2023 e a página o descreve como app de companhia com IA e de roleplay, não como assistente geral.',
          'Esta análise se baseia na página da App Store em vários países e no aviso de privacidade. Não inclui testes práticos, então qualidade das respostas, velocidade e moderação não são avaliadas aqui.',
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**Os pontos fortes da página são memória, ferramentas de criação de mundos e um catálogo de personagens muito grande.** Tudo abaixo vem da descrição da App Store.',
        ],
        items: [
          '**Memória de longo prazo.** O app lembra detalhes que você menciona, então um personagem pode perguntar sobre eles dias depois.',
          '**Lorebooks e cenários.** Entradas de criação de mundo e imagens de cenário foram adicionadas nas versões 3.10.0 e 3.10.1.',
          '**Imagens de cena.** As imagens acompanham o clima da cena.',
          '**Chats em grupo.** Até 10 personagens podem participar da mesma conversa.',
          '**Criação de personagens.** Você pode criar personagens e publicá-los ou mantê-los só para você.',
          '**Descoberta.** Listas de destaques e rankings mostram com quem outras pessoas estão conversando, e um feed de vídeos curtos abre o chat de um personagem de que você gostou.',
          '**Idiomas.** O app está disponível em 15 idiomas, com tradução automática dos chats.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços, faixa etária e privacidade',
        content: [
          '**O HiWaifu pode ser baixado de graça, com anúncios e compras no app.** Na App Store do Brasil, o plano mensal custa R$ 39,90 e o passe de temporada R$ 49,90; também são vendidos um nível Premium+ superior, pacotes de energia (200 por R$ 12,90) e pacotes de cristais e diamantes. Segundo a página, o Premium remove os anúncios e acrescenta energia de mensagens ilimitada e regeneração. Os preços variam conforme a loja.',
          '**A App Store classifica o app como 18+.** Na loja alemã, a página indica verificação de idade, conteúdo sexual ou nudez e insinuações sexuais frequentes, e informa que o app contém anúncios, mensagens, conteúdo gerado por usuários e recursos sociais. Trate-o como um app apenas para adultos.',
          '**O aviso de privacidade é um aviso geral de app.** Ele lista dados de conta, dados de login social, dados de dispositivo e uso, e um SDK de pesquisas da Pollfish que recebe identificadores de publicidade e de dispositivo. Cita o Google Cloud Platform e o Firebase como provedores e informa um endereço em Hong Kong. Esta análise não inspecionou o tráfego de rede, então essas afirmações são do próprio desenvolvedor.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'O que não conseguimos verificar',
        content: ['**Vários pontos importantes para quem busca IA local não estão documentados em nenhuma fonte que conseguimos ler.**'],
        items: [
          'Onde o modelo de IA roda e qual é o modelo: nem a página nem o aviso de privacidade dizem. Recursos do lado do servidor, como memória sincronizada e personagens da comunidade, sugerem um serviço na nuvem.',
          'Se os chats são usados para treinar modelos e onde ficam armazenados: o aviso de privacidade não menciona o conteúdo dos chats nem IA.',
          'Uso offline: nenhum modo offline é listado.',
          'Uma versão para Android e o que o site oficial diz: o site bloqueou nossa requisição.',
          'A licença e o código-fonte: nenhum repositório público foi encontrado.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu x alternativas',
        columns: ['App', 'Plataformas', 'Preço e licença', 'Onde a IA roda', 'Diferença principal'],
        rows: [
          {
            'App': 'HiWaifu',
            'Plataformas': 'iPhone, iPad',
            'Preço e licença': 'Freemium, código fechado',
            'Onde a IA roda': 'Não informado; recursos de servidor',
            'Diferença principal': 'Enorme biblioteca de personagens prontos; 18+',
          },
          {
            'App': '[TokForge](/pt/power-local-llm/tokforge-review)',
            'Plataformas': 'Android',
            'Preço e licença': 'Grátis, proprietário',
            'Onde a IA roda': 'No aparelho',
            'Diferença principal': 'Personagens de roleplay offline, imagens e voz',
          },
          {
            'App': '[RisuAI](/pt/power-local-llm/risuai-review)',
            'Plataformas': 'Web, desktop, mobile',
            'Preço e licença': 'Grátis, GPL 3.0',
            'Onde a IA roda': 'O backend que você escolher',
            'Diferença principal': 'Interface de roleplay de código aberto com cartões de personagem',
          },
          {
            'App': '[Agnai](/pt/power-local-llm/agnai-review)',
            'Plataformas': 'Web',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Onde a IA roda': 'O backend que você escolher',
            'Diferença principal': 'Interface web de código aberto com cartões de personagem',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira a página de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é o HiWaifu',
        items: [
          '**Adultos que querem conversar com personagens de imediato.** Não há nada para configurar.',
          '**Contadores de histórias que valorizam memória e lorebooks.** Ambos são recursos centrais.',
          '**Não é para quem precisa de uso offline ou privacidade no aparelho.** Experimente o [TokForge](/pt/power-local-llm/tokforge-review) no Android ou o [RisuAI](/pt/power-local-llm/risuai-review) com um backend local.',
          '**Não é para menores de 18 anos.** A classificação da App Store é 18+.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe login, site ou versão web do HiWaifu?',
            a: 'A página da App Store cobre apenas iPhone, iPad, Macs com Apple silicon e visionOS, e liga [hiwaifu.com](https://www.hiwaifu.com) como site do desenvolvedor. Nossa requisição a esse site caiu numa verificação antibot, então não foi possível confirmar uma versão de navegador nem uma página de login. O aviso de privacidade menciona dados de conta e de login social, e o app parece funcionar com uma conta.',
          },
          {
            q: '«Hi Waifu» é o mesmo app que HiWaifu?',
            a: 'A página da App Store escreve o nome numa só palavra, «HiWaifu: AI Character Chat», com o ID 6447806780. Se você pesquisou «Hi Waifu» separado, confira se o ID do link desta análise é o mesmo.',
          },
          {
            q: 'O HiWaifu funciona em Mac, Apple Vision ou Android?',
            a: 'A página mostra Macs com chip Apple e visionOS 1.0 ou posterior, com a observação de que a versão para Mac não foi verificada para macOS. Não verificamos um app para Android.',
          },
          {
            q: 'Posso usar o HiWaifu offline ou com meu próprio modelo local?',
            a: 'Nenhum modo offline nem opção de modelo local é listado. Para roleplay local, veja as interfaces de código aberto na comparação acima.',
          },
          {
            q: 'Por que o app aparece com nomes diferentes?',
            a: 'As lojas localizam o título, por exemplo "HiWaifu: KI-Charakter-Chat" na Alemanha e "HiWaifu: AI Character Chat" nos EUA. É um único app, com o mesmo ID da App Store.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o HiWaifu combina com adultos que querem no iPhone um grande catálogo de personagens com memória de longo prazo, lorebooks e chats em grupo.',
          'Ele é a ferramenta errada para uso offline ou privacidade no aparelho. Para isso, comece pelo [TokForge](/pt/power-local-llm/tokforge-review) ou por uma interface auto-hospedada como o [RisuAI](/pt/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[HiWaifu na App Store](https://apps.apple.com/br/app/id6447806780) — versão, recursos, preços, requisitos, faixa etária e histórico de versões.',
          '[Aviso de privacidade do HiWaifu](https://www.hiwaifu.com/privacy.html) — dados coletados e provedores citados.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do TokForge](/pt/power-local-llm/tokforge-review) — chat offline para Android com personagens de roleplay e geração de imagens.',
          '[Análise do RisuAI](/pt/power-local-llm/risuai-review) — uma interface de roleplay de código aberto para web, desktop e mobile.',
          '[Análise do Agnai](/pt/power-local-llm/agnai-review) — uma interface web de roleplay de código aberto com cartões de personagem.',
          '[SillyTavern, Agnai e RisuAI comparados](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — três interfaces de roleplay comparadas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-ar.webp',
    title: 'مراجعة HiWaifu: دردشة شخصيات بالذكاء الاصطناعي سحابية للآيفون والآيباد',
    seoTitle: 'مراجعة HiWaifu 2026: تطبيق آيفون والأسعار والخصوصية',
    intro:
      'HiWaifu تطبيق للآيفون والآيباد للعب الأدوار والدردشة مع شخصيات الذكاء الاصطناعي، مبني حول مكتبة مجتمعية تضم نحو 10 ملايين شخصية. تعرض هذه المراجعة ما توثقه صفحة App Store وإشعار الخصوصية، وما يبقى غير واضح، وكيف يقارن التطبيق بأدوات لعب الأدوار المحلية والمستضافة ذاتيًا.',
    metaDescription:
      'HiWaifu (Hi Waifu) تطبيق مجاني مع مشتريات +18 لدردشة الشخصيات بالذكاء الاصطناعي للآيفون. الإصدار 3.10.1: الدخول والنسخة الويب والأسعار والخصوصية والبدائل.',
    twitterDescription:
      'مراجعة HiWaifu: تطبيق iOS مجاني مع مشتريات لدردشة الشخصيات بالذكاء الاصطناعي. الإصدار 3.10.1 والميزات والأسعار والفئة العمرية والخصوصية والنقاط غير المؤكدة وبدائل محلية.',
    audience:
      'مستخدمو آيفون وآيباد الذين يقارنون تطبيقات دردشة الشخصيات بالذكاء الاصطناعي ويريدون معرفة هل يعمل HiWaifu سحابيًا أم محليًا، وكم يكلّف، وما الذي يقوله إشعار الخصوصية وما الذي لا يقوله.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة HiWaifu',
    targetKeywords: [
      'مراجعة hiwaifu',
      'تطبيق hiwaifu',
      'hiwaifu دردشة شخصيات ذكاء اصطناعي',
      'hiwaifu ios',
      'دردشة شخصيات ذكاء اصطناعي آيفون',
      'تطبيق لعب أدوار بالذكاء الاصطناعي آيفون',
      'خصوصية hiwaifu',
      'بدائل hiwaifu',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu تطبيق مجاني مع مشتريات داخلية ومغلق المصدر للعب الأدوار مع شخصيات الذكاء الاصطناعي على الآيفون والآيباد، ويبدو خدمة سحابية لا تطبيقًا محليًا.** لا تذكر صفحة App Store أين يعمل نموذج الذكاء الاصطناعي، وتصنّف التطبيق +18. تغطي هذه المراجعة الإصدار 3.10.1 وتستند إلى الصفحة العامة وإشعار الخصوصية، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل HiWaifu تطبيق ذكاء اصطناعي محلي، وهل يستحق التجربة للعب الأدوار مع الشخصيات؟',
        answer:
          'يستحق التجربة إن كنت تريد مكتبة شخصيات جاهزة كبيرة على الآيفون وتقبل تطبيقًا سحابيًا مع إعلانات وباقات مدفوعة اختيارية. وهو غير مناسب إن احتجت إلى الاستخدام دون إنترنت أو خصوصية على الجهاز.',
        bullets: [
          'نحو 10 ملايين شخصية من صنع المجتمع في الأنمي والخيال والرومانسية والرعب والحياة اليومية.',
          'ذاكرة طويلة المدى وLorebook وصور للمشاهد ودردشات جماعية حتى 10 شخصيات.',
          'أدوات لإنشاء شخصياتك الخاصة وإبقائها خاصة أو مشاركتها.',
          'خمس عشرة لغة للواجهة مع ترجمة تلقائية للدردشات.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على HiWaifu', anchor: 'get-it' },
      { label: 'ما هو HiWaifu', anchor: 'what-is-hiwaifu' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الأسعار والفئة العمرية والخصوصية', anchor: 'privacy' },
      { label: 'ما لم نستطع التحقق منه', anchor: 'not-verified' },
      { label: 'HiWaifu مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب HiWaifu', anchor: 'who-should-use' },
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
            text: 'HiWaifu من شركة Language Power Media Limited في هونغ كونغ تطبيق مجاني مع مشتريات داخلية للآيفون والآيباد، تدردش فيه وتلعب الأدوار مع شخصيات ذكاء اصطناعي من مكتبة مجتمعية كبيرة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيقًا اجتماعيًا لشخصيات الذكاء الاصطناعي: تختار شخصية أو تنشئها، ويحتفظ التطبيق بذاكرة لقصتك، ويبدو أن العمل الثقيل يتم على خوادمه.',
          },
        ],
        items: [
          'الإصدار المراجَع: 3.10.1، وآخر تحديث له في 2 أكتوبر 2026 بحسب [صفحة App Store](https://apps.apple.com/us/app/id6447806780).',
          'السعر: تنزيل مجاني مع مشتريات داخلية لاشتراك وتصريح موسمي وحزم استهلاكية.',
          'المنصة: iPhone وiPad بنظام iOS أو iPadOS 15.0 أو أحدث.',
          'الانفتاح: مغلق المصدر؛ لم نعثر على مستودع عام.',
          'الصيانة: ثمانية إصدارات على الأقل بين 26 يونيو و2 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'الحصول على HiWaifu',
        content: [
          '**يُوزَّع HiWaifu عبر Apple App Store.** حجم التنزيل 178 MB وهو مجاني مع مشتريات داخل التطبيق.',
        ],
        columns: ['القناة', 'رابط الحصول'],
        rows: [
          {
            'القناة': 'Apple App Store',
            'رابط الحصول': '[HiWaifu على App Store](https://apps.apple.com/us/app/id6447806780)',
          },
          {
            'القناة': 'الموقع',
            'رابط الحصول': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            'القناة': 'سياسة الخصوصية',
            'رابط الحصول': '[إشعار خصوصية HiWaifu](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: 'تغطي الصفحة أجهزة Apple فقط. ردّ الموقع الرسمي على طلبنا بفحص ضد الروبوتات، لذا لم يُقرأ محتواه؛ والرابط مأخوذ من حقل موقع المطوّر في الصفحة.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'ما هو HiWaifu',
        content: [
          '**HiWaifu تطبيق لدردشة الشخصيات ولعب الأدوار يتمحور حول مكتبة مشتركة من شخصيات الذكاء الاصطناعي التي ينشئها المستخدمون.** تذكر الصفحة نحو 10 ملايين شخصية وردودًا مكتوبة بأسلوب النثر، مع سرد وحوار بين علامتي اقتباس، وللشخصيات المغامِرة شريط حالة يبيّن المكان والتحمّل وتقدّم المهمة.',
          'ينشره LANGUAGE POWER MEDIA LIMITED من هونغ كونغ. يبدأ سجل الإصدارات في أبريل 2023، وتصفه الصفحة بأنه تطبيق رفقة ولعب أدوار بالذكاء الاصطناعي، وليس مساعدًا عامًا.',
          'تستند هذه المراجعة إلى صفحة App Store في عدة متاجر وإلى إشعار الخصوصية. لا تتضمن اختبارًا عمليًا، لذا لا تُقيَّم هنا جودة الردود ولا السرعة ولا الإشراف على المحتوى.',
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**نقاط القوة في الصفحة هي الذاكرة وأدوات بناء العوالم وكتالوج شخصيات ضخم.** كل ما يلي مأخوذ من وصف App Store.',
        ],
        items: [
          '**ذاكرة طويلة المدى.** يتذكر التطبيق التفاصيل التي تذكرها، فقد تسأل الشخصية عنها بعد أيام.',
          '**Lorebook والسيناريوهات.** أُضيفت مدخلات بناء العالم وصور السيناريو في الإصدارين 3.10.0 و3.10.1.',
          '**صور المشاهد.** ترتبط الصور بأجواء المشهد.',
          '**دردشات جماعية.** يمكن لما يصل إلى 10 شخصيات المشاركة في محادثة واحدة.',
          '**إنشاء الشخصيات.** يمكنك إنشاء شخصيات ونشرها أو إبقاؤها لنفسك.',
          '**الاكتشاف.** قوائم المميّزة والترتيب تُظهر مع من يدردش الآخرون، ويفتح موجز مقاطع الفيديو القصيرة دردشة شخصية أعجبتك.',
          '**اللغات.** يتوفر التطبيق بـ 15 لغة مع ترجمة تلقائية للدردشات.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والفئة العمرية والخصوصية',
        content: [
          '**يمكن تنزيل HiWaifu مجانًا، مع إعلانات ومشتريات داخل التطبيق.** في App Store الأمريكي تبلغ تكلفة الخطة الشهرية $12.99 والتصريح الموسمي $29.99؛ كما تُباع مستوى أعلى هو Premium+ وحزم طاقة (200 مقابل $1.99) وحزم بلورات وألماس. تقول الصفحة إن Premium يزيل الإعلانات ويضيف طاقة رسائل غير محدودة وإعادة توليد. تختلف الأسعار حسب المتجر.',
          '**يصنّف App Store التطبيق +18.** في المتجر الألماني تشير الصفحة إلى التحقق من العمر ومحتوى جنسي أو عُري وتلميحات جنسية متكررة، وتذكر أن التطبيق يتضمن إعلانات ومراسلة ومحتوى من إنشاء المستخدمين وميزات اجتماعية. تعامل معه على أنه تطبيق للبالغين فقط.',
          '**إشعار الخصوصية إشعار عام للتطبيق.** يسرد بيانات الحساب وبيانات تسجيل الدخول الاجتماعي وبيانات الجهاز والاستخدام، وحزمة Pollfish لاستطلاعات الرأي التي تتلقى معرّفات الإعلانات والجهاز. ويذكر Google Cloud Platform وFirebase كمزوّدين ويعطي عنوانًا في هونغ كونغ. لم تفحص هذه المراجعة حركة الشبكة، لذا فهذه العبارات من المطوّر نفسه.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: 'ما لم نستطع التحقق منه',
        content: ['**عدة نقاط مهمة لقارئ الذكاء الاصطناعي المحلي غير موثقة في أي مصدر استطعنا قراءته.**'],
        items: [
          'أين يعمل نموذج الذكاء الاصطناعي وأي نموذج هو: لا تذكر ذلك الصفحة ولا إشعار الخصوصية. وتشير الميزات من جهة الخادم مثل الذاكرة المتزامنة وشخصيات المجتمع إلى خدمة سحابية.',
          'هل تُستخدم الدردشات لتدريب النماذج وأين تُخزَّن: لا يذكر إشعار الخصوصية محتوى الدردشات ولا الذكاء الاصطناعي.',
          'الاستخدام دون إنترنت: لا يوجد وضع دون إنترنت مذكور.',
          'نسخة Android وما يقوله الموقع الرسمي: حظر الموقع طلبنا.',
          'الترخيص والشيفرة المصدرية: لم نعثر على مستودع عام.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مكان تشغيل الذكاء الاصطناعي', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'HiWaifu',
            'المنصات': 'iPhone وiPad',
            'السعر والترخيص': 'مجاني مع مشتريات، مغلق المصدر',
            'مكان تشغيل الذكاء الاصطناعي': 'غير مذكور؛ ميزات خادم',
            'الفرق الرئيسي': 'مكتبة شخصيات جاهزة ضخمة؛ +18',
          },
          {
            'التطبيق': '[TokForge](/ar/power-local-llm/tokforge-review)',
            'المنصات': 'Android',
            'السعر والترخيص': 'مجاني، ملكية خاصة',
            'مكان تشغيل الذكاء الاصطناعي': 'على الجهاز',
            'الفرق الرئيسي': 'شخصيات لعب أدوار دون إنترنت وتوليد صور وصوت',
          },
          {
            'التطبيق': '[RisuAI](/ar/power-local-llm/risuai-review)',
            'المنصات': 'ويب وسطح مكتب وجوال',
            'السعر والترخيص': 'مجاني، GPL 3.0',
            'مكان تشغيل الذكاء الاصطناعي': 'الواجهة الخلفية التي تختارها',
            'الفرق الرئيسي': 'واجهة لعب أدوار مفتوحة المصدر مع بطاقات شخصيات',
          },
          {
            'التطبيق': '[Agnai](/ar/power-local-llm/agnai-review)',
            'المنصات': 'ويب',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'مكان تشغيل الذكاء الاصطناعي': 'الواجهة الخلفية التي تختارها',
            'الفرق الرئيسي': 'واجهة ويب مفتوحة المصدر مع بطاقات شخصيات',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات في تطبيقات الجهات الخارجية كثيرًا. راجع صفحة كل تطبيق قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب HiWaifu',
        items: [
          '**البالغون الذين يريدون الدردشة مع الشخصيات فورًا.** لا يلزم أي إعداد.',
          '**رواة القصص الذين يقدّرون الذاكرة وLorebook.** كلاهما ميزة أساسية.',
          '**غير مناسب لمن يحتاج إلى الاستخدام دون إنترنت أو خصوصية على الجهاز.** جرّب [TokForge](/ar/power-local-llm/tokforge-review) على Android أو [RisuAI](/ar/power-local-llm/risuai-review) مع واجهة خلفية محلية.',
          '**غير مناسب لمن هم دون 18 عامًا.** تصنيف App Store هو +18.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يوجد تسجيل دخول أو موقع أو نسخة ويب لتطبيق HiWaifu؟',
            a: 'تغطي صفحة التطبيق في App Store الآيفون والآيباد وأجهزة ماك بمعالج Apple silicon وvisionOS فقط، وتربط بـ [hiwaifu.com](https://www.hiwaifu.com) كموقع للمطوّر. اصطدم طلبنا لهذا الموقع بفحص ضد الروبوتات، لذلك لم نتمكن من تأكيد وجود نسخة متصفح أو صفحة تسجيل دخول. يذكر إشعار الخصوصية بيانات الحساب وبيانات تسجيل الدخول عبر وسائل التواصل، لذا يبدو أن التطبيق يعمل بحساب.',
          },
          {
            q: 'هل «Hi Waifu» هو نفسه تطبيق HiWaifu؟',
            a: 'تكتب صفحة App Store الاسم ككلمة واحدة «HiWaifu: AI Character Chat» بالمعرّف 6447806780. إذا بحثت عن «Hi Waifu» بكلمتين، فتأكد من تطابق المعرّف في رابط هذه المراجعة.',
          },
          {
            q: 'هل يعمل HiWaifu على Mac أو Apple Vision أو Android؟',
            a: 'تعرض الصفحة أجهزة Mac بمعالج Apple وvisionOS 1.0 أو أحدث، مع ملاحظة أن نسخة Mac لم يُتحقق منها لنظام macOS. لم نتحقق من وجود تطبيق Android.',
          },
          {
            q: 'هل يمكنني استخدام HiWaifu دون إنترنت أو مع نموذج محلي خاص بي؟',
            a: 'لا يوجد وضع دون إنترنت ولا خيار نموذج محلي مذكور. للعب الأدوار محليًا، راجع الواجهات المفتوحة المصدر في المقارنة أعلاه.',
          },
          {
            q: 'لماذا يظهر التطبيق بأسماء مختلفة؟',
            a: 'تُعرِّب المتاجر العنوان، مثل "HiWaifu: KI-Charakter-Chat" في ألمانيا و"HiWaifu: AI Character Chat" في الولايات المتحدة. هو تطبيق واحد بالمعرّف نفسه في App Store.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب HiWaifu نظريًا البالغين الذين يريدون على الآيفون كتالوج شخصيات كبيرًا مع ذاكرة طويلة المدى وLorebook ودردشات جماعية.',
          'وهو الأداة الخطأ للاستخدام دون إنترنت أو للخصوصية على الجهاز. لذلك ابدأ بـ [TokForge](/ar/power-local-llm/tokforge-review) أو بواجهة مستضافة ذاتيًا مثل [RisuAI](/ar/power-local-llm/risuai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[HiWaifu على App Store](https://apps.apple.com/us/app/id6447806780) — الإصدار والميزات والأسعار والمتطلبات والفئة العمرية وسجل الإصدارات.',
          '[إشعار خصوصية HiWaifu](https://www.hiwaifu.com/privacy.html) — البيانات المجمعة والمزوّدون المذكورون.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة TokForge](/ar/power-local-llm/tokforge-review) — دردشة Android دون إنترنت مع شخصيات لعب أدوار وتوليد صور.',
          '[مراجعة RisuAI](/ar/power-local-llm/risuai-review) — واجهة لعب أدوار مفتوحة المصدر للويب وسطح المكتب والجوال.',
          '[مراجعة Agnai](/ar/power-local-llm/agnai-review) — واجهة ويب مفتوحة المصدر للعب الأدوار مع بطاقات شخصيات.',
          '[مقارنة SillyTavern وAgnai وRisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة بين ثلاث واجهات للعب الأدوار.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/hiwaifu-review-hero-ko.webp',
    title: 'HiWaifu 리뷰: 아이폰·아이패드용 클라우드 AI 캐릭터 채팅',
    seoTitle: 'HiWaifu 리뷰 2026: 아이폰 앱 가격·개인정보',
    intro:
      'HiWaifu는 약 1,000만 개의 커뮤니티 제작 캐릭터를 중심으로 만든 아이폰·아이패드용 AI 캐릭터 채팅 및 롤플레이 앱입니다. 이 리뷰는 App Store 정보와 개인정보 처리 안내가 입증하는 내용, 불분명한 부분, 로컬 및 자체 호스팅 롤플레이 도구와의 차이를 정리합니다.',
    metaDescription:
      'HiWaifu(Hi Waifu)는 아이폰/아이패드용 18세 이상 부분 유료 AI 캐릭터 채팅 앱. 버전 3.10.1의 로그인, 웹 버전, 가격, 개인정보, 로컬 대안을 다룹니다.',
    twitterDescription:
      'HiWaifu 리뷰: 부분 유료 iOS AI 캐릭터 채팅 앱. 버전 3.10.1, 기능, 가격, 연령 등급, 개인정보, 미확인 사항, 로컬 롤플레이 대안.',
    audience:
      'AI 캐릭터 채팅 앱을 비교하며 HiWaifu가 클라우드인지 로컬인지, 비용은 얼마인지, 개인정보 안내가 무엇을 말하고 말하지 않는지 알고 싶은 아이폰·아이패드 사용자 대상.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'HiWaifu 리뷰',
    targetKeywords: [
      'hiwaifu 리뷰',
      'hiwaifu 앱',
      'hiwaifu ai 캐릭터 채팅',
      'hiwaifu ios',
      '아이폰 ai 캐릭터 채팅',
      '아이폰 ai 롤플레이 앱',
      'hiwaifu 개인정보',
      'hiwaifu 대안',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**HiWaifu는 아이폰과 아이패드에서 AI 캐릭터와 롤플레이를 즐기는 비공개 소스의 부분 유료 앱이며, 로컬 앱이 아니라 클라우드 서비스로 보입니다.** App Store 정보에는 AI 모델이 어디에서 실행되는지 나와 있지 않고, 앱 등급은 18세 이상입니다. 이 리뷰는 버전 3.10.1을 다루며 직접 테스트가 아니라 공개된 정보와 개인정보 처리 안내를 근거로 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'HiWaifu는 로컬 AI 앱인가요, 캐릭터 롤플레이용으로 써 볼 만한가요?',
        answer:
          '아이폰에서 대규모 기성 캐릭터 라이브러리를 쓰고 싶고 광고와 선택형 유료 요금제가 있는 클라우드 앱을 받아들일 수 있다면 써 볼 만합니다. 오프라인 사용이나 기기 내 개인정보 보호가 필요하다면 맞지 않습니다.',
        bullets: [
          '애니메, 판타지, 로맨스, 호러, 일상 등 약 1,000만 개의 커뮤니티 제작 캐릭터.',
          '장기 기억, 로어북, 장면 이미지, 최대 10명의 캐릭터가 참여하는 그룹 채팅.',
          '나만의 캐릭터를 만들어 비공개로 두거나 공유할 수 있는 도구.',
          '15개 인터페이스 언어와 채팅 자동 번역.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'HiWaifu 받기', anchor: 'get-it' },
      { label: 'HiWaifu란', anchor: 'what-is-hiwaifu' },
      { label: '기능', anchor: 'features' },
      { label: '가격, 연령 등급, 개인정보', anchor: 'privacy' },
      { label: '확인하지 못한 사항', anchor: 'not-verified' },
      { label: 'HiWaifu와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'HiWaifu가 맞는 사용자', anchor: 'who-should-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: '홍콩 기업 Language Power Media Limited의 HiWaifu는 대규모 커뮤니티 라이브러리의 AI 캐릭터와 채팅하고 롤플레이할 수 있는 아이폰·아이패드용 부분 유료 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'AI 캐릭터를 위한 소셜 앱이라고 생각하면 됩니다. 캐릭터를 고르거나 만들면 앱이 이야기를 기억하고, 무거운 연산은 서버에서 처리되는 것으로 보입니다.',
          },
        ],
        items: [
          '검토한 버전: 3.10.1, 마지막 업데이트는 2026년 10월 2일이며 [App Store 정보](https://apps.apple.com/kr/app/id6447806780) 기준입니다.',
          '가격: 다운로드는 무료이며 구독, 시즌 패스, 소모성 팩의 앱 내 구입이 있습니다.',
          '플랫폼: iOS 또는 iPadOS 15.0 이상의 iPhone과 iPad.',
          '공개 여부: 비공개 소스이며 공개 저장소는 찾지 못했습니다.',
          '유지보수: 2026년 6월 26일부터 10월 2일까지 최소 8회 릴리스되어 방치 프로젝트 경고는 해당되지 않습니다.',
        ],
      },
      getItHiwaifu: {
        id: 'get-it',
        title: 'HiWaifu 받기',
        content: [
          '**HiWaifu는 Apple App Store를 통해 배포됩니다.** 다운로드 크기는 178 MB이며 무료이고 앱 내 구입이 있습니다.',
        ],
        columns: ['채널', '받는 곳'],
        rows: [
          {
            '채널': 'Apple App Store',
            '받는 곳': '[App Store의 HiWaifu](https://apps.apple.com/kr/app/id6447806780)',
          },
          {
            '채널': '웹사이트',
            '받는 곳': '[hiwaifu.com](https://www.hiwaifu.com)',
          },
          {
            '채널': '개인정보 처리방침',
            '받는 곳': '[HiWaifu 개인정보 처리 안내](https://www.hiwaifu.com/privacy.html)',
          },
        ],
        note: '정보는 Apple 기기만 다룹니다. 공식 웹사이트는 요청에 봇 확인으로 응답해 내용을 읽지 못했으며, 링크는 App Store 정보의 개발자 웹사이트 항목에서 가져왔습니다.',
      },
      whatIsHiwaifu: {
        id: 'what-is-hiwaifu',
        title: 'HiWaifu란',
        content: [
          '**HiWaifu는 사용자가 만든 AI 캐릭터의 공유 라이브러리를 중심으로 한 캐릭터 채팅 및 롤플레이 앱입니다.** 정보에는 약 1,000만 개의 캐릭터가 언급되어 있고, 답변은 서술, 따옴표 안의 대사, 그리고 모험형 캐릭터의 경우 위치·체력·퀘스트 진행을 보여 주는 상태 표시가 있는 산문처럼 작성됩니다.',
          '게시자는 홍콩의 LANGUAGE POWER MEDIA LIMITED입니다. 릴리스 기록은 2023년 4월에 시작하며, 정보에서는 범용 어시스턴트가 아니라 AI 컴패니언 및 롤플레이 앱으로 설명합니다.',
          '이 리뷰는 여러 국가 App Store의 정보와 개인정보 처리 안내를 근거로 합니다. 직접 테스트는 포함하지 않으므로 답변 품질, 속도, 콘텐츠 관리는 평가하지 않습니다.',
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**정보가 내세우는 강점은 기억, 세계관 구축 도구, 매우 큰 캐릭터 카탈로그입니다.** 아래 내용은 모두 App Store 설명에서 가져왔습니다.',
        ],
        items: [
          '**장기 기억.** 말한 세부 사항을 앱이 기억하므로 캐릭터가 며칠 뒤에 그에 대해 물어볼 수 있습니다.',
          '**로어북과 시나리오.** 세계관 항목과 시나리오 이미지는 버전 3.10.0과 3.10.1에서 추가되었습니다.',
          '**장면 이미지.** 이미지는 장면의 분위기와 연결됩니다.',
          '**그룹 채팅.** 최대 10명의 캐릭터가 한 대화에 참여할 수 있습니다.',
          '**캐릭터 제작.** 캐릭터를 만들어 공개하거나 혼자 쓸 수 있습니다.',
          '**탐색.** 추천 및 순위 목록에서 다른 사용자가 누구와 채팅하는지 볼 수 있고, 짧은 동영상 피드에서 마음에 드는 캐릭터의 채팅을 바로 열 수 있습니다.',
          '**언어.** 앱은 15개 언어로 제공되며 채팅을 자동 번역합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격, 연령 등급, 개인정보',
        content: [
          '**HiWaifu는 무료로 다운로드할 수 있고 광고와 앱 내 구입이 있습니다.** 한국 App Store에서 월간 요금제는 ₩19,000, 시즌 패스는 ₩44,000이며, 상위 Premium+ 등급, 에너지 팩(200개에 ₩3,300), 크리스탈·다이아몬드 팩도 판매됩니다. 정보에 따르면 Premium은 광고를 없애고 메시지 에너지와 재생성을 무제한으로 제공합니다. 가격은 스토어마다 다릅니다.',
          '**App Store의 연령 등급은 18세 이상입니다.** 독일 스토어의 정보에는 연령 확인, 성적 콘텐츠 또는 노출, 빈번한 성적 암시가 표시되어 있고, 앱에 광고, 메시징, 사용자 생성 콘텐츠, 소셜 기능이 포함된다고 명시되어 있습니다. 성인 전용 앱으로 취급하십시오.',
          '**개인정보 처리 안내는 일반적인 앱 안내입니다.** 계정 정보, 소셜 로그인 데이터, 기기 및 사용 데이터, 광고 ID와 기기 ID를 받는 Pollfish 설문 SDK가 나열되어 있습니다. 제공업체로 Google Cloud Platform과 Firebase를 들고 홍콩 주소를 제시합니다. 이 리뷰는 네트워크 트래픽을 검사하지 않았으므로 이 진술은 개발사 자체의 설명입니다.',
        ],
      },
      notVerified: {
        id: 'not-verified',
        title: '확인하지 못한 사항',
        content: ['**로컬 AI에 관심 있는 독자에게 중요한 여러 사항이 우리가 읽을 수 있었던 어떤 출처에도 기록되어 있지 않습니다.**'],
        items: [
          'AI 모델이 어디에서 실행되는지, 어떤 모델인지: 정보와 개인정보 처리 안내 모두 밝히지 않습니다. 동기화되는 기억과 커뮤니티 캐릭터 같은 서버 측 기능은 클라우드 서비스임을 시사합니다.',
          '채팅이 모델 학습에 쓰이는지, 어디에 저장되는지: 개인정보 처리 안내는 채팅 내용이나 AI를 언급하지 않습니다.',
          '오프라인 사용: 오프라인 모드는 표기되어 있지 않습니다.',
          'Android 버전과 공식 웹사이트의 설명: 사이트가 요청을 차단했습니다.',
          '라이선스와 소스 코드: 공개 저장소는 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'HiWaifu와 대안 비교',
        columns: ['앱', '플랫폼', '가격과 라이선스', 'AI 실행 위치', '핵심 차이'],
        rows: [
          {
            '앱': 'HiWaifu',
            '플랫폼': 'iPhone, iPad',
            '가격과 라이선스': '부분 유료, 비공개 소스',
            'AI 실행 위치': '미표기, 서버 기능 있음',
            '핵심 차이': '대규모 기성 캐릭터 라이브러리, 18세 이상',
          },
          {
            '앱': '[TokForge](/ko/power-local-llm/tokforge-review)',
            '플랫폼': 'Android',
            '가격과 라이선스': '무료, 독점',
            'AI 실행 위치': '기기 내',
            '핵심 차이': '오프라인 롤플레이 캐릭터, 이미지 생성, 음성',
          },
          {
            '앱': '[RisuAI](/ko/power-local-llm/risuai-review)',
            '플랫폼': '웹, 데스크톱, 모바일',
            '가격과 라이선스': '무료, GPL 3.0',
            'AI 실행 위치': '선택한 백엔드',
            '핵심 차이': '캐릭터 카드를 지원하는 오픈소스 롤플레이 프런트엔드',
          },
          {
            '앱': '[Agnai](/ko/power-local-llm/agnai-review)',
            '플랫폼': '웹',
            '가격과 라이선스': '무료, AGPL-3.0',
            'AI 실행 위치': '선택한 백엔드',
            '핵심 차이': '캐릭터 카드를 지원하는 오픈소스 웹 프런트엔드',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 앱의 자체 페이지를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'HiWaifu가 맞는 사용자',
        items: [
          '**바로 캐릭터와 채팅을 시작하고 싶은 성인.** 따로 설정할 것이 없습니다.',
          '**기억과 로어북을 중시하는 스토리텔러.** 둘 다 핵심 기능입니다.',
          '**오프라인 사용이나 기기 내 개인정보 보호가 필요한 사람에게는 맞지 않습니다.** Android에서는 [TokForge](/ko/power-local-llm/tokforge-review)를, 로컬 백엔드와 함께라면 [RisuAI](/ko/power-local-llm/risuai-review)를 써 보십시오.',
          '**18세 미만에게는 맞지 않습니다.** App Store 등급은 18세 이상입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'HiWaifu 로그인, 웹사이트, 웹 버전이 있나요?',
            a: 'App Store 페이지는 아이폰, 아이패드, Apple silicon 맥, visionOS만 다루며 개발자 웹사이트로 [hiwaifu.com](https://www.hiwaifu.com)을 링크합니다. 이 사이트에 보낸 요청은 봇 확인에 막혀 브라우저 버전이나 로그인 페이지는 확인하지 못했습니다. 개인정보 처리방침에 계정 정보와 소셜 로그인 정보가 언급되어 있어 계정으로 로그인하는 앱으로 보입니다.',
          },
          {
            q: '"Hi Waifu"와 HiWaifu는 같은 앱인가요?',
            a: 'App Store 페이지는 이름을 붙여 쓴 "HiWaifu: AI Character Chat"이며 ID는 6447806780입니다. "Hi Waifu"로 띄어 검색했다면 이 리뷰 링크의 ID가 일치하는지 확인하세요.',
          },
          {
            q: 'HiWaifu는 Mac, Apple Vision, Android에서 실행되나요?',
            a: '정보에는 Apple 실리콘 Mac과 visionOS 1.0 이상이 표시되어 있으며, Mac 버전은 macOS용으로 검증되지 않았다는 안내가 있습니다. Android 앱은 확인하지 못했습니다.',
          },
          {
            q: 'HiWaifu를 오프라인이나 내 로컬 모델로 사용할 수 있나요?',
            a: '오프라인 모드나 로컬 모델 옵션은 표기되어 있지 않습니다. 로컬 롤플레이는 위 비교의 오픈소스 프런트엔드를 참고하십시오.',
          },
          {
            q: '앱이 나라마다 다른 이름으로 보이는 이유는 무엇인가요?',
            a: '스토어마다 제목을 현지화하기 때문입니다. 예를 들어 독일에서는 "HiWaifu: KI-Charakter-Chat", 미국에서는 "HiWaifu: AI Character Chat"입니다. App Store ID가 같은 하나의 앱입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'HiWaifu는 아이폰에서 장기 기억, 로어북, 그룹 채팅을 갖춘 대규모 캐릭터 카탈로그를 원하는 성인에게 문서상으로는 잘 맞습니다.',
          '오프라인 사용이나 기기 내 개인정보 보호에는 맞지 않습니다. 그런 경우에는 [TokForge](/ko/power-local-llm/tokforge-review)나 [RisuAI](/ko/power-local-llm/risuai-review) 같은 자체 호스팅 프런트엔드부터 시작하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 HiWaifu](https://apps.apple.com/kr/app/id6447806780) — 버전, 기능, 가격, 요구 사항, 연령 등급, 버전 기록.',
          '[HiWaifu 개인정보 처리 안내](https://www.hiwaifu.com/privacy.html) — 수집 데이터와 명시된 제공업체.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[TokForge 리뷰](/ko/power-local-llm/tokforge-review) — 롤플레이 캐릭터와 이미지 생성을 갖춘 오프라인 Android 채팅.',
          '[RisuAI 리뷰](/ko/power-local-llm/risuai-review) — 웹, 데스크톱, 모바일용 오픈소스 롤플레이 프런트엔드.',
          '[Agnai 리뷰](/ko/power-local-llm/agnai-review) — 캐릭터 카드를 지원하는 오픈소스 웹 롤플레이 프런트엔드.',
          '[SillyTavern·Agnai·RisuAI 비교](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 세 가지 롤플레이 프런트엔드 비교.',
        ],
      },
    },
  },
}
