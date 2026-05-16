// Auto-generated from src/lib/local-llms/content.ts
// Slug: on-prem-air-gapped-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Isolated Deployment for Classified Environments',
      seoTitle: 'Air-Gapped Local LLM Deployment',
      intro: 'Air-gapped deployment means the LLM infrastructure is completely isolated from the internet. No internet connection, no external API calls, no data exfiltration risk. As of April 2026, this is standard for government, military, and financial institutions handling classified or highly sensitive data.',
      metaDescription: 'Air-gapped local LLM deployment: complete isolation architecture, network security, updates management, and classified data handling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Air-gapped deployment means the LLM infrastructure is completely isolated from the internet. No internet connection, no external API calls, no data exfiltration risk. As of April 2026, this is standard for government, military, and financial institutions handling classified or highly sensitive data.**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '12 min read',
      educationalLevel: 'Advanced',
      primaryTerm: 'air-gapped deployment',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is Air-Gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Architecture Design', anchor: '#architecture' },
        { label: 'Network Isolation', anchor: '#network-isolation' },
        { label: 'Model and Data Management', anchor: '#model-management' },
        { label: 'Updates and Maintenance', anchor: '#updates' },
        { label: 'Security Considerations', anchor: '#security' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Air-gapped = completely isolated from internet. Zero network connectivity to external systems.',
            'Use case: Government (classified), military (war scenarios), finance (high-security), healthcare (HIPAA ultra-sensitive).',
            'Challenge: Cannot auto-update models, embeddings, or dependencies. Requires manual update procedures.',
            'Architecture: Dedicated hardware, encrypted storage, restricted user access, physical security.',
            '**Network isolation:** Firewalls, air-gap appliances, and network segmentation prevent any external communication.',
            '**Model management:** Transfer models via USB, secure media, or internal networks only; no cloud access.',
            '**Updates:** Manual process -- test updates offline first, then deploy via secure channels.',
            'As of April 2026, air-gapped is standard for government and defense contractors.',
          ],
        },
        whatIsAirGapped: {
          title: 'What Does Air-Gapped Mean?',
          content: [
            '**Air-gapped infrastructure has no network connection to the internet or any external system.** All data and computation stays on isolated hardware.',
            '**Absolute isolation:** No WiFi, no Ethernet to external networks, no USB connections to internet-connected devices.',
            '**Data never leaves:** Inference happens locally, results stay locally.',
            '**Updates are manual:** Cannot auto-download model updates. Updates require physical media (USB drive, SD card) or internal network transfer.',
          ],
        },
        architecture: {
          title: 'What Does Typical Air-Gapped Architecture Look Like?',
          content: [
            '**A single machine or small cluster, completely isolated, with restricted physical access.**',
          ],
          numberedItems: [
            '**Dedicated hardware:** Servers used only for LLM inference, nothing else.',
            '**Isolated network:** No connection to corporate network or internet. Separate VLAN at most.',
            '**Encrypted storage:** All model files, data, logs encrypted at rest.',
            '**Controlled access:** Only authorized personnel can access. Multi-factor authentication required.',
            '**Physical security:** Locked server room, surveillance, access logs.',
            '**No removable media:** USB ports disabled, CD/DVD drives removed.',
            '**Local monitoring:** Logs stay on-system, not sent to external monitoring services.',
          ],
        },
        networkIsolation: {
          title: 'How Do You Isolate Networks From External Connections?',
          content: [
            '**Isolation is enforced at multiple levels:**',
          ],
          items: [
            '**Physical:** Separate network hardware (switch, router) for air-gapped infrastructure.',
            '**Firewall:** Inbound and outbound traffic blocked. No exceptions for cloud services, NTP, DNS to external servers.',
            '**Software:** Host-level firewalls (iptables, Windows Firewall) as secondary control.',
            '**Monitoring:** Network traffic audited. Any attempt to connect externally is logged and flagged.',
          ],
        },
        modelManagement: {
          title: 'How Do You Manage Models in Air-Gapped Environments?',
          content: [
            '**Model updates are manual, requiring physical media transfer or internal secure processes.**',
          ],
          numberedItems: [
            'Download model on internet-connected machine (separate, non-classified environment).',
            'Verify model integrity (checksum, digital signature).',
            'Transfer to air-gapped system via encrypted USB drive or internal file server.',
            'Validation: Run tests to ensure model integrity was not compromised during transfer.',
            'Deployment: Load model into inference engine.',
            'Documentation: Log which models are deployed, versions, dates.',
          ],
        },
        updates: {
          title: 'How Do You Handle Updates and Patching?',
          content: [
            '**Security updates and model updates are manual:**',
          ],
          items: [
            '**Model updates:** Follow process above. Schedule updates quarterly or annually.',
            '**OS patches:** Test on isolated staging environment first, then deploy to production.',
            '**Dependencies:** Evaluate new versions carefully. Air-gapped systems run older versions longer.',
            '**No auto-updates:** Disable automatic updates entirely. All updates are controlled, documented, audited.',
          ],
        },
        security: {
          title: 'How Do You Ensure Security in Air-Gapped Systems?',
          content: [
            '**Air-gapped inherently more secure (no external attacks), but new risks emerge:**',
          ],
          items: [
            '**Insider threats:** Employees with access could copy data via USB. Require two-person integrity.',
            '**Supply chain attacks:** Compromised models or dependencies during transfer. Verify checksums, digital signatures.',
            '**Physical theft:** Models and data worth millions. Require locked room, surveillance, intrusion detection.',
            '**Social engineering:** "Trust me, I need to update the model." Require formal change control processes.',
            '**Logging gaps:** If logs are not audited, nobody detects insider activity. Require external audit of logs regularly.',
          ],
        },
        commonMistakes: {
          title: 'Common Air-Gapped Deployment Mistakes',
          items: [
            '**Incomplete isolation:** Leaving one port open, one wireless card enabled, or allowing USB devices defeats air-gapping. Audit rigorously.',
            '**No change control:** Model updates happen informally, no documentation. Leads to loss of knowledge about which version is deployed.',
            '**Poor backup strategy:** Air-gapped systems need redundant storage and off-site backups. But backups themselves must be air-gapped.',
            '**Insufficient logging:** Air-gapped systems require comprehensive auditing (who accessed what, when). Without logs, breaches go undetected.',
            '**Trusting physical security alone:** Security requires multiple layers: isolation, encryption, access control, auditing, not just locked doors.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Air-Gapped Systems',
          faqs: [
            {
              q: 'How do we update models in an air-gapped system?',
              a: 'Manually via encrypted USB, or via an internal secure network isolated from the internet. All updates require change control approval and audit trails.',
            },
            {
              q: 'Can we use cloud backups for air-gapped systems?',
              a: 'No. Cloud backups require internet connection (defeating air-gapping). Use physical backups (encrypted hard drives) stored in separate secure facility.',
            },
            {
              q: 'Is air-gapped truly secure against all attacks?',
              a: 'Mostly, but insider threats remain. Air-gapped is secure against remote attacks, but physical access or insider access can compromise it.',
            },
            {
              q: 'How expensive is air-gapped deployment?',
              a: 'Hardware costs $50k-500k (not much more than regular on-prem). Operational costs (security, auditing, training) are 5-10× higher due to manual processes.',
            },
            {
              q: 'Can we use standard tools (Ollama, vLLM) in air-gapped environments?',
              a: 'Yes. Both tools work without internet. Deploy once, then no internet connectivity needed. Ensure all dependencies are installed offline.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Why Enterprises Use Local LLMs](/local-llms/why-enterprises-use-local-llms) -- Business case for on-prem AI.',
            '[Enterprise Compliance Local LLMs](/local-llms/enterprise-compliance-local-llms) -- Regulatory requirements.',
            '[Scaling Local LLMs Enterprise](/local-llms/scaling-local-llms-enterprise) -- Production deployment beyond single machine.',
            '[Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) -- 12-step security verification.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'DoD Data Management -- defense.gov/News/Releases/',
            'Air-Gap Security Guidelines -- ietf.org (RFC documents on network isolation)',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Air-Gapped Local LLM Deployment',
        'description': 'Air-gapped local LLM deployment: complete isolation architecture, network security, updates management, and classified data handling.',
        'url': 'https://www.promptquorum.com/local-llms/on-prem-air-gapped-local-llm',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do we update models in an air-gapped system?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Manually via encrypted USB, or via an internal secure network isolated from the internet. All updates require change control approval and audit trails.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can we use cloud backups for air-gapped systems?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Cloud backups require internet connection (defeating air-gapping). Use physical backups (encrypted hard drives) stored in separate secure facility.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is air-gapped truly secure against all attacks?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mostly, but insider threats remain. Air-gapped is secure against remote attacks, but physical access or insider access can compromise it.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How expensive is air-gapped deployment?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Hardware costs $50k-500k (not much more than regular on-prem). Operational costs (security, auditing, training) are 5-10× higher due to manual processes.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can we use standard tools (Ollama, vLLM) in air-gapped environments?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Both tools work without internet. Deploy once, then no internet connectivity needed. Ensure all dependencies are installed offline.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Air-Gapped Local LLM Deployment',
        'inLanguage': 'en',
        'numberOfItems': 3,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Complete Network Isolation',
            'description': 'Air-gapped infrastructure has no network connection to the internet or any external system, ensuring zero external access.',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Manual Update Procedures',
            'description': 'Model updates require physical media (USB drive) or internal secure networks only; no cloud access.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Enhanced Security',
            'description': 'Protects classified data in government, military, and financial environments requiring maximum data protection.',
          },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Isolierte Bereitstellung für klassifizierte Umgebungen',
      seoTitle: 'Air-Gapped Local LLM Bereitstellung',
      intro: 'Air-Gapped-Bereitstellung bedeutet, dass die LLM-Infrastruktur vollständig vom Internet isoliert ist. Keine Internetverbindung, keine externen API-Aufrufe, kein Datenabfluss-Risiko. Ab April 2026 ist dies Standard für Behörden, Militär und Finanzinstitute, die mit klassifizierten oder hochsensiblen Daten umgehen.',
      metaDescription: 'Air-Gapped Local LLM Bereitstellung: komplette Isolierungsarchitektur, Netzwerksicherheit, Update-Verwaltung und Klassifizierungsdaten-Handling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Air-Gapped-Bereitstellung bedeutet, dass die LLM-Infrastruktur vollständig vom Internet isoliert ist. Keine Internetverbindung, keine externen API-Aufrufe, kein Datenabfluss-Risiko. Ab April 2026 ist dies Standard für Behörden, Militär und Finanzinstitute, die mit klassifizierten oder hochsensiblen Daten umgehen.**',
      audience: 'Ingenieure, die Local LLMs in Produktions- oder Enterprise-Umgebungen bereitstellen',
      readTime: '12 Min. Lesezeit',
      educationalLevel: 'Advanced',
      primaryTerm: 'Air-Gapped-Bereitstellung',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was bedeutet Air-Gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Architektur-Design', anchor: '#architecture' },
        { label: 'Netzwerkisolation', anchor: '#network-isolation' },
        { label: 'Modell- und Datenverwaltung', anchor: '#model-management' },
        { label: 'Updates und Wartung', anchor: '#updates' },
        { label: 'Sicherheitsaspekte', anchor: '#security' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Verwandte Lektüre', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-Gapped = vollständig vom Internet isoliert. Null Netzwerkverbindung zu externen Systemen.',
            'Anwendungsfall: Behörden (klassifiziert), Militär (Kriegsszenarien), Finanzen (hohe Sicherheit), Gesundheitswesen (HIPAA ultrasensibel).',
            'Herausforderung: Kann Modelle, Embeddings oder Abhängigkeiten nicht automatisch aktualisieren. Erfordert manuelle Update-Verfahren.',
            'Architektur: Dedizierte Hardware, verschlüsselte Speicherung, eingeschränkter Benutzerzugriff, physische Sicherheit.',
            '**Netzwerkisolation:** Firewalls, Air-Gap-Appliances und Netzwerksegmentierung verhindern externe Kommunikation.',
            '**Modellverwaltung:** Modelle nur per USB, sichere Medien oder interne Netzwerke übertragen; kein Cloud-Zugriff.',
            '**Updates:** Manueller Prozess -- Updates zunächst offline testen, dann über sichere Kanäle bereitstellen.',
            'Ab April 2026 ist Air-Gapped Standard für Behörden und Rüstungsunternehmer.',
          ],
        },
        whatIsAirGapped: {
          id: 'what-is-air-gapped',
          title: 'Was bedeutet Air-Gapped?',
          content: [
            '**Air-Gapped-Infrastruktur hat keine Netzwerkverbindung zum Internet oder zu externen Systemen.** Alle Daten und Berechnungen bleiben auf isolierter Hardware.',
            '**Absolute Isolierung:** Kein WLAN, kein Ethernet zu externen Netzwerken, keine USB-Verbindungen zu internetverbundenen Geräten.',
            '**Daten verlassen das System nie:** Inferenzen finden lokal statt, Ergebnisse bleiben lokal.',
            '**Updates sind manuell:** Kann Modell-Updates nicht automatisch herunterladen. Updates erfordern physische Medien (USB-Stick, SD-Karte) oder interne Netzwerkübertragung.',
          ],
        },
        architecture: {
          id: 'architecture',
          title: 'Wie sieht typische Air-Gapped-Architektur aus?',
          content: [
            '**Eine einzelne Maschine oder ein kleiner Cluster, vollständig isoliert, mit eingeschränktem physischem Zugang.**',
            '**BSI-Grundschutz-Kataloge:** Deutsche Unternehmen sollten die BSI-Grundschutz-Anforderungen für die IT-Sicherheit von Air-Gapped-Systemen erfüllen.',
          ],
          numberedItems: [
            '**Dedizierte Hardware:** Server nur für LLM-Inferenz, nichts anderes.',
            '**Isoliertes Netzwerk:** Keine Verbindung zum Unternehmens-Netzwerk oder Internet. Höchstens separates VLAN.',
            '**Verschlüsselte Speicherung:** Alle Modelldateien, Daten, Logs verschlüsselt in Ruhe.',
            '**Kontrollierter Zugriff:** Nur autorisiertes Personal kann zugreifen. Multi-Faktor-Authentifizierung erforderlich.',
            '**Physische Sicherheit:** Gesperrter Serverraum, Überwachung, Zugriffsprotokolle.',
            '**Keine Wechselmedien:** USB-Anschlüsse deaktiviert, CD/DVD-Laufwerke entfernt.',
            '**Lokale Überwachung:** Logs bleiben im System, werden nicht an externe Monitoring-Dienste gesendet.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'Wie isolieren Sie Netzwerke von externen Verbindungen?',
          content: [
            '**Isolierung wird auf mehreren Ebenen erzwungen:**',
          ],
          items: [
            '**Physisch:** Separate Netzwerk-Hardware (Switch, Router) für Air-Gapped-Infrastruktur.',
            '**Firewall:** Ein- und ausgehender Datenverkehr blockiert. Keine Ausnahmen für Cloud-Dienste, NTP, DNS zu externen Servern.',
            '**Software:** Host-Level-Firewalls (iptables, Windows Firewall) als sekundäre Kontrolle.',
            '**Überwachung:** Netzwerkverkehr wird geprüft. Jeder Versuch, sich extern zu verbinden, wird protokolliert und gekennzeichnet.',
          ],
        },
        modelManagement: {
          id: 'model-management',
          title: 'Wie verwalten Sie Modelle in Air-Gapped-Umgebungen?',
          content: [
            '**Modell-Updates sind manuell und erfordern physische Medienübertragung oder interne sichere Prozesse.**',
          ],
          numberedItems: [
            'Laden Sie Modelle auf Internet-verbundener Maschine herunter (separate, nicht klassifizierte Umgebung).',
            'Überprüfen Sie die Modellintegrität (Checksum, digitale Signatur).',
            'Übertragen Sie auf Air-Gapped-System über verschlüsselten USB-Stick oder internen File-Server.',
            'Validierung: Tests durchführen, um sicherzustellen, dass die Modellintegrität während der Übertragung nicht beeinträchtigt wurde.',
            'Bereitstellung: Laden Sie Modell in Inferenz-Engine.',
            'Dokumentation: Protokollieren Sie, welche Modelle bereitgestellt werden, Versionen, Daten.',
          ],
        },
        updates: {
          id: 'updates',
          title: 'Wie handhaben Sie Updates und Patches?',
          content: [
            '**Sicherheits-Updates und Modell-Updates sind manuell:**',
          ],
          items: [
            '**Modell-Updates:** Folgen Sie dem obigen Verfahren. Planen Sie Updates vierteljährlich oder jährlich ein.',
            '**Betriebssystem-Patches:** Testen Sie zunächst in isolierter Staging-Umgebung, dann in Produktion bereitstellen.',
            '**Abhängigkeiten:** Evaluieren Sie neue Versionen sorgfältig. Air-Gapped-Systeme führen ältere Versionen länger aus.',
            '**Keine automatischen Updates:** Deaktivieren Sie automatische Updates vollständig. Alle Updates sind kontrolliert, dokumentiert, geprüft.',
          ],
        },
        security: {
          id: 'security',
          title: 'Wie stellen Sie Sicherheit in Air-Gapped-Systemen sicher?',
          content: [
            '**Air-Gapped ist inhärent sicherer (keine externen Angriffe), aber neue Risiken entstehen:**',
          ],
          items: [
            '**Insider-Bedrohungen:** Mitarbeiter mit Zugang könnten Daten per USB kopieren. Zwei-Personen-Integrität erforderlich.',
            '**Supply-Chain-Angriffe:** Kompromittierte Modelle oder Abhängigkeiten während Übertragung. Checksummen, digitale Signaturen überprüfen.',
            '**Physischer Diebstahl:** Modelle und Daten sind millionenwert. Gesperrter Raum, Überwachung, Eindringungserkennung erforderlich.',
            '**Social Engineering:** "Vertrauen Sie mir, ich muss das Modell aktualisieren." Formale Change-Control-Prozesse erforderlich.',
            '**Logging-Lücken:** Wenn Logs nicht geprüft werden, niemand erkennt Insider-Aktivitäten. Regelmäßige externe Audit von Logs erforderlich.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige Air-Gapped-Bereitstellungsfehler',
          items: [
            '**Unvollständige Isolierung:** Ein offener Port, eine aktivierte Wireless-Karte oder erlaubte USB-Geräte aufheben Air-Gapping auf. Rigoros prüfen.',
            '**Keine Change-Control:** Modell-Updates geschehen informell, keine Dokumentation. Führt zu Wissensverlust über bereitgestellte Versionen.',
            '**Schlechte Backup-Strategie:** Air-Gapped-Systeme benötigen redundante Speicherung und Backups an anderen Orten. Backups selbst müssen Air-Gapped sein.',
            '**Unzureichendes Logging:** Air-Gapped-Systeme erfordern umfassende Auditing (wer auf was zugegriffen hat, wann). Ohne Logs bleiben Sicherheitsverletzungen unerkannt.',
            '**Nur physische Sicherheit vertrauen:** Sicherheit erfordert mehrere Ebenen: Isolierung, Verschlüsselung, Zugriffskontrolle, Auditing, nicht nur gesperrte Türen.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu Air-Gapped-Systemen',
          faqs: [
            {
              q: 'Wie aktualisieren Sie Modelle in einem Air-Gapped-System?',
              a: 'Manuell per verschlüsseltem USB oder über ein internes, vom Internet isoliertes sicheres Netzwerk. Alle Updates erfordern Change-Control-Genehmigung und Audit-Trails.',
            },
            {
              q: 'Können wir Cloud-Backups für Air-Gapped-Systeme verwenden?',
              a: 'Nein. Cloud-Backups erfordern Internetverbindung (aufheben Air-Gapping). Verwenden Sie physische Backups (verschlüsselte Festplatten) in separater sicherer Einrichtung.',
            },
            {
              q: 'Ist Air-Gapped wirklich sicher gegen alle Angriffe?',
              a: 'Größtenteils, aber Insider-Bedrohungen bleiben. Air-Gapped ist sicher gegen Remote-Angriffe, aber physischer oder Insider-Zugang kann es kompromittieren.',
            },
            {
              q: 'Wie teuer ist Air-Gapped-Bereitstellung?',
              a: 'Hardware-Kosten ca. 48k–480k € (nicht viel mehr als regulär On-Prem). Operational-Kosten (Sicherheit, Auditing, Training) sind 5–10× höher aufgrund manueller Prozesse.',
            },
            {
              q: 'Können Sie Standard-Tools (Ollama, vLLM) in Air-Gapped-Umgebungen verwenden?',
              a: 'Ja. Beide Tools funktionieren ohne Internet. Einmalige Bereitstellung, dann keine Internetverbindung erforderlich. Stellen Sie sicher, dass alle Abhängigkeiten offline installiert sind.',
            },
            {
              q: 'Muss ich bei Air-Gapped-Bereitstellung die DSGVO beachten?',
              a: 'Ja. Air-Gapped-Systeme sind ein Kontrollmechanismus für die DSGVO Artikel 28 (Datenverarbeitung). Sie erfüllen automatisch strenge Anforderungen für Datenresidenz und Sicherheit. Dokumentieren Sie alle Zugriffe und Änderungen für Compliance-Audits.',
            },
            {
              q: 'Ist Air-Gapped für den deutschen Mittelstand geeignet?',
              a: 'Ja, wenn Daten sensibel sind (Finanzen, Kundendaten, Betriebsgeheimnisse). Kleine bis mittlere Unternehmen können luftgapped Systeme mit 2–3 Servern + NAS-Backup wirtschaftlich betreiben. BSI-Grundschutz-Zertifizierung ist möglich und empfohlen für öffentliche Ausschreibungen.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Verwandte Lektüre',
          items: [
            '[Warum Unternehmen Local LLMs verwenden](/local-llms/why-enterprises-use-local-llms?lang=de) -- Geschäftsfall für On-Prem-KI.',
            '[Enterprise-Compliance Local LLMs](/local-llms/enterprise-compliance-local-llms?lang=de) -- Regulatorische Anforderungen.',
            '[Skalierung von Local LLMs Enterprise](/local-llms/scaling-local-llms-enterprise?lang=de) -- Produktionsbereitstellung über einzelne Maschine hinaus.',
            '[Local LLM Sicherheits- und Datenschutz-Checkliste](/local-llms/local-llm-security-privacy-checklist?lang=de) -- 12-Punkte-Sicherheitsverifizierung.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'BSI Grundschutz-Kataloge -- bsi.bund.de',
            'Air-Gap-Sicherheitsrichtlinien -- ietf.org (RFC-Dokumente zur Netzwerkisolation)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'On-Prem Air-Gapped Local LLMs: Isolierte Bereitstellung für klassifizierte Umgebungen',
        'description': 'Air-Gapped Local LLM Bereitstellung: komplette Isolierungsarchitektur, Netzwerksicherheit, Update-Verwaltung und Klassifizierungsdaten-Handling.',
        'url': 'https://www.promptquorum.com/local-llms/on-prem-air-gapped-local-llm?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wie aktualisieren Sie Modelle in einem Air-Gapped-System?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Manuell per verschlüsseltem USB oder über ein internes, vom Internet isoliertes sicheres Netzwerk. Alle Updates erfordern Change-Control-Genehmigung und Audit-Trails.' } },
          { '@type': 'Question', 'name': 'Können wir Cloud-Backups für Air-Gapped-Systeme verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. Cloud-Backups erfordern Internetverbindung (aufheben Air-Gapping). Verwenden Sie physische Backups (verschlüsselte Festplatten) in separater sicherer Einrichtung.' } },
          { '@type': 'Question', 'name': 'Ist Air-Gapped wirklich sicher gegen alle Angriffe?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Größtenteils, aber Insider-Bedrohungen bleiben. Air-Gapped ist sicher gegen Remote-Angriffe, aber physischer oder Insider-Zugang kann es kompromittieren.' } },
          { '@type': 'Question', 'name': 'Wie teuer ist Air-Gapped-Bereitstellung?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Hardware-Kosten ca. 48k–480k € (nicht viel mehr als regulär On-Prem). Operational-Kosten (Sicherheit, Auditing, Training) sind 5–10× höher aufgrund manueller Prozesse.' } },
          { '@type': 'Question', 'name': 'Können Sie Standard-Tools (Ollama, vLLM) in Air-Gapped-Umgebungen verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Beide Tools funktionieren ohne Internet. Einmalige Bereitstellung, dann keine Internetverbindung erforderlich. Stellen Sie sicher, dass alle Abhängigkeiten offline installiert sind.' } },
          { '@type': 'Question', 'name': 'Muss ich bei Air-Gapped-Bereitstellung die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Air-Gapped-Systeme sind ein Kontrollmechanismus für die DSGVO Artikel 28 (Datenverarbeitung). Sie erfüllen automatisch strenge Anforderungen für Datenresidenz und Sicherheit. Dokumentieren Sie alle Zugriffe und Änderungen für Compliance-Audits.' } },
          { '@type': 'Question', 'name': 'Ist Air-Gapped für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, wenn Daten sensibel sind (Finanzen, Kundendaten, Betriebsgeheimnisse). Kleine bis mittlere Unternehmen können Air-Gapped-Systeme mit 2–3 Servern + NAS-Backup wirtschaftlich betreiben. BSI-Grundschutz-Zertifizierung ist möglich und empfohlen für öffentliche Ausschreibungen.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Air-Gapped-Isolierungskomponenten',
        'inLanguage': 'de',
        'numberOfItems': 3,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Vollständige Netzwerkisolierung', 'description': 'Air-Gapped-Infrastruktur hat keine Netzwerkverbindung zum Internet oder zu externen Systemen und stellt Null-Zugang von außen sicher.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Manuelle Update-Verfahren', 'description': 'Modell-Updates erfordern physische Medien (USB-Stick) oder nur interne sichere Netzwerke; kein Cloud-Zugriff.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Erhöhte Sicherheit', 'description': 'Schützt klassifizierte Daten in Behörden-, Militär- und Finanzumgebungen, die maximalen Datenschutz erfordern.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Déploiement isolé pour environnements classifiés',
      seoTitle: 'Déploiement d\'LLM air-gapped isolé',
      intro: 'Le déploiement air-gapped signifie que l\'infrastructure LLM est complètement isolée d\'Internet. Aucune connexion Internet, aucun appel API externe, aucun risque d\'exfiltration de données. Depuis avril 2026, c\'est la norme pour les gouvernements, militaires et institutions financières traitant des données classifiées ou hautement sensibles.',
      metaDescription: 'Déploiement air-gapped d\'LLM local: architecture d\'isolement complet, sécurité réseau, gestion des mises à jour et données classifiées.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Le déploiement air-gapped signifie que l\'infrastructure LLM est complètement isolée d\'Internet. Aucune connexion Internet, aucun appel API externe, aucun risque d\'exfiltration de données. Depuis avril 2026, c\'est la norme pour les gouvernements, militaires et institutions financières traitant des données classifiées ou hautement sensibles.**',
      audience: 'Ingénieurs déployant des LLM locaux en production ou en environnements entreprise',
      readTime: '12 min de lecture',
      educationalLevel: 'Advanced',
      primaryTerm: 'déploiement air-gapped',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que l\'air-gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Conception architecturale', anchor: '#architecture' },
        { label: 'Isolation réseau', anchor: '#network-isolation' },
        { label: 'Gestion des modèles et données', anchor: '#model-management' },
        { label: 'Mises à jour et maintenance', anchor: '#updates' },
        { label: 'Considérations de sécurité', anchor: '#security' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-gapped = complètement isolé d\'Internet. Zéro connectivité réseau vers les systèmes externes.',
            'Cas d\'usage: gouvernement (classifié), militaire (scénarios de guerre), finance (haute sécurité), santé (données ultra-sensibles).',
            'Défi: impossibilité de mettre à jour automatiquement les modèles, intégrations ou dépendances. Exige des procédures manuelles.',
            'Architecture: matériel dédié, stockage chiffré, accès utilisateur restreint, sécurité physique.',
            '**Isolation réseau:** pare-feu, appliances air-gap et segmentation réseau empêchent toute communication externe.',
            '**Gestion des modèles:** transférez via USB, supports sécurisés ou réseaux internes uniquement; aucun accès cloud.',
            '**Mises à jour:** processus manuel -- testez les mises à jour hors ligne d\'abord, puis déployez via canaux sécurisés.',
            'Depuis avril 2026, air-gapped est la norme pour les gouvernements et entrepreneurs en défense.',
          ],
        },
        whatIsAirGapped: {
          id: 'what-is-air-gapped',
          title: 'Qu\'est-ce que l\'air-gapped?',
          content: [
            '**Une infrastructure air-gapped n\'a aucune connexion réseau à Internet ou à tout système externe.** Toutes les données et tous les calculs restent sur matériel isolé.',
            '**Isolement absolu:** pas de WiFi, pas d\'Ethernet vers des réseaux externes, pas de connexions USB vers des appareils connectés à Internet.',
            '**Les données ne partent jamais:** l\'inférence se fait localement, les résultats restent locaux.',
            '**Les mises à jour sont manuelles:** impossible de télécharger automatiquement les mises à jour. Exigent des supports physiques (clé USB, carte SD) ou transfert réseau interne.',
          ],
        },
        architecture: {
          id: 'architecture',
          title: 'À quoi ressemble une architecture air-gapped typique?',
          content: [
            '**Une seule machine ou petit cluster, complètement isolé, avec accès physique restreint.**',
          ],
          numberedItems: [
            '**Matériel dédié:** serveurs utilisés uniquement pour l\'inférence LLM, rien d\'autre.',
            '**Réseau isolé:** aucune connexion au réseau d\'entreprise ou Internet. VLAN séparé au maximum.',
            '**Stockage chiffré:** tous les fichiers de modèle, données, journaux chiffrés au repos.',
            '**Accès contrôlé:** seul le personnel autorisé peut accéder. Authentification multifacteur requise.',
            '**Sécurité physique:** salle de serveurs verrouillée, surveillance, journaux d\'accès.',
            '**Pas de supports amovibles:** ports USB désactivés, lecteurs CD/DVD supprimés.',
            '**Surveillance locale:** les journaux restent sur le système, ne sont pas envoyés à des services de surveillance externes.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'Comment isolez-vous les réseaux des connexions externes?',
          content: [
            '**L\'isolement est appliqué à plusieurs niveaux:**',
          ],
          items: [
            '**Physique:** matériel réseau séparé (commutateur, routeur) pour l\'infrastructure air-gapped.',
            '**Pare-feu:** trafic entrant et sortant bloqué. Aucune exception pour services cloud, NTP, DNS vers serveurs externes.',
            '**Logiciel:** pare-feu niveau hôte (iptables, Windows Firewall) comme contrôle secondaire.',
            '**Surveillance:** trafic réseau audité. Toute tentative de connexion externe est enregistrée et signalée.',
          ],
        },
        modelManagement: {
          id: 'model-management',
          title: 'Comment gérez-vous les modèles dans les environnements air-gapped?',
          content: [
            '**Les mises à jour de modèles sont manuelles, exigeant un transfert de supports physiques ou des processus sécurisés internes.**',
          ],
          numberedItems: [
            'Téléchargez le modèle sur machine connectée à Internet (environnement séparé, non classifié).',
            'Vérifiez l\'intégrité du modèle (somme de contrôle, signature numérique).',
            'Transférez vers le système air-gapped via clé USB chiffrée ou serveur de fichiers interne sécurisé.',
            'Validation: exécutez des tests pour vous assurer que l\'intégrité du modèle n\'a pas été compromise pendant le transfert.',
            'Déploiement: chargez le modèle dans le moteur d\'inférence.',
            'Documentation: enregistrez les modèles déployés, versions, dates.',
          ],
        },
        updates: {
          id: 'updates',
          title: 'Comment gérez-vous les mises à jour et les correctifs?',
          content: [
            '**Les mises à jour de sécurité et les mises à jour de modèles sont manuelles:**',
          ],
          items: [
            '**Mises à jour de modèles:** suivez le processus ci-dessus. Planifiez les mises à jour trimestriellement ou annuellement.',
            '**Correctifs OS:** testez d\'abord dans un environnement de préparation isolé, puis déployez en production.',
            '**Dépendances:** évaluez les nouvelles versions avec soin. Les systèmes air-gapped exécutent les anciennes versions plus longtemps.',
            '**Aucune mise à jour automatique:** désactivez complètement les mises à jour automatiques. Toutes les mises à jour sont contrôlées, documentées, auditées.',
          ],
        },
        security: {
          id: 'security',
          title: 'Comment garantissez-vous la sécurité dans les systèmes air-gapped?',
          content: [
            '**Air-gapped est intrinsèquement plus sûr (pas d\'attaques externes), mais de nouveaux risques émergent:**',
            '**Conformité CNIL:** la CNIL recommande l\'inférence locale pour les données sensibles. Air-gapped satisfait les exigences les plus strictes de résidence des données et de sécurité du traitement.',
          ],
          items: [
            '**Menaces d\'initiés:** employés avec accès pourraient copier des données via USB. Exiger intégrité à deux personnes.',
            '**Attaques de chaîne d\'approvisionnement:** modèles ou dépendances compromis pendant transfert. Vérifier les sommes de contrôle, signatures numériques.',
            '**Vol physique:** modèles et données valent des millions. Exiger salle verrouillée, surveillance, détection d\'intrusion.',
            '**Ingénierie sociale:** "Faites-moi confiance, je dois mettre à jour le modèle." Exiger processus formels de contrôle des changements.',
            '**Lacunes de journalisation:** si les journaux ne sont pas auditées, personne ne détecte l\'activité des initiés. Exiger audit externe régulier des journaux.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erreurs courantes de déploiement air-gapped',
          items: [
            '**Isolement incomplet:** laisser un port ouvert, une carte sans fil activée ou autoriser des périphériques USB annule air-gapping. Auditez rigoureusement.',
            '**Pas de contrôle des changements:** les mises à jour de modèles se font informellement, aucune documentation. Mène à la perte de savoir sur la version déployée.',
            '**Mauvaise stratégie de sauvegarde:** les systèmes air-gapped nécessitent stockage redondant et sauvegardes hors site. Mais les sauvegardes elles-mêmes doivent être air-gapped.',
            '**Journalisation insuffisante:** les systèmes air-gapped exigent un audit complet (qui a accédé à quoi, quand). Sans journaux, les violations passent inaperçues.',
            '**Faire confiance uniquement à la sécurité physique:** la sécurité exige plusieurs couches: isolement, chiffrement, contrôle d\'accès, audit, pas seulement portes verrouillées.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions courantes sur les systèmes air-gapped',
          faqs: [
            {
              q: 'Comment mettez-vous à jour les modèles dans un système air-gapped?',
              a: 'Manuellement via USB chiffré, ou via un réseau sécurisé isolé interne. Toutes les mises à jour exigent approbation du contrôle des changements et pistes d\'audit.',
            },
            {
              q: 'Pouvons-nous utiliser des sauvegardes cloud pour les systèmes air-gapped?',
              a: 'Non. Les sauvegardes cloud exigent connexion Internet (annulent air-gapping). Utilisez sauvegardes physiques (disques durs chiffrés) stockés dans installation sécurisée séparée.',
            },
            {
              q: 'Air-gapped est-il vraiment sûr contre toutes les attaques?',
              a: 'Généralement, mais les menaces d\'initiés persistent. Air-gapped protège contre les attaques distantes, mais accès physique ou accès d\'initié peuvent le compromettre.',
            },
            {
              q: 'Quel est le coût du déploiement air-gapped?',
              a: 'Coûts matériel 48 000–480 000 € (pas beaucoup plus qu\'on-prem régulier). Coûts opérationnels (sécurité, audit, formation) sont 5–10× plus élevés en raison des processus manuels.',
            },
            {
              q: 'Pouvons-nous utiliser les outils standards (Ollama, vLLM) dans les environnements air-gapped?',
              a: 'Oui. Les deux outils fonctionnent sans Internet. Déploiement une fois, puis aucune connectivité Internet requise. Assurez-vous que toutes les dépendances sont installées hors ligne.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Pourquoi les entreprises utilisent les LLM locaux](/local-llms/why-enterprises-use-local-llms?lang=fr) -- Cas commercial pour l\'IA on-prem.',
            '[Conformité entreprise LLM local](/local-llms/enterprise-compliance-local-llms?lang=fr) -- Exigences réglementaires.',
            '[Mise à l\'échelle des LLM locaux Enterprise](/local-llms/scaling-local-llms-enterprise?lang=fr) -- Déploiement en production au-delà d\'une machine unique.',
            '[Liste de contrôle sécurité et confidentialité LLM local](/local-llms/local-llm-security-privacy-checklist?lang=fr) -- Vérification de sécurité en 12 étapes.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Cadre de cybersécurité NIST -- nist.gov/cyberframework',
            'Recommandations CNIL sur l\'IA -- cnil.fr',
            'Directives de sécurité air-gap -- ietf.org (documents RFC sur l\'isolement réseau)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'On-Prem Air-Gapped Local LLMs: Déploiement isolé pour environnements classifiés',
        'description': 'Déploiement air-gapped d\'LLM local: architecture d\'isolement complet, sécurité réseau, gestion des mises à jour et données classifiées.',
        'url': 'https://www.promptquorum.com/local-llms/on-prem-air-gapped-local-llm?lang=fr',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Comment mettez-vous à jour les modèles dans un système air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Manuellement via USB chiffré, ou via un réseau sécurisé isolé interne. Toutes les mises à jour exigent approbation du contrôle des changements et pistes d\'audit.' } },
          { '@type': 'Question', 'name': 'Pouvons-nous utiliser des sauvegardes cloud pour les systèmes air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Les sauvegardes cloud exigent connexion Internet (annulent air-gapping). Utilisez sauvegardes physiques (disques durs chiffrés) stockés dans installation sécurisée séparée.' } },
          { '@type': 'Question', 'name': 'Air-gapped est-il vraiment sûr contre toutes les attaques?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Généralement, mais les menaces d\'initiés persistent. Air-gapped protège contre les attaques distantes, mais accès physique ou accès d\'initié peuvent le compromettre.' } },
          { '@type': 'Question', 'name': 'Quel est le coût du déploiement air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Coûts matériel 48 000–480 000 € (pas beaucoup plus qu\'on-prem régulier). Coûts opérationnels (sécurité, audit, formation) sont 5–10× plus élevés en raison des processus manuels.' } },
          { '@type': 'Question', 'name': 'Pouvons-nous utiliser les outils standards (Ollama, vLLM) dans les environnements air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les deux outils fonctionnent sans Internet. Déploiement une fois, puis aucune connectivité Internet requise. Assurez-vous que toutes les dépendances sont installées hors ligne.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Composants d\'isolement air-gapped',
        'inLanguage': 'fr',
        'numberOfItems': 3,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Isolement réseau complet', 'description': 'L\'infrastructure air-gapped n\'a aucune connexion réseau à Internet ou à systèmes externes, assurant zéro accès externe.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Procédures de mise à jour manuelle', 'description': 'Les mises à jour de modèles exigent supports physiques (clé USB) ou seulement réseaux internes sécurisés; aucun accès cloud.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Sécurité renforcée', 'description': 'Protège les données classifiées dans les environnements gouvernementaux, militaires et financiers exigeant protection maximale.' },
        ],
      },
    },
  };
