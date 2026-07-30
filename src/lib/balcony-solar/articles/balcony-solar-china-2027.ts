// Slug: balcony-solar-china-2027
// BSOL-31 — Tier 5 (2027 Trends), legislation/market status, semi_annual.
// SCOPE NOTE: existing balcony-solar content mentions China extensively but only as a
// manufacturer/exporter (export-tax rebate removal, Section 301 tariffs, Shenzhen brands).
// This article covers China as a DOMESTIC ADOPTION MARKET instead — a distinct angle,
// not a duplicate of the manufacturing/export coverage elsewhere in this cluster.
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-en.png',
    title: 'Balcony Solar in China: The Domestic Market Emerging Behind the Export Boom (2027)',
    seoTitle: 'Balcony Solar in China: The Domestic Market Emerging Behind the Export Boom (2027)',
    intro: 'China is the world\'s largest exporter of balcony solar hardware — but this page is about a different, newer story: a domestic adoption market taking shape inside China itself, formalized by the country\'s first balcony-solar industry standard in May 2026 and driven by a 2025 policy shift that undercut the economics of traditional grid-subsidized household solar.',
    metaDescription: 'China published its first balcony-solar industry standard (T/GEA 001-2026) in May 2026, drafted with Hoymiles and Trina\'s household brand. Policy driver: Document No. 136 (effective May 31, 2025) pushed household solar toward self-consumption. Single-source estimates put 2024 domestic installs around 1,000 units, projecting toward 100,000+ by 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar market watchers and buyers assessing China\'s domestic adoption, distinct from China as a manufacturing hub',
    primaryTerm: 'balcony solar china domestic market',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**China published its first industry standard specifically for balcony solar — T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范," the Balcony PV Quality and Safety Evaluation Technical Standard) — on May 21, 2026, issued by the Shanghai Minhang District Green Energy Industry Development Promotion Association.** The standard was drafted jointly with the China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association, with Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household") as core drafting enterprises. The policy backdrop is China\'s "Document No. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), effective May 31, 2025, which requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing — undercutting the traditional "sell excess to the grid for subsidy" economics of household solar and opening a market case for self-consumption-focused balcony systems instead. [VERIFY: single-company estimate, not independently confirmed] Trina\'s household brand estimates roughly 1,000 domestic installs in 2024, projecting toward 10,000 in 2025 and potentially 100,000+ by 2026.',
    quickAnswerTop: {
      en: {
        question: 'Is there a domestic balcony solar market in China, separate from its role as a manufacturing hub?',
        answer: 'Yes — a domestic adoption market is emerging, formalized by China\'s first balcony-solar industry standard, T/GEA 001-2026, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association and drafted with Hoymiles and Trina Solar\'s household brand (天合富家) as core participants. The policy driver is "Document No. 136," effective May 31, 2025, which pushed new renewable energy projects toward market-based trading instead of guaranteed feed-in pricing — undermining the economics of traditional subsidized household solar and creating a market opening for self-consumption balcony systems. Trina\'s household brand estimates (flagged here as a single-company projection, not independently verified) suggest roughly 1,000 units installed domestically in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026.',
        bullets: [
          'T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范"), China\'s first balcony-solar industry standard, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association',
          'Drafted with the China Distributed Solar-Storage Brand Alliance, Shandong Solar Energy Industry Association, and Henan Province Industry Development Research Association\'s New Energy Committee; Hoymiles and Trina Solar\'s household brand (天合富家) were core drafting enterprises',
          'Policy driver: "Document No. 136," effective May 31, 2025, requires new renewable projects to enter market trading instead of guaranteed feed-in pricing — undercutting subsidized household-solar economics and opening a case for self-consumption-focused balcony solar',
          '[VERIFY: single-source, Trina household brand estimate] ~1,000 domestic units installed in 2024, ~10,000 projected for 2025, potentially 100,000+ for 2026 — not an independently confirmed or official figure',
          'This is a distinct topic from China\'s role as a manufacturing/export hub (covered elsewhere in this cluster, e.g. export-tax rebate changes and Section 301 tariffs) — this page covers domestic adoption inside China specifically',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'China\'s First Balcony Solar Standard', anchor: '#first-standard' },
      { label: 'The Policy Driver: Document No. 136', anchor: '#document-136' },
      { label: 'Market Size: Early and Single-Sourced', anchor: '#market-size' },
      { label: 'Manufacturing Hub vs. Domestic Market', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'China published its first balcony-solar industry standard, T/GEA 001-2026, on May 21, 2026 — issued by the Shanghai Minhang District Green Energy Industry Development Promotion Association.',
          'Core drafting enterprises included Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household"), alongside three industry associations spanning distributed solar-storage and regional new-energy committees.',
          '"Document No. 136," effective May 31, 2025, requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing — this undercut traditional subsidized household-solar economics and created a market opening for self-consumption balcony solar.',
          '[VERIFY: single-source] Trina\'s household brand estimates ~1,000 domestic balcony solar installs in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026 — treat as a company projection, not an official or independently confirmed figure.',
          'WattCycle, a Shenzhen-based manufacturer already covered elsewhere in this cluster for its export products, is a direct link between China\'s manufacturing base and this emerging domestic market.',
          'Chinese trade press explicitly frames this adoption curve as following Germany\'s earlier trajectory (Germany\'s 1M+ registered systems used as the reference benchmark) — an industry framing worth noting, not an independently verified conclusion.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'China\'s First Balcony Solar Standard',
        content: [
          '**On May 21, 2026, the Shanghai Minhang District Green Energy Industry Development Promotion Association published T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范" — the Balcony PV Quality and Safety Evaluation Technical Standard), China\'s first industry standard specifically for balcony solar.** As an industry ("T/") standard rather than a national mandatory standard, it establishes quality and safety evaluation criteria for the category rather than imposing a wattage cap or registration process comparable to Germany\'s DIN VDE V 0126-95 or the EU\'s 800W convergence — it is a technical quality bar, not a legal permission framework.',
          'The standard was drafted jointly with the China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association. Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household") were named as core drafting enterprises — both established solar-hardware manufacturers with existing product lines directly relevant to balcony solar quality and safety evaluation.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'The Policy Driver: Document No. 136',
        content: [
          '**China\'s "Document No. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), effective from May 31, 2025, requires new renewable energy projects\' generation to enter market-based trading rather than receive guaranteed feed-in pricing.** This is a broad renewable-energy policy shift, not a balcony-solar-specific measure — but it has a direct knock-on effect on the category: it undermined the traditional economics of household solar built around selling excess generation back to the grid for a subsidized, guaranteed price.',
          'That shift creates a market opening for self-consumption-focused systems — balcony solar, which is typically sized and marketed around direct household use rather than grid export, benefits from a policy environment where the old subsidy-driven model no longer applies. The emergence of T/GEA 001-2026 roughly a year after Document No. 136 took effect is consistent with this timing, though this page treats that as contextual correlation rather than a directly sourced causal claim.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'Market Size: Early and Single-Sourced',
        content: [
          '**Market-size estimates for China\'s domestic balcony solar adoption come from a single source — Trina Solar\'s household brand (天合富家) — and should be treated as a company projection, not an independently verified or official figure.** That estimate: roughly 1,000 units installed in China in 2024, approximately 10,000 projected for 2025, and potentially 100,000+ for 2026.',
          'Chinese trade press coverage explicitly frames this trajectory as following Germany\'s earlier balcony-solar adoption curve, using Germany\'s 1M+ registered systems as the reference benchmark for where the category could eventually head in China. This framing should be attributed to the source making the comparison, not treated as this page\'s own independent conclusion — the actual scale and trajectory of China\'s domestic market remains to be confirmed by independent data as it develops.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY: single-company estimate] The 1,000 / 10,000 / 100,000+ installation figures for 2024-2026 come from Trina\'s household brand alone — no independent or official ANEEL-style national statistics agency figure was found to corroborate this.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'Manufacturing Hub vs. Domestic Market',
        content: [
          '**This page covers China as a domestic adoption market — a distinct topic from China\'s well-established role as the world\'s largest balcony solar manufacturing and export hub, which is covered elsewhere in this cluster.** Export-side coverage in this cluster (the 2026 export-tax rebate removal, Section 301 tariffs, and Shenzhen-based brands like Anker, EcoFlow, Zendure, BYD, Growatt, and Marstek) concerns China\'s manufacturing base selling into markets like the US and EU, not domestic Chinese households buying and installing balcony solar for their own use. The two are related but separate stories.',
          'One direct link between them: WattCycle, a Shenzhen-based manufacturer already referenced elsewhere in this cluster for its export products, sits at the intersection of China\'s manufacturing base and this emerging domestic market — a genuine connection between two already-researched facts, not a coincidence of geography alone.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does China have a balcony solar standard?', a: 'Yes — T/GEA 001-2026, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association, is China\'s first industry standard specifically for balcony solar quality and safety evaluation. It is an industry standard, not a national mandatory law with a wattage cap.' },
          { q: 'Who drafted China\'s balcony solar standard?', a: 'The China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association, with Hoymiles and Trina Solar\'s household brand (天合富家) as core drafting enterprises.' },
          { q: 'Why is balcony solar growing in China now?', a: '"Document No. 136," effective May 31, 2025, requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing. This undercut the traditional economics of subsidized household solar built around grid export, opening a market case for self-consumption-focused balcony solar instead.' },
          { q: 'How big is the domestic balcony solar market in China?', a: '[VERIFY: single-source estimate] Trina Solar\'s household brand estimates roughly 1,000 units installed in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026 — a company projection, not an independently confirmed or official figure.' },
          { q: 'Is this the same as China\'s balcony solar export business?', a: 'No. This page covers domestic Chinese adoption; China\'s role as the dominant global manufacturer and exporter of balcony solar hardware (covered elsewhere in this cluster) is a separate, already well-established story.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar Payback: Is It Worth It?](/balcony-solar/balcony-solar-payback-worth-it-2026) — covers China\'s export-tax rebate changes affecting hardware pricing',
          '[EcoFlow vs. Anker vs. Zendure Balcony Solar](/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — Shenzhen-based export brand comparison',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-de.png',
    title: 'Balkonkraftwerke in China: Der heimische Markt hinter dem Exportboom (2027)',
    seoTitle: 'Balkonkraftwerke in China: Der heimische Markt hinter dem Exportboom (2027)',
    intro: 'China ist der weltweit größte Exporteur von Balkonkraftwerk-Hardware — doch diese Seite behandelt eine andere, neuere Geschichte: einen heimischen Absatzmarkt, der sich innerhalb Chinas selbst entwickelt, formalisiert durch den ersten Branchenstandard des Landes für Balkonkraftwerke im Mai 2026 und angetrieben durch eine politische Kurskorrektur 2025, die die Wirtschaftlichkeit der traditionellen, netzsubventionierten Haushaltssolaranlagen untergrub.',
    metaDescription: 'China veröffentlichte im Mai 2026 seinen ersten Branchenstandard für Balkonkraftwerke (T/GEA 001-2026), gemeinsam mit Hoymiles und der Haushaltsmarke von Trina erarbeitet. Politischer Treiber: Dokument Nr. 136 (wirksam seit 31. Mai 2025) lenkte Haushaltssolar in Richtung Eigenverbrauch. Schätzungen einer einzelnen Quelle beziffern die heimischen Installationen 2024 auf rund 1.000 Einheiten, mit einer Projektion auf über 100.000 bis 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Beobachter und Käufer des Balkonkraftwerk-Markts, die Chinas heimische Marktentwicklung verfolgen — getrennt von Chinas Rolle als Fertigungsstandort',
    primaryTerm: 'balkonkraftwerk china heimischer markt',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**China veröffentlichte am 21. Mai 2026 seinen ersten Branchenstandard speziell für Balkonkraftwerke — T/GEA 001-2026 („阳台光伏质量与安全评价技术规范", den Technischen Standard zur Qualitäts- und Sicherheitsbewertung von Balkon-Photovoltaik) —, herausgegeben von der Grünen-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai.** Der Standard wurde gemeinsam mit der China Distributed Solar-Storage Brand Alliance, der Shandong Solar Energy Industry Association und dem Ausschuss für neue Energien der Industrieentwicklungs-Forschungsvereinigung der Provinz Henan erarbeitet, wobei Hoymiles (昱能科技) und die Haushaltsmarke von Trina Solar (天合富家, „Trina Household") als federführende Entwurfsunternehmen fungierten. Den politischen Hintergrund bildet Chinas „Dokument Nr. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), wirksam seit 31. Mai 2025, das neue Projekte im Bereich erneuerbarer Energien dazu verpflichtet, in den marktbasierten Handel einzutreten, statt eine garantierte Einspeisevergütung zu erhalten — was die traditionelle Wirtschaftlichkeit von Haushaltssolar untergräbt, die auf dem subventionierten Verkauf von Überschussstrom ans Netz beruhte, und stattdessen einen Marktanreiz für auf Eigenverbrauch ausgerichtete Balkonkraftwerke schafft. [ÜBERPRÜFEN: Schätzung eines einzelnen Unternehmens, nicht unabhängig bestätigt] Die Haushaltsmarke von Trina schätzt rund 1.000 heimische Installationen im Jahr 2024, mit einer Projektion auf 10.000 im Jahr 2025 und potenziell über 100.000 bis 2026.',
    quickAnswerTop: {
      de: {
        question: 'Gibt es in China einen heimischen Balkonkraftwerk-Markt, getrennt von seiner Rolle als Fertigungsstandort?',
        answer: 'Ja — ein heimischer Absatzmarkt entsteht, formalisiert durch Chinas ersten Branchenstandard für Balkonkraftwerke, T/GEA 001-2026, veröffentlicht am 21. Mai 2026 von der Grünen-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai und gemeinsam mit Hoymiles und der Haushaltsmarke von Trina Solar (天合富家) als Kernbeteiligten erarbeitet. Politischer Treiber ist „Dokument Nr. 136", wirksam seit 31. Mai 2025, das neue Projekte im Bereich erneuerbarer Energien in Richtung marktbasierten Handels statt garantierter Einspeisevergütung lenkte — was die Wirtschaftlichkeit des traditionellen, subventionierten Haushaltssolars untergräbt und einen Marktanreiz für Balkonkraftwerke mit Eigenverbrauchsfokus schafft. Schätzungen der Haushaltsmarke von Trina (hier als Projektion eines einzelnen Unternehmens gekennzeichnet, nicht unabhängig bestätigt) deuten auf rund 1.000 heimisch installierte Einheiten im Jahr 2024, ~10.000 Projektion für 2025 und potenziell über 100.000 bis 2026 hin.',
        bullets: [
          'T/GEA 001-2026 („阳台光伏质量与安全评价技术规范"), Chinas erster Branchenstandard für Balkonkraftwerke, veröffentlicht am 21. Mai 2026 von der Grünen-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai',
          'Gemeinsam erarbeitet mit der China Distributed Solar-Storage Brand Alliance, der Shandong Solar Energy Industry Association und dem Ausschuss für neue Energien der Industrieentwicklungs-Forschungsvereinigung der Provinz Henan; Hoymiles und die Haushaltsmarke von Trina Solar (天合富家) waren federführende Entwurfsunternehmen',
          'Politischer Treiber: „Dokument Nr. 136", wirksam seit 31. Mai 2025, verpflichtet neue Projekte im Bereich erneuerbarer Energien zum Eintritt in den marktbasierten Handel statt garantierter Einspeisevergütung — dies untergräbt die Wirtschaftlichkeit subventionierten Haushaltssolars und schafft einen Anreiz für auf Eigenverbrauch ausgerichtete Balkonkraftwerke',
          '[ÜBERPRÜFEN: Schätzung einer einzelnen Quelle, Haushaltsmarke von Trina] ~1.000 heimisch installierte Einheiten 2024, ~10.000 Projektion für 2025, potenziell über 100.000 für 2026 — keine unabhängig bestätigte oder offizielle Zahl',
          'Dies ist ein eigenständiges Thema, getrennt von Chinas Rolle als Fertigungs- und Exportstandort (an anderer Stelle in diesem Themencluster behandelt, z. B. Änderungen bei der Exportsteuerrückerstattung und Section-301-Zölle) — diese Seite behandelt speziell die heimische Marktentwicklung innerhalb Chinas',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Chinas erster Balkonkraftwerk-Standard', anchor: '#first-standard' },
      { label: 'Der politische Treiber: Dokument Nr. 136', anchor: '#document-136' },
      { label: 'Marktgröße: Früh und aus einer einzigen Quelle', anchor: '#market-size' },
      { label: 'Fertigungsstandort vs. heimischer Markt', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'China veröffentlichte am 21. Mai 2026 seinen ersten Branchenstandard für Balkonkraftwerke, T/GEA 001-2026 — herausgegeben von der Grünen-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai.',
          'Zu den federführenden Entwurfsunternehmen zählten Hoymiles (昱能科技) und die Haushaltsmarke von Trina Solar (天合富家, „Trina Household"), zusammen mit drei Branchenverbänden aus den Bereichen dezentrale Solar-Speicher-Systeme und regionale Ausschüsse für neue Energien.',
          '„Dokument Nr. 136", wirksam seit 31. Mai 2025, verpflichtet neue Projekte im Bereich erneuerbarer Energien zum Eintritt in den marktbasierten Handel statt zum Erhalt einer garantierten Einspeisevergütung — dies untergrub die traditionelle Wirtschaftlichkeit subventionierten Haushaltssolars und schuf einen Marktanreiz für Balkonkraftwerke mit Eigenverbrauch.',
          '[ÜBERPRÜFEN: einzelne Quelle] Die Haushaltsmarke von Trina schätzt rund 1.000 heimische Balkonkraftwerk-Installationen 2024, ~10.000 Projektion für 2025 und potenziell über 100.000 bis 2026 — als Unternehmensprojektion zu behandeln, nicht als offizielle oder unabhängig bestätigte Zahl.',
          'WattCycle, ein Hersteller aus Shenzhen, der an anderer Stelle in diesem Themencluster bereits für seine Exportprodukte behandelt wird, bildet eine direkte Verbindung zwischen Chinas Fertigungsbasis und diesem entstehenden heimischen Markt.',
          'Die chinesische Fachpresse rahmt diese Entwicklungskurve ausdrücklich als Nachvollzug von Deutschlands früherer Entwicklung (Deutschlands über 1 Mio. registrierte Anlagen dienen als Referenzwert) — eine Einordnung der Branche, die es zu vermerken gilt, aber keine unabhängig bestätigte Schlussfolgerung.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'Chinas erster Balkonkraftwerk-Standard',
        content: [
          '**Am 21. Mai 2026 veröffentlichte die Grüne-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai T/GEA 001-2026 („阳台光伏质量与安全评价技术规范" — den Technischen Standard zur Qualitäts- und Sicherheitsbewertung von Balkon-Photovoltaik), Chinas ersten Branchenstandard speziell für Balkonkraftwerke.** Als Branchenstandard („T/") und nicht als verpflichtender nationaler Standard legt er Qualitäts- und Sicherheitsbewertungskriterien für die Kategorie fest, statt eine Wattobergrenze oder ein Registrierungsverfahren vorzuschreiben, wie es Deutschlands DIN VDE V 0126-95 oder die 800-Watt-Konvergenz der EU tun — er ist eine technische Qualitätsschwelle, kein rechtlicher Genehmigungsrahmen.',
          'Der Standard wurde gemeinsam mit der China Distributed Solar-Storage Brand Alliance, der Shandong Solar Energy Industry Association und dem Ausschuss für neue Energien der Industrieentwicklungs-Forschungsvereinigung der Provinz Henan erarbeitet. Hoymiles (昱能科技) und die Haushaltsmarke von Trina Solar (天合富家, „Trina Household") wurden als federführende Entwurfsunternehmen benannt — beides etablierte Solar-Hardware-Hersteller mit bestehenden Produktlinien, die für die Qualitäts- und Sicherheitsbewertung von Balkonkraftwerken direkt relevant sind.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'Der politische Treiber: Dokument Nr. 136',
        content: [
          '**Chinas „Dokument Nr. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), wirksam seit 31. Mai 2025, verpflichtet die Stromerzeugung neuer Projekte im Bereich erneuerbarer Energien, in den marktbasierten Handel einzutreten, statt eine garantierte Einspeisevergütung zu erhalten.** Dies ist eine breit angelegte energiepolitische Kurskorrektur, keine speziell auf Balkonkraftwerke zugeschnittene Maßnahme — sie hat jedoch eine direkte Auswirkung auf die Kategorie: Sie untergrub die traditionelle Wirtschaftlichkeit von Haushaltssolar, die auf dem Verkauf von Überschussstrom ans Netz zu einem subventionierten, garantierten Preis beruhte.',
          'Diese Verschiebung schafft einen Marktanreiz für auf Eigenverbrauch ausgerichtete Systeme — Balkonkraftwerke, die typischerweise für den direkten Haushaltsverbrauch statt für die Netzeinspeisung dimensioniert und vermarktet werden, profitieren von einem politischen Umfeld, in dem das alte, subventionsgetriebene Modell nicht mehr gilt. Das Auftauchen von T/GEA 001-2026 rund ein Jahr nach Inkrafttreten von Dokument Nr. 136 passt zu diesem zeitlichen Ablauf, wobei diese Seite dies als kontextuelle Korrelation behandelt, nicht als direkt belegten kausalen Zusammenhang.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'Marktgröße: Früh und aus einer einzigen Quelle',
        content: [
          '**Schätzungen zur Größe von Chinas heimischem Balkonkraftwerk-Markt stammen aus einer einzigen Quelle — der Haushaltsmarke von Trina Solar (天合富家) — und sollten als Unternehmensprojektion behandelt werden, nicht als unabhängig bestätigte oder offizielle Zahl.** Diese Schätzung: rund 1.000 in China installierte Einheiten im Jahr 2024, etwa 10.000 Projektion für 2025 und potenziell über 100.000 für 2026.',
          'Die chinesische Fachpresse rahmt diese Entwicklung ausdrücklich als Nachvollzug von Deutschlands früherer Entwicklungskurve bei Balkonkraftwerken, wobei Deutschlands über 1 Mio. registrierte Anlagen als Referenzwert dafür dienen, wohin sich die Kategorie in China letztlich entwickeln könnte. Diese Einordnung sollte der Quelle zugeschrieben werden, die den Vergleich zieht, und nicht als eigenständige Schlussfolgerung dieser Seite behandelt werden — das tatsächliche Ausmaß und die Entwicklung von Chinas heimischem Markt müssen sich erst noch durch unabhängige Daten bestätigen.',
        ],
        callouts: [
          { type: 'warning', text: '[ÜBERPRÜFEN: Schätzung eines einzelnen Unternehmens] Die Installationszahlen von 1.000 / 10.000 / über 100.000 für 2024-2026 stammen allein von der Haushaltsmarke von Trina — es wurde keine unabhängige oder offizielle Zahl einer nationalen Statistikbehörde gefunden, die dies bestätigt.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'Fertigungsstandort vs. heimischer Markt',
        content: [
          '**Diese Seite behandelt China als heimischen Absatzmarkt — ein eigenständiges Thema, getrennt von Chinas etablierter Rolle als weltweit größter Fertigungs- und Exportstandort für Balkonkraftwerke, der an anderer Stelle in diesem Themencluster behandelt wird.** Die Export-seitige Berichterstattung in diesem Cluster (die Streichung der Exportsteuerrückerstattung 2026, Section-301-Zölle und Marken aus Shenzhen wie Anker, EcoFlow, Zendure, BYD, Growatt und Marstek) betrifft Chinas Fertigungsbasis, die in Märkte wie die USA und die EU verkauft — nicht chinesische Haushalte, die Balkonkraftwerke für den Eigengebrauch kaufen und installieren. Beide Themen hängen zusammen, sind aber getrennt zu betrachten.',
          'Eine direkte Verbindung zwischen beiden: WattCycle, ein Hersteller aus Shenzhen, der an anderer Stelle in diesem Themencluster bereits für seine Exportprodukte referenziert wird, steht an der Schnittstelle zwischen Chinas Fertigungsbasis und diesem entstehenden heimischen Markt — eine echte Verbindung zwischen zwei bereits recherchierten Fakten, nicht bloß ein geografischer Zufall.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Hat China einen Standard für Balkonkraftwerke?', a: 'Ja — T/GEA 001-2026, veröffentlicht am 21. Mai 2026 von der Grünen-Energie-Industrie-Förderungsvereinigung des Bezirks Minhang in Shanghai, ist Chinas erster Branchenstandard speziell für die Qualitäts- und Sicherheitsbewertung von Balkonkraftwerken. Es handelt sich um einen Branchenstandard, nicht um ein verpflichtendes nationales Gesetz mit Wattobergrenze.' },
          { q: 'Wer hat Chinas Balkonkraftwerk-Standard erarbeitet?', a: 'Die China Distributed Solar-Storage Brand Alliance, die Shandong Solar Energy Industry Association und der Ausschuss für neue Energien der Industrieentwicklungs-Forschungsvereinigung der Provinz Henan, mit Hoymiles und der Haushaltsmarke von Trina Solar (天合富家) als federführenden Entwurfsunternehmen.' },
          { q: 'Warum wächst der Markt für Balkonkraftwerke in China jetzt?', a: '„Dokument Nr. 136", wirksam seit 31. Mai 2025, verpflichtet neue Projekte im Bereich erneuerbarer Energien zum Eintritt in den marktbasierten Handel statt zum Erhalt einer garantierten Einspeisevergütung. Das untergrub die traditionelle Wirtschaftlichkeit subventionierten Haushaltssolars, das auf Netzeinspeisung beruhte, und schuf stattdessen einen Marktanreiz für auf Eigenverbrauch ausgerichtete Balkonkraftwerke.' },
          { q: 'Wie groß ist der heimische Balkonkraftwerk-Markt in China?', a: '[ÜBERPRÜFEN: Schätzung einer einzelnen Quelle] Die Haushaltsmarke von Trina Solar schätzt rund 1.000 installierte Einheiten im Jahr 2024, ~10.000 Projektion für 2025 und potenziell über 100.000 bis 2026 — eine Unternehmensprojektion, keine unabhängig bestätigte oder offizielle Zahl.' },
          { q: 'Ist das dasselbe wie Chinas Balkonkraftwerk-Exportgeschäft?', a: 'Nein. Diese Seite behandelt die heimische chinesische Marktentwicklung; Chinas Rolle als dominierender globaler Hersteller und Exporteur von Balkonkraftwerk-Hardware (an anderer Stelle in diesem Themencluster behandelt) ist eine eigenständige, bereits gut etablierte Geschichte.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Balkonkraftwerk-Amortisation: Lohnt es sich?](/de/balcony-solar/balcony-solar-payback-worth-it-2026) — behandelt Chinas Änderungen bei der Exportsteuerrückerstattung, die die Hardwarepreise beeinflussen',
          '[EcoFlow vs. Anker vs. Zendure Balkonkraftwerke](/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — Vergleich der Exportmarken aus Shenzhen',
          '[Ist ein Balkonkraftwerk legal? Ein Länderleitfaden](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechts-Tracker',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-es.png',
    title: 'Energía solar de balcón en China: el mercado interno que emerge detrás del boom exportador (2027)',
    seoTitle: 'Energía solar de balcón en China: el mercado interno que emerge detrás del boom exportador (2027)',
    intro: 'China es el mayor exportador mundial de hardware de energía solar de balcón — pero esta página trata una historia diferente y más reciente: un mercado de adopción interno que está tomando forma dentro de China, formalizado por el primer estándar de la industria de energía solar de balcón del país en mayo de 2026 e impulsado por un cambio de política en 2025 que socavó la economía de la energía solar doméstica tradicional subsidiada por la red.',
    metaDescription: 'China publicó su primer estándar de la industria para energía solar de balcón (T/GEA 001-2026) en mayo de 2026, elaborado junto con la marca doméstica de Hoymiles y Trina. Motor de la política: el Documento N.º 136 (vigente desde el 31 de mayo de 2025) impulsó la energía solar doméstica hacia el autoconsumo. Estimaciones de una sola fuente sitúan las instalaciones internas de 2024 en torno a 1.000 unidades, con una proyección de más de 100.000 para 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Observadores y compradores del mercado de energía solar de balcón que analizan la adopción interna de China, distinta del papel de China como centro de fabricación',
    primaryTerm: 'mercado interno de energía solar de balcón en china',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**China publicó el 21 de mayo de 2026 su primer estándar de la industria específico para energía solar de balcón — T/GEA 001-2026 («阳台光伏质量与安全评价技术规范», el Estándar Técnico de Evaluación de Calidad y Seguridad de la Fotovoltaica de Balcón) —, emitido por la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái.** El estándar se elaboró conjuntamente con la Alianza de Marcas de Solar-Almacenamiento Distribuido de China, la Asociación de la Industria de Energía Solar de Shandong y el Comité de Nuevas Energías de la Asociación de Investigación para el Desarrollo Industrial de la Provincia de Henan, con Hoymiles (昱能科技) y la marca doméstica de Trina Solar (天合富家, "Trina Household") como empresas redactoras principales. El contexto de política es el «Documento N.º 136» de China (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), vigente desde el 31 de mayo de 2025, que exige que los nuevos proyectos de energía renovable vendan su generación mediante comercio basado en el mercado en lugar de recibir una tarifa de alimentación garantizada — lo que socava la economía tradicional de "vender el excedente a la red a cambio de un subsidio" de la energía solar doméstica y abre un argumento de mercado para los sistemas de balcón centrados en el autoconsumo. [VERIFICAR: estimación de una sola empresa, no confirmada de forma independiente] La marca doméstica de Trina estima aproximadamente 1.000 instalaciones internas en 2024, con una proyección de 10.000 en 2025 y potencialmente más de 100.000 para 2026.',
    quickAnswerTop: {
      es: {
        question: '¿Existe un mercado interno de energía solar de balcón en China, separado de su papel como centro de fabricación?',
        answer: 'Sí — está emergiendo un mercado de adopción interno, formalizado por el primer estándar de la industria de energía solar de balcón de China, T/GEA 001-2026, publicado el 21 de mayo de 2026 por la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái y elaborado con Hoymiles y la marca doméstica de Trina Solar (天合富家) como participantes principales. El motor de política es el "Documento N.º 136", vigente desde el 31 de mayo de 2025, que impulsó a los nuevos proyectos de energía renovable hacia el comercio basado en el mercado en lugar de la tarifa de alimentación garantizada — socavando la economía de la energía solar doméstica subsidiada tradicional y creando una oportunidad de mercado para los sistemas de balcón de autoconsumo. Las estimaciones de la marca doméstica de Trina (señaladas aquí como una proyección de una sola empresa, no verificada de forma independiente) sugieren aproximadamente 1.000 unidades instaladas internamente en 2024, ~10.000 proyectadas para 2025 y potencialmente más de 100.000 para 2026.',
        bullets: [
          'T/GEA 001-2026 («阳台光伏质量与安全评价技术规范»), el primer estándar de la industria de China para energía solar de balcón, publicado el 21 de mayo de 2026 por la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái',
          'Elaborado con la Alianza de Marcas de Solar-Almacenamiento Distribuido de China, la Asociación de la Industria de Energía Solar de Shandong y el Comité de Nuevas Energías de la Asociación de Investigación para el Desarrollo Industrial de la Provincia de Henan; Hoymiles y la marca doméstica de Trina Solar (天合富家) fueron empresas redactoras principales',
          'Motor de política: el "Documento N.º 136", vigente desde el 31 de mayo de 2025, exige que los nuevos proyectos renovables entren en el comercio de mercado en lugar de una tarifa de alimentación garantizada — socavando la economía de la energía solar doméstica subsidiada y abriendo una oportunidad para la energía solar de balcón centrada en el autoconsumo',
          '[VERIFICAR: fuente única, estimación de la marca doméstica de Trina] ~1.000 unidades instaladas internamente en 2024, ~10.000 proyectadas para 2025, potencialmente más de 100.000 para 2026 — no es una cifra oficial o confirmada de forma independiente',
          'Este es un tema distinto del papel de China como centro de fabricación y exportación (cubierto en otra parte de este conjunto de artículos, p. ej. los cambios en el reembolso del impuesto a la exportación y los aranceles de la Sección 301) — esta página cubre específicamente la adopción interna dentro de China',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'El primer estándar de energía solar de balcón de China', anchor: '#first-standard' },
      { label: 'El motor de la política: Documento N.º 136', anchor: '#document-136' },
      { label: 'Tamaño del mercado: incipiente y de fuente única', anchor: '#market-size' },
      { label: 'Centro de fabricación frente a mercado interno', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'China publicó su primer estándar de la industria para energía solar de balcón, T/GEA 001-2026, el 21 de mayo de 2026 — emitido por la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái.',
          'Entre las empresas redactoras principales estuvieron Hoymiles (昱能科技) y la marca doméstica de Trina Solar (天合富家, "Trina Household"), junto con tres asociaciones de la industria que abarcan el almacenamiento solar distribuido y comités regionales de nuevas energías.',
          'El "Documento N.º 136", vigente desde el 31 de mayo de 2025, exige que los nuevos proyectos de energía renovable entren en el comercio basado en el mercado en lugar de recibir una tarifa de alimentación garantizada — esto socavó la economía tradicional de la energía solar doméstica subsidiada y creó una oportunidad de mercado para la energía solar de balcón de autoconsumo.',
          '[VERIFICAR: fuente única] La marca doméstica de Trina estima ~1.000 instalaciones internas de energía solar de balcón en 2024, ~10.000 proyectadas para 2025 y potencialmente más de 100.000 para 2026 — trátese como una proyección de la empresa, no como una cifra oficial o confirmada de forma independiente.',
          'WattCycle, un fabricante con sede en Shenzhen ya cubierto en otra parte de este conjunto de artículos por sus productos de exportación, es un vínculo directo entre la base de fabricación de China y este mercado interno emergente.',
          'La prensa comercial china enmarca explícitamente esta curva de adopción como un seguimiento de la trayectoria previa de Alemania (usando el más de 1 millón de sistemas registrados de Alemania como punto de referencia) — un encuadre de la industria que vale la pena señalar, no una conclusión verificada de forma independiente.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'El primer estándar de energía solar de balcón de China',
        content: [
          '**El 21 de mayo de 2026, la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái publicó T/GEA 001-2026 («阳台光伏质量与安全评价技术规范» — el Estándar Técnico de Evaluación de Calidad y Seguridad de la Fotovoltaica de Balcón), el primer estándar de la industria de China específico para energía solar de balcón.** Al ser un estándar de industria ("T/") y no un estándar nacional obligatorio, establece criterios de evaluación de calidad y seguridad para la categoría en lugar de imponer un límite de vatios o un proceso de registro comparable a la norma DIN VDE V 0126-95 de Alemania o la convergencia de 800 W de la UE — es un umbral de calidad técnico, no un marco de permiso legal.',
          'El estándar se elaboró conjuntamente con la Alianza de Marcas de Solar-Almacenamiento Distribuido de China, la Asociación de la Industria de Energía Solar de Shandong y el Comité de Nuevas Energías de la Asociación de Investigación para el Desarrollo Industrial de la Provincia de Henan. Hoymiles (昱能科技) y la marca doméstica de Trina Solar (天合富家, "Trina Household") fueron designadas como empresas redactoras principales — ambas fabricantes consolidados de hardware solar con líneas de productos existentes directamente relevantes para la evaluación de calidad y seguridad de la energía solar de balcón.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'El motor de la política: Documento N.º 136',
        content: [
          '**El "Documento N.º 136" de China (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), vigente desde el 31 de mayo de 2025, exige que la generación de los nuevos proyectos de energía renovable entre en el comercio basado en el mercado en lugar de recibir una tarifa de alimentación garantizada.** Se trata de un cambio de política energética renovable amplio, no de una medida específica para energía solar de balcón — pero tiene un efecto directo sobre la categoría: socavó la economía tradicional de la energía solar doméstica, construida en torno a la venta del excedente de generación a la red a cambio de un precio subsidiado y garantizado.',
          'Ese cambio crea una oportunidad de mercado para los sistemas centrados en el autoconsumo — la energía solar de balcón, que normalmente se dimensiona y comercializa en torno al uso doméstico directo en lugar de la exportación a la red, se beneficia de un entorno de política en el que el antiguo modelo impulsado por subsidios ya no aplica. La aparición de T/GEA 001-2026 aproximadamente un año después de la entrada en vigor del Documento N.º 136 es coherente con este calendario, aunque esta página trata esto como una correlación contextual y no como una afirmación causal directamente respaldada.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'Tamaño del mercado: incipiente y de fuente única',
        content: [
          '**Las estimaciones del tamaño del mercado de adopción interno de energía solar de balcón en China provienen de una sola fuente — la marca doméstica de Trina Solar (天合富家) — y deben tratarse como una proyección de la empresa, no como una cifra oficial o confirmada de forma independiente.** Esa estimación: aproximadamente 1.000 unidades instaladas en China en 2024, alrededor de 10.000 proyectadas para 2025 y potencialmente más de 100.000 para 2026.',
          'La cobertura de la prensa comercial china enmarca explícitamente esta trayectoria como un seguimiento de la curva de adopción de energía solar de balcón previa de Alemania, usando el más de 1 millón de sistemas registrados de Alemania como punto de referencia para hacia dónde podría dirigirse eventualmente la categoría en China. Este encuadre debe atribuirse a la fuente que hace la comparación, no tratarse como una conclusión independiente de esta página — la escala y trayectoria reales del mercado interno de China aún están por confirmarse mediante datos independientes a medida que se desarrolla.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFICAR: estimación de una sola empresa] Las cifras de instalación de 1.000 / 10.000 / más de 100.000 para 2024-2026 provienen únicamente de la marca doméstica de Trina — no se encontró ninguna cifra independiente u oficial de una agencia estadística nacional que lo corrobore.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'Centro de fabricación frente a mercado interno',
        content: [
          '**Esta página cubre a China como mercado de adopción interno — un tema distinto del papel bien establecido de China como el mayor centro de fabricación y exportación de energía solar de balcón del mundo, que se cubre en otra parte de este conjunto de artículos.** La cobertura del lado exportador en este conjunto de artículos (la eliminación del reembolso del impuesto a la exportación en 2026, los aranceles de la Sección 301 y marcas con sede en Shenzhen como Anker, EcoFlow, Zendure, BYD, Growatt y Marstek) concierne a la base de fabricación de China que vende a mercados como EE. UU. y la UE, no a hogares chinos domésticos que compran e instalan energía solar de balcón para su propio uso. Ambas son historias relacionadas pero separadas.',
          'Un vínculo directo entre ambas: WattCycle, un fabricante con sede en Shenzhen ya referenciado en otra parte de este conjunto de artículos por sus productos de exportación, se sitúa en la intersección entre la base de fabricación de China y este mercado interno emergente — una conexión genuina entre dos hechos ya investigados, no solo una coincidencia geográfica.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Tiene China un estándar de energía solar de balcón?', a: 'Sí — T/GEA 001-2026, publicado el 21 de mayo de 2026 por la Asociación para la Promoción del Desarrollo de la Industria de Energía Verde del Distrito de Minhang de Shanghái, es el primer estándar de la industria de China específico para la evaluación de calidad y seguridad de la energía solar de balcón. Es un estándar de industria, no una ley nacional obligatoria con límite de vatios.' },
          { q: '¿Quién elaboró el estándar de energía solar de balcón de China?', a: 'La Alianza de Marcas de Solar-Almacenamiento Distribuido de China, la Asociación de la Industria de Energía Solar de Shandong y el Comité de Nuevas Energías de la Asociación de Investigación para el Desarrollo Industrial de la Provincia de Henan, con Hoymiles y la marca doméstica de Trina Solar (天合富家) como empresas redactoras principales.' },
          { q: '¿Por qué está creciendo ahora la energía solar de balcón en China?', a: 'El "Documento N.º 136", vigente desde el 31 de mayo de 2025, exige que los nuevos proyectos de energía renovable entren en el comercio basado en el mercado en lugar de recibir una tarifa de alimentación garantizada. Esto socavó la economía tradicional de la energía solar doméstica subsidiada, construida en torno a la exportación a la red, abriendo en su lugar una oportunidad de mercado para la energía solar de balcón centrada en el autoconsumo.' },
          { q: '¿Qué tan grande es el mercado interno de energía solar de balcón en China?', a: '[VERIFICAR: estimación de una sola fuente] La marca doméstica de Trina Solar estima aproximadamente 1.000 unidades instaladas en 2024, ~10.000 proyectadas para 2025 y potencialmente más de 100.000 para 2026 — una proyección de la empresa, no una cifra oficial o confirmada de forma independiente.' },
          { q: '¿Es esto lo mismo que el negocio de exportación de energía solar de balcón de China?', a: 'No. Esta página cubre la adopción interna china; el papel de China como fabricante y exportador dominante a nivel mundial de hardware de energía solar de balcón (cubierto en otra parte de este conjunto de artículos) es una historia separada y ya bien establecida.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Amortización de la energía solar de balcón: ¿vale la pena?](/es/balcony-solar/balcony-solar-payback-worth-it-2026) — cubre los cambios de China en el reembolso del impuesto a la exportación que afectan los precios del hardware',
          '[EcoFlow vs. Anker vs. Zendure: energía solar de balcón](/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — comparación de marcas exportadoras con sede en Shenzhen',
          '[¿Es legal la energía solar de balcón? Guía país por país](/es/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-fr.png',
    title: "L'énergie solaire de balcon en Chine : le marché intérieur qui émerge derrière le boom des exportations (2027)",
    seoTitle: "L'énergie solaire de balcon en Chine : le marché intérieur qui émerge derrière le boom des exportations (2027)",
    intro: "La Chine est le premier exportateur mondial de matériel solaire de balcon — mais cette page traite d'une histoire différente et plus récente : un marché d'adoption intérieur qui se dessine en Chine même, formalisé par la première norme sectorielle chinoise pour le solaire de balcon en mai 2026 et porté par un changement de politique en 2025 qui a fragilisé l'économie du solaire résidentiel traditionnel subventionné par le réseau.",
    metaDescription: "La Chine a publié en mai 2026 sa première norme sectorielle pour le solaire de balcon (T/GEA 001-2026), rédigée avec la marque résidentielle de Hoymiles et Trina. Moteur politique : le Document n° 136 (en vigueur depuis le 31 mai 2025) a orienté le solaire résidentiel vers l'autoconsommation. Des estimations d'une source unique situent les installations intérieures de 2024 autour de 1 000 unités, avec une projection à plus de 100 000 d'ici 2026.",
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Observateurs et acheteurs du marché du solaire de balcon suivant l'adoption intérieure en Chine, distincte du rôle de la Chine comme pôle de fabrication",
    primaryTerm: 'marché intérieur du solaire de balcon en chine',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: "**La Chine a publié le 21 mai 2026 sa première norme sectorielle spécifique au solaire de balcon — T/GEA 001-2026 (« 阳台光伏质量与安全评价技术规范 », la Norme technique d'évaluation de la qualité et de la sécurité du photovoltaïque de balcon) —, émise par l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai.** La norme a été rédigée conjointement avec la China Distributed Solar-Storage Brand Alliance, la Shandong Solar Energy Industry Association et le Comité des nouvelles énergies de l'Association de recherche pour le développement industriel de la province du Henan, Hoymiles (昱能科技) et la marque résidentielle de Trina Solar (天合富家, « Trina Household ») figurant parmi les entreprises rédactrices principales. Le contexte politique est le « Document n° 136 » de la Chine (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), en vigueur depuis le 31 mai 2025, qui impose aux nouveaux projets d'énergie renouvelable de vendre leur production via des échanges de marché plutôt que de bénéficier d'un tarif de rachat garanti — ce qui fragilise l'économie traditionnelle du solaire résidentiel fondée sur la revente du surplus au réseau contre une subvention, et ouvre un argument de marché pour les systèmes de balcon axés sur l'autoconsommation. [À VÉRIFIER : estimation d'une seule entreprise, non confirmée de manière indépendante] La marque résidentielle de Trina estime environ 1 000 installations intérieures en 2024, avec une projection de 10 000 en 2025 et potentiellement plus de 100 000 d'ici 2026.",
    quickAnswerTop: {
      fr: {
        question: "Existe-t-il un marché intérieur du solaire de balcon en Chine, distinct de son rôle de pôle de fabrication ?",
        answer: "Oui — un marché d'adoption intérieur émerge, formalisé par la première norme sectorielle chinoise pour le solaire de balcon, T/GEA 001-2026, publiée le 21 mai 2026 par l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai et rédigée avec Hoymiles et la marque résidentielle de Trina Solar (天合富家) comme participants principaux. Le moteur politique est le « Document n° 136 », en vigueur depuis le 31 mai 2025, qui a orienté les nouveaux projets d'énergie renouvelable vers des échanges de marché plutôt qu'un tarif de rachat garanti — fragilisant l'économie du solaire résidentiel subventionné traditionnel et ouvrant une opportunité de marché pour les systèmes de balcon axés sur l'autoconsommation. Les estimations de la marque résidentielle de Trina (signalées ici comme une projection d'une seule entreprise, non vérifiée de manière indépendante) suggèrent environ 1 000 unités installées en Chine en 2024, ~10 000 projetées pour 2025 et potentiellement plus de 100 000 d'ici 2026.",
        bullets: [
          "T/GEA 001-2026 (« 阳台光伏质量与安全评价技术规范 »), première norme sectorielle chinoise pour le solaire de balcon, publiée le 21 mai 2026 par l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai",
          "Rédigée avec la China Distributed Solar-Storage Brand Alliance, la Shandong Solar Energy Industry Association et le Comité des nouvelles énergies de l'Association de recherche pour le développement industriel de la province du Henan ; Hoymiles et la marque résidentielle de Trina Solar (天合富家) étaient des entreprises rédactrices principales",
          "Moteur politique : le « Document n° 136 », en vigueur depuis le 31 mai 2025, impose aux nouveaux projets renouvelables d'entrer sur le marché des échanges plutôt que de bénéficier d'un tarif de rachat garanti — fragilisant l'économie du solaire résidentiel subventionné et ouvrant un argument pour le solaire de balcon axé sur l'autoconsommation",
          "[À VÉRIFIER : source unique, estimation de la marque résidentielle de Trina] ~1 000 unités installées en Chine en 2024, ~10 000 projetées pour 2025, potentiellement plus de 100 000 pour 2026 — un chiffre non officiel et non confirmé de manière indépendante",
          "Ce sujet est distinct du rôle de la Chine comme pôle de fabrication et d'exportation (traité ailleurs dans cet ensemble d'articles, par exemple les modifications du remboursement de la taxe à l'exportation et les tarifs douaniers de la Section 301) — cette page traite spécifiquement de l'adoption intérieure en Chine",
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: "La première norme chinoise du solaire de balcon", anchor: '#first-standard' },
      { label: "Le moteur politique : Document n° 136", anchor: '#document-136' },
      { label: "Taille du marché : précoce et à source unique", anchor: '#market-size' },
      { label: "Pôle de fabrication vs marché intérieur", anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "La Chine a publié sa première norme sectorielle pour le solaire de balcon, T/GEA 001-2026, le 21 mai 2026 — émise par l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai.",
          "Parmi les entreprises rédactrices principales figuraient Hoymiles (昱能科技) et la marque résidentielle de Trina Solar (天合富家, « Trina Household »), aux côtés de trois associations sectorielles couvrant le stockage solaire distribué et des comités régionaux des nouvelles énergies.",
          "Le « Document n° 136 », en vigueur depuis le 31 mai 2025, impose aux nouveaux projets d'énergie renouvelable de vendre via des échanges de marché plutôt que de bénéficier d'un tarif de rachat garanti — ceci a fragilisé l'économie traditionnelle du solaire résidentiel subventionné et créé une opportunité de marché pour le solaire de balcon en autoconsommation.",
          "[À VÉRIFIER : source unique] La marque résidentielle de Trina estime environ 1 000 installations intérieures de solaire de balcon en 2024, ~10 000 projetées pour 2025 et potentiellement plus de 100 000 d'ici 2026 — à considérer comme une projection d'entreprise, non comme un chiffre officiel ou confirmé de manière indépendante.",
          "WattCycle, un fabricant basé à Shenzhen déjà traité ailleurs dans cet ensemble d'articles pour ses produits d'exportation, constitue un lien direct entre la base de fabrication chinoise et ce marché intérieur émergent.",
          "La presse professionnelle chinoise présente explicitement cette courbe d'adoption comme suivant la trajectoire antérieure de l'Allemagne (les plus d'1 million de systèmes enregistrés en Allemagne servant de référence) — un cadrage sectoriel à noter, mais pas une conclusion vérifiée de manière indépendante.",
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: "La première norme chinoise du solaire de balcon",
        content: [
          "**Le 21 mai 2026, l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai a publié T/GEA 001-2026 (« 阳台光伏质量与安全评价技术规范 » — la Norme technique d'évaluation de la qualité et de la sécurité du photovoltaïque de balcon), la première norme sectorielle chinoise spécifique au solaire de balcon.** En tant que norme sectorielle (« T/ ») plutôt que norme nationale obligatoire, elle établit des critères d'évaluation de la qualité et de la sécurité pour la catégorie, sans imposer de plafond de puissance ni de procédure d'enregistrement comparable à la norme allemande DIN VDE V 0126-95 ou à la convergence à 800 W de l'UE — il s'agit d'un seuil de qualité technique, non d'un cadre d'autorisation légale.",
          "La norme a été rédigée conjointement avec la China Distributed Solar-Storage Brand Alliance, la Shandong Solar Energy Industry Association et le Comité des nouvelles énergies de l'Association de recherche pour le développement industriel de la province du Henan. Hoymiles (昱能科技) et la marque résidentielle de Trina Solar (天合富家, « Trina Household ») ont été désignées comme entreprises rédactrices principales — deux fabricants établis de matériel solaire disposant de gammes de produits directement pertinentes pour l'évaluation de la qualité et de la sécurité du solaire de balcon.",
        ],
      },
      document136: {
        id: 'document-136',
        title: "Le moteur politique : Document n° 136",
        content: [
          "**Le « Document n° 136 » de la Chine (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), en vigueur depuis le 31 mai 2025, impose que la production des nouveaux projets d'énergie renouvelable entre sur le marché des échanges plutôt que de bénéficier d'un tarif de rachat garanti.** Il s'agit d'un changement de politique énergétique renouvelable de large portée, non d'une mesure spécifique au solaire de balcon — mais il a un effet direct sur la catégorie : il a fragilisé l'économie traditionnelle du solaire résidentiel, fondée sur la revente du surplus au réseau à un prix subventionné et garanti.",
          "Ce changement crée une opportunité de marché pour les systèmes axés sur l'autoconsommation — le solaire de balcon, généralement dimensionné et commercialisé pour l'usage domestique direct plutôt que l'exportation vers le réseau, bénéficie d'un environnement politique où l'ancien modèle fondé sur les subventions ne s'applique plus. L'apparition de T/GEA 001-2026 environ un an après l'entrée en vigueur du Document n° 136 est cohérente avec ce calendrier, bien que cette page traite cela comme une corrélation contextuelle plutôt que comme une affirmation causale directement établie.",
        ],
      },
      marketSize: {
        id: 'market-size',
        title: "Taille du marché : précoce et à source unique",
        content: [
          "**Les estimations de la taille du marché d'adoption intérieur du solaire de balcon en Chine proviennent d'une source unique — la marque résidentielle de Trina Solar (天合富家) — et doivent être considérées comme une projection d'entreprise, non comme un chiffre officiel ou confirmé de manière indépendante.** Cette estimation : environ 1 000 unités installées en Chine en 2024, environ 10 000 projetées pour 2025 et potentiellement plus de 100 000 pour 2026.",
          "La presse professionnelle chinoise présente explicitement cette trajectoire comme suivant la courbe d'adoption antérieure de l'Allemagne en matière de solaire de balcon, en utilisant les plus d'1 million de systèmes enregistrés en Allemagne comme référence pour l'évolution potentielle de la catégorie en Chine. Ce cadrage doit être attribué à la source qui établit la comparaison, et non traité comme une conclusion indépendante de cette page — l'ampleur et la trajectoire réelles du marché intérieur chinois restent à confirmer par des données indépendantes au fur et à mesure de son développement.",
        ],
        callouts: [
          { type: 'warning', text: "[À VÉRIFIER : estimation d'une seule entreprise] Les chiffres d'installation de 1 000 / 10 000 / plus de 100 000 pour 2024-2026 proviennent uniquement de la marque résidentielle de Trina — aucun chiffre indépendant ou officiel d'une agence statistique nationale n'a été trouvé pour le corroborer." },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: "Pôle de fabrication vs marché intérieur",
        content: [
          "**Cette page traite la Chine comme un marché d'adoption intérieur — un sujet distinct du rôle bien établi de la Chine en tant que premier pôle mondial de fabrication et d'exportation du solaire de balcon, traité ailleurs dans cet ensemble d'articles.** La couverture côté exportation dans cet ensemble d'articles (la suppression du remboursement de la taxe à l'exportation en 2026, les tarifs douaniers de la Section 301 et des marques basées à Shenzhen comme Anker, EcoFlow, Zendure, BYD, Growatt et Marstek) concerne la base de fabrication chinoise vendant vers des marchés comme les États-Unis et l'UE, et non les foyers chinois domestiques achetant et installant du solaire de balcon pour leur propre usage. Les deux sujets sont liés mais distincts.",
          "Un lien direct entre les deux : WattCycle, un fabricant basé à Shenzhen déjà référencé ailleurs dans cet ensemble d'articles pour ses produits d'exportation, se situe à l'intersection de la base de fabrication chinoise et de ce marché intérieur émergent — une connexion réelle entre deux faits déjà documentés, pas une simple coïncidence géographique.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "La Chine dispose-t-elle d'une norme pour le solaire de balcon ?", a: "Oui — T/GEA 001-2026, publiée le 21 mai 2026 par l'Association de promotion du développement de l'industrie des énergies vertes du district de Minhang à Shanghai, est la première norme sectorielle chinoise spécifique à l'évaluation de la qualité et de la sécurité du solaire de balcon. Il s'agit d'une norme sectorielle, non d'une loi nationale obligatoire avec plafond de puissance." },
          { q: "Qui a rédigé la norme chinoise du solaire de balcon ?", a: "La China Distributed Solar-Storage Brand Alliance, la Shandong Solar Energy Industry Association et le Comité des nouvelles énergies de l'Association de recherche pour le développement industriel de la province du Henan, avec Hoymiles et la marque résidentielle de Trina Solar (天合富家) comme entreprises rédactrices principales." },
          { q: "Pourquoi le solaire de balcon se développe-t-il maintenant en Chine ?", a: "Le « Document n° 136 », en vigueur depuis le 31 mai 2025, impose aux nouveaux projets d'énergie renouvelable de vendre via des échanges de marché plutôt que de bénéficier d'un tarif de rachat garanti. Cela a fragilisé l'économie traditionnelle du solaire résidentiel subventionné fondée sur l'exportation vers le réseau, ouvrant à la place une opportunité de marché pour le solaire de balcon axé sur l'autoconsommation." },
          { q: "Quelle est la taille du marché intérieur du solaire de balcon en Chine ?", a: "[À VÉRIFIER : estimation d'une source unique] La marque résidentielle de Trina Solar estime environ 1 000 unités installées en 2024, ~10 000 projetées pour 2025 et potentiellement plus de 100 000 d'ici 2026 — une projection d'entreprise, non un chiffre officiel ou confirmé de manière indépendante." },
          { q: "Est-ce la même chose que l'activité d'exportation du solaire de balcon chinois ?", a: "Non. Cette page traite l'adoption intérieure chinoise ; le rôle de la Chine en tant que fabricant et exportateur mondial dominant de matériel solaire de balcon (traité ailleurs dans cet ensemble d'articles) est une histoire distincte, déjà bien établie." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          "[Rentabilité du solaire de balcon : est-ce rentable ?](/fr/balcony-solar/balcony-solar-payback-worth-it-2026) — traite des changements chinois de remboursement de la taxe à l'exportation affectant les prix du matériel",
          "[EcoFlow vs Anker vs Zendure : solaire de balcon](/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — comparatif des marques exportatrices basées à Shenzhen",
          "[Le solaire de balcon est-il légal ? Guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial",
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-ar.png',
    title: 'الطاقة الشمسية للشرفات في الصين: السوق المحلي الناشئ خلف طفرة التصدير (2027)',
    seoTitle: 'الطاقة الشمسية للشرفات في الصين: السوق المحلي الناشئ خلف طفرة التصدير (2027)',
    intro: 'الصين هي أكبر مُصدِّر في العالم لمعدات الطاقة الشمسية للشرفات — لكن هذه الصفحة تتناول قصة مختلفة وأحدث: سوقًا محليًا للتبني آخذًا في التشكل داخل الصين نفسها، تم إضفاء الطابع الرسمي عليه من خلال أول معيار صناعي صيني للطاقة الشمسية للشرفات في مايو 2026، ومدفوعًا بتحول في السياسات عام 2025 قوّض اقتصاديات الطاقة الشمسية المنزلية التقليدية المدعومة من الشبكة.',
    metaDescription: 'نشرت الصين أول معيار صناعي لها للطاقة الشمسية للشرفات (T/GEA 001-2026) في مايو 2026، تمت صياغته مع العلامة المنزلية لكل من Hoymiles وTrina. محرك السياسة: الوثيقة رقم 136 (سارية المفعول اعتبارًا من 31 مايو 2025) دفعت الطاقة الشمسية المنزلية نحو الاستهلاك الذاتي. تقدّر مصادر أحادية أن التركيبات المحلية في عام 2024 بلغت نحو 1,000 وحدة، مع توقعات تتجاوز 100,000 بحلول عام 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مراقبو ومشترو سوق الطاقة الشمسية للشرفات الذين يتابعون التبني المحلي في الصين، بمعزل عن دور الصين كمركز تصنيع',
    primaryTerm: 'السوق المحلي للطاقة الشمسية للشرفات في الصين',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**نشرت الصين في 21 مايو 2026 أول معيار صناعي مخصص للطاقة الشمسية للشرفات — T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范"، المعيار الفني لتقييم جودة وسلامة الطاقة الشمسية الكهروضوئية للشرفات) — الصادر عن جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي.** تمت صياغة المعيار بالاشتراك مع تحالف علامات التخزين الشمسي الموزّع في الصين (China Distributed Solar-Storage Brand Alliance)، وجمعية صناعة الطاقة الشمسية في شاندونغ، ولجنة الطاقة الجديدة التابعة لجمعية أبحاث تطوير الصناعة في مقاطعة خنان، مع اعتبار Hoymiles (昱能科技) والعلامة المنزلية لشركة Trina Solar (天合富家، "Trina Household") من الشركات الأساسية التي صاغت المعيار. الخلفية السياسية لذلك هي "الوثيقة رقم 136" الصينية (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》)، السارية اعتبارًا من 31 مايو 2025، والتي تُلزم مشاريع الطاقة المتجددة الجديدة ببيع إنتاجها عبر التداول القائم على السوق بدلًا من الحصول على تسعير تغذية مضمون — وهو ما قوّض الاقتصاديات التقليدية لـ"بيع الفائض إلى الشبكة مقابل دعم" الخاصة بالطاقة الشمسية المنزلية، وفتح مبررًا سوقيًا لأنظمة الشرفات التي تركّز على الاستهلاك الذاتي بدلًا من ذلك. [للتحقق: تقدير من شركة واحدة، غير مؤكد بشكل مستقل] تقدّر العلامة المنزلية لشركة Trina نحو 1,000 تركيب محلي في عام 2024، مع توقعات تصل إلى 10,000 في عام 2025 وربما أكثر من 100,000 بحلول عام 2026.',
    quickAnswerTop: {
      ar: {
        question: 'هل يوجد سوق محلي للطاقة الشمسية للشرفات في الصين، منفصل عن دورها كمركز تصنيع؟',
        answer: 'نعم — سوق تبنٍّ محلي آخذ في الظهور، تم إضفاء الطابع الرسمي عليه من خلال أول معيار صناعي صيني للطاقة الشمسية للشرفات، T/GEA 001-2026، الصادر في 21 مايو 2026 عن جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي، والذي تمت صياغته بمشاركة Hoymiles والعلامة المنزلية لشركة Trina Solar (天合富家) كمشاركين أساسيين. محرك السياسة هو "الوثيقة رقم 136"، السارية اعتبارًا من 31 مايو 2025، والتي دفعت مشاريع الطاقة المتجددة الجديدة نحو التداول القائم على السوق بدلًا من تسعير التغذية المضمون — مما قوّض اقتصاديات الطاقة الشمسية المنزلية المدعومة التقليدية وفتح فرصة سوقية لأنظمة الشرفات القائمة على الاستهلاك الذاتي. تشير تقديرات العلامة المنزلية لشركة Trina (المُشار إليها هنا كإسقاط لشركة واحدة، غير مُتحقَّق منه بشكل مستقل) إلى نحو 1,000 وحدة مُركَّبة محليًا في عام 2024، و~10,000 متوقعة لعام 2025، وربما أكثر من 100,000 بحلول عام 2026.',
        bullets: [
          'T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范")، أول معيار صناعي صيني للطاقة الشمسية للشرفات، صادر في 21 مايو 2026 عن جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي',
          'تمت صياغته بالاشتراك مع تحالف علامات التخزين الشمسي الموزّع في الصين، وجمعية صناعة الطاقة الشمسية في شاندونغ، ولجنة الطاقة الجديدة التابعة لجمعية أبحاث تطوير الصناعة في مقاطعة خنان؛ وكانت Hoymiles والعلامة المنزلية لشركة Trina Solar (天合富家) من الشركات الأساسية التي صاغت المعيار',
          'محرك السياسة: "الوثيقة رقم 136"، السارية اعتبارًا من 31 مايو 2025، تُلزم مشاريع الطاقة المتجددة الجديدة بالدخول في التداول السوقي بدلًا من تسعير التغذية المضمون — وهو ما قوّض اقتصاديات الطاقة الشمسية المنزلية المدعومة وفتح فرصة للطاقة الشمسية للشرفات القائمة على الاستهلاك الذاتي',
          '[للتحقق: مصدر واحد، تقدير العلامة المنزلية لشركة Trina] نحو 1,000 وحدة مُركَّبة محليًا في عام 2024، و~10,000 متوقعة لعام 2025، وربما أكثر من 100,000 لعام 2026 — رقم غير رسمي وغير مؤكد بشكل مستقل',
          'هذا موضوع منفصل عن دور الصين كمركز تصنيع وتصدير (تمت تغطيته في مكان آخر من هذه المجموعة، مثل التغييرات في استرداد ضريبة التصدير وتعرفات القسم 301) — تتناول هذه الصفحة تحديدًا التبني المحلي داخل الصين',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'أهم النقاط', anchor: '#key-takeaways' },
      { label: 'أول معيار صيني للطاقة الشمسية للشرفات', anchor: '#first-standard' },
      { label: 'محرك السياسة: الوثيقة رقم 136', anchor: '#document-136' },
      { label: 'حجم السوق: مبكر ومن مصدر واحد', anchor: '#market-size' },
      { label: 'مركز التصنيع مقابل السوق المحلي', anchor: '#hub-vs-domestic' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نشرت الصين أول معيار صناعي لها للطاقة الشمسية للشرفات، T/GEA 001-2026، في 21 مايو 2026 — الصادر عن جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي.',
          'شملت الشركات الأساسية التي صاغت المعيار Hoymiles (昱能科技) والعلامة المنزلية لشركة Trina Solar (天合富家، "Trina Household")، إلى جانب ثلاث جمعيات صناعية تغطي التخزين الشمسي الموزّع ولجان الطاقة الجديدة الإقليمية.',
          '"الوثيقة رقم 136"، السارية اعتبارًا من 31 مايو 2025، تُلزم مشاريع الطاقة المتجددة الجديدة ببيع إنتاجها عبر التداول القائم على السوق بدلًا من الحصول على تسعير تغذية مضمون — وهذا قوّض الاقتصاديات التقليدية للطاقة الشمسية المنزلية المدعومة وخلق فرصة سوقية للطاقة الشمسية للشرفات القائمة على الاستهلاك الذاتي.',
          '[للتحقق: مصدر واحد] تقدّر العلامة المنزلية لشركة Trina نحو 1,000 تركيب محلي للطاقة الشمسية للشرفات في عام 2024، و~10,000 متوقعة لعام 2025، وربما أكثر من 100,000 بحلول عام 2026 — يجب التعامل معها كإسقاط من شركة واحدة، وليست رقمًا رسميًا أو مؤكدًا بشكل مستقل.',
          'تُعد WattCycle، وهي شركة تصنيع مقرها شنتشن سبق تناولها في مكان آخر من هذه المجموعة لمنتجاتها التصديرية، رابطًا مباشرًا بين قاعدة التصنيع الصينية وهذا السوق المحلي الناشئ.',
          'تُؤطر الصحافة التجارية الصينية بشكل صريح منحنى التبني هذا باعتباره تكرارًا لمسار ألمانيا السابق (باستخدام أكثر من مليون نظام مسجل في ألمانيا كمعيار مرجعي) — وهذا تأطير من الصناعة يستحق الملاحظة، وليس استنتاجًا مؤكدًا بشكل مستقل.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'أول معيار صيني للطاقة الشمسية للشرفات',
        content: [
          '**في 21 مايو 2026، نشرت جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي المعيار T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范" — المعيار الفني لتقييم جودة وسلامة الطاقة الشمسية الكهروضوئية للشرفات)، وهو أول معيار صناعي صيني مخصص للطاقة الشمسية للشرفات.** وباعتباره معيارًا صناعيًا ("T/") وليس معيارًا وطنيًا إلزاميًا، فإنه يضع معايير تقييم الجودة والسلامة لهذه الفئة بدلًا من فرض سقف للطاقة أو عملية تسجيل مماثلة لمعيار DIN VDE V 0126-95 الألماني أو تقارب 800 واط في الاتحاد الأوروبي — إنه عتبة جودة فنية، وليس إطار تصريح قانوني.',
          'صيغ المعيار بالاشتراك مع تحالف علامات التخزين الشمسي الموزّع في الصين، وجمعية صناعة الطاقة الشمسية في شاندونغ، ولجنة الطاقة الجديدة التابعة لجمعية أبحاث تطوير الصناعة في مقاطعة خنان. وتم تسمية Hoymiles (昱能科技) والعلامة المنزلية لشركة Trina Solar (天合富家، "Trina Household") كشركتين أساسيتين في الصياغة — وكلتاهما شركتا تصنيع راسختان لمعدات الطاقة الشمسية لديهما خطوط إنتاج قائمة ذات صلة مباشرة بتقييم جودة وسلامة الطاقة الشمسية للشرفات.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'محرك السياسة: الوثيقة رقم 136',
        content: [
          '**تُلزم "الوثيقة رقم 136" الصينية (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》)، السارية اعتبارًا من 31 مايو 2025، إنتاج مشاريع الطاقة المتجددة الجديدة بالدخول في التداول القائم على السوق بدلًا من الحصول على تسعير تغذية مضمون.** هذا تحول واسع في سياسة الطاقة المتجددة، وليس إجراءً خاصًا بالطاقة الشمسية للشرفات — لكن له أثرًا مباشرًا على هذه الفئة: فقد قوّض الاقتصاديات التقليدية للطاقة الشمسية المنزلية المبنية على بيع فائض الإنتاج إلى الشبكة مقابل سعر مدعوم ومضمون.',
          'يخلق هذا التحول فرصة سوقية للأنظمة التي تركّز على الاستهلاك الذاتي — فالطاقة الشمسية للشرفات، التي عادةً ما يتم تحديد حجمها وتسويقها حول الاستخدام المنزلي المباشر بدلًا من التصدير إلى الشبكة، تستفيد من بيئة سياسية لم يعد فيها النموذج القديم القائم على الدعم ساريًا. يتوافق ظهور T/GEA 001-2026 بعد نحو عام من دخول الوثيقة رقم 136 حيز التنفيذ مع هذا التوقيت، رغم أن هذه الصفحة تتعامل مع ذلك كارتباط سياقي وليس كادعاء سببي مُثبت بشكل مباشر.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'حجم السوق: مبكر ومن مصدر واحد',
        content: [
          '**تأتي تقديرات حجم السوق المحلي للطاقة الشمسية للشرفات في الصين من مصدر واحد — العلامة المنزلية لشركة Trina Solar (天合富家) — ويجب التعامل معها كإسقاط من شركة واحدة، وليست رقمًا رسميًا أو مؤكدًا بشكل مستقل.** هذا التقدير: نحو 1,000 وحدة مُركَّبة في الصين في عام 2024، وحوالي 10,000 متوقعة لعام 2025، وربما أكثر من 100,000 لعام 2026.',
          'تُؤطر تغطية الصحافة التجارية الصينية هذا المسار بشكل صريح باعتباره تكرارًا لمنحنى تبني الطاقة الشمسية للشرفات السابق في ألمانيا، مستخدمةً أكثر من مليون نظام مسجل في ألمانيا كمعيار مرجعي لما قد تؤول إليه هذه الفئة في الصين في نهاية المطاف. يجب أن يُنسب هذا التأطير إلى المصدر الذي يجري المقارنة، وألا يُعامل كاستنتاج مستقل لهذه الصفحة — فالحجم الفعلي ومسار السوق المحلي في الصين لا يزالان بحاجة إلى تأكيد ببيانات مستقلة مع تطورهما.',
        ],
        callouts: [
          { type: 'warning', text: '[للتحقق: تقدير من شركة واحدة] أرقام التركيب البالغة 1,000 / 10,000 / أكثر من 100,000 للفترة 2024-2026 تأتي من العلامة المنزلية لشركة Trina وحدها — ولم يُعثر على أي رقم مستقل أو رسمي من وكالة إحصاء وطنية يؤكد ذلك.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'مركز التصنيع مقابل السوق المحلي',
        content: [
          '**تتناول هذه الصفحة الصين كسوق تبنٍّ محلي — وهو موضوع منفصل عن دور الصين الراسخ كأكبر مركز تصنيع وتصدير في العالم للطاقة الشمسية للشرفات، والذي تمت تغطيته في مكان آخر من هذه المجموعة.** تتعلق التغطية الخاصة بالتصدير في هذه المجموعة (إلغاء استرداد ضريبة التصدير في عام 2026، وتعرفات القسم 301، والعلامات التجارية التي مقرها شنتشن مثل Anker وEcoFlow وZendure وBYD وGrowatt وMarstek) بقاعدة التصنيع الصينية التي تبيع لأسواق مثل الولايات المتحدة والاتحاد الأوروبي، وليس بالأسر الصينية المحلية التي تشتري وتركّب الطاقة الشمسية للشرفات لاستخدامها الخاص. القصتان مرتبطتان لكنهما منفصلتان.',
          'إحدى الروابط المباشرة بينهما: WattCycle، وهي شركة تصنيع مقرها شنتشن سبق الإشارة إليها في مكان آخر من هذه المجموعة بخصوص منتجاتها التصديرية، تقع عند تقاطع قاعدة التصنيع الصينية وهذا السوق المحلي الناشئ — وهو ارتباط حقيقي بين حقيقتين تم بحثهما بالفعل، وليس مجرد تزامن جغرافي.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل لدى الصين معيار للطاقة الشمسية للشرفات؟', a: 'نعم — T/GEA 001-2026، الصادر في 21 مايو 2026 عن جمعية تعزيز تطوير صناعة الطاقة الخضراء بمقاطعة مينهانغ في شنغهاي، هو أول معيار صناعي صيني مخصص لتقييم جودة وسلامة الطاقة الشمسية للشرفات. وهو معيار صناعي، وليس قانونًا وطنيًا إلزاميًا بسقف طاقة.' },
          { q: 'من صاغ معيار الطاقة الشمسية للشرفات في الصين؟', a: 'تحالف علامات التخزين الشمسي الموزّع في الصين، وجمعية صناعة الطاقة الشمسية في شاندونغ، ولجنة الطاقة الجديدة التابعة لجمعية أبحاث تطوير الصناعة في مقاطعة خنان، مع Hoymiles والعلامة المنزلية لشركة Trina Solar (天合富家) كشركتين أساسيتين في الصياغة.' },
          { q: 'لماذا تنمو الطاقة الشمسية للشرفات في الصين الآن؟', a: '"الوثيقة رقم 136"، السارية اعتبارًا من 31 مايو 2025، تُلزم مشاريع الطاقة المتجددة الجديدة ببيع إنتاجها عبر التداول القائم على السوق بدلًا من الحصول على تسعير تغذية مضمون. وقد قوّض هذا الاقتصاديات التقليدية للطاقة الشمسية المنزلية المدعومة المبنية على التصدير إلى الشبكة، وفتح بدلًا من ذلك فرصة سوقية للطاقة الشمسية للشرفات القائمة على الاستهلاك الذاتي.' },
          { q: 'ما حجم السوق المحلي للطاقة الشمسية للشرفات في الصين؟', a: '[للتحقق: تقدير من مصدر واحد] تقدّر العلامة المنزلية لشركة Trina Solar نحو 1,000 وحدة مُركَّبة في عام 2024، و~10,000 متوقعة لعام 2025، وربما أكثر من 100,000 بحلول عام 2026 — وهو إسقاط من شركة واحدة، وليس رقمًا رسميًا أو مؤكدًا بشكل مستقل.' },
          { q: 'هل هذا هو نفسه نشاط تصدير الطاقة الشمسية للشرفات الصيني؟', a: 'لا. تتناول هذه الصفحة التبني المحلي الصيني؛ أما دور الصين كمُصنّع ومُصدّر عالمي مهيمن لمعدات الطاقة الشمسية للشرفات (الذي تمت تغطيته في مكان آخر من هذه المجموعة) فهو قصة منفصلة وراسخة بالفعل.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[عائد الاستثمار في الطاقة الشمسية للشرفات: هل يستحق العناء؟](/ar/balcony-solar/balcony-solar-payback-worth-it-2026) — يتناول تغييرات استرداد ضريبة التصدير الصينية المؤثرة على أسعار المعدات',
          '[EcoFlow مقابل Anker مقابل Zendure للطاقة الشمسية للشرفات](/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — مقارنة بين العلامات التجارية المُصدِّرة التي مقرها شنتشن',
          '[هل الطاقة الشمسية للشرفات قانونية؟ دليل حسب كل دولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — متتبّع قانوني عالمي',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-ja.png',
    title: '中国のバルコニー太陽光発電：輸出ブームの裏で台頭する国内市場（2027年）',
    seoTitle: '中国のバルコニー太陽光発電：輸出ブームの裏で台頭する国内市場（2027年）',
    intro: '中国はバルコニー太陽光発電機器の世界最大の輸出国です。しかし、このページが取り上げるのは別の、より新しい話です。中国国内で形成されつつある国内導入市場について解説します。この市場は、2026年5月に発表された同国初のバルコニー太陽光発電業界規格によって制度化され、2025年の政策転換によって後押しされました。この政策転換は、従来の系統連系型・補助金依存の家庭用太陽光発電の経済性を弱めるものでした。',
    metaDescription: '中国は2026年5月、初のバルコニー太陽光発電業界規格（T/GEA 001-2026）を発表しました。この規格はHoymilesとTrinaの家庭用ブランドとともに策定されました。政策的な原動力は、2025年5月31日に発効した「136号文件」で、家庭用太陽光発電を自家消費へと転換させました。単一情報源の推計によれば、2024年の国内設置数は約1,000台で、2026年には10万台以上に達すると予測されています。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: '中国の製造拠点としての役割とは別に、中国国内での導入状況を注視するバルコニー太陽光発電市場の観測者・購入検討者',
    primaryTerm: '中国 バルコニー太陽光発電 国内市場',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**中国は2026年5月21日、バルコニー太陽光発電に特化した初の業界規格「T/GEA 001-2026」（「阳台光伏质量与安全评价技术规范」、バルコニーPVの品質・安全性評価技術規範）を発表しました。この規格は、上海市閔行区グリーンエネルギー産業発展促進協会によって公布されました。** 規格は、中国分散型ソーラー・蓄電ブランド連盟、山東省太陽エネルギー産業協会、河南省産業発展研究協会新エネルギー委員会と共同で策定され、Hoymiles（昱能科技）とTrina Solarの住宅用ブランドである天合富家（Trina Household）が中核的な起草企業として参加しました。この政策的背景にあるのが、中国の「136号文件」（国家発展改革委員会・国家エネルギー局『新エネルギーの系統価格の市場化改革を深化させ、新エネルギーの高品質な発展を促進することに関する通知』）です。この文件は2025年5月31日に発効し、新規再生可能エネルギープロジェクトに対し、保証された固定価格買取ではなく市場ベースの取引への参入を求めるものです。これにより、余剰発電を補助金付きの保証価格で系統に売電するという従来の家庭用太陽光発電の経済性が弱まり、代わりに自家消費に重点を置いたバルコニー太陽光発電システムに市場機会が生まれました。[要検証：単一企業による推計であり、独立した確認は取れていません] Trinaの住宅用ブランドの推計では、2024年の国内設置数はおよそ1,000台、2025年には約1万台、2026年には10万台以上に達する可能性があるとされています。',
    quickAnswerTop: {
      ja: {
        question: '中国には、製造拠点としての役割とは別に国内のバルコニー太陽光発電市場が存在するのでしょうか。',
        answer: 'はい。国内導入市場が台頭しつつあり、これは2026年5月21日に上海市閔行区グリーンエネルギー産業発展促進協会が発表した中国初のバルコニー太陽光発電業界規格「T/GEA 001-2026」によって制度化されています。この規格は、Hoymilesとトリナ・ソーラーの住宅用ブランドである天合富家を中核参加企業として策定されました。政策的な原動力は2025年5月31日に発効した「136号文件」で、新規再生可能エネルギープロジェクトを保証された固定価格買取ではなく市場ベースの取引へと転換させ、従来の補助金依存型家庭用太陽光発電の経済性を弱め、自家消費型バルコニー太陽光発電に市場機会をもたらしました。トリナの住宅用ブランドの推計（ここでは単一企業による予測であり、独立した検証は取れていない点を明記します）では、2024年に国内でおよそ1,000台が設置され、2025年には約1万台、2026年には10万台以上に達する可能性があるとされています。',
        bullets: [
          'T/GEA 001-2026（「阳台光伏质量与安全评价技术规范」）は中国初のバルコニー太陽光発電業界規格で、2026年5月21日に上海市閔行区グリーンエネルギー産業発展促進協会が発表しました。',
          '中国分散型ソーラー・蓄電ブランド連盟、山東省太陽エネルギー産業協会、河南省産業発展研究協会新エネルギー委員会と共同で策定され、Hoymilesとトリナ・ソーラーの住宅用ブランドである天合富家が中核的な起草企業でした。',
          '政策的な原動力：2025年5月31日に発効した「136号文件」は、新規再生可能エネルギープロジェクトに保証された固定価格買取ではなく市場取引への参入を求めており、補助金依存型家庭用太陽光発電の経済性を弱め、自家消費に重点を置いたバルコニー太陽光発電に市場機会を生み出しました。',
          '[要検証：単一情報源、トリナ住宅用ブランドによる推計] 2024年の国内設置台数は約1,000台、2025年は約1万台、2026年には10万台以上に達する可能性がある——これは公式または独立して確認された数字ではありません。',
          'この話題は、中国の製造・輸出拠点としての役割（本クラスター内の他の記事で扱う輸出税還付の変更やセクション301関税など）とは異なる、独立したテーマです。本ページは中国国内での導入に特化して解説します。',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '中国初のバルコニー太陽光発電規格', anchor: '#first-standard' },
      { label: '政策的な原動力：136号文件', anchor: '#document-136' },
      { label: '市場規模：初期段階かつ単一情報源', anchor: '#market-size' },
      { label: '製造拠点と国内市場の違い', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '中国は2026年5月21日、初のバルコニー太陽光発電業界規格「T/GEA 001-2026」を発表しました。発行元は上海市閔行区グリーンエネルギー産業発展促進協会です。',
          '中核的な起草企業には、Hoymiles（昱能科技）とトリナ・ソーラーの住宅用ブランドである天合富家（Trina Household）が含まれ、分散型ソーラー・蓄電と地域の新エネルギー委員会にまたがる3つの業界団体が参加しました。',
          '2025年5月31日に発効した「136号文件」は、新規再生可能エネルギープロジェクトに保証された固定価格買取ではなく市場ベースの取引への参入を求めています。これにより従来の補助金依存型家庭用太陽光発電の経済性が弱まり、自家消費型バルコニー太陽光発電に市場機会が生まれました。',
          '[要検証：単一情報源] トリナの住宅用ブランドは、2024年の国内バルコニー太陽光発電設置数を約1,000台、2025年は約1万台、2026年には10万台以上と推計しています——これは企業予測であり、公式または独立して確認された数字として扱うべきではありません。',
          '中国のバルコニー太陽光発電輸出製品として本クラスターの他記事ですでに扱っている深圳の製造企業WattCycleは、中国の製造基盤とこの新興国内市場を直接つなぐ存在です。',
          '中国の業界紙は、この導入曲線をドイツの先行事例（登録済みシステム100万台超を参照基準とする）をなぞるものと明確に位置づけています——これは業界による位置づけであり、独立して検証された結論ではない点に留意すべきです。',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: '中国初のバルコニー太陽光発電規格',
        content: [
          '**2026年5月21日、上海市閔行区グリーンエネルギー産業発展促進協会は、中国初のバルコニー太陽光発電専用業界規格であるT/GEA 001-2026（「阳台光伏质量与安全评价技术规范」——バルコニーPVの品質・安全性評価技術規範）を発表しました。** 国家強制規格ではなく業界規格（「T/」）であるため、ドイツのDIN VDE V 0126-95やEUの800Wへの収束のようなワット数上限や登録手続きを課すものではなく、このカテゴリーの品質・安全性評価基準を定めるものです。つまり、法的な許可の枠組みではなく、技術的な品質基準です。',
          'この規格は、中国分散型ソーラー・蓄電ブランド連盟、山東省太陽エネルギー産業協会、河南省産業発展研究協会新エネルギー委員会と共同で策定されました。Hoymiles（昱能科技）とトリナ・ソーラーの住宅用ブランドである天合富家（Trina Household）が中核的な起草企業として指名されました。いずれも既存の製品ラインを持つ確立された太陽光発電機器メーカーであり、バルコニー太陽光発電の品質・安全性評価に直接関連しています。',
        ],
      },
      document136: {
        id: 'document-136',
        title: '政策的な原動力：136号文件',
        content: [
          '**中国の「136号文件」（国家発展改革委員会・国家エネルギー局『新エネルギーの系統価格の市場化改革を深化させ、新エネルギーの高品質な発展を促進することに関する通知』）は、2025年5月31日に発効し、新規再生可能エネルギープロジェクトの発電を、保証された固定価格買取ではなく市場ベースの取引に参入させることを求めています。** これは幅広い再生可能エネルギー政策の転換であり、バルコニー太陽光発電に特化した措置ではありません。しかし、このカテゴリーに直接的な波及効果をもたらしました。すなわち、補助金付きの保証価格で余剰発電を系統に売電するという、家庭用太陽光発電の従来型の経済性を弱めたのです。',
          'この転換は、自家消費に重点を置いたシステムに市場機会を生み出します。バルコニー太陽光発電は通常、系統への売電ではなく家庭での直接使用を前提に規模設定・販売されるため、従来の補助金依存型モデルがもはや適用されない政策環境の恩恵を受けます。136号文件の発効からおよそ1年後にT/GEA 001-2026が登場したことは、この時系列と整合していますが、本ページではこれを直接的な因果関係の主張としてではなく、文脈上の相関関係として扱います。',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: '市場規模：初期段階かつ単一情報源',
        content: [
          '**中国の国内バルコニー太陽光発電導入の市場規模に関する推計は、トリナ・ソーラーの住宅用ブランド（天合富家）という単一の情報源によるものであり、公式または独立して確認された数字ではなく、企業予測として扱うべきです。** その推計は、2024年に中国国内で約1,000台が設置され、2025年には約1万台、2026年には10万台以上に達する可能性があるというものです。',
          '中国の業界紙報道は、この推移を明確に、ドイツの先行するバルコニー太陽光発電導入曲線をなぞるものと位置づけており、ドイツの登録済みシステム100万台超を、中国でこのカテゴリーが将来的に到達しうる水準の参照基準として用いています。この位置づけは、比較を行った情報源に帰属させるべきであり、本ページ独自の結論として扱うべきではありません。中国国内市場の実際の規模と推移は、今後の展開に伴い独立したデータによる確認が待たれます。',
        ],
        callouts: [
          { type: 'warning', text: '[要検証：単一企業による推計] 2024年から2026年にかけての1,000台・1万台・10万台超という設置台数は、トリナの住宅用ブランドのみに由来する数字です。これを裏付ける独立した、あるいは公式な国家統計機関の数字は見つかっていません。' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: '製造拠点と国内市場の違い',
        content: [
          '**本ページは中国を国内導入市場として扱いますが、これは、本クラスターの他記事で扱う、世界最大のバルコニー太陽光発電の製造・輸出拠点としての中国という既に確立された役割とは異なる独立したテーマです。** 本クラスター内の輸出側の記述（2026年の輸出税還付廃止、セクション301関税、Anker、EcoFlow、Zendure、BYD、Growatt、Marstekといった深圳拠点のブランド）は、米国やEUといった市場に向けて販売する中国の製造基盤に関するものであり、自宅で使用するためにバルコニー太陽光発電を購入・設置する中国国内の家庭に関するものではありません。両者は関連していますが、別々の話です。',
          '両者を直接結ぶ一例として、本クラスターの他記事ですでに輸出製品として取り上げている深圳拠点の製造企業WattCycleが挙げられます。同社は中国の製造基盤とこの新興国内市場の接点に位置しており、単なる地理的な偶然ではなく、すでに調査済みの2つの事実の間にある実質的なつながりです。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '中国にはバルコニー太陽光発電の規格がありますか。', a: 'はい。2026年5月21日に上海市閔行区グリーンエネルギー産業発展促進協会が発表したT/GEA 001-2026は、バルコニー太陽光発電の品質・安全性評価に特化した中国初の業界規格です。これは業界規格であり、ワット数上限を伴う国家強制法ではありません。' },
          { q: '中国のバルコニー太陽光発電規格は誰が策定しましたか。', a: '中国分散型ソーラー・蓄電ブランド連盟、山東省太陽エネルギー産業協会、河南省産業発展研究協会新エネルギー委員会が策定し、Hoymilesとトリナ・ソーラーの住宅用ブランドである天合富家が中核的な起草企業として参加しました。' },
          { q: 'なぜ今、中国でバルコニー太陽光発電が拡大しているのですか。', a: '2025年5月31日に発効した「136号文件」は、新規再生可能エネルギープロジェクトに保証された固定価格買取ではなく市場取引への参入を求めています。これにより、系統への売電を前提とした補助金依存型の家庭用太陽光発電の従来型経済性が弱まり、代わりに自家消費型のバルコニー太陽光発電に市場機会が生まれました。' },
          { q: '中国国内のバルコニー太陽光発電市場の規模はどのくらいですか。', a: '[要検証：単一情報源による推計] トリナ・ソーラーの住宅用ブランドは、2024年の設置台数を約1,000台、2025年を約1万台、2026年には10万台以上と推計しています。これは企業予測であり、公式または独立して確認された数字ではありません。' },
          { q: 'これは中国のバルコニー太陽光発電輸出事業と同じものですか。', a: 'いいえ。本ページは中国国内での導入について扱っています。中国が世界最大のバルコニー太陽光発電機器の製造・輸出国であるという役割（本クラスターの他記事で扱う）は、すでに確立された別の話です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[バルコニー太陽光発電の投資回収：元は取れるのか](/ja/balcony-solar/balcony-solar-payback-worth-it-2026) — ハードウェア価格に影響する中国の輸出税還付の変更を解説',
          '[EcoFlow対Anker対Zendure バルコニー太陽光発電比較](/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — 深圳拠点の輸出ブランド比較',
          '[バルコニー太陽光発電は合法か：国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — 世界の法規制トラッカー',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-ko.png',
    title: '중국 발코니 태양광: 수출 붐 이면에서 부상하는 내수 시장 (2027년)',
    seoTitle: '중국 발코니 태양광: 수출 붐 이면에서 부상하는 내수 시장 (2027년)',
    intro: '중국은 세계 최대의 발코니 태양광 장비 수출국입니다. 그러나 이 페이지에서는 다른, 더 새로운 이야기를 다룹니다. 바로 중국 내부에서 형성되고 있는 내수 도입 시장입니다. 이 시장은 2026년 5월에 발표된 중국 최초의 발코니 태양광 산업 표준으로 제도화되었으며, 전통적인 계통 보조금 기반 가정용 태양광의 경제성을 약화시킨 2025년 정책 전환에 의해 촉진되었습니다.',
    metaDescription: '중국은 2026년 5월 최초의 발코니 태양광 산업 표준(T/GEA 001-2026)을 발표했습니다. 이 표준은 Hoymiles와 Trina의 가정용 브랜드와 함께 작성되었습니다. 정책적 동인은 2025년 5월 31일 발효된 136호 문건으로, 가정용 태양광을 자가소비 쪽으로 유도했습니다. 단일 출처 추정에 따르면 2024년 국내 설치량은 약 1,000대이며, 2026년까지 10만 대 이상으로 늘어날 것으로 전망됩니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '중국의 제조 허브로서의 역할과는 별개로, 중국 내수 시장 도입 상황을 주시하는 발코니 태양광 시장 관찰자 및 구매자',
    primaryTerm: '중국 발코니 태양광 내수 시장',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**중국은 2026년 5월 21일, 발코니 태양광에 특화된 최초의 산업 표준인 T/GEA 001-2026(「阳台光伏质量与安全评价技术规范」, 발코니 PV 품질·안전성 평가 기술 규범)을 발표했습니다. 이는 상하이시 민항구 그린에너지산업발전촉진협회가 발간했습니다.** 이 표준은 중국 분산형 태양광-저장 브랜드 연합(China Distributed Solar-Storage Brand Alliance), 산둥성 태양에너지산업협회, 허난성 산업발전연구협회 신에너지위원회와 공동으로 작성되었으며, Hoymiles(昱能科技)와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家, "Trina Household")가 핵심 초안 작성 기업으로 참여했습니다. 이 정책적 배경은 중국의 「136호 문건」(国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》)으로, 2025년 5월 31일부터 발효되어 신규 재생에너지 프로젝트가 보장된 발전차액지원 대신 시장 기반 거래에 참여하도록 요구합니다 — 이는 잉여 발전량을 보조금이 지원되는 가격으로 계통에 판매하는 가정용 태양광의 전통적 경제성을 약화시켰으며, 대신 자가소비 중심의 발코니 태양광 시스템에 시장 기회를 열어주었습니다. [검증 필요: 단일 기업의 추정치이며 독립적으로 확인되지 않음] Trina의 가정용 브랜드는 2024년 국내 설치량을 약 1,000대로 추정하며, 2025년에는 약 1만 대, 2026년까지 10만 대 이상에 이를 수 있다고 전망합니다.',
    quickAnswerTop: {
      ko: {
        question: '중국의 제조 허브로서의 역할과는 별개로, 중국 내에 발코니 태양광 내수 시장이 존재합니까?',
        answer: '그렇습니다 — 내수 도입 시장이 부상하고 있으며, 이는 2026년 5월 21일 상하이시 민항구 그린에너지산업발전촉진협회가 발표한 중국 최초의 발코니 태양광 산업 표준 T/GEA 001-2026으로 제도화되었습니다. 이 표준은 Hoymiles와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家)를 핵심 참여 기업으로 하여 작성되었습니다. 정책적 동인은 2025년 5월 31일 발효된 「136호 문건」으로, 신규 재생에너지 프로젝트를 보장된 발전차액지원 대신 시장 기반 거래로 전환시켰으며, 이는 전통적인 보조금 기반 가정용 태양광의 경제성을 약화시키고 자가소비형 발코니 태양광 시스템에 시장 기회를 만들었습니다. Trina의 가정용 브랜드 추정치(여기서는 단일 기업의 전망으로 명시하며, 독립적으로 검증되지 않았습니다)에 따르면 2024년 국내 설치량은 약 1,000대, 2025년 전망치는 약 1만 대, 2026년에는 10만 대 이상에 이를 수 있습니다.',
        bullets: [
          'T/GEA 001-2026(「阳台光伏质量与安全评价技术规范」)은 중국 최초의 발코니 태양광 산업 표준으로, 2026년 5월 21일 상하이시 민항구 그린에너지산업발전촉진협회가 발표했습니다.',
          '중국 분산형 태양광-저장 브랜드 연합, 산둥성 태양에너지산업협회, 허난성 산업발전연구협회 신에너지위원회와 공동으로 작성되었으며, Hoymiles와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家)가 핵심 초안 작성 기업이었습니다.',
          '정책적 동인: 2025년 5월 31일 발효된 「136호 문건」은 신규 재생에너지 프로젝트가 보장된 발전차액지원 대신 시장 거래에 참여하도록 요구하며 — 이는 보조금 기반 가정용 태양광의 경제성을 약화시키고 자가소비 중심의 발코니 태양광에 시장 기회를 열어주었습니다.',
          '[검증 필요: 단일 출처, Trina 가정용 브랜드 추정치] 2024년 국내 설치량 약 1,000대, 2025년 전망 약 1만 대, 2026년에는 10만 대 이상 가능성 — 공식적이거나 독립적으로 확인된 수치가 아닙니다.',
          '이는 중국의 제조·수출 허브로서의 역할(이 클러스터 내 다른 문서에서 다루는 수출세 환급 변경 및 301조 관세 등)과는 별개의 주제입니다 — 이 페이지는 중국 내부의 내수 도입에 특화하여 다룹니다.',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '중국 최초의 발코니 태양광 표준', anchor: '#first-standard' },
      { label: '정책적 동인: 136호 문건', anchor: '#document-136' },
      { label: '시장 규모: 초기 단계이며 단일 출처', anchor: '#market-size' },
      { label: '제조 허브 대 내수 시장', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '중국은 2026년 5월 21일 최초의 발코니 태양광 산업 표준인 T/GEA 001-2026을 발표했습니다 — 발간 기관은 상하이시 민항구 그린에너지산업발전촉진협회입니다.',
          '핵심 초안 작성 기업에는 Hoymiles(昱能科技)와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家, "Trina Household")가 포함되었으며, 분산형 태양광-저장 및 지역 신에너지위원회를 아우르는 3개 업계 협회가 참여했습니다.',
          '2025년 5월 31일 발효된 「136호 문건」은 신규 재생에너지 프로젝트가 보장된 발전차액지원 대신 시장 기반 거래에 참여하도록 요구합니다 — 이는 전통적인 보조금 기반 가정용 태양광의 경제성을 약화시켰고, 자가소비형 발코니 태양광에 시장 기회를 만들었습니다.',
          '[검증 필요: 단일 출처] Trina의 가정용 브랜드는 2024년 국내 발코니 태양광 설치량을 약 1,000대, 2025년 전망을 약 1만 대, 2026년에는 10만 대 이상으로 추정합니다 — 이는 기업의 전망치로 다루어야 하며, 공식적이거나 독립적으로 확인된 수치가 아닙니다.',
          '이 클러스터의 다른 문서에서 수출 제품으로 이미 다룬 선전(Shenzhen) 소재 제조업체 WattCycle은 중국의 제조 기반과 이 신흥 내수 시장을 직접 연결하는 고리입니다.',
          '중국 무역 언론은 이러한 도입 곡선을 독일의 앞선 궤적(독일의 100만 대 이상 등록 시스템을 기준점으로 사용)을 따르는 것으로 명확히 규정하고 있습니다 — 이는 업계의 프레이밍으로 주목할 가치는 있으나, 독립적으로 검증된 결론은 아닙니다.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: '중국 최초의 발코니 태양광 표준',
        content: [
          '**2026년 5월 21일, 상하이시 민항구 그린에너지산업발전촉진협회는 중국 최초의 발코니 태양광 전용 산업 표준인 T/GEA 001-2026(「阳台光伏质量与安全评价技术规范」 — 발코니 PV 품질·안전성 평가 기술 규범)을 발표했습니다.** 국가 의무 표준이 아닌 산업("T/") 표준이므로, 독일의 DIN VDE V 0126-95나 EU의 800W 수렴에 상응하는 와트수 상한이나 등록 절차를 부과하는 대신, 이 카테고리에 대한 품질·안전성 평가 기준을 수립합니다 — 이는 법적 허가 체계가 아니라 기술적 품질 기준입니다.',
          '이 표준은 중국 분산형 태양광-저장 브랜드 연합, 산둥성 태양에너지산업협회, 허난성 산업발전연구협회 신에너지위원회와 공동으로 작성되었습니다. Hoymiles(昱能科技)와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家, "Trina Household")가 핵심 초안 작성 기업으로 지정되었습니다 — 두 회사 모두 발코니 태양광의 품질·안전성 평가와 직접 관련된 기존 제품 라인을 보유한 확립된 태양광 장비 제조업체입니다.',
        ],
      },
      document136: {
        id: 'document-136',
        title: '정책적 동인: 136호 문건',
        content: [
          '**중국의 「136호 문건」(国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》)은 2025년 5월 31일부터 발효되어, 신규 재생에너지 프로젝트의 발전량이 보장된 발전차액지원 대신 시장 기반 거래에 참여하도록 요구합니다.** 이는 발코니 태양광에 특화된 조치가 아니라 광범위한 재생에너지 정책 전환이지만, 이 카테고리에 직접적인 파급 효과를 미쳤습니다. 즉, 보조금이 지원되는 보장 가격으로 잉여 발전량을 계통에 판매하는 가정용 태양광의 전통적 경제성을 약화시킨 것입니다.',
          '이러한 전환은 자가소비 중심 시스템에 시장 기회를 만듭니다 — 발코니 태양광은 일반적으로 계통 판매보다 가정 내 직접 사용을 중심으로 규모가 정해지고 판매되므로, 기존 보조금 기반 모델이 더 이상 적용되지 않는 정책 환경의 혜택을 받습니다. 136호 문건 발효 약 1년 후 T/GEA 001-2026이 등장한 것은 이 시기와 부합하지만, 이 페이지는 이를 직접적으로 입증된 인과관계 주장이 아니라 맥락상의 상관관계로 다룹니다.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: '시장 규모: 초기 단계이며 단일 출처',
        content: [
          '**중국 내수 발코니 태양광 도입에 대한 시장 규모 추정치는 Trina Solar의 가정용 브랜드(天合富家)라는 단일 출처에서 나온 것으로, 공식적이거나 독립적으로 검증된 수치가 아니라 기업의 전망치로 다루어야 합니다.** 해당 추정치: 2024년 중국 내 약 1,000대 설치, 2025년 약 1만 대 전망, 2026년에는 10만 대 이상 가능성.',
          '중국 무역 언론 보도는 이러한 궤적을 독일의 앞선 발코니 태양광 도입 곡선을 따르는 것으로 명확히 규정하며, 독일의 100만 대 이상 등록 시스템을 중국에서 이 카테고리가 궁극적으로 도달할 수 있는 규모의 기준점으로 사용합니다. 이러한 프레이밍은 비교를 제시한 출처에 귀속되어야 하며, 이 페이지의 독자적인 결론으로 다루어서는 안 됩니다 — 중국 내수 시장의 실제 규모와 궤적은 시장이 발전함에 따라 독립적인 데이터로 확인되어야 할 사안입니다.',
        ],
        callouts: [
          { type: 'warning', text: '[검증 필요: 단일 기업 추정치] 2024~2026년 1,000대 / 1만 대 / 10만 대 이상이라는 설치 수치는 Trina의 가정용 브랜드에서만 나온 것입니다 — 이를 뒷받침하는 독립적이거나 공식적인 국가 통계 기관의 수치는 발견되지 않았습니다.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: '제조 허브 대 내수 시장',
        content: [
          '**이 페이지는 중국을 내수 도입 시장으로 다루며, 이는 이 클러스터의 다른 문서에서 다루는 세계 최대 발코니 태양광 제조·수출 허브로서 중국의 확립된 역할과는 별개의 주제입니다.** 이 클러스터 내 수출 관련 내용(2026년 수출세 환급 폐지, 301조 관세, Anker, EcoFlow, Zendure, BYD, Growatt, Marstek 등 선전 소재 브랜드)은 미국이나 EU 같은 시장에 판매하는 중국의 제조 기반에 관한 것이며, 자체 사용을 위해 발코니 태양광을 구매·설치하는 중국 내 가정에 관한 것이 아닙니다. 두 이야기는 서로 관련이 있지만 별개입니다.',
          '둘 사이의 직접적인 연결 고리 중 하나는 WattCycle입니다. 이 클러스터의 다른 문서에서 수출 제품으로 이미 언급된 선전 소재 제조업체인 WattCycle은 중국의 제조 기반과 이 신흥 내수 시장의 교차점에 위치합니다 — 이는 단순한 지리적 우연이 아니라 이미 조사된 두 사실 사이의 실질적인 연결입니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '중국에 발코니 태양광 표준이 있습니까?', a: '있습니다 — 2026년 5월 21일 상하이시 민항구 그린에너지산업발전촉진협회가 발표한 T/GEA 001-2026은 발코니 태양광의 품질·안전성 평가에 특화된 중국 최초의 산업 표준입니다. 이는 와트수 상한을 둔 국가 의무 법률이 아니라 산업 표준입니다.' },
          { q: '중국의 발코니 태양광 표준은 누가 작성했습니까?', a: '중국 분산형 태양광-저장 브랜드 연합, 산둥성 태양에너지산업협회, 허난성 산업발전연구협회 신에너지위원회가 작성했으며, Hoymiles와 Trina Solar의 가정용 브랜드인 톈허푸자(天合富家)가 핵심 초안 작성 기업으로 참여했습니다.' },
          { q: '중국에서 지금 발코니 태양광이 성장하는 이유는 무엇입니까?', a: '2025년 5월 31일 발효된 「136호 문건」은 신규 재생에너지 프로젝트가 보장된 발전차액지원 대신 시장 기반 거래에 참여하도록 요구합니다. 이는 계통 판매를 중심으로 한 보조금 기반 가정용 태양광의 전통적 경제성을 약화시켰고, 대신 자가소비 중심의 발코니 태양광에 시장 기회를 열어주었습니다.' },
          { q: '중국의 발코니 태양광 내수 시장 규모는 어느 정도입니까?', a: '[검증 필요: 단일 출처 추정치] Trina Solar의 가정용 브랜드는 2024년 설치량을 약 1,000대, 2025년 전망을 약 1만 대, 2026년에는 10만 대 이상으로 추정합니다 — 이는 기업의 전망치이며 공식적이거나 독립적으로 확인된 수치가 아닙니다.' },
          { q: '이것은 중국의 발코니 태양광 수출 사업과 같은 것입니까?', a: '아닙니다. 이 페이지는 중국 내수 도입을 다루며, 세계 최대의 발코니 태양광 장비 제조·수출국으로서 중국의 역할(이 클러스터의 다른 문서에서 다룸)은 이미 잘 확립된 별개의 이야기입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[발코니 태양광 투자 회수: 그만한 가치가 있을까](/ko/balcony-solar/balcony-solar-payback-worth-it-2026) — 장비 가격에 영향을 미치는 중국의 수출세 환급 변경을 다룹니다',
          '[EcoFlow 대 Anker 대 Zendure 발코니 태양광](/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — 선전 소재 수출 브랜드 비교',
          '[발코니 태양광은 합법인가: 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 전 세계 법률 현황 추적',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-pt.png',
    title: 'Energia Solar de Varanda na China: O Mercado Doméstico Emergindo por Trás do Boom de Exportação (2027)',
    seoTitle: 'Energia Solar de Varanda na China: O Mercado Doméstico Emergindo por Trás do Boom de Exportação (2027)',
    intro: 'A China é a maior exportadora mundial de equipamentos de energia solar de varanda — mas esta página aborda uma história diferente e mais recente: um mercado de adoção doméstico que está se formando dentro da própria China, formalizado pelo primeiro padrão do setor de energia solar de varanda do país em maio de 2026 e impulsionado por uma mudança de política em 2025 que enfraqueceu a economia da energia solar residencial tradicional subsidiada pela rede.',
    metaDescription: 'A China publicou seu primeiro padrão do setor para energia solar de varanda (T/GEA 001-2026) em maio de 2026, elaborado com a marca residencial da Hoymiles e da Trina. Motor da política: o Documento nº 136 (em vigor desde 31 de maio de 2025) empurrou a energia solar residencial em direção ao autoconsumo. Estimativas de uma única fonte apontam cerca de 1.000 instalações domésticas em 2024, com projeção de mais de 100.000 até 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Observadores e compradores do mercado de energia solar de varanda que acompanham a adoção doméstica na China, distinta do papel da China como polo de fabricação',
    primaryTerm: 'mercado doméstico de energia solar de varanda na china',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**Em 21 de maio de 2026, a China publicou seu primeiro padrão do setor específico para energia solar de varanda — o T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范", o Padrão Técnico de Avaliação de Qualidade e Segurança de Fotovoltaica de Varanda) —, emitido pela Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai.** O padrão foi elaborado em conjunto com a China Distributed Solar-Storage Brand Alliance, a Associação da Indústria de Energia Solar de Shandong e o Comitê de Novas Energias da Associação de Pesquisa para o Desenvolvimento Industrial da Província de Henan, com a Hoymiles (昱能科技) e a marca residencial da Trina Solar (天合富家, "Trina Household") como empresas centrais na redação. O pano de fundo político é o "Documento nº 136" da China (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), em vigor desde 31 de maio de 2025, que exige que novos projetos de energia renovável vendam sua geração por meio de negociação baseada em mercado, em vez de receberem uma tarifa de alimentação garantida — o que enfraqueceu a economia tradicional de "vender o excedente à rede em troca de subsídio" da energia solar residencial e abriu uma justificativa de mercado para sistemas de varanda focados em autoconsumo. [VERIFICAR: estimativa de uma única empresa, não confirmada de forma independente] A marca residencial da Trina estima cerca de 1.000 instalações domésticas em 2024, com projeção de 10.000 em 2025 e potencialmente mais de 100.000 até 2026.',
    quickAnswerTop: {
      pt: {
        question: 'Existe um mercado doméstico de energia solar de varanda na China, separado de seu papel como polo de fabricação?',
        answer: 'Sim — está surgindo um mercado de adoção doméstico, formalizado pelo primeiro padrão do setor de energia solar de varanda da China, o T/GEA 001-2026, publicado em 21 de maio de 2026 pela Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai, e elaborado com a Hoymiles e a marca residencial da Trina Solar (天合富家) como participantes centrais. O motor da política é o "Documento nº 136", em vigor desde 31 de maio de 2025, que direcionou novos projetos de energia renovável para a negociação baseada em mercado em vez da tarifa de alimentação garantida — enfraquecendo a economia da energia solar residencial subsidiada tradicional e criando uma oportunidade de mercado para sistemas de varanda de autoconsumo. As estimativas da marca residencial da Trina (aqui sinalizadas como uma projeção de uma única empresa, não verificada de forma independente) sugerem cerca de 1.000 unidades instaladas domesticamente em 2024, ~10.000 projetadas para 2025 e potencialmente mais de 100.000 até 2026.',
        bullets: [
          'T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范"), o primeiro padrão do setor da China para energia solar de varanda, publicado em 21 de maio de 2026 pela Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai',
          'Elaborado com a China Distributed Solar-Storage Brand Alliance, a Associação da Indústria de Energia Solar de Shandong e o Comitê de Novas Energias da Associação de Pesquisa para o Desenvolvimento Industrial da Província de Henan; a Hoymiles e a marca residencial da Trina Solar (天合富家) foram empresas centrais na redação',
          'Motor da política: o "Documento nº 136", em vigor desde 31 de maio de 2025, exige que novos projetos renováveis entrem na negociação de mercado em vez de receberem tarifa de alimentação garantida — enfraquecendo a economia da energia solar residencial subsidiada e abrindo espaço para a energia solar de varanda focada em autoconsumo',
          '[VERIFICAR: fonte única, estimativa da marca residencial da Trina] ~1.000 unidades instaladas domesticamente em 2024, ~10.000 projetadas para 2025, potencialmente mais de 100.000 para 2026 — não é um número oficial nem confirmado de forma independente',
          'Este é um tema distinto do papel da China como polo de fabricação e exportação (abordado em outra parte deste conjunto de artigos, por exemplo as mudanças no reembolso do imposto de exportação e as tarifas da Seção 301) — esta página aborda especificamente a adoção doméstica dentro da China',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Pontos Principais', anchor: '#key-takeaways' },
      { label: 'O Primeiro Padrão de Energia Solar de Varanda da China', anchor: '#first-standard' },
      { label: 'O Motor da Política: Documento nº 136', anchor: '#document-136' },
      { label: 'Tamanho do Mercado: Inicial e de Fonte Única', anchor: '#market-size' },
      { label: 'Polo de Fabricação vs. Mercado Doméstico', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras Relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A China publicou seu primeiro padrão do setor de energia solar de varanda, o T/GEA 001-2026, em 21 de maio de 2026 — emitido pela Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai.',
          'As empresas centrais na redação incluíram a Hoymiles (昱能科技) e a marca residencial da Trina Solar (天合富家, "Trina Household"), além de três associações do setor que abrangem armazenamento solar distribuído e comitês regionais de novas energias.',
          'O "Documento nº 136", em vigor desde 31 de maio de 2025, exige que novos projetos de energia renovável vendam sua geração por meio de negociação baseada em mercado, em vez de receberem tarifa de alimentação garantida — isso enfraqueceu a economia tradicional da energia solar residencial subsidiada e criou uma oportunidade de mercado para a energia solar de varanda de autoconsumo.',
          '[VERIFICAR: fonte única] A marca residencial da Trina estima cerca de 1.000 instalações domésticas de energia solar de varanda em 2024, ~10.000 projetadas para 2025 e potencialmente mais de 100.000 até 2026 — deve ser tratado como uma projeção da empresa, não como um número oficial ou confirmado de forma independente.',
          'A WattCycle, fabricante sediada em Shenzhen já abordada em outra parte deste conjunto de artigos por seus produtos de exportação, é uma ligação direta entre a base de fabricação da China e esse mercado doméstico emergente.',
          'A imprensa comercial chinesa enquadra explicitamente essa curva de adoção como um seguimento da trajetória anterior da Alemanha (usando os mais de 1 milhão de sistemas registrados na Alemanha como referência) — um enquadramento do setor que vale a pena observar, não uma conclusão verificada de forma independente.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'O Primeiro Padrão de Energia Solar de Varanda da China',
        content: [
          '**Em 21 de maio de 2026, a Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai, publicou o T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范" — o Padrão Técnico de Avaliação de Qualidade e Segurança de Fotovoltaica de Varanda), o primeiro padrão do setor da China específico para energia solar de varanda.** Por ser um padrão de setor ("T/"), e não um padrão nacional obrigatório, ele estabelece critérios de avaliação de qualidade e segurança para a categoria, em vez de impor um limite de potência ou um processo de registro comparável ao DIN VDE V 0126-95 da Alemanha ou à convergência de 800 W da UE — trata-se de um patamar de qualidade técnica, não de um regime de autorização legal.',
          'O padrão foi elaborado em conjunto com a China Distributed Solar-Storage Brand Alliance, a Associação da Indústria de Energia Solar de Shandong e o Comitê de Novas Energias da Associação de Pesquisa para o Desenvolvimento Industrial da Província de Henan. A Hoymiles (昱能科技) e a marca residencial da Trina Solar (天合富家, "Trina Household") foram nomeadas empresas centrais na redação — ambas fabricantes consolidadas de equipamentos solares, com linhas de produtos existentes diretamente relevantes para a avaliação de qualidade e segurança da energia solar de varanda.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'O Motor da Política: Documento nº 136',
        content: [
          '**O "Documento nº 136" da China (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), em vigor desde 31 de maio de 2025, exige que a geração de novos projetos de energia renovável entre na negociação baseada em mercado, em vez de receber tarifa de alimentação garantida.** Trata-se de uma ampla mudança de política de energia renovável, não uma medida específica para energia solar de varanda — mas tem um efeito direto sobre a categoria: enfraqueceu a economia tradicional da energia solar residencial, construída em torno da venda do excedente de geração à rede a um preço subsidiado e garantido.',
          'Essa mudança cria uma oportunidade de mercado para sistemas focados em autoconsumo — a energia solar de varanda, tipicamente dimensionada e comercializada para uso doméstico direto em vez de exportação à rede, se beneficia de um ambiente político em que o antigo modelo baseado em subsídios já não se aplica. O surgimento do T/GEA 001-2026 cerca de um ano após a entrada em vigor do Documento nº 136 é consistente com essa cronologia, embora esta página trate isso como uma correlação contextual, e não como uma alegação causal diretamente fundamentada.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'Tamanho do Mercado: Inicial e de Fonte Única',
        content: [
          '**As estimativas de tamanho do mercado de adoção doméstico de energia solar de varanda na China vêm de uma única fonte — a marca residencial da Trina Solar (天合富家) — e devem ser tratadas como uma projeção da empresa, não como um número oficial ou confirmado de forma independente.** Essa estimativa: cerca de 1.000 unidades instaladas na China em 2024, aproximadamente 10.000 projetadas para 2025 e potencialmente mais de 100.000 para 2026.',
          'A cobertura da imprensa comercial chinesa enquadra explicitamente essa trajetória como um seguimento da curva de adoção anterior da Alemanha em energia solar de varanda, usando os mais de 1 milhão de sistemas registrados na Alemanha como referência de até onde a categoria poderia eventualmente chegar na China. Esse enquadramento deve ser atribuído à fonte que faz a comparação, e não tratado como uma conclusão independente desta página — a escala e a trajetória reais do mercado doméstico da China ainda precisam ser confirmadas por dados independentes à medida que se desenvolve.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFICAR: estimativa de uma única empresa] Os números de instalação de 1.000 / 10.000 / mais de 100.000 para 2024-2026 vêm apenas da marca residencial da Trina — não foi encontrado nenhum número independente ou oficial de uma agência estatística nacional que corrobore isso.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'Polo de Fabricação vs. Mercado Doméstico',
        content: [
          '**Esta página aborda a China como um mercado de adoção doméstico — um tema distinto do papel já bem estabelecido da China como o maior polo mundial de fabricação e exportação de energia solar de varanda, abordado em outra parte deste conjunto de artigos.** A cobertura do lado da exportação neste conjunto de artigos (a remoção do reembolso do imposto de exportação em 2026, as tarifas da Seção 301 e marcas sediadas em Shenzhen como Anker, EcoFlow, Zendure, BYD, Growatt e Marstek) diz respeito à base de fabricação da China vendendo para mercados como EUA e UE, não a residências chinesas domésticas comprando e instalando energia solar de varanda para uso próprio. As duas histórias são relacionadas, mas separadas.',
          'Uma ligação direta entre elas: a WattCycle, fabricante sediada em Shenzhen já referenciada em outra parte deste conjunto de artigos por seus produtos de exportação, situa-se na interseção entre a base de fabricação da China e esse mercado doméstico emergente — uma conexão genuína entre dois fatos já pesquisados, não apenas uma coincidência geográfica.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          { q: 'A China tem um padrão para energia solar de varanda?', a: 'Sim — o T/GEA 001-2026, publicado em 21 de maio de 2026 pela Associação de Promoção do Desenvolvimento da Indústria de Energia Verde do Distrito de Minhang, em Xangai, é o primeiro padrão do setor da China específico para avaliação de qualidade e segurança de energia solar de varanda. É um padrão do setor, não uma lei nacional obrigatória com limite de potência.' },
          { q: 'Quem elaborou o padrão de energia solar de varanda da China?', a: 'A China Distributed Solar-Storage Brand Alliance, a Associação da Indústria de Energia Solar de Shandong e o Comitê de Novas Energias da Associação de Pesquisa para o Desenvolvimento Industrial da Província de Henan, com a Hoymiles e a marca residencial da Trina Solar (天合富家) como empresas centrais na redação.' },
          { q: 'Por que a energia solar de varanda está crescendo na China agora?', a: 'O "Documento nº 136", em vigor desde 31 de maio de 2025, exige que novos projetos de energia renovável vendam sua geração por meio de negociação baseada em mercado, em vez de receberem tarifa de alimentação garantida. Isso enfraqueceu a economia tradicional da energia solar residencial subsidiada, construída em torno da exportação à rede, abrindo em vez disso uma oportunidade de mercado para a energia solar de varanda focada em autoconsumo.' },
          { q: 'Qual é o tamanho do mercado doméstico de energia solar de varanda na China?', a: '[VERIFICAR: estimativa de fonte única] A marca residencial da Trina Solar estima cerca de 1.000 unidades instaladas em 2024, ~10.000 projetadas para 2025 e potencialmente mais de 100.000 até 2026 — uma projeção da empresa, não um número oficial ou confirmado de forma independente.' },
          { q: 'Isso é o mesmo que o negócio de exportação de energia solar de varanda da China?', a: 'Não. Esta página aborda a adoção doméstica chinesa; o papel da China como fabricante e exportadora dominante global de equipamentos de energia solar de varanda (abordado em outra parte deste conjunto de artigos) é uma história separada e já bem estabelecida.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras Relacionadas',
        items: [
          '[Retorno do Investimento em Energia Solar de Varanda: Vale a Pena?](/pt/balcony-solar/balcony-solar-payback-worth-it-2026) — aborda as mudanças da China no reembolso do imposto de exportação que afetam os preços dos equipamentos',
          '[EcoFlow vs. Anker vs. Zendure Energia Solar de Varanda](/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — comparação de marcas exportadoras sediadas em Shenzhen',
          '[A Energia Solar de Varanda É Legal? Um Guia País a País](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador jurídico global',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-china-2027-overview-hero-zh.png',
    title: '中国阳台光伏：出口热潮背后崛起的国内市场（2027年）',
    seoTitle: '中国阳台光伏：出口热潮背后崛起的国内市场（2027年）',
    intro: '中国是全球最大的阳台光伏设备出口国——但本页要讲述的是另一个更新的故事：中国国内正在形成的自用市场。这一市场因2026年5月发布的中国首个阳台光伏行业标准而得到规范，并受到2025年一项政策转变的推动，该转变削弱了传统电网补贴型家庭光伏的经济性。',
    metaDescription: '中国于2026年5月发布首个阳台光伏行业标准（T/GEA 001-2026），由昱能科技与天合富家共同起草。政策推动力：136号文件（自2025年5月31日起施行）促使家庭光伏转向自发自用。单一来源的估算显示，2024年国内装机量约为1,000台，预计到2026年将超过10万台。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '关注中国阳台光伏国内市场发展的市场观察者和购买者，区别于中国作为制造中心的角色',
    primaryTerm: '中国阳台光伏国内市场',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**2026年5月21日，中国发布了首个专门针对阳台光伏的行业标准——T/GEA 001-2026《阳台光伏质量与安全评价技术规范》，由上海市闵行区绿色能源产业发展促进会发布。** 该标准由中国分布式光储品牌联盟、山东省太阳能行业协会以及河南省产业发展研究会新能源委员会联合起草，昱能科技与天合光能旗下户用品牌天合富家为核心起草企业。政策背景是中国的"136号文件"（国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》），自2025年5月31日起施行，要求新建可再生能源项目发电量进入市场化交易，而非获得保障性上网电价——这削弱了传统家庭光伏"余电上网获补贴"的经济模式，为以自发自用为主的阳台光伏系统开辟了市场空间。[待核实：单一企业估算，未经独立证实] 天合富家估算2024年国内装机量约1,000台，预计2025年将达约1万台，2026年或将突破10万台。',
    quickAnswerTop: {
      zh: {
        question: '中国国内是否存在独立于制造出口角色之外的阳台光伏市场？',
        answer: '是的——一个国内自用市场正在兴起，其标志是中国首个阳台光伏行业标准T/GEA 001-2026，由上海市闵行区绿色能源产业发展促进会于2026年5月21日发布，由昱能科技与天合光能户用品牌天合富家作为核心参与方共同起草。政策推动力是自2025年5月31日起施行的"136号文件"，该文件促使新建可再生能源项目转向市场化交易而非保障性上网电价，削弱了传统补贴型家庭光伏的经济性，为自发自用型阳台光伏系统创造了市场机会。天合富家的估算（在此明确为单一企业的预测，未经独立核实）显示，2024年国内装机量约为1,000台，2025年预计约1万台，2026年或将超过10万台。',
        bullets: [
          'T/GEA 001-2026《阳台光伏质量与安全评价技术规范》是中国首个阳台光伏行业标准，由上海市闵行区绿色能源产业发展促进会于2026年5月21日发布',
          '该标准由中国分布式光储品牌联盟、山东省太阳能行业协会以及河南省产业发展研究会新能源委员会联合起草；昱能科技与天合光能户用品牌天合富家为核心起草企业',
          '政策推动力：自2025年5月31日起施行的"136号文件"要求新建可再生能源项目进入市场化交易而非获得保障性上网电价——削弱了补贴型家庭光伏的经济性，为以自发自用为主的阳台光伏开辟了空间',
          '[待核实：单一来源，天合富家估算] 2024年国内装机量约1,000台，2025年预计约1万台，2026年或将超过10万台——并非官方或经独立证实的数据',
          '这一话题不同于中国作为制造/出口中心的角色（本专题其他文章已涉及，如出口退税变化和301条款关税）——本页专门聚焦中国国内的市场发展',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '中国首个阳台光伏标准', anchor: '#first-standard' },
      { label: '政策推动力：136号文件', anchor: '#document-136' },
      { label: '市场规模：早期且来源单一', anchor: '#market-size' },
      { label: '制造中心与国内市场之别', anchor: '#hub-vs-domestic' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '中国于2026年5月21日发布首个阳台光伏行业标准T/GEA 001-2026——由上海市闵行区绿色能源产业发展促进会发布。',
          '核心起草企业包括昱能科技与天合光能户用品牌天合富家，另有三家行业协会参与，涵盖分布式光储及地区新能源委员会。',
          '自2025年5月31日起施行的"136号文件"要求新建可再生能源项目进入市场化交易，而非获得保障性上网电价——这削弱了传统补贴型家庭光伏的经济性，为自发自用型阳台光伏创造了市场机会。',
          '[待核实：单一来源] 天合富家估算2024年国内阳台光伏装机量约1,000台，2025年预计约1万台，2026年或将超过10万台——应视为企业预测，而非官方或经独立证实的数据。',
          'WattCycle是一家总部位于深圳的制造商，本专题其他文章已就其出口产品有所介绍，它是中国制造基础与这一新兴国内市场之间的直接纽带。',
          '中国行业媒体明确将这一发展曲线类比为德国早期路径的延续（以德国超百万套注册系统为参照基准）——这是行业的一种定性描述，值得注意，但并非经独立验证的结论。',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: '中国首个阳台光伏标准',
        content: [
          '**2026年5月21日，上海市闵行区绿色能源产业发展促进会发布了T/GEA 001-2026《阳台光伏质量与安全评价技术规范》，这是中国首个专门针对阳台光伏的行业标准。** 作为一项团体（"T/"）标准而非国家强制性标准，它为这一品类设立了质量与安全评价准则，而非像德国DIN VDE V 0126-95或欧盟800瓦趋同标准那样设定功率上限或注册流程——它是一条技术质量门槛，而非法律许可框架。',
          '该标准由中国分布式光储品牌联盟、山东省太阳能行业协会以及河南省产业发展研究会新能源委员会联合起草。昱能科技与天合光能户用品牌天合富家被列为核心起草企业——两家均为成熟的光伏设备制造商，其现有产品线与阳台光伏的质量与安全评价直接相关。',
        ],
      },
      document136: {
        id: 'document-136',
        title: '政策推动力：136号文件',
        content: [
          '**中国的"136号文件"（国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》）自2025年5月31日起施行，要求新建可再生能源项目的发电量进入市场化交易，而非获得保障性上网电价。** 这是一项广泛的可再生能源政策调整，并非专门针对阳台光伏的措施——但它对该品类产生了直接的连锁效应：削弱了家庭光伏依赖余电上网获取补贴、保障价格的传统经济模式。',
          '这一转变为以自发自用为主的系统创造了市场机会——阳台光伏通常按家庭直接使用而非电网出售来设定规模和进行营销，因而在旧的补贴驱动模式不再适用的政策环境下反而受益。T/GEA 001-2026在136号文件施行约一年后出现，这一时间点与该背景相符，不过本页将其视为语境上的关联，而非直接论证的因果关系。',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: '市场规模：早期且来源单一',
        content: [
          '**关于中国国内阳台光伏自用市场规模的估算均来自单一来源——天合光能户用品牌天合富家——应视为企业预测，而非官方或经独立证实的数据。** 该估算显示：2024年中国国内装机量约1,000台，2025年预计约1万台，2026年或将超过10万台。',
          '中国行业媒体的报道明确将这一发展轨迹类比为德国早期阳台光伏普及曲线的延续，以德国超百万套注册系统作为中国这一品类未来可能达到规模的参照基准。这种类比应归因于提出比较的信源，而非视为本页自身的独立结论——中国国内市场的实际规模与发展轨迹，仍有待随市场演进以独立数据加以确认。',
        ],
        callouts: [
          { type: 'warning', text: '[待核实：单一企业估算] 2024至2026年1,000台/1万台/超10万台的装机数据仅来自天合富家一家企业——未发现有独立或官方国家统计机构的数据可加以佐证。' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: '制造中心与国内市场之别',
        content: [
          '**本页聚焦中国作为国内自用市场——这一话题不同于中国作为全球最大阳台光伏制造与出口中心这一已被充分确立的角色，后者在本专题其他文章中已有介绍。** 本专题中关于出口方面的内容（2026年出口退税取消、301条款关税，以及Anker、EcoFlow、Zendure、比亚迪、古瑞瓦特、Marstek等深圳品牌）涉及的是中国销往美国、欧盟等市场的制造基础，而非购买并安装阳台光伏供自用的中国国内家庭。两者相关，但属于不同的话题。',
          '两者之间的一条直接联系是WattCycle——这家总部位于深圳的制造商，本专题其他文章已就其出口产品有所提及，它正处于中国制造基础与这一新兴国内市场的交汇点——这是两个已被研究事实之间的真实联系，而非仅仅是地理上的巧合。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '中国有阳台光伏标准吗？', a: '有——T/GEA 001-2026由上海市闵行区绿色能源产业发展促进会于2026年5月21日发布，是中国首个专门针对阳台光伏质量与安全评价的行业标准。它是一项行业标准，而非设有功率上限的国家强制性法律。' },
          { q: '中国的阳台光伏标准是谁起草的？', a: '由中国分布式光储品牌联盟、山东省太阳能行业协会以及河南省产业发展研究会新能源委员会共同起草，昱能科技与天合光能户用品牌天合富家为核心起草企业。' },
          { q: '为什么阳台光伏在中国现在开始增长？', a: '自2025年5月31日起施行的"136号文件"要求新建可再生能源项目进入市场化交易，而非获得保障性上网电价。这削弱了依赖余电上网的传统补贴型家庭光伏经济模式，转而为以自发自用为主的阳台光伏开辟了市场空间。' },
          { q: '中国国内阳台光伏市场规模有多大？', a: '[待核实：单一来源估算] 天合光能户用品牌估算2024年装机量约1,000台，2025年预计约1万台，2026年或将超过10万台——这是企业预测，而非官方或经独立证实的数据。' },
          { q: '这与中国阳台光伏出口业务是同一回事吗？', a: '不是。本页聚焦中国国内市场的发展；中国作为全球主导的阳台光伏设备制造商与出口国的角色（本专题其他文章已有介绍）是另一段已经十分成熟的故事。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[阳台光伏投资回报：值得吗？](/zh/balcony-solar/balcony-solar-payback-worth-it-2026) — 涉及影响设备价格的中国出口退税变化',
          '[EcoFlow vs. Anker vs. Zendure 阳台光伏对比](/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — 深圳出口品牌对比',
          '[阳台光伏合法吗？各国指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) — 全球法律追踪',
        ],
      },
    },
  },
}
