// Localhosted Review: Web Directory of Local and Self-Hosted AI Tools
// Slug: localhosted-review
// Companion to: local-llm-train-operate-compared (nearest category comparison), the PromptQuorum directory at /directory
// No competitors section on purpose: the directory has no other web catalogue in the 'model-hubs' sub-category, and the other tiles in that group hold models, not tool listings.
// This is NOT a local AI app: it is a website that catalogues tools and sits next to the PromptQuorum App Directory. It is reviewed because readers compare directories.
// Sources: localhosted.com home page, /about, /privacy (last updated 2026-09-30) and /advertise, plus the portfolio page logotyper.com, all read 2026-10-26 — no hands-on testing,
// no contact with the operator. Counts (1,800+ tools, 100+ categories, 10 platforms, 58 tags, 65 alternatives, 14 collections, 1,400+ videos) are the home-page figures of 2026-10-26.
// Ad prices per day: banner $25, tool directory $15, tool page $10, guides and videos $5 (/advertise, 2026-10-26). No version number or release page exists, so none is stated.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-en.webp',
    title: 'Localhosted Review: Web Directory of Local and Self-Hosted AI Tools',
    seoTitle: 'Localhosted Review: Directory of Local and Self-Hosted AI',
    intro:
      'Localhosted is a free website that catalogues local and self-hosted AI software: apps, model servers, coding assistants and creative tools, with collections, alternatives and video guides. It is not an app you install and it runs no model for you, so this review looks at it as a directory next to the [PromptQuorum App Directory](/directory). It reflects the site as read on 26 October 2026.',
    metaDescription:
      'Localhosted review: a free web directory of 1,800+ local and self-hosted AI tools. What it lists, how entries are written, paid listings, ads and privacy.',
    twitterDescription:
      'Localhosted review: a free web directory of local and self-hosted AI tools. What it offers, how listings are written, what is paid and what the sources do not confirm.',
    audience:
      'People who look for local or self-hosted AI tools and want to know what the Localhosted directory offers, how its entries are produced, what is paid and what to double-check.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Localhosted review',
    targetKeywords: [
      'localhosted review',
      'local ai tools directory',
      'self-hosted ai directory',
      'local ai alternatives to chatgpt',
      'directory of local llm apps',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted is a free web directory of local and self-hosted AI tools; per its home page of 26 October 2026 it lists 1,800+ tools in 100+ categories, with collections, local alternatives to cloud apps and 1,400+ videos.** Nothing is installed and no model runs for you: you browse, then follow the link to each tool. Its own About page says entries are drafted with AI help and do not mean a tool was tested, and that paid placements exist.',
    quickAnswerTop: {
      en: {
        question: 'Is Localhosted an app that runs AI on your computer?',
        answer:
          'No. Localhosted is a website that lists tools you can run on your own hardware; it does not run models, offers no download and has no version number. Each listing links out to the tool\'s own site or repository.',
        bullets: [
          'Free to browse at [localhosted.com](https://localhosted.com/); an account is optional and an "Add tool" page accepts submissions.',
          'Browse by tool, alternative, category, platform or tag, or search with ⌘K.',
          'Listing pages show platforms, license, tags and a "last updated" date, and some note offline use.',
          'Trending and new-release sections use GitHub star and release data.',
          'Sold placements exist (ads and Premium listings), so featured positions are not a quality ranking.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Localhosted?', anchor: 'what-is-localhosted' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing and Paid Placements', anchor: 'pricing' },
      { label: 'How to Use It', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'Localhosted is a free, closed web directory that catalogues local and self-hosted AI tools, with AI-assisted entries and paid placements.',
          },
          {
            type: 'plain-terms',
            text: 'You open the website, browse or search a large list of tools you can run on your own machine, and click through to each tool; nothing is installed from Localhosted itself.',
          },
        ],
        items: [
          'Scale: the home page shows 1,800+ tools, 100+ categories, 14 collections and 1,400+ videos.',
          'Operator: the About page does not name anyone; the designer\'s portfolio at logotyper.com lists Localhosted as a project, and a sponsored slot calls "Eugene" the designer and developer behind it.',
          'Entries: descriptions come from project sites and READMEs, with AI help; a listing does not mean the tool was installed or benchmarked.',
          'Money: ads cost $5 to $25 per day per slot, and Premium listings get faster review and a sponsored label.',
          'Maintenance: the privacy policy was updated on 30 September 2026; there is no version number or public repository, so no stale-project warning can be calculated.',
          'Relation to us: PromptQuorum runs its own [App Directory](/directory); this review is independent and Localhosted was not contacted.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the pages of localhosted.com and the designer\'s portfolio, read on 26 October 2026. PromptQuorum has not tested the site beyond reading it, did not contact its operator and cannot check how entries are produced. PromptQuorum publishes a directory of its own, so treat this as a comparison by an interested party.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'What Is Localhosted?',
        content: [
          '**Localhosted is a catalogue website, not software: it describes tools that run on your own computer or server and links to them.** Its tagline is "There\'s no place like 127.0.0.1", and the home page frames it as "Local and self-hosted AI, in one directory".',
          'The About page says it selects software that supports local use or self-hosting, including apps, libraries, creative tools, models and the programs that run them. It does not name the people behind it. The designer\'s portfolio at [logotyper.com](https://logotyper.com/) lists Localhosted among its projects, with brand identity, UI and UX, directory development, GitHub integration, AI automation and monetization as the work done.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Localhosted opens in a browser; there is no download, app-store listing or source repository.** An account is optional and is needed for submissions.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          { 'Platform': 'Any browser', 'Where to get it': '[localhosted.com](https://localhosted.com/)' },
          { 'Platform': 'Website', 'Where to get it': '[localhosted.com](https://localhosted.com/)' },
          { 'Platform': 'Privacy policy', 'Where to get it': '[localhosted.com/privacy](https://localhosted.com/privacy) (last updated 30 September 2026)' },
          { 'Platform': 'About', 'Where to get it': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'Platform': 'Advertising', 'Where to get it': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'No version applies to a website. A newsletter, an RSS feed and sign-in with Google or GitHub are offered; none is required to browse.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing and Paid Placements',
        content: [
          '**Browsing Localhosted costs nothing; the site earns money from advertising and from paid listings.** The /advertise page sells one placement per advertiser at a time, booked at least two days ahead and for up to 90 days, with a visible "Ad" label. Prices are per day as of 26 October 2026.',
        ],
        columns: ['Placement', 'Where it appears', 'Price per day'],
        rows: [
          { 'Placement': 'Site-wide banner', 'Where it appears': 'Top of every page', 'Price per day': '$25' },
          { 'Placement': 'Tool directory', 'Where it appears': 'Card in the grid beside compared tools', 'Price per day': '$15' },
          { 'Placement': 'Tool pages', 'Where it appears': 'Card beside a tool\'s details', 'Price per day': '$10' },
          { 'Placement': 'Guides and videos', 'Where it appears': 'Card beside articles and video walkthroughs', 'Price per day': '$5' },
        ],
        note: 'Separately, the About page says Premium listings get faster review and featured placement with a sponsored label, and that a paid placement "does not establish that we have tested the tool or rated its performance". How Premium listings are ranked is not described.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Use It',
        content: [
          '**These steps follow the navigation the home page offers; PromptQuorum has not run a full search session.**',
        ],
        numberedItems: [
          {
            title: 'Start from a collection or a category',
            whyItMatters: 'Collections such as "ChatGPT & Claude alternatives" or "AI for a modest PC" narrow 1,800+ tools to a short list.',
          },
          {
            title: 'Filter by platform and license',
            whyItMatters: 'Each listing shows platforms such as macOS, Windows, Linux, Docker or Web and a license, so you can drop tools that do not fit your machine.',
          },
          {
            title: 'Check the "last updated" date and the GitHub data',
            whyItMatters: 'Listings carry a last-updated date, and trending sections show star and release data, which helps spot abandoned projects.',
          },
          {
            title: 'Open the tool\'s own site before installing',
            whyItMatters: 'Descriptions are summaries drafted from project pages, so the project\'s own site and license remain the authority.',
          },
          {
            title: 'Look for the Ad or sponsored label',
            whyItMatters: 'Ads and Premium listings carry labels, so you can tell paid slots from organic entries.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the home page, the About page or the other pages named in the sources.**',
        ],
        items: [
          '**Large catalogue.** The home page shows 1,800+ tools, 100+ categories, 10 platforms, 58 tags and 65 alternatives, which are local swaps for cloud apps.',
          '**Tool pages.** Description, platforms, license, tags, categories and a last-updated date; some listings say whether the tool works offline or needs the cloud.',
          '**Sorting and search.** Newest, most stars or recently updated, a global search on ⌘K, and browsing by tool, alternative, category, platform or tag.',
          '**GitHub activity.** Trending and newly released sections with star counts over the past week and recent release versions.',
          '**Collections and videos.** 14 curated collections and 1,400+ videos, which the About page says are summarized from the creator\'s transcript and metadata; the video creator owns the demonstrations and opinions.',
          '**Submissions.** An "Add tool" page; the review process is not described on the pages read.',
          '**Extras.** A blog with how-tos, a newsletter and an RSS feed.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Localhosted is a website, so visiting it sends requests to its servers and to its analytics and advertising providers; the privacy policy, last updated on 30 September 2026, lists them.** Google Analytics measures visits to public pages with first-party cookies, with advertising signals and ad personalization disabled and query strings removed. A separate per-tool, per-day visit counter uses no cookies, identifiers or IP addresses, and Plausible, when enabled, uses no analytics cookies by default.',
          'Accounts can hold email, name, profile image and sign-in identifiers from Google or GitHub. Resend handles newsletter email. The advertising provider Revinel receives technical data such as IP address and the page involved, affiliate links can carry referral identifiers, and the configured Neon database is in the United States.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These statements come from the policy text; PromptQuorum has not audited the site\'s network traffic. The tools listed on Localhosted have their own privacy practices, which the directory does not vouch for.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Readers looking for a local swap for a cloud AI app.** The alternatives list and collections start from that question.',
          '**Self-hosters who want one more place to discover tools.** Platform, license and update-date filters help.',
          '**Developers watching new projects.** The trending and new-release sections use GitHub data.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy of entries.** The site says descriptions are drafted with AI help and that a listing does not mean the tool was installed or benchmarked; PromptQuorum did not check individual entries.',
          '**How listings are chosen.** Selection criteria and the review of submissions are only described in general terms.',
          '**Who runs it.** The About page names no one; the operator is inferred from the designer\'s portfolio and a sponsored slot.',
          '**Ranking.** How Premium listings and "most stars" interact with ordering is not documented.',
          '**Source code, license and version.** None is stated, and no public repository was found.',
          '**Independence.** The site sells advertising and Premium listings, and makes no explicit independence claim.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need an account to use Localhosted?',
            a: 'No for browsing; an account is offered for sign-in with Google or GitHub and for the "Add tool" submission page.',
          },
          {
            q: 'Are the tools listed there tested by Localhosted?',
            a: 'Per its About page, no: a listing describes documented features and does not mean the tool was installed or benchmarked, and a paid placement does not mean it was tested either.',
          },
          {
            q: 'How is it different from the PromptQuorum App Directory?',
            a: 'Localhosted lists far more entries and adds videos and alternatives; the PromptQuorum directory lists fewer apps and attaches editorial reviews, hardware and data-locality fields and last-update warnings to many of them. PromptQuorum is an interested party, so compare both.',
          },
          {
            q: 'Can a tool pay to be listed?',
            a: 'Yes. The About page says Premium listings get faster review and featured placement, with a sponsored label; ads are sold separately.',
          },
          {
            q: 'Does Localhosted run AI models for me?',
            a: 'No. It is a catalogue; to run a model locally you install one of the listed tools yourself.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Localhosted is a large, free catalogue for finding local and self-hosted AI tools, with collections, cloud-app alternatives, GitHub activity data and videos. Against that, entries are AI-assisted summaries rather than test results, paid listings and ads exist, the operator is not named on its own About page and the pages read describe how entries are chosen only in general terms. It suits readers who want a wide starting list and then verify each tool on its own site; readers who want editorial reviews can start with the PromptQuorum [App Directory](/directory).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Localhosted home page](https://localhosted.com/) — counts, features, navigation and ad labels, read 26 October 2026.',
          '[Localhosted About](https://localhosted.com/about) — selection, AI-assisted descriptions, video summaries and Premium listings, read 26 October 2026.',
          '[Localhosted privacy policy](https://localhosted.com/privacy) — analytics, cookies, accounts, providers and data location, last updated 30 September 2026.',
          '[Localhosted advertising page](https://localhosted.com/advertise) — placements, prices and booking rules, read 26 October 2026.',
          '[Logotyper portfolio](https://logotyper.com/) — lists Localhosted as a project and its scope, read 26 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local AI App Directory](/directory) — the PromptQuorum directory of local AI apps with reviews and filters.',
          '[Local LLM Train and Operate Compared](/power-local-llm/local-llm-train-operate-compared) — the category comparison nearest to model hubs.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Localhosted Review: Web Directory of Local and Self-Hosted AI Tools',
      description:
        'Localhosted review: a free web directory of 1,800+ local and self-hosted AI tools. What it lists, how entries are written, paid listings, ads and privacy.',
      url: 'https://www.promptquorum.com/power-local-llm/localhosted-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People looking for local and self-hosted AI tools' },
      about: [
        { '@type': 'Thing', name: 'Localhosted' },
        { '@type': 'Thing', name: 'Local AI' },
        { '@type': 'Thing', name: 'Self-hosted software' },
        { '@type': 'Thing', name: 'Software directory' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/localhosted-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Localhosted Review', item: 'https://www.promptquorum.com/power-local-llm/localhosted-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-de.webp',
    title: 'Localhosted-Rezension: Web-Verzeichnis lokaler und selbst gehosteter KI-Tools',
    seoTitle: 'Localhosted-Rezension: Verzeichnis lokaler KI-Tools',
    intro:
      'Localhosted ist eine kostenlose Website, die lokale und selbst gehostete KI-Software katalogisiert: Apps, Modell-Server, Coding-Assistenten und kreative Werkzeuge, mit Sammlungen, Alternativen und Videoanleitungen. Es ist keine App, die Sie installieren, und sie führt kein Modell für Sie aus; diese Rezension betrachtet sie daher als Verzeichnis neben dem [PromptQuorum-App-Verzeichnis](/de/directory). Sie gibt die Website so wieder, wie sie am 26. Oktober 2026 gelesen wurde.',
    metaDescription:
      'Localhosted-Rezension: kostenloses Web-Verzeichnis mit über 1.800 lokalen und selbst gehosteten KI-Tools. Einträge, Bezahlplätze, Werbung, Datenschutz.',
    twitterDescription:
      'Localhosted-Rezension: ein kostenloses Web-Verzeichnis lokaler und selbst gehosteter KI-Tools. Was es bietet, wie Einträge entstehen, was bezahlt ist und was die Quellen nicht bestätigen.',
    audience:
      'Menschen, die lokale oder selbst gehostete KI-Tools suchen und wissen möchten, was das Verzeichnis Localhosted bietet, wie seine Einträge entstehen, was bezahlt ist und was sie gegenprüfen sollten.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Localhosted Rezension',
    targetKeywords: [
      'localhosted rezension',
      'verzeichnis lokaler ki-tools',
      'verzeichnis selbst gehosteter ki',
      'lokale ki-alternativen zu chatgpt',
      'verzeichnis lokaler llm-apps',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted ist ein kostenloses Web-Verzeichnis lokaler und selbst gehosteter KI-Tools; laut Startseite vom 26. Oktober 2026 listet es über 1.800 Tools in mehr als 100 Kategorien, mit Sammlungen, lokalen Alternativen zu Cloud-Apps und über 1.400 Videos.** Es wird nichts installiert und kein Modell für Sie ausgeführt: Sie stöbern und folgen dann dem Link zum jeweiligen Tool. Die eigene Über-uns-Seite sagt, dass Einträge mit KI-Hilfe entworfen werden und nicht bedeuten, dass ein Tool getestet wurde, und dass es bezahlte Platzierungen gibt.',
    quickAnswerTop: {
      de: {
        question: 'Ist Localhosted eine App, die KI auf Ihrem Computer ausführt?',
        answer:
          'Nein. Localhosted ist eine Website, die Tools auflistet, die Sie auf eigener Hardware betreiben können; sie führt keine Modelle aus, bietet keinen Download und hat keine Versionsnummer. Jeder Eintrag verlinkt auf die eigene Website oder das Repository des Tools.',
        bullets: [
          'Kostenlos zu durchsuchen unter [localhosted.com](https://localhosted.com/); ein Konto ist optional, und eine Seite „Add tool“ nimmt Einreichungen entgegen.',
          'Stöbern nach Tool, Alternative, Kategorie, Plattform oder Tag, oder Suche per ⌘K.',
          'Eintragsseiten zeigen Plattformen, Lizenz, Tags und ein Datum „zuletzt aktualisiert“, manche nennen die Offline-Nutzung.',
          'Bereiche für Trends und neue Releases nutzen GitHub-Daten zu Sternen und Veröffentlichungen.',
          'Verkaufte Platzierungen existieren (Werbung und Premium-Einträge), hervorgehobene Positionen sind daher kein Qualitätsranking.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Localhosted?', anchor: 'what-is-localhosted' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Preise und bezahlte Platzierungen', anchor: 'pricing' },
      { label: 'So nutzen Sie es', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Für wen sich das Verzeichnis eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'Localhosted ist ein kostenloses, nicht quelloffenes Web-Verzeichnis, das lokale und selbst gehostete KI-Tools katalogisiert, mit KI-gestützten Einträgen und bezahlten Platzierungen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie öffnen die Website, stöbern in einer großen Liste von Tools, die Sie auf Ihrem eigenen Rechner betreiben können, oder durchsuchen sie, und klicken sich zum jeweiligen Tool durch; von Localhosted selbst wird nichts installiert.',
          },
        ],
        items: [
          'Umfang: Die Startseite zeigt über 1.800 Tools, mehr als 100 Kategorien, 14 Sammlungen und über 1.400 Videos.',
          'Betreiber: Die Über-uns-Seite nennt niemanden; das Portfolio des Designers auf logotyper.com führt Localhosted als Projekt, und ein gesponserter Platz nennt „Eugene“ den Designer und Entwickler dahinter.',
          'Einträge: Beschreibungen stammen von Projektseiten und READMEs, mit KI-Hilfe; ein Eintrag bedeutet nicht, dass das Tool installiert oder gemessen wurde.',
          'Geld: Werbung kostet 5 $ bis 25 $ pro Tag und Platz, und Premium-Einträge erhalten schnellere Prüfung und eine Kennzeichnung als gesponsert.',
          'Pflege: Die Datenschutzerklärung wurde am 30. September 2026 aktualisiert; es gibt weder Versionsnummer noch öffentliches Repository, daher lässt sich keine Warnung vor einem veralteten Projekt berechnen.',
          'Bezug zu uns: PromptQuorum betreibt ein eigenes [App-Verzeichnis](/de/directory); diese Rezension ist unabhängig, und Localhosted wurde nicht kontaktiert.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Seiten von localhosted.com und das Portfolio des Designers, gelesen am 26. Oktober 2026. PromptQuorum hat die Website über das Lesen hinaus nicht getestet, den Betreiber nicht kontaktiert und kann nicht prüfen, wie Einträge entstehen. PromptQuorum veröffentlicht ein eigenes Verzeichnis; betrachten Sie dies daher als Vergleich durch eine interessierte Partei.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'Was ist Localhosted?',
        content: [
          '**Localhosted ist eine Katalog-Website, keine Software: Sie beschreibt Tools, die auf Ihrem eigenen Computer oder Server laufen, und verlinkt auf sie.** Ihr Leitspruch lautet „There\'s no place like 127.0.0.1“, und die Startseite beschreibt sie als „Local and self-hosted AI, in one directory“.',
          'Die Über-uns-Seite sagt, sie wähle Software aus, die lokale Nutzung oder Selbsthosting unterstützt, darunter Apps, Bibliotheken, kreative Werkzeuge, Modelle und die Programme, die sie ausführen. Die Menschen dahinter nennt sie nicht. Das Portfolio des Designers unter [logotyper.com](https://logotyper.com/) führt Localhosted unter seinen Projekten, mit Markenidentität, UI und UX, Verzeichnisentwicklung, GitHub-Integration, KI-Automatisierung und Monetarisierung als geleisteter Arbeit.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Localhosted öffnet sich im Browser; es gibt keinen Download, keinen App-Store-Eintrag und kein Quellcode-Repository.** Ein Konto ist optional und wird für Einreichungen benötigt.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          { 'Plattform': 'Jeder Browser', 'Bezugsquelle': '[localhosted.com](https://localhosted.com/)' },
          { 'Plattform': 'Website', 'Bezugsquelle': '[localhosted.com](https://localhosted.com/)' },
          { 'Plattform': 'Datenschutzerklärung', 'Bezugsquelle': '[localhosted.com/privacy](https://localhosted.com/privacy) (Stand 30. September 2026)' },
          { 'Plattform': 'Über uns', 'Bezugsquelle': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'Plattform': 'Werbung', 'Bezugsquelle': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'Für eine Website gibt es keine Version. Ein Newsletter, ein RSS-Feed und die Anmeldung mit Google oder GitHub werden angeboten; für das Stöbern ist nichts davon nötig.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise und bezahlte Platzierungen',
        content: [
          '**Das Stöbern auf Localhosted kostet nichts; die Website verdient Geld mit Werbung und mit bezahlten Einträgen.** Die Seite /advertise verkauft jeweils einen Platz pro Werbetreibendem, buchbar mindestens zwei Tage im Voraus und für bis zu 90 Tage, mit sichtbarer Kennzeichnung „Ad“. Die Preise gelten pro Tag, Stand 26. Oktober 2026.',
        ],
        columns: ['Platzierung', 'Wo sie erscheint', 'Preis pro Tag'],
        rows: [
          { 'Platzierung': 'Seitenweites Banner', 'Wo sie erscheint': 'Oben auf jeder Seite', 'Preis pro Tag': '25 $' },
          { 'Platzierung': 'Tool-Verzeichnis', 'Wo sie erscheint': 'Karte im Raster neben verglichenen Tools', 'Preis pro Tag': '15 $' },
          { 'Platzierung': 'Tool-Seiten', 'Wo sie erscheint': 'Karte neben den Details eines Tools', 'Preis pro Tag': '10 $' },
          { 'Platzierung': 'Anleitungen und Videos', 'Wo sie erscheint': 'Karte neben Artikeln und Video-Anleitungen', 'Preis pro Tag': '5 $' },
        ],
        note: 'Davon getrennt sagt die Über-uns-Seite, Premium-Einträge erhielten schnellere Prüfung und hervorgehobene Platzierung mit Kennzeichnung als gesponsert, und eine bezahlte Platzierung „does not establish that we have tested the tool or rated its performance“. Wie Premium-Einträge eingeordnet werden, wird nicht beschrieben.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So nutzen Sie es',
        content: [
          '**Diese Schritte folgen der Navigation, die die Startseite anbietet; PromptQuorum hat keine vollständige Suchsitzung durchgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Mit einer Sammlung oder Kategorie beginnen',
            whyItMatters: 'Sammlungen wie „ChatGPT & Claude alternatives“ oder „AI for a modest PC“ verkleinern über 1.800 Tools auf eine kurze Liste.',
          },
          {
            title: 'Nach Plattform und Lizenz filtern',
            whyItMatters: 'Jeder Eintrag zeigt Plattformen wie macOS, Windows, Linux, Docker oder Web und eine Lizenz, sodass Sie Tools aussortieren können, die nicht zu Ihrem Rechner passen.',
          },
          {
            title: 'Datum „zuletzt aktualisiert“ und GitHub-Daten prüfen',
            whyItMatters: 'Einträge tragen ein Datum der letzten Aktualisierung, und Trendbereiche zeigen Stern- und Release-Daten, was beim Erkennen aufgegebener Projekte hilft.',
          },
          {
            title: 'Vor der Installation die Website des Tools öffnen',
            whyItMatters: 'Beschreibungen sind aus Projektseiten entworfene Zusammenfassungen, daher bleiben die eigene Website und Lizenz des Projekts maßgeblich.',
          },
          {
            title: 'Auf die Kennzeichnung Ad oder gesponsert achten',
            whyItMatters: 'Werbung und Premium-Einträge sind gekennzeichnet, sodass Sie bezahlte Plätze von organischen Einträgen unterscheiden können.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von der Startseite, der Über-uns-Seite oder den anderen in den Quellen genannten Seiten.**',
        ],
        items: [
          '**Großer Katalog.** Die Startseite zeigt über 1.800 Tools, mehr als 100 Kategorien, 10 Plattformen, 58 Tags und 65 Alternativen, also lokale Ersatzlösungen für Cloud-Apps.',
          '**Tool-Seiten.** Beschreibung, Plattformen, Lizenz, Tags, Kategorien und ein Datum der letzten Aktualisierung; manche Einträge sagen, ob das Tool offline funktioniert oder die Cloud braucht.',
          '**Sortierung und Suche.** Neueste, meiste Sterne oder zuletzt aktualisiert, eine globale Suche über ⌘K und Stöbern nach Tool, Alternative, Kategorie, Plattform oder Tag.',
          '**GitHub-Aktivität.** Bereiche für Trends und neue Releases mit Sternzahlen der vergangenen Woche und aktuellen Release-Versionen.',
          '**Sammlungen und Videos.** 14 kuratierte Sammlungen und über 1.400 Videos, die laut Über-uns-Seite aus dem Transkript und den Metadaten des Urhebers zusammengefasst werden; dem Video-Urheber gehören die Demonstrationen und Meinungen.',
          '**Einreichungen.** Eine Seite „Add tool“; das Prüfverfahren wird auf den gelesenen Seiten nicht beschrieben.',
          '**Extras.** Ein Blog mit Anleitungen, ein Newsletter und ein RSS-Feed.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Localhosted ist eine Website, daher gehen beim Besuch Anfragen an ihre Server sowie an ihre Analyse- und Werbeanbieter; die Datenschutzerklärung (zuletzt aktualisiert am 30. September 2026) listet sie auf.** Google Analytics misst Besuche öffentlicher Seiten mit First-Party-Cookies, wobei Werbesignale und Anzeigenpersonalisierung deaktiviert und Query-Strings entfernt sind. Ein separater Besuchszähler pro Tool und Tag verwendet keine Cookies, Kennungen oder IP-Adressen, und Plausible nutzt, sofern aktiviert, standardmäßig keine Analyse-Cookies.',
          'Konten können E-Mail, Name, Profilbild und Anmeldekennungen von Google oder GitHub enthalten. Resend übernimmt den Newsletter-Versand. Der Werbeanbieter Revinel erhält technische Daten wie IP-Adresse und die betreffende Seite, Affiliate-Links können Empfehlungskennungen tragen, und die konfigurierte Neon-Datenbank befindet sich in den Vereinigten Staaten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Angaben stammen aus dem Text der Erklärung; PromptQuorum hat den Netzwerkverkehr der Website nicht geprüft. Die auf Localhosted gelisteten Tools haben eigene Datenschutzpraktiken, für die das Verzeichnis nicht bürgt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich das Verzeichnis eignet',
        items: [
          '**Leser, die einen lokalen Ersatz für eine Cloud-KI-App suchen.** Die Alternativenliste und die Sammlungen gehen von dieser Frage aus.',
          '**Selbsthoster, die einen weiteren Ort zum Entdecken von Tools wünschen.** Filter für Plattform, Lizenz und Aktualisierungsdatum helfen.',
          '**Entwickler, die neue Projekte beobachten.** Die Bereiche für Trends und neue Releases nutzen GitHub-Daten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Richtigkeit der Einträge.** Die Website sagt, Beschreibungen würden mit KI-Hilfe entworfen und ein Eintrag bedeute nicht, dass das Tool installiert oder gemessen wurde; PromptQuorum hat einzelne Einträge nicht geprüft.',
          '**Auswahl der Einträge.** Auswahlkriterien und die Prüfung von Einreichungen werden nur allgemein beschrieben.',
          '**Wer dahintersteckt.** Die Über-uns-Seite nennt niemanden; der Betreiber ergibt sich aus dem Portfolio des Designers und einem gesponserten Platz.',
          '**Reihenfolge.** Wie Premium-Einträge und „meiste Sterne“ die Sortierung beeinflussen, ist nicht dokumentiert.',
          '**Quellcode, Lizenz und Version.** Keines davon wird genannt, und ein öffentliches Repository wurde nicht gefunden.',
          '**Unabhängigkeit.** Die Website verkauft Werbung und Premium-Einträge und erhebt keinen ausdrücklichen Anspruch auf Unabhängigkeit.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich ein Konto, um Localhosted zu nutzen?',
            a: 'Zum Stöbern nein; ein Konto wird für die Anmeldung mit Google oder GitHub und für die Einreichungsseite „Add tool“ angeboten.',
          },
          {
            q: 'Werden die dort gelisteten Tools von Localhosted getestet?',
            a: 'Laut Über-uns-Seite nein: Ein Eintrag beschreibt dokumentierte Funktionen und bedeutet nicht, dass das Tool installiert oder gemessen wurde, und eine bezahlte Platzierung bedeutet ebenfalls nicht, dass es getestet wurde.',
          },
          {
            q: 'Worin unterscheidet es sich vom PromptQuorum-App-Verzeichnis?',
            a: 'Localhosted listet weit mehr Einträge und ergänzt Videos und Alternativen; das PromptQuorum-Verzeichnis listet weniger Apps und versieht viele davon mit redaktionellen Rezensionen, Hardware- und Ausführungsort-Angaben (lokal oder Cloud) und Warnungen zur letzten Aktualisierung. PromptQuorum ist eine interessierte Partei, vergleichen Sie daher beide.',
          },
          {
            q: 'Kann ein Tool dafür bezahlen, gelistet zu werden?',
            a: 'Ja. Die Über-uns-Seite sagt, Premium-Einträge erhielten schnellere Prüfung und hervorgehobene Platzierung mit Kennzeichnung als gesponsert; Werbung wird separat verkauft.',
          },
          {
            q: 'Führt Localhosted KI-Modelle für mich aus?',
            a: 'Nein. Es ist ein Katalog; um ein Modell lokal auszuführen, installieren Sie eines der gelisteten Tools selbst.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Localhosted ist ein großer, kostenloser Katalog zum Finden lokaler und selbst gehosteter KI-Tools, mit Sammlungen, Alternativen zu Cloud-Apps, GitHub-Aktivitätsdaten und Videos. Dagegen stehen: Einträge sind KI-gestützte Zusammenfassungen statt Testergebnisse, es gibt bezahlte Einträge und Werbung, der Betreiber wird auf der eigenen Über-uns-Seite nicht genannt, und die gelesenen Seiten beschreiben die Auswahl der Einträge nur in allgemeinen Worten. Es eignet sich für Leser, die eine breite Startliste wünschen und jedes Tool anschließend auf dessen eigener Website prüfen; wer redaktionelle Rezensionen sucht, kann mit dem PromptQuorum-[App-Verzeichnis](/de/directory) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Localhosted-Startseite](https://localhosted.com/) — Zahlen, Funktionen, Navigation und Werbekennzeichnung, gelesen am 26. Oktober 2026.',
          '[Localhosted Über uns](https://localhosted.com/about) — Auswahl, KI-gestützte Beschreibungen, Videozusammenfassungen und Premium-Einträge, gelesen am 26. Oktober 2026.',
          '[Localhosted-Datenschutzerklärung](https://localhosted.com/privacy) — Analyse, Cookies, Konten, Anbieter und Datenstandort, zuletzt aktualisiert am 30. September 2026.',
          '[Localhosted-Werbeseite](https://localhosted.com/advertise) — Platzierungen, Preise und Buchungsregeln, gelesen am 26. Oktober 2026.',
          '[Logotyper-Portfolio](https://logotyper.com/) — führt Localhosted als Projekt und dessen Umfang, gelesen am 26. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Verzeichnis lokaler KI-Apps](/de/directory) — das PromptQuorum-Verzeichnis lokaler KI-Apps mit Rezensionen und Filtern.',
          '[Lokale LLMs im Vergleich: Training und Betrieb](/de/power-local-llm/local-llm-train-operate-compared) — der Kategorievergleich, der Modell-Hubs am nächsten kommt.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-es.webp',
    title: 'Reseña de Localhosted: directorio web de herramientas de IA locales y autoalojadas',
    seoTitle: 'Reseña de Localhosted: directorio de IA local y propia',
    intro:
      'Localhosted es un sitio web gratuito que cataloga software de IA local y autoalojado: apps, servidores de modelos, asistentes de programación y herramientas creativas, con colecciones, alternativas y guías en vídeo. No es una app que se instale y no ejecuta ningún modelo por ti, así que esta reseña lo analiza como un directorio junto al [directorio de apps de PromptQuorum](/es/directory). Refleja el sitio tal como se leyó el 26 de octubre de 2026.',
    metaDescription:
      'Reseña de Localhosted: directorio web gratis con más de 1.800 herramientas de IA locales y autoalojadas. Fichas, listados de pago, anuncios y privacidad.',
    twitterDescription:
      'Reseña de Localhosted: un directorio web gratuito de herramientas de IA locales y autoalojadas. Qué ofrece, cómo se redactan las fichas, qué es de pago y qué no confirman las fuentes.',
    audience:
      'Personas que buscan herramientas de IA locales o autoalojadas y quieren saber qué ofrece el directorio Localhosted, cómo se elaboran sus fichas, qué es de pago y qué conviene volver a comprobar.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Localhosted',
    targetKeywords: [
      'reseña localhosted',
      'directorio de herramientas de ia local',
      'directorio de ia autoalojada',
      'alternativas locales a chatgpt',
      'directorio de apps de llm locales',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted es un directorio web gratuito de herramientas de IA locales y autoalojadas; según su página de inicio del 26 de octubre de 2026, lista más de 1.800 herramientas en más de 100 categorías, con colecciones, alternativas locales a apps en la nube y más de 1.400 vídeos.** No se instala nada y ningún modelo se ejecuta por ti: navegas y luego sigues el enlace de cada herramienta. Su propia página «About» dice que las fichas se redactan con ayuda de IA y no significan que la herramienta se haya probado, y que existen posicionamientos de pago.',
    quickAnswerTop: {
      es: {
        question: '¿Es Localhosted una app que ejecuta IA en tu ordenador?',
        answer:
          'No. Localhosted es un sitio web que lista herramientas que puedes ejecutar en tu propio equipo; no ejecuta modelos, no ofrece descarga y no tiene número de versión. Cada ficha enlaza al sitio o al repositorio de la propia herramienta.',
        bullets: [
          'Gratis para navegar en [localhosted.com](https://localhosted.com/); la cuenta es opcional y una página «Add tool» admite propuestas.',
          'Navega por herramienta, alternativa, categoría, plataforma o etiqueta, o busca con ⌘K.',
          'Las fichas muestran plataformas, licencia, etiquetas y una fecha de «última actualización», y algunas indican si funcionan sin conexión.',
          'Las secciones de tendencias y de nuevas versiones usan datos de estrellas y de versiones de GitHub.',
          'Existen posicionamientos de pago (anuncios y fichas Premium), así que las posiciones destacadas no son una clasificación de calidad.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Localhosted?', anchor: 'what-is-localhosted' },
      { label: 'Dónde encontrarlo', anchor: 'get-it' },
      { label: 'Precios y posicionamientos de pago', anchor: 'pricing' },
      { label: 'Cómo usarlo', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de red', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'Localhosted es un directorio web gratuito y de código cerrado que cataloga herramientas de IA locales y autoalojadas, con fichas redactadas con ayuda de IA y posicionamientos de pago.',
          },
          {
            type: 'plain-terms',
            text: 'Abres el sitio web, navegas o buscas en una gran lista de herramientas que puedes ejecutar en tu propio equipo y entras en cada una; desde Localhosted no se instala nada.',
          },
        ],
        items: [
          'Tamaño: la página de inicio muestra más de 1.800 herramientas, más de 100 categorías, 14 colecciones y más de 1.400 vídeos.',
          'Operador: la página «About» no nombra a nadie; el portfolio del diseñador en logotyper.com incluye Localhosted como proyecto, y un espacio patrocinado llama a «Eugene» el diseñador y desarrollador que está detrás.',
          'Fichas: las descripciones proceden de sitios de proyectos y de README, con ayuda de IA; una ficha no significa que la herramienta se haya instalado ni medido.',
          'Dinero: los anuncios cuestan de 5 a 25 $ al día por espacio, y las fichas Premium obtienen una revisión más rápida y una etiqueta de patrocinio.',
          'Mantenimiento: la política de privacidad se actualizó el 30 de septiembre de 2026; no hay número de versión ni repositorio público, así que no puede calcularse una advertencia de proyecto abandonado.',
          'Relación con nosotros: PromptQuorum tiene su propio [directorio de apps](/es/directory); esta reseña es independiente y no se contactó con Localhosted.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en las páginas de localhosted.com y en el portfolio del diseñador, leídas el 26 de octubre de 2026. PromptQuorum no ha probado el sitio más allá de leerlo, no contactó con su operador y no puede comprobar cómo se elaboran las fichas. PromptQuorum publica un directorio propio, así que toma esto como una comparación hecha por una parte interesada.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: '¿Qué es Localhosted?',
        content: [
          '**Localhosted es un sitio web de catálogo, no un software: describe herramientas que se ejecutan en tu propio ordenador o servidor y enlaza a ellas.** Su lema es «There\'s no place like 127.0.0.1», y la página de inicio lo presenta como «Local and self-hosted AI, in one directory».',
          'La página «About» dice que selecciona software compatible con el uso local o el autoalojamiento, incluidas apps, bibliotecas, herramientas creativas, modelos y los programas que los ejecutan. No nombra a las personas que están detrás. El portfolio del diseñador en [logotyper.com](https://logotyper.com/) incluye Localhosted entre sus proyectos, con identidad de marca, UI y UX, desarrollo del directorio, integración con GitHub, automatización con IA y monetización como trabajo realizado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde encontrarlo',
        content: [
          '**Localhosted se abre en el navegador; no hay descarga, ficha en una tienda de apps ni repositorio de código fuente.** La cuenta es opcional y hace falta para enviar propuestas.',
        ],
        columns: ['Plataforma', 'Dónde encontrarlo'],
        rows: [
          { 'Plataforma': 'Cualquier navegador', 'Dónde encontrarlo': '[localhosted.com](https://localhosted.com/)' },
          { 'Plataforma': 'Sitio web', 'Dónde encontrarlo': '[localhosted.com](https://localhosted.com/)' },
          { 'Plataforma': 'Política de privacidad', 'Dónde encontrarlo': '[localhosted.com/privacy](https://localhosted.com/privacy) (última actualización: 30 de septiembre de 2026)' },
          { 'Plataforma': 'About', 'Dónde encontrarlo': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'Plataforma': 'Publicidad', 'Dónde encontrarlo': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'A un sitio web no se le aplica ninguna versión. Se ofrecen un boletín, un feed RSS y el inicio de sesión con Google o GitHub; ninguno es necesario para navegar.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios y posicionamientos de pago',
        content: [
          '**Navegar por Localhosted no cuesta nada; el sitio gana dinero con publicidad y con fichas de pago.** La página /advertise vende un solo espacio por anunciante a la vez, reservado con al menos dos días de antelación y hasta 90 días, con una etiqueta «Ad» visible. Los precios son por día a 26 de octubre de 2026.',
        ],
        columns: ['Espacio', 'Dónde aparece', 'Precio por día'],
        rows: [
          { 'Espacio': 'Banner en todo el sitio', 'Dónde aparece': 'Parte superior de todas las páginas', 'Precio por día': '25 $' },
          { 'Espacio': 'Directorio de herramientas', 'Dónde aparece': 'Tarjeta en la cuadrícula junto a las herramientas comparadas', 'Precio por día': '15 $' },
          { 'Espacio': 'Páginas de herramienta', 'Dónde aparece': 'Tarjeta junto a los detalles de una herramienta', 'Precio por día': '10 $' },
          { 'Espacio': 'Guías y vídeos', 'Dónde aparece': 'Tarjeta junto a artículos y vídeos paso a paso', 'Precio por día': '5 $' },
        ],
        note: 'Por separado, la página «About» dice que las fichas Premium obtienen una revisión más rápida y un posicionamiento destacado con una etiqueta de patrocinio, y que un posicionamiento de pago «no establece que hayamos probado la herramienta ni valorado su rendimiento». No se describe cómo se ordenan las fichas Premium.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo usarlo',
        content: [
          '**Estos pasos siguen la navegación que ofrece la página de inicio; PromptQuorum no ha hecho una sesión de búsqueda completa.**',
        ],
        numberedItems: [
          {
            title: 'Empieza por una colección o una categoría',
            whyItMatters: 'Colecciones como «ChatGPT & Claude alternatives» o «AI for a modest PC» reducen más de 1.800 herramientas a una lista corta.',
          },
          {
            title: 'Filtra por plataforma y licencia',
            whyItMatters: 'Cada ficha muestra plataformas como macOS, Windows, Linux, Docker o Web y una licencia, así que puedes descartar las herramientas que no encajan con tu equipo.',
          },
          {
            title: 'Comprueba la fecha de «última actualización» y los datos de GitHub',
            whyItMatters: 'Las fichas llevan una fecha de última actualización, y las secciones de tendencias muestran datos de estrellas y de versiones, lo que ayuda a detectar proyectos abandonados.',
          },
          {
            title: 'Abre el sitio de la propia herramienta antes de instalar',
            whyItMatters: 'Las descripciones son resúmenes redactados a partir de páginas de proyectos, así que el sitio del proyecto y su licencia siguen siendo la referencia.',
          },
          {
            title: 'Busca la etiqueta Ad o de patrocinio',
            whyItMatters: 'Los anuncios y las fichas Premium llevan etiquetas, así que puedes distinguir los espacios de pago de las entradas orgánicas.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la página de inicio, de la página «About» o de las otras páginas citadas en las fuentes.**',
        ],
        items: [
          '**Catálogo amplio.** La página de inicio muestra más de 1.800 herramientas, más de 100 categorías, 10 plataformas, 58 etiquetas y 65 alternativas, que son sustitutos locales de apps en la nube.',
          '**Páginas de herramienta.** Descripción, plataformas, licencia, etiquetas, categorías y una fecha de última actualización; algunas fichas indican si la herramienta funciona sin conexión o necesita la nube.',
          '**Orden y búsqueda.** Más recientes, más estrellas o actualizadas hace poco, una búsqueda global con ⌘K y navegación por herramienta, alternativa, categoría, plataforma o etiqueta.',
          '**Actividad en GitHub.** Secciones de tendencias y de novedades con el número de estrellas de la última semana y las versiones recientes.',
          '**Colecciones y vídeos.** 14 colecciones seleccionadas y más de 1.400 vídeos, que según la página «About» se resumen a partir de la transcripción y los metadatos del creador; el creador del vídeo es dueño de las demostraciones y las opiniones.',
          '**Propuestas.** Una página «Add tool»; en las páginas leídas no se describe el proceso de revisión.',
          '**Extras.** Un blog con guías prácticas, un boletín y un feed RSS.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de red',
        content: [
          '**Localhosted es un sitio web, así que visitarlo envía peticiones a sus servidores y a sus proveedores de analítica y publicidad; la política de privacidad, actualizada por última vez el 30 de septiembre de 2026, los enumera.** Google Analytics mide las visitas a las páginas públicas con cookies propias, con las señales publicitarias y la personalización de anuncios desactivadas y sin parámetros de consulta. Un contador independiente de visitas por herramienta y por día no usa cookies, identificadores ni direcciones IP, y Plausible, cuando está activado, no usa cookies de analítica por defecto.',
          'Las cuentas pueden contener correo electrónico, nombre, imagen de perfil e identificadores de inicio de sesión de Google o GitHub. Resend gestiona el correo del boletín. El proveedor de publicidad Revinel recibe datos técnicos como la dirección IP y la página implicada, los enlaces de afiliado pueden llevar identificadores de referencia, y la base de datos Neon configurada está en Estados Unidos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas afirmaciones proceden del texto de la política; PromptQuorum no ha auditado el tráfico de red del sitio. Las herramientas listadas en Localhosted tienen sus propias prácticas de privacidad, de las que el directorio no responde.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Lectores que buscan un sustituto local de una app de IA en la nube.** La lista de alternativas y las colecciones parten de esa pregunta.',
          '**Autoalojadores que quieren un sitio más para descubrir herramientas.** Los filtros de plataforma, licencia y fecha de actualización ayudan.',
          '**Desarrolladores que siguen proyectos nuevos.** Las secciones de tendencias y de novedades usan datos de GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Exactitud de las fichas.** El sitio dice que las descripciones se redactan con ayuda de IA y que una ficha no significa que la herramienta se haya instalado ni medido; PromptQuorum no comprobó fichas concretas.',
          '**Cómo se eligen las fichas.** Los criterios de selección y la revisión de las propuestas solo se describen en términos generales.',
          '**Quién lo gestiona.** La página «About» no nombra a nadie; el operador se deduce del portfolio del diseñador y de un espacio patrocinado.',
          '**Orden.** No está documentado cómo interactúan las fichas Premium y «most stars» con la ordenación.',
          '**Código fuente, licencia y versión.** No se indica ninguno y no se encontró ningún repositorio público.',
          '**Independencia.** El sitio vende publicidad y fichas Premium, y no hace ninguna declaración explícita de independencia.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta para usar Localhosted?',
            a: 'No para navegar; se ofrece una cuenta para iniciar sesión con Google o GitHub y para la página de propuestas «Add tool».',
          },
          {
            q: '¿Localhosted prueba las herramientas que lista?',
            a: 'Según su página «About», no: una ficha describe funciones documentadas y no significa que la herramienta se haya instalado ni medido, y un posicionamiento de pago tampoco significa que se haya probado.',
          },
          {
            q: '¿En qué se diferencia del directorio de apps de PromptQuorum?',
            a: 'Localhosted lista muchas más entradas y añade vídeos y alternativas; el directorio de PromptQuorum lista menos apps y añade a muchas de ellas reseñas editoriales, campos de hardware y de ubicación del procesamiento (local o nube) y advertencias de última actualización. PromptQuorum es una parte interesada, así que compara ambos.',
          },
          {
            q: '¿Puede una herramienta pagar por aparecer?',
            a: 'Sí. La página «About» dice que las fichas Premium obtienen una revisión más rápida y un posicionamiento destacado, con una etiqueta de patrocinio; los anuncios se venden aparte.',
          },
          {
            q: '¿Localhosted ejecuta modelos de IA por mí?',
            a: 'No. Es un catálogo; para ejecutar un modelo en local, instalas tú mismo una de las herramientas listadas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Localhosted es un catálogo grande y gratuito para encontrar herramientas de IA locales y autoalojadas, con colecciones, alternativas a apps en la nube, datos de actividad de GitHub y vídeos. En contra: las fichas son resúmenes asistidos por IA y no resultados de pruebas, existen fichas de pago y anuncios, el operador no se nombra en su propia página «About» y las páginas leídas describen cómo se eligen las fichas solo en términos generales. Encaja con quienes quieren una lista amplia de partida y luego verifican cada herramienta en su propio sitio; quien busque reseñas editoriales puede empezar por el [directorio de apps](/es/directory) de PromptQuorum.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de inicio de Localhosted](https://localhosted.com/) — cifras, funciones, navegación y etiquetas de anuncio, leída el 26 de octubre de 2026.',
          '[Localhosted About](https://localhosted.com/about) — selección, descripciones asistidas por IA, resúmenes de vídeo y fichas Premium, leída el 26 de octubre de 2026.',
          '[Política de privacidad de Localhosted](https://localhosted.com/privacy) — analítica, cookies, cuentas, proveedores y ubicación de los datos, última actualización el 30 de septiembre de 2026.',
          '[Página de publicidad de Localhosted](https://localhosted.com/advertise) — espacios, precios y reglas de reserva, leída el 26 de octubre de 2026.',
          '[Portfolio de Logotyper](https://logotyper.com/) — incluye Localhosted como proyecto y su alcance, leído el 26 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Directorio de apps de IA local](/es/directory) — el directorio de PromptQuorum de apps de IA local con reseñas y filtros.',
          '[Entrenar y operar LLM locales: comparativa](/es/power-local-llm/local-llm-train-operate-compared) — la comparativa de categoría más cercana a los repositorios de modelos.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-fr.webp',
    title: 'Test de Localhosted : annuaire web d\'outils d\'IA locaux et auto-hébergés',
    seoTitle: 'Test de Localhosted : annuaire web d\'outils d\'IA locaux',
    intro:
      'Localhosted est un site gratuit qui recense des logiciels d\'IA locaux et auto-hébergés : applications, serveurs de modèles, assistants de code et outils créatifs, avec des collections, des alternatives et des guides vidéo. Ce n\'est pas une application à installer et il n\'exécute aucun modèle pour vous ; ce test l\'examine donc comme un annuaire, à côté de l\'[annuaire d\'applications PromptQuorum](/fr/directory). Il reflète le site tel que lu le 26 octobre 2026.',
    metaDescription:
      'Test de Localhosted : annuaire web gratuit de plus de 1 800 outils d\'IA locaux et auto-hébergés. Contenu, fiches, offres payantes, pubs, vie privée.',
    twitterDescription:
      'Test de Localhosted : un annuaire web gratuit d\'outils d\'IA locaux et auto-hébergés. Ce qu\'il propose, comment les fiches sont rédigées, ce qui est payant et ce que les sources ne confirment pas.',
    audience:
      'Les personnes qui cherchent des outils d\'IA locaux ou auto-hébergés et veulent savoir ce que propose l\'annuaire Localhosted, comment ses fiches sont produites, ce qui est payant et ce qu\'il faut revérifier.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Localhosted',
    targetKeywords: [
      'test localhosted',
      'annuaire outils ia locaux',
      'annuaire ia auto-hébergée',
      'alternatives locales à chatgpt',
      'annuaire applis llm locales',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted est un annuaire web gratuit d\'outils d\'IA locaux et auto-hébergés ; d\'après sa page d\'accueil du 26 octobre 2026, il recense plus de 1 800 outils dans plus de 100 catégories, avec des collections, des alternatives locales aux applis cloud et plus de 1 400 vidéos.** Rien ne s\'installe et aucun modèle ne s\'exécute pour vous : vous parcourez, puis suivez le lien vers chaque outil. Sa propre page À propos dit que les fiches sont rédigées avec l\'aide de l\'IA, qu\'elles ne signifient pas qu\'un outil a été testé, et qu\'il existe des placements payants.',
    quickAnswerTop: {
      fr: {
        question: 'Localhosted est-il une appli qui exécute de l\'IA sur votre ordinateur ?',
        answer:
          'Non. Localhosted est un site qui répertorie des outils que vous pouvez exécuter sur votre propre matériel ; il n\'exécute aucun modèle, ne propose aucun téléchargement et n\'a pas de numéro de version. Chaque fiche renvoie vers le site ou le dépôt de l\'outil lui-même.',
        bullets: [
          'Consultation gratuite sur [localhosted.com](https://localhosted.com/) ; un compte est facultatif et une page « Add tool » accepte les propositions.',
          'Navigation par outil, alternative, catégorie, plateforme ou tag, ou recherche avec ⌘K.',
          'Les fiches indiquent plateformes, licence, tags et une date de « dernière mise à jour », et certaines mentionnent l\'usage hors ligne.',
          'Les sections tendances et nouvelles versions s\'appuient sur les données d\'étoiles et de versions de GitHub.',
          'Des placements payants existent (publicités et fiches Premium) : une position mise en avant n\'est donc pas un classement de qualité.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Localhosted ?', anchor: 'what-is-localhosted' },
      { label: 'Y accéder', anchor: 'get-it' },
      { label: 'Tarifs et placements payants', anchor: 'pricing' },
      { label: 'Comment l\'utiliser', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Vie privée et usage du réseau', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-il', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Localhosted est un annuaire web gratuit et fermé qui recense des outils d\'IA locaux et auto-hébergés, avec des fiches rédigées avec l\'aide de l\'IA et des placements payants.',
          },
          {
            type: 'plain-terms',
            text: 'Vous ouvrez le site, parcourez ou recherchez dans une longue liste d\'outils que vous pouvez exécuter sur votre propre machine, puis cliquez vers chacun d\'eux ; rien ne s\'installe depuis Localhosted lui-même.',
          },
        ],
        items: [
          'Ampleur : la page d\'accueil affiche plus de 1 800 outils, plus de 100 catégories, 14 collections et plus de 1 400 vidéos.',
          'Exploitant : la page À propos ne nomme personne ; le portfolio du designer sur logotyper.com présente Localhosted comme un projet, et un emplacement sponsorisé désigne « Eugene » comme le designer et développeur à l\'origine du site.',
          'Fiches : les descriptions viennent des sites de projets et des README, avec l\'aide de l\'IA ; une fiche ne signifie pas que l\'outil a été installé ou mesuré.',
          'Argent : les publicités coûtent de 5 $ à 25 $ par jour et par emplacement, et les fiches Premium sont examinées plus vite et portent la mention sponsorisé.',
          'Maintenance : la politique de confidentialité a été mise à jour le 30 septembre 2026 ; il n\'y a ni numéro de version ni dépôt public, donc aucun avertissement de projet abandonné ne peut être calculé.',
          'Lien avec nous : PromptQuorum tient son propre [annuaire d\'applications](/fr/directory) ; ce test est indépendant et Localhosted n\'a pas été contacté.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur les pages de localhosted.com et sur le portfolio du designer, lues le 26 octobre 2026. PromptQuorum n\'a pas testé le site au-delà de sa lecture, n\'a pas contacté son exploitant et ne peut pas vérifier comment les fiches sont produites. PromptQuorum publie son propre annuaire : considérez donc ceci comme une comparaison faite par une partie intéressée.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'Qu\'est-ce que Localhosted ?',
        content: [
          '**Localhosted est un site de catalogue, pas un logiciel : il décrit des outils qui s\'exécutent sur votre propre ordinateur ou serveur et renvoie vers eux.** Son slogan est « There\'s no place like 127.0.0.1 », et la page d\'accueil le présente comme « Local and self-hosted AI, in one directory ».',
          'La page À propos dit qu\'il sélectionne les logiciels compatibles avec un usage local ou l\'auto-hébergement, y compris applications, bibliothèques, outils créatifs, modèles et programmes qui les exécutent. Elle ne nomme pas les personnes derrière le site. Le portfolio du designer, [logotyper.com](https://logotyper.com/), présente Localhosted parmi ses projets, avec l\'identité de marque, l\'UI et l\'UX, le développement de l\'annuaire, l\'intégration GitHub, l\'automatisation par IA et la monétisation comme travaux réalisés.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Y accéder',
        content: [
          '**Localhosted s\'ouvre dans un navigateur ; il n\'y a ni téléchargement, ni fiche de boutique d\'applications, ni dépôt de code source.** Un compte est facultatif et nécessaire pour proposer un outil.',
        ],
        columns: ['Plateforme', 'Où y accéder'],
        rows: [
          { 'Plateforme': 'Tout navigateur', 'Où y accéder': '[localhosted.com](https://localhosted.com/)' },
          { 'Plateforme': 'Site web', 'Où y accéder': '[localhosted.com](https://localhosted.com/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Où y accéder': '[localhosted.com/privacy](https://localhosted.com/privacy) (dernière mise à jour le 30 septembre 2026)' },
          { 'Plateforme': 'À propos', 'Où y accéder': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'Plateforme': 'Publicité', 'Où y accéder': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'Aucune version ne s\'applique à un site web. Une newsletter, un flux RSS et la connexion avec Google ou GitHub sont proposés ; aucun n\'est requis pour consulter.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs et placements payants',
        content: [
          '**La consultation de Localhosted est gratuite ; le site gagne de l\'argent grâce à la publicité et aux fiches payantes.** La page /advertise vend un seul annonceur par emplacement à la fois, réservé au moins deux jours à l\'avance et pour 90 jours au plus, avec une mention « Ad » visible. Les prix sont par jour, au 26 octobre 2026.',
        ],
        columns: ['Emplacement', 'Où il apparaît', 'Prix par jour'],
        rows: [
          { 'Emplacement': 'Bandeau sur tout le site', 'Où il apparaît': 'En haut de chaque page', 'Prix par jour': '25 $' },
          { 'Emplacement': 'Annuaire d\'outils', 'Où il apparaît': 'Carte dans la grille, à côté des outils comparés', 'Prix par jour': '15 $' },
          { 'Emplacement': 'Pages d\'outils', 'Où il apparaît': 'Carte à côté des détails d\'un outil', 'Prix par jour': '10 $' },
          { 'Emplacement': 'Guides et vidéos', 'Où il apparaît': 'Carte à côté des articles et des vidéos pas à pas', 'Prix par jour': '5 $' },
        ],
        note: 'Par ailleurs, la page À propos dit que les fiches Premium sont examinées plus vite et mises en avant avec la mention sponsorisé, et qu\'un placement payant « n\'établit pas que nous avons testé l\'outil ni évalué ses performances ». La manière dont les fiches Premium sont classées n\'est pas décrite.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment l\'utiliser',
        content: [
          '**Ces étapes suivent la navigation proposée par la page d\'accueil ; PromptQuorum n\'a pas mené de session de recherche complète.**',
        ],
        numberedItems: [
          {
            title: 'Partir d\'une collection ou d\'une catégorie',
            whyItMatters: 'Des collections comme « ChatGPT & Claude alternatives » ou « AI for a modest PC » ramènent plus de 1 800 outils à une courte liste.',
          },
          {
            title: 'Filtrer par plateforme et par licence',
            whyItMatters: 'Chaque fiche indique des plateformes telles que macOS, Windows, Linux, Docker ou Web et une licence, ce qui permet d\'écarter les outils qui ne conviennent pas à votre machine.',
          },
          {
            title: 'Vérifier la date de « dernière mise à jour » et les données GitHub',
            whyItMatters: 'Les fiches portent une date de dernière mise à jour, et les sections tendances affichent des données d\'étoiles et de versions, ce qui aide à repérer les projets abandonnés.',
          },
          {
            title: 'Ouvrir le site de l\'outil avant de l\'installer',
            whyItMatters: 'Les descriptions sont des résumés rédigés à partir des pages des projets : le site du projet et sa licence restent la référence.',
          },
          {
            title: 'Chercher la mention Ad ou sponsorisé',
            whyItMatters: 'Les publicités et les fiches Premium portent des mentions, ce qui permet de distinguer les emplacements payants des fiches organiques.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous vient de la page d\'accueil, de la page À propos ou des autres pages citées dans les sources.**',
        ],
        items: [
          '**Grand catalogue.** La page d\'accueil affiche plus de 1 800 outils, plus de 100 catégories, 10 plateformes, 58 tags et 65 alternatives, c\'est-à-dire des équivalents locaux d\'applis cloud.',
          '**Pages d\'outils.** Description, plateformes, licence, tags, catégories et date de dernière mise à jour ; certaines fiches précisent si l\'outil fonctionne hors ligne ou exige le cloud.',
          '**Tri et recherche.** Les plus récents, les plus d\'étoiles ou récemment mis à jour, une recherche globale sur ⌘K, et la navigation par outil, alternative, catégorie, plateforme ou tag.',
          '**Activité GitHub.** Des sections tendances et nouvelles sorties avec le nombre d\'étoiles sur la dernière semaine et les versions récentes.',
          '**Collections et vidéos.** 14 collections sélectionnées et plus de 1 400 vidéos, que la page À propos dit résumées à partir de la transcription et des métadonnées du créateur ; le créateur de la vidéo reste propriétaire des démonstrations et des opinions.',
          '**Propositions d\'outils.** Une page « Add tool » ; le processus d\'examen n\'est pas décrit dans les pages lues.',
          '**Extras.** Un blog avec des tutoriels, une newsletter et un flux RSS.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Vie privée et usage du réseau',
        content: [
          '**Localhosted étant un site web, le visiter envoie des requêtes à ses serveurs ainsi qu\'à ses prestataires d\'analyse et de publicité ; la politique de confidentialité, mise à jour le 30 septembre 2026, les énumère.** Google Analytics mesure les visites des pages publiques avec des cookies internes, les signaux publicitaires et la personnalisation des annonces étant désactivés et les paramètres d\'URL supprimés. Un compteur de visites distinct, par outil et par jour, n\'utilise ni cookie, ni identifiant, ni adresse IP, et Plausible, lorsqu\'il est activé, n\'utilise par défaut aucun cookie d\'analyse.',
          'Les comptes peuvent contenir l\'e-mail, le nom, l\'image de profil et les identifiants de connexion de Google ou GitHub. Resend gère les e-mails de la newsletter. Le prestataire publicitaire Revinel reçoit des données techniques telles que l\'adresse IP et la page concernée, les liens d\'affiliation peuvent porter des identifiants de parrainage, et la base de données Neon configurée se trouve aux États-Unis.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ces affirmations viennent du texte de la politique ; PromptQuorum n\'a pas audité le trafic réseau du site. Les outils listés sur Localhosted ont leurs propres pratiques de confidentialité, dont l\'annuaire ne se porte pas garant.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-il',
        items: [
          '**Ceux qui cherchent un équivalent local d\'une appli d\'IA cloud.** La liste d\'alternatives et les collections partent de cette question.',
          '**Les adeptes de l\'auto-hébergement qui veulent un endroit de plus pour découvrir des outils.** Les filtres de plateforme, de licence et de date de mise à jour aident.',
          '**Les développeurs qui suivent les nouveaux projets.** Les sections tendances et nouvelles versions s\'appuient sur les données GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Exactitude des fiches.** Le site dit que les descriptions sont rédigées avec l\'aide de l\'IA et qu\'une fiche ne signifie pas que l\'outil a été installé ou mesuré ; PromptQuorum n\'a pas vérifié les fiches une à une.',
          '**Choix des fiches.** Les critères de sélection et l\'examen des propositions ne sont décrits qu\'en termes généraux.',
          '**Qui l\'exploite.** La page À propos ne nomme personne ; l\'exploitant est déduit du portfolio du designer et d\'un emplacement sponsorisé.',
          '**Classement.** La façon dont les fiches Premium et le tri « most stars » interagissent avec l\'ordre d\'affichage n\'est pas documentée.',
          '**Code source, licence et version.** Aucun n\'est indiqué, et aucun dépôt public n\'a été trouvé.',
          '**Indépendance.** Le site vend de la publicité et des fiches Premium, et ne fait aucune déclaration explicite d\'indépendance.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il un compte pour utiliser Localhosted ?',
            a: 'Non pour consulter ; un compte est proposé pour se connecter avec Google ou GitHub et pour la page de proposition « Add tool ».',
          },
          {
            q: 'Les outils listés sont-ils testés par Localhosted ?',
            a: 'Selon sa page À propos, non : une fiche décrit des fonctions documentées et ne signifie pas que l\'outil a été installé ou mesuré, et un placement payant ne signifie pas non plus qu\'il a été testé.',
          },
          {
            q: 'En quoi diffère-t-il de l\'annuaire d\'applications PromptQuorum ?',
            a: 'Localhosted recense bien plus d\'entrées et ajoute des vidéos et des alternatives ; l\'annuaire PromptQuorum recense moins d\'applis et joint à beaucoup d\'entre elles des tests éditoriaux, des champs matériel et lieu de traitement (local ou cloud) et des avertissements de dernière mise à jour. PromptQuorum est une partie intéressée : comparez donc les deux.',
          },
          {
            q: 'Un outil peut-il payer pour être listé ?',
            a: 'Oui. La page À propos dit que les fiches Premium sont examinées plus vite et mises en avant, avec la mention sponsorisé ; les publicités se vendent séparément.',
          },
          {
            q: 'Localhosted exécute-t-il des modèles d\'IA pour moi ?',
            a: 'Non. C\'est un catalogue ; pour exécuter un modèle en local, vous installez vous-même l\'un des outils listés.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Localhosted est un grand catalogue gratuit pour trouver des outils d\'IA locaux et auto-hébergés, avec des collections, des alternatives aux applis cloud, des données d\'activité GitHub et des vidéos. En face : les fiches sont des résumés rédigés avec l\'aide de l\'IA plutôt que des résultats de tests, il existe des fiches payantes et des publicités, l\'exploitant n\'est pas nommé sur sa propre page À propos et les pages lues décrivent la sélection des fiches seulement en termes généraux. Il convient à ceux qui veulent une large liste de départ puis vérifient chaque outil sur son propre site ; ceux qui veulent des tests éditoriaux peuvent commencer par l\'[annuaire d\'applications](/fr/directory) de PromptQuorum.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page d\'accueil de Localhosted](https://localhosted.com/) — chiffres, fonctions, navigation et mentions Ad, lues le 26 octobre 2026.',
          '[À propos de Localhosted](https://localhosted.com/about) — sélection, descriptions assistées par IA, résumés de vidéos et fiches Premium, lus le 26 octobre 2026.',
          '[Politique de confidentialité de Localhosted](https://localhosted.com/privacy) — analyses, cookies, comptes, prestataires et lieu des données, dernière mise à jour le 30 septembre 2026.',
          '[Page publicité de Localhosted](https://localhosted.com/advertise) — emplacements, prix et règles de réservation, lus le 26 octobre 2026.',
          '[Portfolio de Logotyper](https://logotyper.com/) — présente Localhosted comme un projet et décrit son périmètre, lu le 26 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Annuaire d\'applications d\'IA locale](/fr/directory) — l\'annuaire PromptQuorum des applis d\'IA locale avec tests et filtres.',
          '[LLM locaux : entraîner et exploiter, comparatif](/fr/power-local-llm/local-llm-train-operate-compared) — le comparatif de catégorie le plus proche des hubs de modèles.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-ja.webp',
    title: 'Localhostedレビュー：ローカル／セルフホスト型AIツールのWebディレクトリ',
    seoTitle: 'Localhostedレビュー：ローカルAIツールのディレクトリ',
    intro:
      'Localhostedは、ローカル／セルフホスト型のAIソフトウェア（アプリ、モデルサーバー、コーディングアシスタント、クリエイティブツール）をコレクション、代替ツール、動画ガイドとともに掲載する無料のWebサイトです。インストールするアプリではなく、モデルを動かしてくれるわけでもないため、本レビューでは[PromptQuorumのアプリディレクトリ](/ja/directory)と並ぶディレクトリとして取り上げます。内容は2026年10月26日に確認したサイトに基づいています。',
    metaDescription:
      'Localhostedレビュー：1,800件以上のローカル／セルフホスト型AIツールを掲載する無料Webディレクトリ。掲載内容、記述の作り方、有料掲載、広告、プライバシーを整理します。',
    twitterDescription:
      'Localhostedレビュー：ローカル／セルフホスト型AIツールの無料Webディレクトリ。提供内容、掲載文の作り方、有料の部分、情報源が確認できていない点。',
    audience:
      'ローカルやセルフホスト型のAIツールを探していて、Localhostedディレクトリの提供内容、掲載文の作られ方、有料の部分、確認しておくべき点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Localhosted レビュー',
    targetKeywords: [
      'localhosted レビュー',
      'ローカル ai ツール ディレクトリ',
      'セルフホスト ai ディレクトリ',
      'chatgpt ローカル 代替',
      'ローカル llm アプリ 一覧',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhostedは、ローカル／セルフホスト型AIツールの無料Webディレクトリで、2026年10月26日時点のトップページによると、100以上のカテゴリに1,800件以上のツールを掲載し、コレクション、クラウドアプリのローカル代替、1,400本以上の動画を備えています。** インストールするものはなく、モデルが動くこともありません。閲覧して、各ツールのリンク先へ進みます。公式のAboutページは、掲載文はAIの支援で下書きされ、ツールがテストされたことを意味しないこと、有料の掲載枠があることを述べています。',
    quickAnswerTop: {
      ja: {
        question: 'Localhostedは、AIを自分のコンピューターで動かすアプリですか？',
        answer:
          'いいえ。Localhostedは、自分のハードウェアで動かせるツールを一覧にするWebサイトで、モデルは実行せず、ダウンロードもなく、バージョン番号もありません。各掲載は、そのツール自身のサイトやリポジトリへリンクします。',
        bullets: [
          '[localhosted.com](https://localhosted.com/)で無料で閲覧できます。アカウントは任意で、「Add tool」ページから投稿を受け付けています。',
          'ツール、代替、カテゴリ、プラットフォーム、タグで探せるほか、⌘Kで検索できます。',
          '掲載ページにはプラットフォーム、ライセンス、タグ、「最終更新」日が表示され、オフライン利用に触れているものもあります。',
          'トレンドと新リリースの欄は、GitHubのスター数とリリースのデータを使っています。',
          '販売される掲載枠（広告とPremium掲載）があるため、目立つ位置は品質のランキングではありません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Localhostedとは', anchor: 'what-is-localhosted' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金と有料掲載', anchor: 'pricing' },
      { label: '使い方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'Localhostedは、ローカル／セルフホスト型AIツールを掲載する無料のクローズドなWebディレクトリで、掲載文はAIの支援で作られ、有料の掲載枠があります。',
          },
          {
            type: 'plain-terms',
            text: 'Webサイトを開き、自分のマシンで動かせるツールの大きな一覧を閲覧・検索して、各ツールへ進みます。Localhosted自体から何かをインストールすることはありません。',
          },
        ],
        items: [
          '規模：トップページには、1,800件以上のツール、100以上のカテゴリ、14のコレクション、1,400本以上の動画が表示されています。',
          '運営者：Aboutページは誰も名指ししていません。デザイナーのポートフォリオlogotyper.comはLocalhostedをプロジェクトとして挙げ、スポンサー枠は「Eugene」をその背後のデザイナー兼開発者と呼んでいます。',
          '掲載文：説明はプロジェクトのサイトやREADMEをもとにAIの支援で作られ、掲載はツールがインストールやベンチマークされたことを意味しません。',
          'お金：広告は1枠あたり1日$5〜$25で、Premium掲載は審査が早まり、スポンサー表示が付きます。',
          '保守状況：プライバシーポリシーは2026年9月30日に更新されました。バージョン番号も公開リポジトリもないため、放置プロジェクトの警告は算出できません。',
          '当サイトとの関係：PromptQuorumは独自の[アプリディレクトリ](/ja/directory)を運営しています。本レビューは独立したもので、Localhostedには連絡していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したlocalhosted.comのページとデザイナーのポートフォリオに基づいています。PromptQuorumは読んだ以上のテストはしておらず、運営者にも連絡しておらず、掲載文がどのように作られるかを確認できません。PromptQuorumも独自のディレクトリを公開しているため、利害関係者による比較としてお読みください。',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'Localhostedとは',
        content: [
          '**Localhostedはソフトウェアではなくカタログサイトで、自分のコンピューターやサーバーで動かせるツールを紹介し、リンクします。** キャッチコピーは「There\'s no place like 127.0.0.1」で、トップページは「Local and self-hosted AI, in one directory」と位置づけています。',
          'Aboutページによれば、ローカル利用やセルフホストに対応するソフトウェア（アプリ、ライブラリ、クリエイティブツール、モデル、それらを動かすプログラム）を選んでいます。背後にいる人物は名指ししていません。デザイナーのポートフォリオ[logotyper.com](https://logotyper.com/)は、Localhostedをプロジェクトの一つとして挙げ、ブランドアイデンティティ、UI／UX、ディレクトリ開発、GitHub連携、AI自動化、収益化を手がけた内容としています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Localhostedはブラウザで開きます。ダウンロード、アプリストアの掲載、ソースリポジトリはありません。** アカウントは任意で、投稿には必要です。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': '任意のブラウザ', '入手先': '[localhosted.com](https://localhosted.com/)' },
          { 'プラットフォーム': '公式サイト', '入手先': '[localhosted.com](https://localhosted.com/)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[localhosted.com/privacy](https://localhosted.com/privacy)（2026年9月30日最終更新）' },
          { 'プラットフォーム': 'About', '入手先': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'プラットフォーム': '広告', '入手先': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'Webサイトにバージョンは当てはまりません。ニュースレター、RSSフィード、GoogleまたはGitHubでのサインインが用意されていますが、閲覧にはいずれも不要です。',
      },
      pricing: {
        id: 'pricing',
        title: '料金と有料掲載',
        content: [
          '**Localhostedの閲覧は無料で、サイトは広告と有料掲載で収益を得ています。** /advertiseページでは、1つの枠を一度に1社の広告主に販売し、2日以上前に予約し、最長90日まで、目に見える「Ad」表示が付きます。価格は2026年10月26日時点の1日あたりのものです。',
        ],
        columns: ['掲載枠', '表示される場所', '1日あたりの価格'],
        rows: [
          { '掲載枠': 'サイト全体のバナー', '表示される場所': 'すべてのページの上部', '1日あたりの価格': '$25' },
          { '掲載枠': 'ツールディレクトリ', '表示される場所': '比較対象のツールの横にあるグリッド内のカード', '1日あたりの価格': '$15' },
          { '掲載枠': 'ツールページ', '表示される場所': 'ツールの詳細の横のカード', '1日あたりの価格': '$10' },
          { '掲載枠': 'ガイドと動画', '表示される場所': '記事や動画解説の横のカード', '1日あたりの価格': '$5' },
        ],
        note: 'これとは別に、Aboutページは、Premium掲載は審査が早まり、スポンサー表示付きで目立つ位置に置かれること、また有料掲載は「ツールをテストしたことも性能を評価したことも意味しない」と述べています。Premium掲載がどう順位付けされるかは説明されていません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い方',
        content: [
          '**手順は、トップページが用意するナビゲーションに沿ったものです。PromptQuorumは一通りの検索を実際に行ってはいません。**',
        ],
        numberedItems: [
          {
            title: 'コレクションかカテゴリから始める',
            whyItMatters: '「ChatGPT & Claude alternatives」や「AI for a modest PC」などのコレクションが、1,800件以上のツールを短いリストに絞ります。',
          },
          {
            title: 'プラットフォームとライセンスで絞り込む',
            whyItMatters: '各掲載にはmacOS、Windows、Linux、Docker、Webなどのプラットフォームとライセンスが表示されるので、自分のマシンに合わないツールを外せます。',
          },
          {
            title: '「最終更新」日とGitHubのデータを確認する',
            whyItMatters: '掲載には最終更新日があり、トレンド欄にはスター数とリリースのデータが表示されるため、放置されたプロジェクトを見つける助けになります。',
          },
          {
            title: 'インストール前にツール自身のサイトを開く',
            whyItMatters: '説明はプロジェクトのページから下書きされた要約なので、プロジェクト自身のサイトとライセンスが最終的な根拠です。',
          },
          {
            title: 'Adやスポンサーの表示を探す',
            whyItMatters: '広告とPremium掲載には表示が付くので、有料の枠と通常の掲載を見分けられます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、トップページ、Aboutページ、または情報源に挙げたほかのページに基づいています。**',
        ],
        items: [
          '**大規模なカタログ。** トップページには、1,800件以上のツール、100以上のカテゴリ、10のプラットフォーム、58のタグ、65の代替（クラウドアプリのローカル代替）が表示されています。',
          '**ツールページ。** 説明、プラットフォーム、ライセンス、タグ、カテゴリ、最終更新日があり、オフラインで動くかクラウドが必要かを示す掲載もあります。',
          '**並べ替えと検索。** 新着順、スター数順、最近更新順、⌘Kでのグローバル検索、ツール・代替・カテゴリ・プラットフォーム・タグでの閲覧ができます。',
          '**GitHubの動き。** 過去1週間のスター数と最近のリリースバージョンを示す、トレンドと新リリースの欄があります。',
          '**コレクションと動画。** 14の厳選コレクションと1,400本以上の動画があります。Aboutページによれば、動画は制作者の文字起こしとメタデータから要約され、デモや意見は動画制作者のものです。',
          '**投稿。** 「Add tool」ページがあります。審査の流れは、確認したページには説明されていません。',
          '**そのほか。** ハウツー記事のブログ、ニュースレター、RSSフィードがあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**LocalhostedはWebサイトなので、訪問するとそのサーバーと、分析・広告の提供事業者へリクエストが送られます。2026年9月30日に最終更新されたプライバシーポリシーが、それらを挙げています。** Google Analyticsは、公開ページへの訪問をファーストパーティCookieで計測し、広告シグナルと広告のパーソナライズは無効、クエリ文字列は除去されます。ツールごと・日ごとの別の訪問カウンターはCookie、識別子、IPアドレスを使わず、Plausibleは有効な場合、既定では分析用Cookieを使いません。',
          'アカウントには、メール、名前、プロフィール画像、GoogleまたはGitHubのサインイン識別子が含まれることがあります。ニュースレターのメールはResendが扱います。広告事業者Revinelは、IPアドレスや対象ページなどの技術データを受け取り、アフィリエイトリンクには紹介IDが付くことがあり、設定されたNeonデータベースは米国にあります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはポリシーの文面に基づく記述で、PromptQuorumはサイトのネットワーク通信を監査していません。Localhostedに掲載されたツールにはそれぞれ独自のプライバシー慣行があり、ディレクトリがそれを保証するものではありません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**クラウドAIアプリのローカル代替を探している人。** 代替の一覧とコレクションは、その問いから始まっています。',
          '**ツールを見つける場所をもう一つ増やしたいセルフホスト派。** プラットフォーム、ライセンス、更新日の絞り込みが役立ちます。',
          '**新しいプロジェクトを追っている開発者。** トレンドと新リリースの欄はGitHubのデータを使っています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**掲載内容の正確さ。** サイトは、説明はAIの支援で下書きされ、掲載はツールがインストールやベンチマークされたことを意味しないと述べています。PromptQuorumは個々の掲載を確認していません。',
          '**掲載の選び方。** 選定基準と投稿の審査は、一般的な説明にとどまります。',
          '**運営者。** Aboutページは誰も名指ししていません。運営者は、デザイナーのポートフォリオとスポンサー枠から推測したものです。',
          '**順位付け。** Premium掲載と「スター数順」が並び順にどう影響するかは、文書化されていません。',
          '**ソースコード、ライセンス、バージョン。** いずれも示されておらず、公開リポジトリは見つかりませんでした。',
          '**独立性。** サイトは広告とPremium掲載を販売しており、独立性を明示的に主張してはいません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Localhostedを使うのにアカウントは必要ですか？',
            a: '閲覧には不要です。アカウントは、GoogleまたはGitHubでのサインインと「Add tool」の投稿ページのために用意されています。',
          },
          {
            q: '掲載されているツールはLocalhostedがテストしたものですか？',
            a: 'Aboutページによれば、いいえ。掲載は文書化された機能を説明するもので、ツールがインストールやベンチマークされたことを意味せず、有料掲載もテスト済みを意味しません。',
          },
          {
            q: 'PromptQuorumのアプリディレクトリとはどう違いますか？',
            a: 'Localhostedははるかに多くの件数を掲載し、動画と代替ツールを加えています。PromptQuorumのディレクトリは掲載アプリが少なく、多くに編集上のレビュー、ハードウェアと処理場所（ローカルかクラウド）の項目、最終更新の警告を付けています。PromptQuorumは利害関係者なので、両方を比べてください。',
          },
          {
            q: 'お金を払えばツールを掲載できますか？',
            a: 'はい。Aboutページによれば、Premium掲載は審査が早まり、スポンサー表示付きで目立つ位置に置かれます。広告は別に販売されています。',
          },
          {
            q: 'LocalhostedはAIモデルを動かしてくれますか？',
            a: 'いいえ。カタログです。モデルをローカルで動かすには、掲載されているツールのいずれかを自分でインストールします。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Localhostedは、ローカル／セルフホスト型AIツールを探すための大規模で無料のカタログで、コレクション、クラウドアプリの代替、GitHubの動きのデータ、動画を備えています。一方で、掲載文はテスト結果ではなくAI支援の要約で、有料掲載と広告があり、運営者は自社のAboutページに名前がなく、掲載の選び方も読んだページでは大まかにしか説明されていません。広い出発点のリストがほしく、そのあと各ツールを自身のサイトで確かめる人に向いています。編集上のレビューがほしい方は、PromptQuorumの[アプリディレクトリ](/ja/directory)から始められます。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Localhostedトップページ](https://localhosted.com/) — 件数、機能、ナビゲーション、広告表示。2026年10月26日確認。',
          '[Localhosted About](https://localhosted.com/about) — 選定、AI支援の説明、動画の要約、Premium掲載。2026年10月26日確認。',
          '[Localhostedプライバシーポリシー](https://localhosted.com/privacy) — 分析、Cookie、アカウント、提供事業者、データの所在地。2026年9月30日最終更新。',
          '[Localhosted広告ページ](https://localhosted.com/advertise) — 掲載枠、価格、予約ルール。2026年10月26日確認。',
          '[Logotyperポートフォリオ](https://logotyper.com/) — Localhostedをプロジェクトとして挙げ、その範囲を示しています。2026年10月26日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルAIアプリディレクトリ](/ja/directory) — レビューとフィルター付きの、PromptQuorumのローカルAIアプリのディレクトリ。',
          '[ローカルLLM 学習・運用編 比較](/ja/power-local-llm/local-llm-train-operate-compared) — モデルハブに最も近いカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-pt.webp',
    title: 'Análise do Localhosted: diretório web de ferramentas de IA locais e auto-hospedadas',
    seoTitle: 'Análise do Localhosted: diretório de ferramentas de IA',
    intro:
      'O Localhosted é um site gratuito que cataloga software de IA local e auto-hospedado: apps, servidores de modelos, assistentes de programação e ferramentas criativas, com coleções, alternativas e guias em vídeo. Não é um app que você instala e não executa nenhum modelo por você, então esta análise o trata como um diretório ao lado do [Diretório de Apps da PromptQuorum](/pt/directory). Ela reflete o site conforme lido em 26 de outubro de 2026.',
    metaDescription:
      'Análise do Localhosted: diretório web grátis de 1.800+ ferramentas de IA locais e auto-hospedadas. Como as entradas são feitas, o que é pago, privacidade.',
    twitterDescription:
      'Análise do Localhosted: um diretório web gratuito de ferramentas de IA locais e auto-hospedadas. O que oferece, como as entradas são escritas, o que é pago e o que as fontes não confirmam.',
    audience:
      'Pessoas que procuram ferramentas de IA locais ou auto-hospedadas e querem saber o que o diretório Localhosted oferece, como suas entradas são produzidas, o que é pago e o que conferir por conta própria.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Localhosted',
    targetKeywords: [
      'análise localhosted',
      'diretório de ferramentas de ia local',
      'diretório de ia auto-hospedada',
      'alternativas locais ao chatgpt',
      'diretório de apps de llm local',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O Localhosted é um diretório web gratuito de ferramentas de IA locais e auto-hospedadas; segundo a página inicial de 26 de outubro de 2026, lista mais de 1.800 ferramentas em mais de 100 categorias, com coleções, alternativas locais a apps na nuvem e mais de 1.400 vídeos.** Nada é instalado e nenhum modelo roda por você: você navega e depois segue o link de cada ferramenta. A própria página Sobre diz que as entradas são redigidas com ajuda de IA e não significam que a ferramenta foi testada, e que existem posicionamentos pagos.',
    quickAnswerTop: {
      pt: {
        question: 'O Localhosted é um app que roda IA no seu computador?',
        answer:
          'Não. O Localhosted é um site que lista ferramentas que você pode rodar no seu próprio hardware; ele não executa modelos, não oferece download e não tem número de versão. Cada entrada leva ao site ou ao repositório da própria ferramenta.',
        bullets: [
          'Gratuito para navegar em [localhosted.com](https://localhosted.com/); a conta é opcional e uma página "Add tool" aceita sugestões.',
          'Navegue por ferramenta, alternativa, categoria, plataforma ou tag, ou pesquise com ⌘K.',
          'As páginas das entradas mostram plataformas, licença, tags e uma data de "última atualização", e algumas indicam uso offline.',
          'As seções de tendências e de novas versões usam dados de estrelas e de lançamentos do GitHub.',
          'Existem posicionamentos vendidos (anúncios e entradas Premium), então posições em destaque não são um ranking de qualidade.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Localhosted?', anchor: 'what-is-localhosted' },
      { label: 'Onde acessar', anchor: 'get-it' },
      { label: 'Preços e posicionamentos pagos', anchor: 'pricing' },
      { label: 'Como usar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso de rede', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
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
            text: 'O Localhosted é um diretório web gratuito e de código fechado que cataloga ferramentas de IA locais e auto-hospedadas, com entradas feitas com ajuda de IA e posicionamentos pagos.',
          },
          {
            type: 'plain-terms',
            text: 'Você abre o site, navega ou pesquisa uma grande lista de ferramentas que pode rodar na sua própria máquina e clica para chegar a cada uma; nada é instalado a partir do próprio Localhosted.',
          },
        ],
        items: [
          'Escala: a página inicial mostra mais de 1.800 ferramentas, mais de 100 categorias, 14 coleções e mais de 1.400 vídeos.',
          'Operador: a página Sobre não nomeia ninguém; o portfólio do designer em logotyper.com lista o Localhosted como projeto, e um espaço patrocinado chama "Eugene" de designer e desenvolvedor por trás dele.',
          'Entradas: as descrições vêm de sites de projetos e READMEs, com ajuda de IA; uma entrada não significa que a ferramenta foi instalada ou medida.',
          'Dinheiro: os anúncios custam de $5 a $25 por dia por espaço, e as entradas Premium têm revisão mais rápida e um rótulo de patrocinado.',
          'Manutenção: a política de privacidade foi atualizada em 30 de setembro de 2026; não há número de versão nem repositório público, então não é possível calcular um aviso de projeto abandonado.',
          'Relação conosco: a PromptQuorum mantém o seu próprio [Diretório de Apps](/pt/directory); esta análise é independente e o Localhosted não foi contatado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas páginas do localhosted.com e no portfólio do designer, lidos em 26 de outubro de 2026. A PromptQuorum não testou o site além de lê-lo, não contatou seu operador e não consegue verificar como as entradas são produzidas. A PromptQuorum publica um diretório próprio, então trate isto como uma comparação feita por uma parte interessada.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'O que é o Localhosted?',
        content: [
          '**O Localhosted é um site de catálogo, não um software: ele descreve ferramentas que rodam no seu próprio computador ou servidor e leva até elas.** O slogan é "There\'s no place like 127.0.0.1", e a página inicial o apresenta como "Local and self-hosted AI, in one directory".',
          'A página Sobre diz que ele seleciona software que oferece suporte a uso local ou auto-hospedagem, incluindo apps, bibliotecas, ferramentas criativas, modelos e os programas que os executam. Ela não nomeia as pessoas por trás dele. O portfólio do designer em [logotyper.com](https://logotyper.com/) lista o Localhosted entre seus projetos, com identidade de marca, UI e UX, desenvolvimento do diretório, integração com o GitHub, automação com IA e monetização como o trabalho realizado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde acessar',
        content: [
          '**O Localhosted abre no navegador; não há download, página em loja de apps nem repositório de código-fonte.** A conta é opcional e necessária para enviar sugestões.',
        ],
        columns: ['Plataforma', 'Onde acessar'],
        rows: [
          { 'Plataforma': 'Qualquer navegador', 'Onde acessar': '[localhosted.com](https://localhosted.com/)' },
          { 'Plataforma': 'Site', 'Onde acessar': '[localhosted.com](https://localhosted.com/)' },
          { 'Plataforma': 'Política de privacidade', 'Onde acessar': '[localhosted.com/privacy](https://localhosted.com/privacy) (última atualização em 30 de setembro de 2026)' },
          { 'Plataforma': 'Sobre', 'Onde acessar': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'Plataforma': 'Publicidade', 'Onde acessar': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'Nenhuma versão se aplica a um site. São oferecidos uma newsletter, um feed RSS e login com Google ou GitHub; nada disso é necessário para navegar.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços e posicionamentos pagos',
        content: [
          '**Navegar no Localhosted não custa nada; o site ganha dinheiro com publicidade e com entradas pagas.** A página /advertise vende um posicionamento por anunciante de cada vez, reservado com pelo menos dois dias de antecedência e por até 90 dias, com um rótulo "Ad" visível. Os preços são por dia em 26 de outubro de 2026.',
        ],
        columns: ['Posicionamento', 'Onde aparece', 'Preço por dia'],
        rows: [
          { 'Posicionamento': 'Banner em todo o site', 'Onde aparece': 'Topo de todas as páginas', 'Preço por dia': '$25' },
          { 'Posicionamento': 'Diretório de ferramentas', 'Onde aparece': 'Cartão na grade ao lado das ferramentas comparadas', 'Preço por dia': '$15' },
          { 'Posicionamento': 'Páginas de ferramentas', 'Onde aparece': 'Cartão ao lado dos detalhes de uma ferramenta', 'Preço por dia': '$10' },
          { 'Posicionamento': 'Guias e vídeos', 'Onde aparece': 'Cartão ao lado de artigos e tutoriais em vídeo', 'Preço por dia': '$5' },
        ],
        note: 'Separadamente, a página Sobre diz que as entradas Premium têm revisão mais rápida e posicionamento em destaque com um rótulo de patrocinado, e que um posicionamento pago "does not establish that we have tested the tool or rated its performance" (não comprova que a ferramenta foi testada nem avaliada quanto ao desempenho). Como as entradas Premium são ordenadas não é descrito.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como usar',
        content: [
          '**Estes passos seguem a navegação que a página inicial oferece; a PromptQuorum não executou uma sessão de busca completa.**',
        ],
        numberedItems: [
          {
            title: 'Comece por uma coleção ou uma categoria',
            whyItMatters: 'Coleções como "ChatGPT & Claude alternatives" ou "AI for a modest PC" reduzem mais de 1.800 ferramentas a uma lista curta.',
          },
          {
            title: 'Filtre por plataforma e licença',
            whyItMatters: 'Cada entrada mostra plataformas como macOS, Windows, Linux, Docker ou Web e uma licença, para você descartar o que não serve para a sua máquina.',
          },
          {
            title: 'Confira a data de "última atualização" e os dados do GitHub',
            whyItMatters: 'As entradas trazem uma data de última atualização, e as seções de tendências mostram dados de estrelas e de lançamentos, o que ajuda a identificar projetos abandonados.',
          },
          {
            title: 'Abra o site da própria ferramenta antes de instalar',
            whyItMatters: 'As descrições são resumos redigidos a partir de páginas de projetos, então o site do projeto e a licença continuam sendo a referência.',
          },
          {
            title: 'Procure o rótulo Ad ou de patrocinado',
            whyItMatters: 'Anúncios e entradas Premium têm rótulos, para você distinguir espaços pagos de entradas orgânicas.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página inicial, da página Sobre ou das outras páginas citadas nas fontes.**',
        ],
        items: [
          '**Catálogo grande.** A página inicial mostra mais de 1.800 ferramentas, mais de 100 categorias, 10 plataformas, 58 tags e 65 alternativas, que são substitutos locais de apps na nuvem.',
          '**Páginas de ferramentas.** Descrição, plataformas, licença, tags, categorias e uma data de última atualização; algumas entradas dizem se a ferramenta funciona offline ou precisa da nuvem.',
          '**Ordenação e busca.** Mais recentes, mais estrelas ou atualizadas recentemente, uma busca global em ⌘K e navegação por ferramenta, alternativa, categoria, plataforma ou tag.',
          '**Atividade no GitHub.** Seções de tendências e de lançamentos recentes, com a contagem de estrelas da última semana e as versões lançadas recentemente.',
          '**Coleções e vídeos.** 14 coleções selecionadas e mais de 1.400 vídeos, que a página Sobre diz serem resumidos a partir da transcrição e dos metadados do criador; o criador do vídeo é dono das demonstrações e das opiniões.',
          '**Sugestões.** Uma página "Add tool"; o processo de revisão não é descrito nas páginas lidas.',
          '**Extras.** Um blog com tutoriais, uma newsletter e um feed RSS.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso de rede',
        content: [
          '**O Localhosted é um site, então visitá-lo envia requisições aos seus servidores e aos seus provedores de análise e publicidade; a política de privacidade, atualizada pela última vez em 30 de setembro de 2026, os lista.** O Google Analytics mede as visitas às páginas públicas com cookies próprios, com os sinais de publicidade e a personalização de anúncios desativados e as query strings removidas. Um contador de visitas separado, por ferramenta e por dia, não usa cookies, identificadores nem endereços IP, e o Plausible, quando ativado, não usa cookies de análise por padrão.',
          'As contas podem guardar e-mail, nome, imagem de perfil e identificadores de login do Google ou do GitHub. O Resend cuida do e-mail da newsletter. O provedor de publicidade Revinel recebe dados técnicos, como endereço IP e a página envolvida, os links de afiliados podem levar identificadores de indicação, e o banco de dados Neon configurado fica nos Estados Unidos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas afirmações vêm do texto da política; a PromptQuorum não auditou o tráfego de rede do site. As ferramentas listadas no Localhosted têm suas próprias práticas de privacidade, pelas quais o diretório não responde.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Leitores que procuram um substituto local para um app de IA na nuvem.** A lista de alternativas e as coleções partem dessa pergunta.',
          '**Quem faz auto-hospedagem e quer mais um lugar para descobrir ferramentas.** Os filtros de plataforma, licença e data de atualização ajudam.',
          '**Desenvolvedores que acompanham projetos novos.** As seções de tendências e de lançamentos usam dados do GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão das entradas.** O site diz que as descrições são redigidas com ajuda de IA e que uma entrada não significa que a ferramenta foi instalada ou medida; a PromptQuorum não conferiu entradas individuais.',
          '**Como as entradas são escolhidas.** Os critérios de seleção e a revisão das sugestões só são descritos em termos gerais.',
          '**Quem o mantém.** A página Sobre não nomeia ninguém; o operador é deduzido do portfólio do designer e de um espaço patrocinado.',
          '**Ordenação.** Como as entradas Premium e o critério "mais estrelas" interagem com a ordem não está documentado.',
          '**Código-fonte, licença e versão.** Nada disso é informado, e nenhum repositório público foi encontrado.',
          '**Independência.** O site vende publicidade e entradas Premium e não faz nenhuma afirmação explícita de independência.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta para usar o Localhosted?',
            a: 'Não para navegar; uma conta é oferecida para login com Google ou GitHub e para a página de envio "Add tool".',
          },
          {
            q: 'As ferramentas listadas lá são testadas pelo Localhosted?',
            a: 'Segundo a página Sobre, não: uma entrada descreve recursos documentados e não significa que a ferramenta foi instalada ou medida, e um posicionamento pago também não significa que ela foi testada.',
          },
          {
            q: 'Em que ele difere do Diretório de Apps da PromptQuorum?',
            a: 'O Localhosted lista muito mais entradas e acrescenta vídeos e alternativas; o diretório da PromptQuorum lista menos apps e anexa a muitos deles análises editoriais, campos de hardware e local de processamento (local ou nuvem) e avisos de última atualização. A PromptQuorum é uma parte interessada, então compare os dois.',
          },
          {
            q: 'Uma ferramenta pode pagar para ser listada?',
            a: 'Sim. A página Sobre diz que as entradas Premium têm revisão mais rápida e posicionamento em destaque, com um rótulo de patrocinado; os anúncios são vendidos à parte.',
          },
          {
            q: 'O Localhosted executa modelos de IA para mim?',
            a: 'Não. É um catálogo; para rodar um modelo localmente, você mesmo instala uma das ferramentas listadas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Localhosted é um catálogo grande e gratuito para encontrar ferramentas de IA locais e auto-hospedadas, com coleções, alternativas a apps na nuvem, dados de atividade do GitHub e vídeos. Em contrapartida, as entradas são resumos feitos com ajuda de IA, não resultados de testes, existem entradas pagas e anúncios, o operador não é nomeado na própria página Sobre e as páginas lidas descrevem como as entradas são escolhidas apenas em termos gerais. Serve para leitores que querem uma lista ampla como ponto de partida e depois verificam cada ferramenta no site dela; quem quer análises editoriais pode começar pelo [Diretório de Apps](/pt/directory) da PromptQuorum.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página inicial do Localhosted](https://localhosted.com/) — contagens, recursos, navegação e rótulos de anúncios, lida em 26 de outubro de 2026.',
          '[Sobre o Localhosted](https://localhosted.com/about) — seleção, descrições feitas com ajuda de IA, resumos de vídeos e entradas Premium, lida em 26 de outubro de 2026.',
          '[Política de privacidade do Localhosted](https://localhosted.com/privacy) — análise, cookies, contas, provedores e local dos dados, última atualização em 30 de setembro de 2026.',
          '[Página de publicidade do Localhosted](https://localhosted.com/advertise) — posicionamentos, preços e regras de reserva, lida em 26 de outubro de 2026.',
          '[Portfólio da Logotyper](https://logotyper.com/) — lista o Localhosted como projeto e seu escopo, lido em 26 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Diretório de Apps de IA Local](/pt/directory) — o diretório da PromptQuorum de apps de IA locais, com análises e filtros.',
          '[LLMs locais: treinar e operar, comparados](/pt/power-local-llm/local-llm-train-operate-compared) — a comparação de categoria mais próxima de hubs de modelos.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-ar.webp',
    title: 'مراجعة Localhosted: دليل ويب لأدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا',
    seoTitle: 'مراجعة Localhosted: دليل أدوات الذكاء الاصطناعي المحلية',
    intro:
      'Localhosted موقع مجاني يفهرس برمجيات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا: تطبيقات وخوادم نماذج ومساعدي برمجة وأدوات إبداعية، مع مجموعات وبدائل وأدلة فيديو. وهو ليس تطبيقًا تثبّته ولا يشغّل أي نموذج نيابةً عنك، لذا تتناوله هذه المراجعة بوصفه دليلًا إلى جانب [دليل تطبيقات PromptQuorum](/ar/directory). وهي تعكس الموقع كما قُرئ في 26 أكتوبر 2026.',
    metaDescription:
      'مراجعة Localhosted: دليل ويب مجاني يضم أكثر من 1,800 أداة ذكاء اصطناعي محلية ومستضافة ذاتيًا. ما يعرضه، وكيف تُكتب إدخالاته، والقوائم المدفوعة والخصوصية.',
    twitterDescription:
      'مراجعة Localhosted: دليل ويب مجاني لأدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا. ما يقدّمه، وكيف تُكتب القوائم، وما هو مدفوع، وما لا تؤكده المصادر.',
    audience:
      'من يبحثون عن أدوات ذكاء اصطناعي محلية أو مستضافة ذاتيًا ويريدون معرفة ما يقدّمه دليل Localhosted، وكيف تُنتَج إدخالاته، وما هو مدفوع، وما ينبغي التحقق منه مرتين.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Localhosted',
    targetKeywords: [
      'مراجعة localhosted',
      'دليل أدوات الذكاء الاصطناعي المحلية',
      'دليل الذكاء الاصطناعي المستضاف ذاتيًا',
      'بدائل محلية لـ chatgpt',
      'دليل تطبيقات llm المحلية',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted دليل ويب مجاني لأدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا؛ وبحسب صفحته الرئيسية في 26 أكتوبر 2026 يضم أكثر من 1,800 أداة في أكثر من 100 فئة، مع مجموعات وبدائل محلية لتطبيقات سحابية وأكثر من 1,400 مقطع فيديو.** لا يُثبَّت شيء ولا يشغّل أي نموذج نيابةً عنك: تتصفح ثم تتبع الرابط إلى كل أداة. وتقول صفحة «حول» فيه إن الإدخالات تُصاغ بمساعدة الذكاء الاصطناعي وإنها لا تعني أن الأداة قد اختُبرت، وإن هناك قوائم مدفوعة.',
    quickAnswerTop: {
      ar: {
        question: 'هل Localhosted تطبيق يشغّل الذكاء الاصطناعي على حاسوبك؟',
        answer:
          'لا. Localhosted موقع يعرض أدوات يمكنك تشغيلها على عتادك الخاص؛ فهو لا يشغّل نماذج ولا يوفّر تنزيلًا وليس له رقم إصدار. وتحيل كل قائمة إلى موقع الأداة أو مستودعها.',
        bullets: [
          'التصفح مجاني على [localhosted.com](https://localhosted.com/)؛ والحساب اختياري، وتقبل صفحة «Add tool» اقتراحات الأدوات.',
          'تصفّح حسب الأداة أو البديل أو الفئة أو المنصة أو الوسم، أو ابحث بالاختصار ⌘K.',
          'تعرض صفحات القوائم المنصات والترخيص والوسوم وتاريخ «آخر تحديث»، وبعضها يذكر إمكانية العمل دون إنترنت.',
          'تعتمد أقسام الأكثر رواجًا والإصدارات الجديدة على بيانات GitHub من النجوم والإصدارات.',
          'توجد مواضع مدفوعة (إعلانات وقوائم Premium)، لذا فالمواضع المميزة ليست ترتيبًا للجودة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Localhosted؟', anchor: 'what-is-localhosted' },
      { label: 'كيف تصل إليه', anchor: 'get-it' },
      { label: 'الأسعار والمواضع المدفوعة', anchor: 'pricing' },
      { label: 'كيف تستخدمه', anchor: 'getting-started' },
      { label: 'ميزات أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'Localhosted دليل ويب مجاني ومغلق المصدر يفهرس أدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا، بإدخالات تُصاغ بمساعدة الذكاء الاصطناعي ومواضع مدفوعة.',
          },
          {
            type: 'plain-terms',
            text: 'تفتح الموقع وتتصفح أو تبحث في قائمة كبيرة من الأدوات التي يمكنك تشغيلها على جهازك، ثم تنتقل إلى كل أداة؛ ولا يُثبَّت شيء من Localhosted نفسه.',
          },
        ],
        items: [
          'الحجم: تعرض الصفحة الرئيسية أكثر من 1,800 أداة وأكثر من 100 فئة و14 مجموعة وأكثر من 1,400 مقطع فيديو.',
          'الجهة المشغّلة: لا تسمّي صفحة «حول» أحدًا؛ ويدرج موقع المصمم logotyper.com مشروع Localhosted ضمن أعماله، ويصف موضع إعلاني مدفوع «Eugene» بأنه المصمم والمطوّر وراءه.',
          'الإدخالات: تُستمد الأوصاف من مواقع المشاريع وملفات README بمساعدة الذكاء الاصطناعي؛ والقائمة لا تعني أن الأداة قد ثُبّتت أو قيس أداؤها.',
          'المال: تكلّف الإعلانات من 5 إلى 25 دولارًا في اليوم لكل موضع، وتحظى قوائم Premium بمراجعة أسرع وبوسم «مموَّل».',
          'الصيانة: حُدّثت سياسة الخصوصية في 30 سبتمبر 2026؛ ولا يوجد رقم إصدار ولا مستودع عام، فلا يمكن احتساب تحذير المشروع المهجور.',
          'العلاقة بنا: تدير PromptQuorum [دليل تطبيقات](/ar/directory) خاصًا بها؛ وهذه المراجعة مستقلة ولم يجرِ التواصل مع Localhosted.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحات localhosted.com وموقع المصمم، وقد قُرئت في 26 أكتوبر 2026. لم تختبر PromptQuorum الموقع بأكثر من قراءته، ولم تتواصل مع الجهة المشغّلة، ولا تستطيع التحقق من كيفية إنتاج الإدخالات. تنشر PromptQuorum دليلًا خاصًا بها، لذا اعتبر هذه مقارنة من طرف له مصلحة.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'ما هو Localhosted؟',
        content: [
          '**Localhosted موقع فهرسة وليس برنامجًا: فهو يصف أدوات تعمل على حاسوبك أو خادمك ويحيل إليها.** شعاره "There\'s no place like 127.0.0.1"، وتقدّمه الصفحة الرئيسية بوصفه "Local and self-hosted AI, in one directory".',
          'تقول صفحة «حول» إنه ينتقي البرمجيات التي تدعم الاستخدام المحلي أو الاستضافة الذاتية، ومنها التطبيقات والمكتبات والأدوات الإبداعية والنماذج والبرامج التي تشغّلها. ولا تسمّي الصفحة القائمين عليه. ويدرج موقع المصمم [logotyper.com](https://logotyper.com/) مشروع Localhosted ضمن مشاريعه، وتشمل الأعمال المنجزة الهوية البصرية وتصميم الواجهات وتجربة المستخدم وتطوير الدليل وربط GitHub وأتمتة الذكاء الاصطناعي وتحقيق الإيرادات.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تصل إليه',
        content: [
          '**يُفتح Localhosted في المتصفح؛ ولا يوجد تنزيل ولا صفحة في متجر تطبيقات ولا مستودع مصدري.** الحساب اختياري ويلزم لإرسال الأدوات المقترحة.',
        ],
        columns: ['المنصة', 'كيف تصل إليه'],
        rows: [
          { 'المنصة': 'أي متصفح', 'كيف تصل إليه': '[localhosted.com](https://localhosted.com/)' },
          { 'المنصة': 'الموقع', 'كيف تصل إليه': '[localhosted.com](https://localhosted.com/)' },
          { 'المنصة': 'سياسة الخصوصية', 'كيف تصل إليه': '[localhosted.com/privacy](https://localhosted.com/privacy) (آخر تحديث في 30 سبتمبر 2026)' },
          { 'المنصة': 'حول', 'كيف تصل إليه': '[localhosted.com/about](https://localhosted.com/about)' },
          { 'المنصة': 'الإعلانات', 'كيف تصل إليه': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: 'لا ينطبق رقم إصدار على موقع ويب. تُتاح نشرة بريدية وخلاصة RSS وتسجيل الدخول عبر Google أو GitHub؛ ولا يلزم أي منها للتصفح.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار والمواضع المدفوعة',
        content: [
          '**التصفح في Localhosted مجاني؛ ويكسب الموقع من الإعلانات ومن القوائم المدفوعة.** تبيع صفحة /advertise موضعًا واحدًا لكل معلن في كل مرة، يُحجز قبل يومين على الأقل ولمدة تصل إلى 90 يومًا، مع وسم "Ad" ظاهر. الأسعار يومية حتى 26 أكتوبر 2026.',
        ],
        columns: ['الموضع', 'أين يظهر', 'السعر اليومي'],
        rows: [
          { 'الموضع': 'لافتة عامة', 'أين يظهر': 'أعلى كل صفحة', 'السعر اليومي': '$25' },
          { 'الموضع': 'دليل الأدوات', 'أين يظهر': 'بطاقة في الشبكة بجانب الأدوات المقارَنة', 'السعر اليومي': '$15' },
          { 'الموضع': 'صفحات الأدوات', 'أين يظهر': 'بطاقة بجانب تفاصيل الأداة', 'السعر اليومي': '$10' },
          { 'الموضع': 'الأدلة والفيديو', 'أين يظهر': 'بطاقة بجانب المقالات وشروحات الفيديو', 'السعر اليومي': '$5' },
        ],
        note: 'وبصورة منفصلة، تقول صفحة «حول» إن قوائم Premium تحظى بمراجعة أسرع ومكان مميز مع وسم «مموَّل»، وإن الموضع المدفوع "does not establish that we have tested the tool or rated its performance" أي لا يثبت أن الأداة اختُبرت أو قُيِّم أداؤها. ولا يُوصف كيف تُرتَّب قوائم Premium.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تستخدمه',
        content: [
          '**تتبع هذه الخطوات التنقل الذي تتيحه الصفحة الرئيسية؛ ولم تجرِ PromptQuorum جلسة بحث كاملة.**',
        ],
        numberedItems: [
          {
            title: 'ابدأ من مجموعة أو فئة',
            whyItMatters: 'تختصر مجموعات مثل "ChatGPT & Claude alternatives" أو "AI for a modest PC" أكثر من 1,800 أداة إلى قائمة قصيرة.',
          },
          {
            title: 'صفِّ حسب المنصة والترخيص',
            whyItMatters: 'تعرض كل قائمة منصات مثل macOS وWindows وLinux وDocker وWeb وترخيصًا، فتستبعد الأدوات التي لا تناسب جهازك.',
          },
          {
            title: 'تحقق من تاريخ «آخر تحديث» وبيانات GitHub',
            whyItMatters: 'تحمل القوائم تاريخ آخر تحديث، وتعرض أقسام الأكثر رواجًا بيانات النجوم والإصدارات، مما يساعد على اكتشاف المشاريع المهجورة.',
          },
          {
            title: 'افتح موقع الأداة نفسه قبل التثبيت',
            whyItMatters: 'الأوصاف ملخصات مصوغة من صفحات المشاريع، فيبقى موقع المشروع وترخيصه هما المرجع.',
          },
          {
            title: 'ابحث عن وسم الإعلان أو التمويل',
            whyItMatters: 'تحمل الإعلانات وقوائم Premium وسومًا، فتميّز المواضع المدفوعة من الإدخالات العادية.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'ميزات أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من الصفحة الرئيسية أو صفحة «حول» أو الصفحات الأخرى المذكورة في المصادر.**',
        ],
        items: [
          '**فهرس كبير.** تعرض الصفحة الرئيسية أكثر من 1,800 أداة وأكثر من 100 فئة و10 منصات و58 وسمًا و65 بديلًا، وهي بدائل محلية لتطبيقات سحابية.',
          '**صفحات الأدوات.** وصف ومنصات وترخيص ووسوم وفئات وتاريخ آخر تحديث؛ وبعض القوائم يذكر هل تعمل الأداة دون إنترنت أم تحتاج إلى السحابة.',
          '**الفرز والبحث.** الأحدث أو الأكثر نجومًا أو المحدَّث مؤخرًا، وبحث شامل بالاختصار ⌘K، وتصفح حسب الأداة أو البديل أو الفئة أو المنصة أو الوسم.',
          '**نشاط GitHub.** أقسام للأكثر رواجًا والإصدارات الجديدة مع أعداد النجوم خلال الأسبوع الماضي وأحدث أرقام الإصدارات.',
          '**المجموعات والفيديو.** 14 مجموعة منتقاة وأكثر من 1,400 مقطع فيديو، وتقول صفحة «حول» إنها تُلخَّص من نص المقطع الصوتي وبياناته الوصفية؛ ويملك صانع الفيديو العروض والآراء.',
          '**اقتراح الأدوات.** صفحة "Add tool"؛ ولا تُوصف عملية المراجعة في الصفحات التي قُرئت.',
          '**إضافات.** مدونة بشروحات عملية ونشرة بريدية وخلاصة RSS.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**Localhosted موقع ويب، فزيارته ترسل طلبات إلى خوادمه وإلى مزوّدي التحليلات والإعلانات لديه؛ وتسردهم سياسة الخصوصية المحدّثة في 30 سبتمبر 2026.** يقيس Google Analytics الزيارات إلى الصفحات العامة بملفات تعريف ارتباط من الطرف الأول، مع تعطيل إشارات الإعلانات وتخصيصها وحذف سلاسل الاستعلام. ويستخدم عدّاد زيارات منفصل لكل أداة ولكل يوم دون ملفات تعريف ارتباط أو معرّفات أو عناوين IP، ولا يستخدم Plausible، عند تفعيله، ملفات تعريف ارتباط للتحليلات افتراضيًا.',
          'يمكن أن تتضمن الحسابات البريد الإلكتروني والاسم وصورة الملف الشخصي ومعرّفات تسجيل الدخول من Google أو GitHub. وتتولى Resend رسائل النشرة البريدية. ويتلقى مزوّد الإعلانات Revinel بيانات تقنية مثل عنوان IP والصفحة المعنية، ويمكن أن تحمل روابط الشركاء معرّفات إحالة، وقاعدة بيانات Neon المهيّأة موجودة في الولايات المتحدة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه العبارات مأخوذة من نص السياسة؛ ولم تدقّق PromptQuorum حركة الشبكة في الموقع. وللأدوات المدرجة في Localhosted ممارسات خصوصية خاصة بها، ولا يضمنها الدليل.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**القرّاء الباحثون عن بديل محلي لتطبيق ذكاء اصطناعي سحابي.** تبدأ قائمة البدائل والمجموعات من هذا السؤال.',
          '**المستضيفون ذاتيًا الذين يريدون مكانًا إضافيًا لاكتشاف الأدوات.** وتساعد عوامل التصفية حسب المنصة والترخيص وتاريخ التحديث.',
          '**المطوّرون الذين يتابعون المشاريع الجديدة.** تعتمد أقسام الأكثر رواجًا والإصدارات الجديدة على بيانات GitHub.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**دقة الإدخالات.** يقول الموقع إن الأوصاف تُصاغ بمساعدة الذكاء الاصطناعي وإن القائمة لا تعني أن الأداة ثُبّتت أو قيس أداؤها؛ ولم تتحقق PromptQuorum من إدخالات بعينها.',
          '**كيف تُختار القوائم.** معايير الانتقاء ومراجعة الأدوات المقترحة موصوفة بعبارات عامة فقط.',
          '**من يديره.** لا تسمّي صفحة «حول» أحدًا؛ واستُنتجت الجهة المشغّلة من موقع المصمم ومن موضع إعلاني مدفوع.',
          '**الترتيب.** لا يُوثَّق كيف تتفاعل قوائم Premium وخيار «الأكثر نجومًا» مع الترتيب.',
          '**الشفرة المصدرية والترخيص والإصدار.** لا شيء منها مذكور، ولم يُعثر على مستودع عام.',
          '**الاستقلالية.** يبيع الموقع الإعلانات وقوائم Premium، ولا يقدّم ادعاءً صريحًا بالاستقلالية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب لاستخدام Localhosted؟',
            a: 'لا للتصفح؛ والحساب متاح لتسجيل الدخول عبر Google أو GitHub ولصفحة اقتراح الأدوات "Add tool".',
          },
          {
            q: 'هل تختبر Localhosted الأدوات المدرجة فيه؟',
            a: 'بحسب صفحة «حول»، لا: فالقائمة تصف ميزات موثّقة ولا تعني أن الأداة ثُبّتت أو قيس أداؤها، والموضع المدفوع لا يعني أنها اختُبرت أيضًا.',
          },
          {
            q: 'ما الفرق بينه وبين دليل تطبيقات PromptQuorum؟',
            a: 'يضم Localhosted إدخالات أكثر بكثير ويضيف الفيديو والبدائل؛ أما دليل PromptQuorum فيضم تطبيقات أقل ويرفق بكثير منها مراجعات تحريرية وحقول للعتاد ومكان المعالجة (محلي أو سحابي) وتحذيرات آخر تحديث. وPromptQuorum طرف له مصلحة، فقارن بين الاثنين.',
          },
          {
            q: 'هل يمكن لأداة أن تدفع لتُدرَج؟',
            a: 'نعم. تقول صفحة «حول» إن قوائم Premium تحظى بمراجعة أسرع ومكان مميز مع وسم «مموَّل»؛ وتُباع الإعلانات بصورة منفصلة.',
          },
          {
            q: 'هل يشغّل Localhosted نماذج ذكاء اصطناعي نيابةً عني؟',
            a: 'لا. إنه فهرس؛ ولتشغيل نموذج محليًا عليك تثبيت إحدى الأدوات المدرجة بنفسك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Localhosted فهرس كبير ومجاني للعثور على أدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا، مع مجموعات وبدائل لتطبيقات سحابية وبيانات نشاط GitHub وفيديو. في المقابل، الإدخالات ملخصات بمساعدة الذكاء الاصطناعي لا نتائج اختبار، وتوجد قوائم مدفوعة وإعلانات، ولا تسمّي صفحة «حول» الجهة المشغّلة، وتصف الصفحات التي قرأناها كيفية اختيار الإدخالات بعبارات عامة فقط. يناسب القرّاء الذين يريدون قائمة بداية واسعة ثم يتحققون من كل أداة على موقعها؛ ومن يريد مراجعات تحريرية يمكنه البدء بـ[دليل تطبيقات](/ar/directory) PromptQuorum.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الصفحة الرئيسية لـ Localhosted](https://localhosted.com/) — الأعداد والميزات والتنقل ووسوم الإعلانات، قُرئت في 26 أكتوبر 2026.',
          '[صفحة «حول» في Localhosted](https://localhosted.com/about) — الانتقاء والأوصاف بمساعدة الذكاء الاصطناعي وملخصات الفيديو وقوائم Premium، قُرئت في 26 أكتوبر 2026.',
          '[سياسة خصوصية Localhosted](https://localhosted.com/privacy) — التحليلات وملفات تعريف الارتباط والحسابات والمزوّدون وموقع البيانات، آخر تحديث في 30 سبتمبر 2026.',
          '[صفحة الإعلانات في Localhosted](https://localhosted.com/advertise) — المواضع والأسعار وقواعد الحجز، قُرئت في 26 أكتوبر 2026.',
          '[موقع Logotyper](https://logotyper.com/) — يدرج Localhosted ضمن مشاريعه ونطاق العمل فيه، قُرئ في 26 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل تطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية مع المراجعات وعوامل التصفية.',
          '[مقارنة أدوات التدريب والتشغيل لـ LLM المحلية](/ar/power-local-llm/local-llm-train-operate-compared) — المقارنة الفئوية الأقرب إلى مراكز النماذج.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-zh.webp',
    title: 'Localhosted 评测：本地与自托管 AI 工具网页目录',
    seoTitle: 'Localhosted 评测：本地 AI 工具网页目录一览',
    intro:
      'Localhosted 是一个免费网站，收录本地和自托管的 AI 软件：应用、模型服务器、编程助手和创作工具，并提供合集、替代方案和视频指南。它不是需要安装的应用，也不会替你运行任何模型，因此本评测把它当作与 [PromptQuorum 应用目录](/zh/directory)并列的目录来看待。内容基于 2026 年 10 月 26 日读取的网站页面。',
    metaDescription:
      'Localhosted 评测：免费网页目录，收录 1,800 多款本地与自托管 AI 工具。收录内容、条目如何撰写、付费列表、广告与隐私一览。',
    twitterDescription:
      'Localhosted 评测：免费的本地与自托管 AI 工具网页目录。它提供什么、条目如何撰写、哪些内容付费，以及来源未能证实的内容。',
    audience:
      '正在寻找本地或自托管 AI 工具的读者，想了解 Localhosted 目录提供什么、条目如何产生、哪些内容付费，以及哪些信息需要自行再核对。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Localhosted 评测',
    targetKeywords: [
      'localhosted 评测',
      '本地 ai 工具目录',
      '自托管 ai 目录',
      'chatgpt 本地替代方案',
      '本地大模型应用目录',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted 是一个免费的本地与自托管 AI 工具网页目录；据其 2026 年 10 月 26 日的首页，它在 100 多个分类中收录 1,800 多款工具，并提供合集、云端应用的本地替代方案和 1,400 多个视频。** 无需安装任何东西，也没有模型替你运行：你先浏览，再点击链接前往各工具。它自己的“关于”页面称，条目借助 AI 起草，并不代表工具经过测试，同时存在付费展示位。',
    quickAnswerTop: {
      zh: {
        question: 'Localhosted 是在你电脑上运行 AI 的应用吗？',
        answer:
          '不是。Localhosted 是一个网站，列出可在你自己硬件上运行的工具；它不运行模型，不提供下载，也没有版本号。每个条目都会链接到该工具自己的网站或代码仓库。',
        bullets: [
          '可在 [localhosted.com](https://localhosted.com/) 免费浏览；账号为可选，“Add tool”页面接受提交。',
          '可按工具、替代方案、分类、平台或标签浏览，也可用 ⌘K 搜索。',
          '条目页面显示平台、许可证、标签和“最后更新”日期，部分条目会注明是否可离线使用。',
          '“热门”和“新发布”栏目使用 GitHub 的星标与发布数据。',
          '存在可购买的展示位（广告和 Premium 列表），因此置顶位置不等于质量排名。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Localhosted 是什么？', anchor: 'what-is-localhosted' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '价格与付费展示位', anchor: 'pricing' },
      { label: '使用方法', anchor: 'getting-started' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
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
            text: 'Localhosted 是一个免费、闭源的网页目录，收录本地和自托管 AI 工具，条目有 AI 辅助撰写，并设有付费展示位。',
          },
          {
            type: 'plain-terms',
            text: '你打开网站，浏览或搜索一份很长的、可在自己机器上运行的工具清单，再点击进入各工具；Localhosted 本身不安装任何东西。',
          },
        ],
        items: [
          '规模：首页显示 1,800 多款工具、100 多个分类、14 个合集和 1,400 多个视频。',
          '运营方：“关于”页面没有点名任何人；设计师在 logotyper.com 的作品集把 Localhosted 列为项目，一个赞助位称“Eugene”是其背后的设计师和开发者。',
          '条目：描述来自项目网站和 README，并有 AI 辅助；条目并不表示该工具经过安装或基准测试。',
          '费用：广告每个展示位每天 $5 到 $25，Premium 列表可更快通过审核，并带有赞助标签。',
          '维护情况：隐私政策于 2026 年 9 月 30 日更新；没有版本号，也没有公开仓库，因此无法计算“项目停更”警告。',
          '与我们的关系：PromptQuorum 运营自己的[应用目录](/zh/directory)；本评测保持独立，没有联系过 Localhosted。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 26 日读取的 localhosted.com 页面和设计师作品集。PromptQuorum 除了阅读之外没有测试该网站，没有联系其运营方，也无法核实条目是如何产生的。PromptQuorum 自己也运营一个目录，因此请把本文视为利益相关方所做的比较。',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'Localhosted 是什么？',
        content: [
          '**Localhosted 是一个目录网站，不是软件：它介绍可在你自己的电脑或服务器上运行的工具，并提供链接。** 它的口号是“There\'s no place like 127.0.0.1”，首页把它描述为“Local and self-hosted AI, in one directory”。',
          '“关于”页面称，它挑选支持本地使用或自托管的软件，包括应用、库、创作工具、模型以及运行它们的程序。页面没有点名背后的人员。设计师的作品集 [logotyper.com](https://logotyper.com/) 把 Localhosted 列为其项目之一，所做工作包括品牌形象、UI 与 UX、目录开发、GitHub 集成、AI 自动化和变现。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Localhosted 在浏览器中打开；没有下载、应用商店页面或源代码仓库。** 账号为可选，提交工具时才需要。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '任意浏览器', '获取方式': '[localhosted.com](https://localhosted.com/)' },
          { '平台': '官网', '获取方式': '[localhosted.com](https://localhosted.com/)' },
          { '平台': '隐私政策', '获取方式': '[localhosted.com/privacy](https://localhosted.com/privacy)（2026 年 9 月 30 日最后更新）' },
          { '平台': '关于', '获取方式': '[localhosted.com/about](https://localhosted.com/about)' },
          { '平台': '广告', '获取方式': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: '网站不适用版本号。网站提供新闻邮件、RSS 订阅，以及用 Google 或 GitHub 登录；浏览时都不是必需的。',
      },
      pricing: {
        id: 'pricing',
        title: '价格与付费展示位',
        content: [
          '**浏览 Localhosted 不收费；网站靠广告和付费列表盈利。** /advertise 页面每个展示位同一时间只卖给一位广告主，需至少提前两天预订，最长 90 天，并带有醒目的“Ad”标签。以下为 2026 年 10 月 26 日的每日价格。',
        ],
        columns: ['展示位', '出现位置', '每日价格'],
        rows: [
          { '展示位': '全站横幅', '出现位置': '每个页面顶部', '每日价格': '$25' },
          { '展示位': '工具目录', '出现位置': '网格中与被比较工具并列的卡片', '每日价格': '$15' },
          { '展示位': '工具页面', '出现位置': '工具详情旁的卡片', '每日价格': '$10' },
          { '展示位': '指南与视频', '出现位置': '文章和视频教程旁的卡片', '每日价格': '$5' },
        ],
        note: '另外，“关于”页面称，Premium 列表可更快通过审核并获得带赞助标签的置顶展示，而且付费展示位“does not establish that we have tested the tool or rated its performance”（并不表示我们测试过该工具或评价过其性能）。Premium 列表如何排序，页面没有说明。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使用方法',
        content: [
          '**以下步骤遵循首页提供的导航；PromptQuorum 没有完整走过一次搜索流程。**',
        ],
        numberedItems: [
          {
            title: '从合集或分类开始',
            whyItMatters: '像“ChatGPT & Claude alternatives”或“AI for a modest PC”这样的合集，可把 1,800 多款工具缩小成一份短清单。',
          },
          {
            title: '按平台和许可证筛选',
            whyItMatters: '每个条目都显示 macOS、Windows、Linux、Docker 或 Web 等平台以及许可证，因此可以排除不适合你机器的工具。',
          },
          {
            title: '查看“最后更新”日期和 GitHub 数据',
            whyItMatters: '条目带有最后更新日期，热门栏目显示星标和发布数据，有助于发现已被放弃的项目。',
          },
          {
            title: '安装前先打开工具自己的网站',
            whyItMatters: '描述只是根据项目页面起草的摘要，因此项目自己的网站和许可证仍然是权威依据。',
          },
          {
            title: '留意 Ad 或赞助标签',
            whyItMatters: '广告和 Premium 列表带有标签，你可以据此把付费位置与自然条目区分开。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下每一项都来自首页、“关于”页面或来源中列出的其他页面。**',
        ],
        items: [
          '**庞大的目录。** 首页显示 1,800 多款工具、100 多个分类、10 个平台、58 个标签和 65 个替代方案，即云端应用的本地替代。',
          '**工具页面。** 包含描述、平台、许可证、标签、分类和最后更新日期；部分条目注明该工具能否离线使用或需要云端。',
          '**排序与搜索。** 按最新、星标最多或最近更新排序，⌘K 全局搜索，并可按工具、替代方案、分类、平台或标签浏览。',
          '**GitHub 活跃度。** “热门”和“新发布”栏目显示过去一周的星标数和最近的发布版本。',
          '**合集与视频。** 14 个精选合集和 1,400 多个视频；“关于”页面称视频摘要来自创作者的字幕稿和元数据，演示和观点归视频创作者所有。',
          '**提交。** 设有“Add tool”页面；已读取的页面没有说明审核流程。',
          '**其他。** 一个带教程的博客、一份新闻邮件和一个 RSS 订阅。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**Localhosted 是网站，因此访问它会向其服务器以及分析和广告服务商发送请求；2026 年 9 月 30 日最后更新的隐私政策列出了这些服务商。** Google Analytics 使用第一方 Cookie 统计公开页面的访问，已关闭广告信号和广告个性化，并去除了查询字符串。另有一个按工具、按天计数的访问计数器，不使用 Cookie、标识符或 IP 地址；Plausible 在启用时默认不使用分析 Cookie。',
          '账号可包含邮箱、姓名、头像，以及来自 Google 或 GitHub 的登录标识符。新闻邮件由 Resend 处理。广告服务商 Revinel 会接收 IP 地址和所访问页面等技术数据，联盟链接可能带有推荐标识符，所配置的 Neon 数据库位于美国。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些说法来自政策文本；PromptQuorum 没有审计该网站的网络流量。Localhosted 上列出的工具有各自的隐私做法，目录并不为其担保。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**想为云端 AI 应用找本地替代的读者。** 替代方案列表和合集正是从这个问题出发。',
          '**想多一个发现工具渠道的自托管用户。** 平台、许可证和更新日期筛选会有帮助。',
          '**关注新项目的开发者。** “热门”和“新发布”栏目使用 GitHub 数据。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**条目的准确性。** 网站称描述借助 AI 起草，条目并不表示该工具经过安装或基准测试；PromptQuorum 没有逐条核对条目。',
          '**条目如何挑选。** 筛选标准和提交内容的审核只有笼统的描述。',
          '**谁在运营。** “关于”页面没有点名任何人；运营方是根据设计师作品集和一个赞助位推断的。',
          '**排序。** Premium 列表和“星标最多”如何影响排序，没有文档说明。',
          '**源代码、许可证和版本。** 均未说明，也没有找到公开仓库。',
          '**独立性。** 网站出售广告和 Premium 列表，并且没有明确声明自己独立。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用 Localhosted 需要账号吗？',
            a: '浏览不需要；账号用于通过 Google 或 GitHub 登录，以及使用“Add tool”提交页面。',
          },
          {
            q: '那里列出的工具是 Localhosted 测试过的吗？',
            a: '据其“关于”页面，不是：条目只描述文档中记载的功能，并不表示工具经过安装或基准测试，付费展示位也不表示经过测试。',
          },
          {
            q: '它与 PromptQuorum 应用目录有什么不同？',
            a: 'Localhosted 收录的条目多得多，还提供视频和替代方案；PromptQuorum 目录收录的应用较少，但为其中许多应用附有编辑评测、硬件和处理位置（本地或云端）字段以及最后更新警告。PromptQuorum 是利益相关方，所以请两者对照。',
          },
          {
            q: '工具可以付费上榜吗？',
            a: '可以。“关于”页面称，Premium 列表可更快通过审核并获得置顶展示，带有赞助标签；广告则另行出售。',
          },
          {
            q: 'Localhosted 会替我运行 AI 模型吗？',
            a: '不会。它只是目录；要在本地运行模型，需要你自己安装所列工具之一。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Localhosted 是一个庞大、免费的目录，用来寻找本地和自托管 AI 工具，提供合集、云端应用替代方案、GitHub 活跃度数据和视频。但另一方面，条目是 AI 辅助撰写的摘要，而不是测试结果，存在付费列表和广告，运营方没有在它自己的“关于”页面上点名，已读页面对条目如何挑选也只做了笼统说明。它适合想要一份宽泛的起始清单、然后到各工具自己网站上逐一核实的读者；想看编辑评测的读者可以从 PromptQuorum [应用目录](/zh/directory)开始。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Localhosted 首页](https://localhosted.com/) — 数量、功能、导航和广告标签，2026 年 10 月 26 日读取。',
          '[Localhosted 关于](https://localhosted.com/about) — 挑选方式、AI 辅助描述、视频摘要和 Premium 列表，2026 年 10 月 26 日读取。',
          '[Localhosted 隐私政策](https://localhosted.com/privacy) — 分析、Cookie、账号、服务商和数据位置，2026 年 9 月 30 日最后更新。',
          '[Localhosted 广告页面](https://localhosted.com/advertise) — 展示位、价格和预订规则，2026 年 10 月 26 日读取。',
          '[Logotyper 作品集](https://logotyper.com/) — 把 Localhosted 列为项目并说明其范围，2026 年 10 月 26 日读取。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地 AI 应用目录](/zh/directory) — PromptQuorum 的本地 AI 应用目录，附评测和筛选。',
          '[本地大模型训练与运维对比](/zh/power-local-llm/local-llm-train-operate-compared) — 与模型中心最接近的类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Overview & Reference',
    heroImage: '/images/localhosted-review-hero-ko.webp',
    title: 'Localhosted 리뷰: 로컬·셀프호스팅 AI 도구 웹 디렉터리',
    seoTitle: 'Localhosted 리뷰: 로컬 AI 도구 디렉터리',
    intro:
      'Localhosted는 앱, 모델 서버, 코딩 어시스턴트, 창작 도구 등 로컬·셀프호스팅 AI 소프트웨어를 컬렉션, 대안, 영상 가이드와 함께 정리한 무료 웹사이트입니다. 설치하는 앱이 아니며 사용자를 대신해 모델을 실행하지도 않으므로, 이 리뷰는 [PromptQuorum 앱 디렉터리](/ko/directory)와 나란히 놓인 디렉터리로서 살펴봅니다. 2026년 10월 26일에 확인한 사이트를 반영합니다.',
    metaDescription:
      'Localhosted 리뷰: 로컬·셀프호스팅 AI 도구 1,800개 이상을 모은 무료 웹 디렉터리. 수록 내용, 항목 작성 방식, 유료 등재, 광고, 개인정보를 살펴봅니다.',
    twitterDescription:
      'Localhosted 리뷰: 로컬·셀프호스팅 AI 도구를 모은 무료 웹 디렉터리. 제공 기능, 항목 작성 방식, 유료 요소, 출처가 확인하지 못한 내용.',
    audience:
      '로컬 또는 셀프호스팅 AI 도구를 찾으면서 Localhosted 디렉터리가 무엇을 제공하는지, 항목이 어떻게 만들어지는지, 무엇이 유료인지, 무엇을 다시 확인해야 하는지 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Localhosted 리뷰',
    targetKeywords: [
      'localhosted 리뷰',
      '로컬 ai 도구 디렉터리',
      '셀프호스팅 ai 디렉터리',
      'chatgpt 대신 쓰는 로컬 ai',
      '로컬 llm 앱 디렉터리',
      'localhosted.com',
    ],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Localhosted는 로컬·셀프호스팅 AI 도구를 모은 무료 웹 디렉터리로, 2026년 10월 26일 홈페이지에 따르면 100개 이상의 카테고리에 1,800개 이상의 도구와 컬렉션, 클라우드 앱의 로컬 대안, 1,400개 이상의 영상을 수록합니다.** 설치할 것도, 사용자를 대신해 실행되는 모델도 없습니다. 둘러본 뒤 각 도구의 링크를 따라가면 됩니다. About 페이지는 항목이 AI의 도움으로 작성되며 도구를 테스트했다는 뜻이 아니라고 밝히고, 유료 배치가 있다고 설명합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Localhosted는 컴퓨터에서 AI를 실행하는 앱입니까?',
        answer:
          '아니요. Localhosted는 직접 하드웨어에서 실행할 수 있는 도구를 나열하는 웹사이트이며, 모델을 실행하지 않고 다운로드도 없으며 버전 번호도 없습니다. 각 항목은 해당 도구의 공식 사이트나 저장소로 연결됩니다.',
        bullets: [
          '[localhosted.com](https://localhosted.com/)에서 무료로 둘러볼 수 있으며, 계정은 선택 사항이고 "Add tool" 페이지에서 도구를 제출할 수 있습니다.',
          '도구, 대안, 카테고리, 플랫폼, 태그별로 탐색하거나 ⌘K로 검색할 수 있습니다.',
          '항목 페이지에는 플랫폼, 라이선스, 태그, "last updated" 날짜가 표시되며, 일부는 오프라인 사용 여부도 적혀 있습니다.',
          '인기 및 신규 릴리스 섹션은 GitHub의 스타와 릴리스 데이터를 사용합니다.',
          '광고와 Premium 등재 같은 판매 배치가 있으므로 상단 노출 위치가 품질 순위는 아닙니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Localhosted란?', anchor: 'what-is-localhosted' },
      { label: '이용 방법', anchor: 'get-it' },
      { label: '가격과 유료 배치', anchor: 'pricing' },
      { label: '사용 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'Localhosted는 로컬·셀프호스팅 AI 도구를 정리한 무료 비공개 웹 디렉터리로, 항목 작성에 AI가 쓰이고 유료 배치가 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '웹사이트를 열어 내 컴퓨터에서 실행할 수 있는 도구의 긴 목록을 둘러보거나 검색한 뒤 각 도구로 이동하는 방식이며, Localhosted 자체에서 설치되는 것은 없습니다.',
          },
        ],
        items: [
          '규모: 홈페이지에는 1,800개 이상의 도구, 100개 이상의 카테고리, 14개의 컬렉션, 1,400개 이상의 영상이 표시됩니다.',
          '운영자: About 페이지에는 이름이 나와 있지 않습니다. 디자이너의 포트폴리오 logotyper.com이 Localhosted를 프로젝트로 소개하고, 스폰서 슬롯은 "Eugene"을 Localhosted의 디자이너 겸 개발자라고 부릅니다.',
          '항목: 설명은 프로젝트 사이트와 README에서 가져오며 AI의 도움을 받습니다. 등재가 도구를 설치하거나 벤치마크했다는 뜻은 아닙니다.',
          '비용: 광고는 슬롯당 하루 $5에서 $25이며, Premium 등재는 더 빠른 검토와 스폰서 표시를 받습니다.',
          '유지 관리: 개인정보 처리방침은 2026년 9월 30일에 업데이트되었습니다. 버전 번호도 공개 저장소도 없어 방치된 프로젝트 경고는 계산할 수 없습니다.',
          '우리와의 관계: PromptQuorum은 자체 [앱 디렉터리](/ko/directory)를 운영합니다. 이 리뷰는 독립적으로 작성되었으며 Localhosted에는 연락하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 읽은 localhosted.com의 페이지와 디자이너 포트폴리오에 근거합니다. PromptQuorum은 사이트를 읽은 것 외에는 테스트하지 않았고, 운영자에게 연락하지 않았으며, 항목이 어떻게 만들어지는지 확인할 수 없습니다. PromptQuorum도 자체 디렉터리를 운영하므로 이해관계자에 의한 비교로 받아들이십시오.',
          },
        ],
      },
      overview: {
        id: 'what-is-localhosted',
        title: 'Localhosted란?',
        content: [
          '**Localhosted는 소프트웨어가 아니라 카탈로그 웹사이트로, 내 컴퓨터나 서버에서 실행되는 도구를 소개하고 링크합니다.** 슬로건은 "There\'s no place like 127.0.0.1"이며, 홈페이지는 이를 "Local and self-hosted AI, in one directory"로 소개합니다.',
          'About 페이지에 따르면 로컬 사용이나 셀프호스팅을 지원하는 소프트웨어(앱, 라이브러리, 창작 도구, 모델, 이를 실행하는 프로그램)를 선별합니다. 운영하는 사람의 이름은 밝히지 않습니다. 디자이너의 포트폴리오 [logotyper.com](https://logotyper.com/)은 Localhosted를 프로젝트로 소개하며, 브랜드 아이덴티티, UI·UX, 디렉터리 개발, GitHub 연동, AI 자동화, 수익화를 수행한 작업으로 적고 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '이용 방법',
        content: [
          '**Localhosted는 브라우저에서 열며 다운로드, 앱 스토어 등록, 소스 저장소는 없습니다.** 계정은 선택 사항이며 도구 제출에 필요합니다.',
        ],
        columns: ['플랫폼', '이용 위치'],
        rows: [
          { '플랫폼': '모든 브라우저', '이용 위치': '[localhosted.com](https://localhosted.com/)' },
          { '플랫폼': '웹사이트', '이용 위치': '[localhosted.com](https://localhosted.com/)' },
          { '플랫폼': '개인정보 처리방침', '이용 위치': '[localhosted.com/privacy](https://localhosted.com/privacy) (2026년 9월 30일 마지막 업데이트)' },
          { '플랫폼': '소개', '이용 위치': '[localhosted.com/about](https://localhosted.com/about)' },
          { '플랫폼': '광고', '이용 위치': '[localhosted.com/advertise](https://localhosted.com/advertise)' },
        ],
        note: '웹사이트에는 적용되는 버전이 없습니다. 뉴스레터, RSS 피드, Google 또는 GitHub 로그인이 제공되며 둘러보는 데는 어느 것도 필요하지 않습니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격과 유료 배치',
        content: [
          '**Localhosted를 둘러보는 데는 비용이 들지 않으며, 사이트는 광고와 유료 등재로 수익을 냅니다.** /advertise 페이지는 광고주 한 곳당 하나의 배치를 판매하며, 최소 이틀 전에 예약해야 하고 최대 90일까지 가능하며 눈에 띄는 "Ad" 표시가 붙습니다. 가격은 2026년 10월 26일 기준 하루 요금입니다.',
        ],
        columns: ['배치', '표시 위치', '1일 가격'],
        rows: [
          { '배치': '사이트 전체 배너', '표시 위치': '모든 페이지 상단', '1일 가격': '$25' },
          { '배치': '도구 디렉터리', '표시 위치': '비교 대상 도구 옆 그리드의 카드', '1일 가격': '$15' },
          { '배치': '도구 페이지', '표시 위치': '도구 상세 정보 옆 카드', '1일 가격': '$10' },
          { '배치': '가이드와 영상', '표시 위치': '글과 영상 설명 옆 카드', '1일 가격': '$5' },
        ],
        note: '별도로 About 페이지는 Premium 등재가 더 빠른 검토와 스폰서 표시가 붙은 우선 노출을 받으며, 유료 배치가 "도구를 테스트했거나 성능을 평가했음을 뜻하지 않는다"고 밝힙니다. Premium 등재가 어떻게 순위에 반영되는지는 설명되어 있지 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '사용 방법',
        content: [
          '**아래 단계는 홈페이지가 제공하는 탐색 방식을 따른 것이며, PromptQuorum은 전체 검색 과정을 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '컬렉션이나 카테고리에서 시작',
            whyItMatters: '"ChatGPT & Claude alternatives"나 "AI for a modest PC" 같은 컬렉션은 1,800개 이상의 도구를 짧은 목록으로 좁혀 줍니다.',
          },
          {
            title: '플랫폼과 라이선스로 필터링',
            whyItMatters: '각 항목에는 macOS, Windows, Linux, Docker, Web 같은 플랫폼과 라이선스가 표시되므로 내 기기에 맞지 않는 도구를 걸러낼 수 있습니다.',
          },
          {
            title: '"last updated" 날짜와 GitHub 데이터 확인',
            whyItMatters: '항목에는 마지막 업데이트 날짜가 있고 인기 섹션에는 스타와 릴리스 데이터가 표시되어 방치된 프로젝트를 가려내는 데 도움이 됩니다.',
          },
          {
            title: '설치 전에 도구의 공식 사이트 열기',
            whyItMatters: '설명은 프로젝트 페이지를 바탕으로 작성한 요약이므로 프로젝트의 공식 사이트와 라이선스가 최종 기준입니다.',
          },
          {
            title: 'Ad 또는 스폰서 표시 확인',
            whyItMatters: '광고와 Premium 등재에는 표시가 붙어 있어 유료 슬롯과 일반 항목을 구분할 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 홈페이지, About 페이지 또는 출처에 명시된 다른 페이지에서 나온 것입니다.**',
        ],
        items: [
          '**대규모 카탈로그.** 홈페이지에는 1,800개 이상의 도구, 100개 이상의 카테고리, 10개의 플랫폼, 58개의 태그, 클라우드 앱을 로컬로 바꾸는 65개의 대안이 표시됩니다.',
          '**도구 페이지.** 설명, 플랫폼, 라이선스, 태그, 카테고리, 마지막 업데이트 날짜가 있으며, 일부 항목은 도구가 오프라인에서 작동하는지 클라우드가 필요한지 적고 있습니다.',
          '**정렬과 검색.** 최신순, 스타순, 최근 업데이트순, ⌘K 전역 검색, 도구·대안·카테고리·플랫폼·태그별 탐색을 제공합니다.',
          '**GitHub 활동.** 지난 한 주의 스타 수와 최근 릴리스 버전을 보여 주는 인기 및 신규 릴리스 섹션이 있습니다.',
          '**컬렉션과 영상.** 14개의 큐레이션 컬렉션과 1,400개 이상의 영상이 있으며, About 페이지에 따르면 영상은 제작자의 자막과 메타데이터를 요약한 것이고 시연과 의견은 영상 제작자의 것입니다.',
          '**제출.** "Add tool" 페이지가 있으나 검토 과정은 확인한 페이지에 설명되어 있지 않습니다.',
          '**부가 기능.** 사용법 블로그, 뉴스레터, RSS 피드가 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**Localhosted는 웹사이트이므로 방문하면 서버와 분석·광고 제공업체로 요청이 전송되며, 2026년 9월 30일에 마지막으로 업데이트된 개인정보 처리방침이 이를 나열합니다.** Google Analytics는 자사 쿠키로 공개 페이지 방문을 측정하며, 광고 신호와 광고 개인화는 꺼져 있고 쿼리 문자열은 제거됩니다. 도구별·일별 방문 카운터는 쿠키, 식별자, IP 주소를 사용하지 않으며, Plausible은 활성화된 경우 기본적으로 분석 쿠키를 사용하지 않습니다.',
          '계정에는 이메일, 이름, 프로필 이미지, Google 또는 GitHub 로그인 식별자가 포함될 수 있습니다. 뉴스레터 이메일은 Resend가 처리합니다. 광고 제공업체 Revinel은 IP 주소와 해당 페이지 같은 기술 데이터를 받고, 제휴 링크에는 추천 식별자가 포함될 수 있으며, 설정된 Neon 데이터베이스는 미국에 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이러한 설명은 방침 문구에서 가져온 것이며 PromptQuorum은 사이트의 네트워크 트래픽을 점검하지 않았습니다. Localhosted에 등재된 도구에는 각자의 개인정보 처리 방식이 있으며 디렉터리가 이를 보증하지 않습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        items: [
          '**클라우드 AI 앱을 대체할 로컬 앱을 찾는 분.** 대안 목록과 컬렉션이 바로 그 질문에서 출발합니다.',
          '**도구를 발견할 곳을 하나 더 원하는 셀프호스팅 사용자.** 플랫폼, 라이선스, 업데이트 날짜 필터가 도움이 됩니다.',
          '**새 프로젝트를 지켜보는 개발자.** 인기 및 신규 릴리스 섹션은 GitHub 데이터를 사용합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**항목의 정확성.** 사이트는 설명이 AI의 도움으로 작성되며 등재가 도구를 설치하거나 벤치마크했다는 뜻이 아니라고 밝힙니다. PromptQuorum은 개별 항목을 확인하지 않았습니다.',
          '**등재 도구의 선정 방식.** 선정 기준과 제출 검토는 일반적인 수준으로만 설명되어 있습니다.',
          '**운영자.** About 페이지에는 이름이 없으며, 운영자는 디자이너의 포트폴리오와 스폰서 슬롯에서 추정한 것입니다.',
          '**순위.** Premium 등재와 "most stars"가 정렬에 어떻게 작용하는지는 문서화되어 있지 않습니다.',
          '**소스 코드, 라이선스, 버전.** 어느 것도 명시되어 있지 않으며 공개 저장소를 찾지 못했습니다.',
          '**독립성.** 사이트는 광고와 Premium 등재를 판매하며 독립성에 대해 명시적으로 밝히지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Localhosted를 쓰려면 계정이 필요합니까?',
            a: '둘러보는 데는 필요하지 않습니다. 계정은 Google 또는 GitHub 로그인과 "Add tool" 제출 페이지를 위해 제공됩니다.',
          },
          {
            q: '그곳에 등재된 도구는 Localhosted가 테스트한 것입니까?',
            a: 'About 페이지에 따르면 아니요. 등재는 문서화된 기능을 설명할 뿐 도구를 설치하거나 벤치마크했다는 뜻이 아니며, 유료 배치 역시 테스트했다는 뜻이 아닙니다.',
          },
          {
            q: 'PromptQuorum 앱 디렉터리와 무엇이 다릅니까?',
            a: 'Localhosted는 훨씬 많은 항목을 수록하고 영상과 대안을 더합니다. PromptQuorum 디렉터리는 앱 수가 적은 대신 많은 앱에 편집 리뷰, 하드웨어·처리 위치(로컬/클라우드) 항목, 마지막 업데이트 경고를 붙입니다. PromptQuorum은 이해관계자이므로 두 곳을 모두 비교하십시오.',
          },
          {
            q: '도구가 비용을 내고 등재될 수 있습니까?',
            a: '네. About 페이지에 따르면 Premium 등재는 더 빠른 검토와 스폰서 표시가 붙은 우선 노출을 받으며, 광고는 별도로 판매됩니다.',
          },
          {
            q: 'Localhosted가 AI 모델을 대신 실행해 줍니까?',
            a: '아니요. 카탈로그일 뿐이며, 모델을 로컬에서 실행하려면 등재된 도구 중 하나를 직접 설치해야 합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Localhosted는 로컬·셀프호스팅 AI 도구를 찾기 위한 크고 무료인 카탈로그로, 컬렉션, 클라우드 앱 대안, GitHub 활동 데이터, 영상을 제공합니다. 반면 항목은 테스트 결과가 아니라 AI의 도움을 받은 요약이고, 유료 등재와 광고가 있으며, 자체 About 페이지에 운영자 이름이 없고, 읽은 페이지에는 항목 선정 방식이 일반적인 수준으로만 설명되어 있습니다. 폭넓은 출발 목록을 원하고 이후 각 도구를 공식 사이트에서 직접 확인하는 분에게 적합합니다. 편집 리뷰를 원하는 분은 PromptQuorum [앱 디렉터리](/ko/directory)에서 시작할 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Localhosted 홈페이지](https://localhosted.com/) — 수치, 기능, 탐색 방식, 광고 표시. 2026년 10월 26일 확인.',
          '[Localhosted About](https://localhosted.com/about) — 선별, AI 보조 설명, 영상 요약, Premium 등재. 2026년 10월 26일 확인.',
          '[Localhosted 개인정보 처리방침](https://localhosted.com/privacy) — 분석, 쿠키, 계정, 제공업체, 데이터 위치. 2026년 9월 30일 마지막 업데이트.',
          '[Localhosted 광고 페이지](https://localhosted.com/advertise) — 배치, 가격, 예약 규칙. 2026년 10월 26일 확인.',
          '[Logotyper 포트폴리오](https://logotyper.com/) — Localhosted를 프로젝트와 작업 범위로 소개. 2026년 10월 26일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 AI 앱 디렉터리](/ko/directory) — 리뷰와 필터를 갖춘 PromptQuorum의 로컬 AI 앱 디렉터리.',
          '[로컬 LLM 학습·운영 비교](/ko/power-local-llm/local-llm-train-operate-compared) — 모델 허브와 가장 가까운 카테고리 비교.',
        ],
      },
    },
  },
}
