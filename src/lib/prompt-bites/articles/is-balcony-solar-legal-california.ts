// Slug: is-balcony-solar-legal-california
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: part of the balcony-solar
// state-regulation series. See is-balcony-solar-legal-utah.ts header for the
// full exception rationale. Facts verified via WebSearch 2026-09-02 against
// pv-magazine-usa.com/2026/08/26/california-plug-in-solar-bill-sb-868-earns-approval-of-both-legislative-houses-nears-governors-desk/
// and news.bloomberglaw.com coverage of SB 868 heading to Governor Newsom's desk.
// STATUS AS OF WRITE-TIME: NOT YET LAW — passed the legislature, awaiting the
// governor's signature (deadline September 30, 2026). Re-verify status at
// every refresh; this article's entire framing depends on it.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in California?',
    dateModified: '2026-09-02',
    seoTitle: 'Is Balcony Solar Legal in California? | Prompt Bites | PromptQuorum',
    metaDescription: "Not yet — SB 868 passed the legislature and awaits Governor Newsom's signature by September 30, 2026. Would cap devices at 1,200W. Quick answer from PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in California',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in California?',
        answer: "Not yet. California's SB 868 (\"Plug and Play Solar Act\") passed both legislative chambers in August 2026 and is now on Governor Gavin Newsom's desk — he has until September 30, 2026 to sign or veto it. If signed, it would exempt devices up to 1,200W from utility interconnection requirements through January 1, 2030, but it would not override landlord leases or HOA rules.",
        bullets: [
          "SB 868 passed the Assembly August 25, 2026 and the Senate shortly after — now awaiting Governor Newsom's decision by September 30, 2026",
          'Would cap devices at 1,200W AC per dwelling, exempt from utility interconnection through January 1, 2030 — a sunset date, not a permanent exemption',
          'Unlike Colorado and New Jersey, it would NOT bar landlords or HOAs from restricting the devices',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "California's SB 868 is not law yet — it's awaiting Governor Newsom's signature, with a September 30, 2026 deadline to sign or veto.",
          'If signed, the bill would cap devices at 1,200W AC per dwelling and exempt them from utility interconnection requirements — but only through January 1, 2030, a built-in sunset date.',
          "The bill would NOT preempt landlord leases or HOA restrictions — California's existing Solar Rights Act is written for rooftop systems, not plug-in balcony devices.",
          'California has the highest average residential electricity rate of any state tracked in this series, at about 33.3¢/kWh — the strongest potential economics if the bill becomes law and certified hardware ships.',
        ],
      },
      body1: {
        title: 'What Would SB 868 Require in California?',
        content: [
          "<strong>California's SB 868, the Plug and Play Solar Act, passed the state Assembly on August 25, 2026 and cleared the Senate shortly after, sending it to Governor Gavin Newsom's desk — he has until September 30, 2026 to sign or veto it.</strong> As written, it would exempt plug-in solar devices up to 1,200 watts AC per dwelling from utility interconnection applications, approval, and fees — but only through January 1, 2030, a sunset date built into the bill rather than a permanent exemption.",
          "<strong>Unlike Colorado and New Jersey, SB 868 would not override landlords or HOAs.</strong> A rental agreement that bars balcony fixtures would still bar them, and California's existing Solar Rights Act — which prohibits HOAs from banning solar — is written around roof-mounted systems, not plug-in devices on a shared-wall balcony, so it likely wouldn't extend automatic protection here. Check your own lease or HOA covenant separately if the bill becomes law.",
        ],
        columns: ['Field', 'California SB 868'],
        rows: [
          { Field: 'Status', 'California SB 868': "Passed legislature — awaiting governor's signature (deadline Sep 30, 2026)" },
          { Field: 'Would-be wattage cap', 'California SB 868': '1,200W AC per dwelling' },
          { Field: 'Utility exemption window', 'California SB 868': 'Through Jan 1, 2030 only (sunset date)' },
          { Field: 'HOA / landlord', 'California SB 868': 'NOT preempted — leases and HOA rules can still restrict' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Is the Economics Story Strong in California?',
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
          "<strong>California has the highest average residential electricity rate of any state tracked in this series, at roughly 33.3¢/kWh — nearly triple Utah's 11.6¢/kWh.</strong> If SB 868 becomes law and compliant hardware reaches the market, the return on an 800W kit should be the strongest of any state in this series, well above the roughly $150–$350/year national range tracked so far — though no California-specific dollar estimate exists yet since the law isn't in effect.",
          "Certification remains the other gate nationwide: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time. EcoFlow's STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.",
          '<strong>Once the bill is signed (or vetoed) and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in California today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About California Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in California right now?',
            a: "Not yet. SB 868 has passed the legislature but is not law until Governor Newsom signs it — he has until September 30, 2026 to sign or veto.",
          },
          {
            q: "What happens if Governor Newsom doesn't sign SB 868?",
            a: 'If he vetoes it or lets the deadline pass without signing, the bill fails and would need to be reintroduced in a future legislative session — check back after September 30, 2026 for the outcome.',
          },
          {
            q: 'Will SB 868 let my HOA or landlord ban balcony solar?',
            a: "Yes, potentially. Unlike Colorado and New Jersey, SB 868 does not preempt landlord leases or HOA rules — California's existing Solar Rights Act is written for rooftop systems, not plug-in balcony devices.",
          },
          {
            q: 'Is the 1,200W exemption permanent if the bill passes?',
            a: 'No — the utility-interconnection exemption in SB 868 is written to run only through January 1, 2030, not indefinitely. Watch for follow-up legislation as that date approaches.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Kalifornien legal?',
    dateModified: '2026-09-02',
    seoTitle: 'Ist Balkonsolar in Kalifornien legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Noch nicht – SB 868 hat das Parlament passiert und wartet auf die Unterschrift von Gouverneur Newsom bis zum 30. September 2026. Obergrenze wäre 1.200 W. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Eigenheimbesitzer, die prüfen, ob Balkonsolar in Kalifornien legal ist',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Kalifornien legal?',
        answer: 'Noch nicht. Kaliforniens SB 868 („Plug and Play Solar Act") hat im August 2026 beide Parlamentskammern passiert und liegt nun auf dem Schreibtisch von Gouverneur Gavin Newsom – er hat bis zum 30. September 2026 Zeit, es zu unterzeichnen oder ein Veto einzulegen. Bei Unterzeichnung würde es Geräte bis 1.200 W bis zum 1. Januar 2030 von Netzanschlussanforderungen befreien, aber Mietverträge oder HOA-Regeln nicht außer Kraft setzen.',
        bullets: [
          'SB 868 hat am 25. August 2026 die Assembly und kurz darauf den Senat passiert – wartet nun auf die Entscheidung von Gouverneur Newsom bis zum 30. September 2026',
          'Würde Geräte auf 1.200 W AC pro Wohneinheit begrenzen und bis zum 1. Januar 2030 von Netzanschlusspflichten befreien – ein Ablaufdatum, keine dauerhafte Befreiung',
          'Anders als Colorado und New Jersey würde es Vermieter oder HOAs NICHT daran hindern, die Geräte einzuschränken',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kaliforniens SB 868 ist noch kein Gesetz – es wartet auf die Unterschrift von Gouverneur Newsom, mit einer Frist bis zum 30. September 2026.',
          'Bei Unterzeichnung würde das Gesetz Geräte auf 1.200 W AC pro Wohneinheit begrenzen und von Netzanschlusspflichten befreien – jedoch nur bis zum 1. Januar 2030, einem im Gesetz festgelegten Ablaufdatum.',
          'Das Gesetz würde Mietverträge oder HOA-Einschränkungen NICHT außer Kraft setzen – Kaliforniens bestehender Solar Rights Act ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          'Kalifornien hat den höchsten durchschnittlichen Strompreis für Privathaushalte aller in dieser Serie erfassten Bundesstaaten, bei etwa 33,3 Cent/kWh – die stärkste potenzielle Wirtschaftlichkeit, sollte das Gesetz in Kraft treten und zertifizierte Hardware verfügbar sein.',
        ],
      },
      body1: {
        title: 'Was würde SB 868 in Kalifornien verlangen?',
        content: [
          'Kaliforniens SB 868, der Plug and Play Solar Act, passierte am 25. August 2026 die State Assembly und kurz darauf den Senat und liegt nun auf dem Schreibtisch von Gouverneur Gavin Newsom – er hat bis zum 30. September 2026 Zeit, es zu unterzeichnen oder ein Veto einzulegen. In der vorliegenden Fassung würde es steckerfertige Solargeräte bis 1.200 Watt AC pro Wohneinheit von Netzanschlussanträgen, Genehmigungspflichten und Gebühren befreien – allerdings nur bis zum 1. Januar 2030, einem im Gesetz festgelegten Ablaufdatum statt einer dauerhaften Befreiung.',
          'Anders als Colorado und New Jersey würde SB 868 Vermieter oder HOAs nicht außer Kraft setzen. Ein Mietvertrag, der Balkonanbauten untersagt, würde weiterhin gelten, und Kaliforniens bestehender Solar Rights Act – der HOA-Solarverbote untersagt – ist um dachmontierte Systeme herum formuliert, nicht um steckerfertige Geräte an einer gemeinsam genutzten Balkonwand, sodass er hier wahrscheinlich keinen automatischen Schutz bieten würde. Prüfen Sie Ihren eigenen Mietvertrag oder Ihre HOA-Satzung separat, falls das Gesetz in Kraft tritt.',
        ],
        columns: ['Feld', 'Kalifornien SB 868'],
        rows: [
          { Feld: 'Status', 'Kalifornien SB 868': 'Parlament passiert – wartet auf Unterschrift des Gouverneurs (Frist 30. Sep. 2026)' },
          { Feld: 'Geplante Leistungsobergrenze', 'Kalifornien SB 868': '1.200 W AC pro Wohneinheit' },
          { Feld: 'Befreiungszeitraum', 'Kalifornien SB 868': 'Nur bis 1. Jan. 2030 (Ablaufdatum)' },
          { Feld: 'HOA / Vermieter', 'Kalifornien SB 868': 'NICHT außer Kraft gesetzt – Mietverträge und HOA-Regeln können weiter einschränken' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Ist die Wirtschaftlichkeit in Kalifornien überzeugend?',
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
          'Kalifornien hat mit etwa 33,3 Cent/kWh den höchsten durchschnittlichen Strompreis für Privathaushalte aller in dieser Serie erfassten Bundesstaaten – fast das Dreifache von Utahs 11,6 Cent/kWh. Sollte SB 868 zum Gesetz werden und konforme Hardware auf den Markt kommen, dürfte die Rendite eines 800-W-Sets die stärkste unter allen Bundesstaaten dieser Serie sein, deutlich über der bisher beobachteten nationalen Spanne von etwa 150–350 $/Jahr – allerdings existiert noch keine kalifornienspezifische Schätzung, da das Gesetz noch nicht in Kraft ist.',
          'Die Zertifizierung bleibt bundesweit das andere Nadelöhr: Zum Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem die volle UL-3700-Zertifizierung bestätigt. EcoFlows STREAM Ultra ist das Produkt, das dem am nächsten kommt, wird aber derzeit speziell für Utah zum Verkauf angeboten.',
          'Bereit, konkrete Hardware zu vergleichen, sobald das Gesetz unterzeichnet (oder abgelehnt) ist und zertifizierte Hardware existiert? Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in Kalifornien zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Kalifornien',
        faqs: [
          {
            q: 'Ist Balkonsolar in Kalifornien derzeit legal?',
            a: 'Noch nicht. SB 868 hat das Parlament passiert, ist aber erst Gesetz, wenn Gouverneur Newsom unterschreibt – er hat bis zum 30. September 2026 Zeit, zu unterzeichnen oder ein Veto einzulegen.',
          },
          {
            q: 'Was passiert, wenn Gouverneur Newsom SB 868 nicht unterschreibt?',
            a: 'Legt er ein Veto ein oder lässt die Frist ohne Unterschrift verstreichen, scheitert das Gesetz und müsste in einer künftigen Sitzungsperiode neu eingebracht werden – prüfen Sie nach dem 30. September 2026, wie es ausgegangen ist.',
          },
          {
            q: 'Kann meine HOA oder mein Vermieter Balkonsolar trotz SB 868 verbieten?',
            a: 'Ja, möglicherweise. Anders als Colorado und New Jersey setzt SB 868 Mietverträge oder HOA-Regeln nicht außer Kraft – Kaliforniens bestehender Solar Rights Act ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          },
          {
            q: 'Ist die 1.200-W-Befreiung dauerhaft, falls das Gesetz verabschiedet wird?',
            a: 'Nein – die Netzanschlussbefreiung in SB 868 ist nur bis zum 1. Januar 2030 vorgesehen, nicht unbegrenzt. Achten Sie auf Folgegesetze, wenn sich dieses Datum nähert.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en California?',
    dateModified: '2026-09-02',
    seoTitle: '¿Es legal la energía solar de balcón en California? | Prompt Bites | PromptQuorum',
    metaDescription: 'Todavía no — el SB 868 pasó la legislatura y espera la firma del gobernador Newsom antes del 30 de septiembre de 2026. Límite propuesto de 1200 W. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en California',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en California?',
        answer: 'Todavía no. El SB 868 de California ("Plug and Play Solar Act") pasó ambas cámaras de la legislatura en agosto de 2026 y ahora está en el escritorio del gobernador Gavin Newsom — tiene hasta el 30 de septiembre de 2026 para firmarlo o vetarlo. Si se firma, eximiría a los dispositivos de hasta 1200 W de los requisitos de interconexión con la empresa eléctrica hasta el 1 de enero de 2030, pero no anularía los contratos de alquiler ni las normas de las HOA.',
        bullets: [
          'El SB 868 pasó la Asamblea el 25 de agosto de 2026 y el Senado poco después — ahora espera la decisión del gobernador Newsom antes del 30 de septiembre de 2026',
          'Limitaría los dispositivos a 1200 W CA por vivienda, exentos de interconexión con la empresa eléctrica hasta el 1 de enero de 2030 — una fecha de caducidad, no una exención permanente',
          'A diferencia de Colorado y Nueva Jersey, NO impediría que arrendadores o HOA restrinjan los dispositivos',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El SB 868 de California todavía no es ley — espera la firma del gobernador Newsom, con un plazo hasta el 30 de septiembre de 2026 para firmarlo o vetarlo.',
          'De firmarse, la ley limitaría los dispositivos a 1200 W CA por vivienda y los eximiría de los requisitos de interconexión con la empresa eléctrica — pero solo hasta el 1 de enero de 2030, una fecha de caducidad incorporada en la ley.',
          'La ley NO anularía los contratos de alquiler ni las restricciones de las HOA — la Solar Rights Act vigente en California está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          'California tiene la tarifa eléctrica residencial promedio más alta de cualquier estado seguido en esta serie, alrededor de 33.3 ¢/kWh — la mejor economía potencial si la ley se aprueba y llega hardware certificado.',
        ],
      },
      body1: {
        title: '¿Qué exigiría el SB 868 en California?',
        content: [
          'El SB 868 de California, la Plug and Play Solar Act, pasó la Asamblea estatal el 25 de agosto de 2026 y el Senado poco después, y ahora está en el escritorio del gobernador Gavin Newsom — tiene hasta el 30 de septiembre de 2026 para firmarlo o vetarlo. Tal como está redactado, eximiría a los dispositivos solares enchufables de hasta 1200 vatios CA por vivienda de las solicitudes de interconexión, la aprobación y las tarifas de la empresa eléctrica — pero solo hasta el 1 de enero de 2030, una fecha de caducidad incorporada en la ley en lugar de una exención permanente.',
          'A diferencia de Colorado y Nueva Jersey, el SB 868 no anularía a los arrendadores ni a las HOA. Un contrato de alquiler que prohíba instalaciones en el balcón seguiría prohibiéndolas, y la Solar Rights Act vigente en California — que prohíbe a las HOA prohibir el uso de energía solar — está redactada en torno a sistemas montados en tejado, no a dispositivos enchufables en un balcón de pared compartida, por lo que probablemente no ofrecería protección automática aquí. Revisa tu propio contrato de alquiler o el reglamento de tu HOA por separado si la ley se aprueba.',
        ],
        columns: ['Campo', 'California SB 868'],
        rows: [
          { Campo: 'Estado', 'California SB 868': 'Aprobado por la legislatura — espera la firma del gobernador (plazo 30 sep. 2026)' },
          { Campo: 'Límite de potencia propuesto', 'California SB 868': '1200 W CA por vivienda' },
          { Campo: 'Ventana de exención de la empresa eléctrica', 'California SB 868': 'Solo hasta el 1 de enero de 2030 (fecha de caducidad)' },
          { Campo: 'HOA / arrendador', 'California SB 868': 'NO anulados — los contratos de alquiler y las normas de las HOA pueden seguir restringiendo' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Es sólida la economía de la energía solar de balcón en California?',
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
          'California tiene la tarifa eléctrica residencial promedio más alta de cualquier estado seguido en esta serie, alrededor de 33.3 ¢/kWh — casi el triple de los 11.6 ¢/kWh de Utah. Si el SB 868 se convierte en ley y llega hardware compatible al mercado, el retorno de un kit de 800 W debería ser el más fuerte de cualquier estado de esta serie, muy por encima del rango nacional de aproximadamente $150–$350 al año seguido hasta ahora — aunque todavía no existe una estimación específica para California, ya que la ley aún no está vigente.',
          'La certificación sigue siendo el otro obstáculo a nivel nacional: al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 total. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente para Utah.',
          '¿Listo para comparar hardware real una vez que la ley se firme (o se vete) y exista hardware certificado? Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en California hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en California',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en California en este momento?',
            a: 'Todavía no. El SB 868 ha pasado la legislatura, pero no es ley hasta que el gobernador Newsom lo firme — tiene hasta el 30 de septiembre de 2026 para firmarlo o vetarlo.',
          },
          {
            q: '¿Qué pasa si el gobernador Newsom no firma el SB 868?',
            a: 'Si lo veta o deja pasar el plazo sin firmarlo, la ley fracasa y tendría que volver a presentarse en una sesión legislativa futura — consulta después del 30 de septiembre de 2026 para conocer el resultado.',
          },
          {
            q: '¿El SB 868 permitirá que mi HOA o arrendador prohíba la energía solar de balcón?',
            a: 'Sí, es posible. A diferencia de Colorado y Nueva Jersey, el SB 868 no anula los contratos de alquiler ni las normas de las HOA — la Solar Rights Act vigente en California está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          },
          {
            q: '¿La exención de 1200 W sería permanente si se aprueba la ley?',
            a: 'No — la exención de interconexión con la empresa eléctrica en el SB 868 está redactada para durar solo hasta el 1 de enero de 2030, no de forma indefinida. Presta atención a legislación de seguimiento a medida que se acerque esa fecha.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal en Californie ?',
    dateModified: '2026-09-02',
    seoTitle: 'Le solaire de balcon est-il légal en Californie ? | Prompt Bites | PromptQuorum',
    metaDescription: "Pas encore — le SB 868 a été adopté par le Parlement et attend la signature du gouverneur Newsom avant le 30 septembre 2026. Plafond prévu de 1 200 W. Réponse rapide de PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal en Californie",
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal en Californie ?',
        answer: "Pas encore. Le SB 868 de Californie (« Plug and Play Solar Act ») a été adopté par les deux chambres du Parlement en août 2026 et se trouve maintenant sur le bureau du gouverneur Gavin Newsom — il a jusqu'au 30 septembre 2026 pour le signer ou y opposer son veto. S'il est signé, il exempterait les appareils jusqu'à 1 200 W des exigences de raccordement au réseau jusqu'au 1er janvier 2030, mais ne primerait pas sur les baux ou les règlements de copropriété.",
        bullets: [
          "Le SB 868 a été adopté par l'Assemblée le 25 août 2026 puis par le Sénat peu après — attend désormais la décision du gouverneur Newsom avant le 30 septembre 2026",
          "Plafonnerait les appareils à 1 200 W CA par logement, exemptés de raccordement au réseau jusqu'au 1er janvier 2030 — une date d'expiration, pas une exemption permanente",
          "Contrairement au Colorado et au New Jersey, il n'empêcherait PAS les bailleurs ou les copropriétés de restreindre les appareils",
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Le SB 868 de Californie n'est pas encore une loi — il attend la signature du gouverneur Newsom, avec une échéance au 30 septembre 2026 pour le signer ou y opposer son veto.",
          "S'il est signé, le texte plafonnerait les appareils à 1 200 W CA par logement et les exempterait des exigences de raccordement au réseau — mais seulement jusqu'au 1er janvier 2030, une date d'expiration intégrée à la loi.",
          "Le texte ne primerait PAS sur les baux ou les restrictions des copropriétés — le Solar Rights Act californien existant est rédigé pour les systèmes en toiture, pas pour les appareils branchables de balcon.",
          "La Californie a le tarif résidentiel moyen de l'électricité le plus élevé de tous les États suivis dans cette série, environ 33,3 ¢/kWh — le potentiel économique le plus fort si la loi est adoptée et du matériel certifié arrive sur le marché.",
        ],
      },
      body1: {
        title: 'Que prévoirait le SB 868 en Californie ?',
        content: [
          "Le SB 868 de Californie, le Plug and Play Solar Act, a été adopté par l'Assemblée de l'État le 25 août 2026 puis par le Sénat peu après, et se trouve désormais sur le bureau du gouverneur Gavin Newsom — il a jusqu'au 30 septembre 2026 pour le signer ou y opposer son veto. Tel que rédigé, il exempterait les appareils solaires branchables jusqu'à 1 200 watts CA par logement des demandes de raccordement, des approbations et des frais du fournisseur d'électricité — mais seulement jusqu'au 1er janvier 2030, une date d'expiration intégrée à la loi plutôt qu'une exemption permanente.",
          "Contrairement au Colorado et au New Jersey, le SB 868 ne primerait pas sur les bailleurs ou les copropriétés. Un bail interdisant les installations sur balcon continuerait de les interdire, et le Solar Rights Act californien existant — qui interdit aux copropriétés de bannir le solaire — est rédigé autour des systèmes montés en toiture, pas des appareils branchables sur un balcon à mur mitoyen, et n'offrirait donc probablement pas de protection automatique ici. Vérifiez séparément votre propre bail ou règlement de copropriété si la loi est adoptée.",
        ],
        columns: ['Champ', 'Californie SB 868'],
        rows: [
          { Champ: 'Statut', 'Californie SB 868': "Adopté par le Parlement — attend la signature du gouverneur (échéance 30 sept. 2026)" },
          { Champ: 'Plafond de puissance envisagé', 'Californie SB 868': '1 200 W CA par logement' },
          { Champ: "Fenêtre d'exemption réseau", 'Californie SB 868': "Jusqu'au 1er janvier 2030 seulement (date d'expiration)" },
          { Champ: 'Copropriété / bailleur', 'Californie SB 868': 'PAS primé — baux et règlements de copropriété peuvent toujours restreindre' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Le modèle économique est-il solide en Californie ?',
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
          "La Californie a le tarif résidentiel moyen de l'électricité le plus élevé de tous les États suivis dans cette série, environ 33,3 ¢/kWh — près du triple des 11,6 ¢/kWh de l'Utah. Si le SB 868 devient loi et que du matériel conforme arrive sur le marché, le rendement d'un kit de 800 W devrait être le plus fort de tous les États de cette série, bien au-dessus de la fourchette nationale d'environ 175–350 $/an suivie jusqu'ici — même si aucune estimation propre à la Californie n'existe encore puisque la loi n'est pas en vigueur.",
          "La certification reste l'autre obstacle à l'échelle nationale : à l'heure de la rédaction, aucun système solaire branchable complet n'a confirmé une certification UL 3700 intégrale. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement pour l'Utah.",
          "<strong>Prêt à comparer du matériel concret une fois la loi signée (ou rejetée) et du matériel certifié disponible ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu'un kit précis est certifié ou disponible en Californie aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon en Californie',
        faqs: [
          {
            q: 'Le solaire de balcon est-il légal en Californie dès maintenant ?',
            a: "Pas encore. Le SB 868 a été adopté par le Parlement mais ne devient loi qu'une fois signé par le gouverneur Newsom — il a jusqu'au 30 septembre 2026 pour le signer ou y opposer son veto.",
          },
          {
            q: "Que se passe-t-il si le gouverneur Newsom ne signe pas le SB 868 ?",
            a: "S'il y oppose son veto ou laisse passer l'échéance sans signer, le texte échoue et devrait être réintroduit lors d'une session législative future — vérifiez le résultat après le 30 septembre 2026.",
          },
          {
            q: 'Le SB 868 permettra-t-il à ma copropriété ou à mon bailleur d\'interdire le solaire de balcon ?',
            a: "Oui, potentiellement. Contrairement au Colorado et au New Jersey, le SB 868 ne prime pas sur les baux ou les règlements de copropriété — le Solar Rights Act californien existant est rédigé pour les systèmes en toiture, pas pour les appareils branchables de balcon.",
          },
          {
            q: "L'exemption de 1 200 W serait-elle permanente si la loi est adoptée ?",
            a: "Non — l'exemption de raccordement réseau du SB 868 est rédigée pour ne durer que jusqu'au 1er janvier 2030, pas indéfiniment. Surveillez une éventuelle législation de suivi à l'approche de cette date.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ja.webp',
    title: 'カリフォルニア州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-09-02',
    seoTitle: 'カリフォルニア州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'まだです — SB 868は州議会を通過し、2026年9月30日までにニューサム知事の署名を待っています。上限は1,200Wになる見込みです。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'カリフォルニア州でバルコニーソーラーが合法かどうかを確認している米国の賃貸居住者・持ち家所有者',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'カリフォルニア州でバルコニーソーラーは合法ですか？',
        answer: 'まだ合法ではない。カリフォルニア州のSB 868（「Plug and Play Solar Act」）は2026年8月に州議会の両院を通過し、現在はギャビン・ニューサム知事の元にある — 知事は2026年9月30日までに署名するか拒否権を行使するかを決める必要がある。仮に署名されれば、最大1,200Wの機器を2030年1月1日まで電力会社への系統連系要件から免除するが、賃貸契約やHOA規約を無効化するものではない。',
        bullets: [
          'SB 868は2026年8月25日に州下院を、その直後に州上院を通過 — 現在は2026年9月30日までのニューサム知事の判断待ち',
          '住戸あたり上限1,200W ACとし、2030年1月1日まで電力会社への系統連系を免除する見込み — これは恒久的な免除ではなく期限付きの措置',
          'コロラド州やニュージャージー州と異なり、家主やHOAによる制限を禁じるものではない',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'カリフォルニア州のSB 868はまだ法律ではない — ニューサム知事の署名待ちで、署名または拒否権行使の期限は2026年9月30日である。',
          '仮に署名されれば、住戸あたり上限1,200W ACとし、電力会社への系統連系要件を免除する見込みだが、これは2030年1月1日までという法案に組み込まれた期限付きの措置である。',
          'この法案は賃貸契約やHOAによる制限を無効化するものではない — カリフォルニア州の既存のSolar Rights Actは屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていない。',
          'カリフォルニア州はこのシリーズで追跡している州の中で平均住宅用電気料金が最も高く、約33.3セント/kWhである — 法案が成立し認証済みハードウェアが登場すれば、最も強い経済性が期待できる。',
        ],
      },
      body1: {
        title: 'SB 868がカリフォルニア州で求める内容とは？',
        content: [
          'カリフォルニア州のSB 868（Plug and Play Solar Act）は2026年8月25日に州下院を、その直後に州上院を通過し、現在はギャビン・ニューサム知事の元にある — 知事は2026年9月30日までに署名するか拒否権を行使するかを決める必要がある。現行の条文では、住戸あたり最大1,200ワットACのプラグイン式ソーラー機器を、電力会社への系統連系申請・承認・手数料から免除する見込みだが、これは恒久的な免除ではなく2030年1月1日までという法案に組み込まれた期限付きの措置である。',
          'コロラド州やニュージャージー州と異なり、SB 868は家主やHOAを無効化するものではない。バルコニーへの設置を禁じる賃貸契約は引き続き有効であり、HOAによるソーラー禁止を禁じるカリフォルニア州の既存のSolar Rights Actは屋根設置型システムを前提として書かれているため、共用壁のバルコニーに設置するプラグイン式機器には自動的な保護が及ばない可能性が高い。法案が成立した場合は、自分の賃貸契約書やHOA規約を別途確認してほしい。',
        ],
        columns: ['項目', 'カリフォルニア州 SB 868'],
        rows: [
          { 項目: '状況', 'カリフォルニア州 SB 868': '州議会通過 — 知事の署名待ち（期限は2026年9月30日）' },
          { 項目: '想定される出力上限', 'カリフォルニア州 SB 868': '住戸あたり1,200W AC' },
          { 項目: '免除期間', 'カリフォルニア州 SB 868': '2030年1月1日まで限定（期限付き）' },
          { 項目: 'HOA・家主', 'カリフォルニア州 SB 868': '無効化されない — 賃貸契約やHOA規約による制限は継続可能' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'カリフォルニア州の経済性は魅力的か？',
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
          'カリフォルニア州は、このシリーズで追跡している州の中で平均住宅用電気料金が最も高く、約33.3セント/kWh — ユタ州の11.6セント/kWhのほぼ3倍にあたる。SB 868が成立し適合ハードウェアが市場に登場すれば、800Wキットの回収額はこのシリーズの中で最も強い水準になると見込まれ、これまで追跡してきた年間約150〜350ドルという全国レンジを大きく上回る可能性がある — ただし、法律がまだ施行されていないため、カリフォルニア州特有の金額はまだ存在しない。',
          '認証は全米共通のもう一つの関門である — 執筆時点で、完全なプラグイン式ソーラーシステムでUL 3700の完全認証を取得したと確認されたものはない。EcoFlowのSTREAM Ultraが最も市場に近い製品だが、現在はユタ州向けに限定して販売されている。',
          '法案が署名（または拒否）され、認証済みハードウェアが登場したら、実際の製品を比較する準備をしよう。<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧いただきたい — これらは単なる製品リンクであり、特定のキットがカリフォルニア州で認証済み・販売中であると主張するものではない。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'カリフォルニア州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'カリフォルニア州で今すぐバルコニーソーラーは合法ですか？',
            a: 'まだ合法ではありません。SB 868は州議会を通過しましたが、ニューサム知事が署名するまでは法律になりません — 知事は2026年9月30日までに署名するか拒否権を行使する必要があります。',
          },
          {
            q: 'ニューサム知事がSB 868に署名しなかった場合はどうなりますか？',
            a: '知事が拒否権を行使するか、署名しないまま期限を迎えた場合、法案は不成立となり、将来の会期で再提出する必要があります — 結果については2026年9月30日以降に改めて確認してください。',
          },
          {
            q: 'SB 868が成立しても、HOAや家主はバルコニーソーラーを禁止できますか？',
            a: 'はい、その可能性があります。コロラド州やニュージャージー州と異なり、SB 868は賃貸契約やHOA規約を無効化しません — カリフォルニア州の既存のSolar Rights Actは屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていません。',
          },
          {
            q: '法案が成立した場合、1,200Wの免除は恒久的ですか？',
            a: 'いいえ — SB 868の電力会社系統連系免除は2030年1月1日までと定められており、無期限ではありません。その期日が近づくにつれ、後継の法案が提出される可能性に注目してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-zh.webp',
    title: '加利福尼亚州的阳台太阳能合法吗？',
    dateModified: '2026-09-02',
    seoTitle: '加利福尼亚州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '尚未合法——SB 868已通过州议会,正等待州长纽森在2026年9月30日前签署。拟定功率上限为1,200瓦。PromptQuorum为您解答。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在加利福尼亚州是否合法的美国租户和房主',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '加利福尼亚州的阳台太阳能合法吗？',
        answer: '尚未合法。加利福尼亚州SB 868法案("插即用太阳能法案")已于2026年8月通过州议会两院表决,目前正提交州长加文·纽森审议——他必须在2026年9月30日前签署或否决该法案。若获签署,该法案将使功率不超过1,200瓦的设备在2030年1月1日之前豁免电力公司并网要求,但不会取代租约或业主协会（HOA）的规定。',
        bullets: [
          'SB 868于2026年8月25日通过州众议院,随后不久通过州参议院——目前等待纽森州长在2026年9月30日前作出决定',
          '拟对每套住宅的设备设定1,200瓦交流功率上限,并在2030年1月1日之前豁免电力公司并网要求——这是一个截止日期,而非永久豁免',
          '与科罗拉多州和新泽西州不同,该法案不会禁止房东或HOA限制此类设备',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '加利福尼亚州SB 868法案尚未成为法律——正等待纽森州长签署,签署或否决的截止日期为2026年9月30日。',
          '若获签署,该法案将对每套住宅的设备设定1,200瓦交流功率上限,并豁免电力公司并网要求——但仅豁免至2030年1月1日,这是法案中内置的截止日期。',
          '该法案不会取代租约或HOA的限制规定——加利福尼亚州现行的《太阳能权利法》是针对屋顶系统制定的,并不适用于插电式阳台设备。',
          '加利福尼亚州是本系列追踪各州中住宅平均电价最高的州,约为每千瓦时33.3美分——若法案通过且认证硬件上市,经济回报潜力将是最强的。',
        ],
      },
      body1: {
        title: 'SB 868法案将对加利福尼亚州提出哪些要求？',
        content: [
          '加利福尼亚州SB 868法案（插即用太阳能法案）已于2026年8月25日通过州众议院表决,随后不久通过州参议院,目前正提交州长加文·纽森审议——他必须在2026年9月30日前签署或否决该法案。按现有条文,该法案将使每套住宅功率不超过1,200瓦交流的插电式太阳能设备豁免电力公司的并网申请、审批和费用要求——但这一豁免仅持续至2030年1月1日,是法案中内置的截止日期,而非永久性豁免。',
          '与科罗拉多州和新泽西州不同,SB 868不会取代房东或HOA的规定。禁止阳台安装设施的租约仍将继续有效,而加利福尼亚州现行的《太阳能权利法》——该法禁止HOA禁止使用太阳能——是针对屋顶安装系统制定的,并不涵盖安装在共用墙阳台上的插电式设备,因此很可能不会自动为此类设备提供保护。若该法案获得通过,请另行核查你自己的租约或HOA规约。',
        ],
        columns: ['项目', '加利福尼亚州 SB 868'],
        rows: [
          { 项目: '状态', '加利福尼亚州 SB 868': '已通过州议会——等待州长签署（截止日期为2026年9月30日）' },
          { 项目: '拟定功率上限', '加利福尼亚州 SB 868': '每套住宅1,200瓦交流' },
          { 项目: '并网豁免窗口期', '加利福尼亚州 SB 868': '仅至2030年1月1日（截止日期）' },
          { 项目: 'HOA / 房东', '加利福尼亚州 SB 868': '未被取代——租约和HOA规定仍可施加限制' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '加利福尼亚州的经济性如何？',
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
          '加利福尼亚州是本系列追踪各州中住宅平均电价最高的州,约为每千瓦时33.3美分——几乎是犹他州每千瓦时11.6美分的三倍。若SB 868获得通过且合规硬件进入市场,一套800瓦套件的回报预计将是本系列中最强的,远高于此前追踪的全国范围（每年约150-350美元）——不过由于该法律尚未生效,目前还没有针对加利福尼亚州的具体金额估算。',
          '认证仍是全美性的另一道门槛：截至撰写本文时,尚无任何完整的插电式太阳能系统确认已完成完整的UL 3700认证。EcoFlow的STREAM Ultra是最接近上市的产品,但目前专门面向犹他州市场销售。',
          '等法案获得签署（或被否决）、认证硬件面世后,你会想比较真正的产品选项。请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接,并不代表任何特定套件已在加利福尼亚州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于加利福尼亚州阳台太阳能的快速问答',
        faqs: [
          {
            q: '加利福尼亚州现在阳台太阳能合法吗？',
            a: '尚未合法。SB 868已通过州议会,但在纽森州长签署之前尚不具有法律效力——他必须在2026年9月30日前签署或否决该法案。',
          },
          {
            q: '如果纽森州长不签署SB 868会怎样？',
            a: '如果他否决该法案,或在截止日期前未签署,该法案将失败,需要在未来的立法会期重新提出——请在2026年9月30日之后查看结果。',
          },
          {
            q: '即便SB 868获得通过,我的HOA或房东能禁止阳台太阳能吗？',
            a: '有可能。与科罗拉多州和新泽西州不同,SB 868不会取代租约或HOA规定——加利福尼亚州现行的《太阳能权利法》是针对屋顶系统制定的,并不适用于插电式阳台设备。',
          },
          {
            q: '如果法案通过,1,200瓦的豁免是永久性的吗？',
            a: '不是——SB 868中的电力公司并网豁免仅规定持续至2030年1月1日,并非无限期。随着该日期临近,请留意是否有后续立法。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal na Califórnia?',
    dateModified: '2026-09-02',
    seoTitle: 'A energia solar de varanda é legal na Califórnia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ainda não — o SB 868 foi aprovado pela assembleia legislativa e aguarda a assinatura do governador Newsom até 30 de setembro de 2026. Limite proposto de 1.200 W. Resposta rápida da PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal na Califórnia',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal na Califórnia?',
        answer: 'Ainda não. O SB 868 da Califórnia ("Plug and Play Solar Act") foi aprovado pelas duas casas legislativas em agosto de 2026 e agora está na mesa do governador Gavin Newsom — ele tem até 30 de setembro de 2026 para assiná-lo ou vetá-lo. Se sancionado, isentaria dispositivos de até 1.200 W dos requisitos de interconexão com a concessionária até 1º de janeiro de 2030, mas não anularia contratos de aluguel nem regras de HOA.',
        bullets: [
          'O SB 868 foi aprovado pela Assembleia em 25 de agosto de 2026 e pelo Senado logo depois — agora aguarda a decisão do governador Newsom até 30 de setembro de 2026',
          'Limitaria os dispositivos a 1.200 W CA por unidade habitacional, isentos de interconexão com a concessionária até 1º de janeiro de 2030 — uma data de expiração, não uma isenção permanente',
          'Diferentemente do Colorado e de Nova Jersey, NÃO impediria que locadores ou HOAs restrinjam os dispositivos',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O SB 868 da Califórnia ainda não é lei — aguarda a assinatura do governador Newsom, com prazo até 30 de setembro de 2026 para sancionar ou vetar.',
          'Se sancionado, o projeto limitaria os dispositivos a 1.200 W CA por unidade habitacional e os isentaria dos requisitos de interconexão com a concessionária — mas apenas até 1º de janeiro de 2030, uma data de expiração já embutida no texto.',
          'O projeto NÃO anularia contratos de aluguel nem restrições de HOA — a Solar Rights Act vigente na Califórnia foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          'A Califórnia tem a tarifa residencial média de eletricidade mais alta entre os estados acompanhados nesta série, cerca de 33,3 ¢/kWh — o potencial econômico mais forte, caso o projeto vire lei e hardware certificado chegue ao mercado.',
        ],
      },
      body1: {
        title: 'O que o SB 868 vai exigir na Califórnia?',
        content: [
          'O SB 868 da Califórnia, o Plug and Play Solar Act, foi aprovado pela Assembleia estadual em 25 de agosto de 2026 e pelo Senado logo depois, seguindo agora para a mesa do governador Gavin Newsom — ele tem até 30 de setembro de 2026 para sancioná-lo ou vetá-lo. Como redigido, isentaria dispositivos solares plug-in de até 1.200 watts CA por unidade habitacional de solicitações de interconexão, aprovação e taxas da concessionária — mas apenas até 1º de janeiro de 2030, uma data de expiração embutida no texto, e não uma isenção permanente.',
          'Diferentemente do Colorado e de Nova Jersey, o SB 868 não anularia locadores nem HOAs. Um contrato de aluguel que proíba instalações na varanda continuaria a proibi-las, e a Solar Rights Act vigente na Califórnia — que proíbe HOAs de banir energia solar — foi redigida em torno de sistemas montados em telhado, não de dispositivos plug-in em uma varanda de parede compartilhada, portanto provavelmente não estenderia proteção automática aqui. Verifique separadamente seu próprio contrato de aluguel ou regulamento de HOA caso o projeto vire lei.',
        ],
        columns: ['Campo', 'Califórnia SB 868'],
        rows: [
          { Campo: 'Status', 'Califórnia SB 868': 'Aprovado pela assembleia legislativa — aguardando assinatura do governador (prazo 30 set. 2026)' },
          { Campo: 'Limite de potência proposto', 'Califórnia SB 868': '1.200 W CA por unidade habitacional' },
          { Campo: 'Janela de isenção da concessionária', 'Califórnia SB 868': 'Apenas até 1º de janeiro de 2030 (data de expiração)' },
          { Campo: 'HOA / locador', 'Califórnia SB 868': 'NÃO anulados — contratos e regras de HOA ainda podem restringir' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'A economia da Califórnia é vantajosa?',
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
          'A Califórnia tem a tarifa residencial média de eletricidade mais alta entre os estados acompanhados nesta série, cerca de 33,3 ¢/kWh — quase o triplo dos 11,6 ¢/kWh de Utah. Se o SB 868 virar lei e hardware compatível chegar ao mercado, o retorno de um kit de 800 W deve ser o mais forte entre todos os estados desta série, bem acima da faixa nacional de cerca de US$ 150–350/ano acompanhada até aqui — embora ainda não exista uma estimativa específica para a Califórnia, já que a lei não está em vigor.',
          'A certificação continua sendo o outro obstáculo em nível nacional: no momento da redação deste texto, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente é vendido especificamente para Utah.',
          'Pronto para comparar hardware real assim que o projeto for sancionado (ou vetado) e existir hardware certificado? Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível na Califórnia hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda na Califórnia',
        faqs: [
          {
            q: 'A energia solar de varanda é legal na Califórnia agora?',
            a: 'Ainda não. O SB 868 foi aprovado pela assembleia legislativa, mas só se torna lei quando o governador Newsom o assinar — ele tem até 30 de setembro de 2026 para sancionar ou vetar.',
          },
          {
            q: 'O que acontece se o governador Newsom não assinar o SB 868?',
            a: 'Se ele vetar ou deixar o prazo passar sem assinar, o projeto fracassa e precisaria ser reapresentado em uma sessão legislativa futura — confira o resultado após 30 de setembro de 2026.',
          },
          {
            q: 'O SB 868 vai permitir que minha HOA ou locador proíba a energia solar de varanda?',
            a: 'Sim, potencialmente. Diferentemente do Colorado e de Nova Jersey, o SB 868 não anula contratos de aluguel nem regras de HOA — a Solar Rights Act vigente na Califórnia foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          },
          {
            q: 'A isenção de 1.200 W seria permanente se o projeto for aprovado?',
            a: 'Não — a isenção de interconexão com a concessionária no SB 868 é redigida para valer apenas até 1º de janeiro de 2030, não indefinidamente. Fique atento a legislação de acompanhamento conforme essa data se aproxima.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا؟',
    dateModified: '2026-09-02',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'ليس بعد — أقرّ SB 868 مجلسي التشريع الأمريكي وينتظر توقيع الحاكم نيوسوم بحلول 30 سبتمبر 2026. الحد المقترح 1,200 واط. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون والملاك في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في كاليفورنيا',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا؟',
        answer: 'ليس بعد. أقرّ مجلسا التشريع في كاليفورنيا مشروع القانون SB 868 ("Plug and Play Solar Act") في أغسطس 2026، وهو الآن على مكتب الحاكم غافين نيوسوم — أمامه حتى 30 سبتمبر 2026 للتوقيع عليه أو رفضه. وفي حال التوقيع، سيُعفي الأجهزة حتى 1,200 واط من متطلبات الربط الشبكي مع شركة الكهرباء حتى 1 يناير 2030، لكنه لن يُبطل عقود الإيجار أو لوائح جمعيات الملاك (HOA).',
        bullets: [
          'أقرّ مجلس النواب SB 868 في 25 أغسطس 2026 وأقرّه مجلس الشيوخ بعد ذلك بوقت قصير — وينتظر الآن قرار الحاكم نيوسوم بحلول 30 سبتمبر 2026',
          'سيحدّ الأجهزة عند 1,200 واط تيار متردد لكل وحدة سكنية، ويُعفيها من الربط الشبكي حتى 1 يناير 2030 فقط — وهو تاريخ انتهاء وليس إعفاءً دائمًا',
          'خلافًا لكولورادو ونيوجيرسي، لن يمنع الملاك المؤجرين أو جمعيات الملاك من تقييد الأجهزة',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'مشروع القانون SB 868 في كاليفورنيا لم يصبح قانونًا بعد — وهو ينتظر توقيع الحاكم نيوسوم، بموعد نهائي في 30 سبتمبر 2026 للتوقيع أو الرفض.',
          'في حال التوقيع، سيحدّ القانون الأجهزة عند 1,200 واط تيار متردد لكل وحدة سكنية ويُعفيها من متطلبات الربط الشبكي — لكن فقط حتى 1 يناير 2030، وهو تاريخ انتهاء مدرج في نص القانون.',
          'لن يُبطل القانون عقود الإيجار أو قيود جمعيات الملاك (HOA) — قانون Solar Rights Act الحالي في كاليفورنيا مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          'تمتلك كاليفورنيا أعلى متوسط تعرفة كهرباء سكنية بين جميع الولايات المتتبَّعة في هذه السلسلة، عند نحو 33.3 سنتًا لكل كيلوواط ساعة — ما يمنحها أقوى جدوى اقتصادية محتملة إذا أصبح مشروع القانون قانونًا وتوفرت أجهزة معتمدة.',
        ],
      },
      body1: {
        title: 'ما الذي سيتطلبه SB 868 في كاليفورنيا؟',
        content: [
          'أقرّ مجلس النواب في كاليفورنيا مشروع القانون SB 868 (Plug and Play Solar Act) في 25 أغسطس 2026، وأقرّه مجلس الشيوخ بعد ذلك بوقت قصير، وهو الآن على مكتب الحاكم غافين نيوسوم — أمامه حتى 30 سبتمبر 2026 للتوقيع عليه أو رفضه. وكما هو مكتوب، سيُعفي أجهزة الطاقة الشمسية القابلة للتوصيل المباشر حتى 1,200 واط تيار متردد لكل وحدة سكنية من طلبات الربط الشبكي والموافقة ورسوم شركة الكهرباء — لكن فقط حتى 1 يناير 2030، وهو تاريخ انتهاء مدرج في نص القانون وليس إعفاءً دائمًا.',
          'خلافًا لكولورادو ونيوجيرسي، لن يُبطل SB 868 صلاحيات الملاك المؤجرين أو جمعيات الملاك (HOA). فعقد الإيجار الذي يحظر التركيبات على الشرفة سيظل يحظرها، وقانون Solar Rights Act الحالي في كاليفورنيا — الذي يمنع جمعيات الملاك من حظر الطاقة الشمسية — مكتوب حول الأنظمة المثبتة على الأسطح، وليس الأجهزة القابلة للتوصيل المباشر على شرفة ذات جدار مشترك، لذا من المرجح ألا يمتد ليشمل حماية تلقائية هنا. تحقق من عقد إيجارك أو لائحة جمعية الملاك الخاصة بك بشكل منفصل إذا أصبح مشروع القانون قانونًا.',
        ],
        columns: ['الحقل', 'كاليفورنيا SB 868'],
        rows: [
          { الحقل: 'الحالة', 'كاليفورنيا SB 868': 'أقرّه مجلسا التشريع — بانتظار توقيع الحاكم (الموعد النهائي 30 سبتمبر 2026)' },
          { الحقل: 'الحد الأقصى المقترح للطاقة', 'كاليفورنيا SB 868': '1,200 واط تيار متردد لكل وحدة سكنية' },
          { الحقل: 'نافذة إعفاء الربط الشبكي', 'كاليفورنيا SB 868': 'حتى 1 يناير 2030 فقط (تاريخ انتهاء)' },
          { الحقل: 'جمعيات الملاك / الملاك المؤجرون', 'كاليفورنيا SB 868': 'لم يُبطَل — عقود الإيجار ولوائح جمعيات الملاك يمكن أن تظل مقيِّدة' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل الجدوى الاقتصادية قوية في كاليفورنيا؟',
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
          'تمتلك كاليفورنيا أعلى متوسط تعرفة كهرباء سكنية بين جميع الولايات المتتبَّعة في هذه السلسلة، عند نحو 33.3 سنتًا لكل كيلوواط ساعة — ما يقارب ثلاثة أضعاف تعرفة يوتا البالغة 11.6 سنتًا. إذا أصبح SB 868 قانونًا ووصلت أجهزة متوافقة إلى السوق، فمن المتوقع أن يكون عائد مجموعة 800 واط الأقوى بين جميع الولايات في هذه السلسلة، أعلى بكثير من النطاق الوطني الذي تم تتبعه حتى الآن والبالغ نحو 150–350 دولارًا سنويًا — رغم عدم وجود تقدير خاص بكاليفورنيا بعد لأن القانون لم يدخل حيز التنفيذ.',
          'يبقى الاعتماد العقبة الأخرى على مستوى البلاد: حتى وقت كتابة هذا المقال، لم يؤكد أي نظام شمسي كامل قابل للتوصيل المباشر حصوله على اعتماد UL 3700 الكامل. يُعد جهاز EcoFlow STREAM Ultra الأقرب إلى السوق، لكنه يُطرح للبيع حاليًا خصيصًا في يوتا.',
          'هل أنت مستعد لمقارنة الأجهزة الفعلية بمجرد التوقيع على مشروع القانون (أو رفضه) وتوفر أجهزة معتمدة؟ اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في كاليفورنيا اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في كاليفورنيا',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا الآن؟',
            a: 'ليس بعد. أقرّ مجلسا التشريع مشروع القانون SB 868، لكنه لا يصبح قانونًا إلا بعد توقيع الحاكم نيوسوم عليه — أمامه حتى 30 سبتمبر 2026 للتوقيع أو الرفض.',
          },
          {
            q: 'ماذا يحدث إذا لم يوقّع الحاكم نيوسوم على SB 868؟',
            a: 'إذا رفضه أو مرّ الموعد النهائي دون توقيع، يسقط مشروع القانون ويحتاج إلى إعادة تقديمه في دورة تشريعية مستقبلية — تحقق من النتيجة بعد 30 سبتمبر 2026.',
          },
          {
            q: 'هل سيسمح SB 868 لجمعية الملاك أو الملاك المؤجر لدي بحظر الطاقة الشمسية للشرفات؟',
            a: 'نعم، من المحتمل. خلافًا لكولورادو ونيوجيرسي، لا يُبطل SB 868 عقود الإيجار أو لوائح جمعيات الملاك — قانون Solar Rights Act الحالي في كاليفورنيا مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          },
          {
            q: 'هل سيكون إعفاء 1,200 واط دائمًا إذا أُقرّ مشروع القانون؟',
            a: 'لا — إعفاء الربط الشبكي في SB 868 مكتوب ليستمر فقط حتى 1 يناير 2030، وليس إلى أجل غير مسمى. راقب أي تشريع لاحق مع اقتراب ذلك التاريخ.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ko.webp',
    title: '캘리포니아주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-09-02',
    seoTitle: '캘리포니아주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '아직 아닙니다 — SB 868은 주 의회를 통과했으며 2026년 9월 30일까지 뉴섬 주지사의 서명을 기다리고 있습니다. 상한은 1,200W가 될 예정입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '캘리포니아주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
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
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '캘리포니아주에서 발코니 태양광은 합법입니까?',
        answer: '아직 아닙니다. 캘리포니아주 SB 868("Plug and Play Solar Act")은 2026년 8월 주 의회 양원을 통과했으며 현재 개빈 뉴섬 주지사의 결재를 기다리고 있습니다 — 주지사는 2026년 9월 30일까지 서명하거나 거부권을 행사해야 합니다. 서명될 경우, 최대 1,200W 기기를 2030년 1월 1일까지 전력회사 계통연계 요건에서 면제하지만, 임대 계약이나 HOA 규정을 무효화하지는 않습니다.',
        bullets: [
          'SB 868은 2026년 8월 25일 주 하원을, 그 직후 주 상원을 통과 — 현재 2026년 9월 30일까지 뉴섬 주지사의 결정을 기다리는 중',
          '세대당 상한 1,200W 교류로 제한하고 2030년 1월 1일까지 전력회사 계통연계를 면제할 예정 — 영구 면제가 아닌 만료 기한이 있는 조치',
          '콜로라도주 및 뉴저지주와 달리, 임대인이나 HOA의 제한을 막지는 않음',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '캘리포니아주 SB 868은 아직 법이 아닙니다 — 뉴섬 주지사의 서명을 기다리고 있으며, 서명 또는 거부권 행사 기한은 2026년 9월 30일입니다.',
          '서명될 경우, 세대당 상한 1,200W 교류로 제한하고 전력회사 계통연계 요건을 면제할 예정이지만, 이는 2030년 1월 1일까지로 법안에 내장된 만료 기한입니다.',
          '이 법안은 임대 계약이나 HOA의 제한을 무효화하지 않습니다 — 캘리포니아주의 기존 Solar Rights Act는 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          '캘리포니아주는 이 시리즈가 추적하는 주 중 평균 주거용 전기 요금이 가장 높은 곳으로, kWh당 약 33.3센트입니다 — 법안이 통과되고 인증된 하드웨어가 출시되면 가장 강력한 경제성을 기대할 수 있습니다.',
        ],
      },
      body1: {
        title: 'SB 868은 캘리포니아주에서 무엇을 요구하게 됩니까?',
        content: [
          '캘리포니아주 SB 868(Plug and Play Solar Act)은 2026년 8월 25일 주 하원을, 그 직후 주 상원을 통과했으며 현재 개빈 뉴섬 주지사의 결재를 기다리고 있습니다 — 주지사는 2026년 9월 30일까지 서명하거나 거부권을 행사해야 합니다. 법안 원문대로라면, 세대당 최대 1,200와트 교류의 플러그인 태양광 기기를 전력회사의 계통연계 신청·승인·수수료에서 면제하지만, 이는 영구 면제가 아니라 2030년 1월 1일까지로 법안에 내장된 만료 기한입니다.',
          '콜로라도주 및 뉴저지주와 달리, SB 868은 임대인이나 HOA의 권한을 무효화하지 않습니다. 발코니 설치를 금지하는 임대 계약은 계속 유효하며, HOA의 태양광 금지를 막는 캘리포니아주의 기존 Solar Rights Act는 지붕 설치형 시스템을 전제로 작성되어 있어 공유벽 발코니에 설치하는 플러그인 기기까지 자동으로 보호가 확장될 가능성은 낮습니다. 법안이 통과되면 본인의 임대 계약서나 HOA 규약을 별도로 확인해야 합니다.',
        ],
        columns: ['항목', '캘리포니아주 SB 868'],
        rows: [
          { 항목: '상태', '캘리포니아주 SB 868': '주 의회 통과 — 주지사 서명 대기 중 (기한 2026년 9월 30일)' },
          { 항목: '예상 출력 상한', '캘리포니아주 SB 868': '세대당 1,200W 교류' },
          { 항목: '면제 기간', '캘리포니아주 SB 868': '2030년 1월 1일까지만 (만료 기한)' },
          { 항목: 'HOA / 임대인', '캘리포니아주 SB 868': '무효화되지 않음 — 임대 계약과 HOA 규정이 여전히 제한 가능' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '캘리포니아주의 경제성은 매력적입니까?',
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
          '캘리포니아주는 이 시리즈가 추적하는 주 중 평균 주거용 전기 요금이 가장 높은 곳으로, kWh당 약 33.3센트입니다 — 유타주의 kWh당 11.6센트의 거의 세 배입니다. SB 868이 법이 되고 적합한 하드웨어가 시장에 나오면, 800W 키트의 수익률은 이 시리즈 내 모든 주 가운데 가장 강력할 것으로 예상되며, 지금까지 추적해 온 연간 약 150~350달러의 전국 범위를 크게 상회할 수 있습니다 — 다만 법이 아직 시행되지 않아 캘리포니아주 고유의 금액 추정치는 아직 없습니다.',
          '인증은 여전히 전국적인 또 다른 관문입니다 — 본 문서 작성 시점 기준으로 완전한 플러그인 태양광 시스템 중 UL 3700 완전 인증을 받은 것으로 확인된 제품은 없습니다. EcoFlow의 STREAM Ultra가 시장에 가장 가까운 제품이지만 현재는 유타주 전용으로 판매되고 있습니다.',
          '법안이 서명(또는 거부)되고 인증된 하드웨어가 등장하면 실제 제품을 비교할 준비를 하십시오. <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하십시오 — 이는 단순한 제품 링크일 뿐, 특정 키트가 캘리포니아주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '캘리포니아주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '캘리포니아주에서 지금 발코니 태양광은 합법입니까?',
            a: '아직 아닙니다. SB 868은 주 의회를 통과했지만 뉴섬 주지사가 서명해야 법이 됩니다 — 주지사는 2026년 9월 30일까지 서명하거나 거부권을 행사해야 합니다.',
          },
          {
            q: '뉴섬 주지사가 SB 868에 서명하지 않으면 어떻게 됩니까?',
            a: '거부권을 행사하거나 서명 없이 기한이 지나면 법안은 무산되며 향후 입법 회기에 다시 상정되어야 합니다 — 결과는 2026년 9월 30일 이후에 확인하십시오.',
          },
          {
            q: 'SB 868이 통과되어도 HOA나 임대인이 발코니 태양광을 금지할 수 있습니까?',
            a: '예, 가능성이 있습니다. 콜로라도주 및 뉴저지주와 달리, SB 868은 임대 계약이나 HOA 규정을 무효화하지 않습니다 — 캘리포니아주의 기존 Solar Rights Act는 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          },
          {
            q: '법안이 통과되면 1,200W 면제는 영구적입니까?',
            a: '아닙니다 — SB 868의 전력회사 계통연계 면제는 2030년 1월 1일까지만 유효하도록 작성되어 있으며 무기한이 아닙니다. 그 날짜가 다가오면 후속 입법 여부를 주시해야 합니다.',
          },
        ],
      },
    },
  },
}
