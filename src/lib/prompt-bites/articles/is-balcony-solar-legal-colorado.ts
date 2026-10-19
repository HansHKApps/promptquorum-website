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
    dateModified: '2026-10-19',
    seoTitle: 'Is Balcony Solar Legal in Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'In effect since August 12, 2026. HB26-1007 allows up to 1,920W, the highest US cap; HOA protections count from January 1, 2027. Quick answer from PromptQuorum.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Colorado?',
        answer: 'In effect. Colorado HB26-1007 was signed May 7, 2026 and took effect August 12, 2026 (Colorado General Assembly bill page). It sets the highest wattage cap of any enacted state (1,920W, per trackers) and bars unreasonable prohibitions — from January 1, 2027 HOAs can no longer prohibit the devices — though reasonable restrictions may still apply.',
        bullets: [
          'HB26-1007 signed May 7, 2026 — in effect since August 12, 2026; HOA protections from January 1, 2027',
          '1,920W cap — the highest of any US state balcony solar law found',
          'Bars unreasonable HOA/landlord prohibitions (HOAs from January 1, 2027); reasonable restrictions remain allowed',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Colorado HB26-1007 is signed and has been in effect since August 12, 2026; the HOA protections count from January 1, 2027.',
          'At 1,920W, Colorado allows the highest wattage cap of any enacted US state.',
          'Colorado\'s law bars unreasonable HOA and landlord prohibitions on balcony solar, but reasonable restrictions (for example on securing the device) can still apply.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will HB26-1007 Require in Colorado?',
        content: [
          '<strong>Colorado HB26-1007 sets a 1,920W cap — the highest of any enacted US balcony solar law, per trackers — and has been in effect since August 12, 2026; the HOA protections count from January 1, 2027.</strong> It follows the standard exemption template (utilities cannot require customer approval, net metering excluded) with one major addition: covenants that unreasonably restrict the devices are void, though owners may impose reasonable restrictions.',
          'That makes Colorado\'s law among the strongest consumer protections of the enacted states — though it limits only unreasonable prohibitions, not every restriction.',
        ],
        columns: ['Field', 'Colorado HB26-1007'],
        rows: [
          { Field: 'Signed / Effective', 'Colorado HB26-1007': 'May 7, 2026 / Aug 12, 2026 (HOA rules Jan 1, 2027)' },
          { Field: 'Wattage cap', 'Colorado HB26-1007': '1,920W — highest of any state found' },
          { Field: 'HOA / landlord bans', 'Colorado HB26-1007': 'Unreasonable bans void (HOAs from Jan 1, 2027)' },
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
          '<strong>The legal gate is cleared — HB26-1007 has been in effect since August 12, 2026 — but no complete plug-in solar system has confirmed full UL 3700 certification as of write-time.</strong> Product certification is the remaining gate. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Colorado.',
          'Colorado wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Colorado-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Colorado estimate, and note Colorado\'s 1,920W cap means a full-size system there could exceed what an 800W-kit estimate reflects.',
          '<strong>Once certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> for context now — but neither page claims any kit is certified for Colorado\'s law today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Colorado Balcony Solar',
        faqs: [
          {
            q: 'Can I install balcony solar in Colorado right now?',
            a: 'Yes — HB26-1007 has been in effect since August 12, 2026, so utilities cannot require customer approval for qualifying devices; the HOA protections start January 1, 2027. Check your lease and the product\'s certification separately.',
          },
          {
            q: 'Can my HOA in Colorado ban balcony solar?',
            a: 'Not unreasonably. The law voids covenants that unreasonably restrict the devices, and from January 1, 2027 HOAs cannot prohibit them, but reasonable restrictions (for example on securing the device) may still apply.',
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
    dateModified: '2026-10-19',
    seoTitle: 'Ist Balkonsolar in Colorado legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'In Kraft seit 12. August 2026. HB26-1007 erlaubt bis zu 1.920 W, die höchste US-Grenze; HOA-Schutz gilt ab 1. Januar 2027. Kurzantwort von PromptQuorum.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Colorado legal?',
        answer: 'In Kraft. Colorados HB26-1007 wurde am 7. Mai 2026 unterzeichnet und trat am 12. August 2026 in Kraft (Gesetzesseite des Colorado General Assembly). Das Gesetz legt die höchste Leistungsgrenze aller Bundesstaaten mit entsprechender Regelung fest (1.920 W, laut Trackern) und untersagt unangemessene Verbote — ab 1. Januar 2027 dürfen HOAs die Geräte nicht mehr verbieten —, angemessene Einschränkungen können aber weiter gelten.',
        bullets: [
          'HB26-1007 unterzeichnet am 7. Mai 2026 – in Kraft seit 12. August 2026; HOA-Schutz ab 1. Januar 2027',
          '1.920-W-Grenze – die höchste aller bekannten US-Gesetze zu Balkonsolar',
          'Untersagt unangemessene HOA-/Vermieterverbote (HOAs ab 1. Januar 2027); angemessene Einschränkungen bleiben erlaubt',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Colorados HB26-1007 ist unterzeichnet und seit 12. August 2026 in Kraft; der HOA-Schutz gilt ab 1. Januar 2027.',
          'Mit 1.920 W erlaubt Colorado die höchste Leistungsgrenze aller Bundesstaaten mit entsprechender Regelung.',
          'Colorados Gesetz untersagt unangemessene Verbote von Balkonsolar durch HOAs und Vermieter, doch angemessene Einschränkungen (etwa zur Sicherung des Geräts) können weiter gelten.',
          'Bislang hat kein vollständiges System die volle UL-3700-Zertifizierung bestätigt – wie in jedem anderen Bundesstaat mit entsprechender Regelung.',
        ],
      },
      body1: {
        title: 'Was schreibt HB26-1007 in Colorado vor?',
        content: [
          '<strong>Colorados HB26-1007 legt eine Leistungsgrenze von 1.920 W fest – laut Trackern die höchste aller US-Gesetze zu Balkonsolar – und ist seit 12. August 2026 in Kraft; der HOA-Schutz gilt ab 1. Januar 2027.</strong> Es folgt dem üblichen Ausnahmemodell (Versorger dürfen keine Zustimmung der Kunden verlangen, kein Net Metering) mit einer wichtigen Ergänzung: Vereinbarungen, die die Geräte unangemessen einschränken, sind nichtig, angemessene Einschränkungen dürfen Eigentümer aber festlegen.',
          'Damit gehört Colorados Gesetz zu den stärksten Verbraucherschutzregeln der Bundesstaaten mit Gesetz – es begrenzt allerdings nur unangemessene Verbote, nicht jede Einschränkung.',
        ],
        columns: ['Feld', 'Colorado HB26-1007'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Colorado HB26-1007': '7. Mai 2026 / 12. Aug. 2026 (HOA-Regeln 1. Jan. 2027)' },
          { Feld: 'Leistungsgrenze', 'Colorado HB26-1007': '1.920 W – die höchste aller bekannten Bundesstaaten' },
          { Feld: 'HOA-/Vermieter-Verbote', 'Colorado HB26-1007': 'Unangemessene Verbote nichtig (HOAs ab 1. Jan. 2027)' },
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
          '<strong>Die rechtliche Hürde ist genommen – HB26-1007 ist seit 12. August 2026 in Kraft –, aber noch kein komplettes Steckersolar-System hat zum jetzigen Zeitpunkt eine vollständige UL-3700-Zertifizierung bestätigt.</strong> Die Produktzertifizierung ist die verbleibende Hürde. EcoFlows STREAM Ultra ist das marktnächste Produkt, wird aber derzeit speziell in Utah zum Verkauf gelistet, nicht in Colorado.',
          'Colorado war nicht in der bundesstaatlichen Einspartabelle der Quelle enthalten, die dieser Artikelreihe zugrunde liegt, daher liegt hier kein colorado-spezifischer Betrag vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 USD pro Jahr – das ist als nationaler Bereich zu verstehen, nicht als Colorado-Schätzung. Zu beachten: Colorados 1.920-W-Grenze bedeutet, dass ein Vollsystem dort über das hinausgehen könnte, was eine 800-W-Kit-Schätzung widerspiegelt.',
          '<strong>Sobald zertifizierte Hardware existiert, werden Sie echte Optionen zum Vergleich brauchen.</strong> Sehen Sie sich schon jetzt zur Orientierung die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> an – aber keine der beiden Seiten behauptet, dass ein Kit für Colorados Gesetz zertifiziert ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurzantworten zu Balkonsolar in Colorado',
        faqs: [
          {
            q: 'Kann ich in Colorado jetzt Balkonsolar installieren?',
            a: 'Ja — HB26-1007 ist seit 12. August 2026 in Kraft, Versorger dürfen für qualifizierte Geräte also keine Zustimmung verlangen; der HOA-Schutz beginnt am 1. Januar 2027. Prüfen Sie Mietvertrag und Produktzertifizierung gesondert.',
          },
          {
            q: 'Kann meine HOA in Colorado Balkonsolar verbieten?',
            a: 'Nicht in unangemessener Weise. Das Gesetz erklärt Vereinbarungen für nichtig, die die Geräte unangemessen einschränken, und ab 1. Januar 2027 dürfen HOAs sie nicht verbieten; angemessene Einschränkungen (etwa zur Sicherung des Geräts) können aber weiter gelten.',
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
    dateModified: '2026-10-19',
    seoTitle: 'Solaire de balcon légal au Colorado ? | Prompt Bites | PromptQuorum',
    metaDescription: 'En vigueur depuis le 12 août 2026. HB26-1007 autorise jusqu\'à 1 920 W, le plafond américain le plus élevé ; protections HOA dès le 1er janvier 2027. Réponse rapide de PromptQuorum.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: "L'énergie solaire de balcon est-elle légale au Colorado ?",
        answer: 'En vigueur. La HB26-1007 du Colorado a été signée le 7 mai 2026 et est entrée en vigueur le 12 août 2026 (page du projet de loi de l\'Assemblée générale du Colorado). Elle fixe le plafond de puissance le plus élevé des États ayant légiféré (1 920 W, selon des sites de suivi) et interdit les interdictions déraisonnables — à partir du 1er janvier 2027, les HOA ne peuvent plus interdire ces appareils —, mais des restrictions raisonnables peuvent subsister.',
        bullets: [
          'HB26-1007 signée le 7 mai 2026 — en vigueur depuis le 12 août 2026 ; protections HOA dès le 1er janvier 2027',
          "Plafond de 1 920 W — le plus élevé parmi les lois d'État recensées",
          'Interdit les interdictions déraisonnables des HOA/bailleurs (HOA dès le 1er janvier 2027) ; les restrictions raisonnables restent permises',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La HB26-1007 du Colorado est signée et en vigueur depuis le 12 août 2026 ; les protections contre les HOA s\'appliquent dès le 1er janvier 2027.',
          'Avec 1 920 W, le Colorado autorise le plafond de puissance le plus élevé parmi les États ayant légiféré.',
          'La loi du Colorado interdit aux HOA et aux bailleurs d\'interdire de façon déraisonnable le solaire de balcon, mais des restrictions raisonnables (par exemple pour sécuriser l\'appareil) peuvent subsister.',
          "Aucun système complet n'a encore confirmé la certification UL 3700 intégrale, comme dans chaque autre État concerné.",
        ],
      },
      body1: {
        title: 'Que prévoit la loi HB26-1007 au Colorado ?',
        content: [
          '<strong>La HB26-1007 du Colorado fixe un plafond de 1 920 W — le plus élevé de toutes les lois américaines sur le solaire de balcon, selon des sites de suivi — et est en vigueur depuis le 12 août 2026 ; les protections contre les HOA s\'appliquent dès le 1er janvier 2027.</strong> Elle suit le modèle d\'exemption standard (les fournisseurs ne peuvent exiger l\'accord du client, pas de net metering) avec un ajout majeur : les clauses qui restreignent déraisonnablement les appareils sont nulles, mais les propriétaires peuvent imposer des restrictions raisonnables.',
          'La loi du Colorado figure ainsi parmi les protections des consommateurs les plus fortes des États ayant légiféré — mais elle ne limite que les interdictions déraisonnables, pas toutes les restrictions.',
        ],
        columns: ['Champ', 'Colorado HB26-1007'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Colorado HB26-1007': '7 mai 2026 / 12 août 2026 (règles HOA 1er janv. 2027)' },
          { Champ: 'Plafond de puissance', 'Colorado HB26-1007': '1 920 W — le plus élevé recensé' },
          { Champ: 'Interdictions par copropriétés/propriétaires', 'Colorado HB26-1007': 'Interdictions déraisonnables nulles (HOA dès 1er janv. 2027)' },
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
          '<strong>L\'obstacle juridique est levé — la HB26-1007 est en vigueur depuis le 12 août 2026 — mais aucun système solaire enfichable complet n\'a confirmé de certification UL 3700 complète à la date de rédaction.</strong> La certification des produits reste l\'obstacle. L\'EcoFlow STREAM Ultra est le produit le plus proche du marché, mais il est actuellement proposé à la vente spécifiquement dans l\'Utah, pas au Colorado.',
          "Le Colorado ne figurait pas dans le tableau d'économies par État de la source utilisée pour cette série, aucun chiffre spécifique au Colorado n'est donc disponible ici. Dans les États recensés, un kit de 800 W permet d'économiser environ 150 à 350 $ par an selon le tarif local de l'électricité — à considérer comme une fourchette nationale, pas une estimation pour le Colorado. Notez que le plafond de 1 920 W du Colorado signifie qu'un système pleine taille pourrait y dépasser ce que reflète une estimation basée sur un kit de 800 W.",
          "<strong>Une fois du matériel certifié disponible, vous voudrez de véritables options à comparer.</strong> Consultez dès maintenant, à titre indicatif, le <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>comparatif des meilleures batteries domestiques américaines pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow vs. Anker vs. Zendure</a> — mais aucune de ces pages n'affirme qu'un kit est certifié pour la loi du Colorado.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon au Colorado',
        faqs: [
          {
            q: 'Puis-je installer du solaire de balcon au Colorado dès maintenant ?',
            a: 'Oui — la HB26-1007 est en vigueur depuis le 12 août 2026, les fournisseurs ne peuvent donc pas exiger d\'accord pour les appareils éligibles ; les protections contre les HOA débutent le 1er janvier 2027. Vérifiez séparément votre bail et la certification du produit.',
          },
          {
            q: 'Ma HOA au Colorado peut-elle interdire le solaire de balcon ?',
            a: 'Pas de façon déraisonnable. La loi annule les clauses qui restreignent déraisonnablement les appareils, et à partir du 1er janvier 2027 les HOA ne peuvent pas les interdire, mais des restrictions raisonnables (par exemple pour sécuriser l\'appareil) peuvent subsister.',
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
    dateModified: '2026-10-19',
    seoTitle: 'コロラド州でベランダ太陽光は合法? | Prompt Bites | PromptQuorum',
    metaDescription: '2026年8月12日から施行済み。HB26-1007は米国最高の1,920Wまで認め、HOA保護は2027年1月1日から。PromptQuorumによるクイックアンサー。',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'コロラド州でベランダ太陽光発電は合法ですか?',
        answer: '施行済み。コロラド州のHB26-1007は2026年5月7日に署名され、2026年8月12日に施行されました（コロラド州議会の法案ページ）。法律のある州で最高の出力上限（追跡サイトによる1,920W）を定め、不合理な禁止を認めません。2027年1月1日からはHOAが機器を禁止できなくなりますが、合理的な制限は引き続き適用されることがあります。',
        bullets: [
          'HB26-1007は2026年5月7日に署名、2026年8月12日から施行済み。HOAの保護は2027年1月1日から',
          '1,920Wの上限 — 確認されている米国州法の中で最も高い数値',
          'HOA・家主による不合理な禁止を認めない（HOAは2027年1月1日から）。合理的な制限は引き続き認められる',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'コロラド州のHB26-1007は署名済みで、2026年8月12日から施行されています。HOAの保護は2027年1月1日から適用されます。',
          '1,920Wという上限は、制定済みの米国州の中で最も高い出力上限です。',
          'コロラド州の法律は、HOAや家主によるバルコニーソーラーの不合理な禁止を認めませんが、合理的な制限（たとえば機器の固定）は引き続き適用されることがあります。',
          '他の制定済み州と同様、UL 3700の完全認証を確認済みの完成システムはまだありません。',
        ],
      },
      body1: {
        title: 'HB26-1007はコロラド州で何を定めますか?',
        content: [
          '<strong>コロラド州のHB26-1007は1,920Wの上限を定めており、追跡サイトによれば米国のバルコニーソーラー法で最高です。2026年8月12日から施行済みで、HOAの保護は2027年1月1日から適用されます。</strong> 標準的な適用除外の枠組み（電力会社は顧客の承認を求められず、ネットメータリングは対象外）に、重要な追加があります。機器を不合理に制限する規約は無効ですが、所有者は合理的な制限を課すことができます。',
          'これにより、コロラド州の法律は制定州の中でも消費者保護が最も強い部類に入りますが、制限できるのは不合理な禁止だけで、あらゆる制限ではありません。',
        ],
        columns: ['項目', 'Colorado HB26-1007'],
        rows: [
          { 項目: '署名日・発効日', 'Colorado HB26-1007': '2026年5月7日 / 2026年8月12日（HOA規定は2027年1月1日）' },
          { 項目: '出力上限', 'Colorado HB26-1007': '1,920W — 確認済みの州の中で最高' },
          { 項目: 'HOA・家主による禁止', 'Colorado HB26-1007': '不合理な禁止は無効（HOAは2027年1月1日から）' },
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
          '<strong>法的なハードルはクリアされました（HB26-1007は2026年8月12日から施行済み）が、執筆時点で、完全なプラグイン式ソーラーシステムでUL 3700の完全な認証が確認されたものはありません。</strong> 残るハードルは製品認証です。EcoFlowのSTREAM Ultraは市場に最も近い製品ですが、現在の販売対象は特にユタ州で、コロラド州ではありません。',
          'コロラド州は、このシリーズで使用した情報源の州別節約額データに含まれていなかったため、コロラド州固有の金額はここでは提供できません。データが記録された州全体では、800Wキットで地域の電気料金に応じて年間約150〜350ドルの節約が見られます。これは全国的な範囲として捉えてください。コロラド州の推定値ではありません。また、コロラド州の1,920Wという上限を考えると、同州でのフルサイズシステムは800Wキットの試算を上回る可能性がある点にご注意ください。',
          '<strong>認証済みの機材が登場したら、比較できる実際の選択肢が必要になります。</strong> 参考として、<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">米国のベランダ太陽光向け家庭用バッテリーの現在のおすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください。ただし、どちらのページも、コロラド州の法律に対応した認証済みのキットがあるとは主張していません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'コロラド州のベランダ太陽光に関するクイックアンサー',
        faqs: [
          {
            q: 'コロラド州で今すぐバルコニーソーラーを設置できますか？',
            a: 'はい。HB26-1007は2026年8月12日から施行済みで、電力会社は対象の機器について顧客の承認を求められません。HOAの保護は2027年1月1日から始まります。賃貸契約と製品の認証は別途ご確認ください。',
          },
          {
            q: 'コロラド州のHOAはバルコニーソーラーを禁止できますか？',
            a: '不合理な形ではできません。法律は機器を不合理に制限する規約を無効とし、2027年1月1日からはHOAが機器を禁止できなくなりますが、合理的な制限（たとえば機器の固定）は引き続き適用されることがあります。',
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
    dateModified: '2026-10-19',
    seoTitle: '科罗拉多州阳台太阳能合法吗? | Prompt Bites | PromptQuorum',
    metaDescription: '自2026年8月12日起已生效。HB26-1007允许最高1,920W，为美国最高上限；HOA保护自2027年1月1日起计。PromptQuorum快速解答。',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '科罗拉多州的阳台太阳能合法吗?',
        answer: '已生效。科罗拉多州HB26-1007于2026年5月7日签署，2026年8月12日生效（科罗拉多州议会法案页面）。它设定了已立法州中最高的功率上限（据追踪网站为1,920W），并禁止不合理的禁令——自2027年1月1日起，HOA不能再禁止这些设备——但合理的限制仍可能适用。',
        bullets: [
          'HB26-1007于2026年5月7日签署——自2026年8月12日起生效；HOA保护自2027年1月1日起',
          '1,920W上限——已发现的美国各州阳台太阳能法中最高',
          '禁止HOA/房东的不合理禁令（HOA自2027年1月1日起）；合理的限制仍然允许',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '科罗拉多州HB26-1007已签署，自2026年8月12日起生效；HOA保护自2027年1月1日起计。',
          '1,920W的上限是已立法美国各州中最高的。',
          '科罗拉多州的法律禁止HOA和房东对阳台太阳能设置不合理的禁令，但合理的限制（例如固定设备）仍可能适用。',
          '与其他已立法州一样，目前尚无完整系统确认获得完整的UL 3700认证。',
        ],
      },
      body1: {
        title: 'HB26-1007在科罗拉多州具体规定了什么?',
        content: [
          '<strong>科罗拉多州HB26-1007设定了1,920W的上限——据追踪网站为美国阳台太阳能法律中最高——并自2026年8月12日起生效；HOA保护自2027年1月1日起计。</strong> 它遵循标准的豁免模板（电力公司不得要求用户批准，不适用净计量），并有一项重要补充：不合理限制这些设备的约定无效，但所有者仍可设置合理的限制。',
          '这使科罗拉多州的法律成为已立法州中消费者保护最强的之一——但它只限制不合理的禁令，而不是所有限制。',
        ],
        columns: ['项目', 'Colorado HB26-1007'],
        rows: [
          { 项目: '签署/生效日期', 'Colorado HB26-1007': '2026年5月7日 / 2026年8月12日（HOA规则2027年1月1日）' },
          { 项目: '功率上限', 'Colorado HB26-1007': '1,920W——已发现各州中最高' },
          { 项目: 'HOA/房东禁令', 'Colorado HB26-1007': '不合理禁令无效（HOA自2027年1月1日起）' },
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
          '<strong>法律门槛已经跨过——HB26-1007自2026年8月12日起已生效——但截至撰写时，尚无完整的插电式太阳能系统确认获得完整的UL 3700认证。</strong> 产品认证是剩下的门槛。EcoFlow的STREAM Ultra是最接近上市的产品，但目前专门在犹他州销售，而非科罗拉多州。',
          '科罗拉多州未被纳入本系列所用信息源的各州节省数据表，因此这里无法提供科罗拉多州的具体金额。在已跟踪的各州中，一个800W套件根据当地电价每年大约可节省150–350美元——请将其视为全国范围的估算，而非科罗拉多州的估算，并注意科罗拉多州1,920W的上限意味着当地的全尺寸系统可能超出800W套件估算所反映的范围。',
          '<strong>一旦出现获得认证的硬件，您将需要真正可比较的选项。</strong> 现在可以先参考<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>以作了解——但这两篇文章均未声称任何套件已获得适用于科罗拉多州法律的认证。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于科罗拉多州阳台太阳能的快速解答',
        faqs: [
          {
            q: '我现在可以在科罗拉多州安装阳台太阳能吗？',
            a: '可以——HB26-1007自2026年8月12日起已生效，因此电力公司不得要求合格设备取得用户批准；HOA保护自2027年1月1日起生效。请另行核对您的租约和产品认证。',
          },
          {
            q: '科罗拉多州的HOA可以禁止阳台太阳能吗？',
            a: '不能以不合理的方式禁止。该法律使不合理限制这些设备的约定无效，自2027年1月1日起HOA不能禁止它们，但合理的限制（例如固定设备）仍可能适用。',
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
    dateModified: '2026-10-19',
    seoTitle: '¿Solar de balcón legal en Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'En vigor desde el 12 de agosto de 2026. La HB26-1007 permite hasta 1,920W, el límite más alto de EE. UU.; protecciones frente a HOA desde el 1 de enero de 2027.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Colorado?',
        answer: 'En vigor. La HB26-1007 de Colorado se firmó el 7 de mayo de 2026 y entró en vigor el 12 de agosto de 2026 (página del proyecto de ley de la Asamblea General de Colorado). Fija el límite de potencia más alto de los estados con ley (1,920W, según rastreadores) y prohíbe las prohibiciones irrazonables — desde el 1 de enero de 2027 las HOA ya no pueden prohibir los dispositivos —, aunque pueden seguir aplicándose restricciones razonables.',
        bullets: [
          'HB26-1007 firmada el 7 de mayo de 2026 — en vigor desde el 12 de agosto de 2026; protecciones frente a HOA desde el 1 de enero de 2027',
          'Límite de 1,920 W — el más alto de cualquier ley estatal de solar de balcón encontrada en EE. UU.',
          'Prohíbe las prohibiciones irrazonables de HOA/arrendadores (HOA desde el 1 de enero de 2027); las restricciones razonables siguen permitidas',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La HB26-1007 de Colorado está firmada y en vigor desde el 12 de agosto de 2026; las protecciones frente a HOA cuentan desde el 1 de enero de 2027.',
          'Con 1,920 W, Colorado permite el límite de potencia más alto de cualquier estado con ley aprobada.',
          'La ley de Colorado prohíbe a las HOA y arrendadores prohibir de forma irrazonable el balcony solar, pero pueden seguir aplicándose restricciones razonables (por ejemplo, para asegurar el dispositivo).',
          'Ningún sistema completo ha confirmado aún la certificación UL 3700 completa, igual que en cualquier otro estado con ley aprobada.',
        ],
      },
      body1: {
        title: '¿Qué exigirá la HB26-1007 en Colorado?',
        content: [
          '<strong>La HB26-1007 de Colorado fija un límite de 1,920W — el más alto de cualquier ley estadounidense de balcony solar, según rastreadores — y está en vigor desde el 12 de agosto de 2026; las protecciones frente a HOA cuentan desde el 1 de enero de 2027.</strong> Sigue la plantilla de exención estándar (las distribuidoras no pueden exigir aprobación del cliente, sin net metering) con un añadido importante: las cláusulas que restringen irrazonablemente los dispositivos son nulas, aunque los propietarios pueden imponer restricciones razonables.',
          'Eso sitúa la ley de Colorado entre las protecciones al consumidor más fuertes de los estados con ley — aunque solo limita las prohibiciones irrazonables, no todas las restricciones.',
        ],
        columns: ['Campo', 'Colorado HB26-1007'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Colorado HB26-1007': '7 may. 2026 / 12 ago. 2026 (reglas HOA 1 ene. 2027)' },
          { Campo: 'Límite de potencia', 'Colorado HB26-1007': '1,920 W — el más alto de cualquier estado encontrado' },
          { Campo: 'Prohibiciones de HOA/arrendador', 'Colorado HB26-1007': 'Prohibiciones irrazonables nulas (HOA desde 1 ene. 2027)' },
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
          '<strong>La barrera legal está superada — la HB26-1007 está en vigor desde el 12 de agosto de 2026 —, pero ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 completa al momento de redactar.</strong> La certificación de producto es la barrera que queda. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente figura a la venta específicamente en Utah, no en Colorado.',
          'Colorado no estaba en la tabla de ahorros por estado de la fuente usada para esta serie, así que aquí no hay una cifra específica para Colorado. En los estados que sí se rastrearon, un kit de 800 W ahorra aproximadamente entre $150 y $350 por año según las tarifas eléctricas locales — trátalo como un rango nacional, no una estimación para Colorado, y ten en cuenta que el límite de 1,920 W de Colorado significa que un sistema de tamaño completo ahí podría superar lo que refleja una estimación basada en un kit de 800 W.',
          '<strong>Una vez que exista hardware certificado, querrás opciones reales para comparar.</strong> Consulta ahora, a modo de referencia, las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas en EE. UU. para solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — pero ninguna de las dos páginas afirma que algún kit esté certificado para la ley de Colorado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre solar de balcón en Colorado',
        faqs: [
          {
            q: '¿Puedo instalar balcony solar en Colorado ahora mismo?',
            a: 'Sí — la HB26-1007 está en vigor desde el 12 de agosto de 2026, así que las distribuidoras no pueden exigir aprobación del cliente para los dispositivos que cumplan los requisitos; las protecciones frente a HOA empiezan el 1 de enero de 2027. Revisa por separado tu contrato de alquiler y la certificación del producto.',
          },
          {
            q: '¿Puede mi HOA en Colorado prohibir el balcony solar?',
            a: 'No de forma irrazonable. La ley anula las cláusulas que restringen irrazonablemente los dispositivos, y desde el 1 de enero de 2027 las HOA no pueden prohibirlos, aunque pueden seguir aplicándose restricciones razonables (por ejemplo, para asegurar el dispositivo).',
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
    dateModified: '2026-10-19',
    seoTitle: 'Solar de varanda é legal no Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'Em vigor desde 12 de agosto de 2026. A HB26-1007 permite até 1,920W, o maior limite dos EUA; proteções contra HOAs valem a partir de 1º de janeiro de 2027.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal no Colorado?',
        answer: 'Em vigor. A HB26-1007 do Colorado foi sancionada em 7 de maio de 2026 e entrou em vigor em 12 de agosto de 2026 (página do projeto de lei da Assembleia Geral do Colorado). Ela define o maior limite de potência entre os estados com lei (1,920W, segundo rastreadores) e proíbe proibições irrazoáveis — a partir de 1º de janeiro de 2027 as HOAs não podem mais proibir os dispositivos —, embora restrições razoáveis ainda possam valer.',
        bullets: [
          'HB26-1007 sancionada em 7 de maio de 2026 — em vigor desde 12 de agosto de 2026; proteções contra HOAs a partir de 1º de janeiro de 2027',
          'Limite de 1.920 W — o mais alto entre as leis estaduais de solar de varanda encontradas nos EUA',
          'Proíbe proibições irrazoáveis de HOAs/locadores (HOAs a partir de 1º de janeiro de 2027); restrições razoáveis continuam permitidas',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A HB26-1007 do Colorado está sancionada e em vigor desde 12 de agosto de 2026; as proteções contra HOAs valem a partir de 1º de janeiro de 2027.',
          'Com 1.920 W, o Colorado permite o maior limite de potência entre os estados com lei aprovada.',
          'A lei do Colorado proíbe HOAs e locadores de proibir de forma irrazoável a energia solar de varanda, mas restrições razoáveis (por exemplo, para fixar o dispositivo) ainda podem valer.',
          'Nenhum sistema completo confirmou certificação UL 3700 total até agora, assim como em todos os outros estados com lei aprovada.',
        ],
      },
      body1: {
        title: 'O que a HB26-1007 vai exigir no Colorado?',
        content: [
          '<strong>A HB26-1007 do Colorado define um limite de 1,920W — o maior de qualquer lei americana de energia solar de varanda, segundo rastreadores — e está em vigor desde 12 de agosto de 2026; as proteções contra HOAs valem a partir de 1º de janeiro de 2027.</strong> Ela segue o modelo de isenção padrão (as distribuidoras não podem exigir aprovação do cliente, sem net metering) com um acréscimo importante: cláusulas que restringem irrazoavelmente os dispositivos são nulas, embora os proprietários possam impor restrições razoáveis.',
          'Isso coloca a lei do Colorado entre as proteções ao consumidor mais fortes dos estados com lei — embora limite apenas proibições irrazoáveis, não toda restrição.',
        ],
        columns: ['Campo', 'Colorado HB26-1007'],
        rows: [
          { Campo: 'Sancionada / Em vigor', 'Colorado HB26-1007': '7 mai. 2026 / 12 ago. 2026 (regras HOA 1º jan. 2027)' },
          { Campo: 'Limite de potência', 'Colorado HB26-1007': '1.920 W — o mais alto entre os estados encontrados' },
          { Campo: 'Proibições de HOA/locador', 'Colorado HB26-1007': 'Proibições irrazoáveis nulas (HOAs a partir de 1º jan. 2027)' },
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
          '<strong>A barreira legal foi superada — a HB26-1007 está em vigor desde 12 de agosto de 2026 —, mas nenhum sistema solar plug-in completo confirmou a certificação UL 3700 completa até o momento da redação.</strong> A certificação do produto é a barreira que resta. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente está à venda especificamente em Utah, não no Colorado.',
          'O Colorado não estava na tabela de economia por estado da fonte usada nesta série, então não há um valor específico para o Colorado aqui. Nos estados rastreados, um kit de 800 W economiza cerca de US$ 150 a US$ 350 por ano dependendo das tarifas locais de energia — trate isso como uma faixa nacional, não uma estimativa para o Colorado, e observe que o limite de 1.920 W do Colorado significa que um sistema de tamanho completo ali pode ultrapassar o que uma estimativa de kit de 800 W reflete.',
          '<strong>Assim que existir hardware certificado, você vai querer opções reais para comparar.</strong> Consulte agora, como referência, as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">indicações atuais de baterias residenciais dos EUA para solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — mas nenhuma das duas páginas afirma que algum kit esteja certificado para a lei do Colorado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre solar de varanda no Colorado',
        faqs: [
          {
            q: 'Posso instalar energia solar de varanda no Colorado agora?',
            a: 'Sim — a HB26-1007 está em vigor desde 12 de agosto de 2026, então as distribuidoras não podem exigir aprovação do cliente para dispositivos qualificados; as proteções contra HOAs começam em 1º de janeiro de 2027. Confira separadamente seu contrato de aluguel e a certificação do produto.',
          },
          {
            q: 'Minha HOA no Colorado pode proibir energia solar de varanda?',
            a: 'Não de forma irrazoável. A lei anula cláusulas que restringem irrazoavelmente os dispositivos e, a partir de 1º de janeiro de 2027, as HOAs não podem proibi-los, embora restrições razoáveis (por exemplo, para fixar o dispositivo) ainda possam valer.',
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
    dateModified: '2026-10-19',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في كولورادو؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نافذ منذ 12 أغسطس 2026. يسمح HB26-1007 بحتى 1,920 واط، أعلى حد أمريكي؛ وتبدأ حماية اتحادات الملاك (HOA) في 1 يناير 2027. إجابة سريعة من PromptQuorum.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في كولورادو؟',
        answer: 'نافذ. وُقّع HB26-1007 في كولورادو في 7 مايو 2026 وبدأ نفاذه في 12 أغسطس 2026 (صفحة مشروع القانون لدى الجمعية العامة لكولورادو). وهو يحدد أعلى حد للقدرة بين الولايات المُقِرّة (1,920 واط، بحسب المتتبّعين) ويحظر المنع غير المعقول — فمنذ 1 يناير 2027 لا يجوز لاتحادات الملاك (HOA) منع الأجهزة — مع بقاء إمكانية سريان قيود معقولة.',
        bullets: [
          'وُقّع HB26-1007 في 7 مايو 2026 — نافذ منذ 12 أغسطس 2026؛ وحماية اتحادات الملاك من 1 يناير 2027',
          'حد 1,920W — الأعلى بين قوانين الطاقة الشمسية للشرفات في أي ولاية أمريكية تم رصدها',
          'يحظر منع اتحادات الملاك/المؤجّرين غير المعقول (اتحادات الملاك من 1 يناير 2027)؛ وتظل القيود المعقولة مسموحة',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'وُقّع HB26-1007 في كولورادو وهو نافذ منذ 12 أغسطس 2026؛ وتسري حماية اتحادات الملاك من 1 يناير 2027.',
          'بحد 1,920W، تسمح كولورادو بأعلى حد للطاقة بين جميع الولايات التي أصدرت تشريعات.',
          'يحظر قانون كولورادو على اتحادات الملاك والمؤجّرين المنع غير المعقول للطاقة الشمسية للشرفات، لكن قد تظل القيود المعقولة (مثل تثبيت الجهاز) سارية.',
          'لم يؤكد أي نظام متكامل بعد حصوله على شهادة UL 3700 الكاملة، تمامًا كما هو الحال في كل ولاية أخرى أصدرت تشريعات.',
        ],
      },
      body1: {
        title: 'ماذا سيتطلب قانون HB26-1007 في كولورادو؟',
        content: [
          '<strong>يحدد HB26-1007 في كولورادو حدًا قدره 1,920 واط — الأعلى بين قوانين الطاقة الشمسية للشرفات الأمريكية بحسب المتتبّعين — وهو نافذ منذ 12 أغسطس 2026؛ وتسري حماية اتحادات الملاك من 1 يناير 2027.</strong> ويتبع نموذج الإعفاء القياسي (لا يجوز لشركات الكهرباء اشتراط موافقة العميل، دون قياس صافٍ) مع إضافة كبيرة: تُعدّ الاتفاقات التي تقيّد الأجهزة تقييدًا غير معقول باطلة، مع جواز أن يفرض الملاك قيودًا معقولة.',
          'وبذلك يُعدّ قانون كولورادو من أقوى حمايات المستهلك بين الولايات المُقِرّة — لكنه يقيّد المنع غير المعقول فقط، لا كل قيد.',
        ],
        columns: ['الحقل', 'Colorado HB26-1007'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'Colorado HB26-1007': '7 مايو 2026 / 12 أغسطس 2026 (قواعد HOA: 1 يناير 2027)' },
          { الحقل: 'حد الطاقة', 'Colorado HB26-1007': '1,920W — الأعلى بين الولايات التي تم رصدها' },
          { الحقل: 'حظر جمعيات الملاك/المُلّاك', 'Colorado HB26-1007': 'المنع غير المعقول باطل (HOA من 1 يناير 2027)' },
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
          '<strong>تم تجاوز العقبة القانونية — فـ HB26-1007 نافذ منذ 12 أغسطس 2026 — لكن لم يؤكد أي نظام طاقة شمسية قابل للتوصيل كامل حصوله على اعتماد UL 3700 الكامل وقت الكتابة.</strong> واعتماد المنتج هو العقبة المتبقية. ويُعدّ STREAM Ultra من EcoFlow أقرب منتج إلى السوق، لكنه مدرج حاليًا للبيع في يوتا تحديدًا، لا في كولورادو.',
          'لم تكن كولورادو ضمن جدول التوفير حسب الولاية في المصدر المستخدم لهذه السلسلة، لذا لا يتوفر هنا رقم خاص بكولورادو. عبر الولايات التي تم رصدها، توفر حزمة 800W ما يقارب 150 إلى 350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — يجب اعتبار هذا نطاقًا وطنيًا وليس تقديرًا خاصًا بكولورادو، مع ملاحظة أن حد كولورادو البالغ 1,920W يعني أن نظامًا كامل الحجم هناك قد يتجاوز ما يعكسه تقدير حزمة 800W.',
          '<strong>بمجرد توفر معدات معتمدة، ستحتاجون إلى خيارات حقيقية للمقارنة.</strong> يمكنكم الاطلاع الآن، للاستئناس فقط، على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومات EcoFlow مقابل Anker مقابل Zendure</a> — لكن أيًا من الصفحتين لا يدّعي أن أي عدة معتمدة لقانون كولورادو.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في كولورادو',
        faqs: [
          {
            q: 'هل يمكنني تركيب الطاقة الشمسية للشرفات في كولورادو الآن؟',
            a: 'نعم — فـ HB26-1007 نافذ منذ 12 أغسطس 2026، ولذلك لا يجوز لشركات الكهرباء اشتراط موافقة العميل للأجهزة المؤهلة؛ وتبدأ حماية اتحادات الملاك في 1 يناير 2027. وتحقق بشكل منفصل من عقد إيجارك ومن اعتماد المنتج.',
          },
          {
            q: 'هل يمكن لاتحاد الملاك لدي في كولورادو منع الطاقة الشمسية للشرفات؟',
            a: 'ليس بصورة غير معقولة. فالقانون يبطل الاتفاقات التي تقيّد الأجهزة تقييدًا غير معقول، ومنذ 1 يناير 2027 لا يجوز لاتحادات الملاك منعها، لكن قد تظل القيود المعقولة (مثل تثبيت الجهاز) سارية.',
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
    dateModified: '2026-10-19',
    seoTitle: '콜로라도주 발코니 태양광, 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '2026년 8월 12일부터 시행 중. HB26-1007은 미국 최고인 1,920W까지 허용하며 HOA 보호는 2027년 1월 1일부터입니다. PromptQuorum의 빠른 답변.',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '콜로라도주에서 발코니 태양광 발전은 합법입니까?',
        answer: '시행 중입니다. 콜로라도 HB26-1007은 2026년 5월 7일 서명되어 2026년 8월 12일 시행되었습니다(콜로라도 주 의회 법안 페이지). 입법한 주 중 가장 높은 출력 한도(추적 사이트 기준 1,920W)를 정하고 불합리한 금지를 막으며, 2027년 1월 1일부터는 HOA가 기기를 금지할 수 없지만 합리적인 제한은 여전히 적용될 수 있습니다.',
        bullets: [
          'HB26-1007은 2026년 5월 7일 서명, 2026년 8월 12일부터 시행 중이며 HOA 보호는 2027년 1월 1일부터입니다',
          '1,920W 상한 — 확인된 미국 주법 중 가장 높은 수준입니다',
          'HOA/임대인의 불합리한 금지를 막음(HOA는 2027년 1월 1일부터). 합리적인 제한은 계속 허용됩니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '콜로라도 HB26-1007은 서명되어 2026년 8월 12일부터 시행 중이며, HOA 보호는 2027년 1월 1일부터 적용됩니다.',
          '1,920W로, 콜로라도주는 법제화된 미국 주 중 가장 높은 출력 상한을 허용합니다.',
          '콜로라도 법은 HOA와 임대인이 발코니 태양광을 불합리하게 금지하는 것을 막지만, 합리적인 제한(예: 기기 고정)은 여전히 적용될 수 있습니다.',
          '다른 모든 법제화된 주와 마찬가지로, 완전한 UL 3700 인증을 확인한 완제품 시스템은 아직 없습니다.',
        ],
      },
      body1: {
        title: 'HB26-1007은 콜로라도주에서 무엇을 요구합니까?',
        content: [
          '<strong>콜로라도 HB26-1007은 1,920W 한도를 정하며, 추적 사이트 기준으로 미국 발코니 태양광 법 중 가장 높고, 2026년 8월 12일부터 시행 중이며 HOA 보호는 2027년 1월 1일부터 적용됩니다.</strong> 표준 면제 템플릿(전력회사는 고객 승인을 요구할 수 없고 순계량 제외)을 따르되 중요한 추가 사항이 있습니다. 기기를 불합리하게 제한하는 약정은 무효이지만, 소유자는 합리적인 제한을 둘 수 있습니다.',
          '이로써 콜로라도 법은 입법한 주 중 소비자 보호가 가장 강한 편에 속하지만, 제한하는 것은 불합리한 금지일 뿐 모든 제한은 아닙니다.',
        ],
        columns: ['항목', 'Colorado HB26-1007'],
        rows: [
          { 항목: '서명 / 발효', 'Colorado HB26-1007': '2026년 5월 7일 / 2026년 8월 12일(HOA 규정 2027년 1월 1일)' },
          { 항목: '출력 상한', 'Colorado HB26-1007': '1,920W — 확인된 주 중 최고' },
          { 항목: 'HOA/임대인 금지', 'Colorado HB26-1007': '불합리한 금지는 무효(HOA는 2027년 1월 1일부터)' },
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
          '<strong>법적 관문은 통과했습니다. HB26-1007은 2026년 8월 12일부터 시행 중이지만, 작성 시점 기준으로 완전한 플러그인 태양광 시스템이 UL 3700 인증을 완전히 받았다고 확인된 사례는 없습니다.</strong> 남은 관문은 제품 인증입니다. EcoFlow의 STREAM Ultra는 시장에 가장 가까운 제품이지만, 현재 콜로라도가 아니라 특히 유타에서 판매 중으로 등재되어 있습니다.',
          '콜로라도주는 이 시리즈에 사용된 출처의 주별 절감액 표에 포함되지 않았으므로, 콜로라도주에 특화된 금액은 여기서 제공할 수 없습니다. 데이터가 추적된 주들을 기준으로, 800W 키트는 지역 전기 요금에 따라 연간 약 150~350달러를 절약합니다 — 이는 콜로라도주에 대한 추정치가 아니라 전국 범위로 간주해야 하며, 콜로라도주의 1,920W 상한을 고려하면 해당 지역의 풀사이즈 시스템은 800W 키트 추정치를 초과할 수 있다는 점에 유의해야 합니다.',
          '<strong>인증된 하드웨어가 등장하면, 비교할 실질적인 선택지가 필요할 것입니다.</strong> 지금은 참고용으로 <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">현재 미국 발코니 태양광용 가정용 배터리 추천</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 확인하시기 바랍니다. 다만 두 페이지 모두 콜로라도주 법에 대해 어떤 키트가 인증되었다고 주장하지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '콜로라도주 발코니 태양광에 대한 빠른 답변',
        faqs: [
          {
            q: '콜로라도에서 지금 바로 발코니 태양광을 설치할 수 있나요?',
            a: '네. HB26-1007은 2026년 8월 12일부터 시행 중이므로 전력회사는 요건을 충족하는 기기에 대해 고객 승인을 요구할 수 없고, HOA 보호는 2027년 1월 1일부터 시작됩니다. 임대 계약과 제품 인증은 따로 확인하십시오.',
          },
          {
            q: '콜로라도의 HOA가 발코니 태양광을 금지할 수 있나요?',
            a: '불합리한 방식으로는 할 수 없습니다. 법은 기기를 불합리하게 제한하는 약정을 무효로 하며, 2027년 1월 1일부터는 HOA가 기기를 금지할 수 없지만 합리적인 제한(예: 기기 고정)은 여전히 적용될 수 있습니다.',
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
