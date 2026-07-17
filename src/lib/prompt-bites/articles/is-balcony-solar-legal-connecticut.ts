// Slug: is-balcony-solar-legal-connecticut
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Connecticut?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Connecticut? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, not yet in effect. HB 5340 takes effect October 1, 2026 as part of a broader omnibus solar bill, with a 1,200W cap. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Connecticut',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Connecticut?',
        answer: 'Signed, but not yet in effect. Connecticut HB 5340 was signed June 4, 2026 and takes effect October 1, 2026. It\'s part of a broader omnibus solar bill rather than a standalone balcony solar law, with a standard 1,200W cap.',
        bullets: [
          'HB 5340 signed June 4, 2026 — takes effect October 1, 2026, not yet in effect as of write-time',
          'Part of a broader omnibus solar bill, not a standalone balcony solar law',
          '1,200W cap, matching the majority template used by most enacted states',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Connecticut HB 5340 is signed but does not take effect until October 1, 2026 — don\'t treat it as usable law yet.',
          'Unlike most of the other 7 enacted states, Connecticut\'s balcony solar provisions are part of a broader omnibus solar bill, not standalone legislation.',
          'The 1,200W cap matches the majority template used across most enacted states.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will HB 5340 Require in Connecticut?',
        content: [
          '<strong>Connecticut HB 5340 folds balcony solar provisions into a broader omnibus solar bill, rather than passing standalone legislation the way most of the other 7 enacted states did.</strong> It sets a 1,200W cap matching the majority template, but the law does not take effect until October 1, 2026 — it is not usable yet as of write-time. Once in effect, expect the standard exemption structure: no utility interconnection agreement or fee, with net metering excluded.',
          'No HOA or landlord preemption language for Connecticut was confirmed in this pass — check your lease or HOA covenant separately once the law is in effect.',
        ],
        columns: ['Field', 'Connecticut HB 5340'],
        rows: [
          { Field: 'Signed / Effective', 'Connecticut HB 5340': 'Jun 4, 2026 / Oct 1, 2026 (not yet in effect)' },
          { Field: 'Wattage cap', 'Connecticut HB 5340': '1,200W' },
          { Field: 'Bill structure', 'Connecticut HB 5340': 'Omnibus solar bill, not standalone' },
          { Field: 'Net metering', 'Connecticut HB 5340': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Should I Buy Hardware Now for Connecticut?',
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
          '<strong>Not yet — the law isn\'t in effect until October 1, 2026, and separately, no complete plug-in solar system has confirmed full UL 3700 certification as of write-time.</strong> Both gates need to clear: the legal effective date and product certification. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Connecticut.',
          'Connecticut wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Connecticut-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Connecticut estimate.',
          '<strong>Once the law takes effect and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> for context now — but neither page claims any kit is certified or ready for Connecticut\'s not-yet-active law today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Connecticut Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in Connecticut right now?',
            a: 'HB 5340 is signed but doesn\'t take effect until October 1, 2026. Installing before then means you\'re not yet covered by its exemptions.',
          },
          {
            q: 'Why is Connecticut\'s balcony solar provision part of a bigger bill?',
            a: 'HB 5340 is an omnibus solar bill covering multiple solar policy areas, with balcony solar as one component — unlike most of the other 7 enacted states, which passed dedicated standalone legislation.',
          },
          {
            q: 'Can my HOA in Connecticut ban balcony solar?',
            a: 'No HOA preemption language for Connecticut was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Will I be able to sell excess power back to the grid in Connecticut?',
            a: 'No. Net metering will not apply to balcony solar devices under HB 5340, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    title: 'Ist Balkonsolar in Connecticut legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Connecticut legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Unterzeichnet, aber noch nicht in Kraft. HB 5340 tritt am 1. Oktober 2026 im Rahmen eines umfassenderen Solar-Sammelgesetzes in Kraft, mit einer Obergrenze von 1.200 W. Kurzantwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hauseigentümer, die prüfen, ob Balkonsolar in Connecticut legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Connecticut legal?',
        answer: 'Unterzeichnet, aber noch nicht in Kraft. Connecticuts HB 5340 wurde am 4. Juni 2026 unterzeichnet und tritt am 1. Oktober 2026 in Kraft. Es ist Teil eines umfassenderen Solar-Sammelgesetzes und keines eigenständigen Balkonsolar-Gesetzes, mit einer üblichen Obergrenze von 1.200 W.',
        bullets: [
          'HB 5340 am 4. Juni 2026 unterzeichnet — tritt am 1. Oktober 2026 in Kraft, zum Zeitpunkt der Veröffentlichung noch nicht in Kraft',
          'Teil eines umfassenderen Solar-Sammelgesetzes, kein eigenständiges Balkonsolar-Gesetz',
          'Obergrenze von 1.200 W, entsprechend der Mehrheitsvorlage der meisten Bundesstaaten mit Gesetz',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Connecticuts HB 5340 ist unterzeichnet, tritt aber erst am 1. Oktober 2026 in Kraft — betrachten Sie es noch nicht als anwendbares Recht.',
          'Anders als in den meisten der anderen 7 Bundesstaaten mit Gesetz sind Connecticuts Balkonsolar-Bestimmungen Teil eines umfassenderen Solar-Sammelgesetzes, keine eigenständige Gesetzgebung.',
          'Die Obergrenze von 1.200 W entspricht der Mehrheitsvorlage, die in den meisten Bundesstaaten mit Gesetz verwendet wird.',
          'Kein vollständiges System hat bisher eine vollständige UL-3700-Zertifizierung bestätigt — wie in jedem anderen Bundesstaat mit Gesetz.',
        ],
      },
      body1: {
        title: 'Was wird HB 5340 in Connecticut vorschreiben?',
        content: [
          '<strong>Connecticuts HB 5340 integriert Balkonsolar-Bestimmungen in ein umfassenderes Solar-Sammelgesetz, anstatt wie in den meisten der anderen 7 Bundesstaaten mit Gesetz eine eigenständige Gesetzgebung zu verabschieden.</strong> Es legt eine Obergrenze von 1.200 W fest, die der Mehrheitsvorlage entspricht, doch das Gesetz tritt erst am 1. Oktober 2026 in Kraft — zum Zeitpunkt der Veröffentlichung ist es noch nicht anwendbar. Sobald es in Kraft ist, ist die übliche Ausnahmestruktur zu erwarten: keine Netzanschlussvereinbarung oder -gebühr des Versorgungsunternehmens, ohne Net Metering.',
          'Für Connecticut wurde in dieser Prüfung keine Sprachregelung zur Vorrangstellung gegenüber HOA- oder Vermieterverboten bestätigt — prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung separat, sobald das Gesetz in Kraft ist.',
        ],
        columns: ['Feld', 'Connecticut HB 5340'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Connecticut HB 5340': '4. Juni 2026 / 1. Oktober 2026 (noch nicht in Kraft)' },
          { Feld: 'Leistungsobergrenze', 'Connecticut HB 5340': '1.200 W' },
          { Feld: 'Gesetzesstruktur', 'Connecticut HB 5340': 'Solar-Sammelgesetz, nicht eigenständig' },
          { Feld: 'Net Metering', 'Connecticut HB 5340': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sollte ich jetzt Hardware für Connecticut kaufen?',
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
          '<strong>Noch nicht — das Gesetz tritt erst am 1. Oktober 2026 in Kraft, und unabhängig davon hat zum Zeitpunkt der Veröffentlichung noch kein vollständiges steckerfertiges Solarsystem eine vollständige UL-3700-Zertifizierung bestätigt.</strong> Beide Hürden müssen genommen werden: das gesetzliche Inkrafttreten und die Produktzertifizierung. EcoFlows STREAM Ultra ist das marktnächste Produkt, wird aber derzeit speziell in Utah zum Verkauf angeboten, nicht in Connecticut.',
          'Connecticut war nicht in der bundesstaatlichen Einsparungstabelle des Quellen-Trackers enthalten, die für diese Serie verwendet wurde, sodass hier keine Connecticut-spezifische Dollarangabe verfügbar ist. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr — betrachten Sie dies als landesweite Spanne, nicht als Connecticut-Schätzung.',
          '<strong>Sobald das Gesetz in Kraft tritt und zertifizierte Hardware existiert, werden Sie echte Optionen zum Vergleich wollen.</strong> Sehen Sie sich schon jetzt zur Orientierung die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> an — aber keine der beiden Seiten behauptet, dass ein Kit zertifiziert oder bereit für Connecticuts noch nicht in Kraft getretenes Gesetz ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurzantworten zu Balkonsolar in Connecticut',
        faqs: [
          {
            q: 'Ist Balkonsolar in Connecticut derzeit legal?',
            a: 'HB 5340 ist unterzeichnet, tritt aber erst am 1. Oktober 2026 in Kraft. Wer vorher installiert, ist von den darin vorgesehenen Ausnahmen noch nicht erfasst.',
          },
          {
            q: 'Warum ist Connecticuts Balkonsolar-Bestimmung Teil eines größeren Gesetzes?',
            a: 'HB 5340 ist ein Solar-Sammelgesetz, das mehrere solarpolitische Bereiche abdeckt, wobei Balkonsolar nur eine Komponente ist — anders als in den meisten der anderen 7 Bundesstaaten mit Gesetz, die eine eigenständige Gesetzgebung verabschiedet haben.',
          },
          {
            q: 'Kann meine HOA in Connecticut Balkonsolar verbieten?',
            a: 'Für Connecticut wurde in dieser Prüfung keine Sprachregelung zur Vorrangstellung gegenüber HOA-Verboten bestätigt — prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung. Für einen Bundesstaat, der HOA-Verbote ausdrücklich blockiert, siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Kann ich in Connecticut überschüssigen Strom ins Netz zurückverkaufen?',
            a: 'Nein. Net Metering gilt gemäß HB 5340 nicht für Balkonsolar-Geräte, wie in jedem anderen Bundesstaat mit Gesetz.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    title: 'Le solaire de balcon est-il légal dans le Connecticut ?',
    dateModified: '2026-07-16',
    seoTitle: 'Le solaire de balcon est-il légal dans le Connecticut ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signée, pas encore en vigueur. La loi HB 5340 entre en vigueur le 1er octobre 2026 dans le cadre d\'une loi solaire omnibus, avec un plafond de 1 200 W. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal dans le Connecticut',
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le Connecticut ?',
        answer: 'Signée, mais pas encore en vigueur. La loi HB 5340 du Connecticut a été signée le 4 juin 2026 et entre en vigueur le 1er octobre 2026. Elle s\'inscrit dans une loi solaire omnibus plus large plutôt que dans une loi autonome sur le solaire de balcon, avec un plafond standard de 1 200 W.',
        bullets: [
          'HB 5340 signée le 4 juin 2026 — entre en vigueur le 1er octobre 2026, pas encore en vigueur à la date de rédaction',
          'Fait partie d\'une loi solaire omnibus plus large, pas d\'une loi autonome sur le solaire de balcon',
          'Plafond de 1 200 W, conforme au modèle majoritaire utilisé par la plupart des États ayant légiféré',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi HB 5340 du Connecticut est signée mais n\'entre pas en vigueur avant le 1er octobre 2026 — ne la considérez pas encore comme une loi applicable.',
          'Contrairement à la plupart des 7 autres États ayant légiféré, les dispositions sur le solaire de balcon du Connecticut s\'inscrivent dans une loi solaire omnibus plus large, pas dans une législation autonome.',
          'Le plafond de 1 200 W correspond au modèle majoritaire utilisé dans la plupart des États ayant légiféré.',
          'Aucun système complet n\'a confirmé de certification UL 3700 intégrale à ce jour, comme dans tous les autres États ayant légiféré.',
        ],
      },
      body1: {
        title: 'Que va exiger la loi HB 5340 dans le Connecticut ?',
        content: [
          '<strong>La loi HB 5340 du Connecticut intègre les dispositions sur le solaire de balcon dans une loi solaire omnibus plus large, plutôt que d\'adopter une législation autonome comme la plupart des 7 autres États ayant légiféré.</strong> Elle fixe un plafond de 1 200 W conforme au modèle majoritaire, mais la loi n\'entre pas en vigueur avant le 1er octobre 2026 — elle n\'est pas encore applicable à la date de rédaction. Une fois en vigueur, la structure d\'exemption standard est attendue : aucun contrat d\'interconnexion ni de frais auprès du fournisseur d\'électricité, sans compensation nette (net metering).',
          'Aucune disposition de préemption vis-à-vis des copropriétés ou des propriétaires n\'a été confirmée pour le Connecticut lors de cette analyse — vérifiez votre bail ou le règlement de copropriété séparément une fois la loi en vigueur.',
        ],
        columns: ['Champ', 'Connecticut HB 5340'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Connecticut HB 5340': '4 juin 2026 / 1er octobre 2026 (pas encore en vigueur)' },
          { Champ: 'Plafond de puissance', 'Connecticut HB 5340': '1 200 W' },
          { Champ: 'Structure de la loi', 'Connecticut HB 5340': 'Loi solaire omnibus, non autonome' },
          { Champ: 'Compensation nette', 'Connecticut HB 5340': 'Non disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Dois-je acheter du matériel dès maintenant pour le Connecticut ?',
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
          '<strong>Pas encore — la loi n\'entre pas en vigueur avant le 1er octobre 2026 et, séparément, aucun système solaire enfichable complet n\'a confirmé de certification UL 3700 intégrale à la date de rédaction.</strong> Les deux conditions doivent être remplies : la date d\'entrée en vigueur légale et la certification du produit. Le STREAM Ultra d\'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement dans l\'Utah, pas dans le Connecticut.',
          'Le Connecticut ne figurait pas dans le tableau d\'économies par État de la source utilisée pour cette série ; un chiffre spécifique au Connecticut n\'est donc pas disponible ici. Dans les États suivis, un kit de 800 W permet d\'économiser environ 150 à 350 $ par an selon les tarifs locaux de l\'électricité — considérez cela comme une fourchette nationale, pas une estimation pour le Connecticut.',
          '<strong>Une fois la loi en vigueur et du matériel certifié disponible, vous voudrez comparer de vraies options.</strong> Consultez dès maintenant, à titre de repère, les <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">meilleurs choix de batteries domestiques US pour le solaire de balcon</a> ou la <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparaison EcoFlow vs. Anker vs. Zendure</a> — mais aucune de ces deux pages n\'affirme qu\'un kit soit certifié ou prêt pour la loi du Connecticut, qui n\'est pas encore en vigueur aujourd\'hui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le Connecticut',
        faqs: [
          {
            q: 'Le solaire de balcon est-il légal dans le Connecticut actuellement ?',
            a: 'La loi HB 5340 est signée mais n\'entre pas en vigueur avant le 1er octobre 2026. Installer avant cette date signifie que vous n\'êtes pas encore couvert par ses exemptions.',
          },
          {
            q: 'Pourquoi la disposition sur le solaire de balcon du Connecticut fait-elle partie d\'une loi plus large ?',
            a: 'La loi HB 5340 est une loi solaire omnibus couvrant plusieurs domaines de politique solaire, le solaire de balcon n\'en étant qu\'une composante — contrairement à la plupart des 7 autres États ayant légiféré, qui ont adopté une législation autonome dédiée.',
          },
          {
            q: 'Ma copropriété dans le Connecticut peut-elle interdire le solaire de balcon ?',
            a: 'Aucune disposition de préemption vis-à-vis des copropriétés n\'a été confirmée pour le Connecticut lors de cette analyse — vérifiez votre bail ou le règlement de copropriété. Pour un État qui bloque explicitement les interdictions des copropriétés, consultez la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon du Colorado</a>.',
          },
          {
            q: 'Pourrai-je revendre l\'excédent d\'électricité au réseau dans le Connecticut ?',
            a: 'Non. La compensation nette ne s\'appliquera pas aux dispositifs solaires de balcon en vertu de la loi HB 5340, comme dans tous les autres États ayant légiféré.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    title: 'コネチカット州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-07-16',
    seoTitle: 'コネチカット州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: '署名済みですが、まだ発効していません。HB 5340は包括的なソーラー法案の一部として2026年10月1日に発効し、上限は1,200Wです。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'コネチカット州でバルコニーソーラーが合法かどうかを確認している米国の賃借人および住宅所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'コネチカット州でバルコニーソーラーは合法ですか？',
        answer: '署名済みですが、まだ発効していません。コネチカット州のHB 5340は2026年6月4日に署名され、2026年10月1日に発効します。単独のバルコニーソーラー法ではなく、より広範な包括的ソーラー法案の一部であり、標準的な1,200Wの上限が設けられています。',
        bullets: [
          'HB 5340は2026年6月4日に署名 — 2026年10月1日発効、執筆時点ではまだ発効していません',
          '単独のバルコニーソーラー法ではなく、より広範な包括的ソーラー法案の一部です',
          '大半の制定州で使われている多数派テンプレートと同じ1,200Wの上限です',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'コネチカット州のHB 5340は署名済みですが、2026年10月1日まで発効しません — まだ利用可能な法律として扱わないでください。',
          '他の7つの制定州の多くとは異なり、コネチカット州のバルコニーソーラー規定は単独の法律ではなく、より広範な包括的ソーラー法案の一部です。',
          '1,200Wの上限は、大半の制定州で使われている多数派テンプレートと一致します。',
          '他のすべての制定州と同様、完全なUL 3700認証を取得したシステムはまだ確認されていません。',
        ],
      },
      body1: {
        title: 'コネチカット州のHB 5340は何を求めていますか？',
        content: [
          '<strong>コネチカット州のHB 5340は、他の7つの制定州の多くが行ったような単独立法ではなく、バルコニーソーラー規定をより広範な包括的ソーラー法案に組み込んでいます。</strong> 多数派テンプレートと同じ1,200Wの上限を設けていますが、法律は2026年10月1日まで発効せず、執筆時点ではまだ利用できません。発効後は、標準的な適用除外構造（電力会社との系統連系契約や手数料は不要で、ネットメータリングは対象外）が想定されます。',
          '今回の調査ではコネチカット州のHOAまたは家主による優先規定は確認されていません — 法律が発効した後、賃貸契約またはHOA規約を別途確認してください。',
        ],
        columns: ['項目', 'コネチカット州 HB 5340'],
        rows: [
          { 項目: '署名／発効', 'コネチカット州 HB 5340': '2026年6月4日／2026年10月1日（未発効）' },
          { 項目: 'ワット数上限', 'コネチカット州 HB 5340': '1,200W' },
          { 項目: '法案構成', 'コネチカット州 HB 5340': '包括的ソーラー法案、単独立法ではない' },
          { 項目: 'ネットメータリング', 'コネチカット州 HB 5340': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'コネチカット州向けに今ハードウェアを購入すべきですか？',
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
          '<strong>まだです — 法律は2026年10月1日まで発効せず、それとは別に、執筆時点で完全なUL 3700認証を取得したプラグイン式ソーラーシステムはまだ確認されていません。</strong> 法的発効日と製品認証という2つの条件の両方をクリアする必要があります。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在はコネチカット州ではなく、特にユタ州で販売されています。',
          'コネチカット州は、このシリーズで使用したソースの州別節約額トラッカーには含まれていなかったため、コネチカット州固有の金額はここでは提供できません。トラッキング対象の州全体では、800Wキットは地域の電気料金によって年間およそ150〜350ドルの節約になります — これはコネチカット州の推定値ではなく、全国的な範囲として扱ってください。',
          '<strong>法律が発効し、認証済みハードウェアが登場したら、比較できる実際の選択肢が必要になります。</strong> 参考として、<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国製ホームバッテリーの現行おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow対Anker対Zendureのエコシステム比較</a>を今のうちにご覧ください — ただし、どちらのページも、コネチカット州のまだ発効していない法律に対応した認証済みキットがあるとは主張していません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'コネチカット州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'コネチカット州で今すぐバルコニーソーラーは合法ですか？',
            a: 'HB 5340は署名済みですが、2026年10月1日まで発効しません。それ以前に設置すると、まだその適用除外の対象にはなりません。',
          },
          {
            q: 'なぜコネチカット州のバルコニーソーラー規定はより大きな法案の一部なのですか？',
            a: 'HB 5340は複数のソーラー政策分野を扱う包括的ソーラー法案であり、バルコニーソーラーはその一部にすぎません — 専用の単独立法を可決した他の7つの制定州の多くとは異なります。',
          },
          {
            q: 'コネチカット州のHOAはバルコニーソーラーを禁止できますか？',
            a: '今回の調査ではコネチカット州のHOA優先規定は確認されていません — 賃貸契約またはHOA規約を確認してください。HOAによる禁止を明示的にブロックしている州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>をご覧ください。',
          },
          {
            q: 'コネチカット州で余剰電力を系統に売電できますか？',
            a: 'いいえ。他のすべての制定州と同様、HB 5340のもとではネットメータリングはバルコニーソーラー機器に適用されません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    title: '康涅狄格州的阳台太阳能合法吗？',
    dateModified: '2026-07-16',
    seoTitle: '康涅狄格州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '已签署，但尚未生效。HB 5340作为一项更广泛的综合太阳能法案的一部分，将于2026年10月1日生效，功率上限为1,200W。来自PromptQuorum的快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在康涅狄格州是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '康涅狄格州的阳台太阳能合法吗？',
        answer: '已签署，但尚未生效。康涅狄格州HB 5340于2026年6月4日签署，将于2026年10月1日生效。它是更广泛的综合太阳能法案的一部分，而非独立的阳台太阳能法律，功率上限为标准的1,200W。',
        bullets: [
          'HB 5340于2026年6月4日签署——将于2026年10月1日生效，截至撰写时尚未生效',
          '属于更广泛的综合太阳能法案的一部分，而非独立的阳台太阳能立法',
          '1,200W的上限与大多数已立法州采用的多数模板一致',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '康涅狄格州HB 5340已签署，但要到2026年10月1日才生效——目前不要将其视为已可用的法律。',
          '与其他7个已立法州中的大多数不同，康涅狄格州的阳台太阳能条款属于更广泛的综合太阳能法案的一部分，而非独立立法。',
          '1,200W的上限与大多数已立法州采用的多数模板一致。',
          '与所有其他已立法州一样，目前尚无完整系统确认获得完整的UL 3700认证。',
        ],
      },
      body1: {
        title: 'HB 5340将对康涅狄格州提出哪些要求？',
        content: [
          '<strong>康涅狄格州HB 5340将阳台太阳能条款并入更广泛的综合太阳能法案，而不是像其他7个已立法州中的大多数那样单独立法。</strong> 该法案设定了与多数模板一致的1,200W上限，但要到2026年10月1日才生效——截至撰写时尚不可用。生效后，预计将采用标准的豁免结构：无需与电力公司签订并网协议或支付费用，且不适用净计量。',
          '本次核查未确认康涅狄格州存在针对HOA或房东的优先适用条款——法律生效后，请单独核实你的租约或HOA规约。',
        ],
        columns: ['项目', '康涅狄格州 HB 5340'],
        rows: [
          { 项目: '签署／生效', '康涅狄格州 HB 5340': '2026年6月4日／2026年10月1日（尚未生效）' },
          { 项目: '功率上限', '康涅狄格州 HB 5340': '1,200W' },
          { 项目: '法案结构', '康涅狄格州 HB 5340': '综合太阳能法案，非独立立法' },
          { 项目: '净计量', '康涅狄格州 HB 5340': '不可用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '现在应该为康涅狄格州购买硬件吗？',
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
          '<strong>还不行——该法律要到2026年10月1日才生效，另外，截至撰写时，尚无完整的插入式太阳能系统确认获得完整的UL 3700认证。</strong> 两个条件都必须满足：法律生效日期和产品认证。EcoFlow的STREAM Ultra是最接近上市的产品，但目前专门在犹他州销售，而非康涅狄格州。',
          '康涅狄格州未被纳入本系列使用的信息来源的各州节省数据表，因此这里无法提供康涅狄格州的具体数字。在已跟踪的各州中，一套800W套件根据当地电价每年大约可节省150至350美元——请将其视为全国范围，而非康涅狄格州的估算值。',
          '<strong>一旦法律生效且出现经认证的硬件，你会需要真正可比较的选项。</strong> 现在可先参考<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">美国阳台太阳能家庭电池当前推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>——但这两个页面均未声称任何套件已获得认证，或已为康涅狄格州目前尚未生效的法律做好准备。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于康涅狄格州阳台太阳能的快速解答',
        faqs: [
          {
            q: '康涅狄格州目前阳台太阳能合法吗？',
            a: 'HB 5340已签署，但要到2026年10月1日才生效。在此之前安装意味着你尚未受其豁免条款保护。',
          },
          {
            q: '为什么康涅狄格州的阳台太阳能条款是更大法案的一部分？',
            a: 'HB 5340是涵盖多个太阳能政策领域的综合法案，阳台太阳能只是其中一个组成部分——这与其他7个已立法州中的大多数不同，那些州通过了专门的独立立法。',
          },
          {
            q: '康涅狄格州的HOA可以禁止阳台太阳能吗？',
            a: '本次核查未确认康涅狄格州存在HOA优先适用条款——请核实你的租约或HOA规约。若想了解明确阻止HOA禁令的州，请参见<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法律</a>。',
          },
          {
            q: '我能在康涅狄格州将多余电力卖回电网吗？',
            a: '不能。根据HB 5340，净计量不适用于阳台太阳能设备，这与其他所有已立法州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    title: '¿Es legal la energía solar de balcón en Connecticut?',
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en Connecticut? | Prompt Bites | PromptQuorum',
    metaDescription: 'Firmada, pero aún no vigente. La HB 5340 entra en vigor el 1 de octubre de 2026 como parte de una ley solar general más amplia, con un límite de 1,200W. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Connecticut',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Connecticut?',
        answer: 'Firmada, pero aún no vigente. La HB 5340 de Connecticut se firmó el 4 de junio de 2026 y entra en vigor el 1 de octubre de 2026. Forma parte de una ley solar general más amplia, no de una ley independiente de energía solar de balcón, con un límite estándar de 1,200W.',
        bullets: [
          'HB 5340 firmada el 4 de junio de 2026 — entra en vigor el 1 de octubre de 2026, aún no vigente al momento de escribir esto',
          'Forma parte de una ley solar general más amplia, no de una legislación independiente de energía solar de balcón',
          'Límite de 1,200W, acorde con la plantilla mayoritaria usada por la mayoría de los estados que han legislado',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La HB 5340 de Connecticut está firmada, pero no entra en vigor hasta el 1 de octubre de 2026 — no la trates todavía como una ley aplicable.',
          'A diferencia de la mayoría de los otros 7 estados que han legislado, las disposiciones de energía solar de balcón de Connecticut forman parte de una ley solar general más amplia, no de una legislación independiente.',
          'El límite de 1,200W coincide con la plantilla mayoritaria usada en la mayoría de los estados que han legislado.',
          'Ningún sistema completo ha confirmado aún la certificación UL 3700 completa, igual que en todos los demás estados que han legislado.',
        ],
      },
      body1: {
        title: '¿Qué exigirá la HB 5340 en Connecticut?',
        content: [
          '<strong>La HB 5340 de Connecticut incorpora las disposiciones de energía solar de balcón dentro de una ley solar general más amplia, en lugar de aprobar una legislación independiente como hicieron la mayoría de los otros 7 estados que han legislado.</strong> Establece un límite de 1,200W acorde con la plantilla mayoritaria, pero la ley no entra en vigor hasta el 1 de octubre de 2026 — todavía no es aplicable al momento de escribir esto. Una vez vigente, se espera la estructura de exención estándar: sin acuerdo de interconexión ni tarifa con la compañía eléctrica, sin medición neta (net metering).',
          'En esta revisión no se confirmó ningún lenguaje de prevalencia sobre HOA o arrendadores para Connecticut — revisa tu contrato de alquiler o el reglamento de tu HOA por separado una vez que la ley esté vigente.',
        ],
        columns: ['Campo', 'Connecticut HB 5340'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Connecticut HB 5340': '4 de junio de 2026 / 1 de octubre de 2026 (aún no vigente)' },
          { Campo: 'Límite de vataje', 'Connecticut HB 5340': '1,200W' },
          { Campo: 'Estructura de la ley', 'Connecticut HB 5340': 'Ley solar general, no independiente' },
          { Campo: 'Medición neta', 'Connecticut HB 5340': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Debo comprar hardware ahora para Connecticut?',
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
          '<strong>Todavía no — la ley no entra en vigor hasta el 1 de octubre de 2026 y, por separado, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 completa al momento de escribir esto.</strong> Ambas condiciones deben cumplirse: la fecha de vigencia legal y la certificación del producto. El STREAM Ultra de EcoFlow es el producto más cercano a estar disponible, pero actualmente se vende específicamente en Utah, no en Connecticut.',
          'Connecticut no estaba incluido en la tabla de ahorros por estado de la fuente usada para esta serie, por lo que aquí no hay una cifra específica para Connecticut. En los estados que sí se rastrearon, un kit de 800W ahorra aproximadamente entre $150 y $350 al año según las tarifas eléctricas locales — considera esto un rango nacional, no una estimación para Connecticut.',
          '<strong>Una vez que la ley entre en vigor y exista hardware certificado, querrás opciones reales para comparar.</strong> Consulta ahora, como referencia, las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas de EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación de ecosistemas EcoFlow vs. Anker vs. Zendure</a> — pero ninguna de las dos páginas afirma que algún kit esté certificado o listo para la ley de Connecticut, que aún no está vigente hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en Connecticut',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en Connecticut ahora mismo?',
            a: 'La HB 5340 está firmada, pero no entra en vigor hasta el 1 de octubre de 2026. Instalarla antes de esa fecha significa que aún no estás cubierto por sus exenciones.',
          },
          {
            q: '¿Por qué la disposición de energía solar de balcón de Connecticut forma parte de una ley más grande?',
            a: 'La HB 5340 es una ley solar general que abarca varias áreas de política solar, siendo la energía solar de balcón solo un componente — a diferencia de la mayoría de los otros 7 estados que han legislado, que aprobaron legislación independiente dedicada.',
          },
          {
            q: '¿Puede mi HOA en Connecticut prohibir la energía solar de balcón?',
            a: 'En esta revisión no se confirmó ningún lenguaje de prevalencia sobre HOA para Connecticut — revisa tu contrato de alquiler o el reglamento de tu HOA. Para un estado que bloquea explícitamente las prohibiciones de HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Podré vender el excedente de energía a la red en Connecticut?',
            a: 'No. La medición neta no se aplicará a los dispositivos de energía solar de balcón bajo la HB 5340, igual que en todos los demás estados que han legislado.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    title: 'A energia solar de varanda é legal em Connecticut?',
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal em Connecticut? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sancionada, mas ainda não em vigor. A HB 5340 entra em vigor em 1º de outubro de 2026 como parte de uma lei solar abrangente mais ampla, com limite de 1.200W. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Connecticut',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Connecticut?',
        answer: 'Sancionada, mas ainda não em vigor. A HB 5340 de Connecticut foi sancionada em 4 de junho de 2026 e entra em vigor em 1º de outubro de 2026. Ela faz parte de uma lei solar abrangente mais ampla, e não de uma lei independente sobre energia solar de varanda, com limite padrão de 1.200W.',
        bullets: [
          'HB 5340 sancionada em 4 de junho de 2026 — entra em vigor em 1º de outubro de 2026, ainda não em vigor no momento da publicação',
          'Parte de uma lei solar abrangente mais ampla, não uma legislação independente sobre energia solar de varanda',
          'Limite de 1.200W, alinhado ao modelo majoritário usado pela maioria dos estados que já legislaram',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A HB 5340 de Connecticut está sancionada, mas só entra em vigor em 1º de outubro de 2026 — não trate como lei já aplicável.',
          'Diferente da maioria dos outros 7 estados que legislaram, as disposições de energia solar de varanda de Connecticut fazem parte de uma lei solar abrangente mais ampla, não de uma legislação independente.',
          'O limite de 1.200W está alinhado ao modelo majoritário usado na maioria dos estados que legislaram.',
          'Nenhum sistema completo confirmou certificação UL 3700 total até o momento, assim como em todos os outros estados que legislaram.',
        ],
      },
      body1: {
        title: 'O que a HB 5340 vai exigir em Connecticut?',
        content: [
          '<strong>A HB 5340 de Connecticut incorpora as disposições sobre energia solar de varanda a uma lei solar abrangente mais ampla, em vez de aprovar uma legislação independente como fizeram a maioria dos outros 7 estados que legislaram.</strong> Ela define um limite de 1.200W alinhado ao modelo majoritário, mas a lei só entra em vigor em 1º de outubro de 2026 — ainda não é aplicável no momento da publicação. Uma vez em vigor, espera-se a estrutura de isenção padrão: sem acordo de interconexão ou taxa com a concessionária, sem net metering.',
          'Nenhuma linguagem de prevalência sobre HOA (associação de moradores) ou locadores foi confirmada para Connecticut nesta análise — verifique seu contrato de aluguel ou o regulamento da HOA separadamente assim que a lei entrar em vigor.',
        ],
        columns: ['Campo', 'Connecticut HB 5340'],
        rows: [
          { Campo: 'Sanção / Vigência', 'Connecticut HB 5340': '4 de junho de 2026 / 1º de outubro de 2026 (ainda não em vigor)' },
          { Campo: 'Limite de potência', 'Connecticut HB 5340': '1.200W' },
          { Campo: 'Estrutura da lei', 'Connecticut HB 5340': 'Lei solar abrangente, não independente' },
          { Campo: 'Net metering', 'Connecticut HB 5340': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Devo comprar equipamento agora para Connecticut?',
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
          '<strong>Ainda não — a lei só entra em vigor em 1º de outubro de 2026 e, separadamente, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total até o momento da publicação.</strong> As duas condições precisam ser cumpridas: a data de vigência legal e a certificação do produto. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente está à venda especificamente em Utah, não em Connecticut.',
          'Connecticut não estava na tabela de economia por estado da fonte usada nesta série, então uma cifra específica para Connecticut não está disponível aqui. Nos estados que foram rastreados, um kit de 800W economiza aproximadamente US$ 150–350 por ano, dependendo das tarifas locais de eletricidade — trate isso como uma faixa nacional, não como uma estimativa para Connecticut.',
          '<strong>Quando a lei entrar em vigor e existir hardware certificado, você vai querer opções reais para comparar.</strong> Confira agora, como referência, as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">escolhas atuais de baterias domésticas dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação de ecossistemas EcoFlow vs. Anker vs. Zendure</a> — mas nenhuma das páginas afirma que algum kit esteja certificado ou pronto para a lei de Connecticut, que ainda não está em vigor hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Connecticut',
        faqs: [
          {
            q: 'A energia solar de varanda é legal em Connecticut agora?',
            a: 'A HB 5340 está sancionada, mas só entra em vigor em 1º de outubro de 2026. Instalar antes disso significa que você ainda não está coberto pelas isenções da lei.',
          },
          {
            q: 'Por que a disposição sobre energia solar de varanda de Connecticut faz parte de uma lei maior?',
            a: 'A HB 5340 é uma lei solar abrangente que cobre várias áreas de política solar, sendo a energia solar de varanda apenas um componente — diferente da maioria dos outros 7 estados que legislaram, que aprovaram legislação independente dedicada.',
          },
          {
            q: 'Minha HOA em Connecticut pode proibir energia solar de varanda?',
            a: 'Nenhuma linguagem de prevalência sobre HOA foi confirmada para Connecticut nesta análise — verifique seu contrato de aluguel ou o regulamento da HOA. Para um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'Vou poder vender o excedente de energia de volta para a rede em Connecticut?',
            a: 'Não. O net metering não se aplicará a dispositivos de energia solar de varanda sob a HB 5340, assim como em todos os outros estados que legislaram.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    title: 'هل الطاقة الشمسية للشرفات قانونية في كونيتيكت؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في كونيتيكت؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. يدخل HB 5340 حيز التنفيذ في 1 أكتوبر 2026 كجزء من مشروع قانون شامل للطاقة الشمسية، بحد أقصى 1,200 واط. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في كونيتيكت',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في كونيتيكت؟',
        answer: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. تم توقيع HB 5340 الخاص بولاية كونيتيكت في 4 يونيو 2026 ويدخل حيز التنفيذ في 1 أكتوبر 2026. وهو جزء من مشروع قانون شامل أوسع للطاقة الشمسية وليس قانونًا مستقلاً للطاقة الشمسية الخاصة بالشرفات، بحد أقصى قياسي يبلغ 1,200 واط.',
        bullets: [
          'تم توقيع HB 5340 في 4 يونيو 2026 — ويدخل حيز التنفيذ في 1 أكتوبر 2026، ولم يدخل حيز التنفيذ بعد حتى وقت كتابة هذا المحتوى',
          'جزء من مشروع قانون شامل أوسع للطاقة الشمسية، وليس تشريعًا مستقلاً للطاقة الشمسية الخاصة بالشرفات',
          'حد أقصى قدره 1,200 واط، يطابق النموذج الأغلبي المستخدم في معظم الولايات التي سنّت تشريعات',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تم توقيع HB 5340 في كونيتيكت لكنه لا يدخل حيز التنفيذ حتى 1 أكتوبر 2026 — لا تعتبره قانونًا قابلاً للتطبيق بعد.',
          'بخلاف معظم الولايات السبع الأخرى التي سنّت تشريعات، تُعد أحكام الطاقة الشمسية للشرفات في كونيتيكت جزءًا من مشروع قانون شامل أوسع للطاقة الشمسية، وليست تشريعًا مستقلاً.',
          'يطابق الحد الأقصى البالغ 1,200 واط النموذج الأغلبي المستخدم في معظم الولايات التي سنّت تشريعات.',
          'لم يؤكد أي نظام كامل حتى الآن حصوله على شهادة UL 3700 الكاملة، تمامًا كما هو الحال في جميع الولايات الأخرى التي سنّت تشريعات.',
        ],
      },
      body1: {
        title: 'ماذا سيتطلب HB 5340 في كونيتيكت؟',
        content: [
          '<strong>يدمج HB 5340 الخاص بكونيتيكت أحكام الطاقة الشمسية للشرفات ضمن مشروع قانون شامل أوسع للطاقة الشمسية، بدلاً من إقرار تشريع مستقل كما فعلت معظم الولايات السبع الأخرى التي سنّت تشريعات.</strong> يحدد القانون حدًا أقصى قدره 1,200 واط يطابق النموذج الأغلبي، لكنه لا يدخل حيز التنفيذ حتى 1 أكتوبر 2026 — وهو غير قابل للتطبيق بعد حتى وقت كتابة هذا المحتوى. وبمجرد دخوله حيز التنفيذ، يُتوقع هيكل الإعفاء القياسي: دون الحاجة إلى اتفاقية ربط بالشبكة أو رسوم من شركة الكهرباء، مع استبعاد نظام Net Metering.',
          'لم يتم تأكيد أي نص يتعلق بأسبقية أحكام HB 5340 على حظر جمعيات الملاك (HOA) أو الملاك الفرديين في كونيتيكت خلال هذه المراجعة — تحقق من عقد الإيجار أو لائحة جمعية الملاك بشكل منفصل بمجرد دخول القانون حيز التنفيذ.',
        ],
        columns: ['الحقل', 'كونيتيكت HB 5340'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'كونيتيكت HB 5340': '4 يونيو 2026 / 1 أكتوبر 2026 (لم يدخل حيز التنفيذ بعد)' },
          { الحقل: 'الحد الأقصى للطاقة', 'كونيتيكت HB 5340': '1,200 واط' },
          { الحقل: 'هيكل القانون', 'كونيتيكت HB 5340': 'مشروع قانون شامل للطاقة الشمسية، وليس مستقلاً' },
          { الحقل: 'نظام Net Metering', 'كونيتيكت HB 5340': 'غير متاح' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل يجب أن أشتري الأجهزة الآن لكونيتيكت؟',
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
          '<strong>ليس بعد — لا يدخل القانون حيز التنفيذ حتى 1 أكتوبر 2026، وبشكل منفصل، لم يؤكد أي نظام طاقة شمسية كامل قابل للتوصيل المباشر حصوله على شهادة UL 3700 الكاملة حتى وقت كتابة هذا المحتوى.</strong> يجب تجاوز عائقين: تاريخ السريان القانوني واعتماد المنتج. يُعد جهاز STREAM Ultra من EcoFlow أقرب منتج إلى السوق، لكنه معروض حاليًا للبيع تحديدًا في ولاية يوتا، وليس في كونيتيكت.',
          'لم تكن كونيتيكت مدرجة في جدول التوفير حسب الولاية الخاص بالمصدر المستخدم في هذه السلسلة، لذا لا يتوفر هنا رقم محدد لكونيتيكت. عبر الولايات التي تم تتبعها، توفر مجموعة بقدرة 800 واط ما يقارب 150–350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — اعتبر هذا نطاقًا وطنيًا، وليس تقديرًا خاصًا بكونيتيكت.',
          '<strong>بمجرد أن يدخل القانون حيز التنفيذ وتتوفر أجهزة معتمدة، ستحتاج إلى خيارات حقيقية للمقارنة.</strong> اطّلع الآن، على سبيل المرجع، على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل اختيارات بطاريات المنزل الأمريكية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة نظام EcoFlow مقابل Anker مقابل Zendure</a> — لكن أيًا من الصفحتين لا يدّعي أن أي جهاز معتمد أو جاهز لقانون كونيتيكت الذي لم يدخل حيز التنفيذ بعد اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في كونيتيكت',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في كونيتيكت الآن؟',
            a: 'تم توقيع HB 5340 لكنه لا يدخل حيز التنفيذ حتى 1 أكتوبر 2026. التركيب قبل ذلك التاريخ يعني أنك لست مشمولاً بعد بإعفاءاته.',
          },
          {
            q: 'لماذا يُعد حكم الطاقة الشمسية للشرفات في كونيتيكت جزءًا من قانون أكبر؟',
            a: 'HB 5340 هو مشروع قانون شامل للطاقة الشمسية يغطي عدة مجالات من سياسة الطاقة الشمسية، وتُعد الطاقة الشمسية للشرفات أحد مكوناته فقط — بخلاف معظم الولايات السبع الأخرى التي سنّت تشريعات مستقلة مخصصة.',
          },
          {
            q: 'هل يمكن لجمعية الملاك (HOA) في كونيتيكت حظر الطاقة الشمسية للشرفات؟',
            a: 'لم يتم تأكيد أي نص يتعلق بأسبقية أحكام على حظر جمعيات الملاك في كونيتيكت خلال هذه المراجعة — تحقق من عقد الإيجار أو لائحة جمعية الملاك. للاطلاع على ولاية تحظر صراحة قرارات حظر جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل سأتمكن من بيع الطاقة الفائضة إلى الشبكة في كونيتيكت؟',
            a: 'لا. لن يُطبق نظام Net Metering على أجهزة الطاقة الشمسية للشرفات بموجب HB 5340، بما يتفق مع جميع الولايات الأخرى التي سنّت تشريعات.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    title: '코네티컷주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '코네티컷주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '서명되었지만 아직 시행되지 않았습니다. HB 5340은 포괄적인 태양광 법안의 일부로 2026년 10월 1일에 시행되며, 상한선은 1,200W입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '코네티컷주에서 발코니 태양광이 합법인지 확인하는 미국 임차인 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '코네티컷주에서 발코니 태양광은 합법입니까?',
        answer: '서명되었지만 아직 시행되지 않았습니다. 코네티컷주 HB 5340은 2026년 6월 4일에 서명되었으며 2026년 10월 1일에 시행됩니다. 이는 독립적인 발코니 태양광법이 아니라 더 포괄적인 태양광 법안의 일부이며, 표준 상한선인 1,200W가 적용됩니다.',
        bullets: [
          'HB 5340은 2026년 6월 4일에 서명되었으며 — 2026년 10월 1일에 시행되고, 작성 시점 기준으로 아직 시행되지 않았습니다',
          '독립적인 발코니 태양광 법률이 아니라 더 포괄적인 태양광 법안의 일부입니다',
          '대부분의 제정 주에서 사용되는 다수 템플릿과 동일한 1,200W 상한선입니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '코네티컷주 HB 5340은 서명되었지만 2026년 10월 1일까지는 시행되지 않습니다 — 아직 적용 가능한 법률로 취급하지 마십시오.',
          '다른 7개 제정 주 대부분과 달리, 코네티컷주의 발코니 태양광 규정은 독립 입법이 아니라 더 포괄적인 태양광 법안의 일부입니다.',
          '1,200W 상한선은 대부분의 제정 주에서 사용되는 다수 템플릿과 일치합니다.',
          '다른 모든 제정 주와 마찬가지로, 완전한 UL 3700 인증을 확인받은 시스템은 아직 없습니다.',
        ],
      },
      body1: {
        title: '코네티컷주 HB 5340은 무엇을 요구합니까?',
        content: [
          '<strong>코네티컷주 HB 5340은 다른 7개 제정 주 대부분이 그랬던 것처럼 독립 입법을 통과시키는 대신, 발코니 태양광 규정을 더 포괄적인 태양광 법안에 포함시켰습니다.</strong> 다수 템플릿과 동일한 1,200W 상한선을 설정하지만, 이 법은 2026년 10월 1일까지 시행되지 않으며 작성 시점 기준으로는 아직 적용할 수 없습니다. 시행되면 표준 면제 구조가 적용될 것으로 예상됩니다. 즉, 전력회사와의 계통 연계 계약이나 수수료가 필요 없으며, 넷 미터링(net metering)은 제외됩니다.',
          '이번 조사에서는 코네티컷주에 대한 HOA 또는 임대인 우선 적용 조항이 확인되지 않았습니다 — 법이 시행되면 임대 계약서 또는 HOA 규약을 별도로 확인하십시오.',
        ],
        columns: ['항목', '코네티컷주 HB 5340'],
        rows: [
          { 항목: '서명 / 시행', '코네티컷주 HB 5340': '2026년 6월 4일 / 2026년 10월 1일(아직 시행되지 않음)' },
          { 항목: '전력 상한선', '코네티컷주 HB 5340': '1,200W' },
          { 항목: '법안 구조', '코네티컷주 HB 5340': '포괄적 태양광 법안, 독립 입법 아님' },
          { 항목: '넷 미터링', '코네티컷주 HB 5340': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '코네티컷주를 위해 지금 하드웨어를 구매해야 합니까?',
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
          '<strong>아직입니다 — 이 법은 2026년 10월 1일까지 시행되지 않으며, 별도로 작성 시점 기준 완전한 UL 3700 인증을 받은 완제품 플러그인 태양광 시스템은 아직 없습니다.</strong> 법적 시행일과 제품 인증이라는 두 가지 조건이 모두 충족되어야 합니다. EcoFlow의 STREAM Ultra는 시장에 가장 근접한 제품이지만, 현재 코네티컷주가 아닌 유타주에서 특별히 판매되고 있습니다.',
          '코네티컷주는 이 시리즈에 사용된 출처의 주별 절감액 표에 포함되어 있지 않아, 코네티컷주 고유의 금액은 여기에서 제공할 수 없습니다. 추적된 주들 전반에서 800W 키트는 현지 전기 요금에 따라 연간 약 150~350달러를 절감합니다 — 이는 코네티컷주에 대한 추정치가 아니라 전국적인 범위로 보시기 바랍니다.',
          '<strong>법이 시행되고 인증된 하드웨어가 등장하면 비교할 실제 옵션이 필요할 것입니다.</strong> 지금은 참고용으로 <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 현재 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 확인해 보십시오 — 다만 두 페이지 모두 코네티컷주의 아직 시행되지 않은 법률에 대해 어떤 키트가 인증되었거나 준비되었다고 주장하지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '코네티컷주 발코니 태양광에 대한 빠른 답변',
        faqs: [
          {
            q: '지금 코네티컷주에서 발코니 태양광은 합법입니까?',
            a: 'HB 5340은 서명되었지만 2026년 10월 1일까지는 시행되지 않습니다. 그 이전에 설치하면 아직 해당 면제 조항의 적용을 받지 못합니다.',
          },
          {
            q: '왜 코네티컷주의 발코니 태양광 규정은 더 큰 법안의 일부입니까?',
            a: 'HB 5340은 여러 태양광 정책 분야를 다루는 포괄적 법안이며, 발코니 태양광은 그중 한 구성 요소일 뿐입니다 — 전용 독립 입법을 통과시킨 다른 7개 제정 주 대부분과는 다릅니다.',
          },
          {
            q: '코네티컷주의 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '이번 조사에서는 코네티컷주에 대한 HOA 우선 적용 조항이 확인되지 않았습니다 — 임대 계약서 또는 HOA 규약을 확인하십시오. HOA 금지를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광법</a>을 참고하십시오.',
          },
          {
            q: '코네티컷주에서 잉여 전력을 전력망에 판매할 수 있습니까?',
            a: '아니요. 다른 모든 제정 주와 마찬가지로, HB 5340에 따라 넷 미터링은 발코니 태양광 장치에 적용되지 않습니다.',
          },
        ],
      },
    },
  },
}
