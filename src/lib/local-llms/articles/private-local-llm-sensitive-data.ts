// Auto-generated from src/lib/local-llms/content.ts
// Slug: private-local-llm-sensitive-data
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Privacy & Business',
      title: 'Best Local LLM Setup for Sensitive Data',
      seoTitle: 'Secure Local LLM for Sensitive Data: Healthcare, Finance, Legal Guide',
      intro: '**Local LLMs guarantee zero data egress: medical records, financial documents, and legal briefs never leave your machine.** As of April 2026, compliance-heavy industries (healthcare HIPAA, finance PCI-DSS, legal attorney-client privilege) demand air-gapped inference. This guide covers secure setup, audit logging, and compliance verification.',
      metaDescription: 'Secure local LLM for sensitive data: HIPAA, PCI-DSS, legal compliance. Air-gapped setup, audit logs, data governance.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Local LLMs guarantee zero data egress: medical records, financial documents, and legal briefs never leave your machine. As of April 2026, compliance-heavy industries (healthcare HIPAA, finance PCI-DSS, legal attorney-client privilege) demand air-gapped inference.**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '10 min',
      educationalLevel: 'Advanced',
      primaryTerm: 'Compliance',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Why Local LLMs for Compliance', anchor: '#why' },
        { label: 'HIPAA-Compliant Setup (Healthcare)', anchor: '#hipaa' },
        { label: 'PCI-DSS Compliant Setup (Finance)', anchor: '#pci' },
        { label: 'Air-Gapped Deployment', anchor: '#airgap' },
        { label: 'Audit Logging & Data Governance', anchor: '#audit' },
        { label: 'Common Compliance Failures', anchor: '#failures' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**HIPAA (healthcare):** Patient data cannot touch cloud APIs. Local LLM on isolated network, encrypted storage, access logs.',
            '**PCI-DSS (payment cards):** Payment card data cannot be processed by LLMs at all. Use for analytics only, never full PAN (card numbers).',
            '**Legal (attorney-client privilege):** Privileged documents cannot leave attorney\'s control. Air-gapped machine, no network, hardcopy output only.',
            '**Setup:** vLLM on isolated Linux server, encrypted filesystem (LUKS), audit logging (ELK stack), no internet.',
            '**Cost:** $3,000-5,000 hardware + $2,000/year managed security updates. Free (open source) software.',
            '**vs Cloud APIs:** Cloud = $0 upfront, $50K+/year breach liability. Local = $5K upfront, $0 breach liability.',
            '**Compliance verification:** Penetration test, SOC 2 audit, third-party validation before production.',
            '**Data retention:** Local LLM logs must be purged per HIPAA (6-year retention) / GDPR (right to deletion).',
          ],
        },
        'why': {
          title: 'Why Local LLMs for Compliance?',
          content: [
            '**Cloud APIs (ChatGPT, Claude, Gemini) cannot be used with regulated data:**',
            '- Data transmission to cloud = breach of confidentiality (HIPAA, legal privilege).',
            '- No "private mode" option. Data trains models eventually.',
            '- Vendor lock-in: if vendor breaches or shuts down, you lose data + compliance.',
            'Local LLM guarantees:',
            '- Zero data egress (air-gapped = no network).',
            '- Audit trail (every access logged, cryptographically signed).',
            '- Control (you own the data, not the vendor).',
            '- Cost predictability (no per-token charges after initial setup).',
          ],
        },
        'hipaa': {
          title: 'HIPAA-Compliant Setup (Healthcare)',
          content: 'PHI (Protected Health Information) cannot be processed by untrusted systems.',
          numberedItems: [
            '**Isolate the server:** Dedicated Linux machine, no internet, encrypted USB for data transfer in/out.',
            '**Encrypt storage:** LUKS full-disk encryption, passphrase-protected.',
            '**vLLM on private network:** No external connections. Access via VPN (staff only) or secure terminal.',
            '**Audit logging:** Every LLM query logged with: timestamp, user ID, document hash (not plaintext), response length.',
            '**Access control:** Role-based (doctor vs. admin vs. researcher). MFA for login.',
            '**Retention policy:** Delete inference logs after 6 years (HIPAA requirement). Automated deletion scripts.',
            '**Business Associate Agreement (BAA):** Model provider must sign BAA (open-source models: Llama, Mistral all covered).',
            '**Annual penetration test:** Third-party security audit to verify no data leaks.',
          ],
        },
        'pci': {
          title: 'PCI-DSS Compliant Setup (Finance)',
          content: 'Payment card data (PAN = Primary Account Number) cannot be processed by LLMs in plaintext.',
          numberedItems: [
            '**Never input card numbers into LLM.** Not allowed. Use tokenized representations (e.g., last-4-digits only).',
            '**Encrypt at rest & in transit:** AES-256 encrypted files, TLS 1.3 for network.',
            '**Network segmentation:** LLM server on isolated VLAN, no access to internet.',
            '**Hardware security module (HSM):** Store encryption keys in tamper-evident device (Thales, Yubico).',
            '**Logging & monitoring:** Real-time alerts on file access, login attempts, data exfiltration.',
            '**Quarterly compliance scan:** Automated PCI-DSS scanning (Qualys, Rapid7).',
            '**Vendor certification:** Model providers (Ollama, vLLM) must document PCI-DSS alignment (open-source: pre-screened).',
          ],
        },
        'airgap': {
          title: 'Air-Gapped Deployment',
          content: 'Most secure option: machine has zero network connection.',
          numberedItems: [
            '**Physical isolation:** Server in locked room, no Ethernet cable, WiFi disabled in BIOS.',
            '**Model loading:** Pre-download models on connected machine, transfer via encrypted USB.',
            '**Data transfer in:** Users transfer documents via encrypted USB (GPG-encrypted files).',
            '**Inference:** Run LLM locally, output saved to USB.',
            '**Data transfer out:** Encrypted USB returned, decrypted on separate machine.',
            '**Trade-off:** Latency (manual USB sneakernet) vs. absolute security (zero network risk).',
            '**Use case:** Legal discovery, healthcare image analysis, financial model training (batch processing OK).',
          ],
        },
        'audit': {
          title: 'Audit Logging & Data Governance',
          content: [
            '**What to log:** Every LLM query (timestamp, user, prompt hash, response length), file access, login/logout.',
            '**Where to store:** Encrypted syslog server, separate from application server.',
            '**Tamper-evidence:** Cryptographic signatures on logs (no deletion without breaking chain of trust).',
            '**Tools:** ELK Stack (Elasticsearch/Logstash/Kibana) for aggregation; Splunk for enterprise.',
            '**Retention:** HIPAA = 6 years, GDPR = right to deletion (need process to anonymize), PCI-DSS = 1 year.',
            '**Compliance verification:** Monthly log review, quarterly data lineage audit, annual third-party assessment.',
          ],
        },
        'failures': {
          title: 'Common Compliance Failures',
          items: [
            'Using cloud ChatGPT with healthcare data. Immediate HIPAA violation, $10K-$50K penalties.',
            'Air-gapped server with unlocked door. Physical security = zero if anyone can walk in.',
            'Logs stored on same server as data. Breach of logs = breach of audit trail. Separate systems required.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Can I use cloud LLMs with compliance data if I hash PII?', a: 'No. Hashed data is still regulated. Cloud = violation. Use local LLM only.' },
            { q: 'Do I need a BAA with Llama or Mistral models?', a: 'Technically no (open-source, no vendor). But document your compliance internally. BAA template available online.' },
            { q: 'Is air-gapped overkill for HIPAA?', a: 'Not overkill. If data is highly sensitive (genetics, psychiatric), air-gapped is best practice.' },
            { q: 'How do I handle employee termination securely?', a: 'Disable VPN access immediately. Audit all queries by that user in past 6 months. Verify no data exported.' },
            { q: 'Can I use local LLMs for legal discovery?', a: 'Yes. Air-gapped + attorney supervision + attorney-client privilege maintained (no third-party access).' },
            { q: 'What if there\'s a breach of the local server?', a: 'Encrypted-at-rest = limited damage. Audit logs reveal what was accessed. Notify affected parties within 30 days (HIPAA/GDPR).' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[Local LLM Setup for Teams](/local-llms/local-llm-setup-for-teams)',
            '[Secure Offline Local LLM Workflow](/local-llms/secure-offline-local-llm-workflow)',
            '[Why Enterprises Use Local LLMs](/local-llms/why-enterprises-use-local-llms)',
            '[Enterprise Compliance with Local LLMs](/local-llms/enterprise-compliance-local-llms)',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'HIPAA Privacy Rule: 45 CFR 164 (US Department of Health & Human Services)',
            'PCI Data Security Standard v4.0 (PCI Security Standards Council)',
            'GDPR Article 32: Security of Processing (EU regulation)',
          ],
        },
      },
    },
    fr: {
      theme: 'Modèles par cas d\'utilisation',
      title: 'Q4 vs Q5 vs Q8 : Quel niveau de quantification utiliser ?',
      seoTitle: 'Q4 vs Q5 vs Q8: Meilleure quantification LLM pour vitesse, RAM et qualité (2026)',
      intro: '**Q4 (4-bit) est le bon compromis : 87 % d\'économies VRAM avec une perte de qualité imperceptible.** À partir d\'avril 2026, Q5 est inutile (seulement 5 % de meilleure qualité, même coût VRAM que Q4), et Q8 est pour les perfectionnistes avec excès de VRAM. FP32 (précision complète) n\'est jamais nécessaire pour l\'inférence sur matériel grand public.',
      metaDescription: 'Comparaison complète quantification GGUF : Q2, Q3, Q4, Q5, Q6, Q8. Comprendre les compromis en précision, latence et mémoire pour les LLM locaux optimaux.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Q4 (4-bit) est le bon compromis : 87 % d\'économies VRAM avec une perte de qualité imperceptible. À partir d\'avril 2026, Q5 est inutile (seulement 5 % de meilleure qualité, même coût VRAM que Q4), et Q8 est pour les perfectionnistes avec excès de VRAM.**',
      audience: 'Développeurs optimisant les workflows LLM locaux avec Ollama ou LM Studio',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Quantification',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Q4 vs Q5 vs Q8 : Quel niveau de quantification utiliser ?',
        description: 'Comparaison complète quantification GGUF : Q2, Q3, Q4, Q5, Q6, Q8. Comprendre les compromis en précision, latence et mémoire pour les LLM locaux optimaux.',
        datePublished: '2026-04-05',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/quantization-levels-comparison?lang=fr',
        inLanguage: 'fr',
        proficiencyLevel: 'Intermediate',
        author: { '@type': 'Person', 'name': 'Hans Kuepper' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'Quantification LLM' },
          { '@type': 'Thing', 'name': 'Optimisation VRAM' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Format GGUF' },
        ],
        speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      gammaEmbedUrl: '/presentations/quantization-levels-comparison-static.html',
      gammaDescription: 'La présentation ci-dessous couvre : pourquoi la quantification LLM compresse les modèles (réduction de la précision de 16-bit à Q4/Q8), économies VRAM sur les niveaux Q2–Q8 (70 GB pour Q4 vs 280 GB pour FP32), benchmarks de perte de qualité (Q4 conserve 99 % de précision, perte de 1,2 %), et quand utiliser chaque niveau selon le matériel (8 GB → Q3/Q4, 16 GB → Q4_K_M, 32 GB+ → Q5/Q8). Téléchargez le PDF comme fiche de référence des niveaux de quantification.',
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Qu\'est-ce que la quantification LLM ?', acceptedAnswer: { '@type': 'Answer', text: 'La quantification comprime un modèle en réduisant la précision numérique, abaissant l\'utilisation mémoire et augmentant la vitesse.' } },
          { '@type': 'Question', name: 'Quel est le meilleur niveau de quantification ?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M est le meilleur défaut pour la plupart des utilisateurs, équilibrant performance et qualité.' } },
          { '@type': 'Question', name: 'La quantification réduit-elle la précision ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais Q4–Q5 conservent la plupart de la qualité du modèle tout en réduisant considérablement la mémoire.' } },
          { '@type': 'Question', name: 'Q8 en vaut-il la peine ?', acceptedAnswer: { '@type': 'Answer', text: 'Seulement si vous avez besoin de précision maximale et suffisamment de RAM. La plupart des utilisateurs ne bénéficient pas de Q8.' } },
          { '@type': 'Question', name: 'Dois-je utiliser Q4 ou Q8 pour la génération de code ?', acceptedAnswer: { '@type': 'Answer', text: 'Q4. La vitesse est identique, la différence de qualité est 1 %, imperceptible pour la génération de code.' } },
          { '@type': 'Question', name: 'Puis-je utiliser Q3 si je manque de VRAM ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Une perte de qualité de 3 % est acceptable pour le chat/écriture créative. Inacceptable pour le raisonnement/maths.' } },
          { '@type': 'Question', name: 'Y a-t-il Q6 ou Q7 ?', acceptedAnswer: { '@type': 'Answer', text: 'Aucun standard. Certains projets implémentent des niveaux personnalisés, mais Q4/Q5/Q8 sont le standard industriel.' } },
          { '@type': 'Question', name: 'Quelle quantification est la plus rapide ?', acceptedAnswer: { '@type': 'Answer', text: 'Toutes identiques (limité par mémoire). Q2 est légèrement plus rapide du fait de moins de transfert mémoire, mais différence <5 %.' } },
          { '@type': 'Question', name: 'Puis-je dequantifier Q4 en FP32 ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, données perdues. Interpolation Q4 → FP32 ne restaure pas l\'original. Quantification est unidirectionnelle.' } },
          { '@type': 'Question', name: 'Dois-je quantifier mon modèle fine-tuné ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, après l\'entraînement. Quantifiez les poids entraînés en Q4 pour le déploiement.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Niveaux de quantification LLM : Comparaison Q4 vs Q5 vs Q8',
        description: 'Comparaison des niveaux de quantification LLM par utilisation VRAM, perte de qualité, vitesse et cas d\'usage recommandés.',
        inLanguage: 'fr',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'FP32 (précision 32-bit complète)', description: '280 GB VRAM pour Llama 3 70B. Qualité baseline. Vitesse identique. Jamais pratique pour matériel grand public.' },
          { '@type': 'ListItem', position: 2, name: 'Q8 (quantification 8-bit)', description: '140 GB VRAM pour Llama 3 70B. Perte de qualité -0,05 % vs FP32. Vitesse identique. Pour 32 GB+ VRAM avec tâches critiques en précision.' },
          { '@type': 'ListItem', position: 3, name: 'Q5 (quantification 5-bit)', description: '88 GB VRAM pour Llama 3 70B. Perte de qualité -0,5 %. Zone morte : Q4 + modèle légèrement plus grand donne meilleurs résultats à même VRAM.' },
          { '@type': 'ListItem', position: 4, name: 'Q4 (quantification 4-bit)', description: '70 GB VRAM pour Llama 3 70B. Perte de qualité -1,2 % sur MMLU. Standard industriel. Tient sur RTX 4090. Défaut recommandé pour tous cas d\'usage.' },
          { '@type': 'ListItem', position: 5, name: 'Q3 (quantification 3-bit)', description: '53 GB VRAM pour Llama 3 70B. Perte de qualité -3,7 %. À utiliser uniquement comme solution budgétaire quand Q4 cause des erreurs mémoire.' },
          { '@type': 'ListItem', position: 6, name: 'Q2 (quantification 2-bit)', description: '35 GB VRAM pour Llama 3 70B. Perte de qualité -10 %. Dernier recours. Dégradation visible sur la plupart des tâches.' },
        ],
      },
      toc: [
        { label: 'Qu\'est-ce que la quantification LLM ?', anchor: '#featured-snippet' },
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Niveaux de quantification comparés : Q2 à Q8', anchor: '#levels' },
        { label: 'Meilleur niveau de quantification par cas d\'utilisation', anchor: '#best-choice' },
        { label: 'Comment la quantification affecte VRAM et vitesse ?', anchor: '#vram' },
        { label: 'Perte de qualité par niveau : Résultats benchmark MMLU', anchor: '#quality' },
        { label: 'Quand utiliser chaque niveau ?', anchor: '#when' },
        { label: 'Pourquoi Q4 est-il le standard industriel ?', anchor: '#q4' },
        { label: 'Idées reçues courantes', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        definition: {
          id: 'featured-snippet',
          title: 'Qu\'est-ce que la quantification LLM ?',
          content: 'La quantification LLM réduit la taille du modèle en comprimant les poids de 16-bit vers des formats de précision inférieure comme Q4 ou Q8.',
          items: [
            'Q2–Q3 → plus rapide, qualité la plus basse',
            'Q4 → meilleur équilibre (recommandé)',
            'Q5–Q6 → qualité plus élevée, plus de RAM',
            'Q8 → précision quasi-complète, plus lent',
          ],
          note: 'Pour la plupart des utilisateurs : Q4_K_M est le meilleur défaut.',
        },
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Q4 (4-bit) :** 87,5 % d\'économies VRAM, ~1 % perte de qualité. À utiliser pour tout.',
            '**Q5 (5-bit) :** 84 % d\'économies VRAM, ~0,5 % perte de qualité. Jamais nécessaire ; Q4 + Q8 encadrent Q5.',
            '**Q8 (8-bit) :** 50 % d\'économies VRAM, <0,1 % perte de qualité. Pour perfectionnistes avec excès de VRAM.',
            '**FP32 (32-bit) :** Précision complète, perte 0 %, économies 0 %. Impratique ; ignorez-le.',
            '**Vitesse :** Tous les niveaux tournent à jetons/sec identiques (limité par mémoire, non calcul).',
            '**Utilisation VRAM (modèle 70B Llama) :** FP32=280 GB, Q8=140 GB, Q5=88 GB, Q4=70 GB.',
            '**Recommandation :** Utilisez Q4 pour 7B–70B. Utilisez Q8 seulement si 32 GB+ VRAM et besoin de qualité sans défaut.',
            '**Personne n\'utilise Q5 parce que Q4 + légère augmentation = meilleur que Q5 + même matériel.**',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Faits rapides',
          items: [
            '**Économies VRAM Q4 :** 87,5 % vs FP32 (70 GB pour Llama 3 70B)',
            '**Perte qualité Q4 :** <1,2 % sur benchmark MMLU',
            '**Économies VRAM Q8 :** 50 % vs FP32 (140 GB pour Llama 3 70B)',
            '**Différence vitesse :** 0 % — tous les niveaux tournent à jetons/sec identiques',
            '**Verdict Q5 :** Zone morte — Q4 + modèle plus grand = meilleur résultat à même VRAM',
          ],
        },
        'levels': {
          title: 'Niveaux de quantification comparés : Q2 à Q8',
          rows: [
            { 'Quantification': 'Q2', 'Utilisation RAM': 'Très basse', 'Vitesse': 'Très rapide', 'Qualité': 'Mauvaise', 'Meilleur pour': 'Expériences' },
            { 'Quantification': 'Q3', 'Utilisation RAM': 'Basse', 'Vitesse': 'Rapide', 'Qualité': 'Basse', 'Meilleur pour': 'Petits appareils' },
            { 'Quantification': 'Q4', 'Utilisation RAM': 'Moyenne', 'Vitesse': 'Rapide', 'Qualité': 'Bonne', 'Meilleur pour': 'La plupart des utilisateurs' },
            { 'Quantification': 'Q5', 'Utilisation RAM': 'Moyenne+', 'Vitesse': 'Moyenne', 'Qualité': 'Très bonne', 'Meilleur pour': 'Codage' },
            { 'Quantification': 'Q6', 'Utilisation RAM': 'Élevée', 'Vitesse': 'Plus lent', 'Qualité': 'Excellent', 'Meilleur pour': 'Focus précision' },
            { 'Quantification': 'Q8', 'Utilisation RAM': 'Très élevée', 'Vitesse': 'Lent', 'Qualité': 'Proche FP16', 'Meilleur pour': 'Benchmarking' },
          ],
          columns: ['Quantification', 'Utilisation RAM', 'Vitesse', 'Qualité', 'Meilleur pour'],
          image: '/images/quantization-levels-comparison-vram-savings-fr.svg',
          imageCaption: 'Économies VRAM par niveau de quantification : FP32 = 280 GB, Q8 = 140 GB (économies 50 %), Q4 = 70 GB (économies 75 %), Q3 = 53 GB (économies 81 %). Q4 est le bon compromis pour la plupart des utilisateurs.',
        },
        'choices': {
          id: 'best-choice',
          title: 'Meilleur niveau de quantification par cas d\'utilisation',
          items: [
            '**8 GB RAM :** Q3 ou Q4 (modèles 7B uniquement)',
            '**16 GB RAM :** Q4_K_M (recommandé pour la plupart des ordinateurs portables)',
            '**32 GB RAM :** Q5, Q6 ou Q8 (modèles plus grands, qualité supérieure)',
            '**Précision maximale :** Q8 (quand VRAM n\'est pas une contrainte)',
            '**Conformité données :** L\'inférence locale (Q4 sur serveur privé) satisfait les recommandations de la CNIL pour les données professionnelles sensibles (données financières, médicales, légales) — zéro transfert cloud, contrôle complet des données.',
          ],
          image: '/images/quantization-levels-comparison-hardware-guide-fr.svg',
          imageCaption: 'Guide sélection matériel : 8 GB RAM → Q3/Q4 (modèles 7B), 16 GB → Q4_K_M (recommandé), 32 GB+ → Q5/Q6/Q8 (modèles plus grands, qualité supérieure), 64 GB+ → Q8 ou FP32 (recherche/médical).',
        },
        'vram': {
          title: 'Comment la quantification affecte VRAM et vitesse ?',
          content: [
            '**Calcul VRAM :** Taille modèle (GB) × facteur quantification.',
            'Llama 3 70B :',
            '- FP32 : 70B × 4 bytes = 280 GB (impratique)',
            '- Q8 : 70B × 1 byte = 140 GB (nécessite 140 GB VRAM)',
            '- Q4 : 70B × 0,5 bytes = 70 GB (tient sur RTX 4090 + overhead)',
            '**Vitesse :** Tous les niveaux sont limités par la mémoire (attente DRAM), non par calcul.',
            'Jetons/sec identiques à travers Q2-FP32 sur même matériel.',
            '**Bande passante VRAM, pas calcul, est le goulot.** Quantification économise VRAM, pas temps.',
          ],
        },
        'quality': {
          title: 'Perte de qualité par niveau : Résultats benchmark MMLU',
          content: 'Mesuré sur benchmark MMLU (connaissance générale, 57 tâches) :',
          items: [
            'Baseline Llama 3 70B FP32 : 85,2 % de précision.',
            'Llama 3 70B Q8 : 85,1 % de précision (perte -0,1 %).',
            'Llama 3 70B Q5 : 84,7 % de précision (perte -0,5 %).',
            'Llama 3 70B Q4 : 84,0 % de précision (perte -1,2 %).',
            'Llama 3 70B Q3 : 81,5 % de précision (perte -3,7 %).',
            'Impact réel : Q4 vs Q8 = 1–2 % moins de réponses correctes par 100 questions.',
            'Pour chat/écriture : différence imperceptible. Pour STEM : Q8 plus sûr.',
          ],
          image: '/images/quantization-levels-comparison-quality-loss-fr.svg',
          imageCaption: 'Benchmarks perte de qualité : Q8 = perte -0,1 %, Q5 = perte -0,5 %, Q4 = perte -1,2 %, Q3 = perte -3,7 % sur MMLU. Perte qualité Q4 imperceptible pour la plupart des tâches.',
        },
        'when': {
          title: 'Quand utiliser chaque niveau ?',
          content: [
            '**Q4 :** Défaut. À utiliser pour tous les modèles. Bon compromis compression + qualité.',
            '**Q5 :** Jamais. Gaspilleur. Si vous avez besoin de qualité Q5, utilisez Q4 avec modèle légèrement plus grand. Si vous avez VRAM Q5 (88 GB), utilisez Q4 sur 70B à la place.',
            '**Q8 :** Seulement si vous avez 32 GB+ VRAM ET modèle <70B ET besoin de précision parfaite (recherche, usage médical).',
            '**Q3 :** Restriction budgétaire. 3 % perte de qualité acceptable ? Utilisez Q3. Sinon, améliorez GPU ou utilisez modèle plus petit.',
            '**Q2 :** Désespoir. Perte de qualité trop élevée pour la plupart. À utiliser seulement si OOM sur Q3.',
          ],
        },
        'q4': {
          title: 'Pourquoi Q4 est-il le standard industriel ?',
          content: [
            '**Q4 est optimal parce que :**',
            '1. Économies VRAM 87,5 % (meilleur ratio).',
            '2. Perte qualité <1,2 % (imperceptible aux utilisateurs).',
            '3. Zéro pénalité vitesse (limité par mémoire, non calcul).',
            '4. Tient matériel grand public (70B sur RTX 4090 24GB).',
            '5. Standard industriel (HuggingFace, Ollama défaut Q4).',
            'Chaque modèle sorti après 2024 inclut une variante Q4 pour usage production.',
            'Si un modèle a seulement FP32/Q8/Q5, le projet n\'est pas production-ready.',
          ],
        },
        'mistakes': {
          title: 'Idées reçues courantes',
          items: [
            'Q4 semble "basse qualité" parce que 4-bit semble petit. Faux. Perte 1 % imperceptible.',
            'Quantification ralentit l\'inférence. Faux. Vitesse identique (limité par mémoire, non calcul).',
            'Je dois utiliser Q8 pour être safe. Faux. Q4 prouvé, sûr, standard. Q8 gaspilleur.',
            'J\'ai besoin de FP32 pour la précision. Faux. Jamais vrai. Q8 suffisant même pour recherche.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Qu\'est-ce que la quantification LLM ?', a: 'La quantification comprime un modèle en réduisant la précision numérique, abaissant l\'utilisation mémoire et augmentant la vitesse.' },
            { q: 'Quel est le meilleur niveau de quantification ?', a: 'Q4_K_M est le meilleur défaut pour la plupart des utilisateurs, équilibrant performance et qualité.' },
            { q: 'La quantification réduit-elle la précision ?', a: 'Oui, mais Q4–Q5 conservent la plupart de la qualité du modèle tout en réduisant considérablement la mémoire.' },
            { q: 'Q8 en vaut-il la peine ?', a: 'Seulement si vous avez besoin de précision maximale et suffisamment de RAM. La plupart des utilisateurs ne bénéficient pas de Q8.' },
            { q: 'Dois-je utiliser Q4 ou Q8 pour la génération de code ?', a: 'Q4. La vitesse est identique, la différence de qualité est 1 %, imperceptible pour la génération de code.' },
            { q: 'Puis-je utiliser Q3 si je manque de VRAM ?', a: 'Oui. Une perte de qualité de 3 % est acceptable pour le chat/écriture créative. Inacceptable pour le raisonnement/maths.' },
            { q: 'Y a-t-il Q6 ou Q7 ?', a: 'Aucun standard. Certains projets implémentent des niveaux personnalisés, mais Q4/Q5/Q8 sont le standard industriel.' },
            { q: 'Quelle quantification est la plus rapide ?', a: 'Toutes identiques (limité par mémoire). Q2 est légèrement plus rapide du fait de moins de transfert mémoire, mais différence <5 %.' },
            { q: 'Puis-je dequantifier Q4 en FP32 ?', a: 'Non, données perdues. Interpolation Q4 → FP32 ne restaure pas l\'original. Quantification est unidirectionnelle.' },
            { q: 'Dois-je quantifier mon modèle fine-tuné ?', a: 'Oui, après l\'entraînement. Quantifiez les poids entraînés en Q4 pour le déploiement.' },
          ],
        },
        'relatedReading': {
          title: 'Lectures connexes',
          items: [
            '[Quantification LLM expliquée](/local-llms/llm-quantization-explained?lang=fr)',
            '[Combien de VRAM vous faut-il ?](/local-llms/how-much-vram-local-llm?lang=fr)',
            '[Meilleures GPU budget pour LLM locaux](/local-llms/best-budget-gpus-local-llm?lang=fr)',
            '[LLM locaux les plus rapides pour PC bas de gamme](/local-llms/fastest-local-llms-low-end-pcs?lang=fr)',
            '[Guide matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) — Sélection GPU, niveaux VRAM, benchmarks inférence CPU',
            '[Meilleurs LLM locaux pour codage 2026](/local-llms/best-local-llms-for-coding?lang=fr) — Benchmarks spécifiques codage et comparaison support FIM',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            '[Benchmark MMLU — OpenAI Evals](https://github.com/openai/evals) — Mesure précision à travers niveaux quantification Q4/Q8/FP32 sur 57 tâches raisonnement',
            '[Fiche modèle Llama 3 — Meta AI](https://huggingface.co/meta-llama/Meta-Llama-3-70B) — Spécifications précision officielle à travers niveaux quantification',
            '[Vers réseaux de neurones conscients de quantification (arXiv 2024)](https://arxiv.org/abs/2401.01781) — Recherche sur limites erreur quantification et méthodologie K-quant',
          ],
        },
      },
    },
    ja: {
      theme: 'ユースケース別のモデル',
      title: 'Q4 vs Q5 vs Q8：最適なLLM量化レベルの選択方法',
      seoTitle: 'Q4 vs Q5 vs Q8：速度、RAM、品質のための最良のLLM量化（2026年）',
      intro: '**Q4（4-bit）は最適：87 % のVRAM削減と知覚不可能な品質低下。** 2026年4月時点、Q5は不要（品質向上わずか5 %、VRAM コストはQ4と同じ）で、Q8はVRAM過剰な完璧主義者向けです。FP32（完全精度）はコンシューマハードウェアでの推論には不要。',
      metaDescription: 'GGUF量化の完全比較：Q2、Q3、Q4、Q5、Q6、Q8。精度、レイテンシ、メモリのトレードオフを学び、最適なローカルLLMパフォーマンスを実現します。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Q4（4-bit）は最適：87 % のVRAM削減と知覚不可能な品質低下。2026年4月時点、Q5は不要（品質向上わずか5 %、VRAM コストはQ4と同じ）で、Q8はVRAM過剰な完璧主義者向けです。**',
      audience: 'Ollama または LM Studio でローカルLLMワークフロー最適化している開発者',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: '量化',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Q4 vs Q5 vs Q8：最適なLLM量化レベルの選択方法',
        description: 'GGUF量化の完全比較：Q2、Q3、Q4、Q5、Q6、Q8。精度、レイテンシ、メモリのトレードオフを学び、最適なローカルLLMパフォーマンスを実現します。',
        datePublished: '2026-04-05',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/quantization-levels-comparison?lang=ja',
        inLanguage: 'ja',
        proficiencyLevel: 'Intermediate',
        author: { '@type': 'Organization', 'name': 'PromptQuorum' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'LLM量化' },
          { '@type': 'Thing', 'name': 'VRAM最適化' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'GGUFフォーマット' },
        ],
        speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      gammaEmbedUrl: '/presentations/quantization-levels-comparison-static.html',
      gammaDescription: '下のスライドデッキをカバーします：なぜLLM量化がモデルを圧縮するのか（16-bitから Q4/Q8への精度削減）、Q2–Q8レベルのVRAM削減（Q4の70GB vs FP32の280GB）、品質低下ベンチマーク（Q4は99 %精度を保持、1.2 %低下）、ハードウェア別各レベルの使用時期（8GB → Q3/Q4、16GB → Q4_K_M、32GB+ → Q5/Q8）。PDFを量化レベルリファレンスカードとしてダウンロードしてください。',
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          { '@type': 'Question', name: 'LLM量化とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '量化は数値精度を削減してモデルを圧縮し、メモリ使用量を低下させて速度を上げます。' } },
          { '@type': 'Question', name: '最良の量化レベルは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_Mはほとんどのユーザーにとって最良のデフォルトで、パフォーマンスと品質のバランスが取れています。' } },
          { '@type': 'Question', name: '量化は精度を低下させますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、ただしQ4–Q5は大幅なメモリ削減を実現しながらほとんどのモデル品質を保持します。' } },
          { '@type': 'Question', name: 'Q8の価値はありますか？', acceptedAnswer: { '@type': 'Answer', text: '最大精度が必要で十分なRAMがある場合のみです。ほとんどのユーザーはQ8から利益を得ません。' } },
          { '@type': 'Question', name: 'コード生成にQ4またはQ8を使用すべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'Q4。速度は同じで品質差は1 %、コード生成では知覚不可能です。' } },
          { '@type': 'Question', name: 'VRAMが少ない場合、Q3を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。3 %の品質低下はチャット/創作文に受け入れ可能です。推論/数学には不可受け入れ。' } },
          { '@type': 'Question', name: 'Q6またはQ7はありますか？', acceptedAnswer: { '@type': 'Answer', text: '標準はありません。いくつかのプロジェクトはカスタムレベルを実装していますが、Q4/Q5/Q8が業界標準です。' } },
          { '@type': 'Question', name: 'どの量化が最速ですか？', acceptedAnswer: { '@type': 'Answer', text: '同一速度（メモリバウンド）。Q2はメモリ転送が少ないため若干高速ですが、差は<5 %です。' } },
          { '@type': 'Question', name: 'Q4をFP32に逆量化できますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、データ喪失。Q4 → FP32補間はオリジナルを復元しません。量化は一方向です。' } },
          { '@type': 'Question', name: 'ファインチューニング済みモデルを量化すべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、トレーニング後。デプロイメント用にトレーニング済み重みをQ4に量化します。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'LLM量化レベル：Q4 vs Q5 vs Q8比較',
        description: 'VRAM使用量、品質低下、速度、推奨使用例によるLLM量化レベルの比較。',
        inLanguage: 'ja',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'FP32（32-bit完全精度）', description: 'Llama 3 70B用280GB VRAM。ベースライン品質。同一速度。コンシューマハードウェアでは実用的ではありません。' },
          { '@type': 'ListItem', position: 2, name: 'Q8（8-bit量化）', description: 'Llama 3 70B用140GB VRAM。FP32比-0.05 %品質低下。同一速度。精度重視タスク用32GB+ VRAM。' },
          { '@type': 'ListItem', position: 3, name: 'Q5（5-bit量化）', description: 'Llama 3 70B用88GB VRAM。-0.5 %品質低下。デッドゾーン：Q4 +やや大きいモデル=同じVRAMでより良い結果。' },
          { '@type': 'ListItem', position: 4, name: 'Q4（4-bit量化）', description: 'Llama 3 70B用70GB VRAM。MMU-1.2 %品質低下。業界標準。RTX 4090搭載。全ユースケース推奨デフォルト。' },
          { '@type': 'ListItem', position: 5, name: 'Q3（3-bit量化）', description: 'Llama 3 70B用53GB VRAM。-3.7 %品質低下。Q4がメモリ不足エラーのときのみVRAM予算ソリューション。' },
          { '@type': 'ListItem', position: 6, name: 'Q2（2-bit量化）', description: 'Llama 3 70B用35GB VRAM。-10 %品質低下。最後の手段。ほとんどのタスクで品質低下が目立ちます。' },
        ],
      },
      toc: [
        { label: 'LLM量化とは？', anchor: '#featured-snippet' },
        { label: '重要ポイント', anchor: '#tldr' },
        { label: '量化レベル比較：Q2～Q8', anchor: '#levels' },
        { label: 'ユースケース別最良量化レベル', anchor: '#best-choice' },
        { label: '量化はVRAMと速度にどう影響するか？', anchor: '#vram' },
        { label: 'レベル別品質低下：MMUベンチマーク結果', anchor: '#quality' },
        { label: 'いつ各レベルを使用するか？', anchor: '#when' },
        { label: 'なぜQ4が業界標準か？', anchor: '#q4' },
        { label: '一般的な誤解', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        definition: {
          id: 'featured-snippet',
          title: 'LLM量化とは？',
          content: 'LLM量化は16-bitからQ4またはQ8のような低精度フォーマットへの重み圧縮でモデルサイズを削減します。',
          items: [
            'Q2–Q3 → 最速、最低品質',
            'Q4 → 最良バランス（推奨）',
            'Q5–Q6 → より高品質、より多くのRAM',
            'Q8 → ほぼ完全精度、より遅い',
          ],
          note: 'ほとんどのユーザー：Q4_K_M が最良デフォルト。',
        },
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Q4（4-bit）：** 87.5 % VRAMメモリ削減、~1 %品質低下。すべてに使用します。',
            '**Q5（5-bit）：** 84 % VRAM削減、~0.5 %品質低下。不要；Q4とQ8がQ5を囲みます。',
            '**Q8（8-bit）：** 50 % VRAM削減、<0.1 %品質低下。VRAMに余裕のある完璧主義者向け。',
            '**FP32（32-bit）：** 完全精度、0 %損失、0 %削減。実用的ではない；スキップしてください。',
            '**速度：** すべての量化が同一token/秒（メモリバウンド、計算バウンドではない）。',
            '**VRAM使用（70B Llamaモデル）：** FP32=280GB、Q8=140GB、Q5=88GB、Q4=70GB。',
            '**推奨：** 7B–70B用にQ4を使用。32GB+ VRAMで完璧な品質が必要な場合のみQ8を使用。',
            '**誰もQ5を使いません。Q4 +わずかなアップグレード = Q5 +同じハードウェアより優れています。**',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '迅速な事実',
          items: [
            '**Q4 VRAM削減：** FP32比87.5 %（Llama 3 70B用70GB）',
            '**Q4品質低下：** MMLU ベンチマーク上<1.2 %',
            '**Q8 VRAM削減：** FP32比50 %（Llama 3 70B用140GB）',
            '**速度差：** 0 % — すべての量化が同一token/秒実行',
            '**Q5評決：** デッドゾーン — Q4 +大きいモデル = 同じVRAMでより優れた結果',
          ],
        },
        'levels': {
          title: '量化レベル比較：Q2～Q8',
          rows: [
            { '量化': 'Q2', 'RAM使用': '非常に低い', '速度': '非常に高速', '品質': '貧弱', '最良': '実験' },
            { '量化': 'Q3', 'RAM使用': '低い', '速度': '高速', '品質': '低い', '最良': '小型デバイス' },
            { '量化': 'Q4', 'RAM使用': '中程度', '速度': '高速', '品質': '良好', '最良': 'ほとんどのユーザー' },
            { '量化': 'Q5', 'RAM使用': '中程度+', '速度': '中程度', '品質': '非常に良好', '最良': 'コーディング' },
            { '量化': 'Q6', 'RAM使用': '高い', '速度': 'より遅い', '品質': '優秀', '最良': '精度重視' },
            { '量化': 'Q8', 'RAM使用': '非常に高い', '速度': '遅い', '品質': 'ほぼFP16', '最良': 'ベンチマーク' },
          ],
          columns: ['量化', 'RAM使用', '速度', '品質', '最良'],
          image: '/images/quantization-levels-comparison-vram-savings-ja.svg',
          imageCaption: '量化レベル別VRAM削減：FP32 = 280GB、Q8 = 140GB（50 %削減）、Q4 = 70GB（75 %削減）、Q3 = 53GB（81 %削減）。Q4はほとんどのユーザーにとって最適なバランス。',
        },
        'choices': {
          id: 'best-choice',
          title: 'ユースケース別最良量化レベル',
          items: [
            '**8GB RAM :** Q3 または Q4（7Bモデルのみ）',
            '**16GB RAM :** Q4_K_M（ほとんどのノートパソコン推奨）',
            '**32GB RAM :** Q5、Q6 または Q8（大規模モデル、より高品質）',
            '**最大精度 :** Q8（VRAMが制約でない場合）',
            '**エンタープライズデプロイ（日本）：** MEIが策定したAIガバナンス2024ガイドラインに従い、ローカル推論はデータスチュワーシップと監査ログの要件を満たします。Q4は日本の地方自治体や金融機関でのMEI準拠デプロイメントに理想的です。',
          ],
          image: '/images/quantization-levels-comparison-hardware-guide-ja.svg',
          imageCaption: 'ハードウェア選択ガイド：8GB RAM → Q3/Q4（7Bモデル）、16GB → Q4_K_M（推奨）、32GB+ → Q5/Q6/Q8（大規模モデル、高品質）、64GB+ → Q8 または FP32（研究/医療）。',
        },
        'vram': {
          title: '量化はVRAMと速度にどう影響するか？',
          content: [
            '**VRAM計算：** モデルサイズ（GB）× 量化係数。',
            'Llama 3 70B :',
            '- FP32 : 70B × 4 bytes = 280GB（実用的ではない）',
            '- Q8 : 70B × 1 byte = 140GB（140GB VRAM必要）',
            '- Q4 : 70B × 0.5 bytes = 70GB（RTX 4090 +オーバーヘッド搭載）',
            '**速度：** すべての量化はメモリバウンド（DRAM待機）、計算バウンドではありません。',
            'Q2-FP32全体の同じハードウェアで同じtoken/秒。',
            '**VRAM帯域幅、計算ではなく、ボトルネック。** 量化はVRAMを保存、時間ではありません。',
          ],
        },
        'quality': {
          title: 'レベル別品質低下：MMUベンチマーク結果',
          content: 'MMUベンチマーク上で測定（一般知識、57タスク）：',
          items: [
            'Llama 3 70B FP32ベースライン：85.2 %精度。',
            'Llama 3 70B Q8 : 85.1 %精度（-0.1 %低下）。',
            'Llama 3 70B Q5 : 84.7 %精度（-0.5 %低下）。',
            'Llama 3 70B Q4 : 84.0 %精度（-1.2 %低下）。',
            'Llama 3 70B Q3 : 81.5 %精度（-3.7 %低下）。',
            '実世界への影響：Q4 vs Q8 = 100問中1–2問少ない正答。',
            'チャット/ライティング：知覚不可能な差。STEM問題：Q8がより安全。',
          ],
          image: '/images/quantization-levels-comparison-quality-loss-ja.svg',
          imageCaption: '品質低下ベンチマーク：Q8 = -0.1 %低下、Q5 = -0.5 %低下、Q4 = -1.2 %低下、Q3 = -3.7 %低下（MMLU上）。Q4品質低下はほとんどのタスクで知覚不可能。',
        },
        'when': {
          title: 'いつ各レベルを使用するか？',
          content: [
            '**Q4 :** デフォルト。すべてのモデルに使用。圧縮+品質の最良バランス。',
            '**Q5 :** 不要。浪費的。Q5品質が必要な場合、わずかに大きいモデルでQ4を使用。Q5のVRAM（88GB）がある場合、代わりに70BでQ4を使用。',
            '**Q8 :** 32GB+ VRAM AND モデル<70B AND 完璧な精度が必要（研究、医療用途）の場合のみ。',
            '**Q3 :** 予算圧迫。3 %品質低下許容？Q3を使用。そうでなければ GPU をアップグレードまたはより小さいモデルを使用。',
            '**Q2 :** 絶望的。ほとんどの品質低下が高すぎます。Q3でOOMの場合のみ使用。',
          ],
        },
        'q4': {
          title: 'なぜQ4が業界標準か？',
          content: [
            '**Q4が最適な理由：**',
            '1. 87.5 % VRAM削減（最良比率）。',
            '2. <1.2 %品質低下（ユーザーに知覚不可能）。',
            '3. 速度ペナルティなし（メモリバウンド、計算バウンドではない）。',
            '4. コンシューマハードウェアに対応（RTX 4090上の70B）。',
            '5. 業界標準（HuggingFace、Ollama デフォルト Q4）。',
            '2024年以降リリースされたすべてのモデルには本番使用用Q4バリアントが含まれています。',
            'モデルがFP32/Q8/Q5のみの場合、プロジェクトは本番対応ではありません。',
          ],
        },
        'mistakes': {
          title: '一般的な誤解',
          items: [
            '4-bitは小さく見えるため Q4 は「低品質」に聞こえます。偽。1 %品質低下は知覚不可能。',
            '量化は推論を遅くします。偽。速度は同一（メモリバウンド、計算バウンドではない）。',
            '安全のため Q8 を使用すべき。偽。Q4は実証済み、安全、標準。Q8は浪費的。',
            '精度のため FP32 が必要。偽。決して真実ではありません。Q8 でさえ研究に十分です。',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'LLM量化とは何ですか？', a: '量化は数値精度を削減してモデルを圧縮し、メモリ使用量を低下させて速度を上げます。' },
            { q: '最良の量化レベルは何ですか？', a: 'Q4_K_Mはほとんどのユーザーにとって最良のデフォルトで、パフォーマンスと品質のバランスが取れています。' },
            { q: '量化は精度を低下させますか？', a: 'はい、ただしQ4–Q5は大幅なメモリ削減を実現しながらほとんどのモデル品質を保持します。' },
            { q: 'Q8の価値はありますか？', a: '最大精度が必要で十分なRAMがある場合のみです。ほとんどのユーザーはQ8から利益を得ません。' },
            { q: 'コード生成にQ4またはQ8を使用すべきですか？', a: 'Q4。速度は同じで品質差は1 %、コード生成では知覚不可能です。' },
            { q: 'VRAMが少ない場合、Q3を使用できますか？', a: 'はい。3 %の品質低下はチャット/創作文に受け入れ可能です。推論/数学には不可受け入れ。' },
            { q: 'Q6またはQ7はありますか？', a: '標準はありません。いくつかのプロジェクトはカスタムレベルを実装していますが、Q4/Q5/Q8が業界標準です。' },
            { q: 'どの量化が最速ですか？', a: '同一速度（メモリバウンド）。Q2はメモリ転送が少ないため若干高速ですが、差は<5 %です。' },
            { q: 'Q4をFP32に逆量化できますか？', a: 'いいえ、データ喪失。Q4 → FP32補間はオリジナルを復元しません。量化は一方向です。' },
            { q: 'ファインチューニング済みモデルを量化すべきですか？', a: 'はい、トレーニング後。デプロイメント用にトレーニング済み重みをQ4に量化します。' },
          ],
        },
        'relatedReading': {
          title: '関連読み物',
          items: [
            '[LLM量化について詳しく](/local-llms/llm-quantization-explained?lang=ja)',
            '[ローカルLLMに必要なVRAMはいくらですか？](/local-llms/how-much-vram-local-llm?lang=ja)',
            '[ローカルLLM用最高予算GPU](/local-llms/best-budget-gpus-local-llm?lang=ja)',
            '[低エンドPC用最速ローカルLLM](/local-llms/fastest-local-llms-low-end-pcs?lang=ja)',
            '[ローカルLLMハードウェアガイド2026](/local-llms/local-llm-hardware-guide-2026?lang=ja) — GPU選択、VRAM層、CPU推論ベンチマーク',
            '[コーディング2026用最高ローカルLLM](/local-llms/best-local-llms-for-coding?lang=ja) — コーディング特有ベンチマークとFIM対応比較',
          ],
        },
        'sources': {
          title: 'ソース',
          items: [
            '[MMUベンチマーク — OpenAI Evals](https://github.com/openai/evals) — 57の推論タスク上でQ4/Q8/FP32量化を横断する精度測定',
            '[Llama 3モデルカード — Meta AI](https://huggingface.co/meta-llama/Meta-Llama-3-70B) — 量化レベル横断の公式精度仕様',
            '[量化認識ディープニューラルネットワークへ（arXiv 2024）](https://arxiv.org/abs/2401.01781) — 量化誤差限界とK-quant方法論の研究',
          ],
        },
      },
    },
    zh: {
      theme: '按用途选择模型',
      title: 'Q4 vs Q5 vs Q8：选择最佳LLM量化级别',
      seoTitle: '量化比较指南：选择最适合硬件的Q4、Q5或Q8',
      intro: '**LLM量化将模型大小减少75-84%，而精度损失仅为1-2%。** 本指南对比Q2-Q8量化级别，展示如何在VRAM使用、推理速度和模型质量之间进行权衡。适用于运行Llama 3、Mistral、Qwen等模型的开发者和部署者。',
      metaDescription: '选择最适合您硬件的LLM量化级别。Q4 vs Q5 vs Q8对比、VRAM节省、速度和质量权衡、中国部署合规性指南。',
      publishDate: '2026-01-15',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**LLM量化将模型大小减少75-84%，仅损失1-2%的精度。** 本指南对比Q2-Q8量化级别，帮助您在VRAM、速度和质量之间进行权衡。',
      audience: '运行本地LLM的开发者、AI工程师、DevOps',
      readTime: '阅读约8分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Quantization',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Q4 vs Q5 vs Q8：选择最佳LLM量化级别',
        'description': '选择最适合您硬件的LLM量化级别。Q4 vs Q5 vs Q8对比、VRAM节省、速度和质量权衡、中国部署合规性指南。',
        'url': 'https://www.promptquorum.com/local-llms/quantization-levels-comparison?lang=zh',
        'inLanguage': 'zh',
        'datePublished': '2026-01-15',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '量化' },
          { '@type': 'Thing', 'name': 'Q4_K_M' },
          { '@type': 'Thing', 'name': 'VRAM' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
          { '@type': 'Thing', 'name': 'LLM' }
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Llama 3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral 7B' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen2.5' }
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'zh',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '什么是LLM量化，为什么重要？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '量化将32位浮点权重（FP32）压缩为8位（Q8）或4位（Q4），减少模型大小75-84%。这使得在消费级GPU（8-16GB VRAM）上运行大型模型成为可能。精度损失最小（Q4损失<1.2%），速度提升（Q4比FP32快30-50%）。' }
          },
          {
            '@type': 'Question',
            'name': '8GB RAM应该用什么量化？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '8GB VRAM仅支持7B模型，建议使用Q3或Q4。示例：Mistral 7B-Q4约占4.2GB VRAM，适合聊天应用。更大的模型会导致内存不足错误。' }
          },
          {
            '@type': 'Question',
            'name': '16GB RAM最佳选择是什么？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '16GB VRAM最适合Q4_K_M量化。可以运行Llama 3 8B-Q4（~7GB VRAM），质量>99%，速度20-40 tokens/sec。这是大多数用户的最佳点。' }
          },
          {
            '@type': 'Question',
            'name': '32GB RAM应该用什么量化？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '32GB VRAM支持更大的模型和更高的量化。推荐Q5、Q6或Q8。示例：Llama 3 70B-Q5约占88GB × 0.5 = 44GB VRAM（需要分散到多个GPU），质量>99.5%。' }
          },
          {
            '@type': 'Question',
            'name': 'Q4的精度损失真的可以接受吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '在MMLU基准上，Q4损失仅为1.2%（85.2% → 84.0%）。这相当于每100个问题中少1-2个正确答案。对于聊天、代码生成、摘要等任务，这种损失几乎不可察觉。' }
          },
          {
            '@type': 'Question',
            'name': '如何选择Q4还是Q5？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '通常选择能放入您VRAM的最大模型的最低量化级别。Q4为标准：损失1.2%，节省75%。Q5用于要求更高精度的任务（法律、医疗分析）：损失0.5%，节省69%。' }
          },
          {
            '@type': 'Question',
            'name': '量化会影响推理速度吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '量化通常提升速度。Q4在GPU上运行比FP32快30-50%（因为较小的权重缓存和更快的矩阵乘法）。实际速度取决于VRAM与GPU带宽的平衡。' }
          },
          {
            '@type': 'Question',
            'name': '什么是K-quant（Q4_K_M、Q5_K_M）？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'K-quant是GGML中的一个改进，针对不同权重选择不同的量化级别。Q4_K_M为中等，Q4_K_S为小型（更快，更节省），Q4_K_L为大型（更精确）。大多数用户应该使用_K_M（平衡点）。' }
          },
          {
            '@type': 'Question',
            'name': '可以在不同量化级别之间切换吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '可以。如果您有FP32或GGUF模型，可以使用llama-cpp-python或GPTQ对其重新量化。这个过程需要几分钟，根据模型大小而定。您不需要删除旧版本。' }
          },
          {
            '@type': 'Question',
            'name': '中国部署时如何处理数据合规性？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '根据中国《数据安全法》（2021），个人数据和敏感业务数据必须存储在中国境内。本地推理（LLM在本地GPU上运行）完全符合合规性。对于金融、医疗、教育部门，建议使用国产模型如Qwen2.5或通义千问，并在阿里云、腾讯云或华为云上部署。' }
          }
        ]
      },
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '量化是什么', anchor: '#what-is-quantization' },
        { label: '量化级别对比', anchor: '#quantization-levels' },
        { label: '按硬件选择', anchor: '#choose-by-hardware' },
        { label: '质量vs速度权衡', anchor: '#tradeoffs' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '中国部署合规指南', anchor: '#china-compliance' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        'key-takeaways': {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Q4是标准选择：** 损失1.2%精度，节省75% VRAM。适合Q4_K_M量化的Llama 3 8B在16GB上运行完美。',
            '**8GB→Q3/Q4（仅7B模型），16GB→Q4_K_M，32GB+→Q5/Q8**。更多VRAM=运行更大模型，不是更高量化。',
            '**质量损失几乎不可察觉：** MMLU基准显示Q4仅损失1.2%，相当于100个问题中少1-2个正确。',
            '**推理速度提升：** Q4比FP32快30-50%（更小的权重缓存）。',
            '**中国合规：** 数据必须在国内存储。使用本地推理+国产模型（Qwen2.5）完全符合《数据安全法》。',
          ],
        },
        'what-is-quantization': {
          title: '量化是什么？',
          content: [
            '量化是将32位浮点权重（FP32）压缩为较少位数（Q8 = 8位，Q4 = 4位）的过程。',
            '一个70B模型：',
            '- **FP32：** 280GB（不实用）',
            '- **Q8：** 140GB（50%节省）',
            '- **Q5：** 88GB（69%节省）',
            '- **Q4：** 70GB（75%节省）←最常见',
            '- **Q3：** 53GB（81%节省，仅在VRAM严重受限时使用）',
            '',
            '**权衡点：** 每减少1个比特，精度损失翻倍增加。Q4在VRAM节省（75%）与精度（1.2%损失）之间达到完美平衡。',
          ],
        },
        'quantization-levels': {
          title: '量化级别对比：Q2到Q8',
          content: [
            '基准：Llama 3 70B FP32在MMLU上精度85.2%。',
          ],
          rows: [
            {
              '量化': 'FP32',
              '模型大小': '280GB',
              '精度': '85.2%（基准）',
              'VRAM节省': '0%',
              '最佳用途': '研究、完美再现'
            },
            {
              '量化': 'Q8',
              '模型大小': '140GB',
              '精度': '85.1%（-0.1%）',
              'VRAM节省': '50%',
              '最佳用途': '医疗、法律（高精度）'
            },
            {
              '量化': 'Q5',
              '模型大小': '88GB',
              '精度': '84.7%（-0.5%）',
              'VRAM节省': '69%',
              '最佳用途': '专业分析、高精度任务'
            },
            {
              '量化': 'Q4（推荐）',
              '模型大小': '70GB',
              '精度': '84.0%（-1.2%）',
              'VRAM节省': '75%',
              '最佳用途': '聊天、代码生成、摘要'
            },
            {
              '量化': 'Q3',
              '模型大小': '53GB',
              '精度': '81.5%（-3.7%）',
              'VRAM节省': '81%',
              '最佳用途': '仅当VRAM极度受限'
            },
            {
              '量化': 'Q2',
              '模型大小': '35GB',
              '精度': '75.2%（-10%）',
              'VRAM节省': '87%',
              '最佳用途': '不推荐'
            }
          ],
          columns: ['量化', '模型大小', '精度', 'VRAM节省', '最佳用途'],
          image: '/images/quantization-levels-comparison-quality-loss-zh.svg',
          imageCaption: '量化级别对精度的影响（MMLU基准）',
        },
        'choose-by-hardware': {
          title: '按硬件选择量化',
          content: [],
          image: '/images/quantization-levels-comparison-hardware-guide-zh.svg',
          imageCaption: '根据VRAM选择量化级别',
        },
        'tradeoffs': {
          title: 'VRAM节省 vs 精度：Q4不可察觉',
          content: [
            '**Q4在VRAM与精度之间的完美平衡：**',
            '- **VRAM节省：** 75%（70GB vs 280GB FP32）',
            '- **精度损失：** 仅1.2%（84.0% vs 85.2%）',
            '- **可察觉程度：** 极小——相当于100个问题中少1-2个正确',
            '',
            '对于实际应用（聊天、代码、摘要）：',
            '- Q4与Q8输出几乎相同',
            '- 人类评价者难以区分',
            '- 任务成功率没有实际差异',
            '',
            '**何时选择Q5（或Q6/Q8）：**',
            '- 法律文件分析（需要100%准确）',
            '- 医学诊断支持（关键任务）',
            '- 金融建模（数值精度至关重要）',
            '- 有>32GB VRAM且不想妥协',
          ],
          image: '/images/quantization-levels-comparison-vram-savings-zh.svg',
          imageCaption: 'VRAM节省对比：Q4节省75%，精度损失仅1.2%',
        },
        'common-mistakes': {
          title: '常见错误',
          numberedItems: [
            '**用Q8运行小模型而非用Q4运行大模型**。错误：Llama 3 7B Q8（16GB）vs 正确：Llama 3 8B Q4（7GB）。Q4中更大的模型通常质量更好。',
            '**忽略K-quant（Q4_K_M）**。Q4_K_M比标准Q4快10-20%且精度更高。总是使用K-quant版本。',
            '**在没有实际验证的情况下假设Q5总是更好**。Q4与Q5的差异在标准任务上不可察觉。除非在关键任务上，否则选Q4以节省VRAM。',
            '**混淆模型大小和量化**。误认为"70B Q4太大"。实际上70B Q4 = 70GB，只需32GB+硬件（使用offload）。',
            '**没有考虑CPU vRAM卸载**。如果GPU VRAM不足，CPU RAM可以卸载权重层（slowdown 10-20%但可行）。',
            '**未为中国部署考虑合规性**。在中国运行敏感数据（金融、医疗）需要《数据安全法》合规性——使用本地推理+国产模型。',
          ],
        },
        'china-compliance': {
          title: '中国部署合规指南',
          content: [
            '**《中华人民共和国数据安全法》（2021）要求：**',
            '- 个人数据和关键信息基础设施相关数据必须在中国境内存储',
            '- 数据跨境传输需要安全评估',
            '- 金融、教育、医疗、电信等关键部门数据不得跨国',
            '',
            '**本地LLM推理如何帮助合规：**',
            '- 数据永不离开中国（在本地GPU/CPU上运行）',
            '- 无云API调用，无远程数据发送',
            '- 完全控制模型和推理过程',
            '',
            '**推荐中国部署方案：**',
            '- **模型：** Qwen2.5、通义千问或百川（国产开源模型）',
            '- **量化：** Q4或Q5（平衡精度和成本）',
            '- **硬件：** RTX 4090/A100 + 64GB RAM（支持Q5），或RTX 4060 + 16GB（Q4）',
            '- **基础设施：** 阿里云ACK、腾讯云TKE或自建GPU集群',
            '- **成本：** 单服务器$2,500硬件 + $50-100/月电费 vs 云API$1,000+/月',
            '',
            '**亚太地区数据跨境框架：**',
            '- 日本：《个人信息保护法（APPI）》允许某些类型的跨境传输，但建议本地处理敏感数据',
            '- 新加坡/泰国：PDPA / PDPT允许特定用途的跨境，但医疗/金融必须本地化',
            '- 韩国：PIPA要求国内存储关键信息',
            '- 越南：民法第25条要求个人数据本地存储',
            '',
            '**企业部署（金融、医疗、法律）：**',
            '- 银行与保险：完全本地推理（Q4或更高）用于信用评分、欺诈检测',
            '- 医院与诊所：Q5或Q8用于病历分析、诊断支持（需要高精度）',
            '- 律师事务所：Q4用于合同分析、判例检索（快速即可）',
            '- 合规部门：实施审计日志、访问控制、数据加密以满足监管要求',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            {
              q: '什么是LLM量化，为什么重要？',
              a: '量化将32位浮点权重（FP32）压缩为8位（Q8）或4位（Q4），减少模型大小75-84%。这使得在消费级GPU（8-16GB VRAM）上运行大型模型成为可能。精度损失最小（Q4损失<1.2%），速度提升（Q4比FP32快30-50%）。'
            },
            {
              q: '8GB RAM应该用什么量化？',
              a: '8GB VRAM仅支持7B模型，建议使用Q3或Q4。示例：Mistral 7B-Q4约占4.2GB VRAM，适合聊天应用。更大的模型会导致内存不足错误。'
            },
            {
              q: '16GB RAM最佳选择是什么？',
              a: '16GB VRAM最适合Q4_K_M量化。可以运行Llama 3 8B-Q4（~7GB VRAM），质量>99%，速度20-40 tokens/sec。这是大多数用户的最佳点。'
            },
            {
              q: '32GB RAM应该用什么量化？',
              a: '32GB VRAM支持更大的模型和更高的量化。推荐Q5、Q6或Q8。示例：Llama 3 70B-Q5约占88GB × 0.5 = 44GB VRAM（需要分散到多个GPU），质量>99.5%。'
            },
            {
              q: 'Q4的精度损失真的可以接受吗？',
              a: '在MMLU基准上，Q4损失仅为1.2%（85.2% → 84.0%）。这相当于每100个问题中少1-2个正确答案。对于聊天、代码生成、摘要等任务，这种损失几乎不可察觉。'
            },
            {
              q: '如何选择Q4还是Q5？',
              a: '通常选择能放入您VRAM的最大模型的最低量化级别。Q4为标准：损失1.2%，节省75%。Q5用于要求更高精度的任务（法律、医疗分析）：损失0.5%，节省69%。'
            },
            {
              q: '量化会影响推理速度吗？',
              a: '量化通常提升速度。Q4在GPU上运行比FP32快30-50%（因为较小的权重缓存和更快的矩阵乘法）。实际速度取决于VRAM与GPU带宽的平衡。'
            },
            {
              q: '什么是K-quant（Q4_K_M、Q5_K_M）？',
              a: 'K-quant是GGML中的一个改进，针对不同权重选择不同的量化级别。Q4_K_M为中等，Q4_K_S为小型（更快，更节省），Q4_K_L为大型（更精确）。大多数用户应该使用_K_M（平衡点）。'
            },
            {
              q: '可以在不同量化级别之间切换吗？',
              a: '可以。如果您有FP32或GGUF模型，可以使用llama-cpp-python或GPTQ对其重新量化。这个过程需要几分钟，根据模型大小而定。您不需要删除旧版本。'
            },
            {
              q: '中国部署时如何处理数据合规性？',
              a: '根据中国《数据安全法》（2021），个人数据和敏感业务数据必须存储在中国境内。本地推理（LLM在本地GPU上运行）完全符合合规性。对于金融、医疗、教育部门，建议使用国产模型如Qwen2.5或通义千问，并在阿里云、腾讯云或华为云上部署。'
            }
          ],
        },
        'relatedReading': {
          title: '相关阅读',
          items: [
            '[如何安装Ollama——完整指南](/local-llms/how-to-install-ollama?lang=zh) — 安装开源LLM运行时，支持所有量化级别',
            '[LLM硬件指南：GPU、RAM、存储对比](/local-llms/local-llm-hardware-guide-2026?lang=zh) — 选择适合8B、70B、405B模型的硬件',
            '[LM Studio与Ollama对比](/local-llms/lm-studio-vs-ollama?lang=zh) — 对比不同推理框架的量化支持',
            '[量化感知训练(QAT)与后训练量化(PTQ)](/local-llms/quantization-aware-training?lang=zh) — 量化原理深度探讨',
            '[中国数据安全法与本地AI部署](/local-llms/china-data-security-local-ai?lang=zh) — 中国企业的合规指南',
            '[vLLM + 量化推理优化](/local-llms/vllm-quantization-optimization?lang=zh) — 生产环境性能优化',
          ],
        },
        'sources': {
          title: '来源与参考',
          items: [
            '[GGML量化规范——Github](https://github.com/ggerganov/ggml) — llama.cpp和GGUF量化实现的技术文档',
            '[Q4_K_M vs Q4基准测试——HuggingFace论坛](https://huggingface.co/docs/transformers/v4.36.0/en/main_classes/quantization) — 不同K-quant变体的精度对比',
            '[MMLU基准——OpenAI Evals](https://github.com/openai/evals) — 57个推理任务上Q4/Q8/FP32精度测量',
            '[Llama 3模型卡——Meta AI](https://huggingface.co/meta-llama/Meta-Llama-3-70B) — 量化级别跨度精度规格',
            '[量化感知深度神经网络（arXiv 2024）](https://arxiv.org/abs/2401.01781) — 量化误差界限和K-quant方法论研究',
            '[中国《数据安全法》——全文](http://www.npc.gov.cn/npc/c30834/202108/4f3b7d62c1da44e8b0f6ad98c12ae3ee.shtml) — 中国关键数据保护法规',
          ],
        },
      },
    },
  };
