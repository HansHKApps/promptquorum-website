// Slug: where-balcony-solar-doesnt-exist-yet-2027
// BSOL-33 — Tier 5 (2027 Trends), legislation/market status, semi_annual.
// SCOPE NOTE: originally scoped for UAE, Saudi Arabia, Bahrain, and Taiwan as one
// combined "no market yet" piece. UAE and Saudi Arabia were DROPPED from this article
// after discovering balcony-solar-gulf-mena.ts already has detailed, sourced regulatory
// coverage for both (DEWA/ADDC/AADC/SEWA NOC requirements, fines up to AED 20,000,
// Saudi ECRA's explicit 1kW regulatory floor) — the opposite of "no regulation found."
// This article now covers only Bahrain and Taiwan, the two markets where research
// genuinely found no plug-in/balcony-solar market, regulation, or product culture.
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-en.webp',
    title: 'Where Balcony Solar Doesn\'t Exist Yet: Bahrain and Taiwan (2027)',
    seoTitle: 'Where Balcony Solar Doesn\'t Exist Yet: Bahrain and Taiwan (2027)',
    intro: 'Not every market has a balcony solar story to tell yet. Research into Bahrain and Taiwan found no dedicated plug-in/balcony-solar regulation, market activity, or consumer product culture in either, — this page reports that absence directly rather than manufacturing a country guide where none is warranted.',
    metaDescription: 'No plug-in/balcony-solar market or regulation was found in Bahrain or Taiwan in 2026: Bahrain has general net metering, Taiwan only proposals. Revisited if that changes.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar market watchers checking whether a market exists in Bahrain or Taiwan',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**No dedicated plug-in/balcony-solar market, regulation or product category was found in Bahrain or Taiwan as of November 2026.** Bahrain has a general net-metering policy (Cabinet Resolution No. 2 of 2017) but nothing plug-in-specific was found; Taiwan has no plug-in category yet (an industry column proposes one at or below 800 W or 1,200 W) and a building-solar standard for buildings of 1,000 m² or more from 1 August 2026. The UAE and Saudi Arabia are covered in the Gulf & MENA article: the UAE requires a utility NOC for grid-tied systems, and Saudi Arabia\'s newly issued Self-Consumption Renewable Energy Regulation starts at 1 kW, so sub-1 kW plug-in kits are not addressed. This page reports those findings with their sources rather than speculating on if or when plug-in rules may follow.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar available in Bahrain or Taiwan?',
        answer: 'No dedicated plug-in/balcony-solar regulation, market or product category was found in either country as of November 2026. Bahrain has a general net-metering policy (Cabinet Resolution No. 2 of 2017) but nothing plug-in-specific; Taiwan has no plug-in category yet, with proposals for one at or below 800 W or 1,200 W, and a large-building solar standard from 1 August 2026.',
        bullets: [
          'Bahrain: general net-metering policy (Cabinet Resolution No. 2 of 2017); no plug-in/balcony-specific rule found',
          'Taiwan: no plug-in category yet; an industry column (16 June 2026) proposes one at or below 800 W or 1,200 W; a building-solar standard for buildings of 1,000 m² or more applies from 1 August 2026',
          'UAE and Saudi Arabia are covered in the separate Gulf & MENA article: the UAE requires a utility NOC for grid-tied systems; Saudi Arabia\'s new Self-Consumption Renewable Energy Regulation (reported 13 November 2026) starts at 1 kW, so sub-1 kW kits are not addressed',
          'Why the gap exists is this page\'s own inference, not a sourced fact; the page is revisited if legislative or market activity emerges',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Bahrain: No Signal Found', anchor: '#bahrain' },
      { label: 'Taiwan: Grid-Scale Policy, No Consumer Plug-In Signal', anchor: '#taiwan' },
      { label: 'Why Might This Be? (Inference, Not Fact)', anchor: '#why-inference' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'Re-Check: Still No Plug-In Category, With Added Context',
        content: '**A repeat search still found no dedicated plug-in/balcony-solar regulation, market or product category in Bahrain or Taiwan, but both countries have context that this page\'s earlier wording missed.** For Taiwan, an opinion column by the Taiwan Climate Action Network Research Center on [RECCESSARY (16 June 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) says Taiwan has no dedicated plug-in PV category yet, describes a gray zone and proposes a separate category at or below 800 W or 1,200 W with product certification, online registration and pilots in social and public rental housing; these are proposals, not rules. Separately, according to [CNA (10 June 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx), a standard requiring solar equipment on new or extended buildings of 1,000 square metres (about 300 ping) or more takes effect on 1 August 2026, with exemptions for four building types; it targets large buildings, not balcony kits. For Bahrain, the earlier "utility/industrial only" framing is too narrow: the Sustainable Energy Authority\'s [net-metering page](https://www.sea.gov.bh/netmetering-3/) describes a net-metering policy approved by Cabinet Resolution No. 2 of 2017 (the page could not be opened in this refresh; the detail comes from a search result), and a commercial guide ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) says it covers homes up to 100 kW, which should be verified with the Electricity and Water Authority; nothing found addresses plug-in units specifically. The UAE and Saudi Arabia are covered in the Gulf and MENA article; a re-check found that the UAE requires a utility no-objection certificate (NOC) for grid-tied systems, with penalty figures such as AED 20,000 appearing only in secondary guides such as [SurgePV](https://www.surgepv.com/solar-compliance/uae), and that Saudi Arabia\'s Self-Consumption Renewable Energy Regulation, reported by [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) on 13 November 2026, covers 1 kW to 50 MW and does not address smaller plug-in kits. This is a summary of public information, not legal advice.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No dedicated plug-in/balcony-solar market, regulation or product category was found in Bahrain or Taiwan as of November 2026 — this page reports that absence directly.',
          'Bahrain: general net-metering policy (Cabinet Resolution No. 2 of 2017); no plug-in/balcony-specific rule found',
          'Taiwan: no plug-in category yet; an industry column (16 June 2026) proposes one at or below 800 W or 1,200 W; a building-solar standard for buildings of 1,000 m² or more applies from 1 August 2026',
          'UAE and Saudi Arabia are covered in the separate Gulf & MENA article: the UAE requires a utility NOC for grid-tied systems; Saudi Arabia\'s new Self-Consumption Renewable Energy Regulation (reported 13 November 2026) starts at 1 kW, so sub-1 kW kits are not addressed',
          'Why the gap exists is this page\'s own inference, not a sourced fact; the page is revisited if legislative or market activity emerges',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'Bahrain: No Signal Found',
        content: [
          '**No plug-in/balcony-solar rule, market or product coverage was found in Bahrain, though the country has a general net-metering policy.** The Sustainable Energy Authority describes a net-metering policy approved by Cabinet Resolution No. 2 of 2017, and a commercial guide says it covers homes up to 100 kW (to be verified with the Electricity and Water Authority). Regional Gulf activity (renewable energy certificates, GCCIA grid interconnection) is utility/industrial scale; none of this addresses a consumer plug-in category.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'Taiwan: Grid-Scale Policy, No Consumer Plug-In Signal',
        content: [
          '**Taiwan has no dedicated plug-in/balcony-solar category yet; its solar policy centres on Taipower feed-in tariffs and 20-year PPAs for grid-scale and rooftop systems, plus a building-solar standard from 1 August 2026.** According to CNA, the standard requires solar equipment on new or extended buildings of 1,000 m² (about 300 ping) or more, with four exemption types, so it targets large buildings, not balcony kits. An industry opinion column proposes a separate category at or below 800 W or 1,200 W with product certification, but these are proposals, not rules.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'Why Might This Be? (Inference, Not Fact)',
        content: [
          'As a reasonable inference (not a sourced fact): housing stock with centralized utility management, and — in the Gulf case — extreme climate, differ structurally from the German/US rental-apartment pattern that has driven balcony solar adoption elsewhere. Renters in small apartment units with individual utility metering, the demographic driving adoption in Germany and the US, are less structurally common in both Bahrain and Taiwan\'s housing markets. This is this page\'s own reasoning for the gap, offered as a plausible explanation, not a cited market-research finding.',
        ],
        callouts: [
          { type: 'note', text: 'This page states plainly what was found in Bahrain and Taiwan as of the research date (November 2026). It does not speculate on whether or when plug-in rules may follow, and will be revisited if new activity emerges.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can I buy and use balcony solar in Bahrain or Taiwan?', a: 'No dedicated plug-in/balcony-solar regulation, market or product category was found in either country as of November 2026. Bahrain has a general net-metering policy; Taiwan\'s solar policy covers grid-scale and rooftop systems and a large-building standard from 1 August 2026.' },
          { q: 'Why isn\'t the UAE or Saudi Arabia covered on this page?', a: 'Both have their own coverage in the Gulf & MENA article. The UAE requires a utility no-objection certificate (NOC) for grid-tied systems; secondary guides report penalties of up to AED 20,000, which this refresh could not verify against an official source. In Saudi Arabia, the newly issued Self-Consumption Renewable Energy Regulation (reported 13 November 2026) covers systems from 1 kW, so smaller plug-in kits are not addressed; the regulator is the Saudi Electricity Regulatory Authority (earlier ECRA/WERA).' },
          { q: 'Does Bahrain have any balcony solar rules?', a: 'None specific to plug-in were found. Bahrain has a general net-metering policy (Cabinet Resolution No. 2 of 2017) and utility/industrial-scale activity (renewable energy certificates, GCCIA grid interconnection).' },
          { q: 'Does Taiwan have plug-in solar rules?', a: 'No plug-in category exists yet. Taiwan\'s solar policy covers grid-scale and rooftop systems (Taipower feed-in tariffs, 20-year PPAs) and a building-solar standard for large buildings from 1 August 2026; an industry column proposes a plug-in category at or below 800 W or 1,200 W.' },
          { q: 'Will this page be updated if Bahrain or Taiwan develop balcony solar rules?', a: 'Yes — this page will be revisited if legislative or market activity emerges in either country. As of the research date, none was found.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar in the Gulf & MENA](/balcony-solar/balcony-solar-gulf-mena) — dedicated UAE and Saudi Arabia regulatory coverage (both excluded from this page for that reason)',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
          '[Is Balcony Solar Legal in Japan? 2027 Status Report](/balcony-solar/balcony-solar-japan-status-2027) — another emerging market with no dedicated rules yet',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-de.webp',
    title: 'Wo es noch kein Balkonkraftwerk gibt: Bahrain und Taiwan (2027)',
    seoTitle: 'Wo es noch kein Balkonkraftwerk gibt: Bahrain und Taiwan (2027)',
    intro: 'Nicht jeder Markt hat bereits eine Balkonkraftwerk-Geschichte zu erzählen. Die Recherche zu Bahrain und Taiwan fand in keinem der beiden Länder eine eigene Regulierung, Marktaktivität oder Verbraucherprodukt-Kultur rund um steckerfertige Solaranlagen/Balkonkraftwerke, Stand November 2026 — diese Seite berichtet über diese Lücke direkt, statt einen Länderleitfaden zu konstruieren, wo keiner gerechtfertigt ist.',
    metaDescription: 'In Bahrain und Taiwan wurde 2026 kein Plug-in-Markt und keine Regelung gefunden: Bahrain hat allgemeines Net Metering, Taiwan nur Vorschläge. Wird bei Änderung aktualisiert.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Balkonkraftwerk-Marktbeobachter, die prüfen, ob es einen Markt in Bahrain oder Taiwan gibt',
    primaryTerm: 'balkonkraftwerk bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**Stand November 2026 wurde in Bahrain oder Taiwan kein eigener Markt, keine eigene Regelung und keine eigene Produktkategorie für Plug-in-/Balkonsolar gefunden.** Bahrain hat eine allgemeine Net-Metering-Politik (Kabinettsbeschluss Nr. 2 von 2017), aber nichts speziell für Plug-in-Geräte; Taiwan hat noch keine Plug-in-Kategorie (eine Branchenkolumne schlägt eine bis 800 W oder 1.200 W vor) und ab dem 1. August 2026 eine Solarnorm für Gebäude ab 1.000 m². Die VAE und Saudi-Arabien werden im Artikel zu Golf und MENA behandelt: Die VAE verlangen für netzgekoppelte Anlagen eine Versorger-NOC, und Saudi-Arabiens neu erlassene Self-Consumption Renewable Energy Regulation beginnt bei 1 kW, sodass Plug-in-Sets unter 1 kW nicht geregelt sind. Diese Seite berichtet diese Befunde mit Quellen, statt zu spekulieren, ob oder wann Plug-in-Regeln folgen könnten.',
    quickAnswerTop: {
      de: {
        question: 'Gibt es Balkonkraftwerke in Bahrain oder Taiwan?',
        answer: 'Stand November 2026 wurde in keinem der beiden Länder eine eigene Regelung, ein eigener Markt oder eine eigene Produktkategorie für Plug-in-/Balkonsolar gefunden. Bahrain hat eine allgemeine Net-Metering-Politik (Kabinettsbeschluss Nr. 2 von 2017), aber nichts speziell für Plug-in-Geräte; Taiwan hat noch keine Plug-in-Kategorie, es gibt Vorschläge für eine bis 800 W oder 1.200 W, sowie ab 1. August 2026 eine Solarnorm für große Gebäude.',
        bullets: [
          'Bahrain: allgemeine Net-Metering-Politik (Kabinettsbeschluss Nr. 2 von 2017); keine Plug-in-/Balkon-spezifische Regel gefunden',
          'Taiwan: noch keine Plug-in-Kategorie; eine Branchenkolumne (16. Juni 2026) schlägt eine bis 800 W oder 1.200 W vor; ab 1. August 2026 gilt eine Solarnorm für Gebäude ab 1.000 m²',
          'Die VAE und Saudi-Arabien werden im separaten Artikel zu Golf und MENA behandelt: Die VAE verlangen für netzgekoppelte Anlagen eine Versorger-NOC; Saudi-Arabiens neue Self-Consumption Renewable Energy Regulation (gemeldet am 13. November 2026) beginnt bei 1 kW, sodass Sets unter 1 kW nicht geregelt sind',
          'Warum die Lücke besteht, ist die eigene Einschätzung dieser Seite, kein belegter Fakt; die Seite wird überarbeitet, sobald es rechtliche oder Marktaktivität gibt',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Bahrain: Kein Signal gefunden', anchor: '#bahrain' },
      { label: 'Taiwan: Netzskalierte Politik, kein Verbrauchersignal für steckerfertige Anlagen', anchor: '#taiwan' },
      { label: 'Warum könnte das so sein? (Einschätzung, kein Fakt)', anchor: '#why-inference' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'Erneute Prüfung: weiterhin keine Plug-in-Kategorie, mit zusätzlichem Kontext',
        content: '**Eine erneute Suche fand weiterhin keine eigene Regelung, keinen Markt und keine Produktkategorie für Plug-in-/Balkonsolar in Bahrain oder Taiwan, doch beide Länder haben Kontext, den die frühere Formulierung dieser Seite nicht erfasste.** Für Taiwan stellt eine Meinungskolumne des Taiwan Climate Action Network Research Center auf [RECCESSARY (16. Juni 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) fest, dass es in Taiwan noch keine eigene Plug-in-PV-Kategorie gibt, beschreibt eine Grauzone und schlägt eine eigene Kategorie bis 800 W oder 1.200 W mit Produktzertifizierung, Online-Registrierung und Pilotprojekten im Sozial- und öffentlichen Mietwohnungsbau vor; das sind Vorschläge, keine Regeln. Unabhängig davon tritt laut [CNA (10. Juni 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx) am 1. August 2026 eine Norm in Kraft, die Solaranlagen auf neuen oder erweiterten Gebäuden ab 1.000 Quadratmetern (rund 300 Ping) vorschreibt, mit Ausnahmen für vier Gebäudearten; sie zielt auf große Gebäude, nicht auf Balkon-Sets. Für Bahrain ist die frühere Darstellung „nur Versorger/Industrie“ zu eng: Die [Net-Metering-Seite](https://www.sea.gov.bh/netmetering-3/) der Sustainable Energy Authority beschreibt eine mit Kabinettsbeschluss Nr. 2 von 2017 genehmigte Net-Metering-Politik (die Seite ließ sich in dieser Aktualisierung nicht öffnen; die Angabe stammt aus einem Suchergebnis), und ein kommerzieller Ratgeber ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) nennt Haushalte bis 100 kW, was bei der Electricity and Water Authority geprüft werden sollte; zu Plug-in-Geräten im Besonderen wurde nichts gefunden. Die VAE und Saudi-Arabien werden im Artikel zu Golf und MENA behandelt; eine erneute Prüfung ergab, dass die VAE für netzgekoppelte Anlagen eine Unbedenklichkeitsbescheinigung (NOC) des Versorgers verlangen, wobei Strafzahlen wie 20.000 AED nur in Sekundärratgebern wie [SurgePV](https://www.surgepv.com/solar-compliance/uae) auftauchen, und dass Saudi-Arabiens Self-Consumption Renewable Energy Regulation, gemeldet von [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) am 13. November 2026, 1 kW bis 50 MW abdeckt und kleinere Plug-in-Sets nicht anspricht. Dies ist eine Zusammenfassung öffentlicher Informationen und keine Rechtsberatung.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Stand November 2026 wurde in Bahrain oder Taiwan kein eigener Markt, keine eigene Regelung und keine eigene Produktkategorie für Plug-in-/Balkonsolar gefunden – diese Seite berichtet diese Lücke direkt.',
          'Bahrain: allgemeine Net-Metering-Politik (Kabinettsbeschluss Nr. 2 von 2017); keine Plug-in-/Balkon-spezifische Regel gefunden',
          'Taiwan: noch keine Plug-in-Kategorie; eine Branchenkolumne (16. Juni 2026) schlägt eine bis 800 W oder 1.200 W vor; ab 1. August 2026 gilt eine Solarnorm für Gebäude ab 1.000 m²',
          'Die VAE und Saudi-Arabien werden im separaten Artikel zu Golf und MENA behandelt: Die VAE verlangen für netzgekoppelte Anlagen eine Versorger-NOC; Saudi-Arabiens neue Self-Consumption Renewable Energy Regulation (gemeldet am 13. November 2026) beginnt bei 1 kW, sodass Sets unter 1 kW nicht geregelt sind',
          'Warum die Lücke besteht, ist die eigene Einschätzung dieser Seite, kein belegter Fakt; die Seite wird überarbeitet, sobald es rechtliche oder Marktaktivität gibt',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'Bahrain: Kein Signal gefunden',
        content: [
          '**In Bahrain wurde keine Plug-in-/Balkonsolar-Regel, kein Markt und keine Produktberichterstattung gefunden, auch wenn das Land eine allgemeine Net-Metering-Politik hat.** Die Sustainable Energy Authority beschreibt eine mit Kabinettsbeschluss Nr. 2 von 2017 genehmigte Net-Metering-Politik, und ein kommerzieller Ratgeber nennt Haushalte bis 100 kW (bei der Electricity and Water Authority zu prüfen). Die regionale Golf-Aktivität (Zertifikate für erneuerbare Energien, GCCIA-Netzkopplung) hat Versorger-/Industriemaßstab; nichts davon betrifft eine Verbraucherkategorie für Plug-in-Geräte.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'Taiwan: Netzskalierte Politik, kein Verbrauchersignal für steckerfertige Anlagen',
        content: [
          '**Taiwan hat noch keine eigene Plug-in-/Balkonsolar-Kategorie; die Solarpolitik konzentriert sich auf Taipower-Einspeisetarife und 20-jährige PPAs für netzskalierte und Dachanlagen sowie ab 1. August 2026 auf eine Gebäude-Solarnorm.** Laut CNA verlangt die Norm Solaranlagen auf neuen oder erweiterten Gebäuden ab 1.000 m² (rund 300 Ping), mit vier Ausnahmegruppen; sie zielt also auf große Gebäude, nicht auf Balkon-Sets. Eine Branchen-Meinungskolumne schlägt eine eigene Kategorie bis 800 W oder 1.200 W mit Produktzertifizierung vor; das sind Vorschläge, keine Regeln.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'Warum könnte das so sein? (Einschätzung, kein Fakt)',
        content: [
          'Als plausible Einschätzung (kein belegter Fakt): Wohnungsbestand mit zentralisiertem Versorgungsmanagement — und im Golf-Fall extremes Klima — unterscheiden sich strukturell vom deutschen/US-amerikanischen Mietwohnungsmuster, das die Verbreitung von Balkonkraftwerken andernorts vorangetrieben hat. Mieter kleiner Wohneinheiten mit individueller Verbrauchsmessung, die Zielgruppe hinter der Verbreitung in Deutschland und den USA, sind sowohl in Bahrains als auch in Taiwans Wohnungsmärkten strukturell seltener verbreitet. Dies ist die eigene Argumentation dieser Seite für die Lücke, dargeboten als plausible Erklärung, kein zitierter Befund aus Marktforschung.',
        ],
        callouts: [
          { type: 'note', text: 'Diese Seite hält schlicht fest, was zum Recherchezeitpunkt (November 2026) in Bahrain und Taiwan gefunden wurde. Sie spekuliert nicht, ob oder wann Plug-in-Regeln folgen könnten, und wird überarbeitet, sobald neue Aktivität auftritt.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann ich ein Balkonkraftwerk in Bahrain oder Taiwan kaufen und nutzen?', a: 'Stand November 2026 wurde in keinem der beiden Länder eine eigene Plug-in-/Balkonsolar-Regelung, ein Markt oder eine Produktkategorie gefunden. Bahrain hat eine allgemeine Net-Metering-Politik; Taiwans Solarpolitik betrifft netzskalierte und Dachanlagen sowie ab 1. August 2026 eine Norm für große Gebäude.' },
          { q: 'Warum werden die VAE oder Saudi-Arabien auf dieser Seite nicht behandelt?', a: 'Beide haben eigene Abdeckung im Artikel zu Golf und MENA. Die VAE verlangen für netzgekoppelte Anlagen eine Unbedenklichkeitsbescheinigung (NOC) des Versorgers; Sekundärquellen nennen Strafen bis 20.000 AED, was in dieser Aktualisierung nicht an einer offiziellen Quelle geprüft werden konnte. In Saudi-Arabien deckt die neu erlassene Self-Consumption Renewable Energy Regulation (gemeldet am 13. November 2026) Anlagen ab 1 kW ab, kleinere Plug-in-Sets sind also nicht geregelt; Regulierer ist die Saudi Electricity Regulatory Authority (früher ECRA/WERA).' },
          { q: 'Gibt es in Bahrain irgendwelche Balkonkraftwerk-Regeln?', a: 'Nichts speziell zu Plug-in wurde gefunden. Bahrain hat eine allgemeine Net-Metering-Politik (Kabinettsbeschluss Nr. 2 von 2017) und Aktivität im Versorger-/Industriemaßstab (Zertifikate für erneuerbare Energien, GCCIA-Netzkopplung).' },
          { q: 'Gibt es in Taiwan Regeln für steckerfertige Solaranlagen?', a: 'Es gibt noch keine Plug-in-Kategorie. Taiwans Solarpolitik betrifft netzskalierte und Dachanlagen (Taipower-Einspeisetarife, 20-jährige PPAs) und ab 1. August 2026 eine Gebäude-Solarnorm für große Gebäude; eine Branchenkolumne schlägt eine Plug-in-Kategorie bis 800 W oder 1.200 W vor.' },
          { q: 'Wird diese Seite aktualisiert, wenn Bahrain oder Taiwan Balkonkraftwerk-Regeln entwickeln?', a: 'Ja — diese Seite wird überarbeitet, sobald in einem der beiden Länder gesetzgeberische oder marktbezogene Aktivität entsteht. Zum Recherchezeitpunkt wurde keine gefunden.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Balkonkraftwerk am Golf & in der MENA-Region](/de/balcony-solar/balcony-solar-gulf-mena) — dedizierte regulatorische Berichterstattung zu den VAE und Saudi-Arabien (beide deshalb von dieser Seite ausgeschlossen)',
          '[Ist ein Balkonkraftwerk legal? Ein Länderleitfaden](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechts-Tracker',
          '[Ist ein Balkonkraftwerk in Japan legal? Statusbericht 2027](/de/balcony-solar/balcony-solar-japan-status-2027) — ein weiterer aufstrebender Markt ohne eigene Regeln bisher',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-es.webp',
    title: 'Dónde todavía no existe la energía solar de balcón: Baréin y Taiwán (2027)',
    seoTitle: 'Dónde todavía no existe la energía solar de balcón: Baréin y Taiwán (2027)',
    intro: 'No todos los mercados tienen todavía una historia que contar sobre energía solar de balcón. La investigación sobre Baréin y Taiwán no encontró regulación, actividad de mercado ni cultura de producto de consumo dedicada a la energía solar enchufable/de balcón en ninguno de los dos países, a fecha de noviembre de 2026 — esta página informa directamente de esa ausencia en lugar de fabricar una guía de país donde no está justificada.',
    metaDescription: 'En 2026 no se halló mercado ni regulación de energía solar plug-in/de balcón en Baréin ni Taiwán: Baréin tiene medición neta general, Taiwán solo propuestas.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Observadores del mercado de energía solar de balcón que verifican si existe un mercado en Baréin o Taiwán',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**A noviembre de 2026 no se encontró ningún mercado, regulación ni categoría de producto dedicados a la energía solar plug-in/de balcón en Baréin ni en Taiwán.** Baréin tiene una política general de medición neta (Resolución n.º 2 de 2017 del Gabinete), pero nada específico para plug-in; Taiwán aún no tiene categoría plug-in (una columna del sector propone una de hasta 800 W o 1200 W) y aplica desde el 1 de agosto de 2026 una norma solar para edificios de 1000 m² o más. Emiratos Árabes Unidos y Arabia Saudita se tratan en el artículo del Golfo y MENA: los Emiratos exigen un NOC de la compañía eléctrica para sistemas conectados a la red, y el Self-Consumption Renewable Energy Regulation recién publicado en Arabia Saudita empieza en 1 kW, por lo que los kits plug-in de menos de 1 kW no quedan cubiertos. Esta página recoge esos hallazgos con sus fuentes sin especular sobre si o cuándo podrían llegar reglas plug-in.',
    quickAnswerTop: {
      es: {
        question: '¿Está disponible la energía solar de balcón en Baréin o Taiwán?',
        answer: 'A noviembre de 2026 no se encontró en ninguno de los dos países una regulación, mercado o categoría de producto dedicados a la energía solar plug-in/de balcón. Baréin tiene una política general de medición neta (Resolución n.º 2 de 2017 del Gabinete), pero nada específico para plug-in; Taiwán aún no tiene categoría plug-in, con propuestas de una de hasta 800 W o 1200 W, y aplica desde el 1 de agosto de 2026 una norma solar para grandes edificios.',
        bullets: [
          'Baréin: política general de medición neta (Resolución n.º 2 de 2017 del Gabinete); no se encontró ninguna regla específica para plug-in/balcón',
          'Taiwán: aún sin categoría plug-in; una columna del sector (16 de junio de 2026) propone una de hasta 800 W o 1200 W; desde el 1 de agosto de 2026 se aplica una norma solar a edificios de 1000 m² o más',
          'Emiratos Árabes Unidos y Arabia Saudita se tratan en el artículo aparte del Golfo y MENA: los Emiratos exigen un NOC de la compañía eléctrica para sistemas conectados; el nuevo Self-Consumption Renewable Energy Regulation saudí (informado el 13 de noviembre de 2026) empieza en 1 kW, así que los kits de menos de 1 kW no quedan cubiertos',
          'Por qué existe el vacío es una inferencia propia de esta página, no un hecho con fuente; la página se revisará si aparece actividad legislativa o de mercado',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Baréin: Ninguna señal encontrada', anchor: '#bahrain' },
      { label: 'Taiwán: política de escala de red, sin señal de consumo enchufable', anchor: '#taiwan' },
      { label: '¿Por qué podría ser esto? (Inferencia, no hecho)', anchor: '#why-inference' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'Reverificación: sigue sin haber categoría plug-in, con contexto adicional',
        content: '**Una nueva búsqueda siguió sin encontrar ninguna regulación, mercado o categoría de producto dedicados a la energía solar plug-in/de balcón en Baréin o Taiwán, pero ambos países tienen un contexto que la redacción anterior de esta página no recogía.** En el caso de Taiwán, una columna de opinión del Taiwan Climate Action Network Research Center en [RECCESSARY (16 de junio de 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) señala que Taiwán aún no tiene una categoría específica de FV plug-in, describe una zona gris y propone una categoría separada hasta 800 W o 1200 W con certificación de producto, registro en línea y pilotos en vivienda social y de alquiler público; son propuestas, no reglas. Por otra parte, según [CNA (10 de junio de 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx), el 1 de agosto de 2026 entra en vigor una norma que exige equipos solares en edificios nuevos o ampliados de 1000 metros cuadrados (unos 300 ping) o más, con exenciones para cuatro tipos de edificio; se dirige a grandes edificios, no a kits de balcón. En cuanto a Baréin, el planteamiento anterior de «solo servicios públicos/industrial» es demasiado estrecho: la [página de medición neta](https://www.sea.gov.bh/netmetering-3/) de la Sustainable Energy Authority describe una política de medición neta aprobada por la Resolución n.º 2 de 2017 del Gabinete (la página no pudo abrirse en esta actualización; el dato procede de un resultado de búsqueda), y una guía comercial ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) indica que cubre viviendas de hasta 100 kW, algo que conviene verificar con la Electricity and Water Authority; no se encontró nada sobre unidades plug-in en concreto. Emiratos Árabes Unidos y Arabia Saudita se tratan en el artículo del Golfo y MENA; una nueva comprobación halló que los Emiratos exigen un certificado de no objeción (NOC) de la compañía eléctrica para sistemas conectados, con cifras de sanciones como 20 000 AED que solo aparecen en guías secundarias como [SurgePV](https://www.surgepv.com/solar-compliance/uae), y que el Self-Consumption Renewable Energy Regulation de Arabia Saudita, informado por [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) el 13 de noviembre de 2026, cubre de 1 kW a 50 MW y no aborda kits plug-in más pequeños. Es un resumen de información pública, no asesoramiento jurídico.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A noviembre de 2026 no se encontró ningún mercado, regulación ni categoría de producto dedicados a la energía solar plug-in/de balcón en Baréin ni en Taiwán: esta página informa directamente de esa ausencia.',
          'Baréin: política general de medición neta (Resolución n.º 2 de 2017 del Gabinete); no se encontró ninguna regla específica para plug-in/balcón',
          'Taiwán: aún sin categoría plug-in; una columna del sector (16 de junio de 2026) propone una de hasta 800 W o 1200 W; desde el 1 de agosto de 2026 se aplica una norma solar a edificios de 1000 m² o más',
          'Emiratos Árabes Unidos y Arabia Saudita se tratan en el artículo aparte del Golfo y MENA: los Emiratos exigen un NOC de la compañía eléctrica para sistemas conectados; el nuevo Self-Consumption Renewable Energy Regulation saudí (informado el 13 de noviembre de 2026) empieza en 1 kW, así que los kits de menos de 1 kW no quedan cubiertos',
          'Por qué existe el vacío es una inferencia propia de esta página, no un hecho con fuente; la página se revisará si aparece actividad legislativa o de mercado',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'Baréin: Ninguna señal encontrada',
        content: [
          '**En Baréin no se encontró ninguna regla, mercado ni cobertura de producto de energía solar plug-in/de balcón, aunque el país tiene una política general de medición neta.** La Sustainable Energy Authority describe una política de medición neta aprobada por la Resolución n.º 2 de 2017 del Gabinete, y una guía comercial dice que cubre viviendas de hasta 100 kW (a verificar con la Electricity and Water Authority). La actividad regional del Golfo (certificados de energía renovable, interconexión GCCIA) es de escala de servicios públicos/industrial; nada de ello aborda una categoría de consumo plug-in.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'Taiwán: política de escala de red, sin señal de consumo enchufable',
        content: [
          '**Taiwán aún no tiene una categoría específica de energía solar plug-in/de balcón; su política solar se centra en las tarifas de alimentación de Taipower y los PPA de 20 años para sistemas a escala de red y de tejado, más una norma solar para edificios desde el 1 de agosto de 2026.** Según CNA, la norma exige equipos solares en edificios nuevos o ampliados de 1000 m² (unos 300 ping) o más, con cuatro tipos de exención, por lo que apunta a grandes edificios, no a kits de balcón. Una columna de opinión del sector propone una categoría aparte de hasta 800 W o 1200 W con certificación de producto; son propuestas, no reglas.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: '¿Por qué podría ser esto? (Inferencia, no hecho)',
        content: [
          'Como inferencia razonable (no un hecho documentado): el parque de vivienda con gestión centralizada de servicios públicos y — en el caso del Golfo — un clima extremo, difieren estructuralmente del patrón de vivienda de alquiler alemán/estadounidense que ha impulsado la adopción de energía solar de balcón en otros lugares. Los inquilinos de unidades pequeñas con medición individual de servicios públicos, el grupo demográfico que impulsa la adopción en Alemania y Estados Unidos, son estructuralmente menos comunes tanto en el mercado de vivienda de Baréin como en el de Taiwán. Este es el razonamiento propio de esta página para explicar la ausencia, ofrecido como explicación plausible, no como un hallazgo de investigación de mercado citado.',
        ],
        callouts: [
          { type: 'note', text: 'Esta página indica sin rodeos lo que se encontró en Baréin y Taiwán a la fecha de la investigación (noviembre de 2026). No especula sobre si o cuándo podrían llegar reglas plug-in y se revisará si aparece nueva actividad.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puedo comprar y usar energía solar de balcón en Baréin o Taiwán?', a: 'A noviembre de 2026 no se encontró en ninguno de los dos países una regulación, mercado o categoría de producto dedicados a la energía solar plug-in/de balcón. Baréin tiene una política general de medición neta; la política solar de Taiwán abarca sistemas a escala de red y de tejado y, desde el 1 de agosto de 2026, una norma para grandes edificios.' },
          { q: '¿Por qué no se cubren los EAU o Arabia Saudí en esta página?', a: 'Ambos tienen su propia cobertura en el artículo del Golfo y MENA. Los Emiratos Árabes Unidos exigen un certificado de no objeción (NOC) de la compañía eléctrica para sistemas conectados a la red; guías secundarias citan sanciones de hasta 20 000 AED, algo que esta actualización no pudo verificar con una fuente oficial. En Arabia Saudita, el Self-Consumption Renewable Energy Regulation recién publicado (informado el 13 de noviembre de 2026) cubre sistemas desde 1 kW, por lo que los kits plug-in más pequeños no quedan cubiertos; el regulador es la Saudi Electricity Regulatory Authority (antes ECRA/WERA).' },
          { q: '¿Tiene Baréin alguna norma sobre energía solar de balcón?', a: 'No se encontró nada específico para plug-in. Baréin tiene una política general de medición neta (Resolución n.º 2 de 2017 del Gabinete) y actividad a escala de servicios públicos/industrial (certificados de energía renovable, interconexión GCCIA).' },
          { q: '¿Tiene Taiwán normas para la energía solar enchufable?', a: 'Aún no existe una categoría plug-in. La política solar de Taiwán abarca sistemas a escala de red y de tejado (tarifas de alimentación de Taipower, PPA de 20 años) y, desde el 1 de agosto de 2026, una norma solar para grandes edificios; una columna del sector propone una categoría plug-in de hasta 800 W o 1200 W.' },
          { q: '¿Se actualizará esta página si Baréin o Taiwán desarrollan normas de energía solar de balcón?', a: 'Sí — esta página se revisará si surge actividad legislativa o de mercado en cualquiera de los dos países. A fecha de la investigación, no se encontró ninguna.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Energía solar de balcón en el Golfo y MENA](/es/balcony-solar/balcony-solar-gulf-mena) — cobertura regulatoria dedicada de los EAU y Arabia Saudí (ambos excluidos de esta página por esa razón)',
          '[¿Es legal la energía solar de balcón? Guía país por país](/es/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
          '[¿Es legal la energía solar de balcón en Japón? Informe de estado 2027](/es/balcony-solar/balcony-solar-japan-status-2027) — otro mercado emergente sin normas dedicadas todavía',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-fr.webp',
    title: 'Où le solaire de balcon n\'existe pas encore : Bahreïn et Taïwan (2027)',
    seoTitle: 'Où le solaire de balcon n\'existe pas encore : Bahreïn et Taïwan (2027)',
    intro: 'Tous les marchés n\'ont pas encore une histoire solaire de balcon à raconter. Les recherches sur Bahreïn et Taïwan n\'ont trouvé aucune réglementation, activité de marché ou culture de produit dédiée au solaire plug-in/de balcon dans l\'un ou l\'autre pays, à novembre 2026 — cette page rapporte directement cette absence plutôt que de fabriquer un guide pays où rien ne le justifie.',
    metaDescription: 'Aucun marché ni réglementation de solaire plug-in/balcon trouvé à Bahreïn ou à Taïwan en 2026 : net metering général à Bahreïn, simples propositions à Taïwan.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Observateurs du marché du solaire de balcon vérifiant l\'existence d\'un marché à Bahreïn ou à Taïwan',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**Aucun marché, aucune réglementation ni catégorie de produits dédiés au solaire plug-in/de balcon n\'a été trouvé à Bahreïn ou à Taïwan en novembre 2026.** Bahreïn a une politique générale de net metering (résolution n° 2 de 2017 du Cabinet) mais rien de spécifique au plug-in ; Taïwan n\'a pas encore de catégorie plug-in (une tribune sectorielle en propose une jusqu\'à 800 W ou 1 200 W) et applique depuis le 1er août 2026 une norme solaire aux bâtiments de 1 000 m² ou plus. Les Émirats arabes unis et l\'Arabie saoudite sont traités dans l\'article Golfe et MENA : les Émirats exigent un NOC du distributeur pour les systèmes raccordés, et le Self-Consumption Renewable Energy Regulation, nouvellement publié en Arabie saoudite, démarre à 1 kW, de sorte que les kits plug-in de moins de 1 kW ne sont pas visés. Cette page rapporte ces constats avec leurs sources sans spéculer sur d\'éventuelles règles plug-in.',
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il disponible à Bahreïn ou à Taïwan ?',
        answer: 'Aucune réglementation, aucun marché ni aucune catégorie de produits dédiés au solaire plug-in/de balcon n\'a été trouvé dans l\'un ou l\'autre pays en novembre 2026. Bahreïn a une politique générale de net metering (résolution n° 2 de 2017 du Cabinet) mais rien de spécifique au plug-in ; Taïwan n\'a pas encore de catégorie plug-in, avec des propositions jusqu\'à 800 W ou 1 200 W, et applique depuis le 1er août 2026 une norme solaire aux grands bâtiments.',
        bullets: [
          'Bahreïn : politique générale de net metering (résolution n° 2 de 2017 du Cabinet) ; aucune règle spécifique au plug-in/balcon trouvée',
          'Taïwan : pas encore de catégorie plug-in ; une tribune sectorielle (16 juin 2026) en propose une jusqu\'à 800 W ou 1 200 W ; une norme solaire pour les bâtiments de 1 000 m² ou plus s\'applique depuis le 1er août 2026',
          'Les Émirats arabes unis et l\'Arabie saoudite sont traités dans l\'article distinct Golfe et MENA : les Émirats exigent un NOC du distributeur pour les systèmes raccordés ; le nouveau Self-Consumption Renewable Energy Regulation saoudien (signalé le 13 novembre 2026) démarre à 1 kW, donc les kits de moins de 1 kW ne sont pas visés',
          'La raison de cette lacune est l\'inférence propre à cette page, pas un fait sourcé ; la page sera revue si une activité législative ou de marché apparaît',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Bahreïn : aucun signal trouvé', anchor: '#bahrain' },
      { label: 'Taïwan : politique à l\'échelle du réseau, aucun signal grand public', anchor: '#taiwan' },
      { label: 'Pourquoi cela pourrait-il être le cas ? (Déduction, non un fait)', anchor: '#why-inference' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'Revérification : toujours pas de catégorie plug-in, avec du contexte en plus',
        content: '**Une nouvelle recherche n\'a toujours trouvé aucune réglementation, aucun marché ni aucune catégorie de produits dédiés au solaire plug-in/de balcon à Bahreïn ou à Taïwan, mais les deux pays présentent un contexte que la formulation précédente de cette page avait manqué.** Pour Taïwan, une tribune d\'opinion du Taiwan Climate Action Network Research Center sur [RECCESSARY (16 juin 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) indique que Taïwan n\'a pas encore de catégorie dédiée au PV plug-in, décrit une zone grise et propose une catégorie distincte jusqu\'à 800 W ou 1 200 W avec certification des produits, enregistrement en ligne et projets pilotes dans le logement social et locatif public ; ce sont des propositions, pas des règles. Par ailleurs, selon [CNA (10 juin 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx), une norme imposant des équipements solaires sur les bâtiments neufs ou agrandis de 1 000 mètres carrés (environ 300 ping) ou plus entre en vigueur le 1er août 2026, avec des exemptions pour quatre types de bâtiments ; elle vise les grands bâtiments, pas les kits de balcon. Pour Bahreïn, la formulation antérieure « uniquement services publics/industriel » est trop étroite : la [page sur le net metering](https://www.sea.gov.bh/netmetering-3/) de la Sustainable Energy Authority décrit une politique de net metering approuvée par la résolution n° 2 de 2017 du Cabinet (la page n\'a pas pu être ouverte lors de cette mise à jour ; le détail provient d\'un résultat de recherche), et un guide commercial ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) indique qu\'elle couvre les logements jusqu\'à 100 kW, ce qui doit être vérifié auprès de l\'Electricity and Water Authority ; rien n\'a été trouvé concernant spécifiquement les unités plug-in. Les Émirats arabes unis et l’Arabie saoudite sont traités dans l’article Golfe et MENA ; une nouvelle vérification a montré que les Émirats exigent un certificat de non-objection (NOC) du distributeur pour les systèmes raccordés, les montants de pénalités comme 20 000 AED n’apparaissant que dans des guides secondaires tels que [SurgePV](https://www.surgepv.com/solar-compliance/uae), et que le Self-Consumption Renewable Energy Regulation saoudien, signalé par [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) le 13 novembre 2026, couvre de 1 kW à 50 MW sans viser les kits plug-in plus petits. Il s\'agit d\'un résumé d\'informations publiques, pas d\'un conseil juridique.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucun marché, aucune réglementation ni catégorie de produits dédiés au solaire plug-in/de balcon n\'a été trouvé à Bahreïn ou à Taïwan en novembre 2026 — cette page rapporte directement cette absence.',
          'Bahreïn : politique générale de net metering (résolution n° 2 de 2017 du Cabinet) ; aucune règle spécifique au plug-in/balcon trouvée',
          'Taïwan : pas encore de catégorie plug-in ; une tribune sectorielle (16 juin 2026) en propose une jusqu\'à 800 W ou 1 200 W ; une norme solaire pour les bâtiments de 1 000 m² ou plus s\'applique depuis le 1er août 2026',
          'Les Émirats arabes unis et l\'Arabie saoudite sont traités dans l\'article distinct Golfe et MENA : les Émirats exigent un NOC du distributeur pour les systèmes raccordés ; le nouveau Self-Consumption Renewable Energy Regulation saoudien (signalé le 13 novembre 2026) démarre à 1 kW, donc les kits de moins de 1 kW ne sont pas visés',
          'La raison de cette lacune est l\'inférence propre à cette page, pas un fait sourcé ; la page sera revue si une activité législative ou de marché apparaît',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'Bahreïn : aucun signal trouvé',
        content: [
          '**Aucune règle, aucun marché ni aucune couverture produit pour le solaire plug-in/de balcon n\'a été trouvé à Bahreïn, même si le pays a une politique générale de net metering.** La Sustainable Energy Authority décrit une politique de net metering approuvée par la résolution n° 2 de 2017 du Cabinet, et un guide commercial indique qu\'elle couvre les logements jusqu\'à 100 kW (à vérifier auprès de l\'Electricity and Water Authority). L\'activité régionale du Golfe (certificats d\'énergie renouvelable, interconnexion GCCIA) est à l\'échelle des services publics/de l\'industrie ; rien de cela ne concerne une catégorie grand public de plug-in.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'Taïwan : politique à l\'échelle du réseau, aucun signal grand public',
        content: [
          '**Taïwan n\'a pas encore de catégorie dédiée au solaire plug-in/de balcon ; sa politique solaire repose sur les tarifs de rachat de Taipower et des CAE de 20 ans pour les systèmes à l\'échelle du réseau et en toiture, plus une norme solaire pour les bâtiments depuis le 1er août 2026.** Selon CNA, la norme impose des équipements solaires sur les bâtiments neufs ou agrandis de 1 000 m² (environ 300 ping) ou plus, avec quatre types d\'exemption : elle vise les grands bâtiments, pas les kits de balcon. Une tribune d\'opinion sectorielle propose une catégorie distincte jusqu\'à 800 W ou 1 200 W avec certification des produits ; ce sont des propositions, pas des règles.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'Pourquoi cela pourrait-il être le cas ? (Déduction, non un fait)',
        content: [
          'Comme déduction raisonnable (non un fait sourcé) : le parc immobilier avec gestion centralisée des services publics et — dans le cas du Golfe — un climat extrême, diffèrent structurellement du schéma locatif allemand/américain qui a porté l\'adoption du solaire de balcon ailleurs. Les locataires de petits logements avec comptage individuel des services publics, la population qui porte l\'adoption en Allemagne et aux États-Unis, sont structurellement moins courants sur les marchés immobiliers de Bahreïn et de Taïwan. C\'est le raisonnement propre de cette page pour expliquer l\'écart, proposé comme explication plausible, et non un résultat d\'étude de marché cité.',
        ],
        callouts: [
          { type: 'note', text: 'Cette page indique simplement ce qui a été trouvé à Bahreïn et à Taïwan à la date de la recherche (novembre 2026). Elle ne spécule pas sur d\'éventuelles règles plug-in et sera revue si une nouvelle activité apparaît.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: 'Puis-je acheter et utiliser du solaire de balcon à Bahreïn ou à Taïwan ?', a: 'Aucune réglementation, aucun marché ni aucune catégorie de produits dédiés au solaire plug-in/de balcon n\'a été trouvé dans l\'un ou l\'autre pays en novembre 2026. Bahreïn a une politique générale de net metering ; la politique solaire de Taïwan couvre les systèmes à l\'échelle du réseau et en toiture et, depuis le 1er août 2026, une norme pour les grands bâtiments.' },
          { q: 'Pourquoi les Émirats arabes unis ou l\'Arabie saoudite ne sont-ils pas traités sur cette page ?', a: 'Les deux ont leur propre couverture dans l\'article Golfe et MENA. Les Émirats arabes unis exigent un certificat de non-objection (NOC) du distributeur pour les systèmes raccordés ; des guides secondaires signalent des pénalités allant jusqu\'à 20 000 AED, ce que cette mise à jour n\'a pas pu vérifier auprès d\'une source officielle. En Arabie saoudite, le Self-Consumption Renewable Energy Regulation nouvellement publié (signalé le 13 novembre 2026) couvre les systèmes à partir de 1 kW, donc les kits plug-in plus petits ne sont pas visés ; le régulateur est la Saudi Electricity Regulatory Authority (auparavant ECRA/WERA).' },
          { q: 'Bahreïn a-t-il des règles sur le solaire de balcon ?', a: 'Rien de spécifique au plug-in n\'a été trouvé. Bahreïn a une politique générale de net metering (résolution n° 2 de 2017 du Cabinet) et une activité à l\'échelle des services publics/de l\'industrie (certificats d\'énergie renouvelable, interconnexion GCCIA).' },
          { q: 'Taïwan a-t-il des règles pour le solaire plug-in ?', a: 'Il n\'existe pas encore de catégorie plug-in. La politique solaire de Taïwan couvre les systèmes à l\'échelle du réseau et en toiture (tarifs de rachat Taipower, CAE de 20 ans) et, depuis le 1er août 2026, une norme solaire pour les grands bâtiments ; une tribune sectorielle propose une catégorie plug-in jusqu\'à 800 W ou 1 200 W.' },
          { q: 'Cette page sera-t-elle mise à jour si Bahreïn ou Taïwan développent des règles sur le solaire de balcon ?', a: 'Oui — cette page sera revue si une activité législative ou de marché émerge dans l\'un ou l\'autre pays. À la date de la recherche, aucune n\'a été trouvée.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le solaire de balcon dans le Golfe et la région MENA](/fr/balcony-solar/balcony-solar-gulf-mena) — couverture réglementaire dédiée aux Émirats arabes unis et à l\'Arabie saoudite (tous deux exclus de cette page pour cette raison)',
          '[Le solaire de balcon est-il légal ? Un guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial',
          '[Le solaire de balcon est-il légal au Japon ? Rapport de situation 2027](/fr/balcony-solar/balcony-solar-japan-status-2027) — un autre marché émergent sans règles dédiées pour l\'instant',
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-ar.webp',
    title: 'أين لا توجد الطاقة الشمسية على الشرفات بعد: البحرين وتايوان (2027)',
    seoTitle: 'أين لا توجد الطاقة الشمسية على الشرفات بعد: البحرين وتايوان (2027)',
    intro: 'ليس لكل سوق قصة عن الطاقة الشمسية على الشرفات يرويها بعد. لم تجد الأبحاث حول البحرين وتايوان أي تنظيم أو نشاط سوقي أو ثقافة منتجات استهلاكية مخصصة للطاقة الشمسية القابلة للتوصيل/على الشرفات في أي من البلدين، حتى نوفمبر 2026 — تُبلغ هذه الصفحة عن هذا الغياب مباشرةً بدلاً من تلفيق دليل قُطري حيث لا يوجد مبرر لذلك.',
    metaDescription: 'لم يُعثر في 2026 على سوق أو لائحة للطاقة الشمسية للتوصيل المباشر/الشرفات في البحرين أو تايوان: البحرين لديها قياس صافٍ عام، وتايوان مقترحات فقط.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مراقبو سوق الطاقة الشمسية على الشرفات الذين يتحققون مما إذا كان هناك سوق في البحرين أو تايوان',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**حتى نوفمبر 2026 لم يُعثر في البحرين أو تايوان على سوق أو لائحة أو فئة منتجات مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات.** لدى البحرين سياسة قياس صافٍ عامة (قرار مجلس الوزراء رقم 2 لعام 2017) لكن دون شيء خاص بالتوصيل المباشر؛ ولا تملك تايوان فئة للتوصيل المباشر بعد (يقترح عمود في القطاع فئة بقدرة 800 واط أو 1,200 واط فأقل) وتطبّق منذ 1 أغسطس 2026 معياراً للطاقة الشمسية على المباني البالغة مساحتها 1,000 م² فأكثر. وتُعالَج الإمارات والسعودية في مقالة الخليج والشرق الأوسط وشمال أفريقيا: تشترط الإمارات شهادة عدم ممانعة (NOC) من المرفق للأنظمة المتصلة بالشبكة، وتبدأ لائحة Self-Consumption Renewable Energy Regulation السعودية الصادرة حديثاً من 1 كيلوواط، فلا تشمل أطقم التوصيل المباشر الأصغر من 1 كيلوواط. تعرض هذه الصفحة هذه النتائج مع مصادرها دون التكهن بما إذا كانت قواعد للتوصيل المباشر ستأتي أو متى.',
    quickAnswerTop: {
      ar: {
        question: 'هل تتوفر الطاقة الشمسية على الشرفات في البحرين أو تايوان؟',
        answer: 'حتى نوفمبر 2026 لم يُعثر في أي من البلدين على لائحة أو سوق أو فئة منتجات مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات. لدى البحرين سياسة قياس صافٍ عامة (قرار مجلس الوزراء رقم 2 لعام 2017) دون شيء خاص بالتوصيل المباشر؛ ولا تملك تايوان فئة بعد، مع مقترحات لفئة بقدرة 800 واط أو 1,200 واط فأقل، وتطبّق منذ 1 أغسطس 2026 معياراً للطاقة الشمسية على المباني الكبيرة.',
        bullets: [
          'البحرين: سياسة قياس صافٍ عامة (قرار مجلس الوزراء رقم 2 لعام 2017)؛ ولم تُوجد قاعدة خاصة بالتوصيل المباشر/الشرفات',
          'تايوان: لا فئة للتوصيل المباشر بعد؛ ويقترح عمود في القطاع (16 يونيو 2026) فئة بقدرة 800 واط أو 1,200 واط فأقل؛ ومنذ 1 أغسطس 2026 يسري معيار للطاقة الشمسية على المباني البالغة 1,000 م² فأكثر',
          'تُعالَج الإمارات والسعودية في مقالة الخليج والشرق الأوسط وشمال أفريقيا المنفصلة: تشترط الإمارات شهادة عدم ممانعة (NOC) من المرفق للأنظمة المتصلة بالشبكة؛ وتبدأ لائحة Self-Consumption Renewable Energy Regulation السعودية الجديدة (أُفيد بها في 13 نوفمبر 2026) من 1 كيلوواط، فلا تشمل الأطقم الأصغر من 1 كيلوواط',
          'سبب وجود هذه الفجوة استنتاج خاص بهذه الصفحة وليس حقيقة موثقة؛ وستُراجَع الصفحة إذا ظهر نشاط تشريعي أو سوقي',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'البحرين: لم يُعثر على إشارة', anchor: '#bahrain' },
      { label: 'تايوان: سياسة بحجم الشبكة، دون إشارة استهلاكية للطاقة القابلة للتوصيل', anchor: '#taiwan' },
      { label: 'لماذا قد يكون الأمر كذلك؟ (استنتاج، وليس حقيقة)', anchor: '#why-inference' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'إعادة تحقق: لا تزال فئة التوصيل المباشر غير موجودة، مع سياق إضافي',
        content: '**لم يجد بحث متجدد أي لائحة أو سوق أو فئة منتجات مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات في البحرين أو تايوان، لكن للبلدين سياقاً لم تغطه صياغة هذه الصفحة السابقة.** ففي تايوان، يقول عمود رأي لمركز أبحاث Taiwan Climate Action Network على [RECCESSARY (16 يونيو 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) إن تايوان لا تملك بعد فئة مخصصة للطاقة الكهروضوئية بالتوصيل المباشر، ويصف منطقة رمادية ويقترح فئة منفصلة بقدرة 800 واط أو 1,200 واط فأقل مع اعتماد المنتجات والتسجيل الإلكتروني وتجارب في الإسكان الاجتماعي والإيجار العام؛ وهذه مقترحات وليست قواعد. ومن جهة أخرى، وبحسب [CNA (10 يونيو 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx)، يبدأ في 1 أغسطس 2026 سريان معيار يشترط تركيب معدات شمسية في المباني الجديدة أو الموسّعة بمساحة 1,000 متر مربع (نحو 300 بينغ) فأكثر، مع استثناءات لأربعة أنواع من المباني؛ وهو يستهدف المباني الكبيرة لا أطقم الشرفات. أما في البحرين، فإن الصياغة السابقة «مرافق/صناعي فقط» ضيقة جداً: إذ تصف [صفحة القياس الصافي](https://www.sea.gov.bh/netmetering-3/) لدى هيئة الطاقة المستدامة سياسة قياس صافٍ أقرها قرار مجلس الوزراء رقم 2 لعام 2017 (تعذر فتح الصفحة في هذا التحديث؛ والتفصيل من نتيجة بحث)، ويذكر دليل تجاري ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) أنها تشمل المنازل حتى 100 كيلوواط، وهو ما ينبغي التحقق منه لدى هيئة الكهرباء والماء؛ ولم يُعثر على شيء يخص وحدات التوصيل المباشر تحديداً. وتغطي مقالة الخليج والشرق الأوسط وشمال أفريقيا الإمارات والسعودية؛ وأظهرت إعادة الفحص أن الإمارات تشترط شهادة عدم ممانعة (NOC) من المرفق للأنظمة المتصلة بالشبكة، وأن أرقام الغرامات مثل 20,000 درهم ترد فقط في أدلة ثانوية مثل [SurgePV](https://www.surgepv.com/solar-compliance/uae)، وأن لائحة Self-Consumption Renewable Energy Regulation السعودية، كما أوردها [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) في 13 نوفمبر 2026، تشمل من 1 كيلوواط إلى 50 ميغاواط ولا تتناول الأطقم الأصغر. هذا ملخص لمعلومات علنية وليس استشارة قانونية.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'حتى نوفمبر 2026 لم يُعثر في البحرين أو تايوان على سوق أو لائحة أو فئة منتجات مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات — وتعرض هذه الصفحة هذا الغياب مباشرة.',
          'البحرين: سياسة قياس صافٍ عامة (قرار مجلس الوزراء رقم 2 لعام 2017)؛ ولم تُوجد قاعدة خاصة بالتوصيل المباشر/الشرفات',
          'تايوان: لا فئة للتوصيل المباشر بعد؛ ويقترح عمود في القطاع (16 يونيو 2026) فئة بقدرة 800 واط أو 1,200 واط فأقل؛ ومنذ 1 أغسطس 2026 يسري معيار للطاقة الشمسية على المباني البالغة 1,000 م² فأكثر',
          'تُعالَج الإمارات والسعودية في مقالة الخليج والشرق الأوسط وشمال أفريقيا المنفصلة: تشترط الإمارات شهادة عدم ممانعة (NOC) من المرفق للأنظمة المتصلة بالشبكة؛ وتبدأ لائحة Self-Consumption Renewable Energy Regulation السعودية الجديدة (أُفيد بها في 13 نوفمبر 2026) من 1 كيلوواط، فلا تشمل الأطقم الأصغر من 1 كيلوواط',
          'سبب وجود هذه الفجوة استنتاج خاص بهذه الصفحة وليس حقيقة موثقة؛ وستُراجَع الصفحة إذا ظهر نشاط تشريعي أو سوقي',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'البحرين: لم يُعثر على إشارة',
        content: [
          '**لم يُعثر في البحرين على قاعدة أو سوق أو تغطية منتجات للطاقة الشمسية للتوصيل المباشر/الشرفات، رغم أن لدى البلد سياسة قياس صافٍ عامة.** تصف هيئة الطاقة المستدامة سياسة قياس صافٍ أقرها قرار مجلس الوزراء رقم 2 لعام 2017، ويذكر دليل تجاري أنها تشمل المنازل حتى 100 كيلوواط (يجب التحقق لدى هيئة الكهرباء والماء). أما النشاط الإقليمي في الخليج (شهادات الطاقة المتجددة، الربط الكهربائي عبر GCCIA) فهو بمقياس المرافق/الصناعة؛ ولا شيء منه يتناول فئة استهلاكية للتوصيل المباشر.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'تايوان: سياسة بحجم الشبكة، دون إشارة استهلاكية للطاقة القابلة للتوصيل',
        content: [
          '**ليس لدى تايوان فئة مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات بعد؛ وتتركز سياستها الشمسية على تعرفات التغذية لدى Taipower واتفاقيات شراء الطاقة لمدة 20 عاماً للأنظمة بمقياس الشبكة والأسطح، إضافة إلى معيار للطاقة الشمسية في المباني منذ 1 أغسطس 2026.** وبحسب CNA يشترط المعيار معدات شمسية في المباني الجديدة أو الموسّعة بمساحة 1,000 م² (نحو 300 بينغ) فأكثر مع أربعة أنواع من الاستثناءات، فهو يستهدف المباني الكبيرة لا أطقم الشرفات. ويقترح عمود رأي في القطاع فئة منفصلة بقدرة 800 واط أو 1,200 واط فأقل مع اعتماد المنتجات، لكنها مقترحات وليست قواعد.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'لماذا قد يكون الأمر كذلك؟ (استنتاج، وليس حقيقة)',
        content: [
          'كاستنتاج معقول (وليس حقيقة موثّقة): يختلف المخزون السكني ذو الإدارة المركزية للمرافق — وفي الحالة الخليجية، المناخ القاسي — بشكل بنيوي عن نمط الإيجار الألماني/الأمريكي الذي دفع تبنّي الطاقة الشمسية على الشرفات في أماكن أخرى. المستأجرون في وحدات سكنية صغيرة ذات قياس فردي للمرافق، وهي الفئة السكانية التي تقود التبنّي في ألمانيا والولايات المتحدة، أقل شيوعًا بنيويًا في أسواق الإسكان في كل من البحرين وتايوان. هذا هو استدلال هذه الصفحة الخاص لتفسير الفجوة، مطروحًا كتفسير معقول، وليس نتيجة بحث سوقي مُقتبسة.',
        ],
        callouts: [
          { type: 'note', text: 'تذكر هذه الصفحة بوضوح ما عُثر عليه في البحرين وتايوان حتى تاريخ البحث (نوفمبر 2026). ولا تتكهن بما إذا كانت قواعد للتوصيل المباشر ستظهر أو متى، وستُراجَع إذا ظهر نشاط جديد.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يمكنني شراء واستخدام الطاقة الشمسية على الشرفات في البحرين أو تايوان؟', a: 'حتى نوفمبر 2026 لم يُعثر في أي من البلدين على لائحة أو سوق أو فئة منتجات مخصصة للطاقة الشمسية للتوصيل المباشر/الشرفات. لدى البحرين سياسة قياس صافٍ عامة؛ وتشمل السياسة الشمسية في تايوان الأنظمة بمقياس الشبكة والأسطح ومعياراً للمباني الكبيرة منذ 1 أغسطس 2026.' },
          { q: 'لماذا لا تُغطى الإمارات العربية المتحدة أو المملكة العربية السعودية في هذه الصفحة؟', a: 'لكلا البلدين تغطية خاصة في مقالة الخليج والشرق الأوسط وشمال أفريقيا. تشترط الإمارات شهادة عدم ممانعة (NOC) من المرفق للأنظمة المتصلة بالشبكة؛ وتذكر أدلة ثانوية غرامات تصل إلى 20,000 درهم، وهو ما تعذّر في هذا التحديث التحقق منه من مصدر رسمي. وفي السعودية تشمل لائحة Self-Consumption Renewable Energy Regulation الصادرة حديثاً (أُفيد بها في 13 نوفمبر 2026) الأنظمة من 1 كيلوواط، فلا تشمل الأطقم الأصغر؛ والجهة المنظِّمة هي الهيئة السعودية لتنظيم الكهرباء (سابقاً ECRA/WERA).' },
          { q: 'هل لدى البحرين أي قواعد للطاقة الشمسية على الشرفات؟', a: 'لم يُعثر على شيء خاص بالتوصيل المباشر. لدى البحرين سياسة قياس صافٍ عامة (قرار مجلس الوزراء رقم 2 لعام 2017) ونشاط بمقياس المرافق/الصناعة (شهادات الطاقة المتجددة، الربط عبر GCCIA).' },
          { q: 'هل لدى تايوان قواعد للطاقة الشمسية القابلة للتوصيل؟', a: 'لا توجد فئة للتوصيل المباشر بعد. تشمل السياسة الشمسية في تايوان الأنظمة بمقياس الشبكة والأسطح (تعرفات تغذية Taipower، اتفاقيات شراء لمدة 20 عاماً) ومعياراً للطاقة الشمسية في المباني الكبيرة منذ 1 أغسطس 2026؛ ويقترح عمود في القطاع فئة للتوصيل المباشر بقدرة 800 واط أو 1,200 واط فأقل.' },
          { q: 'هل ستُحدَّث هذه الصفحة إذا طوّرت البحرين أو تايوان قواعد للطاقة الشمسية على الشرفات؟', a: 'نعم — ستُراجَع هذه الصفحة إذا نشأ نشاط تشريعي أو سوقي في أي من البلدين. حتى تاريخ البحث، لم يُعثر على أي منها.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[الطاقة الشمسية على الشرفات في الخليج ومنطقة الشرق الأوسط وشمال إفريقيا](/ar/balcony-solar/balcony-solar-gulf-mena) — تغطية تنظيمية مخصصة للإمارات العربية المتحدة والمملكة العربية السعودية (كلاهما مستبعد من هذه الصفحة لهذا السبب)',
          '[هل الطاقة الشمسية على الشرفات قانونية؟ دليل حسب الدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — أداة تتبع قانونية عالمية',
          '[هل الطاقة الشمسية على الشرفات قانونية في اليابان؟ تقرير حالة 2027](/ar/balcony-solar/balcony-solar-japan-status-2027) — سوق ناشئ آخر بلا قواعد مخصصة حتى الآن',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-ja.webp',
    title: 'まだバルコニー太陽光が存在しない地域：バーレーンと台湾（2027年）',
    seoTitle: 'まだバルコニー太陽光が存在しない地域：バーレーンと台湾（2027年）',
    intro: 'すべての市場にバルコニー太陽光のストーリーがあるわけではありません。バーレーンと台湾を調査した結果、2026年11月時点でどちらの国にも、プラグイン式/バルコニー太陽光に特化した規制、市場活動、消費者向け製品文化は見つかりませんでした。このページは、根拠のない国別ガイドを作り上げるのではなく、この「空白」をそのまま報告します。',
    metaDescription: '2026年、バーレーンと台湾ではプラグイン型バルコニー太陽光の市場も規制も見つからず。バーレーンは一般的なネットメータリング、台湾は提案のみ。',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3分で読める',
    educationalLevel: 'Beginner',
    audience: 'バーレーンや台湾にバルコニー太陽光市場が存在するかを確認したい市場観察者',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**2026年11月時点で、バーレーンと台湾にプラグイン型・バルコニー太陽光専用の市場、規制、製品カテゴリーは見つかりませんでした。** バーレーンには一般的なネットメータリング政策(2017年閣議決定第2号)がありますが、プラグイン型に特化したものは見つかっていません。台湾にはまだプラグイン区分がなく(業界コラムが800 Wまたは1,200 W以下の区分を提案)、2026年8月1日から建築面積1,000平方メートル以上の建物を対象とする太陽光基準が適用されます。UAEとサウジアラビアは湾岸・MENA記事で扱っています。UAEは系統連系システムに電力会社のNOCを求め、サウジアラビアで新たに発行されたSelf-Consumption Renewable Energy Regulationは1 kWから始まるため、1 kW未満のプラグイン型キットは対象外です。本ページは、プラグイン型の規則が将来できるかどうかを推測せず、これらの調査結果を出典付きで報告します。',
    quickAnswerTop: {
      ja: {
        question: 'バーレーンや台湾でバルコニー太陽光は利用できますか？',
        answer: '2026年11月時点で、どちらの国にもプラグイン型・バルコニー太陽光専用の規制、市場、製品カテゴリーは見つかりませんでした。バーレーンには一般的なネットメータリング政策(2017年閣議決定第2号)がありますがプラグイン型に特化したものはなく、台湾にはまだプラグイン区分がなく(800 Wまたは1,200 W以下の区分が提案されている)、2026年8月1日から大規模建物向けの太陽光基準が適用されます。',
        bullets: [
          'バーレーン:一般的なネットメータリング政策(2017年閣議決定第2号)。プラグイン型・バルコニー型に特化した規則は見つからず',
          '台湾:プラグイン区分はまだなし。業界コラム(2026年6月16日)が800 Wまたは1,200 W以下の区分を提案。2026年8月1日から建築面積1,000平方メートル以上の建物に太陽光基準が適用',
          'UAEとサウジアラビアは別記事の湾岸・MENA記事で扱っています。UAEは系統連系システムに電力会社のNOCを要求。サウジアラビアの新Self-Consumption Renewable Energy Regulation(2026年11月13日報道)は1 kWから適用されるため、1 kW未満のキットは対象外',
          'この空白の理由は本ページ独自の推測であり、出典のある事実ではありません。立法や市場の動きが出れば本ページを見直します',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'バーレーン：シグナルなし', anchor: '#bahrain' },
      { label: '台湾：系統連系スケールの政策、消費者向けプラグイン式のシグナルなし', anchor: '#taiwan' },
      { label: 'なぜこうなるのか？（推測であり事実ではない）', anchor: '#why-inference' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: '再確認:プラグイン区分は引き続きなし、補足の背景あり',
        content: '**再検索でも、バーレーンと台湾にプラグイン型・バルコニー太陽光専用の規制、市場、製品カテゴリーは見つかりませんでした。ただし、両国にはこのページの従来の記述が拾えていなかった背景があります。** 台湾については、Taiwan Climate Action Network Research Centerの意見コラム([RECCESSARY、2026年6月16日](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend))が、台湾にはまだ専用のプラグインPV区分がなく、グレーゾーンにあると述べ、800 Wまたは1,200 W以下の独立区分、製品認証、オンライン登録、社会住宅・公共賃貸住宅での試験導入を提案しています。これらは提案であり、規則ではありません。これとは別に、[CNA(2026年6月10日)](https://www.cna.com.tw/news/afe/202606100265.aspx)によると、建築面積1,000平方メートル(約300坪)以上の新築・増築建物に太陽光設備を義務づける基準が2026年8月1日に施行され、4種類の建物は対象外です。対象は大規模建物で、バルコニー用キットではありません。バーレーンについては、従来の「電力会社・産業規模のみ」という書き方は狭すぎます。Sustainable Energy Authorityの[ネットメータリングのページ](https://www.sea.gov.bh/netmetering-3/)は、2017年閣議決定第2号で承認されたネットメータリング政策を説明しています(今回の更新ではページを開けず、詳細は検索結果によるものです)。商業ガイド([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain))は100 kWまでの住宅が対象としていますが、Electricity and Water Authorityで確認すべきです。プラグイン機器に特化した記述は見つかりませんでした。UAEとサウジアラビアは湾岸・MENA記事で扱っています。今回の再確認では、UAEは系統連系システムに電力会社の異議なし証明書(NOC)を求め、2万AEDなどの罰則額は[SurgePV](https://www.surgepv.com/solar-compliance/uae)のような二次的ガイドにしか出てこないこと、またサウジアラビアのSelf-Consumption Renewable Energy Regulationは[Ajel English](https://english.ajel.sa/business/1yz5l2ksj)が2026年11月13日に報じたとおり1 kWから50 MWを対象とし、それより小さいプラグイン型キットには触れていないことが分かりました。本欄は公開情報の要約であり、法的助言ではありません。',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2026年11月時点で、バーレーンと台湾にプラグイン型・バルコニー太陽光専用の市場、規制、製品カテゴリーは見つかりませんでした。本ページはこの不在をそのまま報告します。',
          'バーレーン:一般的なネットメータリング政策(2017年閣議決定第2号)。プラグイン型・バルコニー型に特化した規則は見つからず',
          '台湾:プラグイン区分はまだなし。業界コラム(2026年6月16日)が800 Wまたは1,200 W以下の区分を提案。2026年8月1日から建築面積1,000平方メートル以上の建物に太陽光基準が適用',
          'UAEとサウジアラビアは別記事の湾岸・MENA記事で扱っています。UAEは系統連系システムに電力会社のNOCを要求。サウジアラビアの新Self-Consumption Renewable Energy Regulation(2026年11月13日報道)は1 kWから適用されるため、1 kW未満のキットは対象外',
          'この空白の理由は本ページ独自の推測であり、出典のある事実ではありません。立法や市場の動きが出れば本ページを見直します',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'バーレーン：シグナルなし',
        content: [
          '**バーレーンではプラグイン型・バルコニー太陽光に関する規則、市場、製品報道は見つかりませんでしたが、国としては一般的なネットメータリング政策があります。** Sustainable Energy Authorityは2017年閣議決定第2号で承認されたネットメータリング政策を説明しており、商業ガイドは100 kWまでの住宅が対象としています(Electricity and Water Authorityで要確認)。湾岸地域の動き(再生可能エネルギー証書、GCCIA系統連系)は電力会社・産業規模のもので、消費者向けプラグイン型カテゴリーには該当しません。',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: '台湾：系統連系スケールの政策、消費者向けプラグイン式のシグナルなし',
        content: [
          '**台湾にはプラグイン型・バルコニー太陽光専用の区分はまだなく、太陽光政策は台湾電力の固定価格買取制度と、系統規模・屋根設置システム向けの20年PPA、そして2026年8月1日からの建物向け太陽光基準が中心です。** CNAによると、この基準は建築面積1,000平方メートル(約300坪)以上の新築・増築建物に太陽光設備を義務づけ、4種類の例外があります。対象は大規模建物で、バルコニー用キットではありません。業界の意見コラムは、製品認証つきで800 Wまたは1,200 W以下の独立区分を提案していますが、これは提案であり規則ではありません。',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'なぜこうなるのか？（推測であり事実ではない）',
        content: [
          '合理的な推測として（出典に基づく事実ではありません）：公益事業が一元管理された住宅事情、そして湾岸地域の場合は過酷な気候が、ドイツ・米国で見られる、他地域でのバルコニー太陽光普及を後押ししてきた賃貸集合住宅のパターンとは構造的に異なります。個別の公益事業計量を持つ小規模住戸に住む賃借人——ドイツと米国での普及を牽引してきた層——は、バーレーンと台湾どちらの住宅市場でも構造的に少ない傾向にあります。これはこのページ独自の推論であり、この空白に対するもっともらしい説明として提示するものであって、引用可能な市場調査の結論ではありません。',
        ],
        callouts: [
          { type: 'note', text: '本ページは、調査時点(2026年11月)にバーレーンと台湾で見つかったことをそのまま記載しています。プラグイン型の規則が将来できるかどうかは推測せず、新たな動きがあれば見直します。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'バーレーンや台湾でバルコニー太陽光を購入・使用できますか？', a: '2026年11月時点で、どちらの国にもプラグイン型・バルコニー太陽光専用の規制、市場、製品カテゴリーは見つかりませんでした。バーレーンには一般的なネットメータリング政策があり、台湾の太陽光政策は系統規模・屋根設置システムと、2026年8月1日からの大規模建物向け基準を対象としています。' },
          { q: 'なぜこのページではUAEやサウジアラビアが扱われていないのですか？', a: 'どちらも湾岸・MENA記事で個別に扱っています。UAEは系統連系システムに電力会社の異議なし証明書(NOC)を要求します。二次的なガイドは最大2万AEDの罰則を報じていますが、今回の更新では公式情報で確認できませんでした。サウジアラビアでは、新たに発行されたSelf-Consumption Renewable Energy Regulation(2026年11月13日報道)が1 kW以上のシステムを対象とするため、それより小さいプラグイン型キットは対象外です。規制当局はSaudi Electricity Regulatory Authority(旧ECRA/WERA)です。' },
          { q: 'バーレーンにバルコニー太陽光に関するルールはありますか？', a: 'プラグイン型に特化したものは見つかりませんでした。バーレーンには一般的なネットメータリング政策(2017年閣議決定第2号)と、電力会社・産業規模の動き(再生可能エネルギー証書、GCCIA系統連系)があります。' },
          { q: '台湾にプラグイン式太陽光に関するルールはありますか？', a: 'プラグイン区分はまだありません。台湾の太陽光政策は系統規模・屋根設置システム(台湾電力の固定価格買取制度、20年PPA)と、2026年8月1日からの大規模建物向け太陽光基準を対象としており、業界コラムが800 Wまたは1,200 W以下のプラグイン区分を提案しています。' },
          { q: 'バーレーンや台湾がバルコニー太陽光のルールを整備した場合、このページは更新されますか？', a: 'はい——いずれかの国で立法・市場活動が生じた場合、本ページは改訂されます。調査時点では確認されていません。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[湾岸・MENA地域のバルコニー太陽光](/ja/balcony-solar/balcony-solar-gulf-mena) — UAEとサウジアラビアに特化した規制情報（両国はこの理由で本ページから除外）',
          '[バルコニー太陽光は合法か？国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — グローバルな法規制トラッカー',
          '[日本でバルコニー太陽光は合法か？2027年ステータスレポート](/ja/balcony-solar/balcony-solar-japan-status-2027) — こちらもまだ専用ルールのない新興市場',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-ko.webp',
    title: '아직 발코니 태양광이 존재하지 않는 곳: 바레인과 대만 (2027년)',
    seoTitle: '아직 발코니 태양광이 존재하지 않는 곳: 바레인과 대만 (2027년)',
    intro: '모든 시장에 아직 발코니 태양광 이야기가 있는 것은 아닙니다. 바레인과 대만을 조사한 결과, 2026년 11월 기준으로 두 나라 어디에서도 플러그인/발코니 태양광에 특화된 규제, 시장 활동, 소비자 제품 문화가 발견되지 않았습니다 — 이 페이지는 근거 없는 국가 가이드를 억지로 만들어내는 대신 이 공백을 있는 그대로 보고합니다.',
    metaDescription: '2026년 바레인과 대만에서 플러그인·발코니 태양광 시장이나 규정은 없었습니다. 바레인은 일반 넷미터링, 대만은 제안뿐입니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3분 읽기',
    educationalLevel: 'Beginner',
    audience: '바레인이나 대만에 시장이 존재하는지 확인하려는 발코니 태양광 시장 관찰자',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**2026년 11월 기준 바레인과 대만에서 플러그인·발코니 태양광 전용 시장, 규정, 제품 범주는 찾지 못했습니다.** 바레인에는 일반 넷미터링 정책(2017년 내각 결의 제2호)이 있으나 플러그인에 특화된 내용은 찾지 못했습니다. 대만에는 아직 플러그인 범주가 없으며(업계 칼럼이 800 W 또는 1,200 W 이하 범주를 제안), 2026년 8월 1일부터 건축면적 1,000 m² 이상 건물에 태양광 기준이 적용됩니다. UAE와 사우디아라비아는 걸프·MENA 기사에서 다룹니다. UAE는 계통 연계 시스템에 전력회사 NOC를 요구하고, 사우디아라비아의 새로 발행된 Self-Consumption Renewable Energy Regulation은 1 kW부터 시작하므로 1 kW 미만 플러그인 키트는 다루지 않습니다. 이 페이지는 플러그인 규정이 생길지 여부나 시기를 추측하지 않고 이러한 조사 결과를 출처와 함께 보고합니다.',
    quickAnswerTop: {
      ko: {
        question: '바레인이나 대만에서 발코니 태양광을 이용할 수 있습니까?',
        answer: '2026년 11월 기준 두 나라 모두에서 플러그인·발코니 태양광 전용 규정, 시장, 제품 범주는 찾지 못했습니다. 바레인에는 일반 넷미터링 정책(2017년 내각 결의 제2호)이 있으나 플러그인에 특화된 내용은 없으며, 대만에는 아직 플러그인 범주가 없고(800 W 또는 1,200 W 이하 범주가 제안됨) 2026년 8월 1일부터 대형 건물 대상 태양광 기준이 적용됩니다.',
        bullets: [
          '바레인: 일반 넷미터링 정책(2017년 내각 결의 제2호). 플러그인·발코니 특화 규정은 찾지 못함',
          '대만: 아직 플러그인 범주 없음. 업계 칼럼(2026년 6월 16일)이 800 W 또는 1,200 W 이하 범주를 제안. 2026년 8월 1일부터 건축면적 1,000 m² 이상 건물에 태양광 기준 적용',
          'UAE와 사우디아라비아는 별도의 걸프·MENA 기사에서 다룹니다. UAE는 계통 연계 시스템에 전력회사 NOC를 요구하고, 사우디아라비아의 새 Self-Consumption Renewable Energy Regulation(2026년 11월 13일 보도)은 1 kW부터 시작하므로 1 kW 미만 키트는 다루지 않음',
          '이 공백이 생긴 이유는 이 페이지 자체의 추론이며 출처가 있는 사실이 아닙니다. 입법이나 시장 움직임이 나타나면 페이지를 다시 검토합니다',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '바레인: 신호 없음', anchor: '#bahrain' },
      { label: '대만: 계통연계 규모 정책, 소비자용 플러그인 신호 없음', anchor: '#taiwan' },
      { label: '왜 이럴 수 있는가? (추정이며 사실 아님)', anchor: '#why-inference' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: '재확인: 플러그인 범주는 여전히 없음, 배경 보완',
        content: '**다시 검색해도 바레인과 대만에서 플러그인·발코니 태양광을 위한 전용 규제, 시장, 제품 범주는 찾지 못했습니다. 다만 두 나라 모두 이 페이지의 기존 서술이 담지 못한 배경이 있습니다.** 대만의 경우 Taiwan Climate Action Network 연구센터의 의견 칼럼([RECCESSARY, 2026년 6월 16일](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend))은 대만에 아직 전용 플러그인 PV 범주가 없고 회색지대에 있다고 설명하며, 800 W 또는 1,200 W 이하의 별도 범주, 제품 인증, 온라인 등록, 사회주택·공공임대주택 시범사업을 제안합니다. 이는 제안일 뿐 규칙이 아닙니다. 별도로 [CNA(2026년 6월 10일)](https://www.cna.com.tw/news/afe/202606100265.aspx)에 따르면 건축면적 1,000제곱미터(약 300핑) 이상의 신축·증축 건물에 태양광 설비를 의무화하는 기준이 2026년 8월 1일 시행되며 네 가지 건물 유형은 면제됩니다. 이는 대형 건물을 대상으로 하며 발코니 키트가 아닙니다. 바레인의 경우 기존의 "전력회사·산업 규모뿐"이라는 서술은 너무 좁습니다. Sustainable Energy Authority의 [넷미터링 페이지](https://www.sea.gov.bh/netmetering-3/)는 2017년 내각 결의 제2호로 승인된 넷미터링 정책을 설명합니다(이번 갱신에서는 페이지를 열지 못했고 세부 내용은 검색 결과에서 가져왔습니다). 상업용 가이드([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain))는 100 kW까지의 주택이 대상이라고 하나 Electricity and Water Authority에서 확인해야 합니다. 플러그인 장치를 구체적으로 다룬 내용은 찾지 못했습니다. UAE와 사우디아라비아는 걸프·MENA 기사에서 다룹니다. 이번 재확인에서 UAE는 계통 연계 시스템에 전력회사의 무이의 증명서(NOC)를 요구하며 2만 AED 같은 벌금 수치는 [SurgePV](https://www.surgepv.com/solar-compliance/uae) 같은 2차 가이드에만 나온다는 점, 그리고 사우디아라비아의 Self-Consumption Renewable Energy Regulation은 [Ajel English](https://english.ajel.sa/business/1yz5l2ksj)가 2026년 11월 13일 보도한 바와 같이 1 kW부터 50 MW까지를 대상으로 하고 더 작은 플러그인 키트는 다루지 않는다는 점을 확인했습니다. 이는 공개 정보의 요약이며 법률 자문이 아닙니다.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2026년 11월 기준 바레인과 대만에서 플러그인·발코니 태양광 전용 시장, 규정, 제품 범주는 찾지 못했습니다. 이 페이지는 이러한 부재를 그대로 보고합니다.',
          '바레인: 일반 넷미터링 정책(2017년 내각 결의 제2호). 플러그인·발코니 특화 규정은 찾지 못함',
          '대만: 아직 플러그인 범주 없음. 업계 칼럼(2026년 6월 16일)이 800 W 또는 1,200 W 이하 범주를 제안. 2026년 8월 1일부터 건축면적 1,000 m² 이상 건물에 태양광 기준 적용',
          'UAE와 사우디아라비아는 별도의 걸프·MENA 기사에서 다룹니다. UAE는 계통 연계 시스템에 전력회사 NOC를 요구하고, 사우디아라비아의 새 Self-Consumption Renewable Energy Regulation(2026년 11월 13일 보도)은 1 kW부터 시작하므로 1 kW 미만 키트는 다루지 않음',
          '이 공백이 생긴 이유는 이 페이지 자체의 추론이며 출처가 있는 사실이 아닙니다. 입법이나 시장 움직임이 나타나면 페이지를 다시 검토합니다',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: '바레인: 신호 없음',
        content: [
          '**바레인에서는 플러그인·발코니 태양광에 관한 규정, 시장, 제품 보도를 찾지 못했지만, 이 나라에는 일반 넷미터링 정책이 있습니다.** Sustainable Energy Authority는 2017년 내각 결의 제2호로 승인된 넷미터링 정책을 설명하고, 상업용 가이드는 100 kW까지의 주택이 대상이라고 합니다(Electricity and Water Authority에서 확인 필요). 걸프 지역의 움직임(재생에너지 인증서, GCCIA 계통 연계)은 전력회사·산업 규모이며, 소비자용 플러그인 범주를 다루지 않습니다.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: '대만: 계통연계 규모 정책, 소비자용 플러그인 신호 없음',
        content: [
          '**대만에는 플러그인·발코니 태양광 전용 범주가 아직 없으며, 태양광 정책은 대만전력(Taipower)의 발전차액지원 요금과 계통 규모·옥상 시스템용 20년 PPA, 그리고 2026년 8월 1일부터의 건물 태양광 기준을 중심으로 합니다.** CNA에 따르면 이 기준은 건축면적 1,000 m²(약 300핑) 이상 신축·증축 건물에 태양광 설비를 요구하며 네 가지 면제 유형이 있어, 대형 건물을 겨냥하고 발코니 키트는 대상이 아닙니다. 업계 의견 칼럼은 제품 인증을 갖춘 800 W 또는 1,200 W 이하의 별도 범주를 제안하지만 이는 제안일 뿐 규정이 아닙니다.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: '왜 이럴 수 있는가? (추정이며 사실 아님)',
        content: [
          '합리적인 추정으로서(출처가 있는 사실은 아님): 공공사업이 중앙에서 관리되는 주택 재고, 그리고 걸프 지역의 경우 극단적인 기후는, 다른 지역에서 발코니 태양광 도입을 이끌어온 독일·미국식 임대 아파트 패턴과 구조적으로 다릅니다. 독일과 미국에서 도입을 주도해온 계층인, 개별 공공사업 계량을 갖춘 소규모 아파트 세대 임차인은 바레인과 대만의 주택 시장 모두에서 구조적으로 덜 흔합니다. 이는 이 공백에 대한 이 페이지 자체의 논리이며, 그럴듯한 설명으로 제시하는 것일 뿐 인용 가능한 시장조사 결과가 아닙니다.',
        ],
        callouts: [
          { type: 'note', text: '이 페이지는 조사 시점(2026년 11월)에 바레인과 대만에서 찾은 내용을 있는 그대로 기록합니다. 플러그인 규정이 생길지 여부나 시기를 추측하지 않으며, 새로운 움직임이 있으면 다시 검토합니다.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '바레인이나 대만에서 발코니 태양광을 구매하고 사용할 수 있습니까?', a: '2026년 11월 기준 두 나라 모두에서 플러그인·발코니 태양광 전용 규정, 시장, 제품 범주는 찾지 못했습니다. 바레인에는 일반 넷미터링 정책이 있고, 대만의 태양광 정책은 계통 규모·옥상 시스템과 2026년 8월 1일부터의 대형 건물 기준을 다룹니다.' },
          { q: '이 페이지에서 아랍에미리트나 사우디아라비아를 다루지 않는 이유는 무엇입니까?', a: '두 나라 모두 걸프·MENA 기사에서 별도로 다룹니다. UAE는 계통 연계 시스템에 전력회사의 무이의 증명서(NOC)를 요구하며, 2차 가이드는 최대 2만 AED의 벌금을 언급하지만 이번 갱신에서는 공식 출처로 확인하지 못했습니다. 사우디아라비아에서는 새로 발행된 Self-Consumption Renewable Energy Regulation(2026년 11월 13일 보도)이 1 kW 이상 시스템을 대상으로 하므로 더 작은 플러그인 키트는 다루지 않으며, 규제 기관은 Saudi Electricity Regulatory Authority(이전 ECRA/WERA)입니다.' },
          { q: '바레인에는 발코니 태양광 관련 규정이 있습니까?', a: '플러그인에 특화된 내용은 찾지 못했습니다. 바레인에는 일반 넷미터링 정책(2017년 내각 결의 제2호)과 전력회사·산업 규모의 움직임(재생에너지 인증서, GCCIA 계통 연계)이 있습니다.' },
          { q: '대만에는 플러그인 태양광 관련 규정이 있습니까?', a: '플러그인 범주는 아직 없습니다. 대만의 태양광 정책은 계통 규모·옥상 시스템(Taipower 발전차액지원 요금, 20년 PPA)과 2026년 8월 1일부터의 대형 건물 태양광 기준을 다루며, 업계 칼럼이 800 W 또는 1,200 W 이하 플러그인 범주를 제안합니다.' },
          { q: '바레인이나 대만이 발코니 태양광 규정을 마련하면 이 페이지가 업데이트됩니까?', a: '예 — 두 나라 중 어느 곳에서든 입법 또는 시장 활동이 발생하면 이 페이지는 다시 검토됩니다. 조사 시점에는 발견되지 않았습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[걸프·MENA 지역의 발코니 태양광](/ko/balcony-solar/balcony-solar-gulf-mena) — 아랍에미리트와 사우디아라비아에 특화된 규제 정보(두 나라 모두 이런 이유로 이 페이지에서 제외됨)',
          '[발코니 태양광은 합법인가? 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 글로벌 법률 추적기',
          '[일본에서 발코니 태양광은 합법인가? 2027년 현황 보고서](/ko/balcony-solar/balcony-solar-japan-status-2027) — 아직 전용 규정이 없는 또 다른 신흥 시장',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-pt.webp',
    title: 'Onde a energia solar de varanda ainda não existe: Bahrein e Taiwan (2027)',
    seoTitle: 'Onde a energia solar de varanda ainda não existe: Bahrein e Taiwan (2027)',
    intro: 'Nem todo mercado ainda tem uma história de energia solar de varanda para contar. A pesquisa sobre Bahrein e Taiwan não encontrou regulamentação, atividade de mercado ou cultura de produto dedicada à energia solar plug-in/de varanda em nenhum dos dois países, até novembro de 2026 — esta página relata essa ausência diretamente, em vez de fabricar um guia de país onde nenhum se justifica.',
    metaDescription: 'Em 2026 não foi achado mercado nem regulação de energia solar plug-in/de varanda no Bahrein ou em Taiwan: Bahrein tem net metering geral, Taiwan só propostas.',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '3 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Observadores do mercado de energia solar de varanda verificando se existe um mercado no Bahrein ou em Taiwan',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**Em novembro de 2026, não foi encontrado nenhum mercado, regulação ou categoria de produto dedicados a energia solar plug-in/de varanda no Bahrein ou em Taiwan.** O Bahrein tem uma política geral de net metering (Resolução n.º 2 de 2017 do Gabinete), mas nada específico para plug-in; Taiwan ainda não tem categoria plug-in (uma coluna do setor propõe uma de até 800 W ou 1.200 W) e aplica desde 1º de agosto de 2026 uma norma solar para edifícios de 1.000 m² ou mais. Emirados Árabes Unidos e Arábia Saudita são tratados no artigo sobre Golfo e MENA: os Emirados exigem um NOC da concessionária para sistemas conectados à rede, e o Self-Consumption Renewable Energy Regulation recém-publicado na Arábia Saudita começa em 1 kW, então kits plug-in abaixo de 1 kW não são abordados. Esta página relata esses achados com suas fontes, sem especular se ou quando regras plug-in poderão surgir.',
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda está disponível no Bahrein ou em Taiwan?',
        answer: 'Em novembro de 2026, não foi encontrada em nenhum dos dois países uma regulação, mercado ou categoria de produto dedicados a energia solar plug-in/de varanda. O Bahrein tem uma política geral de net metering (Resolução n.º 2 de 2017 do Gabinete), mas nada específico para plug-in; Taiwan ainda não tem categoria plug-in, com propostas de uma de até 800 W ou 1.200 W, e aplica desde 1º de agosto de 2026 uma norma solar para grandes edifícios.',
        bullets: [
          'Bahrein: política geral de net metering (Resolução n.º 2 de 2017 do Gabinete); nenhuma regra específica para plug-in/varanda foi encontrada',
          'Taiwan: ainda sem categoria plug-in; uma coluna do setor (16 de junho de 2026) propõe uma de até 800 W ou 1.200 W; desde 1º de agosto de 2026 vale uma norma solar para edifícios de 1.000 m² ou mais',
          'Emirados Árabes Unidos e Arábia Saudita são tratados no artigo separado sobre Golfo e MENA: os Emirados exigem um NOC da concessionária para sistemas conectados; o novo Self-Consumption Renewable Energy Regulation saudita (noticiado em 13 de novembro de 2026) começa em 1 kW, então kits abaixo de 1 kW não são abordados',
          'Por que a lacuna existe é inferência própria desta página, não um fato com fonte; a página será revisitada se surgir atividade legislativa ou de mercado',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Bahrein: nenhum sinal encontrado', anchor: '#bahrain' },
      { label: 'Taiwan: política em escala de rede, sem sinal de consumo plug-in', anchor: '#taiwan' },
      { label: 'Por que isso pode ser assim? (Inferência, não fato)', anchor: '#why-inference' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: 'Reverificação: ainda sem categoria plug-in, com contexto adicional',
        content: '**Uma nova busca continuou sem encontrar regulação, mercado ou categoria de produto dedicados a energia solar plug-in/de varanda no Bahrein ou em Taiwan, mas os dois países têm um contexto que a redação anterior desta página não captava.** Em Taiwan, uma coluna de opinião do Taiwan Climate Action Network Research Center no [RECCESSARY (16 de junho de 2026)](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend) afirma que Taiwan ainda não tem uma categoria específica de FV plug-in, descreve uma zona cinzenta e propõe uma categoria separada até 800 W ou 1.200 W com certificação de produto, registro online e pilotos em habitação social e de aluguel público; são propostas, não regras. Separadamente, segundo a [CNA (10 de junho de 2026)](https://www.cna.com.tw/news/afe/202606100265.aspx), uma norma que exige equipamentos solares em edifícios novos ou ampliados de 1.000 metros quadrados (cerca de 300 ping) ou mais entra em vigor em 1º de agosto de 2026, com isenções para quatro tipos de edifício; ela visa grandes edifícios, não kits de varanda. Quanto ao Bahrein, o enquadramento anterior de «apenas concessionárias/industrial» é estreito demais: a [página de net metering](https://www.sea.gov.bh/netmetering-3/) da Sustainable Energy Authority descreve uma política de net metering aprovada pela Resolução n.º 2 de 2017 do Gabinete (a página não pôde ser aberta nesta atualização; o detalhe vem de um resultado de busca), e um guia comercial ([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain)) diz que ela cobre residências de até 100 kW, o que deve ser verificado com a Electricity and Water Authority; nada foi encontrado sobre unidades plug-in especificamente. Emirados Árabes Unidos e Arábia Saudita são tratados no artigo sobre Golfo e MENA; uma nova checagem constatou que os Emirados exigem um certificado de não objeção (NOC) da concessionária para sistemas conectados, com valores de multa como 20.000 AED aparecendo apenas em guias secundários como o [SurgePV](https://www.surgepv.com/solar-compliance/uae), e que o Self-Consumption Renewable Energy Regulation da Arábia Saudita, noticiado pelo [Ajel English](https://english.ajel.sa/business/1yz5l2ksj) em 13 de novembro de 2026, abrange de 1 kW a 50 MW e não trata de kits plug-in menores. Este é um resumo de informações públicas, não aconselhamento jurídico.',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Em novembro de 2026, não foi encontrado nenhum mercado, regulação ou categoria de produto dedicados a energia solar plug-in/de varanda no Bahrein ou em Taiwan — esta página relata diretamente essa ausência.',
          'Bahrein: política geral de net metering (Resolução n.º 2 de 2017 do Gabinete); nenhuma regra específica para plug-in/varanda foi encontrada',
          'Taiwan: ainda sem categoria plug-in; uma coluna do setor (16 de junho de 2026) propõe uma de até 800 W ou 1.200 W; desde 1º de agosto de 2026 vale uma norma solar para edifícios de 1.000 m² ou mais',
          'Emirados Árabes Unidos e Arábia Saudita são tratados no artigo separado sobre Golfo e MENA: os Emirados exigem um NOC da concessionária para sistemas conectados; o novo Self-Consumption Renewable Energy Regulation saudita (noticiado em 13 de novembro de 2026) começa em 1 kW, então kits abaixo de 1 kW não são abordados',
          'Por que a lacuna existe é inferência própria desta página, não um fato com fonte; a página será revisitada se surgir atividade legislativa ou de mercado',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: 'Bahrein: nenhum sinal encontrado',
        content: [
          '**No Bahrein não foi encontrada nenhuma regra, mercado ou cobertura de produto de energia solar plug-in/de varanda, embora o país tenha uma política geral de net metering.** A Sustainable Energy Authority descreve uma política de net metering aprovada pela Resolução n.º 2 de 2017 do Gabinete, e um guia comercial diz que ela cobre residências de até 100 kW (a verificar com a Electricity and Water Authority). A atividade regional do Golfo (certificados de energia renovável, interconexão GCCIA) é de escala de concessionárias/industrial; nada disso trata de uma categoria de consumo plug-in.',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: 'Taiwan: política em escala de rede, sem sinal de consumo plug-in',
        content: [
          '**Taiwan ainda não tem uma categoria específica de energia solar plug-in/de varanda; sua política solar se concentra nas tarifas feed-in da Taipower e em PPAs de 20 anos para sistemas em escala de rede e de telhado, mais uma norma solar para edifícios desde 1º de agosto de 2026.** Segundo a CNA, a norma exige equipamentos solares em edifícios novos ou ampliados de 1.000 m² (cerca de 300 ping) ou mais, com quatro tipos de isenção, então mira grandes edifícios, não kits de varanda. Uma coluna de opinião do setor propõe uma categoria separada de até 800 W ou 1.200 W com certificação de produto; são propostas, não regras.',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: 'Por que isso pode ser assim? (Inferência, não fato)',
        content: [
          'Como uma inferência razoável (não um fato documentado): o estoque de moradias com gestão centralizada de serviços públicos e — no caso do Golfo — um clima extremo, diferem estruturalmente do padrão de aluguel alemão/americano que impulsionou a adoção de energia solar de varanda em outros lugares. Locatários de unidades pequenas com medição individual de serviços públicos, o grupo demográfico que impulsiona a adoção na Alemanha e nos Estados Unidos, são estruturalmente menos comuns tanto no mercado imobiliário do Bahrein quanto no de Taiwan. Este é o raciocínio próprio desta página para explicar a lacuna, oferecido como uma explicação plausível, não um resultado de pesquisa de mercado citado.',
        ],
        callouts: [
          { type: 'note', text: 'Esta página diz claramente o que foi encontrado no Bahrein e em Taiwan na data da pesquisa (novembro de 2026). Não especula se ou quando regras plug-in poderão surgir e será revisitada se aparecer nova atividade.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Posso comprar e usar energia solar de varanda no Bahrein ou em Taiwan?', a: 'Em novembro de 2026, não foi encontrada em nenhum dos dois países uma regulação, mercado ou categoria de produto dedicados a energia solar plug-in/de varanda. O Bahrein tem uma política geral de net metering; a política solar de Taiwan abrange sistemas em escala de rede e de telhado e, desde 1º de agosto de 2026, uma norma para grandes edifícios.' },
          { q: 'Por que os Emirados Árabes Unidos ou a Arábia Saudita não são cobertos nesta página?', a: 'Ambos têm cobertura própria no artigo sobre Golfo e MENA. Os Emirados Árabes Unidos exigem um certificado de não objeção (NOC) da concessionária para sistemas conectados à rede; guias secundários citam multas de até 20.000 AED, o que esta atualização não conseguiu verificar em fonte oficial. Na Arábia Saudita, o Self-Consumption Renewable Energy Regulation recém-publicado (noticiado em 13 de novembro de 2026) abrange sistemas a partir de 1 kW, então kits plug-in menores não são abordados; o regulador é a Saudi Electricity Regulatory Authority (antes ECRA/WERA).' },
          { q: 'O Bahrein tem alguma regra sobre energia solar de varanda?', a: 'Nada específico para plug-in foi encontrado. O Bahrein tem uma política geral de net metering (Resolução n.º 2 de 2017 do Gabinete) e atividade em escala de concessionárias/industrial (certificados de energia renovável, interconexão GCCIA).' },
          { q: 'Taiwan tem regras para energia solar plug-in?', a: 'Ainda não existe categoria plug-in. A política solar de Taiwan abrange sistemas em escala de rede e de telhado (tarifas feed-in da Taipower, PPAs de 20 anos) e, desde 1º de agosto de 2026, uma norma solar para grandes edifícios; uma coluna do setor propõe uma categoria plug-in de até 800 W ou 1.200 W.' },
          { q: 'Esta página será atualizada se o Bahrein ou Taiwan desenvolverem regras de energia solar de varanda?', a: 'Sim — esta página será revisada se surgir atividade legislativa ou de mercado em qualquer um dos dois países. Até a data da pesquisa, nenhuma foi encontrada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Energia solar de varanda no Golfo e no MENA](/pt/balcony-solar/balcony-solar-gulf-mena) — cobertura regulatória dedicada aos Emirados Árabes Unidos e à Arábia Saudita (ambos excluídos desta página por esse motivo)',
          '[A energia solar de varanda é legal? Um guia por país](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
          '[A energia solar de varanda é legal no Japão? Relatório de status 2027](/pt/balcony-solar/balcony-solar-japan-status-2027) — outro mercado emergente ainda sem regras dedicadas',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/where-balcony-solar-doesnt-exist-yet-2027-overview-hero-zh.webp',
    title: '阳台太阳能尚未出现的地区：巴林与台湾（2027年）',
    seoTitle: '阳台太阳能尚未出现的地区：巴林与台湾（2027年）',
    intro: '并非每个市场都已经有阳台太阳能的故事可讲。针对巴林和台湾的调研发现，截至2026年11月，这两个地区都没有专门针对插电式/阳台太阳能的监管、市场活动或消费产品文化——本页直接报告这一空白，而不是在没有依据的情况下编造一篇地区指南。',
    metaDescription: '2026年在巴林和台湾未发现插电式/阳台光伏市场或法规:巴林有一般净计量政策,台湾仅有提案。如有变化将更新。',
    publishDate: '2026-07-18',
    dateModified: '2026-11-20',
    readTime: '阅读约3分钟',
    educationalLevel: 'Beginner',
    audience: '想确认巴林或台湾是否存在阳台太阳能市场的观察者',
    primaryTerm: 'balcony solar bahrain taiwan',
    targetKeywords: ['balcony solar bahrain', 'balcony solar taiwan', 'plug-in solar taiwan'],
    leadAnswerBlock: '**截至2026年11月,在巴林或台湾未发现专门的插电式/阳台光伏市场、法规或产品类别。** 巴林有一般性的净计量政策(2017年第2号内阁决议),但未发现专门针对插电式的内容;台湾尚无插电式类别(一篇行业专栏建议设立800 W或1,200 W以下的类别),并自2026年8月1日起对建筑面积1,000平方米以上的建筑实施太阳能标准。阿联酋和沙特阿拉伯在海湾与中东北非文章中介绍:阿联酋要求并网系统取得供电方NOC,沙特新发布的Self-Consumption Renewable Energy Regulation从1 kW起适用,因此1 kW以下的插电式套件不在其范围内。本页报告这些发现及来源,不推测插电式规则是否或何时出台。',
    quickAnswerTop: {
      zh: {
        question: '巴林或台湾能买到阳台太阳能产品吗？',
        answer: '截至2026年11月,两地均未发现专门的插电式/阳台光伏法规、市场或产品类别。巴林有一般性的净计量政策(2017年第2号内阁决议),但无专门针对插电式的内容;台湾尚无插电式类别,有人建议设立800 W或1,200 W以下的类别,并自2026年8月1日起对大型建筑实施太阳能标准。',
        bullets: [
          '巴林:一般净计量政策(2017年第2号内阁决议);未发现专门针对插电式/阳台的规则',
          '台湾:尚无插电式类别;一篇行业专栏(2026年6月16日)建议设立800 W或1,200 W以下的类别;自2026年8月1日起,建筑面积1,000平方米以上的建筑适用太阳能标准',
          '阿联酋和沙特阿拉伯在单独的海湾与中东北非文章中介绍:阿联酋要求并网系统取得供电方NOC;沙特新的Self-Consumption Renewable Energy Regulation(2026年11月13日报道)从1 kW起适用,因此1 kW以下的套件不在其范围内',
          '出现这一空白的原因是本页自己的推断,而非有来源的事实;如出现立法或市场动向,本页将重新审视',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '巴林：未发现信号', anchor: '#bahrain' },
      { label: '台湾：电网规模政策，无消费级插电式信号', anchor: '#taiwan' },
      { label: '为何会如此？（推断，而非事实）', anchor: '#why-inference' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      statusNote: {
        title: '复核:仍无插电式类别,并补充背景',
        content: '**再次检索后,仍未发现巴林或台湾有专门针对插电式/阳台太阳能的法规、市场或产品类别,但两地都有本页此前表述未涵盖的背景。** 就台湾而言,台湾气候行动网络研究中心的一篇评论专栏([RECCESSARY,2026年6月16日](https://www.reccessary.com/zh-tw/insight/balcony-PV-trend))指出,台湾尚无专门的插电式光电类别,处于灰色地带,并建议设立800 W或1,200 W以下的独立类别,配套产品认证、线上登记以及在社会住宅和公共出租住宅中试点;这些是建议,而非规则。另据[CNA(2026年6月10日)](https://www.cna.com.tw/news/afe/202606100265.aspx)报道,要求建筑面积1,000平方米(约300坪)以上的新建或增建建筑设置太阳能设备的标准将于2026年8月1日起施行,四类建筑可获豁免;该规定针对大型建筑,而非阳台套件。就巴林而言,此前“仅限公用事业/工业”的表述过窄:可持续能源管理局的[净计量页面](https://www.sea.gov.bh/netmetering-3/)介绍了经2017年第2号内阁决议批准的净计量政策(本次更新未能打开该页面,细节来自搜索结果),一份商业指南([SurgePV](https://www.surgepv.com/blog/solar-incentives-in-bahrain))称其覆盖最高100 kW的住宅,仍应向电力和水务局核实;未发现专门涉及插电式设备的内容。阿联酋和沙特阿拉伯已在海湾与中东北非文章中介绍;本次复核发现,阿联酋要求并网系统取得供电方的无异议证书(NOC),20,000迪拉姆之类的罚款数字仅见于[SurgePV](https://www.surgepv.com/solar-compliance/uae)等二手指南;沙特的Self-Consumption Renewable Energy Regulation据[Ajel English](https://english.ajel.sa/business/1yz5l2ksj)于2026年11月13日报道,适用范围为1 kW至50 MW,未涉及更小的插电式套件。本页为公开信息的汇总,不构成法律意见。',
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '截至2026年11月,在巴林或台湾未发现专门的插电式/阳台光伏市场、法规或产品类别——本页直接报告这一空白。',
          '巴林:一般净计量政策(2017年第2号内阁决议);未发现专门针对插电式/阳台的规则',
          '台湾:尚无插电式类别;一篇行业专栏(2026年6月16日)建议设立800 W或1,200 W以下的类别;自2026年8月1日起,建筑面积1,000平方米以上的建筑适用太阳能标准',
          '阿联酋和沙特阿拉伯在单独的海湾与中东北非文章中介绍:阿联酋要求并网系统取得供电方NOC;沙特新的Self-Consumption Renewable Energy Regulation(2026年11月13日报道)从1 kW起适用,因此1 kW以下的套件不在其范围内',
          '出现这一空白的原因是本页自己的推断,而非有来源的事实;如出现立法或市场动向,本页将重新审视',
        ],
      },
      bahrain: {
        id: 'bahrain',
        title: '巴林：未发现信号',
        content: [
          '**在巴林未发现插电式/阳台光伏的规则、市场或产品报道,但该国有一般性的净计量政策。** 可持续能源管理局介绍了经2017年第2号内阁决议批准的净计量政策,一份商业指南称其覆盖最高100 kW的住宅(需向电力和水务局核实)。海湾地区的相关活动(可再生能源证书、GCCIA电网互联)属于公用事业/工业规模,均不涉及面向消费者的插电式类别。',
        ],
      },
      taiwan: {
        id: 'taiwan',
        title: '台湾：电网规模政策，无消费级插电式信号',
        content: [
          '**台湾尚无专门的插电式/阳台光伏类别;其太阳能政策以台电的上网电价和面向电网规模及屋顶系统的20年购电协议为主,并自2026年8月1日起实施建筑太阳能标准。** 据CNA报道,该标准要求建筑面积1,000平方米(约300坪)以上的新建或增建建筑设置太阳能设备,并有四类豁免,因此针对的是大型建筑,而非阳台套件。一篇行业评论专栏建议设立800 W或1,200 W以下、配套产品认证的独立类别,但这只是建议,并非规则。',
        ],
      },
      whyInference: {
        id: 'why-inference',
        title: '为何会如此？（推断，而非事实）',
        content: [
          '作为一种合理推断（并非有据可查的事实）：实行集中公用事业管理的住房存量，以及在海湾地区情况下的极端气候，与推动其他地区阳台太阳能普及的德国/美国式租赁公寓模式在结构上存在差异。拥有独立公用事业计量的小型公寓租户——即推动德国和美国普及的人群——在巴林和台湾的住房市场中结构性地都不算常见。这是本页对该空白的自有推理，作为一种合理解释提出，而非引用的市场调研结论。',
        ],
        callouts: [
          { type: 'note', text: '本页如实记录截至调研时点(2026年11月)在巴林和台湾的发现,不推测插电式规则是否或何时出台,如有新动向将重新审视。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '我能在巴林或台湾购买并使用阳台太阳能产品吗？', a: '截至2026年11月,两地均未发现专门的插电式/阳台光伏法规、市场或产品类别。巴林有一般性的净计量政策;台湾的太阳能政策涵盖电网规模和屋顶系统,并自2026年8月1日起对大型建筑实施标准。' },
          { q: '为什么本页没有涉及阿联酋或沙特阿拉伯？', a: '两国在海湾与中东北非文章中均有专门介绍。阿联酋要求并网系统取得供电方的无异议证书(NOC);二手指南称罚款最高可达20,000迪拉姆,本次更新无法对照官方来源核实。在沙特阿拉伯,新发布的Self-Consumption Renewable Energy Regulation(2026年11月13日报道)适用于1 kW及以上的系统,因此更小的插电式套件不在其范围内;监管机构为沙特电力监管局(Saudi Electricity Regulatory Authority,此前为ECRA/WERA)。' },
          { q: '巴林有阳台太阳能相关规则吗？', a: '未发现专门针对插电式的内容。巴林有一般性的净计量政策(2017年第2号内阁决议)以及公用事业/工业规模的活动(可再生能源证书、GCCIA电网互联)。' },
          { q: '台湾有插电式太阳能相关规则吗？', a: '尚无插电式类别。台湾的太阳能政策涵盖电网规模和屋顶系统(台电上网电价、20年购电协议),并自2026年8月1日起对大型建筑实施太阳能标准;一篇行业专栏建议设立800 W或1,200 W以下的插电式类别。' },
          { q: '如果巴林或台湾制定阳台太阳能规则，本页会更新吗？', a: '会——若两地任一出现立法或市场活动，本页都将进行更新。截至调研日期，尚未发现相关活动。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[海湾及中东北非地区的阳台太阳能](/zh/balcony-solar/balcony-solar-gulf-mena) — 阿联酋和沙特阿拉伯的专门监管报道（两地因此被排除在本页之外）',
          '[阳台太阳能合法吗？国别指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) — 全球法规追踪',
          '[日本的阳台太阳能合法吗？2027年状态报告](/zh/balcony-solar/balcony-solar-japan-status-2027) — 另一个尚无专门规则的新兴市场',
        ],
      },
    },
  },
}
