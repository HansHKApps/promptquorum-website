// FeatureAppPost — Cognira review.
// Added following maker outreach (Thomas Conway, cognira.dev) — 2026-09-26.
// All facts sourced from https://cognira.dev and https://cognira.dev/pricing, fetched fresh and
// verified independently of the maker's outreach email — see apps/cognira.ts for the matching
// ToolRecord and its verification-date comment on the `locality` judgment call.
//
// Two claims from cognira.dev could not be independently substantiated and are deliberately left
// out of this article: that the underlying model is "built on Gemma 4," and that a legacy "Omega
// 188M" model is open-source on Hugging Face (no matching Hugging Face model was found). Do not add
// either claim back without independent verification. No version number is published anywhere for
// Cognira or Cognira Entity — this article does not invent one.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-en.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'People considering a self-learning AI chat assistant with a private-memory feature and a local-binary option, from a single independent developer rather than a company',
    primaryTerm: 'Cognira',
    title: 'Cognira Review: A Self-Learning AI Assistant With a Local Binary and Private Memory',
    seoTitle: 'Cognira Review: Self-Learning AI Assistant',
    intro: 'Cognira ([cognira.dev](https://cognira.dev)) is a chat assistant from a one-person team. This review explains how it works, what it costs, which of its claims could be checked, and who it suits.',
    metaDescription: 'Cognira is a solo-developer AI chat assistant with a guarded learning loop, private per-user memory, and a local Windows/macOS/Linux binary (Cognira Entity). Independently verified pricing, license, and open questions.',
    readTime: '7 min read',
    targetKeywords: [
      'Cognira review',
      'Cognira AI',
      'Cognira Entity',
      'self-learning AI assistant',
      'AI assistant with private memory',
    ],
    leadAnswerBlock: '**Cognira is a closed-source chat assistant from one independent developer that remembers what you teach it and lets you delete those memories one by one.** It is free to try, offers a downloadable local app alongside hosted chat, and is best treated as a young product whose claims come from its own website.',
    quickAnswerTop: {
      en: {
        question: 'What is Cognira and how much does it cost?',
        answer: 'Cognira is a chat assistant with a free tier and two monthly subscriptions that differ only in how many tokens you get each week. Every plan includes the same features.',
        bullets: [
          'Free to start; the first paid plan, Pro, is £15/month',
          'Available as hosted chat and as a desktop download',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: 'tldr' },
      { label: 'What Is Cognira?', anchor: 'what-is-cognira' },
      { label: 'How Cognira Learns and Remembers', anchor: 'key-features' },
      { label: 'Local vs. Hosted: What Cognira Entity Actually Is', anchor: 'local-vs-hosted' },
      { label: 'Pricing and Getting Started', anchor: 'pricing-get-started' },
      { label: 'What We Could Not Verify', anchor: 'not-verified' },
      { label: 'Who Should Use Cognira?', anchor: 'who-should-use' },
      { label: 'Cognira vs. Other Personal AI Assistants', anchor: 'cognira-competitors' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira is an AI chat assistant that adapts to your feedback through a filtered process and stores what it learns in a private memory.' },
          { type: 'plain-terms', text: 'Think of a chat app that does not start from zero every session: you correct it once, it keeps the lesson, and you can look at or erase each saved item.' },
        ],
        items: [
          'Built and run by Thomas Conway alone, not by a company',
          'Weekly token allowance is the only thing separating the free plan from the paid ones',
          'Whether the desktop app runs fully offline is unconfirmed',
          'Source code, license text and version history are not public',
        ],
        callouts: [
          { type: 'note', text: 'This review is the deep-dive companion to Cognira\'s entry in the [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which compares it with other local and hybrid tools at a glance.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'What Is Cognira?',
        content: '**Cognira is made by Thomas Conway, who describes it on [cognira.dev](https://cognira.dev) as "a solo, independent build, not a lab or a startup with a marketing team."** The site arrived as a rebrand of his earlier product, Conway AI (conw.ai), and the move between the two domains was still under way when this review was checked, so expect some pages to change.',
        items: [
          'Model: a proprietary 12-billion-parameter model the site calls "Cognira Retrain 12B"',
          'Two ways to use it: chat in the browser, or the local app described below',
          'Everything here about the product itself is the vendor\'s own description; no third party has reviewed it',
        ],
      },
      features: {
        id: 'key-features',
        title: 'How Cognira Learns and Remembers',
        content: 'Two mechanisms define the product. Both are described on [cognira.dev](https://cognira.dev); neither could be tested independently.',
        items: [
          '**Guarded learning loop** — your corrections and ratings are screened for unsafe or badly formatted content, and any resulting change must pass checks before it goes live. A single conversation cannot alter how the assistant behaves for everyone',
          '**Private memory** — tell it a preference, a fact or a word and it is stored straight away. When a later answer draws on that item, the reply names it, and a one-tap "Forget" removes it',
          '**Not offered** — plugins, integrations, voice and agent-style actions did not appear anywhere on the site',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'Local vs. Hosted: What Cognira Entity Actually Is',
        content: 'Cognira Entity is the downloadable app: a sealed binary for Windows, macOS and Linux. Whether it counts as truly local depends on two statements that point in different directions.',
        items: [
          '**The claim:** the site says "inference, memory, and optional weight-level retraining all stay on your disk. Nothing leaves." Taken literally, the model runs on your machine rather than calling a server',
          '**The packaging:** Entity sits inside the same weekly-token plans as the hosted chat. That looks more like an account-linked, metered client than an offline tool of the Ollama or LM Studio kind',
          '**The hosted side:** the web chat is served from one 16 GB iMac using Apple\'s MLX framework. MLX belongs to that service only, so Entity is not limited to Apple Silicon',
          '**The gap:** the documentation page returned a 404, so nothing public shows whether Entity works with no account and no network',
        ],
        note: 'This review therefore calls Cognira a hybrid. The local part is real; whether it can run fully offline is unconfirmed, and a quick test with networking switched off would settle it for your own machine.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'Pricing and Getting Started',
        content: '**Start at [cognira.dev](https://cognira.dev) by creating an account** — even the free plan needs one, and the Entity download appears once you are signed in. Prices are in pounds sterling on the [pricing page](https://cognira.dev/pricing).',
        columns: ['Plan', 'Price', 'Tokens per week'],
        rows: [
          { 'Plan': 'Free', 'Price': '£0', 'Tokens per week': '25K' },
          { 'Plan': 'Pro', 'Price': '£15/month', 'Tokens per week': '500K' },
          { 'Plan': 'Max', 'Price': '£30/month', 'Tokens per week': '2M' },
        ],
        items: [
          'Every plan includes the full model, private memory and Entity; the allowance is the only difference',
          'Allowances reset on Mondays and count what you type as well as what the model writes',
          'Paid plans renew monthly; there is no lifetime option, and no team, enterprise or refund terms were published',
        ],
        note: 'If the numbers on the live pricing page differ from this table, the live page wins.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'What We Could Not Verify',
        content: 'Several things a careful buyer would normally check do not exist publicly, so this review cannot confirm them.',
        items: [
          '**License:** closed-source. No LICENSE file or user agreement was found',
          '**Code:** no GitHub repository, so the binary\'s behavior cannot be inspected',
          '**Version:** no version number, changelog or release history for either the chat or Entity',
          '**Model:** architecture and training are known only through the vendor\'s own wording',
          '**Data handling:** no independent description of what the hosted service stores or sends',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Cognira?',
        content: 'The question is whether a persistent, editable memory is worth trusting to an unaudited product from one person.',
        subsections: [
          {
            title: 'A good fit if you',
            list: [
              'Are tired of re-explaining your preferences each session',
              'Are fine with closed software from a solo developer',
              'Want to try a local app without paying first',
            ],
          },
          {
            title: 'Look elsewhere if you',
            list: [
              'Need an audited, open-source tool',
              'Need proven offline use with no account',
              'Need a vendor with a long track record, since this one has just rebranded',
              'Want voice, plugins or agent actions',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira vs. Other Personal AI Assistants',
        content: 'These are the closest personal-memory assistants in the [Local LLM Software Directory](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — open-source, with long-term memory and document search over local models; its code can be audited. [Khoj review](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — an open-source effort to train a persistent personal memory model, with a public repository. [Second Me review](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — a personal agent aimed at carrying out tasks rather than remembering conversations. [Aori review](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — a Mac-only assistant from a similarly small team. [Jarvis review](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How do I try Cognira without committing?', a: 'Sign up for the free plan, teach it one preference, check that it shows up in your memory list, then download Entity and compare how the two behave.' },
          { q: 'Can I use Cognira with sensitive or regulated data?', a: 'Not on the evidence available: nothing independent describes how the hosted service handles data, so read the vendor\'s own terms first and keep confidential material out until you have.' },
          { q: 'Should I pick Cognira or Khoj?', a: 'Choose Khoj if you want code you can audit and run yourself; choose Cognira if you would rather have memory working in a browser with no setup and accept a closed product.' },
          { q: 'How do I check whether Entity really works offline?', a: 'Install it, disconnect from the network, and send a message. If it replies, inference is local; if it asks you to sign in or fails, it depends on the account.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'The official homepage, describing Cognira\'s guarded learning loop, memory feature, and Cognira Entity.' },
          { url: 'https://cognira.dev/pricing', title: 'Cognira Pricing', description: 'Official pricing tiers, token allowances, and the Cognira Entity platform description used for this review.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[oMLX Review](/power-local-llm/omlx-review) — a local inference server built on MLX, the Apple framework behind Cognira\'s hosted chat.',
        ],
      },
    },
  },
  de: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-de.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'Menschen, die einen selbstlernenden KI-Chat-Assistenten mit privater Gedächtnisfunktion und lokaler Binärdatei erwägen, entwickelt von einem einzelnen unabhängigen Entwickler statt einem Unternehmen',
    primaryTerm: 'Cognira',
    title: 'Cognira Review: Ein selbstlernender KI-Assistent mit lokaler Binärdatei und privatem Gedächtnis',
    seoTitle: 'Cognira Review: Selbstlernender KI-Assistent',
    intro: 'Cognira ([cognira.dev](https://cognira.dev)) ist ein Chat-Assistent eines Ein-Personen-Teams. Diese Review erklärt, wie er funktioniert, was er kostet, welche seiner Aussagen sich prüfen ließen und für wen er sich eignet.',
    metaDescription: 'Cognira ist ein KI-Chat-Assistent eines Einzelentwicklers mit geführter Lernschleife, privatem Gedächtnis pro Nutzer und lokaler Windows/macOS/Linux-Binärdatei (Cognira Entity). Unabhängig geprüfte Preise, Lizenz und offene Fragen.',
    readTime: '7 Min. Lesezeit',
    targetKeywords: [
      'Cognira Review',
      'Cognira KI',
      'Cognira Entity',
      'selbstlernender KI-Assistent',
      'KI-Assistent mit privatem Gedächtnis',
    ],
    leadAnswerBlock: '**Cognira ist ein Closed-Source-Chat-Assistent eines einzelnen unabhängigen Entwicklers, der sich merkt, was Sie ihm beibringen, und Ihnen erlaubt, diese Erinnerungen einzeln zu löschen.** Er lässt sich kostenlos testen, bietet neben dem gehosteten Chat eine herunterladbare lokale App und ist am besten als junges Produkt zu betrachten, dessen Aussagen von der eigenen Website stammen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Cognira und wie viel kostet es?',
        answer: 'Cognira ist ein Chat-Assistent mit kostenloser Stufe und zwei Monatsabos, die sich nur darin unterscheiden, wie viele Tokens pro Woche enthalten sind. Alle Tarife bieten denselben Funktionsumfang.',
        bullets: [
          'Der Einstieg ist kostenlos; der erste kostenpflichtige Tarif, Pro, kostet £15/Monat',
          'Verfügbar als gehosteter Chat und als Desktop-Download',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Was ist Cognira?', anchor: 'what-is-cognira' },
      { label: 'Wie Cognira lernt und sich erinnert', anchor: 'key-features' },
      { label: 'Lokal vs. gehostet: Was Cognira Entity tatsächlich ist', anchor: 'local-vs-hosted' },
      { label: 'Preise und Einstieg', anchor: 'pricing-get-started' },
      { label: 'Was sich nicht überprüfen ließ', anchor: 'not-verified' },
      { label: 'Für wen eignet sich Cognira?', anchor: 'who-should-use' },
      { label: 'Cognira im Vergleich zu anderen persönlichen KI-Assistenten', anchor: 'cognira-competitors' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira ist ein KI-Chat-Assistent, der sich über einen gefilterten Prozess an Ihr Feedback anpasst und Gelerntes in einem privaten Gedächtnis ablegt.' },
          { type: 'plain-terms', text: 'Stellen Sie sich eine Chat-App vor, die nicht in jeder Sitzung bei null beginnt: Sie korrigieren sie einmal, sie behält die Lektion, und Sie können jeden gespeicherten Eintrag ansehen oder löschen.' },
        ],
        items: [
          'Entwickelt und betrieben von Thomas Conway allein, nicht von einem Unternehmen',
          'Das wöchentliche Token-Kontingent ist das Einzige, was den kostenlosen Tarif von den kostenpflichtigen trennt',
          'Ob die Desktop-App vollständig offline läuft, ist nicht bestätigt',
          'Quellcode, Lizenztext und Versionshistorie sind nicht öffentlich',
        ],
        callouts: [
          { type: 'note', text: 'Diese Review ergänzt den Eintrag zu Cognira im [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), der es auf einen Blick mit anderen lokalen und hybriden Tools vergleicht.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'Was ist Cognira?',
        content: '**Cognira stammt von Thomas Conway, der es auf [cognira.dev](https://cognira.dev) als „einen Solo-Alleingang, unabhängig, kein Labor und kein Start-up mit Marketingteam" beschreibt.** Die Seite entstand als Rebranding seines früheren Produkts Conway AI (conw.ai); der Wechsel zwischen den beiden Domains war bei der Prüfung dieser Review noch im Gang, daher können sich einzelne Seiten ändern.',
        items: [
          'Modell: ein proprietäres Modell mit 12 Milliarden Parametern, das die Website „Cognira Retrain 12B" nennt',
          'Zwei Nutzungswege: Chat im Browser oder die unten beschriebene lokale App',
          'Alles hier zum Produkt selbst ist die Eigenbeschreibung des Anbieters; keine dritte Seite hat es bewertet',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wie Cognira lernt und sich erinnert',
        content: 'Zwei Mechanismen prägen das Produkt. Beide sind auf [cognira.dev](https://cognira.dev) beschrieben; keinen davon ließ sich unabhängig testen.',
        items: [
          '**Geführte Lernschleife** — Ihre Korrekturen und Bewertungen werden auf unsichere oder fehlerhaft formatierte Inhalte geprüft, und jede daraus folgende Änderung muss Kontrollen bestehen, bevor sie live geht. Ein einzelnes Gespräch kann das Verhalten des Assistenten für alle also nicht verändern',
          '**Privates Gedächtnis** — nennen Sie eine Vorliebe, eine Tatsache oder ein Wort, und es wird sofort gespeichert. Greift eine spätere Antwort auf diesen Eintrag zurück, nennt die Antwort ihn, und mit einem Fingertipp auf „Vergessen" verschwindet er',
          '**Nicht vorhanden** — Plugins, Integrationen, Sprache und agentenartige Aktionen tauchten nirgends auf der Website auf',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'Lokal vs. gehostet: Was Cognira Entity tatsächlich ist',
        content: 'Cognira Entity ist die herunterladbare App: eine versiegelte Binärdatei für Windows, macOS und Linux. Ob sie als wirklich lokal gelten kann, hängt von zwei Aussagen ab, die in unterschiedliche Richtungen weisen.',
        items: [
          '**Die Behauptung:** Die Website sagt: „Inferenz, Gedächtnis und optionales Retraining auf Gewichtsebene bleiben auf Ihrer Festplatte. Nichts verlässt sie." Wörtlich genommen läuft das Modell auf Ihrem Rechner, statt einen Server aufzurufen',
          '**Die Verpackung:** Entity ist in dieselben Wochen-Token-Tarife eingebunden wie der gehostete Chat. Das wirkt eher wie ein kontogebundener, mengenbegrenzter Client als wie ein Offline-Tool in der Art von Ollama oder LM Studio',
          '**Die gehostete Seite:** Der Web-Chat wird von einem einzelnen iMac mit 16 GB über Apples MLX-Framework bereitgestellt. MLX gehört nur zu diesem Dienst, Entity ist also nicht auf Apple Silicon beschränkt',
          '**Die Lücke:** Die Dokumentationsseite lieferte einen 404-Fehler, daher zeigt nichts Öffentliches, ob Entity ohne Konto und ohne Netzwerk funktioniert',
        ],
        note: 'Diese Review bezeichnet Cognira deshalb als Hybrid. Der lokale Teil ist real; ob er vollständig offline laufen kann, ist unbestätigt, und ein kurzer Test bei abgeschaltetem Netzwerk klärt das für Ihren eigenen Rechner.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'Preise und Einstieg',
        content: '**Beginnen Sie auf [cognira.dev](https://cognira.dev) mit der Kontoerstellung** — selbst der kostenlose Tarif setzt eines voraus, und der Entity-Download erscheint, sobald Sie angemeldet sind. Die Preise stehen in Pfund Sterling auf der [Preisseite](https://cognira.dev/pricing).',
        columns: ['Tarif', 'Preis', 'Tokens pro Woche'],
        rows: [
          { 'Tarif': 'Free', 'Preis': '£0', 'Tokens pro Woche': '25K' },
          { 'Tarif': 'Pro', 'Preis': '£15/Monat', 'Tokens pro Woche': '500K' },
          { 'Tarif': 'Max', 'Preis': '£30/Monat', 'Tokens pro Woche': '2M' },
        ],
        items: [
          'Jeder Tarif enthält das volle Modell, das private Gedächtnis und Entity; das Kontingent ist der einzige Unterschied',
          'Die Kontingente werden montags zurückgesetzt und zählen sowohl Ihre Eingaben als auch die Ausgabe des Modells',
          'Kostenpflichtige Tarife verlängern sich monatlich; eine Lifetime-Option gibt es nicht, und weder Team- oder Enterprise-Konditionen noch Rückerstattungsbedingungen wurden veröffentlicht',
        ],
        note: 'Weichen die Zahlen auf der Live-Preisseite von dieser Tabelle ab, gilt die Live-Seite.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'Was sich nicht überprüfen ließ',
        content: 'Mehrere Dinge, die ein sorgfältiger Käufer normalerweise prüfen würde, gibt es öffentlich nicht; diese Review kann sie daher nicht bestätigen.',
        items: [
          '**Lizenz:** Closed Source. Weder eine LICENSE-Datei noch eine Nutzungsvereinbarung wurde gefunden',
          '**Code:** kein GitHub-Repository, das Verhalten der Binärdatei lässt sich also nicht untersuchen',
          '**Version:** weder Versionsnummer noch Changelog oder Release-Historie, weder für den Chat noch für Entity',
          '**Modell:** Architektur und Training sind nur durch die Formulierungen des Anbieters bekannt',
          '**Datenverarbeitung:** keine unabhängige Beschreibung, was der gehostete Dienst speichert oder versendet',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen eignet sich Cognira?',
        content: 'Die Frage ist, ob ein dauerhaftes, editierbares Gedächtnis es wert ist, es einem ungeprüften Produkt einer einzelnen Person anzuvertrauen.',
        subsections: [
          {
            title: 'Gut geeignet, wenn Sie',
            list: [
              'es leid sind, Ihre Vorlieben in jeder Sitzung neu zu erklären',
              'mit Closed-Source-Software eines Einzelentwicklers einverstanden sind',
              'eine lokale App ausprobieren möchten, ohne vorab zu zahlen',
            ],
          },
          {
            title: 'Besser woanders suchen, wenn Sie',
            list: [
              'ein geprüftes Open-Source-Tool benötigen',
              'nachgewiesene Offline-Nutzung ohne Konto brauchen',
              'einen Anbieter mit langer Erfolgsbilanz brauchen, denn dieser hat gerade erst sein Rebranding hinter sich',
              'Sprache, Plugins oder Agenten-Aktionen wünschen',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira im Vergleich zu anderen persönlichen KI-Assistenten',
        content: 'Das sind die nächsten Verwandten unter den Assistenten mit persönlichem Gedächtnis im [Local LLM Software Directory](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — Open Source, mit Langzeitgedächtnis und Dokumentensuche über lokale Modelle; der Code lässt sich prüfen. [Khoj-Review](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — ein Open-Source-Projekt, das ein dauerhaftes persönliches Gedächtnismodell trainiert, mit öffentlichem Repository. [Second-Me-Review](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — ein persönlicher Agent, der Aufgaben erledigen soll, statt sich Gespräche zu merken. [Aori-Review](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — ein Assistent nur für den Mac, von einem ähnlich kleinen Team. [Jarvis-Review](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie probiere ich Cognira aus, ohne mich festzulegen?', a: 'Melden Sie sich für den kostenlosen Tarif an, bringen Sie ihm eine Vorliebe bei, prüfen Sie, ob sie in Ihrer Gedächtnisliste auftaucht, laden Sie dann Entity herunter und vergleichen Sie das Verhalten beider.' },
          { q: 'Kann ich Cognira mit sensiblen oder regulierten Daten nutzen?', a: 'Nach der verfügbaren Beweislage nicht: Nichts Unabhängiges beschreibt, wie der gehostete Dienst mit Daten umgeht. Lesen Sie zuerst die Bedingungen des Anbieters und halten Sie vertrauliches Material heraus, bis Sie das getan haben.' },
          { q: 'Sollte ich Cognira oder Khoj wählen?', a: 'Wählen Sie Khoj, wenn Sie Code wollen, den Sie prüfen und selbst betreiben können; wählen Sie Cognira, wenn Ihnen ein Gedächtnis im Browser ohne Einrichtung lieber ist und Sie ein Closed-Source-Produkt in Kauf nehmen.' },
          { q: 'Wie prüfe ich, ob Entity wirklich offline funktioniert?', a: 'Installieren Sie es, trennen Sie die Netzwerkverbindung und senden Sie eine Nachricht. Antwortet es, läuft die Inferenz lokal; verlangt es eine Anmeldung oder schlägt fehl, hängt es vom Konto ab.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'Die offizielle Startseite, die Cogniras geführte Lernschleife, die Gedächtnisfunktion und Cognira Entity beschreibt.' },
          { url: 'https://cognira.dev/pricing', title: 'Cognira Preise', description: 'Offizielle Tarife, Token-Kontingente und die Plattformbeschreibung von Cognira Entity, die für diese Review herangezogen wurden.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[oMLX Review](/power-local-llm/omlx-review) — ein lokaler Inferenzserver auf Basis von MLX, dem Apple-Framework hinter Cogniras gehostetem Chat.',
        ],
      },
    },
  },
  fr: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-fr.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'Personnes qui envisagent un assistant de chat IA auto-apprenant, doté d\'une mémoire privée et d\'une option de binaire local, conçu par un développeur indépendant plutôt que par une entreprise',
    primaryTerm: 'Cognira',
    title: 'Avis Cognira : un assistant IA auto-apprenant avec binaire local et mémoire privée',
    seoTitle: 'Avis Cognira : assistant IA auto-apprenant',
    intro: 'Cognira ([cognira.dev](https://cognira.dev)) est un assistant de chat créé par une équipe d\'une seule personne. Cet avis explique son fonctionnement, son prix, ce que nous avons pu vérifier de ses affirmations et à qui il s\'adresse.',
    metaDescription: 'Cognira est un assistant de chat IA d\'un développeur indépendant : boucle d\'apprentissage encadrée, mémoire privée par utilisateur, binaire local Windows/macOS/Linux (Cognira Entity). Tarifs, licence et points non vérifiés.',
    readTime: '7 min de lecture',
    targetKeywords: [
      'avis Cognira',
      'Cognira IA',
      'Cognira Entity',
      'assistant IA auto-apprenant',
      'assistant IA avec mémoire privée',
    ],
    leadAnswerBlock: '**Cognira est un assistant de chat à code fermé, conçu par un développeur indépendant, qui retient ce que vous lui apprenez et vous laisse supprimer ces souvenirs un par un.** Il est gratuit à l\'essai, propose une application locale à télécharger en plus du chat hébergé, et mieux vaut le considérer comme un produit jeune dont les affirmations proviennent de son propre site.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Cognira et combien ça coûte ?',
        answer: 'Cognira est un assistant de chat avec une offre gratuite et deux abonnements mensuels qui ne se distinguent que par le nombre de jetons disponibles chaque semaine. Toutes les offres incluent les mêmes fonctionnalités.',
        bullets: [
          'Gratuit pour commencer ; la première offre payante, Pro, coûte 15 £/mois',
          'Disponible en chat hébergé et en application de bureau à télécharger',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Qu\'est-ce que Cognira ?', anchor: 'what-is-cognira' },
      { label: 'Comment Cognira apprend et mémorise', anchor: 'key-features' },
      { label: 'Local ou hébergé : ce qu\'est vraiment Cognira Entity', anchor: 'local-vs-hosted' },
      { label: 'Tarifs et prise en main', anchor: 'pricing-get-started' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'not-verified' },
      { label: 'À qui s\'adresse Cognira ?', anchor: 'who-should-use' },
      { label: 'Cognira face aux autres assistants IA personnels', anchor: 'cognira-competitors' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira est un assistant de chat IA qui s\'adapte à vos retours par un processus filtré et range ce qu\'il apprend dans une mémoire privée.' },
          { type: 'plain-terms', text: 'Imaginez une appli de chat qui ne repart pas de zéro à chaque session : vous la corrigez une fois, elle garde la leçon, et vous pouvez consulter ou effacer chaque élément enregistré.' },
        ],
        items: [
          'Conçu et exploité par Thomas Conway seul, et non par une entreprise',
          'Le quota hebdomadaire de jetons est la seule différence entre l\'offre gratuite et les offres payantes',
          'Le fonctionnement de l\'application de bureau entièrement hors ligne n\'est pas confirmé',
          'Le code source, le texte de la licence et l\'historique des versions ne sont pas publics',
        ],
        callouts: [
          { type: 'note', text: 'Cet avis est le complément détaillé de la fiche de Cognira dans le [Répertoire des logiciels d\'IA locale](/power-local-llm/local-llm-software-directory), qui le compare d\'un coup d\'œil à d\'autres outils locaux et hybrides.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'Qu\'est-ce que Cognira ?',
        content: '**Cognira est l\'œuvre de Thomas Conway, qui le décrit sur [cognira.dev](https://cognira.dev) comme « une création indépendante en solo, pas un labo ni une startup dotée d\'une équipe marketing ».** Le site est issu du changement de marque de son produit précédent, Conway AI (conw.ai) ; la bascule entre les deux domaines était encore en cours lors de la vérification de cet avis, certaines pages sont donc susceptibles de changer.',
        items: [
          'Modèle : un modèle propriétaire de 12 milliards de paramètres que le site nomme « Cognira Retrain 12B »',
          'Deux modes d\'utilisation : le chat dans le navigateur, ou l\'application locale décrite plus bas',
          'Tout ce qui concerne le produit lui-même provient de l\'éditeur ; aucun tiers ne l\'a évalué',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Comment Cognira apprend et mémorise',
        content: 'Deux mécanismes définissent le produit. Tous deux sont décrits sur [cognira.dev](https://cognira.dev) ; aucun n\'a pu être testé de façon indépendante.',
        items: [
          '**Boucle d\'apprentissage encadrée** — vos corrections et évaluations sont filtrées pour écarter les contenus dangereux ou mal formatés, et tout changement qui en résulte doit passer des contrôles avant sa mise en ligne. Une seule conversation ne peut donc pas modifier le comportement de l\'assistant pour tout le monde',
          '**Mémoire privée** — indiquez-lui une préférence, un fait ou un mot, et il est enregistré aussitôt. Lorsqu\'une réponse ultérieure s\'appuie sur cet élément, elle le mentionne, et un simple bouton « Oublier » le supprime',
          '**Non proposés** — plugins, intégrations, voix et actions d\'agent n\'apparaissaient nulle part sur le site',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'Local ou hébergé : ce qu\'est vraiment Cognira Entity',
        content: 'Cognira Entity est l\'application à télécharger : un binaire scellé pour Windows, macOS et Linux. Qu\'elle soit réellement locale dépend de deux affirmations qui vont dans des sens opposés.',
        items: [
          '**L\'affirmation :** le site indique que « l\'inférence, la mémoire et le réentraînement optionnel au niveau des poids restent tous sur votre disque. Rien n\'en sort. » À la lettre, le modèle tourne donc sur votre machine au lieu d\'interroger un serveur',
          '**Le packaging :** Entity relève des mêmes offres à quota hebdomadaire de jetons que le chat hébergé. On pense davantage à un client mesuré et lié à un compte qu\'à un outil hors ligne du genre d\'Ollama ou de LM Studio',
          '**Côté hébergé :** le chat web est servi depuis un seul iMac de 16 Go grâce au framework MLX d\'Apple. MLX ne concerne que ce service ; Entity n\'est donc pas réservé à Apple Silicon',
          '**Le flou :** la page de documentation renvoyait une erreur 404, et rien de public ne montre si Entity fonctionne sans compte ni réseau',
        ],
        note: 'Cet avis qualifie donc Cognira d\'outil hybride. La partie locale existe bel et bien ; sa capacité à fonctionner entièrement hors ligne n\'est pas confirmée, et un essai rapide avec le réseau coupé vous renseignera sur votre propre machine.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'Tarifs et prise en main',
        content: '**Commencez sur [cognira.dev](https://cognira.dev) en créant un compte** — même l\'offre gratuite en exige un, et le téléchargement d\'Entity apparaît une fois connecté. Les prix sont en livres sterling sur la [page des tarifs](https://cognira.dev/pricing).',
        columns: ['Offre', 'Prix', 'Jetons par semaine'],
        rows: [
          { 'Offre': 'Gratuite', 'Prix': '0 £', 'Jetons par semaine': '25K' },
          { 'Offre': 'Pro', 'Prix': '15 £/mois', 'Jetons par semaine': '500K' },
          { 'Offre': 'Max', 'Prix': '30 £/mois', 'Jetons par semaine': '2M' },
        ],
        items: [
          'Chaque offre inclut le modèle complet, la mémoire privée et Entity ; seul le quota change',
          'Les quotas se réinitialisent le lundi et comptent aussi bien ce que vous saisissez que ce que le modèle écrit',
          'Les offres payantes se renouvellent chaque mois ; il n\'existe pas de formule à vie, et aucune condition pour les équipes, les entreprises ou le remboursement n\'a été publiée',
        ],
        note: 'Si les chiffres de la page des tarifs en ligne diffèrent de ce tableau, c\'est la page en ligne qui fait foi.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: 'Plusieurs éléments qu\'un acheteur prudent contrôlerait d\'ordinaire n\'existent pas publiquement ; cet avis ne peut donc pas les confirmer.',
        items: [
          '**Licence :** code fermé. Aucun fichier LICENSE ni contrat d\'utilisation n\'a été trouvé',
          '**Code :** pas de dépôt GitHub, le comportement du binaire ne peut donc pas être inspecté',
          '**Version :** aucun numéro de version, journal des modifications ni historique de publication, ni pour le chat ni pour Entity',
          '**Modèle :** son architecture et son entraînement ne sont connus que par les termes de l\'éditeur',
          '**Traitement des données :** aucune description indépendante de ce que le service hébergé stocke ou transmet',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse Cognira ?',
        content: 'Reste à savoir si une mémoire persistante et modifiable mérite d\'être confiée à un produit non audité, conçu par une seule personne.',
        subsections: [
          {
            title: 'Un bon choix si vous',
            list: [
              'En avez assez de réexpliquer vos préférences à chaque session',
              'Acceptez un logiciel fermé d\'un développeur indépendant',
              'Voulez essayer une application locale sans payer d\'abord',
            ],
          },
          {
            title: 'Regardez ailleurs si vous',
            list: [
              'Avez besoin d\'un outil open source et audité',
              'Exigez un usage hors ligne éprouvé, sans compte',
              'Cherchez un éditeur avec un long historique, celui-ci venant de changer de marque',
              'Voulez de la voix, des plugins ou des actions d\'agent',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira face aux autres assistants IA personnels',
        content: 'Voici les assistants à mémoire personnelle les plus proches dans le [Répertoire des logiciels d\'IA locale](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — open source, avec mémoire à long terme et recherche documentaire sur des modèles locaux ; son code peut être audité. [Avis Khoj](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — un projet open source qui vise à entraîner un modèle de mémoire personnelle persistante, avec un dépôt public. [Avis Second Me](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — un agent personnel conçu pour exécuter des tâches plutôt que pour se souvenir des conversations. [Avis Aori](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — un assistant réservé à Mac, issu d\'une équipe tout aussi réduite. [Avis Jarvis](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Comment essayer Cognira sans m\'engager ?', a: 'Inscrivez-vous à l\'offre gratuite, enseignez-lui une préférence, vérifiez qu\'elle figure dans votre liste de souvenirs, puis téléchargez Entity et comparez le comportement des deux.' },
          { q: 'Puis-je utiliser Cognira avec des données sensibles ou réglementées ?', a: 'Pas au vu des éléments disponibles : rien d\'indépendant ne décrit le traitement des données par le service hébergé. Lisez d\'abord les conditions de l\'éditeur et gardez les documents confidentiels à l\'écart d\'ici là.' },
          { q: 'Dois-je choisir Cognira ou Khoj ?', a: 'Optez pour Khoj si vous voulez un code auditable que vous exécutez vous-même ; optez pour Cognira si vous préférez une mémoire prête à l\'emploi dans un navigateur, sans installation, au prix d\'un produit fermé.' },
          { q: 'Comment vérifier qu\'Entity fonctionne vraiment hors ligne ?', a: 'Installez-le, coupez le réseau et envoyez un message. S\'il répond, l\'inférence est locale ; s\'il vous demande de vous connecter ou échoue, il dépend du compte.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'La page d\'accueil officielle, qui décrit la boucle d\'apprentissage encadrée de Cognira, sa fonction de mémoire et Cognira Entity.' },
          { url: 'https://cognira.dev/pricing', title: 'Tarifs Cognira', description: 'Les offres tarifaires officielles, les quotas de jetons et la description de la plateforme Cognira Entity utilisés pour cet avis.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis oMLX](/power-local-llm/omlx-review) — un serveur d\'inférence local fondé sur MLX, le framework d\'Apple derrière le chat hébergé de Cognira.',
        ],
      },
    },
  },
  es: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-es.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'Personas que valoran un asistente de chat de IA autoaprendiz con memoria privada y opción de binario local, creado por un solo desarrollador independiente y no por una empresa',
    primaryTerm: 'Cognira',
    title: 'Análisis de Cognira: un asistente de IA autoaprendiz con binario local y memoria privada',
    seoTitle: 'Análisis de Cognira: asistente de IA autoaprendiz',
    intro: 'Cognira ([cognira.dev](https://cognira.dev)) es un asistente de chat creado por un equipo de una sola persona. Este análisis explica cómo funciona, cuánto cuesta, qué afirmaciones se pudieron comprobar y a quién le conviene.',
    metaDescription: 'Cognira es un asistente de chat de IA de un desarrollador independiente, con bucle de aprendizaje supervisado, memoria privada por usuario y binario local para Windows/macOS/Linux (Cognira Entity). Precios, licencia y dudas verificados de forma independiente.',
    readTime: '7 min de lectura',
    targetKeywords: [
      'análisis de Cognira',
      'Cognira IA',
      'Cognira Entity',
      'asistente de IA autoaprendiz',
      'asistente de IA con memoria privada',
    ],
    leadAnswerBlock: '**Cognira es un asistente de chat de código cerrado, de un solo desarrollador independiente, que recuerda lo que le enseñas y te deja borrar esos recuerdos uno a uno.** Se puede probar gratis, ofrece una app local descargable además del chat alojado y conviene tratarlo como un producto joven cuyas afirmaciones proceden de su propio sitio web.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Cognira y cuánto cuesta?',
        answer: 'Cognira es un asistente de chat con un plan gratuito y dos suscripciones mensuales que solo se distinguen por los tokens que recibes cada semana. Todos los planes incluyen las mismas funciones.',
        bullets: [
          'Se empieza gratis; el primer plan de pago, Pro, cuesta 15 £/mes',
          'Disponible como chat alojado y como descarga de escritorio',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: '¿Qué es Cognira?', anchor: 'what-is-cognira' },
      { label: 'Cómo aprende y recuerda Cognira', anchor: 'key-features' },
      { label: 'Local vs. alojado: qué es realmente Cognira Entity', anchor: 'local-vs-hosted' },
      { label: 'Precios y primeros pasos', anchor: 'pricing-get-started' },
      { label: 'Lo que no pudimos verificar', anchor: 'not-verified' },
      { label: '¿Quién debería usar Cognira?', anchor: 'who-should-use' },
      { label: 'Cognira frente a otros asistentes de IA personales', anchor: 'cognira-competitors' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira es un asistente de chat de IA que se adapta a tus comentarios mediante un proceso filtrado y guarda lo aprendido en una memoria privada.' },
          { type: 'plain-terms', text: 'Piensa en una app de chat que no empieza de cero en cada sesión: la corriges una vez, conserva la lección y puedes consultar o borrar cada elemento guardado.' },
        ],
        items: [
          'Lo crea y lo gestiona Thomas Conway en solitario, no una empresa',
          'La cuota semanal de tokens es lo único que separa el plan gratuito de los de pago',
          'No está confirmado que la app de escritorio funcione totalmente sin conexión',
          'El código fuente, el texto de la licencia y el historial de versiones no son públicos',
        ],
        callouts: [
          { type: 'note', text: 'Este análisis es el complemento en profundidad de la ficha de Cognira en el [Directorio de software de IA local](/power-local-llm/local-llm-software-directory), que la compara de un vistazo con otras herramientas locales e híbridas.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: '¿Qué es Cognira?',
        content: '**Cognira es obra de Thomas Conway, que en [cognira.dev](https://cognira.dev) lo define como "una creación independiente y en solitario, no un laboratorio ni una startup con equipo de marketing".** El sitio nació como cambio de marca de su producto anterior, Conway AI (conw.ai), y la migración entre ambos dominios aún estaba en marcha cuando se revisó este análisis, así que es probable que algunas páginas cambien.',
        items: [
          'Modelo: uno propietario de 12 000 millones de parámetros que el sitio llama "Cognira Retrain 12B"',
          'Dos formas de usarlo: chat en el navegador o la app local descrita más abajo',
          'Todo lo que aquí se dice del producto es la descripción del propio proveedor; ningún tercero lo ha analizado',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Cómo aprende y recuerda Cognira',
        content: 'Dos mecanismos definen el producto. Ambos se describen en [cognira.dev](https://cognira.dev); ninguno pudo probarse de forma independiente.',
        items: [
          '**Bucle de aprendizaje supervisado** — tus correcciones y valoraciones se filtran para descartar contenido inseguro o mal formado, y cualquier cambio resultante debe superar comprobaciones antes de aplicarse. Una sola conversación no puede alterar el comportamiento del asistente para todos',
          '**Memoria privada** — indícale una preferencia, un dato o una palabra y se guarda al instante. Cuando una respuesta posterior se apoya en ese elemento, la respuesta lo menciona, y un toque en "Olvidar" lo elimina',
          '**No incluido** — en ninguna parte del sitio aparecían plugins, integraciones, voz ni acciones de tipo agente',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'Local vs. alojado: qué es realmente Cognira Entity',
        content: 'Cognira Entity es la app descargable: un binario sellado para Windows, macOS y Linux. Que cuente como verdaderamente local depende de dos afirmaciones que apuntan en direcciones distintas.',
        items: [
          '**La afirmación:** el sitio dice "la inferencia, la memoria y el reentrenamiento opcional de los pesos permanecen en tu disco. Nada sale de él". Tomado al pie de la letra, el modelo se ejecuta en tu equipo en lugar de llamar a un servidor',
          '**El empaquetado:** Entity va dentro de los mismos planes de tokens semanales que el chat alojado. Eso se parece más a un cliente medido y vinculado a una cuenta que a una herramienta sin conexión del tipo de Ollama o LM Studio',
          '**La parte alojada:** el chat web se sirve desde un único iMac de 16 GB con el framework MLX de Apple. MLX pertenece solo a ese servicio, de modo que Entity no se limita a Apple Silicon',
          '**La laguna:** la página de documentación devolvió un 404, así que nada público indica si Entity funciona sin cuenta y sin red',
        ],
        note: 'Por eso este análisis considera Cognira un producto híbrido. La parte local es real; que pueda funcionar totalmente sin conexión sigue sin confirmarse, y una prueba rápida con la red desactivada lo resolvería en tu propio equipo.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'Precios y primeros pasos',
        content: '**Empieza en [cognira.dev](https://cognira.dev) creando una cuenta**: incluso el plan gratuito la exige, y la descarga de Entity aparece una vez que has iniciado sesión. Los precios están en libras esterlinas en la [página de precios](https://cognira.dev/pricing).',
        columns: ['Plan', 'Precio', 'Tokens por semana'],
        rows: [
          { 'Plan': 'Gratuito', 'Precio': '0 £', 'Tokens por semana': '25K' },
          { 'Plan': 'Pro', 'Precio': '15 £/mes', 'Tokens por semana': '500K' },
          { 'Plan': 'Max', 'Precio': '30 £/mes', 'Tokens por semana': '2M' },
        ],
        items: [
          'Todos los planes incluyen el modelo completo, la memoria privada y Entity; la cuota es la única diferencia',
          'Las cuotas se reinician los lunes y cuentan tanto lo que escribes como lo que genera el modelo',
          'Los planes de pago se renuevan cada mes; no hay opción vitalicia ni se publicaron condiciones para equipos, empresas o reembolsos',
        ],
        note: 'Si las cifras de la página de precios en vivo difieren de esta tabla, prevalece la página en vivo.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'Lo que no pudimos verificar',
        content: 'Varias cosas que un comprador cuidadoso comprobaría normalmente no existen de forma pública, así que este análisis no puede confirmarlas.',
        items: [
          '**Licencia:** código cerrado. No se encontró ningún archivo LICENSE ni contrato de usuario',
          '**Código:** sin repositorio en GitHub, de modo que no se puede inspeccionar el comportamiento del binario',
          '**Versión:** ni número de versión, ni registro de cambios, ni historial de lanzamientos, ni para el chat ni para Entity',
          '**Modelo:** su arquitectura y entrenamiento solo se conocen por las palabras del propio proveedor',
          '**Tratamiento de datos:** no hay una descripción independiente de qué almacena o envía el servicio alojado',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '¿Quién debería usar Cognira?',
        content: 'La cuestión es si una memoria persistente y editable merece la confianza de depositarla en un producto sin auditar de una sola persona.',
        subsections: [
          {
            title: 'Encaja bien si',
            list: [
              'Estás harto de explicar tus preferencias de nuevo en cada sesión',
              'No te importa usar software cerrado de un desarrollador en solitario',
              'Quieres probar una app local sin pagar primero',
            ],
          },
          {
            title: 'Busca otra opción si',
            list: [
              'Necesitas una herramienta auditada y de código abierto',
              'Necesitas un uso sin conexión demostrado y sin cuenta',
              'Necesitas un proveedor con larga trayectoria, ya que este acaba de cambiar de marca',
              'Quieres voz, plugins o acciones de agente',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira frente a otros asistentes de IA personales',
        content: 'Estos son los asistentes de memoria personal más cercanos del [Directorio de software de IA local](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — de código abierto, con memoria a largo plazo y búsqueda de documentos sobre modelos locales; su código se puede auditar. [Análisis de Khoj](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — un proyecto de código abierto para entrenar un modelo de memoria personal persistente, con repositorio público. [Análisis de Second Me](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — un agente personal orientado a ejecutar tareas más que a recordar conversaciones. [Análisis de Aori](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — un asistente solo para Mac de un equipo igualmente pequeño. [Análisis de Jarvis](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cómo pruebo Cognira sin compromiso?', a: 'Regístrate en el plan gratuito, enséñale una preferencia, comprueba que aparece en tu lista de memoria y descarga después Entity para comparar cómo se comportan ambos.' },
          { q: '¿Puedo usar Cognira con datos sensibles o regulados?', a: 'Con las pruebas disponibles, no: ninguna fuente independiente describe cómo trata los datos el servicio alojado, así que lee antes los términos del propio proveedor y mantén fuera el material confidencial hasta entonces.' },
          { q: '¿Me conviene más Cognira o Khoj?', a: 'Elige Khoj si quieres código que puedas auditar y ejecutar tú mismo; elige Cognira si prefieres una memoria que funcione en el navegador sin configurar nada y aceptas un producto cerrado.' },
          { q: '¿Cómo compruebo si Entity funciona de verdad sin conexión?', a: 'Instálalo, desconéctate de la red y envía un mensaje. Si responde, la inferencia es local; si te pide iniciar sesión o falla, depende de la cuenta.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'La página oficial, que describe el bucle de aprendizaje supervisado de Cognira, su función de memoria y Cognira Entity.' },
          { url: 'https://cognira.dev/pricing', title: 'Precios de Cognira', description: 'Planes de precios oficiales, cuotas de tokens y la descripción de plataforma de Cognira Entity utilizadas en este análisis.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de oMLX](/power-local-llm/omlx-review) — un servidor de inferencia local basado en MLX, el framework de Apple que sustenta el chat alojado de Cognira.',
        ],
      },
    },
  },
  pt: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-pt.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'Pessoas avaliando um assistente de chat de IA autoaprendiz com memória privada e opção de binário local, feito por um único desenvolvedor independente e não por uma empresa',
    primaryTerm: 'Cognira',
    title: 'Análise do Cognira: um assistente de IA autoaprendiz com binário local e memória privada',
    seoTitle: 'Análise do Cognira: assistente de IA autoaprendiz',
    intro: 'O Cognira ([cognira.dev](https://cognira.dev)) é um assistente de chat criado por uma equipe de uma pessoa só. Esta análise explica como ele funciona, quanto custa, quais de suas afirmações puderam ser conferidas e para quem ele serve.',
    metaDescription: 'Cognira é um assistente de chat de IA de um desenvolvedor independente, com loop de aprendizado supervisionado, memória privada por usuário e binário local para Windows/macOS/Linux (Cognira Entity). Preços, licença e dúvidas em aberto verificados de forma independente.',
    readTime: '7 min de leitura',
    targetKeywords: [
      'análise do Cognira',
      'Cognira IA',
      'Cognira Entity',
      'assistente de IA autoaprendiz',
      'assistente de IA com memória privada',
    ],
    leadAnswerBlock: '**O Cognira é um assistente de chat de código fechado, de um único desenvolvedor independente, que lembra o que você ensina a ele e permite apagar essas memórias uma a uma.** É gratuito para experimentar, oferece um app local para baixar além do chat hospedado e deve ser visto como um produto jovem, cujas afirmações vêm do próprio site.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Cognira e quanto custa?',
        answer: 'O Cognira é um assistente de chat com plano gratuito e duas assinaturas mensais que diferem apenas na quantidade de tokens que você recebe por semana. Todos os planos incluem os mesmos recursos.',
        bullets: [
          'Começa de graça; o primeiro plano pago, o Pro, custa £15/mês',
          'Disponível como chat hospedado e como download para desktop',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que é o Cognira?', anchor: 'what-is-cognira' },
      { label: 'Como o Cognira aprende e lembra', anchor: 'key-features' },
      { label: 'Local vs. hospedado: o que o Cognira Entity realmente é', anchor: 'local-vs-hosted' },
      { label: 'Preços e primeiros passos', anchor: 'pricing-get-started' },
      { label: 'O que não conseguimos verificar', anchor: 'not-verified' },
      { label: 'Quem deveria usar o Cognira?', anchor: 'who-should-use' },
      { label: 'Cognira vs. outros assistentes de IA pessoais', anchor: 'cognira-competitors' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Cognira é um assistente de chat de IA que se adapta ao seu feedback por meio de um processo filtrado e guarda o que aprende em uma memória privada.' },
          { type: 'plain-terms', text: 'Pense em um app de chat que não começa do zero a cada sessão: você o corrige uma vez, ele guarda a lição, e você pode ver ou apagar cada item salvo.' },
        ],
        items: [
          'Criado e mantido apenas por Thomas Conway, não por uma empresa',
          'A cota semanal de tokens é a única coisa que separa o plano gratuito dos pagos',
          'Não está confirmado se o app para desktop funciona totalmente offline',
          'Código-fonte, texto da licença e histórico de versões não são públicos',
        ],
        callouts: [
          { type: 'note', text: 'Esta análise é o aprofundamento da ficha do Cognira no [Diretório de Software de IA Local](/power-local-llm/local-llm-software-directory), que o compara de relance com outras ferramentas locais e híbridas.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'O que é o Cognira?',
        content: '**O Cognira é feito por Thomas Conway, que o descreve no [cognira.dev](https://cognira.dev) como "um projeto solo e independente, não um laboratório nem uma startup com equipe de marketing".** O site surgiu como um rebranding de seu produto anterior, o Conway AI (conw.ai), e a migração entre os dois domínios ainda estava em andamento quando esta análise foi conferida, então algumas páginas podem mudar.',
        items: [
          'Modelo: um modelo proprietário de 12 bilhões de parâmetros, que o site chama de "Cognira Retrain 12B"',
          'Duas formas de usar: chat no navegador ou o app local descrito abaixo',
          'Tudo o que se diz aqui sobre o produto em si é a descrição do próprio fornecedor; nenhum terceiro o avaliou',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Como o Cognira aprende e lembra',
        content: 'Dois mecanismos definem o produto. Ambos são descritos no [cognira.dev](https://cognira.dev); nenhum pôde ser testado de forma independente.',
        items: [
          '**Loop de aprendizado supervisionado** — suas correções e avaliações passam por uma triagem contra conteúdo inseguro ou mal formatado, e qualquer mudança resultante precisa passar por verificações antes de entrar no ar. Uma única conversa não consegue alterar o comportamento do assistente para todo mundo',
          '**Memória privada** — diga a ele uma preferência, um fato ou uma palavra e o item é guardado na hora. Quando uma resposta posterior usa esse item, a resposta o menciona, e um toque em "Esquecer" o remove',
          '**Não oferecido** — plugins, integrações, voz e ações no estilo de agente não apareceram em lugar nenhum do site',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'Local vs. hospedado: o que o Cognira Entity realmente é',
        content: 'O Cognira Entity é o app para baixar: um binário selado para Windows, macOS e Linux. Se ele conta como realmente local depende de duas declarações que apontam em direções diferentes.',
        items: [
          '**A afirmação:** o site diz que "inferência, memória e retreinamento opcional dos pesos ficam todos no seu disco. Nada sai de lá." Lida ao pé da letra, a frase significa que o modelo roda na sua máquina em vez de chamar um servidor',
          '**O empacotamento:** o Entity está incluído nos mesmos planos de tokens semanais do chat hospedado. Isso lembra mais um cliente vinculado a uma conta e com consumo medido do que uma ferramenta offline como o Ollama ou o LM Studio',
          '**O lado hospedado:** o chat web é servido a partir de um único iMac de 16 GB, com o framework MLX da Apple. O MLX pertence apenas a esse serviço, então o Entity não se limita ao Apple Silicon',
          '**A lacuna:** a página de documentação retornou erro 404, então nada público mostra se o Entity funciona sem conta e sem rede',
        ],
        note: 'Por isso, esta análise classifica o Cognira como híbrido. A parte local é real; se ela roda totalmente offline continua sem confirmação, e um teste rápido com a rede desligada resolveria a dúvida na sua própria máquina.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'Preços e primeiros passos',
        content: '**Comece em [cognira.dev](https://cognira.dev) criando uma conta** — até o plano gratuito exige uma, e o download do Entity aparece depois que você faz login. Os preços estão em libras esterlinas na [página de preços](https://cognira.dev/pricing).',
        columns: ['Plano', 'Preço', 'Tokens por semana'],
        rows: [
          { 'Plano': 'Gratuito', 'Preço': '£0', 'Tokens por semana': '25K' },
          { 'Plano': 'Pro', 'Preço': '£15/mês', 'Tokens por semana': '500K' },
          { 'Plano': 'Max', 'Preço': '£30/mês', 'Tokens por semana': '2M' },
        ],
        items: [
          'Todos os planos incluem o modelo completo, a memória privada e o Entity; a cota é a única diferença',
          'As cotas são renovadas às segundas-feiras e contam tanto o que você digita quanto o que o modelo escreve',
          'Os planos pagos renovam mensalmente; não há opção vitalícia, e não foram publicados termos para equipes, empresas ou reembolso',
        ],
        note: 'Se os valores da página de preços atual forem diferentes dos desta tabela, vale o que está na página atual.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'O que não conseguimos verificar',
        content: 'Várias coisas que um comprador cuidadoso normalmente conferiria não existem publicamente, então esta análise não pode confirmá-las.',
        items: [
          '**Licença:** código fechado. Nenhum arquivo LICENSE nem contrato de usuário foi encontrado',
          '**Código:** não há repositório no GitHub, então o comportamento do binário não pode ser inspecionado',
          '**Versão:** nenhum número de versão, changelog ou histórico de lançamentos, nem para o chat nem para o Entity',
          '**Modelo:** a arquitetura e o treinamento são conhecidos apenas pelas palavras do próprio fornecedor',
          '**Tratamento de dados:** nenhuma descrição independente do que o serviço hospedado armazena ou envia',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Cognira?',
        content: 'A questão é se vale confiar uma memória persistente e editável a um produto não auditado, feito por uma única pessoa.',
        subsections: [
          {
            title: 'É uma boa escolha se você',
            list: [
              'Está cansado de explicar suas preferências de novo a cada sessão',
              'Aceita software fechado de um desenvolvedor solo',
              'Quer testar um app local sem pagar antes',
            ],
          },
          {
            title: 'Procure outra opção se você',
            list: [
              'Precisa de uma ferramenta auditada e de código aberto',
              'Precisa de uso offline comprovado, sem conta',
              'Precisa de um fornecedor com longo histórico, já que este acabou de mudar de marca',
              'Quer voz, plugins ou ações de agente',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira vs. outros assistentes de IA pessoais',
        content: 'Estes são os assistentes pessoais com memória mais próximos no [Diretório de Software de IA Local](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — código aberto, com memória de longo prazo e busca em documentos sobre modelos locais; seu código pode ser auditado. [Análise do Khoj](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — uma iniciativa de código aberto para treinar um modelo de memória pessoal persistente, com repositório público. [Análise do Second Me](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — um agente pessoal voltado a executar tarefas, e não a lembrar conversas. [Análise do Aori](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — um assistente exclusivo para Mac, de uma equipe igualmente pequena. [Análise do Jarvis](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Como experimento o Cognira sem me comprometer?', a: 'Crie uma conta no plano gratuito, ensine uma preferência a ele, confira se ela aparece na sua lista de memória, depois baixe o Entity e compare como os dois se comportam.' },
          { q: 'Posso usar o Cognira com dados sensíveis ou regulados?', a: 'Não com as evidências disponíveis: nada independente descreve como o serviço hospedado trata os dados, então leia primeiro os termos do próprio fornecedor e mantenha material confidencial de fora até lá.' },
          { q: 'Devo escolher o Cognira ou o Khoj?', a: 'Escolha o Khoj se quiser um código que você possa auditar e executar por conta própria; escolha o Cognira se preferir ter memória funcionando no navegador, sem configuração, e aceitar um produto fechado.' },
          { q: 'Como verifico se o Entity realmente funciona offline?', a: 'Instale-o, desconecte da rede e envie uma mensagem. Se ele responder, a inferência é local; se pedir login ou falhar, ele depende da conta.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'A página inicial oficial, que descreve o loop de aprendizado supervisionado do Cognira, o recurso de memória e o Cognira Entity.' },
          { url: 'https://cognira.dev/pricing', title: 'Preços do Cognira', description: 'Planos de preço oficiais, cotas de tokens e a descrição da plataforma Cognira Entity usadas nesta análise.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do oMLX](/power-local-llm/omlx-review) — um servidor de inferência local baseado no MLX, o framework da Apple por trás do chat hospedado do Cognira.',
        ],
      },
    },
  },
  ja: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-ja.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'プライベート記憶機能とローカルバイナリの選択肢を備えた自己学習型AIチャットアシスタントを検討している人。企業ではなく、個人開発者による製品を許容できる方',
    primaryTerm: 'Cognira',
    title: 'Cogniraレビュー：ローカルバイナリとプライベート記憶を備えた自己学習型AIアシスタント',
    seoTitle: 'Cogniraレビュー：自己学習型AIアシスタント',
    intro: 'Cognira（[cognira.dev](https://cognira.dev)）は、1人のチームが作ったチャットアシスタントです。本レビューでは、仕組み、料金、確認できた主張とできなかった主張、そして向いている人を解説します。',
    metaDescription: 'Cogniraは個人開発者によるAIチャットアシスタントで、ガード付き学習ループ、ユーザーごとのプライベート記憶、ローカルのWindows/macOS/Linuxバイナリ（Cognira Entity）を備えます。独自に検証した料金・ライセンスと未解決の疑問点。',
    readTime: '7分で読めます',
    targetKeywords: [
      'Cognira レビュー',
      'Cognira AI',
      'Cognira Entity',
      '自己学習型AIアシスタント',
      'プライベート記憶を持つAIアシスタント',
    ],
    leadAnswerBlock: '**Cogniraは、1人の独立した開発者によるクローズドソースのチャットアシスタントです。教えたことを覚え、その記憶を1件ずつ削除できます。** 無料で試せて、ホスト型チャットに加えてダウンロード可能なローカルアプリも提供されます。公式サイト由来の主張が中心である、新しい製品として扱うのが妥当です。',
    quickAnswerTop: {
      ja: {
        question: 'Cogniraとは何ですか、費用はいくらですか？',
        answer: 'Cogniraは無料プランと2つの月額サブスクリプションを備えたチャットアシスタントで、プランの違いは週ごとに使えるトークン数だけです。機能はどのプランも共通です。',
        bullets: [
          '無料で開始可能。最初の有料プランであるProは月15ポンド（£15/月）',
          'ホスト型チャットとデスクトップ版ダウンロードの両方で利用可能',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'Cogniraとは何か？', anchor: 'what-is-cognira' },
      { label: 'Cogniraの学習と記憶の仕組み', anchor: 'key-features' },
      { label: 'ローカルかホスト型か：Cognira Entityの実像', anchor: 'local-vs-hosted' },
      { label: '料金と始め方', anchor: 'pricing-get-started' },
      { label: '検証できなかった点', anchor: 'not-verified' },
      { label: 'Cogniraはどんな人に向いているか？', anchor: 'who-should-use' },
      { label: 'Cognira対他の個人向けAIアシスタント', anchor: 'cognira-competitors' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約 — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cogniraは、フィルタリングされた手順でユーザーのフィードバックに適応し、学んだ内容をプライベート記憶に保存するAIチャットアシスタントです。' },
          { type: 'plain-terms', text: 'セッションのたびにゼロから始まらないチャットアプリを想像してください。一度訂正すれば内容が残り、保存された項目はそれぞれ確認も消去もできます。' },
        ],
        items: [
          '開発・運営は企業ではなく、Thomas Conway氏ただ1人',
          '無料プランと有料プランを分けるのは、週ごとのトークン割り当てだけ',
          'デスクトップアプリが完全オフラインで動くかどうかは未確認',
          'ソースコード、ライセンス文書、バージョン履歴は公開されていない',
        ],
        callouts: [
          { type: 'note', text: '本レビューは、[ローカルLLMソフトウェアディレクトリ](/power-local-llm/local-llm-software-directory)にあるCogniraの掲載項目を掘り下げた補完記事です。ディレクトリでは、他のローカル／ハイブリッドツールとの比較をひと目で確認できます。' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'Cogniraとは何か？',
        content: '**CogniraはThomas Conway氏が開発したもので、氏は[cognira.dev](https://cognira.dev)で「a solo, independent build, not a lab or a startup with a marketing team」（研究所でも、マーケティング部隊を抱えたスタートアップでもない、個人による独立開発）と説明しています。** このサイトは氏の旧製品Conway AI（conw.ai）からのリブランドとして登場しました。本レビューの確認時点では2つのドメイン間の移行がまだ途中だったため、一部のページは今後変わる可能性があります。',
        items: [
          'モデル：サイトが「Cognira Retrain 12B」と呼ぶ、120億パラメータのプロプライエタリモデル',
          '利用方法は2通り：ブラウザ上のチャット、または後述のローカルアプリ',
          '製品そのものに関する記述はすべて提供元自身の説明であり、第三者によるレビューは存在しない',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Cogniraの学習と記憶の仕組み',
        content: '製品を特徴づけるのは2つの仕組みです。どちらも[cognira.dev](https://cognira.dev)に記載されていますが、独自に試すことはできませんでした。',
        items: [
          '**ガード付き学習ループ** — ユーザーの訂正や評価は、安全でない内容や不適切な形式がないか選別され、そこから生じる変更は反映前にチェックを通過しなければならない。1回の会話だけで、全ユーザー向けのアシスタントの挙動が変わることはない',
          '**プライベート記憶** — 好み、事実、単語を伝えるとすぐに保存される。後の回答がその項目を使うと、返答の中でその項目が示され、ワンタップの「Forget」で削除できる',
          '**提供されていないもの** — プラグイン、外部サービス連携、音声、エージェント型の操作は、サイト内のどこにも記載がなかった',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'ローカルかホスト型か：Cognira Entityの実像',
        content: 'Cognira Entityはダウンロード型のアプリで、Windows、macOS、Linux向けの封印されたバイナリです。本当にローカルと呼べるかどうかは、向きの異なる2つの記述にかかっています。',
        items: [
          '**主張：** サイトには「inference, memory, and optional weight-level retraining all stay on your disk. Nothing leaves.」（推論、記憶、任意の重みレベル再学習はすべてディスク上にとどまり、外には何も出ない）とある。字義どおりなら、モデルはサーバーを呼び出さず、手元のマシンで動作する',
          '**提供形態：** Entityはホスト型チャットと同じ週次トークン制プランの中に含まれている。OllamaやLM Studioのようなオフラインツールというより、アカウントに紐づき従量管理されるクライアントに見える',
          '**ホスト型側：** Webチャットは、AppleのMLXフレームワークを使った16GBのiMac 1台から提供されている。MLXはこのサービス側だけの話なので、EntityがApple Siliconに限定されるわけではない',
          '**欠けている情報：** ドキュメントのページは404を返し、アカウントもネットワークもなしにEntityが動くかどうかを示す公開情報は何もない',
        ],
        note: 'そのため本レビューではCogniraをハイブリッドとして扱います。ローカル部分は実在しますが、完全オフラインで動くかどうかは未確認です。ネットワークを切った状態で試せば、お使いのマシンでは簡単に白黒がつきます。',
      },
      pricing: {
        id: 'pricing-get-started',
        title: '料金と始め方',
        content: '**まず[cognira.dev](https://cognira.dev)でアカウントを作成してください。** 無料プランでも必要で、Entityのダウンロードはサインイン後に表示されます。料金は[料金ページ](https://cognira.dev/pricing)に英ポンド建てで掲載されています。',
        columns: ['プラン', '料金', '週あたりのトークン'],
        rows: [
          { 'プラン': 'Free', '料金': '£0', '週あたりのトークン': '25K' },
          { 'プラン': 'Pro', '料金': '£15/月', '週あたりのトークン': '500K' },
          { 'プラン': 'Max', '料金': '£30/月', '週あたりのトークン': '2M' },
        ],
        items: [
          'どのプランにも、フル版モデル、プライベート記憶、Entityが含まれ、違いは割り当て量のみ',
          '割り当ては月曜日にリセットされ、モデルの出力だけでなく入力した文字数も消費する',
          '有料プランは毎月更新。買い切りはなく、チーム向け・法人向けの条件や返金条件も公開されていない',
        ],
        note: '公式の料金ページの数字がこの表と異なる場合は、公式ページを優先してください。',
      },
      notVerified: {
        id: 'not-verified',
        title: '検証できなかった点',
        content: '慎重な購入者なら通常確認するはずの事柄が、いくつも公開されていないため、本レビューでは裏付けられません。',
        items: [
          '**ライセンス：** クローズドソース。LICENSEファイルもユーザー契約書も見つからなかった',
          '**コード：** GitHubリポジトリがなく、バイナリの挙動を調べられない',
          '**バージョン：** チャットにもEntityにも、バージョン番号、変更履歴、リリース履歴がない',
          '**モデル：** アーキテクチャと学習方法は、提供元自身の記述でしか分からない',
          '**データの扱い：** ホスト型サービスが何を保存・送信するかについて、独立した説明がない',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Cogniraはどんな人に向いているか？',
        content: '焦点は、監査を受けていない個人開発の製品に、消えずに編集できる記憶を預ける価値があるかどうかです。',
        subsections: [
          {
            title: '向いている人',
            list: [
              'セッションのたびに好みを説明し直すのにうんざりしている',
              '個人開発者によるクローズドなソフトウェアでも気にならない',
              '費用をかけずにローカルアプリを試してみたい',
            ],
          },
          {
            title: '他を探したほうがよい人',
            list: [
              '監査済みのオープンソースツールが必要',
              'アカウント不要で、オフライン動作が実証されているものが必要',
              'リブランドしたばかりのため、長い実績のあるベンダーが必要',
              '音声、プラグイン、エージェント操作が欲しい',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira対他の個人向けAIアシスタント',
        content: '以下は、[ローカルLLMソフトウェアディレクトリ](/power-local-llm/local-llm-software-directory)にある、個人記憶型アシスタントのうち最も近いものです。',
        items: [
          '**[Khoj](https://khoj.dev)** — オープンソースで、長期記憶とローカルモデル上のドキュメント検索を備える。コードを監査できる。[Khojレビュー](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — 永続的な個人記憶モデルの学習に取り組むオープンソースの試みで、公開リポジトリがある。[Second Meレビュー](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — 会話を覚えることより、タスクの実行を目的とする個人向けエージェント。[Aoriレビュー](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — 同じく小規模なチームによる、Mac専用のアシスタント。[Jarvisレビュー](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '契約せずにCogniraを試すにはどうすればよいですか？', a: '無料プランに登録し、好みを1つ教えて、それが記憶リストに表示されることを確認します。その後Entityをダウンロードして、両者の動作を比べてください。' },
          { q: 'Cogniraで機密データや規制対象のデータを扱えますか？', a: '現時点の根拠では勧められません。ホスト型サービスのデータの扱いを説明する独立した情報がないため、まず提供元の利用規約を読み、それまでは機密性の高い内容を入力しないでください。' },
          { q: 'CogniraとKhojのどちらを選ぶべきですか？', a: '自分で監査し、自分で動かせるコードが欲しいならKhoj。セットアップ不要でブラウザ上ですぐ記憶機能を使いたく、クローズドな製品を受け入れられるならCogniraです。' },
          { q: 'Entityが本当にオフラインで動くかどうかは、どう確認できますか？', a: 'インストールしてネットワークを切断し、メッセージを送ります。返答があれば推論はローカルで、サインインを求められたり失敗したりすれば、アカウントに依存しています。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'Cogniraのガード付き学習ループ、記憶機能、Cognira Entityを説明する公式ホームページ。' },
          { url: 'https://cognira.dev/pricing', title: 'Cogniraの料金', description: '本レビューで使用した公式の料金プラン、トークン割り当て、Cognira Entityのプラットフォーム説明。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[oMLXレビュー](/power-local-llm/omlx-review) — Cogniraのホスト型チャットの基盤であるAppleのフレームワーク、MLXを使ったローカル推論サーバー。',
        ],
      },
    },
  },
  zh: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-zh.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: '正在考虑使用带有私人记忆功能和本地二进制程序选项的自学习AI聊天助手的用户，且能接受产品出自个人开发者而非公司之手',
    primaryTerm: 'Cognira',
    title: 'Cognira评测：具备本地二进制程序和私人记忆的自学习AI助手',
    seoTitle: 'Cognira评测：自学习AI助手',
    intro: 'Cognira（[cognira.dev](https://cognira.dev)）是由一人团队打造的聊天助手。本评测介绍它的工作方式、价格、哪些说法可以核实，以及适合哪类用户。',
    metaDescription: 'Cognira是一款由个人开发者打造的AI聊天助手，具备受控学习循环、按用户区分的私人记忆，以及本地Windows/macOS/Linux二进制程序（Cognira Entity）。独立核实的定价、许可与未解疑点。',
    readTime: '阅读约7分钟',
    targetKeywords: [
      'Cognira评测',
      'Cognira AI',
      'Cognira Entity',
      '自学习AI助手',
      '具备私人记忆的AI助手',
    ],
    leadAnswerBlock: '**Cognira是一款闭源聊天助手，出自一位独立开发者之手，它会记住你教给它的内容，并允许你逐条删除这些记忆。** 它可免费试用，在托管聊天之外还提供可下载的本地应用；最好把它看作一款年轻的产品，其说法均来自自家网站。',
    quickAnswerTop: {
      zh: {
        question: 'Cognira是什么，价格是多少？',
        answer: 'Cognira是一款聊天助手，设有免费套餐和两档月度订阅，区别仅在于每周可用的token数量。所有套餐的功能完全相同。',
        bullets: [
          '可免费开始使用；首个付费套餐Pro为£15/月',
          '提供托管聊天和桌面端下载两种形式',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: 'Cognira是什么？', anchor: 'what-is-cognira' },
      { label: 'Cognira如何学习与记忆', anchor: 'key-features' },
      { label: '本地还是托管：Cognira Entity的真实面貌', anchor: 'local-vs-hosted' },
      { label: '定价与上手', anchor: 'pricing-get-started' },
      { label: '我们无法核实的内容', anchor: 'not-verified' },
      { label: '谁适合使用Cognira？', anchor: 'who-should-use' },
      { label: 'Cognira与其他个人AI助手对比', anchor: 'cognira-competitors' },
      { label: '常见问题', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要 — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira是一款AI聊天助手，通过经过过滤的流程根据你的反馈进行调整，并把学到的内容存入私人记忆。' },
          { type: 'plain-terms', text: '可以把它想象成一款不必每次会话都从零开始的聊天应用：你纠正它一次，它就记住这条经验，而且每条已保存的内容你都能查看或删除。' },
        ],
        items: [
          '由Thomas Conway一人构建和运营，而非公司',
          '免费套餐与付费套餐之间唯一的区别是每周token配额',
          '桌面应用能否完全离线运行尚未得到确认',
          '源代码、许可文本和版本历史均未公开',
        ],
        callouts: [
          { type: 'note', text: '本评测是[本地LLM软件目录](/power-local-llm/local-llm-software-directory)中Cognira条目的深度补充，该目录对其与其他本地及混合工具做了一目了然的对比。' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'Cognira是什么？',
        content: '**Cognira由Thomas Conway打造，他在[cognira.dev](https://cognira.dev)上将其描述为“独立个人打造，不是实验室，也不是有营销团队的创业公司”。** 该网站由他此前的产品Conway AI（conw.ai）品牌重塑而来，本评测核实时两个域名之间的迁移仍在进行，因此部分页面可能会变动。',
        items: [
          '模型：专有的120亿参数模型，网站称之为“Cognira Retrain 12B”',
          '两种使用方式：在浏览器中聊天，或使用下文介绍的本地应用',
          '这里关于产品本身的内容均为供应商自己的描述，尚无第三方评测过它',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Cognira如何学习与记忆',
        content: '该产品由两种机制定义。两者均见于[cognira.dev](https://cognira.dev)的描述，且都无法独立测试。',
        items: [
          '**受控学习循环** — 你的纠正和评分会先经过筛查，剔除不安全或格式不当的内容，由此产生的任何改动都必须通过检查才会上线。单次对话无法改变助手对所有人的行为',
          '**私人记忆** — 告诉它一项偏好、一个事实或一个词，它会立即存储。之后的回答若用到这条内容，回复中会指明出处，点按一下“忘记”即可将其移除',
          '**未提供** — 网站上没有出现插件、集成、语音和代理式操作',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: '本地还是托管：Cognira Entity的真实面貌',
        content: 'Cognira Entity是可下载的应用：一款面向Windows、macOS和Linux的密封二进制程序。它是否算得上真正的本地运行，取决于两种指向相反的说法。',
        items: [
          '**声明：**网站称“推理、记忆和可选的权重级再训练都保留在你的磁盘上，没有任何内容外传”。按字面理解，模型运行在你的电脑上，而不是调用服务器',
          '**打包方式：**Entity与托管聊天共用同一套每周token套餐。这看起来更像一个绑定账户、按量计费的客户端，而不是Ollama或LM Studio那类离线工具',
          '**托管端：**网页聊天由一台16 GB的iMac借助苹果的MLX框架提供服务。MLX仅属于该服务，因此Entity并不局限于Apple Silicon',
          '**缺口：**文档页面返回404，公开资料无法说明Entity能否在没有账户、没有网络的情况下工作',
        ],
        note: '因此本评测将Cognira视为混合型。本地部分是真实存在的；能否完全离线运行则尚未确认，在你自己的电脑上关闭网络快速测试一下即可得出答案。',
      },
      pricing: {
        id: 'pricing-get-started',
        title: '定价与上手',
        content: '**先在[cognira.dev](https://cognira.dev)创建账户**——即便免费套餐也需要账户，登录后才会出现Entity下载入口。价格以英镑计，见[定价页面](https://cognira.dev/pricing)。',
        columns: ['套餐', '价格', '每周token数'],
        rows: [
          { '套餐': '免费', '价格': '£0', '每周token数': '25K' },
          { '套餐': 'Pro', '价格': '£15/月', '每周token数': '500K' },
          { '套餐': 'Max', '价格': '£30/月', '每周token数': '2M' },
        ],
        items: [
          '每个套餐都包含完整模型、私人记忆和Entity；唯一的差别是配额',
          '配额每周一重置，计入你输入的内容以及模型生成的内容',
          '付费套餐按月续订；没有终身买断选项，也未公布团队、企业或退款条款',
        ],
        note: '如果线上定价页面上的数字与此表不一致，以线上页面为准。',
      },
      notVerified: {
        id: 'not-verified',
        title: '我们无法核实的内容',
        content: '谨慎的买家通常会查验的若干事项并无公开资料，因此本评测无法确认。',
        items: [
          '**许可：**闭源。未找到LICENSE文件或用户协议',
          '**代码：**没有GitHub仓库，因此无法检查该二进制程序的行为',
          '**版本：**聊天服务和Entity均没有版本号、更新日志或发布历史',
          '**模型：**架构和训练方式只能通过供应商自己的表述得知',
          '**数据处理：**没有独立的说明，无法得知托管服务存储或发送了什么',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Cognira？',
        content: '关键在于：把一份持久、可编辑的记忆托付给个人开发、未经审计的产品，是否值得。',
        subsections: [
          {
            title: '以下情况适合选择',
            list: [
              '厌倦了每次会话都要重新说明自己的偏好',
              '能接受个人开发者的闭源软件',
              '想先免费试用本地应用',
            ],
          },
          {
            title: '以下情况请另寻他选',
            list: [
              '需要经过审计的开源工具',
              '需要经过验证、无需账户的离线使用',
              '需要业绩记录悠久的供应商，因为这一家刚刚完成品牌重塑',
              '需要语音、插件或代理式操作',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira与其他个人AI助手对比',
        content: '以下是[本地LLM软件目录](/power-local-llm/local-llm-software-directory)中与它最接近的个人记忆型助手。',
        items: [
          '**[Khoj](https://khoj.dev)** — 开源，具备长期记忆，并可在本地模型上进行文档搜索；其代码可供审计。[Khoj评测](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — 一个训练持久个人记忆模型的开源项目，拥有公开仓库。[Second Me评测](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — 一款个人代理，侧重执行任务而非记住对话。[Aori评测](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — 仅限Mac的助手，团队规模同样很小。[Jarvis评测](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '如何在不做长期承诺的前提下试用Cognira？', a: '注册免费套餐，教它一项偏好，确认它出现在你的记忆列表中，然后下载Entity，对比两者的表现。' },
          { q: '可以用Cognira处理敏感数据或受监管数据吗？', a: '就现有证据而言不建议：没有任何独立资料说明托管服务如何处理数据，请先阅读供应商自己的条款，在此之前不要放入机密材料。' },
          { q: '应该选Cognira还是Khoj？', a: '想要可审计、可自行运行的代码，选Khoj；想要在浏览器中免配置即可使用记忆功能，并能接受闭源产品，则选Cognira。' },
          { q: '如何检查Entity是否真的能离线工作？', a: '安装后断开网络并发送一条消息。若它能回复，说明推理在本地进行；若它要求登录或报错，则说明依赖账户。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: '官方主页，介绍Cognira的受控学习循环、记忆功能和Cognira Entity。' },
          { url: 'https://cognira.dev/pricing', title: 'Cognira定价', description: '官方定价套餐、token配额，以及本评测所用的Cognira Entity平台说明。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[oMLX评测](/power-local-llm/omlx-review) — 基于MLX构建的本地推理服务器，MLX正是Cognira托管聊天所用的苹果框架。',
        ],
      },
    },
  },
  ar: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-ar.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: 'أشخاص يفكرون في مساعد دردشة ذكاء اصطناعي ذاتي التعلم بميزة ذاكرة خاصة وخيار ملف تنفيذي محلي، من مطوّر مستقل واحد وليس من شركة',
    primaryTerm: 'Cognira',
    title: 'مراجعة Cognira: مساعد ذكاء اصطناعي ذاتي التعلم بملف تنفيذي محلي وذاكرة خاصة',
    seoTitle: 'مراجعة Cognira: مساعد ذكاء اصطناعي ذاتي التعلم',
    intro: 'Cognira ([cognira.dev](https://cognira.dev)) مساعد دردشة من فريق مكوّن من شخص واحد. تشرح هذه المراجعة طريقة عمله وتكلفته وما أمكن التحقق منه من ادعاءاته والفئة التي يناسبها.',
    metaDescription: 'Cognira مساعد دردشة ذكاء اصطناعي من مطوّر مستقل، بحلقة تعلّم محروسة وذاكرة خاصة لكل مستخدم وملف تنفيذي محلي لأنظمة Windows وmacOS وLinux (Cognira Entity). أسعار وترخيص ونقاط غامضة تم التحقق منها بشكل مستقل.',
    readTime: '7 دقائق قراءة',
    targetKeywords: [
      'مراجعة Cognira',
      'Cognira AI',
      'Cognira Entity',
      'مساعد ذكاء اصطناعي ذاتي التعلم',
      'مساعد ذكاء اصطناعي بذاكرة خاصة',
    ],
    leadAnswerBlock: '**Cognira مساعد دردشة مغلق المصدر من مطوّر مستقل واحد، يتذكر ما تعلّمه إياه ويتيح لك حذف تلك الذكريات واحدة تلو الأخرى.** التجربة مجانية، ويتوفر تطبيق محلي قابل للتنزيل إلى جانب الدردشة المستضافة، والأفضل التعامل معه كمنتج فتيّ تأتي ادعاءاته من موقعه الخاص.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Cognira وكم تكلفته؟',
        answer: 'Cognira مساعد دردشة بخطة مجانية واشتراكين شهريين لا يختلفان إلا في عدد الرموز المتاحة أسبوعيًا. تتضمن كل خطة الميزات نفسها.',
        bullets: [
          'مجاني للبدء؛ وأول خطة مدفوعة، Pro، بسعر £15/شهريًا',
          'متاح كدردشة مستضافة وكتطبيق مكتبي قابل للتنزيل',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'ما هو Cognira؟', anchor: 'what-is-cognira' },
      { label: 'كيف يتعلّم Cognira ويتذكر', anchor: 'key-features' },
      { label: 'محلي مقابل مستضاف: ما هو Cognira Entity فعليًا', anchor: 'local-vs-hosted' },
      { label: 'الأسعار والبدء', anchor: 'pricing-get-started' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'not-verified' },
      { label: 'من يجب أن يستخدم Cognira؟', anchor: 'who-should-use' },
      { label: 'Cognira مقابل مساعدي الذكاء الاصطناعي الشخصيين الآخرين', anchor: 'cognira-competitors' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الملخص — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira مساعد دردشة ذكاء اصطناعي يتكيّف مع ملاحظاتك عبر عملية ترشيح، ويخزّن ما تعلّمه في ذاكرة خاصة.' },
          { type: 'plain-terms', text: 'تخيّل تطبيق دردشة لا يبدأ من الصفر في كل جلسة: تصحّح له مرة واحدة فيحتفظ بالدرس، ويمكنك الاطلاع على كل عنصر محفوظ أو مسحه.' },
        ],
        items: [
          'من بناء توماس كونواي وتشغيله وحده، وليس شركة',
          'الحصة الأسبوعية من الرموز هي الفارق الوحيد بين الخطة المجانية والخطط المدفوعة',
          'عمل التطبيق المكتبي دون اتصال بالكامل غير مؤكد',
          'الشيفرة المصدرية ونص الترخيص وسجل الإصدارات غير منشورة',
        ],
        callouts: [
          { type: 'note', text: 'هذه المراجعة هي المكمّل المتعمّق لإدخال Cognira في [دليل برمجيات الذكاء الاصطناعي المحلية](/power-local-llm/local-llm-software-directory)، الذي يقارنه بأدوات محلية وهجينة أخرى بلمحة سريعة.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'ما هو Cognira؟',
        content: '**Cognira من صنع توماس كونواي، الذي يصفه على [cognira.dev](https://cognira.dev) بأنه "بناء فردي مستقل، وليس مختبرًا أو شركة ناشئة لديها فريق تسويق".** جاء الموقع بعد إعادة تسمية لمنتجه السابق Conway AI (conw.ai)، وكان الانتقال بين النطاقين لا يزال جاريًا عند التحقق من هذه المراجعة، لذا توقّع أن تتغير بعض الصفحات.',
        items: [
          'النموذج: نموذج مملوك بـ 12 مليار معامل يسميه الموقع "Cognira Retrain 12B"',
          'طريقتان للاستخدام: الدردشة في المتصفح، أو التطبيق المحلي الموصوف أدناه',
          'كل ما يرد هنا عن المنتج نفسه هو وصف المزوّد الخاص؛ ولم تراجعه أي جهة خارجية',
        ],
      },
      features: {
        id: 'key-features',
        title: 'كيف يتعلّم Cognira ويتذكر',
        content: 'تحدد المنتجَ آليتان. وردت كلتاهما في [cognira.dev](https://cognira.dev)، ولم نتمكن من اختبار أي منهما بشكل مستقل.',
        items: [
          '**حلقة تعلّم محروسة** — تُفحص تصحيحاتك وتقييماتك بحثًا عن محتوى غير آمن أو سيئ التنسيق، ويجب أن يجتاز أي تغيير ناتج عنها فحوصات قبل اعتماده. لا يمكن لمحادثة واحدة أن تغيّر سلوك المساعد للجميع',
          '**ذاكرة خاصة** — أخبره بتفضيل أو معلومة أو كلمة فتُحفظ فورًا. وحين يعتمد رد لاحق على ذلك العنصر، يذكره الرد بالاسم، وبضغطة واحدة على "نسيان" يُحذف',
          '**غير متوفر** — لم تظهر في الموقع أي إضافات أو تكاملات أو ميزة صوتية أو إجراءات بأسلوب الوكلاء',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: 'محلي مقابل مستضاف: ما هو Cognira Entity فعليًا',
        content: 'Cognira Entity هو التطبيق القابل للتنزيل: ملف تنفيذي مغلق لأنظمة Windows وmacOS وLinux. ويتوقف كونه محليًا بحق على عبارتين تشيران إلى اتجاهين مختلفين.',
        items: [
          '**الادعاء:** يقول الموقع: "يبقى الاستدلال والذاكرة وإعادة التدريب الاختيارية على مستوى الأوزان كلها على قرصك. لا شيء يغادره." وبأخذ العبارة حرفيًا، يعمل النموذج على جهازك بدل الاتصال بخادم',
          '**طريقة التعبئة:** يندرج Entity ضمن خطط الرموز الأسبوعية نفسها المطبقة على الدردشة المستضافة. وهذا أقرب إلى عميل مرتبط بحساب ومحدود بحصة منه إلى أداة تعمل دون اتصال من نوع Ollama أو LM Studio',
          '**الجانب المستضاف:** تُقدَّم دردشة الويب من جهاز iMac واحد بذاكرة 16 جيجابايت عبر إطار MLX من Apple. يخص MLX تلك الخدمة وحدها، فلا يقتصر Entity على معالجات Apple Silicon',
          '**الفجوة:** أعادت صفحة الوثائق خطأ 404، فلا يوجد ما ينشره أحد علنًا يبيّن هل يعمل Entity دون حساب ودون شبكة',
        ],
        note: 'لذلك تصنّف هذه المراجعة Cognira أداةً هجينة. الجزء المحلي حقيقي؛ أما إمكان تشغيله دون اتصال بالكامل فغير مؤكد، وتكفي تجربة سريعة مع تعطيل الشبكة لحسم الأمر على جهازك.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: 'الأسعار والبدء',
        content: '**ابدأ من [cognira.dev](https://cognira.dev) بإنشاء حساب** — حتى الخطة المجانية تتطلب واحدًا، ويظهر تنزيل Entity بعد تسجيل الدخول. الأسعار بالجنيه الإسترليني في [صفحة الأسعار](https://cognira.dev/pricing).',
        columns: ['الخطة', 'السعر', 'الرموز أسبوعيًا'],
        rows: [
          { 'الخطة': 'مجانية', 'السعر': '£0', 'الرموز أسبوعيًا': '25K' },
          { 'الخطة': 'Pro', 'السعر': '£15/شهريًا', 'الرموز أسبوعيًا': '500K' },
          { 'الخطة': 'Max', 'السعر': '£30/شهريًا', 'الرموز أسبوعيًا': '2M' },
        ],
        items: [
          'تشمل كل خطة النموذج الكامل والذاكرة الخاصة وEntity؛ والحصة هي الفارق الوحيد',
          'تُعاد الحصص إلى الصفر أيام الاثنين، وتحتسب ما تكتبه أنت وما يكتبه النموذج معًا',
          'تتجدد الخطط المدفوعة شهريًا؛ ولا يوجد خيار مدى الحياة، ولم تُنشر أي شروط للفرق أو الشركات أو الاسترداد',
        ],
        note: 'إذا اختلفت الأرقام في صفحة الأسعار الحية عن هذا الجدول، فالمعتمد هو الصفحة الحية.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'ما لم نتمكن من التحقق منه',
        content: 'عدة أمور يتحقق منها المشتري الحذر عادةً غير متاحة علنًا، ولذلك لا تستطيع هذه المراجعة تأكيدها.',
        items: [
          '**الترخيص:** مغلق المصدر. لم يُعثر على ملف LICENSE ولا على اتفاقية مستخدم',
          '**الشيفرة:** لا يوجد مستودع GitHub، فلا يمكن فحص سلوك الملف التنفيذي',
          '**الإصدار:** لا رقم إصدار ولا سجل تغييرات ولا تاريخ إصدارات للدردشة أو لـ Entity',
          '**النموذج:** لا يُعرف عن بنيته وتدريبه إلا ما جاء في صياغة المزوّد',
          '**التعامل مع البيانات:** لا يوجد وصف مستقل لما تخزّنه الخدمة المستضافة أو ترسله',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Cognira؟',
        content: 'السؤال هو: هل تستحق ذاكرة دائمة قابلة للتعديل أن تُوكَل إلى منتج لم يخضع للتدقيق من شخص واحد؟',
        subsections: [
          {
            title: 'مناسب إذا كنت',
            list: [
              'سئمت من إعادة شرح تفضيلاتك في كل جلسة',
              'لا تمانع برنامجًا مغلقًا من مطوّر مستقل',
              'تريد تجربة تطبيق محلي دون دفع أولاً',
            ],
          },
          {
            title: 'ابحث في مكان آخر إذا كنت',
            list: [
              'تحتاج أداة مفتوحة المصدر خضعت للتدقيق',
              'تحتاج استخدامًا مثبتًا دون اتصال وبلا حساب',
              'تحتاج مزوّدًا بسجل طويل، فهذا المزوّد أعاد تسمية منتجه للتو',
              'تريد ميزة صوتية أو إضافات أو إجراءات وكيل',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira مقابل مساعدي الذكاء الاصطناعي الشخصيين الآخرين',
        content: 'هؤلاء أقرب مساعدي الذاكرة الشخصية في [دليل برمجيات الذكاء الاصطناعي المحلية](/power-local-llm/local-llm-software-directory).',
        items: [
          '**[Khoj](https://khoj.dev)** — مفتوح المصدر بذاكرة طويلة المدى وبحث في المستندات فوق نماذج محلية؛ ويمكن تدقيق شيفرته. [مراجعة Khoj](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — جهد مفتوح المصدر لتدريب نموذج ذاكرة شخصية دائمة، بمستودع علني. [مراجعة Second Me](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — وكيل شخصي يهدف إلى تنفيذ المهام لا إلى تذكّر المحادثات. [مراجعة Aori](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — مساعد لنظام macOS فقط من فريق صغير مماثل. [مراجعة Jarvis](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'كيف أجرّب Cognira دون التزام؟', a: 'سجّل في الخطة المجانية، وعلّمه تفضيلاً واحدًا، وتأكد من ظهوره في قائمة ذاكرتك، ثم نزّل Entity وقارن سلوك النسختين.' },
          { q: 'هل يمكنني استخدام Cognira مع بيانات حساسة أو خاضعة للتنظيم؟', a: 'ليس استنادًا إلى الأدلة المتاحة: لا يصف أي مصدر مستقل كيفية تعامل الخدمة المستضافة مع البيانات، فاقرأ شروط المزوّد نفسه أولاً وأبقِ المواد السرية خارجه حتى تفعل.' },
          { q: 'هل أختار Cognira أم Khoj؟', a: 'اختر Khoj إذا أردت شيفرة يمكنك تدقيقها وتشغيلها بنفسك؛ واختر Cognira إذا فضّلت ذاكرة تعمل في المتصفح دون إعداد وقبلت بمنتج مغلق.' },
          { q: 'كيف أتحقق من أن Entity يعمل فعلاً دون اتصال؟', a: 'ثبّته، وافصل الشبكة، وأرسل رسالة. إن ردّ فالاستدلال محلي؛ وإن طلب تسجيل الدخول أو فشل فهو معتمد على الحساب.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'الصفحة الرئيسية الرسمية، التي تصف حلقة التعلّم المحروسة في Cognira وميزة الذاكرة وCognira Entity.' },
          { url: 'https://cognira.dev/pricing', title: 'أسعار Cognira', description: 'خطط الأسعار الرسمية وحصص الرموز ووصف منصة Cognira Entity المستخدمة في هذه المراجعة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة oMLX](/power-local-llm/omlx-review) — خادم استدلال محلي مبني على MLX، إطار Apple الذي تقوم عليه دردشة Cognira المستضافة.',
        ],
      },
    },
  },
  ko: {
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/cognira-review-hero-ko.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-26',
    publishDate: '2026-09-26',
    dateModified: '2026-10-05',
    educationalLevel: 'Beginner',
    audience: '기업이 아닌 개인 개발자가 만든, 개인 메모리 기능과 로컬 바이너리 옵션을 갖춘 자기 학습형 AI 채팅 어시스턴트를 검토 중인 사람',
    primaryTerm: 'Cognira',
    title: 'Cognira 리뷰: 로컬 바이너리와 개인 메모리를 갖춘 자기 학습형 AI 어시스턴트',
    seoTitle: 'Cognira 리뷰: 자기 학습형 AI 어시스턴트',
    intro: 'Cognira([cognira.dev](https://cognira.dev))는 1인 팀이 만든 채팅 어시스턴트입니다. 이 리뷰는 작동 방식, 비용, 확인할 수 있었던 주장, 그리고 어떤 사용자에게 맞는지를 설명합니다.',
    metaDescription: 'Cognira는 개인 개발자가 만든 AI 채팅 어시스턴트로, 가드 학습 루프, 사용자별 비공개 메모리, 로컬 Windows/macOS/Linux 바이너리(Cognira Entity)를 갖추고 있습니다. 독립적으로 검증한 가격, 라이선스, 미해결 의문점.',
    readTime: '7분 소요',
    targetKeywords: [
      'Cognira 리뷰',
      'Cognira AI',
      'Cognira Entity',
      '자기 학습형 AI 어시스턴트',
      '개인 메모리를 갖춘 AI 어시스턴트',
    ],
    leadAnswerBlock: '**Cognira는 개인 개발자 한 명이 만든 폐쇄형 소스 채팅 어시스턴트로, 사용자가 가르친 내용을 기억하고 그 기억을 하나씩 삭제할 수 있게 해 줍니다.** 무료로 체험할 수 있고, 호스팅 채팅과 함께 다운로드형 로컬 앱도 제공하며, 주장의 출처가 자체 웹사이트뿐인 초기 단계 제품으로 보는 것이 적절합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Cognira는 무엇이고 비용은 얼마인가요?',
        answer: 'Cognira는 무료 플랜과 월 구독 두 가지로 구성된 채팅 어시스턴트이며, 구독 플랜은 매주 받는 토큰 수만 다릅니다. 모든 플랜에 동일한 기능이 포함됩니다.',
        bullets: [
          '무료로 시작할 수 있으며, 첫 유료 플랜인 Pro는 월 £15입니다',
          '호스팅 채팅과 데스크톱 다운로드 두 가지 형태로 제공됩니다',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: 'Cognira란 무엇인가?', anchor: 'what-is-cognira' },
      { label: 'Cognira의 학습 및 기억 방식', anchor: 'key-features' },
      { label: '로컬 vs. 호스팅: Cognira Entity의 실체', anchor: 'local-vs-hosted' },
      { label: '가격 및 시작하기', anchor: 'pricing-get-started' },
      { label: '확인하지 못한 사항', anchor: 'not-verified' },
      { label: 'Cognira는 누구에게 적합한가?', anchor: 'who-should-use' },
      { label: 'Cognira와 다른 개인용 AI 어시스턴트 비교', anchor: 'cognira-competitors' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용 — Cognira',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cognira는 필터링 과정을 거쳐 사용자의 피드백에 적응하고, 학습한 내용을 비공개 메모리에 저장하는 AI 채팅 어시스턴트입니다.' },
          { type: 'plain-terms', text: '세션마다 처음부터 다시 시작하지 않는 채팅 앱이라고 생각하면 됩니다. 한 번 고쳐 주면 그 교훈을 간직하고, 저장된 항목은 각각 열어 보거나 지울 수 있습니다.' },
        ],
        items: [
          '회사가 아니라 토마스 콘웨이(Thomas Conway) 한 사람이 만들고 운영합니다',
          '무료 플랜과 유료 플랜을 가르는 것은 주간 토큰 할당량뿐입니다',
          '데스크톱 앱이 완전한 오프라인으로 작동하는지는 확인되지 않았습니다',
          '소스 코드, 라이선스 전문, 버전 이력은 공개되어 있지 않습니다',
        ],
        callouts: [
          { type: 'note', text: '이 리뷰는 [로컬 LLM 소프트웨어 디렉터리](/power-local-llm/local-llm-software-directory)에 있는 Cognira 항목을 심층적으로 다룬 글이며, 디렉터리에서는 다른 로컬 및 하이브리드 도구와 한눈에 비교할 수 있습니다.' },
        ],
      },
      overview: {
        id: 'what-is-cognira',
        title: 'Cognira란 무엇인가?',
        content: '**Cognira는 토마스 콘웨이가 만들었으며, 그는 [cognira.dev](https://cognira.dev)에서 이를 "연구소나 마케팅 팀을 갖춘 스타트업이 아닌, 독립적인 1인 개발"이라고 설명합니다.** 이 사이트는 그의 이전 제품인 Conway AI(conw.ai)를 리브랜딩한 것이며, 이 리뷰를 확인한 시점에는 두 도메인 사이의 이전이 아직 진행 중이었으므로 일부 페이지는 바뀔 수 있습니다.',
        items: [
          '모델: 사이트에서 "Cognira Retrain 12B"라고 부르는 독점 120억 파라미터 모델',
          '사용 방법 두 가지: 브라우저에서 채팅하거나, 아래에서 설명하는 로컬 앱 사용',
          '제품 자체에 관한 이곳의 내용은 모두 제공업체의 설명이며, 제3자가 검토한 적은 없습니다',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Cognira의 학습 및 기억 방식',
        content: '이 제품을 규정하는 메커니즘은 두 가지입니다. 둘 다 [cognira.dev](https://cognira.dev)에 설명되어 있으나, 어느 쪽도 독립적으로 테스트하지는 못했습니다.',
        items: [
          '**가드 학습 루프** — 사용자의 수정 사항과 평가에서 안전하지 않거나 형식이 잘못된 내용을 걸러 내고, 그에 따른 변경은 검증을 통과해야만 적용됩니다. 대화 한 번으로 모든 사용자에 대한 어시스턴트의 동작이 바뀌는 일은 없습니다',
          '**비공개 메모리** — 선호도, 사실, 단어를 알려 주면 즉시 저장됩니다. 이후 답변이 그 항목을 활용하면 응답에 해당 항목이 표시되며, "잊기" 버튼을 한 번 누르면 삭제됩니다',
          '**제공하지 않는 기능** — 플러그인, 통합, 음성, 에이전트형 작업은 사이트 어디에서도 찾을 수 없었습니다',
        ],
      },
      localVsHosted: {
        id: 'local-vs-hosted',
        title: '로컬 vs. 호스팅: Cognira Entity의 실체',
        content: 'Cognira Entity는 다운로드형 앱으로, Windows, macOS, Linux용 봉인된 바이너리입니다. 진정한 로컬 도구로 볼 수 있는지는 서로 다른 방향을 가리키는 두 가지 진술에 달려 있습니다.',
        items: [
          '**주장:** 사이트는 "추론, 메모리, 선택적 가중치 수준 재학습이 모두 사용자의 디스크에 남습니다. 외부로 나가는 것은 없습니다."라고 밝힙니다. 문자 그대로 받아들이면, 모델은 서버를 호출하지 않고 사용자의 기기에서 실행됩니다',
          '**제공 방식:** Entity는 호스팅 채팅과 같은 주간 토큰 요금제 안에 포함되어 있습니다. Ollama나 LM Studio 같은 오프라인 도구보다는 계정에 연결된 종량제 클라이언트에 가까워 보입니다',
          '**호스팅 측:** 웹 채팅은 16GB iMac 한 대에서 Apple의 MLX 프레임워크로 제공됩니다. MLX는 이 서비스에만 해당하므로, Entity가 Apple Silicon에 한정되는 것은 아닙니다',
          '**빈틈:** 문서 페이지가 404를 반환하여, 계정과 네트워크 없이 Entity가 작동하는지를 보여 주는 공개 자료는 없습니다',
        ],
        note: '따라서 이 리뷰는 Cognira를 하이브리드로 분류합니다. 로컬 부분은 실제로 존재하지만 완전한 오프라인 실행이 가능한지는 확인되지 않았으며, 네트워크를 끈 상태에서 간단히 시험해 보면 사용자의 기기에서는 바로 확인할 수 있습니다.',
      },
      pricing: {
        id: 'pricing-get-started',
        title: '가격 및 시작하기',
        content: '**[cognira.dev](https://cognira.dev)에서 계정을 만드는 것으로 시작합니다.** 무료 플랜도 계정이 필요하며, 로그인하면 Entity 다운로드가 나타납니다. 가격은 [가격 페이지](https://cognira.dev/pricing)에 영국 파운드로 표시되어 있습니다.',
        columns: ['플랜', '가격', '주당 토큰'],
        rows: [
          { '플랜': '무료', '가격': '£0', '주당 토큰': '25K' },
          { '플랜': 'Pro', '가격': '월 £15', '주당 토큰': '500K' },
          { '플랜': 'Max', '가격': '월 £30', '주당 토큰': '2M' },
        ],
        items: [
          '모든 플랜에 전체 모델, 비공개 메모리, Entity가 포함되며, 차이는 할당량뿐입니다',
          '할당량은 월요일에 초기화되고, 모델이 작성한 분량뿐 아니라 사용자가 입력한 분량도 계산됩니다',
          '유료 플랜은 매월 갱신되며, 평생 이용권은 없고 팀, 기업, 환불 조건도 공개되지 않았습니다',
        ],
        note: '실제 가격 페이지의 숫자가 이 표와 다르면 실제 페이지가 우선합니다.',
      },
      notVerified: {
        id: 'not-verified',
        title: '확인하지 못한 사항',
        content: '꼼꼼한 구매자라면 보통 확인할 여러 항목이 공개되어 있지 않아, 이 리뷰에서는 확인할 수 없습니다.',
        items: [
          '**라이선스:** 폐쇄형 소스입니다. LICENSE 파일도 사용자 약관도 찾지 못했습니다',
          '**코드:** GitHub 저장소가 없으므로 바이너리의 동작을 살펴볼 수 없습니다',
          '**버전:** 채팅과 Entity 모두 버전 번호, 변경 로그, 릴리스 이력이 없습니다',
          '**모델:** 아키텍처와 학습 방식은 제공업체의 표현을 통해서만 알 수 있습니다',
          '**데이터 처리:** 호스팅 서비스가 무엇을 저장하거나 전송하는지에 대한 독립적인 설명이 없습니다',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Cognira는 누구에게 적합한가?',
        content: '핵심은 감사를 거치지 않은 1인 개발 제품에 지속적이고 편집 가능한 메모리를 맡길 만한 가치가 있는지입니다.',
        subsections: [
          {
            title: '다음에 해당한다면 적합합니다',
            list: [
              '세션마다 선호도를 다시 설명하는 데 지쳤습니다',
              '1인 개발자가 만든 폐쇄형 소프트웨어도 괜찮습니다',
              '비용을 내기 전에 로컬 앱을 먼저 써 보고 싶습니다',
            ],
          },
          {
            title: '다음에 해당한다면 다른 곳을 찾아보세요',
            list: [
              '감사를 거친 오픈소스 도구가 필요합니다',
              '계정 없이 오프라인으로 쓸 수 있다는 검증이 필요합니다',
              '리브랜딩한 지 얼마 되지 않았으므로, 오랜 실적을 가진 제공업체가 필요합니다',
              '음성, 플러그인, 에이전트 작업을 원합니다',
            ],
          },
        ],
      },
      competitors: {
        id: 'cognira-competitors',
        title: 'Cognira와 다른 개인용 AI 어시스턴트 비교',
        content: '[로컬 LLM 소프트웨어 디렉터리](/power-local-llm/local-llm-software-directory)에서 가장 가까운 개인 메모리 어시스턴트는 다음과 같습니다.',
        items: [
          '**[Khoj](https://khoj.dev)** — 로컬 모델에서 장기 메모리와 문서 검색을 제공하는 오픈소스이며, 코드를 감사할 수 있습니다. [Khoj 리뷰](/power-local-llm/khoj-ai-second-brain-review)',
          '**[Second Me](https://github.com/mindverse/Second-Me)** — 지속적인 개인 메모리 모델을 학습시키려는 오픈소스 프로젝트로, 공개 저장소가 있습니다. [Second Me 리뷰](/power-local-llm/second-me-review-2026)',
          '**[Aori](https://aori.so)** — 대화를 기억하기보다 작업을 수행하는 데 초점을 둔 개인 에이전트입니다. [Aori 리뷰](/power-local-llm/aori-ai-personal-agent-review)',
          '**[Jarvis](https://heyjarvis.ai)** — 비슷하게 소규모인 팀이 만든 macOS 전용 어시스턴트입니다. [Jarvis 리뷰](/power-local-llm/jarvis-mac-review)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '부담 없이 Cognira를 체험하려면 어떻게 하나요?', a: '무료 플랜에 가입해 선호도를 하나 가르쳐 보고, 메모리 목록에 표시되는지 확인한 다음, Entity를 내려받아 두 가지가 어떻게 다르게 동작하는지 비교해 보세요.' },
          { q: 'Cognira에 민감한 데이터나 규제 대상 데이터를 사용해도 되나요?', a: '현재 확인된 근거로는 권하기 어렵습니다. 호스팅 서비스의 데이터 처리 방식을 설명하는 독립적인 자료가 없으므로, 먼저 제공업체의 약관을 읽어 보고 그전까지는 기밀 자료를 입력하지 마세요.' },
          { q: 'Cognira와 Khoj 중 무엇을 선택해야 하나요?', a: '직접 감사하고 실행할 수 있는 코드를 원한다면 Khoj를, 설정 없이 브라우저에서 바로 메모리를 쓰고 폐쇄형 제품을 감수할 수 있다면 Cognira를 선택하세요.' },
          { q: 'Entity가 정말 오프라인으로 작동하는지 어떻게 확인하나요?', a: '설치한 뒤 네트워크 연결을 끊고 메시지를 보내 보세요. 응답이 오면 추론이 로컬에서 이루어지는 것이고, 로그인을 요구하거나 실패한다면 계정에 의존하는 것입니다.' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          { url: 'https://cognira.dev', title: 'Cognira', description: 'Cognira의 가드 학습 루프, 메모리 기능, Cognira Entity를 설명하는 공식 홈페이지.' },
          { url: 'https://cognira.dev/pricing', title: 'Cognira 가격', description: '이 리뷰에 사용된 공식 가격 플랜, 토큰 할당량, Cognira Entity 플랫폼 설명.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[oMLX 리뷰](/power-local-llm/omlx-review) — Apple이 만든 프레임워크이자 Cognira 호스팅 채팅의 기반인 MLX 위에 구축된 로컬 추론 서버.',
        ],
      },
    },
  },
}
