// Slug: is-balcony-solar-legal-maine
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Maine?',
    dateModified: '2026-11-20',
    seoTitle: 'Is Balcony Solar Legal in Maine? LD 1730 | Prompt Bites',
    metaDescription: 'Maine LD 1730, signed April 6, 2026: plug-in solar up to 1,200 W; an electrician and utility notice above 420 W, per PV Tech. Not legal advice.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Maine?',
        answer: 'In effect. Maine LD 1730 (Chapter 644) was signed on April 6, 2026 and took effect in mid-July 2026; sources give July 15 or July 29. According to PV Tech, it allows plug-in systems up to 1,200 W; systems above 420 W must be installed by a licensed electrician and reported to the utility within 30 days.',
        bullets: [
          'LD 1730 signed April 6, 2026 (Maine Legislature: Chapter 644); effective mid-July 2026 per secondary sources',
          'Two tiers per PV Tech: up to 420 W without an electrician; above 420 W and up to 1,200 W installed by a licensed electrician, with utility notice',
          'Certification under UL 3700 or a comparable standard from a nationally recognized testing laboratory is required, per PV Tech; certified complete systems were unconfirmed in the sources we checked',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Maine LD 1730 was signed on April 6, 2026 (Chapter 644) and took effect in mid-July 2026; reported effective dates differ between July 15 and July 29.',
          'Per PV Tech: up to 1,200 W; above 420 W needs a licensed electrician and a utility notice within 30 days of installation.',
          'Per PV Tech, utilities cannot require prior approval, an interconnection application or fees.',
          'Certification under UL 3700 or a comparable standard is required according to PV Tech; verify any product listing in the certifier’s own directory.',
        ],
      },
      body1: {
        title: 'What Does LD 1730 Require in Maine?',
        content: [
          '<strong>Maine LD 1730 sets a two-tier structure based on system size, according to PV Tech’s April 2026 report on the law.</strong> Plug-in systems up to 420 W can be installed by the customer in a standard outlet; systems above 420 W, up to the 1,200 W cap, must be installed by a state-licensed electrician and reported to the transmission and distribution utility within 30 days of installation. Utilities cannot require prior approval, an interconnection application or fees, and cannot require extra controls or equipment beyond what is integrated into the system. PV Tech also reports that inverters must shut off within 0.2 seconds if power is disrupted and that panels must be certified under UL 3700 or a comparable standard from a nationally recognized testing laboratory.',
          'According to secondary trackers, plug-in systems are not eligible for Maine’s net energy billing. We could not retrieve the chaptered law text, so confirm the details with the Maine Legislature (35-A MRSA §3475). Leases, HOA agreements and local rules may add limits. This page is general information, not legal advice.',
        ],
        columns: ['Field', 'Maine LD 1730'],
        rows: [
          { 'Field': 'Signed / Effective', 'Maine LD 1730': 'Apr 6, 2026 / mid-Jul 2026' },
          { 'Field': 'Wattage cap', 'Maine LD 1730': '1,200 W' },
          { 'Field': 'Without electrician', 'Maine LD 1730': 'Up to 420 W' },
          { 'Field': 'Utility notice', 'Maine LD 1730': 'Above 420 W: within 30 days' },
          { 'Field': 'Net energy billing', 'Maine LD 1730': 'Reported as not eligible' },
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
          '<strong>Per PV Tech, Maine’s law refers to UL 3700 or a comparable standard from a nationally recognized testing laboratory; complete-system certification was still unconfirmed in the sources we checked.</strong> UL Solutions announced its UL 3700-based testing and certification program on January 8, 2026. Reports about certified products conflict (see the Utah page for details), so check the certifier’s public directory for the specific product; PromptQuorum has not verified any product certification.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Maine today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Maine Balcony Solar',
        faqs: [
          {
            q: 'Can I install a 1,200 W balcony solar kit myself in Maine?',
            a: 'According to PV Tech, no: systems above 420 W must be installed by a state-licensed electrician and reported to the utility within 30 days, while systems up to 420 W can be installed by the customer.',
          },
          {
            q: 'Can my HOA in Maine ban balcony solar?',
            a: 'Possibly. The sources we reviewed do not describe HOA or landlord provisions in LD 1730, so check your lease or HOA covenant separately. For how another state handles this, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Does Maine require notifying the utility?',
            a: 'Per PV Tech, only for systems above 420 W, within 30 days of installation. Utilities cannot require prior approval, an interconnection application or fees.',
          },
          {
            q: 'Do I get paid for excess power in Maine?',
            a: 'Do not count on it. Secondary trackers report that plug-in systems are not eligible for Maine’s net energy billing; check the law text or ask your utility.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Maine Legislature: LD 1730 (SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — title, sponsor, signing date April 6, 2026',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — April 2026 report on the 420 W / 1,200 W tiers, utility notice and certification',
          '[UL Solutions: testing and certification framework for plug-in solar](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700-based program announced January 8, 2026',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Maine legal?',
    dateModified: '2026-11-20',
    seoTitle: 'Ist Balkonsolar in Maine legal? LD 1730 | Prompt Bites',
    metaDescription: 'Maine LD 1730, am 6. April 2026 unterzeichnet: Steckersolar bis 1.200 W; ab 420 W Elektriker und Meldung nötig (PV Tech). Keine Rechtsberatung.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Maine legal?',
        answer: 'In Kraft. Maines LD 1730 (Chapter 644) wurde am 6. April 2026 unterzeichnet und trat Mitte Juli 2026 in Kraft; Quellen nennen den 15. oder den 29. Juli. Laut PV Tech erlaubt es Steckersolar-Systeme bis 1.200 W; Systeme über 420 W müssen von einer lizenzierten Elektrofachkraft installiert und dem Versorger innerhalb von 30 Tagen gemeldet werden.',
        bullets: [
          'LD 1730 am 6. April 2026 unterzeichnet (Parlament von Maine: Chapter 644); laut Sekundärquellen seit Mitte Juli 2026 in Kraft',
          'Zwei Stufen laut PV Tech: bis 420 W ohne Elektriker; über 420 W bis 1.200 W durch eine lizenzierte Elektrofachkraft, mit Meldung an den Versorger',
          'Laut PV Tech ist eine Zertifizierung nach UL 3700 oder einem vergleichbaren Standard eines national anerkannten Prüflabors vorgeschrieben; zertifizierte Komplettsysteme waren in den von uns geprüften Quellen unbestätigt',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Maines LD 1730 wurde am 6. April 2026 unterzeichnet (Chapter 644) und trat Mitte Juli 2026 in Kraft; die genannten Termine schwanken zwischen dem 15. und dem 29. Juli.',
          'Laut PV Tech: bis 1.200 W; über 420 W ist eine lizenzierte Elektrofachkraft nötig und eine Meldung an den Versorger innerhalb von 30 Tagen nach der Installation.',
          'Laut PV Tech dürfen Versorger weder vorherige Genehmigung noch einen Netzanschlussantrag noch Gebühren verlangen.',
          'Laut PV Tech ist eine Zertifizierung nach UL 3700 oder einem vergleichbaren Standard erforderlich; prüfen Sie jeden Produkteintrag im Verzeichnis der Zertifizierungsstelle.',
        ],
      },
      body1: {
        title: 'Was schreibt LD 1730 in Maine vor?',
        content: [
          '<strong>Maines LD 1730 sieht laut PV Techs Bericht vom April 2026 eine zweistufige Regelung nach Systemgröße vor.</strong> Steckersolar-Systeme bis 420 W kann der Kunde selbst an einer Standardsteckdose anschließen; Systeme über 420 W bis zur Obergrenze von 1.200 W müssen von einer staatlich lizenzierten Elektrofachkraft installiert und dem Versorger (Übertragungs- und Verteilnetzbetreiber) innerhalb von 30 Tagen nach der Installation gemeldet werden. Versorger dürfen keine vorherige Genehmigung, keinen Netzanschlussantrag und keine Gebühren verlangen und keine zusätzlichen Steuerungen oder Geräte über das im System Integrierte hinaus fordern. PV Tech berichtet außerdem, dass Wechselrichter bei Stromunterbrechung innerhalb von 0,2 Sekunden abschalten müssen und dass die Module nach UL 3700 oder einem vergleichbaren Standard eines national anerkannten Prüflabors zertifiziert sein müssen.',
          'Laut Sekundärquellen sind Steckersolar-Systeme nicht für Maines Net Energy Billing berechtigt. Den veröffentlichten Gesetzestext konnten wir nicht abrufen; bestätigen Sie die Details daher beim Parlament von Maine (35-A MRSA §3475). Mietverträge, HOA-Vereinbarungen und örtliche Vorschriften können weitere Grenzen setzen. Diese Seite ist eine allgemeine Information und keine Rechtsberatung.',
        ],
        columns: ['Feld', 'Maine LD 1730'],
        rows: [
          { 'Feld': 'Unterzeichnet / In Kraft', 'Maine LD 1730': '6. Apr. 2026 / Mitte Juli 2026' },
          { 'Feld': 'Leistungsobergrenze', 'Maine LD 1730': '1.200 W' },
          { 'Feld': 'Ohne Elektriker', 'Maine LD 1730': 'Bis 420 W' },
          { 'Feld': 'Meldung an Versorger', 'Maine LD 1730': 'Über 420 W: binnen 30 Tagen' },
          { 'Feld': 'Net Energy Billing', 'Maine LD 1730': 'Laut Berichten nicht berechtigt' },
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
          '<strong>Laut PV Tech verweist Maines Gesetz auf UL 3700 oder einen vergleichbaren Standard eines national anerkannten Prüflabors; die Zertifizierung von Komplettsystemen war in den von uns geprüften Quellen weiterhin unbestätigt.</strong> UL Solutions kündigte am 8. Januar 2026 sein auf UL 3700 basierendes Prüf- und Zertifizierungsprogramm an. Die Berichte über zertifizierte Produkte widersprechen sich (Details auf der Utah-Seite); prüfen Sie daher das öffentliche Verzeichnis der Zertifizierungsstelle für das konkrete Produkt. PromptQuorum hat keine Produktzertifizierung verifiziert.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Siehe die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> – reine Produktlinks, kein Hinweis darauf, dass ein bestimmtes Kit in Maine zertifiziert oder verfügbar ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Maine',
        faqs: [
          {
            q: 'Kann ich in Maine ein 1.200-W-Balkonsolar-Set selbst installieren?',
            a: 'Laut PV Tech nein: Systeme über 420 W müssen von einer staatlich lizenzierten Elektrofachkraft installiert und innerhalb von 30 Tagen dem Versorger gemeldet werden; Systeme bis 420 W kann der Kunde selbst installieren.',
          },
          {
            q: 'Kann meine HOA in Maine Balkonsolar verbieten?',
            a: 'Möglicherweise. Die von uns geprüften Quellen beschreiben keine HOA- oder Vermieterregelungen in LD 1730; prüfen Sie daher Ihren Mietvertrag oder Ihre HOA-Satzung gesondert. Wie ein anderer Bundesstaat das handhabt, sehen Sie im <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Muss in Maine der Versorger informiert werden?',
            a: 'Laut PV Tech nur bei Systemen über 420 W, innerhalb von 30 Tagen nach der Installation. Versorger dürfen keine vorherige Genehmigung, keinen Netzanschlussantrag und keine Gebühren verlangen.',
          },
          {
            q: 'Werde ich in Maine für überschüssigen Strom bezahlt?',
            a: 'Rechnen Sie nicht damit. Sekundärquellen berichten, dass Steckersolar-Systeme nicht für Maines Net Energy Billing berechtigt sind; prüfen Sie den Gesetzestext oder fragen Sie Ihren Versorger.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Parlament von Maine: LD 1730 (SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — Titel, Einbringer, Unterzeichnung am 6. April 2026',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — Bericht vom April 2026 zu den Stufen 420 W / 1.200 W, Meldung an den Versorger und Zertifizierung',
          '[UL Solutions: Prüf- und Zertifizierungsrahmen für Steckersolar](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — auf UL 3700 basierendes Programm, angekündigt am 8. Januar 2026',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal dans le Maine ?',
    dateModified: '2026-11-20',
    seoTitle: 'Solaire de balcon légal au Maine ? LD 1730 | Prompt Bites',
    metaDescription: 'Maine LD 1730, signée le 6 avril 2026 : solaire branchable jusqu\'à 1 200 W ; électricien et notification au-delà de 420 W (PV Tech). Pas un avis juridique.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le Maine ?',
        answer: 'En vigueur. La loi LD 1730 du Maine (Chapter 644) a été signée le 6 avril 2026 et est entrée en vigueur à la mi-juillet 2026 ; les sources donnent le 15 ou le 29 juillet. Selon PV Tech, elle autorise les systèmes branchables jusqu\'à 1 200 W ; au-delà de 420 W, l\'installation doit être réalisée par un électricien agréé et signalée au fournisseur sous 30 jours.',
        bullets: [
          'LD 1730 signée le 6 avril 2026 (Législature du Maine : Chapter 644) ; en vigueur à la mi-juillet 2026 selon des sources secondaires',
          'Deux paliers selon PV Tech : jusqu\'à 420 W sans électricien ; de 420 W à 1 200 W, installation par un électricien agréé avec notification au fournisseur',
          'Selon PV Tech, une certification UL 3700 ou une norme comparable d\'un laboratoire d\'essai reconnu au niveau national est exigée ; les systèmes complets certifiés restaient non confirmés dans les sources consultées',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi LD 1730 du Maine a été signée le 6 avril 2026 (Chapter 644) et est entrée en vigueur à la mi-juillet 2026 ; les dates annoncées varient entre le 15 et le 29 juillet.',
          'Selon PV Tech : jusqu\'à 1 200 W ; au-delà de 420 W, un électricien agréé est requis et une notification au fournisseur doit être faite sous 30 jours après l\'installation.',
          'Selon PV Tech, le fournisseur ne peut exiger ni approbation préalable, ni demande de raccordement, ni frais.',
          'Selon PV Tech, une certification UL 3700 ou une norme comparable est exigée ; vérifiez toute mention de produit dans l\'annuaire de l\'organisme de certification.',
        ],
      },
      body1: {
        title: 'Que prévoit la loi LD 1730 dans le Maine ?',
        content: [
          '<strong>La loi LD 1730 du Maine instaure deux paliers selon la taille du système, d\'après le reportage de PV Tech d\'avril 2026.</strong> Les systèmes branchables jusqu\'à 420 W peuvent être installés par le client sur une prise standard ; au-delà de 420 W, jusqu\'au plafond de 1 200 W, l\'installation doit être réalisée par un électricien agréé par l\'État et signalée au gestionnaire de réseau de transport et de distribution dans les 30 jours suivant l\'installation. Le fournisseur ne peut exiger ni approbation préalable, ni demande de raccordement, ni frais, ni commandes ou équipements supplémentaires au-delà de ce qui est intégré au système. PV Tech indique aussi que les onduleurs doivent se couper en 0,2 seconde en cas de coupure de courant et que les panneaux doivent être certifiés selon UL 3700 ou une norme comparable d\'un laboratoire d\'essai reconnu au niveau national.',
          'Selon des sources secondaires, les systèmes branchables ne sont pas éligibles au net energy billing du Maine. Nous n\'avons pas pu récupérer le texte de loi publié ; confirmez donc les détails auprès de la Législature du Maine (35-A MRSA §3475). Baux, règlements de copropriété et règles locales peuvent ajouter des limites. Cette page est une information générale, pas un conseil juridique.',
        ],
        columns: ['Champ', 'Maine LD 1730'],
        rows: [
          { 'Champ': 'Signature / Entrée en vigueur', 'Maine LD 1730': '6 avr. 2026 / mi-juil. 2026' },
          { 'Champ': 'Plafond de puissance', 'Maine LD 1730': '1 200 W' },
          { 'Champ': 'Sans électricien', 'Maine LD 1730': 'Jusqu\'à 420 W' },
          { 'Champ': 'Notification au fournisseur', 'Maine LD 1730': 'Au-delà de 420 W : sous 30 jours' },
          { 'Champ': 'Net energy billing', 'Maine LD 1730': 'Signalé comme non éligible' },
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
          '<strong>Selon PV Tech, la loi du Maine renvoie à UL 3700 ou à une norme comparable d\'un laboratoire d\'essai reconnu au niveau national ; la certification de systèmes complets restait non confirmée dans les sources consultées.</strong> UL Solutions a annoncé le 8 janvier 2026 son programme d\'essais et de certification fondé sur UL 3700. Les informations sur les produits certifiés divergent (voir la page de l\'Utah) ; consultez donc l\'annuaire public de l\'organisme de certification pour le produit concerné. PromptQuorum n\'a vérifié aucune certification de produit.',
          '<strong>Prêt à comparer du matériel concret ?</strong> Consultez les <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">sélections actuelles de batteries domestiques américaines pour le solaire de balcon</a> ou la <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparaison de l\'écosystème EcoFlow vs. Anker vs. Zendure</a> — de simples liens produits, et non une affirmation selon laquelle un kit spécifique serait certifié ou disponible dans le Maine aujourd\'hui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le Maine',
        faqs: [
          {
            q: 'Puis-je installer moi-même un kit de solaire de balcon de 1 200 W dans le Maine ?',
            a: 'Selon PV Tech, non : les systèmes de plus de 420 W doivent être installés par un électricien agréé par l\'État et signalés au fournisseur sous 30 jours, tandis que les systèmes jusqu\'à 420 W peuvent être installés par le client.',
          },
          {
            q: 'Ma copropriété (HOA) dans le Maine peut-elle interdire le solaire de balcon ?',
            a: 'Peut-être. Les sources consultées ne décrivent pas de dispositions sur les HOA ou les bailleurs dans LD 1730 ; vérifiez donc séparément votre bail ou le règlement de copropriété. Pour voir comment un autre État traite la question, consultez la page <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi du Colorado sur le solaire de balcon</a>.',
          },
          {
            q: 'Faut-il informer le fournisseur d\'électricité dans le Maine ?',
            a: 'Selon PV Tech, uniquement pour les systèmes de plus de 420 W, dans les 30 jours suivant l\'installation. Le fournisseur ne peut exiger ni approbation préalable, ni demande de raccordement, ni frais.',
          },
          {
            q: 'Suis-je rémunéré pour l\'électricité excédentaire dans le Maine ?',
            a: 'Ne comptez pas dessus. Des sources secondaires indiquent que les systèmes branchables ne sont pas éligibles au net energy billing du Maine ; consultez le texte de loi ou interrogez votre fournisseur.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Législature du Maine : LD 1730 (SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — titre, auteur, signature le 6 avril 2026',
          '[PV Tech : Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — reportage d\'avril 2026 sur les paliers 420 W / 1 200 W, la notification et la certification',
          '[UL Solutions : cadre d\'essais et de certification du solaire branchable](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programme fondé sur UL 3700, annoncé le 8 janvier 2026',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ja.webp',
    title: 'メイン州でバルコニーソーラーは合法ですか?',
    dateModified: '2026-11-20',
    seoTitle: 'メイン州バルコニーソーラー合法？ | Prompt Bites',
    metaDescription: 'メイン州LD 1730は2026年4月6日に署名。1,200Wまでのプラグイン式ソーラー。420W超は電気技師と電力会社への通知が必要（PV Tech）。法的助言ではありません。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'メイン州でバルコニーソーラーは合法ですか?',
        answer: '施行済みです。メイン州のLD 1730（Chapter 644）は2026年4月6日に署名され、2026年7月中旬に施行されました（情報源により7月15日または7月29日）。PV Techによると、最大1,200Wのプラグイン式システムが認められ、420Wを超えるシステムは免許を持つ電気技師が設置し、30日以内に電力会社へ報告する必要があります。',
        bullets: [
          'LD 1730は2026年4月6日に署名（メイン州議会：Chapter 644）。二次情報によると施行は2026年7月中旬',
          'PV Techによる2段階の区分：420Wまでは電気技師不要。420W超〜1,200Wは免許を持つ電気技師が設置し、電力会社へ通知',
          'PV Techによると、UL 3700または全国的に認められた試験機関の同等規格による認証が必要。認証済みの完成システムは、確認した情報源では未確認でした',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'メイン州のLD 1730は2026年4月6日に署名され（Chapter 644）、2026年7月中旬に施行されました。報じられている施行日は7月15日と7月29日で分かれています。',
          'PV Techによると、上限は1,200W。420W超は免許を持つ電気技師が必要で、設置後30日以内に電力会社への通知が必要です。',
          'PV Techによると、電力会社は事前承認、系統連系の申請、手数料を要求できません。',
          'PV Techによると、UL 3700または同等規格による認証が必要です。製品の掲載は認証機関自身のディレクトリで確認してください。',
        ],
      },
      body1: {
        title: 'メイン州のLD 1730は何を定めていますか?',
        content: [
          '<strong>メイン州のLD 1730は、PV Techの2026年4月の報道によると、システムの大きさに応じた2段階の仕組みを定めています。</strong>420Wまでのプラグイン式システムは、利用者が標準的なコンセントに接続して設置できます。420Wを超え上限の1,200Wまでのシステムは、州の免許を持つ電気技師が設置し、設置後30日以内に送配電事業者へ報告する必要があります。電力会社は、事前承認、系統連系の申請、手数料、システムに組み込まれたもの以外の追加の制御装置や機器を要求できません。PV Techはまた、インバーターは電力が途絶えた場合に0.2秒以内に停止する必要があり、パネルはUL 3700または全国的に認められた試験機関の同等規格で認証されている必要があると報じています。',
          '二次情報によると、プラグイン式システムはメイン州のネット・エネルギー・ビリング（net energy billing）の対象外とされています。公布された法律本文は取得できなかったため、詳細はメイン州議会（35-A MRSA §3475）でご確認ください。賃貸契約、HOAの合意、地域の規則によって、さらに制限が加わる場合があります。このページは一般的な情報であり、法的助言ではありません。',
        ],
        columns: ['項目', 'Maine LD 1730'],
        rows: [
          { '項目': '署名／施行', 'Maine LD 1730': '2026年4月6日／2026年7月中旬' },
          { '項目': '出力上限', 'Maine LD 1730': '1,200W' },
          { '項目': '電気技師なし', 'Maine LD 1730': '420Wまで' },
          { '項目': '電力会社への通知', 'Maine LD 1730': '420W超：30日以内' },
          { '項目': 'ネット・エネルギー・ビリング', 'Maine LD 1730': '対象外と報じられている' },
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
          '<strong>PV Techによると、メイン州の法律はUL 3700または全国的に認められた試験機関の同等規格に言及しており、完成システムの認証は、確認した情報源では未確認のままでした。</strong>UL Solutionsは2026年1月8日、UL 3700に基づく試験・認証プログラムを発表しました。認証済み製品に関する報道は食い違っています（詳細はユタ州のページを参照）。個別の製品については認証機関の公開ディレクトリを確認してください。PromptQuorumは製品の認証を確認していません。',
          '<strong>実際のハードウェアを比較する準備はできましたか?</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国製ホームバッテリーの最新おすすめ</a>、または<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください——これらは単なる製品リンクであり、特定のキットがメイン州で認証済みまたは入手可能であることを示すものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'メイン州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'メイン州で1,200Wのバルコニーソーラーキットを自分で設置できますか？',
            a: 'PV Techによると、できません。420Wを超えるシステムは州の免許を持つ電気技師が設置し、30日以内に電力会社へ報告する必要があります。420Wまでは利用者が設置できます。',
          },
          {
            q: 'メイン州のHOAはバルコニーソーラーを禁止できますか？',
            a: '可能性があります。確認した情報源にはLD 1730のHOAや家主に関する規定の記述がないため、賃貸契約やHOAの規約を別途確認してください。他の州の扱いは<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>のページをご覧ください。',
          },
          {
            q: 'メイン州では電力会社への通知が必要ですか？',
            a: 'PV Techによると、420Wを超えるシステムのみ、設置後30日以内に必要です。電力会社は事前承認、系統連系の申請、手数料を要求できません。',
          },
          {
            q: 'メイン州で余剰電力に対する支払いはありますか？',
            a: '期待しないでください。二次情報によると、プラグイン式システムはメイン州のネット・エネルギー・ビリングの対象外とされています。法律本文を確認するか、電力会社にお問い合わせください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[メイン州議会：LD 1730（SP 676）、Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — 名称、提出者、2026年4月6日の署名',
          '[PV Tech：Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — 420W／1,200Wの区分、電力会社への通知、認証に関する2026年4月の報道',
          '[UL Solutions：プラグイン式ソーラーの試験・認証の枠組み](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700に基づくプログラム（2026年1月8日発表）',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-zh.webp',
    title: '缅因州的阳台太阳能合法吗?',
    dateModified: '2026-11-20',
    seoTitle: '缅因州阳台太阳能合法吗？ | Prompt Bites',
    metaDescription: '缅因州LD 1730于2026年4月6日签署：1,200瓦以内插电式太阳能；超过420瓦须电工安装并通知电力公司（PV Tech）。本文非法律意见。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '缅因州的阳台太阳能合法吗?',
        answer: '已生效。缅因州LD 1730法案（Chapter 644）于2026年4月6日签署，并于2026年7月中旬生效（资料给出7月15日或7月29日）。据PV Tech报道，该法允许最高1,200瓦的插电式系统；超过420瓦的系统须由持证电工安装，并在30天内向电力公司报告。',
        bullets: [
          'LD 1730于2026年4月6日签署（缅因州议会：Chapter 644）；据二手资料，2026年7月中旬生效',
          '据PV Tech，分两档：420瓦以内无需电工；超过420瓦至1,200瓦须由持证电工安装并通知电力公司',
          '据PV Tech，要求通过UL 3700或全国认可检测实验室的同类标准认证；在我们查阅的资料中，经认证的完整系统仍未得到确认',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '缅因州LD 1730于2026年4月6日签署（Chapter 644），2026年7月中旬生效；报道的生效日期在7月15日与7月29日之间不一。',
          '据PV Tech：上限1,200瓦；超过420瓦需持证电工，并须在安装后30天内通知电力公司。',
          '据PV Tech，电力公司不得要求事先批准、并网申请或收费。',
          '据PV Tech，要求UL 3700或同类标准认证；请在认证机构自己的名录中核实产品条目。',
        ],
      },
      body1: {
        title: '缅因州LD 1730法案有哪些要求?',
        content: [
          '<strong>据PV Tech 2026年4月的报道，缅因州LD 1730按系统大小分为两档。</strong>420瓦以内的插电式系统可由用户自行接入标准插座；超过420瓦、至1,200瓦上限的系统，必须由州持证电工安装，并在安装后30天内向输配电公司报告。电力公司不得要求事先批准、并网申请或收费，也不得要求系统内置之外的额外控制装置或设备。PV Tech还报道称，逆变器在断电时须在0.2秒内关闭，面板须通过UL 3700或全国认可检测实验室的同类标准认证。',
          '据二手资料，插电式系统不适用缅因州的净能源计费（net energy billing）。我们未能获取正式公布的法律文本，因此请向缅因州议会（35-A MRSA §3475）核实细节。租约、HOA协议和当地规定可能附加限制。本页为一般性信息，不构成法律意见。',
        ],
        columns: ['项目', 'Maine LD 1730'],
        rows: [
          { '项目': '签署/生效', 'Maine LD 1730': '2026年4月6日/2026年7月中旬' },
          { '项目': '功率上限', 'Maine LD 1730': '1,200瓦' },
          { '项目': '无需电工', 'Maine LD 1730': '最高420瓦' },
          { '项目': '通知电力公司', 'Maine LD 1730': '超过420瓦：30天内' },
          { '项目': '净能源计费', 'Maine LD 1730': '据报道不适用' },
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
          '<strong>据PV Tech，缅因州的法律提及UL 3700或全国认可检测实验室的同类标准；在我们查阅的资料中，完整系统的认证仍未得到确认。</strong>UL Solutions于2026年1月8日宣布了基于UL 3700的测试与认证项目。关于已认证产品的报道互相矛盾（详见犹他州页面），请在认证机构的公开名录中核查具体产品。PromptQuorum未核实任何产品认证。',
          '<strong>准备好比较实际硬件了吗?</strong> 参见<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统比较</a>——这些只是产品链接,并不代表任何特定套件已在缅因州获得认证或可以购买。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于缅因州阳台太阳能的快速解答',
        faqs: [
          {
            q: '在缅因州我可以自己安装1,200瓦的阳台太阳能套件吗？',
            a: '据PV Tech，不可以：超过420瓦的系统必须由州持证电工安装，并在30天内向电力公司报告；420瓦以内的系统可由用户自行安装。',
          },
          {
            q: '缅因州的HOA可以禁止阳台太阳能吗？',
            a: '有可能。我们查阅的资料未提到LD 1730中有关HOA或房东的规定，请另行查看租约或HOA规约。如需了解其他州如何处理，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法</a>页面。',
          },
          {
            q: '在缅因州需要通知电力公司吗？',
            a: '据PV Tech，仅超过420瓦的系统需要，须在安装后30天内通知。电力公司不得要求事先批准、并网申请或收费。',
          },
          {
            q: '在缅因州多余电量能获得付款吗？',
            a: '不要指望。二手资料称插电式系统不适用缅因州的净能源计费；请查阅法律文本或咨询您的电力公司。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[缅因州议会：LD 1730（SP 676），Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — 标题、提案人、2026年4月6日签署',
          '[PV Tech：Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — 2026年4月关于420瓦/1,200瓦分档、通知和认证的报道',
          '[UL Solutions：插电式太阳能测试与认证框架](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — 基于UL 3700的项目（2026年1月8日宣布）',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Maine?',
    dateModified: '2026-11-20',
    seoTitle: '¿Es legal el solar de balcón en Maine? | Prompt Bites',
    metaDescription: 'Maine LD 1730, firmada el 6 de abril de 2026: solar enchufable hasta 1200 W; electricista y aviso sobre 420 W (PV Tech). No es asesoría legal.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Maine?',
        answer: 'En vigor. La ley LD 1730 de Maine (Chapter 644) se firmó el 6 de abril de 2026 y entró en vigor a mediados de julio de 2026; las fuentes dan el 15 o el 29 de julio. Según PV Tech, permite sistemas enchufables de hasta 1200 W; los sistemas de más de 420 W deben ser instalados por un electricista con licencia y notificados a la eléctrica en un plazo de 30 días.',
        bullets: [
          'LD 1730 firmada el 6 de abril de 2026 (Legislatura de Maine: Chapter 644); en vigor a mediados de julio de 2026 según fuentes secundarias',
          'Dos niveles según PV Tech: hasta 420 W sin electricista; de más de 420 W hasta 1200 W instalados por un electricista con licencia, con aviso a la eléctrica',
          'Según PV Tech se exige certificación UL 3700 o una norma comparable de un laboratorio de pruebas reconocido a nivel nacional; los sistemas completos certificados seguían sin confirmarse en las fuentes que revisamos',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley LD 1730 de Maine se firmó el 6 de abril de 2026 (Chapter 644) y entró en vigor a mediados de julio de 2026; las fechas citadas varían entre el 15 y el 29 de julio.',
          'Según PV Tech: hasta 1200 W; por encima de 420 W hace falta un electricista con licencia y un aviso a la eléctrica en un plazo de 30 días tras la instalación.',
          'Según PV Tech, la eléctrica no puede exigir aprobación previa, solicitud de interconexión ni tarifas.',
          'Según PV Tech se exige certificación UL 3700 o una norma comparable; verifica cualquier ficha de producto en el directorio del certificador.',
        ],
      },
      body1: {
        title: '¿Qué exige la LD 1730 en Maine?',
        content: [
          '<strong>La ley LD 1730 de Maine establece dos niveles según el tamaño del sistema, según el informe de PV Tech de abril de 2026.</strong> Los sistemas enchufables de hasta 420 W puede instalarlos el cliente en una toma estándar; los de más de 420 W, hasta el límite de 1200 W, deben ser instalados por un electricista con licencia estatal y notificados a la empresa de transmisión y distribución en un plazo de 30 días desde la instalación. La eléctrica no puede exigir aprobación previa, solicitud de interconexión ni tarifas, ni controles o equipos adicionales a los integrados en el sistema. PV Tech indica además que los inversores deben apagarse en 0,2 segundos si se interrumpe el suministro y que los paneles deben estar certificados según UL 3700 o una norma comparable de un laboratorio de pruebas reconocido a nivel nacional.',
          'Según fuentes secundarias, los sistemas enchufables no son elegibles para el net energy billing de Maine. No pudimos obtener el texto publicado de la ley, así que confirma los detalles con la Legislatura de Maine (35-A MRSA §3475). Los contratos de alquiler, los acuerdos de HOA y las normas locales pueden añadir límites. Esta página es información general, no asesoría jurídica.',
        ],
        columns: ['Campo', 'Maine LD 1730'],
        rows: [
          { 'Campo': 'Firma / Entrada en vigor', 'Maine LD 1730': '6 abr. 2026 / mediados jul. 2026' },
          { 'Campo': 'Límite de potencia', 'Maine LD 1730': '1200 W' },
          { 'Campo': 'Sin electricista', 'Maine LD 1730': 'Hasta 420 W' },
          { 'Campo': 'Aviso a la eléctrica', 'Maine LD 1730': 'Más de 420 W: en 30 días' },
          { 'Campo': 'Net energy billing', 'Maine LD 1730': 'Según informes, no elegible' },
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
          '<strong>Según PV Tech, la ley de Maine remite a UL 3700 o a una norma comparable de un laboratorio de pruebas reconocido a nivel nacional; la certificación de sistemas completos seguía sin confirmarse en las fuentes que revisamos.</strong> UL Solutions anunció el 8 de enero de 2026 su programa de pruebas y certificación basado en UL 3700. Las noticias sobre productos certificados se contradicen (consulta la página de Utah); comprueba por tanto el directorio público del certificador para el producto concreto. PromptQuorum no ha verificado ninguna certificación de producto.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas de EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — enlaces de producto simples, no una afirmación de que un kit específico esté certificado o disponible en Maine hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la energía solar de balcón en Maine',
        faqs: [
          {
            q: '¿Puedo instalar yo mismo un kit de solar de balcón de 1200 W en Maine?',
            a: 'Según PV Tech, no: los sistemas de más de 420 W deben ser instalados por un electricista con licencia estatal y notificados a la eléctrica en 30 días, mientras que los de hasta 420 W puede instalarlos el cliente.',
          },
          {
            q: '¿Puede mi HOA en Maine prohibir la energía solar de balcón?',
            a: 'Posiblemente. Las fuentes que revisamos no describen disposiciones sobre HOA o arrendadores en LD 1730, así que revisa por separado tu contrato de alquiler o el reglamento de la HOA. Para ver cómo lo trata otro estado, consulta la página <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Hay que avisar a la eléctrica en Maine?',
            a: 'Según PV Tech, solo en los sistemas de más de 420 W, en un plazo de 30 días desde la instalación. La eléctrica no puede exigir aprobación previa, solicitud de interconexión ni tarifas.',
          },
          {
            q: '¿Me pagan por el excedente en Maine?',
            a: 'No cuentes con ello. Fuentes secundarias informan de que los sistemas enchufables no son elegibles para el net energy billing de Maine; consulta el texto de la ley o pregunta a tu eléctrica.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Legislatura de Maine: LD 1730 (SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — título, patrocinadora, firma el 6 de abril de 2026',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — informe de abril de 2026 sobre los niveles de 420 W / 1200 W, el aviso y la certificación',
          '[UL Solutions: marco de pruebas y certificación para solar enchufable](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programa basado en UL 3700, anunciado el 8 de enero de 2026',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal no Maine?',
    dateModified: '2026-11-20',
    seoTitle: 'Solar de varanda é legal em Maine? LD 1730 | Prompt Bites',
    metaDescription: 'Maine LD 1730, sancionada em 6 de abril de 2026: solar plug-in até 1.200 W; eletricista e aviso acima de 420 W (PV Tech). Não é aconselhamento jurídico.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal no Maine?',
        answer: 'Em vigor. A lei LD 1730 de Maine (Chapter 644) foi sancionada em 6 de abril de 2026 e entrou em vigor em meados de julho de 2026; as fontes citam 15 ou 29 de julho. Segundo a PV Tech, ela permite sistemas plug-in de até 1.200 W; sistemas acima de 420 W devem ser instalados por um eletricista licenciado e comunicados à concessionária em até 30 dias.',
        bullets: [
          'LD 1730 sancionada em 6 de abril de 2026 (Legislatura de Maine: Chapter 644); em vigor em meados de julho de 2026 segundo fontes secundárias',
          'Dois níveis segundo a PV Tech: até 420 W sem eletricista; acima de 420 W e até 1.200 W instalados por eletricista licenciado, com aviso à concessionária',
          'Segundo a PV Tech, exige-se certificação UL 3700 ou norma comparável de um laboratório de ensaios reconhecido nacionalmente; sistemas completos certificados continuavam sem confirmação nas fontes que consultamos',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A lei LD 1730 de Maine foi sancionada em 6 de abril de 2026 (Chapter 644) e entrou em vigor em meados de julho de 2026; as datas citadas variam entre 15 e 29 de julho.',
          'Segundo a PV Tech: até 1.200 W; acima de 420 W é preciso um eletricista licenciado e um aviso à concessionária em até 30 dias após a instalação.',
          'Segundo a PV Tech, a concessionária não pode exigir aprovação prévia, pedido de interconexão nem taxas.',
          'Segundo a PV Tech, exige-se certificação UL 3700 ou norma comparável; verifique qualquer registro de produto no diretório do certificador.',
        ],
      },
      body1: {
        title: 'O que a LD 1730 exige no Maine?',
        content: [
          '<strong>A lei LD 1730 de Maine estabelece dois níveis conforme o tamanho do sistema, segundo o relatório da PV Tech de abril de 2026.</strong> Sistemas plug-in de até 420 W podem ser instalados pelo próprio cliente em uma tomada padrão; sistemas acima de 420 W, até o limite de 1.200 W, devem ser instalados por um eletricista licenciado pelo estado e comunicados à empresa de transmissão e distribuição em até 30 dias após a instalação. A concessionária não pode exigir aprovação prévia, pedido de interconexão nem taxas, nem controles ou equipamentos adicionais além dos integrados ao sistema. A PV Tech também informa que os inversores devem desligar em 0,2 segundo se houver interrupção de energia e que os painéis devem ser certificados conforme a UL 3700 ou norma comparável de um laboratório de ensaios reconhecido nacionalmente.',
          'Segundo fontes secundárias, sistemas plug-in não são elegíveis ao net energy billing de Maine. Não conseguimos obter o texto publicado da lei; confirme os detalhes com a Legislatura de Maine (35-A MRSA §3475). Contratos de locação, acordos de HOA e regras locais podem acrescentar limites. Esta página é informação geral, não aconselhamento jurídico.',
        ],
        columns: ['Campo', 'Maine LD 1730'],
        rows: [
          { 'Campo': 'Sanção / Entrada em vigor', 'Maine LD 1730': '6 abr. 2026 / meados jul. 2026' },
          { 'Campo': 'Limite de potência', 'Maine LD 1730': '1.200 W' },
          { 'Campo': 'Sem eletricista', 'Maine LD 1730': 'Até 420 W' },
          { 'Campo': 'Aviso à concessionária', 'Maine LD 1730': 'Acima de 420 W: em 30 dias' },
          { 'Campo': 'Net energy billing', 'Maine LD 1730': 'Relatado como não elegível' },
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
          '<strong>Segundo a PV Tech, a lei de Maine remete à UL 3700 ou a norma comparável de um laboratório de ensaios reconhecido nacionalmente; a certificação de sistemas completos continuava sem confirmação nas fontes que consultamos.</strong> A UL Solutions anunciou em 8 de janeiro de 2026 seu programa de ensaios e certificação baseado na UL 3700. Os relatos sobre produtos certificados divergem (veja a página de Utah); consulte, portanto, o diretório público do certificador para o produto específico. A PromptQuorum não verificou nenhuma certificação de produto.',
          '<strong>Pronto para comparar equipamentos reais?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">opções atuais de baterias domésticas dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — links diretos de produtos, não uma afirmação de que algum kit específico é certificado ou está disponível no Maine hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda no Maine',
        faqs: [
          {
            q: 'Posso instalar sozinho um kit de energia solar de varanda de 1.200 W em Maine?',
            a: 'Segundo a PV Tech, não: sistemas acima de 420 W devem ser instalados por um eletricista licenciado pelo estado e comunicados à concessionária em até 30 dias, enquanto sistemas de até 420 W podem ser instalados pelo cliente.',
          },
          {
            q: 'Minha HOA em Maine pode proibir energia solar de varanda?',
            a: 'Possivelmente. As fontes que consultamos não descrevem disposições sobre HOA ou locadores na LD 1730; confira separadamente seu contrato de locação ou o regulamento da HOA. Para ver como outro estado trata o assunto, veja a página <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'É preciso avisar a concessionária em Maine?',
            a: 'Segundo a PV Tech, apenas para sistemas acima de 420 W, em até 30 dias após a instalação. A concessionária não pode exigir aprovação prévia, pedido de interconexão nem taxas.',
          },
          {
            q: 'Recebo pelo excedente de energia em Maine?',
            a: 'Não conte com isso. Fontes secundárias informam que sistemas plug-in não são elegíveis ao net energy billing de Maine; consulte o texto da lei ou pergunte à sua concessionária.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Legislatura de Maine: LD 1730 (SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — título, autora, sanção em 6 de abril de 2026',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — relatório de abril de 2026 sobre os níveis de 420 W / 1.200 W, o aviso e a certificação',
          '[UL Solutions: estrutura de ensaios e certificação para solar plug-in](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — programa baseado na UL 3700, anunciado em 8 de janeiro de 2026',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في ولاية مين؟',
    dateModified: '2026-11-20',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في مين؟ LD 1730',
    metaDescription: 'قانون LD 1730 في مين وُقّع في 6 أبريل 2026: طاقة شمسية قابلة للتوصيل حتى 1,200 واط؛ كهربائي وإخطار فوق 420 واط (PV Tech). ليست استشارة قانونية.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في ولاية مين؟',
        answer: 'ساري المفعول. وُقّع قانون LD 1730 في مين (Chapter 644) في 6 أبريل 2026 وبدأ سريانه في منتصف يوليو 2026؛ وتذكر المصادر 15 أو 29 يوليو. وبحسب PV Tech، يسمح بأنظمة قابلة للتوصيل حتى 1,200 واط؛ ويجب أن يركّب الأنظمة التي تزيد على 420 واط كهربائي مرخّص وأن يُبلَّغ عنها لشركة الكهرباء خلال 30 يومًا.',
        bullets: [
          'وُقّع LD 1730 في 6 أبريل 2026 (المجلس التشريعي في مين: Chapter 644)؛ وسرى في منتصف يوليو 2026 بحسب مصادر ثانوية',
          'مستويان بحسب PV Tech: حتى 420 واط دون كهربائي؛ وفوق 420 واط وحتى 1,200 واط بتركيب كهربائي مرخّص مع إخطار شركة الكهرباء',
          'بحسب PV Tech، يُشترط الاعتماد وفق UL 3700 أو معيار مماثل من مختبر اختبار معترف به وطنيًا؛ وظلت الأنظمة الكاملة المعتمدة غير مؤكدة في المصادر التي راجعناها',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'وُقّع LD 1730 في مين في 6 أبريل 2026 (Chapter 644) وسرى في منتصف يوليو 2026؛ وتتفاوت التواريخ المذكورة بين 15 و29 يوليو.',
          'بحسب PV Tech: حتى 1,200 واط؛ وما فوق 420 واط يتطلب كهربائيًا مرخّصًا وإخطارًا لشركة الكهرباء خلال 30 يومًا من التركيب.',
          'بحسب PV Tech، لا يجوز لشركة الكهرباء اشتراط موافقة مسبقة أو طلب ربط أو رسوم.',
          'بحسب PV Tech، يُشترط الاعتماد وفق UL 3700 أو معيار مماثل؛ فتحقق من إدراج المنتج في دليل جهة الاعتماد نفسها.',
        ],
      },
      body1: {
        title: 'ماذا يتطلب قانون LD 1730 في ولاية مين؟',
        content: [
          '<strong>يضع LD 1730 في مين نظامًا من مستويين بحسب حجم النظام، وفق تقرير PV Tech في أبريل 2026.</strong> يمكن للعميل تركيب الأنظمة القابلة للتوصيل حتى 420 واط بنفسه في مقبس قياسي؛ أما الأنظمة التي تزيد على 420 واط وحتى حد 1,200 واط فيجب أن يركّبها كهربائي مرخّص من الولاية وأن يُبلَّغ عنها لشركة النقل والتوزيع خلال 30 يومًا من التركيب. ولا يجوز لشركة الكهرباء اشتراط موافقة مسبقة أو طلب ربط أو رسوم، ولا ضوابط أو معدات إضافية فوق ما هو مدمج في النظام. وتفيد PV Tech أيضًا بأن العاكسات يجب أن تُغلق خلال 0.2 ثانية عند انقطاع التيار وأن الألواح يجب أن تكون معتمدة وفق UL 3700 أو معيار مماثل من مختبر اختبار معترف به وطنيًا.',
          'بحسب مصادر ثانوية، لا تؤهَّل الأنظمة القابلة للتوصيل لبرنامج الفوترة الصافية للطاقة (net energy billing) في مين. لم نتمكن من الحصول على النص المنشور للقانون، فتأكد من التفاصيل لدى المجلس التشريعي في مين (35-A MRSA §3475). وقد تضيف عقود الإيجار واتفاقات الـHOA والقواعد المحلية قيودًا أخرى. هذه الصفحة معلومات عامة وليست استشارة قانونية.',
        ],
        columns: ['الحقل', 'Maine LD 1730'],
        rows: [
          { 'الحقل': 'التوقيع / السريان', 'Maine LD 1730': '6 أبريل 2026 / منتصف يوليو 2026' },
          { 'الحقل': 'الحد الأقصى للقدرة', 'Maine LD 1730': '1,200 واط' },
          { 'الحقل': 'دون كهربائي', 'Maine LD 1730': 'حتى 420 واط' },
          { 'الحقل': 'إخطار شركة الكهرباء', 'Maine LD 1730': 'فوق 420 واط: خلال 30 يومًا' },
          { 'الحقل': 'الفوترة الصافية للطاقة', 'Maine LD 1730': 'غير مؤهلة بحسب التقارير' },
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
          '<strong>بحسب PV Tech، يشير قانون مين إلى UL 3700 أو معيار مماثل من مختبر اختبار معترف به وطنيًا؛ وظل اعتماد الأنظمة الكاملة غير مؤكد في المصادر التي راجعناها.</strong> أعلنت UL Solutions في 8 يناير 2026 برنامجها للاختبار والاعتماد المستند إلى UL 3700. وتتضارب التقارير عن المنتجات المعتمدة (انظر صفحة يوتا للتفاصيل)، لذا راجع الدليل العام لجهة الاعتماد للمنتج المعني. ولم تتحقق PromptQuorum من أي اعتماد لمنتج.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> راجع <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">الاختيارات الحالية لبطاريات المنازل الأمريكية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow مقابل Anker مقابل Zendure</a> — وهي مجرد روابط منتجات، وليست ادعاءً بأن أي طقم معين معتمد أو متوفر في ولاية مين اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في ولاية مين',
        faqs: [
          {
            q: 'هل يمكنني تركيب طقم طاقة شمسية للشرفات بقدرة 1,200 واط بنفسي في مين؟',
            a: 'بحسب PV Tech، لا: يجب أن يركّب الأنظمة التي تزيد على 420 واط كهربائي مرخّص من الولاية وأن يُبلَّغ عنها لشركة الكهرباء خلال 30 يومًا، بينما يمكن للعميل تركيب الأنظمة حتى 420 واط.',
          },
          {
            q: 'هل يمكن لاتحاد الملاك (HOA) في مين حظر الطاقة الشمسية للشرفات؟',
            a: 'ربما. لا تصف المصادر التي راجعناها أحكامًا بشأن الـHOA أو المؤجّرين في LD 1730، فراجع عقد الإيجار أو لوائح الـHOA بشكل منفصل. ولمعرفة كيف تعالج ولاية أخرى الأمر، راجع صفحة <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل يجب إخطار شركة الكهرباء في مين؟',
            a: 'بحسب PV Tech، فقط للأنظمة التي تزيد على 420 واط، خلال 30 يومًا من التركيب. ولا يجوز لشركة الكهرباء اشتراط موافقة مسبقة أو طلب ربط أو رسوم.',
          },
          {
            q: 'هل أحصل على مقابل للطاقة الفائضة في مين؟',
            a: 'لا تعتمد على ذلك. تفيد مصادر ثانوية بأن الأنظمة القابلة للتوصيل غير مؤهلة لبرنامج الفوترة الصافية للطاقة في مين؛ فراجع نص القانون أو اسأل شركة الكهرباء.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[المجلس التشريعي في مين: LD 1730 (SP 676)، Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — العنوان والراعي وتاريخ التوقيع 6 أبريل 2026',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — تقرير أبريل 2026 عن مستويي 420 واط / 1,200 واط والإخطار والاعتماد',
          '[UL Solutions: إطار الاختبار والاعتماد للطاقة الشمسية القابلة للتوصيل](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — برنامج يستند إلى UL 3700 أُعلن في 8 يناير 2026',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maine-overview-hero-ko.webp',
    title: '메인주에서 발코니 태양광이 합법입니까?',
    dateModified: '2026-11-20',
    seoTitle: '메인주 발코니 태양광은 합법? | Prompt Bites',
    metaDescription: '메인주 LD 1730은 2026년 4월 6일 서명. 1,200W 이하 플러그인 태양광, 420W 초과는 전기기사와 전력회사 통보 필요(PV Tech). 법률 자문 아님.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-20',
    last_full_refresh: '2026-11-20',
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
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '메인주에서 발코니 태양광이 합법입니까?',
        answer: '시행 중입니다. 메인주 LD 1730(Chapter 644)은 2026년 4월 6일 서명되어 2026년 7월 중순에 시행되었습니다(자료에 따라 7월 15일 또는 7월 29일). PV Tech에 따르면 최대 1,200W의 플러그인 시스템을 허용하며, 420W를 초과하는 시스템은 면허를 가진 전기기사가 설치하고 30일 이내에 전력회사에 보고해야 합니다.',
        bullets: [
          'LD 1730은 2026년 4월 6일 서명(메인주 의회: Chapter 644). 2차 자료에 따르면 2026년 7월 중순 시행',
          'PV Tech 기준 2단계: 420W까지는 전기기사 불필요, 420W 초과~1,200W는 면허 전기기사가 설치하고 전력회사에 통보',
          'PV Tech에 따르면 UL 3700 또는 전국적으로 인정된 시험기관의 유사 규격 인증이 필요합니다. 확인한 자료에서는 인증된 완제품 시스템이 확인되지 않았습니다',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '메인주 LD 1730은 2026년 4월 6일 서명되어(Chapter 644) 2026년 7월 중순에 시행되었으며, 보도된 시행일은 7월 15일과 7월 29일로 엇갈립니다.',
          'PV Tech에 따르면 상한은 1,200W이며, 420W를 초과하면 면허 전기기사가 필요하고 설치 후 30일 이내에 전력회사에 통보해야 합니다.',
          'PV Tech에 따르면 전력회사는 사전 승인, 계통연계 신청, 수수료를 요구할 수 없습니다.',
          'PV Tech에 따르면 UL 3700 또는 유사 규격의 인증이 필요합니다. 제품 등재는 인증기관의 자체 디렉터리에서 확인하십시오.',
        ],
      },
      body1: {
        title: '메인주 LD 1730 법안은 무엇을 요구합니까?',
        content: [
          '<strong>PV Tech의 2026년 4월 보도에 따르면 메인주 LD 1730은 시스템 크기에 따른 2단계 구조를 정합니다.</strong> 420W 이하 플러그인 시스템은 사용자가 표준 콘센트에 직접 설치할 수 있으며, 420W를 초과해 상한 1,200W까지의 시스템은 주 면허를 가진 전기기사가 설치하고 설치 후 30일 이내에 송배전 사업자에 보고해야 합니다. 전력회사는 사전 승인, 계통연계 신청, 수수료, 시스템에 내장된 것 이상의 추가 제어 장치나 장비를 요구할 수 없습니다. PV Tech는 또한 인버터가 전력이 끊기면 0.2초 이내에 차단되어야 하며, 패널은 UL 3700 또는 전국적으로 인정된 시험기관의 유사 규격으로 인증되어야 한다고 보도합니다.',
          '2차 자료에 따르면 플러그인 시스템은 메인주의 넷 에너지 빌링(net energy billing) 대상이 아닙니다. 공포된 법률 본문은 확인하지 못했으므로, 세부 사항은 메인주 의회(35-A MRSA §3475)에서 확인하십시오. 임대 계약, HOA 합의, 지역 규정이 추가 제한을 둘 수 있습니다. 이 페이지는 일반 정보이며 법률 자문이 아닙니다.',
        ],
        columns: ['항목', 'Maine LD 1730'],
        rows: [
          { '항목': '서명 / 시행', 'Maine LD 1730': '2026년 4월 6일 / 2026년 7월 중순' },
          { '항목': '출력 상한', 'Maine LD 1730': '1,200W' },
          { '항목': '전기기사 없이', 'Maine LD 1730': '최대 420W' },
          { '항목': '전력회사 통보', 'Maine LD 1730': '420W 초과: 30일 이내' },
          { '항목': '넷 에너지 빌링', 'Maine LD 1730': '대상 아님으로 보도됨' },
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
          '<strong>PV Tech에 따르면 메인주 법은 UL 3700 또는 전국적으로 인정된 시험기관의 유사 규격을 언급하며, 완제품 시스템의 인증은 확인한 자료에서 여전히 확인되지 않았습니다.</strong> UL Solutions는 2026년 1월 8일 UL 3700에 기반한 시험·인증 프로그램을 발표했습니다. 인증 제품에 관한 보도는 엇갈립니다(자세한 내용은 유타주 페이지 참고). 개별 제품은 인증기관의 공개 디렉터리에서 확인하십시오. PromptQuorum은 어떤 제품의 인증도 검증하지 않았습니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨습니까?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 현재 추천 목록</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 참고하십시오. 이는 단순한 제품 링크일 뿐, 특정 키트가 메인주에서 인증되었거나 구매 가능하다는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '메인주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '메인주에서 1,200W 발코니 태양광 키트를 직접 설치할 수 있습니까?',
            a: 'PV Tech에 따르면 불가능합니다. 420W를 초과하는 시스템은 주 면허 전기기사가 설치하고 30일 이내에 전력회사에 보고해야 하며, 420W 이하는 사용자가 설치할 수 있습니다.',
          },
          {
            q: '메인주의 HOA가 발코니 태양광을 금지할 수 있습니까?',
            a: '가능성이 있습니다. 확인한 자료에는 LD 1730의 HOA나 임대인 관련 규정이 설명되어 있지 않으므로 임대 계약이나 HOA 규약을 별도로 확인하십시오. 다른 주의 처리 방식은 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법</a> 페이지를 참고하십시오.',
          },
          {
            q: '메인주에서는 전력회사에 알려야 합니까?',
            a: 'PV Tech에 따르면 420W를 초과하는 시스템만 설치 후 30일 이내에 알려야 합니다. 전력회사는 사전 승인, 계통연계 신청, 수수료를 요구할 수 없습니다.',
          },
          {
            q: '메인주에서 잉여 전력에 대한 대금을 받을 수 있습니까?',
            a: '기대하지 마십시오. 2차 자료에 따르면 플러그인 시스템은 메인주의 넷 에너지 빌링 대상이 아닙니다. 법률 본문을 확인하거나 전력회사에 문의하십시오.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[메인주 의회: LD 1730(SP 676), Chapter 644](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=1730&PID=1456&snum=132) — 제목, 발의자, 2026년 4월 6일 서명',
          '[PV Tech: Maine passes balcony solar law, Virginia and Colorado to follow](https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/) — 420W/1,200W 구분, 통보, 인증에 관한 2026년 4월 보도',
          '[UL Solutions: 플러그인 태양광 시험·인증 체계](https://www.ul.com/news/ul-solutions-debuts-testing-and-certification-framework-safer-plug-solar-across-united-states) — UL 3700 기반 프로그램(2026년 1월 8일 발표)',
        ],
      },
    },
  },
}
