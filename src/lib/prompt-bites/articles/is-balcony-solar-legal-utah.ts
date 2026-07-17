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
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Utah?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Utah? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — legal since May 7, 2025 under HB 340. 1,200W cap, no utility fees, but UL 3700 certified products still aren\'t on shelves. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Utah?',
        answer: 'Yes. Utah HB 340 (the Solar Power Amendments) has been law since May 7, 2025 — the first state law of its kind in the US. It allows plug-in solar devices up to 1,200W with no utility interconnection agreement, fee, or notification required.',
        bullets: [
          'HB 340 signed March 2025, effective May 7, 2025 — the first US state law of its kind',
          '1,200W cap via a standard 120V AC outlet, no utility approval needed',
          'No fully UL 3700-certified system is confirmed available yet, even in Utah',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Utah HB 340 has been law since May 7, 2025 — the pioneer balcony solar law in the US.',
          'Devices up to 1,200W qualify; no interconnection agreement, approval, or utility fee is required.',
          'Net metering does not apply — excess power fed back to the grid earns no compensation.',
          'The certification standard (UL 3700) exists, but no complete system has confirmed full certification yet — check before buying.',
        ],
      },
      body1: {
        title: 'What Does HB 340 Require in Utah?',
        content: [
          '<strong>Utah\'s HB 340 defines a "small portable solar generation device" as one that outputs no more than 1,200 watts, connects via a standard 120V AC outlet, and is certified by a nationally recognized testing laboratory.</strong> Devices meeting that definition are exempt from utility interconnection agreements, approval requirements, and fees — no notification to your utility is required at all. The tradeoff: the device cannot participate in net metering, so any excess power exported to the grid earns no compensation. Rocky Mountain Power, the state\'s largest utility, took no formal position on the bill after Representative Raymond Ward worked directly with them on the safety language.',
          'The law does not include explicit HOA or landlord preemption language — unlike Colorado\'s 2026 law — so a lease or HOA agreement could still restrict where you mount a panel even though the state itself has cleared plug-in solar for use.',
        ],
        columns: ['Field', 'Utah HB 340'],
        rows: [
          { Field: 'Signed / Effective', 'Utah HB 340': 'Mar 2025 / May 7, 2025' },
          { Field: 'Wattage cap', 'Utah HB 340': '1,200W' },
          { Field: 'Utility interconnection', 'Utah HB 340': 'Exempt — no fee or approval' },
          { Field: 'Net metering', 'Utah HB 340': 'Not available' },
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
          '<strong>Utah\'s law required UL 3700 certification, but that standard didn\'t exist when HB 340 passed — UL Solutions only published it in December 2025, eight months after the law took effect, and certification testing opened January 2026.</strong> As of write-time, no complete plug-in solar system has confirmed full UL 3700 certification. EcoFlow\'s STREAM Ultra (1.92 kWh, 1,200W, $1,279 list, 10-year LFP warranty) is listed for sale in Utah specifically, but full legal use still depends on completing that certification — don\'t assume a product marketed as "UL 3700 compliant" has finished the process; verify the specific claim.',
          'Average residential electricity in Utah runs about 11.6¢/kWh — among the lowest of the states covered in this series — putting estimated savings from an 800W kit around $175/year. That\'s a real but modest return; Utah\'s significance is being first, not having the strongest economics.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Utah today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Utah Balcony Solar',
        faqs: [
          {
            q: 'Can my HOA in Utah ban balcony solar?',
            a: 'Possibly. HB 340 legalizes the devices at the state level but does not include HOA or landlord preemption language, so check your lease or HOA covenant before installing. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Do I need to register my system with my utility in Utah?',
            a: 'No. Devices under 1,200W meeting HB 340\'s requirements are exempt from interconnection agreements, approval, and notification entirely.',
          },
          {
            q: 'Can I get paid for excess power I generate?',
            a: 'No. HB 340 explicitly excludes plug-in solar from net metering — any power exported beyond what you consume earns no compensation.',
          },
          {
            q: 'Is the EcoFlow STREAM Ultra fully legal to use in Utah right now?',
            a: 'It\'s sold for the Utah market, but full legal use depends on completing UL 3700 certification, which no complete system has confirmed as of write-time — verify current certification status before assuming it\'s fully compliant.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    title: 'Ist Balkonsolar in Utah legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Utah legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja – legal seit dem 7. Mai 2025 gemäß HB 340. Obergrenze 1.200 W, keine Versorgungsgebühren, aber UL-3700-zertifizierte Produkte sind noch nicht erhältlich. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Utah legal?',
        answer: 'Ja. Utahs HB 340 (die Solar Power Amendments) ist seit dem 7. Mai 2025 geltendes Recht – das erste Gesetz dieser Art in einem US-Bundesstaat. Es erlaubt steckerfertige Solargeräte bis 1.200 W ohne Netzanschlussvereinbarung, Gebühr oder Meldepflicht gegenüber dem Versorgungsunternehmen.',
        bullets: [
          'HB 340 im März 2025 unterzeichnet, in Kraft seit dem 7. Mai 2025 – das erste US-Bundesstaatsgesetz dieser Art',
          'Obergrenze von 1.200 W über eine Standard-120-V-AC-Steckdose, keine Genehmigung des Versorgungsunternehmens nötig',
          'Bislang ist kein vollständig UL-3700-zertifiziertes System bestätigt verfügbar, auch nicht in Utah',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Utahs HB 340 ist seit dem 7. Mai 2025 geltendes Recht – das Pionier-Gesetz für Balkonsolar in den USA.',
          'Geräte bis 1.200 W qualifizieren sich; es ist weder eine Netzanschlussvereinbarung noch eine Genehmigung oder Gebühr des Versorgungsunternehmens erforderlich.',
          'Net Metering gilt nicht – ins Netz eingespeister Überschussstrom wird nicht vergütet.',
          'Der Zertifizierungsstandard (UL 3700) existiert, aber bislang hat kein vollständiges System die volle Zertifizierung bestätigt – vor dem Kauf prüfen.',
        ],
      },
      body1: {
        title: 'Was verlangt HB 340 in Utah?',
        content: [
          '<strong>Utahs HB 340 definiert ein „kleines tragbares Solarstromerzeugungsgerät" als ein Gerät, das nicht mehr als 1.200 Watt abgibt, über eine Standard-120-V-AC-Steckdose angeschlossen wird und von einem national anerkannten Prüflabor zertifiziert ist.</strong> Geräte, die diese Definition erfüllen, sind von Netzanschlussvereinbarungen, Genehmigungspflichten und Gebühren befreit – eine Meldung an das Versorgungsunternehmen ist überhaupt nicht erforderlich. Der Kompromiss: Das Gerät kann nicht am Net Metering teilnehmen, sodass jeglicher ins Netz exportierter Überschussstrom nicht vergütet wird. Rocky Mountain Power, das größte Versorgungsunternehmen des Bundesstaats, nahm keine offizielle Position zu dem Gesetzentwurf ein, nachdem Abgeordneter Raymond Ward direkt mit dem Unternehmen an der Formulierung der Sicherheitsvorgaben gearbeitet hatte.',
          'Das Gesetz enthält – anders als Colorados Gesetz von 2026 – keine ausdrückliche Regelung, die HOA- oder Vermieterverbote außer Kraft setzt. Ein Mietvertrag oder eine HOA-Vereinbarung kann also weiterhin einschränken, wo ein Panel montiert werden darf, auch wenn der Bundesstaat selbst steckerfertige Solargeräte grundsätzlich zugelassen hat.',
        ],
        columns: ['Feld', 'Utah HB 340'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Utah HB 340': 'März 2025 / 7. Mai 2025' },
          { Feld: 'Leistungsobergrenze', 'Utah HB 340': '1.200 W' },
          { Feld: 'Netzanschluss', 'Utah HB 340': 'Befreit – keine Gebühr oder Genehmigung' },
          { Feld: 'Net Metering', 'Utah HB 340': 'Nicht verfügbar' },
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
          '<strong>Utahs Gesetz verlangt eine UL-3700-Zertifizierung, doch dieser Standard existierte noch gar nicht, als HB 340 verabschiedet wurde – UL Solutions veröffentlichte ihn erst im Dezember 2025, acht Monate nachdem das Gesetz in Kraft getreten war, und die Zertifizierungstests starteten im Januar 2026.</strong> Stand Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem eine vollständige UL-3700-Zertifizierung bestätigt. EcoFlows STREAM Ultra (1,92 kWh, 1.200 W, Listenpreis 1.279 $, 10 Jahre LFP-Garantie) wird speziell für Utah zum Verkauf angeboten, doch die vollständig rechtskonforme Nutzung hängt weiterhin vom Abschluss dieser Zertifizierung ab – gehen Sie nicht davon aus, dass ein als „UL-3700-konform" beworbenes Produkt den Prozess bereits abgeschlossen hat; prüfen Sie die konkrete Angabe.',
          'Der durchschnittliche Strompreis für Privathaushalte in Utah liegt bei etwa 11,6 Cent/kWh – einer der niedrigsten unter den in dieser Serie behandelten Bundesstaaten. Das ergibt geschätzte Einsparungen von rund 175 $/Jahr bei einem 800-W-Set. Das ist real, aber bescheiden – Utahs Bedeutung liegt darin, Vorreiter zu sein, nicht in der stärksten Wirtschaftlichkeit.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in Utah zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Utah',
        faqs: [
          {
            q: 'Kann meine HOA in Utah Balkonsolar verbieten?',
            a: 'Möglicherweise. HB 340 legalisiert die Geräte auf Bundesstaatsebene, enthält aber keine Regelung, die HOA- oder Vermieterverbote außer Kraft setzt. Prüfen Sie daher vor der Installation Ihren Mietvertrag oder Ihre HOA-Satzung. Einen Bundesstaat, der HOA-Verbote ausdrücklich blockiert, finden Sie im <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Muss ich mein System in Utah bei meinem Versorgungsunternehmen anmelden?',
            a: 'Nein. Geräte unter 1.200 W, die die Anforderungen von HB 340 erfüllen, sind vollständig von Netzanschlussvereinbarungen, Genehmigungen und Meldepflichten befreit.',
          },
          {
            q: 'Kann ich für überschüssigen erzeugten Strom bezahlt werden?',
            a: 'Nein. HB 340 schließt steckerfertige Solargeräte ausdrücklich vom Net Metering aus – jeglicher über Ihren Verbrauch hinaus ins Netz exportierter Strom wird nicht vergütet.',
          },
          {
            q: 'Ist der EcoFlow STREAM Ultra derzeit vollständig legal in Utah nutzbar?',
            a: 'Er wird für den Markt in Utah verkauft, doch die vollständig rechtskonforme Nutzung hängt vom Abschluss der UL-3700-Zertifizierung ab, die bislang für kein vollständiges System bestätigt wurde – prüfen Sie den aktuellen Zertifizierungsstatus, bevor Sie von vollständiger Konformität ausgehen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    title: "Le solaire de balcon est-il légal dans l'Utah ?",
    dateModified: '2026-07-16',
    seoTitle: "Le solaire de balcon est-il légal dans l'Utah ? | Prompt Bites | PromptQuorum",
    metaDescription: "Oui — légal depuis le 7 mai 2025 selon la loi HB 340. Plafond de 1 200 W, aucuns frais du fournisseur d'électricité, mais les produits certifiés UL 3700 ne sont pas encore en vente. Réponse rapide de PromptQuorum.",
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: "Le solaire de balcon est-il légal dans l'Utah ?",
        answer: "Oui. La loi HB 340 de l'Utah (Solar Power Amendments) est en vigueur depuis le 7 mai 2025 — la première loi de ce type dans un État américain. Elle autorise les dispositifs solaires branchables jusqu'à 1 200 W, sans convention de raccordement, sans frais ni notification au fournisseur d'électricité.",
        bullets: [
          "HB 340 signée en mars 2025, en vigueur depuis le 7 mai 2025 — la première loi d'État américaine de ce type",
          'Plafond de 1 200 W via une prise standard 120 V AC, aucune approbation du fournisseur requise',
          "Aucun système entièrement certifié UL 3700 n'est encore confirmé disponible, même dans l'Utah",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "La loi HB 340 de l'Utah est en vigueur depuis le 7 mai 2025 — la loi pionnière du solaire de balcon aux États-Unis.",
          "Les appareils jusqu'à 1 200 W sont éligibles ; aucune convention de raccordement, approbation ou frais du fournisseur n'est requis.",
          "Le net metering ne s'applique pas — l'électricité excédentaire réinjectée sur le réseau n'est pas rémunérée.",
          "La norme de certification (UL 3700) existe, mais aucun système complet n'a encore confirmé sa certification intégrale — à vérifier avant l'achat.",
        ],
      },
      body1: {
        title: "Que prévoit la loi HB 340 dans l'Utah ?",
        content: [
          "<strong>La loi HB 340 de l'Utah définit un « petit dispositif portable de production solaire » comme un appareil dont la puissance ne dépasse pas 1 200 watts, qui se branche sur une prise standard 120 V AC et qui est certifié par un laboratoire d'essais reconnu au niveau national.</strong> Les appareils répondant à cette définition sont exemptés de convention de raccordement, d'exigences d'approbation et de frais — aucune notification au fournisseur d'électricité n'est requise. La contrepartie : l'appareil ne peut pas participer au net metering, donc tout excédent d'électricité exporté vers le réseau n'est pas rémunéré. Rocky Mountain Power, le principal fournisseur d'électricité de l'État, n'a pris aucune position officielle sur le texte après que le représentant Raymond Ward a travaillé directement avec lui sur les dispositions de sécurité.",
          "Contrairement à la loi de 2026 du Colorado, le texte ne comporte pas de disposition explicite de préemption sur les copropriétés (HOA) ou les propriétaires bailleurs. Un bail ou un règlement de copropriété peut donc toujours restreindre l'emplacement d'installation d'un panneau, même si l'État a lui-même autorisé l'usage du solaire branchable.",
        ],
        columns: ['Champ', 'Utah HB 340'],
        rows: [
          { Champ: 'Signée / En vigueur', 'Utah HB 340': 'Mars 2025 / 7 mai 2025' },
          { Champ: 'Plafond de puissance', 'Utah HB 340': '1 200 W' },
          { Champ: 'Raccordement au réseau', 'Utah HB 340': 'Exempté — aucuns frais ni approbation' },
          { Champ: 'Net metering', 'Utah HB 340': 'Non disponible' },
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
          "<strong>La loi de l'Utah exige la certification UL 3700, mais cette norme n'existait pas encore à l'adoption de HB 340 — UL Solutions ne l'a publiée qu'en décembre 2025, huit mois après l'entrée en vigueur de la loi, et les essais de certification n'ont débuté qu'en janvier 2026.</strong> À l'heure de la rédaction, aucun système solaire branchable complet n'a confirmé une certification UL 3700 intégrale. Le STREAM Ultra d'EcoFlow (1,92 kWh, 1 200 W, prix catalogue de 1 279 $, garantie LFP de 10 ans) est proposé à la vente spécifiquement dans l'Utah, mais son usage pleinement légal reste conditionné à l'achèvement de cette certification — ne présumez pas qu'un produit commercialisé comme « conforme UL 3700 » a terminé le processus ; vérifiez l'allégation précise.",
          "Le tarif résidentiel moyen de l'électricité dans l'Utah est d'environ 11,6 ¢/kWh — parmi les plus bas des États couverts par cette série —, ce qui situe les économies estimées d'un kit de 800 W autour de 175 $/an. C'est un gain réel mais modeste ; l'importance de l'Utah tient à sa position de pionnier, pas à la solidité de son modèle économique.",
          "<strong>Prêt à comparer du matériel concret ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu'un kit précis est certifié ou disponible dans l'Utah aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans l\'Utah',
        faqs: [
          {
            q: "Ma copropriété peut-elle interdire le solaire de balcon dans l'Utah ?",
            a: 'Possiblement. HB 340 légalise les appareils au niveau de l\'État, mais ne comporte pas de disposition de préemption sur les copropriétés (HOA) ou les propriétaires bailleurs. Vérifiez donc votre bail ou le règlement de copropriété avant toute installation. Pour un État qui bloque explicitement les interdictions des HOA, consultez la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon du Colorado</a>.',
          },
          {
            q: "Dois-je enregistrer mon système auprès de mon fournisseur d'électricité dans l'Utah ?",
            a: "Non. Les appareils de moins de 1 200 W répondant aux exigences de HB 340 sont entièrement exemptés de convention de raccordement, d'approbation et de notification.",
          },
          {
            q: "Puis-je être rémunéré pour l'électricité excédentaire que je produis ?",
            a: "Non. HB 340 exclut explicitement le solaire branchable du net metering — toute électricité exportée au-delà de votre consommation n'est pas rémunérée.",
          },
          {
            q: "Le STREAM Ultra d'EcoFlow est-il pleinement légal à utiliser dans l'Utah dès maintenant ?",
            a: "Il est commercialisé pour le marché de l'Utah, mais son usage pleinement légal dépend de l'achèvement de la certification UL 3700, qu'aucun système complet n'a confirmée à l'heure de la rédaction — vérifiez le statut de certification actuel avant de présumer d'une conformité totale.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    title: 'ユタ州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-07-16',
    seoTitle: 'ユタ州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'はい — HB 340により2025年5月7日から合法です。上限1,200W、電力会社への手数料は不要ですが、UL 3700認証製品はまだ店頭に並んでいません。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'ユタ州でバルコニーソーラーは合法ですか？',
        answer: 'はい。ユタ州のHB 340（Solar Power Amendments）は2025年5月7日から施行されており、米国の州法としては初の事例です。最大1,200Wのプラグイン式ソーラー機器について、電力会社との系統連系契約・手数料・通知のいずれも不要としています。',
        bullets: [
          'HB 340は2025年3月に署名され、2025年5月7日に施行 — 米国州法として初の事例',
          '標準120V ACコンセント経由で上限1,200W、電力会社の承認は不要',
          'ユタ州でも、UL 3700の完全認証を取得したシステムはまだ確認されていない',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ユタ州のHB 340は2025年5月7日から施行されている、米国におけるバルコニーソーラーの先駆的な法律です。',
          '1,200Wまでの機器が対象で、系統連系契約・承認・電力会社への手数料はいずれも不要です。',
          'ネットメータリングは適用されません — 電力網に逆潮流した余剰電力への対価はありません。',
          '認証規格（UL 3700）自体は存在しますが、完全な認証を取得したシステムはまだ確認されていません — 購入前に確認してください。',
        ],
      },
      body1: {
        title: 'ユタ州のHB 340が求める要件とは？',
        content: [
          '<strong>ユタ州のHB 340は「小型ポータブルソーラー発電装置」を、出力1,200ワット以下で、標準120V ACコンセント経由で接続し、全米的に認知された試験機関の認証を受けた機器と定義しています。</strong> この定義を満たす機器は、電力会社との系統連系契約、承認要件、手数料のいずれからも免除されます — 電力会社への通知すら一切不要です。その代わり、この機器はネットメータリングの対象外となり、電力網に輸出された余剰電力への対価は発生しません。州最大の電力会社であるRocky Mountain Powerは、Raymond Ward州議会議員が安全基準の文言について直接協議した後、この法案に対して正式な立場を表明しませんでした。',
          'コロラド州の2026年法とは異なり、この法律にはHOA（住宅所有者組合）や貸主の権限を明示的に無効化する規定は含まれていません。そのため、州としてプラグイン式ソーラーの使用を認めていても、賃貸契約書やHOAの規約によってパネルの設置場所が制限される可能性があります。',
        ],
        columns: ['項目', 'ユタ州 HB 340'],
        rows: [
          { 項目: '署名 / 施行日', 'ユタ州 HB 340': '2025年3月 / 2025年5月7日' },
          { 項目: '出力上限', 'ユタ州 HB 340': '1,200W' },
          { 項目: '電力会社との系統連系', 'ユタ州 HB 340': '免除 — 手数料・承認不要' },
          { 項目: 'ネットメータリング', 'ユタ州 HB 340': '利用不可' },
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
          '<strong>ユタ州の法律はUL 3700認証を要件としていますが、HB 340が可決された時点ではこの規格自体が存在していませんでした — UL Solutionsが規格を公表したのは法施行から8か月後の2025年12月で、認証試験の開始は2026年1月からでした。</strong> 執筆時点で、プラグイン式ソーラーシステムでUL 3700の完全認証を取得したと確認されている製品はありません。EcoFlowのSTREAM Ultra（1.92kWh、1,200W、定価$1,279、LFPバッテリー10年保証）はユタ州向けに販売されていますが、完全に合法な利用は認証の完了に左右されます — 「UL 3700準拠」として販売されている製品でも認証プロセスが完了しているとは限らないため、具体的な表示内容を必ず確認してください。',
          'ユタ州の住宅用電気料金は平均で約11.6セント/kWhと、本シリーズで扱う州の中でも最も低い部類に入ります。800Wキットによる推定節約額は年間約$175です。これは実際の効果ではあるものの控えめであり、ユタ州の意義は経済性の高さではなく「最初に法制化した州」であることにあります。',
          '<strong>実際の製品を比較する準備はできましたか？</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください — これらは単なる製品リンクであり、特定のキットがユタ州で認証済み・販売中であると主張するものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ユタ州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'ユタ州でHOAがバルコニーソーラーを禁止することはできますか？',
            a: 'その可能性があります。HB 340は州レベルで機器を合法化していますが、HOAや貸主の権限を無効化する規定は含まれていません。設置前に賃貸契約書やHOA規約を必ず確認してください。HOAによる禁止を明示的に阻止している州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>を参照してください。',
          },
          {
            q: 'ユタ州でシステムを電力会社に登録する必要はありますか？',
            a: 'いいえ。HB 340の要件を満たす1,200W未満の機器は、系統連系契約、承認、通知のすべてが完全に免除されます。',
          },
          {
            q: '発電した余剰電力の対価を受け取ることはできますか？',
            a: 'いいえ。HB 340はプラグイン式ソーラーを明示的にネットメータリングの対象外としており、消費量を超えて輸出された電力への対価は発生しません。',
          },
          {
            q: 'EcoFlow STREAM Ultraは現在ユタ州で完全に合法に使用できますか？',
            a: 'ユタ州向けに販売されてはいますが、完全に合法な利用はUL 3700認証の完了に左右され、執筆時点で完全認証を取得したと確認されたシステムはありません — 完全に準拠していると判断する前に、最新の認証状況を確認してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    title: '犹他州的阳台太阳能合法吗？',
    dateModified: '2026-07-16',
    seoTitle: '犹他州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '是的——根据HB 340法案，自2025年5月7日起合法。上限1,200瓦，无需支付电力公司费用，但UL 3700认证产品尚未上市。PromptQuorum为您解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '犹他州的阳台太阳能合法吗？',
        answer: '合法。犹他州HB 340法案（《太阳能修正案》）自2025年5月7日起生效，是美国首部此类州级法律。该法案允许使用最高1,200瓦的插电式太阳能设备，无需与电力公司签订并网协议、支付费用或提交通知。',
        bullets: [
          'HB 340于2025年3月签署，2025年5月7日生效——美国首部此类州级法律',
          '通过标准120V交流插座供电，上限1,200瓦，无需电力公司批准',
          '目前尚无完全通过UL 3700认证的系统确认上市，犹他州也不例外',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '犹他州HB 340法案自2025年5月7日起生效——是美国阳台太阳能领域的开创性立法。',
          '1,200瓦以下的设备符合条件；无需并网协议、审批或电力公司费用。',
          '不适用净计量电价——输送回电网的多余电力不会获得任何补偿。',
          '认证标准（UL 3700）已经存在，但尚无完整系统确认已完成全部认证——购买前请务必核实。',
        ],
      },
      body1: {
        title: '犹他州HB 340法案有哪些要求？',
        content: [
          '<strong>犹他州HB 340法案将"小型便携式太阳能发电设备"定义为输出功率不超过1,200瓦、通过标准120V交流插座连接、并经国家认可检测实验室认证的设备。</strong> 符合该定义的设备可免除电力公司并网协议、审批要求和费用——完全无需向电力公司提交任何通知。代价是：该设备不能参与净计量电价，任何输出到电网的多余电力都不会获得补偿。该州最大的电力公司Rocky Mountain Power在州众议员Raymond Ward与其就安全条款直接沟通后，未对该法案表态。',
          '与科罗拉多州2026年的法律不同，该法律并未明确规定业主协会（HOA）或房东的优先权受限，因此即便州一级已经放开插电式太阳能设备的使用，租约或HOA协议仍可能限制面板的安装位置。',
        ],
        columns: ['项目', '犹他州HB 340'],
        rows: [
          { 项目: '签署 / 生效日期', '犹他州HB 340': '2025年3月 / 2025年5月7日' },
          { 项目: '功率上限', '犹他州HB 340': '1,200瓦' },
          { 项目: '电力公司并网', '犹他州HB 340': '豁免——无需费用或审批' },
          { 项目: '净计量电价', '犹他州HB 340': '不可用' },
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
          '<strong>犹他州法律要求UL 3700认证，但HB 340通过时该标准尚不存在——UL Solutions直到2025年12月才发布该标准，比法律生效晚了八个月，认证测试则到2026年1月才启动。</strong> 截至撰写本文时，尚无任何完整的插电式太阳能系统确认已完成完整的UL 3700认证。EcoFlow的STREAM Ultra（1.92千瓦时、1,200瓦、标价1,279美元、10年LFP电池质保）专门面向犹他州市场销售，但完全合法的使用仍取决于该认证的完成情况——不要假定标注"符合UL 3700"的产品已完成认证流程，请核实具体标注内容。',
          '犹他州住宅电价平均约为每千瓦时11.6美分——在本系列涵盖的各州中属于最低之列，一套800瓦套件预计每年可节省约175美元。这是实实在在但并不算丰厚的回报；犹他州的意义在于率先立法，而不在于经济性最强。',
          '<strong>准备好比较实际硬件了吗？</strong> 请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接，并不代表任何特定套件已在犹他州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于犹他州阳台太阳能的快速问答',
        faqs: [
          {
            q: '犹他州的业主协会（HOA）可以禁止阳台太阳能吗？',
            a: '有可能。HB 340在州一级使这些设备合法化，但并未限制HOA或房东的优先权，因此安装前请务必查看租约或HOA公约。若想了解明确禁止HOA限制的州，请参见<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法律</a>。',
          },
          {
            q: '在犹他州，我需要向电力公司注册我的系统吗？',
            a: '不需要。符合HB 340要求的1,200瓦以下设备完全豁免并网协议、审批和通知义务。',
          },
          {
            q: '我发的多余电量能获得报酬吗？',
            a: '不能。HB 340明确将插电式太阳能排除在净计量电价之外——超出自用部分、输出到电网的电力不会获得任何补偿。',
          },
          {
            q: 'EcoFlow STREAM Ultra目前在犹他州可以完全合法使用吗？',
            a: '该产品面向犹他州市场销售，但完全合法的使用取决于UL 3700认证的完成情况，截至撰写本文时尚无任何完整系统确认已完成认证——在假定其完全合规之前，请核实当前的认证状态。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    title: '¿Es legal la energía solar de balcón en Utah?',
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en Utah? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí — legal desde el 7 de mayo de 2025 según la ley HB 340. Límite de 1200 W, sin tarifas de la empresa eléctrica, pero los productos certificados UL 3700 aún no están a la venta. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Utah?',
        answer: 'Sí. La ley HB 340 de Utah (Solar Power Amendments) es ley vigente desde el 7 de mayo de 2025 — la primera ley estatal de este tipo en EE. UU. Permite dispositivos solares enchufables de hasta 1200 W sin necesidad de acuerdo de interconexión, tarifa ni notificación a la empresa eléctrica.',
        bullets: [
          'HB 340 se firmó en marzo de 2025 y entró en vigor el 7 de mayo de 2025 — la primera ley estatal de EE. UU. de este tipo',
          'Límite de 1200 W a través de un tomacorriente estándar de 120 V CA, sin necesidad de aprobación de la empresa eléctrica',
          'Todavía no hay confirmado ningún sistema completamente certificado bajo UL 3700, ni siquiera en Utah',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley HB 340 de Utah es ley vigente desde el 7 de mayo de 2025 — la ley pionera de energía solar de balcón en EE. UU.',
          'Los dispositivos de hasta 1200 W califican; no se requiere acuerdo de interconexión, aprobación ni tarifa de la empresa eléctrica.',
          'El net metering no aplica — la energía excedente enviada a la red no recibe ninguna compensación.',
          'El estándar de certificación (UL 3700) existe, pero todavía ningún sistema completo ha confirmado su certificación total — verifica esto antes de comprar.',
        ],
      },
      body1: {
        title: '¿Qué exige la ley HB 340 en Utah?',
        content: [
          '<strong>La ley HB 340 de Utah define un «pequeño dispositivo portátil de generación solar» como aquel que no supera los 1200 vatios de salida, se conecta mediante un tomacorriente estándar de 120 V CA y está certificado por un laboratorio de pruebas reconocido a nivel nacional.</strong> Los dispositivos que cumplen esa definición quedan exentos de acuerdos de interconexión con la empresa eléctrica, requisitos de aprobación y tarifas — ni siquiera es necesario notificar a tu empresa eléctrica. La contrapartida: el dispositivo no puede participar en net metering, así que cualquier excedente de energía exportado a la red no recibe compensación. Rocky Mountain Power, la empresa eléctrica más grande del estado, no tomó una postura formal sobre el proyecto de ley después de que el representante Raymond Ward trabajara directamente con ellos en el lenguaje de seguridad.',
          'A diferencia de la ley de Colorado de 2026, esta ley no incluye disposiciones explícitas que anulen restricciones de HOA o de propietarios arrendadores, por lo que un contrato de alquiler o un reglamento de HOA todavía podría restringir dónde instalas un panel, aun cuando el propio estado ya haya autorizado el uso de energía solar enchufable.',
        ],
        columns: ['Campo', 'Utah HB 340'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Utah HB 340': 'Marzo de 2025 / 7 de mayo de 2025' },
          { Campo: 'Límite de potencia', 'Utah HB 340': '1200 W' },
          { Campo: 'Interconexión con la empresa eléctrica', 'Utah HB 340': 'Exenta — sin tarifa ni aprobación' },
          { Campo: 'Net metering', 'Utah HB 340': 'No disponible' },
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
          '<strong>La ley de Utah exige la certificación UL 3700, pero ese estándar no existía cuando se aprobó la HB 340 — UL Solutions lo publicó recién en diciembre de 2025, ocho meses después de que la ley entrara en vigor, y las pruebas de certificación comenzaron en enero de 2026.</strong> Al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado tener la certificación UL 3700 total. El STREAM Ultra de EcoFlow (1.92 kWh, 1200 W, precio de lista de $1279, garantía de 10 años en batería LFP) se vende específicamente para el mercado de Utah, pero su uso plenamente legal sigue dependiendo de que se complete esa certificación — no asumas que un producto anunciado como «compatible con UL 3700» ya terminó el proceso; verifica la afirmación específica.',
          'La tarifa eléctrica residencial promedio en Utah ronda los 11.6 ¢/kWh — una de las más bajas entre los estados cubiertos en esta serie —, lo que sitúa el ahorro estimado de un kit de 800 W en alrededor de $175 al año. Es un retorno real pero modesto; la relevancia de Utah está en ser el primero, no en tener la mejor economía.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en Utah hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en Utah',
        faqs: [
          {
            q: '¿Puede mi HOA en Utah prohibir la energía solar de balcón?',
            a: 'Es posible. La HB 340 legaliza los dispositivos a nivel estatal, pero no incluye disposiciones que anulen restricciones de HOA o de propietarios arrendadores, así que revisa tu contrato de alquiler o el reglamento de tu HOA antes de instalar. Para conocer un estado que sí bloquea explícitamente las prohibiciones de las HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Necesito registrar mi sistema ante mi empresa eléctrica en Utah?',
            a: 'No. Los dispositivos de menos de 1200 W que cumplen los requisitos de la HB 340 están completamente exentos de acuerdos de interconexión, aprobación y notificación.',
          },
          {
            q: '¿Puedo cobrar por el excedente de energía que genero?',
            a: 'No. La HB 340 excluye explícitamente la energía solar enchufable del net metering — cualquier energía exportada más allá de lo que consumes no recibe compensación.',
          },
          {
            q: '¿Es totalmente legal usar el EcoFlow STREAM Ultra en Utah en este momento?',
            a: 'Se vende para el mercado de Utah, pero su uso totalmente legal depende de completar la certificación UL 3700, que ningún sistema completo ha confirmado al momento de escribir esto — verifica el estado actual de la certificación antes de asumir que cumple totalmente.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    title: 'A energia solar de varanda é legal em Utah?',
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal em Utah? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim — legal desde 7 de maio de 2025 sob a lei HB 340. Limite de 1.200 W, sem taxas da concessionária, mas produtos certificados pela UL 3700 ainda não estão à venda. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Utah?',
        answer: 'Sim. A lei HB 340 de Utah (Solar Power Amendments) está em vigor desde 7 de maio de 2025 — a primeira lei estadual desse tipo nos EUA. Ela permite dispositivos solares plug-in de até 1.200 W sem necessidade de acordo de interconexão, taxa ou notificação à concessionária de energia.',
        bullets: [
          'HB 340 assinada em março de 2025, em vigor desde 7 de maio de 2025 — a primeira lei estadual dos EUA desse tipo',
          'Limite de 1.200 W via tomada padrão de 120 V CA, sem necessidade de aprovação da concessionária',
          'Ainda não há confirmação de nenhum sistema totalmente certificado pela UL 3700 disponível, nem mesmo em Utah',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A lei HB 340 de Utah está em vigor desde 7 de maio de 2025 — a lei pioneira de energia solar de varanda nos EUA.',
          'Dispositivos de até 1.200 W se qualificam; não é necessário acordo de interconexão, aprovação ou taxa da concessionária.',
          'O net metering não se aplica — o excedente de energia enviado de volta à rede não recebe nenhuma compensação.',
          'O padrão de certificação (UL 3700) existe, mas nenhum sistema completo confirmou certificação total ainda — verifique antes de comprar.',
        ],
      },
      body1: {
        title: 'O que a HB 340 exige em Utah?',
        content: [
          '<strong>A HB 340 de Utah define um "pequeno dispositivo portátil de geração solar" como aquele que não ultrapassa 1.200 watts de saída, se conecta por uma tomada padrão de 120 V CA e é certificado por um laboratório de testes reconhecido nacionalmente.</strong> Dispositivos que atendem a essa definição ficam isentos de acordos de interconexão com a concessionária, exigências de aprovação e taxas — nem é preciso notificar a concessionária. A contrapartida: o dispositivo não pode participar do net metering, então qualquer excedente de energia exportado para a rede não gera nenhuma compensação. A Rocky Mountain Power, maior concessionária do estado, não assumiu posição formal sobre o projeto depois que o deputado estadual Raymond Ward trabalhou diretamente com a empresa na redação das exigências de segurança.',
          'Diferentemente da lei de 2026 do Colorado, a lei de Utah não inclui linguagem explícita que anule restrições de associações de moradores (HOA) ou de proprietários locadores — então um contrato de aluguel ou o regulamento de uma HOA ainda pode restringir onde você instala um painel, mesmo que o estado já tenha liberado o uso de energia solar plug-in.',
        ],
        columns: ['Campo', 'Utah HB 340'],
        rows: [
          { Campo: 'Assinada / Em vigor', 'Utah HB 340': 'Mar. 2025 / 7 de maio de 2025' },
          { Campo: 'Limite de potência', 'Utah HB 340': '1.200 W' },
          { Campo: 'Interconexão com a concessionária', 'Utah HB 340': 'Isento — sem taxa ou aprovação' },
          { Campo: 'Net metering', 'Utah HB 340': 'Não disponível' },
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
          '<strong>A lei de Utah exige certificação UL 3700, mas esse padrão ainda não existia quando a HB 340 foi aprovada — a UL Solutions só publicou o padrão em dezembro de 2025, oito meses depois de a lei entrar em vigor, e os testes de certificação começaram em janeiro de 2026.</strong> No momento da redação deste texto, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total. O STREAM Ultra da EcoFlow (1,92 kWh, 1.200 W, preço de tabela de $ 1.279, garantia de 10 anos na bateria LFP) é vendido especificamente para o mercado de Utah, mas o uso totalmente legal ainda depende da conclusão dessa certificação — não presuma que um produto anunciado como "compatível com UL 3700" já concluiu o processo; verifique a alegação específica.',
          'A tarifa residencial média de eletricidade em Utah gira em torno de 11,6 ¢/kWh — uma das mais baixas entre os estados cobertos nesta série —, o que coloca a economia estimada de um kit de 800 W em cerca de $ 175 por ano. É um retorno real, mas modesto; a relevância de Utah está em ser pioneiro, não em ter a economia mais forte.',
          '<strong>Pronto para comparar hardware real?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível em Utah hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Utah',
        faqs: [
          {
            q: 'Minha HOA em Utah pode proibir a energia solar de varanda?',
            a: 'Possivelmente. A HB 340 legaliza os dispositivos em nível estadual, mas não inclui linguagem que anule restrições de HOA ou de proprietários locadores, então verifique seu contrato de aluguel ou o regulamento da HOA antes de instalar. Para conhecer um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'Preciso registrar meu sistema na concessionária em Utah?',
            a: 'Não. Dispositivos abaixo de 1.200 W que atendem às exigências da HB 340 são totalmente isentos de acordos de interconexão, aprovação e notificação.',
          },
          {
            q: 'Posso ser pago pelo excedente de energia que gero?',
            a: 'Não. A HB 340 exclui explicitamente a energia solar plug-in do net metering — qualquer energia exportada além do que você consome não gera compensação.',
          },
          {
            q: 'O EcoFlow STREAM Ultra é totalmente legal para uso em Utah agora?',
            a: 'Ele é vendido para o mercado de Utah, mas o uso totalmente legal depende da conclusão da certificação UL 3700, que nenhum sistema completo confirmou até o momento da redação deste texto — verifique o status atual da certificação antes de presumir conformidade total.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    title: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم — قانونية منذ 7 مايو 2025 بموجب قانون HB 340. حد أقصى 1,200 واط، بلا رسوم من شركة الكهرباء، لكن المنتجات المعتمدة بمعيار UL 3700 لم تصل بعد إلى الأسواق. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في يوتا؟',
        answer: 'نعم. قانون HB 340 في يوتا (Solar Power Amendments) سارٍ منذ 7 مايو 2025 — وهو أول قانون من نوعه على مستوى الولايات في الولايات المتحدة. يسمح القانون بأجهزة الطاقة الشمسية القابلة للتوصيل المباشر حتى 1,200 واط دون الحاجة إلى اتفاقية ربط شبكي أو رسوم أو إخطار لشركة الكهرباء.',
        bullets: [
          'تم توقيع HB 340 في مارس 2025، ودخل حيز التنفيذ في 7 مايو 2025 — أول قانون من نوعه على مستوى الولايات الأمريكية',
          'حد أقصى 1,200 واط عبر مقبس قياسي 120V AC، دون الحاجة إلى موافقة شركة الكهرباء',
          'لا يوجد حتى الآن نظام مؤكد حاصل على شهادة UL 3700 كاملة، حتى في يوتا',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون HB 340 في يوتا سارٍ منذ 7 مايو 2025 — وهو القانون الرائد للطاقة الشمسية للشرفات في الولايات المتحدة.',
          'الأجهزة حتى 1,200 واط مؤهلة؛ ولا تُطلب أي اتفاقية ربط شبكي أو موافقة أو رسوم من شركة الكهرباء.',
          'لا ينطبق نظام Net Metering — لا يحصل صاحب الجهاز على أي تعويض عن الطاقة الفائضة التي تُضخ إلى الشبكة.',
          'معيار الاعتماد (UL 3700) موجود، لكن لم يؤكد أي نظام كامل حتى الآن حصوله على الاعتماد الكامل — تحقق من ذلك قبل الشراء.',
        ],
      },
      body1: {
        title: 'ما الذي يتطلبه قانون HB 340 في يوتا؟',
        content: [
          '<strong>يُعرّف قانون HB 340 في يوتا «جهاز توليد شمسي محمول صغير» بأنه جهاز لا تتجاوز طاقته الناتجة 1,200 واط، ويتصل عبر مقبس قياسي 120V AC، ومعتمد من مختبر اختبار معترف به على المستوى الوطني.</strong> تُعفى الأجهزة المستوفية لهذا التعريف من اتفاقيات الربط الشبكي، ومتطلبات الموافقة، والرسوم — ولا يُطلب إخطار شركة الكهرباء إطلاقًا. أما المقابل، فهو أن الجهاز لا يمكنه المشاركة في نظام Net Metering، لذا فإن أي طاقة فائضة تُصدَّر إلى الشبكة لا تحصل على أي تعويض. لم تتخذ شركة Rocky Mountain Power، أكبر شركة كهرباء في الولاية، موقفًا رسميًا من مشروع القانون بعد أن عمل عضو المجلس Raymond Ward معها مباشرة بشأن صياغة بنود السلامة.',
          'خلافًا لقانون كولورادو لعام 2026، لا يتضمن هذا القانون نصًا صريحًا يُبطل قيود جمعيات الملاك (HOA) أو المُلّاك المؤجرين، لذا قد يظل عقد الإيجار أو لائحة جمعية الملاك يقيّد مكان تركيب اللوح، حتى وإن كانت الولاية نفسها قد سمحت باستخدام الطاقة الشمسية القابلة للتوصيل المباشر.',
        ],
        columns: ['الحقل', 'قانون يوتا HB 340'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'قانون يوتا HB 340': 'مارس 2025 / 7 مايو 2025' },
          { الحقل: 'الحد الأقصى للطاقة', 'قانون يوتا HB 340': '1,200 واط' },
          { الحقل: 'الربط الشبكي', 'قانون يوتا HB 340': 'معفى — بلا رسوم أو موافقة' },
          { الحقل: 'Net Metering', 'قانون يوتا HB 340': 'غير متاح' },
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
          '<strong>يشترط قانون يوتا الحصول على شهادة UL 3700، إلا أن هذا المعيار لم يكن موجودًا أصلًا عند إقرار HB 340 — إذ لم تنشره شركة UL Solutions إلا في ديسمبر 2025، أي بعد ثمانية أشهر من دخول القانون حيز التنفيذ، ولم تبدأ اختبارات الاعتماد إلا في يناير 2026.</strong> حتى وقت كتابة هذا المقال، لم يؤكد أي نظام شمسي كامل قابل للتوصيل المباشر حصوله على شهادة UL 3700 كاملة. يُطرح جهاز EcoFlow STREAM Ultra (1.92 كيلوواط ساعة، 1,200 واط، سعر قائمة 1,279 دولارًا، وضمان بطارية LFP لمدة 10 سنوات) للبيع خصيصًا في يوتا، لكن الاستخدام القانوني الكامل لا يزال مرهونًا باستكمال هذا الاعتماد — لا تفترض أن منتجًا يُسوَّق على أنه «متوافق مع UL 3700» قد أنهى العملية فعليًا؛ تحقق من الادعاء المحدد.',
          'يبلغ متوسط تعرفة الكهرباء السكنية في يوتا نحو 11.6 سنتًا لكل كيلوواط ساعة — من بين الأدنى بين الولايات المشمولة في هذه السلسلة — ما يجعل التوفير المقدَّر من مجموعة 800 واط نحو 175 دولارًا سنويًا. هذا عائد حقيقي لكنه متواضع؛ فأهمية يوتا تكمن في كونها الرائدة، لا في امتلاكها أقوى جدوى اقتصادية.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في يوتا اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في يوتا',
        faqs: [
          {
            q: 'هل يمكن لجمعية الملاك (HOA) في يوتا حظر الطاقة الشمسية للشرفات؟',
            a: 'من الممكن. يُقنّن HB 340 استخدام الأجهزة على مستوى الولاية، لكنه لا يتضمن نصًا يُبطل قيود جمعيات الملاك أو المُلّاك المؤجرين، لذا تحقق من عقد الإيجار أو لائحة جمعية الملاك قبل التركيب. للاطلاع على ولاية تمنع صراحةً حظر جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل يجب علي تسجيل نظامي لدى شركة الكهرباء في يوتا؟',
            a: 'لا. الأجهزة التي تقل عن 1,200 واط والمستوفية لمتطلبات HB 340 معفاة تمامًا من اتفاقيات الربط الشبكي والموافقة والإخطار.',
          },
          {
            q: 'هل يمكنني الحصول على مقابل مادي عن الطاقة الفائضة التي أُنتجها؟',
            a: 'لا. يستبعد HB 340 صراحةً الطاقة الشمسية القابلة للتوصيل المباشر من نظام Net Metering — فأي طاقة تُصدَّر إلى الشبكة تتجاوز استهلاكك لا تحصل على أي تعويض.',
          },
          {
            q: 'هل جهاز EcoFlow STREAM Ultra قانوني بالكامل للاستخدام في يوتا حاليًا؟',
            a: 'يُباع لسوق يوتا، لكن الاستخدام القانوني الكامل يعتمد على استكمال شهادة UL 3700، التي لم يؤكد أي نظام كامل حصوله عليها حتى وقت كتابة هذا المقال — تحقق من حالة الاعتماد الحالية قبل افتراض التوافق الكامل.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    title: '유타주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '유타주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '예 — HB 340 법안에 따라 2025년 5월 7일부터 합법입니다. 상한 1,200W, 전력회사 수수료 없음, 그러나 UL 3700 인증 제품은 아직 판매되지 않습니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '유타주에서 발코니 태양광은 합법입니까?',
        answer: '예, 합법입니다. 유타주 HB 340(Solar Power Amendments) 법안은 2025년 5월 7일부터 시행되고 있으며, 미국에서 이런 종류로는 최초의 주법입니다. 이 법안은 최대 1,200W의 플러그인 태양광 기기를 전력회사와의 계통연계 계약, 수수료, 통보 절차 없이 사용할 수 있도록 허용합니다.',
        bullets: [
          'HB 340은 2025년 3월에 서명되어 2025년 5월 7일부터 시행됨 — 미국에서 이런 종류로는 최초의 주법',
          '표준 120V AC 콘센트를 통해 상한 1,200W, 전력회사 승인 불필요',
          '유타주를 포함해 UL 3700 완전 인증을 받은 시스템은 아직 확인되지 않음',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '유타주 HB 340 법안은 2025년 5월 7일부터 시행되고 있으며, 미국 발코니 태양광 분야의 선구적인 법률입니다.',
          '1,200W 이하 기기가 대상이며, 계통연계 계약, 승인, 전력회사 수수료가 전혀 필요하지 않습니다.',
          '넷미터링은 적용되지 않습니다 — 전력망으로 역송된 잉여 전력에 대한 보상은 없습니다.',
          '인증 규격(UL 3700)은 존재하지만, 완전 인증을 받은 시스템은 아직 확인되지 않았습니다 — 구매 전 반드시 확인해야 합니다.',
        ],
      },
      body1: {
        title: '유타주 HB 340이 요구하는 사항은 무엇입니까?',
        content: [
          "<strong>유타주 HB 340은 '소형 휴대용 태양광 발전 장치'를 출력이 1,200와트를 초과하지 않고, 표준 120V AC 콘센트를 통해 연결되며, 전국적으로 인정받는 시험기관의 인증을 받은 장치로 정의합니다.</strong> 이 정의를 충족하는 기기는 전력회사와의 계통연계 계약, 승인 요건, 수수료에서 면제되며, 전력회사에 대한 통보조차 전혀 필요하지 않습니다. 다만 이 기기는 넷미터링에 참여할 수 없으므로, 전력망으로 수출된 잉여 전력에 대해서는 어떠한 보상도 받을 수 없습니다. 주 최대 전력회사인 Rocky Mountain Power는 Raymond Ward 주 하원의원이 안전 관련 조항을 두고 직접 협의한 이후에도 해당 법안에 대해 공식 입장을 밝히지 않았습니다.",
          '콜로라도주의 2026년 법률과 달리, 이 법률에는 주택소유자협회(HOA)나 임대인의 권한을 명시적으로 무효화하는 조항이 포함되어 있지 않습니다. 따라서 주 차원에서 플러그인 태양광 사용을 허용하더라도, 임대 계약서나 HOA 규약에 따라 패널 설치 위치가 여전히 제한될 수 있습니다.',
        ],
        columns: ['항목', '유타주 HB 340'],
        rows: [
          { 항목: '서명 / 시행일', '유타주 HB 340': '2025년 3월 / 2025년 5월 7일' },
          { 항목: '출력 상한', '유타주 HB 340': '1,200W' },
          { 항목: '전력회사 계통연계', '유타주 HB 340': '면제 — 수수료 및 승인 불필요' },
          { 항목: '넷미터링', '유타주 HB 340': '이용 불가' },
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
          "<strong>유타주 법률은 UL 3700 인증을 요구하지만, HB 340이 통과될 당시에는 이 규격 자체가 존재하지 않았습니다. UL Solutions는 법 시행 8개월 후인 2025년 12월에야 해당 규격을 발표했으며, 인증 시험은 2026년 1월에 시작되었습니다.</strong> 본 문서 작성 시점 기준으로 완전한 플러그인 태양광 시스템 중 UL 3700 완전 인증을 받은 것으로 확인된 제품은 없습니다. EcoFlow의 STREAM Ultra(1.92kWh, 1,200W, 정가 $1,279, LFP 배터리 10년 보증)는 유타주 시장을 대상으로 판매되고 있지만, 완전한 합법적 사용 여부는 해당 인증의 완료에 달려 있습니다 — 'UL 3700 준수'로 광고되는 제품이라 하더라도 인증 절차가 완료되었다고 단정하지 말고, 구체적인 표시 내용을 반드시 확인해야 합니다.",
          '유타주의 평균 주거용 전기 요금은 kWh당 약 11.6센트로, 이번 시리즈에서 다루는 주 가운데 가장 낮은 축에 속합니다. 이에 따라 800W 키트로 예상되는 절감액은 연간 약 $175입니다. 이는 실질적이지만 크지 않은 수익이며, 유타주의 의의는 경제성이 아니라 \'최초\'라는 데 있습니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨나요?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하세요 — 이는 단순한 제품 링크일 뿐, 특정 키트가 유타주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '유타주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '유타주에서 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '가능합니다. HB 340은 주 차원에서 기기를 합법화했지만, HOA나 임대인의 권한을 무효화하는 조항은 포함하고 있지 않습니다. 따라서 설치 전에 임대 계약서나 HOA 규약을 반드시 확인해야 합니다. HOA의 금지 조치를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법률</a>을 참고하십시오.',
          },
          {
            q: '유타주에서 시스템을 전력회사에 등록해야 합니까?',
            a: '아니요. HB 340의 요건을 충족하는 1,200W 미만 기기는 계통연계 계약, 승인, 통보 절차에서 완전히 면제됩니다.',
          },
          {
            q: '발전한 잉여 전력에 대해 보상을 받을 수 있습니까?',
            a: '아니요. HB 340은 플러그인 태양광을 넷미터링 대상에서 명시적으로 제외하고 있으므로, 소비량을 초과하여 수출된 전력에 대한 보상은 없습니다.',
          },
          {
            q: 'EcoFlow STREAM Ultra는 현재 유타주에서 완전히 합법적으로 사용할 수 있습니까?',
            a: '유타주 시장을 대상으로 판매되고 있지만, 완전한 합법적 사용 여부는 UL 3700 인증 완료에 달려 있으며, 본 문서 작성 시점 기준으로 완전 인증을 받은 시스템은 확인되지 않았습니다 — 완전히 준수한다고 단정하기 전에 현재 인증 상태를 반드시 확인해야 합니다.',
          },
        ],
      },
    },
  },
}
