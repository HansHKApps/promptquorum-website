// Auto-generated from src/lib/local-llms/content.ts
// Slug: secure-offline-local-llm-workflow
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Privacy & Business',
      title: 'How to Build a Secure Offline Local LLM Workflow',
      seoTitle: 'Secure Offline LLM Workflow: Air-Gapped Setup, Zero Network, Data Handling',
      intro: '**For maximum privacy, build an air-gapped workflow: LLM server offline (zero network), data transfer via encrypted USB.** As of April 2026, this is required for high-security environments (legal discovery, healthcare genetic data, classified research). Setup takes 1-2 days; operational overhead is moderate.',
      metaDescription: 'Secure offline local LLM workflow: Air-gapped server, encrypted USB data transfer, hardcopy output. No network risk.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**For maximum privacy, build an air-gapped workflow: LLM server offline (zero network), data transfer via encrypted USB. As of April 2026, this is required for high-security environments (legal discovery, healthcare genetic data, classified research).**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '9 min',
      educationalLevel: 'Advanced',
      primaryTerm: 'Air-Gapped Workflow',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Air-Gapped Architecture', anchor: '#architecture' },
        { label: 'Data Transfer Workflow', anchor: '#workflow' },
        { label: 'Encryption & Key Management', anchor: '#encryption' },
        { label: 'Output Handling & Hardcopy', anchor: '#output' },
        { label: 'Supply Chain Security (Hardware)', anchor: '#supply' },
        { label: 'Common Failures', anchor: '#failures' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Air-gapped = no network.** Ethernet unplugged, WiFi disabled in BIOS, cellular disabled.',
            '**Data in:** User encrypts documents on connected machine (GPG), transfers via USB to air-gapped server.',
            '**Inference:** Run LLM locally on air-gapped machine. Output encrypted, saved to USB.',
            '**Data out:** USB returned to connected machine, decrypted, reviewed, approved for release.',
            '**Hardware:** Dedicated machine (cannot be shared). Standard office PC is fine.',
            '**Setup:** 1-2 days (OS hardening, firmware patching, key generation).',
            '**Operational overhead:** ~30 min per inference job (data staging, encryption, decryption, review).',
            '**Cost:** $1,000-2,000 hardware + $0 software (open-source).',
            '**vs VPN approach:** Air-gapped is paranoid but impenetrable. VPN is convenient but network-risk remains.',
          ],
        },
        'architecture': {
          id: 'architecture',
          title: 'Air-Gapped Architecture',
          content: [
            '**Machines:**',
            '1. **Connected machine (admin):** Has internet, antivirus, firewall. For GPG key storage, document preparation.',
            '2. **Air-gapped inference server:** Zero network, USB port only. Runs LLM, processes sensitive data.',
            '3. **Optional: removable media (USB):** Encrypted, air-gapped storage for data transfer.',
            '**Network setup:**',
            '- Air-gapped server on isolated power strip (can be killed quickly if needed).',
            '- Connected machine on standard network.',
            '- No shared filesystem, no Bluetooth, no network cable.',
            '- Physical separation (different rooms recommended).',
          ],
        },
        'workflow': {
          id: 'workflow',
          title: 'Data Transfer Workflow',
          numberedItems: [
            '**User prepares:** Document to analyze saved locally on connected machine.',
            '**Encrypt:** `gpg --encrypt --recipient admin@company.com document.txt` → `document.txt.gpg`.',
            '**Transfer:** Copy `document.txt.gpg` to USB drive. Eject USB from connected machine.',
            '**Physical handoff:** USB delivered to air-gapped machine location (human courier, locked envelope).',
            '**Decrypt & ingest:** `gpg --decrypt document.txt.gpg` → plain text file. Delete .gpg file.',
            '**Inference:** Prompt: "Analyze this document: [CONTENT]". Generate response.',
            '**Encrypt output:** Encrypt response.txt with same GPG key.',
            '**Physical return:** USB returned to admin. Admin decrypts and reviews before sharing.',
            '**Disposal:** Securely wipe USB (DBAN or shred).',
          ],
        },
        'encryption': {
          id: 'encryption',
          title: 'Encryption & Key Management',
          content: [
            '**GPG (GNU Privacy Guard):** Industry standard for data encryption at rest.',
            '**Key setup:** Generate 4096-bit RSA key on air-gapped machine. Export public key to connected machine.',
            '**Storage:** Private key on air-gapped machine only (never leave the machine, even on USB).',
            '**Password:** Private key protected by strong passphrase (20+ characters, stored in password manager locked in safe).',
            '**Key rotation:** Every 1-2 years, generate new key. Old key archived but not destroyed (may need to decrypt old data).',
          ],
        },
        'output': {
          id: 'output',
          title: 'Output Handling & Hardcopy',
          content: [
            'After inference:',
            '1. **Digital output:** Encrypted file on USB, returned to admin.',
            '2. **Hardcopy option:** Print LLM response on airgapped printer (USB-connected only, no network).',
            '3. **Hardcopy security:** Document classified (e.g., "CONFIDENTIAL" header/footer). Stored in locked cabinet.',
            '4. **Destruction:** Shred hardcopy after 6 years (HIPAA) or per org policy. Digitally-signed destruction log.',
            '5. **Audit:** Every document processed logged with timestamp, user, content hash (not plaintext).',
          ],
        },
        'supply': {
          id: 'supply',
          title: 'Supply Chain Security (Hardware)',
          content: [
            '**Purchase:** Buy off-the-shelf PC (avoid pre-installed software, proprietary firmware).',
            '**BIOS hardening:** Disable USB boot, Ethernet boot, wireless. Password-protect BIOS.',
            '**OS hardening:** Minimal install (Linux, no GUI). Remove all network drivers.',
            '**Firmware updates:** Apply latest OS patches before any classified work.',
            '**Physical inspection:** Check for tamper seals on case. Verify no hidden devices (wiretaps, USB keysloggers).',
          ],
        },
        'failures': {
          id: 'failures',
          title: 'Common Failures',
          items: [
            'Connecting air-gapped machine to internet "just once" for OS update. Once connected = compromised. Use manual patching (USB).',
            'Reusing the same USB for multiple transfers without wiping. Old data may be recoverable.',
            'Printing classified output and leaving hardcopy on desk. Hardcopy must be under physical control (locked drawer).',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Can I use air-gapped for everyday work or just sensitive docs?', a: 'Just sensitive. Air-gapped is slow (manual USB transfers). Use for high-security projects only.' },
            { q: 'What if the air-gapped server breaks?', a: 'Data is encrypted on USB. Use backup air-gapped machine (same setup). Private key allows decryption on any air-gapped system.' },
            { q: 'Can I connect peripherals (printer, monitor) to air-gapped machine?', a: 'Printer: yes (USB only, no network). Monitor: yes (passive). Keyboard/mouse: risky if wireless (can be intercepted). Use wired.' },
            { q: 'How do I test that the air-gapped machine is truly offline?', a: 'Physical inspection: no Ethernet cable, no WiFi antenna, BIOS firmware shows network disabled. Behavioral: `ping 8.8.8.8` = no response.' },
            { q: 'Is air-gapped overkill for HIPAA-compliant healthcare?', a: 'Not overkill for genetic data or psychiatric records. Overkill for routine patient intake. Use VPN + encryption for routine work.' },
            { q: 'How do I handle multi-file inference (10 documents)?', a: 'Batch mode: encrypt all 10 docs, transfer via USB, process one-by-one on air-gapped, encrypt results, return USB.' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[Private Local LLM for Sensitive Data](/local-llms/private-local-llm-sensitive-data)',
            '[Local LLM Setup for Teams](/local-llms/local-llm-setup-for-teams)',
            '[Enterprise Compliance with Local LLMs](/local-llms/enterprise-compliance-local-llms)',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'GnuPG official documentation: encryption and key management',
            'NIST SP 800-111: Guidelines for Management of Information Security',
            'Air-gapped system best practices: NSA/CISA Cybersecurity Technical Reference Architecture',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Secure Offline LLM Workflow: Air-Gapped Setup, Zero Network, Data Handling',
        'description': 'Secure offline local LLM workflow: Air-gapped server, encrypted USB data transfer, hardcopy output. No network risk.',
        'url': 'https://www.promptquorum.com/local-llms/secure-offline-local-llm-workflow',
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/local-llms/secure-offline-local-llm-workflow',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Can I use air-gapped for everyday work or just sensitive docs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Just sensitive. Air-gapped is slow (manual USB transfers). Use for high-security projects only.' } },
          { '@type': 'Question', 'name': 'What if the air-gapped server breaks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Data is encrypted on USB. Use backup air-gapped machine (same setup). Private key allows decryption on any air-gapped system.' } },
          { '@type': 'Question', 'name': 'Can I connect peripherals (printer, monitor) to air-gapped machine?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Printer: yes (USB only, no network). Monitor: yes (passive). Keyboard/mouse: risky if wireless (can be intercepted). Use wired.' } },
          { '@type': 'Question', 'name': 'How do I test that the air-gapped machine is truly offline?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Physical inspection: no Ethernet cable, no WiFi antenna, BIOS firmware shows network disabled. Behavioral: ping 8.8.8.8 = no response.' } },
          { '@type': 'Question', 'name': 'Is air-gapped overkill for HIPAA-compliant healthcare?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Not overkill for genetic data or psychiatric records. Overkill for routine patient intake. Use VPN + encryption for routine work.' } },
          { '@type': 'Question', 'name': 'How do I handle multi-file inference (10 documents)?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Batch mode: encrypt all 10 docs, transfer via USB, process one-by-one on air-gapped, encrypt results, return USB.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Air-Gapped Offline Local LLM Setup Components',
        'itemListElement': [
          { '@type': 'Thing', 'name': 'Air-Gapped Inference Server', 'description': 'Dedicated machine with zero network connectivity, USB port only, running local LLM for processing sensitive data.' },
          { '@type': 'Thing', 'name': 'Encrypted Data Transfer via USB', 'description': 'GPG-encrypted document transfer between connected admin machine and air-gapped server using removable USB media.' },
          { '@type': 'Thing', 'name': 'Hardware & Supply Chain Security', 'description': 'BIOS hardening, firmware updates, physical inspection, and tamper detection for air-gapped machine protection.' },
        ],
      },
    },
  };
