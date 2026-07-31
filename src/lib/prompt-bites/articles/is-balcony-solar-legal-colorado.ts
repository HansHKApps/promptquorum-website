// Slug: is-balcony-solar-legal-colorado
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Colorado?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, not yet in effect. HB26-1007 takes effect January 1, 2027 with the highest US cap (1,920W) and an explicit HOA-ban prohibition. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Colorado',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Colorado?',
        answer: 'Signed, but not yet in effect. Colorado HB26-1007 was signed May 7, 2026 and takes effect January 1, 2027. It sets the highest wattage cap of any enacted state (1,920W) and is the only one that explicitly bars HOAs and landlords from banning balcony solar.',
        bullets: [
          'HB26-1007 signed May 7, 2026 — takes effect January 1, 2027, not yet in effect as of write-time',
          '1,920W cap — the highest of any US state balcony solar law found',
          'Explicit HOA/landlord ban prohibition — the strongest such protection among the 8 enacted states',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Colorado HB26-1007 is signed but does not take effect until January 1, 2027 — don\'t treat it as usable law yet.',
          'At 1,920W, Colorado allows the highest wattage cap of any enacted US state.',
          'Colorado is the only one of the 8 enacted states that explicitly prohibits HOAs and landlords from banning balcony solar.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will HB26-1007 Require in Colorado?',
        content: [
          '<strong>Colorado HB26-1007 sets a 1,920W cap — the highest of any enacted US balcony solar law — but the law does not take effect until January 1, 2027, so it is not usable yet as of write-time.</strong> Once in effect, it will follow the standard exemption template (no utility interconnection agreement or fee, net metering excluded) with one major addition: explicit language prohibiting HOAs and landlords from banning balcony solar outright.',
          'That HOA/landlord provision makes Colorado\'s law the strongest consumer protection among the 8 enacted states — every other state in this series either has no such language or hasn\'t been independently confirmed to include it.',
        ],
        columns: ['Field', 'Colorado HB26-1007'],
        rows: [
          { Field: 'Signed / Effective', 'Colorado HB26-1007': 'May 7, 2026 / Jan 1, 2027 (not yet in effect)' },
          { Field: 'Wattage cap', 'Colorado HB26-1007': '1,920W — highest of any state found' },
          { Field: 'HOA / landlord bans', 'Colorado HB26-1007': 'Explicitly prohibited' },
          { Field: 'Net metering', 'Colorado HB26-1007': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Should I Buy Hardware Now for Colorado?',
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
          '<strong>Not yet — the law isn\'t in effect until January 1, 2027, and separately, no complete plug-in solar system has confirmed full UL 3700 certification as of write-time.</strong> Both gates need to clear before a purchase makes sense: the legal effective date, and product certification. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Colorado.',
          'Colorado wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Colorado-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Colorado estimate, and note Colorado\'s 1,920W cap means a full-size system there could exceed what an 800W-kit estimate reflects.',
          '<strong>Once the law takes effect and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> for context now — but neither page claims any kit is certified or ready for Colorado\'s not-yet-active law today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Colorado Balcony Solar',
        faqs: [
          {
            q: 'Can I install balcony solar in Colorado right now?',
            a: 'The law is signed but doesn\'t take effect until January 1, 2027. Installing before then means you\'re not yet covered by HB26-1007\'s protections and exemptions.',
          },
          {
            q: 'Can my HOA in Colorado ban balcony solar once the law takes effect?',
            a: 'No. Colorado\'s law explicitly prohibits HOAs and landlords from banning balcony solar — the strongest such protection among the 8 enacted states in this series.',
          },
          {
            q: 'Why is Colorado\'s wattage cap higher than other states?',
            a: 'At 1,920W, Colorado set the highest cap of any enacted US balcony solar law found in this tracking — well above the 1,200W standard used by most other states.',
          },
          {
            q: 'Will I be able to sell excess power back to the grid in Colorado?',
            a: 'No. Net metering will not apply to balcony solar devices under HB26-1007, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Colorado legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Colorado legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Unterzeichnet, aber noch nicht in Kraft. HB26-1007 tritt am 1. Januar 2027 in Kraft – mit der höchsten Leistungsgrenze der USA (1.920 W) und einem ausdrücklichen Verbot von HOA-Einschränkungen. Kurzantwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hausbesitzer, die prüfen, ob Balkonsolar in Colorado legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Colorado legal?',
        answer: 'Unterzeichnet, aber noch nicht in Kraft. Colorados HB26-1007 wurde am 7. Mai 2026 unterzeichnet und tritt am 1. Januar 2027 in Kraft. Das Gesetz legt die höchste Leistungsgrenze aller Bundesstaaten mit entsprechender Regelung fest (1.920 W) und ist das einzige, das HOAs und Vermietern ausdrücklich untersagt, Balkonsolar zu verbieten.',
        bullets: [
          'HB26-1007 unterzeichnet am 7. Mai 2026 – tritt am 1. Januar 2027 in Kraft, zum jetzigen Zeitpunkt noch nicht gültig',
          '1.920-W-Grenze – die höchste aller bekannten US-Gesetze zu Balkonsolar',
          'Ausdrückliches Verbot von HOA-/Vermieter-Einschränkungen – der stärkste derartige Schutz unter den 8 Bundesstaaten mit entsprechender Regelung',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Colorados HB26-1007 ist unterzeichnet, tritt aber erst am 1. Januar 2027 in Kraft – behandeln Sie es noch nicht als geltendes Recht.',
          'Mit 1.920 W erlaubt Colorado die höchste Leistungsgrenze aller Bundesstaaten mit entsprechender Regelung.',
          'Colorado ist der einzige der 8 Bundesstaaten mit entsprechender Regelung, der HOAs und Vermietern ausdrücklich untersagt, Balkonsolar zu verbieten.',
          'Bislang hat kein vollständiges System die volle UL-3700-Zertifizierung bestätigt – wie in jedem anderen Bundesstaat mit entsprechender Regelung.',
        ],
      },
      body1: {
        title: 'Was schreibt HB26-1007 in Colorado vor?',
        content: [
          '<strong>Colorados HB26-1007 legt eine Leistungsgrenze von 1.920 W fest – die höchste aller bekannten US-Gesetze zu Balkonsolar –, tritt jedoch erst am 1. Januar 2027 in Kraft und ist zum jetzigen Zeitpunkt noch nicht nutzbar.</strong> Sobald es in Kraft tritt, folgt es dem üblichen Ausnahmemodell (keine Netzanschlussvereinbarung oder -gebühr, kein Net Metering) mit einer wichtigen Ergänzung: einer ausdrücklichen Regelung, die HOAs und Vermietern verbietet, Balkonsolar pauschal zu untersagen.',
          'Diese HOA-/Vermieter-Regelung macht Colorados Gesetz zum stärksten Verbraucherschutz unter den 8 Bundesstaaten mit entsprechender Regelung – jeder andere Bundesstaat in dieser Reihe hat entweder keine solche Regelung oder sie wurde nicht unabhängig bestätigt.',
        ],
        columns: ['Feld', 'Colorado HB26-1007'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Colorado HB26-1007': '7. Mai 2026 / 1. Januar 2027 (noch nicht in Kraft)' },
          { Feld: 'Leistungsgrenze', 'Colorado HB26-1007': '1.920 W – die höchste aller bekannten Bundesstaaten' },
          { Feld: 'HOA-/Vermieter-Verbote', 'Colorado HB26-1007': 'Ausdrücklich untersagt' },
          { Feld: 'Net Metering', 'Colorado HB26-1007': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sollte ich jetzt schon Hardware für Colorado kaufen?',
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
          '<strong>Noch nicht – das Gesetz tritt erst am 1. Januar 2027 in Kraft, und unabhängig davon hat zum jetzigen Zeitpunkt noch kein vollständiges steckerfertiges Solarsystem die volle UL-3700-Zertifizierung bestätigt.</strong> Beide Hürden müssen genommen werden, bevor ein Kauf sinnvoll ist: das gesetzliche Inkrafttreten und die Produktzertifizierung. Das EcoFlow STREAM Ultra ist das marktnächste Produkt, wird derzeit aber ausdrücklich in Utah verkauft, nicht in Colorado.',
          'Colorado war nicht in der bundesstaatlichen Einspartabelle der Quelle enthalten, die dieser Artikelreihe zugrunde liegt, daher liegt hier kein colorado-spezifischer Betrag vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 USD pro Jahr – das ist als nationaler Bereich zu verstehen, nicht als Colorado-Schätzung. Zu beachten: Colorados 1.920-W-Grenze bedeutet, dass ein Vollsystem dort über das hinausgehen könnte, was eine 800-W-Kit-Schätzung widerspiegelt.',
          '<strong>Sobald das Gesetz in Kraft tritt und zertifizierte Hardware existiert, werden Sie echte Optionen zum Vergleich brauchen.</strong> Sehen Sie sich schon jetzt zur Orientierung die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> an – aber keine der beiden Seiten behauptet, dass ein Kit bereits zertifiziert oder für Colorados noch nicht in Kraft getretenes Gesetz einsatzbereit ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurzantworten zu Balkonsolar in Colorado',
        faqs: [
          {
            q: 'Kann ich jetzt sofort Balkonsolar in Colorado installieren?',
            a: 'Das Gesetz ist unterzeichnet, tritt aber erst am 1. Januar 2027 in Kraft. Eine Installation davor bedeutet, dass die Schutz- und Ausnahmeregelungen von HB26-1007 noch nicht gelten.',
          },
          {
            q: 'Kann meine HOA in Colorado Balkonsolar verbieten, sobald das Gesetz in Kraft tritt?',
            a: 'Nein. Colorados Gesetz untersagt HOAs und Vermietern ausdrücklich, Balkonsolar zu verbieten – der stärkste derartige Schutz unter den 8 Bundesstaaten mit entsprechender Regelung in dieser Reihe.',
          },
          {
            q: 'Warum ist Colorados Leistungsgrenze höher als in anderen Bundesstaaten?',
            a: 'Mit 1.920 W hat Colorado die höchste Grenze aller in dieser Erfassung bekannten US-Gesetze zu Balkonsolar festgelegt – deutlich über dem in den meisten anderen Bundesstaaten üblichen Standard von 1.200 W.',
          },
          {
            q: 'Kann ich in Colorado überschüssigen Strom ins Netz einspeisen und vergütet bekommen?',
            a: 'Nein. Net Metering gilt unter HB26-1007 nicht für Balkonsolar-Geräte, ebenso wie in jedem anderen Bundesstaat mit entsprechender Regelung.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-fr.webp',
    title: "L'énergie solaire de balcon est-elle légale au Colorado ?",
    dateModified: '2026-07-16',
    seoTitle: 'Solaire de balcon légal au Colorado ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signée, pas encore en vigueur. La HB26-1007 entre en vigueur le 1er janvier 2027, avec le plafond de puissance le plus élevé des États-Unis (1 920 W) et une interdiction explicite des refus par les copropriétés. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal au Colorado",
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: "L'énergie solaire de balcon est-elle légale au Colorado ?",
        answer: "Signée, mais pas encore en vigueur. La loi HB26-1007 du Colorado a été signée le 7 mai 2026 et entre en vigueur le 1er janvier 2027. Elle fixe le plafond de puissance le plus élevé de tous les États ayant légiféré (1 920 W) et est la seule à interdire explicitement aux copropriétés et propriétaires bailleurs de refuser le solaire de balcon.",
        bullets: [
          "HB26-1007 signée le 7 mai 2026 — entre en vigueur le 1er janvier 2027, pas encore applicable à ce jour",
          "Plafond de 1 920 W — le plus élevé parmi les lois d'État recensées",
          "Interdiction explicite pour les copropriétés/propriétaires — la protection la plus forte parmi les 8 États ayant légiféré",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "La loi HB26-1007 du Colorado est signée mais n'entre en vigueur que le 1er janvier 2027 — ne la considérez pas encore comme applicable.",
          'Avec 1 920 W, le Colorado autorise le plafond de puissance le plus élevé parmi les États ayant légiféré.',
          "Le Colorado est le seul des 8 États ayant légiféré à interdire explicitement aux copropriétés et propriétaires bailleurs de refuser le solaire de balcon.",
          "Aucun système complet n'a encore confirmé la certification UL 3700 intégrale, comme dans chaque autre État concerné.",
        ],
      },
      body1: {
        title: 'Que prévoit la loi HB26-1007 au Colorado ?',
        content: [
          "<strong>La loi HB26-1007 du Colorado fixe un plafond de 1 920 W — le plus élevé parmi les lois d'État américaines recensées — mais elle n'entre en vigueur que le 1er janvier 2027 et n'est donc pas encore applicable à ce jour.</strong> Une fois en vigueur, elle suivra le modèle d'exemption standard (pas d'accord d'interconnexion ni de frais avec le fournisseur, net metering exclu), avec un ajout majeur : l'interdiction explicite pour les copropriétés et propriétaires bailleurs de refuser purement et simplement le solaire de balcon.",
          "Cette disposition fait de la loi du Colorado la protection consommateur la plus forte parmi les 8 États ayant légiféré — aucun autre État de cette série ne dispose d'une telle disposition confirmée de façon indépendante.",
        ],
        columns: ['Champ', 'Colorado HB26-1007'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Colorado HB26-1007': '7 mai 2026 / 1er janvier 2027 (pas encore en vigueur)' },
          { Champ: 'Plafond de puissance', 'Colorado HB26-1007': '1 920 W — le plus élevé recensé' },
          { Champ: 'Interdictions par copropriétés/propriétaires', 'Colorado HB26-1007': 'Explicitement interdites' },
          { Champ: 'Net metering', 'Colorado HB26-1007': 'Non disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Faut-il acheter du matériel dès maintenant pour le Colorado ?',
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
          "<strong>Pas encore — la loi n'entre en vigueur que le 1er janvier 2027, et par ailleurs, aucun système solaire plug-in complet n'a confirmé la certification UL 3700 intégrale à ce jour.</strong> Deux conditions doivent être remplies avant qu'un achat soit pertinent : la date d'entrée en vigueur légale et la certification du produit. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement dans l'Utah, pas au Colorado.",
          "Le Colorado ne figurait pas dans le tableau d'économies par État de la source utilisée pour cette série, aucun chiffre spécifique au Colorado n'est donc disponible ici. Dans les États recensés, un kit de 800 W permet d'économiser environ 150 à 350 $ par an selon le tarif local de l'électricité — à considérer comme une fourchette nationale, pas une estimation pour le Colorado. Notez que le plafond de 1 920 W du Colorado signifie qu'un système pleine taille pourrait y dépasser ce que reflète une estimation basée sur un kit de 800 W.",
          "<strong>Une fois la loi en vigueur et du matériel certifié disponible, vous voudrez de véritables options à comparer.</strong> Consultez dès maintenant, à titre indicatif, le <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>comparatif des meilleures batteries domestiques américaines pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow vs. Anker vs. Zendure</a> — mais aucune de ces pages n'affirme qu'un kit est certifié ou prêt pour la loi du Colorado, qui n'est pas encore en vigueur.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon au Colorado',
        faqs: [
          {
            q: 'Puis-je installer du solaire de balcon au Colorado dès maintenant ?',
            a: "La loi est signée mais n'entre en vigueur que le 1er janvier 2027. Installer avant cette date signifie ne pas encore être couvert par les protections et exemptions de la HB26-1007.",
          },
          {
            q: 'Ma copropriété au Colorado pourra-t-elle interdire le solaire de balcon une fois la loi en vigueur ?',
            a: "Non. La loi du Colorado interdit explicitement aux copropriétés et propriétaires bailleurs de refuser le solaire de balcon — la protection la plus forte parmi les 8 États ayant légiféré dans cette série.",
          },
          {
            q: 'Pourquoi le plafond de puissance du Colorado est-il plus élevé que dans les autres États ?',
            a: "Avec 1 920 W, le Colorado a fixé le plafond le plus élevé parmi les lois d'État américaines recensées dans ce suivi — bien au-dessus du standard de 1 200 W utilisé par la plupart des autres États.",
          },
          {
            q: "Pourrai-je revendre mon surplus d'électricité au réseau au Colorado ?",
            a: "Non. Le net metering ne s'appliquera pas aux dispositifs solaires de balcon sous la HB26-1007, comme dans chaque autre État ayant légiféré.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-ja.webp',
    title: 'コロラド州でベランダ太陽光発電は合法ですか?',
    dateModified: '2026-07-16',
    seoTitle: 'コロラド州でベランダ太陽光は合法? | Prompt Bites | PromptQuorum',
    metaDescription: '署名済みですが、まだ発効していません。HB26-1007は2027年1月1日に発効し、米国最高の出力上限（1,920W）とHOA禁止を明示的に禁じる条項を含みます。PromptQuorumのクイックアンサー。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'コロラド州でベランダ太陽光発電が合法かどうかを確認する米国の賃借人・住宅所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'コロラド州でベランダ太陽光発電は合法ですか?',
        answer: '署名済みですが、まだ発効していません。コロラド州のHB26-1007は2026年5月7日に署名され、2027年1月1日に発効します。制定済みの州の中で最も高い出力上限（1,920W）を設定しており、HOA（住宅所有者組合）や家主によるベランダ太陽光の禁止を明示的に禁止する唯一の州です。',
        bullets: [
          'HB26-1007は2026年5月7日に署名 — 2027年1月1日に発効、執筆時点ではまだ発効していません',
          '1,920Wの上限 — 確認されている米国州法の中で最も高い数値',
          'HOA・家主による禁止の明示的禁止 — 制定済み8州の中で最も強力な保護',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'コロラド州のHB26-1007は署名済みですが、2027年1月1日まで発効しません。まだ使える法律として扱わないでください。',
          '1,920Wという上限は、制定済みの米国州の中で最も高い出力上限です。',
          'コロラド州は、制定済み8州の中で唯一、HOAや家主によるベランダ太陽光の禁止を明示的に禁じています。',
          '他の制定済み州と同様、UL 3700の完全認証を確認済みの完成システムはまだありません。',
        ],
      },
      body1: {
        title: 'HB26-1007はコロラド州で何を定めますか?',
        content: [
          '<strong>コロラド州のHB26-1007は1,920Wの上限を設定しており、制定済みの米国ベランダ太陽光法の中で最も高い数値ですが、2027年1月1日まで発効しないため、執筆時点ではまだ使用できません。</strong> 発効後は、標準的な適用除外テンプレート（電力会社との連系契約や手数料は不要、ネットメータリングは対象外）に従いますが、大きな追加点が1つあります。HOAや家主がベランダ太陽光を全面的に禁止することを明示的に禁じる条項です。',
          'このHOA・家主条項により、コロラド州の法律は制定済み8州の中で最も強力な消費者保護となります。このシリーズの他の州には同様の条項がないか、含まれていることが独自に確認されていません。',
        ],
        columns: ['項目', 'Colorado HB26-1007'],
        rows: [
          { 項目: '署名日・発効日', 'Colorado HB26-1007': '2026年5月7日 / 2027年1月1日（未発効）' },
          { 項目: '出力上限', 'Colorado HB26-1007': '1,920W — 確認済みの州の中で最高' },
          { 項目: 'HOA・家主による禁止', 'Colorado HB26-1007': '明示的に禁止' },
          { 項目: 'ネットメータリング', 'Colorado HB26-1007': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'コロラド州向けに今すぐ機材を購入すべきですか?',
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
          '<strong>まだです。法律は2027年1月1日まで発効せず、それとは別に、執筆時点で完全なUL 3700認証を確認済みのプラグイン式太陽光システムも存在しません。</strong> 購入が妥当になるには、法律の発効日と製品認証という2つの条件がどちらもクリアされる必要があります。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在は特にUtah州向けに販売されており、コロラド州向けではありません。',
          'コロラド州は、このシリーズで使用した情報源の州別節約額データに含まれていなかったため、コロラド州固有の金額はここでは提供できません。データが記録された州全体では、800Wキットで地域の電気料金に応じて年間約150〜350ドルの節約が見られます。これは全国的な範囲として捉えてください。コロラド州の推定値ではありません。また、コロラド州の1,920Wという上限を考えると、同州でのフルサイズシステムは800Wキットの試算を上回る可能性がある点にご注意ください。',
          '<strong>法律が発効し、認証済みの機材が登場したら、比較できる実際の選択肢が必要になります。</strong> 参考として、<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">米国のベランダ太陽光向け家庭用バッテリーの現在のおすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください。ただし、どちらのページも、コロラド州でまだ発効していない法律に対応した認証済み・使用可能なキットがあるとは主張していません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'コロラド州のベランダ太陽光に関するクイックアンサー',
        faqs: [
          {
            q: '今すぐコロラド州でベランダ太陽光を設置できますか?',
            a: '法律は署名済みですが、2027年1月1日まで発効しません。それ以前に設置すると、HB26-1007の保護や適用除外の対象にまだなりません。',
          },
          {
            q: '法律が発効した後、コロラド州のHOAはベランダ太陽光を禁止できますか?',
            a: 'いいえ。コロラド州の法律はHOAや家主がベランダ太陽光を禁止することを明示的に禁じています。これはこのシリーズの制定済み8州の中で最も強力な保護です。',
          },
          {
            q: 'コロラド州の出力上限が他州より高いのはなぜですか?',
            a: '1,920Wという上限は、この調査で確認された米国のベランダ太陽光法の中で最も高く、他の多くの州で採用されている1,200Wという標準を大きく上回っています。',
          },
          {
            q: 'コロラド州で余剰電力を電力網に売電できますか?',
            a: 'いいえ。HB26-1007のもとでは、他の制定済み州と同様、ベランダ太陽光機器にネットメータリングは適用されません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-zh.webp',
    title: '科罗拉多州的阳台太阳能合法吗?',
    dateModified: '2026-07-16',
    seoTitle: '科罗拉多州阳台太阳能合法吗? | Prompt Bites | PromptQuorum',
    metaDescription: '已签署，但尚未生效。HB26-1007将于2027年1月1日生效，功率上限为全美最高（1,920W），并明确禁止HOA和房东禁止阳台太阳能。PromptQuorum快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实科罗拉多州阳台太阳能是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '科罗拉多州的阳台太阳能合法吗?',
        answer: '已签署，但尚未生效。科罗拉多州HB26-1007法案于2026年5月7日签署，将于2027年1月1日生效。该法案设定了已立法州中最高的功率上限（1,920W），也是唯一明确禁止HOA和房东禁止阳台太阳能的州。',
        bullets: [
          'HB26-1007于2026年5月7日签署——2027年1月1日生效，截至撰写时尚未生效',
          '1,920W上限——已发现的美国各州阳台太阳能法中最高',
          '明确禁止HOA/房东限制——8个已立法州中保护力度最强',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '科罗拉多州HB26-1007已签署，但要到2027年1月1日才生效——目前不要将其视为可用的法律。',
          '1,920W的上限是已立法美国各州中最高的。',
          '科罗拉多州是8个已立法州中唯一明确禁止HOA和房东禁止阳台太阳能的州。',
          '与其他已立法州一样，目前尚无完整系统确认获得完整的UL 3700认证。',
        ],
      },
      body1: {
        title: 'HB26-1007在科罗拉多州具体规定了什么?',
        content: [
          '<strong>科罗拉多州HB26-1007设定了1,920W的功率上限——已立法的美国阳台太阳能法中最高——但该法案要到2027年1月1日才生效，截至撰写时尚不可用。</strong> 一旦生效，它将遵循标准豁免模板（无需与电力公司签订并网协议或支付费用，不适用净计量），并新增一项重要内容：明确禁止HOA和房东全面禁止阳台太阳能。',
          '这项HOA/房东条款使科罗拉多州的法律成为8个已立法州中消费者保护力度最强的——该系列中其他每个州要么没有此类条款，要么尚未独立确认包含此类条款。',
        ],
        columns: ['项目', 'Colorado HB26-1007'],
        rows: [
          { 项目: '签署/生效日期', 'Colorado HB26-1007': '2026年5月7日 / 2027年1月1日（尚未生效）' },
          { 项目: '功率上限', 'Colorado HB26-1007': '1,920W——已发现各州中最高' },
          { 项目: 'HOA/房东禁令', 'Colorado HB26-1007': '明确禁止' },
          { 项目: '净计量', 'Colorado HB26-1007': '不可用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '现在应该为科罗拉多州购买设备吗?',
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
          '<strong>还不行——该法律要到2027年1月1日才生效，另外，截至撰写时也没有任何完整的插电式太阳能系统确认获得完整的UL 3700认证。</strong> 购买之前需要跨越两道门槛：法律生效日期和产品认证。EcoFlow STREAM Ultra是最接近上市的产品，但目前专门在Utah州销售，而非科罗拉多州。',
          '科罗拉多州未被纳入本系列所用信息源的各州节省数据表，因此这里无法提供科罗拉多州的具体金额。在已跟踪的各州中，一个800W套件根据当地电价每年大约可节省150–350美元——请将其视为全国范围的估算，而非科罗拉多州的估算，并注意科罗拉多州1,920W的上限意味着当地的全尺寸系统可能超出800W套件估算所反映的范围。',
          '<strong>一旦法律生效并出现获得认证的硬件，您将需要真正可比较的选项。</strong> 现在可以先参考<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>以作了解——但这两篇文章均未声称任何套件已获得认证，或已可用于科罗拉多州目前尚未生效的法律。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于科罗拉多州阳台太阳能的快速解答',
        faqs: [
          {
            q: '我现在可以在科罗拉多州安装阳台太阳能吗?',
            a: '该法律已签署，但要到2027年1月1日才生效。在此之前安装意味着尚未受到HB26-1007保护和豁免条款的覆盖。',
          },
          {
            q: '法律生效后，我在科罗拉多州的HOA可以禁止阳台太阳能吗?',
            a: '不可以。科罗拉多州的法律明确禁止HOA和房东禁止阳台太阳能——这是该系列8个已立法州中保护力度最强的一项。',
          },
          {
            q: '为什么科罗拉多州的功率上限比其他州高?',
            a: '1,920W是本次跟踪中已发现的美国阳台太阳能法中最高的上限——远高于大多数其他州采用的1,200W标准。',
          },
          {
            q: '我在科罗拉多州能把多余的电卖回电网吗?',
            a: '不可以。根据HB26-1007，净计量不适用于阳台太阳能设备，这与其他所有已立法州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Colorado?',
    dateModified: '2026-07-16',
    seoTitle: '¿Solar de balcón legal en Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'Firmada, pero aún no vigente. La HB26-1007 entra en vigor el 1 de enero de 2027, con el límite de potencia más alto de EE. UU. (1,920 W) y una prohibición explícita para las HOA. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que verifican si la energía solar de balcón es legal en Colorado',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Colorado?',
        answer: 'Firmada, pero aún no vigente. La HB26-1007 de Colorado se firmó el 7 de mayo de 2026 y entra en vigor el 1 de enero de 2027. Establece el límite de potencia más alto de cualquier estado con ley aprobada (1,920 W) y es el único que prohíbe explícitamente que las HOA y los arrendadores prohíban la energía solar de balcón.',
        bullets: [
          'HB26-1007 firmada el 7 de mayo de 2026 — entra en vigor el 1 de enero de 2027, aún no vigente al momento de escribir esto',
          'Límite de 1,920 W — el más alto de cualquier ley estatal de solar de balcón encontrada en EE. UU.',
          'Prohibición explícita de bloqueo por HOA/arrendador — la protección más fuerte entre los 8 estados con ley aprobada',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La HB26-1007 de Colorado está firmada, pero no entra en vigor hasta el 1 de enero de 2027 — no la trates todavía como ley utilizable.',
          'Con 1,920 W, Colorado permite el límite de potencia más alto de cualquier estado con ley aprobada.',
          'Colorado es el único de los 8 estados con ley aprobada que prohíbe explícitamente que las HOA y los arrendadores prohíban la energía solar de balcón.',
          'Ningún sistema completo ha confirmado aún la certificación UL 3700 completa, igual que en cualquier otro estado con ley aprobada.',
        ],
      },
      body1: {
        title: '¿Qué exigirá la HB26-1007 en Colorado?',
        content: [
          '<strong>La HB26-1007 de Colorado establece un límite de 1,920 W — el más alto de cualquier ley de solar de balcón aprobada en EE. UU. — pero la ley no entra en vigor hasta el 1 de enero de 2027, así que todavía no es utilizable al momento de escribir esto.</strong> Una vez vigente, seguirá la plantilla de exención estándar (sin acuerdo de interconexión con la eléctrica ni tarifas, sin net metering) con una adición importante: un lenguaje explícito que prohíbe a las HOA y arrendadores prohibir por completo la energía solar de balcón.',
          'Esa disposición sobre HOA/arrendadores convierte a la ley de Colorado en la protección al consumidor más fuerte entre los 8 estados con ley aprobada — todos los demás estados de esta serie carecen de esa disposición o no se ha confirmado de forma independiente que la incluyan.',
        ],
        columns: ['Campo', 'Colorado HB26-1007'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Colorado HB26-1007': '7 de mayo de 2026 / 1 de enero de 2027 (aún no vigente)' },
          { Campo: 'Límite de potencia', 'Colorado HB26-1007': '1,920 W — el más alto de cualquier estado encontrado' },
          { Campo: 'Prohibiciones de HOA/arrendador', 'Colorado HB26-1007': 'Explícitamente prohibidas' },
          { Campo: 'Net metering', 'Colorado HB26-1007': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Debería comprar equipo ahora para Colorado?',
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
          '<strong>Todavía no — la ley no entra en vigor hasta el 1 de enero de 2027 y, por separado, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 completa al momento de escribir esto.</strong> Ambos requisitos deben cumplirse antes de que una compra tenga sentido: la fecha de entrada en vigor legal y la certificación del producto. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente en Utah, no en Colorado.',
          'Colorado no estaba en la tabla de ahorros por estado de la fuente usada para esta serie, así que aquí no hay una cifra específica para Colorado. En los estados que sí se rastrearon, un kit de 800 W ahorra aproximadamente entre $150 y $350 por año según las tarifas eléctricas locales — trátalo como un rango nacional, no una estimación para Colorado, y ten en cuenta que el límite de 1,920 W de Colorado significa que un sistema de tamaño completo ahí podría superar lo que refleja una estimación basada en un kit de 800 W.',
          '<strong>Una vez que la ley entre en vigor y exista hardware certificado, querrás opciones reales para comparar.</strong> Consulta ahora, a modo de referencia, las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas en EE. UU. para solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — pero ninguna de las dos páginas afirma que algún kit esté certificado o listo para la ley de Colorado, que aún no está vigente.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre solar de balcón en Colorado',
        faqs: [
          {
            q: '¿Puedo instalar solar de balcón en Colorado ahora mismo?',
            a: 'La ley está firmada, pero no entra en vigor hasta el 1 de enero de 2027. Instalarlo antes significa que todavía no estás cubierto por las protecciones y exenciones de la HB26-1007.',
          },
          {
            q: '¿Mi HOA en Colorado podrá prohibir el solar de balcón cuando la ley entre en vigor?',
            a: 'No. La ley de Colorado prohíbe explícitamente que las HOA y los arrendadores prohíban la energía solar de balcón — la protección más fuerte entre los 8 estados con ley aprobada en esta serie.',
          },
          {
            q: '¿Por qué el límite de potencia de Colorado es más alto que el de otros estados?',
            a: 'Con 1,920 W, Colorado estableció el límite más alto de cualquier ley de solar de balcón aprobada en EE. UU. encontrada en este seguimiento — muy por encima del estándar de 1,200 W que usan la mayoría de los demás estados.',
          },
          {
            q: '¿Podré vender el exceso de energía a la red en Colorado?',
            a: 'No. El net metering no aplicará a los dispositivos solares de balcón bajo la HB26-1007, igual que en cualquier otro estado con ley aprobada.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal no Colorado?',
    dateModified: '2026-07-16',
    seoTitle: 'Solar de varanda é legal no Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sancionada, mas ainda não em vigor. A HB26-1007 entra em vigor em 1º de janeiro de 2027, com o limite de potência mais alto dos EUA (1.920 W) e proibição explícita contra HOAs. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA verificando se a energia solar de varanda é legal no Colorado',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal no Colorado?',
        answer: 'Sancionada, mas ainda não em vigor. A HB26-1007 do Colorado foi sancionada em 7 de maio de 2026 e entra em vigor em 1º de janeiro de 2027. Ela estabelece o maior limite de potência entre os estados com lei aprovada (1.920 W) e é o único que proíbe explicitamente HOAs e locadores de banir a energia solar de varanda.',
        bullets: [
          'HB26-1007 sancionada em 7 de maio de 2026 — entra em vigor em 1º de janeiro de 2027, ainda não vigente no momento desta publicação',
          'Limite de 1.920 W — o mais alto entre as leis estaduais de solar de varanda encontradas nos EUA',
          'Proibição explícita de bloqueio por HOA/locador — a proteção mais forte entre os 8 estados com lei aprovada',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A HB26-1007 do Colorado está sancionada, mas só entra em vigor em 1º de janeiro de 2027 — não trate como lei já aplicável.',
          'Com 1.920 W, o Colorado permite o maior limite de potência entre os estados com lei aprovada.',
          'O Colorado é o único dos 8 estados com lei aprovada que proíbe explicitamente HOAs e locadores de banir a energia solar de varanda.',
          'Nenhum sistema completo confirmou certificação UL 3700 total até agora, assim como em todos os outros estados com lei aprovada.',
        ],
      },
      body1: {
        title: 'O que a HB26-1007 vai exigir no Colorado?',
        content: [
          '<strong>A HB26-1007 do Colorado estabelece um limite de 1.920 W — o mais alto entre as leis de solar de varanda aprovadas nos EUA —, mas a lei só entra em vigor em 1º de janeiro de 2027, portanto ainda não é utilizável no momento desta publicação.</strong> Quando entrar em vigor, seguirá o modelo padrão de isenção (sem acordo de interconexão ou taxa com a concessionária, net metering excluído) com uma adição importante: linguagem explícita proibindo HOAs e locadores de banir totalmente a energia solar de varanda.',
          'Essa disposição sobre HOA/locador torna a lei do Colorado a proteção ao consumidor mais forte entre os 8 estados com lei aprovada — todos os outros estados desta série não têm essa disposição ou ela ainda não foi confirmada de forma independente.',
        ],
        columns: ['Campo', 'Colorado HB26-1007'],
        rows: [
          { Campo: 'Sancionada / Em vigor', 'Colorado HB26-1007': '7 de maio de 2026 / 1º de janeiro de 2027 (ainda não em vigor)' },
          { Campo: 'Limite de potência', 'Colorado HB26-1007': '1.920 W — o mais alto entre os estados encontrados' },
          { Campo: 'Proibições de HOA/locador', 'Colorado HB26-1007': 'Explicitamente proibidas' },
          { Campo: 'Net metering', 'Colorado HB26-1007': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Devo comprar equipamento agora para o Colorado?',
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
          '<strong>Ainda não — a lei só entra em vigor em 1º de janeiro de 2027 e, separadamente, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total até o momento desta publicação.</strong> As duas barreiras precisam ser superadas antes que a compra faça sentido: a data de vigência legal e a certificação do produto. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente é vendido especificamente em Utah, não no Colorado.',
          'O Colorado não estava na tabela de economia por estado da fonte usada nesta série, então não há um valor específico para o Colorado aqui. Nos estados rastreados, um kit de 800 W economiza cerca de US$ 150 a US$ 350 por ano dependendo das tarifas locais de energia — trate isso como uma faixa nacional, não uma estimativa para o Colorado, e observe que o limite de 1.920 W do Colorado significa que um sistema de tamanho completo ali pode ultrapassar o que uma estimativa de kit de 800 W reflete.',
          '<strong>Assim que a lei entrar em vigor e existir hardware certificado, você vai querer opções reais para comparar.</strong> Consulte agora, como referência, as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">indicações atuais de baterias residenciais dos EUA para solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — mas nenhuma das duas páginas afirma que algum kit esteja certificado ou pronto para a lei do Colorado, que ainda não está em vigor.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre solar de varanda no Colorado',
        faqs: [
          {
            q: 'Posso instalar energia solar de varanda no Colorado agora mesmo?',
            a: 'A lei está sancionada, mas só entra em vigor em 1º de janeiro de 2027. Instalar antes disso significa que você ainda não está coberto pelas proteções e isenções da HB26-1007.',
          },
          {
            q: 'Minha HOA no Colorado poderá proibir a energia solar de varanda depois que a lei entrar em vigor?',
            a: 'Não. A lei do Colorado proíbe explicitamente HOAs e locadores de banir a energia solar de varanda — a proteção mais forte entre os 8 estados com lei aprovada nesta série.',
          },
          {
            q: 'Por que o limite de potência do Colorado é maior que o de outros estados?',
            a: 'Com 1.920 W, o Colorado definiu o maior limite entre as leis de solar de varanda aprovadas nos EUA encontradas neste acompanhamento — bem acima do padrão de 1.200 W usado pela maioria dos outros estados.',
          },
          {
            q: 'Vou poder vender o excedente de energia para a rede no Colorado?',
            a: 'Não. O net metering não vai se aplicar a dispositivos solares de varanda sob a HB26-1007, assim como em todos os outros estados com lei aprovada.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في كولورادو؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في كولورادو؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. يدخل قانون HB26-1007 حيز التنفيذ في 1 يناير 2027 بأعلى حد للطاقة في الولايات المتحدة (1,920W) ومنع صريح لحظر جمعيات الملاك. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في كولورادو',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في كولورادو؟',
        answer: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. تم توقيع قانون HB26-1007 في كولورادو في 7 مايو 2026، ويدخل حيز التنفيذ في 1 يناير 2027. يحدد القانون أعلى حد للطاقة بين جميع الولايات التي أصدرت تشريعات (1,920W)، وهو الوحيد الذي يمنع صراحةً جمعيات الملاك (HOA) والمُلّاك من حظر الطاقة الشمسية للشرفات.',
        bullets: [
          'تم توقيع HB26-1007 في 7 مايو 2026 — ويدخل حيز التنفيذ في 1 يناير 2027، ولم يكن ساري المفعول بعد حتى وقت كتابة هذا المقال',
          'حد 1,920W — الأعلى بين قوانين الطاقة الشمسية للشرفات في أي ولاية أمريكية تم رصدها',
          'منع صريح لحظر جمعيات الملاك/المُلّاك — أقوى حماية من نوعها بين الولايات الثماني التي أصدرت تشريعات',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون HB26-1007 في كولورادو موقّع، لكنه لا يدخل حيز التنفيذ إلا في 1 يناير 2027 — لا تتعاملوا معه بعد كقانون قابل للتطبيق.',
          'بحد 1,920W، تسمح كولورادو بأعلى حد للطاقة بين جميع الولايات التي أصدرت تشريعات.',
          'كولورادو هي الولاية الوحيدة من بين الولايات الثماني التي أصدرت تشريعات وتمنع صراحةً جمعيات الملاك والمُلّاك من حظر الطاقة الشمسية للشرفات.',
          'لم يؤكد أي نظام متكامل بعد حصوله على شهادة UL 3700 الكاملة، تمامًا كما هو الحال في كل ولاية أخرى أصدرت تشريعات.',
        ],
      },
      body1: {
        title: 'ماذا سيتطلب قانون HB26-1007 في كولورادو؟',
        content: [
          '<strong>يحدد قانون HB26-1007 في كولورادو حدًا للطاقة قدره 1,920W — الأعلى بين قوانين الطاقة الشمسية للشرفات الأمريكية التي أصدرت تشريعات — لكن القانون لا يدخل حيز التنفيذ حتى 1 يناير 2027، لذا فهو غير قابل للاستخدام بعد حتى وقت كتابة هذا المقال.</strong> بمجرد دخوله حيز التنفيذ، سيتبع النموذج المعتاد للإعفاء (دون الحاجة إلى اتفاقية ربط بالشبكة أو رسوم مع شركة الكهرباء، مع استبعاد قياس الصافي net metering)، مع إضافة رئيسية واحدة: نص صريح يمنع جمعيات الملاك والمُلّاك من حظر الطاقة الشمسية للشرفات كليًا.',
          'يجعل هذا النص الخاص بجمعيات الملاك/المُلّاك قانون كولورادو أقوى حماية للمستهلك بين الولايات الثماني التي أصدرت تشريعات — فكل ولاية أخرى في هذه السلسلة إما لا تحتوي على نص مماثل أو لم يتم التأكد بشكل مستقل من احتوائها عليه.',
        ],
        columns: ['الحقل', 'Colorado HB26-1007'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'Colorado HB26-1007': '7 مايو 2026 / 1 يناير 2027 (لم يدخل حيز التنفيذ بعد)' },
          { الحقل: 'حد الطاقة', 'Colorado HB26-1007': '1,920W — الأعلى بين الولايات التي تم رصدها' },
          { الحقل: 'حظر جمعيات الملاك/المُلّاك', 'Colorado HB26-1007': 'ممنوع صراحةً' },
          { الحقل: 'قياس الصافي (Net metering)', 'Colorado HB26-1007': 'غير متاح' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل يجب أن أشتري المعدات الآن من أجل كولورادو؟',
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
          '<strong>ليس بعد — لا يدخل القانون حيز التنفيذ حتى 1 يناير 2027، وبشكل منفصل، لم يؤكد أي نظام طاقة شمسية قابل للتوصيل المباشر حصوله على شهادة UL 3700 الكاملة حتى وقت كتابة هذا المقال.</strong> يجب اجتياز عائقين قبل أن يصبح الشراء منطقيًا: تاريخ سريان القانون، وشهادة المنتج. منتج EcoFlow STREAM Ultra هو الأقرب إلى السوق، لكنه يُباع حاليًا تحديدًا في ولاية يوتا، وليس في كولورادو.',
          'لم تكن كولورادو ضمن جدول التوفير حسب الولاية في المصدر المستخدم لهذه السلسلة، لذا لا يتوفر هنا رقم خاص بكولورادو. عبر الولايات التي تم رصدها، توفر حزمة 800W ما يقارب 150 إلى 350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — يجب اعتبار هذا نطاقًا وطنيًا وليس تقديرًا خاصًا بكولورادو، مع ملاحظة أن حد كولورادو البالغ 1,920W يعني أن نظامًا كامل الحجم هناك قد يتجاوز ما يعكسه تقدير حزمة 800W.',
          '<strong>بمجرد دخول القانون حيز التنفيذ وتوفر معدات معتمدة، ستحتاجون إلى خيارات حقيقية للمقارنة.</strong> يمكنكم الاطلاع الآن، للاستئناس فقط، على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومات EcoFlow مقابل Anker مقابل Zendure</a> — لكن أيًا من الصفحتين لا يدّعي أن أي عدة معتمدة أو جاهزة لقانون كولورادو الذي لم يدخل حيز التنفيذ بعد.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في كولورادو',
        faqs: [
          {
            q: 'هل يمكنني تركيب طاقة شمسية للشرفة في كولورادو الآن؟',
            a: 'القانون موقّع لكنه لا يدخل حيز التنفيذ حتى 1 يناير 2027. التركيب قبل ذلك يعني أنك لست مشمولًا بعد بحماية وإعفاءات قانون HB26-1007.',
          },
          {
            q: 'هل يمكن لجمعية الملاك (HOA) الخاصة بي في كولورادو حظر الطاقة الشمسية للشرفات بعد دخول القانون حيز التنفيذ؟',
            a: 'لا. يمنع قانون كولورادو صراحةً جمعيات الملاك والمُلّاك من حظر الطاقة الشمسية للشرفات — وهي أقوى حماية من نوعها بين الولايات الثماني التي أصدرت تشريعات في هذه السلسلة.',
          },
          {
            q: 'لماذا يعد حد الطاقة في كولورادو أعلى من الولايات الأخرى؟',
            a: 'بحد 1,920W، حددت كولورادو أعلى سقف بين قوانين الطاقة الشمسية للشرفات الأمريكية التي أصدرت تشريعات والتي تم رصدها في هذا التتبع — وهو أعلى بكثير من المعيار الشائع البالغ 1,200W المستخدم في معظم الولايات الأخرى.',
          },
          {
            q: 'هل سأتمكن من بيع الطاقة الفائضة إلى الشبكة في كولورادو؟',
            a: 'لا. لن ينطبق قياس الصافي (net metering) على أجهزة الطاقة الشمسية للشرفات بموجب قانون HB26-1007، بما يتوافق مع كل ولاية أخرى أصدرت تشريعات.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-colorado-overview-hero-ko.webp',
    title: '콜로라도주에서 발코니 태양광 발전은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '콜로라도주 발코니 태양광, 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '서명되었지만 아직 발효되지 않았습니다. HB26-1007은 2027년 1월 1일 발효되며, 미국 최고 출력 상한(1,920W)과 HOA 금지에 대한 명시적 금지 조항을 포함합니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '콜로라도주에서 발코니 태양광 발전이 합법인지 확인하는 미국 임차인 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '콜로라도주에서 발코니 태양광 발전은 합법입니까?',
        answer: '서명되었지만 아직 발효되지 않았습니다. 콜로라도주 HB26-1007은 2026년 5월 7일 서명되었으며, 2027년 1월 1일 발효됩니다. 이 법은 법제화된 주 중 가장 높은 출력 상한(1,920W)을 설정했으며, HOA와 임대인이 발코니 태양광을 금지하는 것을 명시적으로 막는 유일한 주입니다.',
        bullets: [
          'HB26-1007은 2026년 5월 7일 서명 — 2027년 1월 1일 발효되며, 작성 시점 기준 아직 발효되지 않았습니다',
          '1,920W 상한 — 확인된 미국 주법 중 가장 높은 수준입니다',
          'HOA/임대인 금지에 대한 명시적 금지 — 법제화된 8개 주 중 가장 강력한 보호 조항입니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '콜로라도주 HB26-1007은 서명되었지만 2027년 1월 1일까지 발효되지 않습니다 — 아직 사용 가능한 법으로 취급해서는 안 됩니다.',
          '1,920W로, 콜로라도주는 법제화된 미국 주 중 가장 높은 출력 상한을 허용합니다.',
          '콜로라도주는 법제화된 8개 주 중 유일하게 HOA와 임대인이 발코니 태양광을 금지하는 것을 명시적으로 막습니다.',
          '다른 모든 법제화된 주와 마찬가지로, 완전한 UL 3700 인증을 확인한 완제품 시스템은 아직 없습니다.',
        ],
      },
      body1: {
        title: 'HB26-1007은 콜로라도주에서 무엇을 요구합니까?',
        content: [
          '<strong>콜로라도주 HB26-1007은 1,920W 상한을 설정했으며, 이는 법제화된 미국 발코니 태양광법 중 가장 높은 수준이지만, 이 법은 2027년 1월 1일까지 발효되지 않으므로 작성 시점 기준 아직 사용할 수 없습니다.</strong> 발효되면 표준 면제 템플릿(전력회사와의 계통연계 계약이나 수수료 불필요, 넷미터링 제외)을 따르되, 한 가지 중요한 조항이 추가됩니다. 바로 HOA와 임대인이 발코니 태양광을 전면 금지하는 것을 명시적으로 금지하는 조항입니다.',
          '이 HOA/임대인 조항으로 인해 콜로라도주의 법은 법제화된 8개 주 중 소비자 보호가 가장 강력한 법이 됩니다. 이 시리즈의 다른 모든 주는 이러한 조항이 없거나, 포함 여부가 독립적으로 확인되지 않았습니다.',
        ],
        columns: ['항목', 'Colorado HB26-1007'],
        rows: [
          { 항목: '서명 / 발효', 'Colorado HB26-1007': '2026년 5월 7일 / 2027년 1월 1일 (아직 미발효)' },
          { 항목: '출력 상한', 'Colorado HB26-1007': '1,920W — 확인된 주 중 최고' },
          { 항목: 'HOA/임대인 금지', 'Colorado HB26-1007': '명시적으로 금지됨' },
          { 항목: '넷미터링', 'Colorado HB26-1007': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '지금 콜로라도주를 위해 장비를 구매해야 합니까?',
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
          '<strong>아직입니다 — 이 법은 2027년 1월 1일까지 발효되지 않으며, 이와 별개로 작성 시점 기준 완전한 UL 3700 인증을 확인한 완제품 플러그인 태양광 시스템도 아직 없습니다.</strong> 구매가 의미 있으려면 법적 발효일과 제품 인증이라는 두 가지 조건이 모두 충족되어야 합니다. EcoFlow STREAM Ultra가 시장에 가장 가까운 제품이지만, 현재는 콜로라도주가 아닌 Utah주에서 특별히 판매되고 있습니다.',
          '콜로라도주는 이 시리즈에 사용된 출처의 주별 절감액 표에 포함되지 않았으므로, 콜로라도주에 특화된 금액은 여기서 제공할 수 없습니다. 데이터가 추적된 주들을 기준으로, 800W 키트는 지역 전기 요금에 따라 연간 약 150~350달러를 절약합니다 — 이는 콜로라도주에 대한 추정치가 아니라 전국 범위로 간주해야 하며, 콜로라도주의 1,920W 상한을 고려하면 해당 지역의 풀사이즈 시스템은 800W 키트 추정치를 초과할 수 있다는 점에 유의해야 합니다.',
          '<strong>법이 발효되고 인증된 하드웨어가 등장하면, 비교할 실질적인 선택지가 필요할 것입니다.</strong> 지금은 참고용으로 <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">현재 미국 발코니 태양광용 가정용 배터리 추천</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 확인하시기 바랍니다. 다만 두 페이지 모두 콜로라도주에서 아직 발효되지 않은 법에 대해 어떤 키트가 인증되었거나 사용 준비가 되었다고 주장하지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '콜로라도주 발코니 태양광에 대한 빠른 답변',
        faqs: [
          {
            q: '지금 당장 콜로라도주에서 발코니 태양광을 설치할 수 있습니까?',
            a: '법은 서명되었지만 2027년 1월 1일까지 발효되지 않습니다. 그 이전에 설치하면 HB26-1007의 보호 및 면제 조항이 아직 적용되지 않습니다.',
          },
          {
            q: '법이 발효된 후 콜로라도주의 저희 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '아닙니다. 콜로라도주의 법은 HOA와 임대인이 발코니 태양광을 금지하는 것을 명시적으로 막고 있으며, 이는 이 시리즈에서 법제화된 8개 주 중 가장 강력한 보호 조항입니다.',
          },
          {
            q: '콜로라도주의 출력 상한이 다른 주보다 높은 이유는 무엇입니까?',
            a: '1,920W로, 콜로라도주는 이번 추적에서 확인된 법제화된 미국 발코니 태양광법 중 가장 높은 상한을 설정했으며, 이는 다른 대부분의 주에서 사용하는 1,200W 표준보다 훨씬 높습니다.',
          },
          {
            q: '콜로라도주에서 남는 전력을 전력망에 판매할 수 있습니까?',
            a: '아닙니다. HB26-1007에 따르면 다른 모든 법제화된 주와 마찬가지로 넷미터링은 발코니 태양광 장치에 적용되지 않습니다.',
          },
        ],
      },
    },
  },
}
