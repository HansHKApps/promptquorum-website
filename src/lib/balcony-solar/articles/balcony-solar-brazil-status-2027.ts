// Slug: balcony-solar-brazil-status-2027
// BSOL-32 — Tier 5 (2027 Trends), legislation/market status, semi_annual.
// SCOPE NOTE: balcony-solar-portugal-brazil.ts already covers Brazil's legal-status
// facts (ANEEL REN 1.059/2023, informal gray zone, INMETRO certification) as half of
// a Portugal/Brazil comparison. This article is a deeper Brazil-only country dossier:
// it goes further on the regulatory lineage (RN 482/2012 -> Lei 14.300/2022 ->
// REN 1.059/2023), covers Brazil's broader distributed-generation market scale to
// contrast with the balcony-specific gap, and is NOT a subsidy-program piece — Brazil's
// large distributed-generation solar market is explicitly NOT balcony-plug-in-specific,
// and this article does not conflate the two. Cross-links to and from
// balcony-solar-portugal-brazil.ts rather than duplicating its Portugal comparison.
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-en.webp',
    title: 'Balcony Solar in Brazil: Status Report 2027',
    seoTitle: 'Balcony Solar in Brazil: Status Report 2027',
    intro: 'Brazil has one of the world\'s largest distributed-generation solar markets — but that infrastructure and market culture is not balcony-plug-in-specific. This page is a status report on the specific gap: no dedicated regulation exists yet for direct-to-outlet, plug-and-play balcony solar, even though the general distributed-generation framework it would fall under is well established and heavily used.',
    metaDescription: 'Brazil\'s Lei 14.300/2022 regulates micro- and mini-geração distribuída, building on ANEEL\'s Resolução Normativa 482/2012. But plug-and-play balcony solar specifically has no dedicated regulation, per MIT Technology Review Brasil (May 2026) — despite Brazil adding 5+ GW in distributed generation in early 2025 alone.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers and market watchers assessing Brazil beyond the Portugal/Brazil legal comparison',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**Brazil has no dedicated regulation for plug-and-play, direct-to-outlet balcony solar — a Brazilian source (MIT Technology Review Brasil, May 2026) explicitly states the category still has no specific rules, making its adoption "more incipient" than in markets with dedicated frameworks.** This is distinct from Brazil\'s general distributed-generation solar market, which is large and well-regulated: Lei 14.300/2022 governs micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW), building on the earlier Resolução Normativa (RN) 482/2012 from Brazil\'s national electricity regulator, ANEEL. That general framework is heavily used — Brazil added more than 5 GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting more than 5.4 million consumer units, per ANEEL data cited in Brazilian press — but none of that scale is balcony-plug-in-specific. Brazil has the infrastructure and market culture for distributed solar broadly; the specific plug-in-balcony product category is the part still waiting on dedicated rules.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Brazil?',
        answer: 'Not banned, but not specifically regulated either — per MIT Technology Review Brasil (May 2026), the plug-and-play, direct-to-outlet balcony solar model still has no specific regulation in Brazil, making its adoption more incipient than in markets with dedicated frameworks. This is separate from Brazil\'s large general distributed-generation solar market: Lei 14.300/2022 (building on ANEEL\'s earlier RN 482/2012) regulates micro-geração distribuída up to 75kW and mini-geração distribuída from 75kW to 5MW, and Brazil added over 5 GW in distributed generation in early 2025 alone, surpassing 42 GW installed across 5.4M+ consumer units. That scale reflects rooftop-owned systems under net-metering-style credits, not the plug-in-balcony category specifically.',
        bullets: [
          'MIT Technology Review Brasil (May 2026) explicitly states plug-and-play balcony solar has no specific regulation in Brazil, calling its adoption "more incipient" than in international markets with dedicated frameworks',
          'Regulatory lineage for Brazil\'s general distributed-generation framework: ANEEL\'s Resolução Normativa 482/2012 first established rules, later superseded/updated by Lei 14.300/2022, which is implemented via ANEEL\'s REN 1.059/2023',
          'Lei 14.300/2022 covers micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW) — general rooftop/owned-system categories, with no documented small-plug-in-kit carve-out',
          'Brazil added 5+ GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting 5.4M+ consumer units, per ANEEL data — general DG market scale, explicitly not balcony-specific',
          'Frame: Brazil has the infrastructure and market culture for distributed solar broadly; the plug-in-balcony product category specifically has no dedicated rules yet — an emerging/gap story, not a subsidy-program story',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Regulatory Gap: Plug-In Solar Specifically', anchor: '#regulatory-gap' },
      { label: 'The Framework It Would Fall Under', anchor: '#dg-framework' },
      { label: 'Brazil\'s Distributed Generation Market Is Not the Same Thing', anchor: '#dg-market-scale' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil (May 2026) explicitly states plug-and-play, direct-to-outlet balcony solar still has no specific regulation in Brazil — this is the headline fact of this status report.',
          'Brazil\'s general distributed-generation framework has a clear regulatory lineage: ANEEL\'s Resolução Normativa 482/2012 (2012) established the original rules, superseded/updated by Lei 14.300/2022, implemented in detail via ANEEL\'s REN 1.059/2023.',
          'Lei 14.300/2022 covers micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW) — general categories for owned, typically rooftop, systems with no documented plug-in-kit-specific carve-out.',
          'Brazil added more than 5 GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting 5.4M+ consumer units, per ANEEL data — a huge market, but a general one, not a balcony-plug-in one.',
          'The correct framing: Brazil has the infrastructure and market culture for distributed solar broadly, but the plug-in-balcony product category specifically has no dedicated regulation yet — do not conflate Brazil\'s large general DG market with a balcony-solar subsidy program, because no such program exists.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'The Regulatory Gap: Plug-In Solar Specifically',
        content: [
          '**A Brazilian source — MIT Technology Review Brasil, May 2026 — explicitly states that the plug-and-play, direct-to-outlet balcony solar model still has no specific regulation in Brazil, making its adoption "more incipient" compared to international markets that have dedicated frameworks.** This is the central finding of this status report: Brazil is not short on distributed solar policy in general (see below), but the specific plug-in-balcony product category — small, consumer-installed, direct-to-outlet kits, as distinct from professionally installed rooftop systems — has not been separately addressed by regulators.',
          'This is a similar shape to the gap findings for Japan and other emerging markets covered elsewhere in this cluster: a country with substantial solar infrastructure and policy, where the specific balcony/plug-in product category simply has not been separately legislated yet.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'The Framework It Would Fall Under',
        content: [
          '**Brazil\'s general distributed-generation solar regulation has a clear lineage.** ANEEL\'s Resolução Normativa (RN) 482/2012 first established Brazil\'s net-metering-style compensation system for distributed generation. That framework was substantially updated and given statutory backing by Lei 14.300/2022, Brazil\'s Distributed Generation Legal Framework law, which formally defines micro-geração distribuída (systems up to 75kW) and mini-geração distribuída (75kW to 5MW). ANEEL\'s REN 1.059/2023 is the regulator\'s implementing resolution that operationalizes Lei 14.300/2022\'s provisions in technical detail — connection requests, technical study requirements, bidirectional metering, and INMETRO-certified inverter documentation, applied uniformly regardless of system size.',
          'None of these three instruments — RN 482/2012, Lei 14.300/2022, or REN 1.059/2023 — carve out a separate, lighter-touch process for small plug-in kits. A balcony solar system in Brazil technically falls under the same micro-geração process as a full rooftop installation, which is the structural reason the category remains, per MIT Technology Review Brasil, more incipient than in markets with a dedicated small-system exemption.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'Brazil\'s Distributed Generation Market Is Not the Same Thing',
        content: [
          '**Brazil added more than 5 GW in micro- and mini-geração distribuída in early 2025 alone, surpassing 42 GW of installed distributed-generation capacity and benefiting more than 5.4 million consumer units, according to ANEEL data cited in Brazilian press.** This is one of the largest distributed-generation solar markets in the world by these measures.',
          'That scale reflects owned, typically rooftop-installed systems operating under Lei 14.300/2022\'s net-metering-style credit system — it is general distributed-generation market growth, not evidence of a balcony-plug-in-specific market or program. It is easy to read Brazil\'s large DG numbers and assume a dedicated balcony solar subsidy or adoption program exists; that would be a conflation this page deliberately avoids. Brazil has the underlying infrastructure, grid-interconnection process, and market familiarity with distributed solar that could support balcony solar adoption — but the specific product category has not yet been addressed with dedicated rules.',
        ],
        callouts: [
          { type: 'warning', text: 'Do not read Brazil\'s 5+ GW / 42 GW / 5.4M-consumer-unit distributed-generation figures as balcony-solar-specific statistics. They describe the general DG market under Lei 14.300/2022, which balcony solar would technically fall under but which has no dedicated small-plug-in-kit carve-out or separate reporting category.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar legal in Brazil?', a: 'It\'s not banned, but plug-and-play balcony solar specifically has no dedicated regulation — per MIT Technology Review Brasil (May 2026), this makes its adoption more incipient than in markets with dedicated frameworks. It would technically fall under Brazil\'s general micro-geração distribuída process (Lei 14.300/2022), which has no small-kit carve-out.' },
          { q: 'What is Lei 14.300/2022?', a: 'Brazil\'s Distributed Generation Legal Framework law, which formally defines micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW), building on ANEEL\'s earlier Resolução Normativa 482/2012 and implemented in technical detail via ANEEL\'s REN 1.059/2023.' },
          { q: 'Does Brazil have a balcony solar subsidy program?', a: 'No. Brazil has a large general distributed-generation solar market — 5+ GW added in early 2025 alone, 42 GW+ installed, 5.4M+ consumer units — but this reflects owned/rooftop systems under Lei 14.300/2022\'s net-metering-style framework, not a balcony-plug-in-specific program. No dedicated balcony solar subsidy or adoption program exists.' },
          { q: 'Why is balcony solar adoption slower in Brazil than in some other markets?', a: 'Per MIT Technology Review Brasil (May 2026), the structural reason is the lack of a dedicated regulatory carve-out — plug-in kits fall under the same formal micro-geração process as full rooftop installations, with no lighter-touch registration path for small systems, unlike markets with an explicit small-system exemption.' },
          { q: 'How does this relate to the Portugal/Brazil legal comparison on this site?', a: 'The Portugal/Brazil comparison article covers Brazil\'s legal-status gray zone alongside Portugal\'s codified exemption. This page goes deeper on Brazil specifically: the regulatory lineage (RN 482/2012 to Lei 14.300/2022 to REN 1.059/2023) and the contrast between Brazil\'s large general distributed-generation market and the still-unaddressed balcony-plug-in category.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar in Portugal & Brazil: Legal Status Compared](/balcony-solar/balcony-solar-portugal-brazil) — the Portugal/Brazil legal-status comparison this dossier expands on',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
          '[Is Balcony Solar Legal in Japan? 2027 Status Report](/balcony-solar/balcony-solar-japan-status-2027) — a similarly shaped emerging/gap market',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-de.webp',
    title: 'Balkonkraftwerke in Brasilien: Statusbericht 2027',
    seoTitle: 'Balkonkraftwerke in Brasilien: Statusbericht 2027',
    intro: 'Brasilien hat einen der weltweit größten Märkte für dezentrale Solarstromerzeugung (geração distribuída) — doch diese Infrastruktur und Marktkultur ist nicht speziell auf steckerfertige Balkonkraftwerke ausgerichtet. Diese Seite ist ein Statusbericht zu genau dieser Lücke: Für direkt an die Steckdose angeschlossene, steckerfertige Balkonkraftwerke existiert noch keine eigene Regelung, obwohl der allgemeine Rahmen für dezentrale Erzeugung, unter den sie fallen würden, gut etabliert und stark genutzt ist.',
    metaDescription: 'Brasiliens Lei 14.300/2022 regelt die micro- und mini-geração distribuída und baut auf der früheren Resolução Normativa 482/2012 der ANEEL auf. Für steckerfertige Balkonkraftwerke existiert laut MIT Technology Review Brasil (Mai 2026) jedoch keine eigene Regelung — obwohl Brasilien allein Anfang 2025 mehr als 5 GW an dezentraler Erzeugung hinzugefügt hat.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Käufer von Balkonkraftwerken und Marktbeobachter, die Brasilien über den Portugal/Brasilien-Rechtsvergleich hinaus einschätzen wollen',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**Brasilien hat keine eigene Regelung für steckerfertige, direkt an die Steckdose angeschlossene Balkonkraftwerke — eine brasilianische Quelle (MIT Technology Review Brasil, Mai 2026) stellt ausdrücklich fest, dass für diese Kategorie noch keine spezifischen Regeln bestehen, was ihre Verbreitung „unausgereifter" macht als in Märkten mit eigenen Rahmenwerken.** Das unterscheidet sich von Brasiliens allgemeinem Markt für dezentrale Solarstromerzeugung, der groß und gut reguliert ist: Lei 14.300/2022 regelt die micro-geração distribuída (bis 75kW) und die mini-geração distribuída (75kW–5MW) und baut auf der früheren Resolução Normativa (RN) 482/2012 der brasilianischen nationalen Stromregulierungsbehörde ANEEL auf. Dieser allgemeine Rahmen wird intensiv genutzt — Brasilien hat allein Anfang 2025 mehr als 5 GW an micro-/mini-geração distribuída hinzugefügt, womit die installierte Kapazität 42 GW überschritt und mehr als 5,4 Millionen Verbrauchseinheiten profitierten, laut ANEEL-Daten, die in der brasilianischen Presse zitiert werden — doch nichts von dieser Größenordnung ist speziell auf steckerfertige Balkonkraftwerke bezogen. Brasilien verfügt über die Infrastruktur und Marktkultur für dezentrale Solarenergie im Allgemeinen; die spezifische Produktkategorie der steckerfertigen Balkonkraftwerke wartet noch auf eigene Regeln.',
    quickAnswerTop: {
      de: {
        question: 'Ist ein Balkonkraftwerk in Brasilien legal?',
        answer: 'Nicht verboten, aber auch nicht eigens geregelt — laut MIT Technology Review Brasil (Mai 2026) gibt es für das steckerfertige, direkt an die Steckdose angeschlossene Balkonkraftwerk-Modell in Brasilien noch keine spezifische Regelung, was seine Verbreitung unausgereifter macht als in Märkten mit eigenen Rahmenwerken. Das ist getrennt von Brasiliens großem allgemeinen Markt für dezentrale Solarstromerzeugung zu betrachten: Lei 14.300/2022 (aufbauend auf der früheren RN 482/2012 der ANEEL) regelt die micro-geração distribuída bis 75kW und die mini-geração distribuída von 75kW bis 5MW, und Brasilien hat allein Anfang 2025 über 5 GW an dezentraler Erzeugung hinzugefügt, womit die installierte Kapazität 42 GW über 5,4 Mio. Verbrauchseinheiten hinweg überschritt. Diese Größenordnung spiegelt eigene, ans Netz angeschlossene Dachanlagen unter einem Modell mit Einspeisegutschriften wider, nicht speziell die Kategorie der steckerfertigen Balkonkraftwerke.',
        bullets: [
          'MIT Technology Review Brasil (Mai 2026) stellt ausdrücklich fest, dass steckerfertige Balkonkraftwerke in Brasilien keine spezifische Regelung haben, und bezeichnet ihre Verbreitung als „unausgereifter" als in internationalen Märkten mit eigenen Rahmenwerken',
          'Regulatorische Entwicklung von Brasiliens allgemeinem Rahmen für dezentrale Erzeugung: Die Resolução Normativa 482/2012 der ANEEL legte zunächst die Regeln fest, später abgelöst/aktualisiert durch Lei 14.300/2022, umgesetzt über die REN 1.059/2023 der ANEEL',
          'Lei 14.300/2022 umfasst die micro-geração distribuída (bis 75kW) und die mini-geração distribuída (75kW–5MW) — allgemeine Kategorien für Dach-/Eigentumsanlagen, ohne dokumentierte Ausnahme für kleine Stecker-Kits',
          'Brasilien hat allein Anfang 2025 über 5 GW an micro-/mini-geração distribuída hinzugefügt, womit die installierte Kapazität 42 GW überschritt und über 5,4 Mio. Verbrauchseinheiten profitierten, laut ANEEL-Daten — Größenordnung des allgemeinen Marktes für dezentrale Erzeugung, ausdrücklich nicht balkonspezifisch',
          'Einordnung: Brasilien verfügt über die Infrastruktur und Marktkultur für dezentrale Solarenergie im Allgemeinen; die spezifische Produktkategorie der steckerfertigen Balkonkraftwerke hat noch keine eigenen Regeln — eine aufkommende Lücken-Geschichte, keine Förderprogramm-Geschichte',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Die regulatorische Lücke: Steckerfertige Solaranlagen im Speziellen', anchor: '#regulatory-gap' },
      { label: 'Der Rahmen, unter den es fallen würde', anchor: '#dg-framework' },
      { label: 'Brasiliens Markt für dezentrale Erzeugung ist nicht dasselbe', anchor: '#dg-market-scale' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil (Mai 2026) stellt ausdrücklich fest, dass steckerfertige, direkt an die Steckdose angeschlossene Balkonkraftwerke in Brasilien noch keine spezifische Regelung haben — das ist die zentrale Aussage dieses Statusberichts.',
          'Brasiliens allgemeiner Rahmen für dezentrale Erzeugung hat eine klare regulatorische Entwicklung: Die Resolução Normativa 482/2012 (2012) der ANEEL legte die ursprünglichen Regeln fest, abgelöst/aktualisiert durch Lei 14.300/2022, im Detail umgesetzt über die REN 1.059/2023 der ANEEL.',
          'Lei 14.300/2022 umfasst die micro-geração distribuída (bis 75kW) und die mini-geração distribuída (75kW–5MW) — allgemeine Kategorien für eigene, meist auf dem Dach installierte Anlagen, ohne dokumentierte Ausnahme speziell für Stecker-Kits.',
          'Brasilien hat allein Anfang 2025 über 5 GW an micro-/mini-geração distribuída hinzugefügt, womit die installierte Kapazität 42 GW überschritt und über 5,4 Mio. Verbrauchseinheiten profitierten, laut ANEEL-Daten — ein riesiger, aber allgemeiner Markt, kein balkonspezifischer.',
          'Die richtige Einordnung: Brasilien verfügt über die Infrastruktur und Marktkultur für dezentrale Solarenergie im Allgemeinen, doch die spezifische Produktkategorie der steckerfertigen Balkonkraftwerke hat noch keine eigene Regelung — Brasiliens großen allgemeinen Markt für dezentrale Erzeugung sollte man nicht mit einem Balkonkraftwerk-Förderprogramm verwechseln, denn ein solches Programm existiert nicht.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'Die regulatorische Lücke: Steckerfertige Solaranlagen im Speziellen',
        content: [
          '**Eine brasilianische Quelle — MIT Technology Review Brasil, Mai 2026 — stellt ausdrücklich fest, dass das steckerfertige, direkt an die Steckdose angeschlossene Balkonkraftwerk-Modell in Brasilien noch keine spezifische Regelung hat, was seine Verbreitung „unausgereifter" macht im Vergleich zu internationalen Märkten mit eigenen Rahmenwerken.** Das ist die zentrale Erkenntnis dieses Statusberichts: Brasilien mangelt es nicht generell an Politik für dezentrale Solarenergie (siehe unten), aber die spezifische Produktkategorie der steckerfertigen Balkonkraftwerke — kleine, von Verbrauchern selbst installierte, direkt an die Steckdose angeschlossene Kits, im Unterschied zu professionell installierten Dachanlagen — wurde von den Regulierungsbehörden noch nicht eigens adressiert.',
          'Das ähnelt den Befunden zur Lücke in Japan und anderen aufstrebenden Märkten, die an anderer Stelle in diesem Themencluster behandelt werden: ein Land mit erheblicher Solar-Infrastruktur und -Politik, in dem die spezifische Balkon-/Stecker-Produktkategorie schlicht noch nicht eigens gesetzlich geregelt wurde.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'Der Rahmen, unter den es fallen würde',
        content: [
          '**Brasiliens allgemeine Regulierung der dezentralen Solarstromerzeugung hat eine klare Entwicklungslinie.** Die Resolução Normativa (RN) 482/2012 der ANEEL etablierte zunächst Brasiliens Vergütungssystem nach Art des Net-Metering für dezentrale Erzeugung. Dieser Rahmen wurde durch Lei 14.300/2022, Brasiliens Gesetzesrahmen für dezentrale Erzeugung, wesentlich aktualisiert und gesetzlich verankert; das Gesetz definiert förmlich die micro-geração distribuída (Anlagen bis 75kW) und die mini-geração distribuída (75kW bis 5MW). Die REN 1.059/2023 der ANEEL ist die Umsetzungsverordnung der Regulierungsbehörde, die die Vorgaben von Lei 14.300/2022 technisch im Detail operationalisiert — Anschlussanträge, Anforderungen an technische Studien, bidirektionale Zähler und die Dokumentation INMETRO-zertifizierter Wechselrichter, einheitlich angewendet unabhängig von der Anlagengröße.',
          'Keines dieser drei Regelwerke — RN 482/2012, Lei 14.300/2022 oder REN 1.059/2023 — sieht einen eigenen, leichteren Prozess für kleine Stecker-Kits vor. Ein Balkonkraftwerk in Brasilien fällt technisch unter denselben micro-geração-Prozess wie eine vollständige Dachinstallation, was laut MIT Technology Review Brasil der strukturelle Grund dafür ist, dass die Kategorie unausgereifter bleibt als in Märkten mit einer eigenen Ausnahmeregelung für kleine Anlagen.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'Brasiliens Markt für dezentrale Erzeugung ist nicht dasselbe',
        content: [
          '**Brasilien hat allein Anfang 2025 mehr als 5 GW an micro- und mini-geração distribuída hinzugefügt, womit die installierte Kapazität dezentraler Erzeugung 42 GW überschritt und mehr als 5,4 Millionen Verbrauchseinheiten profitierten, laut ANEEL-Daten, die in der brasilianischen Presse zitiert werden.** Das ist einer der weltweit größten Märkte für dezentrale Solarstromerzeugung nach diesen Maßstäben.',
          'Diese Größenordnung spiegelt eigene, meist auf dem Dach installierte Anlagen wider, die unter dem Vergütungssystem nach Art des Net-Metering von Lei 14.300/2022 betrieben werden — es ist allgemeines Wachstum des Marktes für dezentrale Erzeugung, kein Beleg für einen speziell auf steckerfertige Balkonkraftwerke bezogenen Markt oder ein entsprechendes Programm. Es liegt nahe, Brasiliens große Zahlen zur dezentralen Erzeugung zu lesen und daraus auf ein eigenes Förder- oder Verbreitungsprogramm für Balkonkraftwerke zu schließen; genau diese Verwechslung vermeidet diese Seite bewusst. Brasilien verfügt über die zugrunde liegende Infrastruktur, den Prozess des Netzanschlusses und die Markterfahrung mit dezentraler Solarenergie, die die Verbreitung von Balkonkraftwerken unterstützen könnten — doch die spezifische Produktkategorie wurde bislang noch nicht mit eigenen Regeln adressiert.',
        ],
        callouts: [
          { type: 'warning', text: 'Lesen Sie Brasiliens Zahlen von 5+ GW / 42 GW / 5,4 Mio. Verbrauchseinheiten zur dezentralen Erzeugung nicht als balkonkraftwerkspezifische Statistik. Sie beschreiben den allgemeinen Markt für dezentrale Erzeugung unter Lei 14.300/2022, unter den Balkonkraftwerke technisch fallen würden, für den es aber keine eigene Ausnahmeregelung für kleine Stecker-Kits oder eine separate Berichtskategorie gibt.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein Balkonkraftwerk in Brasilien legal?', a: 'Es ist nicht verboten, aber für steckerfertige Balkonkraftwerke im Speziellen existiert keine eigene Regelung — laut MIT Technology Review Brasil (Mai 2026) macht das ihre Verbreitung unausgereifter als in Märkten mit eigenen Rahmenwerken. Technisch würde es unter Brasiliens allgemeinen Prozess der micro-geração distribuída (Lei 14.300/2022) fallen, der keine Ausnahme für kleine Kits vorsieht.' },
          { q: 'Was ist Lei 14.300/2022?', a: 'Brasiliens Gesetzesrahmen für dezentrale Erzeugung, der förmlich die micro-geração distribuída (bis 75kW) und die mini-geração distribuída (75kW–5MW) definiert, aufbauend auf der früheren Resolução Normativa 482/2012 der ANEEL und im Detail umgesetzt über die REN 1.059/2023 der ANEEL.' },
          { q: 'Gibt es in Brasilien ein Förderprogramm für Balkonkraftwerke?', a: 'Nein. Brasilien hat einen großen allgemeinen Markt für dezentrale Solarstromerzeugung — allein Anfang 2025 wurden über 5 GW hinzugefügt, über 42 GW installiert, über 5,4 Mio. Verbrauchseinheiten profitieren –, doch das spiegelt eigene Dachanlagen unter dem Net-Metering-artigen Rahmen von Lei 14.300/2022 wider, nicht ein speziell auf Balkonkraftwerke bezogenes Programm. Ein eigenes Förder- oder Verbreitungsprogramm für Balkonkraftwerke existiert nicht.' },
          { q: 'Warum verläuft die Verbreitung von Balkonkraftwerken in Brasilien langsamer als in manchen anderen Märkten?', a: 'Laut MIT Technology Review Brasil (Mai 2026) liegt der strukturelle Grund im Fehlen einer eigenen regulatorischen Ausnahmeregelung — Stecker-Kits fallen unter denselben förmlichen micro-geração-Prozess wie vollständige Dachinstallationen, ohne einen leichteren Registrierungsweg für kleine Anlagen, anders als in Märkten mit einer expliziten Ausnahme für kleine Systeme.' },
          { q: 'Wie hängt das mit dem Portugal/Brasilien-Rechtsvergleich auf dieser Website zusammen?', a: 'Der Portugal/Brasilien-Vergleichsartikel behandelt Brasiliens rechtliche Grauzone neben Portugals kodifizierter Ausnahmeregelung. Diese Seite geht bei Brasilien tiefer ins Detail: die regulatorische Entwicklung (RN 482/2012 zu Lei 14.300/2022 zu REN 1.059/2023) und der Kontrast zwischen Brasiliens großem allgemeinem Markt für dezentrale Erzeugung und der bislang unadressierten Kategorie steckerfertiger Balkonkraftwerke.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Balkonkraftwerke in Portugal & Brasilien: Rechtlicher Status im Vergleich](/de/balcony-solar/balcony-solar-portugal-brazil) — der Portugal/Brasilien-Rechtsvergleich, den dieses Dossier vertieft',
          '[Ist ein Balkonkraftwerk legal? Ein Länderleitfaden](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechts-Tracker',
          '[Ist ein Balkonkraftwerk in Japan legal? Statusbericht 2027](/de/balcony-solar/balcony-solar-japan-status-2027) — ein ähnlich gelagerter aufstrebender Lückenmarkt',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-es.webp',
    title: 'Energía solar de balcón en Brasil: informe de estado 2027',
    seoTitle: 'Energía solar de balcón en Brasil: informe de estado 2027',
    intro: 'Brasil tiene uno de los mercados de generación distribuida solar más grandes del mundo — pero esa infraestructura y cultura de mercado no es específica de la energía solar de balcón enchufable. Esta página es un informe de estado sobre esa brecha específica: todavía no existe una regulación dedicada para los kits solares de balcón enchufables y de instalación directa, aunque el marco general de generación distribuida bajo el que caerían está bien establecido y muy utilizado.',
    metaDescription: 'La Lei 14.300/2022 de Brasil regula la micro- y mini-geração distribuída, sobre la base de la Resolução Normativa 482/2012 de ANEEL. Pero la energía solar de balcón enchufable en concreto no tiene regulación dedicada, según MIT Technology Review Brasil (mayo de 2026) — pese a que Brasil sumó más de 5 GW de generación distribuida solo a principios de 2025.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón y observadores del mercado que evalúan Brasil más allá de la comparación legal Portugal/Brasil',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**Brasil no tiene una regulación dedicada para la energía solar de balcón enchufable y de instalación directa — una fuente brasileña (MIT Technology Review Brasil, mayo de 2026) afirma explícitamente que esta categoría todavía no tiene reglas específicas, lo que hace que su adopción sea "más incipiente" que en mercados con marcos dedicados.** Esto es distinto del mercado general de generación distribuida solar de Brasil, que es grande y está bien regulado: la Lei 14.300/2022 regula la micro-geração distribuída (hasta 75kW) y la mini-geração distribuída (75kW-5MW), sobre la base de la anterior Resolução Normativa (RN) 482/2012 del regulador eléctrico nacional de Brasil, ANEEL. Ese marco general se usa intensamente — Brasil sumó más de 5 GW de generación distribuida micro/mini solo a principios de 2025, superando los 42 GW instalados y beneficiando a más de 5.4 millones de unidades consumidoras, según datos de ANEEL citados en la prensa brasileña — pero nada de esa escala es específico de la energía solar de balcón enchufable. Brasil tiene la infraestructura y la cultura de mercado para la energía solar distribuida en general; la categoría de producto específica de balcón enchufable es la parte que todavía espera reglas dedicadas.',
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Brasil?',
        answer: 'No está prohibida, pero tampoco está regulada específicamente — según MIT Technology Review Brasil (mayo de 2026), el modelo de energía solar de balcón enchufable y de instalación directa todavía no tiene regulación específica en Brasil, lo que hace que su adopción sea más incipiente que en mercados con marcos dedicados. Esto es independiente del gran mercado general de generación distribuida solar de Brasil: la Lei 14.300/2022 (que se apoya en la anterior RN 482/2012 de ANEEL) regula la micro-geração distribuída de hasta 75kW y la mini-geração distribuída de 75kW a 5MW, y Brasil sumó más de 5 GW de generación distribuida solo a principios de 2025, superando los 42 GW instalados en más de 5.4 millones de unidades consumidoras. Esa escala refleja sistemas propios, típicamente en tejados, bajo créditos al estilo net metering, no la categoría de balcón enchufable en concreto.',
        bullets: [
          'MIT Technology Review Brasil (mayo de 2026) afirma explícitamente que la energía solar de balcón enchufable no tiene regulación específica en Brasil, y califica su adopción como "más incipiente" que en mercados internacionales con marcos dedicados',
          'Evolución regulatoria del marco general de generación distribuida de Brasil: la Resolução Normativa 482/2012 de ANEEL estableció primero las reglas, luego sustituida/actualizada por la Lei 14.300/2022, implementada mediante la REN 1.059/2023 de ANEEL',
          'La Lei 14.300/2022 cubre la micro-geração distribuída (hasta 75kW) y la mini-geração distribuída (75kW-5MW) — categorías generales de tejado/sistema propio, sin ninguna excepción documentada para kits pequeños enchufables',
          'Brasil sumó más de 5 GW de generación distribuida micro/mini solo a principios de 2025, superando los 42 GW instalados y beneficiando a más de 5.4 millones de unidades consumidoras, según datos de ANEEL — escala del mercado general de generación distribuida, explícitamente no específica de balcón',
          'Marco de referencia: Brasil tiene la infraestructura y la cultura de mercado para la energía solar distribuida en general; la categoría de producto de balcón enchufable en concreto todavía no tiene reglas dedicadas — una historia emergente de brecha, no una historia de programa de subsidios',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'La brecha regulatoria: la energía solar enchufable en concreto', anchor: '#regulatory-gap' },
      { label: 'El marco bajo el que caería', anchor: '#dg-framework' },
      { label: 'El mercado de generación distribuida de Brasil no es lo mismo', anchor: '#dg-market-scale' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil (mayo de 2026) afirma explícitamente que la energía solar de balcón enchufable y de instalación directa todavía no tiene regulación específica en Brasil — este es el hecho central de este informe de estado.',
          'El marco general de generación distribuida de Brasil tiene una evolución regulatoria clara: la Resolução Normativa 482/2012 (2012) de ANEEL estableció las reglas originales, sustituida/actualizada por la Lei 14.300/2022, implementada en detalle mediante la REN 1.059/2023 de ANEEL.',
          'La Lei 14.300/2022 cubre la micro-geração distribuída (hasta 75kW) y la mini-geração distribuída (75kW-5MW) — categorías generales para sistemas propios, típicamente en tejados, sin ninguna excepción documentada específica para kits enchufables.',
          'Brasil sumó más de 5 GW de generación distribuida micro/mini solo a principios de 2025, superando los 42 GW instalados y beneficiando a más de 5.4 millones de unidades consumidoras, según datos de ANEEL — un mercado enorme, pero general, no de balcón enchufable.',
          'El enfoque correcto: Brasil tiene la infraestructura y la cultura de mercado para la energía solar distribuida en general, pero la categoría de producto de balcón enchufable en concreto todavía no tiene regulación dedicada — no hay que confundir el gran mercado general de generación distribuida de Brasil con un programa de subsidios de energía solar de balcón, porque tal programa no existe.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'La brecha regulatoria: la energía solar enchufable en concreto',
        content: [
          '**Una fuente brasileña — MIT Technology Review Brasil, mayo de 2026 — afirma explícitamente que el modelo de energía solar de balcón enchufable y de instalación directa todavía no tiene regulación específica en Brasil, lo que hace que su adopción sea "más incipiente" en comparación con mercados internacionales que sí tienen marcos dedicados.** Este es el hallazgo central de este informe de estado: a Brasil no le falta política de energía solar distribuida en general (ver abajo), pero la categoría de producto específica de balcón enchufable — kits pequeños, instalados por el propio consumidor, de conexión directa, a diferencia de los sistemas de tejado instalados profesionalmente — todavía no ha sido abordada por separado por los reguladores.',
          'Esto tiene una forma similar a los hallazgos de brecha para Japón y otros mercados emergentes cubiertos en otras partes de este conjunto de artículos: un país con infraestructura y política solar sustancial, donde la categoría de producto específica de balcón/enchufable simplemente todavía no ha sido legislada por separado.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'El marco bajo el que caería',
        content: [
          '**La regulación general de generación distribuida solar de Brasil tiene una evolución clara.** La Resolução Normativa (RN) 482/2012 de ANEEL estableció primero el sistema de compensación al estilo net metering de Brasil para la generación distribuida. Ese marco fue actualizado sustancialmente y recibió respaldo legal mediante la Lei 14.300/2022, el Marco Legal de Generación Distribuida de Brasil, que define formalmente la micro-geração distribuída (sistemas de hasta 75kW) y la mini-geração distribuída (75kW a 5MW). La REN 1.059/2023 de ANEEL es la resolución de implementación del regulador que pone en práctica en detalle técnico las disposiciones de la Lei 14.300/2022 — solicitudes de conexión, requisitos de estudio técnico, medición bidireccional y documentación de inversores certificados por INMETRO, aplicados de manera uniforme sin importar el tamaño del sistema.',
          'Ninguno de estos tres instrumentos — RN 482/2012, Lei 14.300/2022 o REN 1.059/2023 — establece un proceso separado y más ligero para los kits pequeños enchufables. Un sistema solar de balcón en Brasil cae técnicamente bajo el mismo proceso de micro-geração que una instalación completa en tejado, lo que, según MIT Technology Review Brasil, es la razón estructural por la que la categoría sigue siendo más incipiente que en mercados con una exención dedicada para sistemas pequeños.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'El mercado de generación distribuida de Brasil no es lo mismo',
        content: [
          '**Brasil sumó más de 5 GW de micro- y mini-geração distribuída solo a principios de 2025, superando los 42 GW de capacidad instalada de generación distribuida y beneficiando a más de 5.4 millones de unidades consumidoras, según datos de ANEEL citados en la prensa brasileña.** Este es uno de los mercados de generación distribuida solar más grandes del mundo según estas medidas.',
          'Esa escala refleja sistemas propios, típicamente instalados en tejados, que operan bajo el sistema de créditos al estilo net metering de la Lei 14.300/2022 — es crecimiento del mercado general de generación distribuida, no evidencia de un mercado o programa específico de balcón enchufable. Es fácil leer las grandes cifras de generación distribuida de Brasil y asumir que existe un subsidio o programa de adopción dedicado de energía solar de balcón; esa sería una confusión que esta página evita deliberadamente. Brasil tiene la infraestructura subyacente, el proceso de interconexión a la red y la familiaridad de mercado con la energía solar distribuida que podrían respaldar la adopción de energía solar de balcón — pero la categoría de producto específica todavía no ha sido abordada con reglas dedicadas.',
        ],
        callouts: [
          { type: 'warning', text: 'No interpretes las cifras de generación distribuida de Brasil (5+ GW / 42 GW / 5.4 millones de unidades consumidoras) como estadísticas específicas de energía solar de balcón. Describen el mercado general de generación distribuida bajo la Lei 14.300/2022, bajo el cual la energía solar de balcón caería técnicamente pero que no tiene ninguna excepción dedicada para kits pequeños enchufables ni una categoría de informes separada.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es legal la energía solar de balcón en Brasil?', a: 'No está prohibida, pero la energía solar de balcón enchufable en concreto no tiene regulación dedicada — según MIT Technology Review Brasil (mayo de 2026), esto hace que su adopción sea más incipiente que en mercados con marcos dedicados. Técnicamente caería bajo el proceso general de micro-geração distribuída de Brasil (Lei 14.300/2022), que no tiene ninguna excepción para kits pequeños.' },
          { q: '¿Qué es la Lei 14.300/2022?', a: 'El Marco Legal de Generación Distribuida de Brasil, que define formalmente la micro-geração distribuída (hasta 75kW) y la mini-geração distribuída (75kW-5MW), sobre la base de la anterior Resolução Normativa 482/2012 de ANEEL e implementada en detalle técnico mediante la REN 1.059/2023 de ANEEL.' },
          { q: '¿Brasil tiene un programa de subsidios para la energía solar de balcón?', a: 'No. Brasil tiene un gran mercado general de generación distribuida solar — más de 5 GW sumados solo a principios de 2025, más de 42 GW instalados, más de 5.4 millones de unidades consumidoras —, pero esto refleja sistemas propios/de tejado bajo el marco de créditos al estilo net metering de la Lei 14.300/2022, no un programa específico de balcón enchufable. No existe ningún subsidio o programa de adopción dedicado de energía solar de balcón.' },
          { q: '¿Por qué la adopción de energía solar de balcón es más lenta en Brasil que en algunos otros mercados?', a: 'Según MIT Technology Review Brasil (mayo de 2026), la razón estructural es la falta de una excepción regulatoria dedicada — los kits enchufables caen bajo el mismo proceso formal de micro-geração que las instalaciones completas en tejado, sin una vía de registro más ligera para sistemas pequeños, a diferencia de mercados con una exención explícita para sistemas pequeños.' },
          { q: '¿Cómo se relaciona esto con la comparación legal Portugal/Brasil de este sitio?', a: 'El artículo de comparación Portugal/Brasil cubre la zona gris legal de Brasil junto con la exención codificada de Portugal. Esta página profundiza más en Brasil en concreto: la evolución regulatoria (de RN 482/2012 a Lei 14.300/2022 a REN 1.059/2023) y el contraste entre el gran mercado general de generación distribuida de Brasil y la categoría de balcón enchufable todavía no abordada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Energía solar de balcón en Portugal y Brasil: estado legal comparado](/es/balcony-solar/balcony-solar-portugal-brazil) — la comparación legal Portugal/Brasil que este informe amplía',
          '[¿Es legal la energía solar de balcón? Guía país por país](/es/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
          '[¿Es legal la energía solar de balcón en Japón? Informe de estado 2027](/es/balcony-solar/balcony-solar-japan-status-2027) — un mercado emergente con una brecha de forma similar',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-fr.webp',
    title: "L'énergie solaire de balcon au Brésil : rapport de situation 2027",
    seoTitle: "L'énergie solaire de balcon au Brésil : rapport de situation 2027",
    intro: "Le Brésil possède l'un des plus grands marchés de production solaire distribuée au monde — mais cette infrastructure et cette culture de marché ne sont pas spécifiques au solaire de balcon prêt à brancher. Cette page est un rapport de situation sur cette lacune précise : aucune réglementation dédiée n'existe encore pour les kits solaires de balcon prêts à brancher directement sur une prise, même si le cadre général de production distribuée dont ils relèveraient est bien établi et largement utilisé.",
    metaDescription: "La loi brésilienne Lei 14.300/2022 encadre la micro- et la mini-geração distribuída, en s'appuyant sur la Resolução Normativa 482/2012 de l'ANEEL. Mais le solaire de balcon prêt à brancher n'a, lui, aucune réglementation dédiée, selon MIT Technology Review Brasil (mai 2026) — alors que le Brésil a ajouté plus de 5 GW de production distribuée rien qu'au début de 2025.",
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon et observateurs du marché évaluant le Brésil au-delà de la comparaison juridique Portugal/Brésil",
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: "**Le Brésil n'a aucune réglementation dédiée pour le solaire de balcon prêt à brancher directement sur une prise — une source brésilienne (MIT Technology Review Brasil, mai 2026) affirme explicitement que cette catégorie n'a toujours pas de règles spécifiques, ce qui rend son adoption « plus balbutiante » que dans les marchés dotés de cadres dédiés.** Ceci est distinct du marché général brésilien de la production solaire distribuée, qui est vaste et bien réglementé : la loi Lei 14.300/2022 régit la micro-geração distribuída (jusqu'à 75 kW) et la mini-geração distribuída (75 kW-5 MW), en s'appuyant sur la Resolução Normativa (RN) 482/2012 antérieure de l'ANEEL, le régulateur national de l'électricité du Brésil. Ce cadre général est massivement utilisé — le Brésil a ajouté plus de 5 GW en micro/mini production distribuée rien qu'au début de 2025, dépassant les 42 GW installés et bénéficiant à plus de 5.4 millions d'unités de consommation, selon des données de l'ANEEL citées par la presse brésilienne — mais rien de cette ampleur n'est spécifique au solaire de balcon prêt à brancher. Le Brésil dispose de l'infrastructure et de la culture de marché pour le solaire distribué en général ; c'est la catégorie de produit spécifique du solaire de balcon prêt à brancher qui attend encore des règles dédiées.",
    quickAnswerTop: {
      fr: {
        question: "Le solaire de balcon est-il légal au Brésil ?",
        answer: "Ce n'est pas interdit, mais ce n'est pas non plus spécifiquement réglementé — selon MIT Technology Review Brasil (mai 2026), le modèle du solaire de balcon prêt à brancher directement sur une prise n'a toujours aucune réglementation spécifique au Brésil, ce qui rend son adoption plus balbutiante que dans les marchés dotés de cadres dédiés. Ceci est distinct du vaste marché général brésilien de la production solaire distribuée : la loi Lei 14.300/2022 (s'appuyant sur la RN 482/2012 antérieure de l'ANEEL) régit la micro-geração distribuída jusqu'à 75 kW et la mini-geração distribuída de 75 kW à 5 MW, et le Brésil a ajouté plus de 5 GW de production distribuée rien qu'au début de 2025, dépassant les 42 GW installés sur plus de 5.4 millions d'unités de consommation. Cette ampleur reflète des installations en propriété, typiquement sur toiture, sous des crédits de type net metering, et non la catégorie du solaire de balcon prêt à brancher en particulier.",
        bullets: [
          "MIT Technology Review Brasil (mai 2026) affirme explicitement que le solaire de balcon prêt à brancher n'a aucune réglementation spécifique au Brésil, qualifiant son adoption de « plus balbutiante » que dans les marchés internationaux dotés de cadres dédiés",
          "Évolution réglementaire du cadre général brésilien de production distribuée : la Resolução Normativa 482/2012 de l'ANEEL a d'abord établi les règles, puis remplacée/mise à jour par la loi Lei 14.300/2022, mise en œuvre via la REN 1.059/2023 de l'ANEEL",
          "La loi Lei 14.300/2022 couvre la micro-geração distribuída (jusqu'à 75 kW) et la mini-geração distribuída (75 kW-5 MW) — des catégories générales pour installations en propriété, typiquement sur toiture, sans aucune dérogation documentée pour les petits kits prêts à brancher",
          "Le Brésil a ajouté plus de 5 GW en micro/mini production distribuée rien qu'au début de 2025, dépassant les 42 GW installés et bénéficiant à plus de 5.4 millions d'unités de consommation, selon des données de l'ANEEL — l'ampleur du marché général de production distribuée, explicitement non spécifique au balcon",
          "Cadre de référence : le Brésil dispose de l'infrastructure et de la culture de marché pour le solaire distribué en général ; la catégorie de produit spécifique du solaire de balcon prêt à brancher n'a, elle, encore aucune règle dédiée — une histoire de lacune émergente, pas une histoire de programme de subvention",
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: "La lacune réglementaire : le solaire prêt à brancher en particulier", anchor: '#regulatory-gap' },
      { label: "Le cadre dont il relèverait", anchor: '#dg-framework' },
      { label: "Le marché de production distribuée du Brésil n'est pas la même chose", anchor: '#dg-market-scale' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "MIT Technology Review Brasil (mai 2026) affirme explicitement que le solaire de balcon prêt à brancher directement sur une prise n'a toujours aucune réglementation spécifique au Brésil — c'est le fait central de ce rapport de situation.",
          "Le cadre général brésilien de production distribuée a une évolution réglementaire claire : la Resolução Normativa 482/2012 (2012) de l'ANEEL a établi les règles d'origine, remplacée/mise à jour par la loi Lei 14.300/2022, mise en œuvre en détail via la REN 1.059/2023 de l'ANEEL.",
          "La loi Lei 14.300/2022 couvre la micro-geração distribuída (jusqu'à 75 kW) et la mini-geração distribuída (75 kW-5 MW) — des catégories générales pour des installations en propriété, typiquement sur toiture, sans aucune dérogation documentée spécifiquement pour les kits prêts à brancher.",
          "Le Brésil a ajouté plus de 5 GW en micro/mini production distribuée rien qu'au début de 2025, dépassant les 42 GW installés et bénéficiant à plus de 5.4 millions d'unités de consommation, selon des données de l'ANEEL — un marché immense, mais général, pas un marché de balcon prêt à brancher.",
          "Le cadrage correct : le Brésil dispose de l'infrastructure et de la culture de marché pour le solaire distribué en général, mais la catégorie de produit spécifique du solaire de balcon prêt à brancher n'a encore aucune réglementation dédiée — ne confondez pas le vaste marché général de production distribuée du Brésil avec un programme de subvention pour le solaire de balcon, car un tel programme n'existe pas.",
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: "La lacune réglementaire : le solaire prêt à brancher en particulier",
        content: [
          "**Une source brésilienne — MIT Technology Review Brasil, mai 2026 — affirme explicitement que le modèle du solaire de balcon prêt à brancher directement sur une prise n'a toujours aucune réglementation spécifique au Brésil, ce qui rend son adoption « plus balbutiante » par rapport aux marchés internationaux dotés de cadres dédiés.** C'est la conclusion centrale de ce rapport de situation : le Brésil ne manque pas de politique solaire distribuée en général (voir ci-dessous), mais la catégorie de produit spécifique du solaire de balcon prêt à brancher — de petits kits, installés par le consommateur lui-même, branchés directement sur une prise, à la différence des installations de toiture posées par des professionnels — n'a pas encore été traitée séparément par les régulateurs.",
          "Cela ressemble aux constats de lacune relevés pour le Japon et d'autres marchés émergents traités ailleurs dans cet ensemble d'articles : un pays doté d'une infrastructure et d'une politique solaires substantielles, où la catégorie de produit spécifique du balcon/prêt à brancher n'a tout simplement pas encore été légiférée séparément.",
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: "Le cadre dont il relèverait",
        content: [
          "**La réglementation générale brésilienne de la production solaire distribuée a une évolution claire.** La Resolução Normativa (RN) 482/2012 de l'ANEEL a d'abord établi le système de compensation de type net metering du Brésil pour la production distribuée. Ce cadre a été substantiellement mis à jour et doté d'une assise légale par la loi Lei 14.300/2022, le cadre légal brésilien de la production distribuée, qui définit formellement la micro-geração distribuída (systèmes jusqu'à 75 kW) et la mini-geração distribuída (75 kW à 5 MW). La REN 1.059/2023 de l'ANEEL est la résolution d'application du régulateur qui opérationnalise dans le détail technique les dispositions de la loi Lei 14.300/2022 — demandes de raccordement, exigences d'étude technique, comptage bidirectionnel et documentation d'onduleur certifié INMETRO, appliquées de manière uniforme quelle que soit la taille du système.",
          "Aucun de ces trois instruments — RN 482/2012, Lei 14.300/2022 ou REN 1.059/2023 — ne prévoit de processus séparé et plus léger pour les petits kits prêts à brancher. Un système solaire de balcon au Brésil relève techniquement du même processus de micro-geração qu'une installation de toiture complète, ce qui est, selon MIT Technology Review Brasil, la raison structurelle pour laquelle la catégorie reste plus balbutiante que dans les marchés dotés d'une dérogation dédiée pour les petits systèmes.",
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: "Le marché de production distribuée du Brésil n'est pas la même chose",
        content: [
          "**Le Brésil a ajouté plus de 5 GW en micro- et mini-geração distribuída rien qu'au début de 2025, dépassant les 42 GW de capacité installée de production distribuée et bénéficiant à plus de 5.4 millions d'unités de consommation, selon des données de l'ANEEL citées par la presse brésilienne.** C'est l'un des plus grands marchés de production solaire distribuée au monde selon ces mesures.",
          "Cette ampleur reflète des installations en propriété, typiquement posées sur toiture, fonctionnant sous le système de crédits de type net metering de la loi Lei 14.300/2022 — il s'agit d'une croissance générale du marché de production distribuée, pas d'une preuve d'un marché ou d'un programme spécifique au solaire de balcon prêt à brancher. Il est facile de lire les chiffres considérables de la production distribuée brésilienne et de supposer qu'il existe une subvention ou un programme d'adoption dédié au solaire de balcon ; c'est une confusion que cette page évite délibérément. Le Brésil dispose de l'infrastructure sous-jacente, du processus de raccordement au réseau et de la familiarité du marché avec le solaire distribué qui pourraient soutenir l'adoption du solaire de balcon — mais la catégorie de produit spécifique n'a pas encore été traitée par des règles dédiées.",
        ],
        callouts: [
          { type: 'warning', text: "Ne lisez pas les chiffres brésiliens de production distribuée (5+ GW / 42 GW / 5.4 millions d'unités de consommation) comme des statistiques spécifiques au solaire de balcon. Ils décrivent le marché général de production distribuée sous la loi Lei 14.300/2022, dont le solaire de balcon relèverait techniquement mais qui ne prévoit aucune dérogation dédiée pour les petits kits prêts à brancher ni de catégorie de reporting séparée." },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: "Le solaire de balcon est-il légal au Brésil ?", a: "Ce n'est pas interdit, mais le solaire de balcon prêt à brancher en particulier n'a aucune réglementation dédiée — selon MIT Technology Review Brasil (mai 2026), cela rend son adoption plus balbutiante que dans les marchés dotés de cadres dédiés. Il relèverait techniquement du processus général brésilien de micro-geração distribuída (Lei 14.300/2022), qui ne prévoit aucune dérogation pour les petits kits." },
          { q: "Qu'est-ce que la loi Lei 14.300/2022 ?", a: "Le cadre légal brésilien de la production distribuée, qui définit formellement la micro-geração distribuída (jusqu'à 75 kW) et la mini-geração distribuída (75 kW-5 MW), en s'appuyant sur la Resolução Normativa 482/2012 antérieure de l'ANEEL et mise en œuvre dans le détail technique via la REN 1.059/2023 de l'ANEEL." },
          { q: "Le Brésil a-t-il un programme de subvention pour le solaire de balcon ?", a: "Non. Le Brésil dispose d'un vaste marché général de production solaire distribuée — plus de 5 GW ajoutés rien qu'au début de 2025, plus de 42 GW installés, plus de 5.4 millions d'unités de consommation — mais cela reflète des installations en propriété/sur toiture sous le cadre de type net metering de la loi Lei 14.300/2022, et non un programme spécifique au solaire de balcon prêt à brancher. Aucune subvention ni programme d'adoption dédié au solaire de balcon n'existe." },
          { q: "Pourquoi l'adoption du solaire de balcon est-elle plus lente au Brésil que dans certains autres marchés ?", a: "Selon MIT Technology Review Brasil (mai 2026), la raison structurelle est l'absence de dérogation réglementaire dédiée — les kits prêts à brancher relèvent du même processus formel de micro-geração que les installations de toiture complètes, sans voie d'enregistrement allégée pour les petits systèmes, contrairement aux marchés dotés d'une exemption explicite pour les petits systèmes." },
          { q: "Quel est le lien avec la comparaison juridique Portugal/Brésil de ce site ?", a: "L'article de comparaison Portugal/Brésil traite de la zone grise juridique du Brésil aux côtés de la dérogation codifiée du Portugal. Cette page approfondit spécifiquement le Brésil : l'évolution réglementaire (de RN 482/2012 à Lei 14.300/2022 puis REN 1.059/2023) et le contraste entre le vaste marché général de production distribuée du Brésil et la catégorie du solaire de balcon prêt à brancher encore non traitée." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          "[Le solaire de balcon au Portugal et au Brésil : comparaison du statut juridique](/fr/balcony-solar/balcony-solar-portugal-brazil) — la comparaison juridique Portugal/Brésil que ce dossier approfondit",
          "[Le solaire de balcon est-il légal ? Un guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial",
          "[Le solaire de balcon est-il légal au Japon ? Rapport de situation 2027](/fr/balcony-solar/balcony-solar-japan-status-2027) — un marché émergent de lacune de forme similaire",
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-ar.webp',
    title: 'الطاقة الشمسية للشرفات في البرازيل: تقرير الحالة 2027',
    seoTitle: 'الطاقة الشمسية للشرفات في البرازيل: تقرير الحالة 2027',
    intro: 'تمتلك البرازيل واحدًا من أكبر أسواق التوليد الموزع للطاقة الشمسية في العالم — لكن هذه البنية التحتية والثقافة السوقية ليست خاصة بالطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس (plug-and-play). هذه الصفحة هي تقرير حالة حول هذه الفجوة تحديدًا: لا توجد حتى الآن لائحة تنظيمية مخصصة للأنظمة الشمسية القابلة للتوصيل المباشر بالمقبس، رغم أن الإطار العام للتوليد الموزع الذي قد تندرج تحته هذه الأنظمة راسخ جيدًا ومستخدم على نطاق واسع.',
    metaDescription: 'ينظم قانون Lei 14.300/2022 البرازيلي micro-geração distribuída وmini-geração distribuída، بناءً على القرار التنظيمي Resolução Normativa 482/2012 الصادر عن ANEEL. لكن الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس تحديدًا لا تخضع لأي لائحة مخصصة، بحسب MIT Technology Review Brasil (مايو 2026) — رغم أن البرازيل أضافت أكثر من 5 GW من التوليد الموزع في أوائل 2025 وحدها.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات ومراقبو السوق الذين يقيّمون البرازيل بما يتجاوز المقارنة القانونية بين البرتغال والبرازيل',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**لا توجد في البرازيل لائحة تنظيمية مخصصة للطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس (plug-and-play) — يوضح مصدر برازيلي (MIT Technology Review Brasil، مايو 2026) صراحة أن هذه الفئة لا تزال بلا قواعد محددة، ما يجعل تبنّيها "أكثر بدائية" مقارنة بالأسواق التي لديها أطر مخصصة.** يختلف هذا عن سوق البرازيل العام للتوليد الموزع للطاقة الشمسية، وهو سوق كبير ومنظم جيدًا: ينظم قانون Lei 14.300/2022 micro-geração distribuída (حتى 75kW) وmini-geração distribuída (من 75kW إلى 5MW)، بناءً على القرار التنظيمي السابق Resolução Normativa (RN) 482/2012 الصادر عن ANEEL، الجهة التنظيمية الوطنية للكهرباء في البرازيل. يُستخدم هذا الإطار العام على نطاق واسع — أضافت البرازيل أكثر من 5 GW في micro/mini geração distribuída في أوائل 2025 وحدها، متجاوزة 42 GW من القدرة المركبة ومستفيدًا منها أكثر من 5.4 مليون وحدة استهلاكية (consumer units)، بحسب بيانات ANEEL التي استشهدت بها الصحافة البرازيلية — لكن شيئًا من هذا الحجم ليس خاصًا بالطاقة الشمسية القابلة للتوصيل بالمقبس في الشرفات. تمتلك البرازيل البنية التحتية والثقافة السوقية للطاقة الشمسية الموزعة بشكل عام؛ أما فئة المنتج المحددة الخاصة بالشرفات ذات التوصيل المباشر بالمقبس فهي الجزء الذي لا يزال ينتظر قواعد مخصصة.',
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في البرازيل؟',
        answer: 'ليست محظورة، لكنها أيضًا ليست منظمة تحديدًا — بحسب MIT Technology Review Brasil (مايو 2026)، لا يزال نموذج الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس بلا لائحة محددة في البرازيل، ما يجعل تبنّيه أكثر بدائية مقارنة بالأسواق ذات الأطر المخصصة. هذا أمر منفصل عن سوق البرازيل العام الكبير للتوليد الموزع للطاقة الشمسية: ينظم قانون Lei 14.300/2022 (المستند إلى قرار ANEEL السابق RN 482/2012) micro-geração distribuída حتى 75kW وmini-geração distribuída من 75kW إلى 5MW، وقد أضافت البرازيل أكثر من 5 GW من التوليد الموزع في أوائل 2025 وحدها، متجاوزة 42 GW من القدرة المركبة عبر أكثر من 5.4 مليون وحدة استهلاكية. يعكس هذا الحجم أنظمة مملوكة، غالبًا على الأسطح، تعمل بموجب أرصدة على غرار صافي القياس (net metering)، وليس فئة الشرفات ذات التوصيل المباشر بالمقبس تحديدًا.',
        bullets: [
          'توضح MIT Technology Review Brasil (مايو 2026) صراحة أن الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس لا تخضع للائحة محددة في البرازيل، وتصف تبنّيها بأنه "أكثر بدائية" مقارنة بالأسواق الدولية ذات الأطر المخصصة',
          'التطور التنظيمي لإطار البرازيل العام للتوليد الموزع: أرسى القرار التنظيمي Resolução Normativa 482/2012 الصادر عن ANEEL القواعد أولًا، ثم حل محله/حدّثه Lei 14.300/2022، الذي يُنفَّذ عبر REN 1.059/2023 الصادر عن ANEEL',
          'يشمل Lei 14.300/2022 micro-geração distribuída (حتى 75kW) وmini-geração distribuída (من 75kW إلى 5MW) — فئات عامة للأنظمة المملوكة، عادة على الأسطح، دون أي استثناء موثّق للأطقم الصغيرة القابلة للتوصيل بالمقبس',
          'أضافت البرازيل أكثر من 5 GW في التوليد الموزع الصغير/المتوسط في أوائل 2025 وحدها، متجاوزة 42 GW من القدرة المركبة ومستفيدًا منها أكثر من 5.4 مليون وحدة استهلاكية، بحسب بيانات ANEEL — حجم سوق التوليد الموزع العام، وهو صراحة ليس خاصًا بالشرفات',
          'الإطار العام: تمتلك البرازيل البنية التحتية والثقافة السوقية للطاقة الشمسية الموزعة بشكل عام؛ أما فئة المنتج المحددة الخاصة بالشرفات ذات التوصيل المباشر بالمقبس فلا تزال بلا قواعد مخصصة — وهذه قصة فجوة ناشئة، وليست قصة برنامج دعم',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'الفجوة التنظيمية: الطاقة الشمسية القابلة للتوصيل بالمقبس تحديدًا', anchor: '#regulatory-gap' },
      { label: 'الإطار الذي قد تندرج تحته', anchor: '#dg-framework' },
      { label: 'سوق التوليد الموزع في البرازيل ليس الأمر نفسه', anchor: '#dg-market-scale' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'توضح MIT Technology Review Brasil (مايو 2026) صراحة أن الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس لا تزال بلا لائحة محددة في البرازيل — وهذه هي الحقيقة المحورية في تقرير الحالة هذا.',
          'يمتلك إطار البرازيل العام للتوليد الموزع تطورًا تنظيميًا واضحًا: أرسى القرار التنظيمي Resolução Normativa 482/2012 (2012) الصادر عن ANEEL القواعد الأصلية، ثم حل محله/حدّثه Lei 14.300/2022، الذي نُفّذ بالتفصيل عبر REN 1.059/2023 الصادر عن ANEEL.',
          'يشمل Lei 14.300/2022 micro-geração distribuída (حتى 75kW) وmini-geração distribuída (من 75kW إلى 5MW) — فئات عامة للأنظمة المملوكة، عادة على الأسطح، دون أي استثناء موثّق مخصص لأطقم التوصيل بالمقبس.',
          'أضافت البرازيل أكثر من 5 GW في التوليد الموزع الصغير/المتوسط في أوائل 2025 وحدها، متجاوزة 42 GW من القدرة المركبة ومستفيدًا منها أكثر من 5.4 مليون وحدة استهلاكية، بحسب بيانات ANEEL — سوق ضخم لكنه عام، وليس سوقًا خاصًا بالشرفات ذات التوصيل بالمقبس.',
          'التأطير الصحيح: تمتلك البرازيل البنية التحتية والثقافة السوقية للطاقة الشمسية الموزعة بشكل عام، لكن فئة المنتج المحددة الخاصة بالشرفات ذات التوصيل المباشر بالمقبس لا تزال بلا لائحة مخصصة — لا تخلط بين سوق البرازيل العام الكبير للتوليد الموزع وبين برنامج دعم للطاقة الشمسية للشرفات، لأن مثل هذا البرنامج غير موجود.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'الفجوة التنظيمية: الطاقة الشمسية القابلة للتوصيل بالمقبس تحديدًا',
        content: [
          '**يوضح مصدر برازيلي — MIT Technology Review Brasil، مايو 2026 — صراحة أن نموذج الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس لا يزال بلا لائحة محددة في البرازيل، ما يجعل تبنّيه "أكثر بدائية" مقارنة بالأسواق الدولية ذات الأطر المخصصة.** هذا هو الاستنتاج المحوري لتقرير الحالة هذا: لا تفتقر البرازيل إلى سياسة عامة للطاقة الشمسية الموزعة (انظر أدناه)، لكن فئة المنتج المحددة الخاصة بالشرفات ذات التوصيل المباشر بالمقبس — أطقم صغيرة يركّبها المستهلك بنفسه وتُوصَّل مباشرة بالمقبس، بخلاف الأنظمة السقفية التي يركّبها متخصصون — لم تُعالَج بشكل منفصل من قبل الجهات التنظيمية بعد.',
          'يشبه هذا في شكله نتائج الفجوة الخاصة باليابان وأسواق ناشئة أخرى تمت تغطيتها في أماكن أخرى من هذه المجموعة: بلد يمتلك بنية تحتية وسياسات كبيرة للطاقة الشمسية، لكن فئة المنتج المحددة الخاصة بالشرفات/التوصيل بالمقبس لم يتم تشريعها بعد بشكل منفصل.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'الإطار الذي قد تندرج تحته',
        content: [
          '**يتمتع التنظيم العام للتوليد الموزع للطاقة الشمسية في البرازيل بتطور واضح.** أرسى القرار التنظيمي Resolução Normativa (RN) 482/2012 الصادر عن ANEEL لأول مرة نظام التعويض على غرار صافي القياس (net metering) في البرازيل للتوليد الموزع. جرى تحديث هذا الإطار بشكل جوهري ومنحه سندًا قانونيًا عبر Lei 14.300/2022، وهو الإطار القانوني للتوليد الموزع في البرازيل، والذي يحدد رسميًا micro-geração distribuída (الأنظمة حتى 75kW) وmini-geração distribuída (من 75kW إلى 5MW). ويُعد REN 1.059/2023 الصادر عن ANEEL قرار التنفيذ الذي تصدره الجهة التنظيمية لتفعيل أحكام Lei 14.300/2022 بتفاصيل تقنية — طلبات التوصيل، متطلبات الدراسة الفنية، العدادات ثنائية الاتجاه، وتوثيق العاكس المعتمد من INMETRO، وتُطبَّق جميعها بشكل موحّد بغض النظر عن حجم النظام.',
          'لا تنصّ أي من هذه الأدوات التنظيمية الثلاث — RN 482/2012 وLei 14.300/2022 وREN 1.059/2023 — على عملية منفصلة وأخف وطأة للأطقم الصغيرة القابلة للتوصيل بالمقبس. يخضع نظام الطاقة الشمسية للشرفات في البرازيل تقنيًا لنفس عملية micro-geração التي تخضع لها الأنظمة السقفية الكاملة، وهو السبب البنيوي، بحسب MIT Technology Review Brasil، وراء بقاء هذه الفئة أكثر بدائية مقارنة بالأسواق التي تملك إعفاءً مخصصًا للأنظمة الصغيرة.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'سوق التوليد الموزع في البرازيل ليس الأمر نفسه',
        content: [
          '**أضافت البرازيل أكثر من 5 GW في micro- وmini-geração distribuída في أوائل 2025 وحدها، متجاوزة 42 GW من القدرة المركبة للتوليد الموزع ومستفيدًا منها أكثر من 5.4 مليون وحدة استهلاكية، وفقًا لبيانات ANEEL التي استشهدت بها الصحافة البرازيلية.** هذا يجعله واحدًا من أكبر أسواق التوليد الموزع للطاقة الشمسية في العالم وفق هذه المقاييس.',
          'يعكس هذا الحجم أنظمة مملوكة، عادة مركّبة على الأسطح، تعمل بموجب نظام الأرصدة على غرار صافي القياس الخاص بـ Lei 14.300/2022 — إنه نمو في سوق التوليد الموزع العام، وليس دليلًا على سوق أو برنامج مخصص للشرفات ذات التوصيل بالمقبس. من السهل قراءة أرقام البرازيل الكبيرة في التوليد الموزع وافتراض وجود برنامج دعم أو تبنٍّ مخصص للطاقة الشمسية للشرفات؛ وهذا خلط تتجنبه هذه الصفحة عمدًا. تمتلك البرازيل البنية التحتية الأساسية وعملية الربط بالشبكة والألفة السوقية مع الطاقة الشمسية الموزعة التي يمكن أن تدعم تبنّي الطاقة الشمسية للشرفات — لكن فئة المنتج المحددة لم تُعالَج بعد بقواعد مخصصة.',
        ],
        callouts: [
          { type: 'warning', text: 'لا تقرأ أرقام البرازيل الخاصة بالتوليد الموزع — أكثر من 5 GW/42 GW/5.4 مليون وحدة استهلاكية — على أنها إحصاءات خاصة بالطاقة الشمسية للشرفات. فهي تصف سوق التوليد الموزع العام بموجب Lei 14.300/2022، الذي قد تندرج تحته الطاقة الشمسية للشرفات تقنيًا لكن دون أي استثناء مخصص للأطقم الصغيرة القابلة للتوصيل بالمقبس أو فئة تقارير منفصلة.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل الطاقة الشمسية للشرفات قانونية في البرازيل؟', a: 'ليست محظورة، لكن الطاقة الشمسية للشرفات ذات التوصيل المباشر بالمقبس تحديدًا لا تخضع للائحة مخصصة — بحسب MIT Technology Review Brasil (مايو 2026)، هذا يجعل تبنّيها أكثر بدائية مقارنة بالأسواق ذات الأطر المخصصة. تقنيًا ستندرج تحت عملية البرازيل العامة لـ micro-geração distribuída (Lei 14.300/2022)، التي لا تتضمن استثناءً للأطقم الصغيرة.' },
          { q: 'ما هو قانون Lei 14.300/2022؟', a: 'الإطار القانوني للتوليد الموزع في البرازيل، الذي يحدد رسميًا micro-geração distribuída (حتى 75kW) وmini-geração distribuída (من 75kW إلى 5MW)، بناءً على قرار ANEEL السابق Resolução Normativa 482/2012، ويُنفَّذ بتفاصيل تقنية عبر REN 1.059/2023 الصادر عن ANEEL.' },
          { q: 'هل لدى البرازيل برنامج دعم للطاقة الشمسية للشرفات؟', a: 'لا. تمتلك البرازيل سوقًا عامًا كبيرًا للتوليد الموزع للطاقة الشمسية — أُضيف أكثر من 5 GW في أوائل 2025 وحدها، وتم تركيب أكثر من 42 GW، واستفادت منها أكثر من 5.4 مليون وحدة استهلاكية — لكن هذا يعكس أنظمة مملوكة/سقفية بموجب إطار Lei 14.300/2022 على غرار صافي القياس، وليس برنامجًا مخصصًا للشرفات ذات التوصيل بالمقبس. لا يوجد برنامج دعم أو تبنٍّ مخصص للطاقة الشمسية للشرفات.' },
          { q: 'لماذا يسير تبنّي الطاقة الشمسية للشرفات بوتيرة أبطأ في البرازيل مقارنة ببعض الأسواق الأخرى؟', a: 'بحسب MIT Technology Review Brasil (مايو 2026)، السبب البنيوي هو غياب استثناء تنظيمي مخصص — تخضع الأطقم القابلة للتوصيل بالمقبس لنفس عملية micro-geração الرسمية التي تخضع لها الأنظمة السقفية الكاملة، دون مسار تسجيل أخف للأنظمة الصغيرة، بخلاف الأسواق التي تملك إعفاءً صريحًا للأنظمة الصغيرة.' },
          { q: 'كيف يرتبط هذا بالمقارنة القانونية بين البرتغال والبرازيل على هذا الموقع؟', a: 'يتناول مقال المقارنة بين البرتغال والبرازيل المنطقة الرمادية القانونية في البرازيل إلى جانب الإعفاء المقنَّن في البرتغال. تتعمق هذه الصفحة أكثر في حالة البرازيل تحديدًا: التطور التنظيمي (من RN 482/2012 إلى Lei 14.300/2022 إلى REN 1.059/2023) والتباين بين سوق البرازيل العام الكبير للتوليد الموزع وفئة الشرفات ذات التوصيل بالمقبس التي لم تُعالَج بعد.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[الطاقة الشمسية للشرفات في البرتغال والبرازيل: مقارنة الوضع القانوني](/ar/balcony-solar/balcony-solar-portugal-brazil) — مقارنة الوضع القانوني بين البرتغال والبرازيل التي يوسّعها هذا التقرير',
          '[هل الطاقة الشمسية للشرفات قانونية؟ دليل حسب الدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — متتبع الوضع القانوني العالمي',
          '[هل الطاقة الشمسية للشرفات قانونية في اليابان؟ تقرير الحالة 2027](/ar/balcony-solar/balcony-solar-japan-status-2027) — سوق فجوة ناشئ بشكل مماثل',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-ja.webp',
    title: 'ブラジルのバルコニーソーラー：2027年現状レポート',
    seoTitle: 'ブラジルのバルコニーソーラー：2027年現状レポート',
    intro: 'ブラジルは世界最大級の分散型太陽光発電市場を持っていますが、そのインフラと市場文化はバルコニー据え置き型（プラグイン式）ソーラーに特化したものではありません。このページは、その特定のギャップに関する現状レポートです。コンセント直結・プラグアンドプレイ型のバルコニーソーラーには専用の規制がまだ存在しませんが、それが該当するであろう一般的な分散型発電の枠組みは十分に確立され、広く利用されています。',
    metaDescription: 'ブラジルのLei 14.300/2022は、ANEELの旧Resolução Normativa 482/2012を基盤として、micro-geração distribuída（マイクロ分散発電）とmini-geração distribuída（ミニ分散発電）を規制しています。しかし、MIT Technology Review Brasil（2026年5月）によれば、プラグアンドプレイ型バルコニーソーラーには専用の規制が存在しません — ブラジルは2025年初頭だけで5GW超の分散発電を追加したにもかかわらずです。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ポルトガル・ブラジルの法的比較を超えてブラジルを評価するバルコニーソーラー購入者と市場ウォッチャー',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**ブラジルには、コンセント直結・プラグアンドプレイ型のバルコニーソーラーに関する専用の規制が存在しません — ブラジルの情報源（MIT Technology Review Brasil、2026年5月）は、このカテゴリーにまだ具体的なルールがないことを明確に述べており、専用の枠組みを持つ市場と比べてその普及は「より初期段階」であるとしています。** これは、規模が大きく十分に規制されているブラジルの一般的な分散型太陽光発電市場とは別の話です。Lei 14.300/2022は、micro-geração distribuída（75kWまで）とmini-geração distribuída（75kW〜5MW）を規定しており、ブラジルの国家電力規制機関ANEELによる以前のResolução Normativa（RN）482/2012を基盤としています。この一般的な枠組みは大いに活用されています — ブラジルの報道で引用されるANEELのデータによれば、2025年初頭だけでmicro/mini分散発電が5GW以上追加され、導入量は42GWを超え、540万以上の需要家（consumer units）に恩恵をもたらしました — しかし、その規模のいずれもバルコニーのプラグイン型に特化したものではありません。ブラジルは分散型太陽光発電全般のインフラと市場文化を備えていますが、プラグイン式バルコニーという特定の製品カテゴリーは、まだ専用のルールを待っている部分です。',
    quickAnswerTop: {
      ja: {
        question: 'ブラジルでバルコニーソーラーは合法ですか？',
        answer: '禁止されてはいませんが、具体的に規制されているわけでもありません — MIT Technology Review Brasil（2026年5月）によれば、コンセント直結・プラグアンドプレイ型のバルコニーソーラーモデルには、ブラジルにまだ具体的な規制がなく、専用の枠組みを持つ市場と比べて普及がより初期段階にあります。これは、ブラジルの大規模な一般的分散型太陽光発電市場とは別の話です。Lei 14.300/2022（ANEELの旧RN 482/2012を基盤とする）は、75kWまでのmicro-geração distribuídaと75kW〜5MWのmini-geração distribuídaを規制しており、ブラジルは2025年初頭だけで5GW超の分散発電を追加し、導入量は42GWを超え、540万以上の需要家に及びました。この規模は、ネットメータリング型のクレジットの下での屋根設置型の自己所有システムを反映したものであり、プラグイン式バルコニーのカテゴリーに特化したものではありません。',
        bullets: [
          'MIT Technology Review Brasil（2026年5月）は、プラグアンドプレイ型バルコニーソーラーにブラジルで具体的な規制がないことを明確に述べ、専用の枠組みを持つ国際市場と比べてその普及を「より初期段階」と表現している',
          'ブラジルの一般的な分散型発電の枠組みの規制的系譜：ANEELのResolução Normativa 482/2012が最初にルールを確立し、その後Lei 14.300/2022によって置き換え/更新され、ANEELのREN 1.059/2023を通じて実施されている',
          'Lei 14.300/2022は、micro-geração distribuída（75kWまで）とmini-geração distribuída（75kW〜5MW）を対象とする — 屋根設置・自己所有型の一般カテゴリーであり、小型プラグイン式キットに関する例外規定は文書化されていない',
          'ANEELのデータによれば、ブラジルは2025年初頭だけでmicro/mini分散発電を5GW以上追加し、導入量は42GWを超え、540万以上の需要家に恩恵をもたらした — これは一般的な分散発電市場の規模であり、バルコニー特化のものではないことが明確にされている',
          '枠組み：ブラジルは分散型太陽光発電全般のインフラと市場文化を備えているが、プラグイン式バルコニーという特定の製品カテゴリーにはまだ専用のルールがない — これは補助金プログラムの話ではなく、新興のギャップの話である',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '規制のギャップ：プラグイン式ソーラーに特化した現状', anchor: '#regulatory-gap' },
      { label: '該当するであろう枠組み', anchor: '#dg-framework' },
      { label: 'ブラジルの分散型発電市場は同じものではない', anchor: '#dg-market-scale' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil（2026年5月）は、コンセント直結・プラグアンドプレイ型のバルコニーソーラーにブラジルでまだ具体的な規制がないことを明確に述べています — これがこの現状レポートの核心的な事実です。',
          'ブラジルの一般的な分散型発電の枠組みには明確な規制的系譜があります：ANEELのResolução Normativa 482/2012（2012年）が当初のルールを確立し、Lei 14.300/2022によって置き換え/更新され、ANEELのREN 1.059/2023を通じて詳細に実施されています。',
          'Lei 14.300/2022は、micro-geração distribuída（75kWまで）とmini-geração distribuída（75kW〜5MW）を対象としています — 通常は屋根設置の自己所有型システム向けの一般カテゴリーであり、プラグイン式キットに特化した例外規定は文書化されていません。',
          'ANEELのデータによれば、ブラジルは2025年初頭だけでmicro/mini分散発電を5GW以上追加し、導入量は42GWを超え、540万以上の需要家に恩恵をもたらしました — これは巨大ですが一般的な市場であり、バルコニーのプラグイン型市場ではありません。',
          '正しい捉え方：ブラジルは分散型太陽光発電全般のインフラと市場文化を備えていますが、プラグイン式バルコニーという特定の製品カテゴリーにはまだ専用の規制がありません — そのような補助金プログラムは存在しないため、ブラジルの大規模な一般的分散発電市場をバルコニーソーラーの補助金プログラムと混同してはいけません。',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: '規制のギャップ：プラグイン式ソーラーに特化した現状',
        content: [
          '**ブラジルの情報源であるMIT Technology Review Brasil（2026年5月）は、コンセント直結・プラグアンドプレイ型のバルコニーソーラーモデルにブラジルでまだ具体的な規制がないことを明確に述べており、専用の枠組みを持つ国際市場と比べてその普及が「より初期段階」であるとしています。** これがこの現状レポートの中心的な発見です：ブラジルは分散型太陽光発電の政策全般が不足しているわけではありません（後述）が、プラグイン式バルコニーという特定の製品カテゴリー — 専門業者による屋根設置システムとは異なり、消費者が自分で設置する小型のコンセント直結キット — は、規制当局によってまだ個別に対応されていません。',
          'これは、このクラスターの他の記事で扱われている日本やその他の新興市場のギャップに関する調査結果と似た形をしています：かなりの太陽光インフラと政策を持つ国でありながら、バルコニー/プラグイン型という特定の製品カテゴリーだけが、まだ個別に法制化されていないのです。',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: '該当するであろう枠組み',
        content: [
          '**ブラジルの一般的な分散型太陽光発電規制には、明確な系譜があります。** ANEELのResolução Normativa（RN）482/2012が、分散発電に対するネットメータリング型の補償制度をブラジルで初めて確立しました。この枠組みは、ブラジルの分散発電法的枠組み法であるLei 14.300/2022によって大幅に更新され、法的な裏付けを与えられました。同法は、micro-geração distribuída（75kWまでのシステム）とmini-geração distribuída（75kW〜5MW）を正式に定義しています。ANEELのREN 1.059/2023は、Lei 14.300/2022の規定を技術的な詳細にわたって運用化する規制当局の実施決議です — 接続申請、技術調査要件、双方向計量、INMETRO認証済みインバーターの文書化などが、システムの規模にかかわらず一律に適用されます。',
          'これら3つの規制文書 — RN 482/2012、Lei 14.300/2022、REN 1.059/2023 — のいずれも、小型プラグイン式キットのための別枠の簡易プロセスを設けていません。ブラジルにおけるバルコニーソーラーシステムは、技術的には完全な屋根設置と同じmicro-geraçãoプロセスに該当し、これがMIT Technology Review Brasilによれば、小型システム向けの専用免除がある市場と比べてこのカテゴリーがより初期段階にとどまっている構造的な理由です。',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'ブラジルの分散型発電市場は同じものではない',
        content: [
          '**ブラジルの報道で引用されるANEELのデータによれば、ブラジルは2025年初頭だけでmicro-およびmini-geração distribuídaを5GW以上追加し、分散発電の導入容量は42GWを超え、540万以上の需要家に恩恵をもたらしました。** これは、これらの指標において世界最大級の分散型太陽光発電市場のひとつです。',
          'この規模は、Lei 14.300/2022のネットメータリング型クレジット制度の下で稼働する、通常は屋根設置の自己所有型システムを反映したものです — これは一般的な分散発電市場の成長であり、バルコニーのプラグイン特化型市場やプログラムの証拠ではありません。ブラジルの大規模な分散発電の数字を見て、専用のバルコニーソーラー補助金や普及プログラムが存在すると考えてしまうのは容易ですが、それはこのページが意図的に避けている混同です。ブラジルは、分散型太陽光発電の普及を支えうる基盤インフラ、系統連系プロセス、市場での経験を備えていますが、特定の製品カテゴリーはまだ専用のルールで対応されていません。',
        ],
        callouts: [
          { type: 'warning', text: 'ブラジルの5GW超／42GW／540万以上の需要家という分散発電の数字を、バルコニーソーラーに特化した統計として読み取らないでください。これらはLei 14.300/2022の下での一般的な分散発電市場を表すものであり、バルコニーソーラーは技術的にはその枠組みに該当しますが、小型プラグイン式キットに関する専用の例外規定や別個の報告カテゴリーはありません。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ブラジルでバルコニーソーラーは合法ですか？', a: '禁止されてはいませんが、プラグアンドプレイ型のバルコニーソーラーには専用の規制がありません — MIT Technology Review Brasil（2026年5月）によれば、これにより専用の枠組みを持つ市場と比べてその普及がより初期段階になっています。技術的には、小型キットの例外規定を持たないブラジルの一般的なmicro-geração distribuídaプロセス（Lei 14.300/2022）に該当することになります。' },
          { q: 'Lei 14.300/2022とは何ですか？', a: 'ブラジルの分散発電法的枠組み法で、micro-geração distribuída（75kWまで）とmini-geração distribuída（75kW〜5MW）を正式に定義しています。ANEELの以前のResolução Normativa 482/2012を基盤とし、ANEELのREN 1.059/2023を通じて技術的な詳細が実施されています。' },
          { q: 'ブラジルにはバルコニーソーラーの補助金プログラムがありますか？', a: 'いいえ。ブラジルには大規模な一般的分散型太陽光発電市場があります — 2025年初頭だけで5GW以上追加、42GW以上導入、540万以上の需要家 — しかし、これはLei 14.300/2022のネットメータリング型枠組みの下での自己所有・屋根設置型システムを反映したものであり、バルコニーのプラグイン特化型プログラムではありません。専用のバルコニーソーラー補助金や普及プログラムは存在しません。' },
          { q: 'なぜブラジルでのバルコニーソーラーの普及は他の一部の市場より遅いのですか？', a: 'MIT Technology Review Brasil（2026年5月）によれば、構造的な理由は専用の規制上の例外規定がないことです — プラグイン式キットは、小型システムの明示的な例外を持つ市場とは異なり、小型システム向けの簡易な登録経路がなく、完全な屋根設置システムと同じ正式なmicro-geraçãoプロセスに該当します。' },
          { q: 'これはこのサイトのポルトガル・ブラジル法的比較とどう関連していますか？', a: 'ポルトガル・ブラジル比較記事では、ポルトガルの成文化された適用除外と並んで、ブラジルの法的グレーゾーンを扱っています。このページでは、ブラジルについてさらに深く掘り下げます：規制の系譜（RN 482/2012からLei 14.300/2022、REN 1.059/2023へ）と、ブラジルの大規模な一般的分散発電市場と、まだ対応されていないバルコニーのプラグイン型カテゴリーとの対比です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ポルトガルとブラジルのバルコニーソーラー：法的地位の比較](/ja/balcony-solar/balcony-solar-portugal-brazil) — この詳細レポートが発展させているポルトガル・ブラジルの法的地位比較',
          '[バルコニーソーラーは合法か？国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — グローバルな法的状況トラッカー',
          '[日本でバルコニーソーラーは合法か？2027年現状レポート](/ja/balcony-solar/balcony-solar-japan-status-2027) — 同様の形をした新興ギャップ市場',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-ko.webp',
    title: '브라질 발코니 태양광 현황 보고서 2027',
    seoTitle: '브라질 발코니 태양광 현황 보고서 2027',
    intro: '브라질은 세계 최대 규모의 분산형 태양광 발전 시장 중 하나를 보유하고 있지만, 이러한 인프라와 시장 문화가 콘센트 직결형 발코니 태양광에 특화된 것은 아닙니다. 이 페이지는 바로 그 특정한 공백에 관한 현황 보고서입니다. 플러그 앤 플레이 방식으로 콘센트에 직접 연결하는 발코니 태양광에 대한 전용 규정은 아직 존재하지 않지만, 이러한 제품이 해당될 일반적인 분산발전 프레임워크 자체는 잘 확립되어 있고 널리 활용되고 있습니다.',
    metaDescription: '브라질의 Lei 14.300/2022는 ANEEL의 이전 Resolução Normativa 482/2012를 기반으로 마이크로 및 미니 분산발전(micro-/mini-geração distribuída)을 규제합니다. 하지만 MIT Technology Review Brasil(2026년 5월)에 따르면 플러그 앤 플레이 방식의 발코니 태양광 자체에는 전용 규정이 없습니다 — 브라질이 2025년 초에만 5GW 이상의 분산발전을 추가했음에도 그렇습니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '포르투갈/브라질 법적 비교를 넘어 브라질을 평가하는 발코니 태양광 구매자 및 시장 관찰자',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**브라질에는 플러그 앤 플레이 방식으로 콘센트에 직접 연결하는 발코니 태양광에 대한 전용 규정이 없습니다 — 브라질 현지 매체(MIT Technology Review Brasil, 2026년 5월)는 이 카테고리에 아직 구체적인 규칙이 없다고 명시적으로 밝히고 있으며, 이로 인해 전용 프레임워크를 갖춘 시장에 비해 도입이 "더 초기 단계"에 머물러 있다고 설명합니다.** 이는 규모가 크고 잘 규제된 브라질의 일반적인 분산형 태양광 발전 시장과는 별개의 이야기입니다. Lei 14.300/2022는 micro-geração distribuída(75kW 이하)와 mini-geração distribuída(75kW~5MW)를 규율하며, 브라질의 국가 전력 규제기관인 ANEEL의 이전 Resolução Normativa(RN) 482/2012를 기반으로 합니다. 이 일반 프레임워크는 활발히 활용되고 있습니다 — 브라질 언론이 인용한 ANEEL 데이터에 따르면 브라질은 2025년 초에만 마이크로/미니 분산발전을 5GW 이상 추가했으며, 설치 용량은 42GW를 넘어섰고 540만 개 이상의 수요가(consumer unit)가 혜택을 받았습니다 — 하지만 이러한 규모 중 어느 것도 발코니 플러그인 방식에 특화된 것은 아닙니다. 브라질은 분산형 태양광 발전 전반에 대한 인프라와 시장 문화를 갖추고 있지만, 발코니 플러그인이라는 특정 제품 카테고리는 여전히 전용 규칙을 기다리고 있는 부분입니다.',
    quickAnswerTop: {
      ko: {
        question: '브라질에서 발코니 태양광은 합법입니까?',
        answer: '금지되어 있지는 않지만, 그렇다고 구체적으로 규제되어 있지도 않습니다 — MIT Technology Review Brasil(2026년 5월)에 따르면, 콘센트 직결형 플러그 앤 플레이 발코니 태양광 모델은 브라질에 여전히 구체적인 규정이 없으며, 이로 인해 전용 프레임워크를 갖춘 시장보다 도입이 더 초기 단계에 머물러 있습니다. 이는 브라질의 대규모 일반 분산형 태양광 발전 시장과는 별개입니다. Lei 14.300/2022(ANEEL의 이전 RN 482/2012를 기반으로 함)는 75kW 이하의 micro-geração distribuída와 75kW~5MW의 mini-geração distribuída를 규제하며, 브라질은 2025년 초에만 분산발전을 5GW 이상 추가해 설치 용량이 42GW를 넘어섰고 540만 개 이상의 수요가에 이르렀습니다. 이러한 규모는 넷미터링 방식의 크레딧 제도 아래에서 운영되는 자가 소유의 옥상형 시스템을 반영한 것이며, 발코니 플러그인 카테고리 자체를 나타내는 것은 아닙니다.',
        bullets: [
          'MIT Technology Review Brasil(2026년 5월)은 플러그 앤 플레이 방식의 발코니 태양광이 브라질에서 구체적인 규정이 없다고 명시적으로 밝히며, 전용 프레임워크를 갖춘 국제 시장에 비해 도입이 "더 초기 단계"라고 설명함',
          '브라질의 일반적인 분산발전 프레임워크의 규제 연혁: ANEEL의 Resolução Normativa 482/2012가 최초로 규칙을 확립했고, 이후 Lei 14.300/2022에 의해 대체/갱신되었으며, ANEEL의 REN 1.059/2023을 통해 시행됨',
          'Lei 14.300/2022는 micro-geração distribuída(75kW 이하)와 mini-geração distribuída(75kW~5MW)를 포괄함 — 일반적으로 옥상에 설치되는 자가 소유 시스템을 위한 일반 카테고리이며, 소형 플러그인 키트에 대한 문서화된 예외 규정은 없음',
          'ANEEL 데이터에 따르면 브라질은 2025년 초에만 마이크로/미니 분산발전을 5GW 이상 추가했고, 설치 용량은 42GW를 넘어섰으며 540만 개 이상의 수요가가 혜택을 받음 — 이는 일반 분산발전 시장의 규모이며, 명시적으로 발코니 특화형이 아님',
          '프레임: 브라질은 분산형 태양광 발전 전반에 대한 인프라와 시장 문화를 갖추고 있지만, 발코니 플러그인이라는 특정 제품 카테고리에는 아직 전용 규정이 없습니다 — 이는 보조금 프로그램에 관한 이야기가 아니라 신흥 공백에 관한 이야기입니다',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '규제 공백: 플러그인 태양광에 특화된 문제', anchor: '#regulatory-gap' },
      { label: '해당될 프레임워크', anchor: '#dg-framework' },
      { label: '브라질의 분산발전 시장은 다른 이야기입니다', anchor: '#dg-market-scale' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil(2026년 5월)은 콘센트 직결형 플러그 앤 플레이 발코니 태양광이 브라질에서 여전히 구체적인 규정이 없다고 명시적으로 밝히고 있습니다 — 이것이 이 현황 보고서의 핵심 사실입니다.',
          '브라질의 일반적인 분산발전 프레임워크에는 명확한 규제 연혁이 있습니다: ANEEL의 Resolução Normativa 482/2012(2012년)가 최초 규칙을 확립했고, Lei 14.300/2022에 의해 대체/갱신되었으며, ANEEL의 REN 1.059/2023을 통해 세부적으로 시행되었습니다.',
          'Lei 14.300/2022는 micro-geração distribuída(75kW 이하)와 mini-geração distribuída(75kW~5MW)를 포괄합니다 — 일반적으로 옥상에 설치되는 자가 소유 시스템을 위한 일반 카테고리이며, 플러그인 키트에 특화된 문서화된 예외 규정은 없습니다.',
          '브라질은 2025년 초에만 마이크로/미니 분산발전을 5GW 이상 추가했고, 설치 용량은 42GW를 넘어섰으며 540만 개 이상의 수요가가 혜택을 받았습니다, ANEEL 데이터에 따르면 — 이는 거대하지만 일반적인 시장이며, 발코니 플러그인 시장이 아닙니다.',
          '올바른 프레임: 브라질은 분산형 태양광 발전 전반에 대한 인프라와 시장 문화를 갖추고 있지만, 발코니 플러그인이라는 특정 제품 카테고리에는 아직 전용 규정이 없습니다 — 그러한 프로그램이 존재하지 않으므로, 브라질의 대규모 일반 분산발전 시장을 발코니 태양광 보조금 프로그램과 혼동해서는 안 됩니다.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: '규제 공백: 플러그인 태양광에 특화된 문제',
        content: [
          '**브라질 현지 매체인 MIT Technology Review Brasil(2026년 5월)은 콘센트 직결형 플러그 앤 플레이 발코니 태양광 모델이 브라질에서 여전히 구체적인 규정이 없다고 명시적으로 밝히며, 이로 인해 전용 프레임워크를 갖춘 국제 시장에 비해 도입이 "더 초기 단계"라고 설명합니다.** 이것이 이 현황 보고서의 핵심 발견입니다: 브라질은 일반적인 분산형 태양광 정책이 부족한 것이 아니라(아래 참조), 발코니 플러그인이라는 특정 제품 카테고리 — 전문적으로 설치되는 옥상형 시스템과 달리, 소비자가 직접 설치하는 소형 콘센트 직결형 키트 — 가 규제 당국에 의해 별도로 다루어지지 않았을 뿐입니다.',
          '이는 이 클러스터의 다른 글에서 다루는 일본 및 기타 신흥 시장의 공백 사례와 유사한 형태입니다: 상당한 태양광 인프라와 정책을 갖춘 국가이지만, 발코니/플러그인이라는 특정 제품 카테고리만 아직 별도로 입법되지 않은 경우입니다.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: '해당될 프레임워크',
        content: [
          '**브라질의 일반적인 분산형 태양광 발전 규제에는 명확한 연혁이 있습니다.** ANEEL의 Resolução Normativa(RN) 482/2012는 분산발전에 대한 넷미터링 방식의 보상 제도를 브라질 최초로 확립했습니다. 이 프레임워크는 브라질의 분산발전 법적 프레임워크 법률인 Lei 14.300/2022를 통해 대폭 갱신되고 법적 뒷받침을 받았으며, 이 법은 micro-geração distribuída(75kW 이하 시스템)와 mini-geração distribuída(75kW~5MW)를 공식적으로 정의합니다. ANEEL의 REN 1.059/2023은 Lei 14.300/2022의 조항을 기술적으로 세부화해 운영하는 규제기관의 시행 결의안입니다 — 연결 신청, 기술 연구 요건, 양방향 계량, INMETRO 인증 인버터 문서화 등이 시스템 규모와 무관하게 균일하게 적용됩니다.',
          '이 세 가지 규제 문서 — RN 482/2012, Lei 14.300/2022, REN 1.059/2023 — 중 어느 것도 소형 플러그인 키트를 위한 별도의 간소화된 절차를 마련하지 않았습니다. 브라질에서 발코니 태양광 시스템은 기술적으로 완전한 옥상 설치와 동일한 micro-geração 절차에 해당하며, 이는 MIT Technology Review Brasil에 따르면 소형 시스템을 위한 전용 예외를 갖춘 시장에 비해 이 카테고리가 계속 더 초기 단계에 머무는 구조적 이유입니다.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: '브라질의 분산발전 시장은 다른 이야기입니다',
        content: [
          '**브라질 언론이 인용한 ANEEL 데이터에 따르면, 브라질은 2025년 초에만 마이크로 및 미니 분산발전을 5GW 이상 추가했고, 분산발전 설치 용량은 42GW를 넘어섰으며 540만 개 이상의 수요가가 혜택을 받았습니다.** 이는 이러한 기준으로 볼 때 세계 최대 규모의 분산형 태양광 발전 시장 중 하나입니다.',
          '이러한 규모는 Lei 14.300/2022의 넷미터링 방식 크레딧 제도 아래에서 운영되는, 일반적으로 옥상에 설치된 자가 소유 시스템을 반영한 것입니다 — 이는 일반 분산발전 시장의 성장이며, 발코니 플러그인 특화 시장이나 프로그램의 증거가 아닙니다. 브라질의 대규모 분산발전 수치를 보고 전용 발코니 태양광 보조금이나 도입 프로그램이 존재한다고 짐작하기 쉽지만, 이 페이지는 그러한 혼동을 의도적으로 피하고 있습니다. 브라질은 발코니 태양광 도입을 뒷받침할 수 있는 기본 인프라, 계통 연계 절차, 분산형 태양광에 대한 시장 경험을 갖추고 있지만, 특정 제품 카테고리는 아직 전용 규정으로 다루어지지 않았습니다.',
        ],
        callouts: [
          { type: 'warning', text: '브라질의 5GW 이상/42GW/540만 개 이상 수요가라는 분산발전 수치를 발코니 태양광에 특화된 통계로 해석하지 마십시오. 이는 Lei 14.300/2022에 따른 일반 분산발전 시장을 나타내는 것이며, 발코니 태양광이 기술적으로는 이 범주에 속하겠지만 소형 플러그인 키트를 위한 전용 예외 규정이나 별도의 보고 카테고리는 없습니다.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '브라질에서 발코니 태양광은 합법입니까?', a: '금지되어 있지는 않지만, 플러그 앤 플레이 방식의 발코니 태양광 자체에는 전용 규정이 없습니다 — MIT Technology Review Brasil(2026년 5월)에 따르면, 이로 인해 전용 프레임워크를 갖춘 시장보다 도입이 더 초기 단계에 머물러 있습니다. 기술적으로는 소형 키트에 대한 예외 규정이 없는 브라질의 일반적인 micro-geração distribuída 절차(Lei 14.300/2022)에 해당하게 됩니다.' },
          { q: 'Lei 14.300/2022란 무엇입니까?', a: '브라질의 분산발전 법적 프레임워크 법률로, micro-geração distribuída(75kW 이하)와 mini-geração distribuída(75kW~5MW)를 공식적으로 정의합니다. ANEEL의 이전 Resolução Normativa 482/2012를 기반으로 하며, ANEEL의 REN 1.059/2023을 통해 기술적으로 세부 시행됩니다.' },
          { q: '브라질에는 발코니 태양광 보조금 프로그램이 있습니까?', a: '없습니다. 브라질에는 대규모의 일반적인 분산형 태양광 발전 시장이 있습니다 — 2025년 초에만 5GW 이상 추가, 42GW 이상 설치, 540만 개 이상의 수요가 — 하지만 이는 Lei 14.300/2022의 넷미터링 방식 프레임워크 아래의 자가 소유·옥상형 시스템을 반영한 것이며, 발코니 플러그인 특화 프로그램이 아닙니다. 전용 발코니 태양광 보조금이나 도입 프로그램은 존재하지 않습니다.' },
          { q: '브라질에서 발코니 태양광 도입이 다른 일부 시장보다 느린 이유는 무엇입니까?', a: 'MIT Technology Review Brasil(2026년 5월)에 따르면, 구조적인 이유는 전용 규제 예외 조항이 없기 때문입니다 — 플러그인 키트는 소형 시스템에 대한 명시적 예외를 갖춘 시장과 달리, 소형 시스템을 위한 간소화된 등록 경로 없이 완전한 옥상 설치와 동일한 공식 micro-geração 절차에 해당합니다.' },
          { q: '이것이 이 사이트의 포르투갈/브라질 법적 비교와 어떤 관련이 있습니까?', a: '포르투갈/브라질 비교 글은 포르투갈의 성문화된 예외 규정과 함께 브라질의 법적 회색지대를 다룹니다. 이 페이지는 브라질에 대해 더 깊이 다룹니다: 규제 연혁(RN 482/2012에서 Lei 14.300/2022, REN 1.059/2023으로)과, 브라질의 대규모 일반 분산발전 시장과 아직 다루어지지 않은 발코니 플러그인 카테고리 간의 대조입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[포르투갈과 브라질의 발코니 태양광: 법적 지위 비교](/ko/balcony-solar/balcony-solar-portugal-brazil) — 이 상세 보고서가 확장하는 포르투갈/브라질 법적 지위 비교',
          '[발코니 태양광은 합법입니까? 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 글로벌 법적 현황 트래커',
          '[일본에서 발코니 태양광은 합법입니까? 2027년 현황 보고서](/ko/balcony-solar/balcony-solar-japan-status-2027) — 유사한 형태의 신흥 공백 시장',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-pt.webp',
    title: 'Energia solar de varanda no Brasil: relatório de status 2027',
    seoTitle: 'Energia solar de varanda no Brasil: relatório de status 2027',
    intro: 'O Brasil tem um dos maiores mercados de geração distribuída solar do mundo — mas essa infraestrutura e cultura de mercado não são específicas da energia solar de varanda plug-and-play. Esta página é um relatório de status sobre essa lacuna específica: ainda não existe regulamentação dedicada para kits solares plug-and-play, ligados diretamente à tomada, mesmo que o marco geral de geração distribuída sob o qual eles se enquadrariam esteja bem estabelecido e seja amplamente utilizado.',
    metaDescription: 'A Lei 14.300/2022 do Brasil regula a micro- e mini-geração distribuída, com base na Resolução Normativa 482/2012 da ANEEL. Mas a energia solar de varanda plug-and-play especificamente não tem regulamentação dedicada, segundo a MIT Technology Review Brasil (maio de 2026) — apesar de o Brasil ter adicionado mais de 5 GW em geração distribuída só no início de 2025.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda e observadores de mercado avaliando o Brasil além da comparação legal Portugal/Brasil',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**O Brasil não tem regulamentação dedicada para a energia solar de varanda plug-and-play, ligada diretamente à tomada — uma fonte brasileira (MIT Technology Review Brasil, maio de 2026) afirma explicitamente que essa categoria ainda não tem regras específicas, o que torna sua adoção "mais incipiente" do que em mercados com marcos dedicados.** Isso é diferente do grande e bem regulado mercado geral de geração distribuída solar do Brasil: a Lei 14.300/2022 rege a micro-geração distribuída (até 75kW) e a mini-geração distribuída (75kW-5MW), com base na anterior Resolução Normativa (RN) 482/2012 da ANEEL, o regulador nacional de eletricidade do Brasil. Esse marco geral é amplamente utilizado — o Brasil adicionou mais de 5 GW em micro/mini geração distribuída só no início de 2025, ultrapassando 42 GW instalados e beneficiando mais de 5.4 milhões de unidades consumidoras, segundo dados da ANEEL citados pela imprensa brasileira — mas nada dessa escala é específico da energia solar plug-and-play de varanda. O Brasil tem a infraestrutura e a cultura de mercado para a energia solar distribuída de forma geral; a categoria de produto específica da varanda plug-and-play é a parte que ainda espera regras dedicadas.',
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal no Brasil?',
        answer: 'Não é proibida, mas também não é especificamente regulamentada — segundo a MIT Technology Review Brasil (maio de 2026), o modelo de energia solar de varanda plug-and-play, ligado diretamente à tomada, ainda não tem regulamentação específica no Brasil, o que torna sua adoção mais incipiente do que em mercados com marcos dedicados. Isso é separado do grande mercado geral de geração distribuída solar do Brasil: a Lei 14.300/2022 (com base na anterior RN 482/2012 da ANEEL) regula a micro-geração distribuída até 75kW e a mini-geração distribuída de 75kW a 5MW, e o Brasil adicionou mais de 5 GW em geração distribuída só no início de 2025, ultrapassando 42 GW instalados em mais de 5.4 milhões de unidades consumidoras. Essa escala reflete sistemas próprios, geralmente instalados no telhado, sob créditos no estilo net metering, não a categoria de varanda plug-and-play especificamente.',
        bullets: [
          'A MIT Technology Review Brasil (maio de 2026) afirma explicitamente que a energia solar de varanda plug-and-play não tem regulamentação específica no Brasil, chamando sua adoção de "mais incipiente" do que em mercados internacionais com marcos dedicados',
          'Trajetória regulatória do marco geral de geração distribuída do Brasil: a Resolução Normativa 482/2012 da ANEEL estabeleceu as regras iniciais, posteriormente substituída/atualizada pela Lei 14.300/2022, implementada por meio da REN 1.059/2023 da ANEEL',
          'A Lei 14.300/2022 abrange a micro-geração distribuída (até 75kW) e a mini-geração distribuída (75kW-5MW) — categorias gerais para sistemas próprios, tipicamente de telhado, sem nenhuma exceção documentada para kits plug-in pequenos',
          'O Brasil adicionou mais de 5 GW em micro/mini geração distribuída só no início de 2025, ultrapassando 42 GW instalados e beneficiando mais de 5.4 milhões de unidades consumidoras, segundo dados da ANEEL — escala do mercado geral de geração distribuída, explicitamente não específica de varanda',
          'Enquadramento: o Brasil tem a infraestrutura e a cultura de mercado para a energia solar distribuída de forma geral; a categoria de produto de varanda plug-and-play especificamente ainda não tem regras dedicadas — uma história emergente de lacuna, não uma história de programa de subsídio',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'A lacuna regulatória: energia solar plug-in especificamente', anchor: '#regulatory-gap' },
      { label: 'O marco sob o qual ela se enquadraria', anchor: '#dg-framework' },
      { label: 'O mercado de geração distribuída do Brasil não é a mesma coisa', anchor: '#dg-market-scale' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A MIT Technology Review Brasil (maio de 2026) afirma explicitamente que a energia solar de varanda plug-and-play, ligada diretamente à tomada, ainda não tem regulamentação específica no Brasil — este é o fato central deste relatório de status.',
          'O marco geral de geração distribuída do Brasil tem uma trajetória regulatória clara: a Resolução Normativa 482/2012 (2012) da ANEEL estabeleceu as regras originais, substituída/atualizada pela Lei 14.300/2022, implementada em detalhe por meio da REN 1.059/2023 da ANEEL.',
          'A Lei 14.300/2022 abrange a micro-geração distribuída (até 75kW) e a mini-geração distribuída (75kW-5MW) — categorias gerais para sistemas próprios, tipicamente de telhado, sem nenhuma exceção documentada especificamente para kits plug-in.',
          'O Brasil adicionou mais de 5 GW em micro/mini geração distribuída só no início de 2025, ultrapassando 42 GW instalados e beneficiando mais de 5.4 milhões de unidades consumidoras, segundo dados da ANEEL — um mercado enorme, mas geral, não de varanda plug-in.',
          'O enquadramento correto: o Brasil tem a infraestrutura e a cultura de mercado para a energia solar distribuída de forma geral, mas a categoria de produto de varanda plug-and-play especificamente ainda não tem regulamentação dedicada — não confunda o grande mercado geral de geração distribuída do Brasil com um programa de subsídio para energia solar de varanda, porque tal programa não existe.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'A lacuna regulatória: energia solar plug-in especificamente',
        content: [
          '**Uma fonte brasileira — a MIT Technology Review Brasil, maio de 2026 — afirma explicitamente que o modelo de energia solar de varanda plug-and-play, ligado diretamente à tomada, ainda não tem regulamentação específica no Brasil, o que torna sua adoção "mais incipiente" em comparação com mercados internacionais que têm marcos dedicados.** Esta é a conclusão central deste relatório de status: não falta ao Brasil política de energia solar distribuída de forma geral (veja abaixo), mas a categoria de produto específica de varanda plug-and-play — kits pequenos, instalados pelo próprio consumidor, ligados diretamente à tomada, diferentemente de sistemas de telhado instalados profissionalmente — ainda não foi tratada separadamente pelos reguladores.',
          'Isso tem um formato semelhante às conclusões sobre a lacuna no Japão e em outros mercados emergentes cobertos em outras partes deste conjunto de artigos: um país com infraestrutura e política solar substanciais, onde a categoria de produto específica de varanda/plug-in simplesmente ainda não foi legislada separadamente.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'O marco sob o qual ela se enquadraria',
        content: [
          '**A regulamentação geral de geração distribuída solar do Brasil tem uma trajetória clara.** A Resolução Normativa (RN) 482/2012 da ANEEL estabeleceu, pela primeira vez, o sistema de compensação no estilo net metering do Brasil para a geração distribuída. Esse marco foi substancialmente atualizado e recebeu respaldo legal pela Lei 14.300/2022, o Marco Legal da Geração Distribuída do Brasil, que define formalmente a micro-geração distribuída (sistemas de até 75kW) e a mini-geração distribuída (75kW a 5MW). A REN 1.059/2023 da ANEEL é a resolução de implementação do regulador que operacionaliza em detalhe técnico as disposições da Lei 14.300/2022 — solicitação de conexão, exigências de estudo técnico, medição bidirecional e documentação de inversor certificado pelo INMETRO, aplicadas de forma uniforme independentemente do tamanho do sistema.',
          'Nenhum desses três instrumentos — RN 482/2012, Lei 14.300/2022 ou REN 1.059/2023 — prevê um processo separado e mais leve para kits plug-in pequenos. Um sistema de energia solar de varanda no Brasil se enquadra tecnicamente no mesmo processo de micro-geração que uma instalação completa de telhado, o que, segundo a MIT Technology Review Brasil, é a razão estrutural pela qual a categoria permanece mais incipiente do que em mercados com uma isenção dedicada para sistemas pequenos.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'O mercado de geração distribuída do Brasil não é a mesma coisa',
        content: [
          '**O Brasil adicionou mais de 5 GW em micro- e mini-geração distribuída só no início de 2025, ultrapassando 42 GW de capacidade instalada de geração distribuída e beneficiando mais de 5.4 milhões de unidades consumidoras, segundo dados da ANEEL citados pela imprensa brasileira.** Este é um dos maiores mercados de geração distribuída solar do mundo nessas medidas.',
          'Essa escala reflete sistemas próprios, tipicamente instalados no telhado, operando sob o sistema de créditos no estilo net metering da Lei 14.300/2022 — é crescimento do mercado geral de geração distribuída, não evidência de um mercado ou programa específico de varanda plug-in. É fácil ler os grandes números de geração distribuída do Brasil e presumir que existe um subsídio ou programa de adoção dedicado para energia solar de varanda; essa seria uma confusão que esta página evita deliberadamente. O Brasil tem a infraestrutura subjacente, o processo de interconexão à rede e a familiaridade de mercado com a energia solar distribuída que poderiam sustentar a adoção de energia solar de varanda — mas a categoria de produto específica ainda não foi tratada com regras dedicadas.',
        ],
        callouts: [
          { type: 'warning', text: 'Não interprete os números de 5+ GW / 42 GW / 5.4 milhões de unidades consumidoras de geração distribuída do Brasil como estatísticas específicas de energia solar de varanda. Eles descrevem o mercado geral de geração distribuída sob a Lei 14.300/2022, sob o qual a energia solar de varanda tecnicamente se enquadraria, mas que não tem nenhuma exceção dedicada para kits plug-in pequenos nem categoria de relatório separada.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A energia solar de varanda é legal no Brasil?', a: 'Não é proibida, mas a energia solar de varanda plug-and-play especificamente não tem regulamentação dedicada — segundo a MIT Technology Review Brasil (maio de 2026), isso torna sua adoção mais incipiente do que em mercados com marcos dedicados. Tecnicamente, ela se enquadraria no processo geral de micro-geração distribuída do Brasil (Lei 14.300/2022), que não tem nenhuma exceção para kits pequenos.' },
          { q: 'O que é a Lei 14.300/2022?', a: 'O Marco Legal da Geração Distribuída do Brasil, que define formalmente a micro-geração distribuída (até 75kW) e a mini-geração distribuída (75kW-5MW), com base na anterior Resolução Normativa 482/2012 da ANEEL e implementada em detalhe técnico por meio da REN 1.059/2023 da ANEEL.' },
          { q: 'O Brasil tem um programa de subsídio para energia solar de varanda?', a: 'Não. O Brasil tem um grande mercado geral de geração distribuída solar — mais de 5 GW adicionados só no início de 2025, mais de 42 GW instalados, mais de 5.4 milhões de unidades consumidoras — mas isso reflete sistemas próprios/de telhado sob o marco de net metering da Lei 14.300/2022, não um programa específico de varanda plug-in. Não existe subsídio ou programa de adoção dedicado para energia solar de varanda.' },
          { q: 'Por que a adoção de energia solar de varanda é mais lenta no Brasil do que em alguns outros mercados?', a: 'Segundo a MIT Technology Review Brasil (maio de 2026), a razão estrutural é a falta de uma exceção regulatória dedicada — os kits plug-in se enquadram no mesmo processo formal de micro-geração que instalações completas de telhado, sem um caminho de registro mais leve para sistemas pequenos, diferentemente de mercados com uma isenção explícita para sistemas pequenos.' },
          { q: 'Como isso se relaciona com a comparação legal Portugal/Brasil deste site?', a: 'O artigo de comparação Portugal/Brasil aborda a zona cinzenta legal do Brasil ao lado da isenção codificada de Portugal. Esta página aprofunda especificamente o Brasil: a trajetória regulatória (de RN 482/2012 para Lei 14.300/2022 e REN 1.059/2023) e o contraste entre o grande mercado geral de geração distribuída do Brasil e a categoria de varanda plug-in ainda não abordada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Energia solar de varanda em Portugal e no Brasil: status legal comparado](/pt/balcony-solar/balcony-solar-portugal-brazil) — a comparação legal Portugal/Brasil que este dossiê aprofunda',
          '[A energia solar de varanda é legal? Um guia país por país](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
          '[A energia solar de varanda é legal no Japão? Relatório de status 2027](/pt/balcony-solar/balcony-solar-japan-status-2027) — um mercado emergente de lacuna com formato semelhante',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-brazil-status-2027-overview-hero-zh.webp',
    title: '巴西阳台光伏现状报告2027',
    seoTitle: '巴西阳台光伏现状报告2027',
    intro: '巴西拥有全球最大的分布式光伏发电市场之一——但这种基础设施和市场文化并不是专门针对插座直连式阳台光伏的。本页是关于这一具体空白的现状报告:即插即用、直接接入插座的阳台光伏目前还没有专门的监管规定,尽管它可能适用的一般分布式发电框架已经十分成熟并被广泛使用。',
    metaDescription: '巴西的Lei 14.300/2022法规规范了micro-geração distribuída(微型分布式发电)和mini-geração distribuída(小型分布式发电),该法以ANEEL此前的Resolução Normativa 482/2012号决议为基础。但根据《麻省理工科技评论》巴西版(2026年5月)报道,即插即用式阳台光伏并没有专门的监管规定——尽管巴西仅在2025年初就新增了超过5 GW的分布式发电装机。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '正在评估葡萄牙/巴西法律对比之外巴西情况的阳台光伏购买者和市场观察者',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**巴西没有针对即插即用、直接接入插座的阳台光伏的专门监管规定——一份巴西本地信源(《麻省理工科技评论》巴西版,2026年5月)明确指出,该品类目前仍无具体规则,这使其普及程度比拥有专门监管框架的市场"更为初期"。** 这与巴西规模庞大且监管完善的一般分布式光伏发电市场是两回事:Lei 14.300/2022法规管理micro-geração distribuída(不超过75kW)和mini-geração distribuída(75kW至5MW),该法以巴西国家电力监管机构ANEEL此前的Resolução Normativa(RN)482/2012号决议为基础。这一一般性框架被大量使用——据巴西媒体援引的ANEEL数据,巴西仅在2025年初就新增了超过5 GW的微型/小型分布式发电装机,累计装机超过42 GW,惠及540万以上用户单元——但其中没有一项规模是专门针对阳台插座式光伏的。巴西在分布式光伏发电方面总体上具备基础设施和市场文化;插座式阳台这一特定产品品类恰恰是仍在等待专门规则的部分。',
    quickAnswerTop: {
      zh: {
        question: '阳台光伏在巴西合法吗?',
        answer: '并未被禁止,但也没有专门监管——根据《麻省理工科技评论》巴西版(2026年5月),即插即用、直接接入插座的阳台光伏模式在巴西仍无具体监管规定,这使其普及程度比拥有专门框架的市场更为初期。这与巴西规模庞大的一般分布式光伏发电市场是两回事:Lei 14.300/2022法规(以ANEEL此前的RN 482/2012号决议为基础)管理不超过75kW的micro-geração distribuída和75kW至5MW的mini-geração distribuída,巴西仅在2025年初就新增了超过5 GW的分布式发电装机,累计装机超过42 GW,覆盖540万以上用户单元。这一规模反映的是在净计量式电费抵扣制度下、通常安装在屋顶的自有系统,而非专门针对插座式阳台光伏的品类。',
        bullets: [
          '《麻省理工科技评论》巴西版(2026年5月)明确指出,即插即用式阳台光伏在巴西没有专门监管规定,称其普及程度比拥有专门框架的国际市场"更为初期"',
          '巴西一般分布式发电框架的监管沿革:ANEEL的Resolução Normativa 482/2012号决议最先确立规则,随后被Lei 14.300/2022取代/更新,并通过ANEEL的REN 1.059/2023号决议实施',
          'Lei 14.300/2022涵盖micro-geração distribuída(不超过75kW)和mini-geração distribuída(75kW至5MW)——针对自有屋顶等系统的一般品类,没有为小型插座式套件设立文件化的豁免',
          '据ANEEL数据,巴西仅在2025年初就新增了超过5 GW的微型/小型分布式发电装机,累计装机超过42 GW,惠及540万以上用户单元——这是一般分布式发电市场的规模,明确并非阳台专属',
          '定位:巴西在分布式光伏发电方面总体上具备基础设施和市场文化;但插座式阳台这一特定产品品类尚无专门规则——这是一个正在浮现的空白故事,而不是补贴项目的故事',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '监管空白:插座式光伏的具体情况', anchor: '#regulatory-gap' },
      { label: '可能适用的框架', anchor: '#dg-framework' },
      { label: '巴西的分布式发电市场并非同一回事', anchor: '#dg-market-scale' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '《麻省理工科技评论》巴西版(2026年5月)明确指出,即插即用、直接接入插座的阳台光伏在巴西仍无专门监管规定——这是本报告的核心事实。',
          '巴西的一般分布式发电框架有清晰的监管沿革:ANEEL的Resolução Normativa 482/2012号决议(2012年)确立了最初的规则,随后被Lei 14.300/2022取代/更新,并通过ANEEL的REN 1.059/2023号决议详细实施。',
          'Lei 14.300/2022涵盖micro-geração distribuída(不超过75kW)和mini-geração distribuída(75kW至5MW)——面向自有、通常安装在屋顶的系统的一般品类,没有专门针对插座式套件的文件化豁免。',
          '据ANEEL数据,巴西仅在2025年初就新增了超过5 GW的微型/小型分布式发电装机,累计装机超过42 GW,惠及540万以上用户单元——这是一个庞大但通用的市场,而非阳台插座式市场。',
          '正确的定位是:巴西在分布式光伏发电方面总体上具备基础设施和市场文化,但插座式阳台这一特定产品品类尚无专门监管——不要把巴西庞大的一般分布式发电市场与阳台光伏补贴项目混为一谈,因为这样的项目并不存在。',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: '监管空白:插座式光伏的具体情况',
        content: [
          '**一份巴西本地信源——《麻省理工科技评论》巴西版,2026年5月——明确指出,即插即用、直接接入插座的阳台光伏模式在巴西仍无专门监管规定,这使其普及程度相较于拥有专门框架的国际市场"更为初期"。** 这是本报告的核心发现:巴西并不缺乏总体上的分布式光伏政策(见下文),但插座式阳台这一特定产品品类——由消费者自行安装、直接接入插座的小型套件,不同于由专业人员安装的屋顶系统——尚未被监管机构单独处理。',
          '这与本系列其他文章所涵盖的日本及其他新兴市场的空白情况形态相似:一个拥有相当规模光伏基础设施和政策的国家,只是阳台/插座式这一特定产品品类尚未被单独立法。',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: '可能适用的框架',
        content: [
          '**巴西的一般分布式光伏发电监管有着清晰的沿革。** ANEEL的Resolução Normativa(RN)482/2012号决议最早确立了巴西针对分布式发电的净计量式补偿制度。该框架后来通过Lei 14.300/2022——巴西的《分布式发电法律框架法》——得到大幅更新并获得法律支撑,该法正式定义了micro-geração distribuída(不超过75kW的系统)和mini-geração distribuída(75kW至5MW)。ANEEL的REN 1.059/2023号决议是监管机构的实施性决议,将Lei 14.300/2022的规定落实到技术细节层面——包括并网申请、技术研究要求、双向计量以及INMETRO认证逆变器文件要求,且不论系统规模大小,均统一适用。',
          '这三份监管文件——RN 482/2012、Lei 14.300/2022和REN 1.059/2023——都没有为小型插座式套件设立单独、更简化的流程。在巴西,阳台光伏系统技术上适用与完整屋顶安装相同的micro-geração流程,据《麻省理工科技评论》巴西版报道,这正是该品类相较于拥有专门小型系统豁免的市场仍更为初期的结构性原因。',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: '巴西的分布式发电市场并非同一回事',
        content: [
          '**据巴西媒体援引的ANEEL数据,巴西仅在2025年初就新增了超过5 GW的micro-及mini-geração distribuída装机,分布式发电累计装机超过42 GW,惠及540万以上用户单元。** 按这些指标衡量,这是全球规模最大的分布式光伏发电市场之一。',
          '这一规模反映的是在Lei 14.300/2022净计量式电费抵扣制度下运行的、通常安装在屋顶的自有系统——这是一般分布式发电市场的增长,并非阳台插座式专属市场或项目的证据。人们很容易看到巴西庞大的分布式发电数字,就误以为存在专门的阳台光伏补贴或普及项目;而本页有意避免这种混淆。巴西具备可能支持阳台光伏普及的基础设施、并网流程以及对分布式光伏的市场熟悉度——但这一特定产品品类目前尚未通过专门规则加以规范。',
        ],
        callouts: [
          { type: 'warning', text: '请勿将巴西5 GW以上/42 GW/540万以上用户单元这类分布式发电数字解读为阳台光伏专属统计数据。它们描述的是Lei 14.300/2022下的一般分布式发电市场,阳台光伏在技术上可能适用该框架,但该框架并未为小型插座式套件设立专门豁免或单独的报告品类。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '阳台光伏在巴西合法吗?', a: '并未被禁止,但即插即用式阳台光伏本身没有专门监管规定——根据《麻省理工科技评论》巴西版(2026年5月),这使其普及程度比拥有专门框架的市场更为初期。技术上它会适用巴西一般的micro-geração distribuída流程(Lei 14.300/2022),而该流程没有为小型套件设立豁免。' },
          { q: '什么是Lei 14.300/2022?', a: '巴西的《分布式发电法律框架法》,正式定义了micro-geração distribuída(不超过75kW)和mini-geração distribuída(75kW至5MW),以ANEEL此前的Resolução Normativa 482/2012号决议为基础,并通过ANEEL的REN 1.059/2023号决议在技术细节上加以实施。' },
          { q: '巴西有阳台光伏补贴项目吗?', a: '没有。巴西拥有规模庞大的一般分布式光伏发电市场——仅2025年初就新增超过5 GW,累计装机超过42 GW,惠及540万以上用户单元——但这反映的是Lei 14.300/2022净计量式框架下的自有/屋顶系统,而非专门的阳台插座式项目。目前不存在专门的阳台光伏补贴或普及项目。' },
          { q: '为什么阳台光伏在巴西的普及速度比一些其他市场慢?', a: '根据《麻省理工科技评论》巴西版(2026年5月),结构性原因在于缺乏专门的监管豁免——插座式套件适用与完整屋顶安装相同的正式micro-geração流程,没有针对小型系统的简化注册途径,这与设有明确小型系统豁免的市场不同。' },
          { q: '这与本网站上的葡萄牙/巴西法律对比有什么关系?', a: '葡萄牙/巴西对比文章将巴西的法律灰色地带与葡萄牙成文的豁免规定并列讨论。本页则针对巴西进行更深入的分析:监管沿革(从RN 482/2012到Lei 14.300/2022再到REN 1.059/2023),以及巴西庞大的一般分布式发电市场与目前仍未被规范的阳台插座式品类之间的对比。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[葡萄牙与巴西的阳台光伏:法律地位对比](/zh/balcony-solar/balcony-solar-portugal-brazil) — 本深度报告所延伸的葡萄牙/巴西法律地位对比',
          '[阳台光伏合法吗?各国指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) — 全球法律状态追踪',
          '[阳台光伏在日本合法吗?2027年现状报告](/zh/balcony-solar/balcony-solar-japan-status-2027) — 形态相似的新兴空白市场',
        ],
      },
    },
  },
}
