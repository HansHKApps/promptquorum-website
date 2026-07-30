// Slug: is-balcony-solar-legal-maine
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-en.png',
    title: 'Is Balcony Solar Legal in Maine?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Maine? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes, since July 15, 2026 under LD 1730 — with a unique two-tier cap: 420W self-install or 1,200W with a licensed electrician. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Maine',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'Is balcony solar legal in Maine?',
        answer: 'Yes. Maine LD 1730 was signed April 6, 2026 and took effect July 15, 2026. Maine is the only one of the 8 enacted states with a two-tier cap: up to 420W as a self-install, or up to 1,200W if a licensed electrician does the connection.',
        bullets: [
          'LD 1730 signed April 6, 2026, effective July 15, 2026',
          'Unique two-tier cap: 420W self-install vs. 1,200W with a licensed electrician',
          'No fully UL 3700-certified system is confirmed available yet',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Maine LD 1730 has been law since July 15, 2026.',
          'Maine is the only one of the 8 enacted states with a DIY/professional split: 420W self-install, 1,200W with a licensed electrician.',
          'State-specific savings data for Maine wasn\'t in the source tracker used for this series — see the national range below rather than a Maine-specific figure.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does LD 1730 Require in Maine?',
        content: [
          '<strong>Maine LD 1730 is the only one of the 8 enacted balcony solar laws with a two-tier wattage cap based on who installs the system.</strong> A resident can self-install a device up to 420W without a licensed electrician. To go up to the standard 1,200W cap used by most other states, a licensed electrician must handle the connection. This DIY/professional split doesn\'t appear in any of the other 7 state laws in this series — it\'s Maine\'s distinguishing feature.',
          'Like the other enacted states, devices meeting the requirements are exempt from full utility interconnection agreements, and net metering does not apply to excess exported power.',
        ],
        columns: ['Field', 'Maine LD 1730'],
        rows: [
          { Field: 'Signed / Effective', 'Maine LD 1730': 'Apr 6, 2026 / Jul 15, 2026' },
          { Field: 'Wattage cap', 'Maine LD 1730': '420W self-install; 1,200W with electrician' },
          { Field: 'Net metering', 'Maine LD 1730': 'Not available' },
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
          '<strong>UL 3700, the safety certification standard referenced by every enacted state\'s law including Maine\'s, has not yet been fully achieved by any complete plug-in solar system as of write-time.</strong> The standard was published December 2025 and certification testing opened January 2026 — testing takes months, so the gap between "legal to install" and "certified product available" is a pattern across all 8 states, not a Maine-specific issue. EcoFlow\'s STREAM Ultra is the closest to market but is currently listed for sale specifically in Utah, not nationally.',
          'Maine wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Maine-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Maine estimate, until state-specific data is confirmed.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Maine today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Maine Balcony Solar',
        faqs: [
          {
            q: 'Can I install a 1,200W balcony solar kit myself in Maine?',
            a: 'No. Self-install is capped at 420W in Maine. Reaching the 1,200W cap used by most other states requires a licensed electrician to make the connection.',
          },
          {
            q: 'Can my HOA in Maine ban balcony solar?',
            a: 'LD 1730 doesn\'t include explicit HOA preemption language, so check your lease or HOA covenant separately. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Why does Maine have a different cap than other states?',
            a: 'Maine\'s two-tier structure ties the higher 1,200W cap to professional installation, a distinction none of the other 7 enacted states in this series make.',
          },
          {
            q: 'Do I get paid for excess power in Maine?',
            a: 'No. Net metering does not apply to balcony solar devices under LD 1730, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-de.png',
    title: 'Ist Balkonsolar in Maine legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Maine legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja, seit dem 15. Juli 2026 gemäß LD 1730 – mit einzigartiger zweistufiger Grenze: 420 W Selbstinstallation oder 1.200 W mit lizenziertem Elektriker. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hauseigentümer, die prüfen, ob Balkonsolar in Maine legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'Ist Balkonsolar in Maine legal?',
        answer: 'Ja. Das Maine-Gesetz LD 1730 wurde am 6. April 2026 unterzeichnet und trat am 15. Juli 2026 in Kraft. Maine ist der einzige der 8 Bundesstaaten mit einem Gesetz, das eine zweistufige Leistungsgrenze vorsieht: bis zu 420 W bei Selbstinstallation oder bis zu 1.200 W, wenn ein lizenzierter Elektriker den Anschluss vornimmt.',
        bullets: [
          'LD 1730 unterzeichnet am 6. April 2026, in Kraft seit 15. Juli 2026',
          'Einzigartige zweistufige Grenze: 420 W Selbstinstallation vs. 1.200 W mit lizenziertem Elektriker',
          'Bisher ist kein vollständig UL-3700-zertifiziertes System bestätigt verfügbar',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Das Maine-Gesetz LD 1730 ist seit dem 15. Juli 2026 in Kraft.',
          'Maine ist der einzige der 8 Bundesstaaten mit einer DIY/Profi-Aufteilung: 420 W bei Selbstinstallation, 1.200 W mit lizenziertem Elektriker.',
          'Für Maine lagen im für diese Serie verwendeten Quellen-Tracker keine bundesstaatsspezifischen Einsparungsdaten vor – siehe unten die landesweite Spanne anstelle einer Maine-spezifischen Zahl.',
          'Wie bei allen anderen Bundesstaaten mit Gesetz ist bislang kein vollständiges System mit bestätigter voller UL-3700-Zertifizierung bekannt.',
        ],
      },
      body1: {
        title: 'Was schreibt LD 1730 in Maine vor?',
        content: [
          '<strong>Das Maine-Gesetz LD 1730 ist das einzige der 8 verabschiedeten Balkonsolar-Gesetze mit einer zweistufigen Leistungsgrenze, die davon abhängt, wer das System installiert.</strong> Bewohner können ein Gerät bis 420 W ohne lizenzierten Elektriker selbst installieren. Um die in den meisten anderen Bundesstaaten übliche Standardgrenze von 1.200 W zu erreichen, muss ein lizenzierter Elektriker den Anschluss vornehmen. Diese DIY/Profi-Aufteilung findet sich in keinem der anderen 7 Bundesstaatsgesetze dieser Serie – sie ist das Alleinstellungsmerkmal von Maine.',
          'Wie in den anderen Bundesstaaten mit Gesetz sind Geräte, die die Anforderungen erfüllen, von vollständigen Netzanschlussvereinbarungen befreit, und Net Metering gilt nicht für überschüssig eingespeisten Strom.',
        ],
        columns: ['Feld', 'Maine LD 1730'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Maine LD 1730': '6. Apr. 2026 / 15. Jul. 2026' },
          { Feld: 'Leistungsgrenze', 'Maine LD 1730': '420 W Selbstinstallation; 1.200 W mit Elektriker' },
          { Feld: 'Net Metering', 'Maine LD 1730': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sind zertifizierte Kits bereits tatsächlich erhältlich?',
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
          '<strong>UL 3700, der Sicherheitszertifizierungsstandard, auf den sich das Gesetz jedes Bundesstaats mit Regelung – einschließlich Maine – bezieht, wurde zum Zeitpunkt der Erstellung dieses Artikels noch von keinem vollständigen Plug-in-Solarsystem vollständig erreicht.</strong> Der Standard wurde im Dezember 2025 veröffentlicht, und die Zertifizierungsprüfungen begannen im Januar 2026 – solche Prüfungen dauern Monate, sodass die Lücke zwischen „Installation legal" und „zertifiziertes Produkt verfügbar" ein Muster in allen 8 Bundesstaaten ist, kein Maine-spezifisches Problem. Das EcoFlow STREAM Ultra ist dem Markt am nächsten, wird derzeit aber ausschließlich in Utah zum Verkauf angeboten, nicht landesweit.',
          'Maine war nicht in der bundesstaatsweisen Einsparungstabelle des für diese Serie verwendeten Quellen-Trackers enthalten, daher liegt hier keine Maine-spezifische Dollarzahl vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr – das ist als landesweite Spanne zu verstehen, nicht als Schätzung für Maine, bis bundesstaatsspezifische Daten bestätigt sind.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Siehe die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> – reine Produktlinks, kein Hinweis darauf, dass ein bestimmtes Kit in Maine zertifiziert oder verfügbar ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Maine',
        faqs: [
          {
            q: 'Kann ich in Maine selbst ein 1.200-W-Balkonsolar-Kit installieren?',
            a: 'Nein. Die Selbstinstallation ist in Maine auf 420 W begrenzt. Um die in den meisten anderen Bundesstaaten geltende Grenze von 1.200 W zu erreichen, muss ein lizenzierter Elektriker den Anschluss vornehmen.',
          },
          {
            q: 'Kann meine Hausverwaltung (HOA) in Maine Balkonsolar verbieten?',
            a: 'LD 1730 enthält keine ausdrückliche Regelung zur Vorrangigkeit gegenüber HOA-Verboten, prüfen Sie daher Ihren Mietvertrag oder Ihre HOA-Satzung separat. Für einen Bundesstaat, der HOA-Verbote ausdrücklich blockiert, siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Warum hat Maine eine andere Grenze als andere Bundesstaaten?',
            a: 'Maines zweistufige Struktur koppelt die höhere Grenze von 1.200 W an eine professionelle Installation – eine Unterscheidung, die keiner der anderen 7 Bundesstaaten dieser Serie trifft.',
          },
          {
            q: 'Bekomme ich in Maine eine Vergütung für überschüssigen Strom?',
            a: 'Nein. Net Metering gilt gemäß LD 1730 nicht für Balkonsolargeräte, ebenso wie in allen anderen Bundesstaaten mit Gesetz.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-fr.png',
    title: 'Le solaire de balcon est-il légal dans le Maine ?',
    dateModified: '2026-07-16',
    seoTitle: 'Le solaire de balcon est-il légal dans le Maine ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui, depuis le 15 juillet 2026 en vertu de la loi LD 1730 — avec un plafond unique à deux niveaux : 420 W en autoinstallation ou 1 200 W avec un électricien agréé. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locataires et propriétaires américains vérifiant si le solaire de balcon est légal dans le Maine',
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'Le solaire de balcon est-il légal dans le Maine ?',
        answer: 'Oui. La loi LD 1730 du Maine a été signée le 6 avril 2026 et est entrée en vigueur le 15 juillet 2026. Le Maine est le seul des 8 États ayant adopté une loi à prévoir un plafond à deux niveaux : jusqu\'à 420 W en autoinstallation, ou jusqu\'à 1 200 W si un électricien agréé réalise le raccordement.',
        bullets: [
          'LD 1730 signée le 6 avril 2026, en vigueur depuis le 15 juillet 2026',
          'Plafond unique à deux niveaux : 420 W en autoinstallation contre 1 200 W avec un électricien agréé',
          'Aucun système entièrement certifié UL 3700 n\'est confirmé disponible à ce jour',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi LD 1730 du Maine est en vigueur depuis le 15 juillet 2026.',
          'Le Maine est le seul des 8 États ayant légiféré à prévoir une répartition bricolage/professionnel : 420 W en autoinstallation, 1 200 W avec un électricien agréé.',
          'Aucune donnée d\'économies spécifique au Maine ne figurait dans la source utilisée pour cette série — voir la fourchette nationale ci-dessous plutôt qu\'un chiffre propre au Maine.',
          'Aucun système complet n\'a confirmé de certification UL 3700 intégrale à ce jour, comme dans tous les autres États ayant légiféré.',
        ],
      },
      body1: {
        title: 'Que prévoit la loi LD 1730 dans le Maine ?',
        content: [
          '<strong>La loi LD 1730 du Maine est la seule des 8 lois sur le solaire de balcon adoptées à prévoir un plafond de puissance à deux niveaux selon qui installe le système.</strong> Un résident peut autoinstaller un appareil jusqu\'à 420 W sans électricien agréé. Pour atteindre le plafond standard de 1 200 W appliqué dans la plupart des autres États, un électricien agréé doit réaliser le raccordement. Cette répartition bricolage/professionnel n\'existe dans aucune des 7 autres lois d\'État de cette série — c\'est la particularité du Maine.',
          'Comme dans les autres États ayant légiféré, les appareils conformes sont exemptés des accords complets d\'interconnexion au réseau, et le net metering ne s\'applique pas à l\'électricité excédentaire exportée.',
        ],
        columns: ['Champ', 'Maine LD 1730'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Maine LD 1730': '6 avr. 2026 / 15 juil. 2026' },
          { Champ: 'Plafond de puissance', 'Maine LD 1730': '420 W en autoinstallation ; 1 200 W avec électricien' },
          { Champ: 'Net metering', 'Maine LD 1730': 'Non disponible' },
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
          '<strong>UL 3700, la norme de certification de sécurité citée par la loi de chaque État ayant légiféré, y compris celle du Maine, n\'a encore été pleinement obtenue par aucun système solaire plug-in complet à l\'heure actuelle.</strong> La norme a été publiée en décembre 2025 et les tests de certification ont débuté en janvier 2026 — ces tests prennent des mois, donc l\'écart entre « installation légale » et « produit certifié disponible » est une tendance commune aux 8 États, pas un problème propre au Maine. Le STREAM Ultra d\'EcoFlow est le plus proche du marché, mais il n\'est actuellement en vente que dans l\'Utah, pas à l\'échelle nationale.',
          'Le Maine ne figurait pas dans le tableau d\'économies par État de la source utilisée pour cette série ; aucun chiffre en dollars propre au Maine n\'est donc disponible ici. Dans les États suivis, un kit de 800 W permet d\'économiser environ 150 à 350 $ par an selon les tarifs locaux de l\'électricité — à considérer comme une fourchette nationale, pas une estimation pour le Maine, tant que des données spécifiques à l\'État ne sont pas confirmées.',
          '<strong>Prêt à comparer du matériel concret ?</strong> Consultez les <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">sélections actuelles de batteries domestiques américaines pour le solaire de balcon</a> ou la <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparaison de l\'écosystème EcoFlow vs. Anker vs. Zendure</a> — de simples liens produits, et non une affirmation selon laquelle un kit spécifique serait certifié ou disponible dans le Maine aujourd\'hui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le Maine',
        faqs: [
          {
            q: 'Puis-je installer moi-même un kit solaire de balcon de 1 200 W dans le Maine ?',
            a: 'Non. L\'autoinstallation est plafonnée à 420 W dans le Maine. Atteindre le plafond de 1 200 W appliqué dans la plupart des autres États nécessite qu\'un électricien agréé réalise le raccordement.',
          },
          {
            q: 'Mon syndic de copropriété dans le Maine peut-il interdire le solaire de balcon ?',
            a: 'La loi LD 1730 ne contient pas de disposition explicite de préemption sur les règlements de copropriété ; vérifiez donc séparément votre bail ou votre règlement de copropriété. Pour un État qui bloque explicitement ces interdictions, consultez la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon au Colorado</a>.',
          },
          {
            q: 'Pourquoi le Maine a-t-il un plafond différent des autres États ?',
            a: 'La structure à deux niveaux du Maine lie le plafond supérieur de 1 200 W à une installation professionnelle, une distinction qu\'aucun des 7 autres États ayant légiféré dans cette série n\'établit.',
          },
          {
            q: 'Suis-je rémunéré pour l\'électricité excédentaire dans le Maine ?',
            a: 'Non. Le net metering ne s\'applique pas aux appareils solaires de balcon en vertu de la loi LD 1730, comme dans tous les autres États ayant légiféré.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ja.png',
    title: 'メイン州でバルコニーソーラーは合法ですか?',
    dateModified: '2026-07-16',
    seoTitle: 'メイン州でバルコニーソーラーは合法ですか? | Prompt Bites | PromptQuorum',
    metaDescription: 'はい。2026年7月15日よりLD 1730のもとで合法です。420Wのセルフインストールか、有資格電気技師による1,200Wという独自の2段階上限があります。PromptQuorumのクイックアンサー。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'メイン州でバルコニーソーラーが合法かどうかを確認する米国の賃貸居住者・住宅所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'メイン州でバルコニーソーラーは合法ですか?',
        answer: 'はい。メイン州のLD 1730は2026年4月6日に署名され、2026年7月15日に施行されました。メイン州は、法制化された8州の中で唯一、2段階の上限を設けています。セルフインストールなら420Wまで、有資格の電気技師が接続を行う場合は1,200Wまでです。',
        bullets: [
          'LD 1730は2026年4月6日に署名、2026年7月15日に施行',
          '独自の2段階上限:セルフインストールは420W、有資格電気技師による接続は1,200W',
          'UL 3700認証を完全に取得した製品はまだ確認されていない',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'メイン州のLD 1730は2026年7月15日から施行されています。',
          'メイン州は、法制化された8州の中で唯一、DIYとプロ施工を分ける仕組みを採用しています。セルフインストールは420W、有資格電気技師による施工は1,200Wです。',
          'このシリーズで使用したソースデータのトラッカーには、メイン州固有の節約データは含まれていませんでした。メイン州固有の数値ではなく、下記の全国レンジをご参照ください。',
          '他の法制化州と同様、UL 3700の完全認証を取得したシステムはまだ確認されていません。',
        ],
      },
      body1: {
        title: 'メイン州のLD 1730は何を定めていますか?',
        content: [
          '<strong>メイン州のLD 1730は、法制化された8つのバルコニーソーラー法の中で唯一、誰がシステムを設置するかによってワット数の上限が2段階に分かれています。</strong> 住民は有資格電気技師なしで420Wまでのデバイスをセルフインストールできます。他の多くの州で採用されている標準の1,200Wの上限まで引き上げるには、有資格電気技師が接続を行う必要があります。このDIY/プロ施工の区分は、このシリーズの他の7州の法律には見られない、メイン州独自の特徴です。',
          '他の法制化州と同様、要件を満たすデバイスは完全な電力会社との系統連系契約を免除され、余剰輸出電力にはネットメータリングが適用されません。',
        ],
        columns: ['項目', 'メイン州 LD 1730'],
        rows: [
          { 項目: '署名/施行日', 'メイン州 LD 1730': '2026年4月6日 / 2026年7月15日' },
          { 項目: 'ワット数上限', 'メイン州 LD 1730': 'セルフインストール420W、電気技師による施工1,200W' },
          { 項目: 'ネットメータリング', 'メイン州 LD 1730': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '認証済みキットは実際に入手できますか?',
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
          '<strong>メイン州を含む、法制化されたすべての州の法律が参照する安全認証規格UL 3700は、本記事執筆時点で、完全なプラグイン型ソーラーシステムでの完全取得はまだ確認されていません。</strong> この規格は2025年12月に公開され、認証テストは2026年1月に開始されました。テストには数か月かかるため、「設置は合法」と「認証済み製品が入手可能」の間のギャップは、メイン州固有の問題ではなく、8州すべてに共通するパターンです。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在は全国展開ではなく、ユタ州限定で販売されています。',
          'メイン州は、このシリーズで使用したソースデータの州別節約テーブルに含まれていなかったため、メイン州固有のドル金額はここでは提供できません。データが追跡された州全体では、800Wキットで地域の電気料金に応じて年間およそ150〜350ドルの節約が見込めます。これは州データが確認されるまでは、メイン州の推定値ではなく全国レンジとして扱ってください。',
          '<strong>実際のハードウェアを比較する準備はできましたか?</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国製ホームバッテリーの最新おすすめ</a>、または<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください——これらは単なる製品リンクであり、特定のキットがメイン州で認証済みまたは入手可能であることを示すものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'メイン州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'メイン州で1,200Wのバルコニーソーラーキットを自分で設置できますか?',
            a: 'いいえ。メイン州のセルフインストールは420Wが上限です。他の多くの州で使われている1,200Wの上限に達するには、有資格電気技師による接続が必要です。',
          },
          {
            q: 'メイン州のHOA(住宅所有者組合)はバルコニーソーラーを禁止できますか?',
            a: 'LD 1730にはHOAの禁止を明示的に無効化する規定が含まれていないため、賃貸契約書やHOAの規約を個別に確認してください。HOAの禁止を明示的に禁じている州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>をご覧ください。',
          },
          {
            q: 'なぜメイン州は他州と異なる上限を設けているのですか?',
            a: 'メイン州の2段階構造は、より高い1,200Wの上限をプロによる施工と結びつけています。これは、このシリーズの他の7つの法制化州のいずれにも見られない区分です。',
          },
          {
            q: 'メイン州では余剰電力の対価を受け取れますか?',
            a: 'いいえ。LD 1730のもとでは、他のすべての法制化州と同様に、バルコニーソーラーデバイスにネットメータリングは適用されません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-zh.png',
    title: '缅因州的阳台太阳能合法吗?',
    dateModified: '2026-07-16',
    seoTitle: '缅因州的阳台太阳能合法吗? | Prompt Bites | PromptQuorum',
    metaDescription: '是的,自2026年7月15日起根据LD 1730法案合法——设有独特的两级功率上限:自行安装420W,或由持证电工连接可达1200W。来自PromptQuorum的快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在缅因州是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: '缅因州的阳台太阳能合法吗?',
        answer: '合法。缅因州LD 1730法案于2026年4月6日签署,2026年7月15日生效。在已立法的8个州中,缅因州是唯一设有两级功率上限的州:自行安装最高420W,若由持证电工完成接线则可达1200W。',
        bullets: [
          'LD 1730于2026年4月6日签署,2026年7月15日生效',
          '独特的两级上限:自行安装420W,持证电工接线1200W',
          '目前尚未确认有完整系统获得UL 3700全面认证',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '缅因州LD 1730法案自2026年7月15日起正式生效。',
          '在已立法的8个州中,缅因州是唯一区分DIY与专业安装的州:自行安装420W,持证电工安装1200W。',
          '本系列使用的数据来源中没有缅因州专属的节省数据——请参见下方的全国范围数据,而非缅因州专属数字。',
          '与其他所有已立法州一样,目前尚未有完整系统确认获得UL 3700全面认证。',
        ],
      },
      body1: {
        title: '缅因州LD 1730法案有哪些要求?',
        content: [
          '<strong>缅因州LD 1730是已立法的8项阳台太阳能法案中,唯一根据安装者身份设置两级功率上限的法案。</strong>居民可在无需持证电工的情况下自行安装最高420W的设备。若要达到大多数其他州采用的标准1200W上限,必须由持证电工完成接线。这种DIY/专业安装的区分在本系列其他7个州的法律中均未出现——是缅因州的独特之处。',
          '与其他已立法州相同,符合要求的设备可豁免完整的电网互联协议,且净计量不适用于输出的多余电力。',
        ],
        columns: ['项目', '缅因州LD 1730'],
        rows: [
          { 项目: '签署/生效日期', '缅因州LD 1730': '2026年4月6日 / 2026年7月15日' },
          { 项目: '功率上限', '缅因州LD 1730': '自行安装420W;持证电工1200W' },
          { 项目: '净计量', '缅因州LD 1730': '不可用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '认证套件目前是否真的能买到?',
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
          '<strong>UL 3700是包括缅因州在内所有已立法州法律都参照的安全认证标准,截至撰稿时,尚未有完整的插接式太阳能系统完全获得该认证。</strong>该标准于2025年12月发布,认证测试于2026年1月启动——测试需要数月时间,因此"合法安装"与"认证产品上市"之间存在差距,这是所有8个州的共同现象,并非缅因州特有的问题。EcoFlow STREAM Ultra是最接近上市的产品,但目前仅在犹他州有售,尚未面向全国销售。',
          '缅因州未包含在本系列所用数据来源的各州节省对照表中,因此这里无法提供缅因州专属的美元数字。在已追踪数据的各州中,一套800W套件根据当地电价每年大约可节省150至350美元——在缅因州专属数据得到确认之前,请将其视为全国范围,而非缅因州的估算值。',
          '<strong>准备好比较实际硬件了吗?</strong> 参见<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>——这些只是产品链接,并不代表任何特定套件已在缅因州获得认证或可以购买。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于缅因州阳台太阳能的快速解答',
        faqs: [
          {
            q: '我可以在缅因州自行安装1200W的阳台太阳能套件吗?',
            a: '不可以。缅因州的自行安装上限为420W。若要达到大多数其他州采用的1200W上限,需要由持证电工完成接线。',
          },
          {
            q: '我在缅因州的业主协会(HOA)可以禁止阳台太阳能吗?',
            a: 'LD 1730并未包含明确禁止HOA限制的条款,因此请单独查阅您的租约或HOA公约。若想了解明确禁止HOA限制的州,请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法律</a>。',
          },
          {
            q: '为什么缅因州的上限与其他州不同?',
            a: '缅因州的两级结构将更高的1200W上限与专业安装挂钩,这是本系列其他7个已立法州都没有的区分方式。',
          },
          {
            q: '在缅因州,多余电力可以获得报酬吗?',
            a: '不可以。根据LD 1730,净计量不适用于阳台太阳能设备,这与其他所有已立法州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-es.png',
    title: '¿Es legal la energía solar de balcón en Maine?',
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en Maine? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí, desde el 15 de julio de 2026 bajo la ley LD 1730, con un límite único de dos niveles: 420W en autoinstalación o 1200W con un electricista con licencia. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Maine',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: '¿Es legal la energía solar de balcón en Maine?',
        answer: 'Sí. La ley LD 1730 de Maine se firmó el 6 de abril de 2026 y entró en vigor el 15 de julio de 2026. Maine es el único de los 8 estados con ley aprobada que tiene un límite de dos niveles: hasta 420W en autoinstalación, o hasta 1200W si un electricista con licencia hace la conexión.',
        bullets: [
          'LD 1730 firmada el 6 de abril de 2026, en vigor desde el 15 de julio de 2026',
          'Límite único de dos niveles: 420W en autoinstalación frente a 1200W con electricista con licencia',
          'Todavía no se confirma ningún sistema con certificación UL 3700 completa disponible',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley LD 1730 de Maine es ley vigente desde el 15 de julio de 2026.',
          'Maine es el único de los 8 estados con ley aprobada que separa la instalación DIY de la profesional: 420W en autoinstalación, 1200W con electricista con licencia.',
          'Los datos de ahorro específicos de Maine no estaban en la fuente usada para esta serie: consulta el rango nacional más abajo en lugar de una cifra específica de Maine.',
          'Ningún sistema completo ha confirmado certificación UL 3700 total todavía, igual que en el resto de los estados con ley aprobada.',
        ],
      },
      body1: {
        title: '¿Qué exige la LD 1730 en Maine?',
        content: [
          '<strong>La ley LD 1730 de Maine es la única de las 8 leyes de energía solar de balcón aprobadas con un límite de vatios de dos niveles según quién instale el sistema.</strong> Un residente puede autoinstalar un equipo de hasta 420W sin un electricista con licencia. Para llegar al límite estándar de 1200W que usan la mayoría de los demás estados, un electricista con licencia debe hacer la conexión. Esta división DIY/profesional no aparece en ninguna de las otras 7 leyes estatales de esta serie: es el rasgo distintivo de Maine.',
          'Como en los demás estados con ley aprobada, los equipos que cumplen los requisitos quedan exentos de acuerdos completos de interconexión con la compañía eléctrica, y el net metering no se aplica al exceso de energía exportada.',
        ],
        columns: ['Campo', 'Maine LD 1730'],
        rows: [
          { Campo: 'Firma / Entrada en vigor', 'Maine LD 1730': '6 abr. 2026 / 15 jul. 2026' },
          { Campo: 'Límite de vatios', 'Maine LD 1730': '420W autoinstalación; 1200W con electricista' },
          { Campo: 'Net metering', 'Maine LD 1730': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Ya hay kits certificados realmente disponibles?',
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
          '<strong>UL 3700, el estándar de certificación de seguridad que menciona la ley de todos los estados con ley aprobada, incluida la de Maine, todavía no lo ha alcanzado por completo ningún sistema solar plug-in completo al momento de escribir esto.</strong> El estándar se publicó en diciembre de 2025 y las pruebas de certificación comenzaron en enero de 2026; esas pruebas tardan meses, así que la brecha entre "instalación legal" y "producto certificado disponible" es un patrón en los 8 estados, no un problema exclusivo de Maine. El STREAM Ultra de EcoFlow es el que está más cerca de salir al mercado, pero por ahora se vende específicamente en Utah, no a nivel nacional.',
          'Maine no estaba en la tabla de ahorros por estado de la fuente usada para esta serie, así que aquí no hay una cifra en dólares específica de Maine. En los estados que sí se rastrearon, un kit de 800W ahorra aproximadamente entre $150 y $350 al año según las tarifas eléctricas locales; trata eso como un rango nacional, no como una estimación para Maine, hasta que se confirmen datos específicos del estado.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas de EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — enlaces de producto simples, no una afirmación de que un kit específico esté certificado o disponible en Maine hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la energía solar de balcón en Maine',
        faqs: [
          {
            q: '¿Puedo instalar yo mismo un kit de energía solar de balcón de 1200W en Maine?',
            a: 'No. La autoinstalación en Maine tiene un límite de 420W. Para llegar al límite de 1200W que usan la mayoría de los demás estados, se necesita un electricista con licencia que haga la conexión.',
          },
          {
            q: '¿Mi HOA en Maine puede prohibir la energía solar de balcón?',
            a: 'LD 1730 no incluye un lenguaje explícito que anule las prohibiciones de las HOA, así que revisa tu contrato de alquiler o el reglamento de tu HOA por separado. Para un estado que bloquea explícitamente las prohibiciones de las HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Por qué Maine tiene un límite distinto al de otros estados?',
            a: 'La estructura de dos niveles de Maine vincula el límite más alto de 1200W a la instalación profesional, una distinción que ninguno de los otros 7 estados con ley aprobada de esta serie hace.',
          },
          {
            q: '¿Me pagan por el exceso de energía en Maine?',
            a: 'No. El net metering no se aplica a los equipos de energía solar de balcón bajo la LD 1730, igual que en todos los demás estados con ley aprobada.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-pt.png',
    title: 'A energia solar de varanda é legal no Maine?',
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal no Maine? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim, desde 15 de julho de 2026 sob a lei LD 1730 — com um limite único em dois níveis: 420W em autoinstalação ou 1.200W com eletricista licenciado. Resposta rápida do PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal no Maine',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'A energia solar de varanda é legal no Maine?',
        answer: 'Sim. A lei LD 1730 do Maine foi assinada em 6 de abril de 2026 e entrou em vigor em 15 de julho de 2026. O Maine é o único dos 8 estados com lei aprovada que tem um limite em dois níveis: até 420W em autoinstalação, ou até 1.200W se um eletricista licenciado fizer a conexão.',
        bullets: [
          'LD 1730 assinada em 6 de abril de 2026, em vigor desde 15 de julho de 2026',
          'Limite único em dois níveis: 420W em autoinstalação vs. 1.200W com eletricista licenciado',
          'Ainda não há confirmação de nenhum sistema com certificação UL 3700 completa disponível',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A lei LD 1730 do Maine está em vigor desde 15 de julho de 2026.',
          'O Maine é o único dos 8 estados com lei aprovada que separa instalação DIY e profissional: 420W em autoinstalação, 1.200W com eletricista licenciado.',
          'Dados de economia específicos do Maine não estavam na fonte usada para esta série — veja a faixa nacional abaixo em vez de um número específico do Maine.',
          'Nenhum sistema completo confirmou certificação UL 3700 total até agora, assim como em todos os outros estados com lei aprovada.',
        ],
      },
      body1: {
        title: 'O que a LD 1730 exige no Maine?',
        content: [
          '<strong>A lei LD 1730 do Maine é a única das 8 leis de energia solar de varanda aprovadas com um limite de potência em dois níveis, baseado em quem instala o sistema.</strong> Um morador pode autoinstalar um equipamento de até 420W sem eletricista licenciado. Para chegar ao limite padrão de 1.200W usado na maioria dos outros estados, um eletricista licenciado precisa fazer a conexão. Essa divisão DIY/profissional não aparece em nenhuma das outras 7 leis estaduais desta série — é a característica que diferencia o Maine.',
          'Assim como nos outros estados com lei aprovada, equipamentos que atendem aos requisitos ficam isentos de acordos completos de interconexão com a concessionária, e o net metering não se aplica ao excedente de energia exportado.',
        ],
        columns: ['Campo', 'Maine LD 1730'],
        rows: [
          { Campo: 'Assinatura / Vigência', 'Maine LD 1730': '6 de abr. de 2026 / 15 de jul. de 2026' },
          { Campo: 'Limite de potência', 'Maine LD 1730': '420W autoinstalação; 1.200W com eletricista' },
          { Campo: 'Net metering', 'Maine LD 1730': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Já existem kits certificados realmente disponíveis?',
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
          '<strong>A UL 3700, o padrão de certificação de segurança referenciado pela lei de todos os estados com lei aprovada, incluindo o Maine, ainda não foi totalmente alcançada por nenhum sistema solar plug-in completo até o momento desta publicação.</strong> O padrão foi publicado em dezembro de 2025 e os testes de certificação começaram em janeiro de 2026 — esses testes levam meses, então a lacuna entre "instalação legal" e "produto certificado disponível" é um padrão nos 8 estados, não um problema específico do Maine. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente está à venda especificamente em Utah, não em nível nacional.',
          'O Maine não estava na tabela de economia por estado da fonte usada para esta série, então não há um valor em dólares específico do Maine disponível aqui. Nos estados que foram rastreados, um kit de 800W economiza cerca de US$ 150 a US$ 350 por ano, dependendo das tarifas locais de energia — trate isso como uma faixa nacional, não uma estimativa para o Maine, até que dados específicos do estado sejam confirmados.',
          '<strong>Pronto para comparar equipamentos reais?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">opções atuais de baterias domésticas dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — links diretos de produtos, não uma afirmação de que algum kit específico é certificado ou está disponível no Maine hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda no Maine',
        faqs: [
          {
            q: 'Posso instalar sozinho um kit de energia solar de varanda de 1.200W no Maine?',
            a: 'Não. A autoinstalação no Maine tem limite de 420W. Para chegar ao limite de 1.200W usado na maioria dos outros estados, é necessário um eletricista licenciado para fazer a conexão.',
          },
          {
            q: 'Minha associação de moradores (HOA) no Maine pode proibir energia solar de varanda?',
            a: 'A LD 1730 não inclui uma cláusula explícita que anule proibições de HOA, então verifique seu contrato de aluguel ou o regimento da sua HOA separadamente. Para um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'Por que o Maine tem um limite diferente dos outros estados?',
            a: 'A estrutura em dois níveis do Maine vincula o limite maior de 1.200W à instalação profissional, uma distinção que nenhum dos outros 7 estados com lei aprovada desta série faz.',
          },
          {
            q: 'Eu recebo pagamento pelo excedente de energia no Maine?',
            a: 'Não. O net metering não se aplica a equipamentos de energia solar de varanda sob a LD 1730, assim como em todos os outros estados com lei aprovada.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ar.png',
    title: 'هل الطاقة الشمسية للشرفات قانونية في ولاية مين؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في ولاية مين؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم، اعتبارًا من 15 يوليو 2026 بموجب قانون LD 1730 — بحد فريد من مستويين: 420W للتركيب الذاتي أو 1200W مع كهربائي مرخص. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في ولاية مين',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: 'هل الطاقة الشمسية للشرفات قانونية في ولاية مين؟',
        answer: 'نعم. تم توقيع قانون LD 1730 في ولاية مين بتاريخ 6 أبريل 2026 ودخل حيز التنفيذ في 15 يوليو 2026. وتُعد ولاية مين الولاية الوحيدة من بين الولايات الثماني التي سنّت قوانين والتي تطبّق حدًا من مستويين: حتى 420W للتركيب الذاتي، أو حتى 1200W إذا قام كهربائي مرخص بالتوصيل.',
        bullets: [
          'تم توقيع LD 1730 في 6 أبريل 2026، ودخل حيز التنفيذ في 15 يوليو 2026',
          'حد فريد من مستويين: 420W للتركيب الذاتي مقابل 1200W مع كهربائي مرخص',
          'لا يوجد حتى الآن تأكيد على توفر نظام حاصل على شهادة UL 3700 كاملة',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أصبح قانون LD 1730 في ولاية مين ساري المفعول منذ 15 يوليو 2026.',
          'ولاية مين هي الولاية الوحيدة من بين الولايات الثماني التي سنّت قوانين والتي تفصل بين التركيب الذاتي والتركيب الاحترافي: 420W للتركيب الذاتي، و1200W مع كهربائي مرخص.',
          'لم تتوفر بيانات توفير خاصة بولاية مين في المصدر المستخدم لهذه السلسلة — راجع النطاق الوطني أدناه بدلاً من رقم خاص بولاية مين.',
          'لم يؤكَّد حتى الآن حصول أي نظام كامل على شهادة UL 3700 الكاملة، كما هو الحال في جميع الولايات الأخرى التي سنّت قوانين.',
        ],
      },
      body1: {
        title: 'ماذا يتطلب قانون LD 1730 في ولاية مين؟',
        content: [
          '<strong>يُعد قانون LD 1730 في ولاية مين القانون الوحيد من بين قوانين الطاقة الشمسية للشرفات الثمانية المُشرّعة الذي يطبّق حدًا للطاقة من مستويين بناءً على الجهة التي تركّب النظام.</strong> يمكن للمقيم تركيب جهاز حتى 420W بنفسه دون الحاجة إلى كهربائي مرخص. وللوصول إلى الحد القياسي البالغ 1200W المُطبّق في معظم الولايات الأخرى، يجب أن يتولى كهربائي مرخص عملية التوصيل. هذا الفصل بين التركيب الذاتي والاحترافي لا يظهر في أي من قوانين الولايات السبع الأخرى في هذه السلسلة — وهو ما يميّز ولاية مين.',
          'وكما هو الحال في الولايات الأخرى التي سنّت قوانين، تُعفى الأجهزة المستوفية للمتطلبات من اتفاقيات الربط الكامل بالشبكة، ولا ينطبق نظام قياس الصافي (net metering) على الطاقة الزائدة المُصدَّرة.',
        ],
        columns: ['الحقل', 'Maine LD 1730'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'Maine LD 1730': '6 أبريل 2026 / 15 يوليو 2026' },
          { الحقل: 'حد الطاقة', 'Maine LD 1730': '420W للتركيب الذاتي؛ 1200W مع كهربائي' },
          { الحقل: 'قياس الصافي (Net metering)', 'Maine LD 1730': 'غير متوفر' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل تتوفر الأطقم المعتمدة فعليًا حتى الآن؟',
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
          '<strong>لم يحقق أي نظام شمسي كامل قابل للتوصيل المباشر حتى وقت كتابة هذا المقال الشهادة الكاملة لمعيار UL 3700، وهو معيار السلامة الذي تشير إليه قوانين جميع الولايات التي سنّت تشريعات، بما فيها ولاية مين.</strong> نُشر المعيار في ديسمبر 2025، وبدأت اختبارات الاعتماد في يناير 2026 — وتستغرق هذه الاختبارات شهورًا، لذا فإن الفجوة بين "التركيب القانوني" و"توفر منتج معتمد" هي نمط مشترك بين الولايات الثماني جميعها، وليست مشكلة خاصة بولاية مين. يُعد جهاز STREAM Ultra من EcoFlow الأقرب إلى الوصول إلى السوق، لكنه معروض للبيع حاليًا في ولاية يوتا تحديدًا، وليس على المستوى الوطني.',
          'لم تكن ولاية مين ضمن جدول التوفير حسب الولاية في المصدر المستخدم لهذه السلسلة، لذا لا يتوفر هنا رقم بالدولار خاص بولاية مين. وفي الولايات التي تم تتبعها، يوفّر طقم بقدرة 800W ما يقارب 150 إلى 350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — يجب اعتبار ذلك نطاقًا وطنيًا، وليس تقديرًا خاصًا بولاية مين، إلى حين تأكيد بيانات خاصة بالولاية.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> راجع <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">الاختيارات الحالية لبطاريات المنازل الأمريكية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow مقابل Anker مقابل Zendure</a> — وهي مجرد روابط منتجات، وليست ادعاءً بأن أي طقم معين معتمد أو متوفر في ولاية مين اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في ولاية مين',
        faqs: [
          {
            q: 'هل يمكنني تركيب طقم طاقة شمسية للشرفة بقدرة 1200W بنفسي في ولاية مين؟',
            a: 'لا. التركيب الذاتي في ولاية مين محدود بـ420W. للوصول إلى الحد البالغ 1200W المُطبّق في معظم الولايات الأخرى، يجب أن يتولى كهربائي مرخص عملية التوصيل.',
          },
          {
            q: 'هل يمكن لجمعية الملاك (HOA) في ولاية مين حظر الطاقة الشمسية للشرفات؟',
            a: 'لا يتضمن قانون LD 1730 نصًا صريحًا يُبطل حظر جمعيات الملاك، لذا تحقق من عقد الإيجار أو لوائح جمعية الملاك الخاصة بك بشكل منفصل. للاطلاع على ولاية تحظر صراحة قرارات جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في ولاية كولورادو</a>.',
          },
          {
            q: 'لماذا يختلف الحد في ولاية مين عن الولايات الأخرى؟',
            a: 'يربط الهيكل ذو المستويين في ولاية مين الحد الأعلى البالغ 1200W بالتركيب الاحترافي، وهو تمييز لا تطبّقه أي من الولايات السبع الأخرى المُشرّعة في هذه السلسلة.',
          },
          {
            q: 'هل أحصل على مقابل مادي عن الطاقة الزائدة في ولاية مين؟',
            a: 'لا. لا ينطبق نظام قياس الصافي (net metering) على أجهزة الطاقة الشمسية للشرفات بموجب قانون LD 1730، وكذلك الحال في جميع الولايات الأخرى التي سنّت قوانين.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ko.png',
    title: '메인주에서 발코니 태양광이 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '메인주에서 발코니 태양광이 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '네, 2026년 7월 15일부터 LD 1730 법에 따라 합법입니다. 자가 설치 시 420W, 면허 전기기사 시공 시 1,200W라는 독특한 2단계 상한이 적용됩니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '메인주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
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
        question: '메인주에서 발코니 태양광이 합법입니까?',
        answer: '네, 합법입니다. 메인주 LD 1730 법안은 2026년 4월 6일 서명되었으며 2026년 7월 15일부터 시행되었습니다. 메인주는 법제화된 8개 주 가운데 유일하게 2단계 상한을 적용합니다. 자가 설치 시 최대 420W까지, 면허를 소지한 전기기사가 연결을 시공하는 경우 최대 1,200W까지 허용됩니다.',
        bullets: [
          'LD 1730은 2026년 4월 6일 서명, 2026년 7월 15일부터 시행',
          '독특한 2단계 상한: 자가 설치 420W, 면허 전기기사 시공 1,200W',
          'UL 3700 인증을 완전히 취득한 시스템은 아직 확인되지 않음',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '메인주 LD 1730 법안은 2026년 7월 15일부터 시행되고 있습니다.',
          '메인주는 법제화된 8개 주 가운데 유일하게 DIY와 전문 시공을 구분합니다. 자가 설치는 420W, 면허 전기기사 시공은 1,200W까지 허용됩니다.',
          '이 시리즈에 사용된 자료 출처에는 메인주 고유의 절감액 데이터가 포함되어 있지 않았습니다. 메인주 전용 수치 대신 아래의 전국 범위를 참고하시기 바랍니다.',
          '다른 모든 법제화 주와 마찬가지로, 완전한 UL 3700 인증을 취득한 시스템은 아직 확인되지 않았습니다.',
        ],
      },
      body1: {
        title: '메인주 LD 1730 법안은 무엇을 요구합니까?',
        content: [
          '<strong>메인주 LD 1730은 법제화된 8개 발코니 태양광 법 가운데 유일하게 시스템 설치 주체에 따라 와트 상한을 2단계로 구분합니다.</strong> 주민은 면허 전기기사 없이 최대 420W까지 기기를 자가 설치할 수 있습니다. 대부분의 다른 주에서 사용하는 표준 상한인 1,200W까지 올리려면 면허 전기기사가 연결 작업을 수행해야 합니다. 이러한 DIY/전문 시공 구분은 이 시리즈의 다른 7개 주 법률 어디에도 존재하지 않으며, 메인주만의 특징입니다.',
          '다른 법제화 주와 마찬가지로 요건을 충족하는 기기는 전체 계통연계 계약이 면제되며, 초과 수출 전력에는 순계량제(net metering)가 적용되지 않습니다.',
        ],
        columns: ['항목', '메인주 LD 1730'],
        rows: [
          { 항목: '서명 / 시행일', '메인주 LD 1730': '2026년 4월 6일 / 2026년 7월 15일' },
          { 항목: '와트 상한', '메인주 LD 1730': '자가 설치 420W; 전기기사 시공 1,200W' },
          { 항목: '순계량제', '메인주 LD 1730': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '인증된 키트가 실제로 시중에 나와 있습니까?',
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
          '<strong>메인주를 포함해 법제화된 모든 주의 법률이 참조하는 안전 인증 표준인 UL 3700은, 이 글을 작성하는 현재까지 완전한 플러그인 태양광 시스템 중 어느 것도 완전히 취득하지 못했습니다.</strong> 이 표준은 2025년 12월에 발표되었으며 인증 테스트는 2026년 1월에 시작되었습니다. 테스트에는 수개월이 소요되므로 "설치는 합법" 상태와 "인증 제품 구매 가능" 상태 사이의 간극은 메인주만의 문제가 아니라 8개 주 전체에서 나타나는 패턴입니다. EcoFlow의 STREAM Ultra가 시장 출시에 가장 근접했지만, 현재는 전국이 아닌 유타주에서만 한정적으로 판매되고 있습니다.',
          '메인주는 이 시리즈에 사용된 자료 출처의 주별 절감액 표에 포함되어 있지 않았기 때문에 메인주 고유의 달러 수치는 여기에서 제공할 수 없습니다. 데이터가 추적된 주들에서는 지역 전기 요금에 따라 800W 키트로 연간 약 150~350달러를 절감할 수 있었습니다. 주별 데이터가 확인되기 전까지는 이를 메인주 추정치가 아닌 전국 범위로 간주하시기 바랍니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨습니까?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 현재 추천 목록</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 참고하십시오. 이는 단순한 제품 링크일 뿐, 특정 키트가 메인주에서 인증되었거나 구매 가능하다는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '메인주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '메인주에서 1,200W 발코니 태양광 키트를 직접 설치할 수 있습니까?',
            a: '아니요. 메인주에서 자가 설치는 420W로 제한됩니다. 대부분의 다른 주에서 사용하는 1,200W 상한에 도달하려면 면허 전기기사가 연결 작업을 수행해야 합니다.',
          },
          {
            q: '메인주에서 HOA(주택소유자협회)가 발코니 태양광을 금지할 수 있습니까?',
            a: 'LD 1730에는 HOA의 금지 조항을 명시적으로 무효화하는 규정이 포함되어 있지 않으므로, 임대차 계약서나 HOA 규약을 별도로 확인하시기 바랍니다. HOA의 금지를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법</a>을 참고하십시오.',
          },
          {
            q: '메인주는 왜 다른 주와 다른 상한을 적용합니까?',
            a: '메인주의 2단계 구조는 더 높은 1,200W 상한을 전문 시공과 연계합니다. 이는 이 시리즈의 다른 7개 법제화 주 어디에서도 찾아볼 수 없는 구분 방식입니다.',
          },
          {
            q: '메인주에서 초과 전력에 대한 대가를 받을 수 있습니까?',
            a: '아니요. LD 1730에 따라 발코니 태양광 기기에는 순계량제가 적용되지 않으며, 이는 다른 모든 법제화 주와 동일합니다.',
          },
        ],
      },
    },
  },
}
