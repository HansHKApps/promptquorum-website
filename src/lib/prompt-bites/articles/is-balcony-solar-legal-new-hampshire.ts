// Slug: is-balcony-solar-legal-new-hampshire
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
//
// NOTE: the source doc's own summary says only Colorado and Connecticut are
// "not yet in effect" among the 8 signed states, but its own state table lists
// New Hampshire's effective date as Jul 27, 2026 — after this batch's write-time
// (2026-07-16). Treated here as "signed, not yet in effect" for accuracy rather
// than following the doc's 2-state count, consistent with the doc's own stated
// standard of not rounding up to "legal now." Flag this discrepancy if the
// source doc is revised.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-en.png',
    title: 'Is Balcony Solar Legal in New Hampshire?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in New Hampshire? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, taking effect July 27, 2026. SB 540 makes New Hampshire the first Northeast state, with a 1,200W cap. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in New Hampshire',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in New Hampshire?',
        answer: 'Signed, but not yet in effect as of write-time. New Hampshire SB 540 was signed May 28, 2026 and takes effect July 27, 2026 — making New Hampshire the first Northeast state to enact a balcony solar law, with a standard 1,200W cap.',
        bullets: [
          'SB 540 signed May 28, 2026 — takes effect July 27, 2026',
          'First Northeast state to enact a balcony solar law',
          'New Hampshire has the highest electricity rate of the 8 enacted states, at 28.1¢/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'New Hampshire SB 540 is signed but takes effect July 27, 2026 — check the date before assuming it applies today.',
          'New Hampshire is the first Northeast state to enact a dedicated balcony solar law.',
          'At 28.1¢/kWh, New Hampshire has the highest average residential electricity rate of the 8 enacted states — a strong economics story once hardware is available.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will SB 540 Require in New Hampshire?',
        content: [
          '<strong>New Hampshire SB 540 follows the standard 1,200W cap used by most enacted states, and makes New Hampshire the first Northeast state to pass dedicated balcony solar legislation.</strong> It was signed May 28, 2026 and takes effect July 27, 2026 — check today\'s date against that effective date before assuming the law already applies to you. Once in effect, it will follow the standard exemption template: no utility interconnection agreement or fee, with net metering excluded for exported power.',
          'No HOA or landlord preemption language for New Hampshire was confirmed in this pass — check your lease or HOA covenant separately once the law is in effect.',
        ],
        columns: ['Field', 'New Hampshire SB 540'],
        rows: [
          { Field: 'Signed / Effective', 'New Hampshire SB 540': 'May 28, 2026 / Jul 27, 2026' },
          { Field: 'Wattage cap', 'New Hampshire SB 540': '1,200W' },
          { Field: 'Net metering', 'New Hampshire SB 540': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Is the Economics Story Strong in New Hampshire?',
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
          '<strong>New Hampshire has the highest average residential electricity rate of the 8 enacted states, at 28.1¢/kWh — more than double Utah\'s 11.6¢/kWh.</strong> That means once compliant hardware is available, the return on an 800W kit should be meaningfully better than in lower-rate states, though a New Hampshire-specific dollar figure wasn\'t in the source tracker\'s state-by-state savings table used for this series. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local rates — New Hampshire\'s high rate likely puts it toward the top of that range, but treat this as a national range, not a confirmed New Hampshire estimate.',
          'Certification is the other gate: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time, a nationwide gap that applies regardless of New Hampshire\'s effective date. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.',
          '<strong>Once the law takes effect and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> for context now — but neither page claims any kit is certified or ready for New Hampshire\'s not-yet-active law today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About New Hampshire Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in New Hampshire right now?',
            a: 'SB 540 is signed but doesn\'t take effect until July 27, 2026. Check today\'s date against that before assuming the law already covers you.',
          },
          {
            q: 'Why does New Hampshire matter for balcony solar?',
            a: 'It\'s the first Northeast state to pass dedicated legislation, and it has the highest electricity rate (28.1¢/kWh) of the 8 enacted states — a strong potential return once compliant hardware ships.',
          },
          {
            q: 'Can my HOA in New Hampshire ban balcony solar?',
            a: 'No HOA preemption language for New Hampshire was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Do I get paid for excess power in New Hampshire?',
            a: 'No. Net metering does not apply to balcony solar devices under SB 540, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-de.png',
    title: 'Ist Balkonsolar in New Hampshire legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in New Hampshire legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Unterzeichnet, tritt am 27. Juli 2026 in Kraft. SB 540 macht New Hampshire zum ersten Bundesstaat im Nordosten mit einer 1.200-W-Obergrenze. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hausbesitzer, die prüfen, ob Balkonsolar in New Hampshire legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in New Hampshire legal?',
        answer: 'Unterzeichnet, aber noch nicht in Kraft (Stand: Redaktionsschluss). New Hampshires SB 540 wurde am 28. Mai 2026 unterzeichnet und tritt am 27. Juli 2026 in Kraft – damit ist New Hampshire der erste Bundesstaat im Nordosten, der ein Balkonsolar-Gesetz erlässt, mit einer üblichen Obergrenze von 1.200 W.',
        bullets: [
          'SB 540 unterzeichnet am 28. Mai 2026 – tritt am 27. Juli 2026 in Kraft',
          'Erster Bundesstaat im Nordosten mit einem Balkonsolar-Gesetz',
          'New Hampshire hat mit 28,1 Cent/kWh den höchsten Strompreis der 8 Bundesstaaten mit verabschiedetem Gesetz',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'New Hampshires SB 540 ist unterzeichnet, tritt aber erst am 27. Juli 2026 in Kraft – prüfen Sie das Datum, bevor Sie annehmen, dass es bereits gilt.',
          'New Hampshire ist der erste Bundesstaat im Nordosten mit einem eigenen Balkonsolar-Gesetz.',
          'Mit 28,1 Cent/kWh hat New Hampshire den höchsten durchschnittlichen Strompreis der 8 Bundesstaaten mit verabschiedetem Gesetz – eine starke Wirtschaftlichkeits-Story, sobald Hardware verfügbar ist.',
          'Bisher hat kein Komplettsystem eine vollständige UL-3700-Zertifizierung bestätigt – wie in jedem anderen Bundesstaat mit verabschiedetem Gesetz.',
        ],
      },
      body1: {
        title: 'Was wird SB 540 in New Hampshire vorschreiben?',
        content: [
          '<strong>New Hampshires SB 540 folgt der üblichen 1.200-W-Obergrenze, die in den meisten Bundesstaaten mit verabschiedetem Gesetz gilt, und macht New Hampshire zum ersten Bundesstaat im Nordosten mit einem eigenen Balkonsolar-Gesetz.</strong> Es wurde am 28. Mai 2026 unterzeichnet und tritt am 27. Juli 2026 in Kraft – vergleichen Sie das heutige Datum mit diesem Stichtag, bevor Sie annehmen, dass das Gesetz bereits für Sie gilt. Sobald es in Kraft ist, folgt es der üblichen Ausnahmeregelung: keine Netzanschlussvereinbarung oder -gebühr der Energieversorger, wobei Net Metering für eingespeisten Strom ausgeschlossen bleibt.',
          'Für New Hampshire wurde in dieser Prüfung keine Regelung zur Verhinderung von HOA- oder Vermieterverboten bestätigt – prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung separat, sobald das Gesetz in Kraft ist.',
        ],
        columns: ['Feld', 'New Hampshire SB 540'],
        rows: [
          { 'Feld': 'Unterzeichnet / In Kraft', 'New Hampshire SB 540': '28. Mai 2026 / 27. Juli 2026' },
          { 'Feld': 'Leistungsobergrenze', 'New Hampshire SB 540': '1.200 W' },
          { 'Feld': 'Net Metering', 'New Hampshire SB 540': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Ist die Wirtschaftlichkeit in New Hampshire überzeugend?',
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
          '<strong>New Hampshire hat mit 28,1 Cent/kWh den höchsten durchschnittlichen Strompreis für Privathaushalte der 8 Bundesstaaten mit verabschiedetem Gesetz – mehr als doppelt so hoch wie Utahs 11,6 Cent/kWh.</strong> Das bedeutet: Sobald konforme Hardware verfügbar ist, sollte sich ein 800-W-Kit deutlich schneller amortisieren als in Bundesstaaten mit niedrigeren Preisen, auch wenn für New Hampshire keine spezifische Dollarangabe in der für diese Serie verwendeten bundesstaatlichen Ersparnistabelle der Quelle vorlag. Über die erfassten Bundesstaaten hinweg spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr – der hohe Strompreis in New Hampshire dürfte es eher an das obere Ende dieser Spanne bringen, aber betrachten Sie dies als landesweite Spanne, nicht als bestätigte Schätzung für New Hampshire.',
          'Die Zertifizierung ist der andere limitierende Faktor: Zum Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem eine vollständige UL-3700-Zertifizierung bestätigt – eine landesweite Lücke, die unabhängig vom Inkrafttreten in New Hampshire besteht. EcoFlows STREAM Ultra ist das marktnächste Produkt, wird derzeit aber speziell in Utah zum Verkauf angeboten.',
          '<strong>Sobald das Gesetz in Kraft tritt und zertifizierte Hardware existiert, brauchen Sie echte Optionen zum Vergleich.</strong> Sehen Sie sich schon jetzt die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> zur Orientierung an – aber keine der beiden Seiten behauptet, dass ein Kit bereits zertifiziert oder bereit für New Hampshires noch nicht in Kraft getretenes Gesetz ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in New Hampshire',
        faqs: [
          {
            q: 'Ist Balkonsolar in New Hampshire aktuell legal?',
            a: 'SB 540 ist unterzeichnet, tritt aber erst am 27. Juli 2026 in Kraft. Vergleichen Sie das heutige Datum damit, bevor Sie annehmen, dass das Gesetz bereits für Sie gilt.',
          },
          {
            q: 'Warum ist New Hampshire für Balkonsolar wichtig?',
            a: 'Es ist der erste Bundesstaat im Nordosten mit einem eigenen Gesetz und hat mit 28,1 Cent/kWh den höchsten Strompreis der 8 Bundesstaaten mit verabschiedetem Gesetz – eine starke potenzielle Rendite, sobald konforme Hardware verfügbar ist.',
          },
          {
            q: 'Kann meine HOA in New Hampshire Balkonsolar verbieten?',
            a: 'Für New Hampshire wurde in dieser Prüfung keine Regelung zur Verhinderung von HOA-Verboten bestätigt – prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung. Für einen Bundesstaat, der HOA-Verbote ausdrücklich untersagt, siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz in Colorado</a>.',
          },
          {
            q: 'Bekomme ich in New Hampshire eine Vergütung für überschüssigen Strom?',
            a: 'Nein. Net Metering gilt gemäß SB 540 nicht für Balkonsolar-Geräte – wie in jedem anderen Bundesstaat mit verabschiedetem Gesetz.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-fr.png',
    title: 'Le solaire de balcon est-il légal au New Hampshire ?',
    dateModified: '2026-07-16',
    seoTitle: 'Le solaire de balcon est-il légal au New Hampshire ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signée, entrée en vigueur le 27 juillet 2026. La SB 540 fait du New Hampshire le premier État du Nord-Est, avec un plafond de 1 200 W. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locataires et propriétaires américains vérifiant si le solaire de balcon est légal au New Hampshire',
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal au New Hampshire ?',
        answer: 'Signée, mais pas encore en vigueur à la date de rédaction. La SB 540 du New Hampshire a été signée le 28 mai 2026 et entre en vigueur le 27 juillet 2026 — faisant du New Hampshire le premier État du Nord-Est à adopter une loi sur le solaire de balcon, avec un plafond standard de 1 200 W.',
        bullets: [
          'SB 540 signée le 28 mai 2026 — entrée en vigueur le 27 juillet 2026',
          'Premier État du Nord-Est à adopter une loi sur le solaire de balcon',
          'Le New Hampshire a le tarif d\'électricité le plus élevé des 8 États ayant adopté une loi, à 28,1 ¢/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La SB 540 du New Hampshire est signée mais n\'entre en vigueur que le 27 juillet 2026 — vérifiez la date avant de supposer qu\'elle s\'applique déjà.',
          'Le New Hampshire est le premier État du Nord-Est à adopter une loi dédiée au solaire de balcon.',
          'À 28,1 ¢/kWh, le New Hampshire a le tarif d\'électricité résidentiel moyen le plus élevé des 8 États ayant adopté une loi — un bon argument économique une fois le matériel disponible.',
          'Aucun système complet n\'a confirmé de certification UL 3700 intégrale, comme dans tous les autres États concernés.',
        ],
      },
      body1: {
        title: 'Que va exiger la SB 540 au New Hampshire ?',
        content: [
          '<strong>La SB 540 du New Hampshire suit le plafond standard de 1 200 W utilisé par la plupart des États ayant adopté une loi, et fait du New Hampshire le premier État du Nord-Est à voter une législation dédiée au solaire de balcon.</strong> Signée le 28 mai 2026, elle entre en vigueur le 27 juillet 2026 — comparez la date du jour à cette échéance avant de supposer que la loi s\'applique déjà. Une fois en vigueur, elle suivra le modèle d\'exemption standard : aucun contrat de raccordement ni frais auprès du fournisseur d\'électricité, le net metering étant exclu pour l\'électricité exportée.',
          'Aucune disposition empêchant les syndics de copropriété ou les propriétaires bailleurs d\'interdire le solaire de balcon n\'a été confirmée pour le New Hampshire dans cette analyse — vérifiez séparément votre bail ou règlement de copropriété une fois la loi en vigueur.',
        ],
        columns: ['Champ', 'New Hampshire SB 540'],
        rows: [
          { 'Champ': 'Signature / Entrée en vigueur', 'New Hampshire SB 540': '28 mai 2026 / 27 juillet 2026' },
          { 'Champ': 'Plafond de puissance', 'New Hampshire SB 540': '1 200 W' },
          { 'Champ': 'Net metering', 'New Hampshire SB 540': 'Non disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Le bilan économique est-il favorable au New Hampshire ?',
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
          '<strong>Le New Hampshire a le tarif d\'électricité résidentiel moyen le plus élevé des 8 États ayant adopté une loi, à 28,1 ¢/kWh — plus du double des 11,6 ¢/kWh de l\'Utah.</strong> Une fois le matériel conforme disponible, le retour sur investissement d\'un kit de 800 W devrait donc être nettement meilleur que dans les États à tarifs plus bas, même si aucun chiffre spécifique au New Hampshire ne figurait dans le tableau d\'économies par État de la source utilisée pour cette série. Sur l\'ensemble des États suivis, un kit de 800 W permet d\'économiser environ 150 à 350 $ par an selon les tarifs locaux — le tarif élevé du New Hampshire le placerait probablement vers le haut de cette fourchette, mais il s\'agit d\'une fourchette nationale, pas d\'une estimation confirmée pour le New Hampshire.',
          'La certification reste l\'autre point de blocage : à la date de rédaction, aucun système solaire enfichable complet n\'a confirmé de certification UL 3700 intégrale, un manque valable à l\'échelle nationale, indépendamment de la date d\'entrée en vigueur au New Hampshire. Le STREAM Ultra d\'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement dans l\'Utah.',
          '<strong>Une fois la loi en vigueur et du matériel certifié disponible, vous voudrez comparer de vraies options.</strong> Consultez dès maintenant, à titre de contexte, notre sélection des <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">meilleures batteries domestiques US pour le solaire de balcon</a> ou notre <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparatif EcoFlow vs. Anker vs. Zendure</a> — mais aucune de ces pages n\'affirme qu\'un kit est certifié ou prêt pour la loi du New Hampshire, qui n\'est pas encore en vigueur à ce jour.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon au New Hampshire',
        faqs: [
          {
            q: 'Le solaire de balcon est-il légal au New Hampshire actuellement ?',
            a: 'La SB 540 est signée mais n\'entre en vigueur que le 27 juillet 2026. Comparez la date du jour à cette échéance avant de supposer que la loi s\'applique déjà.',
          },
          {
            q: 'Pourquoi le New Hampshire est-il important pour le solaire de balcon ?',
            a: 'C\'est le premier État du Nord-Est à voter une législation dédiée, et il a le tarif d\'électricité le plus élevé (28,1 ¢/kWh) des 8 États concernés — un retour sur investissement potentiellement élevé une fois le matériel conforme disponible.',
          },
          {
            q: 'Ma copropriété au New Hampshire peut-elle interdire le solaire de balcon ?',
            a: 'Aucune disposition empêchant les interdictions par les syndics de copropriété n\'a été confirmée pour le New Hampshire dans cette analyse — vérifiez votre bail ou règlement de copropriété. Pour un État qui interdit explicitement ces refus, consultez la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon au Colorado</a>.',
          },
          {
            q: 'Suis-je payé pour l\'électricité excédentaire au New Hampshire ?',
            a: 'Non. Le net metering ne s\'applique pas aux dispositifs de solaire de balcon en vertu de la SB 540, comme dans tous les autres États concernés.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-ja.png',
    title: 'ニューハンプシャー州でベランダソーラーは合法ですか？',
    dateModified: '2026-07-16',
    seoTitle: 'ニューハンプシャー州でベランダソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: '署名済みで、2026年7月27日に施行されます。SB 540によりニューハンプシャー州は東北部で初めての州となり、上限は1,200Wです。PromptQuorumからの簡潔な回答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'ニューハンプシャー州でベランダソーラーが合法かどうかを確認する米国の賃借人および住宅所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'ニューハンプシャー州でベランダソーラーは合法ですか？',
        answer: '署名済みですが、執筆時点ではまだ施行されていません。ニューハンプシャー州のSB 540は2026年5月28日に署名され、2026年7月27日に施行されます。これによりニューハンプシャー州はベランダソーラー法を制定した最初の東北部の州となり、上限は標準の1,200Wです。',
        bullets: [
          'SB 540は2026年5月28日に署名 — 2026年7月27日に施行',
          'ベランダソーラー法を制定した最初の東北部の州',
          'ニューハンプシャー州は法制化済みの8州の中で最も高い電気料金（28.1¢/kWh）',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ニューハンプシャー州のSB 540は署名済みですが、施行は2026年7月27日です。すでに適用されていると思い込む前に日付を確認してください。',
          'ニューハンプシャー州は、ベランダソーラー専用法を制定した最初の東北部の州です。',
          '28.1¢/kWhというニューハンプシャー州の電気料金は、法制化済みの8州の中で最も高く、機器が入手可能になれば経済的なメリットが大きくなります。',
          '他のすべての法制化州と同様、UL 3700の完全認証を確認済みの製品はまだありません。',
        ],
      },
      body1: {
        title: 'ニューハンプシャー州のSB 540が求める内容は？',
        content: [
          '<strong>ニューハンプシャー州のSB 540は、多くの法制化州で採用されている標準の1,200W上限に従っており、ニューハンプシャー州はベランダソーラー専用法を可決した最初の東北部の州となります。</strong> 2026年5月28日に署名され、2026年7月27日に施行されます。この法律がすでに自分に適用されると思い込む前に、今日の日付とこの施行日を比較してください。施行後は標準的な適用除外の枠組みに従い、電力会社との系統連系契約や料金は不要で、輸出された電力に対するネットメータリングは対象外となります。',
          'ニューハンプシャー州について、HOA（住宅所有者組合）または家主による設置禁止を防ぐ規定は今回の調査では確認されていません。法律が施行された後、賃貸契約またはHOA規約を別途ご確認ください。',
        ],
        columns: ['項目', 'ニューハンプシャー州 SB 540'],
        rows: [
          { '項目': '署名日／施行日', 'ニューハンプシャー州 SB 540': '2026年5月28日／2026年7月27日' },
          { '項目': 'ワット数上限', 'ニューハンプシャー州 SB 540': '1,200W' },
          { '項目': 'ネットメータリング', 'ニューハンプシャー州 SB 540': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'ニューハンプシャー州の経済性は魅力的ですか？',
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
          '<strong>ニューハンプシャー州は28.1¢/kWhと、法制化済みの8州の中で最も高い住宅用平均電気料金を記録しており、これはユタ州の11.6¢/kWhの2倍以上です。</strong> つまり、適合機器が入手可能になれば、800Wキットの投資回収は、電気料金の低い州よりも大幅に有利になるはずです。ただし、このシリーズで使用したソースの州別節約額データには、ニューハンプシャー州固有のドル金額は含まれていませんでした。追跡対象の州全体では、800Wキットは地域の料金に応じて年間約150～350ドルの節約になります。ニューハンプシャー州の高い料金を踏まえるとこの範囲の上限に近づく可能性がありますが、これは全国的な範囲であり、ニューハンプシャー州固有の確定推計ではないことにご注意ください。',
          '認証も別のハードルです。執筆時点で、UL 3700の完全認証を確認済みのプラグイン式ソーラーシステムは存在せず、これはニューハンプシャー州の施行日にかかわらず全国的なギャップです。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在はユタ州限定で販売されています。',
          '<strong>法律が施行され、認証済みの機器が登場したら、比較できる実際の選択肢が必要になります。</strong> 参考として、現時点での<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">ベランダソーラー向け米国製ホームバッテリーのおすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow対Anker対Zendureのエコシステム比較</a>をご覧ください。ただし、どちらのページも、キットが認証済みである、またはニューハンプシャー州のまだ施行されていない法律に対応済みであるとは述べていません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ニューハンプシャー州のベランダソーラーに関する簡潔な回答',
        faqs: [
          {
            q: '現時点でニューハンプシャー州でベランダソーラーは合法ですか？',
            a: 'SB 540は署名済みですが、施行は2026年7月27日です。すでに適用されると思い込む前に、今日の日付とこの日付を比較してください。',
          },
          {
            q: 'なぜニューハンプシャー州がベランダソーラーにとって重要なのですか？',
            a: 'ベランダソーラー専用法を可決した最初の東北部の州であり、法制化済みの8州の中で最も高い電気料金（28.1¢/kWh）を記録しています。適合機器が発売されれば、高いリターンが期待できます。',
          },
          {
            q: 'ニューハンプシャー州のHOAはベランダソーラーを禁止できますか？',
            a: 'ニューハンプシャー州についてHOAによる禁止を防ぐ規定は今回の調査では確認されていません。賃貸契約またはHOA規約をご確認ください。HOAによる禁止を明確に阻止している州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のベランダソーラー法</a>をご覧ください。',
          },
          {
            q: 'ニューハンプシャー州では余剰電力に対して支払いを受けられますか？',
            a: 'いいえ。SB 540のもとでは、他のすべての法制化州と同様、ベランダソーラー機器にネットメータリングは適用されません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-zh.png',
    title: '新罕布什尔州的阳台太阳能合法吗？',
    dateModified: '2026-07-16',
    seoTitle: '新罕布什尔州的阳台太阳能合法吗？| Prompt Bites | PromptQuorum',
    metaDescription: '已签署，将于2026年7月27日生效。SB 540使新罕布什尔州成为东北部第一个立法的州，功率上限为1,200瓦。PromptQuorum快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '想确认新罕布什尔州阳台太阳能是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '新罕布什尔州的阳台太阳能合法吗？',
        answer: '已签署，但截至撰写时尚未生效。新罕布什尔州SB 540于2026年5月28日签署，将于2026年7月27日生效——这使新罕布什尔州成为东北部第一个颁布阳台太阳能法律的州，标准功率上限为1,200瓦。',
        bullets: [
          'SB 540于2026年5月28日签署——2026年7月27日生效',
          '东北部第一个颁布阳台太阳能法律的州',
          '新罕布什尔州是已立法的8个州中电价最高的，达28.1美分/千瓦时',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '新罕布什尔州SB 540已签署，但要到2026年7月27日才生效——先核对日期，再判断法律是否已适用。',
          '新罕布什尔州是东北部第一个颁布专门阳台太阳能法律的州。',
          '新罕布什尔州平均住宅电价为28.1美分/千瓦时，是已立法8个州中最高的——一旦硬件上市，经济性优势明显。',
          '和其他所有已立法的州一样，目前尚无完整系统确认通过UL 3700全项认证。',
        ],
      },
      body1: {
        title: '新罕布什尔州SB 540将有哪些要求？',
        content: [
          '<strong>新罕布什尔州SB 540采用大多数已立法州通用的1,200瓦功率上限，使新罕布什尔州成为东北部第一个通过专门阳台太阳能立法的州。</strong> 该法案于2026年5月28日签署，2026年7月27日生效——在假设法律已适用之前，请先将当前日期与生效日期对比。生效后，将遵循标准豁免模式：无需与电力公司签订并网协议或支付费用，但输出电力不适用净计量。',
          '本次梳理未确认新罕布什尔州有阻止业主协会（HOA）或房东禁止阳台太阳能的相关条款——法律生效后请另行核实您的租约或HOA规约。',
        ],
        columns: ['项目', '新罕布什尔州SB 540'],
        rows: [
          { '项目': '签署／生效', '新罕布什尔州SB 540': '2026年5月28日／2026年7月27日' },
          { '项目': '功率上限', '新罕布什尔州SB 540': '1,200瓦' },
          { '项目': '净计量', '新罕布什尔州SB 540': '不适用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '新罕布什尔州的经济性如何？',
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
          '<strong>新罕布什尔州平均住宅电价为28.1美分/千瓦时，是已立法8个州中最高的——超过犹他州11.6美分/千瓦时的两倍。</strong> 这意味着一旦合规硬件上市，800瓦套件的投资回报应明显优于电价较低的州，不过本系列使用的各州节省数据来源表中并未包含新罕布什尔州的具体数字。在已统计的各州中，800瓦套件按当地电价估算每年可节省约150至350美元——新罕布什尔州电价较高，很可能处于该区间的上限，但这仍是全国范围的估算，并非针对新罕布什尔州确认的具体数字。',
          '认证是另一道门槛：截至撰写时，尚无完整的即插式太阳能系统确认通过UL 3700全项认证，这是一个与新罕布什尔州生效日期无关的全国性缺口。EcoFlow STREAM Ultra是最接近上市的产品，但目前仅在犹他州专门销售。',
          '<strong>一旦法律生效并出现认证硬件，您会需要真正可比较的选择。</strong> 目前可先参考<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>——但这两个页面均未声称任何套件已获认证或已为新罕布什尔州尚未生效的法律做好准备。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于新罕布什尔州阳台太阳能的快速解答',
        faqs: [
          {
            q: '新罕布什尔州现在允许阳台太阳能吗？',
            a: 'SB 540已签署，但要到2026年7月27日才生效。请先核对当前日期，再判断法律是否已适用于您。',
          },
          {
            q: '为什么新罕布什尔州对阳台太阳能很重要？',
            a: '它是东北部第一个通过专门立法的州，电价（28.1美分/千瓦时）也是已立法8个州中最高的——一旦合规硬件上市，潜在回报可观。',
          },
          {
            q: '新罕布什尔州的业主协会（HOA）能禁止阳台太阳能吗？',
            a: '本次梳理未确认新罕布什尔州有阻止HOA禁令的相关条款——请核实您的租约或HOA规约。若想了解明确禁止HOA阻挠的州，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法律</a>。',
          },
          {
            q: '在新罕布什尔州，多余的电力能获得补偿吗？',
            a: '不能。根据SB 540，净计量不适用于阳台太阳能设备，这与所有其他已立法的州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-es.png',
    title: '¿Es legal la energía solar de balcón en New Hampshire?',
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en New Hampshire? | Prompt Bites | PromptQuorum',
    metaDescription: 'Firmada, entra en vigor el 27 de julio de 2026. La SB 540 convierte a New Hampshire en el primer estado del noreste, con un límite de 1,200 W. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en New Hampshire',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en New Hampshire?',
        answer: 'Firmada, pero aún no está en vigor al momento de escribir esto. La SB 540 de New Hampshire se firmó el 28 de mayo de 2026 y entra en vigor el 27 de julio de 2026, lo que convierte a New Hampshire en el primer estado del noreste en aprobar una ley de energía solar de balcón, con un límite estándar de 1,200 W.',
        bullets: [
          'SB 540 firmada el 28 de mayo de 2026 — entra en vigor el 27 de julio de 2026',
          'Primer estado del noreste en aprobar una ley de energía solar de balcón',
          'New Hampshire tiene la tarifa eléctrica más alta de los 8 estados con ley aprobada, a 28.1 ¢/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La SB 540 de New Hampshire está firmada, pero no entra en vigor hasta el 27 de julio de 2026: verifica la fecha antes de asumir que ya aplica.',
          'New Hampshire es el primer estado del noreste en aprobar una ley dedicada a la energía solar de balcón.',
          'Con 28.1 ¢/kWh, New Hampshire tiene la tarifa eléctrica residencial promedio más alta de los 8 estados con ley aprobada, lo que le da una gran ventaja económica una vez que haya hardware disponible.',
          'Ningún sistema completo ha confirmado certificación UL 3700 completa todavía, igual que en el resto de los estados con ley aprobada.',
        ],
      },
      body1: {
        title: '¿Qué exigirá la SB 540 en New Hampshire?',
        content: [
          '<strong>La SB 540 de New Hampshire sigue el límite estándar de 1,200 W que usan la mayoría de los estados con ley aprobada, y convierte a New Hampshire en el primer estado del noreste en aprobar legislación dedicada a la energía solar de balcón.</strong> Se firmó el 28 de mayo de 2026 y entra en vigor el 27 de julio de 2026; compara la fecha de hoy con esa fecha de entrada en vigor antes de asumir que la ley ya te aplica. Una vez en vigor, seguirá el modelo estándar de exención: sin acuerdo de interconexión ni tarifa con la compañía eléctrica, y sin net metering para la energía exportada.',
          'En esta revisión no se confirmó ninguna disposición que impida a las HOA o a los propietarios prohibir la energía solar de balcón en New Hampshire: revisa tu contrato de arrendamiento o el reglamento de tu HOA por separado una vez que la ley esté en vigor.',
        ],
        columns: ['Campo', 'New Hampshire SB 540'],
        rows: [
          { 'Campo': 'Firmada / En vigor', 'New Hampshire SB 540': '28 de mayo de 2026 / 27 de julio de 2026' },
          { 'Campo': 'Límite de potencia', 'New Hampshire SB 540': '1,200 W' },
          { 'Campo': 'Net metering', 'New Hampshire SB 540': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Es sólida la historia económica en New Hampshire?',
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
          '<strong>New Hampshire tiene la tarifa eléctrica residencial promedio más alta de los 8 estados con ley aprobada, a 28.1 ¢/kWh, más del doble que los 11.6 ¢/kWh de Utah.</strong> Eso significa que, una vez que haya hardware compatible disponible, el retorno de un kit de 800 W debería ser considerablemente mejor que en estados con tarifas más bajas, aunque no había una cifra específica para New Hampshire en la tabla de ahorros por estado de la fuente usada en esta serie. En los estados que sí se registraron, un kit de 800 W ahorra aproximadamente entre $150 y $350 al año según las tarifas locales; la tarifa alta de New Hampshire probablemente lo ubique hacia el extremo superior de ese rango, pero trátalo como un rango nacional, no como una estimación confirmada para New Hampshire.',
          'La certificación es el otro obstáculo: al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado certificación UL 3700 completa, una brecha a nivel nacional que aplica sin importar la fecha de entrada en vigor en New Hampshire. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente en Utah.',
          '<strong>Una vez que la ley entre en vigor y exista hardware certificado, querrás opciones reales para comparar.</strong> Consulta ahora, como contexto, las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación de ecosistemas EcoFlow vs. Anker vs. Zendure</a>, pero ninguna de las dos páginas afirma que algún kit esté certificado o listo para la ley de New Hampshire, que aún no está en vigor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en New Hampshire',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en New Hampshire ahora mismo?',
            a: 'La SB 540 está firmada, pero no entra en vigor hasta el 27 de julio de 2026. Compara la fecha de hoy con esa fecha antes de asumir que la ley ya te aplica.',
          },
          {
            q: '¿Por qué es importante New Hampshire para la energía solar de balcón?',
            a: 'Es el primer estado del noreste en aprobar legislación dedicada, y tiene la tarifa eléctrica más alta (28.1 ¢/kWh) de los 8 estados con ley aprobada: un retorno potencialmente alto una vez que salga hardware compatible al mercado.',
          },
          {
            q: '¿Puede mi HOA en New Hampshire prohibir la energía solar de balcón?',
            a: 'En esta revisión no se confirmó ninguna disposición que impida las prohibiciones de HOA en New Hampshire: revisa tu contrato de arrendamiento o el reglamento de tu HOA. Para un estado que bloquea explícitamente las prohibiciones de HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Me pagan por el excedente de energía en New Hampshire?',
            a: 'No. El net metering no aplica a los dispositivos de energía solar de balcón bajo la SB 540, igual que en el resto de los estados con ley aprobada.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-pt.png',
    title: 'A energia solar de varanda é legal em New Hampshire?',
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal em New Hampshire? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sancionada, entra em vigor em 27 de julho de 2026. A SB 540 torna New Hampshire o primeiro estado do Nordeste dos EUA, com limite de 1.200 W. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em New Hampshire',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em New Hampshire?',
        answer: 'Sancionada, mas ainda não está em vigor no momento em que este texto foi escrito. A SB 540 de New Hampshire foi sancionada em 28 de maio de 2026 e entra em vigor em 27 de julho de 2026 — tornando New Hampshire o primeiro estado do Nordeste dos EUA a aprovar uma lei de energia solar de varanda, com limite padrão de 1.200 W.',
        bullets: [
          'SB 540 sancionada em 28 de maio de 2026 — entra em vigor em 27 de julho de 2026',
          'Primeiro estado do Nordeste dos EUA a aprovar uma lei de energia solar de varanda',
          'New Hampshire tem a tarifa de energia elétrica mais alta entre os 8 estados com lei aprovada, a 28,1 ¢/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A SB 540 de New Hampshire está sancionada, mas só entra em vigor em 27 de julho de 2026 — verifique a data antes de presumir que ela já se aplica.',
          'New Hampshire é o primeiro estado do Nordeste dos EUA a aprovar uma lei dedicada à energia solar de varanda.',
          'Com 28,1 ¢/kWh, New Hampshire tem a tarifa residencial média de eletricidade mais alta entre os 8 estados com lei aprovada — uma boa vantagem econômica assim que o hardware estiver disponível.',
          'Nenhum sistema completo confirmou certificação UL 3700 total ainda, assim como em todos os outros estados com lei aprovada.',
        ],
      },
      body1: {
        title: 'O que a SB 540 vai exigir em New Hampshire?',
        content: [
          '<strong>A SB 540 de New Hampshire segue o limite padrão de 1.200 W usado pela maioria dos estados com lei aprovada, e torna New Hampshire o primeiro estado do Nordeste dos EUA a aprovar legislação dedicada à energia solar de varanda.</strong> Foi sancionada em 28 de maio de 2026 e entra em vigor em 27 de julho de 2026 — compare a data de hoje com essa data de vigência antes de presumir que a lei já se aplica a você. Uma vez em vigor, ela seguirá o modelo padrão de isenção: sem acordo de interconexão ou taxa da concessionária de energia, com net metering excluído para energia exportada.',
          'Nenhuma disposição que impeça associações de moradores (HOA) ou proprietários de proibir a energia solar de varanda foi confirmada para New Hampshire nesta análise — verifique seu contrato de aluguel ou regulamento da HOA separadamente assim que a lei entrar em vigor.',
        ],
        columns: ['Campo', 'New Hampshire SB 540'],
        rows: [
          { 'Campo': 'Sancionada / Em vigor', 'New Hampshire SB 540': '28 de maio de 2026 / 27 de julho de 2026' },
          { 'Campo': 'Limite de potência', 'New Hampshire SB 540': '1.200 W' },
          { 'Campo': 'Net metering', 'New Hampshire SB 540': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'A economia em New Hampshire é vantajosa?',
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
          '<strong>New Hampshire tem a tarifa residencial média de eletricidade mais alta entre os 8 estados com lei aprovada, a 28,1 ¢/kWh — mais que o dobro dos 11,6 ¢/kWh de Utah.</strong> Isso significa que, assim que houver hardware compatível disponível, o retorno de um kit de 800 W deve ser bem melhor do que em estados com tarifas mais baixas, embora um valor específico para New Hampshire não constasse na tabela de economia por estado da fonte usada nesta série. Nos estados que foram rastreados, um kit de 800 W economiza aproximadamente US$ 150 a US$ 350 por ano, dependendo das tarifas locais — a tarifa alta de New Hampshire provavelmente o coloca perto do topo dessa faixa, mas trate isso como uma faixa nacional, não como uma estimativa confirmada para New Hampshire.',
          'A certificação é o outro obstáculo: no momento em que este texto foi escrito, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total, uma lacuna nacional que se aplica independentemente da data de vigência em New Hampshire. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente está à venda especificamente em Utah.',
          '<strong>Assim que a lei entrar em vigor e existir hardware certificado, você vai querer opções reais para comparar.</strong> Veja agora, como referência, as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">indicações atuais de baterias residenciais dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — mas nenhuma das duas páginas afirma que algum kit esteja certificado ou pronto para a lei de New Hampshire, que ainda não está em vigor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em New Hampshire',
        faqs: [
          {
            q: 'A energia solar de varanda é legal em New Hampshire agora?',
            a: 'A SB 540 está sancionada, mas só entra em vigor em 27 de julho de 2026. Compare a data de hoje com essa data antes de presumir que a lei já se aplica a você.',
          },
          {
            q: 'Por que New Hampshire é importante para a energia solar de varanda?',
            a: 'É o primeiro estado do Nordeste dos EUA a aprovar legislação dedicada, e tem a tarifa de eletricidade mais alta (28,1 ¢/kWh) entre os 8 estados com lei aprovada — um retorno potencialmente alto assim que o hardware compatível for lançado.',
          },
          {
            q: 'Minha HOA em New Hampshire pode proibir a energia solar de varanda?',
            a: 'Nenhuma disposição que impeça proibições de HOA foi confirmada para New Hampshire nesta análise — verifique seu contrato de aluguel ou regulamento da HOA. Para um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'Eu recebo pagamento pelo excedente de energia em New Hampshire?',
            a: 'Não. O net metering não se aplica a dispositivos de energia solar de varanda sob a SB 540, assim como em todos os outros estados com lei aprovada.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-ar.png',
    title: 'هل الطاقة الشمسية للشرفات قانونية في نيو هامبشاير؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في نيو هامبشاير؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'تم التوقيع عليه، ويدخل حيز التنفيذ في 27 يوليو 2026. يجعل قانون SB 540 ولاية نيو هامبشاير أول ولاية في الشمال الشرقي، بحد أقصى 1,200 واط. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في نيو هامبشاير',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في نيو هامبشاير؟',
        answer: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد حتى وقت كتابة هذا المحتوى. تم التوقيع على قانون SB 540 في نيو هامبشاير بتاريخ 28 مايو 2026 ويدخل حيز التنفيذ في 27 يوليو 2026 — ما يجعل نيو هامبشاير أول ولاية في الشمال الشرقي تسن قانونًا للطاقة الشمسية للشرفات، بحد أقصى قياسي يبلغ 1,200 واط.',
        bullets: [
          'تم التوقيع على SB 540 بتاريخ 28 مايو 2026 — ويدخل حيز التنفيذ في 27 يوليو 2026',
          'أول ولاية في الشمال الشرقي تسن قانونًا للطاقة الشمسية للشرفات',
          'تمتلك نيو هامبشاير أعلى سعر للكهرباء بين الولايات الثماني التي سنّت القانون، عند 28.1 سنت/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تم التوقيع على قانون SB 540 في نيو هامبشاير، لكنه لا يدخل حيز التنفيذ إلا في 27 يوليو 2026 — تحقق من التاريخ قبل افتراض أنه ساري المفعول بالفعل.',
          'نيو هامبشاير هي أول ولاية في الشمال الشرقي تسن قانونًا مخصصًا للطاقة الشمسية للشرفات.',
          'بسعر 28.1 سنت/kWh، تمتلك نيو هامبشاير أعلى متوسط سعر كهرباء سكني بين الولايات الثماني التي سنّت القانون — وهي قصة اقتصادية قوية بمجرد توفر الأجهزة.',
          'لم يؤكد أي نظام كامل بعد حصوله على شهادة UL 3700 الكاملة، تمامًا كما هو الحال في جميع الولايات الأخرى التي سنّت القانون.',
        ],
      },
      body1: {
        title: 'ماذا سيتطلب قانون SB 540 في نيو هامبشاير؟',
        content: [
          '<strong>يتبع قانون SB 540 في نيو هامبشاير الحد الأقصى القياسي البالغ 1,200 واط المعتمد في معظم الولايات التي سنّت القانون، ويجعل نيو هامبشاير أول ولاية في الشمال الشرقي تُقر تشريعًا مخصصًا للطاقة الشمسية للشرفات.</strong> تم التوقيع عليه في 28 مايو 2026 ويدخل حيز التنفيذ في 27 يوليو 2026 — قارن تاريخ اليوم بتاريخ السريان هذا قبل افتراض أن القانون ينطبق عليك بالفعل. بمجرد سريانه، سيتبع نموذج الإعفاء القياسي: لا حاجة إلى اتفاقية ربط بالشبكة أو رسوم مع شركة الكهرباء، مع استبعاد نظام صافي القياس (net metering) للطاقة المُصدَّرة.',
          'لم يتم تأكيد أي نص يمنع جمعيات الملاك (HOA) أو الملاك من حظر الطاقة الشمسية للشرفات في نيو هامبشاير ضمن هذه المراجعة — تحقق من عقد الإيجار أو لائحة جمعية الملاك بشكل منفصل بمجرد سريان القانون.',
        ],
        columns: ['الحقل', 'New Hampshire SB 540'],
        rows: [
          { 'الحقل': 'التوقيع / السريان', 'New Hampshire SB 540': '28 مايو 2026 / 27 يوليو 2026' },
          { 'الحقل': 'الحد الأقصى للطاقة', 'New Hampshire SB 540': '1,200 واط' },
          { 'الحقل': 'صافي القياس (Net metering)', 'New Hampshire SB 540': 'غير متاح' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل القصة الاقتصادية قوية في نيو هامبشاير؟',
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
          '<strong>تمتلك نيو هامبشاير أعلى متوسط سعر كهرباء سكني بين الولايات الثماني التي سنّت القانون، عند 28.1 سنت/kWh — أي أكثر من ضعف سعر يوتا البالغ 11.6 سنت/kWh.</strong> هذا يعني أنه بمجرد توفر أجهزة متوافقة، من المفترض أن يكون العائد على مجموعة بقدرة 800 واط أفضل بكثير مقارنة بالولايات ذات الأسعار الأقل، رغم أن رقمًا محددًا بالدولار خاصًا بنيو هامبشاير لم يكن موجودًا في جدول التوفير حسب الولاية الخاص بالمصدر المستخدم في هذه السلسلة. عبر الولايات التي تم تتبعها، توفر مجموعة بقدرة 800 واط ما يقارب 150 إلى 350 دولارًا سنويًا حسب الأسعار المحلية — من المرجح أن يضع السعر المرتفع في نيو هامبشاير هذا الرقم في الجزء الأعلى من هذا النطاق، لكن يجب اعتبار هذا نطاقًا وطنيًا وليس تقديرًا مؤكدًا خاصًا بنيو هامبشاير.',
          'تُعد الشهادة العائق الآخر: حتى وقت كتابة هذا المحتوى، لم يؤكد أي نظام طاقة شمسية كامل قابل للتوصيل حصوله على شهادة UL 3700 الكاملة، وهي فجوة على المستوى الوطني تنطبق بغض النظر عن تاريخ سريان القانون في نيو هامبشاير. يُعد منتج STREAM Ultra من EcoFlow الأقرب إلى السوق، لكنه معروض للبيع حاليًا في يوتا تحديدًا.',
          '<strong>بمجرد أن يدخل القانون حيز التنفيذ ويظهر عتاد معتمد، ستحتاج إلى خيارات حقيقية للمقارنة.</strong> اطّلع الآن، على سبيل السياق فقط، على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل اختيارات بطاريات المنازل الأمريكية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة أنظمة EcoFlow مقابل Anker مقابل Zendure</a> — لكن أيًا من الصفحتين لا يدّعي أن أي مجموعة معتمدة أو جاهزة لقانون نيو هامبشاير الذي لم يدخل حيز التنفيذ بعد.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في نيو هامبشاير',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في نيو هامبشاير الآن؟',
            a: 'تم التوقيع على SB 540، لكنه لا يدخل حيز التنفيذ إلا في 27 يوليو 2026. قارن تاريخ اليوم بهذا التاريخ قبل افتراض أن القانون يشملك بالفعل.',
          },
          {
            q: 'لماذا تُعد نيو هامبشاير مهمة بالنسبة للطاقة الشمسية للشرفات؟',
            a: 'إنها أول ولاية في الشمال الشرقي تُقر تشريعًا مخصصًا، ولديها أعلى سعر للكهرباء (28.1 سنت/kWh) بين الولايات الثماني التي سنّت القانون — ما يعني عائدًا محتملًا قويًا بمجرد طرح أجهزة متوافقة.',
          },
          {
            q: 'هل يمكن لجمعية الملاك في نيو هامبشاير حظر الطاقة الشمسية للشرفات؟',
            a: 'لم يتم تأكيد أي نص يمنع حظر جمعيات الملاك في نيو هامبشاير ضمن هذه المراجعة — تحقق من عقد الإيجار أو لائحة جمعية الملاك. للاطلاع على ولاية تمنع صراحةً حظر جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل أحصل على مقابل مالي للطاقة الفائضة في نيو هامبشاير؟',
            a: 'لا. لا ينطبق نظام صافي القياس (net metering) على أجهزة الطاقة الشمسية للشرفات بموجب SB 540، تمامًا كما هو الحال في جميع الولايات الأخرى التي سنّت القانون.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-hampshire-overview-hero-ko.png',
    title: '뉴햄프셔주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '뉴햄프셔주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '서명되었으며 2026년 7월 27일부터 시행됩니다. SB 540 법안으로 뉴햄프셔주는 동북부 최초의 주가 되며, 상한선은 1,200W입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '뉴햄프셔주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '뉴햄프셔주에서 발코니 태양광은 합법입니까?',
        answer: '서명되었지만, 작성 시점 기준으로 아직 시행되지 않았습니다. 뉴햄프셔주 SB 540 법안은 2026년 5월 28일에 서명되었으며 2026년 7월 27일부터 시행됩니다. 이로써 뉴햄프셔주는 발코니 태양광 법을 제정한 최초의 동북부 주가 되며, 표준 상한선은 1,200W입니다.',
        bullets: [
          'SB 540 법안은 2026년 5월 28일 서명 — 2026년 7월 27일부터 시행',
          '발코니 태양광 법을 제정한 최초의 동북부 주',
          '뉴햄프셔주는 법제화된 8개 주 중 전기 요금이 가장 높으며, kWh당 28.1센트입니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '뉴햄프셔주 SB 540 법안은 서명되었지만 2026년 7월 27일부터 시행됩니다. 이미 적용된다고 가정하기 전에 날짜를 반드시 확인하십시오.',
          '뉴햄프셔주는 발코니 태양광 전용 법을 제정한 최초의 동북부 주입니다.',
          'kWh당 28.1센트로, 뉴햄프셔주는 법제화된 8개 주 중 평균 주거용 전기 요금이 가장 높습니다. 장비가 출시되면 강력한 경제성을 기대할 수 있습니다.',
          '다른 모든 법제화 주와 마찬가지로, 아직 UL 3700 전체 인증을 확인받은 완제품 시스템은 없습니다.',
        ],
      },
      body1: {
        title: '뉴햄프셔주 SB 540 법안은 무엇을 요구합니까?',
        content: [
          '<strong>뉴햄프셔주 SB 540 법안은 대부분의 법제화 주에서 사용되는 표준 1,200W 상한선을 따르며, 뉴햄프셔주는 발코니 태양광 전용 법안을 통과시킨 최초의 동북부 주가 됩니다.</strong> 이 법안은 2026년 5월 28일에 서명되었으며 2026년 7월 27일부터 시행됩니다. 법이 이미 자신에게 적용된다고 가정하기 전에 오늘 날짜와 시행일을 비교해 보십시오. 시행되면 표준 면제 조항을 따르게 됩니다. 즉, 전력회사와의 계통연계 계약이나 수수료가 필요 없으며, 송전된 전력에 대한 net metering은 제외됩니다.',
          '이번 조사에서는 뉴햄프셔주와 관련해 HOA(주택소유자협회)나 임대인의 금지를 막는 규정이 확인되지 않았습니다. 법이 시행된 이후 임대 계약서 또는 HOA 규약을 별도로 확인하십시오.',
        ],
        columns: ['항목', '뉴햄프셔주 SB 540'],
        rows: [
          { '항목': '서명 / 시행', '뉴햄프셔주 SB 540': '2026년 5월 28일 / 2026년 7월 27일' },
          { '항목': '와트 상한선', '뉴햄프셔주 SB 540': '1,200W' },
          { '항목': 'Net metering', '뉴햄프셔주 SB 540': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '뉴햄프셔주의 경제성은 매력적입니까?',
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
          '<strong>뉴햄프셔주는 kWh당 28.1센트로 법제화된 8개 주 중 평균 주거용 전기 요금이 가장 높으며, 이는 유타주의 11.6센트보다 두 배 이상 높은 수준입니다.</strong> 즉, 적합한 장비가 출시되면 800W 키트의 투자 회수는 요금이 낮은 주보다 훨씬 유리할 것으로 예상됩니다. 다만 이 시리즈에서 사용한 출처의 주별 절감액 표에는 뉴햄프셔주에 특화된 구체적인 금액이 포함되어 있지 않았습니다. 추적된 주 전체를 기준으로 보면, 800W 키트는 지역 요금에 따라 연간 약 150~350달러를 절감합니다. 뉴햄프셔주의 높은 요금을 고려하면 이 범위의 상단에 가까울 가능성이 크지만, 이는 전국 범위의 추정치일 뿐 뉴햄프셔주에 특화된 확정 수치가 아니라는 점에 유의하십시오.',
          '인증은 또 다른 관문입니다. 작성 시점 기준으로, UL 3700 전체 인증을 확인받은 완제품 플러그인 태양광 시스템은 아직 없으며, 이는 뉴햄프셔주의 시행일과 무관하게 전국적으로 공통된 공백입니다. EcoFlow의 STREAM Ultra가 시장 출시에 가장 근접한 제품이지만, 현재는 유타주에서만 판매되고 있습니다.',
          '<strong>법이 시행되고 인증된 장비가 등장하면, 비교할 실제 선택지가 필요할 것입니다.</strong> 지금은 참고용으로 <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">현재 미국 발코니 태양광용 홈 배터리 추천</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 확인해 보십시오. 다만 두 페이지 모두 어떤 키트가 인증되었거나 아직 시행되지 않은 뉴햄프셔주 법에 대비되어 있다고 주장하지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '뉴햄프셔주 발코니 태양광에 대한 빠른 답변',
        faqs: [
          {
            q: '지금 뉴햄프셔주에서 발코니 태양광은 합법입니까?',
            a: 'SB 540 법안은 서명되었지만 2026년 7월 27일부터 시행됩니다. 법이 이미 적용된다고 가정하기 전에 오늘 날짜와 이 날짜를 비교해 보십시오.',
          },
          {
            q: '왜 뉴햄프셔주가 발코니 태양광에 중요합니까?',
            a: '발코니 태양광 전용 법안을 통과시킨 최초의 동북부 주이며, 법제화된 8개 주 중 전기 요금(kWh당 28.1센트)이 가장 높습니다. 적합한 장비가 출시되면 강력한 잠재적 수익을 기대할 수 있습니다.',
          },
          {
            q: '뉴햄프셔주의 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '이번 조사에서는 뉴햄프셔주와 관련해 HOA 금지를 막는 규정이 확인되지 않았습니다. 임대 계약서 또는 HOA 규약을 확인하십시오. HOA의 금지를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법</a>을 참고하십시오.',
          },
          {
            q: '뉴햄프셔주에서 잉여 전력에 대해 보상을 받습니까?',
            a: '아닙니다. SB 540 법안에 따라 net metering은 발코니 태양광 장치에 적용되지 않으며, 이는 다른 모든 법제화 주와 동일합니다.',
          },
        ],
      },
    },
  },
}
