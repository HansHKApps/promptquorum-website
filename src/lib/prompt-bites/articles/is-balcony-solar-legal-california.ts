// Slug: is-balcony-solar-legal-california
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: part of the balcony-solar
// state-regulation series. See is-balcony-solar-legal-utah.ts header for the
// full exception rationale. Facts verified via WebSearch 2026-09-02 against
// pv-magazine-usa.com/2026/08/26/california-plug-in-solar-bill-sb-868-earns-approval-of-both-legislative-houses-nears-governors-desk/
// and news.bloomberglaw.com coverage of SB 868 heading to Governor Newsom's desk.
// STATUS UPDATED 2026-10-16: SB 868 SIGNED by Gov. Newsom on September 30, 2026
// (Assembly vote 73-0); takes effect January 1, 2027 — signed, not yet in effect.
// Sources: pv-magazine.com/2026/10/02/newsom-signs-california-plug-in-solar-bill-establishing-the-nations-largest-balcony-solar-market/
// and energy-storage.news (Newsom signs VPP and balcony solar bills). Re-verify
// status after January 1, 2027; this article's entire framing depends on it.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in California?',
    dateModified: '2026-10-16',
    seoTitle: 'Is Balcony Solar Legal in California? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, not yet in effect. California SB 868 takes effect January 1, 2027 with a 1,200W cap per dwelling. Quick answer from PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'Signed, but not yet in effect. California\'s SB 868 ("Plug and Play Solar Act", authored by Sen. Scott Wiener) passed the Assembly 73-0 and Governor Gavin Newsom signed it on September 30, 2026; it takes effect January 1, 2027. It caps qualifying systems at 1,200W total AC output per dwelling, requires UL or equivalent NRTL certification and automatic shutoff within seconds of a grid outage, and exempts them from interconnection agreements until January 1, 2030 unless extended — but it does not override landlord leases or HOA rules.',
        bullets: [
          'SB 868 passed the Assembly 73-0 and was signed by Governor Newsom on September 30, 2026 — it takes effect January 1, 2027, so it is not yet in effect',
          '1,200W total AC output cap per dwelling; qualifying systems are exempt from interconnection agreements through January 1, 2030 unless extended — a sunset date, not a permanent exemption',
          'Unlike Colorado and New Jersey, it does NOT bar landlords or HOAs from restricting the devices',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'California\'s SB 868 is signed but not yet in effect — Governor Newsom signed it on September 30, 2026, and it takes effect January 1, 2027.',
          'The law caps qualifying systems at 1,200W total AC output per dwelling, requires UL or equivalent NRTL certification and automatic shutoff within seconds of a grid outage, and exempts them from interconnection agreements — but only until January 1, 2030 unless extended.',
          'The law does NOT preempt landlord leases or HOA restrictions — California\'s existing Solar Rights Act is written for rooftop systems, not plug-in balcony devices.',
          'California has the highest average residential electricity rate of any state tracked in this series, at about 33.3¢/kWh — the strongest potential economics once the law is in effect and certified hardware ships.',
        ],
      },
      body1: {
        title: 'What Would SB 868 Require in California?',
        content: [
          '<strong>California\'s SB 868, the Plug and Play Solar Act, passed the state Assembly 73-0 and was signed by Governor Gavin Newsom on September 30, 2026; it takes effect January 1, 2027.</strong> It caps qualifying plug-in solar systems at 1,200 watts total AC output per dwelling, requires devices to be UL or equivalent NRTL-certified and to shut off automatically within seconds of a grid outage, and exempts qualifying systems from interconnection agreements — but only through January 1, 2030 unless extended, a sunset date rather than a permanent exemption.',
          '<strong>Unlike Colorado and New Jersey, SB 868 does not override landlords or HOAs.</strong> A rental agreement that bars balcony fixtures would still bar them, and California\'s existing Solar Rights Act — which prohibits HOAs from banning solar — is written around roof-mounted systems, not plug-in devices on a shared-wall balcony, so it likely wouldn\'t extend automatic protection here. Check your own lease or HOA covenant separately once the law takes effect.',
        ],
        columns: ['Field', 'California SB 868'],
        rows: [
          { Field: 'Status', 'California SB 868': 'Signed Sep 30, 2026 — takes effect Jan 1, 2027 (not yet in effect)' },
          { Field: 'Wattage cap', 'California SB 868': '1,200W AC per dwelling' },
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
          '<strong>California has the highest average residential electricity rate of any state tracked in this series, at roughly 33.3¢/kWh — nearly triple Utah\'s 11.6¢/kWh.</strong> Once SB 868 takes effect and compliant hardware reaches the market, the return on an 800W kit should be the strongest of any state in this series, well above the roughly $150–$350/year national range tracked so far — though no California-specific dollar estimate exists yet since the law is not yet in effect.',
          "Certification remains the other gate nationwide: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time. EcoFlow's STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.",
          '<strong>Now that SB 868 is signed, you\'ll want real options to compare once certified hardware exists.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in California today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About California Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in California right now?',
            a: 'Signed, but not yet in effect. Governor Newsom signed SB 868 on September 30, 2026, and it takes effect January 1, 2027.',
          },
          {
            q: 'When does SB 868 take effect, and what does it require?',
            a: 'It takes effect January 1, 2027. It caps qualifying systems at 1,200W total AC output per dwelling, requires UL or equivalent NRTL certification and automatic shutoff within seconds of a grid outage, and exempts qualifying systems from interconnection agreements.',
          },
          {
            q: 'Will SB 868 let my HOA or landlord ban balcony solar?',
            a: "Yes, potentially. Unlike Colorado and New Jersey, SB 868 does not preempt landlord leases or HOA rules — California's existing Solar Rights Act is written for rooftop systems, not plug-in balcony devices.",
          },
          {
            q: 'Is the 1,200W exemption permanent under the signed law?',
            a: 'No — the interconnection exemption in SB 868 sunsets January 1, 2030 unless extended. Watch for follow-up legislation as that date approaches.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Kalifornien legal?',
    dateModified: '2026-10-16',
    seoTitle: 'Ist Balkonsolar in Kalifornien legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Unterzeichnet, noch nicht in Kraft. Kaliforniens SB 868 tritt am 1. Januar 2027 in Kraft, mit einer Obergrenze von 1.200 W pro Wohneinheit. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'Unterzeichnet, aber noch nicht in Kraft. Kaliforniens SB 868 („Plug and Play Solar Act", Autor: Senator Scott Wiener) hat die Assembly mit 73:0 Stimmen passiert und wurde am 30. September 2026 von Gouverneur Gavin Newsom unterzeichnet; es tritt am 1. Januar 2027 in Kraft. Das Gesetz begrenzt qualifizierte Systeme auf 1.200 W AC-Gesamtleistung pro Wohneinheit, verlangt eine UL- oder gleichwertige NRTL-Zertifizierung sowie die automatische Abschaltung binnen Sekunden bei einem Netzausfall und befreit sie bis zum 1. Januar 2030 (sofern nicht verlängert) von Netzanschlussvereinbarungen – setzt Mietverträge oder HOA-Regeln aber nicht außer Kraft.',
        bullets: [
          'SB 868 hat die Assembly mit 73:0 passiert und wurde am 30. September 2026 von Gouverneur Newsom unterzeichnet – es tritt am 1. Januar 2027 in Kraft und gilt daher noch nicht',
          'Obergrenze von 1.200 W AC-Gesamtleistung pro Wohneinheit; qualifizierte Systeme sind bis zum 1. Januar 2030 von Netzanschlussvereinbarungen befreit, sofern nicht verlängert – ein Ablaufdatum, keine dauerhafte Befreiung',
          'Anders als Colorado und New Jersey hindert es Vermieter oder HOAs NICHT daran, die Geräte einzuschränken',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kaliforniens SB 868 ist unterzeichnet, aber noch nicht in Kraft – Gouverneur Newsom hat es am 30. September 2026 unterzeichnet, es tritt am 1. Januar 2027 in Kraft.',
          'Das Gesetz begrenzt qualifizierte Systeme auf 1.200 W AC-Gesamtleistung pro Wohneinheit, verlangt eine UL- oder gleichwertige NRTL-Zertifizierung und die automatische Abschaltung binnen Sekunden bei einem Netzausfall und befreit sie von Netzanschlussvereinbarungen – jedoch nur bis zum 1. Januar 2030, sofern nicht verlängert.',
          'Das Gesetz setzt Mietverträge oder HOA-Einschränkungen NICHT außer Kraft – Kaliforniens bestehender Solar Rights Act ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          'Kalifornien hat den höchsten durchschnittlichen Strompreis für Privathaushalte aller in dieser Serie erfassten Bundesstaaten, bei etwa 33,3 Cent/kWh – die stärkste potenzielle Wirtschaftlichkeit, sobald das Gesetz in Kraft ist und zertifizierte Hardware verfügbar wird.',
        ],
      },
      body1: {
        title: 'Was würde SB 868 in Kalifornien verlangen?',
        content: [
          'Kaliforniens SB 868, der Plug and Play Solar Act, hat die State Assembly mit 73:0 Stimmen passiert und wurde am 30. September 2026 von Gouverneur Gavin Newsom unterzeichnet; es tritt am 1. Januar 2027 in Kraft. Es begrenzt qualifizierte steckerfertige Solarsysteme auf 1.200 Watt AC-Gesamtleistung pro Wohneinheit, verlangt, dass Geräte UL- oder gleichwertig NRTL-zertifiziert sind und sich bei einem Netzausfall binnen Sekunden automatisch abschalten, und befreit qualifizierte Systeme von Netzanschlussvereinbarungen – allerdings nur bis zum 1. Januar 2030, sofern nicht verlängert, einem Ablaufdatum statt einer dauerhaften Befreiung.',
          'Anders als Colorado und New Jersey setzt SB 868 Vermieter oder HOAs nicht außer Kraft. Ein Mietvertrag, der Balkonanbauten untersagt, würde weiterhin gelten, und Kaliforniens bestehender Solar Rights Act – der HOA-Solarverbote untersagt – ist um dachmontierte Systeme herum formuliert, nicht um steckerfertige Geräte an einer gemeinsam genutzten Balkonwand, sodass er hier wahrscheinlich keinen automatischen Schutz bieten würde. Prüfen Sie Ihren eigenen Mietvertrag oder Ihre HOA-Satzung separat, sobald das Gesetz in Kraft tritt.',
        ],
        columns: ['Feld', 'Kalifornien SB 868'],
        rows: [
          { Feld: 'Status', 'Kalifornien SB 868': 'Unterzeichnet 30. Sep. 2026 – in Kraft ab 1. Jan. 2027 (noch nicht in Kraft)' },
          { Feld: 'Leistungsobergrenze', 'Kalifornien SB 868': '1.200 W AC pro Wohneinheit' },
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
          'Kalifornien hat mit etwa 33,3 Cent/kWh den höchsten durchschnittlichen Strompreis für Privathaushalte aller in dieser Serie erfassten Bundesstaaten – fast das Dreifache von Utahs 11,6 Cent/kWh. Sobald SB 868 in Kraft tritt und konforme Hardware auf den Markt kommt, dürfte die Rendite eines 800-W-Sets die stärkste unter allen Bundesstaaten dieser Serie sein, deutlich über der bisher beobachteten nationalen Spanne von etwa 150–350 $/Jahr – allerdings existiert noch keine kalifornienspezifische Schätzung, da das Gesetz noch nicht in Kraft ist.',
          'Die Zertifizierung bleibt bundesweit das andere Nadelöhr: Zum Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem die volle UL-3700-Zertifizierung bestätigt. EcoFlows STREAM Ultra ist das Produkt, das dem am nächsten kommt, wird aber derzeit speziell für Utah zum Verkauf angeboten.',
          'Da SB 868 nun unterzeichnet ist, lohnt sich ein Vergleich konkreter Hardware, sobald zertifizierte Geräte existieren. Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in Kalifornien zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in Kalifornien',
        faqs: [
          {
            q: 'Ist Balkonsolar in Kalifornien derzeit legal?',
            a: 'Unterzeichnet, aber noch nicht in Kraft. Gouverneur Newsom hat SB 868 am 30. September 2026 unterzeichnet; es tritt am 1. Januar 2027 in Kraft.',
          },
          {
            q: 'Wann tritt SB 868 in Kraft und was verlangt es?',
            a: 'Es tritt am 1. Januar 2027 in Kraft. Es begrenzt qualifizierte Systeme auf 1.200 W AC-Gesamtleistung pro Wohneinheit, verlangt eine UL- oder gleichwertige NRTL-Zertifizierung sowie die automatische Abschaltung binnen Sekunden bei einem Netzausfall und befreit qualifizierte Systeme von Netzanschlussvereinbarungen.',
          },
          {
            q: 'Kann meine HOA oder mein Vermieter Balkonsolar trotz SB 868 verbieten?',
            a: 'Ja, möglicherweise. Anders als Colorado und New Jersey setzt SB 868 Mietverträge oder HOA-Regeln nicht außer Kraft – Kaliforniens bestehender Solar Rights Act ist für Dachsysteme formuliert, nicht für steckerfertige Balkongeräte.',
          },
          {
            q: 'Ist die 1.200-W-Befreiung im unterzeichneten Gesetz dauerhaft?',
            a: 'Nein – die Befreiung von Netzanschlussvereinbarungen in SB 868 läuft am 1. Januar 2030 aus, sofern sie nicht verlängert wird. Achten Sie auf Folgegesetze, wenn sich dieses Datum nähert.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en California?',
    dateModified: '2026-10-16',
    seoTitle: '¿Es legal la energía solar de balcón en California? | Prompt Bites | PromptQuorum',
    metaDescription: 'Firmada, aún no vigente. El SB 868 de California entra en vigor el 1 de enero de 2027 con un límite de 1200 W por vivienda. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'Firmada, pero aún no vigente. El SB 868 de California ("Plug and Play Solar Act", del senador Scott Wiener) fue aprobado por la Asamblea por 73 votos a 0 y el gobernador Gavin Newsom lo firmó el 30 de septiembre de 2026; entra en vigor el 1 de enero de 2027. Limita los sistemas que cumplan los requisitos a 1200 W de potencia total de CA por vivienda, exige certificación UL o NRTL equivalente y desconexión automática en pocos segundos ante un corte de la red, y los exime de los acuerdos de interconexión hasta el 1 de enero de 2030 salvo que se prorrogue — pero no anula los contratos de alquiler ni las normas de las HOA.',
        bullets: [
          'El SB 868 fue aprobado por la Asamblea 73-0 y firmado por el gobernador Newsom el 30 de septiembre de 2026 — entra en vigor el 1 de enero de 2027, por lo que aún no está vigente',
          'Límite de 1200 W de potencia total de CA por vivienda; los sistemas que cumplan los requisitos están exentos de acuerdos de interconexión hasta el 1 de enero de 2030 salvo prórroga — una fecha de caducidad, no una exención permanente',
          'A diferencia de Colorado y Nueva Jersey, NO impide que arrendadores o HOA restrinjan los dispositivos',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El SB 868 de California está firmado, pero aún no vigente — el gobernador Newsom lo firmó el 30 de septiembre de 2026 y entra en vigor el 1 de enero de 2027.',
          'La ley limita los sistemas que cumplan los requisitos a 1200 W de potencia total de CA por vivienda, exige certificación UL o NRTL equivalente y desconexión automática en pocos segundos ante un corte de la red, y los exime de los acuerdos de interconexión — pero solo hasta el 1 de enero de 2030 salvo prórroga.',
          'La ley NO anula los contratos de alquiler ni las restricciones de las HOA — la Solar Rights Act vigente en California está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          'California tiene la tarifa eléctrica residencial promedio más alta de cualquier estado seguido en esta serie, alrededor de 33.3 ¢/kWh — la mejor economía potencial una vez que la ley esté vigente y llegue hardware certificado.',
        ],
      },
      body1: {
        title: '¿Qué exigiría el SB 868 en California?',
        content: [
          'El SB 868 de California, la Plug and Play Solar Act, fue aprobado por la Asamblea estatal por 73 votos a 0 y firmado por el gobernador Gavin Newsom el 30 de septiembre de 2026; entra en vigor el 1 de enero de 2027. Limita los sistemas solares enchufables que cumplan los requisitos a 1200 vatios de potencia total de CA por vivienda, exige que los dispositivos cuenten con certificación UL o NRTL equivalente y se desconecten automáticamente en pocos segundos ante un corte de la red, y exime a esos sistemas de los acuerdos de interconexión — pero solo hasta el 1 de enero de 2030 salvo prórroga, una fecha de caducidad en lugar de una exención permanente.',
          'A diferencia de Colorado y Nueva Jersey, el SB 868 no anula a los arrendadores ni a las HOA. Un contrato de alquiler que prohíba instalaciones en el balcón seguiría prohibiéndolas, y la Solar Rights Act vigente en California — que prohíbe a las HOA prohibir el uso de energía solar — está redactada en torno a sistemas montados en tejado, no a dispositivos enchufables en un balcón de pared compartida, por lo que probablemente no ofrecería protección automática aquí. Revisa tu propio contrato de alquiler o el reglamento de tu HOA por separado cuando la ley entre en vigor.',
        ],
        columns: ['Campo', 'California SB 868'],
        rows: [
          { Campo: 'Estado', 'California SB 868': 'Firmada el 30 sep. 2026 — vigente desde el 1 ene. 2027 (aún no vigente)' },
          { Campo: 'Límite de potencia', 'California SB 868': '1200 W CA por vivienda' },
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
          'California tiene la tarifa eléctrica residencial promedio más alta de cualquier estado seguido en esta serie, alrededor de 33.3 ¢/kWh — casi el triple de los 11.6 ¢/kWh de Utah. Cuando el SB 868 entre en vigor y llegue hardware compatible al mercado, el retorno de un kit de 800 W debería ser el más fuerte de cualquier estado de esta serie, muy por encima del rango nacional de aproximadamente $150–$350 al año seguido hasta ahora — aunque todavía no existe una estimación específica para California, ya que la ley aún no está vigente.',
          'La certificación sigue siendo el otro obstáculo a nivel nacional: al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 total. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente para Utah.',
          'Ahora que el SB 868 está firmado, querrás comparar opciones reales cuando exista hardware certificado. Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en California hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en California',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en California en este momento?',
            a: 'Firmada, pero aún no vigente. El gobernador Newsom firmó el SB 868 el 30 de septiembre de 2026 y entra en vigor el 1 de enero de 2027.',
          },
          {
            q: '¿Cuándo entra en vigor el SB 868 y qué exige?',
            a: 'Entra en vigor el 1 de enero de 2027. Limita los sistemas que cumplan los requisitos a 1200 W de potencia total de CA por vivienda, exige certificación UL o NRTL equivalente y desconexión automática en pocos segundos ante un corte de la red, y los exime de los acuerdos de interconexión.',
          },
          {
            q: '¿El SB 868 permitirá que mi HOA o arrendador prohíba la energía solar de balcón?',
            a: 'Sí, es posible. A diferencia de Colorado y Nueva Jersey, el SB 868 no anula los contratos de alquiler ni las normas de las HOA — la Solar Rights Act vigente en California está redactada para sistemas en tejado, no para dispositivos enchufables de balcón.',
          },
          {
            q: '¿La exención de 1200 W es permanente en la ley firmada?',
            a: 'No — la exención de interconexión del SB 868 caduca el 1 de enero de 2030 salvo que se prorrogue. Presta atención a legislación de seguimiento a medida que se acerque esa fecha.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal en Californie ?',
    dateModified: '2026-10-16',
    seoTitle: 'Le solaire de balcon est-il légal en Californie ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signée, pas encore en vigueur. Le SB 868 de Californie entre en vigueur le 1er janvier 2027 avec un plafond de 1 200 W par logement. Réponse rapide de PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'Signée, mais pas encore en vigueur. Le SB 868 de Californie (« Plug and Play Solar Act », porté par le sénateur Scott Wiener) a été adopté par l\'Assemblée par 73 voix contre 0 et le gouverneur Gavin Newsom l\'a signé le 30 septembre 2026 ; il entre en vigueur le 1er janvier 2027. Il plafonne les systèmes éligibles à 1 200 W de puissance CA totale par logement, exige une certification UL ou NRTL équivalente et un arrêt automatique en quelques secondes lors d\'une panne de réseau, et les exempte des accords de raccordement jusqu\'au 1er janvier 2030 sauf prolongation — mais ne prime pas sur les baux ou les règlements de copropriété.',
        bullets: [
          'Le SB 868 a été adopté par l\'Assemblée par 73 voix contre 0 et signé par le gouverneur Newsom le 30 septembre 2026 — il entre en vigueur le 1er janvier 2027 et n\'est donc pas encore en vigueur',
          'Plafond de 1 200 W de puissance CA totale par logement ; les systèmes éligibles sont exemptés des accords de raccordement jusqu\'au 1er janvier 2030 sauf prolongation — une date d\'expiration, pas une exemption permanente',
          'Contrairement au Colorado et au New Jersey, il n\'empêche PAS les bailleurs ou les copropriétés de restreindre les appareils',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le SB 868 de Californie est signé mais pas encore en vigueur — le gouverneur Newsom l\'a signé le 30 septembre 2026 et il entre en vigueur le 1er janvier 2027.',
          'La loi plafonne les systèmes éligibles à 1 200 W de puissance CA totale par logement, exige une certification UL ou NRTL équivalente et un arrêt automatique en quelques secondes lors d\'une panne de réseau, et les exempte des accords de raccordement — mais seulement jusqu\'au 1er janvier 2030 sauf prolongation.',
          'La loi ne prime PAS sur les baux ou les restrictions des copropriétés — le Solar Rights Act californien existant est rédigé pour les systèmes en toiture, pas pour les appareils branchables de balcon.',
          'La Californie a le tarif résidentiel moyen de l\'électricité le plus élevé de tous les États suivis dans cette série, environ 33,3 ¢/kWh — le potentiel économique le plus fort une fois la loi en vigueur et du matériel certifié disponible.',
        ],
      },
      body1: {
        title: 'Que prévoirait le SB 868 en Californie ?',
        content: [
          'Le SB 868 de Californie, le Plug and Play Solar Act, a été adopté par l\'Assemblée de l\'État par 73 voix contre 0 et signé par le gouverneur Gavin Newsom le 30 septembre 2026 ; il entre en vigueur le 1er janvier 2027. Il plafonne les systèmes solaires branchables éligibles à 1 200 watts de puissance CA totale par logement, exige que les appareils soient certifiés UL ou NRTL équivalent et s\'arrêtent automatiquement en quelques secondes lors d\'une panne de réseau, et exempte les systèmes éligibles des accords de raccordement — mais seulement jusqu\'au 1er janvier 2030 sauf prolongation, une date d\'expiration plutôt qu\'une exemption permanente.',
          'Contrairement au Colorado et au New Jersey, le SB 868 ne prime pas sur les bailleurs ou les copropriétés. Un bail interdisant les installations sur balcon continuerait de les interdire, et le Solar Rights Act californien existant — qui interdit aux copropriétés de bannir le solaire — est rédigé autour des systèmes montés en toiture, pas des appareils branchables sur un balcon à mur mitoyen, et n\'offrirait donc probablement pas de protection automatique ici. Vérifiez séparément votre propre bail ou règlement de copropriété une fois la loi entrée en vigueur.',
        ],
        columns: ['Champ', 'Californie SB 868'],
        rows: [
          { Champ: 'Statut', 'Californie SB 868': 'Signée le 30 sept. 2026 — en vigueur le 1er janv. 2027 (pas encore en vigueur)' },
          { Champ: 'Plafond de puissance', 'Californie SB 868': '1 200 W CA par logement' },
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
          'La Californie a le tarif résidentiel moyen de l\'électricité le plus élevé de tous les États suivis dans cette série, environ 33,3 ¢/kWh — près du triple des 11,6 ¢/kWh de l\'Utah. Une fois le SB 868 en vigueur et du matériel conforme arrivé sur le marché, le rendement d\'un kit de 800 W devrait être le plus fort de tous les États de cette série, bien au-dessus de la fourchette nationale d\'environ 150–350 $/an suivie jusqu\'ici — même si aucune estimation propre à la Californie n\'existe encore puisque la loi n\'est pas encore en vigueur.',
          "La certification reste l'autre obstacle à l'échelle nationale : à l'heure de la rédaction, aucun système solaire branchable complet n'a confirmé une certification UL 3700 intégrale. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement pour l'Utah.",
          '<strong>Maintenant que le SB 868 est signé, vous voudrez comparer du matériel concret dès que des appareils certifiés existeront.</strong> Consultez les <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparaison de l\'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu\'un kit précis est certifié ou disponible en Californie aujourd\'hui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon en Californie',
        faqs: [
          {
            q: 'Le solaire de balcon est-il légal en Californie dès maintenant ?',
            a: 'Signée, mais pas encore en vigueur. Le gouverneur Newsom a signé le SB 868 le 30 septembre 2026 ; il entre en vigueur le 1er janvier 2027.',
          },
          {
            q: 'Quand le SB 868 entre-t-il en vigueur et que prévoit-il ?',
            a: 'Il entre en vigueur le 1er janvier 2027. Il plafonne les systèmes éligibles à 1 200 W de puissance CA totale par logement, exige une certification UL ou NRTL équivalente et un arrêt automatique en quelques secondes lors d\'une panne de réseau, et exempte les systèmes éligibles des accords de raccordement.',
          },
          {
            q: 'Le SB 868 permettra-t-il à ma copropriété ou à mon bailleur d\'interdire le solaire de balcon ?',
            a: "Oui, potentiellement. Contrairement au Colorado et au New Jersey, le SB 868 ne prime pas sur les baux ou les règlements de copropriété — le Solar Rights Act californien existant est rédigé pour les systèmes en toiture, pas pour les appareils branchables de balcon.",
          },
          {
            q: 'L\'exemption de 1 200 W est-elle permanente dans la loi signée ?',
            a: 'Non — l\'exemption de raccordement du SB 868 expire le 1er janvier 2030 sauf prolongation. Surveillez une éventuelle législation de suivi à l\'approche de cette date.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ja.webp',
    title: 'カリフォルニア州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-10-16',
    seoTitle: 'カリフォルニア州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: '署名済みですが、まだ発効していません。カリフォルニア州のSB 868は2027年1月1日に発効し、上限は住戸あたり1,200Wです。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: '署名済みですが、まだ発効していません。カリフォルニア州のSB 868（「Plug and Play Solar Act」、スコット・ウィーナー州上院議員提出）は州下院で73対0で可決され、ギャビン・ニューサム知事が2026年9月30日に署名した。発効は2027年1月1日である。対象となるシステムを住戸あたり合計1,200W ACに制限し、ULまたは同等のNRTL認証と、系統停電から数秒以内の自動停止を求め、2030年1月1日（延長されない限り）まで系統連系契約を免除する。ただし、賃貸契約やHOA規約を無効化するものではない。',
        bullets: [
          'SB 868は州下院で73対0で可決され、2026年9月30日にニューサム知事が署名 — 発効は2027年1月1日のため、まだ発効していない',
          '住戸あたり合計1,200W ACの上限。対象システムは2030年1月1日（延長されない限り）まで系統連系契約を免除 — これは恒久的な免除ではなく期限付きの措置',
          'コロラド州やニュージャージー州と異なり、家主やHOAによる制限を禁じるものではない',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'カリフォルニア州のSB 868は署名済みだが、まだ発効していない — ニューサム知事が2026年9月30日に署名し、発効は2027年1月1日である。',
          'この法律は、対象システムを住戸あたり合計1,200W ACに制限し、ULまたは同等のNRTL認証と系統停電から数秒以内の自動停止を求め、系統連系契約を免除する — ただし2030年1月1日まで（延長されない限り）である。',
          'この法律は賃貸契約やHOAによる制限を無効化するものではない — カリフォルニア州の既存のSolar Rights Actは屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていない。',
          'カリフォルニア州はこのシリーズで追跡している州の中で平均住宅用電気料金が最も高く、約33.3セント/kWhである — 法律が発効し認証済みハードウェアが登場すれば、最も強い経済性が期待できる。',
        ],
      },
      body1: {
        title: 'SB 868がカリフォルニア州で求める内容とは？',
        content: [
          'カリフォルニア州のSB 868（Plug and Play Solar Act）は州下院で73対0で可決され、2026年9月30日にギャビン・ニューサム知事が署名した。発効は2027年1月1日である。対象となるプラグイン式ソーラーシステムを住戸あたり合計1,200W ACに制限し、機器にULまたは同等のNRTL認証と、系統停電から数秒以内の自動停止を求め、対象システムを系統連系契約から免除する — ただしこれは2030年1月1日まで（延長されない限り）の、恒久的ではなく期限付きの措置である。',
          'コロラド州やニュージャージー州と異なり、SB 868は家主やHOAを無効化するものではない。バルコニーへの設置を禁じる賃貸契約は引き続き有効であり、HOAによるソーラー禁止を禁じるカリフォルニア州の既存のSolar Rights Actは屋根設置型システムを前提として書かれているため、共用壁のバルコニーに設置するプラグイン式機器には自動的な保護が及ばない可能性が高い。法律が発効した後は、自分の賃貸契約書やHOA規約を別途確認してほしい。',
        ],
        columns: ['項目', 'カリフォルニア州 SB 868'],
        rows: [
          { '項目': '状況', 'カリフォルニア州 SB 868': '2026年9月30日署名 — 2027年1月1日発効（まだ発効していない）' },
          { '項目': '出力上限', 'カリフォルニア州 SB 868': '住戸あたり1,200W AC' },
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
          'カリフォルニア州は、このシリーズで追跡している州の中で平均住宅用電気料金が最も高く、約33.3セント/kWh — ユタ州の11.6セント/kWhのほぼ3倍にあたる。SB 868が発効し適合ハードウェアが市場に登場すれば、800Wキットの回収額はこのシリーズの中で最も強い水準になると見込まれ、これまで追跡してきた年間約150〜350ドルという全国レンジを大きく上回る可能性がある — ただし、法律がまだ発効していないため、カリフォルニア州特有の金額はまだ存在しない。',
          '認証は全米共通のもう一つの関門である — 執筆時点で、完全なプラグイン式ソーラーシステムでUL 3700の完全認証を取得したと確認されたものはない。EcoFlowのSTREAM Ultraが最も市場に近い製品だが、現在はユタ州向けに限定して販売されている。',
          'SB 868が署名されたので、認証済みハードウェアが登場したら実際の製品を比較する準備をしよう。<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧いただきたい — これらは単なる製品リンクであり、特定のキットがカリフォルニア州で認証済み・販売中であると主張するものではない。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'カリフォルニア州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'カリフォルニア州で今すぐバルコニーソーラーは合法ですか？',
            a: '署名済みですが、まだ発効していません。ニューサム知事は2026年9月30日にSB 868に署名し、発効は2027年1月1日です。',
          },
          {
            q: 'SB 868はいつ発効し、何を求めていますか？',
            a: '2027年1月1日に発効します。対象システムを住戸あたり合計1,200W ACに制限し、ULまたは同等のNRTL認証と系統停電から数秒以内の自動停止を求め、対象システムを系統連系契約から免除します。',
          },
          {
            q: 'SB 868が成立しても、HOAや家主はバルコニーソーラーを禁止できますか？',
            a: 'はい、その可能性があります。コロラド州やニュージャージー州と異なり、SB 868は賃貸契約やHOA規約を無効化しません — カリフォルニア州の既存のSolar Rights Actは屋根設置型システム向けに書かれており、プラグイン式のバルコニー機器を対象としていません。',
          },
          {
            q: '署名された法律の下で、1,200Wの免除は恒久的ですか？',
            a: 'いいえ — SB 868の系統連系免除は、延長されない限り2030年1月1日に失効します。その期日が近づくにつれ、後継の法案が提出される可能性に注目してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-zh.webp',
    title: '加利福尼亚州的阳台太阳能合法吗？',
    dateModified: '2026-10-16',
    seoTitle: '加利福尼亚州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '已签署，但尚未生效。加利福尼亚州SB 868将于2027年1月1日生效，每套住宅功率上限为1,200瓦。PromptQuorum为您解答。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: '已签署，但尚未生效。加利福尼亚州SB 868法案（“插即用太阳能法案”，由参议员斯科特·维纳提出）以73比0通过州众议院表决，州长加文·纽森已于2026年9月30日签署，法案将于2027年1月1日生效。该法案将符合条件的系统限制为每套住宅交流总输出功率1,200瓦，要求设备获得UL或同等NRTL认证，并在电网停电后数秒内自动关机，同时在2030年1月1日之前（除非延期）豁免并网协议——但不会取代租约或业主协会（HOA）的规定。',
        bullets: [
          'SB 868以73比0通过州众议院，纽森州长于2026年9月30日签署——将于2027年1月1日生效，因此目前尚未生效',
          '每套住宅交流总输出功率上限1,200瓦；符合条件的系统在2030年1月1日之前（除非延期）豁免并网协议——这是一个截止日期，而非永久豁免',
          '与科罗拉多州和新泽西州不同，该法案不会禁止房东或HOA限制此类设备',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '加利福尼亚州SB 868法案已签署但尚未生效——纽森州长于2026年9月30日签署，法案将于2027年1月1日生效。',
          '该法律将符合条件的系统限制为每套住宅交流总输出功率1,200瓦，要求设备获得UL或同等NRTL认证并在电网停电后数秒内自动关机，同时豁免并网协议——但仅至2030年1月1日（除非延期）。',
          '该法律不会取代租约或HOA的限制规定——加利福尼亚州现行的《太阳能权利法》是针对屋顶系统制定的，并不适用于插电式阳台设备。',
          '加利福尼亚州是本系列追踪各州中住宅平均电价最高的州，约为每千瓦时33.3美分——待法律生效且认证硬件上市后，经济回报潜力将是最强的。',
        ],
      },
      body1: {
        title: 'SB 868法案将对加利福尼亚州提出哪些要求？',
        content: [
          '加利福尼亚州SB 868法案（插即用太阳能法案）以73比0通过州众议院表决，并于2026年9月30日由州长加文·纽森签署，将于2027年1月1日生效。该法案将符合条件的插电式太阳能系统限制为每套住宅交流总输出功率1,200瓦，要求设备获得UL或同等NRTL认证并在电网停电后数秒内自动关机，同时豁免符合条件的系统的并网协议——但这一豁免仅持续至2030年1月1日（除非延期），是截止日期，而非永久性豁免。',
          '与科罗拉多州和新泽西州不同，SB 868不会取代房东或HOA的规定。禁止阳台安装设施的租约仍将继续有效，而加利福尼亚州现行的《太阳能权利法》——该法禁止HOA禁止使用太阳能——是针对屋顶安装系统制定的，并不涵盖安装在共用墙阳台上的插电式设备，因此很可能不会自动为此类设备提供保护。待该法律生效后，请另行核查你自己的租约或HOA规约。',
        ],
        columns: ['项目', '加利福尼亚州 SB 868'],
        rows: [
          { '项目': '状态', '加利福尼亚州 SB 868': '已于2026年9月30日签署——2027年1月1日生效（尚未生效）' },
          { '项目': '功率上限', '加利福尼亚州 SB 868': '每套住宅1,200瓦交流' },
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
          '加利福尼亚州是本系列追踪各州中住宅平均电价最高的州，约为每千瓦时33.3美分——几乎是犹他州每千瓦时11.6美分的三倍。待SB 868生效且合规硬件进入市场后，一套800瓦套件的回报预计将是本系列中最强的，远高于此前追踪的全国范围（每年约150-350美元）——不过由于该法律尚未生效，目前还没有针对加利福尼亚州的具体金额估算。',
          '认证仍是全美性的另一道门槛：截至撰写本文时,尚无任何完整的插电式太阳能系统确认已完成完整的UL 3700认证。EcoFlow的STREAM Ultra是最接近上市的产品,但目前专门面向犹他州市场销售。',
          '既然SB 868已经签署，等认证硬件面世后，你会想比较真正的产品选项。请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接，并不代表任何特定套件已在加利福尼亚州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于加利福尼亚州阳台太阳能的快速问答',
        faqs: [
          {
            q: '加利福尼亚州现在阳台太阳能合法吗？',
            a: '已签署，但尚未生效。纽森州长于2026年9月30日签署了SB 868，该法案将于2027年1月1日生效。',
          },
          {
            q: 'SB 868何时生效，有哪些要求？',
            a: '该法案将于2027年1月1日生效。它将符合条件的系统限制为每套住宅交流总输出功率1,200瓦，要求设备获得UL或同等NRTL认证并在电网停电后数秒内自动关机，同时豁免符合条件的系统的并网协议。',
          },
          {
            q: '即便SB 868获得通过,我的HOA或房东能禁止阳台太阳能吗？',
            a: '有可能。与科罗拉多州和新泽西州不同,SB 868不会取代租约或HOA规定——加利福尼亚州现行的《太阳能权利法》是针对屋顶系统制定的,并不适用于插电式阳台设备。',
          },
          {
            q: '在已签署的法律下，1,200瓦的豁免是永久性的吗？',
            a: '不是——SB 868中的并网豁免将于2030年1月1日到期，除非延期。随着该日期临近，请留意是否有后续立法。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal na Califórnia?',
    dateModified: '2026-10-16',
    seoTitle: 'A energia solar de varanda é legal na Califórnia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sancionada, ainda não em vigor. O SB 868 da Califórnia entra em vigor em 1º de janeiro de 2027, com limite de 1.200 W por unidade habitacional. Resposta rápida da PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'Sancionada, mas ainda não em vigor. O SB 868 da Califórnia ("Plug and Play Solar Act", de autoria do senador Scott Wiener) foi aprovado pela Assembleia por 73 votos a 0 e o governador Gavin Newsom o sancionou em 30 de setembro de 2026; entra em vigor em 1º de janeiro de 2027. Limita os sistemas elegíveis a 1.200 W de potência CA total por unidade habitacional, exige certificação UL ou NRTL equivalente e desligamento automático em poucos segundos após uma queda da rede, e os isenta de acordos de interconexão até 1º de janeiro de 2030, salvo prorrogação — mas não anula contratos de aluguel nem regras de HOA.',
        bullets: [
          'O SB 868 foi aprovado pela Assembleia por 73 a 0 e sancionado pelo governador Newsom em 30 de setembro de 2026 — entra em vigor em 1º de janeiro de 2027, portanto ainda não está em vigor',
          'Limite de 1.200 W de potência CA total por unidade habitacional; sistemas elegíveis ficam isentos de acordos de interconexão até 1º de janeiro de 2030, salvo prorrogação — uma data de expiração, não uma isenção permanente',
          'Diferentemente do Colorado e de Nova Jersey, NÃO impede que locadores ou HOAs restrinjam os dispositivos',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O SB 868 da Califórnia foi sancionado, mas ainda não está em vigor — o governador Newsom o sancionou em 30 de setembro de 2026 e ele entra em vigor em 1º de janeiro de 2027.',
          'A lei limita os sistemas elegíveis a 1.200 W de potência CA total por unidade habitacional, exige certificação UL ou NRTL equivalente e desligamento automático em poucos segundos após uma queda da rede, e os isenta de acordos de interconexão — mas apenas até 1º de janeiro de 2030, salvo prorrogação.',
          'A lei NÃO anula contratos de aluguel nem restrições de HOA — a Solar Rights Act vigente na Califórnia foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          'A Califórnia tem a tarifa residencial média de eletricidade mais alta entre os estados acompanhados nesta série, cerca de 33,3 ¢/kWh — o potencial econômico mais forte, assim que a lei estiver em vigor e hardware certificado chegar ao mercado.',
        ],
      },
      body1: {
        title: 'O que o SB 868 vai exigir na Califórnia?',
        content: [
          'O SB 868 da Califórnia, o Plug and Play Solar Act, foi aprovado pela Assembleia estadual por 73 votos a 0 e sancionado pelo governador Gavin Newsom em 30 de setembro de 2026; entra em vigor em 1º de janeiro de 2027. Limita os sistemas solares plug-in elegíveis a 1.200 watts de potência CA total por unidade habitacional, exige que os dispositivos tenham certificação UL ou NRTL equivalente e se desliguem automaticamente em poucos segundos após uma queda da rede, e isenta os sistemas elegíveis de acordos de interconexão — mas apenas até 1º de janeiro de 2030, salvo prorrogação, uma data de expiração e não uma isenção permanente.',
          'Diferentemente do Colorado e de Nova Jersey, o SB 868 não anula locadores nem HOAs. Um contrato de aluguel que proíba instalações na varanda continuaria a proibi-las, e a Solar Rights Act vigente na Califórnia — que proíbe HOAs de banir energia solar — foi redigida em torno de sistemas montados em telhado, não de dispositivos plug-in em uma varanda de parede compartilhada, portanto provavelmente não estenderia proteção automática aqui. Verifique separadamente seu próprio contrato de aluguel ou regulamento de HOA quando a lei entrar em vigor.',
        ],
        columns: ['Campo', 'Califórnia SB 868'],
        rows: [
          { Campo: 'Status', 'Califórnia SB 868': 'Sancionada em 30 set. 2026 — em vigor a partir de 1º jan. 2027 (ainda não em vigor)' },
          { Campo: 'Limite de potência', 'Califórnia SB 868': '1.200 W CA por unidade habitacional' },
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
          'A Califórnia tem a tarifa residencial média de eletricidade mais alta entre os estados acompanhados nesta série, cerca de 33,3 ¢/kWh — quase o triplo dos 11,6 ¢/kWh de Utah. Quando o SB 868 entrar em vigor e hardware compatível chegar ao mercado, o retorno de um kit de 800 W deve ser o mais forte entre todos os estados desta série, bem acima da faixa nacional de cerca de US$ 150–350/ano acompanhada até aqui — embora ainda não exista uma estimativa específica para a Califórnia, já que a lei ainda não está em vigor.',
          'A certificação continua sendo o outro obstáculo em nível nacional: no momento da redação deste texto, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente é vendido especificamente para Utah.',
          'Agora que o SB 868 foi sancionado, você vai querer comparar hardware real assim que existirem dispositivos certificados. Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível na Califórnia hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda na Califórnia',
        faqs: [
          {
            q: 'A energia solar de varanda é legal na Califórnia agora?',
            a: 'Sancionada, mas ainda não em vigor. O governador Newsom sancionou o SB 868 em 30 de setembro de 2026, e ele entra em vigor em 1º de janeiro de 2027.',
          },
          {
            q: 'Quando o SB 868 entra em vigor e o que ele exige?',
            a: 'Entra em vigor em 1º de janeiro de 2027. Limita os sistemas elegíveis a 1.200 W de potência CA total por unidade habitacional, exige certificação UL ou NRTL equivalente e desligamento automático em poucos segundos após uma queda da rede, e isenta os sistemas elegíveis de acordos de interconexão.',
          },
          {
            q: 'O SB 868 vai permitir que minha HOA ou locador proíba a energia solar de varanda?',
            a: 'Sim, potencialmente. Diferentemente do Colorado e de Nova Jersey, o SB 868 não anula contratos de aluguel nem regras de HOA — a Solar Rights Act vigente na Califórnia foi redigida para sistemas em telhado, não para dispositivos plug-in de varanda.',
          },
          {
            q: 'A isenção de 1.200 W é permanente na lei sancionada?',
            a: 'Não — a isenção de interconexão no SB 868 expira em 1º de janeiro de 2030, salvo prorrogação. Fique atento a legislação de acompanhamento conforme essa data se aproxima.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا؟',
    dateModified: '2026-10-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. يبدأ سريان SB 868 في كاليفورنيا في 1 يناير 2027 بحد أقصى 1,200 واط لكل وحدة سكنية. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. أقرّت الجمعية التشريعية في كاليفورنيا مشروع القانون SB 868 ("Plug and Play Solar Act"، من إعداد السيناتور سكوت وينر) بنتيجة 73 مقابل 0، ووقّعه الحاكم غافين نيوسوم في 30 سبتمبر 2026، ويبدأ سريانه في 1 يناير 2027. يحدّ القانون الأنظمة المؤهلة عند 1,200 واط من إجمالي خرج التيار المتردد لكل وحدة سكنية، ويشترط اعتماد UL أو NRTL معادلًا والإيقاف التلقائي خلال ثوانٍ من انقطاع الشبكة، ويُعفيها من اتفاقيات الربط الشبكي حتى 1 يناير 2030 ما لم يُمدَّد — لكنه لا يُبطل عقود الإيجار أو لوائح جمعيات الملاك (HOA).',
        bullets: [
          'أقرّت الجمعية التشريعية SB 868 بنتيجة 73 مقابل 0 ووقّعه الحاكم نيوسوم في 30 سبتمبر 2026 — ويبدأ سريانه في 1 يناير 2027، أي أنه لم يدخل حيز التنفيذ بعد',
          'حد أقصى 1,200 واط من إجمالي خرج التيار المتردد لكل وحدة سكنية؛ والأنظمة المؤهلة معفاة من اتفاقيات الربط الشبكي حتى 1 يناير 2030 ما لم يُمدَّد — وهو تاريخ انتهاء وليس إعفاءً دائمًا',
          'خلافًا لكولورادو ونيوجيرسي، لا يمنع الملاك المؤجرين أو جمعيات الملاك من تقييد الأجهزة',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'مشروع القانون SB 868 في كاليفورنيا تم التوقيع عليه لكنه لم يدخل حيز التنفيذ بعد — وقّعه الحاكم نيوسوم في 30 سبتمبر 2026 ويبدأ سريانه في 1 يناير 2027.',
          'يحدّ القانون الأنظمة المؤهلة عند 1,200 واط من إجمالي خرج التيار المتردد لكل وحدة سكنية، ويشترط اعتماد UL أو NRTL معادلًا والإيقاف التلقائي خلال ثوانٍ من انقطاع الشبكة، ويُعفيها من اتفاقيات الربط الشبكي — لكن فقط حتى 1 يناير 2030 ما لم يُمدَّد.',
          'لا يُبطل القانون عقود الإيجار أو قيود جمعيات الملاك (HOA) — قانون Solar Rights Act الحالي في كاليفورنيا مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          'تمتلك كاليفورنيا أعلى متوسط تعرفة كهرباء سكنية بين جميع الولايات المتتبَّعة في هذه السلسلة، عند نحو 33.3 سنتًا لكل كيلوواط ساعة — ما يمنحها أقوى جدوى اقتصادية محتملة بمجرد دخول القانون حيز التنفيذ وتوفر أجهزة معتمدة.',
        ],
      },
      body1: {
        title: 'ما الذي سيتطلبه SB 868 في كاليفورنيا؟',
        content: [
          'أقرّت الجمعية التشريعية في كاليفورنيا مشروع القانون SB 868 (Plug and Play Solar Act) بنتيجة 73 مقابل 0، ووقّعه الحاكم غافين نيوسوم في 30 سبتمبر 2026، ويبدأ سريانه في 1 يناير 2027. يحدّ القانون أنظمة الطاقة الشمسية القابلة للتوصيل المباشر المؤهلة عند 1,200 واط من إجمالي خرج التيار المتردد لكل وحدة سكنية، ويشترط أن تكون الأجهزة معتمدة من UL أو NRTL معادل وأن تتوقف تلقائيًا خلال ثوانٍ من انقطاع الشبكة، ويُعفي الأنظمة المؤهلة من اتفاقيات الربط الشبكي — لكن فقط حتى 1 يناير 2030 ما لم يُمدَّد، وهو تاريخ انتهاء وليس إعفاءً دائمًا.',
          'خلافًا لكولورادو ونيوجيرسي، لا يُبطل SB 868 صلاحيات الملاك المؤجرين أو جمعيات الملاك (HOA). فعقد الإيجار الذي يحظر التركيبات على الشرفة سيظل يحظرها، وقانون Solar Rights Act الحالي في كاليفورنيا — الذي يمنع جمعيات الملاك من حظر الطاقة الشمسية — مكتوب حول الأنظمة المثبتة على الأسطح، وليس الأجهزة القابلة للتوصيل المباشر على شرفة ذات جدار مشترك، لذا من المرجح ألا يمتد ليشمل حماية تلقائية هنا. تحقق من عقد إيجارك أو لائحة جمعية الملاك الخاصة بك بشكل منفصل بمجرد دخول القانون حيز التنفيذ.',
        ],
        columns: ['الحقل', 'كاليفورنيا SB 868'],
        rows: [
          { 'الحقل': 'الحالة', 'كاليفورنيا SB 868': 'تم التوقيع في 30 سبتمبر 2026 — يبدأ السريان 1 يناير 2027 (لم يدخل حيز التنفيذ بعد)' },
          { 'الحقل': 'الحد الأقصى للطاقة', 'كاليفورنيا SB 868': '1,200 واط تيار متردد لكل وحدة سكنية' },
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
          'تمتلك كاليفورنيا أعلى متوسط تعرفة كهرباء سكنية بين جميع الولايات المتتبَّعة في هذه السلسلة، عند نحو 33.3 سنتًا لكل كيلوواط ساعة — ما يقارب ثلاثة أضعاف تعرفة يوتا البالغة 11.6 سنتًا. بمجرد دخول SB 868 حيز التنفيذ ووصول أجهزة متوافقة إلى السوق، فمن المتوقع أن يكون عائد مجموعة 800 واط الأقوى بين جميع الولايات في هذه السلسلة، أعلى بكثير من النطاق الوطني الذي تم تتبعه حتى الآن والبالغ نحو 150–350 دولارًا سنويًا — رغم عدم وجود تقدير خاص بكاليفورنيا بعد لأن القانون لم يدخل حيز التنفيذ.',
          'يبقى الاعتماد العقبة الأخرى على مستوى البلاد: حتى وقت كتابة هذا المقال، لم يؤكد أي نظام شمسي كامل قابل للتوصيل المباشر حصوله على اعتماد UL 3700 الكامل. يُعد جهاز EcoFlow STREAM Ultra الأقرب إلى السوق، لكنه يُطرح للبيع حاليًا خصيصًا في يوتا.',
          'بعد التوقيع على SB 868، سترغب في مقارنة الأجهزة الفعلية بمجرد توفر أجهزة معتمدة. اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في كاليفورنيا اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في كاليفورنيا',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في كاليفورنيا الآن؟',
            a: 'تم التوقيع عليه، لكنه لم يدخل حيز التنفيذ بعد. وقّع الحاكم نيوسوم على SB 868 في 30 سبتمبر 2026، ويبدأ سريانه في 1 يناير 2027.',
          },
          {
            q: 'متى يبدأ سريان SB 868 وما الذي يشترطه؟',
            a: 'يبدأ سريانه في 1 يناير 2027. يحدّ الأنظمة المؤهلة عند 1,200 واط من إجمالي خرج التيار المتردد لكل وحدة سكنية، ويشترط اعتماد UL أو NRTL معادلًا والإيقاف التلقائي خلال ثوانٍ من انقطاع الشبكة، ويُعفي الأنظمة المؤهلة من اتفاقيات الربط الشبكي.',
          },
          {
            q: 'هل سيسمح SB 868 لجمعية الملاك أو الملاك المؤجر لدي بحظر الطاقة الشمسية للشرفات؟',
            a: 'نعم، من المحتمل. خلافًا لكولورادو ونيوجيرسي، لا يُبطل SB 868 عقود الإيجار أو لوائح جمعيات الملاك — قانون Solar Rights Act الحالي في كاليفورنيا مكتوب للأنظمة المثبتة على الأسطح، وليس لأجهزة الشرفات القابلة للتوصيل المباشر.',
          },
          {
            q: 'هل إعفاء 1,200 واط دائم في القانون الموقَّع؟',
            a: 'لا — ينتهي إعفاء الربط الشبكي في SB 868 في 1 يناير 2030 ما لم يُمدَّد. راقب أي تشريع لاحق مع اقتراب ذلك التاريخ.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-california-overview-hero-ko.webp',
    title: '캘리포니아주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-10-16',
    seoTitle: '캘리포니아주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '서명되었지만 아직 발효되지 않았습니다. 캘리포니아주 SB 868은 2027년 1월 1일 발효되며 세대당 상한은 1,200W입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
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
        answer: '서명되었지만 아직 발효되지 않았습니다. 캘리포니아주 SB 868("Plug and Play Solar Act", 스콧 위너 주 상원의원 발의)은 주 하원에서 73대 0으로 통과되었고 개빈 뉴섬 주지사가 2026년 9월 30일에 서명했으며, 2027년 1월 1일부터 발효됩니다. 요건을 충족하는 시스템을 세대당 총 교류 출력 1,200W로 제한하고, UL 또는 동등한 NRTL 인증과 계통 정전 후 수 초 내 자동 차단을 요구하며, 2030년 1월 1일까지(연장되지 않는 한) 계통연계 계약을 면제합니다. 다만 임대 계약이나 HOA 규정을 무효화하지는 않습니다.',
        bullets: [
          'SB 868은 주 하원에서 73대 0으로 통과되어 2026년 9월 30일 뉴섬 주지사가 서명 — 2027년 1월 1일 발효이므로 아직 발효되지 않음',
          '세대당 총 교류 출력 1,200W 상한. 요건을 충족하는 시스템은 2030년 1월 1일까지(연장되지 않는 한) 계통연계 계약 면제 — 영구 면제가 아닌 만료 기한이 있는 조치',
          '콜로라도주 및 뉴저지주와 달리, 임대인이나 HOA의 제한을 막지는 않음',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '캘리포니아주 SB 868은 서명되었지만 아직 발효되지 않았습니다 — 뉴섬 주지사가 2026년 9월 30일에 서명했으며 2027년 1월 1일부터 발효됩니다.',
          '이 법은 요건을 충족하는 시스템을 세대당 총 교류 출력 1,200W로 제한하고, UL 또는 동등한 NRTL 인증과 계통 정전 후 수 초 내 자동 차단을 요구하며, 계통연계 계약을 면제하지만, 이는 2030년 1월 1일까지(연장되지 않는 한)입니다.',
          '이 법은 임대 계약이나 HOA의 제한을 무효화하지 않습니다 — 캘리포니아주의 기존 Solar Rights Act는 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          '캘리포니아주는 이 시리즈가 추적하는 주 중 평균 주거용 전기 요금이 가장 높은 곳으로, kWh당 약 33.3센트입니다 — 법이 발효되고 인증된 하드웨어가 출시되면 가장 강력한 경제성을 기대할 수 있습니다.',
        ],
      },
      body1: {
        title: 'SB 868은 캘리포니아주에서 무엇을 요구하게 됩니까?',
        content: [
          '캘리포니아주 SB 868(Plug and Play Solar Act)은 주 하원에서 73대 0으로 통과되었고 2026년 9월 30일 개빈 뉴섬 주지사가 서명했으며, 2027년 1월 1일부터 발효됩니다. 요건을 충족하는 플러그인 태양광 시스템을 세대당 총 교류 출력 1,200와트로 제한하고, 기기가 UL 또는 동등한 NRTL 인증을 받고 계통 정전 후 수 초 내에 자동으로 차단되도록 요구하며, 해당 시스템을 계통연계 계약에서 면제합니다 — 다만 이는 2030년 1월 1일까지(연장되지 않는 한)로, 영구 면제가 아닌 만료 기한이 있는 조치입니다.',
          '콜로라도주 및 뉴저지주와 달리, SB 868은 임대인이나 HOA의 권한을 무효화하지 않습니다. 발코니 설치를 금지하는 임대 계약은 계속 유효하며, HOA의 태양광 금지를 막는 캘리포니아주의 기존 Solar Rights Act는 지붕 설치형 시스템을 전제로 작성되어 있어 공유벽 발코니에 설치하는 플러그인 기기까지 자동으로 보호가 확장될 가능성은 낮습니다. 법이 발효되면 본인의 임대 계약서나 HOA 규약을 별도로 확인해야 합니다.',
        ],
        columns: ['항목', '캘리포니아주 SB 868'],
        rows: [
          { '항목': '상태', '캘리포니아주 SB 868': '2026년 9월 30일 서명 — 2027년 1월 1일 발효 (아직 발효 전)' },
          { '항목': '출력 상한', '캘리포니아주 SB 868': '세대당 1,200W 교류' },
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
          '캘리포니아주는 이 시리즈가 추적하는 주 중 평균 주거용 전기 요금이 가장 높은 곳으로, kWh당 약 33.3센트입니다 — 유타주의 kWh당 11.6센트의 거의 세 배입니다. SB 868이 발효되고 적합한 하드웨어가 시장에 나오면, 800W 키트의 수익률은 이 시리즈 내 모든 주 가운데 가장 강력할 것으로 예상되며, 지금까지 추적해 온 연간 약 150~350달러의 전국 범위를 크게 상회할 수 있습니다 — 다만 법이 아직 발효되지 않아 캘리포니아주 고유의 금액 추정치는 아직 없습니다.',
          '인증은 여전히 전국적인 또 다른 관문입니다 — 본 문서 작성 시점 기준으로 완전한 플러그인 태양광 시스템 중 UL 3700 완전 인증을 받은 것으로 확인된 제품은 없습니다. EcoFlow의 STREAM Ultra가 시장에 가장 가까운 제품이지만 현재는 유타주 전용으로 판매되고 있습니다.',
          'SB 868이 서명된 만큼, 인증된 하드웨어가 등장하면 실제 제품을 비교할 준비를 하십시오. <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하십시오 — 이는 단순한 제품 링크일 뿐, 특정 키트가 캘리포니아주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '캘리포니아주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '캘리포니아주에서 지금 발코니 태양광은 합법입니까?',
            a: '서명되었지만 아직 발효되지 않았습니다. 뉴섬 주지사가 2026년 9월 30일 SB 868에 서명했으며, 2027년 1월 1일부터 발효됩니다.',
          },
          {
            q: 'SB 868은 언제 발효되며 무엇을 요구합니까?',
            a: '2027년 1월 1일부터 발효됩니다. 요건을 충족하는 시스템을 세대당 총 교류 출력 1,200W로 제한하고, UL 또는 동등한 NRTL 인증과 계통 정전 후 수 초 내 자동 차단을 요구하며, 해당 시스템을 계통연계 계약에서 면제합니다.',
          },
          {
            q: 'SB 868이 통과되어도 HOA나 임대인이 발코니 태양광을 금지할 수 있습니까?',
            a: '예, 가능성이 있습니다. 콜로라도주 및 뉴저지주와 달리, SB 868은 임대 계약이나 HOA 규정을 무효화하지 않습니다 — 캘리포니아주의 기존 Solar Rights Act는 지붕형 시스템을 대상으로 작성되었으며, 플러그인 발코니 기기는 대상이 아닙니다.',
          },
          {
            q: '서명된 법에서 1,200W 면제는 영구적입니까?',
            a: '아닙니다 — SB 868의 계통연계 면제는 연장되지 않는 한 2030년 1월 1일에 만료됩니다. 그 날짜가 다가오면 후속 입법 여부를 주시해야 합니다.',
          },
        ],
      },
    },
  },
}
