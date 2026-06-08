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
      seoTitle: 'VPN für lokale LLM-Nutzer 2026: Datenschutz & Download',
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
            '[Lokales LLM-Setup für Teams](/de/local-llms/local-llm-setup-for-teams)',
            '[Privates lokales LLM für sensible Daten](/de/local-llms/private-local-llm-sensitive-data)',
            '[Bester lokaler LLM-Stack für Entwickler](/de/local-llms/local-llm-developer-stack)',
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
        url: 'https://www.promptquorum.com/de/local-llms/vpn-for-local-llm-users',
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
        url: 'https://www.promptquorum.com/de/local-llms/vpn-for-local-llm-users',
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
        url: 'https://www.promptquorum.com/de/local-llms/vpn-for-local-llm-users',
        inLanguage: 'de',
        name: 'VPN-Setup-Optionen für lokalen LLM Remote-Zugriff',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard: 5-10ms Latenz, 30 Min. Setup, 4.000 LOC (überprüfbar), Public-Key-Authentifizierung. Empfohlen.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN: 15ms Latenz, 2-Stunden-Setup, 400K+ LOC (komplex), zertifikatbasiert. Fallback-Option.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel: Einfachstes Setup, keine öffentliche IP-Exposition, integrierter DDoS-Schutz, aber Vendor Lock-in.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPN et IA locale : ce que vous devez savoir',
      seoTitle: 'VPN pour équipes Local LLM : accès à distance, sécurité, split tunneling',
      intro: '**Les membres distants peuvent accéder au serveur LLM local via un VPN d\'entreprise sans l\'exposer à Internet public.** En avril 2026, VPN + règles pare-feu remplacent l\'abonnement à l\'API cloud pour les équipes distribuées. Ce guide couvre la configuration, l\'impact sur les performances et les considérations de sécurité.',
      metaDescription: 'VPN pour accès serveur LLM local : WireGuard, setup OpenVPN. Accès équipe distante, sécurité. Guide split tunneling.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Les membres distants peuvent accéder au serveur LLM local via un VPN d\'entreprise sans l\'exposer à Internet public. En avril 2026, VPN + règles pare-feu remplacent l\'abonnement à l\'API cloud pour les équipes distribuées.**',
      audience: 'Développeurs familiers avec Ollama ou LM Studio optimisant les flux de travail local LLM',
      readTime: '7 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'Résumé', anchor: '#tldr' },
        { label: 'Protocoles VPN : WireGuard vs OpenVPN', anchor: '#protocols' },
        { label: 'Configuration : serveur VPN sur réseau LLM', anchor: '#setup' },
        { label: 'Impact sur les performances', anchor: '#perf' },
        { label: 'Split Tunneling (accès uniquement LLM, pas Internet)', anchor: '#split' },
        { label: 'Renforcement de la sécurité', anchor: '#hardening' },
        { label: 'Dépannage accès distant', anchor: '#troubleshooting' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Protocole VPN :** WireGuard (rapide, moderne) recommandé. OpenVPN (plus lent, compatible plus large) fallback.',
            '**Configuration :** serveur VPN sur le même réseau que le serveur LLM. Utilisateurs distants se connectent via WireGuard.',
            '**Latence :** +5-10ms par connexion (généralement imperceptible). Débit = limité par la bande passante Internet.',
            '**Temps setup :** 30 min (WireGuard) à 2 heures (OpenVPN + intégration auth).',
            '**Coût :** Gratuit (open-source) ou 50-200€/an (service VPN géré si tu ne veux pas l\'auto-héberger).',
            '**Sécurité :** WireGuard a 4 000 LOC (surface d\'attaque faible). OpenVPN est 400K+ LOC (complexe).',
            '**Chiffrement :** Les deux soutiennent AES-256. Sécurité end-to-end (utilisateur distant → VPN → serveur LLM).',
            '**Pas de split tunneling = l\'entreprise contrôle tout le trafic Internet. Split tunneling = l\'utilisateur route le trafic non-LLM en dehors du VPN.**',
          ],
        },
        protocols: {
          id: 'protocols',
          title: 'Protocoles VPN : WireGuard vs OpenVPN',
          rows: [
            { Fonctionnalité: 'Fonctionnalité', WireGuard: 'WireGuard', OpenVPN: 'OpenVPN' },
            { Fonctionnalité: 'Latence', WireGuard: '~5ms surcharge', OpenVPN: '~15ms surcharge' },
            { Fonctionnalité: 'Complexité setup', WireGuard: 'Simple (30 min)', OpenVPN: 'Complexe (2 heures)' },
            { Fonctionnalité: 'Taille code', WireGuard: '4 000 LOC (auditable)', OpenVPN: '400K+ LOC (complexe)' },
            { Fonctionnalité: 'Authentification', WireGuard: 'Clé publique', OpenVPN: 'Certificats + clés' },
            { Fonctionnalité: 'Split tunneling', WireGuard: '✓ Intégré', OpenVPN: '✓ Nécessite config' },
            { Fonctionnalité: 'VPN entreprise (AD/SAML)', WireGuard: 'Limité (auth manuel)', OpenVPN: 'Mieux (support RADIUS)' },
            { Fonctionnalité: 'Recommandation', WireGuard: '**Utilise ça**', OpenVPN: 'Fallback si pas WireGuard' },
          ],
          columns: ['Fonctionnalité', 'WireGuard', 'OpenVPN'],
        },
        setup: {
          id: 'setup',
          title: 'Configuration : serveur VPN sur réseau LLM',
          numberedItems: [
            '**Installe WireGuard** sur le serveur VPN (VM Linux sur le même LAN que le serveur LLM).',
            '**Génère les clés :** clé privée (secret côté serveur), clés publiques (distribue aux clients).',
            '**Règle pare-feu :** Autorise UDP 51820 (port par défaut WireGuard) entrant depuis Internet.',
            '**Config client :** Chaque utilisateur reçoit un fichier .conf avec clé privée, endpoint serveur, IPs autorisées.',
            '**Software client :** App de bureau WireGuard (Mac, Windows, Linux) ou mobile (iOS, Android).',
            '**Test :** L\'utilisateur se connecte au VPN, ping le serveur LLM (devrait répondre), exécute l\'inférence via API.',
          ],
        },
        perf: {
          id: 'perf',
          title: 'Impact sur les performances',
          content: [
            '**Latence :** WireGuard ajoute 5-10ms. L\'inférence LLM prend déjà 10-100ms/token, donc impact <5 % perceptible.',
            '**Débit :** Limité par ta connexion Internet (ex. 100Mbps maison = 12 MB/sec = OK pour LLM).',
            '**Exemple :** Envoyer prompt 10KB + recevoir réponse 5KB = 15KB total. À 100Mbps = ~1ms latence réseau (négligeable).',
            '**Surcharge chiffrement :** Les CPUs modernes ont des instructions AES-NI. Chiffrement/déchiffrement à 500Mbps+ par cœur.',
          ],
        },
        split: {
          id: 'split',
          title: 'Split Tunneling (accès uniquement LLM, pas Internet)',
          content: [
            '**Par défaut, VPN route TOUT le trafic (Internet + LLM) via le tunnel d\'entreprise.**',
            'Cela peut être lent si les utilisateurs veulent naviguer sur Internet en utilisant LLM.',
            '**Split tunneling** = seul le trafic LLM traverse le VPN, le trafic Internet va directement.',
            'Exemple WireGuard split tunneling : `AllowedIPs = 10.0.0.0/24` (seulement réseau LLM).',
            '**Trade-off :** Internet plus rapide, mais moins de supervision de sécurité (l\'utilisateur peut exfiltrer des données en dehors du VPN).',
            '**Recommandation :** Split tunneling pour les utilisateurs (meilleure UX). Monitore avec détection de point terminal (CrowdStrike, Sentinel One).',
          ],
        },
        hardening: {
          id: 'hardening',
          title: 'Renforcement de la sécurité',
          items: [
            '**Pare-feu :** Autorise uniquement le serveur VPN à parler au serveur LLM. Rejette tout autre trafic.',
            '**Rotation clés :** Tous les 6 mois, régénère les clés client. Départ utilisateurs : révoque immédiatement leurs clés.',
            '**Logging :** Enregistre les connexions VPN (qui, quand, combien de temps). Audit trimestriel.',
            '**Mots de passe :** Le serveur VPN doit utiliser les clés SSH uniquement (pas d\'auth par mot de passe). SSH sans mot de passe via paire de clés.',
            '**Fail fermé :** Si le VPN se déconnecte, le client ne peut pas accéder à Internet (sauf si split tunneling activé).',
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Dépannage accès distant',
          content: [
            '**Impossible de se connecter :** Vérifie les règles pare-feu sur le routeur (UDP 51820 ouvert ?). Vérifie que le service WireGuard est en cours d\'exécution (`wg show`).',
            '**Inférence lente :** Vérifie la latence (`ping 10.0.0.1` à l\'intérieur du VPN, devrait être <20ms). Vérifie la bande passante Internet (`iperf3`).',
            '**Timeout API :** La connexion VPN est tombée. Vérifie les journaux (`journalctl -u wg-quick@wg0`). Redémarre WireGuard.',
            '**Un utilisateur ne peut pas accéder, les autres peuvent :** Vérifie la clé publique de l\'utilisateur dans la config serveur. Régénère la paire de clés.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Dois-je utiliser un VPN ou exposer l\'API LLM sur Internet ?', a: 'Utilise toujours un VPN. N\'expose jamais LLM directement sur Internet (DDoS, accès non autorisé). VPN + pare-feu est sécurisé.' },
            { q: 'Les utilisateurs peuvent-ils accéder à l\'API LLM sans VPN ?', a: 'Uniquement depuis le LAN (même réseau). Les utilisateurs distants DOIVENT utiliser le VPN. Ou utilise le tunnel SSH inverse (moins sécurisé).' },
            { q: 'Le chiffrement VPN ralentit-il l\'inférence ?', a: 'Négligemment (<5 % d\'impact). Les CPUs modernes peuvent chiffrer/déchiffrer à des vitesses Gbps.' },
            { q: 'Dois-je utiliser le split tunneling ?', a: 'Oui, pour une meilleure UX. Monitore avec EDR (détection point terminal) pour l\'exfiltration de données.' },
            { q: 'Que se passe-t-il si une clé VPN est compromise ?', a: 'Régénère immédiatement la clé de l\'utilisateur. L\'ancienne clé devient invalide. Pas d\'accès rétroactif.' },
            { q: 'Puis-je utiliser le VPN d\'entreprise (Okta, Azure) ?', a: 'Oui, mieux pour les grandes équipes. Mais nécessite l\'intégration (RADIUS, SAML). WireGuard est plus simple pour <20 utilisateurs.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Configuration LLM local pour équipes](/fr/local-llms/local-llm-setup-for-teams)',
            '[LLM local privé pour données sensibles](/fr/local-llms/private-local-llm-sensitive-data)',
            '[Meilleure pile LLM locale pour développeurs](/fr/local-llms/local-llm-developer-stack)',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Documentation officielle WireGuard et guide de démarrage rapide',
            'Documentation communautaire OpenVPN et OpenVPN Access Server',
            'Cadre de cybersécurité NIST : meilleures pratiques VPN',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VPN pour équipes Local LLM : accès à distance, sécurité, split tunneling',
        description: 'VPN pour accès serveur LLM local : WireGuard, setup OpenVPN. Accès équipe distante, sécurité. Guide split tunneling.',
        url: 'https://www.promptquorum.com/fr/local-llms/vpn-for-local-llm-users',
        inLanguage: 'fr',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'Configuration VPN' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': 'Accès à distance' },
          { '@type': 'Thing', 'name': 'inférence LLM locale' },
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
        inLanguage: 'fr',
        url: 'https://www.promptquorum.com/fr/local-llms/vpn-for-local-llm-users',
        mainEntity: [
          { '@type': 'Question', 'name': 'Dois-je utiliser un VPN ou exposer l\'API LLM sur Internet ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Utilise toujours un VPN. N\'expose jamais LLM directement sur Internet (DDoS, accès non autorisé). VPN + pare-feu est sécurisé.' } },
          { '@type': 'Question', 'name': 'Les utilisateurs peuvent-ils accéder à l\'API LLM sans VPN ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Uniquement depuis le LAN (même réseau). Les utilisateurs distants DOIVENT utiliser le VPN. Ou utilise le tunnel SSH inverse (moins sécurisé).' } },
          { '@type': 'Question', 'name': 'Le chiffrement VPN ralentit-il l\'inférence ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Négligemment (<5 % d\'impact). Les CPUs modernes peuvent chiffrer/déchiffrer à des vitesses Gbps.' } },
          { '@type': 'Question', 'name': 'Dois-je utiliser le split tunneling ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, pour une meilleure UX. Monitore avec EDR (détection point terminal) pour l\'exfiltration de données.' } },
          { '@type': 'Question', 'name': 'Que se passe-t-il si une clé VPN est compromise ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Régénère immédiatement la clé de l\'utilisateur. L\'ancienne clé devient invalide. Pas d\'accès rétroactif.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser le VPN d\'entreprise (Okta, Azure) ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, mieux pour les grandes équipes. Mais nécessite l\'intégration (RADIUS, SAML). WireGuard est plus simple pour <20 utilisateurs.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/fr/local-llms/vpn-for-local-llm-users',
        inLanguage: 'fr',
        name: 'Options de configuration VPN pour accès distant LLM local',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard : latence 5-10ms, setup 30 min, 4 000 LOC (auditable), authentification clé publique. Recommandé.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN : latence 15ms, setup 2 heures, 400K+ LOC (complexe), basé sur certificat. Option fallback.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel : setup le plus facile, pas d\'exposition IP publique, protection DDoS intégrée, mais vendor lock-in.' },
        ],
      },
    },
    ja: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPNとローカルAI：知っておくべきこと',
      seoTitle: 'ローカルLLMチーム向けVPN：リモートアクセス、セキュリティ、分割トンネリング',
      intro: '**リモートチームメンバーは、企業VPN経由でローカルLLMサーバーにアクセスでき、公開インターネットに公開する必要はありません。** 2026年4月時点では、VPN +ファイアウォールルールは分散チーム向けのクラウドAPIサブスクリプションに置き換わっています。このガイドではセットアップ、パフォーマンスへの影響、セキュリティ上の考慮事項をカバーしています。',
      metaDescription: 'ローカルLLMサーバーアクセス用VPN：WireGuard、OpenVPNセットアップ。リモートチームアクセス、セキュリティ。分割トンネリングガイド。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**リモートチームメンバーは、企業VPN経由でローカルLLMサーバーにアクセスでき、公開インターネットに公開する必要はありません。2026年4月時点では、VPN +ファイアウォールルールは分散チーム向けのクラウドAPIサブスクリプションに置き換わっています。**',
      audience: 'OllamaまたはLM Studioに精通し、ローカルLLMワークフローを最適化している開発者',
      readTime: '7分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'VPNプロトコル：WireGuard対OpenVPN', anchor: '#protocols' },
        { label: 'セットアップ：LLMネットワーク上のVPNサーバー', anchor: '#setup' },
        { label: 'パフォーマンスへの影響', anchor: '#perf' },
        { label: '分割トンネリング（LLMアクセスのみ、インターネットなし）', anchor: '#split' },
        { label: 'セキュリティ強化', anchor: '#hardening' },
        { label: 'リモートアクセスのトラブルシューティング', anchor: '#troubleshooting' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**VPNプロトコル：** WireGuard（速い、モダン）推奨。OpenVPN（遅い、より広いサポート）フォールバック。',
            '**セットアップ：** VPNサーバーはLLMサーバーと同じネットワーク上。リモートユーザーはWireGuard経由で接続。',
            '**レイテンシ：** +接続あたり5～10ms（通常は知覚できない）。スループット = インターネット帯域幅で制限。',
            '**セットアップ時間：** 30分（WireGuard）～2時間（OpenVPN + auth統合）。',
            '**コスト：** 無料（オープンソース）または50-200¥/年（自分でホストしたくない場合の管理VPNサービス）。',
            '**セキュリティ：** WireGuardは4,000 LOC（小さい攻撃面）。OpenVPNは400K+ LOC（複雑）。',
            '**暗号化：** 両方ともAES-256をサポート。エンドツーエンドセキュリティ（リモートユーザー→VPN→LLMサーバー）。',
            '**分割トンネリングなし=企業がすべてのインターネットトラフィックを制御。分割トンネリング=ユーザーが非LLMトラフィックをVPN外にルーティング。**',
          ],
        },
        protocols: {
          id: 'protocols',
          title: 'VPNプロトコル：WireGuard対OpenVPN',
          rows: [
            { 機能: '機能', WireGuard: 'WireGuard', OpenVPN: 'OpenVPN' },
            { 機能: 'レイテンシ', WireGuard: '~5msオーバーヘッド', OpenVPN: '~15msオーバーヘッド' },
            { 機能: 'セットアップの複雑さ', WireGuard: 'シンプル（30分）', OpenVPN: '複雑（2時間）' },
            { 機能: 'コードサイズ', WireGuard: '4,000 LOC（監査可能）', OpenVPN: '400K+ LOC（複雑）' },
            { 機能: '認証', WireGuard: '公開鍵', OpenVPN: '証明書+鍵' },
            { 機能: '分割トンネリング', WireGuard: '✓ 組み込み', OpenVPN: '✓ 構成が必要' },
            { 機能: '企業VPN（AD/SAML）', WireGuard: '限定（手動認証）', OpenVPN: 'より良い（RADIUSサポート）' },
            { 機能: '推奨', WireGuard: '**これを使用してください**', OpenVPN: 'WireGuardがない場合はフォールバック' },
          ],
          columns: ['機能', 'WireGuard', 'OpenVPN'],
        },
        setup: {
          id: 'setup',
          title: 'セットアップ：LLMネットワーク上のVPNサーバー',
          numberedItems: [
            '**WireGuardを以下にインストール** VPNサーバー（LLMサーバーと同じLAN上のLinux VM）。',
            '**鍵を生成：** 秘密鍵（サーバー側シークレット）、公開鍵（クライアントに配布）。',
            '**ファイアウォールルール：** インターネットからのUDP 51820（WireGuardデフォルトポート）受信を許可。',
            '**クライアント構成：** 各ユーザーは秘密鍵、サーバーエンドポイント、許可されたIPを備えた.confファイルを取得。',
            '**クライアントソフトウェア：** WireGuardデスクトップアプリ（Mac、Windows、Linux）またはモバイル（iOS、Android）。',
            '**テスト：** ユーザーがVPNに接続、LLMサーバーにping（応答する必要がある）、API経由で推論を実行。',
          ],
        },
        perf: {
          id: 'perf',
          title: 'パフォーマンスへの影響',
          content: [
            '**レイテンシ：** WireGuardは5～10msを追加。LLM推論は既に10～100ms/トークン、影響は<5%知覚可能。',
            '**スループット：** インターネット接続で制限（例：100Mbpsホーム=12 MB/秒= LLMに対してOK）。',
            '**例：** 10KBプロンプト送信+5KB応答受信=15KB合計。100Mbpsで=~1msネットワークレイテンシ（無視できる）。',
            '**暗号化オーバーヘッド：** モダンCPUはAES-NI命令を持つ。コアごとに500Mbps+で暗号化/復号化。',
          ],
        },
        split: {
          id: 'split',
          title: '分割トンネリング（LLMアクセスのみ、インターネットなし）',
          content: [
            '**デフォルトでは、VPNはすべてのトラフィック（インターネット+ LLM）を企業トンネル経由でルーティング。**',
            'ユーザーがLLMを使用しながらインターネットを閲覧したい場合、これは遅い場合があります。',
            '**分割トンネリング** = LLMトラフィックのみがVPNを通過、インターネットトラフィックは直接。',
            'WireGuard分割トンネリング例：`AllowedIPs = 10.0.0.0/24`（LLMネットワークのみ）。',
            '**トレードオフ：** より速いインターネット、しかし監視が少ない（ユーザーはVPN外でデータを流出させることができる）。',
            '**推奨：** ユーザー向けの分割トンネリング（より良いUX）。エンドポイント検出（CrowdStrike、Sentinel One）で監視。',
          ],
        },
        hardening: {
          id: 'hardening',
          title: 'セキュリティ強化',
          items: [
            '**ファイアウォール：** VPNサーバーのみがLLMサーバーと通信できます。他のすべてのトラフィックを削除。',
            '**鍵のローテーション：** 6か月ごとに、クライアント鍵を再生成。ユーザーオフボード：すぐに鍵を失効。',
            '**ログ：** VPN接続をログ（誰、いつ、どのくらい）。四半期ごとに監査。',
            '**パスワード：** VPNサーバーはSSH鍵のみを使用（パスワード認証なし）。鍵ペア経由でパスワードなしSSH。',
            '**フェイルクローズ：** VPNが切断された場合、クライアントはインターネットにアクセスできない（分割トンネリングが有効な場合を除く）。',
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'リモートアクセスのトラブルシューティング',
          content: [
            '**接続できない：** ルータの ファイアウォールルール（UDP 51820が開いている？）を確認。WireGuardサービスが実行されているかを確認（`wg show`）。',
            '**推論が遅い：** レイテンシを確認（VPN内で`ping 10.0.0.1`、<20msであるべき）。インターネット帯域幅を確認（`iperf3`）。',
            '**APIタイムアウト：** VPN接続が切れた。ログを確認（`journalctl -u wg-quick@wg0`）。WireGuardを再起動。',
            '**1人のユーザーがアクセスできず、他のユーザーができる：** サーバー構成のユーザーの公開鍵を確認。鍵ペアを再生成。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'VPNを使用するか、LLM APIをインターネットに公開するか？', a: '常にVPNを使用。LLMをインターネットに直接公開しないでください（DDoS、不正アクセス）。VPN +ファイアウォールは安全。' },
            { q: 'VPNなしでLLM APIにアクセスできますか？', a: 'LANからのみ（同じネットワーク）。リモートユーザーはVPNを使用する必要があります。またはリバースSSHトンネルを使用（安全性が低い）。' },
            { q: 'VPN暗号化は推論を遅くしますか？', a: '無視できるほど（<5%の影響）。モダンCPUはGbps速度で暗号化/復号化できます。' },
            { q: '分割トンネリングを使用すべき？', a: 'はい、より良いUXのために。エンドポイント検出（EDR）でデータ流出を監視。' },
            { q: 'VPN鍵が危険にさらされた場合はどうなる？', a: 'そのユーザーの鍵をすぐに再生成。古い鍵は無効。遡及的なアクセスはなし。' },
            { q: '企業VPN（Okta、Azure）を使用できますか？', a: 'はい、大規模チーム向けがいい。ただし統合が必要（RADIUS、SAML）。WireGuardは<20ユーザー向けがシンプル。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連資料',
          items: [
            '[チーム向けローカルLLMセットアップ](/ja/local-llms/local-llm-setup-for-teams)',
            '[機密データ向けプライベートローカルLLM](/ja/local-llms/private-local-llm-sensitive-data)',
            '[開発者向けベストローカルLLMスタック](/ja/local-llms/local-llm-developer-stack)',
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            'WireGuard公式ドキュメントとクイックスタートガイド',
            'OpenVPNコミュニティドキュメントおよびOpenVPN Access Server',
            'NISTサイバーセキュリティフレームワーク：VPNのベストプラクティス',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ローカルLLMチーム向けVPN：リモートアクセス、セキュリティ、分割トンネリング',
        description: 'ローカルLLMサーバーアクセス用VPN：WireGuard、OpenVPNセットアップ。リモートチームアクセス、セキュリティ。分割トンネリングガイド。',
        url: 'https://www.promptquorum.com/ja/local-llms/vpn-for-local-llm-users',
        inLanguage: 'ja',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'VPNセットアップ' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': 'リモートアクセス' },
          { '@type': 'Thing', 'name': 'ローカルLLM推論' },
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
        inLanguage: 'ja',
        url: 'https://www.promptquorum.com/ja/local-llms/vpn-for-local-llm-users',
        mainEntity: [
          { '@type': 'Question', 'name': 'VPNを使用するか、LLM APIをインターネットに公開するか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '常にVPNを使用。LLMをインターネットに直接公開しないでください（DDoS、不正アクセス）。VPN +ファイアウォールは安全。' } },
          { '@type': 'Question', 'name': 'VPNなしでLLM APIにアクセスできますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LANからのみ（同じネットワーク）。リモートユーザーはVPNを使用する必要があります。またはリバースSSHトンネルを使用（安全性が低い）。' } },
          { '@type': 'Question', 'name': 'VPN暗号化は推論を遅くしますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '無視できるほど（<5%の影響）。モダンCPUはGbps速度で暗号化/復号化できます。' } },
          { '@type': 'Question', 'name': '分割トンネリングを使用すべき？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、より良いUXのために。エンドポイント検出（EDR）でデータ流出を監視。' } },
          { '@type': 'Question', 'name': 'VPN鍵が危険にさらされた場合はどうなる？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'そのユーザーの鍵をすぐに再生成。古い鍵は無効。遡及的なアクセスはなし。' } },
          { '@type': 'Question', 'name': '企業VPN（Okta、Azure）を使用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、大規模チーム向けがいい。ただし統合が必要（RADIUS、SAML）。WireGuardは<20ユーザー向けがシンプル。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/ja/local-llms/vpn-for-local-llm-users',
        inLanguage: 'ja',
        name: 'ローカルLLMリモートアクセス用VPNセットアップオプション',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard：5～10msレイテンシ、30分セットアップ、4,000 LOC（監査可能）、公開鍵認証。推奨。' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN：15msレイテンシ、2時間セットアップ、400K+ LOC（複雑）、証明書ベース。フォールバックオプション。' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel：最も簡単なセットアップ、公開IP露出なし、組み込みDDoS保護、ただしベンダーロックイン。' },
        ],
      },
    },
    zh: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPN 和本地 AI：你需要了解的内容',
      seoTitle: 'VPN 用于本地 LLM 团队：远程访问、安全、分割隧道',
      intro: '**远程团队成员可以通过企业 VPN 访问本地 LLM 服务器，而无需将其公开到公网。** 截至 2026 年 4 月，VPN + 防火墙规则取代了云 API 订阅成为分布式团队的标准方案。本指南涵盖设置、性能影响和安全考虑。',
      metaDescription: '本地 LLM 服务器 VPN 访问：WireGuard、OpenVPN 设置。远程团队访问、安全。分割隧道指南。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**远程团队成员可以通过企业 VPN 访问本地 LLM 服务器，而无需将其公开到公网。截至 2026 年 4 月，VPN + 防火墙规则取代了云 API 订阅成为分布式团队的标准方案。**',
      audience: '熟悉 Ollama 或 LM Studio 的开发人员，优化本地 LLM 工作流程',
      readTime: '7 分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: '摘要', anchor: '#tldr' },
        { label: 'VPN 协议：WireGuard 与 OpenVPN', anchor: '#protocols' },
        { label: '设置：LLM 网络上的 VPN 服务器', anchor: '#setup' },
        { label: '性能影响', anchor: '#perf' },
        { label: '分割隧道（仅访问 LLM，不访问互联网）', anchor: '#split' },
        { label: '安全加固', anchor: '#hardening' },
        { label: '远程访问故障排除', anchor: '#troubleshooting' },
        { label: '常见问题', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**VPN 协议：** 推荐 WireGuard（快速、现代）。OpenVPN（较慢、兼容性更广）作为备选。',
            '**设置：** VPN 服务器与 LLM 服务器在同一网络上。远程用户通过 WireGuard 隧道进入。',
            '**延迟：** 每次连接增加 5-10 毫秒（通常不明显）。吞吐量 = 受互联网带宽限制。',
            '**设置时间：** 30 分钟（WireGuard）至 2 小时（OpenVPN + 身份验证集成）。',
            '**成本：** 免费（开源）或 $50-200/年（托管 VPN 服务，如果不想自托管）。',
            '**安全：** WireGuard 有 4,000 行代码（攻击面小）。OpenVPN 是 400K+ 行代码（复杂）。',
            '**加密：** 两者都支持 AES-256。端到端安全（远程用户 → VPN → LLM 服务器）。',
            '**无分割隧道 = 公司控制所有互联网流量。分割隧道 = 用户将非 LLM 流量路由到 VPN 外。**',
          ],
        },
        'protocols': {
          id: 'protocols',
          title: 'VPN 协议：WireGuard 与 OpenVPN',
          rows: [
            { '0': '特性', '1': 'WireGuard', '2': 'OpenVPN' },
            { '0': '延迟', '1': '约 5 毫秒开销', '2': '约 15 毫秒开销' },
            { '0': '设置复杂性', '1': '简单（30 分钟）', '2': '复杂（2 小时）' },
            { '0': '代码大小', '1': '4,000 行代码（可审计）', '2': '400K+ 行代码（复杂）' },
            { '0': '身份验证', '1': '公钥', '2': '证书 + 密钥' },
            { '0': '分割隧道', '1': '✓ 内置', '2': '✓ 需要配置' },
            { '0': '企业 VPN（AD/SAML）', '1': '有限（手动身份验证）', '2': '更好（RADIUS 支持）' },
            { '0': '推荐', '1': '**使用这个**', '2': '如果没有 WireGuard 时备用' },
          ],
          columns: ['特性', 'WireGuard', 'OpenVPN'],
        },
        'setup': {
          id: 'setup',
          title: '设置：LLM 网络上的 VPN 服务器',
          numberedItems: [
            '**安装 WireGuard**：在 VPN 服务器上（与 LLM 服务器在同一 LAN 的 Linux VM）。',
            '**生成密钥**：私钥（服务器端密钥）、公钥（分发给客户端）。',
            '**防火墙规则**：允许来自互联网的 UDP 51820（WireGuard 默认端口）入站。',
            '**客户端配置**：每个用户获得一个 .conf 文件，包含私钥、服务器端点、允许的 IP。',
            '**客户端软件**：WireGuard 桌面应用（Mac、Windows、Linux）或移动版（iOS、Android）。',
            '**测试**：用户连接 VPN，ping LLM 服务器（应该响应），通过 API 运行推理。',
          ],
        },
        'perf': {
          id: 'perf',
          title: '性能影响',
          content: [
            '**延迟：** WireGuard 增加 5-10 毫秒。LLM 推理已经需要 10-100 毫秒/token，所以影响 <5%。',
            '**吞吐量：** 受互联网连接限制（例如，100Mbps 家庭互联网 = 12 MB/秒 = 适合 LLM）。',
            '**示例：** 发送 10KB 提示 + 接收 5KB 响应 = 15KB 总计。在 100Mbps = 约 1 毫秒网络延迟（可忽略）。',
            '**加密开销：** 现代 CPU 具有 AES-NI 指令。加密/解密速度可达每核 500Mbps+。',
          ],
        },
        'split': {
          id: 'split',
          title: '分割隧道（仅访问 LLM，不访问互联网）',
          content: [
            '**默认情况下，VPN 路由所有流量（互联网 + LLM）通过企业隧道。**',
            '如果用户想在使用 LLM 时浏览互联网，这可能会很慢。',
            '**分割隧道** = 仅 LLM 流量通过 VPN，互联网流量直接通过。',
            'WireGuard 分割隧道示例：`AllowedIPs = 10.0.0.0/24`（仅 LLM 网络）。',
            '**权衡：** 更快的互联网，但安全监督较少（用户可在 VPN 外泄露数据）。',
            '**推荐：** 为用户启用分割隧道（更好的用户体验）。使用端点检测（CrowdStrike、Sentinel One）进行监控。',
          ],
        },
        'hardening': {
          id: 'hardening',
          title: '安全加固',
          items: [
            '**防火墙：** 仅 VPN 服务器可与 LLM 服务器通信。丢弃所有其他流量。',
            '**密钥轮换：** 每 6 个月重新生成客户端密钥。用户离职：立即撤销密钥。',
            '**日志：** 记录 VPN 连接（谁、何时、多久）。每季度审计。',
            '**密码：** VPN 服务器仅使用 SSH 密钥（无密码身份验证）。通过密钥对实现无密码 SSH。',
            '**故障关闭：** VPN 断开连接时，客户端无法访问互联网（除非启用分割隧道）。',
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: '远程访问故障排除',
          content: [
            '**无法连接：** 检查路由器防火墙规则（UDP 51820 是否打开？）。检查 WireGuard 服务是否运行（`wg show`）。',
            '**推理缓慢：** 检查延迟（VPN 内运行 `ping 10.0.0.1`，应该 <20ms）。检查互联网带宽（`iperf3`）。',
            '**API 超时：** VPN 连接断开。检查日志（`journalctl -u wg-quick@wg0`）。重启 WireGuard。',
            '**一个用户无法访问，其他用户可以：** 检查服务器配置中该用户的公钥。重新生成密钥对。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '应该使用 VPN 还是将 LLM API 公开到互联网？', a: '始终使用 VPN。切勿直接向互联网公开 LLM（DDoS、未授权访问）。VPN + 防火墙更安全。' },
            { q: '在没有 VPN 的情况下是否可以访问 LLM API？', a: '仅从 LAN（同一网络）。远程用户必须使用 VPN。或者使用反向 SSH 隧道（安全性较低）。' },
            { q: 'VPN 加密会减慢推理速度吗？', a: '可忽略不计（<5% 影响）。现代 CPU 可在 Gbps 速度下进行加密/解密。' },
            { q: '应该使用分割隧道吗？', a: '是的，用户体验更好。使用端点检测（EDR）监控数据泄露。' },
            { q: '如果 VPN 密钥泄露会怎样？', a: '立即重新生成该用户的密钥。旧密钥无效。无追溯性访问。' },
            { q: '是否可以使用企业 VPN（Okta、Azure）？', a: '可以，对大型团队更好。但需要集成（RADIUS、SAML）。WireGuard 对 <20 用户的团队更简单。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[团队本地 LLM 设置](/zh/local-llms/local-llm-setup-for-teams)',
            '[敏感数据的私有本地 LLM](/zh/local-llms/private-local-llm-sensitive-data)',
            '[开发者最佳本地 LLM 栈](/zh/local-llms/local-llm-developer-stack)',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            'WireGuard 官方文档和快速入门指南',
            'OpenVPN 社区文档和 OpenVPN Access Server',
            'NIST 网络安全框架：VPN 最佳实践',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '本地 LLM 团队 VPN：远程访问、安全、分割隧道',
        description: '本地 LLM 服务器 VPN 访问：WireGuard、OpenVPN 设置。远程团队访问、安全。分割隧道指南。',
        url: 'https://www.promptquorum.com/zh/local-llms/vpn-for-local-llm-users',
        inLanguage: 'zh',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'VPN 设置' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': '远程访问' },
          { '@type': 'Thing', 'name': '本地 LLM 推理' },
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
        inLanguage: 'zh',
        url: 'https://www.promptquorum.com/zh/local-llms/vpn-for-local-llm-users',
        mainEntity: [
          { '@type': 'Question', 'name': '应该使用 VPN 还是将 LLM API 公开到互联网？', 'acceptedAnswer': { '@type': 'Answer', 'text': '始终使用 VPN。切勿直接向互联网公开 LLM（DDoS、未授权访问）。VPN + 防火墙更安全。' } },
          { '@type': 'Question', 'name': '在没有 VPN 的情况下是否可以访问 LLM API？', 'acceptedAnswer': { '@type': 'Answer', 'text': '仅从 LAN（同一网络）。远程用户必须使用 VPN。或者使用反向 SSH 隧道（安全性较低）。' } },
          { '@type': 'Question', 'name': 'VPN 加密会减慢推理速度吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可忽略不计（<5% 影响）。现代 CPU 可在 Gbps 速度下进行加密/解密。' } },
          { '@type': 'Question', 'name': '应该使用分割隧道吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的，用户体验更好。使用端点检测（EDR）监控数据泄露。' } },
          { '@type': 'Question', 'name': '如果 VPN 密钥泄露会怎样？', 'acceptedAnswer': { '@type': 'Answer', 'text': '立即重新生成该用户的密钥。旧密钥无效。无追溯性访问。' } },
          { '@type': 'Question', 'name': '是否可以使用企业 VPN（Okta、Azure）？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以，对大型团队更好。但需要集成（RADIUS、SAML）。WireGuard 对 <20 用户的团队更简单。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/zh/local-llms/vpn-for-local-llm-users',
        inLanguage: 'zh',
        name: '本地 LLM 远程访问 VPN 设置选项',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard：5-10 毫秒延迟、30 分钟设置、4,000 行代码（可审计）、公钥身份验证。推荐。' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN：15 毫秒延迟、2 小时设置、400K+ 行代码（复杂）、基于证书。备选方案。' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel：最简单的设置、无公网 IP 暴露、内置 DDoS 保护、但存在供应商锁定。' },
        ],
      },
    },
    es: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPN y AI local: todo lo que necesitas saber',
      seoTitle: 'VPN para LLM local: acceso remoto, seguridad y split tunnel',
      intro: '**Los miembros remotos del equipo pueden acceder al servidor LLM local a través de la VPN corporativa sin exponerlo a internet público.** A partir de abril de 2026, VPN + reglas de firewall reemplazan la suscripción a la API en la nube para equipos distribuidos. Esta guía cubre la configuración, el impacto en el rendimiento y las consideraciones de seguridad.',
      metaDescription: 'VPN para acceso al servidor LLM local: configuración de WireGuard y OpenVPN. Acceso de equipo remoto, seguridad. Guía de split tunneling.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Los miembros remotos del equipo pueden acceder al servidor LLM local a través de la VPN corporativa sin exponerlo a internet público. A partir de abril de 2026, VPN + reglas de firewall reemplazan la suscripción a la API en la nube para equipos distribuidos.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo LLM locales',
      readTime: '7 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: 'Protocolos VPN: WireGuard vs OpenVPN', anchor: '#protocols' },
        { label: 'Configuración: servidor VPN en la red LLM', anchor: '#setup' },
        { label: 'Impacto en el rendimiento', anchor: '#perf' },
        { label: 'Split Tunneling (acceso solo al LLM, no a internet)', anchor: '#split' },
        { label: 'Refuerzo de seguridad', anchor: '#hardening' },
        { label: 'Solución de problemas de acceso remoto', anchor: '#troubleshooting' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Protocolo VPN:** Se recomienda WireGuard (rápido, moderno). OpenVPN (más lento, mayor compatibilidad) como alternativa.',
            '**Configuración:** Servidor VPN en la misma red que el servidor LLM. Los usuarios remotos se conectan mediante WireGuard.',
            '**Latencia:** +5-10 ms por conexión (normalmente imperceptible). Rendimiento = limitado por el ancho de banda de internet.',
            '**Tiempo de configuración:** 30 min (WireGuard) a 2 horas (OpenVPN + integración de autenticación).',
            '**Costo:** Gratis (código abierto) o $50-200/año (servicio VPN administrado si no quieres alojarlo tú mismo).',
            '**Seguridad:** WireGuard tiene 4,000 LOC (superficie de ataque baja). OpenVPN tiene 400K+ LOC (complejo).',
            '**Cifrado:** Ambos soportan AES-256. Seguridad de extremo a extremo (usuario remoto → VPN → servidor LLM).',
            '**Sin split tunneling = la empresa controla todo el tráfico de internet. Con split tunneling = el usuario enruta el tráfico no-LLM fuera de la VPN.**',
          ],
        },
        protocols: {
          id: 'protocols',
          title: 'Protocolos VPN: WireGuard vs OpenVPN',
          rows: [
            { Característica: 'Característica', WireGuard: 'WireGuard', OpenVPN: 'OpenVPN' },
            { Característica: 'Latencia', WireGuard: '~5 ms de sobrecarga', OpenVPN: '~15 ms de sobrecarga' },
            { Característica: 'Complejidad de configuración', WireGuard: 'Simple (30 min)', OpenVPN: 'Compleja (2 horas)' },
            { Característica: 'Tamaño del código', WireGuard: '4,000 LOC (auditable)', OpenVPN: '400K+ LOC (complejo)' },
            { Característica: 'Autenticación', WireGuard: 'Clave pública', OpenVPN: 'Certificados + claves' },
            { Característica: 'Split tunneling', WireGuard: '✓ Integrado', OpenVPN: '✓ Requiere configuración' },
            { Característica: 'VPN corporativa (AD/SAML)', WireGuard: 'Limitado (auth manual)', OpenVPN: 'Mejor (soporte RADIUS)' },
            { Característica: 'Recomendación', WireGuard: '**Usa este**', OpenVPN: 'Alternativa si no hay WireGuard' },
          ],
          columns: ['Característica', 'WireGuard', 'OpenVPN'],
        },
        setup: {
          id: 'setup',
          title: 'Configuración: servidor VPN en la red LLM',
          numberedItems: [
            '**Instala WireGuard** en el servidor VPN (VM Linux en la misma LAN que el servidor LLM).',
            '**Genera las claves:** Clave privada (secreto del lado del servidor), claves públicas (distribuir a los clientes).',
            '**Regla de firewall:** Permite UDP 51820 (puerto predeterminado de WireGuard) entrante desde internet.',
            '**Configuración del cliente:** Cada usuario recibe un archivo .conf con clave privada, endpoint del servidor, IPs permitidas.',
            '**Software cliente:** Aplicación de escritorio WireGuard (Mac, Windows, Linux) o móvil (iOS, Android).',
            '**Prueba:** El usuario conecta la VPN, hace ping al servidor LLM (debe responder), ejecuta inferencia mediante la API.',
          ],
        },
        perf: {
          id: 'perf',
          title: 'Impacto en el rendimiento',
          content: [
            '**Latencia:** WireGuard añade 5-10 ms. La inferencia LLM ya toma 10-100 ms/token, por lo que el impacto es <5% perceptible.',
            '**Rendimiento:** Limitado por tu conexión a internet (p. ej., 100 Mbps de internet doméstico = 12 MB/seg = adecuado para LLM).',
            '**Ejemplo:** Enviar prompt de 10 KB + recibir respuesta de 5 KB = 15 KB en total. A 100 Mbps = ~1 ms de latencia de red (insignificante).',
            '**Sobrecarga de cifrado:** Los CPU modernos tienen instrucciones AES-NI. Cifrado/descifrado a 500 Mbps+ por núcleo.',
          ],
        },
        split: {
          id: 'split',
          title: 'Split Tunneling (acceso solo al LLM, no a internet)',
          content: [
            '**Por defecto, la VPN enruta TODO el tráfico (internet + LLM) a través del túnel corporativo.**',
            'Esto puede ser lento si los usuarios quieren navegar por internet mientras usan el LLM.',
            '**Split tunneling** = solo el tráfico LLM pasa por la VPN, el tráfico de internet va directamente.',
            'Ejemplo de split tunneling en WireGuard: `AllowedIPs = 10.0.0.0/24` (solo la red LLM).',
            '**Compensación:** Internet más rápido, pero menos supervisión de seguridad (el usuario puede filtrar datos fuera de la VPN).',
            '**Recomendación:** Split tunneling para usuarios (mejor UX). Monitorea con detección de endpoints (CrowdStrike, Sentinel One).',
          ],
        },
        hardening: {
          id: 'hardening',
          title: 'Refuerzo de seguridad',
          items: [
            '**Firewall:** Permite solo que el servidor VPN se comunique con el servidor LLM. Descarta todo el demás tráfico.',
            '**Rotación de claves:** Cada 6 meses, regenera las claves del cliente. Al dar de baja a un usuario: revoca sus claves de inmediato.',
            '**Registros:** Registra las conexiones VPN (quién, cuándo, cuánto tiempo). Audita trimestralmente.',
            '**Contraseñas:** El servidor VPN debe usar solo claves SSH (sin autenticación por contraseña). SSH sin contraseña mediante par de claves.',
            '**Fail closed:** Si la VPN se desconecta, el cliente no puede acceder a internet (a menos que el split tunneling esté habilitado).',
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Solución de problemas de acceso remoto',
          content: [
            '**No puede conectarse:** Verifica las reglas del firewall en el router (¿UDP 51820 abierto?). Verifica que el servicio WireGuard esté en ejecución (`wg show`).',
            '**Inferencia lenta:** Verifica la latencia (`ping 10.0.0.1` dentro de la VPN, debe ser <20 ms). Verifica el ancho de banda de internet (`iperf3`).',
            '**Timeout de API:** La conexión VPN se cayó. Revisa los registros (`journalctl -u wg-quick@wg0`). Reinicia WireGuard.',
            '**Un usuario no puede acceder, otros sí:** Verifica la clave pública del usuario en la configuración del servidor. Regenera el par de claves.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Debo usar una VPN o exponer la API LLM a internet?', a: 'Siempre usa VPN. Nunca expongas el LLM directamente a internet (DDoS, acceso no autorizado). VPN + firewall es seguro.' },
            { q: '¿Pueden los usuarios acceder a la API LLM sin VPN?', a: 'Solo desde la LAN (misma red). Los usuarios remotos DEBEN usar VPN. O usa un túnel SSH inverso (menos seguro).' },
            { q: '¿El cifrado VPN ralentiza la inferencia?', a: 'De forma insignificante (<5% de impacto). Los CPU modernos pueden cifrar/descifrar a velocidades de Gbps.' },
            { q: '¿Debo usar split tunneling?', a: 'Sí, para mejor UX. Monitorea con EDR (detección de endpoints) para exfiltración de datos.' },
            { q: '¿Qué pasa si una clave VPN se ve comprometida?', a: 'Regenera la clave de ese usuario de inmediato. La clave antigua queda inválida. Sin acceso retroactivo.' },
            { q: '¿Puedo usar la VPN corporativa (Okta, Azure)?', a: 'Sí, mejor para equipos grandes. Pero requiere integración (RADIUS, SAML). WireGuard es más simple para <20 usuarios.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectura relacionada',
          items: [
            '[Configuración de LLM local para equipos](/es/local-llms/local-llm-setup-for-teams)',
            '[LLM local privado para datos sensibles](/es/local-llms/private-local-llm-sensitive-data)',
            '[Mejor stack de LLM local para desarrolladores](/es/local-llms/local-llm-developer-stack)',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'Documentación oficial de WireGuard y guía de inicio rápido',
            'Documentación de la comunidad OpenVPN y OpenVPN Access Server',
            'Marco de ciberseguridad NIST: mejores prácticas de VPN',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VPN para equipos con LLM local: acceso remoto, seguridad, split tunneling',
        description: 'VPN para acceso al servidor LLM local: configuración de WireGuard y OpenVPN. Acceso de equipo remoto, seguridad. Guía de split tunneling.',
        url: 'https://www.promptquorum.com/es/es/local-llms/vpn-for-local-llm-users',
        inLanguage: 'es',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'Configuración de VPN' },
          { '@type': 'Thing', 'name': 'WireGuard' },
          { '@type': 'Thing', 'name': 'Acceso remoto' },
          { '@type': 'Thing', 'name': 'inferencia LLM local' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        educationalLevel: 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        url: 'https://www.promptquorum.com/es/es/local-llms/vpn-for-local-llm-users',
        mainEntity: [
          {
            '@type': 'Question',
            'name': '¿Debo usar una VPN o exponer la API LLM a internet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Siempre usa VPN. Nunca expongas el LLM directamente a internet (DDoS, acceso no autorizado). VPN + firewall es seguro.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Pueden los usuarios acceder a la API LLM sin VPN?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Solo desde la LAN (misma red). Los usuarios remotos DEBEN usar VPN. O usa un túnel SSH inverso (menos seguro).'
            }
          },
          {
            '@type': 'Question',
            'name': '¿El cifrado VPN ralentiza la inferencia?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'De forma insignificante (<5% de impacto). Los CPU modernos pueden cifrar/descifrar a velocidades de Gbps.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Debo usar split tunneling?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, para mejor UX. Monitorea con EDR (detección de endpoints) para exfiltración de datos.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué pasa si una clave VPN se ve comprometida?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Regenera la clave de ese usuario de inmediato. La clave antigua queda inválida. Sin acceso retroactivo.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar la VPN corporativa (Okta, Azure)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, mejor para equipos grandes. Pero requiere integración (RADIUS, SAML). WireGuard es más simple para <20 usuarios.'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/es/es/local-llms/vpn-for-local-llm-users',
        inLanguage: 'es',
        name: 'Opciones de configuración VPN para acceso remoto a LLM local',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard: 5-10 ms de latencia, 30 min de configuración, 4,000 LOC (auditable), autenticación por clave pública. Recomendado.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN: 15 ms de latencia, 2 horas de configuración, 400K+ LOC (complejo), basado en certificados. Opción alternativa.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel: configuración más sencilla, sin exposición de IP pública, protección DDoS integrada, pero dependencia del proveedor.' },
        ],
      },
    },
    pt: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'VPN e IA local: tudo o que você precisa saber',
      seoTitle: 'VPN para LLM local: acesso remoto, segurança e split tunnel',
      intro: '**Membros remotos da equipe podem acessar o servidor LLM local via VPN corporativa sem expô-lo à internet pública.** A partir de abril de 2026, VPN + regras de firewall substituem a assinatura de API na nuvem para equipes distribuídas. Este guia cobre configuração, impacto no desempenho e considerações de segurança.',
      metaDescription: 'VPN para acesso ao servidor LLM local: configuração de WireGuard e OpenVPN. Acesso de equipe remota, segurança. Guia de split tunneling.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Membros remotos da equipe podem acessar o servidor LLM local via VPN corporativa sem expô-lo à internet pública. A partir de abril de 2026, VPN + regras de firewall substituem a assinatura de API na nuvem para equipes distribuídas.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho de LLMs locais',
      readTime: '7 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'VPN',
      toc: [
        { label: 'Principais conclusões', anchor: '#tldr' },
        { label: 'Protocolos VPN: WireGuard vs OpenVPN', anchor: '#protocols' },
        { label: 'Configuração: servidor VPN na rede LLM', anchor: '#setup' },
        { label: 'Impacto no desempenho', anchor: '#perf' },
        { label: 'Split Tunneling', anchor: '#split' },
        { label: 'Fortalecimento de segurança', anchor: '#hardening' },
        { label: 'Solução de problemas de acesso remoto', anchor: '#troubleshooting' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**WireGuard** é a escolha recomendada: 5-10 ms de latência, configuração em 30 min, 4.000 linhas de código (auditável).',
            '**OpenVPN** é a alternativa: 15 ms de latência, 2 horas de configuração, baseado em certificados.',
            '**Split tunneling** garante que apenas o tráfego do LLM passe pela VPN — o restante usa a internet local do usuário.',
            '**LGPD/ANPD**: a VPN mantém os dados pessoais no hardware da organização durante o trânsito. Documente o fluxo de dados para conformidade.',
            '**Alternativa sem servidor**: Cloudflare Tunnel não expõe IP público, mas cria dependência de fornecedor.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Posso acessar meu servidor LLM local remotamente sem VPN?', a: 'Sim, mas não é recomendado para uso empresarial. Você pode usar o Cloudflare Tunnel (sem exposição de IP público) ou um proxy reverso com autenticação. Para dados sensíveis, VPN + firewall é a arquitetura de menor risco.' },
            { q: 'WireGuard ou OpenVPN para acesso ao LLM local?', a: 'WireGuard para novos setups: menor latência (5-10 ms vs 15 ms), mais simples de configurar e auditar (4.000 vs 400.000+ linhas de código). OpenVPN se sua organização já tem infraestrutura OpenVPN existente.' },
            { q: 'Usar VPN afeta a velocidade de inferência do LLM?', a: 'A VPN afeta apenas a latência de rede (5-15 ms adicionais), não a velocidade de inferência do modelo. O throughput de tokens/seg é determinado pela GPU/CPU local, não pela rede. Para respostas longas, a diferença é imperceptível.' },
            { q: 'Como configurar split tunneling para o servidor LLM?', a: 'No WireGuard: adicione `AllowedIPs = 192.168.1.0/24` (substitua pelo IP do servidor LLM) em vez de `0.0.0.0/0`. Isso garante que apenas o tráfego para o servidor LLM passe pela VPN — o restante usa a conexão local do usuário.' },
            { q: 'A VPN para LLM local é compatível com LGPD?', a: 'A VPN em si não é um requisito da LGPD, mas garante que dados pessoais sejam transmitidos de forma segura entre o usuário remoto e o servidor. A LGPD e a ANPD exigem medidas técnicas adequadas para proteger dados em trânsito — a VPN com criptografia ponta-a-ponta atende a esse requisito.' },
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VPN e IA local: tudo o que você precisa saber',
        description: 'VPN para acesso ao servidor LLM local: configuração de WireGuard e OpenVPN. Acesso de equipe remota, segurança e split tunneling.',
        url: 'https://www.promptquorum.com/pt/local-llms/vpn-for-local-llm-users',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-05',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/pt/local-llms/vpn-for-local-llm-users',
        inLanguage: 'pt-BR',
        name: 'Opções de configuração VPN para acesso remoto a LLM local',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'WireGuard: 5-10 ms de latência, 30 min de configuração, 4.000 LOC (auditável), autenticação por chave pública. Recomendado.' },
          { '@type': 'ListItem', position: 2, name: 'OpenVPN: 15 ms de latência, 2 horas de configuração, 400K+ LOC (complexo), baseado em certificados. Opção alternativa.' },
          { '@type': 'ListItem', position: 3, name: 'Cloudflare Tunnel: configuração mais simples, sem exposição de IP público, proteção DDoS integrada, mas dependência do fornecedor.' },
        ],
      },
    },
  };
