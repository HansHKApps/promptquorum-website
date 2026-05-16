// Auto-generated from src/lib/local-llms/content.ts
// Slug: vpn-for-local-llm-users
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPNs and Local AI: What You Need to Know',
      seoTitle: 'VPNs for Local LLM Teams: Remote Access, Security, Split Tunneling',
      intro: '**Remote team members can access the local LLM server via corporate VPN without exposing it to the public internet.** As of April 2026, VPN + firewall rules replace cloud API subscription for distributed teams. This guide covers setup, performance impact, and security considerations.',
      metaDescription: 'VPN for local LLM server access: WireGuard, OpenVPN setup. Remote team access, security. Split tunneling guide.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Remote team members can access the local LLM server via corporate VPN without exposing it to the public internet. As of April 2026, VPN + firewall rules replace cloud API subscription for distributed teams.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '7 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'VPN Protocols: WireGuard vs OpenVPN', anchor: '#protocols' },
        { label: 'Setup: VPN Server on LLM Network', anchor: '#setup' },
        { label: 'Performance Impact', anchor: '#perf' },
        { label: 'Split Tunneling (Access Only LLM, Not Internet)', anchor: '#split' },
        { label: 'Security Hardening', anchor: '#hardening' },
        { label: 'Troubleshooting Remote Access', anchor: '#troubleshooting' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**VPN protocol:** WireGuard (fast, modern) recommended. OpenVPN (slower, wider compatibility) fallback.',
            '**Setup:** VPN server on same network as LLM server. Remote users tunnel in via WireGuard.',
            '**Latency:** +5-10ms per connection (typically imperceptible). Throughput = limited by internet bandwidth.',
            '**Setup time:** 30 min (WireGuard) to 2 hours (OpenVPN + auth integration).',
            '**Cost:** Free (open-source) or $50-200/year (managed VPN service if you don\'t want to self-host).',
            '**Security:** WireGuard has 4,000 LOC (low attack surface). OpenVPN is 400K+ LOC (complex).',
            '**Encryption:** Both support AES-256. End-to-end security (remote user → VPN → LLM server).',
            '**No split tunneling = company controls all internet traffic. Split tunneling = user routes non-LLM traffic outside VPN.**',
          ],
        },
        'protocols': {
          id: 'protocols',
          title: 'VPN Protocols: WireGuard vs OpenVPN',
          rows: [
            { '0': 'Feature', '1': 'WireGuard', '2': 'OpenVPN' },
            { '0': 'Latency', '1': '~5ms overhead', '2': '~15ms overhead' },
            { '0': 'Setup complexity', '1': 'Simple (30 min)', '2': 'Complex (2 hours)' },
            { '0': 'Code size', '1': '4,000 LOC (auditable)', '2': '400K+ LOC (complex)' },
            { '0': 'Authentication', '1': 'Public key', '2': 'Certificates + keys' },
            { '0': 'Split tunneling', '1': '✓ Built-in', '2': '✓ Requires config' },
            { '0': 'Corporate VPN (AD/SAML)', '1': 'Limited (manual auth)', '2': 'Better (RADIUS support)' },
            { '0': 'Recommendation', '1': '**Use this**', '2': 'Fallback if no WireGuard' },
          ],
          columns: ['Feature', 'WireGuard', 'OpenVPN'],
        },
        'setup': {
          id: 'setup',
          title: 'Setup: VPN Server on LLM Network',
          numberedItems: [
            '**Install WireGuard** on VPN server (Linux VM on same LAN as LLM server).',
            '**Generate keys:** Private key (server-side secret), Public keys (distribute to clients).',
            '**Firewall rule:** Allow UDP 51820 (WireGuard default port) inbound from internet.',
            '**Client config:** Each user gets a .conf file with private key, server endpoint, allowed IPs.',
            '**Client software:** WireGuard desktop app (Mac, Windows, Linux) or mobile (iOS, Android).',
            '**Test:** User connects VPN, pings LLM server (should respond), runs inference via API.',
          ],
        },
        'perf': {
          id: 'perf',
          title: 'Performance Impact',
          content: [
            '**Latency:** WireGuard adds 5-10ms. LLM inference already takes 10-100ms/token, so impact is <5% noticeable.',
            '**Throughput:** Limited by your internet connection (e.g., 100Mbps home internet = 12 MB/sec = fine for LLM).',
            '**Example:** Sending 10KB prompt + receiving 5KB response = 15KB total. At 100Mbps = ~1ms network latency (negligible).',
            '**Encryption overhead:** Modern CPUs have AES-NI instructions. Encryption/decryption at 500Mbps+ per core.',
          ],
        },
        'split': {
          id: 'split',
          title: 'Split Tunneling (Access Only LLM, Not Internet)',
          content: [
            '**By default, VPN routes ALL traffic (internet + LLM) through corporate tunnel.**',
            'This can be slow if users want to browse the internet while using LLM.',
            '**Split tunneling** = only LLM traffic goes through VPN, internet traffic goes directly.',
            'WireGuard split tunneling example: `AllowedIPs = 10.0.0.0/24` (only LLM network).',
            '**Trade-off:** Faster internet, but less security oversight (user can exfiltrate data outside VPN).',
            '**Recommendation:** Split tunneling for users (better UX). Monitor with endpoint detection (CrowdStrike, Sentinel One).',
          ],
        },
        'hardening': {
          id: 'hardening',
          title: 'Security Hardening',
          items: [
            '**Firewall:** Only allow VPN server to talk to LLM server. Drop all other traffic.',
            '**Rotate keys:** Every 6 months, regenerate client keys. Offboard users: immediately revoke their keys.',
            '**Logging:** Log VPN connections (who, when, how long). Audit quarterly.',
            '**Passwords:** VPN server should use SSH keys only (no password auth). Password-less SSH via key pair.',
            '**Fail closed:** If VPN disconnects, client cannot access internet (unless split tunneling enabled).',
          ],
        },
        'troubleshooting': {
          id: 'troubleshooting',
          title: 'Troubleshooting Remote Access',
          content: [
            '**Can\'t connect:** Check firewall rules on router (UDP 51820 open?). Check WireGuard service running (`wg show`).',
            '**Slow inference:** Check latency (`ping 10.0.0.1` inside VPN, should be <20ms). Check internet bandwidth (`iperf3`).',
            '**API timeout:** VPN connection dropped. Check logs (`journalctl -u wg-quick@wg0`). Restart WireGuard.',
            '**One user can\'t access, others can:** Check user\'s public key in server config. Regenerate key pair.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Should I use a VPN or expose the LLM API to the internet?', a: 'Always use VPN. Never expose LLM directly to internet (DDoS, unauthorized access). VPN + firewall is secure.' },
            { q: 'Can users access the LLM API without VPN?', a: 'Only from LAN (same network). Remote users MUST use VPN. Or use reverse SSH tunnel (less secure).' },
            { q: 'Does VPN encryption slow down inference?', a: 'Negligibly (<5% impact). Modern CPUs can encrypt/decrypt at Gbps speeds.' },
            { q: 'Should I use split tunneling?', a: 'Yes, for better UX. Monitor with EDR (endpoint detection) for data exfiltration.' },
            { q: 'What if a VPN key is compromised?', a: 'Regenerate that user\'s key immediately. Old key becomes invalid. No retroactive access.' },
            { q: 'Can I use corporate VPN (Okta, Azure)?', a: 'Yes, better for large teams. But requires integration (RADIUS, SAML). WireGuard is simpler for <20 users.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Setup for Teams](/local-llms/local-llm-setup-for-teams)',
            '[Private Local LLM for Sensitive Data](/local-llms/private-local-llm-sensitive-data)',
            '[Best Local LLM Stack for Developers](/local-llms/local-llm-developer-stack)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            'WireGuard official documentation and quickstart guide',
            'OpenVPN community documentation and OpenVPN Access Server',
            'NIST Cybersecurity Framework: VPN best practices',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'VPNs for Local LLM Teams: Remote Access, Security, Split Tunneling',
        'description': 'VPN for local LLM server access: WireGuard, OpenVPN setup. Remote team access, security. Split tunneling guide.',
        'url': 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users',
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'VPN setup' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': 'Remote access' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'url': 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Should I use a VPN or expose the LLM API to the internet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Always use VPN. Never expose LLM directly to internet (DDoS, unauthorized access). VPN + firewall is secure.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can users access the LLM API without VPN?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Only from LAN (same network). Remote users MUST use VPN. Or use reverse SSH tunnel (less secure).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does VPN encryption slow down inference?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Negligibly (<5% impact). Modern CPUs can encrypt/decrypt at Gbps speeds.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I use split tunneling?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, for better UX. Monitor with EDR (endpoint detection) for data exfiltration.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What if a VPN key is compromised?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Regenerate that user\'s key immediately. Old key becomes invalid. No retroactive access.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use corporate VPN (Okta, Azure)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, better for large teams. But requires integration (RADIUS, SAML). WireGuard is simpler for <20 users.'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users',
        'inLanguage': 'en',
        'name': 'VPN Setup Options for Local LLM Remote Access',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'WireGuard: 5-10ms latency, 30 min setup, 4,000 LOC (auditable), public key authentication. Recommended.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN: 15ms latency, 2-hour setup, 400K+ LOC (complex), certificate-based. Fallback option.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel: Easiest setup, no public IP exposure, built-in DDoS protection, but vendor lock-in.' },
        ],
      },
    },
    de: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPNs und lokale KI: Was du wissen musst',
      seoTitle: 'VPN für lokale LLM-Teams: Remote-Zugriff, Sicherheit, Split-Tunneling',
      intro: '**Remote-Mitarbeiter können über ein Corporate-VPN auf den lokalen LLM-Server zugreifen, ohne ihn im öffentlichen Internet zu exponieren.** Im April 2026 ersetzen VPN + Firewall-Regeln die Cloud-API-Abonnements für verteilte Teams. Dieser Leitfaden behandelt Setup, Leistungsauswirkungen und Sicherheitsaspekte.',
      metaDescription: 'VPN für lokalen LLM-Serverzugriff: WireGuard, OpenVPN Setup. Remote-Team-Zugriff, Sicherheit. Split-Tunneling-Anleitung.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Remote-Mitarbeiter können über ein Corporate-VPN auf den lokalen LLM-Server zugreifen, ohne ihn im öffentlichen Internet zu exponieren. Im April 2026 ersetzen VPN + Firewall-Regeln die Cloud-API-Abonnements für verteilte Teams.**',
      audience: 'Entwickler, die mit Ollama oder LM Studio vertraut sind und lokale LLM-Workflows optimieren',
      readTime: '7 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'VPN-Protokolle: WireGuard vs OpenVPN', anchor: '#protocols' },
        { label: 'Setup: VPN-Server im LLM-Netzwerk', anchor: '#setup' },
        { label: 'Leistungsauswirkungen', anchor: '#perf' },
        { label: 'Split-Tunneling (Zugriff nur auf LLM, nicht Internet)', anchor: '#split' },
        { label: 'Sicherheitshärtung', anchor: '#hardening' },
        { label: 'Fehlerbehebung für Remote-Zugriff', anchor: '#troubleshooting' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**VPN-Protokoll:** WireGuard (schnell, modern) empfohlen. OpenVPN (langsamer, breiter kompatibel) Fallback.',
            '**Setup:** VPN-Server im gleichen Netzwerk wie LLM-Server. Remote-Benutzer tunneln sich über WireGuard ein.',
            '**Latenz:** +5-10ms pro Verbindung (typischerweise unmerklich). Durchsatz = begrenzt durch Internet-Bandbreite.',
            '**Setup-Zeit:** 30 Min. (WireGuard) bis 2 Stunden (OpenVPN + Auth-Integration).',
            '**Kosten:** Kostenlos (Open-Source) oder €50-200/Jahr (verwalteter VPN-Service, wenn du nicht selbst hosten möchtest).',
            '**Sicherheit:** WireGuard hat 4.000 LOC (geringe Angriffsfläche). OpenVPN ist 400K+ LOC (komplex).',
            '**Verschlüsselung:** Beide unterstützen AES-256. End-to-End-Sicherheit (Remote-Benutzer → VPN → LLM-Server).',
            '**Kein Split-Tunneling = Unternehmen kontrolliert den gesamten Internet-Verkehr. Split-Tunneling = Benutzer leitet Nicht-LLM-Verkehr außerhalb des VPN.**',
          ],
        },
        protocols: {
          id: 'protocols',
          title: 'VPN-Protokolle: WireGuard vs OpenVPN',
          rows: [
            { Merkmal: 'Merkmal', WireGuard: 'WireGuard', OpenVPN: 'OpenVPN' },
            { Merkmal: 'Latenz', WireGuard: '~5ms Overhead', OpenVPN: '~15ms Overhead' },
            { Merkmal: 'Setup-Komplexität', WireGuard: 'Einfach (30 Min.)', OpenVPN: 'Komplex (2 Stunden)' },
            { Merkmal: 'Code-Größe', WireGuard: '4.000 LOC (überprüfbar)', OpenVPN: '400K+ LOC (komplex)' },
            { Merkmal: 'Authentifizierung', WireGuard: 'Public-Key', OpenVPN: 'Zertifikate + Schlüssel' },
            { Merkmal: 'Split-Tunneling', WireGuard: '✓ Eingebaut', OpenVPN: '✓ Erfordert Konfiguration' },
            { Merkmal: 'Corporate-VPN (AD/SAML)', WireGuard: 'Begrenzt (manuelle Auth)', OpenVPN: 'Besser (RADIUS-Unterstützung)' },
            { Merkmal: 'Empfehlung', WireGuard: '**Nutze das**', OpenVPN: 'Fallback, falls kein WireGuard' },
          ],
          columns: ['Merkmal', 'WireGuard', 'OpenVPN'],
        },
        setup: {
          id: 'setup',
          title: 'Setup: VPN-Server im LLM-Netzwerk',
          numberedItems: [
            '**Installiere WireGuard** auf dem VPN-Server (Linux-VM im gleichen LAN wie LLM-Server).',
            '**Generiere Schlüssel:** Privater Schlüssel (serverseitiges Geheimnis), Öffentliche Schlüssel (an Clients verteilen).',
            '**Firewall-Regel:** Erlaube UDP 51820 (WireGuard Standard-Port) eingehend vom Internet.',
            '**Client-Konfiguration:** Jeder Benutzer erhält eine .conf-Datei mit privatem Schlüssel, Server-Endpunkt, zulässigen IPs.',
            '**Client-Software:** WireGuard Desktop-App (Mac, Windows, Linux) oder Mobile (iOS, Android).',
            '**Test:** Benutzer verbindet sich mit VPN, Ping zum LLM-Server (sollte antworten), führt Inferenz über API aus.',
          ],
        },
        perf: {
          id: 'perf',
          title: 'Leistungsauswirkungen',
          content: [
            '**Latenz:** WireGuard fügt 5-10ms hinzu. LLM-Inferenz dauert bereits 10-100ms/Token, also Auswirkung <5 % merkbar.',
            '**Durchsatz:** Begrenzt durch deine Internet-Verbindung (z.B. 100Mbps Heiminternet = 12 MB/sec = OK für LLM).',
            '**Beispiel:** 10KB Prompt senden + 5KB Antwort empfangen = 15KB insgesamt. Bei 100Mbps = ~1ms Netzwerk-Latenz (vernachlässigbar).',
            '**Verschlüsselung-Overhead:** Moderne CPUs haben AES-NI Befehle. Verschlüsselung/Entschlüsselung bei 500Mbps+ pro Kern.',
          ],
        },
        split: {
          id: 'split',
          title: 'Split-Tunneling (Zugriff nur auf LLM, nicht Internet)',
          content: [
            '**Standardmäßig leitet VPN den GESAMTEN Verkehr (Internet + LLM) durch den Corporate-Tunnel weiter.**',
            'Dies kann langsam sein, wenn Benutzer möchten, dass das Internet gleichzeitig mit LLM genutzt wird.',
            '**Split-Tunneling** = nur LLM-Verkehr geht durch VPN, Internet-Verkehr geht direkt.',
            'WireGuard Split-Tunneling Beispiel: `AllowedIPs = 10.0.0.0/24` (nur LLM-Netzwerk).',
            '**Kompromiss:** Schnelleres Internet, aber weniger Sicherheitsüberwachung (Benutzer kann Daten außerhalb des VPN exfiltrieren).',
            '**Empfehlung:** Split-Tunneling für Benutzer (bessere UX). Überwache mit Endpoint-Erkennung (CrowdStrike, Sentinel One).',
          ],
        },
        hardening: {
          id: 'hardening',
          title: 'Sicherheitshärtung',
          items: [
            '**Firewall:** Erlaube nur dem VPN-Server, mit dem LLM-Server zu sprechen. Verwerfe den gesamten anderen Verkehr.',
            '**Schlüssel rotieren:** Alle 6 Monate Client-Schlüssel neu generieren. Benutzer abmelden: Schlüssel sofort widerrufen.',
            '**Protokollierung:** Protokolliere VPN-Verbindungen (wer, wann, wie lange). Vierteljährlich überprüfen.',
            '**Passwörter:** VPN-Server sollte nur SSH-Schlüssel verwenden (keine Passwort-Auth). Passwortlose SSH über Schlüsselpaar.',
            '**Fail Closed:** Falls VPN getrennt wird, kann Client nicht auf das Internet zugreifen (es sei denn, Split-Tunneling ist aktiviert).',
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Fehlerbehebung für Remote-Zugriff',
          content: [
            '**Kann keine Verbindung herstellen:** Überprüfe Firewall-Regeln auf dem Router (UDP 51820 offen?). Überprüfe, ob WireGuard-Dienst läuft (`wg show`).',
            '**Langsame Inferenz:** Überprüfe Latenz (`ping 10.0.0.1` innerhalb VPN, sollte <20ms sein). Überprüfe Internet-Bandbreite (`iperf3`).',
            '**API Timeout:** VPN-Verbindung ist getrennt. Überprüfe Protokolle (`journalctl -u wg-quick@wg0`). Starte WireGuard neu.',
            '**Ein Benutzer kann nicht zugreifen, andere können:** Überprüfe den öffentlichen Schlüssel des Benutzers in der Server-Konfiguration. Regeneriere Schlüsselpaar.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Sollte ich ein VPN verwenden oder die LLM-API dem Internet exponieren?', a: 'Verwende immer ein VPN. Exponiere LLM niemals direkt dem Internet (DDoS, nicht autorisierter Zugriff). VPN + Firewall ist sicher.' },
            { q: 'Können Benutzer auf die LLM-API ohne VPN zugreifen?', a: 'Nur vom LAN (gleiches Netzwerk). Remote-Benutzer MÜSSEN VPN verwenden. Oder verwende SSH-Reverse-Tunnel (weniger sicher).' },
            { q: 'Verlangsamt VPN-Verschlüsselung die Inferenz?', a: 'Vernachlässigbar (<5 % Auswirkung). Moderne CPUs können Verschlüsselung/Entschlüsselung mit Gbps-Geschwindigkeit durchführen.' },
            { q: 'Sollte ich Split-Tunneling verwenden?', a: 'Ja, für bessere UX. Überwache mit EDR (Endpoint-Erkennung) auf Datenexfiltration.' },
            { q: 'Was ist, wenn ein VPN-Schlüssel kompromittiert ist?', a: 'Regeneriere sofort den Schlüssel des Benutzers. Alter Schlüssel wird ungültig. Kein rückwirkender Zugriff.' },
            { q: 'Kann ich Corporate-VPN (Okta, Azure) verwenden?', a: 'Ja, besser für große Teams. Erfordert aber Integration (RADIUS, SAML). WireGuard ist einfacher für <20 Benutzer.' },
            { q: 'Ist VPN mit DSGVO-Anforderungen konform?', a: 'Ja. VPN + Verschlüsselung erfüllen Artikel 32 (Sicherheit der Verarbeitung). Lokale Speicherung von Modellen erfüllt Artikel 5 (Datensparsamkeit). Dokumentiere Sicherheitsmaßnahmen für DSGVO-Audit.' },
            { q: 'Kann ich VPN mit BSI-Grundschutz für Mittelstand verwenden?', a: 'Ja, vollständig konform. WireGuard erfüllt BSI-Anforderungen: Verschlüsselung (AES-256), Zugriffskontrolle (Public-Key-Auth), Protokollierung. Weitere Maßnahmen: Firewall-Segmentierung, regelmäßige Schlüsselrotation, Audit-Logging.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            '[Lokales LLM-Setup für Teams](/local-llms/local-llm-setup-for-teams?lang=de)',
            '[Privates lokales LLM für sensible Daten](/local-llms/private-local-llm-sensitive-data?lang=de)',
            '[Bester lokaler LLM-Stack für Entwickler](/local-llms/local-llm-developer-stack?lang=de)',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'WireGuard offizielle Dokumentation und Schnellstartanleitung',
            'OpenVPN Community-Dokumentation und OpenVPN Access Server',
            'NIST Cybersecurity Framework: VPN Best Practices',
            'BSI Grundschutz-Kataloge: Netzwerk-Sicherheit und VPN',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VPN für lokale LLM-Teams: Remote-Zugriff, Sicherheit, Split-Tunneling',
        description: 'VPN für lokalen LLM-Serverzugriff: WireGuard, OpenVPN Setup. Remote-Team-Zugriff, Sicherheit. Split-Tunneling-Anleitung.',
        url: 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users?lang=de',
        inLanguage: 'de',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'VPN-Setup' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': 'Remote-Zugriff' },
          { '@type': 'Thing', 'name': 'lokale LLM-Inferenz' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        educationalLevel: 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        url: 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users?lang=de',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'Sollte ich ein VPN verwenden oder die LLM-API dem Internet exponieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Verwende immer ein VPN. Exponiere LLM niemals direkt dem Internet (DDoS, nicht autorisierter Zugriff). VPN + Firewall ist sicher.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Können Benutzer auf die LLM-API ohne VPN zugreifen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nur vom LAN (gleiches Netzwerk). Remote-Benutzer MÜSSEN VPN verwenden. Oder verwende SSH-Reverse-Tunnel (weniger sicher).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Verlangsamt VPN-Verschlüsselung die Inferenz?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vernachlässigbar (<5 % Auswirkung). Moderne CPUs können Verschlüsselung/Entschlüsselung mit Gbps-Geschwindigkeit durchführen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich Split-Tunneling verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, für bessere UX. Überwache mit EDR (Endpoint-Erkennung) auf Datenexfiltration.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Was ist, wenn ein VPN-Schlüssel kompromittiert ist?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Regeneriere sofort den Schlüssel des Benutzers. Alter Schlüssel wird ungültig. Kein rückwirkender Zugriff.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich Corporate-VPN (Okta, Azure) verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, besser für große Teams. Erfordert aber Integration (RADIUS, SAML). WireGuard ist einfacher für <20 Benutzer.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist VPN mit DSGVO-Anforderungen konform?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. VPN + Verschlüsselung erfüllen Artikel 32 (Sicherheit der Verarbeitung). Lokale Speicherung von Modellen erfüllt Artikel 5 (Datensparsamkeit). Dokumentiere Sicherheitsmaßnahmen für DSGVO-Audit.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich VPN mit BSI-Grundschutz für Mittelstand verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, vollständig konform. WireGuard erfüllt BSI-Anforderungen: Verschlüsselung (AES-256), Zugriffskontrolle (Public-Key-Auth), Protokollierung. Weitere Maßnahmen: Firewall-Segmentierung, regelmäßige Schlüsselrotation, Audit-Logging.'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/local-llms/vpn-for-local-llm-users?lang=de',
        inLanguage: 'de',
        name: 'VPN-Setup-Optionen für lokalen LLM Remote-Zugriff',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard: 5-10ms Latenz, 30 Min. Setup, 4.000 LOC (überprüfbar), Public-Key-Authentifizierung. Empfohlen.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN: 15ms Latenz, 2-Stunden-Setup, 400K+ LOC (komplex), zertifikatbasiert. Fallback-Option.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel: Einfachstes Setup, keine öffentliche IP-Exposition, integrierter DDoS-Schutz, aber Vendor Lock-in.' },
        ],
      },
    },
  };
