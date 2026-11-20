// Slug: is-balcony-solar-legal-utah
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only (no de/fr/ja/zh/es/pt/ar/ko
// blocks) and single-topic, but otherwise follows the standard Prompt Bite shape
// (600-900 words, max 3 H2s, quickAnswerTop-first). Legal/regulatory tracking
// content doesn't fit the mobile "one-number answer" bite format used elsewhere
// in this cluster, but the compressed structure still applies. See
// BALCONY_SOLAR_STATE_REGULATION_ROUND1.md for the round-1 brief covering this
// and 7 sibling state pages. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Utah?',
    dateModified: '2026-11-20',
    seoTitle: 'Is Balcony Solar Legal in Utah? HB 340 | Prompt Bites',
    metaDescription: 'Utah HB 340 has applied since May 7, 2025: plug-in solar up to 1,200 W, no utility approval or fees, UL or equivalent lab certification. Not legal advice.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Utah',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Utah?',
        answer: 'In effect. Utah HB 340 (Solar Power Amendments) took effect on May 7, 2025. According to the enrolled bill, qualifying “portable solar generation devices” of up to 1,200 watts that plug into a standard 120-volt outlet are exempt from utility interconnection agreements and from the net metering program rules, provided they are certified by Underwriters Laboratories or an equivalent nationally recognized testing laboratory.',
        bullets: [
          'HB 340 took effect May 7, 2025 (enrolled bill, Utah Legislature); Grist describes Utah as the first state to let residents plug solar into outlets',
          'Up to 1,200 W through a standard 120 V outlet; utilities may not require approval, fees or extra equipment',
          'Certification by UL or an equivalent testing laboratory is part of the legal definition; certified complete systems were still unconfirmed in the sources we checked',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Utah HB 340 has applied since May 7, 2025; Grist describes it as the first law of its kind in the US.',
          'Qualifying devices: no more than 1,200 W, standard 120 V outlet, compliant with the National Electrical Code, certified by UL or an equivalent lab, and fitted with a feature that stops them energizing the building during an outage.',
          'Utilities may not require prior approval or fees, and qualifying devices are not subject to the net metering program, so do not expect credit or payment for exported power.',
          'The bill requires certification by UL or an equivalent lab; the UL 3700 program opened in January 2026 and reports about certified products conflict, so verify any listing in the certifier’s own directory.',
        ],
      },
      body1: {
        title: 'What Does HB 340 Require in Utah?',
        content: [
          '<strong>Utah’s HB 340 defines a “portable solar generation device” as a moveable photovoltaic device with a maximum output of 1,200 watts, designed to connect to a building’s electrical system through a standard 120-volt AC outlet, and certified by Underwriters Laboratories or an equivalent nationally recognized testing laboratory.</strong> According to the enrolled bill, the device must also meet the most recent National Electrical Code standards and include a feature that prevents it from energizing the building’s electrical system during a power outage. Qualifying devices are exempt from the interconnection requirements and from the duty to sign an interconnection agreement, and they are not subject to the net metering program requirements. A utility may not require approval before installation or use, any fee or charge, or additional controls or equipment beyond what is integrated into the device, and it is not liable for damage or injury caused by such a device. The bill text sets no notification requirement.',
          'The bill text contains no HOA or landlord provisions, so a lease or HOA agreement may still restrict where you mount a panel. According to Grist (April 2026), Rocky Mountain Power took no position on the bill and has said it remains concerned that some products entering the market may not meet the bill’s requirements. This page is general information, not legal advice; check the statute (Utah Code 54-15-601) and your local rules.',
        ],
        columns: ['Field', 'Utah HB 340'],
        rows: [
          { 'Field': 'Effective date', 'Utah HB 340': 'May 7, 2025' },
          { 'Field': 'Wattage cap', 'Utah HB 340': '1,200 W' },
          { 'Field': 'Utility interconnection', 'Utah HB 340': 'Exempt; no approval or fee' },
          { 'Field': 'Net metering program', 'Utah HB 340': 'Not subject' },
          { 'Field': 'Certification', 'Utah HB 340': 'UL or equivalent lab' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Check EcoFlow STREAM Ultra price on Amazon',
          },
        ],
        content: [
          '<strong>HB 340 requires certification by UL or an equivalent nationally recognized testing laboratory; it does not name UL 3700.</strong> UL Solutions announced a testing and certification program for plug-in solar based on UL 3700 on January 8, 2026. Reports about certified products conflict: Grist reported in April 2026 that no plug-in systems had been certified by UL yet, and in July 2026 outlets described a Hoymiles microinverter as the first UL 3700-compliant product, with one outlet later correcting that it was not certified by UL Solutions. Because the sources disagree, check the certifier’s public directory and the product’s listing before buying; PromptQuorum has not verified any product certification.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Utah today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Utah Balcony Solar',
        faqs: [
          {
            q: 'Can my HOA in Utah ban balcony solar?',
            a: 'Possibly. The enrolled HB 340 text contains no HOA or landlord provisions, so check your lease or HOA covenant before installing. For how another state handles this, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Do I need to register my system with my utility in Utah?',
            a: 'The enrolled bill says qualifying devices are exempt from interconnection agreements and that the utility may not require approval, fees or extra equipment; it sets no notification requirement. If in doubt, ask your utility.',
          },
          {
            q: 'Can I get paid for excess power I generate?',
            a: 'Do not count on it. HB 340 states that qualifying devices are not subject to the net metering program requirements, and Grist reports that the law bars owners from seeking payment for power sent back to the grid.',
          },
          {
            q: 'Is a UL 3700 certificate required in Utah?',
            a: 'The law requires certification by UL or an equivalent nationally recognized testing laboratory and does not name a specific standard. UL 3700 is the standard behind the plug-in solar program UL Solutions announced on January 8, 2026; check the certificate or directory listing of the product you plan to buy.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Utah Legislature: H.B. 340 Solar Power Amendments, enrolled copy](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — definition, exemptions, requirements, effective date',
          '[UL Solutions: testing and certification framework for plug-in solar](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700-based program announced January 8, 2026',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — April 2026 reporting on the law, utility position and certification status',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Utah legal?',
    dateModified: '2026-11-20',
    seoTitle: 'Ist Balkonsolar in Utah legal? HB 340 | Prompt Bites',
    metaDescription: 'Utah HB 340 gilt seit 7. Mai 2025: Steckersolar bis 1.200 W, ohne Genehmigung oder Gebühr, UL- oder gleichwertige Zertifizierung. Keine Rechtsberatung.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Eigenheimbesitzer, die prüfen, ob Balkonsolar in Utah legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Utah legal?',
        answer: 'In Kraft. Utahs HB 340 (Solar Power Amendments) ist am 7. Mai 2025 in Kraft getreten. Laut der verabschiedeten Gesetzesfassung sind qualifizierte „portable solar generation devices“ bis 1.200 Watt, die an eine Standard-120-Volt-Steckdose angeschlossen werden, von Netzanschlussvereinbarungen und den Regeln des Net-Metering-Programms ausgenommen – sofern sie von Underwriters Laboratories oder einem gleichwertigen national anerkannten Prüflabor zertifiziert sind.',
        bullets: [
          'HB 340 ist am 7. Mai 2025 in Kraft getreten (Gesetzesfassung, Parlament von Utah); Grist beschreibt Utah als den ersten Bundesstaat, der Steckersolar an Steckdosen erlaubt',
          'Bis 1.200 W über eine Standard-120-V-Steckdose; Versorger dürfen keine Genehmigung, Gebühren oder Zusatzgeräte verlangen',
          'Die Zertifizierung durch UL oder ein gleichwertiges Prüflabor gehört zur gesetzlichen Definition; zertifizierte Komplettsysteme waren in den von uns geprüften Quellen weiterhin unbestätigt',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Utahs HB 340 gilt seit dem 7. Mai 2025; Grist beschreibt es als das erste Gesetz dieser Art in den USA.',
          'Qualifizierte Geräte: höchstens 1.200 W, Standard-120-V-Steckdose, Einhaltung des National Electrical Code, Zertifizierung durch UL oder ein gleichwertiges Labor und eine Funktion, die verhindert, dass sie bei einem Stromausfall das Gebäudenetz speisen.',
          'Versorger dürfen weder vorherige Genehmigung noch Gebühren verlangen, und qualifizierte Geräte unterliegen nicht dem Net-Metering-Programm – rechnen Sie also nicht mit Gutschrift oder Vergütung für eingespeisten Strom.',
          'Das Gesetz verlangt eine Zertifizierung durch UL oder ein gleichwertiges Labor; das UL-3700-Programm startete im Januar 2026, und die Berichte über zertifizierte Produkte widersprechen sich – prüfen Sie jeden Eintrag im Verzeichnis der Zertifizierungsstelle.',
        ],
      },
      body1: {
        title: 'Was verlangt HB 340 in Utah?',
        content: [
          '<strong>Utahs HB 340 definiert ein „portable solar generation device“ als bewegliches Photovoltaikgerät mit höchstens 1.200 Watt Leistung, das über eine Standard-120-Volt-Wechselstromsteckdose an das Stromnetz eines Gebäudes angeschlossen wird und von Underwriters Laboratories oder einem gleichwertigen national anerkannten Prüflabor zertifiziert ist.</strong> Laut der verabschiedeten Gesetzesfassung muss das Gerät außerdem die Normen der aktuellsten Fassung des National Electrical Code erfüllen und eine Funktion enthalten, die verhindert, dass es bei einem Stromausfall das Gebäudenetz speist. Qualifizierte Geräte sind von den Netzanschlussanforderungen und von der Pflicht zum Abschluss einer Netzanschlussvereinbarung ausgenommen und unterliegen nicht den Anforderungen des Net-Metering-Programms. Ein Versorger darf vor Installation oder Nutzung keine Genehmigung, keine Gebühr und keine zusätzlichen Steuerungen oder Geräte über das im Gerät Integrierte hinaus verlangen und haftet nicht für Schäden oder Verletzungen durch ein solches Gerät. Der Gesetzestext sieht keine Meldepflicht vor.',
          'Der Gesetzestext enthält keine Regelungen zu HOA oder Vermietern, sodass ein Mietvertrag oder eine HOA-Vereinbarung weiterhin einschränken kann, wo Sie ein Panel montieren. Laut Grist (April 2026) bezog Rocky Mountain Power zu dem Gesetz keine Position und äußerte, es bleibe besorgt, dass einige auf den Markt kommende Produkte die Anforderungen des Gesetzes möglicherweise nicht erfüllen. Diese Seite ist eine allgemeine Information und keine Rechtsberatung; prüfen Sie das Gesetz (Utah Code 54-15-601) und die örtlichen Vorschriften.',
        ],
        columns: ['Feld', 'Utah HB 340'],
        rows: [
          { 'Feld': 'In Kraft seit', 'Utah HB 340': '7. Mai 2025' },
          { 'Feld': 'Leistungsobergrenze', 'Utah HB 340': '1.200 W' },
          { 'Feld': 'Netzanschluss', 'Utah HB 340': 'Befreit; keine Genehmigung oder Gebühr' },
          { 'Feld': 'Net-Metering-Programm', 'Utah HB 340': 'Nicht erfasst' },
          { 'Feld': 'Zertifizierung', 'Utah HB 340': 'UL oder gleichwertiges Labor' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sind zertifizierte Sets tatsächlich schon erhältlich?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'EcoFlow STREAM Ultra Preis bei Amazon prüfen',
          },
        ],
        content: [
          '<strong>HB 340 verlangt eine Zertifizierung durch UL oder ein gleichwertiges national anerkanntes Prüflabor; UL 3700 wird nicht namentlich genannt.</strong> UL Solutions kündigte am 8. Januar 2026 ein Prüf- und Zertifizierungsprogramm für Steckersolar auf Basis von UL 3700 an. Die Berichte über zertifizierte Produkte widersprechen sich: Grist berichtete im April 2026, dass noch keine Steckersolar-Systeme von UL zertifiziert seien, und im Juli 2026 beschrieben Medien einen Hoymiles-Mikrowechselrichter als erstes UL-3700-konformes Produkt, wobei ein Medium später korrigierte, dass er nicht von UL Solutions zertifiziert sei. Da die Quellen sich widersprechen, prüfen Sie vor dem Kauf das öffentliche Verzeichnis der Zertifizierungsstelle und den Eintrag des Produkts; PromptQuorum hat keine Produktzertifizierung verifiziert.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in Utah zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Utah',
        faqs: [
          {
            q: 'Kann meine HOA in Utah Balkonsolar verbieten?',
            a: 'Möglicherweise. Der Gesetzestext von HB 340 enthält keine Regelungen zu HOA oder Vermietern, prüfen Sie daher vor der Installation Ihren Mietvertrag oder Ihre HOA-Satzung. Wie ein anderer Bundesstaat das handhabt, sehen Sie im <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Muss ich mein System in Utah bei meinem Versorger anmelden?',
            a: 'Laut Gesetzestext sind qualifizierte Geräte von Netzanschlussvereinbarungen ausgenommen, und der Versorger darf keine Genehmigung, Gebühren oder Zusatzgeräte verlangen; eine Meldepflicht sieht der Text nicht vor. Fragen Sie im Zweifel Ihren Versorger.',
          },
          {
            q: 'Kann ich für überschüssig erzeugten Strom bezahlt werden?',
            a: 'Rechnen Sie nicht damit. HB 340 bestimmt, dass qualifizierte Geräte nicht den Anforderungen des Net-Metering-Programms unterliegen, und Grist berichtet, das Gesetz untersage Eigentümern, eine Vergütung für ins Netz zurückgespeisten Strom zu verlangen.',
          },
          {
            q: 'Ist in Utah ein UL-3700-Zertifikat vorgeschrieben?',
            a: 'Das Gesetz verlangt eine Zertifizierung durch UL oder ein gleichwertiges national anerkanntes Prüflabor und nennt keinen bestimmten Standard. UL 3700 ist der Standard hinter dem Steckersolar-Programm, das UL Solutions am 8. Januar 2026 angekündigt hat; prüfen Sie das Zertifikat oder den Verzeichniseintrag des Produkts, das Sie kaufen möchten.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Parlament von Utah: H.B. 340 Solar Power Amendments, verabschiedete Fassung](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — Definition, Ausnahmen, Anforderungen, Inkrafttreten',
          '[UL Solutions: Prüf- und Zertifizierungsrahmen für Steckersolar](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — Programm auf Basis von UL 3700, angekündigt am 8. Januar 2026',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — Berichterstattung vom April 2026 zu Gesetz, Position des Versorgers und Zertifizierungsstand',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-fr.webp',
    title: "Le solaire de balcon est-il légal dans l'Utah ?",
    dateModified: '2026-11-20',
    seoTitle: 'Solaire de balcon légal en Utah ? HB 340 | Prompt Bites',
    metaDescription: 'La loi HB 340 de l\'Utah s\'applique depuis le 7 mai 2025 : solaire branchable jusqu\'à 1 200 W, sans frais ni accord, certification UL ou équivalente.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal dans l'Utah",
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: "Le solaire de balcon est-il légal dans l'Utah ?",
        answer: 'En vigueur. La loi HB 340 de l\'Utah (Solar Power Amendments) est entrée en vigueur le 7 mai 2025. Selon le texte promulgué, les « portable solar generation devices » conformes, jusqu\'à 1 200 watts et branchés sur une prise standard de 120 volts, sont exemptés des conventions de raccordement et des règles du programme de net metering, à condition d\'être certifiés par Underwriters Laboratories ou par un laboratoire d\'essai équivalent reconnu au niveau national.',
        bullets: [
          'HB 340 est en vigueur depuis le 7 mai 2025 (texte promulgué, Législature de l\'Utah) ; Grist décrit l\'Utah comme le premier État à autoriser le solaire branchable sur prise',
          'Jusqu\'à 1 200 W via une prise standard de 120 V ; le fournisseur ne peut exiger ni approbation, ni frais, ni équipement supplémentaire',
          'La certification par UL ou un laboratoire équivalent fait partie de la définition légale ; les systèmes complets certifiés restaient non confirmés dans les sources consultées',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi HB 340 de l\'Utah s\'applique depuis le 7 mai 2025 ; Grist la décrit comme la première loi de ce type aux États-Unis.',
          'Appareils éligibles : au plus 1 200 W, prise standard de 120 V, conformes au National Electrical Code, certifiés par UL ou un laboratoire équivalent et dotés d\'une fonction qui les empêche d\'alimenter le bâtiment lors d\'une coupure.',
          'Le fournisseur ne peut exiger ni approbation préalable ni frais, et les appareils éligibles ne relèvent pas du programme de net metering : ne comptez pas sur un crédit ni sur une rémunération pour l\'électricité injectée.',
          'Le texte exige une certification par UL ou un laboratoire équivalent ; le programme UL 3700 a ouvert en janvier 2026 et les informations sur les produits certifiés divergent : vérifiez toute mention dans l\'annuaire de l\'organisme de certification.',
        ],
      },
      body1: {
        title: "Que prévoit la loi HB 340 dans l'Utah ?",
        content: [
          '<strong>La loi HB 340 de l\'Utah définit un « portable solar generation device » comme un dispositif photovoltaïque mobile d\'une puissance maximale de 1 200 watts, conçu pour être raccordé au réseau électrique d\'un bâtiment par une prise de courant alternatif standard de 120 volts, et certifié par Underwriters Laboratories ou par un laboratoire d\'essai équivalent reconnu au niveau national.</strong> Selon le texte promulgué, l\'appareil doit aussi respecter les normes de la version la plus récente du National Electrical Code et intégrer une fonction l\'empêchant d\'alimenter le réseau électrique du bâtiment lors d\'une coupure de courant. Les appareils éligibles sont exemptés des exigences de raccordement et de l\'obligation de signer une convention de raccordement, et ne sont pas soumis aux exigences du programme de net metering. Le fournisseur ne peut exiger ni approbation avant l\'installation ou l\'utilisation, ni frais, ni commandes ou équipements supplémentaires au-delà de ce qui est intégré à l\'appareil, et il n\'est pas responsable des dommages ou blessures causés par un tel appareil. Le texte ne prévoit aucune obligation de notification.',
          'Le texte ne contient aucune disposition sur les copropriétés (HOA) ni sur les propriétaires bailleurs : un bail ou un règlement de copropriété peut donc encore limiter l\'emplacement d\'un panneau. Selon Grist (avril 2026), Rocky Mountain Power n\'a pris aucune position sur le texte et a indiqué rester préoccupé par le fait que certains produits mis sur le marché pourraient ne pas satisfaire à ses exigences. Cette page est une information générale, pas un conseil juridique ; consultez la loi (Utah Code 54-15-601) et les règles locales.',
        ],
        columns: ['Champ', 'Utah HB 340'],
        rows: [
          { 'Champ': 'Entrée en vigueur', 'Utah HB 340': '7 mai 2025' },
          { 'Champ': 'Plafond de puissance', 'Utah HB 340': '1 200 W' },
          { 'Champ': 'Raccordement au réseau', 'Utah HB 340': 'Exempté ; ni approbation ni frais' },
          { 'Champ': 'Programme de net metering', 'Utah HB 340': 'Non concerné' },
          { 'Champ': 'Certification', 'Utah HB 340': 'UL ou labo équivalent' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Des kits certifiés sont-ils réellement disponibles ?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: "Vérifier le prix de l'EcoFlow STREAM Ultra sur Amazon",
          },
        ],
        content: [
          '<strong>La loi HB 340 exige une certification par UL ou par un laboratoire d\'essai équivalent reconnu au niveau national ; elle ne cite pas UL 3700.</strong> UL Solutions a annoncé le 8 janvier 2026 un programme d\'essais et de certification du solaire branchable fondé sur UL 3700. Les informations sur les produits certifiés divergent : Grist indiquait en avril 2026 qu\'aucun système branchable n\'était encore certifié par UL, et en juillet 2026 des médias ont décrit un micro-onduleur Hoymiles comme le premier produit conforme à UL 3700, l\'un d\'eux précisant ensuite qu\'il n\'était pas certifié par UL Solutions. Les sources divergeant, consultez l\'annuaire public de l\'organisme de certification et la fiche du produit avant d\'acheter ; PromptQuorum n\'a vérifié aucune certification de produit.',
          "<strong>Prêt à comparer du matériel concret ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu'un kit précis est certifié ou disponible dans l'Utah aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans l\'Utah',
        faqs: [
          {
            q: 'Ma copropriété (HOA) en Utah peut-elle interdire le solaire de balcon ?',
            a: 'Peut-être. Le texte de HB 340 ne contient aucune disposition sur les HOA ni sur les bailleurs ; vérifiez donc votre bail ou le règlement de copropriété avant l\'installation. Pour voir comment un autre État traite la question, consultez la page <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi du Colorado sur le solaire de balcon</a>.',
          },
          {
            q: 'Dois-je déclarer mon installation à mon fournisseur d\'électricité en Utah ?',
            a: 'Selon le texte promulgué, les appareils éligibles sont exemptés des conventions de raccordement, et le fournisseur ne peut exiger ni approbation, ni frais, ni équipement supplémentaire ; il ne prévoit pas d\'obligation de notification. En cas de doute, interrogez votre fournisseur.',
          },
          {
            q: 'Puis-je être rémunéré pour l\'électricité excédentaire ?',
            a: 'Ne comptez pas dessus. HB 340 prévoit que les appareils éligibles ne sont pas soumis aux exigences du programme de net metering, et Grist rapporte que la loi interdit aux propriétaires de demander un paiement pour l\'électricité réinjectée dans le réseau.',
          },
          {
            q: 'Un certificat UL 3700 est-il obligatoire en Utah ?',
            a: 'La loi exige une certification par UL ou par un laboratoire d\'essai équivalent reconnu au niveau national et ne cite pas de norme précise. UL 3700 est la norme sur laquelle repose le programme annoncé par UL Solutions le 8 janvier 2026 ; vérifiez le certificat ou la fiche d\'annuaire du produit que vous comptez acheter.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Législature de l\'Utah : H.B. 340 Solar Power Amendments, texte promulgué](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — définition, exemptions, exigences, entrée en vigueur',
          '[UL Solutions : cadre d\'essais et de certification du solaire branchable](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programme fondé sur UL 3700, annoncé le 8 janvier 2026',
          '[Grist : How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — reportage d\'avril 2026 sur la loi, la position du fournisseur et l\'état des certifications',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-ja.webp',
    title: 'ユタ州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-11-20',
    seoTitle: 'ユタ州バルコニーソーラー合法？ | Prompt Bites',
    metaDescription: 'ユタ州HB 340は2025年5月7日から適用。1,200Wまでのプラグイン式ソーラーは電力会社の承認や手数料が不要で、UL等の認証が必要。法的助言ではありません。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'ユタ州でバルコニーソーラーが合法かどうかを確認している米国の賃貸居住者・持ち家所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'ユタ州でバルコニーソーラーは合法ですか？',
        answer: '施行済みです。ユタ州のHB 340（Solar Power Amendments）は2025年5月7日に施行されました。成立した法案の本文によると、標準的な120ボルトのコンセントに接続する最大1,200ワットの要件を満たす「portable solar generation device」は、Underwriters Laboratoriesまたは同等の全国的に認められた試験機関の認証を受けていることを条件に、電力会社との系統連系契約およびネットメータリング制度の規則の対象外とされています。',
        bullets: [
          'HB 340は2025年5月7日に施行（成立法案、ユタ州議会）。Gristはユタ州を、コンセントに差し込むソーラーを認めた最初の州と説明しています',
          '標準的な120Vコンセントで最大1,200W。電力会社は承認・手数料・追加機器を要求できません',
          'ULまたは同等の試験機関の認証が法律上の定義に含まれます。認証済みの完成システムは、確認した情報源では未確認のままでした',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ユタ州HB 340は2025年5月7日から適用されており、Gristは米国で初の同種の法律と説明しています。',
          '対象機器：1,200W以下、標準の120Vコンセント、全米電気規程（NEC）に適合、ULまたは同等の試験機関の認証を受け、停電時に建物へ給電しない機能を備えること。',
          '電力会社は事前承認や手数料を要求できず、対象機器はネットメータリング制度の対象外です。系統へ送った電力のクレジットや支払いを期待しないでください。',
          '法律はULまたは同等の試験機関による認証を求めています。UL 3700のプログラムは2026年1月に開始され、認証済み製品に関する報道は食い違っているため、認証機関自身のディレクトリで掲載を確認してください。',
        ],
      },
      body1: {
        title: 'ユタ州のHB 340が求める要件とは？',
        content: [
          '<strong>ユタ州のHB 340は「portable solar generation device」を、最大出力が1,200ワットで、標準的な120ボルト交流コンセントを通じて建物の電気系統に接続するよう設計された移動可能な太陽光発電機器であり、Underwriters Laboratoriesまたは同等の全国的に認められた試験機関の認証を受けたものと定義しています。</strong>成立した法案の本文によると、この機器は最新版の全米電気規程（National Electrical Code）の基準も満たし、停電時に建物の電気系統へ給電しないための機能を備える必要があります。要件を満たす機器は、系統連系要件と系統連系契約の締結義務の対象外で、ネットメータリング制度の要件も適用されません。電力会社は、設置や使用の前の承認、手数料や料金、機器に組み込まれたもの以外の追加の制御装置や機器を要求できず、こうした機器による損害や傷害について責任を負いません。法案の本文には通知義務の定めはありません。',
          '法案の本文にはHOA（住宅管理組合）や家主に関する規定がないため、賃貸契約やHOAの合意によって、パネルの設置場所が制限される可能性があります。Grist（2026年4月）によると、Rocky Mountain Powerは法案について立場を表明せず、市場に出る一部の製品が法の要件を満たさない可能性への懸念を示しています。このページは一般的な情報であり、法的助言ではありません。法令（Utah Code 54-15-601）と地域の規則をご確認ください。',
        ],
        columns: ['項目', 'Utah HB 340'],
        rows: [
          { '項目': '施行日', 'Utah HB 340': '2025年5月7日' },
          { '項目': '出力上限', 'Utah HB 340': '1,200W' },
          { '項目': '系統連系', 'Utah HB 340': '対象外（承認・手数料不要）' },
          { '項目': 'ネットメータリング制度', 'Utah HB 340': '対象外' },
          { '項目': '認証', 'Utah HB 340': 'ULまたは同等の試験機関' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '認証済みキットは実際に販売されているのか？',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'AmazonでEcoFlow STREAM Ultraの価格を確認',
          },
        ],
        content: [
          '<strong>HB 340が求めるのはULまたは同等の全国的に認められた試験機関による認証で、UL 3700という名称は挙げていません。</strong>UL Solutionsは2026年1月8日、UL 3700に基づくプラグイン式ソーラーの試験・認証プログラムを発表しました。認証済み製品に関する報道は食い違っています。Gristは2026年4月に、UL認証を受けたプラグイン式システムはまだないと報じ、2026年7月にはHoymilesのマイクロインバーターを最初のUL 3700準拠製品と伝える媒体が現れましたが、後にUL Solutionsの認証ではないと訂正した媒体もあります。情報源が一致しないため、購入前に認証機関の公開ディレクトリと製品の掲載を確認してください。PromptQuorumは製品の認証を確認していません。',
          '<strong>実際の製品を比較する準備はできましたか？</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください — これらは単なる製品リンクであり、特定のキットがユタ州で認証済み・販売中であると主張するものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ユタ州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'ユタ州のHOAはバルコニーソーラーを禁止できますか？',
            a: '可能性があります。HB 340の本文にはHOAや家主に関する規定がないため、設置前に賃貸契約やHOAの規約を確認してください。他の州の扱いは<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>のページをご覧ください。',
          },
          {
            q: 'ユタ州で電力会社にシステムを届け出る必要はありますか？',
            a: '成立した法案によると、対象機器は系統連系契約の対象外で、電力会社は承認・手数料・追加機器を要求できません。通知義務の定めはありません。不明な点は電力会社に確認してください。',
          },
          {
            q: '発電した余剰電力に対して支払いを受けられますか？',
            a: '期待しないでください。HB 340は、対象機器がネットメータリング制度の要件の対象外と定めており、Gristは、系統へ戻した電力の支払いを所有者が求めることを法律が禁じていると報じています。',
          },
          {
            q: 'ユタ州ではUL 3700の証明書が必須ですか？',
            a: '法律はULまたは同等の全国的に認められた試験機関による認証を求めており、特定の規格名は挙げていません。UL 3700は、UL Solutionsが2026年1月8日に発表したプログラムの基礎となる規格です。購入予定の製品の証明書またはディレクトリの掲載を確認してください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[ユタ州議会：H.B. 340 Solar Power Amendments（成立法案）](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — 定義、適用除外、要件、施行日',
          '[UL Solutions：プラグイン式ソーラーの試験・認証の枠組み](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700に基づくプログラム（2026年1月8日発表）',
          '[Grist：How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — 2026年4月の法律・電力会社の立場・認証状況に関する報道',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-zh.webp',
    title: '犹他州的阳台太阳能合法吗？',
    dateModified: '2026-11-20',
    seoTitle: '犹他州阳台太阳能合法吗？ | Prompt Bites',
    metaDescription: '犹他州HB 340自2025年5月7日起适用：1,200瓦以内的插电式太阳能无需电力公司批准或付费，需UL或等效实验室认证。本文非法律意见。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在犹他州是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '犹他州的阳台太阳能合法吗？',
        answer: '已生效。犹他州HB 340法案（Solar Power Amendments）于2025年5月7日生效。根据已通过的法案文本，符合条件的“portable solar generation device”（最大功率不超过1,200瓦、接入标准120伏插座）若经Underwriters Laboratories或同等的全国认可检测实验室认证，则免于签订并网协议，也不受净计量计划规则约束。',
        bullets: [
          'HB 340于2025年5月7日生效（已通过的法案文本，犹他州议会）；Grist称犹他州是首个允许居民将太阳能直接插入插座的州',
          '通过标准120伏插座最高1,200瓦；电力公司不得要求批准、收费或额外设备',
          '由UL或同等实验室认证是法定定义的一部分；在我们查阅的资料中，经认证的完整系统仍未得到确认',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '犹他州HB 340自2025年5月7日起适用；Grist称其为美国首部同类法律。',
          '符合条件的设备：不超过1,200瓦、标准120伏插座、符合美国国家电气规范（NEC）、经UL或同等实验室认证，并具备停电时不向建筑供电的功能。',
          '电力公司不得要求事先批准或收费，符合条件的设备也不受净计量计划约束，因此不要指望并网电量获得抵扣或付款。',
          '法案要求UL或同等实验室的认证；UL 3700项目于2026年1月启动，关于已认证产品的报道互相矛盾，请在认证机构自己的名录中核实相关条目。',
        ],
      },
      body1: {
        title: '犹他州HB 340法案有哪些要求？',
        content: [
          '<strong>犹他州HB 340将“portable solar generation device”定义为：最大输出功率不超过1,200瓦、设计为通过标准120伏交流插座接入建筑电气系统、并经Underwriters Laboratories或同等的全国认可检测实验室认证的可移动光伏发电设备。</strong>根据已通过的法案文本，该设备还必须符合最新版《美国国家电气规范》（National Electrical Code）的标准，并具备在停电时防止向建筑电气系统供电的功能。符合条件的设备免于并网要求和签订并网协议的义务，也不受净计量计划要求约束。电力公司不得要求安装或使用前获得其批准、收取任何费用，或要求设备内置之外的额外控制装置或设备，并且对此类设备造成的损害或伤害不承担责任。法案文本未规定通知义务。',
          '法案文本不含关于业主委员会（HOA）或房东的规定，因此租约或HOA协议仍可能限制面板的安装位置。据Grist（2026年4月）报道，Rocky Mountain Power对该法案未表态，并表示仍担心部分进入市场的产品可能不符合法案要求。本页为一般性信息，不构成法律意见；请查阅法条（Utah Code 54-15-601）和当地规定。',
        ],
        columns: ['项目', 'Utah HB 340'],
        rows: [
          { '项目': '生效日期', 'Utah HB 340': '2025年5月7日' },
          { '项目': '功率上限', 'Utah HB 340': '1,200瓦' },
          { '项目': '并网', 'Utah HB 340': '免除；无需批准或付费' },
          { '项目': '净计量计划', 'Utah HB 340': '不适用' },
          { '项目': '认证', 'Utah HB 340': 'UL或同等实验室' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '认证套件真的已经上市了吗？',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: '在 Amazon 查看 EcoFlow STREAM Ultra 价格',
          },
        ],
        content: [
          '<strong>HB 340要求由UL或同等的全国认可检测实验室认证，并未点名UL 3700。</strong>UL Solutions于2026年1月8日宣布了基于UL 3700的插电式太阳能测试与认证项目。关于已认证产品的报道互相矛盾：Grist在2026年4月报道称尚无插电式系统获得UL认证；2026年7月有媒体称Hoymiles的微型逆变器是首款符合UL 3700的产品，其中一家媒体随后更正称其并未获得UL Solutions认证。由于资料不一致，购买前请核查认证机构的公开名录和产品条目；PromptQuorum未核实任何产品认证。',
          '<strong>准备好比较实际硬件了吗？</strong> 请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接，并不代表任何特定套件已在犹他州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于犹他州阳台太阳能的快速问答',
        faqs: [
          {
            q: '犹他州的HOA可以禁止阳台太阳能吗？',
            a: '有可能。HB 340的法案文本不含关于HOA或房东的规定，安装前请查看租约或HOA规约。如需了解其他州如何处理，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法</a>页面。',
          },
          {
            q: '在犹他州需要向电力公司登记我的系统吗？',
            a: '根据已通过的法案文本，符合条件的设备免于并网协议，电力公司不得要求批准、收费或额外设备；文本未规定通知义务。如有疑问，请咨询您的电力公司。',
          },
          {
            q: '多余的发电量能获得付款吗？',
            a: '不要指望。HB 340规定符合条件的设备不受净计量计划要求约束，Grist报道称该法律禁止所有者就回送电网的电力要求付款。',
          },
          {
            q: '在犹他州必须有UL 3700证书吗？',
            a: '法律要求由UL或同等的全国认可检测实验室认证，并未指明具体标准。UL 3700是UL Solutions于2026年1月8日宣布的项目所依据的标准；请核查您打算购买的产品的证书或名录条目。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[犹他州议会：H.B. 340 Solar Power Amendments（已通过文本）](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — 定义、豁免、要求、生效日期',
          '[UL Solutions：插电式太阳能测试与认证框架](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — 基于UL 3700的项目（2026年1月8日宣布）',
          '[Grist：How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — 2026年4月关于该法律、电力公司立场和认证状况的报道',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Utah?',
    dateModified: '2026-11-20',
    seoTitle: '¿Es legal el solar de balcón en Utah? | Prompt Bites',
    metaDescription: 'La ley HB 340 de Utah rige desde el 7 de mayo de 2025: solar enchufable hasta 1200 W, sin aprobación ni tarifas, con certificación UL o equivalente.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Utah',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Utah?',
        answer: 'En vigor. La ley HB 340 de Utah (Solar Power Amendments) entró en vigor el 7 de mayo de 2025. Según el texto aprobado, los «portable solar generation devices» que cumplan los requisitos, de hasta 1200 vatios y conectados a una toma estándar de 120 voltios, quedan exentos de los acuerdos de interconexión y de las reglas del programa de net metering, siempre que estén certificados por Underwriters Laboratories o por un laboratorio de pruebas equivalente reconocido a nivel nacional.',
        bullets: [
          'HB 340 entró en vigor el 7 de mayo de 2025 (texto aprobado, Legislatura de Utah); Grist describe a Utah como el primer estado que permite enchufar solar a una toma de corriente',
          'Hasta 1200 W mediante una toma estándar de 120 V; la eléctrica no puede exigir aprobación, tarifas ni equipos adicionales',
          'La certificación por UL o un laboratorio equivalente forma parte de la definición legal; los sistemas completos certificados seguían sin confirmarse en las fuentes que revisamos',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley HB 340 de Utah se aplica desde el 7 de mayo de 2025; Grist la describe como la primera ley de este tipo en EE. UU.',
          'Dispositivos que cumplen: máximo 1200 W, toma estándar de 120 V, conformes con el National Electrical Code, certificados por UL o un laboratorio equivalente y con una función que impida energizar el edificio durante un apagón.',
          'La eléctrica no puede exigir aprobación previa ni tarifas, y los dispositivos que cumplen no están sujetos al programa de net metering, así que no esperes crédito ni pago por la energía exportada.',
          'La ley exige certificación por UL o un laboratorio equivalente; el programa UL 3700 se abrió en enero de 2026 y las noticias sobre productos certificados se contradicen, así que verifica cualquier mención en el directorio del certificador.',
        ],
      },
      body1: {
        title: '¿Qué exige la ley HB 340 en Utah?',
        content: [
          '<strong>La ley HB 340 de Utah define un «portable solar generation device» como un dispositivo fotovoltaico móvil con una potencia máxima de 1200 vatios, diseñado para conectarse al sistema eléctrico de un edificio mediante una toma estándar de corriente alterna de 120 voltios y certificado por Underwriters Laboratories o por un laboratorio de pruebas equivalente reconocido a nivel nacional.</strong> Según el texto aprobado, el dispositivo debe cumplir además las normas de la versión más reciente del National Electrical Code e incluir una función que impida energizar el sistema eléctrico del edificio durante un apagón. Los dispositivos que cumplen están exentos de los requisitos de interconexión y de la obligación de firmar un acuerdo de interconexión, y no están sujetos a los requisitos del programa de net metering. La eléctrica no puede exigir aprobación antes de la instalación o el uso, ninguna tarifa o cargo, ni controles o equipos adicionales a los integrados en el dispositivo, y no responde por daños o lesiones causados por un dispositivo así. El texto no establece ninguna obligación de notificación.',
          'El texto no contiene disposiciones sobre comunidades de propietarios (HOA) ni sobre arrendadores, así que un contrato de alquiler o un acuerdo de la HOA aún puede limitar dónde montar un panel. Según Grist (abril de 2026), Rocky Mountain Power no tomó posición sobre el proyecto y ha dicho que sigue preocupada de que algunos productos que llegan al mercado no cumplan sus requisitos. Esta página es información general, no asesoría jurídica; consulta la ley (Utah Code 54-15-601) y las normas locales.',
        ],
        columns: ['Campo', 'Utah HB 340'],
        rows: [
          { 'Campo': 'Entrada en vigor', 'Utah HB 340': '7 de mayo de 2025' },
          { 'Campo': 'Límite de potencia', 'Utah HB 340': '1200 W' },
          { 'Campo': 'Interconexión con la red', 'Utah HB 340': 'Exento; sin aprobación ni tarifa' },
          { 'Campo': 'Programa de net metering', 'Utah HB 340': 'No sujeto' },
          { 'Campo': 'Certificación', 'Utah HB 340': 'UL o laboratorio equivalente' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Ya existen realmente kits certificados disponibles?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Consulta el precio del EcoFlow STREAM Ultra en Amazon',
          },
        ],
        content: [
          '<strong>La ley HB 340 exige certificación por UL o por un laboratorio de pruebas equivalente reconocido a nivel nacional; no nombra UL 3700.</strong> UL Solutions anunció el 8 de enero de 2026 un programa de pruebas y certificación para solar enchufable basado en UL 3700. Las noticias sobre productos certificados se contradicen: Grist informó en abril de 2026 de que aún ningún sistema enchufable estaba certificado por UL, y en julio de 2026 algunos medios describieron un microinversor de Hoymiles como el primer producto conforme a UL 3700, aunque uno de ellos corrigió después que no estaba certificado por UL Solutions. Como las fuentes discrepan, consulta el directorio público del certificador y la ficha del producto antes de comprar; PromptQuorum no ha verificado ninguna certificación de producto.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en Utah hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en Utah',
        faqs: [
          {
            q: '¿Puede mi HOA en Utah prohibir la energía solar de balcón?',
            a: 'Posiblemente. El texto de HB 340 no contiene disposiciones sobre HOA ni arrendadores, así que revisa tu contrato de alquiler o el reglamento de la HOA antes de instalar. Para ver cómo lo trata otro estado, consulta la página <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Tengo que registrar mi sistema en la eléctrica en Utah?',
            a: 'Según el texto aprobado, los dispositivos que cumplen están exentos de acuerdos de interconexión y la eléctrica no puede exigir aprobación, tarifas ni equipos adicionales; no establece obligación de notificación. Si tienes dudas, pregunta a tu eléctrica.',
          },
          {
            q: '¿Me pagan por el excedente que genero?',
            a: 'No cuentes con ello. HB 340 establece que los dispositivos que cumplen no están sujetos a los requisitos del programa de net metering, y Grist informa de que la ley impide a los propietarios reclamar un pago por la energía enviada a la red.',
          },
          {
            q: '¿Hace falta un certificado UL 3700 en Utah?',
            a: 'La ley exige certificación por UL o por un laboratorio de pruebas equivalente reconocido a nivel nacional y no nombra una norma concreta. UL 3700 es la norma en la que se basa el programa que UL Solutions anunció el 8 de enero de 2026; comprueba el certificado o la ficha del directorio del producto que quieras comprar.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Legislatura de Utah: H.B. 340 Solar Power Amendments, texto aprobado](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — definición, exenciones, requisitos, entrada en vigor',
          '[UL Solutions: marco de pruebas y certificación para solar enchufable](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programa basado en UL 3700, anunciado el 8 de enero de 2026',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — reportaje de abril de 2026 sobre la ley, la posición de la eléctrica y el estado de las certificaciones',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal em Utah?',
    dateModified: '2026-11-20',
    seoTitle: 'Solar de varanda é legal em Utah? HB 340 | Prompt Bites',
    metaDescription: 'A lei HB 340 de Utah vale desde 7 de maio de 2025: solar plug-in até 1.200 W, sem aprovação nem taxas da concessionária, certificação UL ou equivalente.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Utah',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Utah?',
        answer: 'Em vigor. A lei HB 340 de Utah (Solar Power Amendments) entrou em vigor em 7 de maio de 2025. Segundo o texto aprovado, os «portable solar generation devices» que atendem aos requisitos, de até 1.200 watts e ligados a uma tomada padrão de 120 volts, ficam isentos de acordos de interconexão e das regras do programa de net metering, desde que certificados pela Underwriters Laboratories ou por um laboratório de ensaios equivalente reconhecido nacionalmente.',
        bullets: [
          'A HB 340 entrou em vigor em 7 de maio de 2025 (texto aprovado, Legislatura de Utah); a Grist descreve Utah como o primeiro estado a permitir ligar solar em tomadas',
          'Até 1.200 W por uma tomada padrão de 120 V; a concessionária não pode exigir aprovação, taxas ou equipamentos adicionais',
          'A certificação pela UL ou por um laboratório equivalente faz parte da definição legal; sistemas completos certificados continuavam sem confirmação nas fontes que consultamos',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A HB 340 de Utah vale desde 7 de maio de 2025; a Grist a descreve como a primeira lei desse tipo nos EUA.',
          'Dispositivos que atendem: no máximo 1.200 W, tomada padrão de 120 V, conformes ao National Electrical Code, certificados pela UL ou por laboratório equivalente e com uma função que impede de energizar o edifício durante uma queda de energia.',
          'A concessionária não pode exigir aprovação prévia nem taxas, e os dispositivos que atendem não estão sujeitos ao programa de net metering; portanto, não conte com crédito ou pagamento pela energia exportada.',
          'A lei exige certificação pela UL ou por laboratório equivalente; o programa UL 3700 foi aberto em janeiro de 2026 e os relatos sobre produtos certificados divergem, então verifique qualquer registro no diretório do certificador.',
        ],
      },
      body1: {
        title: 'O que a HB 340 exige em Utah?',
        content: [
          '<strong>A HB 340 de Utah define um «portable solar generation device» como um dispositivo fotovoltaico móvel com potência máxima de 1.200 watts, projetado para se conectar ao sistema elétrico de uma edificação por uma tomada padrão de corrente alternada de 120 volts e certificado pela Underwriters Laboratories ou por um laboratório de ensaios equivalente reconhecido nacionalmente.</strong> Segundo o texto aprovado, o dispositivo também deve cumprir as normas da versão mais recente do National Electrical Code e ter uma função que impeça de energizar o sistema elétrico da edificação durante uma queda de energia. Os dispositivos que atendem estão isentos dos requisitos de interconexão e da obrigação de assinar um acordo de interconexão, e não estão sujeitos aos requisitos do programa de net metering. A concessionária não pode exigir aprovação antes da instalação ou do uso, nenhuma taxa ou cobrança, nem controles ou equipamentos adicionais além dos integrados ao dispositivo, e não responde por danos ou lesões causados por esse dispositivo. O texto não prevê obrigação de notificação.',
          'O texto não traz disposições sobre condomínios (HOA) nem sobre locadores, então um contrato de locação ou um acordo da HOA ainda pode limitar onde você instala um painel. Segundo a Grist (abril de 2026), a Rocky Mountain Power não tomou posição sobre o projeto e disse continuar preocupada com a possibilidade de que alguns produtos que chegam ao mercado não atendam aos requisitos da lei. Esta página é informação geral, não aconselhamento jurídico; consulte a lei (Utah Code 54-15-601) e as regras locais.',
        ],
        columns: ['Campo', 'Utah HB 340'],
        rows: [
          { 'Campo': 'Entrada em vigor', 'Utah HB 340': '7 de maio de 2025' },
          { 'Campo': 'Limite de potência', 'Utah HB 340': '1.200 W' },
          { 'Campo': 'Interconexão com a rede', 'Utah HB 340': 'Isento; sem aprovação ou taxa' },
          { 'Campo': 'Programa de net metering', 'Utah HB 340': 'Não sujeito' },
          { 'Campo': 'Certificação', 'Utah HB 340': 'UL ou laboratório equivalente' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Kits certificados já estão realmente disponíveis?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Confira o preço do EcoFlow STREAM Ultra na Amazon',
          },
        ],
        content: [
          '<strong>A HB 340 exige certificação pela UL ou por um laboratório de ensaios equivalente reconhecido nacionalmente; ela não cita a UL 3700.</strong> A UL Solutions anunciou em 8 de janeiro de 2026 um programa de ensaios e certificação para solar plug-in baseado na UL 3700. Os relatos sobre produtos certificados divergem: a Grist informou em abril de 2026 que nenhum sistema plug-in havia sido certificado pela UL, e em julho de 2026 veículos descreveram um microinversor da Hoymiles como o primeiro produto em conformidade com a UL 3700, com um deles corrigindo depois que ele não era certificado pela UL Solutions. Como as fontes divergem, consulte o diretório público do certificador e o registro do produto antes de comprar; a PromptQuorum não verificou nenhuma certificação de produto.',
          '<strong>Pronto para comparar hardware real?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível em Utah hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Utah',
        faqs: [
          {
            q: 'Minha HOA em Utah pode proibir energia solar de varanda?',
            a: 'Possivelmente. O texto da HB 340 não traz disposições sobre HOA nem sobre locadores, então confira seu contrato de locação ou o regulamento da HOA antes de instalar. Para ver como outro estado trata o assunto, veja a página <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'Preciso registrar meu sistema na concessionária em Utah?',
            a: 'Segundo o texto aprovado, os dispositivos que atendem estão isentos de acordos de interconexão e a concessionária não pode exigir aprovação, taxas ou equipamentos adicionais; o texto não prevê obrigação de notificação. Em caso de dúvida, pergunte à sua concessionária.',
          },
          {
            q: 'Posso receber pelo excedente que gero?',
            a: 'Não conte com isso. A HB 340 determina que os dispositivos que atendem não estão sujeitos aos requisitos do programa de net metering, e a Grist informa que a lei impede os proprietários de pedir pagamento pela energia enviada à rede.',
          },
          {
            q: 'Um certificado UL 3700 é obrigatório em Utah?',
            a: 'A lei exige certificação pela UL ou por um laboratório de ensaios equivalente reconhecido nacionalmente e não cita uma norma específica. A UL 3700 é a norma por trás do programa que a UL Solutions anunciou em 8 de janeiro de 2026; confira o certificado ou o registro no diretório do produto que pretende comprar.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Legislatura de Utah: H.B. 340 Solar Power Amendments, texto aprovado](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — definição, isenções, requisitos, entrada em vigor',
          '[UL Solutions: estrutura de ensaios e certificação para solar plug-in](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programa baseado na UL 3700, anunciado em 8 de janeiro de 2026',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — reportagem de abril de 2026 sobre a lei, a posição da concessionária e o estado das certificações',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟',
    dateModified: '2026-11-20',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟ HB 340',
    metaDescription: 'يسري HB 340 في يوتا منذ 7 مايو 2025: طاقة شمسية قابلة للتوصيل حتى 1,200 واط دون موافقة أو رسوم من الشركة، مع اعتماد UL أو معادل. ليست استشارة قانونية.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون والملاك في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في يوتا',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟',
        answer: 'ساري المفعول. دخل قانون HB 340 في يوتا (Solar Power Amendments) حيّز التنفيذ في 7 مايو 2025. وبحسب نص مشروع القانون المُقرّ، تُعفى «portable solar generation devices» المستوفية للشروط، بقدرة حتى 1,200 واط والموصولة بمقبس قياسي بجهد 120 فولت، من اتفاقيات الربط بالشبكة ومن قواعد برنامج القياس الصافي (net metering)، بشرط اعتمادها من Underwriters Laboratories أو من مختبر اختبار معادل معترف به وطنيًا.',
        bullets: [
          'دخل HB 340 حيّز التنفيذ في 7 مايو 2025 (النص المُقرّ، المجلس التشريعي في يوتا)؛ وتصف Grist يوتا بأنها أول ولاية تسمح بتوصيل الطاقة الشمسية بالمقابس',
          'حتى 1,200 واط عبر مقبس قياسي بجهد 120 فولت؛ ولا يجوز لشركة الكهرباء اشتراط موافقة أو رسوم أو معدات إضافية',
          'الاعتماد من UL أو من مختبر معادل جزء من التعريف القانوني؛ وظلت الأنظمة الكاملة المعتمدة غير مؤكدة في المصادر التي راجعناها',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يسري HB 340 في يوتا منذ 7 مايو 2025؛ وتصفه Grist بأنه أول قانون من نوعه في الولايات المتحدة.',
          'الأجهزة المستوفية للشروط: بقدرة لا تتجاوز 1,200 واط، ومقبس قياسي 120 فولت، ومتوافقة مع National Electrical Code، ومعتمدة من UL أو مختبر معادل، ومزوّدة بميزة تمنعها من تغذية المبنى أثناء انقطاع الكهرباء.',
          'لا يجوز لشركة الكهرباء اشتراط موافقة مسبقة أو رسوم، ولا تخضع الأجهزة المستوفية لبرنامج القياس الصافي، فلا تتوقع رصيدًا أو دفعًا مقابل الطاقة المُصدَّرة.',
          'يشترط القانون اعتمادًا من UL أو مختبر معادل؛ وقد بدأ برنامج UL 3700 في يناير 2026 وتتضارب التقارير عن المنتجات المعتمدة، فتحقق من أي إدراج في دليل جهة الاعتماد نفسها.',
        ],
      },
      body1: {
        title: 'ما الذي يتطلبه قانون HB 340 في يوتا؟',
        content: [
          '<strong>يعرّف HB 340 في يوتا «portable solar generation device» بأنه جهاز كهروضوئي متنقل بقدرة قصوى 1,200 واط، مصمم للتوصيل بالنظام الكهربائي للمبنى عبر مقبس تيار متردد قياسي بجهد 120 فولت، ومعتمد من Underwriters Laboratories أو من مختبر اختبار معادل معترف به وطنيًا.</strong> وبحسب النص المُقرّ، يجب أن يستوفي الجهاز أيضًا معايير أحدث إصدار من National Electrical Code وأن يتضمن ميزة تمنعه من تغذية النظام الكهربائي للمبنى أثناء انقطاع التيار. وتُعفى الأجهزة المستوفية من متطلبات الربط ومن واجب توقيع اتفاقية ربط، ولا تخضع لمتطلبات برنامج القياس الصافي. ولا يجوز لشركة الكهرباء اشتراط موافقة قبل التركيب أو الاستخدام، أو أي رسوم، أو ضوابط أو معدات إضافية فوق ما هو مدمج في الجهاز، ولا تتحمل المسؤولية عن أي ضرر أو إصابة يسببها هذا الجهاز. ولا يحدد نص مشروع القانون أي التزام بالإخطار.',
          'لا يتضمن نص مشروع القانون أحكامًا بشأن اتحادات الملاك (HOA) أو المؤجّرين، لذا قد يظل عقد الإيجار أو اتفاق الـHOA يقيّد مكان تركيب اللوح. وبحسب Grist (أبريل 2026)، لم تتخذ Rocky Mountain Power موقفًا من مشروع القانون وقالت إنها ما زالت قلقة من أن بعض المنتجات التي تدخل السوق قد لا تستوفي متطلباته. هذه الصفحة معلومات عامة وليست استشارة قانونية؛ راجع القانون (Utah Code 54-15-601) والقواعد المحلية.',
        ],
        columns: ['الحقل', 'Utah HB 340'],
        rows: [
          { 'الحقل': 'تاريخ السريان', 'Utah HB 340': '7 مايو 2025' },
          { 'الحقل': 'الحد الأقصى للقدرة', 'Utah HB 340': '1,200 واط' },
          { 'الحقل': 'الربط بالشبكة', 'Utah HB 340': 'معفى؛ دون موافقة أو رسوم' },
          { 'الحقل': 'برنامج القياس الصافي', 'Utah HB 340': 'غير خاضع' },
          { 'الحقل': 'الاعتماد', 'Utah HB 340': 'UL أو مختبر معادل' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل تتوفر فعليًا مجموعات معتمدة حتى الآن؟',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'تحقق من سعر EcoFlow STREAM Ultra على أمازون',
          },
        ],
        content: [
          '<strong>يشترط HB 340 الاعتماد من UL أو من مختبر اختبار معادل معترف به وطنيًا، ولا يذكر UL 3700 بالاسم.</strong> أعلنت UL Solutions في 8 يناير 2026 برنامج اختبار واعتماد للطاقة الشمسية القابلة للتوصيل يستند إلى UL 3700. وتتضارب التقارير عن المنتجات المعتمدة: فقد ذكرت Grist في أبريل 2026 أنه لم يُعتمد بعد أي نظام قابل للتوصيل من UL، وفي يوليو 2026 وصفت وسائل إعلام عاكس دقيق (microinverter) من Hoymiles بأنه أول منتج متوافق مع UL 3700، ثم صحّحت إحداها لاحقًا بأنه غير معتمد من UL Solutions. ولأن المصادر متضاربة، راجع الدليل العام لجهة الاعتماد وإدراج المنتج قبل الشراء؛ ولم تتحقق PromptQuorum من أي اعتماد لمنتج.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في يوتا اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في يوتا',
        faqs: [
          {
            q: 'هل يمكن لاتحاد الملاك (HOA) في يوتا حظر الطاقة الشمسية للشرفات؟',
            a: 'ربما. لا يتضمن نص HB 340 أحكامًا بشأن الـHOA أو المؤجّرين، فراجع عقد الإيجار أو لوائح الـHOA قبل التركيب. ولمعرفة كيف تعالج ولاية أخرى الأمر، راجع صفحة <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل أحتاج إلى تسجيل نظامي لدى شركة الكهرباء في يوتا؟',
            a: 'وفق النص المُقرّ، تُعفى الأجهزة المستوفية من اتفاقيات الربط ولا يجوز لشركة الكهرباء اشتراط موافقة أو رسوم أو معدات إضافية؛ ولا ينص على التزام بالإخطار. وإن شككت فاسأل شركة الكهرباء.',
          },
          {
            q: 'هل يمكنني الحصول على مقابل للطاقة الفائضة التي أولّدها؟',
            a: 'لا تعتمد على ذلك. ينص HB 340 على أن الأجهزة المستوفية لا تخضع لمتطلبات برنامج القياس الصافي، وتفيد Grist بأن القانون يمنع المالكين من طلب دفع مقابل الطاقة المُعادة إلى الشبكة.',
          },
          {
            q: 'هل شهادة UL 3700 إلزامية في يوتا؟',
            a: 'يشترط القانون الاعتماد من UL أو من مختبر اختبار معادل معترف به وطنيًا ولا يسمّي معيارًا بعينه. و UL 3700 هو المعيار الذي يستند إليه البرنامج الذي أعلنته UL Solutions في 8 يناير 2026؛ فتحقق من الشهادة أو من إدراج المنتج الذي تنوي شراءه في الدليل.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[المجلس التشريعي في يوتا: H.B. 340 Solar Power Amendments، النص المُقرّ](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — التعريف والإعفاءات والمتطلبات وتاريخ السريان',
          '[UL Solutions: إطار الاختبار والاعتماد للطاقة الشمسية القابلة للتوصيل](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — برنامج يستند إلى UL 3700 أُعلن في 8 يناير 2026',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — تقرير أبريل 2026 عن القانون وموقف شركة الكهرباء وحالة الاعتماد',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-utah-overview-hero-ko.webp',
    title: '유타주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-11-20',
    seoTitle: '유타주 발코니 태양광은 합법? HB 340 | Prompt Bites',
    metaDescription: '유타주 HB 340은 2025년 5월 7일부터 적용됩니다. 1,200W 이하 플러그인 태양광은 전력회사 승인·수수료가 없고 UL 등 인증이 필요합니다. 법률 자문 아님.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '유타주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '유타주에서 발코니 태양광은 합법입니까?',
        answer: '시행 중입니다. 유타주 HB 340(Solar Power Amendments)은 2025년 5월 7일에 시행되었습니다. 통과된 법안 본문에 따르면, 표준 120볼트 콘센트에 연결되는 최대 1,200와트의 요건을 충족한 \'portable solar generation device\'는 Underwriters Laboratories 또는 이에 상응하는 전국적으로 인정된 시험기관의 인증을 받은 경우 계통연계 계약과 넷 미터링 프로그램 규정의 적용을 받지 않습니다.',
        bullets: [
          'HB 340은 2025년 5월 7일 시행(통과된 법안, 유타주 의회). Grist는 유타주를 콘센트에 태양광을 꽂아 쓰도록 허용한 최초의 주로 설명합니다',
          '표준 120V 콘센트로 최대 1,200W. 전력회사는 승인, 수수료, 추가 장비를 요구할 수 없습니다',
          'UL 또는 이에 상응하는 시험기관의 인증이 법적 정의에 포함됩니다. 확인한 자료에서는 인증된 완제품 시스템이 여전히 확인되지 않았습니다',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '유타주 HB 340은 2025년 5월 7일부터 적용되며, Grist는 미국 최초의 같은 종류의 법으로 설명합니다.',
          '대상 기기: 1,200W 이하, 표준 120V 콘센트, 전미전기규정(NEC) 준수, UL 또는 이에 상응하는 시험기관 인증, 정전 시 건물에 전력을 공급하지 않는 기능 보유.',
          '전력회사는 사전 승인이나 수수료를 요구할 수 없고, 대상 기기는 넷 미터링 프로그램의 적용을 받지 않으므로 계통으로 보낸 전력에 대한 크레딧이나 대금을 기대하지 마십시오.',
          '법안은 UL 또는 이에 상응하는 시험기관의 인증을 요구합니다. UL 3700 프로그램은 2026년 1월에 시작되었고 인증 제품에 관한 보도는 엇갈리므로, 인증기관의 자체 디렉터리에서 등재 여부를 확인하십시오.',
        ],
      },
      body1: {
        title: '유타주 HB 340이 요구하는 사항은 무엇입니까?',
        content: [
          '<strong>유타주 HB 340은 \'portable solar generation device\'를 최대 출력이 1,200와트이고, 표준 120볼트 교류 콘센트를 통해 건물의 전기 시스템에 연결하도록 설계되었으며, Underwriters Laboratories 또는 이에 상응하는 전국적으로 인정된 시험기관의 인증을 받은 이동식 태양광 발전 기기로 정의합니다.</strong> 통과된 법안 본문에 따르면 이 기기는 최신 버전의 전미전기규정(National Electrical Code) 기준도 충족해야 하며, 정전 시 건물의 전기 시스템에 전력을 공급하지 않도록 하는 기능을 갖춰야 합니다. 요건을 충족한 기기는 계통연계 요건과 계통연계 계약 체결 의무가 면제되며 넷 미터링 프로그램 요건의 적용도 받지 않습니다. 전력회사는 설치나 사용 전의 승인, 어떠한 수수료나 요금, 기기에 내장된 것 이상의 추가 제어 장치나 장비를 요구할 수 없으며, 이러한 기기로 인한 손해나 부상에 대해 책임을 지지 않습니다. 법안 본문에는 통보 의무가 규정되어 있지 않습니다.',
          '법안 본문에는 HOA(주택 소유자 협회)나 임대인에 관한 규정이 없으므로, 임대 계약이나 HOA 합의가 패널 설치 위치를 제한할 수 있습니다. Grist(2026년 4월)에 따르면 Rocky Mountain Power는 법안에 대해 입장을 밝히지 않았으며, 시장에 나오는 일부 제품이 법안의 요건을 충족하지 못할 수 있다는 우려가 여전하다고 밝혔습니다. 이 페이지는 일반 정보이며 법률 자문이 아닙니다. 법령(Utah Code 54-15-601)과 지역 규정을 확인하십시오.',
        ],
        columns: ['항목', 'Utah HB 340'],
        rows: [
          { '항목': '시행일', 'Utah HB 340': '2025년 5월 7일' },
          { '항목': '출력 상한', 'Utah HB 340': '1,200W' },
          { '항목': '계통연계', 'Utah HB 340': '면제(승인·수수료 없음)' },
          { '항목': '넷 미터링 프로그램', 'Utah HB 340': '적용 안 됨' },
          { '항목': '인증', 'Utah HB 340': 'UL 또는 동등 시험기관' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '인증된 키트는 실제로 판매되고 있습니까?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Amazon에서 EcoFlow STREAM Ultra 가격 확인하기',
          },
        ],
        content: [
          '<strong>HB 340은 UL 또는 이에 상응하는 전국적으로 인정된 시험기관의 인증을 요구하며, UL 3700을 명시하지는 않습니다.</strong> UL Solutions는 2026년 1월 8일 UL 3700에 기반한 플러그인 태양광 시험·인증 프로그램을 발표했습니다. 인증 제품에 관한 보도는 엇갈립니다. Grist는 2026년 4월 아직 UL 인증을 받은 플러그인 시스템이 없다고 보도했고, 2026년 7월에는 Hoymiles 마이크로인버터를 최초의 UL 3700 준수 제품으로 전한 매체가 있었으나 이후 UL Solutions 인증은 아니라고 정정한 매체도 있습니다. 자료가 일치하지 않으므로 구매 전에 인증기관의 공개 디렉터리와 제품 등재를 확인하십시오. PromptQuorum은 어떤 제품의 인증도 검증하지 않았습니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨나요?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하세요 — 이는 단순한 제품 링크일 뿐, 특정 키트가 유타주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '유타주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '유타주의 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '가능성이 있습니다. HB 340 본문에는 HOA나 임대인에 관한 규정이 없으므로 설치 전에 임대 계약이나 HOA 규약을 확인하십시오. 다른 주의 처리 방식은 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법</a> 페이지를 참고하십시오.',
          },
          {
            q: '유타주에서 전력회사에 시스템을 등록해야 합니까?',
            a: '통과된 법안에 따르면 대상 기기는 계통연계 계약이 면제되며 전력회사는 승인, 수수료, 추가 장비를 요구할 수 없습니다. 통보 의무는 규정되어 있지 않습니다. 확실하지 않으면 전력회사에 문의하십시오.',
          },
          {
            q: '생산한 잉여 전력에 대해 대금을 받을 수 있습니까?',
            a: '기대하지 마십시오. HB 340은 대상 기기가 넷 미터링 프로그램 요건의 적용을 받지 않는다고 규정하며, Grist는 계통으로 되돌려 보낸 전력에 대해 소유자가 대금을 요구하는 것을 법이 금지한다고 보도합니다.',
          },
          {
            q: '유타주에서는 UL 3700 인증서가 필수입니까?',
            a: '법은 UL 또는 이에 상응하는 전국적으로 인정된 시험기관의 인증을 요구하며 특정 규격을 명시하지 않습니다. UL 3700은 UL Solutions가 2026년 1월 8일 발표한 프로그램의 기반 규격입니다. 구매하려는 제품의 인증서 또는 디렉터리 등재를 확인하십시오.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[유타주 의회: H.B. 340 Solar Power Amendments(통과된 본문)](https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf) — 정의, 면제, 요건, 시행일',
          '[UL Solutions: 플러그인 태양광 시험·인증 체계](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700 기반 프로그램(2026년 1월 8일 발표)',
          '[Grist: How deep-red Utah helped launch a portable plug-in solar movement](https://grist.org/energy/utah-portable-plug-in-solar-law/) — 법, 전력회사 입장, 인증 현황에 관한 2026년 4월 보도',
        ],
      },
    },
  },
}
