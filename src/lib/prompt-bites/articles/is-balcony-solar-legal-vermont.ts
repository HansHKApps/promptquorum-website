// Slug: is-balcony-solar-legal-vermont
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-en.png',
    title: 'Is Balcony Solar Legal in Vermont?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Vermont? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — in effect since July 1, 2026 under S.202/H.598. 1,200W cap, UL 3700 certification explicitly required, net metering excluded. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Vermont',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Vermont?',
        answer: 'Yes. Vermont S.202/H.598 took effect July 1, 2026. It caps devices at 1,200W and explicitly requires UL 3700 (or equivalent) certification by statute, with net metering excluded — one of the more explicitly worded laws among the 8 enacted states.',
        bullets: [
          'S.202/H.598 in effect since July 1, 2026',
          '1,200W cap, with UL 3700 (or equivalent) certification explicitly required by the statute\'s own text',
          'No fully UL 3700-certified system is confirmed available yet, so the certification requirement isn\'t fully satisfiable by any product today',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Vermont S.202/H.598 has been in effect since July 1, 2026.',
          'Vermont\'s statute explicitly names UL 3700 (or an equivalent) certification requirement in its own text, more explicitly than some other enacted states.',
          'Net metering is explicitly excluded for balcony solar devices under the law.',
          'No complete system has confirmed full UL 3700 certification yet, meaning Vermont\'s explicit certification requirement isn\'t fully satisfiable by any product as of write-time.',
        ],
      },
      body1: {
        title: 'What Does S.202/H.598 Require in Vermont?',
        content: [
          '<strong>Vermont\'s law caps devices at 1,200W, matching the majority template, but is more explicit than most of the 8 enacted states in naming UL 3700 or an equivalent nationally recognized certification directly in the statutory text.</strong> Net metering is explicitly excluded — excess power exported to the grid earns no compensation under the law.',
          'No HOA or landlord preemption language for Vermont was confirmed in this pass — check your lease or HOA covenant separately, since the state law addresses utility interconnection and certification, not HOA authority.',
        ],
        columns: ['Field', 'Vermont S.202/H.598'],
        rows: [
          { Field: 'Signed / Effective', 'Vermont S.202/H.598': '2026 / Jul 1, 2026' },
          { Field: 'Wattage cap', 'Vermont S.202/H.598': '1,200W' },
          { Field: 'Certification', 'Vermont S.202/H.598': 'UL 3700 or equivalent, explicitly required by statute' },
          { Field: 'Net metering', 'Vermont S.202/H.598': 'Explicitly excluded' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Does Vermont\'s Explicit UL 3700 Requirement Change Anything?',
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
          '<strong>Vermont naming UL 3700 explicitly in its statute doesn\'t change the underlying problem: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time, the same gap facing every other enacted state.</strong> The standard was published December 2025 with testing opening January 2026 — testing takes months, and Vermont\'s explicit statutory language doesn\'t speed that process up. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Vermont.',
          'Vermont wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Vermont-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Vermont estimate.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Vermont today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Vermont Balcony Solar',
        faqs: [
          {
            q: 'Does Vermont require UL 3700 certification specifically?',
            a: 'Yes — Vermont\'s statute explicitly names UL 3700 or an equivalent nationally recognized certification, more directly than some other enacted states. No complete system has confirmed that certification yet, though.',
          },
          {
            q: 'Can I get paid for excess solar power I export in Vermont?',
            a: 'No. Vermont\'s law explicitly excludes balcony solar devices from net metering.',
          },
          {
            q: 'Can my HOA in Vermont ban balcony solar?',
            a: 'No HOA preemption language for Vermont was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Is Vermont\'s law already in effect?',
            a: 'Yes, since July 1, 2026 — unlike Colorado and Connecticut, whose balcony solar laws are signed but not yet in effect.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-de.png',
    title: 'Ist Balkonsolar in Vermont legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Vermont legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja – seit dem 1. Juli 2026 in Kraft gemäß S.202/H.598. Obergrenze 1.200 W, UL-3700-Zertifizierung ausdrücklich vorgeschrieben, Net Metering ausgeschlossen. Kurzantwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hauseigentümer, die prüfen, ob Balkonsolar in Vermont legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Vermont legal?',
        answer: 'Ja. Vermonts S.202/H.598 trat am 1. Juli 2026 in Kraft. Das Gesetz begrenzt Geräte auf 1.200 W und schreibt die UL-3700-Zertifizierung (oder eine gleichwertige) ausdrücklich im Gesetzestext vor, wobei Net Metering ausgeschlossen ist – eines der explizitesten Gesetze unter den 8 verabschiedenden Bundesstaaten.',
        bullets: [
          'S.202/H.598 seit 1. Juli 2026 in Kraft',
          '1.200-W-Obergrenze, UL-3700-Zertifizierung (oder gleichwertig) im Gesetzestext selbst ausdrücklich vorgeschrieben',
          'Bisher ist kein vollständig UL-3700-zertifiziertes System bestätigt verfügbar, sodass die Zertifizierungspflicht heute von keinem Produkt vollständig erfüllt werden kann',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Vermonts S.202/H.598 ist seit dem 1. Juli 2026 in Kraft.',
          'Vermonts Gesetzestext nennt die Zertifizierungspflicht nach UL 3700 (oder gleichwertig) ausdrücklich – expliziter als in einigen anderen verabschiedenden Bundesstaaten.',
          'Net Metering ist für Balkonsolargeräte nach dem Gesetz ausdrücklich ausgeschlossen.',
          'Bisher hat kein vollständiges System die volle UL-3700-Zertifizierung bestätigt erhalten, sodass Vermonts explizite Zertifizierungspflicht derzeit von keinem Produkt vollständig erfüllt werden kann.',
        ],
      },
      body1: {
        title: 'Was schreibt S.202/H.598 in Vermont vor?',
        content: [
          '<strong>Vermonts Gesetz begrenzt Geräte auf 1.200 W, entsprechend der Mehrheitsvorlage, nennt jedoch UL 3700 oder eine gleichwertige, national anerkannte Zertifizierung expliziter im Gesetzestext als die meisten der 8 verabschiedenden Bundesstaaten.</strong> Net Metering ist ausdrücklich ausgeschlossen – überschüssiger, ins Netz eingespeister Strom wird nach dem Gesetz nicht vergütet.',
          'Für Vermont wurde in dieser Prüfung keine HOA- oder Vermieter-Vorrangregelung bestätigt – prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung separat, da das Landesgesetz die Netzanbindung und Zertifizierung regelt, nicht die HOA-Befugnisse.',
        ],
        columns: ['Feld', 'Vermont S.202/H.598'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Vermont S.202/H.598': '2026 / 1. Juli 2026' },
          { Feld: 'Leistungsobergrenze', 'Vermont S.202/H.598': '1.200 W' },
          { Feld: 'Zertifizierung', 'Vermont S.202/H.598': 'UL 3700 oder gleichwertig, gesetzlich ausdrücklich vorgeschrieben' },
          { Feld: 'Net Metering', 'Vermont S.202/H.598': 'Ausdrücklich ausgeschlossen' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Ändert Vermonts explizite UL-3700-Vorgabe etwas?',
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
          '<strong>Dass Vermont UL 3700 im Gesetzestext ausdrücklich nennt, ändert nichts am zugrunde liegenden Problem: Bislang ist kein komplettes Plug-in-Solarsystem bestätigt vollständig UL-3700-zertifiziert – dieselbe Lücke besteht in jedem anderen verabschiedenden Bundesstaat.</strong> Der Standard wurde im Dezember 2025 veröffentlicht, Tests begannen im Januar 2026 – solche Tests dauern Monate, und Vermonts explizite Gesetzesformulierung beschleunigt diesen Prozess nicht. EcoFlows STREAM Ultra ist das Produkt, das dem Markt am nächsten ist, wird derzeit aber speziell in Utah zum Verkauf angeboten, nicht in Vermont.',
          'Vermont war nicht in der Bundesstaaten-Einsparungstabelle der für diese Serie genutzten Quelle enthalten, daher liegt hier keine Vermont-spezifische Zahl vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr – das ist als landesweite Spanne zu verstehen, nicht als Schätzung für Vermont.',
          '<strong>Möchten Sie konkrete Hardware vergleichen?</strong> Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Ökosystemvergleich EcoFlow vs. Anker vs. Zendure</a> an – reine Produktlinks, kein Nachweis, dass ein bestimmtes Kit in Vermont zertifiziert oder erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurzantworten zu Balkonsolar in Vermont',
        faqs: [
          {
            q: 'Verlangt Vermont ausdrücklich eine UL-3700-Zertifizierung?',
            a: 'Ja – Vermonts Gesetzestext nennt UL 3700 oder eine gleichwertige, national anerkannte Zertifizierung ausdrücklich, direkter als in einigen anderen verabschiedenden Bundesstaaten. Allerdings ist bislang kein vollständiges System mit dieser Zertifizierung bestätigt.',
          },
          {
            q: 'Bekomme ich in Vermont Geld für überschüssigen Solarstrom, den ich einspeise?',
            a: 'Nein. Vermonts Gesetz schließt Balkonsolargeräte ausdrücklich von Net Metering aus.',
          },
          {
            q: 'Kann meine HOA in Vermont Balkonsolar verbieten?',
            a: 'Für Vermont wurde in dieser Prüfung keine HOA-Vorrangregelung bestätigt – prüfen Sie Ihren Mietvertrag oder Ihre HOA-Satzung. Einen Bundesstaat, der HOA-Verbote ausdrücklich blockiert, finden Sie im <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Ist Vermonts Gesetz bereits in Kraft?',
            a: 'Ja, seit dem 1. Juli 2026 – anders als in Colorado und Connecticut, wo die Balkonsolar-Gesetze zwar unterzeichnet, aber noch nicht in Kraft sind.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-fr.png',
    title: "Le solaire de balcon est-il légal dans le Vermont ?",
    dateModified: '2026-07-16',
    seoTitle: 'Solaire de balcon légal dans le Vermont ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — en vigueur depuis le 1er juillet 2026 sous S.202/H.598. Plafond de 1 200 W, certification UL 3700 explicitement exigée, revente au réseau exclue. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal dans le Vermont',
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le Vermont ?',
        answer: "Oui. La loi S.202/H.598 du Vermont est entrée en vigueur le 1er juillet 2026. Elle plafonne les appareils à 1 200 W et exige explicitement, dans le texte même de la loi, la certification UL 3700 (ou équivalente), tout en excluant la revente au réseau — l'une des lois les plus explicites parmi les 8 États l'ayant adoptée.",
        bullets: [
          'S.202/H.598 en vigueur depuis le 1er juillet 2026',
          'Plafond de 1 200 W, avec certification UL 3700 (ou équivalente) explicitement exigée par le texte même de la loi',
          "Aucun système n'a encore confirmé une certification UL 3700 complète, donc aucun produit ne satisfait pleinement cette exigence à ce jour",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi S.202/H.598 du Vermont est en vigueur depuis le 1er juillet 2026.',
          "Le texte de la loi du Vermont nomme explicitement l'exigence de certification UL 3700 (ou équivalente), plus explicitement que dans certains autres États l'ayant adoptée.",
          'La revente au réseau (net metering) est explicitement exclue pour les appareils solaires de balcon par la loi.',
          "Aucun système complet n'a encore confirmé une certification UL 3700 complète, ce qui signifie qu'aucun produit ne satisfait pleinement l'exigence explicite du Vermont à ce jour.",
        ],
      },
      body1: {
        title: 'Que prévoit la loi S.202/H.598 dans le Vermont ?',
        content: [
          "<strong>La loi du Vermont plafonne les appareils à 1 200 W, conformément au modèle majoritaire, mais elle est plus explicite que la plupart des 8 États l'ayant adoptée en nommant directement UL 3700 ou une certification équivalente reconnue nationalement dans le texte légal.</strong> La revente au réseau est explicitement exclue — l'excédent d'électricité exporté vers le réseau n'est pas rémunéré selon la loi.",
          "Aucune disposition de préemption des HOA ou des propriétaires n'a été confirmée pour le Vermont lors de cette analyse — vérifiez séparément votre bail ou le règlement de copropriété, car la loi de l'État traite de l'interconnexion au réseau et de la certification, pas de l'autorité des HOA.",
        ],
        columns: ['Champ', 'Vermont S.202/H.598'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Vermont S.202/H.598': '2026 / 1er juillet 2026' },
          { Champ: 'Plafond de puissance', 'Vermont S.202/H.598': '1 200 W' },
          { Champ: 'Certification', 'Vermont S.202/H.598': 'UL 3700 ou équivalente, explicitement exigée par la loi' },
          { Champ: 'Revente au réseau', 'Vermont S.202/H.598': 'Explicitement exclue' },
        ],
        tableFormat: true,
      },
      body2: {
        title: "L'exigence explicite UL 3700 du Vermont change-t-elle quelque chose ?",
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
          "<strong>Le fait que le Vermont nomme explicitement UL 3700 dans sa loi ne change rien au problème de fond : aucun système solaire à brancher complet n'a confirmé une certification UL 3700 intégrale à ce jour, un manque partagé par tous les autres États l'ayant adoptée.</strong> La norme a été publiée en décembre 2025, les tests ont débuté en janvier 2026 — ces tests prennent des mois, et le libellé explicite de la loi du Vermont n'accélère pas ce processus. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement dans l'Utah, pas dans le Vermont.",
          "Le Vermont ne figurait pas dans le tableau d'économies État par État de la source utilisée pour cette série, donc aucun chiffre spécifique au Vermont n'est disponible ici. Dans les États suivis, un kit de 800 W permet d'économiser environ 150 à 350 dollars par an selon les tarifs locaux d'électricité — à considérer comme une fourchette nationale, pas une estimation pour le Vermont.",
          "<strong>Prêt à comparer du matériel concret ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleurs choix de batteries domestiques américaines pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison des écosystèmes EcoFlow, Anker et Zendure</a> — de simples liens produits, sans prétendre qu'un kit précis est certifié ou disponible dans le Vermont aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le Vermont',
        faqs: [
          {
            q: 'Le Vermont exige-t-il spécifiquement la certification UL 3700 ?',
            a: "Oui — le texte de la loi du Vermont nomme explicitement UL 3700 ou une certification équivalente reconnue nationalement, plus directement que certains autres États l'ayant adoptée. Aucun système complet n'a toutefois confirmé cette certification à ce jour.",
          },
          {
            q: "Puis-je être payé pour l'excédent d'électricité solaire exporté dans le Vermont ?",
            a: 'Non. La loi du Vermont exclut explicitement les appareils solaires de balcon de la revente au réseau.',
          },
          {
            q: 'Ma copropriété dans le Vermont peut-elle interdire le solaire de balcon ?',
            a: "Aucune disposition de préemption des HOA n'a été confirmée pour le Vermont lors de cette analyse — vérifiez votre bail ou le règlement de copropriété. Pour un État qui bloque explicitement les interdictions des HOA, consultez la <a href=\"/fr/prompt-bites/is-balcony-solar-legal-colorado\" class=\"text-primary hover:underline\">loi sur le solaire de balcon du Colorado</a>.",
          },
          {
            q: 'La loi du Vermont est-elle déjà en vigueur ?',
            a: 'Oui, depuis le 1er juillet 2026 — contrairement au Colorado et au Connecticut, dont les lois sur le solaire de balcon sont signées mais pas encore en vigueur.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-ja.png',
    title: 'バーモント州でバルコニーソーラーは合法か？',
    dateModified: '2026-07-16',
    seoTitle: 'バーモント州のバルコニーソーラーは合法？ | Prompt Bites | PromptQuorum',
    metaDescription: 'はい――S.202/H.598により2026年7月1日から施行済みです。上限1,200W、UL 3700認証が法文で明示的に義務付けられ、ネットメータリングは除外されています。PromptQuorumのクイックアンサーです。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'バーモント州でバルコニーソーラーが合法かどうかを確認する米国の賃借人・持ち家所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'バーモント州でバルコニーソーラーは合法ですか？',
        answer: 'はい。バーモント州のS.202/H.598は2026年7月1日に施行されました。機器の出力を1,200Wに制限し、法文でUL 3700（またはそれと同等の認証）を明示的に義務付けており、ネットメータリングは対象外です――8つの制定州の中でも特に明示的な条文を持つ法律の一つです。',
        bullets: [
          'S.202/H.598は2026年7月1日から施行済み',
          '上限1,200W。UL 3700（またはそれと同等の認証）を法文自体が明示的に要求',
          '現時点でUL 3700認証を完全に取得したと確認されたシステムはなく、この認証要件を今日満たせる製品は存在しない',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'バーモント州のS.202/H.598は2026年7月1日から施行されています。',
          'バーモント州の法文は、他の一部の制定州よりも明示的にUL 3700（または同等の認証）の要件を条文に明記しています。',
          '法律により、バルコニーソーラー機器のネットメータリングは明示的に除外されています。',
          '現時点でUL 3700の完全認証を取得したと確認された製品はなく、バーモント州の明示的な認証要件を今日満たせる製品は存在しません。',
        ],
      },
      body1: {
        title: 'バーモント州のS.202/H.598は何を義務付けているか？',
        content: [
          '<strong>バーモント州の法律は、多数派のテンプレートに合わせて機器を1,200Wに制限していますが、8つの制定州の多くよりも明示的に、法文中で直接UL 3700または同等の全米認定認証を指定しています。</strong> ネットメータリングは明示的に除外されており、系統へ送電された余剰電力に対する補償はこの法律では発生しません。',
          '今回の調査では、バーモント州のHOA（管理組合）や賃貸人による優先規定は確認されていません――州法は系統連系と認証を対象としており、HOAの権限を扱うものではないため、リースやHOA規約は別途確認してください。',
        ],
        columns: ['項目', 'バーモント州 S.202/H.598'],
        rows: [
          { 項目: '署名／施行', 'バーモント州 S.202/H.598': '2026年／2026年7月1日' },
          { 項目: '出力上限', 'バーモント州 S.202/H.598': '1,200W' },
          { 項目: '認証', 'バーモント州 S.202/H.598': 'UL 3700またはそれと同等（法文で明示的に義務付け）' },
          { 項目: 'ネットメータリング', 'バーモント州 S.202/H.598': '明示的に除外' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'バーモント州の明示的なUL 3700要件は何かを変えるのか？',
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
          '<strong>バーモント州が法文でUL 3700を明示的に指定していても、根本的な問題は変わりません――現時点で完全なUL 3700認証を取得したと確認されたプラグイン型太陽光システムは存在せず、これは他のすべての制定州が直面している同じギャップです。</strong> この規格は2025年12月に公表され、2026年1月に試験が開始されましたが、試験には数か月を要し、バーモント州の明示的な条文がこのプロセスを早めることはありません。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在はユタ州限定で販売されており、バーモント州では販売されていません。',
          'バーモント州は、このシリーズで使用された情報源の州別節約額データには含まれていなかったため、バーモント州固有の金額はここでは示せません。データがある州全体で見ると、800Wキットは地域の電気料金により年間おおよそ150〜350ドルの節約となります――これはバーモント州の推定値ではなく、全米レンジとして扱ってください。',
          '<strong>実際のハードウェアを比較しませんか？</strong><a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国製ホームバッテリーの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください――これらは単なる製品リンクであり、特定のキットがバーモント州で認証済み・購入可能であることを示すものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'バーモント州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'バーモント州はUL 3700認証を特に義務付けていますか？',
            a: 'はい――バーモント州の法文は、他の一部の制定州よりも直接的にUL 3700またはそれと同等の全米認定認証を明示しています。ただし、この認証を取得したと確認された完全なシステムはまだありません。',
          },
          {
            q: 'バーモント州で送電した余剰太陽光電力の対価を得られますか？',
            a: 'いいえ。バーモント州の法律は、バルコニーソーラー機器をネットメータリングから明示的に除外しています。',
          },
          {
            q: 'バーモント州のHOAはバルコニーソーラーを禁止できますか？',
            a: '今回の調査では、バーモント州のHOA優先規定は確認されていません――リースやHOA規約を確認してください。HOAによる禁止を明示的にブロックしている州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>をご覧ください。',
          },
          {
            q: 'バーモント州の法律はすでに施行されていますか？',
            a: 'はい、2026年7月1日から施行されています――バルコニーソーラー法が署名済みでまだ施行されていないコロラド州やコネチカット州とは異なります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-zh.png',
    title: '佛蒙特州的阳台太阳能合法吗？',
    dateModified: '2026-07-16',
    seoTitle: '佛蒙特州阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '合法——根据S.202/H.598法案，自2026年7月1日起生效。功率上限1,200W，法律明确要求UL 3700认证，且明确排除净计量。PromptQuorum快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '想确认阳台太阳能在佛蒙特州是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '佛蒙特州的阳台太阳能合法吗？',
        answer: '合法。佛蒙特州S.202/H.598法案已于2026年7月1日生效。该法律将设备功率上限设为1,200W，并在法条中明确要求UL 3700（或同等）认证，同时明确排除净计量——是已立法的8个州中措辞最为明确的法律之一。',
        bullets: [
          'S.202/H.598自2026年7月1日起生效',
          '功率上限1,200W，法律条文本身明确要求UL 3700（或同等）认证',
          '目前尚无产品被确认已获得完整的UL 3700认证，因此该认证要求目前无法被任何产品完全满足',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '佛蒙特州S.202/H.598法案自2026年7月1日起已生效。',
          '佛蒙特州法条明确在条文中列出UL 3700（或同等）认证要求，比其他部分已立法州措辞更明确。',
          '根据该法律，阳台太阳能设备明确不适用净计量。',
          '目前尚无完整系统被确认已获得完整的UL 3700认证，这意味着截至目前，没有任何产品能完全满足佛蒙特州的明确认证要求。',
        ],
      },
      body1: {
        title: '佛蒙特州S.202/H.598法案有哪些要求？',
        content: [
          '<strong>佛蒙特州的法律将设备功率上限设为1,200W，与大多数州的通用模板一致，但相比8个已立法州中的大多数，佛蒙特州在法条正文中更明确地直接列出了UL 3700或同等的全国认可认证。</strong> 净计量被明确排除——根据该法律，输出到电网的多余电力不获得补偿。',
          '在本次核查中，未确认佛蒙特州存在业主协会（HOA）或房东优先条款——请单独查看你的租约或HOA公约，因为州法针对的是电网互联和认证问题，而非HOA权限。',
        ],
        columns: ['项目', '佛蒙特州 S.202/H.598'],
        rows: [
          { 项目: '签署／生效日期', '佛蒙特州 S.202/H.598': '2026年 / 2026年7月1日' },
          { 项目: '功率上限', '佛蒙特州 S.202/H.598': '1,200W' },
          { 项目: '认证要求', '佛蒙特州 S.202/H.598': 'UL 3700或同等认证，法律明确要求' },
          { 项目: '净计量', '佛蒙特州 S.202/H.598': '明确排除' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '佛蒙特州明确的UL 3700要求改变了什么吗？',
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
          '<strong>佛蒙特州在法条中明确列出UL 3700，并未改变根本问题：截至目前，没有任何一款完整的插入式太阳能系统被确认已获得完整的UL 3700认证，这与其他所有已立法州面临的差距相同。</strong> 该标准于2025年12月发布，测试于2026年1月开始——测试需要数月时间，佛蒙特州明确的法律措辞并不会加快这一进程。EcoFlow的STREAM Ultra是最接近上市的产品，但目前专门在犹他州销售，而非佛蒙特州。',
          '佛蒙特州未被纳入本系列所使用来源的各州节省金额数据表，因此这里没有针对佛蒙特州的具体数字。在有数据的州中，一套800W套件根据当地电价每年大约可节省150至350美元——请将其视为全国范围的估算，而非针对佛蒙特州的估算。',
          '<strong>想比较实际硬件吗？</strong>参见<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统对比</a>——这些只是产品链接，并不表示某款套件已在佛蒙特州获得认证或可购买。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于佛蒙特州阳台太阳能的快速解答',
        faqs: [
          {
            q: '佛蒙特州是否专门要求UL 3700认证？',
            a: '是的——佛蒙特州法条明确列出UL 3700或同等的全国认可认证，比其他部分已立法州更直接。不过，目前尚无完整系统被确认已获得该认证。',
          },
          {
            q: '在佛蒙特州，我输出的多余太阳能电力能获得报酬吗？',
            a: '不能。佛蒙特州的法律明确将阳台太阳能设备排除在净计量之外。',
          },
          {
            q: '我在佛蒙特州的业主协会（HOA）能禁止阳台太阳能吗？',
            a: '本次核查未确认佛蒙特州存在HOA优先条款——请查看你的租约或HOA公约。若想了解明确阻止HOA禁令的州，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法律</a>。',
          },
          {
            q: '佛蒙特州的法律已经生效了吗？',
            a: '是的，自2026年7月1日起已生效——这与科罗拉多州和康涅狄格州不同，这两个州的阳台太阳能法律虽已签署但尚未生效。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-es.png',
    title: '¿Es legal la energía solar de balcón en Vermont?',
    dateModified: '2026-07-16',
    seoTitle: '¿Solar de balcón legal en Vermont? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí, vigente desde el 1 de julio de 2026 según S.202/H.598. Tope de 1,200W, certificación UL 3700 exigida explícitamente, net metering excluido. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que verifican si la energía solar de balcón es legal en Vermont',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Vermont?',
        answer: 'Sí. La ley S.202/H.598 de Vermont entró en vigor el 1 de julio de 2026. Limita los dispositivos a 1,200W y exige explícitamente, en el propio texto de la ley, la certificación UL 3700 (o equivalente), excluyendo el net metering — una de las leyes redactadas de forma más explícita entre los 8 estados que la han aprobado.',
        bullets: [
          'S.202/H.598 vigente desde el 1 de julio de 2026',
          'Tope de 1,200W, con certificación UL 3700 (o equivalente) exigida explícitamente por el propio texto de la ley',
          'Ningún sistema ha confirmado aún la certificación UL 3700 completa, por lo que ningún producto cumple hoy plenamente este requisito',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley S.202/H.598 de Vermont está vigente desde el 1 de julio de 2026.',
          'El texto legal de Vermont nombra explícitamente el requisito de certificación UL 3700 (o equivalente), de forma más explícita que en algunos otros estados que han aprobado leyes similares.',
          'El net metering está explícitamente excluido para los dispositivos solares de balcón bajo esta ley.',
          'Ningún sistema completo ha confirmado aún la certificación UL 3700 completa, lo que significa que ningún producto cumple hoy plenamente el requisito explícito de Vermont.',
        ],
      },
      body1: {
        title: '¿Qué exige S.202/H.598 en Vermont?',
        content: [
          '<strong>La ley de Vermont limita los dispositivos a 1,200W, en línea con la plantilla mayoritaria, pero es más explícita que la mayoría de los 8 estados que han aprobado leyes similares al nombrar directamente UL 3700 o una certificación equivalente reconocida a nivel nacional en el propio texto legal.</strong> El net metering está explícitamente excluido: la energía excedente exportada a la red no recibe compensación bajo esta ley.',
          'No se confirmó ninguna disposición de anulación de HOA o de arrendadores para Vermont en esta revisión — verifica tu contrato de alquiler o el reglamento de tu HOA por separado, ya que la ley estatal aborda la interconexión con la red eléctrica y la certificación, no la autoridad de las HOA.',
        ],
        columns: ['Campo', 'Vermont S.202/H.598'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Vermont S.202/H.598': '2026 / 1 de julio de 2026' },
          { Campo: 'Tope de potencia', 'Vermont S.202/H.598': '1,200W' },
          { Campo: 'Certificación', 'Vermont S.202/H.598': 'UL 3700 o equivalente, exigida explícitamente por ley' },
          { Campo: 'Net metering', 'Vermont S.202/H.598': 'Explícitamente excluido' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿El requisito explícito de UL 3700 en Vermont cambia algo?',
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
          '<strong>Que Vermont nombre explícitamente UL 3700 en su ley no cambia el problema de fondo: ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 completa hasta la fecha, la misma brecha que enfrenta cada uno de los demás estados que han aprobado leyes similares.</strong> El estándar se publicó en diciembre de 2025 y las pruebas comenzaron en enero de 2026 — las pruebas toman meses, y el lenguaje legal explícito de Vermont no acelera ese proceso. El STREAM Ultra de EcoFlow es el producto más cercano a estar disponible, pero actualmente se vende específicamente en Utah, no en Vermont.',
          'Vermont no estaba incluido en la tabla de ahorros estado por estado de la fuente usada para esta serie, por lo que no hay una cifra específica de Vermont disponible aquí. En los estados que sí se rastrearon, un kit de 800W ahorra aproximadamente entre $150 y $350 al año según las tarifas eléctricas locales — trátalo como un rango nacional, no como una estimación para Vermont.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">opciones actuales de baterías domésticas en EE. UU. para solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación de ecosistemas EcoFlow vs. Anker vs. Zendure</a> — enlaces de producto simples, no una afirmación de que algún kit en concreto esté certificado o disponible en Vermont hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre solar de balcón en Vermont',
        faqs: [
          {
            q: '¿Vermont exige específicamente la certificación UL 3700?',
            a: 'Sí — el texto legal de Vermont nombra explícitamente UL 3700 o una certificación equivalente reconocida a nivel nacional, de forma más directa que algunos otros estados que han aprobado leyes similares. Sin embargo, ningún sistema completo ha confirmado aún esa certificación.',
          },
          {
            q: '¿Puedo cobrar por el excedente de energía solar que exporto en Vermont?',
            a: 'No. La ley de Vermont excluye explícitamente a los dispositivos solares de balcón del net metering.',
          },
          {
            q: '¿Mi HOA en Vermont puede prohibir la energía solar de balcón?',
            a: 'No se confirmó ninguna disposición de anulación de HOA para Vermont en esta revisión — verifica tu contrato de alquiler o el reglamento de tu HOA. Para un estado que bloquea explícitamente las prohibiciones de las HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de solar de balcón de Colorado</a>.',
          },
          {
            q: '¿La ley de Vermont ya está vigente?',
            a: 'Sí, desde el 1 de julio de 2026 — a diferencia de Colorado y Connecticut, cuyas leyes de solar de balcón están firmadas pero aún no vigentes.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-pt.png',
    title: 'A energia solar de varanda é legal em Vermont?',
    dateModified: '2026-07-16',
    seoTitle: 'Solar de varanda legal em Vermont? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim — em vigor desde 1º de julho de 2026 pela lei S.202/H.598. Limite de 1.200W, certificação UL 3700 exigida explicitamente, net metering excluído. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Vermont',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Vermont?',
        answer: 'Sim. A lei S.202/H.598 de Vermont entrou em vigor em 1º de julho de 2026. Ela limita os dispositivos a 1.200W e exige explicitamente, no próprio texto da lei, a certificação UL 3700 (ou equivalente), com o net metering excluído — uma das leis com redação mais explícita entre os 8 estados que já aprovaram legislação semelhante.',
        bullets: [
          'S.202/H.598 em vigor desde 1º de julho de 2026',
          'Limite de 1.200W, com certificação UL 3700 (ou equivalente) exigida explicitamente pelo próprio texto da lei',
          'Nenhum sistema confirmou ainda a certificação UL 3700 completa, então nenhum produto atende totalmente esse requisito hoje',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A lei S.202/H.598 de Vermont está em vigor desde 1º de julho de 2026.',
          'O texto da lei de Vermont cita explicitamente a exigência de certificação UL 3700 (ou equivalente), de forma mais explícita do que em alguns outros estados que aprovaram leis semelhantes.',
          'O net metering é explicitamente excluído para dispositivos solares de varanda por essa lei.',
          'Nenhum sistema completo confirmou ainda a certificação UL 3700 total, o que significa que nenhum produto atende hoje totalmente a exigência explícita de Vermont.',
        ],
      },
      body1: {
        title: 'O que a lei S.202/H.598 exige em Vermont?',
        content: [
          '<strong>A lei de Vermont limita os dispositivos a 1.200W, seguindo o modelo adotado pela maioria, mas é mais explícita do que a maioria dos 8 estados que aprovaram leis semelhantes ao citar diretamente a UL 3700 ou uma certificação equivalente reconhecida nacionalmente no próprio texto legal.</strong> O net metering é explicitamente excluído — o excedente de energia exportado para a rede não recebe compensação segundo a lei.',
          'Nenhuma disposição de preempção de HOA (associação de moradores) ou de locadores foi confirmada para Vermont nesta análise — verifique seu contrato de aluguel ou o regulamento da HOA separadamente, já que a lei estadual trata da interconexão com a rede elétrica e da certificação, não da autoridade da HOA.',
        ],
        columns: ['Campo', 'Vermont S.202/H.598'],
        rows: [
          { Campo: 'Assinada / Em vigor', 'Vermont S.202/H.598': '2026 / 1º de julho de 2026' },
          { Campo: 'Limite de potência', 'Vermont S.202/H.598': '1.200W' },
          { Campo: 'Certificação', 'Vermont S.202/H.598': 'UL 3700 ou equivalente, exigida explicitamente por lei' },
          { Campo: 'Net metering', 'Vermont S.202/H.598': 'Explicitamente excluído' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'A exigência explícita de UL 3700 de Vermont muda alguma coisa?',
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
          '<strong>O fato de Vermont citar explicitamente a UL 3700 em sua lei não muda o problema de fundo: nenhum sistema solar plug-in completo confirmou certificação UL 3700 total até o momento, a mesma lacuna enfrentada por todos os outros estados que aprovaram leis semelhantes.</strong> O padrão foi publicado em dezembro de 2025, com testes iniciados em janeiro de 2026 — os testes levam meses, e a redação legal explícita de Vermont não acelera esse processo. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente é vendido especificamente em Utah, não em Vermont.',
          'Vermont não estava na tabela de economia estado por estado da fonte usada nesta série, então não há um valor específico para Vermont disponível aqui. Nos estados que foram rastreados, um kit de 800W economiza aproximadamente $150–$350 por ano, dependendo das tarifas locais de energia — trate isso como uma faixa nacional, não como uma estimativa para Vermont.',
          '<strong>Pronto para comparar hardware de verdade?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">melhores opções atuais de baterias residenciais dos EUA para solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação de ecossistemas EcoFlow vs. Anker vs. Zendure</a> — links diretos de produtos, sem afirmar que algum kit específico é certificado ou está disponível em Vermont hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre solar de varanda em Vermont',
        faqs: [
          {
            q: 'Vermont exige especificamente a certificação UL 3700?',
            a: 'Sim — o texto da lei de Vermont cita explicitamente a UL 3700 ou uma certificação equivalente reconhecida nacionalmente, de forma mais direta do que em alguns outros estados que aprovaram leis semelhantes. Ainda assim, nenhum sistema completo confirmou essa certificação até o momento.',
          },
          {
            q: 'Posso ser pago pelo excedente de energia solar que exporto em Vermont?',
            a: 'Não. A lei de Vermont exclui explicitamente os dispositivos solares de varanda do net metering.',
          },
          {
            q: 'Minha HOA em Vermont pode proibir energia solar de varanda?',
            a: 'Nenhuma disposição de preempção de HOA foi confirmada para Vermont nesta análise — verifique seu contrato de aluguel ou o regulamento da HOA. Para um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de solar de varanda do Colorado</a>.',
          },
          {
            q: 'A lei de Vermont já está em vigor?',
            a: 'Sim, desde 1º de julho de 2026 — diferente de Colorado e Connecticut, cujas leis de solar de varanda estão assinadas mas ainda não em vigor.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-ar.png',
    title: 'هل الطاقة الشمسية للشرفات قانونية في فيرمونت؟',
    dateModified: '2026-07-16',
    seoTitle: 'الطاقة الشمسية للشرفات في فيرمونت قانونية؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم — سارية المفعول منذ 1 يوليو 2026 بموجب قانون S.202/H.598. الحد الأقصى 1,200 واط، شهادة UL 3700 مطلوبة صراحةً، وقياس الصافي مستبعد. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في فيرمونت',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في فيرمونت؟',
        answer: 'نعم. دخل قانون فيرمونت S.202/H.598 حيّز التنفيذ في 1 يوليو 2026. يحدد القانون سقف الأجهزة عند 1,200 واط ويشترط صراحةً في نص القانون شهادة UL 3700 (أو ما يعادلها)، مع استبعاد قياس الصافي (net metering) — وهو من أكثر القوانين وضوحًا في صياغته بين الولايات الثماني التي سنّت تشريعات مماثلة.',
        bullets: [
          'قانون S.202/H.598 ساري المفعول منذ 1 يوليو 2026',
          'سقف 1,200 واط، مع اشتراط شهادة UL 3700 (أو ما يعادلها) صراحةً في نص القانون نفسه',
          'لا يوجد حتى الآن نظام مؤكَّد حاصل على شهادة UL 3700 كاملة، لذا لا يستوفي أي منتج هذا الشرط بالكامل اليوم',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون فيرمونت S.202/H.598 ساري المفعول منذ 1 يوليو 2026.',
          'يذكر نص قانون فيرمونت صراحةً شرط شهادة UL 3700 (أو ما يعادلها)، بوضوح أكبر من بعض الولايات الأخرى التي سنّت قوانين مماثلة.',
          'قياس الصافي (net metering) مستبعد صراحةً لأجهزة الطاقة الشمسية للشرفات بموجب القانون.',
          'لا يوجد حتى الآن نظام كامل مؤكَّد حاصل على شهادة UL 3700 الكاملة، ما يعني أن شرط فيرمونت الصريح للشهادة لا يستوفيه أي منتج بالكامل حتى وقت كتابة هذا المقال.',
        ],
      },
      body1: {
        title: 'ماذا يشترط قانون S.202/H.598 في فيرمونت؟',
        content: [
          '<strong>يحدد قانون فيرمونت سقف الأجهزة عند 1,200 واط، بما يتماشى مع النموذج المعتمد في معظم الولايات، لكنه أكثر وضوحًا من معظم الولايات الثماني التي سنّت قوانين مماثلة في ذكر UL 3700 أو شهادة معادلة معترف بها وطنيًا مباشرةً في نص القانون.</strong> قياس الصافي مستبعد صراحةً — لا يحصل أصحاب الأجهزة على أي تعويض مقابل الطاقة الفائضة المصدَّرة إلى الشبكة بموجب هذا القانون.',
          'لم يتم تأكيد أي نص يمنع جمعيات الملاك (HOA) أو الملاك من فرض قيود في فيرمونت ضمن هذا الاستعراض — يُرجى مراجعة عقد الإيجار أو لائحة جمعية الملاك بشكل منفصل، لأن قانون الولاية يتناول الربط بالشبكة والشهادة، وليس صلاحيات جمعيات الملاك.',
        ],
        columns: ['البند', 'فيرمونت S.202/H.598'],
        rows: [
          { البند: 'التوقيع / السريان', 'فيرمونت S.202/H.598': '2026 / 1 يوليو 2026' },
          { البند: 'الحد الأقصى للطاقة', 'فيرمونت S.202/H.598': '1,200 واط' },
          { البند: 'الشهادة', 'فيرمونت S.202/H.598': 'UL 3700 أو ما يعادلها، مطلوبة صراحةً بموجب القانون' },
          { البند: 'قياس الصافي', 'فيرمونت S.202/H.598': 'مستبعد صراحةً' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل يغيّر شرط UL 3700 الصريح في فيرمونت أي شيء؟',
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
          '<strong>ذكر فيرمونت الصريح لشهادة UL 3700 في نص القانون لا يغيّر المشكلة الجوهرية: لا يوجد حتى وقت كتابة هذا المقال نظام طاقة شمسية قابل للتوصيل المباشر حاصل على شهادة UL 3700 كاملة مؤكَّدة، وهي نفس الفجوة التي تواجهها بقية الولايات التي سنّت قوانين مماثلة.</strong> نُشر المعيار في ديسمبر 2025 وبدأت الاختبارات في يناير 2026 — تستغرق هذه الاختبارات شهورًا، ولا تُسرّع صياغة فيرمونت القانونية الصريحة هذه العملية. يُعد جهاز STREAM Ultra من EcoFlow أقرب منتج إلى دخول السوق، لكنه يُباع حاليًا في ولاية يوتا تحديدًا، وليس في فيرمونت.',
          'لم تكن فيرمونت ضمن جدول التوفير حسب الولاية الخاص بالمصدر المستخدم في هذه السلسلة، لذا لا يتوفر هنا رقم محدد لفيرمونت. في الولايات التي تم تتبعها، توفّر مجموعة 1,200 واط بقدرة 800 واط ما يقارب 150 إلى 350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — يُرجى اعتبار هذا نطاقًا وطنيًا عامًا وليس تقديرًا خاصًا بفيرمونت.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل خيارات بطاريات المنازل الأمريكية للطاقة الشمسية للشرفات لعام 2026</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة أنظمة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات، وليست ادعاءً بأن جهازًا معينًا معتمد أو متوفر في فيرمونت حاليًا.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في فيرمونت',
        faqs: [
          {
            q: 'هل تشترط فيرمونت شهادة UL 3700 تحديدًا؟',
            a: 'نعم — يذكر نص قانون فيرمونت صراحةً UL 3700 أو شهادة معادلة معترف بها وطنيًا، بشكل أكثر مباشرة من بعض الولايات الأخرى التي سنّت قوانين مماثلة. ومع ذلك، لا يوجد حتى الآن نظام كامل مؤكَّد حاصل على هذه الشهادة.',
          },
          {
            q: 'هل يمكنني الحصول على مقابل مادي للطاقة الشمسية الفائضة التي أُصدّرها في فيرمونت؟',
            a: 'لا. يستبعد قانون فيرمونت صراحةً أجهزة الطاقة الشمسية للشرفات من قياس الصافي.',
          },
          {
            q: 'هل يمكن لجمعية الملاك في فيرمونت حظر الطاقة الشمسية للشرفات؟',
            a: 'لم يتم تأكيد أي نص يمنع جمعيات الملاك من فرض قيود في فيرمونت ضمن هذا الاستعراض — يُرجى مراجعة عقد الإيجار أو لائحة جمعية الملاك. للاطلاع على ولاية تمنع صراحةً حظر جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل قانون فيرمونت ساري المفعول بالفعل؟',
            a: 'نعم، منذ 1 يوليو 2026 — بخلاف كولورادو وكونيتيكت، حيث قوانين الطاقة الشمسية للشرفات موقَّعة لكنها لم تدخل حيّز التنفيذ بعد.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-vermont-overview-hero-ko.png',
    title: '버몬트주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '버몬트주 발코니 태양광, 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '예 — S.202/H.598에 따라 2026년 7월 1일부터 시행 중입니다. 상한 1,200W, UL 3700 인증이 명시적으로 요구되며, 넷미터링은 제외됩니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '버몬트주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '버몬트주에서 발코니 태양광은 합법입니까?',
        answer: '예. 버몬트주의 S.202/H.598 법안은 2026년 7월 1일부터 시행되었습니다. 이 법은 기기 용량을 1,200W로 제한하고, 법률 조문에서 UL 3700(또는 동등 인증)을 명시적으로 요구하며, 넷미터링은 제외됩니다 — 이는 법안을 제정한 8개 주 가운데서도 조문이 특히 명시적인 법률 중 하나입니다.',
        bullets: [
          'S.202/H.598은 2026년 7월 1일부터 시행 중',
          '상한 1,200W, 법률 조문 자체가 UL 3700(또는 동등 인증)을 명시적으로 요구',
          '현재까지 UL 3700 완전 인증을 확인받은 시스템은 없어, 오늘날 어떤 제품도 이 인증 요건을 완전히 충족하지 못함',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '버몬트주의 S.202/H.598 법안은 2026년 7월 1일부터 시행되고 있습니다.',
          '버몬트주의 법률 조문은 UL 3700(또는 동등 인증) 요건을 다른 일부 제정 주보다 더 명시적으로 명시하고 있습니다.',
          '이 법에 따라 발코니 태양광 기기에 대한 넷미터링은 명시적으로 제외됩니다.',
          '현재까지 완전한 UL 3700 인증을 확인받은 시스템은 없으며, 이는 버몬트주의 명시적 인증 요건을 오늘날 어떤 제품도 완전히 충족하지 못함을 의미합니다.',
        ],
      },
      body1: {
        title: '버몬트주 S.202/H.598은 무엇을 요구합니까?',
        content: [
          '<strong>버몬트주 법률은 대다수 주가 따르는 표준 모델과 동일하게 기기 용량을 1,200W로 제한하지만, 법안을 제정한 8개 주 대부분보다 더 명시적으로 UL 3700 또는 이에 상응하는 전국적으로 인정된 인증을 법률 조문에 직접 명시하고 있습니다.</strong> 넷미터링은 명시적으로 제외됩니다 — 이 법에 따르면 전력망으로 송출된 잉여 전력에 대한 보상은 없습니다.',
          '이번 검토에서는 버몬트주에 대해 HOA(주택소유자협회) 또는 임대인의 우선 규정이 확인되지 않았습니다 — 주 법률은 전력망 연계와 인증을 다루며 HOA의 권한을 다루지 않으므로, 임대 계약서나 HOA 규약을 별도로 확인하십시오.',
        ],
        columns: ['항목', '버몬트주 S.202/H.598'],
        rows: [
          { 항목: '서명 / 시행', '버몬트주 S.202/H.598': '2026년 / 2026년 7월 1일' },
          { 항목: '전력 상한', '버몬트주 S.202/H.598': '1,200W' },
          { 항목: '인증', '버몬트주 S.202/H.598': 'UL 3700 또는 동등 인증, 법률로 명시적으로 요구' },
          { 항목: '넷미터링', '버몬트주 S.202/H.598': '명시적으로 제외' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '버몬트주의 명시적인 UL 3700 요건이 무언가를 바꿉니까?',
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
          '<strong>버몬트주가 법률 조문에 UL 3700을 명시적으로 명시했다고 해서 근본적인 문제가 바뀌지는 않습니다. 현재까지 완전한 UL 3700 인증을 확인받은 완제품형 플러그인 태양광 시스템은 없으며, 이는 법안을 제정한 다른 모든 주가 직면한 것과 동일한 공백입니다.</strong> 해당 표준은 2025년 12월에 공표되었고 시험은 2026년 1월에 시작되었습니다 — 시험에는 수개월이 소요되며, 버몬트주의 명시적인 법률 문구가 이 과정을 앞당기지는 않습니다. EcoFlow의 STREAM Ultra가 시장에 가장 근접한 제품이지만, 현재는 버몬트주가 아닌 유타주에서 한정적으로 판매되고 있습니다.',
          '버몬트주는 이 시리즈에 사용된 출처의 주별 절감액 표에 포함되어 있지 않았기 때문에, 버몬트주에 특화된 수치는 여기서 제공되지 않습니다. 자료가 있는 주들을 기준으로, 800W 키트는 지역 전기 요금에 따라 연간 약 150~350달러를 절감합니다 — 이는 버몬트주에 대한 추정치가 아니라 전국 범위로 이해해야 합니다.',
          '<strong>실제 하드웨어를 비교해 보시겠습니까?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 참고하십시오 — 이는 단순 제품 링크일 뿐이며, 특정 키트가 버몬트주에서 인증되었거나 구매 가능하다는 의미는 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '버몬트주 발코니 태양광에 대한 빠른 답변',
        faqs: [
          {
            q: '버몬트주는 UL 3700 인증을 구체적으로 요구합니까?',
            a: '예 — 버몬트주의 법률 조문은 UL 3700 또는 이에 상응하는 전국적으로 인정된 인증을 다른 일부 제정 주보다 더 직접적으로 명시하고 있습니다. 다만 이 인증을 확인받은 완제품 시스템은 아직 없습니다.',
          },
          {
            q: '버몬트주에서 송출한 잉여 태양광 전력에 대해 보상을 받을 수 있습니까?',
            a: '아니요. 버몬트주 법률은 발코니 태양광 기기를 넷미터링에서 명시적으로 제외합니다.',
          },
          {
            q: '버몬트주의 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '이번 검토에서는 버몬트주에 대한 HOA 우선 규정이 확인되지 않았습니다 — 임대 계약서나 HOA 규약을 확인하십시오. HOA의 금지를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법률</a>을 참고하십시오.',
          },
          {
            q: '버몬트주의 법률은 이미 시행되고 있습니까?',
            a: '예, 2026년 7월 1일부터 시행되고 있습니다 — 법률이 서명되었지만 아직 시행되지 않은 콜로라도주 및 코네티컷주와는 다릅니다.',
          },
        ],
      },
    },
  },
}
