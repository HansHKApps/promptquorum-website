// Slug: is-balcony-solar-legal-new-york
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: part of the balcony-solar
// state-regulation series. See is-balcony-solar-legal-utah.ts header for the
// full exception rationale. Facts verified via WebSearch 2026-09-02 against
// pv-magazine-usa.com/2026/06/01/new-york-legislature-passes-sunny-act-plug-in-solar-legislation/,
// nysenate.gov press releases (Sen. Krueger), and canarymedia.com coverage of
// Gov. Hochul's pending decision.
// STATUS AS OF WRITE-TIME: NOT YET LAW — passed the legislature May 28-29,
// 2026, awaiting the governor's signature (she has until end of 2026 per her
// office). This matches the hub article's existing "pending" framing for NY —
// re-verify status at every refresh; this article's entire framing depends on it.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in New York?',
    dateModified: '2026-09-02',
    seoTitle: 'Is Balcony Solar Legal in New York? | Prompt Bites | PromptQuorum',
    metaDescription: "Not yet — the SUNNY Act passed the legislature and awaits Governor Hochul's signature by the end of 2026. Would cap devices at 1,200W. Quick answer from PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in New York',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in New York?',
        answer: "Not yet. New York's SUNNY Act (A.9111C/S.8512C) passed both chambers of the state legislature on May 28–29, 2026, and is awaiting Governor Kathy Hochul's signature — she has until the end of 2026 to sign or veto it. If signed, it would exempt devices up to 1,200W from utility interconnection and net metering requirements, but would not override landlord or HOA restrictions.",
        bullets: [
          "SUNNY Act passed the state legislature May 28–29, 2026 — awaiting Governor Hochul's signature, with a deadline by the end of 2026",
          'Would cap devices at 1,200W AC through a standard 120V outlet, UL-listed and compliant with state fire codes',
          'Unlike Colorado and New Jersey, it would NOT bar landlords, co-op boards, or HOAs from restricting the devices',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "New York's SUNNY Act is not law yet — it's awaiting Governor Hochul's signature, with a deadline by the end of 2026 to sign or veto.",
          'If signed, the bill would exempt devices up to 1,200W from utility interconnection and net metering requirements, with UL-listing and fire-code compliance required.',
          "The bill would NOT preempt landlord, co-op board, or HOA restrictions — New York's existing solar-rights law is written for rooftop systems, not plug-in balcony devices.",
          'New York has one of the highest average residential electricity rates of any state tracked in this series, at about 29.9¢/kWh — a strong potential return if the bill becomes law.',
        ],
      },
      body1: {
        title: 'What Would the SUNNY Act Require in New York?',
        content: [
          "<strong>New York's SUNNY Act (Solar Up Now New York, A.9111C/S.8512C) passed both chambers of the state legislature on May 28–29, 2026 and is now awaiting Governor Kathy Hochul's signature — her office has said the bill is under review, and she has until the end of 2026 to sign or veto it.</strong> As written, it would define a portable solar generation device as a system up to 1,200 watts of AC power connected through a standard 120V outlet, exempt from utility interconnection and net metering requirements, provided it's listed or certified by a recognized testing laboratory and installed to state fire code.",
          "<strong>Unlike Colorado and New Jersey, the SUNNY Act would not override landlords, co-op boards, or HOAs.</strong> New York's existing solar-rights law bars HOAs from prohibiting a resident's solar system, but it's written around rooftop installations — as drafted, it likely wouldn't extend to plug-in devices mounted on a balcony railing, leaving landlords, co-ops, and HOAs free to set their own restrictions. Check your own lease or building rules separately if the bill becomes law.",
        ],
        columns: ['Field', 'New York SUNNY Act'],
        rows: [
          { Field: 'Status', 'New York SUNNY Act': "Passed legislature — awaiting governor's signature (deadline end of 2026)" },
          { Field: 'Would-be wattage cap', 'New York SUNNY Act': '1,200W AC via standard 120V outlet' },
          { Field: 'Certification required', 'New York SUNNY Act': 'UL-listed/certified + state fire code compliance' },
          { Field: 'HOA / landlord', 'New York SUNNY Act': "NOT preempted — existing solar-rights law is roof-only" },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Is the Economics Story Strong in New York?',
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
          "<strong>New York's average residential electricity rate is about 29.9¢/kWh — more than double Utah's 11.6¢/kWh, and among the highest of any state tracked in this series.</strong> If the SUNNY Act becomes law and compliant hardware ships, an 800W kit's return should land toward the top of the roughly $150–$350/year national range this series has tracked, though no New York-specific dollar estimate exists yet since the law isn't in effect.",
          "Certification remains the other nationwide gate: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time. EcoFlow's STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.",
          '<strong>Once the bill is signed (or vetoed) and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in New York today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About New York Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in New York right now?',
            a: "Not yet. The SUNNY Act has passed the legislature but is not law until Governor Hochul signs it — her office has said the bill is under review, with a deadline by the end of 2026.",
          },
          {
            q: 'Will the SUNNY Act let my landlord or co-op board ban balcony solar?',
            a: "Yes, potentially. Unlike Colorado and New Jersey, the SUNNY Act does not preempt landlord, co-op, or HOA restrictions — New York's existing solar-rights law is written for rooftop systems, not plug-in balcony devices.",
          },
          {
            q: 'What certification would New York require?',
            a: 'The device would need to be listed or certified by a recognized testing laboratory (such as UL Solutions) and installed to comply with state fire codes — the same UL 3700 certification gap affecting every other state applies here too.',
          },
          {
            q: "What happens if Governor Hochul doesn't sign the SUNNY Act?",
            a: 'If she vetoes it or the year ends without a signature, the bill fails in its current form and would need to be reintroduced in a future legislative session.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-de.webp',
    title: 'Ist Balkonsolar in New York legal?',
    dateModified: '2026-09-02',
    seoTitle: 'Ist Balkonsolar in New York legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Noch nicht – der SUNNY Act hat das Parlament passiert und wartet auf die Unterschrift von Gouverneurin Hochul bis Ende 2026. Obergrenze wäre 1.200 W. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Eigenheimbesitzer, die prüfen, ob Balkonsolar in New York legal ist',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in New York legal?',
        answer: 'Noch nicht. New Yorks SUNNY Act (A.9111C/S.8512C) hat am 28.–29. Mai 2026 beide Kammern des Landtags passiert und wartet auf die Unterschrift von Gouverneurin Kathy Hochul – sie hat bis Ende 2026 Zeit, es zu unterzeichnen oder ein Veto einzulegen. Bei Unterzeichnung würde es Geräte bis 1.200 W von Netzanschluss- und Net-Metering-Pflichten befreien, aber Vermieter- oder HOA-Einschränkungen nicht außer Kraft setzen.',
        bullets: [
          'Der SUNNY Act passierte am 28.–29. Mai 2026 den Landtag – wartet auf die Unterschrift von Gouverneurin Hochul, mit einer Frist bis Ende 2026',
          'Würde Geräte auf 1.200 W AC über eine Standard-120-V-Steckdose begrenzen, mit UL-Zulassung und Einhaltung der staatlichen Brandschutzvorschriften',
          'Anders als Colorado und New Jersey würde es Vermieter, Genossenschaftsvorstände oder HOAs NICHT daran hindern, die Geräte einzuschränken',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'New Yorks SUNNY Act ist noch kein Gesetz – er wartet auf die Unterschrift von Gouverneurin Hochul, mit einer Frist bis Ende 2026.',
          'Bei Unterzeichnung würde das Gesetz Geräte bis 1.200 W von Netzanschluss- und Net-Metering-Pflichten befreien, wobei UL-Zulassung und Einhaltung der Brandschutzvorschriften erforderlich wären.',
          'Das Gesetz würde Vermieter-, Genossenschafts- oder HOA-Einschränkungen NICHT außer Kraft setzen – New Yorks bestehendes Solarrechtsgesetz ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          'New York hat einen der höchsten durchschnittlichen Strompreise für Privathaushalte aller in dieser Serie erfassten Bundesstaaten, bei etwa 29,9 Cent/kWh – eine starke potenzielle Rendite, sollte das Gesetz in Kraft treten.',
        ],
      },
      body1: {
        title: 'Was würde der SUNNY Act in New York verlangen?',
        content: [
          'New Yorks SUNNY Act (Solar Up Now New York, A.9111C/S.8512C) passierte am 28.–29. Mai 2026 beide Kammern des Landtags und wartet nun auf die Unterschrift von Gouverneurin Kathy Hochul – ihr Büro erklärte, das Gesetz werde geprüft, und sie hat bis Ende 2026 Zeit, es zu unterzeichnen oder ein Veto einzulegen. In der vorliegenden Fassung würde es ein „tragbares Solarstromerzeugungsgerät" als ein System bis 1.200 Watt Wechselstromleistung definieren, das über eine Standard-120-V-Steckdose angeschlossen wird, befreit von Netzanschluss- und Net-Metering-Pflichten, sofern es von einem anerkannten Prüflabor zertifiziert und gemäß den staatlichen Brandschutzvorschriften installiert ist.',
          'Anders als Colorado und New Jersey würde der SUNNY Act Vermieter, Genossenschaftsvorstände oder HOAs nicht außer Kraft setzen. New Yorks bestehendes Solarrechtsgesetz untersagt HOAs, das Solarsystem eines Bewohners zu verbieten, ist aber um Dachinstallationen formuliert – in der vorliegenden Fassung würde es sich wahrscheinlich nicht auf steckerfertige, an einem Balkongeländer montierte Geräte erstrecken, sodass Vermieter, Genossenschaften und HOAs weiterhin eigene Einschränkungen festlegen könnten. Prüfen Sie Ihren eigenen Mietvertrag oder die Hausordnung separat, falls das Gesetz in Kraft tritt.',
        ],
        columns: ['Feld', 'New York SUNNY Act'],
        rows: [
          { Feld: 'Status', 'New York SUNNY Act': 'Parlament passiert – wartet auf Unterschrift der Gouverneurin (Frist Ende 2026)' },
          { Feld: 'Geplante Leistungsobergrenze', 'New York SUNNY Act': '1.200 W AC über Standard-120-V-Steckdose' },
          { Feld: 'Erforderliche Zertifizierung', 'New York SUNNY Act': 'UL-Zulassung + Einhaltung der Brandschutzvorschriften' },
          { Feld: 'HOA / Vermieter', 'New York SUNNY Act': 'NICHT außer Kraft gesetzt – bestehendes Solarrecht gilt nur für Dächer' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Ist die Wirtschaftlichkeit in New York überzeugend?',
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
          'New Yorks durchschnittlicher Strompreis für Privathaushalte liegt bei etwa 29,9 Cent/kWh – mehr als doppelt so hoch wie Utahs 11,6 Cent/kWh und einer der höchsten Werte aller in dieser Serie erfassten Bundesstaaten. Sollte der SUNNY Act zum Gesetz werden und konforme Hardware auf den Markt kommen, dürfte die Rendite eines 800-W-Sets am oberen Ende der in dieser Serie beobachteten nationalen Spanne von etwa 150–350 $/Jahr liegen, auch wenn noch keine New-York-spezifische Schätzung existiert, da das Gesetz noch nicht in Kraft ist.',
          'Die Zertifizierung bleibt bundesweit das andere Nadelöhr: Zum Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem die volle UL-3700-Zertifizierung bestätigt. EcoFlows STREAM Ultra ist das Produkt, das dem am nächsten kommt, wird aber derzeit speziell für Utah zum Verkauf angeboten.',
          'Bereit, konkrete Hardware zu vergleichen, sobald das Gesetz unterzeichnet (oder abgelehnt) ist und zertifizierte Hardware existiert? Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in New York zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in New York',
        faqs: [
          {
            q: 'Ist Balkonsolar in New York derzeit legal?',
            a: 'Noch nicht. Der SUNNY Act hat das Parlament passiert, ist aber erst Gesetz, wenn Gouverneurin Hochul unterschreibt – ihr Büro erklärte, das Gesetz werde geprüft, mit einer Frist bis Ende 2026.',
          },
          {
            q: 'Kann mein Vermieter oder Genossenschaftsvorstand Balkonsolar in New York trotz SUNNY Act verbieten?',
            a: 'Ja, möglicherweise. Anders als Colorado und New Jersey setzt der SUNNY Act Vermieter-, Genossenschafts- oder HOA-Einschränkungen nicht außer Kraft – New Yorks bestehendes Solarrechtsgesetz ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          },
          {
            q: 'Welche Zertifizierung würde New York verlangen?',
            a: 'Das Gerät müsste von einem anerkannten Prüflabor (etwa UL Solutions) zertifiziert und gemäß den staatlichen Brandschutzvorschriften installiert sein – dieselbe UL-3700-Zertifizierungslücke, die alle anderen Bundesstaaten betrifft, gilt auch hier.',
          },
          {
            q: 'Was passiert, wenn Gouverneurin Hochul den SUNNY Act nicht unterschreibt?',
            a: 'Legt sie ein Veto ein oder endet das Jahr ohne Unterschrift, scheitert das Gesetz in seiner aktuellen Form und müsste in einer künftigen Sitzungsperiode neu eingebracht werden.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Nueva York?',
    dateModified: '2026-09-02',
    seoTitle: '¿Es legal la energía solar de balcón en Nueva York? | Prompt Bites | PromptQuorum',
    metaDescription: 'Todavía no — la SUNNY Act pasó la legislatura y espera la firma de la gobernadora Hochul antes de fin de 2026. Límite propuesto de 1200 W. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Nueva York',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Nueva York?',
        answer: 'Todavía no. La SUNNY Act de Nueva York (A.9111C/S.8512C) pasó ambas cámaras de la legislatura estatal el 28–29 de mayo de 2026 y espera la firma de la gobernadora Kathy Hochul — tiene hasta fines de 2026 para firmarla o vetarla. Si se firma, eximiría a los dispositivos de hasta 1200 W de los requisitos de interconexión con la empresa eléctrica y de net metering, pero no anularía las restricciones de arrendadores ni de HOA.',
        bullets: [
          'La SUNNY Act pasó la legislatura estatal el 28–29 de mayo de 2026 — espera la firma de la gobernadora Hochul, con un plazo antes de fin de 2026',
          'Limitaría los dispositivos a 1200 W CA mediante un tomacorriente estándar de 120 V, con certificación UL y cumplimiento de los códigos de incendios estatales',
          'A diferencia de Colorado y Nueva Jersey, NO impediría que arrendadores, juntas de cooperativas o HOA restrinjan los dispositivos',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La SUNNY Act de Nueva York todavía no es ley — espera la firma de la gobernadora Hochul, con un plazo antes de fin de 2026 para firmarla o vetarla.',
          'De firmarse, la ley eximiría a los dispositivos de hasta 1200 W de los requisitos de interconexión y net metering, exigiendo certificación UL y cumplimiento de los códigos de incendios.',
          'La ley NO anularía las restricciones de arrendadores, cooperativas o HOA — la ley de derechos solares vigente en Nueva York está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          'Nueva York tiene una de las tarifas eléctricas residenciales promedio más altas de cualquier estado seguido en esta serie, alrededor de 29.9 ¢/kWh — un retorno potencial sólido si la ley se aprueba.',
        ],
      },
      body1: {
        title: '¿Qué exigiría la SUNNY Act en Nueva York?',
        content: [
          'La SUNNY Act de Nueva York (Solar Up Now New York, A.9111C/S.8512C) pasó ambas cámaras de la legislatura estatal el 28–29 de mayo de 2026 y ahora espera la firma de la gobernadora Kathy Hochul — su oficina ha dicho que la ley está bajo revisión, y tiene hasta fines de 2026 para firmarla o vetarla. Tal como está redactada, definiría un dispositivo portátil de generación solar como un sistema de hasta 1200 vatios de potencia CA conectado mediante un tomacorriente estándar de 120 V, exento de los requisitos de interconexión y net metering, siempre que esté certificado por un laboratorio de pruebas reconocido e instalado conforme al código de incendios estatal.',
          'A diferencia de Colorado y Nueva Jersey, la SUNNY Act no anularía a arrendadores, juntas de cooperativas ni HOA. La ley de derechos solares vigente en Nueva York prohíbe a las HOA prohibir el sistema solar de un residente, pero está redactada en torno a instalaciones en tejado — tal como está planteada, probablemente no se extendería a dispositivos enchufables montados en la baranda de un balcón, dejando a arrendadores, cooperativas y HOA libres de fijar sus propias restricciones. Revisa tu propio contrato de alquiler o el reglamento de tu edificio por separado si la ley se aprueba.',
        ],
        columns: ['Campo', 'Nueva York SUNNY Act'],
        rows: [
          { Campo: 'Estado', 'Nueva York SUNNY Act': 'Aprobada por la legislatura — espera la firma de la gobernadora (plazo fin de 2026)' },
          { Campo: 'Límite de potencia propuesto', 'Nueva York SUNNY Act': '1200 W CA mediante tomacorriente estándar de 120 V' },
          { Campo: 'Certificación requerida', 'Nueva York SUNNY Act': 'Certificación UL + cumplimiento del código de incendios estatal' },
          { Campo: 'HOA / arrendador', 'Nueva York SUNNY Act': 'NO anulados — la ley de derechos solares vigente solo cubre tejados' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Es sólida la economía de la energía solar de balcón en Nueva York?',
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
          'La tarifa eléctrica residencial promedio en Nueva York ronda los 29.9 ¢/kWh — más del doble de los 11.6 ¢/kWh de Utah, y una de las más altas de cualquier estado seguido en esta serie. Si la SUNNY Act se convierte en ley y llega hardware compatible al mercado, el retorno de un kit de 800 W debería situarse hacia el extremo alto del rango nacional de aproximadamente $150–$350 al año que ha seguido esta serie, aunque todavía no existe una estimación específica para Nueva York, ya que la ley no está vigente.',
          'La certificación sigue siendo el otro obstáculo a nivel nacional: al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 total. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente para Utah.',
          '¿Listo para comparar hardware real una vez que la ley se firme (o se vete) y exista hardware certificado? Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en Nueva York hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en Nueva York',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en Nueva York en este momento?',
            a: 'Todavía no. La SUNNY Act ha pasado la legislatura, pero no es ley hasta que la gobernadora Hochul la firme — su oficina ha dicho que la ley está bajo revisión, con un plazo antes de fin de 2026.',
          },
          {
            q: '¿La SUNNY Act permitirá que mi arrendador o junta de cooperativa prohíba la energía solar de balcón?',
            a: 'Sí, es posible. A diferencia de Colorado y Nueva Jersey, la SUNNY Act no anula las restricciones de arrendadores, cooperativas ni HOA — la ley de derechos solares vigente en Nueva York está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          },
          {
            q: '¿Qué certificación exigiría Nueva York?',
            a: 'El dispositivo tendría que estar certificado por un laboratorio de pruebas reconocido (como UL Solutions) e instalado conforme al código de incendios estatal — la misma brecha de certificación UL 3700 que afecta a todos los demás estados también aplica aquí.',
          },
          {
            q: '¿Qué pasa si la gobernadora Hochul no firma la SUNNY Act?',
            a: 'Si la veta o el año termina sin firma, la ley fracasa en su forma actual y tendría que volver a presentarse en una sesión legislativa futura.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal à New York ?',
    dateModified: '2026-09-02',
    seoTitle: 'Le solaire de balcon est-il légal à New York ? | Prompt Bites | PromptQuorum',
    metaDescription: "Pas encore — le SUNNY Act a été adopté par le Parlement et attend la signature de la gouverneure Hochul avant fin 2026. Plafond prévu de 1 200 W. Réponse rapide de PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal à New York",
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal à New York ?',
        answer: "Pas encore. Le SUNNY Act de New York (A.9111C/S.8512C) a été adopté par les deux chambres du Parlement de l'État les 28 et 29 mai 2026 et attend la signature de la gouverneure Kathy Hochul — elle a jusqu'à fin 2026 pour le signer ou y opposer son veto. S'il est signé, il exempterait les appareils jusqu'à 1 200 W des exigences de raccordement au réseau et de revente au réseau, mais ne primerait pas sur les restrictions des bailleurs ou des copropriétés.",
        bullets: [
          "Le SUNNY Act a été adopté par le Parlement de l'État les 28-29 mai 2026 — attend la signature de la gouverneure Hochul, avec une échéance avant fin 2026",
          'Plafonnerait les appareils à 1 200 W CA via une prise standard 120 V, avec certification UL et conformité aux codes incendie de l\'État',
          "Contrairement au Colorado et au New Jersey, il n'empêcherait PAS les bailleurs, conseils de coopérative ou copropriétés de restreindre les appareils",
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Le SUNNY Act de New York n'est pas encore une loi — il attend la signature de la gouverneure Hochul, avec une échéance avant fin 2026 pour le signer ou y opposer son veto.",
          "S'il est signé, le texte exempterait les appareils jusqu'à 1 200 W des exigences de raccordement au réseau et de revente au réseau, avec certification UL et conformité aux codes incendie requises.",
          "Le texte ne primerait PAS sur les restrictions des bailleurs, coopératives ou copropriétés — la loi sur les droits solaires existante à New York est rédigée pour les systèmes en toiture, pas pour les appareils branchables de balcon.",
          "New York affiche l'un des tarifs résidentiels moyens de l'électricité les plus élevés de tous les États suivis dans cette série, environ 29,9 ¢/kWh — un potentiel de rendement solide si la loi est adoptée.",
        ],
      },
      body1: {
        title: 'Que prévoirait le SUNNY Act à New York ?',
        content: [
          "Le SUNNY Act de New York (Solar Up Now New York, A.9111C/S.8512C) a été adopté par les deux chambres du Parlement de l'État les 28-29 mai 2026 et attend désormais la signature de la gouverneure Kathy Hochul — son bureau a indiqué que le texte était en cours d'examen, et elle a jusqu'à fin 2026 pour le signer ou y opposer son veto. Tel que rédigé, il définirait un dispositif portable de production solaire comme un système allant jusqu'à 1 200 watts de puissance CA raccordé via une prise standard 120 V, exempté des exigences de raccordement au réseau et de revente au réseau, à condition d'être certifié par un laboratoire d'essais reconnu et installé conformément au code incendie de l'État.",
          "Contrairement au Colorado et au New Jersey, le SUNNY Act ne primerait pas sur les bailleurs, conseils de coopérative ou copropriétés. La loi sur les droits solaires existante à New York interdit aux copropriétés d'interdire le système solaire d'un résident, mais elle est rédigée autour des installations en toiture — telle que rédigée, elle ne s'étendrait probablement pas aux appareils branchables fixés à une rambarde de balcon, laissant bailleurs, coopératives et copropriétés libres de fixer leurs propres restrictions. Vérifiez séparément votre propre bail ou règlement d'immeuble si la loi est adoptée.",
        ],
        columns: ['Champ', 'New York SUNNY Act'],
        rows: [
          { Champ: 'Statut', 'New York SUNNY Act': "Adopté par le Parlement — attend la signature de la gouverneure (échéance fin 2026)" },
          { Champ: 'Plafond de puissance envisagé', 'New York SUNNY Act': '1 200 W CA via une prise standard 120 V' },
          { Champ: 'Certification requise', 'New York SUNNY Act': 'Certification UL + conformité au code incendie de l\'État' },
          { Champ: 'Copropriété / bailleur', 'New York SUNNY Act': "PAS primé — la loi sur les droits solaires existante ne couvre que les toitures" },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Le modèle économique est-il solide à New York ?',
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
          "Le tarif résidentiel moyen de l'électricité à New York est d'environ 29,9 ¢/kWh — plus du double des 11,6 ¢/kWh de l'Utah, et l'un des plus élevés de tous les États suivis dans cette série. Si le SUNNY Act devient loi et que du matériel conforme arrive sur le marché, le rendement d'un kit de 800 W devrait se situer vers le haut de la fourchette nationale d'environ 175–350 $/an suivie par cette série, même si aucune estimation propre à New York n'existe encore puisque la loi n'est pas en vigueur.",
          "La certification reste l'autre obstacle à l'échelle nationale : à l'heure de la rédaction, aucun système solaire branchable complet n'a confirmé une certification UL 3700 intégrale. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement pour l'Utah.",
          "<strong>Prêt à comparer du matériel concret une fois la loi signée (ou rejetée) et du matériel certifié disponible ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu'un kit précis est certifié ou disponible à New York aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon à New York',
        faqs: [
          {
            q: 'Le solaire de balcon est-il légal à New York dès maintenant ?',
            a: "Pas encore. Le SUNNY Act a été adopté par le Parlement mais ne devient loi qu'une fois signé par la gouverneure Hochul — son bureau a indiqué que le texte était en cours d'examen, avec une échéance avant fin 2026.",
          },
          {
            q: 'Le SUNNY Act permettra-t-il à mon bailleur ou à mon conseil de coopérative d\'interdire le solaire de balcon ?',
            a: "Oui, potentiellement. Contrairement au Colorado et au New Jersey, le SUNNY Act ne prime pas sur les restrictions des bailleurs, coopératives ou copropriétés — la loi sur les droits solaires existante à New York est rédigée pour les systèmes en toiture, pas pour les appareils branchables de balcon.",
          },
          {
            q: 'Quelle certification New York exigerait-il ?',
            a: "L'appareil devrait être certifié par un laboratoire d'essais reconnu (comme UL Solutions) et installé conformément au code incendie de l'État — le même manque de certification UL 3700 qui touche tous les autres États s'applique ici aussi.",
          },
          {
            q: "Que se passe-t-il si la gouverneure Hochul ne signe pas le SUNNY Act ?",
            a: "Si elle y oppose son veto ou si l'année se termine sans signature, le texte échoue sous sa forme actuelle et devrait être réintroduit lors d'une session législative future.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-ja.webp',
    title: 'ニューヨーク州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-09-02',
    seoTitle: 'ニューヨーク州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'まだです — SUNNY Actは州議会を通過し、2026年末までにホークル知事の署名を待っています。上限は1,200Wになる見込みです。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'ニューヨーク州でバルコニーソーラーが合法かどうかを確認している米国の賃貸居住者・持ち家所有者',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'ニューヨーク州でバルコニーソーラーは合法ですか？',
        answer: 'まだ合法ではない。ニューヨーク州のSUNNY Act（A.9111C/S.8512C）は2026年5月28〜29日に州議会の両院を通過し、キャシー・ホークル知事の署名を待っている — 知事は2026年末までに署名するか拒否権を行使するかを決める必要がある。仮に署名されれば、最大1,200Wの機器を電力会社への系統連系要件とネットメータリング要件から免除するが、家主やHOAによる制限を無効化するものではない。',
        bullets: [
          'SUNNY Actは2026年5月28〜29日に州議会を通過 — ホークル知事の署名待ちで、期限は2026年末',
          '標準120Vコンセント経由で上限1,200W ACとし、UL認証と州の防火規定への適合が求められる見込み',
          'コロラド州やニュージャージー州と異なり、家主・コーポラティブ理事会・HOAによる制限を禁じるものではない',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ニューヨーク州のSUNNY Actはまだ法律ではない — ホークル知事の署名待ちで、署名または拒否権行使の期限は2026年末である。',
          '仮に署名されれば、最大1,200Wの機器を電力会社への系統連系要件とネットメータリング要件から免除する見込みで、UL認証と防火規定への適合が求められる。',
          'この法案は家主・コーポラティブ理事会・HOAによる制限を無効化するものではない — ニューヨーク州の既存のソーラー権利法は屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていない。',
          'ニューヨーク州はこのシリーズで追跡している州の中でも平均住宅用電気料金が高い部類に入り、約29.9セント/kWhである — 法案が成立すれば強い経済的リターンが期待できる。',
        ],
      },
      body1: {
        title: 'SUNNY Actがニューヨーク州で求める内容とは？',
        content: [
          'ニューヨーク州のSUNNY Act（Solar Up Now New York、A.9111C/S.8512C）は2026年5月28〜29日に州議会の両院を通過し、現在はキャシー・ホークル知事の署名を待っている — 知事府はこの法案を審議中だとしており、知事は2026年末までに署名するか拒否権を行使するかを決める必要がある。現行の条文では、携帯型ソーラー発電機器を標準120Vコンセント経由で接続する最大1,200ワットACのシステムと定義し、認定試験機関の認証を受け州の防火規定に従って設置されていれば、電力会社への系統連系要件とネットメータリング要件から免除する見込みである。',
          'コロラド州やニュージャージー州と異なり、SUNNY Actは家主・コーポラティブ理事会・HOAを無効化するものではない。ニューヨーク州の既存のソーラー権利法はHOAが居住者のソーラーシステムを禁止することを禁じているが、これは屋根設置型を前提として書かれている — 現行の条文のままでは、バルコニーの手すりに取り付けるプラグイン式機器には適用が及ばない可能性が高く、家主・コーポラティブ・HOAは独自の制限を設定できる状態が続く。法案が成立した場合は、自分の賃貸契約書や建物の規則を別途確認してほしい。',
        ],
        columns: ['項目', 'ニューヨーク州 SUNNY Act'],
        rows: [
          { 項目: '状況', 'ニューヨーク州 SUNNY Act': '州議会通過 — 知事の署名待ち（期限は2026年末）' },
          { 項目: '想定される出力上限', 'ニューヨーク州 SUNNY Act': '標準120Vコンセント経由で1,200W AC' },
          { 項目: '求められる認証', 'ニューヨーク州 SUNNY Act': 'UL認証 + 州の防火規定への適合' },
          { 項目: 'HOA・家主', 'ニューヨーク州 SUNNY Act': '無効化されない — 既存のソーラー権利法は屋根設置のみ対象' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'ニューヨーク州の経済性は魅力的か？',
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
          'ニューヨーク州の平均的な住宅用電気料金は約29.9セント/kWhで、ユタ州の11.6セント/kWhの2倍以上にあたり、このシリーズで追跡している州の中でも最高水準である。SUNNY Actが成立し適合ハードウェアが登場すれば、800Wキットの回収額はこのシリーズが追跡してきた年間約150〜350ドルという全国レンジの上位寄りになると見込まれるが、法律がまだ施行されていないため、ニューヨーク州特有の金額はまだ存在しない。',
          '認証は全米共通のもう一つの関門である — 執筆時点で、完全なプラグイン式ソーラーシステムでUL 3700の完全認証を取得したと確認されたものはない。EcoFlowのSTREAM Ultraが最も市場に近い製品だが、現在はユタ州向けに限定して販売されている。',
          '法案が署名（または拒否）され、認証済みハードウェアが登場したら、実際の製品を比較する準備をしよう。<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧いただきたい — これらは単なる製品リンクであり、特定のキットがニューヨーク州で認証済み・販売中であると主張するものではない。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ニューヨーク州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'ニューヨーク州で今すぐバルコニーソーラーは合法ですか？',
            a: 'まだ合法ではありません。SUNNY Actは州議会を通過しましたが、ホークル知事が署名するまでは法律になりません — 知事府はこの法案を審議中だとしており、期限は2026年末です。',
          },
          {
            q: 'SUNNY Actが成立しても、家主やコーポラティブ理事会はバルコニーソーラーを禁止できますか？',
            a: 'はい、その可能性があります。コロラド州やニュージャージー州と異なり、SUNNY Actは家主・コーポラティブ・HOAによる制限を無効化しません — ニューヨーク州の既存のソーラー権利法は屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていません。',
          },
          {
            q: 'ニューヨーク州ではどのような認証が求められますか？',
            a: '機器は認定試験機関（UL Solutionsなど）の認証を受け、州の防火規定に従って設置される必要があります — 他の全ての州に共通するUL 3700認証のギャップは、ここでも同様に適用されます。',
          },
          {
            q: 'ホークル知事がSUNNY Actに署名しなかった場合はどうなりますか？',
            a: '知事が拒否権を行使するか、署名しないまま年内に決着がつかなかった場合、法案は現在の形では不成立となり、将来の会期で再提出する必要があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-zh.webp',
    title: '纽约州的阳台太阳能合法吗？',
    dateModified: '2026-09-02',
    seoTitle: '纽约州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '尚未合法——《SUNNY法案》已通过州议会,正等待霍楚尔州长在2026年底前签署。拟定功率上限为1,200瓦。PromptQuorum为您解答。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在纽约州是否合法的美国租户和房主',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '纽约州的阳台太阳能合法吗？',
        answer: '尚未合法。纽约州《SUNNY法案》(A.9111C/S.8512C) 已于2026年5月28-29日通过州议会两院表决,目前正等待州长凯茜·霍楚尔签署——她必须在2026年底前签署或否决该法案。若获签署,该法案将使功率不超过1,200瓦的设备豁免电力公司并网及净计量要求,但不会取代房东或HOA的限制规定。',
        bullets: [
          '《SUNNY法案》于2026年5月28-29日通过州议会——正等待霍楚尔州长签署,截止日期为2026年底',
          '拟通过标准120V插座将设备功率上限设为1,200瓦交流电,并要求UL认证及符合州消防规范',
          '与科罗拉多州和新泽西州不同,该法案不会禁止房东、合作公寓董事会或HOA限制此类设备',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '纽约州《SUNNY法案》尚未成为法律——正等待霍楚尔州长签署,签署或否决的截止日期为2026年底。',
          '若获签署,该法案将使功率不超过1,200瓦的设备豁免电力公司并网及净计量要求,同时要求UL认证及符合消防规范。',
          '该法案不会取代房东、合作公寓董事会或HOA的限制规定——纽约州现行的太阳能权利法是针对屋顶系统制定的,并不适用于插电式阳台设备。',
          '纽约州是本系列追踪各州中住宅平均电价最高的州之一,约为每千瓦时29.9美分——若法案通过,潜在经济回报相当可观。',
        ],
      },
      body1: {
        title: '《SUNNY法案》将对纽约州提出哪些要求？',
        content: [
          '纽约州《SUNNY法案》（Solar Up Now New York,A.9111C/S.8512C）已于2026年5月28-29日通过州议会两院表决,目前正等待州长凯茜·霍楚尔签署——州长办公室表示该法案正在审议中,她必须在2026年底前签署或否决该法案。按现有条文,该法案将便携式太阳能发电设备定义为通过标准120V插座连接、功率不超过1,200瓦交流电的系统,只要设备经认可检测实验室认证并按州消防规范安装,即可豁免电力公司并网及净计量要求。',
          '与科罗拉多州和新泽西州不同,《SUNNY法案》不会取代房东、合作公寓董事会或HOA的权限。纽约州现行的太阳能权利法禁止HOA禁止居民使用太阳能系统,但该法是针对屋顶安装系统制定的——按现有条文,该法很可能不会延伸适用于安装在阳台栏杆上的插电式设备,这意味着房东、合作公寓和HOA仍可自行设定限制。若该法案获得通过,请另行核查你自己的租约或楼宇规定。',
        ],
        columns: ['项目', '纽约州 SUNNY法案'],
        rows: [
          { 项目: '状态', '纽约州 SUNNY法案': '已通过州议会——等待州长签署（截止日期为2026年底）' },
          { 项目: '拟定功率上限', '纽约州 SUNNY法案': '通过标准120V插座供电,1,200瓦交流电' },
          { 项目: '所需认证', '纽约州 SUNNY法案': 'UL认证 + 符合州消防规范' },
          { 项目: 'HOA / 房东', '纽约州 SUNNY法案': '未被取代——现行太阳能权利法仅适用于屋顶' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '纽约州的经济性如何？',
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
          '纽约州住宅电价平均约为每千瓦时29.9美分——是犹他州每千瓦时11.6美分的两倍多,也是本系列追踪各州中最高的水平之一。若《SUNNY法案》获得通过且合规硬件进入市场,一套800瓦套件的节省预计将处于本系列追踪的全国范围（每年约150-350美元）的较高端,不过由于该法律尚未生效,目前还没有针对纽约州的具体金额估算。',
          '认证仍是全美性的另一道门槛：截至撰写本文时,尚无任何完整的插电式太阳能系统确认已完成完整的UL 3700认证。EcoFlow的STREAM Ultra是最接近上市的产品,但目前专门面向犹他州市场销售。',
          '等法案获得签署（或被否决）、认证硬件面世后,你会想比较真正的产品选项。请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接,并不代表任何特定套件已在纽约州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于纽约州阳台太阳能的快速问答',
        faqs: [
          {
            q: '纽约州现在阳台太阳能合法吗？',
            a: '尚未合法。《SUNNY法案》已通过州议会,但在霍楚尔州长签署之前尚不具有法律效力——州长办公室表示该法案正在审议中,截止日期为2026年底。',
          },
          {
            q: '即便《SUNNY法案》获得通过,我的房东或合作公寓董事会能禁止阳台太阳能吗？',
            a: '有可能。与科罗拉多州和新泽西州不同,《SUNNY法案》不会取代房东、合作公寓或HOA的限制规定——纽约州现行的太阳能权利法是针对屋顶系统制定的,并不适用于插电式阳台设备。',
          },
          {
            q: '纽约州会要求什么认证？',
            a: '设备需经认可检测实验室（如UL Solutions）认证,并按州消防规范安装——影响其他所有州的同一UL 3700认证缺口在这里同样适用。',
          },
          {
            q: '如果霍楚尔州长不签署《SUNNY法案》会怎样？',
            a: '如果她否决该法案,或在年底前未签署,该法案将以当前形式失败,需要在未来的立法会期重新提出。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal em Nova York?',
    dateModified: '2026-09-02',
    seoTitle: 'A energia solar de varanda é legal em Nova York? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ainda não — o SUNNY Act foi aprovado pela assembleia legislativa e aguarda a assinatura da governadora Hochul até o fim de 2026. Limite proposto de 1.200 W. Resposta rápida da PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Nova York',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Nova York?',
        answer: 'Ainda não. O SUNNY Act de Nova York (A.9111C/S.8512C) foi aprovado pelas duas casas da assembleia legislativa estadual em 28–29 de maio de 2026 e aguarda a assinatura da governadora Kathy Hochul — ela tem até o fim de 2026 para assiná-lo ou vetá-lo. Se sancionado, isentaria dispositivos de até 1.200 W dos requisitos de interconexão com a concessionária e de net metering, mas não anularia restrições de locadores nem de HOAs.',
        bullets: [
          'O SUNNY Act foi aprovado pela assembleia estadual em 28–29 de maio de 2026 — aguarda a assinatura da governadora Hochul, com prazo até o fim de 2026',
          'Limitaria os dispositivos a 1.200 W CA por meio de uma tomada padrão de 120 V, com certificação UL e conformidade com os códigos de incêndio estaduais',
          'Diferentemente do Colorado e de Nova Jersey, NÃO impediria que locadores, conselhos de cooperativa ou HOAs restrinjam os dispositivos',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O SUNNY Act de Nova York ainda não é lei — aguarda a assinatura da governadora Hochul, com prazo até o fim de 2026 para sancionar ou vetar.',
          'Se sancionado, o projeto isentaria dispositivos de até 1.200 W dos requisitos de interconexão e net metering, exigindo certificação UL e conformidade com os códigos de incêndio.',
          'O projeto NÃO anularia restrições de locadores, cooperativas ou HOAs — a lei de direitos solares vigente em Nova York foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          'Nova York tem uma das tarifas residenciais médias de eletricidade mais altas entre os estados acompanhados nesta série, cerca de 29,9 ¢/kWh — um retorno potencial sólido caso o projeto vire lei.',
        ],
      },
      body1: {
        title: 'O que o SUNNY Act vai exigir em Nova York?',
        content: [
          'O SUNNY Act de Nova York (Solar Up Now New York, A.9111C/S.8512C) foi aprovado pelas duas casas da assembleia legislativa estadual em 28–29 de maio de 2026 e agora aguarda a assinatura da governadora Kathy Hochul — seu gabinete afirmou que o projeto está em análise, e ela tem até o fim de 2026 para sancioná-lo ou vetá-lo. Como redigido, definiria um dispositivo portátil de geração solar como um sistema de até 1.200 watts de potência CA conectado por uma tomada padrão de 120 V, isento dos requisitos de interconexão e net metering, desde que certificado por um laboratório de testes reconhecido e instalado conforme o código de incêndio estadual.',
          'Diferentemente do Colorado e de Nova Jersey, o SUNNY Act não anularia locadores, conselhos de cooperativa ou HOAs. A lei de direitos solares vigente em Nova York proíbe HOAs de banir o sistema solar de um morador, mas foi redigida em torno de instalações em telhado — como está formulada, provavelmente não se estenderia a dispositivos plug-in instalados no parapeito de uma varanda, deixando locadores, cooperativas e HOAs livres para impor suas próprias restrições. Verifique separadamente seu próprio contrato de aluguel ou o regulamento do prédio caso o projeto vire lei.',
        ],
        columns: ['Campo', 'Nova York SUNNY Act'],
        rows: [
          { Campo: 'Status', 'Nova York SUNNY Act': 'Aprovado pela assembleia — aguardando assinatura da governadora (prazo fim de 2026)' },
          { Campo: 'Limite de potência proposto', 'Nova York SUNNY Act': '1.200 W CA por meio de tomada padrão de 120 V' },
          { Campo: 'Certificação exigida', 'Nova York SUNNY Act': 'Certificação UL + conformidade com o código de incêndio estadual' },
          { Campo: 'HOA / locador', 'Nova York SUNNY Act': 'NÃO anulados — a lei de direitos solares vigente cobre apenas telhados' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'A economia de Nova York é vantajosa?',
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
          'A tarifa residencial média de eletricidade em Nova York gira em torno de 29,9 ¢/kWh — mais do dobro dos 11,6 ¢/kWh de Utah, e uma das mais altas entre os estados acompanhados nesta série. Se o SUNNY Act virar lei e hardware compatível chegar ao mercado, o retorno de um kit de 800 W deve ficar na faixa mais alta da estimativa nacional de cerca de US$ 150–350/ano acompanhada nesta série, embora ainda não exista uma estimativa específica para Nova York, já que a lei não está em vigor.',
          'A certificação continua sendo o outro obstáculo em nível nacional: no momento da redação deste texto, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente é vendido especificamente para Utah.',
          'Pronto para comparar hardware real assim que o projeto for sancionado (ou vetado) e existir hardware certificado? Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível em Nova York hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Nova York',
        faqs: [
          {
            q: 'A energia solar de varanda é legal em Nova York agora?',
            a: 'Ainda não. O SUNNY Act foi aprovado pela assembleia, mas só se torna lei quando a governadora Hochul o assinar — seu gabinete afirmou que o projeto está em análise, com prazo até o fim de 2026.',
          },
          {
            q: 'O SUNNY Act vai permitir que meu locador ou conselho de cooperativa proíba a energia solar de varanda?',
            a: 'Sim, potencialmente. Diferentemente do Colorado e de Nova Jersey, o SUNNY Act não anula restrições de locadores, cooperativas ou HOAs — a lei de direitos solares vigente em Nova York foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          },
          {
            q: 'Que certificação Nova York exigiria?',
            a: 'O dispositivo precisaria ser certificado por um laboratório de testes reconhecido (como a UL Solutions) e instalado conforme os códigos de incêndio estaduais — a mesma lacuna de certificação UL 3700 que afeta todos os outros estados também se aplica aqui.',
          },
          {
            q: 'O que acontece se a governadora Hochul não assinar o SUNNY Act?',
            a: 'Se ela vetar ou o ano terminar sem assinatura, o projeto fracassa em sua forma atual e precisaria ser reapresentado em uma sessão legislativa futura.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في نيويورك؟',
    dateModified: '2026-09-02',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في نيويورك؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'ليس بعد — أقرّ قانون SUNNY مجلسي التشريع وينتظر توقيع الحاكمة هوكول بحلول نهاية 2026. الحد المقترح 1,200 واط. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون والملاك في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في نيويورك',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في نيويورك؟',
        answer: 'ليس بعد. أقرّ مجلسا التشريع في ولاية نيويورك قانون SUNNY (A.9111C/S.8512C) في 28-29 مايو 2026، وهو الآن ينتظر توقيع الحاكمة كاثي هوكول — أمامها حتى نهاية 2026 للتوقيع عليه أو رفضه. وفي حال التوقيع، سيُعفي الأجهزة حتى 1,200 واط من متطلبات الربط الشبكي ونظام Net Metering مع شركة الكهرباء، لكنه لن يُبطل قيود الملاك المؤجرين أو جمعيات الملاك (HOA).',
        bullets: [
          'أقرّ قانون SUNNY مجلس تشريع الولاية في 28-29 مايو 2026 — وينتظر الآن توقيع الحاكمة هوكول، بموعد نهائي بحلول نهاية 2026',
          'سيحدّ الأجهزة عند 1,200 واط تيار متردد عبر مقبس قياسي 120 فولت، مع اشتراط اعتماد UL والامتثال لقوانين السلامة من الحرائق في الولاية',
          'خلافًا لكولورادو ونيوجيرسي، لن يمنع الملاك المؤجرين أو مجالس التعاونيات أو جمعيات الملاك من تقييد الأجهزة',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون SUNNY في نيويورك لم يصبح قانونًا بعد — وهو ينتظر توقيع الحاكمة هوكول، بموعد نهائي بحلول نهاية 2026 للتوقيع أو الرفض.',
          'في حال التوقيع، سيُعفي القانون الأجهزة حتى 1,200 واط من متطلبات الربط الشبكي ونظام Net Metering، مع اشتراط اعتماد UL والامتثال لقوانين السلامة من الحرائق.',
          'لن يُبطل القانون قيود الملاك المؤجرين أو التعاونيات أو جمعيات الملاك (HOA) — قانون الحقوق الشمسية الحالي في نيويورك مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          'تمتلك نيويورك واحدة من أعلى متوسطات تعرفة الكهرباء السكنية بين جميع الولايات المتتبَّعة في هذه السلسلة، عند نحو 29.9 سنتًا لكل كيلوواط ساعة — عائد محتمل قوي إذا أصبح مشروع القانون قانونًا.',
        ],
      },
      body1: {
        title: 'ما الذي سيتطلبه قانون SUNNY في نيويورك؟',
        content: [
          'أقرّ مجلسا التشريع في ولاية نيويورك قانون SUNNY (Solar Up Now New York، A.9111C/S.8512C) في 28-29 مايو 2026، وهو الآن ينتظر توقيع الحاكمة كاثي هوكول — وذكر مكتبها أن القانون قيد المراجعة، وأمامها حتى نهاية 2026 للتوقيع عليه أو رفضه. وكما هو مكتوب، سيُعرّف "جهاز توليد شمسي محمول" بأنه نظام حتى 1,200 واط من الطاقة المترددة متصل عبر مقبس قياسي 120 فولت، معفى من متطلبات الربط الشبكي ونظام Net Metering، شريطة أن يكون معتمدًا من مختبر اختبار معترف به ومركّبًا وفقًا لقوانين السلامة من الحرائق في الولاية.',
          'خلافًا لكولورادو ونيوجيرسي، لن يُبطل قانون SUNNY صلاحيات الملاك المؤجرين أو مجالس التعاونيات أو جمعيات الملاك (HOA). يمنع قانون الحقوق الشمسية الحالي في نيويورك جمعيات الملاك من حظر النظام الشمسي الخاص بأحد السكان، لكنه مكتوب حول التركيبات على الأسطح — وكما هو مصاغ حاليًا، من المرجح ألا يمتد ليشمل الأجهزة القابلة للتوصيل المباشر المثبتة على درابزين الشرفة، مما يترك الملاك المؤجرين والتعاونيات وجمعيات الملاك أحرارًا في وضع قيودهم الخاصة. تحقق من عقد إيجارك أو لوائح المبنى الخاصة بك بشكل منفصل إذا أصبح مشروع القانون قانونًا.',
        ],
        columns: ['الحقل', 'قانون SUNNY في نيويورك'],
        rows: [
          { الحقل: 'الحالة', 'قانون SUNNY في نيويورك': 'أقرّه مجلسا التشريع — بانتظار توقيع الحاكمة (الموعد النهائي نهاية 2026)' },
          { الحقل: 'الحد الأقصى المقترح للطاقة', 'قانون SUNNY في نيويورك': '1,200 واط تيار متردد عبر مقبس قياسي 120 فولت' },
          { الحقل: 'الاعتماد المطلوب', 'قانون SUNNY في نيويورك': 'اعتماد UL + الامتثال لقوانين السلامة من الحرائق في الولاية' },
          { الحقل: 'جمعيات الملاك / الملاك المؤجرون', 'قانون SUNNY في نيويورك': 'لم يُبطَل — قانون الحقوق الشمسية الحالي يغطي الأسطح فقط' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل الجدوى الاقتصادية قوية في نيويورك؟',
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
          'يبلغ متوسط تعرفة الكهرباء السكنية في نيويورك نحو 29.9 سنتًا لكل كيلوواط ساعة — أكثر من ضعف تعرفة يوتا البالغة 11.6 سنتًا، وهي من بين الأعلى بين جميع الولايات المتتبَّعة في هذه السلسلة. إذا أصبح قانون SUNNY قانونًا ووصلت أجهزة متوافقة إلى السوق، فمن المتوقع أن يقترب عائد مجموعة 800 واط من الطرف الأعلى للنطاق الوطني الذي تتبعته هذه السلسلة والبالغ نحو 150–350 دولارًا سنويًا، رغم عدم وجود تقدير خاص بنيويورك بعد لأن القانون لم يدخل حيز التنفيذ.',
          'يبقى الاعتماد العقبة الأخرى على مستوى البلاد: حتى وقت كتابة هذا المقال، لم يؤكد أي نظام شمسي كامل قابل للتوصيل المباشر حصوله على اعتماد UL 3700 الكامل. يُعد جهاز EcoFlow STREAM Ultra الأقرب إلى السوق، لكنه يُطرح للبيع حاليًا خصيصًا في يوتا.',
          'هل أنت مستعد لمقارنة الأجهزة الفعلية بمجرد التوقيع على مشروع القانون (أو رفضه) وتوفر أجهزة معتمدة؟ اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في نيويورك اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في نيويورك',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في نيويورك الآن؟',
            a: 'ليس بعد. أقرّ مجلسا التشريع قانون SUNNY، لكنه لا يصبح قانونًا إلا بعد توقيع الحاكمة هوكول عليه — وذكر مكتبها أن القانون قيد المراجعة، بموعد نهائي بحلول نهاية 2026.',
          },
          {
            q: 'هل سيسمح قانون SUNNY لمالكي العقار أو مجلس التعاونية بحظر الطاقة الشمسية للشرفات؟',
            a: 'نعم، من المحتمل. خلافًا لكولورادو ونيوجيرسي، لا يُبطل قانون SUNNY قيود الملاك المؤجرين أو التعاونيات أو جمعيات الملاك — قانون الحقوق الشمسية الحالي في نيويورك مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          },
          {
            q: 'ما الاعتماد الذي ستشترطه نيويورك؟',
            a: 'سيحتاج الجهاز إلى اعتماد من مختبر اختبار معترف به (مثل UL Solutions) وتركيبه وفقًا لقوانين السلامة من الحرائق في الولاية — وتنطبق هنا أيضًا فجوة اعتماد UL 3700 نفسها التي تؤثر على كل ولاية أخرى.',
          },
          {
            q: 'ماذا يحدث إذا لم توقّع الحاكمة هوكول على قانون SUNNY؟',
            a: 'إذا رفضته أو انتهى العام دون توقيع، يسقط القانون بصيغته الحالية ويحتاج إلى إعادة تقديمه في دورة تشريعية مستقبلية.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-york-overview-hero-ko.webp',
    title: '뉴욕주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-09-02',
    seoTitle: '뉴욕주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '아직 아닙니다 — SUNNY Act는 주 의회를 통과했으며 2026년 말까지 호컬 주지사의 서명을 기다리고 있습니다. 상한은 1,200W가 될 예정입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '뉴욕주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
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
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '뉴욕주에서 발코니 태양광은 합법입니까?',
        answer: '아직 아닙니다. 뉴욕주 SUNNY Act(A.9111C/S.8512C)는 2026년 5월 28~29일 주 의회 양원을 통과했으며 캐시 호컬 주지사의 서명을 기다리고 있습니다 — 주지사는 2026년 말까지 서명하거나 거부권을 행사해야 합니다. 서명될 경우, 최대 1,200W 기기를 전력회사 계통연계 및 순 계량제(net metering) 요건에서 면제하지만, 임대인이나 HOA의 제한을 무효화하지는 않습니다.',
        bullets: [
          'SUNNY Act는 2026년 5월 28~29일 주 의회를 통과 — 호컬 주지사의 서명을 기다리는 중이며 기한은 2026년 말',
          '표준 120V 콘센트를 통해 상한 1,200W 교류로 제한하고, UL 인증 및 주 소방 규정 준수를 요구할 예정',
          '콜로라도주 및 뉴저지주와 달리, 임대인·협동조합 이사회·HOA의 제한을 막지는 않음',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '뉴욕주 SUNNY Act는 아직 법이 아닙니다 — 호컬 주지사의 서명을 기다리고 있으며, 서명 또는 거부권 행사 기한은 2026년 말입니다.',
          '서명될 경우, 최대 1,200W 기기를 전력회사 계통연계 및 순 계량제 요건에서 면제할 예정이며, UL 인증과 소방 규정 준수가 요구됩니다.',
          '이 법안은 임대인·협동조합 이사회·HOA의 제한을 무효화하지 않습니다 — 뉴욕주의 기존 태양광 권리법은 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          '뉴욕주는 이 시리즈가 추적하는 주 중 평균 주거용 전기 요금이 가장 높은 축에 속하며, kWh당 약 29.9센트입니다 — 법안이 통과되면 강력한 잠재적 수익을 기대할 수 있습니다.',
        ],
      },
      body1: {
        title: 'SUNNY Act는 뉴욕주에서 무엇을 요구하게 됩니까?',
        content: [
          '뉴욕주 SUNNY Act(Solar Up Now New York, A.9111C/S.8512C)는 2026년 5월 28~29일 주 의회 양원을 통과했으며 현재 캐시 호컬 주지사의 서명을 기다리고 있습니다 — 주지사실은 법안이 검토 중이라고 밝혔으며, 주지사는 2026년 말까지 서명하거나 거부권을 행사해야 합니다. 법안 원문대로라면, 휴대용 태양광 발전 기기를 표준 120V 콘센트로 연결되는 최대 1,200와트 교류 시스템으로 정의하고, 공인 시험기관의 인증을 받고 주 소방 규정에 따라 설치된 경우 전력회사 계통연계 및 순 계량제 요건에서 면제합니다.',
          '콜로라도주 및 뉴저지주와 달리, SUNNY Act는 임대인·협동조합 이사회·HOA의 권한을 무효화하지 않습니다. 뉴욕주의 기존 태양광 권리법은 HOA가 거주자의 태양광 시스템을 금지하는 것을 막고 있지만, 이는 지붕 설치형 시스템을 전제로 작성되어 있습니다 — 현재 초안대로라면 발코니 난간에 설치하는 플러그인 기기까지 적용이 확장될 가능성은 낮으며, 임대인·협동조합·HOA는 계속해서 자체 제한을 둘 수 있습니다. 법안이 통과되면 본인의 임대 계약서나 건물 규정을 별도로 확인해야 합니다.',
        ],
        columns: ['항목', '뉴욕주 SUNNY Act'],
        rows: [
          { 항목: '상태', '뉴욕주 SUNNY Act': '주 의회 통과 — 주지사 서명 대기 중 (기한 2026년 말)' },
          { 항목: '예상 출력 상한', '뉴욕주 SUNNY Act': '표준 120V 콘센트를 통해 1,200W 교류' },
          { 항목: '요구되는 인증', '뉴욕주 SUNNY Act': 'UL 인증 + 주 소방 규정 준수' },
          { 항목: 'HOA / 임대인', '뉴욕주 SUNNY Act': '무효화되지 않음 — 기존 태양광 권리법은 지붕형만 적용' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '뉴욕주의 경제성은 매력적입니까?',
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
          '뉴욕주의 평균 주거용 전기 요금은 kWh당 약 29.9센트로, 유타주의 kWh당 11.6센트의 두 배 이상이며 이 시리즈가 추적하는 주 중에서도 최고 수준에 속합니다. SUNNY Act가 법이 되고 적합한 하드웨어가 시장에 나오면, 800W 키트의 수익률은 이 시리즈가 추적해 온 연간 약 150~350달러의 전국 범위 중 상위권에 속할 것으로 예상되지만, 법이 아직 시행되지 않아 뉴욕주 고유의 금액 추정치는 아직 없습니다.',
          '인증은 여전히 전국적인 또 다른 관문입니다 — 본 문서 작성 시점 기준으로 완전한 플러그인 태양광 시스템 중 UL 3700 완전 인증을 받은 것으로 확인된 제품은 없습니다. EcoFlow의 STREAM Ultra가 시장에 가장 가까운 제품이지만 현재는 유타주 전용으로 판매되고 있습니다.',
          '법안이 서명(또는 거부)되고 인증된 하드웨어가 등장하면 실제 제품을 비교할 준비를 하십시오. <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하십시오 — 이는 단순한 제품 링크일 뿐, 특정 키트가 뉴욕주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '뉴욕주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '뉴욕주에서 지금 발코니 태양광은 합법입니까?',
            a: '아직 아닙니다. SUNNY Act는 주 의회를 통과했지만 호컬 주지사가 서명해야 법이 됩니다 — 주지사실은 법안이 검토 중이라고 밝혔으며 기한은 2026년 말입니다.',
          },
          {
            q: 'SUNNY Act가 통과되어도 임대인이나 협동조합 이사회가 발코니 태양광을 금지할 수 있습니까?',
            a: '예, 가능성이 있습니다. 콜로라도주 및 뉴저지주와 달리, SUNNY Act는 임대인·협동조합·HOA의 제한을 무효화하지 않습니다 — 뉴욕주의 기존 태양광 권리법은 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          },
          {
            q: '뉴욕주에서는 어떤 인증이 요구됩니까?',
            a: '기기는 공인 시험기관(UL Solutions 등)의 인증을 받고 주 소방 규정에 따라 설치되어야 합니다 — 다른 모든 주에 영향을 미치는 동일한 UL 3700 인증 공백이 여기에도 적용됩니다.',
          },
          {
            q: '호컬 주지사가 SUNNY Act에 서명하지 않으면 어떻게 됩니까?',
            a: '주지사가 거부권을 행사하거나 서명 없이 연말을 맞이하면 법안은 현재 형태로는 무산되며 향후 입법 회기에 다시 상정되어야 합니다.',
          },
        ],
      },
    },
  },
}
